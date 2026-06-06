ServerEvents.recipes(event => {

    // --- Desh Mond process (Moon/HV tier) ---
    // Desh ore spawns on the Moon. Can't smelt (NO_SMELTING flag). EBF auto-recipe removed below.
    // Mond is the ONLY path to desh ingot — functions as an infrastructure check
    // player must build HV chemical reactors and establish CO production before using desh
    // net CO loss ~50 mB/cycle; manganese and cobalt are byproduct rewards

    // removes auto-generated gtceu ebf recipe so mond is mandatory
    event.remove({ type: 'gtceu:electric_blast_furnace', output: 'gtceu:desh_ingot' })

    // Step 1: carbonyl formation (low temp, CO atmosphere)
    event.recipes.gtceu.chemical_reactor('desh_carbonyl_formation')
        .itemInputs('1x gtceu:desh_dust')
        .inputFluids(Fluid.of('gtceu:carbon_monoxide', 400))
        .outputFluids(Fluid.of('gtceu:desh_carbonyl', 1000))
        .duration(8 * 20)
        .EUt(GTValues.VA[GTValues.HV])

    // Step 2: carbonyl condensation — gas cooled to solid, impurities expelled as byproducts
    // condensed form is mond-exclusive; raw desh dust has no ebf route (removed above)
    event.recipes.gtceu.chemical_reactor('desh_carbonyl_condensation')
        .inputFluids(Fluid.of('gtceu:desh_carbonyl', 1000))
        .itemOutputs('1x kubejs:condensed_desh_carbonyl')
        .chancedOutput('gtceu:manganese_dust', 7500, 500)    // lunar regolith inclusion
        .chancedOutput('gtceu:small_cobalt_dust', 2500, 250) // nickel-iron meteorite trace
        .outputFluids(Fluid.of('gtceu:carbon_monoxide', 350))
        .duration(12 * 20)
        .EUt(GTValues.VA[GTValues.HV])

    // Step 3: EBF decomposition — heat drives off remaining CO, leaves pure desh ingot
    event.recipes.gtceu.electric_blast_furnace('desh_carbonyl_ebf')
        .itemInputs('1x kubejs:condensed_desh_carbonyl')
        .itemOutputs('1x gtceu:desh_ingot')
        .blastFurnaceTemp(2700)
        .duration(10 * 20)
        .EUt(GTValues.VA[GTValues.HV])

    // Moon sand centrifuge → silicon
    // Lunar regolith is SiO2-rich anorthosite. Primary source of Silicon at HV
    // before cleanroom silicon boule process is online.
    event.recipes.gtceu.centrifuge('moon_sand_silicon')
        .itemInputs('4x ad_astra:moon_sand')
        .itemOutputs('2x gtceu:silicon_dust')
        .chancedOutput('gtceu:calcium_dust', 5000, 0)
        .chancedOutput('gtceu:aluminium_dust', 3000, 0)
        .chancedOutput('gtceu:small_iron_dust', 2000, 0)
        .duration(15 * 20)
        .EUt(GTValues.VA[GTValues.HV])

    //replaces electrum wire in micro-flavored ev circuit recipe with desh wire
    event.replaceInput({ output: 'gtceu:micro_processor_computer' }, 'gtceu:fine_electrum_wire', 'gtceu:fine_desh_wire')

    // --- Tier 1 Rocket (HV/Moon gate) ---
    // three layers of recipe depth
    // layer 1: ebf alloy + gt assembler sub-components, all from overworld hv materials
    // layer 2: lunar rocket alloy upgrades to vanilla nose cone and fins
    // layer 3: nasa workbench final assembly consuming all of the above

    // lunar rocket alloy: ultimet (cobalt-chrome superalloy) + aluminium, blasted at hv ebf
    // ultimet itself requires a prior ebf step from cobalt/chrome/molybdenum/tungsten constituents
    // intentionally overworld-only so this can be built before the first moon trip
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
    // lunar rocket alloy outer skin over stainless steel inner frame, rubber-sealed at joints
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
    // alloy long rods form the combustion chamber walls
    // hv motor drives the turbine, hv pump feeds propellant
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

    // pressurized fuel tank
    // aluminium body for low weight, stainless collar at attach points
    // hv pump maintains operating pressure, rubber seals prevent blow-by
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
    // hv circuit core with emitter/sensor telemetry pair and glass lens array
    // pattern: L E L / G C G / L S L
    event.shaped('kubejs:rocket_guidance_module', [
        'L E L',
        'G C G',
        'L S L'
    ], {
        L: 'gtceu:lunar_rocket_alloy_plate',
        E: 'gtceu:hv_emitter',
        G: 'gtceu:glass_lens',
        C: '#gtceu:circuits/hv',
        S: 'gtceu:hv_sensor'
    })

    // layer 2 — nose cone and fins now require lunar rocket alloy instead of steel

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

    // layer 3 — nasa workbench final assembly
    // slot layout mirrors vanilla tier 1 rocket structure:
    //   slot 1: nose cone
    //   slots 2-6: hull sections (5)
    //   slot 7: guidance module
    //   slots 8 11 12 14: fins (4)
    //   slots 9 10: pressurized tanks (2)
    //   slot 13: combustion engine

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

    //adds moon sand to the plascrete and cleanroom glass recipes
    //so that the cleanroom cant be made until you go to the #moon
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