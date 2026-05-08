declare module "dev.latvian.mods.rhino.mod.util.color.Color" {
import { $SpecialEquality } from "dev.latvian.mods.rhino.util.SpecialEquality"
import { $TextColor } from "net.minecraft.network.chat.TextColor"

export interface $Color extends $SpecialEquality {
"createTextColorJS"(): $TextColor
"getArgbJS"(): integer
"getFireworkColorJS"(): integer
"getHexJS"(): string
"getRgbJS"(): integer
"getSerializeJS"(): string
"specialEquals"(o: any, shallow: boolean): boolean
get "argbJS"(): integer
get "fireworkColorJS"(): integer
get "hexJS"(): string
get "rgbJS"(): integer
get "serializeJS"(): string
}

export namespace $Color {
function checkSpecialEquality(o: any, o1: any, shallow: boolean): boolean
}
export abstract class $Color$$Static implements $Color {
static "checkSpecialEquality"(o: any, o1: any, shallow: boolean): boolean
}
}

declare module "dev.latvian.mods.rhino.ExternalArrayData" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $ExternalArrayData {
"getArrayElement"(int0: integer): any
"getArrayLength"(): integer
"setArrayElement"(int0: integer, object1: any): void
get "arrayLength"(): integer
}

export namespace $ExternalArrayData {
const probejs$$marker: never
}
export abstract class $ExternalArrayData$$Static implements $ExternalArrayData {
}
}

declare module "dev.latvian.mods.rhino.BaseFunction" {
import { $Consumer$$Type } from "java.util.function.Consumer"
import { $Context$$Type } from "dev.latvian.mods.rhino.Context"
import { $Function } from "dev.latvian.mods.rhino.Function"
import { $Scriptable, $Scriptable$$Type } from "dev.latvian.mods.rhino.Scriptable"
import { $Class$$Type } from "java.lang.Class"
import { $IdScriptableObject } from "dev.latvian.mods.rhino.IdScriptableObject"

export class $BaseFunction extends $IdScriptableObject implements $Function {
constructor()
constructor(isGenerator: boolean)
constructor(scope: $Scriptable$$Type, prototype: $Scriptable$$Type)

public "call"(cx: $Context$$Type, scope: $Scriptable$$Type, thisObj: $Scriptable$$Type, args: any[]): any
public "construct"(cx: $Context$$Type, scope: $Scriptable$$Type, args: any[]): $Scriptable
public "createObject"(cx: $Context$$Type, scope: $Scriptable$$Type): $Scriptable
public "delete"(context0: $Context$$Type, int1: integer): void
public "enumerationIteratorHasNext"(cx: $Context$$Type, currentId: $Consumer$$Type<any>): boolean
public "enumerationIteratorNext"(cx: $Context$$Type, currentId: $Consumer$$Type<any>): boolean
public "get"(context0: $Context$$Type, int1: integer, scriptable2: $Scriptable$$Type): any
public "getAllIds"(cx: $Context$$Type): any[]
public "getArity"(): integer
public "getDefaultValue"(context0: $Context$$Type, class1: $Class$$Type<any>): any
public "getFunctionName"(): string
public "getIds"(context0: $Context$$Type): any[]
public "getLength"(): integer
public "getParentScope"(): $Scriptable
public "getPrototype"(context0: $Context$$Type): $Scriptable
public "has"(context0: $Context$$Type, int1: integer, scriptable2: $Scriptable$$Type): boolean
public "put"(context0: $Context$$Type, int1: integer, scriptable2: $Scriptable$$Type, object3: any): void
public "setImmunePrototypeProperty"(value: any): void
public "setParentScope"(scriptable0: $Scriptable$$Type): void
public "setPrototype"(scriptable0: $Scriptable$$Type): void
get "arity"(): integer
get "functionName"(): string
get "length"(): integer
get "parentScope"(): $Scriptable
set "immunePrototypeProperty"(value: any)
set "parentScope"(value: $Scriptable$$Type)
set "prototype"(value: $Scriptable$$Type)
}
}

declare module "dev.latvian.mods.rhino.WrappedExecutable" {
import { $Context$$Type } from "dev.latvian.mods.rhino.Context"
import { $Executable } from "java.lang.reflect.Executable"
import { $Scriptable$$Type } from "dev.latvian.mods.rhino.Scriptable"
import { $Class } from "java.lang.Class"

export interface $WrappedExecutable {
"construct"(cx: $Context$$Type, scope: $Scriptable$$Type, args: any[]): any
"getReturnType"(): $Class<any>
"invoke"(context0: $Context$$Type, scriptable1: $Scriptable$$Type, object2: any, object3s: any[]): any
"isStatic"(): boolean
"unwrap"(): $Executable
get "returnType"(): $Class<any>
get "static"(): boolean
}

export namespace $WrappedExecutable {
const probejs$$marker: never
}
export abstract class $WrappedExecutable$$Static implements $WrappedExecutable {
}
}

declare module "dev.latvian.mods.rhino.Script" {
import { $Context$$Type } from "dev.latvian.mods.rhino.Context"
import { $Scriptable$$Type } from "dev.latvian.mods.rhino.Scriptable"

export interface $Script {
"exec"(context0: $Context$$Type, scriptable1: $Scriptable$$Type): any
}

export namespace $Script {
const probejs$$marker: never
}
export abstract class $Script$$Static implements $Script {
}
}

declare module "dev.latvian.mods.rhino.util.wrap.TypeWrappers" {
import { $Predicate$$Type } from "java.util.function.Predicate"
import { $TypeWrapperFactory, $TypeWrapperFactory$$Type } from "dev.latvian.mods.rhino.util.wrap.TypeWrapperFactory"
import { $Class$$Type } from "java.lang.Class"
import { $TypeWrapperFactory$Simple$$Type } from "dev.latvian.mods.rhino.util.wrap.TypeWrapperFactory$Simple"

export class $TypeWrappers {
constructor()

public "getWrapperFactory"(target: $Class$$Type<any>, from: any): $TypeWrapperFactory<any>
public "register"<T>(target: $Class$$Type<T>, validator: $Predicate$$Type<any>, factory: $TypeWrapperFactory$$Type<T>): void
public "register"<T>(target: $Class$$Type<T>, factory: $TypeWrapperFactory$$Type<T>): void
public "registerSimple"<T>(target: $Class$$Type<T>, factory: $TypeWrapperFactory$Simple$$Type<T>): void
public "registerSimple"<T>(target: $Class$$Type<T>, validator: $Predicate$$Type<any>, factory: $TypeWrapperFactory$Simple$$Type<T>): void
}
}

declare module "dev.latvian.mods.rhino.mod.util.OrderedCompoundTag" {
import { $Tag, $Tag$$Type } from "net.minecraft.nbt.Tag"
import { $CompoundTag } from "net.minecraft.nbt.CompoundTag"
import { $StreamTagVisitor$$Type } from "net.minecraft.nbt.StreamTagVisitor"
import { $Map, $Map$$Type } from "java.util.Map"

export class $OrderedCompoundTag extends $CompoundTag {
readonly "tagMap": $Map<string, $Tag>

constructor()
constructor(map: $Map$$Type<string, $Tag$$Type>)

public "acceptAsRoot"(streamTagVisitor0: $StreamTagVisitor$$Type): void
public "getAsString"(): string
get "asString"(): string
}
}

declare module "dev.latvian.mods.rhino.EvaluatorException" {
import { $RhinoException } from "dev.latvian.mods.rhino.RhinoException"
import { $Context$$Type } from "dev.latvian.mods.rhino.Context"

export class $EvaluatorException extends $RhinoException {
constructor(cx: $Context$$Type, detail: string)
constructor(cx: $Context$$Type, detail: string, sourceName: string, lineNumber: integer)
constructor(cx: $Context$$Type, detail: string, sourceName: string, lineNumber: integer, lineSource: string, columnNumber: integer)

}
}

declare module "dev.latvian.mods.rhino.util.wrap.TypeWrapperFactory" {
import { $Context$$Type } from "dev.latvian.mods.rhino.Context"

export interface $TypeWrapperFactory<T = any> {
"wrap"(context0: $Context$$Type, object1: any): T
}

export namespace $TypeWrapperFactory {
const probejs$$marker: never
}
export abstract class $TypeWrapperFactory$$Static<T = any> implements $TypeWrapperFactory<T> {
}
}

