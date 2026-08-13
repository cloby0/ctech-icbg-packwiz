// priority: 1000000
// icbg_core capability/ability class loaders, shared by every magic multiblock in this directory.
// startup_scripts share one scope -- redeclaring `const IcbgPartAbilities`/`const ManaCap` per file
// crashed load with "redeclaration of const IcbgPartAbilities" once 3 files did it. One canonical
// global here. GTCEuStartupEvents.registry() callbacks fire deferred, after all startup_scripts
// finish loading, so bare references don't resolve -- consumers must use global.X explicitly.
// See docs/claude/specs/mana-capability-port.md.
//
// Store resolved static field VALUES, not the Class object. `global` is a plain Java HashMap
// (KubeJS BuiltinKubeJSPlugin.GLOBAL) -- a Class retrieved back out of it gets rewrapped by Rhino
// as a NativeJavaObject instance of java.lang.Class, not a NativeJavaClass, so `.FIELD` on the
// retrieved value silently resolves to undefined/null instead of the static field. Only field
// access performed directly on the Java.loadClass() result (never round-tripped through the map
// first) works. Broke recipeModifiers([...null, null]) crashes in 12 consumer files 2026-08-13.
global.IcbgPartAbilities = Java.loadClass('com.icbg.core.registry.IcbgPartAbilities')
global.IcbgManaSpeedInputAbility = Java.loadClass('com.icbg.core.registry.IcbgPartAbilities').MANA_SPEED_INPUT
global.IcbgLpParallelBoostAbility = Java.loadClass('com.icbg.core.registry.IcbgPartAbilities').LP_PARALLEL_BOOST
global.IcbgRecipeModifiers = Java.loadClass('com.icbg.core.registry.IcbgRecipeModifiers')
global.IcbgManaSpeedModifier = Java.loadClass('com.icbg.core.registry.IcbgRecipeModifiers').MANA_SPEED
global.IcbgLpParallelModifier = Java.loadClass('com.icbg.core.registry.IcbgRecipeModifiers').LP_PARALLEL
global.ManaCap = Java.loadClass('com.icbg.core.recipe.mana.ManaRecipeCapability').CAP
global.LpCap = Java.loadClass('com.icbg.core.recipe.lp.LpRecipeCapability').CAP
