ServerEvents.recipes(event => {

    addAlchemyTableRecipe(event, {
        output: 'kubejs:stabilized_chaos_crystal',
        input: [
            'draconicevolution:chaos_shard',
            'kubejs:draconic_processor_supercomputer',
            'kubejs:draconic_processor_supercomputer',
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
            'draconicevolution:chaotic_core',
            'draconicevolution:chaotic_core',
            'botania:gaia_ingot',
            'botania:gaia_ingot',
            'gtceu:chaos_crystal_dust',
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
            'draconicevolution:chaotic_core',
            'draconicevolution:chaotic_core',
            'botania:gaia_ingot',
            'botania:gaia_ingot',
            'gtceu:chaos_crystal_dust',
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
            'draconicevolution:chaotic_core',
            'draconicevolution:chaotic_core',
            'botania:gaia_ingot',
            'botania:gaia_ingot',
            'gtceu:chaos_crystal_dust',
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
            'draconicevolution:chaotic_core',
            'draconicevolution:chaotic_core',
            'botania:gaia_ingot',
            'botania:gaia_ingot',
            'gtceu:chaos_crystal_dust',
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
            'draconicevolution:chaotic_core',
            'draconicevolution:chaotic_core',
            'botania:gaia_ingot',
            'botania:gaia_ingot'
        ],
        syphon: 2 * LP.ASCENDANT
    })

})
