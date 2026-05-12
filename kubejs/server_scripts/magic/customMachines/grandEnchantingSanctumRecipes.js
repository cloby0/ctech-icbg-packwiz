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
    // normalise to a flat object with .item or .tag
    if (inner === null) {
        console.error(`[enchanting_apparatus] unrecognised entry shape at ${debugLabel}: ${JSON.stringify(entry)}`)
        return null
    }

    // if .item is itself an object (pedestalItems nested form), unwrap it
    let resolved = inner
    if (typeof resolved.item === 'object' && resolved.item !== null) {
        resolved = resolved.item
    }

    let count = resolved.count || 1

    if (resolved.tag) {
        return `${count}x #${resolved.tag}`
    } else if (typeof resolved.item === 'string') {
    // skip items that don't exist in the registry
    if (Item.of(resolved.item).isEmpty) {
        console.warn(`[enchanting_apparatus] skipping non-existent item '${resolved.item}' at ${debugLabel}`)
        return null
    }
    return `${count}x ${resolved.item}`
    }

    console.error(`[enchanting_apparatus] could not resolve item at ${debugLabel}: ${JSON.stringify(entry)}`)
    return null
}

ServerEvents.recipes(event => {
    
    event.remove({ mod: 'ars_n_spells' })

    let index = 1

    event.forEachRecipe({ type: 'ars_nouveau:enchanting_apparatus' }, recipe => {
        const crecipe = JSON.parse(recipe.json.toString())

        // output
        let outputId = crecipe.output?.item ?? crecipe.output ?? null
        if (!outputId) {
            console.error(`[enchanting_apparatus] no output at index ${index}`)
            index++
            return
        }
        let outputCount = crecipe.output?.count || 1

        // source cost
        let sourceCost = Math.max(crecipe.sourceCost || 0, 100)

        // reagent
        let reagents = Array.isArray(crecipe.reagent) ? crecipe.reagent : [crecipe.reagent]
        let reagentInputs = []
        for (let i = 0; i < reagents.length; i++) {
            let r = resolveItem(reagents[i], `index ${index} reagent[${i}]`)
            if (r) reagentInputs.push(r)
        }

        // pedestal
        let pedestalItems = crecipe.pedestalItems ?? []
        let pedestalInputs = []
        for (let i = 0; i < pedestalItems.length; i++) {
            let p = resolveItem(pedestalItems[i], `index ${index} pedestal[${i}]`)
            if (p) pedestalInputs.push(p)
        }

        // skip if there are no consumed inputs
        // gtm will throw a hissy fit
        if (reagentInputs.length === 0) {
            console.error(`[enchanting_apparatus] skipping index ${index} (${outputId}): no consumable reagent inputs`)
            index++
            return
        }

        let recipeId = `ars_nouveau/enchanting_apparatus_${stripNamespace(outputId)}_${index}`
        console.log(`[enchanting_apparatus] building index=${index} output=${outputId} source=${sourceCost} pedestals=${toString(pedestalInputs)} reagents=${toString(reagentInputs)}`)

        let r = event.recipes.gtceu.enchanting_sanctum(recipeId)
            .duration(sourceRound(sourceCost) * 2)
            .EUt(1920 + Math.round(sourceCost / 25))
            .itemOutputs(`${outputCount}x ${outputId}`)

        // only add fluid input if sourceCost is non-zero 
        // zero-amount fluids are rejected
        if (sourceCost > 0) {
            r.inputFluids(Fluid.of('starbunclemania:source_fluid', sourceCost))
        }

        // reagent is consumed
        reagentInputs.forEach(reagent => r.itemInputs(reagent))

        // pedestal items are also consumed
        pedestalInputs.forEach(pedestal => r.itemInputs(pedestal))

        index++
    })
})