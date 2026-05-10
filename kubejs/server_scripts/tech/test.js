ServerEvents.recipes(event => {
  event.forEachRecipe({ type: 'botania:mana_infusion' }, recipe => {
    const crecipe = JSON.parse(recipe.json.toString())
    let mana = crecipe.mana
    let input = crecipe.input
    let output = crecipe.output
    event.recipes.gtceu.chemical_bath(`${input}_to_${output}`)
        .itemInputs(
            input
        )
        .inputFluids(
            Fluid.of('starbunclemania:source_fluid', mana)
        )
        .itemOutputs(
            output
        )
        .duration(mana/100)
        .EUt(30)
  })
})