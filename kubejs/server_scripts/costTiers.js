// priority: 10
// Source cost per magic tier, GTValues-style. Mana (botania) mirrors Source via MANA_PER_SOURCE.
// Server scripts share one scope, so Source/Mana are visible in every server script. Declare them nowhere else.
// Must match mana_convert in config/ars_botania-common.toml and source_rate (its inverse) in pond/runicForge helpers.

const MANA_PER_SOURCE = 2

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
    ASCENDANT: 64000,
    PROPHET: 128000
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
    PROPHET: 65000,
    ASCENDANT: 95000
}

global.LP = LP
