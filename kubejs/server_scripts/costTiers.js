// priority: 10
// Source cost per magic tier, GTValues-style. Mana (botania) mirrors Source via MANA_PER_SOURCE.
// Server scripts share one scope, so Source/Mana are visible in every server script. Declare them nowhere else.
// Must match mana_convert in config/ars_botania-common.toml and source_rate (its inverse) in pond/runicForge helpers.

const MANA_PER_SOURCE = 2

// Tier order is Hobbyist -> ... -> Sage -> PROPHET -> ASCENDANT. Ascendant consumes Prophet's
// outputs (ascendant.js builds from draconic_sanguinary/sanctum/dracontine_codex/
// chronicle_of_dominion), so Prophet is the cheaper of the two. Both were previously listed the
// other way round, which inverted the curve at the two hardest tiers in the pack.
const Source = {
    HOBBYIST: 100,
    APPRENTICE: 250,
    JOURNEYMAN: 500,
    INITIATE: 1000,
    SORCERER: 2000,
    ALCHEMIST: 4000,
    THAUMATURGE: 8000,
    ARCANIST: 16000,
    SAGE: 32000,
    PROPHET: 64000,
    ASCENDANT: 128000
}

const Mana = {}
for (let tier in Source) {
    Mana[tier] = Source[tier] * MANA_PER_SOURCE
}

global.Source = Source
global.Mana = Mana

// Blood Magic Life Essence (LP) cost per magic tier. Replaces Source/Mana once tier files migrate
// off Ars Nouveau (magic rework Phase 1+). Placeholder scale pending in-game LP generation rate
// verification (Blood Magic altar/sacrifice/Well of Suffering throughput is a code constant, not
// in datapack JSON).
// Same ordering rule as Source above. Monotonic through the whole tree -- Prophet and Ascendant
// used to sit BELOW Sage (65k and 95k against Sage's 100k) despite being the two tiers after it.
// Rough shape: ~2x per tier early, tapering to ~1.5x once Blood Altar throughput scales.
const LP = {
    HOBBYIST: 500,
    APPRENTICE: 1500,
    JOURNEYMAN: 3000,
    INITIATE: 6000,
    SORCERER: 12000,
    ALCHEMIST: 20000,
    THAUMATURGE: 35000,
    ARCANIST: 55000,
    SAGE: 100000,
    PROPHET: 160000,
    ASCENDANT: 250000
}

global.LP = LP
