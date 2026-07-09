ServerEvents.recipes(event => {
    event.remove({ output: 'magistuarmory:steel_ingot', type: 'minecraft:blasting' })
    event.remove({ output: 'magistuarmory:steel_ingot', type: 'minecraft:smelting' })
    // NOTE: do not remove by output 'magistuarmory:steel_plate' - OEI aliases it to
    // gtceu:steel_plate, so an untyped output-removal nukes ALL gtceu steel plate
    // recipes (hammer, bending). OEI already unifies the magistuarmory plate away.
})
