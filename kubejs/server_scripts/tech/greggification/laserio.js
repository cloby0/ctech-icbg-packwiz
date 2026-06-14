ServerEvents.recipes(event => {

    const laserio_items = [
        'laserio:logic_chip_raw',
        'laserio:logic_chip',
        'laserio:laser_connector',
        'laserio:laser_connector_advanced',
        'laserio:laser_node',
        'laserio:laser_wrench',
        'laserio:card_holder',
        'laserio:card_item',
        'laserio:card_fluid',
        'laserio:card_energy',
        'laserio:card_redstone',
        'laserio:filter_basic',
        'laserio:overclocker_card',
        'laserio:overclocker_node',
    ]
    laserio_items.forEach(item => event.remove({ output: item }))

    // logic_chip is the chokepoint; HV circuit gates it to late MV
    event.recipes.gtceu.assembler('laserio_logic_chip')
        .itemInputs('2x gtceu:aluminium_plate', '1x #gtceu:circuits/hv', '2x minecraft:redstone')
        .itemOutputs('4x laserio:logic_chip')
        .duration(10 * 20)
        .EUt(GTValues.VA[GTValues.MV])

    event.recipes.gtceu.assembler('laserio_laser_connector')
        .itemInputs('laserio:logic_chip', '2x gtceu:aluminium_plate', 'minecraft:glass', '2x minecraft:redstone')
        .itemOutputs('laserio:laser_connector')
        .duration(10 * 20)
        .EUt(GTValues.VA[GTValues.MV])

    event.recipes.gtceu.assembler('laserio_laser_connector_advanced')
        .itemInputs('laserio:laser_connector', '2x gtceu:stainless_steel_plate', 'minecraft:ender_pearl', '1x #gtceu:circuits/hv')
        .itemOutputs('laserio:laser_connector_advanced')
        .duration(12 * 20)
        .EUt(GTValues.VA[GTValues.HV])

    event.recipes.gtceu.assembler('laserio_laser_node')
        .itemInputs('laserio:laser_connector', '4x gtceu:aluminium_plate', '2x minecraft:glass_pane')
        .itemOutputs('laserio:laser_node')
        .duration(10 * 20)
        .EUt(GTValues.VA[GTValues.MV])

    event.recipes.gtceu.assembler('laserio_laser_wrench')
        .itemInputs('laserio:logic_chip', '2x gtceu:aluminium_ingot')
        .itemOutputs('laserio:laser_wrench')
        .duration(8 * 20)
        .EUt(GTValues.VA[GTValues.MV])

    event.recipes.gtceu.assembler('laserio_card_holder')
        .itemInputs('laserio:logic_chip', '2x gtceu:steel_plate', 'minecraft:chest')
        .itemOutputs('laserio:card_holder')
        .duration(8 * 20)
        .EUt(GTValues.VA[GTValues.MV])

    event.recipes.gtceu.assembler('laserio_card_item')
        .itemInputs('laserio:logic_chip', 'gtceu:aluminium_plate', 'minecraft:lapis_lazuli', '2x minecraft:redstone')
        .itemOutputs('laserio:card_item')
        .duration(8 * 20)
        .EUt(GTValues.VA[GTValues.MV])

    event.recipes.gtceu.assembler('laserio_card_fluid')
        .itemInputs('laserio:logic_chip', 'gtceu:aluminium_plate', 'minecraft:bucket', '2x minecraft:redstone')
        .itemOutputs('laserio:card_fluid')
        .duration(8 * 20)
        .EUt(GTValues.VA[GTValues.MV])

    event.recipes.gtceu.assembler('laserio_card_energy')
        .itemInputs('laserio:logic_chip', 'gtceu:aluminium_plate', 'minecraft:redstone_block', '2x minecraft:redstone')
        .itemOutputs('laserio:card_energy')
        .duration(8 * 20)
        .EUt(GTValues.VA[GTValues.MV])

    event.recipes.gtceu.assembler('laserio_card_redstone')
        .itemInputs('laserio:logic_chip', 'gtceu:aluminium_plate', '4x minecraft:redstone')
        .itemOutputs('laserio:card_redstone')
        .duration(8 * 20)
        .EUt(GTValues.VA[GTValues.MV])

    // filter_basic gated here; filter_tag/count/mod/nbt keep their shapeless recipes
    event.recipes.gtceu.assembler('laserio_filter_basic')
        .itemInputs('laserio:logic_chip', '2x minecraft:glass_pane', '2x gtceu:aluminium_plate')
        .itemOutputs('4x laserio:filter_basic')
        .duration(10 * 20)
        .EUt(GTValues.VA[GTValues.MV])

    event.recipes.gtceu.assembler('laserio_overclocker_card')
        .itemInputs('laserio:logic_chip', 'gtceu:aluminium_plate', '2x minecraft:redstone')
        .itemOutputs('laserio:overclocker_card')
        .duration(8 * 20)
        .EUt(GTValues.VA[GTValues.MV])

    event.recipes.gtceu.assembler('laserio_overclocker_node')
        .itemInputs('laserio:logic_chip', 'gtceu:stainless_steel_plate', '2x minecraft:redstone')
        .itemOutputs('laserio:overclocker_node')
        .duration(10 * 20)
        .EUt(GTValues.VA[GTValues.HV])

})
