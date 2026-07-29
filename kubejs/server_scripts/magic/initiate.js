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

    event.remove({ id: "constructionwand:infinity_wand" });

    event.remove({ id: 'magnumtorch:amethyst_magnum_torch' });
    event.remove({ id: 'magnumtorch:diamond_magnum_torch' });
    event.remove({ id: 'magnumtorch:emerald_magnum_torch' });

    addEldrinAltarRecipe(event, {
        output: 'reliquary:void_tear',
        items: ['#forge:gems/mana', 'minecraft:crying_obsidian', 'minecraft:crying_obsidian', 'minecraft:crying_obsidian', 'minecraft:crying_obsidian'],
        affinity: 'ender',
        power: 2 * LP.INITIATE
    });

    event.shaped(
        Item.of('reliquary:ender_staff', 1),
        [
            'FD ',
            'BCB',
            ' A '
        ],
        {
            A: 'gtceu:long_wood_rod',
            B: 'irons_spellbooks:ender_rune',
            C: 'reliquary:void_tear',
            D: 'minecraft:ender_eye',
            F: '#forge:tools/files'
        }
    ).damageIngredient(Ingredient.of('#forge:tools/files'))

    addEldrinAltarRecipe(event, {
        output: 'reliquary:shears_of_winter',
        items: ['minecraft:shears', 'minecraft:blue_ice', '#kubejs:water_essences', 'minecraft:snowball', 'minecraft:snowball'],
        affinity: 'water',
        power: 2 * LP.INITIATE
    })

    event.shaped(
        Item.of('reliquary:sojourner_staff', 1),
        [
            'FD ',
            'BCB',
            ' A '
        ],
        {
            A: 'gtceu:long_wood_rod',
            B: 'irons_spellbooks:protection_rune',
            C: 'reliquary:void_tear',
            D: 'reliquary:lantern_of_paranoia',
            F: '#forge:tools/files'
        }
    ).damageIngredient(Ingredient.of('#forge:tools/files'))

    event.shaped(
        Item.of('reliquary:glacial_staff', 1),
        [
            'FD ',
            'BCB',
            ' A '
        ],
        {
            A: 'gtceu:long_iron_rod',
            B: 'irons_spellbooks:ice_rune',
            C: 'reliquary:void_tear',
            D: 'minecraft:blue_ice',
            F: '#forge:tools/files'
        }
    ).damageIngredient(Ingredient.of('#forge:tools/files'))

    event.shaped(
        Item.of("reliquary:hero_medallion", 1),
        [
            'CHC',
            'BAB',
            'CFC'
        ],
        {
            A: 'reliquary:fortune_coin',
            B: 'gtceu:wrought_iron_plate',
            C: '#forge:gems/mana',
            H: '#forge:tools/hammers',
            F: '#forge:tools/files'
        }
    ).damageIngredient(Ingredient.of('#forge:tools/hammers')).damageIngredient(Ingredient.of('#forge:tools/files'))

    // magebloom_fiber dropped -- dead ingredient, same open fiber-crop question flagged in
    // 03-journeyman.md (no post-Ars fiber source decided yet). Pedestal count reduced, not substituted.
    addEldrinAltarRecipe(event, {
        output: 'reliquary:rod_of_lyssa',
        items: ['minecraft:fishing_rod', 'irons_spellbooks:nature_rune', 'irons_spellbooks:nature_rune', '#forge:gems/mana'],
        affinity: 'earth',
        power: 2 * LP.INITIATE
    })

    event.shaped(
        Item.of('constructionwand:infinity_wand', 1),
        [
            'FD ',
            'BCB',
            ' A '
        ],
        {
            A: 'gtceu:long_iron_rod',
            B: 'irons_spellbooks:evocation_rune',
            C: 'constructionwand:diamond_wand',
            D: '#forge:gems/mana',
            F: '#forge:tools/files'
        }
    ).damageIngredient(Ingredient.of('#forge:tools/files'))

    addEldrinAltarRecipe(event, {
        output: 'magnumtorch:amethyst_magnum_torch',
        items: ['minecraft:amethyst_shard', 'gtceu:holy_silver_rod', 'gtceu:ambrosium_dust', 'gtceu:ambrosium_dust', 'aether:ambrosium_shard'],
        affinity: 'arcane',
        power: 2 * LP.INITIATE
    })

    addEldrinAltarRecipe(event, {
        output: 'magnumtorch:emerald_magnum_torch',
        items: ['minecraft:emerald', 'gtceu:holy_silver_rod', '#forge:gems/mana', 'gtceu:ambrosium_dust', 'aether:ambrosium_shard'],
        affinity: 'earth',
        power: 2 * LP.INITIATE
    })

    addEldrinAltarRecipe(event, {
        output: 'magnumtorch:diamond_magnum_torch',
        items: ['minecraft:diamond', 'gtceu:holy_silver_plate', '#forge:gems/mana', '#forge:gems/mana', 'gtceu:ambrosium_dust'],
        affinity: 'air',
        power: 2 * LP.INITIATE
    })

    // Enchanting Apparatus/Arcane Pedestal/Arcane Core: Ars Nouveau blocks, gone with the mod.
    // This is where the old "Enchanting Apparatus unlocks at Initiate" gate lived -- per
    // 00-foundation.md, that gate carries forward as a re-craft of the Alchemy Table's real
    // block (Blood Magic's own), gated with this tier's own materials in place of source_plate/
    // luminessence_dust. No pedestal/core equivalent needed -- Blood Magic's table is one block.
    event.remove({ id: 'bloodmagic:alchemy_table' })
    event.shaped(
        Item.of('bloodmagic:alchemytable', 1),
        [
            'AEA',
            'FBF',
            'AGA'
        ],
        {
            A: 'aether:ambrosium_shard',
            E: 'kubejs:ambrosia_touched_elementite',
            F: '#forge:plates/gold',
            B: 'bloodmagic:blankslate',
            G: '#forge:tools/hammers'
        }
    ).damageIngredient(Ingredient.of('#forge:tools/hammers'));

    addSpiritInfusion(event, {
        input: 'kubejs:sanctified_ambrosium_bloom',
        output: 'kubejs:sacred_ambrosium_shard',
        extraItems: [{ item: 'gtceu:ambrosium_dust', count: 2 }],
        spirits: [{ type: 'sacred', count: 2 }, { type: 'aerial' }]
    })

    addSpiritInfusion(event, {
        input: 'minecraft:ender_pearl',
        output: 'irons_spellbooks:divine_pearl',
        extraItems: [{ item: 'kubejs:sacred_ambrosium_shard' }],
        spirits: [{ type: 'sacred', count: 2 }, { type: 'arcane' }]
    })

    event.shaped(
        Item.of('reliquary:mercy_cross', '{Damage:0}'),
        [
            'FA ',
            'ACA',
            ' B '
        ],
        {
            A: '#forge:rods/gold',
            B: '#forge:rods/long/gold',
            C: 'irons_spellbooks:divine_pearl',
            F: '#forge:tools/files'
        }
    ).damageIngredient(Ingredient.of('#forge:tools/files'));

    // Holy Silver survives as a parallel/gear material, not the tier signature (Elementium+
    // ambrosium is). luminessence_dust (dead) -> ambrosium_dust, consistent across this whole chain.
    // Alloy blend/refine chain, not ritual artifacts -- moved to the Manaweaving Altar.
    addMnaManaweavingRecipe(event, {
        output: 'kubejs:holy_silver_blend',
        items: ['gtceu:silver_dust', 'kubejs:sacred_ambrosium_shard', 'kubejs:sacred_ambrosium_shard', 'gtceu:ambrosium_dust', 'gtceu:ambrosium_dust'],
        patterns: ['mna:triangle', 'mna:slash'],
        tier: 2
    })

    addMnaManaweavingRecipe(event, {
        output: 'gtceu:holy_silver_dust',
        items: ['kubejs:holy_silver_blend', 'reliquary:mercy_cross'],
        patterns: ['mna:triangle', 'mna:backslash'],
        tier: 2
    });

    event.remove({ id: 'gtceu:smelting/smelt_dust_holy_silver_to_ingot'})
    addMnaManaweavingRecipe(event, {
        output: 'gtceu:holy_silver_ingot',
        items: ['gtceu:holy_silver_dust', '#kubejs:fire_essences'],
        patterns: ['mna:triangle', 'mna:circle'],
        tier: 2
    })

    // === Skyforged line: Aether/Valkyrie alt to Holy Silver, independent of holy silver ===
    // Skyjade + Valkyrie medals -> skyforged dust -> (auto furnace smelt) -> ingot + forms.
    // No Ars ingredients here -- helper call ported, ingredients unchanged.
    addMnaManaweavingRecipe(event, {
        output: 'gtceu:skyforged_dust',
        items: ['deep_aether:skyjade', 'aether:victory_medal', 'aether:victory_medal', '#kubejs:air_essences', '#kubejs:water_essences'],
        patterns: ['mna:diamond', 'mna:backslash'],
        tier: 2
    })

    // Combat endpoint: full Valkyrie set craftable from skyforged (medals already gate the alloy upstream)
    const SP = 'gtceu:skyforged_plate'
    const SR = 'gtceu:skyforged_rod'
    const VM = 'aether:victory_medal'
    const TH = '#forge:tools/hammers'
    const TF = '#forge:tools/files'
    const TK = '#forge:tools/knives'
    ;[
        ['aether:valkyrie_pickaxe',    ['PPP', 'HRF', ' R '], { P: SP, R: SR, H: TH, F: TF }, [TH, TF]],
        ['aether:valkyrie_axe',        ['PP ', 'PRH', ' RF'], { P: SP, R: SR, H: TH, F: TF }, [TH, TF]],
        ['aether:valkyrie_shovel',     ['HPF', ' R ', ' R '], { P: SP, R: SR, H: TH, F: TF }, [TH, TF]],
        ['aether:valkyrie_hoe',        ['PPH', ' RF', ' R '], { P: SP, R: SR, H: TH, F: TF }, [TH, TF]],
        ['aether:valkyrie_lance',      ['H P', ' R ', 'R F'], { P: SP, R: SR, H: TH, F: TF }, [TH, TF]],
        ['aether:valkyrie_helmet',     ['PPP', 'PHP'],        { P: SP, H: TH }, [TH]],
        ['aether:valkyrie_chestplate', ['PHP', 'PPP', 'PPP'], { P: SP, H: TH }, [TH]],
        ['aether:valkyrie_leggings',   ['PPP', 'PHP', 'P P'], { P: SP, H: TH }, [TH]],
        ['aether:valkyrie_boots',      ['PHP', 'P P'],        { P: SP, H: TH }, [TH]],
        ['aether:valkyrie_gloves',     ['PHP', 'PMP'],        { P: SP, M: VM, H: TH }, [TH]],
        ['aether:valkyrie_cape',       ['KPP', 'PMP', 'PPP'], { P: SP, M: VM, K: TK }, [TK]]
    ].forEach(([out, pat, keys, tools]) => {
        let r = event.shaped(out, pat, keys)
        tools.forEach(t => r.damageIngredient(Ingredient.of(t)))
    })

    addMnaManaweavingRecipe(event, {
        output: { item: 'minecraft:ender_pearl', count: 4 },
        items: ['kubejs:sacred_ambrosium_shard', '#kubejs:earth_essences', '#kubejs:earth_essences', '#kubejs:earth_essences'],
        patterns: ['mna:square', 'mna:circle'],
        tier: 2
    })

    addMnaManaweavingRecipe(event, {
        output: { item: 'reliquary:fortune_coin', count: 4 },
        items: ['kubejs:sacred_ambrosium_shard', '#kubejs:earth_essences', '#kubejs:earth_essences', '#kubejs:water_essences', '#kubejs:water_essences'],
        patterns: ['mna:circle', 'mna:backslash'],
        tier: 2
    })

    // --- Elementium: Initiate signature material, ambrosium chain ---
    // Correction from the master spec: skyjade is NOT sourced here -- it already has a complete,
    // self-contained alt-material system above (Skyforged/Valkyrie), not a spare-parts bin.
    // Diverting a share of it into this chain too would be redundant, not additive. Ambrosium
    // dust (gtceu:ambrosium_dust, autogenerated GT dust off the ambrosium gem) feeds forward alone.

    // weak_elementium_dust already has a producer (Arcanist's addRunicAltarRecipe, feeds
    // elven_concentrate downstream) -- that recipe was never Elementium's own bootstrap, Elementium
    // itself has had no production path since arcanist.js removed botania:elven_trade/elementium.
    // This is that missing bootstrap: a cheap, tier-appropriate route off Terrasteel (this pack's
    // own precursor metal), parallel to Arcanist's pricier route, same material either way.
    // Magic spine stays GT-free: Spirit Altar dilutes the dust, hand-combine finishes it -- no GT machine.
    addSpiritInfusion(event, {
        input: 'gtceu:terrasteel_dust',
        output: 'kubejs:weak_elementium_dust',
        spirits: [{ type: 'aqueous', count: 2 }]
    })

    // magichem:essentia_precious is a real base Essentia (confirmed in the jar lang file) --
    // matches ambrosium's precious/divine-metal theme. Per user direction 2026-07-28: make
    // MagiChem load-bearing, not just a background essence tag.
    event.shapeless('kubejs:ambrosia_touched_elementite', ['gtceu:ambrosium_dust', 'kubejs:weak_elementium_dust', 'magichem:essentia_precious'])

    event.custom({
        "type": "botania:elven_trade",
        "ingredients": [
            { "item": "kubejs:ambrosia_touched_elementite" },
            { "item": "kubejs:ambrosia_touched_elementite" },
            { "item": "kubejs:ambrosia_touched_elementite" }
        ],
        "output": [
            { "item": "botania:elementium_ingot", "count": 2 }
        ]
    })

    // Shortcut (Sorcerer+): direct to the elementite, gated on tier attainment not this file.
    event.shapeless('kubejs:ambrosia_touched_elementite', [
        'aether:ambrosium_shard', 'kubejs:weak_elementium_dust', '#kubejs:magic/sorcerer'
    ])

    // magical_receiver, all seven TACZ ars_armorer guns: retired outright, per user direction --
    // kubejs:magical_receiver's basic_spell_turret ingredient is Ars-native with no MNA/Blood
    // Magic equivalent, and this was the only consumer of it. arsArmorer.js (its attachment line)
    // deleted entirely for the same reason.

    // --- Microcrafting: Initiate circuit + components ---
    // Elementium is this tier's actual signature/anchor (corrected 2026-07-29, matching the
    // original rework design doc); Holy Silver appears below only as a secondary flavor material.
    // Circuit built through 2 real handlers: Manaweaving Altar t2 -> Spirit Infusion.
    addMnaManaweavingRecipe(event, {
        output: 'kubejs:elementium_matrix_core',
        items: ['botania:elementium_ingot', 'gtceu:holy_silver_dust', 'kubejs:sacred_ambrosium_shard'],
        patterns: ['mna:diamond', 'mna:knot'],
        tier: 2
    })

    addSpiritInfusion(event, {
        input: 'kubejs:elementium_matrix_core',
        output: 'kubejs:elementium_matrix',
        spirits: [{ type: 'aerial', count: 2 }]
    })

    // Wizard Brain: Eldrin Altar (3rd distinct handler for this tier's item set).
    addEldrinAltarRecipe(event, {
        output: 'kubejs:elementium_wizard_brain',
        items: ['botania:elementium_ingot', 'irons_spellbooks:divine_pearl', 'kubejs:sacred_ambrosium_shard'],
        affinity: 'ARCANE', power: Source.INITIATE,
        tier: 2
    })

    event.shapeless('kubejs:elementium_motive_core', [
        'gtceu:elementium_bolt', 'gtceu:skyforged_rod', 'aether:victory_medal'
    ])
    event.shapeless('kubejs:elementium_channeling_vessel', [
        'botania:elementium_ingot', 'gtceu:holy_silver_plate', 'reliquary:mercy_cross'
    ])
    event.shapeless('kubejs:elementium_ward_lattice', [
        'botania:elementium_ingot', 'gtceu:skyforged_plate', 'reliquary:fortune_coin'
    ])
});
