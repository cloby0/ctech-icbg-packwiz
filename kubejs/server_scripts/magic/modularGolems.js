ServerEvents.recipes(event => {

    event.remove({ id: 'modulargolems:metal_golem_template' })
    event.shaped(
        Item.of('modulargolems:metal_golem_template', 1),
        [
            'ZHC',
            'HSH',
            'CHC'
        ],
        {
            C: 'minecraft:clay_ball',
            H: 'gtceu:holy_silver_plate',
            S: 'irons_spellbooks:divine_pearl',
            Z: '#forge:tools/hammers'
        }
    ).damageIngredient(Ingredient.of('#forge:tools/hammers'))

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

    event.remove({ id: 'modulargolems:golem_workbench' })
    event.shaped(
        Item.of('modulargolems:golem_workbench', 1),
        [
            'MgM',
            'WTR',
            'EIE'
        ],
        {
            M: 'gtceu:manasteel_plate',
            g: 'modulargolems:golem_slicing_axe',
            R: 'minecraft:redstone',
            T: 'minecraft:smithing_table',
            E: 'minecraft:echo_shard',
            I: 'minecraft:anvil',
            W: '#forge:tools/wrenches'
        }
    ).damageIngredient(Ingredient.of('#forge:tools/wrenches'))

    event.remove({ id: 'modulargolems:diamond_expansion_template' })
    event.shaped(
        Item.of('modulargolems:diamond_expansion_template', 1),
        [
            'AZA',
            'DPD',
            'ACA'
        ],
        {
            A: 'modulargolems:empty_upgrade',
            C: 'minecraft:diamond',
            D: 'irons_spellbooks:divine_pearl',
            P: 'gtceu:manasteel_plate',
            Z: '#forge:tools/screwdrivers'
        }
    ).damageIngredient(Ingredient.of('#forge:tools/screwdrivers'))

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
