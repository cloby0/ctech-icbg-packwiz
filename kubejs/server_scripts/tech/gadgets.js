ServerEvents.recipes(event => {

    // REMOVALS

    // building gadgets 2
    event.remove({ output: 'buildinggadgets2:gadget_building' })
    event.remove({ output: 'buildinggadgets2:gadget_exchanging' })
    event.remove({ output: 'buildinggadgets2:gadget_destruction' })
    event.remove({ output: 'buildinggadgets2:gadget_cut_paste' })
    event.remove({ output: 'buildinggadgets2:gadget_copy_paste' })
    event.remove({ output: 'buildinggadgets2:template_manager' })

    // mining gadgets
    event.remove({ output: 'mininggadgets:mininggadget_simple' })
    event.remove({ output: 'mininggadgets:mininggadget' })
    event.remove({ output: 'mininggadgets:mininggadget_fancy' })
    event.remove({ output: 'mininggadgets:modificationtable' })
    event.remove({ output: 'mininggadgets:upgrade_empty' })
    event.remove({ output: 'mininggadgets:upgrade_battery_1' })
    event.remove({ output: 'mininggadgets:upgrade_battery_2' })
    event.remove({ output: 'mininggadgets:upgrade_battery_3' })
    event.remove({ output: 'mininggadgets:upgrade_efficiency_1' })
    event.remove({ output: 'mininggadgets:upgrade_efficiency_2' })
    event.remove({ output: 'mininggadgets:upgrade_efficiency_3' })
    event.remove({ output: 'mininggadgets:upgrade_efficiency_4' })
    event.remove({ output: 'mininggadgets:upgrade_efficiency_5' })
    event.remove({ output: 'mininggadgets:upgrade_fortune_1' })
    event.remove({ output: 'mininggadgets:upgrade_fortune_2' })
    event.remove({ output: 'mininggadgets:upgrade_fortune_3' })
    event.remove({ output: 'mininggadgets:upgrade_freezing' })
    event.remove({ output: 'mininggadgets:upgrade_light_placer' })
    event.remove({ output: 'mininggadgets:upgrade_magnet' })
    event.remove({ output: 'mininggadgets:upgrade_range_1' })
    event.remove({ output: 'mininggadgets:upgrade_range_2' })
    event.remove({ output: 'mininggadgets:upgrade_range_3' })
    event.remove({ output: 'mininggadgets:upgrade_silk' })
    event.remove({ output: 'mininggadgets:upgrade_size_1' })
    event.remove({ output: 'mininggadgets:upgrade_size_2' })
    event.remove({ output: 'mininggadgets:upgrade_size_3' })
    event.remove({ output: 'mininggadgets:upgrade_void_junk' })

    // ============================================================
    // HV — BUILDING GADGETS 2
    // ============================================================

    // building gadget: HV motor projects spectral ghost blocks; sensor tracks placement bounds
    event.recipes.gtceu.assembler('bg2_gadget_building')
        .itemInputs('4x gtceu:stainless_steel_plate', 'gtceu:hv_electric_motor', 'gtceu:hv_sensor', '2x #gtceu:circuits/hv')
        .inputFluids(Fluid.of('gtceu:soldering_alloy', 144))
        .itemOutputs('1x buildinggadgets2:gadget_building')
        .duration(20 * 20)
        .EUt(GTValues.VA[GTValues.HV])

    // exchanging gadget: piston-driven block swap mechanism; sensor reads source/target pair
    event.recipes.gtceu.assembler('bg2_gadget_exchanging')
        .itemInputs('4x gtceu:stainless_steel_plate', 'gtceu:hv_electric_piston', 'gtceu:hv_sensor', '2x #gtceu:circuits/hv')
        .inputFluids(Fluid.of('gtceu:soldering_alloy', 144))
        .itemOutputs('1x buildinggadgets2:gadget_exchanging')
        .duration(20 * 20)
        .EUt(GTValues.VA[GTValues.HV])

    // destruction gadget: motor + piston combo drives mass block removal
    event.recipes.gtceu.assembler('bg2_gadget_destruction')
        .itemInputs('4x gtceu:stainless_steel_plate', 'gtceu:hv_electric_motor', 'gtceu:hv_electric_piston', '2x #gtceu:circuits/hv')
        .inputFluids(Fluid.of('gtceu:soldering_alloy', 144))
        .itemOutputs('1x buildinggadgets2:gadget_destruction')
        .duration(25 * 20)
        .EUt(GTValues.VA[GTValues.HV])

    // cut/paste gadget: robot arm handles precision structure relocation
    event.recipes.gtceu.assembler('bg2_gadget_cut_paste')
        .itemInputs('4x gtceu:stainless_steel_plate', 'gtceu:hv_robot_arm', 'gtceu:hv_sensor', '2x #gtceu:circuits/hv')
        .inputFluids(Fluid.of('gtceu:soldering_alloy', 144))
        .itemOutputs('1x buildinggadgets2:gadget_cut_paste')
        .duration(20 * 20)
        .EUt(GTValues.VA[GTValues.HV])

    // copy/paste gadget: dual sensor array reads and writes spatial pattern data
    event.recipes.gtceu.assembler('bg2_gadget_copy_paste')
        .itemInputs('4x gtceu:stainless_steel_plate', '2x gtceu:hv_sensor', 'gtceu:hv_robot_arm', '2x #gtceu:circuits/hv')
        .inputFluids(Fluid.of('gtceu:soldering_alloy', 144))
        .itemOutputs('1x buildinggadgets2:gadget_copy_paste')
        .duration(20 * 20)
        .EUt(GTValues.VA[GTValues.HV])

    // template manager: HV hull with integrated schematic storage
    event.recipes.gtceu.assembler('bg2_template_manager')
        .itemInputs('gtceu:hv_machine_hull', '2x gtceu:stainless_steel_plate', 'gtceu:hv_sensor', '2x #gtceu:circuits/hv')
        .inputFluids(Fluid.of('gtceu:soldering_alloy', 144))
        .itemOutputs('1x buildinggadgets2:template_manager')
        .duration(20 * 20)
        .EUt(GTValues.VA[GTValues.HV])

    // ============================================================
    // HV — MINING GADGETS: BASE GADGETS + TABLE
    // ============================================================

    // modification table: robot arm handles module installation; HV motor drives slot actuation
    event.recipes.gtceu.assembler('mg_modificationtable')
        .itemInputs('4x gtceu:stainless_steel_plate', 'gtceu:hv_electric_motor', 'gtceu:hv_robot_arm', '2x #gtceu:circuits/hv')
        .inputFluids(Fluid.of('gtceu:soldering_alloy', 144))
        .itemOutputs('1x mininggadgets:modificationtable')
        .duration(20 * 20)
        .EUt(GTValues.VA[GTValues.HV])

    // all three gadget variants are cosmetic — programmed circuit selects skin
    event.recipes.gtceu.assembler('mg_mininggadget_simple')
        .circuit(1)
        .itemInputs('4x gtceu:stainless_steel_plate', 'gtceu:hv_electric_motor', 'gtceu:hv_sensor', '#gtceu:circuits/hv')
        .inputFluids(Fluid.of('gtceu:soldering_alloy', 144))
        .itemOutputs('1x mininggadgets:mininggadget_simple')
        .duration(20 * 20)
        .EUt(GTValues.VA[GTValues.HV])

    event.recipes.gtceu.assembler('mg_mininggadget')
        .circuit(2)
        .itemInputs('4x gtceu:stainless_steel_plate', 'gtceu:hv_electric_motor', 'gtceu:hv_sensor', '#gtceu:circuits/hv')
        .inputFluids(Fluid.of('gtceu:soldering_alloy', 144))
        .itemOutputs('1x mininggadgets:mininggadget')
        .duration(20 * 20)
        .EUt(GTValues.VA[GTValues.HV])

    event.recipes.gtceu.assembler('mg_mininggadget_fancy')
        .circuit(3)
        .itemInputs('4x gtceu:stainless_steel_plate', 'gtceu:hv_electric_motor', 'gtceu:hv_sensor', '#gtceu:circuits/hv')
        .inputFluids(Fluid.of('gtceu:soldering_alloy', 144))
        .itemOutputs('1x mininggadgets:mininggadget_fancy')
        .duration(20 * 20)
        .EUt(GTValues.VA[GTValues.HV])

    // ============================================================
    // HV — MINING GADGETS: UPGRADE MODULES
    // ============================================================

    // empty upgrade slot: stainless housing + silicon substrate; base for all upgrade modules
    event.recipes.gtceu.assembler('mg_upgrade_empty')
        .itemInputs('2x gtceu:stainless_steel_plate', '4x gtceu:silicon_dust', '#gtceu:circuits/hv')
        .inputFluids(Fluid.of('gtceu:soldering_alloy', 72))
        .itemOutputs('1x mininggadgets:upgrade_empty')
        .duration(10 * 20)
        .EUt(GTValues.VA[GTValues.HV])

    // battery tier 1: LV motor windings in cupronickel housing — compact energy cell
    event.recipes.gtceu.assembler('mg_upgrade_battery_1')
        .itemInputs('mininggadgets:upgrade_empty', '2x gtceu:lv_electric_motor', '2x gtceu:cupronickel_plate')
        .inputFluids(Fluid.of('gtceu:soldering_alloy', 72))
        .itemOutputs('1x mininggadgets:upgrade_battery_1')
        .duration(10 * 20)
        .EUt(GTValues.VA[GTValues.HV])

    // battery tier 2: MV motor pack in aluminium housing — medium energy capacity
    event.recipes.gtceu.assembler('mg_upgrade_battery_2')
        .itemInputs('mininggadgets:upgrade_battery_1', '2x gtceu:mv_electric_motor', '2x gtceu:aluminium_plate')
        .inputFluids(Fluid.of('gtceu:soldering_alloy', 72))
        .itemOutputs('1x mininggadgets:upgrade_battery_2')
        .duration(15 * 20)
        .EUt(GTValues.VA[GTValues.HV])

    // battery tier 3: HV motor pack in stainless housing — high-capacity energy reserve
    event.recipes.gtceu.assembler('mg_upgrade_battery_3')
        .itemInputs('mininggadgets:upgrade_battery_2', '2x gtceu:hv_electric_motor', '2x gtceu:stainless_steel_plate')
        .inputFluids(Fluid.of('gtceu:soldering_alloy', 72))
        .itemOutputs('1x mininggadgets:upgrade_battery_3')
        .duration(20 * 20)
        .EUt(GTValues.VA[GTValues.HV])

    // efficiency tier 1: basic silicon gate array — minor throughput boost
    event.recipes.gtceu.assembler('mg_upgrade_efficiency_1')
        .itemInputs('mininggadgets:upgrade_empty', '4x gtceu:silicon_dust', '#gtceu:circuits/hv')
        .inputFluids(Fluid.of('gtceu:soldering_alloy', 72))
        .itemOutputs('1x mininggadgets:upgrade_efficiency_1')
        .duration(10 * 20)
        .EUt(GTValues.VA[GTValues.HV])

    // efficiency tier 2: red alloy signal routing added to silicon array
    event.recipes.gtceu.assembler('mg_upgrade_efficiency_2')
        .itemInputs('mininggadgets:upgrade_efficiency_1', '4x gtceu:silicon_dust', '2x gtceu:red_alloy_plate')
        .inputFluids(Fluid.of('gtceu:soldering_alloy', 72))
        .itemOutputs('1x mininggadgets:upgrade_efficiency_2')
        .duration(15 * 20)
        .EUt(GTValues.VA[GTValues.HV])

    // efficiency tier 3: dense packed silicon with dual HV control circuits
    event.recipes.gtceu.assembler('mg_upgrade_efficiency_3')
        .itemInputs('mininggadgets:upgrade_efficiency_2', '4x gtceu:silicon_dust', '2x #gtceu:circuits/hv')
        .inputFluids(Fluid.of('gtceu:soldering_alloy', 72))
        .itemOutputs('1x mininggadgets:upgrade_efficiency_3')
        .duration(20 * 20)
        .EUt(GTValues.VA[GTValues.HV])

    // efficiency tier 4: gallium arsenide co-processor supplements silicon array
    event.recipes.gtceu.assembler('mg_upgrade_efficiency_4')
        .itemInputs('mininggadgets:upgrade_efficiency_3', '4x gtceu:gallium_arsenide_dust', '2x #gtceu:circuits/hv')
        .inputFluids(Fluid.of('gtceu:soldering_alloy', 72))
        .itemOutputs('1x mininggadgets:upgrade_efficiency_4')
        .duration(25 * 20)
        .EUt(GTValues.VA[GTValues.HV])

    // efficiency tier 5: titanium-cooled GaAs array; Moon-gated maximum throughput
    event.recipes.gtceu.assembler('mg_upgrade_efficiency_5')
        .itemInputs('mininggadgets:upgrade_efficiency_4', '4x gtceu:gallium_arsenide_dust', 'gtceu:titanium_plate', '2x #gtceu:circuits/hv')
        .inputFluids(Fluid.of('gtceu:soldering_alloy', 144))
        .itemOutputs('1x mininggadgets:upgrade_efficiency_5')
        .duration(30 * 20)
        .EUt(GTValues.VA[GTValues.HV])

    // fortune tier 1: lapis lens array — photonic probability bias
    event.recipes.gtceu.assembler('mg_upgrade_fortune_1')
        .itemInputs('mininggadgets:upgrade_empty', '4x minecraft:lapis_lazuli', '2x create:iron_sheet')
        .inputFluids(Fluid.of('gtceu:soldering_alloy', 72))
        .itemOutputs('1x mininggadgets:upgrade_fortune_1')
        .duration(10 * 20)
        .EUt(GTValues.VA[GTValues.HV])

    // fortune tier 2: gold-plated lapis array enhances resonance harmonic
    event.recipes.gtceu.assembler('mg_upgrade_fortune_2')
        .itemInputs('mininggadgets:upgrade_fortune_1', '4x minecraft:lapis_lazuli', '2x minecraft:gold_block')
        .inputFluids(Fluid.of('gtceu:soldering_alloy', 72))
        .itemOutputs('1x mininggadgets:upgrade_fortune_2')
        .duration(15 * 20)
        .EUt(GTValues.VA[GTValues.HV])

    // fortune tier 3: diamond-resonant lapis prism — maximum drop amplification
    event.recipes.gtceu.assembler('mg_upgrade_fortune_3')
        .itemInputs('mininggadgets:upgrade_fortune_2', '4x minecraft:lapis_lazuli', '2x gtceu:diamond_plate', '#gtceu:circuits/hv')
        .inputFluids(Fluid.of('gtceu:soldering_alloy', 72))
        .itemOutputs('1x mininggadgets:upgrade_fortune_3')
        .duration(20 * 20)
        .EUt(GTValues.VA[GTValues.HV])

    // freezing upgrade: liquid nitrogen cryo emitter locks drops in place post-extract
    event.recipes.gtceu.assembler('mg_upgrade_freezing')
        .itemInputs('mininggadgets:upgrade_empty', '2x gtceu:stainless_steel_plate', 'gtceu:hv_field_generator', '#gtceu:circuits/hv')
        .inputFluids(Fluid.of('gtceu:liquid_nitrogen', 2000))
        .itemOutputs('1x mininggadgets:upgrade_freezing')
        .duration(15 * 20)
        .EUt(GTValues.VA[GTValues.HV])

    // light placer upgrade: glowstone emitter array on red alloy trigger
    event.recipes.gtceu.assembler('mg_upgrade_light_placer')
        .itemInputs('mininggadgets:upgrade_empty', '4x minecraft:glowstone', '2x gtceu:red_alloy_plate', '#gtceu:circuits/hv')
        .inputFluids(Fluid.of('gtceu:soldering_alloy', 72))
        .itemOutputs('1x mininggadgets:upgrade_light_placer')
        .duration(10 * 20)
        .EUt(GTValues.VA[GTValues.HV])

    // magnet upgrade: electromagnetic coil on HV sensor for item attraction field
    event.recipes.gtceu.assembler('mg_upgrade_magnet')
        .itemInputs('mininggadgets:upgrade_empty', '4x gtceu:red_alloy_plate', '2x gtceu:steel_rod', 'gtceu:hv_sensor')
        .inputFluids(Fluid.of('gtceu:soldering_alloy', 72))
        .itemOutputs('1x mininggadgets:upgrade_magnet')
        .duration(15 * 20)
        .EUt(GTValues.VA[GTValues.HV])

    // range tier 1: diamond-core distance sensor expands beam reach
    event.recipes.gtceu.assembler('mg_upgrade_range_1')
        .itemInputs('mininggadgets:upgrade_empty', '2x gtceu:diamond_plate', 'gtceu:hv_sensor', '#gtceu:circuits/hv')
        .inputFluids(Fluid.of('gtceu:soldering_alloy', 72))
        .itemOutputs('1x mininggadgets:upgrade_range_1')
        .duration(15 * 20)
        .EUt(GTValues.VA[GTValues.HV])

    // range tier 2: emerald block spatial lens for extended mapping envelope
    event.recipes.gtceu.assembler('mg_upgrade_range_2')
        .itemInputs('mininggadgets:upgrade_range_1', '2x minecraft:emerald_block', '2x gtceu:hv_sensor')
        .inputFluids(Fluid.of('gtceu:soldering_alloy', 72))
        .itemOutputs('1x mininggadgets:upgrade_range_2')
        .duration(20 * 20)
        .EUt(GTValues.VA[GTValues.HV])

    // range tier 3: stacked diamond-emerald optic array — maximum effective range
    event.recipes.gtceu.assembler('mg_upgrade_range_3')
        .itemInputs('mininggadgets:upgrade_range_2', '2x gtceu:diamond_plate', '2x minecraft:emerald_block', '2x #gtceu:circuits/hv')
        .inputFluids(Fluid.of('gtceu:soldering_alloy', 72))
        .itemOutputs('1x mininggadgets:upgrade_range_3')
        .duration(25 * 20)
        .EUt(GTValues.VA[GTValues.HV])

    // silk touch upgrade: mercury amalgam bath extracts blocks without shattering
    event.recipes.gtceu.assembler('mg_upgrade_silk')
        .itemInputs('mininggadgets:upgrade_empty', '4x minecraft:gold_block', '2x gtceu:stainless_steel_plate', '#gtceu:circuits/hv')
        .inputFluids(Fluid.of('gtceu:mercury', 1000))
        .itemOutputs('1x mininggadgets:upgrade_silk')
        .duration(20 * 20)
        .EUt(GTValues.VA[GTValues.HV])

    // size tier 1: HV piston expands mining face to multi-block array
    event.recipes.gtceu.assembler('mg_upgrade_size_1')
        .itemInputs('mininggadgets:upgrade_empty', '4x gtceu:stainless_steel_plate', 'gtceu:hv_electric_piston', '2x #gtceu:circuits/hv')
        .inputFluids(Fluid.of('gtceu:soldering_alloy', 144))
        .itemOutputs('1x mininggadgets:upgrade_size_1')
        .duration(20 * 20)
        .EUt(GTValues.VA[GTValues.HV])

    // size tier 2: titanium frame expands face further; Moon-gated by titanium
    event.recipes.gtceu.assembler('mg_upgrade_size_2')
        .itemInputs('mininggadgets:upgrade_size_1', '4x gtceu:titanium_plate', 'gtceu:hv_robot_arm', '2x #gtceu:circuits/hv')
        .inputFluids(Fluid.of('gtceu:soldering_alloy', 144))
        .itemOutputs('1x mininggadgets:upgrade_size_2')
        .duration(25 * 20)
        .EUt(GTValues.VA[GTValues.HV])

    // size tier 3: nether star resonator enables maximum volumetric excavation area
    event.recipes.gtceu.assembler('mg_upgrade_size_3')
        .itemInputs('mininggadgets:upgrade_size_2', '4x gtceu:titanium_plate', 'minecraft:nether_star', 'gtceu:hv_robot_arm', '2x #gtceu:circuits/hv')
        .inputFluids(Fluid.of('gtceu:soldering_alloy', 144))
        .itemOutputs('1x mininggadgets:upgrade_size_3')
        .duration(30 * 20)
        .EUt(GTValues.VA[GTValues.HV])

    // void junk upgrade: ender-linked filter discards non-valuable drops in void
    event.recipes.gtceu.assembler('mg_upgrade_void_junk')
        .itemInputs('mininggadgets:upgrade_empty', '4x minecraft:ender_pearl', '2x gtceu:stainless_steel_plate', '#gtceu:circuits/hv')
        .inputFluids(Fluid.of('gtceu:soldering_alloy', 72))
        .itemOutputs('1x mininggadgets:upgrade_void_junk')
        .duration(10 * 20)
        .EUt(GTValues.VA[GTValues.HV])

})
