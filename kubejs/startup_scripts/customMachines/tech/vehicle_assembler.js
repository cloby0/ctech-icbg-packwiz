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
            .aisle("aaaaa", "addda", "aaaaa", "accca", "accca", "aaaaa")
            .aisle("aaaaa", "deeed", "afffa", "cfffc", "cfffc", "aaaaa")
            .aisle("aaaaa", "deeed", "afffa", "cfffc", "cfffc", "aaaaa")
            .aisle("aaaaa", "deeed", "afffa", "cfffc", "cfffc", "aaaaa")
            .aisle("aaaaa", "deeed", "afffa", "cfffc", "cfffc", "aaaaa")
            .aisle("aaaaa", "deeed", "afffa", "cfffc", "cfffc", "aaaaa")
            .aisle("aaaaa", "deeed", "afffa", "cfffc", "cfffc", "aaaaa")
            .aisle("aaaaa", "deeed", "afffa", "cfffc", "cfffc", "aaaaa")
            .aisle("aaaaa", "aabaa", "aaaaa", "accca", "accca", "aaaaa")

            .where("a", Predicates.blocks("gtceu:solid_machine_casing")
                .or(Predicates.autoAbilities(definition.getRecipeTypes()))
                .or(Predicates.abilities(PartAbility.PARALLEL_HATCH).setMaxGlobalLimited(1)))
            .where("b", Predicates.controller(Predicates.blocks(definition.get())))
            .where("c", Predicates.blocks("minecraft:glass"))
            .where("d", Predicates.blocks("gtceu:steel_gearbox")
                .or(Predicates.autoAbilities(definition.getRecipeTypes()))
                .or(Predicates.abilities(PartAbility.PARALLEL_HATCH).setMaxGlobalLimited(1)))
            .where("e", Predicates.blocks("gtceu:light_concrete"))
            .where("f", Predicates.blocks("minecraft:air"))
            .build()
        )
        .workableCasingModel(
            "gtceu:block/casings/solid/machine_casing_solid_steel",
            "gtceu:block/multiblock/large_chemical_reactor"
        )
})
