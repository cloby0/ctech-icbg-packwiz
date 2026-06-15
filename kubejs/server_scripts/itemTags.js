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

  event.add('forge:gems/ambrosium', 'aether:ambrosium_shard');
  event.add('forge:gems/zanite', 'aether:zanite_gemstone');

  // technomancy focus: replace vanilla redstone with LV circuit
  event.remove('cataclysm_spellbooks:technomancy_focus', 'minecraft:redstone')
  event.add('cataclysm_spellbooks:technomancy_focus', '#gtceu:circuits/lv')

  // scroll_forge foci: add Ars crude essences where thematic, fix holy inconsistency
  event.add('irons_spellbooks:fire_focus',      'ars_nouveau:fire_essence')
  event.add('irons_spellbooks:ice_focus',       'ars_nouveau:water_essence')
  event.add('irons_spellbooks:nature_focus',    'ars_nouveau:earth_essence')
  event.add('irons_spellbooks:lightning_focus', 'ars_nouveau:air_essence')
  // holy rune uses golden_apple; add it to holy_focus so both work
  event.add('irons_spellbooks:holy_focus',    'minecraft:golden_apple')

  // Magic tier tooltip tags
  event.add('kubejs:magic/apprentice', ['gtceu:luminessence_dust', 'hexcasting:charged_amethyst', 'irons_spellbooks:magic_cloth'])
  event.add('kubejs:magic/journeyman', ['ars_nouveau:source_gem', 'kubejs:resonant_zanite_crystal', 'aether_redux:veridium_ingot', 'irons_spellbooks:arcane_ingot', 'irons_spellbooks:cinder_essence'])
  event.add('kubejs:magic/journeyman', ['irons_spellbooks:arcane_rune', 'irons_spellbooks:blood_rune', 'irons_spellbooks:cooldown_rune', 'irons_spellbooks:ender_rune', 'irons_spellbooks:evocation_rune', 'irons_spellbooks:fire_rune', 'irons_spellbooks:holy_rune', 'irons_spellbooks:ice_rune', 'irons_spellbooks:lightning_rune', 'irons_spellbooks:nature_rune', 'irons_spellbooks:protection_rune', 'cataclysm_spellbooks:abyssal_rune', 'cataclysm_spellbooks:technomancy_rune'])
  event.add('kubejs:magic/initiate',   ['gtceu:holy_silver_ingot', 'kubejs:sacred_ambrosium_shard', 'irons_spellbooks:divine_pearl'])
  event.add('kubejs:magic/sorcerer',   ['gtceu:prima_materia_ingot', 'aether_redux:gravitite_ingot', 'kubejs:element_attunement_stone', 'kubejs:chaos_essence', 'irons_spellbooks:pyrium_ingot', 'kubejs:pyromatic_codex', 'kubejs:evocation_folio'])
  event.add('kubejs:magic/alchemist',  ['botania:manasteel_ingot', 'gtceu:abstract_metal_ingot', 'kubejs:hexed_amethyst_core'])
  event.add('kubejs:magic/thaumaturge',['botania:terrasteel_ingot', 'kubejs:florid_compound', 'kubejs:living_metalloid', 'kubejs:rune_of_frost'])
  event.add('kubejs:magic/arcanist',   ['botania:elementium_ingot', 'kubejs:weak_elementium_dust', 'kubejs:elven_concentrate', 'kubejs:elementite_dust', 'kubejs:glacial_grimoire', 'kubejs:verdant_chronicle', 'kubejs:technomatic_folio'])
  event.add('kubejs:magic/sage',       ['botania:gaia_ingot', 'kubejs:vengeful_gaia_spirit', 'kubejs:soul_of_gaia', 'kubejs:boundless_gaia_spirit_ingot', 'kubejs:gaian_blood_core', 'kubejs:gaian_holy_core', 'kubejs:gaian_void_core', 'kubejs:gaian_annihilation_core', 'kubejs:blood_grimoire', 'kubejs:radiant_sanctum', 'kubejs:eldritch_codex', 'kubejs:obliteration_chronicle', 'kubejs:harbinger_codex'])
});