GTCEuServerEvents.oreVeins((event) => {
  event.add("kubejs:naquadah_vein_gl", (vein) => {
    vein.weight(80);
    vein.clusterSize(35);
    vein.density(0.75);
    vein.discardChanceOnAirExposure(0);
    vein.layer("glacio");
    vein.dimensions("ad_astra:glacio");
    vein.biomes("ad_astra:glacio_snowy_barrens");
    vein.heightRangeUniform(-20, 40);
    vein.layeredVeinGenerator((generator) =>
      generator.buildLayerPattern((pattern) =>
        pattern
          .layer((l) => l.weight(4).mat(GTMaterials.Naquadah).size(6, 12))
          .layer((l) => l.weight(1).mat(GTMaterials.Plutonium239).size(1, 2)),
      ),
    );
    vein.surfaceIndicatorGenerator((indicator) =>
      indicator
        .surfaceRock(GTMaterials.Naquadah)
        .placement("surface")
        .density(0.15)
        .radius(5),
    );
  });

  event.add("kubejs:saltpeter_vein_gl", (vein) => {
    vein.weight(40);
    vein.clusterSize(34);
    vein.density(0.8);
    vein.discardChanceOnAirExposure(0);
    vein.layer("glacio");
    vein.dimensions("ad_astra:glacio");
    vein.biomes("ad_astra:glacio_snowy_barrens");
    vein.heightRangeUniform(20, 70);
    vein.layeredVeinGenerator((generator) =>
      generator.buildLayerPattern((pattern) =>
        pattern
          .layer((l) => l.weight(3).mat(GTMaterials.Saltpeter).size(3, 5))
          .layer((l) => l.weight(2).mat(GTMaterials.RockSalt).size(2, 3))
          .layer((l) => l.weight(1).mat(GTMaterials.Calcite).size(1, 2)),
      ),
    );
    vein.surfaceIndicatorGenerator((indicator) =>
      indicator
        .surfaceRock(GTMaterials.Saltpeter)
        .placement("surface")
        .density(0.25)
        .radius(5),
    );
  });

  event.add("kubejs:borax_vein_gl", (vein) => {
    vein.weight(35);
    vein.clusterSize(32);
    vein.density(0.8);
    vein.discardChanceOnAirExposure(0);
    vein.layer("glacio");
    vein.dimensions("ad_astra:glacio");
    vein.biomes("ad_astra:glacio_snowy_barrens");
    vein.heightRangeUniform(25, 75);
    vein.layeredVeinGenerator((generator) =>
      generator.buildLayerPattern((pattern) =>
        pattern
          .layer((l) => l.weight(3).mat(GTMaterials.Trona).size(3, 5))
          .layer((l) => l.weight(2).mat(GTMaterials.Trona).size(1, 3))
          .layer((l) => l.weight(1).mat(GTMaterials.Calcite).size(1, 2)),
      ),
    );
    vein.surfaceIndicatorGenerator((indicator) =>
      indicator
        .surfaceRock(GTMaterials.Calcite)
        .placement("surface")
        .density(0.25)
        .radius(5),
    );
  });

  event.add("kubejs:ilmenite_vein_gl", (vein) => {
    vein.weight(25);
    vein.clusterSize(28);
    vein.density(0.75);
    vein.discardChanceOnAirExposure(0);
    vein.layer("glacio");
    vein.dimensions("ad_astra:glacio");
    vein.biomes("ad_astra:glacio_snowy_barrens");
    vein.heightRangeUniform(15, 60);
    vein.layeredVeinGenerator((generator) =>
      generator.buildLayerPattern((pattern) =>
        pattern
          .layer((l) => l.weight(3).mat(GTMaterials.Ilmenite).size(2, 4))
          .layer((l) => l.weight(2).mat(GTMaterials.Rutile).size(1, 2))
          .layer((l) => l.weight(1).mat(GTMaterials.Magnetite).size(1, 1)),
      ),
    );
    vein.surfaceIndicatorGenerator((indicator) =>
      indicator
        .surfaceRock(GTMaterials.Ilmenite)
        .placement("surface")
        .density(0.2)
        .radius(4),
    );
  });

  event.add("kubejs:pentlandite_vein_gl", (vein) => {
    vein.weight(40);
    vein.clusterSize(34);
    vein.density(0.8);
    vein.discardChanceOnAirExposure(0);
    vein.layer("glacio");
    vein.dimensions("ad_astra:glacio");
    vein.biomes("ad_astra:glacio_snowy_barrens");
    vein.heightRangeUniform(5, 55);
    vein.layeredVeinGenerator((generator) =>
      generator.buildLayerPattern((pattern) =>
        pattern
          .layer((l) => l.weight(3).mat(GTMaterials.Pentlandite).size(3, 5))
          .layer((l) => l.weight(2).mat(GTMaterials.Nickel).size(1, 2))
          .layer((l) => l.weight(1).mat(GTMaterials.Cobalt).size(1, 1)),
      ),
    );
    vein.surfaceIndicatorGenerator((indicator) =>
      indicator
        .surfaceRock(GTMaterials.Pentlandite)
        .placement("surface")
        .density(0.25)
        .radius(4),
    );
  });

  event.add("kubejs:talc_vein_gl", (vein) => {
    vein.weight(30);
    vein.clusterSize(28);
    vein.density(0.75);
    vein.discardChanceOnAirExposure(0);
    vein.layer("glacio");
    vein.dimensions("ad_astra:glacio");
    vein.biomes("ad_astra:glacio_snowy_barrens");
    vein.heightRangeUniform(20, 65);
    vein.layeredVeinGenerator((generator) =>
      generator.buildLayerPattern((pattern) =>
        pattern
          .layer((l) => l.weight(3).mat(GTMaterials.Talc).size(3, 5))
          .layer((l) => l.weight(2).mat(GTMaterials.Magnesite).size(1, 3))
          .layer((l) => l.weight(1).mat(GTMaterials.Calcite).size(1, 2)),
      ),
    );
    vein.surfaceIndicatorGenerator((indicator) =>
      indicator
        .surfaceRock(GTMaterials.Talc)
        .placement("surface")
        .density(0.2)
        .radius(4),
    );
  });
});
