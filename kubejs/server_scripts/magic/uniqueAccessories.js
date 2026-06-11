ServerEvents.recipes(event => {

    // No vanilla removals — all UA items are loot/drop only by default
    // hero_emblem (ender dragon) and burning_soul (warden) kept as drops only

    event.shaped(Item.of('uniqueaccessories:waist_warmer', 1), [
        'AAA', 'ASA', 'AAA'
    ], { 'A': 'minecraft:white_wool', 'S': 'nameless_trinkets:dubious_dust' })

    event.shaped(Item.of('uniqueaccessories:life_jacket_belt', 1), [
        'ABA', 'BSB', 'ABA'
    ], { 'A': 'minecraft:sponge', 'B': 'minecraft:leather', 'S': 'nameless_trinkets:dubious_dust' })

    event.shaped(Item.of('uniqueaccessories:durable_spring', 1), [
        ' I ', 'ISI', ' I '
    ], { 'I': 'minecraft:iron_ingot', 'S': 'nameless_trinkets:dubious_dust' })

    event.shaped(Item.of('uniqueaccessories:large_paddle', 1), [
        ' P ', 'PSP', ' B '
    ], { 'P': 'minecraft:oak_planks', 'S': 'nameless_trinkets:dubious_dust', 'B': 'minecraft:stick' })

    event.shaped(Item.of('uniqueaccessories:all_purpose_seasoning', 1), [
        'BDB', 'DSG', 'BDB'
    ], { 'B': 'minecraft:bone_meal', 'D': 'minecraft:dried_kelp', 'S': 'nameless_trinkets:dubious_dust', 'G': 'minecraft:sugar' })

    event.shaped(Item.of('uniqueaccessories:anklet_of_fortune', 1), [
        'GGG', 'GSG', 'GRG'
    ], { 'G': 'minecraft:gold_ingot', 'S': 'nameless_trinkets:dubious_dust', 'R': 'minecraft:rabbit_foot' })

    event.shaped(Item.of('uniqueaccessories:sharp_fishing_hook', 1), [
        ' IF', 'IST', ' T '
    ], { 'I': 'minecraft:iron_ingot', 'F': 'minecraft:fishing_rod', 'S': 'nameless_trinkets:dubious_dust', 'T': 'minecraft:string' })

    event.shaped(Item.of('uniqueaccessories:rose_of_temptation', 1), [
        'RGR', 'GSG', 'RGR'
    ], { 'R': 'minecraft:rose_bush', 'G': 'minecraft:gold_ingot', 'S': 'nameless_trinkets:dubious_dust' })

    event.shaped(Item.of('uniqueaccessories:ninjutsu_manual', 1), [
        'PPP', 'LSL', 'PIP'
    ], { 'P': 'minecraft:paper', 'L': 'minecraft:leather', 'S': 'nameless_trinkets:dubious_dust', 'I': 'minecraft:ink_sac' })

    event.recipes.ars_nouveau.enchanting_apparatus(
        ["minecraft:leather", "minecraft:leather", "minecraft:iron_ingot", "minecraft:iron_ingot", "gtceu:luminessence_dust"],
        "nameless_trinkets:glowing_dust",
        "uniqueaccessories:tool_belt",
        1500
    )

    event.recipes.ars_nouveau.enchanting_apparatus(
        ["minecraft:leather", "minecraft:cooked_beef", "minecraft:iron_ingot", "minecraft:leather", "gtceu:luminessence_dust"],
        "nameless_trinkets:glowing_dust",
        "uniqueaccessories:survival_belt",
        1500
    )

    event.recipes.ars_nouveau.enchanting_apparatus(
        ["create:iron_sheet", "minecraft:gold_ingot", "minecraft:gold_ingot", "minecraft:blaze_rod", "minecraft:blaze_rod", "gtceu:luminessence_dust"],
        "nameless_trinkets:glowing_dust",
        "uniqueaccessories:small_propulsion_device",
        2000
    )

    event.recipes.ars_nouveau.enchanting_apparatus(
        ["minecraft:leather_boots", "minecraft:iron_ingot", "minecraft:iron_ingot", "minecraft:flint", "minecraft:flint", "gtceu:luminessence_dust"],
        "nameless_trinkets:glowing_dust",
        "uniqueaccessories:blade_shoes",
        1500
    )

    event.recipes.ars_nouveau.enchanting_apparatus(
        ["minecraft:slime_ball", "minecraft:slime_ball", "minecraft:slime_ball", "minecraft:iron_ingot", "gtceu:luminessence_dust"],
        "nameless_trinkets:glowing_dust",
        "uniqueaccessories:strong_sticky_slime_ball",
        1500
    )

    event.recipes.ars_nouveau.enchanting_apparatus(
        ["minecraft:amethyst_shard", "minecraft:amethyst_shard", "minecraft:quartz", "minecraft:redstone", "gtceu:luminessence_dust"],
        "nameless_trinkets:glowing_dust",
        "uniqueaccessories:amplifier_stone",
        1500
    )

    event.recipes.ars_nouveau.enchanting_apparatus(
        ["minecraft:carved_pumpkin", "minecraft:snow_block", "minecraft:snow_block", "minecraft:ice", "minecraft:ice", "gtceu:luminessence_dust"],
        "nameless_trinkets:glowing_dust",
        "uniqueaccessories:snow_golem_doll",
        1000
    )

    event.recipes.ars_nouveau.enchanting_apparatus(
        ["create:iron_sheet", "minecraft:copper_ingot", "minecraft:copper_ingot", "minecraft:flint", "minecraft:flint", "gtceu:luminessence_dust"],
        "nameless_trinkets:glowing_dust",
        "uniqueaccessories:ancient_chisel",
        1500
    )

    event.recipes.ars_nouveau.enchanting_apparatus(
        ["minecraft:bone", "minecraft:bone", "minecraft:gravel", "minecraft:gravel", "gtceu:luminessence_dust"],
        "nameless_trinkets:glowing_dust",
        "uniqueaccessories:fossil_shark_tooth",
        1500
    )

    event.recipes.ars_nouveau.enchanting_apparatus(
        ["minecraft:bone", "minecraft:bone", "minecraft:iron_ingot", "minecraft:iron_ingot", "gtceu:luminessence_dust"],
        "nameless_trinkets:glowing_dust",
        "uniqueaccessories:starved_wolf_skull",
        1500
    )

    // zombie/husk exclusive normally
    event.recipes.ars_nouveau.enchanting_apparatus(
        ["create:iron_sheet", "minecraft:iron_ingot", "minecraft:iron_ingot", "minecraft:redstone", "minecraft:redstone", "gtceu:luminessence_dust"],
        "nameless_trinkets:glowing_dust",
        "uniqueaccessories:bloody_knife",
        2000
    )

    event.recipes.ars_nouveau.enchanting_apparatus(
        ["minecraft:egg", "minecraft:gold_block", "minecraft:gold_block", "minecraft:gold_ingot", "minecraft:gold_ingot", "gtceu:luminessence_dust"],
        "nameless_trinkets:glowing_dust",
        "uniqueaccessories:golden_egg",
        1500
    )

    event.recipes.ars_nouveau.enchanting_apparatus(
        ["minecraft:chest", "minecraft:iron_ingot", "minecraft:iron_ingot", "minecraft:diamond", "gtceu:luminessence_dust", "gtceu:luminessence_dust"],
        "nameless_trinkets:glowing_dust",
        "uniqueaccessories:accessory_box",
        1000
    )

    // pillager/vindicator exclusive normally
    event.recipes.ars_nouveau.enchanting_apparatus(
        ["minecraft:leather", "minecraft:leather", "minecraft:coal", "minecraft:coal", "gtceu:luminessence_dust"],
        "nameless_trinkets:glowing_dust",
        "uniqueaccessories:black_belt",
        1500
    )

    // pillager/vindicator exclusive normally
    event.recipes.ars_nouveau.enchanting_apparatus(
        ["minecraft:leather", "minecraft:white_wool", "minecraft:white_wool", "minecraft:string", "gtceu:luminessence_dust"],
        "nameless_trinkets:glowing_dust",
        "uniqueaccessories:tabi",
        1000
    )

    event.recipes.ars_nouveau.enchanting_apparatus(
        ["minecraft:egg", "minecraft:gold_block", "minecraft:gold_ingot", "minecraft:gold_ingot", "minecraft:rabbit_foot", "gtceu:luminessence_dust"],
        "nameless_trinkets:glowing_dust",
        "uniqueaccessories:golden_egg_charm",
        2000
    )

    event.recipes.ars_nouveau.enchanting_apparatus(
        ["minecraft:honeycomb", "minecraft:honeycomb", "minecraft:gold_ingot", "minecraft:gold_ingot", "gtceu:luminessence_dust"],
        "nameless_trinkets:glowing_dust",
        "uniqueaccessories:royal_honeycomb",
        1500
    )

    event.recipes.ars_nouveau.enchanting_apparatus(
        ["minecraft:ender_pearl", "minecraft:obsidian", "minecraft:obsidian", "minecraft:blaze_rod", "gtceu:luminessence_dust"],
        "nameless_trinkets:glowing_dust",
        "uniqueaccessories:soul_gem",
        2000
    )

    event.recipes.ars_nouveau.enchanting_apparatus(
        ["minecraft:blaze_rod", "minecraft:obsidian", "minecraft:obsidian", "minecraft:fermented_spider_eye", "gtceu:luminessence_dust"],
        "nameless_trinkets:glowing_dust",
        "uniqueaccessories:devils_eyeball",
        2000
    )

    event.recipes.ars_nouveau.enchanting_apparatus(
        ["minecraft:leather", "minecraft:arrow", "minecraft:arrow", "minecraft:ender_pearl", "minecraft:string", "gtceu:luminessence_dust"],
        "nameless_trinkets:glowing_dust",
        "uniqueaccessories:magick_quiver",
        1500
    )

    event.recipes.ars_nouveau.enchanting_apparatus(
        ["minecraft:amethyst_shard", "minecraft:amethyst_shard", "minecraft:prismarine_crystals", "minecraft:prismarine_crystals", "gtceu:luminessence_dust"],
        "nameless_trinkets:glowing_dust",
        "uniqueaccessories:shiny_stone",
        1500
    )

    event.recipes.ars_nouveau.enchanting_apparatus(
        ["minecraft:leather", "minecraft:gold_block", "minecraft:diamond", "minecraft:diamond", "minecraft:iron_block", "gtceu:luminessence_dust", "gtceu:luminessence_dust"],
        "nameless_trinkets:glowing_dust",
        "uniqueaccessories:championship_belt",
        2500
    )

    event.recipes.ars_nouveau.enchanting_apparatus(
        ["minecraft:string", "minecraft:string", "minecraft:feather", "minecraft:feather", "gtceu:luminessence_dust"],
        "nameless_trinkets:glowing_dust",
        "uniqueaccessories:silver_cat_tail",
        1500
    )

    event.recipes.ars_nouveau.enchanting_apparatus(
        ["minecraft:leather_boots", "minecraft:iron_ingot", "minecraft:gold_ingot", "minecraft:gold_ingot", "minecraft:blaze_rod", "gtceu:luminessence_dust"],
        "nameless_trinkets:glowing_dust",
        "uniqueaccessories:rocket_shoes",
        2000
    )

    event.recipes.ars_nouveau.enchanting_apparatus(
        ["minecraft:amethyst_shard", "minecraft:diamond", "minecraft:diamond", "minecraft:redstone_block", "gtceu:luminessence_dust", "gtceu:luminessence_dust"],
        "nameless_trinkets:glowing_dust",
        "uniqueaccessories:power_crystal",
        2000
    )

    event.recipes.ars_nouveau.enchanting_apparatus(
        ["create:iron_sheet", "minecraft:iron_ingot", "minecraft:iron_ingot", "minecraft:gold_ingot", "minecraft:gravel", "gtceu:luminessence_dust"],
        "nameless_trinkets:glowing_dust",
        "uniqueaccessories:rusty_guillotine_blade",
        2000
    )

    // piglin_brute exclusive normally
    event.recipes.ars_nouveau.enchanting_apparatus(
        ["minecraft:redstone", "minecraft:redstone_block", "minecraft:redstone_block", "minecraft:gold_block", "minecraft:quartz", "gtceu:luminessence_dust", "gtceu:luminessence_dust"],
        "nameless_trinkets:glowing_dust",
        "uniqueaccessories:still_beating_heart",
        2500
    )

    event.recipes.ars_nouveau.enchanting_apparatus(
        ["minecraft:wither_rose", "minecraft:red_dye", "minecraft:red_dye", "minecraft:ink_sac", "gtceu:luminessence_dust"],
        "nameless_trinkets:glowing_dust",
        "uniqueaccessories:withered_heart",
        2000
    )

    // mooshroom exclusive normally
    event.recipes.ars_nouveau.enchanting_apparatus(
        ["minecraft:suspicious_stew", "minecraft:red_mushroom", "minecraft:red_mushroom", "minecraft:brown_mushroom", "gtceu:luminessence_dust"],
        "nameless_trinkets:glowing_dust",
        "uniqueaccessories:suspicious_mushroom",
        1000
    )

    // hoglin exclusive normally
    event.recipes.ars_nouveau.enchanting_apparatus(
        ["minecraft:cooked_porkchop", "minecraft:cooked_porkchop", "minecraft:honey_bottle", "minecraft:honey_bottle", "gtceu:luminessence_dust"],
        "nameless_trinkets:glowing_dust",
        "uniqueaccessories:supreme_meat",
        2000
    )

    // witch exclusive normally
    event.recipes.ars_nouveau.enchanting_apparatus(
        ["minecraft:leather", "minecraft:leather", "minecraft:string", "minecraft:string", "minecraft:fermented_spider_eye", "gtceu:luminessence_dust"],
        "nameless_trinkets:glowing_dust",
        "uniqueaccessories:cursed_doll_head",
        2000
    )

    event.recipes.ars_nouveau.enchanting_apparatus(
        ["minecraft:gold_block", "minecraft:glowstone", "minecraft:glowstone", "minecraft:blaze_rod", "minecraft:blaze_rod", "gtceu:holy_silver_dust", "gtceu:holy_silver_dust"],
        "nameless_trinkets:ultimate_dust",
        "uniqueaccessories:sun_stone",
        3500
    )

    event.recipes.ars_nouveau.enchanting_apparatus(
        ["minecraft:obsidian", "minecraft:packed_ice", "minecraft:packed_ice", "minecraft:ender_pearl", "minecraft:ender_pearl", "gtceu:holy_silver_dust", "gtceu:holy_silver_dust"],
        "nameless_trinkets:ultimate_dust",
        "uniqueaccessories:moon_stone",
        3500
    )

    // tabi consumed into master version
    event.recipes.ars_nouveau.enchanting_apparatus(
        ["uniqueaccessories:tabi", "minecraft:leather", "minecraft:leather", "minecraft:phantom_membrane", "minecraft:phantom_membrane", "gtceu:holy_silver_dust", "gtceu:holy_silver_dust"],
        "nameless_trinkets:ultimate_dust",
        "uniqueaccessories:master_ninja_tabi",
        4000
    )

    event.recipes.ars_nouveau.enchanting_apparatus(
        ["minecraft:ender_eye", "minecraft:ender_eye", "minecraft:glass", "minecraft:glass", "minecraft:obsidian", "gtceu:holy_silver_dust"],
        "nameless_trinkets:ultimate_dust",
        "uniqueaccessories:ender_lens",
        4000
    )

})
