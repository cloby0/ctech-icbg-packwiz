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

    // Custom fire/water/air/earth essence crafting dropped: MagiChem's Alembic (real, cheap,
    // entry-tier device -- coal/dirt/feather/etc -> essentia_fire/earth/air/water, wisdom 0, no
    // Wisdom Stone needed) already produces the real thing. #kubejs:<element>_essences tags now
    // point at magichem:essentia_<element> instead (itemTags.js) -- every recipe using those
    // tags picks this up automatically, no other file needed touching. Per user direction
    // 2026-07-28: let MagiChem be a full-game system, not just a Phase 6 sidebar.

    // Four elements combine into a no-steel Nether igniter (magic path; vanilla flint_and_steel untouched)
    // Also the exact item occultism.js's Foliot summon ritual consumes as its gate item --
    // otherworld_essence here makes that gate ingredient itself carry an Occultism cost.
    event.custom({
        "type": "hexerei:mixingcauldron",
        "liquid": { "fluid": "minecraft:lava" },
        "ingredients": [
            { "item": "magichem:essentia_fire" },
            { "item": "magichem:essentia_fire" },
            { "item": "magichem:essentia_water" },
            { "item": "magichem:essentia_earth" },
            { "item": "magichem:essentia_air" },
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
            F: 'magichem:essentia_fire',
            W: 'magichem:essentia_water',
            A: 'magichem:essentia_air',
            E: 'magichem:essentia_earth',
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

    // --- Microcrafting: Hobbyist circuit + components ---
    // Circuit built through 2 real handlers: cauldron (hexerei:mixingcauldron) -> Blood Altar.
    event.custom({
        "type": "hexerei:mixingcauldron",
        "liquid": { "fluid": "minecraft:lava" },
        "ingredients": [
            { "item": "gtceu:ashen_ichor_ingot" },
            { "item": "gtceu:ashen_ichor_ingot" },
            { "item": "irons_spellbooks:arcane_essence" },
            { "item": "irons_spellbooks:arcane_essence" },
            { "item": "occultism:otherworld_essence" },
            { "item": "occultism:otherworld_essence" },
            { "item": "minecraft:redstone" },
            { "item": "minecraft:redstone" }
        ],
        "output": { "item": "kubejs:ichor_sigil_blank" },
        "liquidOutput": { "fluid": "minecraft:lava" },
        "fluidLevelsConsumed": 1000,
        "heatRequirement": "heated"
    });

    addBloodAltarRecipe(event, {
        input: 'kubejs:ichor_sigil_blank',
        output: 'kubejs:ichorbound_sigil',
        syphon: LP.HOBBYIST,
        upgradeLevel: 0
    })

    // Wizard Brain: Spirit Altar (3rd distinct handler for this tier's item set).
    addSpiritInfusion(event, {
        input: 'gtceu:ashen_ichor_ingot',
        output: 'kubejs:ichor_wizard_brain',
        spirits: [{ type: 'infernal', count: 1 }]
    })

    // Motive Core / Channeling Vessel / Ward Lattice: vanilla craft, structural/passive parts.
    event.shapeless('kubejs:ichor_motive_core', [
        'gtceu:ashen_ichor_ingot', 'minecraft:blaze_powder', 'gtceu:iron_rod'
    ])
    event.shapeless('kubejs:ichor_channeling_vessel', [
        'gtceu:ashen_ichor_ingot', 'magichem:essentia_water', 'kubejs:primordial_organic_muck'
    ])
    event.shapeless('kubejs:ichor_ward_lattice', [
        'gtceu:ashen_ichor_ingot', 'create:iron_sheet', 'magichem:essentia_earth'
    ])
});
