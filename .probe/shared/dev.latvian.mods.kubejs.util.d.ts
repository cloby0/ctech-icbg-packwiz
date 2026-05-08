declare module "dev.latvian.mods.kubejs.util.UtilsJS" {
import { $ResourceLocation, $ResourceLocation$$Type } from "net.minecraft.resources.ResourceLocation"
import { $CreativeModeTab } from "net.minecraft.world.item.CreativeModeTab"
import { $UtilsJS$TryIO$$Type } from "dev.latvian.mods.kubejs.util.UtilsJS$TryIO"
import { $BlockState } from "net.minecraft.world.level.block.state.BlockState"
import { $Random } from "java.util.Random"
import { $FriendlyByteBuf$$Type } from "net.minecraft.network.FriendlyByteBuf"
import { $MobType$$Type } from "net.minecraft.world.entity.MobType"
import { $Runnable$$Type } from "java.lang.Runnable"
import { $JsonElement, $JsonElement$$Type } from "com.google.gson.JsonElement"
import { $MinecraftServer } from "net.minecraft.server.MinecraftServer"
import { $Calendar$$Type } from "java.util.Calendar"
import { $NumberProvider, $NumberProvider$$Type } from "net.minecraft.world.level.storage.loot.providers.number.NumberProvider"
import { $IntProvider } from "net.minecraft.util.valueproviders.IntProvider"
import { $MobCategory } from "net.minecraft.world.entity.MobCategory"
import { $Duration } from "java.time.Duration"
import { $BaseFunction$$Type } from "dev.latvian.mods.rhino.BaseFunction"
import { $Color, $Color$$Type } from "dev.latvian.mods.rhino.mod.util.color.Color"
import { $TemporalAmount } from "java.time.temporal.TemporalAmount"
import { $Path } from "java.nio.file.Path"
import { $JSObjectType$$Type } from "dev.latvian.mods.kubejs.util.JSObjectType"
import { $Context$$Type } from "dev.latvian.mods.rhino.Context"
import { $Predicate, $Predicate$$Type } from "java.util.function.Predicate"
import { $Collection } from "java.util.Collection"
import { $Set } from "java.util.Set"
import { $RegistryAccess } from "net.minecraft.core.RegistryAccess"
import { $EntitySelector } from "net.minecraft.commands.arguments.selector.EntitySelector"
import { $File } from "java.io.File"
import { $ScriptType$$Type } from "dev.latvian.mods.kubejs.script.ScriptType"
import { $Consumer$$Type } from "java.util.function.Consumer"
import { $List } from "java.util.List"
import { $Codec$$Type } from "com.mojang.serialization.Codec"
import { $Entity$$Type } from "net.minecraft.world.entity.Entity"
import { $BlockPos } from "net.minecraft.core.BlockPos"
import { $Type$$Type } from "java.lang.reflect.Type"
import { $Vec3 } from "net.minecraft.world.phys.Vec3"
import { $StringBuilder$$Type } from "java.lang.StringBuilder"
import { $Class, $Class$$Type } from "java.lang.Class"
import { $Pattern, $Pattern$$Type } from "java.util.regex.Pattern"
import { $ItemStack } from "net.minecraft.world.item.ItemStack"

export class $UtilsJS {
static readonly "AIR_LOCATION": $ResourceLocation
static readonly "ALWAYS_LOWER_CASE": $Set<string>
static readonly "ALWAYS_TRUE": $Predicate<any>
static readonly "EMPTY_OBJECT_ARRAY": any[]
static readonly "EMPTY_STRING_ARRAY": string[]
static readonly "RANDOM": $Random
static readonly "REGEX_PATTERN": $Pattern
static readonly "SNAKE_CASE_SPLIT": $Pattern
static readonly "TEMPORAL_AMOUNT_PATTERN": $Pattern
static readonly "UNKNOWN_ID": $ResourceLocation
static "staticRegistryAccess": $RegistryAccess
static "staticServer": $MinecraftServer

constructor()

public static "appendTimestamp"(builder: $StringBuilder$$Type, calendar: $Calendar$$Type): void
public static "blockPosOf"(o: any): $BlockPos
public static "cast"<T>(o: any): T
public static "copy"(o: any): any
public static "entitySelector"(o: any): $EntitySelector
public static "findCreativeTab"(id: $ResourceLocation$$Type): $CreativeModeTab
public static "getAllBlockStates"(): $Collection<$BlockState>
public static "getDuration"(o: any): $Duration
public static "getFileFromPath"(o: any): $File
public static "getID"(s: string): string
public static "getMCID"(cx: $Context$$Type, o: any): $ResourceLocation
public static "getMobTypeId"(type: $MobType$$Type): string
public static "getNamespace"(s: string): string
public static "getPath"(s: string): string
public static "getPath"(o: any): $Path
public static "getRawType"(type: $Type$$Type): $Class<any>
public static "getTemporalAmount"(o: any): $TemporalAmount
public static "getTickDuration"(o: any): long
public static "getUniqueId"<T>(input: T, codec: $Codec$$Type<T>): string
public static "getUniqueId"(json: $JsonElement$$Type): string
public static "intProviderOf"(o: any): $IntProvider
public static "makeFunctionProxy"<T>(type: $ScriptType$$Type, targetClass: $Class$$Type<T>, function_: $BaseFunction$$Type): T
public static "mobCategoryByName"(s: string): $MobCategory
public static "numberProviderJson"(gen: $NumberProvider$$Type): $JsonElement
public static "numberProviderOf"(o: any): $NumberProvider
public static "onMatchDo"<T>(predicate: $Predicate$$Type<T>, onMatch: $Consumer$$Type<T>): $Predicate<T>
public static "parseBlockState"(string: string): $BlockState
public static "parseDouble"(object: any, def: double): double
public static "parseInt"(object: any, def: integer): integer
public static "parseLong"(object: any, def: long): long
public static "parseRegex"(o: any): $Pattern
public static "postModificationEvents"(): void
public static "queueIO"(runnable: $Runnable$$Type): void
public static "readColor"(buf: $FriendlyByteBuf$$Type): $Color
public static "regex"(string: string): $Pattern
public static "rollChestLoot"(id: $ResourceLocation$$Type, entity: $Entity$$Type): $List<$ItemStack>
public static "snakeCaseToCamelCase"(string: string): string
public static "snakeCaseToTitleCase"(string: string): string
public static "stripEventName"(s: string): string
public static "stripIdForEvent"(id: $ResourceLocation$$Type): string
public static "toMappedTypeString"(type: $Type$$Type): string
public static "toRegexString"(pattern: $Pattern$$Type): string
public static "toTitleCase"(s: string, ignoreSpecial: boolean): string
public static "toTitleCase"(s: string): string
public static "tryIO"(tryIO: $UtilsJS$TryIO$$Type): void
public static "vec3Of"(o: any): $Vec3
public static "wrap"(o: any, type: $JSObjectType$$Type): any
public static "writeColor"(buf: $FriendlyByteBuf$$Type, color: $Color$$Type): void
}
}

