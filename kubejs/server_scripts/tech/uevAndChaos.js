ServerEvents.recipes(event => {


    event.recipes.gtceu.mixer('chaotic_singulite_dust_mixing')
        .itemInputs(
            '1x draconicevolution:awakened_draconium_dust',
            '1x gtceu:chaos_crystal_dust',
            '1x gtceu:gaia_spirit_dust'
        )
        .itemOutputs('3x gtceu:chaotic_singulite_dust')
        .duration(400)
        .EUt(GTValues.VA[GTValues.UHV])

    event.recipes.gtceu.mixer('awakened_framework_dust_mixing')
        .itemInputs(
            '2x draconicevolution:awakened_draconium_dust',
            '1x gtceu:neutronium_dust',
            '1x gtceu:chaos_crystal_dust',
            '1x gtceu:gaia_spirit_dust'
        )
        .itemOutputs('5x gtceu:awakened_framework_dust')
        .duration(400)
        .EUt(GTValues.VA[GTValues.UHV])

    event.recipes.gtceu.macerator('chaos_shard_maceration')
        .itemInputs('1x draconicevolution:chaos_shard')
        .itemOutputs('4x gtceu:chaos_crystal_dust')
        .duration(200)
        .EUt(GTValues.VA[GTValues.UV])

    event.recipes.gtceu.assembler('chaos_harmonic_board_assembly')
        .itemInputs(
            '4x gtceu:neutronium_wafer',
            '2x gtceu:awakened_draconium_foil',
            '1x kubejs:stabilized_chaos_crystal',
            '1x gtceu:chaos_crystal_dust'
        )
        .inputFluids(Fluid.of('kubejs:argent_energy', 1000))
        .itemOutputs('kubejs:chaos_harmonic_board')
        .duration(400)
        .EUt(GTValues.VA[GTValues.UHV])
        .cleanroom(CleanroomType.CLEANROOM)

    event.recipes.gtceu.assembly_line('cumium_processor_assembly_recipe')
        .itemInputs(
            '2x gtceu:awakened_framework_frame',
            '2x kubejs:cumium_processor',
            '4x gtceu:cumium_ingot',
            '32x gtceu:advanced_smd_diode',
            '32x gtceu:advanced_smd_capacitor',
            '32x gtceu:advanced_smd_transistor',
            '32x gtceu:advanced_smd_resistor',
            '32x gtceu:advanced_smd_inductor',
            '64x gtceu:awakened_draconium_foil',
            '32x gtceu:ram_chip',
            '16x gtceu:chaotic_singulite_double_wire',
            '8x gtceu:cumium_plate',
            '2x draconicevolution:chaotic_core'
        )
        .inputFluids(
            Fluid.of('gtceu:soldering_alloy', 2880),
            Fluid.of('kubejs:guardian_distillate', 8000)
        )
        .itemOutputs('kubejs:cumium_processor_assembly')
        .duration(2000)
        .EUt(GTValues.VA[GTValues.UIV])

    event.recipes.gtceu.assembler('biogenic_synthesis_casing_assembly')
        .itemInputs(
            '4x gtceu:awakened_draconium_plate',
            '2x botania:terrasteel_ingot',
            '2x kubejs:boundless_gaia_spirit_ingot',
            '1x botania:gaia_ingot',
            '1x gtceu:abstract_elastomer_ingot',
            '1x #gtceu:circuits/uev'
        )
        .inputFluids(Fluid.of('gtceu:lubricant', 100))
        .itemOutputs('4x kubejs:biogenic_synthesis_casing')
        .duration(400)
        .EUt(GTValues.VA[GTValues.UEV])

    event.recipes.gtceu.assembler('biogenic_synthesis_chamber_controller')
        .itemInputs(
            '1x gtceu:uev_machine_hull',
            '2x kubejs:biogenic_synthesis_casing',
            '2x gtceu:uev_electric_pump',
            '2x gtceu:uev_sensor',
            '2x #gtceu:circuits/uev'
        )
        .inputFluids(Fluid.of('gtceu:sterilized_growth_medium', 2000))
        .itemOutputs('1x gtceu:biogenic_synthesis_chamber')
        .duration(600)
        .EUt(GTValues.VA[GTValues.UEV])

    event.recipes.gtceu.assembler('awakened_framework_casing_assembly')
        .itemInputs(
            '4x gtceu:awakened_framework_plate',
            '4x gtceu:awakened_framework_rod',
            '1x draconicevolution:awakened_draconium_block',
            '1x #gtceu:circuits/uev'
        )
        .inputFluids(Fluid.of('gtceu:lubricant', 100))
        .itemOutputs('8x kubejs:awakened_framework_casing')
        .duration(200)
        .EUt(GTValues.VA[GTValues.UEV])

    // Guardian Distillate extraction. The axis is yield per shard, not throughput: the Chaos
    // Guardian gates how many shards exist, so the upgrade path is recovering more fluid from
    // each one rather than running more parallel machines. Same lesson as GT's ore-processing
    // byproduct chain, applied to a boss drop. Circuit selects the route.
    event.recipes.gtceu.chemical_reactor('guardian_distillate_crude')
        .itemInputs('1x draconicevolution:chaos_shard')
        .inputFluids(Fluid.of('gtceu:aqua_regia', 2000))
        .outputFluids(Fluid.of('kubejs:guardian_distillate', 2000))
        .circuit(1)
        .duration(300)
        .EUt(GTValues.VA[GTValues.UHV])

    // 2x the crude yield for a gaia spirit and hotter reagents.
    event.recipes.gtceu.chemical_reactor('guardian_distillate_refined')
        .itemInputs(
            '1x draconicevolution:chaos_shard',
            '1x gtceu:gaia_spirit_dust'
        )
        .inputFluids(
            Fluid.of('gtceu:stellar_plasma_plasma', 2000),
            Fluid.of('kubejs:argent_energy', 4000)
        )
        .outputFluids(Fluid.of('kubejs:guardian_distillate', 4000))
        .circuit(2)
        .duration(300)
        .EUt(GTValues.VA[GTValues.UHV])

    // 4x crude. Needs the tier's own capstone circuit, so it lands after the line it feeds --
    // the optimization is offered long before it is required (Law 5).
    event.recipes.gtceu.chemical_reactor('guardian_distillate_total')
        .itemInputs(
            '1x draconicevolution:chaos_shard',
            '2x gtceu:gaia_spirit_dust',
            '1x #gtceu:circuits/uiv'
        )
        .inputFluids(
            Fluid.of('gtceu:stellar_plasma_plasma', 4000),
            Fluid.of('kubejs:argent_energy', 8000)
        )
        .outputFluids(Fluid.of('kubejs:guardian_distillate', 8000))
        .circuit(3)
        .duration(600)
        .EUt(GTValues.VA[GTValues.UEV])

    event.remove({ id: 'draconicevolution:machines/reactor_core' })
    event.remove({ id: 'draconicevolution:machines/reactor_stabilizer' })
    event.remove({ id: 'draconicevolution:machines/reactor_injector' })

    event.recipes.gtceu.assembly_line('draconic_reactor_core')
        .itemInputs(
            '2x gtceu:cumium_ingot',
            '4x draconicevolution:awakened_draconium_ingot',
            '2x draconicevolution:large_chaos_frag',
            '1x draconicevolution:chaos_shard',
            '1x kubejs:cumium_processor_assembly',
            '1x kubejs:ascendant_initiation_core',
            '4x gtceu:awakened_framework_plate'
        )
        .inputFluids(
            Fluid.of('kubejs:guardian_distillate', 4000),
            Fluid.of('kubejs:argent_energy', 2000)
        )
        .itemOutputs('draconicevolution:reactor_core')
        .duration(2000)
        .EUt(GTValues.VA[GTValues.UIV])

    event.recipes.gtceu.assembler('draconic_reactor_stabilizer')
        .itemInputs(
            '2x gtceu:cumium_plate',
            '2x gtceu:awakened_framework_rod',
            '1x draconicevolution:draconic_energy_core',
            '1x draconicevolution:reactor_prt_stab_frame',
            '1x draconicevolution:chaotic_core'
        )
        .inputFluids(Fluid.of('kubejs:argent_energy', 1000))
        .itemOutputs('draconicevolution:reactor_stabilizer')
        .duration(400)
        .EUt(GTValues.VA[GTValues.UEV])

    event.recipes.gtceu.assembler('draconic_reactor_injector')
        .itemInputs(
            '2x gtceu:cumium_rod',
            '4x draconicevolution:reactor_prt_in_rotor',
            '1x draconicevolution:awakened_draconium_ingot',
            '1x draconicevolution:wyvern_core'
        )
        .inputFluids(Fluid.of('kubejs:argent_energy', 1000))
        .itemOutputs('2x draconicevolution:reactor_injector')
        .duration(400)
        .EUt(GTValues.VA[GTValues.UEV])


    event.recipes.gtceu.circuit_assembler('cumium_processor_recipe')
        .itemInputs(
            '4x gtceu:cumium_foil',
            '2x gtceu:awakened_draconium_foil',
            '1x kubejs:chaos_harmonic_board',
            '8x gtceu:advanced_smd_diode',
            '8x gtceu:advanced_smd_capacitor',
            '8x gtceu:advanced_smd_transistor',
            '8x gtceu:advanced_smd_resistor'
        )
        .inputFluids(
            Fluid.of('kubejs:guardian_distillate', 500),
            Fluid.of('kubejs:argent_energy', 1000)
        )
        .itemOutputs('1x kubejs:cumium_processor')
        .duration(400)
        .EUt(GTValues.VA[GTValues.UIV])

    event.recipes.gtceu.assembly_line('artificial_cumium_brain_recipe')
        .itemInputs(
            '2x gtceu:awakened_framework_frame',
            '2x kubejs:cumium_processor_assembly',
            '64x gtceu:advanced_smd_diode',
            '64x gtceu:advanced_smd_capacitor',
            '64x gtceu:advanced_smd_transistor',
            '64x gtceu:advanced_smd_resistor',
            '64x gtceu:advanced_smd_inductor',
            '64x gtceu:ram_chip',
            '16x gtceu:chaotic_singulite_double_wire',
            '16x gtceu:cumium_plate',
            '16x gtceu:cumium_foil',
            '2x draconicevolution:chaotic_core'
        )
        .inputFluids(
            Fluid.of('gtceu:soldering_alloy', 2880),
            Fluid.of('kubejs:guardian_distillate', 12000),
            Fluid.of('kubejs:argent_energy', 4000)
        )
        .itemOutputs('1x kubejs:artificial_cumium_brain')
        .duration(3000)
        .EUt(GTValues.VA[GTValues.UIV])

})
