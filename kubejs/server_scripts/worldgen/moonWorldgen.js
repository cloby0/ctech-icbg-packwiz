GTCEuServerEvents.oreVeins(event => {
    event.modify("gtceu:magnetite_vein_end", vein => {
        vein.dimensions("ad_astra:moon")
        vein.layer("moon")
        vein.biomes("ad_astra:lunar_wastelands")
    })
    event.modify("gtceu:bauxite_vein_end", vein => {
        vein.dimensions("ad_astra:moon")
        vein.layer("moon")
        vein.biomes("ad_astra:lunar_wastelands")
    })
    event.modify("gtceu:sheldonite_vein", vein => {
        vein.dimensions("ad_astra:moon")
        vein.layer("moon")
        vein.biomes("ad_astra:lunar_wastelands")
    })
//Desh
    event.add("kubejs:desh_vein_mn", vein => {
    // Basic vein generation properties
        vein.weight(80)
        vein.clusterSize(30)
        vein.density(0.8)
        vein.discardChanceOnAirExposure(0)
    // Define where the vein can generate
        vein.layer("moon")
        vein.dimensions("ad_astra:moon")
        vein.biomes("ad_astra:lunar_wastelands")
    // Define a height range:
        vein.heightRangeUniform(20, 60)
    // Define the vein"s generator:
        vein.layeredVeinGenerator(generator => generator
            .buildLayerPattern(pattern => pattern
                .layer(l => l.weight(1).mat(GTMaterials.get("desh")).size(8, 16))
                .layer(l => l.weight(2).mat(GTMaterials.Hematite).size(8, 8))
                .layer(l => l.weight(1).block(() => Block.getBlock("ae2:sky_stone_block")))
            )
        )
    // Add one or more type of surface indicator to the vein:
        vein.surfaceIndicatorGenerator(indicator => indicator
            .surfaceRock(GTMaterials.get("desh"))
            .placement("surface")
            .density(0.2)
            .radius(5)
        ) 
    })
//Molybdenum
    event.add("kubejs:molybdenum_vein_mn", vein => {
        vein.weight(5)
        vein.clusterSize(27)
        vein.density(0.8)
        vein.discardChanceOnAirExposure(0)
        vein.layer("moon")
        vein.dimensions("ad_astra:moon")
        vein.biomes("ad_astra:lunar_wastelands")
        vein.heightRangeUniform(20, 50)
        vein.layeredVeinGenerator(generator => generator
            .buildLayerPattern(pattern => pattern
                .layer(l => l.weight(3).mat(GTMaterials.Wulfenite).size(2, 4))
                .layer(l => l.weight(2).mat(GTMaterials.Molybdenite).size(1, 1))
                .layer(l => l.weight(1).mat(GTMaterials.Molybdenum).size(1, 1))
                .layer(l => l.weight(1).mat(GTMaterials.Powellite).size(1, 1))
            )
        )
        vein.surfaceIndicatorGenerator(indicator => indicator
            .surfaceRock(GTMaterials.Molybdenum)
            .placement("surface")
            .density(0.4)
            .radius(5)
        ) 
    })

//Quartzite
    event.add("kubejs:quartz_vein_mn", vein => {
        vein.weight(20)
        vein.clusterSize(29)
        vein.density(0.8)
        vein.discardChanceOnAirExposure(0)
        vein.layer("moon")
        vein.dimensions("ad_astra:moon")
        vein.biomes("ad_astra:lunar_wastelands")
        vein.heightRangeUniform(40, 80)
        vein.layeredVeinGenerator(generator => generator
            .buildLayerPattern(pattern => pattern
                .layer(l => l.weight(3).mat(GTMaterials.Quartzite).size(2, 4))
                .layer(l => l.weight(2).mat(GTMaterials.CertusQuartz).size(1, 1))
                .layer(l => l.weight(1).mat(GTMaterials.Barite).size(1, 1))
            )
        )
        vein.surfaceIndicatorGenerator(indicator => indicator
            .surfaceRock(GTMaterials.Quartzite)
            .placement("surface")
            .density(0.4)
            .radius(5)
        ) 
    })

//Monazite
    event.add("kubejs:monazite_vein_mn", vein => {
        vein.weight(30)
        vein.clusterSize(36)
        vein.density(0.8)
        vein.discardChanceOnAirExposure(0)
        vein.layer("moon")
        vein.dimensions("ad_astra:moon")
        vein.biomes("ad_astra:lunar_wastelands")
        vein.heightRangeUniform(20, 40)
        vein.layeredVeinGenerator(generator => generator
            .buildLayerPattern(pattern => pattern
                .layer(l => l.weight(3).mat(GTMaterials.Bastnasite).size(2, 4))
                .layer(l => l.weight(2).mat(GTMaterials.Monazite).size(1, 1))
                .layer(l => l.weight(1).mat(GTMaterials.Neodymium).size(1, 1))
            )
        )
        vein.surfaceIndicatorGenerator(indicator => indicator
            .surfaceRock(GTMaterials.Monazite)
            .placement("surface")
            .density(0.4)
            .radius(5)
        ) 
    })

//Ilmenite
    event.add("kubejs:ilmenite_vein_mn", vein => {
        vein.weight(30)
        vein.clusterSize(34)
        vein.density(0.8)
        vein.discardChanceOnAirExposure(0)
        vein.layer("moon")
        vein.dimensions("ad_astra:moon")
        vein.biomes("ad_astra:lunar_wastelands")
        vein.heightRangeUniform(20, 40)
        vein.layeredVeinGenerator(generator => generator
            .buildLayerPattern(pattern => pattern
                .layer(l => l.weight(3).mat(GTMaterials.Ilmenite).size(2, 4))
                .layer(l => l.weight(2).mat(GTMaterials.Chromite).size(1, 1))
                .layer(l => l.weight(1).mat(GTMaterials.Uvarovite).size(1, 1))
                .layer(l => l.weight(1).mat(GTMaterials.Perlite).size(1, 1))
            )
        )
        vein.surfaceIndicatorGenerator(indicator => indicator
            .surfaceRock(GTMaterials.Ilmenite)
            .placement("surface")
            .density(0.4)
            .radius(5)
        ) 
    })

//Copper
    event.add("kubejs:copper_vein_mn", vein => {
        vein.weight(80)
        vein.clusterSize(40)
        vein.density(0.8)
        vein.discardChanceOnAirExposure(0)
        vein.layer("moon")
        vein.dimensions("ad_astra:moon")
        vein.biomes("ad_astra:lunar_wastelands")
        vein.heightRangeUniform(-40, 10)
        vein.layeredVeinGenerator(generator => generator
            .buildLayerPattern(pattern => pattern
                .layer(l => l.weight(3).mat(GTMaterials.Chalcopyrite).size(2, 4))
                .layer(l => l.weight(2).mat(GTMaterials.Iron).size(1, 1))
                .layer(l => l.weight(1).mat(GTMaterials.Pyrite).size(1, 1))
                .layer(l => l.weight(1).mat(GTMaterials.Copper).size(1, 1))
            )
        )
        vein.surfaceIndicatorGenerator(indicator => indicator
            .surfaceRock(GTMaterials.Copper)
            .placement("surface")
            .density(0.4)
            .radius(5)
        ) 
    })

//Galena
    event.add("kubejs:galena_vein_mn", vein => {
        vein.weight(40)
        vein.clusterSize(36)
        vein.density(0.8)
        vein.discardChanceOnAirExposure(0)
        vein.layer("moon")
        vein.dimensions("ad_astra:moon")
        vein.biomes("ad_astra:lunar_wastelands")
        vein.heightRangeUniform(-5, 45)
        vein.layeredVeinGenerator(generator => generator
            .buildLayerPattern(pattern => pattern
                .layer(l => l.weight(3).mat(GTMaterials.Galena).size(2, 4))
                .layer(l => l.weight(2).mat(GTMaterials.Silver).size(1, 1))
                .layer(l => l.weight(1).mat(GTMaterials.Lead).size(1, 1))
            )
        )
        vein.surfaceIndicatorGenerator(indicator => indicator
            .surfaceRock(GTMaterials.Galena)
            .placement("surface")
            .density(0.4)
            .radius(5)
        ) 
    })

//Cassiterite
    event.add("kubejs:cassiterite_vein_mn", vein => {
        vein.weight(50)
        vein.clusterSize(44)
        vein.density(0.8)
        vein.discardChanceOnAirExposure(0)
        vein.layer("moon")
        vein.dimensions("ad_astra:moon")
        vein.biomes("ad_astra:lunar_wastelands")
        vein.heightRangeUniform(60, 220)
        vein.layeredVeinGenerator(generator => generator
            .buildLayerPattern(pattern => pattern
                .layer(l => l.weight(3).mat(GTMaterials.Tin).size(2, 4))
                .layer(l => l.weight(2).mat(GTMaterials.Cassiterite).size(1, 1))
            )
        )
        vein.surfaceIndicatorGenerator(indicator => indicator
            .surfaceRock(GTMaterials.Cassiterite)
            .placement("surface")
            .density(0.4)
            .radius(5)
        )
    })

//Moon Cheese — rare shallow vein, a geological mystery
    event.add("kubejs:moon_cheese_vein_mn", vein => {
        vein.weight(12)
        vein.clusterSize(18)
        vein.density(0.5)
        vein.discardChanceOnAirExposure(0)
        vein.layer("moon")
        vein.dimensions("ad_astra:moon")
        vein.biomes("ad_astra:lunar_wastelands")
        vein.heightRangeUniform(30, 80)
        vein.layeredVeinGenerator(generator => generator
            .buildLayerPattern(pattern => pattern
                .layer(l => l.weight(4).mat(GTMaterials.get("moon_cheese")).size(2, 5))
                .layer(l => l.weight(1).mat(GTMaterials.Calcite).size(1, 2))
            )
        )
        vein.surfaceIndicatorGenerator(indicator => indicator
            .surfaceRock(GTMaterials.get("moon_cheese"))
            .placement("surface")
            .density(0.15)
            .radius(3)
        )
    })

//Iron
    event.add("kubejs:iron_vein_mn", vein => {
        vein.weight(80)
        vein.clusterSize(44)
        vein.density(0.8)
        vein.discardChanceOnAirExposure(0)
        vein.layer("moon")
        vein.dimensions("ad_astra:moon")
        vein.biomes("ad_astra:lunar_wastelands")
        vein.heightRangeUniform(20, 60)
        vein.layeredVeinGenerator(generator => generator
            .buildLayerPattern(pattern => pattern
                .layer(l => l.weight(5).mat(GTMaterials.Goethite).size(8, 16))
                .layer(l => l.weight(2).mat(GTMaterials.YellowLimonite).size(8, 12))
                .layer(l => l.weight(2).mat(GTMaterials.Hematite).size(8, 8))
                .layer(l => l.weight(1).mat(GTMaterials.Malachite).size(8, 8))
            )
        )
        vein.surfaceIndicatorGenerator(indicator => indicator
            .surfaceRock(GTMaterials.Hematite)
            .placement("surface")
            .density(0.2)
            .radius(5))
    })

})