ServerEvents.recipes(event => {
    event.remove({ id: 'botania:elven_trade/elementium' })
    event.remove({ id: 'botania:elven_trade/elementium_block' })
    event.remove({ id: 'botania:elven_trade/pixie_dust' })
    event.remove({ id: 'botania:elven_trade/dragonstone' })

    // weak_elementium_dust and elven_concentrate removed from existence entirely: both were
    // dead/duplicate Arcanist-only intermediates (Initiate's Spirit Infusion route already makes
    // Elementium's dust far cheaper; elven_concentrate was just a relabeled superheated purified
    // vinteum ingot with an extra crafting step). Every recipe below that consumed
    // elven_concentrate now takes mna:superheated_purified_vinteum_ingot directly.

    // elementite_dust -> raw_elementite -> elementium_ingot smelt dropped entirely: Initiate's
    // elven_trade route (3x ambrosia_touched_elementite -> 2x elementium_ingot) already makes
    // elementium cheaper, with no exclusive-to-Arcanist mechanic backing this route (same
    // addEldrinAltarRecipe/Manaweaving Altar helpers as everywhere else) and no bulk advantage
    // (this chain burns rubedo_touched_vinteum -- an Arcanist SIGNATURE intermediate -- for just
    // 1x elementium_ingot, worse than Initiate's cheap 3-dust combine for 2x). Per user direction
    // 2026-07-28: cut unless a later-tier route is genuinely cheaper/bulkier or handler-exclusive;
    // this was neither.

    // elven_source_lattice: dead ars_nouveau:source_gem x2 swapped for this tier's own new
    // intermediate, 2x gravitic residue.
    addEldrinAltarRecipe(event, {
        output: 'kubejs:kathar_lattice',
        items: ['mna:superheated_purified_vinteum_ingot', 'kubejs:resonant_zanite_crystal', 'kubejs:resonant_zanite_crystal', 'kubejs:katharic_residue', 'kubejs:katharic_residue'],
        affinity: 'arcane',
        power: LP.ARCANIST,
        tier: 4
    })

    // raw_mana -> source_gem x5: dead reagent and output. Dropped outright, no port needed.

    // Pixie Dust and Dragonstone moved to sorcerer.js 2026-08-04. They were only here because
    // Elementium used to be an Arcanist material; Elementium is Initiate-tier now, and Pixie Dust
    // gates the Gaia Pylon, which gates the Gaia Guardian, which is Sorcerer's only source of
    // botania:life_essence. Leaving them here made Sorcerer uncompletable.


    // Chimerite-Bound Dungeon Metal: wraps Blood Magic's own dungeon_metal with Thaumaturge's
    // signature material, so the Tier 5 altar upgrade below can't be reached by pure Blood Magic
    // grinding -- Thaumaturge tax for Arcanist's gate, per the Runic Altar precedent (GT/foreign
    // item gating a trunk-mod station). Also carries starforged_sigil -- corrected 2026-08-06:
    // station builds are a real sigil target (one-time, non-bulk craft), not an exemption.
    event.shapeless('kubejs:chimerite_bound_dungeon_metal', [
        'bloodmagic:dungeon_metal',
        'gtceu:starforged_chimerite_gem',
        'kubejs:starforged_sigil'
    ])

    // Blood Altar keeps its own LP tax unchanged -- Blood Magic's own identity mechanic, real
    // tier-4 altar requirement. Output renamed to an intermediate; a new Sublimation stage below
    // infuses it into the finished orb ("things you put materials INTO" -- not a bulk item, a
    // one-off you're enhancing). wisdom:3/tier:5 matches this file's own Rubedo wisdom-stone gate.
    event.remove({ id: 'bloodmagic:altar/archmagebloodorb' })
    addBloodAltarRecipe(event, {
        input: 'kubejs:chimerite_bound_dungeon_metal',
        output: 'kubejs:archmage_blood_core',
        upgradeLevel: 4,
        syphon: 80000,
        consumptionRate: 50,
        drainRate: 100
    })

    // Materia is the real archmagebloodorb signature, verified against MagiChem's own compat
    // distillation recipe (magichem-0.5.2.jar data/magichem/recipes/alchemical_distillation_fabrication/
    // bloodmagic/archmagebloodorb.json) -- infused with exactly what the orb would yield if
    // distilled, split across 2 stages by theme (blood/wizard vs spirit/potential/vessel).
    event.custom({
        type: 'magichem:sublimation',
        tier: 5,
        wisdom: 3,
        object: { item: 'bloodmagic:archmagebloodorb' },
        stages: [
            {
                experience: 200,
                components: [
                    { item: 'kubejs:archmage_blood_core' },
                    { item: 'kubejs:kathar_wizard_brain' },
                    { item: 'kubejs:kathar_ward_lattice' },
                    { item: 'botania:dragonstone' },
                    { item: 'gtceu:katharite_plate' }
                ],
                materia: [
                    { item: 'magichem:admixture_blood', count: 70 },
                    { item: 'magichem:admixture_wizard', count: 50 }
                ]
            },
            {
                experience: 250,
                components: [
                    { item: 'kubejs:kathar_channeling_vessel' },
                    { item: 'kubejs:kathar_motive_core' },
                    { item: 'botania:pixie_dust' },
                    { item: 'botania:mana_diamond' }
                ],
                materia: [
                    { item: 'magichem:admixture_spirit', count: 60 },
                    { item: 'magichem:admixture_potential', count: 58 },
                    { item: 'magichem:admixture_vessel', count: 32 }
                ]
            }
        ]
    })

    // --- Rubedo Core: Arcanist signature material ---
    // Magic spine stays GT-free: vanilla combine, real Blood Magic Alchemy Table, real Occultism
    // ritual, plain furnace smelt (katharite has no blastTemp on purpose).
    //
    // "Grand Circle of Fabrication + worn Wisdom Stone" per the design spec doesn't work for a
    // custom output item -- verified against MagiChem's real recipes: Circle of Fabrication runs
    // magichem:distillation_fabrication in reverse (materia -> item), which only resolves for one
    // of the mod's own ~6,600 fixed item<->materia signatures, same mechanical wall Phase 6 (Alembic)
    // and Phase 7 (Fusery) already hit. Vanilla combine instead -- magichem:essentia_rubedo is a
    // real base Essentia (confirmed in the jar's lang file) and keeps the Rubedo theme intact
    // without needing the Wisdom Stone equipped/consumed at all.
    event.shapeless('kubejs:clarified_vinteum', ['mna:superheated_purified_vinteum_ingot', 'magichem:essentia_rubedo'])

    addAlchemyTableRecipe(event, {
        output: 'kubejs:katharic_residue',
        input: ['kubejs:clarified_vinteum', 'bloodmagic:sand_hellforged'],
        syphon: LP.ARCANIST
    })

    addOccultismRitual(event, {
        name: 'katharite_core',
        tier: 'marid',
        output: 'kubejs:katharite_core',
        duration: 150,
        ingredients: [
            { item: 'kubejs:katharic_residue' },
            { item: 'occultism:afrit_essence' }
        ]
    })

    event.smelting('gtceu:katharite_ingot', 'kubejs:katharite_core')

    // Shortcut (Sage+, Philosopher's Stone worn): Alembic/Distillery fabricates the ingot straight
    // from materia, real wisdom-field gate (philosophers_stone, wisdom:4).
    event.custom({
        type: 'magichem:distillation_fabrication',
        wisdom: 4,
        categories: 1,
        output_rate: 1.0,
        batch_size: 3,
        object: { item: 'gtceu:katharite_ingot' },
        components: [
            { item: 'magichem:essentia_rubedo', count: 60 },
            { item: 'magichem:admixture_potential', count: 35 },
            { item: 'magichem:essentia_conceptual', count: 30 }
        ]
    })

    // --- Microcrafting: Arcanist circuit + components ---
    // Circuit built through 2 real handlers: Alchemy Table -> furnace.
    addAlchemyTableRecipe(event, {
        output: 'kubejs:kathar_sigil_blank',
        input: ['gtceu:katharite_ingot', 'kubejs:kathar_lattice', 'botania:dragonstone'],
        syphon: LP.ARCANIST,
        ticks: 200
    })

    event.smelting('kubejs:kathar_sigil', 'kubejs:kathar_sigil_blank')

    // Wizard Brain: Manaweaving Altar (3rd distinct handler for this tier's item set).
    // Grammar: thought vessel (akashic bookshelf -- stored, queryable knowledge) + animating
    // agent (pixie dust).
    addMnaManaweavingRecipe(event, {
        output: 'kubejs:kathar_wizard_brain',
        items: ['gtceu:katharite_ingot', 'hexcasting:akashic_bookshelf', 'botania:pixie_dust', 'mna:superheated_purified_vinteum_ingot'],
        patterns: ['mna:diamond', 'mna:knot3'],
        tier: 3
    })
    addMnaArcaneFurnaceRecipe(event, {
        input: 'gtceu:katharite_rod',
        output: 'kubejs:kathar_motive_core',
        burnTime: 800,
        tier: 4
    })

    // Channeling Vessel: hellforged sand scours the bucket out from the inside.
    addArcRecipe(event, {
        input: 'gtceu:concepts_bucket',
        tool: '#forge:tools/wrenches',
        output: 'kubejs:kathar_channeling_vessel',
        bonusOutputs: [{ item: 'extrabotany:photonium_ingot', chance: 0.2 }]
    })

    // Ward Lattice: Marid-bound. Shadowium wants a spirit strong enough to hold it still.
    addOccultismRitual(event, {
        name: 'kathar_ward_lattice',
        tier: 'marid',
        output: 'kubejs:kathar_ward_lattice',
        duration: 180,
        ingredients: [
            { item: 'gtceu:katharite_plate' },
            { item: 'extrabotany:shadowium_ingot' },
            { item: 'minecraft:netherite_scrap' },
            { item: 'occultism:afrit_essence' }
        ]
    })

    // Wisdom Stone: Rubedo (Ritual of the Balanced Scales, Alchemical Nexus). Re-themed onto
    // Arcanist's own material line. Materia kept verbatim from the mod's own rubedo recipe
    // (magichem-0.5.2.jar data/magichem/recipes/alchemical_sublimation/magichem/wisdom_stone_rubedo.json).
    // Wizard Brain in stage 1: a worn Wisdom Stone is automated magical reasoning.
    // Jar's own recipe stays otherwise loaded alongside ours (custom serializer, not overwritten
    // by a new object -> id: removal required).
    event.remove({ id: 'magichem:alchemical_sublimation/magichem/wisdom_stone_rubedo' })
    event.custom({
        type: 'magichem:sublimation',
        tier: 5,
        wisdom: 3,
        object: { item: 'magichem:wisdom_stone_rubedo' },
        stages: [
            {
                experience: 135,
                components: [
                    { item: 'kubejs:kathar_lattice' },
                    { item: 'kubejs:katharic_residue' },
                    { item: 'kubejs:kathar_wizard_brain' }
                ],
                materia: [
                    { item: 'magichem:admixture_potential', count: 100 },
                    { item: 'magichem:admixture_sorcery', count: 70 },
                    { item: 'magichem:admixture_violence', count: 70 },
                    { item: 'magichem:essentia_rubedo', count: 50 }
                ]
            },
            {
                experience: 180,
                components: [
                    { item: 'magichem:ambrosia' },
                    { item: 'magichem:fork_of_the_gulaporrigo' },
                    { item: 'magichem:nectar' }
                ],
                materia: [
                    { item: 'magichem:admixture_alcohol', count: 70 },
                    { item: 'magichem:admixture_delight', count: 70 },
                    { item: 'magichem:admixture_gourmet', count: 70 },
                    { item: 'magichem:admixture_satiety', count: 70 }
                ]
            },
            {
                experience: 225,
                components: [
                    { item: 'botania:pixie_dust' },
                    { item: 'botania:dragonstone' },
                    { item: 'botania:mana_diamond' }
                ],
                materia: [
                    { item: 'magichem:admixture_demon', count: 70 },
                    { item: 'magichem:admixture_exanimate', count: 70 },
                    { item: 'magichem:admixture_fey', count: 70 },
                    { item: 'magichem:admixture_wizard', count: 70 }
                ]
            },
            {
                experience: 270,
                components: [
                    { item: 'kubejs:clarified_vinteum' },
                    { item: 'magichem:wisdom_stone_citrinitas' },
                    { item: 'kubejs:clarified_vinteum' }
                ],
                materia: [
                    { item: 'magichem:admixture_change', count: 100 },
                    { item: 'magichem:admixture_healing', count: 70 },
                    { item: 'magichem:admixture_blood', count: 70 },
                    { item: 'magichem:essentia_rubedo', count: 40 }
                ]
            }
        ]
    })
})
