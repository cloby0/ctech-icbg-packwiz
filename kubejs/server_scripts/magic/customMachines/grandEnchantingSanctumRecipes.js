//priority: 1

let $ForgeRegistries = Java.loadClass("net.minecraftforge.registries.ForgeRegistries");

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

function addEnchantingRecipe(event, crecipe, index) {
    let outputId = crecipe.output?.item ?? crecipe.output ?? null
    if (!outputId) {
        console.error(`[enchanting_apparatus] no output at index ${index}`)
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

ServerEvents.recipes(event => {
    event.remove({ mod: 'ars_n_spells' })

    let index = 1

    event.forEachRecipe({ type: 'ars_nouveau:enchanting_apparatus' }, recipe => {
        const crecipe = JSON.parse(recipe.json.toString())
        addEnchantingRecipe(event, crecipe, index)
        index++
    })

    // manual recipes go here, same JSON shape as real ones
    // addEnchantingRecipe(event, {
    //     reagent: [{ item: 'minecraft:example' }],
    //     output: { item: 'minecraft:example_output' },
    //     sourceCost: 5000,
    //     pedestalItems: [
    //         { item: { item: 'minecraft:diamond' } },
    //     ]
    // }, index++)

    addEnchantingRecipe(event, {
        reagent: [{ item: 'minecraft:shears'}],
        output: { item: 'reliquary:shears_of_winter'},
        sourceCost: 2500,
        pedestalItems: [
            {item: { item: `minecraft:blue_ice`}},
            {item: { item: `minecraft:blue_ice`}},
            {item: { item: `minecraft:blue_ice`}},
            {item: { item: `minecraft:blue_ice`}},
        ]
    })
        event.recipes.ars_nouveau.enchanting_apparatus(
        [
            "minecraft:blue_ice",
            "#kubejs:water_essences",
            "minecraft:snowball",
            "minecraft:snowball",
        ],
        "minecraft:shears",
        "reliquary:shears_of_winter",
        2500,
    );
})