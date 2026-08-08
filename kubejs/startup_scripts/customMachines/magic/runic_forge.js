const ManaCap = Java.loadClass('com.icbg.core.recipe.mana.ManaRecipeCapability').CAP
const IcbgPartAbilities = Java.loadClass('com.icbg.core.registry.IcbgPartAbilities')

GTCEuStartupEvents.registry('gtceu:recipe_type', event => {
    event.create('runic_forge')
        .category('magic')
        .setEUIO('in')
        .setMaxIOSize(9, 1, 2, 0)
        .setMaxSize('in', ManaCap, 1)
        .setProgressBar(GuiTextures.PROGRESS_BAR_ARROW, FillDirection.LEFT_TO_RIGHT)
        .setSound(GTSoundEntries.ASSEMBLER)

    event.create('terra_agglomeration')
        .category('magic')
        .setEUIO('in')
        .setMaxIOSize(9, 1, 1, 0)
        .setMaxSize('in', ManaCap, 1)
        .setProgressBar(GuiTextures.PROGRESS_BAR_ARROW, FillDirection.LEFT_TO_RIGHT)
        .setSound(GTSoundEntries.ASSEMBLER)
})

GTCEuStartupEvents.registry('gtceu:machine', event => {
    event.create('runic_forge', 'multiblock')
        ["tooltips(java.util.List)"]([Component.literal("Automates Runic Altar rune production and Terrestrial Agglomeration")])
        .rotationState(RotationState.NON_Y_AXIS)
        .appearanceBlock(GTBlocks.CASING_STEEL_SOLID)
        .recipeTypes(['runic_forge', 'terra_agglomeration'])
        .recipeModifiers([GTRecipeModifiers.PARALLEL_HATCH, GTRecipeModifiers.ELECTRIC_OVERCLOCK.apply(OverclockingLogic.PERFECT_OVERCLOCK)])
        .pattern(definition => FactoryBlockPattern.start()
            .aisle("bbb", "bKb", "bbb")
            .aisle("bbb", "bbb", "bbb")
            .aisle("bbb", "bMb", "bbb")
            .where("b", Predicates.blocks("kubejs:runic_forge_casing")
                .or(Predicates.autoAbilities(definition.getRecipeTypes()))
                .or(Predicates.abilities(PartAbility.PARALLEL_HATCH).setMaxGlobalLimited(1))
                .or(Predicates.abilities(IcbgPartAbilities.MANA_INPUT)))
            .where("K", Predicates.controller(Predicates.blocks(definition.get())))
            .where("M", Predicates.abilities(PartAbility.MAINTENANCE))
        .build())
        .workableCasingModel(
            "kubejs:block/runic_forge_casing",
            "gtceu:block/multiblock/large_chemical_reactor"
        )
})
