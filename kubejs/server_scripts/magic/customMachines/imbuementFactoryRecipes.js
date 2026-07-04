
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

function _resolveImbuementItem(entry, debugLabel) {
    if (!entry) {
        console.error(`[imbuement] null entry at ${debugLabel}`)
        return null
    }

    if (typeof entry === 'string') {
        if (entry.startsWith('#')) return `1x #${entry.slice(1)}`
        if (!$ForgeRegistries.ITEMS.getValue(entry)) {
            console.warn(`[imbuement] skipping non-existent item '${entry}' at ${debugLabel}`)
            return null
        }
        return `1x ${entry}`
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

function normalizePedestal(p) {
    if (typeof p === 'string') {
        return p.startsWith('#') ? { item: { tag: p.slice(1) } } : { item: { item: p } }
    }
    if (typeof p.item === 'string') {
        return { item: { item: p.item } }
    }
    return p
}

function normalizeInput(i) {
    if (typeof i === 'string') {
        const countMatch = i.match(/^(\d+)x (.+)$/)
        if (countMatch) return { count: parseInt(countMatch[1]), item: countMatch[2] }
        return i.startsWith('#') ? { tag: i.slice(1) } : { item: i }
    }
    return i
}

function addImbuementRecipe(event, crecipe) {
    let index = _nextImbuementIndex++

    let outputRaw = crecipe.output ?? null
    if (!outputRaw) {
        console.error(`[imbuement] no output at index ${index}`)
        return
    }
    let outputId = typeof outputRaw === 'object' ? (outputRaw.item ?? null) : outputRaw
    if (!outputId || typeof outputId !== 'string') {
        console.warn(`[imbuement] skipping recipe at index ${index} with null/non-string output '${outputId}'`)
        return
    }
    if (!$ForgeRegistries.ITEMS.getValue(outputId)) {
        console.warn(`[imbuement] skipping recipe with non-existent output '${outputId}'`)
        return
    }
    let outputCount = (typeof outputRaw === 'object' ? outputRaw.count : crecipe.count) || 1

    let sourceCost = Math.max(crecipe.source || 0, 100)

    let rawInput = normalizeInput(crecipe.input)
    let centerInput = _resolveImbuementItem(rawInput, `index ${index} input`)
    if (!centerInput) {
        console.error(`[imbuement] skipping index ${index}, could not resolve center input`)
        return
    }

    let pedestalItems = crecipe.pedestalItems ?? []
    let normalizedPedestals = pedestalItems.map(p => normalizePedestal(p))

    let pedestalInputs = []
    for (let i = 0; i < normalizedPedestals.length; i++) {
        let inner = normalizedPedestals[i].item ?? normalizedPedestals[i]
        let p = _resolveImbuementItem(inner, `index ${index} pedestal[${i}]`)
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

global.addImbuementRecipe = addImbuementRecipe

const _imbuementMirrorSkip = [
    'ars_nouveau:fire_essence',
    'ars_nouveau:earth_essence',
    'ars_nouveau:air_essence',
    'ars_nouveau:water_essence'
]

ServerEvents.recipes(event => {
    event.forEachRecipe({ type: 'ars_nouveau:imbuement' }, recipe => {
        const crecipe = JSON.parse(recipe.json.toString())
        if (_imbuementMirrorSkip.indexOf(crecipe.output) !== -1) return
        crecipe.skipChamber = true
        addImbuementRecipe(event, crecipe)
    })

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
