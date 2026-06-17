//priority: 1
// runs before tier scripts (priority 0), so forEachRecipe only sees vanilla/mod-added imbuement recipes.
// tier scripts call addImbuementRecipe(event, {...}) directly — it adds both chamber and factory recipes.
// if a tier script REMOVES a vanilla ars_nouveau:imbuement recipe, it must ALSO remove the factory mirror:
//   event.remove({ type: 'gtceu:imbuement_factory', output: 'namespace:item' })
// otherwise the factory will keep a recipe the chamber no longer has.

let $ForgeRegistries = Java.loadClass("net.minecraftforge.registries.ForgeRegistries");

let _nextImbuementIndex = 1

function stripNamespace(str) {
    const colon = str.indexOf(':')
    return colon === -1 ? str : str.slice(colon + 1)
}

function sourceRound(num) {
    if ((num / 100) > 20) {
        return num / 100
    } else {
        return 20
    }
}

function resolveItem(entry, debugLabel) {
    if (!entry) {
        console.error(`[imbuement] null entry at ${debugLabel}`)
        return null
    }

    let resolved = entry
    if (typeof resolved.item === 'object' && resolved.item !== null) {
        resolved = resolved.item
    }

    let count = resolved.count || 1

    if (resolved.tag) {
        return `${count}x #${resolved.tag}`
    } else if (typeof resolved.item === 'string') {
        if ($ForgeRegistries.ITEMS.getValue(resolved.item)) {
            return `${count}x ${resolved.item}`
        } else {
            console.warn(`[imbuement] skipping non-existent item '${resolved.item}' at ${debugLabel}`)
            return null
        }
    }

    console.error(`[imbuement] could not resolve item at ${debugLabel}: ${JSON.stringify(entry)}`)
    return null
}

// normalizes a pedestal entry to the double-nested format ars_nouveau:imbuement expects in raw JSON:
//   string "item:id"         → { item: { item: "item:id" } }
//   string "#tag:id"         → { item: { tag: "tag:id" } }
//   { item: "item:id" }      → { item: { item: "item:id" } }  (single-nested)
//   { item: { item: "..." } } or { item: { tag: "..." } } → pass through
function normalizePedestal(p) {
    if (typeof p === 'string') {
        return p.startsWith('#') ? { item: { tag: p.slice(1) } } : { item: { item: p } }
    }
    if (typeof p.item === 'string') {
        return { item: { item: p.item } }
    }
    return p
}

// normalizes input to { item: "..." } or { tag: "..." } for both factory resolveItem and chamber JSON
function normalizeInput(i) {
    if (typeof i === 'string') {
        return i.startsWith('#') ? { tag: i.slice(1) } : { item: i }
    }
    return i
}

// adds both a gtceu:imbuement_factory recipe and an ars_nouveau:imbuement chamber recipe.
// set crecipe.skipChamber = true to skip the chamber emit (used for vanilla recipe mirrors).
// input accepts: "item:id", "#tag:id", { item: "..." }, or { tag: "..." }
// pedestalItems accepts: strings, { item: "item:id" }, or { item: { item/tag: "..." } }
// output accepts: "item:id" or { item: "item:id", count: N }; count also accepted as top-level crecipe.count
function addImbuementRecipe(event, crecipe) {
    let index = _nextImbuementIndex++

    let outputRaw = crecipe.output ?? null
    if (!outputRaw) {
        console.error(`[imbuement] no output at index ${index}`)
        return
    }
    let outputId = typeof outputRaw === 'object' ? (outputRaw.item ?? null) : outputRaw
    if (typeof outputId === 'string' && !$ForgeRegistries.ITEMS.getValue(outputId)) {
        console.warn(`[imbuement] skipping recipe with non-existent output '${outputId}'`)
        return
    }
    let outputCount = (typeof outputRaw === 'object' ? outputRaw.count : crecipe.count) || 1

    let sourceCost = Math.max(crecipe.source || 0, 100)

    let rawInput = normalizeInput(crecipe.input)
    let centerInput = resolveItem(rawInput, `index ${index} input`)
    if (!centerInput) {
        console.error(`[imbuement] skipping index ${index}, could not resolve center input`)
        return
    }

    let pedestalItems = crecipe.pedestalItems ?? []
    let normalizedPedestals = pedestalItems.map(p => normalizePedestal(p))

    let pedestalInputs = []
    for (let i = 0; i < normalizedPedestals.length; i++) {
        let inner = normalizedPedestals[i].item ?? normalizedPedestals[i]
        let p = resolveItem(inner, `index ${index} pedestal[${i}]`)
        if (p) pedestalInputs.push(p)
    }

    let recipeId = `ars_nouveau/imbuement_${stripNamespace(outputId)}_${index}`
    console.log(`[imbuement] ${index}: ${outputId} source=${sourceCost} pedestals=${pedestalInputs.length}`)
    let r = event.recipes.gtceu.imbuement_factory(recipeId)
        .inputFluids(Fluid.of('starbunclemania:source_fluid', sourceCost))
        .itemInputs(centerInput)
        .itemOutputs(`${outputCount}x ${outputId}`)
        .duration(sourceRound(sourceCost) * 2)
        .EUt(1920 + Math.round(sourceCost / 25))

    pedestalInputs.forEach(pedestal => r.notConsumable(pedestal))

    if (!crecipe.skipChamber) {
        event.custom({
            type: 'ars_nouveau:imbuement',
            count: outputCount,
            input: rawInput,
            output: outputId,
            pedestalItems: normalizedPedestals,
            source: sourceCost
        }).id(`kubejs:chamber_imbuement_${stripNamespace(outputId)}_${index}`)
    }
}

ServerEvents.recipes(event => {
    // mirror all vanilla/mod ars_nouveau:imbuement recipes to the factory (skipChamber: they already exist)
    event.forEachRecipe({ type: 'ars_nouveau:imbuement' }, recipe => {
        const crecipe = JSON.parse(recipe.json.toString())
        addImbuementRecipe(event, { ...crecipe, skipChamber: true })
    })

    // controller block crafting recipe
    event.recipes.gtceu.assembler('imbuement_factory_controller')
        .itemInputs(
            '4x gtceu:ambrotungstite_plate',
            '2x gtceu:ambrotungstite_frame',
            '1x ars_nouveau:source_gem',
            '1x gtceu:hv_electric_pump',
            '1x gtceu:hv_emitter',
            '1x #gtceu:circuits/hv'
        )
        .inputFluids(Fluid.of('gtceu:soldering_alloy', 144))
        .itemOutputs('1x gtceu:imbuement_factory')
        .duration(400)
        .EUt(GTValues.VA[GTValues.HV])

    event.recipes.gtceu.assembler('imbuement_holystone_casing_assembly')
        .itemInputs(
            '4x gtceu:ambrotungstite_plate',
            '4x gtceu:ambrotungstite_rod',
            '1x aether:holystone_bricks',
            '1x #gtceu:circuits/hv'
        )
        .inputFluids(Fluid.of('gtceu:lubricant', 50))
        .itemOutputs('8x kubejs:imbuement_holystone_casing')
        .duration(200)
        .EUt(GTValues.VA[GTValues.HV])
})