ServerEvents.recipes(event => {
    event.remove({ id: 'ars_nouveau:apprentice_spell_book_upgrade' })
    addEnchantingRecipe(event, {
        reagent: 'ars_nouveau:novice_spell_book',
        pedestalItems: ['gtceu:holy_silver_foil', 'ars_nouveau:magebloom_fiber', 'ars_nouveau:blank_parchment', 'ars_nouveau:blank_parchment'],
        output: 'ars_nouveau:apprentice_spell_book',
        sourceCost: 2 * Source.SORCERER
    })

    event.remove({ id: 'reliquary:glowing_water' })
    event.remove({ id: 'reliquary:glowing_water_from_potion_vial' })

    event.shaped(
        Item.of('reliquary:glowing_water', 3),
        [
            '   ',
            ' B ',
            ' A '
        ],
        {
            A: Item.of('minecraft:potion', '{Potion:"minecraft:strong_healing"}'),
            B: 'gtceu:holy_silver_dust',
        }
    )

    event.remove ({ id: 'ars_nouveau:basic_spell_turret' });
    event.shaped(
        Item.of('ars_nouveau:basic_spell_turret', 1),
        [
            'EDW',
            'CBA',
            'EDS'
        ],
        {
            A: 'minecraft:bow',
            B: 'ars_nouveau:source_jar',
            C: 'gtceu:source_block',
            D: 'gtceu:holy_silver_rod',
            E: "gtceu:double_holy_silver_plate",
            W: '#forge:tools/wrenches',
            S: '#forge:tools/screwdrivers'
        }
    ).damageIngredient(Ingredient.of('#forge:tools/wrenches')).damageIngredient(Ingredient.of('#forge:tools/screwdrivers'))

    event.custom({
        "type": "aether:freezing",
        "ingredient": { "item": "aether_redux:raw_gravitite" },
        "result": { "item": "kubejs:frozen_raw_gravitite" },
        "cookingtime": 400,
        "experience": 0.0
    })

    event.custom({
        "type": "aether:enchanting",
        "ingredient": { "item": "kubejs:frozen_raw_gravitite" },
        "result": { "item": "kubejs:altar_charged_gravitite" },
        "cookingtime": 600,
        "experience": 0.8
    })

    addOccultismRitual(event, {
        name: 'resonant_gravitite_core',
        tier: 'afrit',
        output: 'kubejs:resonant_gravitite_core',
        duration: 120,
        ingredients: [
            { item: 'kubejs:altar_charged_gravitite' },
            { item: 'gtceu:holy_silver_rod' },
            { item: 'gtceu:holy_silver_rod' },
            { item: 'kubejs:resonant_zanite_crystal' },
            { item: 'kubejs:resonant_zanite_crystal' },
            { item: 'occultism:afrit_essence' }
        ]
    })

    const elements = ['air', 'earth', 'fire', 'water']

    elements.forEach(element => {
        addEnchantingRecipe(event, {
            reagent: 'ars_nouveau:magebloom_crop',
            pedestalItems: [
                `#kubejs:${element}_essences`,
                `mysticalagriculture:${element}_agglomeratio`,
                `#kubejs:${element}_essences`,
                `mysticalagriculture:${element}_agglomeratio`
            ],
            output: `mysticalagriculture:${element}_seeds`,
            sourceCost: Source.SORCERER
        })
        event.remove({ id: `mysticalagriculture:seed/infusion/${element}` })
    })

    addOccultismRitual(event, {
        name: 'chaos_essence',
        tier: 'marid',
        output: 'kubejs:chaos_essence',
        duration: 150,
        ingredients: [
            { item: 'gtceu:holy_silver_ingot' },
            { item: 'mysticalagriculture:air_essence' },
            { item: 'mysticalagriculture:earth_essence' },
            { item: 'mysticalagriculture:water_essence' },
            { item: 'mysticalagriculture:fire_essence' },
            { item: 'gtceu:source_block' },
            { item: 'gtceu:source_block' },
            { item: 'gtceu:source_block' },
            { item: 'gtceu:source_block' }
        ]
    })

    // afrit_essence already used once in this file (resonant_gravitite_core above) -- a
    // second use here puts it in the Prima Materia recipe itself, this tier's signature material.
    // Uses afrit tier, not marid: prima_materia_ingot IS the marid gate item in occultism.js,
    // so gating its own ritual behind marid would be circular.
    addOccultismRitual(event, {
        name: 'prima_materia_ingot',
        tier: 'afrit',
        output: 'gtceu:prima_materia_ingot',
        duration: 150,
        ingredients: [
            { item: 'kubejs:chaos_essence' },
            { item: 'kubejs:element_attunement_stone' },
            { item: 'occultism:afrit_essence' }
        ]
    })

    addEnchantingRecipe(event, {
        reagent: { item: 'gtceu:raw_source' },
        pedestalItems: [
            { tag: 'kubejs:water_essences' },
            { tag: 'kubejs:fire_essences' }
        ],
        output: { item: 'ars_nouveau:source_gem', count: 2 },
        sourceCost: 2 * Source.SORCERER
    })

    addEnchantingRecipe(event, {
        reagent: { item: 'kubejs:chaos_essence' },
        pedestalItems: [
            { tag: 'kubejs:fire_essences' }, { tag: 'kubejs:fire_essences' },
            { tag: 'kubejs:air_essences' }, { tag: 'kubejs:air_essences' }
        ],
        output: { item: 'irons_spellbooks:pyrium_ingot', count: 4 },
        sourceCost: 2 * Source.SORCERER
    })

    addEnchantingRecipe(event, {
        reagent: { item: 'kubejs:chaos_essence' },
        pedestalItems: [
            { tag: 'kubejs:water_essences' }, { tag: 'kubejs:water_essences' },
            { tag: 'kubejs:earth_essences' }, { tag: 'kubejs:earth_essences' }
        ],
        output: { item: 'minecraft:experience_bottle', count: 8 },
        sourceCost: 2 * Source.SORCERER
    })
})
