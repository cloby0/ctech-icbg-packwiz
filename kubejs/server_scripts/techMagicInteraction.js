ServerEvents.recipes(event => {

    event.recipes.gtceu.alloy_smelter('lead_sourcite_alloy')
        .itemInputs('2x gtceu:lead_dust', '1x gtceu:mana_dust')
        .itemOutputs('3x gtceu:lead_sourcite_ingot')
        .duration(15 * 20)
        .EUt(GTValues.VA[GTValues.MV])

    event.recipes.gtceu.mixer('hallowed_nickelate_dust_mix')
        .itemInputs('1x gtceu:holy_silver_dust', '2x gtceu:nickel_dust')
        .itemOutputs('3x gtceu:hallowed_nickelate_dust')
        .duration(200)
        .EUt(GTValues.VA[GTValues.HV])

    event.recipes.gtceu.mixer('prima_ruridite_dust_mix')
        .itemInputs('1x gtceu:prima_materia_dust', '2x gtceu:ruridit_dust')
        .itemOutputs('3x gtceu:prima_ruridite_dust')
        .duration(200)
        .EUt(GTValues.VA[GTValues.EV])

    event.recipes.gtceu.mixer('hssg_manaferrite_dust_mix')
        .itemInputs('3x gtceu:manasteel_dust', '1x gtceu:hssg_dust')
        .itemOutputs('4x gtceu:hssg_manaferrite_dust')
        .duration(200)
        .EUt(GTValues.VA[GTValues.IV])

    event.recipes.gtceu.mixer('terra_iridite_dust_mix')
        .itemInputs('2x gtceu:terrasteel_dust', '1x gtceu:iridium_dust')
        .itemOutputs('3x gtceu:terra_iridite_dust')
        .duration(200)
        .EUt(GTValues.VA[GTValues.LuV])

    event.recipes.gtceu.mixer('terranaquadite_dust_mix')
        .itemInputs('2x gtceu:terrasteel_dust', '1x gtceu:enriched_naquadah_dust')
        .itemOutputs('3x gtceu:terranaquadite_dust')
        .duration(200)
        .EUt(GTValues.VA[GTValues.LuV])

    event.recipes.gtceu.mixer('elven_americate_dust_mix')
        .itemInputs('2x gtceu:elementium_dust', '1x gtceu:americium_dust')
        .itemOutputs('3x gtceu:elven_americate_dust')
        .duration(200)
        .EUt(GTValues.VA[GTValues.ZPM])

    event.recipes.gtceu.mixer('boundless_naquadrite_dust_mix')
        .itemInputs('1x gtceu:gaia_spirit_dust', '2x gtceu:naquadria_dust')
        .itemOutputs('3x gtceu:boundless_naquadrite_dust')
        .duration(200)
        .EUt(GTValues.VA[GTValues.UV])

    event.recipes.gtceu.mixer('consecrated_chromite_dust_mix')
        .itemInputs('2x gtceu:holy_silver_dust', '1x gtceu:chromium_dust')
        .itemOutputs('3x gtceu:consecrated_chromite_dust')
        .duration(200)
        .EUt(GTValues.VA[GTValues.HV])

    event.recipes.gtceu.mixer('ambrotungstite_dust_mix')
        .itemInputs('1x gtceu:holy_silver_dust', '2x gtceu:tungsten_dust')
        .itemOutputs('3x gtceu:ambrotungstite_dust')
        .duration(200)
        .EUt(GTValues.VA[GTValues.HV])

    event.recipes.gtceu.mixer('manaplatinite_dust_mix')
        .itemInputs('2x gtceu:manasteel_dust', '1x gtceu:platinum_dust')
        .itemOutputs('3x gtceu:manaplatinite_dust')
        .duration(200)
        .EUt(GTValues.VA[GTValues.IV])

    event.recipes.gtceu.distillation_tower('source_fluid_distillation')
        .inputFluids(Fluid.of('manafluid:mana', Source.THAUMATURGE))
        .outputFluids(Fluid.of('gtceu:phlogiston', 2000))
        .outputFluids(Fluid.of('gtceu:aqua_vitae', 2000))
        .outputFluids(Fluid.of('gtceu:mineral_ichor', 2000))
        .outputFluids(Fluid.of('gtceu:pneuma', 2000))
        .duration(30 * 20)
        .EUt(GTValues.VA[GTValues.EV])

    event.recipes.gtceu.centrifuge('phlogiston_to_fire_essence')
        .inputFluids(Fluid.of('gtceu:phlogiston', 500))
        .itemOutputs('1x mysticalagriculture:fire_essence')
        .duration(10 * 20)
        .EUt(GTValues.VA[GTValues.EV])

    event.recipes.gtceu.chemical_reactor('aqua_vitae_to_water_essence')
        .itemInputs('1x minecraft:prismarine_shard')
        .inputFluids(Fluid.of('gtceu:aqua_vitae', 1000))
        .itemOutputs('1x mysticalagriculture:water_essence')
        .duration(10 * 20)
        .EUt(GTValues.VA[GTValues.EV])

    event.recipes.gtceu.chemical_reactor('mineral_ichor_to_earth_essence')
        .itemInputs('1x minecraft:clay_ball')
        .inputFluids(Fluid.of('gtceu:mineral_ichor', 1500))
        .itemOutputs('1x mysticalagriculture:earth_essence')
        .duration(10 * 20)
        .EUt(GTValues.VA[GTValues.EV])

    event.recipes.gtceu.centrifuge('pneuma_to_air_essence')
        .inputFluids(Fluid.of('gtceu:pneuma', 3000))
        .itemOutputs('1x mysticalagriculture:air_essence')
        .outputFluids(Fluid.of('gtceu:air', 1000))
        .duration(15 * 20)
        .EUt(GTValues.VA[GTValues.EV])

    event.recipes.gtceu.chemical_reactor('inferium_to_source_fluid')
        .itemInputs('4x mysticalagriculture:inferium_essence')
        .inputFluids(Fluid.of('gtceu:distilled_water', 1000))
        .outputFluids(Fluid.of('manafluid:mana', 500))
        .duration(15 * 20)
        .EUt(GTValues.VA[GTValues.HV])

    event.recipes.gtceu.chemical_reactor('pneuma_to_source_fluid')
        .itemInputs('4x mysticalagriculture:inferium_essence')
        .inputFluids(Fluid.of('gtceu:pneuma', 1000))
        .outputFluids(Fluid.of('manafluid:mana', 2500))
        .duration(10 * 20)
        .EUt(GTValues.VA[GTValues.EV])

    event.recipes.gtceu.chemical_reactor('consecrated_chromite_with_ichor')
        .itemInputs('2x gtceu:holy_silver_dust', '1x gtceu:chromium_dust')
        .inputFluids(Fluid.of('gtceu:mineral_ichor', 500))
        .itemOutputs('3x gtceu:consecrated_chromite_dust')
        .chancedOutput('kubejs:mineral_flux_crystal', 3000, 0)
        .duration(200)
        .EUt(GTValues.VA[GTValues.HV])

    event.recipes.gtceu.chemical_reactor('ambrotungstite_with_ichor')
        .itemInputs('1x gtceu:holy_silver_dust', '2x gtceu:tungsten_dust')
        .inputFluids(Fluid.of('gtceu:mineral_ichor', 500))
        .itemOutputs('3x gtceu:ambrotungstite_dust')
        .chancedOutput('kubejs:mineral_flux_crystal', 3000, 0)
        .duration(200)
        .EUt(GTValues.VA[GTValues.HV])

    event.recipes.gtceu.chemical_reactor('manaplatinite_with_ichor')
        .itemInputs('2x gtceu:manasteel_dust', '1x gtceu:platinum_dust')
        .inputFluids(Fluid.of('gtceu:mineral_ichor', 500))
        .itemOutputs('3x gtceu:manaplatinite_dust')
        .chancedOutput('kubejs:mineral_flux_crystal', 3000, 0)
        .duration(200)
        .EUt(GTValues.VA[GTValues.IV])

    event.recipes.gtceu.chemical_reactor('mineral_flux_crystal_to_ichor')
        .itemInputs('1x kubejs:mineral_flux_crystal')
        .inputFluids(Fluid.of('gtceu:distilled_water', 1000))
        .outputFluids(Fluid.of('gtceu:mineral_ichor', 250))
        .duration(10 * 20)
        .EUt(GTValues.VA[GTValues.HV])

    event.recipes.gtceu.macerator('mineral_flux_crystal_crush')
        .itemInputs('1x kubejs:mineral_flux_crystal')
        .chancedOutput('gtceu:chromite_dust', 2500, 0)
        .chancedOutput('gtceu:bauxite_dust', 2500, 0)
        .chancedOutput('gtceu:ilmenite_dust', 2500, 0)
        .chancedOutput('gtceu:scheelite_dust', 2500, 0)
        .duration(10 * 20)
        .EUt(GTValues.VA[GTValues.HV])


    event.recipes.gtceu.chemical_reactor('chromite_phlogiston_crystal')
        .itemInputs('1x gtceu:chromite_dust')
        .inputFluids(Fluid.of('gtceu:phlogiston', 250))
        .itemOutputs('3x gtceu:chromium_dust')
        .chancedOutput('kubejs:ember_crystal', 3000, 0)
        .duration(18 * 20)
        .EUt(GTValues.VA[GTValues.MV])

    event.recipes.gtceu.chemical_reactor('ilmenite_aqua_vitae_crystal')
        .itemInputs('5x gtceu:ilmenite_dust')
        .inputFluids(Fluid.of('gtceu:aqua_vitae', 500))
        .itemOutputs('2x gtceu:rutile_dust')
        .chancedOutput('kubejs:hyaline_crystal', 3000, 0)
        .duration(20 * 20)
        .EUt(GTValues.VA[GTValues.HV])

    event.recipes.gtceu.chemical_reactor('scheelite_pneuma_crystal')
        .itemInputs('1x gtceu:scheelite_dust')
        .inputFluids(Fluid.of('gtceu:pneuma', 250))
        .itemOutputs('1x gtceu:tungsten_dust')
        .chancedOutput('kubejs:aether_crystal', 3000, 0)
        .duration(20 * 20)
        .EUt(GTValues.VA[GTValues.IV])

    event.recipes.gtceu.chemical_reactor('ember_crystal_to_phlogiston')
        .itemInputs('1x kubejs:ember_crystal')
        .inputFluids(Fluid.of('gtceu:distilled_water', 1000))
        .outputFluids(Fluid.of('gtceu:phlogiston', 125))
        .duration(10 * 20)
        .EUt(GTValues.VA[GTValues.MV])

    event.recipes.gtceu.chemical_reactor('hyaline_crystal_to_aqua_vitae')
        .itemInputs('1x kubejs:hyaline_crystal')
        .inputFluids(Fluid.of('gtceu:distilled_water', 1000))
        .outputFluids(Fluid.of('gtceu:aqua_vitae', 125))
        .duration(10 * 20)
        .EUt(GTValues.VA[GTValues.HV])

    event.recipes.gtceu.chemical_reactor('aether_crystal_to_pneuma')
        .itemInputs('1x kubejs:aether_crystal')
        .inputFluids(Fluid.of('gtceu:distilled_water', 1000))
        .outputFluids(Fluid.of('gtceu:pneuma', 125))
        .duration(10 * 20)
        .EUt(GTValues.VA[GTValues.IV])

    event.recipes.gtceu.macerator('ember_crystal_crush')
        .itemInputs('1x kubejs:ember_crystal')
        .chancedOutput('gtceu:chromite_dust', 2500, 0)
        .chancedOutput('gtceu:pyrolusite_dust', 2500, 0)
        .duration(10 * 20)
        .EUt(GTValues.VA[GTValues.MV])

    event.recipes.gtceu.macerator('hyaline_crystal_crush')
        .itemInputs('1x kubejs:hyaline_crystal')
        .chancedOutput('gtceu:calcium_dust', 2500, 0)
        .chancedOutput('gtceu:calcite_dust', 2500, 0)
        .duration(10 * 20)
        .EUt(GTValues.VA[GTValues.HV])

    event.recipes.gtceu.macerator('aether_crystal_crush')
        .itemInputs('1x kubejs:aether_crystal')
        .chancedOutput('gtceu:scheelite_dust', 2500, 0)
        .chancedOutput('gtceu:tungsten_dust', 1000, 0)
        .duration(10 * 20)
        .EUt(GTValues.VA[GTValues.IV])

    event.recipes.gtceu.mixer('phlogisticated_fuel_ember_boost')
        .itemInputs('1x kubejs:ember_crystal')
        .inputFluids(Fluid.of('gtceu:phlogiston', 500), Fluid.of('gtceu:heavy_fuel', 1000))
        .outputFluids(Fluid.of('gtceu:phlogisticated_fuel', 2500))
        .duration(20 * 20)
        .EUt(GTValues.VA[GTValues.EV])

    event.recipes.gtceu.mixer('aqua_vitae_growth_medium_hyaline')
        .itemInputs(
            '4x gtceu:meat_dust',
            '4x gtceu:salt_dust',
            '4x gtceu:calcium_dust',
            '4x gtceu:agar_dust',
            '1x kubejs:hyaline_crystal'
        )
        .inputFluids(Fluid.of('gtceu:mutagen', 4000), Fluid.of('gtceu:aqua_vitae', 1000))
        .outputFluids(Fluid.of('gtceu:raw_growth_medium', 6250))
        .duration(1200)
        .EUt(GTValues.VA[GTValues.IV])
        .cleanroom(CleanroomType.STERILE_CLEANROOM)

    event.recipes.gtceu.centrifuge('chromite_dust_phlogiston_bias')
        .itemInputs('1x gtceu:chromite_dust')
        .inputFluids(Fluid.of('gtceu:phlogiston', 250))
        .itemOutputs('1x gtceu:iron_dust', '3x gtceu:chromium_dust')
        .outputFluids(Fluid.of('gtceu:oxygen', 4000))
        .duration(18 * 20)
        .EUt(GTValues.VA[GTValues.MV])

    event.recipes.gtceu.centrifuge('bauxite_dust_ichor_processing')
        .itemInputs('5x gtceu:bauxite_dust')
        .inputFluids(Fluid.of('gtceu:mineral_ichor', 500))
        .itemOutputs('2x gtceu:aluminium_dust')
        .chancedOutput('gtceu:rutile_dust', 3000, 0)
        .chancedOutput('gtceu:gallium_dust', 2000, 0)
        .outputFluids(Fluid.of('gtceu:oxygen', 3000))
        .duration(15 * 20)
        .EUt(GTValues.VA[GTValues.HV])

    event.recipes.gtceu.centrifuge('ilmenite_dust_aqua_vitae_processing')
        .itemInputs('5x gtceu:ilmenite_dust')
        .inputFluids(Fluid.of('gtceu:aqua_vitae', 500))
        .itemOutputs('2x gtceu:iron_dust', '2x gtceu:rutile_dust')
        .chancedOutput('gtceu:ilmenite_slag_dust', 4000, 0)
        .outputFluids(Fluid.of('gtceu:oxygen', 3000))
        .duration(20 * 20)
        .EUt(GTValues.VA[GTValues.HV])

    event.recipes.gtceu.centrifuge('scheelite_dust_pneuma_processing')
        .itemInputs('1x gtceu:scheelite_dust')
        .inputFluids(Fluid.of('gtceu:pneuma', 250))
        .itemOutputs('1x gtceu:calcium_dust', '1x gtceu:tungsten_dust')
        .duration(20 * 20)
        .EUt(GTValues.VA[GTValues.IV])

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
        .outputFluids(Fluid.of('gtceu:phlogiston', 500))
        .itemOutputs('1x gtceu:ash_dust')
        .duration(10 * 20)
        .EUt(GTValues.VA[GTValues.EV])

    event.recipes.gtceu.chemical_reactor('aqua_vitae_extraction')
        .itemInputs('2x mysticalagriculture:water_essence', '1x minecraft:prismarine_shard')
        .outputFluids(Fluid.of('gtceu:aqua_vitae', 500))
        .itemOutputs('1x gtceu:salt_dust')
        .duration(10 * 20)
        .EUt(GTValues.VA[GTValues.EV])

    event.recipes.gtceu.chemical_reactor('mineral_ichor_extraction')
        .itemInputs('2x mysticalagriculture:earth_essence', '1x minecraft:clay_ball')
        .outputFluids(Fluid.of('gtceu:mineral_ichor', 500))
        .itemOutputs('1x gtceu:calcite_dust')
        .duration(10 * 20)
        .EUt(GTValues.VA[GTValues.EV])

    event.recipes.gtceu.chemical_reactor('pneuma_extraction')
        .itemInputs('2x mysticalagriculture:air_essence', '1x minecraft:feather')
        .outputFluids(Fluid.of('gtceu:pneuma', 500))
        .itemOutputs('1x gtceu:ash_dust')
        .duration(10 * 20)
        .EUt(GTValues.VA[GTValues.EV])

    event.recipes.gtceu.mixer('phlogisticated_fuel_base')
        .inputFluids(Fluid.of('gtceu:phlogiston', 500), Fluid.of('gtceu:heavy_fuel', 1000))
        .outputFluids(Fluid.of('gtceu:phlogisticated_fuel', 1500))
        .duration(15 * 20)
        .EUt(GTValues.VA[GTValues.EV])

    event.recipes.gtceu.mixer('phlogisticated_fuel_stabilized')
        .itemInputs('1x mysticalagriculture:water_essence')
        .inputFluids(Fluid.of('gtceu:phlogiston', 500), Fluid.of('gtceu:heavy_fuel', 1000))
        .outputFluids(Fluid.of('gtceu:phlogisticated_fuel', 2000))
        .duration(20 * 20)
        .EUt(GTValues.VA[GTValues.EV])

    event.recipes.gtceu.distillation_tower('infernal_diesel_refine')
        .inputFluids(Fluid.of('gtceu:phlogisticated_fuel', 1500))
        .outputFluids(Fluid.of('gtceu:infernal_diesel', 750))
        .outputFluids(Fluid.of('gtceu:naphtha', 400))
        .outputFluids(Fluid.of('gtceu:light_fuel', 100))
        .outputFluids(Fluid.of('manafluid:mana', 250))
        .duration(30 * 20)
        .EUt(GTValues.VA[GTValues.EV])

    event.recipes.gtceu.combustion_generator('infernal_diesel_fuel')
        .inputFluids(Fluid.of('gtceu:infernal_diesel', 1))
        .duration(60)
        .EUt(-32)

    event.recipes.gtceu.chemical_reactor('elven_concentrate_synthesis')
        .itemInputs('3x kubejs:weak_elementium_dust', '1x mna:raw_vinteum')
        .inputFluids(Fluid.of('manafluid:mana', Source.SORCERER))
        .itemOutputs('2x kubejs:elven_concentrate')
        .duration(30 * 20)
        .EUt(GTValues.VA[GTValues.ZPM])

    event.recipes.gtceu.chemical_reactor('faefire_aerosol_synthesis')
        .itemInputs('1x kubejs:elven_concentrate', '2x mysticalagriculture:air_essence')
        .outputFluids(Fluid.of('gtceu:faefire_aerosol', 500))
        .duration(15 * 20)
        .EUt(GTValues.VA[GTValues.ZPM])

    event.recipes.gtceu.mixer('faefire_phlog_fuel_mix')
        .inputFluids(Fluid.of('gtceu:faefire_aerosol', 500), Fluid.of('gtceu:infernal_diesel', 1000))
        .outputFluids(Fluid.of('gtceu:faefire_phlog_fuel', 1500))
        .duration(20 * 20)
        .EUt(GTValues.VA[GTValues.ZPM])

    event.recipes.gtceu.combustion_generator('faefire_phlog_fuel_burn')
        .inputFluids(Fluid.of('gtceu:faefire_phlog_fuel', 1))
        .duration(500)
        .EUt(-32)

    addImbuementRecipe(event, {
        input: 'gtceu:silicon_boule',
        output: 'kubejs:hallowed_silicon_boule',
        source: Source.SORCERER,
        pedestalItems: ['gtceu:holy_silver_dust', 'gtceu:holy_silver_dust']
    })

    addImbuementRecipe(event, {
        input: 'gtceu:phosphorus_boule',
        output: 'kubejs:primal_phosphorus_boule',
        source: Source.ALCHEMIST,
        pedestalItems: ['gtceu:prima_materia_dust']
    })

    addEnchantingRecipe(event, {
        reagent: 'gtceu:naquadah_boule',
        pedestalItems: ['botania:terrasteel_ingot', 'botania:terrasteel_ingot'],
        output: 'kubejs:verdant_naquadah_boule',
        sourceCost: Source.THAUMATURGE
    })

    addEnchantingRecipe(event, {
        reagent: 'gtceu:neutronium_boule',
        pedestalItems: ['botania:gaia_ingot'],
        output: 'kubejs:gaian_neutronium_boule',
        sourceCost: Source.THAUMATURGE
    })

    event.recipes.gtceu.mixer('aqua_vitae_growth_medium')
        .itemInputs(
            '4x gtceu:meat_dust',
            '4x gtceu:salt_dust',
            '4x gtceu:calcium_dust',
            '4x gtceu:agar_dust'
        )
        .inputFluids(Fluid.of('gtceu:mutagen', 4000), Fluid.of('gtceu:aqua_vitae', 1000))
        .outputFluids(Fluid.of('gtceu:raw_growth_medium', 5000))
        .duration(1200)
        .EUt(GTValues.VA[GTValues.IV])
        .cleanroom(CleanroomType.STERILE_CLEANROOM)

    event.recipes.gtceu.chemical_reactor('prima_materia_to_osmium')
        .itemInputs('1x gtceu:prima_materia_dust', '3x gtceu:platinum_dust')
        .itemOutputs('1x gtceu:osmium_dust')
        .duration(25 * 20)
        .EUt(GTValues.VA[GTValues.EV])

    event.recipes.gtceu.chemical_reactor('prima_materia_to_aluminium')
        .itemInputs('1x gtceu:prima_materia_dust', '5x gtceu:bauxite_dust')
        .itemOutputs('2x gtceu:aluminium_dust')
        .duration(20 * 20)
        .EUt(GTValues.VA[GTValues.EV])

    event.recipes.gtceu.chemical_reactor('prima_materia_to_chromium')
        .itemInputs('1x gtceu:prima_materia_dust', '2x gtceu:chromite_dust')
        .itemOutputs('1x gtceu:chromium_dust')
        .duration(20 * 20)
        .EUt(GTValues.VA[GTValues.EV])

    event.recipes.gtceu.chemical_reactor('prima_materia_to_enriched_naquadah')
        .itemInputs('1x gtceu:prima_materia_dust', '3x gtceu:naquadah_dust')
        .itemOutputs('1x gtceu:enriched_naquadah_dust')
        .duration(60 * 20)
        .EUt(GTValues.VA[GTValues.EV])


    event.recipes.gtceu.chemical_reactor('gaia_flux_dust_synthesis')
        .itemInputs('1x gtceu:boundless_naquadrite_dust', '1x gtceu:elementium_dust')
        .itemOutputs('2x kubejs:gaia_flux_dust')
        .duration(30 * 20)
        .EUt(GTValues.VA[GTValues.UV])

    event.recipes.gtceu.chemical_reactor('celestial_concentrate_synthesis')
        .itemInputs('1x kubejs:gaia_flux_dust')
        .inputFluids(Fluid.of('gtceu:faefire_aerosol', 500), Fluid.of('gtceu:pneuma', 1000))
        .outputFluids(Fluid.of('gtceu:celestial_concentrate', 1500))
        .duration(30 * 20)
        .EUt(GTValues.VA[GTValues.UV])

    event.recipes.gtceu.mixer('void_stellite_dust_mix')
        .itemInputs('4x kubejs:gaia_flux_dust', '2x gtceu:cobalt_dust', '2x gtceu:chromium_dust', '1x gtceu:neutronium_dust')
        .itemOutputs('8x gtceu:void_stellite_dust')
        .duration(20 * 20)
        .EUt(GTValues.VA[GTValues.UV])

    event.recipes.gtceu.chemical_reactor('stellar_plasma_agitation')
        .itemInputs('1x gtceu:void_stellite_ingot')
        .inputFluids(Fluid.of('gtceu:celestial_concentrate', 1000))
        .outputFluids(Fluid.of('gtceu:stellar_plasma_plasma', 2000))
        .duration(30 * 20)
        .EUt(GTValues.VA[GTValues.UV])

    event.recipes.gtceu.centrifuge('stellar_plasma_purification')
        .inputFluids(Fluid.of('gtceu:stellar_plasma_plasma', 2000))
        .outputFluids(Fluid.of('gtceu:refined_stellar_plasma', 1800))
        .chancedOutput('gtceu:gaia_spirit_dust', 1000, 0)
        .duration(20 * 20)
        .EUt(GTValues.VA[GTValues.UV])

    event.recipes.gtceu.plasma_generator('refined_stellar_plasma_fuel')
        .inputFluids(Fluid.of('gtceu:refined_stellar_plasma', 1))
        .outputFluids(Fluid.of('gtceu:celestial_concentrate', 1))
        .duration(1000)
        .EUt(-512)

    event.recipes.gtceu.chemical_reactor('cum_synthesis')
        .itemInputs(
            '2x gtceu:zinc_dust',
            '4x gtceu:stem_cells',
            '1x minecraft:sugar'
        )
        .inputFluids(Fluid.of('gtceu:sterilized_growth_medium', 1000))
        .outputFluids(Fluid.of('gtceu:cum', 1000))
        .duration(20 * 20)
        .EUt(GTValues.VA[GTValues.LuV])
        .cleanroom(CleanroomType.STERILE_CLEANROOM)



    event.recipes.gtceu.centrifuge('ctech:cum_centrifugation')
        .inputFluids(Fluid.of('gtceu:cum', 5000))
        .itemOutputs('2x kubejs:sperm_cell_pellet', '1x gtceu:zinc_dust')
        .outputFluids(Fluid.of('kubejs:seminal_plasma', 1000))
        .duration(300)
        .EUt(GTValues.VA[GTValues.LuV])

    event.recipes.gtceu.chemical_reactor('ctech:cell_culture_bootstrap')
        .itemInputs('2x kubejs:sperm_cell_pellet', '4x gtceu:stem_cells')
        .inputFluids(Fluid.of('gtceu:cum', 50000))
        .itemOutputs('1x kubejs:living_cell_matrix')
        .duration(600)
        .EUt(GTValues.VA[GTValues.UV])
        .cleanroom(CleanroomType.STERILE_CLEANROOM)

    event.recipes.gtceu.chemical_reactor('ctech:cell_culture_loop')
        .itemInputs('2x kubejs:sperm_cell_pellet', '4x gtceu:stem_cells')
        .inputFluids(Fluid.of('gtceu:cumium', 1296))
        .itemOutputs('1x kubejs:living_cell_matrix')
        .duration(600)
        .EUt(GTValues.VA[GTValues.UV])
        .cleanroom(CleanroomType.STERILE_CLEANROOM)

    addManaPondRecipe(event, {
        mana: Mana.SAGE,
        input: { item: 'kubejs:living_cell_matrix' },
        output: { item: 'kubejs:mana_seeded_cell_matrix' }
    })

    event.recipes.gtceu.autoclave('ctech:bio_matrix_pressurized_activation')
        .itemInputs(
            '1x kubejs:mana_seeded_cell_matrix',
            '2x gtceu:phosphorus_dust',
            '2x gtceu:calcium_dust',
            '1x gtceu:darmstadtium_dust'
        )
        .inputFluids(Fluid.of('gtceu:aqua_regia', 500))
        .itemOutputs('1x kubejs:activated_bio_matrix')
        .duration(400)
        .EUt(GTValues.VA[GTValues.LuV])


    addRunicAltarRecipe(event, {
        output: { item: 'kubejs:runic_growth_catalyst' },
        mana: Mana.SAGE,
        ingredients: [
            { item: 'botania:rune_spring' },
            { item: 'botania:rune_summer' },
            { item: 'botania:rune_earth' },
            { item: 'botania:rune_mana' },
            { item: 'botania:life_essence' },
            { item: 'botania:life_essence' }
        ]
    })

    event.recipes.gtceu.mixer('ctech:runic_bio_catalyst_mix')
        .itemInputs(
            '1x kubejs:runic_growth_catalyst',
            '4x mysticalagriculture:earth_essence',
            '4x mysticalagriculture:water_essence'
        )
        .inputFluids(Fluid.of('gtceu:mineral_ichor', 1000))
        .itemOutputs('1x kubejs:runic_bio_catalyst')
        .duration(400)
        .EUt(GTValues.VA[GTValues.IV])

    event.recipes.gtceu.chemical_reactor('ctech:elemental_life_reagent_synthesis')
        .itemInputs(
            '1x kubejs:runic_bio_catalyst',
            '2x botania:life_essence',
            '1x gtceu:draconium_dust'
        )
        .inputFluids(Fluid.of('kubejs:seminal_plasma', 1000))
        .itemOutputs('1x kubejs:elemental_life_reagent')
        .duration(400)
        .EUt(GTValues.VA[GTValues.LuV])


    // Dead ars_nouveau:source_gem / Wilden items (Wilden retired per 09-sage.md) swapped for a
    // convergence of this rework's own tier-signature ingots -- fitting for a Sage-tier bridge
    // recipe. Ported addImbuementRecipe -> addEldrinAltarRecipe/LP while fixing this.
    addEldrinAltarRecipe(event, {
        output: 'kubejs:source_crystal_lattice',
        items: [
            'gtceu:prima_materia_ingot',
            'kubejs:element_attunement_stone',
            'gtceu:distilled_animus_ingot',
            'gtceu:starforged_chimerite_ingot',
            'gtceu:gravitic_rubedo_ingot',
            'mysticalagriculture:air_essence',
            'gtceu:naquadah_dust'
        ],
        affinity: 'arcane',
        power: LP.SAGE
    })

    event.recipes.gtceu.chemical_reactor('ctech:vitalized_source_fragment_synthesis')
        .itemInputs(
            '1x kubejs:source_crystal_lattice',
            '2x mysticalagriculture:fire_essence',
            '2x mysticalagriculture:water_essence'
        )
        .inputFluids(Fluid.of('kubejs:seminal_plasma', 1000))
        .itemOutputs('1x kubejs:vitalized_source_fragment')
        .duration(400)
        .EUt(GTValues.VA[GTValues.UV])

    event.recipes.gtceu.mixer('ctech:source_bio_matrix_mix')
        .itemInputs(
            '1x kubejs:vitalized_source_fragment',
            '2x mysticalagriculture:air_essence',
            '2x mysticalagriculture:earth_essence',
            '1x gtceu:naquadah_dust'
        )
        .itemOutputs('1x kubejs:source_bio_matrix')
        .duration(300)
        .EUt(GTValues.VA[GTValues.IV])

    addEnchantingRecipe(event, {
        reagent: 'kubejs:activated_bio_matrix',
        pedestalItems: [
            'kubejs:elemental_life_reagent',
            'kubejs:source_bio_matrix',
            'draconicevolution:draconium_ingot',
            'draconicevolution:draconium_ingot',
            'botania:elementium_ingot',
            'botania:elementium_ingot',
            'botania:life_essence',
            'botania:life_essence'
        ],
        output: 'kubejs:gestated_cumium_crystal',
        sourceCost: Source.ASCENDANT
    })

    // Dead ars_nouveau:wilden_tribute x2 (Wilden retired per 09-sage.md) swapped for
    // gtceu:empyrean_ichor_ingot x2 -- matches 09-sage.md's own design intent ("feeds
    // Ascendant/Prophet the same way Gaia Spirit Ingot did before this rework").
    addRunicAltarRecipe(event, {
        output: { item: 'kubejs:awakened_cumium_embryo' },
        mana: Mana.ASCENDANT,
        ingredients: [
            { item: 'kubejs:gestated_cumium_crystal' },
            { item: 'botania:gaia_ingot' },
            { item: 'botania:gaia_ingot' },
            { item: 'gtceu:empyrean_ichor_ingot' },
            { item: 'gtceu:empyrean_ichor_ingot' },
            { item: 'botania:rune_wrath' },
            { item: 'botania:rune_pride' }
        ]
    })

    addTerraPlateRecipe(event, {
        result: { item: 'kubejs:unforged_cumium_matrix' },
        mana: 128 * Mana.PROPHET,
        ingredients: [
            { item: 'kubejs:awakened_cumium_embryo' },
            { item: 'draconicevolution:awakened_draconium_ingot' },
            { item: 'draconicevolution:awakened_draconium_ingot' },
            { item: 'botania:gaia_ingot' },
            { item: 'botania:gaia_ingot' },
            { item: 'gtceu:chaotic_singulite_dust' }
        ]
    })


    event.recipes.gtceu.chemical_reactor('uev_circuit_dissolution')
        .itemInputs('4x #gtceu:circuits/uev', '1x gtceu:naquadria_dust')
        .inputFluids(Fluid.of('gtceu:aqua_regia', 2000))
        .outputFluids(Fluid.of('kubejs:liquid_computation', 8000))
        .duration(20 * 20)
        .EUt(GTValues.VA[GTValues.UEV])
        .cleanroom(CleanroomType.CLEANROOM)

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

    event.recipes.gtceu.assembler('ctech:broom_thruster_brush')
        .itemInputs(
            '1x hexerei:broom_brush',
            '2x gtceu:steel_plate',
            '1x gtceu:bronze_gear',
            '1x gtceu:mv_electric_motor'
        )
        .itemOutputs('1x hexerei:broom_thruster_brush')
        .duration(200)
        .EUt(GTValues.VA[GTValues.MV])

    event.recipes.gtceu.biogenic_synthesis('ctech:cumium_synthesis')
        .itemInputs(
            '1x kubejs:unforged_cumium_matrix',
            '1x kubejs:elemental_convergence_matrix',
            '4x gtceu:darmstadtium_dust',
            '2x gtceu:uev_field_generator',
            '2x draconicevolution:awakened_draconium_ingot',
            '1x botania:gaia_ingot',
            '2x gtceu:empyrean_ichor_ingot',
            '1x #gtceu:circuits/uiv'
        )
        .inputFluids(
            Fluid.of('gtceu:cum', 16000),
            Fluid.of('kubejs:seminal_plasma', 4000),
            Fluid.of('kubejs:chaos_matrix_fluid', 4000)
        )
        .itemOutputs('2x gtceu:cumium_dust')
        .duration(2000)
        .EUt(GTValues.VA[GTValues.UIV])

    // --- Malum reagent alternates (supplemental only) ---
    // Every output here also has a surviving magic route (spirit_infusion or
    // an equivalent Malum mechanic). These exist so tech players have a second
    // path, never a sole one.
    event.recipes.gtceu.centrifuge('malum_hex_ash_from_charcoal')
        .itemInputs('4x malum:arcane_charcoal')
        .itemOutputs('1x malum:hex_ash')
        .duration(12 * 20)
        .EUt(GTValues.VA[GTValues.HV])

    event.recipes.gtceu.chemical_reactor('malum_void_salts_from_soulstone')
        .itemInputs('2x malum:processed_soulstone', '1x gtceu:salt_dust')
        .itemOutputs('2x malum:void_salts')
        .duration(15 * 20)
        .EUt(GTValues.VA[GTValues.HV])

})
