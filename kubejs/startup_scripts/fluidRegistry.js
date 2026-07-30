StartupEvents.registry('fluid', event => {
    // Argent Energy. DOOM's Argent Energy is what the UAC strip-mines Hell to obtain; here it is
    // rendered from blood and will, which makes extraction literal -- life converted into power.
    // Produced at ZPM so the Draconic Evolution hardware at ZPM/UV can reach it; volume is the
    // tier gate, not availability. Replaced liquid_computation + draconic_computation (named for
    // a dead tier theme, and duplicating GT's own computation system) and then confluence, which
    // was named for its balance role rather than for anything in the world.
    event.create('kubejs:argent_energy')
        .displayName('Argent Energy')
        .color(0xE8622C)
        .viscosity(400)

    // Guardian Distillate: the UEV boss tier's resource. Extracted from Chaos Guardian drops,
    // and the axis is yield per shard rather than throughput -- more refining steps recover more
    // fluid from the same drop, so the boss stays an economy instead of a one-time unlock.
    event.create('kubejs:guardian_distillate')
        .displayName('Guardian Distillate')
        .color(0xD4145A)
        .viscosity(600)

    event.create('kubejs:dissolved_lacrima')
        .displayName('Dissolved Lacrima')
        .color(0x44AAEE)
        .viscosity(300)

    event.create('kubejs:seminal_plasma')
        .displayName('Seminal Plasma')
        .color(0xF5F0DC)
        .viscosity(200)

    event.create('kubejs:temporal_plasma')
        .displayName('Temporal Plasma')
        .color(0xAA66FF)
        .viscosity(300)

    event.create('kubejs:unbound_causality')
        .displayName('Unbound Causality')
        .color(0x5A3D7A)
        .viscosity(700)

    event.create('kubejs:locked_timeline')
        .displayName('Locked Timeline')
        .color(0x66CCEE)
        .viscosity(450)

    event.create('kubejs:branch_residue')
        .displayName('Branch Residue')
        .color(0x661122)
        .viscosity(900)

    event.create('kubejs:causal_lock_fluid')
        .displayName('Causal Lock Fluid')
        .color(0xF0F0F5)
        .viscosity(250)
})
