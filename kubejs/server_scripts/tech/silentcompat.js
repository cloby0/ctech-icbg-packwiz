ServerEvents.recipes(event => {

    // Remove vanilla ore-to-ingot smelting for all silentcompat ore metals
    event.remove({ output: 'silentcompat:plasteel_ingot', type: 'minecraft:smelting' })
    event.remove({ output: 'silentcompat:plasteel_ingot', type: 'minecraft:blasting' })
    event.remove({ output: 'silentcompat:voidmetal_ingot', type: 'minecraft:smelting' })
    event.remove({ output: 'silentcompat:voidmetal_ingot', type: 'minecraft:blasting' })
    event.remove({ output: 'silentcompat:solarmetal_ingot', type: 'minecraft:smelting' })
    event.remove({ output: 'silentcompat:solarmetal_ingot', type: 'minecraft:blasting' })
    event.remove({ output: 'silentcompat:arcmetal_ingot', type: 'minecraft:smelting' })
    event.remove({ output: 'silentcompat:arcmetal_ingot', type: 'minecraft:blasting' })

    // Plasteel is a synthetic alloy — not smelted from ore, alloyed from steel and polyethylene
    // 3600K requires nichrome coils (EV gate)
    event.recipes.gtceu.electric_blast_furnace('silentcompat_plasteel_ingot')
        .itemInputs('4x gtceu:steel_ingot', '2x gtceu:polyethylene_plate')
        .itemOutputs('4x silentcompat:plasteel_ingot')
        .blastFurnaceTemp(3600)
        .duration(20 * 20)
        .EUt(GTValues.VA[GTValues.EV])

})
