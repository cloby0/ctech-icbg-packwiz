GTCEuServerEvents.oreVeins(event => {

    // voidmetal is IV-tier locked to the End — Sheldonite companion signals osmium/iridium byproduct chain
    event.add("kubejs:voidmetal_vein_end", vein => {
        vein.weight(20)
        vein.clusterSize(20)
        vein.density(0.5)
        vein.discardChanceOnAirExposure(0)
        vein.layer("end")
        vein.dimensions("minecraft:the_end")
        vein.biomes("minecraft:the_end")
        vein.heightRangeUniform(-20, 60)
        vein.layeredVeinGenerator(generator => generator
            .buildLayerPattern(pattern => pattern
                .layer(l => l.weight(3).mat(GTMaterials.get("voidmetal")).size(3, 6))
                .layer(l => l.weight(3).mat(GTMaterials.Sheldonite).size(2, 4))
                .layer(l => l.weight(2).mat(GTMaterials.Bastnasite).size(1, 3))
                .layer(l => l.weight(1).mat(GTMaterials.Osmiridium).size(1, 2))
            )
        )
        vein.surfaceIndicatorGenerator(indicator => indicator
            .surfaceRock(GTMaterials.Sheldonite)
            .placement("surface")
            .density(0.2)
            .radius(5)
        )
    })

})
