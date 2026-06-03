ServerEvents.recipes(event => {
    event.recipes.gtceu.epitaxial_growth_chamber('gesundheit')
        .itemInputs('24x gtceu:iron_bolt', '3x minecraft:gunpowder', '16x create:copper_nugget')
        .inputFluids()
        .itemOutputs(Item.of('tacz:ammo', 48, '{AmmoId:"tacz:45_70"}'))
        .duration(100)
        .EUt(30)
        .circuit(1)
});