// Machine casings/hulls, coils, and all components for UHV/UEV/UIV tiers.
// GT only defines component recipes through UV. UHV/UEV/UIV need manual recipes.
// Requires GTCEu high tier enabled in config.

ServerEvents.recipes(event => {

    // =========================================================
    // COILS
    // KubeJS-registered coils get no auto-gen recipes.
    // Pattern: 8x spring (coiled rod) + 8x foil (insulation) + binding fluid
    // =========================================================

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

    // cumium is SC — use awakened_draconium (non-SC) double wire for heat generation
    event.recipes.gtceu.assembler('cumium_wire_coil_recipe')
        .itemInputs(
            '8x gtceu:awakened_draconium_double_wire',
            '8x gtceu:cumium_foil'
        )
        .inputFluids(Fluid.of('gtceu:awakened_draconium', 144))
        .itemOutputs('1x kubejs:cumium_wire_coil')
        .duration(1200)
        .EUt(GTValues.VA[GTValues.UEV])

    // =========================================================
    // MACHINE CASINGS
    // GT defines casings to UHV (Neutronium). UEV/UIV need manual recipes.
    // =========================================================

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

    // =========================================================
    // MACHINE HULLS
    // GT defines hulls to UHV. UEV/UIV need manual recipes.
    // Pattern: tier_casing + 2x tier_wire + Polybenzimidazole 288mB
    // =========================================================

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

    // =========================================================
    // ELECTRIC MOTORS
    // Assembly line. Pattern: magnetic_long_rod + metal_long_rod×4 + bolt×4 + screw×8
    //   + base_fine_wire×64 + wire_fine_wire×32 + wire×2 + SA + Lubricant
    // =========================================================

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

    // =========================================================
    // ELECTRIC PISTONS
    // Assembly line. Pattern: motor + plate×4 + bolt×4 + screw×8 + rod×4 + spring×2 + wire×2
    // UIV substitutes cumium_long_rod for spring (cumium has no spring flag)
    // =========================================================

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

    // =========================================================
    // CONVEYOR MODULES
    // Assembler. Pattern: wire + motor×2 + StyreneButadieneRubber 864mB + circuit(1)
    // =========================================================

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

    // =========================================================
    // ELECTRIC PUMPS
    // Assembly line. Pattern: motor + long_rod×2 + bolt×2 + screw×4 + spring (rotor) + wire×2 + SBR + SA
    // UIV uses extra cumium_rod as rotor substitute (no spring)
    // =========================================================

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

    // =========================================================
    // ROBOT ARMS
    // Assembly line. Pattern: long_rod×4 + plate×2 + bolt×4 + motor×2 + piston
    //   + circuits (tier + tier-1×2 + tier-2×4) + wire×4 + SA + Lubricant
    // =========================================================

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

    // =========================================================
    // SENSORS
    // Assembly line. Pattern: frame + motor + plate×4 + gem + circuits×2
    //   + foil×64 + foil×32 + wire×4 + SA
    // Pack gems: UHV=dragon_heart_crystal, UEV=chaos_shard, UIV=large_chaos_frag
    // =========================================================

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

    // =========================================================
    // EMITTERS
    // Assembly line. Pattern: frame + motor + long_rod×4 + gem + circuits×2
    //   + foil×64 + foil×32 + wire×4 + SA
    // =========================================================

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

    // =========================================================
    // FIELD GENERATORS
    // Assembly line. Pattern: frame + plate×6 + special_item + emitter×2 + circuits×2
    //   + fine_wire×64 + fine_wire×64 (wire_material) + wire×4 + SA + exotic_fluid
    // Pack exotic fluid: UHV=draconic_computation, UEV/UIV=chaos_matrix_fluid
    // =========================================================

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
            Fluid.of('kubejs:draconic_computation', 2000)
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
            Fluid.of('kubejs:chaos_matrix_fluid', 2000)
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
            Fluid.of('kubejs:chaos_matrix_fluid', 4000)
        )
        .itemOutputs('1x gtceu:uiv_field_generator')
        .duration(600)
        .EUt(GTValues.VA[GTValues.UIV])

})
