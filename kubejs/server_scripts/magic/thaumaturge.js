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
            "item": "gtceu:manasteel_bolt"
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
    addEnchantingRecipe(event, {
        reagent: 'kubejs:florid_compound',
        pedestalItems: ['minecraft:clock', 'mysticalagriculture:nature_essence', 'mysticalagriculture:water_essence', 'reliquary:fertile_essence'],
        output: 'kubejs:living_metalloid',
        sourceCost: 30000
    })

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

    // synthesis alt for reliquary:fertile_essence — avoids 2% rare mob drop grind
    // skeleton/slime/creeper MA essences replace rib_bone/slime_pearl/catalyzing_gland
    addEnchantingRecipe(event, {
        reagent: 'mysticalagriculture:nature_essence',
        pedestalItems: [
            'mysticalagriculture:skeleton_essence', 'mysticalagriculture:slime_essence',
            'mysticalagriculture:creeper_essence', '#kubejs:earth_essences', '#kubejs:water_essences'
        ],
        output: 'reliquary:fertile_essence',
        sourceCost: 15000
    })

    // rune_of_frost: glacio-forged runic catalyst
    // requires manasteel (Alchemist), naquadah (Glacio), ice shard (Glacio), source gem (Journeyman)
    // higher mana cost reflects cryo-crystallization process
    event.custom({
        "type": "botania:runic_altar",
        "ingredients": [
            {"item": "gtceu:manasteel_bolt"},
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

    // 4x source gem per raw at Thaumaturge tier
    // rune_spring + rune_water: the Runic Altar's output, renewal and flow — enhance source crystallization
    addEnchantingRecipe(event, {
        reagent: { item: 'gtceu:raw_source' },
        pedestalItems: [
            { item: 'botania:rune_spring' },
            { item: 'botania:rune_water' },
            { tag: 'kubejs:water_essences' },
            { item: 'mysticalagriculture:nature_essence' }
        ],
        output: { item: 'ars_nouveau:source_gem', count: 4 },
        sourceCost: 10000
    })

    // mana_diamond conjuration — sin runes each eat 2; this makes scaling them viable
    // costs more mana per diamond than fresh alchemy route but requires no diamonds after initial stock
    // vanilla Mana Pool consumes input + outputs 2; GT Mana Pond does not consume + outputs 1; net +1 both ways
    addManaPondRecipe(event, {
        input: { item: 'botania:mana_diamond' },
        mana: 25000,
        catalyst: { type: 'block', block: 'botania:conjuration_catalyst' },
        output: { item: 'botania:mana_diamond', count: 2 }
    })

    // mana_pearl conjuration — terra plate + pixie_dust trade both consume them
    addManaPondRecipe(event, {
        input: { item: 'botania:mana_pearl' },
        mana: 15000,
        catalyst: { type: 'block', block: 'botania:conjuration_catalyst' },
        output: { item: 'botania:mana_pearl', count: 2 }
    })

    // late-game shortcut: terrasteel alchemy → 4x abstract_metal
    // at LuV+ terrasteel is renewable via TAP; removes permanent dependency on HV/EV material blocks per ingot
    addManaPondRecipe(event, {
        input: { tag: 'forge:ingots/terrasteel' },
        mana: 20000,
        catalyst: { type: 'block', block: 'botania:alchemy_catalyst' },
        output: { count: 4, item: 'gtceu:abstract_metal_ingot' }
    })
})
