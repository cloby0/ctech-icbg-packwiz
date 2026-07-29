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

    // Shortcut (Arcanist+): raw chimerite gem + admixture direct, gated on tier attainment not this file.
    event.shapeless('gtceu:starforged_chimerite_ingot', [
        'mna:chimerite_gem', 'magichem:admixture_light', '#kubejs:magic/arcanist'
    ])

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

    addManaPondRecipe(event, {
        input: { tag: 'forge:ingots/terrasteel' },
        mana: 2 * Mana.THAUMATURGE,
        catalyst: { type: 'block', block: 'botania:alchemy_catalyst' },
        output: { count: 4, item: 'gtceu:abstract_metal_ingot' }
    })

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
})
