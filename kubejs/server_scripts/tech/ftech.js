ServerEvents.recipes(event => {

    // REMOVALS

    // f_tech_core drills + information tablet
    event.remove({ output: 'f_tech_core:copper_drill' })
    event.remove({ output: 'f_tech_core:iron_drill' })
    event.remove({ output: 'f_tech_core:gold_drill' })
    event.remove({ output: 'f_tech_core:netherite_drill' })
    event.remove({ output: 'f_tech_core:diamond_tipped_netherite_drill' })
    event.remove({ output: 'f_tech_core:information_tablet' })

    // f_tech_equipment — backpack, foliage clearer, all modules
    event.remove({ output: 'f_tech_equipment:backpack' })
    event.remove({ output: 'f_tech_equipment:foliage_clearer' })
    event.remove({ output: 'f_tech_equipment:blank_upgrade' })
    event.remove({ output: 'f_tech_equipment:block_operations_upgrade' })
    event.remove({ output: 'f_tech_equipment:queue_upgrade' })
    event.remove({ output: 'f_tech_equipment:storage_upgrade_1' })
    event.remove({ output: 'f_tech_equipment:storage_upgrade_2' })
    event.remove({ output: 'f_tech_equipment:storage_upgrade_3' })
    event.remove({ output: 'f_tech_equipment:item_pickup_upgrade' })
    event.remove({ output: 'f_tech_equipment:range_upgrade' })
    event.remove({ output: 'f_tech_equipment:combat_upgrade' })
    event.remove({ output: 'f_tech_equipment:entity_manipulation_upgrade' })
    event.remove({ output: 'f_tech_equipment:locomotion_upgrade' })

    // ============================================================
    // MV — F-TECH CORE: INFORMATION TABLET
    // ============================================================

    // information tablet: aluminium display unit with MV sensor input panel
    event.recipes.gtceu.assembler('ftech_information_tablet')
        .itemInputs('4x gtceu:aluminium_plate', 'gtceu:mv_sensor', 'gtceu:glass_plate', '2x #gtceu:circuits/mv')
        .inputFluids(Fluid.of('gtceu:soldering_alloy', 72))
        .itemOutputs('1x f_tech_core:information_tablet')
        .duration(15 * 20)
        .EUt(GTValues.VA[GTValues.MV])

    // ============================================================
    // HV — F-TECH CORE: ALL DRILLS
    // ============================================================

    // copper robotic drill: copper-tipped HV mining head
    event.recipes.gtceu.assembler('ftech_copper_drill')
        .itemInputs('4x create:copper_sheet', 'gtceu:hv_electric_motor', 'gtceu:copper_rod', '#gtceu:circuits/hv')
        .inputFluids(Fluid.of('gtceu:soldering_alloy', 72))
        .itemOutputs('1x f_tech_core:copper_drill')
        .duration(15 * 20)
        .EUt(GTValues.VA[GTValues.HV])

    // iron robotic drill: iron-tipped HV mining head
    event.recipes.gtceu.assembler('ftech_iron_drill')
        .itemInputs('4x create:iron_sheet', 'gtceu:hv_electric_motor', 'gtceu:steel_rod', '#gtceu:circuits/hv')
        .inputFluids(Fluid.of('gtceu:soldering_alloy', 72))
        .itemOutputs('1x f_tech_core:iron_drill')
        .duration(15 * 20)
        .EUt(GTValues.VA[GTValues.HV])

    // gold robotic drill: gold-tipped HV mining head; fast but soft
    event.recipes.gtceu.assembler('ftech_gold_drill')
        .itemInputs('4x create:golden_sheet', 'gtceu:hv_electric_motor', 'gtceu:gold_rod', '#gtceu:circuits/hv')
        .inputFluids(Fluid.of('gtceu:soldering_alloy', 72))
        .itemOutputs('1x f_tech_core:gold_drill')
        .duration(15 * 20)
        .EUt(GTValues.VA[GTValues.HV])

    // netherite robotic drill: HV-rated tungsten-netherite composite drill head
    event.recipes.gtceu.assembler('ftech_netherite_drill')
        .itemInputs('4x gtceu:stainless_steel_plate', 'gtceu:hv_electric_motor', 'gtceu:hv_electric_piston', 'minecraft:netherite_ingot', '2x #gtceu:circuits/hv')
        .inputFluids(Fluid.of('gtceu:soldering_alloy', 144))
        .itemOutputs('1x f_tech_core:netherite_drill')
        .duration(25 * 20)
        .EUt(GTValues.VA[GTValues.HV])

    // diamond-tipped netherite drill: diamond-edge cutting array on netherite body
    event.recipes.gtceu.assembler('ftech_diamond_tipped_netherite_drill')
        .itemInputs('f_tech_core:netherite_drill', '4x gtceu:diamond_plate', 'gtceu:hv_electric_piston', '2x #gtceu:circuits/hv')
        .inputFluids(Fluid.of('gtceu:soldering_alloy', 144))
        .itemOutputs('1x f_tech_core:diamond_tipped_netherite_drill')
        .duration(30 * 20)
        .EUt(GTValues.VA[GTValues.HV])

    // ============================================================
    // HV — F-TECH EQUIPMENT: BACKPACK + FOLIAGE CLEARER
    // ============================================================

    // backpack: stainless hull houses HV machine core and dual robot arms
    event.recipes.gtceu.assembler('ftech_backpack')
        .itemInputs('4x gtceu:stainless_steel_plate', 'gtceu:hv_machine_hull', '6x gtceu:hv_robot_arm', '2x #gtceu:circuits/hv')
        .inputFluids(Fluid.of('gtceu:soldering_alloy', 288))
        .itemOutputs('1x f_tech_equipment:backpack')
        .duration(25 * 20)
        .EUt(GTValues.VA[GTValues.HV])

    // foliage clearer: handheld motorized brush cutter on steel handle
    event.recipes.gtceu.assembler('ftech_foliage_clearer')
        .itemInputs('2x gtceu:stainless_steel_plate', 'gtceu:hv_electric_motor', '2x gtceu:steel_rod', '#gtceu:circuits/hv')
        .inputFluids(Fluid.of('gtceu:soldering_alloy', 72))
        .itemOutputs('1x f_tech_equipment:foliage_clearer')
        .duration(15 * 20)
        .EUt(GTValues.VA[GTValues.HV])

    // ============================================================
    // HV — F-TECH EQUIPMENT: BLANK UPGRADE + BASE MODULES
    // ============================================================

    // blank upgrade: stainless silicon substrate; base housing for all upgrade modules
    event.recipes.gtceu.assembler('ftech_blank_upgrade')
        .itemInputs('2x gtceu:stainless_steel_plate', '4x gtceu:silicon_dust', '#gtceu:circuits/hv')
        .inputFluids(Fluid.of('gtceu:soldering_alloy', 72))
        .itemOutputs('1x f_tech_equipment:blank_upgrade')
        .duration(10 * 20)
        .EUt(GTValues.VA[GTValues.HV])

    // block operations module: piston array executes remote place/break commands
    event.recipes.gtceu.assembler('ftech_block_operations_upgrade')
        .itemInputs('f_tech_equipment:blank_upgrade', '2x gtceu:stainless_steel_plate', '2x gtceu:hv_electric_piston', 'gtceu:hv_sensor', '2x #gtceu:circuits/hv')
        .inputFluids(Fluid.of('gtceu:soldering_alloy', 144))
        .itemOutputs('1x f_tech_equipment:block_operations_upgrade')
        .duration(20 * 20)
        .EUt(GTValues.VA[GTValues.HV])

    // task queue module: HV control logic schedules and sequences backpack commands
    event.recipes.gtceu.assembler('ftech_queue_upgrade')
        .itemInputs('f_tech_equipment:blank_upgrade', '2x gtceu:stainless_steel_plate', 'gtceu:hv_electric_motor', '4x #gtceu:circuits/hv')
        .inputFluids(Fluid.of('gtceu:soldering_alloy', 144))
        .itemOutputs('1x f_tech_equipment:queue_upgrade')
        .duration(20 * 20)
        .EUt(GTValues.VA[GTValues.HV])

    // storage mk.i: ender-linked compartment expands internal volume
    event.recipes.gtceu.assembler('ftech_storage_upgrade_1')
        .itemInputs('f_tech_equipment:blank_upgrade', '2x gtceu:stainless_steel_plate', '4x minecraft:ender_pearl', '#gtceu:circuits/hv')
        .inputFluids(Fluid.of('gtceu:soldering_alloy', 72))
        .itemOutputs('1x f_tech_equipment:storage_upgrade_1')
        .duration(15 * 20)
        .EUt(GTValues.VA[GTValues.HV])

    // item pickup module: HV sensor detects drops; piston arm collects into backpack
    event.recipes.gtceu.assembler('ftech_item_pickup_upgrade')
        .itemInputs('f_tech_equipment:blank_upgrade', '2x gtceu:stainless_steel_plate', 'gtceu:hv_sensor', 'gtceu:hv_electric_piston', '#gtceu:circuits/hv')
        .inputFluids(Fluid.of('gtceu:soldering_alloy', 72))
        .itemOutputs('1x f_tech_equipment:item_pickup_upgrade')
        .duration(15 * 20)
        .EUt(GTValues.VA[GTValues.HV])

    // range upgrade: extended sensor array pushes all module effective ranges outward
    event.recipes.gtceu.assembler('ftech_range_upgrade')
        .itemInputs('f_tech_equipment:blank_upgrade', '2x gtceu:stainless_steel_plate', '2x gtceu:hv_sensor', '#gtceu:circuits/hv')
        .inputFluids(Fluid.of('gtceu:soldering_alloy', 72))
        .itemOutputs('1x f_tech_equipment:range_upgrade')
        .duration(15 * 20)
        .EUt(GTValues.VA[GTValues.HV])

    // entity manipulation module: dual robot arms grab and throw entities
    event.recipes.gtceu.assembler('ftech_entity_manipulation_upgrade')
        .itemInputs('f_tech_equipment:blank_upgrade', '2x gtceu:stainless_steel_plate', '2x gtceu:hv_robot_arm', 'gtceu:hv_sensor', '2x #gtceu:circuits/hv')
        .inputFluids(Fluid.of('gtceu:soldering_alloy', 144))
        .itemOutputs('1x f_tech_equipment:entity_manipulation_upgrade')
        .duration(20 * 20)
        .EUt(GTValues.VA[GTValues.HV])

    // ============================================================
    // EV — F-TECH EQUIPMENT: MID-TIER MODULES
    // ============================================================

    // storage mk.ii: enderium-lined dimensional pocket holds far more than mk.i
    event.recipes.gtceu.assembler('ftech_storage_upgrade_2')
        .itemInputs('f_tech_equipment:storage_upgrade_1', '4x gtceu:enderium_plate', 'gtceu:hv_field_generator', '2x #gtceu:circuits/ev')
        .inputFluids(Fluid.of('gtceu:soldering_alloy', 144))
        .itemOutputs('1x f_tech_equipment:storage_upgrade_2')
        .duration(25 * 20)
        .EUt(GTValues.VA[GTValues.EV])

    // combat module: EV piston arm delivers strikes; nether star drives the force output
    event.recipes.gtceu.assembler('ftech_combat_upgrade')
        .itemInputs('f_tech_equipment:blank_upgrade', '4x gtceu:titanium_plate', 'gtceu:ev_electric_piston', 'gtceu:ev_robot_arm', 'minecraft:nether_star', '2x #gtceu:circuits/ev')
        .inputFluids(Fluid.of('gtceu:soldering_alloy', 144))
        .itemOutputs('1x f_tech_equipment:combat_upgrade')
        .duration(30 * 20)
        .EUt(GTValues.VA[GTValues.EV])

    // ============================================================
    // IV — F-TECH EQUIPMENT: TOP-TIER MODULES
    // ============================================================

    // storage mk.iii: HSSG-reinforced shulker-dimensional space; maximum capacity
    event.recipes.gtceu.assembler('ftech_storage_upgrade_3')
        .itemInputs('f_tech_equipment:storage_upgrade_2', '4x gtceu:hssg_plate', 'gtceu:iv_field_generator', 'minecraft:nether_star', '2x #gtceu:circuits/iv')
        .inputFluids(Fluid.of('gtceu:soldering_alloy', 144))
        .itemOutputs('1x f_tech_equipment:storage_upgrade_3')
        .duration(35 * 20)
        .EUt(GTValues.VA[GTValues.IV])

    // locomotion module: four IV-grade arms carry the wearer at high speed
    // titanium frame, IV motors + robot arms, lubricant-fed joint system
    event.recipes.gtceu.assembler('ftech_locomotion_upgrade')
        .itemInputs('f_tech_equipment:blank_upgrade', '4x gtceu:titanium_plate', '4x gtceu:iv_robot_arm', '2x gtceu:iv_electric_motor', '2x #gtceu:circuits/iv')
        .inputFluids(Fluid.of('gtceu:lubricant', 2000))
        .itemOutputs('1x f_tech_equipment:locomotion_upgrade')
        .duration(40 * 20)
        .EUt(GTValues.VA[GTValues.IV])

})
