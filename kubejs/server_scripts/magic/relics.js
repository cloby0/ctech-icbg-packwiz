ServerEvents.recipes(event => {

    // No vanilla removals — all relics items are loot drops only by default

    // ============================================================
    // JOURNEYMAN — shaped crafting, dubious_dust gate
    // ============================================================

    event.shaped(Item.of('relics:leather_belt', 1), [
        'LLL', 'LDL', 'LLL'
    ], { 'L': 'minecraft:leather', 'D': 'nameless_trinkets:dubious_dust' })

    event.shaped(Item.of('relics:horse_flute', 1), [
        ' G ', 'IDI', ' I '
    ], { 'G': 'minecraft:gold_ingot', 'I': 'minecraft:stick', 'D': 'nameless_trinkets:dubious_dust' })

    event.shaped(Item.of('relics:arrow_quiver', 1), [
        'LSL', 'LDL', 'LSL'
    ], { 'L': 'minecraft:leather', 'S': 'minecraft:string', 'D': 'nameless_trinkets:dubious_dust' })

    event.shaped(Item.of('relics:ice_skates', 1), [
        'ILI', 'LDL', 'ILI'
    ], { 'I': 'minecraft:iron_ingot', 'L': 'minecraft:leather', 'D': 'nameless_trinkets:dubious_dust' })

    event.shaped(Item.of('relics:roller_skates', 1), [
        'LIL', 'RDR', 'LIL'
    ], { 'L': 'minecraft:leather', 'I': 'minecraft:iron_ingot', 'R': 'minecraft:redstone', 'D': 'nameless_trinkets:dubious_dust' })

    event.shaped(Item.of('relics:solid_snowball', 1), [
        'PBP', 'BDB', 'PBP'
    ], { 'P': 'minecraft:packed_ice', 'B': 'minecraft:snowball', 'D': 'nameless_trinkets:dubious_dust' })

    event.shaped(Item.of('relics:wool_mitten', 1), [
        'WW ', 'WDW', 'WLW'
    ], { 'W': 'minecraft:white_wool', 'D': 'nameless_trinkets:dubious_dust', 'L': 'minecraft:leather' })

    event.shaped(Item.of('relics:chorus_inhibitor', 1), [
        'CIC', 'IDI', 'CIC'
    ], { 'C': 'minecraft:chorus_fruit', 'I': 'minecraft:iron_ingot', 'D': 'nameless_trinkets:dubious_dust' })

    event.shaped(Item.of('relics:spore_sack', 1), [
        'LML', 'MDM', 'LML'
    ], { 'L': 'minecraft:leather', 'M': 'minecraft:red_mushroom', 'D': 'nameless_trinkets:dubious_dust' })

    event.shaped(Item.of('relics:relic_experience_bottle', 1), [
        'GDG', 'GRG', ' G '
    ], { 'G': 'minecraft:glass_bottle', 'D': 'nameless_trinkets:dubious_dust', 'R': 'minecraft:redstone' })

    // ============================================================
    // INITIATE — enchanting apparatus, glowing_dust catalyst
    // ============================================================

    event.recipes.ars_nouveau.enchanting_apparatus(
        ["minecraft:leather_boots", "minecraft:lily_pad", "minecraft:lily_pad", "minecraft:prismarine_shard", "minecraft:prismarine_shard", "gtceu:luminessence_dust"],
        "nameless_trinkets:glowing_dust",
        "relics:aqua_walker",
        1500
    )

    event.recipes.ars_nouveau.enchanting_apparatus(
        ["minecraft:leather", "minecraft:nautilus_shell", "minecraft:nautilus_shell", "minecraft:kelp", "minecraft:kelp", "gtceu:luminessence_dust"],
        "nameless_trinkets:glowing_dust",
        "relics:amphibian_boot",
        1500
    )

    event.recipes.ars_nouveau.enchanting_apparatus(
        ["minecraft:leather", "minecraft:prismarine", "minecraft:prismarine", "minecraft:rotten_flesh", "minecraft:kelp", "gtceu:luminessence_dust"],
        "nameless_trinkets:glowing_dust",
        "relics:drowned_belt",
        1500
    )

    event.recipes.ars_nouveau.enchanting_apparatus(
        ["minecraft:slime_ball", "minecraft:slime_ball", "minecraft:feather", "minecraft:feather", "gtceu:luminessence_dust"],
        "nameless_trinkets:glowing_dust",
        "relics:jellyfish_necklace",
        1500
    )

    event.recipes.ars_nouveau.enchanting_apparatus(
        ["minecraft:packed_ice", "minecraft:packed_ice", "minecraft:iron_ingot", "minecraft:iron_ingot", "gtceu:luminessence_dust"],
        "nameless_trinkets:glowing_dust",
        "relics:ice_breaker",
        1500
    )

    event.recipes.ars_nouveau.enchanting_apparatus(
        ["minecraft:leather_boots", "minecraft:magma_cream", "minecraft:magma_cream", "minecraft:blaze_powder", "minecraft:blaze_powder", "gtceu:luminessence_dust"],
        "nameless_trinkets:glowing_dust",
        "relics:magma_walker",
        1500
    )

    event.recipes.ars_nouveau.enchanting_apparatus(
        ["minecraft:leather", "minecraft:feather", "minecraft:feather", "minecraft:bone", "minecraft:bone", "gtceu:luminessence_dust"],
        "nameless_trinkets:glowing_dust",
        "relics:hunter_belt",
        1500
    )

    event.recipes.ars_nouveau.enchanting_apparatus(
        ["create:iron_sheet", "minecraft:iron_ingot", "minecraft:iron_ingot", "minecraft:spider_eye", "minecraft:spider_eye", "gtceu:luminessence_dust"],
        "nameless_trinkets:glowing_dust",
        "relics:rage_glove",
        2000
    )

    event.recipes.ars_nouveau.enchanting_apparatus(
        ["minecraft:gold_ingot", "minecraft:gold_ingot", "minecraft:blackstone", "minecraft:blackstone", "gtceu:luminessence_dust"],
        "nameless_trinkets:glowing_dust",
        "relics:bastion_ring",
        2000
    )

    event.recipes.ars_nouveau.enchanting_apparatus(
        ["minecraft:glass_bottle", "minecraft:blaze_powder", "minecraft:blaze_powder", "minecraft:fire_charge", "gtceu:luminessence_dust"],
        "nameless_trinkets:glowing_dust",
        "relics:blazing_flask",
        2000
    )

    event.recipes.ars_nouveau.enchanting_apparatus(
        ["minecraft:leather", "minecraft:black_dye", "minecraft:black_dye", "minecraft:ender_pearl", "minecraft:obsidian", "gtceu:luminessence_dust"],
        "nameless_trinkets:glowing_dust",
        "relics:midnight_robe",
        2000
    )

    event.recipes.ars_nouveau.enchanting_apparatus(
        ["minecraft:gold_ingot", "minecraft:gold_ingot", "minecraft:diamond", "minecraft:golden_apple", "gtceu:luminessence_dust"],
        "nameless_trinkets:glowing_dust",
        "relics:holy_locket",
        2500
    )

    // ============================================================
    // SORCERER — enchanting apparatus, ultimate_dust catalyst
    // ============================================================

    event.recipes.ars_nouveau.enchanting_apparatus(
        ["minecraft:ender_pearl", "minecraft:ender_pearl", "minecraft:phantom_membrane", "minecraft:phantom_membrane", "gtceu:holy_silver_dust", "gtceu:holy_silver_dust"],
        "nameless_trinkets:ultimate_dust",
        "relics:enders_hand",
        3500
    )

    event.recipes.ars_nouveau.enchanting_apparatus(
        ["minecraft:prismarine_crystals", "minecraft:prismarine_crystals", "minecraft:iron_block", "minecraft:iron_block", "gtceu:holy_silver_dust", "gtceu:holy_silver_dust"],
        "nameless_trinkets:ultimate_dust",
        "relics:reflection_necklace",
        3500
    )

    event.recipes.ars_nouveau.enchanting_apparatus(
        ["minecraft:blaze_rod", "minecraft:obsidian", "minecraft:obsidian", "minecraft:iron_ingot", "minecraft:iron_ingot", "gtceu:holy_silver_dust", "gtceu:holy_silver_dust"],
        "nameless_trinkets:ultimate_dust",
        "relics:shadow_glaive",
        4000
    )

    event.recipes.ars_nouveau.enchanting_apparatus(
        ["minecraft:glass", "minecraft:glass", "minecraft:gold_block", "minecraft:gold_block", "gtceu:holy_silver_dust"],
        "nameless_trinkets:ultimate_dust",
        "relics:magic_mirror",
        3500
    )

    event.recipes.ars_nouveau.enchanting_apparatus(
        ["minecraft:obsidian", "minecraft:obsidian", "minecraft:ender_eye", "minecraft:ender_eye", "gtceu:holy_silver_dust", "gtceu:holy_silver_dust"],
        "nameless_trinkets:ultimate_dust",
        "relics:spatial_sign",
        4000
    )

    event.recipes.ars_nouveau.enchanting_apparatus(
        ["minecraft:diamond", "minecraft:diamond", "minecraft:crying_obsidian", "minecraft:crying_obsidian", "gtceu:holy_silver_dust", "gtceu:holy_silver_dust"],
        "nameless_trinkets:ultimate_dust",
        "relics:space_dissector",
        4500
    )

    // elytra consumed as primary component
    event.recipes.ars_nouveau.enchanting_apparatus(
        ["minecraft:elytra", "minecraft:phantom_membrane", "minecraft:phantom_membrane", "create:golden_sheet", "create:golden_sheet", "gtceu:holy_silver_dust", "gtceu:holy_silver_dust"],
        "nameless_trinkets:ultimate_dust",
        "relics:elytra_booster",
        5000
    )

    event.recipes.ars_nouveau.enchanting_apparatus(
        ["minecraft:cooked_porkchop", "minecraft:cooked_porkchop", "minecraft:golden_apple", "minecraft:golden_apple", "gtceu:holy_silver_dust", "gtceu:holy_silver_dust"],
        "nameless_trinkets:ultimate_dust",
        "relics:infinity_ham",
        5000
    )

})
