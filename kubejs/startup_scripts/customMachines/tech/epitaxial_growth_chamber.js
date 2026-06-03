GTCEuStartupEvents.registry('gtceu:recipe_type', event => {
    event.create('epitaxial_growth_chamber')
        .category('space')
        .setEUIO('in')
        .setMaxIOSize(2, 2, 2, 0)
        .setProgressBar(GuiTextures.PROGRESS_BAR_ARROW, FillDirection.LEFT_TO_RIGHT)
        .setSound(GTSoundEntries.ASSEMBLER);
});

GTCEuStartupEvents.registry('gtceu:machine', event => {
    event.create('epitaxial_growth_chamber', 'multiblock')
        ["tooltips(java.util.List)"]([Component.literal("The moon doesn't have gravity; your crystals don't have defects.")])
        .rotationState(RotationState.NON_Y_AXIS)
        .appearanceBlock(GTBlocks.CASING_STEEL_SOLID)
        .recipeTypes(['epitaxial_growth_chamber'])
        .recipeModifiers([GTRecipeModifiers.PARALLEL_HATCH, GTRecipeModifiers.ELECTRIC_OVERCLOCK.apply(OverclockingLogic.PERFECT_OVERCLOCK)])
        .pattern(definition => FactoryBlockPattern.start()
            .aisle("abbba", "ccccc", "ccccc", "ccccc", "abbba")
            .aisle("bdddb", "cdbdc", "cdbdc", "cdbdc", "bdddb")
            .aisle("bdddb", "cdddc", "cdedc", "cdddc", "bdddb")
            .aisle("bdddb", "cdddc", "cdedc", "cdddc", "bdddb")
            .aisle("bdddb", "cdddc", "cfegc", "cdddc", "bdddb")
            .aisle("bdddb", "cdddc", "cdedc", "cdddc", "bdddb")
            .aisle("bdddb", "cdddc", "cdedc", "cdddc", "bdddb")
            .aisle("bdddb", "cdbdc", "cdbdc", "cdbdc", "bdddb")
            .aisle("abbba", "ccccc", "ccccc", "ccccc", "abbba")

            .where("a", Predicates.blocks("gtceu:solid_machine_casing"))
            .where("b", Predicates.blocks("gtceu:yellow_stripes_block_a"))
            .where("c", Predicates.any())
            .where("d", Predicates.blocks("gtceu:solid_machine_casing"))
                .or(Predicates.autoAbilities(definition.getRecipeTypes()))
                .or(Predicates.abilities(PartAbility.PARALLEL_HATCH).setMaxGlobalLimited(1))
            .where("e", Predicates.blocks("gtceu:steel_gearbox"))
            .where("f", Predicates.abilities(PartAbility.MAINTENANCE))
            .where("g", Predicates.controller(Predicates.blocks(definition.get())))

        .build())
        .workableCasingModel(
            "gtceu:block/solid_machine_casing",
            "gtceu:block/multiblock/large_chemical_reactor"
        )
})