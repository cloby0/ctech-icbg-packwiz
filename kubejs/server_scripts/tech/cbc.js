ServerEvents.recipes(event => {

    // Tiered assembler recipes: higher voltage → more output per craft.
    // MV: 4x | HV: 8x | EV: 16x

    event.recipes.gtceu.assembler('cbc_cannon_mechanism_mv')
        .itemInputs(
            '1x gtceu:lv_electric_motor',
            '4x gtceu:aluminium_plate',
            '2x gtceu:aluminium_rod',
            '2x gtceu:aluminium_ring'
        )
        .inputFluids(Fluid.of('gtceu:lubricant', 250))
        .itemOutputs('4x kubejs:cannon_mechanism')
        .duration(10 * 20)
        .EUt(GTValues.VA[GTValues.MV])

    event.recipes.gtceu.assembler('cbc_cannon_mechanism_hv')
        .itemInputs(
            '1x gtceu:mv_electric_motor',
            '4x gtceu:stainless_steel_plate',
            '2x gtceu:stainless_steel_rod',
            '2x gtceu:stainless_steel_ring'
        )
        .inputFluids(Fluid.of('gtceu:lubricant', 500))
        .itemOutputs('8x kubejs:cannon_mechanism')
        .duration(10 * 20)
        .EUt(GTValues.VA[GTValues.HV])

    event.recipes.gtceu.assembler('cbc_cannon_mechanism_ev')
        .itemInputs(
            '1x gtceu:hv_electric_motor',
            '4x gtceu:titanium_plate',
            '2x gtceu:titanium_rod',
            '2x gtceu:titanium_ring'
        )
        .inputFluids(Fluid.of('gtceu:lubricant', 750))
        .itemOutputs('16x kubejs:cannon_mechanism')
        .duration(10 * 20)
        .EUt(GTValues.VA[GTValues.EV])

    // All vanilla recipes use andesite_casing as center; replace with cannon_mechanism.

    event.remove({ id: 'createbigcannons:cannon_builder' })
    event.shaped(
        Item.of('createbigcannons:cannon_builder', 1),
        ['hHh', ' M ', ' P '],
        {
            h: '#forge:nuggets/iron',
            H: '#forge:plates/iron',
            M: 'kubejs:cannon_mechanism',
            P: 'create:piston_extension_pole'
        }
    )

    event.remove({ id: 'createbigcannons:cannon_drill' })
    event.shaped(
        Item.of('createbigcannons:cannon_drill', 1),
        [' D ', 'pMp', ' P '],
        {
            D: '#forge:ingots/iron',
            p: 'create:fluid_pipe',
            M: 'kubejs:cannon_mechanism',
            P: 'create:piston_extension_pole'
        }
    )

    event.remove({ id: 'createbigcannons:cannon_loader' })
    event.shaped(
        Item.of('createbigcannons:cannon_loader', 1),
        ['G', 'M', 'P'],
        {
            G: '#createbigcannons:gunpowder',
            M: 'kubejs:cannon_mechanism',
            P: 'create:piston_extension_pole'
        }
    )

    event.remove({ id: 'createbigcannons:cannon_mount' })
    event.shaped(
        Item.of('createbigcannons:cannon_mount', 1),
        ['ISI', 'SMS', 'GSG'],
        {
            I: '#forge:plates/iron',
            S: 'create:shaft',
            M: 'kubejs:cannon_mechanism',
            G: '#createbigcannons:gunpowder'
        }
    )

    event.remove({ id: 'createbigcannons:cannon_mount_extension' })
    event.shaped(
        Item.of('createbigcannons:cannon_mount_extension', 1),
        [' S ', 'GMG', ' S '],
        {
            S: 'create:shaft',
            G: '#createbigcannons:gunpowder',
            M: 'kubejs:cannon_mechanism'
        }
    )

    event.remove({ id: 'createbigcannons:fixed_cannon_mount' })
    event.shaped(
        Item.of('createbigcannons:fixed_cannon_mount', 1),
        [' I ', 'GMG'],
        {
            I: '#forge:plates/iron',
            G: '#createbigcannons:gunpowder',
            M: 'kubejs:cannon_mechanism'
        }
    )

    // cannon_welder: remove both chiralities, redesign as symmetric
    event.remove({ id: 'createbigcannons:cannon_welder' })
    event.remove({ id: 'createbigcannons:cannon_welder_mirrored' })
    event.shaped(
        Item.of('createbigcannons:cannon_welder', 1),
        ['VMV', 'BZB', ' B '],
        {
            V: '#create:valve_handles',
            M: 'kubejs:cannon_mechanism',
            B: '#forge:plates/brass',
            Z: 'create:blaze_burner'
        }
    )

    // Remove Create basin alloy recipes; replace with GT mixer / EBF.

    event.remove({ id: 'createbigcannons:mixing/alloy_steel' })
    event.recipes.gtceu.mixer('cbc_steel_alloy')
        .itemInputs('2x gtceu:iron_dust', '1x gtceu:carbon_dust')
        .itemOutputs('2x createbigcannons:steel_ingot')
        .duration(10 * 20)
        .EUt(GTValues.VA[GTValues.MV])

    event.remove({ id: 'createbigcannons:mixing/alloy_bronze_tin' })
    event.remove({ id: 'createbigcannons:mixing/alloy_bronze_brass' })
    event.recipes.gtceu.mixer('cbc_bronze_alloy')
        .itemInputs('3x gtceu:copper_dust', '1x gtceu:tin_dust')
        .itemOutputs('4x createbigcannons:bronze_ingot')
        .duration(10 * 20)
        .EUt(GTValues.VA[GTValues.MV])

    // 3000K requires kanthal coils; appropriate for nether-infused alloy
    event.remove({ id: 'createbigcannons:mixing/alloy_nethersteel_steel' })
    event.remove({ id: 'createbigcannons:mixing/alloy_nethersteel_cast_iron' })
    event.recipes.gtceu.electric_blast_furnace('cbc_nethersteel_alloy')
        .itemInputs('1x minecraft:netherite_scrap', '4x #forge:ingots/steel')
        .itemOutputs('8x createbigcannons:nethersteel_ingot')
        .blastFurnaceTemp(3000)
        .duration(20 * 20)

    // Remove Create saw (log → mould); replace with GT lathe (steel ingot → mould).
    const castMoulds = [
        'very_small_cast_mould',
        'small_cast_mould',
        'medium_cast_mould',
        'large_cast_mould',
        'very_large_cast_mould',
        'cannon_end_cast_mould',
        'autocannon_barrel_cast_mould',
        'screw_breech_cast_mould',
        'sliding_breech_cast_mould',
        'autocannon_breech_cast_mould',
        'autocannon_recoil_spring_cast_mould'
    ]
    castMoulds.forEach(mould => {
        event.remove({ id: `createbigcannons:cutting/${mould}` })
        event.recipes.gtceu.lathe(`cbc_lathe_${mould}`)
            .itemInputs('1x gtceu:steel_ingot')
            .itemOutputs(`1x createbigcannons:${mould}`)
            .duration(8 * 20)
            .EUt(GTValues.VA[GTValues.MV])
    })

    // Remove Create saw (plate → wire); replace with GT cutter (steel only — iron too weak)
    event.remove({ id: 'createbigcannons:cutting/spring_wire_steel' })
    event.remove({ id: 'createbigcannons:cutting/spring_wire_iron' })
    event.recipes.gtceu.cutter('cbc_spring_wire')
        .itemInputs('1x gtceu:steel_plate')
        .inputFluids(Fluid.of('gtceu:lubricant', 50))
        .itemOutputs('4x createbigcannons:spring_wire')
        .duration(8 * 20)
        .EUt(GTValues.VA[GTValues.MV])

    // Remove sequenced assembly (press 3×); replace with GT bender
    event.remove({ id: 'createbigcannons:sequenced_assembly/recoil_spring' })
    event.recipes.gtceu.bender('cbc_recoil_spring')
        .itemInputs('3x createbigcannons:spring_wire')
        .itemOutputs('1x createbigcannons:recoil_spring')
        .duration(6 * 20)
        .EUt(GTValues.VA[GTValues.MV])

    // Remove sequenced assembly (cut 3×); replace with GT cutter
    event.remove({ id: 'createbigcannons:sequenced_assembly/bronze_autocannon_breech_extractor' })
    event.remove({ id: 'createbigcannons:sequenced_assembly/cast_iron_autocannon_breech_extractor' })
    event.remove({ id: 'createbigcannons:sequenced_assembly/steel_autocannon_breech_extractor' })

    event.recipes.gtceu.cutter('cbc_bronze_breech_extractor')
        .itemInputs('1x createbigcannons:bronze_ingot')
        .inputFluids(Fluid.of('gtceu:lubricant', 100))
        .itemOutputs('1x createbigcannons:bronze_autocannon_breech_extractor')
        .duration(8 * 20)
        .EUt(GTValues.VA[GTValues.MV])
    event.recipes.gtceu.cutter('cbc_cast_iron_breech_extractor')
        .itemInputs('1x createbigcannons:cast_iron_ingot')
        .inputFluids(Fluid.of('gtceu:lubricant', 100))
        .itemOutputs('1x createbigcannons:cast_iron_autocannon_breech_extractor')
        .duration(8 * 20)
        .EUt(GTValues.VA[GTValues.MV])
    event.recipes.gtceu.cutter('cbc_steel_breech_extractor')
        .itemInputs('1x #forge:ingots/steel')
        .inputFluids(Fluid.of('gtceu:lubricant', 100))
        .itemOutputs('1x createbigcannons:steel_autocannon_breech_extractor')
        .duration(8 * 20)
        .EUt(GTValues.VA[GTValues.MV])

    // Remove sequenced assembly (press 6×); replace with GT bender
    event.remove({ id: 'createbigcannons:sequenced_assembly/pressing_autocannon_cartridge' })
    event.recipes.gtceu.bender('cbc_autocannon_cartridge')
        .itemInputs('1x createbigcannons:autocannon_cartridge_sheet')
        .itemOutputs('6x createbigcannons:empty_autocannon_cartridge')
        .duration(4 * 20)
        .EUt(GTValues.VA[GTValues.MV])

    // Remove sequenced assembly (press 5×); replace with GT bender
    event.remove({ id: 'createbigcannons:sequenced_assembly/pressing_big_cartridge' })
    event.recipes.gtceu.bender('cbc_big_cartridge')
        .itemInputs('1x createbigcannons:big_cartridge_sheet')
        .itemOutputs('1x createbigcannons:big_cartridge')
        .duration(6 * 20)
        .EUt(GTValues.VA[GTValues.MV])

    // Remove sequenced assembly (deploy 2×) and trivial shaped recipe; replace with GT assembler
    event.remove({ id: 'createbigcannons:sequenced_assembly/assembling_machine_gun_round' })
    event.remove({ id: 'createbigcannons:machine_gun_round' })
    event.recipes.gtceu.assembler('cbc_machine_gun_round')
        .itemInputs(
            '1x createbigcannons:empty_machine_gun_round',
            '1x minecraft:gunpowder',
            '1x #forge:nuggets/copper'
        )
        .inputFluids(Fluid.of('gtceu:lubricant', 50))
        .itemOutputs('1x createbigcannons:machine_gun_round')
        .duration(4 * 20)
        .EUt(GTValues.VA[GTValues.MV])

    // All four shells used create:mechanical_crafting (requires dedicated Create machine room).
    // Replaced with GT assembler at MV.

    event.remove({ id: 'createbigcannons:he_shell' })
    event.recipes.gtceu.assembler('cbc_he_shell')
        .itemInputs('4x #forge:plates/iron', '4x createbigcannons:nitropowder')
        .inputFluids(Fluid.of('gtceu:lubricant', 50))
        .itemOutputs('2x createbigcannons:he_shell')
        .duration(8 * 20)
        .EUt(GTValues.VA[GTValues.MV])

    event.remove({ id: 'createbigcannons:ap_shell' })
    event.recipes.gtceu.assembler('cbc_ap_shell')
        .itemInputs(
            '2x createbigcannons:cast_iron_ingot',
            '2x #forge:plates/iron',
            '2x createbigcannons:nitropowder'
        )
        .inputFluids(Fluid.of('gtceu:lubricant', 50))
        .itemOutputs('1x createbigcannons:ap_shell')
        .duration(8 * 20)
        .EUt(GTValues.VA[GTValues.MV])

    event.remove({ id: 'createbigcannons:shrapnel_shell' })
    event.recipes.gtceu.assembler('cbc_shrapnel_shell')
        .itemInputs(
            '4x #forge:plates/iron',
            '1x createbigcannons:shot_balls',
            '2x minecraft:gunpowder'
        )
        .inputFluids(Fluid.of('gtceu:lubricant', 50))
        .itemOutputs('1x createbigcannons:shrapnel_shell')
        .duration(8 * 20)
        .EUt(GTValues.VA[GTValues.MV])

    event.remove({ id: 'createbigcannons:fluid_shell' })
    event.recipes.gtceu.assembler('cbc_fluid_shell')
        .itemInputs('4x #forge:plates/iron', '2x create:fluid_pipe')
        .inputFluids(Fluid.of('gtceu:lubricant', 50))
        .itemOutputs('1x createbigcannons:fluid_shell')
        .duration(8 * 20)
        .EUt(GTValues.VA[GTValues.MV])
})
