WorldgenEvents.remove(event => {
    // Block-ID scan strips all features containing these ore blocks regardless of feature name
    event.removeOres(props => {
        props.blocks = [
            "silentcompat:plasteel_ore",
            "silentcompat:voidmetal_ore",
            "silentcompat:solarmetal_ore",
            "silentcompat:arcmetal_ore"
        ]
    })
})
