// Shaped 3x3 helper for magic component crafting (Wizard Brain / Motive Core / Channeling
// Vessel / Ward Lattice). Mirrors the GT microcrafting convention: one signature material
// centered as the key ingredient, two flavor/structural materials ringing it.
function addComponentRecipe(event, id, ingredients) {
    event.shaped(id, [
        'ABA',
        'BSB',
        'ABA'
    ], { S: ingredients[0], A: ingredients[1], B: ingredients[2] })
}

global.addComponentRecipe = addComponentRecipe
