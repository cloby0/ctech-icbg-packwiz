GTCEuStartupEvents.registry('gtceu:dimension_marker', event => {
        event.create('moon_stone')
        .iconSupplier(() => Item.of('ad_astra:moon_globe').getItem())
        .tier(0)
        .overrideName('Moon')
})

GTCEuStartupEvents.registry('gtceu:world_gen_layer', event => {
    event.create('holystone')
        .targets('#aether:holystone') 
        .dimensions('aether:the_aether')
})