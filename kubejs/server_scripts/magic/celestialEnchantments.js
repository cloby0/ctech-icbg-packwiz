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

    addMnaManaweavingRecipe(event, {
        output: 'celestial_enchantments:basic_celestial_catalyst',
        items: ['nameless_trinkets:ultimate_dust', 'celestial_core:fire_essence', 'minecraft:lapis_lazuli', 'minecraft:gold_ingot', 'minecraft:amethyst_shard', 'minecraft:redstone', 'gtceu:holy_silver_dust', 'gtceu:holy_silver_dust'],
        patterns: ['mna:split_triangle', 'mna:knot2'],
        tier: 3
    })

    addMnaManaweavingRecipe(event, {
        output: 'celestial_enchantments:advanced_celestial_catalyst',
        items: ['nameless_trinkets:ultimate_dust', 'celestial_enchantments:basic_celestial_catalyst', 'celestial_enchantments:basic_celestial_catalyst', 'celestial_core:midnight_fragment', 'minecraft:diamond', 'gtceu:prima_materia_ingot', 'gtceu:prima_materia_ingot'],
        patterns: ['mna:split_triangle', 'mna:knot2'],
        tier: 3
    })

    // Reflavored to Blood Altar 2026-08-06: this is the capstone of the catalyst chain (not
    // consumed further), and a pure nether star is a singular major sacrifice, not a bulk
    // pattern-weave input.
    addBloodAltarRecipe(event, {
        input: 'celestial_core:pure_nether_star',
        output: 'celestial_enchantments:legendary_celestial_catalyst',
        upgradeLevel: 3,
        syphon: LP.THAUMATURGE
    })

})
