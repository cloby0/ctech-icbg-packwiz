ServerEvents.recipes(event => {

    event.remove({ id: 'ad_astra:smelting/calorite_ingot_from_smelting_raw_calorite' })
    event.remove({ id: 'ad_astra:smelting/calorite_ingot_from_smelting_venus_calorite_ore' })
    event.remove({ type: 'gtceu:electric_blast_furnace', output: 'gtceu:calorite_ingot' })

    // step 1 sulfuric roast
    event.recipes.gtceu.chemical_reactor('calorite_sulfuric_roast')
        .itemInputs('1x gtceu:crushed_calorite_ore')
        .inputFluids(Fluid.of('gtceu:sulfuric_acid', 500))
        .itemOutputs('1x kubejs:calorite_sulfate_slag')
        .chancedOutput('gtceu:small_chromium_dust', 5000, 0)
        .duration(10 * 20)
        .EUt(GTValues.VA[GTValues.IV])

    // step 2 chlorine leach
    event.recipes.gtceu.chemical_reactor('calorite_chlorine_leach')
        .itemInputs('1x kubejs:calorite_sulfate_slag')
        .inputFluids(Fluid.of('gtceu:chlorine', 500))
        .itemOutputs('1x kubejs:calorite_chloride_melt')
        .outputFluids(Fluid.of('gtceu:sulfur_dioxide', 300))
        .chancedOutput('gtceu:small_vanadium_dust', 3000, 200)
        .duration(10 * 20)
        .EUt(GTValues.VA[GTValues.IV])

    // step 3 HF fluorination
    event.recipes.gtceu.chemical_reactor('calorite_hf_fluorination')
        .itemInputs('1x kubejs:calorite_chloride_melt')
        .inputFluids(Fluid.of('gtceu:hydrofluoric_acid', 400))
        .itemOutputs('1x kubejs:calorite_fluoride_precipitate')
        .outputFluids(Fluid.of('gtceu:hydrochloric_acid', 300))
        .chancedOutput('gtceu:small_chromium_dust', 3500, 150)
        .duration(10 * 20)
        .EUt(GTValues.VA[GTValues.IV])

    // step 4 electrolytic reduction
    event.recipes.gtceu.electrolyzer('calorite_electrolytic_reduction')
        .itemInputs('1x kubejs:calorite_fluoride_precipitate')
        .itemOutputs('1x kubejs:raw_calorite_sponge')
        .outputFluids(Fluid.of('gtceu:fluorine', 300))
        .chancedOutput('gtceu:small_magnesium_dust', 2500, 100)
        .duration(25 * 20)
        .EUt(GTValues.VA[GTValues.IV])

    // step 5 EBF consolidation
    event.recipes.gtceu.electric_blast_furnace('calorite_ebf_consolidation')
        .itemInputs('1x kubejs:raw_calorite_sponge')
        .itemOutputs('1x gtceu:hot_calorite_ingot')
        .blastFurnaceTemp(4500)
        .duration(20 * 20)
        .EUt(GTValues.VA[GTValues.IV])

    // step 6 vacuum freeze
    event.recipes.gtceu.vacuum_freezer('calorite_vacuum_freeze')
        .itemInputs('1x gtceu:hot_calorite_ingot')
        .itemOutputs('1x ad_astra:calorite_ingot')
        .duration(20 * 20)
        .EUt(GTValues.VA[GTValues.MV])

    event.recipes.gtceu.centrifuge('venus_sand_centrifuge')
        .itemInputs('4x ad_astra:venus_sand')
        .itemOutputs('2x gtceu:sulfur_dust')
        .chancedOutput('gtceu:calcium_dust', 5000, 0)
        .chancedOutput('gtceu:small_silicon_dust', 3000, 0)
        .chancedOutput('gtceu:small_lead_dust', 2000, 0)
        .chancedOutput('gtceu:small_chromium_dust', 1000, 100)
        .duration(15 * 20)
        .EUt(GTValues.VA[GTValues.IV])

    event.replaceInput(
        { output: 'gtceu:quantum_processor_assembly' },
        'gtceu:fine_platinum_wire',
        'gtceu:fine_calorite_wire'
    )

    event.remove({ id: 'ad_astra:nasa_workbench/tier_3_rocket_from_nasa_workbench' })

    event.recipes.gtceu.assembler('venus_hull_section')
        .itemInputs(
            '2x ad_astra:calorite_plate',
            '2x gtceu:tungsten_steel_plate',
            '1x gtceu:polytetrafluoroethylene_plate'
        )
        .itemOutputs('2x kubejs:calorite_hull_section')
        .duration(20 * 20)
        .EUt(GTValues.VA[GTValues.IV])

    event.recipes.gtceu.assembler('venus_rocket_engine')
        .itemInputs(
            '2x gtceu:long_calorite_rod',
            '4x ad_astra:calorite_plate',
            '1x gtceu:iv_electric_motor',
            '1x gtceu:iv_electric_pump'
        )
        .itemOutputs('1x kubejs:venus_rocket_engine')
        .duration(30 * 20)
        .EUt(GTValues.VA[GTValues.IV])

    event.recipes.gtceu.assembler('venus_propellant_tank')
        .itemInputs(
            '4x ad_astra:calorite_plate',
            '2x gtceu:tungsten_carbide_plate',
            '1x gtceu:polytetrafluoroethylene_plate',
            '1x gtceu:iv_electric_pump'
        )
        .itemOutputs('1x kubejs:venus_propellant_tank')
        .duration(20 * 20)
        .EUt(GTValues.VA[GTValues.IV])

    event.shaped('kubejs:venus_guidance_module', [
        'LEL',
        'GCG',
        'LSL'
    ], {
        L: 'ad_astra:calorite_plate',
        E: 'gtceu:iv_emitter',
        G: 'gtceu:glass_lens',
        C: '#gtceu:circuits/iv',
        S: 'gtceu:iv_sensor'
    })

    event.custom({
        "type": "ad_astra:nasa_workbench",
        "ingredients": [
            {"item": "ad_astra:rocket_nose_cone"},
            {"item": "kubejs:calorite_hull_section"},
            {"item": "kubejs:calorite_hull_section"},
            {"item": "kubejs:calorite_hull_section"},
            {"item": "kubejs:calorite_hull_section"},
            {"item": "kubejs:calorite_hull_section"},
            {"item": "kubejs:venus_guidance_module"},
            {"item": "ad_astra:rocket_fin"},
            {"item": "kubejs:venus_propellant_tank"},
            {"item": "kubejs:venus_propellant_tank"},
            {"item": "ad_astra:rocket_fin"},
            {"item": "ad_astra:rocket_fin"},
            {"item": "kubejs:venus_rocket_engine"},
            {"item": "ad_astra:rocket_fin"}
        ],
        "result": {"count": 1, "id": "ad_astra:tier_3_rocket"}
    }).id('kubejs:gt_tier_3_rocket')

})
