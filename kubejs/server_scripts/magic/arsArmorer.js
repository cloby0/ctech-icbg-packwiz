ServerEvents.recipes(event => {


    event.shaped(
        Item.of('tacz:attachment', '{AttachmentId:"ars_armorer:mana_mag_1"}'),
        ['ZGG', 'GSG', 'GGG'],
        { G: 'ars_nouveau:source_gem', S: 'ars_nouveau:sourcestone', Z: '#forge:tools/screwdrivers' }
    ).damageIngredient(Ingredient.of('#forge:tools/screwdrivers'))

    event.shaped(
        Item.of('tacz:attachment', '{AttachmentId:"ars_armorer:mana_mag_2"}'),
        ['ZHP', 'GIG', 'PHP'],
        { P: 'gtceu:holy_silver_plate', G: 'ars_nouveau:source_gem', I: 'gtceu:holy_silver_ingot', Z: '#forge:tools/screwdrivers' }
    ).damageIngredient(Ingredient.of('#forge:tools/screwdrivers'))

    event.shaped(
        Item.of('tacz:attachment', '{AttachmentId:"ars_armorer:mana_mag_3"}'),
        ['ZPQ', 'GPG', 'QPQ'],
        { Q: 'gtceu:prima_materia_plate', G: 'ars_nouveau:source_gem', P: 'gtceu:holy_silver_plate', Z: '#forge:tools/screwdrivers' }
    ).damageIngredient(Ingredient.of('#forge:tools/screwdrivers'))


    event.shaped(
        Item.of('tacz:attachment', '{AttachmentId:"ars_armorer:spell_damage"}'),
        ['ZGE', 'GAG', 'EGE'],
        { E: '#kubejs:earth_essences', G: 'ars_nouveau:source_gem', A: 'ars_nouveau:arcane_core', Z: '#forge:tools/screwdrivers' }
    ).damageIngredient(Ingredient.of('#forge:tools/screwdrivers'))

    event.shaped(
        Item.of('tacz:attachment', '{AttachmentId:"ars_armorer:spell_damage_p"}'),
        ['ZHE', 'HAH', 'EHE'],
        { E: '#kubejs:earth_essences', H: 'gtceu:holy_silver_ingot', A: 'ars_nouveau:arcane_core', Z: '#forge:tools/screwdrivers' }
    ).damageIngredient(Ingredient.of('#forge:tools/screwdrivers'))

    event.shaped(
        Item.of('tacz:attachment', '{AttachmentId:"ars_armorer:spell_damage_pp"}'),
        ['ZQE', 'QAQ', 'EQE'],
        { E: '#kubejs:earth_essences', Q: 'gtceu:prima_materia_plate', A: 'ars_nouveau:arcane_core', Z: '#forge:tools/screwdrivers' }
    ).damageIngredient(Ingredient.of('#forge:tools/screwdrivers'))

    event.shaped(
        Item.of('tacz:attachment', '{AttachmentId:"ars_armorer:spell_ignite"}'),
        ['ZGF', 'GAG', 'FGF'],
        { F: '#kubejs:fire_essences', G: 'ars_nouveau:source_gem', A: 'ars_nouveau:arcane_core', Z: '#forge:tools/screwdrivers' }
    ).damageIngredient(Ingredient.of('#forge:tools/screwdrivers'))

    event.shaped(
        Item.of('tacz:attachment', '{AttachmentId:"ars_armorer:spell_ignite_p"}'),
        ['ZHF', 'HAH', 'FHF'],
        { F: '#kubejs:fire_essences', H: 'gtceu:holy_silver_ingot', A: 'ars_nouveau:arcane_core', Z: '#forge:tools/screwdrivers' }
    ).damageIngredient(Ingredient.of('#forge:tools/screwdrivers'))

    event.shaped(
        Item.of('tacz:attachment', '{AttachmentId:"ars_armorer:spell_crit"}'),
        ['ZGW', 'GAG', 'WGW'],
        { W: '#kubejs:air_essences', G: 'ars_nouveau:source_gem', A: 'ars_nouveau:arcane_core', Z: '#forge:tools/screwdrivers' }
    ).damageIngredient(Ingredient.of('#forge:tools/screwdrivers'))

    event.shaped(
        Item.of('tacz:attachment', '{AttachmentId:"ars_armorer:spell_crit_p"}'),
        ['ZHW', 'HAH', 'WHW'],
        { W: '#kubejs:air_essences', H: 'gtceu:holy_silver_ingot', A: 'ars_nouveau:arcane_core', Z: '#forge:tools/screwdrivers' }
    ).damageIngredient(Ingredient.of('#forge:tools/screwdrivers'))

    event.shaped(
        Item.of('tacz:attachment', '{AttachmentId:"ars_armorer:spell_crit_pp"}'),
        ['ZQW', 'QAQ', 'WQW'],
        { W: '#kubejs:air_essences', Q: 'gtceu:prima_materia_plate', A: 'ars_nouveau:arcane_core', Z: '#forge:tools/screwdrivers' }
    ).damageIngredient(Ingredient.of('#forge:tools/screwdrivers'))

    event.shaped(
        Item.of('tacz:attachment', '{AttachmentId:"ars_armorer:spell_suppression"}'),
        ['ZGV', 'GAG', 'VGV'],
        { V: '#kubejs:water_essences', G: 'ars_nouveau:source_gem', A: 'ars_nouveau:arcane_core', Z: '#forge:tools/screwdrivers' }
    ).damageIngredient(Ingredient.of('#forge:tools/screwdrivers'))

    event.shaped(
        Item.of('tacz:attachment', '{AttachmentId:"ars_armorer:spell_suppression_p"}'),
        ['ZHV', 'HAH', 'VHV'],
        { V: '#kubejs:water_essences', H: 'gtceu:holy_silver_ingot', A: 'ars_nouveau:arcane_core', Z: '#forge:tools/screwdrivers' }
    ).damageIngredient(Ingredient.of('#forge:tools/screwdrivers'))

    event.shaped(
        Item.of('tacz:attachment', '{AttachmentId:"ars_armorer:spell_penetrate"}'),
        ['ZBW', 'BAB', 'WBW'],
        { W: '#kubejs:air_essences', B: 'gtceu:holy_silver_bolt', A: 'ars_nouveau:arcane_core', Z: '#forge:tools/screwdrivers' }
    ).damageIngredient(Ingredient.of('#forge:tools/screwdrivers'))

    event.shaped(
        Item.of('tacz:attachment', '{AttachmentId:"ars_armorer:spell_penetrate_p"}'),
        ['ZBH', 'BAB', 'HBH'],
        { H: 'gtceu:holy_silver_ingot', B: 'gtceu:holy_silver_bolt', A: 'ars_nouveau:arcane_core', Z: '#forge:tools/screwdrivers' }
    ).damageIngredient(Ingredient.of('#forge:tools/screwdrivers'))

    event.shaped(
        Item.of('tacz:attachment', '{AttachmentId:"ars_armorer:spell_penetrate_pp"}'),
        ['ZBQ', 'BAB', 'QBQ'],
        { Q: 'gtceu:prima_materia_plate', B: 'gtceu:holy_silver_bolt', A: 'ars_nouveau:arcane_core', Z: '#forge:tools/screwdrivers' }
    ).damageIngredient(Ingredient.of('#forge:tools/screwdrivers'))

    event.shaped(
        Item.of('tacz:attachment', '{AttachmentId:"ars_armorer:spell_penetrate_incendiary"}'),
        ['ZBF', 'HAH', 'FBF'],
        { F: '#kubejs:fire_essences', B: 'gtceu:holy_silver_bolt', H: 'gtceu:holy_silver_ingot', A: 'ars_nouveau:arcane_core', Z: '#forge:tools/screwdrivers' }
    ).damageIngredient(Ingredient.of('#forge:tools/screwdrivers'))

    event.shaped(
        Item.of('tacz:attachment', '{AttachmentId:"ars_armorer:spell_penetrate_incendiary_p"}'),
        ['ZQF', 'BAB', 'FQF'],
        { F: '#kubejs:fire_essences', Q: 'gtceu:prima_materia_plate', B: 'gtceu:holy_silver_bolt', A: 'ars_nouveau:arcane_core', Z: '#forge:tools/screwdrivers' }
    ).damageIngredient(Ingredient.of('#forge:tools/screwdrivers'))

    event.shaped(
        Item.of('tacz:attachment', '{AttachmentId:"ars_armorer:spell_penetrate_incendiary_pp"}'),
        ['ZQF', 'PAP', 'FQF'],
        { F: '#kubejs:fire_essences', Q: 'gtceu:prima_materia_plate', P: 'gtceu:holy_silver_plate', A: 'ars_nouveau:arcane_core', Z: '#forge:tools/screwdrivers' }
    ).damageIngredient(Ingredient.of('#forge:tools/screwdrivers'))

    event.shaped(
        Item.of('tacz:attachment', '{AttachmentId:"ars_armorer:spell_explode"}'),
        ['ZPF', 'PAP', 'FPF'],
        { F: '#kubejs:fire_essences', P: 'gtceu:holy_silver_plate', A: 'ars_nouveau:arcane_core', Z: '#forge:tools/screwdrivers' }
    ).damageIngredient(Ingredient.of('#forge:tools/screwdrivers'))

    event.shaped(
        Item.of('tacz:attachment', '{AttachmentId:"ars_armorer:spell_explode_p"}'),
        ['ZQF', 'QAQ', 'FQF'],
        { F: '#kubejs:fire_essences', Q: 'gtceu:prima_materia_plate', A: 'ars_nouveau:arcane_core', Z: '#forge:tools/screwdrivers' }
    ).damageIngredient(Ingredient.of('#forge:tools/screwdrivers'))


    event.shaped(
        Item.of('tacz:attachment', '{AttachmentId:"ars_armorer:trigger_high_speed"}'),
        ['ZBG', 'BOB', 'GBG'],
        { G: 'ars_nouveau:source_gem', B: 'gtceu:holy_silver_bolt', O: 'gtceu:holy_silver_foil', Z: '#forge:tools/screwdrivers' }
    ).damageIngredient(Ingredient.of('#forge:tools/screwdrivers'))

    event.shaped(
        Item.of('tacz:attachment', '{AttachmentId:"ars_armorer:trigger_slow_speed"}'),
        ['ZRG', 'RBR', 'GRG'],
        { G: 'ars_nouveau:source_gem', R: 'gtceu:holy_silver_rod', B: 'gtceu:holy_silver_bolt', Z: '#forge:tools/screwdrivers' }
    ).damageIngredient(Ingredient.of('#forge:tools/screwdrivers'))

    event.shaped(
        Item.of('tacz:attachment', '{AttachmentId:"ars_armorer:trigger_horizontal_spread"}'),
        ['ZBF', 'BBB', 'FBF'],
        { F: 'ars_nouveau:magebloom_fiber', B: 'gtceu:holy_silver_bolt', Z: '#forge:tools/screwdrivers' }
    ).damageIngredient(Ingredient.of('#forge:tools/screwdrivers'))

    event.shaped(
        Item.of('tacz:attachment', '{AttachmentId:"ars_armorer:trigger_vertical_spread"}'),
        ['ZFB', 'FBF', 'BFB'],
        { B: 'gtceu:holy_silver_bolt', F: 'ars_nouveau:magebloom_fiber', Z: '#forge:tools/screwdrivers' }
    ).damageIngredient(Ingredient.of('#forge:tools/screwdrivers'))

    event.shaped(
        Item.of('tacz:attachment', '{AttachmentId:"ars_armorer:trigger_reckless_rounds"}'),
        ['ZBH', 'BGB', 'HBH'],
        { H: 'gtceu:holy_silver_ingot', B: 'gtceu:holy_silver_bolt', G: 'ars_nouveau:source_gem', Z: '#forge:tools/screwdrivers' }
    ).damageIngredient(Ingredient.of('#forge:tools/screwdrivers'))

    event.shaped(
        Item.of('tacz:attachment', '{AttachmentId:"ars_armorer:trigger_sniper_rounds"}'),
        ['ZHO', 'LBL', 'OHO'],
        { O: 'gtceu:holy_silver_foil', H: 'gtceu:holy_silver_ingot', L: 'gtceu:long_holy_silver_rod', B: 'gtceu:holy_silver_bolt', Z: '#forge:tools/screwdrivers' }
    ).damageIngredient(Ingredient.of('#forge:tools/screwdrivers'))

    event.shaped(
        Item.of('tacz:attachment', '{AttachmentId:"ars_armorer:trigger_close_range_rounds"}'),
        ['ZHG', 'HBH', 'GHG'],
        { G: 'ars_nouveau:source_gem', H: 'gtceu:holy_silver_ingot', B: 'gtceu:holy_silver_bolt', Z: '#forge:tools/screwdrivers' }
    ).damageIngredient(Ingredient.of('#forge:tools/screwdrivers'))

    event.shaped(
        Item.of('tacz:attachment', '{AttachmentId:"ars_armorer:trigger_double_fire"}'),
        ['ZBQ', 'BAB', 'QBQ'],
        { Q: 'gtceu:prima_materia_plate', B: 'gtceu:holy_silver_bolt', A: 'ars_nouveau:arcane_core', Z: '#forge:tools/screwdrivers' }
    ).damageIngredient(Ingredient.of('#forge:tools/screwdrivers'))


    event.shaped(
        Item.of('tacz:attachment', '{AttachmentId:"ars_armorer:mod_low_consume"}'),
        ['ZGF', 'GRG', 'FGF'],
        { F: 'ars_nouveau:magebloom_fiber', G: 'ars_nouveau:source_gem', R: 'gtceu:holy_silver_rod', Z: '#forge:tools/screwdrivers' }
    ).damageIngredient(Ingredient.of('#forge:tools/screwdrivers'))

    event.shaped(
        Item.of('tacz:attachment', '{AttachmentId:"ars_armorer:mod_low_damage"}'),
        ['ZVF', 'VRV', 'FVF'],
        { F: 'ars_nouveau:magebloom_fiber', V: '#kubejs:water_essences', R: 'gtceu:holy_silver_rod', Z: '#forge:tools/screwdrivers' }
    ).damageIngredient(Ingredient.of('#forge:tools/screwdrivers'))

    event.shaped(
        Item.of('tacz:attachment', '{AttachmentId:"ars_armorer:mod_high_damage"}'),
        ['ZHE', 'HRH', 'EHE'],
        { E: '#kubejs:earth_essences', H: 'gtceu:holy_silver_ingot', R: 'gtceu:holy_silver_rod', Z: '#forge:tools/screwdrivers' }
    ).damageIngredient(Ingredient.of('#forge:tools/screwdrivers'))

    event.shaped(
        Item.of('tacz:attachment', '{AttachmentId:"ars_armorer:mod_rapid_regeneration"}'),
        ['ZHG', 'FRF', 'GHG'],
        { G: 'ars_nouveau:source_gem', H: 'gtceu:holy_silver_ingot', F: 'ars_nouveau:magebloom_fiber', R: 'gtceu:holy_silver_rod', Z: '#forge:tools/screwdrivers' }
    ).damageIngredient(Ingredient.of('#forge:tools/screwdrivers'))

    event.shaped(
        Item.of('tacz:attachment', '{AttachmentId:"ars_armorer:mod_instant_renewal"}'),
        ['ZHO', 'GRG', 'OHO'],
        { O: 'gtceu:holy_silver_foil', H: 'gtceu:holy_silver_ingot', G: 'ars_nouveau:source_gem', R: 'gtceu:holy_silver_rod', Z: '#forge:tools/screwdrivers' }
    ).damageIngredient(Ingredient.of('#forge:tools/screwdrivers'))

    event.shaped(
        Item.of('tacz:attachment', '{AttachmentId:"ars_armorer:mod_conflux_accelerator"}'),
        ['ZQG', 'FRF', 'GQG'],
        { G: 'ars_nouveau:source_gem', Q: 'gtceu:prima_materia_plate', F: 'ars_nouveau:magebloom_fiber', R: 'gtceu:holy_silver_rod', Z: '#forge:tools/screwdrivers' }
    ).damageIngredient(Ingredient.of('#forge:tools/screwdrivers'))

    event.shaped(
        Item.of('tacz:attachment', '{AttachmentId:"ars_armorer:mod_proficient_utilization"}'),
        ['ZFQ', 'ARA', 'QFQ'],
        { Q: 'gtceu:prima_materia_plate', F: 'ars_nouveau:magebloom_fiber', A: 'ars_nouveau:arcane_core', R: 'gtceu:holy_silver_rod', Z: '#forge:tools/screwdrivers' }
    ).damageIngredient(Ingredient.of('#forge:tools/screwdrivers'))
})
