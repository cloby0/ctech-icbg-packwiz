ServerEvents.recipes(event => {

    // no blast temp so alloy smelter only
    event.recipes.gtceu.alloy_smelter('lead_sourcite_alloy')
        .itemInputs('2x gtceu:lead_dust', '1x gtceu:source_dust')
        .itemOutputs('3x gtceu:lead_sourcite_ingot')
        .duration(15 * 20)
        .EUt(GTValues.VA[GTValues.MV])

    event.recipes.gtceu.electric_blast_furnace('hallowed_nickelate_ebf')
        .itemInputs('1x gtceu:holy_silver_dust', '2x gtceu:nickel_dust')
        .itemOutputs('3x gtceu:hallowed_nickelate_ingot')
        .blastFurnaceTemp(2700)
        .duration(60 * 20)
        .EUt(GTValues.VA[GTValues.HV])

    event.recipes.gtceu.electric_blast_furnace('prima_ruridite_ebf')
        .itemInputs('1x gtceu:prima_materia_dust', '2x gtceu:ruridit_dust')
        .itemOutputs('3x gtceu:prima_ruridite_ingot')
        .blastFurnaceTemp(3600)
        .duration(70 * 20)
        .EUt(GTValues.VA[GTValues.EV])

    event.recipes.gtceu.electric_blast_furnace('hssg_manaferrite_ebf')
        .itemInputs('3x gtceu:manasteel_dust', '1x gtceu:hssg_dust')
        .itemOutputs('4x gtceu:hssg_manaferrite_ingot')
        .blastFurnaceTemp(4500)
        .duration(80 * 20)
        .EUt(GTValues.VA[GTValues.IV])

    event.recipes.gtceu.electric_blast_furnace('terranaquadite_ebf')
        .itemInputs('2x gtceu:terrasteel_dust', '1x gtceu:enriched_naquadah_dust')
        .itemOutputs('3x gtceu:terranaquadite_ingot')
        .blastFurnaceTemp(6000)
        .duration(90 * 20)
        .EUt(GTValues.VA[GTValues.LuV])

    event.recipes.gtceu.electric_blast_furnace('elven_americate_ebf')
        .itemInputs('2x gtceu:elementium_dust', '1x gtceu:americium_dust')
        .itemOutputs('3x gtceu:elven_americate_ingot')
        .blastFurnaceTemp(7500)
        .duration(100 * 20)
        .EUt(GTValues.VA[GTValues.ZPM])

    event.recipes.gtceu.electric_blast_furnace('boundless_naquadrite_ebf')
        .itemInputs('1x gtceu:gaia_spirit_dust', '2x gtceu:naquadria_dust')
        .itemOutputs('3x gtceu:boundless_naquadrite_ingot')
        .blastFurnaceTemp(9000)
        .duration(120 * 20)
        .EUt(GTValues.VA[GTValues.UV])

    event.recipes.gtceu.electrolyzer('inferium_electrolysis')
        .itemInputs('8x mysticalagriculture:inferium_essence')
        .chancedOutput('mysticalagriculture:fire_essence', 2500, 0)
        .chancedOutput('mysticalagriculture:water_essence', 2500, 0)
        .chancedOutput('mysticalagriculture:earth_essence', 2500, 0)
        .chancedOutput('mysticalagriculture:air_essence', 2500, 0)
        .duration(20 * 20)
        .EUt(GTValues.VA[GTValues.EV])

    // base recipe unchanged; these are optional alternatives consuming 1 crude essence
    event.recipes.gtceu.centrifuge('pgs_fire_bias')
        .itemInputs('6x gtceu:platinum_group_sludge_dust', '1x mysticalagriculture:fire_essence')
        .inputFluids(Fluid.of('gtceu:aqua_regia', 1200))
        .itemOutputs(
            '2x gtceu:platinum_raw_dust',
            '2x gtceu:palladium_raw_dust',
            '2x gtceu:inert_metal_mixture_dust',
            '3x gtceu:rarest_metal_mixture_dust',
            '2x gtceu:platinum_sludge_residue_dust'
        )
        .duration(500)
        .EUt(GTValues.VA[GTValues.HV])

    event.recipes.gtceu.centrifuge('pgs_water_bias')
        .itemInputs('6x gtceu:platinum_group_sludge_dust', '1x mysticalagriculture:water_essence')
        .inputFluids(Fluid.of('gtceu:aqua_regia', 1200))
        .itemOutputs(
            '5x gtceu:platinum_raw_dust',
            '5x gtceu:palladium_raw_dust',
            '1x gtceu:inert_metal_mixture_dust',
            '1x gtceu:platinum_sludge_residue_dust'
        )
        .duration(500)
        .EUt(GTValues.VA[GTValues.HV])

    event.recipes.gtceu.centrifuge('pgs_earth_bias')
        .itemInputs('6x gtceu:platinum_group_sludge_dust', '1x mysticalagriculture:earth_essence')
        .inputFluids(Fluid.of('gtceu:aqua_regia', 1200))
        .itemOutputs(
            '2x gtceu:platinum_raw_dust',
            '2x gtceu:palladium_raw_dust',
            '5x gtceu:inert_metal_mixture_dust',
            '1x gtceu:rarest_metal_mixture_dust',
            '2x gtceu:platinum_sludge_residue_dust'
        )
        .duration(500)
        .EUt(GTValues.VA[GTValues.HV])

    event.recipes.gtceu.centrifuge('pgs_air_bias')
        .itemInputs('6x gtceu:platinum_group_sludge_dust', '1x mysticalagriculture:air_essence')
        .inputFluids(Fluid.of('gtceu:aqua_regia', 1200))
        .itemOutputs(
            '4x gtceu:platinum_raw_dust',
            '3x gtceu:palladium_raw_dust',
            '3x gtceu:inert_metal_mixture_dust',
            '2x gtceu:rarest_metal_mixture_dust',
            '1x gtceu:platinum_sludge_residue_dust'
        )
        .duration(500)
        .EUt(GTValues.VA[GTValues.HV])

    event.recipes.gtceu.chemical_reactor('phlogiston_extraction')
        .itemInputs('2x mysticalagriculture:fire_essence', '1x gtceu:sulfur_dust')
        .itemOutputs('1x kubejs:phlogiston', '1x gtceu:ash_dust')
        .duration(10 * 20)
        .EUt(GTValues.VA[GTValues.EV])

    event.recipes.gtceu.mixer('phlogisticated_fuel_base')
        .itemInputs('1x kubejs:phlogiston')
        .inputFluids(Fluid.of('gtceu:heavy_fuel', 1000))
        .outputFluids(Fluid.of('gtceu:phlogisticated_fuel', 1500))
        .duration(15 * 20)
        .EUt(GTValues.VA[GTValues.EV])

    event.recipes.gtceu.mixer('phlogisticated_fuel_stabilized')
        .itemInputs('1x kubejs:phlogiston', '1x mysticalagriculture:water_essence')
        .inputFluids(Fluid.of('gtceu:heavy_fuel', 1000))
        .outputFluids(Fluid.of('gtceu:phlogisticated_fuel', 2000))
        .duration(20 * 20)
        .EUt(GTValues.VA[GTValues.EV])

    event.recipes.gtceu.distillation_tower('infernal_diesel_refine')
        .inputFluids(Fluid.of('gtceu:phlogisticated_fuel', 1500))
        .outputFluids(Fluid.of('gtceu:infernal_diesel', 750))
        .outputFluids(Fluid.of('gtceu:naphtha', 400))
        .outputFluids(Fluid.of('gtceu:light_fuel', 100))
        .duration(30 * 20)
        .EUt(GTValues.VA[GTValues.EV])

    event.recipes.gtceu.combustion_generator('infernal_diesel_fuel')
        .inputFluids(Fluid.of('gtceu:infernal_diesel', 1))
        .duration(60)
        .EUt(-32)

    event.recipes.gtceu.chemical_reactor('faefire_aerosol_synthesis')
        .itemInputs('1x kubejs:elven_concentrate', '2x mysticalagriculture:air_essence')
        .itemOutputs('1x kubejs:faefire_aerosol')
        .duration(15 * 20)
        .EUt(GTValues.VA[GTValues.ZPM])

    event.recipes.gtceu.mixer('faefire_phlog_fuel_mix')
        .itemInputs('1x kubejs:faefire_aerosol')
        .inputFluids(Fluid.of('gtceu:infernal_diesel', 1000))
        .outputFluids(Fluid.of('gtceu:faefire_phlog_fuel', 1500))
        .duration(20 * 20)
        .EUt(GTValues.VA[GTValues.ZPM])

    event.recipes.gtceu.combustion_generator('faefire_phlog_fuel_burn')
        .inputFluids(Fluid.of('gtceu:faefire_phlog_fuel', 1))
        .duration(500)
        .EUt(-32)

    // silicon boule + holy silver -> 32 silicon wafers (vs vanilla 16)
    event.recipes.ars_nouveau.imbuement(
        'gtceu:silicon_boule',
        'kubejs:hallowed_silicon_boule',
        2000,
        ['gtceu:holy_silver_dust', 'gtceu:holy_silver_dust']
    )

    // phosphorus boule + prima materia -> 64 phosphorus wafers (vs vanilla 32)
    event.recipes.ars_nouveau.imbuement(
        'gtceu:phosphorus_boule',
        'kubejs:primal_phosphorus_boule',
        4000,
        ['gtceu:prima_materia_dust']
    )

    // naquadah boule + terrasteel -> 128 naquadah wafers (vs vanilla 64)
    event.recipes.ars_nouveau.enchanting_apparatus(
        ['botania:terrasteel_ingot', 'botania:terrasteel_ingot'],
        'gtceu:naquadah_boule',
        'kubejs:verdant_naquadah_boule',
        6000
    )

    // neutronium boule + gaia spirit -> 192 neutronium wafers (vs vanilla 96)
    event.recipes.ars_nouveau.enchanting_apparatus(
        ['botania:gaia_ingot'],
        'gtceu:neutronium_boule',
        'kubejs:gaian_neutronium_boule',
        10000
    )

    // blessed boule cutting recipes (all -> 48 wafers vs normal 32)
    event.recipes.gtceu.cutter('cut_hallowed_silicon_boule')
        .itemInputs('kubejs:hallowed_silicon_boule')
        .inputFluids(Fluid.of('gtceu:lubricant', 500))
        .itemOutputs('32x gtceu:silicon_wafer')
        .duration(900)
        .EUt(GTValues.VA[GTValues.LV])

    event.recipes.gtceu.cutter('cut_primal_phosphorus_boule')
        .itemInputs('kubejs:primal_phosphorus_boule')
        .inputFluids(Fluid.of('gtceu:lubricant', 750))
        .itemOutputs('64x gtceu:phosphorus_wafer')
        .duration(1200)
        .EUt(GTValues.VA[GTValues.HV])
        .cleanroom(CleanroomType.CLEANROOM)

    event.recipes.gtceu.cutter('cut_verdant_naquadah_boule')
        .itemInputs('kubejs:verdant_naquadah_boule')
        .inputFluids(Fluid.of('gtceu:lubricant', 1000))
        .itemOutputs('128x gtceu:naquadah_wafer')
        .duration(1600)
        .EUt(GTValues.VA[GTValues.EV])
        .cleanroom(CleanroomType.CLEANROOM)

    event.recipes.gtceu.cutter('cut_gaian_neutronium_boule')
        .itemInputs('kubejs:gaian_neutronium_boule')
        .inputFluids(Fluid.of('gtceu:lubricant', 1500))
        .itemOutputs('192x gtceu:neutronium_wafer')
        .duration(2000)
        .EUt(GTValues.VA[GTValues.IV])
        .cleanroom(CleanroomType.CLEANROOM)

})
