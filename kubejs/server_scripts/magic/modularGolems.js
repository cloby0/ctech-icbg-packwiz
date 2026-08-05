ServerEvents.recipes(event => {

    // K1, and the shared keystone for Inventory Pets too (inventoryPets.js): an animated body.
    // Malum Spirit Altar, not a crafting grid -- you are putting a spirit into a clay shell, and
    // that one recipe gates two entire mods.
    event.remove({ id: 'modulargolems:metal_golem_template' })
    addSpiritInfusion(event, {
        input: { item: 'minecraft:clay_ball', count: 4 },
        output: 'modulargolems:metal_golem_template',
        extraItems: [
            { item: 'gtceu:holy_silver_plate', count: 4 },
            { item: 'irons_spellbooks:divine_pearl' }
        ],
        spirits: [{ type: 'earthen', count: 4 }, { type: 'arcane', count: 2 }]
    })

    event.remove({ id: 'modulargolems:empty_upgrade' })
    event.shaped(
        Item.of('modulargolems:empty_upgrade', 2),
        [
            'DSC',
            'SHS',
            'CSC'
        ],
        {
            C: 'minecraft:clay_ball',
            S: 'gtceu:ambrosium_dust',
            H: 'gtceu:holy_silver_plate',
            D: '#forge:tools/screwdrivers'
        }
    ).damageIngredient(Ingredient.of('#forge:tools/screwdrivers'))

    // K2: the workbench where golems are actually assembled -- Botania's Runic Altar, because
    // binding a body to a purpose is rune work.
    event.remove({ id: 'modulargolems:golem_workbench' })
    addRunicAltarRecipe(event, {
        output: { item: 'modulargolems:golem_workbench' },
        mana: Mana.JOURNEYMAN,
        ingredients: [
            { item: 'gtceu:manasteel_plate', count: 2 },
            { item: 'modulargolems:golem_slicing_axe' },
            { item: 'minecraft:smithing_table' },
            { item: 'minecraft:anvil' },
            { item: 'minecraft:echo_shard', count: 2 }
        ]
    })

    // K3: the late expansion template -- an Afrit ritual. This is what lets a golem exceed its
    // original build, so it is the mod's capstone gate rather than another grid craft.
    event.remove({ id: 'modulargolems:diamond_expansion_template' })
    addOccultismRitual(event, {
        name: 'diamond_expansion_template',
        tier: 'afrit',
        output: 'modulargolems:diamond_expansion_template',
        duration: 120,
        ingredients: [
            { item: 'modulargolems:empty_upgrade', count: 4 },
            { item: 'minecraft:diamond', count: 2 },
            { item: 'irons_spellbooks:divine_pearl', count: 2 },
            { item: 'gtceu:manasteel_plate' },
            { item: 'occultism:afrit_essence' }
        ]
    })

    event.remove({ id: 'modulargolems:netherite_expansion_template' })
    event.shaped(
        Item.of('modulargolems:netherite_expansion_template', 1),
        [
            'ZDA',
            'CPC',
            'AMA'
        ],
        {
            A: 'modulargolems:empty_upgrade',
            D: 'minecraft:nether_star',
            C: 'minecraft:netherite_ingot',
            P: 'gtceu:prima_materia_plate',
            M: 'gtceu:manasteel_plate',
            Z: '#forge:tools/screwdrivers'
        }
    ).damageIngredient(Ingredient.of('#forge:tools/screwdrivers'))

    event.remove({ id: 'modulargolems:harbinger_upgrade_template' })
    event.shaped(
        Item.of('modulargolems:harbinger_upgrade_template', 1),
        [
            'ZSA',
            'AEA',
            'ACA'
        ],
        {
            A: 'minecraft:redstone_block',
            S: 'minecraft:nether_star',
            E: 'gtceu:elementium_plate',
            C: 'cataclysm:witherite_ingot',
            Z: '#forge:tools/screwdrivers'
        }
    ).damageIngredient(Ingredient.of('#forge:tools/screwdrivers'))

    event.remove({ id: 'modulargolems:monstrosity_upgrade_template' })
    event.shaped(
        Item.of('modulargolems:monstrosity_upgrade_template', 1),
        [
            'ZMA',
            'AEA',
            'ACA'
        ],
        {
            A: 'minecraft:blackstone',
            M: 'gtceu:manasteel_plate',
            E: 'gtceu:elementium_plate',
            C: 'cataclysm:lava_power_cell',
            Z: '#forge:tools/screwdrivers'
        }
    ).damageIngredient(Ingredient.of('#forge:tools/screwdrivers'))
})
