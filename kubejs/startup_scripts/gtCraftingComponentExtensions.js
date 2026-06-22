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

})
