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

    // MagiChem is NOT available at Hobbyist. MagiChem's devices gate on Mana & Artifice tiers
    // (Alembic = MNA T1), MNA T0 is the vinteum ladder, and vinteum is Aether-only -- which the
    // player cannot reach until Apprentice. So every magichem:essentia_* reference in this file
    // is replaced by Botania mystical petals, which are genuinely turn-one (Petal Apothecary).
    // Element mapping used throughout this tier: fire=red, water=blue, earth=brown, air=white.
    // From Apprentice on, #kubejs:<element>_essences (MagiChem-backed) is the real currency again.

    // Four elements combine into 4 Chthonic Yew saplings -- plant 2x2, grow, and the tree
    // opens its own Nether portal (window_box). Replaces the old no-steel-igniter fire charge
    // route as this tier's Nether-entry step (vanilla flint_and_steel still untouched).
    // occultism.js's Foliot ritual still gates on plain minecraft:fire_charge (vanilla recipe),
    // unaffected by this swap.
    event.custom({
        "type": "hexerei:mixingcauldron",
        "liquid": { "fluid": "minecraft:lava" },
        "ingredients": [
            { "tag": "botania:petals/red" },
            { "tag": "botania:petals/red" },
            { "tag": "botania:petals/blue" },
            { "tag": "botania:petals/brown" },
            { "tag": "botania:petals/white" },
            { "item": "minecraft:blaze_powder" },
            { "item": "minecraft:coal" },
            { "item": "occultism:otherworld_essence" }
        ],
        "output": { "item": "window_box:chthonic_yew_sapling", "count": 4 },
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

    // 2a. blend in livingrock, 2b. Blood Altar charges the blend into kindled ichor dust (small LP tax)
    // Was vinteum dust -- vinteum is Aether-only now, and the Aether opens at Apprentice.
    // Livingrock is Pure Daisy output: stone the daisy has grown mana through, available turn one.
    event.shapeless('kubejs:livingrock_ichor_blend', ['kubejs:ichor_dust', 'botania:livingrock'])

    addBloodAltarRecipe(event, {
        input: 'kubejs:livingrock_ichor_blend',
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

    // Shortcut (Apprentice+): Apprentice's Alchemy Table fabricates this tier's ingot directly,
    // batch output instead of the full chain's 1x. No vanilla table, no tag toll -- the device
    // itself (LP.APPRENTICE syphon) is what a Hobbyist-only player can't reach yet. Normalized
    // from the old Journeyman+ gate (was 2 tiers ahead, inconsistent with the other 6 shortcuts).
    addAlchemyTableRecipe(event, {
        output: { item: 'gtceu:ashen_ichor_ingot', count: 2 },
        input: ['mna:vinteum_dust', 'malum:arcane_charcoal_fragment'],
        syphon: LP.APPRENTICE,
        ticks: 200
    })

    event.remove({ id: 'reliquary:fortune_coin' })
    event.shaped(
        Item.of('reliquary:fortune_coin', 1),
        [
            'HAF',
            'XCA',
            'MYM'
        ],
        {
            A: 'irons_spellbooks:arcane_essence',
            C: 'gtceu:double_gold_plate',
            M: 'gtceu:ashen_ichor_ingot',
            H: '#forge:tools/hammers',
            F: '#forge:tools/files',
            X: 'kubejs:ichor_sigil',
            Y: 'kubejs:ichor_wizard_brain'
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
    // Circuit: this is the tier's actual casting device, the clearest circuit fit in the file --
    // one of the three repeated copper-plate fillers becomes the Hobbyist circuit.
    event.remove({ output: 'irons_spellbooks:copper_spell_book' });
    event.shaped(
        Item.of('irons_spellbooks:copper_spell_book', 1),
        [
            'PFP',
            'WBA',
            'XEH'
        ],
        {
            F: '#botania:petals/red',
            W: '#botania:petals/blue',
            A: '#botania:petals/white',
            E: '#botania:petals/brown',
            B: 'minecraft:book',
            P: '#forge:plates/copper',
            X: 'kubejs:ichor_sigil',
            H: '#forge:tools/hammers'
        }
    ).damageIngredient(Ingredient.of('#forge:tools/hammers'));

    // Iron spell book = direct upgrade of the copper book, reinforced with iron. Already inherits
    // the circuit via the copper book ingredient; Ward Lattice component fits the reinforcement theme.
    event.remove({ output: 'irons_spellbooks:iron_spell_book' });
    event.shaped(
        Item.of('irons_spellbooks:iron_spell_book', 1),
        [
            'HIF',
            'ICI',
            'LIL'
        ],
        {
            I: '#forge:plates/iron',
            C: 'irons_spellbooks:copper_spell_book',
            L: 'kubejs:ichor_ward_lattice',
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
        output: 'kubejs:ichor_sigil',
        syphon: LP.HOBBYIST,
        upgradeLevel: 0
    })

    // Wizard Brain: Spirit Altar (3rd distinct handler for this tier's item set). Grammar --
    // a thought vessel (book) plus an animating agent (infernal spirit) bound into tier metal.
    addSpiritInfusion(event, {
        input: 'gtceu:ashen_ichor_ingot',
        output: 'kubejs:ichor_wizard_brain',
        extraItems: [{ item: 'minecraft:book' }],
        spirits: [{ type: 'infernal', count: 1 }]
    })
    event.custom({
        "type": "hexerei:mixingcauldron",
        "liquid": { "fluid": "minecraft:lava" },
        "ingredients": [
            { "item": "gtceu:ashen_ichor_rod" },
            { "item": "gtceu:ashen_ichor_rod" },
            { "item": "minecraft:blaze_powder" },
            { "item": "minecraft:blaze_powder" },
            { "item": "minecraft:redstone" },
            { "item": "minecraft:redstone" },
            { "item": "minecraft:gunpowder" },
            { "item": "malum:arcane_charcoal" }
        ],
        "output": { "item": "kubejs:ichor_motive_core" },
        "liquidOutput": { "fluid": "minecraft:lava" },
        "fluidLevelsConsumed": 1000,
        "heatRequirement": "heated"
    })

    // Channeling Vessel: drawn open on the ground with arcane ashes -- the array IS the vessel
    // being scribed. Blood Magic's in-world alchemy array, first use of that handler in the pack.
    addAlchemyArrayRecipe(event, {
        base: 'bloodmagic:blankslate',
        thrown: 'gtceu:ashen_ichor_ingot',
        output: 'kubejs:ichor_channeling_vessel'
    })

    // Ward Lattice: literally lattice-shaped, hammered flat over an obsidian core.
    event.shaped(
        Item.of('kubejs:ichor_ward_lattice', 1),
        [
            'I I',
            ' O ',
            'IHI'
        ],
        {
            I: 'gtceu:ashen_ichor_ingot',
            O: 'minecraft:obsidian',
            H: '#forge:tools/hammers'
        }
    ).damageIngredient(Ingredient.of('#forge:tools/hammers'))

    // --- Quick & Dirty Portal Generator: the only way into the Aether ---
    // Exotic metal does the impossible job (the striker that throws a spark which opens a hole in
    // the world); mundane silver does the shell and fasteners. Silver has no spring form, so the
    // return spring is gold. The water bucket is the reagent the frame actually wants -- the
    // Channeling Vessel is what stores it, which is why that component is the one in here.
    event.shaped(
        Item.of('kubejs:quick_and_dirty_portal_generator', 1),
        [
            'SPS',
            'RCR',
            'WFG'
        ],
        {
            S: 'gtceu:silver_screw',
            P: 'gtceu:silver_plate',
            R: 'gtceu:ashen_ichor_rod',
            C: 'kubejs:ichor_channeling_vessel',
            W: 'minecraft:water_bucket',
            F: 'gtceu:gold_spring',
            G: 'minecraft:glowstone_dust'
        }
    )
});
