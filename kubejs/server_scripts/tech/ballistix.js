ServerEvents.recipes(event => {

    // REMOVALS

    // tier 0-1 explosives
    event.remove({ output: 'ballistix:obsidian' })
    event.remove({ output: 'ballistix:condensive' })
    event.remove({ output: 'ballistix:attractive' })
    event.remove({ output: 'ballistix:repulsive' })
    event.remove({ output: 'ballistix:incendiary' })
    event.remove({ output: 'ballistix:shrapnel' })
    event.remove({ output: 'ballistix:chemical' })
    event.remove({ output: 'ballistix:debilitation' })
    event.remove({ output: 'ballistix:anvil' })
    event.remove({ output: 'ballistix:infestive' })

    // tier 2 explosives
    event.remove({ output: 'ballistix:fragmentation' })
    event.remove({ output: 'ballistix:contagious' })
    event.remove({ output: 'ballistix:breaching' })
    event.remove({ output: 'ballistix:thermobaric' })
    event.remove({ output: 'ballistix:sonic' })

    // tier 3 explosives
    event.remove({ output: 'ballistix:nuclear' })
    event.remove({ output: 'ballistix:emp' })
    event.remove({ output: 'ballistix:antigravity' })
    event.remove({ output: 'ballistix:endothermic' })
    event.remove({ output: 'ballistix:exothermic' })
    event.remove({ output: 'ballistix:ender' })
    event.remove({ output: 'ballistix:hypersonic' })
    event.remove({ output: 'ballistix:rejuvination' })

    // tier 4 explosives
    event.remove({ output: 'ballistix:antimatter' })
    event.remove({ output: 'ballistix:largeantimatter' })
    event.remove({ output: 'ballistix:darkmatter' })

    // grenades
    event.remove({ output: 'ballistix:grenadecondensive' })
    event.remove({ output: 'ballistix:grenadeshrapnel' })
    event.remove({ output: 'ballistix:grenadeincendiary' })
    event.remove({ output: 'ballistix:grenaderepulsive' })
    event.remove({ output: 'ballistix:grenadeattractive' })
    event.remove({ output: 'ballistix:grenadedebilitation' })
    event.remove({ output: 'ballistix:grenadechemical' })
    event.remove({ output: 'ballistix:grenadeanvil' })
    event.remove({ output: 'ballistix:grenadeinfestive' })

    // minecarts
    event.remove({ output: 'ballistix:minecartobsidian' })
    event.remove({ output: 'ballistix:minecartcondensive' })
    event.remove({ output: 'ballistix:minecartattractive' })
    event.remove({ output: 'ballistix:minecartrepulsive' })
    event.remove({ output: 'ballistix:minecartincendiary' })
    event.remove({ output: 'ballistix:minecartshrapnel' })
    event.remove({ output: 'ballistix:minecartchemical' })
    event.remove({ output: 'ballistix:minecartdebilitation' })
    event.remove({ output: 'ballistix:minecartanvil' })
    event.remove({ output: 'ballistix:minecartinfestive' })
    event.remove({ output: 'ballistix:minecartfragmentation' })
    event.remove({ output: 'ballistix:minecartcontagious' })
    event.remove({ output: 'ballistix:minecartbreaching' })
    event.remove({ output: 'ballistix:minecarthypersonic' })
    event.remove({ output: 'ballistix:minecartsonic' })
    event.remove({ output: 'ballistix:minecartantigravity' })
    event.remove({ output: 'ballistix:minecartnuclear' })
    event.remove({ output: 'ballistix:minecartemp' })
    event.remove({ output: 'ballistix:minecartendothermic' })
    event.remove({ output: 'ballistix:minecartexothermic' })
    event.remove({ output: 'ballistix:minecartender' })
    event.remove({ output: 'ballistix:minecartrejuvination' })
    event.remove({ output: 'ballistix:minecartantimatter' })
    event.remove({ output: 'ballistix:minecartlargeantimatter' })
    event.remove({ output: 'ballistix:minecartdarkmatter' })

    // machines and structures
    event.remove({ output: 'ballistix:launchersupportframetier1' })
    event.remove({ output: 'ballistix:launchersupportframetier2' })
    event.remove({ output: 'ballistix:launchersupportframetier3' })
    event.remove({ output: 'ballistix:launcherplatformtier1' })
    event.remove({ output: 'ballistix:launcherplatformtier2' })
    event.remove({ output: 'ballistix:launcherplatformtier3' })
    event.remove({ output: 'ballistix:launchercontrolpaneltier1' })
    event.remove({ output: 'ballistix:launchercontrolpaneltier2' })
    event.remove({ output: 'ballistix:launchercontrolpaneltier3' })
    event.remove({ output: 'ballistix:radar' })
    event.remove({ output: 'ballistix:firecontrolradar' })
    event.remove({ output: 'ballistix:esmtower' })
    event.remove({ output: 'ballistix:samturret' })
    event.remove({ output: 'ballistix:ciwsturret' })
    event.remove({ output: 'ballistix:laserturret' })
    event.remove({ output: 'ballistix:railgunturret' })
    event.remove({ output: 'ballistix:proximitydetector' })
    event.remove({ output: 'ballistix:airraidsiren' })
    event.remove({ output: 'ballistix:vls' })
    event.remove({ output: 'ballistix:landmine' })

    // handheld items
    event.remove({ output: 'ballistix:bullet' })
    event.remove({ output: 'ballistix:rocketlauncher' })
    event.remove({ output: 'ballistix:radargun' })
    event.remove({ output: 'ballistix:tracker' })
    event.remove({ output: 'ballistix:scanner' })
    event.remove({ output: 'ballistix:laserdesignator' })
    event.remove({ output: 'ballistix:defuser' })
    event.remove({ output: 'ballistix:aamissile' })
    event.remove({ output: 'ballistix:aamissilemk2' })

    // missiles
    event.remove({ output: 'ballistix:missiletier1' })
    event.remove({ output: 'ballistix:missiletier2' })
    event.remove({ output: 'ballistix:missiletier3' })
    event.remove({ output: 'ballistix:missilecluster' })

    // ============================================================
    // EV — HANDHELD WEAPONS + TOOLS
    // ============================================================

    // bullet: copper wire casing packed with gunpowder
    event.recipes.gtceu.assembler('ballistix_bullet')
        .itemInputs('4x gtceu:copper_single_wire', '4x minecraft:gunpowder', '2x gtceu:lead_plate')
        .inputFluids(Fluid.of('gtceu:soldering_alloy', 72))
        .itemOutputs('16x ballistix:bullet')
        .duration(5 * 20)
        .EUt(GTValues.VA[GTValues.EV])

    // rocket launcher: steel tube + EV motor + scope glass + EV circuits
    event.recipes.gtceu.assembler('ballistix_rocketlauncher')
        .itemInputs('4x gtceu:steel_plate', 'gtceu:ev_electric_motor', '1x gtceu:glass_lens', '#gtceu:circuits/ev')
        .itemOutputs('1x ballistix:rocketlauncher')
        .duration(20 * 20)
        .EUt(GTValues.VA[GTValues.EV])

    // radar gun: aluminium frame + EV emitter/sensor pair for range finding
    event.recipes.gtceu.assembler('ballistix_radargun')
        .itemInputs('2x gtceu:aluminium_plate', 'gtceu:ev_emitter', 'gtceu:ev_sensor', '2x #gtceu:circuits/ev')
        .inputFluids(Fluid.of('gtceu:soldering_alloy', 144))
        .itemOutputs('1x ballistix:radargun')
        .duration(20 * 20)
        .EUt(GTValues.VA[GTValues.EV])

    // scanner: area scanner — sensor array in steel housing
    event.recipes.gtceu.assembler('ballistix_scanner')
        .itemInputs('gtceu:ev_sensor', 'gtceu:ev_emitter', '2x gtceu:aluminium_plate', '2x #gtceu:circuits/ev')
        .inputFluids(Fluid.of('gtceu:soldering_alloy', 144))
        .itemOutputs('1x ballistix:scanner')
        .duration(20 * 20)
        .EUt(GTValues.VA[GTValues.EV])

    // laser designator: focused EV emitter through glass lens for target painting
    event.recipes.gtceu.assembler('ballistix_laserdesignator')
        .itemInputs('gtceu:ev_emitter', 'gtceu:glass_lens', '2x gtceu:aluminium_plate', '#gtceu:circuits/ev')
        .itemOutputs('1x ballistix:laserdesignator')
        .duration(15 * 20)
        .EUt(GTValues.VA[GTValues.EV])

    // defuser: precision disarming tool — circuits + pliers + sensor feedback
    event.recipes.gtceu.assembler('ballistix_defuser')
        .itemInputs('2x gtceu:steel_plate', 'gtceu:ev_sensor', '#gtceu:circuits/ev', '2x gtceu:copper_single_wire')
        .itemOutputs('1x ballistix:defuser')
        .duration(15 * 20)
        .EUt(GTValues.VA[GTValues.EV])

    // ============================================================
    // EV — INFRASTRUCTURE (TURRETS, RADAR, DETECTION)
    // ============================================================

    // radar block: phased array of EV emitter/sensor panels on aluminium chassis
    event.recipes.gtceu.assembler('ballistix_radar')
        .itemInputs('2x gtceu:ev_sensor', '2x gtceu:ev_emitter', '4x gtceu:aluminium_plate', '2x #gtceu:circuits/ev')
        .inputFluids(Fluid.of('gtceu:soldering_alloy', 288))
        .itemOutputs('1x ballistix:radar')
        .duration(30 * 20)
        .EUt(GTValues.VA[GTValues.EV])

    // proximity detector: ground sensor — tripwire logic in steel casing
    event.recipes.gtceu.assembler('ballistix_proximitydetector')
        .itemInputs('gtceu:ev_sensor', '2x gtceu:steel_plate', '#gtceu:circuits/ev', '4x gtceu:red_alloy_plate')
        .itemOutputs('1x ballistix:proximitydetector')
        .duration(15 * 20)
        .EUt(GTValues.VA[GTValues.EV])

    // air raid siren: high-output EV emitter driving a resonance horn
    event.recipes.gtceu.assembler('ballistix_airraidsiren')
        .itemInputs('4x gtceu:steel_plate', 'gtceu:ev_emitter', 'gtceu:ev_electric_motor', '#gtceu:circuits/ev')
        .itemOutputs('1x ballistix:airraidsiren')
        .duration(20 * 20)
        .EUt(GTValues.VA[GTValues.EV])

    // landmine: proximity sensor trigger buried in steel housing with condensive charge
    event.recipes.gtceu.assembler('ballistix_landmine')
        .itemInputs('ballistix:condensive', 'gtceu:ev_sensor', '2x gtceu:steel_plate', '#gtceu:circuits/ev')
        .itemOutputs('1x ballistix:landmine')
        .duration(15 * 20)
        .EUt(GTValues.VA[GTValues.EV])

    // SAM turret: surface-to-air missile battery — steel chassis + motors + guidance
    event.recipes.gtceu.assembler('ballistix_samturret')
        .itemInputs('4x gtceu:steel_plate', '2x gtceu:ev_electric_motor', 'gtceu:ev_emitter', '2x #gtceu:circuits/ev')
        .inputFluids(Fluid.of('gtceu:soldering_alloy', 144))
        .itemOutputs('1x ballistix:samturret')
        .duration(25 * 20)
        .EUt(GTValues.VA[GTValues.EV])

    // CIWS turret: close-in weapon system — high-rate motor + rotary mechanism
    event.recipes.gtceu.assembler('ballistix_ciwsturret')
        .itemInputs('4x gtceu:stainless_steel_plate', '2x gtceu:ev_electric_motor', 'gtceu:ev_robot_arm', '2x #gtceu:circuits/ev')
        .inputFluids(Fluid.of('gtceu:soldering_alloy', 144))
        .itemOutputs('1x ballistix:ciwsturret')
        .duration(25 * 20)
        .EUt(GTValues.VA[GTValues.EV])

    // ============================================================
    // EV — TIER 0 EXPLOSIVE
    // ============================================================

    // obsidian: obsidian-encased shaped charge — inert to most environmental damage
    event.recipes.gtceu.arms_manufacturer('ballistix_obsidian_explosive')
        .itemInputs('4x minecraft:obsidian', 'minecraft:tnt', '4x minecraft:gunpowder', 'gtceu:stainless_steel_plate')
        .itemOutputs('2x ballistix:obsidian')
        .duration(15 * 20)
        .EUt(GTValues.VA[GTValues.EV])

    // ============================================================
    // EV — TIER 1 EXPLOSIVES
    // ============================================================

    // condensive: compressed dual-TNT charge with redstone detonator — base explosive
    event.recipes.gtceu.arms_manufacturer('ballistix_condensive')
        .itemInputs('4x minecraft:tnt', 'minecraft:redstone_block', '2x gtceu:stainless_steel_plate')
        .itemOutputs('4x ballistix:condensive')
        .duration(15 * 20)
        .EUt(GTValues.VA[GTValues.EV])

    // repulsive: condensive with compressed air — shockwave push field
    event.recipes.gtceu.arms_manufacturer('ballistix_repulsive')
        .itemInputs('2x ballistix:condensive', '2x gtceu:steel_spring')
        .inputFluids(Fluid.of('gtceu:air', 4000))
        .itemOutputs('2x ballistix:repulsive')
        .duration(15 * 20)
        .EUt(GTValues.VA[GTValues.EV])

    // attractive: condensive with magnetic iron dust — gravitational pull field
    event.recipes.gtceu.arms_manufacturer('ballistix_attractive')
        .itemInputs('2x ballistix:condensive', '4x gtceu:magnetic_iron_dust', '4x minecraft:lapis_lazuli')
        .itemOutputs('2x ballistix:attractive')
        .duration(15 * 20)
        .EUt(GTValues.VA[GTValues.EV])

    // incendiary: repulsive core with blaze components and lava for ignition spread
    event.recipes.gtceu.arms_manufacturer('ballistix_incendiary')
        .itemInputs('ballistix:repulsive', '4x minecraft:blaze_powder', 'minecraft:lava_bucket', 'gtceu:stainless_steel_plate')
        .itemOutputs('2x ballistix:incendiary')
        .duration(20 * 20)
        .EUt(GTValues.VA[GTValues.EV])

    // shrapnel: condensive with steel dust fragments — high-velocity projectile burst
    event.recipes.gtceu.arms_manufacturer('ballistix_shrapnel')
        .itemInputs('2x ballistix:condensive', '4x gtceu:small_steel_dust', '4x minecraft:gunpowder', 'gtceu:stainless_steel_plate')
        .itemOutputs('2x ballistix:shrapnel')
        .duration(15 * 20)
        .EUt(GTValues.VA[GTValues.EV])

    // chemical: condensive with sulfur dioxide gas and glass dispersal vials
    event.recipes.gtceu.arms_manufacturer('ballistix_chemical')
        .itemInputs('2x ballistix:condensive', '2x gtceu:glass_tube', 'gtceu:stainless_steel_plate')
        .inputFluids(Fluid.of('gtceu:sulfur_dioxide', 4000))
        .itemOutputs('2x ballistix:chemical')
        .duration(20 * 20)
        .EUt(GTValues.VA[GTValues.EV])

    // debilitation: condensive with poison compounds — biological effect area denial
    event.recipes.gtceu.arms_manufacturer('ballistix_debilitation')
        .itemInputs('2x ballistix:condensive', '4x minecraft:spider_eye', '2x minecraft:fermented_spider_eye', 'gtceu:stainless_steel_plate')
        .itemOutputs('2x ballistix:debilitation')
        .duration(20 * 20)
        .EUt(GTValues.VA[GTValues.EV])

    // anvil: condensive with heavy iron block payload — gravitational bombardment
    event.recipes.gtceu.arms_manufacturer('ballistix_anvil')
        .itemInputs('2x ballistix:condensive', '4x minecraft:iron_block', 'gtceu:stainless_steel_plate')
        .itemOutputs('2x ballistix:anvil')
        .duration(20 * 20)
        .EUt(GTValues.VA[GTValues.EV])

    // infestive: condensive with spider biological payload — silkweb dispersal
    event.recipes.gtceu.arms_manufacturer('ballistix_infestive')
        .itemInputs('2x ballistix:condensive', '8x minecraft:cobweb', '4x gtceu:sticky_resin', 'gtceu:stainless_steel_plate')
        .itemOutputs('2x ballistix:infestive')
        .duration(15 * 20)
        .EUt(GTValues.VA[GTValues.EV])

    // ============================================================
    // EV — TIER 1 GRENADES (handheld, same tier as blocks)
    // ============================================================

    event.recipes.gtceu.arms_manufacturer('ballistix_grenadecondensive')
        .itemInputs('ballistix:condensive', '2x minecraft:gunpowder', 'minecraft:string')
        .itemOutputs('1x ballistix:grenadecondensive')
        .duration(5 * 20)
        .EUt(GTValues.VA[GTValues.EV])

    event.recipes.gtceu.arms_manufacturer('ballistix_grenadeshrapnel')
        .itemInputs('ballistix:shrapnel', '2x minecraft:gunpowder', 'minecraft:string')
        .itemOutputs('1x ballistix:grenadeshrapnel')
        .duration(5 * 20)
        .EUt(GTValues.VA[GTValues.EV])

    event.recipes.gtceu.arms_manufacturer('ballistix_grenadeincendiary')
        .itemInputs('ballistix:incendiary', '2x minecraft:gunpowder', 'minecraft:string')
        .itemOutputs('1x ballistix:grenadeincendiary')
        .duration(5 * 20)
        .EUt(GTValues.VA[GTValues.EV])

    event.recipes.gtceu.arms_manufacturer('ballistix_grenaderepulsive')
        .itemInputs('ballistix:repulsive', '2x minecraft:gunpowder', 'minecraft:string')
        .itemOutputs('1x ballistix:grenaderepulsive')
        .duration(5 * 20)
        .EUt(GTValues.VA[GTValues.EV])

    event.recipes.gtceu.arms_manufacturer('ballistix_grenadeattractive')
        .itemInputs('ballistix:attractive', '2x minecraft:gunpowder', 'minecraft:string')
        .itemOutputs('1x ballistix:grenadeattractive')
        .duration(5 * 20)
        .EUt(GTValues.VA[GTValues.EV])

    event.recipes.gtceu.arms_manufacturer('ballistix_grenadedebilitation')
        .itemInputs('ballistix:debilitation', '2x minecraft:gunpowder', 'minecraft:string')
        .itemOutputs('1x ballistix:grenadedebilitation')
        .duration(5 * 20)
        .EUt(GTValues.VA[GTValues.EV])

    event.recipes.gtceu.arms_manufacturer('ballistix_grenadechemical')
        .itemInputs('ballistix:chemical', '2x minecraft:gunpowder', 'minecraft:string')
        .itemOutputs('1x ballistix:grenadechemical')
        .duration(5 * 20)
        .EUt(GTValues.VA[GTValues.EV])

    event.recipes.gtceu.arms_manufacturer('ballistix_grenadeanvil')
        .itemInputs('ballistix:anvil', '2x minecraft:gunpowder', 'minecraft:string')
        .itemOutputs('1x ballistix:grenadeanvil')
        .duration(5 * 20)
        .EUt(GTValues.VA[GTValues.EV])

    event.recipes.gtceu.arms_manufacturer('ballistix_grenadeinfestive')
        .itemInputs('ballistix:infestive', '2x minecraft:gunpowder', 'minecraft:string')
        .itemOutputs('1x ballistix:grenadeinfestive')
        .duration(5 * 20)
        .EUt(GTValues.VA[GTValues.EV])

    // ============================================================
    // EV — TIER 0-1 MINECARTS
    // ============================================================

    event.recipes.gtceu.arms_manufacturer('ballistix_minecartobsidian')
        .itemInputs('ballistix:obsidian', 'minecraft:minecart')
        .itemOutputs('1x ballistix:minecartobsidian')
        .duration(5 * 20)
        .EUt(GTValues.VA[GTValues.EV])

    event.recipes.gtceu.arms_manufacturer('ballistix_minecartcondensive')
        .itemInputs('ballistix:condensive', 'minecraft:minecart')
        .itemOutputs('1x ballistix:minecartcondensive')
        .duration(5 * 20)
        .EUt(GTValues.VA[GTValues.EV])

    event.recipes.gtceu.arms_manufacturer('ballistix_minecartattractive')
        .itemInputs('ballistix:attractive', 'minecraft:minecart')
        .itemOutputs('1x ballistix:minecartattractive')
        .duration(5 * 20)
        .EUt(GTValues.VA[GTValues.EV])

    event.recipes.gtceu.arms_manufacturer('ballistix_minecartrepulsive')
        .itemInputs('ballistix:repulsive', 'minecraft:minecart')
        .itemOutputs('1x ballistix:minecartrepulsive')
        .duration(5 * 20)
        .EUt(GTValues.VA[GTValues.EV])

    event.recipes.gtceu.arms_manufacturer('ballistix_minecartincendiary')
        .itemInputs('ballistix:incendiary', 'minecraft:minecart')
        .itemOutputs('1x ballistix:minecartincendiary')
        .duration(5 * 20)
        .EUt(GTValues.VA[GTValues.EV])

    event.recipes.gtceu.arms_manufacturer('ballistix_minecartshrapnel')
        .itemInputs('ballistix:shrapnel', 'minecraft:minecart')
        .itemOutputs('1x ballistix:minecartshrapnel')
        .duration(5 * 20)
        .EUt(GTValues.VA[GTValues.EV])

    event.recipes.gtceu.arms_manufacturer('ballistix_minecartchemical')
        .itemInputs('ballistix:chemical', 'minecraft:minecart')
        .itemOutputs('1x ballistix:minecartchemical')
        .duration(5 * 20)
        .EUt(GTValues.VA[GTValues.EV])

    event.recipes.gtceu.arms_manufacturer('ballistix_minecartdebilitation')
        .itemInputs('ballistix:debilitation', 'minecraft:minecart')
        .itemOutputs('1x ballistix:minecartdebilitation')
        .duration(5 * 20)
        .EUt(GTValues.VA[GTValues.EV])

    event.recipes.gtceu.arms_manufacturer('ballistix_minecartanvil')
        .itemInputs('ballistix:anvil', 'minecraft:minecart')
        .itemOutputs('1x ballistix:minecartanvil')
        .duration(5 * 20)
        .EUt(GTValues.VA[GTValues.EV])

    event.recipes.gtceu.arms_manufacturer('ballistix_minecartinfestive')
        .itemInputs('ballistix:infestive', 'minecraft:minecart')
        .itemOutputs('1x ballistix:minecartinfestive')
        .duration(5 * 20)
        .EUt(GTValues.VA[GTValues.EV])

    // ============================================================
    // IV — TIER 2 EXPLOSIVES
    // ============================================================

    // fragmentation: shrapnel+incendiary core in titanium housing — flak burst
    event.recipes.gtceu.arms_manufacturer('ballistix_fragmentation')
        .itemInputs('2x ballistix:shrapnel', '2x ballistix:incendiary', '4x gtceu:titanium_plate', '2x #gtceu:circuits/iv')
        .itemOutputs('2x ballistix:fragmentation')
        .duration(25 * 20)
        .EUt(GTValues.VA[GTValues.IV])

    // contagious: chemical+debilitation composite — combined effect payload
    event.recipes.gtceu.arms_manufacturer('ballistix_contagious')
        .itemInputs('2x ballistix:chemical', '2x ballistix:debilitation', '4x gtceu:titanium_plate', '2x #gtceu:circuits/iv')
        .itemOutputs('2x ballistix:contagious')
        .duration(25 * 20)
        .EUt(GTValues.VA[GTValues.IV])

    // breaching: compressed condensive stack with fast detonator — bunker penetration
    event.recipes.gtceu.arms_manufacturer('ballistix_breaching')
        .itemInputs('4x ballistix:condensive', '2x gtceu:titanium_plate', 'gtceu:iv_electric_piston', '#gtceu:circuits/iv')
        .itemOutputs('2x ballistix:breaching')
        .duration(20 * 20)
        .EUt(GTValues.VA[GTValues.IV])

    // thermobaric: four-explosive composite — aerosol fuel-air detonation
    event.recipes.gtceu.arms_manufacturer('ballistix_thermobaric')
        .itemInputs('2x ballistix:chemical', '2x ballistix:incendiary', '2x ballistix:breaching', '2x ballistix:repulsive', '4x gtceu:titanium_plate')
        .itemOutputs('2x ballistix:thermobaric')
        .duration(30 * 20)
        .EUt(GTValues.VA[GTValues.IV])

    // sonic: condensive with amethyst resonance core — concussive shockwave
    event.recipes.gtceu.arms_manufacturer('ballistix_sonic')
        .itemInputs('2x ballistix:condensive', '4x minecraft:amethyst_shard', '4x gtceu:titanium_plate', '#gtceu:circuits/iv')
        .itemOutputs('2x ballistix:sonic')
        .duration(25 * 20)
        .EUt(GTValues.VA[GTValues.IV])

    // ============================================================
    // IV — TIER 2 MINECARTS
    // ============================================================

    event.recipes.gtceu.arms_manufacturer('ballistix_minecartfragmentation')
        .itemInputs('ballistix:fragmentation', 'minecraft:minecart')
        .itemOutputs('1x ballistix:minecartfragmentation')
        .duration(5 * 20)
        .EUt(GTValues.VA[GTValues.IV])

    event.recipes.gtceu.arms_manufacturer('ballistix_minecartcontagious')
        .itemInputs('ballistix:contagious', 'minecraft:minecart')
        .itemOutputs('1x ballistix:minecartcontagious')
        .duration(5 * 20)
        .EUt(GTValues.VA[GTValues.IV])

    event.recipes.gtceu.arms_manufacturer('ballistix_minecartbreaching')
        .itemInputs('ballistix:breaching', 'minecraft:minecart')
        .itemOutputs('1x ballistix:minecartbreaching')
        .duration(5 * 20)
        .EUt(GTValues.VA[GTValues.IV])

    event.recipes.gtceu.arms_manufacturer('ballistix_minecartsonic')
        .itemInputs('ballistix:sonic', 'minecraft:minecart')
        .itemOutputs('1x ballistix:minecartsonic')
        .duration(5 * 20)
        .EUt(GTValues.VA[GTValues.IV])

    event.recipes.gtceu.arms_manufacturer('ballistix_minecartthermobaric')
        .itemInputs('ballistix:thermobaric', 'minecraft:minecart')
        .itemOutputs('1x ballistix:minecartthermobaric')
        .duration(5 * 20)
        .EUt(GTValues.VA[GTValues.IV])

    // ============================================================
    // IV — SILO TIER 1
    // ============================================================

    // support frame tier 1: stainless steel structural skeleton for launch silo
    event.recipes.gtceu.assembler('ballistix_launchersupportframetier1')
        .itemInputs('8x gtceu:stainless_steel_plate', '4x gtceu:stainless_steel_rod', '2x #gtceu:circuits/iv')
        .itemOutputs('2x ballistix:launchersupportframetier1')
        .duration(20 * 20)
        .EUt(GTValues.VA[GTValues.IV])

    // launcher platform tier 1: launch deck with guidance rail and IV motor
    event.recipes.gtceu.assembler('ballistix_launcherplatformtier1')
        .itemInputs('ballistix:launchersupportframetier1', '4x gtceu:stainless_steel_plate', 'gtceu:iv_electric_motor', '2x #gtceu:circuits/iv')
        .itemOutputs('1x ballistix:launcherplatformtier1')
        .duration(25 * 20)
        .EUt(GTValues.VA[GTValues.IV])

    // control panel tier 1: IV hull with launch computer and targeting circuits
    event.recipes.gtceu.assembler('ballistix_launchercontrolpaneltier1')
        .itemInputs('gtceu:iv_machine_hull', '4x #gtceu:circuits/iv', 'gtceu:iv_emitter', 'gtceu:iv_sensor', '2x gtceu:glass_plate')
        .inputFluids(Fluid.of('gtceu:soldering_alloy', 576))
        .itemOutputs('1x ballistix:launchercontrolpaneltier1')
        .duration(40 * 20)
        .EUt(GTValues.VA[GTValues.IV])

    // ============================================================
    // IV — FIRE CONTROL + ESM + LASER TURRET
    // ============================================================

    // fire control radar: radar + twin radar guns + gold coils + IV circuits
    event.recipes.gtceu.assembler('ballistix_firecontrolradar')
        .itemInputs('ballistix:radar', '2x ballistix:radargun', '2x gtceu:iv_sensor', '2x gtceu:iv_emitter', '2x #gtceu:circuits/iv')
        .inputFluids(Fluid.of('gtceu:soldering_alloy', 576))
        .itemOutputs('1x ballistix:firecontrolradar')
        .duration(40 * 20)
        .EUt(GTValues.VA[GTValues.IV])

    // ESM tower: electronic support measures — wide-band emitter array
    event.recipes.gtceu.assembler('ballistix_esmtower')
        .itemInputs('ballistix:radar', '4x gtceu:iv_emitter', '4x gtceu:stainless_steel_plate', '2x #gtceu:circuits/iv')
        .inputFluids(Fluid.of('gtceu:soldering_alloy', 288))
        .itemOutputs('1x ballistix:esmtower')
        .duration(30 * 20)
        .EUt(GTValues.VA[GTValues.IV])

    // laser turret: focused high-energy emitter on IV motor mount
    event.recipes.gtceu.assembler('ballistix_laserturret')
        .itemInputs('2x ballistix:laserdesignator', '2x gtceu:iv_emitter', 'gtceu:iv_electric_motor', '4x gtceu:titanium_plate', '2x #gtceu:circuits/iv')
        .inputFluids(Fluid.of('gtceu:soldering_alloy', 288))
        .itemOutputs('1x ballistix:laserturret')
        .duration(35 * 20)
        .EUt(GTValues.VA[GTValues.IV])

    // ============================================================
    // IV — MISSILE TIER 1 + VLS
    // ============================================================

    // missile tier 1: titanium body + thermobaric warhead + rocket fuel + IV guidance
    event.recipes.gtceu.assembler('ballistix_missiletier1')
        .itemInputs('4x gtceu:titanium_plate', 'ballistix:thermobaric', '2x #gtceu:circuits/iv', '2x gtceu:iv_sensor')
        .inputFluids(Fluid.of('gtceu:rocket_fuel', 1000))
        .itemOutputs('1x ballistix:missiletier1')
        .duration(40 * 20)
        .EUt(GTValues.VA[GTValues.IV])

    // vertical launch system: 4x tier 1 platforms fused into multi-launch cell
    event.recipes.gtceu.assembler('ballistix_vls')
        .itemInputs('4x ballistix:launcherplatformtier1', 'gtceu:iv_machine_hull', '4x gtceu:stainless_steel_plate', '2x #gtceu:circuits/iv')
        .itemOutputs('1x ballistix:vls')
        .duration(40 * 20)
        .EUt(GTValues.VA[GTValues.IV])

    // ============================================================
    // LuV — TIER 3 EXPLOSIVES
    // ============================================================

    // nuclear: uranium-235 core + plutonium implosion lenses + thermobaric trigger + naquadah shell
    event.recipes.gtceu.arms_manufacturer('ballistix_nuclear')
        .itemInputs('8x gtceu:uranium_235_dust', '4x gtceu:plutonium_dust', '4x ballistix:thermobaric', '4x gtceu:naquadah_plate', '2x #gtceu:circuits/luv')
        .inputFluids(Fluid.of('gtceu:soldering_alloy', 1152))
        .itemOutputs('1x ballistix:nuclear')
        .duration(60 * 20)
        .EUt(GTValues.VA[GTValues.LuV])

    // EMP: copper coil matrix + redstone resonators — fries electronics in radius
    event.recipes.gtceu.arms_manufacturer('ballistix_emp')
        .itemInputs('8x gtceu:cupronickel_coil_block', '4x gtceu:naquadah_plate', 'ballistix:condensive', '4x #gtceu:circuits/luv')
        .inputFluids(Fluid.of('gtceu:soldering_alloy', 576))
        .itemOutputs('1x ballistix:emp')
        .duration(40 * 20)
        .EUt(GTValues.VA[GTValues.LuV])

    // antigravity: exotic graviton matrix — reverses local gravity in blast zone
    event.recipes.gtceu.arms_manufacturer('ballistix_antigravity')
        .itemInputs('ballistix:repulsive', 'ballistix:attractive', '4x gtceu:naquadah_plate', '4x #gtceu:circuits/luv', 'gtceu:luv_field_generator')
        .itemOutputs('1x ballistix:antigravity')
        .duration(50 * 20)
        .EUt(GTValues.VA[GTValues.LuV])

    // endothermic: cryogenic thermobaric — flash-freezes the blast zone
    event.recipes.gtceu.arms_manufacturer('ballistix_endothermic')
        .itemInputs('ballistix:thermobaric', '4x gtceu:naquadah_plate', '2x #gtceu:circuits/luv')
        .inputFluids(Fluid.of('gtceu:liquid_air', 4000))
        .itemOutputs('1x ballistix:endothermic')
        .duration(40 * 20)
        .EUt(GTValues.VA[GTValues.LuV])

    // exothermic: thermite-core thermobaric — extreme heat incinerates everything
    event.recipes.gtceu.arms_manufacturer('ballistix_exothermic')
        .itemInputs('ballistix:thermobaric', '4x gtceu:naquadah_plate', '2x #gtceu:circuits/luv', '4x gtceu:magnesium_dust')
        .itemOutputs('1x ballistix:exothermic')
        .duration(40 * 20)
        .EUt(GTValues.VA[GTValues.LuV])

    // ender: ender-linked teleportation dispersal — random scatter field
    event.recipes.gtceu.arms_manufacturer('ballistix_ender')
        .itemInputs('ballistix:condensive', '4x minecraft:ender_pearl', '4x gtceu:naquadah_plate', '2x #gtceu:circuits/luv')
        .itemOutputs('1x ballistix:ender')
        .duration(35 * 20)
        .EUt(GTValues.VA[GTValues.LuV])

    // hypersonic: fragmentation combined with sonic shockwave — extreme range burst
    event.recipes.gtceu.arms_manufacturer('ballistix_hypersonic')
        .itemInputs('ballistix:fragmentation', 'ballistix:sonic', '4x gtceu:naquadah_plate', '2x #gtceu:circuits/luv')
        .itemOutputs('1x ballistix:hypersonic')
        .duration(40 * 20)
        .EUt(GTValues.VA[GTValues.LuV])

    // rejuvination: reverses destruction — healing/terrain restoration field
    event.recipes.gtceu.arms_manufacturer('ballistix_rejuvination')
        .itemInputs('ballistix:condensive', '4x minecraft:bone_meal', '4x gtceu:naquadah_plate', '2x #gtceu:circuits/luv', 'botania:manasteel_ingot')
        .itemOutputs('1x ballistix:rejuvination')
        .duration(40 * 20)
        .EUt(GTValues.VA[GTValues.LuV])

    // ============================================================
    // LuV — TIER 3 MINECARTS
    // ============================================================

    event.recipes.gtceu.arms_manufacturer('ballistix_minecartnuclear')
        .itemInputs('ballistix:nuclear', 'minecraft:minecart')
        .itemOutputs('1x ballistix:minecartnuclear')
        .duration(5 * 20)
        .EUt(GTValues.VA[GTValues.LuV])

    event.recipes.gtceu.arms_manufacturer('ballistix_minecartemp')
        .itemInputs('ballistix:emp', 'minecraft:minecart')
        .itemOutputs('1x ballistix:minecartemp')
        .duration(5 * 20)
        .EUt(GTValues.VA[GTValues.LuV])

    event.recipes.gtceu.arms_manufacturer('ballistix_minecartantigravity')
        .itemInputs('ballistix:antigravity', 'minecraft:minecart')
        .itemOutputs('1x ballistix:minecartantigravity')
        .duration(5 * 20)
        .EUt(GTValues.VA[GTValues.LuV])

    event.recipes.gtceu.arms_manufacturer('ballistix_minecartendothermic')
        .itemInputs('ballistix:endothermic', 'minecraft:minecart')
        .itemOutputs('1x ballistix:minecartendothermic')
        .duration(5 * 20)
        .EUt(GTValues.VA[GTValues.LuV])

    event.recipes.gtceu.arms_manufacturer('ballistix_minecartexothermic')
        .itemInputs('ballistix:exothermic', 'minecraft:minecart')
        .itemOutputs('1x ballistix:minecartexothermic')
        .duration(5 * 20)
        .EUt(GTValues.VA[GTValues.LuV])

    event.recipes.gtceu.arms_manufacturer('ballistix_minecartender')
        .itemInputs('ballistix:ender', 'minecraft:minecart')
        .itemOutputs('1x ballistix:minecartender')
        .duration(5 * 20)
        .EUt(GTValues.VA[GTValues.LuV])

    event.recipes.gtceu.arms_manufacturer('ballistix_minecartrejuvination')
        .itemInputs('ballistix:rejuvination', 'minecraft:minecart')
        .itemOutputs('1x ballistix:minecartrejuvination')
        .duration(5 * 20)
        .EUt(GTValues.VA[GTValues.LuV])

    // ============================================================
    // LuV — SILO TIER 2
    // ============================================================

    // support frame tier 2: titanium skeleton upgrade over tier 1
    event.recipes.gtceu.assembler('ballistix_launchersupportframetier2')
        .itemInputs('ballistix:launchersupportframetier1', '8x gtceu:titanium_plate', '4x gtceu:titanium_rod', '2x #gtceu:circuits/luv')
        .itemOutputs('2x ballistix:launchersupportframetier2')
        .duration(25 * 20)
        .EUt(GTValues.VA[GTValues.LuV])

    // launcher platform tier 2: upgraded platform with LuV motor
    event.recipes.gtceu.assembler('ballistix_launcherplatformtier2')
        .itemInputs('ballistix:launchersupportframetier2', 'ballistix:launcherplatformtier1', '4x gtceu:titanium_plate', 'gtceu:luv_electric_motor', '2x #gtceu:circuits/luv')
        .itemOutputs('1x ballistix:launcherplatformtier2')
        .duration(30 * 20)
        .EUt(GTValues.VA[GTValues.LuV])

    // control panel tier 2: LuV hull with multi-target fire control
    event.recipes.gtceu.assembler('ballistix_launchercontrolpaneltier2')
        .itemInputs('gtceu:luv_machine_hull', '4x #gtceu:circuits/luv', 'gtceu:luv_emitter', 'gtceu:luv_sensor', 'ballistix:firecontrolradar')
        .inputFluids(Fluid.of('gtceu:soldering_alloy', 1152))
        .itemOutputs('1x ballistix:launchercontrolpaneltier2')
        .duration(50 * 20)
        .EUt(GTValues.VA[GTValues.LuV])

    // ============================================================
    // LuV — MISSILES TIER 2 + CLUSTER + AA MISSILE + RAILGUN TURRET
    // ============================================================

    // missile tier 2: naquadah body + nuclear warhead + LuV guidance
    event.recipes.gtceu.assembler('ballistix_missiletier2')
        .itemInputs('4x gtceu:naquadah_plate', 'ballistix:nuclear', '2x #gtceu:circuits/luv', '2x gtceu:luv_sensor')
        .inputFluids(Fluid.of('gtceu:rocket_fuel', 4000))
        .itemOutputs('1x ballistix:missiletier2')
        .duration(60 * 20)
        .EUt(GTValues.VA[GTValues.LuV])

    // cluster missile: tier 2 body + submunition dispenser — area saturation
    event.recipes.gtceu.assembler('ballistix_missilecluster')
        .itemInputs('ballistix:missiletier2', '4x ballistix:fragmentation', '4x gtceu:titanium_plate', '2x #gtceu:circuits/luv')
        .itemOutputs('1x ballistix:missilecluster')
        .duration(50 * 20)
        .EUt(GTValues.VA[GTValues.LuV])

    // AA missile (shoulder-launched): tier 2 guidance in portable platform
    event.recipes.gtceu.assembler('ballistix_aamissile')
        .itemInputs('ballistix:missiletier2', '2x gtceu:luv_sensor', '2x gtceu:naquadah_plate', '2x #gtceu:circuits/luv')
        .itemOutputs('1x ballistix:aamissile')
        .duration(40 * 20)
        .EUt(GTValues.VA[GTValues.LuV])

    // railgun turret: tungsten rail + LuV motor + capacitor bank — kinetic penetrator
    event.recipes.gtceu.assembler('ballistix_railgunturret')
        .itemInputs('4x gtceu:tungsten_steel_plate', '2x gtceu:luv_electric_motor', '4x #gtceu:circuits/luv', '2x gtceu:luv_emitter', 'gtceu:luv_machine_hull')
        .inputFluids(Fluid.of('gtceu:soldering_alloy', 1152))
        .itemOutputs('1x ballistix:railgunturret')
        .duration(60 * 20)
        .EUt(GTValues.VA[GTValues.LuV])

    // ============================================================
    // ZPM — TIER 4 EXPLOSIVES (ANTIMATTER)
    // ============================================================

    // antimatter: nuclear core surrounded by nether star annihilators + naquadah enriched casing
    event.recipes.gtceu.arms_manufacturer('ballistix_antimatter')
        .itemInputs('ballistix:nuclear', '8x minecraft:nether_star', '4x gtceu:naquadah_enriched_plate', '4x #gtceu:circuits/zpm')
        .inputFluids(Fluid.of('gtceu:soldering_alloy', 2304))
        .itemOutputs('1x ballistix:antimatter')
        .duration(120 * 20)
        .EUt(GTValues.VA[GTValues.ZPM])

    // large antimatter: stacked antimatter charges — continental-scale destruction
    event.recipes.gtceu.arms_manufacturer('ballistix_largeantimatter')
        .itemInputs('ballistix:antimatter', '8x minecraft:nether_star', '4x gtceu:naquadah_enriched_plate', '4x #gtceu:circuits/zpm')
        .inputFluids(Fluid.of('gtceu:soldering_alloy', 4608))
        .itemOutputs('1x ballistix:largeantimatter')
        .duration(180 * 20)
        .EUt(GTValues.VA[GTValues.ZPM])

    // ============================================================
    // ZPM — TIER 4 MINECARTS
    // ============================================================

    event.recipes.gtceu.arms_manufacturer('ballistix_minecartantimatter')
        .itemInputs('ballistix:antimatter', 'minecraft:minecart')
        .itemOutputs('1x ballistix:minecartantimatter')
        .duration(5 * 20)
        .EUt(GTValues.VA[GTValues.ZPM])

    event.recipes.gtceu.arms_manufacturer('ballistix_minecartlargeantimatter')
        .itemInputs('ballistix:largeantimatter', 'minecraft:minecart')
        .itemOutputs('1x ballistix:minecartlargeantimatter')
        .duration(5 * 20)
        .EUt(GTValues.VA[GTValues.ZPM])

    // ============================================================
    // ZPM — SILO TIER 3
    // ============================================================

    // support frame tier 3: naquadah enriched structural skeleton — true ICBM infrastructure
    event.recipes.gtceu.assembler('ballistix_launchersupportframetier3')
        .itemInputs('ballistix:launchersupportframetier2', '8x gtceu:naquadah_enriched_plate', '4x gtceu:naquadah_enriched_rod', '2x #gtceu:circuits/zpm')
        .itemOutputs('2x ballistix:launchersupportframetier3')
        .duration(30 * 20)
        .EUt(GTValues.VA[GTValues.ZPM])

    // launcher platform tier 3: ZPM motor + naquadah enriched deck
    event.recipes.gtceu.assembler('ballistix_launcherplatformtier3')
        .itemInputs('ballistix:launchersupportframetier3', 'ballistix:launcherplatformtier2', '4x gtceu:naquadah_enriched_plate', 'gtceu:zpm_electric_motor', '2x #gtceu:circuits/zpm')
        .itemOutputs('1x ballistix:launcherplatformtier3')
        .duration(40 * 20)
        .EUt(GTValues.VA[GTValues.ZPM])

    // control panel tier 3: ZPM hull with intercontinental targeting computer
    event.recipes.gtceu.assembler('ballistix_launchercontrolpaneltier3')
        .itemInputs('gtceu:zpm_machine_hull', '4x #gtceu:circuits/zpm', 'gtceu:zpm_emitter', 'gtceu:zpm_sensor', 'ballistix:firecontrolradar', 'ballistix:esmtower')
        .inputFluids(Fluid.of('gtceu:soldering_alloy', 4608))
        .itemOutputs('1x ballistix:launchercontrolpaneltier3')
        .duration(80 * 20)
        .EUt(GTValues.VA[GTValues.ZPM])

    // ============================================================
    // ZPM — MISSILE TIER 3 + AA MISSILE MK2
    // ============================================================

    // missile tier 3: naquadah enriched hull + antimatter warhead — true ICBM
    event.recipes.gtceu.assembler('ballistix_missiletier3')
        .itemInputs('4x gtceu:naquadah_enriched_plate', 'ballistix:antimatter', '2x #gtceu:circuits/zpm', '2x gtceu:zpm_sensor')
        .inputFluids(Fluid.of('gtceu:rocket_fuel', 16000))
        .itemOutputs('1x ballistix:missiletier3')
        .duration(120 * 20)
        .EUt(GTValues.VA[GTValues.ZPM])

    // AA missile mk2: ZPM guidance + tier 3 chassis — kills anything airborne
    event.recipes.gtceu.assembler('ballistix_aamissilemk2')
        .itemInputs('ballistix:missiletier3', '4x gtceu:zpm_sensor', '4x gtceu:naquadah_enriched_plate', '4x #gtceu:circuits/zpm')
        .itemOutputs('1x ballistix:aamissilemk2')
        .duration(80 * 20)
        .EUt(GTValues.VA[GTValues.ZPM])

    // ============================================================
    // UV — DARKMATTER
    // ============================================================

    // darkmatter: large antimatter surrounded by naquadah alloy — tears a hole in space
    event.recipes.gtceu.arms_manufacturer('ballistix_darkmatter')
        .itemInputs('ballistix:largeantimatter', '8x minecraft:nether_star', '8x gtceu:naquadah_alloy_plate', '4x #gtceu:circuits/uv')
        .inputFluids(Fluid.of('gtceu:soldering_alloy', 9216))
        .itemOutputs('1x ballistix:darkmatter')
        .duration(300 * 20)
        .EUt(GTValues.VA[GTValues.UV])

    event.recipes.gtceu.arms_manufacturer('ballistix_minecartdarkmatter')
        .itemInputs('ballistix:darkmatter', 'minecraft:minecart')
        .itemOutputs('1x ballistix:minecartdarkmatter')
        .duration(5 * 20)
        .EUt(GTValues.VA[GTValues.UV])

})
