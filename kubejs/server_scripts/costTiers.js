// priority: 10
// Source cost per magic tier, GTValues-style. Server scripts share one scope, so these tables are
// visible in every server script. Declare them nowhere else.

// icbg_core capability loaders. Redeclaring these per-file crashed startup_scripts on load
// (const IcbgPartAbilities in 3 files, const ManaCap in 2, all top-level and sharing scope) --
// server_scripts had the same bug waiting (ManaCap top-level in both manaPondRecipes.js and
// runicForgeRecipes.js). One canonical global here, referenced bare everywhere else, same as
// ManaPool/RunicAltar/Agglomeration below.
global.ManaCap = Java.loadClass('com.icbg.core.recipe.mana.ManaRecipeCapability').CAP
global.LpCap = Java.loadClass('com.icbg.core.recipe.lp.LpRecipeCapability').CAP

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

global.Source = Source

// Botania mana. One table per handler, because Botania's three handlers occupy three different
// cost bands and a single table flattens them. Bands below are the mod's own, read out of
// Botania-452 / ExtraBotany-1.9.2 recipe JSON:
//   mana_infusion (Mana Pool)   25 - 90 000      (manasteel 3 000, mana diamond 10 000)
//   runic_altar                 5 200 - 22 500
//   terra_plate                 500 000 - 4 000 000  (terrasteel 500 000)
// The old single `Mana` table was Source * 2, i.e. 200 - 256 000, which priced terrestrial
// agglomeration below a vanilla mana-pool infusion.

// Mana Pool infusion. Apprentice anchors on vanilla manasteel (3 000); Sage on the vanilla
// mana_infusion ceiling (90 000).
const ManaPool = {
    HOBBYIST: 1500,
    APPRENTICE: 3000,
    JOURNEYMAN: 6000,
    INITIATE: 10000,
    SORCERER: 16000,
    ALCHEMIST: 25000,
    THAUMATURGE: 40000,
    ARCANIST: 60000,
    SAGE: 90000,
    PROPHET: 130000,
    ASCENDANT: 180000
}

// Runic Altar. Hobbyist anchors on the vanilla rune floor (5 200), Initiate on its ceiling
// (22 500); past that the pack is off the end of Botania's own ladder.
const RunicAltar = {
    HOBBYIST: 5000,
    APPRENTICE: 8000,
    JOURNEYMAN: 12000,
    INITIATE: 18000,
    SORCERER: 25000,
    ALCHEMIST: 35000,
    THAUMATURGE: 50000,
    ARCANIST: 70000,
    SAGE: 100000,
    PROPHET: 150000,
    ASCENDANT: 200000
}

// Terrestrial Agglomeration. Journeyman anchors on vanilla terrasteel (500 000 = half a mana
// pool); Sage on ExtraBotany's rhein_hammer ceiling (4 000 000). Ascendant tops out at 8 pools.
const Agglomeration = {
    HOBBYIST: 250000,
    APPRENTICE: 350000,
    JOURNEYMAN: 500000,
    INITIATE: 750000,
    SORCERER: 1000000,
    ALCHEMIST: 1500000,
    THAUMATURGE: 2000000,
    ARCANIST: 3000000,
    SAGE: 4000000,
    PROPHET: 6000000,
    ASCENDANT: 8000000
}

global.ManaPool = ManaPool
global.RunicAltar = RunicAltar
global.Agglomeration = Agglomeration

// Reverse-look a mana value against its own cost table (ManaPool/RunicAltar/Agglomeration) to find
// the magic tier it belongs to, then map that tier to the GT voltage the pack already treats as its
// analog (docs/claude/balance.md §4c). Used to price the mana_pond/runic_forge/terra_agglomeration
// mirrors' EU off the recipe's own tier instead of one hardcoded voltage floor -- see
// docs/claude/specs/mana-capability-port.md §4b. Prophet/Ascendant have no analog in that table;
// UHV/UEV continue the same ladder one step at a time, since both are already post-UV in every
// other pack table.
const TIER_ORDER = ['HOBBYIST', 'APPRENTICE', 'JOURNEYMAN', 'INITIATE', 'SORCERER', 'ALCHEMIST', 'THAUMATURGE', 'ARCANIST', 'SAGE', 'PROPHET', 'ASCENDANT']
const TIER_VOLTAGE = {
    HOBBYIST: 'LV', APPRENTICE: 'LV', JOURNEYMAN: 'MV', INITIATE: 'HV', SORCERER: 'EV',
    ALCHEMIST: 'IV', THAUMATURGE: 'LuV', ARCANIST: 'ZPM', SAGE: 'UV', PROPHET: 'UHV', ASCENDANT: 'UEV'
}
function magicTierForMana(mana, table) {
    let tier = 'HOBBYIST'
    for (let i = 0; i < TIER_ORDER.length; i++) {
        if (mana >= table[TIER_ORDER[i]]) tier = TIER_ORDER[i]
        else break
    }
    return tier
}
function euForMana(mana, table) {
    return GTValues.VA[GTValues[TIER_VOLTAGE[magicTierForMana(mana, table)]]]
}
global.euForMana = euForMana

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