declare module "dev.latvian.mods.rhino.mod.wrapper.ColorWrapper" {
import { $DyeColor } from "net.minecraft.world.item.DyeColor"
import { $ChatFormatting } from "net.minecraft.ChatFormatting"
import { $Map } from "java.util.Map"
import { $Color } from "dev.latvian.mods.rhino.mod.util.color.Color"

export interface $ColorWrapper {
}

export namespace $ColorWrapper {
const AQUA: $Color
const BLACK: $Color
const BLACK_DYE: $Color
const BLUE: $Color
const BLUE_DYE: $Color
const BROWN_DYE: $Color
const CYAN_DYE: $Color
const DARK_AQUA: $Color
const DARK_BLUE: $Color
const DARK_GRAY: $Color
const DARK_GREEN: $Color
const DARK_PURPLE: $Color
const DARK_RED: $Color
const DYE: $Map<string, $DyeColor>
const GOLD: $Color
const GRAY: $Color
const GRAY_DYE: $Color
const GREEN: $Color
const GREEN_DYE: $Color
const LIGHT_BLUE_DYE: $Color
const LIGHT_GRAY_DYE: $Color
const LIGHT_PURPLE: $Color
const LIME_DYE: $Color
const MAGENTA_DYE: $Color
const MAP: $Map<string, $Color>
const NONE: $Color
const ORANGE_DYE: $Color
const PINK_DYE: $Color
const PURPLE_DYE: $Color
const RED: $Color
const RED_DYE: $Color
const TEXT: $Map<string, $ChatFormatting>
const WHITE: $Color
const WHITE_DYE: $Color
const YELLOW: $Color
const YELLOW_DYE: $Color
function createMapped(o: any, ...names: string[]): $Color
function of(o: any): $Color
function rgba(r: integer, g: integer, b: integer, a: integer): $Color
}
export abstract class $ColorWrapper$$Static implements $ColorWrapper {
static readonly "AQUA": $Color
static readonly "BLACK": $Color
static readonly "BLACK_DYE": $Color
static readonly "BLUE": $Color
static readonly "BLUE_DYE": $Color
static readonly "BROWN_DYE": $Color
static readonly "CYAN_DYE": $Color
static readonly "DARK_AQUA": $Color
static readonly "DARK_BLUE": $Color
static readonly "DARK_GRAY": $Color
static readonly "DARK_GREEN": $Color
static readonly "DARK_PURPLE": $Color
static readonly "DARK_RED": $Color
static readonly "DYE": $Map<string, $DyeColor>
static readonly "GOLD": $Color
static readonly "GRAY": $Color
static readonly "GRAY_DYE": $Color
static readonly "GREEN": $Color
static readonly "GREEN_DYE": $Color
static readonly "LIGHT_BLUE_DYE": $Color
static readonly "LIGHT_GRAY_DYE": $Color
static readonly "LIGHT_PURPLE": $Color
static readonly "LIME_DYE": $Color
static readonly "MAGENTA_DYE": $Color
static readonly "MAP": $Map<string, $Color>
static readonly "NONE": $Color
static readonly "ORANGE_DYE": $Color
static readonly "PINK_DYE": $Color
static readonly "PURPLE_DYE": $Color
static readonly "RED": $Color
static readonly "RED_DYE": $Color
static readonly "TEXT": $Map<string, $ChatFormatting>
static readonly "WHITE": $Color
static readonly "WHITE_DYE": $Color
static readonly "YELLOW": $Color
static readonly "YELLOW_DYE": $Color

static "createMapped"(o: any, ...names: string[]): $Color
static "of"(o: any): $Color
static "rgba"(r: integer, g: integer, b: integer, a: integer): $Color
}
}

declare module "dev.latvian.mods.rhino.IdEnumerationIterator" {
import { $Consumer$$Type } from "java.util.function.Consumer"
import { $Context$$Type } from "dev.latvian.mods.rhino.Context"

export interface $IdEnumerationIterator {
"enumerationIteratorHasNext"(context0: $Context$$Type, consumer1: $Consumer$$Type<any>): boolean
"enumerationIteratorNext"(context0: $Context$$Type, consumer1: $Consumer$$Type<any>): boolean
}

export namespace $IdEnumerationIterator {
const probejs$$marker: never
}
export abstract class $IdEnumerationIterator$$Static implements $IdEnumerationIterator {
}
}

declare module "dev.latvian.mods.rhino.Callable" {
import { $Context$$Type } from "dev.latvian.mods.rhino.Context"
import { $Scriptable$$Type } from "dev.latvian.mods.rhino.Scriptable"

export interface $Callable {
"call"(context0: $Context$$Type, scriptable1: $Scriptable$$Type, scriptable2: $Scriptable$$Type, object3s: any[]): any
}

export namespace $Callable {
const probejs$$marker: never
}
export abstract class $Callable$$Static implements $Callable {
}
}

declare module "dev.latvian.mods.rhino.Scriptable" {
import { $Consumer$$Type } from "java.util.function.Consumer"
import { $Context$$Type } from "dev.latvian.mods.rhino.Context"
import { $MemberType } from "dev.latvian.mods.rhino.MemberType"
import { $IdEnumerationIterator } from "dev.latvian.mods.rhino.IdEnumerationIterator"
import { $Class$$Type } from "java.lang.Class"

export interface $Scriptable extends $IdEnumerationIterator {
"delete"(context0: $Context$$Type, int1: integer): void
"delete"(context0: $Context$$Type, string1: string): void
"enumerationIteratorHasNext"(cx: $Context$$Type, currentId: $Consumer$$Type<any>): boolean
"enumerationIteratorNext"(cx: $Context$$Type, currentId: $Consumer$$Type<any>): boolean
"get"(context0: $Context$$Type, int1: integer, scriptable2: $Scriptable$$Type): any
"get"(context0: $Context$$Type, string1: string, scriptable2: $Scriptable$$Type): any
"getAllIds"(cx: $Context$$Type): any[]
"getClassName"(): string
"getDefaultValue"(context0: $Context$$Type, class1: $Class$$Type<any>): any
"getIds"(context0: $Context$$Type): any[]
"getParentScope"(): $Scriptable
"getPrototype"(context0: $Context$$Type): $Scriptable
"getTypeOf"(): $MemberType
"has"(context0: $Context$$Type, string1: string, scriptable2: $Scriptable$$Type): boolean
"has"(context0: $Context$$Type, int1: integer, scriptable2: $Scriptable$$Type): boolean
"hasInstance"(context0: $Context$$Type, scriptable1: $Scriptable$$Type): boolean
"put"(context0: $Context$$Type, string1: string, scriptable2: $Scriptable$$Type, object3: any): void
"put"(context0: $Context$$Type, int1: integer, scriptable2: $Scriptable$$Type, object3: any): void
"setParentScope"(scriptable0: $Scriptable$$Type): void
"setPrototype"(scriptable0: $Scriptable$$Type): void
get "className"(): string
get "parentScope"(): $Scriptable
get "typeOf"(): $MemberType
set "parentScope"(value: $Scriptable$$Type)
set "prototype"(value: $Scriptable$$Type)
}

export namespace $Scriptable {
const NOT_FOUND: any
}
export abstract class $Scriptable$$Static implements $Scriptable {
static readonly "NOT_FOUND": any

}
}

declare module "dev.latvian.mods.rhino.mod.util.Object2LongEntry" {
import { $Object2LongMap$Entry$$Type } from "it.unimi.dsi.fastutil.objects.Object2LongMap$Entry"
import { $Comparable } from "java.lang.Comparable"

export class $Object2LongEntry implements $Comparable<$Object2LongEntry> {
readonly "key": any
readonly "value": long

constructor(k: any, v: long)
constructor(entry: $Object2LongMap$Entry$$Type<any>)

public "compareTo"(o: $Object2LongEntry$$Type): integer
}
}

