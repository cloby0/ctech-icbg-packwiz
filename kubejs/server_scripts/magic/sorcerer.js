ServerEvents.recipes(event => {
    event.remove({ id: 'ars_nouveau:apprentice_spell_book_upgrade' })
    event.recipes.ars_nouveau.enchanting_apparatus(
        [
            "gtceu:holy_silver_foil",
            "ars_nouveau:magebloom_fiber",
            "ars_nouveau:blank_parchment",
            "ars_nouveau:blank_parchment",
        ],
        "ars_nouveau:novice_spell_book",
        "ars_nouveau:apprentice_spell_book",
        3500,
    );

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

    //tbd magic gun recipes

    

    //beyond this lies progression
    const elements = [
        "air",
        "earth",
        "fire",
        "water"
    ]

    elements.forEach(element => {
        event.recipes.ars_nouveau.enchanting_apparatus(
            [
                `ars_nouveau:${element}_essence`,
                `mysticalagriculture:${element}_agglomeratio`,
                `ars_nouveau:${element}_essence`,
                `mysticalagriculture:${element}_agglomeratio`,
                `ars_nouveau:${element}_essence`,
                `mysticalagriculture:${element}_agglomeratio`,
                `ars_nouveau:${element}_essence`,
                `mysticalagriculture:${element}_agglomeratio`
            ],
            "ars_nouveau:magebloom_crop",
            `mysticalagriculture:${element}_seeds`,
            5500,
        );
        event.replaceInput(
            { input: `ars_nouveau:${element}_essence` },
            `ars_nouveau:${element}_essence`,
            `#kubejs:${element}_essences`
        )
        event.remove({ id: `mysticalagriculture:seed/infusion/${element}` })
    })

    event.recipes.ars_nouveau.enchanting_apparatus(
        [
            "mysticalagriculture:air_essence",
            "gtceu:source_block",
            "mysticalagriculture:earth_essence",
            "gtceu:source_block",
            "mysticalagriculture:water_essence",
            "gtceu:source_block",
            "mysticalagriculture:fire_essence",
            "gtceu:source_block"
        ],
        "gtceu:holy_silver_ingot",
        "kubejs:chaos_essence",
        6000,
    );

    event.recipes.ars_nouveau.imbuement(
        "kubejs:chaos_essence",
        "gtceu:prima_materia_ingot",
        10000,
        ["kubejs:element_attunement_stone"]
    )

    // QoL: raw source ore -> source gem directly (bypasses crush glyph + sieve + imbuement chain)
    event.recipes.ars_nouveau.enchanting_apparatus(
        ['#kubejs:water_essences', '#kubejs:fire_essences'],
        'gtceu:raw_source',
        'ars_nouveau:source_gem',
        3000,
    )
});