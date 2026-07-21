ServerEvents.recipes(event => {
    event.remove({ id: 'mysticalagradditions:essence/gaia_spirit' })

    // === Primal/Wilden line: living-beast alt spine, independent of Gaia ===
    // Wilden drops -> wilden_alloy dust -> (auto furnace smelt) -> ingot + forms
    addEnchantingRecipe(event, {
        reagent: 'ars_nouveau:wilden_tribute',
        pedestalItems: [
            'ars_nouveau:wilden_horn', 'ars_nouveau:wilden_horn',
            'ars_nouveau:wilden_spike', 'ars_nouveau:wilden_spike',
            'ars_nouveau:drygmy_shard', 'ars_nouveau:drygmy_shard',
            '#kubejs:earth_essences', '#kubejs:fire_essences',
            'occultism:iesnium_ingot'
        ],
        output: 'gtceu:wilden_alloy_dust',
        sourceCost: Source.SAGE
    })

    addRunicAltarRecipe(event, {
        output: { item: 'kubejs:vengeful_gaia_spirit' },
        mana: Mana.SAGE,
        ingredients: [
            { item: 'botania:life_essence' },
            { item: 'botania:rune_wrath' },
            { item: 'botania:rune_pride' },
            { item: 'gtceu:elementium_bolt' },
            { item: 'gtceu:elementium_bolt' },
            { item: 'gtceu:elementium_bolt' },
            { item: 'gtceu:elementium_bolt' }
        ]
    })

    addImbuementRecipe(event, {
        input: 'kubejs:vengeful_gaia_spirit',
        output: 'kubejs:soul_of_gaia',
        source: Source.SAGE,
        pedestalItems: ['mysticalagriculture:wither_skeleton_essence', 'mysticalagriculture:wither_skeleton_essence', 'mysticalagriculture:enderman_essence', 'mysticalagriculture:enderman_essence']
    })

    addEnchantingRecipe(event, {
        reagent: 'kubejs:soul_of_gaia',
        pedestalItems: [
            'botania:elementium_block', 'botania:elementium_block',
            'botania:elementium_block', 'botania:elementium_block',
            'botania:elementium_block', 'botania:elementium_block',
            'botania:elementium_block', 'botania:elementium_block'
        ],
        output: 'kubejs:boundless_gaia_spirit_ingot',
        sourceCost: Source.SAGE
    })

    addEnchantingRecipe(event, {
        reagent: 'botania:life_essence',
        pedestalItems: [
            'botania:gaia_ingot', 'irons_spellbooks:blood_vial', 'irons_spellbooks:blood_vial',
            'irons_spellbooks:blood_vial', 'irons_spellbooks:blood_vial',
            'irons_spellbooks:blood_rune', 'irons_spellbooks:blood_rune', 'minecraft:netherite_ingot'
        ],
        output: 'kubejs:gaian_blood_core',
        sourceCost: Source.SAGE
    })

    addEnchantingRecipe(event, {
        reagent: 'botania:life_essence',
        pedestalItems: [
            'botania:gaia_ingot', 'irons_spellbooks:divine_pearl', 'irons_spellbooks:divine_pearl',
            'irons_spellbooks:holy_rune', 'irons_spellbooks:holy_rune',
            'kubejs:sacred_ambrosium_shard', 'kubejs:sacred_ambrosium_shard'
        ],
        output: 'kubejs:gaian_holy_core',
        sourceCost: Source.SAGE
    })

    addEnchantingRecipe(event, {
        reagent: 'botania:life_essence',
        pedestalItems: [
            'botania:gaia_ingot', 'mysticalagriculture:enderman_essence', 'mysticalagriculture:enderman_essence',
            'irons_spellbooks:ender_rune', 'irons_spellbooks:ender_rune', 'minecraft:nether_star'
        ],
        output: 'kubejs:gaian_void_core',
        sourceCost: Source.SAGE
    })

    addEnchantingRecipe(event, {
        reagent: 'botania:life_essence',
        pedestalItems: [
            'botania:gaia_ingot', 'legendary_spellbooks:annihilators_protocol',
            'irons_spellbooks:ender_rune', 'irons_spellbooks:ender_rune',
            'irons_spellbooks:ender_rune', 'irons_spellbooks:ender_rune',
            'minecraft:nether_star', 'minecraft:nether_star'
        ],
        output: 'kubejs:gaian_annihilation_core',
        sourceCost: Source.SAGE
    })

    addEnchantingRecipe(event, {
        reagent: 'kubejs:gaian_blood_core',
        pedestalItems: [
            'botania:gaia_ingot', 'botania:gaia_ingot',
            'irons_spellbooks:blood_vial', 'irons_spellbooks:blood_vial',
            'irons_spellbooks:blood_vial', 'irons_spellbooks:blood_vial',
            'minecraft:netherite_ingot', 'minecraft:netherite_ingot'
        ],
        output: 'kubejs:blood_grimoire',
        sourceCost: 2 * Source.SAGE
    })

    addEnchantingRecipe(event, {
        reagent: 'kubejs:gaian_holy_core',
        pedestalItems: [
            'botania:gaia_ingot', 'botania:gaia_ingot',
            'irons_spellbooks:divine_pearl', 'irons_spellbooks:divine_pearl',
            'irons_spellbooks:divine_pearl', 'irons_spellbooks:divine_pearl',
            'minecraft:golden_apple', 'minecraft:golden_apple'
        ],
        output: 'kubejs:radiant_sanctum',
        sourceCost: 2 * Source.SAGE
    })

    addEnchantingRecipe(event, {
        reagent: 'kubejs:gaian_void_core',
        pedestalItems: [
            'botania:gaia_ingot', 'botania:gaia_ingot',
            'minecraft:nether_star', 'minecraft:nether_star',
            'minecraft:ender_eye', 'minecraft:ender_eye',
            'minecraft:ender_eye', 'minecraft:ender_eye'
        ],
        output: 'kubejs:eldritch_codex',
        sourceCost: 2 * Source.SAGE
    })

    addEnchantingRecipe(event, {
        reagent: 'kubejs:gaian_annihilation_core',
        pedestalItems: [
            'botania:gaia_ingot', 'botania:gaia_ingot',
            'minecraft:nether_star', 'minecraft:nether_star',
            'mysticalagriculture:enderman_essence', 'mysticalagriculture:enderman_essence',
            'minecraft:ender_eye', 'minecraft:ender_eye'
        ],
        output: 'kubejs:obliteration_chronicle',
        sourceCost: 2 * Source.SAGE
    })

    addEnchantingRecipe(event, {
        reagent: 'gtceu:boundless_naquadrite_ingot',
        pedestalItems: [
            'botania:gaia_ingot', 'botania:gaia_ingot',
            'cataclysm_spellbooks:technomancy_rune', 'cataclysm_spellbooks:technomancy_rune',
            'cataclysm_spellbooks:technomancy_rune', 'cataclysm_spellbooks:technomancy_rune',
            '#gtceu:circuits/uv', '#gtceu:circuits/uv'
        ],
        output: 'kubejs:harbinger_codex',
        sourceCost: 2 * Source.SAGE
    })

    addEnchantingRecipe(event, {
        reagent: 'botania:elementium_ingot',
        pedestalItems: [
            'mysticalagriculture:gaia_spirit_essence', 'mysticalagriculture:gaia_spirit_essence',
            'mysticalagriculture:gaia_spirit_essence', 'mysticalagriculture:gaia_spirit_essence',
            'gtceu:terrasteel_plate', 'gtceu:terrasteel_plate',
            '#kubejs:fire_essences', '#kubejs:air_essences'
        ],
        output: 'botania:life_essence',
        sourceCost: Source.SAGE
    })

    addTerraPlateRecipe(event, {
        result: { item: 'botania:gaia_ingot' },
        mana: 8 * Mana.PROPHET,
        ingredients: [
            { item: 'kubejs:boundless_gaia_spirit_ingot' },
            { item: 'botania:terrasteel_block' },
            { item: 'botania:terrasteel_block' }
        ]
    })

    addImbuementRecipe(event, {
        input: 'ars_nouveau:wilden_tribute',
        output: { item: 'ars_nouveau:wilden_tribute', count: 2 },
        source: 2 * Source.SAGE,
        pedestalItems: [
            'ars_nouveau:wilden_horn',
            'ars_nouveau:wilden_horn',
            'ars_nouveau:wilden_spike',
            'ars_nouveau:wilden_spike',
            'botania:gaia_ingot',
            'botania:gaia_ingot'
        ]
    })

    addImbuementRecipe(event, {
        input: '4x gtceu:rubber_dust',
        output: 'kubejs:primal_latex_billet',
        source: Source.SAGE,
        pedestalItems: [
            'mysticalagriculture:fire_essence',
            'mysticalagriculture:water_essence',
            'mysticalagriculture:earth_essence',
            'mysticalagriculture:air_essence',
            'ars_nouveau:drygmy_shard',
            'ars_nouveau:drygmy_shard'
        ]
    })

    event.recipes.gtceu.mixer('abstract_elastomer_compound_mix')
        .itemInputs(
            '1x kubejs:primal_latex_billet',
            '4x ars_nouveau:source_gem',
            '1x ars_nouveau:wilden_horn'
        )
        .inputFluids(Fluid.of('starbunclemania:source_fluid', Source.SAGE))
        .itemOutputs('1x kubejs:elemental_latex_compound')
        .duration(400)
        .EUt(GTValues.VA[GTValues.UV])

    addEnchantingRecipe(event, {
        reagent: 'kubejs:elemental_latex_compound',
        pedestalItems: [
            'botania:gaia_ingot', 'botania:gaia_ingot',
            'botania:gaia_ingot', 'botania:gaia_ingot',
            'ars_nouveau:wilden_tribute',
            'ars_nouveau:wilden_tribute',
            'gtceu:abstract_metal_ingot',
            'gtceu:abstract_metal_ingot'
        ],
        output: 'gtceu:abstract_elastomer_ingot',
        sourceCost: Source.SAGE
    })
})
