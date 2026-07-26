WorldgenEvents.remove(event => {
    // Block-ID scan strips all features containing these ore blocks regardless of feature name.
    // Malum's overworld quartz duplicates the GT quartzite line; its other ores are kept.
    event.removeOres(props => {
        props.blocks = [
            "malum:natural_quartz_ore",
            "malum:deepslate_quartz_ore",
            "malum:soulstone_ore",
            "malum:deepslate_soulstone_ore",
            "malum:brilliant_stone",
            "malum:brilliant_deepslate",
            "malum:blazing_quartz_ore"
        ]
    })
})
