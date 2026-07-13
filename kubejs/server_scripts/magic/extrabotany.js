ServerEvents.recipes(event => {

    event.remove({ id: 'extrabotany:pedestal_livingrock' })
    event.shaped('extrabotany:pedestal_livingrock', [
        'CPC',
        'HC ',
        'CCC'
    ], {
        C: 'botania:livingrock',
        P: 'botania:manasteel_ingot',
        H: '#forge:tools/hammers'
    }).damageIngredient(Ingredient.of('#forge:tools/hammers'))

    addImbuementRecipe(event, {
        input: 'botania:terrasteel_ingot',
        output: 'extrabotany:spirit_fuel',
        source: Source.ALCHEMIST,
        pedestalItems: ['botania:mana_pearl', 'botania:mana_pearl', 'botania:mana_diamond', 'botania:mana_diamond']
    })

    const alchemistFlowers = [
        'extrabotany:sunshine_lily',
        'extrabotany:moonlight_lily',
        'extrabotany:twinstar',
    ]
    alchemistFlowers.forEach(flower => {
        event.remove({ output: flower })
        addEnchantingRecipe(event, {
            reagent: 'botania:mana_pearl',
            pedestalItems: ['botania:manasteel_ingot', 'botania:mana_pearl'],
            output: flower,
            sourceCost: Source.THAUMATURGE
        })
    })

    const thaumaturgeFlowers = [
        'extrabotany:resoncund',
        'extrabotany:trade_orchid',
        'extrabotany:edelweiss',
        'extrabotany:mirrowtunia',
        'extrabotany:necrofleur',
        'extrabotany:blood_enchantress',
        'extrabotany:omniviolet',
        'extrabotany:bellflower',
        'extrabotany:tinkle',
        'extrabotany:annoyingflower',
        'extrabotany:stonesia',
    ]
    thaumaturgeFlowers.forEach(flower => {
        event.remove({ output: flower })
        addEnchantingRecipe(event, {
            reagent: 'botania:manasteel_ingot',
            pedestalItems: [
                'botania:terrasteel_ingot', 'botania:mana_pearl',
                'botania:mana_pearl', 'botania:mana_pearl'
            ],
            output: flower,
            sourceCost: Source.ARCANIST
        })
    })

    const arcanistFlowers = [
        'extrabotany:woodienia',
        'extrabotany:reikarlily',
    ]
    arcanistFlowers.forEach(flower => {
        event.remove({ output: flower })
        addEnchantingRecipe(event, {
            reagent: 'botania:manasteel_ingot',
            pedestalItems: [
                'botania:elementium_ingot', 'botania:terrasteel_ingot',
                'botania:mana_pearl', 'botania:mana_pearl'
            ],
            output: flower,
            sourceCost: Source.ARCANIST
        })
    })


    ;[
        ['#forge:ores_in_ground/deepslate',   80],
        ['ad_astra:moon_stone',               40],
        ['ad_astra:mars_stone',               40],
        ['ad_astra:venus_stone',              40],
        ['ad_astra:mercury_stone',            40],
        ['ad_astra:glacio_stone',             40],
        ['aether:holystone',                  30],
        ['#forge:storage_blocks/naquadah',   400],
    ].forEach(([block, mana]) => event.recipes.extrabotany.stonesia(mana, block))

    ;[
        ['minecraft:blaze',           2000],
        ['minecraft:enderman',        2500],
        ['minecraft:wither_skeleton', 3000],
        ['minecraft:piglin_brute',    1500],
        ['minecraft:guardian',        2000],
        ['minecraft:shulker',         3500],
    ].forEach(([entity, mana]) => event.recipes.extrabotany.edelweiss(mana, entity))

    ;[
        ['irons_spellbooks:ruined_book',  80],
        ['hexcasting:slate',             100],
        ['hexcasting:cypher',            150],
        ['hexcasting:scroll',            200],
        ['hexcasting:spellbook',         500],
    ].forEach(([item, burn]) => event.recipes.extrabotany.omniviolet(item, burn))
})
