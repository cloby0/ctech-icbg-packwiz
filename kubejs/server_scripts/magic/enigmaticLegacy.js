ServerEvents.recipes(event => {


    event.remove({ output: 'enigmaticlegacy:the_acknowledgment' })
    event.shaped(
        Item.of('enigmaticlegacy:the_acknowledgment', 1),
        [
            'HKH',
            ' B ',
            ' L '
        ],
        {
            H: 'gtceu:holy_silver_ingot',
            B: 'minecraft:book',
            L: 'minecraft:lantern',
            K: '#forge:tools/knives'
        }
    ).damageIngredient(Ingredient.of('#forge:tools/knives'))

    event.remove({ output: 'enigmaticlegacy:animal_guidebook' })
    event.shaped(
        Item.of('enigmaticlegacy:animal_guidebook', 1),
        [
            'KH ',
            'fXf',
            ' a '
        ],
        {
            H: 'gtceu:holy_silver_nugget',
            f: 'minecraft:dandelion',
            X: 'minecraft:book',
            a: 'minecraft:apple',
            K: '#forge:tools/knives'
        }
    ).damageIngredient(Ingredient.of('#forge:tools/knives'))

    event.remove({ output: 'enigmaticlegacy:hunter_guidebook' })
    event.shaped(
        Item.of('enigmaticlegacy:hunter_guidebook', 1),
        [
            'bpK',
            'HXH',
            ' lb'
        ],
        {
            H: 'gtceu:holy_silver_nugget',
            b: 'minecraft:bone',
            p: 'minecraft:ender_pearl',
            X: 'minecraft:book',
            l: 'minecraft:leather',
            K: '#forge:tools/knives'
        }
    ).damageIngredient(Ingredient.of('#forge:tools/knives'))

    event.remove({ output: 'enigmaticlegacy:iron_ring' })
    event.shaped(
        Item.of('enigmaticlegacy:iron_ring', 1),
        [
            'MXn',
            'XHX',
            'nXF'
        ],
        {
            X: 'minecraft:iron_ingot',
            n: 'minecraft:iron_nugget',
            H: 'gtceu:holy_silver_nugget',
            M: '#forge:tools/hammers',
            F: '#forge:tools/files'
        }
    ).damageIngredient(Ingredient.of('#forge:tools/hammers')).damageIngredient(Ingredient.of('#forge:tools/files'))

    event.remove({ output: 'enigmaticlegacy:mega_sponge' })
    event.shaped(
        Item.of('enigmaticlegacy:mega_sponge', 1),
        [
            'KES',
            'XNX',
            'SHS'
        ],
        {
            S: 'minecraft:sponge',
            E: 'minecraft:ender_eye',
            X: 'minecraft:heart_of_the_sea',
            N: 'minecraft:nautilus_shell',
            H: 'gtceu:holy_silver_plate',
            K: '#forge:tools/knives'
        }
    ).damageIngredient(Ingredient.of('#forge:tools/knives'))

    event.remove({ output: 'enigmaticlegacy:extradimensional_eye' })
    event.shaped(
        Item.of('enigmaticlegacy:extradimensional_eye', 1),
        [
            'FM ',
            'IXI',
            'NHN'
        ],
        {
            M: 'minecraft:phantom_membrane',
            I: 'minecraft:gold_ingot',
            X: 'minecraft:ender_eye',
            N: 'minecraft:gold_nugget',
            H: 'gtceu:holy_silver_nugget',
            F: '#forge:tools/files'
        }
    ).damageIngredient(Ingredient.of('#forge:tools/files'))

    event.remove({ output: 'enigmaticlegacy:insignia' })
    event.shaped(
        Item.of('enigmaticlegacy:insignia', 1),
        [
            'ZEY',
            'HMG',
            'PNP'
        ],
        {
            E: 'minecraft:ender_eye',
            H: 'gtceu:holy_silver_ingot',
            M: 'minecraft:emerald',
            G: 'minecraft:gold_ingot',
            P: 'minecraft:prismarine_crystals',
            N: 'minecraft:name_tag',
            Z: '#forge:tools/hammers',
            Y: '#forge:tools/files'
        }
    ).damageIngredient(Ingredient.of('#forge:tools/hammers')).damageIngredient(Ingredient.of('#forge:tools/files'))

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
            'ZEL',
            'GXP',
            'YGL'
        ],
        {
            L: 'minecraft:lapis_lazuli',
            E: 'minecraft:ender_eye',
            G: 'minecraft:gold_ingot',
            X: 'enigmaticlegacy:magnet_ring',
            P: 'gtceu:prima_materia_plate',
            Z: '#forge:tools/hammers',
            Y: '#forge:tools/files'
        }
    ).damageIngredient(Ingredient.of('#forge:tools/hammers')).damageIngredient(Ingredient.of('#forge:tools/files'))

    event.remove({ output: 'enigmaticlegacy:enchantment_transposer' })
    event.shaped(
        Item.of('enigmaticlegacy:enchantment_transposer', 1),
        [
            'DPp',
            'lXl',
            'brb'
        ],
        {
            p: 'minecraft:prismarine_crystals',
            P: 'gtceu:prima_materia_plate',
            l: 'minecraft:lapis_lazuli',
            X: 'minecraft:book',
            b: 'minecraft:blaze_powder',
            r: 'minecraft:redstone',
            D: '#forge:tools/screwdrivers'
        }
    ).damageIngredient(Ingredient.of('#forge:tools/screwdrivers'))

    event.remove({ output: 'enigmaticlegacy:monster_charm' })
    event.shaped(
        Item.of('enigmaticlegacy:monster_charm', 1),
        [
            'FS ',
            'BXB',
            'EPE'
        ],
        {
            S: 'minecraft:soul_lantern',
            B: 'minecraft:blaze_powder',
            X: 'minecraft:skeleton_skull',
            E: 'minecraft:experience_bottle',
            P: 'gtceu:prima_materia_plate',
            F: '#forge:tools/files'
        }
    ).damageIngredient(Ingredient.of('#forge:tools/files'))

    event.remove({ output: 'enigmaticlegacy:xp_scroll' })
    event.shaped(
        Item.of('enigmaticlegacy:xp_scroll', 1),
        [
            'KEB',
            'IXF',
            'BPB'
        ],
        {
            B: 'minecraft:experience_bottle',
            E: 'minecraft:ender_eye',
            I: 'minecraft:ink_sac',
            X: 'enigmaticlegacy:thicc_scroll',
            F: 'minecraft:feather',
            P: 'gtceu:prima_materia_plate',
            K: '#forge:tools/knives'
        }
    ).damageIngredient(Ingredient.of('#forge:tools/knives'))

    event.remove({ output: 'enigmaticlegacy:evil_ingot' })
    event.shaped(
        Item.of('enigmaticlegacy:evil_ingot', 1),
        [
            'HPT',
            'ENE',
            'TET'
        ],
        {
            T: 'minecraft:ghast_tear',
            P: 'gtceu:prima_materia_plate',
            E: 'enigmaticlegacy:evil_essence',
            N: 'minecraft:netherite_ingot',
            H: '#forge:tools/hammers'
        }
    ).damageIngredient(Ingredient.of('#forge:tools/hammers'))


    event.remove({ output: 'enigmaticlegacy:forbidden_axe' })
    event.shaped(
        Item.of('enigmaticlegacy:forbidden_axe', 1),
        [
            'ISI',
            'FXP',
            'MRM'
        ],
        {
            I: 'minecraft:netherite_ingot',
            S: 'minecraft:wither_skeleton_skull',
            P: 'minecraft:blaze_powder',
            X: 'minecraft:diamond_axe',
            M: 'botania:manasteel_ingot',
            R: 'minecraft:blaze_rod',
            F: '#forge:tools/files'
        }
    ).damageIngredient(Ingredient.of('#forge:tools/files'))

    event.remove({ output: 'enigmaticlegacy:cosmic_heart' })
    event.shaped(
        Item.of('enigmaticlegacy:cosmic_heart', 1),
        [
            'HSD',
            'MXM',
            'DED'
        ],
        {
            D: 'enigmaticlegacy:astral_dust',
            S: 'minecraft:nether_star',
            M: 'gtceu:manasteel_plate',
            X: 'minecraft:heart_of_the_sea',
            E: 'minecraft:ender_eye',
            H: '#forge:tools/hammers'
        }
    ).damageIngredient(Ingredient.of('#forge:tools/hammers'))


    event.remove({ output: 'enigmaticlegacy:enigmatic_elytra' })
    event.shaped(
        Item.of('enigmaticlegacy:enigmatic_elytra', 1),
        [
            'TAT',
            'EXE',
            'KND'
        ],
        {
            T: 'botania:terrasteel_ingot',
            A: 'enigmaticlegacy:angel_blessing',
            E: 'enigmaticlegacy:etherium_ingot',
            X: 'minecraft:elytra',
            D: 'enigmaticlegacy:astral_dust',
            N: 'enigmaticlegacy:eye_of_nebula',
            K: '#forge:tools/knives'
        }
    ).damageIngredient(Ingredient.of('#forge:tools/knives'))


    event.remove({ output: 'enigmaticlegacy:the_infinitum' })
    event.shaped(
        Item.of('enigmaticlegacy:the_infinitum', 1),
        [
            'HCH',
            'EXE',
            'MAZ'
        ],
        {
            H: 'enigmaticlegacy:cosmic_heart',
            C: 'enigmaticlegacy:enchanter_pearl',
            E: 'enigmaticlegacy:evil_essence',
            X: 'enigmaticlegacy:the_twist',
            Z: 'botania:elementium_ingot',
            A: 'enigmaticlegacy:abyssal_heart',
            M: '#forge:tools/hammers'
        }
    ).damageIngredient(Ingredient.of('#forge:tools/hammers'))

    event.remove({ output: 'enigmaticlegacy:desolation_ring' })
    event.shaped(
        Item.of('enigmaticlegacy:desolation_ring', 1),
        [
            'HAH',
            'MXZ',
            'FPE'
        ],
        {
            H: 'enigmaticlegacy:cosmic_heart',
            A: 'enigmaticlegacy:abyssal_heart',
            Z: 'gtceu:elementium_plate',
            X: 'enigmaticlegacy:golden_ring',
            E: 'enigmaticlegacy:evil_essence',
            P: 'enigmaticlegacy:void_pearl',
            M: '#forge:tools/hammers',
            F: '#forge:tools/files'
        }
    ).damageIngredient(Ingredient.of('#forge:tools/hammers')).damageIngredient(Ingredient.of('#forge:tools/files'))


    event.shaped(
        Item.of('enigmaticlegacy:astral_dust', 4),
        [
            'MG ',
            'AHA',
            ' E '
        ],
        {
            G: 'ars_nouveau:source_gem',
            A: 'minecraft:amethyst_shard',
            H: 'gtceu:holy_silver_dust',
            E: 'minecraft:ender_eye',
            M: '#forge:tools/mortars'
        }
    ).damageIngredient(Ingredient.of('#forge:tools/mortars'))

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
            'FPA',
            'DXD',
            'ABA'
        ],
        {
            A: 'enigmaticlegacy:astral_dust',
            P: 'gtceu:prima_materia_plate',
            D: 'enigmaticlegacy:etherium_ingot',
            X: 'minecraft:ender_eye',
            B: 'minecraft:dragon_breath',
            F: '#forge:tools/files'
        }
    ).damageIngredient(Ingredient.of('#forge:tools/files'))

    event.shaped(
        Item.of('enigmaticlegacy:void_pearl', 1),
        [
            'FO ',
            'PXP',
            ' O '
        ],
        {
            O: 'minecraft:obsidian',
            P: 'gtceu:prima_materia_plate',
            X: 'minecraft:ender_pearl',
            F: '#forge:tools/files'
        }
    ).damageIngredient(Ingredient.of('#forge:tools/files'))

    event.shaped(
        Item.of('enigmaticlegacy:evil_essence', 2),
        [
            'MW ',
            'WPW',
            ' W '
        ],
        {
            W: 'minecraft:wither_rose',
            P: 'gtceu:prima_materia_plate',
            M: '#forge:tools/mortars'
        }
    ).damageIngredient(Ingredient.of('#forge:tools/mortars'))

    event.shaped(
        Item.of('enigmaticlegacy:earth_heart', 1),
        [
            'KMG',
            'MHM',
            'GMG'
        ],
        {
            G: 'minecraft:moss_block',
            M: 'botania:manasteel_ingot',
            H: 'minecraft:heart_of_the_sea',
            K: '#forge:tools/knives'
        }
    ).damageIngredient(Ingredient.of('#forge:tools/knives'))

    event.shaped(
        Item.of('enigmaticlegacy:darkest_scroll', 1),
        [
            'KWE',
            'WMW',
            'EWE'
        ],
        {
            E: 'enigmaticlegacy:evil_essence',
            W: 'minecraft:wither_rose',
            M: 'botania:manasteel_ingot',
            K: '#forge:tools/knives'
        }
    ).damageIngredient(Ingredient.of('#forge:tools/knives'))

    event.shaped(
        Item.of('enigmaticlegacy:angel_blessing', 2),
        [
            'HTF',
            'TNT',
            'FTF'
        ],
        {
            F: 'minecraft:feather',
            T: 'botania:terrasteel_ingot',
            N: 'minecraft:nether_star',
            H: '#forge:tools/hammers'
        }
    ).damageIngredient(Ingredient.of('#forge:tools/hammers'))

    event.shaped(
        Item.of('enigmaticlegacy:abyssal_heart', 1),
        [
            'HTC',
            'TAT',
            'CTC'
        ],
        {
            C: 'minecraft:crying_obsidian',
            T: 'botania:terrasteel_ingot',
            A: 'minecraft:wither_skeleton_skull',
            H: '#forge:tools/hammers'
        }
    ).damageIngredient(Ingredient.of('#forge:tools/hammers'))

})
