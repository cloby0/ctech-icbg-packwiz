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

    event.create('source')
        .protons(36)
        .neutrons(142)
        .halfLifeSeconds(-1)
        .decayTo(null)
        .symbol('Vs')
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

    event.create('veridium')
        .protons(44)
        .neutrons(165)
        .halfLifeSeconds(-1)
        .decayTo(null)
        .symbol('Vr')
        .isIsotope(false)

})

GTCEuStartupEvents.registry('gtceu:material', event => {

    // components() dispatches to eager GTMaterials.get() and fails for custom materials
    // MaterialStackWrapper.fromString dispatches to kjs$components which stores a lazy Supplier
    // that resolves after the full event so custom materials are in the registry
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
            GTMaterialFlags.DECOMPOSITION_BY_ELECTROLYZING
        )
        .addOreByproducts('silicon', 'vanadium', 'source')
        .washedIn('gtceu:mercury')

    event.create('mithril')
        .ingot()
        .ore()
        .element('mithril')
        .color(0xc7ebec)
        .secondaryColor(0x486b82)
        .iconSet(GTMaterialIconSet.SHINY)
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

    event.create('luminessence')
        .dust()
        .color(0xfafa5d)
        .iconSet(GTMaterialIconSet.SHINY)
        .components(c('2x gold'), c('1x redstone'), c('1x source'))
        .flags(GTMaterialFlags.DECOMPOSITION_BY_CENTRIFUGING)

    event.create('source')
        .gem()
        .ore()
        .element('source')
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
        .color(0x67b9ee)
        .ingot()
        .components(c('1x prima_materia'), c('2x source'))
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
        .components(c('3x manasteel'), c('2x source'))
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
        .iconSet(GTMaterialIconSet.DULL)
        .flags(
            GTMaterialFlags.GENERATE_PLATE,
            GTMaterialFlags.GENERATE_ROD,
            GTMaterialFlags.GENERATE_BOLT_SCREW,
            GTMaterialFlags.GENERATE_LONG_ROD,
            GTMaterialFlags.GENERATE_FRAME,
            GTMaterialFlags.NO_SMELTING
        )

    event.create("lumium")
        .ingot()
        .fluid()
        .color(0xf6ff99).secondaryColor(0xff7400)
        .blastTemp(4500, "mid", GTValues.VA[GTValues.EV], 1000)
        .components('4x tin', '2x silver', '2x glowstone')
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
        .components('4x copper', '2x silver', '2x redstone')
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
        .components('4x tin', '2x platinum', '2x ender_pearl')
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
        .iconSet(GTMaterialIconSet.SHINY)
        .flags(
            GTMaterialFlags.GENERATE_PLATE,
            GTMaterialFlags.GENERATE_ROD,
            GTMaterialFlags.GENERATE_LONG_ROD
        )

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

    // nugget form renamed to curd via lang key
    event.create('moon_cheese')
        .ingot()
        .ore()
        .color(0xf5e870)
        .secondaryColor(0xc8b842)
        .iconSet(GTMaterialIconSet.DULL)
        .addOreByproducts('sodium', 'calcium')

    // magic-tech superconductor alloys
    // lower amperage tradeoff vs vanilla tier superconductors
    // uses MaterialStackWrapper.fromString via c() helper for lazy resolution of custom materials
    // LuV+ blast temps require naquadah tier coils or higher

    event.create('lead_sourcite')
        .ingot()
        .fluid()
        .color(0x9E7FC0)
        .secondaryColor(0x5C4A80)
        .iconSet(GTMaterialIconSet.SHINY)
        .components(c('2x lead'), c('1x source'))
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

})
