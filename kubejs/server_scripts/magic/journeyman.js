ServerEvents.recipes(event => {
    // Source Jars/relays, source_gem_block, sifter output: StarbuncleMania is a cut Ars addon,
    // its two assembler recipes and the items they made are dead. Nothing to replace, dropped
    // outright along with the recipes that crafted the now-gone ars_nouveau:source_gem_block.

    event.remove({ id: 'reliquary:lantern_of_paranoia' })
    event.remove({ id: 'reliquary:interdiction_torch' })
    event.remove({ id: 'reliquary:alkahestry_altar' })
    event.remove({ id: 'hexerei:mahogany_broom_from_mixing_cauldron' })
    event.remove({ id: 'hexerei:willow_broom_from_mixing_cauldron' })
    event.remove({ id: 'hexerei:witch_hazel_broom_from_mixing_cauldron'})
    event.remove({ id: 'enderstorage:ender_chest' })
    event.remove({ id: 'enderstorage:ender_tank' })
    event.remove({ id: 'enderstorage:ender_pouch'})

    // Magebloom crop/fiber/sieve: fiber's only source was Ars's own crop, which is a dead item.
    // Per user direction 2026-07-28: retired outright, no replacement crop. SilentGear's
    // Magebloom Fiber material (silentgear_materials/magebloom_fiber.json) deleted, its
    // silentcompat:magebloom_fiber tag had no other source. magebloom_sieve orphan lang/texture
    // removed too (its only registered use).
    // Dropped: wheat_seeds -> magebloom_crop imbuement, and the magebloom_sieve craft that needed
    // magebloom_fiber (its only other consumer here was the Source Gem chain below, also dropped).

    event.shaped(
            Item.of('reliquary:interdiction_torch', 3),
            [
                '   ',
                ' B ',
                ' A '
            ],
            {
                A: 'minecraft:blaze_rod',
                B: 'kubejs:zanite_laced_iron'
            }
        );
    event.shaped(
            Item.of('reliquary:alkahestry_altar', 1),
            [
                'AHA',
                'BCB',
                'ABA'
            ],
            {
                A: 'gtceu:lead_plate',
                B: 'kubejs:veridium_filings',
                C: 'minecraft:glowstone',
                H: '#forge:tools/hammers'
            }
        ).damageIngredient(Ingredient.of('#forge:tools/hammers'));
    event.shaped(
            Item.of('enderstorage:ender_chest', 1),
            [
                'ABA',
                'BCB',
                'ABA'
            ],
            {
                A: 'aether:ambrosium_shard',
                B: 'minecraft:obsidian',
                C: 'kubejs:zanite_laced_iron'
            }
        );
    event.shaped(
            Item.of('enderstorage:ender_tank', 1),
            [
                'ABA',
                'DCD',
                'ABA'
            ],
            {
                A: 'aether:ambrosium_shard',
                B: 'minecraft:obsidian',
                C: 'kubejs:zanite_laced_iron',
                D: 'minecraft:glass'
            }
        );
    event.shaped(
            Item.of('enderstorage:ender_pouch', 1),
            [
                'ABA',
                'ACA',
                'KA '
            ],
            {
                A: 'irons_spellbooks:magic_cloth',
                C: 'enderstorage:ender_chest',
                B: 'kubejs:zanite_laced_iron',
                K: '#forge:tools/knives'
            }
        ).damageIngredient(Ingredient.of('#forge:tools/knives'));

    // Source Jar, Storage Lectern, Repository: all three craft Ars Nouveau blocks that no
    // longer exist once Ars is uninstalled. Nothing to port to; dropped outright.

    event.shaped(
            Item.of('reliquary:lantern_of_paranoia', 1),
            [
                'FAD',
                'BCB',
                'DAD'
            ],
            {
                A: '#forge:plates/iron',
                B: 'minecraft:glass',
                C: 'kubejs:veridium_filings',
                D: '#forge:rods/silver',
                F: '#forge:tools/files'
            }
        ).damageIngredient(Ingredient.of('#forge:tools/files'));

    // Source Gem chain (mana_dust -> pure_source_gem_dust -> rough_source_gem -> source_gem):
    // replaced entirely by the veridium -> Terrasteel chain below. gtceu:mana_plate's manual
    // hammer recipe off source_gem is dropped too -- mana already has GENERATE_PLATE, GT autogens
    // the plate from mana_gem directly, this hand-written recipe was always redundant.

    // raw_vinteum crushing dropped here: it was transmuting into mana_dust instead of
    // vinteum_dust, hijacking Occultism's crusher for something a crusher shouldn't do.
    // raw_vinteum -> vinteum_dust is GT's own macerator autogen now (vinteum has .ore()).
    // mana_dust (mana lost its ore vein, see gtceuMaterialRegistry.js) is sourced instead
    // via a Manaweaving Altar refine off vinteum_dust -- see apprentice.js.

    // --- Terrasteel: Journeyman signature material, veridium chain ---
    // Magic spine stays GT-free: Occultism crushing (same pattern as raw_mana above), Spirit
    // Altar, Alchemy Table -- no GT machine anywhere in this chain.
    event.custom({
        type: 'occultism:crushing',
        ingredient: { item: 'aether_redux:veridium_ingot' },
        result: { item: 'kubejs:veridium_filings' },
    }).id('kubejs:crushing/veridium_ingot_to_filings')

    addSpiritInfusion(event, {
        input: 'kubejs:veridium_filings',
        output: 'kubejs:verdant_charged_filings',
        spirits: [{ type: 'earthen', count: 4 }]
    })

    // magichem:essentia_verdant is a real base Essentia (confirmed in the jar lang file) --
    // literal thematic match for "verdant" grafted manasteel. Per user direction 2026-07-28:
    // make MagiChem load-bearing, not just a background essence tag.
    addAlchemyTableRecipe(event, {
        output: 'kubejs:verdant_grafted_manasteel',
        input: ['kubejs:verdant_charged_filings', 'botania:manasteel_block', 'magichem:essentia_verdant'],
        syphon: LP.JOURNEYMAN
    })

    addTerraPlateRecipe(event, {
        result: 'botania:terrasteel_ingot',
        mana: Mana.JOURNEYMAN,
        ingredients: ['kubejs:verdant_grafted_manasteel']
    })

    // Shortcut (Initiate+): direct to the pre-terra-plate feed, still needs the terra plate step.
    event.shapeless('kubejs:verdant_grafted_manasteel', [
        'aether_redux:veridium_ingot', 'botania:manasteel_block', '#kubejs:magic/initiate'
    ])

    event.custom({
        "type": "aether:enchanting",
        "ingredient": { "item": "aether:zanite_gemstone" },
        "result": { "item": "kubejs:enchanted_zanite_gem" },
        "cookingtime": 250,
        "experience": 0.5
    })

    addSpiritInfusion(event, {
        input: 'kubejs:enchanted_zanite_gem',
        output: 'kubejs:resonant_zanite_crystal',
        extraItems: [
            { item: 'kubejs:verdant_charged_filings', count: 2 },
            { item: 'occultism:spirit_attuned_crystal' }
        ],
        spirits: [{ type: 'arcane', count: 2 }, { type: 'aerial' }]
    })

    event.custom({
        "type": "hexerei:mixingcauldron",
        "liquid": { "fluid": "minecraft:water" },
        "ingredients": [
            { "item": "aether:ambrosium_shard" },
            { "item": "minecraft:glowstone_dust" },
            { "item": "aether:ambrosium_shard" },
            { "item": "minecraft:glowstone_dust" },
            { "item": "aether:ambrosium_shard" },
            { "item": "minecraft:glowstone_dust" },
            { "item": "aether:ambrosium_shard" },
            { "item": "minecraft:glowstone_dust" }
        ],
        "output": { "item": "kubejs:sanctified_ambrosium_bloom" },
        "liquidOutput": { "fluid": "minecraft:water" },
        "fluidLevelsConsumed": 1000,
        "heatRequirement": "heated"
    })

    addSpiritInfusion(event, {
        input: 'kubejs:resonant_zanite_crystal',
        output: { item: 'irons_spellbooks:cinder_essence', count: 3 },
        extraItems: [{ tag: 'kubejs:fire_essences', count: 2 }],
        spirits: [{ type: 'infernal', count: 2 }, { type: 'arcane' }]
    })

    addSpiritInfusion(event, {
        input: 'kubejs:resonant_zanite_crystal',
        output: { item: 'irons_spellbooks:arcane_ingot', count: 4 },
        extraItems: [{ tag: 'kubejs:air_essences', count: 2 }],
        spirits: [{ type: 'arcane', count: 2 }, { type: 'aerial' }]
    })
});
