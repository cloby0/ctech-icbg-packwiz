ServerEvents.recipes(event => {

    // removals

    // all inscriber recipes: processors, silicon, formation/annihilation cores, presses
    event.remove({ type: 'ae2:inscriber' })

    // vanilla crafting for all machines getting GT assembler replacements
    event.remove({ output: 'ae2:controller' })
    event.remove({ output: 'ae2:drive' })
    event.remove({ output: 'ae2:chest' })
    event.remove({ output: 'ae2:interface' })
    event.remove({ output: 'ae2:pattern_provider' })
    event.remove({ output: 'ae2:molecular_assembler' })
    event.remove({ output: 'ae2:terminal' })
    event.remove({ output: 'ae2:crafting_terminal' })
    event.remove({ output: 'ae2:crafting_unit' })
    event.remove({ output: 'ae2:1k_crafting_storage' })
    event.remove({ output: 'ae2:4k_crafting_storage' })
    event.remove({ output: 'ae2:16k_crafting_storage' })
    event.remove({ output: 'ae2:64k_crafting_storage' })
    event.remove({ output: 'ae2:256k_crafting_storage' })
    event.remove({ output: 'ae2:cell_component_1k' })
    event.remove({ output: 'ae2:cell_component_4k' })
    event.remove({ output: 'ae2:cell_component_16k' })
    event.remove({ output: 'ae2:cell_component_64k' })
    event.remove({ output: 'ae2:cell_component_256k' })
    event.remove({ output: 'ae2:item_storage_cell_1k' })
    event.remove({ output: 'ae2:item_storage_cell_4k' })
    event.remove({ output: 'ae2:item_storage_cell_16k' })
    event.remove({ output: 'ae2:item_storage_cell_64k' })
    event.remove({ output: 'ae2:item_storage_cell_256k' })
    event.remove({ output: 'ae2:item_cell_housing' })
    event.remove({ output: 'ae2:fluix_glass_cable' })

    event.remove({ id: 'megacells:transform/sky_steel_ingot' })

    // additional base ae2 items
    event.remove({ output: 'ae2:energy_cell' })
    event.remove({ output: 'ae2:dense_energy_cell' })
    event.remove({ output: 'ae2:charger' })
    event.remove({ output: 'ae2:growth_accelerator' })
    event.remove({ output: 'ae2:condenser' })
    event.remove({ output: 'ae2:io_port' })
    event.remove({ output: 'ae2:wireless_receiver' })
    event.remove({ output: 'ae2:wireless_access_point' })
    event.remove({ output: 'ae2:wireless_terminal' })
    event.remove({ output: 'ae2:wireless_crafting_terminal' })
    event.remove({ output: 'ae2:storage_bus' })
    event.remove({ output: 'ae2:export_bus' })
    event.remove({ output: 'ae2:import_bus' })
    event.remove({ output: 'ae2:me_p2p_tunnel' })
    event.remove({ output: 'ae2:pattern_access_terminal' })
    event.remove({ output: 'ae2:pattern_encoding_terminal' })
    event.remove({ output: 'ae2:advanced_card' })
    event.remove({ output: 'ae2:basic_card' })
    event.remove({ output: 'ae2:annihilation_plane' })
    event.remove({ output: 'ae2:formation_plane' })
    event.remove({ output: 'ae2:semi_dark_monitor' })
    event.remove({ output: 'ae2:quantum_link' })
    event.remove({ output: 'ae2:quantum_ring' })
    event.remove({ output: 'ae2:spatial_pylon' })
    event.remove({ output: 'ae2:spatial_io_port' })
    event.remove({ output: 'ae2:spatial_anchor' })
    event.remove({ output: 'ae2:fluid_cell_housing' })
    event.remove({ output: 'ae2:fluid_storage_cell_1k' })
    event.remove({ output: 'ae2:fluid_storage_cell_4k' })
    event.remove({ output: 'ae2:fluid_storage_cell_16k' })
    event.remove({ output: 'ae2:fluid_storage_cell_64k' })
    event.remove({ output: 'ae2:fluid_storage_cell_256k' })
    event.remove({ output: 'ae2:portable_item_cell_1k' })
    event.remove({ output: 'ae2:portable_item_cell_4k' })
    event.remove({ output: 'ae2:portable_item_cell_16k' })
    event.remove({ output: 'ae2:portable_item_cell_64k' })
    event.remove({ output: 'ae2:portable_item_cell_256k' })
    event.remove({ output: 'ae2:portable_fluid_cell_1k' })
    event.remove({ output: 'ae2:portable_fluid_cell_4k' })
    event.remove({ output: 'ae2:portable_fluid_cell_16k' })
    event.remove({ output: 'ae2:portable_fluid_cell_64k' })
    event.remove({ output: 'ae2:portable_fluid_cell_256k' })
    event.remove({ output: 'ae2:crafting_accelerator' })

    // ae2things
    event.remove({ output: 'ae2things:disk_housing' })
    event.remove({ output: 'ae2things:disk_drive_1k' })
    event.remove({ output: 'ae2things:disk_drive_4k' })
    event.remove({ output: 'ae2things:disk_drive_16k' })
    event.remove({ output: 'ae2things:disk_drive_64k' })
    event.remove({ output: 'ae2things:disk_drive_256k' })

    // ae2wtlib
    event.remove({ output: 'ae2wtlib:wireless_universal_terminal' })
    event.remove({ output: 'ae2wtlib:wireless_pattern_access_terminal' })
    event.remove({ output: 'ae2wtlib:wireless_pattern_encoding_terminal' })
    event.remove({ output: 'ae2wtlib:magnet_card' })
    event.remove({ output: 'ae2wtlib:quantum_bridge_card' })

    // appbot
    event.remove({ output: 'appbot:mana_cell_housing' })
    event.remove({ output: 'appbot:mana_storage_cell_1k' })
    event.remove({ output: 'appbot:mana_storage_cell_4k' })
    event.remove({ output: 'appbot:mana_storage_cell_16k' })
    event.remove({ output: 'appbot:mana_storage_cell_64k' })
    event.remove({ output: 'appbot:mana_storage_cell_256k' })
    event.remove({ output: 'appbot:portable_mana_storage_cell_1k' })
    event.remove({ output: 'appbot:portable_mana_storage_cell_4k' })
    event.remove({ output: 'appbot:portable_mana_storage_cell_16k' })
    event.remove({ output: 'appbot:portable_mana_storage_cell_64k' })
    event.remove({ output: 'appbot:portable_mana_storage_cell_256k' })
    event.remove({ output: 'appbot:fluix_mana_pool' })

    // crazyae2addonslite
    event.remove({ output: 'crazyae2addonslite:ampere_meter' })
    event.remove({ output: 'crazyae2addonslite:automation_upgrade_card' })
    event.remove({ output: 'crazyae2addonslite:crafting_scheduler' })
    event.remove({ output: 'crazyae2addonslite:crazy_upgrade' })
    event.remove({ output: 'crazyae2addonslite:crazy_emitter_multiplier' })
    event.remove({ output: 'crazyae2addonslite:display_monitor' })
    event.remove({ output: 'crazyae2addonslite:nbt_export_bus' })
    event.remove({ output: 'crazyae2addonslite:nbt_storage_bus' })
    event.remove({ output: 'crazyae2addonslite:nbt_view_cell' })
    event.remove({ output: 'crazyae2addonslite:tag_view_cell' })
    event.remove({ output: 'crazyae2addonslite:redstone_emitter' })
    event.remove({ output: 'crazyae2addonslite:redstone_terminal' })
    event.remove({ output: 'crazyae2addonslite:round_robin_item_p2p_tunnel' })
    event.remove({ output: 'crazyae2addonslite:player_upgrade_card' })
    event.remove({ output: 'crazyae2addonslite:wireless_notification_terminal' })
    event.remove({ output: 'crazyae2addonslite:wireless_redstone_terminal' })
    event.remove({ output: 'crazyae2addonslite:wormhole_tunnel' })

    // ae2insertexportcard
    event.remove({ output: 'ae2insertexportcard:export_card' })
    event.remove({ output: 'ae2insertexportcard:insert_card' })

    // ae2netanalyser
    event.remove({ output: 'ae2netanalyser:network_analyser' })

    // mae2 conditional eu multi p2p
    event.remove({ output: 'mae2:eu_multi_p2p_tunnel' })

    // replace processors in any remaining vanilla recipes with matter_energy_circuit
    // not: { output } excludes the circuit_assembler recipe itself
    event.replaceInput(
        { input: 'ae2:logic_processor', not: { output: 'kubejs:matter_energy_circuit' } },
        'ae2:logic_processor',
        'kubejs:matter_energy_circuit'
    )
    event.replaceInput(
        { input: 'ae2:engineering_processor', not: { output: 'kubejs:matter_energy_circuit' } },
        'ae2:engineering_processor',
        'kubejs:matter_energy_circuit'
    )
    event.replaceInput(
        { input: 'ae2:calculation_processor', not: { output: 'kubejs:matter_energy_circuit' } },
        'ae2:calculation_processor',
        'kubejs:matter_energy_circuit'
    )

    // sky steel processing

    // sky stone -> sky dust via macerator
    event.recipes.gtceu.macerator('sky_stone_macerator')
        .itemInputs('1x ae2:sky_stone_block')
        .itemOutputs('4x ae2:sky_dust')
        .chancedOutput('gtceu:small_silicon_dust', 3000, 200)
        .duration(15 * 20)
        .EUt(GTValues.VA[GTValues.MV])

    // sky dust + steel + fluix crystal -> sky steel ingot
    // blastTemp 3600 requires EV coils (same tier as ostrum)
    event.recipes.gtceu.electric_blast_furnace('sky_steel_ebf')
        .itemInputs(
            '4x ae2:sky_dust',
            '2x gtceu:steel_dust',
            '1x ae2:fluix_crystal'
        )
        .itemOutputs('4x megacells:sky_steel_ingot')
        .blastFurnaceTemp(3600)
        .duration(20 * 20)
        .EUt(GTValues.VA[GTValues.EV])

    // ae2 components

    // fluix crystal via mixer (parallel path alongside create mixing)
    event.recipes.gtceu.mixer('ae2_fluix_crystal')
        .itemInputs(
            '1x ae2:charged_certus_quartz_crystal',
            '1x minecraft:quartz',
            '1x minecraft:redstone'
        )
        .itemOutputs('2x ae2:fluix_crystal')
        .duration(8 * 20)
        .EUt(GTValues.VA[GTValues.MV])

    // formation core: creation/output aspect; certus quartz base
    event.recipes.gtceu.circuit_assembler('ae2_formation_core')
        .itemInputs(
            '2x ae2:certus_quartz_crystal',
            '2x gtceu:ilc_chip',
            '1x minecraft:redstone'
        )
        .inputFluids(Fluid.of('gtceu:soldering_alloy', 72))
        .itemOutputs('1x ae2:formation_core')
        .duration(8 * 20)
        .EUt(GTValues.VA[GTValues.MV])

    // annihilation core: input/destruction aspect; fluix base
    event.recipes.gtceu.circuit_assembler('ae2_annihilation_core')
        .itemInputs(
            '2x ae2:fluix_crystal',
            '2x gtceu:ilc_chip',
            '1x minecraft:redstone'
        )
        .inputFluids(Fluid.of('gtceu:soldering_alloy', 72))
        .itemOutputs('1x ae2:annihilation_core')
        .duration(8 * 20)
        .EUt(GTValues.VA[GTValues.MV])

    // processors (replacing inscriber)
    // signalum = signal-conducting alloy -> logic (control signals)
    event.recipes.gtceu.me_fabricator('ae2_logic_processor')
        .itemInputs(
            '2x gtceu:signalum_plate',
            '2x gtceu:cpu_chip',
            '2x ae2:certus_quartz_dust'
        )
        .inputFluids(Fluid.of('gtceu:soldering_alloy', 72))
        .itemOutputs('2x ae2:logic_processor')
        .duration(10 * 20)
        .EUt(GTValues.VA[GTValues.EV])

    // enderium = ender-infused alloy -> engineering (spatial wiring)
    event.recipes.gtceu.me_fabricator('ae2_engineering_processor')
        .itemInputs(
            '2x gtceu:enderium_plate',
            '2x gtceu:cpu_chip',
            '2x ae2:certus_quartz_dust'
        )
        .inputFluids(Fluid.of('gtceu:soldering_alloy', 72))
        .itemOutputs('2x ae2:engineering_processor')
        .duration(10 * 20)
        .EUt(GTValues.VA[GTValues.EV])

    // lumium = light-conducting alloy -> calculation (optical processing)
    event.recipes.gtceu.me_fabricator('ae2_calculation_processor')
        .itemInputs(
            '2x gtceu:lumium_plate',
            '2x gtceu:cpu_chip',
            '2x ae2:certus_quartz_crystal'
        )
        .inputFluids(Fluid.of('gtceu:soldering_alloy', 72))
        .itemOutputs('2x ae2:calculation_processor')
        .duration(10 * 20)
        .EUt(GTValues.VA[GTValues.EV])

    // matter_energy_circuit: all three processors + EV circuit
    event.recipes.gtceu.me_fabricator('me_circuit')
        .itemInputs(
            'ae2:engineering_processor',
            'ae2:calculation_processor',
            'ae2:logic_processor',
            '#gtceu:circuits/ev'
        )
        .inputFluids(Fluid.of('gtceu:soldering_alloy', 144))
        .itemOutputs('2x kubejs:matter_energy_circuit')
        .duration(120)
        .EUt(GTValues.VA[GTValues.EV])

    // network cables

    // basic ME glass cable: fluix crystal + sky_steel rod + quartz glass
    event.recipes.gtceu.me_fabricator('ae2_me_cable_glass')
        .itemInputs(
            '2x ae2:fluix_crystal',
            '1x gtceu:sky_steel_rod',
            '2x ae2:quartz_glass'
        )
        .itemOutputs('8x ae2:fluix_glass_cable')
        .duration(5 * 20)
        .EUt(GTValues.VA[GTValues.EV])

    // network machines

    // ME controller: 4 sky_steel plate, 4 matter_energy_circuit, 1 EV circuit
    event.recipes.gtceu.me_fabricator('ae2_controller')
        .itemInputs(
            '4x gtceu:sky_steel_plate',
            '4x kubejs:matter_energy_circuit',
            '1x #gtceu:circuits/ev'
        )
        .inputFluids(Fluid.of('gtceu:soldering_alloy', 576))
        .itemOutputs('1x ae2:controller')
        .duration(60 * 20)
        .EUt(GTValues.VA[GTValues.EV])

    // ME drive: sky_steel plate, matter_energy_circuit, EV motor
    event.recipes.gtceu.me_fabricator('ae2_drive')
        .itemInputs(
            '2x gtceu:sky_steel_plate',
            '2x kubejs:matter_energy_circuit',
            '1x gtceu:ev_electric_motor',
            '2x ae2:fluix_glass_cable'
        )
        .inputFluids(Fluid.of('gtceu:soldering_alloy', 288))
        .itemOutputs('1x ae2:drive')
        .duration(40 * 20)
        .EUt(GTValues.VA[GTValues.EV])

    // ME chest: sky_steel plate, matter_energy_circuit, EV pump
    event.recipes.gtceu.me_fabricator('ae2_chest')
        .itemInputs(
            '2x gtceu:sky_steel_plate',
            '1x kubejs:matter_energy_circuit',
            '1x gtceu:ev_electric_pump',
            '2x ae2:fluix_glass_cable'
        )
        .inputFluids(Fluid.of('gtceu:soldering_alloy', 144))
        .itemOutputs('1x ae2:chest')
        .duration(30 * 20)
        .EUt(GTValues.VA[GTValues.EV])

    // ME interface: formation + annihilation core (imports and exports)
    event.recipes.gtceu.me_fabricator('ae2_interface')
        .itemInputs(
            '2x gtceu:sky_steel_plate',
            '1x kubejs:matter_energy_circuit',
            '1x ae2:formation_core',
            '1x ae2:annihilation_core',
            '2x ae2:fluix_glass_cable'
        )
        .inputFluids(Fluid.of('gtceu:soldering_alloy', 144))
        .itemOutputs('1x ae2:interface')
        .duration(30 * 20)
        .EUt(GTValues.VA[GTValues.EV])

    // pattern provider: formation cores (pushes patterns outward)
    event.recipes.gtceu.me_fabricator('ae2_pattern_provider')
        .itemInputs(
            '2x gtceu:sky_steel_plate',
            '2x kubejs:matter_energy_circuit',
            '2x ae2:formation_core',
            '2x ae2:fluix_glass_cable'
        )
        .inputFluids(Fluid.of('gtceu:soldering_alloy', 288))
        .itemOutputs('1x ae2:pattern_provider')
        .duration(30 * 20)
        .EUt(GTValues.VA[GTValues.EV])

    // molecular assembler: sky_steel frame + EV robot arm + formation cores
    event.recipes.gtceu.me_fabricator('ae2_molecular_assembler')
        .itemInputs(
            '1x gtceu:sky_steel_frame',
            '2x gtceu:sky_steel_plate',
            '2x kubejs:matter_energy_circuit',
            '1x gtceu:ev_robot_arm',
            '2x ae2:formation_core',
            '2x ae2:fluix_glass_cable'
        )
        .inputFluids(Fluid.of('gtceu:soldering_alloy', 288))
        .itemOutputs('1x ae2:molecular_assembler')
        .duration(50 * 20)
        .EUt(GTValues.VA[GTValues.EV])

    // ME terminal: certus quartz display + sky_steel + matter_energy_circuit
    event.recipes.gtceu.me_fabricator('ae2_terminal')
        .itemInputs(
            '2x gtceu:sky_steel_plate',
            '1x kubejs:matter_energy_circuit',
            '2x ae2:certus_quartz_crystal',
            '2x ae2:fluix_glass_cable'
        )
        .inputFluids(Fluid.of('gtceu:soldering_alloy', 144))
        .itemOutputs('1x ae2:terminal')
        .duration(20 * 20)
        .EUt(GTValues.VA[GTValues.EV])

    // crafting terminal: terminal + EV field generator (opens the crafting grid)
    event.recipes.gtceu.me_fabricator('ae2_crafting_terminal')
        .itemInputs(
            '1x ae2:terminal',
            '1x gtceu:ev_field_generator',
            '1x kubejs:matter_energy_circuit'
        )
        .inputFluids(Fluid.of('gtceu:soldering_alloy', 144))
        .itemOutputs('1x ae2:crafting_terminal')
        .duration(20 * 20)
        .EUt(GTValues.VA[GTValues.EV])

    // storage

    // item cell housing: sky_steel + quartz glass
    event.recipes.gtceu.me_fabricator('ae2_item_cell_housing')
        .itemInputs(
            '4x gtceu:sky_steel_plate',
            '2x ae2:quartz_glass'
        )
        .inputFluids(Fluid.of('gtceu:soldering_alloy', 72))
        .itemOutputs('2x ae2:item_cell_housing')
        .duration(10 * 20)
        .EUt(GTValues.VA[GTValues.EV])

    // cell components: sky_steel + certus quartz scaling up each tier
    event.recipes.gtceu.me_fabricator('ae2_cell_component_1k')
        .itemInputs(
            '1x gtceu:sky_steel_plate',
            '4x ae2:certus_quartz_crystal',
            '2x gtceu:ram_chip'
        )
        .inputFluids(Fluid.of('gtceu:soldering_alloy', 72))
        .itemOutputs('2x ae2:cell_component_1k')
        .duration(20 * 20)
        .EUt(GTValues.VA[GTValues.EV])

    event.recipes.gtceu.me_fabricator('ae2_cell_component_4k')
        .itemInputs(
            '2x gtceu:sky_steel_plate',
            '4x ae2:certus_quartz_crystal',
            '4x gtceu:ram_chip',
            '2x ae2:cell_component_1k'
        )
        .inputFluids(Fluid.of('gtceu:soldering_alloy', 144))
        .itemOutputs('2x ae2:cell_component_4k')
        .duration(25 * 20)
        .EUt(GTValues.VA[GTValues.EV])

    event.recipes.gtceu.me_fabricator('ae2_cell_component_16k')
        .itemInputs(
            '2x gtceu:sky_steel_plate',
            '4x ae2:certus_quartz_crystal',
            '4x gtceu:ram_chip',
            '2x ae2:cell_component_4k'
        )
        .inputFluids(Fluid.of('gtceu:soldering_alloy', 144))
        .itemOutputs('2x ae2:cell_component_16k')
        .duration(30 * 20)
        .EUt(GTValues.VA[GTValues.EV])

    event.recipes.gtceu.me_fabricator('ae2_cell_component_64k')
        .itemInputs(
            '2x gtceu:sky_steel_plate',
            '4x ae2:fluix_crystal',
            '4x gtceu:ram_chip',
            '2x ae2:cell_component_16k'
        )
        .inputFluids(Fluid.of('gtceu:soldering_alloy', 144))
        .itemOutputs('2x ae2:cell_component_64k')
        .duration(35 * 20)
        .EUt(GTValues.VA[GTValues.EV])

    event.recipes.gtceu.me_fabricator('ae2_cell_component_256k')
        .itemInputs(
            '2x gtceu:sky_steel_plate',
            '4x ae2:fluix_crystal',
            '4x gtceu:ram_chip',
            '2x gtceu:cpu_chip',
            '2x ae2:cell_component_64k',
            '1x kubejs:matter_energy_circuit'
        )
        .inputFluids(Fluid.of('gtceu:soldering_alloy', 288))
        .itemOutputs('2x ae2:cell_component_256k')
        .duration(40 * 20)
        .EUt(GTValues.VA[GTValues.EV])

    // storage cells: cell component + housing
    event.recipes.gtceu.me_fabricator('ae2_1k_me_storage_cell')
        .itemInputs('1x ae2:cell_component_1k', '1x ae2:item_cell_housing')
        .itemOutputs('1x ae2:item_storage_cell_1k')
        .duration(5 * 20)
        .EUt(GTValues.VA[GTValues.EV])

    event.recipes.gtceu.me_fabricator('ae2_4k_me_storage_cell')
        .itemInputs('1x ae2:cell_component_4k', '1x ae2:item_cell_housing')
        .itemOutputs('1x ae2:item_storage_cell_4k')
        .duration(5 * 20)
        .EUt(GTValues.VA[GTValues.EV])

    event.recipes.gtceu.me_fabricator('ae2_16k_me_storage_cell')
        .itemInputs('1x ae2:cell_component_16k', '1x ae2:item_cell_housing')
        .itemOutputs('1x ae2:item_storage_cell_16k')
        .duration(5 * 20)
        .EUt(GTValues.VA[GTValues.EV])

    event.recipes.gtceu.me_fabricator('ae2_64k_me_storage_cell')
        .itemInputs('1x ae2:cell_component_64k', '1x ae2:item_cell_housing')
        .itemOutputs('1x ae2:item_storage_cell_64k')
        .duration(5 * 20)
        .EUt(GTValues.VA[GTValues.EV])

    event.recipes.gtceu.me_fabricator('ae2_256k_me_storage_cell')
        .itemInputs('1x ae2:cell_component_256k', '1x ae2:item_cell_housing')
        .itemOutputs('1x ae2:item_storage_cell_256k')
        .duration(5 * 20)
        .EUt(GTValues.VA[GTValues.EV])

    // crafting multiblock
    event.recipes.gtceu.me_fabricator('ae2_crafting_unit')
        .itemInputs(
            '2x gtceu:sky_steel_plate',
            '1x kubejs:matter_energy_circuit',
            '1x ae2:fluix_glass_cable'
        )
        .inputFluids(Fluid.of('gtceu:soldering_alloy', 144))
        .itemOutputs('1x ae2:crafting_unit')
        .duration(20 * 20)
        .EUt(GTValues.VA[GTValues.EV])

    // crafting storage tiers: crafting_unit + cell_component
    event.recipes.gtceu.me_fabricator('ae2_1k_crafting_storage')
        .itemInputs('1x ae2:crafting_unit', '1x ae2:cell_component_1k')
        .itemOutputs('1x ae2:1k_crafting_storage')
        .duration(10 * 20)
        .EUt(GTValues.VA[GTValues.EV])

    event.recipes.gtceu.me_fabricator('ae2_4k_crafting_storage')
        .itemInputs('1x ae2:crafting_unit', '1x ae2:cell_component_4k')
        .itemOutputs('1x ae2:4k_crafting_storage')
        .duration(10 * 20)
        .EUt(GTValues.VA[GTValues.EV])

    event.recipes.gtceu.me_fabricator('ae2_16k_crafting_storage')
        .itemInputs('1x ae2:crafting_unit', '1x ae2:cell_component_16k')
        .itemOutputs('1x ae2:16k_crafting_storage')
        .duration(10 * 20)
        .EUt(GTValues.VA[GTValues.EV])

    event.recipes.gtceu.me_fabricator('ae2_64k_crafting_storage')
        .itemInputs('1x ae2:crafting_unit', '1x ae2:cell_component_64k')
        .itemOutputs('1x ae2:64k_crafting_storage')
        .duration(10 * 20)
        .EUt(GTValues.VA[GTValues.EV])

    event.recipes.gtceu.me_fabricator('ae2_256k_crafting_storage')
        .itemInputs('1x ae2:crafting_unit', '1x ae2:cell_component_256k')
        .itemOutputs('1x ae2:256k_crafting_storage')
        .duration(10 * 20)
        .EUt(GTValues.VA[GTValues.EV])

    // additional base ae2 infrastructure

    // charger: MV, early crystal charging setup
    event.recipes.gtceu.circuit_assembler('ae2_charger')
        .itemInputs(
            '4x gtceu:sky_steel_plate',
            '4x create:copper_sheet',
            '1x ae2:quartz_glass'
        )
        .inputFluids(Fluid.of('gtceu:soldering_alloy', 72))
        .itemOutputs('2x ae2:charger')
        .duration(10 * 20)
        .EUt(GTValues.VA[GTValues.MV])

    // growth accelerator: MV, speeds crystal growth
    event.recipes.gtceu.circuit_assembler('ae2_growth_accelerator')
        .itemInputs(
            '4x gtceu:sky_steel_plate',
            '2x ae2:fluix_glass_cable',
            '2x ae2:quartz_glass',
            '1x ae2:fluix_crystal'
        )
        .inputFluids(Fluid.of('gtceu:soldering_alloy', 72))
        .itemOutputs('2x ae2:growth_accelerator')
        .duration(10 * 20)
        .EUt(GTValues.VA[GTValues.MV])

    // condenser: EV, compresses items into matter balls and singularities
    event.recipes.gtceu.circuit_assembler('ae2_condenser')
        .itemInputs(
            '4x gtceu:sky_steel_plate',
            '2x ae2:quartz_glass',
            '2x ae2:fluix_glass_cable',
            '1x gtceu:ev_electric_pump'
        )
        .inputFluids(Fluid.of('gtceu:soldering_alloy', 144))
        .itemOutputs('1x ae2:condenser')
        .duration(20 * 20)
        .EUt(GTValues.VA[GTValues.EV])

    // fluix pearl: mixer, ender pearl infused with fluix
    event.recipes.gtceu.mixer('ae2_fluix_pearl')
        .itemInputs('4x ae2:fluix_crystal', '1x minecraft:ender_pearl')
        .itemOutputs('1x ae2:fluix_pearl')
        .duration(8 * 20)
        .EUt(GTValues.VA[GTValues.MV])

    // energy cell: basic AE power storage
    event.recipes.gtceu.me_fabricator('ae2_energy_cell')
        .itemInputs(
            '4x ae2:certus_quartz_crystal',
            '2x ae2:fluix_crystal',
            '4x gtceu:sky_steel_plate',
            '2x ae2:quartz_glass',
            '2x gtceu:ram_chip'
        )
        .inputFluids(Fluid.of('gtceu:soldering_alloy', 144))
        .itemOutputs('2x ae2:energy_cell')
        .duration(20 * 20)
        .EUt(GTValues.VA[GTValues.EV])

    // dense energy cell: 8x energy cells compressed with matter_energy_circuit
    event.recipes.gtceu.me_fabricator('ae2_dense_energy_cell')
        .itemInputs(
            '8x ae2:energy_cell',
            '1x kubejs:matter_energy_circuit'
        )
        .inputFluids(Fluid.of('gtceu:soldering_alloy', 144))
        .itemOutputs('1x ae2:dense_energy_cell')
        .duration(30 * 20)
        .EUt(GTValues.VA[GTValues.EV])

    // io_port: moves storage cells in and out of drives automatically
    event.recipes.gtceu.me_fabricator('ae2_io_port')
        .itemInputs(
            '2x ae2:drive',
            '2x ae2:fluix_glass_cable',
            '1x kubejs:matter_energy_circuit',
            '1x gtceu:ev_conveyor_module'
        )
        .inputFluids(Fluid.of('gtceu:soldering_alloy', 288))
        .itemOutputs('1x ae2:io_port')
        .duration(30 * 20)
        .EUt(GTValues.VA[GTValues.EV])

    // buses, parts, cards

    // basic_card: MV, base for all upgrade cards
    event.recipes.gtceu.circuit_assembler('ae2_basic_card')
        .itemInputs(
            '2x create:golden_sheet',
            '1x gtceu:ilc_chip',
            '2x gtceu:small_redstone_dust',
            '2x gtceu:sky_steel_plate'
        )
        .inputFluids(Fluid.of('gtceu:soldering_alloy', 72))
        .itemOutputs('4x ae2:basic_card')
        .duration(10 * 20)
        .EUt(GTValues.VA[GTValues.MV])

    // advanced_card: EV, required for high-tier upgrades
    event.recipes.gtceu.circuit_assembler('ae2_advanced_card')
        .itemInputs(
            '2x gtceu:sky_steel_plate',
            '1x gtceu:cpu_chip',
            '1x minecraft:diamond',
            '2x gtceu:small_redstone_dust'
        )
        .inputFluids(Fluid.of('gtceu:soldering_alloy', 144))
        .itemOutputs('4x ae2:advanced_card')
        .duration(10 * 20)
        .EUt(GTValues.VA[GTValues.EV])

    // export_bus: pushes items from network into world
    event.recipes.gtceu.circuit_assembler('ae2_export_bus')
        .itemInputs(
            '2x ae2:formation_core',
            '2x gtceu:sky_steel_plate',
            '2x ae2:fluix_glass_cable'
        )
        .inputFluids(Fluid.of('gtceu:soldering_alloy', 144))
        .itemOutputs('2x ae2:export_bus')
        .duration(10 * 20)
        .EUt(GTValues.VA[GTValues.EV])

    // import_bus: pulls items from world into network
    event.recipes.gtceu.circuit_assembler('ae2_import_bus')
        .itemInputs(
            '2x ae2:annihilation_core',
            '2x gtceu:sky_steel_plate',
            '2x ae2:fluix_glass_cable'
        )
        .inputFluids(Fluid.of('gtceu:soldering_alloy', 144))
        .itemOutputs('2x ae2:import_bus')
        .duration(10 * 20)
        .EUt(GTValues.VA[GTValues.EV])

    // storage_bus: exposes external inventory to network
    event.recipes.gtceu.circuit_assembler('ae2_storage_bus')
        .itemInputs(
            '1x ae2:formation_core',
            '1x ae2:annihilation_core',
            '2x gtceu:sky_steel_plate',
            '2x ae2:fluix_glass_cable'
        )
        .inputFluids(Fluid.of('gtceu:soldering_alloy', 144))
        .itemOutputs('2x ae2:storage_bus')
        .duration(10 * 20)
        .EUt(GTValues.VA[GTValues.EV])

    // annihilation_plane: destroys blocks and pulls into network
    event.recipes.gtceu.circuit_assembler('ae2_annihilation_plane')
        .itemInputs(
            '2x ae2:annihilation_core',
            '4x ae2:fluix_crystal',
            '2x gtceu:sky_steel_plate'
        )
        .inputFluids(Fluid.of('gtceu:soldering_alloy', 144))
        .itemOutputs('2x ae2:annihilation_plane')
        .duration(10 * 20)
        .EUt(GTValues.VA[GTValues.EV])

    // formation_plane: places items from network into world
    event.recipes.gtceu.circuit_assembler('ae2_formation_plane')
        .itemInputs(
            '2x ae2:formation_core',
            '4x ae2:fluix_crystal',
            '2x gtceu:sky_steel_plate'
        )
        .inputFluids(Fluid.of('gtceu:soldering_alloy', 144))
        .itemOutputs('2x ae2:formation_plane')
        .duration(10 * 20)
        .EUt(GTValues.VA[GTValues.EV])

    // semi_dark_monitor: low-power display panel
    event.recipes.gtceu.circuit_assembler('ae2_semi_dark_monitor')
        .itemInputs(
            '2x ae2:quartz_glass',
            '2x gtceu:sky_steel_plate',
            '1x gtceu:ilc_chip',
            '1x gtceu:small_glowstone_dust'
        )
        .inputFluids(Fluid.of('gtceu:soldering_alloy', 72))
        .itemOutputs('4x ae2:semi_dark_monitor')
        .duration(10 * 20)
        .EUt(GTValues.VA[GTValues.EV])

    // me_p2p_tunnel: point-to-point ME channel tunnel
    event.recipes.gtceu.me_fabricator('ae2_me_p2p_tunnel')
        .itemInputs(
            '2x gtceu:sky_steel_plate',
            '1x kubejs:matter_energy_circuit',
            '4x ae2:fluix_crystal',
            '2x ae2:fluix_glass_cable'
        )
        .inputFluids(Fluid.of('gtceu:soldering_alloy', 144))
        .itemOutputs('2x ae2:me_p2p_tunnel')
        .duration(20 * 20)
        .EUt(GTValues.VA[GTValues.EV])

    // crafting_accelerator: co-processing unit for crafting CPU
    event.recipes.gtceu.me_fabricator('ae2_crafting_accelerator')
        .itemInputs(
            '1x ae2:crafting_unit',
            '1x gtceu:cpu_chip',
            '2x ae2:fluix_glass_cable'
        )
        .inputFluids(Fluid.of('gtceu:soldering_alloy', 72))
        .itemOutputs('2x ae2:crafting_accelerator')
        .duration(15 * 20)
        .EUt(GTValues.VA[GTValues.EV])

    // pattern_encoding_terminal: encodes crafting and processing patterns
    event.recipes.gtceu.me_fabricator('ae2_pattern_encoding_terminal')
        .itemInputs(
            '1x ae2:crafting_terminal',
            '1x kubejs:matter_energy_circuit',
            '1x ae2:fluix_glass_cable'
        )
        .inputFluids(Fluid.of('gtceu:soldering_alloy', 144))
        .itemOutputs('1x ae2:pattern_encoding_terminal')
        .duration(20 * 20)
        .EUt(GTValues.VA[GTValues.EV])

    // pattern_access_terminal: view all available patterns
    event.recipes.gtceu.me_fabricator('ae2_pattern_access_terminal')
        .itemInputs(
            '1x ae2:terminal',
            '1x ae2:pattern_provider',
            '1x kubejs:matter_energy_circuit',
            '1x ae2:fluix_glass_cable'
        )
        .inputFluids(Fluid.of('gtceu:soldering_alloy', 144))
        .itemOutputs('1x ae2:pattern_access_terminal')
        .duration(20 * 20)
        .EUt(GTValues.VA[GTValues.EV])

    // wireless

    // wireless receiver: quantum-entangled for wireless network access
    event.recipes.gtceu.circuit_assembler('ae2_wireless_receiver')
        .itemInputs(
            '1x ae2:fluix_pearl',
            '2x gtceu:sky_steel_plate',
            '2x ae2:quartz_fiber',
            '1x gtceu:ilc_chip'
        )
        .inputFluids(Fluid.of('gtceu:soldering_alloy', 72))
        .itemOutputs('2x ae2:wireless_receiver')
        .duration(10 * 20)
        .EUt(GTValues.VA[GTValues.EV])

    // wireless access point: broadcasts network coverage
    event.recipes.gtceu.me_fabricator('ae2_wireless_access_point')
        .itemInputs(
            '1x ae2:wireless_receiver',
            '2x gtceu:sky_steel_plate',
            '2x ae2:fluix_glass_cable',
            '1x kubejs:matter_energy_circuit'
        )
        .inputFluids(Fluid.of('gtceu:soldering_alloy', 144))
        .itemOutputs('1x ae2:wireless_access_point')
        .duration(20 * 20)
        .EUt(GTValues.VA[GTValues.EV])

    // wireless terminal: handheld network access
    event.recipes.gtceu.me_fabricator('ae2_wireless_terminal')
        .itemInputs(
            '1x ae2:wireless_receiver',
            '1x ae2:terminal',
            '1x ae2:dense_energy_cell'
        )
        .inputFluids(Fluid.of('gtceu:soldering_alloy', 144))
        .itemOutputs('1x ae2:wireless_terminal')
        .duration(20 * 20)
        .EUt(GTValues.VA[GTValues.EV])

    // wireless crafting terminal: wireless crafting access
    event.recipes.gtceu.me_fabricator('ae2_wireless_crafting_terminal')
        .itemInputs(
            '1x ae2:wireless_terminal',
            '1x ae2:crafting_terminal',
            '1x kubejs:matter_energy_circuit'
        )
        .inputFluids(Fluid.of('gtceu:soldering_alloy', 144))
        .itemOutputs('1x ae2:wireless_crafting_terminal')
        .duration(20 * 20)
        .EUt(GTValues.VA[GTValues.EV])

    // quantum network bridge (IV, cross-dimensional)

    // quantum_link: core of quantum bridge multiblock
    event.recipes.gtceu.me_fabricator('ae2_quantum_link')
        .itemInputs(
            '4x ae2:fluix_pearl',
            '4x ae2:quartz_glass',
            '1x kubejs:matter_energy_circuit',
            '1x gtceu:iv_field_generator'
        )
        .inputFluids(Fluid.of('gtceu:soldering_alloy', 288))
        .itemOutputs('2x ae2:quantum_link')
        .duration(60 * 20)
        .EUt(GTValues.VA[GTValues.IV])

    // quantum_ring: ring blocks around quantum_link
    event.recipes.gtceu.me_fabricator('ae2_quantum_ring')
        .itemInputs(
            '4x gtceu:sky_steel_plate',
            '2x kubejs:matter_energy_circuit',
            '2x ae2:energy_cell',
            '1x gtceu:iv_sensor',
            '4x ae2:fluix_glass_cable'
        )
        .inputFluids(Fluid.of('gtceu:soldering_alloy', 576))
        .itemOutputs('1x ae2:quantum_ring')
        .duration(60 * 20)
        .EUt(GTValues.VA[GTValues.IV])

    // spatial storage (LuV)

    // spatial_pylon: pylon for spatial IO field
    event.recipes.gtceu.me_fabricator('ae2_spatial_pylon')
        .itemInputs(
            '4x gtceu:sky_steel_plate',
            '2x ae2:fluix_glass_cable',
            '2x ae2:quartz_glass',
            '2x ae2:fluix_crystal',
            '1x gtceu:luv_sensor'
        )
        .inputFluids(Fluid.of('gtceu:soldering_alloy', 288))
        .itemOutputs('2x ae2:spatial_pylon')
        .duration(40 * 20)
        .EUt(GTValues.VA[GTValues.LuV])

    // spatial_io_port: IO port for spatial cells
    event.recipes.gtceu.me_fabricator('ae2_spatial_io_port')
        .itemInputs(
            '1x ae2:io_port',
            '2x ae2:fluix_glass_cable',
            '2x kubejs:matter_energy_circuit',
            '1x gtceu:luv_field_generator'
        )
        .inputFluids(Fluid.of('gtceu:soldering_alloy', 576))
        .itemOutputs('1x ae2:spatial_io_port')
        .duration(60 * 20)
        .EUt(GTValues.VA[GTValues.LuV])

    // spatial_anchor: chunk loading via ME network
    event.recipes.gtceu.me_fabricator('ae2_spatial_anchor')
        .itemInputs(
            '2x ae2:spatial_pylon',
            '2x ae2:fluix_glass_cable',
            '2x kubejs:matter_energy_circuit',
            '1x gtceu:luv_robot_arm'
        )
        .inputFluids(Fluid.of('gtceu:soldering_alloy', 576))
        .itemOutputs('1x ae2:spatial_anchor')
        .duration(60 * 20)
        .EUt(GTValues.VA[GTValues.LuV])

    // fluid storage cells

    // fluid_cell_housing: copper-based housing for fluid storage
    event.recipes.gtceu.me_fabricator('ae2_fluid_cell_housing')
        .itemInputs(
            '4x create:copper_sheet',
            '2x ae2:quartz_glass',
            '2x gtceu:small_redstone_dust'
        )
        .inputFluids(Fluid.of('gtceu:soldering_alloy', 72))
        .itemOutputs('2x ae2:fluid_cell_housing')
        .duration(10 * 20)
        .EUt(GTValues.VA[GTValues.EV])

    event.recipes.gtceu.me_fabricator('ae2_fluid_storage_cell_1k')
        .itemInputs('1x ae2:cell_component_1k', '1x ae2:fluid_cell_housing')
        .itemOutputs('1x ae2:fluid_storage_cell_1k')
        .duration(5 * 20)
        .EUt(GTValues.VA[GTValues.EV])

    event.recipes.gtceu.me_fabricator('ae2_fluid_storage_cell_4k')
        .itemInputs('1x ae2:cell_component_4k', '1x ae2:fluid_cell_housing')
        .itemOutputs('1x ae2:fluid_storage_cell_4k')
        .duration(5 * 20)
        .EUt(GTValues.VA[GTValues.EV])

    event.recipes.gtceu.me_fabricator('ae2_fluid_storage_cell_16k')
        .itemInputs('1x ae2:cell_component_16k', '1x ae2:fluid_cell_housing')
        .itemOutputs('1x ae2:fluid_storage_cell_16k')
        .duration(5 * 20)
        .EUt(GTValues.VA[GTValues.EV])

    event.recipes.gtceu.me_fabricator('ae2_fluid_storage_cell_64k')
        .itemInputs('1x ae2:cell_component_64k', '1x ae2:fluid_cell_housing')
        .itemOutputs('1x ae2:fluid_storage_cell_64k')
        .duration(5 * 20)
        .EUt(GTValues.VA[GTValues.EV])

    event.recipes.gtceu.me_fabricator('ae2_fluid_storage_cell_256k')
        .itemInputs('1x ae2:cell_component_256k', '1x ae2:fluid_cell_housing')
        .itemOutputs('1x ae2:fluid_storage_cell_256k')
        .duration(5 * 20)
        .EUt(GTValues.VA[GTValues.EV])

    // portable cells

    event.recipes.gtceu.me_fabricator('ae2_portable_item_cell_1k')
        .itemInputs('1x ae2:chest', '1x ae2:cell_component_1k', '1x ae2:energy_cell', '1x ae2:item_cell_housing')
        .itemOutputs('1x ae2:portable_item_cell_1k')
        .duration(10 * 20)
        .EUt(GTValues.VA[GTValues.EV])

    event.recipes.gtceu.me_fabricator('ae2_portable_item_cell_4k')
        .itemInputs('1x ae2:chest', '1x ae2:cell_component_4k', '1x ae2:energy_cell', '1x ae2:item_cell_housing')
        .itemOutputs('1x ae2:portable_item_cell_4k')
        .duration(10 * 20)
        .EUt(GTValues.VA[GTValues.EV])

    event.recipes.gtceu.me_fabricator('ae2_portable_item_cell_16k')
        .itemInputs('1x ae2:chest', '1x ae2:cell_component_16k', '1x ae2:dense_energy_cell', '1x ae2:item_cell_housing')
        .itemOutputs('1x ae2:portable_item_cell_16k')
        .duration(10 * 20)
        .EUt(GTValues.VA[GTValues.EV])

    event.recipes.gtceu.me_fabricator('ae2_portable_item_cell_64k')
        .itemInputs('1x ae2:chest', '1x ae2:cell_component_64k', '1x ae2:dense_energy_cell', '1x ae2:item_cell_housing')
        .itemOutputs('1x ae2:portable_item_cell_64k')
        .duration(10 * 20)
        .EUt(GTValues.VA[GTValues.EV])

    event.recipes.gtceu.me_fabricator('ae2_portable_item_cell_256k')
        .itemInputs('1x ae2:chest', '1x ae2:cell_component_256k', '1x ae2:dense_energy_cell', '1x ae2:item_cell_housing')
        .itemOutputs('1x ae2:portable_item_cell_256k')
        .duration(10 * 20)
        .EUt(GTValues.VA[GTValues.EV])

    event.recipes.gtceu.me_fabricator('ae2_portable_fluid_cell_1k')
        .itemInputs('1x ae2:chest', '1x ae2:cell_component_1k', '1x ae2:energy_cell', '1x ae2:fluid_cell_housing')
        .itemOutputs('1x ae2:portable_fluid_cell_1k')
        .duration(10 * 20)
        .EUt(GTValues.VA[GTValues.EV])

    event.recipes.gtceu.me_fabricator('ae2_portable_fluid_cell_4k')
        .itemInputs('1x ae2:chest', '1x ae2:cell_component_4k', '1x ae2:energy_cell', '1x ae2:fluid_cell_housing')
        .itemOutputs('1x ae2:portable_fluid_cell_4k')
        .duration(10 * 20)
        .EUt(GTValues.VA[GTValues.EV])

    event.recipes.gtceu.me_fabricator('ae2_portable_fluid_cell_16k')
        .itemInputs('1x ae2:chest', '1x ae2:cell_component_16k', '1x ae2:dense_energy_cell', '1x ae2:fluid_cell_housing')
        .itemOutputs('1x ae2:portable_fluid_cell_16k')
        .duration(10 * 20)
        .EUt(GTValues.VA[GTValues.EV])

    event.recipes.gtceu.me_fabricator('ae2_portable_fluid_cell_64k')
        .itemInputs('1x ae2:chest', '1x ae2:cell_component_64k', '1x ae2:dense_energy_cell', '1x ae2:fluid_cell_housing')
        .itemOutputs('1x ae2:portable_fluid_cell_64k')
        .duration(10 * 20)
        .EUt(GTValues.VA[GTValues.EV])

    event.recipes.gtceu.me_fabricator('ae2_portable_fluid_cell_256k')
        .itemInputs('1x ae2:chest', '1x ae2:cell_component_256k', '1x ae2:dense_energy_cell', '1x ae2:fluid_cell_housing')
        .itemOutputs('1x ae2:portable_fluid_cell_256k')
        .duration(10 * 20)
        .EUt(GTValues.VA[GTValues.EV])

    // addon recipes

    // ae2things: floppy disk form factor storage

    // disk_housing: netherite-reinforced compact housing
    event.recipes.gtceu.me_fabricator('ae2things_disk_housing')
        .itemInputs(
            '4x gtceu:sky_steel_plate',
            '2x ae2:quartz_glass',
            '2x gtceu:small_redstone_dust',
            '1x minecraft:amethyst_shard',
            '1x minecraft:netherite_scrap'
        )
        .inputFluids(Fluid.of('gtceu:soldering_alloy', 144))
        .itemOutputs('2x ae2things:disk_housing')
        .duration(20 * 20)
        .EUt(GTValues.VA[GTValues.EV])

    event.recipes.gtceu.me_fabricator('ae2things_disk_drive_1k')
        .itemInputs('1x ae2things:disk_housing', '1x ae2:cell_component_1k')
        .itemOutputs('1x ae2things:disk_drive_1k')
        .duration(5 * 20)
        .EUt(GTValues.VA[GTValues.EV])

    event.recipes.gtceu.me_fabricator('ae2things_disk_drive_4k')
        .itemInputs('1x ae2things:disk_housing', '1x ae2:cell_component_4k')
        .itemOutputs('1x ae2things:disk_drive_4k')
        .duration(5 * 20)
        .EUt(GTValues.VA[GTValues.EV])

    event.recipes.gtceu.me_fabricator('ae2things_disk_drive_16k')
        .itemInputs('1x ae2things:disk_housing', '1x ae2:cell_component_16k')
        .itemOutputs('1x ae2things:disk_drive_16k')
        .duration(5 * 20)
        .EUt(GTValues.VA[GTValues.EV])

    event.recipes.gtceu.me_fabricator('ae2things_disk_drive_64k')
        .itemInputs('1x ae2things:disk_housing', '1x ae2:cell_component_64k')
        .itemOutputs('1x ae2things:disk_drive_64k')
        .duration(5 * 20)
        .EUt(GTValues.VA[GTValues.EV])

    event.recipes.gtceu.me_fabricator('ae2things_disk_drive_256k')
        .itemInputs('1x ae2things:disk_housing', '1x ae2:cell_component_256k')
        .itemOutputs('1x ae2things:disk_drive_256k')
        .duration(5 * 20)
        .EUt(GTValues.VA[GTValues.EV])

    // ae2wtlib: wireless terminals

    // magnet_card: pulls nearby items into inventory via annihilation field
    event.recipes.gtceu.me_fabricator('ae2wtlib_magnet_card')
        .itemInputs(
            '1x ae2:annihilation_plane',
            '2x ae2:advanced_card',
            '2x gtceu:sky_steel_plate',
            '2x gtceu:small_redstone_dust'
        )
        .inputFluids(Fluid.of('gtceu:soldering_alloy', 144))
        .itemOutputs('1x ae2wtlib:magnet_card')
        .duration(20 * 20)
        .EUt(GTValues.VA[GTValues.EV])

    // quantum_bridge_card: cross-dimensional wireless terminal range (IV)
    event.recipes.gtceu.me_fabricator('ae2wtlib_quantum_bridge_card')
        .itemInputs(
            '2x ae2:fluix_pearl',
            '1x ae2:wireless_receiver',
            '1x kubejs:matter_energy_circuit',
            '1x gtceu:iv_field_generator'
        )
        .inputFluids(Fluid.of('gtceu:soldering_alloy', 288))
        .itemOutputs('1x ae2wtlib:quantum_bridge_card')
        .duration(40 * 20)
        .EUt(GTValues.VA[GTValues.IV])

    // wireless_pattern_access_terminal: wireless access to all patterns
    event.recipes.gtceu.me_fabricator('ae2wtlib_wireless_pattern_access_terminal')
        .itemInputs(
            '1x ae2:wireless_receiver',
            '1x ae2:pattern_access_terminal',
            '1x ae2:dense_energy_cell'
        )
        .inputFluids(Fluid.of('gtceu:soldering_alloy', 144))
        .itemOutputs('1x ae2wtlib:wireless_pattern_access_terminal')
        .duration(20 * 20)
        .EUt(GTValues.VA[GTValues.EV])

    // wireless_pattern_encoding_terminal: wireless pattern encoding
    event.recipes.gtceu.me_fabricator('ae2wtlib_wireless_pattern_encoding_terminal')
        .itemInputs(
            '1x ae2:wireless_receiver',
            '1x ae2:pattern_encoding_terminal',
            '1x ae2:dense_energy_cell'
        )
        .inputFluids(Fluid.of('gtceu:soldering_alloy', 144))
        .itemOutputs('1x ae2wtlib:wireless_pattern_encoding_terminal')
        .duration(20 * 20)
        .EUt(GTValues.VA[GTValues.EV])

    // wireless_universal_terminal: combined access and encoding terminal
    event.recipes.gtceu.me_fabricator('ae2wtlib_wireless_universal_terminal')
        .itemInputs(
            '1x ae2wtlib:wireless_pattern_access_terminal',
            '1x ae2wtlib:wireless_pattern_encoding_terminal',
            '1x kubejs:matter_energy_circuit'
        )
        .inputFluids(Fluid.of('gtceu:soldering_alloy', 144))
        .itemOutputs('1x ae2wtlib:wireless_universal_terminal')
        .duration(30 * 20)
        .EUt(GTValues.VA[GTValues.EV])

    // appbot: mana ME storage (Alchemist tier, requires manasteel)

    // mana_cell_housing: manasteel housing with life essence resonance
    event.recipes.gtceu.me_fabricator('appbot_mana_cell_housing')
        .itemInputs(
            '4x botania:manasteel_ingot',
            '2x ae2:quartz_glass',
            '2x botania:life_essence'
        )
        .inputFluids(Fluid.of('gtceu:soldering_alloy', 144))
        .itemOutputs('2x appbot:mana_cell_housing')
        .duration(20 * 20)
        .EUt(GTValues.VA[GTValues.EV])

    event.recipes.gtceu.me_fabricator('appbot_mana_storage_cell_1k')
        .itemInputs('1x appbot:mana_cell_housing', '1x ae2:cell_component_1k')
        .itemOutputs('1x appbot:mana_storage_cell_1k')
        .duration(5 * 20)
        .EUt(GTValues.VA[GTValues.EV])

    event.recipes.gtceu.me_fabricator('appbot_mana_storage_cell_4k')
        .itemInputs('1x appbot:mana_cell_housing', '1x ae2:cell_component_4k')
        .itemOutputs('1x appbot:mana_storage_cell_4k')
        .duration(5 * 20)
        .EUt(GTValues.VA[GTValues.EV])

    event.recipes.gtceu.me_fabricator('appbot_mana_storage_cell_16k')
        .itemInputs('1x appbot:mana_cell_housing', '1x ae2:cell_component_16k')
        .itemOutputs('1x appbot:mana_storage_cell_16k')
        .duration(5 * 20)
        .EUt(GTValues.VA[GTValues.EV])

    event.recipes.gtceu.me_fabricator('appbot_mana_storage_cell_64k')
        .itemInputs('1x appbot:mana_cell_housing', '1x ae2:cell_component_64k')
        .itemOutputs('1x appbot:mana_storage_cell_64k')
        .duration(5 * 20)
        .EUt(GTValues.VA[GTValues.EV])

    event.recipes.gtceu.me_fabricator('appbot_mana_storage_cell_256k')
        .itemInputs('1x appbot:mana_cell_housing', '1x ae2:cell_component_256k')
        .itemOutputs('1x appbot:mana_storage_cell_256k')
        .duration(5 * 20)
        .EUt(GTValues.VA[GTValues.EV])

    event.recipes.gtceu.me_fabricator('appbot_portable_mana_storage_cell_1k')
        .itemInputs('1x ae2:chest', '1x ae2:cell_component_1k', '1x ae2:energy_cell', '1x appbot:mana_cell_housing')
        .itemOutputs('1x appbot:portable_mana_storage_cell_1k')
        .duration(10 * 20)
        .EUt(GTValues.VA[GTValues.EV])

    event.recipes.gtceu.me_fabricator('appbot_portable_mana_storage_cell_4k')
        .itemInputs('1x ae2:chest', '1x ae2:cell_component_4k', '1x ae2:energy_cell', '1x appbot:mana_cell_housing')
        .itemOutputs('1x appbot:portable_mana_storage_cell_4k')
        .duration(10 * 20)
        .EUt(GTValues.VA[GTValues.EV])

    event.recipes.gtceu.me_fabricator('appbot_portable_mana_storage_cell_16k')
        .itemInputs('1x ae2:chest', '1x ae2:cell_component_16k', '1x ae2:dense_energy_cell', '1x appbot:mana_cell_housing')
        .itemOutputs('1x appbot:portable_mana_storage_cell_16k')
        .duration(10 * 20)
        .EUt(GTValues.VA[GTValues.EV])

    event.recipes.gtceu.me_fabricator('appbot_portable_mana_storage_cell_64k')
        .itemInputs('1x ae2:chest', '1x ae2:cell_component_64k', '1x ae2:dense_energy_cell', '1x appbot:mana_cell_housing')
        .itemOutputs('1x appbot:portable_mana_storage_cell_64k')
        .duration(10 * 20)
        .EUt(GTValues.VA[GTValues.EV])

    event.recipes.gtceu.me_fabricator('appbot_portable_mana_storage_cell_256k')
        .itemInputs('1x ae2:chest', '1x ae2:cell_component_256k', '1x ae2:dense_energy_cell', '1x appbot:mana_cell_housing')
        .itemOutputs('1x appbot:portable_mana_storage_cell_256k')
        .duration(10 * 20)
        .EUt(GTValues.VA[GTValues.EV])

    // fluix_mana_pool: AE2 interface integrated into a Botania mana pool
    event.recipes.gtceu.circuit_assembler('appbot_fluix_mana_pool')
        .itemInputs(
            '1x botania:fabulous_pool',
            '1x ae2:interface',
            '1x ae2:formation_core',
            '1x ae2:annihilation_core',
            '2x botania:manasteel_ingot'
        )
        .inputFluids(Fluid.of('gtceu:soldering_alloy', 288))
        .itemOutputs('1x appbot:fluix_mana_pool')
        .duration(30 * 20)
        .EUt(GTValues.VA[GTValues.EV])

    // crazyae2addonslite: advanced AE2 automation utilities

    // ampere_meter: measures EU/AE power flow
    event.recipes.gtceu.circuit_assembler('caae2_ampere_meter')
        .itemInputs(
            '1x ae2:import_bus',
            '1x ae2:interface',
            '1x ae2:export_bus',
            '1x gtceu:ilc_chip'
        )
        .inputFluids(Fluid.of('gtceu:soldering_alloy', 72))
        .itemOutputs('1x crazyae2addonslite:ampere_meter')
        .duration(10 * 20)
        .EUt(GTValues.VA[GTValues.EV])

    // crafting_scheduler: triggers scheduled crafting jobs
    event.recipes.gtceu.circuit_assembler('caae2_crafting_scheduler')
        .itemInputs(
            '1x ae2:pattern_provider',
            '1x ae2:level_emitter',
            '2x gtceu:small_redstone_dust',
            '1x gtceu:ilc_chip'
        )
        .inputFluids(Fluid.of('gtceu:soldering_alloy', 72))
        .itemOutputs('1x crazyae2addonslite:crafting_scheduler')
        .duration(10 * 20)
        .EUt(GTValues.VA[GTValues.EV])

    // crazy_upgrade: expands pattern provider capacity massively
    event.recipes.gtceu.me_fabricator('caae2_crazy_upgrade')
        .itemInputs(
            '8x ae2:pattern_provider',
            '1x ae2:advanced_card',
            '2x kubejs:matter_energy_circuit'
        )
        .inputFluids(Fluid.of('gtceu:soldering_alloy', 288))
        .itemOutputs('1x crazyae2addonslite:crazy_upgrade')
        .duration(40 * 20)
        .EUt(GTValues.VA[GTValues.EV])

    // crazy_emitter_multiplier: scales level emitter threshold values
    event.recipes.gtceu.circuit_assembler('caae2_crazy_emitter_multiplier')
        .itemInputs(
            '1x ae2:level_emitter',
            '1x gtceu:cpu_chip',
            '2x gtceu:small_redstone_dust'
        )
        .inputFluids(Fluid.of('gtceu:soldering_alloy', 72))
        .itemOutputs('1x crazyae2addonslite:crazy_emitter_multiplier')
        .duration(10 * 20)
        .EUt(GTValues.VA[GTValues.EV])

    // display_monitor: semi_dark_monitor with network text display
    event.recipes.gtceu.circuit_assembler('caae2_display_monitor')
        .itemInputs(
            '1x ae2:semi_dark_monitor',
            '1x ae2:advanced_card',
            '1x gtceu:ilc_chip'
        )
        .inputFluids(Fluid.of('gtceu:soldering_alloy', 72))
        .itemOutputs('2x crazyae2addonslite:display_monitor')
        .duration(10 * 20)
        .EUt(GTValues.VA[GTValues.EV])

    // nbt_export_bus: export bus filtered by NBT data
    event.recipes.gtceu.circuit_assembler('caae2_nbt_export_bus')
        .itemInputs(
            '1x ae2:export_bus',
            '1x gtceu:cpu_chip',
            '2x minecraft:name_tag'
        )
        .inputFluids(Fluid.of('gtceu:soldering_alloy', 72))
        .itemOutputs('1x crazyae2addonslite:nbt_export_bus')
        .duration(10 * 20)
        .EUt(GTValues.VA[GTValues.EV])

    // nbt_storage_bus: storage bus filtered by NBT data
    event.recipes.gtceu.circuit_assembler('caae2_nbt_storage_bus')
        .itemInputs(
            '1x ae2:storage_bus',
            '1x gtceu:cpu_chip',
            '2x minecraft:name_tag'
        )
        .inputFluids(Fluid.of('gtceu:soldering_alloy', 72))
        .itemOutputs('1x crazyae2addonslite:nbt_storage_bus')
        .duration(10 * 20)
        .EUt(GTValues.VA[GTValues.EV])

    // nbt_view_cell: view cell filtered by NBT
    event.recipes.gtceu.circuit_assembler('caae2_nbt_view_cell')
        .itemInputs(
            '1x ae2:view_cell',
            '1x minecraft:name_tag',
            '1x gtceu:ilc_chip'
        )
        .inputFluids(Fluid.of('gtceu:soldering_alloy', 72))
        .itemOutputs('1x crazyae2addonslite:nbt_view_cell')
        .duration(10 * 20)
        .EUt(GTValues.VA[GTValues.EV])

    // tag_view_cell: view cell filtered by item tag
    event.recipes.gtceu.circuit_assembler('caae2_tag_view_cell')
        .itemInputs(
            '1x ae2:view_cell',
            '1x minecraft:book',
            '1x gtceu:ilc_chip'
        )
        .inputFluids(Fluid.of('gtceu:soldering_alloy', 72))
        .itemOutputs('1x crazyae2addonslite:tag_view_cell')
        .duration(10 * 20)
        .EUt(GTValues.VA[GTValues.EV])

    // redstone_emitter: named redstone signal level emitter
    event.recipes.gtceu.circuit_assembler('caae2_redstone_emitter')
        .itemInputs(
            '1x ae2:level_emitter',
            '2x gtceu:small_redstone_dust',
            '1x gtceu:ilc_chip'
        )
        .inputFluids(Fluid.of('gtceu:soldering_alloy', 72))
        .itemOutputs('2x crazyae2addonslite:redstone_emitter')
        .duration(10 * 20)
        .EUt(GTValues.VA[GTValues.EV])

    // redstone_terminal: terminal with redstone channel status view
    event.recipes.gtceu.circuit_assembler('caae2_redstone_terminal')
        .itemInputs(
            '1x ae2:terminal',
            '2x gtceu:small_redstone_dust',
            '1x gtceu:ilc_chip'
        )
        .inputFluids(Fluid.of('gtceu:soldering_alloy', 72))
        .itemOutputs('1x crazyae2addonslite:redstone_terminal')
        .duration(10 * 20)
        .EUt(GTValues.VA[GTValues.EV])

    // wireless_redstone_terminal: handheld redstone terminal
    event.recipes.gtceu.me_fabricator('caae2_wireless_redstone_terminal')
        .itemInputs(
            '1x ae2:wireless_receiver',
            '1x crazyae2addonslite:redstone_terminal',
            '1x ae2:dense_energy_cell'
        )
        .inputFluids(Fluid.of('gtceu:soldering_alloy', 144))
        .itemOutputs('1x crazyae2addonslite:wireless_redstone_terminal')
        .duration(20 * 20)
        .EUt(GTValues.VA[GTValues.EV])

    // wireless_notification_terminal: alerts when stock thresholds cross
    event.recipes.gtceu.me_fabricator('caae2_wireless_notification_terminal')
        .itemInputs(
            '1x crazyae2addonslite:wireless_redstone_terminal',
            '1x crazyae2addonslite:automation_upgrade_card',
            '1x kubejs:matter_energy_circuit'
        )
        .inputFluids(Fluid.of('gtceu:soldering_alloy', 144))
        .itemOutputs('1x crazyae2addonslite:wireless_notification_terminal')
        .duration(20 * 20)
        .EUt(GTValues.VA[GTValues.EV])

    // round_robin_item_p2p_tunnel: distributes items evenly across outputs
    event.recipes.gtceu.circuit_assembler('caae2_round_robin_item_p2p_tunnel')
        .itemInputs(
            '1x ae2:me_p2p_tunnel',
            '1x ae2:equal_distribution_card',
            '1x gtceu:cpu_chip'
        )
        .inputFluids(Fluid.of('gtceu:soldering_alloy', 72))
        .itemOutputs('1x crazyae2addonslite:round_robin_item_p2p_tunnel')
        .duration(10 * 20)
        .EUt(GTValues.VA[GTValues.EV])

    // automation_upgrade_card: enables automation of wireless terminal actions
    event.recipes.gtceu.circuit_assembler('caae2_automation_upgrade_card')
        .itemInputs(
            '1x ae2:advanced_card',
            '1x ae2:crafting_unit',
            '1x gtceu:cpu_chip'
        )
        .inputFluids(Fluid.of('gtceu:soldering_alloy', 72))
        .itemOutputs('1x crazyae2addonslite:automation_upgrade_card')
        .duration(10 * 20)
        .EUt(GTValues.VA[GTValues.EV])

    // player_upgrade_card: grants player-level permissions to automation
    event.recipes.gtceu.circuit_assembler('caae2_player_upgrade_card')
        .itemInputs(
            '1x ae2:advanced_card',
            '1x gtceu:ev_robot_arm',
            '1x gtceu:cpu_chip'
        )
        .inputFluids(Fluid.of('gtceu:soldering_alloy', 144))
        .itemOutputs('1x crazyae2addonslite:player_upgrade_card')
        .duration(10 * 20)
        .EUt(GTValues.VA[GTValues.EV])

    // wormhole_tunnel: all-in-one multi-type P2P tunnel (IV)
    event.recipes.gtceu.me_fabricator('caae2_wormhole_tunnel')
        .itemInputs(
            '1x ae2:item_p2p_tunnel',
            '1x ae2:fluid_p2p_tunnel',
            '1x ae2:fe_p2p_tunnel',
            '1x ae2:me_p2p_tunnel',
            '2x kubejs:matter_energy_circuit',
            '1x minecraft:nether_star'
        )
        .inputFluids(Fluid.of('gtceu:soldering_alloy', 576))
        .itemOutputs('1x crazyae2addonslite:wormhole_tunnel')
        .duration(60 * 20)
        .EUt(GTValues.VA[GTValues.IV])

    // ae2insertexportcard: high-bandwidth import/export cards

    // export_card: high-bandwidth configurable ME export
    event.recipes.gtceu.me_fabricator('ae2iec_export_card')
        .itemInputs(
            '1x ae2:export_bus',
            '2x kubejs:matter_energy_circuit',
            '2x ae2:advanced_card',
            '2x gtceu:small_redstone_dust'
        )
        .inputFluids(Fluid.of('gtceu:soldering_alloy', 288))
        .itemOutputs('1x ae2insertexportcard:export_card')
        .duration(20 * 20)
        .EUt(GTValues.VA[GTValues.EV])

    // insert_card: high-bandwidth configurable ME import
    event.recipes.gtceu.me_fabricator('ae2iec_insert_card')
        .itemInputs(
            '1x ae2:import_bus',
            '2x kubejs:matter_energy_circuit',
            '2x ae2:advanced_card',
            '2x gtceu:small_redstone_dust'
        )
        .inputFluids(Fluid.of('gtceu:soldering_alloy', 288))
        .itemOutputs('1x ae2insertexportcard:insert_card')
        .duration(20 * 20)
        .EUt(GTValues.VA[GTValues.EV])

    // ae2netanalyser: network inspection tool

    // network_analyser: handheld tool to inspect ME network topology
    event.recipes.gtceu.circuit_assembler('ae2_network_analyser')
        .itemInputs(
            '2x create:copper_sheet',
            '2x gtceu:sky_steel_plate',
            '1x kubejs:matter_energy_circuit',
            '2x ae2:sky_dust'
        )
        .inputFluids(Fluid.of('gtceu:soldering_alloy', 144))
        .itemOutputs('1x ae2netanalyser:network_analyser')
        .duration(15 * 20)
        .EUt(GTValues.VA[GTValues.EV])

    // mae2: modern ae2 additions

    // eu_p2p_tunnel: GTCEu EU power point-to-point tunnel
    event.recipes.gtceu.me_fabricator('mae2_eu_p2p_tunnel')
        .itemInputs(
            '1x ae2:me_p2p_tunnel',
            '2x gtceu:ev_field_generator',
            '2x gtceu:small_redstone_dust'
        )
        .inputFluids(Fluid.of('gtceu:soldering_alloy', 144))
        .itemOutputs('1x mae2:eu_p2p_tunnel')
        .duration(20 * 20)
        .EUt(GTValues.VA[GTValues.EV])

    // eu_multi_p2p_tunnel: multi-input EU P2P
    event.recipes.gtceu.me_fabricator('mae2_eu_multi_p2p_tunnel')
        .itemInputs(
            '1x mae2:eu_p2p_tunnel',
            '1x kubejs:matter_energy_circuit'
        )
        .inputFluids(Fluid.of('gtceu:soldering_alloy', 144))
        .itemOutputs('1x mae2:eu_multi_p2p_tunnel')
        .duration(20 * 20)
        .EUt(GTValues.VA[GTValues.EV])

    // pattern_p2p_tunnel: transfers pattern provider channels
    event.recipes.gtceu.me_fabricator('mae2_pattern_p2p_tunnel')
        .itemInputs(
            '1x ae2:me_p2p_tunnel',
            '2x ae2:formation_core',
            '1x kubejs:matter_energy_circuit'
        )
        .inputFluids(Fluid.of('gtceu:soldering_alloy', 144))
        .itemOutputs('1x mae2:pattern_p2p_tunnel')
        .duration(20 * 20)
        .EUt(GTValues.VA[GTValues.EV])

    // multi p2p variants: add multi-input capability to each tunnel type
    event.recipes.gtceu.me_fabricator('mae2_pattern_multi_p2p_tunnel')
        .itemInputs('1x mae2:pattern_p2p_tunnel', '1x kubejs:matter_energy_circuit')
        .inputFluids(Fluid.of('gtceu:soldering_alloy', 144))
        .itemOutputs('1x mae2:pattern_multi_p2p_tunnel')
        .duration(20 * 20)
        .EUt(GTValues.VA[GTValues.EV])

    event.recipes.gtceu.circuit_assembler('mae2_fe_multi_p2p_tunnel')
        .itemInputs('1x ae2:fe_p2p_tunnel', '1x kubejs:matter_energy_circuit', '1x gtceu:cpu_chip')
        .inputFluids(Fluid.of('gtceu:soldering_alloy', 144))
        .itemOutputs('1x mae2:fe_multi_p2p_tunnel')
        .duration(20 * 20)
        .EUt(GTValues.VA[GTValues.EV])

    event.recipes.gtceu.circuit_assembler('mae2_fluid_multi_p2p_tunnel')
        .itemInputs('1x ae2:fluid_p2p_tunnel', '1x kubejs:matter_energy_circuit', '1x gtceu:cpu_chip')
        .inputFluids(Fluid.of('gtceu:soldering_alloy', 144))
        .itemOutputs('1x mae2:fluid_multi_p2p_tunnel')
        .duration(20 * 20)
        .EUt(GTValues.VA[GTValues.EV])

    event.recipes.gtceu.circuit_assembler('mae2_item_multi_p2p_tunnel')
        .itemInputs('1x ae2:item_p2p_tunnel', '1x kubejs:matter_energy_circuit', '1x gtceu:cpu_chip')
        .inputFluids(Fluid.of('gtceu:soldering_alloy', 144))
        .itemOutputs('1x mae2:item_multi_p2p_tunnel')
        .duration(20 * 20)
        .EUt(GTValues.VA[GTValues.EV])

    event.recipes.gtceu.circuit_assembler('mae2_redstone_multi_p2p_tunnel')
        .itemInputs('1x ae2:redstone_p2p_tunnel', '1x kubejs:matter_energy_circuit', '1x gtceu:cpu_chip')
        .inputFluids(Fluid.of('gtceu:soldering_alloy', 144))
        .itemOutputs('1x mae2:redstone_multi_p2p_tunnel')
        .duration(20 * 20)
        .EUt(GTValues.VA[GTValues.EV])

    // crafting co-processing units: scale up crafting CPU speed
    event.recipes.gtceu.me_fabricator('mae2_4x_crafting_accelerator')
        .itemInputs(
            '4x ae2:crafting_accelerator',
            '1x kubejs:matter_energy_circuit',
            '2x ae2:fluix_glass_cable'
        )
        .inputFluids(Fluid.of('gtceu:soldering_alloy', 144))
        .itemOutputs('1x mae2:4x_crafting_accelerator')
        .duration(20 * 20)
        .EUt(GTValues.VA[GTValues.EV])

    event.recipes.gtceu.me_fabricator('mae2_16x_crafting_accelerator')
        .itemInputs(
            '4x mae2:4x_crafting_accelerator',
            '1x gtceu:ev_sensor',
            '2x kubejs:matter_energy_circuit'
        )
        .inputFluids(Fluid.of('gtceu:soldering_alloy', 288))
        .itemOutputs('1x mae2:16x_crafting_accelerator')
        .duration(40 * 20)
        .EUt(GTValues.VA[GTValues.EV])

    event.recipes.gtceu.me_fabricator('mae2_64x_crafting_accelerator')
        .itemInputs(
            '4x mae2:16x_crafting_accelerator',
            '1x gtceu:iv_sensor',
            '2x kubejs:matter_energy_circuit'
        )
        .inputFluids(Fluid.of('gtceu:soldering_alloy', 576))
        .itemOutputs('1x mae2:64x_crafting_accelerator')
        .duration(60 * 20)
        .EUt(GTValues.VA[GTValues.IV])

    event.recipes.gtceu.me_fabricator('mae2_256x_crafting_accelerator')
        .itemInputs(
            '4x mae2:64x_crafting_accelerator',
            '1x gtceu:luv_sensor',
            '4x kubejs:matter_energy_circuit'
        )
        .inputFluids(Fluid.of('gtceu:soldering_alloy', 1152))
        .itemOutputs('1x mae2:256x_crafting_accelerator')
        .duration(120 * 20)
        .EUt(GTValues.VA[GTValues.LuV])

})
