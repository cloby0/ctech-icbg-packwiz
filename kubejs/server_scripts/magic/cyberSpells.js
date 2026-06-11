ServerEvents.recipes(event => {

    // Remove vanilla recipes — replaced with GT+magic crossover recipes below
    event.remove({ output: 'cyberspells:rune_arm_left' })
    event.remove({ output: 'cyberspells:rune_arm_right' })
    event.remove({ output: 'cyberspells:rune_leg_left' })
    event.remove({ output: 'cyberspells:rune_leg_right' })
    event.remove({ output: 'cyberspells:rune_heart' })
    event.remove({ output: 'cyberspells:rune_infuser' })

    // ============================================================
    // RUNE INFUSER BLOCK — GT assembler, EV
    // robo_surgeon (EV tech) + arcane ingots + holy silver
    // ============================================================

    event.recipes.gtceu.assembler('cs_rune_infuser')
        .itemInputs('1x cyber_ware_port:robo_surgeon', '4x irons_spellbooks:arcane_ingot', '2x gtceu:holy_silver_dust')
        .inputFluids(Fluid.of('gtceu:soldering_alloy', 144))
        .itemOutputs('1x cyberspells:rune_infuser')
        .duration(20 * 20)
        .EUt(GTValues.VA[GTValues.EV])

    // ============================================================
    // RUNE LIMBS — enchanting apparatus, Sorcerer tier
    // cyberware limb (center, consumed) + arcane ingots + holy silver
    // gates: HV tech (cyberware) + ISS progression (arcane ingot) + Sorcerer magic
    // ============================================================

    event.recipes.ars_nouveau.enchanting_apparatus(
        ["irons_spellbooks:arcane_ingot", "irons_spellbooks:arcane_ingot", "irons_spellbooks:arcane_ingot", "irons_spellbooks:arcane_ingot", "gtceu:holy_silver_dust", "gtceu:holy_silver_dust"],
        "cyber_ware_port:cyberlimbs_cyberarm_left",
        "cyberspells:rune_arm_left",
        3000
    )

    event.recipes.ars_nouveau.enchanting_apparatus(
        ["irons_spellbooks:arcane_ingot", "irons_spellbooks:arcane_ingot", "irons_spellbooks:arcane_ingot", "irons_spellbooks:arcane_ingot", "gtceu:holy_silver_dust", "gtceu:holy_silver_dust"],
        "cyber_ware_port:cyberlimbs_cyberarm_right",
        "cyberspells:rune_arm_right",
        3000
    )

    event.recipes.ars_nouveau.enchanting_apparatus(
        ["irons_spellbooks:arcane_ingot", "irons_spellbooks:arcane_ingot", "irons_spellbooks:arcane_ingot", "irons_spellbooks:arcane_ingot", "gtceu:holy_silver_dust", "gtceu:holy_silver_dust"],
        "cyber_ware_port:cyberlimbs_cyberleg_left",
        "cyberspells:rune_leg_left",
        3000
    )

    event.recipes.ars_nouveau.enchanting_apparatus(
        ["irons_spellbooks:arcane_ingot", "irons_spellbooks:arcane_ingot", "irons_spellbooks:arcane_ingot", "irons_spellbooks:arcane_ingot", "gtceu:holy_silver_dust", "gtceu:holy_silver_dust"],
        "cyber_ware_port:cyberlimbs_cyberleg_right",
        "cyberspells:rune_leg_right",
        3000
    )

    // ============================================================
    // RUNE HEART — enchanting apparatus, Alchemist tier
    // most critical organ — prima_materia required (deeper magical integration)
    // ============================================================

    event.recipes.ars_nouveau.enchanting_apparatus(
        ["irons_spellbooks:arcane_ingot", "irons_spellbooks:arcane_ingot", "irons_spellbooks:arcane_ingot", "irons_spellbooks:arcane_ingot", "gtceu:prima_materia_ingot", "gtceu:prima_materia_ingot"],
        "cyber_ware_port:cyberheart",
        "cyberspells:rune_heart",
        4000
    )

})
