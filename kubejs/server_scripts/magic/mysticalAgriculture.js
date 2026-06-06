ServerEvents.recipes(event => {

    event.remove({ type: 'mysticalagriculture:infusion' })
    event.remove({ id: 'mysticalagriculture:mystical_fertilizer' })
    event.remove({ id: 'mysticalagriculture:soulium_seed_base' })
    event.remove({ id: 'mysticalagriculture:prosperity_seed_base' })
    event.remove({ output: 'mysticalagriculture:inferium_essence' })
    event.remove({ output: 'mysticalagriculture:prosperity_shard' })

    const F = '#kubejs:fire_essences'
    const E = '#kubejs:earth_essences'
    const W = '#kubejs:water_essences'
    const A = '#kubejs:air_essences'
    const ma = n => `mysticalagriculture:${n}_essence`

    function sourceRound(n) { return (n / 100) > 20 ? n / 100 : 20 }

    // [output, catalyst, [pedestal items], source cost]
    const chains = [

        // tier 1
        [ma('stone'),           E,               [A],                           1000],
        [ma('ice'),             W,               [A],                           1000],
        [ma('nature'),          E,               [W, W],                        1500],
        [ma('nether'),          F,               [E, E],                        2000],
        [ma('obsidian'),        F,               [W, W],                        1500],

        // tier 2
        [ma('dirt'),            ma('nature'),    [E],                           1500],
        [ma('wood'),            ma('nature'),    [E, E, E],                     2000],
        [ma('rubber'),          ma('nature'),    [W, W],                        1500],
        [ma('coral'),           ma('nature'),    [W, W, W],                     2000],
        [ma('honey'),           ma('nature'),    [W, A],                        2000],
        [ma('mystical_flower'), ma('nature'),    [W, A, A],                     2500],
        [ma('coal'),            ma('stone'),     [F],                           1500],
        [ma('deepslate'),       ma('stone'),     [E, E],                        1500],
        [ma('limestone'),       ma('stone'),     [W, W],                        1500],
        [ma('glowstone'),       ma('nether'),    [F, F],                        2000],
        [ma('nether_quartz'),   ma('nether'),    [A],                           2000],
        [ma('sulfur'),          ma('nether'),    [E],                           2000],
        [ma('soulium'),         ma('nether'),    [E, E, E],                     2500],
        [ma('dye'),             ma('nature'),    [F, W, A],                     2500],

        // tier 3
        [ma('iron'),            ma('coal'),      [ma('stone'), F, F],           3500],
        [ma('copper'),          ma('limestone'), [W, W, W, W],                  3500],
        [ma('tin'),             ma('limestone'), [E, E, A],                     3000],
        [ma('zinc'),            ma('coal'),      [A, A, A],                     3000],
        [ma('aluminum'),        ma('deepslate'), [A, A, A, A],                  3500],
        [ma('silicon'),         ma('coal'),      [F, F, F],                     3500],
        [ma('graphite'),        ma('coal'),      [F, F, F, F],                  4000],
        [ma('apatite'),         ma('limestone'), [W, E],                        2500],
        [ma('amethyst'),        ma('deepslate'), [W, W, W],                     3000],
        [ma('prismarine'),      ma('limestone'), [W, W, W, W],                  3500],
        [ma('lapis_lazuli'),    ma('deepslate'), [W, W, A],                     3000],
        [ma('sky_stone'),       ma('deepslate'), [A, A, A, F],                  4000],
        [ma('certus_quartz'),   ma('nether_quartz'), [W, W, A],                 3000],
        [ma('ruby'),            ma('deepslate'), [F, F, F, F],                  3500],
        [ma('sapphire'),        ma('deepslate'), [W, W, W, W],                  3500],
        [ma('peridot'),         ma('deepslate'), [F, F, ma('nature')],          3000],
        [ma('pig'),             ma('dirt'),      [E],                           2000],
        [ma('chicken'),         ma('nature'),    [A, A],                        2000],
        [ma('cow'),             ma('nature'),    [E, W],                        2000],
        [ma('sheep'),           ma('nature'),    [A, A, A],                     2000],
        [ma('squid'),           ma('coral'),     [W, W, W],                     2500],
        [ma('fish'),            ma('coral'),     [W, A],                        2000],
        [ma('turtle'),          ma('coral'),     [E, E],                        2000],
        [ma('rabbit'),          ma('dirt'),      [A, A],                        2000],
        [ma('slime'),           ma('dirt'),      [W, W, W],                     2500],
        [ma('zombie'),          ma('dirt'),      [W, W],                        2500],
        [ma('skeleton'),        ma('coal'),      [A, A, A],                     2500],
        [ma('creeper'),         ma('nature'),    [F, F],                        2500],
        [ma('spider'),          ma('coal'),      [E, E],                        2500],
        [ma('blaze'),           ma('glowstone'), [F, F],                        3000],
        [ma('ghast'),           ma('nether_quartz'), [A, A, A],                 3000],
        [ma('enderman'),        ma('obsidian'),  [A, A, A, A],                  3500],
        [ma('wither_skeleton'), ma('soulium'),   [ma('coal'), F, A],            3500],

        // tier 4
        [ma('redstone'),        ma('iron'),      [F, F],                        3500],
        [ma('nickel'),          ma('iron'),      [E, E],                        3500],
        [ma('lead'),            ma('iron'),      [E, E, E],                     3500],
        [ma('silver'),          ma('copper'),    [W, W, W],                     3500],
        [ma('gold'),            ma('copper'),    [F, F, F, F],                  4000],
        [ma('steel'),           ma('iron'),      [ma('coal'), ma('coal')],      4000],
        [ma('bronze'),          ma('copper'),    [ma('tin'),  ma('tin')],       4000],
        [ma('brass'),           ma('copper'),    [ma('zinc'), ma('zinc')],      4000],
        [ma('invar'),           ma('iron'),      [ma('nickel'), ma('nickel')],  4000],
        [ma('constantan'),      ma('copper'),    [ma('nickel'), ma('nickel')],  4000],
        [ma('electrum'),        ma('gold'),      [ma('silver'), ma('silver')],  4500],
        [ma('end'),             ma('enderman'),  [ma('obsidian'), A, A, A],     4500],
        [ma('fluix'),           ma('certus_quartz'), [ma('nether_quartz'), W, W], 4000],
        [ma('uranium'),         ma('iron'),      [E, E, E, F, F, F],           5000],
        [ma('emerald'),         ma('deepslate'), [ma('nature'), ma('nature'), W, W], 4000],
        [ma('diamond'),         ma('graphite'),  [F, F, F, F, F, F],           6000],

        // tier 5
        [ma('chrome'),          ma('steel'),     [F, F, F, F],                  5000],
        [ma('titanium'),        ma('steel'),     [A, A, A, A, F, F],            6000],
        [ma('tungsten'),        ma('steel'),     [F, F, F, F, E, E],            6000],
        [ma('platinum'),        ma('gold'),      [F, F, F, F, F],               6000],
        [ma('mithril'),         ma('silver'),    [W, W, A, A],                  5000],
        [ma('experience'),      ma('diamond'),   [F, W, E, A, A, A],           8000],
        [ma('netherite'),       ma('diamond'),   [ma('soulium'), ma('soulium'), ma('nether_quartz'), ma('nether_quartz')], 8000],
        [ma('iridium'),         ma('platinum'),  [F, F, F, F, F, F],           8000],

        // tier 6 - magic materials; actual ingot on pedestal gates the recipe
        [ma('manasteel'),       ma('silver'),    [ma('mithril'), ma('mithril'), 'botania:manasteel_ingot'],               10000],
        [ma('terrasteel'),      ma('manasteel'), [ma('manasteel'), ma('manasteel'), 'botania:terrasteel_ingot'],           12000],
        [ma('elementium'),      ma('terrasteel'),[ma('terrasteel'), ma('terrasteel'), 'botania:elementium_ingot'],         15000],
        [ma('gaia_spirit'),     ma('elementium'),[ma('elementium'), ma('elementium'), 'botania:gaia_ingot'],        20000],

        // tier 6 - boss drops; drop consumed in manual chamber, reusable in GT machine
        [ma('nether_star'),     ma('soulium'),   [ma('soulium'), ma('soulium'), ma('soulium'), 'minecraft:nether_star'],   15000],
        [ma('dragon_egg'),      ma('end'),       [ma('end'), ma('end'), ma('end'), 'minecraft:dragon_egg'],                20000],

    ]

    chains.forEach(([output, center, pedestals, source], i) => {
        event.recipes.ars_nouveau.enchanting_apparatus(pedestals, center, output, source)

        const recipeId = `kubejs/ma_essence_chain_${i + 1}`
        let r = event.recipes.gtceu.enchanting_sanctum(recipeId)
            .duration(sourceRound(source) * 2)
            .EUt(1920 + Math.round(source / 25))
            .itemOutputs(`1x ${output}`)
            .itemInputs(`1x ${center}`)
            .inputFluids(Fluid.of('starbunclemania:source_fluid', source))
        pedestals.forEach(p => r.itemInputs(`1x ${p}`))
    })

    // 16x essence + 1 wheat seed -> 1 seed in the Petal Apothecary
    // Elemental seeds (fire/water/earth/air) excluded; first acquisition is gated in sorcerer.js
    const seedEssences = [
        ma('stone'),          ma('dirt'),           ma('wood'),           ma('ice'),
        ma('deepslate'),      ma('nature'),          ma('dye'),           ma('nether'),
        ma('coal'),           ma('coral'),           ma('honey'),          ma('amethyst'),
        ma('pig'),            ma('chicken'),         ma('cow'),            ma('sheep'),
        ma('squid'),          ma('fish'),            ma('slime'),          ma('turtle'),
        ma('rubber'),         ma('silicon'),         ma('sulfur'),         ma('aluminum'),
        ma('apatite'),        ma('mystical_flower'), ma('limestone'),      ma('iron'),
        ma('copper'),         ma('nether_quartz'),   ma('glowstone'),      ma('redstone'),
        ma('obsidian'),       ma('prismarine'),      ma('zombie'),         ma('skeleton'),
        ma('creeper'),        ma('spider'),          ma('rabbit'),         ma('tin'),
        ma('bronze'),         ma('zinc'),            ma('brass'),          ma('silver'),
        ma('lead'),           ma('graphite'),        ma('manasteel'),      ma('sky_stone'),
        ma('certus_quartz'),  ma('gold'),            ma('lapis_lazuli'),   ma('end'),
        ma('experience'),     ma('blaze'),           ma('ghast'),          ma('enderman'),
        ma('steel'),          ma('nickel'),          ma('constantan'),     ma('electrum'),
        ma('invar'),          ma('mithril'),         ma('tungsten'),       ma('titanium'),
        ma('uranium'),        ma('chrome'),          ma('ruby'),           ma('sapphire'),
        ma('peridot'),        ma('soulium'),         ma('elementium'),     ma('fluix'),
        ma('diamond'),        ma('emerald'),         ma('netherite'),      ma('wither_skeleton'),
        ma('platinum'),       ma('iridium'),         ma('terrasteel'),     ma('nether_star'),
        ma('dragon_egg'),     ma('gaia_spirit'),
    ]

    seedEssences.forEach(essence => {
        const seedId = essence.replace('_essence', '_seeds')
        const ingredients = [{ item: 'minecraft:wheat_seeds' }]
        for (let i = 0; i < 16; i++) ingredients.push({ item: essence })
        event.custom({
            type: 'botania:petal_apothecary',
            ingredients: ingredients,
            output: { item: seedId }
        })
    })

})
