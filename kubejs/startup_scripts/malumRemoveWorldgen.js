WorldgenEvents.remove(event => {
    // Block-ID scan strips all features containing these ore blocks regardless of feature name.
    // Malum's overworld quartz duplicates the GT quartzite line; its other ores are kept.
    // cthonic_gold_ore was missed in the original pass -- it's a deepslate-layer overworld ore
    // same as soulstone/brilliance, so it never spawns in the pregenerated world either.
    // cthonic_gold itself stays obtainable via the GT chemical_reactor route in
    // techMagicInteraction.js (`malum_cthonic_gold_from_dust`).
    event.removeOres(props => {
        props.blocks = [
            "malum:natural_quartz_ore",
            "malum:deepslate_quartz_ore",
            "malum:soulstone_ore",
            "malum:deepslate_soulstone_ore",
            "malum:brilliant_stone",
            "malum:brilliant_deepslate",
            "malum:blazing_quartz_ore",
            "malum:cthonic_gold_ore"
        ]
    })
})
