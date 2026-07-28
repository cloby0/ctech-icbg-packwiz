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
        ["tooltips(java.util.List)"]([Component.literal("Allows you to automate Eldrin Altar recipes")])
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

            .where("a", Predicates.blocks("kubejs:imbuement_holystone_casing"))
            .where("b", Predicates.blocks("kubejs:imbuement_holystone_casing"))
            .where("c", Predicates.blocks("kubejs:imbuement_holystone_casing")
                .or(Predicates.autoAbilities(definition.getRecipeTypes()))
                .or(Predicates.abilities(PartAbility.PARALLEL_HATCH).setMaxGlobalLimited(1)))
            .where("d", Predicates.controller(Predicates.blocks(definition.get())))
            .where("e", Predicates.blocks("kubejs:imbuement_holystone_casing"))
            .where("f", Predicates.blocks("kubejs:imbuement_holystone_casing"))
            .where("g", Predicates.blocks("minecraft:air"))
            .where("h", Predicates.blocks("mna:vinteum_block"))
            .where("i", Predicates.blocks("bloodmagic:masterritualstone"))
            .where("j", Predicates.abilities(PartAbility.MAINTENANCE))
        .build())
        .workableCasingModel(
            "kubejs:block/imbuement_holystone_casing",
            "gtceu:block/multiblock/large_chemical_reactor"
        )
})