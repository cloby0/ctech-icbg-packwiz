// Automates Blood Magic's meteorRitual ("Mark of the Falling Tower" -- data/bloodmagic/recipes/meteor/,
// see bloodmagicwootaddon.pw.toml is unrelated; the real recipe type is bloodmagic:meteor).
// Vanilla ritual is untouched -- placing a Master Ritual Stone with the real pentacle still works
// with zero GT. This multiblock is the optional throughput lane: it eats the same catalyst item
// and syphons the same LP total the ritual would, and outputs a deterministic slice of the ore
// haul instead of a randomised in-world explosion (a multiblock recipe can't world-gen terrain).
// Recipes are authored in server_scripts/magic/customMachines/bloodMagicMeteorRecipes.js.
//
// Structure is user-authored (struct.txt): a Blood Magic ritual pentacle (5 elemental ritual
// stones + dungeon metal will-type runes) rendered in basalt/chipped/rechiseled casing, with a
// Botania bifrost rift (o/q) standing in for the sky the meteor falls through and a beacon (w) as
// the buried power core.

GTCEuStartupEvents.registry('gtceu:recipe_type', event => {
    event.create('meteor_chamber')
        .category('magic')
        .setEUIO('in')
        .setMaxIOSize(1, 9, 0, 0)
        .setMaxSize('in', global.LpCap, 1)
        .setProgressBar(GuiTextures.PROGRESS_BAR_ARROW, FillDirection.LEFT_TO_RIGHT)
        .setSound(GTSoundEntries.ASSEMBLER)
})

