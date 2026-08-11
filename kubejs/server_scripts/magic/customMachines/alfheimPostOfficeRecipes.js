// Mirror helper for Botania's Elven Trade Ritual (botania:elven_trade). Real Alfheim Portal trade
// is untouched. Unlike the pack's other Botania ritual mirrors, elven_trade recipes carry no mana
// field of their own -- see alfheim_post_office.js for why this charges one flat "portal upkeep"
// mana rate on every trade (ManaPool.INITIATE) instead of reverse-tiering off a per-recipe number.
// Fixed at Initiate/HV, not later -- elven_trade is how elementium (an Initiate-tier metal,
// manasteel -> terrasteel -> elementium -> gaia_spirit = Apprentice -> Sorcerer) is actually made,
// so the trade itself has to be reachable at or before Initiate, not gated behind it.
//
// Sweeps ALL botania:elven_trade recipes, not just Botania's own -- this also picks up the 2 the
// pack already authors directly via event.custom in initiate.js, no changes needed there.

let $ForgeRegistries = Java.loadClass("net.minecraftforge.registries.ForgeRegistries")

let _nextPostOfficeIndex = 1

function stripNamespace(str) {
    const colon = str.indexOf(':')
    return colon === -1 ? str : str.slice(colon + 1)
}

function _resolvePostOfficeEntry(entry, debugLabel) {
    if (!entry) return null
    let count = entry.count || 1
    if (entry.tag) return `${count}x #${entry.tag}`
    let id = entry.item ?? null
    if (!id) {
        console.warn(`[alfheim_post_office] unrecognised entry shape at ${debugLabel}`)
        return null
    }
    if (!$ForgeRegistries.ITEMS.getValue(id)) {
        console.warn(`[alfheim_post_office] skipping non-existent item '${id}' at ${debugLabel}`)
        return null
    }
    return `${count}x ${id}`
}

let _postOfficeMana = ManaPool.INITIATE
let _postOfficeDuration = 200
let _postOfficeManaRate = Math.round(_postOfficeMana / _postOfficeDuration)

ServerEvents.recipes(event => {

    event.forEachRecipe({ type: 'botania:elven_trade' }, recipe => {
        let index = _nextPostOfficeIndex++
        let crecipe
        try {
            crecipe = JSON.parse(recipe.json.toString())
        } catch (e) {
            console.warn('[alfheim_post_office] unreadable elven_trade json, skipping')
            return
        }

        let rawInputs = crecipe.ingredients || []
        let rawOutputs = crecipe.output || []
        if (rawInputs.length === 0 || rawOutputs.length === 0) return
        if (rawInputs.length > 4 || rawOutputs.length > 2) {
            console.warn(`[alfheim_post_office] entry ${index}: ${rawInputs.length} in / ${rawOutputs.length} out exceeds slot cap, skipping`)
            return
        }

        let inputs = rawInputs.map((e, i) => _resolvePostOfficeEntry(e, `${index} input[${i}]`))
        let outputs = rawOutputs.map((e, i) => _resolvePostOfficeEntry(e, `${index} output[${i}]`))
        if (inputs.some(e => e === null) || outputs.some(e => e === null)) return

        let label = stripNamespace(recipe.id ? recipe.id.toString() : `trade_${index}`).replace(/[^a-z0-9_]/gi, '_')

        let gt = event.recipes.gtceu.alfheim_post_office(`alfheim_post_office/${label}`)
            .duration(_postOfficeDuration)
            .perTick(true)
            .input(global.ManaCap, _postOfficeManaRate)
            .perTick(false)
            .EUt(GTValues.VA[GTValues.HV])
        inputs.forEach(i => gt.itemInputs(i))
        outputs.forEach(o => gt.itemOutputs(o))
    })

    event.recipes.gtceu.assembler('alfheim_post_office_controller')
        .itemInputs(
            '4x gtceu:elenbarite_plate',
            '1x gtceu:elenbarite_frame',
            '1x botania:pixie_dust',
            '1x botania:terrasteel_block',
            '1x gtceu:hv_electric_pump',
            '1x gtceu:hv_sensor',
            '1x #gtceu:circuits/hv'
        )
        .inputFluids(Fluid.of('gtceu:soldering_alloy', 72))
        .itemOutputs('1x gtceu:alfheim_post_office')
        .duration(400)
        .EUt(GTValues.VA[GTValues.HV])

})
