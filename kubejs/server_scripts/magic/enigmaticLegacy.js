ServerEvents.recipes(event => {

    // === HV / INITIATE ===

    // the_acknowledgment: vanilla is Book + Lantern (trivially free)
    // gate at holy_silver (HV marker)
    event.remove({ output: 'enigmaticlegacy:the_acknowledgment' })
    event.shaped(
        Item.of('enigmaticlegacy:the_acknowledgment', 1),
        [
            'H H',
            ' B ',
            ' L '
        ],
        {
            H: 'gtceu:holy_silver_ingot',
            B: 'minecraft:book',
            L: 'minecraft:lantern'
        }
    )

    // animal_guidebook / hunter_guidebook: sub-guidebooks for mod systems
    // both are vanilla mats only — gate at holy_silver like the_acknowledgment
    event.remove({ output: 'enigmaticlegacy:animal_guidebook' })
    event.shaped(
        Item.of('enigmaticlegacy:animal_guidebook', 1),
        [
            ' H ',
            'fXf',
            ' a '
        ],
        {
            H: 'gtceu:holy_silver_nugget',
            f: 'minecraft:dandelion',
            X: 'minecraft:book',
            a: 'minecraft:apple'
        }
    )

    event.remove({ output: 'enigmaticlegacy:hunter_guidebook' })
    event.shaped(
        Item.of('enigmaticlegacy:hunter_guidebook', 1),
        [
            'bp ',
            'HXH',
            ' lb'
        ],
        {
            H: 'gtceu:holy_silver_nugget',
            b: 'minecraft:bone',
            p: 'minecraft:ender_pearl',
            X: 'minecraft:book',
            l: 'minecraft:leather'
        }
    )

    // iron_ring: vanilla is pure iron_ingot + iron_nugget — trivially free, base for all rings
    // add holy_silver_nugget to the empty center slot (ring forged around a holy core)
    // gates: golden_ring, ender_ring, magnet_ring chains (all need iron_ring)
    event.remove({ output: 'enigmaticlegacy:iron_ring' })
    event.shaped(
        Item.of('enigmaticlegacy:iron_ring', 1),
        [
            'nXn',
            'XHX',
            'nXn'
        ],
        {
            X: 'minecraft:iron_ingot',
            n: 'minecraft:iron_nugget',
            H: 'gtceu:holy_silver_nugget'
        }
    )

    // mega_sponge: vanilla mats only (heart_of_the_sea + nautilus + sponge + ender_eye + ghast_tear)
    // swap ghast_tear (bottom-center) for holy_silver_plate
    event.remove({ output: 'enigmaticlegacy:mega_sponge' })
    event.shaped(
        Item.of('enigmaticlegacy:mega_sponge', 1),
        [
            'SES',
            'XNX',
            'SHS'
        ],
        {
            S: 'minecraft:sponge',
            E: 'minecraft:ender_eye',
            X: 'minecraft:heart_of_the_sea',
            N: 'minecraft:nautilus_shell',
            H: 'gtceu:holy_silver_plate'
        }
    )

    // extradimensional_eye: vanilla mats only (ender_eye + gold + phantom_membrane + blaze_powder)
    // swap blaze_powder (bottom-center) for holy_silver_nugget
    event.remove({ output: 'enigmaticlegacy:extradimensional_eye' })
    event.shaped(
        Item.of('enigmaticlegacy:extradimensional_eye', 1),
        [
            ' M ',
            'IXI',
            'NHN'
        ],
        {
            M: 'minecraft:phantom_membrane',
            I: 'minecraft:gold_ingot',
            X: 'minecraft:ender_eye',
            N: 'minecraft:gold_nugget',
            H: 'gtceu:holy_silver_nugget'
        }
    )

    // insignia: vanilla mats only (ender_eye + gold + emerald + prismarine + name_tag)
    // swap left gold_ingot for holy_silver_ingot
    event.remove({ output: 'enigmaticlegacy:insignia' })
    event.shaped(
        Item.of('enigmaticlegacy:insignia', 1),
        [
            ' E ',
            'HMG',
            'PNP'
        ],
        {
            E: 'minecraft:ender_eye',
            H: 'gtceu:holy_silver_ingot',
            M: 'minecraft:emerald',
            G: 'minecraft:gold_ingot',
            P: 'minecraft:prismarine_crystals',
            N: 'minecraft:name_tag'
        }
    )

    // mending_mixture: vanilla mats only (dragon_breath + glistering_melon + prismarine + phantom_membrane + blaze_powder + ghast_tear)
    // very powerful item (infinite mending without books) — add holy_silver_ingot
    // uses custom no-return-craft type (ingredients not returned to inventory)
    event.remove({ output: 'enigmaticlegacy:mending_mixture', type: 'enigmaticlegacy:shapeless_no_return_craft' })
    event.custom({
        "type": "enigmaticlegacy:shapeless_no_return_craft",
        "ingredients": [
            { "item": "minecraft:dragon_breath" },
            { "item": "minecraft:glistering_melon_slice" },
            { "item": "minecraft:prismarine_crystals" },
            { "item": "minecraft:phantom_membrane" },
            { "item": "minecraft:blaze_powder" },
            { "item": "minecraft:ghast_tear" },
            { "item": "gtceu:holy_silver_ingot" }
        ],
        "result": { "item": "enigmaticlegacy:mending_mixture" }
    })

    // etherium_ingot: vanilla smelts/blasts etherium_ore in furnace — no GT gate
    // remove all vanilla smelting paths, require EBF at 2700K (HV kanthal coils)
    event.remove({ output: 'enigmaticlegacy:etherium_ingot', type: 'minecraft:smelting' })
    event.remove({ output: 'enigmaticlegacy:etherium_ingot', type: 'minecraft:blasting' })
    event.remove({ output: 'enigmaticlegacy:etherium_ingot', type: 'minecraft:crafting_shapeless' })
    event.recipes.gtceu.electric_blast_furnace('etherium_ingot_ebf')
        .itemInputs('1x enigmaticlegacy:etherium_ore')
        .itemOutputs('1x enigmaticlegacy:etherium_ingot')
        .blastFurnaceTemp(2700)
        .duration(20 * 20)
        .EUt(GTValues.VA[GTValues.HV])

    // === EV / SORCERER ===

    // super_magnet_ring: vanilla mats only (magnet_ring + gold + ender_eye + lapis)
    // swap right gold_ingot for prima_materia_plate (Ring of Dislocation is very powerful)
    event.remove({ output: 'enigmaticlegacy:super_magnet_ring' })
    event.shaped(
        Item.of('enigmaticlegacy:super_magnet_ring', 1),
        [
            'LEL',
            'GXP',
            'LGL'
        ],
        {
            L: 'minecraft:lapis_lazuli',
            E: 'minecraft:ender_eye',
            G: 'minecraft:gold_ingot',
            X: 'enigmaticlegacy:magnet_ring',
            P: 'gtceu:prima_materia_plate'
        }
    )

    // enchantment_transposer: ALL vanilla mats (book + blaze + lapis + prismarine + gold_nugget + redstone)
    // extremely powerful — swap gold_nugget (top-center) for prima_materia_plate
    event.remove({ output: 'enigmaticlegacy:enchantment_transposer' })
    event.shaped(
        Item.of('enigmaticlegacy:enchantment_transposer', 1),
        [
            'pPp',
            'lXl',
            'brb'
        ],
        {
            p: 'minecraft:prismarine_crystals',
            P: 'gtceu:prima_materia_plate',
            l: 'minecraft:lapis_lazuli',
            X: 'minecraft:book',
            b: 'minecraft:blaze_powder',
            r: 'minecraft:redstone'
        }
    )

    // monster_charm: netherite + skeleton_skull + blaze + exp_bottle + soul_lantern
    // netherite is hard but not a magic gate — swap netherite (bottom-center) for prima_materia_plate
    event.remove({ output: 'enigmaticlegacy:monster_charm' })
    event.shaped(
        Item.of('enigmaticlegacy:monster_charm', 1),
        [
            ' S ',
            'BXB',
            'EPE'
        ],
        {
            S: 'minecraft:soul_lantern',
            B: 'minecraft:blaze_powder',
            X: 'minecraft:skeleton_skull',
            E: 'minecraft:experience_bottle',
            P: 'gtceu:prima_materia_plate'
        }
    )

    // xp_scroll: thicc_scroll + exp_bottle + ender_eye + ink_sac + feather + emerald — no magic gate
    // swap emerald (bottom-center) for prima_materia_plate
    event.remove({ output: 'enigmaticlegacy:xp_scroll' })
    event.shaped(
        Item.of('enigmaticlegacy:xp_scroll', 1),
        [
            'BEB',
            'IXF',
            'BPB'
        ],
        {
            B: 'minecraft:experience_bottle',
            E: 'minecraft:ender_eye',
            I: 'minecraft:ink_sac',
            X: 'enigmaticlegacy:thicc_scroll',
            F: 'minecraft:feather',
            P: 'gtceu:prima_materia_plate'
        }
    )

    // evil_ingot: vanilla uses netherite center + evil_essence (loot) edges + ghast_tear corners
    // swap top-center evil_essence for prima_materia_plate (EV marker)
    // gates via evil_essence chain: the_twist, enchanter_pearl, infernal_shield, ender_slayer
    event.remove({ output: 'enigmaticlegacy:evil_ingot' })
    event.shaped(
        Item.of('enigmaticlegacy:evil_ingot', 1),
        [
            'TPT',
            'ENE',
            'TET'
        ],
        {
            T: 'minecraft:ghast_tear',
            P: 'gtceu:prima_materia_plate',
            E: 'enigmaticlegacy:evil_essence',
            N: 'minecraft:netherite_ingot'
        }
    )

    // === IV / ALCHEMIST ===

    // forbidden_axe: diamond_axe + netherite + wither_skull + blaze — no magic gate
    // fill empty bottom corners with botania:manasteel_ingot (IV marker — redirected to botania:)
    event.remove({ output: 'enigmaticlegacy:forbidden_axe' })
    event.shaped(
        Item.of('enigmaticlegacy:forbidden_axe', 1),
        [
            'ISI',
            'PXP',
            'MRM'
        ],
        {
            I: 'minecraft:netherite_ingot',
            S: 'minecraft:wither_skeleton_skull',
            P: 'minecraft:blaze_powder',
            X: 'minecraft:diamond_axe',
            M: 'botania:manasteel_ingot',
            R: 'minecraft:blaze_rod'
        }
    )

    // cosmic_heart: vanilla uses nether_star + astral_dust + blaze_powder + heart_of_the_sea + ender_eye
    // swap blaze_powder for manasteel_plate (IV marker — ingot redirects to botania: so use plate)
    // gates: the_infinitum, desolation_ring, cosmic_cake
    event.remove({ output: 'enigmaticlegacy:cosmic_heart' })
    event.shaped(
        Item.of('enigmaticlegacy:cosmic_heart', 1),
        [
            'DSD',
            'MXM',
            'DED'
        ],
        {
            D: 'enigmaticlegacy:astral_dust',
            S: 'minecraft:nether_star',
            M: 'gtceu:manasteel_plate',
            X: 'minecraft:heart_of_the_sea',
            E: 'minecraft:ender_eye'
        }
    )

    // === LUV / THAUMATURGE ===

    // enigmatic_elytra: vanilla uses elytra + dragon_breath + angel_blessing (loot) + etherium_ingot + astral_dust + eye_of_nebula
    // swap dragon_breath for terrasteel_ingot (LuV marker — botania: namespace due to setIgnored)
    event.remove({ output: 'enigmaticlegacy:enigmatic_elytra' })
    event.shaped(
        Item.of('enigmaticlegacy:enigmatic_elytra', 1),
        [
            'TAT',
            'EXE',
            'DND'
        ],
        {
            T: 'botania:terrasteel_ingot',
            A: 'enigmaticlegacy:angel_blessing',
            E: 'enigmaticlegacy:etherium_ingot',
            X: 'minecraft:elytra',
            D: 'enigmaticlegacy:astral_dust',
            N: 'enigmaticlegacy:eye_of_nebula'
        }
    )

    // === ZPM / ARCANIST ===

    // the_infinitum: vanilla uses cosmic_heart + abyssal_heart + evil_essence + enchanter_pearl + the_twist + netherite
    // swap netherite for elementium_ingot (ZPM marker — botania: namespace due to setIgnored)
    event.remove({ output: 'enigmaticlegacy:the_infinitum' })
    event.shaped(
        Item.of('enigmaticlegacy:the_infinitum', 1),
        [
            'HCH',
            'EXE',
            'ZAZ'
        ],
        {
            H: 'enigmaticlegacy:cosmic_heart',
            C: 'enigmaticlegacy:enchanter_pearl',
            E: 'enigmaticlegacy:evil_essence',
            X: 'enigmaticlegacy:the_twist',
            Z: 'botania:elementium_ingot',
            A: 'enigmaticlegacy:abyssal_heart'
        }
    )

    // desolation_ring: vanilla uses golden_ring + cosmic_heart + abyssal_heart + evil_essence + void_pearl + netherite
    // swap netherite for elementium_plate (ZPM marker)
    event.remove({ output: 'enigmaticlegacy:desolation_ring' })
    event.shaped(
        Item.of('enigmaticlegacy:desolation_ring', 1),
        [
            'HAH',
            'ZXZ',
            'EPE'
        ],
        {
            H: 'enigmaticlegacy:cosmic_heart',
            A: 'enigmaticlegacy:abyssal_heart',
            Z: 'gtceu:elementium_plate',
            X: 'enigmaticlegacy:golden_ring',
            E: 'enigmaticlegacy:evil_essence',
            P: 'enigmaticlegacy:void_pearl'
        }
    )

    // === CRAFTABLE LOOT ITEMS ===
    // All originally loot-only — these block full crafting chains without a recipe

    // astral_dust (HV): celestial dust used in many recipes (cosmic_heart, elytra, astral_breaker, etc.)
    // source_gem + amethyst + holy_silver_dust + ender_eye → 4x astral_dust
    event.shaped(
        Item.of('enigmaticlegacy:astral_dust', 4),
        [
            ' G ',
            'AHA',
            ' E '
        ],
        {
            G: 'ars_nouveau:source_gem',
            A: 'minecraft:amethyst_shard',
            H: 'gtceu:holy_silver_dust',
            E: 'minecraft:ender_eye'
        }
    )

    // recall_potion (HV): used in escape_scroll and twisted_mirror
    // chorus_fruit (end teleport) + phantom_membrane + holy_silver_ingot + glass_bottle
    event.shaped(
        Item.of('enigmaticlegacy:recall_potion', 1),
        [
            ' P ',
            'CHC',
            ' G '
        ],
        {
            P: 'minecraft:phantom_membrane',
            C: 'minecraft:chorus_fruit',
            H: 'gtceu:holy_silver_ingot',
            G: 'minecraft:glass_bottle'
        }
    )

    // eye_of_nebula (EV): used in end_anchor, escape_scroll, enigmatic_elytra
    // etherium_ingot (HV gated) + astral_dust + prima_materia_plate + ender_eye + dragon_breath
    event.shaped(
        Item.of('enigmaticlegacy:eye_of_nebula', 1),
        [
            'APA',
            'DXD',
            'ABA'
        ],
        {
            A: 'enigmaticlegacy:astral_dust',
            P: 'gtceu:prima_materia_plate',
            D: 'enigmaticlegacy:etherium_ingot',
            X: 'minecraft:ender_eye',
            B: 'minecraft:dragon_breath'
        }
    )

    // void_pearl (EV): used in desolation_ring
    // ender_pearl surrounded by obsidian + prima_materia_plate
    event.shaped(
        Item.of('enigmaticlegacy:void_pearl', 1),
        [
            ' O ',
            'PXP',
            ' O '
        ],
        {
            O: 'minecraft:obsidian',
            P: 'gtceu:prima_materia_plate',
            X: 'minecraft:ender_pearl'
        }
    )

    // evil_essence (EV): used in 6+ recipes (evil_ingot, enchanter_pearl, the_twist, ender_slayer, etc.)
    // wither_rose (death of mobs via wither) + prima_materia_plate (EV gate) → 2x
    event.shaped(
        Item.of('enigmaticlegacy:evil_essence', 2),
        [
            ' W ',
            'WPW',
            ' W '
        ],
        {
            W: 'minecraft:wither_rose',
            P: 'gtceu:prima_materia_plate'
        }
    )

    // earth_heart (IV): used in mining_charm, infinimeal, twisted_heart (→ berserk_charm, soul_compass, cursed_stone, the_twist)
    // moss_block (living earth) surrounding heart_of_the_sea, bound with manasteel (IV marker)
    event.shaped(
        Item.of('enigmaticlegacy:earth_heart', 1),
        [
            'GMG',
            'MHM',
            'GMG'
        ],
        {
            G: 'minecraft:moss_block',
            M: 'botania:manasteel_ingot',
            H: 'minecraft:heart_of_the_sea'
        }
    )

    // darkest_scroll (IV): used in cursed_scroll and avarice_scroll
    // evil_essence (4x) + wither_rose (4x) + manasteel center (IV gate)
    event.shaped(
        Item.of('enigmaticlegacy:darkest_scroll', 1),
        [
            'EWE',
            'WMW',
            'EWE'
        ],
        {
            E: 'enigmaticlegacy:evil_essence',
            W: 'minecraft:wither_rose',
            M: 'botania:manasteel_ingot'
        }
    )

    // angel_blessing (LuV): used in enigmatic_elytra (2x) and heaven_scroll
    // feathers + nether_star bound with terrasteel_ingot (LuV marker) → 2x
    event.shaped(
        Item.of('enigmaticlegacy:angel_blessing', 2),
        [
            'FTF',
            'TNT',
            'FTF'
        ],
        {
            F: 'minecraft:feather',
            T: 'botania:terrasteel_ingot',
            N: 'minecraft:nether_star'
        }
    )

    // abyssal_heart (LuV): used in the_infinitum and desolation_ring (both ZPM)
    // crying_obsidian + wither_skeleton_skull (abyss themed) bound with terrasteel (LuV marker)
    event.shaped(
        Item.of('enigmaticlegacy:abyssal_heart', 1),
        [
            'CTC',
            'TAT',
            'CTC'
        ],
        {
            C: 'minecraft:crying_obsidian',
            T: 'botania:terrasteel_ingot',
            A: 'minecraft:wither_skeleton_skull'
        }
    )

})
