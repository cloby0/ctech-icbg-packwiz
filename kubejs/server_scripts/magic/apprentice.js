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

    event.custom({
        "type": "ars_nouveau:imbuement",
        "count": 1,
        "input": {
            "item": "minecraft:amethyst_shard"
        },
        "output": "irons_spellbooks:arcane_essence",
        "pedestalItems": [],
        "source": 500
    });

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

    event.custom({
        "type": "ars_nouveau:imbuement",
        "count": 1,
        "input": {
            "item": "kubejs:glowing_compound_dust"
        },
        "output": "kubejs:impure_glimmering_dust",
        "pedestalItems": [],
        "source": 100
    });

    event.smelting('gtceu:small_luminessence_dust', 'kubejs:impure_glimmering_dust');
})
