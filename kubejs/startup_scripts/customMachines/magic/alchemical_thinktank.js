// Automates Blood Magic's Alchemy Table (bloodmagic:alchemytable) -- the pack's dominant
// cross-mod magic-crafting handler (~77-88 addAlchemyTableRecipe call sites, see
// bloodmagic_alteration.md). The real table is untouched; this is the optional GT lane on top,
// added directly inside addAlchemyTableRecipe in alchemyTableRecipes.js so every existing
// call site gets the mirror for free.
//
// Structure is user-authored (automated_alchemical_thinktank.txt): a study/desk built around a
// cauldron (l) with a Create mechanical arm (k) doing the stirring, book piles and candles for
// flavor, in a bloodstone-brick/blank-rune casing that reads as a scaled-up Alchemy Table.

GTCEuStartupEvents.registry('gtceu:recipe_type', event => {
    event.create('alchemical_thinktank')
        .category('magic')
        .setEUIO('in')
        .setMaxIOSize(6, 1, 0, 0)
        .setMaxSize('in', global.LpCap, 1)
        .setProgressBar(GuiTextures.PROGRESS_BAR_ARROW, FillDirection.LEFT_TO_RIGHT)
        .setSound(GTSoundEntries.ASSEMBLER)
})

GTCEuStartupEvents.registry('gtceu:machine', event => {
    event.create('alchemical_thinktank', 'multiblock')
        ["tooltips(java.util.List)"]([
            Component.literal("Automates the Blood Magic Alchemy Table."),
            Component.literal("Voltage follows the recipe's bound Blood Orb tier: T1 LV up to T5 IV"),
            Component.literal("Needs an LP input hatch carrying a Blood Orb of the recipe's tier or better")
        ])
        .rotationState(RotationState.NON_Y_AXIS)
        .appearanceBlock(GTBlocks.CASING_STEEL_SOLID)
        .recipeTypes(['alchemical_thinktank'])
        .recipeModifiers([GTRecipeModifiers.PARALLEL_HATCH, GTRecipeModifiers.ELECTRIC_OVERCLOCK.apply(OverclockingLogic.PERFECT_OVERCLOCK)])
        .pattern(definition => FactoryBlockPattern.start()
            .aisle("aaaaa", "bcccb", "efffe", "bcccb", "ggggg")
            .aisle("aggga", "climc", "fhnof", "chhhc", "ggggg")
            .aisle("aggga", "chkic", "fhhjf", "chhhc", "ggggg")
            .aisle("aggga", "chhic", "fhhjf", "chhhc", "ggggg")
            .aisle("aaaaa", "bcdcb", "efffe", "bcccb", "ggggg")
            .where("a", Predicates.blocks("quark:cobblestone_bricks")
                .or(Predicates.autoAbilities(definition.getRecipeTypes()))
                .or(Predicates.abilities(PartAbility.PARALLEL_HATCH).setMaxGlobalLimited(1))
                .or(Predicates.abilities(PartAbility.MAINTENANCE))
                .or(Predicates.abilities(Java.loadClass('com.icbg.core.registry.IcbgPartAbilities').LP_INPUT)))
            .where("b", Predicates.blocks("bloodmagic:bloodstonebrick")
                .or(Predicates.autoAbilities(definition.getRecipeTypes()))
                .or(Predicates.abilities(PartAbility.PARALLEL_HATCH).setMaxGlobalLimited(1))
                .or(Predicates.abilities(PartAbility.MAINTENANCE))
                .or(Predicates.abilities(Java.loadClass('com.icbg.core.registry.IcbgPartAbilities').LP_INPUT)))
            .where("c", Predicates.blocks("bloodmagic:blankrune")
                .or(Predicates.autoAbilities(definition.getRecipeTypes()))
                .or(Predicates.abilities(PartAbility.PARALLEL_HATCH).setMaxGlobalLimited(1))
                .or(Predicates.abilities(PartAbility.MAINTENANCE))
                .or(Predicates.abilities(Java.loadClass('com.icbg.core.registry.IcbgPartAbilities').LP_INPUT)))
            .where("d", Predicates.controller(Predicates.blocks(definition.get())))
            .where("e", Predicates.blocks("bloodmagic:dungeon_metal_vengeful"))
            .where("f", Predicates.blocks("create:framed_glass"))
            .where("g", Predicates.blocks("quark:cobblestone_bricks_slab"))
            .where("h", Predicates.blocks("minecraft:air"))
            .where("i", Predicates.blocks("refurbished_furniture:dark_oak_desk"))
            .where("j", Predicates.blocks("supplementaries:book_pile_horizontal"))
            .where("k", Predicates.blocks("create:mechanical_arm"))
            .where("l", Predicates.blocks("minecraft:cauldron"))
            .where("m", Predicates.blocks("minecraft:stripped_dark_oak_log"))
            .where("n", Predicates.blocks("supplementaries:jar"))
            .where("o", Predicates.blocks("supplementaries:candle_holder_red"))
        .build())
        .workableCasingModel(
            "gtceu:block/casings/solid/machine_casing_solid_steel",
            "gtceu:block/multiblock/large_chemical_reactor"
        )
})
