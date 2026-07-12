// GT ore veins for the Silent Gear native ore metals. Silent Gear's own nether/end ore worldgen is
// disabled via kubejs/data/silentgear/forge/biome_modifier/{nether,end}_ores.json overrides.
// crimson_iron -> nether, azure_silver -> end. Materials registered in gtceuMaterialRegistry.js.
// Uses GTCEu's built-in "netherrack"/"endstone" world_gen_layers (WorldGenLayers.java) - do not
// register duplicate layers for these vanilla dimensions.

GTCEuServerEvents.oreVeins(event => {

    event.add("kubejs:crimson_iron_vein_nether", vein => {
        vein.weight(70)
        vein.clusterSize(32)
        vein.density(0.7)
        vein.discardChanceOnAirExposure(0)
        vein.layer("netherrack")
        vein.dimensions("minecraft:the_nether")
        vein.heightRangeUniform(10, 118)
        vein.layeredVeinGenerator(generator => generator
            .buildLayerPattern(pattern => pattern
                .layer(l => l.weight(4).mat(GTMaterials.get("crimson_iron")).size(8, 14))
                .layer(l => l.weight(2).mat(GTMaterials.Pyrite).size(6, 8))
                .layer(l => l.weight(1).mat(GTMaterials.Nickel).size(4, 6))
                .layer(l => l.weight(1).mat(GTMaterials.Gold).size(2, 4))
            )
        )
        vein.surfaceIndicatorGenerator(indicator => indicator
            .surfaceRock(GTMaterials.get("crimson_iron"))
            .placement("surface")
            .density(0.15)
            .radius(4)
        )
    })

    event.add("kubejs:azure_silver_vein_end", vein => {
        vein.weight(60)
        vein.clusterSize(28)
        vein.density(0.7)
        vein.discardChanceOnAirExposure(0)
        vein.layer("endstone")
        vein.dimensions("minecraft:the_end")
        vein.heightRangeUniform(16, 92)
        vein.layeredVeinGenerator(generator => generator
            .buildLayerPattern(pattern => pattern
                .layer(l => l.weight(4).mat(GTMaterials.get("azure_silver")).size(6, 10))
                .layer(l => l.weight(2).mat(GTMaterials.Silver).size(4, 6))
                .layer(l => l.weight(1).mat(GTMaterials.Amethyst).size(2, 4))
            )
        )
        vein.surfaceIndicatorGenerator(indicator => indicator
            .surfaceRock(GTMaterials.get("azure_silver"))
            .placement("surface")
            .density(0.15)
            .radius(4)
        )
    })

})
