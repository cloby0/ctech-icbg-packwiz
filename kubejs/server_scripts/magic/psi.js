ServerEvents.recipes(event => {
    // --- removals ---
    // vanilla CAD assembly recipes (replacing with GT assembler)
    event.remove({ id: 'psi:cad_assembly_iron' })
    event.remove({ id: 'psi:cad_assembly_psimetal' })
    event.remove({ id: 'psi:gold_to_psimetal_assembly_upgrade' })

    // vanilla CAD component recipes
    event.remove({ id: 'psi:cad_core_basic' })
    event.remove({ id: 'psi:cad_socket_basic' })
    event.remove({ id: 'psi:cad_battery_basic' })
    event.remove({ id: 'psi:cad_battery_extended' })
    event.remove({ id: 'psi:cad_battery_ultradense' })

    // psidust trick crafting: circular (needs CAD that now needs psidust)
    // try removal in case KubeJS can handle psi:trick_crafting type
    // if this fails silently, CAD gate alone prevents bypass
    event.remove({ id: 'psi:psidust' })

    // psigem trick crafting: replace with enchanting apparatus
    event.remove({ id: 'psi:psigem' })

    // vanilla programmer and CAD assembler block
    event.remove({ id: 'psi:programmer' })
    event.remove({ id: 'psi:assembler' })

    // exosuit pieces
    event.remove({ id: 'psi:psimetal_exosuit_helmet' })
    event.remove({ id: 'psi:psimetal_exosuit_chestplate' })
    event.remove({ id: 'psi:psimetal_exosuit_leggings' })
    event.remove({ id: 'psi:psimetal_exosuit_boots' })
    event.remove({ id: 'psi:exosuit_controller' })

    // spell bullets (vanilla iron + psidust shaped)
    event.remove({ id: 'psi:spell_bullet_basic' })
    event.remove({ id: 'psi:spell_bullet_projectile' })
    event.remove({ id: 'psi:spell_bullet_grenade' })
    event.remove({ id: 'psi:spell_bullet_loopcast' })
    event.remove({ id: 'psi:spell_bullet_charge' })
    event.remove({ id: 'psi:spell_bullet_circle' })
    event.remove({ id: 'psi:spell_bullet_mine' })

    event.remove({ id: 'psi:detonator' })

    // --- psidust chain: HV mixer → Initiate imbuement ---
    // silicon + redstone at HV energy crystallizes latent psionic potential
    event.recipes.gtceu.mixer('latent_psi_crystal')
        .itemInputs('2x gtceu:silicon_dust', '2x minecraft:redstone')
        .itemOutputs('1x kubejs:latent_psi_crystal')
        .duration(15 * 20)
        .EUt(GTValues.VA[GTValues.HV])

    // holy silver pedestals lock psidust behind Initiate magic
    event.recipes.ars_nouveau.imbuement(
        'kubejs:latent_psi_crystal',
        'psi:psidust',
        2000,
        ['gtceu:holy_silver_dust', 'gtceu:holy_silver_dust']
    )

    // --- iron CAD assembly: dual HV + Initiate gate ---
    // holy silver foil = magic component embedded in tech recipe
    event.recipes.gtceu.assembler('psi_iron_cad_assembly')
        .itemInputs('4x create:iron_sheet', '4x psi:psidust', '#gtceu:circuits/hv', 'gtceu:holy_silver_foil')
        .inputFluids(Fluid.of('gtceu:soldering_alloy', 144))
        .itemOutputs('1x psi:cad_assembly_iron')
        .duration(15 * 20)
        .EUt(GTValues.VA[GTValues.HV])

    // --- CAD components (all gated by psidust = gated by above) ---
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

    // lv_battery_hull provides the capacitor housing
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

    // --- psimetal: keep vanilla trick_infusion path ---
    // gated naturally: trick requires iron CAD (now HV/Initiate gated)
    // teaches PSI spell system before advancing to psimetal CAD

    // --- psimetal CAD assembly: gravitite spring = late HV / EV gate ---
    // gravitite spring requires: gravitite_ingot → needs holy_silver_ingot + resonant_zanite_crystal
    event.recipes.gtceu.assembler('psi_psimetal_cad_assembly')
        .itemInputs('4x #forge:ingots/psimetal', 'gtceu:gravitite_spring', '#gtceu:circuits/hv', 'gtceu:holy_silver_foil')
        .inputFluids(Fluid.of('gtceu:soldering_alloy', 288))
        .itemOutputs('1x psi:cad_assembly_psimetal')
        .duration(20 * 20)
        .EUt(GTValues.VA[GTValues.HV])

    // --- psigem: enchanting apparatus replaces trick_greater_infusion ---
    // resonant_zanite_crystal = Journeyman Aether chain component; 6000 source = substantial infra
    event.recipes.ars_nouveau.enchanting_apparatus(
        [
            'psi:psimetal',
            'psi:psimetal',
            'kubejs:resonant_zanite_crystal',
            'kubejs:resonant_zanite_crystal',
            'minecraft:diamond',
            'minecraft:diamond',
            'gtceu:source_gem',
            'gtceu:source_gem'
        ],
        'psi:psimetal',
        'psi:psigem',
        6000
    )

    // --- PSI blocks ---
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

    // --- spell bullets: GT assembler, output 2x ---
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

    // --- exosuit: GT assembler, gravitite plate as anti-grav accent ---
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

    // detonator: steel rods replace iron; psidust gate sufficient
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
})
