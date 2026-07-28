
let $ForgeRegistries = Java.loadClass("net.minecraftforge.registries.ForgeRegistries");

let _nextAltarIndex = 1

function stripNamespace(str) {
    const colon = str.indexOf(':')
    return colon === -1 ? str : str.slice(colon + 1)
}

function _normalizeAltarItem(entry) {
    if (typeof entry === 'string') {
        return entry.startsWith('#') ? { tag: entry.slice(1) } : { item: entry }
    }
    if (entry.tag) return { tag: entry.tag }
    let obj = { item: entry.item }
    if (entry.count > 1) obj.count = entry.count
    return obj
}

// Real Blood Magic recipe type -- schema verified against WayofTime/BloodMagic source
// (RecipeBloodAltar / Constants.JSON: input, output, upgradeLevel 0-4, altarSyphon, consumptionRate, drainRate).
// crecipe: { output: 'item:id'|{item,count}, input: 'item:id'|{item|tag,count},
//            syphon: N, upgradeLevel: 0-4 (default 0), consumptionRate: N (default 5), drainRate: N (default 5) }
function addBloodAltarRecipe(event, crecipe) {
    let index = _nextAltarIndex++

    let outputRaw = crecipe.output
    let outputId = typeof outputRaw === 'object' ? outputRaw.item : outputRaw
    if (!outputId || !$ForgeRegistries.ITEMS.getValue(outputId)) {
        console.warn(`[blood_altar] skipping index ${index}: non-existent output '${outputId}'`)
        return
    }

    event.custom({
        type: 'bloodmagic:altar',
        input: _normalizeAltarItem(crecipe.input),
        output: _normalizeAltarItem(outputRaw),
        upgradeLevel: crecipe.upgradeLevel || 0,
        altarSyphon: crecipe.syphon || 1000,
        consumptionRate: crecipe.consumptionRate || 5,
        drainRate: crecipe.drainRate || 5
    }).id(`kubejs:altar_${stripNamespace(outputId)}_${index}`)
}

global.addBloodAltarRecipe = addBloodAltarRecipe
