
let $ForgeRegistries = Java.loadClass("net.minecraftforge.registries.ForgeRegistries")
const ManaCap = Java.loadClass('com.icbg.core.recipe.mana.ManaRecipeCapability').CAP

let _nextRunicIndex = 1

function stripNamespace(str) {
    const colon = str.indexOf(':')
    return colon === -1 ? str : str.slice(colon + 1)
}

function manaToTicks(mana) {
    return Math.min(1200, Math.max(100, Math.round(mana / 100)))
}

function agglomerationTicks(mana) {
    return Math.min(2400, Math.max(600, Math.round(mana / 2500)))
}

function resolveRunicIngredient(ing, debugLabel) {
    if (Array.isArray(ing)) {
        for (let i = 0; i < ing.length; i++) {
            let resolved = resolveRunicIngredient(ing[i], `${debugLabel}[${i}]`)
            if (resolved) return resolved
        }
        console.warn(`[runic_forge] no valid item in alternation at ${debugLabel}`)
        return null
    }

    if (typeof ing === 'string') {
        if (ing.startsWith('#')) return `1x #${ing.slice(1)}`
        if (!$ForgeRegistries.ITEMS.getValue(ing)) {
            console.warn(`[runic_forge] skipping non-existent item '${ing}' at ${debugLabel}`)
            return null
        }
        return `1x ${ing}`
    }

    const count = ing.count || 1

    if (ing.tag) {
        return `${count}x #${ing.tag}`
    }

    if (ing.item) {
        const itemId = typeof ing.item === 'string' ? ing.item : ing.item.item
        if (!$ForgeRegistries.ITEMS.getValue(itemId)) {
            console.warn(`[runic_forge] skipping non-existent item '${itemId}' at ${debugLabel}`)
            return null
        }
        return `${count}x ${itemId}`
    }

    console.warn(`[runic_forge] unrecognised ingredient shape at ${debugLabel}: ${JSON.stringify(ing)}`)
    return null
}

function addRunicAltarRecipe(event, crecipe) {
    const index = _nextRunicIndex++
    const output = crecipe.output
    const outputId = typeof output === 'string' ? output : output.item
    const outputCount = output.count || 1
    const mana = crecipe.mana || 0
    const safeId = stripNamespace(outputId).replace(/[^a-z0-9_]/g, '_').toLowerCase()
    const dur = manaToTicks(mana)

    event.custom({
        type: 'botania:runic_altar',
        ingredients: crecipe.ingredients,
        mana: mana,
        output: output
    }).id('kubejs:runic_altar_' + safeId + '_' + index)

    const itemInputs = []
    for (let i = 0; i < crecipe.ingredients.length; i++) {
        let resolved = resolveRunicIngredient(crecipe.ingredients[i], outputId + '[' + i + ']')
        if (resolved) itemInputs.push(resolved)
    }

    const gt = event.recipes.gtceu.runic_forge('runic_forge/' + safeId + '_' + index)
        .itemOutputs(outputCount + 'x ' + outputId)
        .duration(dur)
        .perTick(true)
        .input(ManaCap, Math.round(mana / dur))
        .perTick(false)
        .EUt(euForMana(mana, RunicAltar))
    itemInputs.forEach(input => gt.itemInputs(input))
}

function addTerraPlateRecipe(event, crecipe) {
    const index = _nextRunicIndex++
    const result = crecipe.result
    const outputId = typeof result === 'string' ? result : result.item
    const outputCount = result.count || 1
    const mana = crecipe.mana || 0
    const safeId = stripNamespace(outputId).replace(/[^a-z0-9_]/g, '_').toLowerCase()
    const dur = agglomerationTicks(mana)

    event.custom({
        type: 'botania:terra_plate',
        ingredients: crecipe.ingredients,
        mana: mana,
        result: result
    }).id('kubejs:terra_plate_' + safeId + '_' + index)

    const itemInputs = []
    for (let i = 0; i < crecipe.ingredients.length; i++) {
        let resolved = resolveRunicIngredient(crecipe.ingredients[i], outputId + '[' + i + ']')
        if (resolved) itemInputs.push(resolved)
    }

    const gt = event.recipes.gtceu.terra_agglomeration('terra_agglomeration/' + safeId + '_' + index)
        .itemOutputs(outputCount + 'x ' + outputId)
        .duration(dur)
        .perTick(true)
        .input(ManaCap, Math.round(mana / dur))
        .perTick(false)
        .EUt(euForMana(mana, Agglomeration))
    itemInputs.forEach(input => gt.itemInputs(input))
}

global.addRunicAltarRecipe = addRunicAltarRecipe
global.addTerraPlateRecipe = addTerraPlateRecipe

