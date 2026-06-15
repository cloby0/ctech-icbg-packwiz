ServerEvents.recipes(event => {
    event.remove({ id: 'mysticalagradditions:essence/gaia_spirit' })

    event.custom({
        "type": "botania:runic_altar",
        "ingredients": [
            { "item": "botania:life_essence" },
            { "item": "botania:rune_wrath" },
            { "item": "botania:rune_pride" },
            { "item": "gtceu:elementium_bolt" },
            { "item": "gtceu:elementium_bolt" },
            { "item": "gtceu:elementium_bolt" },
            { "item": "gtceu:elementium_bolt" }
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

    // Gaian Resonance Cores — each diverges from gaia_ingot into a spellbook school
    event.recipes.ars_nouveau.enchanting_apparatus(
        [
            "botania:gaia_ingot",
            "irons_spellbooks:blood_vial",
            "irons_spellbooks:blood_vial",
            "irons_spellbooks:blood_vial",
            "irons_spellbooks:blood_vial",
            "irons_spellbooks:blood_rune",
            "irons_spellbooks:blood_rune",
            "minecraft:netherite_ingot"
        ],
        "botania:life_essence",
        "kubejs:gaian_blood_core",
        25000
    )

    event.recipes.ars_nouveau.enchanting_apparatus(
        [
            "botania:gaia_ingot",
            "irons_spellbooks:divine_pearl",
            "irons_spellbooks:divine_pearl",
            "irons_spellbooks:holy_rune",
            "irons_spellbooks:holy_rune",
            "kubejs:sacred_ambrosium_shard",
            "kubejs:sacred_ambrosium_shard"
        ],
        "botania:life_essence",
        "kubejs:gaian_holy_core",
        25000
    )

    event.recipes.ars_nouveau.enchanting_apparatus(
        [
            "botania:gaia_ingot",
            "mysticalagriculture:enderman_essence",
            "mysticalagriculture:enderman_essence",
            "irons_spellbooks:ender_rune",
            "irons_spellbooks:ender_rune",
            "minecraft:nether_star"
        ],
        "botania:life_essence",
        "kubejs:gaian_void_core",
        25000
    )

    // consumes annihilators_protocol to upgrade into the escalated ender-school book
    event.recipes.ars_nouveau.enchanting_apparatus(
        [
            "botania:gaia_ingot",
            "legendary_spellbooks:annihilators_protocol",
            "irons_spellbooks:ender_rune",
            "irons_spellbooks:ender_rune",
            "irons_spellbooks:ender_rune",
            "irons_spellbooks:ender_rune",
            "minecraft:nether_star",
            "minecraft:nether_star"
        ],
        "botania:life_essence",
        "kubejs:gaian_annihilation_core",
        30000
    )

    // Sage spellbook recipes — core consumed as reagent
    event.recipes.ars_nouveau.enchanting_apparatus(
        [
            "botania:gaia_ingot",
            "botania:gaia_ingot",
            "irons_spellbooks:blood_vial",
            "irons_spellbooks:blood_vial",
            "irons_spellbooks:blood_vial",
            "irons_spellbooks:blood_vial",
            "minecraft:netherite_ingot",
            "minecraft:netherite_ingot"
        ],
        "kubejs:gaian_blood_core",
        "kubejs:blood_grimoire",
        50000
    )

    event.recipes.ars_nouveau.enchanting_apparatus(
        [
            "botania:gaia_ingot",
            "botania:gaia_ingot",
            "irons_spellbooks:divine_pearl",
            "irons_spellbooks:divine_pearl",
            "irons_spellbooks:divine_pearl",
            "irons_spellbooks:divine_pearl",
            "minecraft:golden_apple",
            "minecraft:golden_apple"
        ],
        "kubejs:gaian_holy_core",
        "kubejs:radiant_sanctum",
        50000
    )

    event.recipes.ars_nouveau.enchanting_apparatus(
        [
            "botania:gaia_ingot",
            "botania:gaia_ingot",
            "minecraft:nether_star",
            "minecraft:nether_star",
            "minecraft:ender_eye",
            "minecraft:ender_eye",
            "minecraft:ender_eye",
            "minecraft:ender_eye"
        ],
        "kubejs:gaian_void_core",
        "kubejs:eldritch_codex",
        50000
    )

    event.recipes.ars_nouveau.enchanting_apparatus(
        [
            "botania:gaia_ingot",
            "botania:gaia_ingot",
            "minecraft:nether_star",
            "minecraft:nether_star",
            "mysticalagriculture:enderman_essence",
            "mysticalagriculture:enderman_essence",
            "minecraft:ender_eye",
            "minecraft:ender_eye"
        ],
        "kubejs:gaian_annihilation_core",
        "kubejs:obliteration_chronicle",
        50000
    )

    // Harbinger Codex — UV technomancy book, requires boundless_naquadrite (gaia_spirit + naquadria) + UV circuits
    event.recipes.ars_nouveau.enchanting_apparatus(
        [
            "botania:gaia_ingot",
            "botania:gaia_ingot",
            "cataclysm_spellbooks:technomancy_rune",
            "cataclysm_spellbooks:technomancy_rune",
            "cataclysm_spellbooks:technomancy_rune",
            "cataclysm_spellbooks:technomancy_rune",
            "#gtceu:circuits/uv",
            "#gtceu:circuits/uv"
        ],
        "gtceu:boundless_naquadrite_ingot",
        "kubejs:harbinger_codex",
        55000
    )

    // renewable life_essence after first Guardian of Gaia kill
    // gaia_spirit_essence (farmed via MA once you have first gaia_ingot) distilled through elementium
    event.recipes.ars_nouveau.enchanting_apparatus(
        [
            "mysticalagriculture:gaia_spirit_essence",
            "mysticalagriculture:gaia_spirit_essence",
            "mysticalagriculture:gaia_spirit_essence",
            "mysticalagriculture:gaia_spirit_essence",
            "gtceu:terrasteel_plate",
            "gtceu:terrasteel_plate",
            "#kubejs:fire_essences",
            "#kubejs:air_essences",
        ],
        "botania:elementium_ingot",
        "botania:life_essence",
        40000,
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
