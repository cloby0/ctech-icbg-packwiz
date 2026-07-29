ServerEvents.tags('item', event => {
  const elements = [
    "air",
    "earth",
    "fire",
    "water"
  ]

  // magichem:essentia_<element> is the real thing (MagiChem's Alembic, entry-tier, wisdom 0) --
  // replaces the custom kubejs:<element>_essence items entirely. mysticalagriculture stays as
  // the alternate/cheaper route wherever a tier splits default vs MysticalAg. Per user direction
  // 2026-07-28: let MagiChem be a full-game system.
  elements.forEach(element => {
    event.add(`kubejs:${element}_essences`, `magichem:essentia_${element}`);
    event.add(`kubejs:${element}_essences`, `mysticalagriculture:${element}_essence`);
  })

  event.add('forge:cheese', 'ad_astra:cheese');

  event.add('forge:gems/ambrosium', 'aether:ambrosium_shard');
  event.add('forge:gems/zanite', 'aether:zanite_gemstone');

  event.add('forge:ingots/cemented_carbide', 'superbwarfare:cemented_carbide_ingot');

  event.remove('cataclysm_spellbooks:technomancy_focus', 'minecraft:redstone')
  event.add('cataclysm_spellbooks:technomancy_focus', '#gtceu:circuits/lv')

  event.add('irons_spellbooks:fire_focus',      'magichem:essentia_fire')
  event.add('irons_spellbooks:ice_focus',       'magichem:essentia_water')
  event.add('irons_spellbooks:nature_focus',    'magichem:essentia_earth')
  event.add('irons_spellbooks:lightning_focus', 'magichem:essentia_air')
  event.add('irons_spellbooks:holy_focus',    'minecraft:golden_apple')

  event.add('kubejs:magic/hobbyist',   ['magichem:essentia_fire', 'magichem:essentia_water', 'magichem:essentia_earth', 'magichem:essentia_air', 'kubejs:primordial_organic_muck', 'gtceu:iron_bolt', 'gtceu:gold_bolt'])
  event.add('kubejs:magic/apprentice', ['hexcasting:charged_amethyst', 'irons_spellbooks:magic_cloth'])
  event.add('kubejs:magic/journeyman', ['kubejs:veridium_filings', 'kubejs:resonant_zanite_crystal', 'aether_redux:veridium_ingot', 'irons_spellbooks:arcane_ingot', 'irons_spellbooks:cinder_essence'])
  event.add('kubejs:magic/journeyman', ['irons_spellbooks:arcane_rune', 'irons_spellbooks:blood_rune', 'irons_spellbooks:cooldown_rune', 'irons_spellbooks:ender_rune', 'irons_spellbooks:evocation_rune', 'irons_spellbooks:fire_rune', 'irons_spellbooks:holy_rune', 'irons_spellbooks:ice_rune', 'irons_spellbooks:lightning_rune', 'irons_spellbooks:nature_rune', 'irons_spellbooks:protection_rune', 'cataclysm_spellbooks:abyssal_rune', 'cataclysm_spellbooks:technomancy_rune'])
  event.add('kubejs:magic/initiate',   ['gtceu:holy_silver_ingot', 'kubejs:sacred_ambrosium_shard', 'irons_spellbooks:divine_pearl', 'gtceu:skyforged_ingot'])
  event.add('kubejs:magic/sorcerer',   ['gtceu:prima_materia_ingot', 'kubejs:resonant_gravitite_core', 'kubejs:element_attunement_stone', 'kubejs:chaos_essence', 'irons_spellbooks:pyrium_ingot'])
  event.add('kubejs:magic/alchemist',  ['gtceu:abstract_metal_ingot', 'gtceu:distilled_animus_ingot', 'kubejs:arcane_residue', 'kubejs:hexed_amethyst_core', 'kubejs:hexed_mana_matrix'])
  event.add('kubejs:magic/thaumaturge', ['gtceu:starforged_chimerite_ingot', 'kubejs:star_touched_chimerite'])
  event.add('kubejs:magic/arcanist',   ['gtceu:gravitic_rubedo_ingot', 'extrabotany:aerialite_ingot', 'extrabotany:photonium_ingot', 'extrabotany:shadowium_ingot'])
  event.add('kubejs:magic/sage',       ['gtceu:empyrean_ichor_ingot', 'botania:gaia_ingot', 'kubejs:vengeful_gaia_spirit', 'kubejs:soul_of_gaia', 'kubejs:boundless_gaia_spirit_ingot', 'kubejs:gaian_blood_core', 'kubejs:gaian_holy_core', 'kubejs:gaian_void_core', 'kubejs:gaian_annihilation_core', 'kubejs:blood_grimoire', 'kubejs:radiant_sanctum', 'kubejs:eldritch_codex', 'kubejs:obliteration_chronicle', 'kubejs:harbinger_codex', 'kubejs:pyromatic_codex', 'kubejs:evocation_folio', 'kubejs:glacial_grimoire', 'kubejs:verdant_chronicle', 'kubejs:technomatic_folio'])
  event.add('kubejs:magic/sage_plus', ['extrabotany:orichalcos_ingot', 'extrabotany:hero_medal'])
});
