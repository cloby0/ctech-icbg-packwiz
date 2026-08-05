ServerEvents.tags('item', event => {
  const elements = [
    "air",
    "earth",
    "fire",
    "water"
  ]

  // magichem:essentia_<element> is the real thing (MagiChem's Alembic, entry-tier, wisdom 0) --
  // replaces the custom kubejs:<element>_essence items entirely. Per user direction 2026-07-28:
  // let MagiChem be a full-game system. MysticalAgriculture removed from the pack 2026-07-31.
  elements.forEach(element => {
    event.add(`kubejs:${element}_essences`, `magichem:essentia_${element}`);
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

  event.add('kubejs:magic/hobbyist',   ['magichem:essentia_fire', 'magichem:essentia_water', 'magichem:essentia_earth', 'magichem:essentia_air', 'kubejs:primordial_organic_muck', 'gtceu:iron_bolt', 'gtceu:gold_bolt', 'gtceu:ashen_ichor_ingot'])
  event.add('kubejs:magic/apprentice', ['hexcasting:charged_amethyst', 'irons_spellbooks:magic_cloth', 'botania:manasteel_ingot'])
  event.add('kubejs:magic/journeyman', ['gtceu:veridium_dust', 'kubejs:resonant_zanite_crystal', 'aether_redux:veridium_ingot', 'irons_spellbooks:arcane_ingot', 'irons_spellbooks:cinder_essence', 'botania:terrasteel_ingot', 'gtceu:luminessence_dust'])
  event.add('kubejs:magic/journeyman', ['irons_spellbooks:arcane_rune', 'irons_spellbooks:blood_rune', 'irons_spellbooks:cooldown_rune', 'irons_spellbooks:ender_rune', 'irons_spellbooks:evocation_rune', 'irons_spellbooks:fire_rune', 'irons_spellbooks:holy_rune', 'irons_spellbooks:ice_rune', 'irons_spellbooks:lightning_rune', 'irons_spellbooks:nature_rune', 'irons_spellbooks:protection_rune', 'cataclysm_spellbooks:abyssal_rune', 'cataclysm_spellbooks:technomancy_rune'])
  event.add('kubejs:magic/initiate',   ['gtceu:holy_silver_ingot', 'kubejs:sacred_ambrosium_shard', 'irons_spellbooks:divine_pearl', 'gtceu:skyforged_ingot', 'botania:elementium_ingot'])
  event.add('kubejs:magic/sorcerer',   ['gtceu:prima_materia_ingot', 'kubejs:resonant_gravitite_core', 'kubejs:element_attunement_stone', 'kubejs:chaos_essence', 'irons_spellbooks:pyrium_ingot', 'botania:gaia_ingot'])
  event.add('kubejs:magic/alchemist',  ['gtceu:distilled_animus_ingot', 'kubejs:arcane_residue', 'kubejs:hexed_amethyst_core', 'kubejs:hexed_mana_matrix'])
  event.add('kubejs:magic/thaumaturge', ['gtceu:starforged_chimerite_gem', 'kubejs:star_touched_chimerite'])
  event.add('kubejs:magic/arcanist',   ['gtceu:katharite_ingot', 'extrabotany:aerialite_ingot', 'extrabotany:photonium_ingot', 'extrabotany:shadowium_ingot'])
  event.add('kubejs:magic/sage',       ['gtceu:empyrean_ichor_ingot', 'kubejs:vengeful_wraith', 'kubejs:bound_astral_soul', 'kubejs:boundless_astral_ingot', 'kubejs:astral_blood_core', 'kubejs:astral_holy_core', 'kubejs:astral_void_core', 'kubejs:astral_annihilation_core', 'kubejs:blood_grimoire', 'kubejs:radiant_sanctum', 'kubejs:eldritch_codex', 'kubejs:obliteration_chronicle', 'kubejs:harbinger_codex', 'kubejs:pyromatic_codex', 'kubejs:evocation_folio', 'kubejs:glacial_grimoire', 'kubejs:verdant_chronicle', 'kubejs:technomatic_folio'])
  event.add('kubejs:magic/sage_plus', ['extrabotany:orichalcos_ingot', 'extrabotany:hero_medal'])
});