declare module "dev.latvian.mods.kubejs.util.AttachedData" {
import { $Map$Entry, $Map$Entry$$Type } from "java.util.Map$Entry"
import { $Map, $Map$$Type } from "java.util.Map"
import { $HashMap } from "java.util.HashMap"

export class $AttachedData<T = any> extends $HashMap<string, any> {
constructor(p: T)

public "add"(key: string, data: any): void
public static "copyOf"<K, V>(map0: $Map$$Type<K, V>): $Map<K, V>
public static "entry"<K, V>(k0: K, v1: V): $Map$Entry<K, V>
public "equals"(object0: any): boolean
public "getParent"(): T
public "hashCode"(): integer
public static "of"<K, V>(k0: K, v1: V, k2: K, v3: V, k4: K, v5: V, k6: K, v7: V, k8: K, v9: V): $Map<K, V>
public static "of"<K, V>(k0: K, v1: V, k2: K, v3: V, k4: K, v5: V, k6: K, v7: V): $Map<K, V>
public static "of"<K, V>(k0: K, v1: V, k2: K, v3: V, k4: K, v5: V): $Map<K, V>
public static "of"<K, V>(): $Map<K, V>
public static "of"<K, V>(k0: K, v1: V, k2: K, v3: V): $Map<K, V>
public static "of"<K, V>(k0: K, v1: V): $Map<K, V>
public static "of"<K, V>(k0: K, v1: V, k2: K, v3: V, k4: K, v5: V, k6: K, v7: V, k8: K, v9: V, k10: K, v11: V, k12: K, v13: V, k14: K, v15: V, k16: K, v17: V, k18: K, v19: V): $Map<K, V>
public static "of"<K, V>(k0: K, v1: V, k2: K, v3: V, k4: K, v5: V, k6: K, v7: V, k8: K, v9: V, k10: K, v11: V, k12: K, v13: V, k14: K, v15: V, k16: K, v17: V): $Map<K, V>
public static "of"<K, V>(k0: K, v1: V, k2: K, v3: V, k4: K, v5: V, k6: K, v7: V, k8: K, v9: V, k10: K, v11: V, k12: K, v13: V, k14: K, v15: V): $Map<K, V>
public static "of"<K, V>(k0: K, v1: V, k2: K, v3: V, k4: K, v5: V, k6: K, v7: V, k8: K, v9: V, k10: K, v11: V, k12: K, v13: V): $Map<K, V>
public static "of"<K, V>(k0: K, v1: V, k2: K, v3: V, k4: K, v5: V, k6: K, v7: V, k8: K, v9: V, k10: K, v11: V): $Map<K, V>
public static "ofEntries"<K, V>(...entry0s: $Map$Entry$$Type<K, V>[]): $Map<K, V>
get "parent"(): T
}
}

