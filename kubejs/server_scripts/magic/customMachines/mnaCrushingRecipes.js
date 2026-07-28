
let $ForgeRegistries = Java.loadClass("net.minecraftforge.registries.ForgeRegistries");

// MNA IS in packwiz (mana-and-artifice.pw.toml + kubejs-mna.pw.toml / "KubeJS MNA" addon) --
// not yet wired into any tier script, but the mod is live. Uses the real KubeJS builder
// `event.recipes.mna.crushing(input, output)` -- constructor arg order and fluent setters
// verified by decompiling the KubeJS MNA addon jar (MnaJS-1.20.1-0.1.7-hotfix.3.jar,
// CrushingSchema.class bytecode). Both MNA and its KubeJS addon are closed-source; bytecode is
// the best available source, per user direction 2026-07-28.
// crecipe: { input: 'namespace:item', output: 'namespace:item', outputCount: N (optional), tier: N (optional) }
function addMnaCrushingRecipe(event, crecipe) {
    if (!$ForgeRegistries.ITEMS.getValue(crecipe.input)) {
        console.warn(`[mna_crushing] skipping: non-existent input '${crecipe.input}'`)
        return
    }
    if (!$ForgeRegistries.ITEMS.getValue(crecipe.output)) {
        console.warn(`[mna_crushing] skipping: non-existent output '${crecipe.output}'`)
        return
    }

    let r = event.recipes.mna.crushing(crecipe.input, crecipe.output)
    if (crecipe.outputCount > 1) r.quantity(crecipe.outputCount)
    if (crecipe.tier) r.tier(crecipe.tier)
}

global.addMnaCrushingRecipe = addMnaCrushingRecipe
