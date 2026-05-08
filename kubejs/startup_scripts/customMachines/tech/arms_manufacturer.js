/*
GTCEuStartupEvents.registry('gtceu:recipe_type', event => {
    event.create('arms_making')
        .category('ctech')
        .setEUIO('in')
        .setMaxIOSize(9, 1, 1, 0) // 
        .setSlotOverlay(false, false, GuiTextures.SOLIDIFIER_OVERLAY)
        .setProgressBar(GuiTextures.PROGRESS_BAR_ARROW, FillDirection.LEFT_TO_RIGHT) // 
        .setSound(GTSoundEntries.COOLING)
})


GTCEuStartupEvents.registry('gtceu:machine', event => {
    event.create('arms_manufacturer', 'simple')
        .tiers(GTValues.LV, GTValues.MV, GTValues.HV, GTValues.EV, GTValues.IV, GTValues.LuV, GTValues.ZPM, GTValues.UV,)
        .rotationState(RotationState.NON_Y_AXIS)
        .recipeType('arms_making')
        .tankScalingFunction(tier => tier * 3200)

        .definition((tier, builder) =>
            builder
                .langValue(GTValues.VLVH[tier] + " Arms Manufacturer")
                .recipeType('arms_making')
                .workableTieredHullModel('gtceu:block/machines/assembler'))
})
*/