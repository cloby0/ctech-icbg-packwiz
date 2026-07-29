ServerEvents.recipes(event => {


    event.shaped(Item.of('morerelics:moodworm', 1), [
        'WCW', 'BDB', 'WBW'
    ], { 'W': 'minecraft:white_wool', 'B': 'minecraft:string', 'D': 'nameless_trinkets:dubious_dust', 'C': '#forge:tools/wire_cutters' }).damageIngredient(Ingredient.of('#forge:tools/wire_cutters'))

    event.shaped(Item.of('morerelics:axolotl_cream', 1), [
        'GMG', 'KDK', 'GKG'
    ], { 'G': 'minecraft:glass_bottle', 'K': 'minecraft:kelp', 'D': 'nameless_trinkets:dubious_dust', 'M': '#forge:tools/mortars' }).damageIngredient(Ingredient.of('#forge:tools/mortars'))

    event.shaped(Item.of('morerelics:eject_button', 1), [
        'ZIR', 'IDI', 'RIR'
    ], { 'R': 'minecraft:redstone', 'I': 'minecraft:iron_ingot', 'D': 'nameless_trinkets:dubious_dust', 'Z': '#forge:tools/screwdrivers' }).damageIngredient(Ingredient.of('#forge:tools/screwdrivers'))

    event.shaped(Item.of('morerelics:depleted_spool', 1), [
        'ICI', 'SDS', 'ISI'
    ], { 'I': 'minecraft:iron_ingot', 'S': 'minecraft:string', 'D': 'nameless_trinkets:dubious_dust', 'C': '#forge:tools/wire_cutters' }).damageIngredient(Ingredient.of('#forge:tools/wire_cutters'))

    event.shaped(Item.of('morerelics:slumbering_amulet', 1), [
        'FGG', 'GDG', 'PPP'
    ], { 'G': 'minecraft:gold_ingot', 'D': 'nameless_trinkets:dubious_dust', 'P': 'minecraft:poppy', 'F': '#forge:tools/files' }).damageIngredient(Ingredient.of('#forge:tools/files'))

    event.shaped(Item.of('morerelics:whispering_amulett', 1), [
        'ZGF', 'GDG', 'FGF'
    ], { 'F': 'minecraft:feather', 'G': 'minecraft:gold_ingot', 'D': 'nameless_trinkets:dubious_dust', 'Z': '#forge:tools/files' }).damageIngredient(Ingredient.of('#forge:tools/files'))

    addEnchantingRecipe(event, {
        reagent: 'nameless_trinkets:glowing_dust',
        pedestalItems: ['minecraft:golden_apple', 'minecraft:golden_apple', 'minecraft:obsidian', 'minecraft:obsidian', 'gtceu:luminessence_dust'],
        output: 'morerelics:guts_orb',
        sourceCost: Source.SORCERER
    })

    addEnchantingRecipe(event, {
        reagent: 'nameless_trinkets:glowing_dust',
        pedestalItems: ['minecraft:amethyst_shard', 'minecraft:amethyst_shard', 'minecraft:gold_ingot', 'minecraft:gold_ingot', 'gtceu:luminessence_dust'],
        output: 'morerelics:opal_necklace',
        sourceCost: Source.SORCERER
    })

    addEnchantingRecipe(event, {
        reagent: 'nameless_trinkets:glowing_dust',
        pedestalItems: ['create:iron_sheet', 'minecraft:glass', 'minecraft:glass', 'minecraft:redstone', 'minecraft:redstone', 'gtceu:luminessence_dust'],
        output: 'morerelics:bionic_eye',
        sourceCost: Source.SORCERER
    })

    addEnchantingRecipe(event, {
        reagent: 'nameless_trinkets:glowing_dust',
        pedestalItems: ['minecraft:iron_ingot', 'minecraft:iron_ingot', 'minecraft:slime_ball', 'minecraft:slime_ball', 'gtceu:luminessence_dust'],
        output: 'morerelics:biojoint',
        sourceCost: Source.SORCERER
    })

    addEnchantingRecipe(event, {
        reagent: 'nameless_trinkets:glowing_dust',
        pedestalItems: ['minecraft:iron_ingot', 'minecraft:iron_ingot', 'minecraft:bone', 'minecraft:bone', 'gtceu:luminessence_dust'],
        output: 'morerelics:vertebrax',
        sourceCost: Source.SORCERER
    })

    addEnchantingRecipe(event, {
        reagent: 'nameless_trinkets:glowing_dust',
        pedestalItems: ['minecraft:iron_ingot', 'minecraft:iron_ingot', 'minecraft:flint', 'minecraft:flint', 'gtceu:luminessence_dust'],
        output: 'morerelics:sentient_rust',
        sourceCost: Source.SORCERER
    })

    addEnchantingRecipe(event, {
        reagent: 'nameless_trinkets:glowing_dust',
        pedestalItems: ['morerelics:depleted_spool', 'minecraft:string', 'minecraft:string', 'minecraft:iron_ingot', 'gtceu:luminessence_dust'],
        output: 'morerelics:weavers_spool',
        sourceCost: Source.SORCERER
    })

    addEnchantingRecipe(event, {
        reagent: 'nameless_trinkets:ultimate_dust',
        pedestalItems: ['minecraft:shield', 'minecraft:shield', 'minecraft:iron_block', 'minecraft:iron_block', 'gtceu:holy_silver_dust', 'gtceu:holy_silver_dust'],
        output: 'morerelics:shieldweave_cape',
        sourceCost: Source.ALCHEMIST
    })

    addEnchantingRecipe(event, {
        reagent: 'nameless_trinkets:ultimate_dust',
        pedestalItems: ['minecraft:magma_cream', 'minecraft:magma_cream', 'minecraft:ice', 'minecraft:ice', 'gtceu:holy_silver_dust', 'gtceu:holy_silver_dust'],
        output: 'morerelics:thermoseismic_heart',
        sourceCost: Source.ALCHEMIST
    })

    addEnchantingRecipe(event, {
        reagent: 'nameless_trinkets:ultimate_dust',
        pedestalItems: ['create:golden_sheet', 'minecraft:ender_pearl', 'minecraft:ender_pearl', 'minecraft:obsidian', 'gtceu:holy_silver_dust', 'gtceu:holy_silver_dust'],
        output: 'morerelics:gravitum_glove',
        sourceCost: Source.ALCHEMIST
    })

    addEnchantingRecipe(event, {
        reagent: 'nameless_trinkets:ultimate_dust',
        pedestalItems: ['minecraft:leather_boots', 'minecraft:ender_pearl', 'minecraft:ender_pearl', 'minecraft:obsidian', 'gtceu:holy_silver_dust', 'gtceu:holy_silver_dust'],
        output: 'morerelics:gravitum_strider',
        sourceCost: Source.ALCHEMIST
    })

    addEnchantingRecipe(event, {
        reagent: 'nameless_trinkets:ultimate_dust',
        pedestalItems: ['create:golden_sheet', 'minecraft:iron_block', 'minecraft:iron_block', 'minecraft:netherite_scrap', 'gtceu:holy_silver_dust', 'gtceu:holy_silver_dust'],
        output: 'morerelics:mass_gauntlet',
        sourceCost: Source.ALCHEMIST
    })

    addEnchantingRecipe(event, {
        reagent: 'nameless_trinkets:ultimate_dust',
        pedestalItems: ['minecraft:obsidian', 'minecraft:wither_skeleton_skull', 'minecraft:obsidian', 'minecraft:iron_block', 'gtceu:holy_silver_dust', 'gtceu:holy_silver_dust'],
        output: 'morerelics:tyrant_mask',
        sourceCost: Source.ALCHEMIST
    })

    addEnchantingRecipe(event, {
        reagent: 'nameless_trinkets:ultimate_dust',
        pedestalItems: ['minecraft:amethyst_shard', 'minecraft:rabbit_foot', 'minecraft:amethyst_shard', 'minecraft:rabbit_foot', 'gtceu:holy_silver_dust'],
        output: 'morerelics:whims_of_fate',
        sourceCost: Source.ALCHEMIST
    })

    addEnchantingRecipe(event, {
        reagent: 'nameless_trinkets:ultimate_dust',
        pedestalItems: ['minecraft:amethyst_shard', 'minecraft:amethyst_shard', 'minecraft:crying_obsidian', 'minecraft:crying_obsidian', 'gtceu:holy_silver_dust', 'gtceu:holy_silver_dust'],
        output: 'morerelics:converging_orb',
        sourceCost: Source.ALCHEMIST
    })

    addEnchantingRecipe(event, {
        reagent: 'nameless_trinkets:ultimate_dust',
        pedestalItems: ['minecraft:golden_apple', 'minecraft:chorus_fruit', 'minecraft:golden_apple', 'minecraft:chorus_fruit', 'gtceu:holy_silver_dust', 'gtceu:holy_silver_dust'],
        output: 'morerelics:epoch_apple',
        sourceCost: Source.ALCHEMIST
    })

    addEnchantingRecipe(event, {
        reagent: 'nameless_trinkets:ultimate_dust',
        pedestalItems: ['gtceu:empyrean_ichor_ingot', 'botania:gaia_ingot', 'botania:terrasteel_ingot', 'botania:terrasteel_ingot', 'minecraft:nether_star', '#forge:ingots/elementium', 'kubejs:empyrean_ward_lattice'],
        output: 'morerelics:crown_of_the_legend',
        sourceCost: Source.SAGE
    })

    addEnchantingRecipe(event, {
        reagent: 'nameless_trinkets:ultimate_dust',
        pedestalItems: ['gtceu:empyrean_ichor_ingot', 'botania:gaia_ingot', 'botania:gaia_ingot', 'minecraft:nether_star', 'minecraft:nether_star', 'minecraft:netherite_block', 'kubejs:empyrean_wizard_brain'],
        output: 'morerelics:king_crimson',
        sourceCost: Source.SAGE
    })

    addEnchantingRecipe(event, {
        reagent: 'nameless_trinkets:ultimate_dust',
        pedestalItems: ['gtceu:empyrean_ichor_ingot', 'botania:gaia_ingot', 'botania:gaia_ingot', 'minecraft:nether_star', 'minecraft:nether_star', 'minecraft:elytra', 'botania:elementium_block', 'kubejs:empyrean_motive_core'],
        output: 'morerelics:made_in_heaven',
        sourceCost: Source.SAGE
    })

    addEnchantingRecipe(event, {
        reagent: 'nameless_trinkets:ultimate_dust',
        pedestalItems: ['gtceu:empyrean_ichor_ingot', 'botania:gaia_ingot', 'botania:gaia_ingot', 'minecraft:nether_star', 'minecraft:nether_star', 'minecraft:netherite_block', 'botania:elementium_block', 'kubejs:empyrean_wizard_brain'],
        output: 'morerelics:wonder_of_u',
        sourceCost: Source.SAGE
    })

})
