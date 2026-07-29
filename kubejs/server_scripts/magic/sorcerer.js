ServerEvents.recipes(event => {
    // apprentice_spell_book_upgrade: dead reagent+output, both Ars-native. MNA supplies its own
    // tiered spellcasting progression; dropped outright, no port.

    event.remove({ id: 'reliquary:glowing_water' })
    event.remove({ id: 'reliquary:glowing_water_from_potion_vial' })

    event.shaped(
        Item.of('reliquary:glowing_water', 3),
        [
            '   ',
            ' B ',
            ' A '
        ],
        {
            A: Item.of('minecraft:potion', '{Potion:"minecraft:strong_healing"}'),
            B: 'gtceu:holy_silver_dust',
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

    // MysticalAg difficulty-cliff fix, part 2 (chaos_essence) -- the actual wall, since this
    // feeds prima_materia_ingot right below. Default ritual drops the four hard-required
    // mysticalagriculture essences for four Blood Magic Demon Will types instead (one per
    // element); a second alternate ritual keeps the four MysticalAg essences, costed
    // cheaper/faster as the reward-for-investment route. mana_block x4 was never Ars-dependent,
    // left unchanged in the default.
    addOccultismRitual(event, {
        name: 'chaos_essence',
        tier: 'marid',
        output: 'kubejs:chaos_essence',
        duration: 150,
        ingredients: [
            { item: 'gtceu:holy_silver_ingot' },
            { item: 'bloodmagic:basemonstersoul_corrosive' },
            { item: 'bloodmagic:basemonstersoul_steadfast' },
            { item: 'bloodmagic:basemonstersoul' },
            { item: 'bloodmagic:basemonstersoul_vengeful' },
            { item: 'gtceu:mana_block' },
            { item: 'gtceu:mana_block' },
            { item: 'gtceu:mana_block' },
            { item: 'gtceu:mana_block' }
        ]
    })

    addOccultismRitual(event, {
        name: 'chaos_essence_mysticalag',
        tier: 'marid',
        output: 'kubejs:chaos_essence',
        duration: 100,
        ingredients: [
            { item: 'gtceu:holy_silver_ingot' },
            { item: 'mysticalagriculture:air_essence' },
            { item: 'mysticalagriculture:earth_essence' },
            { item: 'mysticalagriculture:water_essence' },
            { item: 'mysticalagriculture:fire_essence' },
            { item: 'gtceu:mana_block' },
            { item: 'gtceu:mana_block' }
        ]
    })

    // afrit_essence already used once in this file (resonant_gravitite_core above) -- a
    // second use here puts it in the Prima Materia recipe itself, this tier's signature material.
    // Uses afrit tier, not marid: prima_materia_ingot IS the marid gate item in occultism.js,
    // so gating its own ritual behind marid would be circular.
    addOccultismRitual(event, {
        name: 'prima_materia_ingot',
        tier: 'afrit',
        output: 'gtceu:prima_materia_ingot',
        duration: 150,
        ingredients: [
            { item: 'kubejs:chaos_essence' },
            { item: 'kubejs:element_attunement_stone' },
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

    // Shortcut (Alchemist+): direct to the pre-terra-plate feed, still needs the terra plate step.
    event.shapeless('kubejs:gravity_bound_life_essence', [
        'aether_redux:gravitite_ingot', 'botania:life_essence', '#kubejs:magic/alchemist'
    ])
})
