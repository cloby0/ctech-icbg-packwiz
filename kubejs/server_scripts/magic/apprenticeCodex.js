ServerEvents.recipes(event => {

    // ===== APPRENTICE (LV magic — luminessence_dust) =====

    // apprentice_desk: copper corners → luminessence_dust
    event.remove({ id: 'apprenticecodex:apprentice_desk' })
    event.shaped('apprenticecodex:apprentice_desk', [
        'CAC',
        'SSS',
        'F F'
    ], {
        C: 'gtceu:luminessence_dust',
        A: 'irons_spellbooks:arcane_essence',
        S: '#minecraft:wooden_slabs',
        F: '#minecraft:wooden_fences'
    })

    // arcanum_in_a_jar: redstone → luminessence_dust
    event.remove({ id: 'apprenticecodex:arcanum_in_a_jar' })
    event.shaped('apprenticecodex:arcanum_in_a_jar', [
        'GAG',
        'GLG',
        'GGG'
    ], {
        G: 'minecraft:glass_pane',
        A: 'irons_spellbooks:arcane_ingot',
        L: 'gtceu:luminessence_dust'
    })

    // essence_smoker: polished_deepslate corners → luminessence_dust
    event.remove({ id: 'apprenticecodex:essence_smoker' })
    event.shaped('apprenticecodex:essence_smoker', [
        'A A',
        'FEF',
        'LCL'
    ], {
        A: 'irons_spellbooks:arcane_ingot',
        F: '#minecraft:wooden_fences',
        E: 'irons_spellbooks:arcane_essence',
        L: 'gtceu:luminessence_dust',
        C: 'minecraft:campfire'
    })

    // rapid_spellcaster_round (crafting table): gunpowder → luminessence_dust
    event.remove({ id: 'apprenticecodex:rapid_spellcaster_round' })
    event.shaped(Item.of('apprenticecodex:rapid_spellcaster_round', 12), [
        'A',
        'C',
        'L'
    ], {
        A: 'minecraft:amethyst_shard',
        C: 'minecraft:copper_ingot',
        L: 'gtceu:luminessence_dust'
    })

    // apprentice_mage armor: addition iron_ingot → source_gem (ISS base already Journeyman-gated)
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
            'addition': { 'item': 'ars_nouveau:source_gem' },
            'result': { 'item': `apprenticecodex:${piece}` }
        })
    })

    // ===== JOURNEYMAN (MV magic — source_gem) =====

    // spellcaster_workbench: magic_cloth → source_gem
    event.remove({ id: 'apprenticecodex:spellcaster_workbench' })
    event.shaped('apprenticecodex:spellcaster_workbench', [
        ' S ',
        'XXX',
        'FAF'
    ], {
        S: 'ars_nouveau:source_gem',
        X: '#minecraft:wooden_slabs',
        F: '#minecraft:wooden_fences',
        A: 'irons_spellbooks:arcane_ingot'
    })

    // spell_calibration_bench: magic_cloth → source_gem
    event.remove({ id: 'apprenticecodex:spell_calibration_bench' })
    event.shaped('apprenticecodex:spell_calibration_bench', [
        'ASI',
        'XXX',
        'F F'
    ], {
        A: 'minecraft:amethyst_shard',
        S: 'ars_nouveau:source_gem',
        I: 'irons_spellbooks:scroll',
        X: '#minecraft:wooden_slabs',
        F: '#minecraft:wooden_fences'
    })

    // copper_swingcast_staff: leather → source_gem
    event.remove({ id: 'apprenticecodex:copper_swingcast_staff' })
    event.shaped('apprenticecodex:copper_swingcast_staff', [
        ' AB',
        'SWC',
        'C  '
    ], {
        A: 'irons_spellbooks:arcane_ingot',
        B: 'irons_spellbooks:lightning_bottle',
        S: 'ars_nouveau:source_gem',
        W: 'gtceu:long_wood_rod',
        C: 'create:copper_sheet'
    })

    // iron_swingcast_staff: leather → source_gem
    event.remove({ id: 'apprenticecodex:iron_swingcast_staff' })
    event.shaped('apprenticecodex:iron_swingcast_staff', [
        ' AG',
        'SWI',
        'I  '
    ], {
        A: 'irons_spellbooks:arcane_ingot',
        G: 'minecraft:glass',
        S: 'ars_nouveau:source_gem',
        W: 'gtceu:long_wood_rod',
        I: 'create:iron_sheet'
    })

    // silver_swingcast_staff: leather → source_gem
    event.remove({ id: 'apprenticecodex:silver_swingcast_staff' })
    event.shaped('apprenticecodex:silver_swingcast_staff', [
        ' AG',
        'SWR',
        'A  '
    ], {
        A: 'irons_spellbooks:arcane_ingot',
        G: 'minecraft:glass',
        S: 'ars_nouveau:source_gem',
        W: 'gtceu:long_wood_rod',
        R: 'irons_spellbooks:silver_ring'
    })

    // grimoire_manifest: obsidian → source_gem
    event.remove({ id: 'apprenticecodex:grimoire_manifest' })
    event.shaped('apprenticecodex:grimoire_manifest', [
        ' E ',
        'SBS',
        ' S '
    ], {
        E: 'minecraft:ender_eye',
        S: 'ars_nouveau:source_gem',
        B: 'irons_spellbooks:ruined_book'
    })

    // spellcasters_flask: gold_ingot → source_gem
    event.remove({ id: 'apprenticecodex:spellcasters_flask' })
    event.shaped('apprenticecodex:spellcasters_flask', [
        ' A ',
        'DBD',
        ' S '
    ], {
        A: 'irons_spellbooks:arcane_ingot',
        D: 'minecraft:diamond',
        B: 'minecraft:glass_bottle',
        S: 'ars_nouveau:source_gem'
    })

    // spellcaster_ammo_pouch: magic_cloth → source_gem
    event.remove({ id: 'apprenticecodex:spellcaster_ammo_pouch' })
    event.shaped('apprenticecodex:spellcaster_ammo_pouch', [
        'SAS',
        'LCL',
        'LLL'
    ], {
        S: 'ars_nouveau:source_gem',
        A: 'irons_spellbooks:arcane_ingot',
        L: 'minecraft:leather',
        C: '#forge:chests'
    })

    // spellcaster_quiver: iron_ingot → source_gem
    event.remove({ id: 'apprenticecodex:spellcaster_quiver' })
    event.shaped('apprenticecodex:spellcaster_quiver', [
        'S S',
        'ACA',
        ' A '
    ], {
        S: 'ars_nouveau:source_gem',
        A: 'irons_spellbooks:arcane_ingot',
        C: '#forge:chests'
    })

    // explorers_cane: gold_ingot → source_gem
    event.remove({ id: 'apprenticecodex:explorers_cane' })
    event.shaped('apprenticecodex:explorers_cane', [
        ' CG',
        ' IA',
        'S  '
    ], {
        C: 'minecraft:compass',
        G: 'ars_nouveau:source_gem',
        I: 'irons_spellbooks:graybeard_staff',
        A: 'irons_spellbooks:arcane_ingot',
        S: 'gtceu:wood_rod'
    })

    // magi_compressor_gadget: leather → source_gem (Create brass = MV tech, source_gem = Journeyman magic)
    event.remove({ id: 'apprenticecodex:magi_compressor_gadget' })
    event.shaped('apprenticecodex:magi_compressor_gadget', [
        'TST',
        'S S',
        'ABA'
    ], {
        T: 'create:copper_backtank',
        S: 'ars_nouveau:source_gem',
        A: 'irons_spellbooks:arcane_ingot',
        B: '#forge:ingots/brass'
    })

    // enchantress armor: addition gold_ingot → source_gem
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
            'addition': { 'item': 'ars_nouveau:source_gem' },
            'result': { 'item': `apprenticecodex:${piece}` }
        })
    })

    // ===== MV TECH + JOURNEYMAN MAGIC — dual gate =====

    // copper_spellcaster_gun: buttons → steel, redstone → source_gem
    event.remove({ id: 'apprenticecodex:copper_spellcaster_gun' })
    event.shaped('apprenticecodex:copper_spellcaster_gun', [
        'CAL',
        ' CS',
        ' TC'
    ], {
        C: 'create:copper_sheet',
        A: 'irons_spellbooks:arcane_ingot',
        L: 'irons_spellbooks:lightning_bottle',
        S: 'ars_nouveau:source_gem',
        T: 'gtceu:steel_ingot'
    })

    // iron_spellcaster_gun: buttons → steel, redstone → source_gem
    event.remove({ id: 'apprenticecodex:iron_spellcaster_gun' })
    event.shaped('apprenticecodex:iron_spellcaster_gun', [
        'IAE',
        ' IS',
        ' TI'
    ], {
        I: 'create:iron_sheet',
        A: 'irons_spellbooks:arcane_ingot',
        E: 'minecraft:ender_pearl',
        S: 'ars_nouveau:source_gem',
        T: 'gtceu:steel_ingot'
    })

    // spell_dispenser: planks top corners → steel, redstone → source_gem
    event.remove({ id: 'apprenticecodex:spell_dispenser' })
    event.shaped('apprenticecodex:spell_dispenser', [
        'XWX',
        'WBW',
        'AGA'
    ], {
        X: 'gtceu:steel_ingot',
        W: 'gtceu:long_wood_rod',
        B: 'minecraft:bow',
        A: 'irons_spellbooks:arcane_ingot',
        G: 'ars_nouveau:source_gem'
    })

    // ===== INITIATE (HV magic — holy_silver_ingot) =====

    // gold_swingcast_staff: leather → holy_silver_ingot
    event.remove({ id: 'apprenticecodex:gold_swingcast_staff' })
    event.shaped('apprenticecodex:gold_swingcast_staff', [
        ' AG',
        'HWI',
        'I  '
    ], {
        A: 'irons_spellbooks:arcane_ingot',
        G: 'minecraft:glass',
        H: 'gtceu:holy_silver_ingot',
        W: 'gtceu:iron_rod',
        I: 'create:golden_sheet'
    })

    // diamond_swingcast_staff: leather → holy_silver_ingot
    event.remove({ id: 'apprenticecodex:diamond_swingcast_staff' })
    event.shaped('apprenticecodex:diamond_swingcast_staff', [
        ' AG',
        'HWD',
        'D  '
    ], {
        A: 'irons_spellbooks:arcane_ingot',
        G: 'minecraft:glass',
        H: 'gtceu:holy_silver_ingot',
        W: 'gtceu:iron_rod',
        D: 'minecraft:diamond'
    })

    // crystal_bladed_staff: diamond → holy_silver_ingot
    event.remove({ id: 'apprenticecodex:crystal_bladed_staff' })
    event.shaped('apprenticecodex:crystal_bladed_staff', [
        ' HS',
        ' AH',
        'H  '
    ], {
        H: 'gtceu:holy_silver_ingot',
        S: 'minecraft:diamond_sword',
        A: 'irons_spellbooks:arcane_ingot'
    })

    // reflectcast_shield: diamond → holy_silver_ingot
    event.remove({ id: 'apprenticecodex:reflectcast_shield' })
    event.shaped('apprenticecodex:reflectcast_shield', [
        'AGA',
        'HSH',
        'AGA'
    ], {
        A: 'irons_spellbooks:arcane_ingot',
        G: 'minecraft:glass_pane',
        H: 'gtceu:holy_silver_ingot',
        S: 'minecraft:shield'
    })

    // atelier_station: blaze_rod → holy_silver_ingot
    event.remove({ id: 'apprenticecodex:atelier_station' })
    event.shaped('apprenticecodex:atelier_station', [
        'BMH',
        'SSS',
        'F F'
    ], {
        B: 'apprenticecodex:spellcasters_flask',
        M: 'irons_spellbooks:magic_cloth',
        H: 'gtceu:holy_silver_ingot',
        S: '#minecraft:wooden_slabs',
        F: '#minecraft:wooden_fences'
    })

    // autocast_amulet: chain → holy_silver_ingot
    event.remove({ id: 'apprenticecodex:autocast_amulet' })
    event.shaped('apprenticecodex:autocast_amulet', [
        'H H',
        'ACA',
        ' M '
    ], {
        H: 'gtceu:holy_silver_ingot',
        A: 'irons_spellbooks:arcane_ingot',
        C: 'minecraft:clock',
        M: 'irons_spellbooks:mithril_scrap'
    })

    // stealth_rune_armor: addition invisibility_elixir → holy_silver_ingot
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

    // ===== HV TECH + INITIATE MAGIC — dual gate =====

    // gold_spellcaster_gun: gold → stainless_steel, cooldown_rune → holy_silver_ingot
    event.remove({ id: 'apprenticecodex:gold_spellcaster_gun' })
    event.shaped('apprenticecodex:gold_spellcaster_gun', [
        'TAH',
        ' TR',
        ' BT'
    ], {
        T: 'gtceu:stainless_steel_ingot',
        A: 'irons_spellbooks:arcane_ingot',
        H: 'gtceu:holy_silver_ingot',
        R: 'minecraft:redstone',
        B: '#minecraft:buttons'
    })

    // multipurpose_staffrifle: buttons → stainless_steel, redstone → holy_silver_ingot
    event.remove({ id: 'apprenticecodex:multipurpose_staffrifle' })
    event.shaped('apprenticecodex:multipurpose_staffrifle', [
        'MWL',
        ' MH',
        ' TM'
    ], {
        M: 'irons_spellbooks:mithril_ingot',
        W: 'irons_spellbooks:weapon_parts',
        L: 'irons_spellbooks:cooldown_upgrade_orb',
        H: 'gtceu:holy_silver_ingot',
        T: 'gtceu:stainless_steel_ingot'
    })

    // circuit_heat_staff: gold → stainless_steel, diamond → holy_silver_ingot
    event.remove({ id: 'apprenticecodex:circuit_heat_staff' })
    event.shaped('apprenticecodex:circuit_heat_staff', [
        ' PH',
        ' WT',
        'P  '
    ], {
        P: 'irons_spellbooks:pyrium_ingot',
        H: 'gtceu:holy_silver_ingot',
        W: 'gtceu:iron_rod',
        T: 'gtceu:stainless_steel_ingot'
    })

    // ===== SORCERER (EV magic — prima_materia_plate) =====

    // mithril_freecast_staff: one mithril_scrap → prima_materia_plate
    event.remove({ id: 'apprenticecodex:mithril_freecast_staff' })
    event.shaped('apprenticecodex:mithril_freecast_staff', [
        ' AG',
        'LWP',
        'D  '
    ], {
        A: 'irons_spellbooks:arcane_ingot',
        G: 'minecraft:glass',
        L: 'irons_spellbooks:magic_cloth',
        W: 'irons_spellbooks:weapon_parts',
        P: 'gtceu:prima_materia_plate',
        D: 'irons_spellbooks:mithril_scrap'
    })

    // revolvercast_staff: planks (center) → prima_materia_plate
    event.remove({ id: 'apprenticecodex:revolvercast_staff' })
    event.shaped('apprenticecodex:revolvercast_staff', [
        ' AG',
        'LPM',
        'X  '
    ], {
        A: 'irons_spellbooks:arcane_ingot',
        G: 'minecraft:glass',
        L: 'irons_spellbooks:magic_cloth',
        P: 'gtceu:prima_materia_plate',
        M: 'irons_spellbooks:mithril_ingot',
        X: 'irons_spellbooks:pyrium_ingot'
    })

    // elemental_bow: diamond → prima_materia_plate
    event.remove({ id: 'apprenticecodex:elemental_bow' })
    event.shaped('apprenticecodex:elemental_bow', [
        ' AS',
        'PMS',
        ' AS'
    ], {
        A: 'irons_spellbooks:arcane_ingot',
        S: 'minecraft:string',
        P: 'gtceu:prima_materia_plate',
        M: 'irons_spellbooks:mithril_scrap'
    })

    // charged_twin_blade_staff: netherite_scrap → prima_materia_plate
    event.remove({ id: 'apprenticecodex:charged_twin_blade_staff' })
    event.shaped('apprenticecodex:charged_twin_blade_staff', [
        ' PS',
        ' TP',
        'A  '
    ], {
        P: 'gtceu:prima_materia_plate',
        S: 'minecraft:netherite_sword',
        T: 'minecraft:trident',
        A: 'irons_spellbooks:arcane_ingot'
    })

    // mana_force_blade: one mithril_scrap → prima_materia_plate
    event.remove({ id: 'apprenticecodex:mana_force_blade' })
    event.shaped('apprenticecodex:mana_force_blade', [
        'CAC',
        'RAP',
        'PSW'
    ], {
        C: 'ars_nouveau:source_gem',
        A: 'irons_spellbooks:arcane_ingot',
        R: 'irons_spellbooks:protection_rune',
        P: 'gtceu:prima_materia_plate',
        S: 'minecraft:netherite_sword',
        W: 'irons_spellbooks:mithril_scrap'
    })

    // smashcast_scepter: diamond → prima_materia_plate
    event.remove({ id: 'apprenticecodex:smashcast_scepter' })
    event.shaped('apprenticecodex:smashcast_scepter', [
        ' MI',
        ' WM',
        'P  '
    ], {
        M: 'irons_spellbooks:mithril_scrap',
        I: 'minecraft:iron_block',
        W: 'irons_spellbooks:weapon_parts',
        P: 'gtceu:prima_materia_plate'
    })

    // photon_siphon: arcane_essence → prima_materia_plate
    event.remove({ id: 'apprenticecodex:photon_siphon' })
    event.shaped('apprenticecodex:photon_siphon', [
        'PAP',
        'LSL',
        'SCS'
    ], {
        P: 'gtceu:prima_materia_plate',
        A: 'irons_spellbooks:arcane_ingot',
        L: 'gtceu:glass_lens',
        S: 'irons_spellbooks:mithril_scrap',
        C: 'ars_nouveau:source_gem'
    })

    // mana_thruster: phantom_membrane → prima_materia_plate
    event.remove({ id: 'apprenticecodex:mana_thruster' })
    event.shaped('apprenticecodex:mana_thruster', [
        'FSF',
        'PAP',
        'MSM'
    ], {
        F: 'minecraft:feather',
        S: 'ars_nouveau:source_gem',
        P: 'gtceu:prima_materia_plate',
        A: 'irons_spellbooks:arcane_ingot',
        M: 'irons_spellbooks:mithril_scrap'
    })

    // scarlet_thirst: add prima_materia_plate to empty slot, keep blood_vial
    event.remove({ id: 'apprenticecodex:scarlet_thirst' })
    event.shaped('apprenticecodex:scarlet_thirst', [
        'VIP',
        'IMI',
        ' I '
    ], {
        V: 'irons_spellbooks:blood_vial',
        I: 'irons_spellbooks:arcane_ingot',
        P: 'gtceu:prima_materia_plate',
        M: 'irons_spellbooks:mithril_scrap'
    })

    // protection_spell_supporter: leather → prima_materia_plate
    event.remove({ id: 'apprenticecodex:protection_spell_supporter' })
    event.shaped('apprenticecodex:protection_spell_supporter', [
        ' P ',
        'PMP',
        'ARA'
    ], {
        P: 'gtceu:prima_materia_plate',
        M: 'irons_spellbooks:mithril_scrap',
        A: 'irons_spellbooks:arcane_ingot',
        R: 'irons_spellbooks:protection_rune'
    })

    // craftsmans_delight: redstone → prima_materia_plate
    event.remove({ id: 'apprenticecodex:craftsmans_delight' })
    event.shaped('apprenticecodex:craftsmans_delight', [
        'RIP',
        'IMI',
        ' I '
    ], {
        R: 'irons_spellbooks:nature_rune',
        I: 'irons_spellbooks:arcane_ingot',
        P: 'gtceu:prima_materia_plate',
        M: 'irons_spellbooks:mithril_scrap'
    })

    // mana_shield_charm: diamond → prima_materia_plate
    event.remove({ id: 'apprenticecodex:mana_shield_charm' })
    event.shaped('apprenticecodex:mana_shield_charm', [
        'SRS',
        'APA',
        'SMS'
    ], {
        S: 'ars_nouveau:source_gem',
        R: 'irons_spellbooks:protection_rune',
        A: 'irons_spellbooks:arcane_ingot',
        P: 'gtceu:prima_materia_plate',
        M: 'irons_spellbooks:mithril_scrap'
    })

    // jumpcast_charm: diamond → prima_materia_plate
    event.remove({ id: 'apprenticecodex:jumpcast_charm' })
    event.shaped('apprenticecodex:jumpcast_charm', [
        'SRS',
        'PAP',
        'MSM'
    ], {
        S: 'apprenticecodex:spellstained_arcane_ingot',
        R: 'gtceu:steel_spring',
        P: 'gtceu:prima_materia_plate',
        A: 'ars_nouveau:source_gem',
        M: 'irons_spellbooks:mithril_scrap'
    })

    // spell_cast_parrying_ring: mithril_scrap → prima_materia_plate
    event.remove({ id: 'apprenticecodex:spell_cast_parrying_ring' })
    event.shaped('apprenticecodex:spell_cast_parrying_ring', [
        'SIR',
        'IPI',
        ' I '
    ], {
        S: 'apprenticecodex:reflectcast_shield',
        I: 'irons_spellbooks:arcane_ingot',
        R: 'irons_spellbooks:protection_rune',
        P: 'gtceu:prima_materia_plate'
    })

    // chromatic_magia_dress armor: addition mithril_scrap → prima_materia_plate
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

    // ===== EV TECH + SORCERER MAGIC — dual gate =====

    // diamond_spellcaster_gun: diamond → titanium, cooldown_upgrade_orb → prima_materia_plate
    event.remove({ id: 'apprenticecodex:diamond_spellcaster_gun' })
    event.shaped('apprenticecodex:diamond_spellcaster_gun', [
        'TMP',
        ' TR',
        ' BT'
    ], {
        T: 'gtceu:titanium_ingot',
        M: 'irons_spellbooks:mithril_ingot',
        P: 'gtceu:prima_materia_plate',
        R: 'minecraft:redstone',
        B: '#minecraft:buttons'
    })

    // multicast_echo_staff: netherite_ingot → titanium, planks → prima_materia_plate
    event.remove({ id: 'apprenticecodex:multicast_echo_staff' })
    event.shaped('apprenticecodex:multicast_echo_staff', [
        ' ME',
        ' PT',
        'WT '
    ], {
        M: 'irons_spellbooks:mithril_ingot',
        E: 'minecraft:echo_shard',
        P: 'gtceu:prima_materia_plate',
        T: 'gtceu:titanium_ingot',
        W: 'irons_spellbooks:weapon_parts'
    })

    // ===== ALCHEMIST (IV magic — manasteel_ingot) =====

    // zenith_staff: planks → manasteel_ingot
    event.remove({ id: 'apprenticecodex:zenith_staff' })
    event.shaped('apprenticecodex:zenith_staff', [
        ' MS',
        ' XC',
        'P  '
    ], {
        M: 'irons_spellbooks:mithril_ingot',
        S: 'irons_spellbooks:divine_soulshard',
        X: 'botania:manasteel_ingot',
        C: 'irons_spellbooks:mithril_weave',
        P: 'irons_spellbooks:weapon_parts'
    })

    // focus_staffbow: pyrium_ingot → manasteel_ingot
    event.remove({ id: 'apprenticecodex:focus_staffbow' })
    event.shaped('apprenticecodex:focus_staffbow', [
        ' MS',
        'DXS',
        ' MS'
    ], {
        M: 'irons_spellbooks:mithril_ingot',
        S: 'minecraft:string',
        D: 'irons_spellbooks:divine_soulshard',
        X: 'botania:manasteel_ingot'
    })

    // illuminate_stellar_staff: diamond → manasteel_ingot
    event.remove({ id: 'apprenticecodex:illuminate_stellar_staff' })
    event.shaped('apprenticecodex:illuminate_stellar_staff', [
        ' YS',
        ' NY',
        'X  '
    ], {
        Y: 'botania:mana_glass',
        S: 'minecraft:netherite_sword',
        N: 'minecraft:nether_star',
        X: 'botania:manasteel_ingot'
    })

    // unite_luna_staff: diamond → manasteel_ingot
    event.remove({ id: 'apprenticecodex:unite_luna_staff' })
    event.shaped('apprenticecodex:unite_luna_staff', [
        ' PS',
        ' RP',
        'X  '
    ], {
        P: 'botania:mana_glass',
        S: 'minecraft:netherite_sword',
        R: 'irons_spellbooks:silver_ring',
        X: 'botania:manasteel_ingot'
    })

    // pastel_staff: planks → manasteel_ingot
    event.remove({ id: 'apprenticecodex:pastel_staff' })
    event.shaped('apprenticecodex:pastel_staff', [
        ' MU',
        ' X ',
        'P  '
    ], {
        M: 'irons_spellbooks:mithril_ingot',
        U: 'irons_spellbooks:upgrade_orb',
        X: 'botania:manasteel_ingot',
        P: 'irons_spellbooks:weapon_parts'
    })

    // satellite_followcast_amulet: chain → manasteel_ingot
    event.remove({ id: 'apprenticecodex:satellite_followcast_amulet' })
    event.shaped('apprenticecodex:satellite_followcast_amulet', [
        'X X',
        'ADA',
        ' M '
    ], {
        X: 'botania:manasteel_ingot',
        A: 'apprenticecodex:spellstained_arcane_ingot',
        D: 'minecraft:diamond',
        M: 'irons_spellbooks:mithril_scrap'
    })

    // scrollcaster_gauntlet: leather → manasteel_ingot
    event.remove({ id: 'apprenticecodex:scrollcaster_gauntlet' })
    event.shaped('apprenticecodex:scrollcaster_gauntlet', [
        ' M ',
        'MDM',
        'XBX'
    ], {
        M: 'irons_spellbooks:mithril_scrap',
        D: 'minecraft:diamond',
        X: 'botania:manasteel_ingot',
        B: 'minecraft:chiseled_bookshelf'
    })

    // absorption_amplify_amulet: string → manasteel_ingot
    event.remove({ id: 'apprenticecodex:absorption_amplify_amulet' })
    event.shaped('apprenticecodex:absorption_amplify_amulet', [
        'XIX',
        'MGM',
        ' M '
    ], {
        X: 'botania:manasteel_ingot',
        I: 'irons_spellbooks:mithril_ingot',
        M: 'irons_spellbooks:mithril_scrap',
        G: 'minecraft:enchanted_golden_apple'
    })

    // archivists_grimoire: diamond → manasteel_ingot
    event.remove({ id: 'apprenticecodex:archivists_grimoire' })
    event.shaped('apprenticecodex:archivists_grimoire', [
        'MXM',
        'CBC',
        'MWM'
    ], {
        M: 'irons_spellbooks:mithril_scrap',
        X: 'botania:manasteel_ingot',
        C: '#forge:chests',
        B: 'irons_spellbooks:ruined_book',
        W: 'irons_spellbooks:mithril_weave'
    })

    // element_maiden_robe armor: addition mithril_weave → manasteel_ingot
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
