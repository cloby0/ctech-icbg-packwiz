GTCEuStartupEvents.registry('gtceu:element', event => {
    event.create('mithril')
        .protons(28)
        .neutrons(177)
        .halfLifeSeconds(-1)
        .decayTo(null)
        .symbol('Lc')
        .isIsotope(false)

    event.create('desh')
        .protons(32)
        .neutrons(182)
        .halfLifeSeconds(-1)
        .decayTo(null)
        .symbol('Sl')
        .isIsotope(false)

    event.create('ostrum')
        .protons(33)
        .neutrons(183)
        .halfLifeSeconds(-1)
        .decayTo(null)
        .symbol('Py')
        .isIsotope(false)

    event.create('calorite')
        .protons(34)
        .neutrons(184)
        .halfLifeSeconds(-1)
        .decayTo(null)
        .symbol('Ig')
        .isIsotope(false)

    event.create('mana')
        .protons(36)
        .neutrons(142)
        .halfLifeSeconds(-1)
        .decayTo(null)
        .symbol('ᛗ')
        .isIsotope(false)

    event.create('prima_materia')
        .protons(38)
        .neutrons(148)
        .halfLifeSeconds(-1)
        .decayTo(null)
        .symbol('Hy')
        .isIsotope(false)

    event.create('ambrosium')
        .protons(40)
        .neutrons(155)
        .halfLifeSeconds(-1)
        .decayTo(null)
        .symbol('Ae')
        .isIsotope(false)

    event.create('gravitite')
        .protons(42)
        .neutrons(160)
        .halfLifeSeconds(-1)
        .decayTo(null)
        .symbol('Iv')
        .isIsotope(false)

    event.create('cumium')
        .protons(128)
        .neutrons(382)
        .halfLifeSeconds(-1)
        .decayTo(null)
        .symbol('Ct')
        .isIsotope(false)

    event.create('draconium')
        .protons(56)
        .neutrons(160)
        .halfLifeSeconds(-1)
        .decayTo(null)
        .symbol('Dc')
        .isIsotope(false)

    event.create('awakened_draconium')
        .protons(56)
        .neutrons(192)
        .halfLifeSeconds(-1)
        .decayTo(null)
        .symbol('Dc')
        .isIsotope(true)

    event.create('veridium')
        .protons(44)
        .neutrons(165)
        .halfLifeSeconds(-1)
        .decayTo(null)
        .symbol('Vr')
        .isIsotope(false)

    event.create('iesnium')
        .protons(59)
        .neutrons(150)
        .halfLifeSeconds(-1)
        .decayTo(null)
        .symbol('Ie')
        .isIsotope(false)

    event.create('gaia_spirit')
        .protons(48)
        .neutrons(180)
        .halfLifeSeconds(-1)
        .decayTo(null)
        .symbol('Gs')
        .isIsotope(false)

    event.create('chaos_crystal')
        .protons(108)
        .neutrons(222)
        .halfLifeSeconds(-1)
        .decayTo(null)
        .symbol('Cx')
        .isIsotope(false)

    event.create('voidmetal')
        .protons(46)
        .neutrons(186)
        .halfLifeSeconds(-1)
        .decayTo(null)
        .symbol('Vm')
        .isIsotope(false)

    event.create('solarmetal')
        .protons(47)
        .neutrons(188)
        .halfLifeSeconds(-1)
        .decayTo(null)
        .symbol('Sy')
        .isIsotope(false)

    event.create('arcmetal')
        .protons(49)
        .neutrons(192)
        .halfLifeSeconds(-1)
        .decayTo(null)
        .symbol('Az')
        .isIsotope(false)

    // MysticalAgriculture essences: isotopes of mana (same protons/symbol, heavier). inferium is base,
    // higher tiers are denser compressions of it. If GT rejects duplicate symbols, give distinct symbols.
    event.create('inferium')  .protons(36).neutrons(144).halfLifeSeconds(-1).decayTo(null).symbol('ᛗ').isIsotope(true)
    event.create('prudentium').protons(36).neutrons(148).halfLifeSeconds(-1).decayTo(null).symbol('ᛗ').isIsotope(true)
    event.create('tertium')   .protons(36).neutrons(152).halfLifeSeconds(-1).decayTo(null).symbol('ᛗ').isIsotope(true)
    event.create('imperium')  .protons(36).neutrons(156).halfLifeSeconds(-1).decayTo(null).symbol('ᛗ').isIsotope(true)
    event.create('supremium') .protons(36).neutrons(160).halfLifeSeconds(-1).decayTo(null).symbol('ᛗ').isIsotope(true)

    // life_essence: another isotope of mana, blood-red.
    event.create('life_essence').protons(36).neutrons(164).halfLifeSeconds(-1).decayTo(null).symbol('ᛗ').isIsotope(true)

    // prosperity: its own element (the growth crystal that alloys with essences into the -ites).
    event.create('prosperity').protons(61).neutrons(84).halfLifeSeconds(-1).decayTo(null).symbol('Pz').isIsotope(false)

    // The four classical elements: the base MysticalAgriculture essences. Symbols are the alchemical
    // Unicode glyphs (won't render in-game's default font -- fine, cosmetic in JEI/tooltips only).
    event.create('fire') .protons(130).neutrons(130).halfLifeSeconds(-1).decayTo(null).symbol('🜂').isIsotope(false) // U+1F702
    event.create('water').protons(131).neutrons(131).halfLifeSeconds(-1).decayTo(null).symbol('🜄').isIsotope(false) // U+1F704
    event.create('earth').protons(132).neutrons(132).halfLifeSeconds(-1).decayTo(null).symbol('🜃').isIsotope(false) // U+1F703
    event.create('air')  .protons(133).neutrons(133).halfLifeSeconds(-1).decayTo(null).symbol('🜁').isIsotope(false) // U+1F701

})

