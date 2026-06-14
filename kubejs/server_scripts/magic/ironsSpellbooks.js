ServerEvents.recipes(event => {

    // arcane_anvil: vanilla has no magic items in recipe at all
    // add mithril + source_gem as gate
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
            M: '#forge:ingots/mithril',
            V: 'minecraft:anvil'
        }
    )

    // scroll_forge: vanilla has no magic items
    // add mithril + source_gem as gate
    event.remove({ id: 'irons_spellbooks:scroll_forge' })
    event.shaped(
        Item.of('irons_spellbooks:scroll_forge', 1),
        [
            'MDM',
            ' O ',
            'OSO'
        ],
        {
            M: '#forge:ingots/mithril',
            D: 'minecraft:polished_deepslate',
            O: 'minecraft:crying_obsidian',
            S: 'ars_nouveau:source_gem'
        }
    )

    // INK UPGRADES — gate each tier behind a magic progression key item
    // vanilla used copper/iron/gold/amethyst (no magic gating at all)
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
        "input": { "item": "gtceu:prima_materia_ingot" },
        "results": [{ "Amount": 250, "FluidName": "irons_spellbooks:epic_ink" }]
    })

    event.custom({
        "type": "irons_spellbooks:alchemist_cauldron_brew",
        "base_fluid": { "Amount": 1000, "FluidName": "irons_spellbooks:epic_ink" },
        "input": { "item": "botania:manasteel_ingot" },
        "results": [{ "Amount": 250, "FluidName": "irons_spellbooks:legendary_ink" }]
    })

    // all runes: 4x school-theme item + 4x source_gem + blank_rune — uniform Journeyman gate
    // no school above another; source_gem bridges ISS into Ars system
    event.replaceInput({ output: 'irons_spellbooks:arcane_ingot' }, '#irons_spellbooks:arcane_ingot_base', 'aether_redux:veridium_ingot')

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

    // upgrade orbs: 4x rune (corners) + 4x school-theme item (edges) + upgrade_orb (center)
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

    // Sorcerer (EV) custom spellbooks
    event.recipes.ars_nouveau.enchanting_apparatus(
        [
            'irons_spellbooks:pyrium_ingot',
            'irons_spellbooks:pyrium_ingot',
            'irons_spellbooks:pyrium_ingot',
            'irons_spellbooks:pyrium_ingot',
            'kubejs:chaos_essence',
            'irons_spellbooks:fire_rune',
            'irons_spellbooks:fire_rune'
        ],
        'irons_spellbooks:netherite_spell_book',
        'kubejs:pyromatic_codex',
        30000,
    )

    event.recipes.ars_nouveau.enchanting_apparatus(
        [
            'gtceu:prima_materia_ingot',
            'gtceu:prima_materia_ingot',
            'kubejs:chaos_essence',
            'irons_spellbooks:evocation_rune',
            'irons_spellbooks:evocation_rune',
            'minecraft:nether_star'
        ],
        'irons_spellbooks:netherite_spell_book',
        'kubejs:evocation_folio',
        30000,
    )

    // Arcanist (ZPM) custom spellbooks
    event.recipes.ars_nouveau.enchanting_apparatus(
        [
            '#forge:ingots/elementium',
            '#forge:ingots/elementium',
            '#forge:ingots/elementium',
            '#forge:ingots/elementium',
            'kubejs:elven_concentrate',
            'kubejs:elven_concentrate',
            'irons_spellbooks:ice_rune',
            'irons_spellbooks:ice_rune'
        ],
        'irons_spellbooks:netherite_spell_book',
        'kubejs:glacial_grimoire',
        40000,
    )

    event.recipes.ars_nouveau.enchanting_apparatus(
        [
            '#forge:ingots/elementium',
            '#forge:ingots/elementium',
            '#forge:ingots/elementium',
            '#forge:ingots/elementium',
            'kubejs:elven_concentrate',
            'kubejs:elven_concentrate',
            'irons_spellbooks:nature_rune',
            'irons_spellbooks:nature_rune'
        ],
        'irons_spellbooks:netherite_spell_book',
        'kubejs:verdant_chronicle',
        40000,
    )

    event.recipes.ars_nouveau.enchanting_apparatus(
        [
            'irons_spellbooks:ender_rune',
            'irons_spellbooks:ender_rune',
            'irons_spellbooks:portal_frame',
            'irons_spellbooks:portal_frame',
            'botania:terrasteel_ingot',
            '#forge:ingots/elementium',
            'minecraft:ender_eye',
            'minecraft:ender_eye'
        ],
        'irons_spellbooks:netherite_spell_book',
        'legendary_spellbooks:annihilators_protocol',
        40000,
    )

    event.recipes.ars_nouveau.enchanting_apparatus(
        [
            'irons_spellbooks:lightning_rune',
            'irons_spellbooks:lightning_rune',
            'irons_spellbooks:energized_core',
            'irons_spellbooks:energized_core',
            'botania:manasteel_ingot',
            '#forge:ingots/elementium',
            'irons_spellbooks:lightning_bottle',
            'irons_spellbooks:lightning_bottle'
        ],
        'irons_spellbooks:netherite_spell_book',
        'legendary_spellbooks:stormbound_grimoire',
        40000,
    )
})
