ServerEvents.recipes(event => {

    // REMOVALS
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

    // ============================================================
    // DUST SYNTHESIS — magic progression gates
    // ============================================================

    // dubious_dust — Hexerei lava cauldron (Hobbyist)
    // iron + gold + redstone + gunpowder cooked in lava = reactive chaotic compound
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

    // glowing_dust — imbuement chamber, 500 source (Journeyman)
    // dubious compound excited by nether light energy into luminous reactive form
    event.recipes.ars_nouveau.imbuement(
        "nameless_trinkets:dubious_dust",
        "nameless_trinkets:glowing_dust",
        500,
        ["minecraft:glowstone_dust", "minecraft:blaze_rod", "minecraft:glowstone_dust", "minecraft:quartz"]
    )

    // ultimate_dust — enchanting apparatus, 2000 source (Initiate)
    // glowing compound resonated with ender and luminessence into highest-potency form
    event.recipes.ars_nouveau.enchanting_apparatus(
        ["minecraft:ender_eye", "gtceu:luminessence_dust", "minecraft:ender_eye", "gtceu:luminessence_dust"],
        "nameless_trinkets:glowing_dust",
        "nameless_trinkets:ultimate_dust",
        2000
    )

    // ============================================================
    // SHAPED TRINKETS — dubious_dust tier (Apprentice/Journeyman)
    // vanilla ingredient shapes kept; dust is the progression gate
    // ============================================================

    event.shaped(Item.of('nameless_trinkets:amphibious_hands', 1), [
        '###', '#S#', '###'
    ], { '#': 'minecraft:kelp', 'S': 'nameless_trinkets:dubious_dust' })

    event.shaped(Item.of('nameless_trinkets:blaze_nucleus', 1), [
        '///', '/S/', '///'
    ], { '/': 'minecraft:blaze_rod', 'S': 'nameless_trinkets:dubious_dust' })

    event.shaped(Item.of('nameless_trinkets:blindfold', 1), [
        '#G#', 'GSG', '#G#'
    ], { '#': 'minecraft:leather', 'G': 'minecraft:golden_carrot', 'S': 'nameless_trinkets:dubious_dust' })

    event.shaped(Item.of('nameless_trinkets:broken_magnet', 1), [
        'iLi', 'RSL', 'iRi'
    ], { 'i': 'minecraft:iron_ingot', 'L': 'minecraft:lapis_lazuli', 'R': 'minecraft:redstone', 'S': 'nameless_trinkets:dubious_dust' })

    event.shaped(Item.of('nameless_trinkets:creeper_sense', 1), [
        '###', 'TST', '###'
    ], { '#': 'minecraft:gunpowder', 'T': 'minecraft:tnt', 'S': 'nameless_trinkets:dubious_dust' })

    event.shaped(Item.of('nameless_trinkets:dark_nelumbo', 1), [
        '#M#', 'CSC', '#C#'
    ], { '#': 'minecraft:nether_wart', 'M': 'minecraft:magma_block', 'C': 'minecraft:crimson_stem', 'S': 'nameless_trinkets:dubious_dust' })

    event.shaped(Item.of('nameless_trinkets:dragons_eye', 1), [
        '#W#', '#S#', '#W#'
    ], { '#': 'minecraft:ender_eye', 'W': 'minecraft:end_stone', 'S': 'nameless_trinkets:dubious_dust' })

    event.shaped(Item.of('nameless_trinkets:experience_magnet', 1), [
        'iGi', 'RSR', 'iRi'
    ], { 'i': 'minecraft:iron_ingot', 'G': 'minecraft:glass_bottle', 'R': 'minecraft:redstone', 'S': 'nameless_trinkets:dubious_dust' })

    event.shaped(Item.of('nameless_trinkets:explosion_proof_jacket', 1), [
        'iLi', 'LSL', 'iLi'
    ], { 'i': 'minecraft:iron_ingot', 'L': 'minecraft:leather_chestplate', 'S': 'nameless_trinkets:dubious_dust' })

    event.shaped(Item.of('nameless_trinkets:gills', 1), [
        ' # ', 'TSK', ' P '
    ], { '#': 'minecraft:cod', 'T': 'minecraft:tropical_fish', 'S': 'nameless_trinkets:dubious_dust', 'K': 'minecraft:salmon', 'P': 'minecraft:pufferfish' })

    event.shaped(Item.of('nameless_trinkets:ice_cube', 1), [
        '#S#', 'SPS', '#S#'
    ], { '#': 'minecraft:ice', 'S': 'minecraft:snow_block', 'P': 'nameless_trinkets:dubious_dust' })

    event.shaped(Item.of('nameless_trinkets:lucky_rock', 1), [
        '#R#', 'iSg', '#C#'
    ], { '#': 'minecraft:cobblestone', 'R': 'minecraft:redstone', 'i': 'minecraft:iron_ingot', 'S': 'nameless_trinkets:dubious_dust', 'g': 'minecraft:gold_ingot', 'C': 'minecraft:coal' })

    event.shaped(Item.of('nameless_trinkets:moon_stone', 1), [
        '###', 'SKS', '###'
    ], { '#': 'minecraft:feather', 'S': 'minecraft:sponge', 'K': 'nameless_trinkets:dubious_dust' })

    event.shaped(Item.of('nameless_trinkets:nelumbo', 1), [
        '#S#', 'OQO', '#O#'
    ], { '#': 'minecraft:lily_pad', 'S': 'minecraft:sponge', 'O': 'minecraft:oak_log', 'Q': 'nameless_trinkets:dubious_dust' })

    event.shaped(Item.of('nameless_trinkets:pocket_lightning_rod', 1), [
        '///', '/S/', '///'
    ], { '/': 'minecraft:string', 'S': 'nameless_trinkets:dubious_dust' })

    event.shapeless(Item.of('nameless_trinkets:puffer_fish_liver', 1), [
        'minecraft:pufferfish', 'nameless_trinkets:dubious_dust'
    ])

    event.shaped(Item.of('nameless_trinkets:sleeping_pills', 1), [
        '#SP', 'GYG', 'SFS'
    ], { '#': 'minecraft:dandelion', 'S': 'minecraft:sugar', 'P': 'minecraft:poppy', 'G': 'minecraft:golden_carrot', 'Y': 'nameless_trinkets:dubious_dust', 'F': 'minecraft:fermented_spider_eye' })

    event.shaped(Item.of('nameless_trinkets:spider_legs', 1), [
        '#S#', 'RUR', '#R#'
    ], { '#': 'minecraft:cobweb', 'S': 'minecraft:spider_eye', 'R': 'minecraft:string', 'U': 'nameless_trinkets:dubious_dust' })

    event.shaped(Item.of('nameless_trinkets:wooden_stick', 1), [
        'g/g', '/S/', 'g/g'
    ], { 'g': 'minecraft:gold_ingot', '/': 'minecraft:stick', 'S': 'nameless_trinkets:dubious_dust' })

    // ============================================================
    // IMBUEMENT TRINKETS — glowing_dust tier (Journeyman/Initiate)
    // glowing_dust = center input; thematic ingredients on pedestals
    // ============================================================

    event.recipes.ars_nouveau.imbuement(
        "nameless_trinkets:glowing_dust", "nameless_trinkets:callus", 750,
        ["minecraft:rotten_flesh", "minecraft:cobblestone", "minecraft:hay_block", "minecraft:rotten_flesh"]
    )

    event.recipes.ars_nouveau.imbuement(
        "nameless_trinkets:glowing_dust", "nameless_trinkets:electric_paddle", 750,
        ["minecraft:oak_boat", "minecraft:redstone", "minecraft:oak_boat", "minecraft:redstone"]
    )

    event.recipes.ars_nouveau.imbuement(
        "nameless_trinkets:glowing_dust", "nameless_trinkets:ethereal_wings", 1000,
        ["minecraft:feather", "minecraft:phantom_membrane", "minecraft:feather", "minecraft:glass_pane"]
    )

    event.recipes.ars_nouveau.imbuement(
        "nameless_trinkets:glowing_dust", "nameless_trinkets:experience_battery", 750,
        ["minecraft:glass_bottle", "minecraft:redstone", "minecraft:glass_bottle", "minecraft:iron_ingot"]
    )

    event.recipes.ars_nouveau.imbuement(
        "nameless_trinkets:glowing_dust", "nameless_trinkets:fertilizer", 750,
        ["minecraft:bone_block", "minecraft:dirt", "minecraft:bone_block", "minecraft:leather"]
    )

    event.recipes.ars_nouveau.imbuement(
        "nameless_trinkets:glowing_dust", "nameless_trinkets:fractured_nullstone", 1000,
        ["minecraft:glowstone", "minecraft:lapis_block", "minecraft:glowstone", "minecraft:lapis_block"]
    )

    event.recipes.ars_nouveau.imbuement(
        "nameless_trinkets:glowing_dust", "nameless_trinkets:fragile_cloud", 750,
        ["minecraft:white_wool", "minecraft:white_wool", "minecraft:white_wool", "minecraft:white_wool"]
    )

    event.recipes.ars_nouveau.imbuement(
        "nameless_trinkets:glowing_dust", "nameless_trinkets:ghast_eye", 1000,
        ["minecraft:ghast_tear", "minecraft:redstone_block", "minecraft:ghast_tear", "minecraft:redstone_block"]
    )

    event.recipes.ars_nouveau.imbuement(
        "nameless_trinkets:glowing_dust", "nameless_trinkets:missing_page", 1000,
        ["minecraft:rotten_flesh", "minecraft:paper", "minecraft:bone", "minecraft:paper"]
    )

    event.recipes.ars_nouveau.imbuement(
        "nameless_trinkets:glowing_dust", "nameless_trinkets:scarab_amulet", 750,
        ["minecraft:chiseled_sandstone", "minecraft:chiseled_sandstone", "minecraft:chiseled_sandstone", "minecraft:chiseled_sandstone"]
    )

    event.recipes.ars_nouveau.imbuement(
        "nameless_trinkets:glowing_dust", "nameless_trinkets:speed_force", 1000,
        ["minecraft:sugar", "minecraft:rabbit_foot", "minecraft:sugar", "minecraft:feather"]
    )

    // super_magnet requires both sub-magnets on pedestals
    event.recipes.ars_nouveau.imbuement(
        "nameless_trinkets:glowing_dust", "nameless_trinkets:super_magnet", 1500,
        ["nameless_trinkets:experience_magnet", "nameless_trinkets:broken_magnet", "minecraft:iron_block", "minecraft:iron_block"]
    )

    event.recipes.ars_nouveau.imbuement(
        "nameless_trinkets:glowing_dust", "nameless_trinkets:tear_of_the_sea", 1000,
        ["minecraft:cod", "minecraft:salmon", "minecraft:tropical_fish", "minecraft:pufferfish"]
    )

    event.recipes.ars_nouveau.imbuement(
        "nameless_trinkets:glowing_dust", "nameless_trinkets:tick", 750,
        ["minecraft:brown_mushroom", "minecraft:red_mushroom", "minecraft:hay_block", "minecraft:hay_block"]
    )

    event.recipes.ars_nouveau.imbuement(
        "nameless_trinkets:glowing_dust", "nameless_trinkets:vampire_blood", 1000,
        ["minecraft:crying_obsidian", "minecraft:blaze_powder", "minecraft:blaze_powder", "minecraft:clock"]
    )

    event.recipes.ars_nouveau.imbuement(
        "nameless_trinkets:glowing_dust", "nameless_trinkets:what_magnet", 750,
        ["minecraft:rotten_flesh", "minecraft:leather", "minecraft:porkchop", "minecraft:bone"]
    )

    // ============================================================
    // ENCHANTING APPARATUS TRINKETS — ultimate_dust tier (Initiate+)
    // ultimate_dust = catalyst on apparatus; thematic + magic pedestals
    // ============================================================

    event.recipes.ars_nouveau.enchanting_apparatus(
        ["minecraft:bone", "minecraft:wither_skeleton_skull", "minecraft:bone", "gtceu:luminessence_dust"],
        "nameless_trinkets:ultimate_dust",
        "nameless_trinkets:broken_ankh",
        2500
    )

    // cracked_crown upgrades to gods_crown via vanilla smithing transform
    event.recipes.ars_nouveau.enchanting_apparatus(
        ["minecraft:gold_block", "minecraft:netherite_scrap", "minecraft:gold_block", "gtceu:luminessence_dust"],
        "nameless_trinkets:ultimate_dust",
        "nameless_trinkets:cracked_crown",
        2500
    )

    event.recipes.ars_nouveau.enchanting_apparatus(
        ["minecraft:emerald_block", "minecraft:bell", "minecraft:emerald_block", "minecraft:bell", "gtceu:luminessence_dust", "gtceu:luminessence_dust"],
        "nameless_trinkets:ultimate_dust",
        "nameless_trinkets:fate_emerald",
        2500
    )

    event.recipes.ars_nouveau.enchanting_apparatus(
        ["minecraft:diamond_block", "minecraft:grass", "minecraft:diamond_block", "minecraft:grass", "gtceu:luminessence_dust", "gtceu:luminessence_dust"],
        "nameless_trinkets:ultimate_dust",
        "nameless_trinkets:four_leaf_clover",
        3000
    )

    // holy_silver pedestal gates light_gloves at Initiate
    event.recipes.ars_nouveau.enchanting_apparatus(
        ["minecraft:gold_block", "minecraft:diamond", "minecraft:gold_block", "minecraft:diamond", "gtceu:holy_silver_dust", "gtceu:luminessence_dust"],
        "nameless_trinkets:ultimate_dust",
        "nameless_trinkets:light_gloves",
        3000
    )

    event.recipes.ars_nouveau.enchanting_apparatus(
        ["minecraft:blackstone", "minecraft:emerald", "minecraft:diamond", "minecraft:lapis_lazuli", "gtceu:luminessence_dust"],
        "nameless_trinkets:ultimate_dust",
        "nameless_trinkets:miners_soul",
        3000
    )

    event.recipes.ars_nouveau.enchanting_apparatus(
        ["minecraft:crying_obsidian", "minecraft:diamond", "minecraft:magma_block", "minecraft:diamond", "gtceu:holy_silver_dust"],
        "nameless_trinkets:ultimate_dust",
        "nameless_trinkets:rage_mind",
        3000
    )

    event.recipes.ars_nouveau.enchanting_apparatus(
        ["minecraft:gold_block", "minecraft:iron_block", "minecraft:gold_block", "minecraft:iron_block", "gtceu:luminessence_dust"],
        "nameless_trinkets:ultimate_dust",
        "nameless_trinkets:reforger",
        2500
    )

    event.recipes.ars_nouveau.enchanting_apparatus(
        ["minecraft:shield", "minecraft:iron_block", "minecraft:shield", "minecraft:iron_block", "gtceu:luminessence_dust"],
        "nameless_trinkets:ultimate_dust",
        "nameless_trinkets:reverse_card",
        2500
    )

    // sigil requires wither skull + netherite + holy_silver — Initiate dark ritual
    event.recipes.ars_nouveau.enchanting_apparatus(
        ["minecraft:obsidian", "minecraft:wither_skeleton_skull", "minecraft:obsidian", "minecraft:netherite_scrap", "gtceu:luminessence_dust", "gtceu:holy_silver_dust"],
        "nameless_trinkets:ultimate_dust",
        "nameless_trinkets:sigil_of_baphomet",
        3500
    )

    // consumes gills + tear + amphibious_hands as the three sea sub-trinkets
    event.recipes.ars_nouveau.enchanting_apparatus(
        ["minecraft:heart_of_the_sea", "nameless_trinkets:gills", "nameless_trinkets:tear_of_the_sea", "nameless_trinkets:amphibious_hands", "gtceu:luminessence_dust"],
        "nameless_trinkets:ultimate_dust",
        "nameless_trinkets:true_heart_of_the_sea",
        4000
    )

})
