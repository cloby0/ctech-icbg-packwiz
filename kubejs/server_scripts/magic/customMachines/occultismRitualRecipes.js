// Mirror helper for Occultism crafting rituals. Field set verified against
// occultism-1.20.1-1.158.0.jar, data/occultism/recipes/ritual/.
// Writes raw event.custom JSON, which is what magic/occultism.js already does.

let $ForgeRegistries = Java.loadClass("net.minecraftforge.registries.ForgeRegistries");
const LpCap = Java.loadClass('com.icbg.core.recipe.lp.LpRecipeCapability').CAP

let _occultismRitualIndex = 0

function stripNamespace(str) {
    const colon = str.indexOf(':')
    return colon === -1 ? str : str.slice(colon + 1)
}

// Voltage per pentacle tier for the Eternal Soul Compression Unit mirror. Deliberately lands each tier
// at or before the point its rituals are actually needed -- afrit is ZPM so the wraithware
// circuit line (UV-UIV) arrives with its ritual gate already automatable, not simultaneously.
// Tier names, not GTValues lookups -- this object is built at file-load time, before GTValues
// is guaranteed bound. Resolved lazily in _mirrorToSoulCompressor instead.
let _soulCompressionTier = {
    foliot: 'LuV',
    djinni: 'LuV',
    afrit: 'ZPM',
    marid: 'UV',
}

// LP side of the same tiering (mana-capability-port.md §5): charges LP, not mana, so pentacle tier
// also drives an LP rate (costTiers.js's LP table, keyed to the voltage's magic-tier analog above)
// and an orb_tier permission gate. Orb tiers only span 5 steps against 11 magic tiers, so bucket two
// magic tiers per orb tier (three for the top bucket) rather than inventing a finer orb ladder.
let _soulCompressionMagicTier = {
    foliot: 'THAUMATURGE',
    djinni: 'THAUMATURGE',
    afrit: 'ARCANIST',
    marid: 'SAGE',
}
let _orbTierForMagicTier = {
    HOBBYIST: 1, APPRENTICE: 1,
    JOURNEYMAN: 2, INITIATE: 2,
    SORCERER: 3, ALCHEMIST: 3,
    THAUMATURGE: 4, ARCANIST: 4,
    SAGE: 5, PROPHET: 5, ASCENDANT: 5
}

// Occultism ingredient entries are {item} or {tag}; GT wants '<count>x <id>' / '<count>x #<tag>'.
// A Forge ingredient may also be an OR-list of alternatives -- GT has no OR for loose items, so
// take the first branch rather than dropping the whole recipe.
function _soulCompressionInput(entry, debugLabel) {
    if (!entry) return null
    if (Array.isArray(entry)) entry = entry[0]
    if (!entry) return null
    let count = entry.count || 1
    if (entry.tag) return `${count}x #${entry.tag}`
    let id = entry.item ?? entry.id ?? null
    if (!id) {
        console.warn(`[soul_compression] unknown ingredient shape at ${debugLabel}`)
        return null
    }
    if (!$ForgeRegistries.ITEMS.getValue(id)) {
        console.warn(`[soul_compression] skipping non-existent item '${id}' at ${debugLabel}`)
        return null
    }
    return `${count}x ${id}`
}

// Pentacle tier from the recipe's own fields. pentacle_id is the primary source
// (occultism:craft_<tier>); activation_item (book_of_binding_bound_<tier>) is the fallback for
// rituals using a non-standard pentacle.
function _pentacleTier(crecipe) {
    let hay = String(crecipe.pentacle_id || '') + ' ' +
        String((crecipe.activation_item && crecipe.activation_item.item) || '')
    let tiers = ['foliot', 'djinni', 'afrit', 'marid']
    for (let i = 0; i < tiers.length; i++) {
        if (hay.indexOf(tiers[i]) !== -1) return tiers[i]
    }
    return null
}

// Emits the optional GT route alongside the real ritual. Never replaces it -- if anything here
// bails, the occultism:ritual above still stands on its own.
function _mirrorToSoulCompressor(event, name, tier, ingredients, output, duration) {
    let tierName = _soulCompressionTier[tier]
    if (tierName === undefined) {
        console.warn(`[soul_compression] no voltage mapped for pentacle tier '${tier}' (${name}), skipping GT mirror`)
        return
    }
    let voltage = GTValues[tierName]

    let inputs = (ingredients || [])
        .map(e => _soulCompressionInput(e, name))
        .filter(e => e !== null)
    if (inputs.length !== (ingredients || []).length) {
        console.warn(`[soul_compression] ${name}: dropped an ingredient, skipping GT mirror`)
        return
    }

    // No ritual dummy input. Occultism's ritual_dummy items are JEI display placeholders for the
    // pentacle book -- nothing crafts them (neither ours nor Occultism's own ship a recipe) and
    // the real ritual never consumes one. Requiring it made every mirrored recipe uncraftable.
    if (inputs.length === 0) {
        console.warn(`[soul_compression] ${name}: no usable ingredients, skipping GT mirror`)
        return
    }
    if (inputs.length > 9) {
        console.warn(`[soul_compression] ${name}: ${inputs.length} inputs exceeds 9, skipping GT mirror`)
        return
    }

    let lpDuration = duration * 4
    let magicTier = _soulCompressionMagicTier[tier]
    let lpRate = Math.max(1, Math.round(LP[magicTier] / lpDuration))

    let r = event.recipes.gtceu.eternal_soul_compression_unit(`soul_compression/${name}`)
        .itemOutputs(typeof output === 'object' ? `${output.count || 1}x ${output.item}` : `1x ${output}`)
        .duration(lpDuration)
        .perTick(true)
        .input(LpCap, lpRate)
        .perTick(false)
        .EUt(GTValues.VA[voltage])
        .addDataInt('orb_tier', _orbTierForMagicTier[magicTier])
    inputs.forEach(i => r.itemInputs(i))
}

