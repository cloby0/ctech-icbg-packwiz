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

    // aether air electrolysis; simple path to helium and oxygen
    event.recipes.gtceu.electrolyzer('aether_air_electrolysis')
        .inputFluids(Fluid.of('gtceu:aether_air', 10000))
        .outputFluids(Fluid.of('gtceu:helium', 6000))
        .outputFluids(Fluid.of('gtceu:oxygen', 4000))
        .duration(20 * 20)
        .EUt(GTValues.VA[GTValues.HV])

    // aether air distillation; recovers starbunclemania source fluid fraction
    // source_fluid is not separated by electrolysis; distillation tower required
    event.recipes.gtceu.distillation_tower('aether_air_distillation')
        .inputFluids(Fluid.of('gtceu:aether_air', 4000))
        .outputFluids(Fluid.of('gtceu:helium', 2000))
        .outputFluids(Fluid.of('gtceu:oxygen', 1400))
        .outputFluids(Fluid.of('gtceu:hydrogen', 400))
        .outputFluids(Fluid.of('starbunclemania:source_fluid', 200))
        .duration(25 * 20)
        .EUt(GTValues.VA[GTValues.EV])

    // glacio air distillation; N2-dominant cryogenic atmosphere
    // primary source of large-volume nitrogen and argon at LuV
    event.recipes.gtceu.distillation_tower('glacio_air_distillation')
        .inputFluids(Fluid.of('gtceu:glacio_air', 4000))
        .outputFluids(Fluid.of('gtceu:nitrogen', 2200))
        .outputFluids(Fluid.of('gtceu:helium', 700))
        .outputFluids(Fluid.of('gtceu:argon', 600))
        .outputFluids(Fluid.of('gtceu:oxygen', 400))
        .outputFluids(Fluid.of('gtceu:hydrogen', 100))
        .duration(25 * 20)
        .EUt(GTValues.VA[GTValues.LuV])

})
