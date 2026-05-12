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

//one mana = how many source?
let source_rate = 1

ServerEvents.recipes(event => {
  event.forEachRecipe({ type: 'botania:mana_infusion' }, recipe => {
    const crecipe = JSON.parse(recipe.json.toString())
    let mana = crecipe.mana
    let inputs = Array.isArray(crecipe.input) ? crecipe.input : [crecipe.input]
    let output = crecipe.output

    let catalyst = crecipe.catalyst ?? "minecraft:barrier"
    let catalystBlock = catalyst === "minecraft:barrier" ? "minecraft:barrier" : catalyst.block

    let outputCount = output.count || 1
    let outputId = output.item ?? 'minecraft:barrier'

    inputs.forEach(input => {
      let inputCount = input.count || 1
      let itemId = input.item ?? input.id ?? null

      let itemInput;
      if (input.tag) {
        itemInput = `${inputCount}x #${input.tag}`
      } else if (itemId) {
        itemInput = `${inputCount}x ${itemId}`
      } else {
        console.error(`Unknown input format for mana pond!!: ${JSON.stringify(input)}`)
        return
      }
      
      let inputName = stripNamespace(itemInput)
      let outputName = stripNamespace(outputId)

      console.log(`mana = ${mana}, input = ${itemInput}, output = ${outputId}`)

      let isConjuration = catalystBlock === "botania:conjuration_catalyst"

      let r = event.recipes.gtceu.mana_pond(`botania/${inputName}_to_${outputName}`)
        .inputFluids(Fluid.of('starbunclemania:source_fluid', (mana*source_rate)))
        .duration((manaRound(mana)*2))
        .EUt(7680 + Math.round(mana/25))
        .circuit(catalystify(catalystBlock))

      if (isConjuration) {
        r.notConsumable(itemInput)
        .itemOutputs(`1x ${outputId}`)
      } else {
        r.itemInputs(itemInput)
        .itemOutputs(`${outputCount}x ${outputId}`)
      }
    })
  })

  event.recipes.gtceu.mana_pond('botania/manasteel_from_abstract')
    .inputFluids(Fluid.of('starbunclemania:source_fluid', 23500))
    .duration(manaRound(23500) * 2)
    .EUt(7680 + Math.round(23500 / 25))
    .circuit(1)
    .itemInputs('1x gtceu:abstract_metal_ingot')
    .itemOutputs('1x botania:manasteel_ingot')
})
