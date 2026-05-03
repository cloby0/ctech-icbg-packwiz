ServerEvents.recipes(event => {
    //removes imbuement chamber recipe and adds cusotm ones
    event.remove({ id: 'ars_nouveau:imbuement_chamber' });
    event.shaped(
        Item.of('ars_nouveau:imbuement_chamber', 1),
                 [
                    ' E ',
                    'BCB',
                    'ADA'
                 ],
                 {
                     A: 'minecraft:glowstone',
                     B: '#forge:rods/gold',
                     C: 'minecraft:quartz',
                     D: '#forge:plates/silver',
                     E: 'minecraft:glowstone_dust'
                 }
    );

    event.remove({ id: 'ars_nouveau:imbuement_lapis'});
    event.remove({ id: 'ars_nouveau:imbuement_amethyst'});
    event.remove({ id: 'ars_nouveau:imbuement_amethyst_block'});

    event.recipes.ars_nouveau.imbuement(
        "minecraft:amethyst_shard",
        "irons_spellbooks:arcane_essence",
        5000,
        []
    );

    event.remove({ id: 'ars_nouveau:scribes_table' });
    event.shaped(
        Item.of('ars_nouveau:scribes_table', 1),
                 [
                    'DEF',
                    'BBB',
                    'ACA'
                 ],
                 {
                     A: '#forge:logs/archwood',
                     B: 'ars_nouveau:archwood_slab',
                     C: '#forge:screws/gold',
                     D: 'irons_spellbooks:common_ink',
                     E: 'irons_spellbooks:magic_cloth',
                     F: 'minecraft:feather'
                 }
    );

    event.remove({ id: 'ars_nouveau:novice_spell_book' });
    event.shaped(
        Item.of('ars_nouveau:novice_spell_book', 1),
                 [
                 ' C ',
                 'ABG',
                 ' C '
                 ],
                 {
                     A: 'irons_spellbooks:magic_cloth',
                     B: 'minecraft:book',
                     C: 'irons_spellbooks:arcane_essence',
                     G: 'gtceu:gold_foil'
                 }
    );

    event.remove({ id: 'ars_nouveau:imbuement_fire_essence' });
    event.remove({ id: 'ars_nouveau:imbuement_earth_essence' });
    event.remove({ id: 'ars_nouveau:imbuement_air_essence' });
    event.remove({ id: 'ars_nouveau:imbuement_water_essence' });

    event.custom({
        "type": "hexerei:mixingcauldron",
        "liquid": {
            "fluid": "minecraft:lava"
        },
        "ingredients": [
            {
                "item": "minecraft:glowstone_dust"
            },
            {
                "item": "minecraft:glowstone_dust"
            },
            {
                "item": "minecraft:glowstone_dust"
            },
            {
                "item": "minecraft:glowstone_dust"
            },
            {
                "item": "minecraft:blaze_powder"
            },
            {
                "item": "ars_nouveau:fire_essence"
            },
            {
                "item": "minecraft:glow_berries"
            },
            {
                "item": "minecraft:diamond"
            }
        ],
        "output": {
            "item": "kubejs:glowing_compound_dust"
        },
        "liquidOutput": {
            "fluid": "minecraft:lava"
        },
        "fluidLevelsConsumed": 1000,
        "heatRequirement": "heated"
    });

    event.recipes.ars_nouveau.imbuement(
        "kubejs:glowing_compound_dust",
        "kubejs:impure_glimmering_dust",
        100,
        []
    );

    event.smelting('gtceu:small_luminessence_dust', 'kubejs:impure_glimmering_dust');
})
