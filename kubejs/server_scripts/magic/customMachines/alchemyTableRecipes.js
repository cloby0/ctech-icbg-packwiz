
let $ForgeRegistries = Java.loadClass("net.minecraftforge.registries.ForgeRegistries");

let _nextAlchemyTableIndex = 1

function stripNamespace(str) {
    const colon = str.indexOf(':')
    return colon === -1 ? str : str.slice(colon + 1)
}

function _resolveAlchemyTableItem(entry, debugLabel) {
    if (!entry) {
        console.error(`[alchemytable] null entry at ${debugLabel}`)
        return null
    }

    if (typeof entry === 'string') {
        if (entry.startsWith('#')) return `1x #${entry.slice(1)}`
        if (!$ForgeRegistries.ITEMS.getValue(entry)) {
            console.warn(`[alchemytable] skipping non-existent item '${entry}' at ${debugLabel}`)
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
            console.warn(`[alchemytable] skipping non-existent item '${resolved.item}' at ${debugLabel}`)
            return null
        }
    }

    console.error(`[alchemytable] could not resolve item at ${debugLabel}: ${JSON.stringify(entry)}`)
    return null
}

function normalizeAlchemyInput(i) {
    if (typeof i === 'string') return i
    if (i.tag) return `#${i.tag}`
    if (i.item) return i.count > 1 ? `${i.count}x ${i.item}` : i.item
    return i
}

// crecipe: { output: 'item:id' | { item, count }, input: ['item:a', '#tag:b', ...],
//            syphon: LP cost, ticks: processing time, upgradeLevel: altar tier 0-4 (default 0) }
function addAlchemyTableRecipe(event, crecipe) {
    let index = _nextAlchemyTableIndex++

    let outputRaw = crecipe.output ?? null
    if (!outputRaw) {
        console.error(`[alchemytable] no output at index ${index}`)
        return
    }
    let outputId = typeof outputRaw === 'object' ? (outputRaw.item ?? null) : outputRaw
    if (!outputId || typeof outputId !== 'string') {
        console.warn(`[alchemytable] skipping recipe at index ${index} with null/non-string output '${outputId}'`)
        return
    }
    if (!$ForgeRegistries.ITEMS.getValue(outputId)) {
        console.warn(`[alchemytable] skipping recipe with non-existent output '${outputId}'`)
        return
    }
    let outputCount = (typeof outputRaw === 'object' ? outputRaw.count : crecipe.count) || 1

    let syphon = Math.max(crecipe.syphon || 0, 1)
    let ticks = crecipe.ticks || 100
    let upgradeLevel = crecipe.upgradeLevel || 0

    let rawInputs = crecipe.input ?? []
    let inputItems = []
    for (let i = 0; i < rawInputs.length; i++) {
        let resolved = _resolveAlchemyTableItem(rawInputs[i], `index ${index} input[${i}]`)
        if (resolved) inputItems.push(resolved)
    }

    if (inputItems.length === 0) {
        console.error(`[alchemytable] skipping index ${index} (${outputId}): no consumable inputs`)
        return
    }

    let tableInputs = rawInputs.map(i => normalizeAlchemyInput(i))
    let tableOutput = outputCount > 1 ? { item: outputId, count: outputCount } : outputId
    event.recipes.bloodmagic.alchemytable(tableOutput, tableInputs)
        .syphon(syphon)
        .ticks(ticks)
        .upgradeLevel(upgradeLevel)
        .id(`kubejs:alchemytable_${stripNamespace(outputId)}_${index}`)
}

global.addAlchemyTableRecipe = addAlchemyTableRecipe
