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
