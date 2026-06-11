ServerEvents.recipes(event => {

    // metal_golem_template: vanilla uses copper_ingot center, no magic gate
    // all wands require the template, so gating this gates the whole wand system
    event.remove({ id: 'modulargolems:metal_golem_template' })
    event.shaped(
        Item.of('modulargolems:metal_golem_template', 1),
        [
            'CBC',
            'BSB',
            'CBC'
        ],
        {
            C: 'minecraft:clay_ball',
            B: 'minecraft:stick',
            S: 'ars_nouveau:source_gem'
        }
    )

    // empty_upgrade: vanilla uses amethyst_shard center, no real magic gate
    // all upgrades require this, so gating here gates every upgrade
    event.remove({ id: 'modulargolems:empty_upgrade' })
    event.shaped(
        Item.of('modulargolems:empty_upgrade', 4),
        [
            'CBC',
            'BSB',
            'CBC'
        ],
        {
            C: 'minecraft:clay_ball',
            B: 'minecraft:iron_ingot',
            S: 'ars_nouveau:source_gem'
        }
    )

    // golem_workbench: vanilla uses amethyst_shard corners, no magic gate
    event.remove({ id: 'modulargolems:golem_workbench' })
    event.shaped(
        Item.of('modulargolems:golem_workbench', 1),
        [
            'SgS',
            'RTR',
            'EIE'
        ],
        {
            S: 'ars_nouveau:source_gem',
            g: 'modulargolems:golem_slicing_axe',
            R: 'minecraft:redstone',
            T: 'minecraft:smithing_table',
            E: 'minecraft:echo_shard',
            I: 'minecraft:anvil'
        }
    )

    // diamond_expansion_template: vanilla uses netherite_smithing_template as connector
    // gate with divine_pearl (Initiate tier)
    event.remove({ id: 'modulargolems:diamond_expansion_template' })
    event.shaped(
        Item.of('modulargolems:diamond_expansion_template', 1),
        [
            'ACA',
            'CPC',
            'ACA'
        ],
        {
            A: 'modulargolems:empty_upgrade',
            C: 'minecraft:diamond',
            P: 'irons_spellbooks:divine_pearl'
        }
    )

    // netherite_expansion_template: vanilla uses netherite_smithing_template as connector
    // gate with prima_materia (Sorcerer tier — produced by magic imbuement in sorcerer.js)
    event.remove({ id: 'modulargolems:netherite_expansion_template' })
    event.shaped(
        Item.of('modulargolems:netherite_expansion_template', 1),
        [
            'ADA',
            'CPC',
            'ACA'
        ],
        {
            A: 'modulargolems:empty_upgrade',
            D: 'minecraft:nether_star',
            C: 'minecraft:netherite_ingot',
            P: 'gtceu:prima_materia_ingot'
        }
    )

    // harbinger_upgrade_template: cataclysm boss-drop gate, replace smithing_template with terrasteel
    event.remove({ id: 'modulargolems:harbinger_upgrade_template' })
    event.shaped(
        Item.of('modulargolems:harbinger_upgrade_template', 1),
        [
            'ASA',
            'ATA',
            'ACA'
        ],
        {
            A: 'minecraft:redstone_block',
            S: 'minecraft:nether_star',
            T: 'botania:terrasteel_ingot',
            C: 'cataclysm:witherite_ingot'
        }
    )

    // monstrosity_upgrade_template: cataclysm boss-drop gate, replace smithing_template with terrasteel
    event.remove({ id: 'modulargolems:monstrosity_upgrade_template' })
    event.shaped(
        Item.of('modulargolems:monstrosity_upgrade_template', 1),
        [
            'AGA',
            'ATA',
            'ACA'
        ],
        {
            A: 'minecraft:blackstone',
            G: 'minecraft:gold_ingot',
            T: 'botania:terrasteel_ingot',
            C: 'cataclysm:lava_power_cell'
        }
    )
})
