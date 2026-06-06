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

})

GTCEuStartupEvents.registry('gtceu:material', event => {

    // --- Aether ---

    event.create('ambrosium')
        .gem()
        .color(0xf1ef5f)
        .iconSet(GTMaterialIconSet.RUBY)
        .flags(
            GTMaterialFlags.GENERATE_LENS
        )
        .ore()
        .addOreByproducts('gold', 'sulfur')   // holy light → gold; brimstone contrast
        .washedIn('gtceu:mercury')

    event.create('zanite')
        .gem()
        .ore()
        .color(0x9455F2)
        .secondaryColor(0x431686)
        .iconSet(GTMaterialIconSet.EMERALD)
        .flags(
            GTMaterialFlags.GENERATE_LENS,
            GTMaterialFlags.GENERATE_ROD
        )
        .addOreByproducts('silicon', 'vanadium') // crystalline sharpness; hardening metal
        .washedIn('gtceu:mercury')

    event.create('mithril')
        .ingot()
        .ore()
        .element('mithril')
        .color(0xc7ebec)
        .secondaryColor(0x486b82)
        .iconSet(GTMaterialIconSet.SHINY)
        .addOreByproducts('silver', 'platinum') // silver-like appearance; legendary rarity → PGMs
        .washedIn('gtceu:mercury')              // silver amalgam process
        .separatedInto('platinum', 'palladium')

    event.create('gravitite')
        .ingot()
        .ore()
        .color(0xE072D7)
        .secondaryColor(0x871F7E)
        .iconSet(GTMaterialIconSet.METALLIC)
        .addOreByproducts('lithium', 'chromium') // lightest metal (levitation); exotic aerospace alloy
        .washedIn('gtceu:sodium_persulfate')
        .separatedInto('chromium', 'manganese')

    event.create('skyjade')
        .gem()
        .ore()
        .color(0xCFF095)
        .secondaryColor(0x7d9f66)
        .iconSet(GTMaterialIconSet.DIAMOND)
        .addOreByproducts('silicon', 'calcium', 'beryllium') // jade = silicate; beryl family (emerald is beryl)
        .washedIn('gtceu:mercury')

    event.create('veridium')
        .ingot()
        .ore()
        .color(0x446AAC)
        .secondaryColor(0x25366A)
        .iconSet(GTMaterialIconSet.METALLIC)
        .addOreByproducts('cobalt', 'chromium') // cobalt blue; viridian chromium green
        .washedIn('gtceu:mercury')
        .separatedInto('cobalt', 'chromium')

    // --- Progression materials (no ore) ---

    event.create('luminessence')
        .dust()
        .color(0xfafa5d)
        .iconSet(GTMaterialIconSet.SHINY)

    event.create('source')
        .gem()
        .ore()
        .color(0xAE44E2)
        .secondaryColor(0xE244C8)
        .iconSet(GTMaterialIconSet.QUARTZ)
        .flags(
            GTMaterialFlags.GENERATE_LENS,
            GTMaterialFlags.NO_ORE_SMELTING,
            GTMaterialFlags.GENERATE_ROD
        )
        .addOreByproducts('amethyst', 'lapis', 'luminessence') // magical residue survives tech processing
        .washedIn('gtceu:mercury')                             // quicksilver = alchemical symbol

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
        .flags(
            GTMaterialFlags.GENERATE_PLATE,
            GTMaterialFlags.GENERATE_ROD,
            GTMaterialFlags.GENERATE_BOLT_SCREW,
            GTMaterialFlags.GENERATE_LONG_ROD,
            GTMaterialFlags.GENERATE_FRAME
        )

    event.create('terrasteel')
        .color(0x55f609)
        .ingot()
        .iconSet(GTMaterialIconSet.SHINY)
        .flags(
            GTMaterialFlags.GENERATE_PLATE,
            GTMaterialFlags.GENERATE_ROD,
            GTMaterialFlags.GENERATE_BOLT_SCREW,
            GTMaterialFlags.GENERATE_LONG_ROD
        )

    event.create('elementium')
        .color(0xf472c6)
        .iconSet(GTMaterialIconSet.SHINY)
        .ingot()
        .flags(
            GTMaterialFlags.GENERATE_PLATE,
            GTMaterialFlags.GENERATE_ROD,
            GTMaterialFlags.GENERATE_BOLT_SCREW,
            GTMaterialFlags.GENERATE_LONG_ROD
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

    // --- Thermal Expansion alloys ---

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

    // --- Ad Astra space metals ---

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
        .addOreByproducts('iron', 'sulfur', 'nickel') // lunar regolith iron; volcanic sulfur; nickel-iron meteorite
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
        .addOreByproducts('sulfur', 'copper', 'lead') // Venusian sulfuric atmosphere; rose copper; dense lead
        .washedIn('gtceu:sulfuric_acid')               // Venus = sulfuric acid clouds
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
        .addOreByproducts('chromium', 'vanadium', 'magnesium') // refractory heat metals; echoes Kroll process
        .washedIn('gtceu:mercury')                            // Mercury planet = Mercury element washing
        .separatedInto('chromium', 'vanadium')

    // --- Lunar Rocket Alloy ---
    // ultimet base (cobalt-chromium superalloy) alloyed with aluminium for low-weight aerospace plate
    // two EBF steps: first make ultimet from constituents, then alloy into this
    // only HV-accessible inputs — overworld-only so the rocket can be made before the first moon trip

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

    // --- Desh Mond process intermediate ---

    event.create('desh_carbonyl')
        .fluid()
        .color(0xc49060) // pale orange, slightly toxic-looking

    // --- Moon cheese ---
    // Novelty ore found in shallow Moon veins. Nugget form renamed to "Curd" via lang key.
    // Byproducts: sodium (salt) and calcium — accurate cheese mineral content.

    event.create('moon_cheese')
        .ingot()
        .ore()
        .color(0xf5e870)
        .secondaryColor(0xc8b842)
        .iconSet(GTMaterialIconSet.DULL)
        .addOreByproducts('sodium', 'calcium')
})
