ServerEvents.recipes(event => {
    //gear
    event.remove ({ id: 'reliquary:alkahestry_tome' })


    // swap petals -> mana_pearl in all apothecary recipes; gates the apothecary behind mana pool
    // pure_daisy is removed here and re-gated behind the enchanting apparatus recipe below
    event.remove({ id: "botania:petal_apothecary/pure_daisy" })
    event.replaceInput(
        { id: 'botania:apothecary_default' },
        '#botania:petals',
        'botania:mana_pearl'
    )

    event.recipes.ars_nouveau.enchanting_apparatus(
        [
            "gtceu:holy_silver_dust",
            "gtceu:prima_materia_rod",
            "mysticalagriculture:earth_essence",
            "mysticalagriculture:earth_essence",
        ],
        "ars_nouveau:magebloom_crop",
        "botania:pure_daisy",
        10000,
    );

    event.replaceInput(
        { id: 'botania:apothecary_deepslate' },
        '#botania:petals',
        'botania:mana_pearl'
    )

    event.replaceInput(
        { id: 'botania:apothecary_mossy' },
        '#botania:petals',
        'botania:mana_pearl'
    )
    
    event.recipes.ars_nouveau.enchanting_apparatus(
        [
            "gtceu:prima_materia_block",
            "minecraft:experience_bottle",
            "minecraft:experience_bottle",
            "hexcasting:charged_amethyst"
        ],
        "minecraft:bucket",
        "gtceu:concepts_bucket",
        5000,
    );

    event.recipes.ars_nouveau.imbuement(
        "gtceu:concepts_bucket",
        "gtceu:metal_form_bucket",
        7500,
        ["gtceu:holy_silver_block"]
    )

    event.recipes.ars_nouveau.imbuement(
        "gtceu:metal_form_bucket",
        "kubejs:disorganized_metal_form",
        3000,
        [
            "mysticalagriculture:ice_essence", 
            "mysticalagriculture:ice_essence", 
            "mysticalagriculture:ice_essence", 
            "mysticalagriculture:ice_essence"
        ]
    )

    event.smelting('gtceu:abstract_metal_ingot', 'kubejs:disorganized_metal_form')

    event.custom({
        "type": "botania:mana_infusion",
        "input": {
            "item": "gtceu:abstract_metal_ingot"
        },
        "mana": 3500,
        "output": {
            "item": "botania:manasteel_ingot"
        }
    })

    // Abstract Metal elemental synthesis single element (shapeless crafting)
    event.shapeless('minecraft:gold_ingot',   ['gtceu:abstract_metal_ingot', '#kubejs:fire_essences'])
    event.shapeless('gtceu:tin_ingot',       ['gtceu:abstract_metal_ingot', '#kubejs:water_essences'])
    event.shapeless('gtceu:lead_ingot',      ['gtceu:abstract_metal_ingot', '#kubejs:earth_essences'])
    event.shapeless('gtceu:aluminium_ingot', ['gtceu:abstract_metal_ingot', '#kubejs:air_essences'])

    // Abstract Metal elemental synthesis multi element (enchanting apparatus)
    event.recipes.ars_nouveau.enchanting_apparatus(
        ['#kubejs:fire_essences', '#kubejs:water_essences'],
        'gtceu:abstract_metal_ingot', 'gtceu:bismuth_ingot', 3000)
    event.recipes.ars_nouveau.enchanting_apparatus(
        ['#kubejs:fire_essences', '#kubejs:earth_essences'],
        'gtceu:abstract_metal_ingot', 'minecraft:copper_ingot', 3000)
    event.recipes.ars_nouveau.enchanting_apparatus(
        ['#kubejs:water_essences', '#kubejs:air_essences'],
        'gtceu:abstract_metal_ingot', 'gtceu:silver_ingot', 3000)
    event.recipes.ars_nouveau.enchanting_apparatus(
        ['#kubejs:earth_essences', '#kubejs:air_essences'],
        'gtceu:abstract_metal_ingot', 'gtceu:magnesium_dust', 3000)
    event.recipes.ars_nouveau.enchanting_apparatus(
        ['#kubejs:water_essences', '#kubejs:air_essences', '#forge:gems/ambrosium'],
        'gtceu:abstract_metal_ingot', 'gtceu:holy_silver_ingot', 4000)

    // Mana pool QoL glowstone block -> 4x luminessence dust (bypasses cauldron chain)
    event.custom({
        "type": "botania:mana_infusion",
        "input": { "item": "minecraft:glowstone" },
        "mana": 2000,
        "output": { "count": 4, "item": "gtceu:luminessence_dust" }
    })

    // Mana pool QoL silver [alchemy catalyst] -> holy silver (skips multi-step chain)
    event.custom({
        "type": "botania:mana_infusion",
        "input": { "tag": "forge:ingots/silver" },
        "mana": 3000,
        "catalyst": { "type": "block", "block": "botania:alchemy_catalyst" },
        "output": { "item": "gtceu:holy_silver_ingot" }
    })

    // Hex Casting ALL functional items gated behind hexed_amethyst_core (Alchemist gate)
    // charged_amethyst drops from geodes freely; core requires Manasteel imbuement
    // decorative blocks (amethyst bricks, edified wood) and amethyst_dust packing stay vanilla
    // hex_callback naturally gated by focus+artifact dep

    // hexed_amethyst_core: single entry point for all of Hex Casting
    event.recipes.ars_nouveau.imbuement(
        'hexcasting:charged_amethyst',
        'kubejs:hexed_amethyst_core',
        5000,
        [
            'botania:manasteel_ingot',
            'botania:manasteel_ingot',
            'gtceu:abstract_metal_ingot',
            'minecraft:glowstone',
        ]
    )

    // staves all 14 variants require hexed_amethyst_core instead of charged_amethyst
    event.remove({ output: /hexcasting:staff\// })
    const staffPattern = [' SA', ' WS', 'S  ']
    const staffKey = (w) => ({ S: 'minecraft:stick', A: 'kubejs:hexed_amethyst_core', W: w })
    ;[
        ['minecraft:oak_planks',                     'hexcasting:staff/oak'],
        ['minecraft:birch_planks',                   'hexcasting:staff/birch'],
        ['minecraft:spruce_planks',                  'hexcasting:staff/spruce'],
        ['minecraft:jungle_planks',                  'hexcasting:staff/jungle'],
        ['minecraft:acacia_planks',                  'hexcasting:staff/acacia'],
        ['minecraft:dark_oak_planks',                'hexcasting:staff/dark_oak'],
        ['minecraft:mangrove_planks',                'hexcasting:staff/mangrove'],
        ['minecraft:bamboo_planks',                  'hexcasting:staff/bamboo'],
        ['minecraft:cherry_planks',                  'hexcasting:staff/cherry'],
        ['minecraft:crimson_planks',                 'hexcasting:staff/crimson'],
        ['minecraft:warped_planks',                  'hexcasting:staff/warped'],
        ['hexcasting:edified_planks',                'hexcasting:staff/edified'],
        ['hexcasting:quenched_allay_shard',          'hexcasting:staff/quenched'],
        ['#hexcasting:brainswept_circle_components', 'hexcasting:staff/mindsplice'],
    ].forEach(([w, result]) => event.shaped(result, staffPattern, staffKey(w)))

    // lens
    event.remove({ id: 'hexcasting:lens' })
    event.shaped('hexcasting:lens', [' C ', 'CAC', ' C '], {
        C: 'minecraft:glass',
        A: 'kubejs:hexed_amethyst_core',
    })

    // thought_knot
    event.remove({ id: 'hexcasting:thought_knot' })
    event.shapeless('hexcasting:thought_knot', ['kubejs:hexed_amethyst_core', 'minecraft:string'])

    // slate
    event.remove({ id: 'hexcasting:slate' })
    event.shaped('6x hexcasting:slate', [' A ', 'SSS'], {
        A: 'kubejs:hexed_amethyst_core',
        S: 'minecraft:deepslate',
    })

    // cypher
    event.remove({ id: 'hexcasting:cypher' })
    event.shaped('hexcasting:cypher', [' C ', 'CAC', ' C '], {
        C: '#forge:ingots/copper',
        A: 'kubejs:hexed_amethyst_core',
    })

    // scrolls (all sizes) and scroll_paper
    event.remove({ id: 'hexcasting:scroll_small' })
    event.shaped('hexcasting:scroll_small', [' A', 'P '], {
        A: 'kubejs:hexed_amethyst_core',
        P: 'minecraft:paper',
    })

    event.remove({ id: 'hexcasting:scroll_medium' })
    event.shaped('hexcasting:scroll_medium', ['  A', 'PP ', 'PP '], {
        A: 'kubejs:hexed_amethyst_core',
        P: 'minecraft:paper',
    })

    event.remove({ id: 'hexcasting:scroll' })
    event.shaped('hexcasting:scroll', ['PPA', 'PPP', 'PPP'], {
        A: 'kubejs:hexed_amethyst_core',
        P: 'minecraft:paper',
    })

    event.remove({ id: 'hexcasting:scroll_paper' })
    event.shaped('8x hexcasting:scroll_paper', ['PPP', 'PAP', 'PPP'], {
        P: 'minecraft:paper',
        A: 'kubejs:hexed_amethyst_core',
    })

    // abacus
    event.remove({ id: 'hexcasting:abacus' })
    event.shaped('hexcasting:abacus', ['WAW', 'SAS', 'WAW'], {
        W: '#minecraft:planks',
        A: 'kubejs:hexed_amethyst_core',
        S: 'minecraft:stick',
    })

    // akashic bookshelf no amethyst in original; add core to gate it
    event.remove({ id: 'hexcasting:akashic_bookshelf' })
    event.shaped('hexcasting:akashic_bookshelf', ['LPL', 'CAC', 'LPL'], {
        L: '#hexcasting:edified_logs',
        P: '#hexcasting:edified_planks',
        C: 'minecraft:book',
        A: 'kubejs:hexed_amethyst_core',
    })

    // akashic connector replace charged_amethyst with hexed_amethyst_core
    event.remove({ id: 'hexcasting:akashic_connector' })
    event.shaped('4x hexcasting:akashic_connector', ['LPL', '12A', 'LPL'], {
        L: '#hexcasting:edified_logs',
        P: '#hexcasting:edified_planks',
        '1': 'hexcasting:amethyst_dust',
        '2': 'minecraft:amethyst_shard',
        A: 'kubejs:hexed_amethyst_core',
    })

    // focus
    event.remove({ id: 'hexcasting:focus' })
    event.remove({ id: 'hexcasting:focus_rotated' })
    event.recipes.ars_nouveau.enchanting_apparatus(
        [
            'botania:manasteel_ingot',
            'botania:manasteel_ingot',
            'kubejs:hexed_amethyst_core',
            'minecraft:glowstone',
            'minecraft:glowstone',
        ],
        'minecraft:leather',
        'hexcasting:focus',
        3000
    )

    // spellbook
    event.remove({ id: 'hexcasting:spellbook' })
    event.recipes.ars_nouveau.enchanting_apparatus(
        [
            'botania:manasteel_ingot',
            'botania:manasteel_ingot',
            'kubejs:hexed_amethyst_core',
            'gtceu:abstract_metal_ingot',
            'minecraft:chorus_fruit',
        ],
        'minecraft:writable_book',
        'hexcasting:spellbook',
        5000
    )

    // artifact
    event.remove({ id: 'hexcasting:artifact' })
    event.recipes.ars_nouveau.enchanting_apparatus(
        [
            'botania:manasteel_ingot',
            'botania:manasteel_ingot',
            'kubejs:hexed_amethyst_core',
            'kubejs:hexed_amethyst_core',
            'gtceu:abstract_metal_ingot',
        ],
        '#minecraft:music_discs',
        'hexcasting:artifact',
        4000
    )

    // trinket
    event.remove({ id: 'hexcasting:trinket' })
    event.shaped('hexcasting:trinket', [' M ', 'MAM', ' M '], {
        M: 'botania:manasteel_ingot',
        A: 'kubejs:hexed_amethyst_core',
    })

    // hex_ars_link linker_base bump from cheap gold+amethyst to Alchemist cost
    event.remove({ output: 'hex_ars_link:linker_base' })
    event.recipes.ars_nouveau.enchanting_apparatus(
        [
            'botania:manasteel_ingot',
            'botania:manasteel_ingot',
            'kubejs:hexed_amethyst_core',
            'kubejs:hexed_amethyst_core',
        ],
        'minecraft:amethyst_shard',
        'hex_ars_link:linker_base',
        3000
    )
})
