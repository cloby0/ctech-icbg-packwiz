ServerEvents.recipes(event => {
    event.remove({ id: 'botania:runic_altar' })
    event.remove({ id: 'botania:gaia_ingot' })
    event.remove({ id: 'botania:runic_altar_alt' })
    event.shaped(
        Item.of('botania:runic_altar', 1),
        [
            'AAA',
            'DCD',
            'BAB'
        ],
        {
            A: 'botania:livingrock_bricks',
            B: 'botania:livingrock',
            C: 'botania:mana_diamond',
            D: 'gtceu:manasteel_bolt'
        }
    )
    event.custom({
        "type": "botania:runic_altar",
        "ingredients": [
            {
            "tag": "forge:ingots/manasteel"
            },
            {
            "item": "botania:rune_earth"
            },
            {
            "item": "botania:rune_water"
            },
            {
            "item": "botania:rune_mana"
            },
            {
            "item": "botania:rune_spring"
            }
        ],
        "mana": 5200,
        "output": {
            "count": 1,
            "item": "kubejs:florid_compound"
        }
    })
    event.recipes.ars_nouveau.enchanting_apparatus(
        [
            "minecraft:clock",
            "mysticalagriculture:nature_essence",
            "mysticalagriculture:water_essence",
            "reliquary:fertile_essence",
        ],
        "kubejs:florid_compound",
        "kubejs:living_metalloid",
        30000,
    );

    event.remove({ id: "botania:terra_plate/terrasteel_ingot" })
    event.custom({
        "type": "botania:terra_plate",
        "ingredients": [
            {"item": "kubejs:living_metalloid"},
            {"item": "botania:mana_pearl"},
            {"item": "botania:mana_diamond"}
        ],
        "mana": 500000,
        "result": {
            "item": "botania:terrasteel_ingot"
        }
    })

    // rune_of_frost: glacio-forged runic catalyst
    // requires manasteel (Alchemist), naquadah (Glacio), ice shard (Glacio), source gem (Journeyman)
    // higher mana cost reflects cryo-crystallization process
    event.custom({
        "type": "botania:runic_altar",
        "ingredients": [
            {"item": "botania:manasteel_ingot"},
            {"item": "ad_astra:ice_shard"},
            {"item": "ad_astra:ice_shard"},
            {"item": "ad_astra:ice_shard"},
            {"item": "ad_astra:ice_shard"},
            {"item": "gtceu:naquadah_dust"},
            {"item": "gtceu:naquadah_dust"},
            {"item": "ars_nouveau:source_gem"}
        ],
        "mana": 25000,
        "output": {
            "count": 1,
            "item": "kubejs:rune_of_frost"
        }
    })

    // frost-enhanced terrasteel; rune_of_frost added to TAP alongside normal inputs
    // cryo resonance concentrates the mana field; 3x yield for 3x mana cost
    // requires Glacio access to craft the rune — hybridized player reward
    event.custom({
        "type": "botania:terra_plate",
        "ingredients": [
            {"item": "kubejs:living_metalloid"},
            {"item": "botania:mana_pearl"},
            {"item": "botania:mana_diamond"},
            {"item": "kubejs:rune_of_frost"}
        ],
        "mana": 1500000,
        "result": {
            "count": 3,
            "item": "botania:terrasteel_ingot"
        }
    })
})
