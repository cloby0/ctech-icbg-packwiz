
ServerEvents.tags('block', event => {
    event.add('minecraft:needs_wooden_tool', '#forge:needs_wood_tool')
    event.removeAll('forge:needs_wood_tool')
})