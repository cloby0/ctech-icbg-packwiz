// Gates Ars Nouveau's own native production-relevant rituals behind magic tier materials, so they
// read as required infra investment rather than incidental flavor crafts. Complements occultism.js:
// Occultism owns extraction/logistics, these rituals own curation/growth/processing.
// Drygmy Charm is left untouched -- it's already gated to Journeyman via 3x Source Gem in its own
// vanilla Enchanting Apparatus recipe.
ServerEvents.recipes(event => {

    const luminessence = { item: 'gtceu:luminessence_dust' }
    const sourceGem = { item: 'ars_nouveau:source_gem' }

    // Apprentice tier: early terraforming/harvest automation
    event.remove({ id: 'ars_nouveau:ritual_harvest' })
    event.shapeless('ars_nouveau:ritual_harvest', [
        'ars_nouveau:green_archwood_log', 'ars_nouveau:earth_essence', 'minecraft:iron_hoe', luminessence,
    ]).id('ars_nouveau:ritual_harvest')

    event.remove({ id: 'ars_nouveau:ritual_forestation' })
    event.shapeless('ars_nouveau:ritual_forestation', [
        'ars_nouveau:green_archwood_log', 'ars_nouveau:mendosteen_pod', 'ars_nouveau:earth_essence', luminessence,
    ]).id('ars_nouveau:ritual_forestation')

    event.remove({ id: 'ars_nouveau:ritual_flowering' })
    event.shapeless('ars_nouveau:ritual_flowering', [
        'ars_nouveau:green_archwood_log',
        'minecraft:poppy', 'minecraft:poppy', 'minecraft:poppy',
        'minecraft:dandelion', 'minecraft:dandelion', 'minecraft:dandelion',
        'ars_nouveau:earth_essence', luminessence,
    ]).id('ars_nouveau:ritual_flowering')

    // Journeyman tier: entity curation / breeding / accelerated growth
    event.remove({ id: 'ars_nouveau:ritual_containment' })
    event.shapeless('ars_nouveau:ritual_containment', [
        'ars_nouveau:purple_archwood_log', 'ars_nouveau:manipulation_essence',
        'minecraft:glass_bottle', 'minecraft:glass_bottle', 'minecraft:glass_bottle', sourceGem,
    ]).id('ars_nouveau:ritual_containment')

    event.remove({ id: 'ars_nouveau:ritual_overgrowth' })
    event.shapeless('ars_nouveau:ritual_overgrowth', [
        'ars_nouveau:green_archwood_log',
        'ars_nouveau:magebloom', 'ars_nouveau:magebloom', 'ars_nouveau:magebloom',
        'ars_nouveau:earth_essence', 'ars_nouveau:earth_essence', sourceGem,
    ]).id('ars_nouveau:ritual_overgrowth')

    event.remove({ id: 'ars_nouveau:ritual_fertility' })
    event.shapeless('ars_nouveau:ritual_fertility', [
        'ars_nouveau:green_archwood_log',
        'minecraft:wheat', 'minecraft:wheat', 'minecraft:wheat',
        'minecraft:golden_apple', 'minecraft:blaze_powder', 'minecraft:blaze_powder', sourceGem,
    ]).id('ars_nouveau:ritual_fertility')
})
