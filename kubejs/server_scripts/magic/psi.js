ServerEvents.recipes(event => {
    event.remove({ id: 'psi:cad_assembly_iron' })
    event.remove({ id: 'psi:cad_assembly_psimetal' })
    event.remove({ id: 'psi:gold_to_psimetal_assembly_upgrade' })

    event.remove({ id: 'psi:cad_core_basic' })
    event.remove({ id: 'psi:cad_socket_basic' })
    event.remove({ id: 'psi:cad_battery_basic' })
    event.remove({ id: 'psi:cad_battery_extended' })
    event.remove({ id: 'psi:cad_battery_ultradense' })

    // psidust trick crafting: circular (needs CAD that now needs psidust)
    // try removal in case KubeJS can handle psi:trick_crafting type
    // if this fails silently, CAD gate alone prevents bypass
    event.remove({ id: 'psi:psidust' })

    event.remove({ id: 'psi:psigem' })

    event.remove({ id: 'psi:programmer' })
    event.remove({ id: 'psi:assembler' })

    event.remove({ id: 'psi:psimetal_exosuit_helmet' })
    event.remove({ id: 'psi:psimetal_exosuit_chestplate' })
    event.remove({ id: 'psi:psimetal_exosuit_leggings' })
    event.remove({ id: 'psi:psimetal_exosuit_boots' })
    event.remove({ id: 'psi:exosuit_controller' })

    event.remove({ id: 'psi:spell_bullet_basic' })
    event.remove({ id: 'psi:spell_bullet_projectile' })
    event.remove({ id: 'psi:spell_bullet_grenade' })
    event.remove({ id: 'psi:spell_bullet_loopcast' })
    event.remove({ id: 'psi:spell_bullet_charge' })
    event.remove({ id: 'psi:spell_bullet_circle' })
    event.remove({ id: 'psi:spell_bullet_mine' })

    event.remove({ id: 'psi:detonator' })

    event.remove({ id: 'psi:cad_assembly_gold' })

    event.remove({ id: 'psi:cad_assembly_ebony' })
    event.remove({ id: 'psi:cad_assembly_ivory' })

    event.remove({ id: 'psi:ebony_psimetal' })
    event.remove({ id: 'psi:ivory_psimetal' })

    event.remove({ id: 'psi:cad_core_conductive' })
    event.remove({ id: 'psi:cad_core_overclocked' })
    event.remove({ id: 'psi:cad_core_hyperclocked' })
    event.remove({ id: 'psi:cad_core_radiative' })

    event.remove({ id: 'psi:cad_socket_large' })
    event.remove({ id: 'psi:cad_socket_signaling' })
    event.remove({ id: 'psi:cad_socket_huge' })
    event.remove({ id: 'psi:cad_socket_transmissive' })

    event.remove({ id: 'psi:exosuit_sensor_heat' })
    event.remove({ id: 'psi:exosuit_sensor_light' })
    event.remove({ id: 'psi:exosuit_sensor_stress' })
    event.remove({ id: 'psi:exosuit_sensor_trigger' })
    event.remove({ id: 'psi:exosuit_sensor_water' })

    event.remove({ id: 'psi:spell_drive' })
    event.remove({ id: 'psi:vector_ruler' })

    event.remove({ id: 'psi:psimetal_sword' })
    event.remove({ id: 'psi:psimetal_pickaxe' })
    event.remove({ id: 'psi:psimetal_axe' })
    event.remove({ id: 'psi:psimetal_shovel' })

    // psidust chain: HV mixer then Initiate imbuement
    // silicon + redstone at HV energy crystallizes latent psionic potential
    event.recipes.gtceu.mixer('latent_psi_crystal')
        .itemInputs('2x gtceu:silicon_dust', '2x minecraft:redstone')
        .itemOutputs('1x kubejs:latent_psi_crystal')
        .duration(15 * 20)
        .EUt(GTValues.VA[GTValues.HV])

    // holy silver pedestals lock psidust behind Initiate magic
    addImbuementRecipe(event, {
        input: 'kubejs:latent_psi_crystal',
        output: 'psi:psidust',
        source: 2000,
        pedestalItems: ['gtceu:holy_silver_dust', 'gtceu:holy_silver_dust']
    })

    // iron CAD assembly: dual HV + Initiate gate
    // holy silver foil = magic component embedded in tech recipe
    event.recipes.gtceu.assembler('psi_iron_cad_assembly')
        .itemInputs('4x create:iron_sheet', '4x psi:psidust', '#gtceu:circuits/hv', 'gtceu:holy_silver_foil')
        .inputFluids(Fluid.of('gtceu:soldering_alloy', 144))
        .itemOutputs('1x psi:cad_assembly_iron')
        .duration(15 * 20)
        .EUt(GTValues.VA[GTValues.HV])

    event.recipes.gtceu.assembler('psi_cad_core_basic')
        .itemInputs('4x create:iron_sheet', '2x psi:psidust', '#gtceu:circuits/hv')
        .inputFluids(Fluid.of('gtceu:soldering_alloy', 72))
        .itemOutputs('1x psi:cad_core_basic')
        .duration(10 * 20)
        .EUt(GTValues.VA[GTValues.HV])

    event.recipes.gtceu.assembler('psi_cad_socket_basic')
        .itemInputs('2x create:iron_sheet', '1x psi:psidust', '#gtceu:circuits/mv')
        .inputFluids(Fluid.of('gtceu:soldering_alloy', 72))
        .itemOutputs('1x psi:cad_socket_basic')
        .duration(10 * 20)
        .EUt(GTValues.VA[GTValues.MV])

    event.recipes.gtceu.assembler('psi_cad_battery_basic')
        .itemInputs('2x create:iron_sheet', '1x psi:psidust', 'gtceu:lv_battery_hull')
        .inputFluids(Fluid.of('gtceu:soldering_alloy', 72))
        .itemOutputs('1x psi:cad_battery_basic')
        .duration(10 * 20)
        .EUt(GTValues.VA[GTValues.HV])

    event.recipes.gtceu.assembler('psi_cad_battery_extended')
        .itemInputs('2x #forge:ingots/psimetal', '1x psi:psidust', 'gtceu:mv_battery_hull')
        .inputFluids(Fluid.of('gtceu:soldering_alloy', 72))
        .itemOutputs('1x psi:cad_battery_extended')
        .duration(10 * 20)
        .EUt(GTValues.VA[GTValues.HV])

    event.recipes.gtceu.assembler('psi_cad_battery_ultradense')
        .itemInputs('2x #forge:ingots/psimetal', '1x psi:psigem', 'gtceu:hv_battery_hull')
        .inputFluids(Fluid.of('gtceu:soldering_alloy', 144))
        .itemOutputs('1x psi:cad_battery_ultradense')
        .duration(15 * 20)
        .EUt(GTValues.VA[GTValues.HV])

    // psimetal: keep vanilla trick_infusion path
    // gated naturally: trick requires iron CAD (now HV/Initiate gated)
    // teaches PSI spell system before advancing to psimetal CAD

    // psimetal CAD assembly: gravitite spring = late HV / EV gate
    // gravitite spring requires: gravitite_ingot -> needs holy_silver_ingot + resonant_zanite_crystal
    event.recipes.gtceu.assembler('psi_psimetal_cad_assembly')
        .itemInputs('4x #forge:ingots/psimetal', 'gtceu:gravitite_spring', '#gtceu:circuits/hv', 'gtceu:holy_silver_foil')
        .inputFluids(Fluid.of('gtceu:soldering_alloy', 288))
        .itemOutputs('1x psi:cad_assembly_psimetal')
        .duration(20 * 20)
        .EUt(GTValues.VA[GTValues.HV])

    // psigem: enchanting apparatus replaces trick_greater_infusion
    // resonant_zanite_crystal = Journeyman Aether chain component; 6000 source = substantial infra
    addEnchantingRecipe(event, {
        reagent: 'psi:psimetal',
        pedestalItems: [
            'psi:psimetal', 'psi:psimetal',
            'kubejs:resonant_zanite_crystal', 'kubejs:resonant_zanite_crystal',
            'minecraft:diamond', 'minecraft:diamond',
            'ars_nouveau:source_gem', 'ars_nouveau:source_gem'
        ],
        output: 'psi:psigem',
        sourceCost: 6000
    })

    event.recipes.gtceu.assembler('psi_programmer_block')
        .itemInputs('4x create:iron_sheet', '2x psi:psidust', '#gtceu:circuits/hv', '2x minecraft:glass_pane')
        .inputFluids(Fluid.of('gtceu:soldering_alloy', 144))
        .itemOutputs('1x psi:programmer')
        .duration(15 * 20)
        .EUt(GTValues.VA[GTValues.HV])

    event.recipes.gtceu.assembler('psi_cad_assembler_block')
        .itemInputs('4x create:iron_sheet', '2x gtceu:hv_electric_piston', '#gtceu:circuits/hv')
        .inputFluids(Fluid.of('gtceu:soldering_alloy', 144))
        .itemOutputs('1x psi:cad_assembler')
        .duration(15 * 20)
        .EUt(GTValues.VA[GTValues.HV])

    event.recipes.gtceu.assembler('psi_spell_bullet_basic')
        .itemInputs('1x create:iron_sheet', '1x psi:psidust')
        .inputFluids(Fluid.of('gtceu:soldering_alloy', 36))
        .itemOutputs('2x psi:spell_bullet')
        .duration(5 * 20)
        .EUt(GTValues.VA[GTValues.MV])

    event.recipes.gtceu.assembler('psi_spell_bullet_projectile')
        .itemInputs('1x create:iron_sheet', '1x psi:psidust', '1x minecraft:arrow')
        .inputFluids(Fluid.of('gtceu:soldering_alloy', 36))
        .itemOutputs('2x psi:spell_bullet_projectile')
        .duration(5 * 20)
        .EUt(GTValues.VA[GTValues.MV])

    event.recipes.gtceu.assembler('psi_spell_bullet_grenade')
        .itemInputs('1x create:iron_sheet', '1x psi:psidust', '1x minecraft:gunpowder')
        .inputFluids(Fluid.of('gtceu:soldering_alloy', 36))
        .itemOutputs('2x psi:spell_bullet_grenade')
        .duration(5 * 20)
        .EUt(GTValues.VA[GTValues.MV])

    event.recipes.gtceu.assembler('psi_spell_bullet_loop')
        .itemInputs('1x create:iron_sheet', '1x psi:psidust', '1x minecraft:string')
        .inputFluids(Fluid.of('gtceu:soldering_alloy', 36))
        .itemOutputs('2x psi:spell_bullet_loop')
        .duration(5 * 20)
        .EUt(GTValues.VA[GTValues.MV])

    event.recipes.gtceu.assembler('psi_spell_bullet_charge')
        .itemInputs('1x create:iron_sheet', '1x psi:psidust', '1x minecraft:redstone')
        .inputFluids(Fluid.of('gtceu:soldering_alloy', 36))
        .itemOutputs('2x psi:spell_bullet_charge')
        .duration(5 * 20)
        .EUt(GTValues.VA[GTValues.MV])

    event.recipes.gtceu.assembler('psi_spell_bullet_circle')
        .itemInputs('1x create:iron_sheet', '1x psi:psidust', '1x minecraft:slime_ball')
        .inputFluids(Fluid.of('gtceu:soldering_alloy', 36))
        .itemOutputs('2x psi:spell_bullet_circle')
        .duration(5 * 20)
        .EUt(GTValues.VA[GTValues.MV])

    event.recipes.gtceu.assembler('psi_spell_bullet_mine')
        .itemInputs('1x create:iron_sheet', '1x psi:psidust', '1x minecraft:stone_button')
        .inputFluids(Fluid.of('gtceu:soldering_alloy', 36))
        .itemOutputs('2x psi:spell_bullet_mine')
        .duration(5 * 20)
        .EUt(GTValues.VA[GTValues.MV])

    event.recipes.gtceu.assembler('psi_exosuit_helmet')
        .itemInputs('4x #forge:ingots/psimetal', '1x psi:psigem', '#gtceu:circuits/hv', '1x gtceu:gravitite_plate')
        .inputFluids(Fluid.of('gtceu:soldering_alloy', 288))
        .itemOutputs('1x psi:psimetal_exosuit_helmet')
        .duration(20 * 20)
        .EUt(GTValues.VA[GTValues.HV])

    event.recipes.gtceu.assembler('psi_exosuit_chestplate')
        .itemInputs('8x #forge:ingots/psimetal', '2x psi:psigem', '#gtceu:circuits/hv', '2x gtceu:gravitite_plate')
        .inputFluids(Fluid.of('gtceu:soldering_alloy', 288))
        .itemOutputs('1x psi:psimetal_exosuit_chestplate')
        .duration(20 * 20)
        .EUt(GTValues.VA[GTValues.HV])

    event.recipes.gtceu.assembler('psi_exosuit_leggings')
        .itemInputs('6x #forge:ingots/psimetal', '1x psi:psigem', '#gtceu:circuits/hv', '2x gtceu:gravitite_plate')
        .inputFluids(Fluid.of('gtceu:soldering_alloy', 288))
        .itemOutputs('1x psi:psimetal_exosuit_leggings')
        .duration(20 * 20)
        .EUt(GTValues.VA[GTValues.HV])

    event.recipes.gtceu.assembler('psi_exosuit_boots')
        .itemInputs('4x #forge:ingots/psimetal', '2x psi:psigem', '#gtceu:circuits/hv', '1x gtceu:gravitite_plate')
        .inputFluids(Fluid.of('gtceu:soldering_alloy', 288))
        .itemOutputs('1x psi:psimetal_exosuit_boots')
        .duration(20 * 20)
        .EUt(GTValues.VA[GTValues.HV])

    event.recipes.gtceu.assembler('psi_exosuit_controller')
        .itemInputs('2x #forge:ingots/psimetal', '1x minecraft:glass_pane', '1x minecraft:redstone', '#gtceu:circuits/hv')
        .inputFluids(Fluid.of('gtceu:soldering_alloy', 144))
        .itemOutputs('1x psi:exosuit_controller')
        .duration(10 * 20)
        .EUt(GTValues.VA[GTValues.HV])

    event.shaped(
        Item.of('psi:detonator', 1),
        [
            ' B ',
            'APA',
        ],
        {
            A: '#forge:rods/steel',
            B: 'minecraft:stone_button',
            P: 'psi:psidust'
        }
    )

    event.recipes.gtceu.assembler('psi_gold_cad_assembly')
        .itemInputs('4x create:golden_sheet', '2x psi:psidust', '#gtceu:circuits/hv')
        .inputFluids(Fluid.of('gtceu:soldering_alloy', 144))
        .itemOutputs('1x psi:cad_assembly_gold')
        .duration(15 * 20)
        .EUt(GTValues.VA[GTValues.HV])

    // ebony psimetal: void-quenched psi alloy; tungsten density + ender resonance + end-sourced substance
    event.recipes.gtceu.mixer('ebony_psimetal_alloy')
        .itemInputs('2x psi:psimetal', '4x psi:ebony_substance', '2x gtceu:tungsten_dust', '1x minecraft:ender_pearl')
        .itemOutputs('1x psi:ebony_psimetal')
        .duration(25 * 20)
        .EUt(GTValues.VA[GTValues.HV])

    // ivory psimetal: aether-blessed psi alloy; holy silver = Initiate magic gate + ambrosium purity
    event.recipes.gtceu.mixer('ivory_psimetal_alloy')
        .itemInputs('2x psi:psimetal', '4x psi:ivory_substance', '2x gtceu:holy_silver_dust', '1x #forge:gems/ambrosium')
        .itemOutputs('1x psi:ivory_psimetal')
        .duration(25 * 20)
        .EUt(GTValues.VA[GTValues.HV])

    event.recipes.gtceu.assembler('psi_ebony_cad_assembly')
        .itemInputs('4x psi:ebony_psimetal', '1x psi:psigem', '#gtceu:circuits/hv', 'gtceu:holy_silver_foil')
        .inputFluids(Fluid.of('gtceu:soldering_alloy', 288))
        .itemOutputs('1x psi:cad_assembly_ebony_psimetal')
        .duration(20 * 20)
        .EUt(GTValues.VA[GTValues.HV])

    event.recipes.gtceu.assembler('psi_ivory_cad_assembly')
        .itemInputs('4x psi:ivory_psimetal', '1x psi:psigem', '#gtceu:circuits/hv', 'gtceu:holy_silver_foil')
        .inputFluids(Fluid.of('gtceu:soldering_alloy', 288))
        .itemOutputs('1x psi:cad_assembly_ivory_psimetal')
        .duration(20 * 20)
        .EUt(GTValues.VA[GTValues.HV])

    event.recipes.gtceu.assembler('psi_cad_core_conductive')
        .itemInputs('4x #forge:ingots/psimetal', '2x #forge:dusts/glowstone', '#gtceu:circuits/hv')
        .inputFluids(Fluid.of('gtceu:soldering_alloy', 144))
        .itemOutputs('1x psi:cad_core_conductive')
        .duration(10 * 20)
        .EUt(GTValues.VA[GTValues.HV])

    event.recipes.gtceu.assembler('psi_cad_core_overclocked')
        .itemInputs('4x #forge:ingots/psimetal', '2x minecraft:redstone', '#gtceu:circuits/hv')
        .inputFluids(Fluid.of('gtceu:soldering_alloy', 144))
        .itemOutputs('1x psi:cad_core_overclocked')
        .duration(10 * 20)
        .EUt(GTValues.VA[GTValues.HV])

    // hyperclocked/radiative require psigem; gated behind trick_greater_infusion chain
    event.recipes.gtceu.assembler('psi_cad_core_hyperclocked')
        .itemInputs('4x #forge:ingots/psimetal', '2x minecraft:redstone', '1x psi:psigem', '#gtceu:circuits/hv')
        .inputFluids(Fluid.of('gtceu:soldering_alloy', 288))
        .itemOutputs('1x psi:cad_core_hyperclocked')
        .duration(15 * 20)
        .EUt(GTValues.VA[GTValues.HV])

    event.recipes.gtceu.assembler('psi_cad_core_radiative')
        .itemInputs('4x #forge:ingots/psimetal', '2x #forge:dusts/glowstone', '1x psi:psigem', '#gtceu:circuits/hv')
        .inputFluids(Fluid.of('gtceu:soldering_alloy', 288))
        .itemOutputs('1x psi:cad_core_radiative')
        .duration(15 * 20)
        .EUt(GTValues.VA[GTValues.HV])

    event.recipes.gtceu.assembler('psi_cad_socket_large')
        .itemInputs('2x #forge:ingots/psimetal', '1x #forge:dusts/glowstone', '#gtceu:circuits/hv')
        .inputFluids(Fluid.of('gtceu:soldering_alloy', 72))
        .itemOutputs('1x psi:cad_socket_large')
        .duration(10 * 20)
        .EUt(GTValues.VA[GTValues.HV])

    event.recipes.gtceu.assembler('psi_cad_socket_signaling')
        .itemInputs('2x #forge:ingots/psimetal', '1x minecraft:redstone', '#gtceu:circuits/hv')
        .inputFluids(Fluid.of('gtceu:soldering_alloy', 72))
        .itemOutputs('1x psi:cad_socket_signaling')
        .duration(10 * 20)
        .EUt(GTValues.VA[GTValues.HV])

    event.recipes.gtceu.assembler('psi_cad_socket_huge')
        .itemInputs('2x #forge:ingots/psimetal', '1x #forge:dusts/glowstone', '1x psi:psigem', '#gtceu:circuits/hv')
        .inputFluids(Fluid.of('gtceu:soldering_alloy', 144))
        .itemOutputs('1x psi:cad_socket_huge')
        .duration(15 * 20)
        .EUt(GTValues.VA[GTValues.HV])

    event.recipes.gtceu.assembler('psi_cad_socket_transmissive')
        .itemInputs('2x #forge:ingots/psimetal', '1x minecraft:redstone', '1x psi:psigem', '#gtceu:circuits/hv')
        .inputFluids(Fluid.of('gtceu:soldering_alloy', 144))
        .itemOutputs('1x psi:cad_socket_transmissive')
        .duration(15 * 20)
        .EUt(GTValues.VA[GTValues.HV])

    event.recipes.gtceu.assembler('psi_exosuit_sensor_heat')
        .itemInputs('2x #forge:ingots/psimetal', '2x create:iron_sheet', '1x minecraft:fire_charge')
        .inputFluids(Fluid.of('gtceu:soldering_alloy', 144))
        .itemOutputs('1x psi:exosuit_sensor_heat')
        .duration(10 * 20)
        .EUt(GTValues.VA[GTValues.HV])

    event.recipes.gtceu.assembler('psi_exosuit_sensor_light')
        .itemInputs('2x #forge:ingots/psimetal', '2x create:iron_sheet', '1x #forge:dusts/glowstone')
        .inputFluids(Fluid.of('gtceu:soldering_alloy', 144))
        .itemOutputs('1x psi:exosuit_sensor_light')
        .duration(10 * 20)
        .EUt(GTValues.VA[GTValues.HV])

    event.recipes.gtceu.assembler('psi_exosuit_sensor_stress')
        .itemInputs('2x #forge:ingots/psimetal', '2x create:iron_sheet', '1x minecraft:glistering_melon_slice')
        .inputFluids(Fluid.of('gtceu:soldering_alloy', 144))
        .itemOutputs('1x psi:exosuit_sensor_stress')
        .duration(10 * 20)
        .EUt(GTValues.VA[GTValues.HV])

    event.recipes.gtceu.assembler('psi_exosuit_sensor_trigger')
        .itemInputs('2x #forge:ingots/psimetal', '2x create:iron_sheet', '1x minecraft:gunpowder')
        .inputFluids(Fluid.of('gtceu:soldering_alloy', 144))
        .itemOutputs('1x psi:exosuit_sensor_trigger')
        .duration(10 * 20)
        .EUt(GTValues.VA[GTValues.HV])

    event.recipes.gtceu.assembler('psi_exosuit_sensor_water')
        .itemInputs('2x #forge:ingots/psimetal', '2x create:iron_sheet', '1x minecraft:prismarine_crystals')
        .inputFluids(Fluid.of('gtceu:soldering_alloy', 144))
        .itemOutputs('1x psi:exosuit_sensor_water')
        .duration(10 * 20)
        .EUt(GTValues.VA[GTValues.HV])

    event.recipes.gtceu.assembler('psi_spell_drive')
        .itemInputs('2x #forge:ingots/psimetal', '2x minecraft:redstone', '#gtceu:circuits/hv')
        .inputFluids(Fluid.of('gtceu:soldering_alloy', 72))
        .itemOutputs('1x psi:spell_drive')
        .duration(10 * 20)
        .EUt(GTValues.VA[GTValues.HV])

    event.recipes.gtceu.assembler('psi_vector_ruler')
        .itemInputs('2x #forge:rods/iron', '1x psi:psidust')
        .inputFluids(Fluid.of('gtceu:soldering_alloy', 36))
        .itemOutputs('1x psi:vector_ruler')
        .duration(5 * 20)
        .EUt(GTValues.VA[GTValues.MV])

    // psimetal tools: counts match vanilla patterns (sword 1+1+1, pickaxe 2+1+2, axe 2+1+2, shovel 1+1+2)
    event.recipes.gtceu.assembler('psi_psimetal_sword')
        .itemInputs('1x #forge:ingots/psimetal', '1x psi:psigem', '1x #forge:rods/iron')
        .inputFluids(Fluid.of('gtceu:soldering_alloy', 72))
        .itemOutputs('1x psi:psimetal_sword')
        .duration(10 * 20)
        .EUt(GTValues.VA[GTValues.HV])

    event.recipes.gtceu.assembler('psi_psimetal_pickaxe')
        .itemInputs('2x #forge:ingots/psimetal', '1x psi:psigem', '2x #forge:rods/iron')
        .inputFluids(Fluid.of('gtceu:soldering_alloy', 72))
        .itemOutputs('1x psi:psimetal_pickaxe')
        .duration(10 * 20)
        .EUt(GTValues.VA[GTValues.HV])

    event.recipes.gtceu.assembler('psi_psimetal_axe')
        .itemInputs('2x #forge:ingots/psimetal', '1x psi:psigem', '2x #forge:rods/iron')
        .inputFluids(Fluid.of('gtceu:soldering_alloy', 72))
        .itemOutputs('1x psi:psimetal_axe')
        .duration(10 * 20)
        .EUt(GTValues.VA[GTValues.HV])

    event.recipes.gtceu.assembler('psi_psimetal_shovel')
        .itemInputs('1x #forge:ingots/psimetal', '1x psi:psigem', '2x #forge:rods/iron')
        .inputFluids(Fluid.of('gtceu:soldering_alloy', 72))
        .itemOutputs('1x psi:psimetal_shovel')
        .duration(10 * 20)
        .EUt(GTValues.VA[GTValues.HV])
})
