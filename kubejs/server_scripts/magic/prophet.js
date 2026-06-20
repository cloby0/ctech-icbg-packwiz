ServerEvents.recipes(event => {

    // Dragon Heart Crystal — hard UHV gate
    // Requires: DE dragon fight (dragon_heart) + Sage+ chain (all 4 gaian cores + boundless_gaia_spirit_ingot)
    // This is the Prophet initiation item; gates ALL Prophet and UHV content
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
        sourceCost: 70000
    })

    // Draconic Boule — extends the gaian neutronium boule chain into UHV
    // Output: 384 wafers (cut in precision laser engraver, see uhvAndDraconic.js)
    // Requires: existing UV boule + dragon_heart_crystal + awakened draconium
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
        sourceCost: 60000
    })

    // Prophet spellbook upgrades — Sage tier → Prophet tier
    // Each consumes the corresponding Sage book + Dragon Heart Crystal + awakened draconium
    // Sage books gate their Prophet equivalents; gaia_ingot confirms Sage completion

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
        sourceCost: 65000
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
        sourceCost: 65000
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
        sourceCost: 65000
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
        sourceCost: 65000
    })
})
