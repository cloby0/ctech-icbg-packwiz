
let $ForgeRegistries = Java.loadClass("net.minecraftforge.registries.ForgeRegistries");

// MNA's actual primary crafting mechanic (530 base recipes in the mod -- eldrin-altar is only
// 122 and, per mna.md's progression table, weighted toward MNA's own later tiers). Draw glyphs
// onto pedestal items at the Manaweaving Altar. Constructor/fluent setters verified by
// decompiling MnaJS-1.20.1-0.1.7-hotfix.3.jar (ManaweavingAltarSchema/Builder bytecode: max 9
// items, max 6 patterns). Both MNA and its KubeJS addon are closed-source; bytecode is the best
// available source, per user direction 2026-07-28.
//
// patterns[] must be REAL glyph ids MNA ships (data/mna/recipes/manaweave_patterns/*.json, 17
// total, all under the mna: namespace): split_triangle, inverted_split_triangle, bolt,
// inverted_triangle, knot, triangle, hourglass, knot3, infinity, knot2, star, diamond, slash,
// backslash, knot4, square, circle. Real recipes use 2-3 patterns per craft.
//
// Patterns are ALSO individually tier-gated in-game (confirmed via the in-game pattern list, not
// jar data) -- a player can't draw a pattern above their own MNA tier regardless of what tier the
// recipe declares. 'bolt' is absent from that list; tier unconfirmed, treated as unusable below
// until verified.
let _patternTier = {
    circle: 1, square: 1, backslash: 1, triangle: 1, slash: 1,
    diamond: 2, knot: 2, knot2: 2, knot3: 2, knot4: 2, inverted_triangle: 2,
    split_triangle: 3,
    star: 4, hourglass: 4,
    infinity: 5, inverted_split_triangle: 5
}

// crecipe: { output: 'namespace:item', outputCount: N (optional), items: ['a', 'b', ...],
//            patterns: ['mna:circle', 'mna:slash', ...], tier: N (optional) }
function addMnaManaweavingRecipe(event, crecipe) {
    if (!$ForgeRegistries.ITEMS.getValue(crecipe.output)) {
        console.warn(`[mna_manaweaving] skipping: non-existent output '${crecipe.output}'`)
        return
    }

    let items = crecipe.items ?? []
    if (items.length === 0) {
        console.error(`[mna_manaweaving] skipping ${crecipe.output}: no items`)
        return
    }
    if (items.length > 9) {
        console.error(`[mna_manaweaving] skipping ${crecipe.output}: ${items.length} items exceeds max 9`)
        return
    }

    let patterns = crecipe.patterns ?? []
    if (patterns.length === 0) {
        console.error(`[mna_manaweaving] skipping ${crecipe.output}: no patterns`)
        return
    }
    if (patterns.length > 6) {
        console.error(`[mna_manaweaving] skipping ${crecipe.output}: ${patterns.length} patterns exceeds max 6`)
        return
    }

    let recipeTier = crecipe.tier || 1
    for (let p of patterns) {
        let name = p.replace('mna:', '')
        let patternTier = _patternTier[name]
        if (!patternTier) {
            console.warn(`[mna_manaweaving] ${crecipe.output}: pattern '${p}' has no confirmed tier (not in the in-game list) -- verify before shipping`)
        } else if (patternTier > recipeTier) {
            console.error(`[mna_manaweaving] ${crecipe.output}: pattern '${p}' is tier ${patternTier}, but recipe is tier ${recipeTier} -- player can't draw this pattern yet`)
        }
    }

    let r = event.recipes.mna.manaweavingAltar(crecipe.output)
    items.forEach(i => r.addItem(i))
    patterns.forEach(p => r.addPattern(p))
    if (crecipe.outputCount > 1) r.outputQuantity(crecipe.outputCount)
    if (crecipe.tier) r.tier(crecipe.tier)
}

global.addMnaManaweavingRecipe = addMnaManaweavingRecipe
