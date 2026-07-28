
// Grand Enchanting Sanctum (gtceu:enchanting_sanctum) retired -- magic no longer needs a GT
// multiblock. addEnchantingRecipe kept as the stable call-site API (200+ existing calls across
// the pack, unchanged); it now routes straight to the live Eldrin Altar instead of the dead
// Ars Nouveau chamber + GT mirror it used to emit.
function addEnchantingRecipe(event, crecipe) {
    let reagents = Array.isArray(crecipe.reagent) ? crecipe.reagent : [crecipe.reagent]
    let pedestalItems = crecipe.pedestalItems ?? []
    let sourceCost = Math.max(crecipe.sourceCost || 0, 100)

    addEldrinAltarRecipe(event, {
        output: crecipe.output,
        items: reagents.concat(pedestalItems),
        affinity: 'arcane',
        power: sourceCost
    })
}

global.addEnchantingRecipe = addEnchantingRecipe

ServerEvents.recipes(event => {
    event.remove({ mod: 'ars_n_spells' })

    event.remove({ id: 'ars_nouveau:dominion_wand' });

    event.remove({ id: 'ars_nouveau:imbuement_lapis' });
    event.remove({ id: 'ars_nouveau:imbuement_amethyst' });
    event.remove({ id: 'ars_nouveau:imbuement_amethyst_block' });
    event.remove({ type: 'gtceu:imbuement_factory', output: 'ars_nouveau:source_gem' });
    event.remove({ type: 'gtceu:imbuement_factory', output: 'ars_nouveau:source_gem_block' });
})
