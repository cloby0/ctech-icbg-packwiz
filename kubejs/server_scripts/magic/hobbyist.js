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

    // Dictionary of Spirits: was forge:seeds/datura + forge:books, zero Botania involvement --
    // the one item every spirit-binding needs, reachable with no infrastructure at all. Rebuilt
    // from GTCEu's own book_from_leather shape (paper + leather + glue -> book), substituting
    // Livingwood for leather (the spine must be living material) and Slime Ball for GT's own Glue
    // fluid (the real vanilla item that Glue is itself made from). Root of the Botania -> Occultism
    // -> Malum -> Blood Magic bootstrap chain.
    event.remove({ id: 'occultism:crafting/dictionary_of_spirits' })
    event.shapeless('occultism:dictionary_of_spirits', [
        'minecraft:paper',
        'minecraft:paper',
        'minecraft:paper',
        'botania:livingwood',
        'minecraft:slime_ball',
        '#forge:seeds/datura'
    ])

    // Blood Altar: was 100% vanilla (6/9 stone+furnace+gold ingots), then 2026-08-06 filled the 2
    // empty corners and the gold band with arcane_charcoal_fragment/livingrock. Built at the
    // Spirit Altar now, not a plain grid craft: moves Blood Magic's entry point onto Malum's own
    // station (which, after this file's Spirit Altar edit above, itself needs Occultism's
    // Otherstone) -- a real transitive chain instead of a direct ingredient hack.
    // arcane_charcoal_fragment traces to plain log smelting with zero spirit involvement by
    // Malum's own design (this pack already removed Malum's old crucible-ore economy specifically
    // because it let spirits substitute for real ore costs), so forcing spirits into that
    // ingredient itself would have fought the mod's own logic -- gating the build METHOD instead
    // is the correct fix. Furnace is the prime input (the vessel being infused into an altar);
    // everything else carries over unchanged as extraItems. Wicked spirits: dark/sacrificial
    // magic fits Blood Magic's own identity better than any of the other seven spirit types.
    event.remove({ id: 'bloodmagic:blood_altar' })
    addSpiritInfusion(event, {
        input: 'minecraft:furnace',
        output: 'bloodmagic:altar',
        extraItems: [
            { item: 'malum:arcane_charcoal_fragment', count: 2 },
            { tag: 'forge:stone', count: 3 },
            { tag: 'forge:plates/gold', count: 2 },
            { item: 'botania:livingrock', count: 1 }
        ],
        spirits: [{ type: 'wicked', count: 4 }]
    })

    // Spirit Altar: was 100% vanilla (7/9). Same charcoal/livingrock pairing as the Blood Altar
    // above -- shared Hobbyist-altar grammar -- while runewood/soulstone stay Malum's own identity.
    // Occultism tax added 2026-08-07: an altar that channels something from the Otherworld,
    // built partly from stone already touched by the Otherworld. Otherstone replaces one of the
    // three duplicated runewood_planks slots. This is the real universal gate on Malum's spirit
    // system -- every soul-hunter weapon feeds spirits through this one altar, unlike gating a
    // single weapon recipe.
    event.remove({ id: 'malum:spirit_altar' })
    event.shaped(
        Item.of('malum:spirit_altar', 1),
        [
            'CYC',
            'ZXZ',
            'OLX'
        ],
        {
            C: 'malum:arcane_charcoal_fragment',
            Y: 'malum:processed_soulstone',
            Z: '#forge:plates/gold',
            X: 'malum:runewood_planks',
            L: 'botania:livingrock',
            O: 'occultism:otherstone'
        }
    ).damageIngredient(Ingredient.of('#forge:tools/saws'))

    // Crude Scythe: flavor touch, not load-bearing on its own (Spirit Altar above is the real
    // gate on Malum's spirit system -- scythes aren't the only soul-hunter weapon). A weapon
    // needs to be spiritually attuned via the Otherworld before it can harvest a soul from a
    // kill, which is literally what #malum:soul_hunter_weapon already claims. One of the three
    // original iron-ingot slots (X) is replaced with a new key (E) for the essence.
    event.remove({ id: 'malum:crude_scythe' })
    event.shaped('malum:crude_scythe', [
        'XEY',
        ' #X',
        '#  '
    ], {
        X: '#forge:ingots/iron',
        Y: 'malum:processed_soulstone',
        E: 'occultism:otherworld_essence',
        '#': '#forge:rods/wooden'
    })

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

    // Infernal Claw: a claw is a moving mechanical weapon -- Motive Core fits. ichor_motive_core
    // had zero consumers pack-wide before this (crafted, never used). No duplicated ingredient
    // exists to replace, so both are added as new slots.
    event.remove({ id: 'reliquary:infernal_claw' })
    event.shapeless('reliquary:infernal_claw', [
        '#forge:leather',
        'reliquary:molten_core',
        'reliquary:rib_bone',
        'reliquary:slime_pearl',
        'kubejs:ichor_sigil',
        'kubejs:ichor_motive_core'
    ])

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

    // Ward Lattice: relocated onto the Spirit Altar 2026-08-07 -- the one component in this
    // tier's set that never ran through a foreign station (Sigil/Wizard Brain/Channeling Vessel
    // already do). Sacred spirit: protective/warding reads as blessing, not corruption or force.
    addSpiritInfusion(event, {
        input: { item: 'gtceu:ashen_ichor_ingot', count: 4 },
        output: 'kubejs:ichor_ward_lattice',
        extraItems: [{ item: 'minecraft:obsidian', count: 1 }],
        spirits: [{ type: 'sacred', count: 2 }]
    })

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
