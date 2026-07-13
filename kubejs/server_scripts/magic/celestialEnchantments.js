ServerEvents.recipes(event => {

    event.remove({ output: 'celestial_enchantments:basic_celestial_catalyst' })
    event.remove({ output: 'celestial_enchantments:advanced_celestial_catalyst' })
    event.remove({ output: 'celestial_enchantments:legendary_celestial_catalyst' })
    event.remove({ output: 'celestial_enchantments:celestial_enchanting_table' })

    event.shaped(Item.of('celestial_enchantments:celestial_enchanting_table', 1), [
        'HB ', 'TCT', 'OOO'
    ], {
        'B': 'minecraft:enchanted_book',
        'T': 'celestial_enchantments:basic_celestial_catalyst',
        'C': 'gtceu:holy_silver_dust',
        'O': 'minecraft:crying_obsidian',
        'H': '#forge:tools/hammers'
    }).damageIngredient(Ingredient.of('#forge:tools/hammers'))

    event.shapeless(Item.of('celestial_core:fire_essence', 1), [
        '#kubejs:fire_essences', '#kubejs:fire_essences',
        '#kubejs:fire_essences', '#kubejs:fire_essences'
    ])

    addEnchantingRecipe(event, {
        reagent: 'nameless_trinkets:ultimate_dust',
        pedestalItems: [
            'celestial_core:fire_essence', 'minecraft:lapis_lazuli', 'minecraft:gold_ingot',
            'minecraft:amethyst_shard', 'minecraft:redstone',
            'gtceu:holy_silver_dust', 'gtceu:holy_silver_dust'
        ],
        output: 'celestial_enchantments:basic_celestial_catalyst',
        sourceCost: Source.ALCHEMIST
    })

    addEnchantingRecipe(event, {
        reagent: 'nameless_trinkets:ultimate_dust',
        pedestalItems: [
            'celestial_enchantments:basic_celestial_catalyst', 'celestial_enchantments:basic_celestial_catalyst',
            'celestial_core:midnight_fragment', 'minecraft:diamond',
            'gtceu:prima_materia_ingot', 'gtceu:prima_materia_ingot'
        ],
        output: 'celestial_enchantments:advanced_celestial_catalyst',
        sourceCost: Source.ALCHEMIST
    })

    addEnchantingRecipe(event, {
        reagent: 'nameless_trinkets:ultimate_dust',
        pedestalItems: [
            'celestial_enchantments:advanced_celestial_catalyst', 'celestial_enchantments:advanced_celestial_catalyst',
            'celestial_core:pure_nether_star', 'minecraft:netherite_scrap',
            'botania:terrasteel_ingot', 'botania:terrasteel_ingot'
        ],
        output: 'celestial_enchantments:legendary_celestial_catalyst',
        sourceCost: Source.THAUMATURGE
    })

})