declare module "dev.latvian.mods.kubejs.util.RotationAxis" {
import { $Enum } from "java.lang.Enum"
import { $Quaternionf } from "org.joml.Quaternionf"
import { $Vector3f } from "org.joml.Vector3f"

export class $RotationAxis extends $Enum<$RotationAxis> {
static readonly "XN": $RotationAxis
static readonly "XP": $RotationAxis
static readonly "YN": $RotationAxis
static readonly "YP": $RotationAxis
static readonly "ZN": $RotationAxis
static readonly "ZP": $RotationAxis
readonly "vec": $Vector3f

public "deg"(f: float): $Quaternionf
public "rad"(f: float): $Quaternionf
public static "valueOf"(name: string): $RotationAxis
public static "values"(): $RotationAxis[]
}
}

declare module "dev.latvian.mods.kubejs.util.TinyMap$Entry" {
import { $Record } from "java.lang.Record"

export class $TinyMap$Entry<K = any, V = any> extends $Record {
constructor(key: K, value: V)

public "key"(): K
public "value"(): V
}
}

declare module "dev.latvian.mods.kubejs.util.WrappedJS" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $WrappedJS {
}

export namespace $WrappedJS {
const probejs$$marker: never
}
export abstract class $WrappedJS$$Static implements $WrappedJS {
}
}

declare module "dev.latvian.mods.kubejs.util.JSObjectType" {
import { $Enum } from "java.lang.Enum"

export class $JSObjectType extends $Enum<$JSObjectType> {
static readonly "ANY": $JSObjectType
static readonly "LIST": $JSObjectType
static readonly "MAP": $JSObjectType

public "checkList"(): boolean
public "checkMap"(): boolean
public static "valueOf"(name: string): $JSObjectType
public static "values"(): $JSObjectType[]
}
}

declare module "dev.latvian.mods.kubejs.util.JsonIO" {
import { $JsonElement, $JsonElement$$Type } from "com.google.gson.JsonElement"
import { $JsonObject$$Type } from "com.google.gson.JsonObject"
import { $JsonArray } from "com.google.gson.JsonArray"
import { $DataOutputStream$$Type } from "java.io.DataOutputStream"
import { $Map } from "java.util.Map"
import { $JsonPrimitive } from "com.google.gson.JsonPrimitive"
import { $Path$$Type } from "java.nio.file.Path"

export class $JsonIO {
constructor()

public static "copy"(element: $JsonElement$$Type): $JsonElement
public static "getJsonHashBytes"(json: $JsonElement$$Type): byte[]
public static "getJsonHashString"(json: $JsonElement$$Type): string
public static "of"(o: any): $JsonElement
public static "parse"(string: string): any
public static "parseRaw"(string: string): $JsonElement
public static "primitiveOf"(o: any): $JsonPrimitive
public static "read"(path: $Path$$Type): $Map<any, any>
public static "readJson"(path: $Path$$Type): $JsonElement
public static "readString"(path: $Path$$Type): string
public static "toArray"(element: $JsonElement$$Type): $JsonArray
public static "toObject"(json: $JsonElement$$Type): any
public static "toPrettyString"(json: $JsonElement$$Type): string
public static "toPrimitive"(element: $JsonElement$$Type): any
public static "toString"(json: $JsonElement$$Type): string
public static "write"(path: $Path$$Type, json: $JsonObject$$Type): void
public static "writeJsonHash"(stream: $DataOutputStream$$Type, element: $JsonElement$$Type): void
}
}

