GTCEuStartupEvents.registry('gtceu:recipe_type', event => {
    event.create('mana_pond')
        .category('magic')
        .setEUIO('in')
        .setMaxIOSize(9, 1, 3, 1)
        .setProgressBar(GuiTextures.PROGRESS_BAR_ARROW, FillDirection.LEFT_TO_RIGHT)
        .setSound(GTSoundEntries.ASSEMBLER);
});

GTCEuStartupEvents.registry('gtceu:machine', event => {
    event.create('automated_mana_pond', 'multiblock')
        ["tooltips(java.util.List)"]
            ([Component.literal("Allows you to automate Mana Pool recipes using Liquefied Source")])
        .rotationState(RotationState.NON_Y_AXIS)
        .appearanceBlock(GTBlocks.CASING_STEEL_SOLID)
        .recipeTypes(['mana_pond'])
        .recipeModifiers([GTRecipeModifiers.PARALLEL_HATCH, GTRecipeModifiers.ELECTRIC_OVERCLOCK.apply(OverclockingLogic.PERFECT_OVERCLOCK)])
        .pattern(definition => FactoryBlockPattern.start()
            .aisle("xbMbx", "xxxxx", "xxxxx", "xxxxx", "abbba")
            .aisle("bbbbb", "xcccx", "xcccx", "xcccx", "bbbbb")
            .aisle("bbbbb", "xcacx", "xcacx", "xcacx", "bbbbb")
            .aisle("bbbbb", "xcccx", "xcKcx", "xcccx", "bbbbb")
            .aisle("xbbbx", "xxxxx", "xxxxx", "xxxxx", "abbba")
            .where("a", Predicates.blocks("minecraft:air"))
            .where("b", Predicates.blocks("botania:livingrock_bricks"))
            .where("c", Predicates.blocks("gtceu:manaplatinite_block")
                .or(Predicates.autoAbilities(definition.getRecipeTypes()))
                .or(Predicates.abilities(PartAbility.PARALLEL_HATCH).setMaxGlobalLimited(1)))
            .where("x", Predicates.any())
            .where("K", Predicates.controller(Predicates.blocks(definition.get())))
            .where('M', Predicates.abilities(PartAbility.MAINTENANCE))
        .build())
        .workableCasingModel(
            "botania:block/polished_livingrock",
            "gtceu:block/multiblock/large_chemical_reactor"
        )
})