declare module "dev.latvian.mods.rhino.NativeJavaObject" {
import { $Consumer$$Type } from "java.util.function.Consumer"
import { $Wrapper } from "dev.latvian.mods.rhino.Wrapper"
import { $Context$$Type } from "dev.latvian.mods.rhino.Context"
import { $SymbolScriptable } from "dev.latvian.mods.rhino.SymbolScriptable"
import { $MemberType } from "dev.latvian.mods.rhino.MemberType"
import { $Scriptable, $Scriptable$$Type } from "dev.latvian.mods.rhino.Scriptable"
import { $Class$$Type } from "java.lang.Class"
import { $CustomProperty$$Type } from "dev.latvian.mods.rhino.CustomProperty"
import { $ScriptableObject$$Type } from "dev.latvian.mods.rhino.ScriptableObject"
import { $Symbol$$Type } from "dev.latvian.mods.rhino.Symbol"

export class $NativeJavaObject implements $Scriptable, $SymbolScriptable, $Wrapper {
constructor()
constructor(scope: $Scriptable$$Type, javaObject: any, staticType: $Class$$Type<any>, cx: $Context$$Type)
constructor(scope: $Scriptable$$Type, javaObject: any, staticType: $Class$$Type<any>, isAdapter: boolean, cx: $Context$$Type)

public "addCustomProperty"(name: string, getter: $CustomProperty$$Type): void
public static "canConvert"(cx: $Context$$Type, fromObj: any, to: $Class$$Type<any>): boolean
public static "createInterfaceAdapter"(cx: $Context$$Type, type: $Class$$Type<any>, so: $ScriptableObject$$Type): any
public "delete"(cx: $Context$$Type, name: string): void
public "delete"(cx: $Context$$Type, key: $Symbol$$Type): void
public "delete"(cx: $Context$$Type, index: integer): void
public "enumerationIteratorHasNext"(cx: $Context$$Type, currentId: $Consumer$$Type<any>): boolean
public "enumerationIteratorNext"(cx: $Context$$Type, currentId: $Consumer$$Type<any>): boolean
public "get"(cx: $Context$$Type, index: integer, start: $Scriptable$$Type): any
public "get"(cx: $Context$$Type, name: string, start: $Scriptable$$Type): any
public "get"(cx: $Context$$Type, key: $Symbol$$Type, start: $Scriptable$$Type): any
public "getAllIds"(cx: $Context$$Type): any[]
public "getClassName"(): string
public "getDefaultValue"(cx: $Context$$Type, hint: $Class$$Type<any>): any
public "getIds"(cx: $Context$$Type): any[]
public "getParentScope"(): $Scriptable
public "getPrototype"(cx: $Context$$Type): $Scriptable
public "getTypeOf"(): $MemberType
public "has"(cx: $Context$$Type, name: string, start: $Scriptable$$Type): boolean
public "has"(cx: $Context$$Type, key: $Symbol$$Type, start: $Scriptable$$Type): boolean
public "has"(cx: $Context$$Type, index: integer, start: $Scriptable$$Type): boolean
public "hasInstance"(cx: $Context$$Type, value: $Scriptable$$Type): boolean
public "put"(cx: $Context$$Type, name: string, start: $Scriptable$$Type, value: any): void
public "put"(cx: $Context$$Type, index: integer, start: $Scriptable$$Type, value: any): void
public "put"(cx: $Context$$Type, symbol: $Symbol$$Type, start: $Scriptable$$Type, value: any): void
public "setParentScope"(m: $Scriptable$$Type): void
public "setPrototype"(m: $Scriptable$$Type): void
public "unwrap"(): any
public static "unwrapped"(o: any): any
get "className"(): string
get "parentScope"(): $Scriptable
get "typeOf"(): $MemberType
set "parentScope"(value: $Scriptable$$Type)
set "prototype"(value: $Scriptable$$Type)
}
}

declare module "dev.latvian.mods.rhino.mod.wrapper.DirectionWrapper" {
import { $Direction } from "net.minecraft.core.Direction"
import { $Map } from "java.util.Map"

export interface $DirectionWrapper {
}

export namespace $DirectionWrapper {
const ALL: $Map<string, $Direction>
const DOWN: $Direction
const EAST: $Direction
const NORTH: $Direction
const SOUTH: $Direction
const UP: $Direction
const WEST: $Direction
const down: $Direction
const east: $Direction
const north: $Direction
const south: $Direction
const up: $Direction
const west: $Direction
}
export abstract class $DirectionWrapper$$Static implements $DirectionWrapper {
static readonly "ALL": $Map<string, $Direction>
static readonly "DOWN": $Direction
static readonly "EAST": $Direction
static readonly "NORTH": $Direction
static readonly "SOUTH": $Direction
static readonly "UP": $Direction
static readonly "WEST": $Direction
static readonly "down": $Direction
static readonly "east": $Direction
static readonly "north": $Direction
static readonly "south": $Direction
static readonly "up": $Direction
static readonly "west": $Direction

}
}

declare module "dev.latvian.mods.rhino.IdScriptableObject" {
import { $Consumer$$Type } from "java.util.function.Consumer"
import { $Context$$Type } from "dev.latvian.mods.rhino.Context"
import { $IdFunctionObject, $IdFunctionObject$$Type } from "dev.latvian.mods.rhino.IdFunctionObject"
import { $IdFunctionCall } from "dev.latvian.mods.rhino.IdFunctionCall"
import { $Scriptable$$Type } from "dev.latvian.mods.rhino.Scriptable"
import { $Symbol$$Type } from "dev.latvian.mods.rhino.Symbol"
import { $ScriptableObject } from "dev.latvian.mods.rhino.ScriptableObject"

export class $IdScriptableObject extends $ScriptableObject implements $IdFunctionCall {
constructor()
constructor(scope: $Scriptable$$Type, prototype: $Scriptable$$Type)

public "activatePrototypeMap"(maxPrototypeId: integer): void
public "enumerationIteratorHasNext"(cx: $Context$$Type, currentId: $Consumer$$Type<any>): boolean
public "enumerationIteratorNext"(cx: $Context$$Type, currentId: $Consumer$$Type<any>): boolean
public "execIdCall"(f: $IdFunctionObject$$Type, cx: $Context$$Type, scope: $Scriptable$$Type, thisObj: $Scriptable$$Type, args: any[]): any
public "exportAsJSClass"(maxPrototypeId: integer, scope: $Scriptable$$Type, sealed: boolean, cx: $Context$$Type): $IdFunctionObject
public "hasPrototypeMap"(): boolean
public "initPrototypeConstructor"(f: $IdFunctionObject$$Type, cx: $Context$$Type): void
public "initPrototypeMethod"(tag: any, id: integer, key: $Symbol$$Type, functionName: string, arity: integer, cx: $Context$$Type): $IdFunctionObject
public "initPrototypeMethod"(tag: any, id: integer, propertyName: string, functionName: string, arity: integer, cx: $Context$$Type): $IdFunctionObject
public "initPrototypeMethod"(tag: any, id: integer, name: string, arity: integer, cx: $Context$$Type): $IdFunctionObject
public "initPrototypeValue"(id: integer, key: $Symbol$$Type, value: any, attributes: integer): void
public "initPrototypeValue"(id: integer, name: string, value: any, attributes: integer): void
}
}

