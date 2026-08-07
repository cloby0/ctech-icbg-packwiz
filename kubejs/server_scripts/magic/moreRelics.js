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

    // Reflavored to Blood Altar 2026-08-06: "guts" is explicitly visceral/gore-themed, a
    // single-item sacrifice fits the name better than a pattern-weave.
    addBloodAltarRecipe(event, {
        input: 'minecraft:golden_apple',
        output: 'morerelics:guts_orb',
        upgradeLevel: 2,
        syphon: LP.SORCERER
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

    // Reflavored to Blood Altar 2026-08-06: another literal "heart" item, life-force framing
    // outclasses generic weaving.
    addBloodAltarRecipe(event, {
        input: 'minecraft:magma_cream',
        output: 'morerelics:thermoseismic_heart',
        upgradeLevel: 3,
        syphon: LP.ALCHEMIST
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

    // Reflavored to Spirit Altar 2026-08-06: wither_skeleton_skull is necromantic/evil
    // iconography, wicked spirit's core niche.
    addSpiritInfusion(event, {
        output: 'morerelics:tyrant_mask',
        input: 'minecraft:wither_skeleton_skull',
        spirits: [{ type: 'wicked', count: 4 }, { type: 'earthen', count: 1 }],
        extraItems: [
            { item: 'minecraft:obsidian', count: 2 },
            { item: 'minecraft:iron_block' },
            { item: 'gtceu:holy_silver_dust', count: 2 }
        ]
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

    // The 4 named capstone relics were indistinguishable from routine Manaweaving crafts despite
    // being Sage tier's most legendary items. Moved to Sublimation (2026-08-06) -- "infuse an
    // object with Materia to enhance it, or impart magical properties" (in-game codex) is a much
    // tighter diegetic fit for a legendary artifact than the mod's own bulk crafting mechanism.
    // wisdom: 4 / tier: 6 matches sage.js's own Philosopher's Stone gate -- Empyrean Ichor is
    // Sage's signature material, all 4 already built from it. Same ingredients as before, split
    // across 2 stages; materia flavor drawn from sage.js's own wisdom_stone_philosophers_stone
    // recipe so all 5 Sage-tier sublimations read as one family.
    event.custom({
        type: 'magichem:sublimation',
        tier: 6,
        wisdom: 4,
        object: { item: 'morerelics:crown_of_the_legend' },
        stages: [
            {
                experience: 180,
                components: [
                    { item: 'nameless_trinkets:ultimate_dust' },
                    { item: 'gtceu:empyrean_ichor_ingot' },
                    { item: 'botania:gaia_ingot' },
                    { item: 'botania:terrasteel_ingot' }
                ],
                materia: [
                    { item: 'magichem:essentia_nigredo', count: 60 },
                    { item: 'magichem:admixture_potential', count: 90 }
                ]
            },
            {
                experience: 220,
                components: [
                    { item: 'minecraft:nether_star' },
                    { item: 'botania:elementium_ingot' },
                    { item: 'kubejs:empyrean_sigil' },
                    { item: 'kubejs:empyrean_ward_lattice' }
                ],
                materia: [
                    { item: 'magichem:essentia_albedo', count: 60 },
                    { item: 'magichem:admixture_change', count: 90 }
                ]
            }
        ]
    })

    event.custom({
        type: 'magichem:sublimation',
        tier: 6,
        wisdom: 4,
        object: { item: 'morerelics:king_crimson' },
        stages: [
            {
                experience: 180,
                components: [
                    { item: 'nameless_trinkets:ultimate_dust' },
                    { item: 'gtceu:empyrean_ichor_ingot' },
                    { item: 'botania:gaia_ingot' },
                    { item: 'minecraft:nether_star' }
                ],
                materia: [
                    { item: 'magichem:essentia_citrinitas', count: 60 },
                    { item: 'magichem:admixture_potential', count: 90 }
                ]
            },
            {
                experience: 220,
                components: [
                    { item: 'minecraft:nether_star' },
                    { item: 'minecraft:netherite_block' },
                    { item: 'kubejs:empyrean_sigil' },
                    { item: 'kubejs:empyrean_wizard_brain' }
                ],
                materia: [
                    { item: 'magichem:essentia_rubedo', count: 60 },
                    { item: 'magichem:admixture_sorcery', count: 90 }
                ]
            }
        ]
    })

    event.custom({
        type: 'magichem:sublimation',
        tier: 6,
        wisdom: 4,
        object: { item: 'morerelics:made_in_heaven' },
        stages: [
            {
                experience: 180,
                components: [
                    { item: 'nameless_trinkets:ultimate_dust' },
                    { item: 'gtceu:empyrean_ichor_ingot' },
                    { item: 'botania:gaia_ingot' },
                    { item: 'minecraft:nether_star' },
                    { item: 'minecraft:nether_star' }
                ],
                materia: [
                    { item: 'magichem:admixture_wizard', count: 70 },
                    { item: 'magichem:essentia_conceptual', count: 80 }
                ]
            },
            {
                experience: 220,
                components: [
                    { item: 'minecraft:elytra' },
                    { item: 'botania:elementium_block' },
                    { item: 'kubejs:empyrean_sigil' },
                    { item: 'kubejs:empyrean_motive_core' }
                ],
                materia: [
                    { item: 'magichem:admixture_potential', count: 100 },
                    { item: 'magichem:essentia_rubedo', count: 60 }
                ]
            }
        ]
    })

    event.custom({
        type: 'magichem:sublimation',
        tier: 6,
        wisdom: 4,
        object: { item: 'morerelics:wonder_of_u' },
        stages: [
            {
                experience: 180,
                components: [
                    { item: 'nameless_trinkets:ultimate_dust' },
                    { item: 'gtceu:empyrean_ichor_ingot' },
                    { item: 'botania:gaia_ingot' },
                    { item: 'minecraft:nether_star' },
                    { item: 'minecraft:nether_star' }
                ],
                materia: [
                    { item: 'magichem:essentia_nigredo', count: 60 },
                    { item: 'magichem:essentia_citrinitas', count: 60 }
                ]
            },
            {
                experience: 220,
                components: [
                    { item: 'minecraft:netherite_block' },
                    { item: 'botania:elementium_block' },
                    { item: 'kubejs:empyrean_sigil' },
                    { item: 'kubejs:empyrean_wizard_brain' }
                ],
                materia: [
                    { item: 'magichem:admixture_change', count: 100 },
                    { item: 'magichem:essentia_rubedo', count: 70 }
                ]
            }
        ]
    })

})
