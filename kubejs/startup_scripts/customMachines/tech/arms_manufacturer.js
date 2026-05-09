GTCEuStartupEvents.registry('gtceu:recipe_type', event => {

    event.create('arms_manufacturer')
        .category('guns')
        .setEUIO('in')
        .setMaxIOSize(9, 1, 3, 0)
        .setProgressBar(GuiTextures.PROGRESS_BAR_ARROW, FillDirection.LEFT_TO_RIGHT)
        .setSound(GTSoundEntries.COMPUTATION);

});

GTCEuStartupEvents.registry('gtceu:machine', event => {
    event.create('arms_manufacturer', 'simple')
        .tiers(GTValues.LV, GTValues.MV, GTValues.HV, GTValues.EV, GTValues.IV, GTValues.LuV, GTValues.ZPM, GTValues.UV)
        .definition((tier, builder) => {
            builder
                .langValue(`${GTValues.VLVH[tier]} Arms Manufacturer`)
                .recipeType('arms_manufacturer')
                .workableTieredHullModel('gtceu:block/machines/assembler')
        }
    );
})