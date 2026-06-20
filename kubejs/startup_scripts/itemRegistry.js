StartupEvents.registry('item', event => {

    event.create('glowing_compound_dust')
    event.create('impure_glimmering_dust')

    event.create('pure_source_gem_dust')
    event.create('rough_source_gem')

    event.create('magebloom_sieve')

    event.create('holy_silver_blend')
    event.create('element_attunement_stone')
    event.create('chaos_essence')

    event.create('disorganized_metal_form')

    event.create('florid_compound')
    event.create('living_metalloid')

    event.create('weak_elementium_dust')
    event.create('elven_concentrate')
    event.create('raw_elementite')
    event.create('elementite_dust')

    event.create('vengeful_gaia_spirit')
    event.create('soul_of_gaia')
    event.create('boundless_gaia_spirit_ingot')

    event.create('gaian_blood_core')
    event.create('gaian_holy_core')
    event.create('gaian_void_core')
    event.create('gaian_annihilation_core')

    event.create('magical_receiver')

    event.create('matter_energy_circuit')

    event.create('condensed_desh_carbonyl')

    event.create('rocket_hull_section')
    event.create('rocket_combustion_engine')
    event.create('pressurized_rocket_tank')
    event.create('rocket_guidance_module')

    event.create('ostrum_perchlorate_mass')
    event.create('ostrum_carbonate_precipitate')
    event.create('crude_ostrum_fluoride')
    event.create('raw_ostrum_sponge')

    event.create('desh_hull_section')
    event.create('mars_rocket_engine')
    event.create('mars_propellant_tank')
    event.create('mars_guidance_module')

    event.create('hallowed_silicon_boule')
    event.create('primal_phosphorus_boule')
    event.create('verdant_naquadah_boule')
    event.create('gaian_neutronium_boule')

    event.create('gaia_flux_dust')
    event.create('void_flux_amalgam')
    event.create('seminal_void_precursor')
    event.create('fire_nucleus')
    event.create('water_nucleus')
    event.create('earth_nucleus')
    event.create('air_nucleus')
    event.create('gestated_cumium_crystal')
    event.create('awakened_cumium_embryo')
    event.create('unforged_cumium_matrix')

    event.create('pneuma_attuned_psimetal')
    event.create('mineral_flux_crystal')
    event.create('ember_crystal')
    event.create('hyaline_crystal')
    event.create('aether_crystal')

    event.create('enchanted_zanite_gem')
    event.create('resonant_zanite_crystal')
    event.create('sanctified_ambrosium_bloom')
    event.create('sacred_ambrosium_shard')
    event.create('frozen_raw_gravitite')
    event.create('altar_charged_gravitite')

    event.create('calorite_sulfate_slag')
    event.create('calorite_chloride_melt')
    event.create('calorite_fluoride_precipitate')
    event.create('raw_calorite_sponge')

    event.create('calorite_hull_section')
    event.create('venus_rocket_engine')
    event.create('venus_propellant_tank')
    event.create('venus_guidance_module')

    event.create('latent_psi_crystal')

    event.create('hexed_amethyst_core')
    event.create('hexed_mana_matrix')

    event.create('elven_source_lattice')

    event.create('rune_of_frost')

    event.create('ostrum_hull_section')
    event.create('glacio_rocket_engine')
    event.create('glacio_propellant_tank')
    event.create('glacio_guidance_module')

    event.create('cannon_mechanism')

    event.create('primordial_organic_muck')
    event.create('kerogen')
    event.create('crude_petroleum_mass')

    // Gun sub-assemblies — 3 receiver types, 2 barrel types (+ blanks), 1 fire control
    event.create('lv_pistol_frame')
    event.create('mv_pistol_frame')
    event.create('hv_pistol_frame')
    event.create('ev_pistol_frame')
    event.create('iv_pistol_frame')
    event.create('luv_pistol_frame')

    event.create('lv_rifle_receiver')
    event.create('mv_rifle_receiver')
    event.create('hv_rifle_receiver')
    event.create('ev_rifle_receiver')
    event.create('iv_rifle_receiver')
    event.create('luv_rifle_receiver')

    event.create('lv_heavy_frame')
    event.create('mv_heavy_frame')
    event.create('hv_heavy_frame')
    event.create('ev_heavy_frame')
    event.create('iv_heavy_frame')
    event.create('luv_heavy_frame')

    event.create('lv_short_barrel_blank')
    event.create('mv_short_barrel_blank')
    event.create('hv_short_barrel_blank')
    event.create('ev_short_barrel_blank')
    event.create('iv_short_barrel_blank')
    event.create('luv_short_barrel_blank')

    event.create('lv_short_barrel')
    event.create('mv_short_barrel')
    event.create('hv_short_barrel')
    event.create('ev_short_barrel')
    event.create('iv_short_barrel')
    event.create('luv_short_barrel')

    event.create('lv_long_barrel_blank')
    event.create('mv_long_barrel_blank')
    event.create('hv_long_barrel_blank')
    event.create('ev_long_barrel_blank')
    event.create('iv_long_barrel_blank')
    event.create('luv_long_barrel_blank')

    event.create('lv_long_barrel')
    event.create('mv_long_barrel')
    event.create('hv_long_barrel')
    event.create('ev_long_barrel')
    event.create('iv_long_barrel')
    event.create('luv_long_barrel')

    event.create('lv_gun_fire_control')
    event.create('mv_gun_fire_control')
    event.create('hv_gun_fire_control')
    event.create('ev_gun_fire_control')
    event.create('iv_gun_fire_control')
    event.create('luv_gun_fire_control')

    // UHV/UEV chain intermediates
    event.create('dragon_heart_crystal')
    event.create('draconic_boule')
    event.create('draconic_resonance_board')
    event.create('stabilized_chaos_crystal')
    event.create('chaos_harmonic_board')

    // Custom circuit items — replaces GT-generated mainframes for UHV+
    // Tagged into #gtceu:circuits/{tier} in server_scripts/circuitTags.js
    event.create('draconic_resonance_assembly')   // UHV
    event.create('chaos_harmonic_mainframe')       // UEV
    event.create('cumium_singularity_core')        // UIV

    // Prophet tier (UHV magic) spellbooks
    event.create('draconic_sanguinary')
    event.create('draconic_sanctum')
    event.create('dracontine_codex')
    event.create('chronicle_of_dominion')

    // Ascendant tier (UEV magic) spellbooks
    event.create('ascendant_initiation_core')
    event.create('chaotic_sanguinary')
    event.create('shattered_sanctum')
    event.create('codex_of_entropy')
    event.create('chronicle_of_unraveling')
})