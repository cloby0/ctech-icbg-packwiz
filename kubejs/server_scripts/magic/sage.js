ServerEvents.recipes(event => {
    event.remove({ id: 'mysticalagradditions:essence/gaia_spirit' })

    addRunicAltarRecipe(event, {
        output: { item: 'kubejs:vengeful_gaia_spirit' },
        mana: 8000,
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
        source: 20000,
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
        sourceCost: 20000
    })

    // Gaian Resonance Cores — each diverges from gaia_ingot into a spellbook school
    addEnchantingRecipe(event, {
        reagent: 'botania:life_essence',
        pedestalItems: [
            'botania:gaia_ingot', 'irons_spellbooks:blood_vial', 'irons_spellbooks:blood_vial',
            'irons_spellbooks:blood_vial', 'irons_spellbooks:blood_vial',
            'irons_spellbooks:blood_rune', 'irons_spellbooks:blood_rune', 'minecraft:netherite_ingot'
        ],
        output: 'kubejs:gaian_blood_core',
        sourceCost: 25000
    })

    addEnchantingRecipe(event, {
        reagent: 'botania:life_essence',
        pedestalItems: [
            'botania:gaia_ingot', 'irons_spellbooks:divine_pearl', 'irons_spellbooks:divine_pearl',
            'irons_spellbooks:holy_rune', 'irons_spellbooks:holy_rune',
            'kubejs:sacred_ambrosium_shard', 'kubejs:sacred_ambrosium_shard'
        ],
        output: 'kubejs:gaian_holy_core',
        sourceCost: 25000
    })

    addEnchantingRecipe(event, {
        reagent: 'botania:life_essence',
        pedestalItems: [
            'botania:gaia_ingot', 'mysticalagriculture:enderman_essence', 'mysticalagriculture:enderman_essence',
            'irons_spellbooks:ender_rune', 'irons_spellbooks:ender_rune', 'minecraft:nether_star'
        ],
        output: 'kubejs:gaian_void_core',
        sourceCost: 25000
    })

    // consumes annihilators_protocol to upgrade into the escalated ender-school book
    addEnchantingRecipe(event, {
        reagent: 'botania:life_essence',
        pedestalItems: [
            'botania:gaia_ingot', 'legendary_spellbooks:annihilators_protocol',
            'irons_spellbooks:ender_rune', 'irons_spellbooks:ender_rune',
            'irons_spellbooks:ender_rune', 'irons_spellbooks:ender_rune',
            'minecraft:nether_star', 'minecraft:nether_star'
        ],
        output: 'kubejs:gaian_annihilation_core',
        sourceCost: 30000
    })

    // Sage spellbook recipes — core consumed as reagent
    addEnchantingRecipe(event, {
        reagent: 'kubejs:gaian_blood_core',
        pedestalItems: [
            'botania:gaia_ingot', 'botania:gaia_ingot',
            'irons_spellbooks:blood_vial', 'irons_spellbooks:blood_vial',
            'irons_spellbooks:blood_vial', 'irons_spellbooks:blood_vial',
            'minecraft:netherite_ingot', 'minecraft:netherite_ingot'
        ],
        output: 'kubejs:blood_grimoire',
        sourceCost: 50000
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
        sourceCost: 50000
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
        sourceCost: 50000
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
        sourceCost: 50000
    })

    // Harbinger Codex — UV technomancy book, requires boundless_naquadrite (gaia_spirit + naquadria) + UV circuits
    addEnchantingRecipe(event, {
        reagent: 'gtceu:boundless_naquadrite_ingot',
        pedestalItems: [
            'botania:gaia_ingot', 'botania:gaia_ingot',
            'cataclysm_spellbooks:technomancy_rune', 'cataclysm_spellbooks:technomancy_rune',
            'cataclysm_spellbooks:technomancy_rune', 'cataclysm_spellbooks:technomancy_rune',
            '#gtceu:circuits/uv', '#gtceu:circuits/uv'
        ],
        output: 'kubejs:harbinger_codex',
        sourceCost: 55000
    })

    // renewable life_essence after first Guardian of Gaia kill
    // gaia_spirit_essence (farmed via MA once you have first gaia_ingot) distilled through elementium
    addEnchantingRecipe(event, {
        reagent: 'botania:elementium_ingot',
        pedestalItems: [
            'mysticalagriculture:gaia_spirit_essence', 'mysticalagriculture:gaia_spirit_essence',
            'mysticalagriculture:gaia_spirit_essence', 'mysticalagriculture:gaia_spirit_essence',
            'gtceu:terrasteel_plate', 'gtceu:terrasteel_plate',
            '#kubejs:fire_essences', '#kubejs:air_essences'
        ],
        output: 'botania:life_essence',
        sourceCost: 40000
    })

    addTerraPlateRecipe(event, {
        result: { item: 'botania:gaia_ingot' },
        mana: 1000000,
        ingredients: [
            { item: 'kubejs:boundless_gaia_spirit_ingot' },
            { item: 'botania:terrasteel_block' },
            { item: 'botania:terrasteel_block' }
        ]
    })

    // renewable wilden_tribute — wilden essence (horn + spike x2 each) + Gaia-tier power invoke another tribute
    // gaia_ingot gates this at Sage tier; in the factory these are notConsumable (setup items only)
    addImbuementRecipe(event, {
        input: 'ars_nouveau:wilden_tribute',
        output: { item: 'ars_nouveau:wilden_tribute', count: 2 },
        source: 50000,
        pedestalItems: [
            'ars_nouveau:wilden_horn',
            'ars_nouveau:wilden_horn',
            'ars_nouveau:wilden_spike',
            'ars_nouveau:wilden_spike',
            'botania:gaia_ingot',
            'botania:gaia_ingot'
        ]
    })

    // abstract_elastomer chain — elemental imbuement → UV mixer → Gaia binding
    // Step 1: elemental essences + drygmy shards imbue GT rubber dust with living magic
    // rubber_dust grounds the chain in its GT lineage — this is rubber, transcended
    addImbuementRecipe(event, {
        input: '4x gtceu:rubber_dust',
        output: 'kubejs:primal_latex_billet',
        source: 25000,
        pedestalItems: [
            'mysticalagriculture:fire_essence',
            'mysticalagriculture:water_essence',
            'mysticalagriculture:earth_essence',
            'mysticalagriculture:air_essence',
            'ars_nouveau:drygmy_shard',
            'ars_nouveau:drygmy_shard'
        ]
    })

    // Step 2 (tech): UV Mixer — source fluid + gems + wilden horn catalyze billet into elemental compound
    // requires liquid source, not just crystallized gems
    event.recipes.gtceu.mixer('abstract_elastomer_compound_mix')
        .itemInputs(
            '1x kubejs:primal_latex_billet',
            '4x ars_nouveau:source_gem',
            '1x ars_nouveau:wilden_horn'
        )
        .inputFluids(Fluid.of('starbunclemania:source_fluid', 2000))
        .itemOutputs('1x kubejs:elemental_latex_compound')
        .duration(400)
        .EUt(GTValues.VA[GTValues.UV])

    // Step 3: Gaia binding — abstract_metal ingots anchor the sibling concept; platonic rubber needs platonic metal
    // Melt abstract_elastomer_ingot in arc furnace or fluid extractor to get the fluid
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
        sourceCost: 40000
    })
})
