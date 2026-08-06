ServerEvents.recipes(event => {
    // Imbuement Chamber, Scribe's Table, Novice Spell Book: all three craft Ars Nouveau blocks
    // that no longer exist once Ars is uninstalled. Nothing to port to; dropped outright.

    // Simple 1:1 refines don't need a ritual-scale altar cost -- moved to the Manaweaving Altar,
    // MNA's actual primary crafting mechanic. Eldrin Altar reserved for late-midgame+ proper crafts.
    addMnaManaweavingRecipe(event, {
        output: 'irons_spellbooks:arcane_essence',
        items: ['minecraft:amethyst_shard'],
        patterns: ['mna:triangle', 'mna:slash'],
        tier: 1
    });

    // Direction flipped: mana powder -> vinteum, not the reverse. Vinteum's ore is Aether-only
    // now, so this is what makes it renewable once Botania's mana economy is running. The old
    // recipe also output `gtceu:mana_dust`, which isn't a real item -- mana's dust is setIgnored
    // to botania:mana_powder (gtceuMaterialModification.js).
    addMnaManaweavingRecipe(event, {
        output: 'mna:vinteum_dust',
        items: ['botania:mana_powder'],
        patterns: ['mna:circle', 'mna:slash'],
        tier: 1
    });

    event.remove({ id: 'biomeswevegone:golden_apple_from_green_apple' });
    addMnaManaweavingRecipe(event, {
        output: 'minecraft:golden_apple',
        items: ['minecraft:apple', 'minecraft:gold_ingot', 'minecraft:gold_ingot', 'minecraft:gold_ingot', 'minecraft:gold_ingot'],
        patterns: ['mna:circle', 'mna:square'],
        tier: 1
    });

    // The pack's single Alchemy Table recipe. Blood Magic's vanilla one (stone/planks/iron/gold/
    // blankslate) is removed here -- it's cheap enough to bypass the zanite gate entirely. The
    // duplicate Initiate-tier recipe was deleted 2026-08-04: identical output meant it never won,
    // and this tier's own Manasteel chain needs the table anyway.
    event.remove({ id: 'bloodmagic:alchemy_table' })
    event.shaped(
        Item.of('bloodmagic:alchemytable', 1),
        [
            'IBI',
            'GSG',
            'IBI'
        ],
        {
            I: '#forge:plates/iron',
            B: 'bloodmagic:blankslate',
            G: 'minecraft:glass',
            S: 'aether:zanite_gemstone'
        }
    )

    // --- Manasteel: Apprentice signature material, zanite chain (replaces Luminessence here) ---
    // Magic spine stays GT-free: hammer-crush, hand combine, Alchemy Table infusion -- no GT machine.
    event.shapeless('kubejs:zanite_shard', ['aether:zanite_gemstone', '#forge:tools/hammers'])
        .damageIngredient(Ingredient.of('#forge:tools/hammers'))

    // Weaken-to-empower: zanite's own inverse-durability mechanic, flavored with redstone.
    event.shapeless('kubejs:cracked_zanite', ['kubejs:zanite_shard', 'minecraft:redstone', 'minecraft:redstone'])

    // magichem:admixture_energy (real MagiChem materia, Alembic-decomposed from coal) binds the
    // charge into the iron. Per user direction 2026-07-28: make MagiChem load-bearing, not just
    // a background essence tag.
    addAlchemyTableRecipe(event, {
        output: 'kubejs:zanite_laced_iron',
        input: ['kubejs:cracked_zanite', 'minecraft:iron_ingot', 'magichem:admixture_energy'],
        syphon: LP.APPRENTICE
    })

    addManaPondRecipe(event, {
        input: { item: 'kubejs:zanite_laced_iron' },
        mana: ManaPool.APPRENTICE,
        output: { item: 'botania:manasteel_ingot' }
    })

    // Shortcut (Journeyman+, Nigredo worn): Alembic/Distillery fabricates manasteel straight
    // from materia -- no raw items, real wisdom-field gate (needs wisdom_stone_nigredo equipped,
    // wisdom:0). batch_size does the "cheaper than the full chain" job natively. Normalized from
    // the old Sorcerer+ gate (was 3 tiers ahead).
    event.custom({
        type: 'magichem:distillation_fabrication',
        wisdom: 0,
        categories: 1,
        output_rate: 1.0,
        batch_size: 3,
        object: { item: 'botania:manasteel_ingot' },
        components: [
            { item: 'magichem:essentia_precious', count: 40 },
            { item: 'magichem:admixture_energy', count: 30 },
            { item: 'magichem:admixture_crystal', count: 20 }
        ]
    })

    // Aether portal frame recipe deleted. It was circular: every zanite component in it needs
    // Manasteel, which needs aether:zanite_gemstone, which only exists in the Aether. The gate is
    // kubejs:quick_and_dirty_portal_generator (hobbyist.js) via
    // #aether:aether_portal_activation_items instead. aether:aether_portal_frame stays a
    // registered creative-only item -- layerRegistry.js uses its texture as the Aether ore-layer
    // icon, so do NOT obliterate it.

    addMnaManaweavingRecipe(event, {
        output: { item: 'kubejs:kerogen', count: 4 },
        items: ['kubejs:primordial_organic_muck', '#kubejs:earth_essences'],
        patterns: ['mna:square', 'mna:backslash'],
        tier: 1
    })

    event.custom({
        "type": "hexerei:mixingcauldron",
        "liquid": { "fluid": "minecraft:lava" },
        "ingredients": [
            { "item": "kubejs:kerogen" },
            { "item": "kubejs:kerogen" },
            { "item": "kubejs:kerogen" },
            { "item": "kubejs:kerogen" },
            { "tag": "kubejs:fire_essences" },
            { "tag": "kubejs:fire_essences" },
            { "tag": "kubejs:fire_essences" },
            { "tag": "kubejs:fire_essences" }
        ],
        "output": { "item": "kubejs:crude_petroleum_mass" },
        "liquidOutput": { "fluid": "minecraft:lava" },
        "fluidLevelsConsumed": 1000,
        "heatRequirement": "heated"
    })

    event.recipes.gtceu.extractor('crude_petroleum_mass_extraction')
        .itemInputs('1x kubejs:crude_petroleum_mass')
        .outputFluids(Fluid.of('gtceu:oil_heavy', 4000))
        .duration(10 * 20)
        .EUt(GTValues.VA[GTValues.LV])

    // Reagent swapped from luminessence_dust (retired signature material) to this tier's own
    // cracked zanite intermediate. Pedestal items unchanged.
    addMnaManaweavingRecipe(event, {
        output: { item: 'minecraft:experience_bottle', count: 4 },
        items: ['kubejs:cracked_zanite', '#kubejs:fire_essences', '#kubejs:fire_essences'],
        patterns: ['mna:triangle', 'mna:slash'],
        tier: 1
    })

    addMnaManaweavingRecipe(event, {
        output: { item: 'hexcasting:charged_amethyst', count: 2 },
        items: ['gtceu:amethyst_dust', '#kubejs:air_essences'],
        patterns: ['mna:triangle', 'mna:backslash'],
        tier: 1
    })

    // Dominion Wand: dead Ars item, dead source_gem ingredient. Dropped, no replacement --
    // inventing a substitute utility wand isn't in the design spec, flag if one is wanted.

    // --- Microcrafting: Apprentice circuit + components ---
    // Circuit built through 2 real handlers: Alchemy Table -> Mana Pond.
    addAlchemyTableRecipe(event, {
        output: 'kubejs:zanite_sigil_blank',
        input: ['botania:manasteel_ingot', 'hexcasting:charged_amethyst', 'irons_spellbooks:magic_cloth'],
        syphon: LP.APPRENTICE,
        ticks: 200
    })

    addManaPondRecipe(event, {
        input: { item: 'kubejs:zanite_sigil_blank' },
        output: { item: 'kubejs:zanite_sigil' },
        mana: ManaPool.APPRENTICE
    })

    // Wizard Brain: Manaweaving Altar t1 (3rd distinct handler for this tier's item set).
    // Grammar: thought vessel (book) + animating agent (otherworld essence) in tier metal.
    addMnaManaweavingRecipe(event, {
        output: 'kubejs:zanite_wizard_brain',
        items: ['botania:manasteel_ingot', 'minecraft:book', 'occultism:otherworld_essence'],
        patterns: ['mna:circle', 'mna:square'],
        tier: 1
    })
    addManaPondRecipe(event, {
        input: { item: 'minecraft:piston' },
        mana: 2 * ManaPool.APPRENTICE,
        output: { item: 'kubejs:zanite_motive_core' }
    })

    // Channeling Vessel: a bucket is only a bucket until something is dissolved into its walls.
    addAlchemyTableRecipe(event, {
        output: 'kubejs:zanite_channeling_vessel',
        input: ['minecraft:bucket', 'botania:manasteel_ingot', 'botania:mana_powder', 'magichem:admixture_energy'],
        syphon: LP.APPRENTICE,
        upgradeLevel: 1
    })

    // Ward Lattice: woven, not forged -- four plates knotted around a rune.
    addMnaManaweavingRecipe(event, {
        output: 'kubejs:zanite_ward_lattice',
        items: ['gtceu:manasteel_plate', 'gtceu:manasteel_plate', 'gtceu:manasteel_plate', 'gtceu:manasteel_plate', 'irons_spellbooks:protection_rune', 'minecraft:obsidian'],
        patterns: ['mna:square', 'mna:triangle'],
        tier: 1
    })

    // --- Give the zanite set real consumers ---
    // All 5 zanite components were pack-wide dead: their one former consumer
    // (aether:aether_portal_frame) was correctly deleted 2026-08-04 fixing an unrelated
    // circular Aether-access bug, and nothing replaced it. midas_touchstone/infernal_tear/
    // infernal_chalice/witherless_rose were checked and rejected (Initiate-tier void_tear or
    // Wither-tier nether_stars ingredient -- would tier-invert the gate).

    // Kraken Shell: protective vs. drowning -- Ward Lattice (containment/protection) fits.
    // One of 3x kraken_shell_fragment replaced with the circuit; ward_lattice added as a new slot.
    event.remove({ id: 'reliquary:kraken_shell' })
    event.shapeless('reliquary:kraken_shell', [
        'reliquary:kraken_shell_fragment',
        'reliquary:kraken_shell_fragment',
        'reliquary:nebulous_heart',
        'kubejs:zanite_sigil',
        'kubejs:zanite_ward_lattice'
    ])

    // Angelic Feather: flight-adjacent -- Motive Core (kinetic) fits, and matches Apprentice's
    // Aether/flight theme. No duplicated ingredient exists, both added as new slots.
    event.remove({ id: 'reliquary:angelic_feather' })
    event.shapeless('reliquary:angelic_feather', [
        '#forge:feathers',
        'reliquary:nebulous_heart',
        'reliquary:bat_wing',
        'reliquary:fertile_essence',
        'kubejs:zanite_sigil',
        'kubejs:zanite_motive_core'
    ])

    // Phoenix Down: auto-revives on death, unattended -- Wizard Brain fits exactly.
    // One of 3x angelheart_vial replaced with Wizard Brain; circuit added as a new slot.
    event.remove({ id: 'reliquary:phoenix_down' })
    event.shapeless('reliquary:phoenix_down', [
        'reliquary:angelheart_vial',
        'reliquary:angelheart_vial',
        'reliquary:angelic_feather',
        'kubejs:zanite_wizard_brain',
        'kubejs:zanite_sigil'
    ])
})
