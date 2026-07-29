StartupEvents.registry('item', event => {

    // Magic rework Phase 1 (Hobbyist): custom fire/water/air/earth essence items retired
    // 2026-07-28 -- MagiChem's real magichem:essentia_<element> replaces them entirely
    // (see itemTags.js). No longer registered here.

    // Ashen Ichor chain: arcane charcoal + redstone -> ichor dust -> vinteum blend
    // -> Blood Altar charge -> kindled dust -> smelt -> rough ingot -> Spirit Altar -> gtceu:ashen_ichor_ingot.
    event.create('ichor_dust')
    event.create('vinteum_ichor_blend')
    event.create('kindled_ichor_dust')
    event.create('ashen_ichor_ingot_rough')

    // Magic rework Phase 2 (Apprentice): zanite chain -> botania:manasteel_ingot, replaces Luminessence.
    event.create('zanite_shard')
    event.create('cracked_zanite')
    event.create('zanite_laced_iron')

    // Magic rework Phase 3 (Journeyman): veridium chain -> botania:terrasteel_ingot, replaces
    // the old Source Gem line (pure_source_gem_dust/rough_source_gem retired with it).
    event.create('veridium_filings')
    event.create('verdant_charged_filings')
    event.create('verdant_grafted_manasteel')

    // Magic rework Phase 4 (Initiate): ambrosium chain -> botania:elementium_ingot.
    // gtceu:ambrosium_dust already exists (ambrosium is a .gem() GT material, dust autogens).
    // weak_elementium_dust already existed too (Arcanist's own runic-altar route feeds
    // elven_concentrate); this tier gets its own cheaper macerator route to the same item.
    event.create('ambrosia_touched_elementite')

    // Magic rework Phase 5 (Sorcerer): gravitite chain -> botania:gaia_ingot. Gaia Guardian is
    // now expected to be fought at Sorcerer (boss-drop Life Essence), per user direction.
    event.create('gravitite_shavings')
    event.create('bound_gravitite')
    event.create('gravity_bound_life_essence')

    // Magic rework Phase 6 (Alchemist): Distilled Animus chain -> gtceu:distilled_animus_ingot.
    event.create('arcane_residue')
    event.create('animus_fragment')

    // Magic rework Phase 7 (Thaumaturge): Starforged Chimerite chain -> gtceu:starforged_chimerite_ingot.
    event.create('chimerite_dust')
    event.create('star_touched_chimerite')
    event.create('vengeance_touched_chimerite')
    event.create('charged_chimerite')

    // Magic rework Phase 8 (Arcanist): Gravitic Rubedo chain -> gtceu:gravitic_rubedo_ingot.
    event.create('rubedo_touched_vinteum')
    event.create('gravitic_residue')
    event.create('bound_gravitic_core')

    // Magic rework Phase 9 (Sage): Empyrean Ichor chain -> gtceu:empyrean_ichor_ingot.
    event.create('hallowed_remnant')
    event.create('wellspring_bound_remnant')
    event.create('empyrean_core')

    event.create('holy_silver_blend')
    event.create('element_attunement_stone')
    event.create('chaos_essence')

    event.create('disorganized_metal_form')

    event.create('weak_elementium_dust')
    event.create('elven_concentrate')

    event.create('vengeful_gaia_spirit')
    event.create('soul_of_gaia')
    event.create('boundless_gaia_spirit_ingot')

    event.create('gaian_blood_core')
    event.create('gaian_holy_core')
    event.create('gaian_void_core')
    event.create('gaian_annihilation_core')

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

    event.create('hallowed_silicon_boule').texture('gtceu:item/silicon_boule').glow(true)
    event.create('primal_phosphorus_boule').texture('gtceu:item/phosphorus_boule').glow(true)
    event.create('verdant_naquadah_boule').texture('gtceu:item/naquadah_boule').glow(true)
    event.create('gaian_neutronium_boule').texture('gtceu:item/neutronium_boule').glow(true)

    event.create('gaia_flux_dust')
    event.create('sperm_cell_pellet')
    event.create('living_cell_matrix')
    event.create('mana_seeded_cell_matrix')
    event.create('activated_bio_matrix')

    event.create('runic_growth_catalyst')
    event.create('runic_bio_catalyst')
    event.create('elemental_life_reagent')

    event.create('source_crystal_lattice')
    event.create('vitalized_source_fragment')
    event.create('source_bio_matrix')

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
    event.create('resonant_gravitite_core')

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

    event.create('ostrum_hull_section')
    event.create('glacio_rocket_engine')
    event.create('glacio_propellant_tank')
    event.create('glacio_guidance_module')

    event.create('cannon_mechanism').texture('create:item/precision_mechanism')

    event.create('primordial_organic_muck')
    event.create('kerogen')
    event.create('crude_petroleum_mass')

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

    event.create('primal_latex_billet')
    event.create('elemental_latex_compound')

    event.create('uhv_voltage_coil')
    event.create('uev_voltage_coil')
    event.create('uiv_voltage_coil')

    event.create('dragon_heart_crystal')
    event.create('draconic_boule').texture('gtceu:item/neutronium_boule').glow(true)
    event.create('draconic_resonance_board')
    event.create('stabilized_chaos_crystal')
    event.create('chaos_harmonic_board')

    event.create('draconic_processor')                // ZPM
    event.create('draconic_processor_assembly')       // UV
    event.create('draconic_processor_supercomputer')  // UHV
    event.create('draconic_processor_mainframe')      // UEV
    event.create('chaos_processor')                   // UV
    event.create('chaos_processor_assembly')          // UHV
    event.create('chaos_processor_supercomputer')     // UEV
    event.create('chaos_processor_mainframe')         // UIV
    event.create('cumium_processor')                  // UEV
    event.create('cumium_processor_assembly')         // UIV
    event.create('artificial_cumium_brain')           // UXV

    event.create('draconic_sanguinary')
    event.create('draconic_sanctum')
    event.create('dracontine_codex')
    event.create('chronicle_of_dominion')

    event.create('pyromatic_codex')
    event.create('evocation_folio')
    event.create('glacial_grimoire')
    event.create('verdant_chronicle')
    event.create('technomatic_folio')
    event.create('blood_grimoire')
    event.create('radiant_sanctum')
    event.create('eldritch_codex')
    event.create('obliteration_chronicle')
    event.create('harbinger_codex')

    event.create('ascendant_initiation_core')
    event.create('chaotic_sanguinary')
    event.create('shattered_sanctum')
    event.create('codex_of_entropy')
    event.create('chronicle_of_unraveling')

    event.create('raw_ignitium_seed')
    event.create('raw_ancient_metal_compound')
    event.create('storm_quintessence')
    event.create('resonant_void_lattice')

    event.create('void_nucleus')
    event.create('elemental_convergence_matrix')

    let ritualDummies = ['resonant_gravitite_core', 'chaos_essence', 'chaos_essence_mysticalag', 'prima_materia_ingot', 'bound_gravitic_core', 'empyrean_core']
    ritualDummies.forEach(name => {
        event.create('ritual_dummy_' + name, 'occultism:ritual_dummy')
            .displayName('Ritual: ' + name)
    })
})
