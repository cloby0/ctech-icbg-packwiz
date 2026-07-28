ServerEvents.recipes(event => {
    event.remove({ id: 'botania:runic_altar' })
    event.remove({ id: 'botania:gaia_ingot' })
    event.remove({ id: 'botania:runic_altar_alt' })
    event.shaped(
        Item.of('botania:runic_altar', 1),
        [
            'WAA',
            'DCD',
            'BAB'
        ],
        {
            A: 'botania:livingrock_bricks',
            B: 'botania:livingrock',
            C: 'botania:mana_diamond',
            D: 'gtceu:manasteel_bolt',
            W: '#forge:tools/wrenches'
        }
    ).damageIngredient(Ingredient.of('#forge:tools/wrenches'))
    addRunicAltarRecipe(event, {
        output: { count: 1, item: 'kubejs:florid_compound' },
        mana: Mana.THAUMATURGE,
        ingredients: [
            { item: 'gtceu:manasteel_bolt' },
            { item: 'botania:rune_earth' },
            { item: 'botania:rune_water' },
            { item: 'botania:rune_mana' },
            { item: 'botania:rune_spring' }
        ]
    })
    addEnchantingRecipe(event, {
        reagent: 'kubejs:florid_compound',
        pedestalItems: ['minecraft:clock', 'mysticalagriculture:nature_essence', 'mysticalagriculture:water_essence', 'reliquary:fertile_essence'],
        output: 'kubejs:living_metalloid',
        sourceCost: 2 * Source.THAUMATURGE
    })

    // storage_stabilizer_tier4 is a Marid-only ritual craft (occultism.js), already buildable
    // once Marid is summoned at Sorcerer -- a one-time infrastructure check here, not a
    // recurring cost: your dimensional storage network must be complete before Terrasteel
    // stabilizes.
    event.remove({ id: "botania:terra_plate/terrasteel_ingot" })
    addTerraPlateRecipe(event, {
        result: { item: 'botania:terrasteel_ingot' },
        mana: 4 * Mana.PROPHET,
        ingredients: [
            { item: 'kubejs:living_metalloid' },
            { item: 'botania:mana_pearl' },
            { item: 'botania:mana_diamond' },
            { item: 'occultism:storage_stabilizer_tier4' }
        ]
    })

    addEnchantingRecipe(event, {
        reagent: 'mysticalagriculture:nature_essence',
        pedestalItems: [
            'mysticalagriculture:skeleton_essence', 'mysticalagriculture:slime_essence',
            'mysticalagriculture:creeper_essence', '#kubejs:earth_essences', '#kubejs:water_essences'
        ],
        output: 'reliquary:fertile_essence',
        sourceCost: 2 * Source.THAUMATURGE
    })

    addRunicAltarRecipe(event, {
        output: { count: 1, item: 'kubejs:rune_of_frost' },
        mana: 2 * Mana.THAUMATURGE,
        ingredients: [
            { item: 'gtceu:manasteel_bolt' },
            { item: 'ad_astra:ice_shard' },
            { item: 'ad_astra:ice_shard' },
            { item: 'ad_astra:ice_shard' },
            { item: 'ad_astra:ice_shard' },
            { item: 'gtceu:naquadah_dust' },
            { item: 'gtceu:naquadah_dust' },
            { item: 'ars_nouveau:source_gem' }
        ]
    })

    addTerraPlateRecipe(event, {
        result: { count: 3, item: 'botania:terrasteel_ingot' },
        mana: 16 * Mana.PROPHET,
        ingredients: [
            { item: 'kubejs:living_metalloid' },
            { item: 'botania:mana_pearl' },
            { item: 'botania:mana_diamond' },
            { item: 'kubejs:rune_of_frost' }
        ]
    })

    addEnchantingRecipe(event, {
        reagent: { item: 'gtceu:raw_mana' },
        pedestalItems: [
            { item: 'botania:rune_spring' },
            { item: 'botania:rune_water' },
            { tag: 'kubejs:water_essences' },
            { item: 'mysticalagriculture:nature_essence' }
        ],
        output: { item: 'ars_nouveau:source_gem', count: 4 },
        sourceCost: Source.THAUMATURGE
    })

    addManaPondRecipe(event, {
        input: { item: 'botania:mana_diamond' },
        mana: 2 * Mana.THAUMATURGE,
        catalyst: { type: 'block', block: 'botania:conjuration_catalyst' },
        output: { item: 'botania:mana_diamond', count: 2 }
    })

    addManaPondRecipe(event, {
        input: { item: 'botania:mana_pearl' },
        mana: 2 * Mana.THAUMATURGE,
        catalyst: { type: 'block', block: 'botania:conjuration_catalyst' },
        output: { item: 'botania:mana_pearl', count: 2 }
    })

    addManaPondRecipe(event, {
        input: { tag: 'forge:ingots/terrasteel' },
        mana: 2 * Mana.THAUMATURGE,
        catalyst: { type: 'block', block: 'botania:alchemy_catalyst' },
        output: { count: 4, item: 'gtceu:abstract_metal_ingot' }
    })
})
