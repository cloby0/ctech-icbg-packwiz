ServerEvents.recipes(event => {
    function kilnRecipe(id, input, output) {
        event.recipes.gtceu.kiln(`${id}`)
                .itemInputs(`${input}`)
                .itemOutputs(`${output}`)
                .duration(30)
    }
    
    kilnRecipe('glass', 'gtceu:glass_dust', 'minecraft:glass');

    event.shaped('gtceu:kiln', [
        'BBB',
        'BCB',
        'LLL'
    ], {
        B: 'minecraft:mud_bricks',
        C: 'minecraft:campfire',
        L: '#minecraft:logs'
    });
});
