ServerEvents.recipes(event => {

    // metal_golem_template: gated at Initiate (HV) — divine_pearl + holy_silver
    // all wands require the template, so gating this gates the whole wand system
    event.remove({ id: 'modulargolems:metal_golem_template' })
    event.shaped(
        Item.of('modulargolems:metal_golem_template', 1),
        [
            'CHC',
            'HSH',
            'CHC'
        ],
        {
            C: 'minecraft:clay_ball',
            H: 'gtceu:holy_silver_plate',
            S: 'irons_spellbooks:divine_pearl'
        }
    )

    // empty_upgrade: gated at Initiate (HV) — holy_silver center, output reduced 4→2
    // all upgrades require this, so gating here gates every upgrade
    event.remove({ id: 'modulargolems:empty_upgrade' })
    event.shaped(
        Item.of('modulargolems:empty_upgrade', 2),
        [
            'CSC',
            'SHS',
            'CSC'
        ],
        {
            C: 'minecraft:clay_ball',
            S: 'ars_nouveau:source_gem',
            H: 'gtceu:holy_silver_plate'
        }
    )

    // golem_workbench: gated at Alchemist (IV) — manasteel corners
    event.remove({ id: 'modulargolems:golem_workbench' })
    event.shaped(
        Item.of('modulargolems:golem_workbench', 1),
        [
            'MgM',
            'RTR',
            'EIE'
        ],
        {
            M: 'gtceu:manasteel_plate',
            g: 'modulargolems:golem_slicing_axe',
            R: 'minecraft:redstone',
            T: 'minecraft:smithing_table',
            E: 'minecraft:echo_shard',
            I: 'minecraft:anvil'
        }
    )

    // diamond_expansion_template: gated at Alchemist (IV) — manasteel center, 2x divine_pearl
    event.remove({ id: 'modulargolems:diamond_expansion_template' })
    event.shaped(
        Item.of('modulargolems:diamond_expansion_template', 1),
        [
            'ACA',
            'DPD',
            'ACA'
        ],
        {
            A: 'modulargolems:empty_upgrade',
            C: 'minecraft:diamond',
            D: 'irons_spellbooks:divine_pearl',
            P: 'gtceu:manasteel_plate'
        }
    )

    // netherite_expansion_template: gated at Sorcerer (EV) + Alchemist (IV) — prima_materia + manasteel
    event.remove({ id: 'modulargolems:netherite_expansion_template' })
    event.shaped(
        Item.of('modulargolems:netherite_expansion_template', 1),
        [
            'ADA',
            'CPC',
            'AMA'
        ],
        {
            A: 'modulargolems:empty_upgrade',
            D: 'minecraft:nether_star',
            C: 'minecraft:netherite_ingot',
            P: 'gtceu:prima_materia_plate',
            M: 'gtceu:manasteel_plate'
        }
    )

    // harbinger_upgrade_template: gated at Arcanist (ZPM) — elementium replaces terrasteel
    event.remove({ id: 'modulargolems:harbinger_upgrade_template' })
    event.shaped(
        Item.of('modulargolems:harbinger_upgrade_template', 1),
        [
            'ASA',
            'AEA',
            'ACA'
        ],
        {
            A: 'minecraft:redstone_block',
            S: 'minecraft:nether_star',
            E: 'gtceu:elementium_plate',
            C: 'cataclysm:witherite_ingot'
        }
    )

    // monstrosity_upgrade_template: gated at Arcanist (ZPM) — elementium replaces terrasteel, manasteel replaces gold
    event.remove({ id: 'modulargolems:monstrosity_upgrade_template' })
    event.shaped(
        Item.of('modulargolems:monstrosity_upgrade_template', 1),
        [
            'AMA',
            'AEA',
            'ACA'
        ],
        {
            A: 'minecraft:blackstone',
            M: 'gtceu:manasteel_plate',
            E: 'gtceu:elementium_plate',
            C: 'cataclysm:lava_power_cell'
        }
    )
})
