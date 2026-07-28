
let $ForgeRegistries = Java.loadClass("net.minecraftforge.registries.ForgeRegistries");

let _nextEldrinAltarIndex = 1

function stripNamespace(str) {
    const colon = str.indexOf(':')
    return colon === -1 ? str : str.slice(colon + 1)
}

function powerRound(num) {
    if ((num / 100) > 20) {
        return num / 100
    } else {
        return 20
    }
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
    let outputCount = (typeof outputRaw === 'object' ? outputRaw.count : crecipe.count) || 1

    let tier = crecipe.tier || 0
    let powers = normalizePower(crecipe)
    let totalPower = powers.reduce((sum, p) => sum + (p.amount || 0), 0)

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

    if (!crecipe.skipAltar) {
        let altarItems = rawItems.map(i => normalizeEldrinItem(i))
        let r = event.recipes.mna.eldrinAltar(outputId, altarItems).tier(tier)
        powers.forEach(p => r.powerRequirement(p.affinity, p.amount))
        r.id(`kubejs:eldrin_altar_${stripNamespace(outputId)}_${index}`)
    }

    let recipeId = `mna/eldrin_altar_${stripNamespace(outputId)}_${index}`
    console.log(`[eldrin_altar] ${index}: ${outputId} power=${totalPower} tier=${tier}`)
    let r = event.recipes.gtceu.imbuement_factory(recipeId)
        .itemOutputs(`${outputCount}x ${outputId}`)
        .duration(powerRound(totalPower) * 2)
        .EUt(1920 + Math.round(totalPower / 25))

    resolvedItems.forEach(item => r.itemInputs(item))
}

global.addEldrinAltarRecipe = addEldrinAltarRecipe

ServerEvents.recipes(event => {
    event.forEachRecipe({ type: 'mna:eldrin-altar' }, recipe => {
        const crecipe = JSON.parse(recipe.json.toString())
        crecipe.items = crecipe.items ?? []
        crecipe.power = crecipe.power_requirements ?? []
        crecipe.skipAltar = true
        addEldrinAltarRecipe(event, crecipe)
    })

    event.recipes.gtceu.assembler('imbuement_factory_controller')
        .itemInputs(
            '4x gtceu:ambrotungstite_plate',
            '2x gtceu:ambrotungstite_frame',
            '1x mna:vinteum_ingot',
            '1x gtceu:hv_electric_pump',
            '1x gtceu:hv_emitter',
            '1x #gtceu:circuits/hv'
        )
        .inputFluids(Fluid.of('gtceu:soldering_alloy', 144))
        .itemOutputs('1x gtceu:imbuement_factory')
        .duration(400)
        .EUt(GTValues.VA[GTValues.HV])

    event.recipes.gtceu.assembler('imbuement_holystone_casing_assembly')
        .itemInputs(
            '4x gtceu:ambrotungstite_plate',
            '4x gtceu:ambrotungstite_rod',
            '1x aether:holystone_bricks',
            '1x #gtceu:circuits/hv'
        )
        .inputFluids(Fluid.of('gtceu:lubricant', 50))
        .itemOutputs('8x kubejs:imbuement_holystone_casing')
        .duration(200)
        .EUt(GTValues.VA[GTValues.HV])
})
