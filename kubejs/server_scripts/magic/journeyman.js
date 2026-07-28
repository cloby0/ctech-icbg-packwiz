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
    // Flagging rather than inventing a replacement plant -- this is a real open design question
    // (does the pack want a post-Ars fiber crop at all?), and magebloom_fiber still has dozens of
    // uses in initiate.js/arsArmorer.js/sorcerer.js/alchemist.js that are out of scope here.
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

    // Crushing raw_mana into mana_dust still requires the Foliot Crusher spirit -- unrelated to
    // Source Gem removal, mana is its own surviving GT material (see occultism.js summon_foliot_crusher gate).
    event.custom({
        type: 'occultism:crushing',
        ingredient: { item: 'gtceu:raw_mana' },
        result: { item: 'gtceu:mana_dust' },
    }).id('kubejs:crushing/raw_mana_to_mana_dust')

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

    addAlchemyTableRecipe(event, {
        output: 'kubejs:verdant_grafted_manasteel',
        input: ['kubejs:verdant_charged_filings', 'botania:manasteel_block'],
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
