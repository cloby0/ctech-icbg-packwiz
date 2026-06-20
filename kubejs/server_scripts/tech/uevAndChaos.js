ServerEvents.recipes(event => {

    // chaotic_singulite and awakened_framework EBF recipes are auto-generated from
    // components + blastTemp defined in gtceuMaterialRegistry.js

    // chaos_substrate_dust — UV macerator, from Chaos Guardian drop
    event.recipes.gtceu.macerator('chaos_shard_maceration')
        .itemInputs('1x draconicevolution:chaos_shard')
        .itemOutputs('4x gtceu:chaos_substrate_dust')
        .duration(200)
        .EUt(GTValues.VA[GTValues.UV])

    // Chaos Harmonic Board — UHV cleanroom assembler
    // stabilized_chaos_crystal recipe is in ascendant.js (Ascendant magic gate)
    event.recipes.gtceu.assembler('chaos_harmonic_board_assembly')
        .itemInputs(
            '4x gtceu:neutronium_wafer',
            '2x gtceu:awakened_matrix_foil',
            '1x kubejs:stabilized_chaos_crystal',
            '1x gtceu:chaos_substrate_dust'
        )
        .inputFluids(Fluid.of('kubejs:draconic_computation', 1000))
        .itemOutputs('kubejs:chaos_harmonic_board')
        .duration(400)
        .EUt(GTValues.VA[GTValues.UHV])
        .cleanroom(CleanroomType.CLEANROOM)

    // Chaos Harmonic Mainframe — UEV circuit, primary assembly line recipe
    // Requires: draconic_resonance_assembly (second UHV circuit), chaos content, Awakened Core
    event.recipes.gtceu.assembly_line('chaos_harmonic_mainframe_recipe')
        .itemInputs(
            '2x gtceu:awakened_framework_frame',
            '2x kubejs:draconic_resonance_assembly',
            '4x kubejs:chaos_harmonic_board',
            '32x gtceu:advanced_smd_diode',
            '32x gtceu:advanced_smd_capacitor',
            '32x gtceu:advanced_smd_transistor',
            '32x gtceu:advanced_smd_resistor',
            '32x gtceu:advanced_smd_inductor',
            '64x gtceu:awakened_matrix_foil',
            '32x gtceu:ram_chip',
            '16x gtceu:draconic_fluxite_double_wire',
            '8x gtceu:awakened_matrix_plate',
            '2x draconicevolution:awakened_core'
        )
        .inputFluids(
            Fluid.of('gtceu:soldering_alloy', 2880),
            Fluid.of('kubejs:draconic_computation', 8000),
            Fluid.of('kubejs:chaos_matrix_fluid', 2000)
        )
        .itemOutputs('kubejs:chaos_harmonic_mainframe')
        .duration(2000)
        .EUt(GTValues.VA[GTValues.UEV])

    // Draconic Resonance Assembly — cheaper alternate at UEV (no assembly line needed)
    // Follows gradient pattern: once at UEV, previous tier circuit becomes more accessible
    event.recipes.gtceu.circuit_assembler('draconic_resonance_assembly_uev_alt')
        .itemInputs(
            '1x gtceu:tritanium_frame',
            '1x gtceu:wetware_processor_computer',
            '2x kubejs:draconic_resonance_board',
            '16x gtceu:advanced_smd_diode',
            '16x gtceu:advanced_smd_capacitor',
            '16x gtceu:advanced_smd_transistor',
            '16x gtceu:advanced_smd_resistor',
            '16x gtceu:advanced_smd_inductor',
            '16x gtceu:ram_chip',
            '1x kubejs:dragon_heart_crystal'
        )
        .inputFluids(Fluid.of('kubejs:draconic_computation', 2000))
        .itemOutputs('kubejs:draconic_resonance_assembly')
        .duration(800)
        .EUt(GTValues.VA[GTValues.UEV])

    // Cumium Singularity Core — UIV circuit, primary assembly line recipe
    // Pack namesake circuit — requires cumium ingot + full chaos + Chaotic Core
    event.recipes.gtceu.assembly_line('cumium_singularity_core_recipe')
        .itemInputs(
            '2x gtceu:awakened_framework_frame',
            '2x kubejs:chaos_harmonic_mainframe',
            '4x gtceu:cumium_ingot',
            '32x gtceu:advanced_smd_diode',
            '32x gtceu:advanced_smd_capacitor',
            '32x gtceu:advanced_smd_transistor',
            '32x gtceu:advanced_smd_resistor',
            '32x gtceu:advanced_smd_inductor',
            '64x gtceu:awakened_matrix_foil',
            '32x gtceu:ram_chip',
            '16x gtceu:chaotic_singulite_double_wire',
            '8x gtceu:cumium_plate',
            '2x draconicevolution:chaotic_core'
        )
        .inputFluids(
            Fluid.of('gtceu:soldering_alloy', 2880),
            Fluid.of('kubejs:chaos_matrix_fluid', 8000)
        )
        .itemOutputs('kubejs:cumium_singularity_core')
        .duration(2000)
        .EUt(GTValues.VA[GTValues.UIV])

    // Chaos Harmonic Mainframe — cheaper alternate at UIV
    event.recipes.gtceu.circuit_assembler('chaos_harmonic_mainframe_uiv_alt')
        .itemInputs(
            '1x gtceu:awakened_framework_frame',
            '1x kubejs:draconic_resonance_assembly',
            '2x kubejs:chaos_harmonic_board',
            '16x gtceu:advanced_smd_diode',
            '16x gtceu:advanced_smd_capacitor',
            '16x gtceu:advanced_smd_transistor',
            '16x gtceu:advanced_smd_resistor',
            '16x gtceu:advanced_smd_inductor',
            '16x gtceu:ram_chip',
            '1x draconicevolution:awakened_core'
        )
        .inputFluids(Fluid.of('kubejs:chaos_matrix_fluid', 2000))
        .itemOutputs('kubejs:chaos_harmonic_mainframe')
        .duration(800)
        .EUt(GTValues.VA[GTValues.UIV])

    // chaos_matrix_fluid — UHV chemical reactor
    // Requires: chaos_shard + gaia_spirit_dust + stellar plasma + draconic_computation
    event.recipes.gtceu.chemical_reactor('chaos_matrix_fluid_synthesis')
        .itemInputs(
            '1x draconicevolution:chaos_shard',
            '1x gtceu:gaia_spirit_dust'
        )
        .inputFluids(
            Fluid.of('gtceu:stellar_plasma_plasma', 2000),
            Fluid.of('kubejs:draconic_computation', 4000)
        )
        .outputFluids(Fluid.of('kubejs:chaos_matrix_fluid', 4000))
        .duration(300)
        .EUt(GTValues.VA[GTValues.UHV])

    // Draconic Reactor gating — replaces all three DE Fusion Crafting reactor recipes
    // Reactor is gated behind cumium (UIV) + Ascendant magic + full chaos progression
    event.remove({ id: 'draconicevolution:machines/reactor_core' })
    event.remove({ id: 'draconicevolution:machines/reactor_stabilizer' })
    event.remove({ id: 'draconicevolution:machines/reactor_injector' })

    // reactor_core — hardest component, requires UIV circuit + Ascendant gate + cumium
    event.recipes.gtceu.assembly_line('draconic_reactor_core')
        .itemInputs(
            '2x gtceu:cumium_ingot',
            '4x draconicevolution:awakened_draconium_ingot',
            '2x draconicevolution:large_chaos_frag',
            '1x draconicevolution:chaos_shard',
            '1x kubejs:cumium_singularity_core',
            '1x kubejs:ascendant_initiation_core',
            '4x gtceu:awakened_framework_plate'
        )
        .inputFluids(
            Fluid.of('kubejs:chaos_matrix_fluid', 4000),
            Fluid.of('kubejs:draconic_computation', 2000)
        )
        .itemOutputs('draconicevolution:reactor_core')
        .duration(2000)
        .EUt(GTValues.VA[GTValues.UIV])

    // reactor_stabilizer — UEV assembler, cumium structural components
    event.recipes.gtceu.assembler('draconic_reactor_stabilizer')
        .itemInputs(
            '2x gtceu:cumium_plate',
            '2x gtceu:awakened_framework_rod',
            '1x draconicevolution:draconic_energy_core',
            '1x draconicevolution:reactor_prt_stab_frame',
            '1x draconicevolution:chaotic_core'
        )
        .inputFluids(Fluid.of('kubejs:draconic_computation', 1000))
        .itemOutputs('draconicevolution:reactor_stabilizer')
        .duration(400)
        .EUt(GTValues.VA[GTValues.UEV])

    // reactor_injector — UEV assembler, cumium rod conductors
    event.recipes.gtceu.assembler('draconic_reactor_injector')
        .itemInputs(
            '2x gtceu:cumium_rod',
            '4x draconicevolution:reactor_prt_in_rotor',
            '1x draconicevolution:awakened_draconium_ingot',
            '1x draconicevolution:wyvern_core'
        )
        .inputFluids(Fluid.of('kubejs:draconic_computation', 1000))
        .itemOutputs('2x draconicevolution:reactor_injector')
        .duration(400)
        .EUt(GTValues.VA[GTValues.UEV])

})
