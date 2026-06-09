ServerEvents.recipes(event => {

    // --- removals ---

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

    // --- sky steel processing ---

    // sky stone → sky dust via macerator
    event.recipes.gtceu.macerator('sky_stone_macerator')
        .itemInputs('1x ae2:sky_stone_block')
        .itemOutputs('4x ae2:sky_dust')
        .chancedOutput('gtceu:small_silicon_dust', 3000, 200)
        .duration(15 * 20)
        .EUt(GTValues.VA[GTValues.MV])

    // sky dust + steel + fluix crystal → sky steel ingot
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

    // --- ae2 components ---

    // silicon wafer → silicon ingot in circuit_assembler
    event.recipes.gtceu.circuit_assembler('ae2_silicon')
        .itemInputs('1x gtceu:silicon_wafer')
        .inputFluids(Fluid.of('gtceu:soldering_alloy', 36))
        .itemOutputs('4x gtceu:silicon_ingot')
        .duration(5 * 20)
        .EUt(GTValues.VA[GTValues.MV])

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
            '2x gtceu:silicon_ingot',
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
            '2x gtceu:silicon_ingot',
            '1x minecraft:redstone'
        )
        .inputFluids(Fluid.of('gtceu:soldering_alloy', 72))
        .itemOutputs('1x ae2:annihilation_core')
        .duration(8 * 20)
        .EUt(GTValues.VA[GTValues.MV])

    // --- processors (replacing inscriber) ---
    // signalum = signal-conducting alloy → logic (control signals)
    event.recipes.gtceu.me_fabricator('ae2_logic_processor')
        .itemInputs(
            '2x gtceu:signalum_plate',
            '1x gtceu:silicon_ingot',
            '2x ae2:certus_quartz_dust'
        )
        .inputFluids(Fluid.of('gtceu:soldering_alloy', 72))
        .itemOutputs('2x ae2:logic_processor')
        .duration(10 * 20)
        .EUt(GTValues.VA[GTValues.EV])

    // enderium = ender-infused alloy → engineering (spatial wiring)
    event.recipes.gtceu.me_fabricator('ae2_engineering_processor')
        .itemInputs(
            '2x gtceu:enderium_plate',
            '1x gtceu:silicon_ingot',
            '2x ae2:certus_quartz_dust'
        )
        .inputFluids(Fluid.of('gtceu:soldering_alloy', 72))
        .itemOutputs('2x ae2:engineering_processor')
        .duration(10 * 20)
        .EUt(GTValues.VA[GTValues.EV])

    // lumium = light-conducting alloy → calculation (optical processing)
    event.recipes.gtceu.me_fabricator('ae2_calculation_processor')
        .itemInputs(
            '2x gtceu:lumium_plate',
            '1x gtceu:silicon_ingot',
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

    // --- network cables ---

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

    // --- network machines ---

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

    // --- storage ---

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
            '2x gtceu:silicon_ingot'
        )
        .inputFluids(Fluid.of('gtceu:soldering_alloy', 72))
        .itemOutputs('2x ae2:cell_component_1k')
        .duration(20 * 20)
        .EUt(GTValues.VA[GTValues.EV])

    event.recipes.gtceu.me_fabricator('ae2_cell_component_4k')
        .itemInputs(
            '2x gtceu:sky_steel_plate',
            '4x ae2:certus_quartz_crystal',
            '2x gtceu:silicon_ingot',
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
            '2x gtceu:silicon_ingot',
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
            '2x gtceu:silicon_ingot',
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
            '2x gtceu:silicon_ingot',
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

})
