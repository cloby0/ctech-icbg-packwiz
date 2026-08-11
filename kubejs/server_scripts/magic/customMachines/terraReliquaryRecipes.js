// Mirror helper for Botania's Terrestrial Agglomeration ritual (botania:terra_plate, i.e. the
// Terra Plate). Split out of runicForgeRecipes.js (2026-08-12) into its own file to match its own
// dedicated terra_reliquary multiblock -- it used to share runic_forge's casing/recipeTypes.
// Real Mana Pool + Terra Plate ritual is untouched; this is the optional GT lane on top.

let $ForgeRegistries = Java.loadClass("net.minecraftforge.registries.ForgeRegistries")

let _nextTerraIndex = 1

function stripNamespace(str) {
    const colon = str.indexOf(':')
    return colon === -1 ? str : str.slice(colon + 1)
}

function agglomerationTicks(mana) {
    return Math.min(2400, Math.max(600, Math.round(mana / 2500)))
}

function resolveTerraIngredient(ing, debugLabel) {
    if (Array.isArray(ing)) {
        for (let i = 0; i < ing.length; i++) {
            let resolved = resolveTerraIngredient(ing[i], `${debugLabel}[${i}]`)
            if (resolved) return resolved
        }
        console.warn(`[terra_reliquary] no valid item in alternation at ${debugLabel}`)
        return null
    }

    if (typeof ing === 'string') {
        if (ing.startsWith('#')) return `1x #${ing.slice(1)}`
        if (!$ForgeRegistries.ITEMS.getValue(ing)) {
            console.warn(`[terra_reliquary] skipping non-existent item '${ing}' at ${debugLabel}`)
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
            console.warn(`[terra_reliquary] skipping non-existent item '${itemId}' at ${debugLabel}`)
            return null
        }
        return `${count}x ${itemId}`
    }

    console.warn(`[terra_reliquary] unrecognised ingredient shape at ${debugLabel}: ${JSON.stringify(ing)}`)
    return null
}

function addTerraPlateRecipe(event, crecipe) {
    const index = _nextTerraIndex++
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
        let resolved = resolveTerraIngredient(crecipe.ingredients[i], outputId + '[' + i + ']')
        if (resolved) itemInputs.push(resolved)
    }

    const gt = event.recipes.gtceu.terra_agglomeration('terra_agglomeration/' + safeId + '_' + index)
        .itemOutputs(outputCount + 'x ' + outputId)
        .duration(dur)
        .perTick(true)
        .input(global.ManaCap, Math.round(mana / dur))
        .perTick(false)
        .EUt(euForMana(mana, Agglomeration))
    itemInputs.forEach(input => gt.itemInputs(input))
}

global.addTerraPlateRecipe = addTerraPlateRecipe

ServerEvents.recipes(event => {

    event.forEachRecipe({ type: 'botania:terra_plate' }, recipe => {
        const index = _nextTerraIndex++
        const crecipe = JSON.parse(recipe.json.toString())

        const result = crecipe.result
        if (!result) { console.warn('[terra_reliquary] skipping entry ' + index + ': no result'); return }
        const outputId = typeof result === 'string' ? result : result.item
        if (!outputId) { console.warn('[terra_reliquary] skipping entry ' + index + ': no result item'); return }
        if (!$ForgeRegistries.ITEMS.getValue(outputId)) {
            console.warn('[terra_reliquary] skipping entry ' + index + ': non-existent output \'' + outputId + '\'')
            return
        }
        const outputCount = result.count || 1
        const mana = crecipe.mana || 0

        const ingredients = crecipe.ingredients || []
        const itemInputs = []
        let skip = false
        for (let i = 0; i < ingredients.length; i++) {
            let resolved = resolveTerraIngredient(ingredients[i], outputId + '[' + i + ']')
            if (!resolved) { skip = true; break }
            itemInputs.push(resolved)
        }
        if (skip || itemInputs.length === 0) return

        const safeId = stripNamespace(outputId).replace(/[^a-z0-9_]/g, '_').toLowerCase()
        console.log('[terra_reliquary] cloning ' + outputId + ' x' + outputCount + ' mana=' + mana)
        const dur = agglomerationTicks(mana)

        const gt = event.recipes.gtceu.terra_agglomeration(`terra_agglomeration/clone_${safeId}_${index}`)
            .itemOutputs(`${outputCount}x ${outputId}`)
            .duration(dur)
            .perTick(true)
            .input(global.ManaCap, Math.round(mana / dur))
            .perTick(false)
            .EUt(euForMana(mana, Agglomeration))

        itemInputs.forEach(input => gt.itemInputs(input))
    })

    event.recipes.gtceu.assembler('terra_reliquary_controller')
        .itemInputs(
            '4x gtceu:manasteel_plate',
            '2x gtceu:manasteel_frame',
            '1x botania:terrasteel_block',
            '1x botania:livingwood_twig',
            '1x gtceu:hv_electric_pump',
            '1x gtceu:hv_sensor',
            '1x #gtceu:circuits/hv'
        )
        .inputFluids(Fluid.of('gtceu:soldering_alloy', 72))
        .itemOutputs('1x gtceu:terra_reliquary')
        .duration(400)
        .EUt(GTValues.VA[GTValues.HV])

})
