ServerEvents.recipes(event => {
    event.remove({ id: 'mysticalagradditions:essence/gaia_spirit' })

    // Wilden/Primal alt-spine retired per user direction 2026-07-28: all four Ars-native
    // Wilden/Drygmy mob-drop items (wilden_tribute/horn/spike, drygmy_shard) have no MNA/Blood
    // Magic/Malum equivalent. wilden_alloy_dust and the wilden_tribute x2 duplication recipe are
    // dropped outright, no replacement. primal_latex_billet/abstract_elastomer below (the
    // load-bearing half feeding uevAndChaos.js) get new non-Ars ingredients instead of being
    // dropped, since abstract_elastomer_ingot is a real UEV tech-tree bridge material.

    addRunicAltarRecipe(event, {
        output: { item: 'kubejs:vengeful_gaia_spirit' },
        mana: Mana.SAGE,
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

    // MysticalAg difficulty-cliff fix: default drops the two hard essences for vanilla mob-drop
    // equivalents; alternate keeps them, cheaper. soul_gem (renewable via occultism.js's
    // mob-capture ritual loop) unchanged in both.
    addEldrinAltarRecipe(event, {
        output: 'kubejs:soul_of_gaia',
        items: ['kubejs:vengeful_gaia_spirit', 'minecraft:wither_skeleton_skull', 'minecraft:ender_pearl', 'minecraft:ender_pearl', 'occultism:soul_gem'],
        affinity: 'ender',
        power: 2 * LP.SAGE
    })
    addEldrinAltarRecipe(event, {
        output: 'kubejs:soul_of_gaia',
        items: ['kubejs:vengeful_gaia_spirit', 'mysticalagriculture:wither_skeleton_essence', 'mysticalagriculture:enderman_essence', 'mysticalagriculture:enderman_essence', 'occultism:soul_gem'],
        affinity: 'ender',
        power: LP.SAGE
    })

    addEldrinAltarRecipe(event, {
        output: 'kubejs:boundless_gaia_spirit_ingot',
        items: [
            'kubejs:soul_of_gaia',
            'botania:elementium_block', 'botania:elementium_block',
            'botania:elementium_block', 'botania:elementium_block',
            'botania:elementium_block', 'botania:elementium_block',
            'botania:elementium_block', 'botania:elementium_block'
        ],
        affinity: 'earth',
        power: LP.SAGE
    })

    addEldrinAltarRecipe(event, {
        output: 'kubejs:gaian_blood_core',
        items: [
            'botania:life_essence', 'botania:gaia_ingot', 'irons_spellbooks:blood_vial', 'irons_spellbooks:blood_vial',
            'irons_spellbooks:blood_vial', 'irons_spellbooks:blood_vial',
            'irons_spellbooks:blood_rune', 'irons_spellbooks:blood_rune', 'minecraft:netherite_ingot'
        ],
        affinity: 'fire',
        power: LP.SAGE
    })

    addEldrinAltarRecipe(event, {
        output: 'kubejs:gaian_holy_core',
        items: [
            'botania:life_essence', 'botania:gaia_ingot', 'irons_spellbooks:divine_pearl', 'irons_spellbooks:divine_pearl',
            'irons_spellbooks:holy_rune', 'irons_spellbooks:holy_rune',
            'kubejs:sacred_ambrosium_shard', 'kubejs:sacred_ambrosium_shard'
        ],
        affinity: 'water',
        power: LP.SAGE
    })

    addEldrinAltarRecipe(event, {
        output: 'kubejs:gaian_void_core',
        items: [
            'botania:life_essence', 'botania:gaia_ingot', 'mysticalagriculture:enderman_essence', 'mysticalagriculture:enderman_essence',
            'irons_spellbooks:ender_rune', 'irons_spellbooks:ender_rune', 'minecraft:nether_star'
        ],
        affinity: 'ender',
        power: LP.SAGE
    })

    addEldrinAltarRecipe(event, {
        output: 'kubejs:gaian_annihilation_core',
        items: [
            'botania:life_essence', 'botania:gaia_ingot', 'legendary_spellbooks:annihilators_protocol',
            'irons_spellbooks:ender_rune', 'irons_spellbooks:ender_rune',
            'irons_spellbooks:ender_rune', 'irons_spellbooks:ender_rune',
            'minecraft:nether_star', 'minecraft:nether_star'
        ],
        affinity: 'ender',
        power: LP.SAGE
    })

    addEldrinAltarRecipe(event, {
        output: 'kubejs:blood_grimoire',
        items: [
            'kubejs:gaian_blood_core', 'botania:gaia_ingot', 'botania:gaia_ingot',
            'irons_spellbooks:blood_vial', 'irons_spellbooks:blood_vial',
            'irons_spellbooks:blood_vial', 'irons_spellbooks:blood_vial',
            'minecraft:netherite_ingot', 'minecraft:netherite_ingot'
        ],
        affinity: 'fire',
        power: 2 * LP.SAGE
    })

    addEldrinAltarRecipe(event, {
        output: 'kubejs:radiant_sanctum',
        items: [
            'kubejs:gaian_holy_core', 'botania:gaia_ingot', 'botania:gaia_ingot',
            'irons_spellbooks:divine_pearl', 'irons_spellbooks:divine_pearl',
            'irons_spellbooks:divine_pearl', 'irons_spellbooks:divine_pearl',
            'minecraft:golden_apple', 'minecraft:golden_apple'
        ],
        affinity: 'water',
        power: 2 * LP.SAGE
    })

    addEldrinAltarRecipe(event, {
        output: 'kubejs:eldritch_codex',
        items: [
            'kubejs:gaian_void_core', 'botania:gaia_ingot', 'botania:gaia_ingot',
            'minecraft:nether_star', 'minecraft:nether_star',
            'minecraft:ender_eye', 'minecraft:ender_eye',
            'minecraft:ender_eye', 'minecraft:ender_eye'
        ],
        affinity: 'ender',
        power: 2 * LP.SAGE
    })

    addEldrinAltarRecipe(event, {
        output: 'kubejs:obliteration_chronicle',
        items: [
            'kubejs:gaian_annihilation_core', 'botania:gaia_ingot', 'botania:gaia_ingot',
            'minecraft:nether_star', 'minecraft:nether_star',
            'mysticalagriculture:enderman_essence', 'mysticalagriculture:enderman_essence',
            'minecraft:ender_eye', 'minecraft:ender_eye'
        ],
        affinity: 'ender',
        power: 2 * LP.SAGE
    })

    addEldrinAltarRecipe(event, {
        output: 'kubejs:harbinger_codex',
        items: [
            'gtceu:boundless_naquadrite_ingot', 'botania:gaia_ingot', 'botania:gaia_ingot',
            'cataclysm_spellbooks:technomancy_rune', 'cataclysm_spellbooks:technomancy_rune',
            'cataclysm_spellbooks:technomancy_rune', 'cataclysm_spellbooks:technomancy_rune',
            '#gtceu:circuits/uv', '#gtceu:circuits/uv'
        ],
        affinity: 'arcane',
        power: 2 * LP.SAGE
    })

    // botania:life_essence: dropped the crafted production recipe entirely. Life Essence comes
    // from the Gaia Guardian boss fight, period -- that's gated at Sorcerer, not here. By Sage
    // tier the player has been farming the boss for tiers already; a second crafted route
    // (MysticalAg or otherwise) doesn't matter at this point and isn't needed. Per user direction
    // 2026-07-28.

    addTerraPlateRecipe(event, {
        result: { item: 'botania:gaia_ingot' },
        mana: 8 * Mana.PROPHET,
        ingredients: [
            { item: 'kubejs:boundless_gaia_spirit_ingot' },
            { item: 'botania:terrasteel_block' },
            { item: 'botania:terrasteel_block' }
        ]
    })

    // primal_latex_billet: MysticalAg difficulty-cliff fix (default drops the 4 hard base
    // essences for tags, alternate keeps them cheaper) PLUS the Wilden retirement fix
    // (drygmy_shard x2, in both variants, swapped for otherworld_essence x2 -- same ongoing
    // Occultism-tax pattern used for otherworld_essence elsewhere in this rework).
    addEldrinAltarRecipe(event, {
        output: 'kubejs:primal_latex_billet',
        items: ['gtceu:rubber_dust', 'gtceu:rubber_dust', 'gtceu:rubber_dust', 'gtceu:rubber_dust', '#kubejs:fire_essences', '#kubejs:water_essences', '#kubejs:earth_essences', '#kubejs:air_essences', 'occultism:otherworld_essence', 'occultism:otherworld_essence'],
        affinity: 'earth',
        power: LP.SAGE
    })
    addEldrinAltarRecipe(event, {
        output: 'kubejs:primal_latex_billet',
        items: ['gtceu:rubber_dust', 'gtceu:rubber_dust', 'gtceu:rubber_dust', 'gtceu:rubber_dust', 'mysticalagriculture:fire_essence', 'mysticalagriculture:water_essence', 'mysticalagriculture:earth_essence', 'mysticalagriculture:air_essence', 'occultism:otherworld_essence', 'occultism:otherworld_essence'],
        affinity: 'earth',
        power: LP.SAGE / 2
    })

    // abstract_elastomer_compound_mix: GT mixer retired (magic spine stays GT-free) -- vanilla
    // combine instead. Dead ars_nouveau:source_gem x4 / wilden_horn swapped for real UV-tier
    // materials already established in this pack (naquadah_dust, abstract_metal_ingot).
    event.shapeless('kubejs:elemental_latex_compound', [
        'kubejs:primal_latex_billet',
        'gtceu:naquadah_dust', 'gtceu:naquadah_dust', 'gtceu:naquadah_dust', 'gtceu:naquadah_dust',
        'gtceu:abstract_metal_ingot'
    ])

    // abstract_elastomer_ingot: dead wilden_tribute x2 swapped for 2x this tier's own
    // soul_of_gaia -- keeps a "powerful spirit essence" ingredient in the recipe's shape without
    // reviving the dead Wilden line.
    addEldrinAltarRecipe(event, {
        output: 'gtceu:abstract_elastomer_ingot',
        items: [
            'kubejs:elemental_latex_compound',
            'botania:gaia_ingot', 'botania:gaia_ingot', 'botania:gaia_ingot', 'botania:gaia_ingot',
            'kubejs:soul_of_gaia', 'kubejs:soul_of_gaia',
            'gtceu:abstract_metal_ingot', 'gtceu:abstract_metal_ingot'
        ],
        affinity: 'earth',
        power: LP.SAGE
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
    // gaia_ingot instead, matching this file's dominant reagent.
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
        output: 'kubejs:empyrean_array_core',
        mana: Mana.SAGE,
        ingredients: ['gtceu:empyrean_ichor_ingot', 'kubejs:gaian_void_core', 'minecraft:nether_star']
    })

    addTerraPlateRecipe(event, {
        result: 'kubejs:empyrean_array',
        mana: Mana.SAGE,
        ingredients: ['kubejs:empyrean_array_core', 'botania:gaia_ingot']
    })

    // Wizard Brain: Eldrin Altar (3rd distinct handler for this tier's item set).
    addEldrinAltarRecipe(event, {
        output: 'kubejs:empyrean_wizard_brain',
        items: ['gtceu:empyrean_ichor_ingot', 'kubejs:gaian_holy_core', 'irons_spellbooks:divine_pearl'],
        affinity: 'ENDER', power: Source.SAGE,
        tier: 5
    })

    event.shapeless('kubejs:empyrean_motive_core', [
        'gtceu:empyrean_ichor_rod', 'kubejs:gaian_blood_core', 'minecraft:netherite_ingot'
    ])
    event.shapeless('kubejs:empyrean_channeling_vessel', [
        'gtceu:empyrean_ichor_ingot', 'gtceu:abstract_elastomer_ingot', 'mysticalagriculture:enderman_essence'
    ])
    event.shapeless('kubejs:empyrean_ward_lattice', [
        'gtceu:empyrean_ichor_plate', 'kubejs:gaian_annihilation_core', 'minecraft:ender_eye'
    ])
})
