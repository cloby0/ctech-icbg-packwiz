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

    // Abstract Metal elemental synthesis — single element (shapeless crafting)
    event.shapeless('gtceu:gold_ingot',      ['gtceu:abstract_metal_ingot', '#kubejs:fire_essences'])
    event.shapeless('gtceu:tin_ingot',       ['gtceu:abstract_metal_ingot', '#kubejs:water_essences'])
    event.shapeless('gtceu:lead_ingot',      ['gtceu:abstract_metal_ingot', '#kubejs:earth_essences'])
    event.shapeless('gtceu:aluminium_ingot', ['gtceu:abstract_metal_ingot', '#kubejs:air_essences'])

    // Abstract Metal elemental synthesis — multi element (enchanting apparatus)
    event.recipes.ars_nouveau.enchanting_apparatus(
        ['#kubejs:fire_essences', '#kubejs:water_essences'],
        'gtceu:abstract_metal_ingot', 'gtceu:bismuth_ingot', 3000)
    event.recipes.ars_nouveau.enchanting_apparatus(
        ['#kubejs:fire_essences', '#kubejs:earth_essences'],
        'gtceu:abstract_metal_ingot', 'gtceu:copper_ingot', 3000)
    event.recipes.ars_nouveau.enchanting_apparatus(
        ['#kubejs:water_essences', '#kubejs:air_essences'],
        'gtceu:abstract_metal_ingot', 'gtceu:silver_ingot', 3000)
    event.recipes.ars_nouveau.enchanting_apparatus(
        ['#kubejs:earth_essences', '#kubejs:air_essences'],
        'gtceu:abstract_metal_ingot', 'gtceu:magnesium_ingot', 3000)
    event.recipes.ars_nouveau.enchanting_apparatus(
        ['#kubejs:water_essences', '#kubejs:air_essences', '#forge:gems/ambrosium'],
        'gtceu:abstract_metal_ingot', 'gtceu:holy_silver_ingot', 4000)

    // Mana pool QoL — glowstone block -> 4x luminessence dust (bypasses cauldron chain)
    event.custom({
        "type": "botania:mana_infusion",
        "input": { "item": "minecraft:glowstone" },
        "mana": 2000,
        "output": { "count": 4, "item": "gtceu:luminessence_dust" }
    })

    // Mana pool QoL — silver [alchemy catalyst] -> holy silver (skips multi-step chain)
    event.custom({
        "type": "botania:mana_infusion",
        "input": { "tag": "forge:ingots/silver" },
        "mana": 3000,
        "catalyst": { "type": "block", "block": "botania:alchemy_catalyst" },
        "output": { "item": "gtceu:holy_silver_ingot" }
    })
})
