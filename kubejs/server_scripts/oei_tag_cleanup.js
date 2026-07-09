// OEI replaces loser items with the gtceu winner, but the forge material tags
// still list every original id -> EMI (no OEI patch, unlike JEI) shows the
// winner N times per tag. Strip the losers from their tags so each holds only
// the winner. Mirrors the losers in oei_unification.js. Recipes untouched.

ServerEvents.tags('item', event => {
  let losersByTag = {
    'forge:dusts/iron':                ['superbwarfare:iron_powder'],
    'forge:dusts/tungsten':            ['superbwarfare:tungsten_powder'],
    'forge:dusts/certus_quartz':       ['ae2:certus_quartz_dust'],

    'forge:ingots/bronze':             ['silentgear:bronze_ingot', 'createbigcannons:bronze_ingot'],
    'forge:ingots/cemented_carbide':   ['superbwarfare:cemented_carbide_ingot'],
    'forge:ingots/lead':               ['superbwarfare:lead_ingot'],
    'forge:ingots/silver':             ['superbwarfare:silver_ingot'],
    'forge:ingots/steel':              ['ad_astra:steel_ingot', 'superbwarfare:steel_ingot', 'magistuarmory:steel_ingot', 'createbigcannons:steel_ingot'],
    'forge:ingots/tungsten':           ['superbwarfare:tungsten_ingot'],

    'forge:nuggets/bronze':            ['createbigcannons:bronze_scrap'],
    'forge:nuggets/steel':             ['ad_astra:steel_nugget', 'magistuarmory:steel_nugget', 'createbigcannons:steel_scrap'],

    'forge:plates/copper':             ['superbwarfare:copper_plate'],
    'forge:plates/iron':               ['ad_astra:iron_plate'],
    'forge:plates/steel':              ['ad_astra:steel_plate', 'magistuarmory:steel_plate'],
    'forge:plates/obsidian':           ['create:sturdy_sheet'],

    'forge:raw_materials/lead':        ['superbwarfare:galena'],
    'forge:raw_materials/mithril':     ['irons_spellbooks:raw_mithril'],
    'forge:raw_materials/silver':      ['superbwarfare:raw_silver'],

    'forge:rods/iron':                 ['ad_astra:iron_rod', 'silentgear:iron_rod'],
    'forge:rods/steel':                ['ad_astra:steel_rod'],

    'forge:storage_blocks/charcoal':       ['quark:charcoal_block'],
    'forge:storage_blocks/lead':           ['superbwarfare:lead_block'],
    'forge:storage_blocks/silicon':        ['expatternprovider:silicon_block'],
    'forge:storage_blocks/silver':         ['superbwarfare:silver_block'],
    'forge:storage_blocks/steel':          ['ad_astra:steel_block', 'superbwarfare:steel_block', 'createbigcannons:steel_block'],
    'forge:storage_blocks/tungsten':       ['superbwarfare:tungsten_block'],
    'forge:storage_blocks/certus_quartz':  ['ae2:quartz_block']
  }

    let losers = losersByTag[tag]
    for (let i = 0; i < losers.length; i++) {
      event.remove(tag, losers[i])
    }
  }
})
