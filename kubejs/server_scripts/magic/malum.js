// Gates Malum's spirit arcana into the magic tree and removes its ore-free metal
// generation, which would otherwise hand out uranium and aluminium off a mob farm.
ServerEvents.recipes(event => {

    // Malum's crucible converts spirits directly into metal with no ore and no power.
    // At ~100 ingots per impetus with infinitely repeatable impetuses, this bypasses
    // GT ore processing entirely -- including uranium and aluminium, both gated elsewhere.
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
