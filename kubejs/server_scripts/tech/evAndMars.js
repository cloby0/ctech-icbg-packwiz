ServerEvents.recipes(event => {

    event.recipes.gtceu.centrifuge('martian_soil_centrifuge')
        .itemInputs('4x ad_astra:mars_sand')
        .itemOutputs('2x gtceu:iron_dust')
        .chancedOutput('gtceu:sulfur_dust', 6000, 0)
        .chancedOutput('gtceu:small_magnesium_dust', 2000, 200)
        .chancedOutput('gtceu:silicon_dust', 1500, 0)
        .chancedOutput('gtceu:small_tungsten_dust', 500, 100)
        .duration(20 * 20)
        .EUt(GTValues.VA[GTValues.MV])


    event.remove({ id: 'ad_astra:smelting/ostrum_ingot_from_smelting_raw_ostrum' })
    event.remove({ id: 'ad_astra:smelting/ostrum_ingot_from_smelting_mars_ostrum_ore' })
    event.remove({ id: 'ad_astra:smelting/ostrum_ingot_from_smelting_deepslate_ostrum_ore' })
    event.remove({ type: 'gtceu:electric_blast_furnace', output: 'gtceu:ostrum_ingot' })

    event.recipes.gtceu.chemical_reactor('ostrum_perchlorate_activation')
        .itemInputs('1x gtceu:crushed_ostrum_ore')
        .inputFluids(Fluid.of('gtceu:hydrochloric_acid', 250))
        .itemOutputs('1x kubejs:ostrum_perchlorate_mass')
        .chancedOutput('gtceu:small_sulfur_dust', 5000, 0)
        .chancedOutput('gtceu:small_lead_dust', 4000, 200)
        .chancedOutput('gtceu:small_copper_dust', 2500, 150)
        .duration(8 * 20)
        .EUt(GTValues.VA[GTValues.EV])

    event.recipes.gtceu.chemical_reactor('ostrum_co2_carbonation')
        .itemInputs('1x kubejs:ostrum_perchlorate_mass')
        .inputFluids(Fluid.of('gtceu:carbon_dioxide', 500))
        .itemOutputs('1x kubejs:ostrum_carbonate_precipitate')
        .outputFluids(Fluid.of('gtceu:chlorine', 200))
        .chancedOutput('gtceu:small_lead_dust', 2500, 150)
        .duration(10 * 20)
        .EUt(GTValues.VA[GTValues.EV])

    event.recipes.gtceu.chemical_reactor('ostrum_hf_calcination')
        .itemInputs('1x kubejs:ostrum_carbonate_precipitate')
        .inputFluids(Fluid.of('gtceu:hydrofluoric_acid', 300))
        .itemOutputs('1x kubejs:crude_ostrum_fluoride')
        .outputFluids(Fluid.of('gtceu:carbon_dioxide', 250))
        .chancedOutput('gtceu:small_copper_dust', 3000, 150)
        .duration(8 * 20)
        .EUt(GTValues.VA[GTValues.EV])

    event.recipes.gtceu.electrolyzer('ostrum_electrolytic_reduction')
        .itemInputs('1x kubejs:crude_ostrum_fluoride')
        .itemOutputs('1x kubejs:raw_ostrum_sponge')
        .outputFluids(Fluid.of('gtceu:fluorine', 200))
        .chancedOutput('gtceu:small_magnesium_dust', 1500, 100)
        .duration(20 * 20)
        .EUt(GTValues.VA[GTValues.EV])

    event.recipes.gtceu.electric_blast_furnace('ostrum_ebf_consolidation')
        .itemInputs('1x kubejs:raw_ostrum_sponge')
        .itemOutputs('1x gtceu:hot_ostrum_ingot')
        .blastFurnaceTemp(3600)
        .duration(15 * 20)
        .EUt(GTValues.VA[GTValues.EV])

    event.recipes.gtceu.vacuum_freezer('ostrum_vacuum_freeze')
        .itemInputs('1x gtceu:hot_ostrum_ingot')
        .itemOutputs('1x ad_astra:ostrum_ingot')
        .duration(20 * 20)
        .EUt(GTValues.VA[GTValues.MV])

    event.replaceInput(
        { output: 'gtceu:nano_processor_assembly' },
        'gtceu:fine_electrum_wire',
        'gtceu:fine_ostrum_wire'
    )

    event.remove({ id: 'ad_astra:nasa_workbench/tier_2_rocket_from_nasa_workbench' })

    event.recipes.gtceu.assembler('mars_hull_section')
        .itemInputs(
            '2x ad_astra:desh_plate',
            '2x gtceu:stainless_steel_plate',
            '1x gtceu:silicone_rubber_plate'
        )
        .itemOutputs('2x kubejs:desh_hull_section')
        .duration(20 * 20)
        .EUt(GTValues.VA[GTValues.EV])

    event.recipes.gtceu.assembler('mars_rocket_engine')
        .itemInputs(
            '2x gtceu:long_desh_rod',
            '4x ad_astra:desh_plate',
            '1x gtceu:ev_electric_motor',
            '1x gtceu:ev_electric_pump'
        )
        .itemOutputs('1x kubejs:mars_rocket_engine')
        .duration(30 * 20)
        .EUt(GTValues.VA[GTValues.EV])

    event.recipes.gtceu.assembler('mars_propellant_tank')
        .itemInputs(
            '4x ad_astra:desh_plate',
            '2x gtceu:stainless_steel_plate',
            '1x gtceu:silicone_rubber_plate',
            '1x gtceu:ev_electric_pump'
        )
        .itemOutputs('1x kubejs:mars_propellant_tank')
        .duration(20 * 20)
        .EUt(GTValues.VA[GTValues.EV])

    event.shaped('kubejs:mars_guidance_module', [
        'LEL',
        'GCG',
        'LSL'
    ], {
        L: 'ad_astra:desh_plate',
        E: 'gtceu:ev_emitter',
        G: 'gtceu:glass_lens',
        C: '#gtceu:circuits/ev',
        S: 'gtceu:ev_sensor'
    })

    event.custom({
        "type": "ad_astra:nasa_workbench",
        "ingredients": [
            {"item": "ad_astra:rocket_nose_cone"},
            {"item": "kubejs:desh_hull_section"},
            {"item": "kubejs:desh_hull_section"},
            {"item": "kubejs:desh_hull_section"},
            {"item": "kubejs:desh_hull_section"},
            {"item": "kubejs:desh_hull_section"},
            {"item": "kubejs:mars_guidance_module"},
            {"item": "ad_astra:rocket_fin"},
            {"item": "kubejs:mars_propellant_tank"},
            {"item": "kubejs:mars_propellant_tank"},
            {"item": "ad_astra:rocket_fin"},
            {"item": "ad_astra:rocket_fin"},
            {"item": "kubejs:mars_rocket_engine"},
            {"item": "ad_astra:rocket_fin"}
        ],
        "result": {"count": 1, "id": "ad_astra:tier_2_rocket"}
    }).id('kubejs:gt_tier_2_rocket')

})
