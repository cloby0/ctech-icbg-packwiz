ServerEvents.recipes(event => {
    const TMPL = 'modulargolems:metal_golem_template'

    event.remove({ output: /inventorypets:pet_.*/ })
    event.remove({ output: 'inventorypets:temp_chest' })
    event.remove({ output: 'inventorypets:temp_double_chest' })
    event.remove({ output: 'inventorypets:temp_feed_bag' })
    event.remove({ id: 'inventorypets:feed_bag' })
    event.remove({ id: 'inventorypets:feed_bag_temp' })


    event.shaped('inventorypets:pet_anvil', ['OOO', 'OXO', 'OGO'], {
        X: TMPL, G: 'minecraft:gold_block', O: 'minecraft:iron_ingot'
    })
    event.shaped('inventorypets:pet_apple', ['OFO', 'OXO', 'OGO'], {
        X: TMPL, F: '#forge:ingots/gold', G: '#forge:ingots/gold', O: 'minecraft:apple'
    })
    event.shaped('inventorypets:pet_april_fool', ['OFR', 'OXR', 'OGR'], {
        X: TMPL, R: 'inventorypets:nugget_obsidian', F: 'minecraft:tripwire_hook',
        G: 'minecraft:gold_ingot', O: 'minecraft:redstone'
    })
    event.shaped('inventorypets:pet_banana', ['OFO', 'OXO', 'OGO'], {
        X: TMPL, F: 'minecraft:glowstone_dust', G: '#forge:ingots/gold', O: 'minecraft:gold_nugget'
    })
    event.shaped('inventorypets:pet_bed', ['OFO', 'OXO', 'OGO'], {
        X: TMPL, F: 'minecraft:white_wool', G: 'minecraft:gold_ingot', O: 'minecraft:redstone'
    })
    event.shaped('inventorypets:pet_biome', ['IFA', 'RXN', 'TGL'], {
        X: TMPL, I: 'minecraft:dirt', F: 'minecraft:grass_block', A: 'minecraft:sand',
        R: 'minecraft:gravel', N: 'minecraft:snowball',
        T: 'minecraft:cobblestone', G: 'minecraft:gold_ingot', L: 'minecraft:clay'
    })
    event.shaped('inventorypets:pet_blaze', ['OFO', 'OXO', 'OGO'], {
        X: TMPL, F: 'minecraft:quartz', G: 'minecraft:gold_ingot', O: 'minecraft:gold_nugget'
    })
    event.shaped('inventorypets:pet_brewing_stand', ['OFO', 'OXO', 'OGO'], {
        X: TMPL, F: 'minecraft:nether_wart', G: 'minecraft:gold_ingot', O: 'minecraft:cobblestone'
    })
    event.shaped('inventorypets:pet_cheetah', ['OFO', 'OXO', 'OGO'], {
        X: TMPL, F: '#inventorypets:raw_meats', G: 'minecraft:gold_ingot', O: 'minecraft:blaze_powder'
    })
    event.shaped('inventorypets:pet_chest', ['OFO', 'OXO', 'OGO'], {
        X: TMPL, F: 'minecraft:iron_nugget', G: 'minecraft:gold_ingot', O: '#minecraft:planks'
    })
    event.shaped('inventorypets:pet_chicken', ['OFO', 'OXO', 'OGO'], {
        X: TMPL, F: 'minecraft:wheat_seeds', G: 'minecraft:gold_ingot', O: 'minecraft:feather'
    })
    event.shaped('inventorypets:pet_christmas_tree', ['OFC', 'OXC', 'OGC'], {
        X: TMPL, C: 'inventorypets:nugget_emerald', F: 'minecraft:cookie',
        G: 'minecraft:gold_ingot', O: 'minecraft:redstone'
    })
    event.shaped('inventorypets:pet_cobblestone', ['OFO', 'OXO', 'OGO'], {
        X: TMPL, F: 'minecraft:dirt', G: 'minecraft:gold_ingot', O: 'minecraft:cobblestone'
    })
    event.shaped('inventorypets:pet_cow', ['OFB', 'OXB', 'OGB'], {
        X: TMPL, B: 'minecraft:iron_nugget', F: 'minecraft:wheat',
        G: 'minecraft:gold_ingot', O: 'inventorypets:nugget_coal'
    })
    event.shaped('inventorypets:pet_crafting_table', ['OFO', 'OXO', 'OGO'], {
        X: TMPL, F: '#minecraft:logs', G: 'minecraft:gold_ingot', O: '#minecraft:planks'
    })
    event.shaped('inventorypets:pet_creeper', ['OFO', 'OXO', 'OGO'], {
        X: TMPL, F: 'minecraft:gunpowder', G: 'minecraft:gold_ingot', O: 'inventorypets:nugget_emerald'
    })
    event.shaped('inventorypets:pet_dirt', ['OFO', 'OXO', 'OGO'], {
        X: TMPL, F: 'minecraft:cobblestone', G: 'minecraft:gold_ingot', O: 'minecraft:dirt'
    })
    event.shaped('inventorypets:pet_double_chest', ['OFO', 'OXO', 'OGO'], {
        X: TMPL, F: 'minecraft:gold_nugget', G: 'minecraft:gold_ingot', O: '#minecraft:planks'
    })
    event.shaped('inventorypets:pet_enchanting_table', ['OFO', 'OXO', 'OGO'], {
        X: TMPL, F: 'minecraft:book', G: 'minecraft:gold_ingot', O: 'inventorypets:nugget_obsidian'
    })
    event.shaped('inventorypets:pet_ender_chest', ['OOO', 'OXO', 'OGO'], {
        X: TMPL, G: 'minecraft:gold_ingot', O: 'inventorypets:nugget_ender'
    })
    event.shaped('inventorypets:pet_enderman', ['OFO', 'OXO', 'OGO'], {
        X: TMPL, F: 'inventorypets:nugget_obsidian', G: 'minecraft:gold_ingot', O: 'inventorypets:nugget_coal'
    })
    event.shaped('inventorypets:pet_end_portal', ['OFO', 'OXO', 'OGO'], {
        X: TMPL, F: 'minecraft:ender_eye', G: 'minecraft:gold_ingot', O: 'inventorypets:nugget_ender'
    })
    event.shaped('inventorypets:pet_furnace', ['OFO', 'OXO', 'OGO'], {
        X: TMPL, F: 'minecraft:coal', G: 'minecraft:gold_ingot', O: 'minecraft:cobblestone'
    })
    event.shaped('inventorypets:pet_ghast', ['OFO', 'OXO', 'OGO'], {
        X: TMPL, F: 'minecraft:blaze_powder', G: 'minecraft:gold_ingot', O: 'minecraft:quartz'
    })
    event.shaped('inventorypets:pet_house', ['OFO', 'OXO', 'OGO'], {
        X: TMPL, F: 'inventorypets:nugget_ender', G: 'minecraft:gold_ingot', O: '#minecraft:planks'
    })
    event.shaped('inventorypets:pet_illuminati', ['OOO', 'OXO', 'OGO'], {
        X: TMPL, G: 'minecraft:nether_star', O: 'inventorypets:nugget_emerald'
    })
    event.shaped('inventorypets:pet_iron_golem', ['OFO', 'OXO', 'OGO'], {
        X: TMPL, F: 'minecraft:iron_ingot', G: 'minecraft:gold_ingot', O: 'minecraft:iron_nugget'
    })
    event.shaped('inventorypets:pet_juggernaut', ['OFO', 'OXO', 'OGO'], {
        X: TMPL, F: 'inventorypets:nugget_obsidian', G: 'minecraft:nether_star', O: 'minecraft:redstone'
    })
    event.shaped('inventorypets:pet_jukebox', ['OFO', 'OXO', 'OGO'], {
        X: TMPL, F: 'minecraft:redstone', G: 'minecraft:gold_ingot', O: '#minecraft:planks'
    })
    event.shaped('inventorypets:pet_lead', ['OFO', 'OXO', 'OGO'], {
        X: TMPL, F: 'minecraft:string', G: 'minecraft:gold_ingot', O: 'inventorypets:nugget_emerald'
    })
    event.shaped('inventorypets:pet_loot', ['OFO', 'OXO', 'OGO'], {
        X: TMPL, F: 'minecraft:gold_nugget', G: 'minecraft:gold_ingot', O: 'minecraft:gold_ingot'
    })
    event.shaped('inventorypets:pet_magma_cube', ['OFO', 'OXO', 'OGO'], {
        X: TMPL, F: 'minecraft:gold_nugget', G: 'minecraft:gold_ingot', O: 'minecraft:redstone'
    })
    event.shaped('inventorypets:pet_menorah', ['TFT', 'OXO', 'OGO'], {
        X: TMPL, T: 'inventorypets:nugget_lapis', F: 'minecraft:lapis_lazuli',
        G: 'minecraft:gold_ingot', O: 'minecraft:gold_nugget'
    })
    event.shaped('inventorypets:pet_mishumaa_saba', ['TFT', 'OXO', 'UGU'], {
        X: TMPL, T: 'inventorypets:nugget_emerald', F: 'minecraft:gold_nugget',
        G: 'minecraft:gold_ingot', O: 'inventorypets:nugget_coal', U: 'minecraft:redstone'
    })
    event.shaped('inventorypets:pet_mooshroom', ['OFB', 'OXB', 'OGB'], {
        X: TMPL, B: 'minecraft:iron_nugget', F: 'minecraft:red_mushroom',
        G: 'minecraft:gold_ingot', O: 'minecraft:redstone'
    })
    event.shaped('inventorypets:pet_mooshroom', ['OFB', 'OXB', 'OGB'], {
        X: TMPL, B: 'minecraft:iron_nugget', F: 'minecraft:brown_mushroom',
        G: 'minecraft:gold_ingot', O: 'minecraft:redstone'
    })
    event.shaped('inventorypets:pet_nether_portal', ['OFO', 'OXO', 'OGO'], {
        X: TMPL, F: 'minecraft:quartz', G: 'minecraft:gold_ingot', O: 'inventorypets:nugget_obsidian'
    })
    event.shaped('inventorypets:pet_ocelot', ['OFO', 'OXO', 'OGO'], {
        X: TMPL, F: '#inventorypets:cooked_fishes', G: 'minecraft:gold_ingot', O: 'minecraft:gold_nugget'
    })
    event.shaped('inventorypets:pet_pacman', ['OFO', 'OXO', 'OGO'], {
        X: TMPL, F: 'minecraft:cookie', G: 'minecraft:gold_ingot', O: 'minecraft:gold_nugget'
    })
    event.shaped('inventorypets:pet_pig', ['OFO', 'OXO', 'OGO'], {
        X: TMPL, F: 'minecraft:carrot', G: 'minecraft:gold_ingot', O: 'minecraft:redstone'
    })
    event.shaped('inventorypets:pet_pingot', ['OFO', 'OXO', 'OGO'], {
        X: TMPL, F: 'inventorypets:nugget_diamond', G: 'minecraft:gold_ingot', O: 'minecraft:lapis_lazuli'
    })
    event.shaped('inventorypets:pet_pixie', ['OFO', 'EXE', 'OGO'], {
        X: TMPL, E: 'minecraft:emerald', F: 'inventorypets:nugget_emerald',
        G: 'minecraft:gold_ingot', O: 'minecraft:gold_ingot'
    })
    event.shaped('inventorypets:pet_politically_correct', ['OFO', 'OXO', 'OGO'], {
        X: TMPL, F: 'minecraft:clay', G: 'minecraft:gold_ingot', O: 'minecraft:gold_nugget'
    })
    event.shaped('inventorypets:pet_purplicious_cow', ['OFB', 'OXB', 'OGB'], {
        X: TMPL, B: 'minecraft:iron_nugget', F: 'inventorypets:nugget_diamond',
        G: 'minecraft:gold_ingot', O: 'inventorypets:nugget_lapis'
    })
    event.shaped('inventorypets:pet_qcm', ['OFO', 'OXO', 'OGO'], {
        X: TMPL, F: 'inventorypets:nugget_lapis', G: 'minecraft:gold_ingot', O: 'inventorypets:nugget_obsidian'
    })
    event.shaped('inventorypets:pet_quiver', ['OFO', 'OXO', 'OGO'], {
        X: TMPL, F: 'minecraft:feather', G: 'minecraft:gold_ingot', O: 'minecraft:leather'
    })
    event.shaped('inventorypets:pet_saddle', ['OFO', 'OXO', 'OGO'], {
        X: TMPL, F: 'minecraft:iron_nugget', G: 'minecraft:gold_ingot', O: 'minecraft:leather'
    })
    event.shaped('inventorypets:pet_sheep', ['OFO', 'OXO', 'OGO'], {
        X: TMPL, F: 'minecraft:wheat', G: 'minecraft:gold_ingot', O: '#minecraft:wool'
    })
    event.shaped('inventorypets:pet_siamese', ['OFO', 'OXO', 'OGO'], {
        X: TMPL, F: 'minecraft:cooked_chicken', G: 'minecraft:gold_ingot', O: 'minecraft:baked_potato'
    })
    event.shaped('inventorypets:pet_silverfish', ['OFO', 'OXO', 'OGO'], {
        X: TMPL, F: 'minecraft:cobblestone', G: 'minecraft:gold_ingot', O: 'minecraft:iron_nugget'
    })
    event.shaped('inventorypets:pet_snow_golem', ['OFO', 'OXO', 'OGO'], {
        X: TMPL, F: 'minecraft:pumpkin', G: 'minecraft:gold_ingot', O: 'minecraft:quartz'
    })
    event.shaped('inventorypets:pet_spider', ['OFO', 'OXO', 'OGO'], {
        X: TMPL, F: '#inventorypets:raw_meats', G: 'minecraft:gold_ingot', O: 'inventorypets:nugget_coal'
    })
    event.shaped('inventorypets:pet_spider', ['OFO', 'OXO', 'OGO'], {
        X: TMPL, F: '#inventorypets:raw_fishes', G: 'minecraft:gold_ingot', O: 'inventorypets:nugget_coal'
    })
    event.shaped('inventorypets:pet_sponge', ['OFO', 'OXO', 'OGO'], {
        X: TMPL, F: 'minecraft:lily_pad', G: 'minecraft:gold_ingot', O: 'minecraft:gold_nugget'
    })
    event.shaped('inventorypets:pet_squid', ['OFO', 'OXO', 'OGO'], {
        X: TMPL, F: '#inventorypets:raw_fishes', G: 'minecraft:gold_ingot', O: 'inventorypets:nugget_lapis'
    })
    event.shaped('inventorypets:pet_torch', ['OFO', 'OXO', 'OGO'], {
        X: TMPL, F: 'minecraft:coal', G: 'minecraft:gold_ingot', O: 'minecraft:stick'
    })
    event.shaped('inventorypets:pet_wolf', ['OFO', 'OXO', 'OGO'], {
        X: TMPL, F: 'minecraft:beef', G: 'minecraft:gold_ingot', O: 'minecraft:iron_nugget'
    })
    event.shaped('inventorypets:pet_wolf', ['OFO', 'OXO', 'OGO'], {
        X: TMPL, F: 'minecraft:chicken', G: 'minecraft:gold_ingot', O: 'minecraft:iron_nugget'
    })

    event.shaped('inventorypets:pet_black_hole', ['OFO', 'ODO', 'OXO'], {
        X: TMPL, D: 'minecraft:nether_star', F: 'inventorypets:nugget_obsidian', O: 'inventorypets:nugget_coal'
    })
    event.shaped('inventorypets:pet_cloud', ['OFO', 'ODO', 'OXO'], {
        X: TMPL, D: 'minecraft:nether_star', F: 'minecraft:quartz', O: 'minecraft:iron_nugget'
    })
    event.shaped('inventorypets:pet_dubstep', ['OFO', 'ODO', 'OXO'], {
        X: TMPL, D: 'minecraft:emerald', F: 'minecraft:note_block', O: 'inventorypets:nugget_coal'
    })
    event.shaped('inventorypets:pet_heart', ['OFO', 'ODO', 'OXO'], {
        X: TMPL, D: 'minecraft:emerald', F: 'minecraft:red_tulip', O: 'minecraft:redstone'
    })
    event.shaped('inventorypets:pet_moon', ['OFO', 'ODO', 'OXO'], {
        X: TMPL, D: 'minecraft:emerald', F: 'inventorypets:nugget_diamond', O: 'minecraft:quartz'
    })
    event.shaped('inventorypets:pet_pufferfish', ['OFO', 'ODO', 'OXO'], {
        X: TMPL, D: 'minecraft:nether_star', F: 'minecraft:glowstone_dust', O: 'minecraft:gold_nugget'
    })
    event.shaped('inventorypets:pet_shield', ['OFO', 'ODO', 'OXO'], {
        X: TMPL, D: 'minecraft:emerald', F: 'minecraft:iron_nugget', O: 'minecraft:iron_nugget'
    })
    event.shaped('inventorypets:pet_slime', ['OFO', 'ODO', 'OXO'], {
        X: TMPL, D: 'minecraft:nether_star', F: 'minecraft:golden_apple', O: 'inventorypets:nugget_emerald'
    })
    event.shaped('inventorypets:pet_sun', ['OOO', 'ODO', 'OXO'], {
        X: TMPL, D: 'minecraft:nether_star', O: 'minecraft:gold_ingot'
    })

    event.shaped('inventorypets:pet_grave', ['XFO', 'ODO', 'OGO'], {
        X: TMPL, D: 'minecraft:emerald', F: 'minecraft:bone',
        G: 'minecraft:chest', O: 'minecraft:stone'
    })
    event.shaped('inventorypets:pet_mickerson', ['XFO', 'ODO', 'OGO'], {
        X: TMPL, D: 'minecraft:nether_star', F: 'inventorypets:nugget_diamond',
        G: 'minecraft:gold_ingot', O: 'inventorypets:nugget_lapis'
    })
    event.shaped('inventorypets:pet_wither', ['XFO', 'ONO', 'OGO'], {
        X: TMPL, N: 'minecraft:nether_star', F: 'minecraft:soul_sand',
        G: 'minecraft:gold_ingot', O: 'inventorypets:nugget_coal'
    })

    event.shaped('inventorypets:pet_dingot', ['OFO', 'ONO', 'OGO'], {
        O: 'minecraft:diamond', N: 'inventorypets:pet_biome',
        F: 'minecraft:copper_ingot', G: 'inventorypets:pet_pingot'
    })
    event.shaped('inventorypets:pet_flying_saddle', ['OFO', 'FDF', 'OFO'], {
        O: 'minecraft:diamond', F: 'minecraft:diamond', D: 'inventorypets:pet_saddle'
    })
    event.shaped('inventorypets:pet_sated_chest', ['OOO', 'ODO', 'OOO'], {
        D: 'inventorypets:pet_chest', O: 'inventorypets:nugget_diamond'
    })
    event.shaped('inventorypets:pet_sated_double_chest', ['OOO', 'ODO', 'OOO'], {
        D: 'inventorypets:pet_double_chest', O: 'inventorypets:nugget_diamond'
    })

    event.shaped('inventorypets:temp_chest', ['OFO', 'OXO', 'OGO'], {
        X: TMPL, F: 'minecraft:iron_nugget', G: 'minecraft:gold_ingot', O: '#minecraft:planks'
    })
    event.shaped('inventorypets:temp_double_chest', ['OFO', 'OXO', 'OGO'], {
        X: TMPL, F: 'minecraft:gold_nugget', G: 'minecraft:gold_ingot', O: '#minecraft:planks'
    })
    event.shaped('inventorypets:feed_bag', ['OFO', 'OXO', 'OGO'], {
        X: TMPL, F: 'minecraft:string', G: '#forge:chests', O: 'minecraft:leather'
    })
    event.shaped('inventorypets:temp_feed_bag', ['OFO', 'OXO', 'OGO'], {
        X: TMPL, F: 'minecraft:string', G: '#forge:chests', O: 'minecraft:leather'
    })

    event.shapeless('inventorypets:pet_meta', ['#inventorypets:all_pets', '#inventorypets:all_pets', '#inventorypets:all_pets'])
    event.shapeless('inventorypets:pet_meta_aoe', ['#inventorypets:aoe_pets', '#inventorypets:aoe_pets', '#inventorypets:aoe_pets', '#inventorypets:aoe_pets'])
    event.shapeless('inventorypets:pet_meta_fan', ['#inventorypets:fan_pets', '#inventorypets:fan_pets', '#inventorypets:fan_pets', '#inventorypets:fan_pets'])
    event.shapeless('inventorypets:pet_meta_mob', ['#inventorypets:mob_pets', '#inventorypets:mob_pets', '#inventorypets:mob_pets', '#inventorypets:mob_pets'])
    event.shapeless('inventorypets:pet_meta_peaceful', ['#inventorypets:peaceful_pets', '#inventorypets:peaceful_pets', '#inventorypets:peaceful_pets', '#inventorypets:peaceful_pets'])
    event.shapeless('inventorypets:pet_meta_special', ['#inventorypets:special_pets', '#inventorypets:special_pets', '#inventorypets:special_pets', '#inventorypets:special_pets'])
    event.shapeless('inventorypets:pet_meta_utility', ['#inventorypets:utility_pets', '#inventorypets:utility_pets', '#inventorypets:utility_pets', '#inventorypets:utility_pets'])
    event.shapeless('inventorypets:pet_meta_youtuber', ['#inventorypets:youtuber_pets', '#inventorypets:youtuber_pets', '#inventorypets:youtuber_pets', '#inventorypets:youtuber_pets'])
    event.shapeless('inventorypets:pet_meta_25', ['#inventorypets:legendary_pets', '#inventorypets:nonlegendary_pets', '#inventorypets:nonlegendary_pets', '#inventorypets:nonlegendary_pets'])
    event.shapeless('inventorypets:pet_meta_50', ['#inventorypets:legendary_pets', '#inventorypets:legendary_pets', '#inventorypets:nonlegendary_pets', '#inventorypets:nonlegendary_pets'])
    event.shapeless('inventorypets:pet_meta_75', ['#inventorypets:legendary_pets', '#inventorypets:legendary_pets', '#inventorypets:legendary_pets', '#inventorypets:nonlegendary_pets'])
    event.shapeless('inventorypets:pet_meta_100', ['#inventorypets:legendary_pets', '#inventorypets:legendary_pets', '#inventorypets:legendary_pets', '#inventorypets:legendary_pets'])
})
