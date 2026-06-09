ServerEvents.recipes(event => {

    // --- removals ---

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

    // vista
    event.remove({ output: 'vista:television' })
    event.remove({ output: 'vista:viewfinder' })
    event.remove({ output: 'vista:hollow_cassette' })

    // --- cc: tweaked ---

    // networking backbone: copper wire + polyethylene → data cable
    event.recipes.gtceu.assembler('cc_cable')
        .itemInputs(
            '2x gtceu:copper_single_wire',
            '1x gtceu:polyethylene_plate'
        )
        .itemOutputs('8x computercraft:cable')
        .duration(5 * 20)
        .EUt(GTValues.VA[GTValues.MV])

    // wired modem: cables + copper plate + MV circuit → local network node
    event.recipes.gtceu.circuit_assembler('cc_wired_modem')
        .itemInputs(
            '2x computercraft:cable',
            '2x create:copper_sheet',
            '1x #gtceu:circuits/mv'
        )
        .inputFluids(Fluid.of('gtceu:soldering_alloy', 72))
        .itemOutputs('1x computercraft:wired_modem')
        .duration(10 * 20)
        .EUt(GTValues.VA[GTValues.MV])

    // basic computer: aluminium chassis + silicon + passive components + MV circuit
    event.recipes.gtceu.circuit_assembler('cc_computer_normal')
        .itemInputs(
            '4x gtceu:aluminium_plate',
            '2x gtceu:silicon_ingot',
            '2x gtceu:resistor',
            '1x #gtceu:circuits/mv'
        )
        .inputFluids(Fluid.of('gtceu:soldering_alloy', 144))
        .itemOutputs('1x computercraft:computer_normal')
        .duration(20 * 20)
        .EUt(GTValues.VA[GTValues.MV])

    // normal monitor: aluminium + glass plate + MV circuit
    event.recipes.gtceu.assembler('cc_monitor_normal')
        .itemInputs(
            '2x gtceu:aluminium_plate',
            '1x gtceu:glass_plate',
            '2x gtceu:copper_single_wire',
            '1x #gtceu:circuits/mv'
        )
        .inputFluids(Fluid.of('gtceu:soldering_alloy', 72))
        .itemOutputs('1x computercraft:monitor_normal')
        .duration(15 * 20)
        .EUt(GTValues.VA[GTValues.MV])

    // disk drive: steel + motor + iron rods for spindle + MV circuit
    event.recipes.gtceu.circuit_assembler('cc_disk_drive')
        .itemInputs(
            '2x gtceu:steel_plate',
            '2x gtceu:iron_rod',
            '1x gtceu:mv_electric_motor',
            '1x #gtceu:circuits/mv'
        )
        .inputFluids(Fluid.of('gtceu:soldering_alloy', 72))
        .itemOutputs('1x computercraft:disk_drive')
        .duration(15 * 20)
        .EUt(GTValues.VA[GTValues.MV])

    // speaker: aluminium plates + iron rods for speaker cone + MV circuit
    event.recipes.gtceu.assembler('cc_speaker')
        .itemInputs(
            '2x gtceu:aluminium_plate',
            '2x gtceu:iron_rod',
            '1x #gtceu:circuits/mv'
        )
        .inputFluids(Fluid.of('gtceu:soldering_alloy', 72))
        .itemOutputs('1x computercraft:speaker')
        .duration(10 * 20)
        .EUt(GTValues.VA[GTValues.MV])

    // printer: steel + pump for ink delivery + MV circuit
    event.recipes.gtceu.assembler('cc_printer')
        .itemInputs(
            '2x gtceu:steel_plate',
            '1x gtceu:mv_electric_pump',
            '1x #gtceu:circuits/mv'
        )
        .inputFluids(Fluid.of('gtceu:soldering_alloy', 72))
        .itemOutputs('1x computercraft:printer')
        .duration(15 * 20)
        .EUt(GTValues.VA[GTValues.MV])

    // pocket computer: smaller aluminium chassis + glass plate + MV circuit
    event.recipes.gtceu.circuit_assembler('cc_pocket_computer_normal')
        .itemInputs(
            '2x gtceu:aluminium_plate',
            '2x gtceu:silicon_ingot',
            '1x gtceu:glass_plate',
            '1x #gtceu:circuits/mv'
        )
        .inputFluids(Fluid.of('gtceu:soldering_alloy', 72))
        .itemOutputs('1x computercraft:pocket_computer_normal')
        .duration(15 * 20)
        .EUt(GTValues.VA[GTValues.MV])

    // advanced computer: gold chassis (HV) + silicon + SMD components + HV circuit
    event.recipes.gtceu.circuit_assembler('cc_computer_advanced')
        .itemInputs(
            '4x create:gold_sheet',
            '2x gtceu:silicon_ingot',
            '2x gtceu:smd_transistor',
            '1x #gtceu:circuits/hv'
        )
        .inputFluids(Fluid.of('gtceu:soldering_alloy', 288))
        .itemOutputs('1x computercraft:computer_advanced')
        .duration(20 * 20)
        .EUt(GTValues.VA[GTValues.HV])

    // advanced monitor: gold + glass plate + HV circuit (4x output mirrors vanilla)
    event.recipes.gtceu.assembler('cc_monitor_advanced')
        .itemInputs(
            '2x create:gold_sheet',
            '1x gtceu:glass_plate',
            '2x gtceu:copper_single_wire',
            '1x #gtceu:circuits/hv'
        )
        .inputFluids(Fluid.of('gtceu:soldering_alloy', 144))
        .itemOutputs('4x computercraft:monitor_advanced')
        .duration(15 * 20)
        .EUt(GTValues.VA[GTValues.HV])

    // advanced pocket computer: gold + glass plate + HV circuit
    event.recipes.gtceu.circuit_assembler('cc_pocket_computer_advanced')
        .itemInputs(
            '2x create:gold_sheet',
            '2x gtceu:silicon_ingot',
            '1x gtceu:glass_plate',
            '1x #gtceu:circuits/hv'
        )
        .inputFluids(Fluid.of('gtceu:soldering_alloy', 144))
        .itemOutputs('1x computercraft:pocket_computer_advanced')
        .duration(15 * 20)
        .EUt(GTValues.VA[GTValues.HV])

    // turtle: computer + iron chassis + motor + robot arm for navigation
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

    // advanced turtle: advanced computer + gold chassis + HV motor + HV robot arm
    event.recipes.gtceu.assembler('cc_turtle_advanced')
        .itemInputs(
            '1x computercraft:computer_advanced',
            '4x create:gold_sheet',
            '1x gtceu:hv_electric_motor',
            '1x gtceu:hv_robot_arm'
        )
        .inputFluids(Fluid.of('gtceu:soldering_alloy', 576))
        .itemOutputs('1x computercraft:turtle_advanced')
        .duration(30 * 20)
        .EUt(GTValues.VA[GTValues.HV])

    // wireless modem: wired_modem base + aluminium + ender pearl antenna + HV circuit
    event.recipes.gtceu.circuit_assembler('cc_wireless_modem_normal')
        .itemInputs(
            '1x computercraft:wired_modem',
            '2x gtceu:aluminium_plate',
            '1x minecraft:ender_pearl',
            '1x #gtceu:circuits/hv'
        )
        .inputFluids(Fluid.of('gtceu:soldering_alloy', 144))
        .itemOutputs('1x computercraft:wireless_modem_normal')
        .duration(20 * 20)
        .EUt(GTValues.VA[GTValues.HV])

    // ender modem: wireless base + stainless steel + eye of ender for long range + EV circuit
    event.recipes.gtceu.circuit_assembler('cc_wireless_modem_advanced')
        .itemInputs(
            '1x computercraft:wireless_modem_normal',
            '2x gtceu:stainless_steel_plate',
            '1x minecraft:ender_eye',
            '1x #gtceu:circuits/ev'
        )
        .inputFluids(Fluid.of('gtceu:soldering_alloy', 288))
        .itemOutputs('1x computercraft:wireless_modem_advanced')
        .duration(20 * 20)
        .EUt(GTValues.VA[GTValues.EV])

    // --- advanced peripherals ---

    // peripheral_casing: steel plates + copper wiring + MV circuit; base for all AP blocks
    event.recipes.gtceu.assembler('ap_peripheral_casing')
        .itemInputs(
            '4x gtceu:steel_plate',
            '4x gtceu:copper_single_wire',
            '1x #gtceu:circuits/mv'
        )
        .inputFluids(Fluid.of('gtceu:soldering_alloy', 72))
        .itemOutputs('2x advancedperipherals:peripheral_casing')
        .duration(10 * 20)
        .EUt(GTValues.VA[GTValues.MV])

    // environment_detector: basic sensor with passive components (MV)
    event.recipes.gtceu.circuit_assembler('ap_environment_detector')
        .itemInputs(
            '1x advancedperipherals:peripheral_casing',
            '1x gtceu:mv_sensor',
            '2x gtceu:resistor',
            '1x #gtceu:circuits/mv'
        )
        .inputFluids(Fluid.of('gtceu:soldering_alloy', 72))
        .itemOutputs('1x advancedperipherals:environment_detector')
        .duration(15 * 20)
        .EUt(GTValues.VA[GTValues.MV])

    // redstone_integrator: casing + wiring for 16-channel RS I/O (MV)
    event.recipes.gtceu.circuit_assembler('ap_redstone_integrator')
        .itemInputs(
            '1x advancedperipherals:peripheral_casing',
            '4x gtceu:copper_single_wire',
            '1x #gtceu:circuits/mv'
        )
        .inputFluids(Fluid.of('gtceu:soldering_alloy', 72))
        .itemOutputs('1x advancedperipherals:redstone_integrator')
        .duration(10 * 20)
        .EUt(GTValues.VA[GTValues.MV])

    // chat_box: casing + emitter for wireless text broadcast (MV)
    event.recipes.gtceu.circuit_assembler('ap_chat_box')
        .itemInputs(
            '1x advancedperipherals:peripheral_casing',
            '1x gtceu:mv_emitter',
            '1x #gtceu:circuits/mv'
        )
        .inputFluids(Fluid.of('gtceu:soldering_alloy', 72))
        .itemOutputs('1x advancedperipherals:chat_box')
        .duration(15 * 20)
        .EUt(GTValues.VA[GTValues.MV])

    // memory_card: steel + silicon + MV circuit for config storage
    event.recipes.gtceu.circuit_assembler('ap_memory_card')
        .itemInputs(
            '2x gtceu:steel_plate',
            '2x gtceu:silicon_ingot',
            '1x #gtceu:circuits/mv'
        )
        .inputFluids(Fluid.of('gtceu:soldering_alloy', 72))
        .itemOutputs('1x advancedperipherals:memory_card')
        .duration(10 * 20)
        .EUt(GTValues.VA[GTValues.MV])

    // energy_detector: dual sensors for EU in/out measurement (HV)
    event.recipes.gtceu.circuit_assembler('ap_energy_detector')
        .itemInputs(
            '1x advancedperipherals:peripheral_casing',
            '2x gtceu:mv_sensor',
            '1x #gtceu:circuits/hv'
        )
        .inputFluids(Fluid.of('gtceu:soldering_alloy', 144))
        .itemOutputs('1x advancedperipherals:energy_detector')
        .duration(20 * 20)
        .EUt(GTValues.VA[GTValues.HV])

    // player_detector: HV sensors for entity tracking (HV)
    event.recipes.gtceu.circuit_assembler('ap_player_detector')
        .itemInputs(
            '1x advancedperipherals:peripheral_casing',
            '2x gtceu:hv_sensor',
            '1x #gtceu:circuits/hv'
        )
        .inputFluids(Fluid.of('gtceu:soldering_alloy', 144))
        .itemOutputs('1x advancedperipherals:player_detector')
        .duration(20 * 20)
        .EUt(GTValues.VA[GTValues.HV])

    // inventory_manager: casing + HV robot arm for item manipulation (HV)
    event.recipes.gtceu.assembler('ap_inventory_manager')
        .itemInputs(
            '1x advancedperipherals:peripheral_casing',
            '2x gtceu:steel_plate',
            '1x gtceu:hv_robot_arm',
            '1x #gtceu:circuits/hv'
        )
        .inputFluids(Fluid.of('gtceu:soldering_alloy', 144))
        .itemOutputs('1x advancedperipherals:inventory_manager')
        .duration(25 * 20)
        .EUt(GTValues.VA[GTValues.HV])

    // block_reader: wired modem + HV sensor for block state scanning (HV)
    event.recipes.gtceu.circuit_assembler('ap_block_reader')
        .itemInputs(
            '1x advancedperipherals:peripheral_casing',
            '1x computercraft:wired_modem_full',
            '1x gtceu:hv_sensor',
            '1x #gtceu:circuits/hv'
        )
        .inputFluids(Fluid.of('gtceu:soldering_alloy', 144))
        .itemOutputs('1x advancedperipherals:block_reader')
        .duration(20 * 20)
        .EUt(GTValues.VA[GTValues.HV])

    // nbt_storage: casing + silicon wafers for persistent NBT data (HV)
    event.recipes.gtceu.circuit_assembler('ap_nbt_storage')
        .itemInputs(
            '1x advancedperipherals:peripheral_casing',
            '4x gtceu:silicon_ingot',
            '1x #gtceu:circuits/hv'
        )
        .inputFluids(Fluid.of('gtceu:soldering_alloy', 144))
        .itemOutputs('1x advancedperipherals:nbt_storage')
        .duration(20 * 20)
        .EUt(GTValues.VA[GTValues.HV])

    // chunk_controller: steel + ender eye for chunk loading (HV)
    event.recipes.gtceu.circuit_assembler('ap_chunk_controller')
        .itemInputs(
            '2x gtceu:steel_plate',
            '1x minecraft:ender_eye',
            '1x #gtceu:circuits/hv'
        )
        .inputFluids(Fluid.of('gtceu:soldering_alloy', 144))
        .itemOutputs('1x advancedperipherals:chunk_controller')
        .duration(20 * 20)
        .EUt(GTValues.VA[GTValues.HV])

    // weak_automata_core: casing + HV emitters + soul lantern for turtle golem link (HV)
    // soul lantern kept: thematic ingredient for animating the core
    event.recipes.gtceu.circuit_assembler('ap_weak_automata_core')
        .itemInputs(
            '1x advancedperipherals:peripheral_casing',
            '2x gtceu:hv_emitter',
            '1x minecraft:soul_lantern',
            '1x #gtceu:circuits/hv'
        )
        .inputFluids(Fluid.of('gtceu:soldering_alloy', 288))
        .itemOutputs('1x advancedperipherals:weak_automata_core')
        .duration(30 * 20)
        .EUt(GTValues.VA[GTValues.HV])

    // geo_scanner: wired modem + EV sensors for mineral scanning (EV)
    event.recipes.gtceu.circuit_assembler('ap_geo_scanner')
        .itemInputs(
            '1x advancedperipherals:peripheral_casing',
            '1x computercraft:wired_modem_full',
            '2x gtceu:ev_sensor',
            '1x #gtceu:circuits/ev'
        )
        .inputFluids(Fluid.of('gtceu:soldering_alloy', 288))
        .itemOutputs('1x advancedperipherals:geo_scanner')
        .duration(30 * 20)
        .EUt(GTValues.VA[GTValues.EV])

    // me_bridge: casing + AE2 interface + matter_energy_circuit (EV; requires AE2)
    event.recipes.gtceu.circuit_assembler('ap_me_bridge')
        .itemInputs(
            '1x advancedperipherals:peripheral_casing',
            '1x ae2:interface',
            '1x kubejs:matter_energy_circuit',
            '1x #gtceu:circuits/ev'
        )
        .inputFluids(Fluid.of('gtceu:soldering_alloy', 288))
        .itemOutputs('1x advancedperipherals:me_bridge')
        .duration(30 * 20)
        .EUt(GTValues.VA[GTValues.EV])

    // --- vista ---

    // cassette: aluminium + polyethylene housing + motor for tape drive (MV)
    // no vanilla recipe exists; viewfinder and hollow_cassette both need cassette as input
    event.recipes.gtceu.assembler('vista_cassette')
        .itemInputs(
            '2x gtceu:aluminium_plate',
            '2x gtceu:polyethylene_plate',
            '1x gtceu:mv_electric_motor'
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
    event.recipes.gtceu.circuit_assembler('vista_hollow_cassette')
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

})
