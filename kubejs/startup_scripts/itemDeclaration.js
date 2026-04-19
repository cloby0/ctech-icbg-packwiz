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
})

GTCEuStartupEvents.registry('gtceu:material', event => {
    event.create('ambrosium')
        .gem()

    event.create('luminessence')
        .dust()

    event.create('holy_silver')
        .ingot()

    event.custom('prima_materia')
        .ingot()

    event.custom('abstract_metal')
        .ingot()

    event.custom('source')
        .gem()
})
