GTCEuStartupEvents.registry('gtceu:recipe_type', event => {
    event.create('biogenic_synthesis')
        .category('biogenic')
        .setEUIO('in')
        .setMaxIOSize(9, 3, 4, 0)
        .setProgressBar(GuiTextures.PROGRESS_BAR_ARROW, FillDirection.LEFT_TO_RIGHT)
        .setSound(GTSoundEntries.CHEMICAL)
})

GTCEuStartupEvents.registry('gtceu:machine', event => {
    event.create('biogenic_synthesis_chamber', 'multiblock')
        .recipeTypes(['biogenic_synthesis'])
        .appearanceBlock(GTBlocks.CASING_STEEL_SOLID)
        .recipeModifiers([GTRecipeModifiers.ELECTRIC_OVERCLOCK.apply(OverclockingLogic.PERFECT_OVERCLOCK)])
        .pattern(definition => FactoryBlockPattern.start()
            .aisle("aaa", "aea", "aaa")
            .aisle("aaa", "ada", "aaa")
            .aisle("aaa", "ada", "aaa")
            .aisle("aaa", "ada", "aaa")
            .aisle("aaa", "aaa", "aaa")

            .where("a", Predicates.blocks("kubejs:biogenic_synthesis_casing")
                .or(Predicates.autoAbilities(definition.getRecipeTypes()))
                .or(Predicates.abilities(PartAbility.PARALLEL_HATCH).setMaxGlobalLimited(1)))
            .where("d", Predicates.blocks("minecraft:air"))
            .where("e", Predicates.controller(Predicates.blocks(definition.get())))

            .build())
        .workableCasingModel(
            "kubejs:block/biogenic_synthesis_casing",
            "gtceu:block/multiblock/electric_blast_furnace"
        )
})
