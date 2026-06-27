ServerEvents.recipes(event => {

    event.remove({ id: 'irons_spellbooks:arcane_anvil' })
    event.shaped(
        Item.of('irons_spellbooks:arcane_anvil', 1),
        [
            'AAA',
            ' S ',
            'MVM'
        ],
        {
            A: 'minecraft:amethyst_block',
            S: 'ars_nouveau:source_gem',
            M: 'gtceu:mithril_plate',
            V: 'minecraft:anvil'
        }
    )

    event.remove({ id: 'irons_spellbooks:scroll_forge' })
    event.shaped(
        Item.of('irons_spellbooks:scroll_forge', 1),
        [
            'MDM',
            ' O ',
            'OSO'
        ],
        {
            M: 'gtceu:mithril_plate',
            D: 'minecraft:polished_deepslate',
            O: 'minecraft:crying_obsidian',
            S: 'ars_nouveau:source_gem'
        }
    )

    event.remove({ id: 'irons_spellbooks:alchemist_cauldron/brew_uncommon_ink' })
    event.remove({ id: 'irons_spellbooks:alchemist_cauldron/brew_rare_ink' })
    event.remove({ id: 'irons_spellbooks:alchemist_cauldron/brew_epic_ink' })
    event.remove({ id: 'irons_spellbooks:alchemist_cauldron/brew_legendary_ink' })

    event.custom({
        "type": "irons_spellbooks:alchemist_cauldron_brew",
        "base_fluid": { "Amount": 1000, "FluidName": "irons_spellbooks:common_ink" },
        "input": { "item": "ars_nouveau:source_gem" },
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
        "input": { "item": "kubejs:elven_source_lattice" },
        "results": [{ "Amount": 250, "FluidName": "irons_spellbooks:legendary_ink" }]
    })

    event.remove({ output: 'irons_spellbooks:arcane_ingot' })

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
        event.shaped(Item.of(r.id, 1), ['EFE', 'FBF', 'EFE'], {
            E: r.themeItem,
            F: 'ars_nouveau:source_gem',
            B: 'irons_spellbooks:blank_rune'
        })
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
        event.shaped(Item.of(r.id, 1), ['RTR', 'TUT', 'RTR'], {
            R: r.rune,
            T: r.theme,
            U: 'irons_spellbooks:upgrade_orb'
        })
    })

    addEnchantingRecipe(event, {
        reagent: 'irons_spellbooks:netherite_spell_book',
        pedestalItems: [
            'irons_spellbooks:pyrium_ingot', 'irons_spellbooks:pyrium_ingot',
            'irons_spellbooks:pyrium_ingot', 'irons_spellbooks:pyrium_ingot',
            'kubejs:chaos_essence', 'irons_spellbooks:fire_rune', 'irons_spellbooks:fire_rune'
        ],
        output: 'kubejs:pyromatic_codex',
        sourceCost: 30000
    })

    addEnchantingRecipe(event, {
        reagent: 'irons_spellbooks:netherite_spell_book',
        pedestalItems: [
            'gtceu:prima_materia_rod', 'gtceu:prima_materia_rod',
            'kubejs:chaos_essence', 'irons_spellbooks:evocation_rune',
            'irons_spellbooks:evocation_rune', 'minecraft:nether_star'
        ],
        output: 'kubejs:evocation_folio',
        sourceCost: 30000
    })

    addEnchantingRecipe(event, {
        reagent: 'irons_spellbooks:netherite_spell_book',
        pedestalItems: [
            'gtceu:elven_americate_ingot', 'gtceu:elven_americate_ingot',
            'cataclysm_spellbooks:technomancy_rune', 'cataclysm_spellbooks:technomancy_rune',
            'kubejs:elven_concentrate', 'kubejs:elven_concentrate',
            '#gtceu:circuits/zpm', '#gtceu:circuits/zpm'
        ],
        output: 'kubejs:technomatic_folio',
        sourceCost: 42000
    })

    addEnchantingRecipe(event, {
        reagent: 'irons_spellbooks:netherite_spell_book',
        pedestalItems: [
            'gtceu:elementium_plate', 'gtceu:elementium_plate',
            'gtceu:elementium_plate', 'gtceu:elementium_plate',
            'kubejs:elven_source_lattice', 'kubejs:elven_source_lattice',
            'irons_spellbooks:ice_rune', 'irons_spellbooks:ice_rune'
        ],
        output: 'kubejs:glacial_grimoire',
        sourceCost: 40000
    })

    addEnchantingRecipe(event, {
        reagent: 'irons_spellbooks:netherite_spell_book',
        pedestalItems: [
            'gtceu:elementium_plate', 'gtceu:elementium_plate',
            'gtceu:elementium_plate', 'gtceu:elementium_plate',
            'kubejs:elven_source_lattice', 'kubejs:elven_source_lattice',
            'irons_spellbooks:nature_rune', 'irons_spellbooks:nature_rune'
        ],
        output: 'kubejs:verdant_chronicle',
        sourceCost: 40000
    })

    addEnchantingRecipe(event, {
        reagent: 'irons_spellbooks:netherite_spell_book',
        pedestalItems: [
            'irons_spellbooks:ender_rune', 'irons_spellbooks:ender_rune',
            'irons_spellbooks:portal_frame', 'irons_spellbooks:portal_frame',
            'gtceu:terrasteel_plate', 'gtceu:elementium_plate',
            'minecraft:ender_eye', 'minecraft:ender_eye'
        ],
        output: 'legendary_spellbooks:annihilators_protocol',
        sourceCost: 40000
    })

    addEnchantingRecipe(event, {
        reagent: 'irons_spellbooks:netherite_spell_book',
        pedestalItems: [
            'irons_spellbooks:lightning_rune', 'irons_spellbooks:lightning_rune',
            'irons_spellbooks:energized_core', 'irons_spellbooks:energized_core',
            'kubejs:elven_source_lattice', 'gtceu:elementium_plate',
            'irons_spellbooks:lightning_bottle', 'irons_spellbooks:lightning_bottle'
        ],
        output: 'legendary_spellbooks:stormbound_grimoire',
        sourceCost: 40000
    })
})
