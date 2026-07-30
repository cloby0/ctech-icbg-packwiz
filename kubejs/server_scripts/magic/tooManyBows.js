ServerEvents.recipes(event => {

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

    event.shapeless(Item.of('too_many_bows:webstring', 4), [
        'minecraft:cobweb', 'minecraft:string', 'minecraft:string', 'minecraft:string', '#forge:tools/wire_cutters'
    ]).damageIngredient(Ingredient.of('#forge:tools/wire_cutters'))

    event.shaped(Item.of('too_many_bows:hunter_bow', 1), [
        'KL ', 'LBL', ' D '
    ], { 'L': 'minecraft:leather', 'B': 'minecraft:bow', 'D': 'nameless_trinkets:dubious_dust', 'K': '#forge:tools/knives' }).damageIngredient(Ingredient.of('#forge:tools/knives'))

    event.shaped(Item.of('too_many_bows:tidal_bow', 1), [
        'KPK', 'NB ', ' D '
    ], { 'K': 'minecraft:kelp', 'P': 'minecraft:prismarine_shard', 'B': 'minecraft:bow', 'D': 'nameless_trinkets:dubious_dust', 'N': '#forge:tools/knives' }).damageIngredient(Ingredient.of('#forge:tools/knives'))

    event.shaped(Item.of('too_many_bows:torchbearer', 1), [
        'TBT', 'TDT', 'CT '
    ], { 'T': 'minecraft:torch', 'B': 'minecraft:bow', 'D': 'nameless_trinkets:dubious_dust', 'C': '#forge:tools/wire_cutters' }).damageIngredient(Ingredient.of('#forge:tools/wire_cutters'))

    event.shaped(Item.of('too_many_bows:scatter_bow', 1), [
        'AKA', 'DBD', 'A A'
    ], { 'A': 'minecraft:arrow', 'B': 'minecraft:bow', 'D': 'nameless_trinkets:dubious_dust', 'K': '#forge:tools/knives' }).damageIngredient(Ingredient.of('#forge:tools/knives'))

    addMnaManaweavingRecipe(event, {
        output: 'too_many_bows:arcane_bow',
        items: ['nameless_trinkets:glowing_dust', 'minecraft:bow', 'minecraft:lapis_lazuli', 'minecraft:lapis_lazuli', 'minecraft:amethyst_shard', 'minecraft:amethyst_shard', 'gtceu:luminessence_dust'],
        patterns: ['mna:diamond', 'mna:knot'],
        tier: 2
    })

    addMnaManaweavingRecipe(event, {
        output: 'too_many_bows:wind_bow',
        items: ['nameless_trinkets:glowing_dust', 'minecraft:bow', 'minecraft:feather', 'minecraft:feather', 'minecraft:feather', 'minecraft:feather', 'gtceu:luminessence_dust'],
        patterns: ['mna:diamond', 'mna:knot'],
        tier: 2
    })

    addMnaManaweavingRecipe(event, {
        output: 'too_many_bows:frostbite',
        items: ['nameless_trinkets:glowing_dust', 'minecraft:bow', 'minecraft:packed_ice', 'minecraft:packed_ice', 'minecraft:ice', 'minecraft:ice', 'gtceu:luminessence_dust'],
        patterns: ['mna:diamond', 'mna:knot'],
        tier: 2
    })

    addMnaManaweavingRecipe(event, {
        output: 'too_many_bows:verdant_viper',
        items: ['nameless_trinkets:glowing_dust', 'minecraft:bow', 'minecraft:spider_eye', 'minecraft:spider_eye', 'minecraft:fermented_spider_eye', 'minecraft:vine', 'gtceu:luminessence_dust'],
        patterns: ['mna:diamond', 'mna:knot'],
        tier: 2
    })

    addMnaManaweavingRecipe(event, {
        output: 'too_many_bows:crimson_nexus',
        items: ['nameless_trinkets:glowing_dust', 'minecraft:bow', 'minecraft:crimson_planks', 'minecraft:magma_cream', 'minecraft:magma_cream', 'minecraft:nether_brick', 'gtceu:luminessence_dust'],
        patterns: ['mna:diamond', 'mna:knot'],
        tier: 2
    })

    addMnaManaweavingRecipe(event, {
        output: 'too_many_bows:sentinels_wrath',
        items: ['nameless_trinkets:glowing_dust', 'minecraft:bow', 'minecraft:iron_ingot', 'minecraft:iron_ingot', 'minecraft:emerald', 'minecraft:emerald', 'gtceu:luminessence_dust'],
        patterns: ['mna:diamond', 'mna:knot'],
        tier: 2
    })

    addMnaManaweavingRecipe(event, {
        output: 'too_many_bows:verdant_vigor',
        items: ['nameless_trinkets:glowing_dust', 'minecraft:bow', 'minecraft:emerald', 'minecraft:emerald', 'minecraft:vine', 'minecraft:vine', 'gtceu:luminessence_dust'],
        patterns: ['mna:diamond', 'mna:knot'],
        tier: 2
    })

    addMnaManaweavingRecipe(event, {
        output: 'too_many_bows:emerald_sage_bow',
        items: ['nameless_trinkets:glowing_dust', 'minecraft:bow', 'minecraft:emerald', 'minecraft:emerald', 'minecraft:experience_bottle', 'minecraft:experience_bottle', 'gtceu:luminessence_dust'],
        patterns: ['mna:diamond', 'mna:knot'],
        tier: 2
    })

    addMnaManaweavingRecipe(event, {
        output: 'too_many_bows:cyroheart_bow',
        items: ['nameless_trinkets:glowing_dust', 'minecraft:bow', 'minecraft:blue_ice', 'minecraft:blue_ice', 'minecraft:heart_of_the_sea', 'gtceu:luminessence_dust'],
        patterns: ['mna:diamond', 'mna:knot'],
        tier: 2
    })

    addMnaManaweavingRecipe(event, {
        output: 'too_many_bows:dark_bow',
        items: ['nameless_trinkets:glowing_dust', 'minecraft:bow', 'minecraft:obsidian', 'minecraft:obsidian', 'minecraft:ink_sac', 'minecraft:ink_sac', 'gtceu:luminessence_dust'],
        patterns: ['mna:diamond', 'mna:knot'],
        tier: 2
    })

    addMnaManaweavingRecipe(event, {
        output: 'too_many_bows:ironclad_bow',
        items: ['nameless_trinkets:glowing_dust', 'minecraft:bow', 'minecraft:iron_block', 'minecraft:iron_block', 'minecraft:iron_ingot', 'minecraft:iron_ingot', 'gtceu:luminessence_dust'],
        patterns: ['mna:diamond', 'mna:knot'],
        tier: 2
    })

    addMnaManaweavingRecipe(event, {
        output: 'too_many_bows:vitality_weaver',
        items: ['nameless_trinkets:glowing_dust', 'minecraft:bow', 'minecraft:golden_apple', 'minecraft:golden_apple', 'minecraft:rotten_flesh', 'minecraft:rotten_flesh', 'gtceu:luminessence_dust'],
        patterns: ['mna:diamond', 'mna:knot'],
        tier: 2
    })

    addMnaManaweavingRecipe(event, {
        output: 'too_many_bows:arc_heavens',
        items: ['nameless_trinkets:ultimate_dust', 'minecraft:bow', 'minecraft:lightning_rod', 'minecraft:lightning_rod', 'minecraft:amethyst_shard', 'minecraft:amethyst_shard', 'gtceu:holy_silver_dust', 'gtceu:holy_silver_dust'],
        patterns: ['mna:split_triangle', 'mna:knot2'],
        tier: 3
    })

    addMnaManaweavingRecipe(event, {
        output: 'too_many_bows:solar_bow',
        items: ['nameless_trinkets:ultimate_dust', 'minecraft:bow', 'minecraft:blaze_rod', 'minecraft:blaze_rod', 'minecraft:fire_charge', 'minecraft:fire_charge', 'gtceu:holy_silver_dust', 'gtceu:holy_silver_dust'],
        patterns: ['mna:split_triangle', 'mna:knot2'],
        tier: 3
    })

    addMnaManaweavingRecipe(event, {
        output: 'too_many_bows:flame_bow',
        items: ['nameless_trinkets:ultimate_dust', 'minecraft:bow', 'minecraft:blaze_rod', 'minecraft:magma_cream', 'minecraft:magma_cream', 'minecraft:fire_charge', 'gtceu:holy_silver_dust', 'gtceu:holy_silver_dust'],
        patterns: ['mna:split_triangle', 'mna:knot2'],
        tier: 3
    })

    addMnaManaweavingRecipe(event, {
        output: 'too_many_bows:spectral_whisper',
        items: ['nameless_trinkets:ultimate_dust', 'minecraft:bow', 'minecraft:phantom_membrane', 'minecraft:phantom_membrane', 'minecraft:obsidian', 'minecraft:obsidian', 'gtceu:holy_silver_dust', 'gtceu:holy_silver_dust'],
        patterns: ['mna:split_triangle', 'mna:knot2'],
        tier: 3
    })

    addMnaManaweavingRecipe(event, {
        output: 'too_many_bows:twin_shadows',
        items: ['nameless_trinkets:ultimate_dust', 'minecraft:bow', 'minecraft:obsidian', 'minecraft:obsidian', 'minecraft:quartz', 'minecraft:quartz', 'gtceu:holy_silver_dust', 'gtceu:holy_silver_dust'],
        patterns: ['mna:split_triangle', 'mna:knot2'],
        tier: 3
    })

    addMnaManaweavingRecipe(event, {
        output: 'too_many_bows:ethereal_hunter',
        items: ['nameless_trinkets:ultimate_dust', 'minecraft:bow', 'too_many_bows:power_crystal', 'too_many_bows:power_crystal', 'minecraft:blaze_powder', 'minecraft:blaze_powder', 'gtceu:holy_silver_dust', 'gtceu:holy_silver_dust'],
        patterns: ['mna:split_triangle', 'mna:knot2'],
        tier: 3
    })

    addMnaManaweavingRecipe(event, {
        output: 'too_many_bows:radiance',
        items: ['nameless_trinkets:ultimate_dust', 'minecraft:bow', 'minecraft:glowstone', 'minecraft:glowstone', 'minecraft:gold_block', 'minecraft:gold_block', 'gtceu:holy_silver_dust', 'gtceu:holy_silver_dust'],
        patterns: ['mna:split_triangle', 'mna:knot2'],
        tier: 3
    })

    addMnaManaweavingRecipe(event, {
        output: 'too_many_bows:astral_bound',
        items: ['nameless_trinkets:ultimate_dust', 'minecraft:bow', 'minecraft:ender_pearl', 'minecraft:ender_pearl', 'minecraft:amethyst_shard', 'minecraft:amethyst_shard', 'gtceu:holy_silver_dust'],
        patterns: ['mna:split_triangle', 'mna:knot2'],
        tier: 3
    })

    addMnaManaweavingRecipe(event, {
        output: 'too_many_bows:aethers_call',
        items: ['nameless_trinkets:ultimate_dust', 'minecraft:bow', 'aether:zanite_gemstone', 'aether:zanite_gemstone', 'minecraft:feather', 'minecraft:feather', 'gtceu:holy_silver_dust', 'gtceu:holy_silver_dust'],
        patterns: ['mna:split_triangle', 'mna:knot2'],
        tier: 3
    })

    addMnaManaweavingRecipe(event, {
        output: 'too_many_bows:demons_grasp',
        items: ['nameless_trinkets:ultimate_dust', 'minecraft:bow', 'minecraft:blaze_rod', 'minecraft:wither_skeleton_skull', 'minecraft:soul_sand', 'minecraft:soul_sand', 'gtceu:holy_silver_dust', 'gtceu:holy_silver_dust'],
        patterns: ['mna:split_triangle', 'mna:knot2'],
        tier: 3
    })

    addMnaManaweavingRecipe(event, {
        output: 'too_many_bows:ancient_sage_bow',
        items: ['nameless_trinkets:ultimate_dust', 'minecraft:bow', 'minecraft:emerald_block', 'minecraft:emerald_block', 'too_many_bows:power_crystal', 'too_many_bows:power_crystal', 'gtceu:prima_materia_ingot', 'gtceu:prima_materia_ingot'],
        patterns: ['mna:split_triangle', 'mna:knot2'],
        tier: 3
    })

    addMnaManaweavingRecipe(event, {
        output: 'too_many_bows:dusk_reaper',
        items: ['nameless_trinkets:ultimate_dust', 'minecraft:bow', 'too_many_bows:soul_fragment', 'too_many_bows:soul_fragment', 'minecraft:phantom_membrane', 'minecraft:phantom_membrane', 'gtceu:prima_materia_ingot', 'gtceu:prima_materia_ingot'],
        patterns: ['mna:split_triangle', 'mna:knot2'],
        tier: 3
    })

    addMnaManaweavingRecipe(event, {
        output: 'too_many_bows:shulker_blast',
        items: ['nameless_trinkets:ultimate_dust', 'minecraft:bow', 'minecraft:shulker_shell', 'minecraft:shulker_shell', 'minecraft:ender_pearl', 'minecraft:ender_pearl', 'gtceu:prima_materia_ingot', 'gtceu:prima_materia_ingot'],
        patterns: ['mna:split_triangle', 'mna:knot2'],
        tier: 3
    })

    addMnaManaweavingRecipe(event, {
        output: 'too_many_bows:dragons_breath',
        items: ['nameless_trinkets:ultimate_dust', 'minecraft:bow', 'minecraft:dragon_breath', 'minecraft:dragon_breath', 'minecraft:end_stone', 'minecraft:end_stone', 'gtceu:prima_materia_ingot', 'kubejs:starforged_sigil', 'kubejs:starforged_motive_core'],
        patterns: ['mna:split_triangle', 'mna:knot2'],
        tier: 3
    })

    addMnaManaweavingRecipe(event, {
        output: 'too_many_bows:auroras_grace',
        items: ['nameless_trinkets:ultimate_dust', 'minecraft:bow', 'too_many_bows:rift_shard', 'too_many_bows:rift_shard', 'minecraft:ender_eye', 'minecraft:ender_eye', 'gtceu:prima_materia_ingot', 'kubejs:starforged_sigil', 'kubejs:starforged_motive_core'],
        patterns: ['mna:split_triangle', 'mna:knot2'],
        tier: 3
    })

    addMnaManaweavingRecipe(event, {
        output: 'too_many_bows:necro_flame_bow',
        items: ['nameless_trinkets:ultimate_dust', 'minecraft:bow', 'too_many_bows:cursed_stone', 'too_many_bows:cursed_stone', 'minecraft:wither_skeleton_skull', 'minecraft:wither_skeleton_skull', 'gtceu:prima_materia_ingot', 'gtceu:prima_materia_ingot'],
        patterns: ['mna:split_triangle', 'mna:knot2'],
        tier: 3
    })

    addMnaManaweavingRecipe(event, {
        output: 'too_many_bows:burnt_relic',
        items: ['nameless_trinkets:ultimate_dust', 'minecraft:bow', 'minecraft:ancient_debris', 'minecraft:ancient_debris', 'minecraft:netherite_ingot', 'minecraft:netherite_ingot', 'gtceu:prima_materia_ingot', 'kubejs:starforged_sigil', 'kubejs:starforged_motive_core'],
        patterns: ['mna:split_triangle', 'mna:knot2'],
        tier: 3
    })

    event.shaped(Item.of('too_many_bows:sharpshot_ring', 1), [
        'HDF', 'GAG', 'GDG'
    ], { 'G': 'minecraft:gold_ingot', 'D': 'nameless_trinkets:dubious_dust', 'A': 'minecraft:arrow', 'H': '#forge:tools/hammers', 'F': '#forge:tools/files' }).damageIngredient(Ingredient.of('#forge:tools/hammers')).damageIngredient(Ingredient.of('#forge:tools/files'))

    event.shaped(Item.of('too_many_bows:fletchers_talisman', 1), [
        'FSF', 'CDS', 'FSF'
    ], { 'F': 'minecraft:feather', 'S': 'minecraft:string', 'D': 'nameless_trinkets:dubious_dust', 'C': '#forge:tools/wire_cutters' }).damageIngredient(Ingredient.of('#forge:tools/wire_cutters'))

    addMnaManaweavingRecipe(event, {
        output: 'too_many_bows:stormbound_signet',
        items: ['nameless_trinkets:glowing_dust', 'minecraft:gold_block', 'minecraft:gold_block', 'minecraft:lightning_rod', 'minecraft:lightning_rod', 'gtceu:luminessence_dust'],
        patterns: ['mna:diamond', 'mna:knot'],
        tier: 2
    })

    addMnaManaweavingRecipe(event, {
        output: 'too_many_bows:dead_eyes_pendant',
        items: ['nameless_trinkets:glowing_dust', 'minecraft:obsidian', 'minecraft:obsidian', 'minecraft:diamond', 'minecraft:diamond', 'gtceu:luminessence_dust'],
        patterns: ['mna:diamond', 'mna:knot'],
        tier: 2
    })

    addMnaManaweavingRecipe(event, {
        output: 'too_many_bows:wind_glove',
        items: ['nameless_trinkets:glowing_dust', 'minecraft:leather', 'minecraft:leather', 'minecraft:feather', 'minecraft:feather', 'gtceu:luminessence_dust'],
        patterns: ['mna:diamond', 'mna:knot'],
        tier: 2
    })

})
