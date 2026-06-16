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

    event.recipes.ars_nouveau.imbuement(
        "#forge:gems/source",
        "reliquary:void_tear",
        1500,
        [
            "minecraft:crying_obsidian", 
            "minecraft:crying_obsidian", 
            "minecraft:crying_obsidian", 
            "minecraft:crying_obsidian"
        ]
    );

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

    event.recipes.ars_nouveau.enchanting_apparatus(
        [
            "minecraft:blue_ice",
            "#kubejs:water_essences",
            "minecraft:snowball",
            "minecraft:snowball",
        ],
        "minecraft:shears",
        "reliquary:shears_of_winter",
        2500,
    );

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

    event.recipes.ars_nouveau.enchanting_apparatus(
        [
            "irons_spellbooks:nature_rune",
            "irons_spellbooks:nature_rune",
            "ars_nouveau:magebloom_fiber",
            "#forge:gems/source"
        ],
        "minecraft:fishing_rod",
        "reliquary:rod_of_lyssa",
        2500,
    );

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

    event.recipes.ars_nouveau.enchanting_apparatus(
        [
            "gtceu:holy_silver_rod",
            "gtceu:luminessence_dust",
            "gtceu:luminessence_dust",
            "aether:ambrosium_shard"
        ],
        "minecraft:amethyst_shard",
        "magnumtorch:amethyst_magnum_torch",
        1500,
    );

    event.recipes.ars_nouveau.enchanting_apparatus(
        [
            "gtceu:holy_silver_rod",
            "#forge:gems/source",
            "gtceu:luminessence_dust",
            "aether:ambrosium_shard"
        ],
        "minecraft:emerald",
        "magnumtorch:emerald_magnum_torch",
        2000,
    );

    event.recipes.ars_nouveau.enchanting_apparatus(
        [
            "gtceu:holy_silver_plate",
            "#forge:gems/source",
            "#forge:gems/source",
            "gtceu:luminessence_dust"
        ],
        "minecraft:diamond",
        "magnumtorch:diamond_magnum_torch",
        2500,
    );

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
            'B B',
            'ACA',
            'ACA'
        ],
        {
            A: '#forge:rods/gold',
            B: 'gtceu:source_plate',
            C: 'ars_nouveau:sourcestone'
    });

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

    // ambrosium processing step 2: source + luminessence purify the bloom into sacred shard
    event.recipes.ars_nouveau.imbuement(
        "kubejs:sanctified_ambrosium_bloom",
        "kubejs:sacred_ambrosium_shard",
        1500,
        ["gtceu:luminessence_dust", "gtceu:luminessence_dust"]
    );

    event.recipes.ars_nouveau.imbuement(
        "minecraft:ender_pearl",
        "irons_spellbooks:divine_pearl",
        3000,
        ["kubejs:sacred_ambrosium_shard"]
    );

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

    event.recipes.ars_nouveau.enchanting_apparatus(
        [
            "kubejs:sacred_ambrosium_shard",
            "kubejs:sacred_ambrosium_shard",
            "gtceu:luminessence_dust",
            "gtceu:luminessence_dust"
        ],
        "gtceu:silver_dust",
        "kubejs:holy_silver_blend",
        2000,
    );

    event.recipes.ars_nouveau.imbuement(
        "kubejs:holy_silver_blend",
        "gtceu:holy_silver_dust",
        2500,
        ["reliquary:mercy_cross"]
    );

    event.remove({ id: 'gtceu:smelting/smelt_dust_holy_silver_to_ingot'})
    event.recipes.ars_nouveau.enchanting_apparatus(
        [
            "#kubejs:fire_essences"
        ],
        "gtceu:holy_silver_dust",
        "gtceu:holy_silver_ingot", // output
        3000,
    );

    event.custom({
        "type": "ars_nouveau:enchanting_apparatus",
        "reagent": [{ "item": "kubejs:sacred_ambrosium_shard" }],
        "pedestalItems": [
            { "tag": "kubejs:earth_essences" },
            { "tag": "kubejs:earth_essences" },
            { "tag": "kubejs:earth_essences" }
        ],
        "output": { "item": "minecraft:ender_pearl", "count": 4 },
        "sourceCost": 2500
    })

    event.custom({
        "type": "ars_nouveau:enchanting_apparatus",
        "reagent": [{ "item": "kubejs:sacred_ambrosium_shard" }],
        "pedestalItems": [
            { "tag": "kubejs:earth_essences" },
            { "tag": "kubejs:earth_essences" },
            { "tag": "kubejs:water_essences" },
            { "tag": "kubejs:water_essences" }
        ],
        "output": { "item": "reliquary:fortune_coin", "count": 4 },
        "sourceCost": 3000
    })

    // magical_receiver: spell turret core + holy silver + source gems
    // gate component for all ars_armorer guns
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

    // pistol: compact, lightest
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

    // shotgun jet: bolt-choke spread
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

    // shotgun splash: source-burst, gem-heavy
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

    // auto rifle: bolt cycling + extra rods
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

    // sniper: long barrel + foil optics
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

    // mortar: heavy launcher, wide barrel
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

    // miner drill: drill body, rod-dominant
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

    // flying blade: foil blade edges + source
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
