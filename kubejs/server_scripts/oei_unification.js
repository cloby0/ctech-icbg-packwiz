// OEI material unification (replaces Almost Unified). Winner = gtceu, except
// plates/copper + plates/iron where gtceu has no tagged plate -> create sheet.
// Every id below was verified present in its forge tag via oei_tag_dump.js.
// Ores are intentionally omitted: OEI has no stone-strata concept, so unifying
// forge:ores/* would collapse gtceu's strata ores and break foreign worldgen.

ServerEvents.highPriorityData(event => {
  event.addJson('oei:replacements/gtceu_unification.json', [
    // dusts
    { matchItems: ['superbwarfare:iron_powder'],     resultItems: 'gtceu:iron_dust' },
    { matchItems: ['superbwarfare:tungsten_powder'], resultItems: 'gtceu:tungsten_dust' },
    { matchItems: ['ae2:certus_quartz_dust'],        resultItems: 'gtceu:certus_quartz_dust' },
    { matchItems: ['occultism:silver_dust'],         resultItems: 'gtceu:silver_dust' },

    // ingots
    { matchItems: ['silentgear:bronze_ingot', 'createbigcannons:bronze_ingot'], resultItems: 'gtceu:bronze_ingot' },
    { matchItems: ['superbwarfare:cemented_carbide_ingot'], resultItems: 'gtceu:cemented_carbide_ingot' },
    { matchItems: ['superbwarfare:lead_ingot'],   resultItems: 'gtceu:lead_ingot' },
    { matchItems: ['superbwarfare:silver_ingot', 'occultism:silver_ingot'], resultItems: 'gtceu:silver_ingot' },
    { matchItems: ['ad_astra:steel_ingot', 'superbwarfare:steel_ingot', 'magistuarmory:steel_ingot', 'createbigcannons:steel_ingot'], resultItems: 'gtceu:steel_ingot' },
    { matchItems: ['superbwarfare:tungsten_ingot'], resultItems: 'gtceu:tungsten_ingot' },

    // nuggets
    { matchItems: ['createbigcannons:bronze_scrap'], resultItems: 'gtceu:bronze_nugget' },
    { matchItems: ['ad_astra:steel_nugget', 'magistuarmory:steel_nugget', 'createbigcannons:steel_scrap'], resultItems: 'gtceu:steel_nugget' },
    { matchItems: ['occultism:silver_nugget'], resultItems: 'gtceu:silver_nugget' },

    // plates (gtceu untagged for copper/iron plate -> create sheet wins by priority)
    { matchItems: ['superbwarfare:copper_plate'], resultItems: 'create:copper_sheet' },
    { matchItems: ['ad_astra:iron_plate'],        resultItems: 'create:iron_sheet' },
    { matchItems: ['ad_astra:steel_plate', 'magistuarmory:steel_plate'], resultItems: 'gtceu:steel_plate' },
    { matchItems: ['create:sturdy_sheet'], resultItems: 'gtceu:obsidian_plate' },

    // raw materials
    { matchItems: ['superbwarfare:galena'],        resultItems: 'gtceu:raw_lead' },
    { matchItems: ['irons_spellbooks:raw_mithril'], resultItems: 'gtceu:raw_mithril' },
    { matchItems: ['superbwarfare:raw_silver', 'occultism:raw_silver'], resultItems: 'gtceu:raw_silver' },

    // rods
    { matchItems: ['ad_astra:iron_rod', 'silentgear:iron_rod'], resultItems: 'gtceu:iron_rod' },
    { matchItems: ['ad_astra:steel_rod'], resultItems: 'gtceu:steel_rod' },

    // storage blocks
    { matchItems: ['quark:charcoal_block'],          resultItems: 'gtceu:charcoal_block' },
    { matchItems: ['superbwarfare:lead_block'],      resultItems: 'gtceu:lead_block' },
    { matchItems: ['expatternprovider:silicon_block'], resultItems: 'gtceu:silicon_block' },
    { matchItems: ['superbwarfare:silver_block', 'occultism:silver_block'], resultItems: 'gtceu:silver_block' },
    { matchItems: ['ad_astra:steel_block', 'superbwarfare:steel_block', 'createbigcannons:steel_block'], resultItems: 'gtceu:steel_block' },
    { matchItems: ['superbwarfare:tungsten_block'],  resultItems: 'gtceu:tungsten_block' },
    { matchItems: ['ae2:quartz_block'], resultItems: 'gtceu:certus_quartz_block' },
    { matchItems: ['occultism:raw_silver_block'], resultItems: 'gtceu:raw_silver_block' }

    // silent gear native metals removed entirely (crimson_iron, azure_silver, blaze_gold,
    // azure_electrum, crimson_steel, tyrian_steel) - all forms are TagPrefix.setIgnored() to
    // silentgear's own items in gtceuMaterialModification.js, no gtceu duplicate exists to unify.
  ])
})
