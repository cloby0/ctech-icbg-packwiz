ServerEvents.recipes(event => {
    event.remove({ id: 'ars_nouveau:apprentice_spell_book_upgrade' })
    addEnchantingRecipe(event, {
        reagent: 'ars_nouveau:novice_spell_book',
        pedestalItems: ['gtceu:holy_silver_foil', 'ars_nouveau:magebloom_fiber', 'ars_nouveau:blank_parchment', 'ars_nouveau:blank_parchment'],
        output: 'ars_nouveau:apprentice_spell_book',
        sourceCost: 3500
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
            'ED ',
            'CBA',
            'ED '
        ],
        {
            A: 'minecraft:bow',
            B: 'ars_nouveau:source_jar',
            C: 'gtceu:source_block',
            D: 'gtceu:holy_silver_rod',
            E: "gtceu:double_holy_silver_plate"
        }
    )

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

    addImbuementRecipe(event, {
        input: 'kubejs:altar_charged_gravitite',
        output: 'aether_redux:gravitite_ingot',
        source: 5000,
        pedestalItems: ['gtceu:holy_silver_rod', 'gtceu:holy_silver_rod', 'kubejs:resonant_zanite_crystal', 'kubejs:resonant_zanite_crystal']
    })

    const elements = ['air', 'earth', 'fire', 'water']

    elements.forEach(element => {
        addEnchantingRecipe(event, {
            reagent: 'ars_nouveau:magebloom_crop',
            pedestalItems: [
                `#kubejs:${element}_essences`,
                `mysticalagriculture:${element}_agglomeratio`,
                `#kubejs:${element}_essences`,
                `mysticalagriculture:${element}_agglomeratio`,
                `#kubejs:${element}_essences`,
                `mysticalagriculture:${element}_agglomeratio`,
                `#kubejs:${element}_essences`,
                `mysticalagriculture:${element}_agglomeratio`
            ],
            output: `mysticalagriculture:${element}_seeds`,
            sourceCost: 5500
        })
        event.remove({ id: `mysticalagriculture:seed/infusion/${element}` })
    })

    addEnchantingRecipe(event, {
        reagent: 'gtceu:holy_silver_ingot',
        pedestalItems: [
            'mysticalagriculture:air_essence', 'gtceu:source_block',
            'mysticalagriculture:earth_essence', 'gtceu:source_block',
            'mysticalagriculture:water_essence', 'gtceu:source_block',
            'mysticalagriculture:fire_essence', 'gtceu:source_block'
        ],
        output: 'kubejs:chaos_essence',
        sourceCost: 6000
    })

    addImbuementRecipe(event, {
        input: 'kubejs:chaos_essence',
        output: 'gtceu:prima_materia_ingot',
        source: 10000,
        pedestalItems: ['kubejs:element_attunement_stone']
    })

    addEnchantingRecipe(event, {
        reagent: { item: 'gtceu:raw_source' },
        pedestalItems: [
            { tag: 'kubejs:water_essences' },
            { tag: 'kubejs:fire_essences' }
        ],
        output: { item: 'ars_nouveau:source_gem', count: 2 },
        sourceCost: 3000
    })

    addEnchantingRecipe(event, {
        reagent: { item: 'kubejs:chaos_essence' },
        pedestalItems: [
            { tag: 'kubejs:fire_essences' }, { tag: 'kubejs:fire_essences' },
            { tag: 'kubejs:air_essences' }, { tag: 'kubejs:air_essences' }
        ],
        output: { item: 'irons_spellbooks:pyrium_ingot', count: 4 },
        sourceCost: 6000
    })

    addEnchantingRecipe(event, {
        reagent: { item: 'kubejs:chaos_essence' },
        pedestalItems: [
            { tag: 'kubejs:water_essences' }, { tag: 'kubejs:water_essences' },
            { tag: 'kubejs:earth_essences' }, { tag: 'kubejs:earth_essences' }
        ],
        output: { item: 'minecraft:experience_bottle', count: 8 },
        sourceCost: 4000
    })
})
