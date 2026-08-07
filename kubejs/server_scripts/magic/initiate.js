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

    // ALL Eldrin Altar recipes moved off this tier 2026-08-04. The Eldrin Altar is MNA tier 4
    // content -- its own Manaweaving recipe is `tier: 4`, and it needs Eldrin Conduits (also T4),
    // chimerite crystals, motes, a lit Fume Filter, a faction and realistically a captured
    // Wellspring. Initiate is MNA tier 3. These are Alchemy Table recipes now: still a real cost
    // sink (LP instead of Eldrin power), on a device the player actually owns by this tier.
    // upgradeLevel 2 = Magician Blood Orb = Tier-3 altar, matching Initiate on the altar map.

    // Channeling Vessel: a void tear is a hole punched into space -- channels matter through it.
    addAlchemyTableRecipe(event, {
        output: 'reliquary:void_tear',
        input: ['#forge:gems/mana', 'minecraft:crying_obsidian', 'minecraft:crying_obsidian', 'minecraft:crying_obsidian', 'kubejs:elementium_sigil', 'kubejs:elementium_channeling_vessel'],
        syphon: 2 * LP.INITIATE,
        upgradeLevel: 2
    });

    // Channeling Vessel: void/ender theme, consistent with void_tear's own ingredient above.
    event.shaped(
        Item.of('reliquary:ender_staff', 1),
        [
            'FDV',
            'BCZ',
            ' A '
        ],
        {
            A: 'gtceu:long_wood_rod',
            B: 'irons_spellbooks:ender_rune',
            C: 'reliquary:void_tear',
            D: 'minecraft:ender_eye',
            F: '#forge:tools/files',
            V: 'kubejs:elementium_channeling_vessel',
            Z: 'kubejs:elementium_sigil'
        }
    ).damageIngredient(Ingredient.of('#forge:tools/files'))

    // Motive Core: winter shears are a cutting/force tool.
    addAlchemyTableRecipe(event, {
        output: 'reliquary:shears_of_winter',
        input: ['minecraft:shears', 'minecraft:blue_ice', '#kubejs:water_essences', 'minecraft:snowball', 'kubejs:elementium_sigil', 'kubejs:elementium_motive_core'],
        syphon: 2 * LP.INITIATE,
        upgradeLevel: 2
    })

    // Wizard Brain: already uses lantern_of_paranoia (detection) as an ingredient -- scouting/awareness theme.
    event.shaped(
        Item.of('reliquary:sojourner_staff', 1),
        [
            'FDX',
            'BCY',
            ' A '
        ],
        {
            A: 'gtceu:long_wood_rod',
            B: 'irons_spellbooks:protection_rune',
            C: 'reliquary:void_tear',
            D: 'reliquary:lantern_of_paranoia',
            F: '#forge:tools/files',
            X: 'kubejs:elementium_wizard_brain',
            Y: 'kubejs:elementium_sigil'
        }
    ).damageIngredient(Ingredient.of('#forge:tools/files'))

    // Motive Core: elemental force projection, matches the other combat staffs below.
    event.shaped(
        Item.of('reliquary:glacial_staff', 1),
        [
            'FDM',
            'BCY',
            ' A '
        ],
        {
            A: 'gtceu:long_iron_rod',
            B: 'irons_spellbooks:ice_rune',
            C: 'reliquary:void_tear',
            D: 'minecraft:blue_ice',
            F: '#forge:tools/files',
            M: 'kubejs:elementium_motive_core',
            Y: 'kubejs:elementium_sigil'
        }
    ).damageIngredient(Ingredient.of('#forge:tools/files'))

    // Ward Lattice: a medallion is a protective/blessing trinket.
    event.shaped(
        Item.of("reliquary:hero_medallion", 1),
        [
            'XHC',
            'BAB',
            'WFC'
        ],
        {
            A: 'reliquary:fortune_coin',
            B: 'gtceu:wrought_iron_plate',
            C: '#forge:gems/mana',
            H: '#forge:tools/hammers',
            F: '#forge:tools/files',
            W: 'kubejs:elementium_ward_lattice',
            X: 'kubejs:elementium_sigil'
        }
    ).damageIngredient(Ingredient.of('#forge:tools/hammers')).damageIngredient(Ingredient.of('#forge:tools/files'))

    // magebloom_fiber dropped -- dead ingredient, same open fiber-crop question flagged in
    // 03-journeyman.md (no post-Ars fiber source decided yet). Pedestal count reduced, not substituted.
    // Channeling Vessel: a fishing rod pulls things across distance -- channeling theme.
    addAlchemyTableRecipe(event, {
        output: 'reliquary:rod_of_lyssa',
        input: ['minecraft:fishing_rod', 'irons_spellbooks:nature_rune', '#forge:gems/mana', 'kubejs:elementium_sigil', 'kubejs:elementium_channeling_vessel'],
        syphon: 2 * LP.INITIATE,
        upgradeLevel: 2
    })

    // Motive Core: a construction wand's entire job is projecting building force.
    event.shaped(
        Item.of('constructionwand:infinity_wand', 1),
        [
            'FDM',
            'BCY',
            ' A '
        ],
        {
            A: 'gtceu:long_iron_rod',
            B: 'irons_spellbooks:evocation_rune',
            C: 'constructionwand:diamond_wand',
            D: '#forge:gems/mana',
            F: '#forge:tools/files',
            M: 'kubejs:elementium_motive_core',
            Y: 'kubejs:elementium_sigil'
        }
    ).damageIngredient(Ingredient.of('#forge:tools/files'))

    // Channeling Vessel: torches channel light/energy, consistent across all three magnum torches.
    addAlchemyTableRecipe(event, {
        output: 'magnumtorch:amethyst_magnum_torch',
        input: ['minecraft:amethyst_shard', 'gtceu:holy_silver_rod', 'gtceu:ambrosium_dust', 'kubejs:elementium_sigil', 'aether:ambrosium_shard', 'kubejs:elementium_channeling_vessel'],
        syphon: 2 * LP.INITIATE,
        upgradeLevel: 2
    })

    addAlchemyTableRecipe(event, {
        output: 'magnumtorch:emerald_magnum_torch',
        input: ['minecraft:emerald', 'gtceu:holy_silver_rod', 'kubejs:elementium_sigil', 'gtceu:ambrosium_dust', 'aether:ambrosium_shard', 'kubejs:elementium_channeling_vessel'],
        syphon: 2 * LP.INITIATE,
        upgradeLevel: 2
    })

    addAlchemyTableRecipe(event, {
        output: 'magnumtorch:diamond_magnum_torch',
        input: ['minecraft:diamond', 'gtceu:holy_silver_plate', '#forge:gems/mana', 'kubejs:elementium_sigil', 'gtceu:ambrosium_dust', 'kubejs:elementium_channeling_vessel'],
        syphon: 2 * LP.INITIATE,
        upgradeLevel: 2
    })

    // Second Alchemy Table recipe deleted. Two recipes for one block meant the "harder" Initiate
    // one never mattered -- the Apprentice bootstrap (apprentice.js) always won, since first built
    // wins on identical output. Apprentice keeps it, because that tier's Manasteel chain needs the
    // table and Blood Magic's own Alchemy Table is a Tier-1 item anyway. Blood Magic's vanilla
    // recipe stays removed there.

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

    // Ward Lattice: a mercy cross is a divine protective relic.
    event.shaped(
        Item.of('reliquary:mercy_cross', '{Damage:0}'),
        [
            'FXW',
            'ACA',
            ' B '
        ],
        {
            A: '#forge:rods/gold',
            B: '#forge:rods/long/gold',
            C: 'irons_spellbooks:divine_pearl',
            F: '#forge:tools/files',
            W: 'kubejs:elementium_ward_lattice',
            X: 'kubejs:elementium_sigil'
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

    // alchemical_impetus is the Spirit Crucible's durability catalyst -- requiring one here ties
    // Initiate's own Holy Silver line to the tier's signature Malum machine (crucible/catalyzer/
    // obelisk, gated at Initiate/HV in malum.js), which the pack's chains otherwise never touch.
    // Consumed once as a gateway item, not a repeated bulk reagent (matches the mercy_cross
    // pattern already here).
    addMnaManaweavingRecipe(event, {
        output: 'gtceu:holy_silver_dust',
        items: ['kubejs:holy_silver_blend', 'reliquary:mercy_cross', 'malum:alchemical_impetus'],
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
    // Circuit on the flagship chestplate only -- Initiate circuit is near-universal by default,
    // not mandatory on every piece of a single equipment set; the other 10 pieces stay pure
    // skyforged material, already differentiated from the Elementium/Holy Silver material pool.
    // Components: tools -> Motive Core (kinetic tool force), armor -> Ward Lattice (protection),
    // gloves -> Channeling Vessel (grip/force transfer), cape -> Motive Core (mobility).
    const XM = 'kubejs:elementium_sigil'
    const MC = 'kubejs:elementium_motive_core'
    const WL = 'kubejs:elementium_ward_lattice'
    const CV = 'kubejs:elementium_channeling_vessel'
    ;[
        ['aether:valkyrie_pickaxe',    ['PPP', 'HRF', ' Q '], { P: SP, R: SR, Q: MC, H: TH, F: TF }, [TH, TF]],
        ['aether:valkyrie_axe',        ['PP ', 'PRH', ' QF'], { P: SP, R: SR, Q: MC, H: TH, F: TF }, [TH, TF]],
        ['aether:valkyrie_shovel',     ['HPF', ' R ', ' Q '], { P: SP, R: SR, Q: MC, H: TH, F: TF }, [TH, TF]],
        ['aether:valkyrie_hoe',        ['PPH', ' RF', ' Q '], { P: SP, R: SR, Q: MC, H: TH, F: TF }, [TH, TF]],
        ['aether:valkyrie_lance',      ['H P', ' R ', 'Q F'], { P: SP, R: SR, Q: MC, H: TH, F: TF }, [TH, TF]],
        ['aether:valkyrie_helmet',     ['PWP', 'PHP'],        { P: SP, H: TH, W: WL }, [TH]],
        ['aether:valkyrie_chestplate', ['PHP', 'PXP', 'PWP'], { P: SP, H: TH, X: XM, W: WL }, [TH]],
        ['aether:valkyrie_leggings',   ['PWP', 'PHP', 'P P'], { P: SP, H: TH, W: WL }, [TH]],
        ['aether:valkyrie_boots',      ['PHP', 'W P'],        { P: SP, H: TH, W: WL }, [TH]],
        ['aether:valkyrie_gloves',     ['PHP', 'CMP'],        { P: SP, M: VM, H: TH, C: CV }, [TH]],
        ['aether:valkyrie_cape',       ['KPP', 'PMP', 'QPP'], { P: SP, M: VM, K: TK, Q: MC }, [TK]]
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

    // Fortune Coin is equipment, not a crafting reagent -- it doesn't stack. One per craft.
    addMnaManaweavingRecipe(event, {
        output: 'reliquary:fortune_coin',
        items: ['kubejs:sacred_ambrosium_shard', '#kubejs:earth_essences', '#kubejs:earth_essences', '#kubejs:water_essences', '#kubejs:water_essences'],
        patterns: ['mna:circle', 'mna:backslash'],
        tier: 2
    })

    // --- Elementium: Initiate signature material, ambrosium chain ---
    // Correction from the master spec: skyjade is NOT sourced here -- it already has a complete,
    // self-contained alt-material system above (Skyforged/Valkyrie), not a spare-parts bin.
    // Diverting a share of it into this chain too would be redundant, not additive. Ambrosium
    // dust (gtceu:ambrosium_dust, autogenerated GT dust off the ambrosium gem) feeds forward alone.

    // weak_elementium_dust and elven_concentrate removed from existence entirely (dead
    // Arcanist-only intermediates, no longer produced anywhere). Elementium's bootstrap goes
    // straight off Terrasteel dust -- this pack's own precursor metal, no diluted middle-item.
    // Magic spine stays GT-free: hand-combine, no GT machine.

    // magichem:essentia_precious is a real base Essentia (confirmed in the jar lang file) --
    // matches ambrosium's precious/divine-metal theme. Per user direction 2026-07-28: make
    // MagiChem load-bearing, not just a background essence tag.
    event.shapeless('kubejs:ambrosia_touched_elementite', ['gtceu:ambrosium_dust', 'gtceu:terrasteel_dust', 'magichem:essentia_precious'])

    // Large Bloodstone Brick: T4 Blood Altar pillar cap material, was pure vanilla+BM
    // (forge:stone + weakbloodshard) with zero tie to the tier band the altar structurally
    // unlocks at that point. Initiate tax -- this tier's own signature material. The small
    // Bloodstone Brick (4 large -> 4 small) needs no separate tax; it can't be made without this
    // recipe now.
    event.remove({ id: 'bloodmagic:largebloodstonebrick' })
    event.shapeless(Item.of('bloodmagic:largebloodstonebrick', 8), [
        '#forge:stone',
        'bloodmagic:weakbloodshard',
        'gtceu:elementium_dust'
    ])

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

    // Shortcut (Sorcerer+, Albedo worn): Alembic/Distillery fabricates the elementite straight
    // from materia, real wisdom-field gate (wisdom_stone_albedo, wisdom:1).
    event.custom({
        type: 'magichem:distillation_fabrication',
        wisdom: 1,
        categories: 1,
        output_rate: 1.0,
        batch_size: 3,
        object: { item: 'kubejs:ambrosia_touched_elementite' },
        components: [
            { item: 'magichem:essentia_precious', count: 50 },
            { item: 'magichem:admixture_light', count: 30 },
            { item: 'magichem:essentia_albedo', count: 25 }
        ]
    })

    // magical_receiver, all seven TACZ ars_armorer guns: retired outright, per user direction --
    // kubejs:magical_receiver's basic_spell_turret ingredient is Ars-native with no MNA/Blood
    // Magic equivalent, and this was the only consumer of it. arsArmorer.js (its attachment line)
    // deleted entirely for the same reason.

    // --- Hex Casting: moved here from alchemist.js 2026-08-04 ---
    // Charged amethyst is Apprentice-tier and Holy Silver is this tier's own parallel line, so
    // nothing in Hex ever needed Alchemist. Ingredients rebased off Alchemist's animus set onto
    // Initiate's elementium set; prima_materia (Sorcerer) -> elementium_ingot, arcane_residue
    // (Alchemist) -> sacred_ambrosium_shard. Every former Eldrin Altar recipe is an Alchemy Table
    // recipe now -- the altar is MNA tier 4 and this tier is tier 3.
    // Two keystone items gate the whole line: hexed_amethyst_core, then hexed_mana_matrix.

    addAlchemyTableRecipe(event, {
        output: 'kubejs:hexed_amethyst_core',
        input: ['hexcasting:charged_amethyst', 'gtceu:holy_silver_rod', 'gtceu:holy_silver_rod', 'botania:elementium_ingot', 'minecraft:glowstone'],
        syphon: LP.INITIATE,
        upgradeLevel: 2
    })

    // The one fix that unblocks the whole ~20-recipe hexcasting chain below: source_gem (dead)
    // -> 2x arcane_residue (this tier's own new Distilled Animus intermediate).
    addAlchemyTableRecipe(event, {
        output: 'kubejs:hexed_mana_matrix',
        input: [
            'kubejs:hexed_amethyst_core',
            'gtceu:holy_silver_plate',
            'botania:mana_pearl', 'botania:mana_pearl',
            'kubejs:sacred_ambrosium_shard', 'kubejs:sacred_ambrosium_shard'
        ],
        syphon: 2 * LP.INITIATE,
        upgradeLevel: 2
    })

    // Circuit: a staff is the tier's central casting device, same role copper_spell_book played
    // at Hobbyist -- filled into the shared pattern's one open slot for all 14 wood variants.
    event.remove({ output: /hexcasting:staff\// })
    const staffPattern = ['ZSA', ' WB', 'CX ']
    const staffKey = (w) => ({ S: 'minecraft:stick', A: 'kubejs:hexed_amethyst_core', W: w, Z: '#forge:tools/saws', X: 'kubejs:elementium_sigil', B: 'kubejs:elementium_wizard_brain', C: 'kubejs:elementium_channeling_vessel' })
    ;[
        ['minecraft:oak_planks',                     'hexcasting:staff/oak'],
        ['minecraft:birch_planks',                   'hexcasting:staff/birch'],
        ['minecraft:spruce_planks',                  'hexcasting:staff/spruce'],
        ['minecraft:jungle_planks',                  'hexcasting:staff/jungle'],
        ['minecraft:acacia_planks',                  'hexcasting:staff/acacia'],
        ['minecraft:dark_oak_planks',                'hexcasting:staff/dark_oak'],
        ['minecraft:mangrove_planks',                'hexcasting:staff/mangrove'],
        ['minecraft:bamboo_planks',                  'hexcasting:staff/bamboo'],
        ['minecraft:cherry_planks',                  'hexcasting:staff/cherry'],
        ['minecraft:crimson_planks',                 'hexcasting:staff/crimson'],
        ['minecraft:warped_planks',                  'hexcasting:staff/warped'],
        ['hexcasting:edified_planks',                'hexcasting:staff/edified'],
        ['hexcasting:quenched_allay_shard',          'hexcasting:staff/quenched'],
        ['#hexcasting:brainswept_circle_components', 'hexcasting:staff/mindsplice'],
    ].forEach(([w, result]) => event.shaped(result, staffPattern, staffKey(w)).damageIngredient(Ingredient.of('#forge:tools/saws')))

    // Channeling Vessel: a lens focuses and channels light/magic through it.
    event.remove({ id: 'hexcasting:lens' })
    event.shaped('hexcasting:lens', ['FCV', 'CAX', ' C '], {
        C: 'minecraft:glass',
        A: 'kubejs:hexed_amethyst_core',
        F: '#forge:tools/files',
        V: 'kubejs:elementium_channeling_vessel',
        X: 'kubejs:elementium_sigil',
    }).damageIngredient(Ingredient.of('#forge:tools/files'))

    // Wizard Brain: a thought knot is literally stored/looped thought (iota storage).
    event.remove({ id: 'hexcasting:thought_knot' })
    event.shapeless('hexcasting:thought_knot', ['kubejs:hexed_amethyst_core', 'minecraft:string', 'kubejs:elementium_wizard_brain', 'kubejs:elementium_sigil', '#forge:tools/wire_cutters']).damageIngredient(Ingredient.of('#forge:tools/wire_cutters'))

    event.remove({ id: 'hexcasting:slate' })
    event.shaped('6x hexcasting:slate', ['HA ', 'SXS'], {
        A: 'kubejs:hexed_amethyst_core',
        S: 'minecraft:deepslate',
        H: '#forge:tools/hammers',
        X: 'kubejs:elementium_sigil',
    }).damageIngredient(Ingredient.of('#forge:tools/hammers'))

    // Wizard Brain: a cypher encodes a single stored pattern for reuse -- stored logic.
    event.remove({ id: 'hexcasting:cypher' })
    event.shaped('hexcasting:cypher', ['FCX', 'YAC', ' C '], {
        C: '#forge:ingots/copper',
        A: 'kubejs:hexed_amethyst_core',
        F: '#forge:tools/files',
        X: 'kubejs:elementium_wizard_brain',
        Y: 'kubejs:elementium_sigil',
    }).damageIngredient(Ingredient.of('#forge:tools/files'))

    event.remove({ id: 'hexcasting:scroll_small' })
    event.shaped('hexcasting:scroll_small', ['KA', 'P '], {
        A: 'kubejs:hexed_amethyst_core',
        P: 'minecraft:paper',
        K: '#forge:tools/knives',
    }).damageIngredient(Ingredient.of('#forge:tools/knives'))

    event.remove({ id: 'hexcasting:scroll_medium' })
    event.shaped('hexcasting:scroll_medium', ['K A', 'XP ', 'BP '], {
        A: 'kubejs:hexed_amethyst_core',
        P: 'minecraft:paper',
        K: '#forge:tools/knives',
        X: 'kubejs:elementium_sigil',
        B: 'kubejs:elementium_wizard_brain',
    }).damageIngredient(Ingredient.of('#forge:tools/knives'))

    event.remove({ id: 'hexcasting:scroll' })
    event.shaped('hexcasting:scroll', ['PXA', 'PPP', 'BPK'], {
        A: 'kubejs:hexed_amethyst_core',
        P: 'minecraft:paper',
        K: '#forge:tools/knives',
        X: 'kubejs:elementium_sigil',
        B: 'kubejs:elementium_wizard_brain',
    }).damageIngredient(Ingredient.of('#forge:tools/knives'))

    event.remove({ id: 'hexcasting:scroll_paper' })
    event.shaped('8x hexcasting:scroll_paper', ['PXP', 'PAP', 'BPK'], {
        P: 'minecraft:paper',
        A: 'kubejs:hexed_amethyst_core',
        K: '#forge:tools/knives',
        X: 'kubejs:elementium_sigil',
        B: 'kubejs:elementium_wizard_brain',
    }).damageIngredient(Ingredient.of('#forge:tools/knives'))

    // Wizard Brain: an abacus is a literal computation/counting device.
    event.remove({ id: 'hexcasting:abacus' })
    event.shaped('hexcasting:abacus', ['MYX', 'SAS', 'WAW'], {
        W: '#minecraft:planks',
        A: 'kubejs:hexed_amethyst_core',
        S: 'minecraft:stick',
        M: '#forge:tools/mallets',
        X: 'kubejs:elementium_wizard_brain',
        Y: 'kubejs:elementium_sigil',
    }).damageIngredient(Ingredient.of('#forge:tools/mallets'))

    // Channeling Vessel: a bookshelf/connector stores and channels knowledge flow.
    event.remove({ id: 'hexcasting:akashic_bookshelf' })
    event.shaped('hexcasting:akashic_bookshelf', ['ZPV', 'XAC', 'LPL'], {
        L: '#hexcasting:edified_logs',
        P: '#hexcasting:edified_planks',
        C: 'minecraft:book',
        A: 'kubejs:hexed_mana_matrix',
        Z: '#forge:tools/saws',
        V: 'kubejs:elementium_channeling_vessel',
        X: 'kubejs:elementium_sigil',
    }).damageIngredient(Ingredient.of('#forge:tools/saws'))

    event.remove({ id: 'hexcasting:akashic_connector' })
    event.shaped('4x hexcasting:akashic_connector', ['ZXV', '12A', 'LPL'], {
        L: '#hexcasting:edified_logs',
        P: '#hexcasting:edified_planks',
        '1': 'hexcasting:amethyst_dust',
        '2': 'minecraft:amethyst_shard',
        A: 'kubejs:hexed_mana_matrix',
        Z: '#forge:tools/saws',
        V: 'kubejs:elementium_channeling_vessel',
        X: 'kubejs:elementium_sigil',
    }).damageIngredient(Ingredient.of('#forge:tools/saws'))

    event.remove({ id: 'hexcasting:focus' })
    event.remove({ id: 'hexcasting:focus_rotated' })
    // Circuit: focus and spellbook are the tier's own core casting devices (focus is the
    // hand-held caster, spellbook the written form) -- same role as Hobbyist's spell books.
    // Focus and spellbook go to the Manaweaving Altar, not the table: 7 ingredients each, over the
    // Alchemy Table's 6-slot cap, and a woven/written casting focus is what manaweaving is for.
    addMnaManaweavingRecipe(event, {
        output: 'hexcasting:focus',
        items: ['minecraft:leather', 'gtceu:holy_silver_rod', 'gtceu:holy_silver_rod', 'kubejs:hexed_mana_matrix', 'minecraft:glowstone', 'kubejs:elementium_wizard_brain', 'kubejs:elementium_sigil'],
        patterns: ['mna:split_triangle', 'mna:knot'],
        tier: 3
    })

    event.remove({ id: 'hexcasting:spellbook' })
    addMnaManaweavingRecipe(event, {
        output: 'hexcasting:spellbook',
        items: ['minecraft:writable_book', 'gtceu:holy_silver_plate', 'kubejs:elementium_wizard_brain', 'kubejs:hexed_mana_matrix', 'botania:elementium_ingot', 'minecraft:chorus_fruit', 'kubejs:elementium_sigil'],
        patterns: ['mna:split_triangle', 'mna:square'],
        tier: 3
    })

    // Wizard Brain: an artifact stores and can rebroadcast a spell -- unattended casting logic.
    event.remove({ id: 'hexcasting:artifact' })
    addAlchemyTableRecipe(event, {
        output: 'hexcasting:artifact',
        input: ['#minecraft:music_discs', 'gtceu:holy_silver_plate', 'kubejs:elementium_sigil', 'kubejs:hexed_mana_matrix', 'botania:elementium_ingot', 'kubejs:elementium_wizard_brain'],
        syphon: LP.INITIATE,
        upgradeLevel: 2
    })

    // Ward Lattice: a worn trinket is a passive protective effect.
    event.remove({ id: 'hexcasting:trinket' })
    event.shaped('hexcasting:trinket', ['HXF', 'MAM', 'WMW'], {
        M: 'gtceu:holy_silver_plate',
        A: 'kubejs:hexed_mana_matrix',
        H: '#forge:tools/hammers',
        F: '#forge:tools/files',
        W: 'kubejs:elementium_ward_lattice',
        X: 'kubejs:elementium_sigil',
    }).damageIngredient(Ingredient.of('#forge:tools/hammers')).damageIngredient(Ingredient.of('#forge:tools/files'))

    // --- Microcrafting: Initiate circuit + components ---
    // Elementium is this tier's actual signature/anchor (corrected 2026-07-29, matching the
    // original rework design doc); Holy Silver appears below only as a secondary flavor material.
    // Circuit built through 2 real handlers: Manaweaving Altar t2 -> Spirit Infusion.
    addMnaManaweavingRecipe(event, {
        output: 'kubejs:elementium_sigil_blank',
        items: ['botania:elementium_ingot', 'gtceu:holy_silver_dust', 'kubejs:sacred_ambrosium_shard'],
        patterns: ['mna:diamond', 'mna:knot'],
        tier: 2
    })

    addSpiritInfusion(event, {
        input: 'kubejs:elementium_sigil_blank',
        output: 'kubejs:elementium_sigil',
        spirits: [{ type: 'aerial', count: 2 }]
    })

    // Wizard Brain: Alchemy Table (3rd distinct handler for this tier's item set -- sigil blank is
    // Manaweaving T2, sigil is Spirit Infusion). Grammar: thought vessel (spell book) + animating
    // agent (divine pearl).
    addAlchemyTableRecipe(event, {
        output: 'kubejs:elementium_wizard_brain',
        input: ['botania:elementium_ingot', 'irons_spellbooks:gold_spell_book', 'irons_spellbooks:divine_pearl', 'kubejs:sacred_ambrosium_shard'],
        syphon: LP.INITIATE,
        ticks: 200,
        upgradeLevel: 2
    })
    addArcRecipe(event, {
        input: 'gtceu:elementium_rod',
        tool: '#forge:tools/files',
        output: 'kubejs:elementium_motive_core',
        bonusOutputs: [{ item: 'gtceu:skyforged_rod', chance: 0.25 }]
    })

    // Channeling Vessel: the elves trade you a vessel already hollowed.
    event.custom({
        "type": "botania:elven_trade",
        "ingredients": [
            { "item": "botania:mana_bottle" },
            { "item": "botania:elementium_ingot" },
            { "item": "gtceu:holy_silver_plate" }
        ],
        "output": [
            { "item": "kubejs:elementium_channeling_vessel" }
        ]
    })

    // Ward Lattice: scribed on the ground, a protection rune thrown onto skyforged plating.
    addAlchemyArrayRecipe(event, {
        base: 'gtceu:skyforged_plate',
        thrown: 'irons_spellbooks:protection_rune',
        output: 'kubejs:elementium_ward_lattice'
    })
});
