const Source = global.Source

ServerEvents.recipes(event => {

    event.remove({ output: 'cyberspells:rune_arm_left' })
    event.remove({ output: 'cyberspells:rune_arm_right' })
    event.remove({ output: 'cyberspells:rune_leg_left' })
    event.remove({ output: 'cyberspells:rune_leg_right' })
    event.remove({ output: 'cyberspells:rune_heart' })
    event.remove({ output: 'cyberspells:rune_infuser' })

    event.recipes.gtceu.assembler('cs_rune_infuser')
        .itemInputs('1x cyber_ware_port:robo_surgeon', '4x irons_spellbooks:arcane_ingot', '2x gtceu:holy_silver_dust')
        .inputFluids(Fluid.of('gtceu:soldering_alloy', 144))
        .itemOutputs('1x cyberspells:rune_infuser')
        .duration(20 * 20)
        .EUt(GTValues.VA[GTValues.EV])

    addEnchantingRecipe(event, {
        reagent: 'cyber_ware_port:cyberlimbs_cyberarm_left',
        pedestalItems: [
            'irons_spellbooks:arcane_ingot', 'irons_spellbooks:arcane_ingot',
            'irons_spellbooks:arcane_ingot', 'irons_spellbooks:arcane_ingot',
            'gtceu:holy_silver_dust', 'gtceu:holy_silver_dust'
        ],
        output: 'cyberspells:rune_arm_left',
        sourceCost: Source.ALCHEMIST
    })

    addEnchantingRecipe(event, {
        reagent: 'cyber_ware_port:cyberlimbs_cyberarm_right',
        pedestalItems: [
            'irons_spellbooks:arcane_ingot', 'irons_spellbooks:arcane_ingot',
            'irons_spellbooks:arcane_ingot', 'irons_spellbooks:arcane_ingot',
            'gtceu:holy_silver_dust', 'gtceu:holy_silver_dust'
        ],
        output: 'cyberspells:rune_arm_right',
        sourceCost: Source.ALCHEMIST
    })

    addEnchantingRecipe(event, {
        reagent: 'cyber_ware_port:cyberlimbs_cyberleg_left',
        pedestalItems: [
            'irons_spellbooks:arcane_ingot', 'irons_spellbooks:arcane_ingot',
            'irons_spellbooks:arcane_ingot', 'irons_spellbooks:arcane_ingot',
            'gtceu:holy_silver_dust', 'gtceu:holy_silver_dust'
        ],
        output: 'cyberspells:rune_leg_left',
        sourceCost: Source.ALCHEMIST
    })

    addEnchantingRecipe(event, {
        reagent: 'cyber_ware_port:cyberlimbs_cyberleg_right',
        pedestalItems: [
            'irons_spellbooks:arcane_ingot', 'irons_spellbooks:arcane_ingot',
            'irons_spellbooks:arcane_ingot', 'irons_spellbooks:arcane_ingot',
            'gtceu:holy_silver_dust', 'gtceu:holy_silver_dust'
        ],
        output: 'cyberspells:rune_leg_right',
        sourceCost: Source.ALCHEMIST
    })

    addEnchantingRecipe(event, {
        reagent: 'cyber_ware_port:cyberheart',
        pedestalItems: [
            'irons_spellbooks:arcane_ingot', 'irons_spellbooks:arcane_ingot',
            'irons_spellbooks:arcane_ingot', 'irons_spellbooks:arcane_ingot',
            'gtceu:prima_materia_ingot', 'gtceu:prima_materia_ingot'
        ],
        output: 'cyberspells:rune_heart',
        sourceCost: Source.ALCHEMIST
    })

})
