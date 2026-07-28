ServerEvents.recipes(event => {


    event.shaped(Item.of('artifacts:lucky_scarf', 1), [
        'CGG', 'GSG', 'GRG'
    ], { 'G': 'minecraft:gold_ingot', 'S': 'nameless_trinkets:dubious_dust', 'R': 'minecraft:rabbit_foot', 'C': '#forge:tools/wire_cutters' }).damageIngredient(Ingredient.of('#forge:tools/wire_cutters'))

    event.shaped(Item.of('artifacts:running_shoes', 1), [
        'KS ', 'LAL', 'LAL'
    ], { 'S': 'nameless_trinkets:dubious_dust', 'L': 'minecraft:leather', 'A': 'minecraft:sugar', 'K': '#forge:tools/knives' }).damageIngredient(Ingredient.of('#forge:tools/knives'))

    event.shaped(Item.of('artifacts:snowshoes', 1), [
        'CIS', 'LSL', 'SIS'
    ], { 'S': 'minecraft:packed_ice', 'I': 'minecraft:stick', 'L': 'nameless_trinkets:dubious_dust', 'C': '#forge:tools/wire_cutters' }).damageIngredient(Ingredient.of('#forge:tools/wire_cutters'))

    event.shaped(Item.of('artifacts:kitty_slippers', 1), [
        'WWK', 'WSW', 'STS'
    ], { 'W': 'minecraft:white_wool', 'S': 'minecraft:string', 'T': 'nameless_trinkets:dubious_dust', 'K': '#forge:tools/knives' }).damageIngredient(Ingredient.of('#forge:tools/knives'))

    event.shaped(Item.of('artifacts:flippers', 1), [
        'NWK', 'KSK', 'KLK'
    ], { 'K': 'minecraft:kelp', 'W': '#kubejs:water_essences', 'S': 'nameless_trinkets:dubious_dust', 'L': 'minecraft:leather', 'N': '#forge:tools/knives' }).damageIngredient(Ingredient.of('#forge:tools/knives'))

    event.shaped(Item.of('artifacts:snorkel', 1), [
        'HI ', 'IGI', 'LSL'
    ], { 'I': 'minecraft:iron_ingot', 'G': 'minecraft:glass_pane', 'L': 'minecraft:leather', 'S': 'nameless_trinkets:dubious_dust', 'H': '#forge:tools/hammers' }).damageIngredient(Ingredient.of('#forge:tools/hammers'))

    event.shaped(Item.of('artifacts:rooted_boots', 1), [
        'KGV', 'LSL', 'LEL'
    ], { 'V': 'minecraft:vine', 'G': 'minecraft:grass_block', 'L': 'minecraft:leather', 'S': 'nameless_trinkets:dubious_dust', 'E': '#kubejs:earth_essences', 'K': '#forge:tools/knives' }).damageIngredient(Ingredient.of('#forge:tools/knives'))

    event.shaped(Item.of('artifacts:charm_of_sinking', 1), [
        'IFI', 'GSG', 'IGI'
    ], { 'I': 'minecraft:iron_ingot', 'G': 'minecraft:gravel', 'S': 'nameless_trinkets:dubious_dust', 'F': '#forge:tools/files' }).damageIngredient(Ingredient.of('#forge:tools/files'))

    event.shaped(Item.of('artifacts:onion_ring', 1), [
        'HGF', 'GSG', ' G '
    ], { 'G': 'minecraft:gold_ingot', 'S': 'nameless_trinkets:dubious_dust', 'H': '#forge:tools/hammers', 'F': '#forge:tools/files' }).damageIngredient(Ingredient.of('#forge:tools/hammers')).damageIngredient(Ingredient.of('#forge:tools/files'))

    addEnchantingRecipe(event, {
        reagent: 'nameless_trinkets:glowing_dust',
        pedestalItems: ['minecraft:leather_boots', 'minecraft:leather_boots', 'minecraft:packed_ice', 'minecraft:packed_ice', 'gtceu:luminessence_dust'],
        output: 'artifacts:aqua_dashers',
        sourceCost: Source.SORCERER
    })

    addEnchantingRecipe(event, {
        reagent: 'nameless_trinkets:glowing_dust',
        pedestalItems: ['minecraft:leather_boots', 'minecraft:leather_boots', 'minecraft:slime_ball', 'minecraft:slime_ball', 'minecraft:feather', 'gtceu:luminessence_dust'],
        output: 'artifacts:bunny_hoppers',
        sourceCost: Source.SORCERER
    })

    addEnchantingRecipe(event, {
        reagent: 'nameless_trinkets:glowing_dust',
        pedestalItems: ['create:iron_sheet', 'minecraft:iron_ingot', 'minecraft:iron_ingot', 'minecraft:flint', 'minecraft:flint', 'gtceu:luminessence_dust'],
        output: 'artifacts:digging_claws',
        sourceCost: Source.SORCERER
    })

    addEnchantingRecipe(event, {
        reagent: 'nameless_trinkets:glowing_dust',
        pedestalItems: ['create:iron_sheet', 'minecraft:iron_ingot', 'minecraft:iron_ingot', 'minecraft:flint', 'minecraft:feather', 'gtceu:luminessence_dust'],
        output: 'artifacts:feral_claws',
        sourceCost: Source.SORCERER
    })

    addEnchantingRecipe(event, {
        reagent: 'nameless_trinkets:glowing_dust',
        pedestalItems: ['minecraft:fire_charge', 'minecraft:magma_cream', 'minecraft:magma_cream', 'minecraft:blaze_rod', 'minecraft:blaze_rod', 'gtceu:luminessence_dust'],
        output: 'artifacts:fire_gauntlet',
        sourceCost: Source.SORCERER
    })

    addEnchantingRecipe(event, {
        reagent: 'nameless_trinkets:glowing_dust',
        pedestalItems: ['create:iron_sheet', 'minecraft:piston', 'minecraft:piston', 'minecraft:iron_ingot', 'minecraft:iron_ingot', 'gtceu:luminessence_dust'],
        output: 'artifacts:pocket_piston',
        sourceCost: Source.SORCERER
    })

    addEnchantingRecipe(event, {
        reagent: 'nameless_trinkets:glowing_dust',
        pedestalItems: ['create:iron_sheet', 'minecraft:iron_block', 'minecraft:iron_block', 'minecraft:diamond', 'minecraft:diamond', 'gtceu:luminessence_dust'],
        output: 'artifacts:power_glove',
        sourceCost: Source.SORCERER
    })

    addEnchantingRecipe(event, {
        reagent: 'nameless_trinkets:glowing_dust',
        pedestalItems: ['minecraft:leather', 'minecraft:phantom_membrane', 'minecraft:phantom_membrane', 'minecraft:ender_pearl', 'minecraft:black_dye', 'gtceu:luminessence_dust'],
        output: 'artifacts:scarf_of_invisibility',
        sourceCost: Source.SORCERER
    })

    addEnchantingRecipe(event, {
        reagent: 'nameless_trinkets:glowing_dust',
        pedestalItems: ['minecraft:amethyst_shard', 'minecraft:lightning_rod', 'minecraft:lightning_rod', 'minecraft:quartz', 'minecraft:redstone', 'gtceu:luminessence_dust'],
        output: 'artifacts:shock_pendant',
        sourceCost: Source.SORCERER
    })

    addEnchantingRecipe(event, {
        reagent: 'nameless_trinkets:glowing_dust',
        pedestalItems: ['minecraft:iron_ingot', 'minecraft:iron_ingot', 'minecraft:cactus', 'minecraft:cactus', 'gtceu:luminessence_dust'],
        output: 'artifacts:thorn_pendant',
        sourceCost: Source.SORCERER
    })

    addEnchantingRecipe(event, {
        reagent: 'nameless_trinkets:glowing_dust',
        pedestalItems: ['minecraft:fire_charge', 'minecraft:blaze_rod', 'minecraft:blaze_powder', 'minecraft:blaze_powder', 'minecraft:amethyst_shard', 'gtceu:luminessence_dust'],
        output: 'artifacts:flame_pendant',
        sourceCost: Source.SORCERER
    })

    addEnchantingRecipe(event, {
        reagent: 'nameless_trinkets:glowing_dust',
        pedestalItems: ['minecraft:totem_of_undying', 'minecraft:golden_apple', 'minecraft:diamond', 'minecraft:diamond', 'gtceu:luminessence_dust'],
        output: 'artifacts:cross_necklace',
        sourceCost: Source.SORCERER
    })

    addEnchantingRecipe(event, {
        reagent: 'nameless_trinkets:glowing_dust',
        pedestalItems: ['create:golden_sheet', 'minecraft:gold_block', 'minecraft:gold_block', 'minecraft:ender_pearl', 'minecraft:string', 'gtceu:luminessence_dust'],
        output: 'artifacts:golden_hook',
        sourceCost: Source.SORCERER
    })

    // Pulled to Hobbyist: air essence binds a slow-fall umbrella (was luminessence-tier enchanting)
    event.shaped(Item.of('artifacts:umbrella', 1), [
        'LAL', 'SIS', 'CT '
    ], { 'L': 'minecraft:leather', 'A': '#kubejs:air_essences', 'S': 'minecraft:string', 'I': 'minecraft:iron_ingot', 'T': 'minecraft:stick', 'C': '#forge:tools/wire_cutters' }).damageIngredient(Ingredient.of('#forge:tools/wire_cutters'))

    addEnchantingRecipe(event, {
        reagent: 'nameless_trinkets:glowing_dust',
        pedestalItems: ['minecraft:glass_bottle', 'minecraft:glass_bottle', 'minecraft:honey_bottle', 'minecraft:honey_bottle', 'gtceu:luminessence_dust'],
        output: 'artifacts:antidote_vessel',
        sourceCost: Source.SORCERER
    })

    addEnchantingRecipe(event, {
        reagent: 'nameless_trinkets:glowing_dust',
        pedestalItems: ['create:iron_sheet', 'minecraft:netherrack', 'minecraft:flint_and_steel', 'minecraft:iron_pickaxe', 'minecraft:coal', 'gtceu:luminessence_dust'],
        output: 'artifacts:pickaxe_heater',
        sourceCost: Source.SORCERER
    })

    addEnchantingRecipe(event, {
        reagent: 'nameless_trinkets:glowing_dust',
        pedestalItems: ['minecraft:leather', 'minecraft:cod', 'minecraft:salmon', 'minecraft:string', 'minecraft:lily_pad', 'gtceu:luminessence_dust'],
        output: 'artifacts:anglers_hat',
        sourceCost: Source.INITIATE
    })

    addEnchantingRecipe(event, {
        reagent: 'nameless_trinkets:glowing_dust',
        pedestalItems: ['minecraft:leather', 'minecraft:leather', 'minecraft:feather', 'minecraft:gold_ingot', 'minecraft:string', 'gtceu:luminessence_dust'],
        output: 'artifacts:cowboy_hat',
        sourceCost: Source.INITIATE
    })

    addEnchantingRecipe(event, {
        reagent: 'nameless_trinkets:glowing_dust',
        pedestalItems: ['minecraft:leather', 'minecraft:glass_bottle', 'minecraft:glass_bottle', 'minecraft:sugar', 'minecraft:cactus', 'gtceu:luminessence_dust'],
        output: 'artifacts:novelty_drinking_hat',
        sourceCost: Source.INITIATE
    })

    addEnchantingRecipe(event, {
        reagent: 'nameless_trinkets:glowing_dust',
        pedestalItems: ['minecraft:leather', 'minecraft:glass_bottle', 'minecraft:glass_bottle', 'minecraft:sugar', 'minecraft:string', 'gtceu:luminessence_dust'],
        output: 'artifacts:plastic_drinking_hat',
        sourceCost: Source.INITIATE
    })

    addEnchantingRecipe(event, {
        reagent: 'nameless_trinkets:glowing_dust',
        pedestalItems: ['minecraft:leather', 'minecraft:black_dye', 'minecraft:black_dye', 'minecraft:ender_pearl', 'minecraft:obsidian', 'gtceu:luminessence_dust'],
        output: 'artifacts:superstitious_hat',
        sourceCost: Source.SORCERER
    })

    addEnchantingRecipe(event, {
        reagent: 'nameless_trinkets:glowing_dust',
        pedestalItems: ['minecraft:leather', 'minecraft:emerald', 'minecraft:emerald', 'minecraft:wheat', 'minecraft:wheat', 'gtceu:luminessence_dust'],
        output: 'artifacts:villager_hat',
        sourceCost: Source.INITIATE
    })

    addEnchantingRecipe(event, {
        reagent: 'nameless_trinkets:glowing_dust',
        pedestalItems: ['minecraft:leather', 'minecraft:slime_ball', 'minecraft:tnt', 'minecraft:gunpowder', 'minecraft:string', 'gtceu:luminessence_dust'],
        output: 'artifacts:whoopee_cushion',
        sourceCost: Source.INITIATE
    })

    addEnchantingRecipe(event, {
        reagent: 'nameless_trinkets:ultimate_dust',
        pedestalItems: ['minecraft:glass_bottle', 'minecraft:white_wool', 'minecraft:white_wool', 'minecraft:feather', 'minecraft:feather', 'gtceu:holy_silver_dust', 'gtceu:holy_silver_dust'],
        output: 'artifacts:cloud_in_a_bottle',
        sourceCost: Source.ALCHEMIST
    })

    addEnchantingRecipe(event, {
        reagent: 'nameless_trinkets:ultimate_dust',
        pedestalItems: ['minecraft:diamond_block', 'minecraft:diamond', 'minecraft:diamond', 'minecraft:crying_obsidian', 'minecraft:totem_of_undying', 'gtceu:holy_silver_dust', 'gtceu:holy_silver_dust'],
        output: 'artifacts:crystal_heart',
        sourceCost: Source.ALCHEMIST
    })

    addEnchantingRecipe(event, {
        reagent: 'nameless_trinkets:ultimate_dust',
        pedestalItems: ['minecraft:glass_bottle', 'minecraft:feather', 'minecraft:feather', 'minecraft:phantom_membrane', 'minecraft:phantom_membrane', 'gtceu:holy_silver_dust', 'gtceu:holy_silver_dust'],
        output: 'artifacts:helium_flamingo',
        sourceCost: Source.ALCHEMIST
    })

    addEnchantingRecipe(event, {
        reagent: 'nameless_trinkets:ultimate_dust',
        pedestalItems: ['minecraft:iron_ingot', 'minecraft:iron_ingot', 'minecraft:glass', 'minecraft:glass', 'minecraft:spider_eye', 'gtceu:holy_silver_dust'],
        output: 'artifacts:night_vision_goggles',
        sourceCost: Source.ALCHEMIST
    })

    addEnchantingRecipe(event, {
        reagent: 'nameless_trinkets:ultimate_dust',
        pedestalItems: ['minecraft:obsidian', 'minecraft:obsidian', 'minecraft:obsidian', 'minecraft:obsidian', 'minecraft:magma_cream', 'gtceu:holy_silver_dust', 'gtceu:holy_silver_dust'],
        output: 'artifacts:obsidian_skull',
        sourceCost: Source.ALCHEMIST
    })

    addEnchantingRecipe(event, {
        reagent: 'nameless_trinkets:ultimate_dust',
        pedestalItems: ['create:iron_sheet', 'minecraft:iron_block', 'minecraft:iron_block', 'minecraft:flint', 'minecraft:flint', 'gtceu:holy_silver_dust', 'gtceu:holy_silver_dust'],
        output: 'artifacts:steadfast_spikes',
        sourceCost: Source.ALCHEMIST
    })

    addEnchantingRecipe(event, {
        reagent: 'nameless_trinkets:ultimate_dust',
        pedestalItems: ['minecraft:diamond', 'minecraft:diamond', 'minecraft:iron_block', 'minecraft:ender_pearl', 'minecraft:ender_pearl', 'gtceu:holy_silver_dust', 'gtceu:holy_silver_dust'],
        output: 'artifacts:universal_attractor',
        sourceCost: Source.ALCHEMIST
    })

    addEnchantingRecipe(event, {
        reagent: 'nameless_trinkets:ultimate_dust',
        pedestalItems: ['create:golden_sheet', 'minecraft:redstone_block', 'minecraft:rotten_flesh', 'minecraft:fermented_spider_eye', 'minecraft:diamond', 'gtceu:holy_silver_dust', 'gtceu:holy_silver_dust'],
        output: 'artifacts:vampiric_glove',
        sourceCost: Source.ALCHEMIST
    })

    addEnchantingRecipe(event, {
        reagent: 'nameless_trinkets:ultimate_dust',
        pedestalItems: ['minecraft:golden_apple', 'minecraft:gold_block', 'minecraft:feather', 'minecraft:ender_pearl', 'minecraft:rabbit_foot', 'gtceu:holy_silver_dust'],
        output: 'artifacts:panic_necklace',
        sourceCost: Source.ALCHEMIST
    })

    addEnchantingRecipe(event, {
        reagent: 'nameless_trinkets:ultimate_dust',
        pedestalItems: ['minecraft:totem_of_undying', 'minecraft:chorus_fruit', 'minecraft:chorus_fruit', 'minecraft:ender_pearl', 'minecraft:ender_pearl', 'gtceu:prima_materia_ingot', 'gtceu:prima_materia_ingot'],
        output: 'artifacts:chorus_totem',
        sourceCost: Source.ALCHEMIST
    })

    addEnchantingRecipe(event, {
        reagent: 'nameless_trinkets:ultimate_dust',
        pedestalItems: ['minecraft:golden_apple', 'minecraft:cooked_beef', 'minecraft:cooked_porkchop', 'minecraft:cooked_chicken', 'gtceu:prima_materia_ingot', 'gtceu:prima_materia_ingot'],
        output: 'artifacts:everlasting_beef',
        sourceCost: Source.ALCHEMIST
    })

})
