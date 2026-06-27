
ServerEvents.recipes(event => {

    event.remove({ type: 'superbwarfare:vehicle_assembling' })
    event.remove({ type: 'superbwarfare:researching' })
    event.remove({ type: 'superbwarfare:potion_mortar_shell' })
    event.remove({ type: 'superbwarfare:smoke_dye' })
    event.remove({ type: 'superbwarfare:vehicle_reset' })

    const removedGuns = [
        'taser', 'glock_17', 'glock_18', 'mp_443', 'm_1911', 'homemade_shotgun', 'trachelium',
        'mp_5', 'vector', 'ak_47', 'ak_12', 'sks', 'm_4', 'hk_416', 'qbz_95', 'qbz_191',
        'insidious', 'mk_14', 'ql_1031', 'marlin', 'k_98', 'mosin_nagant', 'svd', 'awm',
        'm_98b', 'sentinel', 'hunting_rifle', 'ntw_20', 'm_870', 'aa_12', 'devotion', 'rpk',
        'm_60', 'm_2_hb', 'minigun', 'm_79', 'secondary_cataclysm', 'rpg', 'javelin',
        'igla_9k38', 'bocek', 'super_star_shooter', 'aurelia_sceptre'
    ]
    removedGuns.forEach(id => event.remove({ output: `superbwarfare:${id}` }))

    const removedAmmo = [
        'handgun_ammo', 'rifle_ammo', 'sniper_ammo', 'shotgun_ammo', 'heavy_ammo',
        'handgun_ammo_box', 'rifle_ammo_box', 'sniper_ammo_box', 'shotgun_ammo_box',
        'creative_ammo_box', 'ammo_box', 'taser_electrode', 'grenade_40mm',
        'mortar_shell_smoke', 'potion_mortar_shell', 'rpg_rocket_standard', 'rpg_rocket_tbg',
        'javelin_missile', 'lunge_mine', 'hand_grenade', 'rgo_grenade', 'm18_smoke_grenade',
        'claymore_mine', 'tm_62', 'ptkm_1r', 'c4_bomb', 'blu_43_mine', 'edd', 'swarm_drone'
    ]
    removedAmmo.forEach(id => event.remove({ output: `superbwarfare:${id}` }))

    const removedLootSystem = [
        'common_material_pack', 'rare_material_pack', 'epic_material_pack',
        'legendary_material_pack', 'superb_material_pack', 'virtual_material_pack',
        'data_chip_substrate', 'common_blueprint_data_chip', 'rare_blueprint_data_chip',
        'epic_blueprint_data_chip', 'legendary_blueprint_data_chip', 'superb_blueprint_data_chip',
        'virtual_blueprint_data_chip', 'ammo_perk_data_chip', 'functional_perk_data_chip',
        'damage_perk_data_chip', 'directional_research_module', 'enlargement_research_module',
        'effective_research_module', 'boost_research_module', 'shortcut_pack', 'reforging_table',
        'trachelium_blueprint', 'glock_17_blueprint', 'mp_443_blueprint', 'glock_18_blueprint',
        'hunting_rifle_blueprint', 'm_79_blueprint', 'rpg_blueprint', 'bocek_blueprint',
        'm_4_blueprint', 'aa_12_blueprint', 'hk_416_blueprint', 'rpk_blueprint', 'sks_blueprint',
        'ntw_20_blueprint', 'mp_5_blueprint', 'vector_blueprint', 'minigun_blueprint',
        'mk_14_blueprint', 'sentinel_blueprint', 'm_60_blueprint', 'svd_blueprint',
        'marlin_blueprint', 'm_870_blueprint', 'awm_blueprint', 'm_98b_blueprint',
        'ak_47_blueprint', 'ak_12_blueprint', 'devotion_blueprint', 'taser_blueprint',
        'm_1911_blueprint', 'qbz_95_blueprint', 'qbz_191_blueprint', 'k_98_blueprint',
        'mosin_nagant_blueprint', 'igla_9k38_blueprint', 'javelin_blueprint', 'm_2_hb_blueprint',
        'secondary_cataclysm_blueprint', 'insidious_blueprint', 'ql_1031_blueprint',
        'super_star_shooter_blueprint', 'aurelia_sceptre_blueprint',
        'mk_42_blueprint', 'mle_1934_blueprint', 'bl_132_blueprint', 'hpj_11_blueprint',
        'annihilator_blueprint'
    ]
    removedLootSystem.forEach(id => event.remove({ output: `superbwarfare:${id}` }))

    const removedGunParts = [
        'iron_action', 'iron_spring', 'iron_trigger', 'iron_barrel',
        'steel_action', 'steel_spring', 'steel_trigger',
        'cemented_carbide_action', 'cemented_carbide_spring', 'cemented_carbide_trigger',
        'netherite_action', 'netherite_spring', 'netherite_trigger', 'netherite_barrel',
        'crystal_action', 'crystal_spring', 'crystal_trigger', 'crystal_barrel'
    ]
    removedGunParts.forEach(id => event.remove({ output: `superbwarfare:${id}` }))

    event.remove({ output: 'superbwarfare:motor' })
    event.remove({ output: 'superbwarfare:large_motor' })
    event.remove({ output: 'superbwarfare:wheel' })
    event.remove({ output: 'superbwarfare:track' })
    event.remove({ output: 'superbwarfare:propeller' })
    event.remove({ output: 'superbwarfare:large_propeller' })
    event.remove({ output: 'superbwarfare:mortar_barrel' })
    event.remove({ output: 'superbwarfare:cemented_carbide_barrel' })
    event.remove({ output: 'superbwarfare:raw_cemented_carbide_powder' })
    event.remove({ output: 'superbwarfare:cemented_carbide_ingot' })

    event.shaped(Item.of('superbwarfare:repair_tool'), [
        ' P ',
        'RCR',
        ' S '
    ], {
        P: 'gtceu:steel_plate',
        R: 'gtceu:steel_rod',
        C: '#gtceu:circuits/lv',
        S: 'gtceu:steel_bolt'
    })

    event.shaped(Item.of('superbwarfare:crowbar'), [
        ' P',
        'R '
    ], {
        P: 'gtceu:steel_plate',
        R: 'gtceu:steel_rod'
    })

    event.shaped(Item.of('superbwarfare:defuser'), [
        'PCP',
        ' R '
    ], {
        P: 'gtceu:steel_plate',
        C: '#gtceu:circuits/lv',
        R: 'gtceu:steel_rod'
    })

    event.shaped(Item.of('superbwarfare:medical_kit'), [
        'PPP',
        'SCS',
        'PPP'
    ], {
        P: 'gtceu:steel_plate',
        S: 'minecraft:string',
        C: 'minecraft:glass_bottle'
    })

    event.shaped(Item.of('superbwarfare:vehicle_damage_analyzer'), [
        'PGP',
        'RCR'
    ], {
        P: 'gtceu:steel_plate',
        G: 'gtceu:glass_lens',
        R: 'gtceu:steel_rod',
        C: '#gtceu:circuits/lv'
    })

    event.shaped(Item.of('superbwarfare:vehicle_reset_kit'), [
        'PCP',
        ' R '
    ], {
        P: 'gtceu:steel_plate',
        C: '#gtceu:circuits/lv',
        R: 'minecraft:paper'
    })

    event.recipes.gtceu.assembler('sw_wheel')
        .itemInputs('gtceu:rubber_plate', '2x gtceu:steel_plate')
        .itemOutputs('2x superbwarfare:wheel')
        .EUt(GTValues.VA[GTValues.LV])
        .duration(5 * 20)
        .circuit(1)

    event.recipes.gtceu.assembler('sw_track')
        .itemInputs('8x gtceu:steel_plate', '4x gtceu:steel_bolt')
        .itemOutputs('2x superbwarfare:track')
        .EUt(GTValues.VA[GTValues.MV])
        .duration(10 * 20)
        .circuit(2)

    event.recipes.gtceu.assembler('sw_propeller')
        .itemInputs('2x gtceu:aluminium_plate', 'gtceu:aluminium_rod')
        .itemOutputs('2x superbwarfare:propeller')
        .EUt(GTValues.VA[GTValues.LV])
        .duration(5 * 20)
        .circuit(3)

    event.recipes.gtceu.assembler('sw_large_propeller')
        .itemInputs('4x gtceu:aluminium_plate', '2x gtceu:aluminium_rod')
        .itemOutputs('superbwarfare:large_propeller')
        .EUt(GTValues.VA[GTValues.MV])
        .duration(10 * 20)
        .circuit(4)

    event.recipes.gtceu.lathe('sw_mortar_barrel')
        .itemInputs('gtceu:long_steel_rod')
        .itemOutputs('4x superbwarfare:mortar_barrel')
        .EUt(GTValues.VA[GTValues.LV])
        .duration(5 * 20)

    event.recipes.gtceu.lathe('sw_cemented_carbide_barrel')
        .itemInputs('gtceu:long_cemented_carbide_rod')
        .itemOutputs('superbwarfare:cemented_carbide_barrel')
        .EUt(GTValues.VA[GTValues.MV])
        .duration(10 * 20)

    event.recipes.gtceu.arms_manufacturer('superbwarfare_light_armament_module')
        .itemInputs('superbwarfare:steel_barrel', '4x gtceu:steel_plate', 'minecraft:dispenser', '#gtceu:circuits/lv')
        .itemOutputs('superbwarfare:light_armament_module')
        .EUt(GTValues.VA[GTValues.LV])
        .duration(10 * 20)
        .circuit(1)

    event.recipes.gtceu.arms_manufacturer('superbwarfare_medium_armament_module')
        .itemInputs('superbwarfare:cemented_carbide_barrel', 'superbwarfare:light_armament_module', '4x gtceu:cemented_carbide_ingot', '#gtceu:circuits/mv')
        .itemOutputs('superbwarfare:medium_armament_module')
        .EUt(GTValues.VA[GTValues.MV])
        .duration(15 * 20)
        .circuit(2)

    event.recipes.gtceu.arms_manufacturer('superbwarfare_heavy_armament_module')
        .itemInputs('superbwarfare:cannon_core', 'superbwarfare:medium_armament_module', '4x gtceu:titanium_plate', '#gtceu:circuits/hv')
        .itemOutputs('superbwarfare:heavy_armament_module')
        .EUt(GTValues.VA[GTValues.HV])
        .duration(20 * 20)
        .circuit(3)

    function ammo(id, output, count, tier, inputs) {
        let recipe = event.recipes.gtceu.arms_manufacturer(`superbwarfare_${id}`)
        recipe.itemInputs.apply(recipe, inputs)
        recipe.itemOutputs(`${count}x superbwarfare:${output}`)
            .EUt(GTValues.VA[GTValues[tier]])
            .duration(tier === 'LV' ? 10 * 20 : tier === 'MV' ? 15 * 20 : tier === 'HV' ? 20 * 20 : 25 * 20)
            .circuit(tier === 'LV' ? 1 : tier === 'MV' ? 2 : tier === 'HV' ? 3 : 4)
    }

    ammo('mortar_shell', 'mortar_shell', 4, 'LV', ['2x gtceu:steel_plate', 'minecraft:gunpowder', 'superbwarfare:high_energy_explosives', 'superbwarfare:primer'])
    ammo('small_shell_ap', 'small_shell', 8, 'MV', ['2x gtceu:steel_plate', 'gtceu:tungsten_dust', 'superbwarfare:ap_head', 'superbwarfare:primer'])
    ammo('small_shell_he', 'small_shell', 8, 'MV', ['2x gtceu:steel_plate', 'superbwarfare:he_head', 'minecraft:gunpowder', 'superbwarfare:primer'])
    ammo('small_shell_gs', 'small_shell', 8, 'MV', ['2x gtceu:steel_plate', 'superbwarfare:gs_head', 'superbwarfare:primer'])
    ammo('small_shell_aa', 'small_shell', 8, 'MV', ['2x gtceu:steel_plate', 'superbwarfare:gs_head', 'minecraft:redstone', 'superbwarfare:primer'])
    ammo('large_shell_ap', 'ap_5_inches', 4, 'HV', ['2x gtceu:titanium_plate', 'gtceu:tungsten_rod', 'superbwarfare:ap_head', 'superbwarfare:primer'])
    ammo('large_shell_he', 'he_5_inches', 4, 'HV', ['2x gtceu:titanium_plate', 'superbwarfare:he_head', 'superbwarfare:high_energy_explosives', 'superbwarfare:primer'])
    ammo('large_shell_cm', 'cm_5_inches', 4, 'HV', ['2x gtceu:titanium_plate', 'superbwarfare:cm_head', 'superbwarfare:primer'])
    ammo('large_shell_gs', 'gs_5_inches', 4, 'HV', ['2x gtceu:titanium_plate', 'superbwarfare:gs_head', 'superbwarfare:primer'])
    ammo('small_rocket', 'small_rocket', 4, 'MV', ['gtceu:steel_plate', 'superbwarfare:fusee', 'superbwarfare:grain'])
    ammo('medium_rocket_ap', 'medium_rocket_ap', 4, 'MV', ['gtceu:aluminium_plate', 'superbwarfare:fusee', 'superbwarfare:grain', 'superbwarfare:ap_head'])
    ammo('medium_rocket_he', 'medium_rocket_he', 4, 'MV', ['gtceu:aluminium_plate', 'superbwarfare:fusee', 'superbwarfare:grain', 'superbwarfare:he_head'])
    ammo('medium_rocket_cm', 'medium_rocket_cm', 4, 'MV', ['gtceu:aluminium_plate', 'superbwarfare:fusee', 'superbwarfare:grain', 'superbwarfare:cm_head'])
    ammo('medium_anti_air_missile', 'medium_anti_air_missile', 2, 'EV', ['gtceu:aluminium_plate', 'superbwarfare:missile_engine', 'superbwarfare:seeker', '#gtceu:circuits/ev'])
    ammo('medium_anti_ground_missile', 'medium_anti_ground_missile', 2, 'EV', ['gtceu:aluminium_plate', 'superbwarfare:missile_engine', 'superbwarfare:seeker', '#gtceu:circuits/ev'])
    ammo('large_anti_ground_missile', 'large_anti_ground_missile', 1, 'EV', ['gtceu:titanium_plate', 'superbwarfare:missile_engine', 'superbwarfare:seeker', '#gtceu:circuits/ev'])
    ammo('medium_aerial_bomb', 'medium_aerial_bomb', 2, 'MV', ['gtceu:aluminium_plate', 'superbwarfare:high_energy_explosives', 'superbwarfare:fusee'])

    function crateOutput(entityId) {
        return Item.of('superbwarfare:container', `{BlockEntityTag:{EntityType:"superbwarfare:${entityId}"}}`)
    }

    function vehicle(entityId, tier, inputs) {
        let circuitNo = { LV: 1, MV: 2, HV: 3, EV: 4, LuV: 6, ZPM: 7 }[tier]
        let duration = { LV: 10 * 20, MV: 15 * 20, HV: 20 * 20, EV: 25 * 20, LuV: 30 * 20, ZPM: 35 * 20 }[tier]
        let recipe = event.recipes.gtceu.vehicle_assembler(`superbwarfare_${entityId}`)
        recipe.itemInputs.apply(recipe, inputs)
        recipe.itemOutputs(crateOutput(entityId))
            .EUt(GTValues.VA[GTValues[tier]])
            .duration(duration)
            .circuit(circuitNo)
    }

    vehicle('wheel_chair', 'LV', ['2x superbwarfare:wheel', 'superbwarfare:cell', 'gtceu:lv_electric_motor', '2x gtceu:steel_plate'])
    vehicle('truck', 'LV', ['6x gtceu:steel_plate', '2x gtceu:steel_rod', 'gtceu:lv_battery_hull', '6x superbwarfare:wheel', 'gtceu:lv_electric_motor'])
    vehicle('speedboat', 'MV', ['4x gtceu:steel_plate', '2x gtceu:steel_rod', 'superbwarfare:light_armament_module', 'gtceu:lv_battery_hull', 'superbwarfare:large_propeller', 'gtceu:mv_electric_motor'])
    vehicle('tom_6', 'LV', ['2x gtceu:aluminium_plate', 'gtceu:steel_rod', 'superbwarfare:battery', 'minecraft:minecart'])

    vehicle('lav_150', 'MV', ['6x gtceu:steel_plate', '2x gtceu:steel_rod', 'superbwarfare:light_armament_module', 'gtceu:mv_battery_hull', '4x superbwarfare:wheel', 'gtceu:mv_electric_motor'])
    vehicle('bmp_2', 'MV', ['8x gtceu:steel_plate', '2x gtceu:steel_rod', 'superbwarfare:medium_armament_module', 'gtceu:mv_battery_hull', '2x superbwarfare:track', 'gtceu:mv_electric_motor'])
    vehicle('type_63', 'MV', ['2x gtceu:steel_plate', '12x superbwarfare:mortar_barrel', '2x superbwarfare:wheel', '#gtceu:circuits/mv', 'gtceu:mv_electric_motor'])
    vehicle('mk_42', 'HV', ['4x gtceu:titanium_plate', '4x gtceu:steel_rod', 'superbwarfare:cannon_core', '4x gtceu:steel_bolt'])
    vehicle('mle_1934', 'HV', ['6x gtceu:titanium_plate', '4x gtceu:steel_rod', '2x superbwarfare:cannon_core', '4x gtceu:steel_bolt'])
    vehicle('bl_132', 'HV', ['8x gtceu:titanium_plate', '6x gtceu:steel_rod', '4x superbwarfare:cannon_core', '6x gtceu:steel_bolt'])
    vehicle('hpj_11', 'HV', ['5x gtceu:titanium_plate', 'superbwarfare:cannon_core', 'gtceu:mv_battery_hull', 'gtceu:hv_electric_motor', 'minecraft:observer'])

    vehicle('ah_6', 'HV', ['3x gtceu:titanium_plate', 'gtceu:titanium_rod', 'superbwarfare:light_armament_module', 'gtceu:mv_battery_hull', 'superbwarfare:large_propeller', 'superbwarfare:propeller', 'gtceu:hv_electric_motor'])
    vehicle('mi_28', 'HV', ['5x gtceu:titanium_plate', '2x gtceu:titanium_rod', 'superbwarfare:heavy_armament_module', '2x gtceu:mv_battery_hull', '3x superbwarfare:wheel', 'superbwarfare:large_propeller', 'superbwarfare:propeller', 'gtceu:hv_electric_motor'])
    vehicle('a_10a', 'HV', ['6x gtceu:titanium_plate', '2x gtceu:titanium_rod', 'superbwarfare:heavy_armament_module', 'gtceu:hv_battery_hull', '2x superbwarfare:large_propeller', '2x gtceu:hv_electric_motor', '3x superbwarfare:wheel'])
    vehicle('yx_100', 'HV', ['8x gtceu:titanium_plate', '4x gtceu:titanium_rod', 'superbwarfare:heavy_armament_module', 'superbwarfare:medium_armament_module', 'gtceu:hv_battery_hull', '2x superbwarfare:track', 'gtceu:hv_electric_motor'])
    vehicle('plz_05', 'HV', ['6x gtceu:titanium_plate', '2x gtceu:titanium_rod', 'superbwarfare:cannon_core', 'superbwarfare:heavy_armament_module', 'gtceu:mv_battery_hull', '2x superbwarfare:track', 'gtceu:hv_electric_motor'])

    vehicle('laser_tower', 'EV', ['2x ad_astra:ostrum_plate', 'gtceu:ostrum_rod', 'superbwarfare:laser_unit', 'gtceu:hv_battery_hull', 'gtceu:ev_electric_motor'])
    vehicle('waveforce_tower', 'EV', ['6x ad_astra:ostrum_plate', '4x gtceu:ostrum_rod', '2x gtceu:tungsten_steel_frame', '8x minecraft:redstone_block', '9x superbwarfare:laser_unit', '2x gtceu:hv_battery_hull', 'gtceu:ev_electric_motor'])

    vehicle('annihilator', 'LuV', ['6x gtceu:naquadah_plate', '4x gtceu:naquadah_alloy_ingot', '32x superbwarfare:laser_unit', 'gtceu:luv_battery_hull', '4x gtceu:naquadah_alloy_frame'])
    vehicle('prism_tank', 'LuV', ['4x gtceu:naquadah_plate', '2x gtceu:naquadah_ingot', '16x superbwarfare:laser_unit', 'gtceu:luv_battery_hull', '2x superbwarfare:track', 'gtceu:luv_electric_motor'])

})
