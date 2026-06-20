StartupEvents.registry('block', event => {

    event.create('draconic_framework_casing')
        .textureAll('kubejs:block/draconic_framework_casing')
        .displayName('Draconic Framework Casing')
        .hardness(5).resistance(12)
        .tagBlock('mineable/pickaxe')

    event.create('awakened_framework_casing')
        .textureAll('kubejs:block/awakened_framework_casing')
        .displayName('Awakened Framework Casing')
        .hardness(6).resistance(15)
        .tagBlock('mineable/pickaxe')

    // 12600K / level 16 / energy discount 16 / tier 9
    // Springs auto-generated from draconium GENERATE_SPRING flag
    event.create('draconium_wire_coil', 'gtceu:coil')
        .temperature(12600)
        .level(16)
        .energyDiscount(16)
        .tier(9)
        .coilMaterial(() => GTMaterials.get('draconium'))

    // 14400K / level 32 / energy discount 16 / tier 10
    // Springs auto-generated from awakened_draconium GENERATE_SPRING flag
    event.create('awakened_draconium_wire_coil', 'gtceu:coil')
        .temperature(14400)
        .level(32)
        .energyDiscount(16)
        .tier(10)
        .coilMaterial(() => GTMaterials.get('awakened_draconium'))
})
