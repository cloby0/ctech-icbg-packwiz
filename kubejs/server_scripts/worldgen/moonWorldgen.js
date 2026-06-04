WorldgenEvents.remove(event => {
    event.removeFeatureById("underground_ores", [
        "ad_astra:moon_iron_ore",
        "ad_astra:deepslate_desh_ore",
        "ad_astra:moon_desh_ore",
        "ad_astra:moon_cheese_ore",
        "ad_astra:moon_ice_shard_ore",
        "ad_astra:mars_diamond_ore",
        "ad_astra:mars_ice_shard_ore",
        "ad_astra:mars_iron_ore",
        "ad_astra:mars_ostrum_ore",
        "ad_astra:mercury_iron_ore",
        "ad_astra:glacio_ice_shard_ore",
        "ad_astra:glacio_coal_ore",
        "ad_astra:glacio_copper_ore",
        "ad_astra:glacio_iron_ore",
        "ad_astra:glacio_lapis_ore",
        "ad_astra:venus_coal_ore",
        "ad_astra:venus_gold_ore",
        "ad_astra:venus_diamond_ore",
        "ad_astra:venus_calorite_ore"
    ])
})

WorldgenEvents.remove(event => {
    event.removeOres(props => {
        props.blocks = [
            "ad_astra:mars_diamond_ore",
            "ad_astra:mars_ice_shard_ore",
            "ad_astra:mars_iron_ore",
            "ad_astra:mars_ostrum_ore",
            "ad_astra:mercury_iron_ore",
            "ad_astra:glacio_ice_shard_ore",
            "ad_astra:glacio_coal_ore",
            "ad_astra:glacio_copper_ore",
            "ad_astra:glacio_iron_ore",
            "ad_astra:glacio_lapis_ore",
            "ad_astra:venus_coal_ore",
            "ad_astra:venus_gold_ore",
            "ad_astra:venus_diamond_ore",
            "ad_astra:venus_calorite_ore"
        ]
    })
})

WorldgenEvents.remove(event => {
    event.removeOres(props => {
        props.blocks = [
            "ad_astra:moon_iron_ore",
            "ad_astra:deepslate_desh_ore",
            "ad_astra:moon_desh_ore",
            "ad_astra:moon_cheese_ore",
            "ad_astra:moon_ice_shard_ore",
            "ad_astra:mars_diamond_ore",
            "ad_astra:mars_ice_shard_ore",
            "ad_astra:mars_iron_ore",
            "ad_astra:mars_ostrum_ore",
            "ad_astra:mars_ostrum_ore",
            "ad_astra:mercury_iron_ore",
            "ad_astra:glacio_ice_shard_ore",
            "ad_astra:glacio_coal_ore",
            "ad_astra:glacio_copper_ore",
            "ad_astra:glacio_iron_ore",
            "ad_astra:glacio_lapis_ore",
            "ad_astra:venus_coal_ore",
            "ad_astra:venus_gold_ore",
            "ad_astra:venus_diamond_ore",
            "ad_astra:venus_calorite_ore"
        ]
    })
})

GTCEuServerEvents.oreVeins(event => {
//Desh
    event.add("kubejs:desh_vein_mn", vein => {
    // Basic vein generation properties
        vein.weight(80)
        vein.clusterSize(30)
        vein.density(0.8)
        vein.discardChanceOnAirExposure(0)
    // Define where the vein can generate
        vein.layer("moon_stone")
        vein.dimensions("ad_astra:moon")
        vein.biomes("ad_astra:lunar_wastelands")
    // Define a height range:
        vein.heightRangeUniform(20, 60)
    // Define the vein's generator:
        vein.layeredVeinGenerator(generator => generator
            .buildLayerPattern(pattern => pattern
                .layer(l => l.weight(1).mat(GTMaterials.get('desh')).size(8, 16))
                .layer(l => l.weight(2).mat(GTMaterials.Hematite).size(8, 8))
                .layer(l => l.weight(1).block(() => Block.getBlock('ae2:sky_stone_block')))
            )
        )
    // Add one or more type of surface indicator to the vein:
        vein.surfaceIndicatorGenerator(indicator => indicator
            .surfaceRock(GTMaterials.get('desh'))
            .placement("surface")
            .density(0.2)
            .radius(5)
        ) 
    })
//Ilmenite
    event.add("kubejs:ilmenite_vein_mn", vein => {
        vein.weight(30)
        vein.clusterSize(34)
        vein.density(0.8)
        vein.discardChanceOnAirExposure(0)
        vein.layer("moon_stone")
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
})