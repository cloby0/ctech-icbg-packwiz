ServerEvents.recipes(event => {
    event.remove({ id: 'ars_nouveau:source_gem_block'})
    event.remove({ output: 'ars_nouveau:source_gem', type: 'gtceu:sifter' })
    
    event.remove({ id: 'reliquary:lantern_of_paranoia' })
    event.remove({ id: 'reliquary:interdiction_torch' })
    event.remove({ id: 'reliquary:alkahestry_altar' })
    event.remove({ id: 'hexerei:mahogany_broom_from_mixing_cauldron' })
    event.remove({ id: 'hexerei:willow_broom_from_mixing_cauldron' })
    event.remove({ id: 'hexerei:witch_hazel_broom_from_mixing_cauldron'})
    event.remove({ id: 'enderstorage:ender_chest' })
    event.remove({ id: 'enderstorage:ender_tank' })
    event.remove({ id: 'enderstorage:ender_pouch'})
    event.remove({ id: 'ars_nouveau:source_jar'})
    event.remove({ id: 'ars_nouveau:storage_lectern'})
    event.remove({ id: 'ars_nouveau:repository'})
    event.remove({ id: 'starbunclemania:source_condenser' })
    event.remove({ id: 'starbunclemania:fluid_sourcelink' })

    event.recipes.gtceu.assembler('starbuncle_source_condenser')
        .itemInputs('2x ars_nouveau:source_gem', 'gtceu:mv_electric_pump', '4x minecraft:glass_pane', '#gtceu:circuits/mv')
        .inputFluids(Fluid.of('gtceu:soldering_alloy', 144))
        .itemOutputs('1x starbunclemania:source_condenser')
        .duration(15 * 20)
        .EUt(GTValues.VA[GTValues.MV])

    event.recipes.gtceu.assembler('starbuncle_fluid_sourcelink')
        .itemInputs('2x ars_nouveau:source_gem', 'gtceu:mv_electric_pump', '2x create:golden_sheet', '#gtceu:circuits/mv')
        .inputFluids(Fluid.of('gtceu:soldering_alloy', 144))
        .itemOutputs('1x starbunclemania:fluid_sourcelink')
        .duration(15 * 20)
        .EUt(GTValues.VA[GTValues.MV])

    addImbuementRecipe(event, {
        input: 'minecraft:wheat_seeds',
        output: 'ars_nouveau:magebloom_crop',
        source: 2 * Source.JOURNEYMAN,
        pedestalItems: ['ars_nouveau:archwood_planks', 'ars_nouveau:archwood_planks', 'gtceu:luminessence_dust', 'gtceu:luminessence_dust']
    });

    event.shaped(
            Item.of('kubejs:magebloom_sieve', 1),
            [
                'BAB',
                'ACA',
                'BAB'
            ],
            {
                A: 'ars_nouveau:magebloom_fiber',
                B: 'aether:carved_stone',
                C: '#forge:tools/wire_cutters'
            }
        ).damageIngredient(Ingredient.of('#forge:tools/wire_cutters'));
    event.shaped(
            Item.of('reliquary:interdiction_torch', 3),
            [
                '   ',
                ' B ',
                ' A '
            ],
            {
                A: 'minecraft:blaze_rod',
                B: 'gtceu:luminessence_dust'
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
                B: 'gtceu:luminessence_dust',
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
                C: 'gtceu:luminessence_dust'
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
                C: 'gtceu:luminessence_dust',
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
                B: 'gtceu:luminessence_dust',
                K: '#forge:tools/knives'
            }
        ).damageIngredient(Ingredient.of('#forge:tools/knives'));
    event.shaped(
            Item.of('ars_nouveau:source_jar', 1),
            [
                'AAA',
                'BCB',
                'MDA'
            ],
            {
                A: 'ars_nouveau:archwood_slab',
                B: 'minecraft:glass',
                C: 'aether:ambrosium_shard',
                D: '#forge:plates/gold',
                M: '#forge:tools/mallets'
            }
        ).damageIngredient(Ingredient.of('#forge:tools/mallets'));
    event.shaped(
            Item.of('ars_nouveau:storage_lectern', 1),
            [
                'HEM',
                'CDC',
                'ABA'
            ],
            {
                A: '#forge:plates/silver',
                B: 'ars_nouveau:repository',
                C: 'aether:ambrosium_shard',
                D: 'minecraft:lectern',
                E: 'irons_spellbooks:iron_spell_book',
                H: '#forge:tools/hammers',
                M: '#forge:tools/mallets'
            }
        ).damageIngredient(Ingredient.of('#forge:tools/hammers')).damageIngredient(Ingredient.of('#forge:tools/mallets'));

    event.shaped(
            Item.of('ars_nouveau:repository', 1),
            [
                'ACA',
                'BDB',
                'ACA'
            ],
            {
                A: '#forge:screws/gold',
                B: '#forge:logs/archwood',
                C: 'ars_nouveau:archwood_slab',
                D: '#forge:tools/screwdrivers'
            }
        ).damageIngredient(Ingredient.of('#forge:tools/screwdrivers'));

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
                C: 'gtceu:luminessence_dust',
                D: '#forge:rods/silver',
                F: '#forge:tools/files'
            }
        ).damageIngredient(Ingredient.of('#forge:tools/files'));

    addImbuementRecipe(event, {
        input: 'gtceu:source_dust',
        output: 'kubejs:pure_source_gem_dust',
        source: 2 * Source.JOURNEYMAN,
        pedestalItems: ['kubejs:magebloom_sieve']
    });

    // spirit_attuned_crystal already used once in this file (resonant_zanite_crystal below)
    // -- a second use here puts it in the core Source Gem chain itself, not just a side recipe.
    addImbuementRecipe(event, {
        input: 'kubejs:pure_source_gem_dust',
        output: 'kubejs:rough_source_gem',
        source: 3 * Source.JOURNEYMAN,
        pedestalItems: ['#kubejs:fire_essences', 'occultism:spirit_attuned_crystal']
    });

    event.custom(
        {
        "type": "create:sandpaper_polishing",
        "ingredients": [
            {
            "item": "kubejs:rough_source_gem"
            }
        ],
        "results": [
            {
            "item": "ars_nouveau:source_gem"
            }
        ]
        }
    );

    // Automatic alternate to hand-sanding above -- same result, run by the Foliot Crusher spirit.
    // Sanding stays a valid option; this just gives players who'd rather automate it a route.
    event.custom({
        type: 'occultism:crushing',
        ingredient: { item: 'kubejs:rough_source_gem' },
        result: { item: 'ars_nouveau:source_gem' },
    }).id('kubejs:crushing/rough_source_gem_to_source_gem')

    // Crushing raw_source into source_dust now requires the Foliot Crusher spirit instead of a
    // mortar or the Ars Nouveau crush glyph -- makes the spirit an ongoing requirement, not just
    // a one-time summon (see occultism.js summon_foliot_crusher gate).
    event.custom({
        type: 'occultism:crushing',
        ingredient: { item: 'gtceu:raw_source' },
        result: { item: 'gtceu:source_dust' },
    }).id('kubejs:crushing/raw_source_to_source_dust')

    event.shaped(
        Item.of("gtceu:source_plate", 1),
        [
            'H',
            'I',
            'I'
        ],
        {
            I: "ars_nouveau:source_gem",
            H: '#forge:tools/hammers',
        }).damageIngredient(Ingredient.of('#forge:tools/hammers'))

    event.custom({
        "type": "aether:enchanting",
        "ingredient": { "item": "aether:zanite_gemstone" },
        "result": { "item": "kubejs:enchanted_zanite_gem" },
        "cookingtime": 250,
        "experience": 0.5
    })

    addImbuementRecipe(event, {
        input: 'kubejs:enchanted_zanite_gem',
        output: 'kubejs:resonant_zanite_crystal',
        source: 2 * Source.JOURNEYMAN,
        pedestalItems: ['ars_nouveau:source_gem', 'ars_nouveau:source_gem', 'occultism:spirit_attuned_crystal']
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

    addImbuementRecipe(event, {
        input: 'kubejs:resonant_zanite_crystal',
        output: 'irons_spellbooks:cinder_essence',
        count: 3,
        source: 2 * Source.JOURNEYMAN,
        pedestalItems: ['#kubejs:fire_essences', '#kubejs:fire_essences']
    })

    addImbuementRecipe(event, {
        input: 'kubejs:resonant_zanite_crystal',
        output: 'irons_spellbooks:arcane_ingot',
        count: 4,
        source: 2 * Source.JOURNEYMAN,
        pedestalItems: ['#kubejs:air_essences', '#kubejs:air_essences']
    })
});
