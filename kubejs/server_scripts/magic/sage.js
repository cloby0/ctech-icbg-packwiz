ServerEvents.recipes(event => {

    // Wilden/Primal alt-spine retired per user direction 2026-07-28: all four Ars-native
    // Wilden/Drygmy mob-drop items (wilden_tribute/horn/spike, drygmy_shard) have no MNA/Blood
    // Magic/Malum equivalent. wilden_alloy_dust and the wilden_tribute x2 duplication recipe are
    // dropped outright, no replacement. primal_latex_billet/abstract_elastomer below (the
    // load-bearing half feeding uevAndEgoware.js) get new non-Ars ingredients instead of being
    // dropped, since abstract_elastomer_ingot is a real UEV tech-tree bridge material.

    addRunicAltarRecipe(event, {
        output: { item: 'kubejs:vengeful_wraith' },
        mana: RunicAltar.SAGE,
        ingredients: [
            { item: 'botania:life_essence' },
            { item: 'botania:rune_wrath' },
            { item: 'botania:rune_pride' },
            { item: 'gtceu:elementium_bolt' },
            { item: 'gtceu:elementium_bolt' },
            { item: 'gtceu:elementium_bolt' },
            { item: 'gtceu:elementium_bolt' }
        ]
    })

    // MysticalAgriculture alternate route removed from the pack 2026-07-31; vanilla mob-drop
    // route is now the only route. soul_gem renewable via occultism.js's mob-capture ritual loop.
    addEldrinAltarRecipe(event, {
        output: 'kubejs:bound_astral_soul',
        items: ['kubejs:vengeful_wraith', 'minecraft:wither_skeleton_skull', 'minecraft:ender_pearl', 'minecraft:ender_pearl', 'occultism:soul_gem'],
        affinity: 'ender',
        power: 2 * LP.SAGE,
        tier: 5
    })

    addEldrinAltarRecipe(event, {
        output: 'kubejs:boundless_astral_ingot',
        items: [
            'kubejs:bound_astral_soul',
            'botania:elementium_block', 'botania:elementium_block',
            'botania:elementium_block', 'botania:elementium_block',
            'botania:elementium_block', 'botania:elementium_block',
            'botania:elementium_block', 'botania:elementium_block'
        ],
        affinity: 'earth',
        power: LP.SAGE,
        tier: 5
    })

    // Channeling Vessel: a blood core's whole theme is flowing vitality.
    addEldrinAltarRecipe(event, {
        output: 'kubejs:astral_blood_core',
        items: [
            'botania:life_essence', 'kubejs:bound_astral_soul', 'irons_spellbooks:blood_vial', 'irons_spellbooks:blood_vial',
            'irons_spellbooks:blood_vial', 'irons_spellbooks:blood_vial',
            'irons_spellbooks:blood_rune', 'irons_spellbooks:blood_rune', 'minecraft:netherite_ingot',
            'kubejs:empyrean_channeling_vessel'
        ],
        affinity: 'fire',
        power: LP.SAGE,
        tier: 5
    })

    // Ward Lattice: a holy core is protective/divine ward.
    addEldrinAltarRecipe(event, {
        output: 'kubejs:astral_holy_core',
        items: [
            'botania:life_essence', 'kubejs:bound_astral_soul', 'irons_spellbooks:divine_pearl', 'irons_spellbooks:divine_pearl',
            'irons_spellbooks:holy_rune', 'irons_spellbooks:holy_rune',
            'kubejs:sacred_ambrosium_shard', 'kubejs:sacred_ambrosium_shard',
            'kubejs:empyrean_ward_lattice'
        ],
        affinity: 'water',
        power: LP.SAGE,
        tier: 5
    })

    // Wizard Brain: a void core channels eldritch/otherworldly knowledge.
    addEldrinAltarRecipe(event, {
        output: 'kubejs:astral_void_core',
        items: [
            'botania:life_essence', 'kubejs:bound_astral_soul', 'occultism:otherworld_essence', 'occultism:otherworld_essence',
            'irons_spellbooks:ender_rune', 'irons_spellbooks:ender_rune', 'minecraft:nether_star',
            'kubejs:empyrean_wizard_brain'
        ],
        affinity: 'ender',
        power: LP.SAGE,
        tier: 5
    })

    // Motive Core: an annihilation core is raw destructive force.
    addEldrinAltarRecipe(event, {
        output: 'kubejs:astral_annihilation_core',
        items: [
            'botania:life_essence', 'kubejs:bound_astral_soul', 'legendary_spellbooks:annihilators_protocol',
            'irons_spellbooks:ender_rune', 'irons_spellbooks:ender_rune',
            'irons_spellbooks:ender_rune', 'irons_spellbooks:ender_rune',
            'minecraft:nether_star', 'minecraft:nether_star',
            'kubejs:empyrean_motive_core'
        ],
        affinity: 'ender',
        power: LP.SAGE,
        tier: 5
    })

    // Wizard Brain: a grimoire is stored magical knowledge, same role as any tier's spell book.
    addEldrinAltarRecipe(event, {
        output: 'kubejs:blood_grimoire',
        items: [
            'kubejs:astral_blood_core', 'occultism:soul_gem', 'occultism:soul_gem',
            'irons_spellbooks:blood_vial', 'irons_spellbooks:blood_vial',
            'irons_spellbooks:blood_vial', 'irons_spellbooks:blood_vial',
            'minecraft:netherite_ingot', 'minecraft:netherite_ingot',
            'kubejs:empyrean_wizard_brain'
        ],
        affinity: 'fire',
        power: 2 * LP.SAGE,
        tier: 5
    })

    // Ward Lattice: a sanctum is a protective holy structure.
    addEldrinAltarRecipe(event, {
        output: 'kubejs:radiant_sanctum',
        items: [
            'kubejs:astral_holy_core', 'irons_spellbooks:holy_rune', 'irons_spellbooks:holy_rune',
            'irons_spellbooks:divine_pearl', 'irons_spellbooks:divine_pearl',
            'irons_spellbooks:divine_pearl', 'irons_spellbooks:divine_pearl',
            'minecraft:golden_apple', 'minecraft:golden_apple',
            'kubejs:empyrean_ward_lattice'
        ],
        affinity: 'water',
        power: 2 * LP.SAGE,
        tier: 5
    })

    // Wizard Brain: a codex is stored eldritch knowledge.
    addEldrinAltarRecipe(event, {
        output: 'kubejs:eldritch_codex',
        items: [
            'kubejs:astral_void_core', 'irons_spellbooks:ender_rune', 'irons_spellbooks:ender_rune',
            'minecraft:nether_star', 'minecraft:nether_star',
            'minecraft:ender_eye', 'minecraft:ender_eye',
            'minecraft:ender_eye', 'minecraft:ender_eye',
            'kubejs:empyrean_wizard_brain'
        ],
        affinity: 'ender',
        power: 2 * LP.SAGE,
        tier: 5
    })

    // Motive Core: a chronicle of obliteration is raw destructive force, matches its core.
    addEldrinAltarRecipe(event, {
        output: 'kubejs:obliteration_chronicle',
        items: [
            'kubejs:astral_annihilation_core', 'minecraft:nether_star', 'minecraft:nether_star',
            'minecraft:nether_star', 'minecraft:nether_star',
            'occultism:otherworld_essence', 'occultism:otherworld_essence',
            'minecraft:ender_eye', 'minecraft:ender_eye',
            'kubejs:empyrean_motive_core'
        ],
        affinity: 'ender',
        power: 2 * LP.SAGE,
        tier: 5
    })

    // Circuit: the tech-bridge codex, already built from UV circuits -- doubling down on the
    // circuit theme fits better than any single component.
    addEldrinAltarRecipe(event, {
        output: 'kubejs:harbinger_codex',
        items: [
            'gtceu:empyrium_ingot', '#gtceu:circuits/uv', '#gtceu:circuits/uv',
            'cataclysm_spellbooks:technomancy_rune', 'cataclysm_spellbooks:technomancy_rune',
            'cataclysm_spellbooks:technomancy_rune', 'cataclysm_spellbooks:technomancy_rune',
            '#gtceu:circuits/uv', '#gtceu:circuits/uv',
            'kubejs:empyrean_sigil'
        ],
        affinity: 'arcane',
        power: 2 * LP.SAGE,
        tier: 5
    })

    // botania:life_essence: dropped the crafted production recipe entirely. Life Essence comes
    // from the Gaia Guardian boss fight, period -- that's gated at Sorcerer, not here. By Sage
    // tier the player has been farming the boss for tiers already; a second crafted route
    // (MysticalAg or otherwise) doesn't matter at this point and isn't needed. Per user direction
    // 2026-07-28.

    // boundless_astral_ingot -> Terra Plate -> gaia_ingot dropped: gaia_ingot is
    // Sorcerer-tier now (sorcerer.js's gravitite chain), backwards for Sage to be re-minting it
    // this many tiers later. boundless_astral_ingot still feeds Prophet/UEV tech-bridge
    // recipes elsewhere in the pack.

    // primal_latex_billet: uses the shared #kubejs:*_essences tags (magichem-backed since
    // MysticalAgriculture's removal 2026-07-31), PLUS the Wilden retirement fix (drygmy_shard x2
    // swapped for otherworld_essence x2 -- same ongoing Occultism-tax pattern used elsewhere).
    addEldrinAltarRecipe(event, {
        output: 'kubejs:primal_latex_billet',
        items: ['gtceu:rubber_dust', 'gtceu:rubber_dust', 'gtceu:rubber_dust', 'gtceu:rubber_dust', '#kubejs:fire_essences', '#kubejs:water_essences', '#kubejs:earth_essences', '#kubejs:air_essences', 'occultism:otherworld_essence', 'occultism:otherworld_essence'],
        affinity: 'earth',
        power: LP.SAGE,
        tier: 5
    })

    // abstract_elastomer_compound_mix: GT mixer retired (magic spine stays GT-free) -- vanilla
    // combine instead. Dead ars_nouveau:source_gem x4 / wilden_horn swapped for real UV-tier
    // materials already established in this pack (naquadah_dust, prima_materia_ingot).
    event.shapeless('kubejs:elemental_latex_compound', [
        'kubejs:primal_latex_billet',
        'gtceu:naquadah_dust', 'gtceu:naquadah_dust', 'gtceu:naquadah_dust', 'gtceu:naquadah_dust',
        'gtceu:prima_materia_ingot'
    ])

    // abstract_elastomer_ingot: dead wilden_tribute x2 and the leftover gaia_ingot x4 (Sorcerer-
    // tier, too far back) both consolidated onto this tier's own bound_astral_soul -- keeps a
    // "powerful spirit essence" ingredient in the recipe's shape without reviving Wilden or
    // re-importing gaia_ingot.
    addEldrinAltarRecipe(event, {
        output: 'gtceu:abstract_elastomer_ingot',
        items: [
            'kubejs:elemental_latex_compound',
            'kubejs:bound_astral_soul', 'kubejs:bound_astral_soul', 'kubejs:bound_astral_soul', 'kubejs:bound_astral_soul',
            'kubejs:bound_astral_soul', 'kubejs:bound_astral_soul',
            'gtceu:prima_materia_ingot', 'gtceu:prima_materia_ingot'
        ],
        affinity: 'earth',
        power: LP.SAGE,
        tier: 5
    })

    // --- Empyrean Ichor: Sage capstone material, no shortcut (capstones stay hard by design) ---
    // Bookends Ashen Ichor: the last step requires the Hobbyist material the player started with.
    // Magic spine stays GT-free: vanilla combines, a real Occultism ritual, plain furnace smelt
    // (empyrean_ichor has no blastTemp on purpose).
    //
    // "Prime Aggregator" and "Eldrin Orrery" per the design spec don't work for custom output
    // items -- verified against MagiChem's real recipes: every device that "creates items from
    // materia" (Circle of Fabrication, Conjurer, and by the same pattern Prime Aggregator) is
    // bound to the mod's own fixed item<->materia dictionary, same mechanical wall Phases 6-8
    // already hit repeatedly. Vanilla combine instead. Also dropped the "worn, not consumed"
    // Philosopher's Stone requirement (same call as Phase 8's Wisdom Stone) -- paired with
    // gaia_ingot instead. Kept even after the rest of the file dropped gaia_ingot (now
    // Sorcerer-tier): it's a hard component of empyrean_ichor's registered GT material
    // (gtceuMaterialRegistry.js), not a stale ingredient choice.
    event.shapeless('kubejs:hallowed_remnant', ['bloodmagic:ingot_hellforged', 'botania:gaia_ingot'])

    event.shapeless('kubejs:wellspring_bound_remnant', ['kubejs:hallowed_remnant', 'mna:greater_mote_arcane'])

    addOccultismRitual(event, {
        name: 'empyrean_core',
        tier: 'marid',
        output: 'kubejs:empyrean_core',
        duration: 200,
        ingredients: [
            { item: 'kubejs:wellspring_bound_remnant' },
            { item: 'gtceu:ashen_ichor_ingot' },
            { item: 'occultism:soul_gem' }
        ]
    })

    event.smelting('gtceu:empyrean_ichor_ingot', 'kubejs:empyrean_core')

    // --- Microcrafting: Sage circuit + components ---
    // Circuit built through 2 real handlers: Runic Altar -> Terra Plate. Anchored on Empyrean
    // Ichor (the tier's genuinely novel capstone material) rather than gaia_ingot, which
    // magic_palette.md already flags as the single most over-repeated staple in the pack.
    addRunicAltarRecipe(event, {
        output: 'kubejs:empyrean_sigil_blank',
        mana: RunicAltar.SAGE,
        ingredients: ['gtceu:empyrean_ichor_ingot', 'kubejs:astral_void_core', 'minecraft:nether_star']
    })

    addTerraPlateRecipe(event, {
        result: 'kubejs:empyrean_sigil',
        mana: Agglomeration.SAGE,
        ingredients: ['kubejs:empyrean_sigil_blank', 'kubejs:bound_astral_soul']
    })

    // Wizard Brain: Eldrin Altar (3rd distinct handler for this tier's item set).
    // Grammar: thought vessel (hex artifact -- stored spell logic that casts unattended) +
    // animating agent (astral holy core).
    addEldrinAltarRecipe(event, {
        output: 'kubejs:empyrean_wizard_brain',
        items: ['gtceu:empyrean_ichor_ingot', 'hexcasting:artifact', 'kubejs:astral_holy_core', 'irons_spellbooks:divine_pearl'],
        affinity: 'ENDER', power: Source.SAGE,
        tier: 5
    })
    addRunicAltarRecipe(event, {
        output: { item: 'kubejs:empyrean_motive_core' },
        mana: RunicAltar.SAGE,
        ingredients: [
            { item: 'gtceu:empyrean_ichor_rod' },
            { item: 'botania:rune_wrath' },
            { item: 'minecraft:netherite_ingot' },
            { item: 'minecraft:nether_star' }
        ]
    })

    // Channeling Vessel: Terra Plate -- poured, not assembled.
    addTerraPlateRecipe(event, {
        result: 'kubejs:empyrean_channeling_vessel',
        mana: Agglomeration.SAGE,
        ingredients: ['gtceu:empyrean_ichor_ingot', 'gtceu:concepts_bucket', 'gtceu:abstract_elastomer_ingot']
    })

    // Ward Lattice: Eldrin Altar, water affinity -- a ward is a standing field, not a plate.
    addEldrinAltarRecipe(event, {
        output: 'kubejs:empyrean_ward_lattice',
        items: ['gtceu:empyrean_ichor_plate', 'irons_spellbooks:holy_rune', 'irons_spellbooks:holy_rune', 'minecraft:nether_star', 'kubejs:sacred_ambrosium_shard'],
        affinity: 'water',
        power: LP.SAGE,
        tier: 5
    })

    // Wisdom Stone: Philosopher's Stone (Ritual of the Balanced Scales, Alchemical Nexus).
    // Brand-new recipe -- confirmed via full jar recipe search that magichem-0.5.2.jar ships NO
    // recipe of any type for magichem:philosophers_stone, so there's nothing to conflict with or
    // override. Final stage anchors on Empyrean Ichor, deliberately echoing Sage's own "no
    // shortcut, callback to Hobbyist" capstone material (see magic_palette.md's Sage section).
    // Wizard Brain in stage 1: a worn Wisdom Stone is automated magical reasoning, same as every
    // other tier's Wisdom Stone.
    event.custom({
        type: 'magichem:sublimation',
        tier: 6,
        wisdom: 4,
        object: { item: 'magichem:philosophers_stone' },
        stages: [
            {
                experience: 300,
                components: [
                    { item: 'kubejs:astral_blood_core' },
                    { item: 'kubejs:astral_holy_core' },
                    { item: 'kubejs:empyrean_wizard_brain' }
                ],
                materia: [
                    { item: 'magichem:essentia_nigredo', count: 60 },
                    { item: 'magichem:essentia_albedo', count: 60 },
                    { item: 'magichem:admixture_potential', count: 120 }
                ]
            },
            {
                experience: 350,
                components: [
                    { item: 'kubejs:astral_annihilation_core' },
                    { item: 'minecraft:nether_star' },
                    { item: 'minecraft:ender_eye' }
                ],
                materia: [
                    { item: 'magichem:essentia_citrinitas', count: 60 },
                    { item: 'magichem:essentia_rubedo', count: 60 },
                    { item: 'magichem:admixture_change', count: 120 }
                ]
            },
            {
                experience: 400,
                components: [
                    { item: 'kubejs:blood_grimoire' },
                    { item: 'kubejs:radiant_sanctum' },
                    { item: 'kubejs:eldritch_codex' }
                ],
                materia: [
                    { item: 'magichem:admixture_wizard', count: 90 },
                    { item: 'magichem:admixture_sorcery', count: 90 },
                    { item: 'magichem:essentia_conceptual', count: 100 }
                ]
            },
            {
                experience: 500,
                components: [
                    { item: 'gtceu:empyrean_ichor_ingot' },
                    { item: 'magichem:wisdom_stone_rubedo' },
                    { item: 'gtceu:empyrean_ichor_ingot' }
                ],
                materia: [
                    { item: 'magichem:admixture_potential', count: 150 },
                    { item: 'magichem:admixture_change', count: 150 },
                    { item: 'magichem:essentia_rubedo', count: 80 }
                ]
            }
        ]
    })
})
