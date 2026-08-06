ServerEvents.recipes(event => {

    event.remove({ id: 'irons_spellbooks:arcane_anvil' })
    event.shaped(
        Item.of('irons_spellbooks:arcane_anvil', 1),
        [
            'AAA',
            'HSW',
            'MVM'
        ],
        {
            A: 'minecraft:amethyst_block',
            S: 'gtceu:holy_silver_dust',
            M: 'gtceu:mithril_plate',
            V: 'minecraft:anvil',
            H: '#forge:tools/hammers',
            W: '#forge:tools/wrenches'
        }
    ).damageIngredient(Ingredient.of('#forge:tools/hammers')).damageIngredient(Ingredient.of('#forge:tools/wrenches'))

    event.remove({ id: 'irons_spellbooks:scroll_forge' })
    event.shaped(
        Item.of('irons_spellbooks:scroll_forge', 1),
        [
            'MDM',
            'HOW',
            'OSO'
        ],
        {
            M: 'gtceu:mithril_plate',
            D: 'minecraft:polished_deepslate',
            O: 'minecraft:crying_obsidian',
            S: 'gtceu:holy_silver_dust',
            H: '#forge:tools/hammers',
            W: '#forge:tools/wrenches'
        }
    ).damageIngredient(Ingredient.of('#forge:tools/hammers')).damageIngredient(Ingredient.of('#forge:tools/wrenches'))

    // Reflavored to Spirit Altar 2026-08-06: sculk + echo shard is pure deep-dark/void
    // iconography.
    addSpiritInfusion(event, {
        output: 'irons_spellbooks:ruined_book',
        input: 'minecraft:book',
        spirits: [{ type: 'eldritch', count: 2 }],
        extraItems: [
            { item: 'minecraft:sculk', count: 2 },
            { item: 'gtceu:prima_materia_dust', count: 2 },
            { item: 'minecraft:echo_shard' }
        ]
    })

    event.remove({ id: 'irons_spellbooks:alchemist_cauldron/brew_uncommon_ink' })
    event.remove({ id: 'irons_spellbooks:alchemist_cauldron/brew_rare_ink' })
    event.remove({ id: 'irons_spellbooks:alchemist_cauldron/brew_epic_ink' })
    event.remove({ id: 'irons_spellbooks:alchemist_cauldron/brew_legendary_ink' })

    event.custom({
        "type": "irons_spellbooks:alchemist_cauldron_brew",
        "base_fluid": { "Amount": 1000, "FluidName": "minecraft:water" },
        "input": { "item": "minecraft:ink_sac" },
        "results": [{ "Amount": 500, "FluidName": "irons_spellbooks:common_ink" }]
    })

    event.custom({
        "type": "irons_spellbooks:alchemist_cauldron_brew",
        "base_fluid": { "Amount": 1000, "FluidName": "irons_spellbooks:common_ink" },
        "input": { "item": "gtceu:luminessence_dust" },
        "results": [{ "Amount": 250, "FluidName": "irons_spellbooks:uncommon_ink" }]
    })

    event.custom({
        "type": "irons_spellbooks:alchemist_cauldron_brew",
        "base_fluid": { "Amount": 1000, "FluidName": "irons_spellbooks:uncommon_ink" },
        "input": { "item": "irons_spellbooks:divine_pearl" },
        "results": [{ "Amount": 250, "FluidName": "irons_spellbooks:rare_ink" }]
    })

    event.custom({
        "type": "irons_spellbooks:alchemist_cauldron_brew",
        "base_fluid": { "Amount": 1000, "FluidName": "irons_spellbooks:rare_ink" },
        "input": { "item": "gtceu:prima_materia_plate" },
        "results": [{ "Amount": 250, "FluidName": "irons_spellbooks:epic_ink" }]
    })

    event.custom({
        "type": "irons_spellbooks:alchemist_cauldron_brew",
        "base_fluid": { "Amount": 1000, "FluidName": "irons_spellbooks:epic_ink" },
        "input": { "item": "kubejs:kathar_lattice" },
        "results": [{ "Amount": 250, "FluidName": "irons_spellbooks:legendary_ink" }]
    })

    event.remove({ output: 'irons_spellbooks:arcane_ingot' })

    event.shapeless(
        Item.of('irons_spellbooks:blank_rune', 2),
        ['minecraft:paper', 'minecraft:paper', 'minecraft:stone', '#forge:tools/files']
    ).damageIngredient(Ingredient.of('#forge:tools/files'))

    const runeRecipes = [
        { id: 'irons_spellbooks:arcane_rune',            themeItem: 'irons_spellbooks:arcane_essence'    },
        { id: 'irons_spellbooks:blood_rune',             themeItem: 'irons_spellbooks:blood_vial'        },
        { id: 'irons_spellbooks:cooldown_rune',          themeItem: 'minecraft:phantom_membrane'         },
        { id: 'irons_spellbooks:ender_rune',             themeItem: 'minecraft:ender_pearl'              },
        { id: 'irons_spellbooks:evocation_rune',         themeItem: 'minecraft:emerald'                  },
        { id: 'irons_spellbooks:fire_rune',              themeItem: 'minecraft:blaze_rod'                },
        { id: 'irons_spellbooks:holy_rune',              themeItem: 'minecraft:golden_apple'             },
        { id: 'irons_spellbooks:ice_rune',               themeItem: 'irons_spellbooks:frozen_bone'       },
        { id: 'irons_spellbooks:lightning_rune',         themeItem: 'irons_spellbooks:lightning_bottle'  },
        { id: 'irons_spellbooks:nature_rune',            themeItem: 'minecraft:poisonous_potato'         },
        { id: 'irons_spellbooks:protection_rune',        themeItem: 'minecraft:pufferfish'               },
        { id: 'cataclysm_spellbooks:abyssal_rune',       themeItem: 'cataclysm:crystallized_coral'       },
        { id: 'cataclysm_spellbooks:technomancy_rune',   themeItem: '#gtceu:circuits/lv'                 },
    ]

    runeRecipes.forEach(r => {
        event.remove({ id: r.id })
        event.shaped(Item.of(r.id, 1), ['EZE', ' B ', ' F '], {
            E: r.themeItem,
            F: 'gtceu:holy_silver_dust',
            B: 'irons_spellbooks:blank_rune',
            Z: '#forge:tools/files'
        }).damageIngredient(Ingredient.of('#forge:tools/files'))
    })

    const orbRecipes = [
        { id: 'irons_spellbooks:mana_upgrade_orb',              rune: 'irons_spellbooks:arcane_rune',           theme: 'irons_spellbooks:arcane_essence'    },
        { id: 'irons_spellbooks:blood_upgrade_orb',             rune: 'irons_spellbooks:blood_rune',            theme: 'irons_spellbooks:blood_vial'        },
        { id: 'irons_spellbooks:cooldown_upgrade_orb',          rune: 'irons_spellbooks:cooldown_rune',         theme: 'minecraft:phantom_membrane'         },
        { id: 'irons_spellbooks:ender_upgrade_orb',             rune: 'irons_spellbooks:ender_rune',            theme: 'minecraft:ender_pearl'              },
        { id: 'irons_spellbooks:evocation_upgrade_orb',         rune: 'irons_spellbooks:evocation_rune',        theme: 'minecraft:emerald'                  },
        { id: 'irons_spellbooks:fire_upgrade_orb',              rune: 'irons_spellbooks:fire_rune',             theme: 'minecraft:blaze_rod'                },
        { id: 'irons_spellbooks:holy_upgrade_orb',              rune: 'irons_spellbooks:holy_rune',             theme: 'minecraft:golden_apple'             },
        { id: 'irons_spellbooks:ice_upgrade_orb',               rune: 'irons_spellbooks:ice_rune',              theme: 'irons_spellbooks:frozen_bone'       },
        { id: 'irons_spellbooks:lightning_upgrade_orb',         rune: 'irons_spellbooks:lightning_rune',        theme: 'irons_spellbooks:lightning_bottle'  },
        { id: 'irons_spellbooks:nature_upgrade_orb',            rune: 'irons_spellbooks:nature_rune',           theme: 'minecraft:poisonous_potato'         },
        { id: 'irons_spellbooks:protection_upgrade_orb',        rune: 'irons_spellbooks:protection_rune',       theme: 'minecraft:pufferfish'               },
        { id: 'cataclysm_spellbooks:abyssal_upgrade_orb',       rune: 'cataclysm_spellbooks:abyssal_rune',      theme: 'cataclysm:crystallized_coral'       },
        { id: 'cataclysm_spellbooks:technomancy_upgrade_orb',   rune: 'cataclysm_spellbooks:technomancy_rune',  theme: '#gtceu:circuits/lv'                 },
    ]

    orbRecipes.forEach(r => {
        event.remove({ id: r.id })
        event.shaped(Item.of(r.id, 1), ['RZR', ' U ', ' T '], {
            R: r.rune,
            T: r.theme,
            U: 'irons_spellbooks:upgrade_orb',
            Z: '#forge:tools/files'
        }).damageIngredient(Ingredient.of('#forge:tools/files'))
    })

    // Reflavored to Spirit Altar 2026-08-06: double fire_rune is already a typed-element
    // ingredient -- Spirit Altar's typed-soul cost is more honest than pattern-weaving.
    addSpiritInfusion(event, {
        output: 'kubejs:pyromatic_codex',
        input: 'irons_spellbooks:netherite_spell_book',
        spirits: [{ type: 'infernal', count: 5 }],
        extraItems: [
            { item: 'irons_spellbooks:pyrium_ingot', count: 3 },
            { item: 'kubejs:empyrean_sigil' },
            { item: 'kubejs:chaos_essence' },
            { item: 'irons_spellbooks:fire_rune', count: 2 },
            { item: 'kubejs:empyrean_wizard_brain' }
        ]
    })

    addMnaManaweavingRecipe(event, {
        output: 'kubejs:evocation_folio',
        items: ['irons_spellbooks:netherite_spell_book', 'gtceu:prima_materia_rod', 'kubejs:empyrean_sigil', 'kubejs:chaos_essence', 'irons_spellbooks:evocation_rune', 'irons_spellbooks:evocation_rune', 'minecraft:nether_star', 'kubejs:empyrean_wizard_brain'],
        patterns: ['mna:star', 'mna:hourglass'],
        tier: 4
    })

    addMnaManaweavingRecipe(event, {
        output: 'kubejs:technomatic_folio',
        items: ['irons_spellbooks:netherite_spell_book', 'gtceu:gravidium_ingot', 'gtceu:gravidium_ingot', 'cataclysm_spellbooks:technomancy_rune', 'cataclysm_spellbooks:technomancy_rune', 'kubejs:kathar_lattice', 'kubejs:kathar_lattice', '#gtceu:circuits/zpm', 'kubejs:empyrean_sigil'],
        patterns: ['mna:star', 'mna:hourglass'],
        tier: 4
    })

    // Reflavored to Spirit Altar 2026-08-06: ice/frost theming maps directly onto aqueous.
    addSpiritInfusion(event, {
        output: 'kubejs:glacial_grimoire',
        input: 'irons_spellbooks:netherite_spell_book',
        spirits: [{ type: 'aqueous', count: 5 }],
        extraItems: [
            { item: 'gtceu:elementium_plate', count: 3 },
            { item: 'kubejs:empyrean_sigil' },
            { item: 'kubejs:kathar_lattice', count: 2 },
            { item: 'irons_spellbooks:ice_rune' },
            { item: 'kubejs:empyrean_wizard_brain' }
        ]
    })

    // Reflavored to Spirit Altar 2026-08-06: nature-rune theming is a clean earthen match.
    addSpiritInfusion(event, {
        output: 'kubejs:verdant_chronicle',
        input: 'irons_spellbooks:netherite_spell_book',
        spirits: [{ type: 'earthen', count: 5 }],
        extraItems: [
            { item: 'gtceu:elementium_plate', count: 3 },
            { item: 'kubejs:empyrean_sigil' },
            { item: 'kubejs:kathar_lattice', count: 2 },
            { item: 'irons_spellbooks:nature_rune' },
            { item: 'kubejs:empyrean_wizard_brain' }
        ]
    })

    addMnaManaweavingRecipe(event, {
        output: 'legendary_spellbooks:annihilators_protocol',
        items: ['irons_spellbooks:netherite_spell_book', 'irons_spellbooks:ender_rune', 'irons_spellbooks:ender_rune', 'irons_spellbooks:portal_frame', 'kubejs:empyrean_sigil', 'gtceu:terrasteel_plate', 'gtceu:elementium_plate', 'minecraft:ender_eye', 'kubejs:empyrean_motive_core'],
        patterns: ['mna:star', 'mna:hourglass'],
        tier: 4
    })

    // Reflavored to Spirit Altar 2026-08-06: storm/lightning theming is the strongest
    // single-element fit in this file.
    addSpiritInfusion(event, {
        output: 'legendary_spellbooks:stormbound_grimoire',
        input: 'irons_spellbooks:netherite_spell_book',
        spirits: [{ type: 'aerial', count: 5 }],
        extraItems: [
            { item: 'irons_spellbooks:lightning_rune', count: 2 },
            { item: 'irons_spellbooks:energized_core' },
            { item: 'kubejs:empyrean_sigil' },
            { item: 'kubejs:kathar_lattice' },
            { item: 'gtceu:elementium_plate' },
            { item: 'irons_spellbooks:lightning_bottle' },
            { item: 'kubejs:empyrean_motive_core' }
        ]
    })
})
