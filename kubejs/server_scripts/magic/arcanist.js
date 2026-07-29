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

    // elementite_dust -> raw_elementite -> elementium_ingot smelt dropped entirely: Initiate's
    // elven_trade route (3x ambrosia_touched_elementite -> 2x elementium_ingot) already makes
    // elementium cheaper, with no exclusive-to-Arcanist mechanic backing this route (same
    // addEldrinAltarRecipe/Manaweaving Altar helpers as everywhere else) and no bulk advantage
    // (this chain burns rubedo_touched_vinteum -- an Arcanist SIGNATURE intermediate -- for just
    // 1x elementium_ingot, worse than Initiate's cheap 3-dust combine for 2x). Per user direction
    // 2026-07-28: cut unless a later-tier route is genuinely cheaper/bulkier or handler-exclusive;
    // this was neither. elven_concentrate itself stays -- still feeds elven_source_lattice/
    // pixie_dust/dragonstone below.

    // elven_source_lattice: dead ars_nouveau:source_gem x2 swapped for this tier's own new
    // intermediate, 2x gravitic residue.
    addEldrinAltarRecipe(event, {
        output: 'kubejs:elven_source_lattice',
        items: ['kubejs:elven_concentrate', 'kubejs:resonant_zanite_crystal', 'kubejs:resonant_zanite_crystal', 'kubejs:gravitic_residue', 'kubejs:gravitic_residue'],
        affinity: 'arcane',
        power: LP.ARCANIST
    })

    // raw_mana -> source_gem x5: dead reagent and output. Dropped outright, no port needed.

    addMnaManaweavingRecipe(event, {
        output: { item: 'botania:pixie_dust', count: 3 },
        items: ['botania:mana_pearl', 'kubejs:elven_concentrate', 'kubejs:elven_concentrate', '#kubejs:air_essences', '#kubejs:air_essences'],
        patterns: ['mna:star', 'mna:diamond'],
        tier: 4
    })

    addMnaManaweavingRecipe(event, {
        output: { item: 'botania:dragonstone', count: 2 },
        items: ['botania:mana_diamond', 'kubejs:elven_concentrate', 'kubejs:elven_concentrate', '#kubejs:earth_essences', '#kubejs:water_essences'],
        patterns: ['mna:square', 'mna:diamond'],
        tier: 4
    })


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

    // --- Microcrafting: Arcanist circuit + components ---
    // Circuit built through 2 real handlers: Alchemy Table -> furnace.
    addAlchemyTableRecipe(event, {
        output: 'kubejs:rubedo_array_core',
        input: ['gtceu:gravitic_rubedo_ingot', 'kubejs:elven_source_lattice', 'botania:dragonstone'],
        syphon: LP.ARCANIST,
        ticks: 200
    })

    event.smelting('kubejs:rubedo_array', 'kubejs:rubedo_array_core')

    // Wizard Brain: Manaweaving Altar (3rd distinct handler for this tier's item set).
    addMnaManaweavingRecipe(event, {
        output: 'kubejs:rubedo_wizard_brain',
        items: ['gtceu:gravitic_rubedo_ingot', 'kubejs:elven_concentrate', 'botania:pixie_dust'],
        patterns: ['mna:diamond', 'mna:knot3'],
        tier: 3
    })

    event.shapeless('kubejs:rubedo_motive_core', [
        'gtceu:gravitic_rubedo_rod', 'extrabotany:aerialite_ingot', 'gtceu:gravitic_rubedo_ingot'
    ])
    event.shapeless('kubejs:rubedo_channeling_vessel', [
        'gtceu:gravitic_rubedo_ingot', 'kubejs:weak_elementium_dust', 'extrabotany:photonium_ingot'
    ])
    event.shapeless('kubejs:rubedo_ward_lattice', [
        'gtceu:gravitic_rubedo_plate', 'extrabotany:shadowium_ingot', 'botania:dragonstone'
    ])
})
