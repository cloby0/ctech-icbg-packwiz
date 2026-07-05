ServerEvents.recipes(event => {

    event.remove({ output: 'scannable:scanner' })
    event.remove({ output: 'scannable:blank_module' })
    event.remove({ output: 'scannable:block_module' })
    event.remove({ output: 'scannable:common_ores_module' })
    event.remove({ output: 'scannable:rare_ores_module' })
    event.remove({ output: 'scannable:entity_module' })
    event.remove({ output: 'scannable:friendly_entity_module' })
    event.remove({ output: 'scannable:hostile_entity_module' })
    event.remove({ output: 'scannable:fluid_module' })
    event.remove({ output: 'scannable:range_module' })
    event.remove({ output: 'scannable:chest_module' })

    event.remove({ output: 'computercraft:cable' })
    event.remove({ output: 'computercraft:wired_modem' })
    event.remove({ output: 'computercraft:computer_normal' })
    event.remove({ output: 'computercraft:computer_advanced' })
    event.remove({ output: 'computercraft:monitor_normal' })
    event.remove({ output: 'computercraft:monitor_advanced' })
    event.remove({ output: 'computercraft:turtle_normal' })
    event.remove({ output: 'computercraft:turtle_advanced' })
    event.remove({ output: 'computercraft:disk_drive' })
    event.remove({ output: 'computercraft:speaker' })
    event.remove({ output: 'computercraft:printer' })
    event.remove({ output: 'computercraft:wireless_modem_normal' })
    event.remove({ output: 'computercraft:wireless_modem_advanced' })
    event.remove({ output: 'computercraft:pocket_computer_normal' })
    event.remove({ output: 'computercraft:pocket_computer_advanced' })
    event.remove({ output: 'computercraft:disk' })

    event.remove({ output: 'advancedperipherals:peripheral_casing' })
    event.remove({ output: 'advancedperipherals:energy_detector' })
    event.remove({ output: 'advancedperipherals:environment_detector' })
    event.remove({ output: 'advancedperipherals:player_detector' })
    event.remove({ output: 'advancedperipherals:redstone_integrator' })
    event.remove({ output: 'advancedperipherals:chat_box' })
    event.remove({ output: 'advancedperipherals:inventory_manager' })
    event.remove({ output: 'advancedperipherals:block_reader' })
    event.remove({ output: 'advancedperipherals:nbt_storage' })
    event.remove({ output: 'advancedperipherals:memory_card' })
    event.remove({ output: 'advancedperipherals:geo_scanner' })
    event.remove({ output: 'advancedperipherals:weak_automata_core' })
    event.remove({ output: 'advancedperipherals:me_bridge' })
    event.remove({ output: 'advancedperipherals:chunk_controller' })
    event.remove({ output: 'advancedperipherals:computer_tool' })
    event.remove({ output: 'advancedperipherals:colony_integrator' })
    event.remove({ output: 'advancedperipherals:rs_bridge' })
    event.remove({ output: 'advancedperipherals:husbandry_automata_core' })
    event.remove({ output: 'advancedperipherals:end_automata_core' })
    event.remove({ output: 'advancedperipherals:overpowered_husbandry_automata_core' })
    event.remove({ output: 'advancedperipherals:overpowered_end_automata_core' })
    event.remove({ output: 'advancedperipherals:overpowered_weak_automata_core' })

    event.remove({ output: 'cclink:link_core' })
    event.remove({ output: 'cclink:link_interface' })
    event.remove({ output: 'cclink:link_key' })
    event.remove({ output: 'cclink:link_turtle_advanced' })
    event.remove({ output: 'cclink:integrated_link_core' })
    event.remove({ output: 'cclink:scanner_upgrade' })
    event.remove({ output: 'cclink:sensor_upgrade' })
    event.remove({ output: 'cclink:kinetic_upgrade' })
    event.remove({ output: 'cclink:chatty_upgrade' })
    event.remove({ output: 'cclink:overlay_upgrade' })
    event.remove({ output: 'cclink:introspection_upgrade' })
    event.remove({ output: 'cclink:world_upgrade' })

    event.remove({ output: 'vista:television' })
    event.remove({ output: 'vista:viewfinder' })
    event.remove({ output: 'vista:hollow_cassette' })

    event.remove({ output: 'etched:etching_table' })
    event.remove({ output: 'etched:radio' })
    event.remove({ output: 'etched:boombox' })
    event.remove({ output: 'etched:album_jukebox' })
    event.remove({ output: 'etched:blank_music_disc' })

    event.recipes.gtceu.wiremill('cc_cable')
        .itemInputs('4x gtceu:copper_single_cable')
        .itemOutputs('computercraft:cable')
        .duration(4 * 20)
        .EUt(GTValues.VA[GTValues.MV])

    event.recipes.gtceu.assembler('cc_wired_modem')
        .itemInputs('#gtceu:circuits/mv', 'computercraft:cable', 'gtceu:aluminium_plate')
        .itemOutputs('1x computercraft:wired_modem')
        .duration(10 * 20)
        .EUt(GTValues.VA[GTValues.MV])

    event.recipes.gtceu.assembler('cc_computer_normal')
        .itemInputs('gtceu:mv_machine_hull', 'gtceu:computer_monitor_cover', '4x gtceu:copper_single_cable', '4x #gtceu:circuits/mv')
        .inputFluids(Fluid.of('gtceu:soldering_alloy', 144))
        .itemOutputs('1x computercraft:computer_normal')
        .duration(20 * 20)
        .EUt(GTValues.VA[GTValues.MV])

    event.recipes.gtceu.assembler('cc_monitor_normal')
        .itemInputs('gtceu:mv_machine_hull', '2x gtceu:computer_monitor_cover', '4x gtceu:copper_single_cable', '2x #forge:glass')
        .inputFluids(Fluid.of('gtceu:soldering_alloy', 72))
        .itemOutputs('1x computercraft:monitor_normal')
        .duration(15 * 20)
        .EUt(GTValues.VA[GTValues.MV])

    event.recipes.gtceu.assembler('cc_disk_drive')
        .itemInputs('gtceu:mv_machine_hull', '2x gtceu:magnetic_steel_rod', 'gtceu:mv_electric_motor', 'gtceu:mv_voltage_coil', '2x #gtceu:circuits/mv', '2x gtceu:copper_single_cable')
        .inputFluids(Fluid.of('gtceu:soldering_alloy', 72))
        .itemOutputs('1x computercraft:disk_drive')
        .duration(15 * 20)
        .EUt(GTValues.VA[GTValues.MV])

    event.recipes.gtceu.assembler('cc_speaker')
        .itemInputs('gtceu:mv_machine_hull', 'gtceu:mv_electric_motor', 'gtceu:mv_emitter', '4x gtceu:copper_single_cable', '2x #gtceu:circuits/mv')
        .inputFluids(Fluid.of('gtceu:soldering_alloy', 72))
        .itemOutputs('1x computercraft:speaker')
        .duration(10 * 20)
        .EUt(GTValues.VA[GTValues.MV])

    event.recipes.gtceu.assembler('cc_pocket_computer_normal')
        .itemInputs('computercraft:computer_normal', '2x #gtceu:circuits/mv', '#gtceu:batteries/mv')
        .itemOutputs('1x computercraft:pocket_computer_normal')
        .duration(15 * 20)
        .EUt(GTValues.VA[GTValues.MV])

    event.recipes.gtceu.assembler('cc_computer_advanced')
        .itemInputs('gtceu:hv_machine_hull', 'gtceu:computer_monitor_cover', '4x gtceu:gold_single_cable', '4x #gtceu:circuits/hv')
        .inputFluids(Fluid.of('gtceu:soldering_alloy', 288))
        .itemOutputs('1x computercraft:computer_advanced')
        .duration(20 * 20)
        .EUt(GTValues.VA[GTValues.HV])

    event.recipes.gtceu.assembler('cc_monitor_advanced')
        .itemInputs('gtceu:hv_machine_hull', '2x gtceu:computer_monitor_cover', '4x gtceu:gold_single_cable', '2x #forge:glass')
        .inputFluids(Fluid.of('gtceu:soldering_alloy', 144))
        .itemOutputs('4x computercraft:monitor_advanced')
        .duration(15 * 20)
        .EUt(GTValues.VA[GTValues.HV])

    event.recipes.gtceu.assembler('cc_printer')
        .itemInputs('gtceu:hv_machine_hull', 'gtceu:hv_conveyor_module', 'gtceu:hv_robot_arm', '2x gtceu:hv_electric_motor', '2x gtceu:gold_single_cable', '2x #gtceu:circuits/hv')
        .inputFluids(Fluid.of('gtceu:soldering_alloy', 144))
        .itemOutputs('1x computercraft:printer')
        .duration(15 * 20)
        .EUt(GTValues.VA[GTValues.HV])

    event.recipes.gtceu.assembler('cc_pocket_computer_advanced')
        .itemInputs('computercraft:computer_advanced', '2x #gtceu:circuits/hv', '#gtceu:batteries/hv')
        .itemOutputs('1x computercraft:pocket_computer_advanced')
        .duration(15 * 20)
        .EUt(GTValues.VA[GTValues.HV])

    event.recipes.gtceu.assembler('cc_turtle_normal')
        .itemInputs(
            '1x computercraft:computer_normal',
            '4x create:iron_sheet',
            '1x gtceu:mv_electric_motor',
            '1x gtceu:mv_robot_arm'
        )
        .inputFluids(Fluid.of('gtceu:soldering_alloy', 288))
        .itemOutputs('1x computercraft:turtle_normal')
        .duration(30 * 20)
        .EUt(GTValues.VA[GTValues.HV])

    event.recipes.gtceu.assembler('cc_turtle_advanced')
        .itemInputs(
            '1x computercraft:computer_advanced',
            '4x create:golden_sheet',
            '1x gtceu:hv_electric_motor',
            '1x gtceu:hv_robot_arm'
        )
        .inputFluids(Fluid.of('gtceu:soldering_alloy', 576))
        .itemOutputs('1x computercraft:turtle_advanced')
        .duration(30 * 20)
        .EUt(GTValues.VA[GTValues.HV])

    event.recipes.gtceu.assembler('cc_wireless_modem_normal')
        .itemInputs('computercraft:wired_modem', 'gtceu:hv_emitter', 'gtceu:hv_sensor', '#gtceu:circuits/hv', '2x gtceu:gold_single_cable')
        .itemOutputs('1x computercraft:wireless_modem_normal')
        .duration(20 * 20)
        .EUt(GTValues.VA[GTValues.HV])

    event.recipes.gtceu.assembler('cc_wireless_modem_advanced')
        .itemInputs('computercraft:wired_modem', 'gtceu:ev_emitter', 'gtceu:ev_sensor', '#gtceu:circuits/ev', '2x gtceu:aluminium_single_cable', '2x gtceu:ender_pearl_dust')
        .itemOutputs('1x computercraft:wireless_modem_advanced')
        .duration(20 * 20)
        .EUt(GTValues.VA[GTValues.EV])

    event.recipes.gtceu.forming_press('cc_disk')
        .itemInputs('2x gtceu:polyethylene_plate', 'gtceu:invar_plate')
        .itemOutputs(Item.of('computercraft:disk').withNBT({Color: 1118481}))
        .duration(10 * 20)
        .EUt(GTValues.VA[GTValues.MV])

    event.recipes.gtceu.assembler('ap_environment_detector')
        .itemInputs('gtceu:mv_machine_hull', 'gtceu:mv_sensor', 'minecraft:daylight_detector', '2x #gtceu:circuits/mv', 'computercraft:cable')
        .inputFluids(Fluid.of('gtceu:soldering_alloy', 72))
        .itemOutputs('1x advancedperipherals:environment_detector')
        .duration(15 * 20)
        .EUt(GTValues.VA[GTValues.MV])

    event.recipes.gtceu.assembler('ap_redstone_integrator')
        .itemInputs('gtceu:mv_machine_hull', '4x minecraft:redstone', 'minecraft:redstone_block', '2x #gtceu:circuits/mv', 'computercraft:cable')
        .inputFluids(Fluid.of('gtceu:soldering_alloy', 72))
        .itemOutputs('1x advancedperipherals:redstone_integrator')
        .duration(10 * 20)
        .EUt(GTValues.VA[GTValues.MV])

    event.recipes.gtceu.assembler('ap_chat_box')
        .itemInputs('gtceu:mv_machine_hull', 'gtceu:mv_emitter', 'gtceu:mv_sensor', '2x minecraft:paper', '2x #gtceu:circuits/mv', 'computercraft:cable')
        .inputFluids(Fluid.of('gtceu:soldering_alloy', 72))
        .itemOutputs('1x advancedperipherals:chat_box')
        .duration(15 * 20)
        .EUt(GTValues.VA[GTValues.MV])

    event.recipes.gtceu.assembler('ap_energy_detector')
        .itemInputs('gtceu:mv_diode', '#gtceu:circuits/mv')
        .itemOutputs('1x advancedperipherals:energy_detector')
        .duration(15 * 20)
        .EUt(GTValues.VA[GTValues.MV])

    event.recipes.gtceu.assembler('ap_memory_card')
        .itemInputs('4x gtceu:ram_chip', 'gtceu:quantum_eye', '2x #gtceu:circuits/hv', '2x computercraft:cable')
        .inputFluids(Fluid.of('gtceu:soldering_alloy', 144))
        .itemOutputs('1x advancedperipherals:memory_card')
        .duration(10 * 20)
        .EUt(GTValues.VA[GTValues.HV])

    event.recipes.gtceu.assembler('ap_player_detector')
        .itemInputs('gtceu:hv_machine_hull', 'gtceu:hv_sensor', '2x minecraft:stone_button', '2x #gtceu:circuits/hv', 'computercraft:cable')
        .inputFluids(Fluid.of('gtceu:soldering_alloy', 144))
        .itemOutputs('1x advancedperipherals:player_detector')
        .duration(20 * 20)
        .EUt(GTValues.VA[GTValues.HV])

    event.recipes.gtceu.assembler('ap_inventory_manager')
        .itemInputs('gtceu:hv_machine_hull', '3x gtceu:quantum_eye', '3x #gtceu:circuits/hv', '2x computercraft:cable')
        .inputFluids(Fluid.of('gtceu:soldering_alloy', 144))
        .itemOutputs('1x advancedperipherals:inventory_manager')
        .duration(25 * 20)
        .EUt(GTValues.VA[GTValues.HV])

    event.recipes.gtceu.assembler('ap_block_reader')
        .itemInputs('gtceu:mv_machine_hull', '2x gtceu:diode', 'gtceu:mv_sensor', '3x #gtceu:circuits/mv', '2x computercraft:cable')
        .inputFluids(Fluid.of('gtceu:soldering_alloy', 144))
        .itemOutputs('1x advancedperipherals:block_reader')
        .duration(20 * 20)
        .EUt(GTValues.VA[GTValues.MV])

    event.recipes.gtceu.assembler('ap_nbt_storage')
        .itemInputs('gtceu:mv_machine_hull', 'computercraft:disk')
        .itemOutputs('1x advancedperipherals:nbt_storage')
        .duration(10 * 20)
        .EUt(GTValues.VA[GTValues.MV])

    event.recipes.gtceu.assembler('ap_chunk_controller')
        .itemInputs(
            '2x gtceu:steel_plate',
            '1x minecraft:ender_eye',
            '1x #gtceu:circuits/hv'
        )
        .inputFluids(Fluid.of('gtceu:soldering_alloy', 144))
        .itemOutputs('1x advancedperipherals:chunk_controller')
        .duration(20 * 20)
        .EUt(GTValues.VA[GTValues.HV])

    event.recipes.gtceu.assembler('ap_weak_automata_core')
        .itemInputs(
            'gtceu:hv_machine_hull',
            '2x gtceu:hv_emitter',
            '1x minecraft:soul_lantern',
            '1x #gtceu:circuits/hv'
        )
        .inputFluids(Fluid.of('gtceu:soldering_alloy', 288))
        .itemOutputs('1x advancedperipherals:weak_automata_core')
        .duration(30 * 20)
        .EUt(GTValues.VA[GTValues.HV])

    event.recipes.gtceu.assembler('ap_geo_scanner')
        .itemInputs('gtceu:mv_machine_hull', '2x gtceu:mv_sensor', 'gtceu:mv_emitter', '3x #gtceu:circuits/mv', '2x computercraft:cable')
        .inputFluids(Fluid.of('gtceu:soldering_alloy', 144))
        .itemOutputs('1x advancedperipherals:geo_scanner')
        .duration(30 * 20)
        .EUt(GTValues.VA[GTValues.MV])

    event.recipes.gtceu.assembler('ap_me_bridge')
        .itemInputs('gtceu:hv_machine_hull', '3x ae2:fluix_glass_cable', 'gtceu:hv_robot_arm', '2x #gtceu:circuits/hv', '2x computercraft:cable')
        .inputFluids(Fluid.of('gtceu:soldering_alloy', 144))
        .itemOutputs('1x advancedperipherals:me_bridge')
        .duration(30 * 20)
        .EUt(GTValues.VA[GTValues.HV])

    event.recipes.gtceu.assembler('vista_cassette')
        .itemInputs(
            '2x gtceu:polyethylene_plate',
            '2x gtceu:tin_rod',
            '1x gtceu:chromium_dust'
        )
        .itemOutputs('2x vista:cassette')
        .duration(10 * 20)
        .EUt(GTValues.VA[GTValues.MV])

    event.recipes.gtceu.assembler('vista_viewfinder')
        .itemInputs(
            '2x gtceu:aluminium_plate',
            '1x gtceu:glass_lens',
            '1x gtceu:mv_sensor',
            '1x #gtceu:circuits/mv'
        )
        .inputFluids(Fluid.of('gtceu:soldering_alloy', 144))
        .itemOutputs('1x vista:viewfinder')
        .duration(20 * 20)
        .EUt(GTValues.VA[GTValues.MV])

    event.recipes.gtceu.assembler('vista_hollow_cassette')
        .itemInputs(
            '1x vista:cassette',
            '1x minecraft:echo_shard',
            '1x gtceu:mv_emitter',
            '1x gtceu:mv_sensor'
        )
        .inputFluids(Fluid.of('gtceu:soldering_alloy', 72))
        .itemOutputs('1x vista:hollow_cassette')
        .duration(15 * 20)
        .EUt(GTValues.VA[GTValues.MV])

    event.recipes.gtceu.assembler('vista_television')
        .itemInputs(
            '4x gtceu:aluminium_plate',
            '2x gtceu:glass_plate',
            '1x gtceu:hv_emitter',
            '1x #gtceu:circuits/hv'
        )
        .inputFluids(Fluid.of('gtceu:soldering_alloy', 288))
        .itemOutputs('1x vista:television')
        .duration(25 * 20)
        .EUt(GTValues.VA[GTValues.HV])

    event.recipes.gtceu.forming_press('etched_blank_music_disc')
        .itemInputs('2x gtceu:polyvinyl_chloride_plate')
        .itemOutputs('4x etched:blank_music_disc')
        .duration(10 * 20)
        .EUt(GTValues.VA[GTValues.MV])

    event.recipes.gtceu.assembler('etched_etching_table')
        .itemInputs(
            '2x gtceu:steel_plate',
            '2x minecraft:diamond',
            '1x gtceu:mv_electric_motor',
            '1x #gtceu:circuits/mv'
        )
        .inputFluids(Fluid.of('gtceu:soldering_alloy', 72))
        .itemOutputs('1x etched:etching_table')
        .duration(20 * 20)
        .EUt(GTValues.VA[GTValues.MV])

    event.recipes.gtceu.assembler('etched_radio')
        .itemInputs(
            '2x gtceu:aluminium_plate',
            '4x gtceu:copper_single_wire',
            '1x gtceu:mv_emitter',
            '1x #gtceu:circuits/mv'
        )
        .inputFluids(Fluid.of('gtceu:soldering_alloy', 72))
        .itemOutputs('1x etched:radio')
        .duration(20 * 20)
        .EUt(GTValues.VA[GTValues.MV])

    event.recipes.gtceu.assembler('etched_boombox')
        .itemInputs(
            '4x gtceu:steel_plate',
            '1x gtceu:hv_electric_motor',
            '#gtceu:batteries/hv',
            '1x #gtceu:circuits/hv'
        )
        .inputFluids(Fluid.of('gtceu:soldering_alloy', 144))
        .itemOutputs('1x etched:boombox')
        .duration(25 * 20)
        .EUt(GTValues.VA[GTValues.HV])

    event.recipes.gtceu.assembler('etched_album_jukebox')
        .itemInputs(
            'gtceu:hv_machine_hull',
            'gtceu:hv_robot_arm',
            'gtceu:hv_conveyor_module',
            '2x #gtceu:circuits/hv'
        )
        .inputFluids(Fluid.of('gtceu:soldering_alloy', 288))
        .itemOutputs('1x etched:album_jukebox')
        .duration(30 * 20)
        .EUt(GTValues.VA[GTValues.HV])

    event.recipes.gtceu.assembler('scannable_scanner')
        .itemInputs(
            '2x gtceu:steel_plate',
            '1x gtceu:glass_lens',
            '1x gtceu:mv_sensor',
            '1x gtceu:mv_emitter',
            '1x #gtceu:circuits/mv'
        )
        .inputFluids(Fluid.of('gtceu:soldering_alloy', 144))
        .itemOutputs('1x scannable:scanner')
        .duration(20 * 20)
        .EUt(GTValues.VA[GTValues.MV])

    event.recipes.gtceu.assembler('scannable_blank_module')
        .itemInputs(
            '1x gtceu:aluminium_plate',
            '1x gtceu:red_alloy_plate',
            '4x gtceu:copper_single_wire'
        )
        .inputFluids(Fluid.of('gtceu:soldering_alloy', 72))
        .itemOutputs('2x scannable:blank_module')
        .duration(10 * 20)
        .EUt(GTValues.VA[GTValues.MV])

    event.recipes.gtceu.assembler('scannable_block_module')
        .itemInputs('1x scannable:blank_module', '1x minecraft:stone')
        .itemOutputs('1x scannable:block_module')
        .duration(5 * 20)
        .EUt(GTValues.VA[GTValues.MV])

    event.recipes.gtceu.assembler('scannable_common_ores_module')
        .itemInputs('1x scannable:blank_module', '1x gtceu:coal_dust')
        .itemOutputs('1x scannable:common_ores_module')
        .duration(5 * 20)
        .EUt(GTValues.VA[GTValues.MV])

    event.recipes.gtceu.assembler('scannable_rare_ores_module')
        .itemInputs('1x scannable:blank_module', '1x minecraft:diamond')
        .itemOutputs('1x scannable:rare_ores_module')
        .duration(5 * 20)
        .EUt(GTValues.VA[GTValues.MV])

    event.recipes.gtceu.assembler('scannable_entity_module')
        .itemInputs('1x scannable:blank_module', '1x minecraft:ender_pearl')
        .itemOutputs('1x scannable:entity_module')
        .duration(5 * 20)
        .EUt(GTValues.VA[GTValues.MV])

    event.recipes.gtceu.assembler('scannable_friendly_entity_module')
        .itemInputs('1x scannable:blank_module', '1x minecraft:wheat')
        .itemOutputs('1x scannable:friendly_entity_module')
        .duration(5 * 20)
        .EUt(GTValues.VA[GTValues.MV])

    event.recipes.gtceu.assembler('scannable_hostile_entity_module')
        .itemInputs('1x scannable:blank_module', '1x minecraft:gunpowder')
        .itemOutputs('1x scannable:hostile_entity_module')
        .duration(5 * 20)
        .EUt(GTValues.VA[GTValues.MV])

    event.recipes.gtceu.assembler('scannable_fluid_module')
        .itemInputs('1x scannable:blank_module', '1x minecraft:water_bucket')
        .itemOutputs('1x scannable:fluid_module')
        .duration(5 * 20)
        .EUt(GTValues.VA[GTValues.MV])

    event.recipes.gtceu.assembler('scannable_range_module')
        .itemInputs('1x scannable:blank_module', '1x gtceu:long_aluminium_rod')
        .itemOutputs('1x scannable:range_module')
        .duration(5 * 20)
        .EUt(GTValues.VA[GTValues.MV])

    event.recipes.gtceu.assembler('scannable_chest_module')
        .itemInputs('1x scannable:blank_module', '1x minecraft:chest')
        .itemOutputs('1x scannable:chest_module')
        .duration(5 * 20)
        .EUt(GTValues.VA[GTValues.MV])

    event.recipes.gtceu.assembler('cclink_link_plating')
        .itemInputs('4x gtceu:electrum_plate', '4x gtceu:copper_single_wire')
        .inputFluids(Fluid.of('gtceu:soldering_alloy', 144))
        .itemOutputs('4x cclink:link_plating')
        .duration(10 * 20)
        .EUt(GTValues.VA[GTValues.HV])

    event.recipes.gtceu.assembler('cclink_link_power_core')
        .itemInputs('#gtceu:batteries/hv', '2x #gtceu:circuits/hv', '2x cclink:link_plating')
        .inputFluids(Fluid.of('gtceu:soldering_alloy', 144))
        .itemOutputs('1x cclink:link_power_core')
        .duration(15 * 20)
        .EUt(GTValues.VA[GTValues.HV])

    event.recipes.gtceu.assembler('cclink_link_core')
        .itemInputs('computercraft:computer_advanced', 'cclink:link_power_core', '4x cclink:link_plating', '2x #gtceu:circuits/hv')
        .inputFluids(Fluid.of('gtceu:soldering_alloy', 288))
        .itemOutputs('1x cclink:link_core')
        .duration(20 * 20)
        .EUt(GTValues.VA[GTValues.HV])

    event.recipes.gtceu.assembler('cclink_link_interface')
        .itemInputs('cclink:link_core', '4x gtceu:rubber_plate', '2x gtceu:glass_plate', '2x cclink:link_plating', '#gtceu:circuits/hv')
        .inputFluids(Fluid.of('gtceu:soldering_alloy', 144))
        .itemOutputs('1x cclink:link_interface')
        .duration(20 * 20)
        .EUt(GTValues.VA[GTValues.HV])

    event.recipes.gtceu.assembler('cclink_link_key')
        .itemInputs('gtceu:hv_emitter', 'gtceu:hv_sensor', 'cclink:link_plating', '#gtceu:circuits/hv')
        .itemOutputs('1x cclink:link_key')
        .duration(10 * 20)
        .EUt(GTValues.VA[GTValues.HV])

    event.recipes.gtceu.assembler('cclink_link_turtle_advanced')
        .itemInputs('computercraft:turtle_advanced', 'cclink:link_core', 'gtceu:ev_emitter', 'gtceu:ev_robot_arm', '2x gtceu:aluminium_single_cable')
        .inputFluids(Fluid.of('gtceu:soldering_alloy', 288))
        .itemOutputs('1x cclink:link_turtle_advanced')
        .duration(30 * 20)
        .EUt(GTValues.VA[GTValues.EV])

    event.recipes.gtceu.assembler('cclink_integrated_link_core')
        .itemInputs('cclink:link_core', '2x cclink:link_power_core', '4x #gtceu:circuits/ev', 'computercraft:speaker')
        .inputFluids(Fluid.of('gtceu:soldering_alloy', 576))
        .itemOutputs('1x cclink:integrated_link_core')
        .duration(30 * 20)
        .EUt(GTValues.VA[GTValues.EV])

    event.recipes.gtceu.assembler('cclink_scanner_upgrade')
        .itemInputs('gtceu:hv_sensor', '2x gtceu:steel_plate', '#gtceu:circuits/mv', 'cclink:link_plating')
        .itemOutputs('1x cclink:scanner_upgrade')
        .duration(15 * 20)
        .EUt(GTValues.VA[GTValues.HV])

    event.recipes.gtceu.assembler('cclink_sensor_upgrade')
        .itemInputs('gtceu:hv_sensor', 'gtceu:hv_emitter', '2x gtceu:steel_plate', 'cclink:link_plating')
        .itemOutputs('1x cclink:sensor_upgrade')
        .duration(15 * 20)
        .EUt(GTValues.VA[GTValues.HV])

    event.recipes.gtceu.assembler('cclink_kinetic_upgrade')
        .itemInputs('gtceu:hv_electric_motor', '2x gtceu:steel_spring', '2x gtceu:steel_plate', '#gtceu:circuits/hv')
        .itemOutputs('1x cclink:kinetic_upgrade')
        .duration(20 * 20)
        .EUt(GTValues.VA[GTValues.HV])

    event.recipes.gtceu.assembler('cclink_chatty_upgrade')
        .itemInputs('computercraft:speaker', 'gtceu:hv_emitter', 'cclink:link_plating', '#gtceu:circuits/hv')
        .itemOutputs('1x cclink:chatty_upgrade')
        .duration(15 * 20)
        .EUt(GTValues.VA[GTValues.HV])

    event.recipes.gtceu.assembler('cclink_overlay_upgrade')
        .itemInputs('2x gtceu:glass_plate', 'gtceu:hv_sensor', '2x cclink:link_plating', '#gtceu:circuits/hv')
        .itemOutputs('1x cclink:overlay_upgrade')
        .duration(15 * 20)
        .EUt(GTValues.VA[GTValues.HV])

    event.recipes.gtceu.assembler('cclink_introspection_upgrade')
        .itemInputs('minecraft:ender_chest', '2x #gtceu:circuits/hv', '2x cclink:link_plating')
        .itemOutputs('1x cclink:introspection_upgrade')
        .duration(20 * 20)
        .EUt(GTValues.VA[GTValues.HV])

    event.recipes.gtceu.assembler('cclink_world_upgrade')
        .itemInputs('cclink:scanner_upgrade', 'cclink:sensor_upgrade', '2x #gtceu:circuits/hv', '2x cclink:link_plating')
        .itemOutputs('1x cclink:world_upgrade')
        .duration(25 * 20)
        .EUt(GTValues.VA[GTValues.HV])

    event.recipes.gtceu.assembler('cclink_laser_upgrade')
        .itemInputs('gtceu:ev_emitter', 'gtceu:glass_lens', '2x cclink:link_plating', '#gtceu:circuits/ev')
        .itemOutputs('1x cclink:laser_upgrade')
        .duration(20 * 20)
        .EUt(GTValues.VA[GTValues.EV])

    event.recipes.gtceu.assembler('cclink_battery_upgrade_tier1')
        .itemInputs('#gtceu:batteries/hv', '2x cclink:link_plating')
        .itemOutputs('1x cclink:battery_upgrade_tier1')
        .duration(10 * 20)
        .EUt(GTValues.VA[GTValues.HV])

    event.recipes.gtceu.assembler('cclink_battery_upgrade_tier2')
        .itemInputs('#gtceu:batteries/ev', '3x cclink:link_plating')
        .itemOutputs('1x cclink:battery_upgrade_tier2')
        .duration(15 * 20)
        .EUt(GTValues.VA[GTValues.EV])

    event.recipes.gtceu.assembler('cclink_battery_upgrade_tier3')
        .itemInputs('#gtceu:batteries/iv', '4x cclink:link_plating')
        .itemOutputs('1x cclink:battery_upgrade_tier3')
        .duration(20 * 20)
        .EUt(GTValues.VA[GTValues.IV])

    event.recipes.gtceu.assembler('cclink_shield_upgrade_tier1')
        .itemInputs('4x gtceu:steel_plate', '#gtceu:circuits/hv', '2x cclink:link_plating')
        .itemOutputs('1x cclink:shield_upgrade_tier1')
        .duration(15 * 20)
        .EUt(GTValues.VA[GTValues.HV])

    event.recipes.gtceu.assembler('cclink_shield_upgrade_tier2')
        .itemInputs('4x gtceu:titanium_plate', '#gtceu:circuits/ev', '3x cclink:link_plating')
        .itemOutputs('1x cclink:shield_upgrade_tier2')
        .duration(20 * 20)
        .EUt(GTValues.VA[GTValues.EV])

    event.recipes.gtceu.assembler('cclink_shield_upgrade_tier3')
        .itemInputs('4x gtceu:tungsten_steel_plate', '#gtceu:circuits/iv', '4x cclink:link_plating')
        .itemOutputs('1x cclink:shield_upgrade_tier3')
        .duration(25 * 20)
        .EUt(GTValues.VA[GTValues.IV])

    event.recipes.gtceu.assembler('cclink_shield_controller_upgrade')
        .itemInputs('gtceu:ev_sensor', '2x #gtceu:circuits/ev', '2x cclink:link_plating')
        .inputFluids(Fluid.of('gtceu:soldering_alloy', 144))
        .itemOutputs('1x cclink:shield_controller_upgrade')
        .duration(20 * 20)
        .EUt(GTValues.VA[GTValues.EV])

    event.recipes.gtceu.assembler('cclink_link_helmet')
        .itemInputs('4x cclink:link_plating', '2x gtceu:rubber_plate', '2x #gtceu:circuits/ev')
        .inputFluids(Fluid.of('gtceu:soldering_alloy', 144))
        .itemOutputs('1x cclink:link_helmet')
        .duration(20 * 20)
        .EUt(GTValues.VA[GTValues.EV])

    event.recipes.gtceu.assembler('cclink_link_chestplate')
        .itemInputs('8x cclink:link_plating', '4x gtceu:rubber_plate', '2x #gtceu:circuits/ev')
        .inputFluids(Fluid.of('gtceu:soldering_alloy', 288))
        .itemOutputs('1x cclink:link_chestplate')
        .duration(30 * 20)
        .EUt(GTValues.VA[GTValues.EV])

    event.recipes.gtceu.assembler('cclink_link_leggings')
        .itemInputs('6x cclink:link_plating', '3x gtceu:rubber_plate', '2x #gtceu:circuits/ev')
        .inputFluids(Fluid.of('gtceu:soldering_alloy', 216))
        .itemOutputs('1x cclink:link_leggings')
        .duration(25 * 20)
        .EUt(GTValues.VA[GTValues.EV])

    event.recipes.gtceu.assembler('cclink_link_boots')
        .itemInputs('4x cclink:link_plating', '2x gtceu:rubber_plate', '#gtceu:circuits/ev')
        .inputFluids(Fluid.of('gtceu:soldering_alloy', 144))
        .itemOutputs('1x cclink:link_boots')
        .duration(20 * 20)
        .EUt(GTValues.VA[GTValues.EV])

    event.recipes.gtceu.assembler('cclink_configurator_iron')
        .itemInputs('2x create:iron_sheet', 'gtceu:iron_rod', '#gtceu:circuits/mv')
        .itemOutputs('1x cclink:configurator_iron')
        .duration(10 * 20)
        .EUt(GTValues.VA[GTValues.MV])

    event.recipes.gtceu.assembler('cclink_configurator_gold')
        .itemInputs('2x create:golden_sheet', 'gtceu:gold_rod', '#gtceu:circuits/hv', 'cclink:link_plating')
        .itemOutputs('1x cclink:configurator_gold')
        .duration(15 * 20)
        .EUt(GTValues.VA[GTValues.HV])

    event.recipes.gtceu.assembler('cclink_configurator_diamond')
        .itemInputs('2x minecraft:diamond', 'gtceu:platinum_rod', '#gtceu:circuits/ev', 'cclink:link_plating')
        .itemOutputs('1x cclink:configurator_diamond')
        .duration(20 * 20)
        .EUt(GTValues.VA[GTValues.EV])

    event.recipes.gtceu.assembler('cclink_link_armor_manager')
        .itemInputs('2x #gtceu:circuits/ev', '2x cclink:link_plating', 'advancedperipherals:memory_card')
        .inputFluids(Fluid.of('gtceu:soldering_alloy', 144))
        .itemOutputs('1x cclink:link_armor_manager')
        .duration(20 * 20)
        .EUt(GTValues.VA[GTValues.EV])

    event.remove({ output: 'silentgear:blueprint_paper' })
    event.shaped(
        Item.of('silentgear:blueprint_paper', 4),
        [
            'PPP',
            'PPI'
        ],
        {
            P: 'minecraft:paper',
            I: 'gtceu:iron_dust'
        }
    )

})
