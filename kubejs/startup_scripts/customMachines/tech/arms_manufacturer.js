GTCEuStartupEvents.registry('gtceu:recipe_type', event => {

    event.create('arms_manufacturer')
        .category('guns')
        .setEUIO('in')
        .setMaxIOSize(9, 1, 3, 0)
        .setProgressBar(GuiTextures.PROGRESS_BAR_ARROW, FillDirection.LEFT_TO_RIGHT)
        .setSound(GTSoundEntries.ASSEMBLER);

});

GTCEuStartupEvents.registry('gtceu:machine', event => {
    event.create('war_industrial_complex', 'multiblock')
        ["tooltips(java.util.List)"]([Component.literal("War never changes.")])
        .rotationState(RotationState.NON_Y_AXIS)
        .appearanceBlock(GTBlocks.CASING_STEEL_SOLID)
        .recipeTypes(['arms_manufacturer'])
        .recipeModifiers([
            GTRecipeModifiers.PARALLEL_HATCH,
            GTRecipeModifiers.ELECTRIC_OVERCLOCK.apply(OverclockingLogic.PERFECT_OVERCLOCK)
        ])
        .pattern(definition => FactoryBlockPattern.start()
            .aisle("aaaaaaaaa", "aaaaaaaaa", "aaaaaaaaa", "aaaaaaaaa")
            .aisle("aaaaaaaaa", "aeeadaeea", "abbeeebba", "dddaaaddd")
            .aisle("aaaaaaaaa", "abbacabba", "abbaaabba", "ddddddddd")

            .where("a", Predicates.blocks("gtceu:large_scale_assembler_casing"))
                .or(Predicates.autoAbilities(definition.getRecipeTypes()))
                .or(Predicates.abilities(PartAbility.PARALLEL_HATCH).setMaxGlobalLimited(1))
            .where("b", Predicates.blocks("gtceu:tempered_glass"))
            .where("c", Predicates.controller(Predicates.blocks(definition.get())))
            .where("d", Predicates.any())
            .where("e", Predicates.blocks("gtceu:tungstensteel_pipe_casing"))

            .build()
        )
        .workableCasingModel(
            "gtceu:block/casings/solid/machine_casing_solid_steel",
            "gtceu:block/multiblock/large_chemical_reactor"
        )
    
    event.create('arms_manufacturer', 'simple')
        .tiers(GTValues.LV, GTValues.MV, GTValues.HV, GTValues.EV, GTValues.IV, GTValues.LuV, GTValues.ZPM, GTValues.UV)
        .definition((tier, builder) => {
            builder
                .langValue(`${GTValues.VLVH[tier]} Arms Manufacturer`)
                .recipeType('arms_manufacturer')
                .workableTieredHullModel('gtceu:block/machines/assembler')
        }
    );
})