ServerEvents.recipes(event => {
    event.remove({ id: "gtceu:electric_blast_furnace/phosphorus_boule" })
    event.remove({ id: "gtceu:electric_blast_furnace/naquadah_boule" })
    event.remove({ id: "gtceu:electric_blast_furnace/neutronium_boule" })

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
        .duration(600)
        .EUt(VA['HV'])
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
        .duration(750)
        .EUt(VA['EV'])
        .dimension("ad_astra:moon")

    event.recipes.gtceu.epitaxial_growth_chamber('naquadah_boule')
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
        .duration(900)
        .EUt(VA['IV'])
        .dimension("ad_astra:moon")

})