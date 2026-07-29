ServerEvents.tags('item', event => {
    event.add('gtceu:circuits/zpm', 'kubejs:argentware_processor')
    event.add('gtceu:circuits/uv', 'kubejs:argentware_processor_assembly')
    event.add('gtceu:circuits/uhv', 'kubejs:argentware_processor_supercomputer')
    event.add('gtceu:circuits/uev', 'kubejs:argentware_processor_mainframe')

    event.add('gtceu:circuits/uv', 'kubejs:wraithware_processor')
    event.add('gtceu:circuits/uhv', 'kubejs:wraithware_processor_assembly')
    event.add('gtceu:circuits/uev', 'kubejs:wraithware_processor_supercomputer')
    event.add('gtceu:circuits/uiv', 'kubejs:wraithware_processor_mainframe')

    event.add('gtceu:circuits/uev', 'kubejs:cumium_processor')
    event.add('gtceu:circuits/uiv', 'kubejs:cumium_processor_assembly')
    event.add('gtceu:circuits/uxv', 'kubejs:artificial_cumium_brain')
})