declare module "dev.latvian.mods.rhino.Context" {
import { $Throwable$$Type } from "java.lang.Throwable"
import { $RegExp } from "dev.latvian.mods.rhino.regexp.RegExp"
import { $GeneratedClassLoader } from "dev.latvian.mods.rhino.GeneratedClassLoader"
import { $Predicate$$Type } from "java.util.function.Predicate"
import { $CustomJavaToJsWrapperProvider$$Type } from "dev.latvian.mods.rhino.util.CustomJavaToJsWrapperProvider"
import { $CustomJavaToJsWrapper } from "dev.latvian.mods.rhino.util.CustomJavaToJsWrapper"
import { $Scriptable, $Scriptable$$Type } from "dev.latvian.mods.rhino.Scriptable"
import { $Reader$$Type } from "java.io.Reader"
import { $WrapFactory, $WrapFactory$$Type } from "dev.latvian.mods.rhino.WrapFactory"
import { $RuntimeException } from "java.lang.RuntimeException"
import { $EvaluatorException } from "dev.latvian.mods.rhino.EvaluatorException"
import { $Script } from "dev.latvian.mods.rhino.Script"
import { $ClassShutter, $ClassShutter$$Type } from "dev.latvian.mods.rhino.ClassShutter"
import { $ScriptableObject, $ScriptableObject$$Type } from "dev.latvian.mods.rhino.ScriptableObject"
import { $ErrorReporter } from "dev.latvian.mods.rhino.ErrorReporter"
import { $Remapper, $Remapper$$Type } from "dev.latvian.mods.rhino.util.Remapper"
import { $TypeWrappers } from "dev.latvian.mods.rhino.util.wrap.TypeWrappers"
import { $Class$$Type } from "java.lang.Class"
import { $Callable$$Type } from "dev.latvian.mods.rhino.Callable"
import { $ClassLoader, $ClassLoader$$Type } from "java.lang.ClassLoader"

export class $Context {
readonly "lock": any

public "addCustomJavaToJsWrapper"<T>(predicate: $Predicate$$Type<T>, provider: $CustomJavaToJsWrapperProvider$$Type<T>): void
public "addCustomJavaToJsWrapper"<T>(type: $Class$$Type<T>, provider: $CustomJavaToJsWrapperProvider$$Type<T>): void
public "addToScope"(scope: $Scriptable$$Type, name: string, value: any): void
public "callSync"(callable: $Callable$$Type, scope: $Scriptable$$Type, thisObj: $Scriptable$$Type, args: any[]): any
public "compileReader"(in_: $Reader$$Type, sourceName: string, lineno: integer, securityDomain: any): $Script
public "compileString"(source: string, sourceName: string, lineno: integer, securityDomain: any): $Script
public "createClassLoader"(parent: $ClassLoader$$Type): $GeneratedClassLoader
public "doTopCall"(scope: $Scriptable$$Type, callable: $Callable$$Type, thisObj: $Scriptable$$Type, args: any[], isTopLevelStrict: boolean): any
public static "enter"(): $Context
public "evaluateReader"(scope: $Scriptable$$Type, in_: $Reader$$Type, sourceName: string, lineno: integer, securityDomain: any): any
public "evaluateString"(scope: $Scriptable$$Type, source: string, sourceName: string, lineno: integer, securityDomain: any): any
public "getApplicationClassLoader"(): $ClassLoader
public "getClassShutter"(): $ClassShutter
public "getErrorReporter"(): $ErrorReporter
public "getImplementationVersion"(): string
public "getInstructionObserverThreshold"(): integer
public "getMaximumInterpreterStackDepth"(): integer
public "getProperty"<T>(key: string, def: T): T
public "getProperty"(key: string): any
public "getRegExp"(): $RegExp
public "getRemapper"(): $Remapper
public static "getSourcePositionFromStack"(cx: $Context$$Type, linep: integer[]): string
public "getThreadLocal"(key: any): any
public "getTopCallOrThrow"(): $Scriptable
public "getTopCallScope"(): $Scriptable
public "getTypeWrappers"(): $TypeWrappers
public static "getUndefinedValue"(): any
public "getWrapFactory"(): $WrapFactory
public "hasTopCallScope"(): boolean
public "hasTypeWrappers"(): boolean
public "initSafeStandardObjects"(scope: $ScriptableObject$$Type, sealed: boolean): $ScriptableObject
public "initSafeStandardObjects"(): $ScriptableObject
public "initSafeStandardObjects"(scope: $ScriptableObject$$Type): $Scriptable
public "initStandardObjects"(scope: $ScriptableObject$$Type): $Scriptable
public "initStandardObjects"(scope: $ScriptableObject$$Type, sealed: boolean): $ScriptableObject
public "initStandardObjects"(): $ScriptableObject
public "isStrictMode"(): boolean
public static "javaToJS"(cx: $Context$$Type, value: any, scope: $Scriptable$$Type): any
public static "jsToJava"(cx: $Context$$Type, value: any, desiredType: $Class$$Type<any>): any
public "lastStoredScriptable"(): $Scriptable
public "newArray"(scope: $Scriptable$$Type, length: integer): $Scriptable
public "newArray"(scope: $Scriptable$$Type, elements: any[]): $Scriptable
public "newClassSerialNumber"(): integer
public "newObject"(scope: $Scriptable$$Type, constructorName: string, args: any[]): $Scriptable
public "newObject"(scope: $Scriptable$$Type): $Scriptable
public "newObject"(scope: $Scriptable$$Type, constructorName: string): $Scriptable
public "putThreadLocal"(key: any, value: any): void
public "removeThreadLocal"(key: any): void
public static "reportError"(cx: $Context$$Type, message: string): void
public static "reportError"(cx: $Context$$Type, message: string, lineno: integer, lineSource: string, lineOffset: integer, sourceName: string): void
public static "reportRuntimeError"(message: string, cx: $Context$$Type): $EvaluatorException
public static "reportRuntimeError"(cx: $Context$$Type, message: string, sourceName: string, lineno: integer, lineSource: string, lineOffset: integer): $EvaluatorException
public static "reportRuntimeError0"(messageId: string, cx: $Context$$Type): $EvaluatorException
public static "reportRuntimeError1"(messageId: string, object1: any, cx: $Context$$Type): $EvaluatorException
public static "reportRuntimeError2"(messageId: string, object1: any, object2: any, cx: $Context$$Type): $EvaluatorException
public static "reportRuntimeError3"(messageId: string, object1: any, object2: any, object3: any, cx: $Context$$Type): $EvaluatorException
public static "reportRuntimeError4"(messageId: string, object1: any, object2: any, object3: any, object4: any, cx: $Context$$Type): $EvaluatorException
public static "reportWarning"(message: string, cx: $Context$$Type): void
public static "reportWarning"(cx: $Context$$Type, message: string, sourceName: string, lineno: integer, lineSource: string, lineOffset: integer): void
public "setApplicationClassLoader"(loader: $ClassLoader$$Type): void
public "setClassShutter"(shutter: $ClassShutter$$Type): void
public "setGenerateObserverCount"(generateObserverCount: boolean): void
public "setInstructionObserverThreshold"(threshold: integer): void
public "setMaximumInterpreterStackDepth"(max: integer): void
public "setProperty"(key: string, value: any): void
public "setRemapper"(remapper: $Remapper$$Type): void
public "setTopCall"(scope: $Scriptable$$Type): void
public "setWrapFactory"(wrapFactory: $WrapFactory$$Type): void
public "storeScriptable"(value: $Scriptable$$Type): void
public static "throwAsScriptRuntimeEx"(e: $Throwable$$Type, cx: $Context$$Type): $RuntimeException
public "toBoolean"(value: any): boolean
public "toNumber"(value: any): double
public "toObject"(value: any, scope: $Scriptable$$Type): $Scriptable
public "toString"(value: any): string
public "wrapCustomJavaToJs"(javaObject: any): $CustomJavaToJsWrapper
get "generateObserverCount"(): boolean
set "generateObserverCount"(value: boolean)
get "applicationClassLoader"(): $ClassLoader
get "classShutter"(): $ClassShutter
get "errorReporter"(): $ErrorReporter
get "implementationVersion"(): string
get "instructionObserverThreshold"(): integer
get "maximumInterpreterStackDepth"(): integer
get "regExp"(): $RegExp
get "remapper"(): $Remapper
get "topCallOrThrow"(): $Scriptable
get "topCallScope"(): $Scriptable
get "typeWrappers"(): $TypeWrappers
get "wrapFactory"(): $WrapFactory
get "strictMode"(): boolean
set "applicationClassLoader"(value: $ClassLoader$$Type)
set "classShutter"(value: $ClassShutter$$Type)
set "instructionObserverThreshold"(value: integer)
set "maximumInterpreterStackDepth"(value: integer)
set "remapper"(value: $Remapper$$Type)
set "topCall"(value: $Scriptable$$Type)
set "wrapFactory"(value: $WrapFactory$$Type)
}
}

declare module "dev.latvian.mods.rhino.mod.util.NBTSerializable" {
import { $Tag } from "net.minecraft.nbt.Tag"

export interface $NBTSerializable {
"toNBT"(): $Tag
}

export namespace $NBTSerializable {
const probejs$$marker: never
}
export abstract class $NBTSerializable$$Static implements $NBTSerializable {
}
}

declare module "dev.latvian.mods.rhino.util.Remapper" {
import { $Class$$Type } from "java.lang.Class"
import { $Field$$Type } from "java.lang.reflect.Field"
import { $Method$$Type } from "java.lang.reflect.Method"

export interface $Remapper {
"getMappedClass"(from: $Class$$Type<any>): string
"getMappedField"(from: $Class$$Type<any>, field: $Field$$Type): string
"getMappedMethod"(from: $Class$$Type<any>, method: $Method$$Type): string
"getUnmappedClass"(from: string): string
}

export namespace $Remapper {
function getTypeName(type: string): string
}
export abstract class $Remapper$$Static implements $Remapper {
static "getTypeName"(type: string): string
}
}

declare module "dev.latvian.mods.rhino.MemberType" {
import { $Context$$Type } from "dev.latvian.mods.rhino.Context"
import { $Enum } from "java.lang.Enum"

export class $MemberType extends $Enum<$MemberType> {
static readonly "BOOLEAN": $MemberType
static readonly "FUNCTION": $MemberType
static readonly "NUMBER": $MemberType
static readonly "OBJECT": $MemberType
static readonly "STRING": $MemberType
static readonly "SYMBOL": $MemberType
static readonly "UNDEFINED": $MemberType

public static "get"(value: any, cx: $Context$$Type): $MemberType
public static "valueOf"(name: string): $MemberType
public static "values"(): $MemberType[]
}
}

declare module "dev.latvian.mods.rhino.NativeJavaClass" {
import { $Consumer$$Type } from "java.util.function.Consumer"
import { $Context$$Type } from "dev.latvian.mods.rhino.Context"
import { $MemberType } from "dev.latvian.mods.rhino.MemberType"
import { $Function } from "dev.latvian.mods.rhino.Function"
import { $NativeJavaObject } from "dev.latvian.mods.rhino.NativeJavaObject"
import { $Scriptable, $Scriptable$$Type } from "dev.latvian.mods.rhino.Scriptable"
import { $Class, $Class$$Type } from "java.lang.Class"

export class $NativeJavaClass extends $NativeJavaObject implements $Function {
constructor(cx: $Context$$Type, scope: $Scriptable$$Type, cl: $Class$$Type<any>, isAdapter: boolean)
constructor()
constructor(cx: $Context$$Type, scope: $Scriptable$$Type, cl: $Class$$Type<any>)

public "call"(cx: $Context$$Type, scope: $Scriptable$$Type, thisObj: $Scriptable$$Type, args: any[]): any
public "construct"(cx: $Context$$Type, scope: $Scriptable$$Type, args: any[]): $Scriptable
public "enumerationIteratorHasNext"(cx: $Context$$Type, currentId: $Consumer$$Type<any>): boolean
public "enumerationIteratorNext"(cx: $Context$$Type, currentId: $Consumer$$Type<any>): boolean
public "getAllIds"(cx: $Context$$Type): any[]
public "getClassObject"(): $Class<any>
public "getTypeOf"(): $MemberType
public static "unwrapped"(o: any): any
get "classObject"(): $Class<any>
get "typeOf"(): $MemberType
}
}

