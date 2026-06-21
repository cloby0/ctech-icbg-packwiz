ServerEvents.recipes(event => {

    // no blast temp so alloy smelter only; no hot ingot needed
    event.recipes.gtceu.alloy_smelter('lead_sourcite_alloy')
        .itemInputs('2x gtceu:lead_dust', '1x gtceu:source_dust')
        .itemOutputs('3x gtceu:lead_sourcite_ingot')
        .duration(15 * 20)
        .EUt(GTValues.VA[GTValues.MV])

    // Superconductor alloy dust mixing — GT auto-gen handles EBF (dust→hot ingot) and vacuum freezer (hot ingot→ingot)
    // blastTemp() on each material defines duration/EUt/gas tier for the EBF step
    // hot ingot generated because all blast temps > 1750K; freezer uses liquid helium for temps >= 5000K
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

    // magic-machine structural alloys — same dust-mix-then-auto-EBF-then-auto-freezer pipeline as above
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

    // source fluid distillation → four elemental fluids
    // total output 6000 mB from 10000 mB; remainder consumed in separation
    event.recipes.gtceu.distillation_tower('source_fluid_distillation')
        .inputFluids(Fluid.of('starbunclemania:source_fluid', 10000))
        .outputFluids(Fluid.of('gtceu:phlogiston', 2000))
        .outputFluids(Fluid.of('gtceu:aqua_vitae', 2000))
        .outputFluids(Fluid.of('gtceu:mineral_ichor', 2000))
        .outputFluids(Fluid.of('gtceu:pneuma', 2000))
        .duration(30 * 20)
        .EUt(GTValues.VA[GTValues.EV])

    // elemental fluid → essence recovery
    // phlogiston: 50% roundtrip efficiency (2 fire_essence → 500 mB phlogiston → 1 fire_essence)
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

    // pneuma centrifuge: air essence separated from pneuma; remainder collapses back to air
    event.recipes.gtceu.centrifuge('pneuma_to_air_essence')
        .inputFluids(Fluid.of('gtceu:pneuma', 3000))
        .itemOutputs('1x mysticalagriculture:air_essence')
        .outputFluids(Fluid.of('gtceu:air', 1000))
        .duration(15 * 20)
        .EUt(GTValues.VA[GTValues.EV])

    // inferium → source fluid: MA farms become a source supplement without any Ars infrastructure
    event.recipes.gtceu.chemical_reactor('inferium_to_source_fluid')
        .itemInputs('4x mysticalagriculture:inferium_essence')
        .inputFluids(Fluid.of('gtceu:distilled_water', 1000))
        .outputFluids(Fluid.of('starbunclemania:source_fluid', 500))
        .duration(15 * 20)
        .EUt(GTValues.VA[GTValues.HV])

    // pneuma → source fluid: more efficient than inferium path, requires distillation chain
    event.recipes.gtceu.chemical_reactor('pneuma_to_source_fluid')
        .itemInputs('4x mysticalagriculture:inferium_essence')
        .inputFluids(Fluid.of('gtceu:pneuma', 1000))
        .outputFluids(Fluid.of('starbunclemania:source_fluid', 2500))
        .duration(10 * 20)
        .EUt(GTValues.VA[GTValues.EV])

    // mineral ichor alloy byproduct: chemical reactor (2 item output slots) instead of mixer
    // original mixer recipes unchanged; these are new recipe IDs alongside them
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

    // mineral flux crystal partial ichor recovery: dissolve back into fluid at loss
    event.recipes.gtceu.chemical_reactor('mineral_flux_crystal_to_ichor')
        .itemInputs('1x kubejs:mineral_flux_crystal')
        .inputFluids(Fluid.of('gtceu:distilled_water', 1000))
        .outputFluids(Fluid.of('gtceu:mineral_ichor', 250))
        .duration(10 * 20)
        .EUt(GTValues.VA[GTValues.HV])

    // crush crystal into traces of the four elemental bias ores
    event.recipes.gtceu.macerator('mineral_flux_crystal_crush')
        .itemInputs('1x kubejs:mineral_flux_crystal')
        .chancedOutput('gtceu:chromite_dust', 2500, 0)
        .chancedOutput('gtceu:bauxite_dust', 2500, 0)
        .chancedOutput('gtceu:ilmenite_dust', 2500, 0)
        .chancedOutput('gtceu:scheelite_dust', 2500, 0)
        .duration(10 * 20)
        .EUt(GTValues.VA[GTValues.HV])

    // elemental crystal system — one crystallized form per elemental fluid (extends mineral_flux_crystal)
    // production: chemical_reactor alternatives to centrifuge ore routes, chanced crystal byproduct

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

    // fluid recovery at 50% loss (125 mB from 250 mB used in production)
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

    // macerator crush for trace ore dusts (fire/water/air-adjacent minerals)
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

    // bonus: ember crystal boosts phlogisticated fuel yield (1500 mB base → 2500 mB)
    event.recipes.gtceu.mixer('phlogisticated_fuel_ember_boost')
        .itemInputs('1x kubejs:ember_crystal')
        .inputFluids(Fluid.of('gtceu:phlogiston', 500), Fluid.of('gtceu:heavy_fuel', 1000))
        .outputFluids(Fluid.of('gtceu:phlogisticated_fuel', 2500))
        .duration(20 * 20)
        .EUt(GTValues.VA[GTValues.EV])

    // bonus: hyaline crystal boosts growth medium batch (5000 mB base → 6250 mB)
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

    // elemental fluid ore processing routes
    // phlogiston biases existing chromite centrifuge: auto-gen gives 1 iron + 2 chromium + 4000 mB oxygen
    // bias adds 1 guaranteed chromium for 250 mB phlogiston
    event.recipes.gtceu.centrifuge('chromite_dust_phlogiston_bias')
        .itemInputs('1x gtceu:chromite_dust')
        .inputFluids(Fluid.of('gtceu:phlogiston', 250))
        .itemOutputs('1x gtceu:iron_dust', '3x gtceu:chromium_dust')
        .outputFluids(Fluid.of('gtceu:oxygen', 4000))
        .duration(18 * 20)
        .EUt(GTValues.VA[GTValues.MV])

    // bauxite has DISABLE_DECOMPOSITION so no auto centrifuge; mineral ichor enables new centrifuge route
    // vs electrolyzer (15 bauxite → 6 aluminium + 1 rutile + 9000 O2, LV):
    // centrifuge+ichor trades higher EU and ichor cost for gallium chance and centrifuge machine type
    event.recipes.gtceu.centrifuge('bauxite_dust_ichor_processing')
        .itemInputs('5x gtceu:bauxite_dust')
        .inputFluids(Fluid.of('gtceu:mineral_ichor', 500))
        .itemOutputs('2x gtceu:aluminium_dust')
        .chancedOutput('gtceu:rutile_dust', 3000, 0)
        .chancedOutput('gtceu:gallium_dust', 2000, 0)
        .outputFluids(Fluid.of('gtceu:oxygen', 3000))
        .duration(15 * 20)
        .EUt(GTValues.VA[GTValues.HV])

    // ilmenite has DISABLE_DECOMPOSITION; aqua vitae enables centrifuge alternative to EBF path
    // vs EBF (5 ilmenite + carbon → iron + 3 rutile, HV 1700K):
    // centrifuge+vitae skips blast furnace requirement but gives less rutile (2 vs 3)
    event.recipes.gtceu.centrifuge('ilmenite_dust_aqua_vitae_processing')
        .itemInputs('5x gtceu:ilmenite_dust')
        .inputFluids(Fluid.of('gtceu:aqua_vitae', 500))
        .itemOutputs('2x gtceu:iron_dust', '2x gtceu:rutile_dust')
        .chancedOutput('gtceu:ilmenite_slag_dust', 4000, 0)
        .outputFluids(Fluid.of('gtceu:oxygen', 3000))
        .duration(20 * 20)
        .EUt(GTValues.VA[GTValues.HV])

    // scheelite has DISABLE_DECOMPOSITION; pneuma creates direct centrifuge shortcut to tungsten
    // bypasses the normal scheelite → tungstic acid → electrolyzer chain
    // gated at IV to match tungsten's tier; requires EV distillation chain to have pneuma
    event.recipes.gtceu.centrifuge('scheelite_dust_pneuma_processing')
        .itemInputs('1x gtceu:scheelite_dust')
        .inputFluids(Fluid.of('gtceu:pneuma', 250))
        .itemOutputs('1x gtceu:calcium_dust', '1x gtceu:tungsten_dust')
        .duration(20 * 20)
        .EUt(GTValues.VA[GTValues.IV])

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
        .outputFluids(Fluid.of('gtceu:phlogiston', 500))
        .itemOutputs('1x gtceu:ash_dust')
        .duration(10 * 20)
        .EUt(GTValues.VA[GTValues.EV])

    // prismarine shard mirrors the aqua_vitae_to_water_essence catalyst; salt is the ocean byproduct
    event.recipes.gtceu.chemical_reactor('aqua_vitae_extraction')
        .itemInputs('2x mysticalagriculture:water_essence', '1x minecraft:prismarine_shard')
        .outputFluids(Fluid.of('gtceu:aqua_vitae', 500))
        .itemOutputs('1x gtceu:salt_dust')
        .duration(10 * 20)
        .EUt(GTValues.VA[GTValues.EV])

    // clay mirrors the mineral_ichor_to_earth_essence catalyst; calcite is the mineral residue
    event.recipes.gtceu.chemical_reactor('mineral_ichor_extraction')
        .itemInputs('2x mysticalagriculture:earth_essence', '1x minecraft:clay_ball')
        .outputFluids(Fluid.of('gtceu:mineral_ichor', 500))
        .itemOutputs('1x gtceu:calcite_dust')
        .duration(10 * 20)
        .EUt(GTValues.VA[GTValues.EV])

    // feather as air-associated organic; ash mirrors phlogiston pattern
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
        .outputFluids(Fluid.of('starbunclemania:source_fluid', 250))
        .duration(30 * 20)
        .EUt(GTValues.VA[GTValues.EV])

    event.recipes.gtceu.combustion_generator('infernal_diesel_fuel')
        .inputFluids(Fluid.of('gtceu:infernal_diesel', 1))
        .duration(60)
        .EUt(-32)

    event.recipes.gtceu.chemical_reactor('elven_concentrate_synthesis')
        .itemInputs('3x kubejs:weak_elementium_dust', '1x gtceu:raw_source')
        .inputFluids(Fluid.of('starbunclemania:source_fluid', 2000))
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

    // silicon boule + holy silver -> 32 silicon wafers (vs vanilla 16)
    addImbuementRecipe(event, {
        input: 'gtceu:silicon_boule',
        output: 'kubejs:hallowed_silicon_boule',
        source: 2000,
        pedestalItems: ['gtceu:holy_silver_dust', 'gtceu:holy_silver_dust']
    })

    // phosphorus boule + prima materia -> 64 phosphorus wafers (vs vanilla 32)
    addImbuementRecipe(event, {
        input: 'gtceu:phosphorus_boule',
        output: 'kubejs:primal_phosphorus_boule',
        source: 4000,
        pedestalItems: ['gtceu:prima_materia_dust']
    })

    // naquadah boule + terrasteel -> 128 naquadah wafers (vs vanilla 64)
    addEnchantingRecipe(event, {
        reagent: 'gtceu:naquadah_boule',
        pedestalItems: ['botania:terrasteel_ingot', 'botania:terrasteel_ingot'],
        output: 'kubejs:verdant_naquadah_boule',
        sourceCost: 6000
    })

    // neutronium boule + gaia spirit -> 192 neutronium wafers (vs vanilla 96)
    addEnchantingRecipe(event, {
        reagent: 'gtceu:neutronium_boule',
        pedestalItems: ['botania:gaia_ingot'],
        output: 'kubejs:gaian_neutronium_boule',
        sourceCost: 10000
    })

    // aqua vitae growth medium: replaces vitalized_culture_medium synergy with direct fluid input
    // same +25% output vs vanilla recipe (4000 mB → 5000 mB); aqua vitae replaces the magic intermediate
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

    // prima materia transmutation: philosopher's stone shortcut at EV tier
    // each recipe is suboptimal vs the normal chain; worth it only for one-off bootstrapping
    event.recipes.gtceu.chemical_reactor('prima_materia_to_osmium')
        .itemInputs('1x gtceu:prima_materia_dust', '3x gtceu:platinum_dust')
        .itemOutputs('1x gtceu:osmium_dust')
        .duration(25 * 20)
        .EUt(GTValues.VA[GTValues.EV])

    // ~70% of electrolyzer route but skips LV electrolyzer gate entirely
    event.recipes.gtceu.chemical_reactor('prima_materia_to_aluminium')
        .itemInputs('1x gtceu:prima_materia_dust', '5x gtceu:bauxite_dust')
        .itemOutputs('2x gtceu:aluminium_dust')
        .duration(20 * 20)
        .EUt(GTValues.VA[GTValues.EV])

    // ~60% vs phlogiston-biased centrifuge; skips EBF chromium gate
    event.recipes.gtceu.chemical_reactor('prima_materia_to_chromium')
        .itemInputs('1x gtceu:prima_materia_dust', '2x gtceu:chromite_dust')
        .itemOutputs('1x gtceu:chromium_dust')
        .duration(20 * 20)
        .EUt(GTValues.VA[GTValues.EV])

    // terrible ratio; useful only to bootstrap enriched naquadah before the processing line is built
    event.recipes.gtceu.chemical_reactor('prima_materia_to_enriched_naquadah')
        .itemInputs('1x gtceu:prima_materia_dust', '3x gtceu:naquadah_dust')
        .itemOutputs('1x gtceu:enriched_naquadah_dust')
        .duration(60 * 20)
        .EUt(GTValues.VA[GTValues.EV])

    // UV plasma line — stellar plasma fuel chain
    // gates: gaia_spirit (UV/Sage) + boundless_naquadrite (UV superconductor) + full faefire/pneuma infrastructure

    // step 1: gaia flux dust — double-gates the entire line behind UV tech and UV magic
    event.recipes.gtceu.chemical_reactor('gaia_flux_dust_synthesis')
        .itemInputs('1x gtceu:gaia_spirit_dust', '1x gtceu:boundless_naquadrite_dust', '1x gtceu:naquadria_dust')
        .itemOutputs('3x kubejs:gaia_flux_dust')
        .duration(30 * 20)
        .EUt(GTValues.VA[GTValues.UV])

    // step 2: celestial concentrate — consumes faefire aerosol (ZPM chain output) and pneuma (EV chain output)
    event.recipes.gtceu.chemical_reactor('celestial_concentrate_synthesis')
        .itemInputs('1x kubejs:gaia_flux_dust')
        .inputFluids(Fluid.of('gtceu:faefire_aerosol', 500), Fluid.of('gtceu:pneuma', 1000))
        .outputFluids(Fluid.of('gtceu:celestial_concentrate', 1500))
        .duration(30 * 20)
        .EUt(GTValues.VA[GTValues.UV])

    // step 3: void stellite dust — gaia flux as magic binder, cobalt+chromium as real stellite base
    // EBF (9000K) and vacuum freezer auto-gen from blastTemp; NO_SMELTING must NOT be set or it blocks both
    event.recipes.gtceu.mixer('void_stellite_dust_mix')
        .itemInputs('4x kubejs:gaia_flux_dust', '2x gtceu:cobalt_dust', '2x gtceu:chromium_dust', '1x gtceu:neutronium_dust')
        .itemOutputs('8x gtceu:void_stellite_dust')
        .duration(20 * 20)
        .EUt(GTValues.VA[GTValues.UV])

    // step 4: plasma agitation — void stellite dissolves into celestial concentrate to form plasma
    event.recipes.gtceu.chemical_reactor('stellar_plasma_agitation')
        .itemInputs('1x gtceu:void_stellite_ingot')
        .inputFluids(Fluid.of('gtceu:celestial_concentrate', 1000))
        .outputFluids(Fluid.of('gtceu:stellar_plasma_plasma', 2000))
        .duration(30 * 20)
        .EUt(GTValues.VA[GTValues.UV])

    // step 5: purification — small gaia spirit dust recovery closes the loop slightly
    event.recipes.gtceu.centrifuge('stellar_plasma_purification')
        .inputFluids(Fluid.of('gtceu:stellar_plasma_plasma', 2000))
        .outputFluids(Fluid.of('gtceu:refined_stellar_plasma', 1800))
        .chancedOutput('gtceu:gaia_spirit_dust', 1000, 0)
        .duration(20 * 20)
        .EUt(GTValues.VA[GTValues.UV])

    // step 6: plasma generator fuel — 1000 duration/mB vs americium 320, justifies the long chain
    // cooled plasma outputs celestial_concentrate — partial loop closure, void_stellite is the net fuel sink
    event.recipes.gtceu.plasma_generator('refined_stellar_plasma_fuel')
        .inputFluids(Fluid.of('gtceu:refined_stellar_plasma', 1))
        .outputFluids(Fluid.of('gtceu:celestial_concentrate', 1))
        .duration(1000)
        .EUt(-512)

    // CUMIUM INGOT LINE — C-Tech apex material, 6 player-visible steps before EBF
    //
    // step 1: cum (fluid) — biologically grounded approximation
    //   zinc: highest mineral in real semen (~150mg/L)
    //   stem_cells: sperm (LuV bioprocessing: osmiridium + bacteria + sterilized_growth_medium)
    //   sugar: fructose proxy (primary motility energy source)
    //   sterilized_growth_medium: seminal plasma protein base
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

    // parallel branches — four elemental nuclei, each uses a DIFFERENT machine and a boss drop
    // all four required as convergence pedestals at gestated_cumium_crystal (step 3)

    // fire nucleus — GT Alloy Smelter; boss gate: ignitium_ingot (from Ignis boss, Cataclysm)
    // ember_crystal: existing MV fire crystal from chromite + phlogiston processing
    event.recipes.gtceu.alloy_smelter('fire_nucleus_synthesis')
        .itemInputs('2x cataclysm:ignitium_ingot', '2x kubejs:ember_crystal')
        .itemOutputs('2x kubejs:fire_nucleus')
        .duration(30 * 20)
        .EUt(GTValues.VA[GTValues.EV])

    // water nucleus — Botania Mana Pool (alchemy catalyst); boss gate: lacrima (Cataclysm ocean boss)
    // 50000 mana: requires serious mana infrastructure even before the 15M TAP
    addManaPondRecipe(event, {
        mana: 50000,
        input: { item: 'cataclysm:lacrima' },
        output: { item: 'kubejs:water_nucleus' },
        catalyst: { block: 'botania:alchemy_catalyst' }
    })

    // earth nucleus — GT Mixer; boss gate: ancient_metal_ingot (Ancient Remnant boss, Cataclysm)
    // mineral_flux_crystal: existing HV earth crystal (chanced byproduct of ichor alloy processing)
    event.recipes.gtceu.mixer('earth_nucleus_synthesis')
        .itemInputs(
            '2x cataclysm:ancient_metal_ingot',
            '2x kubejs:mineral_flux_crystal',
            '4x mysticalagriculture:earth_essence'
        )
        .inputFluids(Fluid.of('gtceu:mineral_ichor', 1000))
        .itemOutputs('4x kubejs:earth_nucleus')
        .duration(30 * 20)
        .EUt(GTValues.VA[GTValues.IV])

    // air nucleus — Ars Nouveau Imbuement Chamber; boss gate: essence_of_the_storm (Storm boss, Cataclysm)
    // aether_crystal: existing IV air crystal from scheelite + pneuma; naquadah: Glacio gate
    addImbuementRecipe(event, {
        input: 'cataclysm:essence_of_the_storm',
        output: 'kubejs:air_nucleus',
        source: 12000,
        pedestalItems: [
            'kubejs:aether_crystal',
            'kubejs:aether_crystal',
            'mysticalagriculture:air_essence',
            'mysticalagriculture:air_essence',
            'gtceu:naquadah_dust',
            'gtceu:naquadah_dust'
        ]
    })

    // step 2: seminal void precursor — cum carries void stellite and naquadria as a biological vector
    event.recipes.gtceu.chemical_reactor('seminal_void_precursor_synthesis')
        .itemInputs(
            '2x gtceu:void_stellite_dust',
            '1x gtceu:naquadria_dust'
        )
        .inputFluids(Fluid.of('gtceu:cum', 2000))
        .itemOutputs('3x kubejs:seminal_void_precursor')
        .duration(40 * 20)
        .EUt(GTValues.VA[GTValues.UV])

    // step 3: gestated cumium crystal — all four elemental nuclei converge with the precursor
    //   four nuclei: elemental completeness (fire/water/earth/air; IV/EV/HV/LuV planet gates)
    //   stem_cells x2: biological anchor — the living scaffold that holds the convergence
    //   40000 source: demands serious source infrastructure
    addImbuementRecipe(event, {
        input: 'kubejs:seminal_void_precursor',
        output: 'kubejs:gestated_cumium_crystal',
        source: 40000,
        pedestalItems: [
            'kubejs:fire_nucleus',
            'kubejs:water_nucleus',
            'kubejs:earth_nucleus',
            'kubejs:air_nucleus',
            'gtceu:stem_cells',
            'gtceu:stem_cells'
        ]
    })

    // step 4: awakened cumium embryo — sage-tier awakening via Enchanting Apparatus
    //   gaia_ingot x2: two Guardian of Gaia kills (or MA gaia_spirit_essence farm)
    //   elementium_ingot x4: elven portal endgame
    //   neutronium_dust x2: UV tech ceiling
    //   60000 source: Grand Enchanting Sanctum + major source generation required
    addEnchantingRecipe(event, {
        reagent: 'kubejs:gestated_cumium_crystal',
        pedestalItems: [
            'botania:gaia_ingot',
            'botania:gaia_ingot',
            'botania:elementium_ingot',
            'botania:elementium_ingot',
            'botania:elementium_ingot',
            'botania:elementium_ingot',
            'gtceu:neutronium_dust',
            'gtceu:neutronium_dust'
        ],
        output: 'kubejs:awakened_cumium_embryo',
        sourceCost: 60000
    })

    // step 5: void flux amalgam — embryo fuses with stellar plasma and more cum (second cum gate)
    //   awakened_cumium_embryo: carries all prior chain value
    //   gaia_spirit_dust: binds the magic component
    //   refined_stellar_plasma: UV energy channel
    //   cum: second appearance — biological resonance locks the fusion
    event.recipes.gtceu.chemical_reactor('void_flux_amalgam_synthesis')
        .itemInputs(
            '1x kubejs:awakened_cumium_embryo',
            '1x gtceu:gaia_spirit_dust'
        )
        .inputFluids(
            Fluid.of('gtceu:refined_stellar_plasma', 1000),
            Fluid.of('gtceu:cum', 500)
        )
        .itemOutputs('3x kubejs:void_flux_amalgam')
        .duration(60 * 20)
        .EUt(GTValues.VA[GTValues.UV])

    // step 6: terrestrial agglomeration plate (15,000,000 mana) — mana condensation locks the matrix
    //   gaia_ingot: third gaia gate in the chain
    //   neutronium_dust: UV tech ceiling
    //   outputs unforged_cumium_matrix — not dust yet, needs forging
    addTerraPlateRecipe(event, {
        result: { item: 'kubejs:unforged_cumium_matrix' },
        mana: 15000000,
        ingredients: [
            { item: 'kubejs:void_flux_amalgam' },
            { item: 'kubejs:void_flux_amalgam' },
            { item: 'botania:gaia_ingot' },
            { item: 'gtceu:neutronium_dust' }
        ]
    })

    // step 6.5: liquid computation — UV circuits dissolved in aqua regia + naquadria
    //   the assembly line doesn't run on soldering alloy; it runs on distilled cognition
    //   4x UV circuits per batch; 8000mB consumed by the forging = 4 circuits worth of computation
    event.recipes.gtceu.chemical_reactor('uv_circuit_dissolution')
        .itemInputs('4x #gtceu:circuits/uv', '1x gtceu:naquadria_dust')
        .inputFluids(Fluid.of('gtceu:aqua_regia', 2000))
        .outputFluids(Fluid.of('kubejs:liquid_computation', 8000))
        .duration(20 * 20)
        .EUt(GTValues.VA[GTValues.UV])
        .cleanroom(CleanroomType.CLEANROOM)

    // step 7: Void Crucible — crystallizes the matrix into cumium dust with apex gate items
    //   stem_cells x4: biological anchor — cum's foundation returns a third time
    //   neutronium_dust x2: UV tech ceiling
    //   void_core: Cataclysm void boss gate
    //   gaia_ingot: Sage-tier magic apex — Guardian of Gaia gate
    //   uv_sensor x2 + uv_emitter x2 + uv_field_generator x2: apex UV components
    //   cum 2000mB: third cum gate
    //   liquid_computation 8000mB: the crucible runs on cognition
    event.recipes.gtceu.void_crucible('cumium_void_crucible')
        .itemInputs(
            '1x kubejs:unforged_cumium_matrix',
            '4x gtceu:stem_cells',
            '2x gtceu:neutronium_dust',
            '1x cataclysm:void_core',
            '1x botania:gaia_ingot',
            '2x gtceu:uv_sensor',
            '2x gtceu:uv_emitter',
            '2x gtceu:uv_field_generator'
        )
        .inputFluids(
            Fluid.of('gtceu:cum', 2000),
            Fluid.of('kubejs:liquid_computation', 8000)
        )
        .itemOutputs('1x gtceu:cumium_dust')
        .duration(200 * 20)
        .EUt(GTValues.VA[GTValues.UV])
    // step 8 (auto): EBF (9000K, UV coils, 3600 ticks) → cumium_hot_ingot → Vacuum Freezer → cumium_ingot

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
