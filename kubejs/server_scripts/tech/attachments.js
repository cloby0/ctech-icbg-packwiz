ServerEvents.recipes(event => {



    event.shaped(Item.of('tacz:attachment', '{AttachmentId:"tacz:extended_mag_1"}'),
        ['PBP', 'BRB', 'PBP'],
        { P: 'create:iron_sheet', B: 'gtceu:steel_bolt', R: 'gtceu:steel_ring' })

    event.shaped(Item.of('tacz:attachment', '{AttachmentId:"tacz:extended_mag_2"}'),
        ['PBP', 'BRB', 'PBP'],
        { P: 'gtceu:stainless_steel_plate', B: 'gtceu:aluminium_bolt', R: 'gtceu:aluminium_ring' })

    event.shaped(Item.of('tacz:attachment', '{AttachmentId:"tacz:extended_mag_3"}'),
        ['PBP', 'BCB', 'PBP'],
        { P: 'gtceu:aluminium_plate', B: 'gtceu:aluminium_bolt', C: '#gtceu:circuits/lv' })


    event.shaped(Item.of('tacz:attachment', '{AttachmentId:"tacz:light_extended_mag_1"}'),
        ['P P', 'PRP', 'P P'],
        { P: 'gtceu:aluminium_plate', R: 'gtceu:aluminium_ring' })

    event.shaped(Item.of('tacz:attachment', '{AttachmentId:"tacz:light_extended_mag_2"}'),
        ['PBP', 'BRB', 'PBP'],
        { P: 'gtceu:aluminium_plate', B: 'gtceu:aluminium_bolt', R: 'gtceu:aluminium_ring' })

    event.shaped(Item.of('tacz:attachment', '{AttachmentId:"tacz:light_extended_mag_3"}'),
        ['PBP', 'BCB', 'PBP'],
        { P: 'gtceu:titanium_plate', B: 'gtceu:aluminium_bolt', C: 'gtceu:aluminium_ring' })


    event.shaped(Item.of('tacz:attachment', '{AttachmentId:"tacz:shotgun_extended_mag_1"}'),
        ['PRP', 'RRR', 'PRP'],
        { P: 'create:iron_sheet', R: 'gtceu:steel_ring' })

    event.shaped(Item.of('tacz:attachment', '{AttachmentId:"tacz:shotgun_extended_mag_2"}'),
        ['PBP', 'BRB', 'PBP'],
        { P: 'gtceu:steel_plate', B: 'gtceu:steel_bolt', R: 'gtceu:steel_ring' })

    event.shaped(Item.of('tacz:attachment', '{AttachmentId:"tacz:shotgun_extended_mag_3"}'),
        ['PBP', 'BRB', 'PBP'],
        { P: 'gtceu:stainless_steel_plate', B: 'gtceu:steel_bolt', R: 'gtceu:stainless_steel_ring' })


    event.shaped(Item.of('tacz:attachment', '{AttachmentId:"tacz:sniper_extended_mag_1"}'),
        ['PBP', 'BRB', 'PBP'],
        { P: 'create:iron_sheet', B: 'gtceu:brass_bolt', R: 'gtceu:steel_ring' })

    event.shaped(Item.of('tacz:attachment', '{AttachmentId:"tacz:sniper_extended_mag_2"}'),
        ['PBP', 'BRB', 'PBP'],
        { P: 'gtceu:aluminium_plate', B: 'gtceu:stainless_steel_bolt', R: 'gtceu:aluminium_ring' })

    event.shaped(Item.of('tacz:attachment', '{AttachmentId:"tacz:sniper_extended_mag_3"}'),
        ['PBP', 'BCB', 'PBP'],
        { P: 'gtceu:titanium_plate', B: 'gtceu:titanium_bolt', C: '#gtceu:circuits/mv' })


    event.shaped(Item.of('tacz:attachment', '{AttachmentId:"tacz:grip_cobra"}'),
        ['RPR', 'PBP', 'RPR'],
        { R: 'gtceu:rubber_plate', P: 'gtceu:steel_rod', B: 'gtceu:steel_bolt' })

    event.shaped(Item.of('tacz:attachment', '{AttachmentId:"tacz:grip_td"}'),
        [' P ', 'PBP', ' P '],
        { P: 'gtceu:steel_rod', B: 'gtceu:rubber_plate' })

    event.shaped(Item.of('tacz:attachment', '{AttachmentId:"tacz:grip_rk0"}'),
        ['SRS', 'RBR', 'SRS'],
        { S: 'gtceu:steel_plate', R: 'gtceu:rubber_plate', B: 'gtceu:steel_bolt' })

    event.shaped(Item.of('tacz:attachment', '{AttachmentId:"tacz:grip_rk6"}'),
        ['ARA', 'RBR', 'ARA'],
        { A: 'gtceu:aluminium_plate', R: 'gtceu:rubber_plate', B: 'gtceu:aluminium_bolt' })

    event.shaped(Item.of('tacz:attachment', '{AttachmentId:"tacz:grip_rk1_b25u"}'),
        ['ARA', 'RBR', 'ARA'],
        { A: 'gtceu:aluminium_rod', R: 'gtceu:rubber_plate', B: 'gtceu:aluminium_bolt' })

    event.shaped(Item.of('tacz:attachment', '{AttachmentId:"tacz:grip_se_5"}'),
        ['RAR', 'ABA', 'RAR'],
        { R: 'gtceu:rubber_plate', A: 'gtceu:aluminium_plate', B: 'gtceu:aluminium_bolt' })

    event.shaped(Item.of('tacz:attachment', '{AttachmentId:"tacz:grip_magpul_afg_2"}'),
        ['PAP', 'AAA', 'P P'],
        { P: 'gtceu:silicone_rubber_plate', A: 'gtceu:aluminium_plate' })

    event.shaped(Item.of('tacz:attachment', '{AttachmentId:"tacz:grip_osovets_black"}'),
        ['RSR', 'SBS', 'RSR'],
        { R: 'gtceu:silicone_rubber_plate', S: 'gtceu:stainless_steel_plate', B: 'gtceu:stainless_steel_bolt' })

    event.shaped(Item.of('tacz:attachment', '{AttachmentId:"tacz:grip_vertical_military"}'),
        [' A ', 'ARA', ' A '],
        { A: 'gtceu:aluminium_plate', R: 'gtceu:rubber_plate' })

    event.shaped(Item.of('tacz:attachment', '{AttachmentId:"tacz:grip_vertical_ranger"}'),
        ['RAR', 'ARA', 'RAR'],
        { R: 'gtceu:rubber_plate', A: 'gtceu:aluminium_rod' })

    event.shaped(Item.of('tacz:attachment', '{AttachmentId:"tacz:grip_vertical_talon"}'),
        [' S ', 'SBS', ' S '],
        { S: 'gtceu:stainless_steel_plate', B: 'gtceu:aluminium_bolt' })

    event.shaped(Item.of('tacz:attachment', '{AttachmentId:"tacz:grip_cqr"}'),
        ['P P', 'PBP', 'P P'],
        { P: 'gtceu:aluminium_plate', B: 'gtceu:rubber_plate' })


    event.shaped(Item.of('tacz:attachment', '{AttachmentId:"tacz:stock_ak12"}'),
        ['WRW', 'RBR', 'WRW'],
        { W: 'gtceu:treated_wood_plate', R: 'gtceu:steel_rod', B: 'gtceu:steel_bolt' })

    event.shaped(Item.of('tacz:attachment', '{AttachmentId:"tacz:stock_moe"}'),
        ['W W', 'WRW', 'W W'],
        { W: 'gtceu:treated_wood_plate', R: 'gtceu:steel_rod' })

    event.shaped(Item.of('tacz:attachment', '{AttachmentId:"tacz:stock_sba3"}'),
        ['WAW', 'ABA', 'WAW'],
        { W: 'gtceu:treated_wood_plate', A: 'gtceu:aluminium_rod', B: 'gtceu:aluminium_bolt' })

    event.shaped(Item.of('tacz:attachment', '{AttachmentId:"tacz:stock_m4ss"}'),
        ['W W', 'WAW', 'WBW'],
        { W: 'gtceu:treated_wood_plate', A: 'gtceu:aluminium_rod', B: 'gtceu:aluminium_bolt' })

    event.shaped(Item.of('tacz:attachment', '{AttachmentId:"tacz:stock_ripstock"}'),
        ['AWA', 'WBW', 'AWA'],
        { A: 'gtceu:aluminium_rod', W: 'gtceu:treated_wood_plate', B: 'gtceu:aluminium_bolt' })

    event.shaped(Item.of('tacz:attachment', '{AttachmentId:"tacz:stock_hk_slim_line"}'),
        ['WAW', 'ABA', 'WAW'],
        { W: 'gtceu:treated_wood_plate', A: 'gtceu:aluminium_plate', B: 'gtceu:aluminium_bolt' })

    event.shaped(Item.of('tacz:attachment', '{AttachmentId:"tacz:stock_militech_b5"}'),
        ['SAS', 'ABA', 'SAS'],
        { S: 'gtceu:stainless_steel_plate', A: 'gtceu:aluminium_rod', B: 'gtceu:aluminium_bolt' })

    event.shaped(Item.of('tacz:attachment', '{AttachmentId:"tacz:stock_carbon_bone_c5"}'),
        ['SWS', 'WBW', 'SWS'],
        { S: 'gtceu:stainless_steel_plate', W: 'gtceu:treated_wood_plate', B: 'gtceu:stainless_steel_bolt' })

    event.shaped(Item.of('tacz:attachment', '{AttachmentId:"tacz:stock_heavy_spas_12"}'),
        ['SWS', 'WAW', 'SWS'],
        { S: 'gtceu:stainless_steel_plate', W: 'gtceu:treated_wood_plate', A: 'gtceu:aluminium_rod' })

    event.shaped(Item.of('tacz:attachment', '{AttachmentId:"tacz:stock_tactical_spas_12"}'),
        ['SAS', 'ABA', 'SAS'],
        { S: 'gtceu:stainless_steel_plate', A: 'gtceu:aluminium_plate', B: 'gtceu:aluminium_bolt' })

    event.shaped(Item.of('tacz:attachment', '{AttachmentId:"tacz:stock_tactical_ar"}'),
        ['SAS', 'ACA', 'SAS'],
        { S: 'gtceu:stainless_steel_plate', A: 'gtceu:aluminium_plate', C: '#gtceu:circuits/lv' })

    event.shaped(Item.of('tacz:attachment', '{AttachmentId:"tacz:oem_stock_light"}'),
        ['AAA', 'AWA', 'AAA'],
        { A: 'gtceu:aluminium_plate', W: 'gtceu:treated_wood_plate' })

    event.shaped(Item.of('tacz:attachment', '{AttachmentId:"tacz:oem_stock_heavy"}'),
        ['SAA', 'AWA', 'AAS'],
        { S: 'gtceu:stainless_steel_plate', A: 'gtceu:aluminium_plate', W: 'gtceu:treated_wood_plate' })

    event.shaped(Item.of('tacz:attachment', '{AttachmentId:"tacz:oem_stock_tactical"}'),
        ['SAS', 'AWA', 'SAS'],
        { S: 'gtceu:stainless_steel_plate', A: 'gtceu:aluminium_plate', W: 'gtceu:treated_wood_plate' })


    event.shaped(Item.of('tacz:attachment', '{AttachmentId:"tacz:bayonet_6h3"}'),
        [' R ', 'PRP', ' B '],
        { P: 'create:iron_sheet', R: 'gtceu:aluminium_rod', B: 'gtceu:steel_bolt' })

    event.shaped(Item.of('tacz:attachment', '{AttachmentId:"tacz:bayonet_m9"}'),
        ['PAP', 'RAR', 'RBR'],
        { P: 'gtceu:aluminium_plate', A: 'gtceu:aluminium_rod', R: 'gtceu:rubber_plate', B: 'gtceu:steel_bolt' })


    event.shaped(Item.of('tacz:attachment', '{AttachmentId:"tacz:deagle_golden_long_barrel"}'),
        ['GHG', 'GHG', 'G G'],
        { G: 'create:golden_sheet', H: 'gtceu:steel_small_fluid_pipe' })


    event.shaped(Item.of('tacz:attachment', '{AttachmentId:"tacz:muzzle_brake_pioneer"}'),
        ['PHP', ' P ', 'PHP'],
        { P: 'gtceu:steel_plate', H: 'gtceu:steel_small_fluid_pipe' })

    event.shaped(Item.of('tacz:attachment', '{AttachmentId:"tacz:muzzle_brake_trex"}'),
        ['PHP', 'PBP', 'PHP'],
        { P: 'gtceu:steel_plate', H: 'gtceu:steel_small_fluid_pipe', B: 'gtceu:steel_bolt' })

    event.shaped(Item.of('tacz:attachment', '{AttachmentId:"tacz:muzzle_brake_cthulhu"}'),
        ['PHP', ' P ', 'PHP'],
        { P: 'gtceu:stainless_steel_plate', H: 'gtceu:stainless_steel_small_fluid_pipe' })

    event.shaped(Item.of('tacz:attachment', '{AttachmentId:"tacz:muzzle_brake_cyclone_d2"}'),
        ['PHP', 'PBP', 'PHP'],
        { P: 'gtceu:stainless_steel_plate', H: 'gtceu:stainless_steel_small_fluid_pipe', B: 'gtceu:stainless_steel_bolt' })

    event.shaped(Item.of('tacz:attachment', '{AttachmentId:"tacz:muzzle_brake_mastiff_sg"}'),
        ['PHP', 'PRP', 'PHP'],
        { P: 'gtceu:steel_plate', H: 'gtceu:steel_small_fluid_pipe', R: 'gtceu:rubber_plate' })

    event.shaped(Item.of('tacz:attachment', '{AttachmentId:"tacz:muzzle_brake_timeless50"}'),
        ['PHP', 'PAP', 'PHP'],
        { P: 'gtceu:stainless_steel_plate', H: 'gtceu:stainless_steel_small_fluid_pipe', A: 'gtceu:aluminium_bolt' })

    event.shaped(Item.of('tacz:attachment', '{AttachmentId:"tacz:muzzle_choke_sg"}'),
        [' H ', 'PHP', ' H '],
        { P: 'gtceu:stainless_steel_plate', H: 'gtceu:stainless_steel_small_fluid_pipe' })

    event.shaped(Item.of('tacz:attachment', '{AttachmentId:"tacz:muzzle_compensator_trident"}'),
        ['HAH', 'PAP', 'HAH'],
        { H: 'gtceu:stainless_steel_small_fluid_pipe', P: 'gtceu:stainless_steel_plate', A: 'gtceu:aluminium_plate' })


    event.shaped(Item.of('tacz:attachment', '{AttachmentId:"tacz:muzzle_silencer_knight_qd"}'),
        ['UHU', 'U U', 'PBP'],
        { U: 'gtceu:silicone_rubber_plate', H: 'gtceu:steel_small_fluid_pipe', P: 'gtceu:stainless_steel_plate', B: 'gtceu:steel_bolt' })

    event.shaped(Item.of('tacz:attachment', '{AttachmentId:"tacz:muzzle_silencer_mirage"}'),
        ['UHU', 'U U', 'PBP'],
        { U: 'gtceu:silicone_rubber_plate', H: 'gtceu:steel_small_fluid_pipe', P: 'gtceu:stainless_steel_plate', B: 'gtceu:aluminium_bolt' })

    event.shaped(Item.of('tacz:attachment', '{AttachmentId:"tacz:muzzle_silencer_phantom_s1"}'),
        ['UHU', 'U U', 'PBP'],
        { U: 'gtceu:silicone_rubber_plate', H: 'gtceu:stainless_steel_small_fluid_pipe', P: 'gtceu:stainless_steel_plate', B: 'gtceu:aluminium_bolt' })

    event.shaped(Item.of('tacz:attachment', '{AttachmentId:"tacz:muzzle_silencer_ptilopsis"}'),
        ['UHU', 'U U', 'PBP'],
        { U: 'gtceu:silicone_rubber_plate', H: 'gtceu:stainless_steel_small_fluid_pipe', P: 'gtceu:stainless_steel_plate', B: 'gtceu:stainless_steel_bolt' })

    event.shaped(Item.of('tacz:attachment', '{AttachmentId:"tacz:muzzle_silencer_ursus"}'),
        ['UHU', 'UHU', 'PBP'],
        { U: 'gtceu:silicone_rubber_plate', H: 'gtceu:stainless_steel_small_fluid_pipe', P: 'gtceu:stainless_steel_plate', B: 'gtceu:stainless_steel_bolt' })

    event.shaped(Item.of('tacz:attachment', '{AttachmentId:"tacz:muzzle_silencer_vulture"}'),
        ['UHU', 'UHU', 'PAP'],
        { U: 'gtceu:silicone_rubber_plate', H: 'gtceu:stainless_steel_small_fluid_pipe', P: 'gtceu:aluminium_plate', A: 'gtceu:aluminium_bolt' })

    event.shaped(Item.of('tacz:attachment', '{AttachmentId:"tacz:muzzle_silencer_wraith"}'),
        ['UHU', 'UHU', 'PAP'],
        { U: 'gtceu:silicone_rubber_plate', H: 'gtceu:stainless_steel_small_fluid_pipe', P: 'gtceu:stainless_steel_plate', A: 'gtceu:aluminium_bolt' })

    event.shaped(Item.of('tacz:attachment', '{AttachmentId:"tacz:muzzle_silencer_sg"}'),
        ['UHU', 'PHU', 'PHP'],
        { U: 'gtceu:silicone_rubber_plate', H: 'gtceu:stainless_steel_small_fluid_pipe', P: 'gtceu:stainless_steel_plate' })

    event.shaped(Item.of('tacz:attachment', '{AttachmentId:"tacz:muzzle_duckbill_sg"}'),
        ['P P', 'BPB', 'P P'],
        { P: 'gtceu:stainless_steel_plate', B: 'gtceu:steel_bolt' })


    event.shaped(Item.of('tacz:attachment', '{AttachmentId:"tacz:scope_98k"}'),
        ['PGP', 'PCR', 'PBP'],
        { P: 'gtceu:steel_plate', G: 'gtceu:glass_plate', C: 'gtceu:copper_rod', R: 'gtceu:steel_ring', B: 'gtceu:steel_bolt' })

    event.shaped(Item.of('tacz:attachment', '{AttachmentId:"tacz:scope_retro_2x"}'),
        ['PGP', 'PRG', 'PBP'],
        { P: 'create:iron_sheet', G: 'gtceu:glass_plate', R: 'gtceu:copper_rod', B: 'gtceu:steel_bolt' })

    event.shaped(Item.of('tacz:attachment', '{AttachmentId:"tacz:scope_contender"}'),
        ['PGP', 'GCG', 'PBP'],
        { P: 'gtceu:steel_plate', G: 'gtceu:glass_plate', C: 'gtceu:copper_rod', B: 'gtceu:steel_bolt' })

    event.shaped(Item.of('tacz:attachment', '{AttachmentId:"tacz:scope_qmk152"}'),
        ['PGP', 'PCP', 'PBP'],
        { P: 'gtceu:aluminium_plate', G: 'gtceu:glass_plate', C: '#gtceu:circuits/lv', B: 'gtceu:aluminium_bolt' })

    event.shaped(Item.of('tacz:attachment', '{AttachmentId:"tacz:scope_acog_ta31"}'),
        ['PGP', 'GCG', 'PBP'],
        { P: 'gtceu:aluminium_plate', G: 'gtceu:glass_plate', C: '#gtceu:circuits/lv', B: 'gtceu:aluminium_bolt' })

    event.shaped(Item.of('tacz:attachment', '{AttachmentId:"tacz:scope_aug_default"}'),
        ['PGP', 'GCG', 'GBG'],
        { P: 'gtceu:aluminium_plate', G: 'gtceu:glass_plate', C: '#gtceu:circuits/lv', B: 'gtceu:aluminium_bolt' })

    event.shaped(Item.of('tacz:attachment', '{AttachmentId:"tacz:scope_1873_6x"}'),
        ['PGG', 'PCP', 'PBP'],
        { P: 'gtceu:aluminium_plate', G: 'gtceu:glass_plate', C: '#gtceu:circuits/lv', B: 'gtceu:aluminium_bolt' })

    event.shaped(Item.of('tacz:attachment', '{AttachmentId:"tacz:scope_elcan_4x"}'),
        ['GGG', 'PCP', 'PBP'],
        { P: 'gtceu:aluminium_plate', G: 'gtceu:glass_plate', C: '#gtceu:circuits/lv', B: 'gtceu:aluminium_bolt' })

    event.shaped(Item.of('tacz:attachment', '{AttachmentId:"tacz:scope_hamr"}'),
        ['PPG', 'PCG', 'PPG'],
        { P: 'gtceu:aluminium_plate', G: 'gtceu:glass_plate', C: '#gtceu:circuits/lv' })

    event.shaped(Item.of('tacz:attachment', '{AttachmentId:"tacz:scope_lpvo_1_6"}'),
        ['PGP', 'PCP', 'PBP'],
        { P: 'gtceu:stainless_steel_plate', G: 'gtceu:glass_plate', C: '#gtceu:circuits/mv', B: 'gtceu:aluminium_bolt' })

    event.shaped(Item.of('tacz:attachment', '{AttachmentId:"tacz:scope_mk5hd"}'),
        ['PGP', 'GCG', 'PBP'],
        { P: 'gtceu:stainless_steel_plate', G: 'gtceu:glass_plate', C: '#gtceu:circuits/mv', B: 'gtceu:aluminium_bolt' })

    event.shaped(Item.of('tacz:attachment', '{AttachmentId:"tacz:scope_standard_8x"}'),
        ['GGG', 'PCP', 'PBP'],
        { P: 'gtceu:stainless_steel_plate', G: 'gtceu:glass_plate', C: '#gtceu:circuits/mv', B: 'gtceu:aluminium_bolt' })

    event.shaped(Item.of('tacz:attachment', '{AttachmentId:"tacz:scope_vudu"}'),
        ['PGG', 'PCG', 'PBP'],
        { P: 'gtceu:stainless_steel_plate', G: 'gtceu:glass_plate', C: '#gtceu:circuits/mv', B: 'gtceu:aluminium_bolt' })


    event.shaped(Item.of('tacz:attachment', '{AttachmentId:"tacz:sight_rmr_dot"}'),
        [' G ', 'PRP', ' B '],
        { G: 'gtceu:glass_plate', P: 'gtceu:aluminium_plate', R: 'gtceu:red_alloy_plate', B: 'gtceu:aluminium_bolt' })

    event.shaped(Item.of('tacz:attachment', '{AttachmentId:"tacz:sight_sro_dot"}'),
        ['PGP', 'PRP', 'PBP'],
        { P: 'gtceu:aluminium_plate', G: 'gtceu:glass_plate', R: 'gtceu:red_alloy_plate', B: 'gtceu:aluminium_bolt' })

    event.shaped(Item.of('tacz:attachment', '{AttachmentId:"tacz:sight_okp7"}'),
        [' G ', 'PRP', 'PBP'],
        { G: 'gtceu:glass_plate', P: 'gtceu:aluminium_plate', R: 'gtceu:red_alloy_plate', B: 'gtceu:aluminium_bolt' })

    event.shaped(Item.of('tacz:attachment', '{AttachmentId:"tacz:sight_pk06_pistol"}'),
        [' G ', 'ACA', ' B '],
        { G: 'gtceu:glass_plate', A: 'gtceu:aluminium_plate', C: '#gtceu:circuits/lv', B: 'gtceu:aluminium_bolt' })

    event.shaped(Item.of('tacz:attachment', '{AttachmentId:"tacz:sight_pk06_rifle"}'),
        ['AGA', 'ACA', ' B '],
        { G: 'gtceu:glass_plate', A: 'gtceu:aluminium_plate', C: '#gtceu:circuits/lv', B: 'gtceu:aluminium_bolt' })

    event.shaped(Item.of('tacz:attachment', '{AttachmentId:"tacz:sight_t1"}'),
        ['AGA', 'ACA', 'ABA'],
        { G: 'gtceu:glass_plate', A: 'gtceu:aluminium_plate', C: '#gtceu:circuits/lv', B: 'gtceu:aluminium_bolt' })

    event.shaped(Item.of('tacz:attachment', '{AttachmentId:"tacz:sight_t2"}'),
        ['AGA', 'CAC', 'ABA'],
        { G: 'gtceu:glass_plate', A: 'gtceu:aluminium_plate', C: '#gtceu:circuits/lv', B: 'gtceu:aluminium_bolt' })

    event.shaped(Item.of('tacz:attachment', '{AttachmentId:"tacz:sight_acro_pistol"}'),
        ['AGA', 'GCG', ' B '],
        { G: 'gtceu:glass_plate', A: 'gtceu:aluminium_plate', C: '#gtceu:circuits/lv', B: 'gtceu:aluminium_bolt' })

    event.shaped(Item.of('tacz:attachment', '{AttachmentId:"tacz:sight_acro_rifle"}'),
        ['AGA', 'GCG', 'ABA'],
        { G: 'gtceu:glass_plate', A: 'gtceu:aluminium_plate', C: '#gtceu:circuits/lv', B: 'gtceu:aluminium_bolt' })

    event.shaped(Item.of('tacz:attachment', '{AttachmentId:"tacz:sight_deltapoint_pistol"}'),
        ['GAG', 'ACA', ' B '],
        { G: 'gtceu:glass_plate', A: 'gtceu:aluminium_plate', C: '#gtceu:circuits/lv', B: 'gtceu:aluminium_bolt' })

    event.shaped(Item.of('tacz:attachment', '{AttachmentId:"tacz:sight_deltapoint_rifle"}'),
        ['GAG', 'ACA', 'GAG'],
        { G: 'gtceu:glass_plate', A: 'gtceu:aluminium_plate', C: '#gtceu:circuits/lv' })

    event.shaped(Item.of('tacz:attachment', '{AttachmentId:"tacz:sight_fastfire_pistol"}'),
        ['GAG', 'CAC', ' B '],
        { G: 'gtceu:glass_plate', A: 'gtceu:aluminium_plate', C: '#gtceu:circuits/lv', B: 'gtceu:aluminium_bolt' })

    event.shaped(Item.of('tacz:attachment', '{AttachmentId:"tacz:sight_fastfire_rifle"}'),
        ['GAG', 'CAC', 'GAG'],
        { G: 'gtceu:glass_plate', A: 'gtceu:aluminium_plate', C: '#gtceu:circuits/lv' })

    event.shaped(Item.of('tacz:attachment', '{AttachmentId:"tacz:sight_552"}'),
        ['SAS', 'GCG', 'SBS'],
        { S: 'gtceu:stainless_steel_plate', G: 'gtceu:glass_plate', C: '#gtceu:circuits/lv', A: 'gtceu:aluminium_plate', B: 'gtceu:aluminium_bolt' })

    event.shaped(Item.of('tacz:attachment', '{AttachmentId:"tacz:sight_coyote"}'),
        ['SAS', 'GCG', 'SAS'],
        { S: 'gtceu:stainless_steel_plate', G: 'gtceu:glass_plate', C: '#gtceu:circuits/lv', A: 'gtceu:aluminium_plate' })

    event.shaped(Item.of('tacz:attachment', '{AttachmentId:"tacz:sight_exp3"}'),
        ['SGS', 'GCG', 'SBS'],
        { S: 'gtceu:stainless_steel_plate', G: 'gtceu:glass_plate', C: '#gtceu:circuits/lv', B: 'gtceu:aluminium_bolt' })

    event.shaped(Item.of('tacz:attachment', '{AttachmentId:"tacz:sight_p90"}'),
        ['GSG', 'GCG', 'GSG'],
        { S: 'gtceu:stainless_steel_plate', G: 'gtceu:glass_plate', C: '#gtceu:circuits/lv' })

    event.shaped(Item.of('tacz:attachment', '{AttachmentId:"tacz:sight_uh1"}'),
        ['SGS', 'GCG', 'GSG'],
        { S: 'gtceu:stainless_steel_plate', G: 'gtceu:glass_plate', C: '#gtceu:circuits/lv' })

    event.shaped(Item.of('tacz:attachment', '{AttachmentId:"tacz:sight_srs_02"}'),
        ['SAS', 'GCG', 'SAS'],
        { S: 'gtceu:stainless_steel_plate', G: 'gtceu:glass_plate', C: '#gtceu:circuits/lv', A: 'gtceu:aluminium_bolt' })


    event.shaped(Item.of('tacz:attachment', '{AttachmentId:"tacz:laser_compact"}'),
        [' C ', 'PRP', ' B '],
        { P: 'create:iron_sheet', R: 'gtceu:red_alloy_plate', C: '#gtceu:circuits/lv', B: 'gtceu:steel_bolt' })

    event.shaped(Item.of('tacz:attachment', '{AttachmentId:"tacz:laser_lopro"}'),
        ['PCP', 'PRP', ' B '],
        { P: 'create:iron_sheet', R: 'gtceu:red_alloy_plate', C: '#gtceu:circuits/lv', B: 'gtceu:steel_bolt' })

    event.shaped(Item.of('tacz:attachment', '{AttachmentId:"tacz:laser_nightstick"}'),
        ['PCP', 'PRP', 'PBP'],
        { P: 'gtceu:aluminium_plate', R: 'gtceu:red_alloy_plate', C: '#gtceu:circuits/lv', B: 'gtceu:aluminium_bolt' })

    event.shaped(Item.of('tacz:attachment', '{AttachmentId:"tacz:laser_peq6"}'),
        ['ACA', 'ARA', 'ABA'],
        { A: 'gtceu:aluminium_plate', R: 'gtceu:red_alloy_plate', C: '#gtceu:circuits/lv', B: 'gtceu:aluminium_bolt' })

    event.shaped(Item.of('tacz:attachment', '{AttachmentId:"tacz:laser_peq15"}'),
        ['SCS', 'SRS', 'SBS'],
        { S: 'gtceu:stainless_steel_plate', R: 'gtceu:red_alloy_plate', C: '#gtceu:circuits/mv', B: 'gtceu:aluminium_bolt' })


    event.shaped(Item.of('tacz:attachment', '{AttachmentId:"tacz:ammo_mod_fmj"}'),
        ['SLS', 'LBL', 'SLS'],
        { S: 'create:iron_sheet', L: 'gtceu:lead_ingot', B: 'gtceu:steel_bolt' })

    event.shaped(Item.of('tacz:attachment', '{AttachmentId:"tacz:ammo_mod_hp"}'),
        ['LRL', 'RBR', 'LRL'],
        { L: 'gtceu:lead_ingot', R: 'gtceu:steel_rod', B: 'gtceu:steel_bolt' })

    event.shaped(Item.of('tacz:attachment', '{AttachmentId:"tacz:ammo_mod_he"}'),
        ['TET', 'EBE', 'TET'],
        { T: 'minecraft:tnt', E: 'gtceu:electrum_plate', B: 'minecraft:blaze_powder' })

    event.shaped(Item.of('tacz:attachment', '{AttachmentId:"tacz:ammo_mod_i"}'),
        ['CMC', 'MBM', 'CMC'],
        { C: 'create:copper_sheet', M: 'gtceu:magnesium_dust', B: 'minecraft:blaze_powder' })

    event.shaped(Item.of('tacz:attachment', '{AttachmentId:"tacz:ammo_mod_slug"}'),
        ['LRL', 'RBR', 'LRL'],
        { L: 'gtceu:lead_ingot', R: 'gtceu:steel_rod', B: 'gtceu:brass_bolt' })



    event.shaped(Item.of('tacz:attachment', '{AttachmentId:"create_armorer:extended_mag_ca_1"}'),
        ['IAI', 'ARA', 'IAI'],
        { I: 'create:iron_sheet', A: 'create:andesite_alloy', R: 'gtceu:steel_ring' })

    event.shaped(Item.of('tacz:attachment', '{AttachmentId:"create_armorer:extended_mag_ca_2"}'),
        ['CBC', 'BRB', 'CBC'],
        { C: 'create:copper_sheet', B: 'gtceu:brass_bolt', R: 'gtceu:steel_ring' })

    event.shaped(Item.of('tacz:attachment', '{AttachmentId:"create_armorer:extended_mag_ca_3"}'),
        ['GBG', 'BCB', 'GBG'],
        { G: 'create:golden_sheet', B: 'gtceu:brass_bolt', C: '#gtceu:circuits/lv' })


    event.shaped(Item.of('tacz:attachment', '{AttachmentId:"create_armorer:grip_wooden"}'),
        ['WIW', 'IBI', 'WIW'],
        { W: 'gtceu:treated_wood_plate', I: 'create:iron_sheet', B: 'gtceu:steel_bolt' })

    event.shaped(Item.of('tacz:attachment', '{AttachmentId:"create_armorer:grip_shaft"}'),
        ['WSW', 'SBS', 'WSW'],
        { W: 'gtceu:treated_wood_plate', S: 'greate:steel_shaft', B: 'gtceu:steel_bolt' })

    event.shaped(Item.of('tacz:attachment', '{AttachmentId:"create_armorer:grip_gantry_shaft"}'),
        ['IGI', 'GBG', 'IGI'],
        { I: 'gtceu:steel_plate', G: 'create:gantry_shaft', B: 'gtceu:steel_bolt' })


    event.shaped(Item.of('tacz:attachment', '{AttachmentId:"create_armorer:muzzle_refit_iron_spike"}'),
        [' R ', 'IRI', ' B '],
        { I: 'create:iron_sheet', R: 'gtceu:steel_rod', B: 'gtceu:steel_bolt' })

    event.shaped(Item.of('tacz:attachment', '{AttachmentId:"create_armorer:muzzle_refit_brass_retractor"}'),
        ['CBC', 'BCB', 'CBC'],
        { C: 'create:copper_sheet', B: 'gtceu:brass_bolt' })

    event.shaped(Item.of('tacz:attachment', '{AttachmentId:"create_armorer:muzzle_refit_bigger_cylinder"}'),
        ['IHI', 'HLH', 'IHI'],
        { I: 'create:iron_sheet', H: 'gtceu:steel_small_fluid_pipe', L: 'minecraft:lapis_lazuli' })

    event.shaped(Item.of('tacz:attachment', '{AttachmentId:"create_armorer:muzzle_refit_energy_blade"}'),
        ['GEG', 'EBE', 'GEG'],
        { G: 'gtceu:glass_plate', E: 'gtceu:electrum_plate', B: 'gtceu:steel_bolt' })

    event.shaped(Item.of('tacz:attachment', '{AttachmentId:"create_armorer:muzzle_refit_lava_perfusion_bottle"}'),
        ['IHI', 'HVH', 'IHI'],
        { I: 'create:iron_sheet', H: 'gtceu:steel_small_fluid_pipe', V: 'minecraft:lava_bucket' })

    event.shaped(Item.of('tacz:attachment', '{AttachmentId:"create_armorer:refit_blasting_protocol"}'),
        ['BCB', 'CGC', 'BCB'],
        { B: 'create:brass_sheet', C: '#gtceu:circuits/lv', G: 'minecraft:gunpowder' })

    event.shaped(Item.of('tacz:attachment', '{AttachmentId:"create_armorer:muzzle_refit_ap_grenade"}'),
        ['BAB', 'AGA', 'BAB'],
        { B: 'create:brass_sheet', A: 'create:andesite_alloy', G: 'minecraft:gunpowder' })


    event.shaped(Item.of('tacz:attachment', '{AttachmentId:"create_armorer:sight_simple"}'),
        [' C ', 'ICI', ' B '],
        { I: 'create:copper_sheet', C: 'create:andesite_alloy', B: 'gtceu:steel_bolt' })

    event.shaped(Item.of('tacz:attachment', '{AttachmentId:"create_armorer:sight_standard"}'),
        ['IGI', 'GCG', ' B '],
        { I: 'create:copper_sheet', G: 'gtceu:glass_plate', C: 'gtceu:copper_rod', B: 'gtceu:steel_bolt' })

    event.shaped(Item.of('tacz:attachment', '{AttachmentId:"create_armorer:sight_reflex"}'),
        ['AGA', 'ACA', ' B '],
        { A: 'gtceu:aluminium_plate', G: 'gtceu:glass_plate', C: '#gtceu:circuits/lv', B: 'gtceu:aluminium_bolt' })

    event.shaped(Item.of('tacz:attachment', '{AttachmentId:"create_armorer:sight_medium_distance"}'),
        ['AGA', 'GCG', 'ABA'],
        { A: 'gtceu:aluminium_plate', G: 'gtceu:glass_plate', C: '#gtceu:circuits/lv', B: 'gtceu:aluminium_bolt' })

    event.shaped(Item.of('tacz:attachment', '{AttachmentId:"create_armorer:scope_telephoto"}'),
        ['GGG', 'ACA', 'ABA'],
        { A: 'gtceu:aluminium_plate', G: 'gtceu:glass_plate', C: '#gtceu:circuits/lv', B: 'gtceu:aluminium_bolt' })



    event.shaped(Item.of('tacz:attachment', '{AttachmentId:"immersive_armorer:extended_capacitor_1"}'),
        ['SCS', 'CGC', 'SCS'],
        { S: 'gtceu:stainless_steel_plate', C: 'create:copper_sheet', G: 'gtceu:glass_plate' })

    event.shaped(Item.of('tacz:attachment', '{AttachmentId:"immersive_armorer:extended_capacitor_2"}'),
        ['SCS', 'CAC', 'SCS'],
        { S: 'gtceu:stainless_steel_plate', C: 'create:copper_sheet', A: 'gtceu:aluminium_bolt' })

    event.shaped(Item.of('tacz:attachment', '{AttachmentId:"immersive_armorer:extended_capacitor_3"}'),
        ['SES', 'ECE', 'SES'],
        { S: 'gtceu:stainless_steel_plate', E: 'gtceu:electrum_plate', C: '#gtceu:circuits/mv' })


    event.shaped(Item.of('tacz:attachment', '{AttachmentId:"immersive_armorer:extended_jar_1"}'),
        ['IHI', 'H H', 'IHI'],
        { I: 'create:iron_sheet', H: 'gtceu:stainless_steel_small_fluid_pipe' })

    event.shaped(Item.of('tacz:attachment', '{AttachmentId:"immersive_armorer:extended_jar_2"}'),
        ['SHS', 'H H', 'SHS'],
        { S: 'gtceu:stainless_steel_plate', H: 'gtceu:stainless_steel_small_fluid_pipe' })

    event.shaped(Item.of('tacz:attachment', '{AttachmentId:"immersive_armorer:extended_jar_3"}'),
        ['SHS', 'HAH', 'SHS'],
        { S: 'gtceu:stainless_steel_plate', H: 'gtceu:stainless_steel_small_fluid_pipe', A: 'gtceu:aluminium_bolt' })


    event.shaped(Item.of('tacz:attachment', '{AttachmentId:"immersive_armorer:grip_treated_wood"}'),
        ['WIW', 'IBI', 'WIW'],
        { W: 'gtceu:treated_wood_plate', I: 'gtceu:steel_plate', B: 'gtceu:steel_bolt' })

    event.shaped(Item.of('tacz:attachment', '{AttachmentId:"immersive_armorer:grip_treated_wood_light"}'),
        ['WAW', 'A A', 'WAW'],
        { W: 'gtceu:treated_wood_plate', A: 'gtceu:aluminium_bolt' })

    event.shaped(Item.of('tacz:attachment', '{AttachmentId:"immersive_armorer:grip_twined"}'),
        ['FGF', 'FGF', 'FGF'],
        { F: 'gtceu:copper_single_wire', G: Item.of('tacz:attachment', '{AttachmentId:"immersive_armorer:grip_treated_wood"}') })


    event.shaped(Item.of('tacz:attachment', '{AttachmentId:"immersive_armorer:stock_crude"}'),
        ['W W', 'WAW', 'W W'],
        { W: 'gtceu:treated_wood_plate', A: 'gtceu:aluminium_rod' })

    event.shaped(Item.of('tacz:attachment', '{AttachmentId:"immersive_armorer:stock_simple"}'),
        ['WAW', 'ARA', 'WAW'],
        { W: 'gtceu:treated_wood_plate', A: 'gtceu:aluminium_rod', R: 'gtceu:steel_ring' })

    event.shaped(Item.of('tacz:attachment', '{AttachmentId:"immersive_armorer:stock_heavy"}'),
        ['SWS', 'WAW', 'SWS'],
        { S: 'gtceu:stainless_steel_plate', W: 'gtceu:treated_wood_plate', A: 'gtceu:aluminium_bolt' })

    event.shaped(Item.of('tacz:attachment', '{AttachmentId:"immersive_armorer:stock_bracket"}'),
        ['SAS', 'ABA', 'SAS'],
        { S: 'gtceu:stainless_steel_plate', A: 'gtceu:aluminium_rod', B: 'gtceu:steel_bolt' })

    event.shaped(Item.of('tacz:attachment', '{AttachmentId:"immersive_armorer:stock_steady"}'),
        ['WUW', 'UAU', 'WUW'],
        { W: 'gtceu:treated_wood_plate', U: 'gtceu:silicone_rubber_plate', A: 'gtceu:aluminium_rod' })


    event.shaped(Item.of('tacz:attachment', '{AttachmentId:"immersive_armorer:bayonet_revolver"}'),
        ['GAP', 'AAP', 'GAP'],
        { G: 'create:golden_sheet', A: 'gtceu:aluminium_plate', P: 'gtceu:treated_wood_plate' })


    event.shaped(Item.of('tacz:attachment', '{AttachmentId:"immersive_armorer:muzzle_extended_barrel"}'),
        ['HSH', 'S S', 'HSH'],
        { S: 'gtceu:stainless_steel_plate', H: 'gtceu:stainless_steel_small_fluid_pipe' })

    event.shaped(Item.of('tacz:attachment', '{AttachmentId:"immersive_armorer:muzzle_focused_nozzle"}'),
        ['AHA', 'HAH', 'AHA'],
        { A: 'gtceu:aluminium_plate', H: 'gtceu:stainless_steel_small_fluid_pipe' })

    event.shaped(Item.of('tacz:attachment', '{AttachmentId:"immersive_armorer:muzzle_refit_electromagnetic_accelerator"}'),
        ['ECE', 'CIC', 'ECE'],
        { E: 'gtceu:electrum_plate', C: 'create:iron_sheet', I: '#gtceu:circuits/mv' })

    event.shaped(Item.of('tacz:attachment', '{AttachmentId:"immersive_armorer:muzzle_refit_extra_heavy_barrel"}'),
        ['SHS', 'SAS', 'SHS'],
        { S: 'gtceu:stainless_steel_plate', H: 'gtceu:stainless_steel_small_fluid_pipe', A: 'gtceu:aluminium_bolt' })

    event.shaped(Item.of('tacz:attachment', '{AttachmentId:"immersive_armorer:muzzle_refit_extra_wires"}'),
        ['WIW', 'IWI', 'WIW'],
        { W: 'gtceu:copper_single_wire', I: 'create:iron_sheet' })

    event.shaped(Item.of('tacz:attachment', '{AttachmentId:"immersive_armorer:muzzle_refit_face_melter"}'),
        ['SBS', 'BAB', 'SBS'],
        { S: 'gtceu:stainless_steel_plate', B: 'minecraft:blaze_powder', A: 'gtceu:aluminium_bolt' })

    event.shaped(Item.of('tacz:attachment', '{AttachmentId:"immersive_armorer:muzzle_refit_fuel_stream_diffuser"}'),
        ['AHA', 'H H', 'AHA'],
        { A: 'gtceu:aluminium_plate', H: 'gtceu:stainless_steel_small_fluid_pipe' })

    event.shaped(Item.of('tacz:attachment', '{AttachmentId:"immersive_armorer:muzzle_refit_he_compound"}'),
        ['AGA', 'GBG', 'AGA'],
        { A: 'gtceu:aluminium_plate', G: 'create:golden_sheet', B: 'minecraft:blaze_powder' })

    event.shaped(Item.of('tacz:attachment', '{AttachmentId:"immersive_armorer:muzzle_refit_melted_metal_spitter"}'),
        ['GSG', 'SBS', 'GSG'],
        { G: 'create:golden_sheet', S: 'gtceu:stainless_steel_plate', B: 'gtceu:stainless_steel_bolt' })

    event.shaped(Item.of('tacz:attachment', '{AttachmentId:"immersive_armorer:muzzle_refit_pressure_wave"}'),
        ['CAC', 'ABA', 'CAC'],
        { C: 'create:copper_sheet', A: 'gtceu:aluminium_plate', B: 'minecraft:gunpowder' })


    event.shaped(Item.of('tacz:attachment', '{AttachmentId:"immersive_armorer:sight_simple_reflex"}'),
        ['IGI', 'GWG', ' B '],
        { I: 'create:iron_sheet', G: 'gtceu:glass_plate', W: 'gtceu:treated_wood_plate', B: 'gtceu:steel_bolt' })

    event.shaped(Item.of('tacz:attachment', '{AttachmentId:"immersive_armorer:sight_light"}'),
        ['AGA', 'ARA', ' B '],
        { A: 'gtceu:aluminium_plate', G: 'gtceu:glass_plate', R: 'gtceu:red_alloy_plate', B: 'gtceu:aluminium_bolt' })

    event.shaped(Item.of('tacz:attachment', '{AttachmentId:"immersive_armorer:sight_light_short"}'),
        ['AGA', 'GCG', ' B '],
        { A: 'gtceu:aluminium_plate', G: 'gtceu:glass_plate', C: '#gtceu:circuits/lv', B: 'gtceu:aluminium_bolt' })

    event.shaped(Item.of('tacz:attachment', '{AttachmentId:"immersive_armorer:scope_spyglass_ie"}'),
        ['GGG', 'ACA', 'ABA'],
        { A: 'gtceu:aluminium_plate', G: 'gtceu:glass_plate', C: '#gtceu:circuits/mv', B: 'create:golden_sheet' })



    event.shaped(Item.of('tacz:attachment', '{AttachmentId:"applied_armorer:extended_battery_aa_1"}'),
        ['TAT', 'ACA', 'TAT'],
        { T: 'gtceu:titanium_plate', A: 'ae2:certus_quartz_crystal', C: 'gtceu:aluminium_bolt' })

    event.shaped(Item.of('tacz:attachment', '{AttachmentId:"applied_armorer:extended_battery_aa_2"}'),
        ['TAT', 'ACA', 'TAT'],
        { T: 'gtceu:titanium_plate', A: 'ae2:charged_certus_quartz_crystal', C: '#gtceu:circuits/hv' })

    event.shaped(Item.of('tacz:attachment', '{AttachmentId:"applied_armorer:extended_battery_aa_3"}'),
        ['TFT', 'FCF', 'TFT'],
        { T: 'gtceu:titanium_plate', F: 'ae2:fluix_crystal', C: '#gtceu:circuits/ev' })


    event.shaped(Item.of('tacz:attachment', '{AttachmentId:"applied_armorer:extended_mag_aa_1"}'),
        ['TAT', 'ARA', 'TAT'],
        { T: 'gtceu:titanium_plate', A: 'ae2:certus_quartz_crystal', R: 'gtceu:titanium_ring' })

    event.shaped(Item.of('tacz:attachment', '{AttachmentId:"applied_armorer:extended_mag_aa_2"}'),
        ['TAT', 'ACA', 'TAT'],
        { T: 'gtceu:titanium_plate', A: 'ae2:certus_quartz_crystal', C: '#gtceu:circuits/hv' })

    event.shaped(Item.of('tacz:attachment', '{AttachmentId:"applied_armorer:extended_mag_aa_3"}'),
        ['TFT', 'FRF', 'TFT'],
        { T: 'gtceu:titanium_plate', F: 'ae2:fluix_crystal', R: 'gtceu:titanium_ring' })


    event.shaped(Item.of('tacz:attachment', '{AttachmentId:"applied_armorer:extended_mid_mag_aa_1"}'),
        ['TQT', 'QRQ', 'TQT'],
        { T: 'gtceu:titanium_plate', Q: 'ae2:charged_certus_quartz_crystal', R: 'gtceu:titanium_ring' })

    event.shaped(Item.of('tacz:attachment', '{AttachmentId:"applied_armorer:extended_mid_mag_aa_2"}'),
        ['TQT', 'QCQ', 'TQT'],
        { T: 'gtceu:titanium_plate', Q: 'ae2:charged_certus_quartz_crystal', C: '#gtceu:circuits/hv' })

    event.shaped(Item.of('tacz:attachment', '{AttachmentId:"applied_armorer:extended_mid_mag_aa_3"}'),
        ['TFT', 'TCT', 'TFT'],
        { T: 'gtceu:titanium_plate', F: 'ae2:fluix_crystal', C: '#gtceu:circuits/ev' })


    event.shaped(Item.of('tacz:attachment', '{AttachmentId:"applied_armorer:bayonet_er"}'),
        [' R ', 'TAT', ' B '],
        { T: 'gtceu:titanium_plate', R: 'gtceu:titanium_rod', A: 'ae2:certus_quartz_crystal', B: 'gtceu:titanium_bolt' })

    event.shaped(Item.of('tacz:attachment', '{AttachmentId:"applied_armorer:bayonet_gladius"}'),
        ['TAT', 'TAT', ' B '],
        { T: 'gtceu:titanium_plate', A: 'ae2:fluix_crystal', B: 'gtceu:titanium_bolt' })


    event.shaped(Item.of('tacz:attachment', '{AttachmentId:"applied_armorer:bracelet_niklas"}'),
        ['TAT', 'A A', 'TAT'],
        { T: 'gtceu:titanium_plate', A: 'ae2:certus_quartz_crystal' })

    event.shaped(Item.of('tacz:attachment', '{AttachmentId:"applied_armorer:bracelet_aerial_wristband"}'),
        [' A ', 'APA', ' A '],
        { A: 'ae2:certus_quartz_crystal', P: 'gtceu:aluminium_plate' })

    event.shaped(Item.of('tacz:attachment', '{AttachmentId:"applied_armorer:bracelet_magma_wristband"}'),
        ['AMA', 'MPA', 'AMA'],
        { A: 'ae2:certus_quartz_crystal', M: 'minecraft:magma_cream', P: 'gtceu:aluminium_plate' })

    event.shaped(Item.of('tacz:attachment', '{AttachmentId:"applied_armorer:bracelet_broken_watch"}'),
        ['ABA', 'BPB', 'ABA'],
        { A: 'ae2:certus_quartz_crystal', B: 'gtceu:copper_bolt', P: 'gtceu:aluminium_plate' })

    event.shaped(Item.of('tacz:attachment', '{AttachmentId:"applied_armorer:bracelet_broken_handcuffs"}'),
        ['TAT', 'ATA', 'TAT'],
        { T: 'gtceu:titanium_plate', A: 'ae2:certus_quartz_crystal' })

    event.shaped(Item.of('tacz:attachment', '{AttachmentId:"applied_armorer:bracelet_koeis_armband"}'),
        ['RAR', 'ATA', 'RAR'],
        { R: 'gtceu:rubber_plate', A: 'ae2:certus_quartz_crystal', T: 'gtceu:treated_wood_plate' })

    event.shaped(Item.of('tacz:attachment', '{AttachmentId:"applied_armorer:bracelet_exo"}'),
        ['TFT', 'FBF', 'TFT'],
        { T: 'gtceu:titanium_plate', F: 'ae2:fluix_crystal', B: 'minecraft:blaze_powder' })

    event.shapeless(Item.of('tacz:attachment', '{AttachmentId:"applied_armorer:bracelet_zenith"}'),
        [
            Item.of('tacz:attachment', '{AttachmentId:"applied_armorer:bracelet_niklas"}'),
            Item.of('tacz:attachment', '{AttachmentId:"applied_armorer:bracelet_aerial_wristband"}'),
            Item.of('tacz:attachment', '{AttachmentId:"applied_armorer:bracelet_magma_wristband"}'),
            Item.of('tacz:attachment', '{AttachmentId:"applied_armorer:bracelet_broken_watch"}'),
            Item.of('tacz:attachment', '{AttachmentId:"applied_armorer:bracelet_broken_handcuffs"}'),
            Item.of('tacz:attachment', '{AttachmentId:"applied_armorer:bracelet_koeis_armband"}'),
            Item.of('tacz:attachment', '{AttachmentId:"applied_armorer:bracelet_exo"}'),
            'ae2:fluix_crystal'
        ])


    event.shaped(Item.of('tacz:attachment', '{AttachmentId:"applied_armorer:grip_eazy"}'),
        ['TAT', 'ABA', 'TAT'],
        { T: 'gtceu:titanium_plate', A: 'ae2:certus_quartz_crystal', B: 'gtceu:titanium_bolt' })

    event.shaped(Item.of('tacz:attachment', '{AttachmentId:"applied_armorer:grip_lf11"}'),
        ['ATA', 'T T', 'ATA'],
        { T: 'gtceu:titanium_plate', A: 'ae2:certus_quartz_crystal' })

    event.shaped(Item.of('tacz:attachment', '{AttachmentId:"applied_armorer:grip_light"}'),
        [' A ', 'TAT', ' A '],
        { T: 'gtceu:titanium_plate', A: 'ae2:certus_quartz_crystal' })

    event.shaped(Item.of('tacz:attachment', '{AttachmentId:"applied_armorer:grip_stable"}'),
        ['TFT', 'F F', 'TFT'],
        { T: 'gtceu:titanium_plate', F: 'ae2:fluix_crystal' })

    event.shaped(Item.of('tacz:attachment', '{AttachmentId:"applied_armorer:grip_storm"}'),
        ['FTF', 'T T', 'FTF'],
        { T: 'gtceu:titanium_plate', F: 'ae2:fluix_crystal' })

    event.shaped(Item.of('tacz:attachment', '{AttachmentId:"applied_armorer:grip_sl_2"}'),
        ['TFT', 'FBF', 'TFT'],
        { T: 'gtceu:titanium_plate', F: 'ae2:fluix_crystal', B: 'gtceu:titanium_bolt' })

    event.shaped(Item.of('tacz:attachment', '{AttachmentId:"applied_armorer:grip_hf_17"}'),
        ['FTF', 'TBT', 'FTF'],
        { T: 'gtceu:titanium_plate', F: 'ae2:fluix_crystal', B: 'gtceu:titanium_bolt' })

    event.shaped(Item.of('tacz:attachment', '{AttachmentId:"applied_armorer:grip_static_1"}'),
        ['TFT', 'FAF', 'TFT'],
        { T: 'gtceu:titanium_plate', F: 'ae2:fluix_crystal', A: 'gtceu:aluminium_bolt' })


    event.shaped(Item.of('tacz:attachment', '{AttachmentId:"applied_armorer:muzzle_classic"}'),
        ['TBT', 'B B', 'TBT'],
        { T: 'gtceu:titanium_plate', B: 'gtceu:titanium_bolt' })

    event.shaped(Item.of('tacz:attachment', '{AttachmentId:"applied_armorer:muzzle_bs_mod4"}'),
        ['TBT', 'BAB', 'TBT'],
        { T: 'gtceu:titanium_plate', B: 'gtceu:titanium_bolt', A: 'gtceu:aluminium_bolt' })

    event.shaped(Item.of('tacz:attachment', '{AttachmentId:"applied_armorer:muzzle_ns_1"}'),
        ['TAT', 'TBT', 'TAT'],
        { T: 'gtceu:titanium_plate', A: 'ae2:certus_quartz_crystal', B: 'gtceu:titanium_bolt' })

    event.shaped(Item.of('tacz:attachment', '{AttachmentId:"applied_armorer:muzzle_commander"}'),
        ['TFT', 'TBT', 'TFT'],
        { T: 'gtceu:titanium_plate', F: 'ae2:fluix_crystal', B: 'gtceu:titanium_bolt' })


    event.shaped(Item.of('tacz:attachment', '{AttachmentId:"applied_armorer:muzzle_chip_pcs_x1"}'),
        ['LAL', 'ACA', 'LAL'],
        { L: 'ae2:calculation_processor', A: 'minecraft:lapis_lazuli', C: 'gtceu:titanium_bolt' })

    event.shaped(Item.of('tacz:attachment', '{AttachmentId:"applied_armorer:muzzle_chip_firefly"}'),
        ['LBL', 'BCB', 'LBL'],
        { L: 'ae2:logic_processor', B: 'minecraft:blaze_powder', C: 'gtceu:titanium_bolt' })

    event.shaped(Item.of('tacz:attachment', '{AttachmentId:"applied_armorer:muzzle_chip_firework"}'),
        [' F ', 'FTF', ' G '],
        { T: Item.of('tacz:attachment', '{AttachmentId:"applied_armorer:muzzle_chip_firefly"}'), F: 'minecraft:fire_charge', G: 'minecraft:tnt' })

    event.shaped(Item.of('tacz:attachment', '{AttachmentId:"applied_armorer:muzzle_chip_toxic_sword"}'),
        ['LAL', 'ACA', 'LAL'],
        { L: 'ae2:logic_processor', A: 'minecraft:spider_eye', C: 'ae2:certus_quartz_crystal' })

    event.shaped(Item.of('tacz:attachment', '{AttachmentId:"applied_armorer:muzzle_chip_wither_sword"}'),
        [' W ', 'TST', ' W '],
        { W: 'minecraft:wither_skeleton_skull', S: Item.of('tacz:attachment', '{AttachmentId:"applied_armorer:muzzle_chip_toxic_sword"}'), T: 'gtceu:titanium_plate' })

    event.shaped(Item.of('tacz:attachment', '{AttachmentId:"applied_armorer:muzzle_chip_tutorial_sword_mastery"}'),
        ['LGL', 'GBG', 'LGL'],
        { L: 'ae2:logic_processor', G: 'minecraft:glowstone_dust', B: 'minecraft:blaze_powder' })

    event.shaped(Item.of('tacz:attachment', '{AttachmentId:"applied_armorer:muzzle_chip_fat_boy"}'),
        ['EFE', 'FNF', 'EFE'],
        { E: 'ae2:engineering_processor', F: 'ae2:fluix_crystal', N: 'minecraft:nether_star' })

    event.shaped(Item.of('tacz:attachment', '{AttachmentId:"applied_armorer:muzzle_chip_hyper_propellant"}'),
        ['ETF', 'TFT', 'FTE'],
        { E: 'ae2:engineering_processor', T: 'gtceu:titanium_plate', F: 'ae2:fluix_crystal' })

    event.shaped(Item.of('tacz:attachment', '{AttachmentId:"applied_armorer:muzzle_chip_atm_x2"}'),
        ['EWF', 'WFW', 'FWE'],
        { E: 'ae2:engineering_processor', W: 'minecraft:wither_skeleton_skull', F: 'ae2:fluix_crystal' })


    event.shaped(Item.of('tacz:attachment', '{AttachmentId:"applied_armorer:si_simple_3"}'),
        ['TGT', 'GAG', ' B '],
        { T: 'gtceu:titanium_plate', G: 'gtceu:glass_plate', A: 'ae2:certus_quartz_crystal', B: 'gtceu:titanium_bolt' })

    event.shaped(Item.of('tacz:attachment', '{AttachmentId:"applied_armorer:si_profession"}'),
        ['TGT', 'GAG', 'TBT'],
        { T: 'gtceu:titanium_plate', G: 'gtceu:glass_plate', A: 'ae2:certus_quartz_crystal', B: 'gtceu:titanium_bolt' })

    event.shaped(Item.of('tacz:attachment', '{AttachmentId:"applied_armorer:si_pricision"}'),
        ['TGT', 'GCG', 'TBT'],
        { T: 'gtceu:titanium_plate', G: 'gtceu:glass_plate', C: '#gtceu:circuits/hv', B: 'gtceu:titanium_bolt' })

    event.shaped(Item.of('tacz:attachment', '{AttachmentId:"applied_armorer:si_ms_12"}'),
        ['GTG', 'TCT', 'GTG'],
        { T: 'gtceu:titanium_plate', G: 'gtceu:glass_plate', C: '#gtceu:circuits/hv' })

    event.shaped(Item.of('tacz:attachment', '{AttachmentId:"applied_armorer:si_pride_default"}'),
        [' G ', 'TAT', ' B '],
        { T: 'gtceu:titanium_plate', G: 'gtceu:glass_plate', A: 'ae2:certus_quartz_crystal', B: 'gtceu:titanium_bolt' })

    event.shaped(Item.of('tacz:attachment', '{AttachmentId:"applied_armorer:si_xs_07"}'),
        ['GTG', 'TAT', 'GTG'],
        { T: 'gtceu:titanium_plate', G: 'gtceu:glass_plate', A: 'ae2:certus_quartz_crystal' })

    event.shaped(Item.of('tacz:attachment', '{AttachmentId:"applied_armorer:si_double_sided_mirror"}'),
        ['TGT', 'GFG', 'TGT'],
        { T: 'gtceu:titanium_plate', G: 'gtceu:glass_plate', F: 'ae2:fluix_crystal' })

    event.shaped(Item.of('tacz:attachment', '{AttachmentId:"applied_armorer:si_zako_2403"}'),
        ['SFS', 'FTF', 'SFS'],
        { S: 'minecraft:skeleton_skull', F: 'ae2:fluix_crystal', T: 'gtceu:titanium_plate' })

    event.shaped(Item.of('tacz:attachment', '{AttachmentId:"applied_armorer:sight_type_3741"}'),
        ['TGT', 'GCG', 'TGT'],
        { T: 'gtceu:titanium_plate', G: 'gtceu:glass_plate', C: '#gtceu:circuits/hv' })

    event.shaped(Item.of('tacz:attachment', '{AttachmentId:"applied_armorer:scope_ms_14"}'),
        ['GGG', 'TCT', 'TBT'],
        { T: 'gtceu:titanium_plate', G: 'gtceu:glass_plate', C: '#gtceu:circuits/hv', B: 'ae2:fluix_crystal' })

    event.shaped(Item.of('tacz:attachment', '{AttachmentId:"applied_armorer:scope_xgs_905"}'),
        ['GGG', 'TCT', 'TBT'],
        { T: 'gtceu:titanium_plate', G: 'gtceu:glass_plate', C: '#gtceu:circuits/ev', B: 'ae2:fluix_crystal' })

})
