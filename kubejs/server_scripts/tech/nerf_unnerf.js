//this files name doesn't necessarily make sense by itself but
//this is for "unnerfing" some gregtech nerfs to allow them to
//be craftable by magic players, with a slight amount of difficulty

StartupEvents.registry('item', event => {
    
    event.custom(
        {
        "type": "create:sandpaper_polishing",
        "ingredients": [
            {
            "item": "aether:quicksoil_glass"
            }
        ],
        "results": [
            {
            "item": "gtceu:glass_lens"
            }
        ]
        }
    );

    
})
