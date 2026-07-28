
let $ForgeRegistries = Java.loadClass("net.minecraftforge.registries.ForgeRegistries");

let _nextArrayIndex = 1

function stripNamespace(str) {
    const colon = str.indexOf(':')
    return colon === -1 ? str : str.slice(colon + 1)
}

function _normalizeArrayItem(entry) {
    if (typeof entry === 'string') {
        return entry.startsWith('#') ? { tag: entry.slice(1) } : { item: entry }
    }
    if (entry.tag) return { tag: entry.tag }
    let obj = { item: entry.item }
    if (entry.count > 1) obj.count = entry.count
    return obj
}

// Real Blood Magic recipe type -- schema verified against WayofTime/BloodMagic source
// (RecipeAlchemyArray / AlchemyArrayRecipeSerializer, registered as "bloodmagic:array").
// In-world craft: place baseinput on the ground, throw addedinput onto it to trigger -> output.
// No fluid, no machine -- pure ritual-circle crafting, distinct flavor from Altar/Alchemy Table.
// crecipe: { base: 'item:id'|{item|tag,count}, thrown: 'item:id'|{item|tag,count},
//            output: 'item:id'|{item,count}, texture: 'namespace:path' (optional circle texture) }
function addAlchemyArrayRecipe(event, crecipe) {
    let index = _nextArrayIndex++

    let outputRaw = crecipe.output
    let outputId = typeof outputRaw === 'object' ? outputRaw.item : outputRaw
    if (!outputId || !$ForgeRegistries.ITEMS.getValue(outputId)) {
        console.warn(`[alchemy_array] skipping index ${index}: non-existent output '${outputId}'`)
        return
    }

    let recipeObj = {
        type: 'bloodmagic:array',
        baseinput: _normalizeArrayItem(crecipe.base),
        addedinput: _normalizeArrayItem(crecipe.thrown),
        output: _normalizeArrayItem(outputRaw)
    }
    if (crecipe.texture) recipeObj.texture = crecipe.texture

    event.custom(recipeObj).id(`kubejs:array_${stripNamespace(outputId)}_${index}`)
}

global.addAlchemyArrayRecipe = addAlchemyArrayRecipe
