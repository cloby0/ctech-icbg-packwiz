ServerEvents.recipes(event => {

    event.recipes.gtceu.gas_collector('aether_air_collection')
        .circuit(4)
        .outputFluids(Fluid.of('gtceu:aether_air', 10000))
        .dimension('aether:the_aether')
        .duration(200)
        .EUt(GTValues.VA[GTValues.MV])

    event.recipes.gtceu.gas_collector('glacio_air_collection')
        .circuit(5)
        .outputFluids(Fluid.of('gtceu:glacio_air', 10000))
        .dimension('ad_astra:glacio')
        .duration(200)
        .EUt(GTValues.VA[GTValues.LuV])

    event.recipes.gtceu.centrifuge('aether_air_centrifuge')
        .inputFluids(Fluid.of('gtceu:aether_air', 10000))
        .outputFluids(Fluid.of('gtceu:helium', 4000))
        .outputFluids(Fluid.of('gtceu:oxygen', 2000))
        .duration(1600)
        .EUt(GTValues.VA[GTValues.HV])

    event.recipes.gtceu.centrifuge('glacio_air_centrifuge')
        .inputFluids(Fluid.of('gtceu:glacio_air', 10000))
        .outputFluids(Fluid.of('gtceu:nitrogen', 5500))
        .outputFluids(Fluid.of('gtceu:oxygen', 1000))
        .duration(1600)
        .EUt(GTValues.VA[GTValues.LuV])

    event.recipes.gtceu.vacuum_freezer('aether_air_vacuum_freeze')
        .inputFluids(Fluid.of('gtceu:aether_air', 4000))
        .outputFluids(Fluid.of('gtceu:liquid_aether_air', 4000))
        .duration(80)
        .EUt(GTValues.VA[GTValues.EV])

    event.recipes.gtceu.vacuum_freezer('glacio_air_vacuum_freeze')
        .inputFluids(Fluid.of('gtceu:glacio_air', 4000))
        .outputFluids(Fluid.of('gtceu:liquid_glacio_air', 4000))
        .duration(80)
        .EUt(GTValues.VA[GTValues.LuV])

    event.recipes.gtceu.distillation_tower('aether_air_distillation')
        .inputFluids(Fluid.of('gtceu:liquid_aether_air', 50000))
        .outputFluids(Fluid.of('gtceu:helium', 25000))
        .outputFluids(Fluid.of('gtceu:oxygen', 17500))
        .outputFluids(Fluid.of('gtceu:hydrogen', 5000))
        // Re-costed off icbg_core:liquid_mana (was manafluid:mana, 2500 mB -- an arbitrary carry-
        // over from that fluid's rate, never a chosen number). 250 mB matches the pack's other
        // liquid_mana producer (techMagicInteraction.js's infernal_diesel_refine) -- both are
        // byproducts of an EV-tier refining step, not primary products, so there's no reason for
        // one to output 10x the other.
        .outputFluids(Fluid.of('icbg_core:liquid_mana', 250))
        .duration(25 * 20)
        .EUt(GTValues.VA[GTValues.EV])

    event.recipes.gtceu.distillation_tower('glacio_air_distillation')
        .inputFluids(Fluid.of('gtceu:liquid_glacio_air', 50000))
        .outputFluids(Fluid.of('gtceu:nitrogen', 27500))
        .outputFluids(Fluid.of('gtceu:helium', 8750))
        .outputFluids(Fluid.of('gtceu:argon', 7500))
        .outputFluids(Fluid.of('gtceu:oxygen', 5000))
        .outputFluids(Fluid.of('gtceu:hydrogen', 1250))
        .duration(25 * 20)
        .EUt(GTValues.VA[GTValues.LuV])

})
