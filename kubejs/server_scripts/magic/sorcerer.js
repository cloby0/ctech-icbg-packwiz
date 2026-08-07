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

    // Soul Forge (Hellfire Forge) block build: was 100% vanilla, letting a player reach
    // Alchemist's core station via pure Blood Magic grinding. Moved to Sublimation 2026-08-06 --
    // "infuse an object with Materia to enhance it" (in-game codex) fits the pack's core alchemy
    // station better than a bare shaped recipe. Stage 1 = physical assembly, stage 2 = empowerment
    // with this tier's own full material set (sigil/vessel/lattice/core -- no wizard_brain, that's
    // reserved pack-wide for worn/wielded gear, not stations). Materia flavor reused from this
    // file's own wisdom_stone_albedo recipe. wisdom: 1 / tier: 3 matches Sorcerer's own gate.
    event.remove({ id: 'bloodmagic:soul_forge' })
    event.custom({
        type: 'magichem:sublimation',
        tier: 3,
        wisdom: 1,
        object: { item: 'bloodmagic:soulforge' },
        stages: [
            {
                experience: 60,
                components: [
                    { item: 'minecraft:iron_block' },
                    { item: 'minecraft:iron_ingot' },
                    { item: 'minecraft:iron_ingot' },
                    { item: 'bloodmagic:blankslate' },
                    { item: 'minecraft:stone' }
                ],
                materia: [
                    { item: 'magichem:admixture_potential', count: 70 },
                    { item: 'magichem:admixture_breath', count: 40 },
                    { item: 'magichem:essentia_conceptual', count: 55 }
                ]
            },
            {
                experience: 90,
                components: [
                    { item: 'gtceu:gaia_spirit_dust' },
                    { item: 'kubejs:gravitic_sigil' },
                    { item: 'kubejs:gravitic_channeling_vessel' },
                    { item: 'kubejs:gravitic_ward_lattice' },
                    { item: 'kubejs:gravitic_motive_core' }
                ],
                materia: [
                    { item: 'magichem:essentia_albedo', count: 50 }
                ]
            }
        ]
    })

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

    // grand_victory_medal: Aether Redux's Valkyrie Queen drop. Initiate's Skyforged line already
    // sets up the Queen fight as a milestone ("Victory Medals are proof required to fight the
    // Valkyrie Queen") but nothing paid off actually killing her -- this closes that loop one
    // tier later, alongside the gravitite this recipe already runs on.
    // Not farmable like regular victory medals -- resonant_gravitite_core feeds gravitic_sigil,
    // which artifacts.js consumes dozens of times, so the medal itself must be renewable once you
    // have one. Terra Plate duplication (same mechanic Thaumaturge uses for mana_diamond/mana_pearl).
    addTerraPlateRecipe(event, {
        result: { item: 'aether_redux:grand_victory_medal', count: 2 },
        mana: Agglomeration.SORCERER,
        ingredients: ['aether_redux:grand_victory_medal', 'botania:life_essence']
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
            { item: 'occultism:afrit_essence' },
            { item: 'aether_redux:grand_victory_medal' }
        ]
    })

    // MysticalAgriculture removed from the pack 2026-07-31 -- the element-seed farming loop
    // (seeds -> plant -> harvest essence) this fed was entirely MysticalAg-native, no replacement.
    // The Air/Earth/Water/Fire Seed and Essence quests in sorcerer.snbt are stale until the
    // questbook rebuild replaces this cluster.

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
        upgradeLevel: 2
    })

    // element_attunement_stone's only source pack-wide is aether:sun_spirit loot (lootTables.js) --
    // no crafting recipe exists anywhere. It's consumed 4x in this file alone, including gating
    // prima_materia_ingot (the Marid spirit-summon item), and gravitic_sigil/wizard_brain feed
    // dozens of artifacts.js recipes downstream. Same bottleneck class as grand_victory_medal --
    // Terra Plate duplication makes it renewable once you've killed the Sun Spirit once.
    addTerraPlateRecipe(event, {
        result: { item: 'kubejs:element_attunement_stone', count: 2 },
        mana: Agglomeration.SORCERER,
        ingredients: ['kubejs:element_attunement_stone', 'minecraft:glowstone_dust']
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

    // --- Pixie Dust / Dragonstone: moved here from arcanist.js 2026-08-04 ---
    // Botania's own elven_trade recipes for both are removed (arcanist.js). Pixie Dust is a hard
    // requirement of the Gaia Pylon (mana_pylon + 2x elementium_ingot + 2x pixie_dust), the Gaia
    // Pylon is a hard requirement of the Ritual of Gaia, and the Guardian of Gaia is this pack's
    // only source of botania:life_essence -- which this tier's own Gaia Spirit Ingot chain needs.
    // Gating them at Arcanist made Sorcerer uncompletable. Superheated purified vinteum swapped for
    // plain purified vinteum: superheating is Arcanist-tier Runeforge work.
    addMnaManaweavingRecipe(event, {
        output: { item: 'botania:pixie_dust', count: 3 },
        items: ['botania:mana_pearl', 'mna:purified_vinteum_ingot', 'mna:purified_vinteum_ingot', '#kubejs:air_essences', '#kubejs:air_essences'],
        patterns: ['mna:split_triangle', 'mna:knot4'],
        tier: 3
    })

    addMnaManaweavingRecipe(event, {
        output: { item: 'botania:dragonstone', count: 2 },
        items: ['botania:mana_diamond', 'mna:purified_vinteum_ingot', 'mna:purified_vinteum_ingot', '#kubejs:earth_essences', '#kubejs:water_essences'],
        patterns: ['mna:split_triangle', 'mna:knot3'],
        tier: 3
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
        result: { item: 'gtceu:gravitite_dust' },
    }).id('kubejs:crushing/gravitite_ingot_to_dust')

    // upgradeLevel is a 0-indexed BLOOD ORB tier, not an altar tier: 0 Weak, 1 Apprentice,
    // 2 Magician, 3 Master, 4 Archmage (proven by bloodmagic's own altar orb recipes -- weakbloodorb
    // is upgradeLevel 0 at a T1 altar, archmagebloodorb is 4 at a T5 altar). This was 4, which
    // demanded an Archmage orb and therefore a Tier-5 altar and a Demon Realm trip, at the 5th of
    // 9 magic tiers. Now 2 = Magician orb = Tier-3 altar, per the pack's altar/tier map.
    // magichem:admixture_mountains is a real MagiChem admixture (confirmed in the jar lang file)
    // -- heavy/dense stone theme fits gravitite. Per user direction 2026-07-28: make MagiChem
    // load-bearing, not just a background essence tag.
    addAlchemyTableRecipe(event, {
        output: 'kubejs:bound_gravitite',
        input: ['gtceu:gravitite_dust', 'magichem:admixture_mountains'],
        syphon: LP.SORCERER,
        upgradeLevel: 2
    })

    event.shapeless('kubejs:gravity_bound_life_essence', ['kubejs:bound_gravitite', 'botania:life_essence'])

    addTerraPlateRecipe(event, {
        result: 'botania:gaia_ingot',
        mana: Agglomeration.SORCERER,
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
        mana: Agglomeration.SORCERER,
        ingredients: ['kubejs:gravitic_sigil_blank', 'kubejs:element_attunement_stone']
    })

    // Wizard Brain: Manaweaving Altar t2 (3rd distinct handler for this tier's item set).
    // Grammar: thought vessel (spell book) + animating agent (afrit essence).
    addMnaManaweavingRecipe(event, {
        output: 'kubejs:gravitic_wizard_brain',
        items: ['botania:gaia_ingot', 'occultism:dictionary_of_spirits', 'occultism:afrit_essence', 'kubejs:element_attunement_stone'],
        patterns: ['mna:knot2', 'mna:diamond'],
        tier: 2
    })
    addOccultismRitual(event, {
        name: 'gravitic_motive_core',
        tier: 'afrit',
        output: 'kubejs:gravitic_motive_core',
        duration: 120,
        ingredients: [
            { item: 'gtceu:gaia_spirit_rod' },
            { item: 'kubejs:resonant_gravitite_core' },
            { item: 'minecraft:piston' },
            { item: 'occultism:afrit_essence' }
        ]
    })

    // Channeling Vessel: runic work, not a grid craft.
    addRunicAltarRecipe(event, {
        output: { item: 'kubejs:gravitic_channeling_vessel' },
        mana: RunicAltar.SORCERER,
        ingredients: [
            { item: 'botania:gaia_ingot' },
            { item: 'botania:mana_bottle' },
            { item: 'kubejs:chaos_essence' },
            { item: 'botania:rune_water' }
        ]
    })

    // Ward Lattice: Steadfast Will is the defensive aspect -- dissolved into the plate.
    addAlchemyTableRecipe(event, {
        output: 'kubejs:gravitic_ward_lattice',
        input: ['gtceu:gaia_spirit_plate', 'bloodmagic:basemonstersoul_steadfast', 'gtceu:prima_materia_plate', 'botania:rune_earth'],
        syphon: LP.SORCERER,
        upgradeLevel: 2
    })

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
