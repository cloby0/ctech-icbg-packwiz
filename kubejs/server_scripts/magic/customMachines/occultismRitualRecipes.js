// Mirror helper for Occultism crafting rituals. Field set verified against
// occultism-1.20.1-1.158.0.jar, data/occultism/recipes/ritual/.
// Writes raw event.custom JSON, which is what magic/occultism.js already does.

let $ForgeRegistries = Java.loadClass("net.minecraftforge.registries.ForgeRegistries");

let _occultismRitualIndex = 0

// Voltage per pentacle tier for the Spirit Binding Engine mirror. Deliberately lands each tier
// at or before the point its rituals are actually needed -- afrit is ZPM so the wraithware
// circuit line (UV-UIV) arrives with its ritual gate already automatable, not simultaneously.
// Tier names, not GTValues lookups -- this object is built at file-load time, before GTValues
// is guaranteed bound. Resolved lazily in _mirrorToSpiritEngine instead.
let _spiritEngineTier = {
    foliot: 'LuV',
    djinni: 'LuV',
    afrit: 'ZPM',
    marid: 'UV',
}

// Occultism ingredient entries are {item} or {tag}; GT wants '<count>x <id>' / '<count>x #<tag>'.
function _spiritEngineInput(entry, debugLabel) {
    if (!entry) return null
    let count = entry.count || 1
    if (entry.tag) return `${count}x #${entry.tag}`
    let id = entry.item ?? entry.id ?? null
    if (!id) {
        console.warn(`[spirit_binding_engine] unknown ingredient shape at ${debugLabel}`)
        return null
    }
    if (!$ForgeRegistries.ITEMS.getValue(id)) {
        console.warn(`[spirit_binding_engine] skipping non-existent item '${id}' at ${debugLabel}`)
        return null
    }
    return `${count}x ${id}`
}

// Emits the optional GT route alongside the real ritual. Never replaces it -- if anything here
// bails, the occultism:ritual above still stands on its own.
function _mirrorToSpiritEngine(event, name, tier, ritualDummyId, ingredients, output, duration) {
    let tierName = _spiritEngineTier[tier]
    if (tierName === undefined) {
        console.warn(`[spirit_binding_engine] no voltage mapped for pentacle tier '${tier}' (${name}), skipping GT mirror`)
        return
    }
    let voltage = GTValues[tierName]

    let inputs = (ingredients || [])
        .map(e => _spiritEngineInput(e, name))
        .filter(e => e !== null)
    if (inputs.length !== (ingredients || []).length) {
        console.warn(`[spirit_binding_engine] ${name}: dropped an ingredient, skipping GT mirror`)
        return
    }

    // Ritual dummy is the machine's program, same as the real ritual consuming it off the bowl.
    inputs.push(`1x ${ritualDummyId}`)
    if (inputs.length > 9) {
        console.warn(`[spirit_binding_engine] ${name}: ${inputs.length} inputs exceeds 9, skipping GT mirror`)
        return
    }

    let r = event.recipes.gtceu.spirit_binding_engine(`spirit_binding/${name}`)
        .itemOutputs(typeof output === 'object' ? `${output.count || 1}x ${output.item}` : `1x ${output}`)
        .duration(duration * 4)
        .EUt(GTValues.VA[voltage])
    inputs.forEach(i => r.itemInputs(i))
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

    console.log(`[occultism-ritual] ${index}: ${outputId} tier=${tier}`)
    event.custom({
        type: 'occultism:ritual',
        ritual_type: 'occultism:craft',
        pentacle_id: crecipe.pentacle || ('occultism:craft_' + tier),
        activation_item: { item: 'occultism:book_of_binding_bound_' + tier },
        ritual_dummy: { item: ritualDummyId },
        duration: duration,
        ingredients: crecipe.ingredients,
        result: typeof crecipe.output === 'object' ? crecipe.output : { item: outputId },
    }).id(`kubejs:ritual/${name}`)

    _mirrorToSpiritEngine(event, name, tier, ritualDummyId, crecipe.ingredients, crecipe.output, duration)
}

global.addOccultismRitual = addOccultismRitual

ServerEvents.recipes(event => {

    event.recipes.gtceu.assembler('spirit_binding_engine_controller')
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
        .itemOutputs('1x gtceu:spirit_binding_engine')
        .duration(400)
        .EUt(GTValues.VA[GTValues.LuV])

})
