// Gates Malum's spirit arcana into the magic tree and removes its ore-free metal node economy.
ServerEvents.recipes(event => {

    // Malum's crucible turns spirits into metal with no ore or power, ~100 ingots/impetus -- removed below.
    // aluminum stays in the list though inert: this pack uses forge:nuggets/aluminium, not the tag the recipe checks.
    let nodeMetals = [
        'iron', 'copper', 'gold', 'lead', 'silver', 'aluminum',
        'nickel', 'uranium', 'osmium', 'zinc', 'tin'
    ]

    nodeMetals.forEach(metal => {
        event.remove({ id: 'malum:node_focusing_' + metal })
        event.remove({ id: 'malum:' + metal + '_from_node_smelting' })
        event.remove({ id: 'malum:' + metal + '_from_node_blasting' })
    })

    // The metal impetuses themselves are now pointless; alchemical_impetus is kept
    // because the non-metal focusing recipes still use it.
    event.remove({ id: 'malum:spirit_infusion/iron_impetus' })
    event.remove({ id: 'malum:spirit_infusion/copper_impetus' })
    event.remove({ id: 'malum:spirit_infusion/gold_impetus' })

})
