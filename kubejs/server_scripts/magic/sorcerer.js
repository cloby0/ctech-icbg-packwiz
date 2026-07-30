ServerEvents.recipes(event => {
    // apprentice_spell_book_upgrade: dead reagent+output, both Ars-native. MNA supplies its own
    // tiered spellcasting progression; dropped outright, no port.

    event.remove({ id: 'reliquary:glowing_water' })
    event.remove({ id: 'reliquary:glowing_water_from_potion_vial' })

    // Channeling Vessel: glowing water is a bottled/flowing magical fluid.
    event.shaped(
        Item.of('reliquary:glowing_water', 3),
        [
            '  X',
            ' B ',
            'VA '
        ],
        {
            A: Item.of('minecraft:potion', '{Potion:"minecraft:strong_healing"}'),
            B: 'gtceu:holy_silver_dust',
            V: 'kubejs:gravitic_channeling_vessel',
            X: 'kubejs:gravitic_sigil'
        }
    )

    // basic_spell_turret: same open gap as 04-initiate.md's magical_receiver (Ars-native item,
    // no MNA/Blood Magic equivalent, ars_nouveau:source_jar ingredient already dead too).
    // Not re-solved here -- dropped, matching the Initiate-tier decision to retire that line.

    event.custom({
        "type": "aether:freezing",
        "ingredient": { "item": "aether_redux:raw_gravitite" },
        "result": { "item": "kubejs:frozen_raw_gravitite" },
        "cookingtime": 400,
        "experience": 0.0
    })

    event.custom({
        "type": "aether:enchanting",
        "ingredient": { "item": "kubejs:frozen_raw_gravitite" },
        "result": { "item": "kubejs:altar_charged_gravitite" },
        "cookingtime": 600,
        "experience": 0.8
    })

    addOccultismRitual(event, {
        name: 'resonant_gravitite_core',
        tier: 'afrit',
        output: 'kubejs:resonant_gravitite_core',
        duration: 120,
        ingredients: [
            { item: 'kubejs:altar_charged_gravitite' },
            { item: 'gtceu:holy_silver_rod' },
            { item: 'gtceu:holy_silver_rod' },
            { item: 'kubejs:resonant_zanite_crystal' },
            { item: 'kubejs:resonant_zanite_crystal' },
            { item: 'occultism:afrit_essence' }
        ]
    })

    // MysticalAg difficulty-cliff fix, part 1 (seeds): ars_nouveau:magebloom_crop reagent was
    // dead regardless of the pedestal issue (same open fiber question as 03/04) -- swapped to
    // wheat_seeds, matching output theme. Default recipe drops the hard _agglomeratio
    // requirement (replaced with a third essence tag + a plain tier-appropriate item); a second,
    // MysticalAg-based alternate keeps _agglomeratio, costed cheaper as the reward-for-investment
    // route. Both coexist, neither replaces the other.
    const elementFlavor = { fire: 'minecraft:netherrack', water: 'minecraft:prismarine_shard', earth: 'minecraft:dirt', air: 'minecraft:feather' }

    Object.keys(elementFlavor).forEach(element => {
        // Simple ingredient-swap crafts, not ritual-scale -- moved to the Manaweaving Altar.
        addMnaManaweavingRecipe(event, {
            output: `mysticalagriculture:${element}_seeds`,
            items: ['minecraft:wheat_seeds', `#kubejs:${element}_essences`, `#kubejs:${element}_essences`, `#kubejs:${element}_essences`, elementFlavor[element]],
            patterns: ['mna:square', 'mna:circle'],
            tier: 2
        })

        addMnaManaweavingRecipe(event, {
            output: `mysticalagriculture:${element}_seeds`,
            items: ['minecraft:wheat_seeds', `#kubejs:${element}_essences`, `mysticalagriculture:${element}_agglomeratio`, `mysticalagriculture:${element}_agglomeratio`],
            patterns: ['mna:circle', 'mna:diamond'],
            tier: 2
        })

        event.remove({ id: `mysticalagriculture:seed/infusion/${element}` })
    })

    // Prima Materia rework 2026-07-29: was pure Occultism ritual, zero MagiChem tie despite
    // being the pack's explicit "classical alchemy" nod and MagiChem being the actual classical
    // alchemy mod. Chaos Essence (the undifferentiated pre-elemental state) is now literally
    // alchemically fabricated -- Circle of Fabrication runs the distillation_fabrication recipe
    // type in reverse (materia -> item, same recipe Alembic uses item -> materia). Components
    // are the 4 unseparated classical elements plus nigredo, the Magnum Opus's first/blackening
    // stage -- real MagiChem essentia (magichem.md), not decorative.
    event.custom({
        type: 'magichem:distillation_fabrication',
        wisdom: 0,
        categories: 1,
        output_rate: 1.0,
        batch_size: 1,
        object: { item: 'kubejs:chaos_essence' },
        components: [
            { item: 'magichem:essentia_nigredo', count: 8 },
            { item: 'magichem:essentia_fire', count: 4 },
            { item: 'magichem:essentia_water', count: 4 },
            { item: 'magichem:essentia_earth', count: 4 },
            { item: 'magichem:essentia_air', count: 4 }
        ]
    }).id('kubejs:distillation_fabrication/chaos_essence')

    // Old ritual's real gate (GT ingot + demon wills) moves here, onto the alchemical step
    // instead of an Occultism ritual -- admixture_potential is Prima Materia's classical
    // definition (pure undifferentiated potential), a real MagiChem admixture, not invented flavor.
    addAlchemyTableRecipe(event, {
        output: 'kubejs:prima_materia_seed',
        input: ['kubejs:chaos_essence', 'gtceu:holy_silver_ingot', 'magichem:admixture_potential'],
        syphon: LP.SORCERER,
        upgradeLevel: 4
    })

    // afrit_essence already used once in this file (resonant_gravitite_core above) -- a
    // second use here puts it in the Prima Materia recipe itself, this tier's signature material.
    // Uses afrit tier, not marid: prima_materia_ingot IS the marid gate item in occultism.js,
    // so gating its own ritual behind marid would be circular.
    // admixture_philosophers_concoction is MagiChem's real Philosopher's Stone-precursor
    // admixture -- the ritual is now the final occult binding of an already-alchemical material,
    // not the sole source of "alchemy" flavor.
    addOccultismRitual(event, {
        name: 'prima_materia_ingot',
        tier: 'afrit',
        output: 'gtceu:prima_materia_ingot',
        duration: 150,
        ingredients: [
            { item: 'kubejs:prima_materia_seed' },
            { item: 'kubejs:element_attunement_stone' },
            { item: 'magichem:admixture_philosophers_concoction' },
            { item: 'occultism:afrit_essence' }
        ]
    })

    // raw_mana -> source_gem: dead output, source material is gone. Dropped outright.

    addMnaManaweavingRecipe(event, {
        output: { item: 'irons_spellbooks:pyrium_ingot', count: 4 },
        items: ['kubejs:chaos_essence', '#kubejs:fire_essences', '#kubejs:fire_essences', '#kubejs:air_essences', '#kubejs:air_essences'],
        patterns: ['mna:triangle', 'mna:diamond'],
        tier: 2
    })

    addMnaManaweavingRecipe(event, {
        output: { item: 'minecraft:experience_bottle', count: 8 },
        items: ['kubejs:chaos_essence', '#kubejs:water_essences', '#kubejs:water_essences', '#kubejs:earth_essences', '#kubejs:earth_essences'],
        patterns: ['mna:circle', 'mna:square'],
        tier: 2
    })

    // --- Gaia Ingot: Sorcerer signature material, gravitite chain. Botania's ladder ends here. ---
    // Life Essence dependency: botania:life_essence is a Gaia Guardian boss drop (sage.js also
    // has its own craftable route, positioned after Sorcerer in the tier ladder -- left as-is).
    // Per user direction, the Gaia Guardian fight is now expected at Sorcerer tier; this chain's
    // last step assumes the player has fought it, same as any other boss-gated material.
    // Magic spine stays GT-free: Occultism crushing, same pattern used pack-wide -- no GT machine.
    event.custom({
        type: 'occultism:crushing',
        ingredient: { item: 'aether_redux:gravitite_ingot' },
        result: { item: 'kubejs:gravitite_shavings' },
    }).id('kubejs:crushing/gravitite_ingot_to_shavings')

    // upgradeLevel 4 IS the Master Orb requirement -- a BM Alchemy Table only reaches T4 with
    // Master-tier rune investment, so the orb itself doesn't need to be a consumed ingredient here.
    // magichem:admixture_mountains is a real MagiChem admixture (confirmed in the jar lang file)
    // -- heavy/dense stone theme fits gravitite. Per user direction 2026-07-28: make MagiChem
    // load-bearing, not just a background essence tag.
    addAlchemyTableRecipe(event, {
        output: 'kubejs:bound_gravitite',
        input: ['kubejs:gravitite_shavings', 'magichem:admixture_mountains'],
        syphon: LP.SORCERER,
        upgradeLevel: 4
    })

    event.shapeless('kubejs:gravity_bound_life_essence', ['kubejs:bound_gravitite', 'botania:life_essence'])

    addTerraPlateRecipe(event, {
        result: 'botania:gaia_ingot',
        mana: Mana.SORCERER,
        ingredients: ['kubejs:gravity_bound_life_essence']
    })

    // Shortcut (Alchemist+): Alchemist's Soul Forge produces the pre-terra-plate feed directly,
    // batch output. Drain cost is the gate -- no stone exists at Alchemist yet.
    addSoulForgeRecipe(event, {
        output: { item: 'kubejs:gravity_bound_life_essence', count: 2 },
        inputs: ['aether_redux:gravitite_ingot', 'botania:life_essence'],
        drain: 20,
        minimumDrain: 400
    })

    // --- Microcrafting: Sorcerer circuit + components ---
    // Circuit built through 2 real handlers: Alchemy Table -> Terra Plate.
    addAlchemyTableRecipe(event, {
        output: 'kubejs:gravitic_sigil_blank',
        input: ['botania:gaia_ingot', 'kubejs:resonant_gravitite_core', 'kubejs:chaos_essence'],
        syphon: LP.SORCERER,
        ticks: 200
    })

    addTerraPlateRecipe(event, {
        result: 'kubejs:gravitic_sigil',
        mana: Mana.SORCERER,
        ingredients: ['kubejs:gravitic_sigil_blank', 'kubejs:element_attunement_stone']
    })

    // Wizard Brain: Manaweaving Altar t2 (3rd distinct handler for this tier's item set).
    addMnaManaweavingRecipe(event, {
        output: 'kubejs:gravitic_wizard_brain',
        items: ['botania:gaia_ingot', 'kubejs:element_attunement_stone', 'occultism:afrit_essence'],
        patterns: ['mna:knot2', 'mna:diamond'],
        tier: 2
    })

    // Center item = role signal: rod (kinetic) / ingot (flow) / plate (containment), anchored on
    // the tier's actual signature (Gaia Ingot) -- prima_materia is a parallel line, ring flavor only.
    addComponentRecipe(event, 'kubejs:gravitic_motive_core', [
        'gtceu:gaia_spirit_rod', 'kubejs:resonant_gravitite_core', 'irons_spellbooks:pyrium_ingot'
    ])
    addComponentRecipe(event, 'kubejs:gravitic_channeling_vessel', [
        'botania:gaia_ingot', 'kubejs:chaos_essence', 'mysticalagriculture:fire_essence'
    ])
    addComponentRecipe(event, 'kubejs:gravitic_ward_lattice', [
        'gtceu:gaia_spirit_plate', 'bloodmagic:basemonstersoul_steadfast', 'gtceu:prima_materia_plate'
    ])

    // Wisdom Stone: Albedo (Ritual of the Balanced Scales, Alchemical Nexus). Re-themed onto
    // Sorcerer's own material line. Materia kept verbatim from the mod's own albedo recipe
    // (magichem-0.5.2.jar data/magichem/recipes/alchemical_sublimation/magichem/wisdom_stone_albedo.json).
    // Jar's own recipe stays otherwise loaded alongside ours (custom serializer, not overwritten
    // by a new object -> id: removal required).
    event.remove({ id: 'magichem:alchemical_sublimation/magichem/wisdom_stone_albedo' })
    event.custom({
        type: 'magichem:sublimation',
        tier: 3,
        wisdom: 1,
        object: { item: 'magichem:wisdom_stone_albedo' },
        stages: [
            {
                experience: 90,
                components: [
                    { item: 'kubejs:resonant_gravitite_core' },
                    { item: 'kubejs:element_attunement_stone' },
                    { item: 'kubejs:gravitic_sigil' }
                ],
                materia: [
                    { item: 'magichem:admixture_potential', count: 100 },
                    { item: 'magichem:admixture_breath', count: 55 },
                    { item: 'magichem:essentia_conceptual', count: 70 },
                    { item: 'magichem:essentia_albedo', count: 50 }
                ]
            },
            {
                experience: 120,
                components: [
                    { item: 'magichem:radiant_rose' },
                    { item: 'magichem:abjuration_necrotic' },
                    { item: 'magichem:slumbering_idol' }
                ],
                materia: [
                    { item: 'magichem:admixture_alcohol', count: 55 },
                    { item: 'magichem:admixture_firmament', count: 55 },
                    { item: 'magichem:admixture_healing', count: 55 },
                    { item: 'magichem:admixture_light', count: 55 }
                ]
            },
            {
                experience: 150,
                components: [
                    { item: 'gtceu:prima_materia_ingot' },
                    { item: 'magichem:wisdom_stone_nigredo' },
                    { item: 'gtceu:prima_materia_ingot' }
                ],
                materia: [
                    { item: 'magichem:admixture_change', count: 70 },
                    { item: 'magichem:admixture_acid', count: 55 },
                    { item: 'magichem:admixture_realm', count: 55 },
                    { item: 'magichem:essentia_albedo', count: 40 }
                ]
            }
        ]
    })
})
