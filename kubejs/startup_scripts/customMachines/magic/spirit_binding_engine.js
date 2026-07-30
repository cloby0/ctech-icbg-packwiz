// Occultism crafting rituals as a GT multiblock. Unlike the retired Grand Enchanting Sanctum /
// Imbuement Factory, this does NOT put GT on the magic spine: addOccultismRitual still emits the
// real occultism:ritual every time, so every ritual stays completable with zero GT progression.
// This is the optional throughput lane on top -- and the only reason it exists is the post-UV
// merged line (wraithware), where the ritual sits on a critical path with no magic-only detour.
//
// Structure is built from Occultism's own blocks around a real Golden Sacrificial Bowl rather
// than a bespoke casing, so it reads as a bound ritual circle instead of a steel box.

GTCEuStartupEvents.registry('gtceu:recipe_type', event => {
    event.create('spirit_binding_engine')
        .category('magic')
        .setEUIO('in')
        .setMaxIOSize(9, 1, 0, 0)
        .setProgressBar(GuiTextures.PROGRESS_BAR_ARROW, FillDirection.LEFT_TO_RIGHT)
        .setSound(GTSoundEntries.ASSEMBLER)
})

GTCEuStartupEvents.registry('gtceu:machine', event => {
    event.create('spirit_binding_engine', 'multiblock')
        ["tooltips(java.util.List)"]([
            Component.literal("Allows you to automate Occultism crafting rituals"),
            Component.literal("Pentacle tier sets the voltage: Foliot/Djinni LuV, Afrit ZPM, Marid UV")
        ])
        .rotationState(RotationState.NON_Y_AXIS)
        .appearanceBlock(GTBlocks.CASING_STEEL_SOLID)
        .recipeTypes(['spirit_binding_engine'])
        .recipeModifiers([GTRecipeModifiers.PARALLEL_HATCH, GTRecipeModifiers.ELECTRIC_OVERCLOCK.apply(OverclockingLogic.PERFECT_OVERCLOCK)])
        .pattern(definition => FactoryBlockPattern.start()
            .aisle("ccc", "cKc", "ccc")
            .aisle("ccc", "cgc", "ccc")
            .aisle("ccc", "cMc", "ccc")
            .where("c", Predicates.blocks("occultism:otherstone")
                .or(Predicates.autoAbilities(definition.getRecipeTypes()))
                .or(Predicates.abilities(PartAbility.PARALLEL_HATCH).setMaxGlobalLimited(1)))
            .where("g", Predicates.blocks("occultism:golden_sacrificial_bowl"))
            .where("K", Predicates.controller(Predicates.blocks(definition.get())))
            .where("M", Predicates.abilities(PartAbility.MAINTENANCE))
        .build())
        .workableCasingModel(
            "gtceu:block/casings/solid/machine_casing_solid_steel",
            "gtceu:block/multiblock/large_chemical_reactor"
        )
})
