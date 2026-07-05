ServerEvents.tags('item', event => {
  event.add('aether:aether_portal_activation_items', 'gtceu:luminessence_dust');

  const elements = [
    "air",
    "earth",
    "fire",
    "water"
  ]

  elements.forEach(element => {
    event.add(`kubejs:${element}_essences`, `ars_nouveau:${element}_essence`);
    event.add(`kubejs:${element}_essences`, `mysticalagriculture:${element}_essence`);
  })

  event.add('forge:cheese', 'ad_astra:cheese');

  event.add('forge:gems/ambrosium', 'aether:ambrosium_shard');
  event.add('forge:gems/zanite', 'aether:zanite_gemstone');

  event.add('forge:ingots/cemented_carbide', 'superbwarfare:cemented_carbide_ingot');

  event.remove('cataclysm_spellbooks:technomancy_focus', 'minecraft:redstone')
  event.add('cataclysm_spellbooks:technomancy_focus', '#gtceu:circuits/lv')

  event.add('irons_spellbooks:fire_focus',      'ars_nouveau:fire_essence')
  event.add('irons_spellbooks:ice_focus',       'ars_nouveau:water_essence')
  event.add('irons_spellbooks:nature_focus',    'ars_nouveau:earth_essence')
  event.add('irons_spellbooks:lightning_focus', 'ars_nouveau:air_essence')
  event.add('irons_spellbooks:holy_focus',    'minecraft:golden_apple')

  event.add('kubejs:magic/apprentice', ['gtceu:luminessence_dust', 'hexcasting:charged_amethyst', 'irons_spellbooks:magic_cloth'])
  event.add('kubejs:magic/journeyman', ['ars_nouveau:source_gem', 'kubejs:resonant_zanite_crystal', 'aether_redux:veridium_ingot', 'irons_spellbooks:arcane_ingot', 'irons_spellbooks:cinder_essence'])
  event.add('kubejs:magic/journeyman', ['irons_spellbooks:arcane_rune', 'irons_spellbooks:blood_rune', 'irons_spellbooks:cooldown_rune', 'irons_spellbooks:ender_rune', 'irons_spellbooks:evocation_rune', 'irons_spellbooks:fire_rune', 'irons_spellbooks:holy_rune', 'irons_spellbooks:ice_rune', 'irons_spellbooks:lightning_rune', 'irons_spellbooks:nature_rune', 'irons_spellbooks:protection_rune', 'cataclysm_spellbooks:abyssal_rune', 'cataclysm_spellbooks:technomancy_rune'])
  event.add('kubejs:magic/initiate',   ['gtceu:holy_silver_ingot', 'kubejs:sacred_ambrosium_shard', 'irons_spellbooks:divine_pearl', 'gtceu:skyforged_ingot'])
  event.add('kubejs:magic/sorcerer',   ['gtceu:prima_materia_ingot', 'aether_redux:gravitite_ingot', 'kubejs:element_attunement_stone', 'kubejs:chaos_essence', 'irons_spellbooks:pyrium_ingot', 'kubejs:pyromatic_codex', 'kubejs:evocation_folio'])
  event.add('kubejs:magic/alchemist',  ['botania:manasteel_ingot', 'gtceu:abstract_metal_ingot', 'kubejs:hexed_amethyst_core'])
  event.add('kubejs:magic/thaumaturge',['botania:terrasteel_ingot', 'kubejs:florid_compound', 'kubejs:living_metalloid', 'kubejs:rune_of_frost'])
  event.add('kubejs:magic/arcanist',   ['botania:elementium_ingot', 'kubejs:weak_elementium_dust', 'kubejs:elven_concentrate', 'kubejs:elementite_dust', 'kubejs:glacial_grimoire', 'kubejs:verdant_chronicle', 'kubejs:technomatic_folio', 'extrabotany:aerialite_ingot', 'extrabotany:photonium_ingot', 'extrabotany:shadowium_ingot'])
  event.add('kubejs:magic/sage',       ['gtceu:wilden_alloy_ingot', 'botania:gaia_ingot', 'kubejs:vengeful_gaia_spirit', 'kubejs:soul_of_gaia', 'kubejs:boundless_gaia_spirit_ingot', 'kubejs:gaian_blood_core', 'kubejs:gaian_holy_core', 'kubejs:gaian_void_core', 'kubejs:gaian_annihilation_core', 'kubejs:blood_grimoire', 'kubejs:radiant_sanctum', 'kubejs:eldritch_codex', 'kubejs:obliteration_chronicle', 'kubejs:harbinger_codex'])
  event.add('kubejs:magic/sage_plus', ['extrabotany:orichalcos_ingot', 'extrabotany:hero_medal'])
});
