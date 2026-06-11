ServerEvents.recipes(event => {

    // celestial_core: vanilla uses nether_star / heart_of_sea / end_crystal as base
    // wrong tier — replace center with divine_pearl (Initiate gate)
    event.remove({ id: 'celestisynth:celestial_core' })
    event.shaped(
        Item.of('celestisynth:celestial_core', 1),
        [
            ' X ',
            'XYX',
            ' X '
        ],
        {
            X: 'minecraft:amethyst_shard',
            Y: 'irons_spellbooks:divine_pearl'
        }
    )

    // supernal_netherite_ingot: remove ghast_tear smithing path
    // celestial_core smithing path remains; celestial_core is now Initiate-gated above
    event.remove({ id: 'celestisynth:supernal_netherite_ingot_smithing' })

    // starlit_factory: vanilla uses iron_block with no magic gating
    // replace iron_block with arcane_ingot
    event.remove({ id: 'celestisynth:starlit_factory' })
    event.shaped(
        Item.of('celestisynth:starlit_factory', 1),
        [
            'IAI',
            'SCB',
            'OOO'
        ],
        {
            I: 'celestisynth:celestial_netherite_ingot',
            A: 'irons_spellbooks:arcane_ingot',
            S: 'minecraft:smithing_table',
            C: 'minecraft:crafting_table',
            B: 'minecraft:blast_furnace',
            O: 'minecraft:obsidian'
        }
    )

    // armor sets: both solar_crystal and lunar_stone use gold_block as accent
    // replace with mithril (Journeyman material, already needed for Celestisynth chain)
    const armorData = [
        {
            set: 'solar_crystal',
            mat: 'celestisynth:solar_crystal',
            pieces: {
                helmet:     ['xMx', 'x x'],
                chestplate: ['x x', 'xMx', 'xxx'],
                leggings:   ['xMx', 'x x', 'x x'],
                boots:      ['x x', 'xMx']
            }
        },
        {
            set: 'lunar_stone',
            mat: 'celestisynth:lunar_stone',
            pieces: {
                helmet:     ['xMx', 'x x'],
                chestplate: ['x x', 'xMx', 'xxx'],
                leggings:   ['xMx', 'x x', 'x x'],
                boots:      ['x x', 'xMx']
            }
        }
    ]

    armorData.forEach(({ set, mat, pieces }) => {
        Object.entries(pieces).forEach(([piece, pattern]) => {
            event.remove({ id: `celestisynth:${set}_${piece}` })
            event.shaped(
                Item.of(`celestisynth:${set}_${piece}`, 1),
                pattern,
                { x: mat, M: '#forge:ingots/mithril' }
            )
        })
    })
})
