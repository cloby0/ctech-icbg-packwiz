
let $ForgeRegistries = Java.loadClass("net.minecraftforge.registries.ForgeRegistries");

let _nextEldrinAltarIndex = 1

function stripNamespace(str) {
    const colon = str.indexOf(':')
    return colon === -1 ? str : str.slice(colon + 1)
}

function _resolveEldrinAltarItem(entry, debugLabel) {
    if (!entry) {
        console.error(`[eldrin_altar] null entry at ${debugLabel}`)
        return null
    }

    if (typeof entry === 'string') {
        if (entry.startsWith('#')) return `1x #${entry.slice(1)}`
        if (!$ForgeRegistries.ITEMS.getValue(entry)) {
            console.warn(`[eldrin_altar] skipping non-existent item '${entry}' at ${debugLabel}`)
            return null
        }
        return `1x ${entry}`
    }

    let resolved = entry
    if (typeof resolved.item === 'object' && resolved.item !== null) {
        resolved = resolved.item
    }

    let count = resolved.count || 1

    if (resolved.tag) {
        return `${count}x #${resolved.tag}`
    } else if (typeof resolved.item === 'string') {
        if ($ForgeRegistries.ITEMS.getValue(resolved.item)) {
            return `${count}x ${resolved.item}`
        } else {
            console.warn(`[eldrin_altar] skipping non-existent item '${resolved.item}' at ${debugLabel}`)
            return null
        }
    }

    console.error(`[eldrin_altar] could not resolve item at ${debugLabel}: ${JSON.stringify(entry)}`)
    return null
}

function normalizeEldrinItem(i) {
    if (typeof i === 'string') return i
    if (i.tag) return `#${i.tag}`
    if (i.item) return i.item
    return i
}

function normalizePower(crecipe) {
    if (Array.isArray(crecipe.power)) return crecipe.power
    if (crecipe.power_requirements) return crecipe.power_requirements
    if (crecipe.affinity && crecipe.power) return [{ affinity: crecipe.affinity, amount: crecipe.power }]
    return []
}

// crecipe: { output: 'item:id' | { item, count }, items: ['item:a', '#tag:b', ...],
//            affinity: 'FIRE', power: 1000, -- OR -- power: [{ affinity, amount }, ...],
//            tier: 0 }
function addEldrinAltarRecipe(event, crecipe) {
    let index = _nextEldrinAltarIndex++

    let outputRaw = crecipe.output ?? null
    if (!outputRaw) {
        console.error(`[eldrin_altar] no output at index ${index}`)
        return
    }
    let outputId = typeof outputRaw === 'object' ? (outputRaw.item ?? null) : outputRaw
    if (!outputId || typeof outputId !== 'string') {
        console.warn(`[eldrin_altar] skipping recipe at index ${index} with null/non-string output '${outputId}'`)
        return
    }
    if (!$ForgeRegistries.ITEMS.getValue(outputId)) {
        console.warn(`[eldrin_altar] skipping recipe with non-existent output '${outputId}'`)
        return
    }
    let tier = crecipe.tier || 0
    let powers = normalizePower(crecipe)

    let rawItems = crecipe.items ?? []
    let resolvedItems = []
    for (let i = 0; i < rawItems.length; i++) {
        let resolved = _resolveEldrinAltarItem(rawItems[i], `index ${index} items[${i}]`)
        if (resolved) resolvedItems.push(resolved)
    }

    if (resolvedItems.length === 0) {
        console.error(`[eldrin_altar] skipping index ${index} (${outputId}): no consumable items`)
        return
    }

    let altarItems = rawItems.map(i => normalizeEldrinItem(i))
    let r = event.recipes.mna.eldrinAltar(outputId, altarItems).tier(tier)
    powers.forEach(p => r.powerRequirement(p.affinity, p.amount))
    r.id(`kubejs:eldrin_altar_${stripNamespace(outputId)}_${index}`)
}

global.addEldrinAltarRecipe = addEldrinAltarRecipe
