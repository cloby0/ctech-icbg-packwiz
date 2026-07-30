ServerEvents.recipes(event => {

    addAlchemyTableRecipe(event, {
        output: 'kubejs:dragon_heart_crystal',
        input: [
            'draconicevolution:dragon_heart',
            'kubejs:gaian_blood_core',
            'kubejs:gaian_holy_core',
            'kubejs:gaian_void_core',
            'kubejs:gaian_annihilation_core',
            'kubejs:boundless_gaia_spirit_ingot',
            'kubejs:boundless_gaia_spirit_ingot',
            'draconicevolution:awakened_draconium_ingot',
            'draconicevolution:wyvern_core'
        ],
        syphon: LP.PROPHET
    })

    addAlchemyTableRecipe(event, {
        output: 'kubejs:draconic_boule',
        input: [
            'kubejs:gaian_neutronium_boule',
            'kubejs:dragon_heart_crystal',
            'draconicevolution:awakened_draconium_ingot',
            'draconicevolution:awakened_draconium_ingot',
            'draconicevolution:wyvern_core',
            'botania:gaia_ingot',
            'botania:gaia_ingot',
            'gtceu:neutronium_ingot',
            'gtceu:neutronium_ingot'
        ],
        syphon: LP.PROPHET
    })

    addAlchemyTableRecipe(event, {
        output: 'kubejs:draconic_sanguinary',
        input: [
            'kubejs:blood_grimoire',
            'kubejs:dragon_heart_crystal',
            'kubejs:dragon_heart_crystal',
            'kubejs:argentbound_sigil',
            'draconicevolution:awakened_draconium_ingot',
            'kubejs:argent_wizard_brain',
            'kubejs:argent_motive_core',
            'botania:gaia_ingot',
            'gtceu:gaia_spirit_dust'
        ],
        syphon: LP.PROPHET
    })

    addAlchemyTableRecipe(event, {
        output: 'kubejs:draconic_sanctum',
        input: [
            'kubejs:radiant_sanctum',
            'kubejs:dragon_heart_crystal',
            'kubejs:dragon_heart_crystal',
            'kubejs:argentbound_sigil',
            'draconicevolution:awakened_draconium_ingot',
            'kubejs:argent_channeling_vessel',
            'kubejs:argent_ward_lattice',
            'botania:gaia_ingot',
            'gtceu:gaia_spirit_dust'
        ],
        syphon: LP.PROPHET
    })

    addAlchemyTableRecipe(event, {
        output: 'kubejs:dracontine_codex',
        input: [
            'kubejs:eldritch_codex',
            'kubejs:dragon_heart_crystal',
            'kubejs:dragon_heart_crystal',
            'kubejs:argentbound_sigil',
            'draconicevolution:awakened_draconium_ingot',
            'kubejs:argent_wizard_brain',
            'kubejs:argent_ward_lattice',
            'botania:gaia_ingot',
            'gtceu:gaia_spirit_dust'
        ],
        syphon: LP.PROPHET
    })

    addAlchemyTableRecipe(event, {
        output: 'kubejs:chronicle_of_dominion',
        input: [
            'kubejs:obliteration_chronicle',
            'kubejs:dragon_heart_crystal',
            'kubejs:dragon_heart_crystal',
            'kubejs:argentbound_sigil',
            'draconicevolution:awakened_draconium_ingot',
            'kubejs:argent_motive_core',
            'kubejs:argent_channeling_vessel',
            'botania:gaia_ingot',
            'gtceu:gaia_spirit_dust'
        ],
        syphon: LP.PROPHET
    })

    // --- Microcrafting: Prophet circuit + components ---
    // Circuit built through 2 real handlers: Alchemy Table -> Terra Plate. Anchored on Draconic
    // Boule (the tier's genuine capstone precursor) and the argentware bridge item, per design spec.
    addAlchemyTableRecipe(event, {
        output: 'kubejs:argentbound_sigil_blank',
        input: ['kubejs:draconic_boule', 'kubejs:argentware_processor_supercomputer', 'bloodmagic:ingot_hellforged'],
        syphon: LP.PROPHET,
        ticks: 200,
        upgradeLevel: 4
    })

    addTerraPlateRecipe(event, {
        result: 'kubejs:argentbound_sigil',
        mana: Mana.PROPHET,
        ingredients: ['kubejs:argentbound_sigil_blank', 'bloodmagic:basemonstersoul_vengeful']
    })

    // Wizard Brain: Blood Altar (3rd distinct handler for this tier's item set). Blood Altar is a
    // strict 1-input transform, so this one component is not draconic_boule-anchored -- pure LP.
    addBloodAltarRecipe(event, {
        input: { item: 'bloodmagic:basemonstersoul_steadfast', count: 4 },
        output: 'kubejs:argent_wizard_brain',
        syphon: LP.PROPHET,
        upgradeLevel: 4
    })

    addComponentRecipe(event, 'kubejs:argent_motive_core', [
        'kubejs:draconic_boule', 'draconicevolution:wyvern_core', 'bloodmagic:sand_hellforged'
    ])
    addComponentRecipe(event, 'kubejs:argent_channeling_vessel', [
        'kubejs:draconic_boule', 'bloodmagic:blankslate', 'gtceu:neutronium_ingot'
    ])
    addComponentRecipe(event, 'kubejs:argent_ward_lattice', [
        'kubejs:draconic_boule', 'bloodmagic:basemonstersoul_corrosive', 'botania:gaia_ingot'
    ])
})
