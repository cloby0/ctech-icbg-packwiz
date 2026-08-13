GTCEuStartupEvents.registry('gtceu:recipe_type', event => {
    event.create('mana_pond')
        .category('magic')
        .setEUIO('in')
        .setMaxIOSize(9, 1, 3, 1)
        .setMaxSize('in', global.ManaCap, 1)
        .setProgressBar(GuiTextures.PROGRESS_BAR_ARROW, FillDirection.LEFT_TO_RIGHT)
        .setSound(GTSoundEntries.ASSEMBLER);
});

GTCEuStartupEvents.registry('gtceu:machine', event => {
    event.create('automated_mana_pond', 'multiblock')
        ["tooltips(java.util.List)"]
            ([Component.literal("Allows you to automate Mana Pool recipes using a mana input hatch")])
        .rotationState(RotationState.NON_Y_AXIS)
        .appearanceBlock(GTBlocks.CASING_STEEL_SOLID)
        .recipeTypes(['mana_pond'])
        .recipeModifiers([GTRecipeModifiers.PARALLEL_HATCH, GTRecipeModifiers.ELECTRIC_OVERCLOCK.apply(OverclockingLogic.PERFECT_OVERCLOCK),
            global.IcbgRecipeModifiers.MANA_SPEED, global.IcbgRecipeModifiers.LP_PARALLEL])
        .pattern(definition => FactoryBlockPattern.start()
            .aisle("aaaaa", "deeed", "deeed", "deeed", "ababa")
            .aisle("aaaaa", "efgfe", "efgfe", "efgfe", "baaab")
            .aisle("aaaaa", "eghge", "eghge", "eghge", "aaaaa")
            .aisle("aaaaa", "efgfe", "efgfe", "efgfe", "baaab")
            .aisle("abcba", "deeed", "deeed", "deeed", "ababa")
            .where("a", Predicates.blocks("kubejs:mana_livingrock_casing")
                .or(Predicates.autoAbilities(definition.getRecipeTypes()))
                .or(Predicates.abilities(PartAbility.PARALLEL_HATCH).setMaxGlobalLimited(1))
                .or(Predicates.abilities(global.IcbgPartAbilities.MANA_SPEED_INPUT).setMaxGlobalLimited(1))
                .or(Predicates.abilities(global.IcbgPartAbilities.LP_PARALLEL_BOOST).setMaxGlobalLimited(1))
                .or(Predicates.abilities(PartAbility.MAINTENANCE))
                .or(Predicates.abilities(Java.loadClass('com.icbg.core.registry.IcbgPartAbilities').MANA_INPUT)))
            .where("b", Predicates.blocks("botania:livingrock_bricks_stairs"))
            .where("c", Predicates.controller(Predicates.blocks(definition.get())))
            .where("d", Predicates.blocks("gtceu:manasteel_frame"))
            .where("e", Predicates.blocks("minecraft:air"))
            .where("f", Predicates.blocks("botania:mana_glass_pane"))
            .where("g", Predicates.blocks("botania:mana_glass"))
            .where("h", Predicates.blocks("botania:mana_pylon"))
        .build())
        .workableCasingModel(
            "kubejs:block/mana_livingrock_casing",
            "gtceu:block/multiblock/large_chemical_reactor"
        )
})