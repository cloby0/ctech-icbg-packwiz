GTCEuStartupEvents.materialModification(/*'gtceu:material',*/ event => {

// setIgnored tells GT "don't generate your own item for this material form, use this mod's item instead"
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
    function gem (mat, item){
        TagPrefix.gem['setIgnored(com.gregtechceu.gtceu.api.data.chemical.material.Material,java.util.function.Supplier[])'](GTMaterials.get(mat), 
        () => Item.getItem(item))
    }


    // assumptionator: ingot/nugget/block only (botania doesn't ship plates)
    function assumptionator(material, namespace) {
        ingot(material, `${namespace}:${material}_ingot`);
        nugget(material, `${namespace}:${material}_nugget`);
        block(material, `${namespace}:${material}_block`);
    }
    // adAstraFixer: includes plate because Ad Astra ships plate items unlike most magic mods
    function adAstraFixer(material) {
        ingot(material, `ad_astra:${material}_ingot`)
        nugget(material, `ad_astra:${material}_nugget`)
        plate(material, `ad_astra:${material}_plate`)
        block(material, `ad_astra:${material}_block`)
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

})