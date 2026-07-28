ServerEvents.recipes(event => {
    // Imbuement Chamber, Scribe's Table, Novice Spell Book: all three craft Ars Nouveau blocks
    // that no longer exist once Ars is uninstalled. Nothing to port to; dropped outright.

    addEldrinAltarRecipe(event, {
        output: 'irons_spellbooks:arcane_essence',
        items: ['minecraft:amethyst_shard'],
        affinity: 'arcane',
        power: 2 * LP.APPRENTICE
    });

    event.remove({ id: 'biomeswevegone:golden_apple_from_green_apple' });
    addEldrinAltarRecipe(event, {
        output: 'minecraft:golden_apple',
        items: ['minecraft:apple', 'minecraft:gold_ingot', 'minecraft:gold_ingot', 'minecraft:gold_ingot', 'minecraft:gold_ingot'],
        affinity: 'earth',
        power: 2 * LP.APPRENTICE
    });

    // --- Manasteel: Apprentice signature material, zanite chain (replaces Luminessence here) ---
    // Magic spine stays GT-free: hammer-crush, hand combine, Alchemy Table infusion -- no GT machine.
    event.shapeless('kubejs:zanite_shard', ['aether:zanite_gemstone', '#forge:tools/hammers'])
        .damageIngredient(Ingredient.of('#forge:tools/hammers'))

    // Weaken-to-empower: zanite's own inverse-durability mechanic, flavored with redstone.
    event.shapeless('kubejs:cracked_zanite', ['kubejs:zanite_shard', 'minecraft:redstone', 'minecraft:redstone'])

    // magichem:admixture_energy (real MagiChem materia, Alembic-decomposed from coal) binds the
    // charge into the iron. Per user direction 2026-07-28: make MagiChem load-bearing, not just
    // a background essence tag.
    addAlchemyTableRecipe(event, {
        output: 'kubejs:zanite_laced_iron',
        input: ['kubejs:cracked_zanite', 'minecraft:iron_ingot', 'magichem:admixture_energy'],
        syphon: LP.APPRENTICE
    })

    addManaPondRecipe(event, {
        input: { item: 'kubejs:zanite_laced_iron' },
        mana: Mana.APPRENTICE,
        output: { item: 'botania:manasteel_ingot' }
    })

    // Shortcut (Sorcerer+): raw zanite gemstone direct, gated on tier attainment not this file.
    event.shapeless('botania:manasteel_ingot', [
        'aether:zanite_gemstone', 'minecraft:iron_ingot', '#kubejs:magic/sorcerer'
    ])

    // Aether gate (moved here from the old Journeyman slot): glowstone + Hobbyist's Ashen Ichor.
    event.shaped(
        Item.of('aether:aether_portal_frame', 1),
        [
            'GIG',
            'IHI',
            'GIG'
        ],
        {
            G: 'minecraft:glowstone',
            I: 'gtceu:ashen_ichor_ingot',
            H: '#forge:tools/hammers'
        }
    ).damageIngredient(Ingredient.of('#forge:tools/hammers'))

    addEldrinAltarRecipe(event, {
        output: { item: 'kubejs:kerogen', count: 4 },
        items: ['kubejs:primordial_organic_muck', '#kubejs:earth_essences'],
        affinity: 'earth',
        power: 2 * LP.APPRENTICE
    })

    event.custom({
        "type": "hexerei:mixingcauldron",
        "liquid": { "fluid": "minecraft:lava" },
        "ingredients": [
            { "item": "kubejs:kerogen" },
            { "item": "kubejs:kerogen" },
            { "item": "kubejs:kerogen" },
            { "item": "kubejs:kerogen" },
            { "tag": "kubejs:fire_essences" },
            { "tag": "kubejs:fire_essences" },
            { "tag": "kubejs:fire_essences" },
            { "tag": "kubejs:fire_essences" }
        ],
        "output": { "item": "kubejs:crude_petroleum_mass" },
        "liquidOutput": { "fluid": "minecraft:lava" },
        "fluidLevelsConsumed": 1000,
        "heatRequirement": "heated"
    })

    event.recipes.gtceu.extractor('crude_petroleum_mass_extraction')
        .itemInputs('1x kubejs:crude_petroleum_mass')
        .outputFluids(Fluid.of('gtceu:oil_heavy', 4000))
        .duration(10 * 20)
        .EUt(GTValues.VA[GTValues.LV])

    // Reagent swapped from luminessence_dust (retired signature material) to this tier's own
    // cracked zanite intermediate. Pedestal items unchanged.
    addEldrinAltarRecipe(event, {
        output: { item: 'minecraft:experience_bottle', count: 4 },
        items: ['kubejs:cracked_zanite', '#kubejs:fire_essences', '#kubejs:fire_essences'],
        affinity: 'fire',
        power: 2 * LP.APPRENTICE
    })

    addEldrinAltarRecipe(event, {
        output: { item: 'hexcasting:charged_amethyst', count: 2 },
        items: ['gtceu:amethyst_dust', '#kubejs:air_essences'],
        affinity: 'air',
        power: 2 * LP.APPRENTICE
    })

    // Dominion Wand: dead Ars item, dead source_gem ingredient. Dropped, no replacement --
    // inventing a substitute utility wand isn't in the design spec, flag if one is wanted.
})
