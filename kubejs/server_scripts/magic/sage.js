ServerEvents.recipes(event => {
    // life_essence + sin runes + elementium gate -> vengeful_gaia_spirit
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

    // vengeful_gaia_spirit + boss mob essences -> soul_of_gaia
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

    // soul_of_gaia + 8x elementium block -> boundless_gaia_spirit_ingot
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

    // boundless_gaia_spirit_ingot + 2x terrasteel block -> gaia_spirit_ingot (Terrestrial Agglomeration)
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
