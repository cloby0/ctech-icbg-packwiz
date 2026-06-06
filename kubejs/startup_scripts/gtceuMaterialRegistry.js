GTCEuStartupEvents.registry('gtceu:element', event => {
    event.create('mithril')
        .protons(28)
        .neutrons(177)
        .halfLifeSeconds(-1)
        .decayTo(null)
        .symbol('Mi')
        .isIsotope(false)

    event.create('desh')
        .protons(32)
        .neutrons(182)
        .halfLifeSeconds(-1)
        .decayTo(null)
        .symbol('De')
        .isIsotope(false)

    event.create('ostrum')
        .protons(33)
        .neutrons(183)
        .halfLifeSeconds(-1)
        .decayTo(null)
        .symbol('Ot')
        .isIsotope(false)

    event.create('calorite')
        .protons(34)
        .neutrons(184)
        .halfLifeSeconds(-1)
        .decayTo(null)
        .symbol('Ct')
        .isIsotope(false)

    event.create('source')
        .protons(36)
        .neutrons(142)
        .halfLifeSeconds(-1)
        .decayTo(null)
        .symbol('So')
        .isIsotope(false)

    event.create('prima_materia')
        .protons(38)
        .neutrons(148)
        .halfLifeSeconds(-1)
        .decayTo(null)
        .symbol('Ma')
        .isIsotope(false)

    event.create('ambrosium')
        .protons(40)
        .neutrons(155)
        .halfLifeSeconds(-1)
        .decayTo(null)
        .symbol('Ab')
        .isIsotope(false)

    event.create('gravitite')
        .protons(42)
        .neutrons(160)
        .halfLifeSeconds(-1)
        .decayTo(null)
        .symbol('Gv')
        .isIsotope(false)

    event.create('veridium')
        .protons(44)
        .neutrons(165)
        .halfLifeSeconds(-1)
        .decayTo(null)
        .symbol('Vd')
        .isIsotope(false)

})

