ServerEvents.recipes(event => {
    event.remove({ id: "reliquary:ender_staff" });
    event.remove({ id: "reliquary:shears_of_winter" });
    event.remove({ id: "reliquary:sojourner_staff" });
    event.remove({ id: "reliquary:glacial_staff" });
    event.remove({ id: "reliquary:hero_medallion" });
    event.remove({ id: "reliquary:rod_of_lyssa" });
    event.remove({ id: "reliquary:void_tear" });

    event.remove({ id: "irons_spellbooks:divine_pearl" });
    event.remove({ id: "reliquary:mercy_cross" });

    event.remove({ id: "ars_nouveau:enchanting_apparatus" });
    event.remove({ id: "ars_nouveau:arcane_pedestal" });
    event.remove({ id: "ars_nouveau:arcane_core" });

    event.remove({ id: "constructionwand:infinity_wand" });

    event.recipes.ars_nouveau.imbuement(
        "gtceu:source_gem",
        "reliquary:void_tear",
        1500,
        [
            "minecraft:crying_obsidian", 
            "minecraft:crying_obsidian", 
            "minecraft:crying_obsidian", 
            "minecraft:crying_obsidian"
        ]
    );

    event.shaped(
        Item.of('reliquary:ender_staff', 1),
        [
            ' D ',
            'BCB',
            ' A '
        ],
        {
            A: 'gtceu:long_wood_rod',
            B: 'irons_spellbooks:ender_rune',
            C: 'reliquary:void_tear',
            D: 'minecraft:ender_eye'
        }
    )

    event.recipes.ars_nouveau.enchanting_apparatus(
        [
            "minecraft:blue_ice",
            "#kubejs:water_essences",
            "minecraft:snowball",
            "minecraft:snowball",
        ],
        "minecraft:shears",
        "reliquary:shears_of_winter",
        2500,
    );

    event.shaped(
        Item.of('reliquary:sojourner_staff', 1),
        [
            ' D ',
            'BCB',
            ' A '
        ],
        {
            A: 'gtceu:long_wood_rod',
            B: 'irons_spellbooks:protective_rune',
            C: 'reliquary:void_tear',
            D: 'reliquary:lantern_of_paranoia'
        }
    )

    event.shaped(
        Item.of('reliquary:glacial_staff', 1),
        [
            ' D ',
            'BCB',
            ' A '
        ],
        {
            A: 'gtceu:long_iron_rod',
            B: 'irons_spellbooks:ice_rune',
            C: 'reliquary:void_tear',
            D: 'minecraft:blue_ice'
        }
    )

    event.shaped(
        Item.of("reliquary:hero_medallion", 1),
        [
            'CBC',
            'BAB',
            'CBC'
        ],
        {
            A: 'reliquary:fortune_coin',
            B: 'gtceu:wrought_iron_plate',
            C: 'gtceu:source_gem'
        }
    )

    event.recipes.ars_nouveau.enchanting_apparatus(
        [
            "irons_spellbooks:nature_rune",
            "irons_spellbooks:nature_rune",
            "ars_nouveau:magebloom_fiber",
            "gtceu:source_gem"
        ],
        "minecraft:fishing_rod",
        "reliquary:rod_of_lyssa",
        2500,
    );

    event.shaped(
        Item.of('constructionwand:infinity_wand', 1),
        [
            ' D ',
            'BCB',
            ' A '
        ],
        {
            A: 'gtceu:long_iron_rod',
            B: 'irons_spellbooks:evocation_rune',
            C: 'constructionwand:diamond_wand',
            D: 'gtceu:source_gem'
        }
    )

    //after here lies only progression related recipes
    event.shaped(
        Item.of('ars_nouveau:enchanting_apparatus', 1),
        [
            'ABA',
            'ACA',
            'ABA'
        ],
        {
            A: '#forge:rods/long/gold',
            B: 'gtceu:source_plate',
            C: 'gtceu:luminessence_dust'
    });

    event.shaped(
        Item.of('ars_nouveau:arcane_pedestal', 1),
        [
            'B B',
            'ACA',
            'ACA'
        ],
        {
            A: '#forge:rods/gold',
            B: 'gtceu:source_plate',
            C: 'ars_nouveau:sourcestone'
    });

    event.shaped(
        Item.of('ars_nouveau:arcane_core', 1),
        [
            'ADA',
            'BCB',
            'ADA'
        ],
        {
            A: '#forge:bolts/gold',
            B: 'ars_nouveau:archwood_fence',
            C: 'gtceu:source_gem',
            D: 'gtceu:source_plate'
    });

    event.recipes.ars_nouveau.imbuement(
        "minecraft:ender_pearl",
        "irons_spellbooks:divine_pearl",
        3000,
        ["gtceu:ambrosium_dust"]
    );

    event.shaped(
        Item.of('reliquary:mercy_cross', '{Damage:0}'),
        [
            ' A ',
            'ACA',
            ' B '
        ],
        {
            A: '#forge:rods/gold',
            B: '#forge:rods/long/gold',
            C: 'irons_spellbooks:divine_pearl'
        }
    );

    event.recipes.ars_nouveau.enchanting_apparatus(
        [
            "gtceu:ambrosium_dust",
            "gtceu:ambrosium_dust",
            "gtceu:luminessence_dust",
            "gtceu:luminessence_dust"
        ],
        "gtceu:pure_silver_dust",
        "kubejs:holy_silver_blend",
        2000,
    );

    event.recipes.ars_nouveau.imbuement(
        "kubejs:holy_silver_blend",
        "gtceu:holy_silver_dust",
        2500,
        ["reliquary:mercy_cross"]
    );

    event.remove({ id: 'gtceu:smelting/smelt_dust_holy_silver_to_ingot'})
    event.recipes.ars_nouveau.enchanting_apparatus(
        [
            "ars_nouveau:fire_essence"
        ],
        "gtceu:holy_silver_dust",
        "gtceu:holy_silver_ingot", // output
        3000,
    );
});
