ServerEvents.recipes(event => {

    const removeIds = [
        'draconicevolution:components/draconium_core',
        'draconicevolution:components/wyvern_core',
        'draconicevolution:components/wyvern_energy_core',
        'draconicevolution:components/draconic_energy_core',
        'draconicevolution:components/chaotic_energy_core',
        'draconicevolution:machines/particle_generator',
        'draconicevolution:machines/generator',
        'draconicevolution:machines/grinder',
        'draconicevolution:machines/potentiometer',
        'draconicevolution:machines/energy_core',
        'draconicevolution:machines/energy_pylon',
        'draconicevolution:machines/energy_transfuser',
        'draconicevolution:machines/energy_core_stabilizer',
        'draconicevolution:machines/basic_relay_crystal',
        'draconicevolution:machines/basic_wireless_crystal',
        'draconicevolution:machines/wyvern_relay_crystal',
        'draconicevolution:machines/wyvern_wireless_crystal',
        'draconicevolution:machines/draconic_wireless_crystal',
        'draconicevolution:machines/reactor_prt_focus_ring',
        'draconicevolution:machines/reactor_prt_in_rotor',
        'draconicevolution:machines/reactor_prt_out_rotor',
        'draconicevolution:machines/reactor_prt_rotor_full',
        'draconicevolution:machines/reactor_prt_stab_frame',
        'draconicevolution:tools/dislocator',
        'draconicevolution:tools/magnet',
        'draconicevolution:tools/advanced_magnet',
        'draconicevolution:tools/crystal_binder',
        'draconicevolution:tools/p2p_dislocator_unbound',
        'draconicevolution:tools/player_dislocator_unbound',
        'draconicevolution:celestial_manipulator',
        'draconicevolution:disenchanter',
        'draconicevolution:dislocation_inhibitor',
        'draconicevolution:dislocator_pedestal',
        'draconicevolution:dislocator_receptacle',
        'draconicevolution:entity_detector',
        'draconicevolution:entity_detector_advanced',
        'draconicevolution:fluid_gate',
        'draconicevolution:flux_gate',
        'draconicevolution:infused_obsidian',
        'draconicevolution:rain_sensor',
    ]

    for (let i = 0; i < removeIds.length; i++) {
        event.remove({ id: removeIds[i] })
    }


    // --- Cores (draconium backbone) ---

    event.recipes.gtceu.assembler('de_draconium_core')
        .itemInputs(
            '4x gtceu:draconium_plate',
            '4x create:golden_sheet',
            '1x minecraft:diamond',
            '1x #gtceu:circuits/zpm'
        )
        .inputFluids(Fluid.of('gtceu:lubricant', 100))
        .itemOutputs('1x draconicevolution:draconium_core')
        .duration(300).EUt(GTValues.VA[GTValues.ZPM])

    event.recipes.gtceu.assembler('de_wyvern_core')
        .itemInputs(
            '4x gtceu:draconium_plate',
            '4x draconicevolution:draconium_core',
            '1x minecraft:nether_star'
        )
        .inputFluids(Fluid.of('kubejs:argent_energy', 1000))
        .itemOutputs('1x draconicevolution:wyvern_core')
        .duration(400).EUt(GTValues.VA[GTValues.UV])

    event.recipes.gtceu.assembler('de_wyvern_energy_core')
        .itemInputs(
            '4x gtceu:draconium_plate',
            '4x minecraft:redstone_block',
            '1x draconicevolution:draconium_core'
        )
        .inputFluids(Fluid.of('kubejs:argent_energy', 500))
        .itemOutputs('1x draconicevolution:wyvern_energy_core')
        .duration(300).EUt(GTValues.VA[GTValues.UV])

    event.recipes.gtceu.assembler('de_draconic_energy_core')
        .itemInputs(
            '4x gtceu:awakened_draconium_plate',
            '4x draconicevolution:wyvern_energy_core',
            '1x draconicevolution:wyvern_core'
        )
        .inputFluids(Fluid.of('kubejs:argent_energy', 2000))
        .itemOutputs('1x draconicevolution:draconic_energy_core')
        .duration(600).EUt(GTValues.VA[GTValues.UHV])

    event.recipes.gtceu.assembler('de_chaotic_energy_core')
        .itemInputs(
            '4x draconicevolution:medium_chaos_frag',
            '4x draconicevolution:draconic_energy_core',
            '1x draconicevolution:awakened_core'
        )
        .inputFluids(Fluid.of('kubejs:guardian_distillate', 2000))
        .itemOutputs('1x draconicevolution:chaotic_energy_core')
        .duration(800).EUt(GTValues.VA[GTValues.UEV])


    // --- Energy Core multiblock line ---

    event.recipes.gtceu.assembler('de_particle_generator')
        .itemInputs(
            '4x minecraft:redstone_block',
            '4x minecraft:blaze_rod',
            '1x draconicevolution:draconium_core',
            '1x #gtceu:circuits/zpm'
        )
        .inputFluids(Fluid.of('gtceu:lubricant', 100))
        .itemOutputs('1x draconicevolution:particle_generator')
        .duration(200).EUt(GTValues.VA[GTValues.ZPM])

    event.recipes.gtceu.assembler('de_energy_core_stabilizer')
        .itemInputs(
            '4x minecraft:diamond',
            '2x gtceu:draconium_plate',
            '1x draconicevolution:particle_generator'
        )
        .inputFluids(Fluid.of('kubejs:argent_energy', 500))
        .itemOutputs('1x draconicevolution:energy_core_stabilizer')
        .duration(300).EUt(GTValues.VA[GTValues.UV])

    event.recipes.gtceu.assembler('de_energy_core')
        .itemInputs(
            '6x gtceu:draconium_plate',
            '1x draconicevolution:wyvern_energy_core',
            '1x draconicevolution:wyvern_core'
        )
        .inputFluids(Fluid.of('kubejs:argent_energy', 1000))
        .itemOutputs('1x draconicevolution:energy_core')
        .duration(400).EUt(GTValues.VA[GTValues.UV])

    event.recipes.gtceu.assembler('de_energy_pylon')
        .itemInputs(
            '4x gtceu:draconium_plate',
            '2x minecraft:ender_eye',
            '2x minecraft:emerald',
            '1x draconicevolution:draconium_core',
            '1x minecraft:diamond'
        )
        .inputFluids(Fluid.of('kubejs:argent_energy', 500))
        .itemOutputs('2x draconicevolution:energy_pylon')
        .duration(300).EUt(GTValues.VA[GTValues.UV])

    event.recipes.gtceu.assembler('de_energy_transfuser')
        .itemInputs(
            '4x gtceu:draconium_plate',
            '1x draconicevolution:energy_core_stabilizer',
            '1x draconicevolution:draconium_core',
            '1x minecraft:enchanting_table'
        )
        .inputFluids(Fluid.of('kubejs:argent_energy', 1000))
        .itemOutputs('1x draconicevolution:energy_transfuser')
        .duration(400).EUt(GTValues.VA[GTValues.UV])


    // --- Wireless / relay crystals ---

    event.recipes.gtceu.assembler('de_basic_relay_crystal')
        .itemInputs(
            '4x minecraft:diamond',
            '1x draconicevolution:wyvern_energy_core'
        )
        .inputFluids(Fluid.of('kubejs:argent_energy', 500))
        .itemOutputs('4x draconicevolution:basic_relay_crystal')
        .duration(200).EUt(GTValues.VA[GTValues.UV])

    event.recipes.gtceu.assembler('de_wyvern_relay_crystal')
        .itemInputs(
            '4x draconicevolution:wyvern_energy_core',
            '4x draconicevolution:basic_relay_crystal',
            '1x draconicevolution:draconium_core'
        )
        .inputFluids(Fluid.of('kubejs:argent_energy', 1000))
        .itemOutputs('4x draconicevolution:wyvern_relay_crystal')
        .duration(300).EUt(GTValues.VA[GTValues.UV])

    event.recipes.gtceu.assembler('de_basic_wireless_crystal')
        .itemInputs(
            '4x minecraft:ender_pearl',
            '2x draconicevolution:particle_generator',
            '2x minecraft:ender_eye',
            '1x draconicevolution:basic_relay_crystal'
        )
        .inputFluids(Fluid.of('kubejs:argent_energy', 500))
        .itemOutputs('1x draconicevolution:basic_wireless_crystal')
        .duration(300).EUt(GTValues.VA[GTValues.UV])

    event.recipes.gtceu.assembler('de_wyvern_wireless_crystal')
        .itemInputs(
            '4x minecraft:ender_pearl',
            '2x draconicevolution:particle_generator',
            '2x minecraft:ender_eye',
            '1x draconicevolution:wyvern_relay_crystal'
        )
        .inputFluids(Fluid.of('kubejs:argent_energy', 500))
        .itemOutputs('1x draconicevolution:wyvern_wireless_crystal')
        .duration(300).EUt(GTValues.VA[GTValues.UV])

    event.recipes.gtceu.assembler('de_draconic_wireless_crystal')
        .itemInputs(
            '4x minecraft:ender_pearl',
            '2x draconicevolution:particle_generator',
            '2x minecraft:ender_eye',
            '1x draconicevolution:draconic_relay_crystal'
        )
        .inputFluids(Fluid.of('kubejs:argent_energy', 1000))
        .itemOutputs('1x draconicevolution:draconic_wireless_crystal')
        .duration(400).EUt(GTValues.VA[GTValues.UHV])


    // --- Reactor structural parts ---

    event.recipes.gtceu.assembler('de_reactor_prt_focus_ring')
        .itemInputs(
            '4x create:golden_sheet',
            '2x minecraft:diamond',
            '2x draconicevolution:wyvern_core'
        )
        .inputFluids(Fluid.of('kubejs:argent_energy', 500))
        .itemOutputs('1x draconicevolution:reactor_prt_focus_ring')
        .duration(300).EUt(GTValues.VA[GTValues.UV])

    event.recipes.gtceu.assembler('de_reactor_prt_out_rotor')
        .itemInputs(
            '3x minecraft:diamond',
            '2x gtceu:draconium_rod',
            '1x draconicevolution:draconium_core'
        )
        .inputFluids(Fluid.of('kubejs:argent_energy', 500))
        .itemOutputs('1x draconicevolution:reactor_prt_out_rotor')
        .duration(300).EUt(GTValues.VA[GTValues.UV])

    event.recipes.gtceu.assembler('de_reactor_prt_in_rotor')
        .itemInputs(
            '4x gtceu:awakened_draconium_rod',
            '2x gtceu:draconium_rod',
            '1x draconicevolution:draconium_core'
        )
        .inputFluids(Fluid.of('kubejs:argent_energy', 500))
        .itemOutputs('1x draconicevolution:reactor_prt_in_rotor')
        .duration(300).EUt(GTValues.VA[GTValues.UHV])

    event.recipes.gtceu.assembler('de_reactor_prt_stab_frame')
        .itemInputs(
            '6x gtceu:steel_plate',
            '2x gtceu:awakened_draconium_plate',
            '1x draconicevolution:wyvern_core'
        )
        .inputFluids(Fluid.of('kubejs:argent_energy', 500))
        .itemOutputs('1x draconicevolution:reactor_prt_stab_frame')
        .duration(300).EUt(GTValues.VA[GTValues.UHV])

    event.recipes.gtceu.assembler('de_reactor_prt_rotor_full')
        .itemInputs(
            '2x draconicevolution:reactor_prt_in_rotor',
            '2x draconicevolution:reactor_prt_out_rotor',
            '2x gtceu:draconium_plate',
            '1x draconicevolution:wyvern_core'
        )
        .inputFluids(Fluid.of('kubejs:argent_energy', 1000))
        .itemOutputs('1x draconicevolution:reactor_prt_rotor_full')
        .duration(400).EUt(GTValues.VA[GTValues.UHV])


    // --- Utility machines / tools ---

    event.recipes.gtceu.assembler('de_generator')
        .itemInputs(
            '2x minecraft:nether_brick',
            '4x gtceu:steel_plate',
            '1x minecraft:furnace',
            '1x draconicevolution:draconium_core',
            '1x #gtceu:circuits/zpm'
        )
        .inputFluids(Fluid.of('gtceu:lubricant', 100))
        .itemOutputs('1x draconicevolution:generator')
        .duration(300).EUt(GTValues.VA[GTValues.ZPM])

    event.recipes.gtceu.assembler('de_grinder')
        .itemInputs(
            '4x gtceu:steel_plate',
            '2x gtceu:draconium_plate',
            '1x minecraft:diamond_sword',
            '1x draconicevolution:wyvern_energy_core',
            '1x minecraft:skeleton_skull'
        )
        .inputFluids(Fluid.of('kubejs:argent_energy', 500))
        .itemOutputs('1x draconicevolution:grinder')
        .duration(300).EUt(GTValues.VA[GTValues.UV])

    event.recipes.gtceu.assembler('de_potentiometer')
        .itemInputs(
            '1x gtceu:draconium_dust',
            '2x minecraft:redstone',
            '1x minecraft:stone'
        )
        .itemOutputs('1x draconicevolution:potentiometer')
        .duration(100).EUt(GTValues.VA[GTValues.ZPM])

    event.recipes.gtceu.assembler('de_flux_gate')
        .itemInputs(
            '4x create:iron_sheet',
            '1x draconicevolution:potentiometer',
            '1x minecraft:redstone_block',
            '1x draconicevolution:draconium_core',
            '1x #gtceu:circuits/zpm'
        )
        .itemOutputs('1x draconicevolution:flux_gate')
        .duration(200).EUt(GTValues.VA[GTValues.ZPM])

    event.recipes.gtceu.assembler('de_fluid_gate')
        .itemInputs(
            '4x create:iron_sheet',
            '1x draconicevolution:potentiometer',
            '1x minecraft:bucket',
            '1x draconicevolution:draconium_core',
            '1x #gtceu:circuits/zpm'
        )
        .itemOutputs('1x draconicevolution:fluid_gate')
        .duration(200).EUt(GTValues.VA[GTValues.ZPM])

    event.recipes.gtceu.assembler('de_entity_detector')
        .itemInputs(
            '2x minecraft:lapis_lazuli',
            '1x minecraft:ender_eye',
            '2x minecraft:redstone',
            '2x gtceu:draconium_plate',
            '1x draconicevolution:draconium_core',
            '1x #gtceu:circuits/zpm'
        )
        .inputFluids(Fluid.of('gtceu:lubricant', 100))
        .itemOutputs('1x draconicevolution:entity_detector')
        .duration(200).EUt(GTValues.VA[GTValues.ZPM])

    event.recipes.gtceu.assembler('de_entity_detector_advanced')
        .itemInputs(
            '2x minecraft:redstone_block',
            '1x minecraft:skeleton_skull',
            '2x minecraft:lapis_block',
            '2x minecraft:diamond',
            '2x gtceu:draconium_plate',
            '1x draconicevolution:entity_detector'
        )
        .inputFluids(Fluid.of('kubejs:argent_energy', 500))
        .itemOutputs('1x draconicevolution:entity_detector_advanced')
        .duration(300).EUt(GTValues.VA[GTValues.UV])

    event.recipes.gtceu.assembler('de_disenchanter')
        .itemInputs(
            '2x minecraft:emerald',
            '1x draconicevolution:draconium_core',
            '1x minecraft:enchanted_book',
            '1x minecraft:enchanting_table',
            '3x minecraft:bookshelf',
            '1x #gtceu:circuits/zpm'
        )
        .inputFluids(Fluid.of('gtceu:lubricant', 100))
        .itemOutputs('1x draconicevolution:disenchanter')
        .duration(300).EUt(GTValues.VA[GTValues.ZPM])

    event.recipes.gtceu.assembler('de_celestial_manipulator')
        .itemInputs(
            '2x minecraft:redstone_block',
            '1x minecraft:clock',
            '2x gtceu:draconium_plate',
            '1x minecraft:dragon_egg',
            '2x create:iron_sheet',
            '1x draconicevolution:wyvern_core'
        )
        .inputFluids(Fluid.of('kubejs:argent_energy', 1000))
        .itemOutputs('1x draconicevolution:celestial_manipulator')
        .duration(400).EUt(GTValues.VA[GTValues.UV])

    event.recipes.gtceu.assembler('de_dislocator')
        .itemInputs(
            '2x minecraft:blaze_powder',
            '1x gtceu:draconium_dust',
            '1x minecraft:ender_eye'
        )
        .itemOutputs('1x draconicevolution:dislocator')
        .duration(200).EUt(GTValues.VA[GTValues.ZPM])

    event.recipes.gtceu.assembler('de_magnet')
        .itemInputs(
            '2x minecraft:redstone',
            '2x gtceu:draconium_plate',
            '2x create:iron_sheet',
            '1x draconicevolution:dislocator'
        )
        .itemOutputs('1x draconicevolution:magnet')
        .duration(200).EUt(GTValues.VA[GTValues.ZPM])

    event.recipes.gtceu.assembler('de_advanced_magnet')
        .itemInputs(
            '2x gtceu:draconium_plate',
            '2x minecraft:redstone',
            '2x gtceu:awakened_draconium_plate',
            '1x draconicevolution:magnet'
        )
        .inputFluids(Fluid.of('kubejs:argent_energy', 500))
        .itemOutputs('1x draconicevolution:advanced_magnet')
        .duration(300).EUt(GTValues.VA[GTValues.UHV])

    event.recipes.gtceu.assembler('de_crystal_binder')
        .itemInputs(
            '2x gtceu:draconium_plate',
            '1x minecraft:diamond',
            '1x minecraft:blaze_rod',
            '1x draconicevolution:draconium_core'
        )
        .itemOutputs('1x draconicevolution:crystal_binder')
        .duration(200).EUt(GTValues.VA[GTValues.ZPM])

    event.recipes.gtceu.assembler('de_p2p_dislocator_unbound')
        .itemInputs(
            '2x draconicevolution:dislocator',
            '1x draconicevolution:draconium_core',
            '1x minecraft:ghast_tear'
        )
        .itemOutputs('1x draconicevolution:p2p_dislocator_unbound')
        .duration(200).EUt(GTValues.VA[GTValues.ZPM])

    event.recipes.gtceu.assembler('de_player_dislocator_unbound')
        .itemInputs(
            '1x draconicevolution:dislocator',
            '1x draconicevolution:draconium_core',
            '1x minecraft:ghast_tear'
        )
        .itemOutputs('1x draconicevolution:player_dislocator_unbound')
        .duration(200).EUt(GTValues.VA[GTValues.ZPM])

    event.recipes.gtceu.assembler('de_dislocation_inhibitor')
        .itemInputs(
            '6x create:iron_sheet',
            '1x minecraft:iron_bars',
            '1x draconicevolution:magnet'
        )
        .itemOutputs('1x draconicevolution:dislocation_inhibitor')
        .duration(200).EUt(GTValues.VA[GTValues.ZPM])

    event.recipes.gtceu.assembler('de_dislocator_receptacle')
        .itemInputs(
            '4x create:iron_sheet',
            '1x draconicevolution:draconium_core',
            '1x draconicevolution:infused_obsidian'
        )
        .itemOutputs('1x draconicevolution:dislocator_receptacle')
        .duration(200).EUt(GTValues.VA[GTValues.ZPM])

    event.recipes.gtceu.assembler('de_infused_obsidian')
        .itemInputs(
            '4x minecraft:blaze_powder',
            '4x minecraft:obsidian',
            '1x gtceu:draconium_dust'
        )
        .itemOutputs('1x draconicevolution:infused_obsidian')
        .duration(200).EUt(GTValues.VA[GTValues.ZPM])

    event.recipes.gtceu.assembler('de_dislocator_pedestal')
        .itemInputs(
            '1x minecraft:stone_pressure_plate',
            '4x minecraft:stone',
            '1x minecraft:blaze_powder'
        )
        .itemOutputs('1x draconicevolution:dislocator_pedestal')
        .duration(100).EUt(GTValues.VA[GTValues.HV])

    event.recipes.gtceu.assembler('de_rain_sensor')
        .itemInputs(
            '1x minecraft:bucket',
            '2x minecraft:redstone',
            '1x minecraft:stone_pressure_plate',
            '3x minecraft:stone_slab'
        )
        .itemOutputs('1x draconicevolution:rain_sensor')
        .duration(100).EUt(GTValues.VA[GTValues.HV])

})
