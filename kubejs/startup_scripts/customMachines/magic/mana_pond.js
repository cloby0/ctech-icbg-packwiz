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
        ["tooltips(java.util.List)"]([Component.literal("I am a multiblock")])


        .rotationState(RotationState.NON_Y_AXIS)
        .appearanceBlock(GTBlocks.CASING_STEEL_SOLID)
        .recipeTypes(['mana_pond'])
        .recipeModifiers([GTRecipeModifiers.PARALLEL_HATCH]) // 


        .pattern(definition => FactoryBlockPattern.start()
            .aisle("xbbbx", "xxxxx", "xxxxx", "xxxxx", "abbba")
            .aisle("bbbbb", "xcccx", "xcccx", "xcccx", "bbbbb")
            .aisle("bbbbb", "xcacx", "xcacx", "xcacx", "bbbbb")
            .aisle("bbbbb", "xcccx", "xcKcx", "xcccx", "bbbbb")
            .aisle("xbbbx", "xxxxx", "xxxxx", "xxxxx", "abbba")

            .where("a", Predicates.blocks("minecraft:air"))
            .where("b", Predicates.blocks("botania:livingrock_bricks"))
            .where("c", Predicates.blocks("botania:polished_livingrock"))
                .or(Predicates.autoAbilities(definition.getRecipeTypes()))
            .where("x", Predicates.any())
            .where("K", Predicates.controller(Predicates.blocks(definition.get())))

            /*
            .aisle('CCC', 'GGG', 'CCC')
            .aisle('CCC', 'GDG', 'CSC')
            .aisle('CKC', 'GGG', 'CMC')
            .where('K', Predicates.controller(Predicates.blocks(definition.get())))
            .where('M', Predicates.abilities(PartAbility.MAINTENANCE))
            .where('S', Predicates.abilities(PartAbility.MUFFLER))
            .where('D', Predicates.blocks(GTBlocks.COIL_CUPRONICKEL.get()))
            .where('G', Predicates.blocks('minecraft:glass'))
            .where('C', Predicates.blocks(GTBlocks.CASING_STEEL_SOLID.get())
                .or(Predicates.autoAbilities(definition.getRecipeTypes())))
            */
        .build())
        .workableCasingModel(
            "gtceu:block/casings/solid/machine_casing_inert_ptfe",
            "gtceu:block/multiblock/large_chemical_reactor"
        )
})