declare module "dev.latvian.mods.rhino.util.ValueUnwrapper" {
import { $Context$$Type } from "dev.latvian.mods.rhino.Context"
import { $Scriptable$$Type } from "dev.latvian.mods.rhino.Scriptable"

export interface $ValueUnwrapper {
"unwrap"(context0: $Context$$Type, scriptable1: $Scriptable$$Type, object2: any): any
}

export namespace $ValueUnwrapper {
const DEFAULT: $ValueUnwrapper
}
export abstract class $ValueUnwrapper$$Static implements $ValueUnwrapper {
static readonly "DEFAULT": $ValueUnwrapper

}
}

declare module "dev.latvian.mods.rhino.ConstProperties" {
import { $Context$$Type } from "dev.latvian.mods.rhino.Context"
import { $Scriptable$$Type } from "dev.latvian.mods.rhino.Scriptable"

export interface $ConstProperties {
"defineConst"(context0: $Context$$Type, string1: string, scriptable2: $Scriptable$$Type): void
"isConst"(string0: string): boolean
"putConst"(context0: $Context$$Type, string1: string, scriptable2: $Scriptable$$Type, object3: any): void
}

export namespace $ConstProperties {
const probejs$$marker: never
}
export abstract class $ConstProperties$$Static implements $ConstProperties {
}
}

declare module "dev.latvian.mods.rhino.util.CustomJavaToJsWrapper" {
import { $Context$$Type } from "dev.latvian.mods.rhino.Context"
import { $Scriptable, $Scriptable$$Type } from "dev.latvian.mods.rhino.Scriptable"
import { $Class$$Type } from "java.lang.Class"

export interface $CustomJavaToJsWrapper {
"convertJavaToJs"(context0: $Context$$Type, scriptable1: $Scriptable$$Type, class2: $Class$$Type<any>): $Scriptable
}

export namespace $CustomJavaToJsWrapper {
const probejs$$marker: never
}
export abstract class $CustomJavaToJsWrapper$$Static implements $CustomJavaToJsWrapper {
}
}

declare module "dev.latvian.mods.rhino.ScriptStackElement" {
import { $StringBuilder$$Type } from "java.lang.StringBuilder"

export class $ScriptStackElement {
readonly "fileName": string
readonly "functionName": string
readonly "lineNumber": integer

constructor(fileName: string, functionName: string, lineNumber: integer)

public "renderJavaStyle"(sb: $StringBuilder$$Type): void
public "renderMozillaStyle"(sb: $StringBuilder$$Type): void
}
}

declare module "dev.latvian.mods.rhino.util.SpecialEquality" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $SpecialEquality {
"specialEquals"(o: any, shallow: boolean): boolean
}

export namespace $SpecialEquality {
function checkSpecialEquality(o: any, o1: any, shallow: boolean): boolean
}
export abstract class $SpecialEquality$$Static implements $SpecialEquality {
static "checkSpecialEquality"(o: any, o1: any, shallow: boolean): boolean
}
}

declare module "dev.latvian.mods.rhino.mod.util.JsonSerializable" {
import { $JsonElement } from "com.google.gson.JsonElement"

export interface $JsonSerializable {
"toJson"(): $JsonElement
}

export namespace $JsonSerializable {
const probejs$$marker: never
}
export abstract class $JsonSerializable$$Static implements $JsonSerializable {
}
}

declare module "dev.latvian.mods.rhino.CustomProperty" {
import { $Context$$Type } from "dev.latvian.mods.rhino.Context"

export interface $CustomProperty {
"get"(context0: $Context$$Type): any
}

export namespace $CustomProperty {
const probejs$$marker: never
}
export abstract class $CustomProperty$$Static implements $CustomProperty {
}
}

declare module "dev.latvian.mods.rhino.mod.util.CountingMap" {
import { $Consumer$$Type } from "java.util.function.Consumer"
import { $Object2LongEntry, $Object2LongEntry$$Type } from "dev.latvian.mods.rhino.mod.util.Object2LongEntry"
import { $List } from "java.util.List"
import { $Collection } from "java.util.Collection"
import { $Set } from "java.util.Set"

export class $CountingMap {
constructor()

public "add"(key: any, value: long): long
public "clear"(): void
public "forEach"(forEach: $Consumer$$Type<$Object2LongEntry$$Type>): void
public "get"(key: any): long
public "getEntries"(): $List<$Object2LongEntry>
public "getKeys"(): $Set<any>
public "getSize"(): integer
public "getTotalCount"(): long
public "getValues"(): $Collection<long>
public "set"(key: any, value: long): long
get "entries"(): $List<$Object2LongEntry>
get "keys"(): $Set<any>
get "size"(): integer
get "totalCount"(): long
get "values"(): $Collection<long>
}
}

declare module "dev.latvian.mods.rhino.ClassShutter" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $ClassShutter {
"visibleToScripts"(string0: string, int1: integer): boolean
}

export namespace $ClassShutter {
const TYPE_CLASS_IN_PACKAGE: integer
const TYPE_EXCEPTION: integer
const TYPE_MEMBER: integer
const TYPE_UNKNOWN: integer
}
export abstract class $ClassShutter$$Static implements $ClassShutter {
static readonly "TYPE_CLASS_IN_PACKAGE": integer
static readonly "TYPE_EXCEPTION": integer
static readonly "TYPE_MEMBER": integer
static readonly "TYPE_UNKNOWN": integer

}
}

declare module "dev.latvian.mods.rhino.util.wrap.TypeWrapperFactory$Simple" {
import { $Context$$Type } from "dev.latvian.mods.rhino.Context"
import { $TypeWrapperFactory } from "dev.latvian.mods.rhino.util.wrap.TypeWrapperFactory"

export interface $TypeWrapperFactory$Simple<T = any> extends $TypeWrapperFactory<T> {
"wrap"(cx: $Context$$Type, o: any): T
"wrapSimple"(object0: any): T
}

export namespace $TypeWrapperFactory$Simple {
const probejs$$marker: never
}
export abstract class $TypeWrapperFactory$Simple$$Static<T = any> implements $TypeWrapperFactory$Simple<T> {
}
}

declare module "dev.latvian.mods.rhino.WrapFactory" {
import { $Context$$Type } from "dev.latvian.mods.rhino.Context"
import { $Scriptable, $Scriptable$$Type } from "dev.latvian.mods.rhino.Scriptable"
import { $Class$$Type } from "java.lang.Class"

export class $WrapFactory {
constructor()

public "isJavaPrimitiveWrap"(): boolean
public "setJavaPrimitiveWrap"(value: boolean): void
public "wrap"(cx: $Context$$Type, scope: $Scriptable$$Type, obj: any, staticType: $Class$$Type<any>): any
public "wrapAsJavaObject"(cx: $Context$$Type, scope: $Scriptable$$Type, javaObject: any, staticType: $Class$$Type<any>): $Scriptable
public "wrapJavaClass"(cx: $Context$$Type, scope: $Scriptable$$Type, javaClass: $Class$$Type<any>): $Scriptable
public "wrapNewObject"(scope: $Scriptable$$Type, obj: any, cx: $Context$$Type): $Scriptable
get "javaPrimitiveWrap"(): boolean
set "javaPrimitiveWrap"(value: boolean)
}
}

declare module "dev.latvian.mods.rhino.RhinoException" {
import { $RuntimeException } from "java.lang.RuntimeException"
import { $ScriptStackElement } from "dev.latvian.mods.rhino.ScriptStackElement"

export class $RhinoException extends $RuntimeException {
public "columnNumber"(): integer
public "details"(): string
public "getScriptStack"(): $ScriptStackElement[]
public "getScriptStack"(limit: integer, hideFunction: string): $ScriptStackElement[]
public "getScriptStackTrace"(): string
public "getScriptStackTrace"(limit: integer, functionName: string): string
public "initColumnNumber"(columnNumber: integer): void
public "initLineNumber"(lineNumber: integer): void
public "initLineSource"(lineSource: string): void
public "initSourceName"(sourceName: string): void
public "lineNumber"(): integer
public "lineSource"(): string
public "sourceName"(): string
get "scriptStack"(): $ScriptStackElement[]
get "scriptStackTrace"(): string
}
}

declare module "dev.latvian.mods.rhino.Symbol" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $Symbol {
}

export namespace $Symbol {
const probejs$$marker: never
}
export abstract class $Symbol$$Static implements $Symbol {
}
}

