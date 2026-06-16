//priority: 1
// runs before tier scripts (priority 0), so forEachRecipe only sees vanilla botania:mana_infusion recipes.
// any mana_infusion recipe added by a tier script needs a manual addManaPondRecipe call below.

let $ForgeRegistries = Java.loadClass("net.minecraftforge.registries.ForgeRegistries");

function stripNamespace(str) {
    const colon = str.indexOf(':')
    return colon === -1 ? str : str.slice(colon + 1)
}

function manaRound(num) {
    if ((num / 100) > 20) {
        return num / 100
    } else {
        return 20
    }
}

// maps catalyst block to GT circuit number: 1=no catalyst, 2=alchemy, 3=conjuration
function catalystify(str) {
    if (str === "botania:alchemy_catalyst") {
        return 2;
    } else if (str === "botania:conjuration_catalyst") {
        return 3;
    } else {
        return 1;
    }
}

// conversion ratio: 1 mana = this many source fluid units (tweak to change GT machine cost relative to botania)
let source_rate = 1

function addManaPondRecipe(event, crecipe) {
    let mana = crecipe.mana
    let inputs = Array.isArray(crecipe.input) ? crecipe.input : [crecipe.input]
    let output = crecipe.output

    let catalyst = crecipe.catalyst ?? "minecraft:barrier"
    let catalystBlock = catalyst === "minecraft:barrier" ? "minecraft:barrier" : catalyst.block

    let outputCount = output.count || 1
    let outputId = output.item ?? 'minecraft:barrier'

    let isConjuration = catalystBlock === "botania:conjuration_catalyst"

    inputs.forEach(input => {
        let inputCount = input.count || 1
        let itemId = input.item ?? input.id ?? null

        let itemInput;
        if (input.tag) {
            itemInput = `${inputCount}x #${input.tag}`
        } else if (itemId) {
            if (!$ForgeRegistries.ITEMS.getValue(itemId)) {
                console.warn(`[mana_pond] skipping non-existent item '${itemId}'`)
                return
            }
            itemInput = `${inputCount}x ${itemId}`
        } else {
            console.error(`[mana_pond] unknown input format: ${JSON.stringify(input)}`)
            return
        }

        let inputName = stripNamespace(itemInput)
        let outputName = stripNamespace(outputId)

        console.log(`[mana_pond] mana=${mana} input=${itemInput} output=${outputId}`)

        let r = event.recipes.gtceu.mana_pond(`botania/${inputName}_to_${outputName}`)
            .inputFluids(Fluid.of('starbunclemania:source_fluid', (mana * source_rate)))
            .duration((manaRound(mana) * 2))
            .EUt(7680 + Math.round(mana / 25))
            .circuit(catalystify(catalystBlock))

        // conjuration duplicates (input stays in, output added); alchemy transforms (input consumed)
        if (isConjuration) {
            r.notConsumable(itemInput)
            .itemOutputs(`1x ${outputId}`)
        } else {
            r.itemInputs(itemInput)
            .itemOutputs(`${outputCount}x ${outputId}`)
        }
    })
}

ServerEvents.recipes(event => {
    event.remove({ id: "botania:mana_infusion/manasteel" })
    event.remove({ id: "botania:mana_infusion/manasteel_block" })
    
    event.forEachRecipe({ type: 'botania:mana_infusion' }, recipe => {
        const crecipe = JSON.parse(recipe.json.toString())
        addManaPondRecipe(event, crecipe)
    })

    // manual recipes same JSON shape as botania:mana_infusion
    addManaPondRecipe(event, {
        mana: 3500,
        input: { item: 'gtceu:abstract_metal_ingot' },
        output: { item: 'botania:manasteel_ingot' }
    })

    addManaPondRecipe(event, {
        mana: 2000,
        input: { item: 'minecraft:glowstone' },
        output: { count: 4, item: 'gtceu:luminessence_dust' }
    })

    addManaPondRecipe(event, {
        mana: 3000,
        input: { tag: 'forge:ingots/silver' },
        catalyst: { block: 'botania:alchemy_catalyst' },
        output: { item: 'gtceu:holy_silver_ingot' }
    })

    addManaPondRecipe(event, {
        mana: 20000,
        input: { tag: 'forge:ingots/terrasteel' },
        catalyst: { block: 'botania:alchemy_catalyst' },
        output: { count: 4, item: 'gtceu:abstract_metal_ingot' }
    })

    addManaPondRecipe(event, {
        mana: 25000,
        input: { item: 'botania:mana_diamond' },
        catalyst: { block: 'botania:conjuration_catalyst' },
        output: { item: 'botania:mana_diamond' }
    })

    addManaPondRecipe(event, {
        mana: 15000,
        input: { item: 'botania:mana_pearl' },
        catalyst: { block: 'botania:conjuration_catalyst' },
        output: { item: 'botania:mana_pearl' }
    })

    // controller block crafting recipe
    event.recipes.gtceu.assembler('automated_mana_pond_controller')
        .itemInputs(
            '4x gtceu:manaplatinite_plate',
            '1x gtceu:manaplatinite_frame',
            '1x botania:mana_pool',
            '1x gtceu:iv_electric_pump',
            '1x gtceu:iv_sensor',
            '1x #gtceu:circuits/iv'
        )
        .inputFluids(Fluid.of('gtceu:soldering_alloy', 144))
        .itemOutputs('1x gtceu:automated_mana_pond')
        .duration(400)
        .EUt(GTValues.VA[GTValues.IV])
})