
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

function catalystify(str) {
    if (str === "botania:alchemy_catalyst") {
        return 2;
    } else if (str === "botania:conjuration_catalyst") {
        return 3;
    } else {
        return 1;
    }
}

// Inverse of ars_botania mana_convert (source buys mana at 2:1).
let source_rate = 0.5

let _nextManaPondIndex = 1

function addManaPondRecipe(event, crecipe) {
    let index = _nextManaPondIndex++
    let mana = crecipe.mana
    let inputs = Array.isArray(crecipe.input) ? crecipe.input : [crecipe.input]
    let output = crecipe.output

    let catalyst = crecipe.catalyst ?? "minecraft:barrier"
    let catalystBlock = catalyst === "minecraft:barrier" ? "minecraft:barrier" : catalyst.block

    if (!output) {
        console.warn(`[mana_pond] skipping recipe at index ${index} with no output`)
        return
    }
    let outputCount = output.count || 1
    let outputId = typeof output.item === 'string' ? output.item : 'minecraft:barrier'

    if (outputId !== 'minecraft:barrier' && !$ForgeRegistries.ITEMS.getValue(outputId)) {
        console.warn(`[mana_pond] skipping recipe with non-existent output '${outputId}'`)
        return
    }

    let isConjuration = catalystBlock === "botania:conjuration_catalyst"

    if (!crecipe.skipPool) {
        inputs.forEach((input, i) => {
            let poolInput = {}
            if (input.tag) {
                poolInput = { tag: input.tag }
            } else {
                let itemId = input.item ?? input.id ?? null
                if (itemId) poolInput = { item: itemId }
            }
            let poolRecipeObj = {
                type: 'botania:mana_infusion',
                input: poolInput,
                mana: mana,
                output: output
            }
            if (catalystBlock !== 'minecraft:barrier') {
                poolRecipeObj.catalyst = { type: 'block', block: catalystBlock }
            }
            let inputKey = input.tag
                ? `tag_${stripNamespace(input.tag)}`
                : stripNamespace(input.item ?? input.id ?? 'unknown')
            event.custom(poolRecipeObj).id(`kubejs:mana_pool_${inputKey}_to_${stripNamespace(outputId)}_${index}_${i}`)
        })
    }

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

        let r = event.recipes.gtceu.mana_pond(`botania/${inputName}_to_${outputName}_${index}`)
            .inputFluids(Fluid.of('starbunclemania:source_fluid', Math.round(mana * source_rate)))
            .duration((manaRound(mana * source_rate) * 2))
            .EUt(7680 + Math.round(mana * source_rate / 25))
            .circuit(catalystify(catalystBlock))

        if (isConjuration) {
            r.notConsumable(itemInput)
            .itemOutputs(`1x ${outputId}`)
        } else {
            r.itemInputs(itemInput)
            .itemOutputs(`${outputCount}x ${outputId}`)
        }
    })
}

global.addManaPondRecipe = addManaPondRecipe

ServerEvents.recipes(event => {
    event.remove({ id: "botania:mana_infusion/manasteel" })
    event.remove({ id: "botania:mana_infusion/manasteel_block" })

    event.forEachRecipe({ type: 'botania:mana_infusion' }, recipe => {
        const crecipe = JSON.parse(recipe.json.toString())
        crecipe.skipPool = true
        addManaPondRecipe(event, crecipe)
    })

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

    event.recipes.gtceu.assembler('mana_livingrock_casing_assembly')
        .itemInputs(
            '4x gtceu:manaplatinite_plate',
            '4x gtceu:manaplatinite_rod',
            '1x botania:livingrock_bricks',
            '1x #gtceu:circuits/iv'
        )
        .inputFluids(Fluid.of('gtceu:lubricant', 50))
        .itemOutputs('8x kubejs:mana_livingrock_casing')
        .duration(200)
        .EUt(GTValues.VA[GTValues.IV])
})
