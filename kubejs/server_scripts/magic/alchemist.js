ServerEvents.recipes(event => {
    event.remove ({ id: 'reliquary:alkahestry_tome' })

    addEldrinAltarRecipe(event, {
        output: 'reliquary:alkahestry_tome',
        items: ['minecraft:book', 'gtceu:prima_materia_plate', 'minecraft:redstone_block', 'minecraft:redstone_block', 'minecraft:experience_bottle'],
        affinity: 'arcane',
        power: 2 * LP.ALCHEMIST
    })

    event.remove({ id: "botania:petal_apothecary/pure_daisy" })

    // MysticalAg rule (same as 05-sorcerer.md): default recipe drops the hard MysticalAg
    // requirement (2x earth_essence -> a third essence tag + a plain earth-flavored item); a
    // second alternate keeps the MysticalAg essence, cheaper, as the reward-for-investment route.
    // ars_nouveau:magebloom_crop reagent was dead too (same open fiber question) -- wheat_seeds.
    addEldrinAltarRecipe(event, {
        output: 'botania:pure_daisy',
        items: ['minecraft:wheat_seeds', 'gtceu:holy_silver_dust', 'gtceu:prima_materia_rod', '#kubejs:earth_essences', 'minecraft:dirt'],
        affinity: 'earth',
        power: 2 * LP.ALCHEMIST
    })

    addEldrinAltarRecipe(event, {
        output: 'botania:pure_daisy',
        items: ['minecraft:wheat_seeds', 'gtceu:holy_silver_dust', 'gtceu:prima_materia_rod', 'mysticalagriculture:earth_essence', 'mysticalagriculture:earth_essence'],
        affinity: 'earth',
        power: LP.ALCHEMIST
    })

    addEldrinAltarRecipe(event, {
        output: 'gtceu:concepts_bucket',
        items: ['minecraft:bucket', 'gtceu:prima_materia_block', 'minecraft:experience_bottle', 'minecraft:experience_bottle', 'hexcasting:charged_amethyst'],
        affinity: 'arcane',
        power: LP.ALCHEMIST
    })

    addEldrinAltarRecipe(event, {
        output: 'gtceu:metal_form_bucket',
        items: ['gtceu:concepts_bucket', 'gtceu:holy_silver_block'],
        affinity: 'fire',
        power: 2 * LP.ALCHEMIST
    })

    // otherworld_essence is renewable via the Datura farming loop (occultism.js spirit_fire
    // recipes), no spirit-tier ceiling -- works as an ongoing Occultism tax through the top
    // half of the tree, where there's no higher spirit to summon past Marid (Sorcerer).
    // MysticalAg rule again: default drops the 3x ice_essence hard requirement for ad_astra's
    // ice_shard (already an established item elsewhere, per thaumaturge.js); alternate keeps it.
    addEldrinAltarRecipe(event, {
        output: 'kubejs:disorganized_metal_form',
        items: ['gtceu:metal_form_bucket', 'ad_astra:ice_shard', 'ad_astra:ice_shard', 'ad_astra:ice_shard', 'occultism:otherworld_essence'],
        affinity: 'water',
        power: LP.ALCHEMIST
    })

    addEldrinAltarRecipe(event, {
        output: 'kubejs:disorganized_metal_form',
        items: ['gtceu:metal_form_bucket', 'mysticalagriculture:ice_essence', 'mysticalagriculture:ice_essence', 'mysticalagriculture:ice_essence', 'occultism:otherworld_essence'],
        affinity: 'water',
        power: LP.ALCHEMIST / 2
    })

    event.smelting('gtceu:abstract_metal_ingot', 'kubejs:disorganized_metal_form')

    // Repeat-friendly bypass for the ritual chain above: once the mana pond is built,
    // skip concepts_bucket -> metal_form_bucket -> disorganized_metal_form per ingot.
    addManaPondRecipe(event, {
        input: { item: 'minecraft:iron_ingot' },
        mana: 2 * Mana.ALCHEMIST,
        catalyst: { type: 'block', block: 'botania:alchemy_catalyst' },
        output: { item: 'gtceu:abstract_metal_ingot' }
    })

    addManaPondRecipe(event, {
        input: { item: 'gtceu:abstract_metal_ingot' },
        mana: Mana.ALCHEMIST,
        output: { item: 'botania:manasteel_ingot' }
    })

    event.shapeless('minecraft:gold_ingot',   ['gtceu:abstract_metal_ingot', '#kubejs:fire_essences'])
    event.shapeless('gtceu:tin_ingot',       ['gtceu:abstract_metal_ingot', '#kubejs:water_essences'])
    event.shapeless('gtceu:lead_ingot',      ['gtceu:abstract_metal_ingot', '#kubejs:earth_essences'])
    event.shapeless('gtceu:aluminium_ingot', ['gtceu:abstract_metal_ingot', '#kubejs:air_essences'])

    addEldrinAltarRecipe(event, {
        output: 'gtceu:bismuth_ingot',
        items: ['gtceu:abstract_metal_ingot', '#kubejs:fire_essences', '#kubejs:water_essences'],
        affinity: 'fire',
        power: LP.ALCHEMIST
    })
    addEldrinAltarRecipe(event, {
        output: 'minecraft:copper_ingot',
        items: ['gtceu:abstract_metal_ingot', '#kubejs:fire_essences', '#kubejs:earth_essences'],
        affinity: 'fire',
        power: LP.ALCHEMIST
    })
    addEldrinAltarRecipe(event, {
        output: 'gtceu:silver_ingot',
        items: ['gtceu:abstract_metal_ingot', '#kubejs:water_essences', '#kubejs:air_essences'],
        affinity: 'water',
        power: LP.ALCHEMIST
    })
    addEldrinAltarRecipe(event, {
        output: 'gtceu:magnesium_dust',
        items: ['gtceu:abstract_metal_ingot', '#kubejs:earth_essences', '#kubejs:air_essences'],
        affinity: 'earth',
        power: LP.ALCHEMIST
    })
    addEldrinAltarRecipe(event, {
        output: 'gtceu:holy_silver_ingot',
        items: ['gtceu:abstract_metal_ingot', '#kubejs:water_essences', '#kubejs:air_essences', '#forge:gems/ambrosium'],
        affinity: 'water',
        power: LP.ALCHEMIST
    })

    // raw_mana -> source_gem: dead output, Source Gem retired pack-wide since 03-journeyman.md.
    // Dropped outright, not a new decision.

    // glowstone -> luminessence_dust x4: bulk production of the old Apprentice signature
    // material, which no longer exists. Dropped outright.

    addManaPondRecipe(event, {
        input: { tag: 'forge:ingots/silver' },
        mana: Mana.ALCHEMIST,
        catalyst: { type: 'block', block: 'botania:alchemy_catalyst' },
        output: { item: 'gtceu:holy_silver_ingot' }
    })


    addEldrinAltarRecipe(event, {
        output: 'kubejs:hexed_amethyst_core',
        items: ['hexcasting:charged_amethyst', 'gtceu:manasteel_rod', 'gtceu:manasteel_rod', 'gtceu:abstract_metal_ingot', 'minecraft:glowstone'],
        affinity: 'arcane',
        power: LP.ALCHEMIST
    })

    // The one fix that unblocks the whole ~20-recipe hexcasting chain below: source_gem (dead)
    // -> 2x arcane_residue (this tier's own new Distilled Animus intermediate).
    addEldrinAltarRecipe(event, {
        output: 'kubejs:hexed_mana_matrix',
        items: [
            'kubejs:hexed_amethyst_core',
            'gtceu:manasteel_plate', 'gtceu:manasteel_plate',
            'botania:mana_pearl', 'botania:mana_pearl',
            'kubejs:arcane_residue', 'kubejs:arcane_residue'
        ],
        affinity: 'arcane',
        power: 2 * LP.ALCHEMIST
    })

    event.remove({ output: /hexcasting:staff\// })
    const staffPattern = ['ZSA', ' WS', 'S  ']
    const staffKey = (w) => ({ S: 'minecraft:stick', A: 'kubejs:hexed_amethyst_core', W: w, Z: '#forge:tools/saws' })
    ;[
        ['minecraft:oak_planks',                     'hexcasting:staff/oak'],
        ['minecraft:birch_planks',                   'hexcasting:staff/birch'],
        ['minecraft:spruce_planks',                  'hexcasting:staff/spruce'],
        ['minecraft:jungle_planks',                  'hexcasting:staff/jungle'],
        ['minecraft:acacia_planks',                  'hexcasting:staff/acacia'],
        ['minecraft:dark_oak_planks',                'hexcasting:staff/dark_oak'],
        ['minecraft:mangrove_planks',                'hexcasting:staff/mangrove'],
        ['minecraft:bamboo_planks',                  'hexcasting:staff/bamboo'],
        ['minecraft:cherry_planks',                  'hexcasting:staff/cherry'],
        ['minecraft:crimson_planks',                 'hexcasting:staff/crimson'],
        ['minecraft:warped_planks',                  'hexcasting:staff/warped'],
        ['hexcasting:edified_planks',                'hexcasting:staff/edified'],
        ['hexcasting:quenched_allay_shard',          'hexcasting:staff/quenched'],
        ['#hexcasting:brainswept_circle_components', 'hexcasting:staff/mindsplice'],
    ].forEach(([w, result]) => event.shaped(result, staffPattern, staffKey(w)).damageIngredient(Ingredient.of('#forge:tools/saws')))

    event.remove({ id: 'hexcasting:lens' })
    event.shaped('hexcasting:lens', ['FC ', 'CAC', ' C '], {
        C: 'minecraft:glass',
        A: 'kubejs:hexed_amethyst_core',
        F: '#forge:tools/files',
    }).damageIngredient(Ingredient.of('#forge:tools/files'))

    event.remove({ id: 'hexcasting:thought_knot' })
    event.shapeless('hexcasting:thought_knot', ['kubejs:hexed_amethyst_core', 'minecraft:string', '#forge:tools/wire_cutters']).damageIngredient(Ingredient.of('#forge:tools/wire_cutters'))

    event.remove({ id: 'hexcasting:slate' })
    event.shaped('6x hexcasting:slate', ['HA ', 'SSS'], {
        A: 'kubejs:hexed_amethyst_core',
        S: 'minecraft:deepslate',
        H: '#forge:tools/hammers',
    }).damageIngredient(Ingredient.of('#forge:tools/hammers'))

    event.remove({ id: 'hexcasting:cypher' })
    event.shaped('hexcasting:cypher', ['FC ', 'CAC', ' C '], {
        C: '#forge:ingots/copper',
        A: 'kubejs:hexed_amethyst_core',
        F: '#forge:tools/files',
    }).damageIngredient(Ingredient.of('#forge:tools/files'))

    event.remove({ id: 'hexcasting:scroll_small' })
    event.shaped('hexcasting:scroll_small', ['KA', 'P '], {
        A: 'kubejs:hexed_amethyst_core',
        P: 'minecraft:paper',
        K: '#forge:tools/knives',
    }).damageIngredient(Ingredient.of('#forge:tools/knives'))

    event.remove({ id: 'hexcasting:scroll_medium' })
    event.shaped('hexcasting:scroll_medium', ['K A', 'PP ', 'PP '], {
        A: 'kubejs:hexed_amethyst_core',
        P: 'minecraft:paper',
        K: '#forge:tools/knives',
    }).damageIngredient(Ingredient.of('#forge:tools/knives'))

    event.remove({ id: 'hexcasting:scroll' })
    event.shaped('hexcasting:scroll', ['PPA', 'PPP', 'PPK'], {
        A: 'kubejs:hexed_amethyst_core',
        P: 'minecraft:paper',
        K: '#forge:tools/knives',
    }).damageIngredient(Ingredient.of('#forge:tools/knives'))

    event.remove({ id: 'hexcasting:scroll_paper' })
    event.shaped('8x hexcasting:scroll_paper', ['PPP', 'PAP', 'PPK'], {
        P: 'minecraft:paper',
        A: 'kubejs:hexed_amethyst_core',
        K: '#forge:tools/knives',
    }).damageIngredient(Ingredient.of('#forge:tools/knives'))

    event.remove({ id: 'hexcasting:abacus' })
    event.shaped('hexcasting:abacus', ['MAW', 'SAS', 'WAW'], {
        W: '#minecraft:planks',
        A: 'kubejs:hexed_amethyst_core',
        S: 'minecraft:stick',
        M: '#forge:tools/mallets',
    }).damageIngredient(Ingredient.of('#forge:tools/mallets'))

    event.remove({ id: 'hexcasting:akashic_bookshelf' })
    event.shaped('hexcasting:akashic_bookshelf', ['ZPL', 'CAC', 'LPL'], {
        L: '#hexcasting:edified_logs',
        P: '#hexcasting:edified_planks',
        C: 'minecraft:book',
        A: 'kubejs:hexed_mana_matrix',
        Z: '#forge:tools/saws',
    }).damageIngredient(Ingredient.of('#forge:tools/saws'))

    event.remove({ id: 'hexcasting:akashic_connector' })
    event.shaped('4x hexcasting:akashic_connector', ['ZPL', '12A', 'LPL'], {
        L: '#hexcasting:edified_logs',
        P: '#hexcasting:edified_planks',
        '1': 'hexcasting:amethyst_dust',
        '2': 'minecraft:amethyst_shard',
        A: 'kubejs:hexed_mana_matrix',
        Z: '#forge:tools/saws',
    }).damageIngredient(Ingredient.of('#forge:tools/saws'))

    event.remove({ id: 'hexcasting:focus' })
    event.remove({ id: 'hexcasting:focus_rotated' })
    addEldrinAltarRecipe(event, {
        output: 'hexcasting:focus',
        items: ['minecraft:leather', 'gtceu:manasteel_rod', 'gtceu:manasteel_rod', 'kubejs:hexed_mana_matrix', 'minecraft:glowstone', 'minecraft:glowstone'],
        affinity: 'arcane',
        power: LP.ALCHEMIST
    })

    event.remove({ id: 'hexcasting:spellbook' })
    addEldrinAltarRecipe(event, {
        output: 'hexcasting:spellbook',
        items: ['minecraft:writable_book', 'gtceu:manasteel_plate', 'gtceu:manasteel_plate', 'kubejs:hexed_mana_matrix', 'gtceu:abstract_metal_ingot', 'minecraft:chorus_fruit'],
        affinity: 'ender',
        power: LP.ALCHEMIST
    })

    event.remove({ id: 'hexcasting:artifact' })
    addEldrinAltarRecipe(event, {
        output: 'hexcasting:artifact',
        items: ['#minecraft:music_discs', 'gtceu:manasteel_plate', 'gtceu:manasteel_plate', 'kubejs:hexed_mana_matrix', 'kubejs:hexed_mana_matrix', 'gtceu:abstract_metal_ingot'],
        affinity: 'arcane',
        power: LP.ALCHEMIST
    })

    event.remove({ id: 'hexcasting:trinket' })
    event.shaped('hexcasting:trinket', ['HMF', 'MAM', ' M '], {
        M: 'gtceu:manasteel_plate',
        A: 'kubejs:hexed_mana_matrix',
        H: '#forge:tools/hammers',
        F: '#forge:tools/files',
    }).damageIngredient(Ingredient.of('#forge:tools/hammers')).damageIngredient(Ingredient.of('#forge:tools/files'))

    // hex_ars_link:linker_base: hex_ars_link is one of the 12 cut Ars addons. This recipe
    // crafts an item that no longer exists -- dropped outright, no port.

    // --- Distilled Animus: Alchemist signature material ---
    // "Combine at Alembic" per the design spec doesn't literally map onto MagiChem's real
    // mechanic (distillation_fabrication only pairs an item with its OWN pure-materia signature,
    // it isn't a general two-item combine) -- verified against the mod's actual recipe JSON
    // before writing this. Magic spine stays GT-free: hand combine, no machine needed.
    event.shapeless('kubejs:arcane_residue', ['mna:animus_dust', 'magichem:essentia_arcane'])

    // Soul Forge takes 4 fixed item slots (verified against the mod's recipe JSON) -- the
    // Destructive Will cost is the consumed basemonstersoul_destructive item itself, same
    // pattern 05-sorcerer.md used for its Demon Will types.
    addSoulForgeRecipe(event, {
        output: 'kubejs:animus_fragment',
        inputs: ['kubejs:arcane_residue', 'bloodmagic:basemonstersoul_destructive', 'minecraft:soul_sand', 'minecraft:magma_cream'],
        drain: 20,
        minimumDrain: 400
    })

    // Distillery step: Occultism crushing straight into the real GT dust form -- no GT machine.
    event.custom({
        type: 'occultism:crushing',
        ingredient: { item: 'kubejs:animus_fragment' },
        result: { item: 'gtceu:distilled_animus_dust' },
    }).id('kubejs:crushing/animus_fragment_to_distilled_animus_dust')

    // blastTemp still autogens a GT EBF route to the ingot (harmless, unused if GT is skipped) --
    // this Alchemy Table recipe is the magic-only finish, same non-GT-finish pattern as Hobbyist's
    // Ashen Ichor (Spirit Altar straight to the real ingot, bypassing the EBF requirement).
    addAlchemyTableRecipe(event, {
        output: 'gtceu:distilled_animus_ingot',
        input: ['gtceu:distilled_animus_dust'],
        syphon: LP.ALCHEMIST
    })

    // Shortcut (Thaumaturge+): direct to the finished ingot, gated on tier attainment not this file.
    event.shapeless('gtceu:distilled_animus_ingot', [
        'mna:animus_dust', 'magichem:essentia_arcane', '#kubejs:magic/thaumaturge'
    ])
})
