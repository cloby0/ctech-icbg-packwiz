// Superb Warfare: strip the gun/perk/loot layer entirely, keep vehicles (with their built-in
// armament) and re-gate them on the real materials those vehicles are actually built from.
// Tier reuses this pack's existing space-gates: titanium/Moon/HV, ostrum/Mars/EV, naquadah/Glacio/LuV.
//
// GT integration: SW motors replaced with tier-matched GT electric motors. SW cemented carbide
// replaced by gtceu:cemented_carbide material (HV EBF alloy, 3x tungsten_carbide + 1x cobalt).
// Mechanical sub-parts (wheel/track/propeller/mortar_barrel) re-gated via GT machines.

ServerEvents.recipes(event => {

    // the mod's own recipe types go entirely. vehicle_assembling is replaced by the
    // vehicle_assembler type below (for the user's own multiblock). the rest had no
    // surviving feature attached to them.
    event.remove({ type: 'superbwarfare:vehicle_assembling' })
    event.remove({ type: 'superbwarfare:researching' })
    event.remove({ type: 'superbwarfare:potion_mortar_shell' })
    event.remove({ type: 'superbwarfare:smoke_dye' })
    event.remove({ type: 'superbwarfare:vehicle_reset' })

    // handheld guns. repair_tool and vehicle_gun are Gun-class in code but are not
    // player weapons (repair_tool is a vehicle tool, vehicle_gun is the cannon baked
    // into combat vehicles and is never crafted directly) so both stay.
    const removedGuns = [
        'taser', 'glock_17', 'glock_18', 'mp_443', 'm_1911', 'homemade_shotgun', 'trachelium',
        'mp_5', 'vector', 'ak_47', 'ak_12', 'sks', 'm_4', 'hk_416', 'qbz_95', 'qbz_191',
        'insidious', 'mk_14', 'ql_1031', 'marlin', 'k_98', 'mosin_nagant', 'svd', 'awm',
        'm_98b', 'sentinel', 'hunting_rifle', 'ntw_20', 'm_870', 'aa_12', 'devotion', 'rpk',
        'm_60', 'm_2_hb', 'minigun', 'm_79', 'secondary_cataclysm', 'rpg', 'javelin',
        'igla_9k38', 'bocek', 'super_star_shooter', 'aurelia_sceptre'
    ]
    removedGuns.forEach(id => event.remove({ output: `superbwarfare:${id}` }))

    // ammo for the guns above, plus handheld grenades/mines/charges. ammo actually fired
    // by surviving vehicle weapons (mortars, autocannons, naval guns, missiles, bombs) is
    // kept and re-reciped further down. swarm_drone and edd are low confidence handheld
    // calls, flip them to the kept list later if they turn out to be vehicle launched.
    const removedAmmo = [
        'handgun_ammo', 'rifle_ammo', 'sniper_ammo', 'shotgun_ammo', 'heavy_ammo',
        'handgun_ammo_box', 'rifle_ammo_box', 'sniper_ammo_box', 'shotgun_ammo_box',
        'creative_ammo_box', 'ammo_box', 'taser_electrode', 'grenade_40mm',
        'mortar_shell_smoke', 'potion_mortar_shell', 'rpg_rocket_standard', 'rpg_rocket_tbg',
        'javelin_missile', 'lunge_mine', 'hand_grenade', 'rgo_grenade', 'm18_smoke_grenade',
        'claymore_mine', 'tm_62', 'ptkm_1r', 'c4_bomb', 'blu_43_mine', 'edd', 'swarm_drone'
    ]
    removedAmmo.forEach(id => event.remove({ output: `superbwarfare:${id}` }))

    // the rarity loot/blueprint/perk meta game, gone wholesale. nothing surviving depends on it.
    const removedLootSystem = [
        'common_material_pack', 'rare_material_pack', 'epic_material_pack',
        'legendary_material_pack', 'superb_material_pack', 'virtual_material_pack',
        'data_chip_substrate', 'common_blueprint_data_chip', 'rare_blueprint_data_chip',
        'epic_blueprint_data_chip', 'legendary_blueprint_data_chip', 'superb_blueprint_data_chip',
        'virtual_blueprint_data_chip', 'ammo_perk_data_chip', 'functional_perk_data_chip',
        'damage_perk_data_chip', 'directional_research_module', 'enlargement_research_module',
        'effective_research_module', 'boost_research_module', 'shortcut_pack', 'reforging_table',
        // gun blueprints
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
        // vehicle blueprints - crates are crafted directly now, no unlock RNG
        'mk_42_blueprint', 'mle_1934_blueprint', 'bl_132_blueprint', 'hpj_11_blueprint',
        'annihilator_blueprint'
    ]
    removedLootSystem.forEach(id => event.remove({ output: `superbwarfare:${id}` }))

    // handheld gun part sets. barrel survives only where a surviving armament module
    // still consumes it (steel -> light, cemented_carbide -> medium).
    const removedGunParts = [
        'iron_action', 'iron_spring', 'iron_trigger', 'iron_barrel',
        'steel_action', 'steel_spring', 'steel_trigger',
        'cemented_carbide_action', 'cemented_carbide_spring', 'cemented_carbide_trigger',
        'netherite_action', 'netherite_spring', 'netherite_trigger', 'netherite_barrel',
        'crystal_action', 'crystal_spring', 'crystal_trigger', 'crystal_barrel'
    ]
    removedGunParts.forEach(id => event.remove({ output: `superbwarfare:${id}` }))

    // SW mechanical sub-parts: remove vanilla crafting, re-gate through GT machines below.
    // SW cemented carbide supply chain killed entirely — replaced by gtceu:cemented_carbide.
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

    // utility tools survive as plain field gear, gregged at LV/MV. none of these need a
    // custom recipe type, vanilla shaped crafting is the right altitude for hand tools.
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

    // battery packs lost their recipe along with vehicle_assembling, re-recipe them via
    // GT assembler scaled by tier instead of the flat copper plate x4/x36/x144 pyramid.
    event.recipes.gtceu.assembler('superbwarfare_small_battery_pack')
        .itemInputs('4x create:copper_sheet', '4x gtceu:steel_plate', '#gtceu:circuits/lv')
        .itemOutputs('superbwarfare:small_battery_pack')
        .EUt(GTValues.VA[GTValues.LV])
        .duration(200)

    event.recipes.gtceu.assembler('superbwarfare_medium_battery_pack')
        .itemInputs('4x gtceu:steel_plate', '4x gtceu:aluminium_plate', '#gtceu:circuits/mv')
        .itemOutputs('superbwarfare:medium_battery_pack')
        .EUt(GTValues.VA[GTValues.MV])
        .duration(300)

    event.recipes.gtceu.assembler('superbwarfare_large_battery_pack')
        .itemInputs('4x gtceu:titanium_plate', '4x gtceu:aluminium_plate', '#gtceu:circuits/hv')
        .itemOutputs('superbwarfare:large_battery_pack')
        .EUt(GTValues.VA[GTValues.HV])
        .duration(400)

    // GT machine recipes for SW mechanical sub-parts.
    // Wheels: rubber ring + steel plate in assembler (replaces black wool + iron)
    event.recipes.gtceu.assembler('sw_wheel')
        .itemInputs('gtceu:rubber_plate', '2x gtceu:steel_plate')
        .itemOutputs('2x superbwarfare:wheel')
        .EUt(GTValues.VA[GTValues.LV])
        .duration(100)
        .circuit(1)

    // Track: steel plates + bolts in assembler (replaces steel ingot + wheel crafting)
    event.recipes.gtceu.assembler('sw_track')
        .itemInputs('8x gtceu:steel_plate', '4x gtceu:steel_bolt')
        .itemOutputs('2x superbwarfare:track')
        .EUt(GTValues.VA[GTValues.MV])
        .duration(200)
        .circuit(2)

    // Propeller: aluminium plates + rod in assembler (replaces planks + iron nugget)
    event.recipes.gtceu.assembler('sw_propeller')
        .itemInputs('2x gtceu:aluminium_plate', 'gtceu:aluminium_rod')
        .itemOutputs('2x superbwarfare:propeller')
        .EUt(GTValues.VA[GTValues.LV])
        .duration(100)
        .circuit(3)

    // Large propeller: heavier aluminium build (replaces iron ingot + cemented carbide)
    event.recipes.gtceu.assembler('sw_large_propeller')
        .itemInputs('4x gtceu:aluminium_plate', '2x gtceu:aluminium_rod')
        .itemOutputs('superbwarfare:large_propeller')
        .EUt(GTValues.VA[GTValues.MV])
        .duration(200)
        .circuit(4)

    // Mortar barrel: steel long rod turned on lathe (replaces iron ingot + green dye)
    event.recipes.gtceu.lathe('sw_mortar_barrel')
        .itemInputs('gtceu:steel_long_rod')
        .itemOutputs('4x superbwarfare:mortar_barrel')
        .EUt(GTValues.VA[GTValues.LV])
        .duration(100)

    // Cemented carbide barrel: GT cemented_carbide long rod on lathe (replaces 3x CC ingot crafting)
    event.recipes.gtceu.lathe('sw_cemented_carbide_barrel')
        .itemInputs('gtceu:cemented_carbide_long_rod')
        .itemOutputs('superbwarfare:cemented_carbide_barrel')
        .EUt(GTValues.VA[GTValues.MV])
        .duration(200)

    // armament modules: only swap is the rarity material pack -> a GT circuit, standing
    // in for the fire control system. everything else (barrel, cannon_core, escalating
    // module) is already a real prep chain, not a vanilla-simple ingredient.
    event.recipes.gtceu.arms_manufacturer('superbwarfare_light_armament_module')
        .itemInputs('superbwarfare:steel_barrel', '4x gtceu:steel_plate', 'minecraft:dispenser', '#gtceu:circuits/lv')
        .itemOutputs('superbwarfare:light_armament_module')
        .EUt(GTValues.VA[GTValues.LV])
        .duration(200)
        .circuit(1)

    event.recipes.gtceu.arms_manufacturer('superbwarfare_medium_armament_module')
        .itemInputs('superbwarfare:cemented_carbide_barrel', 'superbwarfare:light_armament_module', '4x gtceu:cemented_carbide_ingot', '#gtceu:circuits/mv')
        .itemOutputs('superbwarfare:medium_armament_module')
        .EUt(GTValues.VA[GTValues.MV])
        .duration(300)
        .circuit(2)

    event.recipes.gtceu.arms_manufacturer('superbwarfare_heavy_armament_module')
        .itemInputs('superbwarfare:cannon_core', 'superbwarfare:medium_armament_module', '4x minecraft:netherite_ingot', '#gtceu:circuits/hv')
        .itemOutputs('superbwarfare:heavy_armament_module')
        .EUt(GTValues.VA[GTValues.HV])
        .duration(400)
        .circuit(3)

    // vehicle-fired ammo, gregged. casing material climbs with the shell's tier the same
    // way the vehicle that fires it does. AP rounds get a tungsten penetrator (real APFSDS
    // material), guided missiles get a circuit standing in for the seeker electronics.
    function ammo(id, output, count, tier, inputs) {
        let recipe = event.recipes.gtceu.arms_manufacturer(`superbwarfare_${id}`)
        recipe.itemInputs.apply(recipe, inputs)
        recipe.itemOutputs(`${count}x superbwarfare:${output}`)
            .EUt(GTValues.VA[GTValues[tier]])
            .duration(tier === 'LV' ? 200 : tier === 'MV' ? 300 : tier === 'HV' ? 400 : 500)
            .circuit(tier === 'LV' ? 1 : tier === 'MV' ? 2 : tier === 'HV' ? 3 : 4)
    }

    // pinned to 0.8.8: that version has no AP/HE/GS/AA split for small caliber (one generic
    // small_shell item, all four recipes below converge on it) and names large shells
    // ap/he/gs/cm_5_inches instead of large_shell_*. wp_head and the WP shell lines plus
    // small_aerial_bomb don't exist pre-0.8.9 at all, dropped outright.
    ammo('mortar_shell', 'mortar_shell', 4, 'LV', ['2x gtceu:steel_plate', 'minecraft:gunpowder', 'superbwarfare:high_energy_explosives', 'superbwarfare:primer'])
    ammo('small_shell_ap', 'small_shell', 8, 'MV', ['2x gtceu:steel_plate', 'gtceu:tungsten_dust', 'superbwarfare:ap_head', 'superbwarfare:primer'])
    ammo('small_shell_he', 'small_shell', 8, 'MV', ['2x gtceu:steel_plate', 'superbwarfare:he_head', 'minecraft:gunpowder', 'superbwarfare:primer'])
    ammo('small_shell_gs', 'small_shell', 8, 'MV', ['2x gtceu:steel_plate', 'superbwarfare:gs_head', 'superbwarfare:primer'])
    ammo('small_shell_aa', 'small_shell', 8, 'MV', ['2x gtceu:steel_plate', 'superbwarfare:gs_head', 'minecraft:redstone', 'superbwarfare:primer'])
    ammo('large_shell_ap', 'ap_5_inches', 4, 'HV', ['2x gtceu:titanium_plate', 'gtceu:tungsten_rod', 'superbwarfare:ap_head', 'superbwarfare:primer'])
    ammo('large_shell_he', 'he_5_inches', 4, 'HV', ['2x gtceu:titanium_plate', 'superbwarfare:he_head', 'superbwarfare:high_energy_explosives', 'superbwarfare:primer'])
    ammo('large_shell_cm', 'cm_5_inches', 4, 'HV', ['2x gtceu:titanium_plate', 'superbwarfare:cm_head', 'superbwarfare:primer'])
    ammo('large_shell_gs', 'gs_5_inches', 4, 'HV', ['2x gtceu:titanium_plate', 'superbwarfare:gs_head', 'superbwarfare:primer'])
    ammo('small_rocket', 'small_rocket', 8, 'LV', ['gtceu:steel_plate', 'superbwarfare:fusee', 'superbwarfare:grain'])
    ammo('medium_rocket_ap', 'medium_rocket_ap', 4, 'MV', ['gtceu:aluminium_plate', 'superbwarfare:fusee', 'superbwarfare:grain', 'superbwarfare:ap_head'])
    ammo('medium_rocket_he', 'medium_rocket_he', 4, 'MV', ['gtceu:aluminium_plate', 'superbwarfare:fusee', 'superbwarfare:grain', 'superbwarfare:he_head'])
    ammo('medium_rocket_cm', 'medium_rocket_cm', 4, 'MV', ['gtceu:aluminium_plate', 'superbwarfare:fusee', 'superbwarfare:grain', 'superbwarfare:cm_head'])
    ammo('medium_anti_air_missile', 'medium_anti_air_missile', 2, 'EV', ['gtceu:aluminium_plate', 'superbwarfare:missile_engine', 'superbwarfare:seeker', '#gtceu:circuits/ev'])
    ammo('medium_anti_ground_missile', 'medium_anti_ground_missile', 2, 'EV', ['gtceu:aluminium_plate', 'superbwarfare:missile_engine', 'superbwarfare:seeker', '#gtceu:circuits/ev'])
    ammo('large_anti_ground_missile', 'large_anti_ground_missile', 1, 'EV', ['gtceu:titanium_plate', 'superbwarfare:missile_engine', 'superbwarfare:seeker', '#gtceu:circuits/ev'])
    ammo('medium_aerial_bomb', 'medium_aerial_bomb', 2, 'MV', ['gtceu:aluminium_plate', 'superbwarfare:high_energy_explosives', 'superbwarfare:fusee'])

    // vehicle crates. output is the shared container block item with the vehicle baked
    // into NBT (ContainerBlockItem.createInstance only ever sets EntityType, no Entity tag
    // needed - the entity spawns fresh on placement). gate material follows what the real
    // vehicle is actually built from, reusing the pack's existing space-tier gates.
    function crateOutput(entityId) {
        return Item.of('superbwarfare:container', `{BlockEntityTag:{EntityType:"superbwarfare:${entityId}"}}`)
    }

    function vehicle(entityId, tier, inputs) {
        const circuitNo = { LV: 1, MV: 2, HV: 3, EV: 4, LuV: 6, ZPM: 7 }[tier]
        const duration = { LV: 200, MV: 300, HV: 400, EV: 500, LuV: 600, ZPM: 700 }[tier]
        let recipe = event.recipes.gtceu.vehicle_assembler(`superbwarfare_${entityId}`)
        recipe.itemInputs.apply(recipe, inputs)
        recipe.itemOutputs(crateOutput(entityId))
            .EUt(GTValues.VA[GTValues[tier]])
            .duration(duration)
            .circuit(circuitNo)
    }

    // LV-MV: civilian and light vehicles, plain steel construction
    // sodayo_pick_up*, tiny_speedboat and kv_16 don't exist pre-0.8.9, dropped on downgrade
    vehicle('wheel_chair', 'LV', ['2x superbwarfare:wheel', 'superbwarfare:cell', 'gtceu:lv_electric_motor', '2x gtceu:steel_plate'])
    vehicle('truck', 'LV', ['6x gtceu:steel_plate', '2x gtceu:steel_rod', 'superbwarfare:medium_battery_pack', '6x superbwarfare:wheel', 'gtceu:lv_electric_motor'])
    vehicle('speedboat', 'MV', ['4x gtceu:steel_plate', '2x gtceu:steel_rod', 'superbwarfare:light_armament_module', 'superbwarfare:small_battery_pack', 'superbwarfare:large_propeller', 'gtceu:mv_electric_motor'])
    vehicle('tom_6', 'LV', ['2x gtceu:aluminium_plate', 'gtceu:steel_rod', 'superbwarfare:battery', 'minecraft:minecart'])

    // MV-HV: armored personnel carriers, light tanks, WWII era aircraft, naval/field guns
    // ju_87, lav_25, lav_ad and bradley don't exist pre-0.8.9, dropped on downgrade
    vehicle('lav_150', 'MV', ['6x gtceu:steel_plate', '2x gtceu:steel_rod', 'superbwarfare:light_armament_module', 'superbwarfare:medium_battery_pack', '4x superbwarfare:wheel', 'gtceu:mv_electric_motor'])
    vehicle('bmp_2', 'MV', ['8x gtceu:steel_plate', '2x gtceu:steel_rod', 'superbwarfare:medium_armament_module', 'superbwarfare:medium_battery_pack', '2x superbwarfare:track', 'gtceu:mv_electric_motor'])
    vehicle('type_63', 'MV', ['2x gtceu:steel_plate', '12x superbwarfare:mortar_barrel', '2x superbwarfare:wheel'])
    vehicle('mk_42', 'HV', ['4x gtceu:titanium_plate', '4x gtceu:steel_rod', 'superbwarfare:cannon_core', '4x gtceu:steel_bolt'])
    vehicle('mle_1934', 'HV', ['6x gtceu:titanium_plate', '4x gtceu:steel_rod', '2x superbwarfare:cannon_core', '4x gtceu:steel_bolt'])
    vehicle('bl_132', 'HV', ['8x gtceu:titanium_plate', '6x gtceu:steel_rod', '4x superbwarfare:cannon_core', '6x gtceu:steel_bolt'])
    vehicle('hpj_11', 'HV', ['5x gtceu:titanium_plate', 'superbwarfare:cannon_core', 'superbwarfare:medium_battery_pack', 'gtceu:hv_electric_motor', 'minecraft:observer'])

    // HV: titanium era. modern composite armor MBTs, titanium airframe helicopters, the
    // A-10's famous titanium cockpit bathtub
    // t_90a, ztz_99a and m_1a_2 don't exist pre-0.8.9, dropped on downgrade
    vehicle('ah_6', 'HV', ['3x gtceu:titanium_plate', 'gtceu:titanium_rod', 'superbwarfare:light_armament_module', 'superbwarfare:medium_battery_pack', 'superbwarfare:large_propeller', 'superbwarfare:propeller', 'gtceu:hv_electric_motor'])
    vehicle('mi_28', 'HV', ['5x gtceu:titanium_plate', '2x gtceu:titanium_rod', 'superbwarfare:heavy_armament_module', '2x superbwarfare:medium_battery_pack', '3x superbwarfare:wheel', 'superbwarfare:large_propeller', 'superbwarfare:propeller', 'gtceu:hv_electric_motor'])
    vehicle('a_10a', 'HV', ['6x gtceu:titanium_plate', '2x gtceu:titanium_rod', 'superbwarfare:heavy_armament_module', 'superbwarfare:large_battery_pack', '2x superbwarfare:large_propeller', '2x gtceu:hv_electric_motor', '3x superbwarfare:wheel'])
    vehicle('yx_100', 'HV', ['8x gtceu:titanium_plate', '4x gtceu:titanium_rod', 'superbwarfare:heavy_armament_module', 'superbwarfare:medium_armament_module', 'superbwarfare:large_battery_pack', '2x superbwarfare:track', 'gtceu:hv_electric_motor'])
    vehicle('plz_05', 'HV', ['6x gtceu:titanium_plate', '2x gtceu:titanium_rod', 'superbwarfare:cannon_core', 'superbwarfare:heavy_armament_module', 'superbwarfare:medium_battery_pack', '2x superbwarfare:track', 'gtceu:hv_electric_motor'])

    // EV: ostrum era, exotic energy weapon platforms
    vehicle('laser_tower', 'EV', ['2x ad_astra:ostrum_plate', 'gtceu:ostrum_rod', 'superbwarfare:laser_unit', 'superbwarfare:small_battery_pack', 'gtceu:ev_electric_motor'])
    vehicle('waveforce_tower', 'EV', ['6x ad_astra:ostrum_plate', '4x gtceu:ostrum_rod', '2x gtceu:cemented_carbide_block', '8x minecraft:redstone_block', '9x superbwarfare:laser_unit', '2x superbwarfare:medium_battery_pack', 'gtceu:ev_electric_motor'])

    // LuV+: explicitly fictional superweapons, naquadah gated same as every other
    // Glacio-tier endgame item in this pack
    vehicle('annihilator', 'LuV', ['6x gtceu:naquadah_plate', '3x minecraft:netherite_block', '32x superbwarfare:laser_unit', 'superbwarfare:large_battery_pack', '24x gtceu:steel_block'])
    vehicle('prism_tank', 'LuV', ['4x gtceu:naquadah_plate', '2x gtceu:naquadah_ingot', '16x superbwarfare:laser_unit', 'superbwarfare:large_battery_pack', '2x superbwarfare:track', 'gtceu:luv_electric_motor'])

})
