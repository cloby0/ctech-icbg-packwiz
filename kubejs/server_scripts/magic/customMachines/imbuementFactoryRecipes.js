//priority: 1

let $ForgeRegistries = Java.loadClass("net.minecraftforge.registries.ForgeRegistries");

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

function resolveItem(entry, debugLabel) {
    if (!entry) {
        console.error(`[imbuement] null entry at ${debugLabel}`)
        return null
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
            console.warn(`[imbuement] skipping non-existent item '${resolved.item}' at ${debugLabel}`)
            return null
        }
    }

    console.error(`[imbuement] could not resolve item at ${debugLabel}: ${JSON.stringify(entry)}`)
    return null
}

// the core logic, separated out so it can be called manually too
function addImbuementRecipe(event, crecipe, index) {
    let outputRaw = crecipe.output ?? null
    if (!outputRaw) {
        console.error(`[imbuement] no output at index ${index}`)
        return
    }
    let outputId = typeof outputRaw === 'object' ? (outputRaw.item ?? null) : outputRaw
    let outputCount = (typeof outputRaw === 'object' ? outputRaw.count : crecipe.count) || 1

    let sourceCost = Math.max(crecipe.source || 0, 100)

    let centerInput = resolveItem(crecipe.input, `index ${index} input`)
    if (!centerInput) {
        console.error(`[imbuement] skipping index ${index}, could not resolve center input`)
        return
    }

    let pedestalItems = crecipe.pedestalItems ?? []
    let pedestalInputs = []
    for (let i = 0; i < pedestalItems.length; i++) {
        let inner = pedestalItems[i].item ?? pedestalItems[i]
        let p = resolveItem(inner, `index ${index} pedestal[${i}]`)
        if (p) pedestalInputs.push(p)
    }

    let recipeId = `ars_nouveau/imbuement_${stripNamespace(outputId)}_${index}`
    console.log(`[imbuement] index=${index} output=${outputId} source=${sourceCost} pedestals=${pedestalInputs.length}`)
    console.log(`[imbuement] raw source from json: ${crecipe.source}, sourceCost: ${crecipe.sourceCost}`)
    let r = event.recipes.gtceu.imbuement_factory(recipeId)
        .inputFluids(Fluid.of('starbunclemania:source_fluid', sourceCost))
        .itemInputs(centerInput)
        .itemOutputs(`${outputCount}x ${outputId}`)
        .duration(sourceRound(sourceCost) * 2)
        .EUt(1920 + Math.round(sourceCost / 25))

    pedestalInputs.forEach(pedestal => r.notConsumable(pedestal))
}

ServerEvents.recipes(event => {
    let index = 1

    event.forEachRecipe({ type: 'ars_nouveau:imbuement' }, recipe => {
        const crecipe = JSON.parse(recipe.json.toString())
        addImbuementRecipe(event, crecipe, index)
        index++
    })


    addImbuementRecipe(event, {
        input: { item: "gtceu:concepts_bucket" },
        output: "gtceu:metal_form_bucket",
        source: 7500,
        pedestalItems: [
            { item: { item: "gtceu:holy_silver_block" } }
        ]
    }, index++)

    addImbuementRecipe(event, {
        input: { item: "minecraft:amethyst_shard" },
        output: "irons_spellbooks:arcane_essence",
        source: 5000,
        pedestalItems: []
    }, index++)

    addImbuementRecipe(event, {
        input: { item: "kubejs:glowing_compound_dust" },
        output: "kubejs:impure_glimmering_dust",
        source: 100,
        pedestalItems: []
    }, index++)

    addImbuementRecipe(event, {
        input: { item: 'gtceu:source_gem' },
        output: 'reliquary:void_tear',
        source: 1500,
        pedestalItems: [
            { item: { item: 'minecraft:crying_obsidian', count: 4 } }
        ]
    }, index++)
})