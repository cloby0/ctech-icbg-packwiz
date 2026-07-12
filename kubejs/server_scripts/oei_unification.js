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

    // ingots
    { matchItems: ['silentgear:bronze_ingot', 'createbigcannons:bronze_ingot'], resultItems: 'gtceu:bronze_ingot' },
    { matchItems: ['superbwarfare:cemented_carbide_ingot'], resultItems: 'gtceu:cemented_carbide_ingot' },
    { matchItems: ['superbwarfare:lead_ingot'],   resultItems: 'gtceu:lead_ingot' },
    { matchItems: ['superbwarfare:silver_ingot'], resultItems: 'gtceu:silver_ingot' },
    { matchItems: ['ad_astra:steel_ingot', 'superbwarfare:steel_ingot', 'magistuarmory:steel_ingot', 'createbigcannons:steel_ingot'], resultItems: 'gtceu:steel_ingot' },
    { matchItems: ['superbwarfare:tungsten_ingot'], resultItems: 'gtceu:tungsten_ingot' },

    // nuggets
    { matchItems: ['createbigcannons:bronze_scrap'], resultItems: 'gtceu:bronze_nugget' },
    { matchItems: ['ad_astra:steel_nugget', 'magistuarmory:steel_nugget', 'createbigcannons:steel_scrap'], resultItems: 'gtceu:steel_nugget' },

    // plates (gtceu untagged for copper/iron plate -> create sheet wins by priority)
    { matchItems: ['superbwarfare:copper_plate'], resultItems: 'create:copper_sheet' },
    { matchItems: ['ad_astra:iron_plate'],        resultItems: 'create:iron_sheet' },
    { matchItems: ['ad_astra:steel_plate', 'magistuarmory:steel_plate'], resultItems: 'gtceu:steel_plate' },
    { matchItems: ['create:sturdy_sheet'], resultItems: 'gtceu:obsidian_plate' },

    // raw materials
    { matchItems: ['superbwarfare:galena'],        resultItems: 'gtceu:raw_lead' },
    { matchItems: ['irons_spellbooks:raw_mithril'], resultItems: 'gtceu:raw_mithril' },
    { matchItems: ['superbwarfare:raw_silver'],    resultItems: 'gtceu:raw_silver' },

    // rods
    { matchItems: ['ad_astra:iron_rod', 'silentgear:iron_rod'], resultItems: 'gtceu:iron_rod' },
    { matchItems: ['ad_astra:steel_rod'], resultItems: 'gtceu:steel_rod' },

    // storage blocks
    { matchItems: ['quark:charcoal_block'],          resultItems: 'gtceu:charcoal_block' },
    { matchItems: ['superbwarfare:lead_block'],      resultItems: 'gtceu:lead_block' },
    { matchItems: ['expatternprovider:silicon_block'], resultItems: 'gtceu:silicon_block' },
    { matchItems: ['superbwarfare:silver_block'],    resultItems: 'gtceu:silver_block' },
    { matchItems: ['ad_astra:steel_block', 'superbwarfare:steel_block', 'createbigcannons:steel_block'], resultItems: 'gtceu:steel_block' },
    { matchItems: ['superbwarfare:tungsten_block'],  resultItems: 'gtceu:tungsten_block' },
    { matchItems: ['ae2:quartz_block'], resultItems: 'gtceu:certus_quartz_block' },

    // silent gear native metals -> gtceu (materials registered in gtceuMaterialRegistry.js)
    { matchItems: ['silentgear:crimson_iron_ingot'],   resultItems: 'gtceu:crimson_iron_ingot' },
    { matchItems: ['silentgear:crimson_iron_dust'],    resultItems: 'gtceu:crimson_iron_dust' },
    { matchItems: ['silentgear:crimson_iron_nugget'],  resultItems: 'gtceu:crimson_iron_nugget' },
    { matchItems: ['silentgear:crimson_iron_block'],   resultItems: 'gtceu:crimson_iron_block' },
    { matchItems: ['silentgear:raw_crimson_iron'],     resultItems: 'gtceu:raw_crimson_iron' },
    { matchItems: ['silentgear:azure_silver_ingot'],   resultItems: 'gtceu:azure_silver_ingot' },
    { matchItems: ['silentgear:azure_silver_dust'],    resultItems: 'gtceu:azure_silver_dust' },
    { matchItems: ['silentgear:azure_silver_nugget'],  resultItems: 'gtceu:azure_silver_nugget' },
    { matchItems: ['silentgear:azure_silver_block'],   resultItems: 'gtceu:azure_silver_block' },
    { matchItems: ['silentgear:raw_azure_silver'],     resultItems: 'gtceu:raw_azure_silver' },
    { matchItems: ['silentgear:blaze_gold_ingot'],     resultItems: 'gtceu:blaze_gold_ingot' },
    { matchItems: ['silentgear:blaze_gold_dust'],      resultItems: 'gtceu:blaze_gold_dust' },
    { matchItems: ['silentgear:blaze_gold_nugget'],    resultItems: 'gtceu:blaze_gold_nugget' },
    { matchItems: ['silentgear:blaze_gold_block'],     resultItems: 'gtceu:blaze_gold_block' },
    { matchItems: ['silentgear:azure_electrum_ingot'], resultItems: 'gtceu:azure_electrum_ingot' },
    { matchItems: ['silentgear:azure_electrum_dust'],  resultItems: 'gtceu:azure_electrum_dust' },
    { matchItems: ['silentgear:azure_electrum_nugget'],resultItems: 'gtceu:azure_electrum_nugget' },
    { matchItems: ['silentgear:azure_electrum_block'], resultItems: 'gtceu:azure_electrum_block' },
    { matchItems: ['silentgear:crimson_steel_ingot'],  resultItems: 'gtceu:crimson_steel_ingot' },
    { matchItems: ['silentgear:crimson_steel_dust'],   resultItems: 'gtceu:crimson_steel_dust' },
    { matchItems: ['silentgear:crimson_steel_nugget'], resultItems: 'gtceu:crimson_steel_nugget' },
    { matchItems: ['silentgear:crimson_steel_block'],  resultItems: 'gtceu:crimson_steel_block' },
    { matchItems: ['silentgear:tyrian_steel_ingot'],   resultItems: 'gtceu:tyrian_steel_ingot' },
    { matchItems: ['silentgear:tyrian_steel_dust'],    resultItems: 'gtceu:tyrian_steel_dust' },
    { matchItems: ['silentgear:tyrian_steel_nugget'],  resultItems: 'gtceu:tyrian_steel_nugget' },
    { matchItems: ['silentgear:tyrian_steel_block'],   resultItems: 'gtceu:tyrian_steel_block' }
  ])
})