GTCEuStartupEvents.registry('gtceu:material', event => {

    const MSW = Java.loadClass('com.gregtechceu.gtceu.integration.kjs.helpers.MaterialStackWrapper')
    function c(str) { return MSW.fromString(str) }

    event.create('ambrosium')
        .gem()
        .element('ambrosium')
        .color(0xf1ef5f)
        .iconSet(GTMaterialIconSet.RUBY)
        .flags(
            GTMaterialFlags.GENERATE_LENS
        )
        .ore()
        .addOreByproducts('gold', 'sulfur')
        .washedIn('gtceu:mercury')

    event.create('zanite')
        .gem()
        .ore()
        .color(0x9455F2)
        .secondaryColor(0x431686)
        .iconSet(GTMaterialIconSet.EMERALD)
        .components('1x silicon', '2x oxygen', '1x vanadium')
        .flags(
            GTMaterialFlags.GENERATE_LENS,
            GTMaterialFlags.GENERATE_ROD,
            GTMaterialFlags.GENERATE_BOLT_SCREW,
            GTMaterialFlags.DECOMPOSITION_BY_ELECTROLYZING
        )
        .addOreByproducts('silicon', 'vanadium', 'mana')
        .washedIn('gtceu:mercury')

    event.create('mithril')
        .ingot()
        .ore()
        .element('mithril')
        .color(0xc7ebec)
        .secondaryColor(0x486b82)
        .iconSet(GTMaterialIconSet.SHINY)
        .flags(GTMaterialFlags.GENERATE_PLATE)
        .addOreByproducts('silver', 'platinum')
        .washedIn('gtceu:mercury')
        .separatedInto('platinum', 'palladium')

    event.create('gravitite')
        .ingot()
        .ore()
        .element('gravitite')
        .color(0xE072D7)
        .secondaryColor(0x871F7E)
        .iconSet(GTMaterialIconSet.METALLIC)
        .flags(
            GTMaterialFlags.GENERATE_PLATE,
            GTMaterialFlags.GENERATE_ROD,
            GTMaterialFlags.GENERATE_SPRING,
            GTMaterialFlags.GENERATE_BOLT_SCREW
        )
        .addOreByproducts('lithium', 'chromium')
        .washedIn('gtceu:sodium_persulfate')
        .separatedInto('chromium', 'manganese')

    event.create('skyjade')
        .gem()
        .ore()
        .color(0xCFF095)
        .secondaryColor(0x7d9f66)
        .iconSet(GTMaterialIconSet.DIAMOND)
        .components('1x silicon', '2x oxygen', '1x beryllium', '1x calcium')
        .flags(
            GTMaterialFlags.DECOMPOSITION_BY_ELECTROLYZING
        )
        .addOreByproducts('silicon', 'calcium', 'beryllium')
        .washedIn('gtceu:mercury')

    event.create('veridium')
        .ingot()
        .ore()
        .element('veridium')
        .color(0x446AAC)
        .secondaryColor(0x25366A)
        .iconSet(GTMaterialIconSet.METALLIC)
        .addOreByproducts('cobalt', 'chromium')
        .washedIn('gtceu:mercury')
        .separatedInto('cobalt', 'chromium')

    // Occultism's signature metal. Its own Otherworld-dimension ore is the only vein (no GT worldgen
    // vein registered here) -- .ore() just enables macerator/processing recognition via the existing
    // forge:ores/iesnium tag. All item forms are setIgnored to occultism's own items (gtceuMaterialModification.js).
    event.create('iesnium')
        .ingot()
        .ore()
        .element('iesnium')
        .color(0x8a9aa3)
        .secondaryColor(0x4a5259)
        .iconSet(GTMaterialIconSet.METALLIC)

    event.create('luminessence')
        .dust()
        .color(0xfafa5d)
        .iconSet(GTMaterialIconSet.SHINY)
        .components(c('2x gold'), c('1x redstone'), c('1x mana'))
        .flags(GTMaterialFlags.DECOMPOSITION_BY_CENTRIFUGING)

    event.create('mana')
        .gem()
        .ore()
        .element('mana')
        .color(0xAE44E2)
        .secondaryColor(0xE244C8)
        .iconSet(GTMaterialIconSet.QUARTZ)
        .flags(
            GTMaterialFlags.GENERATE_LENS,
            GTMaterialFlags.NO_ORE_SMELTING,
            GTMaterialFlags.GENERATE_ROD,
            GTMaterialFlags.GENERATE_PLATE
        )
        .addOreByproducts('amethyst', 'lapis', 'luminessence')
        .washedIn('gtceu:mercury')

    event.create('holy_silver')
        .ingot()
        .color(0xe7f79e)
        .iconSet(GTMaterialIconSet.BRIGHT)
        .components(c('1x silver'), c('2x luminessence'), c('1x ambrosium'))
        .flags(
            GTMaterialFlags.GENERATE_PLATE,
            GTMaterialFlags.GENERATE_ROD,
            GTMaterialFlags.GENERATE_BOLT_SCREW,
            GTMaterialFlags.GENERATE_LONG_ROD,
            GTMaterialFlags.GENERATE_FOIL,
            GTMaterialFlags.DECOMPOSITION_BY_CENTRIFUGING
        )

    event.create('prima_materia')
        .ingot()
        .element('prima_materia')
        .color(0xAEF76D)
        .iconSet(GTMaterialIconSet.SHINY)
        .flags(
            GTMaterialFlags.GENERATE_PLATE,
            GTMaterialFlags.GENERATE_ROD,
            GTMaterialFlags.GENERATE_BOLT_SCREW,
            GTMaterialFlags.GENERATE_LONG_ROD
        )

    event.create('manasteel')
        .color(0xb5fffc)
        .secondaryColor(0x1d1eb0)
        .ingot()
        .components(c('1x prima_materia'), c('2x mana'))
        .flags(
            GTMaterialFlags.GENERATE_PLATE,
            GTMaterialFlags.GENERATE_ROD,
            GTMaterialFlags.GENERATE_BOLT_SCREW,
            GTMaterialFlags.GENERATE_LONG_ROD,
            GTMaterialFlags.GENERATE_FRAME,
            GTMaterialFlags.DECOMPOSITION_BY_ELECTROLYZING
        )

    event.create('terrasteel')
        .color(0x55f609)
        .ingot()
        .iconSet(GTMaterialIconSet.SHINY)
        .components(c('3x manasteel'), c('2x mana'))
        .flags(
            GTMaterialFlags.GENERATE_PLATE,
            GTMaterialFlags.GENERATE_ROD,
            GTMaterialFlags.GENERATE_BOLT_SCREW,
            GTMaterialFlags.GENERATE_LONG_ROD,
            GTMaterialFlags.DECOMPOSITION_BY_CENTRIFUGING
        )

    event.create('elementium')
        .color(0xf472c6)
        .iconSet(GTMaterialIconSet.SHINY)
        .ingot()
        .components(c('2x terrasteel'), c('1x luminessence'))
        .flags(
            GTMaterialFlags.GENERATE_PLATE,
            GTMaterialFlags.GENERATE_ROD,
            GTMaterialFlags.GENERATE_BOLT_SCREW,
            GTMaterialFlags.GENERATE_LONG_ROD,
            GTMaterialFlags.DECOMPOSITION_BY_CENTRIFUGING
        )

    event.create('gaia_spirit')
        .color(0xf472c6)
        .iconSet(GTMaterialIconSet.SHINY)
        .element('gaia_spirit')
        .ingot()
        .flags(
            GTMaterialFlags.GENERATE_PLATE,
            GTMaterialFlags.GENERATE_ROD,
            GTMaterialFlags.GENERATE_BOLT_SCREW,
            GTMaterialFlags.GENERATE_LONG_ROD
        )

    event.create('abstract_metal')
        .ingot()
        .color(0xA2A6A2)
        .secondaryColor(0x505350)
        .iconSet(GTMaterialIconSet.METALLIC)

    event.create('concepts')
        .fluid()
        .color(0x500bbf)
        .flags(GTMaterialFlags.STICKY)
        .flags(GTMaterialFlags.PHOSPHORESCENT)

    event.create('metal_form')
        .fluid()
        .color(0xA2A6A2)
        .flags(GTMaterialFlags.STICKY)
        .flags(GTMaterialFlags.PHOSPHORESCENT)

    event.create('sky_steel')
        .ingot()
        .fluid()
        .color(0x2d2d2d)
        .secondaryColor(0x161616)
        .blastTemp(3600, "mid", GTValues.VA[GTValues.EV], 1200)
        .iconSet(GTMaterialIconSet.SHINY)
        .flags(
            GTMaterialFlags.GENERATE_PLATE,
            GTMaterialFlags.GENERATE_ROD,
            GTMaterialFlags.GENERATE_BOLT_SCREW,
            GTMaterialFlags.GENERATE_LONG_ROD,
            GTMaterialFlags.GENERATE_FRAME,
        )

    event.create("lumium")
        .ingot()
        .fluid()
        .color(0xf6ff99).secondaryColor(0xff7400)
        .blastTemp(4500, "mid", GTValues.VA[GTValues.EV], 1000)
        .components('4x tin', '2x aluminium', '2x glowstone')
        .flags(
            GTMaterialFlags.GENERATE_PLATE,
            GTMaterialFlags.GENERATE_GEAR,
            GTMaterialFlags.GENERATE_FINE_WIRE,
            GTMaterialFlags.DECOMPOSITION_BY_CENTRIFUGING
        )

    event.create("signalum")
        .ingot()
        .fluid()
        .color(0xff6b0f).secondaryColor(0xc32e00)
        .blastTemp(4500, "mid", GTValues.VA[GTValues.EV], 1000)
        .components('4x copper', '2x chromium', '2x redstone')
        .flags(
            GTMaterialFlags.GENERATE_PLATE,
            GTMaterialFlags.GENERATE_ROD,
            GTMaterialFlags.GENERATE_GEAR,
            GTMaterialFlags.DECOMPOSITION_BY_CENTRIFUGING
        )

    event.create("enderium")
        .ingot().fluid()
        .color(0x1f6b62).secondaryColor(0x16455f)
        .blastTemp(4500, "mid", GTValues.VA[GTValues.EV], 1000)
        .components('4x titanium', '2x platinum', '2x ender_pearl')
        .flags(
            GTMaterialFlags.GENERATE_PLATE,
            GTMaterialFlags.GENERATE_ROD,
            GTMaterialFlags.GENERATE_FINE_WIRE,
            GTMaterialFlags.DECOMPOSITION_BY_CENTRIFUGING
        )

    event.create('desh')
        .ingot()
        .fluid()
        .ore()
        .color(0xd38b4c).secondaryColor(0xb05a3c)
        .blastTemp(2700, "low", GTValues.VA[GTValues.HV], 1000)
        .element('desh')
        .iconSet(GTMaterialIconSet.METALLIC)
        .flags(
            GTMaterialFlags.GENERATE_PLATE,
            GTMaterialFlags.GENERATE_ROD,
            GTMaterialFlags.GENERATE_FINE_WIRE,
            GTMaterialFlags.NO_SMELTING,
            GTMaterialFlags.GENERATE_LONG_ROD
        )
        .addOreByproducts('iron', 'sulfur', 'nickel')
        .washedIn('gtceu:mercury')
        .separatedInto('iron', 'nickel')

    event.create('ostrum')
        .ingot()
        .fluid()
        .ore()
        .color(0xE5939B).secondaryColor(0x2F0425)
        .blastTemp(3600, "mid", GTValues.VA[GTValues.EV], 1000)
        .element('ostrum')
        .iconSet(GTMaterialIconSet.METALLIC)
        .flags(
            GTMaterialFlags.GENERATE_PLATE,
            GTMaterialFlags.GENERATE_ROD,
            GTMaterialFlags.GENERATE_FINE_WIRE,
            GTMaterialFlags.NO_SMELTING
        )
        .addOreByproducts('sulfur', 'copper', 'lead')
        .washedIn('gtceu:sulfuric_acid')
        .separatedInto('copper', 'lead')

    event.create('calorite')
        .ingot()
        .fluid()
        .ore()
        .color(0xE65757).secondaryColor(0x2F0506)
        .blastTemp(4500, "high", GTValues.VA[GTValues.IV], 1000)
        .element('calorite')
        .iconSet(GTMaterialIconSet.METALLIC)
        .flags(
            GTMaterialFlags.GENERATE_PLATE,
            GTMaterialFlags.GENERATE_ROD,
            GTMaterialFlags.GENERATE_LONG_ROD,
            GTMaterialFlags.GENERATE_FINE_WIRE,
            GTMaterialFlags.NO_SMELTING
        )
        .addOreByproducts('chromium', 'vanadium', 'magnesium')
        .washedIn('gtceu:mercury')
        .separatedInto('chromium', 'vanadium')

    event.create('lunar_rocket_alloy')
        .ingot()
        .fluid()
        .color(0x8BAFD6).secondaryColor(0x4A6E8C)
        .blastTemp(2700, "low", GTValues.VA[GTValues.HV], 1000)
        .components('4x ultimet', '2x aluminium', '1x chromium')
        .iconSet(GTMaterialIconSet.SHINY)
        .flags(
            GTMaterialFlags.GENERATE_PLATE,
            GTMaterialFlags.GENERATE_ROD,
            GTMaterialFlags.GENERATE_LONG_ROD
        )

    event.create('nethersteel')
        .ingot()
        .fluid()
        .color(0x4A2A24).secondaryColor(0x1E1010)
        .blastTemp(3000, "low", GTValues.VA[GTValues.HV], 800)
        .components('1x netherite', '8x steel')
        .iconSet(GTMaterialIconSet.DULL)

    event.create('void_stellite')
        .ingot()
        .color(0x8B7FC8)
        .secondaryColor(0x3A2A7A)
        .iconSet(GTMaterialIconSet.SHINY)
        .blastTemp(9000, "high", GTValues.VA[GTValues.UV], 2400)
        .flags(
            GTMaterialFlags.NO_SMASHING
        )

    event.create('cum')
        .fluid()
        .color(0xFCFCEC)

    event.create('cumium')
        .ingot()
        .fluid()
        .element('cumium')
        .color(0xCFD2D5)
        .secondaryColor(0x8FB1AF)
        .blastTemp(14400, "high", GTValues.VA[GTValues.UEV], 3600)
        .iconSet(GTMaterialIconSet.BRIGHT)
        .cableProperties(GTValues.VA[GTValues.UIV], 64, 0, true)
        .fluidPipeProperties(20000, 40000, true)
        .flags(
            GTMaterialFlags.GENERATE_FOIL,
            GTMaterialFlags.GENERATE_FINE_WIRE,
            GTMaterialFlags.GENERATE_PLATE,
            GTMaterialFlags.GENERATE_ROD,
            GTMaterialFlags.GENERATE_BOLT_SCREW,
            GTMaterialFlags.GENERATE_LONG_ROD,
            GTMaterialFlags.GENERATE_RING,
            GTMaterialFlags.GENERATE_ROTOR
        )

    event.create('stellar_plasma')
        .plasma()
        .color(0xFFCF40)

    event.create('celestial_concentrate')
        .fluid()
        .color(0x8844AA)

    event.create('refined_stellar_plasma')
        .fluid()
        .color(0xFFE8A0)

    event.create('phlogiston')
        .fluid()
        .color(0xFF5500)

    event.create('phlogisticated_fuel')
        .fluid()
        .color(0xFF6B1A)

    event.create('infernal_diesel')
        .fluid()
        .color(0xCC1500)

    event.create('faefire_aerosol')
        .fluid()
        .color(0x66FFBB)

    event.create('faefire_phlog_fuel')
        .fluid()
        .color(0xFFEE44)

    event.create('aqua_vitae')
        .fluid()
        .color(0xAAD4F0)

    event.create('mineral_ichor')
        .fluid()
        .color(0xB08030)

    event.create('pneuma')
        .fluid()
        .color(0xD8F0FF)

    event.create('aether_air')
        .fluid()
        .color(0xA8D4F5)

    event.create('liquid_aether_air')
        .fluid()
        .color(0x6AABDF)

    event.create('glacio_air')
        .fluid()
        .color(0xB8E8F0)

    event.create('liquid_glacio_air')
        .fluid()
        .color(0x7AC8E0)

    event.create('desh_sulfate_slurry')
        .fluid()
        .color(0xC49A2C)

    event.create('desh_carbonyl')
        .fluid()
        .color(0xc49060)

    event.create('moon_cheese')
        .ingot()
        .ore()
        .color(0xf5e870)
        .secondaryColor(0xc8b842)
        .iconSet(GTMaterialIconSet.DULL)
        .addOreByproducts('sodium', 'calcium')

    event.create('lead_sourcite')
        .ingot()
        .fluid()
        .color(0x9E7FC0)
        .secondaryColor(0x5C4A80)
        .iconSet(GTMaterialIconSet.SHINY)
        .components(c('2x lead'), c('1x mana'))
        .cableProperties(GTValues.VA[GTValues.MV], 1, 0, true)
        .flags(
            GTMaterialFlags.GENERATE_FOIL,
            GTMaterialFlags.GENERATE_FINE_WIRE,
            GTMaterialFlags.DECOMPOSITION_BY_ELECTROLYZING
        )

    event.create('hallowed_nickelate')
        .ingot()
        .fluid()
        .color(0xCCEDAA)
        .secondaryColor(0x8AAA70)
        .iconSet(GTMaterialIconSet.SHINY)
        .blastTemp(2700, "low", GTValues.VA[GTValues.HV], 1200)
        .components(c('1x holy_silver'), c('2x nickel'))
        .cableProperties(GTValues.VA[GTValues.HV], 2, 0, true)
        .flags(
            GTMaterialFlags.GENERATE_FOIL,
            GTMaterialFlags.GENERATE_FINE_WIRE,
            GTMaterialFlags.DECOMPOSITION_BY_ELECTROLYZING
        )

    event.create('prima_ruridite')
        .ingot()
        .fluid()
        .color(0x90C868)
        .secondaryColor(0x4A7830)
        .iconSet(GTMaterialIconSet.SHINY)
        .blastTemp(3600, "mid", GTValues.VA[GTValues.EV], 1400)
        .components(c('1x prima_materia'), c('2x ruridit'))
        .cableProperties(GTValues.VA[GTValues.EV], 4, 0, true)
        .flags(
            GTMaterialFlags.GENERATE_FOIL,
            GTMaterialFlags.GENERATE_FINE_WIRE,
            GTMaterialFlags.DECOMPOSITION_BY_ELECTROLYZING
        )

    event.create('hssg_manaferrite')
        .ingot()
        .fluid()
        .color(0x4D9AC0)
        .secondaryColor(0x255472)
        .iconSet(GTMaterialIconSet.SHINY)
        .blastTemp(4500, "high", GTValues.VA[GTValues.IV], 1600)
        .components(c('3x manasteel'), c('1x hssg'))
        .cableProperties(GTValues.VA[GTValues.IV], 4, 0, true)
        .flags(
            GTMaterialFlags.GENERATE_FOIL,
            GTMaterialFlags.GENERATE_FINE_WIRE,
            GTMaterialFlags.DECOMPOSITION_BY_ELECTROLYZING
        )

    event.create('terranaquadite')
        .ingot()
        .fluid()
        .color(0x3EC84A)
        .secondaryColor(0x1A5C20)
        .iconSet(GTMaterialIconSet.BRIGHT)
        .blastTemp(6000, "high", GTValues.VA[GTValues.LuV], 1800)
        .components(c('2x terrasteel'), c('1x enriched_naquadah'))
        .cableProperties(GTValues.VA[GTValues.LuV], 8, 0, true)
        .flags(
            GTMaterialFlags.GENERATE_FOIL,
            GTMaterialFlags.GENERATE_FINE_WIRE,
            GTMaterialFlags.DECOMPOSITION_BY_ELECTROLYZING
        )

    event.create('elven_americate')
        .ingot()
        .fluid()
        .color(0xCC5CB8)
        .secondaryColor(0x7A3070)
        .iconSet(GTMaterialIconSet.BRIGHT)
        .blastTemp(7500, "high", GTValues.VA[GTValues.ZPM], 2000)
        .components(c('2x elementium'), c('1x americium'))
        .cableProperties(GTValues.VA[GTValues.ZPM], 8, 0, true)
        .flags(
            GTMaterialFlags.GENERATE_FOIL,
            GTMaterialFlags.GENERATE_FINE_WIRE,
            GTMaterialFlags.DECOMPOSITION_BY_CENTRIFUGING
        )

    event.create('boundless_naquadrite')
        .ingot()
        .fluid()
        .color(0xA845A8)
        .secondaryColor(0x5A1880)
        .iconSet(GTMaterialIconSet.BRIGHT)
        .blastTemp(9000, "high", GTValues.VA[GTValues.UV], 2400)
        .components(c('1x gaia_spirit'), c('2x naquadria'))
        .cableProperties(GTValues.VA[GTValues.UV], 16, 0, true)
        .flags(
            GTMaterialFlags.GENERATE_FOIL,
            GTMaterialFlags.GENERATE_FINE_WIRE,
            GTMaterialFlags.DECOMPOSITION_BY_CENTRIFUGING
        )


    event.create('consecrated_chromite')
        .ingot()
        .fluid()
        .color(0xD8CCA0)
        .secondaryColor(0x8C7840)
        .iconSet(GTMaterialIconSet.SHINY)
        .blastTemp(2800, "low", GTValues.VA[GTValues.HV], 1200)
        .components(c('2x holy_silver'), c('1x chromium'))
        .flags(
            GTMaterialFlags.GENERATE_PLATE,
            GTMaterialFlags.GENERATE_ROD,
            GTMaterialFlags.GENERATE_BOLT_SCREW,
            GTMaterialFlags.GENERATE_FRAME
        )

    event.create('ambrotungstite')
        .ingot()
        .fluid()
        .color(0xB8B0C0)
        .secondaryColor(0x5A5260)
        .iconSet(GTMaterialIconSet.SHINY)
        .blastTemp(3200, "mid", GTValues.VA[GTValues.HV], 1300)
        .components(c('1x holy_silver'), c('2x tungsten'))
        .flags(
            GTMaterialFlags.GENERATE_PLATE,
            GTMaterialFlags.GENERATE_ROD,
            GTMaterialFlags.GENERATE_BOLT_SCREW,
            GTMaterialFlags.GENERATE_FRAME
        )

    event.create('manaplatinite')
        .ingot()
        .fluid()
        .color(0xC8D8E8)
        .secondaryColor(0x7890A8)
        .iconSet(GTMaterialIconSet.SHINY)
        .blastTemp(4200, "mid", GTValues.VA[GTValues.IV], 1500)
        .components(c('2x manasteel'), c('1x platinum'))
        .flags(
            GTMaterialFlags.GENERATE_PLATE,
            GTMaterialFlags.GENERATE_ROD,
            GTMaterialFlags.GENERATE_BOLT_SCREW,
            GTMaterialFlags.GENERATE_FRAME
        )

    event.create('terra_iridite')
        .ingot()
        .fluid()
        .color(0x6EC4A0)
        .secondaryColor(0x3A7862)
        .iconSet(GTMaterialIconSet.SHINY)
        .blastTemp(5200, "high", GTValues.VA[GTValues.LuV], 1600)
        .components(c('2x terrasteel'), c('1x iridium'))
        .flags(
            GTMaterialFlags.GENERATE_PLATE,
            GTMaterialFlags.GENERATE_ROD,
            GTMaterialFlags.GENERATE_BOLT_SCREW,
            GTMaterialFlags.GENERATE_FRAME
        )

    event.create('cemented_carbide')
        .ingot()
        .fluid()
        .color(0x7A7A6E)
        .secondaryColor(0x4A4A40)
        .blastTemp(2900, "low", GTValues.VA[GTValues.HV], 1000)
        .components('3x tungsten_carbide', '1x cobalt')
        .iconSet(GTMaterialIconSet.METALLIC)
        .flags(
            GTMaterialFlags.GENERATE_PLATE,
            GTMaterialFlags.GENERATE_ROD,
            GTMaterialFlags.GENERATE_LONG_ROD,
            GTMaterialFlags.GENERATE_BOLT_SCREW,
            GTMaterialFlags.DECOMPOSITION_BY_CENTRIFUGING
        )

    event.create('draconium')
        .ingot()
        .fluid()
        .ore()
        .element('draconium')
        .color(0x7B35D9)
        .secondaryColor(0x3D0F7A)
        .iconSet(GTMaterialIconSet.BRIGHT)
        .blastTemp(9000, "high", GTValues.VA[GTValues.UV], 1200)
        .cableProperties(GTValues.VA[GTValues.UHV], 1, 16, false)
        .flags(
            GTMaterialFlags.GENERATE_PLATE,
            GTMaterialFlags.GENERATE_ROD,
            GTMaterialFlags.GENERATE_BOLT_SCREW,
            GTMaterialFlags.GENERATE_SPRING,
            GTMaterialFlags.GENERATE_LONG_ROD,
            GTMaterialFlags.GENERATE_FOIL,
            GTMaterialFlags.GENERATE_FINE_WIRE
    )
    
    event.create('awakened_draconium')
        .ingot()
        .fluid()
        .element('awakened_draconium')
        .color(0xFF8C00)
        .secondaryColor(0xCC5500)
        .iconSet(GTMaterialIconSet.BRIGHT)
        .cableProperties(GTValues.VA[GTValues.UEV], 1, 32, false)
        .fluidPipeProperties(16000, 20000, true)
        .flags(
            GTMaterialFlags.GENERATE_PLATE,
            GTMaterialFlags.GENERATE_ROD,
            GTMaterialFlags.GENERATE_BOLT_SCREW,
            GTMaterialFlags.GENERATE_SPRING,
            GTMaterialFlags.GENERATE_SPRING_SMALL,
            GTMaterialFlags.GENERATE_RING,
            GTMaterialFlags.GENERATE_ROTOR,
            GTMaterialFlags.GENERATE_LONG_ROD,
            GTMaterialFlags.GENERATE_FOIL,
            GTMaterialFlags.GENERATE_FINE_WIRE
        )

    event.create('chaos_crystal')
        .element('chaos_crystal')
        .gem()
        .dust()
        .color(0xFF2020)
        .secondaryColor(0x8B0000)
        .iconSet(GTMaterialIconSet.GEM_VERTICAL)
        .flags(GTMaterialFlags.GENERATE_LENS)

    event.create('draconic_framework')
        .ingot()
        .fluid()
        .color(0x4A1A8C)
        .secondaryColor(0x200A40)
        .iconSet(GTMaterialIconSet.BRIGHT)
        .components('2x draconium', '1x neutronium', '1x gaia_spirit')
        .blastTemp(12000, "high", GTValues.VA[GTValues.UHV], 800)
        .flags(
            GTMaterialFlags.GENERATE_PLATE,
            GTMaterialFlags.GENERATE_ROD,
            GTMaterialFlags.GENERATE_BOLT_SCREW,
            GTMaterialFlags.GENERATE_FRAME,
            GTMaterialFlags.DECOMPOSITION_BY_CENTRIFUGING
        )

    event.create('awakened_framework')
        .ingot()
        .fluid()
        .color(0xCC6600)
        .secondaryColor(0x7A3300)
        .iconSet(GTMaterialIconSet.BRIGHT)
        .components('2x awakened_draconium', '1x neutronium', '1x chaos_crystal', '1x gaia_spirit')
        .blastTemp(14400, "high", GTValues.VA[GTValues.UEV], 1000)
        .flags(
            GTMaterialFlags.GENERATE_PLATE,
            GTMaterialFlags.GENERATE_ROD,
            GTMaterialFlags.GENERATE_BOLT_SCREW,
            GTMaterialFlags.GENERATE_FRAME,
            GTMaterialFlags.DECOMPOSITION_BY_CENTRIFUGING
        )

    event.create('draconic_fluxite')
        .ingot()
        .fluid()
        .color(0x8844FF)
        .secondaryColor(0x4400CC)
        .iconSet(GTMaterialIconSet.BRIGHT)
        .components('1x awakened_draconium', '1x naquadria', '1x gaia_spirit')
        .blastTemp(12000, "high", GTValues.VA[GTValues.UHV], 800)
        .cableProperties(GTValues.VA[GTValues.UHV], 16, 0, true)
        .flags(
            GTMaterialFlags.GENERATE_FOIL,
            GTMaterialFlags.GENERATE_FINE_WIRE,
            GTMaterialFlags.DECOMPOSITION_BY_CENTRIFUGING
        )

    event.create('chaotic_singulite')
        .ingot()
        .fluid()
        .color(0xFF4400)
        .secondaryColor(0xAA2200)
        .iconSet(GTMaterialIconSet.BRIGHT)
        .components('1x awakened_draconium', '1x chaos_crystal', '1x gaia_spirit')
        .blastTemp(14400, "high", GTValues.VA[GTValues.UEV], 800)
        .cableProperties(GTValues.VA[GTValues.UEV], 32, 0, true)
        .flags(
            GTMaterialFlags.GENERATE_FOIL,
            GTMaterialFlags.GENERATE_FINE_WIRE,
            GTMaterialFlags.DECOMPOSITION_BY_CENTRIFUGING
        )

    event.create('abstract_elastomer')
        .ingot()
        .fluid()
        .color(0x1A0A2E)
        .secondaryColor(0x6030AA)
        .iconSet(GTMaterialIconSet.DULL)
        .fluidPipeProperties(10000, 6000, true)
        .flags(
            GTMaterialFlags.GENERATE_PLATE,
            GTMaterialFlags.GENERATE_FOIL
        )

    event.create('voidmetal')
        .ingot()
        .fluid()
        .ore()
        .color(0x4B0082).secondaryColor(0x200040)
        .blastTemp(4500, "high", GTValues.VA[GTValues.IV], 1000)
        .element('voidmetal')
        .iconSet(GTMaterialIconSet.METALLIC)
        .flags(
            GTMaterialFlags.GENERATE_PLATE,
            GTMaterialFlags.GENERATE_ROD,
            GTMaterialFlags.GENERATE_GEAR
        )
        .addOreByproducts('osmium', 'iridium', 'platinum')
        .washedIn('gtceu:mercury')
        .separatedInto('osmium', 'iridium')

    event.create('solarmetal')
        .ingot()
        .fluid()
        .ore()
        .color(0xFFD700).secondaryColor(0xB8860B)
        .blastTemp(5400, "high", GTValues.VA[GTValues.LuV], 1000)
        .element('solarmetal')
        .iconSet(GTMaterialIconSet.METALLIC)
        .flags(
            GTMaterialFlags.GENERATE_PLATE,
            GTMaterialFlags.GENERATE_ROD,
            GTMaterialFlags.GENERATE_GEAR
        )
        .addOreByproducts('platinum', 'palladium', 'iridium')
        .washedIn('gtceu:mercury')
        .separatedInto('platinum', 'palladium')

    event.create('arcmetal')
        .ingot()
        .fluid()
        .ore()
        .color(0x00BFFF).secondaryColor(0x0050A0)
        .blastTemp(7200, "high", GTValues.VA[GTValues.UV], 1000)
        .element('arcmetal')
        .iconSet(GTMaterialIconSet.METALLIC)
        .flags(
            GTMaterialFlags.GENERATE_PLATE,
            GTMaterialFlags.GENERATE_ROD,
            GTMaterialFlags.GENERATE_GEAR
        )
        .addOreByproducts('europium', 'neodymium', 'cerium')
        .washedIn('gtceu:mercury')
        .separatedInto('europium', 'neodymium')

    // Initiate alt spine: Aether/Valkyrie metal, holy-silver-independent. Dust from magic chain -> furnace smelt -> ingot.
    event.create('skyforged')
        .ingot()
        .color(0xBFE8D8)
        .secondaryColor(0x4A8C7A)
        .iconSet(GTMaterialIconSet.SHINY)
        .flags(
            GTMaterialFlags.GENERATE_PLATE,
            GTMaterialFlags.GENERATE_ROD,
            GTMaterialFlags.GENERATE_BOLT_SCREW,
            GTMaterialFlags.GENERATE_LONG_ROD,
            GTMaterialFlags.GENERATE_FOIL
        )

    // Hobbyist signature metal (magic rework Phase 1): crafted line, no ore vein --
    // arcane charcoal + redstone + vinteum + Malum Infernal Spirit, replaces Ars's role here.
    // Starter tool/charm material: rod for a wand handle, no plate (not structural).
    event.create('ashen_ichor')
        .ingot()
        .color(0xB23A1F).secondaryColor(0x4A150A)
        .iconSet(GTMaterialIconSet.ROUGH)
        .blastTemp(1400, "low", GTValues.VA[GTValues.ULV], 400)
        .flags(GTMaterialFlags.GENERATE_ROD)

    // Sage alt spine: Primal/Wilden beast metal, gaia-independent. Dust from magic chain -> furnace smelt -> ingot.
    event.create('wilden_alloy')
        .ingot()
        .color(0x6A8F3C)
        .secondaryColor(0x33471C)
        .iconSet(GTMaterialIconSet.ROUGH)
        .flags(
            GTMaterialFlags.GENERATE_PLATE,
            GTMaterialFlags.GENERATE_ROD,
            GTMaterialFlags.GENERATE_BOLT_SCREW,
            GTMaterialFlags.GENERATE_LONG_ROD
        )

    // ---- Silent Gear native metals. Registering as GT materials autogenerates the ore/dust
    // processing chain (macerator, washer, EBF, compressor) - GT still drives acquisition/processing.
    // Alloys still need a hand-written mixer (see tech/silentgear.js); the blast step autogens from
    // blastTemp. Every form these materials have (ingot/nugget/block/dust, +rawOre for the two ore
    // materials crimson_iron/azure_silver) is TagPrefix.setIgnored() to silentgear's own items
    // (gtceuMaterialModification.js) since these are SG's native materials - gtceu:<metal>_* items
    // don't exist at all for these 6, always use silentgear:<metal>_* instead.

    event.create('crimson_iron')
        .ingot()
        .ore()
        .color(0xFF6189).secondaryColor(0x8C2E44)
        .iconSet(GTMaterialIconSet.METALLIC)
        .components(c('3x iron'), c('1x sulfur'))
        .flags(GTMaterialFlags.GENERATE_PLATE, GTMaterialFlags.GENERATE_ROD)
        .addOreByproducts('nickel', 'gold', 'sulfur')
        .washedIn('gtceu:mercury')
        .separatedInto('nickel', 'gold')

    event.create('azure_silver')
        .ingot()
        .ore()
        .color(0xCBBAFF).secondaryColor(0x6A5C9C)
        .iconSet(GTMaterialIconSet.SHINY)
        .components(c('3x silver'), c('1x amethyst'))
        .flags(GTMaterialFlags.GENERATE_PLATE, GTMaterialFlags.GENERATE_ROD)
        .addOreByproducts('silver', 'amethyst', 'ender_pearl')
        .washedIn('gtceu:mercury')
        .separatedInto('silver', 'amethyst')

    event.create('blaze_gold')
        .ingot()
        .color(0xDD8500).secondaryColor(0x8C5400)
        .iconSet(GTMaterialIconSet.SHINY)
        .components(c('3x gold'), c('1x sulfur'))
        .flags(GTMaterialFlags.GENERATE_PLATE, GTMaterialFlags.GENERATE_ROD)

    event.create('azure_electrum')
        .ingot()
        .color(0x4575E3).secondaryColor(0x223A80)
        .iconSet(GTMaterialIconSet.SHINY)
        .blastTemp(1700, "low", GTValues.VA[GTValues.HV], 1000)
        .components(c('2x azure_silver'), c('2x gold'))
        .flags(GTMaterialFlags.GENERATE_PLATE, GTMaterialFlags.GENERATE_ROD)

    event.create('crimson_steel')
        .ingot()
        .color(0xDC143C).secondaryColor(0x780A20)
        .iconSet(GTMaterialIconSet.METALLIC)
        .blastTemp(1700, "low", GTValues.VA[GTValues.HV], 1000)
        .components(c('1x crimson_iron'))
        .flags(GTMaterialFlags.GENERATE_PLATE, GTMaterialFlags.GENERATE_ROD, GTMaterialFlags.GENERATE_LONG_ROD)

    event.create('tyrian_steel')
        .ingot()
        .color(0x8B1A62).secondaryColor(0x4A0A34)
        .iconSet(GTMaterialIconSet.SHINY)
        .blastTemp(3600, "mid", GTValues.VA[GTValues.EV], 1200)
        .components(c('1x crimson_steel'), c('1x azure_electrum'))
        .flags(GTMaterialFlags.GENERATE_PLATE, GTMaterialFlags.GENERATE_ROD, GTMaterialFlags.GENERATE_LONG_ROD, GTMaterialFlags.GENERATE_BOLT_SCREW)

    // ==== MysticalAgriculture ====
    // Essences = dust materials (the _essence item IS the dust; setIgnored in gtceuMaterialModification.js).
    // Isotopes of mana, so no ingot/plate — an essence is a magical powder, nothing more.
    event.create('inferium')  .dust().element('inferium')  .color(0x7DBF3F).iconSet(GTMaterialIconSet.DULL)
    event.create('prudentium').dust().element('prudentium').color(0xE0C93F).iconSet(GTMaterialIconSet.DULL)
    event.create('tertium')   .dust().element('tertium')   .color(0xE07B3F).iconSet(GTMaterialIconSet.DULL)
    event.create('imperium')  .dust().element('imperium')  .color(0x5FC9E8).iconSet(GTMaterialIconSet.DULL)
    event.create('supremium') .dust().element('supremium') .color(0xE23B3B).iconSet(GTMaterialIconSet.DULL)

    // life_essence: isotope of mana, dust form. Blood-red.
    event.create('life_essence').dust().element('life_essence').color(0x8B0000).iconSet(GTMaterialIconSet.DULL)

    // The four classical element essences: base MA essences, dust form (the _essence item IS the dust).
    // Each carries its own classical element (fire/water/earth/air, alchemical-symbol elements).
    event.create('fire_essence') .dust().element('fire') .color(0xD63A1F).iconSet(GTMaterialIconSet.DULL)
    event.create('water_essence').dust().element('water').color(0x2F7FE0).iconSet(GTMaterialIconSet.DULL)
    event.create('earth_essence').dust().element('earth').color(0x6E4A2A).iconSet(GTMaterialIconSet.DULL)
    event.create('air_essence')  .dust().element('air')  .color(0xF2E34A).iconSet(GTMaterialIconSet.DULL)

    // prosperity: the growth gem. Ore vein in the Aether (aetherWorldgen.js); rawOre = prosperity_shard.
    event.create('prosperity')
        .gem()
        .ore()
        .element('prosperity')
        .color(0x4FD8C4).secondaryColor(0x2C8A7C)
        .iconSet(GTMaterialIconSet.QUARTZ)
        .flags(GTMaterialFlags.GENERATE_PLATE, GTMaterialFlags.GENERATE_ROD)
        .addOreByproducts('gold', 'emerald', 'diamond')
        .washedIn('gtceu:mercury')
        .separatedInto('gold', 'emerald')

    // -ites: prosperity+essence alloys used by the MA tools. GEM form (GT forbids ingot+gem on one
    // material). Maps to MA's <tier>_gemstone; the parallel MA <tier>_ingot is obliterated and every
    // ingot use is hard-swapped to gtceu:<ite>_plate (see tech/mysticalagriculture.js).
    // [material, essence, color]
    ;[
        ['inferite',          'inferium',           0x7DBF3F],
        ['prudentite',        'prudentium',         0xE0C93F],
        ['tertite',           'tertium',            0xE07B3F],
        ['imperite',          'imperium',           0x5FC9E8],
        ['supremite',         'supremium',          0xE23B3B],
        ['awakened_supremite','awakened_supremium', 0xFF9A2E],
        ['insanite',          'insanium',           0xE84DD0],
    ].forEach(row => {
        let name = row[0], essence = row[1], color = row[2]
        let b = event.create(name)
            .gem()
            .color(color)
            .iconSet(GTMaterialIconSet.SHINY)
        if (essence === 'awakened_supremium' || essence === 'insanium') {
            b.components(c('1x prosperity'))             // essence isn't a GT material for these two
        } else {
            b.components(c('1x prosperity'), c('2x ' + essence))
        }
        b.flags(GTMaterialFlags.GENERATE_PLATE, GTMaterialFlags.GENERATE_ROD)
    })

    // soulium: prosperity + soul alloy. Gem form (its own dust + gemstone); ingot obliterated + swapped.
    event.create('soulium')
        .gem()
        .color(0x3E3768).secondaryColor(0x211C3C)
        .iconSet(GTMaterialIconSet.SHINY)
        .flags(GTMaterialFlags.GENERATE_PLATE, GTMaterialFlags.GENERATE_ROD)

    // ==== Malum ====
    // Hallowed gold: mod-native "perfect conductor" -> fine wire, no cableProperties (not a power line).
    event.create('hallowed_gold')
        .ingot()
        .color(0xF3E5AB)
        .iconSet(GTMaterialIconSet.BRIGHT)
        .flags(
            GTMaterialFlags.GENERATE_PLATE,
            GTMaterialFlags.GENERATE_FINE_WIRE,
            GTMaterialFlags.GENERATE_FOIL
        )
        .blastTemp(1800)

    // Soul stained steel: structural, weapons/armor -> plate/rod line.
    event.create('soul_stained_steel')
        .ingot()
        .color(0x6B4E8C)
        .iconSet(GTMaterialIconSet.METALLIC)
        .flags(
            GTMaterialFlags.GENERATE_PLATE,
            GTMaterialFlags.GENERATE_ROD,
            GTMaterialFlags.GENERATE_BOLT_SCREW,
            GTMaterialFlags.GENERATE_LONG_ROD
        )
        .blastTemp(1900)

    // soulstone / brilliance: shared Aether vein, each other's byproduct.
    event.create('soulstone')
        .gem()
        .ore()
        .color(0x8E7FA8)
        .secondaryColor(0x4A3F5E)
        .iconSet(GTMaterialIconSet.QUARTZ)
        .flags(GTMaterialFlags.GENERATE_PLATE)
        .addOreByproducts('brilliance', 'amethyst')
        .washedIn('gtceu:mercury')

    event.create('brilliance')
        .gem()
        .ore()
        .color(0x7FE3D8)
        .secondaryColor(0x2E8B84)
        .iconSet(GTMaterialIconSet.DIAMOND)
        .flags(GTMaterialFlags.GENERATE_LENS)
        .addOreByproducts('soulstone', 'amethyst')
        .washedIn('gtceu:mercury')

    // blazing_quartz: Nether gem, no washedIn (matches GT's own nether quartz treatment).
    event.create('blazing_quartz')
        .gem()
        .ore()
        .color(0xE08A2B)
        .secondaryColor(0x8C4A10)
        .iconSet(GTMaterialIconSet.QUARTZ)
        .flags(GTMaterialFlags.GENERATE_PLATE, GTMaterialFlags.GENERATE_LENS)
        .addOreByproducts('netherquartz', 'sulfur')

    // Alchemist signature metal (magic rework Phase 6): crafted line, no ore vein -- MNA animus
    // dust + MagiChem arcane essentia + Blood Magic Destructive Will. Dust form is the macerator
    // target for the last chain step; blastTemp autogens the EBF smelt to ingot from there.
    event.create('distilled_animus')
        .ingot()
        .color(0x8A4FD1).secondaryColor(0x4A2570)
        .iconSet(GTMaterialIconSet.SHINY)
        .blastTemp(4200, "high", GTValues.VA[GTValues.IV], 1000)
        .flags(
            GTMaterialFlags.GENERATE_PLATE,
            GTMaterialFlags.GENERATE_ROD,
            GTMaterialFlags.GENERATE_BOLT_SCREW
        )

})
