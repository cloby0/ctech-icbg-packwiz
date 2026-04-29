ServerEvents.recipes(event => {
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
                'ABA '
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
            Item.of('ars_nouveau:storage_lectern', 1),
            [
                'ACA',
                'B B',
                'ACA '
            ],
            {
                A: '#forge:screws/gold',
                B: '#forge:logs/archwood',
                C: 'ars_nouveau:archwood_slab'
            }
        );
});
