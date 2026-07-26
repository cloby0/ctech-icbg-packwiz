// Tier-gates Occultism's spirit rituals behind the magic tree's own signature materials,
// so spirit-tier automation power follows this pack's progression instead of vanilla Occultism's.
// Each spirit is summonable at the START of the tier it assists, not the end -- Foliot
// helps you through Hobbyist, Djinni through Apprentice, Afrit through Journeyman,
// Marid through Sorcerer.
ServerEvents.recipes(event => {

    const foliotAxe = [
        { item: 'minecraft:iron_axe', nbt: '{Damage:0}' },
        { item: 'minecraft:golden_axe', nbt: '{Damage:0}' },
        { item: 'minecraft:diamond_axe', nbt: '{Damage:0}' },
        { item: 'minecraft:netherite_axe', nbt: '{Damage:0}' },
    ]
    const iesniumPickaxe = { item: 'occultism:iesnium_pickaxe', nbt: '{Damage:0}' }
    const gate = {
        foliot: { item: 'minecraft:fire_charge' },
        djinni: { item: 'gtceu:luminessence_dust' },
        afrit: { item: 'ars_nouveau:source_gem' },
        marid: { item: 'gtceu:prima_materia_ingot' },
    }

    // Occultism's RitualRecipe needs 5-8 metadata fields beyond ingredients/result.
    // Omitting any of them fails deserialization silently at recipe-parse time.
    function summonRitual(name, tier, jobType, maxAge, duration, ingredients, result) {
        event.remove({ id: 'occultism:ritual/' + name })
        event.custom({
            type: 'occultism:ritual',
            ritual_type: 'occultism:summon_spirit_with_job',
            pentacle_id: 'occultism:summon_' + tier,
            activation_item: { item: 'occultism:book_of_binding_bound_' + tier },
            ritual_dummy: { item: 'occultism:ritual_dummy/' + name },
            duration: duration,
            spirit_max_age: maxAge,
            spirit_job_type: jobType,
            entity_to_summon: 'occultism:' + tier,
            ingredients: ingredients,
            result: result,
        }).id('occultism:ritual/' + name)
    }

    function craftMinerRitual(name, tier, duration, ingredients, result) {
        event.remove({ id: 'occultism:ritual/' + name })
        event.custom({
            type: 'occultism:ritual',
            ritual_type: 'occultism:craft_miner_spirit',
            pentacle_id: 'occultism:craft_' + tier,
            activation_item: { item: 'occultism:book_of_binding_bound_' + tier },
            ritual_dummy: { item: 'occultism:ritual_dummy/' + name },
            duration: duration,
            ingredients: ingredients,
            result: result,
        }).id('occultism:ritual/' + name)
    }

    // Foliot ritual/craft -> Hobbyist gate
    summonRitual('summon_foliot_lumberjack', 'foliot', 'occultism:lumberjack', -1, 60, [
        { item: 'occultism:otherworld_sapling' },
        { item: 'minecraft:oak_sapling' },
        { item: 'minecraft:birch_sapling' },
        { item: 'minecraft:spruce_sapling' },
        foliotAxe,
        gate.foliot,
    ], { item: 'occultism:book_of_calling_foliot_lumberjack' })

    summonRitual('summon_foliot_cleaner', 'foliot', 'occultism:cleaner', -1, 60, [
        { item: 'occultism:brush' },
        { tag: 'forge:chests' },
        { item: 'minecraft:dispenser' },
        { item: 'minecraft:hopper' },
        gate.foliot,
    ], { item: 'occultism:book_of_calling_foliot_cleaner' })

    summonRitual('summon_foliot_transport_items', 'foliot', 'occultism:transport_items', -1, 60, [
        { item: 'minecraft:minecart' },
        { tag: 'forge:chests' },
        { item: 'minecraft:dispenser' },
        { item: 'minecraft:hopper' },
        gate.foliot,
    ], { item: 'occultism:book_of_calling_foliot_transport_items' })

    craftMinerRitual('craft_miner_foliot_unspecialized', 'foliot', 60, [
        { item: 'occultism:magic_lamp_empty' },
        iesniumPickaxe,
        { item: 'minecraft:raw_iron' },
        { item: 'minecraft:gravel' },
        gate.foliot,
    ], { item: 'occultism:miner_foliot_unspecialized' })

    // Foliot crusher: makes the crusher spirit itself required, not just its output --
    // see the source_gem crushing recipe added in journeyman.js, which only that spirit can run.
    // spirit_max_age 32400 is upstream's shipped value for this ritual; every other summon uses -1.
    summonRitual('summon_foliot_crusher', 'foliot', 'occultism:crush_tier1', 32400, 60, [
        { item: 'minecraft:raw_iron' },
        { item: 'minecraft:raw_gold' },
        { item: 'minecraft:raw_copper' },
        { item: 'gtceu:raw_silver' },
        gate.foliot,
    ], { item: 'occultism:jei_dummy/none' })

    // Djinni ritual/craft -> Apprentice gate
    summonRitual('summon_djinni_manage_machine', 'djinni', 'occultism:manage_machine', -1, 60, [
        { item: 'minecraft:coal_block' },
        { item: 'minecraft:gold_ingot' },
        { item: 'minecraft:iron_ingot' },
        { item: 'minecraft:furnace' },
        gate.djinni,
    ], { item: 'occultism:book_of_calling_djinni_manage_machine' })

    craftMinerRitual('craft_miner_djinni_ores', 'djinni', 60, [
        { item: 'occultism:miner_foliot_unspecialized', nbt: '{Damage:0}' },
        iesniumPickaxe,
        { item: 'minecraft:raw_gold' },
        { item: 'minecraft:lapis_block' },
        { item: 'occultism:spirit_attuned_crystal' },
        gate.djinni,
    ], { item: 'occultism:miner_djinni_ores' })

    // Afrit ritual/craft -> Journeyman gate
    summonRitual('summon_afrit_crusher', 'afrit', 'occultism:crush_tier3', -1, 120, [
        { item: 'minecraft:diamond' },
        { item: 'occultism:iesnium_dust' },
        { item: 'occultism:iesnium_dust' },
        { item: 'minecraft:emerald' },
        gate.afrit,
    ], { item: 'occultism:jei_dummy/none' })

    craftMinerRitual('craft_miner_afrit_deeps', 'afrit', 120, [
        { item: 'occultism:miner_djinni_ores', nbt: '{Damage:0}' },
        iesniumPickaxe,
        { item: 'occultism:spirit_attuned_crystal' },
        { item: 'occultism:afrit_essence' },
        { item: 'minecraft:echo_shard' },
        { item: 'minecraft:crying_obsidian' },
        gate.afrit,
    ], { item: 'occultism:miner_afrit_deeps' })

    // Marid ritual/craft -> Sorcerer gate
    summonRitual('summon_marid_crusher', 'marid', 'occultism:crush_tier4', -1, 150, [
        { item: 'minecraft:diamond_block' },
        { item: 'minecraft:ghast_tear' },
        { item: 'occultism:iesnium_block' },
        { item: 'minecraft:emerald_block' },
        gate.marid,
    ], { item: 'occultism:jei_dummy/none' })

    craftMinerRitual('craft_miner_marid_master', 'marid', 120, [
        { item: 'occultism:miner_afrit_deeps', nbt: '{Damage:0}' },
        iesniumPickaxe,
        { item: 'occultism:spirit_attuned_crystal' },
        { item: 'minecraft:netherite_pickaxe', nbt: '{Damage:0}' },
        { item: 'minecraft:dragon_breath' },
        { item: 'minecraft:totem_of_undying' },
        { item: 'minecraft:nether_star' },
        gate.marid,
    ], { item: 'occultism:miner_marid_master' })

    // --- Miner GT-ore-spread rebalance ---
    // Vanilla Occultism puts nearly every ore (including tungsten/platinum/uranium/thorium) on the
    // shared `occultism:miners/ores` tag, which every non-debug miner tier -- including the cheapest,
    // Foliot -- belongs to. That's free automated high-tier ore extraction at zero investment. Replace
    // each material's `ingredient` with a cumulative tier band matched to GT voltage progression
    // (docs/claude/gt_base_progression.md) instead: higher spirit tiers can still mine everything lower
    // tiers can, but access is gated the same way the magic tier itself is gated.
    const minerIngredient = {
        foliot: [
            { item: 'occultism:miner_foliot_unspecialized' },
            { item: 'occultism:miner_djinni_ores' },
            { item: 'occultism:miner_afrit_deeps' },
            { item: 'occultism:miner_marid_master' },
            { item: 'occultism:miner_debug_unspecialized' },
        ],
        djinni: [
            { item: 'occultism:miner_djinni_ores' },
            { item: 'occultism:miner_afrit_deeps' },
            { item: 'occultism:miner_marid_master' },
            { item: 'occultism:miner_debug_unspecialized' },
        ],
        afrit: [
            { item: 'occultism:miner_afrit_deeps' },
            { item: 'occultism:miner_marid_master' },
            { item: 'occultism:miner_debug_unspecialized' },
        ],
        marid: [
            { item: 'occultism:miner_marid_master' },
            { item: 'occultism:miner_debug_unspecialized' },
        ],
    }

    // material -> tier. Materials Occultism ships its own miner/ores/<name>.json for get remapped
    // (remove + rebuild, same id); materials it doesn't ship get a fresh kubejs: id.
    const shippedByOccultism = new Set([
        'coal', 'copper', 'tin', 'iron', 'lead', 'zinc', 'nickel', 'silver', 'sulfur', 'salt',
        'aluminum', 'electrotine', 'lithium', 'cobalt', 'malachite', 'cinnabar', 'certus_quartz',
        'diamond', 'emerald', 'ruby', 'sapphire', 'topaz', 'amethyst', 'opal', 'tungsten', 'platinum',
        'thorium', 'niter',
    ])
    // Occultism shipped these with mistyped/nonexistent result tags for this pack's material set --
    // fix on rebuild instead of carrying the typo forward.
    const tagFix = { aluminum: 'aluminium', niter: 'saltpeter' }

    // Verified against docs/claude/full_pack_dump/datasets/tags/items/forge/ores/ -- every entry here
    // has a real, non-empty tag in this pack. Occultism's own default list included several that
    // don't exist here (garnet, osmium, uranium, and most of its gem-mod compat like agate/tanzanite);
    // those are dropped or swapped for the real GT equivalent (uranium -> uraninite, garnet -> the two
    // real garnet variants) rather than shipping dead recipes.
    const tierMaterials = {
        foliot: ['coal', 'copper', 'tin', 'iron', 'lead', 'zinc', 'nickel', 'silver', 'sulfur', 'salt',
            'saltpeter', 'cassiterite', 'apatite'],
        djinni: ['aluminium', 'bauxite', 'electrotine', 'lithium', 'cobalt', 'magnetite', 'hematite',
            'pyrite', 'galena', 'sphalerite', 'chalcopyrite', 'bornite', 'malachite', 'cinnabar',
            'certus_quartz', 'diamond', 'emerald', 'ruby', 'sapphire', 'topaz', 'red_garnet',
            'yellow_garnet', 'amethyst', 'opal'],
        afrit: ['tungsten', 'tungstate', 'scheelite', 'platinum', 'palladium', 'molybdenum',
            'vanadium_magnetite', 'uraninite', 'pitchblende', 'thorium', 'monazite', 'neodymium',
            'chromite'],
        marid: ['naquadah', 'iesnium', 'plutonium'],
    }

    // Automates away Ars Nouveau's Source Gem and Mystical Agriculture's Prosperity essence chain --
    // both are hand-authored magic-tree signature resources (Journeyman line, MA farming loop), not
    // general GT ore progression. Close the loophole rather than re-tier it. Also drops garnet/osmium/
    // uranium, Occultism's shipped recipes for tags that don't exist in this pack's material set.
    ;['inferium', 'prosperity', 'garnet', 'osmium', 'uranium'].forEach(material => {
        event.remove({ id: `occultism:miner/ores/${material}_ore` })
    })

    Object.keys(tierMaterials).forEach(tier => {
        tierMaterials[tier].forEach(material => {
            const shippedKey = Object.keys(tagFix).find(k => tagFix[k] === material) || material
            const isShipped = shippedByOccultism.has(shippedKey)
            const id = isShipped ? `occultism:miner/ores/${shippedKey}_ore` : `kubejs:miner/ores/${material}`
            if (isShipped) event.remove({ id: id })
            event.custom({
                type: 'occultism:miner',
                ingredient: minerIngredient[tier],
                result: { tag: `forge:ores/${material}` },
                weight: 500,
            }).id(id)
        })
    })
})

