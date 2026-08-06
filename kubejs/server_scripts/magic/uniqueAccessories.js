ServerEvents.recipes(event => {


    event.shaped(Item.of('uniqueaccessories:waist_warmer', 1), [
        'KAA', 'ASA', 'AAA'
    ], { 'A': 'minecraft:white_wool', 'S': 'nameless_trinkets:dubious_dust', 'K': '#forge:tools/knives' }).damageIngredient(Ingredient.of('#forge:tools/knives'))

    event.shaped(Item.of('uniqueaccessories:life_jacket_belt', 1), [
        'KBA', 'BSB', 'ABA'
    ], { 'A': 'minecraft:sponge', 'B': 'minecraft:leather', 'S': 'nameless_trinkets:dubious_dust', 'K': '#forge:tools/knives' }).damageIngredient(Ingredient.of('#forge:tools/knives'))

    event.shaped(Item.of('uniqueaccessories:durable_spring', 1), [
        'CI ', 'ISI', ' I '
    ], { 'I': 'minecraft:iron_ingot', 'S': 'nameless_trinkets:dubious_dust', 'C': '#forge:tools/wire_cutters' }).damageIngredient(Ingredient.of('#forge:tools/wire_cutters'))

    event.shaped(Item.of('uniqueaccessories:large_paddle', 1), [
        'WP ', 'PSP', ' B '
    ], { 'P': 'minecraft:oak_planks', 'S': 'nameless_trinkets:dubious_dust', 'B': 'minecraft:stick', 'W': '#forge:tools/saws' }).damageIngredient(Ingredient.of('#forge:tools/saws'))

    event.shaped(Item.of('uniqueaccessories:all_purpose_seasoning', 1), [
        'MDB', 'DSG', 'BDB'
    ], { 'B': 'minecraft:bone_meal', 'D': 'minecraft:dried_kelp', 'S': 'nameless_trinkets:dubious_dust', 'G': 'minecraft:sugar', 'M': '#forge:tools/mortars' }).damageIngredient(Ingredient.of('#forge:tools/mortars'))

    event.shaped(Item.of('uniqueaccessories:anklet_of_fortune', 1), [
        'HGF', 'GSG', 'GRG'
    ], { 'G': 'minecraft:gold_ingot', 'S': 'nameless_trinkets:dubious_dust', 'R': 'minecraft:rabbit_foot', 'H': '#forge:tools/hammers', 'F': '#forge:tools/files' }).damageIngredient(Ingredient.of('#forge:tools/hammers')).damageIngredient(Ingredient.of('#forge:tools/files'))

    event.shaped(Item.of('uniqueaccessories:sharp_fishing_hook', 1), [
        'ZIF', 'IST', ' T '
    ], { 'I': 'minecraft:iron_ingot', 'F': 'minecraft:fishing_rod', 'S': 'nameless_trinkets:dubious_dust', 'T': 'minecraft:string', 'Z': '#forge:tools/files' }).damageIngredient(Ingredient.of('#forge:tools/files'))

    event.shaped(Item.of('uniqueaccessories:rose_of_temptation', 1), [
        'KGR', 'GSG', 'RGR'
    ], { 'R': 'minecraft:rose_bush', 'G': 'minecraft:gold_ingot', 'S': 'nameless_trinkets:dubious_dust', 'K': '#forge:tools/knives' }).damageIngredient(Ingredient.of('#forge:tools/knives'))

    event.shaped(Item.of('uniqueaccessories:ninjutsu_manual', 1), [
        'KPP', 'LSL', 'PIP'
    ], { 'P': 'minecraft:paper', 'L': 'minecraft:leather', 'S': 'nameless_trinkets:dubious_dust', 'I': 'minecraft:ink_sac', 'K': '#forge:tools/knives' }).damageIngredient(Ingredient.of('#forge:tools/knives'))

    addAlchemyTableRecipe(event, {
        input: ["nameless_trinkets:glowing_dust","minecraft:leather","minecraft:leather","minecraft:iron_ingot","minecraft:iron_ingot","gtceu:luminessence_dust"],
        output: 'uniqueaccessories:tool_belt',
        syphon: LP.SORCERER,
        upgradeLevel: 2
    })

    addAlchemyTableRecipe(event, {
        input: ["nameless_trinkets:glowing_dust","minecraft:leather","minecraft:cooked_beef","minecraft:iron_ingot","minecraft:leather","gtceu:luminessence_dust"],
        output: 'uniqueaccessories:survival_belt',
        syphon: LP.SORCERER,
        upgradeLevel: 2
    })

    addEnchantingRecipe(event, {
        reagent: 'nameless_trinkets:glowing_dust',
        pedestalItems: ['create:iron_sheet', 'minecraft:gold_ingot', 'minecraft:gold_ingot', 'minecraft:blaze_rod', 'minecraft:blaze_rod', 'gtceu:luminessence_dust'],
        output: 'uniqueaccessories:small_propulsion_device',
        sourceCost: Source.SORCERER
    })

    addEnchantingRecipe(event, {
        reagent: 'nameless_trinkets:glowing_dust',
        pedestalItems: ['minecraft:leather_boots', 'minecraft:iron_ingot', 'minecraft:iron_ingot', 'minecraft:flint', 'minecraft:flint', 'gtceu:luminessence_dust'],
        output: 'uniqueaccessories:blade_shoes',
        sourceCost: Source.SORCERER
    })

    addAlchemyTableRecipe(event, {
        input: ["nameless_trinkets:glowing_dust","minecraft:slime_ball","minecraft:slime_ball","minecraft:slime_ball","minecraft:iron_ingot","gtceu:luminessence_dust"],
        output: 'uniqueaccessories:strong_sticky_slime_ball',
        syphon: LP.SORCERER,
        upgradeLevel: 2
    })

    addAlchemyTableRecipe(event, {
        input: ["nameless_trinkets:glowing_dust","minecraft:amethyst_shard","minecraft:amethyst_shard","minecraft:quartz","minecraft:redstone","gtceu:luminessence_dust"],
        output: 'uniqueaccessories:amplifier_stone',
        syphon: LP.SORCERER,
        upgradeLevel: 2
    })

    addEnchantingRecipe(event, {
        reagent: 'nameless_trinkets:glowing_dust',
        pedestalItems: ['minecraft:carved_pumpkin', 'minecraft:snow_block', 'minecraft:snow_block', 'minecraft:ice', 'minecraft:ice', 'gtceu:luminessence_dust'],
        output: 'uniqueaccessories:snow_golem_doll',
        sourceCost: Source.INITIATE
    })

    addEnchantingRecipe(event, {
        reagent: 'nameless_trinkets:glowing_dust',
        pedestalItems: ['create:iron_sheet', 'minecraft:copper_ingot', 'minecraft:copper_ingot', 'minecraft:flint', 'minecraft:flint', 'gtceu:luminessence_dust'],
        output: 'uniqueaccessories:ancient_chisel',
        sourceCost: Source.SORCERER
    })

    addAlchemyTableRecipe(event, {
        input: ["nameless_trinkets:glowing_dust","minecraft:bone","minecraft:bone","minecraft:gravel","minecraft:gravel","gtceu:luminessence_dust"],
        output: 'uniqueaccessories:fossil_shark_tooth',
        syphon: LP.SORCERER,
        upgradeLevel: 2
    })

    addAlchemyTableRecipe(event, {
        input: ["nameless_trinkets:glowing_dust","minecraft:bone","minecraft:bone","minecraft:iron_ingot","minecraft:iron_ingot","gtceu:luminessence_dust"],
        output: 'uniqueaccessories:starved_wolf_skull',
        syphon: LP.SORCERER,
        upgradeLevel: 2
    })

    addEnchantingRecipe(event, {
        reagent: 'nameless_trinkets:glowing_dust',
        pedestalItems: ['create:iron_sheet', 'minecraft:iron_ingot', 'minecraft:iron_ingot', 'minecraft:redstone', 'minecraft:redstone', 'gtceu:luminessence_dust'],
        output: 'uniqueaccessories:bloody_knife',
        sourceCost: Source.SORCERER
    })

    addEnchantingRecipe(event, {
        reagent: 'nameless_trinkets:glowing_dust',
        pedestalItems: ['minecraft:egg', 'minecraft:gold_block', 'minecraft:gold_block', 'minecraft:gold_ingot', 'minecraft:gold_ingot', 'gtceu:luminessence_dust'],
        output: 'uniqueaccessories:golden_egg',
        sourceCost: Source.SORCERER
    })

    addEnchantingRecipe(event, {
        reagent: 'nameless_trinkets:glowing_dust',
        pedestalItems: ['minecraft:chest', 'minecraft:iron_ingot', 'minecraft:iron_ingot', 'minecraft:diamond', 'gtceu:luminessence_dust', 'gtceu:luminessence_dust'],
        output: 'uniqueaccessories:accessory_box',
        sourceCost: Source.INITIATE
    })

    addAlchemyTableRecipe(event, {
        input: ["nameless_trinkets:glowing_dust","minecraft:leather","minecraft:leather","minecraft:coal","minecraft:coal","gtceu:luminessence_dust"],
        output: 'uniqueaccessories:black_belt',
        syphon: LP.SORCERER,
        upgradeLevel: 2
    })

    addAlchemyTableRecipe(event, {
        input: ["nameless_trinkets:glowing_dust","minecraft:leather","minecraft:white_wool","minecraft:white_wool","minecraft:string","gtceu:luminessence_dust"],
        output: 'uniqueaccessories:tabi',
        syphon: LP.INITIATE,
        upgradeLevel: 2
    })

    addEnchantingRecipe(event, {
        reagent: 'nameless_trinkets:glowing_dust',
        pedestalItems: ['minecraft:egg', 'minecraft:gold_block', 'minecraft:gold_ingot', 'minecraft:gold_ingot', 'minecraft:rabbit_foot', 'gtceu:luminessence_dust'],
        output: 'uniqueaccessories:golden_egg_charm',
        sourceCost: Source.SORCERER
    })

    addAlchemyTableRecipe(event, {
        input: ["nameless_trinkets:glowing_dust","minecraft:honeycomb","minecraft:honeycomb","minecraft:gold_ingot","minecraft:gold_ingot","gtceu:luminessence_dust"],
        output: 'uniqueaccessories:royal_honeycomb',
        syphon: LP.SORCERER,
        upgradeLevel: 2
    })

    // Reflavored to Spirit Altar 2026-08-06: literally named "soul gem" -- LP-syphon framing
    // undercut its own name.
    addSpiritInfusion(event, {
        output: 'uniqueaccessories:soul_gem',
        input: 'minecraft:ender_pearl',
        spirits: [{ type: 'arcane', count: 3 }, { type: 'infernal', count: 1 }],
        extraItems: [
            { item: 'minecraft:obsidian', count: 2 },
            { item: 'minecraft:blaze_rod' }
        ]
    })

    // Reflavored to Spirit Altar 2026-08-06: devil-themed eye built from blaze rod + fermented
    // spider eye, straightforwardly infernal.
    addSpiritInfusion(event, {
        output: 'uniqueaccessories:devils_eyeball',
        input: 'minecraft:blaze_rod',
        spirits: [{ type: 'infernal', count: 3 }, { type: 'wicked', count: 1 }],
        extraItems: [
            { item: 'minecraft:obsidian', count: 2 },
            { item: 'minecraft:fermented_spider_eye' }
        ]
    })

    addEnchantingRecipe(event, {
        reagent: 'nameless_trinkets:glowing_dust',
        pedestalItems: ['minecraft:leather', 'minecraft:arrow', 'minecraft:arrow', 'minecraft:ender_pearl', 'minecraft:string', 'gtceu:luminessence_dust'],
        output: 'uniqueaccessories:magick_quiver',
        sourceCost: Source.SORCERER
    })

    addAlchemyTableRecipe(event, {
        input: ["nameless_trinkets:glowing_dust","minecraft:amethyst_shard","minecraft:amethyst_shard","minecraft:prismarine_crystals","minecraft:prismarine_crystals","gtceu:luminessence_dust"],
        output: 'uniqueaccessories:shiny_stone',
        syphon: LP.SORCERER,
        upgradeLevel: 2
    })

    addEnchantingRecipe(event, {
        reagent: 'nameless_trinkets:glowing_dust',
        pedestalItems: ['minecraft:leather', 'minecraft:gold_block', 'minecraft:diamond', 'minecraft:diamond', 'minecraft:iron_block', 'gtceu:luminessence_dust', 'gtceu:luminessence_dust'],
        output: 'uniqueaccessories:championship_belt',
        sourceCost: Source.SORCERER
    })

    addAlchemyTableRecipe(event, {
        input: ["nameless_trinkets:glowing_dust","minecraft:string","minecraft:string","minecraft:feather","minecraft:feather","gtceu:luminessence_dust"],
        output: 'uniqueaccessories:silver_cat_tail',
        syphon: LP.SORCERER,
        upgradeLevel: 2
    })

    addEnchantingRecipe(event, {
        reagent: 'nameless_trinkets:glowing_dust',
        pedestalItems: ['minecraft:leather_boots', 'minecraft:iron_ingot', 'minecraft:gold_ingot', 'minecraft:gold_ingot', 'minecraft:blaze_rod', 'gtceu:luminessence_dust'],
        output: 'uniqueaccessories:rocket_shoes',
        sourceCost: Source.SORCERER
    })

    addEnchantingRecipe(event, {
        reagent: 'nameless_trinkets:glowing_dust',
        pedestalItems: ['minecraft:amethyst_shard', 'minecraft:diamond', 'minecraft:diamond', 'minecraft:redstone_block', 'gtceu:luminessence_dust', 'gtceu:luminessence_dust'],
        output: 'uniqueaccessories:power_crystal',
        sourceCost: Source.SORCERER
    })

    addEnchantingRecipe(event, {
        reagent: 'nameless_trinkets:glowing_dust',
        pedestalItems: ['create:iron_sheet', 'minecraft:iron_ingot', 'minecraft:iron_ingot', 'minecraft:gold_ingot', 'minecraft:gravel', 'gtceu:luminessence_dust'],
        output: 'uniqueaccessories:rusty_guillotine_blade',
        sourceCost: Source.SORCERER
    })

    addEnchantingRecipe(event, {
        reagent: 'nameless_trinkets:glowing_dust',
        pedestalItems: ['minecraft:redstone', 'minecraft:redstone_block', 'minecraft:redstone_block', 'minecraft:gold_block', 'minecraft:quartz', 'gtceu:luminessence_dust', 'gtceu:luminessence_dust'],
        output: 'uniqueaccessories:still_beating_heart',
        sourceCost: Source.SORCERER
    })

    // Reflavored to Blood Altar 2026-08-06: a "heart" trinket built from wither rose is a
    // life-cost sacrifice, not a pattern-weave.
    addBloodAltarRecipe(event, {
        input: 'minecraft:wither_rose',
        output: 'uniqueaccessories:withered_heart',
        upgradeLevel: 2,
        syphon: LP.SORCERER
    })

    addAlchemyTableRecipe(event, {
        input: ["nameless_trinkets:glowing_dust","minecraft:suspicious_stew","minecraft:red_mushroom","minecraft:red_mushroom","minecraft:brown_mushroom","gtceu:luminessence_dust"],
        output: 'uniqueaccessories:suspicious_mushroom',
        syphon: LP.INITIATE,
        upgradeLevel: 2
    })

    addAlchemyTableRecipe(event, {
        input: ["nameless_trinkets:glowing_dust","minecraft:cooked_porkchop","minecraft:cooked_porkchop","minecraft:honey_bottle","minecraft:honey_bottle","gtceu:luminessence_dust"],
        output: 'uniqueaccessories:supreme_meat',
        syphon: LP.SORCERER,
        upgradeLevel: 2
    })

    addEnchantingRecipe(event, {
        reagent: 'nameless_trinkets:glowing_dust',
        pedestalItems: ['minecraft:leather', 'minecraft:leather', 'minecraft:string', 'minecraft:string', 'minecraft:fermented_spider_eye', 'gtceu:luminessence_dust'],
        output: 'uniqueaccessories:cursed_doll_head',
        sourceCost: Source.SORCERER
    })

    addEnchantingRecipe(event, {
        reagent: 'nameless_trinkets:ultimate_dust',
        pedestalItems: ['minecraft:gold_block', 'minecraft:glowstone', 'minecraft:glowstone', 'minecraft:blaze_rod', 'minecraft:blaze_rod', 'gtceu:holy_silver_dust', 'gtceu:holy_silver_dust'],
        output: 'uniqueaccessories:sun_stone',
        sourceCost: Source.ALCHEMIST
    })

    addEnchantingRecipe(event, {
        reagent: 'nameless_trinkets:ultimate_dust',
        pedestalItems: ['minecraft:obsidian', 'minecraft:packed_ice', 'minecraft:packed_ice', 'minecraft:ender_pearl', 'minecraft:ender_pearl', 'gtceu:holy_silver_dust', 'gtceu:holy_silver_dust'],
        output: 'uniqueaccessories:moon_stone',
        sourceCost: Source.ALCHEMIST
    })

    addEnchantingRecipe(event, {
        reagent: 'nameless_trinkets:ultimate_dust',
        pedestalItems: ['uniqueaccessories:tabi', 'minecraft:leather', 'minecraft:leather', 'minecraft:phantom_membrane', 'minecraft:phantom_membrane', 'gtceu:holy_silver_dust', 'gtceu:holy_silver_dust'],
        output: 'uniqueaccessories:master_ninja_tabi',
        sourceCost: Source.ALCHEMIST
    })

    addEnchantingRecipe(event, {
        reagent: 'nameless_trinkets:ultimate_dust',
        pedestalItems: ['minecraft:ender_eye', 'minecraft:ender_eye', 'minecraft:glass', 'minecraft:glass', 'minecraft:obsidian', 'gtceu:holy_silver_dust'],
        output: 'uniqueaccessories:ender_lens',
        sourceCost: Source.ALCHEMIST
    })

})
