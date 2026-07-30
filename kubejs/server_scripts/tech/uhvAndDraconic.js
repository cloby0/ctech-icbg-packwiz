ServerEvents.recipes(event => {

    event.recipes.gtceu.fusion_reactor('draconium_fusion')
        .inputFluids(
            Fluid.of('gtceu:plutonium_241', 128),
            Fluid.of('gtceu:naquadah', 128)
        )
        .outputFluids(Fluid.of('gtceu:draconium', 32))
        .duration(300)
        .EUt(GTValues.VA[GTValues.ZPM])
        .fusionStartEU(640000000)


    event.remove({ type: 'minecraft:smelting', output: 'draconicevolution:draconium_ingot' })
    event.remove({ type: 'minecraft:blasting', output: 'draconicevolution:draconium_ingot' })
    event.remove({ type: 'minecraft:smelting', output: 'draconicevolution:awakened_draconium_ingot' })

    event.recipes.gtceu.draconic_infusion_chamber('awakened_draconium_infusion')
        .itemInputs('1x draconicevolution:draconium_ingot')
        .inputFluids(Fluid.of('kubejs:draconic_computation', 2000))
        .itemOutputs('1x draconicevolution:awakened_draconium_ingot')
        .duration(400)
        .EUt(GTValues.VA[GTValues.UHV])

    event.recipes.gtceu.mixer('draconic_framework_dust_mixing')
        .itemInputs(
            '2x gtceu:draconium_dust',
            '1x gtceu:neutronium_dust',
            '1x gtceu:gaia_spirit_dust',
            '1x kubejs:dragon_heart_crystal'
        )
        .itemOutputs('4x gtceu:draconic_framework_dust')
        .duration(400)
        .EUt(GTValues.VA[GTValues.UHV])

    event.recipes.gtceu.mixer('draconic_fluxite_dust_mixing')
        .itemInputs(
            '1x draconicevolution:awakened_draconium_dust',
            '1x gtceu:naquadria_dust',
            '1x gtceu:gaia_spirit_dust'
        )
        .itemOutputs('3x gtceu:draconic_fluxite_dust')
        .duration(400)
        .EUt(GTValues.VA[GTValues.UHV])

    event.recipes.gtceu.chemical_reactor('draconic_computation_synthesis')
        .itemInputs(
            '2x #gtceu:circuits/uv',
            '1x draconicevolution:awakened_draconium_dust',
            '1x gtceu:gaia_spirit_dust'
        )
        .inputFluids(Fluid.of('kubejs:liquid_computation', 4000))
        .outputFluids(Fluid.of('kubejs:draconic_computation', 8000))
        .duration(200)
        .EUt(GTValues.VA[GTValues.UV])

    event.recipes.gtceu.cutter('cut_draconic_boule')
        .itemInputs('kubejs:draconic_boule')
        .inputFluids(Fluid.of('gtceu:lubricant', 2000))
        .itemOutputs('384x gtceu:neutronium_wafer')
        .duration(3000)
        .EUt(GTValues.VA[GTValues.UV])
        .cleanroom(CleanroomType.CLEANROOM)

    event.recipes.gtceu.assembler('draconic_framework_casing_assembly')
        .itemInputs(
            '4x gtceu:draconic_framework_plate',
            '4x gtceu:draconic_framework_rod',
            '1x draconicevolution:draconium_block',
            '1x #gtceu:circuits/uhv'
        )
        .inputFluids(Fluid.of('gtceu:lubricant', 100))
        .itemOutputs('8x kubejs:draconic_framework_casing')
        .duration(200)
        .EUt(GTValues.VA[GTValues.UHV])


    event.recipes.gtceu.assembler('draconic_infusion_chamber_controller')
        .itemInputs(
            '1x gtceu:uhv_machine_hull',
            '2x kubejs:draconic_framework_casing',
            '1x gtceu:uhv_field_generator',
            '2x gtceu:uhv_emitter',
            '2x #gtceu:circuits/uhv'
        )
        .inputFluids(Fluid.of('kubejs:draconic_computation', 2000))
        .itemOutputs('1x gtceu:draconic_infusion_chamber')
        .duration(600)
        .EUt(GTValues.VA[GTValues.UHV])

})