// Gregify Occultism's own hand-crafted metal tools/devices: the shaping step gets the GT
// tool tag it realistically needs (consumed as damageIngredient, not material cost), same
// convention as the magic tree's own GT-tool-gated recipes (see magic/apprentice.js).
// silver_ingot uses gtceu's item directly -- occultism:silver_ingot is OEI-unified to it
// (oei_unification.js); iesnium stays occultism's own item (setIgnored, gtceuMaterialModification.js).
ServerEvents.recipes(event => {
    const stick = ['minecraft:stick', 'silentgear:netherwood_stick', 'aether:skyroot_stick', 'gtceu:treated_wood_rod']

    event.remove({ id: 'occultism:crafting/iesnium_pickaxe' })
    event.shaped(
        Item.of('occultism:iesnium_pickaxe', '{Damage:0}'),
        [
            'III',
            'HSF',
            ' S '
        ],
        {
            I: 'occultism:iesnium_ingot',
            S: stick,
            H: '#forge:tools/hammers',
            F: '#forge:tools/files'
        }
    ).damageIngredient(Ingredient.of('#forge:tools/hammers')).damageIngredient(Ingredient.of('#forge:tools/files'))

    event.remove({ id: 'occultism:crafting/butcher_knife' })
    event.shaped(
        Item.of('occultism:butcher_knife', '{Damage:0}'),
        [
            'FIS',
            'IS ',
            'S  '
        ],
        {
            I: 'minecraft:iron_ingot',
            S: stick,
            F: '#forge:tools/files'
        }
    ).damageIngredient(Ingredient.of('#forge:tools/files'))

    event.remove({ id: 'occultism:crafting/magic_lamp_empty' })
    event.shaped(
        Item.of('occultism:magic_lamp_empty'),
        [
            'HS ',
            'SIS',
            ' SS'
        ],
        {
            S: 'gtceu:silver_ingot',
            I: 'occultism:iesnium_ingot',
            H: '#forge:tools/hammers'
        }
    ).damageIngredient(Ingredient.of('#forge:tools/hammers'))

    // Now that occultism:silver_* is OEI-unified to gtceu:silver_* (oei_unification.js), these
    // ingot<->nugget<->block conversions are exact duplicates of GT's own packer/unpacker
    // crafting recipes for the same items -- drop the occultism copies to avoid JEI clutter.
    ;['silver_block', 'silver_ingot_from_block', 'silver_ingot_from_nuggets', 'silver_nugget',
        'raw_silver_block', 'raw_silver_ingot_from_block'].forEach(id => {
        event.remove({ id: `occultism:crafting/${id}` })
    })

    event.remove({ id: 'occultism:crafting/golden_sacrificial_bowl' })
    event.shaped(
        Item.of('occultism:golden_sacrificial_bowl'),
        [
            'GGH',
            'GBG',
            'GGG'
        ],
        {
            G: 'minecraft:gold_ingot',
            B: 'occultism:sacrificial_bowl',
            H: '#forge:tools/hammers'
        }
    ).damageIngredient(Ingredient.of('#forge:tools/hammers'))

    event.remove({ id: 'occultism:crafting/lens_frame' })
    event.shaped(
        Item.of('occultism:lens_frame'),
        [
            'OOO',
            'SHS',
            'OOO'
        ],
        {
            O: 'occultism:otherstone',
            S: 'gtceu:silver_ingot',
            H: '#forge:tools/hammers'
        }
    ).damageIngredient(Ingredient.of('#forge:tools/hammers'))

    event.remove({ id: 'occultism:crafting/goggles' })
    event.shaped(
        Item.of('occultism:otherworld_goggles', '{Damage:0}'),
        [
            'KL ',
            'LGL',
            ' F '
        ],
        {
            L: 'minecraft:leather',
            G: 'occultism:infused_lenses',
            F: 'occultism:lens_frame',
            K: '#forge:tools/knives'
        }
    ).damageIngredient(Ingredient.of('#forge:tools/knives'))

    event.remove({ id: 'occultism:crafting/spirit_lantern' })
    event.shaped(
        Item.of('occultism:spirit_lantern'),
        [
            'HNN',
            'NTN',
            'NNN'
        ],
        {
            N: 'minecraft:iron_nugget',
            T: 'occultism:spirit_torch',
            H: '#forge:tools/hammers'
        }
    ).damageIngredient(Ingredient.of('#forge:tools/hammers'))

    event.remove({ id: 'occultism:crafting/wormhole_frame' })
    event.shaped(
        Item.of('occultism:wormhole_frame'),
        [
            'HG ',
            'GFG',
            ' G '
        ],
        {
            G: 'minecraft:gold_ingot',
            F: 'occultism:otherstone_frame',
            H: '#forge:tools/hammers'
        }
    ).damageIngredient(Ingredient.of('#forge:tools/hammers'))

    event.remove({ id: 'occultism:crafting/storage_remote_inert' })
    event.shaped(
        Item.of('occultism:storage_remote_inert'),
        [
            'GTG',
            'BGB',
            'BBS'
        ],
        {
            G: 'minecraft:gold_ingot',
            T: 'occultism:otherstone_tablet',
            B: ['minecraft:stone_button', 'minecraft:polished_blackstone_button', 'aether:holystone_button'],
            S: '#forge:tools/screwdrivers'
        }
    ).damageIngredient(Ingredient.of('#forge:tools/screwdrivers'))

    event.remove({ id: 'occultism:crafting/storage_controller' })
    event.shaped(
        Item.of('occultism:storage_controller'),
        [
            'M',
            'B',
            'S'
        ],
        {
            M: 'occultism:dimensional_matrix',
            B: 'occultism:storage_controller_base',
            S: '#forge:tools/screwdrivers'
        }
    ).damageIngredient(Ingredient.of('#forge:tools/screwdrivers'))
})

