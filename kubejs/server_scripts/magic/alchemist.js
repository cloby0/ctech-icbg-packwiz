ServerEvents.recipes(event => {
    event.remove ({ id: 'reliquary:alkahestry_tome' })

    // Wizard Brain: a tome of stored transmutation knowledge is automation of complex process.
    addEldrinAltarRecipe(event, {
        output: 'reliquary:alkahestry_tome',
        items: ['minecraft:book', 'gtceu:prima_materia_plate', 'minecraft:redstone_block', 'kubejs:animus_sigil', 'minecraft:experience_bottle', 'kubejs:animus_wizard_brain'],
        affinity: 'arcane',
        power: 2 * LP.ALCHEMIST
    })

    // Pure Daisy previously re-gated to Alchemist (Eldrin Altar, prima_materia_rod) -- broke
    // progression pack-wide: Livingrock (Pure Daisy's own output) feeds the vanilla Mana Pool
    // (5x livingrock, botania:mana_pool.json) that Apprentice's own Manasteel recipe infuses
    // through (addManaPondRecipe registers a real botania:mana_infusion recipe, not just the
    // GT multiblock route). Reverted to vanilla: petal_apothecary reagent is plain seeds/petals,
    // genuinely Hobbyist-tier accessible, matching Botania's own "most important early flower"
    // design intent. Per user direction 2026-07-31.

    addEldrinAltarRecipe(event, {
        output: 'gtceu:concepts_bucket',
        items: ['minecraft:bucket', 'gtceu:prima_materia_block', 'minecraft:experience_bottle', 'minecraft:experience_bottle', 'hexcasting:charged_amethyst'],
        affinity: 'arcane',
        power: LP.ALCHEMIST
    })

    addMnaManaweavingRecipe(event, {
        output: 'gtceu:metal_form_bucket',
        items: ['gtceu:concepts_bucket', 'gtceu:holy_silver_block'],
        patterns: ['mna:triangle', 'mna:slash'],
        tier: 3
    })

    // otherworld_essence is renewable via the Datura farming loop (occultism.js spirit_fire
    // recipes), no spirit-tier ceiling -- works as an ongoing Occultism tax through the top
    // half of the tree, where there's no higher spirit to summon past Marid (Sorcerer).
    addEldrinAltarRecipe(event, {
        output: 'kubejs:disorganized_metal_form',
        items: ['gtceu:metal_form_bucket', 'ad_astra:ice_shard', 'ad_astra:ice_shard', 'ad_astra:ice_shard', 'occultism:otherworld_essence'],
        affinity: 'water',
        power: LP.ALCHEMIST
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

    // abstract_metal_ingot -> manasteel_ingot dropped: Apprentice's zanite chain already makes
    // manasteel far cheaper. No reason to keep a harder, less profitable duplicate recipe for
    // the same output this many tiers later. Per user direction 2026-07-28.

    // Ore-sort family (abstract_metal_ingot + essence tags -> named metal) -- refine steps, not
    // rituals. Moved to the Manaweaving Altar. Single-essence members below, two-essence after.
    addMnaManaweavingRecipe(event, {
        output: 'minecraft:gold_ingot',
        items: ['gtceu:abstract_metal_ingot', '#kubejs:fire_essences'],
        patterns: ['mna:triangle', 'mna:backslash'],
        tier: 3
    })
    addMnaManaweavingRecipe(event, {
        output: 'gtceu:tin_ingot',
        items: ['gtceu:abstract_metal_ingot', '#kubejs:water_essences'],
        patterns: ['mna:circle', 'mna:slash'],
        tier: 3
    })
    addMnaManaweavingRecipe(event, {
        output: 'gtceu:lead_ingot',
        items: ['gtceu:abstract_metal_ingot', '#kubejs:earth_essences'],
        patterns: ['mna:square', 'mna:backslash'],
        tier: 3
    })
    addMnaManaweavingRecipe(event, {
        output: 'gtceu:aluminium_ingot',
        items: ['gtceu:abstract_metal_ingot', '#kubejs:air_essences'],
        patterns: ['mna:slash', 'mna:backslash'],
        tier: 3
    })

    addMnaManaweavingRecipe(event, {
        output: 'gtceu:bismuth_ingot',
        items: ['gtceu:abstract_metal_ingot', '#kubejs:fire_essences', '#kubejs:water_essences'],
        patterns: ['mna:triangle', 'mna:circle'],
        tier: 3
    })
    addMnaManaweavingRecipe(event, {
        output: 'minecraft:copper_ingot',
        items: ['gtceu:abstract_metal_ingot', '#kubejs:fire_essences', '#kubejs:earth_essences'],
        patterns: ['mna:triangle', 'mna:square'],
        tier: 3
    })
    addMnaManaweavingRecipe(event, {
        output: 'gtceu:silver_ingot',
        items: ['gtceu:abstract_metal_ingot', '#kubejs:water_essences', '#kubejs:air_essences'],
        patterns: ['mna:circle', 'mna:diamond'],
        tier: 3
    })
    addMnaManaweavingRecipe(event, {
        output: 'gtceu:magnesium_dust',
        items: ['gtceu:abstract_metal_ingot', '#kubejs:earth_essences', '#kubejs:air_essences'],
        patterns: ['mna:square', 'mna:diamond'],
        tier: 3
    })
    addMnaManaweavingRecipe(event, {
        output: 'gtceu:holy_silver_ingot',
        // Distinct pattern pair from silver_ingot above: same patterns plus a superset item list
        // is ambiguous, and the player would have hit silver by accident.
        items: ['gtceu:abstract_metal_ingot', '#kubejs:water_essences', '#kubejs:air_essences', '#forge:gems/ambrosium'],
        patterns: ['mna:circle', 'mna:knot'],
        tier: 3
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
        items: ['hexcasting:charged_amethyst', 'gtceu:holy_silver_rod', 'gtceu:holy_silver_rod', 'gtceu:abstract_metal_ingot', 'minecraft:glowstone'],
        affinity: 'arcane',
        power: LP.ALCHEMIST
    })

    // The one fix that unblocks the whole ~20-recipe hexcasting chain below: source_gem (dead)
    // -> 2x arcane_residue (this tier's own new Distilled Animus intermediate).
    addEldrinAltarRecipe(event, {
        output: 'kubejs:hexed_mana_matrix',
        items: [
            'kubejs:hexed_amethyst_core',
            'gtceu:holy_silver_plate', 'gtceu:holy_silver_plate',
            'botania:mana_pearl', 'botania:mana_pearl',
            'kubejs:arcane_residue', 'kubejs:arcane_residue'
        ],
        affinity: 'arcane',
        power: 2 * LP.ALCHEMIST
    })

    // Circuit: a staff is the tier's central casting device, same role copper_spell_book played
    // at Hobbyist -- filled into the shared pattern's one open slot for all 14 wood variants.
    event.remove({ output: /hexcasting:staff\// })
    const staffPattern = ['ZSA', ' WB', 'CX ']
    const staffKey = (w) => ({ S: 'minecraft:stick', A: 'kubejs:hexed_amethyst_core', W: w, Z: '#forge:tools/saws', X: 'kubejs:animus_sigil', B: 'kubejs:animus_wizard_brain', C: 'kubejs:animus_channeling_vessel' })
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

    // Channeling Vessel: a lens focuses and channels light/magic through it.
    event.remove({ id: 'hexcasting:lens' })
    event.shaped('hexcasting:lens', ['FCV', 'CAX', ' C '], {
        C: 'minecraft:glass',
        A: 'kubejs:hexed_amethyst_core',
        F: '#forge:tools/files',
        V: 'kubejs:animus_channeling_vessel',
        X: 'kubejs:animus_sigil',
    }).damageIngredient(Ingredient.of('#forge:tools/files'))

    // Wizard Brain: a thought knot is literally stored/looped thought (iota storage).
    event.remove({ id: 'hexcasting:thought_knot' })
    event.shapeless('hexcasting:thought_knot', ['kubejs:hexed_amethyst_core', 'minecraft:string', 'kubejs:animus_wizard_brain', 'kubejs:animus_sigil', '#forge:tools/wire_cutters']).damageIngredient(Ingredient.of('#forge:tools/wire_cutters'))

    event.remove({ id: 'hexcasting:slate' })
    event.shaped('6x hexcasting:slate', ['HA ', 'SXS'], {
        A: 'kubejs:hexed_amethyst_core',
        S: 'minecraft:deepslate',
        H: '#forge:tools/hammers',
        X: 'kubejs:animus_sigil',
    }).damageIngredient(Ingredient.of('#forge:tools/hammers'))

    // Wizard Brain: a cypher encodes a single stored pattern for reuse -- stored logic.
    event.remove({ id: 'hexcasting:cypher' })
    event.shaped('hexcasting:cypher', ['FCX', 'YAC', ' C '], {
        C: '#forge:ingots/copper',
        A: 'kubejs:hexed_amethyst_core',
        F: '#forge:tools/files',
        X: 'kubejs:animus_wizard_brain',
        Y: 'kubejs:animus_sigil',
    }).damageIngredient(Ingredient.of('#forge:tools/files'))

    event.remove({ id: 'hexcasting:scroll_small' })
    event.shaped('hexcasting:scroll_small', ['KA', 'P '], {
        A: 'kubejs:hexed_amethyst_core',
        P: 'minecraft:paper',
        K: '#forge:tools/knives',
    }).damageIngredient(Ingredient.of('#forge:tools/knives'))

    event.remove({ id: 'hexcasting:scroll_medium' })
    event.shaped('hexcasting:scroll_medium', ['K A', 'XP ', 'BP '], {
        A: 'kubejs:hexed_amethyst_core',
        P: 'minecraft:paper',
        K: '#forge:tools/knives',
        X: 'kubejs:animus_sigil',
        B: 'kubejs:animus_wizard_brain',
    }).damageIngredient(Ingredient.of('#forge:tools/knives'))

    event.remove({ id: 'hexcasting:scroll' })
    event.shaped('hexcasting:scroll', ['PXA', 'PPP', 'BPK'], {
        A: 'kubejs:hexed_amethyst_core',
        P: 'minecraft:paper',
        K: '#forge:tools/knives',
        X: 'kubejs:animus_sigil',
        B: 'kubejs:animus_wizard_brain',
    }).damageIngredient(Ingredient.of('#forge:tools/knives'))

    event.remove({ id: 'hexcasting:scroll_paper' })
    event.shaped('8x hexcasting:scroll_paper', ['PXP', 'PAP', 'BPK'], {
        P: 'minecraft:paper',
        A: 'kubejs:hexed_amethyst_core',
        K: '#forge:tools/knives',
        X: 'kubejs:animus_sigil',
        B: 'kubejs:animus_wizard_brain',
    }).damageIngredient(Ingredient.of('#forge:tools/knives'))

    // Wizard Brain: an abacus is a literal computation/counting device.
    event.remove({ id: 'hexcasting:abacus' })
    event.shaped('hexcasting:abacus', ['MYX', 'SAS', 'WAW'], {
        W: '#minecraft:planks',
        A: 'kubejs:hexed_amethyst_core',
        S: 'minecraft:stick',
        M: '#forge:tools/mallets',
        X: 'kubejs:animus_wizard_brain',
        Y: 'kubejs:animus_sigil',
    }).damageIngredient(Ingredient.of('#forge:tools/mallets'))

    // Channeling Vessel: a bookshelf/connector stores and channels knowledge flow.
    event.remove({ id: 'hexcasting:akashic_bookshelf' })
    event.shaped('hexcasting:akashic_bookshelf', ['ZPV', 'XAC', 'LPL'], {
        L: '#hexcasting:edified_logs',
        P: '#hexcasting:edified_planks',
        C: 'minecraft:book',
        A: 'kubejs:hexed_mana_matrix',
        Z: '#forge:tools/saws',
        V: 'kubejs:animus_channeling_vessel',
        X: 'kubejs:animus_sigil',
    }).damageIngredient(Ingredient.of('#forge:tools/saws'))

    event.remove({ id: 'hexcasting:akashic_connector' })
    event.shaped('4x hexcasting:akashic_connector', ['ZXV', '12A', 'LPL'], {
        L: '#hexcasting:edified_logs',
        P: '#hexcasting:edified_planks',
        '1': 'hexcasting:amethyst_dust',
        '2': 'minecraft:amethyst_shard',
        A: 'kubejs:hexed_mana_matrix',
        Z: '#forge:tools/saws',
        V: 'kubejs:animus_channeling_vessel',
        X: 'kubejs:animus_sigil',
    }).damageIngredient(Ingredient.of('#forge:tools/saws'))

    event.remove({ id: 'hexcasting:focus' })
    event.remove({ id: 'hexcasting:focus_rotated' })
    // Circuit: focus and spellbook are the tier's own core casting devices (focus is the
    // hand-held caster, spellbook the written form) -- same role as Hobbyist's spell books.
    addEldrinAltarRecipe(event, {
        output: 'hexcasting:focus',
        items: ['minecraft:leather', 'gtceu:holy_silver_rod', 'gtceu:holy_silver_rod', 'kubejs:hexed_mana_matrix', 'minecraft:glowstone', 'kubejs:animus_wizard_brain', 'kubejs:animus_sigil'],
        affinity: 'arcane',
        power: LP.ALCHEMIST
    })

    event.remove({ id: 'hexcasting:spellbook' })
    addEldrinAltarRecipe(event, {
        output: 'hexcasting:spellbook',
        items: ['minecraft:writable_book', 'gtceu:holy_silver_plate', 'kubejs:animus_wizard_brain', 'kubejs:hexed_mana_matrix', 'gtceu:abstract_metal_ingot', 'minecraft:chorus_fruit', 'kubejs:animus_sigil'],
        affinity: 'ender',
        power: LP.ALCHEMIST
    })

    // Wizard Brain: an artifact stores and can rebroadcast a spell -- unattended casting logic.
    event.remove({ id: 'hexcasting:artifact' })
    addEldrinAltarRecipe(event, {
        output: 'hexcasting:artifact',
        items: ['#minecraft:music_discs', 'gtceu:holy_silver_plate', 'kubejs:animus_sigil', 'kubejs:hexed_mana_matrix', 'kubejs:hexed_mana_matrix', 'gtceu:abstract_metal_ingot', 'kubejs:animus_wizard_brain'],
        affinity: 'arcane',
        power: LP.ALCHEMIST
    })

    // Ward Lattice: a worn trinket is a passive protective effect.
    event.remove({ id: 'hexcasting:trinket' })
    event.shaped('hexcasting:trinket', ['HXF', 'MAM', 'WMW'], {
        M: 'gtceu:holy_silver_plate',
        A: 'kubejs:hexed_mana_matrix',
        H: '#forge:tools/hammers',
        F: '#forge:tools/files',
        W: 'kubejs:animus_ward_lattice',
        X: 'kubejs:animus_sigil',
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

    // Shortcut (Thaumaturge+, Citrinitas worn): Alembic/Distillery fabricates the ingot straight
    // from materia, real wisdom-field gate (wisdom_stone_citrinitas, wisdom:2).
    event.custom({
        type: 'magichem:distillation_fabrication',
        wisdom: 2,
        categories: 1,
        output_rate: 1.0,
        batch_size: 3,
        object: { item: 'gtceu:distilled_animus_ingot' },
        components: [
            { item: 'magichem:essentia_arcane', count: 50 },
            { item: 'magichem:admixture_change', count: 30 },
            { item: 'magichem:essentia_citrinitas', count: 25 }
        ]
    })

    // --- Microcrafting: Alchemist circuit + components ---
    // Circuit built through 2 real handlers: Soul Forge -> Alchemy Table.
    addSoulForgeRecipe(event, {
        output: 'kubejs:animus_sigil_blank',
        inputs: ['gtceu:distilled_animus_ingot', 'kubejs:arcane_residue', 'botania:mana_pearl'],
        drain: 20,
        minimumDrain: 400
    })

    addAlchemyTableRecipe(event, {
        output: 'kubejs:animus_sigil',
        input: ['kubejs:animus_sigil_blank', 'kubejs:hexed_mana_matrix'],
        syphon: LP.ALCHEMIST,
        ticks: 200
    })

    // Wizard Brain: Eldrin Altar (3rd distinct handler for this tier's item set).
    addEldrinAltarRecipe(event, {
        output: 'kubejs:animus_wizard_brain',
        items: ['gtceu:distilled_animus_ingot', 'kubejs:hexed_amethyst_core', 'botania:mana_diamond'],
        affinity: 'ARCANE', power: Source.ALCHEMIST,
        tier: 3
    })

    // Center item = role signal: rod (kinetic) / ingot (flow) / plate (containment).
    addComponentRecipe(event, 'kubejs:animus_motive_core', [
        'gtceu:distilled_animus_rod', 'gtceu:distilled_animus_ingot', 'botania:mana_pearl'
    ])
    addComponentRecipe(event, 'kubejs:animus_channeling_vessel', [
        'gtceu:distilled_animus_ingot', 'kubejs:arcane_residue', 'occultism:otherworld_essence'
    ])
    addComponentRecipe(event, 'kubejs:animus_ward_lattice', [
        'gtceu:distilled_animus_plate', 'gtceu:distilled_animus_ingot', 'kubejs:hexed_mana_matrix'
    ])
})
