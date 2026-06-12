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
            {tag: 'kubejs:water_essences'},
            {item: { item: `minecraft:snowball`}},
            {item: { item: `minecraft:snowball`}},
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
            {item: { item: "kubejs:sacred_ambrosium_shard", count: 2 } },
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
        reagent: [{ item: 'mysticalagriculture:nature_essence' }],
        output: { item: 'reliquary:fertile_essence' },
        sourceCost: 15000,
        pedestalItems: [
            {item: { item: 'mysticalagriculture:skeleton_essence' }},
            {item: { item: 'mysticalagriculture:slime_essence' }},
            {item: { item: 'mysticalagriculture:creeper_essence' }},
            { tag: 'kubejs:earth_essences' },
            { tag: 'kubejs:water_essences' }
        ]
    }, index++)

    addEnchantingRecipe(event, {
        reagent: [{ item: 'botania:mana_pearl' }],
        output: { item: 'botania:pixie_dust', count: 3 },
        sourceCost: 15000,
        pedestalItems: [
            {item: { item: 'kubejs:elven_concentrate', count: 2 }},
            { tag: 'kubejs:air_essences' },
            { tag: 'kubejs:air_essences' }
        ]
    }, index++)

    addEnchantingRecipe(event, {
        reagent: [{ item: 'botania:mana_diamond' }],
        output: { item: 'botania:dragonstone', count: 2 },
        sourceCost: 20000,
        pedestalItems: [
            {item: { item: 'kubejs:elven_concentrate', count: 2 }},
            { tag: 'kubejs:earth_essences' },
            { tag: 'kubejs:water_essences' }
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

    addEnchantingRecipe(event, {
        reagent: [{ item: 'botania:elementium_ingot' }],
        output: { item: 'botania:life_essence' },
        sourceCost: 40000,
        pedestalItems: [
            {item: { item: 'mysticalagriculture:gaia_spirit_essence', count: 4 }},
            {item: { item: 'botania:terrasteel_ingot', count: 2 }},
            { tag: 'kubejs:fire_essences' },
            { tag: 'kubejs:air_essences' }
        ]
    }, index++)

    addEnchantingRecipe(event, {
        reagent: [{ item: 'gtceu:abstract_metal_ingot' }],
        output: { item: 'minecraft:gold_ingot' },
        sourceCost: 2000,
        pedestalItems: [
            { tag: 'kubejs:fire_essences' }
        ]
    }, index++)
    addEnchantingRecipe(event, {
        reagent: [{ item: 'gtceu:abstract_metal_ingot' }],
        output: { item: 'gtceu:mercury_bucket' },
        sourceCost: 2000,
        pedestalItems: [
            { tag: 'kubejs:water_essences' }
        ]
    }, index++)
    addEnchantingRecipe(event, {
        reagent: [{ item: 'gtceu:abstract_metal_ingot' }],
        output: { item: 'gtceu:lead_ingot' },
        sourceCost: 2000,
        pedestalItems: [
            { tag: 'kubejs:earth_essences' }
        ]
    }, index++)
    addEnchantingRecipe(event, {
        reagent: [{ item: 'gtceu:abstract_metal_ingot' }],
        output: { item: 'gtceu:aluminium_ingot' },
        sourceCost: 2000,
        pedestalItems: [
            { tag: 'kubejs:air_essences' }
        ]
    }, index++)

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
        output: { item: 'gtceu:magnesium_dust' },
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

    addEnchantingRecipe(event, {
        reagent: [{ item: 'gtceu:raw_source' }],
        output: { item: 'ars_nouveau:source_gem', count: 2 },
        sourceCost: 3000,
        pedestalItems: [
            { tag: 'kubejs:water_essences' },
            { tag: 'kubejs:fire_essences' }
        ]
    }, index++)

    addEnchantingRecipe(event, {
        reagent: [{ item: 'gtceu:raw_source' }],
        output: { item: 'ars_nouveau:source_gem', count: 3 },
        sourceCost: 6000,
        pedestalItems: [
            {item: { item: 'gtceu:prima_materia_ingot' }},
            { tag: 'kubejs:water_essences' },
            { tag: 'kubejs:earth_essences' }
        ]
    }, index++)

    addEnchantingRecipe(event, {
        reagent: [{ item: 'gtceu:raw_source' }],
        output: { item: 'ars_nouveau:source_gem', count: 4 },
        sourceCost: 10000,
        pedestalItems: [
            {item: { item: 'botania:rune_spring' }},
            {item: { item: 'botania:rune_water' }},
            { tag: 'kubejs:water_essences' },
            {item: { item: 'mysticalagriculture:nature_essence' }}
        ]
    }, index++)

    addEnchantingRecipe(event, {
        reagent: [{ item: 'gtceu:raw_source' }],
        output: { item: 'ars_nouveau:source_gem', count: 5 },
        sourceCost: 15000,
        pedestalItems: [
            {item: { item: 'kubejs:elven_concentrate', count: 2 }},
            { tag: 'kubejs:water_essences' },
            { tag: 'kubejs:air_essences' }
        ]
    }, index++)

    // magnum torches — initiate.js
    addEnchantingRecipe(event, { reagent: [{ item: 'minecraft:amethyst_shard' }], output: { item: 'magnumtorch:amethyst_magnum_torch' }, sourceCost: 1500, pedestalItems: [{item:{item:'gtceu:holy_silver_rod'}},{item:{item:'gtceu:luminessence_dust'}},{item:{item:'gtceu:luminessence_dust'}},{item:{item:'aether:ambrosium_shard'}}] }, index++)
    addEnchantingRecipe(event, { reagent: [{ item: 'minecraft:emerald' }], output: { item: 'magnumtorch:emerald_magnum_torch' }, sourceCost: 2000, pedestalItems: [{item:{item:'gtceu:holy_silver_rod'}},{tag:'forge:gems/source'},{item:{item:'gtceu:luminessence_dust'}},{item:{item:'aether:ambrosium_shard'}}] }, index++)
    addEnchantingRecipe(event, { reagent: [{ item: 'minecraft:diamond' }], output: { item: 'magnumtorch:diamond_magnum_torch' }, sourceCost: 2500, pedestalItems: [{item:{item:'gtceu:holy_silver_plate'}},{tag:'forge:gems/source'},{tag:'forge:gems/source'},{item:{item:'gtceu:luminessence_dust'}}] }, index++)

    // hexcasting — alchemist.js
    addEnchantingRecipe(event, { reagent: [{ item: 'minecraft:leather' }], output: { item: 'hexcasting:focus' }, sourceCost: 3000, pedestalItems: [{item:{item:'botania:manasteel_ingot'}},{item:{item:'botania:manasteel_ingot'}},{item:{item:'kubejs:hexed_amethyst_core'}},{item:{item:'minecraft:glowstone'}},{item:{item:'minecraft:glowstone'}}] }, index++)
    addEnchantingRecipe(event, { reagent: [{ item: 'minecraft:writable_book' }], output: { item: 'hexcasting:spellbook' }, sourceCost: 5000, pedestalItems: [{item:{item:'botania:manasteel_ingot'}},{item:{item:'botania:manasteel_ingot'}},{item:{item:'kubejs:hexed_amethyst_core'}},{item:{item:'gtceu:abstract_metal_ingot'}},{item:{item:'minecraft:chorus_fruit'}}] }, index++)
    addEnchantingRecipe(event, { reagent: [{ tag: 'minecraft:music_discs' }], output: { item: 'hexcasting:artifact' }, sourceCost: 4000, pedestalItems: [{item:{item:'botania:manasteel_ingot'}},{item:{item:'botania:manasteel_ingot'}},{item:{item:'kubejs:hexed_amethyst_core'}},{item:{item:'kubejs:hexed_amethyst_core'}},{item:{item:'gtceu:abstract_metal_ingot'}}] }, index++)
    addEnchantingRecipe(event, { reagent: [{ item: 'minecraft:amethyst_shard' }], output: { item: 'hex_ars_link:linker_base' }, sourceCost: 3000, pedestalItems: [{item:{item:'botania:manasteel_ingot'}},{item:{item:'botania:manasteel_ingot'}},{item:{item:'kubejs:hexed_amethyst_core'}},{item:{item:'kubejs:hexed_amethyst_core'}}] }, index++)

    // legendary spellbooks — ironsSpellbooks.js
    addEnchantingRecipe(event, { reagent: [{ item: 'irons_spellbooks:netherite_spell_book' }], output: { item: 'legendary_spellbooks:annihilators_protocol' }, sourceCost: 40000, pedestalItems: [{item:{item:'irons_spellbooks:ender_rune'}},{item:{item:'irons_spellbooks:ender_rune'}},{item:{item:'irons_spellbooks:portal_frame'}},{item:{item:'irons_spellbooks:portal_frame'}},{item:{item:'botania:terrasteel_ingot'}},{tag:'forge:ingots/elementium'},{item:{item:'minecraft:ender_eye'}},{item:{item:'minecraft:ender_eye'}}] }, index++)
    addEnchantingRecipe(event, { reagent: [{ item: 'irons_spellbooks:netherite_spell_book' }], output: { item: 'legendary_spellbooks:stormbound_grimoire' }, sourceCost: 40000, pedestalItems: [{item:{item:'irons_spellbooks:lightning_rune'}},{item:{item:'irons_spellbooks:lightning_rune'}},{item:{item:'irons_spellbooks:energized_core'}},{item:{item:'irons_spellbooks:energized_core'}},{item:{item:'botania:manasteel_ingot'}},{tag:'forge:ingots/elementium'},{item:{item:'irons_spellbooks:lightning_bottle'}},{item:{item:'irons_spellbooks:lightning_bottle'}}] }, index++)

    // cyberspells — cyberSpells.js
    addEnchantingRecipe(event, { reagent: [{ item: 'cyber_ware_port:cyberlimbs_cyberarm_left' }], output: { item: 'cyberspells:rune_arm_left' }, sourceCost: 3000, pedestalItems: [{item:{item:'irons_spellbooks:arcane_ingot'}},{item:{item:'irons_spellbooks:arcane_ingot'}},{item:{item:'irons_spellbooks:arcane_ingot'}},{item:{item:'irons_spellbooks:arcane_ingot'}},{item:{item:'gtceu:holy_silver_dust'}},{item:{item:'gtceu:holy_silver_dust'}}] }, index++)
    addEnchantingRecipe(event, { reagent: [{ item: 'cyber_ware_port:cyberlimbs_cyberarm_right' }], output: { item: 'cyberspells:rune_arm_right' }, sourceCost: 3000, pedestalItems: [{item:{item:'irons_spellbooks:arcane_ingot'}},{item:{item:'irons_spellbooks:arcane_ingot'}},{item:{item:'irons_spellbooks:arcane_ingot'}},{item:{item:'irons_spellbooks:arcane_ingot'}},{item:{item:'gtceu:holy_silver_dust'}},{item:{item:'gtceu:holy_silver_dust'}}] }, index++)
    addEnchantingRecipe(event, { reagent: [{ item: 'cyber_ware_port:cyberlimbs_cyberleg_left' }], output: { item: 'cyberspells:rune_leg_left' }, sourceCost: 3000, pedestalItems: [{item:{item:'irons_spellbooks:arcane_ingot'}},{item:{item:'irons_spellbooks:arcane_ingot'}},{item:{item:'irons_spellbooks:arcane_ingot'}},{item:{item:'irons_spellbooks:arcane_ingot'}},{item:{item:'gtceu:holy_silver_dust'}},{item:{item:'gtceu:holy_silver_dust'}}] }, index++)
    addEnchantingRecipe(event, { reagent: [{ item: 'cyber_ware_port:cyberlimbs_cyberleg_right' }], output: { item: 'cyberspells:rune_leg_right' }, sourceCost: 3000, pedestalItems: [{item:{item:'irons_spellbooks:arcane_ingot'}},{item:{item:'irons_spellbooks:arcane_ingot'}},{item:{item:'irons_spellbooks:arcane_ingot'}},{item:{item:'irons_spellbooks:arcane_ingot'}},{item:{item:'gtceu:holy_silver_dust'}},{item:{item:'gtceu:holy_silver_dust'}}] }, index++)
    addEnchantingRecipe(event, { reagent: [{ item: 'cyber_ware_port:cyberheart' }], output: { item: 'cyberspells:rune_heart' }, sourceCost: 4000, pedestalItems: [{item:{item:'irons_spellbooks:arcane_ingot'}},{item:{item:'irons_spellbooks:arcane_ingot'}},{item:{item:'irons_spellbooks:arcane_ingot'}},{item:{item:'irons_spellbooks:arcane_ingot'}},{item:{item:'gtceu:prima_materia_ingot'}},{item:{item:'gtceu:prima_materia_ingot'}}] }, index++)

    // celestial enchantment catalysts — celestialEnchantments.js
    addEnchantingRecipe(event, { reagent: [{ item: 'nameless_trinkets:ultimate_dust' }], output: { item: 'celestial_enchantments:basic_celestial_catalyst' }, sourceCost: 3000, pedestalItems: [{item:{item:'celestial_core:fire_essence'}},{item:{item:'minecraft:lapis_lazuli'}},{item:{item:'minecraft:gold_ingot'}},{item:{item:'minecraft:amethyst_shard'}},{item:{item:'minecraft:redstone'}},{item:{item:'gtceu:holy_silver_dust'}},{item:{item:'gtceu:holy_silver_dust'}}] }, index++)
    addEnchantingRecipe(event, { reagent: [{ item: 'nameless_trinkets:ultimate_dust' }], output: { item: 'celestial_enchantments:advanced_celestial_catalyst' }, sourceCost: 5000, pedestalItems: [{item:{item:'celestial_enchantments:basic_celestial_catalyst'}},{item:{item:'celestial_enchantments:basic_celestial_catalyst'}},{item:{item:'celestial_core:midnight_fragment'}},{item:{item:'minecraft:diamond'}},{item:{item:'gtceu:prima_materia_ingot'}},{item:{item:'gtceu:prima_materia_ingot'}}] }, index++)
    addEnchantingRecipe(event, { reagent: [{ item: 'nameless_trinkets:ultimate_dust' }], output: { item: 'celestial_enchantments:legendary_celestial_catalyst' }, sourceCost: 7000, pedestalItems: [{item:{item:'celestial_enchantments:advanced_celestial_catalyst'}},{item:{item:'celestial_enchantments:advanced_celestial_catalyst'}},{item:{item:'celestial_core:pure_nether_star'}},{item:{item:'minecraft:netherite_scrap'}},{item:{item:'botania:terrasteel_ingot'}},{item:{item:'botania:terrasteel_ingot'}}] }, index++)

    // nameless trinkets apparatus recipes — namelessTrinkets.js
    addEnchantingRecipe(event, { reagent: [{ item: 'nameless_trinkets:glowing_dust' }], output: { item: 'nameless_trinkets:ultimate_dust' }, sourceCost: 2000, pedestalItems: [{item:{item:'minecraft:ender_eye'}},{item:{item:'gtceu:luminessence_dust'}},{item:{item:'minecraft:ender_eye'}},{item:{item:'gtceu:luminessence_dust'}}] }, index++)
    addEnchantingRecipe(event, { reagent: [{ item: 'nameless_trinkets:ultimate_dust' }], output: { item: 'nameless_trinkets:broken_ankh' }, sourceCost: 2500, pedestalItems: [{item:{item:'minecraft:bone'}},{item:{item:'minecraft:wither_skeleton_skull'}},{item:{item:'minecraft:bone'}},{item:{item:'gtceu:luminessence_dust'}}] }, index++)
    addEnchantingRecipe(event, { reagent: [{ item: 'nameless_trinkets:ultimate_dust' }], output: { item: 'nameless_trinkets:cracked_crown' }, sourceCost: 2500, pedestalItems: [{item:{item:'minecraft:gold_block'}},{item:{item:'minecraft:netherite_scrap'}},{item:{item:'minecraft:gold_block'}},{item:{item:'gtceu:luminessence_dust'}}] }, index++)
    addEnchantingRecipe(event, { reagent: [{ item: 'nameless_trinkets:ultimate_dust' }], output: { item: 'nameless_trinkets:fate_emerald' }, sourceCost: 2500, pedestalItems: [{item:{item:'minecraft:emerald_block'}},{item:{item:'minecraft:bell'}},{item:{item:'minecraft:emerald_block'}},{item:{item:'minecraft:bell'}},{item:{item:'gtceu:luminessence_dust'}},{item:{item:'gtceu:luminessence_dust'}}] }, index++)
    addEnchantingRecipe(event, { reagent: [{ item: 'nameless_trinkets:ultimate_dust' }], output: { item: 'nameless_trinkets:four_leaf_clover' }, sourceCost: 3000, pedestalItems: [{item:{item:'minecraft:diamond_block'}},{item:{item:'minecraft:grass_block'}},{item:{item:'minecraft:diamond_block'}},{item:{item:'minecraft:grass_block'}},{item:{item:'gtceu:luminessence_dust'}},{item:{item:'gtceu:luminessence_dust'}}] }, index++)
    addEnchantingRecipe(event, { reagent: [{ item: 'nameless_trinkets:ultimate_dust' }], output: { item: 'nameless_trinkets:light_gloves' }, sourceCost: 3000, pedestalItems: [{item:{item:'minecraft:gold_block'}},{item:{item:'minecraft:diamond'}},{item:{item:'minecraft:gold_block'}},{item:{item:'minecraft:diamond'}},{item:{item:'gtceu:holy_silver_dust'}},{item:{item:'gtceu:luminessence_dust'}}] }, index++)
    addEnchantingRecipe(event, { reagent: [{ item: 'nameless_trinkets:ultimate_dust' }], output: { item: 'nameless_trinkets:miners_soul' }, sourceCost: 3000, pedestalItems: [{item:{item:'minecraft:blackstone'}},{item:{item:'minecraft:emerald'}},{item:{item:'minecraft:diamond'}},{item:{item:'minecraft:lapis_lazuli'}},{item:{item:'gtceu:luminessence_dust'}}] }, index++)
    addEnchantingRecipe(event, { reagent: [{ item: 'nameless_trinkets:ultimate_dust' }], output: { item: 'nameless_trinkets:rage_mind' }, sourceCost: 3000, pedestalItems: [{item:{item:'minecraft:crying_obsidian'}},{item:{item:'minecraft:diamond'}},{item:{item:'minecraft:magma_block'}},{item:{item:'minecraft:diamond'}},{item:{item:'gtceu:holy_silver_dust'}}] }, index++)
    addEnchantingRecipe(event, { reagent: [{ item: 'nameless_trinkets:ultimate_dust' }], output: { item: 'nameless_trinkets:reforger' }, sourceCost: 2500, pedestalItems: [{item:{item:'minecraft:gold_block'}},{item:{item:'minecraft:iron_block'}},{item:{item:'minecraft:gold_block'}},{item:{item:'minecraft:iron_block'}},{item:{item:'gtceu:luminessence_dust'}}] }, index++)
    addEnchantingRecipe(event, { reagent: [{ item: 'nameless_trinkets:ultimate_dust' }], output: { item: 'nameless_trinkets:reverse_card' }, sourceCost: 2500, pedestalItems: [{item:{item:'minecraft:shield'}},{item:{item:'minecraft:iron_block'}},{item:{item:'minecraft:shield'}},{item:{item:'minecraft:iron_block'}},{item:{item:'gtceu:luminessence_dust'}}] }, index++)
    addEnchantingRecipe(event, { reagent: [{ item: 'nameless_trinkets:ultimate_dust' }], output: { item: 'nameless_trinkets:sigil_of_baphomet' }, sourceCost: 3500, pedestalItems: [{item:{item:'minecraft:obsidian'}},{item:{item:'minecraft:wither_skeleton_skull'}},{item:{item:'minecraft:obsidian'}},{item:{item:'minecraft:netherite_scrap'}},{item:{item:'gtceu:luminessence_dust'}},{item:{item:'gtceu:holy_silver_dust'}}] }, index++)
    addEnchantingRecipe(event, { reagent: [{ item: 'nameless_trinkets:ultimate_dust' }], output: { item: 'nameless_trinkets:true_heart_of_the_sea' }, sourceCost: 4000, pedestalItems: [{item:{item:'minecraft:heart_of_the_sea'}},{item:{item:'nameless_trinkets:gills'}},{item:{item:'nameless_trinkets:tear_of_the_sea'}},{item:{item:'nameless_trinkets:amphibious_hands'}},{item:{item:'gtceu:luminessence_dust'}}] }, index++)

    // artifacts — artifacts.js
    addEnchantingRecipe(event, { reagent: [{ item: 'nameless_trinkets:glowing_dust' }], output: { item: 'artifacts:aqua_dashers' }, sourceCost: 1500, pedestalItems: [{item:{item:'minecraft:leather_boots'}},{item:{item:'minecraft:leather_boots'}},{item:{item:'minecraft:packed_ice'}},{item:{item:'minecraft:packed_ice'}},{item:{item:'gtceu:luminessence_dust'}}] }, index++)
    addEnchantingRecipe(event, { reagent: [{ item: 'nameless_trinkets:glowing_dust' }], output: { item: 'artifacts:bunny_hoppers' }, sourceCost: 1500, pedestalItems: [{item:{item:'minecraft:leather_boots'}},{item:{item:'minecraft:leather_boots'}},{item:{item:'minecraft:slime_ball'}},{item:{item:'minecraft:slime_ball'}},{item:{item:'minecraft:feather'}},{item:{item:'gtceu:luminessence_dust'}}] }, index++)
    addEnchantingRecipe(event, { reagent: [{ item: 'nameless_trinkets:glowing_dust' }], output: { item: 'artifacts:digging_claws' }, sourceCost: 1500, pedestalItems: [{item:{item:'create:iron_sheet'}},{item:{item:'minecraft:iron_ingot'}},{item:{item:'minecraft:iron_ingot'}},{item:{item:'minecraft:flint'}},{item:{item:'minecraft:flint'}},{item:{item:'gtceu:luminessence_dust'}}] }, index++)
    addEnchantingRecipe(event, { reagent: [{ item: 'nameless_trinkets:glowing_dust' }], output: { item: 'artifacts:feral_claws' }, sourceCost: 1500, pedestalItems: [{item:{item:'create:iron_sheet'}},{item:{item:'minecraft:iron_ingot'}},{item:{item:'minecraft:iron_ingot'}},{item:{item:'minecraft:flint'}},{item:{item:'minecraft:feather'}},{item:{item:'gtceu:luminessence_dust'}}] }, index++)
    addEnchantingRecipe(event, { reagent: [{ item: 'nameless_trinkets:glowing_dust' }], output: { item: 'artifacts:fire_gauntlet' }, sourceCost: 2000, pedestalItems: [{item:{item:'minecraft:fire_charge'}},{item:{item:'minecraft:magma_cream'}},{item:{item:'minecraft:magma_cream'}},{item:{item:'minecraft:blaze_rod'}},{item:{item:'minecraft:blaze_rod'}},{item:{item:'gtceu:luminessence_dust'}}] }, index++)
    addEnchantingRecipe(event, { reagent: [{ item: 'nameless_trinkets:glowing_dust' }], output: { item: 'artifacts:pocket_piston' }, sourceCost: 1500, pedestalItems: [{item:{item:'create:iron_sheet'}},{item:{item:'minecraft:piston'}},{item:{item:'minecraft:piston'}},{item:{item:'minecraft:iron_ingot'}},{item:{item:'minecraft:iron_ingot'}},{item:{item:'gtceu:luminessence_dust'}}] }, index++)
    addEnchantingRecipe(event, { reagent: [{ item: 'nameless_trinkets:glowing_dust' }], output: { item: 'artifacts:power_glove' }, sourceCost: 2500, pedestalItems: [{item:{item:'create:iron_sheet'}},{item:{item:'minecraft:iron_block'}},{item:{item:'minecraft:iron_block'}},{item:{item:'minecraft:diamond'}},{item:{item:'minecraft:diamond'}},{item:{item:'gtceu:luminessence_dust'}}] }, index++)
    addEnchantingRecipe(event, { reagent: [{ item: 'nameless_trinkets:glowing_dust' }], output: { item: 'artifacts:scarf_of_invisibility' }, sourceCost: 2000, pedestalItems: [{item:{item:'minecraft:leather'}},{item:{item:'minecraft:phantom_membrane'}},{item:{item:'minecraft:phantom_membrane'}},{item:{item:'minecraft:ender_pearl'}},{item:{item:'minecraft:black_dye'}},{item:{item:'gtceu:luminessence_dust'}}] }, index++)
    addEnchantingRecipe(event, { reagent: [{ item: 'nameless_trinkets:glowing_dust' }], output: { item: 'artifacts:shock_pendant' }, sourceCost: 2000, pedestalItems: [{item:{item:'minecraft:amethyst_shard'}},{item:{item:'minecraft:lightning_rod'}},{item:{item:'minecraft:lightning_rod'}},{item:{item:'minecraft:quartz'}},{item:{item:'minecraft:redstone'}},{item:{item:'gtceu:luminessence_dust'}}] }, index++)
    addEnchantingRecipe(event, { reagent: [{ item: 'nameless_trinkets:glowing_dust' }], output: { item: 'artifacts:thorn_pendant' }, sourceCost: 2000, pedestalItems: [{item:{item:'minecraft:iron_ingot'}},{item:{item:'minecraft:iron_ingot'}},{item:{item:'minecraft:cactus'}},{item:{item:'minecraft:cactus'}},{item:{item:'gtceu:luminessence_dust'}}] }, index++)
    addEnchantingRecipe(event, { reagent: [{ item: 'nameless_trinkets:glowing_dust' }], output: { item: 'artifacts:flame_pendant' }, sourceCost: 2000, pedestalItems: [{item:{item:'minecraft:fire_charge'}},{item:{item:'minecraft:blaze_rod'}},{item:{item:'minecraft:blaze_powder'}},{item:{item:'minecraft:blaze_powder'}},{item:{item:'minecraft:amethyst_shard'}},{item:{item:'gtceu:luminessence_dust'}}] }, index++)
    addEnchantingRecipe(event, { reagent: [{ item: 'nameless_trinkets:glowing_dust' }], output: { item: 'artifacts:cross_necklace' }, sourceCost: 2500, pedestalItems: [{item:{item:'minecraft:totem_of_undying'}},{item:{item:'minecraft:golden_apple'}},{item:{item:'minecraft:diamond'}},{item:{item:'minecraft:diamond'}},{item:{item:'gtceu:luminessence_dust'}}] }, index++)
    addEnchantingRecipe(event, { reagent: [{ item: 'nameless_trinkets:glowing_dust' }], output: { item: 'artifacts:golden_hook' }, sourceCost: 2000, pedestalItems: [{item:{item:'create:golden_sheet'}},{item:{item:'minecraft:gold_block'}},{item:{item:'minecraft:gold_block'}},{item:{item:'minecraft:ender_pearl'}},{item:{item:'minecraft:string'}},{item:{item:'gtceu:luminessence_dust'}}] }, index++)
    addEnchantingRecipe(event, { reagent: [{ item: 'nameless_trinkets:glowing_dust' }], output: { item: 'artifacts:umbrella' }, sourceCost: 1500, pedestalItems: [{item:{item:'minecraft:leather'}},{item:{item:'minecraft:stick'}},{item:{item:'minecraft:stick'}},{item:{item:'minecraft:iron_ingot'}},{item:{item:'minecraft:string'}},{item:{item:'gtceu:luminessence_dust'}}] }, index++)
    addEnchantingRecipe(event, { reagent: [{ item: 'nameless_trinkets:glowing_dust' }], output: { item: 'artifacts:antidote_vessel' }, sourceCost: 1500, pedestalItems: [{item:{item:'minecraft:glass_bottle'}},{item:{item:'minecraft:glass_bottle'}},{item:{item:'minecraft:honey_bottle'}},{item:{item:'minecraft:honey_bottle'}},{item:{item:'gtceu:luminessence_dust'}}] }, index++)
    addEnchantingRecipe(event, { reagent: [{ item: 'nameless_trinkets:glowing_dust' }], output: { item: 'artifacts:pickaxe_heater' }, sourceCost: 1500, pedestalItems: [{item:{item:'create:iron_sheet'}},{item:{item:'minecraft:netherrack'}},{item:{item:'minecraft:flint_and_steel'}},{item:{item:'minecraft:iron_pickaxe'}},{item:{item:'minecraft:coal'}},{item:{item:'gtceu:luminessence_dust'}}] }, index++)
    addEnchantingRecipe(event, { reagent: [{ item: 'nameless_trinkets:glowing_dust' }], output: { item: 'artifacts:anglers_hat' }, sourceCost: 1000, pedestalItems: [{item:{item:'minecraft:leather'}},{item:{item:'minecraft:cod'}},{item:{item:'minecraft:salmon'}},{item:{item:'minecraft:string'}},{item:{item:'minecraft:lily_pad'}},{item:{item:'gtceu:luminessence_dust'}}] }, index++)
    addEnchantingRecipe(event, { reagent: [{ item: 'nameless_trinkets:glowing_dust' }], output: { item: 'artifacts:cowboy_hat' }, sourceCost: 1000, pedestalItems: [{item:{item:'minecraft:leather'}},{item:{item:'minecraft:leather'}},{item:{item:'minecraft:feather'}},{item:{item:'minecraft:gold_ingot'}},{item:{item:'minecraft:string'}},{item:{item:'gtceu:luminessence_dust'}}] }, index++)
    addEnchantingRecipe(event, { reagent: [{ item: 'nameless_trinkets:glowing_dust' }], output: { item: 'artifacts:novelty_drinking_hat' }, sourceCost: 1000, pedestalItems: [{item:{item:'minecraft:leather'}},{item:{item:'minecraft:glass_bottle'}},{item:{item:'minecraft:glass_bottle'}},{item:{item:'minecraft:sugar'}},{item:{item:'minecraft:cactus'}},{item:{item:'gtceu:luminessence_dust'}}] }, index++)
    addEnchantingRecipe(event, { reagent: [{ item: 'nameless_trinkets:glowing_dust' }], output: { item: 'artifacts:plastic_drinking_hat' }, sourceCost: 1000, pedestalItems: [{item:{item:'minecraft:leather'}},{item:{item:'minecraft:glass_bottle'}},{item:{item:'minecraft:glass_bottle'}},{item:{item:'minecraft:sugar'}},{item:{item:'minecraft:string'}},{item:{item:'gtceu:luminessence_dust'}}] }, index++)
    addEnchantingRecipe(event, { reagent: [{ item: 'nameless_trinkets:glowing_dust' }], output: { item: 'artifacts:superstitious_hat' }, sourceCost: 1500, pedestalItems: [{item:{item:'minecraft:leather'}},{item:{item:'minecraft:black_dye'}},{item:{item:'minecraft:black_dye'}},{item:{item:'minecraft:ender_pearl'}},{item:{item:'minecraft:obsidian'}},{item:{item:'gtceu:luminessence_dust'}}] }, index++)
    addEnchantingRecipe(event, { reagent: [{ item: 'nameless_trinkets:glowing_dust' }], output: { item: 'artifacts:villager_hat' }, sourceCost: 1000, pedestalItems: [{item:{item:'minecraft:leather'}},{item:{item:'minecraft:emerald'}},{item:{item:'minecraft:emerald'}},{item:{item:'minecraft:wheat'}},{item:{item:'minecraft:wheat'}},{item:{item:'gtceu:luminessence_dust'}}] }, index++)
    addEnchantingRecipe(event, { reagent: [{ item: 'nameless_trinkets:glowing_dust' }], output: { item: 'artifacts:whoopee_cushion' }, sourceCost: 1000, pedestalItems: [{item:{item:'minecraft:leather'}},{item:{item:'minecraft:slime_ball'}},{item:{item:'minecraft:tnt'}},{item:{item:'minecraft:gunpowder'}},{item:{item:'minecraft:string'}},{item:{item:'gtceu:luminessence_dust'}}] }, index++)
    addEnchantingRecipe(event, { reagent: [{ item: 'nameless_trinkets:ultimate_dust' }], output: { item: 'artifacts:cloud_in_a_bottle' }, sourceCost: 3000, pedestalItems: [{item:{item:'minecraft:glass_bottle'}},{item:{item:'minecraft:white_wool'}},{item:{item:'minecraft:white_wool'}},{item:{item:'minecraft:feather'}},{item:{item:'minecraft:feather'}},{item:{item:'gtceu:holy_silver_dust'}},{item:{item:'gtceu:holy_silver_dust'}}] }, index++)
    addEnchantingRecipe(event, { reagent: [{ item: 'nameless_trinkets:ultimate_dust' }], output: { item: 'artifacts:crystal_heart' }, sourceCost: 4000, pedestalItems: [{item:{item:'minecraft:diamond_block'}},{item:{item:'minecraft:diamond'}},{item:{item:'minecraft:diamond'}},{item:{item:'minecraft:crying_obsidian'}},{item:{item:'minecraft:totem_of_undying'}},{item:{item:'gtceu:holy_silver_dust'}},{item:{item:'gtceu:holy_silver_dust'}}] }, index++)
    addEnchantingRecipe(event, { reagent: [{ item: 'nameless_trinkets:ultimate_dust' }], output: { item: 'artifacts:helium_flamingo' }, sourceCost: 3500, pedestalItems: [{item:{item:'minecraft:glass_bottle'}},{item:{item:'minecraft:feather'}},{item:{item:'minecraft:feather'}},{item:{item:'minecraft:phantom_membrane'}},{item:{item:'minecraft:phantom_membrane'}},{item:{item:'gtceu:holy_silver_dust'}},{item:{item:'gtceu:holy_silver_dust'}}] }, index++)
    addEnchantingRecipe(event, { reagent: [{ item: 'nameless_trinkets:ultimate_dust' }], output: { item: 'artifacts:night_vision_goggles' }, sourceCost: 3000, pedestalItems: [{item:{item:'minecraft:iron_ingot'}},{item:{item:'minecraft:iron_ingot'}},{item:{item:'minecraft:glass'}},{item:{item:'minecraft:glass'}},{item:{item:'minecraft:spider_eye'}},{item:{item:'gtceu:holy_silver_dust'}}] }, index++)
    addEnchantingRecipe(event, { reagent: [{ item: 'nameless_trinkets:ultimate_dust' }], output: { item: 'artifacts:obsidian_skull' }, sourceCost: 4000, pedestalItems: [{item:{item:'minecraft:obsidian'}},{item:{item:'minecraft:obsidian'}},{item:{item:'minecraft:obsidian'}},{item:{item:'minecraft:obsidian'}},{item:{item:'minecraft:magma_cream'}},{item:{item:'gtceu:holy_silver_dust'}},{item:{item:'gtceu:holy_silver_dust'}}] }, index++)
    addEnchantingRecipe(event, { reagent: [{ item: 'nameless_trinkets:ultimate_dust' }], output: { item: 'artifacts:steadfast_spikes' }, sourceCost: 3500, pedestalItems: [{item:{item:'create:iron_sheet'}},{item:{item:'minecraft:iron_block'}},{item:{item:'minecraft:iron_block'}},{item:{item:'minecraft:flint'}},{item:{item:'minecraft:flint'}},{item:{item:'gtceu:holy_silver_dust'}},{item:{item:'gtceu:holy_silver_dust'}}] }, index++)
    addEnchantingRecipe(event, { reagent: [{ item: 'nameless_trinkets:ultimate_dust' }], output: { item: 'artifacts:universal_attractor' }, sourceCost: 4000, pedestalItems: [{item:{item:'minecraft:diamond'}},{item:{item:'minecraft:diamond'}},{item:{item:'minecraft:iron_block'}},{item:{item:'minecraft:ender_pearl'}},{item:{item:'minecraft:ender_pearl'}},{item:{item:'gtceu:holy_silver_dust'}},{item:{item:'gtceu:holy_silver_dust'}}] }, index++)
    addEnchantingRecipe(event, { reagent: [{ item: 'nameless_trinkets:ultimate_dust' }], output: { item: 'artifacts:vampiric_glove' }, sourceCost: 4000, pedestalItems: [{item:{item:'create:golden_sheet'}},{item:{item:'minecraft:redstone_block'}},{item:{item:'minecraft:rotten_flesh'}},{item:{item:'minecraft:fermented_spider_eye'}},{item:{item:'minecraft:diamond'}},{item:{item:'gtceu:holy_silver_dust'}},{item:{item:'gtceu:holy_silver_dust'}}] }, index++)
    addEnchantingRecipe(event, { reagent: [{ item: 'nameless_trinkets:ultimate_dust' }], output: { item: 'artifacts:panic_necklace' }, sourceCost: 3000, pedestalItems: [{item:{item:'minecraft:golden_apple'}},{item:{item:'minecraft:gold_block'}},{item:{item:'minecraft:feather'}},{item:{item:'minecraft:ender_pearl'}},{item:{item:'minecraft:rabbit_foot'}},{item:{item:'gtceu:holy_silver_dust'}}] }, index++)
    addEnchantingRecipe(event, { reagent: [{ item: 'nameless_trinkets:ultimate_dust' }], output: { item: 'artifacts:chorus_totem' }, sourceCost: 5000, pedestalItems: [{item:{item:'minecraft:totem_of_undying'}},{item:{item:'minecraft:chorus_fruit'}},{item:{item:'minecraft:chorus_fruit'}},{item:{item:'minecraft:ender_pearl'}},{item:{item:'minecraft:ender_pearl'}},{item:{item:'gtceu:prima_materia_ingot'}},{item:{item:'gtceu:prima_materia_ingot'}}] }, index++)
    addEnchantingRecipe(event, { reagent: [{ item: 'nameless_trinkets:ultimate_dust' }], output: { item: 'artifacts:everlasting_beef' }, sourceCost: 5000, pedestalItems: [{item:{item:'minecraft:golden_apple'}},{item:{item:'minecraft:cooked_beef'}},{item:{item:'minecraft:cooked_porkchop'}},{item:{item:'minecraft:cooked_chicken'}},{item:{item:'gtceu:prima_materia_ingot'}},{item:{item:'gtceu:prima_materia_ingot'}}] }, index++)

    // relics — relics.js
    addEnchantingRecipe(event, { reagent: [{ item: 'nameless_trinkets:glowing_dust' }], output: { item: 'relics:aqua_walker' }, sourceCost: 1500, pedestalItems: [{item:{item:'minecraft:leather_boots'}},{item:{item:'minecraft:lily_pad'}},{item:{item:'minecraft:lily_pad'}},{item:{item:'minecraft:prismarine_shard'}},{item:{item:'minecraft:prismarine_shard'}},{item:{item:'gtceu:luminessence_dust'}}] }, index++)
    addEnchantingRecipe(event, { reagent: [{ item: 'nameless_trinkets:glowing_dust' }], output: { item: 'relics:amphibian_boot' }, sourceCost: 1500, pedestalItems: [{item:{item:'minecraft:leather'}},{item:{item:'minecraft:nautilus_shell'}},{item:{item:'minecraft:nautilus_shell'}},{item:{item:'minecraft:kelp'}},{item:{item:'minecraft:kelp'}},{item:{item:'gtceu:luminessence_dust'}}] }, index++)
    addEnchantingRecipe(event, { reagent: [{ item: 'nameless_trinkets:glowing_dust' }], output: { item: 'relics:drowned_belt' }, sourceCost: 1500, pedestalItems: [{item:{item:'minecraft:leather'}},{item:{item:'minecraft:prismarine'}},{item:{item:'minecraft:prismarine'}},{item:{item:'minecraft:rotten_flesh'}},{item:{item:'minecraft:kelp'}},{item:{item:'gtceu:luminessence_dust'}}] }, index++)
    addEnchantingRecipe(event, { reagent: [{ item: 'nameless_trinkets:glowing_dust' }], output: { item: 'relics:jellyfish_necklace' }, sourceCost: 1500, pedestalItems: [{item:{item:'minecraft:slime_ball'}},{item:{item:'minecraft:slime_ball'}},{item:{item:'minecraft:feather'}},{item:{item:'minecraft:feather'}},{item:{item:'gtceu:luminessence_dust'}}] }, index++)
    addEnchantingRecipe(event, { reagent: [{ item: 'nameless_trinkets:glowing_dust' }], output: { item: 'relics:ice_breaker' }, sourceCost: 1500, pedestalItems: [{item:{item:'minecraft:packed_ice'}},{item:{item:'minecraft:packed_ice'}},{item:{item:'minecraft:iron_ingot'}},{item:{item:'minecraft:iron_ingot'}},{item:{item:'gtceu:luminessence_dust'}}] }, index++)
    addEnchantingRecipe(event, { reagent: [{ item: 'nameless_trinkets:glowing_dust' }], output: { item: 'relics:magma_walker' }, sourceCost: 1500, pedestalItems: [{item:{item:'minecraft:leather_boots'}},{item:{item:'minecraft:magma_cream'}},{item:{item:'minecraft:magma_cream'}},{item:{item:'minecraft:blaze_powder'}},{item:{item:'minecraft:blaze_powder'}},{item:{item:'gtceu:luminessence_dust'}}] }, index++)
    addEnchantingRecipe(event, { reagent: [{ item: 'nameless_trinkets:glowing_dust' }], output: { item: 'relics:hunter_belt' }, sourceCost: 1500, pedestalItems: [{item:{item:'minecraft:leather'}},{item:{item:'minecraft:feather'}},{item:{item:'minecraft:feather'}},{item:{item:'minecraft:bone'}},{item:{item:'minecraft:bone'}},{item:{item:'gtceu:luminessence_dust'}}] }, index++)
    addEnchantingRecipe(event, { reagent: [{ item: 'nameless_trinkets:glowing_dust' }], output: { item: 'relics:rage_glove' }, sourceCost: 2000, pedestalItems: [{item:{item:'create:iron_sheet'}},{item:{item:'minecraft:iron_ingot'}},{item:{item:'minecraft:iron_ingot'}},{item:{item:'minecraft:spider_eye'}},{item:{item:'minecraft:spider_eye'}},{item:{item:'gtceu:luminessence_dust'}}] }, index++)
    addEnchantingRecipe(event, { reagent: [{ item: 'nameless_trinkets:glowing_dust' }], output: { item: 'relics:bastion_ring' }, sourceCost: 2000, pedestalItems: [{item:{item:'minecraft:gold_ingot'}},{item:{item:'minecraft:gold_ingot'}},{item:{item:'minecraft:blackstone'}},{item:{item:'minecraft:blackstone'}},{item:{item:'gtceu:luminessence_dust'}}] }, index++)
    addEnchantingRecipe(event, { reagent: [{ item: 'nameless_trinkets:glowing_dust' }], output: { item: 'relics:blazing_flask' }, sourceCost: 2000, pedestalItems: [{item:{item:'minecraft:glass_bottle'}},{item:{item:'minecraft:blaze_powder'}},{item:{item:'minecraft:blaze_powder'}},{item:{item:'minecraft:fire_charge'}},{item:{item:'gtceu:luminessence_dust'}}] }, index++)
    addEnchantingRecipe(event, { reagent: [{ item: 'nameless_trinkets:glowing_dust' }], output: { item: 'relics:midnight_robe' }, sourceCost: 2000, pedestalItems: [{item:{item:'minecraft:leather'}},{item:{item:'minecraft:black_dye'}},{item:{item:'minecraft:black_dye'}},{item:{item:'minecraft:ender_pearl'}},{item:{item:'minecraft:obsidian'}},{item:{item:'gtceu:luminessence_dust'}}] }, index++)
    addEnchantingRecipe(event, { reagent: [{ item: 'nameless_trinkets:glowing_dust' }], output: { item: 'relics:holy_locket' }, sourceCost: 2500, pedestalItems: [{item:{item:'minecraft:gold_ingot'}},{item:{item:'minecraft:gold_ingot'}},{item:{item:'minecraft:diamond'}},{item:{item:'minecraft:golden_apple'}},{item:{item:'gtceu:luminessence_dust'}}] }, index++)
    addEnchantingRecipe(event, { reagent: [{ item: 'nameless_trinkets:ultimate_dust' }], output: { item: 'relics:enders_hand' }, sourceCost: 3500, pedestalItems: [{item:{item:'minecraft:ender_pearl'}},{item:{item:'minecraft:ender_pearl'}},{item:{item:'minecraft:phantom_membrane'}},{item:{item:'minecraft:phantom_membrane'}},{item:{item:'gtceu:holy_silver_dust'}},{item:{item:'gtceu:holy_silver_dust'}}] }, index++)
    addEnchantingRecipe(event, { reagent: [{ item: 'nameless_trinkets:ultimate_dust' }], output: { item: 'relics:reflection_necklace' }, sourceCost: 3500, pedestalItems: [{item:{item:'minecraft:prismarine_crystals'}},{item:{item:'minecraft:prismarine_crystals'}},{item:{item:'minecraft:iron_block'}},{item:{item:'minecraft:iron_block'}},{item:{item:'gtceu:holy_silver_dust'}},{item:{item:'gtceu:holy_silver_dust'}}] }, index++)
    addEnchantingRecipe(event, { reagent: [{ item: 'nameless_trinkets:ultimate_dust' }], output: { item: 'relics:shadow_glaive' }, sourceCost: 4000, pedestalItems: [{item:{item:'minecraft:blaze_rod'}},{item:{item:'minecraft:obsidian'}},{item:{item:'minecraft:obsidian'}},{item:{item:'minecraft:iron_ingot'}},{item:{item:'minecraft:iron_ingot'}},{item:{item:'gtceu:holy_silver_dust'}},{item:{item:'gtceu:holy_silver_dust'}}] }, index++)
    addEnchantingRecipe(event, { reagent: [{ item: 'nameless_trinkets:ultimate_dust' }], output: { item: 'relics:magic_mirror' }, sourceCost: 3500, pedestalItems: [{item:{item:'minecraft:glass'}},{item:{item:'minecraft:glass'}},{item:{item:'minecraft:gold_block'}},{item:{item:'minecraft:gold_block'}},{item:{item:'gtceu:holy_silver_dust'}}] }, index++)
    addEnchantingRecipe(event, { reagent: [{ item: 'nameless_trinkets:ultimate_dust' }], output: { item: 'relics:spatial_sign' }, sourceCost: 4000, pedestalItems: [{item:{item:'minecraft:obsidian'}},{item:{item:'minecraft:obsidian'}},{item:{item:'minecraft:ender_eye'}},{item:{item:'minecraft:ender_eye'}},{item:{item:'gtceu:holy_silver_dust'}},{item:{item:'gtceu:holy_silver_dust'}}] }, index++)
    addEnchantingRecipe(event, { reagent: [{ item: 'nameless_trinkets:ultimate_dust' }], output: { item: 'relics:space_dissector' }, sourceCost: 4500, pedestalItems: [{item:{item:'minecraft:diamond'}},{item:{item:'minecraft:diamond'}},{item:{item:'minecraft:crying_obsidian'}},{item:{item:'minecraft:crying_obsidian'}},{item:{item:'gtceu:holy_silver_dust'}},{item:{item:'gtceu:holy_silver_dust'}}] }, index++)
    addEnchantingRecipe(event, { reagent: [{ item: 'nameless_trinkets:ultimate_dust' }], output: { item: 'relics:elytra_booster' }, sourceCost: 5000, pedestalItems: [{item:{item:'minecraft:elytra'}},{item:{item:'minecraft:phantom_membrane'}},{item:{item:'minecraft:phantom_membrane'}},{item:{item:'create:golden_sheet'}},{item:{item:'create:golden_sheet'}},{item:{item:'gtceu:holy_silver_dust'}},{item:{item:'gtceu:holy_silver_dust'}}] }, index++)
    addEnchantingRecipe(event, { reagent: [{ item: 'nameless_trinkets:ultimate_dust' }], output: { item: 'relics:infinity_ham' }, sourceCost: 5000, pedestalItems: [{item:{item:'minecraft:cooked_porkchop'}},{item:{item:'minecraft:cooked_porkchop'}},{item:{item:'minecraft:golden_apple'}},{item:{item:'minecraft:golden_apple'}},{item:{item:'gtceu:holy_silver_dust'}},{item:{item:'gtceu:holy_silver_dust'}}] }, index++)

    // more relics — moreRelics.js
    addEnchantingRecipe(event, { reagent: [{ item: 'nameless_trinkets:glowing_dust' }], output: { item: 'morerelics:guts_orb' }, sourceCost: 2000, pedestalItems: [{item:{item:'minecraft:golden_apple'}},{item:{item:'minecraft:golden_apple'}},{item:{item:'minecraft:obsidian'}},{item:{item:'minecraft:obsidian'}},{item:{item:'gtceu:luminessence_dust'}}] }, index++)
    addEnchantingRecipe(event, { reagent: [{ item: 'nameless_trinkets:glowing_dust' }], output: { item: 'morerelics:opal_necklace' }, sourceCost: 1500, pedestalItems: [{item:{item:'minecraft:amethyst_shard'}},{item:{item:'minecraft:amethyst_shard'}},{item:{item:'minecraft:gold_ingot'}},{item:{item:'minecraft:gold_ingot'}},{item:{item:'gtceu:luminessence_dust'}}] }, index++)
    addEnchantingRecipe(event, { reagent: [{ item: 'nameless_trinkets:glowing_dust' }], output: { item: 'morerelics:bionic_eye' }, sourceCost: 1500, pedestalItems: [{item:{item:'create:iron_sheet'}},{item:{item:'minecraft:glass'}},{item:{item:'minecraft:glass'}},{item:{item:'minecraft:redstone'}},{item:{item:'minecraft:redstone'}},{item:{item:'gtceu:luminessence_dust'}}] }, index++)
    addEnchantingRecipe(event, { reagent: [{ item: 'nameless_trinkets:glowing_dust' }], output: { item: 'morerelics:biojoint' }, sourceCost: 1500, pedestalItems: [{item:{item:'minecraft:iron_ingot'}},{item:{item:'minecraft:iron_ingot'}},{item:{item:'minecraft:slime_ball'}},{item:{item:'minecraft:slime_ball'}},{item:{item:'gtceu:luminessence_dust'}}] }, index++)
    addEnchantingRecipe(event, { reagent: [{ item: 'nameless_trinkets:glowing_dust' }], output: { item: 'morerelics:vertebrax' }, sourceCost: 1500, pedestalItems: [{item:{item:'minecraft:iron_ingot'}},{item:{item:'minecraft:iron_ingot'}},{item:{item:'minecraft:bone'}},{item:{item:'minecraft:bone'}},{item:{item:'gtceu:luminessence_dust'}}] }, index++)
    addEnchantingRecipe(event, { reagent: [{ item: 'nameless_trinkets:glowing_dust' }], output: { item: 'morerelics:sentient_rust' }, sourceCost: 1500, pedestalItems: [{item:{item:'minecraft:iron_ingot'}},{item:{item:'minecraft:iron_ingot'}},{item:{item:'minecraft:flint'}},{item:{item:'minecraft:flint'}},{item:{item:'gtceu:luminessence_dust'}}] }, index++)
    addEnchantingRecipe(event, { reagent: [{ item: 'nameless_trinkets:glowing_dust' }], output: { item: 'morerelics:weavers_spool' }, sourceCost: 2000, pedestalItems: [{item:{item:'morerelics:depleted_spool'}},{item:{item:'minecraft:string'}},{item:{item:'minecraft:string'}},{item:{item:'minecraft:iron_ingot'}},{item:{item:'gtceu:luminessence_dust'}}] }, index++)
    addEnchantingRecipe(event, { reagent: [{ item: 'nameless_trinkets:ultimate_dust' }], output: { item: 'morerelics:shieldweave_cape' }, sourceCost: 3500, pedestalItems: [{item:{item:'minecraft:shield'}},{item:{item:'minecraft:shield'}},{item:{item:'minecraft:iron_block'}},{item:{item:'minecraft:iron_block'}},{item:{item:'gtceu:holy_silver_dust'}},{item:{item:'gtceu:holy_silver_dust'}}] }, index++)
    addEnchantingRecipe(event, { reagent: [{ item: 'nameless_trinkets:ultimate_dust' }], output: { item: 'morerelics:thermoseismic_heart' }, sourceCost: 4000, pedestalItems: [{item:{item:'minecraft:magma_cream'}},{item:{item:'minecraft:magma_cream'}},{item:{item:'minecraft:ice'}},{item:{item:'minecraft:ice'}},{item:{item:'gtceu:holy_silver_dust'}},{item:{item:'gtceu:holy_silver_dust'}}] }, index++)
    addEnchantingRecipe(event, { reagent: [{ item: 'nameless_trinkets:ultimate_dust' }], output: { item: 'morerelics:gravitum_glove' }, sourceCost: 4000, pedestalItems: [{item:{item:'create:golden_sheet'}},{item:{item:'minecraft:ender_pearl'}},{item:{item:'minecraft:ender_pearl'}},{item:{item:'minecraft:obsidian'}},{item:{item:'gtceu:holy_silver_dust'}},{item:{item:'gtceu:holy_silver_dust'}}] }, index++)
    addEnchantingRecipe(event, { reagent: [{ item: 'nameless_trinkets:ultimate_dust' }], output: { item: 'morerelics:gravitum_strider' }, sourceCost: 4000, pedestalItems: [{item:{item:'minecraft:leather_boots'}},{item:{item:'minecraft:ender_pearl'}},{item:{item:'minecraft:ender_pearl'}},{item:{item:'minecraft:obsidian'}},{item:{item:'gtceu:holy_silver_dust'}},{item:{item:'gtceu:holy_silver_dust'}}] }, index++)
    addEnchantingRecipe(event, { reagent: [{ item: 'nameless_trinkets:ultimate_dust' }], output: { item: 'morerelics:mass_gauntlet' }, sourceCost: 4500, pedestalItems: [{item:{item:'create:golden_sheet'}},{item:{item:'minecraft:iron_block'}},{item:{item:'minecraft:iron_block'}},{item:{item:'minecraft:netherite_scrap'}},{item:{item:'gtceu:holy_silver_dust'}},{item:{item:'gtceu:holy_silver_dust'}}] }, index++)
    addEnchantingRecipe(event, { reagent: [{ item: 'nameless_trinkets:ultimate_dust' }], output: { item: 'morerelics:tyrant_mask' }, sourceCost: 4500, pedestalItems: [{item:{item:'minecraft:obsidian'}},{item:{item:'minecraft:wither_skeleton_skull'}},{item:{item:'minecraft:obsidian'}},{item:{item:'minecraft:iron_block'}},{item:{item:'gtceu:holy_silver_dust'}},{item:{item:'gtceu:holy_silver_dust'}}] }, index++)
    addEnchantingRecipe(event, { reagent: [{ item: 'nameless_trinkets:ultimate_dust' }], output: { item: 'morerelics:whims_of_fate' }, sourceCost: 3500, pedestalItems: [{item:{item:'minecraft:amethyst_shard'}},{item:{item:'minecraft:rabbit_foot'}},{item:{item:'minecraft:amethyst_shard'}},{item:{item:'minecraft:rabbit_foot'}},{item:{item:'gtceu:holy_silver_dust'}}] }, index++)
    addEnchantingRecipe(event, { reagent: [{ item: 'nameless_trinkets:ultimate_dust' }], output: { item: 'morerelics:converging_orb' }, sourceCost: 4000, pedestalItems: [{item:{item:'minecraft:amethyst_shard'}},{item:{item:'minecraft:amethyst_shard'}},{item:{item:'minecraft:crying_obsidian'}},{item:{item:'minecraft:crying_obsidian'}},{item:{item:'gtceu:holy_silver_dust'}},{item:{item:'gtceu:holy_silver_dust'}}] }, index++)
    addEnchantingRecipe(event, { reagent: [{ item: 'nameless_trinkets:ultimate_dust' }], output: { item: 'morerelics:epoch_apple' }, sourceCost: 4000, pedestalItems: [{item:{item:'minecraft:golden_apple'}},{item:{item:'minecraft:chorus_fruit'}},{item:{item:'minecraft:golden_apple'}},{item:{item:'minecraft:chorus_fruit'}},{item:{item:'gtceu:holy_silver_dust'}},{item:{item:'gtceu:holy_silver_dust'}}] }, index++)
    addEnchantingRecipe(event, { reagent: [{ item: 'nameless_trinkets:ultimate_dust' }], output: { item: 'morerelics:crown_of_the_legend' }, sourceCost: 6000, pedestalItems: [{item:{item:'minecraft:diamond_block'}},{item:{item:'minecraft:diamond'}},{item:{item:'minecraft:diamond'}},{item:{item:'gtceu:prima_materia_ingot'}},{item:{item:'gtceu:prima_materia_ingot'}},{item:{item:'gtceu:prima_materia_ingot'}}] }, index++)
    addEnchantingRecipe(event, { reagent: [{ item: 'nameless_trinkets:ultimate_dust' }], output: { item: 'morerelics:king_crimson' }, sourceCost: 7000, pedestalItems: [{item:{item:'minecraft:diamond_block'}},{item:{item:'minecraft:netherite_ingot'}},{item:{item:'minecraft:netherite_ingot'}},{item:{item:'gtceu:prima_materia_ingot'}},{item:{item:'gtceu:prima_materia_ingot'}},{item:{item:'gtceu:holy_silver_dust'}}] }, index++)
    addEnchantingRecipe(event, { reagent: [{ item: 'nameless_trinkets:ultimate_dust' }], output: { item: 'morerelics:made_in_heaven' }, sourceCost: 8000, pedestalItems: [{item:{item:'minecraft:elytra'}},{item:{item:'minecraft:diamond_block'}},{item:{item:'minecraft:diamond_block'}},{item:{item:'gtceu:prima_materia_ingot'}},{item:{item:'gtceu:prima_materia_ingot'}},{item:{item:'gtceu:prima_materia_ingot'}}] }, index++)
    addEnchantingRecipe(event, { reagent: [{ item: 'nameless_trinkets:ultimate_dust' }], output: { item: 'morerelics:wonder_of_u' }, sourceCost: 10000, pedestalItems: [{item:{item:'minecraft:netherite_block'}},{item:{item:'minecraft:netherite_block'}},{item:{item:'minecraft:wither_skeleton_skull'}},{item:{item:'gtceu:prima_materia_ingot'}},{item:{item:'gtceu:prima_materia_ingot'}},{item:{item:'gtceu:prima_materia_ingot'}},{item:{item:'gtceu:prima_materia_ingot'}}] }, index++)

    // too many bows — tooManyBows.js
    addEnchantingRecipe(event, { reagent: [{ item: 'nameless_trinkets:glowing_dust' }], output: { item: 'too_many_bows:arcane_bow' }, sourceCost: 1500, pedestalItems: [{item:{item:'minecraft:bow'}},{item:{item:'minecraft:lapis_lazuli'}},{item:{item:'minecraft:lapis_lazuli'}},{item:{item:'minecraft:amethyst_shard'}},{item:{item:'minecraft:amethyst_shard'}},{item:{item:'gtceu:luminessence_dust'}}] }, index++)
    addEnchantingRecipe(event, { reagent: [{ item: 'nameless_trinkets:glowing_dust' }], output: { item: 'too_many_bows:wind_bow' }, sourceCost: 1500, pedestalItems: [{item:{item:'minecraft:bow'}},{item:{item:'minecraft:feather'}},{item:{item:'minecraft:feather'}},{item:{item:'minecraft:feather'}},{item:{item:'minecraft:feather'}},{item:{item:'gtceu:luminessence_dust'}}] }, index++)
    addEnchantingRecipe(event, { reagent: [{ item: 'nameless_trinkets:glowing_dust' }], output: { item: 'too_many_bows:frostbite' }, sourceCost: 1500, pedestalItems: [{item:{item:'minecraft:bow'}},{item:{item:'minecraft:packed_ice'}},{item:{item:'minecraft:packed_ice'}},{item:{item:'minecraft:ice'}},{item:{item:'minecraft:ice'}},{item:{item:'gtceu:luminessence_dust'}}] }, index++)
    addEnchantingRecipe(event, { reagent: [{ item: 'nameless_trinkets:glowing_dust' }], output: { item: 'too_many_bows:verdant_viper' }, sourceCost: 1500, pedestalItems: [{item:{item:'minecraft:bow'}},{item:{item:'minecraft:spider_eye'}},{item:{item:'minecraft:spider_eye'}},{item:{item:'minecraft:fermented_spider_eye'}},{item:{item:'minecraft:vine'}},{item:{item:'gtceu:luminessence_dust'}}] }, index++)
    addEnchantingRecipe(event, { reagent: [{ item: 'nameless_trinkets:glowing_dust' }], output: { item: 'too_many_bows:crimson_nexus' }, sourceCost: 2000, pedestalItems: [{item:{item:'minecraft:bow'}},{item:{item:'minecraft:crimson_planks'}},{item:{item:'minecraft:magma_cream'}},{item:{item:'minecraft:magma_cream'}},{item:{item:'minecraft:nether_brick'}},{item:{item:'gtceu:luminessence_dust'}}] }, index++)
    addEnchantingRecipe(event, { reagent: [{ item: 'nameless_trinkets:glowing_dust' }], output: { item: 'too_many_bows:sentinels_wrath' }, sourceCost: 1500, pedestalItems: [{item:{item:'minecraft:bow'}},{item:{item:'minecraft:iron_ingot'}},{item:{item:'minecraft:iron_ingot'}},{item:{item:'minecraft:emerald'}},{item:{item:'minecraft:emerald'}},{item:{item:'gtceu:luminessence_dust'}}] }, index++)
    addEnchantingRecipe(event, { reagent: [{ item: 'nameless_trinkets:glowing_dust' }], output: { item: 'too_many_bows:verdant_vigor' }, sourceCost: 1500, pedestalItems: [{item:{item:'minecraft:bow'}},{item:{item:'minecraft:emerald'}},{item:{item:'minecraft:emerald'}},{item:{item:'minecraft:vine'}},{item:{item:'minecraft:vine'}},{item:{item:'gtceu:luminessence_dust'}}] }, index++)
    addEnchantingRecipe(event, { reagent: [{ item: 'nameless_trinkets:glowing_dust' }], output: { item: 'too_many_bows:emerald_sage_bow' }, sourceCost: 1500, pedestalItems: [{item:{item:'minecraft:bow'}},{item:{item:'minecraft:emerald'}},{item:{item:'minecraft:emerald'}},{item:{item:'minecraft:experience_bottle'}},{item:{item:'minecraft:experience_bottle'}},{item:{item:'gtceu:luminessence_dust'}}] }, index++)
    addEnchantingRecipe(event, { reagent: [{ item: 'nameless_trinkets:glowing_dust' }], output: { item: 'too_many_bows:cyroheart_bow' }, sourceCost: 2000, pedestalItems: [{item:{item:'minecraft:bow'}},{item:{item:'minecraft:blue_ice'}},{item:{item:'minecraft:blue_ice'}},{item:{item:'minecraft:heart_of_the_sea'}},{item:{item:'gtceu:luminessence_dust'}}] }, index++)
    addEnchantingRecipe(event, { reagent: [{ item: 'nameless_trinkets:glowing_dust' }], output: { item: 'too_many_bows:dark_bow' }, sourceCost: 1500, pedestalItems: [{item:{item:'minecraft:bow'}},{item:{item:'minecraft:obsidian'}},{item:{item:'minecraft:obsidian'}},{item:{item:'minecraft:ink_sac'}},{item:{item:'minecraft:ink_sac'}},{item:{item:'gtceu:luminessence_dust'}}] }, index++)
    addEnchantingRecipe(event, { reagent: [{ item: 'nameless_trinkets:glowing_dust' }], output: { item: 'too_many_bows:ironclad_bow' }, sourceCost: 2000, pedestalItems: [{item:{item:'minecraft:bow'}},{item:{item:'minecraft:iron_block'}},{item:{item:'minecraft:iron_block'}},{item:{item:'minecraft:iron_ingot'}},{item:{item:'minecraft:iron_ingot'}},{item:{item:'gtceu:luminessence_dust'}}] }, index++)
    addEnchantingRecipe(event, { reagent: [{ item: 'nameless_trinkets:glowing_dust' }], output: { item: 'too_many_bows:vitality_weaver' }, sourceCost: 2000, pedestalItems: [{item:{item:'minecraft:bow'}},{item:{item:'minecraft:golden_apple'}},{item:{item:'minecraft:golden_apple'}},{item:{item:'minecraft:rotten_flesh'}},{item:{item:'minecraft:rotten_flesh'}},{item:{item:'gtceu:luminessence_dust'}}] }, index++)
    addEnchantingRecipe(event, { reagent: [{ item: 'nameless_trinkets:glowing_dust' }], output: { item: 'too_many_bows:stormbound_signet' }, sourceCost: 2000, pedestalItems: [{item:{item:'minecraft:gold_block'}},{item:{item:'minecraft:gold_block'}},{item:{item:'minecraft:lightning_rod'}},{item:{item:'minecraft:lightning_rod'}},{item:{item:'gtceu:luminessence_dust'}}] }, index++)
    addEnchantingRecipe(event, { reagent: [{ item: 'nameless_trinkets:glowing_dust' }], output: { item: 'too_many_bows:dead_eyes_pendant' }, sourceCost: 2000, pedestalItems: [{item:{item:'minecraft:obsidian'}},{item:{item:'minecraft:obsidian'}},{item:{item:'minecraft:diamond'}},{item:{item:'minecraft:diamond'}},{item:{item:'gtceu:luminessence_dust'}}] }, index++)
    addEnchantingRecipe(event, { reagent: [{ item: 'nameless_trinkets:glowing_dust' }], output: { item: 'too_many_bows:wind_glove' }, sourceCost: 1500, pedestalItems: [{item:{item:'minecraft:leather'}},{item:{item:'minecraft:leather'}},{item:{item:'minecraft:feather'}},{item:{item:'minecraft:feather'}},{item:{item:'gtceu:luminessence_dust'}}] }, index++)
    addEnchantingRecipe(event, { reagent: [{ item: 'nameless_trinkets:ultimate_dust' }], output: { item: 'too_many_bows:arc_heavens' }, sourceCost: 3000, pedestalItems: [{item:{item:'minecraft:bow'}},{item:{item:'minecraft:lightning_rod'}},{item:{item:'minecraft:lightning_rod'}},{item:{item:'minecraft:amethyst_shard'}},{item:{item:'minecraft:amethyst_shard'}},{item:{item:'gtceu:holy_silver_dust'}},{item:{item:'gtceu:holy_silver_dust'}}] }, index++)
    addEnchantingRecipe(event, { reagent: [{ item: 'nameless_trinkets:ultimate_dust' }], output: { item: 'too_many_bows:solar_bow' }, sourceCost: 3500, pedestalItems: [{item:{item:'minecraft:bow'}},{item:{item:'minecraft:blaze_rod'}},{item:{item:'minecraft:blaze_rod'}},{item:{item:'minecraft:fire_charge'}},{item:{item:'minecraft:fire_charge'}},{item:{item:'gtceu:holy_silver_dust'}},{item:{item:'gtceu:holy_silver_dust'}}] }, index++)
    addEnchantingRecipe(event, { reagent: [{ item: 'nameless_trinkets:ultimate_dust' }], output: { item: 'too_many_bows:flame_bow' }, sourceCost: 3000, pedestalItems: [{item:{item:'minecraft:bow'}},{item:{item:'minecraft:blaze_rod'}},{item:{item:'minecraft:magma_cream'}},{item:{item:'minecraft:magma_cream'}},{item:{item:'minecraft:fire_charge'}},{item:{item:'gtceu:holy_silver_dust'}},{item:{item:'gtceu:holy_silver_dust'}}] }, index++)
    addEnchantingRecipe(event, { reagent: [{ item: 'nameless_trinkets:ultimate_dust' }], output: { item: 'too_many_bows:spectral_whisper' }, sourceCost: 3500, pedestalItems: [{item:{item:'minecraft:bow'}},{item:{item:'minecraft:phantom_membrane'}},{item:{item:'minecraft:phantom_membrane'}},{item:{item:'minecraft:obsidian'}},{item:{item:'minecraft:obsidian'}},{item:{item:'gtceu:holy_silver_dust'}},{item:{item:'gtceu:holy_silver_dust'}}] }, index++)
    addEnchantingRecipe(event, { reagent: [{ item: 'nameless_trinkets:ultimate_dust' }], output: { item: 'too_many_bows:twin_shadows' }, sourceCost: 3500, pedestalItems: [{item:{item:'minecraft:bow'}},{item:{item:'minecraft:obsidian'}},{item:{item:'minecraft:obsidian'}},{item:{item:'minecraft:quartz'}},{item:{item:'minecraft:quartz'}},{item:{item:'gtceu:holy_silver_dust'}},{item:{item:'gtceu:holy_silver_dust'}}] }, index++)
    addEnchantingRecipe(event, { reagent: [{ item: 'nameless_trinkets:ultimate_dust' }], output: { item: 'too_many_bows:ethereal_hunter' }, sourceCost: 3000, pedestalItems: [{item:{item:'minecraft:bow'}},{item:{item:'too_many_bows:power_crystal'}},{item:{item:'too_many_bows:power_crystal'}},{item:{item:'minecraft:blaze_powder'}},{item:{item:'minecraft:blaze_powder'}},{item:{item:'gtceu:holy_silver_dust'}},{item:{item:'gtceu:holy_silver_dust'}}] }, index++)
    addEnchantingRecipe(event, { reagent: [{ item: 'nameless_trinkets:ultimate_dust' }], output: { item: 'too_many_bows:radiance' }, sourceCost: 3500, pedestalItems: [{item:{item:'minecraft:bow'}},{item:{item:'minecraft:glowstone'}},{item:{item:'minecraft:glowstone'}},{item:{item:'minecraft:gold_block'}},{item:{item:'minecraft:gold_block'}},{item:{item:'gtceu:holy_silver_dust'}},{item:{item:'gtceu:holy_silver_dust'}}] }, index++)
    addEnchantingRecipe(event, { reagent: [{ item: 'nameless_trinkets:ultimate_dust' }], output: { item: 'too_many_bows:astral_bound' }, sourceCost: 3000, pedestalItems: [{item:{item:'minecraft:bow'}},{item:{item:'minecraft:ender_pearl'}},{item:{item:'minecraft:ender_pearl'}},{item:{item:'minecraft:amethyst_shard'}},{item:{item:'minecraft:amethyst_shard'}},{item:{item:'gtceu:holy_silver_dust'}}] }, index++)
    addEnchantingRecipe(event, { reagent: [{ item: 'nameless_trinkets:ultimate_dust' }], output: { item: 'too_many_bows:aethers_call' }, sourceCost: 3500, pedestalItems: [{item:{item:'minecraft:bow'}},{item:{item:'aether:zanite_gemstone'}},{item:{item:'aether:zanite_gemstone'}},{item:{item:'minecraft:feather'}},{item:{item:'minecraft:feather'}},{item:{item:'gtceu:holy_silver_dust'}},{item:{item:'gtceu:holy_silver_dust'}}] }, index++)
    addEnchantingRecipe(event, { reagent: [{ item: 'nameless_trinkets:ultimate_dust' }], output: { item: 'too_many_bows:demons_grasp' }, sourceCost: 3500, pedestalItems: [{item:{item:'minecraft:bow'}},{item:{item:'minecraft:blaze_rod'}},{item:{item:'minecraft:wither_skeleton_skull'}},{item:{item:'minecraft:soul_sand'}},{item:{item:'minecraft:soul_sand'}},{item:{item:'gtceu:holy_silver_dust'}},{item:{item:'gtceu:holy_silver_dust'}}] }, index++)
    addEnchantingRecipe(event, { reagent: [{ item: 'nameless_trinkets:ultimate_dust' }], output: { item: 'too_many_bows:ancient_sage_bow' }, sourceCost: 5000, pedestalItems: [{item:{item:'minecraft:bow'}},{item:{item:'minecraft:emerald_block'}},{item:{item:'minecraft:emerald_block'}},{item:{item:'too_many_bows:power_crystal'}},{item:{item:'too_many_bows:power_crystal'}},{item:{item:'gtceu:prima_materia_ingot'}},{item:{item:'gtceu:prima_materia_ingot'}}] }, index++)
    addEnchantingRecipe(event, { reagent: [{ item: 'nameless_trinkets:ultimate_dust' }], output: { item: 'too_many_bows:dusk_reaper' }, sourceCost: 5000, pedestalItems: [{item:{item:'minecraft:bow'}},{item:{item:'too_many_bows:soul_fragment'}},{item:{item:'too_many_bows:soul_fragment'}},{item:{item:'minecraft:phantom_membrane'}},{item:{item:'minecraft:phantom_membrane'}},{item:{item:'gtceu:prima_materia_ingot'}},{item:{item:'gtceu:prima_materia_ingot'}}] }, index++)
    addEnchantingRecipe(event, { reagent: [{ item: 'nameless_trinkets:ultimate_dust' }], output: { item: 'too_many_bows:shulker_blast' }, sourceCost: 5000, pedestalItems: [{item:{item:'minecraft:bow'}},{item:{item:'minecraft:shulker_shell'}},{item:{item:'minecraft:shulker_shell'}},{item:{item:'minecraft:ender_pearl'}},{item:{item:'minecraft:ender_pearl'}},{item:{item:'gtceu:prima_materia_ingot'}},{item:{item:'gtceu:prima_materia_ingot'}}] }, index++)
    addEnchantingRecipe(event, { reagent: [{ item: 'nameless_trinkets:ultimate_dust' }], output: { item: 'too_many_bows:dragons_breath' }, sourceCost: 5500, pedestalItems: [{item:{item:'minecraft:bow'}},{item:{item:'minecraft:dragon_breath'}},{item:{item:'minecraft:dragon_breath'}},{item:{item:'minecraft:end_stone'}},{item:{item:'minecraft:end_stone'}},{item:{item:'gtceu:prima_materia_ingot'}},{item:{item:'gtceu:prima_materia_ingot'}}] }, index++)
    addEnchantingRecipe(event, { reagent: [{ item: 'nameless_trinkets:ultimate_dust' }], output: { item: 'too_many_bows:auroras_grace' }, sourceCost: 5500, pedestalItems: [{item:{item:'minecraft:bow'}},{item:{item:'too_many_bows:rift_shard'}},{item:{item:'too_many_bows:rift_shard'}},{item:{item:'minecraft:ender_eye'}},{item:{item:'minecraft:ender_eye'}},{item:{item:'gtceu:prima_materia_ingot'}},{item:{item:'gtceu:prima_materia_ingot'}}] }, index++)
    addEnchantingRecipe(event, { reagent: [{ item: 'nameless_trinkets:ultimate_dust' }], output: { item: 'too_many_bows:necro_flame_bow' }, sourceCost: 5000, pedestalItems: [{item:{item:'minecraft:bow'}},{item:{item:'too_many_bows:cursed_stone'}},{item:{item:'too_many_bows:cursed_stone'}},{item:{item:'minecraft:wither_skeleton_skull'}},{item:{item:'minecraft:wither_skeleton_skull'}},{item:{item:'gtceu:prima_materia_ingot'}},{item:{item:'gtceu:prima_materia_ingot'}}] }, index++)
    addEnchantingRecipe(event, { reagent: [{ item: 'nameless_trinkets:ultimate_dust' }], output: { item: 'too_many_bows:burnt_relic' }, sourceCost: 6000, pedestalItems: [{item:{item:'minecraft:bow'}},{item:{item:'minecraft:ancient_debris'}},{item:{item:'minecraft:ancient_debris'}},{item:{item:'minecraft:netherite_ingot'}},{item:{item:'minecraft:netherite_ingot'}},{item:{item:'gtceu:prima_materia_ingot'}},{item:{item:'gtceu:prima_materia_ingot'}}] }, index++)

    // unique accessories — uniqueAccessories.js
    addEnchantingRecipe(event, { reagent: [{ item: 'nameless_trinkets:glowing_dust' }], output: { item: 'uniqueaccessories:tool_belt' }, sourceCost: 1500, pedestalItems: [{item:{item:'minecraft:leather'}},{item:{item:'minecraft:leather'}},{item:{item:'minecraft:iron_ingot'}},{item:{item:'minecraft:iron_ingot'}},{item:{item:'gtceu:luminessence_dust'}}] }, index++)
    addEnchantingRecipe(event, { reagent: [{ item: 'nameless_trinkets:glowing_dust' }], output: { item: 'uniqueaccessories:survival_belt' }, sourceCost: 1500, pedestalItems: [{item:{item:'minecraft:leather'}},{item:{item:'minecraft:cooked_beef'}},{item:{item:'minecraft:iron_ingot'}},{item:{item:'minecraft:leather'}},{item:{item:'gtceu:luminessence_dust'}}] }, index++)
    addEnchantingRecipe(event, { reagent: [{ item: 'nameless_trinkets:glowing_dust' }], output: { item: 'uniqueaccessories:small_propulsion_device' }, sourceCost: 2000, pedestalItems: [{item:{item:'create:iron_sheet'}},{item:{item:'minecraft:gold_ingot'}},{item:{item:'minecraft:gold_ingot'}},{item:{item:'minecraft:blaze_rod'}},{item:{item:'minecraft:blaze_rod'}},{item:{item:'gtceu:luminessence_dust'}}] }, index++)
    addEnchantingRecipe(event, { reagent: [{ item: 'nameless_trinkets:glowing_dust' }], output: { item: 'uniqueaccessories:blade_shoes' }, sourceCost: 1500, pedestalItems: [{item:{item:'minecraft:leather_boots'}},{item:{item:'minecraft:iron_ingot'}},{item:{item:'minecraft:iron_ingot'}},{item:{item:'minecraft:flint'}},{item:{item:'minecraft:flint'}},{item:{item:'gtceu:luminessence_dust'}}] }, index++)
    addEnchantingRecipe(event, { reagent: [{ item: 'nameless_trinkets:glowing_dust' }], output: { item: 'uniqueaccessories:strong_sticky_slime_ball' }, sourceCost: 1500, pedestalItems: [{item:{item:'minecraft:slime_ball'}},{item:{item:'minecraft:slime_ball'}},{item:{item:'minecraft:slime_ball'}},{item:{item:'minecraft:iron_ingot'}},{item:{item:'gtceu:luminessence_dust'}}] }, index++)
    addEnchantingRecipe(event, { reagent: [{ item: 'nameless_trinkets:glowing_dust' }], output: { item: 'uniqueaccessories:amplifier_stone' }, sourceCost: 1500, pedestalItems: [{item:{item:'minecraft:amethyst_shard'}},{item:{item:'minecraft:amethyst_shard'}},{item:{item:'minecraft:quartz'}},{item:{item:'minecraft:redstone'}},{item:{item:'gtceu:luminessence_dust'}}] }, index++)
    addEnchantingRecipe(event, { reagent: [{ item: 'nameless_trinkets:glowing_dust' }], output: { item: 'uniqueaccessories:snow_golem_doll' }, sourceCost: 1000, pedestalItems: [{item:{item:'minecraft:carved_pumpkin'}},{item:{item:'minecraft:snow_block'}},{item:{item:'minecraft:snow_block'}},{item:{item:'minecraft:ice'}},{item:{item:'minecraft:ice'}},{item:{item:'gtceu:luminessence_dust'}}] }, index++)
    addEnchantingRecipe(event, { reagent: [{ item: 'nameless_trinkets:glowing_dust' }], output: { item: 'uniqueaccessories:ancient_chisel' }, sourceCost: 1500, pedestalItems: [{item:{item:'create:iron_sheet'}},{item:{item:'minecraft:copper_ingot'}},{item:{item:'minecraft:copper_ingot'}},{item:{item:'minecraft:flint'}},{item:{item:'minecraft:flint'}},{item:{item:'gtceu:luminessence_dust'}}] }, index++)
    addEnchantingRecipe(event, { reagent: [{ item: 'nameless_trinkets:glowing_dust' }], output: { item: 'uniqueaccessories:fossil_shark_tooth' }, sourceCost: 1500, pedestalItems: [{item:{item:'minecraft:bone'}},{item:{item:'minecraft:bone'}},{item:{item:'minecraft:gravel'}},{item:{item:'minecraft:gravel'}},{item:{item:'gtceu:luminessence_dust'}}] }, index++)
    addEnchantingRecipe(event, { reagent: [{ item: 'nameless_trinkets:glowing_dust' }], output: { item: 'uniqueaccessories:starved_wolf_skull' }, sourceCost: 1500, pedestalItems: [{item:{item:'minecraft:bone'}},{item:{item:'minecraft:bone'}},{item:{item:'minecraft:iron_ingot'}},{item:{item:'minecraft:iron_ingot'}},{item:{item:'gtceu:luminessence_dust'}}] }, index++)
    addEnchantingRecipe(event, { reagent: [{ item: 'nameless_trinkets:glowing_dust' }], output: { item: 'uniqueaccessories:bloody_knife' }, sourceCost: 2000, pedestalItems: [{item:{item:'create:iron_sheet'}},{item:{item:'minecraft:iron_ingot'}},{item:{item:'minecraft:iron_ingot'}},{item:{item:'minecraft:redstone'}},{item:{item:'minecraft:redstone'}},{item:{item:'gtceu:luminessence_dust'}}] }, index++)
    addEnchantingRecipe(event, { reagent: [{ item: 'nameless_trinkets:glowing_dust' }], output: { item: 'uniqueaccessories:golden_egg' }, sourceCost: 1500, pedestalItems: [{item:{item:'minecraft:egg'}},{item:{item:'minecraft:gold_block'}},{item:{item:'minecraft:gold_block'}},{item:{item:'minecraft:gold_ingot'}},{item:{item:'minecraft:gold_ingot'}},{item:{item:'gtceu:luminessence_dust'}}] }, index++)
    addEnchantingRecipe(event, { reagent: [{ item: 'nameless_trinkets:glowing_dust' }], output: { item: 'uniqueaccessories:accessory_box' }, sourceCost: 1000, pedestalItems: [{item:{item:'minecraft:chest'}},{item:{item:'minecraft:iron_ingot'}},{item:{item:'minecraft:iron_ingot'}},{item:{item:'minecraft:diamond'}},{item:{item:'gtceu:luminessence_dust'}},{item:{item:'gtceu:luminessence_dust'}}] }, index++)
    addEnchantingRecipe(event, { reagent: [{ item: 'nameless_trinkets:glowing_dust' }], output: { item: 'uniqueaccessories:black_belt' }, sourceCost: 1500, pedestalItems: [{item:{item:'minecraft:leather'}},{item:{item:'minecraft:leather'}},{item:{item:'minecraft:coal'}},{item:{item:'minecraft:coal'}},{item:{item:'gtceu:luminessence_dust'}}] }, index++)
    addEnchantingRecipe(event, { reagent: [{ item: 'nameless_trinkets:glowing_dust' }], output: { item: 'uniqueaccessories:tabi' }, sourceCost: 1000, pedestalItems: [{item:{item:'minecraft:leather'}},{item:{item:'minecraft:white_wool'}},{item:{item:'minecraft:white_wool'}},{item:{item:'minecraft:string'}},{item:{item:'gtceu:luminessence_dust'}}] }, index++)
    addEnchantingRecipe(event, { reagent: [{ item: 'nameless_trinkets:glowing_dust' }], output: { item: 'uniqueaccessories:golden_egg_charm' }, sourceCost: 2000, pedestalItems: [{item:{item:'minecraft:egg'}},{item:{item:'minecraft:gold_block'}},{item:{item:'minecraft:gold_ingot'}},{item:{item:'minecraft:gold_ingot'}},{item:{item:'minecraft:rabbit_foot'}},{item:{item:'gtceu:luminessence_dust'}}] }, index++)
    addEnchantingRecipe(event, { reagent: [{ item: 'nameless_trinkets:glowing_dust' }], output: { item: 'uniqueaccessories:royal_honeycomb' }, sourceCost: 1500, pedestalItems: [{item:{item:'minecraft:honeycomb'}},{item:{item:'minecraft:honeycomb'}},{item:{item:'minecraft:gold_ingot'}},{item:{item:'minecraft:gold_ingot'}},{item:{item:'gtceu:luminessence_dust'}}] }, index++)
    addEnchantingRecipe(event, { reagent: [{ item: 'nameless_trinkets:glowing_dust' }], output: { item: 'uniqueaccessories:soul_gem' }, sourceCost: 2000, pedestalItems: [{item:{item:'minecraft:ender_pearl'}},{item:{item:'minecraft:obsidian'}},{item:{item:'minecraft:obsidian'}},{item:{item:'minecraft:blaze_rod'}},{item:{item:'gtceu:luminessence_dust'}}] }, index++)
    addEnchantingRecipe(event, { reagent: [{ item: 'nameless_trinkets:glowing_dust' }], output: { item: 'uniqueaccessories:devils_eyeball' }, sourceCost: 2000, pedestalItems: [{item:{item:'minecraft:blaze_rod'}},{item:{item:'minecraft:obsidian'}},{item:{item:'minecraft:obsidian'}},{item:{item:'minecraft:fermented_spider_eye'}},{item:{item:'gtceu:luminessence_dust'}}] }, index++)
    addEnchantingRecipe(event, { reagent: [{ item: 'nameless_trinkets:glowing_dust' }], output: { item: 'uniqueaccessories:magick_quiver' }, sourceCost: 1500, pedestalItems: [{item:{item:'minecraft:leather'}},{item:{item:'minecraft:arrow'}},{item:{item:'minecraft:arrow'}},{item:{item:'minecraft:ender_pearl'}},{item:{item:'minecraft:string'}},{item:{item:'gtceu:luminessence_dust'}}] }, index++)
    addEnchantingRecipe(event, { reagent: [{ item: 'nameless_trinkets:glowing_dust' }], output: { item: 'uniqueaccessories:shiny_stone' }, sourceCost: 1500, pedestalItems: [{item:{item:'minecraft:amethyst_shard'}},{item:{item:'minecraft:amethyst_shard'}},{item:{item:'minecraft:prismarine_crystals'}},{item:{item:'minecraft:prismarine_crystals'}},{item:{item:'gtceu:luminessence_dust'}}] }, index++)
    addEnchantingRecipe(event, { reagent: [{ item: 'nameless_trinkets:glowing_dust' }], output: { item: 'uniqueaccessories:championship_belt' }, sourceCost: 2500, pedestalItems: [{item:{item:'minecraft:leather'}},{item:{item:'minecraft:gold_block'}},{item:{item:'minecraft:diamond'}},{item:{item:'minecraft:diamond'}},{item:{item:'minecraft:iron_block'}},{item:{item:'gtceu:luminessence_dust'}},{item:{item:'gtceu:luminessence_dust'}}] }, index++)
    addEnchantingRecipe(event, { reagent: [{ item: 'nameless_trinkets:glowing_dust' }], output: { item: 'uniqueaccessories:silver_cat_tail' }, sourceCost: 1500, pedestalItems: [{item:{item:'minecraft:string'}},{item:{item:'minecraft:string'}},{item:{item:'minecraft:feather'}},{item:{item:'minecraft:feather'}},{item:{item:'gtceu:luminessence_dust'}}] }, index++)
    addEnchantingRecipe(event, { reagent: [{ item: 'nameless_trinkets:glowing_dust' }], output: { item: 'uniqueaccessories:rocket_shoes' }, sourceCost: 2000, pedestalItems: [{item:{item:'minecraft:leather_boots'}},{item:{item:'minecraft:iron_ingot'}},{item:{item:'minecraft:gold_ingot'}},{item:{item:'minecraft:gold_ingot'}},{item:{item:'minecraft:blaze_rod'}},{item:{item:'gtceu:luminessence_dust'}}] }, index++)
    addEnchantingRecipe(event, { reagent: [{ item: 'nameless_trinkets:glowing_dust' }], output: { item: 'uniqueaccessories:power_crystal' }, sourceCost: 2000, pedestalItems: [{item:{item:'minecraft:amethyst_shard'}},{item:{item:'minecraft:diamond'}},{item:{item:'minecraft:diamond'}},{item:{item:'minecraft:redstone_block'}},{item:{item:'gtceu:luminessence_dust'}},{item:{item:'gtceu:luminessence_dust'}}] }, index++)
    addEnchantingRecipe(event, { reagent: [{ item: 'nameless_trinkets:glowing_dust' }], output: { item: 'uniqueaccessories:rusty_guillotine_blade' }, sourceCost: 2000, pedestalItems: [{item:{item:'create:iron_sheet'}},{item:{item:'minecraft:iron_ingot'}},{item:{item:'minecraft:iron_ingot'}},{item:{item:'minecraft:gold_ingot'}},{item:{item:'minecraft:gravel'}},{item:{item:'gtceu:luminessence_dust'}}] }, index++)
    addEnchantingRecipe(event, { reagent: [{ item: 'nameless_trinkets:glowing_dust' }], output: { item: 'uniqueaccessories:still_beating_heart' }, sourceCost: 2500, pedestalItems: [{item:{item:'minecraft:redstone'}},{item:{item:'minecraft:redstone_block'}},{item:{item:'minecraft:redstone_block'}},{item:{item:'minecraft:gold_block'}},{item:{item:'minecraft:quartz'}},{item:{item:'gtceu:luminessence_dust'}},{item:{item:'gtceu:luminessence_dust'}}] }, index++)
    addEnchantingRecipe(event, { reagent: [{ item: 'nameless_trinkets:glowing_dust' }], output: { item: 'uniqueaccessories:withered_heart' }, sourceCost: 2000, pedestalItems: [{item:{item:'minecraft:wither_rose'}},{item:{item:'minecraft:red_dye'}},{item:{item:'minecraft:red_dye'}},{item:{item:'minecraft:ink_sac'}},{item:{item:'gtceu:luminessence_dust'}}] }, index++)
    addEnchantingRecipe(event, { reagent: [{ item: 'nameless_trinkets:glowing_dust' }], output: { item: 'uniqueaccessories:suspicious_mushroom' }, sourceCost: 1000, pedestalItems: [{item:{item:'minecraft:suspicious_stew'}},{item:{item:'minecraft:red_mushroom'}},{item:{item:'minecraft:red_mushroom'}},{item:{item:'minecraft:brown_mushroom'}},{item:{item:'gtceu:luminessence_dust'}}] }, index++)
    addEnchantingRecipe(event, { reagent: [{ item: 'nameless_trinkets:glowing_dust' }], output: { item: 'uniqueaccessories:supreme_meat' }, sourceCost: 2000, pedestalItems: [{item:{item:'minecraft:cooked_porkchop'}},{item:{item:'minecraft:cooked_porkchop'}},{item:{item:'minecraft:honey_bottle'}},{item:{item:'minecraft:honey_bottle'}},{item:{item:'gtceu:luminessence_dust'}}] }, index++)
    addEnchantingRecipe(event, { reagent: [{ item: 'nameless_trinkets:glowing_dust' }], output: { item: 'uniqueaccessories:cursed_doll_head' }, sourceCost: 2000, pedestalItems: [{item:{item:'minecraft:leather'}},{item:{item:'minecraft:leather'}},{item:{item:'minecraft:string'}},{item:{item:'minecraft:string'}},{item:{item:'minecraft:fermented_spider_eye'}},{item:{item:'gtceu:luminessence_dust'}}] }, index++)
    addEnchantingRecipe(event, { reagent: [{ item: 'nameless_trinkets:ultimate_dust' }], output: { item: 'uniqueaccessories:sun_stone' }, sourceCost: 3500, pedestalItems: [{item:{item:'minecraft:gold_block'}},{item:{item:'minecraft:glowstone'}},{item:{item:'minecraft:glowstone'}},{item:{item:'minecraft:blaze_rod'}},{item:{item:'minecraft:blaze_rod'}},{item:{item:'gtceu:holy_silver_dust'}},{item:{item:'gtceu:holy_silver_dust'}}] }, index++)
    addEnchantingRecipe(event, { reagent: [{ item: 'nameless_trinkets:ultimate_dust' }], output: { item: 'uniqueaccessories:moon_stone' }, sourceCost: 3500, pedestalItems: [{item:{item:'minecraft:obsidian'}},{item:{item:'minecraft:packed_ice'}},{item:{item:'minecraft:packed_ice'}},{item:{item:'minecraft:ender_pearl'}},{item:{item:'minecraft:ender_pearl'}},{item:{item:'gtceu:holy_silver_dust'}},{item:{item:'gtceu:holy_silver_dust'}}] }, index++)
    addEnchantingRecipe(event, { reagent: [{ item: 'nameless_trinkets:ultimate_dust' }], output: { item: 'uniqueaccessories:master_ninja_tabi' }, sourceCost: 4000, pedestalItems: [{item:{item:'uniqueaccessories:tabi'}},{item:{item:'minecraft:leather'}},{item:{item:'minecraft:leather'}},{item:{item:'minecraft:phantom_membrane'}},{item:{item:'minecraft:phantom_membrane'}},{item:{item:'gtceu:holy_silver_dust'}},{item:{item:'gtceu:holy_silver_dust'}}] }, index++)
    addEnchantingRecipe(event, { reagent: [{ item: 'nameless_trinkets:ultimate_dust' }], output: { item: 'uniqueaccessories:ender_lens' }, sourceCost: 4000, pedestalItems: [{item:{item:'minecraft:ender_eye'}},{item:{item:'minecraft:ender_eye'}},{item:{item:'minecraft:glass'}},{item:{item:'minecraft:glass'}},{item:{item:'minecraft:obsidian'}},{item:{item:'gtceu:holy_silver_dust'}}] }, index++)
})