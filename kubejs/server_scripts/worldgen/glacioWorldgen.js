GTCEuServerEvents.oreVeins(event => {

// === GLACIO ===
// icy frozen world; LuV tier; Naquadah is the gate material
// no native Ad Astra ores; all ore gen from GTCEu
// geological character: evaporite deposits beneath ice; serpentinized silicate crust; iron-nickel core
// primary value on Glacio is atmospheric distillation and cryo fuel chains; veins are secondary

//Naquadah
//no natural co-occurrence; deep only; enriched naquadah trace represents partially-decayed ore pockets
    event.add("kubejs:naquadah_vein_gl", vein => {
        vein.weight(80)
        vein.clusterSize(35)
        vein.density(0.75)
        vein.discardChanceOnAirExposure(0)
        vein.layer("glacio")
        vein.dimensions("ad_astra:glacio")
        vein.biomes("ad_astra:glacio_snowy_barrens")
        vein.heightRangeUniform(-20, 40)
        vein.layeredVeinGenerator(generator => generator
            .buildLayerPattern(pattern => pattern
                .layer(l => l.weight(4).mat(GTMaterials.Naquadah).size(6, 12))
                .layer(l => l.weight(1).mat(GTMaterials.Plutonium239).size(1, 2))
            )
        )
        vein.surfaceIndicatorGenerator(indicator => indicator
            .surfaceRock(GTMaterials.Naquadah)
            .placement("surface")
            .density(0.15)
            .radius(5)
        )
    })

//Saltpeter/Evaporite
//KNO3 evaporite deposit beneath ice; nitrogen-rich Glacio atmosphere settles as subsurface brine
//Saltpeter main + Halite NaCl + Calcite; ties to nitrogen chemistry and atmosphere distillation theme
    event.add("kubejs:saltpeter_vein_gl", vein => {
        vein.weight(40)
        vein.clusterSize(34)
        vein.density(0.8)
        vein.discardChanceOnAirExposure(0)
        vein.layer("glacio")
        vein.dimensions("ad_astra:glacio")
        vein.biomes("ad_astra:glacio_snowy_barrens")
        vein.heightRangeUniform(20, 70)
        vein.layeredVeinGenerator(generator => generator
            .buildLayerPattern(pattern => pattern
                .layer(l => l.weight(3).mat(GTMaterials.Saltpeter).size(3, 5))
                .layer(l => l.weight(2).mat(GTMaterials.RockSalt).size(2, 3))
                .layer(l => l.weight(1).mat(GTMaterials.Calcite).size(1, 2))
            )
        )
        vein.surfaceIndicatorGenerator(indicator => indicator
            .surfaceRock(GTMaterials.Saltpeter)
            .placement("surface")
            .density(0.25)
            .radius(5)
        )
    })

//Borax/Trona Evaporite
//Na2B4O7·10H2O; borax and trona are classic cold-dry evaporite minerals
//Borax main + Trona + Calcite; fits Glacio's cold evaporite theme; boron useful for fiberglass and fluxes
    event.add("kubejs:borax_vein_gl", vein => {
        vein.weight(35)
        vein.clusterSize(32)
        vein.density(0.8)
        vein.discardChanceOnAirExposure(0)
        vein.layer("glacio")
        vein.dimensions("ad_astra:glacio")
        vein.biomes("ad_astra:glacio_snowy_barrens")
        vein.heightRangeUniform(25, 75)
        vein.layeredVeinGenerator(generator => generator
            .buildLayerPattern(pattern => pattern
                .layer(l => l.weight(3).mat(GTMaterials.Trona).size(3, 5))
                .layer(l => l.weight(2).mat(GTMaterials.Trona).size(1, 3))
                .layer(l => l.weight(1).mat(GTMaterials.Calcite).size(1, 2))
            )
        )
        vein.surfaceIndicatorGenerator(indicator => indicator
            .surfaceRock(GTMaterials.Calcite)
            .placement("surface")
            .density(0.25)
            .radius(5)
        )
    })

//Ilmenite/Rutile
//titanium ores in the silicate rock layer beneath the ice shell
//Ilmenite FeTiO3 + Rutile TiO2; realistic for icy silicate bodies
    event.add("kubejs:ilmenite_vein_gl", vein => {
        vein.weight(25)
        vein.clusterSize(28)
        vein.density(0.75)
        vein.discardChanceOnAirExposure(0)
        vein.layer("glacio")
        vein.dimensions("ad_astra:glacio")
        vein.biomes("ad_astra:glacio_snowy_barrens")
        vein.heightRangeUniform(15, 60)
        vein.layeredVeinGenerator(generator => generator
            .buildLayerPattern(pattern => pattern
                .layer(l => l.weight(3).mat(GTMaterials.Ilmenite).size(2, 4))
                .layer(l => l.weight(2).mat(GTMaterials.Rutile).size(1, 2))
                .layer(l => l.weight(1).mat(GTMaterials.Magnetite).size(1, 1))
            )
        )
        vein.surfaceIndicatorGenerator(indicator => indicator
            .surfaceRock(GTMaterials.Ilmenite)
            .placement("surface")
            .density(0.2)
            .radius(4)
        )
    })

//Pentlandite
//iron-nickel sulfide; icy body cores are iron-nickel dominant; Pentlandite (Fe,Ni)9S8 is the primary ore
//Cobalt trace; realistic for undifferentiated icy silicate bodies
    event.add("kubejs:pentlandite_vein_gl", vein => {
        vein.weight(40)
        vein.clusterSize(34)
        vein.density(0.8)
        vein.discardChanceOnAirExposure(0)
        vein.layer("glacio")
        vein.dimensions("ad_astra:glacio")
        vein.biomes("ad_astra:glacio_snowy_barrens")
        vein.heightRangeUniform(5, 55)
        vein.layeredVeinGenerator(generator => generator
            .buildLayerPattern(pattern => pattern
                .layer(l => l.weight(3).mat(GTMaterials.Pentlandite).size(3, 5))
                .layer(l => l.weight(2).mat(GTMaterials.Nickel).size(1, 2))
                .layer(l => l.weight(1).mat(GTMaterials.Cobalt).size(1, 1))
            )
        )
        vein.surfaceIndicatorGenerator(indicator => indicator
            .surfaceRock(GTMaterials.Pentlandite)
            .placement("surface")
            .density(0.25)
            .radius(4)
        )
    })

//Talc/Magnesite
//serpentinization products; water-rock interaction at the ice-silicate boundary produces talc and magnesite
//Mg3Si4O10(OH)2 + MgCO3; thematic for subsurface hydrothermal activity on an icy moon
    event.add("kubejs:talc_vein_gl", vein => {
        vein.weight(30)
        vein.clusterSize(28)
        vein.density(0.75)
        vein.discardChanceOnAirExposure(0)
        vein.layer("glacio")
        vein.dimensions("ad_astra:glacio")
        vein.biomes("ad_astra:glacio_snowy_barrens")
        vein.heightRangeUniform(20, 65)
        vein.layeredVeinGenerator(generator => generator
            .buildLayerPattern(pattern => pattern
                .layer(l => l.weight(3).mat(GTMaterials.Talc).size(3, 5))
                .layer(l => l.weight(2).mat(GTMaterials.Magnesite).size(1, 3))
                .layer(l => l.weight(1).mat(GTMaterials.Calcite).size(1, 2))
            )
        )
        vein.surfaceIndicatorGenerator(indicator => indicator
            .surfaceRock(GTMaterials.Talc)
            .placement("surface")
            .density(0.2)
            .radius(4)
        )
    })

})