// '#tag' shorthand in `item` must become a real {tag: ...} ingredient, or Occultism's
// deserializer tries to create a ResourceLocation from the literal '#tag' string and crashes.
function _occultismNormalizeIngredients(ingredients) {
    return (ingredients || []).map(e => {
        if (e && e.item && e.item.charAt(0) === '#') {
            return { tag: e.item.slice(1), count: e.count || 1 }
        }
        return e
    })
}

function addOccultismRitual(event, crecipe) {
    let index = _occultismRitualIndex++
    let outputId = typeof crecipe.output === 'object' ? crecipe.output.item : crecipe.output
    if (!outputId || !$ForgeRegistries.ITEMS.getValue(outputId)) {
        console.warn(`[occultism-ritual] skipping ${index}: bad output '${outputId}'`)
        return
    }

    let tier = crecipe.tier || 'foliot'
    let name = crecipe.name
    if (!name || typeof name !== 'string') {
        console.warn(`[occultism-ritual] skipping ${index}: null/non-string name '${name}'`)
        return
    }
    let ritualDummyId = 'kubejs:ritual_dummy_' + name
    if (!$ForgeRegistries.ITEMS.getValue(ritualDummyId)) {
        console.warn(`[occultism-ritual] skipping ${index}: non-existent ritual_dummy '${ritualDummyId}'`)
        return
    }

    let duration = crecipe.duration || 60
    let ingredients = _occultismNormalizeIngredients(crecipe.ingredients)

    console.log(`[occultism-ritual] ${index}: ${outputId} tier=${tier}`)
    event.custom({
        type: 'occultism:ritual',
        ritual_type: 'occultism:craft',
        pentacle_id: crecipe.pentacle || ('occultism:craft_' + tier),
        activation_item: { item: 'occultism:book_of_binding_bound_' + tier },
        ritual_dummy: { item: ritualDummyId },
        duration: duration,
        ingredients: ingredients,
        result: typeof crecipe.output === 'object' ? crecipe.output : { item: outputId },
    }).id(`kubejs:ritual/${name}`)

    _mirrorToSoulCompressor(event, name, tier, ingredients, crecipe.output, duration)
}

global.addOccultismRitual = addOccultismRitual

ServerEvents.recipes(event => {

    // Occultism ships 18 craft rituals of its own. Mirror those too -- an automator that only
    // handles the pack's own additions isn't worth the multiblock. The other 48 rituals
    // (summon/familiar/possess/resurrect) output entities, not items, and are skipped.
    // Recipes we authored are skipped here because addOccultismRitual already mirrored them
    // directly; they are told apart by their kubejs: ritual_dummy namespace.
    event.forEachRecipe({ type: 'occultism:ritual' }, recipe => {
        let crecipe
        try {
            crecipe = JSON.parse(recipe.json.toString())
        } catch (e) {
            console.warn('[soul_compression] unreadable ritual json, skipping')
            return
        }

        if (crecipe.ritual_type !== 'occultism:craft') return

        let dummy = crecipe.ritual_dummy && crecipe.ritual_dummy.item
        if (!dummy) return
        if (String(dummy).startsWith('kubejs:')) return

        let result = crecipe.result
        if (!result || !result.item) {
            console.warn(`[soul_compression] ${dummy}: no item result, skipping`)
            return
        }

        let tier = _pentacleTier(crecipe)
        if (!tier) {
            console.warn(`[soul_compression] ${dummy}: unresolvable pentacle tier, skipping`)
            return
        }

        // Occultism's dummy ids are path-style (occultism:ritual_dummy/craft_soul_gem), so flatten
        // the slash rather than nesting it into the generated recipe id.
        let name = stripNamespace(dummy).replace(/\//g, '_')

        _mirrorToSoulCompressor(event, name, tier,
            crecipe.ingredients, result, crecipe.duration || 60)
    })

    event.recipes.gtceu.assembler('eternal_soul_compression_unit_controller')
        .itemInputs(
            '4x gtceu:starforged_chimerite_plate',
            '4x gtceu:starforged_chimerite_bolt',
            '1x occultism:golden_sacrificial_bowl',
            '1x occultism:dictionary_of_spirits',
            '1x gtceu:luv_field_generator',
            '1x gtceu:luv_sensor',
            '1x #gtceu:circuits/luv'
        )
        .inputFluids(Fluid.of('gtceu:soldering_alloy', 288))
        .itemOutputs('1x gtceu:eternal_soul_compression_unit')
        .duration(400)
        .EUt(GTValues.VA[GTValues.LuV])

})
