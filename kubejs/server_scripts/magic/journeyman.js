ServerEvents.recipes(event => {
    event.remove({ id: 'ars_nouveau:source_gem_block'})
    
    event.remove({ id: 'reliquary:lantern_of_paranoia' })
    event.remove({ id: 'reliquary:interdiction_torch' })
    event.remove({ id: 'reliquary:alkahestry_altar' })
    event.remove({ id: 'hexerei:mahogany_broom_from_mixing_cauldron' })
    event.remove({ id: 'hexerei:willow_broom_from_mixing_cauldron' })
    event.remove({ id: 'hexerei:witch_hazel_broom_from_mixing_cauldron'})
    event.remove({ id: 'enderstorage:ender_chest' })
    event.remove({ id: 'enderstorage:ender_tank' })
    event.remove({ id: 'enderstorage:ender_pouch'})
    event.remove({ id: 'ars_nouveau:source_jar'})
    event.remove({ id: 'ars_nouveau:storage_lectern'})
    event.remove({ id: 'ars_nouveau:repository'})

    event.shaped(
            Item.of('kubejs:magebloom_sieve', 1),
            [
                'BAB',
                'AAA',
                'BAB'
            ],
            {
                A: 'ars_nouveau:magebloom_fiber',
                B: 'aether:carved_stone'
            }
        );
    event.shaped(
            Item.of('reliquary:interdiction_torch', 3),
            [
                '   ',
                ' B ',
                ' A '
            ],
            {
                A: 'minecraft:blaze_rod',
                B: 'gtceu:luminessence_dust'
            }
        );
    event.shaped(
            Item.of('reliquary:alkahestry_altar', 1),
            [
                'ABA',
                'BCB',
                'ABA'
            ],
            {
                A: 'gtceu:lead_plate',
                B: 'gtceu:luminessence_dust',
                C: 'minecraft:glowstone'
            }
        );
    event.shaped(
            Item.of('enderstorage:ender_chest', 1),
            [
                'ABA',
                'BCB',
                'ABA'
            ],
            {
                A: 'gtceu:ambrosium_gem',
                B: 'minecraft:obsidian',
                C: 'gtceu:luminessence_dust'
            }
        );
    event.shaped(
            Item.of('enderstorage:ender_tank', 1),
            [
                'ABA',
                'DCD',
                'ABA'
            ],
            {
                A: 'gtceu:ambrosium_gem',
                B: 'minecraft:obsidian',
                C: 'gtceu:luminessence_dust',
                D: 'minecraft:glass'
            }
        );
    event.shaped(
            Item.of('enderstorage:ender_pouch', 1),
            [
                'ABA',
                'ACA',
                ' A '
            ],
            {
                A: 'irons_spellbooks:magic_cloth',
                C: 'enderstorage:ender_chest',
                B: 'gtceu:luminessence_dust'
            }
        );
    event.shaped(
            Item.of('ars_nouveau:source_jar', 1),
            [
                'AAA',
                'BCB',
                'ADA'
            ],
            {
                A: 'ars_nouveau:archwood_slab',
                B: 'minecraft:glass',
                C: 'gtceu:ambrosium_gem',
                D: '#forge:plates/gold'
            }
        );
    event.shaped(
            Item.of('ars_nouveau:storage_lectern', 1),
            [
                ' E ',
                'CDC',
                'ABA'
            ],
            {
                A: '#forge:plates/silver',
                B: 'ars_nouveau:repository',
                C: 'gtceu:ambrosium_gem',
                D: 'minecraft:lectern',
                E: 'irons_spellbooks:iron_spell_book'
            }
        );

    event.shaped(
            Item.of('ars_nouveau:repository', 1),
            [
                'ACA',
                'B B',
                'ACA'
            ],
            {
                A: '#forge:screws/gold',
                B: '#forge:logs/archwood',
                C: 'ars_nouveau:archwood_slab'
            }
        );


    //here be progression
    event.shaped(
            Item.of('reliquary:lantern_of_paranoia', 1),
            [
                'DAD',
                'BCB',
                'DAD'
            ],
            {
                A: '#forge:plates/iron',
                B: 'minecraft:glass',
                C: 'gtceu:luminessence_dust',
                D: '#forge:rods/silver'
            }
        );

    event.custom(
        {
        "type": "ars_nouveau:imbuement",
        "count": 1,
        "input": {
            "item": "gtceu:source_dust"
        },
        "output": "kubejs:pure_source_gem_dust",
        "pedestalItems": [
            {
            "item": {
                "item": "kubejs:magebloom_sieve"
            }
            }
        ],
        "source": 500
        }
    );

    event.custom(
        {
        "type": "ars_nouveau:imbuement",
        "count": 1,
        "input": {
            "item": "kubejs:pure_source_gem_dust"
        },
        "output": "kubejs:rough_source_gem",
        "pedestalItems": [
            {
            "item": {
                "item": "ars_nouveau:fire_essence"
            }
            }
        ],
        "source": 2500
        }
    );

    event.custom(
        {
        "type": "create:sandpaper_polishing",
        "ingredients": [
            {
            "item": "kubejs:rough_source_gem"
            }
        ],
        "results": [
            {
            "item": "gtceu:source_gem"
            }
        ]
        }
    );

    event.recipes.ars_nouveau.crush(
        "gtceu:raw_source",
        [
            {
                stack: Item.of("gtceu:source_dust"),
                chance: 1.0,
                maxRange: 10
            }
        ]
    );

    event.shaped(
        Item.of("gtceu:source_gem_plate", 1), 
        [
            'H', 
            'I', 
            'I'
        ], 
        {
            I: "gtceu:source_gem",
            H: '#forge:tools/hammers',
        }).damageIngredient(Ingredient.of('#forge:tools/hammers'))
});
