ServerEvents.recipes(event => {

    const DYE_COLORS = ['black', 'blue', 'brown', 'cyan', 'gray', 'green', 'light_blue', 'light_gray', 'lime', 'magenta', 'orange', 'pink', 'purple', 'red', 'white', 'yellow']

    event.remove({ id: 'woot_revived:stygian_dust' })
    event.recipes.gtceu.mixer('woot_stygian_dust')
        .itemInputs(
            '2x minecraft:soul_soil',
            '1x gtceu:titanium_dust',
            '1x minecraft:netherite_scrap'
        )
        .itemOutputs('4x woot_revived:stygian_dust')
        .duration(10 * 20)
        .EUt(GTValues.VA[GTValues.EV])

    event.remove({ id: 'woot_revived:stygian_ingot_cook' })
    event.recipes.gtceu.electric_blast_furnace('woot_stygian_ingot')
        .itemInputs('1x woot_revived:stygian_dust')
        .itemOutputs('1x woot_revived:stygian_ingot')
        .blastFurnaceTemp(3600)
        .duration(20 * 20)
        .EUt(GTValues.VA[GTValues.HV])

    event.recipes.gtceu.bender('woot_stygian_plate')
        .itemInputs('1x woot_revived:stygian_ingot')
        .circuit(1)
        .itemOutputs('1x woot_revived:stygian_plate')
        .duration(2 * 20)
        .EUt(GTValues.VA[GTValues.HV])

    event.recipes.gtceu.assembler('woot_copper_shard')
        .itemInputs('4x #forge:ingots/copper')
        .inputFluids(Fluid.of('gtceu:lubricant', 100))
        .itemOutputs('1x woot_revived:copper_shard')
        .duration(5 * 20)
        .EUt(GTValues.VA[GTValues.LV])

    event.recipes.gtceu.assembler('woot_mob_shard')
        .itemInputs('2x woot_revived:stygian_ingot')
        .inputFluids(Fluid.of('gtceu:lubricant', 100))
        .itemOutputs('1x woot_revived:mob_shard')
        .duration(10 * 20)
        .EUt(GTValues.VA[GTValues.HV])

    // stygian_anvil block and hammer eliminated; molds (plate_mold, shard_mold, dye_casing_mold) become obsolete
    event.remove({ type: 'woot_revived:stygian_anvil' })
    event.remove({ id: 'woot_revived:stygian_anvil' })
    event.remove({ id: 'woot_revived:stygian_hammer' })

    DYE_COLORS.forEach(color => {
        event.recipes.gtceu.mixer(`woot_${color}_dye_casing`)
            .itemInputs('1x woot_revived:stygian_ingot', `1x #forge:dyes/${color}`)
            .itemOutputs(`1x woot_revived:${color}_dye_casing`)
            .duration(3 * 20)
            .EUt(GTValues.VA[GTValues.HV])
    })

    // Chokepoint: every useful Woot block (pylon, plinth, magmator, cell, dye_liquifier,
    // fluid_infuser, item_infuser, factory_ctr_base, layout, export, import, etc.) requires
    // factory_base. Gating this single recipe gates the entire system at EV.
    event.remove({ id: 'woot_revived:factory_base' })
    event.recipes.gtceu.assembler('woot_factory_base')
        .itemInputs(
            '4x woot_revived:stygian_ingot',
            '2x woot_revived:stygian_plate',
            '2x minecraft:crying_obsidian',
            '2x #gtceu:circuits/ev'
        )
        .inputFluids(Fluid.of('gtceu:lubricant', 250))
        .itemOutputs('1x woot_revived:factory_base')
        .duration(20 * 20)
        .EUt(GTValues.VA[GTValues.EV])

    event.recipes.gtceu.assembler('woot_fake_spawner')
        .itemInputs(
            '1x woot_revived:mob_shard',
            '1x woot_revived:prism',
            '1x woot_revived:factory_base'
        )
        .inputFluids(Fluid.of('gtceu:lubricant', 250))
        .itemOutputs('1x woot_revived:fake_spawner')
        .duration(15 * 20)
        .EUt(GTValues.VA[GTValues.EV])

    // Vanilla: 8 different dyes arranged around factory_base — no GT component.
    event.remove({ id: 'woot_revived:dye_liquifier' })
    event.recipes.gtceu.assembler('woot_dye_liquifier')
        .itemInputs(
            '1x woot_revived:factory_base',
            '2x #forge:dyes/red',
            '2x #forge:dyes/blue',
            '2x #forge:dyes/yellow',
            '2x #forge:dyes/white',
            '1x gtceu:hv_electric_pump'
        )
        .inputFluids(Fluid.of('gtceu:lubricant', 250))
        .itemOutputs('1x woot_revived:dye_liquifier')
        .duration(15 * 20)
        .EUt(GTValues.VA[GTValues.EV])

    event.remove({ id: 'woot_revived:enchanted_liquifier' })
    event.recipes.gtceu.assembler('woot_enchanted_liquifier')
        .itemInputs(
            '1x woot_revived:factory_base',
            '1x gtceu:ev_electric_piston',
            '4x minecraft:book',
            '1x #gtceu:circuits/hv'
        )
        .inputFluids(Fluid.of('gtceu:lubricant', 250))
        .itemOutputs('1x woot_revived:enchanted_liquifier')
        .duration(15 * 20)
        .EUt(GTValues.VA[GTValues.EV])

    event.remove({ id: 'woot_revived:fluid_infuser' })
    event.recipes.gtceu.assembler('woot_fluid_infuser')
        .itemInputs(
            '1x woot_revived:factory_base',
            '1x minecraft:brewing_stand',
            '1x minecraft:cauldron',
            '1x gtceu:hv_electric_pump'
        )
        .inputFluids(Fluid.of('gtceu:lubricant', 250))
        .itemOutputs('1x woot_revived:fluid_infuser')
        .duration(15 * 20)
        .EUt(GTValues.VA[GTValues.HV])

    event.remove({ id: 'woot_revived:item_infuser' })
    event.recipes.gtceu.assembler('woot_item_infuser')
        .itemInputs(
            '1x woot_revived:factory_base',
            '1x gtceu:ev_robot_arm',
            '2x minecraft:dropper',
            '1x #gtceu:circuits/hv'
        )
        .inputFluids(Fluid.of('gtceu:lubricant', 250))
        .itemOutputs('1x woot_revived:item_infuser')
        .duration(15 * 20)
        .EUt(GTValues.VA[GTValues.EV])

    event.remove({ id: 'woot_revived:factory_connect' })
    event.recipes.gtceu.assembler('woot_factory_connect')
        .itemInputs(
            '1x woot_revived:factory_base',
            '4x #forge:ingots/gold',
            '4x minecraft:redstone',
            '2x #gtceu:circuits/hv'
        )
        .inputFluids(Fluid.of('gtceu:lubricant', 250))
        .itemOutputs('1x woot_revived:factory_connect')
        .duration(10 * 20)
        .EUt(GTValues.VA[GTValues.EV])

    event.remove({ id: 'woot_revived:heart' })
    event.recipes.gtceu.assembler('woot_heart')
        .itemInputs(
            '1x woot_revived:factory_base',
            '4x woot_revived:cyan_dye_plate',
            '4x woot_revived:blue_dye_plate',
            '2x #gtceu:circuits/ev'
        )
        .inputFluids(Fluid.of('gtceu:lubricant', 250))
        .itemOutputs('1x woot_revived:heart')
        .duration(20 * 20)
        .EUt(GTValues.VA[GTValues.EV])

    // Note: iron/gold/diamond/netherite shards are factory DROPS, not craftable.

    event.remove({ id: 'woot_revived:copper_magmator' })
    event.shaped(Item.of('woot_revived:copper_magmator'), ['cbc', 'bPb', 'cbc'], {
        c: 'woot_revived:copper_shard', b: 'woot_revived:stygian_plate', P: 'gtceu:lv_electric_pump'
    })

    event.remove({ id: 'woot_revived:iron_magmator' })
    event.shaped(Item.of('woot_revived:iron_magmator'), ['cbc', 'bPb', 'cbc'], {
        c: 'woot_revived:iron_shard', b: 'woot_revived:stygian_plate', P: 'gtceu:mv_electric_pump'
    })

    event.remove({ id: 'woot_revived:gold_magmator' })
    event.shaped(Item.of('woot_revived:gold_magmator'), ['cbc', 'bPb', 'cbc'], {
        c: 'woot_revived:gold_shard', b: 'woot_revived:stygian_plate', P: 'gtceu:hv_electric_pump'
    })

    event.remove({ id: 'woot_revived:diamond_magmator' })
    event.shaped(Item.of('woot_revived:diamond_magmator'), ['cbc', 'bPb', 'cbc'], {
        c: 'woot_revived:diamond_shard', b: 'woot_revived:stygian_plate', P: 'gtceu:ev_electric_pump'
    })

    event.remove({ id: 'woot_revived:netherite_magmator' })
    event.recipes.gtceu.assembler('woot_netherite_magmator')
        .itemInputs(
            '4x woot_revived:netherite_shard',
            '4x woot_revived:stygian_plate',
            '1x woot_revived:factory_base',
            '1x gtceu:iv_electric_pump'
        )
        .inputFluids(Fluid.of('gtceu:lubricant', 500))
        .itemOutputs('1x woot_revived:netherite_magmator')
        .duration(20 * 20)
        .EUt(GTValues.VA[GTValues.IV])

    // Vanilla: iron/gold/diamond/netherite ingots — inconsistent with GT voltage tiers.
    // New materials: iron→steel(LV) | gold→aluminium(MV) | diamond→stainless_steel(HV) | netherite→titanium(EV)
    // Display names updated in kubejs/assets/woot_revived/lang/en_us.json.

    event.remove({ id: 'woot_revived:iron_looting_upgrade' })
    event.shaped(Item.of('woot_revived:iron_looting_upgrade'), ['bab', 'aca', 'bab'], {
        a: '#forge:ingots/steel', b: 'minecraft:stick', c: 'woot_revived:copper_looting_upgrade'
    })
    event.remove({ id: 'woot_revived:gold_looting_upgrade' })
    event.shaped(Item.of('woot_revived:gold_looting_upgrade'), ['bab', 'aca', 'bab'], {
        a: '#forge:ingots/aluminium', b: 'minecraft:stick', c: 'woot_revived:iron_looting_upgrade'
    })
    event.remove({ id: 'woot_revived:diamond_looting_upgrade' })
    event.shaped(Item.of('woot_revived:diamond_looting_upgrade'), ['bab', 'aca', 'bab'], {
        a: '#forge:ingots/stainless_steel', b: 'minecraft:stick', c: 'woot_revived:gold_looting_upgrade'
    })
    event.remove({ id: 'woot_revived:netherite_looting_upgrade' })
    event.shaped(Item.of('woot_revived:netherite_looting_upgrade'), ['bab', 'aca', 'bab'], {
        a: '#forge:ingots/titanium', b: 'minecraft:stick', c: 'woot_revived:diamond_looting_upgrade'
    })

    event.remove({ id: 'woot_revived:iron_rate_upgrade' })
    event.shaped(Item.of('woot_revived:iron_rate_upgrade'), ['aba', 'bcb', 'aba'], {
        a: '#forge:ingots/steel', b: '#forge:dusts/redstone', c: 'woot_revived:copper_rate_upgrade'
    })
    event.remove({ id: 'woot_revived:gold_rate_upgrade' })
    event.shaped(Item.of('woot_revived:gold_rate_upgrade'), ['aba', 'bcb', 'aba'], {
        a: '#forge:ingots/aluminium', b: '#forge:dusts/redstone', c: 'woot_revived:iron_rate_upgrade'
    })
    event.remove({ id: 'woot_revived:diamond_rate_upgrade' })
    event.shaped(Item.of('woot_revived:diamond_rate_upgrade'), ['aba', 'bcb', 'aba'], {
        a: '#forge:ingots/stainless_steel', b: '#forge:dusts/redstone', c: 'woot_revived:gold_rate_upgrade'
    })
    event.remove({ id: 'woot_revived:netherite_rate_upgrade' })
    event.shaped(Item.of('woot_revived:netherite_rate_upgrade'), ['aba', 'bcb', 'aba'], {
        a: '#forge:ingots/titanium', b: '#forge:dusts/redstone', c: 'woot_revived:diamond_rate_upgrade'
    })

    event.remove({ id: 'woot_revived:iron_efficiency_upgrade' })
    event.shaped(Item.of('woot_revived:iron_efficiency_upgrade'), ['bab', 'aca', 'bab'], {
        a: 'woot_revived:vitality_fuel_fluid_bucket', b: '#forge:ingots/steel', c: 'woot_revived:copper_efficiency_upgrade'
    })
    event.remove({ id: 'woot_revived:gold_efficiency_upgrade' })
    event.shaped(Item.of('woot_revived:gold_efficiency_upgrade'), ['bab', 'aca', 'bab'], {
        a: 'woot_revived:vitality_fuel_fluid_bucket', b: '#forge:ingots/aluminium', c: 'woot_revived:iron_efficiency_upgrade'
    })
    event.remove({ id: 'woot_revived:diamond_efficiency_upgrade' })
    event.shaped(Item.of('woot_revived:diamond_efficiency_upgrade'), ['bab', 'aca', 'bab'], {
        a: 'woot_revived:vitality_fuel_fluid_bucket', b: '#forge:ingots/stainless_steel', c: 'woot_revived:gold_efficiency_upgrade'
    })
    event.remove({ id: 'woot_revived:netherite_efficiency_upgrade' })
    event.shaped(Item.of('woot_revived:netherite_efficiency_upgrade'), ['bab', 'aca', 'bab'], {
        a: 'woot_revived:vitality_fuel_fluid_bucket', b: '#forge:ingots/titanium', c: 'woot_revived:diamond_efficiency_upgrade'
    })

    event.remove({ id: 'woot_revived:iron_mass_upgrade' })
    event.shaped(Item.of('woot_revived:iron_mass_upgrade'), ['aaa', 'aba', 'aaa'], {
        a: '#forge:ingots/steel', b: 'woot_revived:copper_mass_upgrade'
    })
    event.remove({ id: 'woot_revived:gold_mass_upgrade' })
    event.shaped(Item.of('woot_revived:gold_mass_upgrade'), ['aaa', 'aba', 'aaa'], {
        a: '#forge:ingots/aluminium', b: 'woot_revived:iron_mass_upgrade'
    })
    event.remove({ id: 'woot_revived:diamond_mass_upgrade' })
    event.shaped(Item.of('woot_revived:diamond_mass_upgrade'), ['aaa', 'aba', 'aaa'], {
        a: '#forge:ingots/stainless_steel', b: 'woot_revived:gold_mass_upgrade'
    })
    event.remove({ id: 'woot_revived:netherite_mass_upgrade' })
    event.shaped(Item.of('woot_revived:netherite_mass_upgrade'), ['aaa', 'aba', 'aaa'], {
        a: '#forge:ingots/titanium', b: 'woot_revived:diamond_mass_upgrade'
    })

    event.remove({ id: 'woot_revived:iron_xp_upgrade' })
    event.shaped(Item.of('woot_revived:iron_xp_upgrade'), ['bab', 'aca', 'bab'], {
        a: 'minecraft:experience_bottle', b: '#forge:ingots/steel', c: 'woot_revived:copper_xp_upgrade'
    })
    event.remove({ id: 'woot_revived:gold_xp_upgrade' })
    event.shaped(Item.of('woot_revived:gold_xp_upgrade'), ['bab', 'aca', 'bab'], {
        a: 'minecraft:experience_bottle', b: '#forge:ingots/aluminium', c: 'woot_revived:iron_xp_upgrade'
    })
    event.remove({ id: 'woot_revived:diamond_xp_upgrade' })
    event.shaped(Item.of('woot_revived:diamond_xp_upgrade'), ['bab', 'aca', 'bab'], {
        a: 'minecraft:experience_bottle', b: '#forge:ingots/stainless_steel', c: 'woot_revived:gold_xp_upgrade'
    })
    event.remove({ id: 'woot_revived:netherite_xp_upgrade' })
    event.shaped(Item.of('woot_revived:netherite_xp_upgrade'), ['bab', 'aca', 'bab'], {
        a: 'minecraft:experience_bottle', b: '#forge:ingots/titanium', c: 'woot_revived:diamond_xp_upgrade'
    })

    event.remove({ id: 'woot_revived:iron_decapitate_upgrade' })
    event.shaped(Item.of('woot_revived:iron_decapitate_upgrade'), ['cac', 'aba', 'cac'], {
        a: 'minecraft:skeleton_skull', b: 'woot_revived:copper_decapitate_upgrade', c: '#forge:ingots/steel'
    })
    event.remove({ id: 'woot_revived:gold_decapitate_upgrade' })
    event.shaped(Item.of('woot_revived:gold_decapitate_upgrade'), ['cac', 'aba', 'cac'], {
        a: 'minecraft:creeper_head', b: 'woot_revived:iron_decapitate_upgrade', c: '#forge:ingots/aluminium'
    })
    event.remove({ id: 'woot_revived:diamond_decapitate_upgrade' })
    event.shaped(Item.of('woot_revived:diamond_decapitate_upgrade'), ['cac', 'aba', 'cac'], {
        a: 'minecraft:wither_skeleton_skull', b: 'woot_revived:gold_decapitate_upgrade', c: '#forge:ingots/stainless_steel'
    })
    event.remove({ id: 'woot_revived:netherite_decapitate_upgrade' })
    event.shaped(Item.of('woot_revived:netherite_decapitate_upgrade'), ['cac', 'aba', 'cac'], {
        a: 'minecraft:dragon_head', b: 'woot_revived:diamond_decapitate_upgrade', c: '#forge:ingots/titanium'
    })

    event.remove({ id: 'woot_revived:iron_shard_drop_upgrade' })
    event.shaped(Item.of('woot_revived:iron_shard_drop_upgrade'), ['bab', 'aca', 'bab'], {
        a: 'woot_revived:copper_shard', b: '#forge:ingots/steel', c: 'woot_revived:upgrade_base'
    })
    event.remove({ id: 'woot_revived:gold_shard_drop_upgrade' })
    event.shaped(Item.of('woot_revived:gold_shard_drop_upgrade'), ['bab', 'aca', 'bab'], {
        a: 'woot_revived:iron_shard', b: '#forge:ingots/aluminium', c: 'woot_revived:iron_shard_drop_upgrade'
    })
    event.remove({ id: 'woot_revived:diamond_shard_drop_upgrade' })
    event.shaped(Item.of('woot_revived:diamond_shard_drop_upgrade'), ['bab', 'aca', 'bab'], {
        a: 'woot_revived:gold_shard', b: '#forge:ingots/stainless_steel', c: 'woot_revived:gold_shard_drop_upgrade'
    })
    event.remove({ id: 'woot_revived:netherite_shard_drop_upgrade' })
    event.shaped(Item.of('woot_revived:netherite_shard_drop_upgrade'), ['bab', 'aca', 'bab'], {
        a: 'woot_revived:diamond_shard', b: '#forge:ingots/titanium', c: 'woot_revived:diamond_shard_drop_upgrade'
    })
})
