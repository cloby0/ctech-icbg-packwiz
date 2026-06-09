let machineTier = [
    'lv',
    'mv',
    'hv',
    'ev',
    'iv',
    'luv',
    'zpm',
    'uv'
]
let tierCable = [
    'tin',
    'copper',
    'gold',
    'aluminium',
    'platinum',
    'niobium_titanium',
    'vanadium_gallium',
    'yttrium_barium_cuprate'
]
let tierMagic = [
    'gtceu:luminessence_dust',
    'gtceu:source_plate',
    'gtceu:holy_silver_plate',
    'gtceu:prima_materia_plate',
    'gtceu:manasteel_plate',
    'gtceu:terrasteel_plate',
    'gtceu:elementium_plate',
    'gtceu:gaia_spirit_plate'
]
ServerEvents.recipes(event => {
  machineTier.forEach((tier, index) => {
    let cableType = tierCable[index]
    event.shaped(`gtceu:${tier}_arms_manufacturer`, [
        'ACM',
        'BHB',
        'WCW'
      ], {
        A: `gtceu:${tier}_robot_arm`,
        M: `gtceu:${tier}_electric_motor`,
        C: `#gtceu:circuits/${tier}`,
        B: `gtceu:${tier}_conveyor_module`,
        H: `gtceu:${tier}_machine_hull`,
        W: `gtceu:${cableType}_single_cable`
      })
    
    event.shaped(`gtceu:${tier}_cyberware_constructor`, [
        'ACM',
        'PHP',
        'WCW'
      ], {
        A: `gtceu:${tier}_robot_arm`,
        M: `gtceu:${tier}_electric_motor`,
        C: `#gtceu:circuits/${tier}`,
        P: `gtceu:${tier}_electric_pump`,
        H: `gtceu:${tier}_machine_hull`,
        W: `gtceu:${cableType}_single_cable`
      })

    if (index > 2) {
      event.shaped(`gtceu:${tier}_me_fabricator`, [
          'ACM',
          'BHZ',
          'WCW'
        ], {
          A: `gtceu:${tier}_robot_arm`,
          M: `gtceu:${tier}_emitter`,
          C: `#gtceu:circuits/${tier}`,
          B: `gtceu:${tier}_conveyor_module`,
          H: `gtceu:${tier}_machine_hull`,
          W: `gtceu:${cableType}_single_cable`,
          Z: `kubejs:matter_energy_circuit`
        })
      }

    
  });
})