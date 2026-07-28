GTCEuStartupEvents.registry('gtceu:recipe_type', event => {
    event.create('enchanting_sanctum')
        .category('magic')
        .setEUIO('in')
        .setMaxIOSize(9, 2, 3, 2)
        .setProgressBar(GuiTextures.PROGRESS_BAR_ARROW, FillDirection.LEFT_TO_RIGHT)
        .setSound(GTSoundEntries.ASSEMBLER);
});

GTCEuStartupEvents.registry('gtceu:machine', event => {
    event.create('grand_enchanting_sanctum', 'multiblock')
        ["tooltips(java.util.List)"]([Component.literal("Allows you to automate Alchemy Table recipes using Life Essence")])
        .rotationState(RotationState.NON_Y_AXIS)
        .appearanceBlock(GTBlocks.CASING_STEEL_SOLID)
        .recipeTypes(['enchanting_sanctum'])
        .recipeModifiers([GTRecipeModifiers.PARALLEL_HATCH, GTRecipeModifiers.ELECTRIC_OVERCLOCK.apply(OverclockingLogic.PERFECT_OVERCLOCK)])
        .pattern(definition => FactoryBlockPattern.start()
            .aisle("aabbbbbaa", "aaaaaaaaa", "aaaaaaaaa", "aaaaaaaaa", "aacccccaa", "aaaaaaaaa", "aaaaaaaaa", "aaaaaaaaa", "aaaaaaaaa", "aaaaaaaaa")
            .aisle("accccccca", "aaadgdaaa", "aaadddaaa", "aaadddaaa", "accccccca", "aabbbbbaa", "aaaaaaaaa", "aaaaaaaaa", "aaaaaaaaa", "aaaaaaaaa")
            .aisle("bcccccccb", "aaefffeaa", "aaefffeaa", "aaefffeaa", "ccccccccc", "abcccccba", "aabcccbaa", "aaaaaaaaa", "aaaaaaaaa", "aaaaaaaaa")
            .aisle("bcccccccb", "adfffffda", "adfffffda", "adfffffda", "cccfffccc", "abcfffcba", "aacfffcaa", "aaabcbaaa", "aaaabaaaa", "aaaaaaaaa")
            .aisle("bcccccccb", "adfffffda", "adfffffda", "adfffffda", "cccfffccc", "abcfffcba", "aacfffcaa", "aaacfcaaa", "aaabcbaaa", "aaaacaaaa")
            .aisle("bcccccccb", "adfffffda", "adfffffda", "adfffffda", "cccfffccc", "abcfffcba", "aacfffcaa", "aaabcbaaa", "aaaabaaaa", "aaaaaaaaa")
            .aisle("bcccccccb", "aaefffeaa", "aaefffeaa", "aaefffeaa", "ccccccccc", "abcccccba", "aabcccbaa", "aaaaaaaaa", "aaaaaaaaa", "aaaaaaaaa")
            .aisle("accccccca", "aaadddaaa", "aaadhdaaa", "aaadddaaa", "accccccca", "aabbbbbaa", "aaaaaaaaa", "aaaaaaaaa", "aaaaaaaaa", "aaaaaaaaa")
            .aisle("aabbbbbaa", "aaaaaaaaa", "aaaaaaaaa", "aaaaaaaaa", "aacccccaa", "aaaaaaaaa", "aaaaaaaaa", "aaaaaaaaa", "aaaaaaaaa", "aaaaaaaaa")

            .where("a", Predicates.any())
            .where("b", Predicates.blocks("kubejs:sanctum_sourcestone_casing"))
            .where("c", Predicates.blocks("kubejs:sanctum_sourcestone_casing"))
            .where("d", Predicates.blocks("kubejs:sanctum_sourcestone_casing")
                .or(Predicates.autoAbilities(definition.getRecipeTypes()))
                .or(Predicates.abilities(PartAbility.PARALLEL_HATCH).setMaxGlobalLimited(1)))
            .where("e", Predicates.blocks("kubejs:sanctum_sourcestone_casing"))
            .where("f", Predicates.blocks("minecraft:air"))
            .where("g", Predicates.abilities(PartAbility.MAINTENANCE))
            .where("h", Predicates.controller(Predicates.blocks(definition.get())))
        .build())
        .workableCasingModel(
            "kubejs:block/sanctum_sourcestone_casing",
            "gtceu:block/multiblock/large_chemical_reactor"
        )
})