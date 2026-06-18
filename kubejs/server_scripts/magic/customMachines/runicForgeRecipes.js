//priority: -1
// runs after tier scripts (priority 0) so forEachRecipe catches vanilla AND custom runic_altar/terra_plate recipes
// (thaumaturge.js removes vanilla terrasteel and adds living_metalloid variants before this runs)

let $ForgeRegistries = Java.loadClass("net.minecraftforge.registries.ForgeRegistries")

let _nextRunicIndex = 1

function stripNamespace(str) {
    const colon = str.indexOf(':')
    return colon === -1 ? str : str.slice(colon + 1)
}

function manaToTicks(mana) {
    return Math.max(Math.round(mana / 100), 20) * 2
}

// resolves a single Botania ingredient entry to a GT itemInputs string
// handles: {item}, {tag}, [{item},{item}] alternation arrays (picks first valid)
function resolveRunicIngredient(ing, debugLabel) {
    if (Array.isArray(ing)) {
        for (let i = 0; i < ing.length; i++) {
            let resolved = resolveRunicIngredient(ing[i], `${debugLabel}[${i}]`)
            if (resolved) return resolved
        }
        console.warn(`[runic_forge] no valid item in alternation at ${debugLabel}`)
        return null
    }

    // KubeJS may normalize ingredients to plain strings: "#tag" or "modid:item"
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

ServerEvents.recipes(event => {

    const LuV_EU = GTValues.VA[GTValues.LuV]

    event.forEachRecipe({ type: 'botania:runic_altar' }, recipe => {
        const index = _nextRunicIndex++
        const crecipe = JSON.parse(recipe.json.toString())
        const recipeId = recipe.id

        const output = crecipe.output
        if (!output) { console.warn(`[runic_forge] skipping ${recipeId}: no output`); return }
        const outputId = typeof output === 'string' ? output : output.item
        if (!outputId) { console.warn(`[runic_forge] skipping ${recipeId}: no output item`); return }
        if (!$ForgeRegistries.ITEMS.getValue(outputId)) {
            console.warn(`[runic_forge] skipping ${recipeId}: non-existent output '${outputId}'`)
            return
        }
        const outputCount = output.count || 1
        const mana = crecipe.mana || 0

        const ingredients = crecipe.ingredients || []
        const itemInputs = []
        let skip = false
        for (let i = 0; i < ingredients.length; i++) {
            let resolved = resolveRunicIngredient(ingredients[i], `${recipeId}[${i}]`)
            if (!resolved) { skip = true; break }
            itemInputs.push(resolved)
        }
        if (skip || itemInputs.length === 0) return

        const safeId = stripNamespace(recipeId).replace(/\//g, '_')
        console.log(`[runic_forge] cloning ${recipeId} → ${outputCount}x ${outputId}, mana=${mana}`)

        const gt = event.recipes.gtceu.runic_forge(`runic_forge/clone_${safeId}_${index}`)
            .inputFluids(Fluid.of('starbunclemania:source_fluid', mana))
            .itemOutputs(`${outputCount}x ${outputId}`)
            .duration(manaToTicks(mana))
            .EUt(LuV_EU)

        itemInputs.forEach(input => gt.itemInputs(input))
    })

    event.forEachRecipe({ type: 'botania:terra_plate' }, recipe => {
        const index = _nextRunicIndex++
        const crecipe = JSON.parse(recipe.json.toString())
        const recipeId = recipe.id

        // terra_plate uses "result" not "output"
        const result = crecipe.result
        if (!result) { console.warn(`[runic_forge] skipping terra_plate ${recipeId}: no result`); return }
        const outputId = typeof result === 'string' ? result : result.item
        if (!outputId) { console.warn(`[runic_forge] skipping terra_plate ${recipeId}: no result item`); return }
        if (!$ForgeRegistries.ITEMS.getValue(outputId)) {
            console.warn(`[runic_forge] skipping terra_plate ${recipeId}: non-existent output '${outputId}'`)
            return
        }
        const outputCount = result.count || 1
        const mana = crecipe.mana || 0

        const ingredients = crecipe.ingredients || []
        const itemInputs = []
        let skip = false
        for (let i = 0; i < ingredients.length; i++) {
            let resolved = resolveRunicIngredient(ingredients[i], `${recipeId}[${i}]`)
            if (!resolved) { skip = true; break }
            itemInputs.push(resolved)
        }
        if (skip || itemInputs.length === 0) return

        const safeId = stripNamespace(recipeId).replace(/\//g, '_')
        const duration = mana >= 1000000 ? 1200 : 600
        console.log(`[runic_forge] terra_agglomeration cloning ${recipeId} → ${outputCount}x ${outputId}, mana=${mana}`)

        const gt = event.recipes.gtceu.terra_agglomeration(`terra_agglomeration/clone_${safeId}_${index}`)
            .inputFluids(Fluid.of('starbunclemania:source_fluid', mana))
            .itemOutputs(`${outputCount}x ${outputId}`)
            .duration(duration)
            .EUt(LuV_EU)

        itemInputs.forEach(input => gt.itemInputs(input))
    })

    // controller block
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
