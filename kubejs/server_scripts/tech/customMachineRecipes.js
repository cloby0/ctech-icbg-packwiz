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
    'yttrium_barium_cuprate',
    'draconic_fluxite',
    'chaotic_singulite',
    'cumium'
]
let tierMagic = [
    'gtceu:luminessence_dust',
    'gtceu:mana_plate',
    'gtceu:holy_silver_plate',
    'gtceu:prima_materia_plate',
    'gtceu:manasteel_plate',
    'gtceu:terrasteel_plate',
    'gtceu:elementium_plate',
    'gtceu:gaia_spirit_plate',
    'gtceu:quantum_star',
    'draconicevolution:chaos_shard',
    'draconicevolution:large_chaos_frag'
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

  event.recipes.gtceu.assembler('military_industrial_complex_controller')
      .itemInputs(
          '1x gtceu:iv_machine_hull',
          '4x gtceu:tungsten_steel_plate',
          '2x gtceu:iv_robot_arm',
          '2x gtceu:iv_conveyor_module',
          '2x #gtceu:circuits/iv'
      )
      .inputFluids(Fluid.of('gtceu:soldering_alloy', 576))
      .itemOutputs('1x gtceu:military_industrial_complex')
      .duration(30 * 20)
      .EUt(GTValues.VA[GTValues.IV])

  event.recipes.gtceu.assembler('human_augmentation_plant_controller')
      .itemInputs(
          '1x gtceu:hv_machine_hull',
          '2x gtceu:stainless_steel_frame',
          '2x gtceu:hv_robot_arm',
          '2x gtceu:hv_electric_pump',
          '2x #gtceu:circuits/hv'
      )
      .inputFluids(Fluid.of('gtceu:soldering_alloy', 288))
      .itemOutputs('1x gtceu:human_augmentation_plant')
      .duration(30 * 20)
      .EUt(GTValues.VA[GTValues.HV])
})