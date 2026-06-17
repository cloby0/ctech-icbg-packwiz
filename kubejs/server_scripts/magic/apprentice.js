ServerEvents.recipes(event => {
    //removes imbuement chamber recipe and adds cusotm ones
    event.remove({ id: 'ars_nouveau:imbuement_chamber' });
    event.shaped(
        Item.of('ars_nouveau:imbuement_chamber', 1),
                 [
                    ' E ',
                    'BCB',
                    'ADA'
                 ],
                 {
                     A: 'minecraft:glowstone',
                     B: '#forge:rods/gold',
                     C: 'minecraft:quartz',
                     D: '#forge:plates/silver',
                     E: 'minecraft:glowstone_dust'
                 }
    );

    //removed source gem creation recipes in grandEnchantingSanctumRecipes.js

    addImbuementRecipe(event, {
        input: 'minecraft:amethyst_shard',
        output: 'irons_spellbooks:arcane_essence',
        source: 750,
        pedestalItems: []
    });

    event.remove({ id: 'ars_nouveau:scribes_table' });
    event.shaped(
        Item.of('ars_nouveau:scribes_table', 1),
                 [
                    'DEF',
                    'BBB',
                    'ACA'
                 ],
                 {
                     A: '#forge:logs/archwood',
                     B: 'ars_nouveau:archwood_slab',
                     C: '#forge:screws/gold',
                     D: 'irons_spellbooks:common_ink',
                     E: 'irons_spellbooks:magic_cloth',
                     F: 'minecraft:feather'
                 }
    );

    event.remove({ id: 'ars_nouveau:novice_spell_book' });
    event.shaped(
        Item.of('ars_nouveau:novice_spell_book', 1),
                 [
                 ' C ',
                 'ABG',
                 ' C '
                 ],
                 {
                     A: 'irons_spellbooks:magic_cloth',
                     B: 'minecraft:book',
                     C: 'irons_spellbooks:arcane_essence',
                     G: 'gtceu:gold_foil'
                 }
    );

    event.custom({
        "type": "hexerei:mixingcauldron",
        "liquid": {
            "fluid": "minecraft:lava"
        },
        "ingredients": [
            {
                "item": "minecraft:glowstone_dust"
            },
            {
                "item": "minecraft:glowstone_dust"
            },
            {
                "item": "minecraft:glowstone_dust"
            },
            {
                "item": "minecraft:glowstone_dust"
            },
            {
                "item": "minecraft:blaze_powder"
            },
            {
                "tag": "kubejs:fire_essences"
            },
            {
                "item": "minecraft:glow_berries"
            },
            {
                "item": "minecraft:diamond"
            }
        ],
        "output": {
            "item": "kubejs:glowing_compound_dust"
        },
        "liquidOutput": {
            "fluid": "minecraft:lava"
        },
        "fluidLevelsConsumed": 1000,
        "heatRequirement": "heated"
    });

    addImbuementRecipe(event, {
        input: 'kubejs:glowing_compound_dust',
        output: 'kubejs:impure_glimmering_dust',
        source: 100,
        pedestalItems: []
    });

    event.smelting('gtceu:small_luminessence_dust', 'kubejs:impure_glimmering_dust');

    // oil synthesis step 2: kerogen formation (burial pressure via earth essence)
    addImbuementRecipe(event, {
        input: 'kubejs:primordial_organic_muck',
        output: 'kubejs:kerogen',
        count: 4,
        source: 1000,
        pedestalItems: ['#kubejs:earth_essences']
    })

    // oil synthesis step 3: thermal cracking (lava = high heat, fire essence = catalyst)
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

    // oil synthesis step 4: fluid extraction (LV extractor)
    event.recipes.gtceu.extractor('crude_petroleum_mass_extraction')
        .itemInputs('1x kubejs:crude_petroleum_mass')
        .outputFluids(Fluid.of('gtceu:oil_heavy', 4000))
        .duration(10 * 20)
        .EUt(GTValues.VA[GTValues.LV])

    // side material: luminessence → experience bottles via fire
    // exp bottles needed later for abstract_metal chain; fire essence channels luminessence into experience energy
    addImbuementRecipe(event, {
        input: 'gtceu:luminessence_dust',
        output: 'minecraft:experience_bottle',
        count: 4,
        source: 500,
        pedestalItems: ['#kubejs:fire_essences', '#kubejs:fire_essences']
    })

    // side material: luminessence → charged amethyst via air
    // charged amethyst needed for hexed_amethyst_core at Alchemist; air essence charges the crystal
    addImbuementRecipe(event, {
        input: 'gtceu:amethyst_dust',
        output: 'hexcasting:charged_amethyst',
        count: 2,
        source: 500,
        pedestalItems: ['#kubejs:air_essences']
    })
})
