// Recipe type name matches machine name — GTCEu auto-binds by matching ID.
GTCEuStartupEvents.registry('gtceu:recipe_type', event => {
    event.create('draconic_infusion_chamber')
        .category('draconic')
        .setEUIO('in')
        .setMaxIOSize(6, 2, 2, 0)
        .setProgressBar(GuiTextures.PROGRESS_BAR_ARROW, FillDirection.LEFT_TO_RIGHT)
        .setSound(GTSoundEntries.ARC)
})

GTCEuStartupEvents.registry('gtceu:machine', event => {
    event.create('draconic_infusion_chamber', 'multiblock')
        .appearanceBlock(GTBlocks.CASING_STEEL_SOLID)
        .recipeModifiers([GTRecipeModifiers.ELECTRIC_OVERCLOCK.apply(OverclockingLogic.PERFECT_OVERCLOCK)])
        .pattern(definition => FactoryBlockPattern.start()
            .aisle("bbb", "bKb", "bbb")
            .aisle("bbb", "bbb", "bbb")
            .aisle("bbb", "bMb", "bbb")
            .where("b", Predicates.blocks("kubejs:draconic_framework_casing")
                .or(Predicates.autoAbilities(definition.getRecipeTypes()))
                .or(Predicates.abilities(PartAbility.PARALLEL_HATCH).setMaxGlobalLimited(1)))
            .where("K", Predicates.controller(Predicates.blocks(definition.get())))
            .where("M", Predicates.abilities(PartAbility.MAINTENANCE))
            .build())
        .workableCasingModel(
            "kubejs:block/draconic_framework_casing",
            "gtceu:block/multiblock/large_chemical_reactor"
        )
})
