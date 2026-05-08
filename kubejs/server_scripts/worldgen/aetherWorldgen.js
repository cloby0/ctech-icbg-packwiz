GTCEuServerEvents.oreVeins(event => {
    event.add("kubejs:source_gem_vein", vein => {
        vein.weight(200)
        vein.clusterSize(40)
        vein.density(0.3)
        vein.discardChanceOnAirExposure(0)

        vein.layer("holystone")
        vein.dimensions("aether:the_aether")
        vein.biomes("#aether:is_aether")

        vein.heightRangeUniform(16, 128)
        
        vein.dikeVeinGenerator(generator => generator
            .withBlock(GTMaterials.get('source'), 4, 40, 95) // 
            .withBlock(GTMaterials.get('zanite'), 3, 20, 55) // 
        )
        vein.surfaceIndicatorGenerator(indicator => indicator
            .surfaceRock(GTMaterials.get('source'))
            .placement("above") // 
            .density(0.4)
            .radius(5)
        )
    })

    event.add("kubejs:silver_vein", vein => {
        vein.weight(200)
        vein.clusterSize(40)
        vein.density(0.3)
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
            .placement("above") // 
            .density(0.4)
            .radius(5)
        )
    })

    event.add("kubejs:mithril_vein", vein => {
        vein.weight(200)
        vein.clusterSize(40)
        vein.density(0.3)
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
            .placement("above") // 
            .density(0.4)
            .radius(5)
        )
    })

    event.add("kubejs:skyjade", vein => {
        vein.weight(200)
        vein.clusterSize(40)
        vein.density(0.3)
        vein.discardChanceOnAirExposure(0)

        vein.layer("holystone")
        vein.dimensions("aether:the_aether")
        vein.biomes("#aether:is_aether")

        vein.heightRangeUniform(16, 128)
        
        vein.dikeVeinGenerator(generator => generator
            .withBlock(GTMaterials.get('veridium'), 4, 40, 95) // 
            .withBlock(GTMaterials.get('skyjade'), 3, 20, 55) // 
        )
        vein.surfaceIndicatorGenerator(indicator => indicator
            .surfaceRock(GTMaterials.get('skyjade'))
            .placement("above") // 
            .density(0.4)
            .radius(5)
        )
    })
})