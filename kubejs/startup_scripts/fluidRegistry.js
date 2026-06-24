StartupEvents.registry('fluid', event => {
    event.create('kubejs:liquid_computation')
        .displayName('Liquid Computation')
        .color(0x00CCFF)
        .viscosity(500)

    event.create('kubejs:draconic_computation')
        .displayName('Draconic Computation')
        .color(0x6622CC)
        .viscosity(400)

    event.create('kubejs:chaos_matrix_fluid')
        .displayName('Chaos Matrix Fluid')
        .color(0xFF3300)
        .viscosity(600)

    event.create('kubejs:dissolved_lacrima')
        .displayName('Dissolved Lacrima')
        .color(0x44AAEE)
        .viscosity(300)

    event.create('kubejs:seminal_plasma')
        .displayName('Seminal Plasma')
        .color(0xF5F0DC)
        .viscosity(200)
})
