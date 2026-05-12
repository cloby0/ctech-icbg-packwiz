GTCEuStartupEvents.registry('gtceu:recipe_type', event => {
    event.create('imbuement_factory')
        .category('magic')
        .setEUIO('in')
        .setMaxIOSize(9, 2, 3, 2)
        .setProgressBar(GuiTextures.PROGRESS_BAR_ARROW, FillDirection.LEFT_TO_RIGHT)
        .setSound(GTSoundEntries.ASSEMBLER);
});

GTCEuStartupEvents.registry('gtceu:machine', event => {
    event.create('imbuement_factory', 'multiblock')
        ["tooltips(java.util.List)"]([Component.literal("Allows you to automate Imbuement Chamber recipes using Liquefied Source")])
        .rotationState(RotationState.NON_Y_AXIS)
        .appearanceBlock(GTBlocks.CASING_STEEL_SOLID)
        .recipeTypes(['imbuement_factory'])
        .recipeModifiers([GTRecipeModifiers.PARALLEL_HATCH, GTRecipeModifiers.ELECTRIC_OVERCLOCK.apply(OverclockingLogic.PERFECT_OVERCLOCK)])
        .pattern(definition => FactoryBlockPattern.start()
            .aisle("abbba", "bcjcb", "beaeb", "fgggf", "fgggf", "hgggh")
            .aisle("bbbbb", "cgggc", "eabae", "ggggg", "ggggg", "ggggg")
            .aisle("bbbbb", "cgggc", "abiba", "ggggg", "ggggg", "ggggg")
            .aisle("bbbbb", "cgggc", "eabae", "ggggg", "ggggg", "ggggg")
            .aisle("abbba", "bcdcb", "beaeb", "fgggf", "fgggf", "hgggh")

            .where("a", Predicates.blocks("aether:holystone_brick_stairs"))
            .where("b", Predicates.blocks("aether:holystone_bricks"))
            .where("c", Predicates.blocks("aether:holystone_bricks")                
                .or(Predicates.autoAbilities(definition.getRecipeTypes()))
                .or(Predicates.abilities(PartAbility.PARALLEL_HATCH).setMaxGlobalLimited(1)))
            .where("d", Predicates.controller(Predicates.blocks(definition.get())))
            .where("e", Predicates.blocks("aether:holystone_brick_slab"))
            .where("f", Predicates.blocks("quark:raw_gold_bricks"))
            .where("g", Predicates.blocks("minecraft:air"))
            .where("h", Predicates.blocks("gtceu:source_block"))
            .where("i", Predicates.blocks("gtceu:holy_silver_block"))
            .where("j", Predicates.abilities(PartAbility.MAINTENANCE))
        .build())
        .workableCasingModel(
            "aether:block/construction/holystone_bricks",
            "gtceu:block/multiblock/large_chemical_reactor"
        )
})