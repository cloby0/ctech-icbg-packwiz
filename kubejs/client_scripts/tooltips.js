ItemEvents.tooltip(event => {
    event.add('kubejs:matter_energy_circuit', 'A chip that comes with the firmware to think in ME')

    // Magic tier labels — mirrors GTCEu voltage tier display.
    // Tags defined in itemTags.js; add items there to extend a tier's tooltip.
    const TIER_ITEMS = [
        // apprentice
        'gtceu:luminessence_dust',
        // journeyman
        'ars_nouveau:source_gem', 'kubejs:resonant_zanite_crystal',
        // initiate
        'gtceu:holy_silver_ingot', 'kubejs:sacred_ambrosium_shard', 'irons_spellbooks:divine_pearl',
        // sorcerer
        'gtceu:prima_materia_ingot', 'aether_redux:gravitite_ingot', 'kubejs:element_attunement_stone', 'kubejs:chaos_essence',
        // alchemist
        'botania:manasteel_ingot', 'gtceu:abstract_metal_ingot', 'kubejs:hexed_amethyst_core',
        // thaumaturge
        'botania:terrasteel_ingot', 'kubejs:florid_compound', 'kubejs:living_metalloid', 'kubejs:rune_of_frost',
        // arcanist
        'botania:elementium_ingot', 'kubejs:weak_elementium_dust', 'kubejs:elven_concentrate', 'kubejs:elementite_dust',
        // sage
        'botania:gaia_ingot', 'kubejs:vengeful_gaia_spirit', 'kubejs:soul_of_gaia', 'kubejs:boundless_gaia_spirit_ingot'
    ]

    const TIER_LABELS = {
        'magic:tier/apprentice':  '§7[Apprentice]',
        'magic:tier/journeyman':  '§a[Journeyman]',
        'magic:tier/initiate':    '§6[Initiate]',
        'magic:tier/sorcerer':    '§5[Sorcerer]',
        'magic:tier/alchemist':   '§b[Alchemist]',
        'magic:tier/thaumaturge': '§d[Thaumaturge]',
        'magic:tier/arcanist':    '§9[Arcanist]',
        'magic:tier/sage':        '§e[Sage]'
    }

    event.addAdvanced(TIER_ITEMS, (item, advanced, tooltip) => {
        for (const [tag, label] of Object.entries(TIER_LABELS)) {
            if (item.hasTag(tag)) {
                tooltip.add(Text.of(label))
                return
            }
        }
    })
})
