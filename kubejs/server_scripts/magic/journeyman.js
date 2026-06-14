ServerEvents.recipes(event => {
    event.remove({ id: 'ars_nouveau:source_gem_block'})
    
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

    // source_condenser: pumps ambient source out as starbunclemania:source_fluid
    // pump handles fluid output; glass contains the condensing chamber; source gems interface with source
    event.recipes.gtceu.assembler('starbuncle_source_condenser')
        .itemInputs('2x ars_nouveau:source_gem', 'gtceu:mv_electric_pump', '4x minecraft:glass_pane', '#gtceu:circuits/mv')
        .inputFluids(Fluid.of('gtceu:soldering_alloy', 144))
        .itemOutputs('1x starbunclemania:source_condenser')
        .duration(15 * 20)
        .EUt(GTValues.VA[GTValues.MV])

    // fluid_sourcelink: takes starbunclemania:source_fluid back in and injects to source network
    // inverse of source_condenser; gold housing matches vanilla recipe's gold cost
    event.recipes.gtceu.assembler('starbuncle_fluid_sourcelink')
        .itemInputs('2x ars_nouveau:source_gem', 'gtceu:mv_electric_pump', '2x create:golden_sheet', '#gtceu:circuits/mv')
        .inputFluids(Fluid.of('gtceu:soldering_alloy', 144))
        .itemOutputs('1x starbunclemania:fluid_sourcelink')
        .duration(15 * 20)
        .EUt(GTValues.VA[GTValues.MV])

    // magebloom_crop bootstrap: vanilla recipe requires enchanting apparatus (HV), but fiber is needed here at MV
    // imbuement with archwood planks + luminessence breaks the circular dependency
    event.custom({
        "type": "ars_nouveau:imbuement",
        "count": 1,
        "input": { "item": "minecraft:wheat_seeds" },
        "output": "ars_nouveau:magebloom_crop",
        "pedestalItems": [
            { "item": { "item": "ars_nouveau:archwood_planks" } },
            { "item": { "item": "ars_nouveau:archwood_planks" } },
            { "item": { "item": "gtceu:luminessence_dust" } },
            { "item": { "item": "gtceu:luminessence_dust" } }
        ],
        "source": 2500
    });

    event.shaped(
            Item.of('kubejs:magebloom_sieve', 1),
            [
                'BAB',
                'AAA',
                'BAB'
            ],
            {
                A: 'ars_nouveau:magebloom_fiber',
                B: 'aether:carved_stone'
            }
        );
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
                'ABA',
                'BCB',
                'ABA'
            ],
            {
                A: 'gtceu:lead_plate',
                B: 'gtceu:luminessence_dust',
                C: 'minecraft:glowstone'
            }
        );
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
                ' A '
            ],
            {
                A: 'irons_spellbooks:magic_cloth',
                C: 'enderstorage:ender_chest',
                B: 'gtceu:luminessence_dust'
            }
        );
    event.shaped(
            Item.of('ars_nouveau:source_jar', 1),
            [
                'AAA',
                'BCB',
                'ADA'
            ],
            {
                A: 'ars_nouveau:archwood_slab',
                B: 'minecraft:glass',
                C: 'aether:ambrosium_shard',
                D: '#forge:plates/gold'
            }
        );
    event.shaped(
            Item.of('ars_nouveau:storage_lectern', 1),
            [
                ' E ',
                'CDC',
                'ABA'
            ],
            {
                A: '#forge:plates/silver',
                B: 'ars_nouveau:repository',
                C: 'aether:ambrosium_shard',
                D: 'minecraft:lectern',
                E: 'irons_spellbooks:iron_spell_book'
            }
        );

    event.shaped(
            Item.of('ars_nouveau:repository', 1),
            [
                'ACA',
                'B B',
                'ACA'
            ],
            {
                A: '#forge:screws/gold',
                B: '#forge:logs/archwood',
                C: 'ars_nouveau:archwood_slab'
            }
        );

    event.shaped(
            Item.of('reliquary:lantern_of_paranoia', 1),
            [
                'DAD',
                'BCB',
                'DAD'
            ],
            {
                A: '#forge:plates/iron',
                B: 'minecraft:glass',
                C: 'gtceu:luminessence_dust',
                D: '#forge:rods/silver'
            }
        );

    event.custom(
        {
        "type": "ars_nouveau:imbuement",
        "count": 1,
        "input": {
            "item": "gtceu:source_dust"
        },
        "output": "kubejs:pure_source_gem_dust",
        "pedestalItems": [
            {
            "item": {
                "item": "kubejs:magebloom_sieve"
            }
            }
        ],
        "source": 500
        }
    );

    event.custom(
        {
        "type": "ars_nouveau:imbuement",
        "count": 1,
        "input": {
            "item": "kubejs:pure_source_gem_dust"
        },
        "output": "kubejs:rough_source_gem",
        "pedestalItems": [
            {
            "item": {
                "item": "ars_nouveau:fire_essence"
            }
            }
        ],
        "source": 2500
        }
    );

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

    event.custom({
        "type": "ars_nouveau:crush",
        "input": { "item": "gtceu:raw_source" },
        "output": [
            {
                "item": "gtceu:source_dust",
                "chance": 1.0,
                "count": 1,
                "maxRange": 10
            }
        ]
    });

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

    event.custom({
        "type": "ars_nouveau:imbuement",
        "count": 1,
        "input": { "item": "kubejs:enchanted_zanite_gem" },
        "output": "kubejs:resonant_zanite_crystal",
        "pedestalItems": [
            { "item": { "item": "ars_nouveau:source_gem" } },
            { "item": { "item": "ars_nouveau:source_gem" } }
        ],
        "source": 1500
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

    event.custom({
        "type": "ars_nouveau:imbuement",
        "count": 3,
        "input": { "item": "kubejs:resonant_zanite_crystal" },
        "output": "irons_spellbooks:cinder_essence",
        "pedestalItems": [
            { "item": { "tag": "kubejs:fire_essences" } },
            { "item": { "tag": "kubejs:fire_essences" } }
        ],
        "source": 1500
    })

    event.custom({
        "type": "ars_nouveau:imbuement",
        "count": 4,
        "input": { "item": "kubejs:resonant_zanite_crystal" },
        "output": "irons_spellbooks:arcane_ingot",
        "pedestalItems": [
            { "item": { "tag": "kubejs:air_essences" } },
            { "item": { "tag": "kubejs:air_essences" } }
        ],
        "source": 1500
    })
});
