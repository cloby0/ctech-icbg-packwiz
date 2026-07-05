ServerEvents.recipes(event => {
    event.remove({ id: "reliquary:ender_staff" });
    event.remove({ id: "reliquary:shears_of_winter" });
    event.remove({ id: "reliquary:sojourner_staff" });
    event.remove({ id: "reliquary:glacial_staff" });
    event.remove({ id: "reliquary:hero_medallion" });
    event.remove({ id: "reliquary:rod_of_lyssa" });
    event.remove({ id: "reliquary:void_tear" });

    event.remove({ id: "irons_spellbooks:divine_pearl" });
    event.remove({ id: "reliquary:mercy_cross" });

    event.remove({ id: "ars_nouveau:enchanting_apparatus" });
    event.remove({ id: "ars_nouveau:arcane_pedestal" });
    event.remove({ id: "ars_nouveau:arcane_core" });

    event.remove({ id: "constructionwand:infinity_wand" });

    event.remove({ id: 'magnumtorch:amethyst_magnum_torch' });
    event.remove({ id: 'magnumtorch:diamond_magnum_torch' });
    event.remove({ id: 'magnumtorch:emerald_magnum_torch' });

    addImbuementRecipe(event, {
        input: '#forge:gems/source',
        output: 'reliquary:void_tear',
        source: 1500,
        pedestalItems: ['minecraft:crying_obsidian', 'minecraft:crying_obsidian', 'minecraft:crying_obsidian', 'minecraft:crying_obsidian']
    });

    event.shaped(
        Item.of('reliquary:ender_staff', 1),
        [
            ' D ',
            'BCB',
            ' A '
        ],
        {
            A: 'gtceu:long_wood_rod',
            B: 'irons_spellbooks:ender_rune',
            C: 'reliquary:void_tear',
            D: 'minecraft:ender_eye'
        }
    )

    addEnchantingRecipe(event, {
        reagent: 'minecraft:shears',
        pedestalItems: ['minecraft:blue_ice', '#kubejs:water_essences', 'minecraft:snowball', 'minecraft:snowball'],
        output: 'reliquary:shears_of_winter',
        sourceCost: 2500
    })

    event.shaped(
        Item.of('reliquary:sojourner_staff', 1),
        [
            ' D ',
            'BCB',
            ' A '
        ],
        {
            A: 'gtceu:long_wood_rod',
            B: 'irons_spellbooks:protection_rune',
            C: 'reliquary:void_tear',
            D: 'reliquary:lantern_of_paranoia'
        }
    )

    event.shaped(
        Item.of('reliquary:glacial_staff', 1),
        [
            ' D ',
            'BCB',
            ' A '
        ],
        {
            A: 'gtceu:long_iron_rod',
            B: 'irons_spellbooks:ice_rune',
            C: 'reliquary:void_tear',
            D: 'minecraft:blue_ice'
        }
    )

    event.shaped(
        Item.of("reliquary:hero_medallion", 1),
        [
            'CBC',
            'BAB',
            'CBC'
        ],
        {
            A: 'reliquary:fortune_coin',
            B: 'gtceu:wrought_iron_plate',
            C: '#forge:gems/source'
        }
    )

    addEnchantingRecipe(event, {
        reagent: 'minecraft:fishing_rod',
        pedestalItems: ['irons_spellbooks:nature_rune', 'irons_spellbooks:nature_rune', 'ars_nouveau:magebloom_fiber', '#forge:gems/source'],
        output: 'reliquary:rod_of_lyssa',
        sourceCost: 2500
    })

    event.shaped(
        Item.of('constructionwand:infinity_wand', 1),
        [
            ' D ',
            'BCB',
            ' A '
        ],
        {
            A: 'gtceu:long_iron_rod',
            B: 'irons_spellbooks:evocation_rune',
            C: 'constructionwand:diamond_wand',
            D: '#forge:gems/source'
        }
    )

    addEnchantingRecipe(event, {
        reagent: 'minecraft:amethyst_shard',
        pedestalItems: ['gtceu:holy_silver_rod', 'gtceu:luminessence_dust', 'gtceu:luminessence_dust', 'aether:ambrosium_shard'],
        output: 'magnumtorch:amethyst_magnum_torch',
        sourceCost: 1500
    })

    addEnchantingRecipe(event, {
        reagent: 'minecraft:emerald',
        pedestalItems: ['gtceu:holy_silver_rod', '#forge:gems/source', 'gtceu:luminessence_dust', 'aether:ambrosium_shard'],
        output: 'magnumtorch:emerald_magnum_torch',
        sourceCost: 2000
    })

    addEnchantingRecipe(event, {
        reagent: 'minecraft:diamond',
        pedestalItems: ['gtceu:holy_silver_plate', '#forge:gems/source', '#forge:gems/source', 'gtceu:luminessence_dust'],
        output: 'magnumtorch:diamond_magnum_torch',
        sourceCost: 2500
    })

    event.shaped(
        Item.of('ars_nouveau:enchanting_apparatus', 1),
        [
            'ABA',
            'ACA',
            'ABA'
        ],
        {
            A: '#forge:rods/long/gold',
            B: 'gtceu:source_plate',
            C: 'gtceu:luminessence_dust'
    });

    event.shaped(
        Item.of('ars_nouveau:arcane_pedestal', 1),
        [
            'ZPZ',
            'ASA',
            'AAA'
        ],
        {
            A: 'ars_nouveau:archwood_planks',
            S: '#forge:tools/saws',
            P: 'minecraft:purple_carpet',
            Z: 'gtceu:zanite_screw'
        }).damageIngredient(Ingredient.of('#forge:tools/saws'));

    event.shaped(
        Item.of('ars_nouveau:arcane_core', 1),
        [
            'ADA',
            'BCB',
            'ADA'
        ],
        {
            A: '#forge:bolts/gold',
            B: 'ars_nouveau:archwood_fence',
            C: '#forge:gems/source',
            D: 'gtceu:source_plate'
    });

    addImbuementRecipe(event, {
        input: 'kubejs:sanctified_ambrosium_bloom',
        output: 'kubejs:sacred_ambrosium_shard',
        source: 1500,
        pedestalItems: ['gtceu:luminessence_dust', 'gtceu:luminessence_dust']
    });

    addImbuementRecipe(event, {
        input: 'minecraft:ender_pearl',
        output: 'irons_spellbooks:divine_pearl',
        source: 3000,
        pedestalItems: ['kubejs:sacred_ambrosium_shard']
    });

    event.shaped(
        Item.of('reliquary:mercy_cross', '{Damage:0}'),
        [
            ' A ',
            'ACA',
            ' B '
        ],
        {
            A: '#forge:rods/gold',
            B: '#forge:rods/long/gold',
            C: 'irons_spellbooks:divine_pearl'
        }
    );

    addEnchantingRecipe(event, {
        reagent: 'gtceu:silver_dust',
        pedestalItems: ['kubejs:sacred_ambrosium_shard', 'kubejs:sacred_ambrosium_shard', 'gtceu:luminessence_dust', 'gtceu:luminessence_dust'],
        output: 'kubejs:holy_silver_blend',
        sourceCost: 2000
    })

    addImbuementRecipe(event, {
        input: 'kubejs:holy_silver_blend',
        output: 'gtceu:holy_silver_dust',
        source: 2500,
        pedestalItems: ['reliquary:mercy_cross']
    });

    event.remove({ id: 'gtceu:smelting/smelt_dust_holy_silver_to_ingot'})
    addEnchantingRecipe(event, {
        reagent: 'gtceu:holy_silver_dust',
        pedestalItems: ['#kubejs:fire_essences'],
        output: 'gtceu:holy_silver_ingot',
        sourceCost: 3000
    })

    // === Skyforged line: Aether/Valkyrie alt to Holy Silver, independent of holy silver ===
    // Skyjade + Valkyrie medals -> skyforged dust -> (auto furnace smelt) -> ingot + forms
    addEnchantingRecipe(event, {
        reagent: 'deep_aether:skyjade',
        pedestalItems: ['aether:victory_medal', 'aether:victory_medal', '#kubejs:air_essences', '#kubejs:water_essences'],
        output: 'gtceu:skyforged_dust',
        sourceCost: 2500
    })

    // Combat endpoint: craftable Valkyrie gear from skyforged forms
    event.shaped('aether:valkyrie_lance', [
        ' P ',
        ' R ',
        ' R '
    ], { P: 'gtceu:skyforged_plate', R: 'gtceu:skyforged_rod' })

    event.shaped('aether:valkyrie_axe', [
        'PP',
        'PR',
        ' R'
    ], { P: 'gtceu:skyforged_plate', R: 'gtceu:skyforged_rod' })

    event.shaped('aether:valkyrie_chestplate', [
        'P P',
        'PMP',
        'PPP'
    ], { P: 'gtceu:skyforged_plate', M: 'aether:victory_medal' })

    addEnchantingRecipe(event, {
        reagent: { item: 'kubejs:sacred_ambrosium_shard' },
        pedestalItems: [
            { tag: 'kubejs:earth_essences' },
            { tag: 'kubejs:earth_essences' },
            { tag: 'kubejs:earth_essences' }
        ],
        output: { item: 'minecraft:ender_pearl', count: 4 },
        sourceCost: 2500
    })

    addEnchantingRecipe(event, {
        reagent: { item: 'kubejs:sacred_ambrosium_shard' },
        pedestalItems: [
            { tag: 'kubejs:earth_essences' },
            { tag: 'kubejs:earth_essences' },
            { tag: 'kubejs:water_essences' },
            { tag: 'kubejs:water_essences' }
        ],
        output: { item: 'reliquary:fortune_coin', count: 4 },
        sourceCost: 3000
    })

    event.shaped(
        Item.of('kubejs:magical_receiver', 1),
        [
            'HRH',
            'STS',
            'HRH'
        ],
        {
            H: 'gtceu:holy_silver_ingot',
            R: 'gtceu:holy_silver_rod',
            S: 'ars_nouveau:source_gem',
            T: 'ars_nouveau:basic_spell_turret'
        }
    )

    event.shaped(
        Item.of('tacz:modern_kinetic_gun', '{GunCurrentAmmoCount:0,GunFireMode:"SEMI",GunId:"ars_armorer:pistol_source_ejector",HasBulletInBarrel:0b}'),
        [
            'GPG',
            'FMR',
            'GPG'
        ],
        {
            G: 'ars_nouveau:source_gem',
            P: 'gtceu:holy_silver_plate',
            F: 'ars_nouveau:magebloom_fiber',
            M: 'kubejs:magical_receiver',
            R: 'gtceu:holy_silver_rod'
        }
    )

    event.shaped(
        Item.of('tacz:modern_kinetic_gun', '{GunCurrentAmmoCount:0,GunFireMode:"SEMI",GunId:"ars_armorer:shotgun_jet_ejector",HasBulletInBarrel:0b}'),
        [
            'BPB',
            'GMG',
            'BFB'
        ],
        {
            B: 'gtceu:holy_silver_bolt',
            P: 'gtceu:holy_silver_plate',
            G: 'ars_nouveau:source_gem',
            M: 'kubejs:magical_receiver',
            F: 'ars_nouveau:magebloom_fiber'
        }
    )

    event.shaped(
        Item.of('tacz:modern_kinetic_gun', '{GunCurrentAmmoCount:0,GunFireMode:"SEMI",GunId:"ars_armorer:shotgun_splash_ejector",HasBulletInBarrel:0b}'),
        [
            'GPG',
            'PMG',
            'GFG'
        ],
        {
            G: 'ars_nouveau:source_gem',
            P: 'gtceu:holy_silver_plate',
            M: 'kubejs:magical_receiver',
            F: 'ars_nouveau:magebloom_fiber'
        }
    )

    event.shaped(
        Item.of('tacz:modern_kinetic_gun', '{GunCurrentAmmoCount:0,GunFireMode:"AUTO",GunId:"ars_armorer:auto_rifle_stream_ejector",HasBulletInBarrel:0b}'),
        [
            'GPG',
            'BMB',
            'RFR'
        ],
        {
            G: 'ars_nouveau:source_gem',
            P: 'gtceu:holy_silver_plate',
            B: 'gtceu:holy_silver_bolt',
            M: 'kubejs:magical_receiver',
            R: 'gtceu:holy_silver_rod',
            F: 'ars_nouveau:magebloom_fiber'
        }
    )

    event.shaped(
        Item.of('tacz:modern_kinetic_gun', '{GunCurrentAmmoCount:0,GunFireMode:"SEMI",GunId:"ars_armorer:sniper_distance_ejector",HasBulletInBarrel:0b}'),
        [
            'GPO',
            'LMG',
            'PFP'
        ],
        {
            G: 'ars_nouveau:source_gem',
            P: 'gtceu:holy_silver_plate',
            O: 'gtceu:holy_silver_foil',
            L: 'gtceu:long_holy_silver_rod',
            M: 'kubejs:magical_receiver',
            F: 'ars_nouveau:magebloom_fiber'
        }
    )

    event.shaped(
        Item.of('tacz:modern_kinetic_gun', '{GunCurrentAmmoCount:0,GunFireMode:"SEMI",GunId:"ars_armorer:mortar_source_thrower",HasBulletInBarrel:0b}'),
        [
            'PGP',
            'GMG',
            'LFL'
        ],
        {
            P: 'gtceu:holy_silver_plate',
            G: 'ars_nouveau:source_gem',
            M: 'kubejs:magical_receiver',
            L: 'gtceu:long_holy_silver_rod',
            F: 'ars_nouveau:magebloom_fiber'
        }
    )

    event.shaped(
        Item.of('tacz:modern_kinetic_gun', '{GunCurrentAmmoCount:0,GunFireMode:"SEMI",GunId:"ars_armorer:special_miner_drill",HasBulletInBarrel:0b}'),
        [
            'BGB',
            'LML',
            'BFB'
        ],
        {
            B: 'gtceu:holy_silver_bolt',
            G: 'ars_nouveau:source_gem',
            L: 'gtceu:long_holy_silver_rod',
            M: 'kubejs:magical_receiver',
            F: 'ars_nouveau:magebloom_fiber'
        }
    )

    event.shaped(
        Item.of('tacz:modern_kinetic_gun', '{GunCurrentAmmoCount:0,GunFireMode:"SEMI",GunId:"ars_armorer:special_source_flying_blade",HasBulletInBarrel:0b}'),
        [
            'OPO',
            'GMF',
            'OPO'
        ],
        {
            O: 'gtceu:holy_silver_foil',
            P: 'gtceu:holy_silver_plate',
            G: 'ars_nouveau:source_gem',
            M: 'kubejs:magical_receiver',
            F: 'ars_nouveau:magebloom_fiber'
        }
    )
});
