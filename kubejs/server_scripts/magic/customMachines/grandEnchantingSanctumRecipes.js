//priority: 1
// runs before tier scripts (priority 0), so forEachRecipe only sees vanilla/mod-added recipes.
// any ars_nouveau:enchanting_apparatus recipe added by a tier script needs a manual addEnchantingRecipe call below.

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

    event.remove({ id: 'ars_nouveau:imbuement_lapis'});
    event.remove({ id: 'ars_nouveau:imbuement_amethyst'});
    event.remove({ id: 'ars_nouveau:imbuement_amethyst_block'});

    let index = 1

    event.forEachRecipe({ type: 'ars_nouveau:enchanting_apparatus' }, recipe => {
        const crecipe = JSON.parse(recipe.json.toString())
        addEnchantingRecipe(event, crecipe, index)
        index++
    })

    // manual mirrors for recipes defined in tier scripts (not caught by forEachRecipe above)
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
    }, index++)

    addEnchantingRecipe(event, {
        reagent: [{ item: 'ars_nouveau:magebloom_crop'}],
        output: { item: 'botania:pure_daisy'},
        sourceCost: 10000,
        pedestalItems: [
            {item: { item: `gtceu:holy_silver_dust`}},
            {item: { item: `gtceu:prima_materia_rod`}},
            {item: { item: `mysticalagriculture:earth_essence`}},
            {item: { item: `mysticalagriculture:earth_essence`}},
        ]
    }, index++)

    addEnchantingRecipe(event, {
        reagent: [{ item: 'minecraft:bucket'}],
        output: { item: 'gtceu:concepts_bucket'},
        sourceCost: 5000,
        pedestalItems: [
            {item: { item: `gtceu:prima_materia_block`}},
            {item: { item: `minecraft:experience_bottle`}},
            {item: { item: `minecraft:experience_bottle`}},
            {item: { item: `hexcasting:charged_amethyst`}},
        ]
    }, index++)

    addEnchantingRecipe(event, {
        reagent: [{ item: 'ars_nouveau:novice_spell_book'}],
        output: { item: 'ars_nouveau:apprentice_spell_book'},
        sourceCost: 3500,
        pedestalItems: [
            {item: { item: `gtceu:holy_silver_foil`}},
            {item: { item: `ars_nouveau:magebloom_fiber`}},
            {item: { item: `ars_nouveau:blank_parchment`}},
            {item: { item: `ars_nouveau:blank_parchment`}},
        ]
    }, index++)

    const elements = [
        "air",
        "earth",
        "fire",
        "water"
    ]

    elements.forEach(element => {
        addEnchantingRecipe(event, {
        reagent: [{ item: 'ars_nouveau:magebloom_crop'}],
        output: { item: `mysticalagriculture:${element}_seeds`},
        sourceCost: 5500,
        pedestalItems: [
            { item: { item: `ars_nouveau:${element}_essence`, count: 4 } },
            { item: { item: `mysticalagriculture:${element}_agglomeratio`, count: 4 } }
        ]
    }, index++)
    })

    addEnchantingRecipe(event, {
        reagent: [{ item: "gtceu:holy_silver_ingot" }],
        output: { item: "kubejs:chaos_essence"},
        sourceCost: 6000,
        pedestalItems: [
            {item: { item: 'mysticalagriculture:air_essence'}},
            {item: { item: 'mysticalagriculture:earth_essence'}},
            {item: { item: 'mysticalagriculture:water_essence'}},
            {item: { item: 'mysticalagriculture:fire_essence'}},
            {item: { item: "gtceu:source_block", count: 4 } }
        ]
    }, index++)

    addEnchantingRecipe(event, {
        reagent: [{ item: "minecraft:fishing_rod" }],
        output: { item: "reliquary:rod_of_lyssa"},
        sourceCost: 2500,
        pedestalItems: [
            {item: { item: 'ars_nouveau:source_gem'}},
            {item: { item: 'ars_nouveau:magebloom_fiber'}},
            {item: { item: "irons_spellbooks:nature_rune", count: 2 } }
        ]
    }, index++)

    addEnchantingRecipe(event, {
        reagent: [{ item: "gtceu:silver_dust" }],
        output: { item: "kubejs:holy_silver_blend"},
        sourceCost: 2000,
        pedestalItems: [
            {item: { item: "gtceu:ambrosium_dust", count: 2 } },
            {item: { item: "gtceu:luminessence_dust", count: 2 } }
        ]
    }, index++)

    addEnchantingRecipe(event, {
        reagent: [{ item: "gtceu:holy_silver_dust" }],
        output: { item: "gtceu:holy_silver_ingot"},
        sourceCost: 3000,
        pedestalItems: [
            {item: { item: "ars_nouveau:fire_essence", count: 1 } }
        ]
    }, index++)

    addEnchantingRecipe(event, {
        reagent: [{ item: "kubejs:florid_compound" }],
        output: { item: "kubejs:living_metalloid"},
        sourceCost: 30000,
        pedestalItems: [
            {item: { item: 'minecraft:clock'}},
            {item: { item: 'mysticalagriculture:nature_essence'}},
            {item: { item: 'mysticalagriculture:water_essence'}},
            {item: { item: 'reliquary:fertile_essence'}}
        ]
    }, index++)

    addEnchantingRecipe(event, {
        reagent: [{ item: "kubejs:elementite_dust" }],
        output: { item: "kubejs:raw_elementite"},
        sourceCost: 15000,
        pedestalItems: [
            {item: { item: 'gtceu:abstract_metal_ingot' }}
        ]
    }, index++)

    addEnchantingRecipe(event, {
        reagent: [{ item: "kubejs:soul_of_gaia" }],
        output: { item: "kubejs:boundless_gaia_spirit_ingot"},
        sourceCost: 20000,
        pedestalItems: [
            {item: { item: 'botania:elementium_block', count: 8 }}
        ]
    }, index++)

    // Abstract Metal multi-element synthesis
    addEnchantingRecipe(event, {
        reagent: [{ item: 'gtceu:abstract_metal_ingot' }],
        output: { item: 'gtceu:bismuth_ingot' },
        sourceCost: 3000,
        pedestalItems: [
            { tag: 'kubejs:fire_essences' },
            { tag: 'kubejs:water_essences' }
        ]
    }, index++)
    addEnchantingRecipe(event, {
        reagent: [{ item: 'gtceu:abstract_metal_ingot' }],
        output: { item: 'minecraft:copper_ingot' },
        sourceCost: 3000,
        pedestalItems: [
            { tag: 'kubejs:fire_essences' },
            { tag: 'kubejs:earth_essences' }
        ]
    }, index++)
    addEnchantingRecipe(event, {
        reagent: [{ item: 'gtceu:abstract_metal_ingot' }],
        output: { item: 'gtceu:silver_ingot' },
        sourceCost: 3000,
        pedestalItems: [
            { tag: 'kubejs:water_essences' },
            { tag: 'kubejs:air_essences' }
        ]
    }, index++)
    addEnchantingRecipe(event, {
        reagent: [{ item: 'gtceu:abstract_metal_ingot' }],
        output: { item: 'gtceu:magnesium_ingot' },
        sourceCost: 3000,
        pedestalItems: [
            { tag: 'kubejs:earth_essences' },
            { tag: 'kubejs:air_essences' }
        ]
    }, index++)
    addEnchantingRecipe(event, {
        reagent: [{ item: 'gtceu:abstract_metal_ingot' }],
        output: { item: 'gtceu:holy_silver_ingot' },
        sourceCost: 4000,
        pedestalItems: [
            { tag: 'kubejs:water_essences' },
            { tag: 'kubejs:air_essences' },
            { tag: 'forge:gems/ambrosium' }
        ]
    }, index++)

    // Sorcerer QoL: raw source ore -> source gem
    addEnchantingRecipe(event, {
        reagent: [{ item: 'gtceu:raw_source' }],
        output: { item: 'ars_nouveau:source_gem' },
        sourceCost: 3000,
        pedestalItems: [
            { tag: 'kubejs:water_essences' },
            { tag: 'kubejs:fire_essences' }
        ]
    }, index++)
})