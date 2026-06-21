ItemEvents.tooltip(event => {
    event.add('kubejs:matter_energy_circuit', '§7A chip that comes with the firmware to think in ME')

    event.add('kubejs:draconic_resonance_assembly', '§4UHV-Tier Circuit')
    event.add('kubejs:chaos_harmonic_mainframe', '§aUEV-Tier Circuit')
    event.add('kubejs:cumium_singularity_core', '§2UIV-Tier Circuit')

    // Magic tier labels — mirrors GTCEu voltage tier display.
    // Tags defined in itemTags.js; add items there to extend a tier's tooltip.
    const TIER_ITEMS = [
        // apprentice
        'gtceu:luminessence_dust', 'hexcasting:charged_amethyst', 'irons_spellbooks:magic_cloth',
        // journeyman
        'ars_nouveau:source_gem', 'kubejs:resonant_zanite_crystal', 'aether_redux:veridium_ingot',
        'irons_spellbooks:arcane_ingot', 'irons_spellbooks:cinder_essence',
        'irons_spellbooks:arcane_rune', 'irons_spellbooks:blood_rune', 'irons_spellbooks:cooldown_rune',
        'irons_spellbooks:ender_rune', 'irons_spellbooks:evocation_rune', 'irons_spellbooks:fire_rune',
        'irons_spellbooks:holy_rune', 'irons_spellbooks:ice_rune', 'irons_spellbooks:lightning_rune',
        'irons_spellbooks:nature_rune', 'irons_spellbooks:protection_rune',
        'cataclysm_spellbooks:abyssal_rune', 'cataclysm_spellbooks:technomancy_rune',
        // initiate
        'gtceu:holy_silver_ingot', 'kubejs:sacred_ambrosium_shard', 'irons_spellbooks:divine_pearl',
        // sorcerer
        'gtceu:prima_materia_ingot', 'aether_redux:gravitite_ingot', 'kubejs:element_attunement_stone',
        'kubejs:chaos_essence', 'irons_spellbooks:pyrium_ingot',
        // alchemist
        'botania:manasteel_ingot', 'gtceu:abstract_metal_ingot', 'kubejs:hexed_amethyst_core',
        // thaumaturge
        'botania:terrasteel_ingot', 'kubejs:florid_compound', 'kubejs:living_metalloid', 'kubejs:rune_of_frost',
        // arcanist
        'botania:elementium_ingot', 'kubejs:weak_elementium_dust', 'kubejs:elven_concentrate', 'kubejs:elementite_dust',
        'extrabotany:aerialite_ingot', 'extrabotany:photonium_ingot', 'extrabotany:shadowium_ingot',
        // sage
        'botania:gaia_ingot', 'kubejs:vengeful_gaia_spirit', 'kubejs:soul_of_gaia', 'kubejs:boundless_gaia_spirit_ingot',
        // sage+
        'extrabotany:orichalcos_ingot', 'extrabotany:hero_medal'
    ]

    const TIER_LABELS = {
        'kubejs:magic/apprentice':    'Magic Tier: §7Apprentice',
        'kubejs:magic/journeyman':    'Magic Tier: §aJourneyman',
        'kubejs:magic/initiate':      'Magic Tier: §6Initiate',
        'kubejs:magic/sorcerer':      'Magic Tier: §5Sorcerer',
        'kubejs:magic/alchemist':     'Magic Tier: §bAlchemist',
        'kubejs:magic/thaumaturge':   'Magic Tier: §dThaumaturge',
        'kubejs:magic/arcanist':      'Magic Tier: §9Arcanist',
        'kubejs:magic/sage':          'Magic Tier: §eSage',
        'kubejs:magic/sage_plus':     'Magic Tier: §4Sage+'
    }

    event.addAdvanced(TIER_ITEMS, (item, advanced, tooltip) => {
        for (const [tag, label] of Object.entries(TIER_LABELS)) {
            if (item.hasTag(tag)) {
                tooltip.add(Text.of(label))
                return
            }
        }
    })

    event.add('kubejs:element_attunement_stone', '§7Obtained from killing the Sun Spirit')

    event.add('draconicevolution:draconium_ingot', [
        '§5UV-Tier Material',
        '§7Element: §5Draconium (Dc-216)'
    ])
    event.add('draconicevolution:awakened_draconium_ingot', [
        '§6UHV-Tier Material',
        '§7Element: §6Draconium-248 (Dc-248, isotope)'
    ])

})
