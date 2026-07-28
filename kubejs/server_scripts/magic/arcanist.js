ServerEvents.recipes(event => {
    event.remove({ id: 'botania:elven_trade/elementium' })
    event.remove({ id: 'botania:elven_trade/elementium_block' })
    event.remove({ id: 'botania:elven_trade/pixie_dust' })
    event.remove({ id: 'botania:elven_trade/dragonstone' })

    // Old runic-altar weak_elementium_dust producer dropped: Initiate's Spirit Infusion route
    // (initiate.js, off gtceu:terrasteel_dust) already makes the same dust far cheaper. No
    // reason to keep a harder, less profitable duplicate recipe for the same output four tiers
    // later. elven_concentrate below still resolves fine off the Initiate-tier supply. Per user
    // direction 2026-07-28.

    event.custom({
        "type": "botania:elven_trade",
        "ingredients": [
            { "item": "kubejs:weak_elementium_dust" },
            { "item": "kubejs:weak_elementium_dust" },
            { "item": "kubejs:weak_elementium_dust" }
        ],
        "output": [
            { "item": "kubejs:elven_concentrate", "count": 2 }
        ]
    })

    // otherworld_essence recurring here, same renewable-resource logic as the Alchemist
    // manasteel chain -- no spirit-tier ceiling, works as an ongoing Occultism tax.
    // luminessence_dust (dead) swapped for this tier's own rubedo-touched vinteum -- it fires
    // earlier in this file than elven_source_lattice below (which gets the later, more-processed
    // gravitic residue instead), matching the design spec's ordering caveat.
    addEldrinAltarRecipe(event, {
        output: 'kubejs:elementite_dust',
        items: ['kubejs:elven_concentrate', '#kubejs:water_essences', '#kubejs:air_essences', 'kubejs:rubedo_touched_vinteum', 'occultism:otherworld_essence'],
        affinity: 'air',
        power: LP.ARCANIST
    })

    addEldrinAltarRecipe(event, {
        output: 'kubejs:raw_elementite',
        items: ['kubejs:elementite_dust', 'gtceu:abstract_metal_ingot'],
        affinity: 'air',
        power: LP.ARCANIST
    })

    // elven_source_lattice: dead ars_nouveau:source_gem x2 swapped for this tier's own new
    // intermediate, 2x gravitic residue.
    addEldrinAltarRecipe(event, {
        output: 'kubejs:elven_source_lattice',
        items: ['kubejs:elven_concentrate', 'kubejs:resonant_zanite_crystal', 'kubejs:resonant_zanite_crystal', 'kubejs:gravitic_residue', 'kubejs:gravitic_residue'],
        affinity: 'arcane',
        power: LP.ARCANIST
    })

    // raw_mana -> source_gem x5: dead reagent and output. Dropped outright, no port needed.

    addEldrinAltarRecipe(event, {
        output: { item: 'botania:pixie_dust', count: 3 },
        items: ['botania:mana_pearl', 'kubejs:elven_concentrate', 'kubejs:elven_concentrate', '#kubejs:air_essences', '#kubejs:air_essences'],
        affinity: 'air',
        power: LP.ARCANIST
    })

    addEldrinAltarRecipe(event, {
        output: { item: 'botania:dragonstone', count: 2 },
        items: ['botania:mana_diamond', 'kubejs:elven_concentrate', 'kubejs:elven_concentrate', '#kubejs:earth_essences', '#kubejs:water_essences'],
        affinity: 'earth',
        power: LP.ARCANIST
    })

    event.smelting("botania:elementium_ingot", "kubejs:raw_elementite")

    // --- Gravitic Rubedo: Arcanist signature material ---
    // Magic spine stays GT-free: vanilla combine, real Blood Magic Alchemy Table, real Occultism
    // ritual, plain furnace smelt (gravitic_rubedo has no blastTemp on purpose).
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

    event.smelting('gtceu:gravitic_rubedo_ingot', 'kubejs:bound_gravitic_core')

    // Shortcut (Sage+): superheated purified vinteum + Hellforged ingot direct, gated on tier attainment not this file.
    event.shapeless('gtceu:gravitic_rubedo_ingot', [
        'mna:superheated_purified_vinteum_ingot', 'bloodmagic:ingot_hellforged', '#kubejs:magic/sage'
    ])
})
