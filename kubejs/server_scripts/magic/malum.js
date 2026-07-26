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

    // --- Machine gating: Altar at Journeyman (MV), rest at Initiate (HV) ---
    // Magic materials only. A player with zero tech progression must be able to build these.

    event.remove({ id: 'malum:spirit_altar' })
    event.shaped('malum:spirit_altar', [
        'PSP',
        'PGP',
        'RRR'
    ], {
        P: 'gtceu:holy_silver_plate',
        S: 'malum:processed_soulstone',
        G: 'ars_nouveau:source_gem',
        R: 'gtceu:holy_silver_rod'
    }).damageIngredient(Ingredient.of('#forge:tools/hammers'))

    event.remove({ id: 'malum:spirit_infusion/spirit_crucible' })
    event.shaped('malum:spirit_crucible', [
        'PHP',
        'PSP',
        'RRR'
    ], {
        P: 'gtceu:soul_stained_steel_plate',
        H: 'malum:hallowed_gold_ingot',
        S: 'malum:processed_soulstone',
        R: 'gtceu:soul_stained_steel_rod'
    }).damageIngredient(Ingredient.of('#forge:tools/hammers'))
        .damageIngredient(Ingredient.of('#forge:tools/wrenches'))

    event.remove({ id: 'malum:spirit_infusion/spirit_catalyzer' })
    event.shaped('malum:spirit_catalyzer', [
        'PWP',
        'WSW',
        'PRP'
    ], {
        P: 'gtceu:soul_stained_steel_plate',
        W: 'gtceu:fine_hallowed_gold_wire',
        S: 'malum:block_of_blazing_quartz',
        R: 'gtceu:soul_stained_steel_rod'
    }).damageIngredient(Ingredient.of('#forge:tools/wire_cutters'))
        .damageIngredient(Ingredient.of('#forge:tools/screwdrivers'))

    event.remove({ id: 'malum:spirit_infusion/brilliant_obelisk' })
    event.shaped('malum:brilliant_obelisk', [
        ' B ',
        'PBP',
        'RRR'
    ], {
        B: 'malum:block_of_brilliance',
        P: 'gtceu:hallowed_gold_plate',
        R: 'gtceu:soul_stained_steel_rod'
    }).damageIngredient(Ingredient.of('#forge:tools/files'))
        .damageIngredient(Ingredient.of('#forge:tools/hammers'))

})
