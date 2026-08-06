// Hexerei keystones -- 2026-08-05. The mod was station-only (Mixing Cauldron) with its own witch
// mechanics (crow familiars, brooms, candles) never touched by the pack. Crow Ankh Amulet is a
// totem-of-undying-class death-protection item and was completely ungated -- gate PvP-breaking
// items harder than expensive ones (philosophy.md). Broom Thruster Brush already has a GT
// keystone (techMagicInteraction.js); these two round it out to 2-3 keystones on different
// stations per the Keystone Tax rule.
ServerEvents.recipes(event => {

    // Crow Blank Amulet: binding a familiar. Malum's Spirit Altar is the pack's "animate a
    // purpose" station. Aerial spirit fits a bird familiar and naturally places crow taming at
    // Journeyman+, where the Spirit Altar exists (malum.js gates it Journeyman/MV).
    event.remove({ id: 'hexerei:crow_blank_amulet_from_mixing_cauldron' })
    addSpiritInfusion(event, {
        output: 'hexerei:crow_blank_amulet',
        input: 'minecraft:gold_ingot',
        spirits: [{ type: 'aerial', count: 2 }],
        extraItems: [{ item: 'hexerei:mandrake_root' }, { item: 'minecraft:gold_nugget', count: 4 }]
    })

    // Crow Ankh Amulet: death protection for the crow, and the crow's death saves the player
    // like a totem. Native recipe already spends a real totem of undying; adding a Blood Magic
    // LP syphon at Initiate ties the capstone to the pack's own economy instead of leaving it a
    // pure vanilla-farm item. Trimmed from 8 native ingredients to fit the Alchemy Table's
    // 6-slot cap -- kept the totem, dropped the duplicate leaf/flower pairs down to one each.
    event.remove({ id: 'hexerei:crow_ankh_amulet_from_mixing_cauldron' })
    addAlchemyTableRecipe(event, {
        output: 'hexerei:crow_ankh_amulet',
        input: [
            'hexerei:crow_blank_amulet',
            'minecraft:totem_of_undying',
            { item: 'minecraft:glow_berries', count: 2 },
            'hexerei:dried_mugwort_flowers',
            'hexerei:dried_yellow_dock_flowers'
        ],
        syphon: LP.INITIATE,
        ticks: 200,
        upgradeLevel: 2
    })

})
