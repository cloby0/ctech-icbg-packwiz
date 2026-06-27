ServerEvents.recipes(event => {
    const removeIds = [
        'draconicevolution:modules/module_core',
        'draconicevolution:modules/item_draconium_aoe',
        'draconicevolution:modules/item_draconium_auto_feed',
        'draconicevolution:modules/item_draconium_damage',
        'draconicevolution:modules/item_draconium_energy',
        'draconicevolution:modules/item_draconium_jump',
        'draconicevolution:modules/item_draconium_speed',
        'draconicevolution:modules/item_wyvern_aoe',
        'draconicevolution:modules/item_wyvern_aqua_adapt',
        'draconicevolution:modules/item_wyvern_auto_feed',
        'draconicevolution:modules/item_wyvern_auto_fire',
        'draconicevolution:modules/item_wyvern_damage',
        'draconicevolution:modules/item_wyvern_ender_collection',
        'draconicevolution:modules/item_wyvern_energy',
        'draconicevolution:modules/item_wyvern_energy_link',
        'draconicevolution:modules/item_wyvern_flight',
        'draconicevolution:modules/item_wyvern_hill_step',
        'draconicevolution:modules/item_wyvern_jump',
        'draconicevolution:modules/item_wyvern_junk_filter',
        'draconicevolution:modules/item_wyvern_large_shield_capacity',
        'draconicevolution:modules/item_wyvern_mining_stability',
        'draconicevolution:modules/item_wyvern_night_vision',
        'draconicevolution:modules/item_wyvern_proj_accuracy',
        'draconicevolution:modules/item_wyvern_proj_damage',
        'draconicevolution:modules/item_wyvern_proj_grav_comp',
        'draconicevolution:modules/item_wyvern_proj_penetration',
        'draconicevolution:modules/item_wyvern_proj_velocity',
        'draconicevolution:modules/item_wyvern_shield_capacity',
        'draconicevolution:modules/item_wyvern_shield_control',
        'draconicevolution:modules/item_wyvern_shield_recovery',
        'draconicevolution:modules/item_wyvern_speed',
        'draconicevolution:modules/item_wyvern_tree_harvest',
        'draconicevolution:modules/item_wyvern_undying',
        'draconicevolution:modules/item_draconic_aoe',
        'draconicevolution:modules/item_draconic_auto_feed',
        'draconicevolution:modules/item_draconic_damage',
        'draconicevolution:modules/item_draconic_ender_collection',
        'draconicevolution:modules/item_draconic_energy',
        'draconicevolution:modules/item_draconic_energy_link',
        'draconicevolution:modules/item_draconic_flight',
        'draconicevolution:modules/item_draconic_jump',
        'draconicevolution:modules/item_draconic_large_shield_capacity',
        'draconicevolution:modules/item_draconic_proj_accuracy',
        'draconicevolution:modules/item_draconic_proj_anti_immune',
        'draconicevolution:modules/item_draconic_proj_damage',
        'draconicevolution:modules/item_draconic_proj_grav_comp',
        'draconicevolution:modules/item_draconic_proj_penetration',
        'draconicevolution:modules/item_draconic_proj_velocity',
        'draconicevolution:modules/item_draconic_shield_capacity',
        'draconicevolution:modules/item_draconic_shield_control',
        'draconicevolution:modules/item_draconic_shield_recovery',
        'draconicevolution:modules/item_draconic_speed',
        'draconicevolution:modules/item_draconic_tree_harvest',
        'draconicevolution:modules/item_draconic_undying',
        'draconicevolution:modules/item_chaotic_aoe',
        'draconicevolution:modules/item_chaotic_damage',
        'draconicevolution:modules/item_chaotic_energy',
        'draconicevolution:modules/item_chaotic_energy_link',
        'draconicevolution:modules/item_chaotic_flight',
        'draconicevolution:modules/item_chaotic_jump',
        'draconicevolution:modules/item_chaotic_large_shield_capacity',
        'draconicevolution:modules/item_chaotic_proj_accuracy',
        'draconicevolution:modules/item_chaotic_proj_damage',
        'draconicevolution:modules/item_chaotic_proj_grav_comp',
        'draconicevolution:modules/item_chaotic_proj_penetration',
        'draconicevolution:modules/item_chaotic_proj_velocity',
        'draconicevolution:modules/item_chaotic_shield_capacity',
        'draconicevolution:modules/item_chaotic_shield_control',
        'draconicevolution:modules/item_chaotic_shield_recovery',
        'draconicevolution:modules/item_chaotic_speed',
        'draconicevolution:modules/item_chaotic_tree_harvest',
        'draconicevolution:modules/item_chaotic_undying',
    ]

    for (let i = 0; i < removeIds.length; i++) {
        event.remove({ id: removeIds[i] })
    }


    event.recipes.gtceu.assembler('de_module_draconium_aoe')
        .itemInputs('1x draconicevolution:draconium_core', '1x draconicevolution:module_core',
            '4x gtceu:draconium_plate', '1x gtceu:zpm_field_generator', '1x #gtceu:circuits/zpm')
        .inputFluids(Fluid.of('kubejs:draconic_computation', 250))
        .itemOutputs('1x draconicevolution:item_draconium_aoe')
        .duration(200).EUt(GTValues.VA[GTValues.ZPM])

    event.recipes.gtceu.assembler('de_module_draconium_auto_feed')
        .itemInputs('1x draconicevolution:draconium_core', '1x draconicevolution:module_core',
            '4x gtceu:draconium_plate', '1x gtceu:zpm_robot_arm', '1x minecraft:golden_apple')
        .inputFluids(Fluid.of('kubejs:draconic_computation', 250))
        .itemOutputs('1x draconicevolution:item_draconium_auto_feed')
        .duration(200).EUt(GTValues.VA[GTValues.ZPM])

    event.recipes.gtceu.assembler('de_module_draconium_damage')
        .itemInputs('1x draconicevolution:draconium_core', '1x draconicevolution:module_core',
            '4x gtceu:draconium_plate', '1x gtceu:zpm_emitter', '1x #gtceu:circuits/zpm')
        .inputFluids(Fluid.of('kubejs:draconic_computation', 250))
        .itemOutputs('1x draconicevolution:item_draconium_damage')
        .duration(200).EUt(GTValues.VA[GTValues.ZPM])

    event.recipes.gtceu.assembler('de_module_draconium_energy')
        .itemInputs('1x draconicevolution:draconium_core', '1x draconicevolution:module_core',
            '4x gtceu:draconium_plate', '1x #gtceu:circuits/zpm')
        .inputFluids(Fluid.of('kubejs:draconic_computation', 250))
        .itemOutputs('1x draconicevolution:item_draconium_energy')
        .duration(200).EUt(GTValues.VA[GTValues.ZPM])

    event.recipes.gtceu.assembler('de_module_draconium_jump')
        .itemInputs('1x draconicevolution:draconium_core', '1x draconicevolution:module_core',
            '4x gtceu:draconium_plate', '1x gtceu:zpm_electric_piston', '1x #gtceu:circuits/zpm')
        .inputFluids(Fluid.of('kubejs:draconic_computation', 250))
        .itemOutputs('1x draconicevolution:item_draconium_jump')
        .duration(200).EUt(GTValues.VA[GTValues.ZPM])

    event.recipes.gtceu.assembler('de_module_draconium_speed')
        .itemInputs('1x draconicevolution:draconium_core', '1x draconicevolution:module_core',
            '4x gtceu:draconium_plate', '1x gtceu:zpm_electric_motor', '1x #gtceu:circuits/zpm')
        .inputFluids(Fluid.of('kubejs:draconic_computation', 250))
        .itemOutputs('1x draconicevolution:item_draconium_speed')
        .duration(200).EUt(GTValues.VA[GTValues.ZPM])


    event.recipes.gtceu.assembler('de_module_wyvern_aoe')
        .itemInputs('1x draconicevolution:item_draconium_aoe', '2x draconicevolution:wyvern_core',
            '4x gtceu:draconium_plate', '1x gtceu:uv_field_generator', '1x #gtceu:circuits/uv')
        .inputFluids(Fluid.of('kubejs:draconic_computation', 500))
        .itemOutputs('1x draconicevolution:item_wyvern_aoe')
        .duration(300).EUt(GTValues.VA[GTValues.UV])

    event.recipes.gtceu.assembler('de_module_wyvern_aqua_adapt')
        .itemInputs('1x minecraft:heart_of_the_sea', '2x draconicevolution:wyvern_core',
            '4x gtceu:draconium_plate', '1x gtceu:uv_field_generator', '1x #gtceu:circuits/uv')
        .inputFluids(Fluid.of('kubejs:draconic_computation', 500))
        .itemOutputs('1x draconicevolution:item_wyvern_aqua_adapt')
        .duration(300).EUt(GTValues.VA[GTValues.UV])

    event.recipes.gtceu.assembler('de_module_wyvern_auto_feed')
        .itemInputs('1x draconicevolution:item_draconium_auto_feed', '2x draconicevolution:wyvern_core',
            '4x gtceu:draconium_plate', '1x gtceu:uv_robot_arm', '1x #gtceu:circuits/uv')
        .inputFluids(Fluid.of('kubejs:draconic_computation', 500))
        .itemOutputs('1x draconicevolution:item_wyvern_auto_feed')
        .duration(300).EUt(GTValues.VA[GTValues.UV])

    event.recipes.gtceu.assembler('de_module_wyvern_auto_fire')
        .itemInputs('1x minecraft:bow', '2x draconicevolution:wyvern_core',
            '4x gtceu:draconium_plate', '2x gtceu:uv_electric_motor', '1x #gtceu:circuits/uv')
        .inputFluids(Fluid.of('kubejs:draconic_computation', 500))
        .itemOutputs('1x draconicevolution:item_wyvern_auto_fire')
        .duration(300).EUt(GTValues.VA[GTValues.UV])

    event.recipes.gtceu.assembler('de_module_wyvern_damage')
        .itemInputs('1x draconicevolution:item_draconium_damage', '2x draconicevolution:wyvern_core',
            '4x gtceu:draconium_plate', '1x gtceu:uv_emitter', '1x #gtceu:circuits/uv')
        .inputFluids(Fluid.of('kubejs:draconic_computation', 500))
        .itemOutputs('1x draconicevolution:item_wyvern_damage')
        .duration(300).EUt(GTValues.VA[GTValues.UV])

    event.recipes.gtceu.assembler('de_module_wyvern_ender_collection')
        .itemInputs('1x minecraft:ender_eye', '2x draconicevolution:wyvern_core',
            '4x gtceu:draconium_plate', '1x gtceu:uv_field_generator', '1x #gtceu:circuits/uv')
        .inputFluids(Fluid.of('kubejs:draconic_computation', 500))
        .itemOutputs('1x draconicevolution:item_wyvern_ender_collection')
        .duration(300).EUt(GTValues.VA[GTValues.UV])

    event.recipes.gtceu.assembler('de_module_wyvern_energy')
        .itemInputs('1x draconicevolution:item_draconium_energy', '2x draconicevolution:wyvern_core',
            '4x gtceu:draconium_plate', '1x #gtceu:circuits/uv')
        .inputFluids(Fluid.of('kubejs:draconic_computation', 500))
        .itemOutputs('1x draconicevolution:item_wyvern_energy')
        .duration(300).EUt(GTValues.VA[GTValues.UV])

    event.recipes.gtceu.assembler('de_module_wyvern_energy_link')
        .itemInputs('1x minecraft:end_crystal', '1x draconicevolution:basic_wireless_crystal',
            '2x draconicevolution:wyvern_core', '4x gtceu:draconium_plate', '1x gtceu:uv_emitter')
        .inputFluids(Fluid.of('kubejs:draconic_computation', 500))
        .itemOutputs('1x draconicevolution:item_wyvern_energy_link')
        .duration(300).EUt(GTValues.VA[GTValues.UV])

    event.recipes.gtceu.assembler('de_module_wyvern_flight')
        .itemInputs('1x minecraft:elytra', '2x draconicevolution:wyvern_core',
            '4x gtceu:draconium_plate', '1x gtceu:uv_emitter', '1x #gtceu:circuits/uv')
        .inputFluids(Fluid.of('kubejs:draconic_computation', 500))
        .itemOutputs('1x draconicevolution:item_wyvern_flight')
        .duration(300).EUt(GTValues.VA[GTValues.UV])

    event.recipes.gtceu.assembler('de_module_wyvern_hill_step')
        .itemInputs('2x draconicevolution:wyvern_core', '4x gtceu:draconium_plate',
            '2x gtceu:uv_electric_piston', '1x #gtceu:circuits/uv')
        .inputFluids(Fluid.of('kubejs:draconic_computation', 500))
        .itemOutputs('1x draconicevolution:item_wyvern_hill_step')
        .duration(300).EUt(GTValues.VA[GTValues.UV])

    event.recipes.gtceu.assembler('de_module_wyvern_jump')
        .itemInputs('1x draconicevolution:item_draconium_jump', '2x draconicevolution:wyvern_core',
            '4x gtceu:draconium_plate', '1x gtceu:uv_electric_piston', '1x #gtceu:circuits/uv')
        .inputFluids(Fluid.of('kubejs:draconic_computation', 500))
        .itemOutputs('1x draconicevolution:item_wyvern_jump')
        .duration(300).EUt(GTValues.VA[GTValues.UV])

    event.recipes.gtceu.assembler('de_module_wyvern_junk_filter')
        .itemInputs('2x draconicevolution:wyvern_core', '4x gtceu:draconium_plate',
            '1x gtceu:uv_sensor', '1x #gtceu:circuits/uv')
        .inputFluids(Fluid.of('kubejs:draconic_computation', 500))
        .itemOutputs('1x draconicevolution:item_wyvern_junk_filter')
        .duration(300).EUt(GTValues.VA[GTValues.UV])

    event.recipes.gtceu.assembler('de_module_wyvern_large_shield_capacity')
        .itemInputs('4x draconicevolution:item_wyvern_shield_capacity', '2x draconicevolution:wyvern_core',
            '4x gtceu:draconium_plate')
        .inputFluids(Fluid.of('kubejs:draconic_computation', 500))
        .itemOutputs('1x draconicevolution:item_wyvern_large_shield_capacity')
        .duration(300).EUt(GTValues.VA[GTValues.UV])

    event.recipes.gtceu.assembler('de_module_wyvern_mining_stability')
        .itemInputs('2x draconicevolution:wyvern_core', '4x gtceu:draconium_plate',
            '2x gtceu:uv_electric_motor', '1x #gtceu:circuits/uv')
        .inputFluids(Fluid.of('kubejs:draconic_computation', 500))
        .itemOutputs('1x draconicevolution:item_wyvern_mining_stability')
        .duration(300).EUt(GTValues.VA[GTValues.UV])

    event.recipes.gtceu.assembler('de_module_wyvern_night_vision')
        .itemInputs('2x draconicevolution:wyvern_core', '4x gtceu:draconium_plate',
            '2x gtceu:uv_sensor', '1x #gtceu:circuits/uv')
        .inputFluids(Fluid.of('kubejs:draconic_computation', 500))
        .itemOutputs('1x draconicevolution:item_wyvern_night_vision')
        .duration(300).EUt(GTValues.VA[GTValues.UV])

    event.recipes.gtceu.assembler('de_module_wyvern_proj_accuracy')
        .itemInputs('2x draconicevolution:wyvern_core', '4x gtceu:draconium_plate',
            '1x gtceu:uv_sensor', '1x #gtceu:circuits/uv')
        .inputFluids(Fluid.of('kubejs:draconic_computation', 500))
        .itemOutputs('1x draconicevolution:item_wyvern_proj_accuracy')
        .duration(300).EUt(GTValues.VA[GTValues.UV])

    event.recipes.gtceu.assembler('de_module_wyvern_proj_damage')
        .itemInputs('2x draconicevolution:wyvern_core', '4x gtceu:draconium_plate',
            '1x gtceu:uv_emitter', '1x #gtceu:circuits/uv')
        .inputFluids(Fluid.of('kubejs:draconic_computation', 500))
        .itemOutputs('1x draconicevolution:item_wyvern_proj_damage')
        .duration(300).EUt(GTValues.VA[GTValues.UV])

    event.recipes.gtceu.assembler('de_module_wyvern_proj_grav_comp')
        .itemInputs('2x draconicevolution:wyvern_core', '4x gtceu:draconium_plate',
            '1x gtceu:uv_field_generator', '1x #gtceu:circuits/uv')
        .inputFluids(Fluid.of('kubejs:draconic_computation', 500))
        .itemOutputs('1x draconicevolution:item_wyvern_proj_grav_comp')
        .duration(300).EUt(GTValues.VA[GTValues.UV])

    event.recipes.gtceu.assembler('de_module_wyvern_proj_penetration')
        .itemInputs('2x draconicevolution:wyvern_core', '4x gtceu:draconium_plate',
            '2x gtceu:uv_electric_piston', '1x #gtceu:circuits/uv')
        .inputFluids(Fluid.of('kubejs:draconic_computation', 500))
        .itemOutputs('1x draconicevolution:item_wyvern_proj_penetration')
        .duration(300).EUt(GTValues.VA[GTValues.UV])

    event.recipes.gtceu.assembler('de_module_wyvern_proj_velocity')
        .itemInputs('2x draconicevolution:wyvern_core', '4x gtceu:draconium_plate',
            '1x gtceu:uv_electric_motor', '1x #gtceu:circuits/uv')
        .inputFluids(Fluid.of('kubejs:draconic_computation', 500))
        .itemOutputs('1x draconicevolution:item_wyvern_proj_velocity')
        .duration(300).EUt(GTValues.VA[GTValues.UV])

    event.recipes.gtceu.assembler('de_module_wyvern_shield_capacity')
        .itemInputs('2x draconicevolution:wyvern_core', '4x gtceu:draconium_plate',
            '2x minecraft:netherite_scrap', '1x #gtceu:circuits/uv')
        .inputFluids(Fluid.of('kubejs:draconic_computation', 500))
        .itemOutputs('1x draconicevolution:item_wyvern_shield_capacity')
        .duration(300).EUt(GTValues.VA[GTValues.UV])

    event.recipes.gtceu.assembler('de_module_wyvern_shield_control')
        .itemInputs('1x draconicevolution:dragon_heart', '1x draconicevolution:particle_generator',
            '2x draconicevolution:wyvern_core', '4x gtceu:draconium_plate', '1x gtceu:uv_sensor')
        .inputFluids(Fluid.of('kubejs:draconic_computation', 500))
        .itemOutputs('1x draconicevolution:item_wyvern_shield_control')
        .duration(300).EUt(GTValues.VA[GTValues.UV])

    event.recipes.gtceu.assembler('de_module_wyvern_shield_recovery')
        .itemInputs('2x draconicevolution:wyvern_core', '4x gtceu:draconium_plate',
            '1x gtceu:uv_robot_arm', '1x #gtceu:circuits/uv')
        .inputFluids(Fluid.of('kubejs:draconic_computation', 500))
        .itemOutputs('1x draconicevolution:item_wyvern_shield_recovery')
        .duration(300).EUt(GTValues.VA[GTValues.UV])

    event.recipes.gtceu.assembler('de_module_wyvern_speed')
        .itemInputs('1x draconicevolution:item_draconium_speed', '2x draconicevolution:wyvern_core',
            '4x gtceu:draconium_plate', '1x gtceu:uv_electric_motor', '1x #gtceu:circuits/uv')
        .inputFluids(Fluid.of('kubejs:draconic_computation', 500))
        .itemOutputs('1x draconicevolution:item_wyvern_speed')
        .duration(300).EUt(GTValues.VA[GTValues.UV])

    event.recipes.gtceu.assembler('de_module_wyvern_tree_harvest')
        .itemInputs('2x draconicevolution:wyvern_core', '4x gtceu:draconium_plate',
            '2x gtceu:uv_field_generator', '1x #gtceu:circuits/uv')
        .inputFluids(Fluid.of('kubejs:draconic_computation', 500))
        .itemOutputs('1x draconicevolution:item_wyvern_tree_harvest')
        .duration(300).EUt(GTValues.VA[GTValues.UV])

    event.recipes.gtceu.assembler('de_module_wyvern_undying')
        .itemInputs('1x minecraft:totem_of_undying', '1x draconicevolution:item_wyvern_shield_capacity',
            '2x draconicevolution:wyvern_core', '4x gtceu:draconium_plate', '1x gtceu:uv_robot_arm')
        .inputFluids(Fluid.of('kubejs:draconic_computation', 500))
        .itemOutputs('1x draconicevolution:item_wyvern_undying')
        .duration(300).EUt(GTValues.VA[GTValues.UV])


    event.recipes.gtceu.assembler('de_module_draconic_aoe')
        .itemInputs('1x draconicevolution:item_wyvern_aoe', '2x draconicevolution:awakened_core',
            '4x gtceu:awakened_draconium_plate', '1x gtceu:uhv_field_generator', '1x #gtceu:circuits/uhv')
        .inputFluids(Fluid.of('kubejs:draconic_computation', 1000))
        .itemOutputs('1x draconicevolution:item_draconic_aoe')
        .duration(400).EUt(GTValues.VA[GTValues.UHV])

    event.recipes.gtceu.assembler('de_module_draconic_auto_feed')
        .itemInputs('1x draconicevolution:item_wyvern_auto_feed', '2x draconicevolution:awakened_core',
            '4x gtceu:awakened_draconium_plate', '1x gtceu:uhv_robot_arm', '1x #gtceu:circuits/uhv')
        .inputFluids(Fluid.of('kubejs:draconic_computation', 1000))
        .itemOutputs('1x draconicevolution:item_draconic_auto_feed')
        .duration(400).EUt(GTValues.VA[GTValues.UHV])

    event.recipes.gtceu.assembler('de_module_draconic_damage')
        .itemInputs('1x draconicevolution:item_wyvern_damage', '1x minecraft:dragon_breath',
            '2x draconicevolution:awakened_core', '4x gtceu:awakened_draconium_plate', '1x gtceu:uhv_emitter')
        .inputFluids(Fluid.of('kubejs:draconic_computation', 1000))
        .itemOutputs('1x draconicevolution:item_draconic_damage')
        .duration(400).EUt(GTValues.VA[GTValues.UHV])

    event.recipes.gtceu.assembler('de_module_draconic_ender_collection')
        .itemInputs('1x draconicevolution:item_wyvern_ender_collection', '2x draconicevolution:awakened_core',
            '4x gtceu:awakened_draconium_plate', '1x gtceu:uhv_field_generator', '1x #gtceu:circuits/uhv')
        .inputFluids(Fluid.of('kubejs:draconic_computation', 1000))
        .itemOutputs('1x draconicevolution:item_draconic_ender_collection')
        .duration(400).EUt(GTValues.VA[GTValues.UHV])

    event.recipes.gtceu.assembler('de_module_draconic_energy')
        .itemInputs('1x draconicevolution:item_wyvern_energy', '2x draconicevolution:awakened_core',
            '4x gtceu:awakened_draconium_plate', '1x #gtceu:circuits/uhv')
        .inputFluids(Fluid.of('kubejs:draconic_computation', 1000))
        .itemOutputs('1x draconicevolution:item_draconic_energy')
        .duration(400).EUt(GTValues.VA[GTValues.UHV])

    event.recipes.gtceu.assembler('de_module_draconic_energy_link')
        .itemInputs('1x draconicevolution:item_wyvern_energy_link', '1x draconicevolution:wyvern_wireless_crystal',
            '1x minecraft:end_crystal', '2x draconicevolution:awakened_core', '4x gtceu:awakened_draconium_plate')
        .inputFluids(Fluid.of('kubejs:draconic_computation', 1000))
        .itemOutputs('1x draconicevolution:item_draconic_energy_link')
        .duration(400).EUt(GTValues.VA[GTValues.UHV])

    event.recipes.gtceu.assembler('de_module_draconic_flight')
        .itemInputs('1x draconicevolution:item_wyvern_flight', '2x draconicevolution:awakened_core',
            '4x gtceu:awakened_draconium_plate', '1x gtceu:uhv_emitter', '1x #gtceu:circuits/uhv')
        .inputFluids(Fluid.of('kubejs:draconic_computation', 1000))
        .itemOutputs('1x draconicevolution:item_draconic_flight')
        .duration(400).EUt(GTValues.VA[GTValues.UHV])

    event.recipes.gtceu.assembler('de_module_draconic_jump')
        .itemInputs('1x draconicevolution:item_wyvern_jump', '2x draconicevolution:awakened_core',
            '4x gtceu:awakened_draconium_plate', '1x gtceu:uhv_electric_piston', '1x #gtceu:circuits/uhv')
        .inputFluids(Fluid.of('kubejs:draconic_computation', 1000))
        .itemOutputs('1x draconicevolution:item_draconic_jump')
        .duration(400).EUt(GTValues.VA[GTValues.UHV])

    event.recipes.gtceu.assembler('de_module_draconic_large_shield_capacity')
        .itemInputs('4x draconicevolution:item_draconic_shield_capacity', '2x draconicevolution:awakened_core',
            '4x gtceu:awakened_draconium_plate')
        .inputFluids(Fluid.of('kubejs:draconic_computation', 1000))
        .itemOutputs('1x draconicevolution:item_draconic_large_shield_capacity')
        .duration(400).EUt(GTValues.VA[GTValues.UHV])

    event.recipes.gtceu.assembler('de_module_draconic_proj_accuracy')
        .itemInputs('1x draconicevolution:item_wyvern_proj_accuracy', '2x draconicevolution:awakened_core',
            '4x gtceu:awakened_draconium_plate', '1x gtceu:uhv_sensor', '1x #gtceu:circuits/uhv')
        .inputFluids(Fluid.of('kubejs:draconic_computation', 1000))
        .itemOutputs('1x draconicevolution:item_draconic_proj_accuracy')
        .duration(400).EUt(GTValues.VA[GTValues.UHV])

    event.recipes.gtceu.assembler('de_module_draconic_proj_anti_immune')
        .itemInputs('1x minecraft:wither_skeleton_skull', '1x minecraft:ender_eye',
            '2x draconicevolution:awakened_core', '4x gtceu:awakened_draconium_plate', '1x gtceu:uhv_emitter')
        .inputFluids(Fluid.of('kubejs:draconic_computation', 1000))
        .itemOutputs('1x draconicevolution:item_draconic_proj_anti_immune')
        .duration(400).EUt(GTValues.VA[GTValues.UHV])

    event.recipes.gtceu.assembler('de_module_draconic_proj_damage')
        .itemInputs('1x draconicevolution:item_wyvern_proj_damage', '2x draconicevolution:awakened_core',
            '4x gtceu:awakened_draconium_plate', '1x gtceu:uhv_emitter', '1x #gtceu:circuits/uhv')
        .inputFluids(Fluid.of('kubejs:draconic_computation', 1000))
        .itemOutputs('1x draconicevolution:item_draconic_proj_damage')
        .duration(400).EUt(GTValues.VA[GTValues.UHV])

    event.recipes.gtceu.assembler('de_module_draconic_proj_grav_comp')
        .itemInputs('1x draconicevolution:item_wyvern_proj_grav_comp', '2x draconicevolution:awakened_core',
            '4x gtceu:awakened_draconium_plate', '1x gtceu:uhv_field_generator', '1x #gtceu:circuits/uhv')
        .inputFluids(Fluid.of('kubejs:draconic_computation', 1000))
        .itemOutputs('1x draconicevolution:item_draconic_proj_grav_comp')
        .duration(400).EUt(GTValues.VA[GTValues.UHV])

    event.recipes.gtceu.assembler('de_module_draconic_proj_penetration')
        .itemInputs('1x draconicevolution:item_wyvern_proj_penetration', '2x draconicevolution:awakened_core',
            '4x gtceu:awakened_draconium_plate', '1x gtceu:uhv_electric_piston', '1x #gtceu:circuits/uhv')
        .inputFluids(Fluid.of('kubejs:draconic_computation', 1000))
        .itemOutputs('1x draconicevolution:item_draconic_proj_penetration')
        .duration(400).EUt(GTValues.VA[GTValues.UHV])

    event.recipes.gtceu.assembler('de_module_draconic_proj_velocity')
        .itemInputs('1x draconicevolution:item_wyvern_proj_velocity', '2x draconicevolution:awakened_core',
            '4x gtceu:awakened_draconium_plate', '1x gtceu:uhv_electric_motor', '1x #gtceu:circuits/uhv')
        .inputFluids(Fluid.of('kubejs:draconic_computation', 1000))
        .itemOutputs('1x draconicevolution:item_draconic_proj_velocity')
        .duration(400).EUt(GTValues.VA[GTValues.UHV])

    event.recipes.gtceu.assembler('de_module_draconic_shield_capacity')
        .itemInputs('1x draconicevolution:item_wyvern_shield_capacity', '2x draconicevolution:awakened_core',
            '4x gtceu:awakened_draconium_plate', '2x minecraft:netherite_ingot', '1x #gtceu:circuits/uhv')
        .inputFluids(Fluid.of('kubejs:draconic_computation', 1000))
        .itemOutputs('1x draconicevolution:item_draconic_shield_capacity')
        .duration(400).EUt(GTValues.VA[GTValues.UHV])

    event.recipes.gtceu.assembler('de_module_draconic_shield_control')
        .itemInputs('1x draconicevolution:item_wyvern_shield_control', '2x draconicevolution:awakened_core',
            '4x gtceu:awakened_draconium_plate', '1x gtceu:uhv_sensor', '1x #gtceu:circuits/uhv')
        .inputFluids(Fluid.of('kubejs:draconic_computation', 1000))
        .itemOutputs('1x draconicevolution:item_draconic_shield_control')
        .duration(400).EUt(GTValues.VA[GTValues.UHV])

    event.recipes.gtceu.assembler('de_module_draconic_shield_recovery')
        .itemInputs('1x draconicevolution:item_wyvern_shield_recovery', '2x draconicevolution:awakened_core',
            '4x gtceu:awakened_draconium_plate', '1x gtceu:uhv_robot_arm', '1x #gtceu:circuits/uhv')
        .inputFluids(Fluid.of('kubejs:draconic_computation', 1000))
        .itemOutputs('1x draconicevolution:item_draconic_shield_recovery')
        .duration(400).EUt(GTValues.VA[GTValues.UHV])

    event.recipes.gtceu.assembler('de_module_draconic_speed')
        .itemInputs('1x draconicevolution:item_wyvern_speed', '2x draconicevolution:awakened_core',
            '4x gtceu:awakened_draconium_plate', '1x gtceu:uhv_electric_motor', '1x #gtceu:circuits/uhv')
        .inputFluids(Fluid.of('kubejs:draconic_computation', 1000))
        .itemOutputs('1x draconicevolution:item_draconic_speed')
        .duration(400).EUt(GTValues.VA[GTValues.UHV])

    event.recipes.gtceu.assembler('de_module_draconic_tree_harvest')
        .itemInputs('1x draconicevolution:item_wyvern_tree_harvest', '2x draconicevolution:awakened_core',
            '4x gtceu:awakened_draconium_plate', '1x gtceu:uhv_field_generator', '1x #gtceu:circuits/uhv')
        .inputFluids(Fluid.of('kubejs:draconic_computation', 1000))
        .itemOutputs('1x draconicevolution:item_draconic_tree_harvest')
        .duration(400).EUt(GTValues.VA[GTValues.UHV])

    event.recipes.gtceu.assembler('de_module_draconic_undying')
        .itemInputs('1x draconicevolution:item_wyvern_undying', '1x draconicevolution:item_draconic_shield_capacity',
            '2x draconicevolution:awakened_core', '4x gtceu:awakened_draconium_plate', '1x gtceu:uhv_robot_arm')
        .inputFluids(Fluid.of('kubejs:draconic_computation', 1000))
        .itemOutputs('1x draconicevolution:item_draconic_undying')
        .duration(400).EUt(GTValues.VA[GTValues.UHV])


    event.recipes.gtceu.assembler('de_module_chaotic_aoe')
        .itemInputs('1x draconicevolution:item_draconic_aoe', '2x draconicevolution:chaotic_core',
            '4x gtceu:awakened_draconium_plate', '1x gtceu:uev_field_generator', '1x #gtceu:circuits/uev')
        .inputFluids(Fluid.of('kubejs:chaos_matrix_fluid', 1000))
        .itemOutputs('1x draconicevolution:item_chaotic_aoe')
        .duration(600).EUt(GTValues.VA[GTValues.UEV])

    event.recipes.gtceu.assembler('de_module_chaotic_damage')
        .itemInputs('1x draconicevolution:item_draconic_damage', '2x draconicevolution:chaotic_core',
            '4x gtceu:awakened_draconium_plate', '1x gtceu:uev_emitter', '1x #gtceu:circuits/uev')
        .inputFluids(Fluid.of('kubejs:chaos_matrix_fluid', 1000))
        .itemOutputs('1x draconicevolution:item_chaotic_damage')
        .duration(600).EUt(GTValues.VA[GTValues.UEV])

    event.recipes.gtceu.assembler('de_module_chaotic_energy')
        .itemInputs('1x draconicevolution:item_draconic_energy', '2x draconicevolution:chaotic_core',
            '4x gtceu:awakened_draconium_plate', '1x #gtceu:circuits/uev')
        .inputFluids(Fluid.of('kubejs:chaos_matrix_fluid', 1000))
        .itemOutputs('1x draconicevolution:item_chaotic_energy')
        .duration(600).EUt(GTValues.VA[GTValues.UEV])

    event.recipes.gtceu.assembler('de_module_chaotic_energy_link')
        .itemInputs('1x draconicevolution:item_draconic_energy_link', '1x draconicevolution:draconic_wireless_crystal',
            '1x minecraft:end_crystal', '2x draconicevolution:chaotic_core', '4x gtceu:awakened_draconium_plate')
        .inputFluids(Fluid.of('kubejs:chaos_matrix_fluid', 1000))
        .itemOutputs('1x draconicevolution:item_chaotic_energy_link')
        .duration(600).EUt(GTValues.VA[GTValues.UEV])

    event.recipes.gtceu.assembler('de_module_chaotic_flight')
        .itemInputs('1x draconicevolution:item_draconic_flight', '2x draconicevolution:chaotic_core',
            '4x gtceu:awakened_draconium_plate', '1x gtceu:uev_emitter', '1x #gtceu:circuits/uev')
        .inputFluids(Fluid.of('kubejs:chaos_matrix_fluid', 1000))
        .itemOutputs('1x draconicevolution:item_chaotic_flight')
        .duration(600).EUt(GTValues.VA[GTValues.UEV])

    event.recipes.gtceu.assembler('de_module_chaotic_jump')
        .itemInputs('1x draconicevolution:item_draconic_jump', '2x draconicevolution:chaotic_core',
            '4x gtceu:awakened_draconium_plate', '1x gtceu:uev_electric_piston', '1x #gtceu:circuits/uev')
        .inputFluids(Fluid.of('kubejs:chaos_matrix_fluid', 1000))
        .itemOutputs('1x draconicevolution:item_chaotic_jump')
        .duration(600).EUt(GTValues.VA[GTValues.UEV])

    event.recipes.gtceu.assembler('de_module_chaotic_large_shield_capacity')
        .itemInputs('4x draconicevolution:item_chaotic_shield_capacity', '2x draconicevolution:chaotic_core',
            '4x gtceu:awakened_draconium_plate')
        .inputFluids(Fluid.of('kubejs:chaos_matrix_fluid', 1000))
        .itemOutputs('1x draconicevolution:item_chaotic_large_shield_capacity')
        .duration(600).EUt(GTValues.VA[GTValues.UEV])

    event.recipes.gtceu.assembler('de_module_chaotic_proj_accuracy')
        .itemInputs('1x draconicevolution:item_draconic_proj_accuracy', '2x draconicevolution:chaotic_core',
            '4x gtceu:awakened_draconium_plate', '1x gtceu:uev_sensor', '1x #gtceu:circuits/uev')
        .inputFluids(Fluid.of('kubejs:chaos_matrix_fluid', 1000))
        .itemOutputs('1x draconicevolution:item_chaotic_proj_accuracy')
        .duration(600).EUt(GTValues.VA[GTValues.UEV])

    event.recipes.gtceu.assembler('de_module_chaotic_proj_damage')
        .itemInputs('1x draconicevolution:item_draconic_proj_damage', '2x draconicevolution:chaotic_core',
            '4x gtceu:awakened_draconium_plate', '1x gtceu:uev_emitter', '1x #gtceu:circuits/uev')
        .inputFluids(Fluid.of('kubejs:chaos_matrix_fluid', 1000))
        .itemOutputs('1x draconicevolution:item_chaotic_proj_damage')
        .duration(600).EUt(GTValues.VA[GTValues.UEV])

    event.recipes.gtceu.assembler('de_module_chaotic_proj_grav_comp')
        .itemInputs('1x draconicevolution:item_draconic_proj_grav_comp', '2x draconicevolution:chaotic_core',
            '4x gtceu:awakened_draconium_plate', '1x gtceu:uev_field_generator', '1x #gtceu:circuits/uev')
        .inputFluids(Fluid.of('kubejs:chaos_matrix_fluid', 1000))
        .itemOutputs('1x draconicevolution:item_chaotic_proj_grav_comp')
        .duration(600).EUt(GTValues.VA[GTValues.UEV])

    event.recipes.gtceu.assembler('de_module_chaotic_proj_penetration')
        .itemInputs('1x draconicevolution:item_draconic_proj_penetration', '2x draconicevolution:chaotic_core',
            '4x gtceu:awakened_draconium_plate', '1x gtceu:uev_electric_piston', '1x #gtceu:circuits/uev')
        .inputFluids(Fluid.of('kubejs:chaos_matrix_fluid', 1000))
        .itemOutputs('1x draconicevolution:item_chaotic_proj_penetration')
        .duration(600).EUt(GTValues.VA[GTValues.UEV])

    event.recipes.gtceu.assembler('de_module_chaotic_proj_velocity')
        .itemInputs('1x draconicevolution:item_draconic_proj_velocity', '2x draconicevolution:chaotic_core',
            '4x gtceu:awakened_draconium_plate', '1x gtceu:uev_electric_motor', '1x #gtceu:circuits/uev')
        .inputFluids(Fluid.of('kubejs:chaos_matrix_fluid', 1000))
        .itemOutputs('1x draconicevolution:item_chaotic_proj_velocity')
        .duration(600).EUt(GTValues.VA[GTValues.UEV])

    event.recipes.gtceu.assembler('de_module_chaotic_shield_capacity')
        .itemInputs('1x draconicevolution:item_draconic_shield_capacity', '2x draconicevolution:large_chaos_frag',
            '2x draconicevolution:chaotic_core', '4x gtceu:awakened_draconium_plate', '1x #gtceu:circuits/uev')
        .inputFluids(Fluid.of('kubejs:chaos_matrix_fluid', 1000))
        .itemOutputs('1x draconicevolution:item_chaotic_shield_capacity')
        .duration(600).EUt(GTValues.VA[GTValues.UEV])

    event.recipes.gtceu.assembler('de_module_chaotic_shield_control')
        .itemInputs('1x draconicevolution:item_draconic_shield_control', '2x draconicevolution:chaotic_core',
            '4x gtceu:awakened_draconium_plate', '1x gtceu:uev_sensor', '1x #gtceu:circuits/uev')
        .inputFluids(Fluid.of('kubejs:chaos_matrix_fluid', 1000))
        .itemOutputs('1x draconicevolution:item_chaotic_shield_control')
        .duration(600).EUt(GTValues.VA[GTValues.UEV])

    event.recipes.gtceu.assembler('de_module_chaotic_shield_recovery')
        .itemInputs('1x draconicevolution:item_draconic_shield_recovery', '2x draconicevolution:chaotic_core',
            '4x gtceu:awakened_draconium_plate', '1x gtceu:uev_robot_arm', '1x #gtceu:circuits/uev')
        .inputFluids(Fluid.of('kubejs:chaos_matrix_fluid', 1000))
        .itemOutputs('1x draconicevolution:item_chaotic_shield_recovery')
        .duration(600).EUt(GTValues.VA[GTValues.UEV])

    event.recipes.gtceu.assembler('de_module_chaotic_speed')
        .itemInputs('1x draconicevolution:item_draconic_speed', '2x draconicevolution:chaotic_core',
            '4x gtceu:awakened_draconium_plate', '1x gtceu:uev_electric_motor', '1x #gtceu:circuits/uev')
        .inputFluids(Fluid.of('kubejs:chaos_matrix_fluid', 1000))
        .itemOutputs('1x draconicevolution:item_chaotic_speed')
        .duration(600).EUt(GTValues.VA[GTValues.UEV])

    event.recipes.gtceu.assembler('de_module_chaotic_tree_harvest')
        .itemInputs('1x draconicevolution:item_draconic_tree_harvest', '2x draconicevolution:chaotic_core',
            '4x gtceu:awakened_draconium_plate', '1x gtceu:uev_field_generator', '1x #gtceu:circuits/uev')
        .inputFluids(Fluid.of('kubejs:chaos_matrix_fluid', 1000))
        .itemOutputs('1x draconicevolution:item_chaotic_tree_harvest')
        .duration(600).EUt(GTValues.VA[GTValues.UEV])

    event.recipes.gtceu.assembler('de_module_chaotic_undying')
        .itemInputs('1x draconicevolution:item_draconic_undying', '1x minecraft:enchanted_golden_apple',
            '2x draconicevolution:chaotic_core', '4x gtceu:awakened_draconium_plate', '1x gtceu:uev_robot_arm')
        .inputFluids(Fluid.of('kubejs:chaos_matrix_fluid', 1000))
        .itemOutputs('1x draconicevolution:item_chaotic_undying')
        .duration(600).EUt(GTValues.VA[GTValues.UEV])
})
