GTCEuServerEvents.oreVeins(event => {
    event.add("kubejs:source_gem_vein", vein => {
        vein.weight(200)
        vein.clusterSize(40)
        vein.density(0.25)
        vein.discardChanceOnAirExposure(0)

        vein.layer("holystone")
        vein.dimensions("aether:the_aether")
        vein.biomes("#aether:is_aether")

        vein.heightRangeUniform(-60, 20)

        vein.veinedVeinGenerator(generator => generator
            .oreBlock(GTMaterials.source, 4) // 

            .rareBlockChance(0.25)
            .veininessThreshold(0.1)
            .maxRichnessThreshold(0.3)
            .minRichness(0.3)
            .maxRichness(0.5)
            .edgeRoundoffBegin(10) // 


            .maxEdgeRoundoff(0.2) // 
        )

        vein.surfaceIndicatorGenerator(indicator => indicator
            .surfaceRock(GTMaterials.source)
            .placement("above") // 
            .density(0.4)
            .radius(5)
        )
    })
})