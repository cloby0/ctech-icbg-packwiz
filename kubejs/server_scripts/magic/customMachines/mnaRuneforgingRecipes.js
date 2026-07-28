
let $ForgeRegistries = Java.loadClass("net.minecraftforge.registries.ForgeRegistries");

// MNA IS in packwiz (mana-and-artifice.pw.toml + kubejs-mna.pw.toml / "KubeJS MNA" addon) --
// not yet wired into any tier script, but the mod is live. Uses the real KubeJS builder
// `event.recipes.mna.runeforging(pattern, output)` -- hammer-strike crafting at the Runeforge:
// `pattern` (an existing mna:manaweaving-pattern glyph id shipped by the jar, NOT inventable) is
// struck `hits` times against optional `material` to produce `output`. Constructor arg order and
// fluent setters verified by decompiling MnaJS-1.20.1-0.1.7-hotfix.3.jar (RuneForgingSchema.class
// bytecode). Both MNA and its KubeJS addon are closed-source; bytecode is the best available
// source, per user direction 2026-07-28.
// crecipe: { pattern: 'namespace:pattern_id', output: 'namespace:item',
//            material: 'namespace:item' (optional), hits: N (optional, mod default 10),
//            outputCount: N (optional), tier: N (optional) }
function addMnaRuneforgingRecipe(event, crecipe) {
    if (!$ForgeRegistries.ITEMS.getValue(crecipe.output)) {
        console.warn(`[mna_runeforging] skipping: non-existent output '${crecipe.output}'`)
        return
    }
    if (crecipe.material && !$ForgeRegistries.ITEMS.getValue(crecipe.material)) {
        console.warn(`[mna_runeforging] skipping: non-existent material '${crecipe.material}'`)
        return
    }

    let r = event.recipes.mna.runeforging(crecipe.pattern, crecipe.output)
    if (crecipe.material) r.material(crecipe.material)
    if (crecipe.hits) r.hits(crecipe.hits)
    if (crecipe.outputCount > 1) r.quantity(crecipe.outputCount)
    if (crecipe.tier) r.tier(crecipe.tier)
}

global.addMnaRuneforgingRecipe = addMnaRuneforgingRecipe
