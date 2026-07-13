ServerEvents.recipes(event => {


    event.shaped(Item.of('relics:leather_belt', 1), [
        'KLL', 'LDL', 'LLL'
    ], { 'L': 'minecraft:leather', 'D': 'nameless_trinkets:dubious_dust', 'K': '#forge:tools/knives' }).damageIngredient(Ingredient.of('#forge:tools/knives'))

    event.shaped(Item.of('relics:horse_flute', 1), [
        'FG ', 'IDI', ' I '
    ], { 'G': 'minecraft:gold_ingot', 'I': 'minecraft:stick', 'D': 'nameless_trinkets:dubious_dust', 'F': '#forge:tools/files' }).damageIngredient(Ingredient.of('#forge:tools/files'))

    event.shaped(Item.of('relics:arrow_quiver', 1), [
        'KSL', 'LDL', 'LSL'
    ], { 'L': 'minecraft:leather', 'S': 'minecraft:string', 'D': 'nameless_trinkets:dubious_dust', 'K': '#forge:tools/knives' }).damageIngredient(Ingredient.of('#forge:tools/knives'))

    event.shaped(Item.of('relics:ice_skates', 1), [
        'FLI', 'LDL', 'ILI'
    ], { 'I': 'minecraft:iron_ingot', 'L': 'minecraft:leather', 'D': 'nameless_trinkets:dubious_dust', 'F': '#forge:tools/files' }).damageIngredient(Ingredient.of('#forge:tools/files'))

    event.shaped(Item.of('relics:roller_skates', 1), [
        'ZIL', 'RDR', 'LIL'
    ], { 'L': 'minecraft:leather', 'I': 'minecraft:iron_ingot', 'R': 'minecraft:redstone', 'D': 'nameless_trinkets:dubious_dust', 'Z': '#forge:tools/screwdrivers' }).damageIngredient(Ingredient.of('#forge:tools/screwdrivers'))

    event.shaped(Item.of('relics:solid_snowball', 1), [
        'PBP', 'BDB', 'PBP'
    ], { 'P': 'minecraft:packed_ice', 'B': 'minecraft:snowball', 'D': 'nameless_trinkets:dubious_dust' })

    event.shaped(Item.of('relics:wool_mitten', 1), [
        'WWK', 'WDW', 'WLW'
    ], { 'W': 'minecraft:white_wool', 'D': 'nameless_trinkets:dubious_dust', 'L': 'minecraft:leather', 'K': '#forge:tools/knives' }).damageIngredient(Ingredient.of('#forge:tools/knives'))

    event.shaped(Item.of('relics:chorus_inhibitor', 1), [
        'CZC', 'IDI', 'CIC'
    ], { 'C': 'minecraft:chorus_fruit', 'I': 'minecraft:iron_ingot', 'D': 'nameless_trinkets:dubious_dust', 'Z': '#forge:tools/screwdrivers' }).damageIngredient(Ingredient.of('#forge:tools/screwdrivers'))

    event.shaped(Item.of('relics:spore_sack', 1), [
        'KML', 'MDM', 'LML'
    ], { 'L': 'minecraft:leather', 'M': 'minecraft:red_mushroom', 'D': 'nameless_trinkets:dubious_dust', 'K': '#forge:tools/knives' }).damageIngredient(Ingredient.of('#forge:tools/knives'))

    event.shaped(Item.of('relics:relic_experience_bottle', 1), [
        'GDG', 'GRG', ' G '
    ], { 'G': 'minecraft:glass_bottle', 'D': 'nameless_trinkets:dubious_dust', 'R': 'minecraft:redstone' })

    addEnchantingRecipe(event, {
        reagent: 'nameless_trinkets:glowing_dust',
        pedestalItems: ['minecraft:leather_boots', 'minecraft:lily_pad', 'minecraft:lily_pad', 'minecraft:prismarine_shard', 'minecraft:prismarine_shard', 'gtceu:luminessence_dust'],
        output: 'relics:aqua_walker',
        sourceCost: Source.SORCERER
    })

    addEnchantingRecipe(event, {
        reagent: 'nameless_trinkets:glowing_dust',
        pedestalItems: ['minecraft:leather', 'minecraft:nautilus_shell', 'minecraft:nautilus_shell', 'minecraft:kelp', 'minecraft:kelp', 'gtceu:luminessence_dust'],
        output: 'relics:amphibian_boot',
        sourceCost: Source.SORCERER
    })

    addEnchantingRecipe(event, {
        reagent: 'nameless_trinkets:glowing_dust',
        pedestalItems: ['minecraft:leather', 'minecraft:prismarine', 'minecraft:prismarine', 'minecraft:rotten_flesh', 'minecraft:kelp', 'gtceu:luminessence_dust'],
        output: 'relics:drowned_belt',
        sourceCost: Source.SORCERER
    })

    addEnchantingRecipe(event, {
        reagent: 'nameless_trinkets:glowing_dust',
        pedestalItems: ['minecraft:slime_ball', 'minecraft:slime_ball', 'minecraft:feather', 'minecraft:feather', 'gtceu:luminessence_dust'],
        output: 'relics:jellyfish_necklace',
        sourceCost: Source.SORCERER
    })

    addEnchantingRecipe(event, {
        reagent: 'nameless_trinkets:glowing_dust',
        pedestalItems: ['minecraft:packed_ice', 'minecraft:packed_ice', 'minecraft:iron_ingot', 'minecraft:iron_ingot', 'gtceu:luminessence_dust'],
        output: 'relics:ice_breaker',
        sourceCost: Source.SORCERER
    })

    addEnchantingRecipe(event, {
        reagent: 'nameless_trinkets:glowing_dust',
        pedestalItems: ['minecraft:leather_boots', 'minecraft:magma_cream', 'minecraft:magma_cream', 'minecraft:blaze_powder', 'minecraft:blaze_powder', 'gtceu:luminessence_dust'],
        output: 'relics:magma_walker',
        sourceCost: Source.SORCERER
    })

    addEnchantingRecipe(event, {
        reagent: 'nameless_trinkets:glowing_dust',
        pedestalItems: ['minecraft:leather', 'minecraft:feather', 'minecraft:feather', 'minecraft:bone', 'minecraft:bone', 'gtceu:luminessence_dust'],
        output: 'relics:hunter_belt',
        sourceCost: Source.SORCERER
    })

    addEnchantingRecipe(event, {
        reagent: 'nameless_trinkets:glowing_dust',
        pedestalItems: ['create:iron_sheet', 'minecraft:iron_ingot', 'minecraft:iron_ingot', 'minecraft:spider_eye', 'minecraft:spider_eye', 'gtceu:luminessence_dust'],
        output: 'relics:rage_glove',
        sourceCost: Source.SORCERER
    })

    addEnchantingRecipe(event, {
        reagent: 'nameless_trinkets:glowing_dust',
        pedestalItems: ['minecraft:gold_ingot', 'minecraft:gold_ingot', 'minecraft:blackstone', 'minecraft:blackstone', 'gtceu:luminessence_dust'],
        output: 'relics:bastion_ring',
        sourceCost: Source.SORCERER
    })

    addEnchantingRecipe(event, {
        reagent: 'nameless_trinkets:glowing_dust',
        pedestalItems: ['minecraft:glass_bottle', 'minecraft:blaze_powder', 'minecraft:blaze_powder', 'minecraft:fire_charge', 'gtceu:luminessence_dust'],
        output: 'relics:blazing_flask',
        sourceCost: Source.SORCERER
    })

    addEnchantingRecipe(event, {
        reagent: 'nameless_trinkets:glowing_dust',
        pedestalItems: ['minecraft:leather', 'minecraft:black_dye', 'minecraft:black_dye', 'minecraft:ender_pearl', 'minecraft:obsidian', 'gtceu:luminessence_dust'],
        output: 'relics:midnight_robe',
        sourceCost: Source.SORCERER
    })

    addEnchantingRecipe(event, {
        reagent: 'nameless_trinkets:glowing_dust',
        pedestalItems: ['minecraft:gold_ingot', 'minecraft:gold_ingot', 'minecraft:diamond', 'minecraft:golden_apple', 'gtceu:luminessence_dust'],
        output: 'relics:holy_locket',
        sourceCost: Source.SORCERER
    })

    addEnchantingRecipe(event, {
        reagent: 'nameless_trinkets:ultimate_dust',
        pedestalItems: ['minecraft:ender_pearl', 'minecraft:ender_pearl', 'minecraft:phantom_membrane', 'minecraft:phantom_membrane', 'gtceu:holy_silver_dust', 'gtceu:holy_silver_dust'],
        output: 'relics:enders_hand',
        sourceCost: Source.ALCHEMIST
    })

    addEnchantingRecipe(event, {
        reagent: 'nameless_trinkets:ultimate_dust',
        pedestalItems: ['minecraft:prismarine_crystals', 'minecraft:prismarine_crystals', 'minecraft:iron_block', 'minecraft:iron_block', 'gtceu:holy_silver_dust', 'gtceu:holy_silver_dust'],
        output: 'relics:reflection_necklace',
        sourceCost: Source.ALCHEMIST
    })

    addEnchantingRecipe(event, {
        reagent: 'nameless_trinkets:ultimate_dust',
        pedestalItems: ['minecraft:blaze_rod', 'minecraft:obsidian', 'minecraft:obsidian', 'minecraft:iron_ingot', 'minecraft:iron_ingot', 'gtceu:holy_silver_dust', 'gtceu:holy_silver_dust'],
        output: 'relics:shadow_glaive',
        sourceCost: Source.ALCHEMIST
    })

    addEnchantingRecipe(event, {
        reagent: 'nameless_trinkets:ultimate_dust',
        pedestalItems: ['minecraft:glass', 'minecraft:glass', 'minecraft:gold_block', 'minecraft:gold_block', 'gtceu:holy_silver_dust'],
        output: 'relics:magic_mirror',
        sourceCost: Source.ALCHEMIST
    })

    addEnchantingRecipe(event, {
        reagent: 'nameless_trinkets:ultimate_dust',
        pedestalItems: ['minecraft:obsidian', 'minecraft:obsidian', 'minecraft:ender_eye', 'minecraft:ender_eye', 'gtceu:holy_silver_dust', 'gtceu:holy_silver_dust'],
        output: 'relics:spatial_sign',
        sourceCost: Source.ALCHEMIST
    })

    addEnchantingRecipe(event, {
        reagent: 'nameless_trinkets:ultimate_dust',
        pedestalItems: ['minecraft:diamond', 'minecraft:diamond', 'minecraft:crying_obsidian', 'minecraft:crying_obsidian', 'gtceu:holy_silver_dust', 'gtceu:holy_silver_dust'],
        output: 'relics:space_dissector',
        sourceCost: Source.ALCHEMIST
    })

    addEnchantingRecipe(event, {
        reagent: 'nameless_trinkets:ultimate_dust',
        pedestalItems: ['minecraft:elytra', 'minecraft:phantom_membrane', 'minecraft:phantom_membrane', 'create:golden_sheet', 'create:golden_sheet', 'gtceu:holy_silver_dust', 'gtceu:holy_silver_dust'],
        output: 'relics:elytra_booster',
        sourceCost: Source.ALCHEMIST
    })

    addEnchantingRecipe(event, {
        reagent: 'nameless_trinkets:ultimate_dust',
        pedestalItems: ['minecraft:cooked_porkchop', 'minecraft:cooked_porkchop', 'minecraft:golden_apple', 'minecraft:golden_apple', 'gtceu:holy_silver_dust', 'gtceu:holy_silver_dust'],
        output: 'relics:infinity_ham',
        sourceCost: Source.ALCHEMIST
    })

})
