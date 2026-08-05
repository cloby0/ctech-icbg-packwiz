ServerEvents.recipes(event => {
    // Keystone tax (2026-08-04). This file was 52 crafting-grid recipes that never touched a magic
    // device. The mod's spine materials (irons_spellbooks:arcane_ingot, gtceu:luminessence_dust)
    // ALREADY pass through the Malum Spirit Altar in journeyman.js, so the fix is to tax the
    // devices and the top-end gear, not the materials:
    //   K1  apprentice_desk                      -- Manaweaving Altar
    //   K2  spellcaster_workbench / atelier       -- Runic Altar;  spell_calibration_bench -- Alchemy Table
    //   K3  the six endgame staves               -- Eldrin Altar
    // The ~35 mid-tier staves, guns and charms stay in the grid on purpose: they already consume
    // Spirit-Altar-made arcane ingot and luminessence, so they are not self-contained, and turning
    // 35 weapon recipes into rituals would be tedious to play for no extra dependency.



    // K1: the mod's entry device. Manaweaving Altar -- MNA owns study and scribing, and a desk you
    // learn at should be made by learning.
    event.remove({ id: 'apprenticecodex:apprentice_desk' })
    addMnaManaweavingRecipe(event, {
        output: 'apprenticecodex:apprentice_desk',
        items: ['gtceu:luminessence_dust', 'gtceu:luminessence_dust', 'irons_spellbooks:arcane_essence', '#minecraft:wooden_slabs', '#minecraft:wooden_slabs', '#minecraft:wooden_fences'],
        patterns: ['mna:triangle', 'mna:circle'],
        tier: 1
    })
    event.shaped('apprenticecodex:arcanum_in_a_jar', [
        'GAG',
        'GLG',
        'GMG'
    ], {
        G: 'minecraft:glass_pane',
        A: 'irons_spellbooks:arcane_ingot',
        L: 'gtceu:luminessence_dust',
        M: '#forge:tools/mallets'
    }).damageIngredient(Ingredient.of('#forge:tools/mallets'))

    event.remove({ id: 'apprenticecodex:essence_smoker' })
    event.shaped('apprenticecodex:essence_smoker', [
        'AMA',
        'FEF',
        'LCL'
    ], {
        A: 'irons_spellbooks:arcane_ingot',
        F: '#minecraft:wooden_fences',
        E: 'irons_spellbooks:arcane_essence',
        L: 'gtceu:luminessence_dust',
        C: 'minecraft:campfire',
        M: '#forge:tools/mallets'
    }).damageIngredient(Ingredient.of('#forge:tools/mallets'))

    event.remove({ id: 'apprenticecodex:rapid_spellcaster_round' })
    event.shaped(Item.of('apprenticecodex:rapid_spellcaster_round', 12), [
        'A ',
        'CH',
        'L '
    ], {
        A: 'minecraft:amethyst_shard',
        C: 'minecraft:copper_ingot',
        L: 'gtceu:luminessence_dust',
        H: '#forge:tools/hammers'
    }).damageIngredient(Ingredient.of('#forge:tools/hammers'))

    const apprenticeMageArmor = [
        ['apprentice_mage_scarf',    'irons_spellbooks:wandering_magician_helmet'],
        ['apprentice_mage_torso',    'irons_spellbooks:wandering_magician_chestplate'],
        ['apprentice_mage_leggings', 'irons_spellbooks:wandering_magician_leggings'],
        ['apprentice_mage_boots',    'irons_spellbooks:wandering_magician_boots'],
    ]
    apprenticeMageArmor.forEach(([piece, base]) => {
        event.remove({ id: `apprenticecodex:${piece}` })
        event.custom({
            'type': 'minecraft:smithing_transform',
            'template': { 'item': 'irons_spellbooks:magic_cloth' },
            'base': { 'item': base },
            'addition': { 'item': 'gtceu:luminessence_dust' },
            'result': { 'item': `apprenticecodex:${piece}` }
        })
    })


    // K2a: Runic Altar. The workbench every later staff is assembled on.
    event.remove({ id: 'apprenticecodex:spellcaster_workbench' })
    addRunicAltarRecipe(event, {
        output: { item: 'apprenticecodex:spellcaster_workbench' },
        mana: Mana.JOURNEYMAN,
        ingredients: [
            { item: 'gtceu:luminessence_dust' },
            { item: 'irons_spellbooks:arcane_ingot' },
            { item: 'minecraft:oak_slab', count: 3 },
            { item: 'minecraft:oak_fence', count: 2 }
        ]
    })
    // K2b: Alchemy Table. Calibration is a measured, LP-fed process, not carpentry.
    event.remove({ id: 'apprenticecodex:spell_calibration_bench' })
    addAlchemyTableRecipe(event, {
        output: 'apprenticecodex:spell_calibration_bench',
        input: ['minecraft:amethyst_shard', 'gtceu:luminessence_dust', 'irons_spellbooks:scroll', 'minecraft:oak_slab', 'minecraft:oak_fence'],
        syphon: LP.JOURNEYMAN,
        ticks: 200,
        upgradeLevel: 1
    })
    event.shaped('apprenticecodex:copper_swingcast_staff', [
        'HAB',
        'SWC',
        'C F'
    ], {
        A: 'irons_spellbooks:arcane_ingot',
        B: 'irons_spellbooks:lightning_bottle',
        S: 'gtceu:luminessence_dust',
        W: 'gtceu:long_wood_rod',
        C: 'create:copper_sheet',
        H: '#forge:tools/hammers',
        F: '#forge:tools/files'
    }).damageIngredient(Ingredient.of('#forge:tools/hammers')).damageIngredient(Ingredient.of('#forge:tools/files'))

    event.remove({ id: 'apprenticecodex:iron_swingcast_staff' })
    event.shaped('apprenticecodex:iron_swingcast_staff', [
        'HAG',
        'SWI',
        'I F'
    ], {
        A: 'irons_spellbooks:arcane_ingot',
        G: 'minecraft:glass',
        S: 'gtceu:luminessence_dust',
        W: 'gtceu:long_wood_rod',
        I: 'create:iron_sheet',
        H: '#forge:tools/hammers',
        F: '#forge:tools/files'
    }).damageIngredient(Ingredient.of('#forge:tools/hammers')).damageIngredient(Ingredient.of('#forge:tools/files'))

    event.remove({ id: 'apprenticecodex:silver_swingcast_staff' })
    event.shaped('apprenticecodex:silver_swingcast_staff', [
        'HAG',
        'SWR',
        'A F'
    ], {
        A: 'irons_spellbooks:arcane_ingot',
        G: 'minecraft:glass',
        S: 'gtceu:luminessence_dust',
        W: 'gtceu:long_wood_rod',
        R: 'irons_spellbooks:silver_ring',
        H: '#forge:tools/hammers',
        F: '#forge:tools/files'
    }).damageIngredient(Ingredient.of('#forge:tools/hammers')).damageIngredient(Ingredient.of('#forge:tools/files'))

    event.remove({ id: 'apprenticecodex:grimoire_manifest' })
    event.shaped('apprenticecodex:grimoire_manifest', [
        'FE ',
        'SBS',
        ' S '
    ], {
        E: 'minecraft:ender_eye',
        S: 'gtceu:luminessence_dust',
        B: 'irons_spellbooks:ruined_book',
        F: '#forge:tools/files'
    }).damageIngredient(Ingredient.of('#forge:tools/files'))

    event.remove({ id: 'apprenticecodex:spellcasters_flask' })
    event.shaped('apprenticecodex:spellcasters_flask', [
        'FA ',
        'DBD',
        ' S '
    ], {
        A: 'irons_spellbooks:arcane_ingot',
        D: 'minecraft:diamond',
        B: 'minecraft:glass_bottle',
        S: 'gtceu:luminessence_dust',
        F: '#forge:tools/files'
    }).damageIngredient(Ingredient.of('#forge:tools/files'))

    event.remove({ id: 'apprenticecodex:spellcaster_ammo_pouch' })
    event.shaped('apprenticecodex:spellcaster_ammo_pouch', [
        'SAS',
        'LCL',
        'LKL'
    ], {
        S: 'gtceu:luminessence_dust',
        A: 'irons_spellbooks:arcane_ingot',
        L: 'minecraft:leather',
        C: '#forge:chests',
        K: '#forge:tools/knives'
    }).damageIngredient(Ingredient.of('#forge:tools/knives'))

    event.remove({ id: 'apprenticecodex:spellcaster_quiver' })
    event.shaped('apprenticecodex:spellcaster_quiver', [
        'SHS',
        'ACA',
        ' A '
    ], {
        S: 'gtceu:luminessence_dust',
        A: 'irons_spellbooks:arcane_ingot',
        C: '#forge:chests',
        H: '#forge:tools/hammers'
    }).damageIngredient(Ingredient.of('#forge:tools/hammers'))

    event.remove({ id: 'apprenticecodex:explorers_cane' })
    event.shaped('apprenticecodex:explorers_cane', [
        'FCG',
        ' IA',
        'S  '
    ], {
        C: 'minecraft:compass',
        G: 'gtceu:luminessence_dust',
        I: 'irons_spellbooks:graybeard_staff',
        A: 'irons_spellbooks:arcane_ingot',
        S: 'gtceu:wood_rod',
        F: '#forge:tools/files'
    }).damageIngredient(Ingredient.of('#forge:tools/files'))

    event.remove({ id: 'apprenticecodex:magi_compressor_gadget' })
    event.shaped('apprenticecodex:magi_compressor_gadget', [
        'TST',
        'SWS',
        'ABA'
    ], {
        T: 'create:copper_backtank',
        S: 'gtceu:luminessence_dust',
        A: 'irons_spellbooks:arcane_ingot',
        B: '#forge:ingots/brass',
        W: '#forge:tools/wrenches'
    }).damageIngredient(Ingredient.of('#forge:tools/wrenches'))

    const enchantressArmor = [
        ['enchantress_hat',      'irons_spellbooks:pumpkin_helmet'],
        ['enchantress_robe',     'irons_spellbooks:pumpkin_chestplate'],
        ['enchantress_leggings', 'irons_spellbooks:pumpkin_leggings'],
        ['enchantress_boots',    'irons_spellbooks:pumpkin_boots'],
    ]
    enchantressArmor.forEach(([piece, base]) => {
        event.remove({ id: `apprenticecodex:${piece}` })
        event.custom({
            'type': 'minecraft:smithing_transform',
            'template': { 'item': 'irons_spellbooks:hogskin' },
            'base': { 'item': base },
            'addition': { 'item': 'gtceu:luminessence_dust' },
            'result': { 'item': `apprenticecodex:${piece}` }
        })
    })


    event.remove({ id: 'apprenticecodex:copper_spellcaster_gun' })
    event.shaped('apprenticecodex:copper_spellcaster_gun', [
        'CAL',
        'DCS',
        'FTC'
    ], {
        C: 'create:copper_sheet',
        A: 'irons_spellbooks:arcane_ingot',
        L: 'irons_spellbooks:lightning_bottle',
        S: 'gtceu:luminessence_dust',
        T: 'gtceu:steel_ingot',
        D: '#forge:tools/screwdrivers',
        F: '#forge:tools/files'
    }).damageIngredient(Ingredient.of('#forge:tools/screwdrivers')).damageIngredient(Ingredient.of('#forge:tools/files'))

    event.remove({ id: 'apprenticecodex:iron_spellcaster_gun' })
    event.shaped('apprenticecodex:iron_spellcaster_gun', [
        'IAE',
        'DIS',
        'FTI'
    ], {
        I: 'create:iron_sheet',
        A: 'irons_spellbooks:arcane_ingot',
        E: 'minecraft:ender_pearl',
        S: 'gtceu:luminessence_dust',
        T: 'gtceu:steel_ingot',
        D: '#forge:tools/screwdrivers',
        F: '#forge:tools/files'
    }).damageIngredient(Ingredient.of('#forge:tools/screwdrivers')).damageIngredient(Ingredient.of('#forge:tools/files'))

    event.remove({ id: 'apprenticecodex:spell_dispenser' })
    event.shaped('apprenticecodex:spell_dispenser', [
        'XDX',
        'WBW',
        'AGA'
    ], {
        X: 'gtceu:steel_ingot',
        W: 'gtceu:long_wood_rod',
        B: 'minecraft:bow',
        A: 'irons_spellbooks:arcane_ingot',
        G: 'gtceu:luminessence_dust',
        D: '#forge:tools/screwdrivers'
    }).damageIngredient(Ingredient.of('#forge:tools/screwdrivers'))


    event.remove({ id: 'apprenticecodex:gold_swingcast_staff' })
    event.shaped('apprenticecodex:gold_swingcast_staff', [
        'MAG',
        'HWI',
        'I F'
    ], {
        A: 'irons_spellbooks:arcane_ingot',
        G: 'minecraft:glass',
        H: 'gtceu:holy_silver_ingot',
        W: 'gtceu:iron_rod',
        I: 'create:golden_sheet',
        M: '#forge:tools/hammers',
        F: '#forge:tools/files'
    }).damageIngredient(Ingredient.of('#forge:tools/hammers')).damageIngredient(Ingredient.of('#forge:tools/files'))

    event.remove({ id: 'apprenticecodex:diamond_swingcast_staff' })
    event.shaped('apprenticecodex:diamond_swingcast_staff', [
        'MAG',
        'HWD',
        'D F'
    ], {
        A: 'irons_spellbooks:arcane_ingot',
        G: 'minecraft:glass',
        H: 'gtceu:holy_silver_ingot',
        W: 'gtceu:iron_rod',
        D: 'minecraft:diamond',
        M: '#forge:tools/hammers',
        F: '#forge:tools/files'
    }).damageIngredient(Ingredient.of('#forge:tools/hammers')).damageIngredient(Ingredient.of('#forge:tools/files'))

    event.remove({ id: 'apprenticecodex:crystal_bladed_staff' })
    event.shaped('apprenticecodex:crystal_bladed_staff', [
        'FHS',
        ' AH',
        'H  '
    ], {
        H: 'gtceu:holy_silver_ingot',
        S: 'minecraft:diamond_sword',
        A: 'irons_spellbooks:arcane_ingot',
        F: '#forge:tools/files'
    }).damageIngredient(Ingredient.of('#forge:tools/files'))

    event.remove({ id: 'apprenticecodex:reflectcast_shield' })
    event.shaped('apprenticecodex:reflectcast_shield', [
        'MGA',
        'HSH',
        'AGA'
    ], {
        A: 'irons_spellbooks:arcane_ingot',
        G: 'minecraft:glass_pane',
        H: 'gtceu:holy_silver_ingot',
        S: 'minecraft:shield',
        M: '#forge:tools/hammers'
    }).damageIngredient(Ingredient.of('#forge:tools/hammers'))

    // K2c: Runic Altar. The atelier is where finished gear gets its character.
    event.remove({ id: 'apprenticecodex:atelier_station' })
    addRunicAltarRecipe(event, {
        output: { item: 'apprenticecodex:atelier_station' },
        mana: Mana.JOURNEYMAN,
        ingredients: [
            { item: 'apprenticecodex:spellcasters_flask' },
            { item: 'irons_spellbooks:magic_cloth' },
            { item: 'gtceu:holy_silver_ingot' },
            { item: 'minecraft:oak_slab', count: 3 }
        ]
    })
    event.shaped('apprenticecodex:autocast_amulet', [
        'HDH',
        'ACA',
        'FM '
    ], {
        H: 'gtceu:holy_silver_ingot',
        A: 'irons_spellbooks:arcane_ingot',
        C: 'minecraft:clock',
        M: 'irons_spellbooks:mithril_scrap',
        D: '#forge:tools/screwdrivers',
        F: '#forge:tools/files'
    }).damageIngredient(Ingredient.of('#forge:tools/screwdrivers')).damageIngredient(Ingredient.of('#forge:tools/files'))

    const stealthRuneArmor = [
        ['stealth_rune_armor_head', 'minecraft:golden_helmet'],
        ['stealth_rune_armor_body', 'minecraft:golden_chestplate'],
        ['stealth_rune_armor_leg',  'minecraft:golden_leggings'],
        ['stealth_rune_armor_foot', 'minecraft:golden_boots'],
    ]
    stealthRuneArmor.forEach(([piece, base]) => {
        event.remove({ id: `apprenticecodex:${piece}` })
        event.custom({
            'type': 'minecraft:smithing_transform',
            'template': { 'item': 'irons_spellbooks:magic_cloth' },
            'base': { 'item': base },
            'addition': { 'item': 'gtceu:holy_silver_ingot' },
            'result': { 'item': `apprenticecodex:${piece}` }
        })
    })


    event.remove({ id: 'apprenticecodex:gold_spellcaster_gun' })
    event.shaped('apprenticecodex:gold_spellcaster_gun', [
        'TAH',
        'DTR',
        'FBT'
    ], {
        T: 'gtceu:stainless_steel_ingot',
        A: 'irons_spellbooks:arcane_ingot',
        H: 'gtceu:holy_silver_ingot',
        R: 'minecraft:redstone',
        B: '#minecraft:buttons',
        D: '#forge:tools/screwdrivers',
        F: '#forge:tools/files'
    }).damageIngredient(Ingredient.of('#forge:tools/screwdrivers')).damageIngredient(Ingredient.of('#forge:tools/files'))

    event.remove({ id: 'apprenticecodex:multipurpose_staffrifle' })
    addEldrinAltarRecipe(event, {
        output: 'apprenticecodex:multipurpose_staffrifle',
        items: ['irons_spellbooks:mithril_ingot', 'irons_spellbooks:mithril_ingot', 'irons_spellbooks:mithril_ingot', 'irons_spellbooks:weapon_parts', 'irons_spellbooks:cooldown_upgrade_orb', 'gtceu:holy_silver_ingot'],
        affinity: 'ender',
        power: LP.ALCHEMIST
    })
    event.shaped('apprenticecodex:circuit_heat_staff', [
        'CPH',
        'DWT',
        'P  '
    ], {
        P: 'irons_spellbooks:pyrium_ingot',
        H: 'gtceu:holy_silver_ingot',
        W: 'gtceu:iron_rod',
        T: 'gtceu:stainless_steel_ingot',
        C: '#forge:tools/wire_cutters',
        D: '#forge:tools/screwdrivers'
    }).damageIngredient(Ingredient.of('#forge:tools/wire_cutters')).damageIngredient(Ingredient.of('#forge:tools/screwdrivers'))


    event.remove({ id: 'apprenticecodex:mithril_freecast_staff' })
    addEldrinAltarRecipe(event, {
        output: 'apprenticecodex:mithril_freecast_staff',
        items: ['irons_spellbooks:arcane_ingot', 'irons_spellbooks:magic_cloth', 'irons_spellbooks:weapon_parts', 'gtceu:prima_materia_plate', 'irons_spellbooks:mithril_scrap'],
        affinity: 'air',
        power: LP.ALCHEMIST
    })
    event.shaped('apprenticecodex:revolvercast_staff', [
        'DAG',
        'LPM',
        'X F'
    ], {
        A: 'irons_spellbooks:arcane_ingot',
        G: 'minecraft:glass',
        L: 'irons_spellbooks:magic_cloth',
        P: 'gtceu:prima_materia_plate',
        M: 'irons_spellbooks:mithril_ingot',
        X: 'irons_spellbooks:pyrium_ingot',
        D: '#forge:tools/screwdrivers',
        F: '#forge:tools/files'
    }).damageIngredient(Ingredient.of('#forge:tools/screwdrivers')).damageIngredient(Ingredient.of('#forge:tools/files'))

    event.remove({ id: 'apprenticecodex:elemental_bow' })
    event.shaped('apprenticecodex:elemental_bow', [
        'CAS',
        'PMS',
        ' AS'
    ], {
        A: 'irons_spellbooks:arcane_ingot',
        S: 'minecraft:string',
        P: 'gtceu:prima_materia_plate',
        M: 'irons_spellbooks:mithril_scrap',
        C: '#forge:tools/wire_cutters'
    }).damageIngredient(Ingredient.of('#forge:tools/wire_cutters'))

    event.remove({ id: 'apprenticecodex:charged_twin_blade_staff' })
    event.shaped('apprenticecodex:charged_twin_blade_staff', [
        'HPS',
        'FTP',
        'A  '
    ], {
        P: 'gtceu:prima_materia_plate',
        S: 'minecraft:netherite_sword',
        T: 'minecraft:trident',
        A: 'irons_spellbooks:arcane_ingot',
        H: '#forge:tools/hammers',
        F: '#forge:tools/files'
    }).damageIngredient(Ingredient.of('#forge:tools/hammers')).damageIngredient(Ingredient.of('#forge:tools/files'))

    event.remove({ id: 'apprenticecodex:mana_force_blade' })
    event.shaped('apprenticecodex:mana_force_blade', [
        'CAH',
        'RAP',
        'PSW'
    ], {
        C: 'gtceu:prima_materia_dust',
        A: 'irons_spellbooks:arcane_ingot',
        R: 'irons_spellbooks:protection_rune',
        P: 'gtceu:prima_materia_plate',
        S: 'minecraft:netherite_sword',
        W: 'irons_spellbooks:mithril_scrap',
        H: '#forge:tools/hammers'
    }).damageIngredient(Ingredient.of('#forge:tools/hammers'))

    event.remove({ id: 'apprenticecodex:smashcast_scepter' })
    event.shaped('apprenticecodex:smashcast_scepter', [
        'HMI',
        ' WM',
        'P  '
    ], {
        M: 'irons_spellbooks:mithril_scrap',
        I: 'minecraft:iron_block',
        W: 'irons_spellbooks:weapon_parts',
        P: 'gtceu:prima_materia_plate',
        H: '#forge:tools/hammers'
    }).damageIngredient(Ingredient.of('#forge:tools/hammers'))

    event.remove({ id: 'apprenticecodex:photon_siphon' })
    addEldrinAltarRecipe(event, {
        output: 'apprenticecodex:photon_siphon',
        items: ['gtceu:prima_materia_plate', 'gtceu:prima_materia_plate', 'irons_spellbooks:arcane_ingot', 'gtceu:glass_lens', 'gtceu:glass_lens', 'irons_spellbooks:mithril_scrap'],
        affinity: 'arcane',
        power: LP.ALCHEMIST
    })
    event.shaped('apprenticecodex:mana_thruster', [
        'WSF',
        'PAP',
        'MSM'
    ], {
        F: 'minecraft:feather',
        S: 'gtceu:prima_materia_dust',
        P: 'gtceu:prima_materia_plate',
        A: 'irons_spellbooks:arcane_ingot',
        M: 'irons_spellbooks:mithril_scrap',
        W: '#forge:tools/wrenches'
    }).damageIngredient(Ingredient.of('#forge:tools/wrenches'))

    event.remove({ id: 'apprenticecodex:scarlet_thirst' })
    event.shaped('apprenticecodex:scarlet_thirst', [
        'VIP',
        'IMI',
        'FI '
    ], {
        V: 'irons_spellbooks:blood_vial',
        I: 'irons_spellbooks:arcane_ingot',
        P: 'gtceu:prima_materia_plate',
        M: 'irons_spellbooks:mithril_scrap',
        F: '#forge:tools/files'
    }).damageIngredient(Ingredient.of('#forge:tools/files'))

    event.remove({ id: 'apprenticecodex:protection_spell_supporter' })
    event.shaped('apprenticecodex:protection_spell_supporter', [
        'DP ',
        'PMP',
        'ARA'
    ], {
        P: 'gtceu:prima_materia_plate',
        M: 'irons_spellbooks:mithril_scrap',
        A: 'irons_spellbooks:arcane_ingot',
        R: 'irons_spellbooks:protection_rune',
        D: '#forge:tools/screwdrivers'
    }).damageIngredient(Ingredient.of('#forge:tools/screwdrivers'))

    event.remove({ id: 'apprenticecodex:craftsmans_delight' })
    event.shaped('apprenticecodex:craftsmans_delight', [
        'RIP',
        'IMI',
        'HIF'
    ], {
        R: 'irons_spellbooks:nature_rune',
        I: 'irons_spellbooks:arcane_ingot',
        P: 'gtceu:prima_materia_plate',
        M: 'irons_spellbooks:mithril_scrap',
        H: '#forge:tools/hammers',
        F: '#forge:tools/files'
    }).damageIngredient(Ingredient.of('#forge:tools/hammers')).damageIngredient(Ingredient.of('#forge:tools/files'))

    event.remove({ id: 'apprenticecodex:mana_shield_charm' })
    event.shaped('apprenticecodex:mana_shield_charm', [
        'FRS',
        'APA',
        'SMS'
    ], {
        S: 'gtceu:prima_materia_dust',
        R: 'irons_spellbooks:protection_rune',
        A: 'irons_spellbooks:arcane_ingot',
        P: 'gtceu:prima_materia_plate',
        M: 'irons_spellbooks:mithril_scrap',
        F: '#forge:tools/files'
    }).damageIngredient(Ingredient.of('#forge:tools/files'))

    event.remove({ id: 'apprenticecodex:jumpcast_charm' })
    event.shaped('apprenticecodex:jumpcast_charm', [
        'SRS',
        'PAP',
        'DSM'
    ], {
        S: 'apprenticecodex:spellstained_arcane_ingot',
        R: 'gtceu:steel_spring',
        P: 'gtceu:prima_materia_plate',
        A: 'gtceu:prima_materia_dust',
        M: 'irons_spellbooks:mithril_scrap',
        D: '#forge:tools/screwdrivers'
    }).damageIngredient(Ingredient.of('#forge:tools/screwdrivers'))

    event.remove({ id: 'apprenticecodex:spell_cast_parrying_ring' })
    event.shaped('apprenticecodex:spell_cast_parrying_ring', [
        'SIR',
        'IPI',
        'HIF'
    ], {
        S: 'apprenticecodex:reflectcast_shield',
        I: 'irons_spellbooks:arcane_ingot',
        R: 'irons_spellbooks:protection_rune',
        P: 'gtceu:prima_materia_plate',
        H: '#forge:tools/hammers',
        F: '#forge:tools/files'
    }).damageIngredient(Ingredient.of('#forge:tools/hammers')).damageIngredient(Ingredient.of('#forge:tools/files'))

    const chromaticArmor = [
        ['chromatic_magia_dress_hat',      'irons_spellbooks:wizard_base_helmet'],
        ['chromatic_magia_dress_coat',     'irons_spellbooks:wizard_base_chestplate'],
        ['chromatic_magia_dress_leggings', 'irons_spellbooks:wizard_base_leggings'],
        ['chromatic_magia_dress_boots',    'irons_spellbooks:wizard_base_boots'],
    ]
    chromaticArmor.forEach(([piece, baseTag]) => {
        event.remove({ id: `apprenticecodex:${piece}` })
        event.custom({
            'type': 'minecraft:smithing_transform',
            'template': { 'item': 'irons_spellbooks:arcane_rune' },
            'base': { 'tag': baseTag },
            'addition': { 'item': 'gtceu:prima_materia_plate' },
            'result': { 'item': `apprenticecodex:${piece}` }
        })
    })


    event.remove({ id: 'apprenticecodex:diamond_spellcaster_gun' })
    event.shaped('apprenticecodex:diamond_spellcaster_gun', [
        'TMP',
        'DTR',
        'FBT'
    ], {
        T: 'gtceu:titanium_ingot',
        M: 'irons_spellbooks:mithril_ingot',
        P: 'gtceu:prima_materia_plate',
        R: 'minecraft:redstone',
        B: '#minecraft:buttons',
        D: '#forge:tools/screwdrivers',
        F: '#forge:tools/files'
    }).damageIngredient(Ingredient.of('#forge:tools/screwdrivers')).damageIngredient(Ingredient.of('#forge:tools/files'))

    event.remove({ id: 'apprenticecodex:multicast_echo_staff' })
    event.shaped('apprenticecodex:multicast_echo_staff', [
        'HME',
        'FPT',
        'WT '
    ], {
        M: 'irons_spellbooks:mithril_ingot',
        E: 'minecraft:echo_shard',
        P: 'gtceu:prima_materia_plate',
        T: 'gtceu:titanium_ingot',
        W: 'irons_spellbooks:weapon_parts',
        H: '#forge:tools/hammers',
        F: '#forge:tools/files'
    }).damageIngredient(Ingredient.of('#forge:tools/hammers')).damageIngredient(Ingredient.of('#forge:tools/files'))


    event.remove({ id: 'apprenticecodex:zenith_staff' })
    addEldrinAltarRecipe(event, {
        output: 'apprenticecodex:zenith_staff',
        items: ['irons_spellbooks:mithril_ingot', 'irons_spellbooks:divine_soulshard', 'botania:manasteel_ingot', 'irons_spellbooks:mithril_weave', 'irons_spellbooks:weapon_parts'],
        affinity: 'arcane',
        power: LP.ALCHEMIST
    })
    event.shaped('apprenticecodex:focus_staffbow', [
        'CMS',
        'DXS',
        ' MS'
    ], {
        M: 'irons_spellbooks:mithril_ingot',
        S: 'minecraft:string',
        D: 'irons_spellbooks:divine_soulshard',
        X: 'botania:manasteel_ingot',
        C: '#forge:tools/wire_cutters'
    }).damageIngredient(Ingredient.of('#forge:tools/wire_cutters'))

    event.remove({ id: 'apprenticecodex:illuminate_stellar_staff' })
    addEldrinAltarRecipe(event, {
        output: 'apprenticecodex:illuminate_stellar_staff',
        items: ['botania:mana_glass', 'botania:mana_glass', 'minecraft:netherite_sword', 'minecraft:nether_star', 'botania:manasteel_ingot'],
        affinity: 'fire',
        power: LP.ALCHEMIST
    })
    event.shaped('apprenticecodex:satellite_followcast_amulet', [
        'X X',
        'ADA',
        'FM '
    ], {
        X: 'botania:manasteel_ingot',
        A: 'apprenticecodex:spellstained_arcane_ingot',
        D: 'minecraft:diamond',
        M: 'irons_spellbooks:mithril_scrap',
        F: '#forge:tools/files'
    }).damageIngredient(Ingredient.of('#forge:tools/files'))

    event.remove({ id: 'apprenticecodex:scrollcaster_gauntlet' })
    event.shaped('apprenticecodex:scrollcaster_gauntlet', [
        'HMF',
        'MDM',
        'XBX'
    ], {
        M: 'irons_spellbooks:mithril_scrap',
        D: 'minecraft:diamond',
        X: 'botania:manasteel_ingot',
        B: 'minecraft:chiseled_bookshelf',
        H: '#forge:tools/hammers',
        F: '#forge:tools/files'
    }).damageIngredient(Ingredient.of('#forge:tools/hammers')).damageIngredient(Ingredient.of('#forge:tools/files'))

    event.remove({ id: 'apprenticecodex:absorption_amplify_amulet' })
    event.shaped('apprenticecodex:absorption_amplify_amulet', [
        'XIX',
        'MGM',
        'FM '
    ], {
        X: 'botania:manasteel_ingot',
        I: 'irons_spellbooks:mithril_ingot',
        M: 'irons_spellbooks:mithril_scrap',
        G: 'minecraft:enchanted_golden_apple',
        F: '#forge:tools/files'
    }).damageIngredient(Ingredient.of('#forge:tools/files'))

    event.remove({ id: 'apprenticecodex:archivists_grimoire' })
    event.shaped('apprenticecodex:archivists_grimoire', [
        'KXM',
        'CBC',
        'MWM'
    ], {
        M: 'irons_spellbooks:mithril_scrap',
        X: 'minecraft:iron_ingot',
        C: '#forge:chests',
        B: 'minecraft:book',
        W: 'irons_spellbooks:mithril_weave',
        K: '#forge:tools/knives'
    }).damageIngredient(Ingredient.of('#forge:tools/knives'))

    const elementMaidenArmor = [
        ['element_maiden_robe_ribbon',   'irons_spellbooks:wizard_base_helmet'],
        ['element_maiden_robe_robe',     'irons_spellbooks:wizard_base_chestplate'],
        ['element_maiden_robe_leggings', 'irons_spellbooks:wizard_base_leggings'],
        ['element_maiden_robe_boots',    'irons_spellbooks:wizard_base_boots'],
    ]
    elementMaidenArmor.forEach(([piece, baseTag]) => {
        event.remove({ id: `apprenticecodex:${piece}` })
        event.custom({
            'type': 'minecraft:smithing_transform',
            'template': { 'item': 'irons_spellbooks:protection_rune' },
            'base': { 'tag': baseTag },
            'addition': { 'item': 'botania:manasteel_ingot' },
            'result': { 'item': `apprenticecodex:${piece}` }
        })
    })
})
