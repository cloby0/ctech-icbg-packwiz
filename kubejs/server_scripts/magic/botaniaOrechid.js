// Botania's Orechid/Orechid Ignem ship with a vanilla-only material roster (data/botania/recipes/
// orechid*/ in the jar: input minecraft:stone/deepslate/netherrack, output minecraft:iron_ore etc)
// and nothing in this pack ever touched them -- gated behind Sorcerer's pixie_dust (see
// botania.md), but every conversion still hands out coal/iron/copper/gold/redstone/lapis/diamond/
// emerald, none of GT's actual overworld/nether ore spread.
//
// Rebuilt from GTCEu's own vein definitions (GTOres.java, upstream source) instead of reskinning
// the vanilla 8: for every overworld/nether vein whose host layer is stone/deepslate/netherrack,
// take its designated `surfaceRock` material (the vein's own "this is what represents me" pick)
// and its vein `weight()`, and register an orechid entry for the matching gtceu ore block. Fluid
// veins (Oilsands) and End/dimension-specific veins are excluded -- orechid only replaces
// stone/deepslate/netherrack. Every id below is a fresh `<material>_ore` id, not a reuse of
// Botania's vanilla ones, since the material roster itself changed, not just the output block.
ServerEvents.recipes(event => {
    // Original jar-shipped ids -- always vanilla output, none of them survive this rebuild.
    ;[
        'coal_ore', 'copper_ore', 'iron_ore', 'gold_ore', 'redstone_ore', 'lapis_ore', 'diamond_ore',
        'emerald_ore', 'deepslate_coal_ore', 'deepslate_copper_ore', 'deepslate_iron_ore',
        'deepslate_gold_ore', 'deepslate_redstone_ore', 'deepslate_lapis_ore', 'deepslate_diamond_ore',
        'deepslate_emerald_ore',
    ].forEach(id => event.remove({ id: `botania:orechid/${id}` }))
    ;['nether_gold_ore', 'nether_quartz_ore'].forEach(id => event.remove({ id: `botania:orechid_ignem/${id}` }))
    // ancient_debris is untouched -- no gtceu netherite ore exists, real Minecraft has none either.

    function orechid(type, input, material, weight) {
        const id = `botania:${type}/${material}_ore`
        event.custom({
            type: `botania:${type}`,
            input: { type: 'block', block: input },
            output: { type: 'block', block: `gtceu:${material}_ore` },
            weight: weight,
        }).id(id)
    }

    // Stone-layer overworld veins (WorldGenLayers.STONE, BiomeTags.IS_OVERWORLD), surfaceRock + weight.
    const stoneVeins = {
        apatite: 40, cassiterite: 80, coal: 80, chalcopyrite: 50, galena: 40, garnet_sand: 80,
        red_garnet: 40, goethite: 120, talc: 40, magnetite: 80, basaltic_mineral_sand: 80,
        nickel: 40, salt: 50,
    }
    Object.keys(stoneVeins).forEach(material => orechid('orechid', 'minecraft:stone', material, stoneVeins[material]))

    // Deepslate-layer overworld veins (WorldGenLayers.DEEPSLATE, BiomeTags.IS_OVERWORLD).
    const deepslateVeins = {
        copper: 80, diamond: 40, lapis: 40, grossular: 20, mica: 20, olivine: 20, redstone: 60,
        sapphire: 60,
    }
    Object.keys(deepslateVeins).forEach(material => orechid('orechid', 'minecraft:deepslate', `deepslate_${material}`, deepslateVeins[material]))

    // Netherrack-layer nether veins (WorldGenLayers.NETHERRACK, BiomeTags.IS_NETHER) -- orechid_ignem.
    const netherrackVeins = {
        goethite: 30, beryllium: 30, certus_quartz: 40, grossular: 20, molybdenum: 5, bastnasite: 30,
        nether_quartz: 80, redstone: 60, saltpeter: 40, sulfur: 100, tetrahedrite: 70, topaz: 70,
    }
    Object.keys(netherrackVeins).forEach(material => orechid('orechid_ignem', 'minecraft:netherrack', `netherrack_${material}`, netherrackVeins[material]))
})
