GTCEuServerEvents.oreVeins(event => {
//Ostrum
//key Mars material, EV blast temp 3600; nickel + sulfur byproducts match ostrum ore config
    event.add("kubejs:ostrum_vein_ms", vein => {
        vein.weight(80)
        vein.clusterSize(35)
        vein.density(0.8)
        vein.discardChanceOnAirExposure(0)
        vein.layer("mars")
        vein.dimensions("ad_astra:mars")
        vein.biomes("ad_astra:martian_wastelands")
        vein.heightRangeUniform(10, 60)
        vein.layeredVeinGenerator(generator => generator
            .buildLayerPattern(pattern => pattern
                .layer(l => l.weight(3).mat(GTMaterials.get("ostrum")).size(8, 14))
                .layer(l => l.weight(2).mat(GTMaterials.Hematite).size(4, 8))
                .layer(l => l.weight(1).mat(GTMaterials.Nickel).size(1, 1))
                .layer(l => l.weight(1).mat(GTMaterials.Sulfur).size(1, 1))
            )
        )
        vein.surfaceIndicatorGenerator(indicator => indicator
            .surfaceRock(GTMaterials.get("ostrum"))
            .placement("surface")
            .density(0.2)
            .radius(5)
        )
    })

//Tungsten
//only spawns on Mars per progression design; intentionally rare and deep
//Scheelite (CaWO4) and Wolframite ((Fe,Mn)WO4) are the realistic tungsten ore minerals
//Molybdenite co-occurs with tungsten deposits in real geology
    event.add("kubejs:tungsten_vein_ms", vein => {
        vein.weight(8)
        vein.clusterSize(28)
        vein.density(0.7)
        vein.discardChanceOnAirExposure(0)
        vein.layer("mars")
        vein.dimensions("ad_astra:mars")
        vein.biomes("ad_astra:martian_wastelands")
        vein.heightRangeUniform(-20, 30)
        vein.layeredVeinGenerator(generator => generator
            .buildLayerPattern(pattern => pattern
                .layer(l => l.weight(3).mat(GTMaterials.Scheelite).size(2, 4))
                .layer(l => l.weight(2).mat(GTMaterials.Wolframite).size(1, 2))
                .layer(l => l.weight(1).mat(GTMaterials.Tungstate).size(1, 1))
                .layer(l => l.weight(1).mat(GTMaterials.Molybdenite).size(1, 1))
            )
        )
        vein.surfaceIndicatorGenerator(indicator => indicator
            .surfaceRock(GTMaterials.Scheelite)
            .placement("surface")
            .density(0.12)
            .radius(4)
        )
    })

//Chromite
//chromium for stainless steel (EV standard alloy); vanadium magnetite for vanadium steel
//both realistic in Martian basaltic crust; chromite found in Martian meteorites
    event.add("kubejs:chromite_vein_ms", vein => {
        vein.weight(25)
        vein.clusterSize(30)
        vein.density(0.8)
        vein.discardChanceOnAirExposure(0)
        vein.layer("mars")
        vein.dimensions("ad_astra:mars")
        vein.biomes("ad_astra:martian_wastelands")
        vein.heightRangeUniform(10, 50)
        vein.layeredVeinGenerator(generator => generator
            .buildLayerPattern(pattern => pattern
                .layer(l => l.weight(3).mat(GTMaterials.Chromite).size(2, 4))
                .layer(l => l.weight(2).mat(GTMaterials.VanadiumMagnetite).size(1, 2))
                .layer(l => l.weight(1).mat(GTMaterials.Magnetite).size(1, 1))
            )
        )
        vein.surfaceIndicatorGenerator(indicator => indicator
            .surfaceRock(GTMaterials.Chromite)
            .placement("surface")
            .density(0.3)
            .radius(4)
        )
    })

//Iron
//Mars is iron-oxide dominant; supports the bulk ore recovery loop; heavy hematite/goethite matrix
    event.add("kubejs:iron_vein_ms", vein => {
        vein.weight(90)
        vein.clusterSize(50)
        vein.density(0.85)
        vein.discardChanceOnAirExposure(0)
        vein.layer("mars")
        vein.dimensions("ad_astra:mars")
        vein.biomes("ad_astra:martian_wastelands")
        vein.heightRangeUniform(20, 90)
        vein.layeredVeinGenerator(generator => generator
            .buildLayerPattern(pattern => pattern
                .layer(l => l.weight(5).mat(GTMaterials.Hematite).size(8, 16))
                .layer(l => l.weight(2).mat(GTMaterials.YellowLimonite).size(8, 12))
                .layer(l => l.weight(2).mat(GTMaterials.Goethite).size(8, 8))
                .layer(l => l.weight(1).mat(GTMaterials.Magnetite).size(4, 4))
            )
        )
        vein.surfaceIndicatorGenerator(indicator => indicator
            .surfaceRock(GTMaterials.Hematite)
            .placement("surface")
            .density(0.3)
            .radius(5)
        )
    })

//Phosphate
//NASA confirmed phosphate-rich Martian geology; Apatite for fertilizer/chemical chains
//TricalciumPhosphate and sulfur co-occurring is realistic in evaporite-bearing basalt
    event.add("kubejs:phosphate_vein_ms", vein => {
        vein.weight(30)
        vein.clusterSize(28)
        vein.density(0.7)
        vein.discardChanceOnAirExposure(0)
        vein.layer("mars")
        vein.dimensions("ad_astra:mars")
        vein.biomes("ad_astra:martian_wastelands")
        vein.heightRangeUniform(20, 70)
        vein.layeredVeinGenerator(generator => generator
            .buildLayerPattern(pattern => pattern
                .layer(l => l.weight(3).mat(GTMaterials.TricalciumPhosphate).size(2, 4))
                .layer(l => l.weight(2).mat(GTMaterials.Apatite).size(1, 2))
                .layer(l => l.weight(1).mat(GTMaterials.Sulfur).size(1, 1))
            )
        )
        vein.surfaceIndicatorGenerator(indicator => indicator
            .surfaceRock(GTMaterials.Apatite)
            .placement("surface")
            .density(0.3)
            .radius(4)
        )
    })

//Nickel Sulfide
//nickel for EV alloys; pyrite gives sulfur for sulfuric acid lines
//Pentlandite (Fe,Ni)9S8 is the primary nickel sulfide ore mineral
    event.add("kubejs:nickel_vein_ms", vein => {
        vein.weight(30)
        vein.clusterSize(32)
        vein.density(0.8)
        vein.discardChanceOnAirExposure(0)
        vein.layer("mars")
        vein.dimensions("ad_astra:mars")
        vein.biomes("ad_astra:martian_wastelands")
        vein.heightRangeUniform(-20, 30)
        vein.layeredVeinGenerator(generator => generator
            .buildLayerPattern(pattern => pattern
                .layer(l => l.weight(3).mat(GTMaterials.Pentlandite).size(2, 4))
                .layer(l => l.weight(2).mat(GTMaterials.Pyrite).size(1, 2))
                .layer(l => l.weight(1).mat(GTMaterials.Nickel).size(1, 1))
            )
        )
        vein.surfaceIndicatorGenerator(indicator => indicator
            .surfaceRock(GTMaterials.Nickel)
            .placement("surface")
            .density(0.3)
            .radius(4)
        )
    })

})
