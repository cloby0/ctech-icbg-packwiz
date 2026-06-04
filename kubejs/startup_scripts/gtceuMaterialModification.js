
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

//Ingots
    ingot('desh', 'ad_astra:desh_ingot')
    ingot('ostrum', 'ad_astra:ostrum_ingot')
    ingot('calorite', 'ad_astra:calorite_ingot')
})