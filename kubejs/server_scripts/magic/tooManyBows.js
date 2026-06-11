ServerEvents.recipes(event => {

    // Remove vanilla bow recipes — too cheap, replaced below
    // Intermediate material recipes (power_crystal, cursed_stone, soul_fragment, rift_shard) kept as-is
    event.remove({ output: 'too_many_bows:hunter_bow' })
    event.remove({ output: 'too_many_bows:frostbite' })
    event.remove({ output: 'too_many_bows:sentinels_wrath' })
    event.remove({ output: 'too_many_bows:crimson_nexus' })
    event.remove({ output: 'too_many_bows:verdant_vigor' })
    event.remove({ output: 'too_many_bows:ironclad_bow' })
    event.remove({ output: 'too_many_bows:radiance' })
    event.remove({ output: 'too_many_bows:twin_shadows' })
    event.remove({ output: 'too_many_bows:ethereal_hunter' })
    event.remove({ output: 'too_many_bows:dusk_reaper' })
    event.remove({ output: 'too_many_bows:shulker_blast' })
    event.remove({ output: 'too_many_bows:ancient_sage_bow' })
    event.remove({ output: 'too_many_bows:necro_flame_bow' })

    // ============================================================
    // WEBSTRING — shapeless crafting (crafting material)
    // ============================================================

    event.shapeless(Item.of('too_many_bows:webstring', 4), [
        'minecraft:cobweb', 'minecraft:string', 'minecraft:string', 'minecraft:string'
    ])

    // ============================================================
    // JOURNEYMAN — shaped crafting, dubious_dust gate
    // simple utility bows with minor effects
    // ============================================================

    // effective vs passive mobs
    event.shaped(Item.of('too_many_bows:hunter_bow', 1), [
        ' L ', 'LBL', ' D '
    ], { 'L': 'minecraft:leather', 'B': 'minecraft:bow', 'D': 'nameless_trinkets:dubious_dust' })

    // shoot arrows underwater
    event.shaped(Item.of('too_many_bows:tidal_bow', 1), [
        'KPK', ' B ', ' D '
    ], { 'K': 'minecraft:kelp', 'P': 'minecraft:prismarine_shard', 'B': 'minecraft:bow', 'D': 'nameless_trinkets:dubious_dust' })

    // fire arrows + places torches on hit
    event.shaped(Item.of('too_many_bows:torchbearer', 1), [
        'TBT', 'TDT', ' T '
    ], { 'T': 'minecraft:torch', 'B': 'minecraft:bow', 'D': 'nameless_trinkets:dubious_dust' })

    // burst of arrows spread
    event.shaped(Item.of('too_many_bows:scatter_bow', 1), [
        'A A', 'DBD', 'A A'
    ], { 'A': 'minecraft:arrow', 'B': 'minecraft:bow', 'D': 'nameless_trinkets:dubious_dust' })

    // ============================================================
    // INITIATE — enchanting apparatus, glowing_dust catalyst
    // bow on pedestal; elemental / moderate combat effects
    // ============================================================

    // arcane spread: 3 arrows with extra arcane damage
    event.recipes.ars_nouveau.enchanting_apparatus(
        ["minecraft:bow", "minecraft:lapis_lazuli", "minecraft:lapis_lazuli", "minecraft:amethyst_shard", "minecraft:amethyst_shard", "gtceu:luminessence_dust"],
        "nameless_trinkets:glowing_dust",
        "too_many_bows:arcane_bow",
        1500
    )

    // gale burst knockback + Speed II + Slow Falling
    event.recipes.ars_nouveau.enchanting_apparatus(
        ["minecraft:bow", "minecraft:feather", "minecraft:feather", "minecraft:feather", "minecraft:feather", "gtceu:luminessence_dust"],
        "nameless_trinkets:glowing_dust",
        "too_many_bows:wind_bow",
        1500
    )

    // frost arrows, slow and freeze
    event.recipes.ars_nouveau.enchanting_apparatus(
        ["minecraft:bow", "minecraft:packed_ice", "minecraft:packed_ice", "minecraft:ice", "minecraft:ice", "gtceu:luminessence_dust"],
        "nameless_trinkets:glowing_dust",
        "too_many_bows:frostbite",
        1500
    )

    // poison cloud on impact
    event.recipes.ars_nouveau.enchanting_apparatus(
        ["minecraft:bow", "minecraft:spider_eye", "minecraft:spider_eye", "minecraft:fermented_spider_eye", "minecraft:vine", "gtceu:luminessence_dust"],
        "nameless_trinkets:glowing_dust",
        "too_many_bows:verdant_viper",
        1500
    )

    // consumes health, lifedrains nearby foes
    event.recipes.ars_nouveau.enchanting_apparatus(
        ["minecraft:bow", "minecraft:crimson_planks", "minecraft:magma_cream", "minecraft:magma_cream", "minecraft:nether_brick", "gtceu:luminessence_dust"],
        "nameless_trinkets:glowing_dust",
        "too_many_bows:crimson_nexus",
        2000
    )

    // effective vs raiders
    event.recipes.ars_nouveau.enchanting_apparatus(
        ["minecraft:bow", "minecraft:iron_ingot", "minecraft:iron_ingot", "minecraft:emerald", "minecraft:emerald", "gtceu:luminessence_dust"],
        "nameless_trinkets:glowing_dust",
        "too_many_bows:sentinels_wrath",
        1500
    )

    // heals allies while held
    event.recipes.ars_nouveau.enchanting_apparatus(
        ["minecraft:bow", "minecraft:emerald", "minecraft:emerald", "minecraft:vine", "minecraft:vine", "gtceu:luminessence_dust"],
        "nameless_trinkets:glowing_dust",
        "too_many_bows:verdant_vigor",
        1500
    )

    // grants bonus XP on hit
    event.recipes.ars_nouveau.enchanting_apparatus(
        ["minecraft:bow", "minecraft:emerald", "minecraft:emerald", "minecraft:experience_bottle", "minecraft:experience_bottle", "gtceu:luminessence_dust"],
        "nameless_trinkets:glowing_dust",
        "too_many_bows:emerald_sage_bow",
        1500
    )

    // ice/cold themed
    event.recipes.ars_nouveau.enchanting_apparatus(
        ["minecraft:bow", "minecraft:blue_ice", "minecraft:blue_ice", "minecraft:heart_of_the_sea", "gtceu:luminessence_dust"],
        "nameless_trinkets:glowing_dust",
        "too_many_bows:cyroheart_bow",
        2000
    )

    // dark arrows
    event.recipes.ars_nouveau.enchanting_apparatus(
        ["minecraft:bow", "minecraft:obsidian", "minecraft:obsidian", "minecraft:ink_sac", "minecraft:ink_sac", "gtceu:luminessence_dust"],
        "nameless_trinkets:glowing_dust",
        "too_many_bows:dark_bow",
        1500
    )

    // magnetic pulse, pulls enemies on impact
    event.recipes.ars_nouveau.enchanting_apparatus(
        ["minecraft:bow", "minecraft:iron_block", "minecraft:iron_block", "minecraft:iron_ingot", "minecraft:iron_ingot", "gtceu:luminessence_dust"],
        "nameless_trinkets:glowing_dust",
        "too_many_bows:ironclad_bow",
        2000
    )

    // leeching arrows, steals health
    event.recipes.ars_nouveau.enchanting_apparatus(
        ["minecraft:bow", "minecraft:golden_apple", "minecraft:golden_apple", "minecraft:rotten_flesh", "minecraft:rotten_flesh", "gtceu:luminessence_dust"],
        "nameless_trinkets:glowing_dust",
        "too_many_bows:vitality_weaver",
        2000
    )

    // ============================================================
    // SORCERER — enchanting apparatus, ultimate_dust catalyst
    // powerful elemental / dimensional / high-concept effects
    // ============================================================

    // strikes lightning on direct hit
    event.recipes.ars_nouveau.enchanting_apparatus(
        ["minecraft:bow", "minecraft:lightning_rod", "minecraft:lightning_rod", "minecraft:amethyst_shard", "minecraft:amethyst_shard", "gtceu:holy_silver_dust", "gtceu:holy_silver_dust"],
        "nameless_trinkets:ultimate_dust",
        "too_many_bows:arc_heavens",
        3000
    )

    // summons fire tornados near enemies
    event.recipes.ars_nouveau.enchanting_apparatus(
        ["minecraft:bow", "minecraft:blaze_rod", "minecraft:blaze_rod", "minecraft:fire_charge", "minecraft:fire_charge", "gtceu:holy_silver_dust", "gtceu:holy_silver_dust"],
        "nameless_trinkets:ultimate_dust",
        "too_many_bows:solar_bow",
        3500
    )

    // flaming arrows with fiery explosions
    event.recipes.ars_nouveau.enchanting_apparatus(
        ["minecraft:bow", "minecraft:blaze_rod", "minecraft:magma_cream", "minecraft:magma_cream", "minecraft:fire_charge", "gtceu:holy_silver_dust", "gtceu:holy_silver_dust"],
        "nameless_trinkets:ultimate_dust",
        "too_many_bows:flame_bow",
        3000
    )

    // arrows pass through blocks
    event.recipes.ars_nouveau.enchanting_apparatus(
        ["minecraft:bow", "minecraft:phantom_membrane", "minecraft:phantom_membrane", "minecraft:obsidian", "minecraft:obsidian", "gtceu:holy_silver_dust", "gtceu:holy_silver_dust"],
        "nameless_trinkets:ultimate_dust",
        "too_many_bows:spectral_whisper",
        3500
    )

    // twin light and dark arrows
    event.recipes.ars_nouveau.enchanting_apparatus(
        ["minecraft:bow", "minecraft:obsidian", "minecraft:obsidian", "minecraft:quartz", "minecraft:quartz", "gtceu:holy_silver_dust", "gtceu:holy_silver_dust"],
        "nameless_trinkets:ultimate_dust",
        "too_many_bows:twin_shadows",
        3500
    )

    // consumes hunger to fire powerful arrows
    event.recipes.ars_nouveau.enchanting_apparatus(
        ["minecraft:bow", "too_many_bows:power_crystal", "too_many_bows:power_crystal", "minecraft:blaze_powder", "minecraft:blaze_powder", "gtceu:holy_silver_dust", "gtceu:holy_silver_dust"],
        "nameless_trinkets:ultimate_dust",
        "too_many_bows:ethereal_hunter",
        3000
    )

    // damages undead, heals allies, consumes XP per shot
    event.recipes.ars_nouveau.enchanting_apparatus(
        ["minecraft:bow", "minecraft:glowstone", "minecraft:glowstone", "minecraft:gold_block", "minecraft:gold_block", "gtceu:holy_silver_dust", "gtceu:holy_silver_dust"],
        "nameless_trinkets:ultimate_dust",
        "too_many_bows:radiance",
        3500
    )

    // ricochet arrows
    event.recipes.ars_nouveau.enchanting_apparatus(
        ["minecraft:bow", "minecraft:ender_pearl", "minecraft:ender_pearl", "minecraft:amethyst_shard", "minecraft:amethyst_shard", "gtceu:holy_silver_dust"],
        "nameless_trinkets:ultimate_dust",
        "too_many_bows:astral_bound",
        3000
    )

    // levitation + slow falling (Aether-themed)
    event.recipes.ars_nouveau.enchanting_apparatus(
        ["minecraft:bow", "aether:zanite_gemstone", "aether:zanite_gemstone", "minecraft:feather", "minecraft:feather", "gtceu:holy_silver_dust", "gtceu:holy_silver_dust"],
        "nameless_trinkets:ultimate_dust",
        "too_many_bows:aethers_call",
        3500
    )

    // demon power
    event.recipes.ars_nouveau.enchanting_apparatus(
        ["minecraft:bow", "minecraft:blaze_rod", "minecraft:wither_skeleton_skull", "minecraft:soul_sand", "minecraft:soul_sand", "gtceu:holy_silver_dust", "gtceu:holy_silver_dust"],
        "nameless_trinkets:ultimate_dust",
        "too_many_bows:demons_grasp",
        3500
    )

    // ============================================================
    // ALCHEMIST — enchanting apparatus, ultimate_dust catalyst + prima_materia
    // top-tier bows: armor pierce, cursed effects, End/Nether endgame
    // ============================================================

    // pierces 33% of armor
    event.recipes.ars_nouveau.enchanting_apparatus(
        ["minecraft:bow", "minecraft:emerald_block", "minecraft:emerald_block", "too_many_bows:power_crystal", "too_many_bows:power_crystal", "gtceu:prima_materia_ingot", "gtceu:prima_materia_ingot"],
        "nameless_trinkets:ultimate_dust",
        "too_many_bows:ancient_sage_bow",
        5000
    )

    // marks enemies; spectral death explosion; consumes soul_fragment
    event.recipes.ars_nouveau.enchanting_apparatus(
        ["minecraft:bow", "too_many_bows:soul_fragment", "too_many_bows:soul_fragment", "minecraft:phantom_membrane", "minecraft:phantom_membrane", "gtceu:prima_materia_ingot", "gtceu:prima_materia_ingot"],
        "nameless_trinkets:ultimate_dust",
        "too_many_bows:dusk_reaper",
        5000
    )

    // homing shulker blasts
    event.recipes.ars_nouveau.enchanting_apparatus(
        ["minecraft:bow", "minecraft:shulker_shell", "minecraft:shulker_shell", "minecraft:ender_pearl", "minecraft:ender_pearl", "gtceu:prima_materia_ingot", "gtceu:prima_materia_ingot"],
        "nameless_trinkets:ultimate_dust",
        "too_many_bows:shulker_blast",
        5000
    )

    // dragon's breath on impact
    event.recipes.ars_nouveau.enchanting_apparatus(
        ["minecraft:bow", "minecraft:dragon_breath", "minecraft:dragon_breath", "minecraft:end_stone", "minecraft:end_stone", "gtceu:prima_materia_ingot", "gtceu:prima_materia_ingot"],
        "nameless_trinkets:ultimate_dust",
        "too_many_bows:dragons_breath",
        5500
    )

    // celestial rift energy; consumes rift_shard per shot
    event.recipes.ars_nouveau.enchanting_apparatus(
        ["minecraft:bow", "too_many_bows:rift_shard", "too_many_bows:rift_shard", "minecraft:ender_eye", "minecraft:ender_eye", "gtceu:prima_materia_ingot", "gtceu:prima_materia_ingot"],
        "nameless_trinkets:ultimate_dust",
        "too_many_bows:auroras_grace",
        5500
    )

    // necro + cursed stone + wither skulls
    event.recipes.ars_nouveau.enchanting_apparatus(
        ["minecraft:bow", "too_many_bows:cursed_stone", "too_many_bows:cursed_stone", "minecraft:wither_skeleton_skull", "minecraft:wither_skeleton_skull", "gtceu:prima_materia_ingot", "gtceu:prima_materia_ingot"],
        "nameless_trinkets:ultimate_dust",
        "too_many_bows:necro_flame_bow",
        5000
    )

    // infinite arrows + enhanced damage (ancient relic)
    event.recipes.ars_nouveau.enchanting_apparatus(
        ["minecraft:bow", "minecraft:ancient_debris", "minecraft:ancient_debris", "minecraft:netherite_ingot", "minecraft:netherite_ingot", "gtceu:prima_materia_ingot", "gtceu:prima_materia_ingot"],
        "nameless_trinkets:ultimate_dust",
        "too_many_bows:burnt_relic",
        6000
    )

    // ============================================================
    // ACCESSORIES — rings / necklaces / gloves
    // ============================================================

    // Sharpshot Ring — +bow damage (Journeyman ring, dubious_dust)
    event.shaped(Item.of('too_many_bows:sharpshot_ring', 1), [
        'GDG', 'GAG', 'GDG'
    ], { 'G': 'minecraft:gold_ingot', 'D': 'nameless_trinkets:dubious_dust', 'A': 'minecraft:arrow' })

    // Fletchers Talisman — reduces bow durability loss (Journeyman)
    event.shaped(Item.of('too_many_bows:fletchers_talisman', 1), [
        'FSF', 'SDS', 'FSF'
    ], { 'F': 'minecraft:feather', 'S': 'minecraft:string', 'D': 'nameless_trinkets:dubious_dust' })

    // Stormbound Signet — +bow damage ring (Initiate)
    event.recipes.ars_nouveau.enchanting_apparatus(
        ["minecraft:gold_block", "minecraft:gold_block", "minecraft:lightning_rod", "minecraft:lightning_rod", "gtceu:luminessence_dust"],
        "nameless_trinkets:glowing_dust",
        "too_many_bows:stormbound_signet",
        2000
    )

    // Dead Eyes Pendant — bow crit chance (Initiate)
    event.recipes.ars_nouveau.enchanting_apparatus(
        ["minecraft:obsidian", "minecraft:obsidian", "minecraft:diamond", "minecraft:diamond", "gtceu:luminessence_dust"],
        "nameless_trinkets:glowing_dust",
        "too_many_bows:dead_eyes_pendant",
        2000
    )

    // Windwoven Gloves — increases bow draw speed (Initiate)
    event.recipes.ars_nouveau.enchanting_apparatus(
        ["minecraft:leather", "minecraft:leather", "minecraft:feather", "minecraft:feather", "gtceu:luminessence_dust"],
        "nameless_trinkets:glowing_dust",
        "too_many_bows:wind_glove",
        1500
    )

})
