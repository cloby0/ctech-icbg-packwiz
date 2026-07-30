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
        pedestalItems: ['minecraft:leather_boots', 'minecraft:leather_boots', 'minecraft:packed_ice', 'kubejs:gravitic_matrix', 'kubejs:gravitic_motive_core', 'kubejs:gravitic_channeling_vessel', 'kubejs:chaos_essence'],
        output: 'artifacts:aqua_dashers',
        sourceCost: Source.SORCERER
    })

    addEnchantingRecipe(event, {
        reagent: 'nameless_trinkets:glowing_dust',
        pedestalItems: ['minecraft:leather_boots', 'minecraft:leather_boots', 'minecraft:slime_ball', 'kubejs:gravitic_matrix', 'minecraft:feather', 'kubejs:gravitic_motive_core', 'kubejs:chaos_essence'],
        output: 'artifacts:bunny_hoppers',
        sourceCost: Source.SORCERER
    })

    addEnchantingRecipe(event, {
        reagent: 'nameless_trinkets:glowing_dust',
        pedestalItems: ['create:iron_sheet', 'minecraft:iron_ingot', 'kubejs:gravitic_matrix', 'minecraft:flint', 'minecraft:flint', 'kubejs:gravitic_motive_core', 'kubejs:chaos_essence'],
        output: 'artifacts:digging_claws',
        sourceCost: Source.SORCERER
    })

    addEnchantingRecipe(event, {
        reagent: 'nameless_trinkets:glowing_dust',
        pedestalItems: ['create:iron_sheet', 'minecraft:iron_ingot', 'kubejs:gravitic_matrix', 'minecraft:flint', 'minecraft:feather', 'kubejs:gravitic_motive_core', 'kubejs:chaos_essence'],
        output: 'artifacts:feral_claws',
        sourceCost: Source.SORCERER
    })

    addEnchantingRecipe(event, {
        reagent: 'nameless_trinkets:glowing_dust',
        pedestalItems: ['minecraft:fire_charge', 'minecraft:magma_cream', 'minecraft:magma_cream', 'minecraft:blaze_rod', 'kubejs:gravitic_matrix', 'kubejs:gravitic_ward_lattice', 'kubejs:chaos_essence'],
        output: 'artifacts:fire_gauntlet',
        sourceCost: Source.SORCERER
    })

    addEnchantingRecipe(event, {
        reagent: 'nameless_trinkets:glowing_dust',
        pedestalItems: ['create:iron_sheet', 'minecraft:piston', 'minecraft:piston', 'minecraft:iron_ingot', 'kubejs:gravitic_matrix', 'kubejs:gravitic_motive_core', 'kubejs:chaos_essence'],
        output: 'artifacts:pocket_piston',
        sourceCost: Source.SORCERER
    })

    addEnchantingRecipe(event, {
        reagent: 'nameless_trinkets:glowing_dust',
        pedestalItems: ['create:iron_sheet', 'minecraft:iron_block', 'kubejs:gravitic_matrix', 'minecraft:diamond', 'minecraft:diamond', 'kubejs:gravitic_motive_core', 'kubejs:chaos_essence'],
        output: 'artifacts:power_glove',
        sourceCost: Source.SORCERER
    })

    addEnchantingRecipe(event, {
        reagent: 'nameless_trinkets:glowing_dust',
        pedestalItems: ['minecraft:leather', 'minecraft:phantom_membrane', 'kubejs:gravitic_matrix', 'minecraft:ender_pearl', 'minecraft:black_dye', 'kubejs:gravitic_ward_lattice', 'kubejs:chaos_essence'],
        output: 'artifacts:scarf_of_invisibility',
        sourceCost: Source.SORCERER
    })

    addEnchantingRecipe(event, {
        reagent: 'nameless_trinkets:glowing_dust',
        pedestalItems: ['minecraft:amethyst_shard', 'minecraft:lightning_rod', 'kubejs:gravitic_matrix', 'minecraft:quartz', 'minecraft:redstone', 'kubejs:gravitic_wizard_brain', 'kubejs:gravitic_channeling_vessel', 'kubejs:chaos_essence'],
        output: 'artifacts:shock_pendant',
        sourceCost: Source.SORCERER
    })

    addEnchantingRecipe(event, {
        reagent: 'nameless_trinkets:glowing_dust',
        pedestalItems: ['minecraft:iron_ingot', 'kubejs:gravitic_matrix', 'minecraft:cactus', 'minecraft:cactus', 'kubejs:gravitic_ward_lattice', 'kubejs:chaos_essence'],
        output: 'artifacts:thorn_pendant',
        sourceCost: Source.SORCERER
    })

    addEnchantingRecipe(event, {
        reagent: 'nameless_trinkets:glowing_dust',
        pedestalItems: ['minecraft:fire_charge', 'minecraft:blaze_rod', 'minecraft:blaze_powder', 'kubejs:gravitic_matrix', 'minecraft:amethyst_shard', 'kubejs:gravitic_wizard_brain', 'kubejs:chaos_essence'],
        output: 'artifacts:flame_pendant',
        sourceCost: Source.SORCERER
    })

    addEnchantingRecipe(event, {
        reagent: 'nameless_trinkets:glowing_dust',
        pedestalItems: ['minecraft:totem_of_undying', 'minecraft:golden_apple', 'minecraft:diamond', 'kubejs:gravitic_matrix', 'kubejs:gravitic_ward_lattice', 'kubejs:chaos_essence'],
        output: 'artifacts:cross_necklace',
        sourceCost: Source.SORCERER
    })

    addEnchantingRecipe(event, {
        reagent: 'nameless_trinkets:glowing_dust',
        pedestalItems: ['create:golden_sheet', 'minecraft:gold_block', 'kubejs:gravitic_matrix', 'minecraft:ender_pearl', 'minecraft:string', 'kubejs:gravitic_motive_core', 'kubejs:gravitic_channeling_vessel', 'kubejs:chaos_essence'],
        output: 'artifacts:golden_hook',
        sourceCost: Source.SORCERER
    })

    // Pulled to Hobbyist: air essence binds a slow-fall umbrella (was luminessence-tier enchanting)
    // Ward Lattice component fills the previously-blank slot: protection theme fits an umbrella.
    event.shaped(Item.of('artifacts:umbrella', 1), [
        'LAL', 'SIS', 'CTW'
    ], { 'L': 'minecraft:leather', 'A': '#kubejs:air_essences', 'S': 'minecraft:string', 'I': 'minecraft:iron_ingot', 'T': 'minecraft:stick', 'C': '#forge:tools/wire_cutters', 'W': 'kubejs:ichor_ward_lattice' }).damageIngredient(Ingredient.of('#forge:tools/wire_cutters'))

    addEnchantingRecipe(event, {
        reagent: 'nameless_trinkets:glowing_dust',
        pedestalItems: ['minecraft:glass_bottle', 'kubejs:gravitic_matrix', 'minecraft:honey_bottle', 'minecraft:honey_bottle', 'kubejs:gravitic_channeling_vessel', 'kubejs:gravitic_ward_lattice', 'kubejs:chaos_essence'],
        output: 'artifacts:antidote_vessel',
        sourceCost: Source.SORCERER
    })

    addEnchantingRecipe(event, {
        reagent: 'nameless_trinkets:glowing_dust',
        pedestalItems: ['create:iron_sheet', 'minecraft:netherrack', 'minecraft:flint_and_steel', 'minecraft:iron_pickaxe', 'minecraft:coal', 'kubejs:gravitic_matrix', 'kubejs:gravitic_wizard_brain', 'kubejs:chaos_essence'],
        output: 'artifacts:pickaxe_heater',
        sourceCost: Source.SORCERER
    })

    addEnchantingRecipe(event, {
        reagent: 'nameless_trinkets:glowing_dust',
        pedestalItems: ['minecraft:leather', 'minecraft:cod', 'minecraft:salmon', 'minecraft:string', 'minecraft:lily_pad', 'kubejs:elementium_matrix', 'kubejs:elementium_wizard_brain', 'kubejs:elementium_channeling_vessel', 'kubejs:sacred_ambrosium_shard'],
        output: 'artifacts:anglers_hat',
        sourceCost: Source.INITIATE
    })

    addEnchantingRecipe(event, {
        reagent: 'nameless_trinkets:glowing_dust',
        pedestalItems: ['minecraft:leather', 'kubejs:elementium_matrix', 'minecraft:feather', 'minecraft:gold_ingot', 'minecraft:string', 'kubejs:elementium_motive_core', 'kubejs:elementium_ward_lattice', 'kubejs:sacred_ambrosium_shard'],
        output: 'artifacts:cowboy_hat',
        sourceCost: Source.INITIATE
    })

    addEnchantingRecipe(event, {
        reagent: 'nameless_trinkets:glowing_dust',
        pedestalItems: ['minecraft:leather', 'minecraft:glass_bottle', 'kubejs:elementium_matrix', 'minecraft:sugar', 'minecraft:cactus', 'kubejs:elementium_wizard_brain', 'kubejs:elementium_channeling_vessel', 'kubejs:sacred_ambrosium_shard'],
        output: 'artifacts:novelty_drinking_hat',
        sourceCost: Source.INITIATE
    })

    addEnchantingRecipe(event, {
        reagent: 'nameless_trinkets:glowing_dust',
        pedestalItems: ['minecraft:leather', 'minecraft:glass_bottle', 'kubejs:elementium_matrix', 'minecraft:sugar', 'minecraft:string', 'kubejs:elementium_wizard_brain', 'kubejs:elementium_channeling_vessel', 'kubejs:sacred_ambrosium_shard'],
        output: 'artifacts:plastic_drinking_hat',
        sourceCost: Source.INITIATE
    })

    addEnchantingRecipe(event, {
        reagent: 'nameless_trinkets:glowing_dust',
        pedestalItems: ['minecraft:leather', 'minecraft:black_dye', 'kubejs:gravitic_matrix', 'minecraft:ender_pearl', 'minecraft:obsidian', 'kubejs:gravitic_ward_lattice', 'kubejs:chaos_essence'],
        output: 'artifacts:superstitious_hat',
        sourceCost: Source.SORCERER
    })

    addEnchantingRecipe(event, {
        reagent: 'nameless_trinkets:glowing_dust',
        pedestalItems: ['minecraft:leather', 'minecraft:emerald', 'kubejs:elementium_matrix', 'minecraft:wheat', 'kubejs:elementium_wizard_brain', 'kubejs:elementium_ward_lattice', 'kubejs:sacred_ambrosium_shard'],
        output: 'artifacts:villager_hat',
        sourceCost: Source.INITIATE
    })

    addEnchantingRecipe(event, {
        reagent: 'nameless_trinkets:glowing_dust',
        pedestalItems: ['minecraft:leather', 'minecraft:slime_ball', 'minecraft:tnt', 'minecraft:gunpowder', 'minecraft:string', 'kubejs:elementium_matrix', 'kubejs:elementium_wizard_brain', 'kubejs:elementium_motive_core', 'kubejs:sacred_ambrosium_shard'],
        output: 'artifacts:whoopee_cushion',
        sourceCost: Source.INITIATE
    })

    addEnchantingRecipe(event, {
        reagent: 'nameless_trinkets:ultimate_dust',
        pedestalItems: ['minecraft:glass_bottle', 'minecraft:white_wool', 'minecraft:white_wool', 'minecraft:feather', 'minecraft:feather', 'gtceu:holy_silver_dust', 'gtceu:holy_silver_dust', 'kubejs:animus_motive_core'],
        output: 'artifacts:cloud_in_a_bottle',
        sourceCost: Source.ALCHEMIST
    })

    addEnchantingRecipe(event, {
        reagent: 'nameless_trinkets:ultimate_dust',
        pedestalItems: ['minecraft:diamond_block', 'minecraft:diamond', 'minecraft:diamond', 'minecraft:crying_obsidian', 'minecraft:totem_of_undying', 'gtceu:holy_silver_dust', 'gtceu:holy_silver_dust', 'kubejs:animus_ward_lattice'],
        output: 'artifacts:crystal_heart',
        sourceCost: Source.ALCHEMIST
    })

    addEnchantingRecipe(event, {
        reagent: 'nameless_trinkets:ultimate_dust',
        pedestalItems: ['minecraft:glass_bottle', 'minecraft:feather', 'minecraft:feather', 'minecraft:phantom_membrane', 'minecraft:phantom_membrane', 'gtceu:holy_silver_dust', 'gtceu:holy_silver_dust', 'kubejs:animus_motive_core'],
        output: 'artifacts:helium_flamingo',
        sourceCost: Source.ALCHEMIST
    })

    addEnchantingRecipe(event, {
        reagent: 'nameless_trinkets:ultimate_dust',
        pedestalItems: ['minecraft:iron_ingot', 'minecraft:iron_ingot', 'minecraft:glass', 'minecraft:glass', 'minecraft:spider_eye', 'gtceu:holy_silver_dust', 'kubejs:animus_wizard_brain'],
        output: 'artifacts:night_vision_goggles',
        sourceCost: Source.ALCHEMIST
    })

    addEnchantingRecipe(event, {
        reagent: 'nameless_trinkets:ultimate_dust',
        pedestalItems: ['minecraft:obsidian', 'minecraft:obsidian', 'minecraft:obsidian', 'minecraft:obsidian', 'minecraft:magma_cream', 'gtceu:holy_silver_dust', 'gtceu:holy_silver_dust', 'kubejs:animus_ward_lattice'],
        output: 'artifacts:obsidian_skull',
        sourceCost: Source.ALCHEMIST
    })

    addEnchantingRecipe(event, {
        reagent: 'nameless_trinkets:ultimate_dust',
        pedestalItems: ['create:iron_sheet', 'minecraft:iron_block', 'minecraft:iron_block', 'minecraft:flint', 'minecraft:flint', 'gtceu:holy_silver_dust', 'gtceu:holy_silver_dust', 'kubejs:animus_ward_lattice'],
        output: 'artifacts:steadfast_spikes',
        sourceCost: Source.ALCHEMIST
    })

    addEnchantingRecipe(event, {
        reagent: 'nameless_trinkets:ultimate_dust',
        pedestalItems: ['minecraft:diamond', 'minecraft:diamond', 'minecraft:iron_block', 'minecraft:ender_pearl', 'minecraft:ender_pearl', 'gtceu:holy_silver_dust', 'gtceu:holy_silver_dust', 'kubejs:animus_channeling_vessel'],
        output: 'artifacts:universal_attractor',
        sourceCost: Source.ALCHEMIST
    })

    addEnchantingRecipe(event, {
        reagent: 'nameless_trinkets:ultimate_dust',
        pedestalItems: ['create:golden_sheet', 'minecraft:redstone_block', 'minecraft:rotten_flesh', 'minecraft:fermented_spider_eye', 'minecraft:diamond', 'gtceu:holy_silver_dust', 'gtceu:holy_silver_dust', 'kubejs:animus_channeling_vessel'],
        output: 'artifacts:vampiric_glove',
        sourceCost: Source.ALCHEMIST
    })

    addEnchantingRecipe(event, {
        reagent: 'nameless_trinkets:ultimate_dust',
        pedestalItems: ['minecraft:golden_apple', 'minecraft:gold_block', 'minecraft:feather', 'minecraft:ender_pearl', 'minecraft:rabbit_foot', 'gtceu:holy_silver_dust', 'kubejs:animus_wizard_brain'],
        output: 'artifacts:panic_necklace',
        sourceCost: Source.ALCHEMIST
    })

    addEnchantingRecipe(event, {
        reagent: 'nameless_trinkets:ultimate_dust',
        pedestalItems: ['minecraft:totem_of_undying', 'minecraft:chorus_fruit', 'minecraft:chorus_fruit', 'minecraft:ender_pearl', 'minecraft:ender_pearl', 'gtceu:prima_materia_ingot', 'gtceu:prima_materia_ingot', 'kubejs:animus_channeling_vessel'],
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
