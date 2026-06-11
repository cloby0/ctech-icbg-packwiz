ServerEvents.recipes(event => {

    // Leave alone (already gated by Create machines or CNA energising recipes):
    // - overcharged_iron/gold/diamond (energising recipe type)
    // - blank_circuit (Create superheated compacting)
    // - copper_circuit (Create deploying blank_circuit)
    // - copper_wire <-> copper_wire_block (circular conversion, wires come from CNA cutting)
    // - overcharged_iron/golden/diamond wire + wire_blocks (Create cutting + sequenced)
    // - reactor_casing, nuclear_fuel (Create sequenced assembly)
    // - reactor_glass, reactor_fuel_acceptor, reactor_rod, reactor_heat_vent (sequenced/mech crafting)
    // - reinforced_motor, advanced_motor_extension (Create mechanical crafting)
    // - thorium, radioactive_thorium (Create mixing/crushing)
    // - overcharged_iron/golden sheets (Create pressing)

    const cna_items = [
        'create_new_age:basic_energiser',
        'create_new_age:advanced_energiser',
        'create_new_age:reinforced_energiser',
        'create_new_age:basic_motor',
        'create_new_age:advanced_motor',
        'create_new_age:basic_motor_extension',
        'create_new_age:generator_coil',
        'create_new_age:electrical_connector',
        'create_new_age:carbon_brushes',
        'create_new_age:heat_pipe',
        'create_new_age:heat_pump',
        'create_new_age:heater',
        'create_new_age:stirling_engine',
        'create_new_age:basic_solar_heating_plate',
        'create_new_age:advanced_solar_heating_plate',
        'create_new_age:redstone_magnet',
        'create_new_age:layered_magnet',
        'create_new_age:netherite_magnet',
        'create_new_age:fluxuated_magnetite',
    ]
    cna_items.forEach(item => event.remove({ output: item }))

    // ENERGISERS
    event.recipes.gtceu.assembler('cna_basic_energiser')
        .itemInputs(
            'create:andesite_casing',
            '4x create:copper_sheet',
            'minecraft:lightning_rod',
            '1x #gtceu:circuits/mv',
        )
        .itemOutputs('create_new_age:basic_energiser')
        .duration(10 * 20)
        .EUt(GTValues.VA[GTValues.MV])

    // advanced_energiser: field generator gates this to players who have built GT EBF (MV→HV bridge)
    event.recipes.gtceu.assembler('cna_advanced_energiser')
        .itemInputs(
            'create_new_age:basic_energiser',
            '2x create_new_age:overcharged_gold',
            '2x minecraft:lightning_rod',
            '1x gtceu:mv_field_generator',
            '1x #gtceu:circuits/hv',
        )
        .itemOutputs('create_new_age:advanced_energiser')
        .duration(12 * 20)
        .EUt(GTValues.VA[GTValues.HV])

    event.recipes.gtceu.assembler('cna_reinforced_energiser')
        .itemInputs(
            'create_new_age:advanced_energiser',
            '2x create_new_age:overcharged_diamond',
            '4x create:copper_sheet',
            '2x gtceu:stainless_steel_plate',
            '1x gtceu:hv_field_generator',
            '1x #gtceu:circuits/ev',
        )
        .itemOutputs('create_new_age:reinforced_energiser')
        .duration(15 * 20)
        .EUt(GTValues.VA[GTValues.EV])

    // MOTORS (kinetic → electric generators)
    event.recipes.gtceu.assembler('cna_basic_motor')
        .itemInputs(
            'gtceu:mv_electric_motor',
            '4x create:copper_sheet',
            '2x gtceu:steel_plate',
            'create:shaft',
            '1x #gtceu:circuits/mv',
        )
        .itemOutputs('create_new_age:basic_motor')
        .duration(12 * 20)
        .EUt(GTValues.VA[GTValues.MV])

    event.recipes.gtceu.assembler('cna_advanced_motor')
        .itemInputs(
            'gtceu:hv_electric_motor',
            'create_new_age:overcharged_iron',
            '4x create:golden_sheet',
            'create:brass_casing',
            'create:shaft',
            '1x #gtceu:circuits/hv',
        )
        .itemOutputs('create_new_age:advanced_motor')
        .duration(15 * 20)
        .EUt(GTValues.VA[GTValues.HV])

    // copper_circuit replaced with GT circuits — copper_circuit stays in CNA's own Create machine chain
    event.recipes.gtceu.assembler('cna_basic_motor_extension')
        .itemInputs(
            'create_new_age:basic_motor',
            '4x create_new_age:overcharged_iron',
            '2x gtceu:stainless_steel_plate',
            '2x #gtceu:circuits/hv',
        )
        .itemOutputs('create_new_age:basic_motor_extension')
        .duration(15 * 20)
        .EUt(GTValues.VA[GTValues.HV])

    // GENERATOR COIL — precision copper winding, needs MV circuit for wound-layer control
    event.recipes.gtceu.assembler('cna_generator_coil')
        .itemInputs(
            '8x create:copper_sheet',
            'create:andesite_alloy_block',
            '1x #gtceu:circuits/mv',
        )
        .itemOutputs('create_new_age:generator_coil')
        .duration(10 * 20)
        .EUt(GTValues.VA[GTValues.MV])

    // CARBON BRUSHES — pure mechanical sliding contacts, no circuit
    event.recipes.gtceu.assembler('cna_carbon_brushes')
        .itemInputs(
            '4x create:andesite_alloy',
            '2x minecraft:coal',
            'create:shaft',
        )
        .itemOutputs('create_new_age:carbon_brushes')
        .duration(8 * 20)
        .EUt(GTValues.VA[GTValues.MV])

    // ELECTRICAL CONNECTOR — pure conductor, no circuit
    event.recipes.gtceu.assembler('cna_electrical_connector')
        .itemInputs(
            '4x create:copper_sheet',
            '2x create:andesite_alloy',
        )
        .itemOutputs('4x create_new_age:electrical_connector')
        .duration(8 * 20)
        .EUt(GTValues.VA[GTValues.MV])

    // HEAT SYSTEM
    // heat_pipe: pure thermal conductor, no circuit
    event.recipes.gtceu.assembler('cna_heat_pipe')
        .itemInputs(
            '2x create:copper_sheet',
            '2x gtceu:zinc_plate',
            'minecraft:terracotta',
        )
        .itemOutputs('4x create_new_age:heat_pipe')
        .duration(8 * 20)
        .EUt(GTValues.VA[GTValues.MV])

    // heat_pump: active heat amplification — MV circuit for thermal regulation logic
    event.recipes.gtceu.assembler('cna_heat_pump')
        .itemInputs(
            '2x create_new_age:heat_pipe',
            'create_new_age:thorium',
            '1x #gtceu:circuits/mv',
        )
        .itemOutputs('4x create_new_age:heat_pump')
        .duration(10 * 20)
        .EUt(GTValues.VA[GTValues.MV])

    // heater: electricity-to-heat conversion — HV circuit for power conditioning
    event.recipes.gtceu.assembler('cna_heater')
        .itemInputs(
            'create:empty_blaze_burner',
            'create_new_age:overcharged_iron',
            '2x create_new_age:heat_pipe',
            '2x gtceu:steel_plate',
            '1x #gtceu:circuits/hv',
        )
        .itemOutputs('create_new_age:heater')
        .duration(12 * 20)
        .EUt(GTValues.VA[GTValues.HV])

    // stirling_engine: heat-to-kinetic — MV circuit for governor/throttle
    event.recipes.gtceu.assembler('cna_stirling_engine')
        .itemInputs(
            '2x create_new_age:heat_pipe',
            '4x create:copper_sheet',
            'create:shaft',
            '1x #gtceu:circuits/mv',
        )
        .itemOutputs('create_new_age:stirling_engine')
        .duration(10 * 20)
        .EUt(GTValues.VA[GTValues.MV])

    // basic_solar_heating_plate: passive absorption, no circuit
    event.recipes.gtceu.assembler('cna_basic_solar_heating_plate')
        .itemInputs(
            '4x minecraft:glass',
            '2x gtceu:steel_plate',
            'create_new_age:heat_pipe',
        )
        .itemOutputs('create_new_age:basic_solar_heating_plate')
        .duration(10 * 20)
        .EUt(GTValues.VA[GTValues.MV])

    // advanced_solar_heating_plate: active sun-tracking — HV sensor + HV circuit
    event.recipes.gtceu.assembler('cna_advanced_solar_heating_plate')
        .itemInputs(
            '4x minecraft:glass',
            '2x gtceu:aluminium_plate',
            'create_new_age:heat_pipe',
            '1x gtceu:hv_sensor',
            '1x #gtceu:circuits/hv',
        )
        .itemOutputs('create_new_age:advanced_solar_heating_plate')
        .duration(12 * 20)
        .EUt(GTValues.VA[GTValues.HV])

    // MAGNETS
    event.recipes.gtceu.assembler('cna_redstone_magnet')
        .itemInputs(
            '4x gtceu:steel_plate',
            '2x minecraft:redstone_block',
        )
        .itemOutputs('2x create_new_age:redstone_magnet')
        .duration(8 * 20)
        .EUt(GTValues.VA[GTValues.MV])

    event.recipes.gtceu.assembler('cna_layered_magnet')
        .itemInputs(
            '4x create_new_age:overcharged_iron',
            '2x create_new_age:overcharged_gold',
        )
        .itemOutputs('4x create_new_age:layered_magnet')
        .duration(12 * 20)
        .EUt(GTValues.VA[GTValues.HV])

    event.recipes.gtceu.assembler('cna_netherite_magnet')
        .itemInputs(
            '2x create_new_age:overcharged_diamond',
            '4x minecraft:netherite_scrap',
        )
        .itemOutputs('2x create_new_age:netherite_magnet')
        .duration(15 * 20)
        .EUt(GTValues.VA[GTValues.EV])

    event.recipes.gtceu.assembler('cna_fluxuated_magnetite')
        .itemInputs(
            'create_new_age:magnetite_block',
            '2x create_new_age:overcharged_gold',
            '2x create_new_age:overcharged_diamond',
        )
        .itemOutputs('2x create_new_age:fluxuated_magnetite')
        .duration(15 * 20)
        .EUt(GTValues.VA[GTValues.HV])

})