declare module "dev.latvian.mods.rhino.Function" {
import { $Consumer$$Type } from "java.util.function.Consumer"
import { $Context$$Type } from "dev.latvian.mods.rhino.Context"
import { $MemberType } from "dev.latvian.mods.rhino.MemberType"
import { $Scriptable, $Scriptable$$Type } from "dev.latvian.mods.rhino.Scriptable"
import { $Class$$Type } from "java.lang.Class"
import { $Callable } from "dev.latvian.mods.rhino.Callable"

export interface $Function extends $Scriptable, $Callable {
"call"(context0: $Context$$Type, scriptable1: $Scriptable$$Type, scriptable2: $Scriptable$$Type, object3s: any[]): any
"construct"(context0: $Context$$Type, scriptable1: $Scriptable$$Type, object2s: any[]): $Scriptable
"delete"(context0: $Context$$Type, int1: integer): void
"delete"(context0: $Context$$Type, string1: string): void
"enumerationIteratorHasNext"(cx: $Context$$Type, currentId: $Consumer$$Type<any>): boolean
"enumerationIteratorNext"(cx: $Context$$Type, currentId: $Consumer$$Type<any>): boolean
"get"(context0: $Context$$Type, int1: integer, scriptable2: $Scriptable$$Type): any
"get"(context0: $Context$$Type, string1: string, scriptable2: $Scriptable$$Type): any
"getAllIds"(cx: $Context$$Type): any[]
"getClassName"(): string
"getDefaultValue"(context0: $Context$$Type, class1: $Class$$Type<any>): any
"getIds"(context0: $Context$$Type): any[]
"getParentScope"(): $Scriptable
"getPrototype"(context0: $Context$$Type): $Scriptable
"getTypeOf"(): $MemberType
"has"(context0: $Context$$Type, string1: string, scriptable2: $Scriptable$$Type): boolean
"has"(context0: $Context$$Type, int1: integer, scriptable2: $Scriptable$$Type): boolean
"hasInstance"(context0: $Context$$Type, scriptable1: $Scriptable$$Type): boolean
"put"(context0: $Context$$Type, string1: string, scriptable2: $Scriptable$$Type, object3: any): void
"put"(context0: $Context$$Type, int1: integer, scriptable2: $Scriptable$$Type, object3: any): void
"setParentScope"(scriptable0: $Scriptable$$Type): void
"setPrototype"(scriptable0: $Scriptable$$Type): void
get "className"(): string
get "parentScope"(): $Scriptable
get "typeOf"(): $MemberType
set "parentScope"(value: $Scriptable$$Type)
set "prototype"(value: $Scriptable$$Type)
}

export namespace $Function {
const probejs$$marker: never
}
export abstract class $Function$$Static implements $Function {
}
}

declare module "dev.latvian.mods.rhino.GeneratedClassLoader" {
import { $Class, $Class$$Type } from "java.lang.Class"

export interface $GeneratedClassLoader {
"defineClass"(string0: string, byte1s: byte[]): $Class<any>
"linkClass"(class0: $Class$$Type<any>): void
}

export namespace $GeneratedClassLoader {
const probejs$$marker: never
}
export abstract class $GeneratedClassLoader$$Static implements $GeneratedClassLoader {
}
}

declare module "dev.latvian.mods.rhino.Wrapper" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $Wrapper {
"unwrap"(): any
}

export namespace $Wrapper {
function unwrapped(o: any): any
}
export abstract class $Wrapper$$Static implements $Wrapper {
static "unwrapped"(o: any): any
}
}

declare module "dev.latvian.mods.rhino.regexp.RegExp" {
import { $Context$$Type } from "dev.latvian.mods.rhino.Context"
import { $Scriptable, $Scriptable$$Type } from "dev.latvian.mods.rhino.Scriptable"

export class $RegExp {
static readonly "RA_MATCH": integer
static readonly "RA_REPLACE": integer
static readonly "RA_SEARCH": integer

constructor()

public "action"(cx: $Context$$Type, scope: $Scriptable$$Type, thisObj: $Scriptable$$Type, args: any[], actionType: integer): any
public "compileRegExp"(cx: $Context$$Type, source: string, flags: string): any
public "find_split"(cx: $Context$$Type, scope: $Scriptable$$Type, target: string, separator: string, reObj: $Scriptable$$Type, ip: integer[], matchlen: integer[], matched: boolean[], parensp: string[][]): integer
public "isRegExp"(obj: $Scriptable$$Type): boolean
public "js_split"(cx: $Context$$Type, scope: $Scriptable$$Type, target: string, args: any[]): any
public "wrapRegExp"(cx: $Context$$Type, scope: $Scriptable$$Type, compiled: any): $Scriptable
}
}

declare module "dev.latvian.mods.rhino.ErrorReporter" {
import { $Context$$Type } from "dev.latvian.mods.rhino.Context"
import { $EvaluatorException } from "dev.latvian.mods.rhino.EvaluatorException"

export interface $ErrorReporter {
"error"(context0: $Context$$Type, string1: string, string2: string, int3: integer, string4: string, int5: integer): void
"runtimeError"(context0: $Context$$Type, string1: string, string2: string, int3: integer, string4: string, int5: integer): $EvaluatorException
"warning"(string0: string, string1: string, int2: integer, string3: string, int4: integer): void
}

export namespace $ErrorReporter {
const probejs$$marker: never
}
export abstract class $ErrorReporter$$Static implements $ErrorReporter {
}
}

declare module "dev.latvian.mods.rhino.IdFunctionCall" {
import { $Context$$Type } from "dev.latvian.mods.rhino.Context"
import { $IdFunctionObject$$Type } from "dev.latvian.mods.rhino.IdFunctionObject"
import { $Scriptable$$Type } from "dev.latvian.mods.rhino.Scriptable"

export interface $IdFunctionCall {
"execIdCall"(idFunctionObject0: $IdFunctionObject$$Type, context1: $Context$$Type, scriptable2: $Scriptable$$Type, scriptable3: $Scriptable$$Type, object4s: any[]): any
}

export namespace $IdFunctionCall {
const probejs$$marker: never
}
export abstract class $IdFunctionCall$$Static implements $IdFunctionCall {
}
}

declare module "dev.latvian.mods.rhino.mod.wrapper.UUIDWrapper" {
import { $StringBuilder$$Type } from "java.lang.StringBuilder"
import { $UUID, $UUID$$Type } from "java.util.UUID"

export interface $UUIDWrapper {
}

export namespace $UUIDWrapper {
function digits(sb: $StringBuilder$$Type, val: long, digits: integer): void
function fromString(o: any): $UUID
function toString(id: $UUID$$Type): string
}
export abstract class $UUIDWrapper$$Static implements $UUIDWrapper {
static "digits"(sb: $StringBuilder$$Type, val: long, digits: integer): void
static "fromString"(o: any): $UUID
static "toString"(id: $UUID$$Type): string
}
}

