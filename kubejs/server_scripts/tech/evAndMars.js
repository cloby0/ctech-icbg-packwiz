ServerEvents.recipes(event => {

    // --- Martian soil processing ---
    // Mars soil is iron-oxide rich with sulfur and silica. Worth centrifuging.
    // Small Desh Dust chance makes mining the planet's surface worthwhile beyond just ores.
    event.recipes.gtceu.centrifuge('martian_soil_centrifuge')
        .itemInputs('4x ad_astra:mars_sand')
        .itemOutputs('2x gtceu:iron_dust')
        .chancedOutput('gtceu:sulfur_dust', 6000, 0)
        .chancedOutput('gtceu:small_magnesium_dust', 2000, 200) // Martian crust is magnesium-rich
        .chancedOutput('gtceu:silicon_dust', 1500, 0)
        .duration(20 * 20)
        .EUt(GTValues.VA[GTValues.MV])

})
