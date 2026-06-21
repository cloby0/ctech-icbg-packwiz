ServerEvents.recipes(event => {

    // Remove all remaining DE fusion_crafting recipes.
    // reactor_core/stabilizer/injector already removed in uevAndChaos.js.
    const fusionRemove = [
        'draconicevolution:awakened_draconium_block',
        'draconicevolution:components/awakened_core',
        'draconicevolution:components/chaotic_core',
        'draconicevolution:machines/awakened_crafting_injector',
        'draconicevolution:machines/chaotic_crafting_injector',
        'draconicevolution:machines/draconic_relay_crystal',
        'draconicevolution:machines/draconium_chest',
        'draconicevolution:machines/wyvern_crafting_injector',
        'draconicevolution:tools/advanced_dislocator',
        'draconicevolution:tools/wyvern_sword',
        'draconicevolution:tools/wyvern_axe',
        'draconicevolution:tools/wyvern_pickaxe',
        'draconicevolution:tools/wyvern_shovel',
        'draconicevolution:tools/wyvern_hoe',
        'draconicevolution:tools/wyvern_bow',
        'draconicevolution:tools/wyvern_chestpiece',
        'draconicevolution:tools/wyvern_capacitor',
        'draconicevolution:tools/draconic_sword',
        'draconicevolution:tools/draconic_axe',
        'draconicevolution:tools/draconic_pickaxe',
        'draconicevolution:tools/draconic_shovel',
        'draconicevolution:tools/draconic_hoe',
        'draconicevolution:tools/draconic_bow',
        'draconicevolution:tools/draconic_chestpiece',
        'draconicevolution:tools/draconic_capacitor',
        'draconicevolution:tools/draconic_staff',
        'draconicevolution:tools/chaotic_sword',
        'draconicevolution:tools/chaotic_axe',
        'draconicevolution:tools/chaotic_pickaxe',
        'draconicevolution:tools/chaotic_shovel',
        'draconicevolution:tools/chaotic_hoe',
        'draconicevolution:tools/chaotic_bow',
        'draconicevolution:tools/chaotic_chestpiece',
        'draconicevolution:tools/chaotic_capacitor',
        'draconicevolution:tools/chaotic_staff',
        'draconicevolution:tools/chaotic_staff_alt',
    ]
    fusionRemove.forEach(function(id) { event.remove({ id: id }) })

    // GT Assembler replacements for core items

    // awakened_core (UHV) — four wyvern_cores energized with awakened draconium
    event.recipes.gtceu.assembler('de_awakened_core')
        .itemInputs(
            '4x draconicevolution:awakened_draconium_ingot',
            '4x draconicevolution:wyvern_core',
            '1x gtceu:gaia_spirit_ingot'
        )
        .inputFluids(Fluid.of('kubejs:draconic_computation', 2000))
        .itemOutputs('draconicevolution:awakened_core')
        .duration(400)
        .EUt(GTValues.VA[GTValues.UHV])

    // chaotic_core (UEV) — awakened cores fused with chaos
    event.recipes.gtceu.assembler('de_chaotic_core')
        .itemInputs(
            '4x draconicevolution:awakened_draconium_ingot',
            '4x draconicevolution:awakened_core',
            '4x draconicevolution:large_chaos_frag'
        )
        .inputFluids(Fluid.of('kubejs:chaos_matrix_fluid', 2000))
        .itemOutputs('draconicevolution:chaotic_core')
        .duration(600)
        .EUt(GTValues.VA[GTValues.UEV])

    // draconium_chest (UV) — draconium storage
    event.recipes.gtceu.assembler('de_draconium_chest')
        .itemInputs(
            '8x gtceu:draconium_plate',
            '4x gtceu:draconium_rod',
            '1x draconicevolution:draconium_core',
            '1x #gtceu:circuits/uv'
        )
        .inputFluids(Fluid.of('gtceu:lubricant', 500))
        .itemOutputs('draconicevolution:draconium_chest')
        .duration(300)
        .EUt(GTValues.VA[GTValues.UV])

    // draconic_relay_crystal (UV) — energy relay
    event.recipes.gtceu.assembler('de_draconic_relay_crystal')
        .itemInputs(
            '4x draconicevolution:wyvern_core',
            '4x gtceu:draconium_plate',
            '1x draconicevolution:wyvern_energy_core'
        )
        .inputFluids(Fluid.of('kubejs:draconic_computation', 1000))
        .itemOutputs('draconicevolution:draconic_relay_crystal')
        .duration(300)
        .EUt(GTValues.VA[GTValues.UV])

    // advanced_dislocator (UV)
    event.recipes.gtceu.assembler('de_advanced_dislocator')
        .itemInputs(
            '2x draconicevolution:wyvern_core',
            '4x gtceu:draconium_plate',
            '1x draconicevolution:wyvern_energy_core',
            '1x #gtceu:circuits/uv'
        )
        .inputFluids(Fluid.of('kubejs:draconic_computation', 500))
        .itemOutputs('draconicevolution:advanced_dislocator')
        .duration(200)
        .EUt(GTValues.VA[GTValues.UV])

    // ── Extended Crafting: Wyvern gear (UV tier, 9×9 ultimate table) ──────────
    // Key convention: W=wyvern_core, E=wyvern_energy_core, P=draconium_plate,
    //                 R=draconium_rod, F=draconium_fine_wire, C=basic_relay_crystal,
    //                 N=nether_star
    // Each pattern row = exactly 9 chars. Space = empty slot.

    event.recipes.extendedcrafting.shaped_table('draconicevolution:wyvern_chestpiece', [
        'PPPPPPPPP',
        'PWPPPPPWP',
        'PPPEPEPPP',
        'PWPPPPPWP',
        'PPPCNPPPP',
        'PWPPPPPWP',
        'PPPEPEPPP',
        'PWPPPPPWP',
        'CPPPPPPPC'
    ], {
        W: 'draconicevolution:wyvern_core',
        E: 'draconicevolution:wyvern_energy_core',
        P: 'gtceu:draconium_plate',
        N: 'minecraft:nether_star',
        C: 'draconicevolution:basic_relay_crystal'
    })

    event.recipes.extendedcrafting.shaped_table('draconicevolution:wyvern_sword', [
        '    P    ',
        '   PRP   ',
        '  PWRWP  ',
        '   PRP   ',
        '    R    ',
        '    R    ',
        '   CRC   ',
        '  CNRNC  ',
        '    E    '
    ], {
        W: 'draconicevolution:wyvern_core',
        E: 'draconicevolution:wyvern_energy_core',
        P: 'gtceu:draconium_plate',
        R: 'gtceu:draconium_rod',
        N: 'minecraft:nether_star',
        C: 'draconicevolution:basic_relay_crystal'
    })

    event.recipes.extendedcrafting.shaped_table('draconicevolution:wyvern_axe', [
        '  PPPPP  ',
        ' PPWPPPP ',
        ' PPPPNPP ',
        ' PPWPPPP ',
        '  PPRP   ',
        '   PRR   ',
        '   CRR   ',
        '   CRE   ',
        '    C    '
    ], {
        W: 'draconicevolution:wyvern_core',
        E: 'draconicevolution:wyvern_energy_core',
        P: 'gtceu:draconium_plate',
        R: 'gtceu:draconium_rod',
        N: 'minecraft:nether_star',
        C: 'draconicevolution:basic_relay_crystal'
    })

    event.recipes.extendedcrafting.shaped_table('draconicevolution:wyvern_pickaxe', [
        'PPPWPPNPP',
        'PPPPPPPPP',
        'PPPWPPPPP',
        '   PRRP  ',
        '   WRPP  ',
        '   PCRP  ',
        '   PCRP  ',
        '   PCRP  ',
        '    E    '
    ], {
        W: 'draconicevolution:wyvern_core',
        E: 'draconicevolution:wyvern_energy_core',
        P: 'gtceu:draconium_plate',
        R: 'gtceu:draconium_rod',
        N: 'minecraft:nether_star',
        C: 'draconicevolution:basic_relay_crystal'
    })

    event.recipes.extendedcrafting.shaped_table('draconicevolution:wyvern_shovel', [
        '   PRP   ',
        '  PWRWP  ',
        '   PNP   ',
        '  PWRWP  ',
        '    R    ',
        '    R    ',
        '   CRC   ',
        '  CPRPC  ',
        '    E    '
    ], {
        W: 'draconicevolution:wyvern_core',
        E: 'draconicevolution:wyvern_energy_core',
        P: 'gtceu:draconium_plate',
        R: 'gtceu:draconium_rod',
        N: 'minecraft:nether_star',
        C: 'draconicevolution:basic_relay_crystal'
    })

    event.recipes.extendedcrafting.shaped_table('draconicevolution:wyvern_hoe', [
        'PPPWPPNPP',
        'PPPPPPPPP',
        'PPPWPPPPP',
        '   PPRP  ',
        '   WPRP  ',
        '   PCRP  ',
        '   PCRP  ',
        '   PCRP  ',
        '    E    '
    ], {
        W: 'draconicevolution:wyvern_core',
        E: 'draconicevolution:wyvern_energy_core',
        P: 'gtceu:draconium_plate',
        R: 'gtceu:draconium_rod',
        N: 'minecraft:nether_star',
        C: 'draconicevolution:basic_relay_crystal'
    })

    event.recipes.extendedcrafting.shaped_table('draconicevolution:wyvern_bow', [
        '  PFRRFP ',
        ' PFWRRFW ',
        'PFRWRRFFP',
        'PFRRNRFFP',
        'PFRWRRFFP',
        ' PFWRRFW ',
        '  PFRRFP ',
        '   PCNC  ',
        '    CE   '
    ], {
        W: 'draconicevolution:wyvern_core',
        E: 'draconicevolution:wyvern_energy_core',
        P: 'gtceu:draconium_plate',
        R: 'gtceu:draconium_rod',
        F: 'gtceu:draconium_fine_wire',
        N: 'minecraft:nether_star',
        C: 'draconicevolution:basic_relay_crystal'
    })

    event.recipes.extendedcrafting.shaped_table('draconicevolution:wyvern_capacitor', [
        ' PPPPPPP ',
        'PPEPPPEP ',
        'PPEPPPEP ',
        'PPPWWWPPP',
        'PPPRNRPPP',
        'PPPWWWPPP',
        'PPEPPPEP ',
        'PPEPPPEP ',
        ' PCCCCCP '
    ], {
        W: 'draconicevolution:wyvern_core',
        E: 'draconicevolution:wyvern_energy_core',
        P: 'gtceu:draconium_plate',
        R: 'gtceu:draconium_rod',
        N: 'minecraft:nether_star',
        C: 'draconicevolution:basic_relay_crystal'
    })

    // ── Extended Crafting: Draconic gear (UHV tier, 9×9 ultimate table) ────────
    // Upgrade theme: consumes the wyvern version (U key).
    // Key: G=awakened_core, D=draconic_energy_core, A=awakened_draconium_plate,
    //      K=awakened_draconium_rod, N=netherite_ingot, U=wyvern_[item]

    event.recipes.extendedcrafting.shaped_table('draconicevolution:draconic_chestpiece', [
        'AAAAAAAAA',
        'AGAAAAGAA',
        'AAADAAAAA',
        'AGAAAAAAA',
        'AAAUNAAUA',
        'AGAAAAAAA',
        'AAADAAAAA',
        'AGAAAAGAA',
        'AAAAAAAAA'
    ], {
        G: 'draconicevolution:awakened_core',
        D: 'draconicevolution:draconic_energy_core',
        A: 'gtceu:awakened_draconium_plate',
        N: 'minecraft:netherite_ingot',
        U: 'draconicevolution:wyvern_chestpiece'
    })

    event.recipes.extendedcrafting.shaped_table('draconicevolution:draconic_sword', [
        '    A    ',
        '   AKA   ',
        '  AGKGA  ',
        '   AKA   ',
        '    K    ',
        '    K    ',
        '   NKN   ',
        '  DUKUD  ',
        '    G    '
    ], {
        G: 'draconicevolution:awakened_core',
        D: 'draconicevolution:draconic_energy_core',
        A: 'gtceu:awakened_draconium_plate',
        K: 'gtceu:awakened_draconium_rod',
        N: 'minecraft:netherite_ingot',
        U: 'draconicevolution:wyvern_sword'
    })

    event.recipes.extendedcrafting.shaped_table('draconicevolution:draconic_axe', [
        '  AAAAA  ',
        ' AAGAAAA ',
        ' AAAANAA ',
        ' AAGAAAA ',
        '  AAUKA  ',
        '   AKK   ',
        '   DKK   ',
        '   DKG   ',
        '    D    '
    ], {
        G: 'draconicevolution:awakened_core',
        D: 'draconicevolution:draconic_energy_core',
        A: 'gtceu:awakened_draconium_plate',
        K: 'gtceu:awakened_draconium_rod',
        N: 'minecraft:netherite_ingot',
        U: 'draconicevolution:wyvern_axe'
    })

    event.recipes.extendedcrafting.shaped_table('draconicevolution:draconic_pickaxe', [
        'AAAGAANAA',
        'AAAAAAAAA',
        'AAAGAAAAA',
        '   AAKK  ',
        '   GAKK  ',
        '   ADKK  ',
        '   ADKK  ',
        '   ADKU  ',
        '    G    '
    ], {
        G: 'draconicevolution:awakened_core',
        D: 'draconicevolution:draconic_energy_core',
        A: 'gtceu:awakened_draconium_plate',
        K: 'gtceu:awakened_draconium_rod',
        N: 'minecraft:netherite_ingot',
        U: 'draconicevolution:wyvern_pickaxe'
    })

    event.recipes.extendedcrafting.shaped_table('draconicevolution:draconic_shovel', [
        '   AKA   ',
        '  AGKGA  ',
        '   ANA   ',
        '  AGKGA  ',
        '    K    ',
        '    K    ',
        '   DKD   ',
        '  DUKUD  ',
        '    G    '
    ], {
        G: 'draconicevolution:awakened_core',
        D: 'draconicevolution:draconic_energy_core',
        A: 'gtceu:awakened_draconium_plate',
        K: 'gtceu:awakened_draconium_rod',
        N: 'minecraft:netherite_ingot',
        U: 'draconicevolution:wyvern_shovel'
    })

    event.recipes.extendedcrafting.shaped_table('draconicevolution:draconic_hoe', [
        'AAAGAANAA',
        'AAAAAAAAA',
        'AAAGAAAAA',
        '   AAKK  ',
        '   GAKK  ',
        '   ADKK  ',
        '   ADKK  ',
        '   ADKK  ',
        '   GUAG  '
    ], {
        G: 'draconicevolution:awakened_core',
        D: 'draconicevolution:draconic_energy_core',
        A: 'gtceu:awakened_draconium_plate',
        K: 'gtceu:awakened_draconium_rod',
        N: 'minecraft:netherite_ingot',
        U: 'draconicevolution:wyvern_hoe'
    })

    event.recipes.extendedcrafting.shaped_table('draconicevolution:draconic_bow', [
        '  AFKKFA ',
        ' AFUKKFA ',
        'AFGGKKFFA',
        'AFGGNKFFA',
        'AFGGKKFFA',
        ' AFUKKFA ',
        '  AFKKFA ',
        '   ADNDA ',
        '    GAG  '
    ], {
        G: 'draconicevolution:awakened_core',
        D: 'draconicevolution:draconic_energy_core',
        A: 'gtceu:awakened_draconium_plate',
        K: 'gtceu:awakened_draconium_rod',
        F: 'gtceu:awakened_draconium_fine_wire',
        N: 'minecraft:netherite_ingot',
        U: 'draconicevolution:wyvern_bow'
    })

    event.recipes.extendedcrafting.shaped_table('draconicevolution:draconic_capacitor', [
        ' AAAAAAA ',
        'AAGAAAGAA',
        'AAGAAAGAA',
        'AAADDDAAA',
        'AAAUKUAAA',
        'AAADDDAAA',
        'AAGAAAGAA',
        'AAGAAAGAA',
        ' AAAAAAA '
    ], {
        G: 'draconicevolution:awakened_core',
        D: 'draconicevolution:draconic_energy_core',
        A: 'gtceu:awakened_draconium_plate',
        K: 'gtceu:awakened_draconium_rod',
        U: 'draconicevolution:wyvern_capacitor'
    })

    // draconic_staff gated behind dragon_heart_crystal (Prophet tier)
    event.recipes.extendedcrafting.shaped_table('draconicevolution:draconic_staff', [
        '   AKA   ',
        '  AGGGA  ',
        ' AGDKDGA ',
        ' AKDDDKA ',
        ' AGDHDGA ',
        ' AKDDDKA ',
        ' AGDKDGA ',
        '  AGGGA  ',
        '   AKA   '
    ], {
        G: 'draconicevolution:awakened_core',
        D: 'draconicevolution:draconic_energy_core',
        A: 'gtceu:awakened_draconium_plate',
        K: 'gtceu:awakened_draconium_rod',
        H: 'kubejs:dragon_heart_crystal'
    })

    // ── Extended Crafting: Chaotic gear (UEV tier, 9×9 ultimate table) ─────────
    // Upgrade theme: consumes the draconic version (U key).
    // Key: C=chaotic_core, S=chaos_shard, L=large_chaos_frag, X=chaos_crystal_dust,
    //      A=awakened_draconium_plate, U=draconic_[item]

    event.recipes.extendedcrafting.shaped_table('draconicevolution:chaotic_chestpiece', [
        'AAAAAAAAA',
        'ACAAAACAA',
        'AAASXSAAA',
        'ACAAAAAAA',
        'AAAXUXAAA',
        'ACAAAAAAA',
        'AAASXSAAA',
        'ACAAAACAA',
        'AAAAAAAAA'
    ], {
        C: 'draconicevolution:chaotic_core',
        S: 'draconicevolution:chaos_shard',
        X: 'gtceu:chaos_crystal_dust',
        A: 'gtceu:awakened_draconium_plate',
        U: 'draconicevolution:draconic_chestpiece'
    })

    event.recipes.extendedcrafting.shaped_table('draconicevolution:chaotic_sword', [
        '    A    ',
        '   AXA   ',
        '  ACXCA  ',
        '   AXA   ',
        '    X    ',
        '    X    ',
        '   SXS   ',
        '  CUXUC  ',
        '    C    '
    ], {
        C: 'draconicevolution:chaotic_core',
        S: 'draconicevolution:chaos_shard',
        X: 'gtceu:chaos_crystal_dust',
        A: 'gtceu:awakened_draconium_plate',
        U: 'draconicevolution:draconic_sword'
    })

    event.recipes.extendedcrafting.shaped_table('draconicevolution:chaotic_axe', [
        '  AAAAA  ',
        ' AACAAAA ',
        ' AAAASAA ',
        ' AACAAAA ',
        '  AAUXA  ',
        '   AXX   ',
        '   CXX   ',
        '   CXC   ',
        '    C    '
    ], {
        C: 'draconicevolution:chaotic_core',
        S: 'draconicevolution:chaos_shard',
        X: 'gtceu:chaos_crystal_dust',
        A: 'gtceu:awakened_draconium_plate',
        U: 'draconicevolution:draconic_axe'
    })

    event.recipes.extendedcrafting.shaped_table('draconicevolution:chaotic_pickaxe', [
        'AAACAASAA',
        'AAAAAAAAA',
        'AAACAAAAA',
        '   AAXX  ',
        '   CAXX  ',
        '   ACXX  ',
        '   ACXX  ',
        '   ACXU  ',
        '    C    '
    ], {
        C: 'draconicevolution:chaotic_core',
        S: 'draconicevolution:chaos_shard',
        X: 'gtceu:chaos_crystal_dust',
        A: 'gtceu:awakened_draconium_plate',
        U: 'draconicevolution:draconic_pickaxe'
    })

    event.recipes.extendedcrafting.shaped_table('draconicevolution:chaotic_shovel', [
        '   AXA   ',
        '  ACXCA  ',
        '   ASA   ',
        '  ACXCA  ',
        '    X    ',
        '    X    ',
        '   CXC   ',
        '  CUXUC  ',
        '    C    '
    ], {
        C: 'draconicevolution:chaotic_core',
        S: 'draconicevolution:chaos_shard',
        X: 'gtceu:chaos_crystal_dust',
        A: 'gtceu:awakened_draconium_plate',
        U: 'draconicevolution:draconic_shovel'
    })

    event.recipes.extendedcrafting.shaped_table('draconicevolution:chaotic_hoe', [
        'AAACAASAA',
        'AAAAAAAAA',
        'AAACAAAAA',
        '   AAXX  ',
        '   CAXX  ',
        '   ACXX  ',
        '   ACXX  ',
        '   ACXX  ',
        '   CUAC  '
    ], {
        C: 'draconicevolution:chaotic_core',
        S: 'draconicevolution:chaos_shard',
        X: 'gtceu:chaos_crystal_dust',
        A: 'gtceu:awakened_draconium_plate',
        U: 'draconicevolution:draconic_hoe'
    })

    event.recipes.extendedcrafting.shaped_table('draconicevolution:chaotic_bow', [
        '  AFXXFA ',
        ' AFUXXFA ',
        'AFCCXXFFA',
        'AFCCSXFFA',
        'AFCCXXFFA',
        ' AFUXXFA ',
        '  AFXXFA ',
        '   ACSCA ',
        '    CAC  '
    ], {
        C: 'draconicevolution:chaotic_core',
        S: 'draconicevolution:chaos_shard',
        X: 'gtceu:chaos_crystal_dust',
        A: 'gtceu:awakened_draconium_plate',
        F: 'gtceu:awakened_draconium_fine_wire',
        U: 'draconicevolution:draconic_bow'
    })

    event.recipes.extendedcrafting.shaped_table('draconicevolution:chaotic_capacitor', [
        ' AAAAAAA ',
        'AACAAACAA',
        'AACAAACAA',
        'AAASSSAAA',
        'AAAXUXAAA',
        'AAASSSAAA',
        'AACAAACAA',
        'AACAAACAA',
        ' AAAAAAA '
    ], {
        C: 'draconicevolution:chaotic_core',
        S: 'draconicevolution:chaos_shard',
        X: 'gtceu:chaos_crystal_dust',
        A: 'gtceu:awakened_draconium_plate',
        U: 'draconicevolution:draconic_capacitor'
    })

    // chaotic_staff — primary path (draconic_staff upgrade)
    event.recipes.extendedcrafting.shaped_table('draconicevolution:chaotic_staff', [
        '   AXA   ',
        '  ACCCA  ',
        ' ACCXCCA ',
        ' ACXXXCA ',
        ' ACCUCCA ',
        ' ACXXXCA ',
        ' ACCXCCA ',
        '  ACCCA  ',
        '   ASA   '
    ], {
        C: 'draconicevolution:chaotic_core',
        S: 'draconicevolution:chaos_shard',
        X: 'gtceu:chaos_crystal_dust',
        A: 'gtceu:awakened_draconium_plate',
        U: 'draconicevolution:draconic_staff'
    })


})
