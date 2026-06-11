ServerEvents.recipes(event => {

    const ec_remove = [
        'extendedcrafting:basic_table',
        'extendedcrafting:advanced_table',
        'extendedcrafting:elite_table',
        'extendedcrafting:ultimate_table',
        'extendedcrafting:basic_auto_table',
        'extendedcrafting:advanced_auto_table',
        'extendedcrafting:elite_auto_table',
        'extendedcrafting:ultimate_auto_table',
        'extendedcrafting:crafting_core',
        'extendedcrafting:compressor',
        'extendedcrafting:ender_crafter',
        'extendedcrafting:auto_ender_crafter',
        'extendedcrafting:flux_crafter',
        'extendedcrafting:auto_flux_crafter',
        'extendedcrafting:frame',
        'extendedcrafting:pedestal',
    ]
    ec_remove.forEach(item => event.remove({ output: item }))

    // frame (MV) — structural component for crafting_core and compressor
    event.recipes.gtceu.assembler('ec_frame')
        .itemInputs('8x gtceu:steel_plate', '4x gtceu:glass_plate')
        .inputFluids(Fluid.of('gtceu:soldering_alloy', 144))
        .itemOutputs('4x extendedcrafting:frame')
        .duration(8 * 20)
        .EUt(GTValues.VA[GTValues.MV])

    // pedestal (MV) — combination crafting stand
    event.recipes.gtceu.assembler('ec_pedestal')
        .itemInputs('4x gtceu:steel_plate', '2x gtceu:steel_rod', 'gtceu:mv_machine_hull')
        .inputFluids(Fluid.of('gtceu:lubricant', 250))
        .itemOutputs('2x extendedcrafting:pedestal')
        .duration(8 * 20)
        .EUt(GTValues.VA[GTValues.MV])

    // basic_table (MV) — 3x3 stationary crafting table
    event.recipes.gtceu.assembler('ec_basic_table')
        .itemInputs('4x gtceu:steel_plate', '2x #gtceu:circuits/mv', 'minecraft:crafting_table', 'gtceu:mv_machine_hull')
        .inputFluids(Fluid.of('gtceu:lubricant', 250))
        .itemOutputs('extendedcrafting:basic_table')
        .duration(10 * 20)
        .EUt(GTValues.VA[GTValues.MV])

    // advanced_table (HV) — 5x5
    event.recipes.gtceu.assembler('ec_advanced_table')
        .itemInputs('4x gtceu:stainless_steel_plate', '2x #gtceu:circuits/hv', 'extendedcrafting:basic_table', 'gtceu:hv_machine_hull')
        .inputFluids(Fluid.of('gtceu:lubricant', 500))
        .itemOutputs('extendedcrafting:advanced_table')
        .duration(15 * 20)
        .EUt(GTValues.VA[GTValues.HV])

    // elite_table (EV) — 7x7
    event.recipes.gtceu.assembler('ec_elite_table')
        .itemInputs('4x gtceu:titanium_plate', '2x #gtceu:circuits/ev', 'extendedcrafting:advanced_table', 'gtceu:ev_machine_hull')
        .inputFluids(Fluid.of('gtceu:lubricant', 750))
        .itemOutputs('extendedcrafting:elite_table')
        .duration(20 * 20)
        .EUt(GTValues.VA[GTValues.EV])

    // ultimate_table (IV) — 9x9
    event.recipes.gtceu.assembler('ec_ultimate_table')
        .itemInputs('4x gtceu:tungsten_steel_plate', '2x #gtceu:circuits/iv', 'extendedcrafting:elite_table', 'gtceu:iv_machine_hull')
        .inputFluids(Fluid.of('gtceu:lubricant', 1000))
        .itemOutputs('extendedcrafting:ultimate_table')
        .duration(25 * 20)
        .EUt(GTValues.VA[GTValues.IV])

    // basic_auto_table (HV)
    event.recipes.gtceu.assembler('ec_basic_auto_table')
        .itemInputs('extendedcrafting:basic_table', 'gtceu:hv_conveyor_module', '2x #gtceu:circuits/hv', '2x gtceu:stainless_steel_plate')
        .inputFluids(Fluid.of('gtceu:soldering_alloy', 144))
        .itemOutputs('extendedcrafting:basic_auto_table')
        .duration(12 * 20)
        .EUt(GTValues.VA[GTValues.HV])

    // advanced_auto_table (EV)
    event.recipes.gtceu.assembler('ec_advanced_auto_table')
        .itemInputs('extendedcrafting:advanced_table', 'gtceu:ev_conveyor_module', '2x #gtceu:circuits/ev', '2x gtceu:titanium_plate')
        .inputFluids(Fluid.of('gtceu:soldering_alloy', 144))
        .itemOutputs('extendedcrafting:advanced_auto_table')
        .duration(15 * 20)
        .EUt(GTValues.VA[GTValues.EV])

    // elite_auto_table (IV)
    event.recipes.gtceu.assembler('ec_elite_auto_table')
        .itemInputs('extendedcrafting:elite_table', 'gtceu:iv_conveyor_module', '2x #gtceu:circuits/iv', '2x gtceu:tungsten_steel_plate')
        .inputFluids(Fluid.of('gtceu:soldering_alloy', 144))
        .itemOutputs('extendedcrafting:elite_auto_table')
        .duration(20 * 20)
        .EUt(GTValues.VA[GTValues.IV])

    // ultimate_auto_table (LuV)
    event.recipes.gtceu.assembler('ec_ultimate_auto_table')
        .itemInputs('extendedcrafting:ultimate_table', 'gtceu:luv_conveyor_module', '2x #gtceu:circuits/luv', '2x gtceu:naquadah_plate')
        .inputFluids(Fluid.of('gtceu:soldering_alloy', 288))
        .itemOutputs('extendedcrafting:ultimate_auto_table')
        .duration(25 * 20)
        .EUt(GTValues.VA[GTValues.LuV])

    // crafting_core (HV) — combination crafting, needs power
    event.recipes.gtceu.assembler('ec_crafting_core')
        .itemInputs('extendedcrafting:frame', 'gtceu:hv_machine_hull', '4x #gtceu:circuits/hv', 'gtceu:hv_electric_pump')
        .inputFluids(Fluid.of('gtceu:soldering_alloy', 288))
        .itemOutputs('extendedcrafting:crafting_core')
        .duration(20 * 20)
        .EUt(GTValues.VA[GTValues.HV])

    // compressor (EV) — quantum compression
    event.recipes.gtceu.assembler('ec_compressor')
        .itemInputs('extendedcrafting:frame', 'gtceu:ev_machine_hull', '4x #gtceu:circuits/ev', 'gtceu:ev_electric_piston', '2x gtceu:titanium_plate')
        .inputFluids(Fluid.of('gtceu:soldering_alloy', 288))
        .itemOutputs('extendedcrafting:compressor')
        .duration(25 * 20)
        .EUt(GTValues.VA[GTValues.EV])

    // ender_crafter (HV) — ender-powered crafting
    event.recipes.gtceu.assembler('ec_ender_crafter')
        .itemInputs('gtceu:hv_machine_hull', '4x #gtceu:circuits/hv', '4x minecraft:ender_pearl', '2x gtceu:stainless_steel_plate')
        .inputFluids(Fluid.of('gtceu:soldering_alloy', 288))
        .itemOutputs('extendedcrafting:ender_crafter')
        .duration(20 * 20)
        .EUt(GTValues.VA[GTValues.HV])

    // auto_ender_crafter (EV)
    event.recipes.gtceu.assembler('ec_auto_ender_crafter')
        .itemInputs('extendedcrafting:ender_crafter', 'gtceu:ev_conveyor_module', '2x #gtceu:circuits/ev', '2x gtceu:titanium_plate')
        .inputFluids(Fluid.of('gtceu:soldering_alloy', 144))
        .itemOutputs('extendedcrafting:auto_ender_crafter')
        .duration(15 * 20)
        .EUt(GTValues.VA[GTValues.EV])

    // flux_crafter (HV) — FE-powered crafting
    event.recipes.gtceu.assembler('ec_flux_crafter')
        .itemInputs('gtceu:hv_machine_hull', '4x #gtceu:circuits/hv', '4x gtceu:red_alloy_plate', '2x gtceu:stainless_steel_plate')
        .inputFluids(Fluid.of('gtceu:soldering_alloy', 288))
        .itemOutputs('extendedcrafting:flux_crafter')
        .duration(20 * 20)
        .EUt(GTValues.VA[GTValues.HV])

    // auto_flux_crafter (EV)
    event.recipes.gtceu.assembler('ec_auto_flux_crafter')
        .itemInputs('extendedcrafting:flux_crafter', 'gtceu:ev_conveyor_module', '2x #gtceu:circuits/ev', '2x gtceu:titanium_plate')
        .inputFluids(Fluid.of('gtceu:soldering_alloy', 144))
        .itemOutputs('extendedcrafting:auto_flux_crafter')
        .duration(15 * 20)
        .EUt(GTValues.VA[GTValues.EV])

})
