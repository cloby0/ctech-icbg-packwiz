ServerEvents.recipes(event => {


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

    event.remove({ output: 'enigmaticlegacy:etherium_ingot', type: 'minecraft:smelting' })
    event.remove({ output: 'enigmaticlegacy:etherium_ingot', type: 'minecraft:blasting' })
    event.remove({ output: 'enigmaticlegacy:etherium_ingot', type: 'minecraft:crafting_shapeless' })
    event.recipes.gtceu.electric_blast_furnace('etherium_ingot_ebf')
        .itemInputs('1x enigmaticlegacy:etherium_ore')
        .itemOutputs('1x enigmaticlegacy:etherium_ingot')
        .blastFurnaceTemp(2700)
        .duration(20 * 20)
        .EUt(GTValues.VA[GTValues.HV])


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
