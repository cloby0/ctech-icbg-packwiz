GTCEuStartupEvents.registry('gtceu:tag_prefix', event => {
    event.create('holystone', 'ore') // 
        .stateSupplier(() => Block.getBlock('aether:holystone').defaultBlockState()) // 
        .baseModelLocation('aether:block/holystone') // 
        .unificationEnabled(true)
        .materialIconType(GTMaterialIconType.ore)
        .generationCondition(ItemGenerationCondition.hasOreProperty)
})