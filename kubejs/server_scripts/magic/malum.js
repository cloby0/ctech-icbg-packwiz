// Gates Malum's spirit arcana into the magic tree and removes its ore-free metal node economy.
ServerEvents.recipes(event => {

    // Malum's crucible turns spirits into metal with no ore or power, ~100 ingots/impetus -- removed below.
    // aluminum stays in the list though inert: this pack uses forge:nuggets/aluminium, not the tag the recipe checks.
    let nodeMetals = [
        'iron', 'copper', 'gold', 'lead', 'silver', 'aluminum',
        'nickel', 'uranium', 'osmium', 'zinc', 'tin'
    ]

    nodeMetals.forEach(metal => {
        event.remove({ id: 'malum:node_focusing_' + metal })
        event.remove({ id: 'malum:' + metal + '_from_node_smelting' })
        event.remove({ id: 'malum:' + metal + '_from_node_blasting' })
    })

    // The metal impetuses themselves are now pointless; alchemical_impetus is kept
    // because the non-metal focusing recipes still use it.
    event.remove({ id: 'malum:spirit_infusion/iron_impetus' })
    event.remove({ id: 'malum:spirit_infusion/copper_impetus' })
    event.remove({ id: 'malum:spirit_infusion/gold_impetus' })

    // --- Machine gating: rest at Initiate (HV) ---
    // Spirit Altar itself stays Malum's own vanilla recipe -- Hobbyist's Ashen Ichor chain needs
    // it for Spirit Infusion, and no non-circular Hobbyist-tier material exists to gate it with
    // (Ashen Ichor is a product of this altar). Fixed 2026-08-06, see
    // docs/superpowers/specs/2026-08-06-trunk-mod-integration-design.md.
    // Magic materials only. A player with zero tech progression must be able to build these.

    event.remove({ id: 'malum:spirit_infusion/spirit_crucible' })
    event.shaped('malum:spirit_crucible', [
        'PGP',
        'HSW',
        'RRR'
    ], {
        P: 'gtceu:soul_stained_steel_plate',
        G: 'malum:hallowed_gold_ingot',
        S: 'malum:processed_soulstone',
        R: 'gtceu:soul_stained_steel_rod',
        H: '#forge:tools/hammers',
        W: '#forge:tools/wrenches'
    }).damageIngredient(Ingredient.of('#forge:tools/hammers'))
        .damageIngredient(Ingredient.of('#forge:tools/wrenches'))

    event.remove({ id: 'malum:spirit_infusion/spirit_catalyzer' })
    event.shaped('malum:spirit_catalyzer', [
        'PWP',
        'CSD',
        'PRP'
    ], {
        P: 'gtceu:soul_stained_steel_plate',
        W: 'gtceu:fine_hallowed_gold_wire',
        S: 'malum:block_of_blazing_quartz',
        R: 'gtceu:soul_stained_steel_rod',
        C: '#forge:tools/wire_cutters',
        D: '#forge:tools/screwdrivers'
    }).damageIngredient(Ingredient.of('#forge:tools/wire_cutters'))
        .damageIngredient(Ingredient.of('#forge:tools/screwdrivers'))

    event.remove({ id: 'malum:spirit_infusion/brilliant_obelisk' })
    event.shaped('malum:brilliant_obelisk', [
        'FBH',
        'PBP',
        'RRR'
    ], {
        B: 'malum:block_of_brilliance',
        P: 'gtceu:hallowed_gold_plate',
        R: 'gtceu:soul_stained_steel_rod',
        F: '#forge:tools/files',
        H: '#forge:tools/hammers'
    }).damageIngredient(Ingredient.of('#forge:tools/files'))
        .damageIngredient(Ingredient.of('#forge:tools/hammers'))

    // --- Focusing re-cost ---
    // Shipped values gave ~800 units per impetus before catalyzer acceleration.
    // Halved output and doubled durability cost brings that to ~200.
    let focusingRecosts = [
        { id: 'redstone',         output: 'minecraft:redstone',        count: 4, spirits: [{ type: 'arcane' }] },
        { id: 'glowstone_dust',   output: 'minecraft:glowstone_dust',  count: 4, spirits: [{ type: 'infernal' }] },
        { id: 'gunpowder',        output: 'minecraft:gunpowder',       count: 4, spirits: [{ type: 'earthen' }] },
        { id: 'quartz',           output: 'minecraft:quartz',          count: 2, spirits: [{ type: 'earthen', count: 2 }, { type: 'arcane', count: 2 }] },
        { id: 'amethyst_shard',   output: 'minecraft:amethyst_shard',  count: 4, spirits: [{ type: 'aerial', count: 2 }, { type: 'arcane', count: 2 }] },
        { id: 'prismarine_shard', output: 'minecraft:prismarine_shard', count: 4, spirits: [{ type: 'aqueous', count: 2 }, { type: 'arcane', count: 2 }] },
        { id: 'blazing_quartz',   output: 'malum:blazing_quartz',      count: 2, spirits: [{ type: 'infernal', count: 2 }, { type: 'arcane', count: 2 }] },
    ]

    focusingRecosts.forEach(r => {
        event.remove({ id: 'malum:spirit_crucible/' + r.id })
        event.custom({
            type: 'malum:spirit_focusing',
            durabilityCost: 2,
            time: 300,
            input: { item: 'malum:alchemical_impetus' },
            output: { item: r.output, count: r.count },
            spirits: r.spirits,
        }).id('malum:spirit_crucible/' + r.id)
    })

    // --- New crucible commodities (Initiate) ---
    // Additive alternates for grind-heavy drops. The crucible is a spirit-to-matter
    // generator, so these carry no ingredient chain by design.
    // luminessence_dust deliberately NOT here -- it is the Aether portal key, the
    // Apprentice tier gate, the djinni gate, and a pedestal item in six recipes.
    let crucibleCommodities = [
        { output: 'minecraft:blaze_powder',      count: 4, spirits: [{ type: 'infernal', count: 2 }, { type: 'arcane' }] },
        { output: 'minecraft:phantom_membrane',  count: 2, spirits: [{ type: 'aerial', count: 2 }, { type: 'wicked' }] },
        { output: 'minecraft:slime_ball',        count: 4, spirits: [{ type: 'aqueous', count: 2 }, { type: 'earthen' }] },
        { output: 'minecraft:glow_ink_sac',      count: 4, spirits: [{ type: 'aerial', count: 2 }, { type: 'sacred' }] },
    ]

    crucibleCommodities.forEach(c => {
        global.addSpiritFocusing(event, {
            output: { item: c.output, count: c.count },
            spirits: c.spirits,
            durabilityCost: 2,
            time: 300
        })
    })

    // --- Spirit repair containment ---
    // These 8 recipes match broadly via itemIdRegex (e.g. "iron_.+", "copper_.+") with no
    // mod restriction, making spirit repair a pack-wide path around both GT tool repair and
    // the Silent Gear repair-kit economy. Malum's own gear repairs (tyrving, soul_stained_steel,
    // special_soul_stained_steel, soul_hunter_armor, both impetus restorations) use explicit
    // inputs lists with no regex and are kept. trident.json also has no regex (inputs-only,
    // matches only minecraft:trident) so it is not part of this containment and stays.
    let genericRepairs = [
        'wooden', 'stone', 'iron', 'gold', 'diamond', 'netherite', 'copper', 'flint'
    ]

    genericRepairs.forEach(mat => {
        event.remove({ id: 'malum:spirit_crucible/repair/' + mat })
    })

    // --- Spirit transmutation: block-for-block conversions (Journeyman) ---
    // Soulwood totem rite, no machine. Moves building stone sideways -- creates no ore
    // and bypasses no GT processing. The soulwood totem needs the Arcane Rite chain first.
    // Only 3 of the originally planned 8 ship: Malum's own 22 shipped transmutation recipes
    // already use minecraft:stone, cobblestone, andesite, and granite as inputs, and
    // SpiritTransmutationRecipe.getRecipe() returns the first RecipeManager match for a
    // given input with no collision error -- a second recipe on the same input is silently
    // unreachable, not a crash. Dropped: stone->holystone, stone->tuff (also a same-list dupe
    // of the first), cobblestone->tainted_rock, andesite->diorite, granite->andesite.
    let transmutations = [
        { input: 'aether:holystone',       output: 'minecraft:stone' },
        { input: 'malum:tainted_rock',     output: 'malum:twisted_rock' },
        { input: 'malum:twisted_rock',     output: 'malum:tainted_rock' },
    ]

    transmutations.forEach(t => {
        global.addSpiritTransmutation(event, { input: t.input, output: t.output })
    })

    // --- Totem base re-gate ---
    // Shipped runewood_totem_base requires an eldritch spirit, which drops only from
    // rare/boss mobs -- that put all 13 base rites at Alchemist tier, far past where
    // their utility is useful. Dropping eldritch lands base rites at Journeyman.
    // soulwood_totem_base is deliberately NOT touched: corrupt rites are stronger, and
    // soulwood already requires the Arcane Rite chain to exist.
    event.remove({ id: 'malum:spirit_infusion/runewood_totem_base' })
    addSpiritInfusion(event, {
        input: { item: 'malum:runewood_log', count: 4 },
        output: { item: 'malum:runewood_totem_base', count: 4 },
        extraItems: [
            { item: 'malum:runewood_planks', count: 6 },
            { item: 'malum:hex_ash', count: 2 },
            { item: 'gtceu:veridium_dust', count: 2 }
        ],
        spirits: [
            { type: 'aerial', count: 2 },
            { type: 'aqueous', count: 2 },
            { type: 'earthen', count: 2 },
            { type: 'infernal', count: 2 },
            { type: 'arcane', count: 4 }
        ]
    })

    // --- Spirit repair: magic gear only (Initiate) ---
    // Explicit inputs, empty regex (enforced by the helper). Phase 2 removed 8 broad-regex
    // recipes because they routed around GT tool repair and the Silent Gear repair-kit
    // economy -- these must not reopen that.
    // Only 1 candidate qualified out of the full Ars Nouveau + Iron's Spellbooks equipment
    // pool, after auditing every item's actual repair behavior (decompiled both jars'
    // Tier/ArmorMaterial classes -- see task-7-report.md). Every Iron's Spellbooks armor
    // material and every ExtendedWeaponTier melee weapon ships its own vanilla-anvil repairIngredient
    // (MAGIC_CLOTH/mithril/netherite/arcane_ingot/etc). Every Ars Nouveau enchanters
    // item and magic armor line either repairs at anvil with magebloom_fiber/netherite,
    // or is covered by Ars Nouveau's own RepairingPerk (passive mana-repair for "ANY
    // magical armor or enchanters item"). All staves/wands/flask cannons/crowns have no
    // durability at all. irons_spellbooks:autoloader_crossbow is the one exception:
    // extends vanilla CrossbowItem (max_damage 465) with no repairIngredient override --
    // vanilla crossbows aren't anvil-repairable with a material either, and the mod adds
    // no perk/rune covering it. Not SG, not GT. Trial Chambers ominous vault loot, not
    // craftable, so no other acquisition-side repair path either.
    addSpiritRepair(event, {
        inputs: ['irons_spellbooks:autoloader_crossbow'],
        durabilityPercentage: 0.4,
        repairMaterial: { count: 4, item: 'irons_spellbooks:arcane_ingot' },
        spirits: [{ type: 'arcane', count: 6 }, { type: 'earthen', count: 4 }]
    })

})
