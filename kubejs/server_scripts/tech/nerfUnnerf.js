ServerEvents.recipes(event => {
    event.remove({ id: 'terralith:piston_alt' });
    event.remove({ id: 'aether:skyroot_piston' });
    event.remove({ id: 'aether:gravitite_jukebox' });
    event.remove({ id: 'aether:skyroot_jukebox' });
    event.remove({ id: 'aether:skyroot_gravitite_jukebox' });
    event.remove({ id: 'aether:skyroot_crafting_table' });
    event.remove({ id: 'deep_aether:skyroot_crafting_table' });
    event.remove({ id: 'aether:skyroot_cartography_table' });
    event.remove({ id: 'aether:skyroot_fletching_table' });
    event.remove({ id: 'aether:skyroot_smithing_table' });
    event.remove({ id: 'aether:skyroot_grindstone' });
    event.remove({ id: 'aether:skyroot_grindstone_holystone_slab' });
    event.remove({ id: 'aether:skyroot_loom' });
    event.remove({ id: 'aether:skyroot_noteblock' });
    event.remove({ id: 'aether:skyroot_gravitite_jukebox' });
    event.remove({ id: 'aether:skyroot_beehive' });
    event.remove({ id: 'aether:skyroot_crafting_table' });
    event.remove({ id: 'supplementaries:bed_from_feather_block' });
    event.remove({ id: 'silentgear:bronze_ingot' });
    event.remove({ id: 'createbigcannons:bronze_ingot_from_nuggets' });
    event.remove({ id: 'magistuarmory:furnace/steel_ingot_blasting' });
    event.remove({ id: 'ad_astra:etrionic_blast_furnace' });
    event.remove({ id: 'ad_astra:alloying/steel_ingot_from_alloying_iron_ingot_and_coals' });
    event.remove({ id: 'ad_astra:iron_rod' });
    event.remove({ id: 'silentgear:iron_rod' });
    event.remove({ id: 'superbwarfare:tungsten_ingot_blasting_from_powder' });
    event.remove({ id: 'ancient_aether:enchanting_table_from_gravitite'})
    event.remove({ id: 'deep_aether:crystal_brewing_stand'})
        
    event.remove({ id: 'quark:building/crafting/furnaces/blackstone_smoker' });
    event.remove({ id: 'quark:building/crafting/furnaces/deepslate_smoker' });
    event.remove({ output: "create:electron_tube"});
    event.shaped(
        Item.of('minecraft:enchanting_table', 1),
        [
            'ABA',
            'CDC',
            'ACA'
        ],
        {
            A: 'aether_redux:gravitite_ingot',
            B: 'minecraft:red_carpet',
            C: '#forge:plates/obsidian',
            D: 'minecraft:bookshelf'
        }
        )
    event.replaceInput(
        { input: 'create:electron_tube' },
        'create:electron_tube',
        '#gtceu:circuits/ulv'
        );

    event.custom(
        {
        "type": "create:sandpaper_polishing",
        "ingredients": [
            {
            "item": "aether:quicksoil_glass"
            }
        ],
        "results": [
            {
            "item": "gtceu:glass_lens"
            }
        ]
        }
    );
    
    event.replaceInput(
        { input: 'minecraft:tnt', not: { mod: 'gtceu' } },
        'minecraft:tnt',
        'gtceu:powderbarrel'
    )
})
