ServerEvents.recipes(event => {
    // Keystone tax (2026-08-04). Inventory Pets used to be 78 crafting-grid recipes that never
    // touched a magic device. Now the whole mod hangs off three keystones and two stations:
    //
    //   K1  modulargolems:metal_golem_template  -- Malum Spirit Altar (see modularGolems.js).
    //       Shared with Modular Golems: one animated body gates both mods.
    //   K2  inventorypets:feed_bag              -- Blood Magic Alchemy Table, LP-fed.
    //   K3  the meta pets                       -- Occultism ritual, Marid pentacle.
    //
    // Ordinary pets are Spirit Infusions: the template is the body, the pet's own ingredients are
    // the pedestal offerings, and the SPIRIT TYPE is chosen per pet (infernal for blaze/torch,
    // aqueous for squid/sponge, earthen for dirt/stone, aerial for ghast/cheetah, sacred for the
    // food and holiday pets, wicked for creeper/spider, eldritch for the ender-adjacent ones).
    //
    // 24 pets are gated behind Occultism rituals instead, on three signals: the base mod spends a
    // NETHER STAR on them (black_hole, cloud, illuminati, juggernaut, mickerson, pufferfish, slime,
    // sun, wither), the ability is PvP-breaking per the lang file (grave = restores inventory after
    // death, juggernaut = invulnerability, enderman = auto-save at low health, house = teleport
    // home, end/nether_portal = free dimension access, pacman = super damage, qcm = minions,
    // shield/heart = ally protection and healing, moon = reverse gravity, loot = drop multiplier),
    // or the pet is built by consuming other pets (dingot, flying_saddle, sated_chest,
    // sated_double_chest -- Marid, with the meta pets).
    //
    // Duplicate shaped recipes for pet_mooshroom, pet_spider and pet_wolf collapsed while converting.
    const TMPL = 'modulargolems:metal_golem_template'

    event.remove({ output: /inventorypets:pet_.*/ })
    event.remove({ output: 'inventorypets:temp_chest' })
    event.remove({ output: 'inventorypets:temp_double_chest' })
    event.remove({ output: 'inventorypets:temp_feed_bag' })
    event.remove({ id: 'inventorypets:feed_bag' })
    event.remove({ id: 'inventorypets:feed_bag_temp' })

    // K2: the feed bag is how every pet is kept alive, so it is the mod's second gate.
    addAlchemyTableRecipe(event, {
        output: 'inventorypets:feed_bag',
        input: ['minecraft:leather', 'minecraft:wheat', 'botania:manasteel_ingot', 'occultism:otherworld_essence'],
        syphon: LP.APPRENTICE,
        ticks: 200,
        upgradeLevel: 1
    })



    // The temp_* items are the disposable versions the pets themselves hand out. They stay in the
    // grid on purpose: they are consumables, not progression, and they already cost a template.
    event.shaped('inventorypets:temp_chest', ['OFO', 'OXO', 'ZGO'], {
        X: TMPL, F: 'minecraft:iron_nugget', G: 'minecraft:gold_ingot', O: '#minecraft:planks', Z: '#forge:tools/screwdrivers'
    }).damageIngredient(Ingredient.of('#forge:tools/screwdrivers'))
    event.shaped('inventorypets:temp_double_chest', ['OFO', 'OXO', 'ZGO'], {
        X: TMPL, F: 'minecraft:gold_nugget', G: 'minecraft:gold_ingot', O: '#minecraft:planks', Z: '#forge:tools/screwdrivers'
    }).damageIngredient(Ingredient.of('#forge:tools/screwdrivers'))
    event.shaped('inventorypets:temp_feed_bag', ['OFO', 'OXO', 'KGO'], {
        X: TMPL, F: 'minecraft:string', G: '#forge:chests', O: 'minecraft:leather', K: '#forge:tools/knives'
    }).damageIngredient(Ingredient.of('#forge:tools/knives'))

    addSpiritInfusion(event, {
        input: TMPL,
        output: 'inventorypets:pet_anvil',
        extraItems: [{ item: 'minecraft:iron_ingot', count: 6 }, { item: 'minecraft:gold_block' }],
        spirits: [{ type: 'earthen', count: 2 }]
    })

    addSpiritInfusion(event, {
        input: TMPL,
        output: 'inventorypets:pet_apple',
        extraItems: [{ item: 'minecraft:apple', count: 5 }, { item: '#forge:ingots/gold', count: 2 }],
        spirits: [{ type: 'sacred', count: 2 }]
    })

    addSpiritInfusion(event, {
        input: TMPL,
        output: 'inventorypets:pet_april_fool',
        extraItems: [{ item: 'minecraft:redstone', count: 2 }, { item: 'minecraft:tripwire_hook' }, { item: 'inventorypets:nugget_obsidian', count: 3 }, { item: 'minecraft:gold_ingot' }],
        spirits: [{ type: 'arcane', count: 2 }, { type: 'wicked', count: 1 }]
    })

    addSpiritInfusion(event, {
        input: TMPL,
        output: 'inventorypets:pet_banana',
        extraItems: [{ item: 'minecraft:gold_nugget', count: 5 }, { item: 'minecraft:glowstone_dust' }, { item: '#forge:ingots/gold' }],
        spirits: [{ type: 'sacred', count: 2 }]
    })

    addSpiritInfusion(event, {
        input: TMPL,
        output: 'inventorypets:pet_bed',
        extraItems: [{ item: 'minecraft:redstone', count: 5 }, { item: 'minecraft:white_wool' }, { item: 'minecraft:gold_ingot' }],
        // Was aqueous -- mistyped, nothing aqueous about a bed. Sacred (rest) is the real fit.
        spirits: [{ type: 'sacred', count: 2 }]
    })

    addSpiritInfusion(event, {
        input: TMPL,
        output: 'inventorypets:pet_biome',
        extraItems: [{ item: 'minecraft:dirt' }, { item: 'minecraft:grass_block' }, { item: 'minecraft:sand' }, { item: 'minecraft:gravel' }, { item: 'minecraft:snowball' }, { item: 'minecraft:gold_ingot' }],
        spirits: [{ type: 'earthen', count: 2 }, { type: 'aqueous', count: 1 }]
    })

    addSpiritInfusion(event, {
        input: TMPL,
        output: 'inventorypets:pet_blaze',
        extraItems: [{ item: 'minecraft:gold_nugget', count: 5 }, { item: 'minecraft:quartz' }, { item: 'minecraft:gold_ingot' }],
        spirits: [{ type: 'infernal', count: 2 }]
    })

    addSpiritInfusion(event, {
        input: TMPL,
        output: 'inventorypets:pet_brewing_stand',
        extraItems: [{ item: 'minecraft:cobblestone', count: 5 }, { item: 'minecraft:nether_wart' }, { item: 'minecraft:gold_ingot' }],
        spirits: [{ type: 'arcane', count: 2 }, { type: 'infernal', count: 1 }]
    })

    addSpiritInfusion(event, {
        input: TMPL,
        output: 'inventorypets:pet_cheetah',
        extraItems: [{ item: 'minecraft:blaze_powder', count: 5 }, { item: '#inventorypets:raw_meats' }, { item: 'minecraft:gold_ingot' }],
        spirits: [{ type: 'aerial', count: 2 }, { type: 'infernal', count: 1 }]
    })

    addSpiritInfusion(event, {
        input: TMPL,
        output: 'inventorypets:pet_chest',
        extraItems: [{ item: '#minecraft:planks', count: 5 }, { item: 'minecraft:iron_nugget' }, { item: 'minecraft:gold_ingot' }],
        spirits: [{ type: 'arcane', count: 2 }]
    })

    addSpiritInfusion(event, {
        input: TMPL,
        output: 'inventorypets:pet_chicken',
        extraItems: [{ item: 'minecraft:feather', count: 5 }, { item: 'minecraft:wheat_seeds' }, { item: 'minecraft:gold_ingot' }],
        spirits: [{ type: 'aerial', count: 2 }]
    })

    addSpiritInfusion(event, {
        input: TMPL,
        output: 'inventorypets:pet_christmas_tree',
        extraItems: [{ item: 'minecraft:redstone', count: 2 }, { item: 'minecraft:cookie' }, { item: 'inventorypets:nugget_emerald', count: 3 }, { item: 'minecraft:gold_ingot' }],
        spirits: [{ type: 'infernal', count: 2 }, { type: 'sacred', count: 1 }]
    })

    addSpiritInfusion(event, {
        input: TMPL,
        output: 'inventorypets:pet_cobblestone',
        extraItems: [{ item: 'minecraft:cobblestone', count: 5 }, { item: 'minecraft:dirt' }, { item: 'minecraft:gold_ingot' }],
        spirits: [{ type: 'earthen', count: 2 }]
    })

    addSpiritInfusion(event, {
        input: TMPL,
        output: 'inventorypets:pet_cow',
        extraItems: [{ item: 'inventorypets:nugget_coal', count: 2 }, { item: 'minecraft:wheat' }, { item: 'minecraft:iron_nugget', count: 3 }, { item: 'minecraft:gold_ingot' }],
        spirits: [{ type: 'sacred', count: 2 }]
    })

    addSpiritInfusion(event, {
        input: TMPL,
        output: 'inventorypets:pet_crafting_table',
        extraItems: [{ item: '#minecraft:planks', count: 5 }, { item: '#minecraft:logs' }, { item: 'minecraft:gold_ingot' }],
        spirits: [{ type: 'arcane', count: 2 }, { type: 'earthen', count: 1 }]
    })

    addSpiritInfusion(event, {
        input: TMPL,
        output: 'inventorypets:pet_creeper',
        extraItems: [{ item: 'inventorypets:nugget_emerald', count: 5 }, { item: 'minecraft:gunpowder' }, { item: 'minecraft:gold_ingot' }],
        spirits: [{ type: 'wicked', count: 2 }, { type: 'infernal', count: 1 }]
    })

    addSpiritInfusion(event, {
        input: TMPL,
        output: 'inventorypets:pet_dirt',
        extraItems: [{ item: 'minecraft:dirt', count: 5 }, { item: 'minecraft:cobblestone' }, { item: 'minecraft:gold_ingot' }],
        spirits: [{ type: 'earthen', count: 2 }]
    })

    addSpiritInfusion(event, {
        input: TMPL,
        output: 'inventorypets:pet_double_chest',
        extraItems: [{ item: '#minecraft:planks', count: 5 }, { item: 'minecraft:gold_nugget' }, { item: 'minecraft:gold_ingot' }],
        spirits: [{ type: 'arcane', count: 2 }]
    })

    addSpiritInfusion(event, {
        input: TMPL,
        output: 'inventorypets:pet_enchanting_table',
        extraItems: [{ item: 'inventorypets:nugget_obsidian', count: 5 }, { item: 'minecraft:book' }, { item: 'minecraft:gold_ingot' }],
        spirits: [{ type: 'arcane', count: 2 }]
    })

    addSpiritInfusion(event, {
        input: TMPL,
        output: 'inventorypets:pet_ender_chest',
        extraItems: [{ item: 'inventorypets:nugget_ender', count: 6 }, { item: 'minecraft:gold_ingot' }],
        spirits: [{ type: 'eldritch', count: 2 }]
    })

    addOccultismRitual(event, {
        name: 'pet_enderman',
        tier: 'afrit',
        output: 'inventorypets:pet_enderman',
        duration: 120,
        ingredients: [
            { item: TMPL }, { item: 'inventorypets:nugget_coal', count: 5 }, { item: 'inventorypets:nugget_obsidian' }, { item: 'minecraft:gold_ingot' }
        ]
    })

    addOccultismRitual(event, {
        name: 'pet_end_portal',
        tier: 'afrit',
        output: 'inventorypets:pet_end_portal',
        duration: 120,
        ingredients: [
            { item: TMPL }, { item: 'inventorypets:nugget_ender', count: 5 }, { item: 'minecraft:ender_eye' }, { item: 'minecraft:gold_ingot' }
        ]
    })

    addSpiritInfusion(event, {
        input: TMPL,
        output: 'inventorypets:pet_furnace',
        extraItems: [{ item: 'minecraft:cobblestone', count: 5 }, { item: 'minecraft:coal' }, { item: 'minecraft:gold_ingot' }],
        spirits: [{ type: 'infernal', count: 2 }]
    })

    addSpiritInfusion(event, {
        input: TMPL,
        output: 'inventorypets:pet_ghast',
        extraItems: [{ item: 'minecraft:quartz', count: 5 }, { item: 'minecraft:blaze_powder' }, { item: 'minecraft:gold_ingot' }],
        spirits: [{ type: 'aerial', count: 2 }, { type: 'infernal', count: 1 }]
    })

    addOccultismRitual(event, {
        name: 'pet_house',
        tier: 'afrit',
        output: 'inventorypets:pet_house',
        duration: 120,
        ingredients: [
            { item: TMPL }, { item: '#minecraft:planks', count: 5 }, { item: 'inventorypets:nugget_ender' }, { item: 'minecraft:gold_ingot' }
        ]
    })

    addOccultismRitual(event, {
        name: 'pet_illuminati',
        tier: 'afrit',
        output: 'inventorypets:pet_illuminati',
        duration: 120,
        ingredients: [
            { item: TMPL }, { item: 'inventorypets:nugget_emerald', count: 6 }, { item: 'minecraft:nether_star' }
        ]
    })

    addSpiritInfusion(event, {
        input: TMPL,
        output: 'inventorypets:pet_iron_golem',
        extraItems: [{ item: 'minecraft:iron_nugget', count: 5 }, { item: 'minecraft:iron_ingot' }, { item: 'minecraft:gold_ingot' }],
        spirits: [{ type: 'earthen', count: 2 }, { type: 'sacred', count: 1 }]
    })

    addOccultismRitual(event, {
        name: 'pet_juggernaut',
        tier: 'afrit',
        output: 'inventorypets:pet_juggernaut',
        duration: 120,
        ingredients: [
            { item: TMPL }, { item: 'minecraft:redstone', count: 5 }, { item: 'inventorypets:nugget_obsidian' }, { item: 'minecraft:nether_star' }
        ]
    })

    addSpiritInfusion(event, {
        input: TMPL,
        output: 'inventorypets:pet_jukebox',
        extraItems: [{ item: '#minecraft:planks', count: 5 }, { item: 'minecraft:redstone' }, { item: 'minecraft:gold_ingot' }],
        spirits: [{ type: 'aerial', count: 2 }]
    })

    addSpiritInfusion(event, {
        input: TMPL,
        output: 'inventorypets:pet_lead',
        extraItems: [{ item: 'inventorypets:nugget_emerald', count: 5 }, { item: 'minecraft:string' }, { item: 'minecraft:gold_ingot' }],
        spirits: [{ type: 'sacred', count: 2 }]
    })

    addOccultismRitual(event, {
        name: 'pet_loot',
        tier: 'afrit',
        output: 'inventorypets:pet_loot',
        duration: 120,
        ingredients: [
            { item: TMPL }, { item: 'minecraft:gold_ingot', count: 6 }, { item: 'minecraft:gold_nugget' }
        ]
    })

    addSpiritInfusion(event, {
        input: TMPL,
        output: 'inventorypets:pet_magma_cube',
        extraItems: [{ item: 'minecraft:redstone', count: 5 }, { item: 'minecraft:gold_nugget' }, { item: 'minecraft:gold_ingot' }],
        spirits: [{ type: 'infernal', count: 2 }]
    })

    addSpiritInfusion(event, {
        input: TMPL,
        output: 'inventorypets:pet_menorah',
        extraItems: [{ item: 'inventorypets:nugget_lapis', count: 2 }, { item: 'minecraft:lapis_lazuli' }, { item: 'minecraft:gold_nugget', count: 3 }, { item: 'minecraft:gold_ingot' }],
        spirits: [{ type: 'infernal', count: 2 }, { type: 'sacred', count: 1 }]
    })

    addSpiritInfusion(event, {
        input: TMPL,
        output: 'inventorypets:pet_mishumaa_saba',
        extraItems: [{ item: 'inventorypets:nugget_emerald', count: 2 }, { item: 'minecraft:gold_nugget' }, { item: 'inventorypets:nugget_coal', count: 2 }, { item: 'minecraft:gold_ingot' }, { item: 'minecraft:redstone' }],
        spirits: [{ type: 'infernal', count: 2 }]
    })

    addSpiritInfusion(event, {
        input: TMPL,
        output: 'inventorypets:pet_mooshroom',
        extraItems: [{ item: 'minecraft:redstone', count: 2 }, { item: 'minecraft:brown_mushroom' }, { item: 'minecraft:iron_nugget', count: 3 }, { item: 'minecraft:gold_ingot' }],
        spirits: [{ type: 'sacred', count: 2 }, { type: 'earthen', count: 1 }]
    })

    addOccultismRitual(event, {
        name: 'pet_nether_portal',
        tier: 'afrit',
        output: 'inventorypets:pet_nether_portal',
        duration: 120,
        ingredients: [
            { item: TMPL }, { item: 'inventorypets:nugget_obsidian', count: 5 }, { item: 'minecraft:quartz' }, { item: 'minecraft:gold_ingot' }
        ]
    })

    addSpiritInfusion(event, {
        input: TMPL,
        output: 'inventorypets:pet_ocelot',
        extraItems: [{ item: 'minecraft:gold_nugget', count: 5 }, { item: '#inventorypets:cooked_fishes' }, { item: 'minecraft:gold_ingot' }],
        spirits: [{ type: 'sacred', count: 2 }, { type: 'aqueous', count: 1 }]
    })

    addOccultismRitual(event, {
        name: 'pet_pacman',
        tier: 'afrit',
        output: 'inventorypets:pet_pacman',
        duration: 120,
        ingredients: [
            { item: TMPL }, { item: 'minecraft:gold_nugget', count: 5 }, { item: 'minecraft:cookie' }, { item: 'minecraft:gold_ingot' }
        ]
    })

    addSpiritInfusion(event, {
        input: TMPL,
        output: 'inventorypets:pet_pig',
        extraItems: [{ item: 'minecraft:redstone', count: 5 }, { item: 'minecraft:carrot' }, { item: 'minecraft:gold_ingot' }],
        spirits: [{ type: 'sacred', count: 2 }]
    })

    addSpiritInfusion(event, {
        input: TMPL,
        output: 'inventorypets:pet_pingot',
        extraItems: [{ item: 'minecraft:lapis_lazuli', count: 5 }, { item: 'inventorypets:nugget_diamond' }, { item: 'minecraft:gold_ingot' }],
        spirits: [{ type: 'arcane', count: 2 }]
    })

    addSpiritInfusion(event, {
        input: TMPL,
        output: 'inventorypets:pet_pixie',
        extraItems: [{ item: 'minecraft:gold_ingot', count: 4 }, { item: 'inventorypets:nugget_emerald' }, { item: 'minecraft:emerald', count: 2 }],
        spirits: [{ type: 'sacred', count: 2 }, { type: 'aerial', count: 1 }]
    })

    addSpiritInfusion(event, {
        input: TMPL,
        output: 'inventorypets:pet_politically_correct',
        extraItems: [{ item: 'minecraft:gold_nugget', count: 5 }, { item: 'minecraft:clay' }, { item: 'minecraft:gold_ingot' }],
        spirits: [{ type: 'arcane', count: 2 }]
    })

    addSpiritInfusion(event, {
        input: TMPL,
        output: 'inventorypets:pet_purplicious_cow',
        extraItems: [{ item: 'inventorypets:nugget_lapis', count: 2 }, { item: 'inventorypets:nugget_diamond' }, { item: 'minecraft:iron_nugget', count: 3 }, { item: 'minecraft:gold_ingot' }],
        spirits: [{ type: 'sacred', count: 2 }]
    })

    addOccultismRitual(event, {
        name: 'pet_qcm',
        tier: 'afrit',
        output: 'inventorypets:pet_qcm',
        duration: 120,
        ingredients: [
            { item: TMPL }, { item: 'inventorypets:nugget_obsidian', count: 5 }, { item: 'inventorypets:nugget_lapis' }, { item: 'minecraft:gold_ingot' }
        ]
    })

    addSpiritInfusion(event, {
        input: TMPL,
        output: 'inventorypets:pet_quiver',
        extraItems: [{ item: 'minecraft:leather', count: 5 }, { item: 'minecraft:feather' }, { item: 'minecraft:gold_ingot' }],
        spirits: [{ type: 'aerial', count: 2 }]
    })

    addSpiritInfusion(event, {
        input: TMPL,
        output: 'inventorypets:pet_saddle',
        extraItems: [{ item: 'minecraft:leather', count: 5 }, { item: 'minecraft:iron_nugget' }, { item: 'minecraft:gold_ingot' }],
        spirits: [{ type: 'aerial', count: 2 }]
    })

    addSpiritInfusion(event, {
        input: TMPL,
        output: 'inventorypets:pet_sheep',
        extraItems: [{ item: '#minecraft:wool', count: 5 }, { item: 'minecraft:wheat' }, { item: 'minecraft:gold_ingot' }],
        spirits: [{ type: 'sacred', count: 2 }]
    })

    addSpiritInfusion(event, {
        input: TMPL,
        output: 'inventorypets:pet_siamese',
        extraItems: [{ item: 'minecraft:baked_potato', count: 5 }, { item: 'minecraft:cooked_chicken' }, { item: 'minecraft:gold_ingot' }],
        spirits: [{ type: 'sacred', count: 2 }]
    })

    addSpiritInfusion(event, {
        input: TMPL,
        output: 'inventorypets:pet_silverfish',
        extraItems: [{ item: 'minecraft:iron_nugget', count: 5 }, { item: 'minecraft:cobblestone' }, { item: 'minecraft:gold_ingot' }],
        spirits: [{ type: 'wicked', count: 2 }, { type: 'earthen', count: 1 }]
    })

    addSpiritInfusion(event, {
        input: TMPL,
        output: 'inventorypets:pet_snow_golem',
        extraItems: [{ item: 'minecraft:quartz', count: 5 }, { item: 'minecraft:pumpkin' }, { item: 'minecraft:gold_ingot' }],
        spirits: [{ type: 'aqueous', count: 2 }]
    })

    addSpiritInfusion(event, {
        input: TMPL,
        output: 'inventorypets:pet_spider',
        extraItems: [{ item: 'inventorypets:nugget_coal', count: 5 }, { item: '#inventorypets:raw_fishes' }, { item: 'minecraft:gold_ingot' }],
        spirits: [{ type: 'wicked', count: 2 }]
    })

    addSpiritInfusion(event, {
        input: TMPL,
        output: 'inventorypets:pet_sponge',
        extraItems: [{ item: 'minecraft:gold_nugget', count: 5 }, { item: 'minecraft:lily_pad' }, { item: 'minecraft:gold_ingot' }],
        spirits: [{ type: 'aqueous', count: 2 }]
    })

    addSpiritInfusion(event, {
        input: TMPL,
        output: 'inventorypets:pet_squid',
        extraItems: [{ item: 'inventorypets:nugget_lapis', count: 5 }, { item: '#inventorypets:raw_fishes' }, { item: 'minecraft:gold_ingot' }],
        spirits: [{ type: 'aqueous', count: 2 }]
    })

    addSpiritInfusion(event, {
        input: TMPL,
        output: 'inventorypets:pet_torch',
        extraItems: [{ item: 'minecraft:stick', count: 5 }, { item: 'minecraft:coal' }, { item: 'minecraft:gold_ingot' }],
        spirits: [{ type: 'infernal', count: 2 }]
    })

    addSpiritInfusion(event, {
        input: TMPL,
        output: 'inventorypets:pet_wolf',
        extraItems: [{ item: 'minecraft:iron_nugget', count: 5 }, { item: 'minecraft:chicken' }, { item: 'minecraft:gold_ingot' }],
        spirits: [{ type: 'sacred', count: 2 }]
    })

    addOccultismRitual(event, {
        name: 'pet_black_hole',
        tier: 'afrit',
        output: 'inventorypets:pet_black_hole',
        duration: 120,
        ingredients: [
            { item: TMPL }, { item: 'inventorypets:nugget_coal', count: 5 }, { item: 'inventorypets:nugget_obsidian' }, { item: 'minecraft:nether_star' }
        ]
    })

    addOccultismRitual(event, {
        name: 'pet_cloud',
        tier: 'afrit',
        output: 'inventorypets:pet_cloud',
        duration: 120,
        ingredients: [
            { item: TMPL }, { item: 'minecraft:iron_nugget', count: 5 }, { item: 'minecraft:quartz' }, { item: 'minecraft:nether_star' }
        ]
    })

    addSpiritInfusion(event, {
        input: TMPL,
        output: 'inventorypets:pet_dubstep',
        extraItems: [{ item: 'inventorypets:nugget_coal', count: 5 }, { item: 'minecraft:note_block' }, { item: 'minecraft:emerald' }],
        spirits: [{ type: 'aerial', count: 2 }]
    })

    addOccultismRitual(event, {
        name: 'pet_heart',
        tier: 'afrit',
        output: 'inventorypets:pet_heart',
        duration: 120,
        ingredients: [
            { item: TMPL }, { item: 'minecraft:redstone', count: 5 }, { item: 'minecraft:red_tulip' }, { item: 'minecraft:emerald' }
        ]
    })

    addOccultismRitual(event, {
        name: 'pet_moon',
        tier: 'afrit',
        output: 'inventorypets:pet_moon',
        duration: 120,
        ingredients: [
            { item: TMPL }, { item: 'minecraft:quartz', count: 5 }, { item: 'inventorypets:nugget_diamond' }, { item: 'minecraft:emerald' }
        ]
    })

    addOccultismRitual(event, {
        name: 'pet_pufferfish',
        tier: 'afrit',
        output: 'inventorypets:pet_pufferfish',
        duration: 120,
        ingredients: [
            { item: TMPL }, { item: 'minecraft:gold_nugget', count: 5 }, { item: 'minecraft:glowstone_dust' }, { item: 'minecraft:nether_star' }
        ]
    })

    addOccultismRitual(event, {
        name: 'pet_shield',
        tier: 'afrit',
        output: 'inventorypets:pet_shield',
        duration: 120,
        ingredients: [
            { item: TMPL }, { item: 'minecraft:iron_nugget', count: 6 }, { item: 'minecraft:emerald' }
        ]
    })

    addOccultismRitual(event, {
        name: 'pet_slime',
        tier: 'afrit',
        output: 'inventorypets:pet_slime',
        duration: 120,
        ingredients: [
            { item: TMPL }, { item: 'inventorypets:nugget_emerald', count: 5 }, { item: 'minecraft:golden_apple' }, { item: 'minecraft:nether_star' }
        ]
    })

    addOccultismRitual(event, {
        name: 'pet_sun',
        tier: 'afrit',
        output: 'inventorypets:pet_sun',
        duration: 120,
        ingredients: [
            { item: TMPL }, { item: 'minecraft:gold_ingot', count: 6 }, { item: 'minecraft:nether_star' }
        ]
    })

    addOccultismRitual(event, {
        name: 'pet_grave',
        tier: 'afrit',
        output: 'inventorypets:pet_grave',
        duration: 120,
        ingredients: [
            { item: TMPL }, { item: 'minecraft:bone' }, { item: 'minecraft:stone', count: 4 }, { item: 'minecraft:emerald' }, { item: 'minecraft:chest' }
        ]
    })

    addOccultismRitual(event, {
        name: 'pet_mickerson',
        tier: 'afrit',
        output: 'inventorypets:pet_mickerson',
        duration: 120,
        ingredients: [
            { item: TMPL }, { item: 'inventorypets:nugget_diamond' }, { item: 'inventorypets:nugget_lapis', count: 4 }, { item: 'minecraft:nether_star' }, { item: 'minecraft:gold_ingot' }
        ]
    })

    addOccultismRitual(event, {
        name: 'pet_wither',
        tier: 'afrit',
        output: 'inventorypets:pet_wither',
        duration: 120,
        ingredients: [
            { item: TMPL }, { item: 'minecraft:soul_sand' }, { item: 'inventorypets:nugget_coal', count: 4 }, { item: 'minecraft:nether_star' }, { item: 'minecraft:gold_ingot' }
        ]
    })

    addOccultismRitual(event, {
        name: 'pet_dingot',
        tier: 'marid',
        output: 'inventorypets:pet_dingot',
        duration: 150,
        ingredients: [
            { item: TMPL }, { item: 'minecraft:diamond', count: 5 }, { item: 'minecraft:copper_ingot' }, { item: 'inventorypets:pet_biome' }, { item: 'inventorypets:pet_pingot' }
        ]
    })

    addOccultismRitual(event, {
        name: 'pet_flying_saddle',
        tier: 'marid',
        output: 'inventorypets:pet_flying_saddle',
        duration: 150,
        ingredients: [
            { item: TMPL }, { item: 'minecraft:diamond', count: 7 }, { item: 'inventorypets:pet_saddle' }
        ]
    })

    addOccultismRitual(event, {
        name: 'pet_sated_chest',
        tier: 'marid',
        output: 'inventorypets:pet_sated_chest',
        duration: 150,
        ingredients: [
            { item: TMPL }, { item: 'inventorypets:nugget_diamond', count: 7 }, { item: 'inventorypets:pet_chest' }
        ]
    })

    addOccultismRitual(event, {
        name: 'pet_sated_double_chest',
        tier: 'marid',
        output: 'inventorypets:pet_sated_double_chest',
        duration: 150,
        ingredients: [
            { item: TMPL }, { item: 'inventorypets:nugget_diamond', count: 7 }, { item: 'inventorypets:pet_double_chest' }
        ]
    })

    addOccultismRitual(event, {
        name: 'pet_meta',
        tier: 'marid',
        output: 'inventorypets:pet_meta',
        duration: 200,
        ingredients: [
            { tag: 'inventorypets:all_pets', count: 3 }
        ]
    })

    addOccultismRitual(event, {
        name: 'pet_meta_aoe',
        tier: 'marid',
        output: 'inventorypets:pet_meta_aoe',
        duration: 200,
        ingredients: [
            { tag: 'inventorypets:aoe_pets', count: 4 }
        ]
    })

    addOccultismRitual(event, {
        name: 'pet_meta_fan',
        tier: 'marid',
        output: 'inventorypets:pet_meta_fan',
        duration: 200,
        ingredients: [
            { tag: 'inventorypets:fan_pets', count: 4 }
        ]
    })

    addOccultismRitual(event, {
        name: 'pet_meta_mob',
        tier: 'marid',
        output: 'inventorypets:pet_meta_mob',
        duration: 200,
        ingredients: [
            { tag: 'inventorypets:mob_pets', count: 4 }
        ]
    })

    addOccultismRitual(event, {
        name: 'pet_meta_peaceful',
        tier: 'marid',
        output: 'inventorypets:pet_meta_peaceful',
        duration: 200,
        ingredients: [
            { tag: 'inventorypets:peaceful_pets', count: 4 }
        ]
    })

    addOccultismRitual(event, {
        name: 'pet_meta_special',
        tier: 'marid',
        output: 'inventorypets:pet_meta_special',
        duration: 200,
        ingredients: [
            { tag: 'inventorypets:special_pets', count: 4 }
        ]
    })

    addOccultismRitual(event, {
        name: 'pet_meta_utility',
        tier: 'marid',
        output: 'inventorypets:pet_meta_utility',
        duration: 200,
        ingredients: [
            { tag: 'inventorypets:utility_pets', count: 4 }
        ]
    })

    addOccultismRitual(event, {
        name: 'pet_meta_youtuber',
        tier: 'marid',
        output: 'inventorypets:pet_meta_youtuber',
        duration: 200,
        ingredients: [
            { tag: 'inventorypets:youtuber_pets', count: 4 }
        ]
    })

    addOccultismRitual(event, {
        name: 'pet_meta_25',
        tier: 'marid',
        output: 'inventorypets:pet_meta_25',
        duration: 200,
        ingredients: [
            { tag: 'inventorypets:legendary_pets' }, { tag: 'inventorypets:nonlegendary_pets', count: 3 }
        ]
    })

    addOccultismRitual(event, {
        name: 'pet_meta_50',
        tier: 'marid',
        output: 'inventorypets:pet_meta_50',
        duration: 200,
        ingredients: [
            { tag: 'inventorypets:legendary_pets', count: 2 }, { tag: 'inventorypets:nonlegendary_pets', count: 2 }
        ]
    })

    addOccultismRitual(event, {
        name: 'pet_meta_75',
        tier: 'marid',
        output: 'inventorypets:pet_meta_75',
        duration: 200,
        ingredients: [
            { tag: 'inventorypets:legendary_pets', count: 3 }, { tag: 'inventorypets:nonlegendary_pets' }
        ]
    })

    addOccultismRitual(event, {
        name: 'pet_meta_100',
        tier: 'marid',
        output: 'inventorypets:pet_meta_100',
        duration: 200,
        ingredients: [
            { tag: 'inventorypets:legendary_pets', count: 4 }
        ]
    })
})
