ServerEvents.recipes(event => {

    // draconium EBF is auto-generated from blastTemp(9000) in gtceuMaterialRegistry.js
    // ingot setIgnored → draconicevolution:draconium_ingot; vanilla smelt removed below

    // Remove DE vanilla smelting — EBF is the only path for draconium,
    // Draconic Infusion Chamber is the only path for awakened_draconium
    event.remove({ type: 'minecraft:smelting', output: 'draconicevolution:draconium_ingot' })
    event.remove({ type: 'minecraft:blasting', output: 'draconicevolution:draconium_ingot' })
    event.remove({ type: 'minecraft:smelting', output: 'draconicevolution:awakened_draconium_ingot' })

    // awakened_draconium — Draconic Infusion Chamber (UHV gate)
    // draconium_ingot + draconic_computation → awakened_draconium_ingot
    event.recipes.gtceu.draconic_infusion_chamber('awakened_draconium_infusion')
        .itemInputs('1x draconicevolution:draconium_ingot')
        .inputFluids(Fluid.of('kubejs:draconic_computation', 2000))
        .itemOutputs('1x draconicevolution:awakened_draconium_ingot')
        .duration(400)
        .EUt(GTValues.VA[GTValues.UHV])

    // draconic_framework mixer — replaces auto-generated mixer to add dragon_heart_crystal gate
    // EBF at 12000K is auto-generated from components + blastTemp in startup
    event.remove({ type: 'gtceu:mixer', output: 'gtceu:draconic_framework_dust' })
    event.recipes.gtceu.mixer('draconic_framework_dust_mixing')
        .itemInputs(
            '2x gtceu:draconium_dust',
            '1x gtceu:neutronium_dust',
            '1x gtceu:gaia_spirit_dust',
            '1x kubejs:dragon_heart_crystal'
        )
        .itemOutputs('4x gtceu:draconic_framework_dust')
        .duration(400)
        .EUt(GTValues.VA[GTValues.UHV])

    // Draconic Computation fluid — UV Chemical Reactor
    event.recipes.gtceu.chemical_reactor('draconic_computation_synthesis')
        .itemInputs(
            '2x #gtceu:circuits/uv',
            '1x draconicevolution:awakened_draconium_dust',
            '1x gtceu:gaia_spirit_dust'
        )
        .inputFluids(Fluid.of('kubejs:liquid_computation', 4000))
        .outputFluids(Fluid.of('kubejs:draconic_computation', 8000))
        .duration(200)
        .EUt(GTValues.VA[GTValues.UV])

    // Draconic Boule cutting — 384 neutronium wafers (vs 192 from gaian_neutronium_boule)
    event.recipes.gtceu.cutter('cut_draconic_boule')
        .itemInputs('kubejs:draconic_boule')
        .inputFluids(Fluid.of('gtceu:lubricant', 2000))
        .itemOutputs('384x gtceu:neutronium_wafer')
        .duration(3000)
        .EUt(GTValues.VA[GTValues.UV])
        .cleanroom(CleanroomType.CLEANROOM)

    // Draconic Resonance Board — UHV cleanroom assembler
    event.recipes.gtceu.assembler('draconic_resonance_board_assembly')
        .itemInputs(
            '4x gtceu:neutronium_wafer',
            '2x gtceu:draconium_foil',
            '1x kubejs:dragon_heart_crystal',
            '1x gtceu:awakened_draconium_foil'
        )
        .inputFluids(Fluid.of('kubejs:draconic_computation', 1000))
        .itemOutputs('kubejs:draconic_resonance_board')
        .duration(400)
        .EUt(GTValues.VA[GTValues.UHV])
        .cleanroom(CleanroomType.CLEANROOM)

    // Draconic Framework Casing — UHV assembler
    // #gtceu:circuits/uhv = gtceu:wetware_processor_mainframe (GTCEu native, unchanged)
    event.recipes.gtceu.assembler('draconic_framework_casing_assembly')
        .itemInputs(
            '4x gtceu:draconic_framework_plate',
            '4x gtceu:draconic_framework_rod',
            '1x draconicevolution:draconium_block',
            '1x #gtceu:circuits/uhv'
        )
        .inputFluids(Fluid.of('gtceu:lubricant', 100))
        .itemOutputs('8x kubejs:draconic_framework_casing')
        .duration(200)
        .EUt(GTValues.VA[GTValues.UHV])

    // awakened_framework EBF auto-generated from components + blastTemp in startup

    // Draconic Resonance Assembly (second UHV circuit, gated) — primary assembly line recipe
    // Also tagged into #gtceu:circuits/uhv alongside wetware mainframe
    event.recipes.gtceu.assembly_line('draconic_resonance_assembly_recipe')
        .itemInputs(
            '2x gtceu:tritanium_frame',
            '2x gtceu:wetware_processor_computer',
            '4x kubejs:draconic_resonance_board',
            '32x gtceu:advanced_smd_diode',
            '32x gtceu:advanced_smd_capacitor',
            '32x gtceu:advanced_smd_transistor',
            '32x gtceu:advanced_smd_resistor',
            '32x gtceu:advanced_smd_inductor',
            '64x gtceu:polybenzimidazole_foil',
            '32x gtceu:ram_chip',
            '16x gtceu:enriched_naquadah_trinium_europium_duranide_double_wire',
            '8x gtceu:europium_plate',
            '2x kubejs:dragon_heart_crystal'
        )
        .inputFluids(
            Fluid.of('gtceu:soldering_alloy', 2880),
            Fluid.of('gtceu:polybenzimidazole', 1152),
            Fluid.of('kubejs:draconic_computation', 4000)
        )
        .itemOutputs('kubejs:draconic_resonance_assembly')
        .duration(2000)
        .EUt(300000)

})
