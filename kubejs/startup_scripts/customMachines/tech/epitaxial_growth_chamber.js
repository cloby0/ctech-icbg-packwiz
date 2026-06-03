GTCEuStartupEvents.registry('gtceu:recipe_type', event => {
    event.create('epitaxial_growth_chamber')
        .category('space')
        .setEUIO('in')
        .setMaxIOSize(2, 2, 2, 0)
        .setProgressBar(GuiTextures.PROGRESS_BAR_ARROW, FillDirection.LEFT_TO_RIGHT)
        .setSound(GTSoundEntries.ASSEMBLER);
})

GTCEuStartupEvents.registry('gtceu:machine', event => {
    event.create('epitaxial_growth_chamber', 'multiblock')
        ["tooltips(java.util.List)"]([Component.literal("The moon doesn't have gravity; your crystals don't have defects.")])
        .rotationState(RotationState.NON_Y_AXIS)
        .appearanceBlock(GTBlocks.CASING_STEEL_SOLID)
        .recipeTypes(['epitaxial_growth_chamber'])
        .recipeModifiers([
            GTRecipeModifiers.PARALLEL_HATCH,
            GTRecipeModifiers.ELECTRIC_OVERCLOCK.apply(OverclockingLogic.PERFECT_OVERCLOCK)
        ])
        .pattern(definition => FactoryBlockPattern.start()
            .aisle("bbbbbb", "bddddb", "bdbbbb", "bdbaaa", "bbbaaa")
            .aisle("bbbbdb", "beeeed", "bebbfb", "bebaaa", "bfbaaa")
            .aisle("bbbbdb", "bgbded", "bgbbfb", "bgbaaa", "bbbaaa")
            .aisle("aaabdb", "aaaded", "aaabfb", "aaaaaa", "aaaaaa")
            .aisle("aaabdb", "aaaded", "aaabfb", "aaaaaa", "aaaaaa")
            .aisle("aaabdb", "aaaded", "aaabfb", "aaaaaa", "aaaaaa")
            .aisle("aaabdb", "aaaded", "aaabfb", "aaaaaa", "aaaaaa")
            .aisle("aaabdb", "aaaded", "aaabfb", "aaaaaa", "aaaaaa")
            .aisle("aaabbb", "aaabcb", "aaabbb", "aaaaaa", "aaaaaa")
            .where("a", Predicates.any())
            .where("b", Predicates.blocks("gtceu:solid_machine_casing"))
            .where("c", Predicates.controller(Predicates.blocks(definition.get())))
            .where("d", Predicates.blocks("gtceu:yellow_stripes_block_a")
                .or(Predicates.autoAbilities(definition.getRecipeTypes()))
                .or(Predicates.abilities(PartAbility.PARALLEL_HATCH).setMaxGlobalLimited(1)))
            .where("e", Predicates.blocks("gtceu:steel_pipe_casing"))
            .where("f", Predicates.blocks("gtceu:assembly_line_grating"))
            .where("g", Predicates.blocks("gtceu:tempered_glass"))
            .build()
        )
        .workableCasingModel(
            "gtceu:block/solid_machine_casing",
            "gtceu:block/multiblock/large_chemical_reactor"
        )
})