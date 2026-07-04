ServerEvents.recipes(event => {
    event.remove({ output: 'magistuarmory:steel_ingot', type: 'minecraft:blasting' })
    event.remove({ output: 'magistuarmory:steel_ingot', type: 'minecraft:smelting' })
    event.remove({ output: 'magistuarmory:steel_plate' })
})
