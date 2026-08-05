
// Grand Enchanting Sanctum (gtceu:enchanting_sanctum) retired -- magic no longer needs a GT
// multiblock. addEnchantingRecipe kept as the stable call-site API (141 legacy calls across the
// pack, unchanged); it routes to a real live handler instead of the dead Ars Nouveau chamber.
//
// Routing (2026-08-04): the Eldrin Altar is Mana & Artifice TIER 4 content -- its own manaweaving
// recipe is `tier: 4`, and it also needs Eldrin Conduits (T4), chimerite crystals, motes, a lit
// Fume Filter, a faction, and realistically a captured wellspring. Per the pack's MNA tier map
// (docs/claude/progression.md) that lands at Alchemist. So anything costed BELOW Alchemist cannot
// legitimately live on the altar; it routes to the Manaweaving Altar at the tier matching its cost.
// 65 of the 141 legacy call sites were below Alchemist before this.
//
// The Alchemy Table was the other candidate and was rejected: 6 input slots, but 50 of the legacy
// call sites pass 7-10 items. Manaweaving takes 9, which covers every sub-Alchemist call (the one
// 10-item recipe, psi:psigem, is Thaumaturge-costed and stays on the altar).
//
// Manaweaving has NO cost field, only a tier gate. Anything that needs a real resource sink should
// be an explicit addAlchemyTableRecipe/addEldrinAltarRecipe call in a tier file, not this shim.
const ELDRIN_MIN_COST = 4000 // Source.ALCHEMIST, inlined so this file has no load-order dependency

// Pattern pairs are shared by every recipe routed to a given tier. That is safe and already
// standard here (artifacts.js runs 21 recipes on ['diamond','knot']): manaweaving matches on the
// item set AND the patterns, so identical patterns with different items never collide. Every
// pattern must be <= its own tier or the recipe is uncraftable at the tier it declares.
function _manaweaveRouteFor(sourceCost) {
    if (sourceCost <= 250) return { tier: 1, patterns: ['mna:triangle', 'mna:circle'] }
    if (sourceCost <= 500) return { tier: 2, patterns: ['mna:knot', 'mna:inverted_triangle'] }
    return { tier: 3, patterns: ['mna:split_triangle', 'mna:inverted_triangle'] }
}

function routeLegacyMagicRecipe(event, output, items, sourceCost) {
    if (sourceCost >= ELDRIN_MIN_COST) {
        addEldrinAltarRecipe(event, {
            output: output,
            items: items,
            affinity: 'arcane',
            power: sourceCost
        })
        return
    }

    let route = _manaweaveRouteFor(sourceCost)
    addMnaManaweavingRecipe(event, {
        output: output,
        items: items,
        patterns: route.patterns,
        tier: route.tier
    })
}

global.routeLegacyMagicRecipe = routeLegacyMagicRecipe

function addEnchantingRecipe(event, crecipe) {
    let reagents = Array.isArray(crecipe.reagent) ? crecipe.reagent : [crecipe.reagent]
    let pedestalItems = crecipe.pedestalItems ?? []
    let sourceCost = Math.max(crecipe.sourceCost || 0, 100)

    routeLegacyMagicRecipe(event, crecipe.output, reagents.concat(pedestalItems), sourceCost)
}

global.addEnchantingRecipe = addEnchantingRecipe

ServerEvents.recipes(event => {
    event.remove({ mod: 'ars_n_spells' })

    event.remove({ id: 'ars_nouveau:dominion_wand' });

    event.remove({ id: 'ars_nouveau:imbuement_lapis' });
    event.remove({ id: 'ars_nouveau:imbuement_amethyst' });
    event.remove({ id: 'ars_nouveau:imbuement_amethyst_block' });
})
