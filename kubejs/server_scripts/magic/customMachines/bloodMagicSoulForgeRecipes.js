
let $ForgeRegistries = Java.loadClass("net.minecraftforge.registries.ForgeRegistries");

let _nextSoulForgeIndex = 1

function stripNamespace(str) {
    const colon = str.indexOf(':')
    return colon === -1 ? str : str.slice(colon + 1)
}

function _normalizeSoulForgeItem(entry) {
    if (typeof entry === 'string') {
        return entry.startsWith('#') ? { tag: entry.slice(1) } : { item: entry }
    }
    if (entry.tag) return { tag: entry.tag }
    let obj = { item: entry.item }
    if (entry.count > 1) obj.count = entry.count
    return obj
}

// Real Blood Magic recipe type -- schema verified against WayofTime/BloodMagic source
// (RecipeTartaricForge, registered as "bloodmagic:soulforge"). Exactly 4 fixed input slots,
// each optional (only slots present in `inputs` are written), Demon Will cost via drain/minimumDrain.
// crecipe: { output, inputs: [up to 4x 'item:id'|{item|tag,count}], drain: N, minimumDrain: N }
function addSoulForgeRecipe(event, crecipe) {
    let index = _nextSoulForgeIndex++

    let outputRaw = crecipe.output
    let outputId = typeof outputRaw === 'object' ? outputRaw.item : outputRaw
    if (!outputId || !$ForgeRegistries.ITEMS.getValue(outputId)) {
        console.warn(`[soul_forge] skipping index ${index}: non-existent output '${outputId}'`)
        return
    }

    let inputs = crecipe.inputs || []
    if (inputs.length === 0 || inputs.length > 4) {
        console.error(`[soul_forge] skipping index ${index} (${outputId}): needs 1-4 inputs, got ${inputs.length}`)
        return
    }

    let recipeObj = {
        type: 'bloodmagic:soulforge',
        output: _normalizeSoulForgeItem(outputRaw),
        drain: crecipe.drain || 20,
        minimumDrain: crecipe.minimumDrain || 400
    }
    inputs.forEach((input, i) => {
        recipeObj[`input${i}`] = _normalizeSoulForgeItem(input)
    })

    event.custom(recipeObj).id(`kubejs:soulforge_${stripNamespace(outputId)}_${index}`)
}

global.addSoulForgeRecipe = addSoulForgeRecipe
