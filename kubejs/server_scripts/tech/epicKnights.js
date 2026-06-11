ServerEvents.recipes(event => {

    // Remove bypass: iron_ingot → magistuarmory:steel_ingot via blasting/furnace.
    // This lets players skip GTCEu EBF (1000K, MV) for steel entirely.
    event.remove({ output: 'magistuarmory:steel_ingot', type: 'minecraft:blasting' })
    event.remove({ output: 'magistuarmory:steel_ingot', type: 'minecraft:smelting' })


})
