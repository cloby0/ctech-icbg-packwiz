ServerEvents.recipes(event => {
    event.remove({ id: 'hexerei:mixing_cauldron' });

    event.shaped(
        Item.of('hexerei:mixing_cauldron', 1),
            [
                'BDB',
                'ACA',
                'EWE'
            ],
            {
                 A: '#forge:plates/iron',
                 B: 'gtceu:iron_bolt',
                 C: 'minecraft:cauldron',
                 D: '#forge:plates/gold',
                 E: '#minecraft:wooden_slabs',
                 W: '#forge:tools/wrenches'
            }
    ).damageIngredient(Ingredient.of('#forge:tools/wrenches'))

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
            "item": "kubejs:fire_essence"
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
            "item": "kubejs:water_essence"
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
            "item": "kubejs:air_essence"
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
            "item": "kubejs:earth_essence"
        },
        "liquidOutput": {
            "fluid": "minecraft:lava"
        },
        "fluidLevelsConsumed": 1000,
        "heatRequirement": "heated"
    });

    // Four elements combine into a no-steel Nether igniter (magic path; vanilla flint_and_steel untouched)
    // Also the exact item occultism.js's Foliot summon ritual consumes as its gate item --
    // otherworld_essence here makes that gate ingredient itself carry an Occultism cost.
    event.custom({
        "type": "hexerei:mixingcauldron",
        "liquid": { "fluid": "minecraft:lava" },
        "ingredients": [
            { "item": "kubejs:fire_essence" },
            { "item": "kubejs:fire_essence" },
            { "item": "kubejs:water_essence" },
            { "item": "kubejs:earth_essence" },
            { "item": "kubejs:air_essence" },
            { "item": "minecraft:blaze_powder" },
            { "item": "minecraft:coal" },
            { "item": "occultism:otherworld_essence" }
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

    // --- Ashen Ichor: Hobbyist signature metal, no Ars dependency ---
    // 1. arcane charcoal + redstone -> ichor dust
    event.custom({
        "type": "hexerei:mixingcauldron",
        "liquid": { "fluid": "minecraft:lava" },
        "ingredients": [
            { "item": "malum:arcane_charcoal_fragment" },
            { "item": "minecraft:redstone" },
            { "item": "malum:arcane_charcoal_fragment" },
            { "item": "minecraft:redstone" },
            { "item": "malum:arcane_charcoal_fragment" },
            { "item": "minecraft:redstone" },
            { "item": "malum:arcane_charcoal_fragment" },
            { "item": "minecraft:redstone" }
        ],
        "output": { "item": "kubejs:ichor_dust" },
        "liquidOutput": { "fluid": "minecraft:lava" },
        "fluidLevelsConsumed": 1000,
        "heatRequirement": "heated"
    });

    // 2a. blend in vinteum dust, 2b. Blood Altar charges the blend into kindled ichor dust (small LP tax)
    event.shapeless('kubejs:vinteum_ichor_blend', ['kubejs:ichor_dust', 'mna:vinteum_dust'])

    addBloodAltarRecipe(event, {
        input: 'kubejs:vinteum_ichor_blend',
        output: 'kubejs:kindled_ichor_dust',
        syphon: LP.HOBBYIST / 2,
        upgradeLevel: 0
    })

    // 3. smelt into the rough ingot
    event.smelting('kubejs:ashen_ichor_ingot_rough', 'kubejs:kindled_ichor_dust')

    // 4. Spirit Altar finishes it into the real GT ingot with an Infernal Spirit
    addSpiritInfusion(event, {
        input: 'kubejs:ashen_ichor_ingot_rough',
        output: 'gtceu:ashen_ichor_ingot',
        spirits: [{ type: 'infernal', count: 2 }]
    })

    // Shortcut (Journeyman+): direct craft, gated on tier attainment not this file
    event.shapeless('gtceu:ashen_ichor_ingot', [
        'mna:vinteum_dust', 'malum:arcane_charcoal_fragment', '#kubejs:magic/journeyman'
    ])

    event.remove({ id: 'reliquary:fortune_coin' })
    event.shaped(
                 Item.of('reliquary:fortune_coin', 1),
                 [
                    'HAF',
                    'ACA',
                    ' A '
                 ],
                 {
                     A: 'irons_spellbooks:arcane_essence',
                     C: 'gtceu:double_gold_plate',
                     H: '#forge:tools/hammers',
                     F: '#forge:tools/files'
                 }
    ).damageIngredient(Ingredient.of('#forge:tools/hammers')).damageIngredient(Ingredient.of('#forge:tools/files'))

    event.remove({ id: 'irons_spellbooks:inscription_table' })
    event.shaped(
                Item.of('irons_spellbooks:inscription_table', 1),
                 [
                    'ASB',
                    'CCC',
                    'DMD'
                 ],
                 {
                     A: 'irons_spellbooks:common_ink',
                     B: 'minecraft:book',
                     C: '#minecraft:wooden_slabs',
                     D: '#minecraft:logs',
                     S: '#forge:tools/saws',
                     M: '#forge:tools/mallets'
                 }
    ).damageIngredient(Ingredient.of('#forge:tools/saws')).damageIngredient(Ingredient.of('#forge:tools/mallets'))

    // Base spellbook = bind the four elements around a book, cased in copper.
    event.remove({ output: 'irons_spellbooks:copper_spell_book' });
    event.shaped(
        Item.of('irons_spellbooks:copper_spell_book', 1),
        [
            'PFP',
            'WBA',
            'PEH'
        ],
        {
            F: 'kubejs:fire_essence',
            W: 'kubejs:water_essence',
            A: 'kubejs:air_essence',
            E: 'kubejs:earth_essence',
            B: 'minecraft:book',
            P: '#forge:plates/copper',
            H: '#forge:tools/hammers'
        }
    ).damageIngredient(Ingredient.of('#forge:tools/hammers'));

    // Iron spell book = direct upgrade of the copper book, reinforced with iron.
    event.remove({ output: 'irons_spellbooks:iron_spell_book' });
    event.shaped(
        Item.of('irons_spellbooks:iron_spell_book', 1),
        [
            'HIF',
            'ICI',
            ' I '
        ],
        {
            I: '#forge:plates/iron',
            C: 'irons_spellbooks:copper_spell_book',
            H: '#forge:tools/hammers',
            F: '#forge:tools/files'
        }
    ).damageIngredient(Ingredient.of('#forge:tools/hammers')).damageIngredient(Ingredient.of('#forge:tools/files'));
});
