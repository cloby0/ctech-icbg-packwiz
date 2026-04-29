ServerEvents.recipes(event => {
    //mixing cauldron recipe
    event.remove({ id: 'hexerei:mixing_cauldron' });
    event.shaped(
        Item.of('hexerei:mixing_cauldron', 3), // arg 1: output
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
        "fluidLevelsConsumed": 1000,
        "heatRequirement": "heated"
    });


})
