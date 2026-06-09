ServerEvents.recipes(event => {

    // --- removals ---

    // all assembly station recipes replaced by cyberware_constructor
    event.remove({ type: 'cyber_ware_port:assembly' })

    // vanilla crafting for infrastructure replaced by GT machines
    event.remove({ output: 'cyber_ware_port:surgery_chamber' })
    event.remove({ output: 'cyber_ware_port:charger' })
    event.remove({ output: 'cyber_ware_port:robo_surgeon' })
    event.remove({ output: 'cyber_ware_port:scanner' })
    event.remove({ output: 'cyber_ware_port:neuropozyne' })
    event.remove({ output: 'cyber_ware_port:katana' })

    // --- components ---
    // still used by radio_tower_core and robo_surgeon vanilla recipes
    // provided via GT machines so they're obtainable without loot grinding

    // plating: stainless steel housing stock
    event.recipes.gtceu.assembler('cw_component_plating')
        .itemInputs('2x gtceu:stainless_steel_plate')
        .inputFluids(Fluid.of('gtceu:soldering_alloy', 72))
        .itemOutputs('2x cyber_ware_port:component_plating')
        .duration(10 * 20)
        .EUt(GTValues.VA[GTValues.HV])

    // fiberoptics: glass lenses threaded onto copper wiring
    event.recipes.gtceu.circuit_assembler('cw_component_fiberoptics')
        .itemInputs('2x gtceu:glass_lens', '2x gtceu:copper_single_wire')
        .inputFluids(Fluid.of('gtceu:soldering_alloy', 72))
        .itemOutputs('2x cyber_ware_port:component_fiberoptics')
        .duration(10 * 20)
        .EUt(GTValues.VA[GTValues.HV])

    // ssc: solid state chip (silicon + HV logic)
    event.recipes.gtceu.circuit_assembler('cw_component_ssc')
        .itemInputs('2x gtceu:silicon_ingot', '1x #gtceu:circuits/hv')
        .inputFluids(Fluid.of('gtceu:soldering_alloy', 144))
        .itemOutputs('2x cyber_ware_port:component_ssc')
        .duration(15 * 20)
        .EUt(GTValues.VA[GTValues.HV])

    // actuator: servo-piston unit
    event.recipes.gtceu.assembler('cw_component_actuator')
        .itemInputs('2x gtceu:stainless_steel_plate', '1x gtceu:hv_electric_piston')
        .inputFluids(Fluid.of('gtceu:soldering_alloy', 72))
        .itemOutputs('2x cyber_ware_port:component_actuator')
        .duration(10 * 20)
        .EUt(GTValues.VA[GTValues.HV])

    // microelectric: SMD substrate
    event.recipes.gtceu.circuit_assembler('cw_component_microelectric')
        .itemInputs('1x gtceu:smd_transistor', '1x gtceu:smd_capacitor', '1x #gtceu:circuits/hv')
        .inputFluids(Fluid.of('gtceu:soldering_alloy', 72))
        .itemOutputs('2x cyber_ware_port:component_microelectric')
        .duration(10 * 20)
        .EUt(GTValues.VA[GTValues.HV])

    // titanium: machined titanium structural piece
    event.recipes.gtceu.assembler('cw_component_titanium')
        .itemInputs('2x gtceu:titanium_plate')
        .itemOutputs('2x cyber_ware_port:component_titanium')
        .duration(10 * 20)
        .EUt(GTValues.VA[GTValues.EV])

    // fullerene: carbon fiber structural composite
    event.recipes.gtceu.assembler('cw_component_fullerene')
        .itemInputs('1x gtceu:carbon_fiber_plate', '1x gtceu:titanium_plate')
        .itemOutputs('2x cyber_ware_port:component_fullerene')
        .duration(15 * 20)
        .EUt(GTValues.VA[GTValues.EV])

    // storage: energy storage cell
    event.recipes.gtceu.circuit_assembler('cw_component_storage')
        .itemInputs('2x gtceu:silicon_ingot', '1x gtceu:stainless_steel_plate', '1x #gtceu:circuits/hv')
        .inputFluids(Fluid.of('gtceu:soldering_alloy', 72))
        .itemOutputs('2x cyber_ware_port:component_storage')
        .duration(10 * 20)
        .EUt(GTValues.VA[GTValues.HV])

    // synthnerves: fine-wire neural simulation bundle
    event.recipes.gtceu.circuit_assembler('cw_component_synthnerves')
        .itemInputs('4x gtceu:fine_copper_wire', '1x #gtceu:circuits/hv')
        .inputFluids(Fluid.of('gtceu:soldering_alloy', 72))
        .itemOutputs('2x cyber_ware_port:component_synthnerves')
        .duration(10 * 20)
        .EUt(GTValues.VA[GTValues.HV])

    // reactor: miniature field emitter cell
    event.recipes.gtceu.circuit_assembler('cw_component_reactor')
        .itemInputs('1x gtceu:hv_field_generator', '1x gtceu:stainless_steel_plate', '1x #gtceu:circuits/hv')
        .inputFluids(Fluid.of('gtceu:soldering_alloy', 144))
        .itemOutputs('2x cyber_ware_port:component_reactor')
        .duration(15 * 20)
        .EUt(GTValues.VA[GTValues.HV])

    // --- infrastructure ---

    // scanner: medical diagnostic tool (MV)
    event.recipes.gtceu.assembler('cw_scanner')
        .itemInputs(
            '2x gtceu:aluminium_plate',
            '1x gtceu:glass_lens',
            '1x gtceu:mv_sensor',
            '1x #gtceu:circuits/mv'
        )
        .inputFluids(Fluid.of('gtceu:soldering_alloy', 72))
        .itemOutputs('1x cyber_ware_port:scanner')
        .duration(15 * 20)
        .EUt(GTValues.VA[GTValues.MV])

    // charger: implant charging dock (HV)
    event.recipes.gtceu.assembler('cw_charger')
        .itemInputs(
            '4x gtceu:stainless_steel_plate',
            '2x gtceu:copper_single_wire',
            '1x #gtceu:circuits/hv'
        )
        .inputFluids(Fluid.of('gtceu:soldering_alloy', 144))
        .itemOutputs('1x cyber_ware_port:charger')
        .duration(20 * 20)
        .EUt(GTValues.VA[GTValues.HV])

    // surgery_chamber: implant installation station (HV)
    event.recipes.gtceu.assembler('cw_surgery_chamber')
        .itemInputs(
            '4x gtceu:stainless_steel_plate',
            '2x gtceu:stainless_steel_rod',
            '1x gtceu:hv_electric_motor',
            '1x #gtceu:circuits/hv'
        )
        .inputFluids(Fluid.of('gtceu:soldering_alloy', 288))
        .itemOutputs('1x cyber_ware_port:surgery_chamber')
        .duration(30 * 20)
        .EUt(GTValues.VA[GTValues.HV])

    // robo_surgeon: automated surgical robot (EV)
    event.recipes.gtceu.assembler('cw_robo_surgeon')
        .itemInputs(
            '2x gtceu:titanium_plate',
            '2x gtceu:ev_electric_motor',
            '2x gtceu:ev_robot_arm',
            '1x #gtceu:circuits/ev'
        )
        .inputFluids(Fluid.of('gtceu:soldering_alloy', 576))
        .itemOutputs('1x cyber_ware_port:robo_surgeon')
        .duration(40 * 20)
        .EUt(GTValues.VA[GTValues.EV])

    // neuropozyne: anti-rejection drug (MV chemical_reactor)
    event.recipes.gtceu.chemical_reactor('cw_neuropozyne')
        .itemInputs('1x minecraft:spider_eye', '1x minecraft:sugar', '1x gtceu:small_iron_dust')
        .itemOutputs('2x cyber_ware_port:neuropozyne')
        .duration(10 * 20)
        .EUt(GTValues.VA[GTValues.MV])

    // katana: high-carbon steel blade (HV)
    event.recipes.gtceu.assembler('cw_katana')
        .itemInputs('3x gtceu:stainless_steel_rod', '1x gtceu:stainless_steel_plate', '1x #gtceu:circuits/hv')
        .inputFluids(Fluid.of('gtceu:soldering_alloy', 72))
        .itemOutputs('1x cyber_ware_port:katana')
        .duration(15 * 20)
        .EUt(GTValues.VA[GTValues.HV])

    // dense_battery: implantable power pack (HV)
    event.recipes.gtceu.cyberware_constructor('cw_dense_battery')
        .itemInputs(
            '2x gtceu:stainless_steel_plate',
            '2x gtceu:silicon_ingot',
            '1x gtceu:hv_field_generator',
            '1x #gtceu:circuits/hv'
        )
        .inputFluids(Fluid.of('gtceu:soldering_alloy', 144))
        .itemOutputs('1x cyber_ware_port:dense_battery')
        .duration(25 * 20)
        .EUt(GTValues.VA[GTValues.HV])

    // --- cybereyes base (HV) ---

    event.recipes.gtceu.cyberware_constructor('cw_cybereyes')
        .itemInputs(
            '2x gtceu:stainless_steel_plate',
            '2x gtceu:glass_lens',
            '1x gtceu:silicon_ingot',
            '1x gtceu:hv_sensor',
            '1x #gtceu:circuits/hv'
        )
        .inputFluids(Fluid.of('gtceu:soldering_alloy', 144))
        .itemOutputs('1x cyber_ware_port:cybereyes')
        .duration(25 * 20)
        .EUt(GTValues.VA[GTValues.HV])

    // --- cyberheart (EV) ---

    event.recipes.gtceu.cyberware_constructor('cw_cyberheart')
        .itemInputs(
            '2x gtceu:titanium_plate',
            '2x gtceu:ev_electric_piston',
            '1x gtceu:ev_electric_motor',
            '1x #gtceu:circuits/ev'
        )
        .inputFluids(Fluid.of('gtceu:soldering_alloy', 288))
        .itemOutputs('1x cyber_ware_port:cyberheart')
        .duration(30 * 20)
        .EUt(GTValues.VA[GTValues.EV])

    // --- cyberarms (EV) ---

    event.recipes.gtceu.cyberware_constructor('cw_cyberarm_left')
        .itemInputs(
            '4x gtceu:titanium_plate',
            '2x gtceu:ev_electric_motor',
            '1x gtceu:ev_robot_arm',
            '1x #gtceu:circuits/ev'
        )
        .inputFluids(Fluid.of('gtceu:soldering_alloy', 288))
        .itemOutputs('1x cyber_ware_port:cyberlimbs_cyberarm_left')
        .duration(30 * 20)
        .EUt(GTValues.VA[GTValues.EV])

    event.recipes.gtceu.cyberware_constructor('cw_cyberarm_right')
        .itemInputs(
            '4x gtceu:titanium_plate',
            '2x gtceu:ev_electric_motor',
            '1x gtceu:ev_robot_arm',
            '1x #gtceu:circuits/ev'
        )
        .inputFluids(Fluid.of('gtceu:soldering_alloy', 288))
        .itemOutputs('1x cyber_ware_port:cyberlimbs_cyberarm_right')
        .duration(30 * 20)
        .EUt(GTValues.VA[GTValues.EV])

    // --- cyberlegs (EV) ---

    event.recipes.gtceu.cyberware_constructor('cw_cyberleg_left')
        .itemInputs(
            '4x gtceu:titanium_plate',
            '2x gtceu:ev_electric_motor',
            '2x gtceu:ev_electric_piston',
            '1x #gtceu:circuits/ev'
        )
        .inputFluids(Fluid.of('gtceu:soldering_alloy', 288))
        .itemOutputs('1x cyber_ware_port:cyberlimbs_cyberleg_left')
        .duration(30 * 20)
        .EUt(GTValues.VA[GTValues.EV])

    event.recipes.gtceu.cyberware_constructor('cw_cyberleg_right')
        .itemInputs(
            '4x gtceu:titanium_plate',
            '2x gtceu:ev_electric_motor',
            '2x gtceu:ev_electric_piston',
            '1x #gtceu:circuits/ev'
        )
        .inputFluids(Fluid.of('gtceu:soldering_alloy', 288))
        .itemOutputs('1x cyber_ware_port:cyberlimbs_cyberleg_right')
        .duration(30 * 20)
        .EUt(GTValues.VA[GTValues.EV])

    // --- eye upgrades (HV) ---

    event.recipes.gtceu.cyberware_constructor('cw_eye_night_vision')
        .itemInputs('1x gtceu:glass_lens', '2x gtceu:smd_transistor', '1x gtceu:hv_emitter', '1x #gtceu:circuits/hv')
        .inputFluids(Fluid.of('gtceu:soldering_alloy', 72))
        .itemOutputs('1x cyber_ware_port:cybereye_upgrades_night_vision')
        .duration(20 * 20)
        .EUt(GTValues.VA[GTValues.HV])

    event.recipes.gtceu.cyberware_constructor('cw_eye_targeting')
        .itemInputs('1x gtceu:hv_sensor', '2x gtceu:smd_capacitor', '1x #gtceu:circuits/hv')
        .inputFluids(Fluid.of('gtceu:soldering_alloy', 72))
        .itemOutputs('1x cyber_ware_port:cybereye_upgrades_targeting')
        .duration(20 * 20)
        .EUt(GTValues.VA[GTValues.HV])

    event.recipes.gtceu.cyberware_constructor('cw_eye_zoom')
        .itemInputs('2x gtceu:glass_lens', '1x gtceu:hv_electric_piston', '1x #gtceu:circuits/hv')
        .inputFluids(Fluid.of('gtceu:soldering_alloy', 72))
        .itemOutputs('1x cyber_ware_port:cybereye_upgrades_zoom')
        .duration(20 * 20)
        .EUt(GTValues.VA[GTValues.HV])

    event.recipes.gtceu.cyberware_constructor('cw_eye_underwater_vision')
        .itemInputs('1x gtceu:glass_lens', '1x minecraft:prismarine_shard', '1x #gtceu:circuits/hv')
        .inputFluids(Fluid.of('gtceu:soldering_alloy', 72))
        .itemOutputs('1x cyber_ware_port:cybereye_upgrades_underwater_vision')
        .duration(20 * 20)
        .EUt(GTValues.VA[GTValues.HV])

    event.recipes.gtceu.cyberware_constructor('cw_eye_hudjack')
        .itemInputs('2x gtceu:smd_transistor', '1x gtceu:silicon_ingot', '1x #gtceu:circuits/hv')
        .inputFluids(Fluid.of('gtceu:soldering_alloy', 72))
        .itemOutputs('1x cyber_ware_port:cybereye_upgrades_hudjack')
        .duration(20 * 20)
        .EUt(GTValues.VA[GTValues.HV])

    // --- brain upgrades ---

    // radio: neural wireless antenna (HV)
    event.recipes.gtceu.cyberware_constructor('cw_brain_radio')
        .itemInputs('1x gtceu:hv_emitter', '2x gtceu:copper_single_wire', '1x #gtceu:circuits/hv')
        .inputFluids(Fluid.of('gtceu:soldering_alloy', 72))
        .itemOutputs('1x cyber_ware_port:brain_upgrades_radio')
        .duration(20 * 20)
        .EUt(GTValues.VA[GTValues.HV])

    // neural contextualizer: enhanced data processing overlay (EV)
    event.recipes.gtceu.cyberware_constructor('cw_brain_neural_contextualizer')
        .itemInputs('2x gtceu:silicon_ingot', '1x gtceu:ev_emitter', '1x #gtceu:circuits/ev')
        .inputFluids(Fluid.of('gtceu:soldering_alloy', 144))
        .itemOutputs('1x cyber_ware_port:brain_upgrades_neural_contextualizer')
        .duration(25 * 20)
        .EUt(GTValues.VA[GTValues.EV])

    // cortical stack: consciousness backup storage (EV)
    event.recipes.gtceu.cyberware_constructor('cw_brain_cortical_stack')
        .itemInputs('2x gtceu:silicon_ingot', '1x gtceu:ev_field_generator', '1x #gtceu:circuits/ev')
        .inputFluids(Fluid.of('gtceu:soldering_alloy', 288))
        .itemOutputs('1x cyber_ware_port:brain_upgrades_cortical_stack')
        .duration(30 * 20)
        .EUt(GTValues.VA[GTValues.EV])

    // ender jammer: blocks teleportation within range (EV)
    event.recipes.gtceu.cyberware_constructor('cw_brain_ender_jammer')
        .itemInputs('1x minecraft:ender_pearl', '1x minecraft:obsidian', '1x gtceu:ev_field_generator', '1x #gtceu:circuits/ev')
        .inputFluids(Fluid.of('gtceu:soldering_alloy', 144))
        .itemOutputs('1x cyber_ware_port:brain_upgrades_ender_jammer')
        .duration(25 * 20)
        .EUt(GTValues.VA[GTValues.EV])

    // matrix: full neural interface (IV)
    // spider_eye kept: thematic for sensory input mesh
    event.recipes.gtceu.cyberware_constructor('cw_brain_matrix')
        .itemInputs(
            '4x gtceu:silicon_ingot',
            '1x gtceu:iv_field_generator',
            '1x minecraft:spider_eye',
            '1x #gtceu:circuits/iv'
        )
        .inputFluids(Fluid.of('gtceu:soldering_alloy', 576))
        .itemOutputs('1x cyber_ware_port:brain_upgrades_matrix')
        .duration(40 * 20)
        .EUt(GTValues.VA[GTValues.IV])

    // consciousness transmitter: transmit your mind wirelessly (IV)
    // ender_eye kept: thematic for inter-dimensional signal
    event.recipes.gtceu.cyberware_constructor('cw_brain_consciousness_transmitter')
        .itemInputs('2x gtceu:iv_emitter', '1x minecraft:ender_eye', '1x #gtceu:circuits/iv')
        .inputFluids(Fluid.of('gtceu:soldering_alloy', 576))
        .itemOutputs('1x cyber_ware_port:brain_upgrades_consciousness_transmitter')
        .duration(40 * 20)
        .EUt(GTValues.VA[GTValues.IV])

    // --- heart upgrades ---

    // defibrillator: auto shock-revive (HV)
    event.recipes.gtceu.cyberware_constructor('cw_heart_defibrillator')
        .itemInputs('2x gtceu:hv_emitter', '1x gtceu:stainless_steel_plate', '1x #gtceu:circuits/hv')
        .inputFluids(Fluid.of('gtceu:soldering_alloy', 144))
        .itemOutputs('1x cyber_ware_port:heart_upgrades_defibrillator')
        .duration(25 * 20)
        .EUt(GTValues.VA[GTValues.HV])

    // medkit: healing fluid injector (HV)
    // ghast_tear kept: thematic for regenerative reagent
    event.recipes.gtceu.cyberware_constructor('cw_heart_medkit')
        .itemInputs('1x gtceu:hv_electric_pump', '1x minecraft:ghast_tear', '1x #gtceu:circuits/hv')
        .inputFluids(Fluid.of('gtceu:soldering_alloy', 72))
        .itemOutputs('1x cyber_ware_port:heart_upgrades_medkit')
        .duration(20 * 20)
        .EUt(GTValues.VA[GTValues.HV])

    // platelets: clotting agent dispenser (HV)
    // slime_ball kept: thematic for viscous clotting fluid
    event.recipes.gtceu.cyberware_constructor('cw_heart_platelets')
        .itemInputs('1x gtceu:hv_electric_pump', '1x minecraft:slime_ball', '1x #gtceu:circuits/hv')
        .inputFluids(Fluid.of('gtceu:soldering_alloy', 72))
        .itemOutputs('1x cyber_ware_port:heart_upgrades_platelets')
        .duration(20 * 20)
        .EUt(GTValues.VA[GTValues.HV])

    // coupler: RF energy intake coupler (EV)
    event.recipes.gtceu.cyberware_constructor('cw_heart_coupler')
        .itemInputs('1x gtceu:ev_field_generator', '1x gtceu:titanium_plate', '1x #gtceu:circuits/ev')
        .inputFluids(Fluid.of('gtceu:soldering_alloy', 144))
        .itemOutputs('1x cyber_ware_port:heart_upgrades_coupler')
        .duration(25 * 20)
        .EUt(GTValues.VA[GTValues.EV])

    // --- arm upgrades ---

    // bow: integrated compound launcher (HV)
    event.recipes.gtceu.cyberware_constructor('cw_arm_bow')
        .itemInputs('1x minecraft:bow', '2x gtceu:stainless_steel_plate', '1x gtceu:hv_electric_piston', '1x #gtceu:circuits/hv')
        .inputFluids(Fluid.of('gtceu:soldering_alloy', 72))
        .itemOutputs('1x cyber_ware_port:arm_upgrades_bow')
        .duration(20 * 20)
        .EUt(GTValues.VA[GTValues.HV])

    // claws: retractable stainless blades (HV)
    event.recipes.gtceu.cyberware_constructor('cw_hand_claws')
        .itemInputs('2x gtceu:stainless_steel_rod', '1x gtceu:hv_electric_piston', '1x #gtceu:circuits/hv')
        .inputFluids(Fluid.of('gtceu:soldering_alloy', 72))
        .itemOutputs('1x cyber_ware_port:hand_upgrades_claws')
        .duration(20 * 20)
        .EUt(GTValues.VA[GTValues.HV])

    // mining drill: integrated rotary drill (HV)
    event.recipes.gtceu.cyberware_constructor('cw_hand_mining')
        .itemInputs(
            '2x gtceu:stainless_steel_plate',
            '1x gtceu:hv_electric_motor',
            '1x gtceu:hv_electric_piston',
            '1x #gtceu:circuits/hv'
        )
        .inputFluids(Fluid.of('gtceu:soldering_alloy', 144))
        .itemOutputs('1x cyber_ware_port:hand_upgrades_mining')
        .duration(25 * 20)
        .EUt(GTValues.VA[GTValues.HV])

    // craft hands: precision multi-finger manipulation (EV)
    event.recipes.gtceu.cyberware_constructor('cw_hand_craft_hands')
        .itemInputs('4x gtceu:ev_electric_piston', '2x gtceu:titanium_plate', '1x #gtceu:circuits/ev')
        .inputFluids(Fluid.of('gtceu:soldering_alloy', 288))
        .itemOutputs('1x cyber_ware_port:hand_upgrades_craft_hands')
        .duration(30 * 20)
        .EUt(GTValues.VA[GTValues.EV])

    // --- leg upgrades (HV) ---

    event.recipes.gtceu.cyberware_constructor('cw_leg_jump_boost')
        .itemInputs('2x gtceu:hv_electric_piston', '1x gtceu:stainless_steel_plate', '1x #gtceu:circuits/hv')
        .inputFluids(Fluid.of('gtceu:soldering_alloy', 72))
        .itemOutputs('1x cyber_ware_port:leg_upgrades_jump_boost')
        .duration(20 * 20)
        .EUt(GTValues.VA[GTValues.HV])

    // rubber_plate kept: thematic for shock-absorbing pads
    event.recipes.gtceu.cyberware_constructor('cw_leg_fall_damage')
        .itemInputs(
            '2x gtceu:stainless_steel_plate',
            '1x gtceu:hv_electric_piston',
            '2x gtceu:rubber_plate',
            '1x #gtceu:circuits/hv'
        )
        .inputFluids(Fluid.of('gtceu:soldering_alloy', 72))
        .itemOutputs('1x cyber_ware_port:leg_upgrades_fall_damage')
        .duration(20 * 20)
        .EUt(GTValues.VA[GTValues.HV])

    // --- foot upgrades (HV) ---

    event.recipes.gtceu.cyberware_constructor('cw_foot_aqua')
        .itemInputs('2x gtceu:stainless_steel_plate', '2x gtceu:hv_electric_pump', '1x #gtceu:circuits/hv')
        .inputFluids(Fluid.of('gtceu:soldering_alloy', 72))
        .itemOutputs('1x cyber_ware_port:foot_upgrades_aqua')
        .duration(20 * 20)
        .EUt(GTValues.VA[GTValues.HV])

    event.recipes.gtceu.cyberware_constructor('cw_foot_spurs')
        .itemInputs('2x gtceu:stainless_steel_rod', '1x #gtceu:circuits/hv')
        .inputFluids(Fluid.of('gtceu:soldering_alloy', 36))
        .itemOutputs('1x cyber_ware_port:foot_upgrades_spurs')
        .duration(10 * 20)
        .EUt(GTValues.VA[GTValues.HV])

    event.recipes.gtceu.cyberware_constructor('cw_foot_wheels')
        .itemInputs('2x gtceu:stainless_steel_plate', '2x gtceu:hv_electric_motor', '1x #gtceu:circuits/hv')
        .inputFluids(Fluid.of('gtceu:soldering_alloy', 72))
        .itemOutputs('1x cyber_ware_port:foot_upgrades_wheels')
        .duration(20 * 20)
        .EUt(GTValues.VA[GTValues.HV])

    // --- bone upgrades ---

    // bonelacing: titanium skeletal reinforcement (HV)
    event.recipes.gtceu.cyberware_constructor('cw_bone_bonelacing')
        .itemInputs('2x gtceu:titanium_plate', '1x gtceu:stainless_steel_rod', '1x #gtceu:circuits/hv')
        .inputFluids(Fluid.of('gtceu:soldering_alloy', 72))
        .itemOutputs('1x cyber_ware_port:bone_upgrades_bonelacing')
        .duration(20 * 20)
        .EUt(GTValues.VA[GTValues.HV])

    // boneflex: flexible carbon-rubber reinforcement (HV)
    event.recipes.gtceu.cyberware_constructor('cw_bone_boneflex')
        .itemInputs('1x gtceu:titanium_plate', '1x gtceu:rubber_plate', '1x #gtceu:circuits/hv')
        .inputFluids(Fluid.of('gtceu:soldering_alloy', 36))
        .itemOutputs('1x cyber_ware_port:bone_upgrades_boneflex')
        .duration(15 * 20)
        .EUt(GTValues.VA[GTValues.HV])

    // bonebattery: bioelectric energy stored in hollow bone (EV)
    event.recipes.gtceu.cyberware_constructor('cw_bone_bonebattery')
        .itemInputs('2x gtceu:titanium_plate', '1x gtceu:ev_field_generator', '1x #gtceu:circuits/ev')
        .inputFluids(Fluid.of('gtceu:soldering_alloy', 144))
        .itemOutputs('1x cyber_ware_port:bone_upgrades_bonebattery')
        .duration(25 * 20)
        .EUt(GTValues.VA[GTValues.EV])

    // --- muscle upgrades (EV) ---

    // muscle replacements: full titanium servomuscle
    event.recipes.gtceu.cyberware_constructor('cw_muscle_replacements')
        .itemInputs(
            '2x gtceu:titanium_plate',
            '2x gtceu:ev_electric_piston',
            '1x gtceu:ev_electric_motor',
            '1x #gtceu:circuits/ev'
        )
        .inputFluids(Fluid.of('gtceu:soldering_alloy', 288))
        .itemOutputs('1x cyber_ware_port:muscle_upgrades_muscle_replacements')
        .duration(30 * 20)
        .EUt(GTValues.VA[GTValues.EV])

    // wired reflexes: neural fiber speed-mesh
    event.recipes.gtceu.cyberware_constructor('cw_muscle_wired_reflexes')
        .itemInputs('4x gtceu:fine_copper_wire', '1x gtceu:ev_emitter', '1x #gtceu:circuits/ev')
        .inputFluids(Fluid.of('gtceu:soldering_alloy', 144))
        .itemOutputs('1x cyber_ware_port:muscle_upgrades_wired_reflexes')
        .duration(25 * 20)
        .EUt(GTValues.VA[GTValues.EV])

    // --- skin upgrades ---

    // subdermal spikes: retractable combat rods (HV)
    event.recipes.gtceu.cyberware_constructor('cw_skin_subdermal_spikes')
        .itemInputs('3x gtceu:stainless_steel_rod', '1x gtceu:hv_electric_piston', '1x #gtceu:circuits/hv')
        .inputFluids(Fluid.of('gtceu:soldering_alloy', 72))
        .itemOutputs('1x cyber_ware_port:skin_upgrades_subdermal_spikes')
        .duration(20 * 20)
        .EUt(GTValues.VA[GTValues.HV])

    // fake skin: synthetic camouflage layer (HV)
    event.recipes.gtceu.cyberware_constructor('cw_skin_fake_skin')
        .itemInputs('2x minecraft:leather', '2x gtceu:rubber_plate', '1x gtceu:hv_electric_pump', '1x #gtceu:circuits/hv')
        .inputFluids(Fluid.of('gtceu:soldering_alloy', 72))
        .itemOutputs('1x cyber_ware_port:skin_upgrades_fake_skin')
        .duration(20 * 20)
        .EUt(GTValues.VA[GTValues.HV])

    // immuno: microinjector immune booster (HV)
    event.recipes.gtceu.cyberware_constructor('cw_skin_immuno')
        .itemInputs('1x gtceu:hv_electric_pump', '2x gtceu:smd_transistor', '1x #gtceu:circuits/hv')
        .inputFluids(Fluid.of('gtceu:soldering_alloy', 72))
        .itemOutputs('1x cyber_ware_port:skin_upgrades_immuno')
        .duration(20 * 20)
        .EUt(GTValues.VA[GTValues.HV])

    // solar skin: photovoltaic subdermal cells (EV)
    event.recipes.gtceu.cyberware_constructor('cw_skin_solar_skin')
        .itemInputs(
            '2x gtceu:silicon_ingot',
            '2x gtceu:glass_lens',
            '1x gtceu:ev_emitter',
            '1x #gtceu:circuits/ev'
        )
        .inputFluids(Fluid.of('gtceu:soldering_alloy', 144))
        .itemOutputs('1x cyber_ware_port:skin_upgrades_solar_skin')
        .duration(25 * 20)
        .EUt(GTValues.VA[GTValues.EV])

    // --- lower organ upgrades ---

    // adrenaline: synthetic adrenaline injector (HV)
    // sugar kept: thematic for glucose precursor
    event.recipes.gtceu.cyberware_constructor('cw_lower_adrenaline')
        .itemInputs('1x gtceu:hv_electric_pump', '1x minecraft:sugar', '1x #gtceu:circuits/hv')
        .inputFluids(Fluid.of('gtceu:soldering_alloy', 72))
        .itemOutputs('1x cyber_ware_port:lower_organs_upgrades_adrenaline')
        .duration(20 * 20)
        .EUt(GTValues.VA[GTValues.HV])

    // battery: internal capacitor bank (EV)
    event.recipes.gtceu.cyberware_constructor('cw_lower_battery')
        .itemInputs(
            '2x gtceu:titanium_plate',
            '2x gtceu:silicon_ingot',
            '1x gtceu:ev_field_generator',
            '1x #gtceu:circuits/ev'
        )
        .inputFluids(Fluid.of('gtceu:soldering_alloy', 288))
        .itemOutputs('1x cyber_ware_port:lower_organs_upgrades_battery')
        .duration(30 * 20)
        .EUt(GTValues.VA[GTValues.EV])

    // liver filter: activated carbon toxin scrubber (HV)
    // charcoal kept: thematic for activated carbon filtration
    event.recipes.gtceu.cyberware_constructor('cw_lower_liver_filter')
        .itemInputs(
            '2x gtceu:stainless_steel_plate',
            '1x gtceu:hv_electric_pump',
            '1x minecraft:charcoal',
            '1x #gtceu:circuits/hv'
        )
        .inputFluids(Fluid.of('gtceu:soldering_alloy', 72))
        .itemOutputs('1x cyber_ware_port:lower_organs_upgrades_liver_filter')
        .duration(20 * 20)
        .EUt(GTValues.VA[GTValues.HV])

    // metabolic: peristaltic metabolic regulator (HV)
    event.recipes.gtceu.cyberware_constructor('cw_lower_metabolic')
        .itemInputs('1x gtceu:hv_electric_piston', '1x gtceu:hv_electric_pump', '1x #gtceu:circuits/hv')
        .inputFluids(Fluid.of('gtceu:soldering_alloy', 72))
        .itemOutputs('1x cyber_ware_port:lower_organs_upgrades_metabolic')
        .duration(20 * 20)
        .EUt(GTValues.VA[GTValues.HV])

    // --- lung upgrades ---

    // oxygen: integrated O2 microtank (HV)
    event.recipes.gtceu.cyberware_constructor('cw_lungs_oxygen')
        .itemInputs('2x gtceu:stainless_steel_plate', '1x gtceu:hv_electric_pump', '1x #gtceu:circuits/hv')
        .inputFluids(Fluid.of('gtceu:soldering_alloy', 72))
        .itemOutputs('1x cyber_ware_port:lungs_upgrades_oxygen')
        .duration(20 * 20)
        .EUt(GTValues.VA[GTValues.HV])

    // hyperoxygenation: high-pressure O2 delivery system (EV)
    event.recipes.gtceu.cyberware_constructor('cw_lungs_hyperoxygenation')
        .itemInputs(
            '2x gtceu:titanium_plate',
            '1x gtceu:ev_electric_pump',
            '1x gtceu:ev_field_generator',
            '1x #gtceu:circuits/ev'
        )
        .inputFluids(Fluid.of('gtceu:soldering_alloy', 288))
        .itemOutputs('1x cyber_ware_port:lungs_upgrades_hyperoxygenation')
        .duration(30 * 20)
        .EUt(GTValues.VA[GTValues.EV])

})
