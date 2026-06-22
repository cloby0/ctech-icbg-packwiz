GTCEuStartupEvents.registry('gtceu:recipe_type', event => {
    event.create('void_crucible')
        .category('void')
        .setEUIO('in')
        .setMaxIOSize(9, 3, 2, 0)
        .setProgressBar(GuiTextures.PROGRESS_BAR_ARROW, FillDirection.LEFT_TO_RIGHT)
        .setSound(GTSoundEntries.ARC)
})

GTCEuStartupEvents.registry('gtceu:machine', event => {
    event.create('void_crucible', 'multiblock')
        .recipeTypes(['void_crucible'])
        .appearanceBlock(GTBlocks.CASING_STEEL_SOLID)
        .recipeModifiers([GTRecipeModifiers.ELECTRIC_OVERCLOCK.apply(OverclockingLogic.PERFECT_OVERCLOCK)])
        .pattern(definition => FactoryBlockPattern.start()
            .aisle("aaaaaaaaaaa", "bbbbbbbbbbb", "bbbbbbbbbbb", "bbbbbbbbbbb", "bbbbbbbbbbb", "bbbbbbbbbbb", "bbbbbbbbbbb")
            .aisle("aaaaaaaaaaa", "baaaaaaaaab", "baaaaaaaaab", "baaaaaaaaab", "baaaaaaaaab", "baaacccaaab", "baacccccaab")
            .aisle("aaaaaaaaaaa", "baaaaaaaaab", "baaadddaaab", "baaadddaaab", "baabdddbaab", "baadddddaab", "baacccccaab")
            .aisle("aaaaaaaaaaa", "baaaadaaaab", "baadddddaab", "baadddddaab", "babdddddbab", "badddddddab", "bcccccccccb")
            .aisle("aaaaaaaaaaa", "baaadddaaab", "badddddddab", "badddddddab", "badddddddab", "bcdddddddcb", "bcccccccccb")
            .aisle("aaaaaaaaaaa", "baadddddaab", "badddddddab", "badddddddab", "badddddddab", "bcdddddddcb", "bcccccccccb")
            .aisle("aaaaaaaaaaa", "baadddddaab", "badddddddab", "badddddddab", "badddddddab", "bcdddddddcb", "bcccccccccb")
            .aisle("aaaaaaaaaaa", "baadddddaab", "badddddddab", "badddddddab", "badddddddab", "bcdddddddcb", "bcccccccccb")
            .aisle("aaaaaaaaaaa", "baaadddaaab", "badddddddab", "badddddddab", "badddddddab", "bcdddddddcb", "bcccccccccb")
            .aisle("aaaaaaaaaaa", "baaaadaaaab", "baadddddaab", "baadddddaab", "badddddddab", "badddddddab", "bcccccccccb")
            .aisle("aaaaaaaaaaa", "baaaaaaaaab", "baaadddaaab", "baaadddaaab", "baadddddaab", "baadddddaab", "baacccccaab")
            .aisle("aaaaaaaaaaa", "baaaaeaaaab", "baaaaaaaaab", "baaaaaaaaab", "baaaaaaaaab", "baaacccaaab", "baacccccaab")
            .aisle("aaaaaaaaaaa", "bbbbbbbbbbb", "bbbbbbbbbbb", "bbbbbbbbbbb", "bbbbbbbbbbb", "bbbbbbbbbbb", "bbbbbbbbbbb")
            
            .where("a", Predicates.blocks("kubejs:void_crucible_casing")
                .or(Predicates.autoAbilities(definition.getRecipeTypes()))
                .or(Predicates.abilities(PartAbility.PARALLEL_HATCH).setMaxGlobalLimited(1)))
            .where("b", Predicates.any())
            .where("c", Predicates.blocks("gtceu:fusion_glass"))
            .where("d", Predicates.blocks("minecraft:air"))
            .where("e", Predicates.controller(Predicates.blocks(definition.get())))

            .build())
        .workableCasingModel(
            "kubejs:block/void_crucible_casing",
            "gtceu:block/multiblock/electric_blast_furnace"
        )
})
