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
        500,
        [
            "minecraft:crying_obsidian", 
            "minecraft:crying_obsidian", 
            "minecraft:crying_obsidian", 
            "minecraft:crying_obsidian"
        ]
    );

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
        1000,
        ["gtceu:ambrosium_dust"]
    );

    event.shaped(
        Item.of('reliquary:mercy_cross', 1),
        [
            ' A ',
            'ACA',
            ' B'
        ],
        {
            A: '#forge:rods/gold',
            B: '#forge:rods/long/gold',
            C: 'irons_spellbooks:divine_pearl'
    });

    event.recipes.ars_nouveau.enchanting_apparatus(
        [
            "gtceu:ambrosium_dust",
            "gtceu:ambrosium_dust",
            "gtceu:luminessence_dust",
            "gtceu:luminessence_dust"
        ],
        "gtceu:pure_silver_dust",
        "kubejs:holy_silver_blend",
        1000,
    );

    event.recipes.ars_nouveau.imbuement(
        "kubejs:holy_silver_blend",
        "gtceu:holy_silver_dust",
        1000,
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
