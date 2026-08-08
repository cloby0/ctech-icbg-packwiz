// priority: -1000000
// icbg_core capability/ability class loaders, shared by every magic multiblock in this directory.
// startup_scripts share one scope -- redeclaring `const IcbgPartAbilities`/`const ManaCap` per file
// crashed load with "redeclaration of const IcbgPartAbilities" once 3 files did it. One canonical
// global here, referenced bare everywhere else. See docs/claude/specs/mana-capability-port.md.
global.IcbgPartAbilities = Java.loadClass('com.icbg.core.registry.IcbgPartAbilities')
global.ManaCap = Java.loadClass('com.icbg.core.recipe.mana.ManaRecipeCapability').CAP
global.LpCap = Java.loadClass('com.icbg.core.recipe.lp.LpRecipeCapability').CAP
