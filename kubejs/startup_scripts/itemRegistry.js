StartupEvents.registry('item', event => {
    event.create('glowing_compound_dust')
    event.create('impure_glimmering_dust')

    event.create('raw_source_gem')
    event.create('pure_source_gem_dust')
    event.create('rough_source_gem')

    event.create('magebloom_sieve')

    event.create('holy_silver_blend')
    event.create('element_attunement_stone')
    event.create('chaos_essence')

    event.create('disorganized_metal_form')

    event.create('florid_compound')
    event.create('living_metalloid')

    event.create('weak_elementium_dust')
    event.create('raw_elementite')
    event.create('elementite_dust')

    event.create('vengeful_gaia_spirit')
    event.create('soul_of_gaia')
    event.create('boundless_gaia_spirit_ingot')
})

GTCEuStartupEvents.registry('gtceu:material', event => {
    event.create('ambrosium')
        .gem()
        .color(0xf1ef5f)
        .iconSet(GTMaterialIconSet.RUBY)
        .flags(
            GTMaterialFlags.GENERATE_LENS
        )
        .ore()
    
    event.create('luminessence')
        .dust()
        .color(0xfafa5d)
        .iconSet(GTMaterialIconSet.SHINY)
    
    event.create('holy_silver')
        .ingot()
        .color(0xe7f79e)
        .iconSet(GTMaterialIconSet.BRIGHT)
        .flags(
            GTMaterialFlags.GENERATE_PLATE,
            GTMaterialFlags.GENERATE_ROD,
            GTMaterialFlags.GENERATE_BOLT_SCREW,
            GTMaterialFlags.GENERATE_LONG_ROD,
            GTMaterialFlags.GENERATE_FOIL
        )
    
    event.create('prima_materia')
        .ingot()
        .color(0xAEF76D)
        .iconSet(GTMaterialIconSet.SHINY)
        .flags(
            GTMaterialFlags.GENERATE_PLATE,
            GTMaterialFlags.GENERATE_ROD,
            GTMaterialFlags.GENERATE_BOLT_SCREW,
            GTMaterialFlags.GENERATE_LONG_ROD
        )
    
    event.create('abstract_metal')
        .ingot()
        .color(0xA2A6A2)
        .secondaryColor(0x505350)
        .iconSet(GTMaterialIconSet.METALLIC)
    
    event.create('source')
        .gem()
        .ore()
        .color(0xAE44E2)
        .secondaryColor(0xE244C8)
        .iconSet(GTMaterialIconSet.QUARTZ)
        .flags(
            GTMaterialFlags.GENERATE_LENS, 
            GTMaterialFlags.NO_ORE_SMELTING, 
            GTMaterialFlags.GENERATE_ROD
        )

    event.create('zanite')
        .gem()
        .ore()
        .color(0x9455F2)
        .secondaryColor(0x431686)
        .iconSet(GTMaterialIconSet.EMERALD)
        .flags(
            GTMaterialFlags.GENERATE_LENS, 
            GTMaterialFlags.GENERATE_ROD
        )

    event.create('mithril')
        .ingot()
        .ore()
        .color(0xc7ebec)
        .secondaryColor(0x486b82)
        .iconSet(GTMaterialIconSet.SHINY)

    event.create('gravitite')
        .ingot()
        .ore()
        .color(0xE072D7)
        .secondaryColor(0x871F7E)
        .iconSet(GTMaterialIconSet.METALLIC)

    event.create('concepts')
        .fluid()
        .color(0x500bbf)
        .flags(GTMaterialFlags.STICKY)
        .flags(GTMaterialFlags.PHOSPHORESCENT)

    event.create('metal_form')
        .fluid()
        .color(0xA2A6A2)
        .flags(GTMaterialFlags.STICKY)
        .flags(GTMaterialFlags.PHOSPHORESCENT)
})
