//priority: 1
// runs before tier scripts (priority 0), so forEachRecipe only sees vanilla/mod-added imbuement recipes.
// any ars_nouveau:imbuement recipe added by a tier script needs a manual addImbuementRecipe call below.

let $ForgeRegistries = Java.loadClass("net.minecraftforge.registries.ForgeRegistries");

function stripNamespace(str) {
    const colon = str.indexOf(':')
    return colon === -1 ? str : str.slice(colon + 1)
}

function sourceRound(num) {
    if ((num / 100) > 20) {
        return num / 100
    } else {
        return 20
    }
}

function resolveItem(entry, debugLabel) {
    if (!entry) {
        console.error(`[imbuement] null entry at ${debugLabel}`)
        return null
    }

    let resolved = entry
    if (typeof resolved.item === 'object' && resolved.item !== null) {
        resolved = resolved.item
    }

    let count = resolved.count || 1

    if (resolved.tag) {
        return `${count}x #${resolved.tag}`
    } else if (typeof resolved.item === 'string') {
        if ($ForgeRegistries.ITEMS.getValue(resolved.item)) {
            return `${count}x ${resolved.item}`
        } else {
            console.warn(`[imbuement] skipping non-existent item '${resolved.item}' at ${debugLabel}`)
            return null
        }
    }

    console.error(`[imbuement] could not resolve item at ${debugLabel}: ${JSON.stringify(entry)}`)
    return null
}

// the core logic, separated out so it can be called manually too
function addImbuementRecipe(event, crecipe, index) {
    let outputRaw = crecipe.output ?? null
    if (!outputRaw) {
        console.error(`[imbuement] no output at index ${index}`)
        return
    }
    let outputId = typeof outputRaw === 'object' ? (outputRaw.item ?? null) : outputRaw
    let outputCount = (typeof outputRaw === 'object' ? outputRaw.count : crecipe.count) || 1

    let sourceCost = Math.max(crecipe.source || 0, 100)

    let centerInput = resolveItem(crecipe.input, `index ${index} input`)
    if (!centerInput) {
        console.error(`[imbuement] skipping index ${index}, could not resolve center input`)
        return
    }

    let pedestalItems = crecipe.pedestalItems ?? []
    let pedestalInputs = []
    for (let i = 0; i < pedestalItems.length; i++) {
        let inner = pedestalItems[i].item ?? pedestalItems[i]
        let p = resolveItem(inner, `index ${index} pedestal[${i}]`)
        if (p) pedestalInputs.push(p)
    }

    let recipeId = `ars_nouveau/imbuement_${stripNamespace(outputId)}_${index}`
    console.log(`[imbuement] index=${index} output=${outputId} source=${sourceCost} pedestals=${pedestalInputs.length}`)
    console.log(`[imbuement] raw source from json: ${crecipe.source}, sourceCost: ${crecipe.sourceCost}`)
    let r = event.recipes.gtceu.imbuement_factory(recipeId)
        .inputFluids(Fluid.of('starbunclemania:source_fluid', sourceCost))
        .itemInputs(centerInput)
        .itemOutputs(`${outputCount}x ${outputId}`)
        .duration(sourceRound(sourceCost) * 2)
        .EUt(1920 + Math.round(sourceCost / 25))

    pedestalInputs.forEach(pedestal => r.notConsumable(pedestal))
}

