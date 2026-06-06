ServerEvents.recipes(event => {

    event.remove({ id: 'ad_astra:smelting/desh_ingot_from_smelting_raw_desh' })
    event.remove({ id: 'ad_astra:smelting/desh_ingot_from_smelting_moon_desh_ore' })
    event.remove({ id: 'ad_astra:smelting/desh_ingot_from_smelting_deepslate_desh_ore' })
    // desh mond process
    // no smelting flag set
    // mond is only path to desh ingot
    // requires HV chemical reactors and CO production
    // ~50 mB CO net loss per cycle

    // removes auto ebf so mond is mandatory
    event.remove({ type: 'gtceu:electric_blast_furnace', output: 'gtceu:desh_ingot' })

    // step 1 carbonyl formation
    event.recipes.gtceu.chemical_reactor('desh_carbonyl_formation')
        .itemInputs('1x gtceu:desh_dust')
        .inputFluids(Fluid.of('gtceu:carbon_monoxide', 400))
        .outputFluids(Fluid.of('gtceu:desh_carbonyl', 1000))
        .duration(8 * 20)
        .EUt(GTValues.VA[GTValues.HV])

    // step 2 condensation
    event.recipes.gtceu.chemical_reactor('desh_carbonyl_condensation')
        .inputFluids(Fluid.of('gtceu:desh_carbonyl', 1000))
        .itemOutputs('1x kubejs:condensed_desh_carbonyl')
        .chancedOutput('gtceu:manganese_dust', 7500, 500)
        .chancedOutput('gtceu:small_cobalt_dust', 2500, 250)
        .outputFluids(Fluid.of('gtceu:carbon_monoxide', 350))
        .duration(12 * 20)
        .EUt(GTValues.VA[GTValues.HV])

    // step 3 EBF decomposition
    event.recipes.gtceu.electric_blast_furnace('desh_carbonyl_ebf')
        .itemInputs('1x kubejs:condensed_desh_carbonyl')
        .itemOutputs('1x ad_astra:desh_ingot')
        .blastFurnaceTemp(2700)
        .duration(10 * 20)
        .EUt(GTValues.VA[GTValues.HV])

    // moon sand to silicon
    event.recipes.gtceu.centrifuge('moon_sand_silicon')
        .itemInputs('4x ad_astra:moon_sand')
        .itemOutputs('2x gtceu:silicon_dust')
        .chancedOutput('gtceu:calcium_dust', 5000, 0)
        .chancedOutput('gtceu:aluminium_dust', 3000, 0)
        .chancedOutput('gtceu:small_iron_dust', 2000, 0)
        .duration(15 * 20)
        .EUt(GTValues.VA[GTValues.HV])

    // replace electrum wire in micro processor recipe with desh wire
    event.replaceInput({ output: 'gtceu:micro_processor_computer' }, 'gtceu:fine_electrum_wire', 'gtceu:fine_desh_wire')

    // tier 1 rocket
    // three layers
    // layer 1 ebf alloy and assembler sub-components
    // layer 2 lunar rocket alloy nose cone and fins
    // layer 3 nasa workbench assembly

    // ultimet + aluminium at HV EBF
    // ultimet requires prior EBF from Co Cr Mo W
    // overworld only so rocket builds before first moon trip
    event.recipes.gtceu.electric_blast_furnace('lunar_rocket_alloy_ebf')
        .itemInputs(
            '4x gtceu:ultimet_dust',
            '2x gtceu:aluminium_dust',
            '1x gtceu:chromium_dust'
        )
        .itemOutputs('4x gtceu:lunar_rocket_alloy_ingot')
        .blastFurnaceTemp(2700)
        .duration(30 * 20)
        .EUt(GTValues.VA[GTValues.HV])

    // hull sections
    event.recipes.gtceu.assembler('rocket_hull_section')
        .itemInputs(
            '2x gtceu:lunar_rocket_alloy_plate',
            '2x gtceu:stainless_steel_plate',
            '1x gtceu:rubber_plate'
        )
        .itemOutputs('2x kubejs:rocket_hull_section')
        .duration(20 * 20)
        .EUt(GTValues.VA[GTValues.HV])

    // combustion engine
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

    // fuel tank
    event.recipes.gtceu.assembler('pressurized_rocket_tank')
        .itemInputs(
            '4x gtceu:aluminium_plate',
            '2x gtceu:stainless_steel_plate',
            '1x gtceu:rubber_plate',
            '1x gtceu:hv_electric_pump'
        )
        .itemOutputs('1x kubejs:pressurized_rocket_tank')
        .duration(20 * 20)
        .EUt(GTValues.VA[GTValues.HV])

    // guidance module
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

    // layer 2 nose cone and fins
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

    // layer 3 nasa workbench
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

    // gate cleanroom behind moon
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
