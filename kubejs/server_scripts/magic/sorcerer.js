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

    // freezer arrests anti-gravitational buoyancy, makes ore stable
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

    // holy silver + zanite resonance lock graviton matrix into stable ingot
    // requires Initiate (holy_silver_ingot) + Journeyman zanite chain (resonant_zanite_crystal)
    event.custom({
        "type": "ars_nouveau:imbuement",
        "count": 1,
        "input": { "item": "kubejs:altar_charged_gravitite" },
        "output": "aether_redux:gravitite_ingot",
        "pedestalItems": [
            { "item": { "item": "gtceu:holy_silver_rod" } },
            { "item": { "item": "gtceu:holy_silver_rod" } },
            { "item": { "item": "kubejs:resonant_zanite_crystal" } },
            { "item": { "item": "kubejs:resonant_zanite_crystal" } }
        ],
        "source": 5000
    })

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

    // QoL: raw source ore -> 2x source gem directly (bypasses crush glyph + sieve + imbuement chain)
    event.custom({
        "type": "ars_nouveau:enchanting_apparatus",
        "reagent": [{ "item": "gtceu:raw_source" }],
        "pedestalItems": [
            { "tag": "kubejs:water_essences" },
            { "tag": "kubejs:fire_essences" }
        ],
        "output": { "item": "ars_nouveau:source_gem", "count": 2 },
        "sourceCost": 3000
    })

    // side material: chaos_essence → pyrium_ingot via fire + air
    // alternative to netherite+cinder route; chaos energy directed through elemental tension
    event.custom({
        "type": "ars_nouveau:enchanting_apparatus",
        "reagent": [{ "item": "kubejs:chaos_essence" }],
        "pedestalItems": [
            { "tag": "kubejs:fire_essences" },
            { "tag": "kubejs:fire_essences" },
            { "tag": "kubejs:air_essences" },
            { "tag": "kubejs:air_essences" }
        ],
        "output": { "item": "irons_spellbooks:pyrium_ingot", "count": 4 },
        "sourceCost": 6000
    })

    event.custom({
        "type": "ars_nouveau:enchanting_apparatus",
        "reagent": [{ "item": "kubejs:chaos_essence" }],
        "pedestalItems": [
            { "tag": "kubejs:water_essences" },
            { "tag": "kubejs:water_essences" },
            { "tag": "kubejs:earth_essences" },
            { "tag": "kubejs:earth_essences" }
        ],
        "output": { "item": "minecraft:experience_bottle", "count": 8 },
        "sourceCost": 4000
    })
});