declare module "dev.latvian.mods.kubejs.util.UtilsJS$TryIO" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $UtilsJS$TryIO {
"run"(): void
}

export namespace $UtilsJS$TryIO {
const probejs$$marker: never
}
export abstract class $UtilsJS$TryIO$$Static implements $UtilsJS$TryIO {
}
}

declare module "dev.latvian.mods.kubejs.util.ScheduledEvents$Callback" {
import { $ScheduledEvents$ScheduledEvent$$Type } from "dev.latvian.mods.kubejs.util.ScheduledEvents$ScheduledEvent"

export interface $ScheduledEvents$Callback {
"onCallback"(scheduledEvent0: $ScheduledEvents$ScheduledEvent$$Type): void
}

export namespace $ScheduledEvents$Callback {
const probejs$$marker: never
}
export abstract class $ScheduledEvents$Callback$$Static implements $ScheduledEvents$Callback {
}
}

declare module "dev.latvian.mods.kubejs.util.TinyMap" {
import { $TinyMap$Entry, $TinyMap$Entry$$Type } from "dev.latvian.mods.kubejs.util.TinyMap$Entry"
import { $Collection$$Type } from "java.util.Collection"
import { $Map$$Type } from "java.util.Map"
import { $Record } from "java.lang.Record"

export class $TinyMap<K = any, V = any> extends $Record {
constructor(collection: $Collection$$Type<$TinyMap$Entry$$Type<K, V>>)
constructor(entries: $TinyMap$Entry$$Type<K, V>[])
constructor(map: $TinyMap$$Type<K, V>)

public "entries"(): $TinyMap$Entry<K, V>[]
public "isEmpty"(): boolean
public static "ofMap"<K, V>(map: $Map$$Type<K, V>): $TinyMap<K, V>
get "empty"(): boolean
}
}

declare module "dev.latvian.mods.kubejs.util.NotificationBuilder" {
import { $Consumer$$Type } from "java.util.function.Consumer"
import { $Context$$Type } from "dev.latvian.mods.rhino.Context"
import { $Component, $Component$$Type } from "net.minecraft.network.chat.Component"
import { $Duration, $Duration$$Type } from "java.time.Duration"
import { $Color, $Color$$Type } from "dev.latvian.mods.rhino.mod.util.color.Color"
import { $ItemStack$$Type } from "net.minecraft.world.item.ItemStack"
import { $FriendlyByteBuf$$Type } from "net.minecraft.network.FriendlyByteBuf"

export class $NotificationBuilder {
static readonly "DEFAULT_BACKGROUND_COLOR": $Color
static readonly "DEFAULT_BORDER_COLOR": $Color
static readonly "DEFAULT_DURATION": $Duration
static readonly "NO_TEXT": $Component[]

constructor()
constructor(buf: $FriendlyByteBuf$$Type)

public static "make"(consumer: $Consumer$$Type<$NotificationBuilder$$Type>): $NotificationBuilder
public static "of"(cx: $Context$$Type, object: any): $NotificationBuilder
public "setAtlasIcon"(icon: string): void
public "setIcon"(icon: string): void
public "setItemIcon"(stack: $ItemStack$$Type): void
/** Client only, do not use in server scripts */
public "show"(): void
public "write"(buf: $FriendlyByteBuf$$Type): void
get "backgroundColor"(): $Color
set "backgroundColor"(value: $Color$$Type)
get "borderColor"(): $Color
set "borderColor"(value: $Color$$Type)
get "duration"(): $Duration
set "duration"(value: $Duration$$Type)
get "iconSize"(): integer
set "iconSize"(value: integer)
get "outlineColor"(): $Color
set "outlineColor"(value: $Color$$Type)
get "text"(): $Component
set "text"(value: $Component$$Type)
get "textShadow"(): boolean
set "textShadow"(value: boolean)
set "atlasIcon"(value: string)
set "icon"(value: string)
set "itemIcon"(value: $ItemStack$$Type)
}
}

declare module "dev.latvian.mods.kubejs.util.LogType" {
import { $Logger } from "org.slf4j.Logger"
import { $Enum } from "java.lang.Enum"
import { $BiConsumer } from "java.util.function.BiConsumer"

export class $LogType extends $Enum<$LogType> {
static readonly "DEBUG": $LogType
static readonly "ERROR": $LogType
static readonly "INFO": $LogType
static readonly "INIT": $LogType
static readonly "VALUES": $LogType[]
static readonly "WARN": $LogType
readonly "callback": $BiConsumer<$Logger, string>
readonly "name": string

public static "valueOf"(name: string): $LogType
public static "values"(): $LogType[]
}
}

