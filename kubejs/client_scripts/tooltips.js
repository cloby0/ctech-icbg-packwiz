ItemEvents.tooltip((event) => {
  event.add(
    "kubejs:matter_energy_circuit",
    "§7A chip that comes with the firmware to think in ME",
  );

  event.add("kubejs:draconic_processor", "§5ZPM-Tier Circuit");
  event.add("kubejs:draconic_processor_assembly", "§5UV-Tier Circuit");
  event.add("kubejs:draconic_processor_supercomputer", "§5UHV-Tier Circuit");
  event.add("kubejs:draconic_processor_mainframe", "§5UEV-Tier Circuit");

  event.add("kubejs:chaos_processor", "§4UV-Tier Circuit");
  event.add("kubejs:chaos_processor_assembly", "§4UHV-Tier Circuit");
  event.add("kubejs:chaos_processor_supercomputer", "§4UEV-Tier Circuit");
  event.add("kubejs:chaos_processor_mainframe", "§4UIV-Tier Circuit");

  event.add("kubejs:cumium_processor", "§aUEV-Tier Circuit");
  event.add("kubejs:cumium_processor_assembly", "§aUIV-Tier Circuit");
  event.add("kubejs:artificial_cumium_brain", "§aUXV-Tier Circuit");

  const TIER_ITEMS = [
    "gtceu:luminessence_dust",
    "hexcasting:charged_amethyst",
    "irons_spellbooks:magic_cloth",
    "kubejs:veridium_filings",
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
    "gtceu:abstract_metal_ingot",
    "gtceu:distilled_animus_ingot",
    "kubejs:arcane_residue",
    "kubejs:hexed_amethyst_core",
    "kubejs:hexed_mana_matrix",
    "gtceu:starforged_chimerite_ingot",
    "kubejs:star_touched_chimerite",
    "botania:elementium_ingot",
    "kubejs:weak_elementium_dust",
    "kubejs:elven_concentrate",
    "gtceu:gravitic_rubedo_ingot",
    "kubejs:glacial_grimoire",
    "kubejs:verdant_chronicle",
    "kubejs:technomatic_folio",
    "extrabotany:aerialite_ingot",
    "extrabotany:photonium_ingot",
    "extrabotany:shadowium_ingot",
    "botania:gaia_ingot",
    "kubejs:vengeful_gaia_spirit",
    "kubejs:soul_of_gaia",
    "kubejs:boundless_gaia_spirit_ingot",
    "kubejs:gaian_blood_core",
    "kubejs:gaian_holy_core",
    "kubejs:gaian_void_core",
    "kubejs:gaian_annihilation_core",
    "kubejs:blood_grimoire",
    "kubejs:radiant_sanctum",
    "kubejs:eldritch_codex",
    "kubejs:obliteration_chronicle",
    "kubejs:harbinger_codex",
    "extrabotany:orichalcos_ingot",
    "extrabotany:hero_medal",
  ];

  const TIER_LABELS = {
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

  event.add("draconicevolution:draconium_ingot", ["§5UV-Tier Material"]);
  event.add("draconicevolution:awakened_draconium_ingot", [
    "§6UHV-Tier Material",
  ]);
});
