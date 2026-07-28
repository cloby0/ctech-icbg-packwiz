
let $ForgeRegistries = Java.loadClass("net.minecraftforge.registries.ForgeRegistries");

// MNA IS in packwiz (mana-and-artifice.pw.toml + kubejs-mna.pw.toml / "KubeJS MNA" addon) --
// not yet wired into any tier script, but the mod is live. Uses the real KubeJS builder
// `event.recipes.mna.arcaneFurnace(input, output, burnTime)` -- "arcane-furnace" needs the
// camelCase alias (confirmed in the addon's own alias table), constructor arg order and fluent
// setters verified by decompiling MnaJS-1.20.1-0.1.7-hotfix.3.jar (ArcaneFurnaceSchema.class
// bytecode). Both MNA and its KubeJS addon are closed-source; bytecode is the best available
// source, per user direction 2026-07-28.
// NOTE mna.md's own doc: this furnace doubles ore output unless blacklisted -- if `input` is an ore
// item, add it to `#mna:arcane_furnace_doubling_blacklist` or this becomes a free macerator bypass.
// crecipe: { input: 'namespace:item', output: 'namespace:item', burnTime: N (default 200),
//            outputCount: N (optional), tier: N (optional) }
function addMnaArcaneFurnaceRecipe(event, crecipe) {
    if (!$ForgeRegistries.ITEMS.getValue(crecipe.input)) {
        console.warn(`[mna_arcane_furnace] skipping: non-existent input '${crecipe.input}'`)
        return
    }
    if (!$ForgeRegistries.ITEMS.getValue(crecipe.output)) {
        console.warn(`[mna_arcane_furnace] skipping: non-existent output '${crecipe.output}'`)
        return
    }

    let r = event.recipes.mna.arcaneFurnace(crecipe.input, crecipe.output, crecipe.burnTime || 200)
    if (crecipe.outputCount > 1) r.quantity(crecipe.outputCount)
    if (crecipe.tier) r.tier(crecipe.tier)
}

global.addMnaArcaneFurnaceRecipe = addMnaArcaneFurnaceRecipe
