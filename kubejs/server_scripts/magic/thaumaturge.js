ServerEvents.recipes(event => {
    // Runic Altar recipe moved to journeyman.js 2026-08-04 -- runes are wanted from
    // Journeyman on, and every ingredient (livingrock, mana diamond, manasteel bolt) is
    // Apprentice-tier. It has no business first appearing at LuV.

    // florid_compound -> living_metalloid (+fertile_essence) -> terrasteel x3 dropped entirely,
    // rune_of_frost with it: Journeyman's veridium chain already makes terrasteel at the tier's
    // own Agglomeration cost; this route was ~1365x more per ingot, using the exact same
    // addTerraPlateRecipe helper -- no handler exclusivity,
    // no bulk/cost advantage, per user direction 2026-07-28's two-part test. Every intermediate
    // here (florid_compound, living_metalloid, fertile_essence, rune_of_frost) had no other
    // consumer in the pack, so the whole dead-end cascade goes, not just the terrasteel recipe.
    // The vanilla botania:terra_plate/terrasteel_ingot recipe stays removed too (pre-existing
    // pack decision, not restored).
    event.remove({ id: "botania:terra_plate/terrasteel_ingot" })

    // --- Starforged Chimerite: Thaumaturge signature material (redesigned 2026-08-04) ---
    // The old chain was crush -> combine with an admixture -> combine with a tier item -> one
    // wildcard step -> smelt. Every tier read the same. This one is five different handlers, no
    // shapeless craft, no furnace, and it opens with a real automation puzzle instead of a click.
    //
    // 1. AUTOMATION (the cross-mod answer to "chimerite can't be farmed"). Chimerite has no ore
    //    feature -- vanilla MNA only drops it while hand-mining emerald/diamond/coal ore, and often
    //    destroys it. Malum's Spirit Crucible generates it instead: the Alchemical Impetus is a
    //    DURABILITY CATALYST, not a consumed input, and Spirit Catalyzers stack up to 8 for
    //    exponential speed at proportionally higher impetus wear. That is the tier's automation
    //    challenge -- build the crucible array, feed it spirits, and keep impetuses repaired
    //    (arcane spirits repair a cracked_alchemical_impetus).
    event.custom({
        type: 'malum:spirit_focusing',
        durabilityCost: 3,
        time: 900,
        input: { item: 'malum:alchemical_impetus' },
        output: { item: 'kubejs:chimerite_dust', count: 3 },
        spirits: [
            { type: 'arcane', count: 4 },
            { type: 'aerial', count: 2 }
        ]
    }).id('kubejs:spirit_focusing/chimerite_dust')

    // 1b. Manual route so the tier isn't hard-blocked on building the crucible first.
    addMnaCrushingRecipe(event, {
        input: 'mna:chimerite_gem',
        output: 'kubejs:chimerite_dust',
        outputCount: 2,
        tier: 4
    })

    // 2. Star-touching happens in-world, on an alchemy array -- ashes on the ground, admixture
    //    thrown onto the dust. Was a shapeless craft.
    addAlchemyArrayRecipe(event, {
        base: 'kubejs:chimerite_dust',
        thrown: 'magichem:admixture_light',
        output: 'kubejs:star_touched_chimerite'
    })

    // 3. The Astral Observer, on a real starlight timer. This is the step that earns the name and
    //    it is kept exactly as-is -- lumins type 3 is the mod's own "stardust" phase.
    event.custom({
        type: 'magichem:illumination',
        input: 'kubejs:star_touched_chimerite',
        lumins: { type: 3, minutes: 4 },
        result: { item: 'kubejs:charged_chimerite', count: 1 }
    })

    // 4. Finished at the Runic Altar, not a furnace -- gems aren't smelted. The two seasonal runes
    //    are CATALYSTS: Botania returns runes on completion, so they are a one-time infrastructure
    //    cost that the recipe then leans on forever. Vengeful Will is the consumed half.
    addRunicAltarRecipe(event, {
        output: { item: 'gtceu:starforged_chimerite_gem' },
        mana: RunicAltar.THAUMATURGE,
        ingredients: [
            { item: 'kubejs:charged_chimerite' },
            { item: 'bloodmagic:basemonstersoul_vengeful' },
            { item: 'botania:rune_winter' },
            { item: 'botania:rune_summer' }
        ]
    })

    // Shortcut (Arcanist+, Rubedo worn): Alembic/Distillery fabricates the gem straight from
    // materia, real wisdom-field gate (wisdom_stone_rubedo, wisdom:3).
    event.custom({
        type: 'magichem:distillation_fabrication',
        wisdom: 3,
        categories: 1,
        output_rate: 1.0,
        batch_size: 3,
        object: { item: 'gtceu:starforged_chimerite_gem' },
        components: [
            { item: 'magichem:admixture_light', count: 50 },
            { item: 'magichem:essentia_mineral', count: 30 },
            { item: 'magichem:essentia_rubedo', count: 25 }
        ]
    })

    // raw_mana -> source_gem x4: dead output, dead pedestal (nature_essence goes with it).
    // Dropped outright, no port needed.

    addManaPondRecipe(event, {
        input: { item: 'botania:mana_diamond' },
        mana: 2 * ManaPool.THAUMATURGE,
        catalyst: { type: 'block', block: 'botania:conjuration_catalyst' },
        output: { item: 'botania:mana_diamond', count: 2 }
    })

    addManaPondRecipe(event, {
        input: { item: 'botania:mana_pearl' },
        mana: 2 * ManaPool.THAUMATURGE,
        catalyst: { type: 'block', block: 'botania:conjuration_catalyst' },
        output: { item: 'botania:mana_pearl', count: 2 }
    })

    // terrasteel -> abstract_metal_ingot dropped: terrasteel is Journeyman-tier now, and
    // Alchemist's iron_ingot route already covers abstract_metal_ingot supply by this point.

    // --- Microcrafting: Thaumaturge circuit + components ---
    // Circuit built through 2 real handlers: MNA crushing -> MagiChem Astral Observer illumination.
    addMnaCrushingRecipe(event, {
        input: 'gtceu:starforged_chimerite_gem',
        output: 'kubejs:starforged_sigil_blank'
    })

    event.custom({
        type: 'magichem:illumination',
        input: 'kubejs:starforged_sigil_blank',
        lumins: { type: 3, minutes: 4 },
        result: { item: 'kubejs:starforged_sigil', count: 1 }
    })

    // Wizard Brain: Eldrin Altar (3rd distinct handler for this tier's item set).
    // Grammar: thought vessel (spell book) + animating agent (vengeful will).
    addEldrinAltarRecipe(event, {
        output: 'kubejs:starforged_wizard_brain',
        items: ['gtceu:starforged_chimerite_gem', 'hexcasting:spellbook', 'bloodmagic:basemonstersoul_vengeful', 'kubejs:star_touched_chimerite'],
        affinity: 'WATER', power: Source.THAUMATURGE,
        tier: 4
    })
    event.custom({
        type: 'magichem:illumination',
        input: 'gtceu:starforged_chimerite_rod',
        lumins: { type: 2, minutes: 6 },
        result: { item: 'kubejs:starforged_motive_core', count: 1 }
    })

    // Channeling Vessel: frozen shut in the Aether's Icestone Freezer.
    event.custom({
        "type": "aether:freezing",
        "ingredient": { "item": "botania:mana_bottle" },
        "result": { "item": "kubejs:starforged_channeling_vessel" },
        "cookingtime": 600,
        "experience": 1.0
    })

    // Ward Lattice: runic, on the altar that has existed since Journeyman.
    addRunicAltarRecipe(event, {
        output: { item: 'kubejs:starforged_ward_lattice' },
        mana: RunicAltar.THAUMATURGE,
        ingredients: [
            { item: 'gtceu:starforged_chimerite_plate' },
            { item: 'botania:rune_earth' },
            { item: 'botania:rune_winter' },
            { item: 'minecraft:echo_shard' }
        ]
    })

    // Wisdom Stone: Citrinitas (Ritual of the Balanced Scales, Alchemical Nexus). Re-themed onto
    // Thaumaturge's own material line. Materia kept verbatim from the mod's own citrinitas recipe
    // (magichem-0.5.2.jar data/magichem/recipes/alchemical_sublimation/magichem/wisdom_stone_citrinitas.json).
    // Wizard Brain in stage 1: a worn Wisdom Stone is literally automated magical reasoning.
    // Jar's own recipe stays otherwise loaded alongside ours (custom serializer, not overwritten
    // by a new object -> id: removal required).
    event.remove({ id: 'magichem:alchemical_sublimation/magichem/wisdom_stone_citrinitas' })
    event.custom({
        type: 'magichem:sublimation',
        tier: 4,
        wisdom: 2,
        object: { item: 'magichem:wisdom_stone_citrinitas' },
        stages: [
            {
                experience: 135,
                components: [
                    { item: 'kubejs:chimerite_dust' },
                    { item: 'kubejs:star_touched_chimerite' },
                    { item: 'kubejs:starforged_wizard_brain' }
                ],
                materia: [
                    { item: 'magichem:admixture_potential', count: 100 },
                    { item: 'magichem:admixture_history', count: 70 },
                    { item: 'magichem:admixture_permanence', count: 70 },
                    { item: 'magichem:essentia_citrinitas', count: 50 }
                ]
            },
            {
                experience: 180,
                components: [
                    { item: 'botania:rune_earth' },
                    { item: 'botania:rune_water' },
                    { item: 'botania:rune_spring' }
                ],
                materia: [
                    { item: 'magichem:admixture_cold', count: 70 },
                    { item: 'magichem:admixture_depths', count: 70 },
                    { item: 'magichem:admixture_forests', count: 70 },
                    { item: 'magichem:admixture_mountains', count: 70 }
                ]
            },
            {
                experience: 225,
                components: [
                    { item: 'gtceu:starforged_chimerite_plate' },
                    { item: 'kubejs:charged_chimerite' },
                    { item: 'gtceu:starforged_chimerite_plate' }
                ],
                materia: [
                    { item: 'magichem:admixture_hells', count: 70 },
                    { item: 'magichem:admixture_plains', count: 70 },
                    { item: 'magichem:admixture_swamps', count: 70 },
                    { item: 'magichem:admixture_wastes', count: 70 }
                ]
            },
            {
                experience: 270,
                components: [
                    { item: 'kubejs:charged_chimerite' },
                    { item: 'magichem:wisdom_stone_albedo' },
                    { item: 'kubejs:charged_chimerite' }
                ],
                materia: [
                    { item: 'magichem:admixture_change', count: 100 },
                    { item: 'magichem:admixture_curse', count: 70 },
                    { item: 'magichem:admixture_sleep', count: 70 },
                    { item: 'magichem:essentia_citrinitas', count: 40 }
                ]
            }
        ]
    })
})
