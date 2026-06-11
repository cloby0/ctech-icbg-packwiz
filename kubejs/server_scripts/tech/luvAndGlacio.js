ServerEvents.recipes(event => {

    // outputs glacio_air instead of raw nitrogen; distill glacio_air for nitrogen/helium/argon
    event.recipes.gtceu.centrifuge('glacio_stone_centrifuge')
        .itemInputs('4x ad_astra:glacio_stone')
        .itemOutputs('2x gtceu:calcium_dust')
        .chancedOutput('ad_astra:ice_shard', 4000, 0)
        .chancedOutput('gtceu:small_silicon_dust', 3000, 0)
        .chancedOutput('gtceu:small_copper_dust', 2000, 100)
        .chancedOutput('gtceu:small_iron_dust', 1500, 0)
        .outputFluids(Fluid.of('gtceu:glacio_air', 500))
        .duration(15 * 20)
        .EUt(GTValues.VA[GTValues.EV])

    // 500 mB cryo_fuel per shard vs 25 mB per shard in vanilla cryo freezer
    event.recipes.gtceu.chemical_reactor('glacio_cryo_fuel_synthesis')
        .itemInputs('4x ad_astra:ice_shard')
        .inputFluids(Fluid.of('gtceu:nitrogen', 500))
        .outputFluids(Fluid.of('ad_astra:cryo_fuel', 2000))
        .duration(10 * 20)
        .EUt(GTValues.VA[GTValues.EV])

    // vanilla crystal_processor_assembly uses fine_niobium_titanium_wire; replaced to require Glacio access
    event.replaceInput(
        { output: 'gtceu:crystal_processor_assembly' },
        'gtceu:fine_niobium_titanium_wire',
        'gtceu:fine_naquadah_wire'
    )

    event.remove({ id: 'ad_astra:nasa_workbench/tier_4_rocket_from_nasa_workbench' })

    event.recipes.gtceu.assembler('glacio_hull_section')
        .itemInputs(
            '2x gtceu:naquadah_plate',
            '2x gtceu:tungsten_carbide_plate',
            '1x gtceu:polytetrafluoroethylene_plate'
        )
        .itemOutputs('2x kubejs:naquadah_hull_section')
        .duration(20 * 20)
        .EUt(GTValues.VA[GTValues.LuV])

    event.recipes.gtceu.assembler('glacio_rocket_engine')
        .itemInputs(
            '2x gtceu:long_naquadah_rod',
            '4x gtceu:naquadah_plate',
            '1x gtceu:luv_electric_motor',
            '1x gtceu:luv_electric_pump'
        )
        .itemOutputs('1x kubejs:glacio_rocket_engine')
        .duration(30 * 20)
        .EUt(GTValues.VA[GTValues.LuV])

    event.recipes.gtceu.assembler('glacio_propellant_tank')
        .itemInputs(
            '4x gtceu:naquadah_plate',
            '2x gtceu:tungsten_carbide_plate',
            '1x gtceu:polytetrafluoroethylene_plate',
            '1x gtceu:luv_electric_pump'
        )
        .itemOutputs('1x kubejs:glacio_propellant_tank')
        .duration(20 * 20)
        .EUt(GTValues.VA[GTValues.LuV])

    event.shaped('kubejs:glacio_guidance_module', [
        'LEL',
        'GCG',
        'LSL'
    ], {
        L: 'gtceu:naquadah_plate',
        E: 'gtceu:luv_emitter',
        G: 'gtceu:glass_lens',
        C: '#gtceu:circuits/luv',
        S: 'gtceu:luv_sensor'
    })

    event.custom({
        "type": "ad_astra:nasa_workbench",
        "ingredients": [
            {"item": "ad_astra:rocket_nose_cone"},
            {"item": "kubejs:naquadah_hull_section"},
            {"item": "kubejs:naquadah_hull_section"},
            {"item": "kubejs:naquadah_hull_section"},
            {"item": "kubejs:naquadah_hull_section"},
            {"item": "kubejs:naquadah_hull_section"},
            {"item": "kubejs:glacio_guidance_module"},
            {"item": "ad_astra:rocket_fin"},
            {"item": "kubejs:glacio_propellant_tank"},
            {"item": "kubejs:glacio_propellant_tank"},
            {"item": "ad_astra:rocket_fin"},
            {"item": "ad_astra:rocket_fin"},
            {"item": "kubejs:glacio_rocket_engine"},
            {"item": "ad_astra:rocket_fin"}
        ],
        "result": {"count": 1, "id": "ad_astra:tier_4_rocket"}
    }).id('kubejs:gt_tier_4_rocket')

})
