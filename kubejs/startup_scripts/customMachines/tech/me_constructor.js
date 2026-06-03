GTCEuStartupEvents.registry('gtceu:recipe_type', event => {

    event.create('me_fabricator')
        .category('ae2')
        .setEUIO('in')
        .setMaxIOSize(9, 1, 3, 0)
        .setProgressBar(GuiTextures.PROGRESS_BAR_ARROW, FillDirection.LEFT_TO_RIGHT)
        .setSound(GTSoundEntries.ASSEMBLER);

});

GTCEuStartupEvents.registry('gtceu:machine', event => {
    event.create('me_fabricator', 'simple')
        .tiers(GTValues.EV, GTValues.IV, GTValues.LuV, GTValues.ZPM, GTValues.UV)
        .definition((tier, builder) => {
            builder
                .langValue(`${GTValues.VLVH[tier]} ME Fabricator`)
                .recipeType('me_fabricator')
                .workableTieredHullModel('gtceu:block/machines/assembler')
        }
    );
})