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

    // Magic rework Phase 8 (Arcanist): Rubedo Core chain -> gtceu:rubedo_core_ingot.
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
    event.create('prima_materia_seed')

    event.create('disorganized_metal_form')

    event.create('vengeful_wraith')
    event.create('bound_astral_soul')
    event.create('boundless_astral_ingot')

    event.create('astral_blood_core')
    event.create('astral_holy_core')
    event.create('astral_void_core')
    event.create('astral_annihilation_core')

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

    event.create('cannon_mechanism')

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
    event.create('stabilized_chaos_crystal')

    event.create('argentware_processor')                 // ZPM
    event.create('argentware_processor_assembly')         // UV
    event.create('argentware_processor_supercomputer')    // UHV
    event.create('argentware_processor_mainframe')        // UEV
    event.create('wraithware_processor_unbound')           // UV, pre-ritual
    event.create('wraithware_processor')                   // UV, post-ritual
    event.create('wraithware_processor_assembly')          // UHV
    event.create('wraithware_processor_supercomputer')     // UEV
    event.create('wraithware_processor_mainframe')         // UIV
    event.create('egoware_processor')                  // UEV
    event.create('egoware_processor_assembly')         // UIV
    event.create('artificial_cumium_brain')            // UXV -- keeps its name: the other two
                                                       // lines end in a machine, this one ends
                                                       // in a brain. Cumium is the metal it is
                                                       // printed on, not the occupant.

    // The -ware ladder's boards -- raw board then printed board, same two-stage shape as GTCEu's
    // own <x>_circuit_board / <x>_printed_circuit_board. Printing uses foil of a magical alloy
    // instead of a plain GT metal. Argentware forks off GT's multilayer board (sibling of
    // wetware, not descendant); wraithware builds on argentware; egoware on wraithware.
    event.create('argent_foil')
    event.create('spectral_foil')
    event.create('argentware_circuit_board')
    event.create('argentware_printed_circuit_board')
    event.create('wraithware_circuit_board')
    event.create('wraithware_printed_circuit_board')
    event.create('egoware_circuit_board')
    event.create('egoware_printed_circuit_board')

    // Warded SMDs -- the third and final component tier. Not more powerful than advanced SMDs:
    // re-cased in consecrated chromite so they keep working next to a bound occupant. Ordinary
    // components geek out at close range, which is why every line's top rungs need these.
    event.create('warded_smd_diode').glow(true)
    event.create('warded_smd_capacitor').glow(true)
    event.create('warded_smd_transistor').glow(true)
    event.create('warded_smd_resistor').glow(true)
    event.create('warded_smd_inductor').glow(true)

    // Laplace's Determinism Engine reagents
    event.create('time_crystal')
    event.create('bound_demon_will')
    event.create('crystallized_malice')
    event.create('vengeful_ichor')
    event.create('hellforged_determinant')
    event.create('bound_djinni_seal')
    event.create('afrit_bound_core')
    event.create('marid_dominion_matrix')
    event.create('otherworld_convergence_core')

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

    let ritualDummies = ['resonant_gravitite_core', 'prima_materia_ingot', 'bound_gravitic_core', 'empyrean_core', 'wraithware_processor', 'wraith_sigil']
    ritualDummies.forEach(name => {
        event.create('ritual_dummy_' + name, 'occultism:ritual_dummy')
            .displayName('Ritual: ' + name)
    })

    // --- Magic microcrafting: Circuit + Component items (per docs/superpowers/specs/2026-07-29-magic-microcrafting-components-design.md) ---
    // Textures borrowed from GT's own tiered part icons so each item reads at a glance:
    // blank circuit board -> finished processor (ladder by tier), Wizard Brain -> robot_arm
    // (decision-making), Motive Core -> electric_motor (kinetic), Channeling Vessel -> electric_pump
    // (flow), Ward Lattice -> field_generator (containment). Hobbyist has no sub-LV GT analog, so
    // it reuses LV's icon set.

    // Hobbyist
    event.create('ichor_sigil_blank')
    event.create('ichor_sigil')
    event.create('ichor_wizard_brain')
    event.create('ichor_motive_core')
    event.create('ichor_channeling_vessel')
    event.create('ichor_ward_lattice')

    // Apprentice (LV)
    event.create('zanite_sigil_blank')
    event.create('zanite_sigil')
    event.create('zanite_wizard_brain')
    event.create('zanite_motive_core')
    event.create('zanite_channeling_vessel')
    event.create('zanite_ward_lattice')

    // Journeyman (MV)
    event.create('veridian_sigil_blank')
    event.create('veridian_sigil')
    event.create('veridian_wizard_brain')
    event.create('veridian_motive_core')
    event.create('veridian_channeling_vessel')
    event.create('veridian_ward_lattice')

    // Initiate (HV)
    event.create('elementium_sigil_blank')
    event.create('elementium_sigil')
    event.create('elementium_wizard_brain')
    event.create('elementium_motive_core')
    event.create('elementium_channeling_vessel')
    event.create('elementium_ward_lattice')

    // Sorcerer (EV)
    event.create('gravitic_sigil_blank')
    event.create('gravitic_sigil')
    event.create('gravitic_wizard_brain')
    event.create('gravitic_motive_core')
    event.create('gravitic_channeling_vessel')
    event.create('gravitic_ward_lattice')

    // Alchemist (IV)
    event.create('animus_sigil_blank')
    event.create('animus_sigil')
    event.create('animus_wizard_brain')
    event.create('animus_motive_core')
    event.create('animus_channeling_vessel')
    event.create('animus_ward_lattice')

    // Thaumaturge (LuV)
    event.create('starforged_sigil_blank')
    event.create('starforged_sigil')
    event.create('starforged_wizard_brain')
    event.create('starforged_motive_core')
    event.create('starforged_channeling_vessel')
    event.create('starforged_ward_lattice')

    // Arcanist (ZPM)
    event.create('rubedo_sigil_blank')
    event.create('rubedo_sigil')
    event.create('rubedo_wizard_brain')
    event.create('rubedo_motive_core')
    event.create('rubedo_channeling_vessel')
    event.create('rubedo_ward_lattice')

    // Sage (UV)
    event.create('empyrean_sigil_blank')
    event.create('empyrean_sigil')
    event.create('empyrean_wizard_brain')
    event.create('empyrean_motive_core')
    event.create('empyrean_channeling_vessel')
    event.create('empyrean_ward_lattice')

    // Prophet (UHV) -- Blood Magic-themed circuit bridging to kubejs:argentware_processor_supercomputer
    event.create('argent_sigil_blank')
    event.create('argent_sigil')
    event.create('argent_wizard_brain')
    event.create('argent_motive_core')
    event.create('argent_channeling_vessel')
    event.create('argent_ward_lattice')

    // Ascendant (UIV) -- Occultism-themed circuit bridging to kubejs:wraithware_processor_mainframe
    event.create('wraith_sigil_blank')
    event.create('wraith_sigil')
    event.create('wraith_wizard_brain')
    event.create('wraith_motive_core')
    event.create('wraith_channeling_vessel')
    event.create('wraith_ward_lattice')
})
