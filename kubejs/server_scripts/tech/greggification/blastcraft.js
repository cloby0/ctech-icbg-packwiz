ServerEvents.recipes(event => {

    // only replace primary crafting recipes; stair/slab/wall/polished/smooth variants kept vanilla
    // blastproofwallbase has a custom blast_compressor recipe type — that stays; GT forming_press added as alternative path

    event.remove({ output: 'blastcraft:concretemix' })
    event.remove({ output: 'blastcraft:hardenedbricksbase' })
    event.remove({ output: 'blastcraft:rawblastproofwallbase' })
    event.remove({ output: 'blastcraft:blastproofwallbase' })
    event.remove({ output: 'blastcraft:carbonplatedwallbase' })
    event.remove({ output: 'blastcraft:blastcompressor' })
    event.remove({ output: 'blastcraft:glasspressureplate' })
    event.remove({ output: 'blastcraft:spike' })
    event.remove({ output: 'blastcraft:spikefire' })
    event.remove({ output: 'blastcraft:spikepoison' })
    event.remove({ output: 'blastcraft:camoflage' })

    event.recipes.gtceu.mixer('blastcraft_concretemix')
        .itemInputs('4x gtceu:stone_dust', '4x minecraft:gravel', '4x minecraft:sand', '2x gtceu:iron_dust')
        .itemOutputs('8x blastcraft:concretemix')
        .duration(10 * 20)
        .EUt(GTValues.VA[GTValues.MV])

    event.recipes.gtceu.assembler('blastcraft_glasspressureplate')
        .itemInputs('4x gtceu:glass_plate', 'gtceu:steel_plate', '2x gtceu:red_alloy_plate')
        .itemOutputs('2x blastcraft:glasspressureplate')
        .duration(10 * 20)
        .EUt(GTValues.VA[GTValues.MV])

    event.recipes.gtceu.assembler('blastcraft_camoflage')
        .itemInputs('4x minecraft:oak_leaves', '2x minecraft:grass_block', '2x minecraft:vine', 'minecraft:green_dye')
        .itemOutputs('4x blastcraft:camoflage')
        .duration(10 * 20)
        .EUt(GTValues.VA[GTValues.MV])

    event.recipes.gtceu.assembler('blastcraft_hardenedbrickbase')
        .itemInputs('4x minecraft:obsidian', '4x minecraft:bricks', 'gtceu:chromium_plate', '2x #gtceu:circuits/hv')
        .itemOutputs('4x blastcraft:hardenedbricksbase')
        .duration(20 * 20)
        .EUt(GTValues.VA[GTValues.HV])

    event.recipes.gtceu.assembler('blastcraft_rawblastproofwallbase')
        .itemInputs('4x blastcraft:hardenedbricksbase', '2x minecraft:obsidian', '2x gtceu:stainless_steel_plate', '#gtceu:circuits/hv')
        .itemOutputs('4x blastcraft:rawblastproofwallbase')
        .duration(25 * 20)
        .EUt(GTValues.VA[GTValues.HV])

    event.recipes.gtceu.assembler('blastcraft_spike')
        .itemInputs('4x gtceu:steel_plate', '4x gtceu:steel_rod', '#gtceu:circuits/hv')
        .itemOutputs('2x blastcraft:spike')
        .duration(15 * 20)
        .EUt(GTValues.VA[GTValues.HV])

    event.recipes.gtceu.assembler('blastcraft_spikefire')
        .itemInputs('blastcraft:spike', 'minecraft:lava_bucket', '2x gtceu:invar_plate', '2x minecraft:blaze_powder')
        .itemOutputs('1x blastcraft:spikefire')
        .duration(15 * 20)
        .EUt(GTValues.VA[GTValues.HV])

    event.recipes.gtceu.assembler('blastcraft_spikepoison')
        .itemInputs('blastcraft:spike', '2x gtceu:glass_tube')
        .inputFluids(Fluid.of('gtceu:sulfur_dioxide', 2000))
        .itemOutputs('1x blastcraft:spikepoison')
        .duration(15 * 20)
        .EUt(GTValues.VA[GTValues.HV])

    event.recipes.gtceu.assembler('blastcraft_blastcompressor')
        .itemInputs('gtceu:ev_machine_hull', '2x gtceu:ev_electric_piston', 'gtceu:ev_electric_motor', '4x gtceu:stainless_steel_plate', '2x #gtceu:circuits/ev')
        .inputFluids(Fluid.of('gtceu:soldering_alloy', 144))
        .itemOutputs('1x blastcraft:blastcompressor')
        .duration(40 * 20)
        .EUt(GTValues.VA[GTValues.EV])

    // vanilla blast_compressor machine recipe also still works
    event.recipes.gtceu.forming_press('blastcraft_blastproofwallbase')
        .itemInputs('2x blastcraft:rawblastproofwallbase', 'gtceu:stainless_steel_plate', '#gtceu:circuits/ev')
        .itemOutputs('4x blastcraft:blastproofwallbase')
        .duration(30 * 20)
        .EUt(GTValues.VA[GTValues.EV])

    event.recipes.gtceu.assembler('blastcraft_carbonplatedwallbase')
        .itemInputs('4x blastcraft:blastproofwallbase', '4x gtceu:carbon_fiber_plate', '2x #gtceu:circuits/iv')
        .inputFluids(Fluid.of('gtceu:soldering_alloy', 288))
        .itemOutputs('4x blastcraft:carbonplatedwallbase')
        .duration(30 * 20)
        .EUt(GTValues.VA[GTValues.IV])

})
