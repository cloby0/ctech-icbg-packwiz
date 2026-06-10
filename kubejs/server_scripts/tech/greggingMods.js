ServerEvents.recipes(event => {

    // removals

    // scannable
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

    // cc: tweaked
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

    // advanced peripherals
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

    // cc: link
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

    // vista
    event.remove({ output: 'vista:television' })
    event.remove({ output: 'vista:viewfinder' })
    event.remove({ output: 'vista:hollow_cassette' })

    // etched
    event.remove({ output: 'etched:etching_table' })
    event.remove({ output: 'etched:radio' })
    event.remove({ output: 'etched:boombox' })
    event.remove({ output: 'etched:album_jukebox' })
    event.remove({ output: 'etched:blank_music_disc' })

    // cc: tweaked

    // data cable: 4 copper cables compressed into CC networking cable
    event.recipes.gtceu.wiremill('cc_cable')
        .itemInputs('4x gtceu:copper_single_cable')
        .itemOutputs('computercraft:cable')
        .duration(4 * 20)
        .EUt(GTValues.VA[GTValues.MV])

    // wired modem: cable + MV circuit + aluminium plate
    event.recipes.gtceu.assembler('cc_wired_modem')
        .itemInputs('#gtceu:circuits/mv', 'computercraft:cable', 'gtceu:aluminium_plate')
        .itemOutputs('1x computercraft:wired_modem')
        .duration(10 * 20)
        .EUt(GTValues.VA[GTValues.MV])

    // basic computer: MV hull + monitor cover + copper cables + MV circuits
    event.recipes.gtceu.assembler('cc_computer_normal')
        .itemInputs('gtceu:mv_machine_hull', 'gtceu:computer_monitor_cover', '4x gtceu:copper_single_cable', '4x #gtceu:circuits/mv')
        .inputFluids(Fluid.of('gtceu:soldering_alloy', 144))
        .itemOutputs('1x computercraft:computer_normal')
        .duration(20 * 20)
        .EUt(GTValues.VA[GTValues.MV])

    // normal monitor: MV hull + monitor covers + copper cables + glass
    event.recipes.gtceu.assembler('cc_monitor_normal')
        .itemInputs('gtceu:mv_machine_hull', '2x gtceu:computer_monitor_cover', '4x gtceu:copper_single_cable', '2x #forge:glass')
        .inputFluids(Fluid.of('gtceu:soldering_alloy', 72))
        .itemOutputs('1x computercraft:monitor_normal')
        .duration(15 * 20)
        .EUt(GTValues.VA[GTValues.MV])

    // disk drive: MV hull + magnetic steel rods + motor + voltage coil + MV circuits
    event.recipes.gtceu.assembler('cc_disk_drive')
        .itemInputs('gtceu:mv_machine_hull', '2x gtceu:magnetic_steel_rod', 'gtceu:mv_electric_motor', 'gtceu:mv_voltage_coil', '2x #gtceu:circuits/mv', '2x gtceu:copper_single_cable')
        .inputFluids(Fluid.of('gtceu:soldering_alloy', 72))
        .itemOutputs('1x computercraft:disk_drive')
        .duration(15 * 20)
        .EUt(GTValues.VA[GTValues.MV])

    // speaker: MV hull + motor + emitter + copper cables + MV circuits
    event.recipes.gtceu.assembler('cc_speaker')
        .itemInputs('gtceu:mv_machine_hull', 'gtceu:mv_electric_motor', 'gtceu:mv_emitter', '4x gtceu:copper_single_cable', '2x #gtceu:circuits/mv')
        .inputFluids(Fluid.of('gtceu:soldering_alloy', 72))
        .itemOutputs('1x computercraft:speaker')
        .duration(10 * 20)
        .EUt(GTValues.VA[GTValues.MV])

    // pocket computer: basic computer + MV circuits + MV battery
    event.recipes.gtceu.assembler('cc_pocket_computer_normal')
        .itemInputs('computercraft:computer_normal', '2x #gtceu:circuits/mv', '#gtceu:batteries/mv')
        .itemOutputs('1x computercraft:pocket_computer_normal')
        .duration(15 * 20)
        .EUt(GTValues.VA[GTValues.MV])

    // advanced computer: HV hull + monitor cover + gold cables + HV circuits
    event.recipes.gtceu.assembler('cc_computer_advanced')
        .itemInputs('gtceu:hv_machine_hull', 'gtceu:computer_monitor_cover', '4x gtceu:gold_single_cable', '4x #gtceu:circuits/hv')
        .inputFluids(Fluid.of('gtceu:soldering_alloy', 288))
        .itemOutputs('1x computercraft:computer_advanced')
        .duration(20 * 20)
        .EUt(GTValues.VA[GTValues.HV])

    // advanced monitor: HV hull + monitor covers + gold cables + glass (4x output)
    event.recipes.gtceu.assembler('cc_monitor_advanced')
        .itemInputs('gtceu:hv_machine_hull', '2x gtceu:computer_monitor_cover', '4x gtceu:gold_single_cable', '2x #forge:glass')
        .inputFluids(Fluid.of('gtceu:soldering_alloy', 144))
        .itemOutputs('4x computercraft:monitor_advanced')
        .duration(15 * 20)
        .EUt(GTValues.VA[GTValues.HV])

    // printer: HV hull + conveyor + robot arm + HV motors + gold cables + HV circuits
    event.recipes.gtceu.assembler('cc_printer')
        .itemInputs('gtceu:hv_machine_hull', 'gtceu:hv_conveyor_module', 'gtceu:hv_robot_arm', '2x gtceu:hv_electric_motor', '2x gtceu:gold_single_cable', '2x #gtceu:circuits/hv')
        .inputFluids(Fluid.of('gtceu:soldering_alloy', 144))
        .itemOutputs('1x computercraft:printer')
        .duration(15 * 20)
        .EUt(GTValues.VA[GTValues.HV])

    // advanced pocket computer: advanced computer + HV circuits + HV battery
    event.recipes.gtceu.assembler('cc_pocket_computer_advanced')
        .itemInputs('computercraft:computer_advanced', '2x #gtceu:circuits/hv', '#gtceu:batteries/hv')
        .itemOutputs('1x computercraft:pocket_computer_advanced')
        .duration(15 * 20)
        .EUt(GTValues.VA[GTValues.HV])

    // turtle: MV computer + iron sheets + MV motor + MV robot arm
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

    // advanced turtle: HV computer + gold sheets + HV motor + HV robot arm
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

    // wireless modem: wired modem + HV emitter/sensor + HV circuit + gold cables
    event.recipes.gtceu.assembler('cc_wireless_modem_normal')
        .itemInputs('computercraft:wired_modem', 'gtceu:hv_emitter', 'gtceu:hv_sensor', '#gtceu:circuits/hv', '2x gtceu:gold_single_cable')
        .itemOutputs('1x computercraft:wireless_modem_normal')
        .duration(20 * 20)
        .EUt(GTValues.VA[GTValues.HV])

    // ender modem: wired modem + EV emitter/sensor + EV circuit + aluminium cables + ender dust
    event.recipes.gtceu.assembler('cc_wireless_modem_advanced')
        .itemInputs('computercraft:wired_modem', 'gtceu:ev_emitter', 'gtceu:ev_sensor', '#gtceu:circuits/ev', '2x gtceu:aluminium_single_cable', '2x gtceu:ender_pearl_dust')
        .itemOutputs('1x computercraft:wireless_modem_advanced')
        .duration(20 * 20)
        .EUt(GTValues.VA[GTValues.EV])

    // disk: polyethylene + invar plate pressed into floppy disk
    event.recipes.gtceu.forming_press('cc_disk')
        .itemInputs('2x gtceu:polyethylene_plate', 'gtceu:invar_plate')
        .itemOutputs(Item.of('computercraft:disk').withNBT({Color: 1118481}))
        .duration(10 * 20)
        .EUt(GTValues.VA[GTValues.MV])

    // advanced peripherals

    // environment_detector: MV hull + MV sensor + daylight detector + MV circuits + cable
    event.recipes.gtceu.assembler('ap_environment_detector')
        .itemInputs('gtceu:mv_machine_hull', 'gtceu:mv_sensor', 'minecraft:daylight_detector', '2x #gtceu:circuits/mv', 'computercraft:cable')
        .inputFluids(Fluid.of('gtceu:soldering_alloy', 72))
        .itemOutputs('1x advancedperipherals:environment_detector')
        .duration(15 * 20)
        .EUt(GTValues.VA[GTValues.MV])

    // redstone_integrator: MV hull + redstone + redstone block + MV circuits + cable
    event.recipes.gtceu.assembler('ap_redstone_integrator')
        .itemInputs('gtceu:mv_machine_hull', '4x minecraft:redstone', 'minecraft:redstone_block', '2x #gtceu:circuits/mv', 'computercraft:cable')
        .inputFluids(Fluid.of('gtceu:soldering_alloy', 72))
        .itemOutputs('1x advancedperipherals:redstone_integrator')
        .duration(10 * 20)
        .EUt(GTValues.VA[GTValues.MV])

    // chat_box: MV hull + MV emitter + MV sensor + paper + MV circuits + cable
    event.recipes.gtceu.assembler('ap_chat_box')
        .itemInputs('gtceu:mv_machine_hull', 'gtceu:mv_emitter', 'gtceu:mv_sensor', '2x minecraft:paper', '2x #gtceu:circuits/mv', 'computercraft:cable')
        .inputFluids(Fluid.of('gtceu:soldering_alloy', 72))
        .itemOutputs('1x advancedperipherals:chat_box')
        .duration(15 * 20)
        .EUt(GTValues.VA[GTValues.MV])

    // energy_detector: MV diode + MV circuit for EU measurement
    event.recipes.gtceu.assembler('ap_energy_detector')
        .itemInputs('gtceu:mv_diode', '#gtceu:circuits/mv')
        .itemOutputs('1x advancedperipherals:energy_detector')
        .duration(15 * 20)
        .EUt(GTValues.VA[GTValues.MV])

    // memory_card: RAM chips + quantum eye + HV circuits + cable
    event.recipes.gtceu.assembler('ap_memory_card')
        .itemInputs('4x gtceu:ram_chip', 'gtceu:quantum_eye', '2x #gtceu:circuits/hv', '2x computercraft:cable')
        .inputFluids(Fluid.of('gtceu:soldering_alloy', 144))
        .itemOutputs('1x advancedperipherals:memory_card')
        .duration(10 * 20)
        .EUt(GTValues.VA[GTValues.HV])

    // player_detector: HV hull + HV sensor + stone buttons + HV circuits + cable
    event.recipes.gtceu.assembler('ap_player_detector')
        .itemInputs('gtceu:hv_machine_hull', 'gtceu:hv_sensor', '2x minecraft:stone_button', '2x #gtceu:circuits/hv', 'computercraft:cable')
        .inputFluids(Fluid.of('gtceu:soldering_alloy', 144))
        .itemOutputs('1x advancedperipherals:player_detector')
        .duration(20 * 20)
        .EUt(GTValues.VA[GTValues.HV])

    // inventory_manager: HV hull + quantum eyes + HV circuits + cable
    event.recipes.gtceu.assembler('ap_inventory_manager')
        .itemInputs('gtceu:hv_machine_hull', '3x gtceu:quantum_eye', '3x #gtceu:circuits/hv', '2x computercraft:cable')
        .inputFluids(Fluid.of('gtceu:soldering_alloy', 144))
        .itemOutputs('1x advancedperipherals:inventory_manager')
        .duration(25 * 20)
        .EUt(GTValues.VA[GTValues.HV])

    // block_reader: MV hull + diodes + MV sensor + MV circuits + cable
    event.recipes.gtceu.assembler('ap_block_reader')
        .itemInputs('gtceu:mv_machine_hull', '2x gtceu:diode', 'gtceu:mv_sensor', '3x #gtceu:circuits/mv', '2x computercraft:cable')
        .inputFluids(Fluid.of('gtceu:soldering_alloy', 144))
        .itemOutputs('1x advancedperipherals:block_reader')
        .duration(20 * 20)
        .EUt(GTValues.VA[GTValues.MV])

    // nbt_storage: MV hull + disk for persistent NBT storage
    event.recipes.gtceu.assembler('ap_nbt_storage')
        .itemInputs('gtceu:mv_machine_hull', 'computercraft:disk')
        .itemOutputs('1x advancedperipherals:nbt_storage')
        .duration(10 * 20)
        .EUt(GTValues.VA[GTValues.MV])

    // chunk_controller: steel + ender eye for chunk loading (HV)
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

    // weak_automata_core: HV hull + HV emitters + soul lantern + HV circuit
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

    // geo_scanner: MV hull + MV sensors + MV emitter + MV circuits + cable
    event.recipes.gtceu.assembler('ap_geo_scanner')
        .itemInputs('gtceu:mv_machine_hull', '2x gtceu:mv_sensor', 'gtceu:mv_emitter', '3x #gtceu:circuits/mv', '2x computercraft:cable')
        .inputFluids(Fluid.of('gtceu:soldering_alloy', 144))
        .itemOutputs('1x advancedperipherals:geo_scanner')
        .duration(30 * 20)
        .EUt(GTValues.VA[GTValues.MV])

    // me_bridge: HV hull + fluix cables + HV robot arm + HV circuits + cable (requires AE2)
    event.recipes.gtceu.assembler('ap_me_bridge')
        .itemInputs('gtceu:hv_machine_hull', '3x ae2:fluix_glass_cable', 'gtceu:hv_robot_arm', '2x #gtceu:circuits/hv', '2x computercraft:cable')
        .inputFluids(Fluid.of('gtceu:soldering_alloy', 144))
        .itemOutputs('1x advancedperipherals:me_bridge')
        .duration(30 * 20)
        .EUt(GTValues.VA[GTValues.HV])

    // vista

    // cassette: polyethylene housing + tape film, CrO2 magnetic coating, tin reel axles (MV)
    // motor removed: that is in the deck, not the tape
    event.recipes.gtceu.assembler('vista_cassette')
        .itemInputs(
            '2x gtceu:polyethylene_plate',
            '2x gtceu:tin_rod',
            '1x gtceu:chromium_dust'
        )
        .itemOutputs('2x vista:cassette')
        .duration(10 * 20)
        .EUt(GTValues.VA[GTValues.MV])

    // viewfinder: aluminium frame + glass lens + sensor for photography (MV)
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

    // hollow_cassette: links viewfinder to TV for live camera feed
    // echo_shard kept: thematic for "echoing" the view wirelessly
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

    // television: aluminium chassis + glass plate display + HV emitter for broadcast + HV circuit
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

    // etched

    // blank_music_disc: PVC pressed into vinyl disc under heat (MV forming press)
    event.recipes.gtceu.forming_press('etched_blank_music_disc')
        .itemInputs('2x gtceu:polyvinyl_chloride_plate')
        .itemOutputs('4x etched:blank_music_disc')
        .duration(10 * 20)
        .EUt(GTValues.VA[GTValues.MV])

    // etching_table: diamond-tipped engraving head on steel frame, motor-driven (MV)
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

    // radio: aluminium chassis, copper antenna coil, MV emitter receiver, MV circuit (MV)
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

    // boombox: steel chassis, HV motor as speaker driver, HV battery, HV circuit (HV)
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

    // album_jukebox: HV hull, robot arm for disc selection, conveyor for disc feed, HV circuits (HV)
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

    // scannable

    // scanner: steel housing + glass lens + sensor/emitter pair + MV circuit
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

    // blank module: aluminium plate + red alloy substrate + copper wire connections (2 output)
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

    // block_module: program blank with stone (block detection)
    event.recipes.gtceu.assembler('scannable_block_module')
        .itemInputs('1x scannable:blank_module', '1x minecraft:stone')
        .itemOutputs('1x scannable:block_module')
        .duration(5 * 20)
        .EUt(GTValues.VA[GTValues.MV])

    // common_ores_module: program blank with coal dust (common ore signature)
    event.recipes.gtceu.assembler('scannable_common_ores_module')
        .itemInputs('1x scannable:blank_module', '1x gtceu:coal_dust')
        .itemOutputs('1x scannable:common_ores_module')
        .duration(5 * 20)
        .EUt(GTValues.VA[GTValues.MV])

    // rare_ores_module: program blank with diamond (rare ore signature)
    event.recipes.gtceu.assembler('scannable_rare_ores_module')
        .itemInputs('1x scannable:blank_module', '1x minecraft:diamond')
        .itemOutputs('1x scannable:rare_ores_module')
        .duration(5 * 20)
        .EUt(GTValues.VA[GTValues.MV])

    // entity_module: program blank with ender pearl (long-range entity detection)
    event.recipes.gtceu.assembler('scannable_entity_module')
        .itemInputs('1x scannable:blank_module', '1x minecraft:ender_pearl')
        .itemOutputs('1x scannable:entity_module')
        .duration(5 * 20)
        .EUt(GTValues.VA[GTValues.MV])

    // friendly_entity_module: program blank with wheat (passive mob lure material)
    event.recipes.gtceu.assembler('scannable_friendly_entity_module')
        .itemInputs('1x scannable:blank_module', '1x minecraft:wheat')
        .itemOutputs('1x scannable:friendly_entity_module')
        .duration(5 * 20)
        .EUt(GTValues.VA[GTValues.MV])

    // hostile_entity_module: program blank with gunpowder (aggressive mob signature)
    event.recipes.gtceu.assembler('scannable_hostile_entity_module')
        .itemInputs('1x scannable:blank_module', '1x minecraft:gunpowder')
        .itemOutputs('1x scannable:hostile_entity_module')
        .duration(5 * 20)
        .EUt(GTValues.VA[GTValues.MV])

    // fluid_module: program blank with water bucket (fluid detection)
    event.recipes.gtceu.assembler('scannable_fluid_module')
        .itemInputs('1x scannable:blank_module', '1x minecraft:water_bucket')
        .itemOutputs('1x scannable:fluid_module')
        .duration(5 * 20)
        .EUt(GTValues.VA[GTValues.MV])

    // range_module: program blank with long aluminium rod (antenna extension)
    event.recipes.gtceu.assembler('scannable_range_module')
        .itemInputs('1x scannable:blank_module', '1x gtceu:long_aluminium_rod')
        .itemOutputs('1x scannable:range_module')
        .duration(5 * 20)
        .EUt(GTValues.VA[GTValues.MV])

    // chest_module: program blank with chest (storage detection)
    event.recipes.gtceu.assembler('scannable_chest_module')
        .itemInputs('1x scannable:blank_module', '1x minecraft:chest')
        .itemOutputs('1x scannable:chest_module')
        .duration(5 * 20)
        .EUt(GTValues.VA[GTValues.MV])

    // cc: link

    // link_plating: electrum circuit board — base component for all link armor and cores
    event.recipes.gtceu.assembler('cclink_link_plating')
        .itemInputs('4x gtceu:electrum_plate', '4x gtceu:copper_single_wire')
        .inputFluids(Fluid.of('gtceu:soldering_alloy', 144))
        .itemOutputs('4x cclink:link_plating')
        .duration(10 * 20)
        .EUt(GTValues.VA[GTValues.HV])

    // link_power_core: HV battery wrapped in link circuitry — powers wearable computer
    event.recipes.gtceu.assembler('cclink_link_power_core')
        .itemInputs('#gtceu:batteries/hv', '2x #gtceu:circuits/hv', '2x cclink:link_plating')
        .inputFluids(Fluid.of('gtceu:soldering_alloy', 144))
        .itemOutputs('1x cclink:link_power_core')
        .duration(15 * 20)
        .EUt(GTValues.VA[GTValues.HV])

    // link_core: wearable computer — advanced computer embedded in link-plated housing
    event.recipes.gtceu.assembler('cclink_link_core')
        .itemInputs('computercraft:computer_advanced', 'cclink:link_power_core', '4x cclink:link_plating', '2x #gtceu:circuits/hv')
        .inputFluids(Fluid.of('gtceu:soldering_alloy', 288))
        .itemOutputs('1x cclink:link_core')
        .duration(20 * 20)
        .EUt(GTValues.VA[GTValues.HV])

    // link_interface: helmet that pairs with link_core — rubber-padded display visor
    event.recipes.gtceu.assembler('cclink_link_interface')
        .itemInputs('cclink:link_core', '4x gtceu:rubber_plate', '2x gtceu:glass_plate', '2x cclink:link_plating', '#gtceu:circuits/hv')
        .inputFluids(Fluid.of('gtceu:soldering_alloy', 144))
        .itemOutputs('1x cclink:link_interface')
        .duration(20 * 20)
        .EUt(GTValues.VA[GTValues.HV])

    // link_key: authentication key for linking computers — emitter/sensor pair
    event.recipes.gtceu.assembler('cclink_link_key')
        .itemInputs('gtceu:hv_emitter', 'gtceu:hv_sensor', 'cclink:link_plating', '#gtceu:circuits/hv')
        .itemOutputs('1x cclink:link_key')
        .duration(10 * 20)
        .EUt(GTValues.VA[GTValues.HV])

    // link_turtle_advanced: turtle with wireless link capability — builds on HV turtle
    event.recipes.gtceu.assembler('cclink_link_turtle_advanced')
        .itemInputs('computercraft:turtle_advanced', 'cclink:link_core', 'gtceu:ev_emitter', 'gtceu:ev_robot_arm', '2x gtceu:aluminium_single_cable')
        .inputFluids(Fluid.of('gtceu:soldering_alloy', 288))
        .itemOutputs('1x cclink:link_turtle_advanced')
        .duration(30 * 20)
        .EUt(GTValues.VA[GTValues.EV])

    // integrated_link_core: link core with built-in modem and speaker — EV upgrade
    event.recipes.gtceu.assembler('cclink_integrated_link_core')
        .itemInputs('cclink:link_core', '2x cclink:link_power_core', '4x #gtceu:circuits/ev', 'computercraft:speaker')
        .inputFluids(Fluid.of('gtceu:soldering_alloy', 576))
        .itemOutputs('1x cclink:integrated_link_core')
        .duration(30 * 20)
        .EUt(GTValues.VA[GTValues.EV])

    // scanner_upgrade: block scanner module — HV sensor reads block signatures
    event.recipes.gtceu.assembler('cclink_scanner_upgrade')
        .itemInputs('gtceu:hv_sensor', '2x gtceu:steel_plate', '#gtceu:circuits/mv', 'cclink:link_plating')
        .itemOutputs('1x cclink:scanner_upgrade')
        .duration(15 * 20)
        .EUt(GTValues.VA[GTValues.HV])

    // sensor_upgrade: entity sensor module — emitter/sensor pair detects living entities
    event.recipes.gtceu.assembler('cclink_sensor_upgrade')
        .itemInputs('gtceu:hv_sensor', 'gtceu:hv_emitter', '2x gtceu:steel_plate', 'cclink:link_plating')
        .itemOutputs('1x cclink:sensor_upgrade')
        .duration(15 * 20)
        .EUt(GTValues.VA[GTValues.HV])

    // kinetic_upgrade: kinetic module — motor + springs for enhanced mobility
    event.recipes.gtceu.assembler('cclink_kinetic_upgrade')
        .itemInputs('gtceu:hv_electric_motor', '2x gtceu:steel_spring', '2x gtceu:steel_plate', '#gtceu:circuits/hv')
        .itemOutputs('1x cclink:kinetic_upgrade')
        .duration(20 * 20)
        .EUt(GTValues.VA[GTValues.HV])

    // chatty_upgrade: chat module — speaker + emitter for voice/text relay
    event.recipes.gtceu.assembler('cclink_chatty_upgrade')
        .itemInputs('computercraft:speaker', 'gtceu:hv_emitter', 'cclink:link_plating', '#gtceu:circuits/hv')
        .itemOutputs('1x cclink:chatty_upgrade')
        .duration(15 * 20)
        .EUt(GTValues.VA[GTValues.HV])

    // overlay_upgrade: overlay module — glass display plates + sensor for HUD projection
    event.recipes.gtceu.assembler('cclink_overlay_upgrade')
        .itemInputs('2x gtceu:glass_plate', 'gtceu:hv_sensor', '2x cclink:link_plating', '#gtceu:circuits/hv')
        .itemOutputs('1x cclink:overlay_upgrade')
        .duration(15 * 20)
        .EUt(GTValues.VA[GTValues.HV])

    // introspection_upgrade: inventory access module — ender chest for remote storage link
    event.recipes.gtceu.assembler('cclink_introspection_upgrade')
        .itemInputs('minecraft:ender_chest', '2x #gtceu:circuits/hv', '2x cclink:link_plating')
        .itemOutputs('1x cclink:introspection_upgrade')
        .duration(20 * 20)
        .EUt(GTValues.VA[GTValues.HV])

    // world_upgrade: world detector — combines scanner + sensor with higher-tier circuits
    event.recipes.gtceu.assembler('cclink_world_upgrade')
        .itemInputs('cclink:scanner_upgrade', 'cclink:sensor_upgrade', '2x #gtceu:circuits/hv', '2x cclink:link_plating')
        .itemOutputs('1x cclink:world_upgrade')
        .duration(25 * 20)
        .EUt(GTValues.VA[GTValues.HV])

    // laser_upgrade: laser gun module — EV emitter focused through glass lens
    event.recipes.gtceu.assembler('cclink_laser_upgrade')
        .itemInputs('gtceu:ev_emitter', 'gtceu:glass_lens', '2x cclink:link_plating', '#gtceu:circuits/ev')
        .itemOutputs('1x cclink:laser_upgrade')
        .duration(20 * 20)
        .EUt(GTValues.VA[GTValues.EV])

    // battery_upgrade_tier1: HV battery mounted in link armor slot
    event.recipes.gtceu.assembler('cclink_battery_upgrade_tier1')
        .itemInputs('#gtceu:batteries/hv', '2x cclink:link_plating')
        .itemOutputs('1x cclink:battery_upgrade_tier1')
        .duration(10 * 20)
        .EUt(GTValues.VA[GTValues.HV])

    // battery_upgrade_tier2: EV battery mounted in link armor slot
    event.recipes.gtceu.assembler('cclink_battery_upgrade_tier2')
        .itemInputs('#gtceu:batteries/ev', '3x cclink:link_plating')
        .itemOutputs('1x cclink:battery_upgrade_tier2')
        .duration(15 * 20)
        .EUt(GTValues.VA[GTValues.EV])

    // battery_upgrade_tier3: IV battery mounted in link armor slot
    event.recipes.gtceu.assembler('cclink_battery_upgrade_tier3')
        .itemInputs('#gtceu:batteries/iv', '4x cclink:link_plating')
        .itemOutputs('1x cclink:battery_upgrade_tier3')
        .duration(20 * 20)
        .EUt(GTValues.VA[GTValues.IV])

    // shield_upgrade_tier1: steel plate deflection layer for link armor
    event.recipes.gtceu.assembler('cclink_shield_upgrade_tier1')
        .itemInputs('4x gtceu:steel_plate', '#gtceu:circuits/hv', '2x cclink:link_plating')
        .itemOutputs('1x cclink:shield_upgrade_tier1')
        .duration(15 * 20)
        .EUt(GTValues.VA[GTValues.HV])

    // shield_upgrade_tier2: titanium plate deflection layer
    event.recipes.gtceu.assembler('cclink_shield_upgrade_tier2')
        .itemInputs('4x gtceu:titanium_plate', '#gtceu:circuits/ev', '3x cclink:link_plating')
        .itemOutputs('1x cclink:shield_upgrade_tier2')
        .duration(20 * 20)
        .EUt(GTValues.VA[GTValues.EV])

    // shield_upgrade_tier3: tungsten steel plate deflection layer
    event.recipes.gtceu.assembler('cclink_shield_upgrade_tier3')
        .itemInputs('4x gtceu:tungstensteel_plate', '#gtceu:circuits/iv', '4x cclink:link_plating')
        .itemOutputs('1x cclink:shield_upgrade_tier3')
        .duration(25 * 20)
        .EUt(GTValues.VA[GTValues.IV])

    // shield_controller_upgrade: active shield management — EV sensor coordination circuit
    event.recipes.gtceu.assembler('cclink_shield_controller_upgrade')
        .itemInputs('gtceu:ev_sensor', '2x #gtceu:circuits/ev', '2x cclink:link_plating')
        .inputFluids(Fluid.of('gtceu:soldering_alloy', 144))
        .itemOutputs('1x cclink:shield_controller_upgrade')
        .duration(20 * 20)
        .EUt(GTValues.VA[GTValues.EV])

    // link_helmet: link visor — lightweight plating with EV circuits
    event.recipes.gtceu.assembler('cclink_link_helmet')
        .itemInputs('4x cclink:link_plating', '2x gtceu:rubber_plate', '2x #gtceu:circuits/ev')
        .inputFluids(Fluid.of('gtceu:soldering_alloy', 144))
        .itemOutputs('1x cclink:link_helmet')
        .duration(20 * 20)
        .EUt(GTValues.VA[GTValues.EV])

    // link_chestplate: link harness — heavier plating for upgrade slot housing
    event.recipes.gtceu.assembler('cclink_link_chestplate')
        .itemInputs('8x cclink:link_plating', '4x gtceu:rubber_plate', '2x #gtceu:circuits/ev')
        .inputFluids(Fluid.of('gtceu:soldering_alloy', 288))
        .itemOutputs('1x cclink:link_chestplate')
        .duration(30 * 20)
        .EUt(GTValues.VA[GTValues.EV])

    // link_leggings: link leggings — mid-weight plating
    event.recipes.gtceu.assembler('cclink_link_leggings')
        .itemInputs('6x cclink:link_plating', '3x gtceu:rubber_plate', '2x #gtceu:circuits/ev')
        .inputFluids(Fluid.of('gtceu:soldering_alloy', 216))
        .itemOutputs('1x cclink:link_leggings')
        .duration(25 * 20)
        .EUt(GTValues.VA[GTValues.EV])

    // link_boots: link boots — lightweight plating for mobility
    event.recipes.gtceu.assembler('cclink_link_boots')
        .itemInputs('4x cclink:link_plating', '2x gtceu:rubber_plate', '#gtceu:circuits/ev')
        .inputFluids(Fluid.of('gtceu:soldering_alloy', 144))
        .itemOutputs('1x cclink:link_boots')
        .duration(20 * 20)
        .EUt(GTValues.VA[GTValues.EV])

    // configurator_iron: iron-tier armor config tool
    event.recipes.gtceu.assembler('cclink_configurator_iron')
        .itemInputs('2x gtceu:iron_plate', 'gtceu:iron_rod', '#gtceu:circuits/mv')
        .itemOutputs('1x cclink:configurator_iron')
        .duration(10 * 20)
        .EUt(GTValues.VA[GTValues.MV])

    // configurator_gold: gold-tier armor config tool — finer tolerances
    event.recipes.gtceu.assembler('cclink_configurator_gold')
        .itemInputs('2x gtceu:gold_plate', 'gtceu:gold_rod', '#gtceu:circuits/hv', 'cclink:link_plating')
        .itemOutputs('1x cclink:configurator_gold')
        .duration(15 * 20)
        .EUt(GTValues.VA[GTValues.HV])

    // configurator_diamond: diamond-tier armor config tool — precision EV-grade tool
    event.recipes.gtceu.assembler('cclink_configurator_diamond')
        .itemInputs('2x minecraft:diamond', 'gtceu:platinum_rod', '#gtceu:circuits/ev', 'cclink:link_plating')
        .itemOutputs('1x cclink:configurator_diamond')
        .duration(20 * 20)
        .EUt(GTValues.VA[GTValues.EV])

    // link_armor_manager: manages armor upgrade loadouts via memory card
    event.recipes.gtceu.assembler('cclink_link_armor_manager')
        .itemInputs('2x #gtceu:circuits/ev', '2x cclink:link_plating', 'advancedperipherals:memory_card')
        .inputFluids(Fluid.of('gtceu:soldering_alloy', 144))
        .itemOutputs('1x cclink:link_armor_manager')
        .duration(20 * 20)
        .EUt(GTValues.VA[GTValues.EV])

})
