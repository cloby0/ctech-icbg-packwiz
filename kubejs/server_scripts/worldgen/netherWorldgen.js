GTCEuServerEvents.oreVeins(event => {

    // Malum's Nether gem. Mod-native generation stripped in malumRemoveWorldgen.js.
    event.add("kubejs:blazing_quartz_vein", vein => {
        vein.weight(120)
        vein.clusterSize(28)
        vein.density(0.5)
        vein.discardChanceOnAirExposure(0)

        vein.layer("netherrack")
        vein.dimensions("minecraft:the_nether")

        vein.heightRangeUniform(16, 96)

        vein.layeredVeinGenerator(generator => generator
            .buildLayerPattern(pattern => pattern
                .layer(l => l.weight(3).mat(GTMaterials.get("blazing_quartz")).size(3, 6))
                .layer(l => l.weight(2).mat(GTMaterials.NetherQuartz).size(2, 4))
                .layer(l => l.weight(1).mat(GTMaterials.Sulfur).size(1, 3))
            )
        )
        vein.surfaceIndicatorGenerator(indicator => indicator
            .surfaceRock(GTMaterials.get("blazing_quartz"))
            .placement("surface")
            .density(0.2)
            .radius(5)
        )
    })

})
