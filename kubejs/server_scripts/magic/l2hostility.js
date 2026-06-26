ServerEvents.recipes(event => {

    // ═══════════════════════════════════════════════════════════════
    // REMOVALS — strip vanilla recipes before adding gated ones
    // ═══════════════════════════════════════════════════════════════

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

    // ═══════════════════════════════════════════════════════════════
    // JOURNEYMAN (MV) — Source Gem tier
    // ═══════════════════════════════════════════════════════════════

    // Poseidite Ingot: ocean/water magic
    addEnchantingRecipe(event, {
        reagent: 'minecraft:prismarine_shard',
        pedestalItems: [
            'minecraft:iron_ingot', 'minecraft:iron_ingot', 'minecraft:iron_ingot', 'minecraft:iron_ingot',
            'minecraft:prismarine_crystals', 'minecraft:prismarine_crystals',
            'ars_nouveau:source_gem', 'ars_nouveau:source_gem'
        ],
        output: 'l2complements:poseidite_ingot',
        sourceCost: 4000
    })

    // Utility items — shaped, no magic required
    event.shaped('l2complements:wind_capture_bottle', [
        'SLS',
        'LGL',
        'SLS'
    ], { S: 'minecraft:string', L: 'minecraft:leather', G: 'minecraft:glass_bottle' })

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

    // Witch Droplet — core L2Hostility ingredient
    event.shaped('l2hostility:witch_droplet', [
        ' S ',
        'FBF',
        ' S '
    ], { S: 'ars_nouveau:source_gem', F: 'minecraft:fermented_spider_eye', B: 'minecraft:glass_bottle' })

    // Witch Wand
    event.shaped('l2hostility:witch_wand', [
        'D  ',
        ' B ',
        '  S'
    ], { D: 'l2hostility:witch_droplet', B: 'minecraft:blaze_rod', S: 'ars_nouveau:source_gem' })

    // Hostility Detector (MV circuits = tech gate at Journeyman)
    event.shaped('l2hostility:hostility_detector', [
        ' S ',
        'MCM',
        ' S '
    ], { S: 'ars_nouveau:source_gem', M: '#gtceu:circuits/mv', C: 'minecraft:compass' })

    // Unpolished Looting Charm (Tier 1)
    addEnchantingRecipe(event, {
        reagent: 'nameless_trinkets:dubious_dust',
        pedestalItems: [
            'minecraft:leather', 'minecraft:leather',
            'ars_nouveau:source_gem', 'ars_nouveau:source_gem',
            'ars_nouveau:source_gem', 'ars_nouveau:source_gem',
            'minecraft:gold_ingot', 'minecraft:gold_ingot'
        ],
        output: 'l2hostility:charm_of_looting_1',
        sourceCost: 3000
    })

    // Bottle of Curse
    addImbuementRecipe(event, {
        input: 'minecraft:glass_bottle',
        pedestalItems: [
            'l2hostility:witch_droplet', 'l2hostility:witch_droplet',
            'ars_nouveau:source_gem', 'ars_nouveau:source_gem'
        ],
        output: 'l2hostility:bottle_of_curse',
        source: 2000
    })

    // ═══════════════════════════════════════════════════════════════
    // INITIATE (HV) — Holy Silver tier
    // ═══════════════════════════════════════════════════════════════

    // Totemic Gold Ingot: sacred gold, heals on use/hit
    addImbuementRecipe(event, {
        input: 'minecraft:golden_apple',
        pedestalItems: [
            'minecraft:gold_ingot', 'minecraft:gold_ingot',
            'minecraft:gold_ingot', 'minecraft:gold_ingot',
            'minecraft:totem_of_undying',
            'gtceu:holy_silver_dust', 'gtceu:holy_silver_dust'
        ],
        output: 'l2complements:totemic_gold_ingot',
        source: 8000,
    })

    // Totemic foods (need nuggets from totemic_gold_ingot)
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

    // Hard Ice: unliving ice
    addImbuementRecipe(event, {
        input: 'minecraft:blue_ice',
        pedestalItems: [
            'minecraft:powder_snow_bucket',
            'gtceu:holy_silver_dust', 'gtceu:holy_silver_dust',
            'ars_nouveau:source_gem', 'ars_nouveau:source_gem'
        ],
        output: 'l2complements:hard_ice',
        source: 5000,
    })

    // Soul Flame
    addImbuementRecipe(event, {
        input: 'minecraft:soul_sand',
        pedestalItems: [
            'minecraft:ghast_tear', 'minecraft:ghast_tear',
            'gtceu:holy_silver_dust', 'gtceu:holy_silver_dust'
        ],
        output: 'l2complements:soul_flame',
        source: 6000
    })

    // Guardian Eye: wizard fantasy craft (no lightning trick required)
    addEnchantingRecipe(event, {
        reagent: 'minecraft:prismarine_crystals',
        pedestalItems: [
            'minecraft:prismarine', 'minecraft:prismarine',
            'minecraft:prismarine', 'minecraft:prismarine',
            'gtceu:holy_silver_dust', 'gtceu:holy_silver_dust',
            'minecraft:sponge', 'minecraft:sponge'
        ],
        output: 'l2complements:guardian_eye',
        sourceCost: 8000
    })

    // Guardian Rune: turn Guardian → Elder Guardian
    addEnchantingRecipe(event, {
        reagent: 'l2complements:guardian_eye',
        pedestalItems: [
            'ars_nouveau:source_gem', 'ars_nouveau:source_gem',
            'ars_nouveau:source_gem', 'ars_nouveau:source_gem',
            'gtceu:holy_silver_dust', 'gtceu:holy_silver_dust'
        ],
        output: 'l2complements:guardian_rune',
        sourceCost: 6000
    })

    // Piglin Rune: turn Piglin → Piglin Brute
    addEnchantingRecipe(event, {
        reagent: 'minecraft:gold_ingot',
        pedestalItems: [
            'minecraft:piglin_banner_pattern',
            'ars_nouveau:source_gem', 'ars_nouveau:source_gem',
            'ars_nouveau:source_gem', 'ars_nouveau:source_gem',
            'gtceu:holy_silver_dust', 'gtceu:holy_silver_dust'
        ],
        output: 'l2complements:piglin_rune',
        sourceCost: 6000
    })

    // Reinforced Warp Stone: durable teleport (64 uses)
    addEnchantingRecipe(event, {
        reagent: 'l2complements:fragile_warp_stone',
        pedestalItems: [
            'minecraft:obsidian', 'minecraft:obsidian',
            'minecraft:obsidian', 'minecraft:obsidian',
            'gtceu:holy_silver_dust', 'gtceu:holy_silver_dust',
            'ars_nouveau:source_gem', 'ars_nouveau:source_gem'
        ],
        output: 'l2complements:reinforced_warp_stone',
        sourceCost: 8000
    })

    // Totem of the Sea: water breathing totem (stackable)
    addEnchantingRecipe(event, {
        reagent: 'minecraft:totem_of_undying',
        pedestalItems: [
            'minecraft:heart_of_the_sea',
            'minecraft:nautilus_shell', 'minecraft:nautilus_shell',
            'minecraft:nautilus_shell', 'minecraft:nautilus_shell',
            'gtceu:holy_silver_dust', 'gtceu:holy_silver_dust'
        ],
        output: 'l2complements:totem_of_the_sea',
        sourceCost: 10000
    })

    // Enchanted Totemic Carrot
    addEnchantingRecipe(event, {
        reagent: 'l2complements:totemic_carrot',
        pedestalItems: [
            'l2complements:totemic_gold_ingot', 'l2complements:totemic_gold_ingot',
            'minecraft:golden_carrot', 'minecraft:golden_carrot',
            'gtceu:holy_silver_dust', 'gtceu:holy_silver_dust'
        ],
        output: 'l2complements:enchanted_totemic_carrot',
        sourceCost: 6000
    })

    // Enchanted Totemic Apple
    addEnchantingRecipe(event, {
        reagent: 'l2complements:totemic_apple',
        pedestalItems: [
            'l2complements:totemic_gold_ingot', 'l2complements:totemic_gold_ingot',
            'minecraft:enchanted_golden_apple',
            'gtceu:holy_silver_dust', 'gtceu:holy_silver_dust'
        ],
        output: 'l2complements:enchanted_totemic_apple',
        sourceCost: 8000
    })

    // === Pure magic Initiate L2Hostility items (no GT required) ===

    // Curse of Sloth: disables difficulty gain from mob kills (weakest curse)
    addImbuementRecipe(event, {
        input: 'minecraft:feather',
        pedestalItems: [
            'gtceu:holy_silver_dust', 'gtceu:holy_silver_dust',
            'gtceu:holy_silver_dust', 'gtceu:holy_silver_dust',
            'minecraft:rabbit_foot', 'minecraft:rabbit_foot'
        ],
        output: 'l2hostility:curse_of_sloth',
        source: 6000,
    })

    // Curse of Gluttony: drops Bottles of Curse from leveled mobs
    addImbuementRecipe(event, {
        input: 'minecraft:golden_apple',
        pedestalItems: [
            'gtceu:holy_silver_dust', 'gtceu:holy_silver_dust',
            'gtceu:holy_silver_dust', 'gtceu:holy_silver_dust',
            'minecraft:honey_bottle', 'minecraft:honey_bottle'
        ],
        output: 'l2hostility:curse_of_gluttony',
        source: 8000,
    })

    // Ring of Healing: continuous HP regen %/sec
    addEnchantingRecipe(event, {
        reagent: 'minecraft:glistering_melon_slice',
        pedestalItems: [
            'gtceu:holy_silver_dust', 'gtceu:holy_silver_dust',
            'gtceu:holy_silver_dust', 'gtceu:holy_silver_dust',
            'ars_nouveau:source_gem', 'ars_nouveau:source_gem',
            'minecraft:golden_apple'
        ],
        output: 'l2hostility:ring_of_healing',
        sourceCost: 8000
    })

    // Ring of Ocean: always keep wet
    addEnchantingRecipe(event, {
        reagent: 'minecraft:nautilus_shell',
        pedestalItems: [
            'gtceu:holy_silver_dust', 'gtceu:holy_silver_dust',
            'gtceu:holy_silver_dust', 'gtceu:holy_silver_dust',
            'ars_nouveau:source_gem', 'ars_nouveau:source_gem',
            'minecraft:heart_of_the_sea'
        ],
        output: 'l2hostility:ring_of_ocean',
        sourceCost: 7000
    })

    // Bottle of Sanity: resets all base player difficulty to 0
    addEnchantingRecipe(event, {
        reagent: 'l2hostility:bottle_of_curse',
        pedestalItems: [
            'gtceu:holy_silver_dust', 'gtceu:holy_silver_dust',
            'gtceu:holy_silver_dust', 'gtceu:holy_silver_dust',
            'ars_nouveau:source_gem', 'ars_nouveau:source_gem',
            'ars_nouveau:source_gem', 'ars_nouveau:source_gem'
        ],
        output: 'l2hostility:bottle_of_sanity',
        sourceCost: 8000
    })

    // Booster Potion: extends harmful effect durations
    event.shaped('l2hostility:booster_potion', [
        ' H ',
        'HWH',
        ' H '
    ], { H: 'gtceu:holy_silver_dust', W: 'l2hostility:witch_droplet' })

    // === Hybrid Initiate items (need hostility_essence = HV GT machine) ===

    // Hostility Essence: first GT gate (HV chemical_reactor)
    event.recipes.gtceu.chemical_reactor('l2hostility/hostility_essence')
        .itemInputs('4x l2hostility:witch_droplet', '2x gtceu:holy_silver_dust')
        .inputFluids(Fluid.of('starbunclemania:source_fluid', 500))
        .itemOutputs('1x l2hostility:hostility_essence')
        .duration(300)
        .EUt(GTValues.VA[GTValues.HV])

    // Witch Charge: throwable that extends harmful effect durations +50%
    event.shaped('l2hostility:witch_charge', [
        ' B ',
        'WEW',
        ' W '
    ], { B: 'minecraft:blaze_rod', W: 'l2hostility:witch_droplet', E: 'l2hostility:hostility_essence' })

    // Eternal Witch Charge: makes harmful effects infinite duration
    addEnchantingRecipe(event, {
        reagent: 'l2hostility:witch_charge',
        pedestalItems: [
            'l2hostility:hostility_essence', 'l2hostility:hostility_essence',
            'l2hostility:hostility_essence', 'l2hostility:hostility_essence',
            'gtceu:holy_silver_dust', 'gtceu:holy_silver_dust'
        ],
        output: 'l2hostility:eternal_witch_charge',
        sourceCost: 8000
    })

    // Magical Looting Charm (Tier 2)
    addEnchantingRecipe(event, {
        reagent: 'nameless_trinkets:glowing_dust',
        pedestalItems: [
            'l2hostility:hostility_essence', 'l2hostility:hostility_essence',
            'gtceu:holy_silver_dust', 'gtceu:holy_silver_dust',
            'gtceu:holy_silver_dust', 'gtceu:holy_silver_dust',
            'ars_nouveau:source_gem', 'ars_nouveau:source_gem'
        ],
        output: 'l2hostility:charm_of_looting_2',
        sourceCost: 8000
    })

    // Detector Glasses: see invisible/hidden mobs, see through Blindness/Darkness
    addEnchantingRecipe(event, {
        reagent: 'l2hostility:hostility_detector',
        pedestalItems: [
            'minecraft:spectral_arrow', 'minecraft:spectral_arrow',
            'gtceu:holy_silver_dust', 'gtceu:holy_silver_dust',
            'gtceu:holy_silver_dust', 'gtceu:holy_silver_dust',
            'l2hostility:hostility_essence', 'l2hostility:hostility_essence'
        ],
        output: 'l2hostility:detector_glasses',
        sourceCost: 10000
    })

    // Book of Reprint: copy enchantments from one book to another
    event.shaped('l2hostility:book_of_reprint', [
        'GHG',
        'HBH',
        'GHG'
    ], { G: 'minecraft:gold_ingot', H: 'gtceu:holy_silver_dust', B: 'minecraft:book' })

    // Book of Omniscience: rename to generate enchanted books (costs XP per use)
    addEnchantingRecipe(event, {
        reagent: 'minecraft:book',
        pedestalItems: [
            'gtceu:holy_silver_dust', 'gtceu:holy_silver_dust',
            'gtceu:holy_silver_dust', 'gtceu:holy_silver_dust',
            'l2hostility:hostility_essence', 'l2hostility:hostility_essence',
            'ars_nouveau:source_gem', 'ars_nouveau:source_gem'
        ],
        output: 'l2hostility:book_of_omniscience',
        sourceCost: 12000
    })

    // ═══════════════════════════════════════════════════════════════
    // SORCERER (EV) — Prima Materia tier
    // ═══════════════════════════════════════════════════════════════

    // Sculkium Ingot: deep dark / warden territory, suppresses vibrations when wearing 4pc
    addImbuementRecipe(event, {
        input: 'minecraft:sculk',
        pedestalItems: [
            'minecraft:echo_shard', 'minecraft:echo_shard',
            'minecraft:echo_shard', 'minecraft:echo_shard',
            'gtceu:prima_materia_dust', 'gtceu:prima_materia_dust',
            'ars_nouveau:source_gem', 'ars_nouveau:source_gem'
        ],
        output: 'l2complements:sculkium_ingot',
        source: 15000,
    })

    // Warden Bone Shard: craft route (wizard fantasy — skip the kill+player combo condition)
    addImbuementRecipe(event, {
        input: 'l2complements:sculkium_ingot',
        pedestalItems: [
            'minecraft:echo_shard', 'minecraft:echo_shard',
            'minecraft:echo_shard', 'minecraft:echo_shard',
            'gtceu:prima_materia_dust', 'gtceu:prima_materia_dust'
        ],
        output: 'l2complements:warden_bone_shard',
        source: 12000,
    })

    // Storm Core: crystal of storm (explosion kills phantom)
    addImbuementRecipe(event, {
        input: 'minecraft:phantom_membrane',
        pedestalItems: [
            'minecraft:lightning_rod',
            'gtceu:prima_materia_dust', 'gtceu:prima_materia_dust',
            'gtceu:prima_materia_dust', 'gtceu:prima_materia_dust',
            'minecraft:glass'
        ],
        output: 'l2complements:storm_core',
        source: 12000,
    })

    // Life Essence: fire resistant, edible
    addImbuementRecipe(event, {
        input: 'minecraft:glistering_melon_slice',
        pedestalItems: [
            'gtceu:prima_materia_dust', 'gtceu:prima_materia_dust',
            'gtceu:prima_materia_dust', 'gtceu:prima_materia_dust',
            'minecraft:totem_of_undying'
        ],
        output: 'l2complements:life_essence',
        source: 15000,
    })

    // Cursed Droplet: fire resistant
    addImbuementRecipe(event, {
        input: 'minecraft:fermented_spider_eye',
        pedestalItems: [
            'gtceu:prima_materia_dust', 'gtceu:prima_materia_dust',
            'gtceu:prima_materia_dust', 'gtceu:prima_materia_dust',
            'minecraft:spider_eye', 'minecraft:spider_eye'
        ],
        output: 'l2complements:cursed_droplet',
        source: 10000,
    })

    // Void Eye: obtained naturally by killing angry Enderman in void — craft route
    addEnchantingRecipe(event, {
        reagent: 'minecraft:ender_eye',
        pedestalItems: [
            'minecraft:obsidian', 'minecraft:obsidian',
            'minecraft:obsidian', 'minecraft:obsidian',
            'gtceu:prima_materia_dust', 'gtceu:prima_materia_dust',
            'ars_nouveau:source_gem', 'ars_nouveau:source_gem'
        ],
        output: 'l2complements:void_eye',
        sourceCost: 15000
    })

    // Blackstone Core: kill Piglin Brute with Stone Cage — craft route
    addImbuementRecipe(event, {
        input: 'minecraft:blackstone',
        pedestalItems: [
            'l2complements:piglin_rune',
            'gtceu:prima_materia_dust', 'gtceu:prima_materia_dust',
            'gtceu:prima_materia_dust', 'gtceu:prima_materia_dust',
            'l2complements:sculkium_ingot'
        ],
        output: 'l2complements:blackstone_core',
        source: 12000,
    })

    // Explosion Shard: remnant of 80+ explosion damage — craft route
    addImbuementRecipe(event, {
        input: 'minecraft:crying_obsidian',
        pedestalItems: [
            'minecraft:tnt', 'minecraft:tnt',
            'gtceu:prima_materia_dust', 'gtceu:prima_materia_dust',
            'gtceu:prima_materia_dust', 'gtceu:prima_materia_dust'
        ],
        output: 'l2complements:explosion_shard',
        source: 12000,
    })

    // Chaos Ingot: GT EV alloy_smelter — second GT gate, beacon payment material
    event.recipes.gtceu.alloy_smelter('l2hostility/chaos_ingot')
        .itemInputs('1x l2hostility:hostility_essence', '4x gtceu:prima_materia_dust')
        .itemOutputs('1x l2hostility:chaos_ingot')
        .duration(200)
        .EUt(GTValues.VA[GTValues.EV])

    // Chaotic Looting Charm (Tier 3)
    addEnchantingRecipe(event, {
        reagent: 'nameless_trinkets:ultimate_dust',
        pedestalItems: [
            'l2hostility:chaos_ingot', 'l2hostility:chaos_ingot',
            'gtceu:prima_materia_dust', 'gtceu:prima_materia_dust',
            'gtceu:prima_materia_dust', 'gtceu:prima_materia_dust',
            'ars_nouveau:source_gem', 'ars_nouveau:source_gem'
        ],
        output: 'l2hostility:charm_of_looting_3',
        sourceCost: 20000
    })

    // Curse of Wrath: +damage% against higher-level mobs
    addEnchantingRecipe(event, {
        reagent: 'l2hostility:chaos_ingot',
        pedestalItems: [
            'gtceu:prima_materia_dust', 'gtceu:prima_materia_dust',
            'gtceu:prima_materia_dust', 'gtceu:prima_materia_dust',
            'minecraft:diamond_sword', 'minecraft:diamond_sword'
        ],
        output: 'l2hostility:curse_of_wrath',
        sourceCost: 18000
    })

    // Curse of Lust: mobs drop all their equipment
    addEnchantingRecipe(event, {
        reagent: 'l2hostility:chaos_ingot',
        pedestalItems: [
            'gtceu:prima_materia_dust', 'gtceu:prima_materia_dust',
            'gtceu:prima_materia_dust', 'gtceu:prima_materia_dust',
            'minecraft:rotten_flesh', 'minecraft:rotten_flesh',
            'minecraft:netherite_ingot'
        ],
        output: 'l2hostility:curse_of_lust',
        sourceCost: 16000
    })

    // Curse of Greed: multiplies hostility loot drop chance
    addEnchantingRecipe(event, {
        reagent: 'l2hostility:chaos_ingot',
        pedestalItems: [
            'gtceu:prima_materia_dust', 'gtceu:prima_materia_dust',
            'gtceu:prima_materia_dust', 'gtceu:prima_materia_dust',
            'minecraft:gold_block', 'minecraft:gold_block'
        ],
        output: 'l2hostility:curse_of_greed',
        sourceCost: 16000
    })

    // Ring of Life: damage cap — won't lose more than X% HP at once
    addEnchantingRecipe(event, {
        reagent: 'minecraft:totem_of_undying',
        pedestalItems: [
            'l2hostility:chaos_ingot', 'l2hostility:chaos_ingot',
            'gtceu:prima_materia_dust', 'gtceu:prima_materia_dust',
            'gtceu:prima_materia_dust', 'gtceu:prima_materia_dust',
            'ars_nouveau:source_gem', 'ars_nouveau:source_gem'
        ],
        output: 'l2hostility:ring_of_life',
        sourceCost: 18000
    })

    // Ring of Incarceration: sneak + apply Stone Cage to nearby hostiles
    addEnchantingRecipe(event, {
        reagent: 'l2complements:sculkium_ingot',
        pedestalItems: [
            'l2hostility:chaos_ingot', 'l2hostility:chaos_ingot',
            'gtceu:prima_materia_dust', 'gtceu:prima_materia_dust',
            'gtceu:prima_materia_dust', 'gtceu:prima_materia_dust',
            'ars_nouveau:source_gem', 'ars_nouveau:source_gem'
        ],
        output: 'l2hostility:ring_of_incarceration',
        sourceCost: 16000
    })

    // Ring of Corrosion: damage enemy equipment durability on hit
    addEnchantingRecipe(event, {
        reagent: 'minecraft:anvil',
        pedestalItems: [
            'l2hostility:chaos_ingot', 'l2hostility:chaos_ingot',
            'gtceu:prima_materia_dust', 'gtceu:prima_materia_dust',
            'gtceu:prima_materia_dust', 'gtceu:prima_materia_dust',
            'ars_nouveau:source_gem', 'ars_nouveau:source_gem'
        ],
        output: 'l2hostility:ring_of_corrosion',
        sourceCost: 15000
    })

    // Flaming Thorn: inflicts Soul Flame based on target's status effects
    addEnchantingRecipe(event, {
        reagent: 'minecraft:blaze_rod',
        pedestalItems: [
            'l2hostility:chaos_ingot', 'l2hostility:chaos_ingot',
            'gtceu:prima_materia_dust', 'gtceu:prima_materia_dust',
            'gtceu:prima_materia_dust', 'gtceu:prima_materia_dust',
            'minecraft:soul_campfire', 'minecraft:soul_campfire'
        ],
        output: 'l2hostility:flaming_thorn',
        sourceCost: 18000
    })

    // Platinum Star: all melee bypasses damage cooldown (DPS multiplier)
    addEnchantingRecipe(event, {
        reagent: 'minecraft:nether_star',
        pedestalItems: [
            'l2hostility:chaos_ingot', 'l2hostility:chaos_ingot',
            'l2hostility:chaos_ingot', 'l2hostility:chaos_ingot',
            'gtceu:prima_materia_dust', 'gtceu:prima_materia_dust',
            'gtceu:prima_materia_dust', 'gtceu:prima_materia_dust'
        ],
        output: 'l2hostility:platinum_star',
        sourceCost: 22000
    })

    // Hostility Orb: clears 3x3x3 chunk sections (stops level-based spawns)
    addEnchantingRecipe(event, {
        reagent: 'l2hostility:chaos_ingot',
        pedestalItems: [
            'gtceu:prima_materia_dust', 'gtceu:prima_materia_dust',
            'gtceu:prima_materia_dust', 'gtceu:prima_materia_dust',
            'minecraft:ender_pearl', 'minecraft:ender_pearl',
            'minecraft:ender_pearl', 'minecraft:ender_pearl'
        ],
        output: 'l2hostility:hostility_orb',
        sourceCost: 20000
    })

    // ═══════════════════════════════════════════════════════════════
    // ALCHEMIST (IV) — Manasteel tier
    // ═══════════════════════════════════════════════════════════════

    // Shulkerate Ingot: End/Shulker territory, extended reach + high durability
    addEnchantingRecipe(event, {
        reagent: 'minecraft:shulker_shell',
        pedestalItems: [
            'minecraft:end_stone', 'minecraft:end_stone',
            'botania:manasteel_ingot', 'botania:manasteel_ingot',
            'botania:manasteel_ingot', 'botania:manasteel_ingot',
            'ars_nouveau:source_gem', 'ars_nouveau:source_gem'
        ],
        output: 'l2complements:shulkerate_ingot',
        sourceCost: 25000
    })

    // Totem of Dream: return to home, full heal on use (EPIC)
    addRunicAltarRecipe(event, {
        output: 'l2complements:totem_of_dream',
        ingredients: [
            { item: 'minecraft:totem_of_undying' },
            { item: 'botania:manasteel_ingot' }, { item: 'botania:manasteel_ingot' },
            { item: 'botania:manasteel_ingot' }, { item: 'botania:manasteel_ingot' },
            { item: 'l2complements:totem_of_the_sea' },
            { item: 'l2complements:life_essence' }, { item: 'l2complements:life_essence' }
        ],
        mana: 50000
    })

    // Space Shard: creative-tier EPIC (500+ projectile damage craft route)
    addEnchantingRecipe(event, {
        reagent: 'minecraft:echo_shard',
        pedestalItems: [
            'botania:manasteel_ingot', 'botania:manasteel_ingot',
            'botania:manasteel_ingot', 'botania:manasteel_ingot',
            'minecraft:chorus_fruit', 'minecraft:chorus_fruit',
            'l2complements:void_eye'
        ],
        output: 'l2complements:space_shard',
        sourceCost: 28000
    })

    // Resonant Feather: chicken survives sonic boom — craft route
    addEnchantingRecipe(event, {
        reagent: 'minecraft:feather',
        pedestalItems: [
            'botania:manasteel_ingot', 'botania:manasteel_ingot',
            'botania:manasteel_ingot', 'botania:manasteel_ingot',
            'minecraft:echo_shard', 'minecraft:echo_shard',
            'minecraft:echo_shard', 'minecraft:echo_shard'
        ],
        output: 'l2complements:resonant_feather',
        sourceCost: 25000
    })

    // Sun Membrane: solar-powered phantom membrane (200+ above max height — craft route)
    addEnchantingRecipe(event, {
        reagent: 'minecraft:phantom_membrane',
        pedestalItems: [
            'botania:manasteel_ingot', 'botania:manasteel_ingot',
            'botania:manasteel_ingot', 'botania:manasteel_ingot',
            'l2complements:soul_flame', 'l2complements:soul_flame',
            'l2complements:storm_core', 'l2complements:storm_core'
        ],
        output: 'l2complements:sun_membrane',
        sourceCost: 30000
    })

    // Force Field: Wither Force Field (Wither bow-kill — wizard fantasy craft route)
    addRunicAltarRecipe(event, {
        output: 'l2complements:force_field',
        ingredients: [
            { item: 'minecraft:nether_star' },
            { item: 'botania:manasteel_ingot' }, { item: 'botania:manasteel_ingot' },
            { item: 'botania:manasteel_ingot' }, { item: 'botania:manasteel_ingot' },
            { item: 'minecraft:wither_skeleton_skull' }, { item: 'minecraft:wither_skeleton_skull' },
            { item: 'l2hostility:chaos_ingot' }, { item: 'l2hostility:chaos_ingot' }
        ],
        mana: 60000
    })

    // Miracle Ingot: GT IV assembler — THE tech gate for the three BEST items
    // chaos_ingot (EV) + manasteel (IV magic) + source gems + source fluid
    event.recipes.gtceu.assembler('l2hostility/miracle_ingot')
        .itemInputs('2x l2hostility:chaos_ingot', '2x botania:manasteel_ingot', '4x ars_nouveau:source_gem')
        .inputFluids(Fluid.of('starbunclemania:source_fluid', 2000))
        .itemOutputs('1x l2hostility:miracle_ingot')
        .duration(400)
        .EUt(GTValues.VA[GTValues.IV])
        .circuit(1)

    // Miracle Powder: derived from Miracle Ingot via GT macerator
    event.recipes.gtceu.macerator('l2hostility/miracle_powder')
        .itemInputs('1x l2hostility:miracle_ingot')
        .itemOutputs('4x l2hostility:miracle_powder')
        .duration(200)
        .EUt(GTValues.VA[GTValues.IV])

    // Miraculous Looting Charm (Tier 4) — highest loot multiplier
    addEnchantingRecipe(event, {
        reagent: 'nameless_trinkets:ultimate_dust',
        pedestalItems: [
            'l2hostility:miracle_ingot', 'l2hostility:miracle_ingot',
            'botania:manasteel_ingot', 'botania:manasteel_ingot',
            'botania:manasteel_ingot', 'botania:manasteel_ingot',
            'ars_nouveau:source_gem', 'ars_nouveau:source_gem'
        ],
        output: 'l2hostility:charm_of_looting_4',
        sourceCost: 35000
    })

    // Curse of Envy: drops trait items when killing mobs with traits
    addEnchantingRecipe(event, {
        reagent: 'l2complements:resonant_feather',
        pedestalItems: [
            'l2hostility:miracle_ingot', 'l2hostility:miracle_ingot',
            'botania:manasteel_ingot', 'botania:manasteel_ingot',
            'botania:manasteel_ingot', 'botania:manasteel_ingot',
            'ars_nouveau:source_gem', 'ars_nouveau:source_gem'
        ],
        output: 'l2hostility:curse_of_envy',
        sourceCost: 32000
    })

    // Curse of Pride: +health% and +attack% per difficulty level (scales infinitely)
    addEnchantingRecipe(event, {
        reagent: 'minecraft:netherite_ingot',
        pedestalItems: [
            'l2hostility:miracle_ingot', 'l2hostility:miracle_ingot',
            'botania:manasteel_ingot', 'botania:manasteel_ingot',
            'botania:manasteel_ingot', 'botania:manasteel_ingot',
            'minecraft:netherite_ingot', 'minecraft:diamond'
        ],
        output: 'l2hostility:curse_of_pride',
        sourceCost: 35000
    })

    // Ring of Divinity: magic immunity + permanent Cleanse
    addEnchantingRecipe(event, {
        reagent: 'minecraft:nether_star',
        pedestalItems: [
            'l2hostility:miracle_ingot', 'l2hostility:miracle_ingot',
            'botania:manasteel_ingot', 'botania:manasteel_ingot',
            'botania:manasteel_ingot', 'botania:manasteel_ingot',
            'gtceu:holy_silver_dust', 'gtceu:holy_silver_dust'
        ],
        output: 'l2hostility:ring_of_divinity',
        sourceCost: 35000
    })

    // Ring of Reflection: reflect negative trait effects back to enemies
    addEnchantingRecipe(event, {
        reagent: 'minecraft:spyglass',
        pedestalItems: [
            'l2hostility:miracle_ingot', 'l2hostility:miracle_ingot',
            'botania:manasteel_ingot', 'botania:manasteel_ingot',
            'botania:manasteel_ingot', 'botania:manasteel_ingot',
            'ars_nouveau:source_gem', 'ars_nouveau:source_gem'
        ],
        output: 'l2hostility:ring_of_reflection',
        sourceCost: 30000
    })

    // Greed of Nidhoggur: extra loot multiplier scaling with mob level
    addEnchantingRecipe(event, {
        reagent: 'l2hostility:chaos_ingot',
        pedestalItems: [
            'l2hostility:miracle_ingot', 'l2hostility:miracle_ingot',
            'botania:manasteel_ingot', 'botania:manasteel_ingot',
            'botania:manasteel_ingot', 'botania:manasteel_ingot',
            'minecraft:gold_block', 'minecraft:gold_block'
        ],
        output: 'l2hostility:greed_of_nidhoggur',
        sourceCost: 35000
    })

    // Abyssal Thorn: mobs get ALL possible traits but always drop trait items
    addEnchantingRecipe(event, {
        reagent: 'l2complements:warden_bone_shard',
        pedestalItems: [
            'l2hostility:miracle_ingot', 'l2hostility:miracle_ingot',
            'botania:manasteel_ingot', 'botania:manasteel_ingot',
            'botania:manasteel_ingot', 'botania:manasteel_ingot',
            'minecraft:echo_shard', 'minecraft:echo_shard'
        ],
        output: 'l2hostility:abyssal_thorn',
        sourceCost: 32000
    })

    // Oddeyes Glasses: enhanced mob visibility (upgrades Detector Glasses)
    addEnchantingRecipe(event, {
        reagent: 'l2hostility:detector_glasses',
        pedestalItems: [
            'l2hostility:miracle_ingot', 'l2hostility:miracle_ingot',
            'botania:manasteel_ingot', 'botania:manasteel_ingot',
            'botania:manasteel_ingot', 'botania:manasteel_ingot',
            'minecraft:amethyst_shard', 'minecraft:amethyst_shard'
        ],
        output: 'l2hostility:oddeyes_glasses',
        sourceCost: 30000
    })

    // Pocket of Restoration: auto-unseals sealed equipment when worn
    addEnchantingRecipe(event, {
        reagent: 'minecraft:ender_chest',
        pedestalItems: [
            'l2hostility:miracle_ingot', 'l2hostility:miracle_ingot',
            'botania:manasteel_ingot', 'botania:manasteel_ingot',
            'botania:manasteel_ingot', 'botania:manasteel_ingot',
            'ars_nouveau:source_gem', 'ars_nouveau:source_gem'
        ],
        output: 'l2hostility:pocket_of_restoration',
        sourceCost: 28000
    })

    // ═══════════════════════════════════════════════════════════════
    // THAUMATURGE (LuV) — Terrasteel tier
    // ═══════════════════════════════════════════════════════════════

    // Eternium Ingot: top-tier eternal material, Runic Forge (LuV)
    addRunicAltarRecipe(event, {
        output: 'l2complements:eternium_ingot',
        ingredients: [
            { item: 'l2complements:shulkerate_ingot' },
            { item: 'botania:terrasteel_ingot' }, { item: 'botania:terrasteel_ingot' },
            { item: 'botania:manasteel_ingot' }, { item: 'botania:manasteel_ingot' },
            { item: 'botania:manasteel_ingot' }, { item: 'botania:manasteel_ingot' },
            { item: 'ars_nouveau:source_gem' }, { item: 'ars_nouveau:source_gem' }
        ],
        mana: 75000
    })

    // Heirophant Green: fire immunity (EPIC — the premier fire protection accessory)
    addEnchantingRecipe(event, {
        reagent: 'botania:terrasteel_ingot',
        pedestalItems: [
            'botania:manasteel_ingot', 'botania:manasteel_ingot',
            'l2complements:soul_flame', 'l2complements:soul_flame',
            'l2complements:sun_membrane', 'l2complements:sun_membrane',
            'minecraft:fire_charge', 'minecraft:fire_charge'
        ],
        output: 'l2complements:heirophant_green',
        sourceCost: 42000
    })

    // Divinity Cross: prevents Cleanse from removing Lv.1 beneficial effects
    addEnchantingRecipe(event, {
        reagent: 'botania:terrasteel_ingot',
        pedestalItems: [
            'gtceu:holy_silver_block', 'gtceu:holy_silver_block',
            'l2hostility:ring_of_divinity', 'l2hostility:ring_of_divinity',
            'ars_nouveau:source_gem', 'ars_nouveau:source_gem',
            'ars_nouveau:source_gem', 'ars_nouveau:source_gem'
        ],
        output: 'l2hostility:divinity_cross',
        sourceCost: 40000
    })

    // Divinity Light: adaptive level stays at 0 (prevents immunity stacking)
    addEnchantingRecipe(event, {
        reagent: 'botania:terrasteel_ingot',
        pedestalItems: [
            'minecraft:nether_star',
            'l2hostility:divinity_cross',
            'ars_nouveau:source_gem', 'ars_nouveau:source_gem',
            'ars_nouveau:source_gem', 'ars_nouveau:source_gem'
        ],
        output: 'l2hostility:divinity_light',
        sourceCost: 42000
    })

    // Triple Strip Cape: back-slot curio
    addEnchantingRecipe(event, {
        reagent: 'botania:terrasteel_ingot',
        pedestalItems: [
            'minecraft:leather', 'minecraft:leather',
            'minecraft:leather', 'minecraft:leather',
            'l2complements:eternium_ingot', 'l2complements:eternium_ingot',
            'ars_nouveau:source_gem', 'ars_nouveau:source_gem'
        ],
        output: 'l2hostility:triple_strip_cape',
        sourceCost: 38000
    })

    // Trait Adder Wand: add/modify traits on mobs (high-tier utility, PvP legal)
    addEnchantingRecipe(event, {
        reagent: 'botania:terrasteel_ingot',
        pedestalItems: [
            'minecraft:stick', 'minecraft:stick',
            'minecraft:stick', 'minecraft:stick',
            'l2hostility:hostility_essence', 'l2hostility:hostility_essence',
            'l2hostility:hostility_essence', 'l2hostility:hostility_essence'
        ],
        output: 'l2hostility:trait_adder_wand',
        sourceCost: 35000
    })

    // Target Select Wand: make mobs fight each other (tactical PvP tool)
    addEnchantingRecipe(event, {
        reagent: 'botania:terrasteel_ingot',
        pedestalItems: [
            'minecraft:stick', 'minecraft:stick',
            'minecraft:stick', 'minecraft:stick',
            'l2hostility:hostility_essence', 'l2hostility:hostility_essence',
            'l2hostility:chaos_ingot', 'l2hostility:chaos_ingot'
        ],
        output: 'l2hostility:target_select_wand',
        sourceCost: 35000
    })

    // ═══════════════════════════════════════════════════════════════
    // BEST — TECH + MAGIC (miracle_ingot = IV GT hard gate)
    // All three require IV GT assembler access via miracle_ingot as reagent
    // ═══════════════════════════════════════════════════════════════

    // Abrahadabra: redirects ALL trait effects to surrounding enemies
    // IV tech (miracle_ingot) + Alchemist magic (manasteel) + top L2Complements materials
    addEnchantingRecipe(event, {
        reagent: 'l2hostility:miracle_ingot',
        pedestalItems: [
            'l2complements:eternium_ingot', 'l2complements:eternium_ingot',
            'l2complements:shulkerate_ingot', 'l2complements:shulkerate_ingot',
            'botania:manasteel_ingot', 'botania:manasteel_ingot',
            '#gtceu:circuits/iv', '#gtceu:circuits/iv'
        ],
        output: 'l2hostility:abrahadabra',
        sourceCost: 60000
    })

    // Imagine Breaker: all melee bypasses ALL magical protection
    // IV tech (miracle_ingot) + mithril (anti-magic metal) + void sight
    addEnchantingRecipe(event, {
        reagent: 'l2hostility:miracle_ingot',
        pedestalItems: [
            'botania:manasteel_ingot', 'botania:manasteel_ingot',
            'gtceu:mithril_plate', 'gtceu:mithril_plate',
            'l2complements:void_eye', 'l2complements:void_eye',
            '#gtceu:circuits/iv', '#gtceu:circuits/iv'
        ],
        output: 'l2hostility:imagine_breaker',
        sourceCost: 55000
    })

    // Infinity Glove: adds 5 ring slots + 1 charm slot (massive accessory multiplier)
    // LuV tech (hardest of the three) + Terrasteel (Thaumaturge) + divinity rings already crafted
    addEnchantingRecipe(event, {
        reagent: 'l2hostility:miracle_ingot',
        pedestalItems: [
            'botania:terrasteel_ingot', 'botania:terrasteel_ingot',
            'l2complements:eternium_ingot', 'l2complements:eternium_ingot',
            'l2hostility:ring_of_divinity', 'l2hostility:ring_of_reflection',
            '#gtceu:circuits/luv', '#gtceu:circuits/luv'
        ],
        output: 'l2hostility:infinity_glove',
        sourceCost: 70000
    })

})
