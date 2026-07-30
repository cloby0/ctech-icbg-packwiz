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
        output: 'kubejs:elven_source_lattice',
        items: ['mna:superheated_purified_vinteum_ingot', 'kubejs:resonant_zanite_crystal', 'kubejs:resonant_zanite_crystal', 'kubejs:gravitic_residue', 'kubejs:gravitic_residue'],
        affinity: 'arcane',
        power: LP.ARCANIST
    })

    // raw_mana -> source_gem x5: dead reagent and output. Dropped outright, no port needed.

    addMnaManaweavingRecipe(event, {
        output: { item: 'botania:pixie_dust', count: 3 },
        items: ['botania:mana_pearl', 'mna:superheated_purified_vinteum_ingot', 'mna:superheated_purified_vinteum_ingot', '#kubejs:air_essences', '#kubejs:air_essences'],
        patterns: ['mna:star', 'mna:diamond'],
        tier: 4
    })

    addMnaManaweavingRecipe(event, {
        output: { item: 'botania:dragonstone', count: 2 },
        items: ['botania:mana_diamond', 'mna:superheated_purified_vinteum_ingot', 'mna:superheated_purified_vinteum_ingot', '#kubejs:earth_essences', '#kubejs:water_essences'],
        patterns: ['mna:square', 'mna:diamond'],
        tier: 4
    })


    // --- Rubedo Core: Arcanist signature material ---
    // Magic spine stays GT-free: vanilla combine, real Blood Magic Alchemy Table, real Occultism
    // ritual, plain furnace smelt (rubedo_core has no blastTemp on purpose).
    //
    // "Grand Circle of Fabrication + worn Wisdom Stone" per the design spec doesn't work for a
    // custom output item -- verified against MagiChem's real recipes: Circle of Fabrication runs
    // magichem:distillation_fabrication in reverse (materia -> item), which only resolves for one
    // of the mod's own ~6,600 fixed item<->materia signatures, same mechanical wall Phase 6 (Alembic)
    // and Phase 7 (Fusery) already hit. Vanilla combine instead -- magichem:essentia_rubedo is a
    // real base Essentia (confirmed in the jar's lang file) and keeps the Rubedo theme intact
    // without needing the Wisdom Stone equipped/consumed at all.
    event.shapeless('kubejs:rubedo_touched_vinteum', ['mna:superheated_purified_vinteum_ingot', 'magichem:essentia_rubedo'])

    addAlchemyTableRecipe(event, {
        output: 'kubejs:gravitic_residue',
        input: ['kubejs:rubedo_touched_vinteum', 'bloodmagic:sand_hellforged'],
        syphon: LP.ARCANIST
    })

    addOccultismRitual(event, {
        name: 'bound_gravitic_core',
        tier: 'marid',
        output: 'kubejs:bound_gravitic_core',
        duration: 150,
        ingredients: [
            { item: 'kubejs:gravitic_residue' },
            { item: 'occultism:afrit_essence' }
        ]
    })

    event.smelting('gtceu:rubedo_core_ingot', 'kubejs:bound_gravitic_core')

    // Shortcut (Sage+, Philosopher's Stone worn): Alembic/Distillery fabricates the ingot straight
    // from materia, real wisdom-field gate (philosophers_stone, wisdom:4).
    event.custom({
        type: 'magichem:distillation_fabrication',
        wisdom: 4,
        categories: 1,
        output_rate: 1.0,
        batch_size: 3,
        object: { item: 'gtceu:rubedo_core_ingot' },
        components: [
            { item: 'magichem:essentia_rubedo', count: 60 },
            { item: 'magichem:admixture_potential', count: 35 },
            { item: 'magichem:essentia_conceptual', count: 30 }
        ]
    })

    // --- Microcrafting: Arcanist circuit + components ---
    // Circuit built through 2 real handlers: Alchemy Table -> furnace.
    addAlchemyTableRecipe(event, {
        output: 'kubejs:rubedo_array_core',
        input: ['gtceu:rubedo_core_ingot', 'kubejs:elven_source_lattice', 'botania:dragonstone'],
        syphon: LP.ARCANIST,
        ticks: 200
    })

    event.smelting('kubejs:rubedo_array', 'kubejs:rubedo_array_core')

    // Wizard Brain: Manaweaving Altar (3rd distinct handler for this tier's item set).
    addMnaManaweavingRecipe(event, {
        output: 'kubejs:rubedo_wizard_brain',
        items: ['gtceu:rubedo_core_ingot', 'mna:superheated_purified_vinteum_ingot', 'botania:pixie_dust'],
        patterns: ['mna:diamond', 'mna:knot3'],
        tier: 3
    })

    addComponentRecipe(event, 'kubejs:rubedo_motive_core', [
        'gtceu:rubedo_core_rod', 'extrabotany:aerialite_ingot', 'gtceu:rubedo_core_ingot'
    ])
    addComponentRecipe(event, 'kubejs:rubedo_channeling_vessel', [
        'gtceu:rubedo_core_ingot', 'mna:superheated_purified_vinteum_ingot', 'extrabotany:photonium_ingot'
    ])
    addComponentRecipe(event, 'kubejs:rubedo_ward_lattice', [
        'gtceu:rubedo_core_plate', 'extrabotany:shadowium_ingot', 'botania:dragonstone'
    ])

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
                    { item: 'kubejs:elven_source_lattice' },
                    { item: 'kubejs:gravitic_residue' },
                    { item: 'kubejs:rubedo_wizard_brain' }
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
                    { item: 'kubejs:rubedo_touched_vinteum' },
                    { item: 'magichem:wisdom_stone_citrinitas' },
                    { item: 'kubejs:rubedo_touched_vinteum' }
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
