ServerEvents.recipes(event => {

    event.recipes.gtceu.chemical_reactor('ctech:ignitium_dissolution')
        .itemInputs(
            '1x cataclysm:ignitium_ingot',
            '4x magichem:essentia_fire'
        )
        .inputFluids(Fluid.of('gtceu:phlogiston', 2000))
        .itemOutputs('1x kubejs:raw_ignitium_seed')
        .duration(200)
        .EUt(GTValues.VA[GTValues.LuV])

    event.recipes.gtceu.electric_blast_furnace('ctech:ignitium_recrystallization')
        .itemInputs(
            '1x kubejs:raw_ignitium_seed',
            '2x gtceu:naquadah_dust'
        )
        .itemOutputs('2x cataclysm:ignitium_ingot')
        .blastFurnaceTemp(3600)
        .duration(400)
        .EUt(GTValues.VA[GTValues.LuV])

    // Dead ars_nouveau:source_gem swapped for water essence tag -- lacrima is Cataclysm's
    // ocean-monument boss material, matches the coral/prismarine water theme here.
    event.recipes.gtceu.chemical_reactor('ctech:lacrima_dissolution')
        .itemInputs(
            '1x cataclysm:lacrima',
            '4x #kubejs:water_essences'
        )
        .inputFluids(Fluid.of('manafluid:mana', Source.SORCERER))
        .outputFluids(Fluid.of('kubejs:dissolved_lacrima', 1000))
        .duration(200)
        .EUt(GTValues.VA[GTValues.LuV])

    event.recipes.gtceu.chemical_reactor('ctech:lacrima_recrystallization')
        .itemInputs(
            '4x minecraft:prismarine_shard',
            '1x cataclysm:crystallized_coral'
        )
        .inputFluids(Fluid.of('kubejs:dissolved_lacrima', 1000))
        .itemOutputs('2x cataclysm:lacrima')
        .duration(300)
        .EUt(GTValues.VA[GTValues.LuV])

    event.recipes.gtceu.mixer('ctech:ancient_metal_dissolution')
        .itemInputs(
            '1x cataclysm:ancient_metal_ingot',
            '2x kubejs:mineral_flux_crystal',
            '4x magichem:essentia_earth'
        )
        .inputFluids(Fluid.of('gtceu:mineral_ichor', 1000))
        .itemOutputs('1x kubejs:raw_ancient_metal_compound')
        .duration(300)
        .EUt(GTValues.VA[GTValues.IV])

    event.recipes.gtceu.electric_blast_furnace('ctech:ancient_metal_recrystallization')
        .itemInputs(
            '1x kubejs:raw_ancient_metal_compound',
            '2x gtceu:naquadah_dust'
        )
        .itemOutputs('2x cataclysm:ancient_metal_ingot')
        .blastFurnaceTemp(4500)
        .duration(400)
        .EUt(GTValues.VA[GTValues.LuV])

    event.recipes.gtceu.centrifuge('ctech:storm_essence_separation')
        .itemInputs(
            '1x cataclysm:essence_of_the_storm',
            '4x kubejs:aether_crystal',
            '4x magichem:essentia_air'
        )
        .inputFluids(Fluid.of('gtceu:aether_air', 1000))
        .itemOutputs('1x kubejs:storm_quintessence')
        .duration(300)
        .EUt(GTValues.VA[GTValues.LuV])

    event.recipes.gtceu.chemical_reactor('ctech:storm_essence_reconstitution')
        .itemInputs(
            '1x kubejs:storm_quintessence',
            '2x gtceu:naquadah_dust'
        )
        .inputFluids(Fluid.of('gtceu:aether_air', 2000))
        .itemOutputs('2x cataclysm:essence_of_the_storm')
        .duration(300)
        .EUt(GTValues.VA[GTValues.LuV])

    event.recipes.gtceu.chemical_reactor('ctech:void_core_dissolution')
        .itemInputs(
            '1x cataclysm:void_core',
            '2x draconicevolution:chaos_shard',
            '2x gtceu:naquadria_dust'
        )
        .inputFluids(Fluid.of('kubejs:guardian_distillate', 2000))
        .itemOutputs('1x kubejs:resonant_void_lattice')
        .duration(400)
        // UHV, not UV: this already demands 2x chaos_shard, so it is Chaos Guardian gated no
        // matter what voltage it declares. UV left it below its own ingredients' tier.
        .EUt(GTValues.VA[GTValues.UHV])

    event.recipes.gtceu.assembly_line('ctech:void_core_reconstitution')
        .itemInputs(
            '1x kubejs:resonant_void_lattice',
            '2x draconicevolution:awakened_draconium_ingot',
            '1x botania:gaia_ingot',
            '2x gtceu:cumium_dust'
        )
        .inputFluids(
            Fluid.of('kubejs:argent_energy', 2000),
            Fluid.of('kubejs:guardian_distillate', 2000)
        )
        .itemOutputs('2x cataclysm:void_core')
        .duration(2000)
        .EUt(GTValues.VA[GTValues.UEV])


    event.recipes.gtceu.assembly_line('ctech:fire_nucleus_synthesis')
        .stationResearch(b => b
            .researchStack(Item.of('cataclysm:ignitium_ingot'))
            .CWUt(64)
            .EUt(GTValues.VA[GTValues.UV]))
        .itemInputs(
            '2x cataclysm:ignitium_ingot',
            '4x gtceu:naquadah_plate',
            '4x gtceu:magnesium_dust',
            '4x magichem:essentia_fire',
            '2x gtceu:uv_field_generator',
            '4x gtceu:naquadah_rod'
        )
        .inputFluids(
            Fluid.of('gtceu:phlogiston', 4000),
            Fluid.of('gtceu:soldering_alloy', 576)
        )
        .itemOutputs('1x kubejs:fire_nucleus')
        .duration(1200)
        .EUt(GTValues.VA[GTValues.UHV])

    event.recipes.gtceu.assembly_line('ctech:water_nucleus_synthesis')
        .stationResearch(b => b
            .researchStack(Item.of('cataclysm:lacrima'))
            .CWUt(64)
            .EUt(GTValues.VA[GTValues.UV]))
        .itemInputs(
            '2x cataclysm:lacrima',
            '4x gtceu:naquadah_plate',
            '4x magichem:essentia_water',
            '2x gtceu:uv_field_generator',
            '4x gtceu:naquadah_rod'
        )
        .inputFluids(
            Fluid.of('kubejs:dissolved_lacrima', 4000),
            Fluid.of('gtceu:soldering_alloy', 576)
        )
        .itemOutputs('1x kubejs:water_nucleus')
        .duration(1200)
        .EUt(GTValues.VA[GTValues.UHV])

    event.recipes.gtceu.assembly_line('ctech:earth_nucleus_synthesis')
        .stationResearch(b => b
            .researchStack(Item.of('cataclysm:ancient_metal_ingot'))
            .CWUt(64)
            .EUt(GTValues.VA[GTValues.UV]))
        .itemInputs(
            '2x cataclysm:ancient_metal_ingot',
            '4x gtceu:naquadah_plate',
            '4x magichem:essentia_earth',
            '2x kubejs:mineral_flux_crystal',
            '2x gtceu:uv_field_generator',
            '4x gtceu:naquadah_rod'
        )
        .inputFluids(
            Fluid.of('gtceu:mineral_ichor', 4000),
            Fluid.of('gtceu:soldering_alloy', 576)
        )
        .itemOutputs('1x kubejs:earth_nucleus')
        .duration(1200)
        .EUt(GTValues.VA[GTValues.UHV])

    event.recipes.gtceu.assembly_line('ctech:air_nucleus_synthesis')
        .stationResearch(b => b
            .researchStack(Item.of('cataclysm:essence_of_the_storm'))
            .CWUt(64)
            .EUt(GTValues.VA[GTValues.UV]))
        .itemInputs(
            '2x cataclysm:essence_of_the_storm',
            '4x gtceu:naquadah_plate',
            '4x magichem:essentia_air',
            '4x kubejs:aether_crystal',
            '2x gtceu:uv_field_generator',
            '4x gtceu:naquadah_rod'
        )
        .inputFluids(
            Fluid.of('gtceu:aether_air', 4000),
            Fluid.of('gtceu:soldering_alloy', 576)
        )
        .itemOutputs('1x kubejs:air_nucleus')
        .duration(1200)
        .EUt(GTValues.VA[GTValues.UHV])

    event.recipes.gtceu.assembly_line('ctech:void_nucleus_synthesis')
        .stationResearch(b => b
            .researchStack(Item.of('cataclysm:void_core'))
            .CWUt(128)
            .EUt(GTValues.VA[GTValues.UHV]))
        .itemInputs(
            '2x cataclysm:void_core',
            '4x gtceu:naquadah_plate',
            '2x gtceu:chaos_crystal_dust',
            '2x draconicevolution:chaos_shard',
            '2x gtceu:uhv_field_generator',
            '4x gtceu:naquadah_rod',
            '1x botania:gaia_ingot'
        )
        .inputFluids(
            Fluid.of('kubejs:guardian_distillate', 4000),
            Fluid.of('gtceu:soldering_alloy', 1152)
        )
        .itemOutputs('1x kubejs:void_nucleus')
        .duration(1600)
        .EUt(GTValues.VA[GTValues.UEV])

    event.recipes.gtceu.assembly_line('ctech:elemental_convergence_matrix_synthesis')
        .itemInputs(
            '1x kubejs:fire_nucleus',
            '1x kubejs:water_nucleus',
            '1x kubejs:earth_nucleus',
            '1x kubejs:air_nucleus',
            '1x kubejs:void_nucleus',
            '4x gtceu:awakened_draconium_plate',
            '2x botania:gaia_ingot',
            '4x gtceu:naquadah_plate',
            '2x gtceu:uev_field_generator',
            '1x #gtceu:circuits/uev'
        )
        .inputFluids(
            Fluid.of('kubejs:argent_energy', 4000),
            Fluid.of('kubejs:guardian_distillate', 2000),
            Fluid.of('gtceu:soldering_alloy', 2304)
        )
        .itemOutputs('1x kubejs:elemental_convergence_matrix')
        .duration(2000)
        .EUt(GTValues.VA[GTValues.UIV])

})
