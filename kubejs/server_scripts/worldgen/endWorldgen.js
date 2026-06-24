GTCEuServerEvents.oreVeins(event => {
    event.add("kubejs:draconium_vein_end", vein => {
        vein.weight(40)
        vein.clusterSize(30)
        vein.density(0.5)
        vein.discardChanceOnAirExposure(0)

        vein.layer("endstone")
        vein.dimensions("minecraft:the_end")

        vein.heightRangeUniform(10, 60)

        vein.layeredVeinGenerator(generator => generator
            .buildLayerPattern(pattern => pattern
                .layer(l => l.weight(3).mat(GTMaterials.get('draconium')).size(4, 8))
                .layer(l => l.weight(2).mat(GTMaterials.Plutonium239).size(2, 6))
                .layer(l => l.weight(1).mat(GTMaterials.Plutonium241).size(2, 4))
            )
        )
        vein.surfaceIndicatorGenerator(indicator => indicator
            .surfaceRock(GTMaterials.get('draconium'))
            .placement("surface")
            .density(0.2)
            .radius(5)
        )
    })
})
