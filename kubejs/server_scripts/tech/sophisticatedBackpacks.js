ServerEvents.recipes(event => {

    event.remove({ type: 'sophisticatedbackpacks:backpack_upgrade' })
    event.remove({ type: 'sophisticatedbackpacks:smithing_backpack_upgrade' })
    event.remove({ type: 'sophisticatedcore:upgrade_next_tier' })

    const sb_crafted = [
        'sophisticatedbackpacks:backpack',
        'sophisticatedbackpacks:upgrade_base',
        'sophisticatedbackpacks:pickup_upgrade',
        'sophisticatedbackpacks:filter_upgrade',
        'sophisticatedbackpacks:feeding_upgrade',
        'sophisticatedbackpacks:smelting_upgrade',
        'sophisticatedbackpacks:tank_upgrade',
        'sophisticatedbackpacks:battery_upgrade',
        'sophisticatedbackpacks:void_upgrade',
        'sophisticatedbackpacks:magnet_upgrade',
        'sophisticatedbackpacks:deposit_upgrade',
        'sophisticatedbackpacks:restock_upgrade',
        'sophisticatedbackpacks:refill_upgrade',
        'sophisticatedbackpacks:crafting_upgrade',
        'sophisticatedbackpacks:compacting_upgrade',
        'sophisticatedbackpacks:tool_swapper_upgrade',
        'sophisticatedbackpacks:inception_upgrade',
        'sophisticatedbackpacks:everlasting_upgrade',
        'sophisticatedbackpacks:stack_upgrade_starter_tier',
        'sophisticatedbackpacks:stack_upgrade_tier_1',
        'sophisticatedbackpacks:stack_upgrade_tier_2',
        'sophisticatedbackpacks:stack_upgrade_tier_3',
        'sophisticatedbackpacks:stack_upgrade_tier_4',
        'sophisticatedbackpacks:stack_upgrade_omega_tier',
        'sophisticatedbackpacks:advanced_compacting_upgrade',
        'sophisticatedbackpacks:advanced_deposit_upgrade',
        'sophisticatedbackpacks:advanced_feeding_upgrade',
        'sophisticatedbackpacks:advanced_filter_upgrade',
        'sophisticatedbackpacks:advanced_magnet_upgrade',
        'sophisticatedbackpacks:advanced_pickup_upgrade',
        'sophisticatedbackpacks:advanced_refill_upgrade',
        'sophisticatedbackpacks:advanced_restock_upgrade',
        'sophisticatedbackpacks:advanced_tool_swapper_upgrade',
        'sophisticatedbackpacks:advanced_void_upgrade',
        'sophisticatedbackpacks:auto_smelting_upgrade',
    ]
    sb_crafted.forEach(item => event.remove({ output: item }))

    // base backpack (LV)
    event.recipes.gtceu.assembler('sb_backpack')
        .itemInputs('4x minecraft:leather', '2x gtceu:rubber_plate', '4x gtceu:tin_single_wire')
        .itemOutputs('sophisticatedbackpacks:backpack')
        .duration(10 * 20)
        .EUt(GTValues.VA[GTValues.LV])

    // bronze backpack (LV)
    event.recipes.gtceu.assembler('sb_copper_backpack')
        .itemInputs('sophisticatedbackpacks:backpack', '4x gtceu:bronze_ingot', '4x gtceu:bronze_plate')
        .itemOutputs('sophisticatedbackpacks:copper_backpack')
        .duration(12 * 20)
        .EUt(GTValues.VA[GTValues.LV])

    // steel backpack (LV)
    event.recipes.gtceu.assembler('sb_iron_backpack')
        .itemInputs('sophisticatedbackpacks:copper_backpack', '4x gtceu:steel_ingot', '4x gtceu:steel_plate')
        .itemOutputs('sophisticatedbackpacks:iron_backpack')
        .duration(15 * 20)
        .EUt(GTValues.VA[GTValues.LV])

    // aluminium backpack (MV)
    event.recipes.gtceu.assembler('sb_gold_backpack')
        .itemInputs('sophisticatedbackpacks:iron_backpack', '4x gtceu:aluminium_ingot', '4x gtceu:aluminium_plate', '#gtceu:circuits/mv')
        .inputFluids(Fluid.of('gtceu:soldering_alloy', 72))
        .itemOutputs('sophisticatedbackpacks:gold_backpack')
        .duration(15 * 20)
        .EUt(GTValues.VA[GTValues.MV])

    // stainless steel backpack (HV)
    event.recipes.gtceu.assembler('sb_diamond_backpack')
        .itemInputs('sophisticatedbackpacks:gold_backpack', '4x gtceu:stainless_steel_ingot', '4x gtceu:stainless_steel_plate', '#gtceu:circuits/hv')
        .inputFluids(Fluid.of('gtceu:soldering_alloy', 144))
        .itemOutputs('sophisticatedbackpacks:diamond_backpack')
        .duration(20 * 20)
        .EUt(GTValues.VA[GTValues.HV])

    // titanium backpack (EV)
    event.recipes.gtceu.assembler('sb_netherite_backpack')
        .itemInputs('sophisticatedbackpacks:diamond_backpack', '4x gtceu:titanium_ingot', '4x gtceu:titanium_plate', '#gtceu:circuits/ev')
        .inputFluids(Fluid.of('gtceu:soldering_alloy', 144))
        .itemOutputs('sophisticatedbackpacks:netherite_backpack')
        .duration(20 * 20)
        .EUt(GTValues.VA[GTValues.EV])

    // upgrade base (LV; x4 per craft)
    event.recipes.gtceu.assembler('sb_upgrade_base')
        .itemInputs('2x gtceu:steel_plate', 'gtceu:rubber_plate', '4x gtceu:tin_single_wire')
        .itemOutputs('4x sophisticatedbackpacks:upgrade_base')
        .duration(8 * 20)
        .EUt(GTValues.VA[GTValues.LV])

    // stack upgrades
    event.recipes.gtceu.assembler('sb_stack_upgrade_starter')
        .itemInputs('sophisticatedbackpacks:upgrade_base', '8x gtceu:bronze_plate')
        .itemOutputs('sophisticatedbackpacks:stack_upgrade_starter_tier')
        .duration(10 * 20)
        .EUt(GTValues.VA[GTValues.LV])

    event.recipes.gtceu.assembler('sb_stack_upgrade_tier_1')
        .itemInputs('sophisticatedbackpacks:stack_upgrade_starter_tier', '8x gtceu:steel_plate')
        .itemOutputs('sophisticatedbackpacks:stack_upgrade_tier_1')
        .duration(10 * 20)
        .EUt(GTValues.VA[GTValues.LV])

    event.recipes.gtceu.assembler('sb_stack_upgrade_tier_2')
        .itemInputs('sophisticatedbackpacks:stack_upgrade_tier_1', '8x gtceu:aluminium_plate')
        .itemOutputs('sophisticatedbackpacks:stack_upgrade_tier_2')
        .duration(12 * 20)
        .EUt(GTValues.VA[GTValues.MV])

    event.recipes.gtceu.assembler('sb_stack_upgrade_tier_3')
        .itemInputs('sophisticatedbackpacks:stack_upgrade_tier_2', '8x gtceu:stainless_steel_plate')
        .itemOutputs('sophisticatedbackpacks:stack_upgrade_tier_3')
        .duration(15 * 20)
        .EUt(GTValues.VA[GTValues.HV])

    event.recipes.gtceu.assembler('sb_stack_upgrade_tier_4')
        .itemInputs('sophisticatedbackpacks:stack_upgrade_tier_3', '8x gtceu:titanium_plate')
        .itemOutputs('sophisticatedbackpacks:stack_upgrade_tier_4')
        .duration(20 * 20)
        .EUt(GTValues.VA[GTValues.EV])

    // naquadah stack upgrade requires LuV assembler
    event.recipes.gtceu.assembler('sb_stack_upgrade_omega')
        .itemInputs('sophisticatedbackpacks:stack_upgrade_tier_4', '4x gtceu:naquadah_plate')
        .itemOutputs('sophisticatedbackpacks:stack_upgrade_omega_tier')
        .duration(25 * 20)
        .EUt(GTValues.VA[GTValues.LuV])

    // utility upgrades (LV)
    event.recipes.gtceu.assembler('sb_pickup_upgrade')
        .itemInputs('sophisticatedbackpacks:upgrade_base', '2x gtceu:steel_rod', 'gtceu:lv_conveyor_module', '2x minecraft:redstone')
        .itemOutputs('sophisticatedbackpacks:pickup_upgrade')
        .duration(10 * 20)
        .EUt(GTValues.VA[GTValues.LV])

    event.recipes.gtceu.assembler('sb_filter_upgrade')
        .itemInputs('sophisticatedbackpacks:upgrade_base', '2x gtceu:steel_plate', '2x minecraft:redstone', '2x gtceu:tin_single_wire')
        .itemOutputs('sophisticatedbackpacks:filter_upgrade')
        .duration(10 * 20)
        .EUt(GTValues.VA[GTValues.LV])

    event.recipes.gtceu.assembler('sb_feeding_upgrade')
        .itemInputs('sophisticatedbackpacks:upgrade_base', 'minecraft:golden_apple', 'minecraft:golden_carrot', 'minecraft:glistering_melon_slice', 'minecraft:ender_pearl')
        .itemOutputs('sophisticatedbackpacks:feeding_upgrade')
        .duration(10 * 20)
        .EUt(GTValues.VA[GTValues.LV])

    event.recipes.gtceu.assembler('sb_smelting_upgrade')
        .itemInputs('sophisticatedbackpacks:upgrade_base', '2x gtceu:steel_plate', 'gtceu:lv_sensor')
        .itemOutputs('sophisticatedbackpacks:smelting_upgrade')
        .duration(10 * 20)
        .EUt(GTValues.VA[GTValues.LV])

    event.recipes.gtceu.assembler('sb_tank_upgrade')
        .itemInputs('sophisticatedbackpacks:upgrade_base', '4x gtceu:glass_plate', '2x gtceu:steel_plate')
        .itemOutputs('sophisticatedbackpacks:tank_upgrade')
        .duration(10 * 20)
        .EUt(GTValues.VA[GTValues.LV])

    // battery, void, magnet push into MV
    event.recipes.gtceu.assembler('sb_battery_upgrade')
        .itemInputs('sophisticatedbackpacks:upgrade_base', '2x gtceu:aluminium_plate', 'gtceu:mv_field_generator', '#gtceu:circuits/mv')
        .inputFluids(Fluid.of('gtceu:soldering_alloy', 72))
        .itemOutputs('sophisticatedbackpacks:battery_upgrade')
        .duration(12 * 20)
        .EUt(GTValues.VA[GTValues.MV])

    event.recipes.gtceu.assembler('sb_void_upgrade')
        .itemInputs('sophisticatedbackpacks:upgrade_base', '4x minecraft:obsidian', '2x minecraft:ender_pearl', 'gtceu:mv_emitter', '#gtceu:circuits/mv')
        .inputFluids(Fluid.of('gtceu:soldering_alloy', 72))
        .itemOutputs('sophisticatedbackpacks:void_upgrade')
        .duration(12 * 20)
        .EUt(GTValues.VA[GTValues.MV])

    event.recipes.gtceu.assembler('sb_magnet_upgrade')
        .itemInputs('sophisticatedbackpacks:pickup_upgrade', '2x gtceu:magnetic_steel_rod', 'gtceu:mv_electric_motor', '#gtceu:circuits/mv')
        .inputFluids(Fluid.of('gtceu:lubricant', 100))
        .itemOutputs('sophisticatedbackpacks:magnet_upgrade')
        .duration(12 * 20)
        .EUt(GTValues.VA[GTValues.MV])

    event.recipes.gtceu.assembler('sb_deposit_upgrade')
        .itemInputs('sophisticatedbackpacks:upgrade_base', 'gtceu:lv_conveyor_module', '2x gtceu:steel_ingot', 'minecraft:chest', 'minecraft:redstone')
        .itemOutputs('sophisticatedbackpacks:deposit_upgrade')
        .duration(10 * 20)
        .EUt(GTValues.VA[GTValues.LV])

    event.recipes.gtceu.assembler('sb_restock_upgrade')
        .itemInputs('sophisticatedbackpacks:upgrade_base', 'gtceu:lv_conveyor_module', '2x gtceu:steel_ingot', 'minecraft:chest', 'gtceu:lv_electric_piston')
        .itemOutputs('sophisticatedbackpacks:restock_upgrade')
        .duration(10 * 20)
        .EUt(GTValues.VA[GTValues.LV])

    event.recipes.gtceu.assembler('sb_refill_upgrade')
        .itemInputs('sophisticatedbackpacks:upgrade_base', 'minecraft:ender_pearl', '2x gtceu:steel_ingot', 'minecraft:chest', 'minecraft:redstone')
        .itemOutputs('sophisticatedbackpacks:refill_upgrade')
        .duration(10 * 20)
        .EUt(GTValues.VA[GTValues.LV])

    event.recipes.gtceu.assembler('sb_crafting_upgrade')
        .itemInputs('sophisticatedbackpacks:upgrade_base', 'minecraft:crafting_table', '2x gtceu:steel_ingot', 'minecraft:chest')
        .itemOutputs('sophisticatedbackpacks:crafting_upgrade')
        .duration(10 * 20)
        .EUt(GTValues.VA[GTValues.LV])

    event.recipes.gtceu.assembler('sb_compacting_upgrade')
        .itemInputs('sophisticatedbackpacks:upgrade_base', 'gtceu:lv_electric_piston', '2x gtceu:steel_plate', '2x minecraft:redstone')
        .itemOutputs('sophisticatedbackpacks:compacting_upgrade')
        .duration(10 * 20)
        .EUt(GTValues.VA[GTValues.LV])

    event.recipes.gtceu.assembler('sb_tool_swapper_upgrade')
        .itemInputs('sophisticatedbackpacks:upgrade_base', '2x gtceu:steel_rod', 'gtceu:lv_electric_piston', 'minecraft:redstone')
        .itemOutputs('sophisticatedbackpacks:tool_swapper_upgrade')
        .duration(10 * 20)
        .EUt(GTValues.VA[GTValues.LV])

    // inception and everlasting are EV-tier (nether star + end materials)
    event.recipes.gtceu.assembler('sb_inception_upgrade')
        .itemInputs('sophisticatedbackpacks:upgrade_base', '4x minecraft:ender_eye', '2x minecraft:nether_star', '4x gtceu:titanium_plate', '#gtceu:circuits/ev')
        .inputFluids(Fluid.of('gtceu:soldering_alloy', 144))
        .itemOutputs('sophisticatedbackpacks:inception_upgrade')
        .duration(20 * 20)
        .EUt(GTValues.VA[GTValues.EV])

    event.recipes.gtceu.assembler('sb_everlasting_upgrade')
        .itemInputs('sophisticatedbackpacks:upgrade_base', '4x minecraft:end_crystal', '2x minecraft:nether_star', 'gtceu:ev_field_generator', '2x #gtceu:circuits/ev')
        .inputFluids(Fluid.of('gtceu:soldering_alloy', 144))
        .itemOutputs('sophisticatedbackpacks:everlasting_upgrade')
        .duration(20 * 20)
        .EUt(GTValues.VA[GTValues.EV])

    // advanced upgrades (HV)
    event.recipes.gtceu.assembler('sb_advanced_pickup_upgrade')
        .itemInputs('sophisticatedbackpacks:pickup_upgrade', '2x gtceu:stainless_steel_plate', '2x gtceu:aluminium_plate', '2x minecraft:redstone', '#gtceu:circuits/hv')
        .inputFluids(Fluid.of('gtceu:soldering_alloy', 72))
        .itemOutputs('sophisticatedbackpacks:advanced_pickup_upgrade')
        .duration(15 * 20)
        .EUt(GTValues.VA[GTValues.HV])

    event.recipes.gtceu.assembler('sb_advanced_filter_upgrade')
        .itemInputs('sophisticatedbackpacks:filter_upgrade', '2x gtceu:aluminium_plate', '2x minecraft:redstone', '#gtceu:circuits/hv')
        .inputFluids(Fluid.of('gtceu:soldering_alloy', 72))
        .itemOutputs('sophisticatedbackpacks:advanced_filter_upgrade')
        .duration(15 * 20)
        .EUt(GTValues.VA[GTValues.HV])

    event.recipes.gtceu.assembler('sb_advanced_feeding_upgrade')
        .itemInputs('sophisticatedbackpacks:feeding_upgrade', '2x gtceu:stainless_steel_plate', '2x gtceu:aluminium_plate', '2x minecraft:redstone', '#gtceu:circuits/hv')
        .inputFluids(Fluid.of('gtceu:soldering_alloy', 72))
        .itemOutputs('sophisticatedbackpacks:advanced_feeding_upgrade')
        .duration(15 * 20)
        .EUt(GTValues.VA[GTValues.HV])

    event.recipes.gtceu.assembler('sb_advanced_void_upgrade')
        .itemInputs('sophisticatedbackpacks:void_upgrade', '2x gtceu:stainless_steel_plate', '2x gtceu:aluminium_plate', '2x minecraft:redstone', '#gtceu:circuits/hv')
        .inputFluids(Fluid.of('gtceu:soldering_alloy', 72))
        .itemOutputs('sophisticatedbackpacks:advanced_void_upgrade')
        .duration(15 * 20)
        .EUt(GTValues.VA[GTValues.HV])

    event.recipes.gtceu.assembler('sb_advanced_magnet_upgrade')
        .itemInputs('sophisticatedbackpacks:advanced_pickup_upgrade', '2x gtceu:magnetic_neodymium_rod', 'gtceu:hv_electric_motor', '#gtceu:circuits/hv')
        .inputFluids(Fluid.of('gtceu:lubricant', 100))
        .itemOutputs('sophisticatedbackpacks:advanced_magnet_upgrade')
        .duration(15 * 20)
        .EUt(GTValues.VA[GTValues.HV])

    event.recipes.gtceu.assembler('sb_advanced_compacting_upgrade')
        .itemInputs('sophisticatedbackpacks:compacting_upgrade', '2x gtceu:stainless_steel_plate', '2x gtceu:aluminium_plate', '2x minecraft:redstone', '#gtceu:circuits/hv')
        .inputFluids(Fluid.of('gtceu:soldering_alloy', 72))
        .itemOutputs('sophisticatedbackpacks:advanced_compacting_upgrade')
        .duration(15 * 20)
        .EUt(GTValues.VA[GTValues.HV])

    event.recipes.gtceu.assembler('sb_advanced_deposit_upgrade')
        .itemInputs('sophisticatedbackpacks:deposit_upgrade', '2x gtceu:stainless_steel_plate', '2x gtceu:aluminium_plate', '2x minecraft:redstone', '#gtceu:circuits/hv')
        .inputFluids(Fluid.of('gtceu:soldering_alloy', 72))
        .itemOutputs('sophisticatedbackpacks:advanced_deposit_upgrade')
        .duration(15 * 20)
        .EUt(GTValues.VA[GTValues.HV])

    event.recipes.gtceu.assembler('sb_advanced_restock_upgrade')
        .itemInputs('sophisticatedbackpacks:restock_upgrade', '2x gtceu:stainless_steel_plate', '2x gtceu:aluminium_plate', '2x minecraft:redstone', '#gtceu:circuits/hv')
        .inputFluids(Fluid.of('gtceu:soldering_alloy', 72))
        .itemOutputs('sophisticatedbackpacks:advanced_restock_upgrade')
        .duration(15 * 20)
        .EUt(GTValues.VA[GTValues.HV])

    event.recipes.gtceu.assembler('sb_advanced_refill_upgrade')
        .itemInputs('sophisticatedbackpacks:refill_upgrade', '2x gtceu:stainless_steel_plate', '2x gtceu:aluminium_plate', '2x minecraft:ender_pearl', '#gtceu:circuits/hv')
        .inputFluids(Fluid.of('gtceu:soldering_alloy', 72))
        .itemOutputs('sophisticatedbackpacks:advanced_refill_upgrade')
        .duration(15 * 20)
        .EUt(GTValues.VA[GTValues.HV])

    event.recipes.gtceu.assembler('sb_advanced_tool_swapper_upgrade')
        .itemInputs('sophisticatedbackpacks:tool_swapper_upgrade', '2x gtceu:stainless_steel_plate', '2x gtceu:aluminium_plate', '2x minecraft:redstone', '#gtceu:circuits/hv')
        .inputFluids(Fluid.of('gtceu:soldering_alloy', 72))
        .itemOutputs('sophisticatedbackpacks:advanced_tool_swapper_upgrade')
        .duration(15 * 20)
        .EUt(GTValues.VA[GTValues.HV])

    event.recipes.gtceu.assembler('sb_auto_smelting_upgrade')
        .itemInputs('sophisticatedbackpacks:smelting_upgrade', '2x gtceu:stainless_steel_plate', '2x gtceu:aluminium_plate', '2x gtceu:lv_conveyor_module', '2x minecraft:redstone', '#gtceu:circuits/hv')
        .inputFluids(Fluid.of('gtceu:soldering_alloy', 72))
        .itemOutputs('sophisticatedbackpacks:auto_smelting_upgrade')
        .duration(15 * 20)
        .EUt(GTValues.VA[GTValues.HV])

})
