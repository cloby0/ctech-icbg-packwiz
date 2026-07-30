ServerEvents.recipes(event => {

    const fusionRemove = [
        'draconicevolution:awakened_draconium_block',
        'draconicevolution:components/awakened_core',
        'draconicevolution:components/chaotic_core',
        'draconicevolution:machines/awakened_crafting_injector',
        'draconicevolution:machines/chaotic_crafting_injector',
        'draconicevolution:machines/draconic_relay_crystal',
        'draconicevolution:machines/draconium_chest',
        'draconicevolution:machines/wyvern_crafting_injector',
        'draconicevolution:tools/advanced_dislocator',
        'draconicevolution:tools/wyvern_sword',
        'draconicevolution:tools/wyvern_axe',
        'draconicevolution:tools/wyvern_pickaxe',
        'draconicevolution:tools/wyvern_shovel',
        'draconicevolution:tools/wyvern_hoe',
        'draconicevolution:tools/wyvern_bow',
        'draconicevolution:tools/wyvern_chestpiece',
        'draconicevolution:tools/wyvern_capacitor',
        'draconicevolution:tools/draconic_sword',
        'draconicevolution:tools/draconic_axe',
        'draconicevolution:tools/draconic_pickaxe',
        'draconicevolution:tools/draconic_shovel',
        'draconicevolution:tools/draconic_hoe',
        'draconicevolution:tools/draconic_bow',
        'draconicevolution:tools/draconic_chestpiece',
        'draconicevolution:tools/draconic_capacitor',
        'draconicevolution:tools/draconic_staff',
        'draconicevolution:tools/chaotic_sword',
        'draconicevolution:tools/chaotic_axe',
        'draconicevolution:tools/chaotic_pickaxe',
        'draconicevolution:tools/chaotic_shovel',
        'draconicevolution:tools/chaotic_hoe',
        'draconicevolution:tools/chaotic_bow',
        'draconicevolution:tools/chaotic_chestpiece',
        'draconicevolution:tools/chaotic_capacitor',
        'draconicevolution:tools/chaotic_staff',
        'draconicevolution:tools/chaotic_staff_alt',
    ]
    fusionRemove.forEach(function(id) { event.remove({ id: id }) })


    event.recipes.gtceu.assembler('de_awakened_core')
        .itemInputs(
            '4x draconicevolution:awakened_draconium_ingot',
            '4x draconicevolution:wyvern_core',
            '1x botania:gaia_ingot'
        )
        .inputFluids(Fluid.of('kubejs:argent_energy', 2000))
        .itemOutputs('draconicevolution:awakened_core')
        .duration(400)
        .EUt(GTValues.VA[GTValues.UHV])

    event.recipes.gtceu.assembler('de_chaotic_core')
        .itemInputs(
            '4x draconicevolution:awakened_draconium_ingot',
            '4x draconicevolution:awakened_core',
            '4x draconicevolution:large_chaos_frag'
        )
        .inputFluids(Fluid.of('kubejs:guardian_distillate', 2000))
        .itemOutputs('draconicevolution:chaotic_core')
        .duration(600)
        .EUt(GTValues.VA[GTValues.UEV])

    event.recipes.gtceu.assembler('de_draconium_chest')
        .itemInputs(
            '8x gtceu:draconium_plate',
            '4x gtceu:draconium_rod',
            '1x draconicevolution:draconium_core',
            '1x #gtceu:circuits/uv'
        )
        .inputFluids(Fluid.of('gtceu:lubricant', 500))
        .itemOutputs('draconicevolution:draconium_chest')
        .duration(300)
        .EUt(GTValues.VA[GTValues.UV])

    event.recipes.gtceu.assembler('de_draconic_relay_crystal')
        .itemInputs(
            '4x draconicevolution:wyvern_core',
            '4x gtceu:draconium_plate',
            '1x draconicevolution:wyvern_energy_core'
        )
        .inputFluids(Fluid.of('kubejs:argent_energy', 1000))
        .itemOutputs('draconicevolution:draconic_relay_crystal')
        .duration(300)
        .EUt(GTValues.VA[GTValues.UV])

    event.recipes.gtceu.assembler('de_advanced_dislocator')
        .itemInputs(
            '2x draconicevolution:wyvern_core',
            '4x gtceu:draconium_plate',
            '1x draconicevolution:wyvern_energy_core',
            '1x #gtceu:circuits/uv'
        )
        .inputFluids(Fluid.of('kubejs:argent_energy', 500))
        .itemOutputs('draconicevolution:advanced_dislocator')
        .duration(200)
        .EUt(GTValues.VA[GTValues.UV])


    event.recipes.gtceu.assembly_line('de_wyvern_chestpiece')
        .itemInputs(
            '16x gtceu:draconium_plate',
            '4x draconicevolution:wyvern_core',
            '2x draconicevolution:wyvern_energy_core',
            '1x gtceu:quantum_star',
            '2x draconicevolution:basic_relay_crystal'
        )
        .inputFluids(Fluid.of('kubejs:argent_energy', 2000))
        .itemOutputs('draconicevolution:wyvern_chestpiece')
        .duration(600)
        .EUt(GTValues.VA[GTValues.UV])

    event.recipes.gtceu.assembly_line('de_wyvern_sword')
        .itemInputs(
            '8x gtceu:draconium_plate',
            '4x gtceu:draconium_rod',
            '2x draconicevolution:wyvern_core',
            '1x draconicevolution:wyvern_energy_core',
            '1x gtceu:quantum_star',
            '2x draconicevolution:basic_relay_crystal'
        )
        .inputFluids(Fluid.of('kubejs:argent_energy', 2000))
        .itemOutputs('draconicevolution:wyvern_sword')
        .duration(600)
        .EUt(GTValues.VA[GTValues.UV])

    event.recipes.gtceu.assembly_line('de_wyvern_axe')
        .itemInputs(
            '10x gtceu:draconium_plate',
            '4x gtceu:draconium_rod',
            '2x draconicevolution:wyvern_core',
            '1x draconicevolution:wyvern_energy_core',
            '1x gtceu:quantum_star',
            '2x draconicevolution:basic_relay_crystal'
        )
        .inputFluids(Fluid.of('kubejs:argent_energy', 2000))
        .itemOutputs('draconicevolution:wyvern_axe')
        .duration(600)
        .EUt(GTValues.VA[GTValues.UV])

    event.recipes.gtceu.assembly_line('de_wyvern_pickaxe')
        .itemInputs(
            '10x gtceu:draconium_plate',
            '4x gtceu:draconium_rod',
            '2x draconicevolution:wyvern_core',
            '1x draconicevolution:wyvern_energy_core',
            '1x gtceu:quantum_star',
            '2x draconicevolution:basic_relay_crystal'
        )
        .inputFluids(Fluid.of('kubejs:argent_energy', 2000))
        .itemOutputs('draconicevolution:wyvern_pickaxe')
        .duration(600)
        .EUt(GTValues.VA[GTValues.UV])

    event.recipes.gtceu.assembly_line('de_wyvern_shovel')
        .itemInputs(
            '8x gtceu:draconium_plate',
            '4x gtceu:draconium_rod',
            '2x draconicevolution:wyvern_core',
            '1x draconicevolution:wyvern_energy_core',
            '1x gtceu:quantum_star',
            '2x draconicevolution:basic_relay_crystal'
        )
        .inputFluids(Fluid.of('kubejs:argent_energy', 2000))
        .itemOutputs('draconicevolution:wyvern_shovel')
        .duration(600)
        .EUt(GTValues.VA[GTValues.UV])

    event.recipes.gtceu.assembly_line('de_wyvern_hoe')
        .itemInputs(
            '8x gtceu:draconium_plate',
            '4x gtceu:draconium_rod',
            '2x draconicevolution:wyvern_core',
            '1x draconicevolution:wyvern_energy_core',
            '1x gtceu:quantum_star',
            '2x draconicevolution:basic_relay_crystal'
        )
        .inputFluids(Fluid.of('kubejs:argent_energy', 2000))
        .itemOutputs('draconicevolution:wyvern_hoe')
        .duration(600)
        .EUt(GTValues.VA[GTValues.UV])

    event.recipes.gtceu.assembly_line('de_wyvern_bow')
        .itemInputs(
            '8x gtceu:draconium_plate',
            '4x gtceu:draconium_rod',
            '4x gtceu:fine_draconium_wire',
            '2x draconicevolution:wyvern_core',
            '1x draconicevolution:wyvern_energy_core',
            '1x gtceu:quantum_star'
        )
        .inputFluids(Fluid.of('kubejs:argent_energy', 2000))
        .itemOutputs('draconicevolution:wyvern_bow')
        .duration(600)
        .EUt(GTValues.VA[GTValues.UV])

    event.recipes.gtceu.assembly_line('de_wyvern_capacitor')
        .itemInputs(
            '12x gtceu:draconium_plate',
            '2x gtceu:draconium_rod',
            '4x draconicevolution:wyvern_core',
            '4x draconicevolution:wyvern_energy_core',
            '1x gtceu:quantum_star',
            '2x draconicevolution:basic_relay_crystal'
        )
        .inputFluids(Fluid.of('kubejs:argent_energy', 2000))
        .itemOutputs('draconicevolution:wyvern_capacitor')
        .duration(600)
        .EUt(GTValues.VA[GTValues.UV])


    event.recipes.gtceu.draconic_infusion_chamber('de_draconic_chestpiece')
        .itemInputs(
            '16x gtceu:awakened_draconium_plate',
            '4x draconicevolution:awakened_core',
            '2x draconicevolution:draconic_energy_core',
            '2x minecraft:netherite_ingot',
            '1x draconicevolution:wyvern_chestpiece'
        )
        .inputFluids(Fluid.of('kubejs:argent_energy', 4000))
        .itemOutputs('draconicevolution:draconic_chestpiece')
        .duration(800)
        .EUt(GTValues.VA[GTValues.UHV])

    event.recipes.gtceu.draconic_infusion_chamber('de_draconic_sword')
        .itemInputs(
            '8x gtceu:awakened_draconium_plate',
            '4x gtceu:awakened_draconium_rod',
            '2x draconicevolution:awakened_core',
            '1x draconicevolution:draconic_energy_core',
            '2x minecraft:netherite_ingot',
            '1x draconicevolution:wyvern_sword'
        )
        .inputFluids(Fluid.of('kubejs:argent_energy', 4000))
        .itemOutputs('draconicevolution:draconic_sword')
        .duration(800)
        .EUt(GTValues.VA[GTValues.UHV])

    event.recipes.gtceu.draconic_infusion_chamber('de_draconic_axe')
        .itemInputs(
            '10x gtceu:awakened_draconium_plate',
            '4x gtceu:awakened_draconium_rod',
            '2x draconicevolution:awakened_core',
            '1x draconicevolution:draconic_energy_core',
            '2x minecraft:netherite_ingot',
            '1x draconicevolution:wyvern_axe'
        )
        .inputFluids(Fluid.of('kubejs:argent_energy', 4000))
        .itemOutputs('draconicevolution:draconic_axe')
        .duration(800)
        .EUt(GTValues.VA[GTValues.UHV])

    event.recipes.gtceu.draconic_infusion_chamber('de_draconic_pickaxe')
        .itemInputs(
            '10x gtceu:awakened_draconium_plate',
            '4x gtceu:awakened_draconium_rod',
            '2x draconicevolution:awakened_core',
            '1x draconicevolution:draconic_energy_core',
            '2x minecraft:netherite_ingot',
            '1x draconicevolution:wyvern_pickaxe'
        )
        .inputFluids(Fluid.of('kubejs:argent_energy', 4000))
        .itemOutputs('draconicevolution:draconic_pickaxe')
        .duration(800)
        .EUt(GTValues.VA[GTValues.UHV])

    event.recipes.gtceu.draconic_infusion_chamber('de_draconic_shovel')
        .itemInputs(
            '8x gtceu:awakened_draconium_plate',
            '4x gtceu:awakened_draconium_rod',
            '2x draconicevolution:awakened_core',
            '1x draconicevolution:draconic_energy_core',
            '2x minecraft:netherite_ingot',
            '1x draconicevolution:wyvern_shovel'
        )
        .inputFluids(Fluid.of('kubejs:argent_energy', 4000))
        .itemOutputs('draconicevolution:draconic_shovel')
        .duration(800)
        .EUt(GTValues.VA[GTValues.UHV])

    event.recipes.gtceu.draconic_infusion_chamber('de_draconic_hoe')
        .itemInputs(
            '8x gtceu:awakened_draconium_plate',
            '4x gtceu:awakened_draconium_rod',
            '2x draconicevolution:awakened_core',
            '1x draconicevolution:draconic_energy_core',
            '2x minecraft:netherite_ingot',
            '1x draconicevolution:wyvern_hoe'
        )
        .inputFluids(Fluid.of('kubejs:argent_energy', 4000))
        .itemOutputs('draconicevolution:draconic_hoe')
        .duration(800)
        .EUt(GTValues.VA[GTValues.UHV])

    event.recipes.gtceu.draconic_infusion_chamber('de_draconic_bow')
        .itemInputs(
            '8x gtceu:awakened_draconium_plate',
            '4x gtceu:awakened_draconium_rod',
            '4x gtceu:fine_awakened_draconium_wire',
            '2x draconicevolution:awakened_core',
            '2x minecraft:netherite_ingot',
            '1x draconicevolution:wyvern_bow'
        )
        .inputFluids(Fluid.of('kubejs:argent_energy', 4000))
        .itemOutputs('draconicevolution:draconic_bow')
        .duration(800)
        .EUt(GTValues.VA[GTValues.UHV])

    event.recipes.gtceu.draconic_infusion_chamber('de_draconic_capacitor')
        .itemInputs(
            '12x gtceu:awakened_draconium_plate',
            '2x gtceu:awakened_draconium_rod',
            '4x draconicevolution:awakened_core',
            '2x draconicevolution:draconic_energy_core',
            '1x draconicevolution:wyvern_capacitor'
        )
        .inputFluids(Fluid.of('kubejs:argent_energy', 4000))
        .itemOutputs('draconicevolution:draconic_capacitor')
        .duration(800)
        .EUt(GTValues.VA[GTValues.UHV])

    event.recipes.gtceu.draconic_infusion_chamber('de_draconic_staff')
        .itemInputs(
            '12x gtceu:awakened_draconium_plate',
            '4x gtceu:awakened_draconium_rod',
            '4x draconicevolution:awakened_core',
            '2x draconicevolution:draconic_energy_core',
            '1x kubejs:dragon_heart_crystal'
        )
        .inputFluids(Fluid.of('kubejs:argent_energy', 4000))
        .itemOutputs('draconicevolution:draconic_staff')
        .duration(800)
        .EUt(GTValues.VA[GTValues.UHV])


    event.recipes.gtceu.draconic_infusion_chamber('de_chaotic_chestpiece')
        .itemInputs(
            '16x gtceu:awakened_draconium_plate',
            '4x draconicevolution:chaotic_core',
            '4x draconicevolution:chaos_shard',
            '4x gtceu:chaos_crystal_dust',
            '1x draconicevolution:draconic_chestpiece'
        )
        .inputFluids(Fluid.of('kubejs:guardian_distillate', 4000))
        .itemOutputs('draconicevolution:chaotic_chestpiece')
        .duration(1000)
        .EUt(GTValues.VA[GTValues.UEV])

    event.recipes.gtceu.draconic_infusion_chamber('de_chaotic_sword')
        .itemInputs(
            '8x gtceu:awakened_draconium_plate',
            '4x draconicevolution:chaotic_core',
            '2x draconicevolution:chaos_shard',
            '4x gtceu:chaos_crystal_dust',
            '1x draconicevolution:draconic_sword'
        )
        .inputFluids(Fluid.of('kubejs:guardian_distillate', 4000))
        .itemOutputs('draconicevolution:chaotic_sword')
        .duration(1000)
        .EUt(GTValues.VA[GTValues.UEV])

    event.recipes.gtceu.draconic_infusion_chamber('de_chaotic_axe')
        .itemInputs(
            '10x gtceu:awakened_draconium_plate',
            '4x draconicevolution:chaotic_core',
            '2x draconicevolution:chaos_shard',
            '4x gtceu:chaos_crystal_dust',
            '1x draconicevolution:draconic_axe'
        )
        .inputFluids(Fluid.of('kubejs:guardian_distillate', 4000))
        .itemOutputs('draconicevolution:chaotic_axe')
        .duration(1000)
        .EUt(GTValues.VA[GTValues.UEV])

    event.recipes.gtceu.draconic_infusion_chamber('de_chaotic_pickaxe')
        .itemInputs(
            '10x gtceu:awakened_draconium_plate',
            '4x draconicevolution:chaotic_core',
            '2x draconicevolution:chaos_shard',
            '4x gtceu:chaos_crystal_dust',
            '1x draconicevolution:draconic_pickaxe'
        )
        .inputFluids(Fluid.of('kubejs:guardian_distillate', 4000))
        .itemOutputs('draconicevolution:chaotic_pickaxe')
        .duration(1000)
        .EUt(GTValues.VA[GTValues.UEV])

    event.recipes.gtceu.draconic_infusion_chamber('de_chaotic_shovel')
        .itemInputs(
            '8x gtceu:awakened_draconium_plate',
            '4x draconicevolution:chaotic_core',
            '2x draconicevolution:chaos_shard',
            '4x gtceu:chaos_crystal_dust',
            '1x draconicevolution:draconic_shovel'
        )
        .inputFluids(Fluid.of('kubejs:guardian_distillate', 4000))
        .itemOutputs('draconicevolution:chaotic_shovel')
        .duration(1000)
        .EUt(GTValues.VA[GTValues.UEV])

    event.recipes.gtceu.draconic_infusion_chamber('de_chaotic_hoe')
        .itemInputs(
            '8x gtceu:awakened_draconium_plate',
            '4x draconicevolution:chaotic_core',
            '2x draconicevolution:chaos_shard',
            '4x gtceu:chaos_crystal_dust',
            '1x draconicevolution:draconic_hoe'
        )
        .inputFluids(Fluid.of('kubejs:guardian_distillate', 4000))
        .itemOutputs('draconicevolution:chaotic_hoe')
        .duration(1000)
        .EUt(GTValues.VA[GTValues.UEV])

    event.recipes.gtceu.draconic_infusion_chamber('de_chaotic_bow')
        .itemInputs(
            '8x gtceu:awakened_draconium_plate',
            '4x gtceu:fine_awakened_draconium_wire',
            '4x draconicevolution:chaotic_core',
            '2x draconicevolution:chaos_shard',
            '4x gtceu:chaos_crystal_dust',
            '1x draconicevolution:draconic_bow'
        )
        .inputFluids(Fluid.of('kubejs:guardian_distillate', 4000))
        .itemOutputs('draconicevolution:chaotic_bow')
        .duration(1000)
        .EUt(GTValues.VA[GTValues.UEV])

    event.recipes.gtceu.draconic_infusion_chamber('de_chaotic_capacitor')
        .itemInputs(
            '12x gtceu:awakened_draconium_plate',
            '4x draconicevolution:chaotic_core',
            '4x draconicevolution:chaos_shard',
            '4x gtceu:chaos_crystal_dust',
            '1x draconicevolution:draconic_capacitor'
        )
        .inputFluids(Fluid.of('kubejs:guardian_distillate', 4000))
        .itemOutputs('draconicevolution:chaotic_capacitor')
        .duration(1000)
        .EUt(GTValues.VA[GTValues.UEV])

    event.recipes.gtceu.draconic_infusion_chamber('de_chaotic_staff')
        .itemInputs(
            '12x gtceu:awakened_draconium_plate',
            '4x draconicevolution:chaotic_core',
            '4x draconicevolution:chaos_shard',
            '4x gtceu:chaos_crystal_dust',
            '1x draconicevolution:draconic_staff'
        )
        .inputFluids(Fluid.of('kubejs:guardian_distillate', 4000))
        .itemOutputs('draconicevolution:chaotic_staff')
        .duration(1000)
        .EUt(GTValues.VA[GTValues.UEV])

})
