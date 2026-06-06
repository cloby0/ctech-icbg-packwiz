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

    // arcane solder
    // lead sourcite + soldering alloy -> arcane solder (MV mixer)
    // use in circuit assembler for bonus output
    event.recipes.gtceu.mixer('arcane_solder_mixing')
        .itemInputs('2x gtceu:lead_sourcite_dust')
        .inputFluids(Fluid.of('gtceu:soldering_alloy', 144))
        .outputFluids(Fluid.of('kubejs:arcane_solder', 144))
        .duration(10 * 20)
        .EUt(GTValues.VA[GTValues.MV])

    // me circuit arcane solder variant: 3x output vs normal 2x (manually specified — ae2.js recipe is kubejs-added, not caught by forEachRecipe below)
    event.recipes.gtceu.circuit_assembler('me_circuit_arcane_solder')
        .itemInputs(
            'ae2:engineering_processor',
            'ae2:calculation_processor',
            'ae2:logic_processor',
            '#gtceu:circuits/ev'
        )
        .inputFluids(Fluid.of('kubejs:arcane_solder', 144))
        .itemOutputs('3x kubejs:matter_energy_circuit')
        .duration(120)
        .EUt(1920)

    // hallowed silicon boule
    // silicon boule + holy silver -> 48 silicon wafers (vs normal 32)
    // gate: initiate (HV) — requires holy silver
    event.recipes.ars_nouveau.imbuement(
        'gtceu:silicon_boule',
        'kubejs:hallowed_silicon_boule',
        2000,
        ['gtceu:holy_silver_dust', 'gtceu:holy_silver_dust']
    )

    // primal phosphorus boule
    // phosphorus boule + prima materia -> 48 phosphorus wafers
    // gate: sorcerer (EV)
    event.recipes.ars_nouveau.imbuement(
        'gtceu:phosphorus_boule',
        'kubejs:primal_phosphorus_boule',
        4000,
        ['gtceu:prima_materia_dust']
    )

    // verdant naquadah boule
    // naquadah boule + terrasteel -> 48 naquadah wafers
    // gate: thaumaturge (LuV)
    event.recipes.ars_nouveau.enchanting_apparatus(
        ['botania:terrasteel_ingot', 'botania:terrasteel_ingot'],
        'gtceu:naquadah_boule',
        'kubejs:verdant_naquadah_boule',
        6000
    )

    // gaian neutronium boule
    // neutronium boule + gaia spirit -> 48 neutronium wafers
    // gate: sage (UV)
    event.recipes.ars_nouveau.enchanting_apparatus(
        ['botania:gaia_spirit_ingot'],
        'gtceu:neutronium_boule',
        'kubejs:gaian_neutronium_boule',
        10000
    )

    // blessed boule cutting recipes (all -> 48 wafers vs normal 32)
    event.recipes.gtceu.cutter('cut_hallowed_silicon_boule')
        .itemInputs('kubejs:hallowed_silicon_boule')
        .inputFluids(Fluid.of('gtceu:lubricant', 500))
        .itemOutputs('48x gtceu:silicon_wafer')
        .duration(900)
        .EUt(GTValues.VA[GTValues.LV])

    event.recipes.gtceu.cutter('cut_primal_phosphorus_boule')
        .itemInputs('kubejs:primal_phosphorus_boule')
        .inputFluids(Fluid.of('gtceu:lubricant', 750))
        .itemOutputs('48x gtceu:phosphorus_wafer')
        .duration(1200)
        .EUt(GTValues.VA[GTValues.HV])
        .cleanroom(CleanroomType.CLEANROOM)

    event.recipes.gtceu.cutter('cut_verdant_naquadah_boule')
        .itemInputs('kubejs:verdant_naquadah_boule')
        .inputFluids(Fluid.of('gtceu:lubricant', 1000))
        .itemOutputs('48x gtceu:naquadah_wafer')
        .duration(1600)
        .EUt(GTValues.VA[GTValues.EV])
        .cleanroom(CleanroomType.CLEANROOM)

    event.recipes.gtceu.cutter('cut_gaian_neutronium_boule')
        .itemInputs('kubejs:gaian_neutronium_boule')
        .inputFluids(Fluid.of('gtceu:lubricant', 1500))
        .itemOutputs('48x gtceu:neutronium_wafer')
        .duration(2000)
        .EUt(GTValues.VA[GTValues.IV])
        .cleanroom(CleanroomType.CLEANROOM)

})

// Auto-generate arcane solder variants for all GT circuit_assembler recipes that use soldering_alloy.
// Replaces soldering_alloy with arcane_solder and doubles all item output counts.
// kubejs-namespace recipes (like the me_circuit above) are not visible to forEachRecipe here
// because they are added during the same event — those are handled manually above.
ServerEvents.recipes(event => {
    const toAdd = []

    event.forEachRecipe({ type: 'gtceu:circuit_assembler' }, recipe => {
        const jsonStr = recipe.json.toString()
        if (!jsonStr.includes('soldering_alloy')) return
        // skip kubejs-added recipes (safety — they should not appear here but guard anyway)
        if (recipe.id.toString().startsWith('kubejs:')) return
        toAdd.push(JSON.parse(jsonStr))
    })

    toAdd.forEach(json => {
        // fluid is serialized as {"tag":"forge:soldering_alloy"} — replace key+value pair
        // so the result becomes {"fluid":"kubejs:arcane_solder"} in the same value array
        // Rhino has no String.replaceAll — use regex with /g flag instead
        const modified = JSON.parse(
            JSON.stringify(json).replace(/"tag":"forge:soldering_alloy"/g, '"fluid":"kubejs:arcane_solder"')
        )

        // recursively double all "count" fields inside the outputs subtree
        const doubleOutputCounts = obj => {
            if (!obj || typeof obj !== 'object') return obj
            if (Array.isArray(obj)) return obj.map(doubleOutputCounts)
            return Object.fromEntries(
                Object.entries(obj).map(([k, v]) =>
                    k === 'count' && typeof v === 'number'
                        ? [k, v * 2]
                        : [k, doubleOutputCounts(v)]
                )
            )
        }

        if (modified.outputs) modified.outputs = doubleOutputCounts(modified.outputs)

        // drop original id — KubeJS assigns a new one in kubejs namespace
        delete modified.id

        event.custom(modified)
    })
})
