ServerEvents.recipes(event => {

    event.remove({ id: 'ad_astra:smelting/desh_ingot_from_smelting_raw_desh' })
    event.remove({ id: 'ad_astra:smelting/desh_ingot_from_smelting_moon_desh_ore' })
    event.remove({ id: 'ad_astra:smelting/desh_ingot_from_smelting_deepslate_desh_ore' })
    // mond is only path to desh ingot
    // crushed_desh_ore only comes from ore block maceration, not ingot recycling
    // prevents ingot -> dust -> mond -> ingot infinite byproduct loop

    // removes auto ebf so mond is mandatory
    event.remove({ type: 'gtceu:electric_blast_furnace', output: 'gtceu:desh_ingot' })

    // step 1 acid leach
    event.recipes.gtceu.chemical_reactor('desh_acid_leach')
        .itemInputs('1x gtceu:crushed_desh_ore')
        .inputFluids(Fluid.of('gtceu:sulfuric_acid', 250))
        .outputFluids(Fluid.of('gtceu:desh_sulfate_slurry', 500))
        .chancedOutput('gtceu:small_iron_dust', 4000, 300)
        .chancedOutput('gtceu:small_sulfur_dust', 5000, 400)
        .duration(8 * 20)
        .EUt(GTValues.VA[GTValues.HV])

    // step 2 carbonyl formation
    event.recipes.gtceu.chemical_reactor('desh_carbonyl_formation')
        .inputFluids(Fluid.of('gtceu:desh_sulfate_slurry', 500))
        .inputFluids(Fluid.of('gtceu:carbon_monoxide', 400))
        .outputFluids(Fluid.of('gtceu:desh_carbonyl', 1000))
        .chancedOutput('gtceu:small_manganese_dust', 3000, 200)
        .duration(8 * 20)
        .EUt(GTValues.VA[GTValues.HV])

    // step 3 condensation
    event.recipes.gtceu.chemical_reactor('desh_carbonyl_condensation')
        .inputFluids(Fluid.of('gtceu:desh_carbonyl', 1000))
        .itemOutputs('1x kubejs:condensed_desh_carbonyl')
        .chancedOutput('gtceu:manganese_dust', 6000, 500)
        .chancedOutput('gtceu:small_cobalt_dust', 2500, 250)
        .chancedOutput('gtceu:small_nickel_dust', 4000, 300)
        .outputFluids(Fluid.of('gtceu:carbon_monoxide', 350))
        .duration(12 * 20)
        .EUt(GTValues.VA[GTValues.HV])

    // step 4 EBF decomposition
    event.recipes.gtceu.electric_blast_furnace('desh_carbonyl_ebf')
        .itemInputs('1x kubejs:condensed_desh_carbonyl')
        .itemOutputs('1x gtceu:hot_desh_ingot')
        .blastFurnaceTemp(2700)
        .duration(10 * 20)
        .EUt(GTValues.VA[GTValues.HV])

    // step 5 vacuum freeze
    event.recipes.gtceu.vacuum_freezer('desh_carbonyl_cool')
        .itemInputs('1x gtceu:hot_desh_ingot')
        .itemOutputs('1x ad_astra:desh_ingot')
        .duration(20 * 20)
        .EUt(GTValues.VA[GTValues.MV])

    event.recipes.gtceu.centrifuge('moon_sand_silicon')
        .itemInputs('4x ad_astra:moon_sand')
        .itemOutputs('2x gtceu:silicon_dust')
        .chancedOutput('gtceu:calcium_dust', 5000, 0)
        .chancedOutput('gtceu:aluminium_dust', 3000, 0)
        .chancedOutput('gtceu:small_iron_dust', 2000, 0)
        .duration(15 * 20)
        .EUt(GTValues.VA[GTValues.HV])

    event.replaceInput({ output: 'gtceu:micro_processor_computer' }, 'gtceu:fine_electrum_wire', 'gtceu:fine_desh_wire')

    event.recipes.gtceu.mixer('ctech:lunar_rocket_alloy_dust_mix')
        .itemInputs('4x gtceu:ultimet_dust', '2x gtceu:aluminium_dust', '1x gtceu:chromium_dust')
        .itemOutputs('7x gtceu:lunar_rocket_alloy_dust')
        .duration(20 * 20)
        .EUt(GTValues.VA[GTValues.HV])

    event.recipes.gtceu.assembler('rocket_hull_section')
        .itemInputs(
            '2x gtceu:lunar_rocket_alloy_plate',
            '2x gtceu:stainless_steel_plate',
            '1x gtceu:silicone_rubber_plate'
        )
        .itemOutputs('2x kubejs:rocket_hull_section')
        .duration(20 * 20)
        .EUt(GTValues.VA[GTValues.HV])

    event.recipes.gtceu.assembler('rocket_combustion_engine')
        .itemInputs(
            '2x gtceu:long_lunar_rocket_alloy_rod',
            '4x gtceu:stainless_steel_plate',
            '1x gtceu:hv_electric_motor',
            '1x gtceu:hv_electric_pump'
        )
        .itemOutputs('1x kubejs:rocket_combustion_engine')
        .duration(30 * 20)
        .EUt(GTValues.VA[GTValues.HV])

    event.recipes.gtceu.assembler('pressurized_rocket_tank')
        .itemInputs(
            '4x gtceu:aluminium_plate',
            '2x gtceu:stainless_steel_plate',
            '1x gtceu:silicone_rubber_plate',
            '1x gtceu:hv_electric_pump'
        )
        .itemOutputs('1x kubejs:pressurized_rocket_tank')
        .duration(20 * 20)
        .EUt(GTValues.VA[GTValues.HV])

    event.shaped('kubejs:rocket_guidance_module', [
        'LEL',
        'GCG',
        'LSL'
    ], {
        L: 'gtceu:lunar_rocket_alloy_plate',
        E: 'gtceu:hv_emitter',
        G: 'gtceu:glass_lens',
        C: '#gtceu:circuits/hv',
        S: 'gtceu:hv_sensor'
    })

    event.remove({ id: 'ad_astra:rocket_nose_cone' })
    event.shaped('ad_astra:rocket_nose_cone', [
        ' R ',
        ' L ',
        'LLL'
    ], {
        R: 'minecraft:lightning_rod',
        L: 'gtceu:lunar_rocket_alloy_plate'
    })

    event.remove({ id: 'ad_astra:rocket_fin' })
    event.shaped('4x ad_astra:rocket_fin', [
        ' L ',
        'LLL',
        'L L'
    ], {
        L: 'gtceu:lunar_rocket_alloy_plate'
    })

    event.remove({ id: 'ad_astra:nasa_workbench/tier_1_rocket_from_nasa_workbench' })
    event.custom({
        "type": "ad_astra:nasa_workbench",
        "ingredients": [
            {"item": "ad_astra:rocket_nose_cone"},
            {"item": "kubejs:rocket_hull_section"},
            {"item": "kubejs:rocket_hull_section"},
            {"item": "kubejs:rocket_hull_section"},
            {"item": "kubejs:rocket_hull_section"},
            {"item": "kubejs:rocket_hull_section"},
            {"item": "kubejs:rocket_guidance_module"},
            {"item": "ad_astra:rocket_fin"},
            {"item": "kubejs:pressurized_rocket_tank"},
            {"item": "kubejs:pressurized_rocket_tank"},
            {"item": "ad_astra:rocket_fin"},
            {"item": "ad_astra:rocket_fin"},
            {"item": "kubejs:rocket_combustion_engine"},
            {"item": "ad_astra:rocket_fin"}
        ],
        "result": {"count": 1, "id": "ad_astra:tier_1_rocket"}
    }).id('kubejs:gt_tier_1_rocket')

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
        .EUt(GTValues.VA[GTValues.MV])

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
        .EUt(GTValues.VA[GTValues.MV])

});
