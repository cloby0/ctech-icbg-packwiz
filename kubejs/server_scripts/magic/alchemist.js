ServerEvents.recipes(event => {
    event.remove ({ id: 'reliquary:alkahestry_tome' })

    // Wizard Brain: a tome of stored transmutation knowledge is automation of complex process.
    addEldrinAltarRecipe(event, {
        output: 'reliquary:alkahestry_tome',
        items: ['minecraft:book', 'gtceu:prima_materia_plate', 'minecraft:redstone_block', 'kubejs:animus_sigil', 'minecraft:experience_bottle', 'kubejs:animus_wizard_brain'],
        affinity: 'arcane',
        power: 2 * LP.ALCHEMIST,
        tier: 4
    })

    // Pure Daisy previously re-gated to Alchemist (Eldrin Altar, prima_materia_rod) -- broke
    // progression pack-wide: Livingrock (Pure Daisy's own output) feeds the vanilla Mana Pool
    // (5x livingrock, botania:mana_pool.json) that Apprentice's own Manasteel recipe infuses
    // through (addManaPondRecipe registers a real botania:mana_infusion recipe, not just the
    // GT multiblock route). Reverted to vanilla: petal_apothecary reagent is plain seeds/petals,
    // genuinely Hobbyist-tier accessible, matching Botania's own "most important early flower"
    // design intent. Per user direction 2026-07-31.

    // --- Abstract Metal line REMOVED 2026-08-04 ---
    // The whole concepts_bucket -> metal_form_bucket -> disorganized_metal_form ->
    // abstract_metal_ingot chain, the Mana Pond iron bypass, and the nine "abstract ingot +
    // essence tag -> named metal" ore-sort recipes are gone. It was a leftover from when Manasteel
    // lived at this tier, it was a strictly worse way to automate ores than Occultism's miner
    // spirits, and its `disorganized_metal_form` step consumed ad_astra:ice_shard -- a Moon-only
    // resource, i.e. a hard tech-line dependency inside the magic lane. Every downstream consumer
    // was repointed to gtceu:prima_materia_ingot.
    //
    // gtceu:concepts_bucket survives as a craftable container (it is the Channeling Vessel article
    // from Alchemist on); metal_form_bucket and disorganized_metal_form do not.
    addEldrinAltarRecipe(event, {
        output: 'gtceu:concepts_bucket',
        items: ['minecraft:bucket', 'gtceu:prima_materia_block', 'minecraft:experience_bottle', 'minecraft:experience_bottle', 'hexcasting:charged_amethyst'],
        affinity: 'arcane',
        power: LP.ALCHEMIST,
        tier: 4
    })

    // raw_mana -> source_gem: dead output, Source Gem retired pack-wide since 03-journeyman.md.
    // Dropped outright, not a new decision.

    // glowstone -> luminessence_dust x4: bulk production of the old Apprentice signature
    // material, which no longer exists. Dropped outright.

    addManaPondRecipe(event, {
        input: { tag: 'forge:ingots/silver' },
        mana: ManaPool.ALCHEMIST,
        catalyst: { type: 'block', block: 'botania:alchemy_catalyst' },
        output: { item: 'gtceu:holy_silver_ingot' }
    })


    // --- Hex Casting moved to initiate.js 2026-08-04 ---
    // The whole Hex line (hexed_amethyst_core, hexed_mana_matrix, staves, lens, thought knot,
    // slate, cypher, scrolls, abacus, akashic blocks, focus, spellbook, artifact, trinket) now
    // lives at Initiate. Charged amethyst is Apprentice-tier and Holy Silver is Initiate's own
    // parallel line, so nothing about Hex actually needed Alchemist. The two keystone items still
    // feed this tier: animus_sigil and animus_ward_lattice both consume hexed_mana_matrix.

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
    // Grammar: thought vessel (thought knot -- literally stored, looped thought) + animating
    // agent (arcane residue, this tier's own animus intermediate).
    addEldrinAltarRecipe(event, {
        output: 'kubejs:animus_wizard_brain',
        items: ['gtceu:distilled_animus_ingot', 'minecraft:writable_book', 'kubejs:arcane_residue', 'kubejs:hexed_amethyst_core'],
        affinity: 'ARCANE', power: Source.ALCHEMIST,
        tier: 4
    })
    addManaPondRecipe(event, {
        input: { item: 'gtceu:distilled_animus_rod' },
        mana: 2 * ManaPool.ALCHEMIST,
        catalyst: { type: 'block', block: 'botania:conjuration_catalyst' },
        output: { item: 'kubejs:animus_motive_core' }
    })

    // Channeling Vessel: woven shut around the residue it will carry.
    addMnaManaweavingRecipe(event, {
        output: 'kubejs:animus_channeling_vessel',
        items: ['gtceu:concepts_bucket', 'gtceu:distilled_animus_ingot', 'kubejs:arcane_residue', 'kubejs:arcane_residue'],
        patterns: ['mna:split_triangle', 'mna:knot2'],
        tier: 3
    })

    // Ward Lattice: forged out of Steadfast Will at the Soul Forge, where Will belongs.
    addSoulForgeRecipe(event, {
        output: 'kubejs:animus_ward_lattice',
        inputs: ['gtceu:distilled_animus_plate', 'bloodmagic:basemonstersoul_steadfast', 'kubejs:hexed_mana_matrix', 'minecraft:obsidian'],
        drain: 30,
        minimumDrain: 600
    })
})
