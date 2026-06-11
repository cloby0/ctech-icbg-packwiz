ServerEvents.recipes(event => {
    event.custom({
        "type": "botania:runic_altar",
        "ingredients": [
            { "item": "botania:life_essence" },
            { "item": "botania:rune_wrath" },
            { "item": "botania:rune_pride" },
            { "tag": "forge:ingots/elementium" },
            { "tag": "forge:ingots/elementium" },
            { "tag": "forge:ingots/elementium" },
            { "tag": "forge:ingots/elementium" }
        ],
        "mana": 8000,
        "output": {
            "item": "kubejs:vengeful_gaia_spirit"
        }
    })

    event.recipes.ars_nouveau.imbuement(
        "kubejs:vengeful_gaia_spirit",
        "kubejs:soul_of_gaia",
        20000,
        [
            "mysticalagriculture:wither_skeleton_essence",
            "mysticalagriculture:wither_skeleton_essence",
            "mysticalagriculture:enderman_essence",
            "mysticalagriculture:enderman_essence"
        ]
    )

    event.recipes.ars_nouveau.enchanting_apparatus(
        [
            "botania:elementium_block",
            "botania:elementium_block",
            "botania:elementium_block",
            "botania:elementium_block",
            "botania:elementium_block",
            "botania:elementium_block",
            "botania:elementium_block",
            "botania:elementium_block"
        ],
        "kubejs:soul_of_gaia",
        "kubejs:boundless_gaia_spirit_ingot",
        20000,
    )

    event.custom({
        "type": "botania:terra_plate",
        "ingredients": [
            { "item": "kubejs:boundless_gaia_spirit_ingot" },
            { "item": "botania:terrasteel_block" },
            { "item": "botania:terrasteel_block" }
        ],
        "mana": 1000000,
        "result": { "item": "botania:gaia_ingot" }
    })
})