declare module "dev.latvian.mods.rhino.ScriptableObject" {
import { $Consumer$$Type } from "java.util.function.Consumer"
import { $Context$$Type } from "dev.latvian.mods.rhino.Context"
import { $SymbolScriptable } from "dev.latvian.mods.rhino.SymbolScriptable"
import { $ExternalArrayData, $ExternalArrayData$$Type } from "dev.latvian.mods.rhino.ExternalArrayData"
import { $MemberType } from "dev.latvian.mods.rhino.MemberType"
import { $WrappedExecutable$$Type } from "dev.latvian.mods.rhino.WrappedExecutable"
import { $Scriptable, $Scriptable$$Type } from "dev.latvian.mods.rhino.Scriptable"
import { $Class$$Type } from "java.lang.Class"
import { $Callable$$Type } from "dev.latvian.mods.rhino.Callable"
import { $ConstProperties } from "dev.latvian.mods.rhino.ConstProperties"
import { $Symbol$$Type } from "dev.latvian.mods.rhino.Symbol"

export class $ScriptableObject implements $Scriptable, $SymbolScriptable, $ConstProperties {
static readonly "CONST": integer
static readonly "DONTENUM": integer
static readonly "EMPTY": integer
static readonly "PERMANENT": integer
static readonly "READONLY": integer
static readonly "UNINITIALIZED_CONST": integer

constructor()
constructor(scope: $Scriptable$$Type, prototype: $Scriptable$$Type)

public "associateValue"(key: any, value: any): any
public "avoidObjectDetection"(): boolean
public static "defineClass"<T extends $Scriptable>(scope: $Scriptable$$Type, clazz: $Class$$Type<T>, sealed: boolean, mapInheritance: boolean, cx: $Context$$Type): string
public static "defineClass"<T extends $Scriptable>(scope: $Scriptable$$Type, clazz: $Class$$Type<T>, cx: $Context$$Type): void
public static "defineClass"<T extends $Scriptable>(scope: $Scriptable$$Type, clazz: $Class$$Type<T>, sealed: boolean, cx: $Context$$Type): void
public "defineConst"(cx: $Context$$Type, name: string, start: $Scriptable$$Type): void
public static "defineConstProperty"(destination: $Scriptable$$Type, propertyName: string, cx: $Context$$Type): void
public "defineFunctionProperties"(cx: $Context$$Type, names: string[], clazz: $Class$$Type<any>, attributes: integer): void
public "defineOwnProperties"(cx: $Context$$Type, props: $ScriptableObject$$Type): void
public "defineOwnProperty"(cx: $Context$$Type, id: any, desc: $ScriptableObject$$Type): void
public "defineProperty"(cx: $Context$$Type, key: $Symbol$$Type, value: any, attributes: integer): void
public "defineProperty"(cx: $Context$$Type, propertyName: string, delegateTo: any, getter: $WrappedExecutable$$Type, setter: $WrappedExecutable$$Type, attributes: integer): void
public "defineProperty"(cx: $Context$$Type, propertyName: string, value: any, attributes: integer): void
public static "defineProperty"(destination: $Scriptable$$Type, propertyName: string, value: any, attributes: integer, cx: $Context$$Type): void
public "defineProperty"(cx: $Context$$Type, propertyName: string, clazz: $Class$$Type<any>, attributes: integer): void
public "delete"(cx: $Context$$Type, name: string): void
public "delete"(cx: $Context$$Type, index: integer): void
public "delete"(cx: $Context$$Type, key: $Symbol$$Type): void
public static "deleteProperty"(obj: $Scriptable$$Type, index: integer, cx: $Context$$Type): boolean
public static "deleteProperty"(obj: $Scriptable$$Type, name: string, cx: $Context$$Type): boolean
public "enumerationIteratorHasNext"(cx: $Context$$Type, currentId: $Consumer$$Type<any>): boolean
public "enumerationIteratorNext"(cx: $Context$$Type, currentId: $Consumer$$Type<any>): boolean
public "get"(cx: $Context$$Type, key: any): any
public "get"(cx: $Context$$Type, key: $Symbol$$Type, start: $Scriptable$$Type): any
public "get"(cx: $Context$$Type, index: integer, start: $Scriptable$$Type): any
public "get"(cx: $Context$$Type, name: string, start: $Scriptable$$Type): any
public "getAllIds"(cx: $Context$$Type): any[]
public static "getArrayPrototype"(scope: $Scriptable$$Type, cx: $Context$$Type): $Scriptable
public "getAssociatedValue"(key: any): any
public "getAttributes"(cx: $Context$$Type, name: string): integer
public "getAttributes"(cx: $Context$$Type, sym: $Symbol$$Type): integer
public "getAttributes"(cx: $Context$$Type, index: integer): integer
public "getClassName"(): string
public static "getClassPrototype"(scope: $Scriptable$$Type, className: string, cx: $Context$$Type): $Scriptable
public static "getDefaultValue"(object: $Scriptable$$Type, typeHint: $Class$$Type<any>, cx: $Context$$Type): any
public "getDefaultValue"(cx: $Context$$Type, typeHint: $Class$$Type<any>): any
public "getExternalArrayData"(): $ExternalArrayData
public "getExternalArrayLength"(): any
public static "getFunctionPrototype"(scope: $Scriptable$$Type, cx: $Context$$Type): $Scriptable
public static "getGeneratorFunctionPrototype"(scope: $Scriptable$$Type, cx: $Context$$Type): $Scriptable
public "getGetterOrSetter"(name: string, index: integer, isSetter: boolean): any
public "getIds"(cx: $Context$$Type): any[]
public static "getObjectPrototype"(scope: $Scriptable$$Type, cx: $Context$$Type): $Scriptable
public "getParentScope"(): $Scriptable
public static "getProperty"(obj: $Scriptable$$Type, key: $Symbol$$Type, cx: $Context$$Type): any
public static "getProperty"(obj: $Scriptable$$Type, name: string, cx: $Context$$Type): any
public static "getProperty"(obj: $Scriptable$$Type, index: integer, cx: $Context$$Type): any
public static "getPropertyIds"(cx: $Context$$Type, obj: $Scriptable$$Type): any[]
public "getPrototype"(cx: $Context$$Type): $Scriptable
public static "getTopLevelScope"(obj: $Scriptable$$Type): $Scriptable
public static "getTopScopeValue"(scope: $Scriptable$$Type, key: any, cx: $Context$$Type): any
public "getTypeOf"(): $MemberType
public "has"(cx: $Context$$Type, key: $Symbol$$Type, start: $Scriptable$$Type): boolean
public "has"(cx: $Context$$Type, index: integer, start: $Scriptable$$Type): boolean
public "has"(cx: $Context$$Type, name: string, start: $Scriptable$$Type): boolean
public "hasInstance"(cx: $Context$$Type, instance: $Scriptable$$Type): boolean
public static "hasProperty"(obj: $Scriptable$$Type, key: $Symbol$$Type, cx: $Context$$Type): boolean
public static "hasProperty"(obj: $Scriptable$$Type, index: integer, cx: $Context$$Type): boolean
public static "hasProperty"(obj: $Scriptable$$Type, name: string, cx: $Context$$Type): boolean
public "isConst"(name: string): boolean
public "isEmpty"(): boolean
public "isExtensible"(): boolean
public "isSealed"(cx: $Context$$Type): boolean
public "preventExtensions"(): void
public "put"(cx: $Context$$Type, index: integer, start: $Scriptable$$Type, value: any): void
public "put"(cx: $Context$$Type, key: $Symbol$$Type, start: $Scriptable$$Type, value: any): void
public "put"(cx: $Context$$Type, name: string, start: $Scriptable$$Type, value: any): void
public "putConst"(cx: $Context$$Type, name: string, start: $Scriptable$$Type, value: any): void
public static "putConstProperty"(obj: $Scriptable$$Type, name: string, value: any, cx: $Context$$Type): void
public static "putProperty"(obj: $Scriptable$$Type, name: string, value: any, cx: $Context$$Type): void
public static "putProperty"(obj: $Scriptable$$Type, index: integer, value: any, cx: $Context$$Type): void
public static "putProperty"(obj: $Scriptable$$Type, key: $Symbol$$Type, value: any, cx: $Context$$Type): void
public static "redefineProperty"(obj: $Scriptable$$Type, name: string, isConst: boolean, cx: $Context$$Type): void
public "sealObject"(cx: $Context$$Type): void
public "setAttributes"(cx: $Context$$Type, index: integer, attributes: integer): void
public "setAttributes"(cx: $Context$$Type, name: string, attributes: integer): void
public "setAttributes"(cx: $Context$$Type, key: $Symbol$$Type, attributes: integer): void
public "setExternalArrayData"(cx: $Context$$Type, array: $ExternalArrayData$$Type): void
public "setGetterOrSetter"(cx: $Context$$Type, name: string, index: integer, getterOrSetter: $Callable$$Type, isSetter: boolean): void
public "setParentScope"(m: $Scriptable$$Type): void
public "setPrototype"(m: $Scriptable$$Type): void
public "size"(): integer
get "className"(): string
get "externalArrayData"(): $ExternalArrayData
get "externalArrayLength"(): any
get "parentScope"(): $Scriptable
get "typeOf"(): $MemberType
get "empty"(): boolean
get "extensible"(): boolean
set "parentScope"(value: $Scriptable$$Type)
set "prototype"(value: $Scriptable$$Type)
}
}

declare module "dev.latvian.mods.rhino.IdFunctionObject" {
import { $Consumer$$Type } from "java.util.function.Consumer"
import { $Context$$Type } from "dev.latvian.mods.rhino.Context"
import { $IdFunctionCall$$Type } from "dev.latvian.mods.rhino.IdFunctionCall"
import { $BaseFunction } from "dev.latvian.mods.rhino.BaseFunction"
import { $Scriptable, $Scriptable$$Type } from "dev.latvian.mods.rhino.Scriptable"
import { $Class$$Type } from "java.lang.Class"
import { $RuntimeException } from "java.lang.RuntimeException"

export class $IdFunctionObject extends $BaseFunction {
constructor(idcall: $IdFunctionCall$$Type, tag: any, id: integer, arity: integer)
constructor(idcall: $IdFunctionCall$$Type, tag: any, id: integer, name: string, arity: integer, scope: $Scriptable$$Type)

public "addAsProperty"(target: $Scriptable$$Type, cx: $Context$$Type): void
public "delete"(context0: $Context$$Type, int1: integer): void
public "enumerationIteratorHasNext"(cx: $Context$$Type, currentId: $Consumer$$Type<any>): boolean
public "enumerationIteratorNext"(cx: $Context$$Type, currentId: $Consumer$$Type<any>): boolean
public "exportAsScopeProperty"(cx: $Context$$Type): void
public "get"(context0: $Context$$Type, int1: integer, scriptable2: $Scriptable$$Type): any
public "getAllIds"(cx: $Context$$Type): any[]
public "getDefaultValue"(context0: $Context$$Type, class1: $Class$$Type<any>): any
public "getIds"(context0: $Context$$Type): any[]
public "getParentScope"(): $Scriptable
public "getTag"(): any
public "has"(context0: $Context$$Type, int1: integer, scriptable2: $Scriptable$$Type): boolean
public "hasTag"(tag: any): boolean
public "initFunction"(name: string, scope: $Scriptable$$Type): void
public "markAsConstructor"(prototypeProperty: $Scriptable$$Type): void
public "methodId"(): integer
public "put"(context0: $Context$$Type, int1: integer, scriptable2: $Scriptable$$Type, object3: any): void
public "setParentScope"(scriptable0: $Scriptable$$Type): void
public "setPrototype"(scriptable0: $Scriptable$$Type): void
public "unknown"(): $RuntimeException
get "parentScope"(): $Scriptable
get "tag"(): any
set "parentScope"(value: $Scriptable$$Type)
set "prototype"(value: $Scriptable$$Type)
}
}

