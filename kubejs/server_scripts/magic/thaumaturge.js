ServerEvents.recipes(event => {
    event.remove({ id: 'botania:runic_altar' })
    event.remove({ id: 'botania:runic_altar_alt' })
    event.shaped(
        Item.of('botania:runic_altar', 1),
        [
            'AAA',
            'DCD',
            'BAB'
        ],
        {
            A: 'botania:livingrock_bricks',
            B: 'botania:livingrock',
            C: 'botania:mana_diamond',
            D: 'gtceu:manasteel_bolt'
        }
    )
    event.custom({
        "type": "botania:runic_altar",
        "ingredients": [
            {
            "tag": "forge:ingots/manasteel"
            },
            {
            "item": "botania:rune_earth"
            },
            {
            "item": "botania:rune_water"
            },
            {
            "item": "botania:rune_mana"
            },
            {
            "item": "botania:rune_spring"
            }
        ],
        "mana": 5200,
        "output": {
            "count": 1,
            "item": "kubejs:florid_compound"
        }
    })
    event.recipes.ars_nouveau.enchanting_apparatus(
        [
            "minecraft:clock",
            "mysticalagriculture:nature_essence",
            "mysticalagriculture:water_essence",
            "reliquary:fertile_essence",
        ],
        "kubejs:florid_compound",
        "kubejs:living_metalloid",
        30000,
    );

    event.remove({ id: "botania:terra_plate/terrasteel_ingot" })
    event.custom({
        "type": "botania:terra_plate",
        "ingredients": [
            {
            "item": "kubejs:living_metalloid"
            },
            {
            "item": "botania:mana_pearl"
            },
            {
            "item": "botania:mana_diamond"
            }
        ],
        "mana": 500000,
        "result": {
            "item": "botania:terrasteel_ingot"
        }
    })
})
