ServerEvents.recipes(event => {

    event.recipes.gtceu.fusion_reactor('draconium_fusion')
        .inputFluids(
            Fluid.of('gtceu:plutonium_241', 128),
            Fluid.of('gtceu:naquadah', 128)
        )
        .outputFluids(Fluid.of('gtceu:draconium', 32))
        .duration(300)
        .EUt(98304)
        .fusionStartEU(640000000)


    event.remove({ type: 'minecraft:smelting', output: 'draconicevolution:draconium_ingot' })
    event.remove({ type: 'minecraft:blasting', output: 'draconicevolution:draconium_ingot' })
    event.remove({ type: 'minecraft:smelting', output: 'draconicevolution:awakened_draconium_ingot' })

    event.recipes.gtceu.draconic_infusion_chamber('awakened_draconium_infusion')
        .itemInputs('1x draconicevolution:draconium_ingot')
        .inputFluids(Fluid.of('kubejs:draconic_computation', 2000))
        .itemOutputs('1x draconicevolution:awakened_draconium_ingot')
        .duration(400)
        .EUt(GTValues.VA[GTValues.UHV])

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

    event.recipes.gtceu.mixer('draconic_fluxite_dust_mixing')
        .itemInputs(
            '1x draconicevolution:awakened_draconium_dust',
            '1x gtceu:naquadria_dust',
            '1x gtceu:gaia_spirit_dust'
        )
        .itemOutputs('3x gtceu:draconic_fluxite_dust')
        .duration(400)
        .EUt(GTValues.VA[GTValues.UHV])

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

    event.recipes.gtceu.cutter('cut_draconic_boule')
        .itemInputs('kubejs:draconic_boule')
        .inputFluids(Fluid.of('gtceu:lubricant', 2000))
        .itemOutputs('384x gtceu:neutronium_wafer')
        .duration(3000)
        .EUt(GTValues.VA[GTValues.UV])
        .cleanroom(CleanroomType.CLEANROOM)

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


    event.recipes.gtceu.assembler('draconic_infusion_chamber_controller')
        .itemInputs(
            '1x gtceu:uhv_machine_hull',
            '2x kubejs:draconic_framework_casing',
            '1x gtceu:uhv_field_generator',
            '2x gtceu:uhv_emitter',
            '2x #gtceu:circuits/uhv'
        )
        .inputFluids(Fluid.of('kubejs:draconic_computation', 2000))
        .itemOutputs('1x gtceu:draconic_infusion_chamber')
        .duration(600)
        .EUt(GTValues.VA[GTValues.UHV])

    event.recipes.gtceu.assembly_line('draconic_processor_supercomputer_recipe')
        .itemInputs(
            '2x gtceu:tritanium_frame',
            '2x kubejs:draconic_processor_assembly',
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
        .itemOutputs('kubejs:draconic_processor_supercomputer')
        .duration(2000)
        .EUt(GTValues.VA[GTValues.UHV])

    event.recipes.gtceu.circuit_assembler('draconic_processor_recipe')
        .itemInputs(
            '1x gtceu:neutronium_wafer',
            '4x gtceu:draconium_foil',
            '1x kubejs:dragon_heart_crystal',
            '8x gtceu:advanced_smd_diode',
            '8x gtceu:advanced_smd_capacitor',
            '8x gtceu:advanced_smd_transistor',
            '8x gtceu:advanced_smd_resistor'
        )
        .inputFluids(Fluid.of('kubejs:draconic_computation', 500))
        .itemOutputs('1x kubejs:draconic_processor')
        .duration(400)
        .EUt(GTValues.VA[GTValues.UHV])

    event.recipes.gtceu.circuit_assembler('draconic_processor_assembly_recipe')
        .itemInputs(
            '2x kubejs:draconic_processor',
            '2x gtceu:neutronium_wafer',
            '4x gtceu:draconium_foil',
            '1x gtceu:awakened_draconium_foil',
            '16x gtceu:advanced_smd_diode',
            '16x gtceu:advanced_smd_capacitor',
            '16x gtceu:advanced_smd_transistor',
            '16x gtceu:advanced_smd_resistor',
            '8x gtceu:ram_chip'
        )
        .inputFluids(Fluid.of('kubejs:draconic_computation', 1000))
        .itemOutputs('1x kubejs:draconic_processor_assembly')
        .duration(600)
        .EUt(GTValues.VA[GTValues.UHV])

    event.recipes.gtceu.assembly_line('draconic_processor_mainframe_recipe')
        .itemInputs(
            '2x gtceu:tritanium_frame',
            '2x kubejs:draconic_processor_supercomputer',
            '4x kubejs:draconic_resonance_board',
            '32x gtceu:advanced_smd_diode',
            '32x gtceu:advanced_smd_capacitor',
            '32x gtceu:advanced_smd_transistor',
            '32x gtceu:advanced_smd_resistor',
            '32x gtceu:advanced_smd_inductor',
            '32x gtceu:ram_chip',
            '16x gtceu:draconic_fluxite_double_wire',
            '8x gtceu:awakened_draconium_plate',
            '4x gtceu:chaos_crystal_dust'
        )
        .inputFluids(
            Fluid.of('gtceu:soldering_alloy', 2880),
            Fluid.of('kubejs:draconic_computation', 6000),
            Fluid.of('kubejs:chaos_matrix_fluid', 1000)
        )
        .itemOutputs('1x kubejs:draconic_processor_mainframe')
        .duration(2000)
        .EUt(GTValues.VA[GTValues.UEV])

})
