ServerEvents.recipes(event => {

    addEnchantingRecipe(event, {
        reagent: 'draconicevolution:chaos_shard',
        pedestalItems: [
            'kubejs:draconic_processor_supercomputer',
            'kubejs:draconic_processor_supercomputer',
            'draconicevolution:chaotic_core',
            'draconicevolution:chaotic_core',
            'botania:gaia_ingot',
            'botania:gaia_ingot',
            'kubejs:dragon_heart_crystal',
            'draconicevolution:awakened_draconium_ingot'
        ],
        output: 'kubejs:stabilized_chaos_crystal',
        sourceCost: 100000
    })


    addEnchantingRecipe(event, {
        reagent: 'kubejs:draconic_sanguinary',
        pedestalItems: [
            'kubejs:stabilized_chaos_crystal',
            'kubejs:stabilized_chaos_crystal',
            'draconicevolution:chaotic_core',
            'draconicevolution:chaotic_core',
            'botania:gaia_ingot',
            'botania:gaia_ingot',
            'gtceu:chaos_crystal_dust',
            'gtceu:chaos_crystal_dust'
        ],
        output: 'kubejs:chaotic_sanguinary',
        sourceCost: 90000
    })

    addEnchantingRecipe(event, {
        reagent: 'kubejs:draconic_sanctum',
        pedestalItems: [
            'kubejs:stabilized_chaos_crystal',
            'kubejs:stabilized_chaos_crystal',
            'draconicevolution:chaotic_core',
            'draconicevolution:chaotic_core',
            'botania:gaia_ingot',
            'botania:gaia_ingot',
            'gtceu:chaos_crystal_dust',
            'gtceu:chaos_crystal_dust'
        ],
        output: 'kubejs:shattered_sanctum',
        sourceCost: 90000
    })

    addEnchantingRecipe(event, {
        reagent: 'kubejs:dracontine_codex',
        pedestalItems: [
            'kubejs:stabilized_chaos_crystal',
            'kubejs:stabilized_chaos_crystal',
            'draconicevolution:chaotic_core',
            'draconicevolution:chaotic_core',
            'botania:gaia_ingot',
            'botania:gaia_ingot',
            'gtceu:chaos_crystal_dust',
            'gtceu:chaos_crystal_dust'
        ],
        output: 'kubejs:codex_of_entropy',
        sourceCost: 90000
    })

    addEnchantingRecipe(event, {
        reagent: 'kubejs:chronicle_of_dominion',
        pedestalItems: [
            'kubejs:stabilized_chaos_crystal',
            'kubejs:stabilized_chaos_crystal',
            'draconicevolution:chaotic_core',
            'draconicevolution:chaotic_core',
            'botania:gaia_ingot',
            'botania:gaia_ingot',
            'gtceu:chaos_crystal_dust',
            'gtceu:chaos_crystal_dust'
        ],
        output: 'kubejs:chronicle_of_unraveling',
        sourceCost: 90000
    })

    addEnchantingRecipe(event, {
        reagent: 'kubejs:stabilized_chaos_crystal',
        pedestalItems: [
            'kubejs:chaotic_sanguinary',
            'kubejs:shattered_sanctum',
            'kubejs:codex_of_entropy',
            'kubejs:chronicle_of_unraveling',
            'draconicevolution:chaotic_core',
            'draconicevolution:chaotic_core',
            'botania:gaia_ingot',
            'botania:gaia_ingot'
        ],
        output: 'kubejs:ascendant_initiation_core',
        sourceCost: 100000
    })

})