// Crushing tier-gate: closes the same free-automation exploit already fixed for miners
// above (the ore-spread rebalance) but for crushing spirits. Verified against the pack's
// Occultism jar (1.158.0): 180 shipped crushing recipes, none use min_tier/max_tier. The
// 35 "_from_ingot" recipes (ignore_crushing_multiplier: true) convert an already-made
// ingot back to dust -- balance-neutral, the ingot's cost was already paid through the
// normal GT chain -- so those are left untouched. Only ore/raw_material/raw_block/gem
// recipes (the free-resource-processing surface) get gated or removed.
ServerEvents.recipes(event => {
    const crushingTier = { foliot: 1, djinni: 2, afrit: 3, marid: 4 }

    // Ore-vein metals: 3 recipe ids each (dust / dust_from_raw / dust_from_raw_block).
    // Reuses the miner rebalance's material lists above, plus 4 real ores that list
    // missed -- crimson_iron/azure_silver/graphite/mithril -- and gold, all verified via
    // docs/claude/full_pack_dump to have real, populated ore tags in this pack.
    const oreVeinTier = {
        foliot: ['copper', 'gold', 'graphite', 'iron', 'lead', 'nickel', 'silver', 'tin', 'zinc'],
        djinni: ['azure_silver', 'cobalt', 'crimson_iron'],
        afrit: ['mithril', 'platinum', 'tungsten'],
        marid: ['iesnium'],
    }
    const oreVeinForm = {
        '': { tagPath: m => `ores/${m}`, count: 2 },
        '_from_raw': { tagPath: m => `raw_materials/${m}`, count: 2 },
        '_from_raw_block': { tagPath: m => `storage_blocks/raw_${m}`, count: 18 },
    }
    Object.keys(oreVeinTier).forEach(tier => {
        oreVeinTier[tier].forEach(material => {
            Object.keys(oreVeinForm).forEach(suffix => {
                const form = oreVeinForm[suffix]
                const id = `occultism:${material}_dust${suffix}`
                event.remove({ id: id })
                event.custom({
                    type: 'occultism:crushing',
                    ingredient: { tag: `forge:${form.tagPath(material)}` },
                    minTier: crushingTier[tier],
                    result: { tag: `forge:dusts/${material}`, count: form.count },
                    crushingTime: 200,
                }).id(id)
            })
        })
    })

    // Gem-shaped materials: 2 recipe ids each (dust from ore-tag / dust_from_gem).
    // quartz dropped: this pack has forge:ores/quartz and forge:gems/quartz but no
    // forge:dusts/quartz (verified docs/claude/full_pack_dump/datasets/tags/items/forge/dusts/),
    // so both generated recipes had an empty output tag and could never fire.
    const gemTier = {
        foliot: ['apatite', 'coal', 'lapis', 'redstone', 'sulfur'],
        djinni: ['certus_quartz', 'cinnabar', 'diamond', 'emerald', 'ruby', 'sapphire', 'topaz'],
    }
    const gemForm = {
        '': { tagPath: m => `ores/${m}`, count: 4 },
        '_from_gem': { tagPath: m => `gems/${m}`, count: 1 },
    }
    Object.keys(gemTier).forEach(tier => {
        gemTier[tier].forEach(material => {
            Object.keys(gemForm).forEach(suffix => {
                const form = gemForm[suffix]
                const id = `occultism:${material}_dust${suffix}`
                event.remove({ id: id })
                event.custom({
                    type: 'occultism:crushing',
                    ingredient: { tag: `forge:${form.tagPath(material)}` },
                    minTier: crushingTier[tier],
                    result: { tag: `forge:dusts/${material}`, count: form.count },
                    crushingTime: 200,
                }).id(id)
            })
        })
    })

    // obsidian_dust: single recipe, no suffix variants, ingredient tag has no ores/ prefix.
    event.remove({ id: 'occultism:obsidian_dust' })
    event.custom({
        type: 'occultism:crushing',
        ingredient: { tag: 'forge:obsidian' },
        minTier: crushingTier.foliot,
        result: { tag: 'forge:dusts/obsidian', count: 1 },
        crushingTime: 200,
    }).id('occultism:obsidian_dust')

    // Dead-tag materials: verified via docs/claude/full_pack_dump that their ore/
    // raw_material/storage_blocks-raw tags are entirely empty in this pack (pure alloys
    // with no raw-ore form, or vestigial mod content) -- these recipes can never fire.
    // Remove as clutter rather than gate (same logic as the itemobliterator policy).
    const deadOreVeinMaterials = ['allthemodium', 'aluminum', 'brass', 'bronze', 'constantan',
        'electrum', 'enderium', 'invar', 'iridium', 'lumium', 'netherite', 'osmium', 'pewter',
        'quicksilver', 'signalum', 'steel', 'unobtainium', 'uranium', 'vibranium']
    deadOreVeinMaterials.forEach(material => {
        ['', '_from_raw', '_from_raw_block'].forEach(suffix => {
            event.remove({ id: `occultism:${material}_dust${suffix}` })
        })
    })

    const deadGemMaterials = ['amber', 'arcane_crystal', 'charged_certus_quartz', 'fluorite', 'peridot']
    deadGemMaterials.forEach(material => {
        ['', '_from_gem'].forEach(suffix => {
            event.remove({ id: `occultism:${material}_dust${suffix}` })
        })
    })

    // quartz: no forge:dusts/quartz tag in this pack (see gemTier comment above), so these
    // two Occultism-shipped recipes can never produce output -- strip them explicitly since
    // quartz no longer runs through the gemTier generator loop.
    event.remove({ id: 'occultism:quartz_dust' })
    event.remove({ id: 'occultism:quartz_dust_from_gem' })

    // blaze_powder_from_rod, datura, end_stone_dust: not ore/metal materials, not part of
    // the tier system -- left untouched.
})