declare module "dev.latvian.mods.kubejs.util.NBTIOWrapper" {
import { $CompoundTag, $CompoundTag$$Type } from "net.minecraft.nbt.CompoundTag"
import { $Path$$Type } from "java.nio.file.Path"

export interface $NBTIOWrapper {
}

export namespace $NBTIOWrapper {
function read(path: $Path$$Type): $CompoundTag
function write(path: $Path$$Type, nbt: $CompoundTag$$Type): void
}
export abstract class $NBTIOWrapper$$Static implements $NBTIOWrapper {
static "read"(path: $Path$$Type): $CompoundTag
static "write"(path: $Path$$Type, nbt: $CompoundTag$$Type): void
}
}

declare module "dev.latvian.mods.kubejs.util.ScheduledEvents" {
import { $ScheduledEvents$Callback$$Type } from "dev.latvian.mods.kubejs.util.ScheduledEvents$Callback"
import { $AtomicInteger } from "java.util.concurrent.atomic.AtomicInteger"
import { $TemporalAmount$$Type } from "java.time.temporal.TemporalAmount"
import { $LinkedList } from "java.util.LinkedList"
import { $Supplier, $Supplier$$Type } from "java.util.function.Supplier"
import { $ScheduledEvents$ScheduledEvent } from "dev.latvian.mods.kubejs.util.ScheduledEvents$ScheduledEvent"

export class $ScheduledEvents {
readonly "events": $LinkedList<$ScheduledEvents$ScheduledEvent>
readonly "factory": $Supplier<$ScheduledEvents$ScheduledEvent>
readonly "futureEvents": $LinkedList<$ScheduledEvents$ScheduledEvent>
readonly "nextId": $AtomicInteger

constructor(factory: $Supplier$$Type<$ScheduledEvents$ScheduledEvent>)

public "clear"(id: integer): void
public "schedule"(timer: long, ofTicks: boolean, repeating: boolean, callback: $ScheduledEvents$Callback$$Type): $ScheduledEvents$ScheduledEvent
public "schedule"(timer: $TemporalAmount$$Type, repeating: boolean, callback: $ScheduledEvents$Callback$$Type): $ScheduledEvents$ScheduledEvent
public "tickAll"(nowTicks: long): void
get "currentMillis"(): long
set "currentMillis"(value: long)
get "currentTick"(): long
set "currentTick"(value: long)
}
}

declare module "dev.latvian.mods.kubejs.util.ConsoleJS" {
import { $Throwable$$Type } from "java.lang.Throwable"
import { $Context$$Type } from "dev.latvian.mods.rhino.Context"
import { $Logger, $Logger$$Type } from "org.slf4j.Logger"
import { $ConsoleLine, $ConsoleLine$$Type } from "dev.latvian.mods.kubejs.script.ConsoleLine"
import { $Component } from "net.minecraft.network.chat.Component"
import { $LogType$$Type } from "dev.latvian.mods.kubejs.util.LogType"
import { $Pattern$$Type } from "java.util.regex.Pattern"
import { $ScriptType, $ScriptType$$Type } from "dev.latvian.mods.kubejs.script.ScriptType"

export class $ConsoleJS {
static "CLIENT": $ConsoleJS
static "SERVER": $ConsoleJS
static "STARTUP": $ConsoleJS
readonly "scriptType": $ScriptType

constructor(m: $ScriptType$$Type, log: $Logger$$Type)

public "debug"(message: any): $ConsoleLine
public "debugf"(message: string, ...args: any[]): $ConsoleLine
public "error"(message: string, error: $Throwable$$Type, exitPattern: $Pattern$$Type): $ConsoleLine
public "error"(message: string, throwable: $Throwable$$Type): $ConsoleLine
public "error"(message: any): $ConsoleLine
public "errorf"(message: string, ...args: any[]): $ConsoleLine
public "errorsComponent"(command: string): $Component
public "flush"(sync: boolean): void
public static "getCurrent"(def: $ConsoleJS$$Type): $ConsoleJS
public static "getCurrent"(cx: $Context$$Type): $ConsoleJS
public "getDebugEnabled"(): boolean
public "getLogger"(): $Logger
public "getMuted"(): boolean
public "getScriptLine"(): integer
public "getWriteToFile"(): boolean
public "group"(): void
public "groupEnd"(): void
public "handleError"(line: $ConsoleLine$$Type, error: $Throwable$$Type, exitPattern: $Pattern$$Type, print: boolean): void
public "info"(message: any): $ConsoleLine
public "infof"(message: string, ...args: any[]): $ConsoleLine
public "log"(...message: any[]): void
public "printClass"(className: string, tree: boolean): void
public "printClass"(className: string): void
public "printObject"(o: any, tree: boolean): void
public "printObject"(o: any): void
public "resetFile"(): void
public "setCapturingErrors"(enabled: boolean): void
public "setDebugEnabled"(m: boolean): void
public "setMuted"(m: boolean): void
public "setWriteToFile"(m: boolean): void
public "shouldPrintDebug"(): boolean
public "trace"(): void
public "warn"(message: string, error: $Throwable$$Type, exitPattern: $Pattern$$Type): $ConsoleLine
public "warn"(message: any): $ConsoleLine
public "warn"(message: string, error: $Throwable$$Type): $ConsoleLine
public "warnf"(message: string, ...args: any[]): $ConsoleLine
public "writeToFile"(type: $LogType$$Type, timestamp: long, line: string): void
public "writeToFile"(type: $LogType$$Type, line: string): void
get "debugEnabled"(): boolean
get "logger"(): $Logger
get "muted"(): boolean
get "scriptLine"(): integer
set "capturingErrors"(value: boolean)
set "debugEnabled"(value: boolean)
set "muted"(value: boolean)
}
}

