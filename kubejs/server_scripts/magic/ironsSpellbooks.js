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

    // pyrium ingot: no vanilla crafting recipe (structure loot only)
    // imbuement chamber: netherite + cinder essence surge → pyrium (Sorcerer tier)
    event.recipes.ars_nouveau.imbuement(
        'minecraft:netherite_ingot',
        'irons_spellbooks:pyrium_ingot',
        5000,
        [
            'irons_spellbooks:cinder_essence',
            'irons_spellbooks:cinder_essence',
            'irons_spellbooks:cinder_essence',
            'irons_spellbooks:cinder_essence'
        ]
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
