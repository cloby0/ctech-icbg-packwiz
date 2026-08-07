ServerEvents.recipes(event => {
    // Source Jars/relays, source_gem_block, sifter output: StarbuncleMania is a cut Ars addon,
    // its two assembler recipes and the items they made are dead. Nothing to replace, dropped
    // outright along with the recipes that crafted the now-gone ars_nouveau:source_gem_block.

    event.remove({ id: 'reliquary:lantern_of_paranoia' })
    event.remove({ id: 'reliquary:interdiction_torch' })
    event.remove({ id: 'reliquary:alkahestry_altar' })
    event.remove({ id: 'hexerei:mahogany_broom_from_mixing_cauldron' })
    event.remove({ id: 'hexerei:willow_broom_from_mixing_cauldron' })
    event.remove({ id: 'hexerei:witch_hazel_broom_from_mixing_cauldron'})
    event.remove({ id: 'enderstorage:ender_chest' })
    event.remove({ id: 'enderstorage:ender_tank' })
    event.remove({ id: 'enderstorage:ender_pouch'})

    // Magebloom crop/fiber/sieve: fiber's only source was Ars's own crop, which is a dead item.
    // Per user direction 2026-07-28: retired outright, no replacement crop. SilentGear's
    // Magebloom Fiber material (silentgear_materials/magebloom_fiber.json) deleted, its
    // silentcompat:magebloom_fiber tag had no other source. magebloom_sieve orphan lang/texture
    // removed too (its only registered use).
    // Dropped: wheat_seeds -> magebloom_crop imbuement, and the magebloom_sieve craft that needed
    // magebloom_fiber (its only other consumer here was the Source Gem chain below, also dropped).

    // Ward Lattice: an interdiction torch's whole job is repelling/deterring -- protection theme.
    event.shaped(
            Item.of('reliquary:interdiction_torch', 3),
            [
                '   ',
                'WB ',
                ' A '
            ],
            {
                A: 'kubejs:veridian_sigil',
                B: 'kubejs:zanite_laced_iron',
                W: 'kubejs:veridian_ward_lattice'
            }
        );
    // Sublimation: MagiChem's Ritual of the Balanced Scales builds the altar itself --
    // alkahestry (universal transmutation) is MagiChem's own alchemy theme, tighter than a
    // vanilla shaped recipe. Channeling Vessel (station/conduit grammar), not Wizard Brain --
    // that's reserved pack-wide for worn/wielded gear, not stations. Gated on Nigredo (wisdom 0),
    // Journeyman's own tier.
    event.custom({
        type: 'magichem:sublimation',
        tier: 2,
        wisdom: 0,
        object: { item: 'reliquary:alkahestry_altar' },
        stages: [
            {
                experience: 20,
                components: [
                    { item: 'gtceu:lead_plate' },
                    { item: 'gtceu:veridium_dust' },
                    { item: 'kubejs:veridian_sigil' },
                    { item: 'kubejs:veridian_channeling_vessel' }
                ],
                materia: [
                    { item: 'magichem:admixture_potential', count: 50 },
                    { item: 'magichem:essentia_conceptual', count: 40 },
                    { item: 'magichem:essentia_nigredo', count: 30 }
                ]
            }
        ]
    })
    // Channeling Vessel: the ender-storage family (chest/tank/pouch) is literally item/fluid transport.
    event.shaped(
            Item.of('enderstorage:ender_chest', 1),
            [
                'VBA',
                'SCB',
                'ABA'
            ],
            {
                A: 'aether:ambrosium_shard',
                B: 'minecraft:obsidian',
                C: 'kubejs:zanite_laced_iron',
                V: 'kubejs:veridian_channeling_vessel',
                S: 'kubejs:veridian_sigil'
            }
        );
    event.shaped(
            Item.of('enderstorage:ender_tank', 1),
            [
                'VBA',
                'SCD',
                'ABA'
            ],
            {
                A: 'aether:ambrosium_shard',
                B: 'minecraft:obsidian',
                C: 'kubejs:zanite_laced_iron',
                D: 'minecraft:glass',
                V: 'kubejs:veridian_channeling_vessel',
                S: 'kubejs:veridian_sigil'
            }
        );
    event.shaped(
            Item.of('enderstorage:ender_pouch', 1),
            [
                'XBA',
                'ACA',
                'KAV'
            ],
            {
                A: 'irons_spellbooks:magic_cloth',
                C: 'enderstorage:ender_chest',
                B: 'kubejs:zanite_laced_iron',
                K: '#forge:tools/knives',
                V: 'kubejs:veridian_channeling_vessel',
                X: 'kubejs:veridian_sigil'
            }
        ).damageIngredient(Ingredient.of('#forge:tools/knives'));

    // Source Jar, Storage Lectern, Repository: all three craft Ars Nouveau blocks that no
    // longer exist once Ars is uninstalled. Nothing to port to; dropped outright.

    // Wizard Brain: a paranoia lantern's entire function is automated threat detection.
    event.shaped(
            Item.of('reliquary:lantern_of_paranoia', 1),
            [
                'FXD',
                'BCB',
                'WAD'
            ],
            {
                A: '#forge:plates/iron',
                B: 'minecraft:glass',
                C: 'gtceu:veridium_dust',
                D: '#forge:rods/silver',
                F: '#forge:tools/files',
                W: 'kubejs:veridian_wizard_brain',
                X: 'kubejs:veridian_sigil'
            }
        ).damageIngredient(Ingredient.of('#forge:tools/files'));

    // Source Gem chain (mana_dust -> pure_source_gem_dust -> rough_source_gem -> source_gem):
    // replaced entirely by the veridium -> Terrasteel chain below. gtceu:mana_plate's manual
    // hammer recipe off source_gem is dropped too -- mana already has GENERATE_PLATE, GT autogens
    // the plate from mana_gem directly, this hand-written recipe was always redundant.

    // raw_vinteum crushing dropped here: it was transmuting into mana_dust instead of
    // vinteum_dust, hijacking Occultism's crusher for something a crusher shouldn't do.
    // raw_vinteum -> vinteum_dust is GT's own macerator autogen now (vinteum has .ore()).
    // mana_dust (mana lost its ore vein, see gtceuMaterialRegistry.js) is sourced instead
    // via a Manaweaving Altar refine off vinteum_dust -- see apprentice.js.

    // Runic Altar is built here at Journeyman but stays mandatory through Sorcerer/Thaumaturge/
    // Sage (addRunicAltarRecipe consumers in sorcerer.js, thaumaturge.js, sage.js) -- one of the
    // pack's most load-bearing stations, and veridian_sigil had zero mandatory-path consumer.
    // One of 2 duplicated manasteel_bolt slots swapped for it, 2026-08-06.
    event.remove({ id: 'botania:runic_altar' })
    event.remove({ id: 'botania:gaia_ingot' })
    event.remove({ id: 'botania:runic_altar_alt' })
    event.shaped(
        Item.of('botania:runic_altar', 1),
        [
            'WAA',
            'DCX',
            'BAB'
        ],
        {
            A: 'botania:livingrock_bricks',
            B: 'botania:livingrock',
            C: 'botania:mana_diamond',
            D: 'gtceu:manasteel_bolt',
            X: 'kubejs:veridian_sigil',
            W: '#forge:tools/wrenches'
        }
    ).damageIngredient(Ingredient.of('#forge:tools/wrenches'))

    // --- Terrasteel: Journeyman signature material, veridium chain ---
    // Magic spine stays GT-free: Occultism crushing (same pattern as raw_mana above), Spirit
    // Altar, Alchemy Table -- no GT machine anywhere in this chain.
    event.custom({
        type: 'occultism:crushing',
        ingredient: { item: 'aether_redux:veridium_ingot' },
        result: { item: 'gtceu:veridium_dust' },
    }).id('kubejs:crushing/veridium_ingot_to_dust')

    addSpiritInfusion(event, {
        input: 'gtceu:veridium_dust',
        output: 'kubejs:verdant_charged_dust',
        spirits: [{ type: 'earthen', count: 4 }]
    })

    // magichem:essentia_verdant is a real base Essentia (confirmed in the jar lang file) --
    // literal thematic match for "verdant" grafted manasteel. Per user direction 2026-07-28:
    // make MagiChem load-bearing, not just a background essence tag.
    addAlchemyTableRecipe(event, {
        output: 'kubejs:verdant_grafted_manasteel',
        input: ['kubejs:verdant_charged_dust', 'botania:manasteel_block', 'magichem:essentia_verdant'],
        syphon: LP.JOURNEYMAN
    })

    addTerraPlateRecipe(event, {
        result: 'botania:terrasteel_ingot',
        mana: Agglomeration.JOURNEYMAN,
        ingredients: ['kubejs:verdant_grafted_manasteel']
    })

    // Terrasteel-Bound Gold Block: wraps the Magician Blood Orb's vanilla gold-block cost with
    // this tier's own signature material -- Blood Magic's orb chain was otherwise 100%
    // rush-alone-reachable, letting a player skip Journeyman/Initiate/Sorcerer entirely for
    // upgradeLevel 2 access. Journeyman tax for the Initiate/Sorcerer band's altar gate.
    event.shapeless('kubejs:terrasteel_bound_gold_block', ['#forge:storage_blocks/gold', 'gtceu:terrasteel_dust'])
    event.remove({ id: 'bloodmagic:altar/magicianbloodorb' })
    addBloodAltarRecipe(event, {
        input: 'kubejs:terrasteel_bound_gold_block',
        output: 'bloodmagic:magicianbloodorb',
        upgradeLevel: 2,
        syphon: 25000,
        consumptionRate: 20,
        drainRate: 20
    })

    // Runeforge: two parallel vanilla builds existed (mna:runeforge, mna:runeforge_alt), both
    // 100% MNA/vanilla -- taxing only one would leave the other as a free bypass. Both removed,
    // replaced with a single recipe carrying this tier's own signature material in the pattern's
    // one empty slot.
    event.remove({ id: 'mna:runeforge' })
    event.remove({ id: 'mna:runeforge_alt' })
    event.shaped('mna:runeforge', [
        'TGT',
        'RSR',
        'ASA'
    ], {
        S: 'mna:decoration/arcane_sandstone',
        A: 'mna:decoration/arcane_stone',
        T: 'mna:transmuted_silver',
        R: '#mna:stone_runes',
        G: 'botania:terrasteel_ingot'
    })

    // Shortcut (Initiate+): Initiate's Manaweaving Altar t2 fabricates the pre-terra-plate feed
    // directly, batch output. Pattern tier is the gate -- no stone exists at Initiate yet.
    addMnaManaweavingRecipe(event, {
        output: { item: 'kubejs:verdant_grafted_manasteel', count: 2 },
        items: ['aether_redux:veridium_ingot', 'botania:manasteel_block'],
        patterns: ['mna:diamond', 'mna:knot'],
        tier: 2
    })

    event.custom({
        "type": "aether:enchanting",
        "ingredient": { "item": "aether:zanite_gemstone" },
        "result": { "item": "kubejs:enchanted_zanite_gem" },
        "cookingtime": 250,
        "experience": 0.5
    })

    addSpiritInfusion(event, {
        input: 'kubejs:enchanted_zanite_gem',
        output: 'kubejs:resonant_zanite_crystal',
        extraItems: [
            { item: 'kubejs:verdant_charged_dust', count: 2 },
            { item: 'occultism:spirit_attuned_crystal' }
        ],
        spirits: [{ type: 'arcane', count: 2 }, { type: 'aerial' }]
    })

    event.custom({
        "type": "hexerei:mixingcauldron",
        "liquid": { "fluid": "minecraft:water" },
        "ingredients": [
            { "item": "aether:ambrosium_shard" },
            { "item": "minecraft:glowstone_dust" },
            { "item": "aether:ambrosium_shard" },
            { "item": "minecraft:glowstone_dust" },
            { "item": "aether:ambrosium_shard" },
            { "item": "minecraft:glowstone_dust" },
            { "item": "aether:ambrosium_shard" },
            { "item": "minecraft:glowstone_dust" }
        ],
        "output": { "item": "kubejs:sanctified_ambrosium_bloom" },
        "liquidOutput": { "fluid": "minecraft:water" },
        "fluidLevelsConsumed": 1000,
        "heatRequirement": "heated"
    })

    // Luminessence revival (2026-07-29): the item is still a real registered GT material
    // (gtceuMaterialRegistry.js, dust-only), it just lost its old glowstone-chain producer when
    // Ars was removed. Re-themed off MagiChem's admixture of light rather than restoring the
    // dead glowstone recipe -- magichem:admixture_light is real (Alembic -> Fixation Separation),
    // available by MNA tier 2 (~Journeyman per mods/mna.md's progression fit), matching where
    // this tier's other MagiChem-load-bearing swaps already live. Spirit Altar, not a plain craft:
    // sacred (divine radiance) + aerial (open sky/daylight) spirits bind the light into the dust.
    addSpiritInfusion(event, {
        input: 'magichem:admixture_light',
        output: 'gtceu:luminessence_dust',
        extraItems: [{ item: 'minecraft:glowstone_dust' }],
        spirits: [{ type: 'sacred' }, { type: 'aerial' }]
    })

    addSpiritInfusion(event, {
        input: 'kubejs:resonant_zanite_crystal',
        output: { item: 'irons_spellbooks:cinder_essence', count: 3 },
        extraItems: [{ tag: 'kubejs:fire_essences', count: 2 }],
        spirits: [{ type: 'infernal', count: 2 }, { type: 'arcane' }]
    })

    addSpiritInfusion(event, {
        input: 'kubejs:resonant_zanite_crystal',
        output: { item: 'irons_spellbooks:arcane_ingot', count: 4 },
        extraItems: [{ tag: 'kubejs:air_essences', count: 2 }],
        spirits: [{ type: 'arcane', count: 2 }, { type: 'aerial' }]
    })

    // --- Microcrafting: Journeyman circuit + components ---
    // Circuit built through 2 real handlers: Spirit Infusion -> Alchemy Table.
    addSpiritInfusion(event, {
        input: 'botania:terrasteel_ingot',
        output: 'kubejs:veridian_sigil_blank',
        spirits: [{ type: 'earthen', count: 2 }]
    })

    addAlchemyTableRecipe(event, {
        output: 'kubejs:veridian_sigil',
        input: ['kubejs:veridian_sigil_blank', 'gtceu:veridium_dust', 'irons_spellbooks:arcane_ingot'],
        syphon: LP.JOURNEYMAN,
        ticks: 200
    })

    // Wizard Brain: Terra Plate (3rd distinct handler for this tier's item set).
    // Grammar: thought vessel (spell book) + animating agent (spirit attuned crystal).
    addTerraPlateRecipe(event, {
        result: 'kubejs:veridian_wizard_brain',
        mana: Agglomeration.JOURNEYMAN,
        ingredients: ['botania:terrasteel_ingot', 'irons_spellbooks:iron_spell_book', 'occultism:spirit_attuned_crystal']
    })
    addMnaArcaneFurnaceRecipe(event, {
        input: 'kubejs:verdant_charged_dust',
        output: 'kubejs:veridian_motive_core',
        burnTime: 400,
        tier: 2
    })

    // Channeling Vessel: enchanted at the Aether Altar, the way zanite itself is.
    event.custom({
        "type": "aether:enchanting",
        "ingredient": { "item": "botania:mana_bottle" },
        "result": { "item": "kubejs:veridian_channeling_vessel" },
        "cookingtime": 400,
        "experience": 1.0
    })

    // Ward Lattice: runic work -- the altar binds the protection into the plate directly.
    addRunicAltarRecipe(event, {
        output: { item: 'kubejs:veridian_ward_lattice' },
        mana: RunicAltar.JOURNEYMAN,
        ingredients: [
            { item: 'gtceu:terrasteel_plate' },
            { item: 'gtceu:terrasteel_plate' },
            { item: 'irons_spellbooks:protection_rune' },
            { item: 'minecraft:crying_obsidian' }
        ]
    })

    // Wisdom Stone: Nigredo (Ritual of the Balanced Scales, Alchemical Nexus). Re-themed onto
    // Journeyman's own material line -- components swapped from MagiChem's generic endgame items,
    // materia kept verbatim from the mod's own nigredo recipe (magichem-0.5.2.jar
    // data/magichem/recipes/alchemical_sublimation/magichem/wisdom_stone_nigredo.json).
    // Jar's own recipe stays otherwise loaded alongside ours (custom serializer, not overwritten
    // by a new object -> id: removal required).
    event.remove({ id: 'magichem:alchemical_sublimation/magichem/wisdom_stone_nigredo' })
    event.custom({
        type: 'magichem:sublimation',
        tier: 2,
        wisdom: 0,
        object: { item: 'magichem:wisdom_stone_nigredo' },
        stages: [
            {
                experience: 45,
                components: [
                    { item: 'gtceu:veridium_dust' },
                    { item: 'kubejs:resonant_zanite_crystal' },
                    { item: 'kubejs:veridian_sigil' }
                ],
                materia: [
                    { item: 'magichem:admixture_potential', count: 70 },
                    { item: 'magichem:admixture_dust', count: 30 },
                    { item: 'magichem:essentia_conceptual', count: 55 },
                    { item: 'magichem:essentia_nigredo', count: 50 }
                ]
            },
            {
                experience: 60,
                components: [
                    { item: 'magichem:salt_of_soot' },
                    { item: 'magichem:mote_achromatic' },
                    { item: 'magichem:salt_of_bone' }
                ],
                materia: [
                    { item: 'magichem:admixture_death', count: 30 },
                    { item: 'magichem:admixture_destruction', count: 30 },
                    { item: 'magichem:admixture_disaster', count: 30 },
                    { item: 'magichem:admixture_violence', count: 30 }
                ]
            },
            {
                experience: 75,
                components: [
                    { item: 'kubejs:enchanted_zanite_gem' },
                    { item: 'magichem:inert_wisdom_stone' },
                    { item: 'kubejs:veridian_wizard_brain' }
                ],
                materia: [
                    { item: 'magichem:admixture_change', count: 55 },
                    { item: 'magichem:admixture_erosion', count: 30 },
                    { item: 'magichem:admixture_realm', count: 30 },
                    { item: 'magichem:essentia_nigredo', count: 40 }
                ]
            }
        ]
    })
});
