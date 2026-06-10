ServerEvents.recipes(event => {

    // aether air collection; gas collector in aether:the_aether dimension
    event.recipes.gtceu.gas_collector('aether_air_collection')
        .circuit(4)
        .outputFluids(Fluid.of('gtceu:aether_air', 10000))
        .dimension('aether:the_aether')
        .duration(200)
        .EUt(GTValues.VA[GTValues.MV])

    // glacio air collection; gas collector in ad_astra:glacio dimension
    event.recipes.gtceu.gas_collector('glacio_air_collection')
        .circuit(5)
        .outputFluids(Fluid.of('gtceu:glacio_air', 10000))
        .dimension('ad_astra:glacio')
        .duration(200)
        .EUt(GTValues.VA[GTValues.LuV])

    // aether air centrifuge; simple gaseous separation
    event.recipes.gtceu.centrifuge('aether_air_centrifuge')
        .inputFluids(Fluid.of('gtceu:aether_air', 10000))
        .outputFluids(Fluid.of('gtceu:helium', 4000))
        .outputFluids(Fluid.of('gtceu:oxygen', 2000))
        .duration(1600)
        .EUt(GTValues.VA[GTValues.HV])

    // glacio air centrifuge; simple gaseous separation
    event.recipes.gtceu.centrifuge('glacio_air_centrifuge')
        .inputFluids(Fluid.of('gtceu:glacio_air', 10000))
        .outputFluids(Fluid.of('gtceu:nitrogen', 5500))
        .outputFluids(Fluid.of('gtceu:oxygen', 1000))
        .duration(1600)
        .EUt(GTValues.VA[GTValues.LuV])

    // aether air vacuum freeze; 1:1 liquefaction
    event.recipes.gtceu.vacuum_freezer('aether_air_vacuum_freeze')
        .inputFluids(Fluid.of('gtceu:aether_air', 4000))
        .outputFluids(Fluid.of('gtceu:liquid_aether_air', 4000))
        .duration(80)
        .EUt(GTValues.VA[GTValues.EV])

    // glacio air vacuum freeze; 1:1 liquefaction
    event.recipes.gtceu.vacuum_freezer('glacio_air_vacuum_freeze')
        .inputFluids(Fluid.of('gtceu:glacio_air', 4000))
        .outputFluids(Fluid.of('gtceu:liquid_glacio_air', 4000))
        .duration(80)
        .EUt(GTValues.VA[GTValues.LuV])

    // liquid aether air distillation; recovers starbunclemania source fluid fraction
    // source_fluid is not separated by centrifuge; distillation tower required
    event.recipes.gtceu.distillation_tower('aether_air_distillation')
        .inputFluids(Fluid.of('gtceu:liquid_aether_air', 4000))
        .outputFluids(Fluid.of('gtceu:helium', 2000))
        .outputFluids(Fluid.of('gtceu:oxygen', 1400))
        .outputFluids(Fluid.of('gtceu:hydrogen', 400))
        .outputFluids(Fluid.of('starbunclemania:source_fluid', 200))
        .duration(25 * 20)
        .EUt(GTValues.VA[GTValues.EV])

    // liquid glacio air distillation; N2-dominant cryogenic atmosphere
    // primary source of large-volume nitrogen and argon at LuV
    event.recipes.gtceu.distillation_tower('glacio_air_distillation')
        .inputFluids(Fluid.of('gtceu:liquid_glacio_air', 4000))
        .outputFluids(Fluid.of('gtceu:nitrogen', 2200))
        .outputFluids(Fluid.of('gtceu:helium', 700))
        .outputFluids(Fluid.of('gtceu:argon', 600))
        .outputFluids(Fluid.of('gtceu:oxygen', 400))
        .outputFluids(Fluid.of('gtceu:hydrogen', 100))
        .duration(25 * 20)
        .EUt(GTValues.VA[GTValues.LuV])

})
