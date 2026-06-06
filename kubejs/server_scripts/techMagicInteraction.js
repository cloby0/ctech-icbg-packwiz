ServerEvents.recipes(event => {

    // MV lead sourcite 1A
    // no blast temp so alloy smelter only
    event.recipes.gtceu.alloy_smelter('lead_sourcite_alloy')
        .itemInputs('2x gtceu:lead_dust', '1x gtceu:source_dust')
        .itemOutputs('3x gtceu:lead_sourcite_ingot')
        .duration(15 * 20)
        .EUt(GTValues.VA[GTValues.MV])

    // HV hallowed nickelate 2A
    event.recipes.gtceu.electric_blast_furnace('hallowed_nickelate_ebf')
        .itemInputs('1x gtceu:holy_silver_dust', '2x gtceu:nickel_dust')
        .itemOutputs('3x gtceu:hallowed_nickelate_ingot')
        .blastFurnaceTemp(2700)
        .duration(60 * 20)
        .EUt(GTValues.VA[GTValues.HV])

    // EV prima ruridite 4A
    event.recipes.gtceu.electric_blast_furnace('prima_ruridite_ebf')
        .itemInputs('1x gtceu:prima_materia_dust', '2x gtceu:ruridit_dust')
        .itemOutputs('3x gtceu:prima_ruridite_ingot')
        .blastFurnaceTemp(3600)
        .duration(70 * 20)
        .EUt(GTValues.VA[GTValues.EV])

    // IV hssg manaferrite 4A
    event.recipes.gtceu.electric_blast_furnace('hssg_manaferrite_ebf')
        .itemInputs('3x gtceu:manasteel_dust', '1x gtceu:hssg_dust')
        .itemOutputs('4x gtceu:hssg_manaferrite_ingot')
        .blastFurnaceTemp(4500)
        .duration(80 * 20)
        .EUt(GTValues.VA[GTValues.IV])

    // LuV terranaquadite 8A
    event.recipes.gtceu.electric_blast_furnace('terranaquadite_ebf')
        .itemInputs('2x gtceu:terrasteel_dust', '1x gtceu:enriched_naquadah_dust')
        .itemOutputs('3x gtceu:terranaquadite_ingot')
        .blastFurnaceTemp(6000)
        .duration(90 * 20)
        .EUt(GTValues.VA[GTValues.LuV])

    // ZPM elven americate 8A
    event.recipes.gtceu.electric_blast_furnace('elven_americate_ebf')
        .itemInputs('2x gtceu:elementium_dust', '1x gtceu:americium_dust')
        .itemOutputs('3x gtceu:elven_americate_ingot')
        .blastFurnaceTemp(7500)
        .duration(100 * 20)
        .EUt(GTValues.VA[GTValues.ZPM])

    // UV boundless naquadrite 16A
    event.recipes.gtceu.electric_blast_furnace('boundless_naquadrite_ebf')
        .itemInputs('1x gtceu:gaia_spirit_dust', '2x gtceu:naquadria_dust')
        .itemOutputs('3x gtceu:boundless_naquadrite_ingot')
        .blastFurnaceTemp(9000)
        .duration(120 * 20)
        .EUt(GTValues.VA[GTValues.UV])

})
