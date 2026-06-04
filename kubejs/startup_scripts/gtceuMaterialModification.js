GTCEuStartupEvents.materialModification(/*'gtceu:material',*/ event => {

//Functions
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


    //just like doing it normally but makes some assumptions abt the namespace
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

    adAstraFixer('desh')
    adAstraFixer('ostrum')
    adAstraFixer('calorite')

    assumptionator('manasteel', 'botania')
    assumptionator('terrasteel', 'botania')
    assumptionator('elementium', 'botania')

    ingot('mithril', `irons_spellbooks:mithril_ingot`);

    
    

})