ServerEvents.recipes(event => {
    event.remove({ id: 'hexerei:mixing_cauldron' });

    event.shaped(
        Item.of('hexerei:mixing_cauldron', 1),
            [
                'BDB',
                'ACA',
                'EEE'
            ],
            {
                 A: '#forge:plates/iron',
                 B: 'gtceu:iron_bolt',
                 C: 'minecraft:cauldron',
                 D: '#forge:plates/gold',
                 E: '#minecraft:wooden_slabs'
            }
    )

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
                "tag": "minecraft:coals"
            },
            {
                "item": "minecraft:flint"
            },
            {
                "tag": "minecraft:coals"
            },
            {
                "item": "minecraft:flint"
            },
            {
                "tag": "minecraft:coals"
            },
            {
                "item": "minecraft:flint"
            },
            {
                "tag": "minecraft:coals"
            },
            {
                "item": "minecraft:flint"
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

    event.custom({
        "type": "hexerei:mixingcauldron",
        "liquid": {
            "fluid": "minecraft:water"
        },
        "ingredients": [
            {
                "tag": "forge:corals/alive"
            },
            {
                "item": "minecraft:kelp"
            },
            {
                "tag": "forge:corals/alive"
            },
            {
                "item": "minecraft:kelp"
            },
            {
                "tag": "forge:corals/alive"
            },
            {
                "item": "minecraft:kelp"
            },
            {
                "tag": "forge:corals/alive"
            },
            {
                "item": "minecraft:kelp"
            }
        ],
        "output": {
            "item": "ars_nouveau:water_essence"
        },
        "liquidOutput": {
            "fluid": "minecraft:water"
        },
        "fluidLevelsConsumed": 1000,
        "heatRequirement": "heated"
    });

    event.custom({
        "type": "hexerei:mixingcauldron",
        "liquid": {
            "fluid": "minecraft:water"
        },
        "ingredients": [
            {
                "item": "quark:bottled_cloud"
            },
            {
                "item": "minecraft:feather"
            },
            {
                "item": "quark:bottled_cloud"
            },
            {
                "item": "minecraft:feather"
            },
            {
                "item": "quark:bottled_cloud"
            },
            {
                "item": "minecraft:feather"
            },
            {
                "item": "quark:bottled_cloud"
            },
            {
                "item": "minecraft:feather"
            }
        ],
        "output": {
            "item": "ars_nouveau:air_essence"
        },
        "liquidOutput": {
            "fluid": "minecraft:water"
        },
        "fluidLevelsConsumed": 1000,
        "heatRequirement": "heated"
    });

    event.custom({
        "type": "hexerei:mixingcauldron",
        "liquid": {
            "fluid": "minecraft:lava"
        },
        "ingredients": [
            {
                "item": "gtceu:lead_ingot"
            },
            {
                "item": "minecraft:dirt"
            },
            {
                "item": "gtceu:lead_ingot"
            },
            {
                "item": "minecraft:dirt"
            },
            {
                "item": "gtceu:lead_ingot"
            },
            {
                "item": "minecraft:dirt"
            },
            {
                "item": "gtceu:lead_ingot"
            },
            {
                "item": "minecraft:dirt"
            }
        ],
        "output": {
            "item": "ars_nouveau:earth_essence"
        },
        "liquidOutput": {
            "fluid": "minecraft:lava"
        },
        "fluidLevelsConsumed": 1000,
        "heatRequirement": "heated"
    });

    // Four elements combine into a no-steel Nether igniter (magic path; vanilla flint_and_steel untouched)
    event.custom({
        "type": "hexerei:mixingcauldron",
        "liquid": { "fluid": "minecraft:lava" },
        "ingredients": [
            { "item": "ars_nouveau:fire_essence" },
            { "item": "ars_nouveau:fire_essence" },
            { "item": "ars_nouveau:water_essence" },
            { "item": "ars_nouveau:earth_essence" },
            { "item": "ars_nouveau:air_essence" },
            { "item": "minecraft:blaze_powder" },
            { "item": "minecraft:coal" },
            { "item": "minecraft:coal" }
        ],
        "output": { "item": "minecraft:fire_charge", "count": 4 },
        "liquidOutput": { "fluid": "minecraft:lava" },
        "fluidLevelsConsumed": 1000,
        "heatRequirement": "heated"
    });

    event.custom({
        "type": "hexerei:mixingcauldron",
        "liquid": { "fluid": "minecraft:water" },
        "ingredients": [
            { "tag": "forge:corals/alive" },
            { "tag": "forge:corals/alive" },
            { "tag": "forge:corals/alive" },
            { "tag": "forge:corals/alive" },
            { "tag": "forge:corals/alive" },
            { "tag": "forge:corals/alive" },
            { "tag": "forge:corals/alive" },
            { "tag": "forge:corals/alive" }
        ],
        "output": { "item": "kubejs:primordial_organic_muck" },
        "liquidOutput": { "fluid": "minecraft:water" },
        "fluidLevelsConsumed": 1000,
        "heatRequirement": "heated"
    });

    addImbuementRecipe(event, {
        input: 'gtceu:glass_dust',
        output: 'minecraft:glass',
        source: 100,
        pedestalItems: []
    })

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

    // First spellbook = bind the four elements around a book. Removal by output covers the mod's default recipe id.
    event.remove({ output: 'irons_spellbooks:iron_spell_book' });
    event.shaped(
        Item.of('irons_spellbooks:iron_spell_book', 1),
        [
            ' F ',
            'WBA',
            ' E '
        ],
        {
            F: 'ars_nouveau:fire_essence',
            W: 'ars_nouveau:water_essence',
            A: 'ars_nouveau:air_essence',
            E: 'ars_nouveau:earth_essence',
            B: 'minecraft:book'
        }
    );
});
