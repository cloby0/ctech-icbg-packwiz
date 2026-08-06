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

    addMnaManaweavingRecipe(event, {
        output: 'artifacts:aqua_dashers',
        items: ['nameless_trinkets:glowing_dust', 'minecraft:leather_boots', 'minecraft:leather_boots', 'minecraft:packed_ice', 'kubejs:gravitic_sigil', 'kubejs:gravitic_motive_core', 'kubejs:gravitic_channeling_vessel', 'kubejs:chaos_essence'],
        patterns: ['mna:diamond', 'mna:knot'],
        tier: 2
    })

    addMnaManaweavingRecipe(event, {
        output: 'artifacts:bunny_hoppers',
        items: ['nameless_trinkets:glowing_dust', 'minecraft:leather_boots', 'minecraft:leather_boots', 'minecraft:slime_ball', 'kubejs:gravitic_sigil', 'minecraft:feather', 'kubejs:gravitic_motive_core', 'kubejs:chaos_essence'],
        patterns: ['mna:diamond', 'mna:knot'],
        tier: 2
    })

    addMnaManaweavingRecipe(event, {
        output: 'artifacts:digging_claws',
        items: ['nameless_trinkets:glowing_dust', 'create:iron_sheet', 'minecraft:iron_ingot', 'kubejs:gravitic_sigil', 'minecraft:flint', 'minecraft:flint', 'kubejs:gravitic_motive_core', 'kubejs:chaos_essence'],
        patterns: ['mna:diamond', 'mna:knot'],
        tier: 2
    })

    addMnaManaweavingRecipe(event, {
        output: 'artifacts:feral_claws',
        items: ['nameless_trinkets:glowing_dust', 'create:iron_sheet', 'minecraft:iron_ingot', 'kubejs:gravitic_sigil', 'minecraft:flint', 'minecraft:feather', 'kubejs:gravitic_motive_core', 'kubejs:chaos_essence'],
        patterns: ['mna:diamond', 'mna:knot'],
        tier: 2
    })

    // Reflavored to Spirit Altar 2026-08-06: blaze_rod + magma_cream is straight fire theming,
    // infernal spirit is the honest cost, not a woven pattern.
    addSpiritInfusion(event, {
        output: 'artifacts:fire_gauntlet',
        input: 'minecraft:blaze_rod',
        spirits: [{ type: 'infernal', count: 3 }],
        extraItems: [
            { item: 'minecraft:fire_charge' },
            { item: 'minecraft:magma_cream', count: 2 },
            { item: 'kubejs:gravitic_sigil' },
            { item: 'kubejs:gravitic_ward_lattice' },
            { item: 'kubejs:chaos_essence' }
        ]
    })

    addMnaManaweavingRecipe(event, {
        output: 'artifacts:pocket_piston',
        items: ['nameless_trinkets:glowing_dust', 'create:iron_sheet', 'minecraft:piston', 'minecraft:piston', 'minecraft:iron_ingot', 'kubejs:gravitic_sigil', 'kubejs:gravitic_motive_core', 'kubejs:chaos_essence'],
        patterns: ['mna:diamond', 'mna:knot'],
        tier: 2
    })

    addMnaManaweavingRecipe(event, {
        output: 'artifacts:power_glove',
        items: ['nameless_trinkets:glowing_dust', 'create:iron_sheet', 'minecraft:iron_block', 'kubejs:gravitic_sigil', 'minecraft:diamond', 'minecraft:diamond', 'kubejs:gravitic_motive_core', 'kubejs:chaos_essence'],
        patterns: ['mna:diamond', 'mna:knot'],
        tier: 2
    })

    // Reflavored to Spirit Altar 2026-08-06: stealth/deception is a wicked-spirit archetype.
    addSpiritInfusion(event, {
        output: 'artifacts:scarf_of_invisibility',
        input: 'minecraft:phantom_membrane',
        spirits: [{ type: 'wicked', count: 3 }],
        extraItems: [
            { item: 'minecraft:leather' },
            { item: 'minecraft:ender_pearl' },
            { item: 'minecraft:black_dye' },
            { item: 'kubejs:gravitic_sigil' },
            { item: 'kubejs:gravitic_ward_lattice' },
            { item: 'kubejs:chaos_essence' }
        ]
    })

    addMnaManaweavingRecipe(event, {
        output: 'artifacts:shock_pendant',
        items: ['nameless_trinkets:glowing_dust', 'minecraft:amethyst_shard', 'minecraft:lightning_rod', 'kubejs:gravitic_sigil', 'minecraft:quartz', 'minecraft:redstone', 'kubejs:gravitic_wizard_brain', 'kubejs:gravitic_channeling_vessel', 'kubejs:chaos_essence'],
        patterns: ['mna:diamond', 'mna:knot'],
        tier: 2
    })

    addMnaManaweavingRecipe(event, {
        output: 'artifacts:thorn_pendant',
        items: ['nameless_trinkets:glowing_dust', 'minecraft:iron_ingot', 'kubejs:gravitic_sigil', 'minecraft:cactus', 'minecraft:cactus', 'kubejs:gravitic_ward_lattice', 'kubejs:chaos_essence'],
        patterns: ['mna:diamond', 'mna:knot'],
        tier: 2
    })

    addMnaManaweavingRecipe(event, {
        output: 'artifacts:flame_pendant',
        items: ['nameless_trinkets:glowing_dust', 'minecraft:fire_charge', 'minecraft:blaze_rod', 'minecraft:blaze_powder', 'kubejs:gravitic_sigil', 'minecraft:amethyst_shard', 'kubejs:gravitic_wizard_brain', 'kubejs:chaos_essence'],
        patterns: ['mna:diamond', 'mna:knot'],
        tier: 2
    })

    // Reflavored to Spirit Altar 2026-08-06: totem/cross death-warding is sacred iconography,
    // not a woven pattern.
    addSpiritInfusion(event, {
        output: 'artifacts:cross_necklace',
        input: 'minecraft:totem_of_undying',
        spirits: [{ type: 'sacred', count: 3 }],
        extraItems: [
            { item: 'minecraft:golden_apple' },
            { item: 'minecraft:diamond' },
            { item: 'kubejs:gravitic_sigil' },
            { item: 'kubejs:gravitic_ward_lattice' },
            { item: 'kubejs:chaos_essence' }
        ]
    })

    addMnaManaweavingRecipe(event, {
        output: 'artifacts:golden_hook',
        items: ['nameless_trinkets:glowing_dust', 'create:golden_sheet', 'minecraft:gold_block', 'kubejs:gravitic_sigil', 'minecraft:ender_pearl', 'minecraft:string', 'kubejs:gravitic_motive_core', 'kubejs:gravitic_channeling_vessel', 'kubejs:chaos_essence'],
        patterns: ['mna:diamond', 'mna:knot'],
        tier: 2
    })

    // Pulled to Hobbyist: air essence binds a slow-fall umbrella (was luminessence-tier enchanting)
    // Ward Lattice component fills the previously-blank slot: protection theme fits an umbrella.
    event.shaped(Item.of('artifacts:umbrella', 1), [
        'LAL', 'SIS', 'CTW'
    ], { 'L': 'minecraft:leather', 'A': '#kubejs:air_essences', 'S': 'minecraft:string', 'I': 'minecraft:iron_ingot', 'T': 'minecraft:stick', 'C': '#forge:tools/wire_cutters', 'W': 'kubejs:ichor_ward_lattice' }).damageIngredient(Ingredient.of('#forge:tools/wire_cutters'))

    addMnaManaweavingRecipe(event, {
        output: 'artifacts:antidote_vessel',
        items: ['nameless_trinkets:glowing_dust', 'minecraft:glass_bottle', 'kubejs:gravitic_sigil', 'minecraft:honey_bottle', 'minecraft:honey_bottle', 'kubejs:gravitic_channeling_vessel', 'kubejs:gravitic_ward_lattice', 'kubejs:chaos_essence'],
        patterns: ['mna:diamond', 'mna:knot'],
        tier: 2
    })

    addMnaManaweavingRecipe(event, {
        output: 'artifacts:pickaxe_heater',
        items: ['nameless_trinkets:glowing_dust', 'create:iron_sheet', 'minecraft:netherrack', 'minecraft:flint_and_steel', 'minecraft:iron_pickaxe', 'minecraft:coal', 'kubejs:gravitic_sigil', 'kubejs:gravitic_wizard_brain', 'kubejs:chaos_essence'],
        patterns: ['mna:diamond', 'mna:knot'],
        tier: 2
    })

    addMnaManaweavingRecipe(event, {
        output: 'artifacts:anglers_hat',
        items: ['nameless_trinkets:glowing_dust', 'minecraft:leather', 'minecraft:cod', 'minecraft:salmon', 'minecraft:lily_pad', 'kubejs:elementium_sigil', 'kubejs:elementium_wizard_brain', 'kubejs:elementium_channeling_vessel', 'kubejs:sacred_ambrosium_shard'],
        patterns: ['mna:diamond', 'mna:knot'],
        tier: 2
    })

    addMnaManaweavingRecipe(event, {
        output: 'artifacts:cowboy_hat',
        items: ['nameless_trinkets:glowing_dust', 'minecraft:leather', 'kubejs:elementium_sigil', 'minecraft:feather', 'minecraft:gold_ingot', 'minecraft:string', 'kubejs:elementium_motive_core', 'kubejs:elementium_ward_lattice', 'kubejs:sacred_ambrosium_shard'],
        patterns: ['mna:diamond', 'mna:knot'],
        tier: 2
    })

    addMnaManaweavingRecipe(event, {
        output: 'artifacts:novelty_drinking_hat',
        items: ['nameless_trinkets:glowing_dust', 'minecraft:leather', 'minecraft:glass_bottle', 'kubejs:elementium_sigil', 'minecraft:sugar', 'minecraft:cactus', 'kubejs:elementium_wizard_brain', 'kubejs:elementium_channeling_vessel', 'kubejs:sacred_ambrosium_shard'],
        patterns: ['mna:diamond', 'mna:knot'],
        tier: 2
    })

    addMnaManaweavingRecipe(event, {
        output: 'artifacts:plastic_drinking_hat',
        items: ['nameless_trinkets:glowing_dust', 'minecraft:leather', 'minecraft:glass_bottle', 'kubejs:elementium_sigil', 'minecraft:sugar', 'minecraft:string', 'kubejs:elementium_wizard_brain', 'kubejs:elementium_channeling_vessel', 'kubejs:sacred_ambrosium_shard'],
        patterns: ['mna:diamond', 'mna:knot'],
        tier: 2
    })

    addMnaManaweavingRecipe(event, {
        output: 'artifacts:superstitious_hat',
        items: ['nameless_trinkets:glowing_dust', 'minecraft:leather', 'minecraft:black_dye', 'kubejs:gravitic_sigil', 'minecraft:ender_pearl', 'minecraft:obsidian', 'kubejs:gravitic_ward_lattice', 'kubejs:chaos_essence'],
        patterns: ['mna:diamond', 'mna:knot'],
        tier: 2
    })

    addMnaManaweavingRecipe(event, {
        output: 'artifacts:villager_hat',
        items: ['nameless_trinkets:glowing_dust', 'minecraft:leather', 'minecraft:emerald', 'kubejs:elementium_sigil', 'minecraft:wheat', 'kubejs:elementium_wizard_brain', 'kubejs:elementium_ward_lattice', 'kubejs:sacred_ambrosium_shard'],
        patterns: ['mna:diamond', 'mna:knot'],
        tier: 2
    })

    addMnaManaweavingRecipe(event, {
        output: 'artifacts:whoopee_cushion',
        items: ['nameless_trinkets:glowing_dust', 'minecraft:leather', 'minecraft:slime_ball', 'minecraft:tnt', 'minecraft:gunpowder', 'kubejs:elementium_sigil', 'kubejs:elementium_wizard_brain', 'kubejs:elementium_motive_core', 'kubejs:sacred_ambrosium_shard'],
        patterns: ['mna:diamond', 'mna:knot'],
        tier: 2
    })

    addMnaManaweavingRecipe(event, {
        output: 'artifacts:cloud_in_a_bottle',
        items: ['nameless_trinkets:ultimate_dust', 'minecraft:glass_bottle', 'minecraft:white_wool', 'minecraft:white_wool', 'minecraft:feather', 'minecraft:feather', 'gtceu:holy_silver_dust', 'kubejs:animus_sigil', 'kubejs:animus_motive_core'],
        patterns: ['mna:split_triangle', 'mna:knot2'],
        tier: 3
    })

    // Reflavored to Blood Altar 2026-08-06: it's literally a heart (extra hearts) -- a
    // single-item life-force upgrade is the archetypal Blood Altar craft, not a pattern-weave.
    // Blood Altar's schema is single-input only, so the other 6 ingredients' value folds into
    // the LP syphon instead. (No event.remove needed -- the old recipe was KubeJS-authored via
    // addMnaManaweavingRecipe in this same file, not a vanilla recipe with a real mod ID; deleting
    // that call is enough, there is nothing pre-existing left to remove.)
    addBloodAltarRecipe(event, {
        input: 'minecraft:totem_of_undying',
        output: 'artifacts:crystal_heart',
        upgradeLevel: 3,
        syphon: LP.ALCHEMIST
    })

    addMnaManaweavingRecipe(event, {
        output: 'artifacts:helium_flamingo',
        items: ['nameless_trinkets:ultimate_dust', 'minecraft:glass_bottle', 'minecraft:feather', 'minecraft:feather', 'minecraft:phantom_membrane', 'minecraft:phantom_membrane', 'gtceu:holy_silver_dust', 'kubejs:animus_sigil', 'kubejs:animus_motive_core'],
        patterns: ['mna:split_triangle', 'mna:knot2'],
        tier: 3
    })

    addMnaManaweavingRecipe(event, {
        output: 'artifacts:night_vision_goggles',
        items: ['nameless_trinkets:ultimate_dust', 'minecraft:iron_ingot', 'kubejs:animus_sigil', 'minecraft:glass', 'minecraft:glass', 'minecraft:spider_eye', 'gtceu:holy_silver_dust', 'kubejs:animus_wizard_brain'],
        patterns: ['mna:split_triangle', 'mna:knot2'],
        tier: 3
    })

    addMnaManaweavingRecipe(event, {
        output: 'artifacts:obsidian_skull',
        items: ['nameless_trinkets:ultimate_dust', 'minecraft:obsidian', 'minecraft:obsidian', 'minecraft:obsidian', 'minecraft:obsidian', 'minecraft:magma_cream', 'gtceu:holy_silver_dust', 'kubejs:animus_sigil', 'kubejs:animus_ward_lattice'],
        patterns: ['mna:split_triangle', 'mna:knot2'],
        tier: 3
    })

    addMnaManaweavingRecipe(event, {
        output: 'artifacts:steadfast_spikes',
        items: ['nameless_trinkets:ultimate_dust', 'create:iron_sheet', 'minecraft:iron_block', 'minecraft:iron_block', 'minecraft:flint', 'minecraft:flint', 'gtceu:holy_silver_dust', 'kubejs:animus_sigil', 'kubejs:animus_ward_lattice'],
        patterns: ['mna:split_triangle', 'mna:knot2'],
        tier: 3
    })

    // Reflavored to Spirit Altar 2026-08-06: telekinetic pull is raw unshaped magic, arcane's
    // signature domain, not a woven pattern.
    addSpiritInfusion(event, {
        output: 'artifacts:universal_attractor',
        input: 'minecraft:iron_block',
        spirits: [{ type: 'arcane', count: 4 }],
        extraItems: [
            { item: 'minecraft:diamond', count: 2 },
            { item: 'minecraft:ender_pearl', count: 2 },
            { item: 'gtceu:holy_silver_dust' },
            { item: 'kubejs:animus_sigil' },
            { item: 'kubejs:animus_channeling_vessel' }
        ]
    })

    // Reflavored to Blood Altar 2026-08-06: life-drain is literally what the Blood Altar
    // represents. fermented_spider_eye (corruption) as the sole input, rest folds into LP.
    addBloodAltarRecipe(event, {
        input: 'minecraft:fermented_spider_eye',
        output: 'artifacts:vampiric_glove',
        upgradeLevel: 3,
        syphon: LP.ALCHEMIST
    })

    addMnaManaweavingRecipe(event, {
        output: 'artifacts:panic_necklace',
        items: ['nameless_trinkets:ultimate_dust', 'minecraft:golden_apple', 'minecraft:gold_block', 'minecraft:feather', 'minecraft:ender_pearl', 'minecraft:rabbit_foot', 'gtceu:holy_silver_dust', 'kubejs:animus_sigil', 'kubejs:animus_wizard_brain'],
        patterns: ['mna:split_triangle', 'mna:knot2'],
        tier: 3
    })

    addMnaManaweavingRecipe(event, {
        output: 'artifacts:chorus_totem',
        items: ['nameless_trinkets:ultimate_dust', 'minecraft:totem_of_undying', 'minecraft:chorus_fruit', 'minecraft:chorus_fruit', 'minecraft:ender_pearl', 'minecraft:ender_pearl', 'gtceu:prima_materia_ingot', 'kubejs:animus_sigil', 'kubejs:animus_channeling_vessel'],
        patterns: ['mna:split_triangle', 'mna:knot2'],
        tier: 3
    })

    addMnaManaweavingRecipe(event, {
        output: 'artifacts:everlasting_beef',
        items: ['nameless_trinkets:ultimate_dust', 'minecraft:golden_apple', 'minecraft:cooked_beef', 'minecraft:cooked_porkchop', 'minecraft:cooked_chicken', 'gtceu:prima_materia_ingot', 'kubejs:animus_sigil', 'kubejs:animus_wizard_brain'],
        patterns: ['mna:split_triangle', 'mna:knot2'],
        tier: 3
    })

})
