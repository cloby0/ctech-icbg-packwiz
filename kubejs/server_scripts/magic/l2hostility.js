ServerEvents.recipes(event => {

    ;['poseidite', 'totemic_gold', 'sculkium', 'shulkerate', 'eternium'].forEach(m =>
        event.remove({ output: `l2complements:${m}_ingot` }))

    ;[
        'charm_of_looting_1', 'charm_of_looting_2', 'charm_of_looting_3', 'charm_of_looting_4',
        'curse_of_envy', 'curse_of_gluttony', 'curse_of_greed', 'curse_of_lust',
        'curse_of_pride', 'curse_of_sloth', 'curse_of_wrath',
        'ring_of_ocean', 'ring_of_life', 'ring_of_divinity', 'ring_of_reflection',
        'ring_of_incarceration', 'ring_of_corrosion', 'ring_of_healing',
        'flaming_thorn', 'imagine_breaker', 'platinum_star', 'infinity_glove',
        'abyssal_thorn', 'divinity_cross', 'divinity_light', 'oddeyes_glasses',
        'triple_strip_cape', 'greed_of_nidhoggur', 'pocket_of_restoration', 'abrahadabra',
        'chaos_ingot', 'miracle_ingot', 'hostility_essence', 'miracle_powder',
        'witch_droplet', 'witch_wand', 'witch_charge', 'eternal_witch_charge',
        'hostility_detector', 'detector_glasses', 'book_of_reprint', 'book_of_omniscience',
        'hostility_orb', 'bottle_of_curse', 'bottle_of_sanity', 'booster_potion',
        'trait_adder_wand', 'target_select_wand'
    ].forEach(id => event.remove({ output: `l2hostility:${id}` }))

    ;[
        'fragile_warp_stone', 'reinforced_warp_stone', 'guardian_rune', 'piglin_rune',
        'totem_of_dream', 'totem_of_the_sea', 'force_field',
        'enchanted_totemic_carrot', 'enchanted_totemic_apple',
        'void_eye', 'space_shard', 'resonant_feather', 'sun_membrane', 'heirophant_green',
        'storm_core', 'warden_bone_shard', 'life_essence', 'cursed_droplet',
        'blackstone_core', 'explosion_shard', 'hard_ice', 'soul_flame', 'guardian_eye'
    ].forEach(id => event.remove({ output: `l2complements:${id}` }))


    // Dead ars_nouveau:source_gem across this whole file (never touched by the magic rework's
    // tier phases) swapped for this rework's own tier-signature dust, matched to each recipe's
    // own tier field: Alchemist->distilled_animus_dust, Thaumaturge->starforged_chimerite_dust,
    // Arcanist->gtceu:katharite_dust, Sage->kubejs:bound_astral_soul. Fixed 2026-07-28 alongside the
    // reported runic_forge/awakened_cumium_embryo error (same failure class: dead item breaks
    // GT .itemInputs()). Helper calls (addEnchantingRecipe/addImbuementRecipe/Source.TIER) left
    // as-is -- they still work (delegate to addEldrinAltarRecipe internally), full modernization
    // of this file is out of scope here.

    addMnaManaweavingRecipe(event, {
        output: 'l2complements:poseidite_ingot',
        items: ['minecraft:prismarine_shard', 'minecraft:iron_ingot', 'minecraft:iron_ingot', 'minecraft:iron_ingot', 'minecraft:iron_ingot', 'minecraft:prismarine_crystals', 'minecraft:prismarine_crystals', 'gtceu:distilled_animus_dust', 'gtceu:distilled_animus_dust'],
        patterns: ['mna:split_triangle', 'mna:knot2'],
        tier: 3
    })

    event.shaped('l2complements:wind_capture_bottle', [
        'SLS',
        'KGL',
        'SLS'
    ], { S: 'minecraft:string', L: 'minecraft:leather', G: 'minecraft:glass_bottle', K: '#forge:tools/knives' }).damageIngredient(Ingredient.of('#forge:tools/knives'))

    event.shaped('l2complements:soul_fire_charge', [
        ' S ',
        'SFS',
        ' T '
    ], { S: 'minecraft:soul_sand', F: 'minecraft:fire_charge', T: 'minecraft:soul_torch' })

    event.shaped('l2complements:black_fire_charge', [
        ' W ',
        'IFI',
        ' I '
    ], { W: 'minecraft:wither_rose', I: 'minecraft:ink_sac', F: 'minecraft:fire_charge' })

    event.shaped('l2complements:strong_fire_charge', [
        ' T ',
        'GFG',
        ' T '
    ], { T: 'minecraft:tnt', G: 'minecraft:gunpowder', F: 'minecraft:fire_charge' })

    event.shapeless('l2complements:fragile_warp_stone', ['minecraft:chorus_fruit', 'minecraft:ender_pearl'])

    // "S" (source_gem) swapped for magichem:admixture_witchcraft -- real MagiChem admixture,
    // literal thematic match for a witch-flavored bootstrap item.
    event.shaped('l2hostility:witch_droplet', [
        ' S ',
        'FBF',
        ' S '
    ], { S: 'magichem:admixture_witchcraft', F: 'minecraft:fermented_spider_eye', B: 'minecraft:glass_bottle' })

    event.shaped('l2hostility:witch_wand', [
        'D F',
        ' B ',
        '  S'
    ], { D: 'l2hostility:witch_droplet', B: 'minecraft:blaze_rod', S: 'magichem:admixture_witchcraft', F: '#forge:tools/files' }).damageIngredient(Ingredient.of('#forge:tools/files'))

    event.shaped('l2hostility:hostility_detector', [
        'DS ',
        'MCM',
        ' S '
    ], { S: 'gtceu:holy_silver_dust', M: '#gtceu:circuits/mv', C: 'minecraft:compass', D: '#forge:tools/screwdrivers' }).damageIngredient(Ingredient.of('#forge:tools/screwdrivers'))

    addMnaManaweavingRecipe(event, {
        output: 'l2hostility:charm_of_looting_1',
        items: ['nameless_trinkets:dubious_dust', 'minecraft:leather', 'minecraft:leather', 'gtceu:distilled_animus_dust', 'gtceu:distilled_animus_dust', 'gtceu:distilled_animus_dust', 'gtceu:distilled_animus_dust', 'minecraft:gold_ingot', 'minecraft:gold_ingot'],
        patterns: ['mna:split_triangle', 'mna:knot2'],
        tier: 3
    })

    // Reflavored to Spirit Altar 2026-08-06: a curse bottle should be soul-typed, not
    // LP-crafted.
    addSpiritInfusion(event, {
        output: 'l2hostility:bottle_of_curse',
        input: 'minecraft:glass_bottle',
        spirits: [{ type: 'wicked', count: 3 }],
        extraItems: [
            { item: 'l2hostility:witch_droplet', count: 2 },
            { item: 'gtceu:prima_materia_dust', count: 2 }
        ]
    })


    addImbuementRecipe(event, {
        input: 'minecraft:golden_apple',
        pedestalItems: [
            'minecraft:gold_ingot', 'minecraft:gold_ingot',
            'minecraft:gold_ingot', 'minecraft:gold_ingot',
            'minecraft:totem_of_undying',
            'gtceu:holy_silver_dust', 'gtceu:holy_silver_dust',
            'kubejs:starforged_ward_lattice'
        ],
        output: 'l2complements:totemic_gold_ingot',
        source: Source.THAUMATURGE,
    })

    event.shaped('l2complements:totemic_carrot', [
        'NGN',
        'GCG',
        'NGN'
    ], { N: 'l2complements:totemic_gold_nugget', G: 'minecraft:gold_nugget', C: 'minecraft:carrot' })

    event.shaped('l2complements:totemic_apple', [
        'NGN',
        'GAG',
        'NGN'
    ], { N: 'l2complements:totemic_gold_nugget', G: 'minecraft:gold_nugget', A: 'minecraft:apple' })

    addImbuementRecipe(event, {
        input: 'minecraft:blue_ice',
        pedestalItems: [
            'minecraft:powder_snow_bucket',
            'gtceu:holy_silver_dust', 'gtceu:holy_silver_dust',
            'gtceu:distilled_animus_dust', 'gtceu:distilled_animus_dust'
        ],
        output: 'l2complements:hard_ice',
        source: Source.ALCHEMIST,
    })

    addImbuementRecipe(event, {
        input: 'minecraft:soul_sand',
        pedestalItems: [
            'minecraft:ghast_tear', 'minecraft:ghast_tear',
            'gtceu:holy_silver_dust', 'kubejs:starforged_sigil',
            'kubejs:starforged_motive_core'
        ],
        output: 'l2complements:soul_flame',
        source: Source.THAUMATURGE
    })

    addMnaManaweavingRecipe(event, {
        output: 'l2complements:guardian_eye',
        items: ['minecraft:prismarine_crystals', 'minecraft:prismarine', 'minecraft:prismarine', 'minecraft:prismarine', 'minecraft:prismarine', 'gtceu:holy_silver_dust', 'kubejs:starforged_sigil', 'minecraft:sponge', 'kubejs:starforged_wizard_brain'],
        patterns: ['mna:split_triangle', 'mna:knot2'],
        tier: 3
    })

    addMnaManaweavingRecipe(event, {
        output: 'l2complements:guardian_rune',
        items: ['l2complements:guardian_eye', 'gtceu:starforged_chimerite_dust', 'gtceu:starforged_chimerite_dust', 'gtceu:starforged_chimerite_dust', 'gtceu:starforged_chimerite_dust', 'gtceu:holy_silver_dust', 'kubejs:starforged_sigil', 'kubejs:starforged_ward_lattice'],
        patterns: ['mna:split_triangle', 'mna:knot2'],
        tier: 3
    })

    addMnaManaweavingRecipe(event, {
        output: 'l2complements:piglin_rune',
        items: ['minecraft:gold_ingot', 'minecraft:piglin_banner_pattern', 'gtceu:starforged_chimerite_dust', 'gtceu:starforged_chimerite_dust', 'gtceu:starforged_chimerite_dust', 'gtceu:starforged_chimerite_dust', 'gtceu:holy_silver_dust', 'kubejs:starforged_sigil', 'kubejs:starforged_wizard_brain'],
        patterns: ['mna:split_triangle', 'mna:knot2'],
        tier: 3
    })

    // Reflavored to Spirit Altar 2026-08-06: "warp stone" is a space/reality-distortion item,
    // arcane's domain.
    addSpiritInfusion(event, {
        output: 'l2complements:reinforced_warp_stone',
        input: 'l2complements:fragile_warp_stone',
        spirits: [{ type: 'arcane', count: 4 }],
        extraItems: [
            { item: 'minecraft:obsidian', count: 4 },
            { item: 'gtceu:holy_silver_dust' },
            { item: 'kubejs:starforged_sigil' },
            { item: 'gtceu:starforged_chimerite_dust' },
            { item: 'kubejs:starforged_channeling_vessel' }
        ]
    })

    addMnaManaweavingRecipe(event, {
        output: 'l2complements:totem_of_the_sea',
        items: ['minecraft:totem_of_undying', 'minecraft:heart_of_the_sea', 'minecraft:nautilus_shell', 'minecraft:nautilus_shell', 'minecraft:nautilus_shell', 'minecraft:nautilus_shell', 'gtceu:holy_silver_dust', 'kubejs:starforged_sigil', 'kubejs:starforged_ward_lattice'],
        patterns: ['mna:split_triangle', 'mna:knot2'],
        tier: 3
    })

    addMnaManaweavingRecipe(event, {
        output: 'l2complements:enchanted_totemic_carrot',
        items: ['l2complements:totemic_carrot', 'l2complements:totemic_gold_ingot', 'l2complements:totemic_gold_ingot', 'minecraft:golden_carrot', 'minecraft:golden_carrot', 'kubejs:starforged_sigil', 'kubejs:starforged_ward_lattice'],
        patterns: ['mna:split_triangle', 'mna:knot2'],
        tier: 3
    })

    addMnaManaweavingRecipe(event, {
        output: 'l2complements:enchanted_totemic_apple',
        items: ['l2complements:totemic_apple', 'l2complements:totemic_gold_ingot', 'l2complements:totemic_gold_ingot', 'minecraft:enchanted_golden_apple', 'kubejs:starforged_sigil', 'kubejs:starforged_ward_lattice'],
        patterns: ['mna:split_triangle', 'mna:knot2'],
        tier: 3
    })


    addImbuementRecipe(event, {
        input: 'minecraft:feather',
        pedestalItems: [
            'gtceu:holy_silver_dust', 'gtceu:holy_silver_dust',
            'gtceu:holy_silver_dust', 'kubejs:starforged_sigil',
            'minecraft:rabbit_foot', 'minecraft:rabbit_foot',
            'kubejs:starforged_wizard_brain'
        ],
        output: 'l2hostility:curse_of_sloth',
        source: Source.THAUMATURGE,
    })

    addImbuementRecipe(event, {
        input: 'minecraft:golden_apple',
        pedestalItems: [
            'gtceu:holy_silver_dust', 'gtceu:holy_silver_dust',
            'gtceu:holy_silver_dust', 'kubejs:starforged_sigil',
            'minecraft:honey_bottle', 'minecraft:honey_bottle',
            'kubejs:starforged_wizard_brain'
        ],
        output: 'l2hostility:curse_of_gluttony',
        source: Source.THAUMATURGE,
    })

    // Reflavored to Spirit Altar 2026-08-06: healing/restoration reads as a holy blessing, not
    // a woven pattern.
    addSpiritInfusion(event, {
        output: 'l2hostility:ring_of_healing',
        input: 'minecraft:golden_apple',
        spirits: [{ type: 'sacred', count: 4 }],
        extraItems: [
            { item: 'minecraft:glistering_melon_slice' },
            { item: 'gtceu:holy_silver_dust', count: 3 },
            { item: 'kubejs:starforged_sigil' },
            { item: 'gtceu:starforged_chimerite_dust', count: 2 },
            { item: 'kubejs:starforged_channeling_vessel' }
        ]
    })

    // Reflavored to Spirit Altar 2026-08-06: nautilus/heart-of-the-sea ring is textbook aqueous.
    addSpiritInfusion(event, {
        output: 'l2hostility:ring_of_ocean',
        input: 'minecraft:heart_of_the_sea',
        spirits: [{ type: 'aqueous', count: 4 }, { type: 'sacred', count: 1 }],
        extraItems: [
            { item: 'minecraft:nautilus_shell' },
            { item: 'gtceu:holy_silver_dust', count: 3 },
            { item: 'kubejs:starforged_sigil' },
            { item: 'gtceu:starforged_chimerite_dust', count: 2 },
            { item: 'kubejs:starforged_channeling_vessel' }
        ]
    })

    addMnaManaweavingRecipe(event, {
        output: 'l2hostility:bottle_of_sanity',
        items: ['l2hostility:bottle_of_curse', 'gtceu:holy_silver_dust', 'gtceu:holy_silver_dust', 'gtceu:holy_silver_dust', 'kubejs:starforged_sigil', 'gtceu:starforged_chimerite_dust', 'gtceu:starforged_chimerite_dust', 'gtceu:starforged_chimerite_dust', 'kubejs:starforged_wizard_brain'],
        patterns: ['mna:split_triangle', 'mna:knot2'],
        tier: 3
    })

    event.shaped('l2hostility:booster_potion', [
        ' H ',
        'HWH',
        ' H '
    ], { H: 'gtceu:holy_silver_dust', W: 'l2hostility:witch_droplet' })


    event.recipes.gtceu.chemical_reactor('l2hostility/hostility_essence')
        .itemInputs('4x l2hostility:witch_droplet', '2x gtceu:holy_silver_dust')
        .itemOutputs('1x l2hostility:hostility_essence')
        .duration(300)
        .perTick(true)
        .input(ManaCap, Math.round(ManaPool.JOURNEYMAN / 300))
        .perTick(false)
        .EUt(GTValues.VA[GTValues.HV])

    event.shaped('l2hostility:witch_charge', [
        ' B ',
        'WEW',
        ' W '
    ], { B: 'minecraft:blaze_rod', W: 'l2hostility:witch_droplet', E: 'l2hostility:hostility_essence' })

    addMnaManaweavingRecipe(event, {
        output: 'l2hostility:eternal_witch_charge',
        items: ['l2hostility:witch_charge', 'l2hostility:hostility_essence', 'l2hostility:hostility_essence', 'l2hostility:hostility_essence', 'l2hostility:hostility_essence', 'gtceu:holy_silver_dust', 'kubejs:starforged_sigil', 'kubejs:starforged_motive_core'],
        patterns: ['mna:split_triangle', 'mna:knot2'],
        tier: 3
    })

    addMnaManaweavingRecipe(event, {
        output: 'l2hostility:charm_of_looting_2',
        items: ['nameless_trinkets:glowing_dust', 'l2hostility:hostility_essence', 'l2hostility:hostility_essence', 'gtceu:holy_silver_dust', 'gtceu:holy_silver_dust', 'gtceu:holy_silver_dust', 'kubejs:starforged_sigil', 'gtceu:starforged_chimerite_dust', 'kubejs:starforged_wizard_brain'],
        patterns: ['mna:split_triangle', 'mna:knot2'],
        tier: 3
    })

    addMnaManaweavingRecipe(event, {
        output: 'l2hostility:detector_glasses',
        items: ['l2hostility:hostility_detector', 'minecraft:spectral_arrow', 'minecraft:spectral_arrow', 'gtceu:holy_silver_dust', 'gtceu:holy_silver_dust', 'gtceu:holy_silver_dust', 'kubejs:starforged_sigil', 'l2hostility:hostility_essence', 'kubejs:starforged_wizard_brain'],
        patterns: ['mna:split_triangle', 'mna:knot2'],
        tier: 3
    })

    event.shaped('l2hostility:book_of_reprint', [
        'KHG',
        'HBH',
        'GHG'
    ], { G: 'minecraft:gold_ingot', H: 'gtceu:holy_silver_dust', B: 'minecraft:book', K: '#forge:tools/knives' }).damageIngredient(Ingredient.of('#forge:tools/knives'))

    addMnaManaweavingRecipe(event, {
        output: 'l2hostility:book_of_omniscience',
        items: ['minecraft:book', 'gtceu:holy_silver_dust', 'gtceu:holy_silver_dust', 'gtceu:holy_silver_dust', 'kubejs:kathar_sigil', 'l2hostility:hostility_essence', 'l2hostility:hostility_essence', 'gtceu:katharite_dust', 'kubejs:kathar_wizard_brain'],
        patterns: ['mna:star', 'mna:hourglass'],
        tier: 4
    })


    addImbuementRecipe(event, {
        input: 'minecraft:sculk',
        pedestalItems: [
            'minecraft:echo_shard', 'minecraft:echo_shard',
            'minecraft:echo_shard', 'minecraft:echo_shard',
            'gtceu:prima_materia_dust', 'gtceu:prima_materia_dust',
            'gtceu:katharite_dust', 'gtceu:katharite_dust'
        ],
        output: 'l2complements:sculkium_ingot',
        source: Source.ARCANIST,
    })

    addImbuementRecipe(event, {
        input: 'l2complements:sculkium_ingot',
        pedestalItems: [
            'minecraft:echo_shard', 'minecraft:echo_shard',
            'minecraft:echo_shard', 'minecraft:echo_shard',
            'gtceu:prima_materia_dust', 'kubejs:kathar_sigil',
            'kubejs:kathar_wizard_brain'
        ],
        output: 'l2complements:warden_bone_shard',
        source: Source.ARCANIST,
    })

    addImbuementRecipe(event, {
        input: 'minecraft:phantom_membrane',
        pedestalItems: [
            'minecraft:lightning_rod',
            'gtceu:prima_materia_dust', 'gtceu:prima_materia_dust',
            'gtceu:prima_materia_dust', 'kubejs:kathar_sigil',
            'minecraft:glass',
            'kubejs:kathar_motive_core'
        ],
        output: 'l2complements:storm_core',
        source: Source.ARCANIST,
    })

    addImbuementRecipe(event, {
        input: 'minecraft:glistering_melon_slice',
        pedestalItems: [
            'gtceu:prima_materia_dust', 'gtceu:prima_materia_dust',
            'gtceu:prima_materia_dust', 'gtceu:prima_materia_dust',
            'minecraft:totem_of_undying',
            'kubejs:kathar_channeling_vessel'
        ],
        output: 'l2complements:life_essence',
        source: Source.ARCANIST,
    })

    addImbuementRecipe(event, {
        input: 'minecraft:fermented_spider_eye',
        pedestalItems: [
            'gtceu:prima_materia_dust', 'gtceu:prima_materia_dust',
            'gtceu:prima_materia_dust', 'kubejs:starforged_sigil',
            'minecraft:spider_eye', 'minecraft:spider_eye',
            'kubejs:starforged_wizard_brain'
        ],
        output: 'l2complements:cursed_droplet',
        source: Source.THAUMATURGE,
    })

    addMnaManaweavingRecipe(event, {
        output: 'l2complements:void_eye',
        items: ['minecraft:ender_eye', 'minecraft:obsidian', 'minecraft:obsidian', 'minecraft:obsidian', 'minecraft:obsidian', 'gtceu:prima_materia_dust', 'kubejs:kathar_sigil', 'gtceu:katharite_dust', 'kubejs:kathar_wizard_brain'],
        patterns: ['mna:star', 'mna:hourglass'],
        tier: 4
    })

    addImbuementRecipe(event, {
        input: 'minecraft:blackstone',
        pedestalItems: [
            'l2complements:piglin_rune',
            'gtceu:prima_materia_dust', 'gtceu:prima_materia_dust',
            'gtceu:prima_materia_dust', 'kubejs:kathar_sigil',
            'l2complements:sculkium_ingot',
            'kubejs:kathar_motive_core'
        ],
        output: 'l2complements:blackstone_core',
        source: Source.ARCANIST,
    })

    addImbuementRecipe(event, {
        input: 'minecraft:crying_obsidian',
        pedestalItems: [
            'minecraft:tnt', 'minecraft:tnt',
            'gtceu:prima_materia_dust', 'gtceu:prima_materia_dust',
            'gtceu:prima_materia_dust', 'kubejs:kathar_sigil',
            'kubejs:kathar_motive_core'
        ],
        output: 'l2complements:explosion_shard',
        source: Source.ARCANIST,
    })

    event.recipes.gtceu.alloy_smelter('l2hostility/chaos_ingot')
        .itemInputs('1x l2hostility:hostility_essence', '4x gtceu:prima_materia_dust')
        .itemOutputs('1x l2hostility:chaos_ingot')
        .duration(200)
        .EUt(GTValues.VA[GTValues.EV])

    addMnaManaweavingRecipe(event, {
        output: 'l2hostility:charm_of_looting_3',
        items: ['nameless_trinkets:ultimate_dust', 'l2hostility:chaos_ingot', 'l2hostility:chaos_ingot', 'gtceu:prima_materia_dust', 'gtceu:prima_materia_dust', 'gtceu:prima_materia_dust', 'kubejs:kathar_sigil', 'gtceu:katharite_dust', 'kubejs:kathar_wizard_brain'],
        patterns: ['mna:star', 'mna:hourglass'],
        tier: 4
    })

    addMnaManaweavingRecipe(event, {
        output: 'l2hostility:curse_of_wrath',
        items: ['l2hostility:chaos_ingot', 'gtceu:prima_materia_dust', 'gtceu:prima_materia_dust', 'gtceu:prima_materia_dust', 'kubejs:kathar_sigil', 'minecraft:diamond_sword', 'minecraft:diamond_sword', 'kubejs:kathar_wizard_brain'],
        patterns: ['mna:star', 'mna:hourglass'],
        tier: 4
    })

    addMnaManaweavingRecipe(event, {
        output: 'l2hostility:curse_of_lust',
        items: ['l2hostility:chaos_ingot', 'gtceu:prima_materia_dust', 'gtceu:prima_materia_dust', 'gtceu:prima_materia_dust', 'kubejs:kathar_sigil', 'minecraft:rotten_flesh', 'minecraft:rotten_flesh', 'minecraft:netherite_ingot', 'kubejs:kathar_wizard_brain'],
        patterns: ['mna:star', 'mna:hourglass'],
        tier: 4
    })

    addMnaManaweavingRecipe(event, {
        output: 'l2hostility:curse_of_greed',
        items: ['l2hostility:chaos_ingot', 'gtceu:prima_materia_dust', 'gtceu:prima_materia_dust', 'gtceu:prima_materia_dust', 'kubejs:kathar_sigil', 'minecraft:gold_block', 'minecraft:gold_block', 'kubejs:kathar_wizard_brain'],
        patterns: ['mna:star', 'mna:hourglass'],
        tier: 4
    })

    addMnaManaweavingRecipe(event, {
        output: 'l2hostility:ring_of_life',
        items: ['minecraft:totem_of_undying', 'l2hostility:chaos_ingot', 'l2hostility:chaos_ingot', 'gtceu:prima_materia_dust', 'gtceu:prima_materia_dust', 'gtceu:prima_materia_dust', 'kubejs:kathar_sigil', 'gtceu:katharite_dust', 'kubejs:kathar_channeling_vessel'],
        patterns: ['mna:star', 'mna:hourglass'],
        tier: 4
    })

    addMnaManaweavingRecipe(event, {
        output: 'l2hostility:ring_of_incarceration',
        items: ['l2complements:sculkium_ingot', 'l2hostility:chaos_ingot', 'l2hostility:chaos_ingot', 'gtceu:prima_materia_dust', 'gtceu:prima_materia_dust', 'gtceu:prima_materia_dust', 'kubejs:kathar_sigil', 'gtceu:katharite_dust', 'kubejs:kathar_ward_lattice'],
        patterns: ['mna:star', 'mna:hourglass'],
        tier: 4
    })

    addMnaManaweavingRecipe(event, {
        output: 'l2hostility:ring_of_corrosion',
        items: ['minecraft:anvil', 'l2hostility:chaos_ingot', 'l2hostility:chaos_ingot', 'gtceu:prima_materia_dust', 'gtceu:prima_materia_dust', 'gtceu:prima_materia_dust', 'kubejs:kathar_sigil', 'gtceu:katharite_dust', 'kubejs:kathar_motive_core'],
        patterns: ['mna:star', 'mna:hourglass'],
        tier: 4
    })

    // Reflavored to Spirit Altar 2026-08-06: blaze_rod + soul campfire is straightforwardly
    // infernal.
    addSpiritInfusion(event, {
        output: 'l2hostility:flaming_thorn',
        input: 'minecraft:blaze_rod',
        spirits: [{ type: 'infernal', count: 4 }, { type: 'wicked', count: 1 }],
        extraItems: [
            { item: 'l2hostility:chaos_ingot', count: 2 },
            { item: 'gtceu:prima_materia_dust', count: 3 },
            { item: 'kubejs:kathar_sigil' },
            { item: 'minecraft:soul_campfire' },
            { item: 'kubejs:kathar_motive_core' }
        ]
    })

    addMnaManaweavingRecipe(event, {
        output: 'l2hostility:platinum_star',
        items: ['minecraft:nether_star', 'l2hostility:chaos_ingot', 'l2hostility:chaos_ingot', 'l2hostility:chaos_ingot', 'l2hostility:chaos_ingot', 'gtceu:prima_materia_dust', 'gtceu:prima_materia_dust', 'kubejs:empyrean_sigil', 'kubejs:empyrean_motive_core'],
        patterns: ['mna:star', 'mna:hourglass'],
        tier: 4
    })

    addMnaManaweavingRecipe(event, {
        output: 'l2hostility:hostility_orb',
        items: ['l2hostility:chaos_ingot', 'gtceu:prima_materia_dust', 'gtceu:prima_materia_dust', 'gtceu:prima_materia_dust', 'gtceu:prima_materia_dust', 'minecraft:ender_pearl', 'minecraft:ender_pearl', 'minecraft:ender_pearl', 'kubejs:kathar_sigil'],
        patterns: ['mna:star', 'mna:hourglass'],
        tier: 4
    })


    addMnaManaweavingRecipe(event, {
        output: 'l2complements:shulkerate_ingot',
        items: ['minecraft:shulker_shell', 'minecraft:end_stone', 'minecraft:end_stone', 'botania:manasteel_ingot', 'botania:manasteel_ingot', 'botania:manasteel_ingot', 'botania:manasteel_ingot', 'kubejs:bound_astral_soul', 'kubejs:bound_astral_soul'],
        patterns: ['mna:star', 'mna:hourglass'],
        tier: 4
    })

    addRunicAltarRecipe(event, {
        output: 'l2complements:totem_of_dream',
        ingredients: [
            { item: 'minecraft:totem_of_undying' },
            { item: 'botania:manasteel_ingot' }, { item: 'botania:manasteel_ingot' },
            { item: 'botania:manasteel_ingot' }, { item: 'botania:manasteel_ingot' },
            { item: 'l2complements:totem_of_the_sea' },
            { item: 'l2complements:life_essence' }, { item: 'l2complements:life_essence' }
        ],
        mana: RunicAltar.ASCENDANT
    })

    addMnaManaweavingRecipe(event, {
        output: 'l2complements:resonant_feather',
        items: ['minecraft:feather', 'botania:manasteel_ingot', 'botania:manasteel_ingot', 'botania:manasteel_ingot', 'kubejs:empyrean_sigil', 'minecraft:echo_shard', 'minecraft:echo_shard', 'minecraft:echo_shard', 'kubejs:empyrean_channeling_vessel'],
        patterns: ['mna:star', 'mna:hourglass'],
        tier: 4
    })

    addMnaManaweavingRecipe(event, {
        output: 'l2complements:sun_membrane',
        items: ['minecraft:phantom_membrane', 'botania:manasteel_ingot', 'botania:manasteel_ingot', 'botania:manasteel_ingot', 'kubejs:empyrean_sigil', 'l2complements:soul_flame', 'l2complements:soul_flame', 'l2complements:storm_core', 'kubejs:empyrean_channeling_vessel'],
        patterns: ['mna:star', 'mna:hourglass'],
        tier: 4
    })

    addRunicAltarRecipe(event, {
        output: 'l2complements:force_field',
        ingredients: [
            { item: 'minecraft:nether_star' },
            { item: 'botania:manasteel_ingot' }, { item: 'botania:manasteel_ingot' },
            { item: 'botania:manasteel_ingot' }, { item: 'botania:manasteel_ingot' },
            { item: 'minecraft:wither_skeleton_skull' }, { item: 'minecraft:wither_skeleton_skull' },
            { item: 'l2hostility:chaos_ingot' }, { item: 'l2hostility:chaos_ingot' }
        ],
        mana: RunicAltar.ASCENDANT
    })

    event.recipes.gtceu.assembler('l2hostility/miracle_ingot')
        .itemInputs('2x l2hostility:chaos_ingot', '2x botania:manasteel_ingot', '4x gtceu:prima_materia_dust')
        .itemOutputs('1x l2hostility:miracle_ingot')
        .duration(400)
        .perTick(true)
        .input(ManaCap, Math.round(ManaPool.ALCHEMIST / 400))
        .perTick(false)
        .EUt(GTValues.VA[GTValues.IV])
        .circuit(1)

    event.recipes.gtceu.macerator('l2hostility/miracle_powder')
        .itemInputs('1x l2hostility:miracle_ingot')
        .itemOutputs('4x l2hostility:miracle_powder')
        .duration(200)
        .EUt(GTValues.VA[GTValues.IV])

    addMnaManaweavingRecipe(event, {
        output: 'l2hostility:charm_of_looting_4',
        items: ['nameless_trinkets:ultimate_dust', 'l2hostility:miracle_ingot', 'l2hostility:miracle_ingot', 'botania:manasteel_ingot', 'botania:manasteel_ingot', 'botania:manasteel_ingot', 'kubejs:empyrean_sigil', 'kubejs:bound_astral_soul', 'kubejs:empyrean_wizard_brain'],
        patterns: ['mna:star', 'mna:hourglass'],
        tier: 4
    })

    // Reflavored to Spirit Altar 2026-08-06: part of the Seven Deadly Sins set; a curse is soul
    // corruption, not weaving.
    addSpiritInfusion(event, {
        output: 'l2hostility:curse_of_envy',
        input: 'l2complements:resonant_feather',
        spirits: [{ type: 'wicked', count: 5 }],
        extraItems: [
            { item: 'l2hostility:miracle_ingot', count: 2 },
            { item: 'botania:manasteel_ingot', count: 3 },
            { item: 'kubejs:empyrean_sigil' },
            { item: 'kubejs:bound_astral_soul' },
            { item: 'kubejs:empyrean_wizard_brain' }
        ]
    })

    addMnaManaweavingRecipe(event, {
        output: 'l2hostility:curse_of_pride',
        items: ['minecraft:netherite_ingot', 'l2hostility:miracle_ingot', 'l2hostility:miracle_ingot', 'botania:manasteel_ingot', 'botania:manasteel_ingot', 'kubejs:empyrean_sigil', 'minecraft:netherite_ingot', 'minecraft:diamond', 'kubejs:empyrean_wizard_brain'],
        patterns: ['mna:star', 'mna:hourglass'],
        tier: 4
    })

    addMnaManaweavingRecipe(event, {
        output: 'l2hostility:ring_of_divinity',
        items: ['minecraft:nether_star', 'l2hostility:miracle_ingot', 'l2hostility:miracle_ingot', 'botania:manasteel_ingot', 'botania:manasteel_ingot', 'botania:manasteel_ingot', 'kubejs:empyrean_sigil', 'gtceu:holy_silver_dust', 'kubejs:empyrean_ward_lattice'],
        patterns: ['mna:star', 'mna:hourglass'],
        tier: 4
    })

    addMnaManaweavingRecipe(event, {
        output: 'l2hostility:ring_of_reflection',
        items: ['minecraft:spyglass', 'l2hostility:miracle_ingot', 'l2hostility:miracle_ingot', 'botania:manasteel_ingot', 'botania:manasteel_ingot', 'botania:manasteel_ingot', 'kubejs:empyrean_sigil', 'kubejs:bound_astral_soul', 'kubejs:empyrean_ward_lattice'],
        patterns: ['mna:star', 'mna:hourglass'],
        tier: 4
    })

    addMnaManaweavingRecipe(event, {
        output: 'l2hostility:greed_of_nidhoggur',
        items: ['l2hostility:chaos_ingot', 'l2hostility:miracle_ingot', 'l2hostility:miracle_ingot', 'botania:manasteel_ingot', 'botania:manasteel_ingot', 'botania:manasteel_ingot', 'kubejs:empyrean_sigil', 'minecraft:gold_block', 'kubejs:empyrean_motive_core'],
        patterns: ['mna:star', 'mna:hourglass'],
        tier: 4
    })

    // Reflavored to Spirit Altar 2026-08-06: warden_bone_shard/echo_shard is deep-dark/Warden
    // lore, the pack's clearest eldritch signature.
    addSpiritInfusion(event, {
        output: 'l2hostility:abyssal_thorn',
        input: 'l2complements:warden_bone_shard',
        spirits: [{ type: 'eldritch', count: 3 }, { type: 'wicked', count: 1 }],
        extraItems: [
            { item: 'l2hostility:miracle_ingot', count: 2 },
            { item: 'botania:manasteel_ingot', count: 3 },
            { item: 'kubejs:empyrean_sigil' },
            { item: 'minecraft:echo_shard' },
            { item: 'kubejs:empyrean_motive_core' }
        ]
    })

    addMnaManaweavingRecipe(event, {
        output: 'l2hostility:oddeyes_glasses',
        items: ['l2hostility:detector_glasses', 'l2hostility:miracle_ingot', 'l2hostility:miracle_ingot', 'botania:manasteel_ingot', 'botania:manasteel_ingot', 'botania:manasteel_ingot', 'kubejs:empyrean_sigil', 'minecraft:amethyst_shard', 'kubejs:empyrean_wizard_brain'],
        patterns: ['mna:star', 'mna:hourglass'],
        tier: 4
    })

    addMnaManaweavingRecipe(event, {
        output: 'l2hostility:pocket_of_restoration',
        items: ['minecraft:ender_chest', 'l2hostility:miracle_ingot', 'l2hostility:miracle_ingot', 'botania:manasteel_ingot', 'botania:manasteel_ingot', 'botania:manasteel_ingot', 'kubejs:empyrean_sigil', 'kubejs:bound_astral_soul', 'kubejs:empyrean_channeling_vessel'],
        patterns: ['mna:star', 'mna:hourglass'],
        tier: 4
    })


    addRunicAltarRecipe(event, {
        output: 'l2complements:eternium_ingot',
        ingredients: [
            { item: 'l2complements:shulkerate_ingot' },
            { item: 'botania:terrasteel_ingot' }, { item: 'botania:terrasteel_ingot' },
            { item: 'botania:manasteel_ingot' }, { item: 'botania:manasteel_ingot' },
            { item: 'botania:manasteel_ingot' }, { item: 'botania:manasteel_ingot' },
            { item: 'kubejs:bound_astral_soul' }, { item: 'kubejs:bound_astral_soul' }
        ],
        mana: RunicAltar.ASCENDANT
    })

    addMnaManaweavingRecipe(event, {
        output: 'l2complements:heirophant_green',
        items: ['botania:terrasteel_ingot', 'botania:manasteel_ingot', 'kubejs:empyrean_sigil', 'l2complements:soul_flame', 'l2complements:soul_flame', 'l2complements:sun_membrane', 'l2complements:sun_membrane', 'minecraft:fire_charge', 'kubejs:empyrean_channeling_vessel'],
        patterns: ['mna:star', 'mna:hourglass'],
        tier: 4
    })

    // Reflavored to Spirit Altar 2026-08-06: name and holy_silver_block are explicitly holy.
    addSpiritInfusion(event, {
        output: 'l2hostility:divinity_cross',
        input: 'botania:terrasteel_ingot',
        spirits: [{ type: 'sacred', count: 5 }, { type: 'arcane', count: 1 }],
        extraItems: [
            { item: 'gtceu:holy_silver_block', count: 2 },
            { item: 'l2hostility:ring_of_divinity', count: 2 },
            { item: 'kubejs:bound_astral_soul', count: 2 },
            { item: 'kubejs:empyrean_sigil' },
            { item: 'kubejs:empyrean_ward_lattice' }
        ]
    })

    addMnaManaweavingRecipe(event, {
        output: 'l2hostility:divinity_light',
        items: ['botania:terrasteel_ingot', 'minecraft:nether_star', 'l2hostility:divinity_cross', 'kubejs:bound_astral_soul', 'kubejs:bound_astral_soul', 'kubejs:bound_astral_soul', 'kubejs:empyrean_sigil', 'kubejs:empyrean_ward_lattice'],
        patterns: ['mna:star', 'mna:hourglass'],
        tier: 4
    })

    addMnaManaweavingRecipe(event, {
        output: 'l2hostility:triple_strip_cape',
        items: ['botania:terrasteel_ingot', 'minecraft:leather', 'minecraft:leather', 'minecraft:leather', 'minecraft:leather', 'l2complements:eternium_ingot', 'kubejs:bound_astral_soul', 'kubejs:empyrean_sigil', 'kubejs:empyrean_ward_lattice'],
        patterns: ['mna:star', 'mna:hourglass'],
        tier: 4
    })

    addMnaManaweavingRecipe(event, {
        output: 'l2hostility:trait_adder_wand',
        items: ['botania:terrasteel_ingot', 'minecraft:stick', 'minecraft:stick', 'minecraft:stick', 'minecraft:stick', 'l2hostility:hostility_essence', 'l2hostility:hostility_essence', 'kubejs:empyrean_sigil', 'kubejs:empyrean_wizard_brain'],
        patterns: ['mna:star', 'mna:hourglass'],
        tier: 4
    })

    addMnaManaweavingRecipe(event, {
        output: 'l2hostility:target_select_wand',
        items: ['botania:terrasteel_ingot', 'minecraft:stick', 'minecraft:stick', 'minecraft:stick', 'minecraft:stick', 'l2hostility:hostility_essence', 'kubejs:empyrean_sigil', 'l2hostility:chaos_ingot', 'kubejs:empyrean_wizard_brain'],
        patterns: ['mna:star', 'mna:hourglass'],
        tier: 4
    })


    addMnaManaweavingRecipe(event, {
        output: 'l2hostility:abrahadabra',
        items: ['l2hostility:miracle_ingot', 'l2complements:eternium_ingot', 'l2complements:eternium_ingot', 'l2complements:shulkerate_ingot', 'l2complements:shulkerate_ingot', 'botania:manasteel_ingot', 'botania:manasteel_ingot', '#gtceu:circuits/iv', '#gtceu:circuits/iv'],
        patterns: ['mna:infinity', 'mna:inverted_split_triangle'],
        tier: 5
    })

    addMnaManaweavingRecipe(event, {
        output: 'l2hostility:imagine_breaker',
        items: ['l2hostility:miracle_ingot', 'botania:manasteel_ingot', 'botania:manasteel_ingot', 'gtceu:mithril_plate', 'gtceu:mithril_plate', 'l2complements:void_eye', 'l2complements:void_eye', '#gtceu:circuits/iv', '#gtceu:circuits/iv'],
        patterns: ['mna:infinity', 'mna:inverted_split_triangle'],
        tier: 5
    })

    addMnaManaweavingRecipe(event, {
        output: 'l2hostility:infinity_glove',
        items: ['l2hostility:miracle_ingot', 'botania:terrasteel_ingot', 'botania:terrasteel_ingot', 'l2complements:eternium_ingot', 'l2complements:eternium_ingot', 'l2hostility:ring_of_divinity', 'l2hostility:ring_of_reflection', '#gtceu:circuits/luv', '#gtceu:circuits/luv'],
        patterns: ['mna:infinity', 'mna:inverted_split_triangle'],
        tier: 5
    })

})
