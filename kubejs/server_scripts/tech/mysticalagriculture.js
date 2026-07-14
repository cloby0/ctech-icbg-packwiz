// MysticalAgriculture tech-side: OPTIONAL GT assembler recipes for functional blocks (a parallel path,
// never required -- the mod's own bench crafts stay). Core material/tier work lives in
// magic/mysticalAgriculture.js. All ingredient ids copied from the mod's own recipes (verified in dump).
ServerEvents.recipes(event => {

    const MA = 'mysticalagriculture'
    const MAA = 'mysticalagradditions'

    // Optional GT assembler path for each functional block. The mod's own bench craft is left intact as
    // the non-GT path (rule: GregTech is never REQUIRED for any MysticalAgriculture content).
    function machine(id, tier, inputs, output, duration) {
        let out = output || `1x ${id}`
        let r = event.recipes.gtceu.assembler(`ma_${id.split(':')[1]}`)
        inputs.forEach(i => r.itemInputs(i))
        r.itemOutputs(out).duration((duration || 10) * 20).EUt(GTValues.VA[tier])
    }

    // ---- Infusion / awakening structure blocks ----
    machine(`${MA}:infusion_altar`,     GTValues.LV, ['2x minecraft:gold_ingot', '4x minecraft:stone', '1x minecraft:red_wool'], null, 8)
    machine(`${MA}:infusion_pedestal`,  GTValues.LV, ['2x minecraft:gold_ingot', '2x minecraft:stone', '1x minecraft:red_wool'], null, 6)
    machine(`${MA}:awakening_altar`,    GTValues.EV, ['2x minecraft:gold_ingot', `4x ${MA}:soulstone`, '1x minecraft:orange_wool'], null, 12)
    machine(`${MA}:awakening_pedestal`, GTValues.EV, ['2x minecraft:gold_ingot', `2x ${MA}:soulstone`, '1x minecraft:orange_wool'], null, 10)

    // ---- Infusion crystals ----
    machine(`${MA}:infusion_crystal`,        GTValues.LV, [`4x ${MA}:inferium_essence`, `4x ${MA}:prosperity_shard`, '1x minecraft:diamond'], null, 8)
    machine(`${MA}:master_infusion_crystal`, GTValues.IV, [`4x ${MA}:supremium_essence`, `4x ${MA}:prosperity_shard`, `1x ${MA}:supremium_gemstone`], null, 12)

    // ---- Soulium-frame machines ----
    machine(`${MA}:seed_reprocessor`, GTValues.MV, ['4x minecraft:iron_ingot', '2x gtceu:soulium_plate', '2x minecraft:iron_hoe', `1x ${MA}:machine_frame`], null, 10)
    machine(`${MA}:soul_extractor`,   GTValues.MV, ['4x minecraft:iron_ingot', '2x gtceu:soulium_plate', `2x ${MA}:soulium_dagger`, `1x ${MA}:machine_frame`], null, 10)
    machine(`${MA}:harvester`,        GTValues.MV, ['4x minecraft:iron_ingot', '2x gtceu:soulium_plate', `2x ${MA}:diamond_scythe`, `1x ${MA}:machine_frame`], null, 10)
    machine(`${MA}:essence_vessel`,   GTValues.LV, ['2x minecraft:gold_ingot', `2x ${MA}:soulstone`, '1x minecraft:glass'], null, 6)
    machine(`${MA}:tinkering_table`,  GTValues.LV, ['7x minecraft:stone', `2x ${MA}:soulium_dust`], null, 6)

    // ---- Growth accelerators (4 essence + 4 stone + tier gemstone -> 3) ----
    ;[
        ['inferium',   GTValues.LV],
        ['prudentium', GTValues.MV],
        ['tertium',    GTValues.HV],
        ['imperium',   GTValues.EV],
        ['supremium',  GTValues.IV],
    ].forEach(([t, tier]) => {
        machine(`${MA}:${t}_growth_accelerator`, tier,
            [`4x ${MA}:${t}_essence`, '4x minecraft:stone', `1x ${MA}:${t}_gemstone`],
            `3x ${MA}:${t}_growth_accelerator`, 8)
    })

    // ---- Tier furnaces (each consumes the previous furnace) ----
    ;[
        ['inferium',   'inferium',   GTValues.LV],
        ['prudentium', 'inferium',   GTValues.MV],
        ['tertium',    'prudentium', GTValues.HV],
        ['imperium',   'tertium',    GTValues.EV],
        ['supremium',  'imperium',   GTValues.IV],
    ].forEach(([t, prev, tier]) => {
        let base = t === 'inferium' ? '1x minecraft:furnace' : `1x ${MA}:${prev}_furnace`
        machine(`${MA}:${t}_furnace`, tier,
            [`1x ${MA}:${t}_essence`, `2x gtceu:${t.replace('ium', 'ite')}_plate`, `1x ${MA}:${t}_block`, base],
            null, 10)
    })

    // ---- Agradditions cruxes (insanium-gated, endgame) ----
    machine(`${MAA}:nether_star_crux`,      GTValues.IV,  [`4x ${MAA}:insanium_essence`, '2x minecraft:nether_star', `2x ${MAA}:withering_soul`, '1x minecraft:diamond_block'], null, 15)
    machine(`${MAA}:dragon_egg_crux`,       GTValues.IV,  [`4x ${MAA}:insanium_essence`, `4x ${MAA}:dragon_scale`, '1x minecraft:diamond_block'], null, 15)
    machine(`${MAA}:gaia_spirit_crux`,      GTValues.IV,  [`4x ${MAA}:insanium_essence`, '1x botania:terrasteel_block', '3x botania:gaia_ingot', '1x minecraft:diamond_block'], null, 15)
    machine(`${MAA}:awakened_draconium_crux`, GTValues.LuV, [`4x ${MAA}:insanium_essence`, '1x draconicevolution:dragon_heart', '3x draconicevolution:awakened_draconium_block', '1x minecraft:diamond_block'], null, 20)

    // ---- Soulium ore -> GT dust (soulium is the only MA ore with worldgen) ----
    event.recipes.gtceu.macerator('ma_soulium_ore_dust')
        .itemInputs(`1x ${MA}:soulium_ore`)
        .itemOutputs(`2x ${MA}:soulium_dust`)
        .duration(8 * 20)
        .EUt(GTValues.VA[GTValues.LV])

    // ---- Hard-swap every MA ingot to the gem material's plate ----
    // The tier -ites are gem-canonical; the MA <tier>_ingot items are obliterated (item_obliterator.json5).
    // Any recipe that used an ingot (MA tools/armor/machines) now consumes gtceu:<ite>_plate instead.
    // [MA ingot id, gtceu plate id]
    ;[
        ['mysticalagriculture:inferium_ingot',           'gtceu:inferite_plate'],
        ['mysticalagriculture:prudentium_ingot',         'gtceu:prudentite_plate'],
        ['mysticalagriculture:tertium_ingot',            'gtceu:tertite_plate'],
        ['mysticalagriculture:imperium_ingot',           'gtceu:imperite_plate'],
        ['mysticalagriculture:supremium_ingot',          'gtceu:supremite_plate'],
        ['mysticalagriculture:awakened_supremium_ingot', 'gtceu:awakened_supremite_plate'],
        ['mysticalagradditions:insanium_ingot',          'gtceu:insanite_plate'],
        ['mysticalagriculture:soulium_ingot',            'gtceu:soulium_plate'],
        ['mysticalagriculture:prosperity_ingot',         'gtceu:prosperity_plate'],
    ].forEach(([ingot, plate]) => {
        event.replaceInput({}, ingot, plate)
    })

})
