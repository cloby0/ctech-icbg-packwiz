// Layers icbg_core's mana_speed_hatch / lp_parallel_hatch RecipeModifiers onto every GTCEu GCYM
// multiblock that already accepts a real Parallel Hatch (checkParallel = true in GCYMMachines.java,
// GregTech-Modern-7.5.3). Those patterns admit IcbgPartAbilities.MANA_SPEED_INPUT/LP_PARALLEL_BOOST
// automatically -- PredicatesMixin in icbg_core hooks the same Predicates.autoAbilities(Z,Z,Z) call
// GCYM's own Parallel Hatch acceptance goes through -- so only the modifier needs wiring here.
//
// alloy_blast_smelter is deliberately excluded: it calls autoAbilities(true, false, false), i.e. it
// doesn't accept a real Parallel Hatch either, so it's outside "anything that can take a parallel
// hatch."
//
// The pack's own 11 magic/tech multiblocks are wired directly in their own files instead of here,
// because they also need the PartAbility added to their pattern (they call
// Predicates.autoAbilities(RecipeType[]), not the (Z,Z,Z) overload the mixin patches, so admission
// isn't automatic for them the way it is for GCYM).
const ICBG_GCYM_PARALLEL_MACHINES = [
    'gtceu:large_maceration_tower',
    'gtceu:large_chemical_bath',
    'gtceu:large_centrifuge',
    'gtceu:large_mixer',
    'gtceu:large_electrolyzer',
    'gtceu:large_electromagnet',
    'gtceu:large_packer',
    'gtceu:large_assembler',
    'gtceu:large_circuit_assembler',
    'gtceu:large_arc_smelter',
    'gtceu:large_engraving_laser',
    'gtceu:large_sifting_funnel',
    'gtceu:large_autoclave',
    'gtceu:large_material_press',
    'gtceu:large_brewer',
    'gtceu:large_cutter',
    'gtceu:large_distillery',
    'gtceu:large_extractor',
    'gtceu:large_extruder',
    'gtceu:large_solidifier',
    'gtceu:large_wiremill',
    'gtceu:mega_blast_furnace',
    'gtceu:mega_vacuum_freezer'
]

const RecipeModifierList = Java.loadClass('com.gregtechceu.gtceu.api.recipe.modifier.RecipeModifierList')

GTCEuStartupEvents.registry('gtceu:machine', event => {
    ICBG_GCYM_PARALLEL_MACHINES.forEach(id => {
        let def = GTRegistries.MACHINES.get(id)
        if (!def) {
            console.warn(`icbg_core boost hatch wiring: machine ${id} not found, skipping`)
            return
        }
        def.setRecipeModifier(new RecipeModifierList(def.getRecipeModifier(),
            global.IcbgManaSpeedModifier, global.IcbgLpParallelModifier))
    })
})
