ServerEvents.recipes(event => {

    // === NATURE PEDESTAL ===
    // Replace gold_nugget with manasteel; gates pedestal behind Alchemist tier
    event.remove({ id: 'extrabotany:pedestal_livingrock' })
    event.shaped('extrabotany:pedestal_livingrock', [
        'CPC',
        ' C ',
        'CCC'
    ], {
        C: 'botania:livingrock',
        P: 'botania:manasteel_ingot'
    })

    // === SPIRIT FUEL (Thaumaturge gate) ===
    // No vanilla recipe exists; synthesized via terrasteel imbuement
    // gates spirit_fragment (via pedestal_smash) and downstream photonium behind Thaumaturge
    event.recipes.ars_nouveau.imbuement(
        'botania:terrasteel_ingot',
        'extrabotany:spirit_fuel',
        5000,
        [
            'botania:mana_pearl',
            'botania:mana_pearl',
            'botania:mana_diamond',
            'botania:mana_diamond',
        ]
    )

    // === ALCHEMIST TIER FLOWERS (manasteel gate) ===
    // petal_apothecary recipes removed; re-added via EA to ensure consistent gating
    const alchemistFlowers = [
        'extrabotany:sunshine_lily',
        'extrabotany:moonlight_lily',
        'extrabotany:twinstar',
    ]
    alchemistFlowers.forEach(flower => {
        event.remove({ output: flower })
        event.recipes.ars_nouveau.enchanting_apparatus(
            ['botania:manasteel_ingot', 'botania:mana_pearl'],
            'botania:mana_pearl',
            flower,
            9000,
        )
    })

    // === THAUMATURGE TIER FLOWERS (terrasteel gate) ===
    // stonesia overridden from its vanilla life_essence req to fit mid-game mana gen role
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
        event.recipes.ars_nouveau.enchanting_apparatus(
            [
                'botania:terrasteel_ingot',
                'botania:mana_pearl',
                'botania:mana_pearl',
                'botania:mana_pearl',
            ],
            'botania:manasteel_ingot',
            flower,
            15000,
        )
    })

    // === ARCANIST TIER FLOWERS (elementium gate) ===
    const arcanistFlowers = [
        'extrabotany:woodienia',
        'extrabotany:reikarlily',
    ]
    arcanistFlowers.forEach(flower => {
        event.remove({ output: flower })
        event.recipes.ars_nouveau.enchanting_apparatus(
            [
                'botania:elementium_ingot',
                'botania:terrasteel_ingot',
                'botania:mana_pearl',
                'botania:mana_pearl',
            ],
            'botania:manasteel_ingot',
            flower,
            20000,
        )
    })

    // serenitian, manalink, enchanter keep vanilla petal_apothecary recipes
    // all three require life_essence (Sage-gated) so no override needed

    // === STONESIA custom recipes (extra GTCEu and dimensional stones) ===
    // defaults (stone:20, dirt:10, various vanilla ores) are kept by the mod
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

    // === EDELWEISS custom recipes (mob kills → mana) ===
    // default (snow_golem:3200) kept by mod
    ;[
        ['minecraft:blaze',           2000],
        ['minecraft:enderman',        2500],
        ['minecraft:wither_skeleton', 3000],
        ['minecraft:piglin_brute',    1500],
        ['minecraft:guardian',        2000],
        ['minecraft:shulker',         3500],
    ].forEach(([entity, mana]) => event.recipes.extrabotany.edelweiss(mana, entity))

    // === OMNIVIOLET custom recipes (spell books → mana) ===
    // defaults (book:50, written_book:65) kept by mod
    ;[
        ['irons_spellbooks:ruined_book',  80],
        ['hexcasting:slate',             100],
        ['hexcasting:cypher',            150],
        ['hexcasting:scroll',            200],
        ['hexcasting:spellbook',         500],
    ].forEach(([item, burn]) => event.recipes.extrabotany.omniviolet(item, burn))
})
