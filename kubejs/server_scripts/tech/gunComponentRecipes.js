// Component prep chain for gun sub-assemblies (consumed by arms_manufacturer in guns.js).
// Receivers/frames: Assembler + lubricant. Barrels: 2-step (Lathe blank → Assembler finish).
// Fire control: Assembler; gains spring + wire + circuit at higher tiers.
ServerEvents.recipes(event => {

    // === PISTOL FRAME ===
    // Compact receiver — handguns and revolvers. Fewer plates, no gear.

    event.recipes.gtceu.assembler('pistol_frame_lv')
        .itemInputs('2x gtceu:wrought_iron_plate', 'gtceu:wrought_iron_bolt', 'gtceu:wrought_iron_ring', 'gtceu:wrought_iron_screw', 'gtceu:steel_spring')
        .inputFluids(Fluid.of('gtceu:lubricant', 100))
        .itemOutputs('1x kubejs:lv_pistol_frame')
        .duration(100)
        .EUt(GTValues.VA[GTValues.LV])

    event.recipes.gtceu.assembler('pistol_frame_mv')
        .itemInputs('2x gtceu:steel_plate', 'gtceu:steel_bolt', 'gtceu:steel_ring', 'gtceu:steel_screw', 'gtceu:steel_spring')
        .inputFluids(Fluid.of('gtceu:lubricant', 100))
        .itemOutputs('1x kubejs:mv_pistol_frame')
        .duration(100)
        .EUt(GTValues.VA[GTValues.MV])

    event.recipes.gtceu.assembler('pistol_frame_hv')
        .itemInputs('2x gtceu:stainless_steel_plate', 'gtceu:stainless_steel_bolt', 'gtceu:stainless_steel_ring', '2x gtceu:stainless_steel_screw', 'gtceu:steel_spring')
        .inputFluids(Fluid.of('gtceu:lubricant', 100))
        .itemOutputs('1x kubejs:hv_pistol_frame')
        .duration(100)
        .EUt(GTValues.VA[GTValues.HV])

    event.recipes.gtceu.assembler('pistol_frame_ev')
        .itemInputs('2x gtceu:titanium_plate', '2x gtceu:titanium_bolt', 'gtceu:titanium_ring', '2x gtceu:titanium_screw', 'gtceu:steel_spring')
        .inputFluids(Fluid.of('gtceu:lubricant', 200))
        .itemOutputs('1x kubejs:ev_pistol_frame')
        .duration(100)
        .EUt(GTValues.VA[GTValues.EV])

    event.recipes.gtceu.assembler('pistol_frame_iv')
        .itemInputs('3x gtceu:titanium_plate', '2x gtceu:titanium_bolt', 'gtceu:titanium_ring', '2x gtceu:titanium_screw', 'gtceu:steel_spring')
        .inputFluids(Fluid.of('gtceu:lubricant', 200))
        .itemOutputs('1x kubejs:iv_pistol_frame')
        .duration(120)
        .EUt(GTValues.VA[GTValues.IV])

    event.recipes.gtceu.assembler('pistol_frame_luv')
        .itemInputs('3x gtceu:naquadah_alloy_plate', '2x gtceu:naquadah_alloy_bolt', '2x gtceu:naquadah_alloy_ring', '2x gtceu:naquadah_alloy_screw', '2x gtceu:naquadah_alloy_spring')
        .inputFluids(Fluid.of('gtceu:lubricant', 500))
        .itemOutputs('1x kubejs:luv_pistol_frame')
        .duration(120)
        .EUt(GTValues.VA[GTValues.LuV])

    // === RIFLE RECEIVER ===
    // Standard receiver — rifles, carbines, SMGs, shotguns. Extra plate + screws vs pistol frame.

    event.recipes.gtceu.assembler('rifle_receiver_lv')
        .itemInputs('3x gtceu:wrought_iron_plate', '2x gtceu:wrought_iron_bolt', 'gtceu:wrought_iron_ring', '2x gtceu:wrought_iron_screw', 'gtceu:steel_spring')
        .inputFluids(Fluid.of('gtceu:lubricant', 100))
        .itemOutputs('1x kubejs:lv_rifle_receiver')
        .duration(100)
        .EUt(GTValues.VA[GTValues.LV])

    event.recipes.gtceu.assembler('rifle_receiver_mv')
        .itemInputs('3x gtceu:steel_plate', '2x gtceu:steel_bolt', 'gtceu:steel_ring', '2x gtceu:steel_screw', 'gtceu:steel_spring')
        .inputFluids(Fluid.of('gtceu:lubricant', 100))
        .itemOutputs('1x kubejs:mv_rifle_receiver')
        .duration(100)
        .EUt(GTValues.VA[GTValues.MV])

    event.recipes.gtceu.assembler('rifle_receiver_hv')
        .itemInputs('3x gtceu:stainless_steel_plate', '2x gtceu:stainless_steel_bolt', 'gtceu:stainless_steel_ring', '2x gtceu:stainless_steel_screw', 'gtceu:steel_spring')
        .inputFluids(Fluid.of('gtceu:lubricant', 100))
        .itemOutputs('1x kubejs:hv_rifle_receiver')
        .duration(100)
        .EUt(GTValues.VA[GTValues.HV])

    event.recipes.gtceu.assembler('rifle_receiver_ev')
        .itemInputs('3x gtceu:titanium_plate', '2x gtceu:titanium_bolt', 'gtceu:titanium_ring', '2x gtceu:titanium_screw', 'gtceu:steel_spring')
        .inputFluids(Fluid.of('gtceu:lubricant', 200))
        .itemOutputs('1x kubejs:ev_rifle_receiver')
        .duration(100)
        .EUt(GTValues.VA[GTValues.EV])

    event.recipes.gtceu.assembler('rifle_receiver_iv')
        .itemInputs('4x gtceu:titanium_plate', '3x gtceu:titanium_bolt', '2x gtceu:titanium_ring', '3x gtceu:titanium_screw', '2x gtceu:steel_spring')
        .inputFluids(Fluid.of('gtceu:lubricant', 200))
        .itemOutputs('1x kubejs:iv_rifle_receiver')
        .duration(120)
        .EUt(GTValues.VA[GTValues.IV])

    event.recipes.gtceu.assembler('rifle_receiver_luv')
        .itemInputs('4x gtceu:naquadah_alloy_plate', '3x gtceu:naquadah_alloy_bolt', '2x gtceu:naquadah_alloy_ring', '3x gtceu:naquadah_alloy_screw', '2x gtceu:naquadah_alloy_spring')
        .inputFluids(Fluid.of('gtceu:lubricant', 500))
        .itemOutputs('1x kubejs:luv_rifle_receiver')
        .duration(120)
        .EUt(GTValues.VA[GTValues.LuV])

    // === HEAVY FRAME ===
    // Reinforced receiver — machine guns, sniper rifles, heavy weapons. Adds gear for action mechanism.

    event.recipes.gtceu.assembler('heavy_frame_lv')
        .itemInputs('4x gtceu:wrought_iron_plate', '2x gtceu:wrought_iron_bolt', 'gtceu:wrought_iron_ring', '2x gtceu:wrought_iron_screw', 'gtceu:steel_spring', 'gtceu:wrought_iron_gear')
        .inputFluids(Fluid.of('gtceu:lubricant', 100))
        .itemOutputs('1x kubejs:lv_heavy_frame')
        .duration(120)
        .EUt(GTValues.VA[GTValues.LV])

    event.recipes.gtceu.assembler('heavy_frame_mv')
        .itemInputs('4x gtceu:steel_plate', '2x gtceu:steel_bolt', 'gtceu:steel_ring', '2x gtceu:steel_screw', 'gtceu:steel_spring', 'gtceu:steel_gear')
        .inputFluids(Fluid.of('gtceu:lubricant', 100))
        .itemOutputs('1x kubejs:mv_heavy_frame')
        .duration(120)
        .EUt(GTValues.VA[GTValues.MV])

    event.recipes.gtceu.assembler('heavy_frame_hv')
        .itemInputs('4x gtceu:stainless_steel_plate', '2x gtceu:stainless_steel_bolt', 'gtceu:stainless_steel_ring', '2x gtceu:stainless_steel_screw', 'gtceu:steel_spring', 'gtceu:stainless_steel_gear')
        .inputFluids(Fluid.of('gtceu:lubricant', 100))
        .itemOutputs('1x kubejs:hv_heavy_frame')
        .duration(120)
        .EUt(GTValues.VA[GTValues.HV])

    event.recipes.gtceu.assembler('heavy_frame_ev')
        .itemInputs('4x gtceu:titanium_plate', '2x gtceu:titanium_bolt', '2x gtceu:titanium_ring', '2x gtceu:titanium_screw', '2x gtceu:steel_spring', 'gtceu:titanium_gear')
        .inputFluids(Fluid.of('gtceu:lubricant', 200))
        .itemOutputs('1x kubejs:ev_heavy_frame')
        .duration(150)
        .EUt(GTValues.VA[GTValues.EV])

    event.recipes.gtceu.assembler('heavy_frame_iv')
        .itemInputs('6x gtceu:titanium_plate', '3x gtceu:titanium_bolt', '2x gtceu:titanium_ring', '3x gtceu:titanium_screw', '2x gtceu:steel_spring', 'gtceu:titanium_gear')
        .inputFluids(Fluid.of('gtceu:lubricant', 200))
        .itemOutputs('1x kubejs:iv_heavy_frame')
        .duration(150)
        .EUt(GTValues.VA[GTValues.IV])

    event.recipes.gtceu.assembler('heavy_frame_luv')
        .itemInputs('6x gtceu:naquadah_alloy_plate', '3x gtceu:naquadah_alloy_bolt', '2x gtceu:naquadah_alloy_ring', '3x gtceu:naquadah_alloy_screw', '2x gtceu:naquadah_alloy_spring', 'gtceu:naquadah_alloy_gear')
        .inputFluids(Fluid.of('gtceu:lubricant', 500))
        .itemOutputs('1x kubejs:luv_heavy_frame')
        .duration(150)
        .EUt(GTValues.VA[GTValues.LuV])

    // === SHORT BARREL ===
    // Step 1 (Lathe): Turn rod into rough blank.
    // Step 2 (Assembler): Bore and chamber; ring seats the chamber mouth.

    event.recipes.gtceu.lathe('short_barrel_blank_lv')
        .itemInputs('gtceu:wrought_iron_rod')
        .itemOutputs('1x kubejs:lv_short_barrel_blank')
        .duration(60)
        .EUt(GTValues.VA[GTValues.LV])
        .circuit(1)

    event.recipes.gtceu.lathe('short_barrel_blank_mv')
        .itemInputs('gtceu:steel_rod')
        .itemOutputs('1x kubejs:mv_short_barrel_blank')
        .duration(60)
        .EUt(GTValues.VA[GTValues.MV])
        .circuit(1)

    event.recipes.gtceu.lathe('short_barrel_blank_hv')
        .itemInputs('gtceu:stainless_steel_rod')
        .itemOutputs('1x kubejs:hv_short_barrel_blank')
        .duration(60)
        .EUt(GTValues.VA[GTValues.HV])
        .circuit(1)

    event.recipes.gtceu.lathe('short_barrel_blank_ev')
        .itemInputs('gtceu:titanium_rod')
        .itemOutputs('1x kubejs:ev_short_barrel_blank')
        .duration(60)
        .EUt(GTValues.VA[GTValues.EV])
        .circuit(1)

    event.recipes.gtceu.lathe('short_barrel_blank_iv')
        .itemInputs('2x gtceu:titanium_rod')
        .itemOutputs('1x kubejs:iv_short_barrel_blank')
        .duration(80)
        .EUt(GTValues.VA[GTValues.IV])
        .circuit(1)

    event.recipes.gtceu.lathe('short_barrel_blank_luv')
        .itemInputs('2x gtceu:naquadah_alloy_rod')
        .itemOutputs('1x kubejs:luv_short_barrel_blank')
        .duration(80)
        .EUt(GTValues.VA[GTValues.LuV])
        .circuit(1)

    event.recipes.gtceu.assembler('short_barrel_lv')
        .itemInputs('kubejs:lv_short_barrel_blank', 'gtceu:wrought_iron_ring')
        .inputFluids(Fluid.of('gtceu:lubricant', 50))
        .itemOutputs('1x kubejs:lv_short_barrel')
        .duration(120)
        .EUt(GTValues.VA[GTValues.LV])

    event.recipes.gtceu.assembler('short_barrel_mv')
        .itemInputs('kubejs:mv_short_barrel_blank', 'gtceu:steel_ring')
        .inputFluids(Fluid.of('gtceu:lubricant', 50))
        .itemOutputs('1x kubejs:mv_short_barrel')
        .duration(120)
        .EUt(GTValues.VA[GTValues.MV])

    event.recipes.gtceu.assembler('short_barrel_hv')
        .itemInputs('kubejs:hv_short_barrel_blank', 'gtceu:stainless_steel_ring')
        .inputFluids(Fluid.of('gtceu:lubricant', 50))
        .itemOutputs('1x kubejs:hv_short_barrel')
        .duration(120)
        .EUt(GTValues.VA[GTValues.HV])

    event.recipes.gtceu.assembler('short_barrel_ev')
        .itemInputs('kubejs:ev_short_barrel_blank', 'gtceu:titanium_ring')
        .inputFluids(Fluid.of('gtceu:lubricant', 100))
        .itemOutputs('1x kubejs:ev_short_barrel')
        .duration(120)
        .EUt(GTValues.VA[GTValues.EV])

    event.recipes.gtceu.assembler('short_barrel_iv')
        .itemInputs('kubejs:iv_short_barrel_blank', 'gtceu:titanium_ring')
        .inputFluids(Fluid.of('gtceu:lubricant', 100))
        .itemOutputs('1x kubejs:iv_short_barrel')
        .duration(150)
        .EUt(GTValues.VA[GTValues.IV])

    event.recipes.gtceu.assembler('short_barrel_luv')
        .itemInputs('kubejs:luv_short_barrel_blank', 'gtceu:naquadah_alloy_ring')
        .inputFluids(Fluid.of('gtceu:lubricant', 200))
        .itemOutputs('1x kubejs:luv_short_barrel')
        .duration(150)
        .EUt(GTValues.VA[GTValues.LuV])

    // === LONG BARREL ===
    // Step 1 (Lathe): Turn rods into longer blank (2x rod vs 1x for short).
    // Step 2 (Assembler): Rifle the bore and sleeve with precision pipe.

    event.recipes.gtceu.lathe('long_barrel_blank_lv')
        .itemInputs('2x gtceu:wrought_iron_rod')
        .itemOutputs('1x kubejs:lv_long_barrel_blank')
        .duration(80)
        .EUt(GTValues.VA[GTValues.LV])
        .circuit(2)

    event.recipes.gtceu.lathe('long_barrel_blank_mv')
        .itemInputs('2x gtceu:steel_rod')
        .itemOutputs('1x kubejs:mv_long_barrel_blank')
        .duration(80)
        .EUt(GTValues.VA[GTValues.MV])
        .circuit(2)

    event.recipes.gtceu.lathe('long_barrel_blank_hv')
        .itemInputs('2x gtceu:stainless_steel_rod')
        .itemOutputs('1x kubejs:hv_long_barrel_blank')
        .duration(80)
        .EUt(GTValues.VA[GTValues.HV])
        .circuit(2)

    event.recipes.gtceu.lathe('long_barrel_blank_ev')
        .itemInputs('2x gtceu:titanium_rod')
        .itemOutputs('1x kubejs:ev_long_barrel_blank')
        .duration(80)
        .EUt(GTValues.VA[GTValues.EV])
        .circuit(2)

    event.recipes.gtceu.lathe('long_barrel_blank_iv')
        .itemInputs('3x gtceu:titanium_rod')
        .itemOutputs('1x kubejs:iv_long_barrel_blank')
        .duration(100)
        .EUt(GTValues.VA[GTValues.IV])
        .circuit(2)

    event.recipes.gtceu.lathe('long_barrel_blank_luv')
        .itemInputs('3x gtceu:naquadah_alloy_rod')
        .itemOutputs('1x kubejs:luv_long_barrel_blank')
        .duration(100)
        .EUt(GTValues.VA[GTValues.LuV])
        .circuit(2)

    event.recipes.gtceu.assembler('long_barrel_lv')
        .itemInputs('kubejs:lv_long_barrel_blank', 'gtceu:bronze_small_fluid_pipe')
        .inputFluids(Fluid.of('gtceu:lubricant', 100))
        .itemOutputs('1x kubejs:lv_long_barrel')
        .duration(160)
        .EUt(GTValues.VA[GTValues.LV])

    event.recipes.gtceu.assembler('long_barrel_mv')
        .itemInputs('kubejs:mv_long_barrel_blank', 'gtceu:steel_small_fluid_pipe')
        .inputFluids(Fluid.of('gtceu:lubricant', 100))
        .itemOutputs('1x kubejs:mv_long_barrel')
        .duration(160)
        .EUt(GTValues.VA[GTValues.MV])

    event.recipes.gtceu.assembler('long_barrel_hv')
        .itemInputs('kubejs:hv_long_barrel_blank', 'gtceu:stainless_steel_small_fluid_pipe')
        .inputFluids(Fluid.of('gtceu:lubricant', 100))
        .itemOutputs('1x kubejs:hv_long_barrel')
        .duration(160)
        .EUt(GTValues.VA[GTValues.HV])

    event.recipes.gtceu.assembler('long_barrel_ev')
        .itemInputs('kubejs:ev_long_barrel_blank', 'gtceu:titanium_small_fluid_pipe')
        .inputFluids(Fluid.of('gtceu:lubricant', 200))
        .itemOutputs('1x kubejs:ev_long_barrel')
        .duration(160)
        .EUt(GTValues.VA[GTValues.EV])

    event.recipes.gtceu.assembler('long_barrel_iv')
        .itemInputs('kubejs:iv_long_barrel_blank', 'gtceu:tungsten_steel_small_fluid_pipe')
        .inputFluids(Fluid.of('gtceu:lubricant', 200))
        .itemOutputs('1x kubejs:iv_long_barrel')
        .duration(200)
        .EUt(GTValues.VA[GTValues.IV])

    event.recipes.gtceu.assembler('long_barrel_luv')
        .itemInputs('kubejs:luv_long_barrel_blank', 'gtceu:naquadah_small_fluid_pipe')
        .inputFluids(Fluid.of('gtceu:lubricant', 500))
        .itemOutputs('1x kubejs:luv_long_barrel')
        .duration(200)
        .EUt(GTValues.VA[GTValues.LuV])

    // === GUN FIRE CONTROL ===
    // Trigger group. LV = pure mechanical spring. MV+ gains wire and circuits for electronic triggers.

    event.recipes.gtceu.assembler('gun_fire_control_lv')
        .itemInputs('gtceu:wrought_iron_bolt', '2x gtceu:wrought_iron_ring', 'gtceu:steel_spring')
        .itemOutputs('1x kubejs:lv_gun_fire_control')
        .duration(100)
        .EUt(GTValues.VA[GTValues.LV])

    event.recipes.gtceu.assembler('gun_fire_control_mv')
        .itemInputs('gtceu:steel_bolt', '2x gtceu:steel_ring', 'gtceu:steel_spring', '4x gtceu:fine_copper_wire', '#gtceu:circuits/lv')
        .itemOutputs('1x kubejs:mv_gun_fire_control')
        .duration(100)
        .EUt(GTValues.VA[GTValues.MV])

    event.recipes.gtceu.assembler('gun_fire_control_hv')
        .itemInputs('gtceu:stainless_steel_bolt', '2x gtceu:stainless_steel_ring', 'gtceu:steel_spring', '4x gtceu:fine_gold_wire', '#gtceu:circuits/mv')
        .itemOutputs('1x kubejs:hv_gun_fire_control')
        .duration(100)
        .EUt(GTValues.VA[GTValues.HV])

    event.recipes.gtceu.assembler('gun_fire_control_ev')
        .itemInputs('gtceu:titanium_bolt', '2x gtceu:titanium_ring', 'gtceu:steel_spring', '4x gtceu:fine_aluminium_wire', '#gtceu:circuits/hv')
        .itemOutputs('1x kubejs:ev_gun_fire_control')
        .duration(100)
        .EUt(GTValues.VA[GTValues.EV])

    event.recipes.gtceu.assembler('gun_fire_control_iv')
        .itemInputs('2x gtceu:titanium_bolt', '3x gtceu:titanium_ring', '2x gtceu:steel_spring', '8x gtceu:fine_aluminium_wire', '#gtceu:circuits/ev')
        .itemOutputs('1x kubejs:iv_gun_fire_control')
        .duration(120)
        .EUt(GTValues.VA[GTValues.IV])

    event.recipes.gtceu.assembler('gun_fire_control_luv')
        .itemInputs('2x gtceu:naquadah_alloy_bolt', '3x gtceu:naquadah_alloy_ring', '2x gtceu:naquadah_alloy_spring', '8x gtceu:fine_naquadah_wire', '#gtceu:circuits/iv')
        .itemOutputs('1x kubejs:luv_gun_fire_control')
        .duration(120)
        .EUt(GTValues.VA[GTValues.LuV])
})
