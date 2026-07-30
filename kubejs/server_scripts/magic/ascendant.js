ServerEvents.recipes(event => {

    addAlchemyTableRecipe(event, {
        output: 'kubejs:stabilized_chaos_crystal',
        input: [
            'draconicevolution:chaos_shard',
            'kubejs:argentware_processor_supercomputer',
            'kubejs:argentware_processor_supercomputer',
            'draconicevolution:chaotic_core',
            'draconicevolution:chaotic_core',
            'botania:gaia_ingot',
            'botania:gaia_ingot',
            'kubejs:dragon_heart_crystal',
            'draconicevolution:awakened_draconium_ingot'
        ],
        syphon: 2 * LP.ASCENDANT
    })

    addAlchemyTableRecipe(event, {
        output: 'kubejs:chaotic_sanguinary',
        input: [
            'kubejs:draconic_sanguinary',
            'kubejs:stabilized_chaos_crystal',
            'kubejs:stabilized_chaos_crystal',
            'kubejs:wraithbound_matrix',
            'draconicevolution:chaotic_core',
            'kubejs:wraith_wizard_brain',
            'botania:gaia_ingot',
            'kubejs:wraith_motive_core',
            'gtceu:chaos_crystal_dust'
        ],
        syphon: 2 * LP.ASCENDANT
    })

    addAlchemyTableRecipe(event, {
        output: 'kubejs:shattered_sanctum',
        input: [
            'kubejs:draconic_sanctum',
            'kubejs:stabilized_chaos_crystal',
            'kubejs:stabilized_chaos_crystal',
            'kubejs:wraithbound_matrix',
            'draconicevolution:chaotic_core',
            'kubejs:wraith_channeling_vessel',
            'botania:gaia_ingot',
            'kubejs:wraith_ward_lattice',
            'gtceu:chaos_crystal_dust'
        ],
        syphon: 2 * LP.ASCENDANT
    })

    addAlchemyTableRecipe(event, {
        output: 'kubejs:codex_of_entropy',
        input: [
            'kubejs:dracontine_codex',
            'kubejs:stabilized_chaos_crystal',
            'kubejs:stabilized_chaos_crystal',
            'kubejs:wraithbound_matrix',
            'draconicevolution:chaotic_core',
            'kubejs:wraith_wizard_brain',
            'botania:gaia_ingot',
            'kubejs:wraith_ward_lattice',
            'gtceu:chaos_crystal_dust'
        ],
        syphon: 2 * LP.ASCENDANT
    })

    addAlchemyTableRecipe(event, {
        output: 'kubejs:chronicle_of_unraveling',
        input: [
            'kubejs:chronicle_of_dominion',
            'kubejs:stabilized_chaos_crystal',
            'kubejs:stabilized_chaos_crystal',
            'kubejs:wraithbound_matrix',
            'draconicevolution:chaotic_core',
            'kubejs:wraith_motive_core',
            'botania:gaia_ingot',
            'kubejs:wraith_channeling_vessel',
            'gtceu:chaos_crystal_dust'
        ],
        syphon: 2 * LP.ASCENDANT
    })

    addAlchemyTableRecipe(event, {
        output: 'kubejs:ascendant_initiation_core',
        input: [
            'kubejs:stabilized_chaos_crystal',
            'kubejs:chaotic_sanguinary',
            'kubejs:shattered_sanctum',
            'kubejs:codex_of_entropy',
            'kubejs:chronicle_of_unraveling',
            'kubejs:wraithbound_matrix',
            'kubejs:wraith_wizard_brain',
            'kubejs:wraith_channeling_vessel',
            'botania:gaia_ingot'
        ],
        syphon: 2 * LP.ASCENDANT
    })

    // --- Microcrafting: Ascendant circuit + components ---
    // Circuit built through 2 real handlers: Alchemy Table -> Occultism Ritual (marid tier, same
    // tier sage.js's empyrean_core ritual uses). Anchored on Stabilized Chaos Crystal and the
    // wraithware bridge item, per design spec.
    addAlchemyTableRecipe(event, {
        output: 'kubejs:wraithbound_matrix_core',
        input: ['kubejs:stabilized_chaos_crystal', 'kubejs:wraithware_processor_mainframe', 'occultism:otherworld_essence'],
        syphon: 2 * LP.ASCENDANT,
        ticks: 200,
        upgradeLevel: 4
    })

    addOccultismRitual(event, {
        name: 'wraithbound_matrix',
        tier: 'marid',
        output: 'kubejs:wraithbound_matrix',
        duration: 200,
        ingredients: [
            { item: 'kubejs:wraithbound_matrix_core' },
            { item: 'occultism:soul_shard' },
            { item: 'occultism:soul_shard' },
            { item: 'occultism:spirit_attuned_gem' },
            { item: 'occultism:soul_gem' }
        ]
    })

    // Wizard Brain: Malum Spirit Infusion (3rd distinct handler for this tier's item set). Spirit
    // Infusion is a strict 1-input+spirits transform, so this one component is not
    // stabilized_chaos_crystal-anchored -- pure Occultism/Malum.
    addSpiritInfusion(event, {
        input: { item: 'occultism:spirit_attuned_crystal', count: 4 },
        output: 'kubejs:wraith_wizard_brain',
        spirits: [{ type: 'eldritch', count: 2 }]
    })

    addComponentRecipe(event, 'kubejs:wraith_motive_core', [
        'kubejs:stabilized_chaos_crystal', 'draconicevolution:chaotic_core', 'occultism:afrit_essence'
    ])
    addComponentRecipe(event, 'kubejs:wraith_channeling_vessel', [
        'kubejs:stabilized_chaos_crystal', 'occultism:otherworld_essence', 'occultism:soul_shard'
    ])
    addComponentRecipe(event, 'kubejs:wraith_ward_lattice', [
        'kubejs:stabilized_chaos_crystal', 'occultism:spirit_attuned_gem', 'draconicevolution:chaotic_core'
    ])
})
