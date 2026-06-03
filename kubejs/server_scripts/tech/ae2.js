ServerEvents.recipes(event => {
    event.remove({ type: 'ae2:inscriber' })
    //calculation = lumium
    //engineering = enderium
    //logic = signalum
    event.replaceInput(
        { input: 'ae2:logic_processor' },
        'ae2:logic_processor',
        'kubejs:matter_energy_circuit'
    )
    event.replaceInput(
        { input: 'ae2:engineering_processor' },
        'ae2:engineering_processor',
        'kubejs:matter_energy_circuit'
    )
    event.replaceInput(
        { input: 'ae2:calculation_processor' },
        'ae2:calculation_processor',
        'kubejs:matter_energy_circuit'
    )
    event.recipes.gtceu.circuit_assembler('me_circuit')
        .itemInputs(
            'ae2:engineering_processor',
            'ae2:calculation_processor',
            'ae2:logic_processor',
            '#gtceu:circuits/ev'
        )
        .inputFluids(
            Fluid.of('gtceu:soldering_alloy', 144)
        )
        .itemOutputs(
            '2x kubejs:matter_energy_circuit'
        )
        .duration(120)
        .EUt(1920)
})
