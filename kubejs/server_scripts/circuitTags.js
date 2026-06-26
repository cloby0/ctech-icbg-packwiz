ServerEvents.tags('item', event => {
    // Draconic theme: ZPM → UEV
    event.add('gtceu:circuits/zpm', 'kubejs:draconic_processor')
    event.add('gtceu:circuits/uv', 'kubejs:draconic_processor_assembly')
    event.add('gtceu:circuits/uhv', 'kubejs:draconic_processor_supercomputer')
    event.add('gtceu:circuits/uev', 'kubejs:draconic_processor_mainframe')

    // Chaos theme: UV → UIV
    event.add('gtceu:circuits/uv', 'kubejs:chaos_processor')
    event.add('gtceu:circuits/uhv', 'kubejs:chaos_processor_assembly')
    event.add('gtceu:circuits/uev', 'kubejs:chaos_processor_supercomputer')
    event.add('gtceu:circuits/uiv', 'kubejs:chaos_processor_mainframe')

    // Cumium theme: UEV → UXV
    event.add('gtceu:circuits/uev', 'kubejs:cumium_processor')
    event.add('gtceu:circuits/uiv', 'kubejs:cumium_processor_assembly')
    event.add('gtceu:circuits/uxv', 'kubejs:artificial_cumium_brain')
})
