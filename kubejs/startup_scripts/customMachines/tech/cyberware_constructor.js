GTCEuStartupEvents.registry('gtceu:recipe_type', event => {

    event.create('cyberware_constructor')
        .category('cyberware')
        .setEUIO('in')
        .setMaxIOSize(9, 1, 3, 0)
        .setProgressBar(GuiTextures.PROGRESS_BAR_ARROW, FillDirection.LEFT_TO_RIGHT)
        .setSound(GTSoundEntries.ASSEMBLER);

});

GTCEuStartupEvents.registry('gtceu:machine', event => {
    event.create('cyberware_constructor', 'simple')
        .tiers(GTValues.LV, GTValues.MV, GTValues.HV, GTValues.EV, GTValues.IV, GTValues.LuV, GTValues.ZPM, GTValues.UV)
        .definition((tier, builder) => {
            builder
                .langValue(`${GTValues.VLVH[tier]} Cyberware Constructor`)
                .recipeType('cyberware_constructor')
                .workableTieredHullModel('gtceu:block/machines/assembler')
        }
    );
})