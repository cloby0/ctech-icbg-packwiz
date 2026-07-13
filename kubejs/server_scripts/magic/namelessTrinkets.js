const Source = global.Source

ServerEvents.recipes(event => {

    event.remove({ output: 'nameless_trinkets:dubious_dust' })
    event.remove({ output: 'nameless_trinkets:glowing_dust' })
    event.remove({ output: 'nameless_trinkets:ultimate_dust' })
    event.remove({ output: 'nameless_trinkets:amphibious_hands' })
    event.remove({ output: 'nameless_trinkets:blaze_nucleus' })
    event.remove({ output: 'nameless_trinkets:blindfold' })
    event.remove({ output: 'nameless_trinkets:broken_ankh' })
    event.remove({ output: 'nameless_trinkets:broken_magnet' })
    event.remove({ output: 'nameless_trinkets:callus' })
    event.remove({ output: 'nameless_trinkets:cracked_crown' })
    event.remove({ output: 'nameless_trinkets:creeper_sense' })
    event.remove({ output: 'nameless_trinkets:dark_nelumbo' })
    event.remove({ output: 'nameless_trinkets:dragons_eye' })
    event.remove({ output: 'nameless_trinkets:electric_paddle' })
    event.remove({ output: 'nameless_trinkets:ethereal_wings' })
    event.remove({ output: 'nameless_trinkets:experience_battery' })
    event.remove({ output: 'nameless_trinkets:experience_magnet' })
    event.remove({ output: 'nameless_trinkets:explosion_proof_jacket' })
    event.remove({ output: 'nameless_trinkets:fate_emerald' })
    event.remove({ output: 'nameless_trinkets:fertilizer' })
    event.remove({ output: 'nameless_trinkets:four_leaf_clover' })
    event.remove({ output: 'nameless_trinkets:fractured_nullstone' })
    event.remove({ output: 'nameless_trinkets:fragile_cloud' })
    event.remove({ output: 'nameless_trinkets:ghast_eye' })
    event.remove({ output: 'nameless_trinkets:gills' })
    event.remove({ output: 'nameless_trinkets:ice_cube' })
    event.remove({ output: 'nameless_trinkets:light_gloves' })
    event.remove({ output: 'nameless_trinkets:lucky_rock' })
    event.remove({ output: 'nameless_trinkets:miners_soul' })
    event.remove({ output: 'nameless_trinkets:missing_page' })
    event.remove({ output: 'nameless_trinkets:moon_stone' })
    event.remove({ output: 'nameless_trinkets:nelumbo' })
    event.remove({ output: 'nameless_trinkets:pocket_lightning_rod' })
    event.remove({ output: 'nameless_trinkets:puffer_fish_liver' })
    event.remove({ output: 'nameless_trinkets:rage_mind' })
    event.remove({ output: 'nameless_trinkets:reforger' })
    event.remove({ output: 'nameless_trinkets:reverse_card' })
    event.remove({ output: 'nameless_trinkets:scarab_amulet' })
    event.remove({ output: 'nameless_trinkets:sigil_of_baphomet' })
    event.remove({ output: 'nameless_trinkets:sleeping_pills' })
    event.remove({ output: 'nameless_trinkets:speed_force' })
    event.remove({ output: 'nameless_trinkets:spider_legs' })
    event.remove({ output: 'nameless_trinkets:super_magnet' })
    event.remove({ output: 'nameless_trinkets:tear_of_the_sea' })
    event.remove({ output: 'nameless_trinkets:tick' })
    event.remove({ output: 'nameless_trinkets:true_heart_of_the_sea' })
    event.remove({ output: 'nameless_trinkets:vampire_blood' })
    event.remove({ output: 'nameless_trinkets:what_magnet' })
    event.remove({ output: 'nameless_trinkets:wooden_stick' })

    event.custom({
        "type": "hexerei:mixingcauldron",
        "liquid": { "fluid": "minecraft:lava" },
        "ingredients": [
            { "item": "gtceu:iron_dust" }, { "item": "gtceu:gold_dust" },
            { "item": "minecraft:redstone" }, { "item": "minecraft:gunpowder" },
            { "item": "gtceu:iron_dust" }, { "item": "gtceu:gold_dust" },
            { "item": "minecraft:redstone" }, { "item": "minecraft:gunpowder" }
        ],
        "output": { "item": "nameless_trinkets:dubious_dust" },
        "liquidOutput": { "fluid": "minecraft:lava" },
        "fluidLevelsConsumed": 1000,
        "heatRequirement": "heated"
    })

    addImbuementRecipe(event, {
        input: 'nameless_trinkets:dubious_dust',
        output: 'nameless_trinkets:glowing_dust',
        source: Source.JOURNEYMAN,
        pedestalItems: ['minecraft:glowstone_dust', 'minecraft:blaze_rod', 'minecraft:glowstone_dust', 'minecraft:quartz']
    })

    addEnchantingRecipe(event, {
        reagent: 'nameless_trinkets:glowing_dust',
        pedestalItems: ['minecraft:ender_eye', 'gtceu:luminessence_dust', 'minecraft:ender_eye', 'gtceu:luminessence_dust'],
        output: 'nameless_trinkets:ultimate_dust',
        sourceCost: Source.SORCERER
    })

    event.shaped(Item.of('nameless_trinkets:amphibious_hands', 1), [
        'K##', '#S#', '###'
    ], { '#': 'minecraft:kelp', 'S': 'nameless_trinkets:dubious_dust', 'K': '#forge:tools/knives' }).damageIngredient(Ingredient.of('#forge:tools/knives'))

    event.shaped(Item.of('nameless_trinkets:blaze_nucleus', 1), [
        '///', '/S/', '///'
    ], { '/': 'minecraft:blaze_rod', 'S': 'nameless_trinkets:dubious_dust' })

    event.shaped(Item.of('nameless_trinkets:blindfold', 1), [
        'KG#', 'GSG', '#G#'
    ], { '#': 'minecraft:leather', 'G': 'minecraft:golden_carrot', 'S': 'nameless_trinkets:dubious_dust', 'K': '#forge:tools/knives' }).damageIngredient(Ingredient.of('#forge:tools/knives'))

    event.shaped(Item.of('nameless_trinkets:broken_magnet', 1), [
        'MLi', 'RSL', 'iRi'
    ], { 'i': 'minecraft:iron_ingot', 'L': 'minecraft:lapis_lazuli', 'R': 'minecraft:redstone', 'S': 'nameless_trinkets:dubious_dust', 'M': '#forge:tools/hammers' }).damageIngredient(Ingredient.of('#forge:tools/hammers'))

    event.shaped(Item.of('nameless_trinkets:creeper_sense', 1), [
        '###', 'TST', '###'
    ], { '#': 'minecraft:gunpowder', 'T': 'minecraft:tnt', 'S': 'nameless_trinkets:dubious_dust' })

    event.shaped(Item.of('nameless_trinkets:dark_nelumbo', 1), [
        'KM#', 'CSC', '#C#'
    ], { '#': 'minecraft:nether_wart', 'M': 'minecraft:magma_block', 'C': 'minecraft:crimson_stem', 'S': 'nameless_trinkets:dubious_dust', 'K': '#forge:tools/knives' }).damageIngredient(Ingredient.of('#forge:tools/knives'))

    event.shaped(Item.of('nameless_trinkets:dragons_eye', 1), [
        '#W#', '#S#', '#W#'
    ], { '#': 'minecraft:ender_eye', 'W': 'minecraft:end_stone', 'S': 'nameless_trinkets:dubious_dust' })

    event.shaped(Item.of('nameless_trinkets:experience_magnet', 1), [
        'FGi', 'RSR', 'iRi'
    ], { 'i': 'minecraft:iron_ingot', 'G': 'minecraft:glass_bottle', 'R': 'minecraft:redstone', 'S': 'nameless_trinkets:dubious_dust', 'F': '#forge:tools/files' }).damageIngredient(Ingredient.of('#forge:tools/files'))

    event.shaped(Item.of('nameless_trinkets:explosion_proof_jacket', 1), [
        'KLi', 'LSL', 'iLi'
    ], { 'i': 'minecraft:iron_ingot', 'L': 'minecraft:leather_chestplate', 'S': 'nameless_trinkets:dubious_dust', 'K': '#forge:tools/knives' }).damageIngredient(Ingredient.of('#forge:tools/knives'))

    event.shaped(Item.of('nameless_trinkets:gills', 1), [
        'N# ', 'TSK', ' P '
    ], { '#': 'minecraft:cod', 'T': 'minecraft:tropical_fish', 'S': 'nameless_trinkets:dubious_dust', 'K': 'minecraft:salmon', 'P': 'minecraft:pufferfish', 'N': '#forge:tools/knives' }).damageIngredient(Ingredient.of('#forge:tools/knives'))

    event.shaped(Item.of('nameless_trinkets:ice_cube', 1), [
        '#S#', 'SPS', '#S#'
    ], { '#': 'minecraft:ice', 'S': 'minecraft:snow_block', 'P': 'nameless_trinkets:dubious_dust' })

    event.shaped(Item.of('nameless_trinkets:lucky_rock', 1), [
        'HR#', 'iSg', '#C#'
    ], { '#': 'minecraft:cobblestone', 'R': 'minecraft:redstone', 'i': 'minecraft:iron_ingot', 'S': 'nameless_trinkets:dubious_dust', 'g': 'minecraft:gold_ingot', 'C': 'minecraft:coal', 'H': '#forge:tools/hammers' }).damageIngredient(Ingredient.of('#forge:tools/hammers'))

    event.shaped(Item.of('nameless_trinkets:moon_stone', 1), [
        '###', 'SKS', '###'
    ], { '#': 'minecraft:feather', 'S': 'minecraft:sponge', 'K': 'nameless_trinkets:dubious_dust' })

    event.shaped(Item.of('nameless_trinkets:nelumbo', 1), [
        '#S#', 'WQO', '#O#'
    ], { '#': 'minecraft:lily_pad', 'S': 'minecraft:sponge', 'O': 'minecraft:oak_log', 'Q': 'nameless_trinkets:dubious_dust', 'W': '#forge:tools/saws' }).damageIngredient(Ingredient.of('#forge:tools/saws'))

    event.shaped(Item.of('nameless_trinkets:pocket_lightning_rod', 1), [
        'C//', '/S/', '///'
    ], { '/': 'minecraft:string', 'S': 'nameless_trinkets:dubious_dust', 'C': '#forge:tools/wire_cutters' }).damageIngredient(Ingredient.of('#forge:tools/wire_cutters'))

    event.shapeless(Item.of('nameless_trinkets:puffer_fish_liver', 1), [
        'minecraft:pufferfish', 'nameless_trinkets:dubious_dust', '#forge:tools/knives'
    ]).damageIngredient(Ingredient.of('#forge:tools/knives'))

    event.shaped(Item.of('nameless_trinkets:sleeping_pills', 1), [
        '#MP', 'GYG', 'SFS'
    ], { '#': 'minecraft:dandelion', 'S': 'minecraft:sugar', 'P': 'minecraft:poppy', 'G': 'minecraft:golden_carrot', 'Y': 'nameless_trinkets:dubious_dust', 'F': 'minecraft:fermented_spider_eye', 'M': '#forge:tools/mortars' }).damageIngredient(Ingredient.of('#forge:tools/mortars'))

    event.shaped(Item.of('nameless_trinkets:spider_legs', 1), [
        '#S#', 'CUR', '#R#'
    ], { '#': 'minecraft:cobweb', 'S': 'minecraft:spider_eye', 'R': 'minecraft:string', 'U': 'nameless_trinkets:dubious_dust', 'C': '#forge:tools/wire_cutters' }).damageIngredient(Ingredient.of('#forge:tools/wire_cutters'))

    event.shaped(Item.of('nameless_trinkets:wooden_stick', 1), [
        'gWg', '/S/', 'g/g'
    ], { 'g': 'minecraft:gold_ingot', '/': 'minecraft:stick', 'S': 'nameless_trinkets:dubious_dust', 'W': '#forge:tools/saws' }).damageIngredient(Ingredient.of('#forge:tools/saws'))

    addImbuementRecipe(event, { input: 'nameless_trinkets:glowing_dust', output: 'nameless_trinkets:callus', source: Source.INITIATE, pedestalItems: ['minecraft:rotten_flesh', 'minecraft:cobblestone', 'minecraft:hay_block', 'minecraft:rotten_flesh'] })
    addImbuementRecipe(event, { input: 'nameless_trinkets:glowing_dust', output: 'nameless_trinkets:electric_paddle', source: Source.INITIATE, pedestalItems: ['minecraft:oak_boat', 'minecraft:redstone', 'minecraft:oak_boat', 'minecraft:redstone'] })
    addImbuementRecipe(event, { input: 'nameless_trinkets:glowing_dust', output: 'nameless_trinkets:ethereal_wings', source: Source.INITIATE, pedestalItems: ['minecraft:feather', 'minecraft:phantom_membrane', 'minecraft:feather', 'minecraft:glass_pane'] })
    addImbuementRecipe(event, { input: 'nameless_trinkets:glowing_dust', output: 'nameless_trinkets:experience_battery', source: Source.INITIATE, pedestalItems: ['minecraft:glass_bottle', 'minecraft:redstone', 'minecraft:glass_bottle', 'minecraft:iron_ingot'] })
    addImbuementRecipe(event, { input: 'nameless_trinkets:glowing_dust', output: 'nameless_trinkets:fertilizer', source: Source.INITIATE, pedestalItems: ['minecraft:bone_block', 'minecraft:dirt', 'minecraft:bone_block', 'minecraft:leather'] })
    addImbuementRecipe(event, { input: 'nameless_trinkets:glowing_dust', output: 'nameless_trinkets:fractured_nullstone', source: Source.INITIATE, pedestalItems: ['minecraft:glowstone', 'minecraft:lapis_block', 'minecraft:glowstone', 'minecraft:lapis_block'] })
    addImbuementRecipe(event, { input: 'nameless_trinkets:glowing_dust', output: 'nameless_trinkets:fragile_cloud', source: Source.INITIATE, pedestalItems: ['minecraft:white_wool', 'minecraft:white_wool', 'minecraft:white_wool', 'minecraft:white_wool'] })
    addImbuementRecipe(event, { input: 'nameless_trinkets:glowing_dust', output: 'nameless_trinkets:ghast_eye', source: Source.INITIATE, pedestalItems: ['minecraft:ghast_tear', 'minecraft:redstone_block', 'minecraft:ghast_tear', 'minecraft:redstone_block'] })
    addImbuementRecipe(event, { input: 'nameless_trinkets:glowing_dust', output: 'nameless_trinkets:missing_page', source: Source.INITIATE, pedestalItems: ['minecraft:rotten_flesh', 'minecraft:paper', 'minecraft:bone', 'minecraft:paper'] })
    addImbuementRecipe(event, { input: 'nameless_trinkets:glowing_dust', output: 'nameless_trinkets:scarab_amulet', source: Source.INITIATE, pedestalItems: ['minecraft:chiseled_sandstone', 'minecraft:chiseled_sandstone', 'minecraft:chiseled_sandstone', 'minecraft:chiseled_sandstone'] })
    addImbuementRecipe(event, { input: 'nameless_trinkets:glowing_dust', output: 'nameless_trinkets:speed_force', source: Source.INITIATE, pedestalItems: ['minecraft:sugar', 'minecraft:rabbit_foot', 'minecraft:sugar', 'minecraft:feather'] })
    addImbuementRecipe(event, { input: 'nameless_trinkets:glowing_dust', output: 'nameless_trinkets:super_magnet', source: Source.SORCERER, pedestalItems: ['nameless_trinkets:experience_magnet', 'nameless_trinkets:broken_magnet', 'minecraft:iron_block', 'minecraft:iron_block'] })
    addImbuementRecipe(event, { input: 'nameless_trinkets:glowing_dust', output: 'nameless_trinkets:tear_of_the_sea', source: Source.INITIATE, pedestalItems: ['minecraft:cod', 'minecraft:salmon', 'minecraft:tropical_fish', 'minecraft:pufferfish'] })
    addImbuementRecipe(event, { input: 'nameless_trinkets:glowing_dust', output: 'nameless_trinkets:tick', source: Source.INITIATE, pedestalItems: ['minecraft:brown_mushroom', 'minecraft:red_mushroom', 'minecraft:hay_block', 'minecraft:hay_block'] })
    addImbuementRecipe(event, { input: 'nameless_trinkets:glowing_dust', output: 'nameless_trinkets:vampire_blood', source: Source.INITIATE, pedestalItems: ['minecraft:crying_obsidian', 'minecraft:blaze_powder', 'minecraft:blaze_powder', 'minecraft:clock'] })
    addImbuementRecipe(event, { input: 'nameless_trinkets:glowing_dust', output: 'nameless_trinkets:what_magnet', source: Source.INITIATE, pedestalItems: ['minecraft:rotten_flesh', 'minecraft:leather', 'minecraft:porkchop', 'minecraft:bone'] })

    addEnchantingRecipe(event, {
        reagent: "nameless_trinkets:ultimate_dust",
        pedestalItems: ["minecraft:bone", "minecraft:wither_skeleton_skull", "minecraft:bone", "gtceu:luminessence_dust"],
        output: "nameless_trinkets:broken_ankh",
        sourceCost: Source.SORCERER
    })

    addEnchantingRecipe(event, {
        reagent: "nameless_trinkets:ultimate_dust",
        pedestalItems: ["minecraft:gold_block", "minecraft:netherite_scrap", "minecraft:gold_block", "gtceu:luminessence_dust"],
        output: "nameless_trinkets:cracked_crown",
        sourceCost: Source.SORCERER
    })

    addEnchantingRecipe(event, {
        reagent: "nameless_trinkets:ultimate_dust",
        pedestalItems: ["minecraft:emerald_block", "minecraft:bell", "minecraft:emerald_block", "minecraft:bell", "gtceu:luminessence_dust", "gtceu:luminessence_dust"],
        output: "nameless_trinkets:fate_emerald",
        sourceCost: Source.SORCERER
    })

    addEnchantingRecipe(event, {
        reagent: "nameless_trinkets:ultimate_dust",
        pedestalItems: ["minecraft:diamond_block", "minecraft:grass", "minecraft:diamond_block", "minecraft:grass", "gtceu:luminessence_dust", "gtceu:luminessence_dust"],
        output: "nameless_trinkets:four_leaf_clover",
        sourceCost: Source.ALCHEMIST
    })

    addEnchantingRecipe(event, {
        reagent: "nameless_trinkets:ultimate_dust",
        pedestalItems: ["minecraft:gold_block", "minecraft:diamond", "minecraft:gold_block", "minecraft:diamond", "gtceu:holy_silver_dust", "gtceu:luminessence_dust"],
        output: "nameless_trinkets:light_gloves",
        sourceCost: Source.ALCHEMIST
    })

    addEnchantingRecipe(event, {
        reagent: "nameless_trinkets:ultimate_dust",
        pedestalItems: ["minecraft:blackstone", "minecraft:emerald", "minecraft:diamond", "minecraft:lapis_lazuli", "gtceu:luminessence_dust"],
        output: "nameless_trinkets:miners_soul",
        sourceCost: Source.ALCHEMIST
    })

    addEnchantingRecipe(event, {
        reagent: "nameless_trinkets:ultimate_dust",
        pedestalItems: ["minecraft:crying_obsidian", "minecraft:diamond", "minecraft:magma_block", "minecraft:diamond", "gtceu:holy_silver_dust"],
        output: "nameless_trinkets:rage_mind",
        sourceCost: Source.ALCHEMIST
    })

    addEnchantingRecipe(event, {
        reagent: "nameless_trinkets:ultimate_dust",
        pedestalItems: ["minecraft:gold_block", "minecraft:iron_block", "minecraft:gold_block", "minecraft:iron_block", "gtceu:luminessence_dust"],
        output: "nameless_trinkets:reforger",
        sourceCost: Source.SORCERER
    })

    addEnchantingRecipe(event, {
        reagent: "nameless_trinkets:ultimate_dust",
        pedestalItems: ["minecraft:shield", "minecraft:iron_block", "minecraft:shield", "minecraft:iron_block", "gtceu:luminessence_dust"],
        output: "nameless_trinkets:reverse_card",
        sourceCost: Source.SORCERER
    })

    addEnchantingRecipe(event, {
        reagent: "nameless_trinkets:ultimate_dust",
        pedestalItems: ["minecraft:obsidian", "minecraft:wither_skeleton_skull", "minecraft:obsidian", "minecraft:netherite_scrap", "gtceu:luminessence_dust", "gtceu:holy_silver_dust"],
        output: "nameless_trinkets:sigil_of_baphomet",
        sourceCost: Source.ALCHEMIST
    })

    addEnchantingRecipe(event, {
        reagent: "nameless_trinkets:ultimate_dust",
        pedestalItems: ["minecraft:heart_of_the_sea", "nameless_trinkets:gills", "nameless_trinkets:tear_of_the_sea", "nameless_trinkets:amphibious_hands", "gtceu:luminessence_dust"],
        output: "nameless_trinkets:true_heart_of_the_sea",
        sourceCost: Source.ALCHEMIST
    })

})
