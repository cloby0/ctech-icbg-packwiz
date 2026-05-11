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

ServerEvents.recipes(event => {
  let index = 1
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
        console.error(`Unknown input format at index ${index}: ${JSON.stringify(input)}`)
        index++
        return
      }

      console.log(`mana = ${mana}, input = ${itemInput}, output = ${outputId}, index = ${index}`)

      let isConjuration = catalystBlock === "botania:conjuration_catalyst"

      let r = event.recipes.gtceu.mana_pond(`botania/recipe_number_${index}`)
        .inputFluids(Fluid.of('starbunclemania:source_fluid', mana))
        .duration(manaRound(mana))
        .EUt(120)
        .circuit(catalystify(catalystBlock))

      if (isConjuration) {
        r.notConsumable(itemInput)
        .itemOutputs(`1x ${outputId}`)
      } else {
        r.itemInputs(itemInput)
        .itemOutputs(`${outputCount}x ${outputId}`)
      }

      index++
    })
  })
})
