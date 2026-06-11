ServerEvents.recipes(event => {

    // No vanilla removals — all more relics items are loot drops only by default

    // ============================================================
    // JOURNEYMAN — shaped crafting, dubious_dust gate
    // ============================================================

    event.shaped(Item.of('morerelics:moodworm', 1), [
        'WBW', 'BDB', 'WBW'
    ], { 'W': 'minecraft:white_wool', 'B': 'minecraft:string', 'D': 'nameless_trinkets:dubious_dust' })

    event.shaped(Item.of('morerelics:axolotl_cream', 1), [
        'GKG', 'KDK', 'GKG'
    ], { 'G': 'minecraft:glass_bottle', 'K': 'minecraft:kelp', 'D': 'nameless_trinkets:dubious_dust' })

    event.shaped(Item.of('morerelics:eject_button', 1), [
        'RIR', 'IDI', 'RIR'
    ], { 'R': 'minecraft:redstone', 'I': 'minecraft:iron_ingot', 'D': 'nameless_trinkets:dubious_dust' })

    event.shaped(Item.of('morerelics:depleted_spool', 1), [
        'ISI', 'SDS', 'ISI'
    ], { 'I': 'minecraft:iron_ingot', 'S': 'minecraft:string', 'D': 'nameless_trinkets:dubious_dust' })

    event.shaped(Item.of('morerelics:slumbering_amulet', 1), [
        'GGG', 'GDG', 'PPP'
    ], { 'G': 'minecraft:gold_ingot', 'D': 'nameless_trinkets:dubious_dust', 'P': 'minecraft:poppy' })

    event.shaped(Item.of('morerelics:whispering_amulett', 1), [
        'FGF', 'GDG', 'FGF'
    ], { 'F': 'minecraft:feather', 'G': 'minecraft:gold_ingot', 'D': 'nameless_trinkets:dubious_dust' })

    // ============================================================
    // INITIATE — enchanting apparatus, glowing_dust catalyst
    // ============================================================

    event.recipes.ars_nouveau.enchanting_apparatus(
        ["minecraft:golden_apple", "minecraft:golden_apple", "minecraft:obsidian", "minecraft:obsidian", "gtceu:luminessence_dust"],
        "nameless_trinkets:glowing_dust",
        "morerelics:guts_orb",
        2000
    )

    event.recipes.ars_nouveau.enchanting_apparatus(
        ["minecraft:amethyst_shard", "minecraft:amethyst_shard", "minecraft:gold_ingot", "minecraft:gold_ingot", "gtceu:luminessence_dust"],
        "nameless_trinkets:glowing_dust",
        "morerelics:opal_necklace",
        1500
    )

    event.recipes.ars_nouveau.enchanting_apparatus(
        ["create:iron_sheet", "minecraft:glass", "minecraft:glass", "minecraft:redstone", "minecraft:redstone", "gtceu:luminessence_dust"],
        "nameless_trinkets:glowing_dust",
        "morerelics:bionic_eye",
        1500
    )

    event.recipes.ars_nouveau.enchanting_apparatus(
        ["minecraft:iron_ingot", "minecraft:iron_ingot", "minecraft:slime_ball", "minecraft:slime_ball", "gtceu:luminessence_dust"],
        "nameless_trinkets:glowing_dust",
        "morerelics:biojoint",
        1500
    )

    event.recipes.ars_nouveau.enchanting_apparatus(
        ["minecraft:iron_ingot", "minecraft:iron_ingot", "minecraft:bone", "minecraft:bone", "gtceu:luminessence_dust"],
        "nameless_trinkets:glowing_dust",
        "morerelics:vertebrax",
        1500
    )

    event.recipes.ars_nouveau.enchanting_apparatus(
        ["minecraft:iron_ingot", "minecraft:iron_ingot", "minecraft:flint", "minecraft:flint", "gtceu:luminessence_dust"],
        "nameless_trinkets:glowing_dust",
        "morerelics:sentient_rust",
        1500
    )

    // depleted_spool consumed as primary component
    event.recipes.ars_nouveau.enchanting_apparatus(
        ["morerelics:depleted_spool", "minecraft:string", "minecraft:string", "minecraft:iron_ingot", "gtceu:luminessence_dust"],
        "nameless_trinkets:glowing_dust",
        "morerelics:weavers_spool",
        2000
    )

    // ============================================================
    // SORCERER — enchanting apparatus, ultimate_dust catalyst
    // ============================================================

    event.recipes.ars_nouveau.enchanting_apparatus(
        ["minecraft:shield", "minecraft:shield", "minecraft:iron_block", "minecraft:iron_block", "gtceu:holy_silver_dust", "gtceu:holy_silver_dust"],
        "nameless_trinkets:ultimate_dust",
        "morerelics:shieldweave_cape",
        3500
    )

    event.recipes.ars_nouveau.enchanting_apparatus(
        ["minecraft:magma_cream", "minecraft:magma_cream", "minecraft:ice", "minecraft:ice", "gtceu:holy_silver_dust", "gtceu:holy_silver_dust"],
        "nameless_trinkets:ultimate_dust",
        "morerelics:thermoseismic_heart",
        4000
    )

    event.recipes.ars_nouveau.enchanting_apparatus(
        ["create:golden_sheet", "minecraft:ender_pearl", "minecraft:ender_pearl", "minecraft:obsidian", "gtceu:holy_silver_dust", "gtceu:holy_silver_dust"],
        "nameless_trinkets:ultimate_dust",
        "morerelics:gravitum_glove",
        4000
    )

    event.recipes.ars_nouveau.enchanting_apparatus(
        ["minecraft:leather_boots", "minecraft:ender_pearl", "minecraft:ender_pearl", "minecraft:obsidian", "gtceu:holy_silver_dust", "gtceu:holy_silver_dust"],
        "nameless_trinkets:ultimate_dust",
        "morerelics:gravitum_strider",
        4000
    )

    event.recipes.ars_nouveau.enchanting_apparatus(
        ["create:golden_sheet", "minecraft:iron_block", "minecraft:iron_block", "minecraft:netherite_scrap", "gtceu:holy_silver_dust", "gtceu:holy_silver_dust"],
        "nameless_trinkets:ultimate_dust",
        "morerelics:mass_gauntlet",
        4500
    )

    event.recipes.ars_nouveau.enchanting_apparatus(
        ["minecraft:obsidian", "minecraft:wither_skeleton_skull", "minecraft:obsidian", "minecraft:iron_block", "gtceu:holy_silver_dust", "gtceu:holy_silver_dust"],
        "nameless_trinkets:ultimate_dust",
        "morerelics:tyrant_mask",
        4500
    )

    event.recipes.ars_nouveau.enchanting_apparatus(
        ["minecraft:amethyst_shard", "minecraft:rabbit_foot", "minecraft:amethyst_shard", "minecraft:rabbit_foot", "gtceu:holy_silver_dust"],
        "nameless_trinkets:ultimate_dust",
        "morerelics:whims_of_fate",
        3500
    )

    event.recipes.ars_nouveau.enchanting_apparatus(
        ["minecraft:amethyst_shard", "minecraft:amethyst_shard", "minecraft:crying_obsidian", "minecraft:crying_obsidian", "gtceu:holy_silver_dust", "gtceu:holy_silver_dust"],
        "nameless_trinkets:ultimate_dust",
        "morerelics:converging_orb",
        4000
    )

    event.recipes.ars_nouveau.enchanting_apparatus(
        ["minecraft:golden_apple", "minecraft:chorus_fruit", "minecraft:golden_apple", "minecraft:chorus_fruit", "gtceu:holy_silver_dust", "gtceu:holy_silver_dust"],
        "nameless_trinkets:ultimate_dust",
        "morerelics:epoch_apple",
        4000
    )

    // ============================================================
    // ALCHEMIST — enchanting apparatus, ultimate_dust catalyst + prima_materia
    // ============================================================

    event.recipes.ars_nouveau.enchanting_apparatus(
        ["minecraft:diamond_block", "minecraft:diamond", "minecraft:diamond", "gtceu:prima_materia_ingot", "gtceu:prima_materia_ingot", "gtceu:prima_materia_ingot"],
        "nameless_trinkets:ultimate_dust",
        "morerelics:crown_of_the_legend",
        6000
    )

    event.recipes.ars_nouveau.enchanting_apparatus(
        ["minecraft:diamond_block", "minecraft:netherite_ingot", "minecraft:netherite_ingot", "gtceu:prima_materia_ingot", "gtceu:prima_materia_ingot", "gtceu:holy_silver_dust"],
        "nameless_trinkets:ultimate_dust",
        "morerelics:king_crimson",
        7000
    )

    event.recipes.ars_nouveau.enchanting_apparatus(
        ["minecraft:elytra", "minecraft:diamond_block", "minecraft:diamond_block", "gtceu:prima_materia_ingot", "gtceu:prima_materia_ingot", "gtceu:prima_materia_ingot"],
        "nameless_trinkets:ultimate_dust",
        "morerelics:made_in_heaven",
        8000
    )

    event.recipes.ars_nouveau.enchanting_apparatus(
        ["minecraft:netherite_block", "minecraft:netherite_block", "minecraft:wither_skeleton_skull", "gtceu:prima_materia_ingot", "gtceu:prima_materia_ingot", "gtceu:prima_materia_ingot", "gtceu:prima_materia_ingot"],
        "nameless_trinkets:ultimate_dust",
        "morerelics:wonder_of_u",
        10000
    )

})
