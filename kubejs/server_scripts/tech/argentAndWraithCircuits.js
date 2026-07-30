ServerEvents.recipes(event => {

    // Argentware/wraithware circuit boards -- raw board then printed board, mirroring GTCEu's
    // own <x>_circuit_board (raw) / <x>_printed_circuit_board (wiring printed on) shape exactly:
    // a chemical_reactor step consuming the raw board + foil of a material + a chemical fluid.
    // The foil is where the magic-mod integration lives -- transmuted from a plain GT foil.

    // Argentware forks off the same board wetware does, and adds the apparatus of keeping
    // something BOUND rather than alive: a tartaric gem to hold it, raw will to run it, a gauge
    // to watch it. No petri dish, no growth medium, no pump -- will does not subsist like tissue.
    // Sibling of wetware, not a descendant, so the wetware chain is not a prerequisite.
    // Crafted at UHV; the ZPM in its circuit tag is what it SATISFIES, not what builds it.
    event.recipes.gtceu.circuit_assembler('argentware_circuit_board_recipe')
        .itemInputs(
            '16x gtceu:multilayer_fiber_reinforced_circuit_board',
            '1x bloodmagic:soulgemgreater',
            '4x bloodmagic:basemonstersoul',
            '1x bloodmagic:demonwillgauge'
        )
        .inputFluids(Fluid.of('kubejs:argent_energy', 2000))
        .itemOutputs('16x kubejs:argentware_circuit_board')
        .duration(1200)
        .EUt(GTValues.VA[GTValues.UHV])

    // Draconium, not platinum. Draconium is fusion-only (MK3/UV) so the foil is a real cost --
    // this is a UHV board and it should not be printed on a LuV metal.
    addBloodAltarRecipe(event, {
        output: { item: 'kubejs:argent_foil', count: 8 },
        input: { item: 'gtceu:draconium_foil', count: 8 },
        syphon: LP.ARCANIST,
        upgradeLevel: 4,
        consumptionRate: 50,
        drainRate: 50
    })

    event.recipes.gtceu.chemical_reactor('argentware_printed_circuit_board_recipe')
        .itemInputs(
            '1x kubejs:argentware_circuit_board',
            '16x kubejs:argent_foil'
        )
        .inputFluids(Fluid.of('gtceu:sodium_persulfate', 4000))
        .itemOutputs('1x kubejs:argentware_printed_circuit_board')
        .duration(1800)
        .EUt(GTValues.VA[GTValues.UHV])
        .cleanroom(CleanroomType.CLEANROOM)

    // Wraithware is the next rung, not a second fork: you take the board that holds raw will and
    // put an actual someone in it. Built on argentware, never on wetware -- nothing in this line
    // is alive. The spirit gem and bound seal are the occupant; the argentware board is the cell.
    event.recipes.gtceu.circuit_assembler('wraithware_circuit_board_recipe')
        .itemInputs(
            '1x kubejs:argentware_printed_circuit_board',
            '4x occultism:spirit_attuned_crystal',
            '1x occultism:soul_gem'
        )
        .inputFluids(Fluid.of('kubejs:argent_energy', 4000))
        .itemOutputs('1x kubejs:wraithware_circuit_board')
        .duration(600)
        .EUt(GTValues.VA[GTValues.UHV])

    event.custom({
        type: 'malum:spirit_infusion',
        input: { item: 'gtceu:draconium_foil', count: 8 },
        extra_items: [
            { item: 'occultism:spirit_attuned_crystal', count: 4 },
            { item: 'malum:astral_weave', count: 2 }
        ],
        spirits: [
            { type: 'eldritch', count: 4 },
            { type: 'arcane', count: 8 }
        ],
        output: { item: 'kubejs:spectral_foil', count: 8 }
    }).id('kubejs:spirit_infusion/spectral_foil')

    event.recipes.gtceu.chemical_reactor('wraithware_printed_circuit_board_recipe')
        .itemInputs(
            '1x kubejs:wraithware_circuit_board',
            '16x kubejs:spectral_foil'
        )
        .inputFluids(Fluid.of('gtceu:sodium_persulfate', 4000))
        .itemOutputs('1x kubejs:wraithware_printed_circuit_board')
        .duration(1800)
        .EUt(GTValues.VA[GTValues.UHV])
        .cleanroom(CleanroomType.CLEANROOM)

    // Determinism Engine fuel chain -- Causal Lock Fluid production. A Time Crystal is fused
    // then grown (not mined, not assembled from circuits), dissolved, and distilled with a
    // genuine chance split into a usable branch and a waste branch.

    event.recipes.gtceu.fusion_reactor('temporal_plasma_fusion')
        .inputFluids(
            Fluid.of('gtceu:arcmetal', 144),
            Fluid.of('gtceu:americium', 144)
        )
        .outputFluids(Fluid.of('kubejs:temporal_plasma', 1000))
        .duration(300)
        .EUt(GTValues.VA[GTValues.ZPM])
        .fusionStartEU(640000000)

    event.recipes.gtceu.autoclave('time_crystal_growth')
        .itemInputs('4x gtceu:nether_quartz_dust')
        .inputFluids(Fluid.of('kubejs:temporal_plasma', 1000))
        .itemOutputs('1x kubejs:time_crystal')
        .duration(400)
        .EUt(GTValues.VA[GTValues.UEV])

    event.recipes.gtceu.chemical_reactor('time_crystal_dissolution')
        .itemInputs('1x kubejs:time_crystal')
        .inputFluids(Fluid.of('gtceu:aqua_regia', 2000))
        .outputFluids(Fluid.of('kubejs:unbound_causality', 1000))
        .duration(400)
        .EUt(GTValues.VA[GTValues.UEV])
        .cleanroom(CleanroomType.CLEANROOM)

    event.recipes.gtceu.distillation_tower('unbound_causality_distillation')
        .inputFluids(Fluid.of('kubejs:unbound_causality', 1000))
        .chancedFluidOutput(Fluid.of('kubejs:locked_timeline', 600), "80/100", 0)
        .chancedFluidOutput(Fluid.of('kubejs:branch_residue', 400), "35/100", 0)
        .duration(400)
        .EUt(GTValues.VA[GTValues.UEV])

    event.recipes.gtceu.chemical_reactor('locked_timeline_refinement')
        .itemInputs('2x minecraft:redstone')
        .inputFluids(Fluid.of('kubejs:locked_timeline', 600))
        .outputFluids(Fluid.of('kubejs:causal_lock_fluid', 500))
        .duration(300)
        .EUt(GTValues.VA[GTValues.UEV])

    event.recipes.gtceu.chemical_reactor('branch_residue_reclamation')
        .itemInputs('1x minecraft:redstone')
        .inputFluids(Fluid.of('kubejs:branch_residue', 400))
        .outputFluids(Fluid.of('kubejs:unbound_causality', 250))
        .duration(300)
        .EUt(GTValues.VA[GTValues.UEV])

    event.recipes.gtceu.combustion_generator('branch_residue_burn')
        .inputFluids(Fluid.of('kubejs:branch_residue', 1))
        .duration(200)
        .EUt(-GTValues.VA[GTValues.IV])

    // Laplace's Determinism Engine -- converts chance-based Demon Will / spirit essence
    // drops into a guaranteed-rate refined reagent for the argentware/wraithware circuit lines.

    event.recipes.gtceu.determinism_engine('bound_demon_will_determinism')
        .itemInputs(
            '4x bloodmagic:basemonstersoul',
            '2x minecraft:redstone'
        )
        .perTick(true)
        .inputFluids(Fluid.of('kubejs:causal_lock_fluid', 4))
        .perTick(false)
        .itemOutputs('1x kubejs:bound_demon_will')
        .duration(200)
        .EUt(GTValues.VA[GTValues.ZPM])

    event.recipes.gtceu.determinism_engine('crystallized_malice_determinism')
        .itemInputs(
            '2x bloodmagic:basemonstersoul_corrosive',
            '2x bloodmagic:basemonstersoul_destructive',
            '4x minecraft:redstone'
        )
        .perTick(true)
        .inputFluids(Fluid.of('kubejs:causal_lock_fluid', 8))
        .perTick(false)
        .itemOutputs('2x kubejs:crystallized_malice')
        .duration(300)
        .EUt(GTValues.VA[GTValues.UV])

    event.recipes.gtceu.determinism_engine('vengeful_ichor_determinism')
        .itemInputs(
            '2x bloodmagic:basemonstersoul_vengeful',
            '2x bloodmagic:basemonstersoul_steadfast',
            '4x kubejs:crystallized_malice'
        )
        .perTick(true)
        .inputFluids(Fluid.of('kubejs:causal_lock_fluid', 16))
        .perTick(false)
        .itemOutputs('2x kubejs:vengeful_ichor')
        .duration(400)
        .EUt(GTValues.VA[GTValues.UHV])

    event.recipes.gtceu.determinism_engine('hellforged_determinant_determinism')
        .itemInputs(
            '1x bloodmagic:ingot_hellforged',
            '4x kubejs:vengeful_ichor'
        )
        .perTick(true)
        .inputFluids(Fluid.of('kubejs:causal_lock_fluid', 32))
        .perTick(false)
        .itemOutputs('1x kubejs:hellforged_determinant')
        .duration(600)
        .EUt(GTValues.VA[GTValues.UEV])

    event.recipes.gtceu.determinism_engine('bound_djinni_seal_determinism')
        .itemInputs(
            '4x occultism:spirit_attuned_crystal',
            '2x minecraft:redstone'
        )
        .perTick(true)
        .inputFluids(Fluid.of('kubejs:causal_lock_fluid', 8))
        .perTick(false)
        .itemOutputs('1x kubejs:bound_djinni_seal')
        .duration(200)
        .EUt(GTValues.VA[GTValues.UV])

    event.recipes.gtceu.determinism_engine('afrit_bound_core_determinism')
        .itemInputs(
            '4x occultism:afrit_essence',
            '2x occultism:spirit_attuned_gem'
        )
        .perTick(true)
        .inputFluids(Fluid.of('kubejs:causal_lock_fluid', 16))
        .perTick(false)
        .itemOutputs('2x kubejs:afrit_bound_core')
        .duration(300)
        .EUt(GTValues.VA[GTValues.UHV])

    event.recipes.gtceu.determinism_engine('marid_dominion_matrix_determinism')
        .itemInputs(
            '4x occultism:soul_gem',
            '2x occultism:soul_shard',
            '2x kubejs:afrit_bound_core'
        )
        .perTick(true)
        .inputFluids(Fluid.of('kubejs:causal_lock_fluid', 32))
        .perTick(false)
        .itemOutputs('2x kubejs:marid_dominion_matrix')
        .duration(400)
        .EUt(GTValues.VA[GTValues.UEV])

    event.recipes.gtceu.determinism_engine('otherworld_convergence_core_determinism')
        .itemInputs(
            '2x occultism:soul_shard',
            '4x occultism:otherworld_essence',
            '2x kubejs:marid_dominion_matrix'
        )
        .perTick(true)
        .inputFluids(Fluid.of('kubejs:causal_lock_fluid', 64))
        .perTick(false)
        .itemOutputs('1x kubejs:otherworld_convergence_core')
        .duration(600)
        .EUt(GTValues.VA[GTValues.UIV])

    // Argentware -- Blood Magic Demon Will circuit line (ZPM-UEV)

    event.recipes.gtceu.circuit_assembler('argentware_processor_recipe')
        .itemInputs(
            '1x kubejs:argentware_printed_circuit_board',
            '1x gtceu:nano_cpu_chip',
            '1x kubejs:bound_demon_will',
            '8x gtceu:smd_capacitor',
            '8x gtceu:smd_resistor',
            '4x bloodmagic:basemonstersoul'
        )
        .itemOutputs('1x kubejs:argentware_processor')
        .duration(200)
        .EUt(GTValues.VA[GTValues.EV])

    event.recipes.gtceu.circuit_assembler('argentware_processor_recipe_asmd')
        .itemInputs(
            '1x kubejs:argentware_printed_circuit_board',
            '1x gtceu:nano_cpu_chip',
            '1x kubejs:bound_demon_will',
            '3x gtceu:advanced_smd_capacitor',
            '3x gtceu:advanced_smd_resistor',
            '4x bloodmagic:basemonstersoul'
        )
        .itemOutputs('2x kubejs:argentware_processor')
        .duration(100)
        .EUt(GTValues.VA[GTValues.EV])

    event.recipes.gtceu.circuit_assembler('argentware_processor_assembly_recipe')
        .itemInputs(
            '1x kubejs:argentware_printed_circuit_board',
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
        .EUt(GTValues.VA[GTValues.IV])

    event.recipes.gtceu.circuit_assembler('argentware_processor_assembly_recipe_asmd')
        .itemInputs(
            '1x kubejs:argentware_printed_circuit_board',
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
        .EUt(GTValues.VA[GTValues.IV])

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
        .EUt(GTValues.VA[GTValues.LuV])

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
        .EUt(GTValues.VA[GTValues.UV])

    // Wraithware -- Occultism spirit circuit line (UV-UIV). Base tier requires a real
    // Occultism ritual (the line's one manual-automation gate) after the circuit_assembler step.

    event.recipes.gtceu.circuit_assembler('wraithware_processor_unbound_recipe')
        .itemInputs(
            '1x kubejs:wraithware_printed_circuit_board',
            '1x gtceu:nano_cpu_chip',
            '1x kubejs:bound_djinni_seal',
            '8x gtceu:smd_capacitor',
            '8x gtceu:smd_transistor',
            '4x occultism:spirit_attuned_crystal'
        )
        .itemOutputs('1x kubejs:wraithware_processor_unbound')
        .duration(200)
        .EUt(GTValues.VA[GTValues.EV])

    event.recipes.gtceu.circuit_assembler('wraithware_processor_unbound_recipe_asmd')
        .itemInputs(
            '1x kubejs:wraithware_printed_circuit_board',
            '1x gtceu:nano_cpu_chip',
            '1x kubejs:bound_djinni_seal',
            '3x gtceu:advanced_smd_capacitor',
            '3x gtceu:advanced_smd_transistor',
            '4x occultism:spirit_attuned_crystal'
        )
        .itemOutputs('2x kubejs:wraithware_processor_unbound')
        .duration(100)
        .EUt(GTValues.VA[GTValues.EV])

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
            '1x kubejs:wraithware_printed_circuit_board',
            '2x kubejs:wraithware_processor',
            '1x kubejs:afrit_bound_core',
            '8x gtceu:smd_inductor',
            '16x gtceu:smd_transistor',
            '4x gtceu:ram_chip',
            '4x occultism:afrit_essence'
        )
        .itemOutputs('2x kubejs:wraithware_processor_assembly')
        .duration(400)
        .EUt(GTValues.VA[GTValues.IV])

    event.recipes.gtceu.circuit_assembler('wraithware_processor_assembly_recipe_asmd')
        .itemInputs(
            '1x kubejs:wraithware_printed_circuit_board',
            '2x kubejs:wraithware_processor',
            '1x kubejs:afrit_bound_core',
            '2x gtceu:advanced_smd_inductor',
            '4x gtceu:advanced_smd_transistor',
            '4x gtceu:ram_chip',
            '4x occultism:afrit_essence'
        )
        .itemOutputs('4x kubejs:wraithware_processor_assembly')
        .duration(200)
        .EUt(GTValues.VA[GTValues.IV])

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
        .EUt(GTValues.VA[GTValues.LuV])

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
        .EUt(GTValues.VA[GTValues.UV])

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
