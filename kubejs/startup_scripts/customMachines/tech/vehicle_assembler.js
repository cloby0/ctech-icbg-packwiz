GTCEuStartupEvents.registry('gtceu:recipe_type', event => {
    event.create('vehicle_assembler')
        .category('vehicles')
        .setEUIO('in')
        .setMaxIOSize(9, 1, 2, 0)
        .setProgressBar(GuiTextures.PROGRESS_BAR_ARROW, FillDirection.LEFT_TO_RIGHT)
        .setSound(GTSoundEntries.ASSEMBLER);

});

GTCEuStartupEvents.registry('gtceu:machine', event => {
    event.create('vehicle_assembler', 'multiblock')
        ["tooltips(java.util.List)"]([Component.literal("Vroom")])
        .rotationState(RotationState.NON_Y_AXIS)
        .appearanceBlock(GTBlocks.CASING_STEEL_SOLID)
        .recipeTypes(['vehicle_assembler'])
        .recipeModifiers([
            GTRecipeModifiers.PARALLEL_HATCH,
            GTRecipeModifiers.ELECTRIC_OVERCLOCK.apply(OverclockingLogic.PERFECT_OVERCLOCK)
        ])
        .pattern(definition => FactoryBlockPattern.start()
            .aisle("aaaaa", "aafaa", "aaaaa", "accca", "accca", "aaaaa")
            .aisle("aaaaa", "bdddb", "aeeea", "ceeec", "ceeec", "aaaaa")
            .aisle("aaaaa", "bdddb", "aeeea", "ceeec", "ceeec", "aaaaa")
            .aisle("aaaaa", "bdddb", "aeeea", "ceeec", "ceeec", "aaaaa")
            .aisle("aaaaa", "bdddb", "aeeea", "ceeec", "ceeec", "aaaaa")
            .aisle("aaaaa", "bdddb", "aeeea", "ceeec", "ceeec", "aaaaa")
            .aisle("aaaaa", "bdddb", "aeeea", "ceeec", "ceeec", "aaaaa")
            .aisle("aaaaa", "bdddb", "aeeea", "ceeec", "ceeec", "aaaaa")
            .aisle("aaaaa", "abbba", "aaaaa", "accca", "accca", "aaaaa")
            .where("a", Predicates.blocks("gtceu:solid_machine_casing")
                .or(Predicates.autoAbilities(definition.getRecipeTypes()))
                .or(Predicates.abilities(PartAbility.PARALLEL_HATCH).setMaxGlobalLimited(1)))
            .where("b", Predicates.blocks("gtceu:steel_gearbox")
                .or(Predicates.autoAbilities(definition.getRecipeTypes()))
                .or(Predicates.abilities(PartAbility.PARALLEL_HATCH).setMaxGlobalLimited(1)))
            .where("c", Predicates.blocks("minecraft:glass"))
            .where("d", Predicates.blocks("gtceu:light_concrete"))
            .where("e", Predicates.blocks("minecraft:air"))
            .where("f", Predicates.controller(Predicates.blocks(definition.get())))
            .build()
        )
        .workableCasingModel(
            "gtceu:block/casings/solid/machine_casing_solid_steel",
            "gtceu:block/multiblock/large_chemical_reactor"
        )
})
