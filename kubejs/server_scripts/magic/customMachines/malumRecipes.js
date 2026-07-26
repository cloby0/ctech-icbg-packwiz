// Mirror helpers for Malum's recipe types, matching imbuementFactoryRecipes.js in shape.
// These write only the Malum-native recipe -- Malum's handlers are themselves the magic
// path, so unlike the Ars helpers there is no GT multiblock twin.

let $ForgeRegistries = Java.loadClass("net.minecraftforge.registries.ForgeRegistries");

function _malumValidOutput(outputId, label) {
    if (!outputId || typeof outputId !== 'string') {
        console.warn(`[malum] skipping ${label}: null/non-string output '${outputId}'`)
        return false
    }
    if (!$ForgeRegistries.ITEMS.getValue(outputId)) {
        console.warn(`[malum] skipping ${label}: non-existent output '${outputId}'`)
        return false
    }
    return true
}

function _malumSpirits(spirits) {
    let out = []
    for (let i = 0; i < spirits.length; i++) {
        let s = spirits[i]
        if (typeof s === 'string') {
            out.push({ type: s })
        } else if (s.count && s.count > 1) {
            out.push({ type: s.type, count: s.count })
        } else {
            out.push({ type: s.type })
        }
    }
    return out
}

function _malumStrip(id) {
    return id.indexOf(':') === -1 ? id : id.split(':')[1]
}

function _malumOutput(crecipe) {
    let id = typeof crecipe.output === 'object' ? crecipe.output.item : crecipe.output
    let count = (typeof crecipe.output === 'object' ? crecipe.output.count : crecipe.count) || 1
    return { id: id, count: count }
}

let _spiritInfusionIndex = 0

function addSpiritInfusion(event, crecipe) {
    let index = _spiritInfusionIndex++
    let o = _malumOutput(crecipe)
    if (!_malumValidOutput(o.id, `infusion index ${index}`)) return

    let json = {
        type: 'malum:spirit_infusion',
        input: typeof crecipe.input === 'string' ? { item: crecipe.input } : crecipe.input,
        output: o.count > 1 ? { item: o.id, count: o.count } : { item: o.id },
        spirits: _malumSpirits(crecipe.spirits || []),
    }
    if (crecipe.extraItems && crecipe.extraItems.length > 0) {
        json.extra_items = crecipe.extraItems
    }

    console.log(`[malum] infusion ${index}: ${o.id} spirits=${json.spirits.length}`)
    event.custom(json).id(`kubejs:spirit_infusion_${_malumStrip(o.id)}_${index}`)
}

let _spiritFocusingIndex = 0

function addSpiritFocusing(event, crecipe) {
    let index = _spiritFocusingIndex++
    let o = _malumOutput(crecipe)
    if (!_malumValidOutput(o.id, `focusing index ${index}`)) return

    let json = {
        type: 'malum:spirit_focusing',
        durabilityCost: crecipe.durabilityCost || 2,
        time: crecipe.time || 300,
        input: { item: crecipe.impetus || 'malum:alchemical_impetus' },
        output: o.count > 1 ? { item: o.id, count: o.count } : { item: o.id },
        spirits: _malumSpirits(crecipe.spirits || []),
    }

    console.log(`[malum] focusing ${index}: ${o.id} x${o.count} dur=${json.durabilityCost}`)
    event.custom(json).id(`kubejs:spirit_focusing_${_malumStrip(o.id)}_${index}`)
}

let _spiritTransmutationIndex = 0

function addSpiritTransmutation(event, crecipe) {
    let index = _spiritTransmutationIndex++
    let o = _malumOutput(crecipe)
    if (!_malumValidOutput(o.id, `transmutation index ${index}`)) return

    let inputId = typeof crecipe.input === 'object' ? crecipe.input.item : crecipe.input
    if (!$ForgeRegistries.ITEMS.getValue(inputId)) {
        console.warn(`[malum] skipping transmutation ${index}: non-existent input '${inputId}'`)
        return
    }

    console.log(`[malum] transmutation ${index}: ${inputId} -> ${o.id}`)
    event.custom({
        type: 'malum:spirit_transmutation',
        input: { item: inputId },
        output: { item: o.id },
    }).id(`kubejs:spirit_transmutation_${_malumStrip(inputId)}_to_${_malumStrip(o.id)}`)
}

let _spiritRepairIndex = 0

function addSpiritRepair(event, crecipe) {
    let index = _spiritRepairIndex++
    let inputs = crecipe.inputs || []
    if (inputs.length === 0) {
        console.warn(`[malum] skipping repair ${index}: no inputs`)
        return
    }
    for (let i = 0; i < inputs.length; i++) {
        if (!$ForgeRegistries.ITEMS.getValue(inputs[i])) {
            console.warn(`[malum] skipping repair ${index}: non-existent input '${inputs[i]}'`)
            return
        }
    }

    // Explicit inputs only. itemIdRegex/modIdRegex stay empty deliberately -- broad regex
    // matching is what made spirit repair a pack-wide bypass of GT and Silent Gear repair,
    // and those recipes were removed in Phase 2.
    console.log(`[malum] repair ${index}: ${inputs.length} item(s)`)
    event.custom({
        type: 'malum:spirit_repair',
        durabilityPercentage: crecipe.durabilityPercentage || 0.5,
        inputs: inputs,
        itemIdRegex: '',
        modIdRegex: '',
        repairMaterial: crecipe.repairMaterial,
        spirits: _malumSpirits(crecipe.spirits || []),
    }).id(`kubejs:spirit_repair_${_malumStrip(inputs[0])}_${index}`)
}

global.addSpiritInfusion = addSpiritInfusion
global.addSpiritFocusing = addSpiritFocusing
global.addSpiritTransmutation = addSpiritTransmutation
global.addSpiritRepair = addSpiritRepair
