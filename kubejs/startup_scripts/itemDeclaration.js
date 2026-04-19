StartupEvents.registry('item', event => {
    event.create('glowing_compound_dust')
    event.create('impure_glimmering_dust')

    event.create('raw_source_gem')
    event.create('pure_source_gem_dust')
    event.create('rough_source_gem')

    event.create('holy_silver_blend')
    event.create('element_attunement_stone')
    event.create('chaos_essence')

    event.create('magebloom_sieve')
    event.create('prima_materia_sieve')

    event.create('weak_elementium_dust')
    event.create('raw_elementite')
    event.create('elementite_dust')

    event.create('terra_firma_mote')
    .displayName("Mote of the Terra Firma")
})

GTCEuStartupEvents.registry('gtceu:material', event => {
    event.create('ambrosium').gem().color(0xf1ef5f)
    event.create('luminessence').dust().color(0xfafa5d)
    event.create('holy_silver').ingot().color(0xe7f79e)
    event.create('prima_materia').ingot().color(0xAEF76D)
    event.create('abstract_metal').ingot().color(0xA2A6A2)
    event.create('source').gem().color(0xAE44E2)
})
