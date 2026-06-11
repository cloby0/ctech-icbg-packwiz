ServerEvents.recipes(event => {

    event.recipes.gtceu.assembler('fp_kevlar_plate_iiia')
        .itemInputs('4x gtceu:polyethylene_plate', '2x gtceu:rubber_plate')
        .itemOutputs('1x fracturepoint:kevlar_plate_level_iiia')
        .duration(10 * 20)
        .EUt(GTValues.VA[GTValues.MV])

    event.recipes.gtceu.forming_press('fp_polyethylene_plate_iii')
        .itemInputs('6x gtceu:polyethylene_plate')
        .itemOutputs('1x fracturepoint:polyethylene_plate_level_iii')
        .duration(8 * 20)
        .EUt(GTValues.VA[GTValues.MV])

    event.recipes.gtceu.forming_press('fp_steel_plate_iii')
        .itemInputs('4x gtceu:steel_plate', '1x gtceu:rubber_plate')
        .itemOutputs('1x fracturepoint:steel_plate_level_iii')
        .duration(10 * 20)
        .EUt(GTValues.VA[GTValues.MV])

    event.recipes.gtceu.assembler('fp_ceramic_plate_iv')
        .itemInputs('4x gtceu:aluminium_plate', '2x gtceu:polyethylene_plate')
        .itemOutputs('1x fracturepoint:ceramic_plate_level_iv')
        .duration(15 * 20)
        .EUt(GTValues.VA[GTValues.HV])

    event.recipes.gtceu.assembler('fp_composite_plate_iv')
        .itemInputs('2x gtceu:carbon_fiber_plate', '1x gtceu:titanium_plate', '2x gtceu:polyethylene_plate')
        .itemOutputs('1x fracturepoint:composite_plate_level_iv')
        .duration(20 * 20)
        .EUt(GTValues.VA[GTValues.HV])

    event.recipes.gtceu.chemical_reactor('fp_propital')
        .itemInputs('1x gtceu:small_sulfur_dust', '1x gtceu:tiny_platinum_dust')
        .inputFluids(Fluid.of('gtceu:distilled_water', 250))
        .itemOutputs('2x fracturepoint:propital')
        .duration(12 * 20)
        .EUt(GTValues.VA[GTValues.MV])

    event.recipes.gtceu.chemical_reactor('fp_cure')
        .itemInputs('1x gtceu:small_silver_dust', '1x gtceu:tiny_platinum_dust')
        .inputFluids(Fluid.of('gtceu:distilled_water', 250))
        .itemOutputs('2x fracturepoint:cure')
        .duration(12 * 20)
        .EUt(GTValues.VA[GTValues.MV])

    event.recipes.gtceu.assembler('fp_nvg_battery')
        .itemInputs('1x gtceu:mv_battery_hull', '4x gtceu:lithium_dust')
        .inputFluids(Fluid.of('gtceu:soldering_alloy', 72))
        .itemOutputs('2x fracturepoint:nvg_battery')
        .duration(8 * 20)
        .EUt(GTValues.VA[GTValues.MV])

    event.recipes.gtceu.assembler('fp_simple_nvg_goggles')
        .itemInputs('4x gtceu:steel_plate', '2x gtceu:glass_lens', '1x fracturepoint:nvg_battery', '1x gtceu:mv_emitter', '1x #gtceu:circuits/mv')
        .inputFluids(Fluid.of('gtceu:soldering_alloy', 72))
        .itemOutputs('1x fracturepoint:simple_nvg_goggles')
        .duration(15 * 20)
        .EUt(GTValues.VA[GTValues.MV])

    event.recipes.gtceu.assembler('fp_nvg_goggles')
        .itemInputs('4x gtceu:stainless_steel_plate', '2x gtceu:glass_lens', '2x fracturepoint:nvg_battery', '1x gtceu:hv_sensor', '1x gtceu:hv_emitter', '1x #gtceu:circuits/hv')
        .inputFluids(Fluid.of('gtceu:soldering_alloy', 144))
        .itemOutputs('1x fracturepoint:nvg_goggles')
        .duration(20 * 20)
        .EUt(GTValues.VA[GTValues.HV])

    event.recipes.gtceu.assembler('fp_thermal_goggles')
        .itemInputs('4x gtceu:stainless_steel_plate', '2x gtceu:glass_lens', '2x fracturepoint:nvg_battery', '2x gtceu:hv_sensor', '1x #gtceu:circuits/hv')
        .inputFluids(Fluid.of('gtceu:soldering_alloy', 144))
        .itemOutputs('1x fracturepoint:thermal_goggles')
        .duration(25 * 20)
        .EUt(GTValues.VA[GTValues.HV])

    event.recipes.gtceu.assembler('fp_digital_goggles')
        .itemInputs('4x gtceu:stainless_steel_plate', '2x gtceu:glass_plate', '2x fracturepoint:nvg_battery', '1x gtceu:hv_sensor', '2x gtceu:smd_transistor', '1x #gtceu:circuits/hv')
        .inputFluids(Fluid.of('gtceu:soldering_alloy', 144))
        .itemOutputs('1x fracturepoint:digital_goggles')
        .duration(25 * 20)
        .EUt(GTValues.VA[GTValues.HV])

    event.recipes.gtceu.assembler('fp_backpack_upgrade_tier2')
        .itemInputs('4x gtceu:stainless_steel_plate', '4x gtceu:rubber_plate', '1x #gtceu:circuits/hv')
        .inputFluids(Fluid.of('gtceu:soldering_alloy', 72))
        .itemOutputs('1x fracturepoint:backpack_upgrade_tier2')
        .duration(15 * 20)
        .EUt(GTValues.VA[GTValues.HV])

    event.recipes.gtceu.assembler('fp_tagilla_molot')
        .itemInputs('4x gtceu:stainless_steel_plate', '1x gtceu:long_stainless_steel_rod')
        .inputFluids(Fluid.of('gtceu:soldering_alloy', 72))
        .itemOutputs('1x fracturepoint:tagilla_molot')
        .duration(20 * 20)
        .EUt(GTValues.VA[GTValues.HV])

    event.recipes.gtceu.assembler('fp_backpack_upgrade_tier3')
        .itemInputs('4x gtceu:titanium_plate', '4x gtceu:silicone_rubber_plate', '1x gtceu:ev_emitter', '1x #gtceu:circuits/ev')
        .inputFluids(Fluid.of('gtceu:soldering_alloy', 144))
        .itemOutputs('1x fracturepoint:backpack_upgrade_tier3')
        .duration(25 * 20)
        .EUt(GTValues.VA[GTValues.EV])

    const mvHelm = [
        'fracturepoint:ru_helmet',
        'fracturepoint:nato_sqad_leader_helmet',
        'fracturepoint:nato_ukr_helmet',
        'fracturepoint:nato_helmet',
        'fracturepoint:nato_sqad_leader_helmet_woodland',
        'fracturepoint:nato_ukr_helmet_woodland',
        'fracturepoint:nato_helmet_woodland',
        'fracturepoint:soviet_soldier_helmet',
        'fracturepoint:soviet_officer_helmet',
        'fracturepoint:insurgency_commander_helmet',
        'fracturepoint:insurgency_shturmovik_helmet',
    ]
    var dex = 0;
    mvHelm.forEach(item => {
        dex++;
        const key = 'fp_' + item.replace('fracturepoint:', '').replace(/-/g, '_')
        event.recipes.gtceu.assembler(key)
            .itemInputs('3x gtceu:steel_plate', '1x gtceu:rubber_plate')
            .inputFluids(Fluid.of('gtceu:soldering_alloy', 72))
            .itemOutputs(`1x ${item}`)
            .duration(10 * 20)
            .circuit(dex)
            .EUt(GTValues.VA[GTValues.MV])
    })

    const mvChest = [
        'fracturepoint:shturmovik_ru_chestplate',
        'fracturepoint:shturmovikv2_chestplate',
        'fracturepoint:razvetchik_chestplate',
        'fracturepoint:mashinegunner_ru_chestplate',
        'fracturepoint:squad_lider_ru_chestplate',
        'fracturepoint:nato_sqad_leader_chestplate',
        'fracturepoint:nato_ukr_chestplate',
        'fracturepoint:nato_shturmovik2_chestplate',
        'fracturepoint:nato_shturmovik_chestplate',
        'fracturepoint:nato_mg_chestplate',
        'fracturepoint:nato_sqad_leader_chestplate_woodland',
        'fracturepoint:nato_ukr_chestplate_woodland',
        'fracturepoint:nato_shturmovik2_chestplate_woodland',
        'fracturepoint:nato_shturmovik_chestplate_woodland',
        'fracturepoint:nato_mg_chestplate_woodland',
        'fracturepoint:soviet_soldier_chestplate',
        'fracturepoint:soviet_officer_chestplate',
        'fracturepoint:insurgency_commander_chestplate',
        'fracturepoint:insurgency_shturmovik_chestplate',
    ]
    dex = 0;
    mvChest.forEach(item => {
        dex++;
        const key = 'fp_' + item.replace('fracturepoint:', '').replace(/-/g, '_')
        event.recipes.gtceu.assembler(key)
            .itemInputs('5x gtceu:steel_plate', '2x gtceu:rubber_plate')
            .inputFluids(Fluid.of('gtceu:soldering_alloy', 144))
            .itemOutputs(`1x ${item}`)
            .duration(15 * 20)
            .circuit(dex)
            .EUt(GTValues.VA[GTValues.MV])
    })

    const mvShoulder = [
        'fracturepoint:ru_shoulderpads',
        'fracturepoint:nato_shoulderpads',
        'fracturepoint:nato_shoulderpads_woodland',
        'fracturepoint:insurgency_commander_shoulderpads',
    ]
    dex = 0;
    mvShoulder.forEach(item => {
        dex++;
        const key = 'fp_' + item.replace('fracturepoint:', '').replace(/-/g, '_')
        event.recipes.gtceu.assembler(key)
            .itemInputs('2x gtceu:steel_plate', '1x gtceu:rubber_plate')
            .inputFluids(Fluid.of('gtceu:soldering_alloy', 36))
            .itemOutputs(`1x ${item}`)
            .circuit(dex)
            .duration(8 * 20)
            .EUt(GTValues.VA[GTValues.MV])
    })

    dex = 0;
    const mvBackpack = [
        'fracturepoint:squad_lider_ru_backpack',
        'fracturepoint:shturmovik_ru_backpack',
        'fracturepoint:nato_sqad_leader_backpack',
        'fracturepoint:nato_sqad_leader_backpack_woodland',
        'fracturepoint:soviet_soldier_backpack',
        'fracturepoint:insurgency_shturmovik_backpack',
    ]
    mvBackpack.forEach(item => {
        dex++;
        const key = 'fp_' + item.replace('fracturepoint:', '').replace(/-/g, '_')
        event.recipes.gtceu.assembler(key)
            .itemInputs('3x gtceu:steel_plate', '2x gtceu:rubber_plate')
            .inputFluids(Fluid.of('gtceu:soldering_alloy', 72))
            .itemOutputs(`1x ${item}`)
            .circuit(dex)
            .duration(10 * 20)
            .EUt(GTValues.VA[GTValues.MV])
    })

    dex = 0;
    const mvSoft = [
        'fracturepoint:soviet_uniform',
        'fracturepoint:soviet_leggings',
        'fracturepoint:insurgency_commander_leggings',
    ]
    mvSoft.forEach(item => {
        dex++;
        const key = 'fp_' + item.replace('fracturepoint:', '').replace(/-/g, '_')
        event.recipes.gtceu.assembler(key)
            .itemInputs('4x gtceu:rubber_plate')
            .itemOutputs(`1x ${item}`)
            .circuit(dex)
            .duration(8 * 20)
            .EUt(GTValues.VA[GTValues.MV])
    })

    const hvHelm = [
        'fracturepoint:sso_squad_leader_helmet',
        'fracturepoint:sso_soldier_helmet',
        'fracturepoint:sso_machine_gunner_helmet',
        'fracturepoint:fsb_soldier_helmet',
        'fracturepoint:fsb_squad_leader_helmet',
        'fracturepoint:fsb_machine_gunner_helmet',
    ]
    dex = 0;
    hvHelm.forEach(item => {
        dex++;
        const key = 'fp_' + item.replace('fracturepoint:', '').replace(/-/g, '_')
        event.recipes.gtceu.assembler(key)
            .itemInputs('3x gtceu:stainless_steel_plate', '1x gtceu:silicone_rubber_plate')
            .inputFluids(Fluid.of('gtceu:soldering_alloy', 72))
            .itemOutputs(`1x ${item}`)
            .circuit(dex)
            .duration(10 * 20)
            .EUt(GTValues.VA[GTValues.HV])
    })

    const hvChest = [
        'fracturepoint:sso_squad_leader_chestplate',
        'fracturepoint:sso_soldier_chestplate',
        'fracturepoint:sso_machine_gunner_chestplate',
        'fracturepoint:fsb_soldier_chestplate',
        'fracturepoint:fsb_squad_leader_chestplate',
        'fracturepoint:fsb_machine_gunner_chestplate',
    ]
    dex = 0;
    hvChest.forEach(item => {
        dex++;
        const key = 'fp_' + item.replace('fracturepoint:', '').replace(/-/g, '_')
        event.recipes.gtceu.assembler(key)
            .itemInputs('5x gtceu:stainless_steel_plate', '2x gtceu:silicone_rubber_plate')
            .inputFluids(Fluid.of('gtceu:soldering_alloy', 144))
            .itemOutputs(`1x ${item}`)
            .circuit(dex)
            .duration(15 * 20)
            .EUt(GTValues.VA[GTValues.HV])
    })

    event.recipes.gtceu.assembler('fp_sso_shoulderpads')
        .itemInputs('2x gtceu:stainless_steel_plate', '1x gtceu:silicone_rubber_plate')
        .inputFluids(Fluid.of('gtceu:soldering_alloy', 36))
        .itemOutputs('1x fracturepoint:sso_shoulderpads')
        .duration(8 * 20)
        .EUt(GTValues.VA[GTValues.HV])

    const hvBackpack = [
        'fracturepoint:sso_soldier_backpack',
        'fracturepoint:sso_machine_gunner_backpack',
    ]
    dex = 0;
    hvBackpack.forEach(item => {
        dex++;
        const key = 'fp_' + item.replace('fracturepoint:', '').replace(/-/g, '_')
        event.recipes.gtceu.assembler(key)
            .itemInputs('3x gtceu:stainless_steel_plate', '2x gtceu:silicone_rubber_plate')
            .inputFluids(Fluid.of('gtceu:soldering_alloy', 72))
            .itemOutputs(`1x ${item}`)
            .circuit(dex)
            .duration(10 * 20)
            .EUt(GTValues.VA[GTValues.HV])
    })

    const hvLegs = [
        'fracturepoint:sso_squad_leader_leggings',
        'fracturepoint:sso_soldier_leggings',
        'fracturepoint:sso_machine_gunner_leggings',
        'fracturepoint:fsb_leggings',
    ]
    dex = 0;
    hvLegs.forEach(item => {
        dex++;
        const key = 'fp_' + item.replace('fracturepoint:', '').replace(/-/g, '_')
        event.recipes.gtceu.assembler(key)
            .itemInputs('3x gtceu:stainless_steel_plate', '1x gtceu:silicone_rubber_plate')
            .inputFluids(Fluid.of('gtceu:soldering_alloy', 72))
            .itemOutputs(`1x ${item}`)
            .circuit(dex)
            .duration(10 * 20)
            .EUt(GTValues.VA[GTValues.HV])
    })

    const hvSoft = [
        'fracturepoint:fsb_uniform',
        'fracturepoint:fsb_vkpo_cap',
        'fracturepoint:fsb_panama',
    ]
    dex = 0;
    hvSoft.forEach(item => {
        dex++;
        const key = 'fp_' + item.replace('fracturepoint:', '').replace(/-/g, '_')
        event.recipes.gtceu.assembler(key)
            .itemInputs('4x gtceu:silicone_rubber_plate')
            .itemOutputs(`1x ${item}`)
            .duration(8 * 20)
            .circuit(dex)
            .EUt(GTValues.VA[GTValues.HV])
    })

    const evHelm = [
        'fracturepoint:ratnik_helmet',
        'fracturepoint:beta7_helmet',
        'fracturepoint:beta7_helmet_slate',
        'fracturepoint:beta7_helmet_ash',
    ]
    dex = 0;
    evHelm.forEach(item => {
        dex++;
        const key = 'fp_' + item.replace('fracturepoint:', '').replace(/-/g, '_')
        event.recipes.gtceu.assembler(key)
            .itemInputs('3x gtceu:titanium_plate', '1x gtceu:silicone_rubber_plate')
            .inputFluids(Fluid.of('gtceu:soldering_alloy', 72))
            .itemOutputs(`1x ${item}`)
            .duration(15 * 20)
            .circuit(dex)
            .EUt(GTValues.VA[GTValues.EV])
    })

    event.recipes.gtceu.assembler('fp_ratnik_pmk_4')
        .itemInputs('3x gtceu:titanium_plate', '1x gtceu:silicone_rubber_plate', '1x gtceu:glass_lens')
        .inputFluids(Fluid.of('gtceu:soldering_alloy', 72))
        .itemOutputs('1x fracturepoint:ratnik_pmk-4')
        .duration(15 * 20)
        .EUt(GTValues.VA[GTValues.EV])

    const evNvgHelm = [
        'fracturepoint:beta7_nvg_helmet',
        'fracturepoint:beta7_nvg_helmet_slate',
        'fracturepoint:beta7_nvg_helmet_ash',
    ]
    dex = 0;
    evNvgHelm.forEach(item => {
        dex++;
        const key = 'fp_' + item.replace('fracturepoint:', '').replace(/-/g, '_')
        event.recipes.gtceu.assembler(key)
            .itemInputs('3x gtceu:titanium_plate', '1x gtceu:silicone_rubber_plate', '1x fracturepoint:nvg_goggles')
            .inputFluids(Fluid.of('gtceu:soldering_alloy', 144))
            .itemOutputs(`1x ${item}`)
            .circuit(dex)
            .duration(20 * 20)
            .EUt(GTValues.VA[GTValues.EV])
    })

    event.recipes.gtceu.assembler('fp_killa_helmet')
        .itemInputs('5x gtceu:titanium_plate', '2x gtceu:silicone_rubber_plate')
        .inputFluids(Fluid.of('gtceu:soldering_alloy', 144))
        .itemOutputs('1x fracturepoint:killa_helmet')
        .duration(25 * 20)
        .EUt(GTValues.VA[GTValues.EV])

    event.recipes.gtceu.assembler('fp_tagilla_helmet')
        .itemInputs('4x gtceu:stainless_steel_plate', '2x gtceu:silicone_rubber_plate', '1x gtceu:glass_plate')
        .inputFluids(Fluid.of('gtceu:soldering_alloy', 144))
        .itemOutputs('1x fracturepoint:tagilla_helmet')
        .duration(20 * 20)
        .EUt(GTValues.VA[GTValues.EV])

    const evChest = [
        'fracturepoint:ratnik_chestplate',
        'fracturepoint:ratnik_chestplate_variant',
        'fracturepoint:beta7_chestplate',
        'fracturepoint:beta7_chestplate_slate',
        'fracturepoint:beta7_chestplate_ash',
    ]
    dex = 0;
    evChest.forEach(item => {
        dex++;
        const key = 'fp_' + item.replace('fracturepoint:', '').replace(/-/g, '_')
        event.recipes.gtceu.assembler(key)
            .itemInputs('5x gtceu:titanium_plate', '2x gtceu:silicone_rubber_plate')
            .inputFluids(Fluid.of('gtceu:soldering_alloy', 144))
            .itemOutputs(`1x ${item}`)
            .circuit(dex)
            .duration(20 * 20)
            .EUt(GTValues.VA[GTValues.EV])
    })

    event.recipes.gtceu.assembler('fp_killa_chestplate')
        .itemInputs('8x gtceu:titanium_plate', '3x gtceu:silicone_rubber_plate')
        .inputFluids(Fluid.of('gtceu:soldering_alloy', 288))
        .itemOutputs('1x fracturepoint:killa_chestplate')
        .duration(30 * 20)
        .EUt(GTValues.VA[GTValues.EV])

    event.recipes.gtceu.assembler('fp_tagilla_chestplate')
        .itemInputs('6x gtceu:stainless_steel_plate', '2x gtceu:silicone_rubber_plate')
        .inputFluids(Fluid.of('gtceu:soldering_alloy', 144))
        .itemOutputs('1x fracturepoint:tagilla_chestplate')
        .duration(20 * 20)
        .EUt(GTValues.VA[GTValues.EV])

    event.recipes.gtceu.assembler('fp_tagilla_leggings')
        .itemInputs('4x gtceu:stainless_steel_plate', '1x gtceu:silicone_rubber_plate')
        .inputFluids(Fluid.of('gtceu:soldering_alloy', 72))
        .itemOutputs('1x fracturepoint:tagilla_leggings')
        .duration(15 * 20)
        .EUt(GTValues.VA[GTValues.EV])

    const evShoulder = [
        'fracturepoint:beta7_shoulderpads',
        'fracturepoint:beta7_shoulderpads_slate',
        'fracturepoint:beta7_shoulderpads_ash',
    ]
    dex = 0;
    evShoulder.forEach(item => {
        dex++;
        const key = 'fp_' + item.replace('fracturepoint:', '').replace(/-/g, '_')
        event.recipes.gtceu.assembler(key)
            .itemInputs('2x gtceu:titanium_plate', '1x gtceu:silicone_rubber_plate')
            .inputFluids(Fluid.of('gtceu:soldering_alloy', 36))
            .itemOutputs(`1x ${item}`)
            .circuit(dex)
            .duration(10 * 20)
            .EUt(GTValues.VA[GTValues.EV])
    })

    event.recipes.gtceu.assembler('fp_ratnik_backpack')
        .itemInputs('3x gtceu:titanium_plate', '2x gtceu:silicone_rubber_plate')
        .inputFluids(Fluid.of('gtceu:soldering_alloy', 72))
        .itemOutputs('1x fracturepoint:ratnik_backpack')
        .duration(15 * 20)
        .EUt(GTValues.VA[GTValues.EV])

    const evSoft = [
        'fracturepoint:ratnik_uniform',
        'fracturepoint:ratnik_uniform_variant',
        'fracturepoint:beta7_uniform',
    ]
    dex = 0;
    evSoft.forEach(item => {
        dex++;
        const key = 'fp_' + item.replace('fracturepoint:', '').replace(/-/g, '_')
        event.recipes.gtceu.assembler(key)
            .itemInputs('4x gtceu:silicone_rubber_plate', '1x gtceu:carbon_fiber_plate')
            .itemOutputs(`1x ${item}`)
            .duration(10 * 20)
            .circuit(dex)
            .EUt(GTValues.VA[GTValues.EV])
    })

    const evLegs = [
        'fracturepoint:ratnik_leggings',
        'fracturepoint:beta7_leggings',
        'fracturepoint:beta7_leggings_slate',
        'fracturepoint:beta7_leggings_ash',
    ]
    dex = 0;
    evLegs.forEach(item => {
        dex++;
        const key = 'fp_' + item.replace('fracturepoint:', '').replace(/-/g, '_')
        event.recipes.gtceu.assembler(key)
            .itemInputs('3x gtceu:titanium_plate', '1x gtceu:silicone_rubber_plate')
            .inputFluids(Fluid.of('gtceu:soldering_alloy', 72))
            .itemOutputs(`1x ${item}`)
            .circuit(dex)
            .duration(15 * 20)
            .EUt(GTValues.VA[GTValues.EV])
    })

    const evBoots = [
        'fracturepoint:ratnik_boots',
        'fracturepoint:beta7_boots',
        'fracturepoint:beta7_boots_slate',
        'fracturepoint:beta7_boots_ash',
    ]
    dex = 0;
    evBoots.forEach(item => {
        dex++;
        const key = 'fp_' + item.replace('fracturepoint:', '').replace(/-/g, '_')
        event.recipes.gtceu.assembler(key)
            .itemInputs('2x gtceu:titanium_plate', '2x gtceu:silicone_rubber_plate')
            .inputFluids(Fluid.of('gtceu:soldering_alloy', 36))
            .itemOutputs(`1x ${item}`)
            .circuit(dex)
            .duration(10 * 20)
            .EUt(GTValues.VA[GTValues.EV])
    })

})
