ServerEvents.recipes(event => {

    event.remove({ type: 'mysticalagriculture:infusion' })
    event.remove({ id: 'mysticalagriculture:mystical_fertilizer' })
    event.remove({ id: 'mysticalagriculture:soulium_seed_base' })
    event.remove({ id: 'mysticalagriculture:prosperity_seed_base' })
    event.remove({ output: 'mysticalagriculture:inferium_essence' })
    event.remove({ output: 'mysticalagriculture:prosperity_shard' })

    const F = 'mysticalagriculture:fire_essence'
    const E = 'mysticalagriculture:earth_essence'
    const W = 'mysticalagriculture:water_essence'
    const A = 'mysticalagriculture:air_essence'
    const ma = n => `mysticalagriculture:${n}_essence`

    const chains = [

        [ma('stone'),           E,               [A],                           1000],
        [ma('ice'),             W,               [A],                           1000],
        [ma('nature'),          E,               [W, W],                        1500],
        [ma('nether'),          F,               [E, E],                        2000],
        [ma('obsidian'),        F,               [W, W],                        1500],

        [ma('aether'),          A,               [A, A, A, ma('sky_stone')],                                              4000],
        [ma('space'),           ma('end'),       [ma('aether'), ma('end'), A, A],                                         6000],
        [ma('mana'),            ma('mystical_flower'), [ma('nature'), ma('nature'), 'botania:mana_pearl', 'botania:mana_pearl'], 5000],

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
        [ma('luminessence'),    ma('glowstone'), [F, F, W, A],                  3000],
        [ma('nether_quartz'),   ma('nether'),    [A],                           2000],
        [ma('sulfur'),          ma('nether'),    [E],                           2000],
        [ma('soulium'),         ma('nether'),    [E, E, E],                     2500],
        [ma('dye'),             ma('nature'),    [F, W, A],                     2500],

        [ma('iron'),            ma('coal'),      [ma('stone'), F, F],           3500],
        [ma('copper'),          ma('limestone'), [W, W, W, W],                  3500],
        [ma('tin'),             ma('limestone'), [E, E, A],                     3000],
        [ma('zinc'),            ma('coal'),      [A, A, A],                     3000],
        [ma('aluminum'),        ma('deepslate'), [A, A, A, A],                  3500],
        [ma('silicon'),         ma('coal'),      [F, F, F],                     3500],
        [ma('graphite'),        ma('coal'),      [F, F, F, F],                  4000],
        [ma('apatite'),         ma('limestone'), [W, E],                        2500],
        [ma('amethyst'),        ma('deepslate'), [W, W, W],                     3000],
        [ma('prismarine'),      ma('limestone'), [W, W, W, A],                  3500],
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
        [ma('skeleton'),        ma('coal'),      [A, A, A, A],                  2500],
        [ma('creeper'),         ma('nature'),    [F, F],                        2500],
        [ma('spider'),          ma('coal'),      [E, E],                        2500],
        [ma('blaze'),           ma('glowstone'), [F, F],                        3000],
        [ma('ghast'),           ma('nether_quartz'), [A, A, A],                 3000],
        [ma('enderman'),        ma('obsidian'),  [A, A, A, A],                  3500],
        [ma('wither_skeleton'), ma('soulium'),   [ma('coal'), F, A],            3500],

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
        [ma('diamond'),         ma('graphite'),  [ma('graphite'), ma('graphite'), ma('coal'), ma('coal'), F, F],  6000],

        [ma('chrome'),          ma('steel'),     [ma('steel'), ma('steel'), F, F],                                        5000],
        [ma('titanium'),        ma('steel'),     [ma('chrome'), ma('chrome'), A, A],                                      6000],
        [ma('tungsten'),        ma('steel'),     [ma('titanium'), ma('titanium'), F, E],                                  6000],
        [ma('platinum'),        ma('gold'),      [ma('tungsten'), ma('tungsten'), F, F],                                  6000],
        [ma('mithril'),         ma('silver'),    [ma('mana'), ma('mana'), 'botania:mana_pearl', A],                       6000],
        [ma('experience'),      ma('diamond'),   [F, W, E, A, A, A],           8000],
        [ma('netherite'),       ma('diamond'),   [ma('soulium'), ma('soulium'), ma('nether_quartz'), ma('nether_quartz')], 8000],
        [ma('iridium'),         ma('platinum'),  [ma('platinum'), ma('platinum'), F, F, F],                               8000],

        [ma('manasteel'),       ma('silver'),    [ma('mithril'), ma('mithril'), 'gtceu:manasteel_plate'],                 10000],
        [ma('terrasteel'),      ma('manasteel'), [ma('manasteel'), ma('manasteel'), 'gtceu:terrasteel_plate'],             12000],
        [ma('elementium'),      ma('terrasteel'),[ma('terrasteel'), ma('terrasteel'), 'gtceu:elementium_plate'],           15000],
        [ma('gaia_spirit'),     ma('elementium'),[ma('elementium'), ma('elementium'), 'gtceu:gaia_spirit_plate'],   20000],

        [ma('nether_star'),     ma('soulium'),   [ma('soulium'), ma('soulium'), ma('soulium'), 'minecraft:nether_star'],   15000],
        [ma('dragon_egg'),      ma('end'),       [ma('end'), ma('end'), ma('end'), 'minecraft:dragon_egg'],                20000],

        [ma('cobalt'),          ma('nickel'),    [ma('iron'), E, E],                                                      3500],
        [ma('bismuth'),         ma('lead'),      [E, E, W],                                                               3000],
        [ma('antimony'),        ma('lead'),      [F, E, E],                                                               3500],
        [ma('manganese'),       ma('iron'),      [E, E, A],                                                               3000],
        [ma('beryllium'),       ma('emerald'),   [A, A, A],                                                               3500],
        [ma('vanadium'),        ma('iron'),      [E, E, E, F],                                                            4000],
        [ma('thorium'),         ma('beryllium'), [E, E, F],                                                               4000],
        [ma('neodymium'),       ma('iron'),      [A, A, A, A, ma('deepslate')],                                           5000],
        [ma('palladium'),       ma('platinum'),  [ma('platinum'), F, F, ma('gold')],                                      6000],
        [ma('molybdenum'),      ma('steel'),     [ma('titanium'), ma('titanium'), F, F],                                  5000],
        [ma('lithium'),         ma('end'),       [A, A, W],                                                               4000],

        [ma('ambrosium'),       ma('glowstone'), [ma('aether'), A, W, ma('limestone')],                                   3500],
        [ma('zanite'),          ma('amethyst'),  [ma('aether'), A, A, A],                                                 3500],
        [ma('source'),          ma('amethyst'),  [W, W, A, A, ma('lapis_lazuli')],                                        4500],
        [ma('gravitite'),       ma('iron'),      [ma('aether'), ma('aether'), A, A, ma('chrome')],                        4500],
        [ma('skyjade'),         ma('amethyst'),  [ma('aether'), W, A, E, ma('zanite')],                                   4500],
        [ma('veridium'),        ma('iron'),      [ma('aether'), W, W, E, ma('cobalt')],                                   4500],

        [ma('desh'),            ma('nickel'),    [ma('space'), ma('steel'), F, F],                                        5500],
        [ma('ostrum'),          ma('steel'),     [ma('space'), ma('space'), F, F],                                        6000],
        [ma('calorite'),        ma('titanium'),  [ma('space'), ma('space'), F, F, F, F],                                  7500],
        [ma('naquadah'),        ma('iridium'),   [ma('space'), ma('space'), ma('iridium'), ma('platinum'), F, F],          10000],

    ]

    chains.forEach(([output, center, pedestals, source]) => {
        addEnchantingRecipe(event, {
            reagent: center,
            pedestalItems: pedestals,
            output: output,
            sourceCost: source
        })
    })

    const seedessence = [
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
        ma('lead'),           ma('graphite'),        ma('manasteel'),      ma('luminessence'),
        ma('sky_stone'),
        ma('certus_quartz'),  ma('gold'),            ma('lapis_lazuli'),   ma('end'),
        ma('experience'),     ma('blaze'),           ma('ghast'),          ma('enderman'),
        ma('steel'),          ma('nickel'),          ma('constantan'),     ma('electrum'),
        ma('invar'),          ma('mithril'),         ma('tungsten'),       ma('titanium'),
        ma('uranium'),        ma('chrome'),          ma('ruby'),           ma('sapphire'),
        ma('peridot'),        ma('soulium'),         ma('elementium'),     ma('fluix'),
        ma('diamond'),        ma('emerald'),         ma('netherite'),      ma('wither_skeleton'),
        ma('platinum'),       ma('iridium'),         ma('terrasteel'),     ma('nether_star'),
        ma('dragon_egg'),     ma('gaia_spirit'),
        ma('cobalt'),         ma('bismuth'),         ma('antimony'),       ma('manganese'),
        ma('beryllium'),      ma('vanadium'),        ma('thorium'),        ma('neodymium'),
        ma('palladium'),      ma('molybdenum'),      ma('lithium'),
        ma('ambrosium'),      ma('zanite'),          ma('source'),         ma('gravitite'),
        ma('skyjade'),        ma('veridium'),
        ma('desh'),           ma('ostrum'),          ma('calorite'),       ma('naquadah'),
    ]

    ;[
        [ma('ambrosium'), 'aether:ambrosium_shard',     3],
        [ma('zanite'),    'aether:zanite_gemstone',     3],
        [ma('source'),    'ars_nouveau:source_gem',     3],
        [ma('skyjade'),   'deep_aether:skyjade',        3],
    ].forEach(([essence, material, count]) => {
        const inputs = []
        for (let i = 0; i < 8; i++) inputs.push(essence)
        event.shapeless(`${count}x ${material}`, inputs)
    })

    const metalEssenceToIngot = [
        [ma('iron'),       'minecraft:iron_ingot',          6,  1500],
        [ma('gold'),       'minecraft:gold_ingot',           4,  1500],
        [ma('copper'),     'minecraft:copper_ingot',         6,  1500],
        [ma('netherite'),  'minecraft:netherite_ingot',      1,  5000],

        [ma('tin'),        'gtceu:tin_ingot',                5,  1500],
        [ma('silver'),     'gtceu:silver_ingot',             4,  1500],
        [ma('nickel'),     'gtceu:nickel_ingot',             5,  1500],
        [ma('lead'),       'gtceu:lead_ingot',               5,  1500],
        [ma('zinc'),       'create:zinc_ingot',               5,  1500],

        [ma('bronze'),     'gtceu:bronze_ingot',             4,  2000],
        [ma('brass'),      'create:brass_ingot',              4,  2000],
        [ma('electrum'),   'gtceu:electrum_ingot',           4,  2000],
        [ma('invar'),      'gtceu:invar_ingot',              4,  2000],
        [ma('constantan'), 'gtceu:cupronickel_ingot',         4,  2000],

        [ma('steel'),      'gtceu:steel_ingot',              3,  2500],
        [ma('aluminum'),   'gtceu:aluminium_ingot',          4,  2500],
        [ma('chrome'),     'gtceu:chromium_ingot',           3,  2500],
        [ma('silicon'),    'gtceu:silicon_ingot',            4,  2500],

        [ma('titanium'),   'gtceu:titanium_ingot',           2,  3500],

        [ma('tungsten'),   'gtceu:tungsten_ingot',           2,  4000],

        [ma('platinum'),   'gtceu:platinum_ingot',           2,  5000],
        [ma('iridium'),    'gtceu:iridium_ingot',            1,  6000],
        [ma('uranium'),    'gtceu:uranium_ingot',            2,  5000],

        [ma('manasteel'),  'botania:manasteel_ingot',        5,  4000],
        [ma('terrasteel'), 'botania:terrasteel_ingot',       2,  6500],
        [ma('elementium'), 'botania:elementium_ingot',       4,  6000],

        [ma('cobalt'),     'gtceu:cobalt_ingot',             4,  2000],
        [ma('bismuth'),    'gtceu:bismuth_ingot',            4,  2000],
        [ma('antimony'),   'gtceu:antimony_ingot',           4,  2000],
        [ma('manganese'),  'gtceu:manganese_dust',           4,  2000],
        [ma('beryllium'),  'gtceu:beryllium_ingot',          3,  2500],
        [ma('vanadium'),   'gtceu:vanadium_ingot',           3,  3000],
        [ma('thorium'),    'gtceu:thorium_ingot',            3,  3000],
        [ma('neodymium'),  'gtceu:neodymium_ingot',          3,  3000],
        [ma('palladium'),  'gtceu:palladium_ingot',          2,  4000],
        [ma('molybdenum'), 'gtceu:molybdenum_ingot',         3,  3000],
        [ma('lithium'),    'gtceu:lithium_dust',             4,  2000],

        [ma('gravitite'),  'aether_redux:gravitite_ingot',   2,  4500],
        [ma('veridium'),   'aether_redux:veridium_ingot',    3,  3500],

        [ma('desh'),       'ad_astra:desh_ingot',            3,  5000],
        [ma('ostrum'),     'ad_astra:ostrum_ingot',          2,  6000],
        [ma('calorite'),   'ad_astra:calorite_ingot',        2,  7500],
        [ma('naquadah'),   'gtceu:naquadah_ingot',           1,  9000],
    ]

    metalEssenceToIngot.forEach(([_essence, material]) => {
        event.remove({ mod: 'mysticalagriculture', output: material })
    })

    metalEssenceToIngot.forEach(([essence, material, count, sourceCost]) => {
        addEnchantingRecipe(event, {
            reagent: 'gtceu:abstract_metal_ingot',
            pedestalItems: [essence, essence, essence, essence, essence, essence, essence, essence],
            output: { item: material, count: count },
            sourceCost: sourceCost
        })
    })

    const AE = ma('aether')
    const SP = ma('space')
    event.shaped('24x aether:aether_dirt',        ['EEE', 'E E', 'EEE'], { E: AE })
    event.shaped('20x aether:holystone',          ['EEE', 'EEE'],        { E: AE })
    event.shaped('20x aether:aether_grass_block', ['EEE', 'ENE', 'EEE'], { E: AE, N: ma('nature') })
    event.shaped('16x aether:icestone',           ['EEE', 'EIE', 'EEE'], { E: AE, I: ma('ice') })
    event.shaped('12x aether:skyroot_log',        [' E ', ' W ', ' E '], { E: AE, W: ma('wood') })

    event.shaped('24x ad_astra:moon_stone',    ['EEE', 'E E', 'EEE'], { E: SP })
    event.shaped('20x ad_astra:mars_stone',    ['EEE', 'EEE'],        { E: SP })
    event.shaped('20x ad_astra:venus_stone',   ['EEE', 'EFE', 'EEE'], { E: SP, F: F })
    event.shaped('20x ad_astra:glacio_stone',  ['EEE', 'EIE', 'EEE'], { E: SP, I: ma('ice') })
    event.shaped('20x ad_astra:mercury_stone', ['EEE', 'ESE', 'EEE'], { E: SP, S: ma('stone') })
    event.shaped('12x ad_astra:moon_sand',     ['EEE'],               { E: SP })
    event.shaped('12x ad_astra:mars_sand',     [' E ', ' E ', ' E '], { E: SP })

    const seedGates = {
        'iron':       'minecraft:iron_ingot',
        'copper':     'minecraft:copper_ingot',
        'gold':       'minecraft:gold_ingot',
        'tin':        'gtceu:tin_ingot',
        'zinc':       'create:zinc_ingot',
        'lead':       'gtceu:lead_ingot',
        'silver':     'gtceu:silver_ingot',
        'nickel':     'gtceu:nickel_ingot',
        'cobalt':     'gtceu:cobalt_ingot',
        'bismuth':    'gtceu:bismuth_ingot',
        'antimony':   'gtceu:antimony_ingot',
        'bronze':     'gtceu:bronze_ingot',
        'brass':      'create:brass_ingot',
        'electrum':   'gtceu:electrum_ingot',
        'invar':      'gtceu:invar_ingot',
        'constantan': 'gtceu:cupronickel_ingot',
        'steel':      'gtceu:steel_ingot',
        'aluminum':   'gtceu:aluminium_ingot',  // MA uses 'aluminum', GT uses 'aluminium'
        'chrome':     'gtceu:chromium_ingot',   // MA uses 'chrome', GT uses 'chromium'
        'neodymium':  'gtceu:neodymium_ingot',
        'manganese':  'gtceu:manganese_dust',   // dust-only material
        'titanium':   'gtceu:titanium_ingot',
        'silicon':    'gtceu:silicon_ingot',
        'palladium':  'gtceu:palladium_ingot',
        'vanadium':   'gtceu:vanadium_ingot',
        'tungsten':   'gtceu:tungsten_ingot',
        'molybdenum': 'gtceu:molybdenum_ingot',
        'iridium':    'gtceu:iridium_ingot',
        'platinum':   'gtceu:platinum_ingot',
        'uranium':    'gtceu:uranium_ingot',
        'beryllium':  'gtceu:beryllium_ingot',
        'thorium':    'gtceu:thorium_ingot',
        'lithium':    'gtceu:lithium_dust',     // dust-only material
        'ambrosium':  'aether:ambrosium_shard',
        'zanite':     'aether:zanite_gemstone',
        'gravitite':  'aether_redux:gravitite_ingot',
        'skyjade':    'deep_aether:skyjade',
        'veridium':   'aether_redux:veridium_ingot',
        'desh':       'ad_astra:desh_ingot',
        'ostrum':     'ad_astra:ostrum_ingot',
        'calorite':   'ad_astra:calorite_ingot',
        'naquadah':   'gtceu:naquadah_ingot',
    }

    seedessence.forEach(essence => {
        const seedId = essence.replace('_essence', '_seeds')
        const essenceName = essence.replace('mysticalagriculture:', '').replace('_essence', '')
        const gate = seedGates[essenceName]
        const essenceCount = gate ? 15 : 16
        const ingredients = []
        for (let i = 0; i < essenceCount; i++) ingredients.push({ item: essence })
        if (gate) ingredients.push({ item: gate })
        event.custom({
            type: 'botania:petal_apothecary',
            ingredients: ingredients,
            reagent: { item: 'minecraft:wheat_seeds' },
            output: { item: seedId }
        })
    })

})
