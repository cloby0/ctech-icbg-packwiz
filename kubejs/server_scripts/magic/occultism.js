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

    // Foliot ritual/craft -> Hobbyist gate
    event.remove({ id: 'occultism:ritual/summon_foliot_lumberjack' })
    event.custom({
        type: 'occultism:ritual',
        ingredients: [
            { item: 'occultism:otherworld_sapling' },
            { item: 'minecraft:oak_sapling' },
            { item: 'minecraft:birch_sapling' },
            { item: 'minecraft:spruce_sapling' },
            foliotAxe,
            gate.foliot,
        ],
        result: { item: 'occultism:book_of_calling_foliot_lumberjack' },
    }).id('occultism:ritual/summon_foliot_lumberjack')

    event.remove({ id: 'occultism:ritual/summon_foliot_cleaner' })
    event.custom({
        type: 'occultism:ritual',
        ingredients: [
            { item: 'occultism:brush' },
            { tag: 'forge:chests' },
            { item: 'minecraft:dispenser' },
            { item: 'minecraft:hopper' },
            gate.foliot,
        ],
        result: { item: 'occultism:book_of_calling_foliot_cleaner' },
    }).id('occultism:ritual/summon_foliot_cleaner')

    event.remove({ id: 'occultism:ritual/summon_foliot_transport_items' })
    event.custom({
        type: 'occultism:ritual',
        ingredients: [
            { item: 'minecraft:minecart' },
            { tag: 'forge:chests' },
            { item: 'minecraft:dispenser' },
            { item: 'minecraft:hopper' },
            gate.foliot,
        ],
        result: { item: 'occultism:book_of_calling_foliot_transport_items' },
    }).id('occultism:ritual/summon_foliot_transport_items')

    event.remove({ id: 'occultism:ritual/craft_miner_foliot_unspecialized' })
    event.custom({
        type: 'occultism:ritual',
        ingredients: [
            { item: 'occultism:magic_lamp_empty' },
            iesniumPickaxe,
            { item: 'minecraft:raw_iron' },
            { item: 'minecraft:gravel' },
            gate.foliot,
        ],
        result: { item: 'occultism:miner_foliot_unspecialized' },
    }).id('occultism:ritual/craft_miner_foliot_unspecialized')

    // Foliot crusher: makes the crusher spirit itself required, not just its output --
    // see the source_gem crushing recipe added in journeyman.js, which only that spirit can run.
    event.remove({ id: 'occultism:ritual/summon_foliot_crusher' })
    event.custom({
        type: 'occultism:ritual',
        ingredients: [
            { item: 'minecraft:raw_iron' },
            { item: 'minecraft:raw_gold' },
            { item: 'minecraft:raw_copper' },
            { item: 'gtceu:raw_silver' },
            gate.foliot,
        ],
        result: { item: 'occultism:jei_dummy/none' },
    }).id('occultism:ritual/summon_foliot_crusher')

    // Djinni ritual/craft -> Apprentice gate
    event.remove({ id: 'occultism:ritual/summon_djinni_manage_machine' })
    event.custom({
        type: 'occultism:ritual',
        ingredients: [
            { item: 'minecraft:coal_block' },
            { item: 'minecraft:gold_ingot' },
            { item: 'minecraft:iron_ingot' },
            { item: 'minecraft:furnace' },
            gate.djinni,
        ],
        result: { item: 'occultism:book_of_calling_djinni_manage_machine' },
    }).id('occultism:ritual/summon_djinni_manage_machine')

    event.remove({ id: 'occultism:ritual/craft_miner_djinni_ores' })
    event.custom({
        type: 'occultism:ritual',
        ingredients: [
            { item: 'occultism:miner_foliot_unspecialized', nbt: '{Damage:0}' },
            iesniumPickaxe,
            { item: 'minecraft:raw_gold' },
            { item: 'minecraft:lapis_block' },
            { item: 'occultism:spirit_attuned_crystal' },
            gate.djinni,
        ],
        result: { item: 'occultism:miner_djinni_ores' },
    }).id('occultism:ritual/craft_miner_djinni_ores')

    // Afrit ritual/craft -> Journeyman gate
    event.remove({ id: 'occultism:ritual/summon_afrit_crusher' })
    event.custom({
        type: 'occultism:ritual',
        ingredients: [
            { item: 'minecraft:diamond' },
            { item: 'occultism:iesnium_dust' },
            { item: 'occultism:iesnium_dust' },
            { item: 'minecraft:emerald' },
            gate.afrit,
        ],
        result: { item: 'occultism:jei_dummy/none' },
    }).id('occultism:ritual/summon_afrit_crusher')

    event.remove({ id: 'occultism:ritual/craft_miner_afrit_deeps' })
    event.custom({
        type: 'occultism:ritual',
        ingredients: [
            { item: 'occultism:miner_djinni_ores', nbt: '{Damage:0}' },
            iesniumPickaxe,
            { item: 'occultism:spirit_attuned_crystal' },
            { item: 'occultism:afrit_essence' },
            { item: 'minecraft:echo_shard' },
            { item: 'minecraft:crying_obsidian' },
            gate.afrit,
        ],
        result: { item: 'occultism:miner_afrit_deeps' },
    }).id('occultism:ritual/craft_miner_afrit_deeps')

    // Marid ritual/craft -> Sorcerer gate
    event.remove({ id: 'occultism:ritual/summon_marid_crusher' })
    event.custom({
        type: 'occultism:ritual',
        ingredients: [
            { item: 'minecraft:diamond_block' },
            { item: 'minecraft:ghast_tear' },
            { item: 'occultism:iesnium_block' },
            { item: 'minecraft:emerald_block' },
            gate.marid,
        ],
        result: { item: 'occultism:jei_dummy/none' },
    }).id('occultism:ritual/summon_marid_crusher')

    event.remove({ id: 'occultism:ritual/craft_miner_marid_master' })
    event.custom({
        type: 'occultism:ritual',
        ingredients: [
            { item: 'occultism:miner_afrit_deeps', nbt: '{Damage:0}' },
            iesniumPickaxe,
            { item: 'occultism:spirit_attuned_crystal' },
            { item: 'minecraft:netherite_pickaxe', nbt: '{Damage:0}' },
            { item: 'minecraft:dragon_breath' },
            { item: 'minecraft:totem_of_undying' },
            { item: 'minecraft:nether_star' },
            gate.marid,
        ],
        result: { item: 'occultism:miner_marid_master' },
    }).id('occultism:ritual/craft_miner_marid_master')

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
