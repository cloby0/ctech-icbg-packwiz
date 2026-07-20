ServerEvents.recipes(event => {
    event.remove({ id: 'minecraft:glass_bottle' })
    event.shaped(Item.of('minecraft:glass_bottle', 3), [
        'S S',
        ' B '
    ], {
        S: 'minecraft:sand',
        B: 'minecraft:blaze_powder'
    })
})
