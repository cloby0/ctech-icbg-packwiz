
let $ForgeRegistries = Java.loadClass("net.minecraftforge.registries.ForgeRegistries");

let _nextAlchemyTableIndex = 1

function stripNamespace(str) {
    const colon = str.indexOf(':')
    return colon === -1 ? str : str.slice(colon + 1)
}

function lpRound(num) {
    if ((num / 100) > 20) {
        return num / 100
    } else {
        return 20
    }
}

function _resolveAlchemyTableItem(entry, debugLabel) {
    if (!entry) {
        console.error(`[alchemytable] null entry at ${debugLabel}`)
        return null
    }

    if (typeof entry === 'string') {
        if (entry.startsWith('#')) return `1x #${entry.slice(1)}`
        if (!$ForgeRegistries.ITEMS.getValue(entry)) {
            console.warn(`[alchemytable] skipping non-existent item '${entry}' at ${debugLabel}`)
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
            console.warn(`[alchemytable] skipping non-existent item '${resolved.item}' at ${debugLabel}`)
            return null
        }
    }

    console.error(`[alchemytable] could not resolve item at ${debugLabel}: ${JSON.stringify(entry)}`)
    return null
}

function normalizeAlchemyInput(i) {
    if (typeof i === 'string') return i
    if (i.tag) return `#${i.tag}`
    if (i.item) return i.count > 1 ? `${i.count}x ${i.item}` : i.item
    return i
}

// crecipe: { output: 'item:id' | { item, count }, input: ['item:a', '#tag:b', ...],
//            syphon: LP cost, ticks: processing time, upgradeLevel: altar tier 0-4 (default 0) }
function addAlchemyTableRecipe(event, crecipe) {
    let index = _nextAlchemyTableIndex++

    let outputRaw = crecipe.output ?? null
    if (!outputRaw) {
        console.error(`[alchemytable] no output at index ${index}`)
        return
    }
    let outputId = typeof outputRaw === 'object' ? (outputRaw.item ?? null) : outputRaw
    if (!outputId || typeof outputId !== 'string') {
        console.warn(`[alchemytable] skipping recipe at index ${index} with null/non-string output '${outputId}'`)
        return
    }
    if (!$ForgeRegistries.ITEMS.getValue(outputId)) {
        console.warn(`[alchemytable] skipping recipe with non-existent output '${outputId}'`)
        return
    }
    let outputCount = (typeof outputRaw === 'object' ? outputRaw.count : crecipe.count) || 1

    let syphon = Math.max(crecipe.syphon || 0, 1)
    let ticks = crecipe.ticks || 100
    let upgradeLevel = crecipe.upgradeLevel || 0

    let rawInputs = crecipe.input ?? []
    let inputItems = []
    for (let i = 0; i < rawInputs.length; i++) {
        let resolved = _resolveAlchemyTableItem(rawInputs[i], `index ${index} input[${i}]`)
        if (resolved) inputItems.push(resolved)
    }

    if (inputItems.length === 0) {
        console.error(`[alchemytable] skipping index ${index} (${outputId}): no consumable inputs`)
        return
    }

    if (!crecipe.skipTable) {
        let tableInputs = rawInputs.map(i => normalizeAlchemyInput(i))
        let tableOutput = outputCount > 1 ? { item: outputId, count: outputCount } : outputId
        event.recipes.bloodmagic.alchemytable(tableOutput, tableInputs)
            .syphon(syphon)
            .ticks(ticks)
            .upgradeLevel(upgradeLevel)
            .id(`kubejs:alchemytable_${stripNamespace(outputId)}_${index}`)
    }

    let recipeId = `bloodmagic/alchemytable_${stripNamespace(outputId)}_${index}`
    console.log(`[alchemytable] ${index}: ${outputId} syphon=${syphon} upgradeLevel=${upgradeLevel}`)
    let r = event.recipes.gtceu.enchanting_sanctum(recipeId)
        .inputFluids(Fluid.of('bloodmagic:life_essence_fluid', syphon))
        .itemOutputs(`${outputCount}x ${outputId}`)
        .duration(lpRound(syphon) * 2)
        .EUt(1920 + Math.round(syphon / 25))

    inputItems.forEach(item => r.itemInputs(item))
}

global.addAlchemyTableRecipe = addAlchemyTableRecipe

ServerEvents.recipes(event => {
    event.forEachRecipe({ type: 'bloodmagic:alchemytable' }, recipe => {
        const crecipe = JSON.parse(recipe.json.toString())
        crecipe.skipTable = true
        addAlchemyTableRecipe(event, crecipe)
    })

    event.recipes.gtceu.assembler('grand_enchanting_sanctum_controller')
        .itemInputs(
            '4x gtceu:consecrated_chromite_plate',
            '2x gtceu:consecrated_chromite_frame',
            '1x bloodmagic:weakbloodorb',
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
            '1x bloodmagic:largebloodstonebrick',
            '1x #gtceu:circuits/hv'
        )
        .inputFluids(Fluid.of('gtceu:lubricant', 50))
        .itemOutputs('8x kubejs:sanctum_sourcestone_casing')
        .duration(200)
        .EUt(GTValues.VA[GTValues.HV])
})
