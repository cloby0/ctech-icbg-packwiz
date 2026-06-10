ServerEvents.recipes(event => {

    // No vanilla removals — no vanilla crafting recipes exist for artifacts items
    // eternal_steak furnace/smoker/campfire recipes kept (everlasting_beef → eternal_steak)
    // mimic_spawn_egg skipped — creative-only item

    // ============================================================
    // JOURNEYMAN — shaped crafting, dubious_dust gate
    // ============================================================

    event.shaped(Item.of('artifacts:lucky_scarf', 1), [
        'GGG', 'GSG', 'GRG'
    ], { 'G': 'minecraft:gold_ingot', 'S': 'nameless_trinkets:dubious_dust', 'R': 'minecraft:rabbit_foot' })

    event.shaped(Item.of('artifacts:running_shoes', 1), [
        ' S ', 'LAL', 'LAL'
    ], { 'S': 'nameless_trinkets:dubious_dust', 'L': 'minecraft:leather', 'A': 'minecraft:sugar' })

    event.shaped(Item.of('artifacts:snowshoes', 1), [
        'SIS', 'LSL', 'SIS'
    ], { 'S': 'minecraft:packed_ice', 'I': 'minecraft:stick', 'L': 'nameless_trinkets:dubious_dust' })

    event.shaped(Item.of('artifacts:kitty_slippers', 1), [
        'WW ', 'WSW', 'STS'
    ], { 'W': 'minecraft:white_wool', 'S': 'minecraft:string', 'T': 'nameless_trinkets:dubious_dust' })

    event.shaped(Item.of('artifacts:flippers', 1), [
        'KLK', 'KSK', 'KLK'
    ], { 'K': 'minecraft:kelp', 'L': 'minecraft:leather', 'S': 'nameless_trinkets:dubious_dust' })

    event.shaped(Item.of('artifacts:snorkel', 1), [
        ' I ', 'IGI', 'LSL'
    ], { 'I': 'minecraft:iron_ingot', 'G': 'minecraft:glass_pane', 'L': 'minecraft:leather', 'S': 'nameless_trinkets:dubious_dust' })

    event.shaped(Item.of('artifacts:rooted_boots', 1), [
        'VGV', 'LSL', 'LGL'
    ], { 'V': 'minecraft:vine', 'G': 'minecraft:grass_block', 'L': 'minecraft:leather', 'S': 'nameless_trinkets:dubious_dust' })

    event.shaped(Item.of('artifacts:charm_of_sinking', 1), [
        'IGI', 'GSG', 'IGI'
    ], { 'I': 'minecraft:iron_ingot', 'G': 'minecraft:gravel', 'S': 'nameless_trinkets:dubious_dust' })

    event.shaped(Item.of('artifacts:onion_ring', 1), [
        ' G ', 'GSG', ' G '
    ], { 'G': 'minecraft:gold_ingot', 'S': 'nameless_trinkets:dubious_dust' })

    // ============================================================
    // INITIATE — enchanting apparatus, glowing_dust catalyst
    // ============================================================

    event.recipes.ars_nouveau.enchanting_apparatus(
        ["minecraft:leather_boots", "minecraft:leather_boots", "minecraft:packed_ice", "minecraft:packed_ice", "gtceu:luminessence_dust"],
        "nameless_trinkets:glowing_dust",
        "artifacts:aqua_dashers",
        1500
    )

    event.recipes.ars_nouveau.enchanting_apparatus(
        ["minecraft:leather_boots", "minecraft:leather_boots", "minecraft:slime_ball", "minecraft:slime_ball", "minecraft:feather", "gtceu:luminessence_dust"],
        "nameless_trinkets:glowing_dust",
        "artifacts:bunny_hoppers",
        1500
    )

    event.recipes.ars_nouveau.enchanting_apparatus(
        ["create:iron_sheet", "minecraft:iron_ingot", "minecraft:iron_ingot", "minecraft:flint", "minecraft:flint", "gtceu:luminessence_dust"],
        "nameless_trinkets:glowing_dust",
        "artifacts:digging_claws",
        1500
    )

    event.recipes.ars_nouveau.enchanting_apparatus(
        ["create:iron_sheet", "minecraft:iron_ingot", "minecraft:iron_ingot", "minecraft:flint", "minecraft:feather", "gtceu:luminessence_dust"],
        "nameless_trinkets:glowing_dust",
        "artifacts:feral_claws",
        1500
    )

    event.recipes.ars_nouveau.enchanting_apparatus(
        ["minecraft:fire_charge", "minecraft:magma_cream", "minecraft:magma_cream", "minecraft:blaze_rod", "minecraft:blaze_rod", "gtceu:luminessence_dust"],
        "nameless_trinkets:glowing_dust",
        "artifacts:fire_gauntlet",
        2000
    )

    event.recipes.ars_nouveau.enchanting_apparatus(
        ["create:iron_sheet", "minecraft:piston", "minecraft:piston", "minecraft:iron_ingot", "minecraft:iron_ingot", "gtceu:luminessence_dust"],
        "nameless_trinkets:glowing_dust",
        "artifacts:pocket_piston",
        1500
    )

    event.recipes.ars_nouveau.enchanting_apparatus(
        ["create:iron_sheet", "minecraft:iron_block", "minecraft:iron_block", "minecraft:diamond", "minecraft:diamond", "gtceu:luminessence_dust"],
        "nameless_trinkets:glowing_dust",
        "artifacts:power_glove",
        2500
    )

    event.recipes.ars_nouveau.enchanting_apparatus(
        ["minecraft:leather", "minecraft:phantom_membrane", "minecraft:phantom_membrane", "minecraft:ender_pearl", "minecraft:black_dye", "gtceu:luminessence_dust"],
        "nameless_trinkets:glowing_dust",
        "artifacts:scarf_of_invisibility",
        2000
    )

    event.recipes.ars_nouveau.enchanting_apparatus(
        ["minecraft:amethyst_shard", "minecraft:lightning_rod", "minecraft:lightning_rod", "minecraft:quartz", "minecraft:redstone", "gtceu:luminessence_dust"],
        "nameless_trinkets:glowing_dust",
        "artifacts:shock_pendant",
        2000
    )

    event.recipes.ars_nouveau.enchanting_apparatus(
        ["minecraft:iron_ingot", "minecraft:iron_ingot", "minecraft:cactus", "minecraft:cactus", "gtceu:luminessence_dust"],
        "nameless_trinkets:glowing_dust",
        "artifacts:thorn_pendant",
        2000
    )

    event.recipes.ars_nouveau.enchanting_apparatus(
        ["minecraft:fire_charge", "minecraft:blaze_rod", "minecraft:blaze_powder", "minecraft:blaze_powder", "minecraft:amethyst_shard", "gtceu:luminessence_dust"],
        "nameless_trinkets:glowing_dust",
        "artifacts:flame_pendant",
        2000
    )

    event.recipes.ars_nouveau.enchanting_apparatus(
        ["minecraft:totem_of_undying", "minecraft:golden_apple", "minecraft:diamond", "minecraft:diamond", "gtceu:luminessence_dust"],
        "nameless_trinkets:glowing_dust",
        "artifacts:cross_necklace",
        2500
    )

    event.recipes.ars_nouveau.enchanting_apparatus(
        ["create:golden_sheet", "minecraft:gold_block", "minecraft:gold_block", "minecraft:ender_pearl", "minecraft:string", "gtceu:luminessence_dust"],
        "nameless_trinkets:glowing_dust",
        "artifacts:golden_hook",
        2000
    )

    event.recipes.ars_nouveau.enchanting_apparatus(
        ["minecraft:leather", "minecraft:stick", "minecraft:stick", "minecraft:iron_ingot", "minecraft:string", "gtceu:luminessence_dust"],
        "nameless_trinkets:glowing_dust",
        "artifacts:umbrella",
        1500
    )

    event.recipes.ars_nouveau.enchanting_apparatus(
        ["minecraft:glass_bottle", "minecraft:glass_bottle", "minecraft:honey_bottle", "minecraft:honey_bottle", "gtceu:luminessence_dust"],
        "nameless_trinkets:glowing_dust",
        "artifacts:antidote_vessel",
        1500
    )

    event.recipes.ars_nouveau.enchanting_apparatus(
        ["create:iron_sheet", "minecraft:netherrack", "minecraft:flint_and_steel", "minecraft:iron_pickaxe", "minecraft:coal", "gtceu:luminessence_dust"],
        "nameless_trinkets:glowing_dust",
        "artifacts:pickaxe_heater",
        1500
    )

    event.recipes.ars_nouveau.enchanting_apparatus(
        ["minecraft:leather", "minecraft:cod", "minecraft:salmon", "minecraft:string", "minecraft:lily_pad", "gtceu:luminessence_dust"],
        "nameless_trinkets:glowing_dust",
        "artifacts:anglers_hat",
        1000
    )

    event.recipes.ars_nouveau.enchanting_apparatus(
        ["minecraft:leather", "minecraft:leather", "minecraft:feather", "minecraft:gold_ingot", "minecraft:string", "gtceu:luminessence_dust"],
        "nameless_trinkets:glowing_dust",
        "artifacts:cowboy_hat",
        1000
    )

    event.recipes.ars_nouveau.enchanting_apparatus(
        ["minecraft:leather", "minecraft:glass_bottle", "minecraft:glass_bottle", "minecraft:sugar", "minecraft:cactus", "gtceu:luminessence_dust"],
        "nameless_trinkets:glowing_dust",
        "artifacts:novelty_drinking_hat",
        1000
    )

    event.recipes.ars_nouveau.enchanting_apparatus(
        ["minecraft:leather", "minecraft:glass_bottle", "minecraft:glass_bottle", "minecraft:sugar", "minecraft:string", "gtceu:luminessence_dust"],
        "nameless_trinkets:glowing_dust",
        "artifacts:plastic_drinking_hat",
        1000
    )

    event.recipes.ars_nouveau.enchanting_apparatus(
        ["minecraft:leather", "minecraft:black_dye", "minecraft:black_dye", "minecraft:ender_pearl", "minecraft:obsidian", "gtceu:luminessence_dust"],
        "nameless_trinkets:glowing_dust",
        "artifacts:superstitious_hat",
        1500
    )

    event.recipes.ars_nouveau.enchanting_apparatus(
        ["minecraft:leather", "minecraft:emerald", "minecraft:emerald", "minecraft:wheat", "minecraft:wheat", "gtceu:luminessence_dust"],
        "nameless_trinkets:glowing_dust",
        "artifacts:villager_hat",
        1000
    )

    event.recipes.ars_nouveau.enchanting_apparatus(
        ["minecraft:leather", "minecraft:slime_ball", "minecraft:tnt", "minecraft:gunpowder", "minecraft:string", "gtceu:luminessence_dust"],
        "nameless_trinkets:glowing_dust",
        "artifacts:whoopee_cushion",
        1000
    )

    // ============================================================
    // SORCERER — enchanting apparatus, ultimate_dust catalyst
    // ============================================================

    event.recipes.ars_nouveau.enchanting_apparatus(
        ["minecraft:glass_bottle", "minecraft:white_wool", "minecraft:white_wool", "minecraft:feather", "minecraft:feather", "gtceu:holy_silver_dust", "gtceu:holy_silver_dust"],
        "nameless_trinkets:ultimate_dust",
        "artifacts:cloud_in_a_bottle",
        3000
    )

    event.recipes.ars_nouveau.enchanting_apparatus(
        ["minecraft:diamond_block", "minecraft:diamond", "minecraft:diamond", "minecraft:crying_obsidian", "minecraft:totem_of_undying", "gtceu:holy_silver_dust", "gtceu:holy_silver_dust"],
        "nameless_trinkets:ultimate_dust",
        "artifacts:crystal_heart",
        4000
    )

    event.recipes.ars_nouveau.enchanting_apparatus(
        ["minecraft:glass_bottle", "minecraft:feather", "minecraft:feather", "minecraft:phantom_membrane", "minecraft:phantom_membrane", "gtceu:holy_silver_dust", "gtceu:holy_silver_dust"],
        "nameless_trinkets:ultimate_dust",
        "artifacts:helium_flamingo",
        3500
    )

    event.recipes.ars_nouveau.enchanting_apparatus(
        ["minecraft:iron_ingot", "minecraft:iron_ingot", "minecraft:glass", "minecraft:glass", "minecraft:spider_eye", "gtceu:holy_silver_dust"],
        "nameless_trinkets:ultimate_dust",
        "artifacts:night_vision_goggles",
        3000
    )

    event.recipes.ars_nouveau.enchanting_apparatus(
        ["minecraft:obsidian", "minecraft:obsidian", "minecraft:obsidian", "minecraft:obsidian", "minecraft:magma_cream", "gtceu:holy_silver_dust", "gtceu:holy_silver_dust"],
        "nameless_trinkets:ultimate_dust",
        "artifacts:obsidian_skull",
        4000
    )

    event.recipes.ars_nouveau.enchanting_apparatus(
        ["create:iron_sheet", "minecraft:iron_block", "minecraft:iron_block", "minecraft:flint", "minecraft:flint", "gtceu:holy_silver_dust", "gtceu:holy_silver_dust"],
        "nameless_trinkets:ultimate_dust",
        "artifacts:steadfast_spikes",
        3500
    )

    event.recipes.ars_nouveau.enchanting_apparatus(
        ["minecraft:diamond", "minecraft:diamond", "minecraft:iron_block", "minecraft:ender_pearl", "minecraft:ender_pearl", "gtceu:holy_silver_dust", "gtceu:holy_silver_dust"],
        "nameless_trinkets:ultimate_dust",
        "artifacts:universal_attractor",
        4000
    )

    event.recipes.ars_nouveau.enchanting_apparatus(
        ["create:golden_sheet", "minecraft:redstone_block", "minecraft:rotten_flesh", "minecraft:fermented_spider_eye", "minecraft:diamond", "gtceu:holy_silver_dust", "gtceu:holy_silver_dust"],
        "nameless_trinkets:ultimate_dust",
        "artifacts:vampiric_glove",
        4000
    )

    event.recipes.ars_nouveau.enchanting_apparatus(
        ["minecraft:golden_apple", "minecraft:gold_block", "minecraft:feather", "minecraft:ender_pearl", "minecraft:rabbit_foot", "gtceu:holy_silver_dust"],
        "nameless_trinkets:ultimate_dust",
        "artifacts:panic_necklace",
        3000
    )

    // ============================================================
    // ALCHEMIST — enchanting apparatus, ultimate_dust catalyst + prima_materia
    // ============================================================

    event.recipes.ars_nouveau.enchanting_apparatus(
        ["minecraft:totem_of_undying", "minecraft:chorus_fruit", "minecraft:chorus_fruit", "minecraft:ender_pearl", "minecraft:ender_pearl", "gtceu:prima_materia_ingot", "gtceu:prima_materia_ingot"],
        "nameless_trinkets:ultimate_dust",
        "artifacts:chorus_totem",
        5000
    )

    // cooked via furnace into eternal_steak
    event.recipes.ars_nouveau.enchanting_apparatus(
        ["minecraft:golden_apple", "minecraft:cooked_beef", "minecraft:cooked_porkchop", "minecraft:cooked_chicken", "gtceu:prima_materia_ingot", "gtceu:prima_materia_ingot"],
        "nameless_trinkets:ultimate_dust",
        "artifacts:everlasting_beef",
        5000
    )

})
