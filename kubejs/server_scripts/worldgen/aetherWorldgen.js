GTCEuServerEvents.oreVeins(event => {
    // Was kubejs:mana_gem_vein -- mana lost its .ore() (gtceuMaterialRegistry.js), vinteum fills
    // this worldgen slot instead.
    event.add("kubejs:vinteum_vein", vein => {
        vein.weight(200)
        vein.clusterSize(40)
        vein.density(0.6)
        vein.discardChanceOnAirExposure(0)

        vein.layer("holystone")
        vein.dimensions("aether:the_aether")
        vein.biomes("#aether:is_aether")

        vein.heightRangeUniform(16, 128)

        vein.dikeVeinGenerator(generator => generator
            .withBlock(GTMaterials.get('vinteum'), 4, 40, 95)
            .withBlock(GTMaterials.get('zanite'), 3, 20, 55)
        )
        vein.surfaceIndicatorGenerator(indicator => indicator
            .surfaceRock(GTMaterials.get('vinteum'))
            .placement("above")
            .density(0.4)
            .radius(5)
        )
    })

    event.add("kubejs:silver_vein", vein => {
        vein.weight(200)
        vein.clusterSize(40)
        vein.density(0.6)
        vein.discardChanceOnAirExposure(0)

        vein.layer("holystone")
        vein.dimensions("aether:the_aether")
        vein.biomes("#aether:is_aether")

        vein.heightRangeUniform(16, 128)

        vein.dikeVeinGenerator(generator => generator
            .withBlock(GTMaterials.Silver, 4, 40, 95)
            .withBlock(GTMaterials.get('ambrosium'), 3, 20, 55)
        )
        vein.surfaceIndicatorGenerator(indicator => indicator
            .surfaceRock(GTMaterials.get('ambrosium'))
            .placement("above")
            .density(0.4)
            .radius(5)
        )
    })

    event.add("kubejs:mithril_vein", vein => {
        vein.weight(200)
        vein.clusterSize(40)
        vein.density(0.6)
        vein.discardChanceOnAirExposure(0)

        vein.layer("holystone")
        vein.dimensions("aether:the_aether")
        vein.biomes("#aether:is_aether")

        vein.heightRangeUniform(16, 128)

        vein.dikeVeinGenerator(generator => generator
            .withBlock(GTMaterials.get('gravitite'), 4, 40, 95)
            .withBlock(GTMaterials.get('mithril'), 3, 20, 55)
        )
        vein.surfaceIndicatorGenerator(indicator => indicator
            .surfaceRock(GTMaterials.get('mithril'))
            .placement("above")
            .density(0.4)
            .radius(5)
        )
    })

    event.add("kubejs:skyjade_vein", vein => {
        vein.weight(200)
        vein.clusterSize(40)
        vein.density(0.6)
        vein.discardChanceOnAirExposure(0)

        vein.layer("holystone")
        vein.dimensions("aether:the_aether")
        vein.biomes("#aether:is_aether")

        vein.heightRangeUniform(16, 128)

        vein.dikeVeinGenerator(generator => generator
            .withBlock(GTMaterials.get('veridium'), 4, 40, 95)
            .withBlock(GTMaterials.get('skyjade'), 3, 20, 55)
        )
        vein.surfaceIndicatorGenerator(indicator => indicator
            .surfaceRock(GTMaterials.get('skyjade'))
            .placement("above")
            .density(0.4)
            .radius(5)
        )
    })

    event.add("kubejs:glowstone_vein_ae", vein => {
        vein.weight(150)
        vein.clusterSize(45)
        vein.density(0.6)
        vein.discardChanceOnAirExposure(0)

        vein.layer("holystone")
        vein.dimensions("aether:the_aether")
        vein.biomes("#aether:is_aether")

        vein.heightRangeUniform(32, 128)

        vein.dikeVeinGenerator(generator => generator
            .withBlock(GTMaterials.Glowstone, 4, 40, 95)
            .withBlock(GTMaterials.Sulfur, 3, 20, 55)
        )
        vein.surfaceIndicatorGenerator(indicator => indicator
            .surfaceRock(GTMaterials.Sulfur)
            .placement("above")
            .density(0.4)
            .radius(5)
        )
    })

    event.add("kubejs:amethyst_vein_ae", vein => {
        vein.weight(150)
        vein.clusterSize(40)
        vein.density(0.6)
        vein.discardChanceOnAirExposure(0)

        vein.layer("holystone")
        vein.dimensions("aether:the_aether")
        vein.biomes("#aether:is_aether")

        vein.heightRangeUniform(16, 96)

        vein.dikeVeinGenerator(generator => generator
            .withBlock(GTMaterials.Amethyst, 4, 40, 95)
            .withBlock(GTMaterials.Calcite, 3, 20, 55)
        )
        vein.surfaceIndicatorGenerator(indicator => indicator
            .surfaceRock(GTMaterials.Amethyst)
            .placement("above")
            .density(0.4)
            .radius(5)
        )
    })

    event.add("kubejs:calcite_vein_ae", vein => {
        vein.weight(220)
        vein.clusterSize(50)
        vein.density(0.6)
        vein.discardChanceOnAirExposure(0)

        vein.layer("holystone")
        vein.dimensions("aether:the_aether")
        vein.biomes("#aether:is_aether")

        vein.heightRangeUniform(16, 128)

        vein.dikeVeinGenerator(generator => generator
            .withBlock(GTMaterials.Calcite, 4, 40, 95)
            .withBlock(GTMaterials.Talc, 3, 20, 55)
        )
        vein.surfaceIndicatorGenerator(indicator => indicator
            .surfaceRock(GTMaterials.Calcite)
            .placement("above")
            .density(0.4)
            .radius(5)
        )
    })

    event.add("kubejs:platinum_vein_ae", vein => {
        vein.weight(60)
        vein.clusterSize(35)
        vein.density(0.6)
        vein.discardChanceOnAirExposure(0)

        vein.layer("holystone")
        vein.dimensions("aether:the_aether")
        vein.biomes("#aether:is_aether")

        vein.heightRangeUniform(16, 64)

        vein.dikeVeinGenerator(generator => generator
            .withBlock(GTMaterials.Platinum, 4, 40, 95)
            .withBlock(GTMaterials.Palladium, 3, 20, 55)
        )
        vein.surfaceIndicatorGenerator(indicator => indicator
            .surfaceRock(GTMaterials.Platinum)
            .placement("above")
            .density(0.3)
            .radius(5)
        )
    })

    event.add("kubejs:prosperity_vein_ae", vein => {
        vein.weight(120)
        vein.clusterSize(40)
        vein.density(0.6)
        vein.discardChanceOnAirExposure(0)

        vein.layer("holystone")
        vein.dimensions("aether:the_aether")
        vein.biomes("#aether:is_aether")

        vein.heightRangeUniform(16, 128)

        vein.dikeVeinGenerator(generator => generator
            .withBlock(GTMaterials.get('prosperity'), 4, 40, 95)
            .withBlock(GTMaterials.Emerald, 3, 20, 55)
        )
        vein.surfaceIndicatorGenerator(indicator => indicator
            .surfaceRock(GTMaterials.get('prosperity'))
            .placement("above")
            .density(0.4)
            .radius(5)
        )
    })

    event.add("kubejs:diamond_vein_ae", vein => {
        vein.weight(50)
        vein.clusterSize(35)
        vein.density(0.6)
        vein.discardChanceOnAirExposure(0)

        vein.layer("holystone")
        vein.dimensions("aether:the_aether")
        vein.biomes("#aether:is_aether")

        vein.heightRangeUniform(16, 64)

        vein.dikeVeinGenerator(generator => generator
            .withBlock(GTMaterials.Diamond, 4, 40, 95)
            .withBlock(GTMaterials.Graphite, 3, 20, 55)
        )
        vein.surfaceIndicatorGenerator(indicator => indicator
            .surfaceRock(GTMaterials.Diamond)
            .placement("above")
            .density(0.3)
            .radius(5)
        )
    })

    // Malum's entry materials. Aether access lands right after luminessence,
    // matching the Spirit Altar's Journeyman placement.
    event.add("kubejs:soulstone_vein", vein => {
        vein.weight(160)
        vein.clusterSize(32)
        vein.density(0.5)
        vein.discardChanceOnAirExposure(0)

        vein.layer("holystone")
        vein.dimensions("aether:the_aether")
        vein.biomes("#aether:is_aether")

        vein.heightRangeUniform(8, 96)

        vein.dikeVeinGenerator(generator => generator
            .withBlock(GTMaterials.get('soulstone'), 4, 8, 70)
            .withBlock(GTMaterials.get('brilliance'), 2, 55, 96)
        )
        vein.surfaceIndicatorGenerator(indicator => indicator
            .surfaceRock(GTMaterials.get('soulstone'))
            .placement("above")
            .density(0.3)
            .radius(5)
        )
    })
})