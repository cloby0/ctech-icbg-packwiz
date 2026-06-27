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
        .recipeTypes(['draconic_infusion_chamber'])
        .appearanceBlock(GTBlocks.CASING_STEEL_SOLID)
        .recipeModifiers([GTRecipeModifiers.ELECTRIC_OVERCLOCK.apply(OverclockingLogic.PERFECT_OVERCLOCK)])
        .pattern(definition => FactoryBlockPattern.start()
            .aisle("aaMaa", "#####", "#####", "#####", "#####", "#####", "aaaaa")
            .aisle("aaaaa", "#cac#", "#cac#", "#cac#", "#cac#", "#cac#", "aaaaa")
            .aisle("aaaaa", "#aba#", "#aba#", "#aba#", "#aba#", "#aba#", "aaaaa")
            .aisle("aaaaa", "#cac#", "#c!c#", "#cac#", "#cac#", "#cac#", "aaaaa")
            .aisle("aaaaa", "#####", "#####", "#####", "#####", "#####", "aaaaa")
          
            .where("a", Predicates.blocks("kubejs:draconic_framework_casing")
                .or(Predicates.autoAbilities(definition.getRecipeTypes()))
                .or(Predicates.abilities(PartAbility.PARALLEL_HATCH).setMaxGlobalLimited(1)))
            .where("b", Predicates.blocks("minecraft:air"))
            .where("c", Predicates.blocks("gtceu:draconic_framework_frame"))
            .where("!", Predicates.controller(Predicates.blocks(definition.get())))
            .where("#", Predicates.any())
            .where("M", Predicates.abilities(PartAbility.MAINTENANCE))
            .build())
        .workableCasingModel(
            "kubejs:block/draconic_framework_casing",
            "gtceu:block/multiblock/large_chemical_reactor"
        )
})
