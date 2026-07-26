// Mirror helper for Occultism crafting rituals. Field set verified against
// occultism-1.20.1-1.158.0.jar, data/occultism/recipes/ritual/.
// Writes raw event.custom JSON, which is what magic/occultism.js already does.

let $ForgeRegistries = Java.loadClass("net.minecraftforge.registries.ForgeRegistries");

let _occultismRitualIndex = 0

function addOccultismRitual(event, crecipe) {
    let index = _occultismRitualIndex++
    let outputId = typeof crecipe.output === 'object' ? crecipe.output.item : crecipe.output
    if (!outputId || !$ForgeRegistries.ITEMS.getValue(outputId)) {
        console.warn(`[occultism-ritual] skipping ${index}: bad output '${outputId}'`)
        return
    }

    let tier = crecipe.tier || 'foliot'
    let name = crecipe.name

    console.log(`[occultism-ritual] ${index}: ${outputId} tier=${tier}`)
    event.custom({
        type: 'occultism:ritual',
        ritual_type: 'occultism:craft',
        pentacle_id: crecipe.pentacle || ('occultism:craft_' + tier),
        activation_item: { item: 'occultism:book_of_binding_bound_' + tier },
        ritual_dummy: { item: 'kubejs:ritual_dummy_' + name },
        duration: crecipe.duration || 60,
        ingredients: crecipe.ingredients,
        result: typeof crecipe.output === 'object' ? crecipe.output : { item: outputId },
    }).id(`kubejs:ritual/${name}`)
}

global.addOccultismRitual = addOccultismRitual
