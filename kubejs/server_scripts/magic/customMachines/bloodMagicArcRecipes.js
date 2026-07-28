
let $ForgeRegistries = Java.loadClass("net.minecraftforge.registries.ForgeRegistries");

let _nextArcIndex = 1

function stripNamespace(str) {
    const colon = str.indexOf(':')
    return colon === -1 ? str : str.slice(colon + 1)
}

function _normalizeArcItem(entry) {
    if (typeof entry === 'string') {
        return entry.startsWith('#') ? { tag: entry.slice(1) } : { item: entry }
    }
    if (entry.tag) return { tag: entry.tag }
    let obj = { item: entry.item }
    if (entry.count > 1) obj.count = entry.count
    return obj
}

// Real Blood Magic recipe type -- schema verified against WayofTime/BloodMagic source
// (RecipeARC / ARCRecipeSerializer, registered as "bloodmagic:arc"). Alchemical Reaction
// Chamber: single input (+ optional tool that's damaged, not consumed unless breakTool),
// guaranteed output, up to 3 chance-based bonus outputs, optional fluid I/O.
// crecipe: { input: 'item:id'|{item|tag,count}, tool: 'item:id'|{item|tag} (optional),
//            output: 'item:id'|{item,count},
//            bonusOutputs: [{ item, mainChance, chance }] (optional, max 3),
//            inputFluid: { fluid, amount } (optional), outputFluid: { fluid, amount } (optional),
//            consumeInput: true (default) }
function addArcRecipe(event, crecipe) {
    let index = _nextArcIndex++

    let outputRaw = crecipe.output
    let outputId = typeof outputRaw === 'object' ? outputRaw.item : outputRaw
    if (!outputId || !$ForgeRegistries.ITEMS.getValue(outputId)) {
        console.warn(`[arc] skipping index ${index}: non-existent output '${outputId}'`)
        return
    }

    let recipeObj = {
        type: 'bloodmagic:arc',
        input: _normalizeArcItem(crecipe.input),
        tool: crecipe.tool ? _normalizeArcItem(crecipe.tool) : [],
        output: _normalizeArcItem(outputRaw),
        consumeingredient: crecipe.consumeInput !== false
    }

    let bonusOutputs = crecipe.bonusOutputs || []
    if (bonusOutputs.length > 0) {
        recipeObj.addedoutput = bonusOutputs.slice(0, 3).map(b => ({
            type: _normalizeArcItem(b.item),
            mainchance: b.mainChance || 0,
            chance: b.chance || 1
        }))
    }

    if (crecipe.inputFluid) recipeObj.inputFluid = crecipe.inputFluid
    if (crecipe.outputFluid) recipeObj.outputFluid = crecipe.outputFluid

    event.custom(recipeObj).id(`kubejs:arc_${stripNamespace(outputId)}_${index}`)
}

global.addArcRecipe = addArcRecipe