ServerEvents.recipes(event => {

    event.forEachRecipe({ type: 'botania:runic_altar' }, recipe => {
        const index = _nextRunicIndex++
        const crecipe = JSON.parse(recipe.json.toString())

        const output = crecipe.output
        if (!output) { console.warn('[runic_forge] skipping entry ' + index + ': no output'); return }
        const outputId = typeof output === 'string' ? output : output.item
        if (!outputId) { console.warn('[runic_forge] skipping entry ' + index + ': no output item'); return }
        if (!$ForgeRegistries.ITEMS.getValue(outputId)) {
            console.warn('[runic_forge] skipping entry ' + index + ': non-existent output \'' + outputId + '\'')
            return
        }
        const outputCount = output.count || 1
        const mana = crecipe.mana || 0

        const ingredients = crecipe.ingredients || []
        const itemInputs = []
        let skip = false
        for (let i = 0; i < ingredients.length; i++) {
            let resolved = resolveRunicIngredient(ingredients[i], outputId + '[' + i + ']')
            if (!resolved) { skip = true; break }
            itemInputs.push(resolved)
        }
        if (skip || itemInputs.length === 0) return

        const safeId = stripNamespace(outputId).replace(/[^a-z0-9_]/g, '_').toLowerCase()
        console.log('[runic_forge] cloning ' + outputId + ' x' + outputCount + ' mana=' + mana)
        const dur = manaToTicks(mana)

        const gt = event.recipes.gtceu.runic_forge(`runic_forge/clone_${safeId}_${index}`)
            .itemOutputs(`${outputCount}x ${outputId}`)
            .duration(dur)
            .perTick(true)
            .input(ManaCap, Math.round(mana / dur))
            .perTick(false)
            .EUt(euForMana(mana, RunicAltar))

        itemInputs.forEach(input => gt.itemInputs(input))
    })

    event.forEachRecipe({ type: 'botania:terra_plate' }, recipe => {
        const index = _nextRunicIndex++
        const crecipe = JSON.parse(recipe.json.toString())

        const result = crecipe.result
        if (!result) { console.warn('[runic_forge] skipping terra_plate entry ' + index + ': no result'); return }
        const outputId = typeof result === 'string' ? result : result.item
        if (!outputId) { console.warn('[runic_forge] skipping terra_plate entry ' + index + ': no result item'); return }
        if (!$ForgeRegistries.ITEMS.getValue(outputId)) {
            console.warn('[runic_forge] skipping terra_plate entry ' + index + ': non-existent output \'' + outputId + '\'')
            return
        }
        const outputCount = result.count || 1
        const mana = crecipe.mana || 0

        const ingredients = crecipe.ingredients || []
        const itemInputs = []
        let skip = false
        for (let i = 0; i < ingredients.length; i++) {
            let resolved = resolveRunicIngredient(ingredients[i], outputId + '[' + i + ']')
            if (!resolved) { skip = true; break }
            itemInputs.push(resolved)
        }
        if (skip || itemInputs.length === 0) return

        const safeId = stripNamespace(outputId).replace(/[^a-z0-9_]/g, '_').toLowerCase()
        console.log('[runic_forge] terra_agglomeration cloning ' + outputId + ' x' + outputCount + ' mana=' + mana)
        const dur = agglomerationTicks(mana)

        const gt = event.recipes.gtceu.terra_agglomeration(`terra_agglomeration/clone_${safeId}_${index}`)
            .itemOutputs(`${outputCount}x ${outputId}`)
            .duration(dur)
            .perTick(true)
            .input(ManaCap, Math.round(mana / dur))
            .perTick(false)
            .EUt(euForMana(mana, Agglomeration))

        itemInputs.forEach(input => gt.itemInputs(input))
    })

    event.recipes.gtceu.assembler('runic_forge_controller')
        .itemInputs(
            '4x gtceu:terra_iridite_plate',
            '1x gtceu:terra_iridite_frame',
            '1x botania:runic_altar',
            '1x gtceu:luv_electric_pump',
            '1x gtceu:luv_sensor',
            '1x #gtceu:circuits/luv'
        )
        .inputFluids(Fluid.of('gtceu:soldering_alloy', 288))
        .itemOutputs('1x gtceu:runic_forge')
        .duration(400)
        .EUt(GTValues.VA[GTValues.LuV])

    event.recipes.gtceu.assembler('runic_forge_casing_assembly')
        .itemInputs(
            '4x gtceu:terra_iridite_plate',
            '4x gtceu:terra_iridite_rod',
            '1x botania:livingrock_bricks',
            '1x #gtceu:circuits/luv'
        )
        .inputFluids(Fluid.of('gtceu:lubricant', 50))
        .itemOutputs('8x kubejs:runic_forge_casing')
        .duration(200)
        .EUt(GTValues.VA[GTValues.LuV])

})
