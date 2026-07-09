ServerEvents.recipes(event => {

    event.remove({ id: 'celestisynth:celestial_core' })
    event.shaped(
        Item.of('celestisynth:celestial_core', 1),
        [
            'FX ',
            'XYX',
            ' X '
        ],
        {
            X: 'minecraft:amethyst_shard',
            Y: 'irons_spellbooks:divine_pearl',
            F: '#forge:tools/files'
        }
    ).damageIngredient(Ingredient.of('#forge:tools/files'))

    event.remove({ id: 'celestisynth:supernal_netherite_ingot_smithing' })

    event.remove({ id: 'celestisynth:starlit_factory' })
    event.shaped(
        Item.of('celestisynth:starlit_factory', 1),
        [
            'IAI',
            'SCB',
            'WOO'
        ],
        {
            I: 'celestisynth:celestial_netherite_ingot',
            A: 'irons_spellbooks:arcane_ingot',
            S: 'minecraft:smithing_table',
            C: 'minecraft:crafting_table',
            B: 'minecraft:blast_furnace',
            O: 'minecraft:obsidian',
            W: '#forge:tools/wrenches'
        }
    ).damageIngredient(Ingredient.of('#forge:tools/wrenches'))

    const armorData = [
        {
            set: 'solar_crystal',
            mat: 'celestisynth:solar_crystal',
            pieces: {
                helmet:     ['xMx', 'xHx'],
                chestplate: ['xHx', 'xMx', 'xxx'],
                leggings:   ['xMx', 'xHx', 'x x'],
                boots:      ['xHx', 'xMx']
            }
        },
        {
            set: 'lunar_stone',
            mat: 'celestisynth:lunar_stone',
            pieces: {
                helmet:     ['xMx', 'xHx'],
                chestplate: ['xHx', 'xMx', 'xxx'],
                leggings:   ['xMx', 'xHx', 'x x'],
                boots:      ['xHx', 'xMx']
            }
        }
    ]

    armorData.forEach(entry => {
        const set = entry.set
        const mat = entry.mat
        const pieces = entry.pieces
        Object.entries(pieces).forEach(([piece, pattern]) => {
            event.remove({ id: `celestisynth:${set}_${piece}` })
            event.shaped(
                Item.of(`celestisynth:${set}_${piece}`, 1),
                pattern,
                { x: mat, M: '#forge:ingots/mithril', H: '#forge:tools/hammers' }
            ).damageIngredient(Ingredient.of('#forge:tools/hammers'))
        })
    })
})
