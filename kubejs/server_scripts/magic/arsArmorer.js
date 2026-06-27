ServerEvents.recipes(event => {


    event.shaped(
        Item.of('tacz:attachment', '{AttachmentId:"ars_armorer:mana_mag_1"}'),
        ['GGG', 'GSG', 'GGG'],
        { G: 'ars_nouveau:source_gem', S: 'ars_nouveau:sourcestone' }
    )

    event.shaped(
        Item.of('tacz:attachment', '{AttachmentId:"ars_armorer:mana_mag_2"}'),
        ['PHP', 'GIG', 'PHP'],
        { P: 'gtceu:holy_silver_plate', G: 'ars_nouveau:source_gem', I: 'gtceu:holy_silver_ingot' }
    )

    event.shaped(
        Item.of('tacz:attachment', '{AttachmentId:"ars_armorer:mana_mag_3"}'),
        ['QPQ', 'GPG', 'QPQ'],
        { Q: 'gtceu:prima_materia_plate', G: 'ars_nouveau:source_gem', P: 'gtceu:holy_silver_plate' }
    )


    event.shaped(
        Item.of('tacz:attachment', '{AttachmentId:"ars_armorer:spell_damage"}'),
        ['EGE', 'GAG', 'EGE'],
        { E: '#kubejs:earth_essences', G: 'ars_nouveau:source_gem', A: 'ars_nouveau:arcane_core' }
    )

    event.shaped(
        Item.of('tacz:attachment', '{AttachmentId:"ars_armorer:spell_damage_p"}'),
        ['EHE', 'HAH', 'EHE'],
        { E: '#kubejs:earth_essences', H: 'gtceu:holy_silver_ingot', A: 'ars_nouveau:arcane_core' }
    )

    event.shaped(
        Item.of('tacz:attachment', '{AttachmentId:"ars_armorer:spell_damage_pp"}'),
        ['EQE', 'QAQ', 'EQE'],
        { E: '#kubejs:earth_essences', Q: 'gtceu:prima_materia_plate', A: 'ars_nouveau:arcane_core' }
    )

    event.shaped(
        Item.of('tacz:attachment', '{AttachmentId:"ars_armorer:spell_ignite"}'),
        ['FGF', 'GAG', 'FGF'],
        { F: '#kubejs:fire_essences', G: 'ars_nouveau:source_gem', A: 'ars_nouveau:arcane_core' }
    )

    event.shaped(
        Item.of('tacz:attachment', '{AttachmentId:"ars_armorer:spell_ignite_p"}'),
        ['FHF', 'HAH', 'FHF'],
        { F: '#kubejs:fire_essences', H: 'gtceu:holy_silver_ingot', A: 'ars_nouveau:arcane_core' }
    )

    event.shaped(
        Item.of('tacz:attachment', '{AttachmentId:"ars_armorer:spell_crit"}'),
        ['WGW', 'GAG', 'WGW'],
        { W: '#kubejs:air_essences', G: 'ars_nouveau:source_gem', A: 'ars_nouveau:arcane_core' }
    )

    event.shaped(
        Item.of('tacz:attachment', '{AttachmentId:"ars_armorer:spell_crit_p"}'),
        ['WHW', 'HAH', 'WHW'],
        { W: '#kubejs:air_essences', H: 'gtceu:holy_silver_ingot', A: 'ars_nouveau:arcane_core' }
    )

    event.shaped(
        Item.of('tacz:attachment', '{AttachmentId:"ars_armorer:spell_crit_pp"}'),
        ['WQW', 'QAQ', 'WQW'],
        { W: '#kubejs:air_essences', Q: 'gtceu:prima_materia_plate', A: 'ars_nouveau:arcane_core' }
    )

    event.shaped(
        Item.of('tacz:attachment', '{AttachmentId:"ars_armorer:spell_suppression"}'),
        ['VGV', 'GAG', 'VGV'],
        { V: '#kubejs:water_essences', G: 'ars_nouveau:source_gem', A: 'ars_nouveau:arcane_core' }
    )

    event.shaped(
        Item.of('tacz:attachment', '{AttachmentId:"ars_armorer:spell_suppression_p"}'),
        ['VHV', 'HAH', 'VHV'],
        { V: '#kubejs:water_essences', H: 'gtceu:holy_silver_ingot', A: 'ars_nouveau:arcane_core' }
    )

    event.shaped(
        Item.of('tacz:attachment', '{AttachmentId:"ars_armorer:spell_penetrate"}'),
        ['WBW', 'BAB', 'WBW'],
        { W: '#kubejs:air_essences', B: 'gtceu:holy_silver_bolt', A: 'ars_nouveau:arcane_core' }
    )

    event.shaped(
        Item.of('tacz:attachment', '{AttachmentId:"ars_armorer:spell_penetrate_p"}'),
        ['HBH', 'BAB', 'HBH'],
        { H: 'gtceu:holy_silver_ingot', B: 'gtceu:holy_silver_bolt', A: 'ars_nouveau:arcane_core' }
    )

    event.shaped(
        Item.of('tacz:attachment', '{AttachmentId:"ars_armorer:spell_penetrate_pp"}'),
        ['QBQ', 'BAB', 'QBQ'],
        { Q: 'gtceu:prima_materia_plate', B: 'gtceu:holy_silver_bolt', A: 'ars_nouveau:arcane_core' }
    )

    event.shaped(
        Item.of('tacz:attachment', '{AttachmentId:"ars_armorer:spell_penetrate_incendiary"}'),
        ['FBF', 'HAH', 'FBF'],
        { F: '#kubejs:fire_essences', B: 'gtceu:holy_silver_bolt', H: 'gtceu:holy_silver_ingot', A: 'ars_nouveau:arcane_core' }
    )

    event.shaped(
        Item.of('tacz:attachment', '{AttachmentId:"ars_armorer:spell_penetrate_incendiary_p"}'),
        ['FQF', 'BAB', 'FQF'],
        { F: '#kubejs:fire_essences', Q: 'gtceu:prima_materia_plate', B: 'gtceu:holy_silver_bolt', A: 'ars_nouveau:arcane_core' }
    )

    event.shaped(
        Item.of('tacz:attachment', '{AttachmentId:"ars_armorer:spell_penetrate_incendiary_pp"}'),
        ['FQF', 'PAP', 'FQF'],
        { F: '#kubejs:fire_essences', Q: 'gtceu:prima_materia_plate', P: 'gtceu:holy_silver_plate', A: 'ars_nouveau:arcane_core' }
    )

    event.shaped(
        Item.of('tacz:attachment', '{AttachmentId:"ars_armorer:spell_explode"}'),
        ['FPF', 'PAP', 'FPF'],
        { F: '#kubejs:fire_essences', P: 'gtceu:holy_silver_plate', A: 'ars_nouveau:arcane_core' }
    )

    event.shaped(
        Item.of('tacz:attachment', '{AttachmentId:"ars_armorer:spell_explode_p"}'),
        ['FQF', 'QAQ', 'FQF'],
        { F: '#kubejs:fire_essences', Q: 'gtceu:prima_materia_plate', A: 'ars_nouveau:arcane_core' }
    )


    event.shaped(
        Item.of('tacz:attachment', '{AttachmentId:"ars_armorer:trigger_high_speed"}'),
        ['GBG', 'BOB', 'GBG'],
        { G: 'ars_nouveau:source_gem', B: 'gtceu:holy_silver_bolt', O: 'gtceu:holy_silver_foil' }
    )

    event.shaped(
        Item.of('tacz:attachment', '{AttachmentId:"ars_armorer:trigger_slow_speed"}'),
        ['GRG', 'RBR', 'GRG'],
        { G: 'ars_nouveau:source_gem', R: 'gtceu:holy_silver_rod', B: 'gtceu:holy_silver_bolt' }
    )

    event.shaped(
        Item.of('tacz:attachment', '{AttachmentId:"ars_armorer:trigger_horizontal_spread"}'),
        ['FBF', 'BBB', 'FBF'],
        { F: 'ars_nouveau:magebloom_fiber', B: 'gtceu:holy_silver_bolt' }
    )

    event.shaped(
        Item.of('tacz:attachment', '{AttachmentId:"ars_armorer:trigger_vertical_spread"}'),
        ['BFB', 'FBF', 'BFB'],
        { B: 'gtceu:holy_silver_bolt', F: 'ars_nouveau:magebloom_fiber' }
    )

    event.shaped(
        Item.of('tacz:attachment', '{AttachmentId:"ars_armorer:trigger_reckless_rounds"}'),
        ['HBH', 'BGB', 'HBH'],
        { H: 'gtceu:holy_silver_ingot', B: 'gtceu:holy_silver_bolt', G: 'ars_nouveau:source_gem' }
    )

    event.shaped(
        Item.of('tacz:attachment', '{AttachmentId:"ars_armorer:trigger_sniper_rounds"}'),
        ['OHO', 'LBL', 'OHO'],
        { O: 'gtceu:holy_silver_foil', H: 'gtceu:holy_silver_ingot', L: 'gtceu:long_holy_silver_rod', B: 'gtceu:holy_silver_bolt' }
    )

    event.shaped(
        Item.of('tacz:attachment', '{AttachmentId:"ars_armorer:trigger_close_range_rounds"}'),
        ['GHG', 'HBH', 'GHG'],
        { G: 'ars_nouveau:source_gem', H: 'gtceu:holy_silver_ingot', B: 'gtceu:holy_silver_bolt' }
    )

    event.shaped(
        Item.of('tacz:attachment', '{AttachmentId:"ars_armorer:trigger_double_fire"}'),
        ['QBQ', 'BAB', 'QBQ'],
        { Q: 'gtceu:prima_materia_plate', B: 'gtceu:holy_silver_bolt', A: 'ars_nouveau:arcane_core' }
    )


    event.shaped(
        Item.of('tacz:attachment', '{AttachmentId:"ars_armorer:mod_low_consume"}'),
        ['FGF', 'GRG', 'FGF'],
        { F: 'ars_nouveau:magebloom_fiber', G: 'ars_nouveau:source_gem', R: 'gtceu:holy_silver_rod' }
    )

    event.shaped(
        Item.of('tacz:attachment', '{AttachmentId:"ars_armorer:mod_low_damage"}'),
        ['FVF', 'VRV', 'FVF'],
        { F: 'ars_nouveau:magebloom_fiber', V: '#kubejs:water_essences', R: 'gtceu:holy_silver_rod' }
    )

    event.shaped(
        Item.of('tacz:attachment', '{AttachmentId:"ars_armorer:mod_high_damage"}'),
        ['EHE', 'HRH', 'EHE'],
        { E: '#kubejs:earth_essences', H: 'gtceu:holy_silver_ingot', R: 'gtceu:holy_silver_rod' }
    )

    event.shaped(
        Item.of('tacz:attachment', '{AttachmentId:"ars_armorer:mod_rapid_regeneration"}'),
        ['GHG', 'FRF', 'GHG'],
        { G: 'ars_nouveau:source_gem', H: 'gtceu:holy_silver_ingot', F: 'ars_nouveau:magebloom_fiber', R: 'gtceu:holy_silver_rod' }
    )

    event.shaped(
        Item.of('tacz:attachment', '{AttachmentId:"ars_armorer:mod_instant_renewal"}'),
        ['OHO', 'GRG', 'OHO'],
        { O: 'gtceu:holy_silver_foil', H: 'gtceu:holy_silver_ingot', G: 'ars_nouveau:source_gem', R: 'gtceu:holy_silver_rod' }
    )

    event.shaped(
        Item.of('tacz:attachment', '{AttachmentId:"ars_armorer:mod_conflux_accelerator"}'),
        ['GQG', 'FRF', 'GQG'],
        { G: 'ars_nouveau:source_gem', Q: 'gtceu:prima_materia_plate', F: 'ars_nouveau:magebloom_fiber', R: 'gtceu:holy_silver_rod' }
    )

    event.shaped(
        Item.of('tacz:attachment', '{AttachmentId:"ars_armorer:mod_proficient_utilization"}'),
        ['QFQ', 'ARA', 'QFQ'],
        { Q: 'gtceu:prima_materia_plate', F: 'ars_nouveau:magebloom_fiber', A: 'ars_nouveau:arcane_core', R: 'gtceu:holy_silver_rod' }
    )
})
