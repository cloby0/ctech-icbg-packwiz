
// Imbuement Factory retired 2026-07-28, machine deleted 2026-07-30 along with its quest.
// addImbuementRecipe kept as the stable call-site API; it now routes straight to the live
// Eldrin Altar instead of the dead Ars Nouveau chamber + GT mirror it used to emit. Note: the old
// Ars mechanic never consumed pedestalItems (catalyst-style); Eldrin Altar consumes every item in
// its list, so pedestal catalysts are now consumed too -- acceptable tradeoff for dropping GT.
function addImbuementRecipe(event, crecipe) {
    let items = [crecipe.input].concat(crecipe.pedestalItems ?? [])
    let sourceCost = Math.max(crecipe.source || 0, 100)
    let outputRaw = crecipe.output
    let output = (typeof outputRaw === 'string' && crecipe.count > 1) ? { item: outputRaw, count: crecipe.count } : outputRaw

    addEldrinAltarRecipe(event, {
        output: output,
        items: items,
        affinity: 'arcane',
        power: sourceCost
    })
}

global.addImbuementRecipe = addImbuementRecipe
