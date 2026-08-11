ItemEvents.tooltip((event) => {
  event.add(
    "kubejs:matter_energy_circuit",
    "§7A chip that comes with the firmware to think in ME",
  );

  event.add("kubejs:argentware_processor", "§cZPM-Tier Circuit");
  event.add("kubejs:argentware_processor_assembly", "§cUV-Tier Circuit");
  event.add("kubejs:argentware_processor_supercomputer", "§cUHV-Tier Circuit");
  event.add("kubejs:argentware_processor_mainframe", [
    "§cUEV-Tier Circuit",
    "§7Maxwell's little friend",
  ]);

  event.add("kubejs:wraithware_processor_unbound", "§dUV-Tier Circuit (pre-ritual)");
  event.add("kubejs:wraithware_processor", "§dUV-Tier Circuit");
  event.add("kubejs:wraithware_processor_assembly", "§dUHV-Tier Circuit");
  event.add("kubejs:wraithware_processor_supercomputer", "§dUEV-Tier Circuit");
  event.add("kubejs:wraithware_processor_mainframe", [
    "§dUIV-Tier Circuit",
    "§7Spirit box (?)",
  ]);

  event.add("gtceu:determinism_engine", [
    "§7Issue one of how to turn thought experiments into transcendental science"
  ]);

  event.add("kubejs:egoware_processor", "§aUEV-Tier Circuit");
  event.add("kubejs:egoware_processor_assembly", "§aUIV-Tier Circuit");
  event.add("kubejs:artificial_cumium_brain", "§aUXV-Tier Circuit");

  const TIER_ITEMS = [
    "kubejs:primordial_organic_muck",
    "gtceu:iron_bolt",
    "gtceu:gold_bolt",
    "gtceu:ashen_ichor_ingot",
    "botania:manasteel_ingot",
    "botania:terrasteel_ingot",
    "gtceu:luminessence_dust",
    "hexcasting:charged_amethyst",
    "irons_spellbooks:magic_cloth",
    "gtceu:veridium_dust",
    "kubejs:resonant_zanite_crystal",
    "aether_redux:veridium_ingot",
    "irons_spellbooks:arcane_ingot",
    "irons_spellbooks:cinder_essence",
    "irons_spellbooks:arcane_rune",
    "irons_spellbooks:blood_rune",
    "irons_spellbooks:cooldown_rune",
    "irons_spellbooks:ender_rune",
    "irons_spellbooks:evocation_rune",
    "irons_spellbooks:fire_rune",
    "irons_spellbooks:holy_rune",
    "irons_spellbooks:ice_rune",
    "irons_spellbooks:lightning_rune",
    "irons_spellbooks:nature_rune",
    "irons_spellbooks:protection_rune",
    "cataclysm_spellbooks:abyssal_rune",
    "cataclysm_spellbooks:technomancy_rune",
    "gtceu:holy_silver_ingot",
    "kubejs:sacred_ambrosium_shard",
    "irons_spellbooks:divine_pearl",
    "gtceu:skyforged_ingot",
    "gtceu:prima_materia_ingot",
    "kubejs:resonant_gravitite_core",
    "kubejs:element_attunement_stone",
    "kubejs:chaos_essence",
    "irons_spellbooks:pyrium_ingot",
    "kubejs:pyromatic_codex",
    "kubejs:evocation_folio",
    "gtceu:distilled_animus_ingot",
    "kubejs:arcane_residue",
    "kubejs:hexed_amethyst_core",
    "kubejs:hexed_mana_matrix",
    "gtceu:starforged_chimerite_gem",
    "kubejs:star_touched_chimerite",
    "botania:elementium_ingot",
    "gtceu:katharite_ingot",
    "kubejs:glacial_grimoire",
    "kubejs:verdant_chronicle",
    "kubejs:technomatic_folio",
    "extrabotany:aerialite_ingot",
    "extrabotany:photonium_ingot",
    "extrabotany:shadowium_ingot",
    "botania:gaia_ingot",
    "kubejs:vengeful_wraith",
    "kubejs:bound_astral_soul",
    "kubejs:boundless_astral_ingot",
    "kubejs:astral_blood_core",
    "kubejs:astral_holy_core",
    "kubejs:astral_void_core",
    "kubejs:astral_annihilation_core",
    "kubejs:blood_grimoire",
    "kubejs:radiant_sanctum",
    "kubejs:eldritch_codex",
    "kubejs:obliteration_chronicle",
    "kubejs:harbinger_codex",
    "gtceu:empyrean_ichor_ingot",
    "extrabotany:orichalcos_ingot",
    "extrabotany:hero_medal",
  ];

  const TIER_LABELS = {
    "kubejs:magic/hobbyist": "Magic Tier: §8Hobbyist",
    "kubejs:magic/apprentice": "Magic Tier: §7Apprentice",
    "kubejs:magic/journeyman": "Magic Tier: §aJourneyman",
    "kubejs:magic/initiate": "Magic Tier: §6Initiate",
    "kubejs:magic/sorcerer": "Magic Tier: §5Sorcerer",
    "kubejs:magic/alchemist": "Magic Tier: §bAlchemist",
    "kubejs:magic/thaumaturge": "Magic Tier: §dThaumaturge",
    "kubejs:magic/arcanist": "Magic Tier: §9Arcanist",
    "kubejs:magic/sage": "Magic Tier: §eSage",
    "kubejs:magic/sage_plus": "Magic Tier: §4Sage+",
  };

  event.addAdvanced(TIER_ITEMS, (item, advanced, tooltip) => {
    for (const [tag, label] of Object.entries(TIER_LABELS)) {
      if (item.hasTag(tag)) {
        tooltip.add(Text.of(label));
        return;
      }
    }
  });

  event.add(
    "kubejs:element_attunement_stone",
    "§7Obtained from killing the Sun Spirit",
  );

  const COMPONENT_TIERS = [
    ["ichor", "§8Hobbyist"],
    ["zanite", "§7Apprentice"],
    ["veridian", "§aJourneyman"],
    ["elementium", "§6Initiate"],
    ["gravitic", "§5Sorcerer"],
    ["animus", "§bAlchemist"],
    ["starforged", "§dThaumaturge"],
    ["kathar", "§9Arcanist"],
    ["empyrean", "§eSage"],
    ["argent", "§cProphet"],
    ["wraith", "§4Ascendant"],
  ];
  const COMPONENT_SUFFIXES = [
    "sigil_blank",
    "sigil",
    "wizard_brain",
    "motive_core",
    "channeling_vessel",
    "ward_lattice",
  ];
  for (const [prefix, label] of COMPONENT_TIERS) {
    for (const suffix of COMPONENT_SUFFIXES) {
      event.add(`kubejs:${prefix}_${suffix}`, `${label}-Tier Component`);
    }
  }
});
