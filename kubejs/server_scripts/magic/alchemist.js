ServerEvents.recipes(event => {
    //gear
    event.remove ({ id: 'reliquary:alkahestry_tome' })


    //something progression this way comes
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
        "mana": 23500,
        "output": {
            "item": "botania:manasteel_ingot"
        }
    })

    event.remove({ id: "botania:mana_infusion/manasteel" })
})