declare module "dev.latvian.mods.kubejs.util.ScheduledEvents$ScheduledEvent" {
import { $ScheduledEvents, $ScheduledEvents$$Type } from "dev.latvian.mods.kubejs.util.ScheduledEvents"

export class $ScheduledEvents$ScheduledEvent {
constructor()

public "clear"(): void
public "reschedule"(timer: long): $ScheduledEvents$ScheduledEvent
public "reschedule"(): $ScheduledEvents$ScheduledEvent
get "endTime"(): long
set "endTime"(value: long)
get "id"(): integer
set "id"(value: integer)
get "ofTicks"(): boolean
set "ofTicks"(value: boolean)
get "repeating"(): boolean
set "repeating"(value: boolean)
get "scheduledEvents"(): $ScheduledEvents
set "scheduledEvents"(value: $ScheduledEvents$$Type)
get "timer"(): long
set "timer"(value: long)
}
}

declare module "dev.latvian.mods.kubejs.util.ClassWrapper" {
import { $Context$$Type } from "dev.latvian.mods.rhino.Context"
import { $CustomJavaToJsWrapper } from "dev.latvian.mods.rhino.util.CustomJavaToJsWrapper"
import { $Class, $Class$$Type } from "java.lang.Class"
import { $Scriptable, $Scriptable$$Type } from "dev.latvian.mods.rhino.Scriptable"
import { $Record } from "java.lang.Record"

export class $ClassWrapper<T = any> extends $Record implements $CustomJavaToJsWrapper {
constructor(wrappedClass: $Class$$Type<T>)

public "convertJavaToJs"(cx: $Context$$Type, scope: $Scriptable$$Type, staticType: $Class$$Type<any>): $Scriptable
public "wrappedClass"(): $Class<T>
}
}

declare module "dev.latvian.mods.kubejs.util.FluidAmounts" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $FluidAmounts {
}

export namespace $FluidAmounts {
const B: long
const BOTTLE: long
const BUCKET: long
const INGOT: long
const MB: long
const METAL_BLOCK: long
const MILLIBUCKET: long
const NUGGET: long
}
export abstract class $FluidAmounts$$Static implements $FluidAmounts {
static readonly "B": long
static readonly "BOTTLE": long
static readonly "BUCKET": long
static readonly "INGOT": long
static readonly "MB": long
static readonly "METAL_BLOCK": long
static readonly "MILLIBUCKET": long
static readonly "NUGGET": long

}
}

declare module "dev.latvian.mods.kubejs.util.Lazy" {
import { $Class$$Type } from "java.lang.Class"
import { $Supplier, $Supplier$$Type } from "java.util.function.Supplier"

export class $Lazy<T = any> implements $Supplier<T> {
public "forget"(): void
public "get"(): T
public static "of"<T>(supplier: $Supplier$$Type<T>, expiresInMs: long): $Lazy<T>
public static "of"<T>(supplier: $Supplier$$Type<T>): $Lazy<T>
public static "serviceLoader"<T>(type: $Class$$Type<T>): $Lazy<T>
}
}

