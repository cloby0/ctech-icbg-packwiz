ServerEvents.recipes(event => {

    addEnchantingRecipe(event, {
        reagent: 'draconicevolution:dragon_heart',
        pedestalItems: [
            'kubejs:gaian_blood_core',
            'kubejs:gaian_holy_core',
            'kubejs:gaian_void_core',
            'kubejs:gaian_annihilation_core',
            'kubejs:boundless_gaia_spirit_ingot',
            'kubejs:boundless_gaia_spirit_ingot',
            'draconicevolution:awakened_draconium_ingot',
            'draconicevolution:wyvern_core'
        ],
        output: 'kubejs:dragon_heart_crystal',
        sourceCost: Source.PROPHET
    })

    addEnchantingRecipe(event, {
        reagent: 'kubejs:gaian_neutronium_boule',
        pedestalItems: [
            'kubejs:dragon_heart_crystal',
            'draconicevolution:awakened_draconium_ingot',
            'draconicevolution:awakened_draconium_ingot',
            'draconicevolution:wyvern_core',
            'botania:gaia_ingot',
            'botania:gaia_ingot',
            'gtceu:neutronium_ingot',
            'gtceu:neutronium_ingot'
        ],
        output: 'kubejs:draconic_boule',
        sourceCost: Source.PROPHET
    })


    addEnchantingRecipe(event, {
        reagent: 'kubejs:blood_grimoire',
        pedestalItems: [
            'kubejs:dragon_heart_crystal',
            'kubejs:dragon_heart_crystal',
            'draconicevolution:awakened_draconium_ingot',
            'draconicevolution:awakened_draconium_ingot',
            'draconicevolution:wyvern_core',
            'botania:gaia_ingot',
            'botania:gaia_ingot',
            'gtceu:gaia_spirit_dust'
        ],
        output: 'kubejs:draconic_sanguinary',
        sourceCost: Source.PROPHET
    })

    addEnchantingRecipe(event, {
        reagent: 'kubejs:radiant_sanctum',
        pedestalItems: [
            'kubejs:dragon_heart_crystal',
            'kubejs:dragon_heart_crystal',
            'draconicevolution:awakened_draconium_ingot',
            'draconicevolution:awakened_draconium_ingot',
            'draconicevolution:wyvern_core',
            'botania:gaia_ingot',
            'botania:gaia_ingot',
            'gtceu:gaia_spirit_dust'
        ],
        output: 'kubejs:draconic_sanctum',
        sourceCost: Source.PROPHET
    })

    addEnchantingRecipe(event, {
        reagent: 'kubejs:eldritch_codex',
        pedestalItems: [
            'kubejs:dragon_heart_crystal',
            'kubejs:dragon_heart_crystal',
            'draconicevolution:awakened_draconium_ingot',
            'draconicevolution:awakened_draconium_ingot',
            'draconicevolution:wyvern_core',
            'botania:gaia_ingot',
            'botania:gaia_ingot',
            'gtceu:gaia_spirit_dust'
        ],
        output: 'kubejs:dracontine_codex',
        sourceCost: Source.PROPHET
    })

    addEnchantingRecipe(event, {
        reagent: 'kubejs:obliteration_chronicle',
        pedestalItems: [
            'kubejs:dragon_heart_crystal',
            'kubejs:dragon_heart_crystal',
            'draconicevolution:awakened_draconium_ingot',
            'draconicevolution:awakened_draconium_ingot',
            'draconicevolution:wyvern_core',
            'botania:gaia_ingot',
            'botania:gaia_ingot',
            'gtceu:gaia_spirit_dust'
        ],
        output: 'kubejs:chronicle_of_dominion',
        sourceCost: Source.PROPHET
    })
})
