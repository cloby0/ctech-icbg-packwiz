ServerEvents.recipes(event => {

    event.recipes.gtceu.mixer('lumium_dust_mix')
        .itemInputs('4x gtceu:tin_dust', '2x gtceu:aluminium_dust', '2x #forge:dusts/glowstone')
        .itemOutputs('8x gtceu:lumium_dust')
        .duration(200)
        .EUt(GTValues.VA[GTValues.EV])

    event.recipes.gtceu.mixer('signalum_dust_mix')
        .itemInputs('4x gtceu:copper_dust', '2x gtceu:chromium_dust', '2x #forge:dusts/redstone')
        .itemOutputs('8x gtceu:signalum_dust')
        .duration(200)
        .EUt(GTValues.VA[GTValues.EV])

    event.recipes.gtceu.mixer('enderium_dust_mix')
        .itemInputs('4x gtceu:titanium_dust', '2x gtceu:platinum_dust', '2x gtceu:ender_pearl_dust')
        .itemOutputs('8x gtceu:enderium_dust')
        .duration(200)
        .EUt(GTValues.VA[GTValues.EV])

})
