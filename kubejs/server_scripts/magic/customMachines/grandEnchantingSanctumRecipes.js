function stripNamespace(str) {
    const colon = str.indexOf(':')
    return colon === -1 ? str : str.slice(colon + 1)
}

function sourceRound(num) {
    if ((num / 100) > 20) {
        return num / 100
    } else {
        return 20
    }
}

// resolve a pedestal/reagent entry to an input string, or null on failure
function resolveItem(entry, debugLabel) {
    if (!entry) {
        console.error(`[enchanting_apparatus] null entry at ${debugLabel}`)
        return null
    }

    // pedestalItems entries wrap their content in an extra { item: ... } or { tag: ... }
    // but reagent entries are already flat 
    // we handle both shapes B)
    let inner = (entry.item !== undefined || entry.tag !== undefined) ? entry : null

    // pedestalItems: { item: { item: "...", count?: N } } or { tag: "..." }
    // reagent:       { item: "..." } or { tag: "..." }
    // Normalise to a flat object with .item or .tag
    if (inner === null) {
        console.error(`[enchanting_apparatus] unrecognised entry shape at ${debugLabel}: ${JSON.stringify(entry)}`)
        return null
    }

    // If .item is itself an object (pedestalItems nested form), unwrap it
    let resolved = inner
    if (typeof resolved.item === 'object' && resolved.item !== null) {
        resolved = resolved.item
    }

    let count = resolved.count || 1

    if (resolved.tag) {
        return `${count}x #${resolved.tag}`
    } else if (typeof resolved.item === 'string') {
        return `${count}x ${resolved.item}`
    }

    console.error(`[enchanting_apparatus] could not resolve item at ${debugLabel}: ${JSON.stringify(entry)}`)
    return null
}

ServerEvents.recipes(event => {
    let index = 1

    event.forEachRecipe({ type: 'ars_nouveau:enchanting_apparatus' }, recipe => {
        const crecipe = JSON.parse(recipe.json.toString())

        // --- Output ---
        let outputId = crecipe.output?.item ?? crecipe.output ?? null
        if (!outputId) {
            console.error(`[enchanting_apparatus] no output at index ${index}`)
            index++
            return
        }
        let outputCount = crecipe.output?.count || 1

        // source cost
        let sourceCost = crecipe.sourceCost || 0

        // reagent (center item, consumed)
        let reagents = Array.isArray(crecipe.reagent) ? crecipe.reagent : [crecipe.reagent]
        let reagentInputs = []
        for (let i = 0; i < reagents.length; i++) {
            let r = resolveItem(reagents[i], `index ${index} reagent[${i}]`)
            if (r) reagentInputs.push(r)
        }

        // pedestal items (NOT consumed)
        let pedestalItems = crecipe.pedestalItems ?? []
        let pedestalInputs = []
        for (let i = 0; i < pedestalItems.length; i++) {
            let p = resolveItem(pedestalItems[i], `index ${index} pedestal[${i}]`)
            if (p) pedestalInputs.push(p)
        }

        let recipeId = `ars_nouveau/enchanting_apparatus_${stripNamespace(outputId)}_${index}`
        console.log(`[enchanting_apparatus] index=${index} output=${outputId} source=${sourceCost} pedestals=${pedestalInputs.length} reagents=${reagentInputs.length}`)

        let r = event.recipes.gtceu.grand_enchanting_sanctum(recipeId)
            .inputFluids(Fluid.of('starbunclemania:source_fluid', sourceCost))
            .itemOutputs(`${outputCount}x ${outputId}`)
            .duration(sourceRound(sourceCost) * 2)
            .EUt(7680 + Math.round(sourceCost / 25))
            
        reagentInputs.forEach(reagent => r.itemInputs(reagent))

        pedestalInputs.forEach(pedestal => r.notConsumable(pedestal))

        index++
    })
})