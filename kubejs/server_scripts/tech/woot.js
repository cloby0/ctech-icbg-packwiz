ServerEvents.recipes(event => {

    // ── STYGIAN DUST ──────────────────────────────────────────────────────────
    // Vanilla: shapeless (soul_soil + amethyst + iron + fire_charge) — trivially cheap
    // Replace with GT Mixer at EV: titanium powder + netherite scrap + soul soil
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

    // ── FACTORY BASE ──────────────────────────────────────────────────────────
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

    // ── STYGIAN ANVIL ─────────────────────────────────────────────────────────
    // Primary crafting station; prerequisite for stygian_plate and mob_shard.
    // Needs HV circuits since it processes soul-infused material.
    event.remove({ id: 'woot_revived:stygian_anvil' })
    event.recipes.gtceu.assembler('woot_stygian_anvil')
        .itemInputs(
            '3x woot_revived:stygian_block',
            '1x woot_revived:stygian_ingot',
            '2x minecraft:crying_obsidian',
            '2x #gtceu:circuits/hv'
        )
        .inputFluids(Fluid.of('gtceu:lubricant', 250))
        .itemOutputs('1x woot_revived:stygian_anvil')
        .duration(15 * 20)
        .EUt(GTValues.VA[GTValues.HV])

    // ── DYE LIQUIFIER ─────────────────────────────────────────────────────────
    // Mixes 4 primary dye colors → pure_dye_fluid (used for dye_plates and prism).
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

    // ── ENCHANTED LIQUIFIER ───────────────────────────────────────────────────
    // Accepts enchanted books → outputs enchanted_fluid (used by item_infuser for enchanted plates).
    // EV piston compresses the enchantment energy out of the book.
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

    // ── FLUID INFUSER ─────────────────────────────────────────────────────────
    // Converts mob_tears → vitality_fuel_fluid ("Say hello to your fuel").
    // HV pump drives the fluid conversion pipeline.
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

    // ── ITEM INFUSER ──────────────────────────────────────────────────────────
    // Infuses stygian_plates with enchanted_fluid + shards → enchanted_plates; also makes prism.
    // Robot arm handles the precise item-and-fluid manipulation.
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

    // ── FACTORY CONNECTOR ─────────────────────────────────────────────────────
    // Links multiblock sections; carries redstone and energy between factory segments.
    // HV circuits handle the multi-segment coordination logic.
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

    // ── FACTORY HEART ─────────────────────────────────────────────────────────
    // The control block: monitors farm state, enforces tier requirements, manages vitality cells.
    // EV circuits gate the embedded farm-management logic.
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

    // ── MAGMATORS ─────────────────────────────────────────────────────────────
    // Power source for the factory (also required under the stygian_anvil for heat).
    // Vanilla: magma_block center. New: GT electric pump — the magmator is a thermal pump
    // unit that drives vitality fuel through the multiblock.
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

    // Netherite magmator: full IV gate — factory_base + IV pump.
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

    // ── UPGRADE TIER REBALANCING ───────────────────────────────────────────────
    // Vanilla uses iron/gold/diamond/netherite ingots — inconsistent with GT voltage tiers.
    // New materials: iron→steel(LV) | gold→aluminium(MV) | diamond→stainless_steel(HV) | netherite→titanium(EV)
    // Display names updated in client_scripts/wootLang.js.

    // ── Looting chain (each tier wraps the previous upgrade) ──
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

    // ── Rate chain ──
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

    // ── Efficiency chain ──
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

    // ── Mass chain ──
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

    // ── XP chain ──
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

    // ── Decapitate chain (corner material c, skull a, prev upgrade b) ──
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

    // ── Shard Drop chain (metal b changes; shard a identifies which shard drops) ──
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
