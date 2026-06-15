ServerEvents.recipes(event => {
    event.remove({ id: 'botania:elven_trade/elementium' })
    event.remove({ id: 'botania:elven_trade/elementium_block' })
    event.remove({ id: 'botania:elven_trade/pixie_dust' })
    event.remove({ id: 'botania:elven_trade/dragonstone' })

    event.custom({
        "type": "botania:runic_altar",
        "ingredients": [
            { "item": "gtceu:terrasteel_bolt" },
            { "item": "gtceu:terrasteel_bolt" },
            { "item": "gtceu:terrasteel_bolt" },
            { "item": "gtceu:terrasteel_bolt" },
            { "item": "botania:rune_air" },
            { "item": "botania:rune_spring" },
            { "item": "botania:rune_summer" },
            { "item": "botania:rune_autumn" }
        ],
        "mana": 8000,
        "output": {
            "count": 3,
            "item": "kubejs:weak_elementium_dust"
        }
    })

    event.custom({
        "type": "botania:elven_trade",
        "ingredients": [
            { "item": "kubejs:weak_elementium_dust" },
            { "item": "kubejs:weak_elementium_dust" },
            { "item": "kubejs:weak_elementium_dust" }
        ],
        "output": [
            { "item": "kubejs:elven_concentrate", "count": 2 }
        ]
    })

    event.recipes.ars_nouveau.imbuement(
        "kubejs:elven_concentrate",
        "kubejs:elementite_dust",
        8000,
        [
            "ars_nouveau:water_essence",
            "ars_nouveau:air_essence",
            "gtceu:luminessence_dust"
        ]
    )

    event.recipes.ars_nouveau.enchanting_apparatus(
        [ "gtceu:abstract_metal_ingot" ],
        "kubejs:elementite_dust",
        "kubejs:raw_elementite",
        15000,
    )

    // elven_source_lattice: second Arcanist gate item alongside elven_concentrate
    // zanite crystal (Hobbyist) + elven realm energy → attuned lattice for ice/nature/storm spellbooks
    event.recipes.ars_nouveau.imbuement(
        'kubejs:elven_concentrate',
        'kubejs:elven_source_lattice',
        12000,
        [
            'kubejs:resonant_zanite_crystal',
            'kubejs:resonant_zanite_crystal',
            'ars_nouveau:source_gem',
            'ars_nouveau:source_gem',
        ]
    )

    // 5x source gem per raw at Arcanist tier
    // elven_concentrate: condensed elven realm magic, uniquely attuned to source energy
    event.custom({
        "type": "ars_nouveau:enchanting_apparatus",
        "reagent": [{ "item": "gtceu:raw_source" }],
        "pedestalItems": [
            { "item": "kubejs:elven_concentrate" },
            { "item": "kubejs:elven_concentrate" },
            { "tag": "kubejs:water_essences" },
            { "tag": "kubejs:air_essences" }
        ],
        "output": { "item": "ars_nouveau:source_gem", "count": 5 },
        "sourceCost": 15000
    })

    // pixie_dust: currently 1:1 elven trade only (mana_pearl → pixie_dust)
    // 3x yield via EA; elven concentrate supplies the elven attunement
    event.custom({
        "type": "ars_nouveau:enchanting_apparatus",
        "reagent": [{ "item": "botania:mana_pearl" }],
        "pedestalItems": [
            { "item": "kubejs:elven_concentrate" },
            { "item": "kubejs:elven_concentrate" },
            { "tag": "kubejs:air_essences" },
            { "tag": "kubejs:air_essences" }
        ],
        "output": { "item": "botania:pixie_dust", "count": 3 },
        "sourceCost": 15000
    })

    // dragonstone: currently 1:1 elven trade only (mana_diamond → dragonstone)
    // 2x yield via EA
    event.custom({
        "type": "ars_nouveau:enchanting_apparatus",
        "reagent": [{ "item": "botania:mana_diamond" }],
        "pedestalItems": [
            { "item": "kubejs:elven_concentrate" },
            { "item": "kubejs:elven_concentrate" },
            { "tag": "kubejs:earth_essences" },
            { "tag": "kubejs:water_essences" }
        ],
        "output": { "item": "botania:dragonstone", "count": 2 },
        "sourceCost": 20000
    })

    event.smelting("botania:elementium_ingot", "kubejs:raw_elementite")
})
