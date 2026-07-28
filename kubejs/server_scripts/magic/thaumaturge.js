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
    addRunicAltarRecipe(event, {
        output: { count: 1, item: 'kubejs:florid_compound' },
        mana: Mana.THAUMATURGE,
        ingredients: [
            { item: 'gtceu:manasteel_bolt' },
            { item: 'botania:rune_earth' },
            { item: 'botania:rune_water' },
            { item: 'botania:rune_mana' },
            { item: 'botania:rune_spring' }
        ]
    })

    // MysticalAg difficulty-cliff fix (same rule as every prior tier): default recipe drops both
    // hard mysticalagriculture essences for tag items; alternate keeps them, cheaper.
    addEldrinAltarRecipe(event, {
        output: 'kubejs:living_metalloid',
        items: ['kubejs:florid_compound', 'minecraft:clock', '#kubejs:earth_essences', '#kubejs:water_essences', 'reliquary:fertile_essence'],
        affinity: 'earth',
        power: 2 * LP.THAUMATURGE
    })
    addEldrinAltarRecipe(event, {
        output: 'kubejs:living_metalloid',
        items: ['kubejs:florid_compound', 'minecraft:clock', 'mysticalagriculture:nature_essence', 'mysticalagriculture:water_essence', 'reliquary:fertile_essence'],
        affinity: 'earth',
        power: LP.THAUMATURGE
    })

    // Single-output terrasteel terra plate dropped: Journeyman's veridium chain already makes
    // terrasteel far cheaper than 4x Mana.PROPHET for the same one ingot. No reason to keep a
    // harder, less profitable duplicate recipe for the same output two tiers later. The vanilla
    // botania:terra_plate/terrasteel_ingot recipe stays removed (pre-existing pack decision, not
    // restored) -- the x3-output bulk recipe below is a genuinely different, scaled-up route and
    // is kept. Per user direction 2026-07-28.
    event.remove({ id: "botania:terra_plate/terrasteel_ingot" })

    // fertile_essence: this recipe was almost entirely MysticalAg (4 different mob essences),
    // not a hard requirement mixed into an otherwise-normal recipe -- keeping it whole as the
    // MysticalAg discount route instead of partially de-MysticalAg-ing it. New default below
    // reaches the same output from vanilla mob drops + this tier's own chimerite dust.
    addEldrinAltarRecipe(event, {
        output: 'reliquary:fertile_essence',
        items: ['kubejs:chimerite_dust', 'minecraft:bone', 'minecraft:slime_ball', 'minecraft:gunpowder', '#kubejs:earth_essences', '#kubejs:water_essences'],
        affinity: 'earth',
        power: 2 * LP.THAUMATURGE
    })
    addEldrinAltarRecipe(event, {
        output: 'reliquary:fertile_essence',
        items: ['mysticalagriculture:nature_essence', 'mysticalagriculture:skeleton_essence', 'mysticalagriculture:slime_essence', 'mysticalagriculture:creeper_essence', '#kubejs:earth_essences', '#kubejs:water_essences'],
        affinity: 'earth',
        power: LP.THAUMATURGE
    })

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

    // rune_of_frost: dead ars_nouveau:source_gem pedestal swapped for this tier's own new
    // intermediate (star-touched chimerite, per the design spec's preferred option).
    addRunicAltarRecipe(event, {
        output: { count: 1, item: 'kubejs:rune_of_frost' },
        mana: 2 * Mana.THAUMATURGE,
        ingredients: [
            { item: 'gtceu:manasteel_bolt' },
            { item: 'ad_astra:ice_shard' },
            { item: 'ad_astra:ice_shard' },
            { item: 'ad_astra:ice_shard' },
            { item: 'ad_astra:ice_shard' },
            { item: 'gtceu:naquadah_dust' },
            { item: 'gtceu:naquadah_dust' },
            { item: 'kubejs:star_touched_chimerite' }
        ]
    })

    addTerraPlateRecipe(event, {
        result: { count: 3, item: 'botania:terrasteel_ingot' },
        mana: 16 * Mana.PROPHET,
        ingredients: [
            { item: 'kubejs:living_metalloid' },
            { item: 'botania:mana_pearl' },
            { item: 'botania:mana_diamond' },
            { item: 'kubejs:rune_of_frost' }
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

    addManaPondRecipe(event, {
        input: { tag: 'forge:ingots/terrasteel' },
        mana: 2 * Mana.THAUMATURGE,
        catalyst: { type: 'block', block: 'botania:alchemy_catalyst' },
        output: { count: 4, item: 'gtceu:abstract_metal_ingot' }
    })
})
