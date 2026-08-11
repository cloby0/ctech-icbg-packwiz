// Mirror helper for Blood Magic's meteorRitual ("Mark of the Falling Tower",
// ritual.bloodmagic.meteorRitual, data/bloodmagic/recipes/meteor/*.json in
// BloodMagic-1.18-1.20.1-3.3.8-50.jar). The real ritual is untouched -- a Master Ritual Stone with
// the meteor pentacle still works with zero GT. This adds the optional gtceu:meteor_chamber
// multiblock lane on top: same catalyst item, same total LP syphon, but a fixed item payout
// instead of the ritual's randomised in-world ore explosion (a GT recipe can't world-gen terrain,
// so the weighted block tables are collapsed into a deterministic output list here).
//
// Only catalysts whose mod is actually in this pack are mirrored: mekanism/ice_and_fire/
// immersive_engineering/thermal/myst_ag meteor recipes from the jar are forge:mod_loaded-gated
// and never fire here, so they're skipped. myst_ag is doubly moot -- MysticalAgriculture was
// removed from the pack entirely (see MysticalAg Removal in memory).

let $ForgeRegistries = Java.loadClass("net.minecraftforge.registries.ForgeRegistries")

let _meteorCatalysts = [
    {
        id: 'iron',
        tier: 'LuV',
        input: '#forge:storage_blocks/iron',
        syphon: 1000000,
        outputs: [
            '32x gtceu:iron_ore', '16x gtceu:gold_ore', '16x gtceu:copper_ore', '16x gtceu:tin_ore',
            '8x gtceu:silver_ore', '8x gtceu:lead_ore', '8x gtceu:lapis_ore', '8x gtceu:redstone_ore'
        ]
    },
    {
        id: 'diamond',
        tier: 'LuV',
        input: '#forge:gems/diamond',
        syphon: 1000000,
        outputs: [
            '24x gtceu:diamond_ore', '16x gtceu:sapphire_ore', '16x gtceu:ruby_ore',
            '8x minecraft:emerald_ore', '8x gtceu:cinnabar_ore'
        ]
    },
    {
        id: 'nether',
        tier: 'LuV',
        input: 'minecraft:glowstone_dust',
        syphon: 1000000,
        outputs: [
            '24x minecraft:glowstone', '24x minecraft:nether_quartz_ore',
            '16x minecraft:nether_gold_ore', '4x minecraft:ancient_debris'
        ]
    },
    {
        id: 'stone',
        tier: 'LuV',
        input: 'minecraft:stone',
        syphon: 1000000,
        outputs: ['32x minecraft:stone', '16x gtceu:coal_ore', '8x gtceu:apatite_ore', '8x gtceu:iron_ore']
    },
    {
        id: 'create',
        tier: 'IV',
        input: 'create:andesite_alloy',
        syphon: 500000,
        outputs: ['32x minecraft:andesite', '16x gtceu:copper_ore', '16x gtceu:tin_ore', '8x gtceu:iron_ore']
    },
    {
        id: 'ae2',
        tier: 'IV',
        input: '#forge:gems/certus_quartz',
        syphon: 500000,
        outputs: [
            '32x ae2:sky_stone_block', '16x ae2:certus_quartz_crystal',
            '8x ae2:fluix_crystal', '8x ae2:quartz_block'
        ]
    }
]

function _itemExists(entry) {
    let id = entry.indexOf('x #') !== -1 ? null : entry.slice(entry.indexOf('x ') + 2)
    if (id === null) return true // tag ingredient, GT resolves it itself
    return !!$ForgeRegistries.ITEMS.getValue(id)
}

function addMeteorChamberRecipe(event, catalyst) {
    let bad = catalyst.outputs.filter(o => !_itemExists(o))
    if (bad.length) {
        console.warn(`[meteor_chamber] ${catalyst.id}: missing output(s) ${bad.join(', ')}, skipping`)
        return
    }

    let duration = catalyst.tier === 'LuV' ? 1200 : 600
    let lpRate = Math.max(1, Math.round(catalyst.syphon / duration))

    let r = event.recipes.gtceu.meteor_chamber(`meteor_chamber/${catalyst.id}`)
        .itemInputs(`1x ${catalyst.input}`)
        .duration(duration)
        .perTick(true)
        .input(global.LpCap, lpRate)
        .perTick(false)
        .EUt(GTValues.VA[GTValues[catalyst.tier]])
    catalyst.outputs.forEach(o => r.itemOutputs(o))
}

global.addMeteorChamberRecipe = addMeteorChamberRecipe

ServerEvents.recipes(event => {
    _meteorCatalysts.forEach(c => addMeteorChamberRecipe(event, c))

    event.recipes.gtceu.assembler('meteor_chamber_controller')
        .itemInputs(
            '4x gtceu:rhodium_plated_palladium_plate',
            '2x gtceu:hsse_frame',
            '1x bloodmagic:masterritualstone',
            '1x botania:bifrost_perm',
            '1x gtceu:luv_field_generator',
            '1x gtceu:luv_sensor',
            '1x #gtceu:circuits/luv'
        )
        .inputFluids(Fluid.of('gtceu:soldering_alloy', 288))
        .itemOutputs('1x gtceu:meteor_chamber')
        .duration(400)
        .EUt(GTValues.VA[GTValues.LuV])
})
