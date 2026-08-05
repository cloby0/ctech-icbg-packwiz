ServerEvents.recipes(event => {

    // Keystone tax (2026-08-04). Only two recipes here are gateable: solar_crystal and lunar_stone
    // are gathered materials with no craft, and the 8 armour pieces already consume them plus
    // irons_spellbooks mithril, so they are not self-contained.
    //   K1  celestial_core  -- MagiChem Astral Observer. A celestial mod's core should be made by
    //       leaving it under the sky, not by a crafting grid.
    //   K2  starlit_factory -- Botania Runic Altar.
    event.remove({ id: 'celestisynth:celestial_core' })
    event.custom({
        type: 'magichem:illumination',
        input: 'irons_spellbooks:divine_pearl',
        lumins: { type: 1, minutes: 5 },
        result: { item: 'celestisynth:celestial_core', count: 1 }
    })

    event.remove({ id: 'celestisynth:supernal_netherite_ingot_smithing' })

    event.remove({ id: 'celestisynth:starlit_factory' })
    addRunicAltarRecipe(event, {
        output: { item: 'celestisynth:starlit_factory' },
        mana: RunicAltar.THAUMATURGE,
        ingredients: [
            { item: 'celestisynth:celestial_netherite_ingot', count: 2 },
            { item: 'irons_spellbooks:arcane_ingot' },
            { item: 'minecraft:smithing_table' },
            { item: 'minecraft:blast_furnace' },
            { item: 'minecraft:obsidian', count: 2 }
        ]
    })

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