GTCEuStartupEvents.registry('gtceu:machine', event => {
    event.create('meteor_chamber', 'multiblock')
        ["tooltips(java.util.List)"]([
            Component.literal("Automates Mark of the Falling Tower -- drops a meteor of ore on command."),
            Component.literal("Catalyst tier sets the voltage: common catalysts IV, rare ones LuV"),
            Component.literal("Needs an LP input hatch carrying a Blood Orb of the recipe's tier or better")
        ])
        .rotationState(RotationState.NON_Y_AXIS)
        .appearanceBlock(GTBlocks.CASING_STEEL_SOLID)
        .recipeTypes(['meteor_chamber'])
        .recipeModifiers([GTRecipeModifiers.PARALLEL_HATCH, GTRecipeModifiers.ELECTRIC_OVERCLOCK.apply(OverclockingLogic.PERFECT_OVERCLOCK),
            global.IcbgManaSpeedModifier, global.IcbgLpParallelModifier])
        .pattern(definition => FactoryBlockPattern.start()
            .aisle("aaaaaaaaabbbbbbbaaaaaaaaa", "aaaaaaaaaaaaaaaaaaaaaaaaa", "aaaaaaaaaaaaaaaaaaaaaaaaa", "aaaaaaaaaaaaaaaaaaaaaaaaa", "aaaaaaaaaaaaaaaaaaaaaaaaa", "aaaaaaaaaaaaaaaaaaaaaaaaa", "aaaaaaaaaaaaaaaaaaaaaaaaa", "aaaaaaaaaaaaaaaaaaaaaaaaa", "aaaaaaaaaaaaaaaaaaaaaaaaa", "aaaaaaaaaaaaaaaaaaaaaaaaa", "aaaaaaaaaaaadaaaaaaaaaaaa", "aaaaaaaaaaaaEaaaaaaaaaaaa", "aaaaaaaaaaaaEaaaaaaaaaaaa", "aaaaaaaaaaaadaaaaaaaaaaaa", "aaaaaaaaaaaaaaaaaaaaaaaaa", "aaaaaaaaaaaafaaaaaaaaaaaa", "aaaaaaaaaaaaaaaaaaaaaaaaa", "aaaaaaaaaaaaaaaaaaaaaaaaa", "aaaaaaaaaaaaaaaaaaaaaaaaa", "aaaaaaaaaaaaaaaaaaaaaaaaa")
            .aisle("aaaaaabbbfffffffbbbaaaaaa", "aaaaaaaaaaaaaaaaaaaaaaaaa", "aaaaaaaaaaaaaaaaaaaaaaaaa", "aaaaaaaaaaaaaaaaaaaaaaaaa", "aaaaaaaaaaaaaaaaaaaaaaaaa", "aaaaaaaaaaaaaaaaaaaaaaaaa", "aaaaaaaaaaaaaaaaaaaaaaaaa", "aaaaaaaaaaaaaaaaaaaaaaaaa", "aaaaaaaaaaaadaaaaaaaaaaaa", "aaaaaaaaaaaagaaaaaaaaaaaa", "aaaaaaaaaaaagaaaaaaaaaaaa", "aaaaaaaaaaaagaaaaaaaaaaaa", "aaaaaaaaaaaafaaaaaaaaaaaa", "aaaaaaaaaaaaEaaaaaaaaaaaa", "aaaaaaaaaaaahaaaaaaaaaaaa", "aaaaaaaaaaaafaaaaaaaaaaaa", "aaaaaaaaaaaaaaaaaaaaaaaaa", "aaaaaaaaaaaaaaaaaaaaaaaaa", "aaaaaaaaaaaaaaaaaaaaaaaaa", "aaaaaaaaaaaaaaaaaaaaaaaaa")
            .aisle("aaaabbfffffffffffffbbaaaa", "aaaaaaaaaaadadaaaaaaaaaaa", "aaaaaaaaaaaaaaaaaaaaaaaaa", "aaaaaaaaaaaaaaaaaaaaaaaaa", "aaaaaaaaaaaaaaaaaaaaaaaaa", "aaaaaaaaaaaaaaaaaaaaaaaaa", "aaaaaaaaaaaaaaaaaaaaaaaaa", "aaaaaaaaaaaaaaaaaaaaaaaaa", "aaaaaaaaaaaaaaaaaaaaaaaaa", "aaaaaaaaaaaaaaaaaaaaaaaaa", "aaaaaaaaaaaaaaaaaaaaaaaaa", "aaaaaaaaaaaaiaaaaaaaaaaaa", "aaaaaaaaaaaagaaaaaaaaaaaa", "aaaaaaaaaaaaEaaaaaaaaaaaa", "aaaaaaaaaaaahaaaaaaaaaaaa", "aaaaaaaaaaaafaaaaaaaaaaaa", "aaaaaaaaaaaaaaaaaaaaaaaaa", "aaaaaaaaaaaaaaaaaaaaaaaaa", "aaaaaaaaaaaaaaaaaaaaaaaaa", "aaaaaaaaaaaaaaaaaaaaaaaaa")
            .aisle("aaabffffffaaaaaffffffbaaa", "aaaaaaaaaabbbbbaaaaaaaaaa", "aaaaaaaaaaadadaaaaaaaaaaa", "aaaaaaaaaaaaaaaaaaaaaaaaa", "aaaaaaaaaaaadaaaaaaaaaaaa", "aaaaaaaaaaaaDaaaaaaaaaaaa", "aaaaaaaaaaaaDaaaaaaaaaaaa", "aaaaaaaaaaaakaaaaaaaaaaaa", "aaaaaaaaaaaakaaaaaaaaaaaa", "aaaaaaaaaaaakaaaaaaaaaaaa", "aaaaaaaaaaaaiaaaaaaaaaaaa", "aaaaaaaaaaaaiaaaaaaaaaaaa", "aaaaaaaaaaaagaaaaaaaaaaaa", "aaaaaaaaaaaaEaaaaaaaaaaaa", "aaaaaaaaaaaadaaaaaaaaaaaa", "aaaaaaaaaaaafaaaaaaaaaaaa", "aaaaaaaaaaaaaaaaaaaaaaaaa", "aaaaaaaaaaaaaaaaaaaaaaaaa", "aaaaaaaaaaaaaaaaaaaaaaaaa", "aaaaaaaaaaaaaaaaaaaaaaaaa")
            .aisle("aabfffffaaaaaaaaafffffbaa", "aaaaaaaabbaaaaabbaaaaaaaa", "aaaaaaaaaablmlbaaaaaaaaaa", "aaaaaaaaaahlDlhaaaaaaaaaa", "aaaaaaaaaaadDdaaaaaaaaaaa", "aaaaaaaaaaaakaaaaaaaaaaaa", "aaaaaaaaaaaakaaaaaaaaaaaa", "aaaaaaaaaaaagaaaaaaaaaaaa", "aaaaaaaaaaaagaaaaaaaaaaaa", "aaaaaaaaaaaagaaaaaaaaaaaa", "aaaaaaaaaaaakaaaaaaaaaaaa", "aaaaaaaaaaaakaaaaaaaaaaaa", "aaaaaaaaaaaagaaaaaaaaaaaa", "aaaaaaaaaaaaEaaaaaaaaaaaa", "aaaaaaaaaaaaEaaaaaaaaaaaa", "aaaaaaaaaaaahaaaaaaaaaaaa", "aaaaaaaaaaaaaaaaaaaaaaaaa", "aaaaaaaaaaaaaaaaaaaaaaaaa", "aaaaaaaaaaaaaaaaaaaaaaaaa", "aaaaaaaaaaaaaaaaaaaaaaaaa")
            .aisle("aabfffaaaaaaaaaaaaafffbaa", "aaaaaabbffaaaaaffbbaaaaaa", "aaaaaaaaadlaaaldaaaaaaaaa", "aaaaaaaaaalaaalaaaaaaaaaa", "aaaaaaaaaadbbbdaaaaaaaaaa", "aaaaaaaaaaaadaaaaaaaaaaaa", "aaaaaaaaaaaadaaaaaaaaaaaa", "aaaaaaaaaaaadaaaaaaaaaaaa", "aaaaaaaaaaaaaaaaaaaaaaaaa", "aaaaaaaaaaaaaaaaaaaaaaaaa", "aaaaaaaaaaaaaaaaaaaaaaaaa", "aaaaaaaaaaaadaaaaaaaaaaaa", "aaaaaaaaaaaaCaaaaaaaaaaaa", "aaaaaaaaaaaadaaaaaaaaaaaa", "aaaaaaaaaaaaEaaaaaaaaaaaa", "aaaaaaaaaaaahaaaaaaaaaaaa", "aaaaaaaaaaaaaaaaaaaaaaaaa", "aaaaaaaaaaaaaaaaaaaaaaaaa", "aaaaaaaaaaaaaaaaaaaaaaaaa", "aaaaaaaaaaaaaaaaaaaaaaaaa")
            .aisle("abfffaaaaaaaaaaaaaaafffba", "aaaaabffffaaaaaffffbaaaaa", "aaaaaaaoaamaaamaaoaaaaaaa", "aaaaaaaoaagaaagaaoaaaaaaa", "aaaaaaaaaagbDbgaaaaaaaaaa", "aaaaaaaaaagdDdgaaaaaaaaaa", "aaaaaaaaaadaDadaaaaaaaaaa", "aaaaaaaaaaahDhaaaaaaaaaaa", "aaaaaaaaaaaadaaaaaaaaaaaa", "aaaaaaaaaaaaaaaaaaaaaaaaa", "aaaaaaaaaaaaaaaaaaaaaaaaa", "aaaaaaaaaaaaaaaaaaaaaaaaa", "aaaaaaaaaaaadaaaaaaaaaaaa", "aaaaaaaaaaaakaaaaaaaaaaaa", "aaaaaaaaaaaaEaaaaaaaaaaaa", "aaaaaaaaaaaadaaaaaaaaaaaa", "aaaaaaaaaaaaaaaaaaaaaaaaa", "aaaaaaaaaaaaaaaaaaaaaaaaa", "aaaaaaaaaaaaaaaaaaaaaaaaa", "aaaaaaaaaaaaaaaaaaaaaaaaa")
            .aisle("abfffaapaaaaaaaaapaafffba", "aaaaabfqffaaaaaffqfbaaaaa", "aaaaaaoqodlaaaldoqoaaaaaa", "aaaaaaoqoalaaalaoqoaaaaaa", "aaaaaaaqaadbbbdaaqaaaaaaa", "aaaaaaahaaaadaaaahaaaaaaa", "aaaaaaaaaaaaaaaaaaaaaaaaa", "aaaaaaaraaaahaaaaraaaaaaa", "aaaaaaaaaaaaaaaaaaaaaaaaa", "aaaaaaaaaaaaaaaaaaaaaaaaa", "aaaaaaaaaaaaaaaaaaaaaaaaa", "aaaaaaaaaaaaaaaaaaaaaaaaa", "aaaaaaaaaaaaaaaaaaaaaaaaa", "aaaaaaaaaaaakaaaaaaaaaaaa", "aaaaaaaaaaaadaaaaaaaaaaaa", "aaaaaaaaaaaaaaaaaaaaaaaaa", "aaaaaaaaaaaaaaaaaaaaaaaaa", "aaaaaaaaaaaaaaaaaaaaaaaaa", "aaaaaaaaaaaaaaaaaaaaaaaaa", "aaaaaaaaaaaaaaaaaaaaaaaaa")
            .aisle("abffaaaaaaaaaaaaaaaaaffba", "aaaabfffffaaaaafffffbaaaa", "aaaaaaaoaablmlbaaoaaaaaaa", "aaaaaaaoaahlglhaaoaaaaaaa", "aaaaaaaaaaadgdaaaaaaaaaaa", "aaaaaaaaaaaagaaaaaaaaaaaa", "aaaaaaaaaaaadaaaaaaaaaaaa", "aaaaaaaaaaaaaaaaaaaaaaaaa", "aaaaaaaaaaaaaaaaaaaaaaaaa", "aaaaaaaaaaaaaaaaaaaaaaaaa", "aaaaaaaaaaaaaaaaaaaaaaaaa", "aaaaaaaaaaaaaaaaaaaaaaaaa", "aaaaaaaaaaaaaaaaaaaaaaaaa", "aaaaaaaaaaaaCaaaaaaaaaaaa", "aaaaaaaaaaaahaaaaaaaaaaaa", "aaaaaaaaaaaaaaaaaaaaaaaaa", "aaaaaaaaaaaaaaaaaaaaaaaaa", "aaaaaaaaaaaaaaaaaaaaaaaaa", "aaaaaaaaaaaaaaaaaaaaaaaaa", "aaaaaaaaaaaaaaaaaaaaaaaaa")
            .aisle("bfffaaaaaaaaaaaaaaaaafffb", "aaaabfffffgggggfffffbaaaa", "aaaaadadaaadadaaadadaaaaa", "aaaaaaaaaaaaaaaaaaaaaaaaa", "aaaaaaaaaaaaaaaaaaaaaaaaa", "aaaaaaaaaaaaaaaaaaaaaaaaa", "aaaaaaaaaaaaaaaaaaaaaaaaa", "aaaaaaaaaaaaaaaaaaaaaaaaa", "aaaaaaaaaaaaaaaaaaaaaaaaa", "aaaaaaaaaaaaaaaaaaaaaaaaa", "aaaaaaaaaaaaaaaaaaaaaaaaa", "aaaaaaaaaaaaaaaaaaaaaaaaa", "aaaaaaaaaaaaaaaaaaaaaaaaa", "aaaaaaaaaaaadaaaaaaaaaaaa", "aaaaaaaaaaaahaaaaaaaaaaaa", "aaaaaaaaaaaaaaaaaaaaaaaaa", "aaaaaaaaaaaaaaaaaaaaaaaaa", "aaaaaaaaaaaaaaaaaaaaaaaaa", "aaaaaaaaaaaaaaaaaaaaaaaaa", "aaaaaaaaaaaaaaaaaaaaaaaaa")
            .aisle("bffaaaaaaaapppaaaaaaaaffb", "aaabaaaaagbqqqbgaaaaabaaa", "aaaablmlbastttsablmlbaaaa", "aaaahlglhastutsahlglhaaaa", "aaaaadgdaasuuusaadgdaaaaa", "aaaaaagaaaasssaaaagaaaaaa", "aaaaaadaaaasosaaaadaaaaaa", "aaaaaaaaaaasosaaaaaaaaaaa", "aaaaaaaaaaaoooaaaaaaaaaaa", "aaaaaaaaaaaaaaaaaaaaaaaaa", "aaaaaaaaaaaaaaaaaaaaaaaaa", "aaaaaaaaaaaaaaaaaaaaaaaaa", "aaaaaaaaaaaaaaaaaaaaaaaaa", "aaaaaaaaaaaaaaaaaaaaaaaaa", "aaaaaaaaaaaahaaaaaaaaaaaa", "aaaaaaaaaaaaaaaaaaaaaaaaa", "aaaaaaaaaaaaaaaaaaaaaaaaa", "aaaaaaaaaaaaaaaaaaaaaaaaa", "aaaaaaaaaaaaaaaaaaaaaaaaa", "aaaaaaaaaaaaaaaaaaaaaaaaa")
            .aisle("bffaaaaaaapppppaaaaaaaffb", "aadbaaaaagqqqqqgaaaaabdaa", "aaadlaaaldtjjjtdlaaaldaaa", "aaaalaaalatrtrtalaaalaaaa", "aaaadbbbdaurtruadbbbdaaaa", "aaaaaadaaasuuusaaadaaaaaa", "aaaaaaaaaasuuusaaaaaaaaaa", "aaaaaahaaasuuusaaahaaaaaa", "aaaaaaaaaaouuuoaaaaaaaaaa", "aaaaaaaaaaaoqoaaaaaaaaaaa", "aaaaaaaaaaaoqoaaaaaaaaaaa", "aaaaaaaaaaaoqoaaaaaaaaaaa", "aaaaaaaaaaaoooaaaaaaaaaaa", "aaaaaaaaaaaoooaaaaaaaaaaa", "aaaaaaaaaaaaoaaaaaaaaaaaa", "aaaaaaaaaaaaoaaaaaaaaaaaa", "aaaaaaaaaaaaaaaaaaaaaaaaa", "aaaaaaaaaaaaaaaaaaaaaaaaa", "aaaaaaaaaaaaaaaaaaaaaaaaa", "aaaaaaaaaaaaaaaaaaaaaaaaa")
            .aisle("bffaaaaaaapppppaaaaaaaffb", "aaabaaaaagqqqqqgaaaaabaaa", "aaaamaaamaujjjtamaaamaaaa", "aaaavaaagautwtuagaaaxaaaa", "aaadvbvbgautqtuagbxbxdaaa", "aaavkdvdgasuqusagdxdkxaaa", "aaavkdvadaouquoadaxdkxaaa", "aaakgdvhaaouquoaahxdgkaaa", "adakgadaaaouquoaaadagkada", "agakgaaaaaaqqqaaaaaagkaga", "dgaikaaaaaaqqqaaaaaakiagd", "ygiikdaaaaaqqqaaaaadkiigz", "yfgggAdaaaaoqoaaaadBgggfz", "dyyyydkkAdaoqoadBkkdzzzzd", "ahhdyyydhhhoqohhhdzzzdhha", "aaaahhdaaaaoqoaaaadhhffff", "aaaaaaaaaaaaqaaaaaaaaaaaa", "aaaaaaaaaaaaqaaaaaaaaaaaa", "aaaaaaaaaaaaqaaaaaaaaaaaa", "aaaaaaaaaaaaqaaaaaaaaaaaa")
            .aisle("bffaaaaaaapppppaaaaaaaffb", "aadbaaaaagqqqqqgaaaaabdaa", "aaadlaaaldtjjjtdlaaaldaaa", "aaaalaaalatrtrtalaaalaaaa", "aaaadbbbdaurtruadbbbdaaaa", "aaaaaadaaasuuusaaadaaaaaa", "aaaaaaaaaasuuusaaaaaaaaaa", "aaaaaahaaasuuusaaahaaaaaa", "aaaaaaaaaaouuuoaaaaaaaaaa", "aaaaaaaaaaaoqoaaaaaaaaaaa", "aaaaaaaaaaaoqoaaaaaaaaaaa", "aaaaaaaaaaaoqoaaaaaaaaaaa", "aaaaaaaaaaaoooaaaaaaaaaaa", "aaaaaaaaaaaoooaaaaaaaaaaa", "aaaaaaaaaaaaoaaaaaaaaaaaa", "aaaaaaaaaaaaoaaaaaaaaaaaa", "aaaaaaaaaaaaaaaaaaaaaaaaa", "aaaaaaaaaaaaaaaaaaaaaaaaa", "aaaaaaaaaaaaaaaaaaaaaaaaa", "aaaaaaaaaaaaaaaaaaaaaaaaa")
            .aisle("bffaaaaaaaapppaaaaaaaaffb", "aaabaaaaagbqqqbgaaaaabaaa", "aaaablmlbastutsablmlbaaaa", "aaaahlglhastutsahlglhaaaa", "aaaaadgdaasuuusaadgdaaaaa", "aaaaaagaaaasssaaaagaaaaaa", "aaaaaadaaaasosaaaadaaaaaa", "aaaaaaaaaaasosaaaaaaaaaaa", "aaaaaaaaaaaoooaaaaaaaaaaa", "aaaaaaaaaaaaaaaaaaaaaaaaa", "aaaaaaaaaaaaaaaaaaaaaaaaa", "aaaaaaaaaaaaaaaaaaaaaaaaa", "aaaaaaaaaaaaaaaaaaaaaaaaa", "aaaaaaaaaaaaaaaaaaaaaaaaa", "aaaaaaaaaaaahaaaaaaaaaaaa", "aaaaaaaaaaaaaaaaaaaaaaaaa", "aaaaaaaaaaaaaaaaaaaaaaaaa", "aaaaaaaaaaaaaaaaaaaaaaaaa", "aaaaaaaaaaaaaaaaaaaaaaaaa", "aaaaaaaaaaaaaaaaaaaaaaaaa")
            .aisle("bfffaaaaaaaaaaaaaaaaafffb", "aaaabfffffgggggfffffbaaaa", "aaaaadadaaadadaaadadaaaaa", "aaaaaaaaaaaaaaaaaaaaaaaaa", "aaaaaaaaaaaaaaaaaaaaaaaaa", "aaaaaaaaaaaaaaaaaaaaaaaaa", "aaaaaaaaaaaaaaaaaaaaaaaaa", "aaaaaaaaaaaaaaaaaaaaaaaaa", "aaaaaaaaaaaaaaaaaaaaaaaaa", "aaaaaaaaaaaaaaaaaaaaaaaaa", "aaaaaaaaaaaaaaaaaaaaaaaaa", "aaaaaaaaaaaaaaaaaaaaaaaaa", "aaaaaaaaaaaaaaaaaaaaaaaaa", "aaaaaaaaaaaadaaaaaaaaaaaa", "aaaaaaaaaaaahaaaaaaaaaaaa", "aaaaaaaaaaaaaaaaaaaaaaaaa", "aaaaaaaaaaaaaaaaaaaaaaaaa", "aaaaaaaaaaaaaaaaaaaaaaaaa", "aaaaaaaaaaaaaaaaaaaaaaaaa", "aaaaaaaaaaaaaaaaaaaaaaaaa")
            .aisle("abffaaaaaaaaaaaaaaaaaffba", "aaaabfffffaaaaafffffbaaaa", "aaaaaaaoaablmlbaaoaaaaaaa", "aaaaaaaoaahlglhaaoaaaaaaa", "aaaaaaaaaaadgdaaaaaaaaaaa", "aaaaaaaaaaaagaaaaaaaaaaaa", "aaaaaaaaaaaadaaaaaaaaaaaa", "aaaaaaaaaaaaaaaaaaaaaaaaa", "aaaaaaaaaaaaaaaaaaaaaaaaa", "aaaaaaaaaaaaaaaaaaaaaaaaa", "aaaaaaaaaaaaaaaaaaaaaaaaa", "aaaaaaaaaaaaaaaaaaaaaaaaa", "aaaaaaaaaaaaaaaaaaaaaaaaa", "aaaaaaaaaaaanaaaaaaaaaaaa", "aaaaaaaaaaaahaaaaaaaaaaaa", "aaaaaaaaaaaaaaaaaaaaaaaaa", "aaaaaaaaaaaaaaaaaaaaaaaaa", "aaaaaaaaaaaaaaaaaaaaaaaaa", "aaaaaaaaaaaaaaaaaaaaaaaaa", "aaaaaaaaaaaaaaaaaaaaaaaaa")
            .aisle("abfffaapaaaaaaaaapaafffba", "aaaaabfqffaaaaaffqfbaaaaa", "aaaaaaoqodlaaaldoqoaaaaaa", "aaaaaaoqoalaaalaoqoaaaaaa", "aaaaaaaqaadbbbdaaqaaaaaaa", "aaaaaaahaaaadaaaahaaaaaaa", "aaaaaaaaaaaaaaaaaaaaaaaaa", "aaaaaaaraaaahaaaaraaaaaaa", "aaaaaaaaaaaaaaaaaaaaaaaaa", "aaaaaaaaaaaaaaaaaaaaaaaaa", "aaaaaaaaaaaaaaaaaaaaaaaaa", "aaaaaaaaaaaaaaaaaaaaaaaaa", "aaaaaaaaaaaaaaaaaaaaaaaaa", "aaaaaaaaaaaakaaaaaaaaaaaa", "aaaaaaaaaaaadaaaaaaaaaaaa", "aaaaaaaaaaaaaaaaaaaaaaaaa", "aaaaaaaaaaaaaaaaaaaaaaaaa", "aaaaaaaaaaaaaaaaaaaaaaaaa", "aaaaaaaaaaaaaaaaaaaaaaaaa", "aaaaaaaaaaaaaaaaaaaaaaaaa")
            .aisle("abfffaaaaaaaaaaaaaaafffba", "aaaaabffffaaaaaffffbaaaaa", "aaaaaaaoaamaaamaaoaaaaaaa", "aaaaaaaoaagaaagaaoaaaaaaa", "aaaaaaaaaagbabgaaaaaaaaaa", "aaaaaaaaaagdjdgaaaaaaaaaa", "aaaaaaaaaadajadaaaaaaaaaa", "aaaaaaaaaaahjhaaaaaaaaaaa", "aaaaaaaaaaaadaaaaaaaaaaaa", "aaaaaaaaaaaaaaaaaaaaaaaaa", "aaaaaaaaaaaaaaaaaaaaaaaaa", "aaaaaaaaaaaaaaaaaaaaaaaaa", "aaaaaaaaaaaadaaaaaaaaaaaa", "aaaaaaaaaaaakaaaaaaaaaaaa", "aaaaaaaaaaaaeaaaaaaaaaaaa", "aaaaaaaaaaaadaaaaaaaaaaaa", "aaaaaaaaaaaaaaaaaaaaaaaaa", "aaaaaaaaaaaaaaaaaaaaaaaaa", "aaaaaaaaaaaaaaaaaaaaaaaaa", "aaaaaaaaaaaaaaaaaaaaaaaaa")
            .aisle("aabfffaaaaaaaaaaaaafffbaa", "aaaaaabbffaaaaaffbbaaaaaa", "aaaaaaaaadlaaaldaaaaaaaaa", "aaaaaaaaaalaaalaaaaaaaaaa", "aaaaaaaaaadbbbdaaaaaaaaaa", "aaaaaaaaaaaadaaaaaaaaaaaa", "aaaaaaaaaaaadaaaaaaaaaaaa", "aaaaaaaaaaaadaaaaaaaaaaaa", "aaaaaaaaaaaaaaaaaaaaaaaaa", "aaaaaaaaaaaaaaaaaaaaaaaaa", "aaaaaaaaaaaaaaaaaaaaaaaaa", "aaaaaaaaaaaadaaaaaaaaaaaa", "aaaaaaaaaaaanaaaaaaaaaaaa", "aaaaaaaaaaaadaaaaaaaaaaaa", "aaaaaaaaaaaaeaaaaaaaaaaaa", "aaaaaaaaaaaahaaaaaaaaaaaa", "aaaaaaaaaaaaaaaaaaaaaaaaa", "aaaaaaaaaaaaaaaaaaaaaaaaa", "aaaaaaaaaaaaaaaaaaaaaaaaa", "aaaaaaaaaaaaaaaaaaaaaaaaa")
            .aisle("aabfffffaaaaaaaaafffffbaa", "aaaaaaaabbaaaaabbaaaaaaaa", "aaaaaaaaaablmlbaaaaaaaaaa", "aaaaaaaaaahljlhaaaaaaaaaa", "aaaaaaaaaaadjdaaaaaaaaaaa", "aaaaaaaaaaaakaaaaaaaaaaaa", "aaaaaaaaaaaakaaaaaaaaaaaa", "aaaaaaaaaaaagaaaaaaaaaaaa", "aaaaaaaaaaaagaaaaaaaaaaaa", "aaaaaaaaaaaagaaaaaaaaaaaa", "aaaaaaaaaaaakaaaaaaaaaaaa", "aaaaaaaaaaaakaaaaaaaaaaaa", "aaaaaaaaaaaagaaaaaaaaaaaa", "aaaaaaaaaaaaeaaaaaaaaaaaa", "aaaaaaaaaaaaeaaaaaaaaaaaa", "aaaaaaaaaaaahaaaaaaaaaaaa", "aaaaaaaaaaaaaaaaaaaaaaaaa", "aaaaaaaaaaaaaaaaaaaaaaaaa", "aaaaaaaaaaaaaaaaaaaaaaaaa", "aaaaaaaaaaaaaaaaaaaaaaaaa")
            .aisle("aaabffffffaaaaaffffffbaaa", "aaaaaaaaaabbbbbaaaaaaaaaa", "aaaaaaaaaaadadaaaaaaaaaaa", "aaaaaaaaaaaaaaaaaaaaaaaaa", "aaaaaaaaaaaadaaaaaaaaaaaa", "aaaaaaaaaaaajaaaaaaaaaaaa", "aaaaaaaaaaaajaaaaaaaaaaaa", "aaaaaaaaaaaakaaaaaaaaaaaa", "aaaaaaaaaaaakaaaaaaaaaaaa", "aaaaaaaaaaaakaaaaaaaaaaaa", "aaaaaaaaaaaaiaaaaaaaaaaaa", "aaaaaaaaaaaaiaaaaaaaaaaaa", "aaaaaaaaaaaagaaaaaaaaaaaa", "aaaaaaaaaaaaeaaaaaaaaaaaa", "aaaaaaaaaaaadaaaaaaaaaaaa", "aaaaaaaaaaaaaaaaaaaaaaaaa", "aaaaaaaaaaaaaaaaaaaaaaaaa", "aaaaaaaaaaaaaaaaaaaaaaaaa", "aaaaaaaaaaaaaaaaaaaaaaaaa", "aaaaaaaaaaaaaaaaaaaaaaaaa")
            .aisle("aaaabbfffffffffffffbbaaaa", "aaaaaaaaaaadadaaaaaaaaaaa", "aaaaaaaaaaaaaaaaaaaaaaaaa", "aaaaaaaaaaaaaaaaaaaaaaaaa", "aaaaaaaaaaaaaaaaaaaaaaaaa", "aaaaaaaaaaaaaaaaaaaaaaaaa", "aaaaaaaaaaaaaaaaaaaaaaaaa", "aaaaaaaaaaaaaaaaaaaaaaaaa", "aaaaaaaaaaaaaaaaaaaaaaaaa", "aaaaaaaaaaaaaaaaaaaaaaaaa", "aaaaaaaaaaaaaaaaaaaaaaaaa", "aaaaaaaaaaaaiaaaaaaaaaaaa", "aaaaaaaaaaaagaaaaaaaaaaaa", "aaaaaaaaaaaaeaaaaaaaaaaaa", "aaaaaaaaaaaahaaaaaaaaaaaa", "aaaaaaaaaaaaaaaaaaaaaaaaa", "aaaaaaaaaaaaaaaaaaaaaaaaa", "aaaaaaaaaaaaaaaaaaaaaaaaa", "aaaaaaaaaaaaaaaaaaaaaaaaa", "aaaaaaaaaaaaaaaaaaaaaaaaa")
            .aisle("aaaaaabbbfffffffbbbaaaaaa", "aaaaaaaaaaaaaaaaaaaaaaaaa", "aaaaaaaaaaaaaaaaaaaaaaaaa", "aaaaaaaaaaaaaaaaaaaaaaaaa", "aaaaaaaaaaaaaaaaaaaaaaaaa", "aaaaaaaaaaaaaaaaaaaaaaaaa", "aaaaaaaaaaaaaaaaaaaaaaaaa", "aaaaaaaaaaaaaaaaaaaaaaaaa", "aaaaaaaaaaaadaaaaaaaaaaaa", "aaaaaaaaaaaagaaaaaaaaaaaa", "aaaaaaaaaaaagaaaaaaaaaaaa", "aaaaaaaaaaaagaaaaaaaaaaaa", "aaaaaaaaaaaafaaaaaaaaaaaa", "aaaaaaaaaaaaeaaaaaaaaaaaa", "aaaaaaaaaaaahaaaaaaaaaaaa", "aaaaaaaaaaaaaaaaaaaaaaaaa", "aaaaaaaaaaaaaaaaaaaaaaaaa", "aaaaaaaaaaaaaaaaaaaaaaaaa", "aaaaaaaaaaaaaaaaaaaaaaaaa", "aaaaaaaaaaaaaaaaaaaaaaaaa")
            .aisle("aaaaaaaaabbbcbbbaaaaaaaaa", "aaaaaaaaaaaaaaaaaaaaaaaaa", "aaaaaaaaaaaaaaaaaaaaaaaaa", "aaaaaaaaaaaaaaaaaaaaaaaaa", "aaaaaaaaaaaaaaaaaaaaaaaaa", "aaaaaaaaaaaaaaaaaaaaaaaaa", "aaaaaaaaaaaaaaaaaaaaaaaaa", "aaaaaaaaaaaaaaaaaaaaaaaaa", "aaaaaaaaaaaaaaaaaaaaaaaaa", "aaaaaaaaaaaaaaaaaaaaaaaaa", "aaaaaaaaaaaadaaaaaaaaaaaa", "aaaaaaaaaaaaeaaaaaaaaaaaa", "aaaaaaaaaaaaeaaaaaaaaaaaa", "aaaaaaaaaaaadaaaaaaaaaaaa", "aaaaaaaaaaaaaaaaaaaaaaaaa", "aaaaaaaaaaaaaaaaaaaaaaaaa", "aaaaaaaaaaaaaaaaaaaaaaaaa", "aaaaaaaaaaaaaaaaaaaaaaaaa", "aaaaaaaaaaaaaaaaaaaaaaaaa", "aaaaaaaaaaaaaaaaaaaaaaaaa")
            .where("a", Predicates.blocks("minecraft:air"))
            .where("b", Predicates.blocks("chipped:tiny_brick_bordered_basalt")
                .or(Predicates.autoAbilities(definition.getRecipeTypes()))
                .or(Predicates.abilities(PartAbility.PARALLEL_HATCH).setMaxGlobalLimited(1))
                .or(Predicates.abilities(global.IcbgManaSpeedInputAbility).setMaxGlobalLimited(1))
                .or(Predicates.abilities(global.IcbgLpParallelBoostAbility).setMaxGlobalLimited(1))
                .or(Predicates.abilities(PartAbility.MAINTENANCE))
                .or(Predicates.abilities(Java.loadClass('com.icbg.core.registry.IcbgPartAbilities').LP_INPUT)))
            .where("c", Predicates.controller(Predicates.blocks(definition.get())))
            .where("d", Predicates.blocks("rechiseled:basalt_patterned_stairs"))
            .where("e", Predicates.blocks("gtceu:raw_lapis_block"))
            .where("f", Predicates.blocks("rechiseled:basalt_patterned_connecting"))
            .where("g", Predicates.blocks("chipped:fine_basalt_pillar"))
            .where("h", Predicates.blocks("rechiseled:basalt_patterned_slab"))
            .where("i", Predicates.blocks("rechiseled:basalt_chiseled_piglin_stairs"))
            .where("j", Predicates.blocks("bloodmagic:dungeon_metal"))
            .where("k", Predicates.blocks("bloodmagic:blankrune"))
            .where("l", Predicates.blocks("chipped:vertical_cut_basalt"))
            .where("m", Predicates.blocks("bloodmagic:duskritualstone"))
            .where("n", Predicates.blocks("bloodmagic:waterritualstone"))
            .where("o", Predicates.blocks("botania:bifrost_pane"))
            .where("p", Predicates.blocks("minecraft:black_concrete"))
            .where("q", Predicates.blocks("botania:bifrost_perm"))
            .where("r", Predicates.blocks("botania:mana_pylon"))
            .where("s", Predicates.blocks("botania:elf_glass_pane"))
            .where("t", Predicates.blocks("botania:mana_glass"))
            .where("u", Predicates.blocks("botania:elf_glass"))
            .where("v", Predicates.blocks("bloodmagic:dungeon_metal_destructive"))
            .where("w", Predicates.blocks("minecraft:beacon"))
            .where("x", Predicates.blocks("bloodmagic:dungeon_metal_corrosive"))
            .where("y", Predicates.blocks("gtceu:raw_topaz_block"))
            .where("z", Predicates.blocks("gtceu:raw_emerald_block"))
            .where("A", Predicates.blocks("bloodmagic:airritualstone"))
            .where("B", Predicates.blocks("bloodmagic:earthritualstone"))
            .where("C", Predicates.blocks("bloodmagic:fireritualstone"))
            .where("D", Predicates.blocks("bloodmagic:dungeon_metal_vengeful"))
            .where("E", Predicates.blocks("gtceu:raw_ruby_block"))
        .build())
        .workableCasingModel(
            "gtceu:block/casings/solid/machine_casing_solid_steel",
            "gtceu:block/multiblock/large_chemical_reactor"
        )
})
