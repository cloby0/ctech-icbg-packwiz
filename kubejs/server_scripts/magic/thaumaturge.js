ServerEvents.recipes(event => {
    event.remove({ id: 'botania:runic_altar' })
    event.remove({ id: 'botania:gaia_ingot' })
    event.remove({ id: 'botania:runic_altar_alt' })
    event.shaped(
        Item.of('botania:runic_altar', 1),
        [
            'WAA',
            'DCD',
            'BAB'
        ],
        {
            A: 'botania:livingrock_bricks',
            B: 'botania:livingrock',
            C: 'botania:mana_diamond',
            D: 'gtceu:manasteel_bolt',
            W: '#forge:tools/wrenches'
        }
    ).damageIngredient(Ingredient.of('#forge:tools/wrenches'))
    // florid_compound -> living_metalloid (+fertile_essence) -> terrasteel x3 dropped entirely,
    // rune_of_frost with it: Journeyman's veridium chain already makes terrasteel for
    // 1000 mana/ingot (Mana.JOURNEYMAN); this route cost 16*Mana.PROPHET for 3 ingots, ~1365x
    // more per ingot, using the exact same addTerraPlateRecipe helper -- no handler exclusivity,
    // no bulk/cost advantage, per user direction 2026-07-28's two-part test. Every intermediate
    // here (florid_compound, living_metalloid, fertile_essence, rune_of_frost) had no other
    // consumer in the pack, so the whole dead-end cascade goes, not just the terrasteel recipe.
    // The vanilla botania:terra_plate/terrasteel_ingot recipe stays removed too (pre-existing
    // pack decision, not restored).
    event.remove({ id: "botania:terra_plate/terrasteel_ingot" })

    // --- Starforged Chimerite: Thaumaturge signature material ---
    // MNA tier 4 devices are literally astral (sun/moon/starlight infusion) -- this chain's name
    // and ingredients match what's mechanically unlocking at this tier. Magic spine stays
    // GT-free throughout: MNA's own crushing mechanic, vanilla combines, MagiChem's real
    // Astral Observer illumination step, plain furnace smelt (starforged_chimerite has no
    // blastTemp on purpose).
    //
    // "Fusery: Materia -> Admixture" per the design spec doesn't literally work for a custom
    // output item -- verified against the mod's real recipe JSON (magichem:fixation_separation
    // only pairs one of MagiChem's ~150 fixed admixture items with its OWN fixed formula, same
    // mechanical constraint Phase 6 found for the Alembic). Vanilla combine instead, same
    // substitution pattern used everywhere else in this rework a tier's flavor text says
    // "combine"/"process"/"craft" against a mechanically-incompatible machine.
    //
    // Astral Observer DOES work for real here: magichem:illumination takes a single item + a
    // light-phase timer ("lumins": {type, minutes}) -> result. Verified against the mod's real
    // recipe JSON (magichem:vinteum_dust_to_stardust uses type 3 for its "stardust" output,
    // matching our own starlight theme) -- Vengeful Will is consumed in a combine step just
    // before the Observer, since illumination only accepts one input item.
    addMnaCrushingRecipe(event, {
        input: 'mna:chimerite_gem',
        output: 'kubejs:chimerite_dust'
    })

    event.shapeless('kubejs:star_touched_chimerite', ['kubejs:chimerite_dust', 'magichem:admixture_light'])

    event.shapeless('kubejs:vengeance_touched_chimerite', ['kubejs:star_touched_chimerite', 'bloodmagic:basemonstersoul_vengeful'])

    event.custom({
        type: 'magichem:illumination',
        input: 'kubejs:vengeance_touched_chimerite',
        lumins: { type: 3, minutes: 4 },
        result: { item: 'kubejs:charged_chimerite', count: 1 }
    })

    event.smelting('gtceu:starforged_chimerite_ingot', 'kubejs:charged_chimerite')

    // Shortcut (Arcanist+, Rubedo worn): Alembic/Distillery fabricates the ingot straight from
    // materia, real wisdom-field gate (wisdom_stone_rubedo, wisdom:3).
    event.custom({
        type: 'magichem:distillation_fabrication',
        wisdom: 3,
        categories: 1,
        output_rate: 1.0,
        batch_size: 3,
        object: { item: 'gtceu:starforged_chimerite_ingot' },
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
        mana: 2 * Mana.THAUMATURGE,
        catalyst: { type: 'block', block: 'botania:conjuration_catalyst' },
        output: { item: 'botania:mana_diamond', count: 2 }
    })

    addManaPondRecipe(event, {
        input: { item: 'botania:mana_pearl' },
        mana: 2 * Mana.THAUMATURGE,
        catalyst: { type: 'block', block: 'botania:conjuration_catalyst' },
        output: { item: 'botania:mana_pearl', count: 2 }
    })

    // terrasteel -> abstract_metal_ingot dropped: terrasteel is Journeyman-tier now, and
    // Alchemist's iron_ingot route already covers abstract_metal_ingot supply by this point.

    // --- Microcrafting: Thaumaturge circuit + components ---
    // Circuit built through 2 real handlers: MNA crushing -> MagiChem Astral Observer illumination.
    addMnaCrushingRecipe(event, {
        input: 'gtceu:starforged_chimerite_ingot',
        output: 'kubejs:starforged_array_dust'
    })

    event.custom({
        type: 'magichem:illumination',
        input: 'kubejs:starforged_array_dust',
        lumins: { type: 3, minutes: 4 },
        result: { item: 'kubejs:starforged_array', count: 1 }
    })

    // Wizard Brain: Eldrin Altar (3rd distinct handler for this tier's item set).
    addEldrinAltarRecipe(event, {
        output: 'kubejs:starforged_wizard_brain',
        items: ['gtceu:starforged_chimerite_ingot', 'kubejs:star_touched_chimerite', 'ad_astra:ice_shard'],
        affinity: 'WATER', power: Source.THAUMATURGE,
        tier: 4
    })

    event.shapeless('kubejs:starforged_motive_core', [
        'gtceu:starforged_chimerite_rod', 'ad_astra:ice_shard', 'gtceu:starforged_chimerite_ingot'
    ])
    event.shapeless('kubejs:starforged_channeling_vessel', [
        'gtceu:starforged_chimerite_ingot', 'botania:rune_water', 'kubejs:chimerite_dust'
    ])
    event.shapeless('kubejs:starforged_ward_lattice', [
        'gtceu:starforged_chimerite_plate', 'botania:rune_earth', 'gtceu:naquadah_dust'
    ])

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
                    { item: 'kubejs:vengeance_touched_chimerite' },
                    { item: 'magichem:wisdom_stone_albedo' },
                    { item: 'kubejs:vengeance_touched_chimerite' }
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
