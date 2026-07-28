ServerEvents.recipes(event => {
    event.remove({ id: 'botania:elven_trade/elementium' })
    event.remove({ id: 'botania:elven_trade/elementium_block' })
    event.remove({ id: 'botania:elven_trade/pixie_dust' })
    event.remove({ id: 'botania:elven_trade/dragonstone' })

    addRunicAltarRecipe(event, {
        output: { count: 3, item: 'kubejs:weak_elementium_dust' },
        mana: Mana.ARCANIST,
        ingredients: [
            { item: 'gtceu:terrasteel_bolt' },
            { item: 'gtceu:terrasteel_bolt' },
            { item: 'gtceu:terrasteel_bolt' },
            { item: 'gtceu:terrasteel_bolt' },
            { item: 'botania:rune_air' },
            { item: 'botania:rune_spring' },
            { item: 'botania:rune_summer' },
            { item: 'botania:rune_autumn' }
        ]
    })

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

    // otherworld_essence recurring here, same renewable-resource logic as the Alchemist
    // manasteel chain -- no spirit-tier ceiling, works as an ongoing Occultism tax.
    addImbuementRecipe(event, {
        input: 'kubejs:elven_concentrate',
        output: 'kubejs:elementite_dust',
        source: Source.ARCANIST,
        pedestalItems: ['#kubejs:water_essences', '#kubejs:air_essences', 'gtceu:luminessence_dust', 'occultism:otherworld_essence']
    })

    addEnchantingRecipe(event, {
        reagent: 'kubejs:elementite_dust',
        pedestalItems: ['gtceu:abstract_metal_ingot'],
        output: 'kubejs:raw_elementite',
        sourceCost: Source.ARCANIST
    })

    addImbuementRecipe(event, {
        input: 'kubejs:elven_concentrate',
        output: 'kubejs:elven_source_lattice',
        source: Source.ARCANIST,
        pedestalItems: ['kubejs:resonant_zanite_crystal', 'kubejs:resonant_zanite_crystal', 'ars_nouveau:source_gem', 'ars_nouveau:source_gem']
    })

    addEnchantingRecipe(event, {
        reagent: { item: 'gtceu:raw_mana' },
        pedestalItems: [
            { item: 'kubejs:elven_concentrate' },
            { item: 'kubejs:elven_concentrate' },
            { tag: 'kubejs:water_essences' },
            { tag: 'kubejs:air_essences' }
        ],
        output: { item: 'ars_nouveau:source_gem', count: 5 },
        sourceCost: Source.ARCANIST
    })

    addEnchantingRecipe(event, {
        reagent: { item: 'botania:mana_pearl' },
        pedestalItems: [
            { item: 'kubejs:elven_concentrate' },
            { item: 'kubejs:elven_concentrate' },
            { tag: 'kubejs:air_essences' },
            { tag: 'kubejs:air_essences' }
        ],
        output: { item: 'botania:pixie_dust', count: 3 },
        sourceCost: Source.ARCANIST
    })

    addEnchantingRecipe(event, {
        reagent: { item: 'botania:mana_diamond' },
        pedestalItems: [
            { item: 'kubejs:elven_concentrate' },
            { item: 'kubejs:elven_concentrate' },
            { tag: 'kubejs:earth_essences' },
            { tag: 'kubejs:water_essences' }
        ],
        output: { item: 'botania:dragonstone', count: 2 },
        sourceCost: Source.ARCANIST
    })

    event.smelting("botania:elementium_ingot", "kubejs:raw_elementite")
})
