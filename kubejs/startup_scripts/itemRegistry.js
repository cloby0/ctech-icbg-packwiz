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
    event.create('warded_smd_diode').texture('gtceu:item/advanced_smd_diode')
    event.create('warded_smd_capacitor').texture('gtceu:item/advanced_smd_capacitor')
    event.create('warded_smd_transistor').texture('gtceu:item/advanced_smd_transistor')
    event.create('warded_smd_resistor').texture('gtceu:item/advanced_smd_resistor')
    event.create('warded_smd_inductor').texture('gtceu:item/advanced_smd_inductor')

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
    event.create('ichor_sigil_blank').texture('gtceu:item/phenolic_circuit_board')
    event.create('ichor_sigil').texture('gtceu:item/basic_integrated_circuit')
    event.create('ichor_wizard_brain').texture('gtceu:item/lv_robot_arm')
    event.create('ichor_motive_core').texture('gtceu:item/lv_electric_motor')
    event.create('ichor_channeling_vessel').texture('gtceu:item/lv_electric_pump')
    event.create('ichor_ward_lattice').texture('gtceu:item/lv_field_generator')

    // Apprentice (LV)
    event.create('zanite_sigil_blank').texture('gtceu:item/plastic_circuit_board')
    event.create('zanite_sigil').texture('gtceu:item/basic_integrated_circuit')
    event.create('zanite_wizard_brain').texture('gtceu:item/lv_robot_arm')
    event.create('zanite_motive_core').texture('gtceu:item/lv_electric_motor')
    event.create('zanite_channeling_vessel').texture('gtceu:item/lv_electric_pump')
    event.create('zanite_ward_lattice').texture('gtceu:item/lv_field_generator')

    // Journeyman (MV)
    event.create('veridian_sigil_blank').texture('gtceu:item/resin_circuit_board')
    event.create('veridian_sigil').texture('gtceu:item/good_integrated_circuit')
    event.create('veridian_wizard_brain').texture('gtceu:item/mv_robot_arm')
    event.create('veridian_motive_core').texture('gtceu:item/mv_electric_motor')
    event.create('veridian_channeling_vessel').texture('gtceu:item/mv_electric_pump')
    event.create('veridian_ward_lattice').texture('gtceu:item/mv_field_generator')

    // Initiate (HV)
    event.create('elementium_sigil_blank').texture('gtceu:item/epoxy_circuit_board')
    event.create('elementium_sigil').texture('gtceu:item/advanced_integrated_circuit')
    event.create('elementium_wizard_brain').texture('gtceu:item/hv_robot_arm')
    event.create('elementium_motive_core').texture('gtceu:item/hv_electric_motor')
    event.create('elementium_channeling_vessel').texture('gtceu:item/hv_electric_pump')
    event.create('elementium_ward_lattice').texture('gtceu:item/hv_field_generator')

    // Sorcerer (EV)
    event.create('gravitic_sigil_blank').texture('gtceu:item/fiber_reinforced_circuit_board')
    event.create('gravitic_sigil').texture('gtceu:item/nano_processor_assembly')
    event.create('gravitic_wizard_brain').texture('gtceu:item/ev_robot_arm')
    event.create('gravitic_motive_core').texture('gtceu:item/ev_electric_motor')
    event.create('gravitic_channeling_vessel').texture('gtceu:item/ev_electric_pump')
    event.create('gravitic_ward_lattice').texture('gtceu:item/ev_field_generator')

    // Alchemist (IV)
    event.create('animus_sigil_blank').texture('gtceu:item/multilayer_fiber_reinforced_circuit_board')
    event.create('animus_sigil').texture('gtceu:item/nano_processor_computer')
    event.create('animus_wizard_brain').texture('gtceu:item/iv_robot_arm')
    event.create('animus_motive_core').texture('gtceu:item/iv_electric_motor')
    event.create('animus_channeling_vessel').texture('gtceu:item/iv_electric_pump')
    event.create('animus_ward_lattice').texture('gtceu:item/iv_field_generator')

    // Thaumaturge (LuV)
    event.create('starforged_sigil_blank').texture('gtceu:item/wetware_circuit_board')
    event.create('starforged_sigil').texture('gtceu:item/nano_processor_mainframe')
    event.create('starforged_wizard_brain').texture('gtceu:item/luv_robot_arm')
    event.create('starforged_motive_core').texture('gtceu:item/luv_electric_motor')
    event.create('starforged_channeling_vessel').texture('gtceu:item/luv_electric_pump')
    event.create('starforged_ward_lattice').texture('gtceu:item/luv_field_generator')

    // Arcanist (ZPM)
    event.create('rubedo_sigil_blank').texture('gtceu:item/wetware_printed_circuit_board')
    event.create('rubedo_sigil').texture('gtceu:item/crystal_processor_computer')
    event.create('rubedo_wizard_brain').texture('gtceu:item/zpm_robot_arm')
    event.create('rubedo_motive_core').texture('gtceu:item/zpm_electric_motor')
    event.create('rubedo_channeling_vessel').texture('gtceu:item/zpm_electric_pump')
    event.create('rubedo_ward_lattice').texture('gtceu:item/zpm_field_generator')

    // Sage (UV)
    event.create('empyrean_sigil_blank').texture('gtceu:item/multilayer_fiber_reinforced_printed_circuit_board')
    event.create('empyrean_sigil').texture('gtceu:item/crystal_processor_mainframe')
    event.create('empyrean_wizard_brain').texture('gtceu:item/uv_robot_arm')
    event.create('empyrean_motive_core').texture('gtceu:item/uv_electric_motor')
    event.create('empyrean_channeling_vessel').texture('gtceu:item/uv_electric_pump')
    event.create('empyrean_ward_lattice').texture('gtceu:item/uv_field_generator')

    // Prophet (UHV) -- Blood Magic-themed circuit bridging to kubejs:argentware_processor_supercomputer
    event.create('argent_sigil_blank').texture('gtceu:item/wetware_circuit_board')
    event.create('argent_sigil').texture('gtceu:item/micro_processor_mainframe')
    event.create('argent_wizard_brain').texture('gtceu:item/uhv_robot_arm')
    event.create('argent_motive_core').texture('gtceu:item/uhv_electric_motor')
    event.create('argent_channeling_vessel').texture('gtceu:item/uhv_electric_pump')
    event.create('argent_ward_lattice').texture('gtceu:item/uhv_field_generator')

    // Ascendant (UIV) -- Occultism-themed circuit bridging to kubejs:wraithware_processor_mainframe
    event.create('wraith_sigil_blank').texture('gtceu:item/wetware_printed_circuit_board')
    event.create('wraith_sigil').texture('gtceu:item/quantum_processor_mainframe')
    event.create('wraith_wizard_brain').texture('gtceu:item/uiv_robot_arm')
    event.create('wraith_motive_core').texture('gtceu:item/uiv_electric_motor')
    event.create('wraith_channeling_vessel').texture('gtceu:item/uiv_electric_pump')
    event.create('wraith_ward_lattice').texture('gtceu:item/uiv_field_generator')
})
