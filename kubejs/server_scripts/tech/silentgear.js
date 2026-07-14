// Gregifies Silent Gear's native metals, machine blocks, metal repair kits, and fragments.
// The native metals are registered as GTCEu materials (gtceuMaterialRegistry.js), so GT autogenerates
// the ore/dust processing (macerator, washer, EBF, compressor) - but every form (ingot/nugget/block/
// dust/rawOre) is silentgear's own canonical item (TagPrefix.setIgnored() in
// gtceuMaterialModification.js). Always use SG + ':x_ingot' / ':x_dust' etc, never gtceu:x_*, for
// these 6 metals - the gtceu items don't exist. No OEI rules needed, no gtceu duplicate to unify.
// This file only: removes silent gear's non-GT production paths, hand-writes the alloy mixers
// (mixer never autogens), and gregs the remaining infra recipes.
// Blueprints/templates, gear assembly, salvaging and nuggets stay vanilla (see docs/claude/specs/silentgear-gregify-audit.md).

ServerEvents.recipes(event => {
    const SG = 'silentgear'

    // ---- Bucket A: remove silent gear's non-GT metal recipes (GT autogen + mixers replace them) ----

    // crimson_iron / azure_silver (ore metals): silent gear worldgen is gutted (biome_modifier overrides) and
    // replaced by GT veins (worldgen/silentgearOreWorldgen.js). Remove the dead silentgear ore/raw smelting so
    // GT's autogen ore chain (crushed -> washed -> dust + byproducts) is the only path.
    ;['crimson_iron', 'azure_silver'].forEach(metal => {
        event.remove({ id: SG + ':' + metal + '_ore_smelting' })
        event.remove({ id: SG + ':' + metal + '_ore_blasting' })
        event.remove({ id: SG + ':' + metal + '_raw_ore_smelting' })
        event.remove({ id: SG + ':' + metal + '_raw_ore_blasting' })
    })

    // All native metals: drop the vanilla hammer-dust and duplicate dust-smelting recipes.
    ;['crimson_iron', 'azure_silver', 'blaze_gold', 'azure_electrum', 'crimson_steel', 'tyrian_steel'].forEach(metal => {
        event.remove({ output: SG + ':' + metal + '_dust' })   // silentgear:damage_item hammer recipe
        event.remove({ id: SG + ':' + metal + '_dust_smelting' })
        event.remove({ id: SG + ':' + metal + '_dust_blasting' })
    })

    // Drop the non-mixer alloy ingot crafts (all variants, not just known IDs).
    ;['blaze_gold_ingot', 'azure_electrum_ingot', 'crimson_steel_ingot', 'tyrian_steel_ingot'].forEach(ingot => {
        event.remove({ output: SG + ':' + ingot })
    })

    // Alloy mixers (the blast/furnace step autogens from each material's blastTemp / ingot form).
    event.recipes.gtceu.mixer('sg_blaze_gold_dust_mix')
        .itemInputs('1x gtceu:gold_dust', '2x minecraft:blaze_powder')
        .itemOutputs('1x ' + SG + ':blaze_gold_dust')
        .duration(200).EUt(GTValues.VA[GTValues.MV])

    event.recipes.gtceu.mixer('sg_azure_electrum_dust_mix')
        .itemInputs('2x ' + SG + ':azure_silver_dust', '2x gtceu:gold_dust', '1x minecraft:ender_pearl')
        .itemOutputs('1x ' + SG + ':azure_electrum_dust')
        .duration(200).EUt(GTValues.VA[GTValues.HV])

    event.recipes.gtceu.mixer('sg_crimson_steel_dust_mix')
        .itemInputs('3x ' + SG + ':crimson_iron_dust', '2x minecraft:blaze_rod', '1x minecraft:magma_cream')
        .itemOutputs('3x ' + SG + ':crimson_steel_dust')
        .duration(200).EUt(GTValues.VA[GTValues.HV])

    event.recipes.gtceu.mixer('sg_tyrian_steel_dust_mix')
        .itemInputs('1x ' + SG + ':crimson_steel_dust', '1x ' + SG + ':azure_electrum_dust', '1x ' + SG + ':crushed_shulker_shell', '1x minecraft:netherite_scrap')
        .itemOutputs('4x ' + SG + ':tyrian_steel_dust')
        .duration(200).EUt(GTValues.VA[GTValues.EV])

    // starmetal is not a GT material (no gear material, dust only) - stays a silentgear item.
    event.remove({ id: SG + ':starmetal_dust' })
    event.recipes.gtceu.mixer('sg_starmetal_dust_mix')
        .itemInputs('1x ' + SG + ':azure_electrum_dust', '2x ' + SG + ':azure_silver_dust', '1x ' + SG + ':blaze_gold_dust', '1x ' + SG + ':nether_star_fragment')
        .itemOutputs('3x ' + SG + ':starmetal_dust')
        .duration(200).EUt(GTValues.VA[GTValues.EV])

    // ---- Bucket B: machine blocks (assembler; tier follows hardest ingredient) ----

    event.remove({ id: SG + ':salvager' })
    event.recipes.gtceu.assembler('sg_salvager')
        .itemInputs('1x minecraft:piston', '1x minecraft:iron_block', '2x ' + SG + ':crimson_iron_ingot', '2x #forge:obsidian')
        .itemOutputs('1x ' + SG + ':salvager')
        .duration(12 * 20).EUt(GTValues.VA[GTValues.MV])

    event.remove({ id: SG + ':material_grader' })
    event.recipes.gtceu.assembler('sg_material_grader')
        .itemInputs('1x ' + SG + ':advanced_upgrade_base', '3x ' + SG + ':blaze_gold_ingot', '2x #forge:gems/quartz', '2x create:iron_sheet')
        .itemOutputs('1x ' + SG + ':material_grader')
        .duration(12 * 20).EUt(GTValues.VA[GTValues.MV])

    event.remove({ id: SG + ':metal_alloyer' })
    event.recipes.gtceu.assembler('sg_metal_alloyer')
        .itemInputs('2x ' + SG + ':crimson_steel_ingot', '1x minecraft:iron_block', '4x minecraft:blackstone')
        .itemOutputs('1x ' + SG + ':metal_alloyer')
        .duration(14 * 20).EUt(GTValues.VA[GTValues.HV])

    event.remove({ id: SG + ':refabricator' })
    event.recipes.gtceu.assembler('sg_refabricator')
        .itemInputs('1x minecraft:iron_block', '2x #forge:gems/diamond', '1x #forge:gems/bort', '2x gtceu:iron_rod')
        .itemOutputs('1x ' + SG + ':refabricator')
        .duration(12 * 20).EUt(GTValues.VA[GTValues.MV])

    event.remove({ id: SG + ':metal_press' })
    event.recipes.gtceu.assembler('sg_metal_press')
        .itemInputs('2x ' + SG + ':tyrian_steel_ingot', '4x #forge:obsidian', '2x gtceu:iron_rod')
        .itemOutputs('1x ' + SG + ':metal_press')
        .duration(16 * 20).EUt(GTValues.VA[GTValues.EV])

    // ---- Bucket D: metal-gated repair kits (assembler) ----

    event.remove({ id: SG + ':crimson_repair_kit' })
    event.recipes.gtceu.assembler('sg_crimson_repair_kit')
        .itemInputs('4x ' + SG + ':crimson_steel_ingot', '1x ' + SG + ':blaze_gold_ingot', '1x minecraft:blaze_rod')
        .itemOutputs('1x ' + SG + ':crimson_repair_kit')
        .duration(10 * 20).EUt(GTValues.VA[GTValues.HV])

    event.remove({ id: SG + ':azure_repair_kit' })
    event.recipes.gtceu.assembler('sg_azure_repair_kit')
        .itemInputs('4x ' + SG + ':azure_electrum_ingot', '1x #forge:gems/emerald', '1x minecraft:end_rod')
        .itemOutputs('1x ' + SG + ':azure_repair_kit')
        .duration(10 * 20).EUt(GTValues.VA[GTValues.HV])

    // ---- Bucket E: fragments / stars (silentgear items, not GT materials) ----

    event.remove({ id: SG + ':crushed_shulker_shell' })
    event.recipes.gtceu.macerator('sg_crushed_shulker_shell')
        .itemInputs('1x minecraft:shulker_shell')
        .itemOutputs('1x ' + SG + ':crushed_shulker_shell')
        .duration(8 * 20).EUt(GTValues.VA[GTValues.HV])

    event.remove({ id: SG + ':nether_star_fragment' })
    event.recipes.gtceu.macerator('sg_nether_star_fragment')
        .itemInputs('1x minecraft:nether_star')
        .itemOutputs('9x ' + SG + ':nether_star_fragment')
        .duration(10 * 20).EUt(GTValues.VA[GTValues.HV])

    event.remove({ id: SG + ':nether_star_from_fragments' })
    event.recipes.gtceu.compressor('sg_nether_star_from_fragments')
        .itemInputs('9x ' + SG + ':nether_star_fragment')
        .itemOutputs('1x minecraft:nether_star')
        .duration(10 * 20).EUt(GTValues.VA[GTValues.HV])

    event.remove({ id: SG + ':diamond_shard' })
    event.recipes.gtceu.macerator('sg_diamond_shard')
        .itemInputs('1x #forge:gems/diamond')
        .itemOutputs('9x ' + SG + ':diamond_shard')
        .duration(6 * 20).EUt(GTValues.VA[GTValues.LV])
    event.remove({ id: SG + ':diamond_from_shards' })
    event.recipes.gtceu.compressor('sg_diamond_from_shards')
        .itemInputs('9x ' + SG + ':diamond_shard')
        .itemOutputs('1x minecraft:diamond')
        .duration(6 * 20).EUt(GTValues.VA[GTValues.LV])

    event.remove({ id: SG + ':emerald_shard' })
    event.recipes.gtceu.macerator('sg_emerald_shard')
        .itemInputs('1x #forge:gems/emerald')
        .itemOutputs('9x ' + SG + ':emerald_shard')
        .duration(6 * 20).EUt(GTValues.VA[GTValues.LV])
    event.remove({ id: SG + ':emerald_from_shards' })
    event.recipes.gtceu.compressor('sg_emerald_from_shards')
        .itemInputs('9x ' + SG + ':emerald_shard')
        .itemOutputs('1x minecraft:emerald')
        .duration(6 * 20).EUt(GTValues.VA[GTValues.LV])

    event.remove({ output: SG + ':bort_block' })
    event.recipes.gtceu.compressor('sg_bort_block')
        .itemInputs('9x #forge:gems/bort')
        .itemOutputs('1x ' + SG + ':bort_block')
        .duration(6 * 20).EUt(GTValues.VA[GTValues.LV])

    // ---- Bucket F: star-themed machine blocks (tech - azure/blaze metals, no magic materials) ----

    event.remove({ id: SG + ':starlight_charger' })
    event.recipes.gtceu.assembler('sg_starlight_charger')
        .itemInputs('1x #forge:storage_blocks/blaze_gold', '2x #forge:storage_blocks/quartz', '2x #forge:glass/colorless', '4x minecraft:polished_blackstone')
        .itemOutputs('1x ' + SG + ':starlight_charger')
        .duration(14 * 20).EUt(GTValues.VA[GTValues.HV])

    event.remove({ id: SG + ':recrystallizer' })
    event.recipes.gtceu.assembler('sg_recrystallizer')
        .itemInputs('2x ' + SG + ':azure_electrum_ingot', '1x #forge:storage_blocks/gold', '1x #forge:gems/diamond', '1x #forge:gems/emerald', '4x minecraft:purpur_block')
        .itemOutputs('1x ' + SG + ':recrystallizer')
        .duration(14 * 20).EUt(GTValues.VA[GTValues.HV])
})
