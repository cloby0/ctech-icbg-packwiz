GTCEuServerEvents.oreVeins(event => {

// === VENUS ===
// sulfuric volcanic world; CO2/H2SO4 atmosphere; basaltic surface; key material is Calorite (IV gate)
// sulfide mineralogy dominates; no water-bearing minerals

//Calorite
//key Venus material; high-temp volcanic sulfide deposit
//Sulfur and Pyrite co-occur in volcanic zones
    event.add("kubejs:calorite_vein_vn", vein => {
        vein.weight(80)
        vein.clusterSize(35)
        vein.density(0.8)
        vein.discardChanceOnAirExposure(0)
        vein.layer("venus")
        vein.dimensions("ad_astra:venus")
        vein.biomes("ad_astra:venus_wastelands")
        vein.heightRangeUniform(10, 60)
        vein.layeredVeinGenerator(generator => generator
            .buildLayerPattern(pattern => pattern
                .layer(l => l.weight(3).mat(GTMaterials.get("calorite")).size(8, 14))
                .layer(l => l.weight(2).mat(GTMaterials.Sulfur).size(2, 4))
                .layer(l => l.weight(1).mat(GTMaterials.Pyrite).size(1, 2))
            )
        )
        vein.surfaceIndicatorGenerator(indicator => indicator
            .surfaceRock(GTMaterials.get("calorite"))
            .placement("surface")
            .density(0.2)
            .radius(5)
        )
    })

//Cooperite
//platinum sulfide PtS; volcanic high-temp sulfide systems concentrate PGMs
//Cooperite main + Chalcopyrite gangue + Nickel trace
//rare and deep; platinum/palladium from processing are critical for IV circuits
    event.add("kubejs:cooperite_vein_vn", vein => {
        vein.weight(12)
        vein.clusterSize(24)
        vein.density(0.7)
        vein.discardChanceOnAirExposure(0)
        vein.layer("venus")
        vein.dimensions("ad_astra:venus")
        vein.biomes("ad_astra:venus_wastelands")
        vein.heightRangeUniform(-30, 20)
        vein.layeredVeinGenerator(generator => generator
            .buildLayerPattern(pattern => pattern
                .layer(l => l.weight(3).mat(GTMaterials.Cooperite).size(2, 4))
                .layer(l => l.weight(2).mat(GTMaterials.Chalcopyrite).size(1, 2))
                .layer(l => l.weight(1).mat(GTMaterials.Nickel).size(1, 1))
            )
        )
        vein.surfaceIndicatorGenerator(indicator => indicator
            .surfaceRock(GTMaterials.Cooperite)
            .placement("surface")
            .density(0.1)
            .radius(4)
        )
    })

//Stibnite
//antimony sulfide Sb2S3; high-temp volcanic hydrothermal deposits
//Arsenic and Bismuth co-occur in volcanic sulfide systems; antimony for IV alloys and diodes
    event.add("kubejs:stibnite_vein_vn", vein => {
        vein.weight(20)
        vein.clusterSize(26)
        vein.density(0.75)
        vein.discardChanceOnAirExposure(0)
        vein.layer("venus")
        vein.dimensions("ad_astra:venus")
        vein.biomes("ad_astra:venus_wastelands")
        vein.heightRangeUniform(15, 55)
        vein.layeredVeinGenerator(generator => generator
            .buildLayerPattern(pattern => pattern
                .layer(l => l.weight(3).mat(GTMaterials.Stibnite).size(2, 4))
                .layer(l => l.weight(2).mat(GTMaterials.Realgar).size(1, 2))
                .layer(l => l.weight(1).mat(GTMaterials.Bismuth).size(1, 1))
            )
        )
        vein.surfaceIndicatorGenerator(indicator => indicator
            .surfaceRock(GTMaterials.Stibnite)
            .placement("surface")
            .density(0.25)
            .radius(4)
        )
    })

//Chalcopyrite
//bulk copper sulfide; Venus sulfuric chemistry makes this the dominant ore deposit type
//Bornite Cu5FeS4 co-occurs; Pyrite iron sulfide in matrix; Sulfur trace
    event.add("kubejs:chalcopyrite_vein_vn", vein => {
        vein.weight(45)
        vein.clusterSize(38)
        vein.density(0.8)
        vein.discardChanceOnAirExposure(0)
        vein.layer("venus")
        vein.dimensions("ad_astra:venus")
        vein.biomes("ad_astra:venus_wastelands")
        vein.heightRangeUniform(10, 70)
        vein.layeredVeinGenerator(generator => generator
            .buildLayerPattern(pattern => pattern
                .layer(l => l.weight(4).mat(GTMaterials.Chalcopyrite).size(3, 6))
                .layer(l => l.weight(2).mat(GTMaterials.Bornite).size(2, 3))
                .layer(l => l.weight(2).mat(GTMaterials.Pyrite).size(2, 4))
                .layer(l => l.weight(1).mat(GTMaterials.Sulfur).size(1, 2))
            )
        )
        vein.surfaceIndicatorGenerator(indicator => indicator
            .surfaceRock(GTMaterials.Chalcopyrite)
            .placement("surface")
            .density(0.3)
            .radius(5)
        )
    })

//Galena/Lead-Bismuth
//Venus surface temperature 465C; lead and bismuth sulfides deposited deep below
//Galena PbS main + Bismuth + Lead trace; bismuth for bismuth-bronze at IV
    event.add("kubejs:galena_bismuth_vein_vn", vein => {
        vein.weight(22)
        vein.clusterSize(28)
        vein.density(0.75)
        vein.discardChanceOnAirExposure(0)
        vein.layer("venus")
        vein.dimensions("ad_astra:venus")
        vein.biomes("ad_astra:venus_wastelands")
        vein.heightRangeUniform(-10, 35)
        vein.layeredVeinGenerator(generator => generator
            .buildLayerPattern(pattern => pattern
                .layer(l => l.weight(3).mat(GTMaterials.Galena).size(2, 4))
                .layer(l => l.weight(2).mat(GTMaterials.Sphalerite).size(1, 2))
                .layer(l => l.weight(1).mat(GTMaterials.Lead).size(1, 1))
            )
        )
        vein.surfaceIndicatorGenerator(indicator => indicator
            .surfaceRock(GTMaterials.Galena)
            .placement("surface")
            .density(0.2)
            .radius(4)
        )
    })


// === MERCURY ===
// iron-rich world; no magnetosphere; extreme radiation; MESSENGER confirmed graphite-rich regolith
// radiation-altered minerals for IV circuits/alloys; key thematic mineral is Cinnabar

//Cinnabar
//HgS; Mercury named after the element; natural mercury sulfide in volcanic hydrothermal zones
//Cinnabar main + Redstone trace + Sulfur; mercury dust from processing used in IV chemical chains
    event.add("kubejs:cinnabar_vein_mc", vein => {
        vein.weight(50)
        vein.clusterSize(30)
        vein.density(0.75)
        vein.discardChanceOnAirExposure(0)
        vein.layer("mercury")
        vein.dimensions("ad_astra:mercury")
        vein.biomes("ad_astra:mercury_deltas")
        vein.heightRangeUniform(20, 60)
        vein.layeredVeinGenerator(generator => generator
            .buildLayerPattern(pattern => pattern
                .layer(l => l.weight(4).mat(GTMaterials.Cinnabar).size(3, 6))
                .layer(l => l.weight(2).mat(GTMaterials.Redstone).size(1, 2))
                .layer(l => l.weight(1).mat(GTMaterials.Sulfur).size(1, 1))
            )
        )
        vein.surfaceIndicatorGenerator(indicator => indicator
            .surfaceRock(GTMaterials.Cinnabar)
            .placement("surface")
            .density(0.25)
            .radius(5)
        )
    })

//Graphite
//MESSENGER spacecraft confirmed graphite-rich dark layer in Mercury regolith
//Graphite main + Carbon secondary; carbon electrodes critical for IV arc furnaces and EBF
    event.add("kubejs:graphite_vein_mc", vein => {
        vein.weight(40)
        vein.clusterSize(32)
        vein.density(0.8)
        vein.discardChanceOnAirExposure(0)
        vein.layer("mercury")
        vein.dimensions("ad_astra:mercury")
        vein.biomes("ad_astra:mercury_deltas")
        vein.heightRangeUniform(30, 80)
        vein.layeredVeinGenerator(generator => generator
            .buildLayerPattern(pattern => pattern
                .layer(l => l.weight(3).mat(GTMaterials.Graphite).size(3, 5))
                .layer(l => l.weight(2).mat(GTMaterials.Coal).size(1, 2))
            )
        )
        vein.surfaceIndicatorGenerator(indicator => indicator
            .surfaceRock(GTMaterials.Graphite)
            .placement("surface")
            .density(0.3)
            .radius(5)
        )
    })

//Pitchblende
//radiation minerals; no magnetosphere means surface concentration of radioactive minerals
//Pitchblende + Uraninite + Thorium; thorium naturally co-occurs with uranium in pitchblende deposits
//uranium for power generation; plutonium via breeder at ZPM
    event.add("kubejs:pitchblende_vein_mc", vein => {
        vein.weight(12)
        vein.clusterSize(24)
        vein.density(0.65)
        vein.discardChanceOnAirExposure(0)
        vein.layer("mercury")
        vein.dimensions("ad_astra:mercury")
        vein.biomes("ad_astra:mercury_deltas")
        vein.heightRangeUniform(-40, 15)
        vein.layeredVeinGenerator(generator => generator
            .buildLayerPattern(pattern => pattern
                .layer(l => l.weight(3).mat(GTMaterials.Pitchblende).size(2, 4))
                .layer(l => l.weight(2).mat(GTMaterials.Uraninite).size(1, 2))
                .layer(l => l.weight(1).mat(GTMaterials.Thorium).size(1, 1))
            )
        )
        vein.surfaceIndicatorGenerator(indicator => indicator
            .surfaceRock(GTMaterials.Pitchblende)
            .placement("surface")
            .density(0.1)
            .radius(4)
        )
    })

//Tetrahedrite/Complex Sulfide
//Cu12Sb4S13 complex sulfide; volcanic hydrothermal systems on Mercury concentrate polymetallic sulfosalts
//Tetrahedrite main + Sphalerite ZnS + Realgar As4S4; copper/zinc/arsenic sulfide suite
    event.add("kubejs:tetrahedrite_vein_mc", vein => {
        vein.weight(18)
        vein.clusterSize(22)
        vein.density(0.7)
        vein.discardChanceOnAirExposure(0)
        vein.layer("mercury")
        vein.dimensions("ad_astra:mercury")
        vein.biomes("ad_astra:mercury_deltas")
        vein.heightRangeUniform(5, 50)
        vein.layeredVeinGenerator(generator => generator
            .buildLayerPattern(pattern => pattern
                .layer(l => l.weight(3).mat(GTMaterials.Tetrahedrite).size(2, 3))
                .layer(l => l.weight(2).mat(GTMaterials.Sphalerite).size(1, 2))
                .layer(l => l.weight(1).mat(GTMaterials.Realgar).size(1, 1))
            )
        )
        vein.surfaceIndicatorGenerator(indicator => indicator
            .surfaceRock(GTMaterials.Tetrahedrite)
            .placement("surface")
            .density(0.15)
            .radius(4)
        )
    })

//Cobaltite
//CoAsS cobalt arsenide sulfide; co-occurs with radiation-proximate geology
//Cobaltite main + Cobalt + Arsenic; cobalt for IV superalloys and high-speed steel
    event.add("kubejs:cobaltite_vein_mc", vein => {
        vein.weight(20)
        vein.clusterSize(28)
        vein.density(0.75)
        vein.discardChanceOnAirExposure(0)
        vein.layer("mercury")
        vein.dimensions("ad_astra:mercury")
        vein.biomes("ad_astra:mercury_deltas")
        vein.heightRangeUniform(10, 55)
        vein.layeredVeinGenerator(generator => generator
            .buildLayerPattern(pattern => pattern
                .layer(l => l.weight(3).mat(GTMaterials.Cobaltite).size(2, 4))
                .layer(l => l.weight(2).mat(GTMaterials.Cobalt).size(1, 2))
                .layer(l => l.weight(1).mat(GTMaterials.Arsenic).size(1, 1))
            )
        )
        vein.surfaceIndicatorGenerator(indicator => indicator
            .surfaceRock(GTMaterials.Cobaltite)
            .placement("surface")
            .density(0.2)
            .radius(4)
        )
    })

})
