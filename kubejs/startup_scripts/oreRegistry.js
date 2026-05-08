let UtilsJS = Java.loadClass("dev.latvian.mods.kubejs.util.UtilsJS")

GTCEuStartupEvents.registry('gtceu:tag_prefix', e => {
    function createStoneTypeOre(type, properties) {
        if (properties === undefined)
            properties = {}

        if (properties.baseModel === undefined)
            properties.baseModel = type.namespace + ":block/" + type.path

        if (properties.material === undefined)
            properties.material = null

        if (properties.blockState === undefined)
            properties.blockState = (() => Block.getBlock(type).defaultBlockState())

        e.create(type.path, 'ore')
            .stateSupplier(properties.blockState)
            .baseModelLocation(properties.baseModel)
            .materialSupplier(properties.material)
            .miningToolTag("mineable/pickaxe")
    }

    // Aether
    createStoneTypeOre('aether:holystone', { blockState: () => UtilsJS.parseBlockState("aether:holystone[double_drops=true]")})
    createStoneTypeOre('aether:icestone')
    createStoneTypeOre('deep_aether:aseterite', { blockState: () => UtilsJS.parseBlockState("deep_aether:aseterite[double_drops=true]")})

    // Ad Astra
    createStoneTypeOre('ad_astra:moon_stone')
    createStoneTypeOre('ad_astra:mars_stone')
    createStoneTypeOre('ad_astra:venus_stone')
    createStoneTypeOre('ad_astra:mercury_stone')
    createStoneTypeOre('ad_astra:glacio_stone')
})