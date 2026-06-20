// UHV has two circuits: wetware_processor_mainframe (GT-native, first) and draconic_resonance_assembly (gated, second).
// UEV and UIV circuits don't exist in GTCEu — registered as kubejs items and tagged here.
ServerEvents.tags('item', event => {
    event.add('gtceu:circuits/uhv', 'kubejs:draconic_resonance_assembly')
    event.add('gtceu:circuits/uev', 'kubejs:chaos_harmonic_mainframe')
    event.add('gtceu:circuits/uiv', 'kubejs:cumium_singularity_core')
})
