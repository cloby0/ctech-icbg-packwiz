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

// resolve an imbuement item entry to an input string, or null on failure
// imbuement pedestalItems use: { item: { item: "..." } } or { item: { tag: "..." } }
// the center input uses a flat: { item: "..." } or { tag: "..." }

function resolveItem(entry, debugLabel) {
    if (!entry) {
        console.error(`[imbuement] null entry at ${debugLabel}`)
        return null
    }

    // If .item is itself an object, unwrap one level (pedestal nested form)
    let resolved = entry
    if (typeof resolved.item === 'object' && resolved.item !== null) {
        resolved = resolved.item
    }

    let count = resolved.count || 1

    if (resolved.tag) {
        return `${count}x #${resolved.tag}`
    } else if (typeof resolved.item === 'string') {
        return `${count}x ${resolved.item}`
    }

    console.error(`[imbuement] could not resolve item at ${debugLabel}: ${JSON.stringify(entry)}`)
    return null
}

ServerEvents.recipes(event => {
    let index = 1

    event.forEachRecipe({ type: 'ars_nouveau:imbuement' }, recipe => {
        const crecipe = JSON.parse(recipe.json.toString())

        // imbuement output is a plain string ID, not an object
        let outputRaw = crecipe.output ?? null
        if (!outputRaw) {
            console.error(`[imbuement] no output at index ${index}`)
            index++
            return
        }
        let outputId = typeof outputRaw === 'object' ? (outputRaw.item ?? null) : outputRaw
        let outputCount = (typeof outputRaw === 'object' ? outputRaw.count : crecipe.count) || 1

        // source cost
        let sourceCost = crecipe.source || 0

        // center input
        let centerInput = resolveItem(crecipe.input, `index ${index} input`)
        if (!centerInput) {
            console.error(`[imbuement] skipping index ${index}, could not resolve center input`)
            index++
            return
        }

        // pedestal items (NOT consumed)
        let pedestalItems = crecipe.pedestalItems ?? []
        let pedestalInputs = []
        for (let i = 0; i < pedestalItems.length; i++) {
            // pedestalItems in imbuement wrap like: { item: { item: "..." } } or { item: { tag: "..." } }
            let inner = pedestalItems[i].item ?? pedestalItems[i]
            let p = resolveItem(inner, `index ${index} pedestal[${i}]`)
            if (p) pedestalInputs.push(p)
        }

        let recipeId = `ars_nouveau/imbuement_${stripNamespace(outputId)}_${index}`
        console.log(`[imbuement] index=${index} output=${outputId} source=${sourceCost} pedestals=${pedestalInputs.length}`)

        let r = event.recipes.gtceu.imbuement_factory(recipeId)
            .inputFluids(Fluid.of('starbunclemania:source_fluid', sourceCost))
            .itemInputs(centerInput)
            .itemOutputs(`${outputCount}x ${outputId}`)
            .duration(sourceRound(sourceCost) * 2)
            .EUt(7680 + Math.round(sourceCost / 25))

        pedestalInputs.forEach(pedestal => r.notConsumable(pedestal))

        index++
    })
})