declare module "dev.latvian.mods.rhino.util.CustomJavaToJsWrapperProvider" {
import { $CustomJavaToJsWrapper } from "dev.latvian.mods.rhino.util.CustomJavaToJsWrapper"

export interface $CustomJavaToJsWrapperProvider<T = any> {
"create"(t0: T): $CustomJavaToJsWrapper
}

export namespace $CustomJavaToJsWrapperProvider {
const NONE: $CustomJavaToJsWrapperProvider<any>
}
export abstract class $CustomJavaToJsWrapperProvider$$Static<T = any> implements $CustomJavaToJsWrapperProvider<T> {
static readonly "NONE": $CustomJavaToJsWrapperProvider<any>

}
}

declare module "dev.latvian.mods.rhino.mod.util.NBTUtils" {
import { $OrderedCompoundTag } from "dev.latvian.mods.rhino.mod.util.OrderedCompoundTag"
import { $TagType, $TagType$$Type } from "net.minecraft.nbt.TagType"
import { $Tag, $Tag$$Type } from "net.minecraft.nbt.Tag"
import { $Collection$$Type } from "java.util.Collection"
import { $FriendlyByteBuf$$Type } from "net.minecraft.network.FriendlyByteBuf"
import { $JsonElement } from "com.google.gson.JsonElement"
import { $List$$Type } from "java.util.List"
import { $CompoundTag, $CompoundTag$$Type } from "net.minecraft.nbt.CompoundTag"
import { $ValueUnwrapper } from "dev.latvian.mods.rhino.util.ValueUnwrapper"
import { $Map, $Map$$Type } from "java.util.Map"
import { $CollectionTag } from "net.minecraft.nbt.CollectionTag"
import { $StringBuilder$$Type } from "java.lang.StringBuilder"
import { $ListTag } from "net.minecraft.nbt.ListTag"

export interface $NBTUtils {
}

export namespace $NBTUtils {
const COMPOUND_TYPE: $TagType<$OrderedCompoundTag>
const LIST_TYPE: $TagType<$ListTag>
const VALUE_UNWRAPPER: $ValueUnwrapper
function accessTagMap(tag: $CompoundTag$$Type): $Map<string, $Tag>
function b(v: byte): $Tag
function ba(v: byte[]): $Tag
function byteArrayTag(v: byte[]): $Tag
function byteTag(v: byte): $Tag
function compoundTag(map: $Map$$Type<any, any>): $Tag
function compoundTag(): $Tag
function convertType(tagType: $TagType$$Type<any>): $TagType<any>
function d(v: double): $Tag
function doubleTag(v: double): $Tag
function f(v: float): $Tag
function floatTag(v: float): $Tag
function fromTag(t: $Tag$$Type): any
function i(v: integer): $Tag
function ia(v: integer[]): $Tag
function intArrayTag(v: integer[]): $Tag
function intTag(v: integer): $Tag
function isTagCollection(o: any): boolean
function isTagCompound(o: any): boolean
function l(v: long): $Tag
function la(v: long[]): $Tag
function listTag(): $Tag
function listTag(list: $List$$Type<any>): $Tag
function longArrayTag(v: long[]): $Tag
function longTag(v: long): $Tag
function quoteAndEscapeForJS(stringBuilder: $StringBuilder$$Type, string: string): void
function read(buf: $FriendlyByteBuf$$Type): $OrderedCompoundTag
function s(v: short): $Tag
function shortTag(v: short): $Tag
function stringTag(v: string): $Tag
function toJson(t: $Tag$$Type): $JsonElement
function toTag(v: any): $Tag
function toTagCollection(c: $Collection$$Type<any>): $CollectionTag<any>
function toTagCollection(v: any): $CollectionTag<any>
function toTagCompound(v: any): $CompoundTag
function toTagList(list: any): $ListTag
}
export abstract class $NBTUtils$$Static implements $NBTUtils {
static readonly "COMPOUND_TYPE": $TagType<$OrderedCompoundTag>
static readonly "LIST_TYPE": $TagType<$ListTag>
static readonly "VALUE_UNWRAPPER": $ValueUnwrapper

static "accessTagMap"(tag: $CompoundTag$$Type): $Map<string, $Tag>
static "b"(v: byte): $Tag
static "ba"(v: byte[]): $Tag
static "byteArrayTag"(v: byte[]): $Tag
static "byteTag"(v: byte): $Tag
static "compoundTag"(map: $Map$$Type<any, any>): $Tag
static "compoundTag"(): $Tag
static "convertType"(tagType: $TagType$$Type<any>): $TagType<any>
static "d"(v: double): $Tag
static "doubleTag"(v: double): $Tag
static "f"(v: float): $Tag
static "floatTag"(v: float): $Tag
static "fromTag"(t: $Tag$$Type): any
static "i"(v: integer): $Tag
static "ia"(v: integer[]): $Tag
static "intArrayTag"(v: integer[]): $Tag
static "intTag"(v: integer): $Tag
static "isTagCollection"(o: any): boolean
static "isTagCompound"(o: any): boolean
static "l"(v: long): $Tag
static "la"(v: long[]): $Tag
static "listTag"(): $Tag
static "listTag"(list: $List$$Type<any>): $Tag
static "longArrayTag"(v: long[]): $Tag
static "longTag"(v: long): $Tag
static "quoteAndEscapeForJS"(stringBuilder: $StringBuilder$$Type, string: string): void
static "read"(buf: $FriendlyByteBuf$$Type): $OrderedCompoundTag
static "s"(v: short): $Tag
static "shortTag"(v: short): $Tag
static "stringTag"(v: string): $Tag
static "toJson"(t: $Tag$$Type): $JsonElement
static "toTag"(v: any): $Tag
static "toTagCollection"(c: $Collection$$Type<any>): $CollectionTag<any>
static "toTagCollection"(v: any): $CollectionTag<any>
static "toTagCompound"(v: any): $CompoundTag
static "toTagList"(list: any): $ListTag
}
}

declare module "dev.latvian.mods.rhino.mod.wrapper.AABBWrapper" {
import { $AABB } from "net.minecraft.world.phys.AABB"
import { $BlockPos$$Type } from "net.minecraft.core.BlockPos"
import { $Vec3$$Type } from "net.minecraft.world.phys.Vec3"

export interface $AABBWrapper {
}

export namespace $AABBWrapper {
const CUBE: $AABB
const EMPTY: $AABB
function of(x0: double, y0: double, z0: double, x1: double, y1: double, z1: double): $AABB
function ofBlock(pos: $BlockPos$$Type): $AABB
function ofBlocks(pos1: $BlockPos$$Type, pos2: $BlockPos$$Type): $AABB
function ofSize(vec3: $Vec3$$Type, x: double, y: double, z: double): $AABB
function ofSize(x: double, y: double, z: double): $AABB
function wrap(o: any): $AABB
}
export abstract class $AABBWrapper$$Static implements $AABBWrapper {
static readonly "CUBE": $AABB
static readonly "EMPTY": $AABB

static "of"(x0: double, y0: double, z0: double, x1: double, y1: double, z1: double): $AABB
static "ofBlock"(pos: $BlockPos$$Type): $AABB
static "ofBlocks"(pos1: $BlockPos$$Type, pos2: $BlockPos$$Type): $AABB
static "ofSize"(vec3: $Vec3$$Type, x: double, y: double, z: double): $AABB
static "ofSize"(x: double, y: double, z: double): $AABB
static "wrap"(o: any): $AABB
}
}

declare module "dev.latvian.mods.rhino.SymbolScriptable" {
import { $Context$$Type } from "dev.latvian.mods.rhino.Context"
import { $Scriptable$$Type } from "dev.latvian.mods.rhino.Scriptable"
import { $Symbol$$Type } from "dev.latvian.mods.rhino.Symbol"

export interface $SymbolScriptable {
"delete"(context0: $Context$$Type, symbol1: $Symbol$$Type): void
"get"(context0: $Context$$Type, symbol1: $Symbol$$Type, scriptable2: $Scriptable$$Type): any
"has"(context0: $Context$$Type, symbol1: $Symbol$$Type, scriptable2: $Scriptable$$Type): boolean
"put"(context0: $Context$$Type, symbol1: $Symbol$$Type, scriptable2: $Scriptable$$Type, object3: any): void
}

export namespace $SymbolScriptable {
const probejs$$marker: never
}
export abstract class $SymbolScriptable$$Static implements $SymbolScriptable {
}
}

