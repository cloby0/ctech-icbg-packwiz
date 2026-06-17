//priority: 1
// runs before tier scripts (priority 0), so forEachRecipe only sees vanilla/mod-added recipes.
// tier scripts call addEnchantingRecipe directly to add both apparatus and sanctum recipes.

let $ForgeRegistries = Java.loadClass("net.minecraftforge.registries.ForgeRegistries");

let _nextEnchantingIndex = 1

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
        console.error(`[enchanting_apparatus] null entry at ${debugLabel}`)
        return null
    }

    if (typeof entry === 'string') {
        if (entry.startsWith('#')) return `1x #${entry.slice(1)}`
        if (!$ForgeRegistries.ITEMS.getValue(entry)) {
            console.warn(`[enchanting_apparatus] skipping non-existent item '${entry}' at ${debugLabel}`)
            return null
        }
        return `1x ${entry}`
    }

    let inner = (entry.item !== undefined || entry.tag !== undefined) ? entry : null

    if (inner === null) {
        console.error(`[enchanting_apparatus] unrecognised entry shape at ${debugLabel}: ${JSON.stringify(entry)}`)
        return null
    }

    let resolved = inner
    if (typeof resolved.item === 'object' && resolved.item !== null) {
        resolved = resolved.item
    }

    let count = resolved.count || 1

    if (resolved.tag) {
        return `${count}x #${resolved.tag}`
    } else if (typeof resolved.item === 'string') {
        if (!$ForgeRegistries.ITEMS.getValue(resolved.item)) {
            console.warn(`[enchanting_apparatus] skipping non-existent item '${resolved.item}' at ${debugLabel}`)
            return null
        }
        return `${count}x ${resolved.item}`
    }

    console.error(`[enchanting_apparatus] could not resolve item at ${debugLabel}: ${JSON.stringify(entry)}`)
    return null
}

function normalizeForApparatus(p) {
    if (typeof p === 'string') return p.startsWith('#') ? { tag: p.slice(1) } : { item: p }
    if (p.tag !== undefined) return { tag: p.tag }
    if (p.item !== undefined) {
        if (typeof p.item === 'object' && p.item !== null) {
            let inner = p.item
            if (inner.tag) return { tag: inner.tag }
            let result = { item: inner.item }
            if (inner.count && inner.count > 1) result.count = inner.count
            return result
        }
        return { item: p.item }
    }
    return p
}

function addEnchantingRecipe(event, crecipe) {
    let index = _nextEnchantingIndex++
    let outputId = crecipe.output?.item ?? crecipe.output ?? null
    if (!outputId || typeof outputId !== 'string') {
        console.warn(`[enchanting_apparatus] skipping recipe at index ${index} with null/non-string output '${outputId}'`)
        return
    }
    if (!$ForgeRegistries.ITEMS.getValue(outputId)) {
        console.warn(`[enchanting_apparatus] skipping recipe with non-existent output '${outputId}'`)
        return
    }
    let outputCount = crecipe.output?.count || 1

    let sourceCost = Math.max(crecipe.sourceCost || 0, 100)

    let reagents = Array.isArray(crecipe.reagent) ? crecipe.reagent : [crecipe.reagent]
    let reagentInputs = []
    for (let i = 0; i < reagents.length; i++) {
        let r = resolveItem(reagents[i], `index ${index} reagent[${i}]`)
        if (r) reagentInputs.push(r)
    }

    let pedestalItems = crecipe.pedestalItems ?? []
    let pedestalInputs = []
    for (let i = 0; i < pedestalItems.length; i++) {
        let p = resolveItem(pedestalItems[i], `index ${index} pedestal[${i}]`)
        if (p) pedestalInputs.push(p)
    }

    if (reagentInputs.length === 0) {
        console.error(`[enchanting_apparatus] skipping index ${index} (${outputId}): no consumable reagent inputs`)
        return
    }

    if (!crecipe.skipApparatus) {
        let apparatusReagents = reagents.map(r => normalizeForApparatus(r))
        let apparatusPedestals = pedestalItems.map(p => normalizeForApparatus(p))
        let outputObj = { item: outputId }
        if (outputCount > 1) outputObj.count = outputCount
        event.custom({
            type: 'ars_nouveau:enchanting_apparatus',
            reagent: apparatusReagents,
            pedestalItems: apparatusPedestals,
            output: outputObj,
            sourceCost: sourceCost
        }).id(`kubejs:apparatus_${stripNamespace(outputId)}_${index}`)
    }

    let recipeId = `ars_nouveau/enchanting_apparatus_${stripNamespace(outputId)}_${index}`
    console.log(`[enchanting_apparatus] building index=${index} output=${outputId} source=${sourceCost}`)

    let r = event.recipes.gtceu.enchanting_sanctum(recipeId)
        .duration(sourceRound(sourceCost) * 2)
        .EUt(1920 + Math.round(sourceCost / 25))
        .itemOutputs(`${outputCount}x ${outputId}`)

    if (sourceCost > 0) {
        r.inputFluids(Fluid.of('starbunclemania:source_fluid', sourceCost))
    }

    reagentInputs.forEach(reagent => r.itemInputs(reagent))
    pedestalInputs.forEach(pedestal => r.itemInputs(pedestal))
}

global.addEnchantingRecipe = addEnchantingRecipe

ServerEvents.recipes(event => {
    event.remove({ mod: 'ars_n_spells' })

    event.remove({ id: 'ars_nouveau:imbuement_lapis'});
    event.remove({ id: 'ars_nouveau:imbuement_amethyst'});
    event.remove({ id: 'ars_nouveau:imbuement_amethyst_block'});
    event.remove({ type: 'gtceu:imbuement_factory', output: 'ars_nouveau:source_gem' });
    event.remove({ type: 'gtceu:imbuement_factory', output: 'ars_nouveau:source_gem_block' });

    event.forEachRecipe({ type: 'ars_nouveau:enchanting_apparatus' }, recipe => {
        const crecipe = JSON.parse(recipe.json.toString())
        addEnchantingRecipe(event, { ...crecipe, skipApparatus: true })
    })

    event.recipes.gtceu.assembler('grand_enchanting_sanctum_controller')
        .itemInputs(
            '4x gtceu:consecrated_chromite_plate',
            '2x gtceu:consecrated_chromite_frame',
            '1x ars_nouveau:source_gem',
            '1x gtceu:hv_electric_pump',
            '1x gtceu:hv_sensor',
            '1x #gtceu:circuits/hv'
        )
        .inputFluids(Fluid.of('gtceu:soldering_alloy', 144))
        .itemOutputs('1x gtceu:grand_enchanting_sanctum')
        .duration(400)
        .EUt(GTValues.VA[GTValues.HV])

    event.recipes.gtceu.assembler('sanctum_sourcestone_casing_assembly')
        .itemInputs(
            '4x gtceu:consecrated_chromite_plate',
            '4x gtceu:consecrated_chromite_rod',
            '1x ars_nouveau:sourcestone_large_bricks',
            '1x #gtceu:circuits/hv'
        )
        .inputFluids(Fluid.of('gtceu:lubricant', 50))
        .itemOutputs('8x kubejs:sanctum_sourcestone_casing')
        .duration(200)
        .EUt(GTValues.VA[GTValues.HV])
})
