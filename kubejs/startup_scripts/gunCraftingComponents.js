// Tiered lookup table for gun sub-assemblies, same pattern GTCEu uses internally for HULL/CABLE.
// Used in guns.js via CraftingComponent.get('gun_receiver').get(tier).
GTCEuStartupEvents.craftingComponents(event => {

    event.createItem('gun_receiver', Item.of('kubejs:lv_gun_receiver'))
        .addItem(GTValues.LV, Item.of('kubejs:lv_gun_receiver'))
        .addItem(GTValues.MV, Item.of('kubejs:mv_gun_receiver'))
        .addItem(GTValues.HV, Item.of('kubejs:hv_gun_receiver'))
        .addItem(GTValues.EV, Item.of('kubejs:ev_gun_receiver'))
        .addItem(GTValues.IV, Item.of('kubejs:iv_gun_receiver'))
        .addItem(GTValues.LuV, Item.of('kubejs:luv_gun_receiver'))

    event.createItem('gun_barrel', Item.of('kubejs:lv_gun_barrel'))
        .addItem(GTValues.LV, Item.of('kubejs:lv_gun_barrel'))
        .addItem(GTValues.MV, Item.of('kubejs:mv_gun_barrel'))
        .addItem(GTValues.HV, Item.of('kubejs:hv_gun_barrel'))
        .addItem(GTValues.EV, Item.of('kubejs:ev_gun_barrel'))
        .addItem(GTValues.IV, Item.of('kubejs:iv_gun_barrel'))
        .addItem(GTValues.LuV, Item.of('kubejs:luv_gun_barrel'))

    event.createItem('gun_fire_control', Item.of('kubejs:lv_gun_fire_control'))
        .addItem(GTValues.LV, Item.of('kubejs:lv_gun_fire_control'))
        .addItem(GTValues.MV, Item.of('kubejs:mv_gun_fire_control'))
        .addItem(GTValues.HV, Item.of('kubejs:hv_gun_fire_control'))
        .addItem(GTValues.EV, Item.of('kubejs:ev_gun_fire_control'))
        .addItem(GTValues.IV, Item.of('kubejs:iv_gun_fire_control'))
        .addItem(GTValues.LuV, Item.of('kubejs:luv_gun_fire_control'))
})
