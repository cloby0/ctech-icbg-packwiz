ServerEvents.recipes(event => {
    //mixing cauldron recipe
    event.remove({ id: 'hexerei:mixing_cauldron' });
    event.shaped(
        Item.of('hexerei:mixing_cauldron', 1), // arg 1: output
            [
                'BDB',
                'ACA',
                'EEE'
            ],
            {
                 A: '#forge:plates/iron',
                 B: 'gtceu:iron_bolt',  //arg 3: the mapping object
                 C: 'minecraft:cauldron',
                 D: '#forge:plates/gold',
                 E: '#minecraft:wooden_slabs'
            }
    )
    //crude fire essence recipe
    event.custom({
        "type": "hexerei:mixingcauldron",
        "liquid": {
            "fluid": "minecraft:lava"
        },
        "ingredients": [
            {
                "tag": "minecraft:coals"
            },
            {
                "item": "minecraft:gold_ingot"
            },
            {
                "tag": "minecraft:coals"
            },
            {
                "item": "minecraft:gold_ingot"
            },
            {
                "tag": "minecraft:coals"
            },
            {
                "item": "minecraft:gold_ingot"
            },
            {
                "tag": "minecraft:coals"
            },
            {
                "item": "minecraft:gold_ingot"
            }
        ],
        "output": {
            "item": "ars_nouveau:fire_essence"
        },
        "liquidOutput": {
            "fluid": "minecraft:lava"
        },
        "fluidLevelsConsumed": 1000,
        "heatRequirement": "heated"
    });

    event.remove({ id: 'reliquary:fortune_coin' })
    event.shaped(
                 Item.of('reliquary:fortune_coin', 1),
                 [
                    ' A ',
                    'ACA',
                    ' A '
                 ],
                 {
                     A: 'irons_spellbooks:arcane_essence',
                     C: 'gtceu:double_gold_plate'
                 }
    )

    event.remove({ id: 'irons_spellbooks:inscription_table' })
    event.shaped(
                Item.of('irons_spellbooks:inscription_table', 1),
                 [
                    'A B',
                    'CCC',
                    'D D'
                 ],
                 {
                     A: 'irons_spellbooks:common_ink',
                     B: 'minecraft:book',
                     C: '#minecraft:wooden_slabs',
                     D: '#minecraft:logs'
                 }
    )
});
