ServerEvents.recipes(event => {
    event.remove ({ id: 'reliquary:alkahestry_tome' })

    addEnchantingRecipe(event, {
        reagent: 'minecraft:book',
        pedestalItems: [
            'gtceu:prima_materia_plate',
            'minecraft:redstone_block', 'minecraft:redstone_block',
            'minecraft:experience_bottle'
        ],
        output: 'reliquary:alkahestry_tome',
        sourceCost: 2 * Source.ALCHEMIST
    })

    event.remove({ id: "botania:petal_apothecary/pure_daisy" })

    addEnchantingRecipe(event, {
        reagent: 'ars_nouveau:magebloom_crop',
        pedestalItems: ['gtceu:holy_silver_dust', 'gtceu:prima_materia_rod', 'mysticalagriculture:earth_essence', 'mysticalagriculture:earth_essence'],
        output: 'botania:pure_daisy',
        sourceCost: 2 * Source.ALCHEMIST
    })

    addEnchantingRecipe(event, {
        reagent: 'minecraft:bucket',
        pedestalItems: ['gtceu:prima_materia_block', 'minecraft:experience_bottle', 'minecraft:experience_bottle', 'hexcasting:charged_amethyst'],
        output: 'gtceu:concepts_bucket',
        sourceCost: Source.ALCHEMIST
    })

    addImbuementRecipe(event, {
        input: 'gtceu:concepts_bucket',
        output: 'gtceu:metal_form_bucket',
        source: 2 * Source.ALCHEMIST,
        pedestalItems: ['gtceu:holy_silver_block']
    })

    // otherworld_essence is renewable via the Datura farming loop (occultism.js spirit_fire
    // recipes), no spirit-tier ceiling -- works as an ongoing Occultism tax through the top
    // half of the tree, where there's no higher spirit to summon past Marid (Sorcerer).
    addImbuementRecipe(event, {
        input: 'gtceu:metal_form_bucket',
        output: 'kubejs:disorganized_metal_form',
        source: Source.ALCHEMIST,
        pedestalItems: ['mysticalagriculture:ice_essence', 'mysticalagriculture:ice_essence', 'mysticalagriculture:ice_essence', 'occultism:otherworld_essence']
    })

    event.smelting('gtceu:abstract_metal_ingot', 'kubejs:disorganized_metal_form')

    // Repeat-friendly bypass for the ritual chain above: once the mana pond is built,
    // skip concepts_bucket -> metal_form_bucket -> disorganized_metal_form per ingot.
    addManaPondRecipe(event, {
        input: { item: 'minecraft:iron_ingot' },
        mana: 2 * Mana.ALCHEMIST,
        catalyst: { type: 'block', block: 'botania:alchemy_catalyst' },
        output: { item: 'gtceu:abstract_metal_ingot' }
    })

    addManaPondRecipe(event, {
        input: { item: 'gtceu:abstract_metal_ingot' },
        mana: Mana.ALCHEMIST,
        output: { item: 'botania:manasteel_ingot' }
    })

    event.shapeless('minecraft:gold_ingot',   ['gtceu:abstract_metal_ingot', '#kubejs:fire_essences'])
    event.shapeless('gtceu:tin_ingot',       ['gtceu:abstract_metal_ingot', '#kubejs:water_essences'])
    event.shapeless('gtceu:lead_ingot',      ['gtceu:abstract_metal_ingot', '#kubejs:earth_essences'])
    event.shapeless('gtceu:aluminium_ingot', ['gtceu:abstract_metal_ingot', '#kubejs:air_essences'])

    addEnchantingRecipe(event, {
        reagent: 'gtceu:abstract_metal_ingot',
        pedestalItems: ['#kubejs:fire_essences', '#kubejs:water_essences'],
        output: 'gtceu:bismuth_ingot',
        sourceCost: Source.ALCHEMIST
    })
    addEnchantingRecipe(event, {
        reagent: 'gtceu:abstract_metal_ingot',
        pedestalItems: ['#kubejs:fire_essences', '#kubejs:earth_essences'],
        output: 'minecraft:copper_ingot',
        sourceCost: Source.ALCHEMIST
    })
    addEnchantingRecipe(event, {
        reagent: 'gtceu:abstract_metal_ingot',
        pedestalItems: ['#kubejs:water_essences', '#kubejs:air_essences'],
        output: 'gtceu:silver_ingot',
        sourceCost: Source.ALCHEMIST
    })
    addEnchantingRecipe(event, {
        reagent: 'gtceu:abstract_metal_ingot',
        pedestalItems: ['#kubejs:earth_essences', '#kubejs:air_essences'],
        output: 'gtceu:magnesium_dust',
        sourceCost: Source.ALCHEMIST
    })
    addEnchantingRecipe(event, {
        reagent: 'gtceu:abstract_metal_ingot',
        pedestalItems: ['#kubejs:water_essences', '#kubejs:air_essences', '#forge:gems/ambrosium'],
        output: 'gtceu:holy_silver_ingot',
        sourceCost: Source.ALCHEMIST
    })

    addEnchantingRecipe(event, {
        reagent: { item: 'gtceu:raw_source' },
        pedestalItems: [
            { item: 'gtceu:prima_materia_rod' },
            { tag: 'kubejs:water_essences' },
            { tag: 'kubejs:earth_essences' }
        ],
        output: { item: 'ars_nouveau:source_gem', count: 3 },
        sourceCost: 2 * Source.ALCHEMIST
    })

    addManaPondRecipe(event, {
        input: { item: 'minecraft:glowstone' },
        mana: Mana.ALCHEMIST,
        output: { count: 4, item: 'gtceu:luminessence_dust' }
    })

    addManaPondRecipe(event, {
        input: { tag: 'forge:ingots/silver' },
        mana: Mana.ALCHEMIST,
        catalyst: { type: 'block', block: 'botania:alchemy_catalyst' },
        output: { item: 'gtceu:holy_silver_ingot' }
    })


    addImbuementRecipe(event, {
        input: 'hexcasting:charged_amethyst',
        output: 'kubejs:hexed_amethyst_core',
        source: Source.ALCHEMIST,
        pedestalItems: ['gtceu:manasteel_rod', 'gtceu:manasteel_rod', 'gtceu:abstract_metal_ingot', 'minecraft:glowstone']
    })

    addEnchantingRecipe(event, {
        reagent: 'kubejs:hexed_amethyst_core',
        pedestalItems: [
            'gtceu:manasteel_plate', 'gtceu:manasteel_plate',
            'botania:mana_pearl', 'botania:mana_pearl',
            'ars_nouveau:source_gem', 'ars_nouveau:source_gem'
        ],
        output: 'kubejs:hexed_mana_matrix',
        sourceCost: 2 * Source.ALCHEMIST
    })

    event.remove({ output: /hexcasting:staff\// })
    const staffPattern = ['ZSA', ' WS', 'S  ']
    const staffKey = (w) => ({ S: 'minecraft:stick', A: 'kubejs:hexed_amethyst_core', W: w, Z: '#forge:tools/saws' })
    ;[
        ['minecraft:oak_planks',                     'hexcasting:staff/oak'],
        ['minecraft:birch_planks',                   'hexcasting:staff/birch'],
        ['minecraft:spruce_planks',                  'hexcasting:staff/spruce'],
        ['minecraft:jungle_planks',                  'hexcasting:staff/jungle'],
        ['minecraft:acacia_planks',                  'hexcasting:staff/acacia'],
        ['minecraft:dark_oak_planks',                'hexcasting:staff/dark_oak'],
        ['minecraft:mangrove_planks',                'hexcasting:staff/mangrove'],
        ['minecraft:bamboo_planks',                  'hexcasting:staff/bamboo'],
        ['minecraft:cherry_planks',                  'hexcasting:staff/cherry'],
        ['minecraft:crimson_planks',                 'hexcasting:staff/crimson'],
        ['minecraft:warped_planks',                  'hexcasting:staff/warped'],
        ['hexcasting:edified_planks',                'hexcasting:staff/edified'],
        ['hexcasting:quenched_allay_shard',          'hexcasting:staff/quenched'],
        ['#hexcasting:brainswept_circle_components', 'hexcasting:staff/mindsplice'],
    ].forEach(([w, result]) => event.shaped(result, staffPattern, staffKey(w)).damageIngredient(Ingredient.of('#forge:tools/saws')))

    event.remove({ id: 'hexcasting:lens' })
    event.shaped('hexcasting:lens', ['FC ', 'CAC', ' C '], {
        C: 'minecraft:glass',
        A: 'kubejs:hexed_amethyst_core',
        F: '#forge:tools/files',
    }).damageIngredient(Ingredient.of('#forge:tools/files'))

    event.remove({ id: 'hexcasting:thought_knot' })
    event.shapeless('hexcasting:thought_knot', ['kubejs:hexed_amethyst_core', 'minecraft:string', '#forge:tools/wire_cutters']).damageIngredient(Ingredient.of('#forge:tools/wire_cutters'))

    event.remove({ id: 'hexcasting:slate' })
    event.shaped('6x hexcasting:slate', ['HA ', 'SSS'], {
        A: 'kubejs:hexed_amethyst_core',
        S: 'minecraft:deepslate',
        H: '#forge:tools/hammers',
    }).damageIngredient(Ingredient.of('#forge:tools/hammers'))

    event.remove({ id: 'hexcasting:cypher' })
    event.shaped('hexcasting:cypher', ['FC ', 'CAC', ' C '], {
        C: '#forge:ingots/copper',
        A: 'kubejs:hexed_amethyst_core',
        F: '#forge:tools/files',
    }).damageIngredient(Ingredient.of('#forge:tools/files'))

    event.remove({ id: 'hexcasting:scroll_small' })
    event.shaped('hexcasting:scroll_small', ['KA', 'P '], {
        A: 'kubejs:hexed_amethyst_core',
        P: 'minecraft:paper',
        K: '#forge:tools/knives',
    }).damageIngredient(Ingredient.of('#forge:tools/knives'))

    event.remove({ id: 'hexcasting:scroll_medium' })
    event.shaped('hexcasting:scroll_medium', ['K A', 'PP ', 'PP '], {
        A: 'kubejs:hexed_amethyst_core',
        P: 'minecraft:paper',
        K: '#forge:tools/knives',
    }).damageIngredient(Ingredient.of('#forge:tools/knives'))

    event.remove({ id: 'hexcasting:scroll' })
    event.shaped('hexcasting:scroll', ['PPA', 'PPP', 'PPK'], {
        A: 'kubejs:hexed_amethyst_core',
        P: 'minecraft:paper',
        K: '#forge:tools/knives',
    }).damageIngredient(Ingredient.of('#forge:tools/knives'))

    event.remove({ id: 'hexcasting:scroll_paper' })
    event.shaped('8x hexcasting:scroll_paper', ['PPP', 'PAP', 'PPK'], {
        P: 'minecraft:paper',
        A: 'kubejs:hexed_amethyst_core',
        K: '#forge:tools/knives',
    }).damageIngredient(Ingredient.of('#forge:tools/knives'))

    event.remove({ id: 'hexcasting:abacus' })
    event.shaped('hexcasting:abacus', ['MAW', 'SAS', 'WAW'], {
        W: '#minecraft:planks',
        A: 'kubejs:hexed_amethyst_core',
        S: 'minecraft:stick',
        M: '#forge:tools/mallets',
    }).damageIngredient(Ingredient.of('#forge:tools/mallets'))

    event.remove({ id: 'hexcasting:akashic_bookshelf' })
    event.shaped('hexcasting:akashic_bookshelf', ['ZPL', 'CAC', 'LPL'], {
        L: '#hexcasting:edified_logs',
        P: '#hexcasting:edified_planks',
        C: 'minecraft:book',
        A: 'kubejs:hexed_mana_matrix',
        Z: '#forge:tools/saws',
    }).damageIngredient(Ingredient.of('#forge:tools/saws'))

    event.remove({ id: 'hexcasting:akashic_connector' })
    event.shaped('4x hexcasting:akashic_connector', ['ZPL', '12A', 'LPL'], {
        L: '#hexcasting:edified_logs',
        P: '#hexcasting:edified_planks',
        '1': 'hexcasting:amethyst_dust',
        '2': 'minecraft:amethyst_shard',
        A: 'kubejs:hexed_mana_matrix',
        Z: '#forge:tools/saws',
    }).damageIngredient(Ingredient.of('#forge:tools/saws'))

    event.remove({ id: 'hexcasting:focus' })
    event.remove({ id: 'hexcasting:focus_rotated' })
    addEnchantingRecipe(event, {
        reagent: 'minecraft:leather',
        pedestalItems: ['gtceu:manasteel_rod', 'gtceu:manasteel_rod', 'kubejs:hexed_mana_matrix', 'minecraft:glowstone', 'minecraft:glowstone'],
        output: 'hexcasting:focus',
        sourceCost: Source.ALCHEMIST
    })

    event.remove({ id: 'hexcasting:spellbook' })
    addEnchantingRecipe(event, {
        reagent: 'minecraft:writable_book',
        pedestalItems: ['gtceu:manasteel_plate', 'gtceu:manasteel_plate', 'kubejs:hexed_mana_matrix', 'gtceu:abstract_metal_ingot', 'minecraft:chorus_fruit'],
        output: 'hexcasting:spellbook',
        sourceCost: Source.ALCHEMIST
    })

    event.remove({ id: 'hexcasting:artifact' })
    addEnchantingRecipe(event, {
        reagent: '#minecraft:music_discs',
        pedestalItems: ['gtceu:manasteel_plate', 'gtceu:manasteel_plate', 'kubejs:hexed_mana_matrix', 'kubejs:hexed_mana_matrix', 'gtceu:abstract_metal_ingot'],
        output: 'hexcasting:artifact',
        sourceCost: Source.ALCHEMIST
    })

    event.remove({ id: 'hexcasting:trinket' })
    event.shaped('hexcasting:trinket', ['HMF', 'MAM', ' M '], {
        M: 'gtceu:manasteel_plate',
        A: 'kubejs:hexed_mana_matrix',
        H: '#forge:tools/hammers',
        F: '#forge:tools/files',
    }).damageIngredient(Ingredient.of('#forge:tools/hammers')).damageIngredient(Ingredient.of('#forge:tools/files'))

    event.remove({ output: 'hex_ars_link:linker_base' })
    addEnchantingRecipe(event, {
        reagent: 'minecraft:amethyst_shard',
        pedestalItems: ['gtceu:manasteel_plate', 'gtceu:manasteel_plate', 'kubejs:hexed_mana_matrix', 'kubejs:hexed_mana_matrix'],
        output: 'hex_ars_link:linker_base',
        sourceCost: Source.ALCHEMIST
    })
})
