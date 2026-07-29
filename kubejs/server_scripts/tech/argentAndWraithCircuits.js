ServerEvents.recipes(event => {

    // Laplace's Determinism Engine -- converts chance-based Demon Will / spirit essence
    // drops into a guaranteed-rate refined reagent for the argentware/wraithware circuit lines.

    event.recipes.gtceu.determinism_engine('bound_demon_will_determinism')
        .itemInputs(
            '4x bloodmagic:basemonstersoul',
            '2x minecraft:redstone'
        )
        .itemOutputs('1x kubejs:bound_demon_will')
        .duration(200)
        .EUt(GTValues.VA[GTValues.ZPM])

    event.recipes.gtceu.determinism_engine('crystallized_malice_determinism')
        .itemInputs(
            '2x bloodmagic:basemonstersoul_corrosive',
            '2x bloodmagic:basemonstersoul_destructive',
            '4x minecraft:redstone'
        )
        .itemOutputs('2x kubejs:crystallized_malice')
        .duration(300)
        .EUt(GTValues.VA[GTValues.UV])

    event.recipes.gtceu.determinism_engine('vengeful_ichor_determinism')
        .itemInputs(
            '2x bloodmagic:basemonstersoul_vengeful',
            '2x bloodmagic:basemonstersoul_steadfast',
            '4x kubejs:crystallized_malice'
        )
        .itemOutputs('2x kubejs:vengeful_ichor')
        .duration(400)
        .EUt(GTValues.VA[GTValues.UHV])

    event.recipes.gtceu.determinism_engine('hellforged_determinant_determinism')
        .itemInputs(
            '1x bloodmagic:ingot_hellforged',
            '4x kubejs:vengeful_ichor'
        )
        .itemOutputs('1x kubejs:hellforged_determinant')
        .duration(600)
        .EUt(GTValues.VA[GTValues.UEV])

    event.recipes.gtceu.determinism_engine('bound_djinni_seal_determinism')
        .itemInputs(
            '4x occultism:spirit_attuned_crystal',
            '2x minecraft:redstone'
        )
        .itemOutputs('1x kubejs:bound_djinni_seal')
        .duration(200)
        .EUt(GTValues.VA[GTValues.UV])

    event.recipes.gtceu.determinism_engine('afrit_bound_core_determinism')
        .itemInputs(
            '4x occultism:afrit_essence',
            '2x occultism:spirit_attuned_gem'
        )
        .itemOutputs('2x kubejs:afrit_bound_core')
        .duration(300)
        .EUt(GTValues.VA[GTValues.UHV])

    event.recipes.gtceu.determinism_engine('marid_dominion_matrix_determinism')
        .itemInputs(
            '4x occultism:soul_gem',
            '2x occultism:soul_shard',
            '2x kubejs:afrit_bound_core'
        )
        .itemOutputs('2x kubejs:marid_dominion_matrix')
        .duration(400)
        .EUt(GTValues.VA[GTValues.UEV])

    event.recipes.gtceu.determinism_engine('otherworld_convergence_core_determinism')
        .itemInputs(
            '2x occultism:soul_shard',
            '4x occultism:otherworld_essence',
            '2x kubejs:marid_dominion_matrix'
        )
        .itemOutputs('1x kubejs:otherworld_convergence_core')
        .duration(600)
        .EUt(GTValues.VA[GTValues.UIV])

    // Argentware -- Blood Magic Demon Will circuit line (ZPM-UEV)

    event.recipes.gtceu.circuit_assembler('argentware_processor_recipe')
        .itemInputs(
            '1x gtceu:wetware_circuit_board',
            '1x gtceu:nano_cpu_chip',
            '1x kubejs:bound_demon_will',
            '8x gtceu:smd_capacitor',
            '8x gtceu:smd_resistor',
            '4x bloodmagic:basemonstersoul'
        )
        .itemOutputs('1x kubejs:argentware_processor')
        .duration(200)
        .EUt(2400)

    event.recipes.gtceu.circuit_assembler('argentware_processor_recipe_asmd')
        .itemInputs(
            '1x gtceu:wetware_circuit_board',
            '1x gtceu:nano_cpu_chip',
            '1x kubejs:bound_demon_will',
            '3x gtceu:advanced_smd_capacitor',
            '3x gtceu:advanced_smd_resistor',
            '4x bloodmagic:basemonstersoul'
        )
        .itemOutputs('2x kubejs:argentware_processor')
        .duration(100)
        .EUt(2400)

    event.recipes.gtceu.circuit_assembler('argentware_processor_assembly_recipe')
        .itemInputs(
            '1x gtceu:wetware_circuit_board',
            '2x kubejs:argentware_processor',
            '1x kubejs:crystallized_malice',
            '8x gtceu:smd_inductor',
            '16x gtceu:smd_capacitor',
            '4x gtceu:ram_chip',
            '2x bloodmagic:basemonstersoul_corrosive',
            '2x bloodmagic:basemonstersoul_destructive'
        )
        .itemOutputs('2x kubejs:argentware_processor_assembly')
        .duration(400)
        .EUt(9600)

    event.recipes.gtceu.circuit_assembler('argentware_processor_assembly_recipe_asmd')
        .itemInputs(
            '1x gtceu:wetware_circuit_board',
            '2x kubejs:argentware_processor',
            '1x kubejs:crystallized_malice',
            '2x gtceu:advanced_smd_inductor',
            '4x gtceu:advanced_smd_capacitor',
            '4x gtceu:ram_chip',
            '2x bloodmagic:basemonstersoul_corrosive',
            '2x bloodmagic:basemonstersoul_destructive'
        )
        .itemOutputs('4x kubejs:argentware_processor_assembly')
        .duration(200)
        .EUt(9600)

    event.recipes.gtceu.assembly_line('argentware_processor_supercomputer_recipe')
        .stationResearch(b => b
            .researchStack(Item.of('kubejs:argentware_processor_assembly'))
            .CWUt(16))
        .itemInputs(
            '2x gtceu:tritanium_frame',
            '2x kubejs:argentware_processor_assembly',
            '1x kubejs:vengeful_ichor',
            '8x gtceu:smd_diode',
            '16x gtceu:ram_chip',
            '2x bloodmagic:basemonstersoul_vengeful',
            '2x bloodmagic:basemonstersoul_steadfast'
        )
        .inputFluids(Fluid.of('gtceu:soldering_alloy', 1152))
        .itemOutputs('1x kubejs:argentware_processor_supercomputer')
        .duration(400)
        .EUt(38400)

    event.recipes.gtceu.assembly_line('argentware_processor_mainframe_recipe')
        .stationResearch(b => b
            .researchStack(Item.of('kubejs:argentware_processor_supercomputer'))
            .CWUt(96)
            .EUt(GTValues.VA[GTValues.UHV]))
        .itemInputs(
            '2x gtceu:tritanium_frame',
            '2x kubejs:argentware_processor_supercomputer',
            '1x kubejs:hellforged_determinant',
            '32x gtceu:advanced_smd_diode',
            '32x gtceu:advanced_smd_capacitor',
            '32x gtceu:ram_chip',
            '1x bloodmagic:ingot_hellforged'
        )
        .inputFluids(
            Fluid.of('gtceu:soldering_alloy', 2880),
            Fluid.of('gtceu:polybenzimidazole', 1152)
        )
        .itemOutputs('1x kubejs:argentware_processor_mainframe')
        .duration(2000)
        .EUt(300000)

    // Wraithware -- Occultism spirit circuit line (UV-UIV). Base tier requires a real
    // Occultism ritual (the line's one manual-automation gate) after the circuit_assembler step.

    event.recipes.gtceu.circuit_assembler('wraithware_processor_unbound_recipe')
        .itemInputs(
            '1x gtceu:wetware_circuit_board',
            '1x gtceu:nano_cpu_chip',
            '1x kubejs:bound_djinni_seal',
            '8x gtceu:smd_capacitor',
            '8x gtceu:smd_transistor',
            '4x occultism:spirit_attuned_crystal'
        )
        .itemOutputs('1x kubejs:wraithware_processor_unbound')
        .duration(200)
        .EUt(2400)

    event.recipes.gtceu.circuit_assembler('wraithware_processor_unbound_recipe_asmd')
        .itemInputs(
            '1x gtceu:wetware_circuit_board',
            '1x gtceu:nano_cpu_chip',
            '1x kubejs:bound_djinni_seal',
            '3x gtceu:advanced_smd_capacitor',
            '3x gtceu:advanced_smd_transistor',
            '4x occultism:spirit_attuned_crystal'
        )
        .itemOutputs('2x kubejs:wraithware_processor_unbound')
        .duration(100)
        .EUt(2400)

    addOccultismRitual(event, {
        name: 'wraithware_processor',
        tier: 'afrit',
        output: 'kubejs:wraithware_processor',
        duration: 100,
        ingredients: [
            { item: 'kubejs:wraithware_processor_unbound' },
            { item: 'occultism:afrit_essence' },
            { item: 'occultism:afrit_essence' },
            { item: 'occultism:spirit_attuned_gem' },
            { item: 'occultism:soul_gem' }
        ]
    })

    event.recipes.gtceu.circuit_assembler('wraithware_processor_assembly_recipe')
        .itemInputs(
            '1x gtceu:wetware_circuit_board',
            '2x kubejs:wraithware_processor',
            '1x kubejs:afrit_bound_core',
            '8x gtceu:smd_inductor',
            '16x gtceu:smd_transistor',
            '4x gtceu:ram_chip',
            '4x occultism:afrit_essence'
        )
        .itemOutputs('2x kubejs:wraithware_processor_assembly')
        .duration(400)
        .EUt(9600)

    event.recipes.gtceu.circuit_assembler('wraithware_processor_assembly_recipe_asmd')
        .itemInputs(
            '1x gtceu:wetware_circuit_board',
            '2x kubejs:wraithware_processor',
            '1x kubejs:afrit_bound_core',
            '2x gtceu:advanced_smd_inductor',
            '4x gtceu:advanced_smd_transistor',
            '4x gtceu:ram_chip',
            '4x occultism:afrit_essence'
        )
        .itemOutputs('4x kubejs:wraithware_processor_assembly')
        .duration(200)
        .EUt(9600)

    event.recipes.gtceu.assembly_line('wraithware_processor_supercomputer_recipe')
        .stationResearch(b => b
            .researchStack(Item.of('kubejs:wraithware_processor_assembly'))
            .CWUt(16))
        .itemInputs(
            '2x gtceu:tritanium_frame',
            '2x kubejs:wraithware_processor_assembly',
            '1x kubejs:marid_dominion_matrix',
            '8x gtceu:smd_diode',
            '16x gtceu:ram_chip',
            '4x occultism:soul_gem',
            '2x occultism:soul_shard'
        )
        .inputFluids(Fluid.of('gtceu:soldering_alloy', 1152))
        .itemOutputs('1x kubejs:wraithware_processor_supercomputer')
        .duration(400)
        .EUt(38400)

    event.recipes.gtceu.assembly_line('wraithware_processor_mainframe_recipe')
        .stationResearch(b => b
            .researchStack(Item.of('kubejs:wraithware_processor_supercomputer'))
            .CWUt(96)
            .EUt(GTValues.VA[GTValues.UIV]))
        .itemInputs(
            '2x gtceu:tritanium_frame',
            '2x kubejs:wraithware_processor_supercomputer',
            '1x kubejs:otherworld_convergence_core',
            '32x gtceu:advanced_smd_diode',
            '32x gtceu:advanced_smd_transistor',
            '32x gtceu:ram_chip',
            '2x occultism:soul_shard',
            '4x occultism:otherworld_essence'
        )
        .inputFluids(
            Fluid.of('gtceu:soldering_alloy', 2880),
            Fluid.of('gtceu:polybenzimidazole', 1152)
        )
        .itemOutputs('1x kubejs:wraithware_processor_mainframe')
        .duration(2000)
        .EUt(300000)

    // Laplace's Determinism Engine controller -- gated at ZPM, matching where argentware begins.

    event.recipes.gtceu.assembler('determinism_engine_controller')
        .itemInputs(
            '1x gtceu:zpm_machine_hull',
            '4x gtceu:clean_machine_casing',
            '2x gtceu:zpm_field_generator',
            '2x gtceu:zpm_emitter',
            '2x #gtceu:circuits/zpm'
        )
        .itemOutputs('1x gtceu:determinism_engine')
        .duration(400)
        .EUt(GTValues.VA[GTValues.ZPM])

})
