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

    // mana lost its ore vein to vinteum (gtceuMaterialRegistry.js) so mana_dust needs a
    // source of its own -- refine off vinteum_dust here instead of hijacking Occultism's
    // crusher into transmuting raw_vinteum into a different material (see journeyman.js).
    addMnaManaweavingRecipe(event, {
        output: 'gtceu:mana_dust',
        items: ['mna:vinteum_dust'],
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

    // bloodmagic:alchemytable's only other recipe (initiate.js) needs ambrosia_touched_elementite,
    // an Initiate-tier intermediate -- but this tier's own Manasteel chain needs the table two
    // tiers early. Cheap Apprentice-only bootstrap recipe, coexists with Initiate's harder one
    // (same output, different recipe id, first one built wins).
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
        mana: Mana.APPRENTICE,
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

    // Aether gate (moved here from the old Journeyman slot): glowstone + Hobbyist's Ashen Ichor.
    // Ward Lattice component: a portal frame's whole job is containing/stabilizing the gate.
    event.shaped(
        Item.of('aether:aether_portal_frame', 1),
        [
            'XIG',
            'IHI',
            'GZY'
        ],
        {
            G: 'minecraft:glowstone',
            I: 'gtceu:ashen_ichor_ingot',
            Z: 'kubejs:zanite_ward_lattice',
            H: '#forge:tools/hammers',
            X: 'kubejs:zanite_sigil',
            Y: 'kubejs:zanite_channeling_vessel'
        }
    ).damageIngredient(Ingredient.of('#forge:tools/hammers'))

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
        mana: Mana.APPRENTICE
    })

    // Wizard Brain: Manaweaving Altar t1 (3rd distinct handler for this tier's item set).
    addMnaManaweavingRecipe(event, {
        output: 'kubejs:zanite_wizard_brain',
        items: ['botania:manasteel_ingot', 'irons_spellbooks:magic_cloth', 'hexcasting:charged_amethyst'],
        patterns: ['mna:circle', 'mna:square'],
        tier: 1
    })

    addComponentRecipe(event, 'kubejs:zanite_motive_core', [
        'gtceu:manasteel_rod', 'minecraft:glowstone_dust', 'botania:manasteel_ingot'
    ])
    addComponentRecipe(event, 'kubejs:zanite_channeling_vessel', [
        'botania:manasteel_ingot', 'magichem:admixture_energy', 'minecraft:glow_berries'
    ])
    addComponentRecipe(event, 'kubejs:zanite_ward_lattice', [
        'botania:manasteel_ingot', 'gtceu:amethyst_dust', 'minecraft:glowstone'
    ])
})
