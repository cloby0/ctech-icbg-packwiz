// Automates Botania's Elven Trade Ritual (botania:elven_trade, traded through an Alfheim Portal).
// Real portal + trades are untouched; this is the optional GT lane on top.
//
// Unlike every other Botania ritual mirror in this pack, elven_trade recipes carry no mana cost
// of their own (data/botania/recipes/elven_trade/*.json has no "mana" field) -- in vanilla, the
// cost is the Alfheim Portal itself draining mana continuously just to stay open, independent of
// whatever's being traded on it. There's no per-recipe number to reverse-tier the way
// mana_pond/runic_forge/terra_agglomeration do. So this charges one flat "portal upkeep" mana
// draw on every trade instead, fixed at Initiate/HV. Elven Trade is where elementium (an
// Initiate-tier metal in the manasteel -> terrasteel -> elementium -> gaia_spirit line) actually
// comes from, so the trade itself has to sit at or before Initiate, not later.
//
// Structure is user-authored (alfheim_post_office.txt): a livingwood mailroom around a real
// Alfheim Portal block, terrasteel/elenbarite trim.

GTCEuStartupEvents.registry('gtceu:recipe_type', event => {
    event.create('alfheim_post_office')
        .category('magic')
        .setEUIO('in')
        .setMaxIOSize(4, 2, 0, 0)
        .setMaxSize('in', global.ManaCap, 1)
        .setProgressBar(GuiTextures.PROGRESS_BAR_ARROW, FillDirection.LEFT_TO_RIGHT)
        .setSound(GTSoundEntries.ASSEMBLER)
})

GTCEuStartupEvents.registry('gtceu:machine', event => {
    event.create('alfheim_post_office', 'multiblock')
        ["tooltips(java.util.List)"]([
            Component.literal("Automates Elven Trade -- ships items through the Alfheim Portal."),
            Component.literal("Charges a flat mana upkeep per trade regardless of what's traded"),
            Component.literal("Needs a mana input hatch")
        ])
        .rotationState(RotationState.NON_Y_AXIS)
        .appearanceBlock(GTBlocks.CASING_STEEL_SOLID)
        .recipeTypes(['alfheim_post_office'])
        .recipeModifiers([GTRecipeModifiers.PARALLEL_HATCH, GTRecipeModifiers.ELECTRIC_OVERCLOCK.apply(OverclockingLogic.PERFECT_OVERCLOCK)])
        .pattern(definition => FactoryBlockPattern.start()
            .aisle("abcccba", "addddda", "bdddddb", "abdddba", "aabcbaa", "aaabaaa")
            .aisle("abcccba", "adghgda", "bdhihdb", "abghgba", "aabcbaj", "aaaaaaa")
            .aisle("abcccba", "adghgdb", "bdhihdc", "abghgbc", "aabcbaj", "aaaaaaa")
            .aisle("abcfcba", "adghgda", "bdhihdb", "abghgba", "aabcbaa", "aaaaaaa")
            .aisle("abcccba", "addddda", "bddeddb", "abcdcba", "aabcbaa", "aaabaaa")
            .where("a", Predicates.blocks("minecraft:air"))
            .where("b", Predicates.blocks("botania:livingwood_stairs"))
            .where("c", Predicates.blocks("botania:livingwood_log"))
            .where("d", Predicates.blocks("everycomp:ch/botania/smooth_livingwood_planks")
                .or(Predicates.autoAbilities(definition.getRecipeTypes()))
                .or(Predicates.abilities(PartAbility.PARALLEL_HATCH).setMaxGlobalLimited(1))
                .or(Predicates.abilities(PartAbility.MAINTENANCE))
                .or(Predicates.abilities(Java.loadClass('com.icbg.core.registry.IcbgPartAbilities').MANA_INPUT)))
            .where("e", Predicates.controller(Predicates.blocks(definition.get())))
            .where("f", Predicates.blocks("botania:alfheim_portal"))
            .where("g", Predicates.blocks("gtceu:elenbarite_frame"))
            .where("h", Predicates.blocks("botania:terrasteel_block"))
            .where("i", Predicates.blocks("botania:mana_glass"))
            .where("j", Predicates.blocks("botania:red_petal_block"))
        .build())
        .workableCasingModel(
            "gtceu:block/casings/solid/machine_casing_solid_steel",
            "gtceu:block/multiblock/large_chemical_reactor"
        )
})
