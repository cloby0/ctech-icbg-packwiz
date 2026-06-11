ServerEvents.recipes(event => {

    // Remove vanilla recipes — replaced with progression-gated versions below
    event.remove({ output: 'celestial_enchantments:basic_celestial_catalyst' })
    event.remove({ output: 'celestial_enchantments:advanced_celestial_catalyst' })
    event.remove({ output: 'celestial_enchantments:legendary_celestial_catalyst' })
    event.remove({ output: 'celestial_enchantments:celestial_enchanting_table' })

    // ============================================================
    // CELESTIAL ENCHANTING TABLE — shaped crafting
    // gated by basic catalyst (Sorcerer magic); no tech required
    // ============================================================

    event.shaped(Item.of('celestial_enchantments:celestial_enchanting_table', 1), [
        ' B ', 'TCT', 'OOO'
    ], {
        'B': 'minecraft:enchanted_book',
        'T': 'celestial_enchantments:basic_celestial_catalyst',
        'C': 'gtceu:holy_silver_dust',
        'O': 'minecraft:crying_obsidian'
    })

    // ============================================================
    // STELLAR EMBER (celestial_core:fire_essence) — shapeless crafting
    // 4x fire essences (ars_nouveau or mysticalagriculture) → 1 stellar ember
    // ============================================================

    event.shapeless(Item.of('celestial_core:fire_essence', 1), [
        '#kubejs:fire_essences', '#kubejs:fire_essences',
        '#kubejs:fire_essences', '#kubejs:fire_essences'
    ])

    // ============================================================
    // BASIC CELESTIAL CATALYST — enchanting apparatus, Sorcerer tier
    // celestial_core:fire_essence (Stellar Ember) = craft from 4x fire essences, or loot drop
    // ============================================================

    event.recipes.ars_nouveau.enchanting_apparatus(
        [
            "celestial_core:fire_essence",
            "minecraft:lapis_lazuli",
            "minecraft:gold_ingot",
            "minecraft:amethyst_shard",
            "minecraft:redstone",
            "gtceu:holy_silver_dust",
            "gtceu:holy_silver_dust"
        ],
        "nameless_trinkets:ultimate_dust",
        "celestial_enchantments:basic_celestial_catalyst",
        3000
    )

    // ============================================================
    // ADVANCED CELESTIAL CATALYST — enchanting apparatus, Alchemist tier
    // celestial_core:midnight_fragment = End/deep dark loot gate
    // ============================================================

    event.recipes.ars_nouveau.enchanting_apparatus(
        [
            "celestial_enchantments:basic_celestial_catalyst",
            "celestial_enchantments:basic_celestial_catalyst",
            "celestial_core:midnight_fragment",
            "minecraft:diamond",
            "gtceu:prima_materia_ingot",
            "gtceu:prima_materia_ingot"
        ],
        "nameless_trinkets:ultimate_dust",
        "celestial_enchantments:advanced_celestial_catalyst",
        5000
    )

    // ============================================================
    // LEGENDARY CELESTIAL CATALYST — enchanting apparatus, Thaumaturge tier
    // celestial_core:pure_nether_star = wither kill + purification gate
    // terrasteel = Thaumaturge magic material gate
    // ============================================================

    event.recipes.ars_nouveau.enchanting_apparatus(
        [
            "celestial_enchantments:advanced_celestial_catalyst",
            "celestial_enchantments:advanced_celestial_catalyst",
            "celestial_core:pure_nether_star",
            "minecraft:netherite_scrap",
            "botania:terrasteel_ingot",
            "botania:terrasteel_ingot"
        ],
        "nameless_trinkets:ultimate_dust",
        "celestial_enchantments:legendary_celestial_catalyst",
        7000
    )

})
