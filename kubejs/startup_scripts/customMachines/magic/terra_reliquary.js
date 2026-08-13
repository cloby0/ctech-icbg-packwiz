// Automates Botania's Terrestrial Agglomeration ritual (Terra Plate). Split out of Runic Forge
// (2026-08-12) into its own dedicated chapel-shaped multiblock -- terra_agglomeration used to
// share runic_forge's casing/recipeTypes list, but a real structure exists for it now.
// Real Mana Pool + Terra Plate ritual is untouched; this is the optional GT lane on top.
// Structure is user-authored (terrestrial_whatzit.txt): a livingwood chapel around a manasteel
// altar core, "supposed to look like a church."

GTCEuStartupEvents.registry('gtceu:recipe_type', event => {
    event.create('terra_agglomeration')
        .category('magic')
        .setEUIO('in')
        .setMaxIOSize(9, 1, 1, 0)
        .setMaxSize('in', global.ManaCap, 1)
        .setProgressBar(GuiTextures.PROGRESS_BAR_ARROW, FillDirection.LEFT_TO_RIGHT)
        .setSound(GTSoundEntries.ASSEMBLER)
})

GTCEuStartupEvents.registry('gtceu:machine', event => {
    event.create('terra_reliquary', 'multiblock')
        ["tooltips(java.util.List)"]([
            Component.literal("Automates Terrestrial Agglomeration -- forges the Terra Plate."),
            Component.literal("Needs a mana input hatch")
        ])
        .rotationState(RotationState.NON_Y_AXIS)
        .appearanceBlock(GTBlocks.CASING_STEEL_SOLID)
        .recipeTypes(['terra_agglomeration'])
        .recipeModifiers([GTRecipeModifiers.PARALLEL_HATCH, GTRecipeModifiers.ELECTRIC_OVERCLOCK.apply(OverclockingLogic.PERFECT_OVERCLOCK),
            global.IcbgRecipeModifiers.MANA_SPEED, global.IcbgRecipeModifiers.LP_PARALLEL])
        .pattern(definition => FactoryBlockPattern.start()
            .aisle("aaaaaa", "cccccc", "cccccc", "cccccc", "cccccc")
            .aisle("adeeda", "ciffic", "cjhhjc", "cccccc", "cccccc")
            .aisle("aeeeea", "cffffc", "chhhhc", "cccccc", "cccccc")
            .aisle("aeeeea", "cffffc", "chhhhc", "cccccc", "cccccc")
            .aisle("adeeda", "ciffic", "cjhhjc", "cccccc", "cccccc")
            .aisle("adeeda", "ccffcc", "ccffcc", "ccggcc", "cchhcc")
            .aisle("adeeda", "ccffcc", "ccffcc", "ccggcc", "cchhcc")
            .aisle("aaabaa", "cccccc", "cccccc", "cccccc", "cccccc")
            .where("a", Predicates.blocks("everycomp:ch/botania/smooth_livingwood_planks")
                .or(Predicates.autoAbilities(definition.getRecipeTypes()))
                .or(Predicates.abilities(PartAbility.PARALLEL_HATCH).setMaxGlobalLimited(1))
                .or(Predicates.abilities(global.IcbgPartAbilities.MANA_SPEED_INPUT).setMaxGlobalLimited(1))
                .or(Predicates.abilities(global.IcbgPartAbilities.LP_PARALLEL_BOOST).setMaxGlobalLimited(1))
                .or(Predicates.abilities(PartAbility.MAINTENANCE))
                .or(Predicates.abilities(Java.loadClass('com.icbg.core.registry.IcbgPartAbilities').MANA_INPUT)))
            .where("b", Predicates.controller(Predicates.blocks(definition.get())))
            .where("c", Predicates.blocks("minecraft:air"))
            .where("d", Predicates.blocks("minecraft:grass_block"))
            .where("e", Predicates.blocks("gtceu:manasteel_frame"))
            .where("f", Predicates.blocks("kubejs:mana_livingrock_casing"))
            .where("g", Predicates.blocks("botania:livingrock_bricks_wall"))
            .where("h", Predicates.blocks("botania:stripped_livingwood_stairs"))
            .where("i", Predicates.blocks("botania:livingwood_fence"))
            .where("j", Predicates.blocks("botania:stripped_livingwood_slab"))
        .build())
        .workableCasingModel(
            "kubejs:block/mana_livingrock_casing",
            "gtceu:block/multiblock/large_chemical_reactor"
        )
})
