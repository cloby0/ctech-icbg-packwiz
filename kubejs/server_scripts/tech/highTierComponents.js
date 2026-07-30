
ServerEvents.recipes(event => {

    // Warded SMDs: the third and final component tier. The axis is tolerance, not power --
    // ordinary electronics fail near something bound, so these are re-cased in consecrated
    // chromite. That is why every line's top two rungs were previously capped: not an arbitrary
    // gate, just components that could not survive the company they were keeping.
    let wardedSmds = ['diode', 'capacitor', 'transistor', 'resistor', 'inductor']
    wardedSmds.forEach(part => {
        event.recipes.gtceu.assembler('warded_smd_' + part)
            .itemInputs(
                '16x gtceu:advanced_smd_' + part,
                '4x gtceu:consecrated_chromite_foil',
                '2x gtceu:fine_consecrated_chromite_wire'
            )
            .inputFluids(Fluid.of('kubejs:argent_energy', 500))
            .itemOutputs('16x kubejs:warded_smd_' + part)
            .duration(400)
            .EUt(GTValues.VA[GTValues.UHV])
            .cleanroom(CleanroomType.CLEANROOM)
    })


    event.recipes.gtceu.assembler('draconium_wire_coil_recipe')
        .itemInputs(
            '8x gtceu:draconium_double_wire',
            '8x gtceu:draconic_fluxite_foil'
        )
        .inputFluids(Fluid.of('gtceu:tritanium', 144))
        .itemOutputs('1x kubejs:draconium_wire_coil')
        .duration(1000)
        .EUt(GTValues.VA[GTValues.UV])

    event.recipes.gtceu.assembler('awakened_draconium_wire_coil_recipe')
        .itemInputs(
            '8x gtceu:awakened_draconium_double_wire',
            '8x gtceu:chaotic_singulite_foil'
        )
        .inputFluids(Fluid.of('gtceu:draconium', 144))
        .itemOutputs('1x kubejs:awakened_draconium_wire_coil')
        .duration(1100)
        .EUt(GTValues.VA[GTValues.UHV])

    event.recipes.gtceu.assembler('cumium_wire_coil_recipe')
        .itemInputs(
            '8x gtceu:awakened_draconium_double_wire',
            '8x gtceu:cumium_foil'
        )
        .inputFluids(Fluid.of('gtceu:awakened_draconium', 144))
        .itemOutputs('1x kubejs:cumium_wire_coil')
        .duration(1200)
        .EUt(GTValues.VA[GTValues.UEV])


    event.recipes.gtceu.assembler('uev_machine_casing_recipe')
        .itemInputs('8x gtceu:awakened_draconium_plate')
        .inputFluids(Fluid.of('gtceu:lubricant', 100))
        .itemOutputs('1x gtceu:uev_machine_casing')
        .circuit(8)
        .duration(50)
        .EUt(16)

    event.recipes.gtceu.assembler('uiv_machine_casing_recipe')
        .itemInputs('8x gtceu:cumium_plate')
        .inputFluids(Fluid.of('gtceu:lubricant', 100))
        .itemOutputs('1x gtceu:uiv_machine_casing')
        .circuit(8)
        .duration(50)
        .EUt(16)


    event.recipes.gtceu.assembler('uev_machine_hull_recipe')
        .itemInputs(
            '1x gtceu:uev_machine_casing',
            '2x gtceu:chaotic_singulite_single_wire'
        )
        .inputFluids(Fluid.of('gtceu:polybenzimidazole', 288))
        .itemOutputs('1x gtceu:uev_machine_hull')
        .duration(50)
        .EUt(16)

    event.recipes.gtceu.assembler('uiv_machine_hull_recipe')
        .itemInputs(
            '1x gtceu:uiv_machine_casing',
            '2x gtceu:cumium_single_wire'
        )
        .inputFluids(Fluid.of('gtceu:polybenzimidazole', 288))
        .itemOutputs('1x gtceu:uiv_machine_hull')
        .duration(50)
        .EUt(16)


    event.recipes.gtceu.assembly_line('electric_motor_uhv')
        .itemInputs(
            '1x gtceu:long_magnetic_samarium_rod',
            '4x gtceu:long_draconium_rod',
            '4x gtceu:draconium_bolt',
            '8x gtceu:draconium_screw',
            '64x gtceu:fine_draconium_wire',
            '32x gtceu:fine_draconic_fluxite_wire',
            '2x gtceu:draconic_fluxite_single_wire'
        )
        .inputFluids(
            Fluid.of('gtceu:soldering_alloy', 576),
            Fluid.of('gtceu:lubricant', 2000)
        )
        .itemOutputs('1x gtceu:uhv_electric_motor')
        .duration(600)
        .EUt(GTValues.VA[GTValues.UHV])

    event.recipes.gtceu.assembly_line('electric_motor_uev')
        .itemInputs(
            '1x gtceu:long_magnetic_samarium_rod',
            '4x gtceu:long_awakened_draconium_rod',
            '4x gtceu:awakened_draconium_bolt',
            '8x gtceu:awakened_draconium_screw',
            '64x gtceu:fine_awakened_draconium_wire',
            '32x gtceu:fine_chaotic_singulite_wire',
            '2x gtceu:chaotic_singulite_single_wire'
        )
        .inputFluids(
            Fluid.of('gtceu:soldering_alloy', 1152),
            Fluid.of('gtceu:lubricant', 4000)
        )
        .itemOutputs('1x gtceu:uev_electric_motor')
        .duration(600)
        .EUt(GTValues.VA[GTValues.UEV])

    event.recipes.gtceu.assembly_line('electric_motor_uiv')
        .itemInputs(
            '1x gtceu:long_magnetic_samarium_rod',
            '4x gtceu:long_cumium_rod',
            '4x gtceu:cumium_bolt',
            '8x gtceu:cumium_screw',
            '64x gtceu:fine_cumium_wire',
            '32x gtceu:fine_cumium_wire',
            '2x gtceu:cumium_single_wire'
        )
        .inputFluids(
            Fluid.of('gtceu:soldering_alloy', 2304),
            Fluid.of('gtceu:lubricant', 8000)
        )
        .itemOutputs('1x gtceu:uiv_electric_motor')
        .duration(600)
        .EUt(GTValues.VA[GTValues.UIV])


    event.recipes.gtceu.assembly_line('electric_piston_uhv')
        .itemInputs(
            '1x gtceu:uhv_electric_motor',
            '4x gtceu:draconium_plate',
            '4x gtceu:draconium_bolt',
            '8x gtceu:draconium_screw',
            '4x gtceu:draconium_rod',
            '2x gtceu:draconium_spring',
            '2x gtceu:draconic_fluxite_single_wire'
        )
        .inputFluids(
            Fluid.of('gtceu:soldering_alloy', 576),
            Fluid.of('gtceu:lubricant', 1000)
        )
        .itemOutputs('1x gtceu:uhv_electric_piston')
        .duration(600)
        .EUt(GTValues.VA[GTValues.UHV])

    event.recipes.gtceu.assembly_line('electric_piston_uev')
        .itemInputs(
            '1x gtceu:uev_electric_motor',
            '4x gtceu:awakened_draconium_plate',
            '4x gtceu:awakened_draconium_bolt',
            '8x gtceu:awakened_draconium_screw',
            '4x gtceu:awakened_draconium_rod',
            '2x gtceu:awakened_draconium_spring',
            '2x gtceu:chaotic_singulite_single_wire'
        )
        .inputFluids(
            Fluid.of('gtceu:soldering_alloy', 1152),
            Fluid.of('gtceu:lubricant', 2000)
        )
        .itemOutputs('1x gtceu:uev_electric_piston')
        .duration(600)
        .EUt(GTValues.VA[GTValues.UEV])

    event.recipes.gtceu.assembly_line('electric_piston_uiv')
        .itemInputs(
            '1x gtceu:uiv_electric_motor',
            '4x gtceu:cumium_plate',
            '4x gtceu:cumium_bolt',
            '8x gtceu:cumium_screw',
            '4x gtceu:cumium_rod',
            '2x gtceu:long_cumium_rod',
            '2x gtceu:cumium_single_wire'
        )
        .inputFluids(
            Fluid.of('gtceu:soldering_alloy', 2304),
            Fluid.of('gtceu:lubricant', 4000)
        )
        .itemOutputs('1x gtceu:uiv_electric_piston')
        .duration(600)
        .EUt(GTValues.VA[GTValues.UIV])


    event.recipes.gtceu.assembler('conveyor_module_uhv')
        .itemInputs(
            '1x gtceu:draconic_fluxite_single_wire',
            '2x gtceu:uhv_electric_motor'
        )
        .inputFluids(Fluid.of('gtceu:styrene_butadiene_rubber', 864))
        .itemOutputs('1x gtceu:uhv_conveyor_module')
        .circuit(1)
        .duration(100)
        .EUt(GTValues.VA[GTValues.UHV])

    event.recipes.gtceu.assembler('conveyor_module_uev')
        .itemInputs(
            '1x gtceu:chaotic_singulite_single_wire',
            '2x gtceu:uev_electric_motor'
        )
        .inputFluids(Fluid.of('gtceu:styrene_butadiene_rubber', 864))
        .itemOutputs('1x gtceu:uev_conveyor_module')
        .circuit(1)
        .duration(100)
        .EUt(GTValues.VA[GTValues.UEV])

    event.recipes.gtceu.assembler('conveyor_module_uiv')
        .itemInputs(
            '1x gtceu:cumium_single_wire',
            '2x gtceu:uiv_electric_motor'
        )
        .inputFluids(Fluid.of('gtceu:styrene_butadiene_rubber', 864))
        .itemOutputs('1x gtceu:uiv_conveyor_module')
        .circuit(1)
        .duration(100)
        .EUt(GTValues.VA[GTValues.UIV])


    event.recipes.gtceu.assembly_line('electric_pump_uhv')
        .itemInputs(
            '1x gtceu:uhv_electric_motor',
            '2x gtceu:long_draconium_rod',
            '2x gtceu:draconium_bolt',
            '4x gtceu:draconium_screw',
            '1x gtceu:draconium_spring',
            '2x gtceu:draconic_fluxite_single_wire'
        )
        .inputFluids(
            Fluid.of('gtceu:styrene_butadiene_rubber', 250),
            Fluid.of('gtceu:soldering_alloy', 576)
        )
        .itemOutputs('1x gtceu:uhv_electric_pump')
        .duration(600)
        .EUt(GTValues.VA[GTValues.UHV])

    event.recipes.gtceu.assembly_line('electric_pump_uev')
        .itemInputs(
            '1x gtceu:uev_electric_motor',
            '2x gtceu:long_awakened_draconium_rod',
            '2x gtceu:awakened_draconium_bolt',
            '4x gtceu:awakened_draconium_screw',
            '1x gtceu:awakened_draconium_spring',
            '2x gtceu:chaotic_singulite_single_wire'
        )
        .inputFluids(
            Fluid.of('gtceu:styrene_butadiene_rubber', 250),
            Fluid.of('gtceu:soldering_alloy', 1152)
        )
        .itemOutputs('1x gtceu:uev_electric_pump')
        .duration(600)
        .EUt(GTValues.VA[GTValues.UEV])

    event.recipes.gtceu.assembly_line('electric_pump_uiv')
        .itemInputs(
            '1x gtceu:uiv_electric_motor',
            '2x gtceu:long_cumium_rod',
            '2x gtceu:cumium_bolt',
            '4x gtceu:cumium_screw',
            '2x gtceu:cumium_rod',
            '2x gtceu:cumium_single_wire'
        )
        .inputFluids(
            Fluid.of('gtceu:styrene_butadiene_rubber', 250),
            Fluid.of('gtceu:soldering_alloy', 2304)
        )
        .itemOutputs('1x gtceu:uiv_electric_pump')
        .duration(600)
        .EUt(GTValues.VA[GTValues.UIV])


    event.recipes.gtceu.assembly_line('robot_arm_uhv')
        .itemInputs(
            '4x gtceu:long_draconium_rod',
            '2x gtceu:draconium_plate',
            '4x gtceu:draconium_bolt',
            '2x gtceu:uhv_electric_motor',
            '1x gtceu:uhv_electric_piston',
            '1x #gtceu:circuits/uhv',
            '2x #gtceu:circuits/uv',
            '4x #gtceu:circuits/zpm',
            '4x gtceu:draconic_fluxite_single_wire'
        )
        .inputFluids(
            Fluid.of('gtceu:soldering_alloy', 1728),
            Fluid.of('gtceu:lubricant', 1000)
        )
        .itemOutputs('1x gtceu:uhv_robot_arm')
        .duration(600)
        .EUt(GTValues.VA[GTValues.UHV])

    event.recipes.gtceu.assembly_line('robot_arm_uev')
        .itemInputs(
            '4x gtceu:long_awakened_draconium_rod',
            '2x gtceu:awakened_draconium_plate',
            '4x gtceu:awakened_draconium_bolt',
            '2x gtceu:uev_electric_motor',
            '1x gtceu:uev_electric_piston',
            '1x #gtceu:circuits/uev',
            '2x #gtceu:circuits/uhv',
            '4x #gtceu:circuits/uv',
            '4x gtceu:chaotic_singulite_single_wire'
        )
        .inputFluids(
            Fluid.of('gtceu:soldering_alloy', 3456),
            Fluid.of('gtceu:lubricant', 2000)
        )
        .itemOutputs('1x gtceu:uev_robot_arm')
        .duration(600)
        .EUt(GTValues.VA[GTValues.UEV])

    event.recipes.gtceu.assembly_line('robot_arm_uiv')
        .itemInputs(
            '4x gtceu:long_cumium_rod',
            '2x gtceu:cumium_plate',
            '4x gtceu:cumium_bolt',
            '2x gtceu:uiv_electric_motor',
            '1x gtceu:uiv_electric_piston',
            '1x #gtceu:circuits/uiv',
            '2x #gtceu:circuits/uev',
            '4x #gtceu:circuits/uhv',
            '4x gtceu:cumium_single_wire'
        )
        .inputFluids(
            Fluid.of('gtceu:soldering_alloy', 6912),
            Fluid.of('gtceu:lubricant', 4000)
        )
        .itemOutputs('1x gtceu:uiv_robot_arm')
        .duration(600)
        .EUt(GTValues.VA[GTValues.UIV])


    event.recipes.gtceu.assembly_line('sensor_uhv')
        .itemInputs(
            '1x gtceu:draconic_framework_frame',
            '1x gtceu:uhv_electric_motor',
            '4x gtceu:draconium_plate',
            '1x kubejs:dragon_heart_crystal',
            '2x #gtceu:circuits/uhv',
            '64x gtceu:draconic_fluxite_foil',
            '32x gtceu:draconic_fluxite_foil',
            '4x gtceu:draconic_fluxite_single_wire'
        )
        .inputFluids(
            Fluid.of('gtceu:soldering_alloy', 2304),
            Fluid.of('gtceu:draconic_fluxite', 576)
        )
        .itemOutputs('1x gtceu:uhv_sensor')
        .duration(600)
        .EUt(GTValues.VA[GTValues.UHV])

    event.recipes.gtceu.assembly_line('sensor_uev')
        .itemInputs(
            '1x gtceu:awakened_framework_frame',
            '1x gtceu:uev_electric_motor',
            '4x gtceu:awakened_draconium_plate',
            '1x draconicevolution:chaos_shard',
            '2x #gtceu:circuits/uev',
            '64x gtceu:chaotic_singulite_foil',
            '32x gtceu:chaotic_singulite_foil',
            '4x gtceu:chaotic_singulite_single_wire'
        )
        .inputFluids(
            Fluid.of('gtceu:soldering_alloy', 4608),
            Fluid.of('gtceu:chaotic_singulite', 576)
        )
        .itemOutputs('1x gtceu:uev_sensor')
        .duration(600)
        .EUt(GTValues.VA[GTValues.UEV])

    event.recipes.gtceu.assembly_line('sensor_uiv')
        .itemInputs(
            '1x gtceu:awakened_framework_frame',
            '1x gtceu:uiv_electric_motor',
            '4x gtceu:cumium_plate',
            '1x draconicevolution:large_chaos_frag',
            '2x #gtceu:circuits/uiv',
            '64x gtceu:cumium_foil',
            '32x gtceu:cumium_foil',
            '4x gtceu:cumium_single_wire'
        )
        .inputFluids(
            Fluid.of('gtceu:soldering_alloy', 9216),
            Fluid.of('gtceu:cumium', 576)
        )
        .itemOutputs('1x gtceu:uiv_sensor')
        .duration(600)
        .EUt(GTValues.VA[GTValues.UIV])


    event.recipes.gtceu.assembly_line('emitter_uhv')
        .itemInputs(
            '1x gtceu:draconic_framework_frame',
            '1x gtceu:uhv_electric_motor',
            '4x gtceu:long_draconium_rod',
            '1x kubejs:dragon_heart_crystal',
            '2x #gtceu:circuits/uhv',
            '64x gtceu:draconic_fluxite_foil',
            '32x gtceu:draconic_fluxite_foil',
            '4x gtceu:draconic_fluxite_single_wire'
        )
        .inputFluids(
            Fluid.of('gtceu:soldering_alloy', 2304),
            Fluid.of('gtceu:draconic_fluxite', 576)
        )
        .itemOutputs('1x gtceu:uhv_emitter')
        .duration(600)
        .EUt(GTValues.VA[GTValues.UHV])

    event.recipes.gtceu.assembly_line('emitter_uev')
        .itemInputs(
            '1x gtceu:awakened_framework_frame',
            '1x gtceu:uev_electric_motor',
            '4x gtceu:long_awakened_draconium_rod',
            '1x draconicevolution:chaos_shard',
            '2x #gtceu:circuits/uev',
            '64x gtceu:chaotic_singulite_foil',
            '32x gtceu:chaotic_singulite_foil',
            '4x gtceu:chaotic_singulite_single_wire'
        )
        .inputFluids(
            Fluid.of('gtceu:soldering_alloy', 4608),
            Fluid.of('gtceu:chaotic_singulite', 576)
        )
        .itemOutputs('1x gtceu:uev_emitter')
        .duration(600)
        .EUt(GTValues.VA[GTValues.UEV])

    event.recipes.gtceu.assembly_line('emitter_uiv')
        .itemInputs(
            '1x gtceu:awakened_framework_frame',
            '1x gtceu:uiv_electric_motor',
            '4x gtceu:long_cumium_rod',
            '1x draconicevolution:large_chaos_frag',
            '2x #gtceu:circuits/uiv',
            '64x gtceu:cumium_foil',
            '32x gtceu:cumium_foil',
            '4x gtceu:cumium_single_wire'
        )
        .inputFluids(
            Fluid.of('gtceu:soldering_alloy', 9216),
            Fluid.of('gtceu:cumium', 576)
        )
        .itemOutputs('1x gtceu:uiv_emitter')
        .duration(600)
        .EUt(GTValues.VA[GTValues.UIV])


    event.recipes.gtceu.assembly_line('field_generator_uhv')
        .itemInputs(
            '1x gtceu:draconic_framework_frame',
            '6x gtceu:draconic_framework_plate',
            '1x kubejs:dragon_heart_crystal',
            '2x gtceu:uhv_emitter',
            '2x #gtceu:circuits/uhv',
            '64x gtceu:fine_draconium_wire',
            '64x gtceu:fine_draconic_fluxite_wire',
            '4x gtceu:draconic_fluxite_single_wire'
        )
        .inputFluids(
            Fluid.of('gtceu:soldering_alloy', 3456),
            Fluid.of('kubejs:argent_energy', 2000)
        )
        .itemOutputs('1x gtceu:uhv_field_generator')
        .duration(600)
        .EUt(GTValues.VA[GTValues.UHV])

    event.recipes.gtceu.assembly_line('field_generator_uev')
        .itemInputs(
            '1x gtceu:awakened_framework_frame',
            '6x gtceu:awakened_framework_plate',
            '1x draconicevolution:chaos_shard',
            '2x gtceu:uev_emitter',
            '2x #gtceu:circuits/uev',
            '64x gtceu:fine_awakened_draconium_wire',
            '64x gtceu:fine_chaotic_singulite_wire',
            '4x gtceu:chaotic_singulite_single_wire'
        )
        .inputFluids(
            Fluid.of('gtceu:soldering_alloy', 6912),
            Fluid.of('kubejs:guardian_distillate', 2000)
        )
        .itemOutputs('1x gtceu:uev_field_generator')
        .duration(600)
        .EUt(GTValues.VA[GTValues.UEV])

    event.recipes.gtceu.assembly_line('field_generator_uiv')
        .itemInputs(
            '1x gtceu:awakened_framework_frame',
            '6x gtceu:awakened_framework_plate',
            '1x draconicevolution:large_chaos_frag',
            '2x gtceu:uiv_emitter',
            '2x #gtceu:circuits/uiv',
            '64x gtceu:fine_awakened_draconium_wire',
            '64x gtceu:fine_cumium_wire',
            '4x gtceu:cumium_single_wire'
        )
        .inputFluids(
            Fluid.of('gtceu:soldering_alloy', 13824),
            Fluid.of('kubejs:guardian_distillate', 4000)
        )
        .itemOutputs('1x gtceu:uiv_field_generator')
        .duration(600)
        .EUt(GTValues.VA[GTValues.UIV])


    event.recipes.gtceu.assembler('voltage_coil_uhv')
        .itemInputs(
            '1x gtceu:magnetic_samarium_rod',
            '16x gtceu:fine_draconium_wire'
        )
        .itemOutputs('1x kubejs:uhv_voltage_coil')
        .circuit(1)
        .duration(200)
        .EUt(GTValues.VA[GTValues.UHV])

    event.recipes.gtceu.assembler('voltage_coil_uev')
        .itemInputs(
            '1x gtceu:magnetic_samarium_rod',
            '16x gtceu:fine_awakened_draconium_wire'
        )
        .itemOutputs('1x kubejs:uev_voltage_coil')
        .circuit(1)
        .duration(200)
        .EUt(GTValues.VA[GTValues.UEV])

    event.recipes.gtceu.assembler('voltage_coil_uiv')
        .itemInputs(
            '1x gtceu:magnetic_samarium_rod',
            '16x gtceu:fine_cumium_wire'
        )
        .itemOutputs('1x kubejs:uiv_voltage_coil')
        .circuit(1)
        .duration(200)
        .EUt(GTValues.VA[GTValues.UIV])


})
