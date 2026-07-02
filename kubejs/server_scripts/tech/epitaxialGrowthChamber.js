ServerEvents.recipes(event => {
    event.remove({ id: "gtceu:electric_blast_furnace/phosphorus_boule" })
    event.remove({ id: "gtceu:electric_blast_furnace/naquadah_boule" })
    event.remove({ id: "gtceu:electric_blast_furnace/neutronium_boule" })

    event.recipes.gtceu.assembler('epitaxial_growth_chamber_controller')
        .itemInputs(
            '1x gtceu:hv_machine_hull',
            '4x gtceu:lunar_rocket_alloy_plate',
            '2x gtceu:hv_emitter',
            '1x gtceu:hv_robot_arm',
            '2x #gtceu:circuits/hv'
        )
        .inputFluids(Fluid.of('gtceu:soldering_alloy', 288))
        .itemOutputs('1x gtceu:epitaxial_growth_chamber')
        .duration(30 * 20)
        .EUt(GTValues.VA[GTValues.HV])

    event.recipes.gtceu.epitaxial_growth_chamber('phosphorus_boule')
        .itemInputs(
            '64x gtceu:silicon_dust',
            '8x gtceu:phosphorus_dust',
        )
        .notConsumable(
            'gtceu:small_gallium_arsenide_dust'
        )
        .inputFluids(
            Fluid.of('gtceu:nitrogen', 8000)
        )
        .itemOutputs(
            'gtceu:phosphorus_boule'
        )
        .duration(600*20)
        .EUt(GTValues.VA[GTValues.HV])
        .dimension("ad_astra:moon")


    event.recipes.gtceu.epitaxial_growth_chamber('naquadah_boule')
        .itemInputs(
            '16x #forge:storage_blocks/silicon',
            'gtceu:naquadah_ingot',
        )
        .notConsumable(
            'gtceu:gallium_arsenide_dust'
        )
        .inputFluids(
            Fluid.of('gtceu:argon', 8000)
        )
        .itemOutputs(
            'gtceu:naquadah_boule'
        )
        .duration(750*20)
        .EUt(GTValues.VA[GTValues.EV])
        .dimension("ad_astra:moon")

    event.recipes.gtceu.epitaxial_growth_chamber('neutronium_boule')
        .itemInputs(
            '32x #forge:storage_blocks/silicon',
            'gtceu:neutronium_ingot',
        )
        .notConsumable(
            '2x gtceu:gallium_arsenide_dust'
        )
        .inputFluids(
            Fluid.of('gtceu:xenon', 8000)
        )
        .itemOutputs(
            'gtceu:neutronium_boule'
        )
        .duration(900*20)
        .EUt(GTValues.VA[GTValues.IV])
        .dimension("ad_astra:moon")

})