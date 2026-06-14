ServerEvents.recipes(event => {

    event.remove({ id: 'legendarysurvivaloverhaul:sewing_table' })
    event.remove({ id: 'legendarysurvivaloverhaul:heater' })
    event.remove({ id: 'legendarysurvivaloverhaul:cooler' })
    event.remove({ id: 'legendarysurvivaloverhaul:canteen' })
    event.remove({ id: 'legendarysurvivaloverhaul:thermometer' })
    event.remove({ id: 'legendarysurvivaloverhaul:large_canteen' })
    event.remove({ id: 'legendarysurvivaloverhaul:medkit' })
    event.remove({ id: 'legendarysurvivaloverhaul:morphine' })
    event.remove({ id: 'legendarysurvivaloverhaul:cooling_coat_1' })
    event.remove({ id: 'legendarysurvivaloverhaul:cooling_coat_2' })
    event.remove({ id: 'legendarysurvivaloverhaul:cooling_coat_3' })
    event.remove({ id: 'legendarysurvivaloverhaul:heating_coat_1' })
    event.remove({ id: 'legendarysurvivaloverhaul:heating_coat_2' })
    event.remove({ id: 'legendarysurvivaloverhaul:heating_coat_3' })
    event.remove({ id: 'legendarysurvivaloverhaul:thermal_coat_1' })
    event.remove({ id: 'legendarysurvivaloverhaul:thermal_coat_2' })
    event.remove({ id: 'legendarysurvivaloverhaul:thermal_coat_3' })
    event.remove({ id: 'legendarysurvivaloverhaul:thermal_resistance_ring' })

    event.shaped('legendarysurvivaloverhaul:sewing_table', ['WCW', 'R W', 'PPP'], {
        W: 'gtceu:wrought_iron_ingot',
        C: 'gtceu:copper_single_wire',
        R: 'minecraft:redstone',
        P: '#minecraft:planks'
    })

    event.shaped('legendarysurvivaloverhaul:heater', [' W ', 'WCW', 'WKW'], {
        W: 'gtceu:wrought_iron_ingot',
        C: 'minecraft:campfire',
        K: 'minecraft:coal_block'
    })

    event.shaped('legendarysurvivaloverhaul:cooler', ['WPW', 'WRW', 'WIW'], {
        W: 'gtceu:wrought_iron_ingot',
        P: 'minecraft:snow_block',
        R: 'minecraft:redstone',
        I: 'minecraft:packed_ice'
    })

    event.shaped('legendarysurvivaloverhaul:canteen', [' W ', 'LCL', 'LLL'], {
        W: 'gtceu:wrought_iron_ingot',
        L: 'minecraft:leather',
        C: 'gtceu:copper_single_wire'
    })

    event.recipes.gtceu.assembler('lso_thermometer')
        .itemInputs('2x minecraft:glass_pane', 'create:golden_sheet', 'create:iron_sheet', 'minecraft:redstone', '#gtceu:circuits/lv')
        .inputFluids(Fluid.of('gtceu:soldering_alloy', 72))
        .itemOutputs('legendarysurvivaloverhaul:thermometer')
        .duration(10 * 20)
        .EUt(GTValues.VA[GTValues.LV])

    event.recipes.gtceu.assembler('lso_large_canteen')
        .itemInputs('4x gtceu:steel_plate', '3x minecraft:leather', 'gtceu:steel_small_fluid_pipe', '#gtceu:circuits/mv')
        .inputFluids(Fluid.of('gtceu:soldering_alloy', 72))
        .itemOutputs('legendarysurvivaloverhaul:large_canteen')
        .duration(15 * 20)
        .EUt(GTValues.VA[GTValues.MV])

    event.recipes.gtceu.assembler('lso_medkit')
        .itemInputs('2x legendarysurvivaloverhaul:bandage', 'legendarysurvivaloverhaul:tonic', '2x gtceu:stainless_steel_plate', '2x minecraft:string')
        .itemOutputs('legendarysurvivaloverhaul:medkit')
        .duration(15 * 20)
        .EUt(GTValues.VA[GTValues.MV])

    event.recipes.gtceu.chemical_reactor('lso_morphine')
        .itemInputs('3x legendarysurvivaloverhaul:healing_herbs', 'minecraft:glass_bottle')
        .inputFluids(Fluid.of('gtceu:sulfuric_acid', 100))
        .itemOutputs('legendarysurvivaloverhaul:morphine')
        .duration(20 * 20)
        .EUt(GTValues.VA[GTValues.MV])

    event.recipes.gtceu.assembler('lso_cold_string_tech')
        .itemInputs('4x minecraft:string', '3x legendarysurvivaloverhaul:ice_fern_leaf')
        .itemOutputs('4x legendarysurvivaloverhaul:cold_string')
        .duration(8 * 20)
        .EUt(GTValues.VA[GTValues.LV])

    event.recipes.ars_nouveau.imbuement('minecraft:string', 'legendarysurvivaloverhaul:cold_string', 500,
        ['legendarysurvivaloverhaul:ice_fern_leaf', 'legendarysurvivaloverhaul:ice_fern_leaf', 'minecraft:snow_block'])

    event.recipes.gtceu.assembler('lso_warm_string_tech')
        .itemInputs('4x minecraft:string', '3x legendarysurvivaloverhaul:sun_fern_leaf')
        .itemOutputs('4x legendarysurvivaloverhaul:warm_string')
        .duration(8 * 20)
        .EUt(GTValues.VA[GTValues.LV])

    event.recipes.ars_nouveau.imbuement('minecraft:string', 'legendarysurvivaloverhaul:warm_string', 500,
        ['legendarysurvivaloverhaul:sun_fern_leaf', 'legendarysurvivaloverhaul:sun_fern_leaf', 'minecraft:blaze_powder'])

    event.recipes.gtceu.assembler('lso_cooling_coat_1_tech')
        .itemInputs('4x legendarysurvivaloverhaul:cold_string', '2x create:iron_sheet', 'gtceu:tin_single_wire', '#gtceu:circuits/lv')
        .itemOutputs('legendarysurvivaloverhaul:cooling_coat_1')
        .duration(15 * 20)
        .EUt(GTValues.VA[GTValues.LV])

    event.recipes.ars_nouveau.imbuement('legendarysurvivaloverhaul:cold_string', 'legendarysurvivaloverhaul:cooling_coat_1', 1000,
        ['gtceu:luminessence_dust', 'legendarysurvivaloverhaul:ice_fern_leaf', 'minecraft:snow_block', 'minecraft:snowball'])

    event.recipes.gtceu.assembler('lso_cooling_coat_2_tech')
        .itemInputs('legendarysurvivaloverhaul:cooling_coat_1', 'gtceu:diamond_plate', 'minecraft:packed_ice', '#gtceu:circuits/mv')
        .inputFluids(Fluid.of('gtceu:distilled_water', 500))
        .itemOutputs('legendarysurvivaloverhaul:cooling_coat_2')
        .duration(20 * 20)
        .EUt(GTValues.VA[GTValues.MV])

    event.recipes.ars_nouveau.enchanting_apparatus(
        ['ars_nouveau:source_gem', 'ars_nouveau:source_gem', 'minecraft:blue_ice', 'minecraft:blue_ice'],
        'legendarysurvivaloverhaul:cooling_coat_1', 'legendarysurvivaloverhaul:cooling_coat_2', 2000)

    event.recipes.gtceu.assembler('lso_cooling_coat_3_tech')
        .itemInputs('legendarysurvivaloverhaul:cooling_coat_2', '2x gtceu:titanium_plate', '2x minecraft:blue_ice', '#gtceu:circuits/hv')
        .inputFluids(Fluid.of('gtceu:distilled_water', 1000))
        .itemOutputs('legendarysurvivaloverhaul:cooling_coat_3')
        .duration(25 * 20)
        .EUt(GTValues.VA[GTValues.HV])

    event.recipes.ars_nouveau.enchanting_apparatus(
        ['kubejs:sacred_ambrosium_shard', 'gtceu:holy_silver_plate', '#kubejs:water_essences', '#kubejs:water_essences'],
        'legendarysurvivaloverhaul:cooling_coat_2', 'legendarysurvivaloverhaul:cooling_coat_3', 3000)

    event.recipes.gtceu.assembler('lso_heating_coat_1_tech')
        .itemInputs('4x legendarysurvivaloverhaul:warm_string', '2x create:iron_sheet', 'gtceu:tin_single_wire', '#gtceu:circuits/lv')
        .itemOutputs('legendarysurvivaloverhaul:heating_coat_1')
        .duration(15 * 20)
        .EUt(GTValues.VA[GTValues.LV])

    event.recipes.ars_nouveau.imbuement('legendarysurvivaloverhaul:warm_string', 'legendarysurvivaloverhaul:heating_coat_1', 1000,
        ['gtceu:luminessence_dust', 'legendarysurvivaloverhaul:sun_fern_leaf', 'minecraft:magma_cream', 'minecraft:blaze_powder'])

    event.recipes.gtceu.assembler('lso_heating_coat_2_tech')
        .itemInputs('legendarysurvivaloverhaul:heating_coat_1', 'gtceu:invar_plate', '2x minecraft:blaze_rod', '#gtceu:circuits/mv')
        .inputFluids(Fluid.of('minecraft:lava', 250))
        .itemOutputs('legendarysurvivaloverhaul:heating_coat_2')
        .duration(20 * 20)
        .EUt(GTValues.VA[GTValues.MV])

    event.recipes.ars_nouveau.enchanting_apparatus(
        ['ars_nouveau:source_gem', 'ars_nouveau:source_gem', 'minecraft:magma_block', 'minecraft:blaze_rod'],
        'legendarysurvivaloverhaul:heating_coat_1', 'legendarysurvivaloverhaul:heating_coat_2', 2000)

    event.recipes.gtceu.assembler('lso_heating_coat_3_tech')
        .itemInputs('legendarysurvivaloverhaul:heating_coat_2', '2x gtceu:titanium_plate', '2x minecraft:blaze_rod', '#gtceu:circuits/hv')
        .inputFluids(Fluid.of('minecraft:lava', 1000))
        .itemOutputs('legendarysurvivaloverhaul:heating_coat_3')
        .duration(25 * 20)
        .EUt(GTValues.VA[GTValues.HV])

    event.recipes.ars_nouveau.enchanting_apparatus(
        ['kubejs:sacred_ambrosium_shard', 'gtceu:holy_silver_plate', '#kubejs:fire_essences', '#kubejs:fire_essences'],
        'legendarysurvivaloverhaul:heating_coat_2', 'legendarysurvivaloverhaul:heating_coat_3', 3000)

    event.recipes.gtceu.assembler('lso_thermal_coat_1_tech')
        .itemInputs('legendarysurvivaloverhaul:cooling_coat_1', 'legendarysurvivaloverhaul:heating_coat_1', 'gtceu:stainless_steel_plate', '#gtceu:circuits/mv')
        .inputFluids(Fluid.of('gtceu:soldering_alloy', 72))
        .itemOutputs('legendarysurvivaloverhaul:thermal_coat_1')
        .duration(20 * 20)
        .EUt(GTValues.VA[GTValues.MV])

    event.recipes.ars_nouveau.enchanting_apparatus(
        ['legendarysurvivaloverhaul:heating_coat_1', 'ars_nouveau:source_gem', 'ars_nouveau:source_gem', 'ars_nouveau:source_gem'],
        'legendarysurvivaloverhaul:cooling_coat_1', 'legendarysurvivaloverhaul:thermal_coat_1', 2500)

    event.recipes.gtceu.assembler('lso_thermal_coat_2_tech')
        .itemInputs('legendarysurvivaloverhaul:cooling_coat_2', 'legendarysurvivaloverhaul:heating_coat_2', 'gtceu:titanium_plate', '#gtceu:circuits/hv')
        .inputFluids(Fluid.of('gtceu:soldering_alloy', 144))
        .itemOutputs('legendarysurvivaloverhaul:thermal_coat_2')
        .duration(25 * 20)
        .EUt(GTValues.VA[GTValues.HV])

    event.recipes.ars_nouveau.enchanting_apparatus(
        ['legendarysurvivaloverhaul:heating_coat_2', 'kubejs:sacred_ambrosium_shard', 'gtceu:holy_silver_plate', '#kubejs:earth_essences'],
        'legendarysurvivaloverhaul:cooling_coat_2', 'legendarysurvivaloverhaul:thermal_coat_2', 3500)

    event.recipes.gtceu.assembler('lso_thermal_coat_3_tech')
        .itemInputs('legendarysurvivaloverhaul:cooling_coat_3', 'legendarysurvivaloverhaul:heating_coat_3', 'gtceu:tungsten_steel_plate', '#gtceu:circuits/ev')
        .inputFluids(Fluid.of('gtceu:soldering_alloy', 288))
        .itemOutputs('legendarysurvivaloverhaul:thermal_coat_3')
        .duration(30 * 20)
        .EUt(GTValues.VA[GTValues.EV])

    event.recipes.ars_nouveau.enchanting_apparatus(
        ['legendarysurvivaloverhaul:heating_coat_3', 'gtceu:prima_materia_ingot', 'kubejs:element_attunement_stone', '#kubejs:air_essences'],
        'legendarysurvivaloverhaul:cooling_coat_3', 'legendarysurvivaloverhaul:thermal_coat_3', 5000)

    event.recipes.ars_nouveau.enchanting_apparatus(
        ['ars_nouveau:source_gem', 'ars_nouveau:source_gem', 'legendarysurvivaloverhaul:sun_fern_leaf', 'legendarysurvivaloverhaul:sun_fern_leaf', 'minecraft:magma_cream'],
        'minecraft:gold_ingot', 'legendarysurvivaloverhaul:heat_resistance_ring', 1500)

    event.recipes.ars_nouveau.enchanting_apparatus(
        ['ars_nouveau:source_gem', 'ars_nouveau:source_gem', 'legendarysurvivaloverhaul:ice_fern_leaf', 'legendarysurvivaloverhaul:ice_fern_leaf', 'minecraft:snowball'],
        'minecraft:gold_ingot', 'legendarysurvivaloverhaul:cold_resistance_ring', 1500)

    event.recipes.ars_nouveau.enchanting_apparatus(
        ['legendarysurvivaloverhaul:heat_resistance_ring', 'gtceu:prima_materia_ingot', '#kubejs:fire_essences', '#kubejs:water_essences'],
        'legendarysurvivaloverhaul:cold_resistance_ring', 'legendarysurvivaloverhaul:thermal_resistance_ring', 5000)

    event.recipes.ars_nouveau.enchanting_apparatus(
        ['kubejs:sacred_ambrosium_shard', 'gtceu:holy_silver_ingot', '#kubejs:fire_essences', 'minecraft:blaze_rod', 'minecraft:blaze_rod'],
        'minecraft:glass_bottle', 'legendarysurvivaloverhaul:nether_chalice', 4000)

    event.recipes.ars_nouveau.enchanting_apparatus(
        ['ars_nouveau:source_gem', 'ars_nouveau:source_gem', '#kubejs:water_essences', '#kubejs:water_essences', 'minecraft:sea_lantern'],
        'minecraft:sponge', 'legendarysurvivaloverhaul:sponge', 1500)

    event.recipes.ars_nouveau.enchanting_apparatus(
        ['kubejs:sacred_ambrosium_shard', 'gtceu:holy_silver_ingot', '#kubejs:water_essences', 'ars_nouveau:source_gem'],
        'minecraft:glass_bottle', 'legendarysurvivaloverhaul:water_purifier', 3000)

    event.recipes.ars_nouveau.enchanting_apparatus(
        ['kubejs:sacred_ambrosium_shard', 'irons_spellbooks:divine_pearl', 'ars_nouveau:source_gem', 'legendarysurvivaloverhaul:healing_herbs'],
        'legendarysurvivaloverhaul:medkit', 'legendarysurvivaloverhaul:first_aid_supplies', 3500)

})
