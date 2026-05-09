ServerEvents.recipes(event => {
    event.remove({ mod: 'tacz' })
    event.remove({ mod: 'ars_armorer' })
    event.remove({ mod: 'create_armorer' })
    event.remove({ mod: 'fallout' })
    event.remove({ mod: 'applied_armorer' })

    event.recipes.gtceu.arms_making('test')
        .itemInputs(
            '64x minecraft:dirt',
            '32x minecraft:diamond'
        )
        .inputFluids(
            Fluid.of('minecraft:lava', 1500)
        )
        .itemOutputs(
            'minecraft:stick'
        )
        .duration(100)
        .EUt(30)

});