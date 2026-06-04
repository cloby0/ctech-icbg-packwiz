ServerEvents.recipes(event => {
    event.remove({ id: 'gtceu:assembler/plascrete' })
    event.remove({ id: 'gtceu:assembler/cleanroom_glass' })
    event.recipes.gtceu.assembler('moon_plascrete')
        .itemInputs(
            'gtceu:steel_frame',
            '6x gtceu:polyethylene_plate',
            '4x ad_astra:moon_sand'
        )
        .inputFluids(
            Fluid.of('gtceu:concrete', 144)
        )
        .itemOutputs(
            '2x gtceu:plascrete'
        )
        .duration(10*20)
        .EUt(48)

    event.recipes.gtceu.assembler('moon_cleanroom_glass')
        .itemInputs(
            'gtceu:steel_frame',
            '6x gtceu:polyethylene_plate',
            '4x ad_astra:moon_sand'
        )
        .inputFluids(
            Fluid.of('gtceu:glass', 144)
        )
        .itemOutputs(
            '2x gtceu:cleanroom_glass'
        )
        .duration(10*20)
        .EUt(48)

});