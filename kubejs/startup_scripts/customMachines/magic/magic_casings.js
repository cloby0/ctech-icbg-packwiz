StartupEvents.registry('block', event => {


    event.create('runic_forge_casing')
        .textureAll('kubejs:block/runic_forge_casing')
        .displayName('Terra Iridite Runic Casing')
        .stoneSoundType()
        .hardness(3).resistance(6)
        .tagBlock('mineable/pickaxe')

    event.create('mana_livingrock_casing')
        .textureAll('kubejs:block/mana_livingrock_casing')
        .displayName('Livingrock Mana Casing')
        .stoneSoundType()
        .hardness(2).resistance(6)
        .tagBlock('mineable/pickaxe')
})
