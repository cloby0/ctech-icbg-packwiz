
let $ForgeRegistries = Java.loadClass("net.minecraftforge.registries.ForgeRegistries");

// MNA's actual primary crafting mechanic (530 base recipes in the mod -- eldrin-altar is only
// 122 and, per mna.md's progression table, weighted toward MNA's own later tiers). Draw glyphs
// onto pedestal items at the Manaweaving Altar.
//
// event.recipes.mna.manaweavingAltar() is mna:manaweaving-recipe, backed by
// ManaweavingAltarRecipeJS (com.pickaid.mnajs.kubejs.recipe). Verified via javap on
// MnaJS-1.20.1-0.1.7-hotfix.3.jar: RecipeSchema registers ONLY a zero-arg constructor and a
// 2-arg (output, items) constructor -- a 1-arg call throws "Constructor ... not found". Real
// fluent setters: output(id), addInput(id)/inputs(...), addPattern(id)/patterns(...),
// outputQuantity(n) (alias quantity), tier(n), enchant(id), magnitude(n), copyNbt(bool).
// ManaweavingAltarBuilder/-Schema (Gson JsonObject path, addItem()/maxItems()=9/maxPatterns()=6)
// is a separate, unused legacy class -- NOT what this factory returns; its caps aren't enforced
// here. Real validateRecipe() only requires a non-empty output and >=1 input item; patterns are
// not schema-required. Both MNA and its KubeJS addon are closed-source; bytecode is the best
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

// crecipe: { output: 'namespace:item' or { item: 'namespace:item', count: N }, items: ['a', 'b', ...],
//            patterns: ['mna:circle', 'mna:slash', ...], tier: N (optional) }
function addMnaManaweavingRecipe(event, crecipe) {
    let output = crecipe.output
    let outputCount = crecipe.outputCount
    if (typeof output === 'object') {
        outputCount = output.count
        output = output.item
    }

    if (!$ForgeRegistries.ITEMS.getValue(output)) {
        console.warn(`[mna_manaweaving] skipping: non-existent output '${output}'`)
        return
    }

    let items = crecipe.items ?? []
    if (items.length === 0) {
        console.error(`[mna_manaweaving] skipping ${output}: no items`)
        return
    }
    if (items.length > 9) {
        console.error(`[mna_manaweaving] skipping ${output}: ${items.length} items exceeds max 9`)
        return
    }

    let patterns = crecipe.patterns ?? []
    if (patterns.length === 0) {
        console.error(`[mna_manaweaving] skipping ${output}: no patterns`)
        return
    }
    if (patterns.length > 6) {
        console.error(`[mna_manaweaving] skipping ${output}: ${patterns.length} patterns exceeds max 6`)
        return
    }

    let recipeTier = crecipe.tier || 1
    for (let p of patterns) {
        let name = p.replace('mna:', '')
        let patternTier = _patternTier[name]
        if (!patternTier) {
            console.warn(`[mna_manaweaving] ${output}: pattern '${p}' has no confirmed tier (not in the in-game list) -- verify before shipping`)
        } else if (patternTier > recipeTier) {
            console.error(`[mna_manaweaving] ${output}: pattern '${p}' is tier ${patternTier}, but recipe is tier ${recipeTier} -- player can't draw this pattern yet`)
        }
    }

    // mna:manaweaving-recipe only registers a zero-arg and an (output, items) constructor --
    // verified via javap on ManaweavingAltarSchema.class (RecipeSchema.constructor calls), no
    // 1-arg overload exists. Build via zero-arg + fluent setters instead.
    let r = event.recipes.mna.manaweavingAltar()
    r.output(output)
    items.forEach(i => r.addInput(i))
    patterns.forEach(p => r.addPattern(p))
    if (outputCount > 1) r.outputQuantity(outputCount)
    if (crecipe.tier) r.tier(crecipe.tier)
}

global.addMnaManaweavingRecipe = addMnaManaweavingRecipe