GTCEuStartupEvents.registry('gtceu:material', event => {

    // aether

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

    // zanite: purple vanadium silicate gem (SiO2 + V chromophore)
    event.create('zanite')
        .gem()
        .ore()
        .color(0x9455F2)
        .secondaryColor(0x431686)
        .iconSet(GTMaterialIconSet.EMERALD)
        .components('2x silicon', '1x vanadium')
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
        .addOreByproducts('lithium', 'chromium')
        .washedIn('gtceu:sodium_persulfate')
        .separatedInto('chromium', 'manganese')

    // skyjade: beryl-family silicate (Be-Ca silicate, like emerald/aquamarine family)
    event.create('skyjade')
        .gem()
        .ore()
        .color(0xCFF095)
        .secondaryColor(0x7d9f66)
        .iconSet(GTMaterialIconSet.DIAMOND)
        .components('2x silicon', '1x beryllium', '1x calcium')
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

    // progression materials

    event.create('luminessence')
        .dust()
        .color(0xfafa5d)
        .iconSet(GTMaterialIconSet.SHINY)

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
            GTMaterialFlags.GENERATE_ROD
        )
        .addOreByproducts('amethyst', 'lapis', 'luminessence')
        .washedIn('gtceu:mercury')

    event.create('holy_silver')
        .ingot()
        .color(0xe7f79e)
        .iconSet(GTMaterialIconSet.BRIGHT)
        .flags(
            GTMaterialFlags.GENERATE_PLATE,
            GTMaterialFlags.GENERATE_ROD,
            GTMaterialFlags.GENERATE_BOLT_SCREW,
            GTMaterialFlags.GENERATE_LONG_ROD,
            GTMaterialFlags.GENERATE_FOIL
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
        .components('1x prima_materia', '2x source')
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
        .components('3x manasteel', '2x source')
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
        .components('2x terrasteel', '1x luminessence')
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

    // thermal expansion alloys

    event.create("lumium")
        .ingot()
        .fluid()
        .color(0xf6ff99).secondaryColor(0xff7400)
        .blastTemp(4500, "mid", GTValues.VA[GTValues.EV], 1000)
        .flags(GTMaterialFlags.GENERATE_PLATE, GTMaterialFlags.GENERATE_GEAR, GTMaterialFlags.GENERATE_FINE_WIRE)

    event.create("signalum")
        .ingot()
        .fluid()
        .color(0xff6b0f).secondaryColor(0xc32e00)
        .blastTemp(4500, "mid", GTValues.VA[GTValues.EV], 1000)
        .flags(GTMaterialFlags.GENERATE_PLATE, GTMaterialFlags.GENERATE_ROD, GTMaterialFlags.GENERATE_GEAR)

    event.create("enderium")
        .ingot().fluid()
        .color(0x1f6b62).secondaryColor(0x16455f)
        .blastTemp(4500, "mid", GTValues.VA[GTValues.EV], 1000)
        .flags(GTMaterialFlags.GENERATE_PLATE, GTMaterialFlags.GENERATE_ROD, GTMaterialFlags.GENERATE_FINE_WIRE)

    // ad astra space metals

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
            GTMaterialFlags.NO_SMELTING
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
            GTMaterialFlags.GENERATE_FINE_WIRE,
            GTMaterialFlags.NO_SMELTING
        )
        .addOreByproducts('chromium', 'vanadium', 'magnesium')
        .washedIn('gtceu:mercury')
        .separatedInto('chromium', 'vanadium')

    // lunar rocket alloy
    // ultimet + aluminium
    // all overworld HV inputs so rocket builds before first moon trip

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

    // mond process intermediate

    event.create('desh_carbonyl')
        .fluid()
        .color(0xc49060)

    // moon cheese
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
    // EBF recipes auto-generated from components
    // verify gtceu names for ruridit hss_g enriched_naquadah americium naquadria on load
    // LuV+ blast temps require naquadah tier coils or higher

    // MV lead sourcite 1A alloy smelter
    event.create('lead_sourcite')
        .ingot()
        .fluid()
        .color(0x9E7FC0)
        .secondaryColor(0x5C4A80)
        .iconSet(GTMaterialIconSet.SHINY)
        .components('2x lead', '1x source')
        .cableProperties(GTValues.VA[GTValues.MV], 1, 0, true)
        .flags(
            GTMaterialFlags.GENERATE_FOIL,
            GTMaterialFlags.GENERATE_FINE_WIRE,
            GTMaterialFlags.DECOMPOSITION_BY_ELECTROLYZING
        )

    // HV hallowed nickelate 2A
    event.create('hallowed_nickelate')
        .ingot()
        .fluid()
        .color(0xCCEDAA)
        .secondaryColor(0x8AAA70)
        .iconSet(GTMaterialIconSet.SHINY)
        .blastTemp(2700, "low", GTValues.VA[GTValues.HV], 1200)
        .components('1x holy_silver', '2x nickel')
        .cableProperties(GTValues.VA[GTValues.HV], 2, 0, true)
        .flags(
            GTMaterialFlags.GENERATE_FOIL,
            GTMaterialFlags.GENERATE_FINE_WIRE,
            GTMaterialFlags.DECOMPOSITION_BY_ELECTROLYZING
        )

    // EV prima ruridite 4A
    event.create('prima_ruridite')
        .ingot()
        .fluid()
        .color(0x90C868)
        .secondaryColor(0x4A7830)
        .iconSet(GTMaterialIconSet.SHINY)
        .blastTemp(3600, "mid", GTValues.VA[GTValues.EV], 1400)
        .components('1x prima_materia', '2x ruridit')
        .cableProperties(GTValues.VA[GTValues.EV], 4, 0, true)
        .flags(
            GTMaterialFlags.GENERATE_FOIL,
            GTMaterialFlags.GENERATE_FINE_WIRE,
            GTMaterialFlags.DECOMPOSITION_BY_ELECTROLYZING
        )

    // IV hssg manaferrite 4A
    event.create('hssg_manaferrite')
        .ingot()
        .fluid()
        .color(0x4D9AC0)
        .secondaryColor(0x255472)
        .iconSet(GTMaterialIconSet.SHINY)
        .blastTemp(4500, "high", GTValues.VA[GTValues.IV], 1600)
        .components('3x manasteel', '1x hss_g')
        .cableProperties(GTValues.VA[GTValues.IV], 4, 0, true)
        .flags(
            GTMaterialFlags.GENERATE_FOIL,
            GTMaterialFlags.GENERATE_FINE_WIRE,
            GTMaterialFlags.DECOMPOSITION_BY_ELECTROLYZING
        )

    // LuV terranaquadite 8A
    event.create('terranaquadite')
        .ingot()
        .fluid()
        .color(0x3EC84A)
        .secondaryColor(0x1A5C20)
        .iconSet(GTMaterialIconSet.BRIGHT)
        .blastTemp(6000, "high", GTValues.VA[GTValues.LuV], 1800)
        .components('2x terrasteel', '1x enriched_naquadah')
        .cableProperties(GTValues.VA[GTValues.LuV], 8, 0, true)
        .flags(
            GTMaterialFlags.GENERATE_FOIL,
            GTMaterialFlags.GENERATE_FINE_WIRE,
            GTMaterialFlags.DECOMPOSITION_BY_ELECTROLYZING
        )

    // ZPM elven americate 8A
    event.create('elven_americate')
        .ingot()
        .fluid()
        .color(0xCC5CB8)
        .secondaryColor(0x7A3070)
        .iconSet(GTMaterialIconSet.BRIGHT)
        .blastTemp(7500, "high", GTValues.VA[GTValues.ZPM], 2000)
        .components('2x elementium', '1x americium')
        .cableProperties(GTValues.VA[GTValues.ZPM], 8, 0, true)
        .flags(
            GTMaterialFlags.GENERATE_FOIL,
            GTMaterialFlags.GENERATE_FINE_WIRE,
            GTMaterialFlags.DECOMPOSITION_BY_CENTRIFUGING
        )

    // UV boundless naquadrite 16A
    event.create('boundless_naquadrite')
        .ingot()
        .fluid()
        .color(0xA845A8)
        .secondaryColor(0x5A1880)
        .iconSet(GTMaterialIconSet.BRIGHT)
        .blastTemp(9000, "high", GTValues.VA[GTValues.UV], 2400)
        .components('1x gaia_spirit', '2x naquadria')
        .cableProperties(GTValues.VA[GTValues.UV], 16, 0, true)
        .flags(
            GTMaterialFlags.GENERATE_FOIL,
            GTMaterialFlags.GENERATE_FINE_WIRE,
            GTMaterialFlags.DECOMPOSITION_BY_CENTRIFUGING
        )

})
