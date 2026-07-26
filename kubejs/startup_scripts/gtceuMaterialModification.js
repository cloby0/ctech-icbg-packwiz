GTCEuStartupEvents.materialModification(/*'gtceu:material',*/ event => {

    function ingot (mat, item){
        TagPrefix.ingot['setIgnored(com.gregtechceu.gtceu.api.data.chemical.material.Material,java.util.function.Supplier[])'](GTMaterials.get(mat), 
        () => Item.getItem(item))
    }
    function block (mat, item){
        TagPrefix.block['setIgnored(com.gregtechceu.gtceu.api.data.chemical.material.Material,java.util.function.Supplier[])'](GTMaterials.get(mat), 
        () => Item.getItem(item))
    }
    function nugget (mat, item){
        TagPrefix.nugget['setIgnored(com.gregtechceu.gtceu.api.data.chemical.material.Material,java.util.function.Supplier[])'](GTMaterials.get(mat), 
        () => Item.getItem(item))
    }
    function plate (mat, item){
        TagPrefix.plate['setIgnored(com.gregtechceu.gtceu.api.data.chemical.material.Material,java.util.function.Supplier[])'](GTMaterials.get(mat), 
        () => Item.getItem(item))
    }
    function dust (mat, item){
        TagPrefix.dust['setIgnored(com.gregtechceu.gtceu.api.data.chemical.material.Material,java.util.function.Supplier[])'](GTMaterials.get(mat),
        () => Item.getItem(item))
    }
    function rawOre (mat, item){
        TagPrefix.rawOre['setIgnored(com.gregtechceu.gtceu.api.data.chemical.material.Material,java.util.function.Supplier[])'](GTMaterials.get(mat),
        () => Item.getItem(item))
    }
    function gem (mat, item){
        TagPrefix.gem['setIgnored(com.gregtechceu.gtceu.api.data.chemical.material.Material,java.util.function.Supplier[])'](GTMaterials.get(mat),
        () => Item.getItem(item))
    }
    function gemChipped (mat, item){
        TagPrefix.gemChipped['setIgnored(com.gregtechceu.gtceu.api.data.chemical.material.Material,java.util.function.Supplier[])'](GTMaterials.get(mat),
        () => Item.getItem(item))
    }
    function gemFlawed (mat, item){
        TagPrefix.gemFlawed['setIgnored(com.gregtechceu.gtceu.api.data.chemical.material.Material,java.util.function.Supplier[])'](GTMaterials.get(mat),
        () => Item.getItem(item))
    }
    function gemFlawless (mat, item){
        TagPrefix.gemFlawless['setIgnored(com.gregtechceu.gtceu.api.data.chemical.material.Material,java.util.function.Supplier[])'](GTMaterials.get(mat),
        () => Item.getItem(item))
    }
    function gemExquisite (mat, item){
        TagPrefix.gemExquisite['setIgnored(com.gregtechceu.gtceu.api.data.chemical.material.Material,java.util.function.Supplier[])'](GTMaterials.get(mat),
        () => Item.getItem(item))
    }


    function assumptionator(material, namespace) {
        ingot(material, `${namespace}:${material}_ingot`);
        nugget(material, `${namespace}:${material}_nugget`);
        block(material, `${namespace}:${material}_block`);
    }
    function adAstraFixer(material) {
        ingot(material, `ad_astra:${material}_ingot`)
        nugget(material, `ad_astra:${material}_nugget`)
        plate(material, `ad_astra:${material}_plate`)
        block(material, `ad_astra:${material}_block`)
    }

    // silentcompat ships ingot+nugget+block but no plate — GT generates plate
    function silentCompatFixer(material) {
        ingot(material, `silentcompat:${material}_ingot`)
        nugget(material, `silentcompat:${material}_nugget`)
        block(material, `silentcompat:${material}_block`)
    }

    adAstraFixer('desh')
    adAstraFixer('ostrum')
    adAstraFixer('calorite')

    assumptionator('manasteel', 'botania')
    assumptionator('terrasteel', 'botania')
    assumptionator('elementium', 'botania')

    ingot('gaia_spirit', 'botania:gaia_ingot')

    ingot('mithril', `irons_spellbooks:mithril_ingot`);

    gem('source', 'ars_nouveau:source_gem')

    ingot('gravitite', 'aether_redux:gravitite_ingot')

    gem('zanite', 'aether:zanite_gemstone')
    
    gem('ambrosium', 'aether:ambrosium_shard')

    gem('skyjade', 'deep_aether:skyjade')

    ingot('veridium', 'aether_redux:veridium_ingot')

    // Occultism's iesnium: unique to the mod, no gtceu duplicate. GT ore/macerator chain drives
    // acquisition (via the existing forge:ores/iesnium tag), all item forms stay occultism's own.
    assumptionator('iesnium', 'occultism')
    dust('iesnium', 'occultism:iesnium_dust')
    rawOre('iesnium', 'occultism:raw_iesnium')
    
    ingot('moon_cheese', 'ad_astra:cheese')
    block('moon_cheese', 'ad_astra:cheese_block')

    ingot('sky_steel', 'megacells:sky_steel_ingot')
    block('sky_steel', 'megacells:sky_steel_block')

    ingot('nethersteel', 'createbigcannons:nethersteel_ingot')
    block('nethersteel', 'createbigcannons:nethersteel_block')

    ingot('draconium', 'draconicevolution:draconium_ingot')
    nugget('draconium', 'draconicevolution:draconium_nugget')
    block('draconium', 'draconicevolution:draconium_block')

    ingot('awakened_draconium', 'draconicevolution:awakened_draconium_ingot')
    nugget('awakened_draconium', 'draconicevolution:awakened_draconium_nugget')
    block('awakened_draconium', 'draconicevolution:awakened_draconium_block')

    gem('chaos_crystal', 'draconicevolution:chaos_shard')

    silentCompatFixer('voidmetal')
    silentCompatFixer('solarmetal')
    silentCompatFixer('arcmetal')

    // Silent Gear native metals: SG's own items are canonical for every form (source mod's material).
    // GT's ore/macerator/washer/EBF chain (gtceuMaterialRegistry.js) still drives acquisition and
    // processing — setIgnored just points the output at silentgear's item instead of gtceu's.
    assumptionator('crimson_iron', 'silentgear')
    assumptionator('azure_silver', 'silentgear')
    assumptionator('blaze_gold', 'silentgear')
    assumptionator('azure_electrum', 'silentgear')
    assumptionator('crimson_steel', 'silentgear')
    assumptionator('tyrian_steel', 'silentgear')

    ;['crimson_iron', 'azure_silver', 'blaze_gold', 'azure_electrum', 'crimson_steel', 'tyrian_steel'].forEach(metal => {
        dust(metal, `silentgear:${metal}_dust`)
    })
    rawOre('crimson_iron', 'silentgear:raw_crimson_iron')
    rawOre('azure_silver', 'silentgear:raw_azure_silver')

    // ==== MysticalAgriculture ====
    // Essences: the dust form IS the _essence item (isotopes of source, no ingot).
    ;['inferium', 'prudentium', 'tertium', 'imperium', 'supremium'].forEach(e => {
        dust(e, `mysticalagriculture:${e}_essence`)
    })

    // Four classical element essences: dust form IS the base _essence item.
    ;['fire', 'water', 'earth', 'air'].forEach(e => {
        dust(`${e}_essence`, `mysticalagriculture:${e}_essence`)
    })

    // prosperity gem = prosperity_gemstone; gem block = prosperity_gemstone_block; rawOre = prosperity_shard
    // (mined from the Aether vein, aetherWorldgen.js). prosperity_ingot stays a plain MA item (not gregged).
    gem('prosperity', 'mysticalagriculture:prosperity_gemstone')
    block('prosperity', 'mysticalagriculture:prosperity_gemstone_block')
    rawOre('prosperity', 'mysticalagriculture:prosperity_shard')

    // -ites: prosperity+essence alloys, GEM form -> MA's <tier>_gemstone (+ gemstone block).
    // The MA <tier>_ingot line is obliterated; ingot uses are swapped to gtceu:<ite>_plate.
    // [ite material, MA tier name, namespace]
    function maIte(ite, tier, ns) {
        gem(ite,   `${ns}:${tier}_gemstone`)
        block(ite, `${ns}:${tier}_gemstone_block`)
    }
    maIte('inferite',           'inferium',           'mysticalagriculture')
    maIte('prudentite',         'prudentium',         'mysticalagriculture')
    maIte('tertite',            'tertium',            'mysticalagriculture')
    maIte('imperite',           'imperium',           'mysticalagriculture')
    maIte('supremite',          'supremium',          'mysticalagriculture')
    maIte('awakened_supremite', 'awakened_supremium', 'mysticalagriculture')
    maIte('insanite',           'insanium',           'mysticalagradditions')

    // soulium: gem + gemstone block + its own dust (ingot obliterated + swapped).
    gem('soulium',   'mysticalagriculture:soulium_gemstone')
    block('soulium', 'mysticalagriculture:soulium_gemstone_block')
    dust('soulium',  'mysticalagriculture:soulium_dust')

    // ==== Malum ====
    ingot('hallowed_gold', 'malum:hallowed_gold_ingot')
    nugget('hallowed_gold', 'malum:hallowed_gold_nugget')
    block('hallowed_gold', 'malum:block_of_hallowed_gold')

    ingot('soul_stained_steel', 'malum:soul_stained_steel_ingot')
    nugget('soul_stained_steel', 'malum:soul_stained_steel_nugget')
    block('soul_stained_steel', 'malum:block_of_soul_stained_steel')

    rawOre('soulstone', 'malum:raw_soulstone')
    gem('soulstone', 'malum:processed_soulstone')
    block('soulstone', 'malum:block_of_soulstone')

    rawOre('brilliance', 'malum:cluster_of_brilliance')
    gem('brilliance', 'malum:chunk_of_brilliance')
    block('brilliance', 'malum:block_of_brilliance')

    // blazing_quartz: no rawOre -- Malum's ore drops the gem directly, no raw form exists.
    gem('blazing_quartz', 'malum:blazing_quartz')
    block('blazing_quartz', 'malum:block_of_blazing_quartz')
})
