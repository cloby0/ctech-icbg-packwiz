ServerEvents.recipes(event => {
    event.remove({ id: 'botania:elven_trade/elementium' })
    event.remove({ id: 'botania:elven_trade/elementium_block' })

    // 4x terrasteel + natural runes -> 3x terrestrial concentrate (weak_elementium_dust)
    event.custom({
        "type": "botania:runic_altar",
        "ingredients": [
            { "tag": "forge:ingots/terrasteel" },
            { "tag": "forge:ingots/terrasteel" },
            { "tag": "forge:ingots/terrasteel" },
            { "tag": "forge:ingots/terrasteel" },
            { "item": "botania:rune_air" },
            { "item": "botania:rune_spring" },
            { "item": "botania:rune_summer" },
            { "item": "botania:rune_autumn" }
        ],
        "mana": 8000,
        "output": {
            "count": 3,
            "item": "kubejs:weak_elementium_dust"
        }
    })

    // 3x terrestrial concentrate -> 2x elven concentrate (through the portal)
    event.custom({
        "type": "botania:elven_trade",
        "ingredients": [
            { "item": "kubejs:weak_elementium_dust" },
            { "item": "kubejs:weak_elementium_dust" },
            { "item": "kubejs:weak_elementium_dust" }
        ],
        "output": [
            { "item": "kubejs:elven_concentrate", "count": 2 }
        ]
    })

    // elven concentrate + water/air essence + luminessence -> elementite dust
    event.recipes.ars_nouveau.imbuement(
        "kubejs:elven_concentrate",
        "kubejs:elementite_dust",
        8000,
        [
            "ars_nouveau:water_essence",
            "ars_nouveau:air_essence",
            "gtceu:luminessence_dust"
        ]
    )

    // elementite dust + abstract metal -> raw elementite
    event.recipes.ars_nouveau.enchanting_apparatus(
        [ "gtceu:abstract_metal_ingot" ],
        "kubejs:elementite_dust",
        "kubejs:raw_elementite",
        15000,
    )

    // smelt raw elementite -> elementium ingot
    event.smelting("botania:elementium_ingot", "kubejs:raw_elementite")
})
