GTCEuStartupEvents.registry('gtceu:dimension_marker', event => {
        event.create('ad_astra:moon')
        .iconSupplier(() => Item.of('ad_astra:mars_globe').getItem())
        .tier(0)
        .overrideName('Moon')
})

GTCEuStartupEvents.registry('gtceu:world_gen_layer', event => {
    event.create('holystone')
        .targets('#aether:holystone') 
        .dimensions('aether:the_aether')
})