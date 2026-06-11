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

  // Magic tier tooltip tags
  event.add('kubejs:magic/apprentice', ['gtceu:luminessence_dust'])
  event.add('kubejs:magic/journeyman', ['ars_nouveau:source_gem', 'kubejs:resonant_zanite_crystal'])
  event.add('kubejs:magic/initiate',   ['gtceu:holy_silver_ingot', 'kubejs:sacred_ambrosium_shard', 'irons_spellbooks:divine_pearl'])
  event.add('kubejs:magic/sorcerer',   ['gtceu:prima_materia_ingot', 'aether_redux:gravitite_ingot', 'kubejs:element_attunement_stone', 'kubejs:chaos_essence'])
  event.add('kubejs:magic/alchemist',  ['botania:manasteel_ingot', 'gtceu:abstract_metal_ingot', 'kubejs:hexed_amethyst_core'])
  event.add('kubejs:magic/thaumaturge',['botania:terrasteel_ingot', 'kubejs:florid_compound', 'kubejs:living_metalloid', 'kubejs:rune_of_frost'])
  event.add('kubejs:magic/arcanist',   ['botania:elementium_ingot', 'kubejs:weak_elementium_dust', 'kubejs:elven_concentrate', 'kubejs:elementite_dust'])
  event.add('kubejs:magic/sage',       ['botania:gaia_ingot', 'kubejs:vengeful_gaia_spirit', 'kubejs:soul_of_gaia', 'kubejs:boundless_gaia_spirit_ingot'])
});