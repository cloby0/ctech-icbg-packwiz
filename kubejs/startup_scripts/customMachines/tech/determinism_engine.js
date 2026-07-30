GTCEuStartupEvents.registry('gtceu:recipe_type', event => {

    event.create('determinism_engine')
        .category('determinism')
        .setEUIO('in')
        .setMaxIOSize(4, 1, 1, 0)
        .setProgressBar(GuiTextures.PROGRESS_BAR_ARROW, FillDirection.LEFT_TO_RIGHT)
        .setSound(GTSoundEntries.ASSEMBLER)

})

GTCEuStartupEvents.registry('gtceu:machine', event => {

    event.create('determinism_engine', 'multiblock')
        .recipeTypes(['determinism_engine'])
        .appearanceBlock(GTBlocks.CASING_STEEL_SOLID)
        .recipeModifiers([
            GTRecipeModifiers.ELECTRIC_OVERCLOCK.apply(OverclockingLogic.PERFECT_OVERCLOCK),
            Java.loadClass('com.gregtechceu.gtceu.api.recipe.modifier.EfficiencyModifier').of(2, 0.97, 0.5)
        ])
        .pattern(definition => FactoryBlockPattern.start()
            .aisle("aaa", "aea", "aaa")
            .aisle("aaa", "ada", "aaa")
            .aisle("aaa", "ada", "aaa")
            .aisle("aaa", "ada", "aaa")
            .aisle("aaa", "aaa", "aaa")

            .where("a", Predicates.blocks("gtceu:clean_machine_casing")
                .or(Predicates.autoAbilities(definition.getRecipeTypes()))
                .or(Predicates.abilities(PartAbility.PARALLEL_HATCH).setMaxGlobalLimited(1)))
            .where("d", Predicates.blocks("minecraft:air"))
            .where("e", Predicates.controller(Predicates.blocks(definition.get())))

            .build())
        .workableCasingModel(
            "gtceu:block/casings/solid/machine_casing_clean_stainless_steel",
            "gtceu:block/multiblock/large_chemical_reactor"
        )

})
