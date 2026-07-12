ServerEvents.recipes(event => {

    // recipeType mirrors vanilla gtceu Pyrolyse Oven (MV) - same casing/appearance as source
    event.recipes.gtceu.assembler('extendedfeatures_large_pyrolysis_unit_controller')
        .itemInputs(
            '1x gtceu:mv_machine_hull',
            '4x gtceu:aluminium_plate',
            '1x gtceu:mv_electric_motor',
            '2x #gtceu:circuits/mv'
        )
        .inputFluids(Fluid.of('gtceu:soldering_alloy', 72))
        .itemOutputs('1x extendedfeatures:large_pyrolysis_unit')
        .duration(400)
        .EUt(GTValues.VA[GTValues.MV])

    // recipeType mirrors vanilla gtceu Cracking Unit (MV) - same casing/appearance as source
    event.recipes.gtceu.assembler('extendedfeatures_advanced_cracking_unit_controller')
        .itemInputs(
            '1x gtceu:mv_machine_hull',
            '4x gtceu:aluminium_plate',
            '1x gtceu:mv_electric_pump',
            '2x #gtceu:circuits/mv'
        )
        .inputFluids(Fluid.of('gtceu:soldering_alloy', 72))
        .itemOutputs('1x extendedfeatures:advanced_cracking_unit')
        .duration(400)
        .EUt(GTValues.VA[GTValues.MV])

    // native recipes for this machine's own recipe type run at MV (see CropRecipes.java)
    event.recipes.gtceu.assembler('extendedfeatures_industrial_greenhouse_controller')
        .itemInputs(
            '1x gtceu:mv_machine_hull',
            '4x gtceu:aluminium_plate',
            '1x gtceu:mv_emitter',
            '2x #gtceu:circuits/mv'
        )
        .inputFluids(Fluid.of('gtceu:soldering_alloy', 72))
        .itemOutputs('1x extendedfeatures:industrial_greenhouse')
        .duration(300)
        .EUt(GTValues.VA[GTValues.MV])

    // same recipe type/EUt as Industrial Greenhouse (WoodRecipes.java, MV) but noticeably
    // heavier structure (tungstensteel casings/firebox) - priced a tier above it
    event.recipes.gtceu.assembler('extendedfeatures_tree_growing_chamber_controller')
        .itemInputs(
            '1x gtceu:hv_machine_hull',
            '4x gtceu:stainless_steel_plate',
            '1x gtceu:hv_emitter',
            '2x #gtceu:circuits/hv'
        )
        .inputFluids(Fluid.of('gtceu:soldering_alloy', 144))
        .itemOutputs('1x extendedfeatures:tree_growing_chamber')
        .duration(400)
        .EUt(GTValues.VA[GTValues.HV])

    event.recipes.gtceu.assembler('extendedfeatures_disassembler_controller')
        .itemInputs(
            '1x gtceu:mv_machine_hull',
            '4x gtceu:aluminium_plate',
            '1x gtceu:mv_robot_arm',
            '2x #gtceu:circuits/mv'
        )
        .inputFluids(Fluid.of('gtceu:soldering_alloy', 72))
        .itemOutputs('1x extendedfeatures:disassembler')
        .duration(300)
        .EUt(GTValues.VA[GTValues.MV])

    // GCYM Blast Alloy Smelter casings (Stress-Proof / High Temperature Smelting)
    event.recipes.gtceu.assembler('extendedfeatures_robust_alloy_materializer_controller')
        .itemInputs(
            '1x gtceu:hv_machine_hull',
            '4x gtceu:stainless_steel_plate',
            '1x gtceu:hv_electric_motor',
            '2x #gtceu:circuits/hv'
        )
        .inputFluids(Fluid.of('gtceu:soldering_alloy', 144))
        .itemOutputs('1x extendedfeatures:robust_alloy_materializer')
        .duration(400)
        .EUt(GTValues.VA[GTValues.HV])

    // native recipes for this machine's own recipe type run at EV (see MultiblocksRecipes.java)
    event.recipes.gtceu.assembler('extendedfeatures_rock_processing_facility_controller')
        .itemInputs(
            '1x gtceu:ev_machine_hull',
            '4x gtceu:titanium_plate',
            '1x gtceu:ev_conveyor_module',
            '2x #gtceu:circuits/ev'
        )
        .inputFluids(Fluid.of('gtceu:soldering_alloy', 288))
        .itemOutputs('1x extendedfeatures:rock_processing_facility')
        .duration(400)
        .EUt(GTValues.VA[GTValues.EV])

    // recipeType mirrors vanilla gtceu Assembly Line (EV) - same casing/appearance as source
    event.recipes.gtceu.assembler('extendedfeatures_compact_assembly_line_controller')
        .itemInputs(
            '1x gtceu:ev_machine_hull',
            '4x gtceu:titanium_plate',
            '1x gtceu:ev_robot_arm',
            '1x gtceu:ev_conveyor_module',
            '2x #gtceu:circuits/ev'
        )
        .inputFluids(Fluid.of('gtceu:soldering_alloy', 288))
        .itemOutputs('1x extendedfeatures:compact_assembly_line')
        .duration(500)
        .EUt(GTValues.VA[GTValues.EV])

    // recipeType mirrors vanilla gtceu Large Chemical Reactor (EV) - same casing/frame as source
    event.recipes.gtceu.assembler('extendedfeatures_enlarged_reaction_chamber_controller')
        .itemInputs(
            '1x gtceu:ev_machine_hull',
            '4x gtceu:titanium_plate',
            '1x gtceu:ev_electric_pump',
            '1x gtceu:ev_sensor',
            '2x #gtceu:circuits/ev'
        )
        .inputFluids(Fluid.of('gtceu:soldering_alloy', 288))
        .itemOutputs('1x extendedfeatures:enlarged_reaction_chamber')
        .duration(400)
        .EUt(GTValues.VA[GTValues.EV])

    // DataBankMachine + Advanced Computer Casing family, positioned alongside vanilla Data Bank (LuV)
    event.recipes.gtceu.assembler('extendedfeatures_expanded_databank_controller')
        .itemInputs(
            '1x gtceu:luv_machine_hull',
            '4x gtceu:data_orb',
            '2x #gtceu:circuits/luv'
        )
        .inputFluids(Fluid.of('gtceu:soldering_alloy', 1152))
        .itemOutputs('1x extendedfeatures:expanded_databank')
        .duration(400)
        .EUt(GTValues.VA[GTValues.LuV])

    // TieredMultis(LuV, ZPM, UV) - LuV=4 parallels
    event.recipes.gtceu.assembler('extendedfeatures_luv_advanced_fusion_reactor_controller')
        .itemInputs(
            '1x gtceu:luv_machine_hull',
            '4x gtceu:rhodium_plated_palladium_plate',
            '1x gtceu:luv_field_generator',
            '2x #gtceu:circuits/luv'
        )
        .inputFluids(Fluid.of('gtceu:soldering_alloy', 1152))
        .itemOutputs('1x extendedfeatures:luv_advanced_fusion_reactor')
        .duration(600)
        .EUt(GTValues.VA[GTValues.LuV])

    // TieredMultis(LuV, ZPM, UV) - ZPM=8 parallels
    event.recipes.gtceu.assembler('extendedfeatures_zpm_advanced_fusion_reactor_controller')
        .itemInputs(
            '1x gtceu:zpm_machine_hull',
            '4x gtceu:naquadah_alloy_plate',
            '1x gtceu:zpm_field_generator',
            '2x #gtceu:circuits/zpm'
        )
        .inputFluids(Fluid.of('gtceu:soldering_alloy', 2304))
        .itemOutputs('1x extendedfeatures:zpm_advanced_fusion_reactor')
        .duration(600)
        .EUt(GTValues.VA[GTValues.ZPM])

    // Machines.java: ZPM_DATA_ACCESS_HATCH .tier(ZPM)
    event.recipes.gtceu.assembler('extendedfeatures_zpm_data_access_hatch_controller')
        .itemInputs(
            '1x gtceu:zpm_machine_hull',
            '2x gtceu:data_orb',
            '1x #gtceu:circuits/zpm'
        )
        .inputFluids(Fluid.of('gtceu:soldering_alloy', 2304))
        .itemOutputs('1x extendedfeatures:zpm_data_access_hatch')
        .duration(300)
        .EUt(GTValues.VA[GTValues.ZPM])

    // TieredMultis(LuV, ZPM, UV) - UV=16 parallels
    event.recipes.gtceu.assembler('extendedfeatures_uv_advanced_fusion_reactor_controller')
        .itemInputs(
            '1x gtceu:uv_machine_hull',
            '4x gtceu:duranium_plate',
            '1x gtceu:uv_field_generator',
            '2x #gtceu:circuits/uv'
        )
        .inputFluids(Fluid.of('gtceu:soldering_alloy', 4608))
        .itemOutputs('1x extendedfeatures:uv_advanced_fusion_reactor')
        .duration(600)
        .EUt(GTValues.VA[GTValues.UV])

    // Machines.java: UV_DATA_ACCESS_HATCH .tier(UV)
    event.recipes.gtceu.assembler('extendedfeatures_uv_data_access_hatch_controller')
        .itemInputs(
            '1x gtceu:uv_machine_hull',
            '2x gtceu:data_orb',
            '1x #gtceu:circuits/uv'
        )
        .inputFluids(Fluid.of('gtceu:soldering_alloy', 4608))
        .itemOutputs('1x extendedfeatures:uv_data_access_hatch')
        .duration(300)
        .EUt(GTValues.VA[GTValues.UV])

    // Machines.java: UHV_DATA_ACCESS_HATCH .tier(UHV)
    event.recipes.gtceu.assembler('extendedfeatures_uhv_data_access_hatch_controller')
        .itemInputs(
            '1x gtceu:uhv_machine_hull',
            '2x gtceu:data_module',
            '1x gtceu:uhv_emitter',
            '1x #gtceu:circuits/uhv'
        )
        .inputFluids(Fluid.of('gtceu:soldering_alloy', 9216))
        .itemOutputs('1x extendedfeatures:uhv_data_access_hatch')
        .duration(300)
        .EUt(GTValues.VA[GTValues.UHV])

})
