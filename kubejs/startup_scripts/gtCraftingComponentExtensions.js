GTCEuStartupEvents.craftingComponents(event => {

    // CABLE (single/double/quad/oct/hex)
    // SC materials only generate wire forms, not cable forms
    // UEV = chaotic_singulite, UIV = cumium
    event.setMaterialEntry(GTCraftingComponents.CABLE, GTValues.UEV, new MaterialEntry('wireGtSingle', 'chaotic_singulite'))
    event.setMaterialEntry(GTCraftingComponents.CABLE, GTValues.UIV, new MaterialEntry('wireGtSingle', 'cumium'))

    event.setMaterialEntry(GTCraftingComponents.CABLE_DOUBLE, GTValues.UEV, new MaterialEntry('wireGtDouble', 'chaotic_singulite'))
    event.setMaterialEntry(GTCraftingComponents.CABLE_DOUBLE, GTValues.UIV, new MaterialEntry('wireGtDouble', 'cumium'))

    event.setMaterialEntry(GTCraftingComponents.CABLE_QUAD, GTValues.UEV, new MaterialEntry('wireGtQuadruple', 'chaotic_singulite'))
    event.setMaterialEntry(GTCraftingComponents.CABLE_QUAD, GTValues.UIV, new MaterialEntry('wireGtQuadruple', 'cumium'))

    event.setMaterialEntry(GTCraftingComponents.CABLE_OCT, GTValues.UEV, new MaterialEntry('wireGtOctal', 'chaotic_singulite'))
    event.setMaterialEntry(GTCraftingComponents.CABLE_OCT, GTValues.UIV, new MaterialEntry('wireGtOctal', 'cumium'))

    event.setMaterialEntry(GTCraftingComponents.CABLE_HEX, GTValues.UEV, new MaterialEntry('wireGtHex', 'chaotic_singulite'))
    event.setMaterialEntry(GTCraftingComponents.CABLE_HEX, GTValues.UIV, new MaterialEntry('wireGtHex', 'cumium'))

    // CABLE_TIER_UP: points to the NEXT tier's cable
    // UEV entry = cumium (UIV cable), UIV entry = cumium (cap)
    event.setMaterialEntry(GTCraftingComponents.CABLE_TIER_UP, GTValues.UEV, new MaterialEntry('wireGtSingle', 'cumium'))
    event.setMaterialEntry(GTCraftingComponents.CABLE_TIER_UP, GTValues.UIV, new MaterialEntry('wireGtSingle', 'cumium'))

    event.setMaterialEntry(GTCraftingComponents.CABLE_TIER_UP_DOUBLE, GTValues.UEV, new MaterialEntry('wireGtDouble', 'cumium'))
    event.setMaterialEntry(GTCraftingComponents.CABLE_TIER_UP_DOUBLE, GTValues.UIV, new MaterialEntry('wireGtDouble', 'cumium'))

    event.setMaterialEntry(GTCraftingComponents.CABLE_TIER_UP_QUAD, GTValues.UEV, new MaterialEntry('wireGtQuadruple', 'cumium'))
    event.setMaterialEntry(GTCraftingComponents.CABLE_TIER_UP_QUAD, GTValues.UIV, new MaterialEntry('wireGtQuadruple', 'cumium'))

    event.setMaterialEntry(GTCraftingComponents.CABLE_TIER_UP_OCT, GTValues.UEV, new MaterialEntry('wireGtOctal', 'cumium'))
    event.setMaterialEntry(GTCraftingComponents.CABLE_TIER_UP_OCT, GTValues.UIV, new MaterialEntry('wireGtOctal', 'cumium'))

    event.setMaterialEntry(GTCraftingComponents.CABLE_TIER_UP_HEX, GTValues.UEV, new MaterialEntry('wireGtHex', 'cumium'))
    event.setMaterialEntry(GTCraftingComponents.CABLE_TIER_UP_HEX, GTValues.UIV, new MaterialEntry('wireGtHex', 'cumium'))

    // COIL_HEATING / COIL_HEATING_DOUBLE
    // Uses non-SC structural material (draconium UHV/UEV, awakened_draconium UEV/UIV)
    // Superconductors cannot function as heating coil winding
    event.setMaterialEntry(GTCraftingComponents.COIL_HEATING, GTValues.UEV, new MaterialEntry('wireGtDouble', 'draconium'))
    event.setMaterialEntry(GTCraftingComponents.COIL_HEATING, GTValues.UIV, new MaterialEntry('wireGtDouble', 'awakened_draconium'))

    event.setMaterialEntry(GTCraftingComponents.COIL_HEATING_DOUBLE, GTValues.UEV, new MaterialEntry('wireGtQuadruple', 'draconium'))
    event.setMaterialEntry(GTCraftingComponents.COIL_HEATING_DOUBLE, GTValues.UIV, new MaterialEntry('wireGtQuadruple', 'awakened_draconium'))

    // COIL_ELECTRIC: high-tier octal SC wire
    // UEV = draconic_fluxite (pack's UHV SC, matches GT's pattern of one-tier-behind)
    // UIV = chaotic_singulite (pack's UEV SC)
    event.setMaterialEntry(GTCraftingComponents.COIL_ELECTRIC, GTValues.UEV, new MaterialEntry('wireGtOctal', 'draconic_fluxite'))
    event.setMaterialEntry(GTCraftingComponents.COIL_ELECTRIC, GTValues.UIV, new MaterialEntry('wireGtOctal', 'chaotic_singulite'))

    // SPRING / ROD_DISTILLATION
    // draconium and awakened_draconium have GENERATE_SPRING; cumium does not
    event.setMaterialEntry(GTCraftingComponents.SPRING, GTValues.UEV, new MaterialEntry('spring', 'draconium'))
    event.setMaterialEntry(GTCraftingComponents.SPRING, GTValues.UIV, new MaterialEntry('spring', 'awakened_draconium'))

    event.setMaterialEntry(GTCraftingComponents.ROD_DISTILLATION, GTValues.UEV, new MaterialEntry('spring', 'draconium'))
    event.setMaterialEntry(GTCraftingComponents.ROD_DISTILLATION, GTValues.UIV, new MaterialEntry('spring', 'awakened_draconium'))

    // PLATE: structural material plates
    event.setMaterialEntry(GTCraftingComponents.PLATE, GTValues.UEV, new MaterialEntry('plate', 'awakened_draconium'))
    event.setMaterialEntry(GTCraftingComponents.PLATE, GTValues.UIV, new MaterialEntry('plate', 'cumium'))

    // SENSOR_EMITTER_GEM: gem used in sensor/emitter auto-gen recipes; GT stops at UV (gravi_star)
    event.setItem(GTCraftingComponents.SENSOR_EMITTER_GEM, GTValues.UHV, Item.of('kubejs:dragon_heart_crystal'))
    event.setItem(GTCraftingComponents.SENSOR_EMITTER_GEM, GTValues.UEV, Item.of('draconicevolution:chaos_shard'))
    event.setItem(GTCraftingComponents.SENSOR_EMITTER_GEM, GTValues.UIV, Item.of('draconicevolution:large_chaos_frag'))

    // WIRE_ELECTRIC (UHV=osmium, GT stops there)
    event.setMaterialEntry(GTCraftingComponents.WIRE_ELECTRIC, GTValues.UEV, new MaterialEntry('wireGtSingle', 'chaotic_singulite'))
    event.setMaterialEntry(GTCraftingComponents.WIRE_ELECTRIC, GTValues.UIV, new MaterialEntry('wireGtSingle', 'cumium'))

    // WIRE_QUAD / WIRE_OCT / WIRE_HEX (UHV=europium, GT stops there)
    event.setMaterialEntry(GTCraftingComponents.WIRE_QUAD, GTValues.UEV, new MaterialEntry('wireGtQuadruple', 'chaotic_singulite'))
    event.setMaterialEntry(GTCraftingComponents.WIRE_QUAD, GTValues.UIV, new MaterialEntry('wireGtQuadruple', 'cumium'))

    event.setMaterialEntry(GTCraftingComponents.WIRE_OCT, GTValues.UEV, new MaterialEntry('wireGtOctal', 'chaotic_singulite'))
    event.setMaterialEntry(GTCraftingComponents.WIRE_OCT, GTValues.UIV, new MaterialEntry('wireGtOctal', 'cumium'))

    event.setMaterialEntry(GTCraftingComponents.WIRE_HEX, GTValues.UEV, new MaterialEntry('wireGtHex', 'chaotic_singulite'))
    event.setMaterialEntry(GTCraftingComponents.WIRE_HEX, GTValues.UIV, new MaterialEntry('wireGtHex', 'cumium'))

    // HULL_PLATE: abstract_elastomer replaces PBI from UHV onward
    event.setMaterialEntry(GTCraftingComponents.HULL_PLATE, GTValues.UHV, new MaterialEntry('plate', 'abstract_elastomer'))
    event.setMaterialEntry(GTCraftingComponents.HULL_PLATE, GTValues.UEV, new MaterialEntry('plate', 'abstract_elastomer'))
    event.setMaterialEntry(GTCraftingComponents.HULL_PLATE, GTValues.UIV, new MaterialEntry('plate', 'abstract_elastomer'))

    // ROTOR: awakened_draconium/cumium gain GENERATE_RING+GENERATE_ROTOR flags in material registry
    event.setMaterialEntry(GTCraftingComponents.ROTOR, GTValues.UEV, new MaterialEntry('rotor', 'awakened_draconium'))
    event.setMaterialEntry(GTCraftingComponents.ROTOR, GTValues.UIV, new MaterialEntry('rotor', 'cumium'))

    // GRINDER: GT stops at tungsten grinding head, no higher tier exists; cap there
    event.setItem(GTCraftingComponents.GRINDER, GTValues.UEV, Item.of('gtceu:tungsten_grinding_head'))
    event.setItem(GTCraftingComponents.GRINDER, GTValues.UIV, Item.of('gtceu:tungsten_grinding_head'))

    // SAWBLADE: buzzSawBlade generates for any GENERATE_PLATE ingot material
    event.setMaterialEntry(GTCraftingComponents.SAWBLADE, GTValues.UEV, new MaterialEntry('buzzSawBlade', 'awakened_draconium'))
    event.setMaterialEntry(GTCraftingComponents.SAWBLADE, GTValues.UIV, new MaterialEntry('buzzSawBlade', 'cumium'))

    // ROD_MAGNETIC: GT UV/UHV both use magnetic_samarium block; cap there
    event.setMaterialEntry(GTCraftingComponents.ROD_MAGNETIC, GTValues.UEV, new MaterialEntry('block', 'magnetic_samarium'))
    event.setMaterialEntry(GTCraftingComponents.ROD_MAGNETIC, GTValues.UIV, new MaterialEntry('block', 'magnetic_samarium'))

    // ROD_ELECTROMAGNETIC: GT stops at vanadium_gallium rod for UV+; cap there
    event.setMaterialEntry(GTCraftingComponents.ROD_ELECTROMAGNETIC, GTValues.UEV, new MaterialEntry('rod', 'vanadium_gallium'))
    event.setMaterialEntry(GTCraftingComponents.ROD_ELECTROMAGNETIC, GTValues.UIV, new MaterialEntry('rod', 'vanadium_gallium'))

    // ROD_RADIOACTIVE: GT stops at tritanium rod for UV+; cap there
    event.setMaterialEntry(GTCraftingComponents.ROD_RADIOACTIVE, GTValues.UEV, new MaterialEntry('rod', 'tritanium'))
    event.setMaterialEntry(GTCraftingComponents.ROD_RADIOACTIVE, GTValues.UIV, new MaterialEntry('rod', 'tritanium'))

    // PIPE_NORMAL / PIPE_LARGE / PIPE_NONUPLE: awakened_draconium/cumium gain fluidPipeProperties in material registry
    event.setMaterialEntry(GTCraftingComponents.PIPE_NORMAL, GTValues.UEV, new MaterialEntry('pipeNormalFluid', 'awakened_draconium'))
    event.setMaterialEntry(GTCraftingComponents.PIPE_NORMAL, GTValues.UIV, new MaterialEntry('pipeNormalFluid', 'cumium'))

    event.setMaterialEntry(GTCraftingComponents.PIPE_LARGE, GTValues.UEV, new MaterialEntry('pipeLargeFluid', 'awakened_draconium'))
    event.setMaterialEntry(GTCraftingComponents.PIPE_LARGE, GTValues.UIV, new MaterialEntry('pipeLargeFluid', 'cumium'))

    event.setMaterialEntry(GTCraftingComponents.PIPE_NONUPLE, GTValues.UEV, new MaterialEntry('pipeNonupleFluid', 'awakened_draconium'))
    event.setMaterialEntry(GTCraftingComponents.PIPE_NONUPLE, GTValues.UIV, new MaterialEntry('pipeNonupleFluid', 'cumium'))

    // GLASS: cap at fusion glass (GT already uses it for ZPM/UV/UHV)
    event.setItem(GTCraftingComponents.GLASS, GTValues.UEV, Item.of('gtceu:fusion_glass'))
    event.setItem(GTCraftingComponents.GLASS, GTValues.UIV, Item.of('gtceu:fusion_glass'))

    // POWER_COMPONENT: GT stops at UHPIC for UHV+; cap there
    event.setItem(GTCraftingComponents.POWER_COMPONENT, GTValues.UEV, Item.of('gtceu:ultra_high_power_integrated_circuit'))
    event.setItem(GTCraftingComponents.POWER_COMPONENT, GTValues.UIV, Item.of('gtceu:ultra_high_power_integrated_circuit'))

    // VOLTAGE_COIL: GT stops at UV; UHV/UEV/UIV custom items in itemRegistry.js with recipes in highTierComponents.js
    event.setItem(GTCraftingComponents.VOLTAGE_COIL, GTValues.UHV, Item.of('kubejs:uhv_voltage_coil'))
    event.setItem(GTCraftingComponents.VOLTAGE_COIL, GTValues.UEV, Item.of('kubejs:uev_voltage_coil'))
    event.setItem(GTCraftingComponents.VOLTAGE_COIL, GTValues.UIV, Item.of('kubejs:uiv_voltage_coil'))

    // SPRING_TRANSFORMER / SMALL_SPRING_TRANSFORMER: cumium has no spring; cap at awakened_draconium
    event.setMaterialEntry(GTCraftingComponents.SPRING_TRANSFORMER, GTValues.UEV, new MaterialEntry('spring', 'awakened_draconium'))
    event.setMaterialEntry(GTCraftingComponents.SPRING_TRANSFORMER, GTValues.UIV, new MaterialEntry('spring', 'awakened_draconium'))

    // smallSpring is the TagPrefix string name for springSmall (awakened_draconium gains GENERATE_SPRING_SMALL in material registry)
    event.setMaterialEntry(GTCraftingComponents.SMALL_SPRING_TRANSFORMER, GTValues.UEV, new MaterialEntry('smallSpring', 'awakened_draconium'))
    event.setMaterialEntry(GTCraftingComponents.SMALL_SPRING_TRANSFORMER, GTValues.UIV, new MaterialEntry('smallSpring', 'awakened_draconium'))

    // FRAME: awakened_framework has GENERATE_FRAME; cap there for both UEV and UIV
    event.setMaterialEntry(GTCraftingComponents.FRAME, GTValues.UEV, new MaterialEntry('frame', 'awakened_framework'))
    event.setMaterialEntry(GTCraftingComponents.FRAME, GTValues.UIV, new MaterialEntry('frame', 'awakened_framework'))

    // CRATE / DRUM: quantum chests/tanks exist for UEV/UIV in high-tier GT
    event.setItem(GTCraftingComponents.CRATE, GTValues.UEV, Item.of('gtceu:uev_quantum_chest'))
    event.setItem(GTCraftingComponents.CRATE, GTValues.UIV, Item.of('gtceu:uiv_quantum_chest'))

    event.setItem(GTCraftingComponents.DRUM, GTValues.UEV, Item.of('gtceu:uev_quantum_tank'))
    event.setItem(GTCraftingComponents.DRUM, GTValues.UIV, Item.of('gtceu:uiv_quantum_tank'))

    // PIPE_REACTOR: abstract_elastomer pipes replace PBI from UHV onward
    event.setMaterialEntry(GTCraftingComponents.PIPE_REACTOR, GTValues.UHV, new MaterialEntry('pipeNormalFluid', 'abstract_elastomer'))
    event.setMaterialEntry(GTCraftingComponents.PIPE_REACTOR, GTValues.UEV, new MaterialEntry('pipeNormalFluid', 'abstract_elastomer'))
    event.setMaterialEntry(GTCraftingComponents.PIPE_REACTOR, GTValues.UIV, new MaterialEntry('pipeLargeFluid', 'abstract_elastomer'))

})
