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

    addMnaManaweavingRecipe(event, {
        output: 'morerelics:guts_orb',
        items: ['nameless_trinkets:glowing_dust', 'minecraft:golden_apple', 'minecraft:golden_apple', 'minecraft:obsidian', 'minecraft:obsidian', 'gtceu:luminessence_dust'],
        patterns: ['mna:diamond', 'mna:knot'],
        tier: 2
    })

    addMnaManaweavingRecipe(event, {
        output: 'morerelics:opal_necklace',
        items: ['nameless_trinkets:glowing_dust', 'minecraft:amethyst_shard', 'minecraft:amethyst_shard', 'minecraft:gold_ingot', 'minecraft:gold_ingot', 'gtceu:luminessence_dust'],
        patterns: ['mna:diamond', 'mna:knot'],
        tier: 2
    })

    addMnaManaweavingRecipe(event, {
        output: 'morerelics:bionic_eye',
        items: ['nameless_trinkets:glowing_dust', 'create:iron_sheet', 'minecraft:glass', 'minecraft:glass', 'minecraft:redstone', 'minecraft:redstone', 'gtceu:luminessence_dust'],
        patterns: ['mna:diamond', 'mna:knot'],
        tier: 2
    })

    addMnaManaweavingRecipe(event, {
        output: 'morerelics:biojoint',
        items: ['nameless_trinkets:glowing_dust', 'minecraft:iron_ingot', 'minecraft:iron_ingot', 'minecraft:slime_ball', 'minecraft:slime_ball', 'gtceu:luminessence_dust'],
        patterns: ['mna:diamond', 'mna:knot'],
        tier: 2
    })

    addMnaManaweavingRecipe(event, {
        output: 'morerelics:vertebrax',
        items: ['nameless_trinkets:glowing_dust', 'minecraft:iron_ingot', 'minecraft:iron_ingot', 'minecraft:bone', 'minecraft:bone', 'gtceu:luminessence_dust'],
        patterns: ['mna:diamond', 'mna:knot'],
        tier: 2
    })

    addMnaManaweavingRecipe(event, {
        output: 'morerelics:sentient_rust',
        items: ['nameless_trinkets:glowing_dust', 'minecraft:iron_ingot', 'minecraft:iron_ingot', 'minecraft:flint', 'minecraft:flint', 'gtceu:luminessence_dust'],
        patterns: ['mna:diamond', 'mna:knot'],
        tier: 2
    })

    addMnaManaweavingRecipe(event, {
        output: 'morerelics:weavers_spool',
        items: ['nameless_trinkets:glowing_dust', 'morerelics:depleted_spool', 'minecraft:string', 'minecraft:string', 'minecraft:iron_ingot', 'gtceu:luminessence_dust'],
        patterns: ['mna:diamond', 'mna:knot'],
        tier: 2
    })

    addMnaManaweavingRecipe(event, {
        output: 'morerelics:shieldweave_cape',
        items: ['nameless_trinkets:ultimate_dust', 'minecraft:shield', 'minecraft:shield', 'minecraft:iron_block', 'minecraft:iron_block', 'gtceu:holy_silver_dust', 'gtceu:holy_silver_dust'],
        patterns: ['mna:split_triangle', 'mna:knot2'],
        tier: 3
    })

    addMnaManaweavingRecipe(event, {
        output: 'morerelics:thermoseismic_heart',
        items: ['nameless_trinkets:ultimate_dust', 'minecraft:magma_cream', 'minecraft:magma_cream', 'minecraft:ice', 'minecraft:ice', 'gtceu:holy_silver_dust', 'gtceu:holy_silver_dust'],
        patterns: ['mna:split_triangle', 'mna:knot2'],
        tier: 3
    })

    addMnaManaweavingRecipe(event, {
        output: 'morerelics:gravitum_glove',
        items: ['nameless_trinkets:ultimate_dust', 'create:golden_sheet', 'minecraft:ender_pearl', 'minecraft:ender_pearl', 'minecraft:obsidian', 'gtceu:holy_silver_dust', 'gtceu:holy_silver_dust'],
        patterns: ['mna:split_triangle', 'mna:knot2'],
        tier: 3
    })

    addMnaManaweavingRecipe(event, {
        output: 'morerelics:gravitum_strider',
        items: ['nameless_trinkets:ultimate_dust', 'minecraft:leather_boots', 'minecraft:ender_pearl', 'minecraft:ender_pearl', 'minecraft:obsidian', 'gtceu:holy_silver_dust', 'gtceu:holy_silver_dust'],
        patterns: ['mna:split_triangle', 'mna:knot2'],
        tier: 3
    })

    addMnaManaweavingRecipe(event, {
        output: 'morerelics:mass_gauntlet',
        items: ['nameless_trinkets:ultimate_dust', 'create:golden_sheet', 'minecraft:iron_block', 'minecraft:iron_block', 'minecraft:netherite_scrap', 'gtceu:holy_silver_dust', 'gtceu:holy_silver_dust'],
        patterns: ['mna:split_triangle', 'mna:knot2'],
        tier: 3
    })

    addMnaManaweavingRecipe(event, {
        output: 'morerelics:tyrant_mask',
        items: ['nameless_trinkets:ultimate_dust', 'minecraft:obsidian', 'minecraft:wither_skeleton_skull', 'minecraft:obsidian', 'minecraft:iron_block', 'gtceu:holy_silver_dust', 'gtceu:holy_silver_dust'],
        patterns: ['mna:split_triangle', 'mna:knot2'],
        tier: 3
    })

    addMnaManaweavingRecipe(event, {
        output: 'morerelics:whims_of_fate',
        items: ['nameless_trinkets:ultimate_dust', 'minecraft:amethyst_shard', 'minecraft:rabbit_foot', 'minecraft:amethyst_shard', 'minecraft:rabbit_foot', 'gtceu:holy_silver_dust'],
        patterns: ['mna:split_triangle', 'mna:knot2'],
        tier: 3
    })

    addMnaManaweavingRecipe(event, {
        output: 'morerelics:converging_orb',
        items: ['nameless_trinkets:ultimate_dust', 'minecraft:amethyst_shard', 'minecraft:amethyst_shard', 'minecraft:crying_obsidian', 'minecraft:crying_obsidian', 'gtceu:holy_silver_dust', 'gtceu:holy_silver_dust'],
        patterns: ['mna:split_triangle', 'mna:knot2'],
        tier: 3
    })

    addMnaManaweavingRecipe(event, {
        output: 'morerelics:epoch_apple',
        items: ['nameless_trinkets:ultimate_dust', 'minecraft:golden_apple', 'minecraft:chorus_fruit', 'minecraft:golden_apple', 'minecraft:chorus_fruit', 'gtceu:holy_silver_dust', 'gtceu:holy_silver_dust'],
        patterns: ['mna:split_triangle', 'mna:knot2'],
        tier: 3
    })

    addMnaManaweavingRecipe(event, {
        output: 'morerelics:crown_of_the_legend',
        items: ['nameless_trinkets:ultimate_dust', 'gtceu:empyrean_ichor_ingot', 'botania:gaia_ingot', 'botania:terrasteel_ingot', 'minecraft:nether_star', '#forge:ingots/elementium', 'kubejs:empyrean_sigil', 'kubejs:empyrean_ward_lattice'],
        patterns: ['mna:star', 'mna:hourglass'],
        tier: 4
    })

    addMnaManaweavingRecipe(event, {
        output: 'morerelics:king_crimson',
        items: ['nameless_trinkets:ultimate_dust', 'gtceu:empyrean_ichor_ingot', 'botania:gaia_ingot', 'minecraft:nether_star', 'minecraft:nether_star', 'minecraft:netherite_block', 'kubejs:empyrean_sigil', 'kubejs:empyrean_wizard_brain'],
        patterns: ['mna:star', 'mna:hourglass'],
        tier: 4
    })

    addMnaManaweavingRecipe(event, {
        output: 'morerelics:made_in_heaven',
        items: ['nameless_trinkets:ultimate_dust', 'gtceu:empyrean_ichor_ingot', 'botania:gaia_ingot', 'minecraft:nether_star', 'minecraft:nether_star', 'minecraft:elytra', 'botania:elementium_block', 'kubejs:empyrean_sigil', 'kubejs:empyrean_motive_core'],
        patterns: ['mna:star', 'mna:hourglass'],
        tier: 4
    })

    addMnaManaweavingRecipe(event, {
        output: 'morerelics:wonder_of_u',
        items: ['nameless_trinkets:ultimate_dust', 'gtceu:empyrean_ichor_ingot', 'botania:gaia_ingot', 'minecraft:nether_star', 'minecraft:nether_star', 'minecraft:netherite_block', 'botania:elementium_block', 'kubejs:empyrean_sigil', 'kubejs:empyrean_wizard_brain'],
        patterns: ['mna:star', 'mna:hourglass'],
        tier: 4
    })

})
