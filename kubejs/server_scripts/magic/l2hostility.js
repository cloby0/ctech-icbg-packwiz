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


    addEnchantingRecipe(event, {
        reagent: 'minecraft:prismarine_shard',
        pedestalItems: [
            'minecraft:iron_ingot', 'minecraft:iron_ingot', 'minecraft:iron_ingot', 'minecraft:iron_ingot',
            'minecraft:prismarine_crystals', 'minecraft:prismarine_crystals',
            'ars_nouveau:source_gem', 'ars_nouveau:source_gem'
        ],
        output: 'l2complements:poseidite_ingot',
        sourceCost: Source.ALCHEMIST
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

    event.shaped('l2hostility:witch_droplet', [
        ' S ',
        'FBF',
        ' S '
    ], { S: 'ars_nouveau:source_gem', F: 'minecraft:fermented_spider_eye', B: 'minecraft:glass_bottle' })

    event.shaped('l2hostility:witch_wand', [
        'D F',
        ' B ',
        '  S'
    ], { D: 'l2hostility:witch_droplet', B: 'minecraft:blaze_rod', S: 'ars_nouveau:source_gem', F: '#forge:tools/files' }).damageIngredient(Ingredient.of('#forge:tools/files'))

    event.shaped('l2hostility:hostility_detector', [
        'DS ',
        'MCM',
        ' S '
    ], { S: 'ars_nouveau:source_gem', M: '#gtceu:circuits/mv', C: 'minecraft:compass', D: '#forge:tools/screwdrivers' }).damageIngredient(Ingredient.of('#forge:tools/screwdrivers'))

    addEnchantingRecipe(event, {
        reagent: 'nameless_trinkets:dubious_dust',
        pedestalItems: [
            'minecraft:leather', 'minecraft:leather',
            'ars_nouveau:source_gem', 'ars_nouveau:source_gem',
            'ars_nouveau:source_gem', 'ars_nouveau:source_gem',
            'minecraft:gold_ingot', 'minecraft:gold_ingot'
        ],
        output: 'l2hostility:charm_of_looting_1',
        sourceCost: Source.ALCHEMIST
    })

    addImbuementRecipe(event, {
        input: 'minecraft:glass_bottle',
        pedestalItems: [
            'l2hostility:witch_droplet', 'l2hostility:witch_droplet',
            'ars_nouveau:source_gem', 'ars_nouveau:source_gem'
        ],
        output: 'l2hostility:bottle_of_curse',
        source: Source.SORCERER
    })


    addImbuementRecipe(event, {
        input: 'minecraft:golden_apple',
        pedestalItems: [
            'minecraft:gold_ingot', 'minecraft:gold_ingot',
            'minecraft:gold_ingot', 'minecraft:gold_ingot',
            'minecraft:totem_of_undying',
            'gtceu:holy_silver_dust', 'gtceu:holy_silver_dust'
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
            'ars_nouveau:source_gem', 'ars_nouveau:source_gem'
        ],
        output: 'l2complements:hard_ice',
        source: Source.ALCHEMIST,
    })

    addImbuementRecipe(event, {
        input: 'minecraft:soul_sand',
        pedestalItems: [
            'minecraft:ghast_tear', 'minecraft:ghast_tear',
            'gtceu:holy_silver_dust', 'gtceu:holy_silver_dust'
        ],
        output: 'l2complements:soul_flame',
        source: Source.THAUMATURGE
    })

    addEnchantingRecipe(event, {
        reagent: 'minecraft:prismarine_crystals',
        pedestalItems: [
            'minecraft:prismarine', 'minecraft:prismarine',
            'minecraft:prismarine', 'minecraft:prismarine',
            'gtceu:holy_silver_dust', 'gtceu:holy_silver_dust',
            'minecraft:sponge', 'minecraft:sponge'
        ],
        output: 'l2complements:guardian_eye',
        sourceCost: Source.THAUMATURGE
    })

    addEnchantingRecipe(event, {
        reagent: 'l2complements:guardian_eye',
        pedestalItems: [
            'ars_nouveau:source_gem', 'ars_nouveau:source_gem',
            'ars_nouveau:source_gem', 'ars_nouveau:source_gem',
            'gtceu:holy_silver_dust', 'gtceu:holy_silver_dust'
        ],
        output: 'l2complements:guardian_rune',
        sourceCost: Source.THAUMATURGE
    })

    addEnchantingRecipe(event, {
        reagent: 'minecraft:gold_ingot',
        pedestalItems: [
            'minecraft:piglin_banner_pattern',
            'ars_nouveau:source_gem', 'ars_nouveau:source_gem',
            'ars_nouveau:source_gem', 'ars_nouveau:source_gem',
            'gtceu:holy_silver_dust', 'gtceu:holy_silver_dust'
        ],
        output: 'l2complements:piglin_rune',
        sourceCost: Source.THAUMATURGE
    })

    addEnchantingRecipe(event, {
        reagent: 'l2complements:fragile_warp_stone',
        pedestalItems: [
            'minecraft:obsidian', 'minecraft:obsidian',
            'minecraft:obsidian', 'minecraft:obsidian',
            'gtceu:holy_silver_dust', 'gtceu:holy_silver_dust',
            'ars_nouveau:source_gem', 'ars_nouveau:source_gem'
        ],
        output: 'l2complements:reinforced_warp_stone',
        sourceCost: Source.THAUMATURGE
    })

    addEnchantingRecipe(event, {
        reagent: 'minecraft:totem_of_undying',
        pedestalItems: [
            'minecraft:heart_of_the_sea',
            'minecraft:nautilus_shell', 'minecraft:nautilus_shell',
            'minecraft:nautilus_shell', 'minecraft:nautilus_shell',
            'gtceu:holy_silver_dust', 'gtceu:holy_silver_dust'
        ],
        output: 'l2complements:totem_of_the_sea',
        sourceCost: Source.THAUMATURGE
    })

    addEnchantingRecipe(event, {
        reagent: 'l2complements:totemic_carrot',
        pedestalItems: [
            'l2complements:totemic_gold_ingot', 'l2complements:totemic_gold_ingot',
            'minecraft:golden_carrot', 'minecraft:golden_carrot',
            'gtceu:holy_silver_dust', 'gtceu:holy_silver_dust'
        ],
        output: 'l2complements:enchanted_totemic_carrot',
        sourceCost: Source.THAUMATURGE
    })

    addEnchantingRecipe(event, {
        reagent: 'l2complements:totemic_apple',
        pedestalItems: [
            'l2complements:totemic_gold_ingot', 'l2complements:totemic_gold_ingot',
            'minecraft:enchanted_golden_apple',
            'gtceu:holy_silver_dust', 'gtceu:holy_silver_dust'
        ],
        output: 'l2complements:enchanted_totemic_apple',
        sourceCost: Source.THAUMATURGE
    })


    addImbuementRecipe(event, {
        input: 'minecraft:feather',
        pedestalItems: [
            'gtceu:holy_silver_dust', 'gtceu:holy_silver_dust',
            'gtceu:holy_silver_dust', 'gtceu:holy_silver_dust',
            'minecraft:rabbit_foot', 'minecraft:rabbit_foot'
        ],
        output: 'l2hostility:curse_of_sloth',
        source: Source.THAUMATURGE,
    })

    addImbuementRecipe(event, {
        input: 'minecraft:golden_apple',
        pedestalItems: [
            'gtceu:holy_silver_dust', 'gtceu:holy_silver_dust',
            'gtceu:holy_silver_dust', 'gtceu:holy_silver_dust',
            'minecraft:honey_bottle', 'minecraft:honey_bottle'
        ],
        output: 'l2hostility:curse_of_gluttony',
        source: Source.THAUMATURGE,
    })

    addEnchantingRecipe(event, {
        reagent: 'minecraft:glistering_melon_slice',
        pedestalItems: [
            'gtceu:holy_silver_dust', 'gtceu:holy_silver_dust',
            'gtceu:holy_silver_dust', 'gtceu:holy_silver_dust',
            'ars_nouveau:source_gem', 'ars_nouveau:source_gem',
            'minecraft:golden_apple'
        ],
        output: 'l2hostility:ring_of_healing',
        sourceCost: Source.THAUMATURGE
    })

    addEnchantingRecipe(event, {
        reagent: 'minecraft:nautilus_shell',
        pedestalItems: [
            'gtceu:holy_silver_dust', 'gtceu:holy_silver_dust',
            'gtceu:holy_silver_dust', 'gtceu:holy_silver_dust',
            'ars_nouveau:source_gem', 'ars_nouveau:source_gem',
            'minecraft:heart_of_the_sea'
        ],
        output: 'l2hostility:ring_of_ocean',
        sourceCost: Source.THAUMATURGE
    })

    addEnchantingRecipe(event, {
        reagent: 'l2hostility:bottle_of_curse',
        pedestalItems: [
            'gtceu:holy_silver_dust', 'gtceu:holy_silver_dust',
            'gtceu:holy_silver_dust', 'gtceu:holy_silver_dust',
            'ars_nouveau:source_gem', 'ars_nouveau:source_gem',
            'ars_nouveau:source_gem', 'ars_nouveau:source_gem'
        ],
        output: 'l2hostility:bottle_of_sanity',
        sourceCost: Source.THAUMATURGE
    })

    event.shaped('l2hostility:booster_potion', [
        ' H ',
        'HWH',
        ' H '
    ], { H: 'gtceu:holy_silver_dust', W: 'l2hostility:witch_droplet' })


    event.recipes.gtceu.chemical_reactor('l2hostility/hostility_essence')
        .itemInputs('4x l2hostility:witch_droplet', '2x gtceu:holy_silver_dust')
        .inputFluids(Fluid.of('starbunclemania:source_fluid', Source.JOURNEYMAN))
        .itemOutputs('1x l2hostility:hostility_essence')
        .duration(300)
        .EUt(GTValues.VA[GTValues.HV])

    event.shaped('l2hostility:witch_charge', [
        ' B ',
        'WEW',
        ' W '
    ], { B: 'minecraft:blaze_rod', W: 'l2hostility:witch_droplet', E: 'l2hostility:hostility_essence' })

    addEnchantingRecipe(event, {
        reagent: 'l2hostility:witch_charge',
        pedestalItems: [
            'l2hostility:hostility_essence', 'l2hostility:hostility_essence',
            'l2hostility:hostility_essence', 'l2hostility:hostility_essence',
            'gtceu:holy_silver_dust', 'gtceu:holy_silver_dust'
        ],
        output: 'l2hostility:eternal_witch_charge',
        sourceCost: Source.THAUMATURGE
    })

    addEnchantingRecipe(event, {
        reagent: 'nameless_trinkets:glowing_dust',
        pedestalItems: [
            'l2hostility:hostility_essence', 'l2hostility:hostility_essence',
            'gtceu:holy_silver_dust', 'gtceu:holy_silver_dust',
            'gtceu:holy_silver_dust', 'gtceu:holy_silver_dust',
            'ars_nouveau:source_gem', 'ars_nouveau:source_gem'
        ],
        output: 'l2hostility:charm_of_looting_2',
        sourceCost: Source.THAUMATURGE
    })

    addEnchantingRecipe(event, {
        reagent: 'l2hostility:hostility_detector',
        pedestalItems: [
            'minecraft:spectral_arrow', 'minecraft:spectral_arrow',
            'gtceu:holy_silver_dust', 'gtceu:holy_silver_dust',
            'gtceu:holy_silver_dust', 'gtceu:holy_silver_dust',
            'l2hostility:hostility_essence', 'l2hostility:hostility_essence'
        ],
        output: 'l2hostility:detector_glasses',
        sourceCost: Source.THAUMATURGE
    })

    event.shaped('l2hostility:book_of_reprint', [
        'KHG',
        'HBH',
        'GHG'
    ], { G: 'minecraft:gold_ingot', H: 'gtceu:holy_silver_dust', B: 'minecraft:book', K: '#forge:tools/knives' }).damageIngredient(Ingredient.of('#forge:tools/knives'))

    addEnchantingRecipe(event, {
        reagent: 'minecraft:book',
        pedestalItems: [
            'gtceu:holy_silver_dust', 'gtceu:holy_silver_dust',
            'gtceu:holy_silver_dust', 'gtceu:holy_silver_dust',
            'l2hostility:hostility_essence', 'l2hostility:hostility_essence',
            'ars_nouveau:source_gem', 'ars_nouveau:source_gem'
        ],
        output: 'l2hostility:book_of_omniscience',
        sourceCost: Source.ARCANIST
    })


    addImbuementRecipe(event, {
        input: 'minecraft:sculk',
        pedestalItems: [
            'minecraft:echo_shard', 'minecraft:echo_shard',
            'minecraft:echo_shard', 'minecraft:echo_shard',
            'gtceu:prima_materia_dust', 'gtceu:prima_materia_dust',
            'ars_nouveau:source_gem', 'ars_nouveau:source_gem'
        ],
        output: 'l2complements:sculkium_ingot',
        source: Source.ARCANIST,
    })

    addImbuementRecipe(event, {
        input: 'l2complements:sculkium_ingot',
        pedestalItems: [
            'minecraft:echo_shard', 'minecraft:echo_shard',
            'minecraft:echo_shard', 'minecraft:echo_shard',
            'gtceu:prima_materia_dust', 'gtceu:prima_materia_dust'
        ],
        output: 'l2complements:warden_bone_shard',
        source: Source.ARCANIST,
    })

    addImbuementRecipe(event, {
        input: 'minecraft:phantom_membrane',
        pedestalItems: [
            'minecraft:lightning_rod',
            'gtceu:prima_materia_dust', 'gtceu:prima_materia_dust',
            'gtceu:prima_materia_dust', 'gtceu:prima_materia_dust',
            'minecraft:glass'
        ],
        output: 'l2complements:storm_core',
        source: Source.ARCANIST,
    })

    addImbuementRecipe(event, {
        input: 'minecraft:glistering_melon_slice',
        pedestalItems: [
            'gtceu:prima_materia_dust', 'gtceu:prima_materia_dust',
            'gtceu:prima_materia_dust', 'gtceu:prima_materia_dust',
            'minecraft:totem_of_undying'
        ],
        output: 'l2complements:life_essence',
        source: Source.ARCANIST,
    })

    addImbuementRecipe(event, {
        input: 'minecraft:fermented_spider_eye',
        pedestalItems: [
            'gtceu:prima_materia_dust', 'gtceu:prima_materia_dust',
            'gtceu:prima_materia_dust', 'gtceu:prima_materia_dust',
            'minecraft:spider_eye', 'minecraft:spider_eye'
        ],
        output: 'l2complements:cursed_droplet',
        source: Source.THAUMATURGE,
    })

    addEnchantingRecipe(event, {
        reagent: 'minecraft:ender_eye',
        pedestalItems: [
            'minecraft:obsidian', 'minecraft:obsidian',
            'minecraft:obsidian', 'minecraft:obsidian',
            'gtceu:prima_materia_dust', 'gtceu:prima_materia_dust',
            'ars_nouveau:source_gem', 'ars_nouveau:source_gem'
        ],
        output: 'l2complements:void_eye',
        sourceCost: Source.ARCANIST
    })

    addImbuementRecipe(event, {
        input: 'minecraft:blackstone',
        pedestalItems: [
            'l2complements:piglin_rune',
            'gtceu:prima_materia_dust', 'gtceu:prima_materia_dust',
            'gtceu:prima_materia_dust', 'gtceu:prima_materia_dust',
            'l2complements:sculkium_ingot'
        ],
        output: 'l2complements:blackstone_core',
        source: Source.ARCANIST,
    })

    addImbuementRecipe(event, {
        input: 'minecraft:crying_obsidian',
        pedestalItems: [
            'minecraft:tnt', 'minecraft:tnt',
            'gtceu:prima_materia_dust', 'gtceu:prima_materia_dust',
            'gtceu:prima_materia_dust', 'gtceu:prima_materia_dust'
        ],
        output: 'l2complements:explosion_shard',
        source: Source.ARCANIST,
    })

    event.recipes.gtceu.alloy_smelter('l2hostility/chaos_ingot')
        .itemInputs('1x l2hostility:hostility_essence', '4x gtceu:prima_materia_dust')
        .itemOutputs('1x l2hostility:chaos_ingot')
        .duration(200)
        .EUt(GTValues.VA[GTValues.EV])

    addEnchantingRecipe(event, {
        reagent: 'nameless_trinkets:ultimate_dust',
        pedestalItems: [
            'l2hostility:chaos_ingot', 'l2hostility:chaos_ingot',
            'gtceu:prima_materia_dust', 'gtceu:prima_materia_dust',
            'gtceu:prima_materia_dust', 'gtceu:prima_materia_dust',
            'ars_nouveau:source_gem', 'ars_nouveau:source_gem'
        ],
        output: 'l2hostility:charm_of_looting_3',
        sourceCost: Source.ARCANIST
    })

    addEnchantingRecipe(event, {
        reagent: 'l2hostility:chaos_ingot',
        pedestalItems: [
            'gtceu:prima_materia_dust', 'gtceu:prima_materia_dust',
            'gtceu:prima_materia_dust', 'gtceu:prima_materia_dust',
            'minecraft:diamond_sword', 'minecraft:diamond_sword'
        ],
        output: 'l2hostility:curse_of_wrath',
        sourceCost: Source.ARCANIST
    })

    addEnchantingRecipe(event, {
        reagent: 'l2hostility:chaos_ingot',
        pedestalItems: [
            'gtceu:prima_materia_dust', 'gtceu:prima_materia_dust',
            'gtceu:prima_materia_dust', 'gtceu:prima_materia_dust',
            'minecraft:rotten_flesh', 'minecraft:rotten_flesh',
            'minecraft:netherite_ingot'
        ],
        output: 'l2hostility:curse_of_lust',
        sourceCost: Source.ARCANIST
    })

    addEnchantingRecipe(event, {
        reagent: 'l2hostility:chaos_ingot',
        pedestalItems: [
            'gtceu:prima_materia_dust', 'gtceu:prima_materia_dust',
            'gtceu:prima_materia_dust', 'gtceu:prima_materia_dust',
            'minecraft:gold_block', 'minecraft:gold_block'
        ],
        output: 'l2hostility:curse_of_greed',
        sourceCost: Source.ARCANIST
    })

    addEnchantingRecipe(event, {
        reagent: 'minecraft:totem_of_undying',
        pedestalItems: [
            'l2hostility:chaos_ingot', 'l2hostility:chaos_ingot',
            'gtceu:prima_materia_dust', 'gtceu:prima_materia_dust',
            'gtceu:prima_materia_dust', 'gtceu:prima_materia_dust',
            'ars_nouveau:source_gem', 'ars_nouveau:source_gem'
        ],
        output: 'l2hostility:ring_of_life',
        sourceCost: Source.ARCANIST
    })

    addEnchantingRecipe(event, {
        reagent: 'l2complements:sculkium_ingot',
        pedestalItems: [
            'l2hostility:chaos_ingot', 'l2hostility:chaos_ingot',
            'gtceu:prima_materia_dust', 'gtceu:prima_materia_dust',
            'gtceu:prima_materia_dust', 'gtceu:prima_materia_dust',
            'ars_nouveau:source_gem', 'ars_nouveau:source_gem'
        ],
        output: 'l2hostility:ring_of_incarceration',
        sourceCost: Source.ARCANIST
    })

    addEnchantingRecipe(event, {
        reagent: 'minecraft:anvil',
        pedestalItems: [
            'l2hostility:chaos_ingot', 'l2hostility:chaos_ingot',
            'gtceu:prima_materia_dust', 'gtceu:prima_materia_dust',
            'gtceu:prima_materia_dust', 'gtceu:prima_materia_dust',
            'ars_nouveau:source_gem', 'ars_nouveau:source_gem'
        ],
        output: 'l2hostility:ring_of_corrosion',
        sourceCost: Source.ARCANIST
    })

    addEnchantingRecipe(event, {
        reagent: 'minecraft:blaze_rod',
        pedestalItems: [
            'l2hostility:chaos_ingot', 'l2hostility:chaos_ingot',
            'gtceu:prima_materia_dust', 'gtceu:prima_materia_dust',
            'gtceu:prima_materia_dust', 'gtceu:prima_materia_dust',
            'minecraft:soul_campfire', 'minecraft:soul_campfire'
        ],
        output: 'l2hostility:flaming_thorn',
        sourceCost: Source.ARCANIST
    })

    addEnchantingRecipe(event, {
        reagent: 'minecraft:nether_star',
        pedestalItems: [
            'l2hostility:chaos_ingot', 'l2hostility:chaos_ingot',
            'l2hostility:chaos_ingot', 'l2hostility:chaos_ingot',
            'gtceu:prima_materia_dust', 'gtceu:prima_materia_dust',
            'gtceu:prima_materia_dust', 'gtceu:prima_materia_dust'
        ],
        output: 'l2hostility:platinum_star',
        sourceCost: Source.SAGE
    })

    addEnchantingRecipe(event, {
        reagent: 'l2hostility:chaos_ingot',
        pedestalItems: [
            'gtceu:prima_materia_dust', 'gtceu:prima_materia_dust',
            'gtceu:prima_materia_dust', 'gtceu:prima_materia_dust',
            'minecraft:ender_pearl', 'minecraft:ender_pearl',
            'minecraft:ender_pearl', 'minecraft:ender_pearl'
        ],
        output: 'l2hostility:hostility_orb',
        sourceCost: Source.ARCANIST
    })


    addEnchantingRecipe(event, {
        reagent: 'minecraft:shulker_shell',
        pedestalItems: [
            'minecraft:end_stone', 'minecraft:end_stone',
            'botania:manasteel_ingot', 'botania:manasteel_ingot',
            'botania:manasteel_ingot', 'botania:manasteel_ingot',
            'ars_nouveau:source_gem', 'ars_nouveau:source_gem'
        ],
        output: 'l2complements:shulkerate_ingot',
        sourceCost: Source.SAGE
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
        mana: Mana.ASCENDANT
    })

    addEnchantingRecipe(event, {
        reagent: 'minecraft:feather',
        pedestalItems: [
            'botania:manasteel_ingot', 'botania:manasteel_ingot',
            'botania:manasteel_ingot', 'botania:manasteel_ingot',
            'minecraft:echo_shard', 'minecraft:echo_shard',
            'minecraft:echo_shard', 'minecraft:echo_shard'
        ],
        output: 'l2complements:resonant_feather',
        sourceCost: Source.SAGE
    })

    addEnchantingRecipe(event, {
        reagent: 'minecraft:phantom_membrane',
        pedestalItems: [
            'botania:manasteel_ingot', 'botania:manasteel_ingot',
            'botania:manasteel_ingot', 'botania:manasteel_ingot',
            'l2complements:soul_flame', 'l2complements:soul_flame',
            'l2complements:storm_core', 'l2complements:storm_core'
        ],
        output: 'l2complements:sun_membrane',
        sourceCost: Source.SAGE
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
        mana: Mana.ASCENDANT
    })

    event.recipes.gtceu.assembler('l2hostility/miracle_ingot')
        .itemInputs('2x l2hostility:chaos_ingot', '2x botania:manasteel_ingot', '4x ars_nouveau:source_gem')
        .inputFluids(Fluid.of('starbunclemania:source_fluid', Source.SORCERER))
        .itemOutputs('1x l2hostility:miracle_ingot')
        .duration(400)
        .EUt(GTValues.VA[GTValues.IV])
        .circuit(1)

    event.recipes.gtceu.macerator('l2hostility/miracle_powder')
        .itemInputs('1x l2hostility:miracle_ingot')
        .itemOutputs('4x l2hostility:miracle_powder')
        .duration(200)
        .EUt(GTValues.VA[GTValues.IV])

    addEnchantingRecipe(event, {
        reagent: 'nameless_trinkets:ultimate_dust',
        pedestalItems: [
            'l2hostility:miracle_ingot', 'l2hostility:miracle_ingot',
            'botania:manasteel_ingot', 'botania:manasteel_ingot',
            'botania:manasteel_ingot', 'botania:manasteel_ingot',
            'ars_nouveau:source_gem', 'ars_nouveau:source_gem'
        ],
        output: 'l2hostility:charm_of_looting_4',
        sourceCost: Source.SAGE
    })

    addEnchantingRecipe(event, {
        reagent: 'l2complements:resonant_feather',
        pedestalItems: [
            'l2hostility:miracle_ingot', 'l2hostility:miracle_ingot',
            'botania:manasteel_ingot', 'botania:manasteel_ingot',
            'botania:manasteel_ingot', 'botania:manasteel_ingot',
            'ars_nouveau:source_gem', 'ars_nouveau:source_gem'
        ],
        output: 'l2hostility:curse_of_envy',
        sourceCost: Source.SAGE
    })

    addEnchantingRecipe(event, {
        reagent: 'minecraft:netherite_ingot',
        pedestalItems: [
            'l2hostility:miracle_ingot', 'l2hostility:miracle_ingot',
            'botania:manasteel_ingot', 'botania:manasteel_ingot',
            'botania:manasteel_ingot', 'botania:manasteel_ingot',
            'minecraft:netherite_ingot', 'minecraft:diamond'
        ],
        output: 'l2hostility:curse_of_pride',
        sourceCost: Source.SAGE
    })

    addEnchantingRecipe(event, {
        reagent: 'minecraft:nether_star',
        pedestalItems: [
            'l2hostility:miracle_ingot', 'l2hostility:miracle_ingot',
            'botania:manasteel_ingot', 'botania:manasteel_ingot',
            'botania:manasteel_ingot', 'botania:manasteel_ingot',
            'gtceu:holy_silver_dust', 'gtceu:holy_silver_dust'
        ],
        output: 'l2hostility:ring_of_divinity',
        sourceCost: Source.SAGE
    })

    addEnchantingRecipe(event, {
        reagent: 'minecraft:spyglass',
        pedestalItems: [
            'l2hostility:miracle_ingot', 'l2hostility:miracle_ingot',
            'botania:manasteel_ingot', 'botania:manasteel_ingot',
            'botania:manasteel_ingot', 'botania:manasteel_ingot',
            'ars_nouveau:source_gem', 'ars_nouveau:source_gem'
        ],
        output: 'l2hostility:ring_of_reflection',
        sourceCost: Source.SAGE
    })

    addEnchantingRecipe(event, {
        reagent: 'l2hostility:chaos_ingot',
        pedestalItems: [
            'l2hostility:miracle_ingot', 'l2hostility:miracle_ingot',
            'botania:manasteel_ingot', 'botania:manasteel_ingot',
            'botania:manasteel_ingot', 'botania:manasteel_ingot',
            'minecraft:gold_block', 'minecraft:gold_block'
        ],
        output: 'l2hostility:greed_of_nidhoggur',
        sourceCost: Source.SAGE
    })

    addEnchantingRecipe(event, {
        reagent: 'l2complements:warden_bone_shard',
        pedestalItems: [
            'l2hostility:miracle_ingot', 'l2hostility:miracle_ingot',
            'botania:manasteel_ingot', 'botania:manasteel_ingot',
            'botania:manasteel_ingot', 'botania:manasteel_ingot',
            'minecraft:echo_shard', 'minecraft:echo_shard'
        ],
        output: 'l2hostility:abyssal_thorn',
        sourceCost: Source.SAGE
    })

    addEnchantingRecipe(event, {
        reagent: 'l2hostility:detector_glasses',
        pedestalItems: [
            'l2hostility:miracle_ingot', 'l2hostility:miracle_ingot',
            'botania:manasteel_ingot', 'botania:manasteel_ingot',
            'botania:manasteel_ingot', 'botania:manasteel_ingot',
            'minecraft:amethyst_shard', 'minecraft:amethyst_shard'
        ],
        output: 'l2hostility:oddeyes_glasses',
        sourceCost: Source.SAGE
    })

    addEnchantingRecipe(event, {
        reagent: 'minecraft:ender_chest',
        pedestalItems: [
            'l2hostility:miracle_ingot', 'l2hostility:miracle_ingot',
            'botania:manasteel_ingot', 'botania:manasteel_ingot',
            'botania:manasteel_ingot', 'botania:manasteel_ingot',
            'ars_nouveau:source_gem', 'ars_nouveau:source_gem'
        ],
        output: 'l2hostility:pocket_of_restoration',
        sourceCost: Source.SAGE
    })


    addRunicAltarRecipe(event, {
        output: 'l2complements:eternium_ingot',
        ingredients: [
            { item: 'l2complements:shulkerate_ingot' },
            { item: 'botania:terrasteel_ingot' }, { item: 'botania:terrasteel_ingot' },
            { item: 'botania:manasteel_ingot' }, { item: 'botania:manasteel_ingot' },
            { item: 'botania:manasteel_ingot' }, { item: 'botania:manasteel_ingot' },
            { item: 'ars_nouveau:source_gem' }, { item: 'ars_nouveau:source_gem' }
        ],
        mana: Mana.ASCENDANT
    })

    addEnchantingRecipe(event, {
        reagent: 'botania:terrasteel_ingot',
        pedestalItems: [
            'botania:manasteel_ingot', 'botania:manasteel_ingot',
            'l2complements:soul_flame', 'l2complements:soul_flame',
            'l2complements:sun_membrane', 'l2complements:sun_membrane',
            'minecraft:fire_charge', 'minecraft:fire_charge'
        ],
        output: 'l2complements:heirophant_green',
        sourceCost: Source.SAGE
    })

    addEnchantingRecipe(event, {
        reagent: 'botania:terrasteel_ingot',
        pedestalItems: [
            'gtceu:holy_silver_block', 'gtceu:holy_silver_block',
            'l2hostility:ring_of_divinity', 'l2hostility:ring_of_divinity',
            'ars_nouveau:source_gem', 'ars_nouveau:source_gem',
            'ars_nouveau:source_gem', 'ars_nouveau:source_gem'
        ],
        output: 'l2hostility:divinity_cross',
        sourceCost: Source.SAGE
    })

    addEnchantingRecipe(event, {
        reagent: 'botania:terrasteel_ingot',
        pedestalItems: [
            'minecraft:nether_star',
            'l2hostility:divinity_cross',
            'ars_nouveau:source_gem', 'ars_nouveau:source_gem',
            'ars_nouveau:source_gem', 'ars_nouveau:source_gem'
        ],
        output: 'l2hostility:divinity_light',
        sourceCost: Source.SAGE
    })

    addEnchantingRecipe(event, {
        reagent: 'botania:terrasteel_ingot',
        pedestalItems: [
            'minecraft:leather', 'minecraft:leather',
            'minecraft:leather', 'minecraft:leather',
            'l2complements:eternium_ingot', 'l2complements:eternium_ingot',
            'ars_nouveau:source_gem', 'ars_nouveau:source_gem'
        ],
        output: 'l2hostility:triple_strip_cape',
        sourceCost: Source.SAGE
    })

    addEnchantingRecipe(event, {
        reagent: 'botania:terrasteel_ingot',
        pedestalItems: [
            'minecraft:stick', 'minecraft:stick',
            'minecraft:stick', 'minecraft:stick',
            'l2hostility:hostility_essence', 'l2hostility:hostility_essence',
            'l2hostility:hostility_essence', 'l2hostility:hostility_essence'
        ],
        output: 'l2hostility:trait_adder_wand',
        sourceCost: Source.SAGE
    })

    addEnchantingRecipe(event, {
        reagent: 'botania:terrasteel_ingot',
        pedestalItems: [
            'minecraft:stick', 'minecraft:stick',
            'minecraft:stick', 'minecraft:stick',
            'l2hostility:hostility_essence', 'l2hostility:hostility_essence',
            'l2hostility:chaos_ingot', 'l2hostility:chaos_ingot'
        ],
        output: 'l2hostility:target_select_wand',
        sourceCost: Source.SAGE
    })


    addEnchantingRecipe(event, {
        reagent: 'l2hostility:miracle_ingot',
        pedestalItems: [
            'l2complements:eternium_ingot', 'l2complements:eternium_ingot',
            'l2complements:shulkerate_ingot', 'l2complements:shulkerate_ingot',
            'botania:manasteel_ingot', 'botania:manasteel_ingot',
            '#gtceu:circuits/iv', '#gtceu:circuits/iv'
        ],
        output: 'l2hostility:abrahadabra',
        sourceCost: Source.ASCENDANT
    })

    addEnchantingRecipe(event, {
        reagent: 'l2hostility:miracle_ingot',
        pedestalItems: [
            'botania:manasteel_ingot', 'botania:manasteel_ingot',
            'gtceu:mithril_plate', 'gtceu:mithril_plate',
            'l2complements:void_eye', 'l2complements:void_eye',
            '#gtceu:circuits/iv', '#gtceu:circuits/iv'
        ],
        output: 'l2hostility:imagine_breaker',
        sourceCost: Source.ASCENDANT
    })

    addEnchantingRecipe(event, {
        reagent: 'l2hostility:miracle_ingot',
        pedestalItems: [
            'botania:terrasteel_ingot', 'botania:terrasteel_ingot',
            'l2complements:eternium_ingot', 'l2complements:eternium_ingot',
            'l2hostility:ring_of_divinity', 'l2hostility:ring_of_reflection',
            '#gtceu:circuits/luv', '#gtceu:circuits/luv'
        ],
        output: 'l2hostility:infinity_glove',
        sourceCost: Source.ASCENDANT
    })

})