ServerEvents.recipes(event => {
    let index = 1

    event.forEachRecipe({ type: 'ars_nouveau:imbuement' }, recipe => {
        const crecipe = JSON.parse(recipe.json.toString())
        addImbuementRecipe(event, crecipe, index)
        index++
    })


    // manual mirrors for recipes defined in tier scripts (not caught by forEachRecipe above)
    addImbuementRecipe(event, {
        input: { item: "gtceu:concepts_bucket" },
        output: "gtceu:metal_form_bucket",
        source: 7500,
        pedestalItems: [
            { item: { item: "gtceu:holy_silver_block" } }
        ]
    }, index++)

    addImbuementRecipe(event, {
        input: { item: "gtceu:metal_form_bucket" },
        output: "kubejs:disorganized_metal_form",
        source: 3000,
        pedestalItems: [
            { item: { item: 'mysticalagriculture:ice_essence', count: 4 } }
        ]
    }, index++)

    addImbuementRecipe(event, {
        input: { item: "minecraft:amethyst_shard" },
        output: "irons_spellbooks:arcane_essence",
        source: 750,
        pedestalItems: []
    }, index++)

    addImbuementRecipe(event, {
        input: { item: "kubejs:glowing_compound_dust" },
        output: "kubejs:impure_glimmering_dust",
        source: 100,
        pedestalItems: []
    }, index++)

    addImbuementRecipe(event, {
        input: { item: 'ars_nouveau:source_gem' },
        output: 'reliquary:void_tear',
        source: 1500,
        pedestalItems: [
            { item: { item: 'minecraft:crying_obsidian', count: 4 } }
        ]
    }, index++)

    addImbuementRecipe(event, {
        input: { item: 'kubejs:chaos_essence' },
        output: 'gtceu:prima_materia_ingot',
        source: 10000,
        pedestalItems: [
            { item: { item: 'kubejs:element_attunement_stone'} }
        ]
    }, index++)

    addImbuementRecipe(event, {
        input: { item: 'gtceu:source_dust' },
        output: 'kubejs:pure_source_gem_dust',
        source: 500,
        pedestalItems: [
            { item: { item: 'kubejs:magebloom_sieve'} }
        ]
    }, index++)

    addImbuementRecipe(event, {
        input: { item: 'kubejs:pure_source_gem_dust' },
        output: 'kubejs:rough_source_gem',
        source: 2500,
        pedestalItems: [
            { item: { item: 'ars_nouveau:fire_essence'} }
        ]
    }, index++)

    addImbuementRecipe(event, {
        input: { item: 'minecraft:ender_pearl' },
        output: 'irons_spellbooks:divine_pearl',
        source: 3000,
        pedestalItems: [
            { item: { item: "kubejs:sacred_ambrosium_shard"} }
        ]
    }, index++)

    addImbuementRecipe(event, {
        input: { item: 'kubejs:holy_silver_blend' },
        output: 'gtceu:holy_silver_dust',
        source: 2500,
        pedestalItems: [
            { item: { item: "reliquary:mercy_cross"} }
        ]
    }, index++)

    addImbuementRecipe(event, {
        input: { item: 'kubejs:elven_concentrate' },
        output: 'kubejs:elementite_dust',
        source: 8000,
        pedestalItems: [
            { item: { item: 'ars_nouveau:water_essence' } },
            { item: { item: 'ars_nouveau:air_essence' } },
            { item: { item: 'gtceu:luminessence_dust' } }
        ]
    }, index++)

    addImbuementRecipe(event, {
        input: { item: 'kubejs:vengeful_gaia_spirit' },
        output: 'kubejs:soul_of_gaia',
        source: 20000,
        pedestalItems: [
            { item: { item: 'mysticalagriculture:wither_skeleton_essence', count: 2 } },
            { item: { item: 'mysticalagriculture:enderman_essence', count: 2 } }
        ]
    }, index++)

    // magebloom_crop — journeyman.js
    addImbuementRecipe(event, {
        input: { item: 'minecraft:wheat_seeds' },
        output: 'ars_nouveau:magebloom_crop',
        source: 2500,
        pedestalItems: [
            { item: { item: 'ars_nouveau:archwood_planks' } },
            { item: { item: 'ars_nouveau:archwood_planks' } },
            { item: { item: 'gtceu:luminessence_dust' } },
            { item: { item: 'gtceu:luminessence_dust' } }
        ]
    }, index++)

    // resonant_zanite_crystal — journeyman.js
    addImbuementRecipe(event, {
        input: { item: 'kubejs:enchanted_zanite_gem' },
        output: 'kubejs:resonant_zanite_crystal',
        source: 1500,
        pedestalItems: [
            { item: { item: 'ars_nouveau:source_gem' } },
            { item: { item: 'ars_nouveau:source_gem' } }
        ]
    }, index++)

    // sacred_ambrosium_shard — initiate.js
    addImbuementRecipe(event, {
        input: { item: 'kubejs:sanctified_ambrosium_bloom' },
        output: 'kubejs:sacred_ambrosium_shard',
        source: 1500,
        pedestalItems: [
            { item: { item: 'gtceu:luminessence_dust' } },
            { item: { item: 'gtceu:luminessence_dust' } }
        ]
    }, index++)

    // gravitite_ingot — sorcerer.js
    addImbuementRecipe(event, {
        input: { item: 'kubejs:altar_charged_gravitite' },
        output: 'aether_redux:gravitite_ingot',
        source: 5000,
        pedestalItems: [
            { item: { item: 'gtceu:holy_silver_ingot' } },
            { item: { item: 'gtceu:holy_silver_ingot' } },
            { item: { item: 'kubejs:resonant_zanite_crystal' } },
            { item: { item: 'kubejs:resonant_zanite_crystal' } }
        ]
    }, index++)

    // hexed_amethyst_core — alchemist.js
    addImbuementRecipe(event, {
        input: { item: 'hexcasting:charged_amethyst' },
        output: 'kubejs:hexed_amethyst_core',
        source: 5000,
        pedestalItems: [
            { item: { item: 'botania:manasteel_ingot' } },
            { item: { item: 'botania:manasteel_ingot' } },
            { item: { item: 'gtceu:abstract_metal_ingot' } },
            { item: { item: 'minecraft:glowstone' } }
        ]
    }, index++)


    // nameless trinkets imbuement chain — namelessTrinkets.js
    addImbuementRecipe(event, {
        input: { item: 'nameless_trinkets:dubious_dust' },
        output: 'nameless_trinkets:glowing_dust',
        source: 500,
        pedestalItems: [
            { item: { item: 'minecraft:glowstone_dust' } },
            { item: { item: 'minecraft:blaze_rod' } },
            { item: { item: 'minecraft:glowstone_dust' } },
            { item: { item: 'minecraft:quartz' } }
        ]
    }, index++)

    addImbuementRecipe(event, { input: { item: 'nameless_trinkets:glowing_dust' }, output: 'nameless_trinkets:callus', source: 750, pedestalItems: [{ item: { item: 'minecraft:rotten_flesh' } }, { item: { item: 'minecraft:cobblestone' } }, { item: { item: 'minecraft:hay_block' } }, { item: { item: 'minecraft:rotten_flesh' } }] }, index++)
    addImbuementRecipe(event, { input: { item: 'nameless_trinkets:glowing_dust' }, output: 'nameless_trinkets:electric_paddle', source: 750, pedestalItems: [{ item: { item: 'minecraft:oak_boat' } }, { item: { item: 'minecraft:redstone' } }, { item: { item: 'minecraft:oak_boat' } }, { item: { item: 'minecraft:redstone' } }] }, index++)
    addImbuementRecipe(event, { input: { item: 'nameless_trinkets:glowing_dust' }, output: 'nameless_trinkets:ethereal_wings', source: 1000, pedestalItems: [{ item: { item: 'minecraft:feather' } }, { item: { item: 'minecraft:phantom_membrane' } }, { item: { item: 'minecraft:feather' } }, { item: { item: 'minecraft:glass_pane' } }] }, index++)
    addImbuementRecipe(event, { input: { item: 'nameless_trinkets:glowing_dust' }, output: 'nameless_trinkets:experience_battery', source: 750, pedestalItems: [{ item: { item: 'minecraft:glass_bottle' } }, { item: { item: 'minecraft:redstone' } }, { item: { item: 'minecraft:glass_bottle' } }, { item: { item: 'minecraft:iron_ingot' } }] }, index++)
    addImbuementRecipe(event, { input: { item: 'nameless_trinkets:glowing_dust' }, output: 'nameless_trinkets:fertilizer', source: 750, pedestalItems: [{ item: { item: 'minecraft:bone_block' } }, { item: { item: 'minecraft:dirt' } }, { item: { item: 'minecraft:bone_block' } }, { item: { item: 'minecraft:leather' } }] }, index++)
    addImbuementRecipe(event, { input: { item: 'nameless_trinkets:glowing_dust' }, output: 'nameless_trinkets:fractured_nullstone', source: 1000, pedestalItems: [{ item: { item: 'minecraft:glowstone' } }, { item: { item: 'minecraft:lapis_block' } }, { item: { item: 'minecraft:glowstone' } }, { item: { item: 'minecraft:lapis_block' } }] }, index++)
    addImbuementRecipe(event, { input: { item: 'nameless_trinkets:glowing_dust' }, output: 'nameless_trinkets:fragile_cloud', source: 750, pedestalItems: [{ item: { item: 'minecraft:white_wool', count: 4 } }] }, index++)
    addImbuementRecipe(event, { input: { item: 'nameless_trinkets:glowing_dust' }, output: 'nameless_trinkets:ghast_eye', source: 1000, pedestalItems: [{ item: { item: 'minecraft:ghast_tear' } }, { item: { item: 'minecraft:redstone_block' } }, { item: { item: 'minecraft:ghast_tear' } }, { item: { item: 'minecraft:redstone_block' } }] }, index++)
    addImbuementRecipe(event, { input: { item: 'nameless_trinkets:glowing_dust' }, output: 'nameless_trinkets:missing_page', source: 1000, pedestalItems: [{ item: { item: 'minecraft:rotten_flesh' } }, { item: { item: 'minecraft:paper' } }, { item: { item: 'minecraft:bone' } }, { item: { item: 'minecraft:paper' } }] }, index++)
    addImbuementRecipe(event, { input: { item: 'nameless_trinkets:glowing_dust' }, output: 'nameless_trinkets:scarab_amulet', source: 750, pedestalItems: [{ item: { item: 'minecraft:chiseled_sandstone', count: 4 } }] }, index++)
    addImbuementRecipe(event, { input: { item: 'nameless_trinkets:glowing_dust' }, output: 'nameless_trinkets:speed_force', source: 1000, pedestalItems: [{ item: { item: 'minecraft:sugar' } }, { item: { item: 'minecraft:rabbit_foot' } }, { item: { item: 'minecraft:sugar' } }, { item: { item: 'minecraft:feather' } }] }, index++)
    addImbuementRecipe(event, { input: { item: 'nameless_trinkets:glowing_dust' }, output: 'nameless_trinkets:super_magnet', source: 1500, pedestalItems: [{ item: { item: 'nameless_trinkets:experience_magnet' } }, { item: { item: 'nameless_trinkets:broken_magnet' } }, { item: { item: 'minecraft:iron_block' } }, { item: { item: 'minecraft:iron_block' } }] }, index++)
    addImbuementRecipe(event, { input: { item: 'nameless_trinkets:glowing_dust' }, output: 'nameless_trinkets:tear_of_the_sea', source: 1000, pedestalItems: [{ item: { item: 'minecraft:cod' } }, { item: { item: 'minecraft:salmon' } }, { item: { item: 'minecraft:tropical_fish' } }, { item: { item: 'minecraft:pufferfish' } }] }, index++)
    addImbuementRecipe(event, { input: { item: 'nameless_trinkets:glowing_dust' }, output: 'nameless_trinkets:tick', source: 750, pedestalItems: [{ item: { item: 'minecraft:brown_mushroom' } }, { item: { item: 'minecraft:red_mushroom' } }, { item: { item: 'minecraft:hay_block' } }, { item: { item: 'minecraft:hay_block' } }] }, index++)
    addImbuementRecipe(event, { input: { item: 'nameless_trinkets:glowing_dust' }, output: 'nameless_trinkets:vampire_blood', source: 1000, pedestalItems: [{ item: { item: 'minecraft:crying_obsidian' } }, { item: { item: 'minecraft:blaze_powder' } }, { item: { item: 'minecraft:blaze_powder' } }, { item: { item: 'minecraft:clock' } }] }, index++)
    addImbuementRecipe(event, { input: { item: 'nameless_trinkets:glowing_dust' }, output: 'nameless_trinkets:what_magnet', source: 750, pedestalItems: [{ item: { item: 'minecraft:rotten_flesh' } }, { item: { item: 'minecraft:leather' } }, { item: { item: 'minecraft:porkchop' } }, { item: { item: 'minecraft:bone' } }] }, index++)

    // apprentice.js side materials
    addImbuementRecipe(event, { input: { item: 'gtceu:luminessence_dust' }, output: { item: 'minecraft:experience_bottle', count: 4 }, source: 500, pedestalItems: [{ tag: 'kubejs:fire_essences' }, { tag: 'kubejs:fire_essences' }] }, index++)
    addImbuementRecipe(event, { input: { item: 'gtceu:luminessence_dust' }, output: { item: 'hexcasting:charged_amethyst', count: 2 }, source: 500, pedestalItems: [{ tag: 'kubejs:air_essences' }] }, index++)

    // journeyman.js side materials
    addImbuementRecipe(event, { input: { item: 'kubejs:resonant_zanite_crystal' }, output: { item: 'irons_spellbooks:cinder_essence', count: 3 }, source: 1500, pedestalItems: [{ tag: 'kubejs:fire_essences' }, { tag: 'kubejs:fire_essences' }] }, index++)
    addImbuementRecipe(event, { input: { item: 'kubejs:resonant_zanite_crystal' }, output: { item: 'irons_spellbooks:arcane_ingot', count: 4 }, source: 1500, pedestalItems: [{ tag: 'kubejs:air_essences' }, { tag: 'kubejs:air_essences' }] }, index++)
})