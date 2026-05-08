declare module "dev.latvian.mods.kubejs.script.ScriptTypeHolder" {
import { $ScriptType, $ScriptType$$Type } from "dev.latvian.mods.kubejs.script.ScriptType"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export interface $ScriptTypeHolder {
"kjs$getScriptType"(): $ScriptType
}

export namespace $ScriptTypeHolder {
const probejs$$marker: never
}
export abstract class $ScriptTypeHolder$$Static implements $ScriptTypeHolder {
}
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $ScriptTypeHolder$$Type = ($ScriptTypeHolder | (() => $ScriptType$$Type));
}

declare module "dev.latvian.mods.kubejs.script.ScriptPack" {
import { $ScriptManager, $ScriptManager$$Type } from "dev.latvian.mods.kubejs.script.ScriptManager"
import { $List } from "java.util.List"
import { $ScriptFile } from "dev.latvian.mods.kubejs.script.ScriptFile"
import { $ScriptPackInfo, $ScriptPackInfo$$Type } from "dev.latvian.mods.kubejs.script.ScriptPackInfo"
import { $Scriptable, $Scriptable$$Type } from "dev.latvian.mods.rhino.Scriptable"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export class $ScriptPack {
readonly "info": $ScriptPackInfo
readonly "manager": $ScriptManager
readonly "scripts": $List<$ScriptFile>

constructor(m: $ScriptManager$$Type, i: $ScriptPackInfo$$Type)

get "scope"(): $Scriptable
set "scope"(value: $Scriptable$$Type)
}
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $ScriptPack$$Type = ($ScriptPack);
}

declare module "dev.latvian.mods.kubejs.script.data.GeneratedData" {
import { $ResourceLocation, $ResourceLocation$$Type } from "net.minecraft.resources.ResourceLocation"
import { $ZipFile$$Type } from "java.util.zip.ZipFile"
import { $Record } from "java.lang.Record"
import { $Path$$Type } from "java.nio.file.Path"
import { $ZipEntry$$Type } from "java.util.zip.ZipEntry"
import { $Lazy, $Lazy$$Type } from "dev.latvian.mods.kubejs.util.Lazy"
import { $IoSupplier } from "net.minecraft.server.packs.resources.IoSupplier"
import { $InputStream } from "java.io.InputStream"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export class $GeneratedData extends $Record implements $IoSupplier<$InputStream> {
static readonly "INTERNAL_RELOAD": $GeneratedData
static readonly "PACK_ICON": $GeneratedData
static readonly "PACK_META": $GeneratedData

constructor(id: $ResourceLocation$$Type, data: $Lazy$$Type<byte[]>, alwaysForget: boolean)

public "alwaysForget"(): boolean
public static "create"(path0: $Path$$Type): $IoSupplier<$InputStream>
public static "create"(zipFile0: $ZipFile$$Type, zipEntry1: $ZipEntry$$Type): $IoSupplier<$InputStream>
public "data"(): $Lazy<byte[]>
public "get"(): $InputStream
public "id"(): $ResourceLocation
}
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $GeneratedData$$Type = ($GeneratedData);
}

declare module "dev.latvian.mods.kubejs.script.ConsoleLine" {
import { $ConsoleLine$SourceLine, $ConsoleLine$SourceLine$$Type } from "dev.latvian.mods.kubejs.script.ConsoleLine$SourceLine"
import { $List, $List$$Type } from "java.util.List"
import { $ConsoleJS, $ConsoleJS$$Type } from "dev.latvian.mods.kubejs.util.ConsoleJS"
import { $Collection, $Collection$$Type } from "java.util.Collection"
import { $LogType, $LogType$$Type } from "dev.latvian.mods.kubejs.util.LogType"
import { $FriendlyByteBuf$$Type } from "net.minecraft.network.FriendlyByteBuf"
import { $Path, $Path$$Type } from "java.nio.file.Path"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export class $ConsoleLine {
static readonly "EMPTY_ARRAY": $ConsoleLine[]
readonly "console": $ConsoleJS
readonly "timestamp": long

constructor(console: $ConsoleJS$$Type, timestamp: long, message: string)
constructor(buf: $FriendlyByteBuf$$Type)

public "getText"(): string
public "withExternalFile"(path: $Path$$Type): $ConsoleLine
public "withSourceLine"(source: string, line: integer): $ConsoleLine
public static "writeToNet"(buf: $FriendlyByteBuf$$Type, line: $ConsoleLine$$Type): void
get "externalFile"(): $Path
set "externalFile"(value: $Path$$Type)
get "group"(): string
set "group"(value: string)
get "message"(): string
set "message"(value: string)
get "sourceLines"(): $Collection<$ConsoleLine$SourceLine>
set "sourceLines"(value: $Collection$$Type<$ConsoleLine$SourceLine$$Type>)
get "stackTrace"(): $List<string>
set "stackTrace"(value: $List$$Type<string>)
get "type"(): $LogType
set "type"(value: $LogType$$Type)
get "text"(): string
}
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $ConsoleLine$$Type = ($ConsoleLine);
}

declare module "dev.latvian.mods.kubejs.script.ScriptTypePredicate" {
import { $List } from "java.util.List"
import { $Predicate, $Predicate$$Type } from "java.util.function.Predicate"
import { $ScriptType, $ScriptType$$Type } from "dev.latvian.mods.kubejs.script.ScriptType"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export interface $ScriptTypePredicate extends $Predicate<$ScriptType> {
"and"(predicate0: $Predicate$$Type<$ScriptType$$Type>): $Predicate<$ScriptType>
"getValidTypes"(): $List<$ScriptType>
"negate"(): $Predicate<$ScriptType>
"or"(predicate0: $Predicate$$Type<$ScriptType$$Type>): $Predicate<$ScriptType>
"test"(scriptType0: $ScriptType$$Type): boolean
get "validTypes"(): $List<$ScriptType>
}

export namespace $ScriptTypePredicate {
const ALL: $ScriptTypePredicate
const COMMON: $ScriptTypePredicate
const STARTUP_OR_CLIENT: $ScriptTypePredicate
const STARTUP_OR_SERVER: $ScriptTypePredicate
function isEqual<T>(object0: any): $Predicate<T>
function not<T>(predicate0: $Predicate$$Type<T>): $Predicate<T>
}
export abstract class $ScriptTypePredicate$$Static implements $ScriptTypePredicate {
static readonly "ALL": $ScriptTypePredicate
static readonly "COMMON": $ScriptTypePredicate
static readonly "STARTUP_OR_CLIENT": $ScriptTypePredicate
static readonly "STARTUP_OR_SERVER": $ScriptTypePredicate

static "isEqual"<T>(object0: any): $Predicate<T>
static "not"<T>(predicate0: $Predicate$$Type<T>): $Predicate<T>
}
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $ScriptTypePredicate$$Type = ($ScriptTypePredicate | ((arg0: $ScriptType) => boolean));
}

declare module "dev.latvian.mods.kubejs.script.ScriptSource" {
import { $List, $List$$Type } from "java.util.List"
import { $ScriptFileInfo, $ScriptFileInfo$$Type } from "dev.latvian.mods.kubejs.script.ScriptFileInfo"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export interface $ScriptSource {
"readSource"(scriptFileInfo0: $ScriptFileInfo$$Type): $List<string>
}

export namespace $ScriptSource {
const probejs$$marker: never
}
export abstract class $ScriptSource$$Static implements $ScriptSource {
}
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $ScriptSource$$Type = ($ScriptSource | ((arg0: $ScriptFileInfo) => $List$$Type<string>));
}

declare module "dev.latvian.mods.kubejs.script.ScriptManager" {
import { $Context, $Context$$Type } from "dev.latvian.mods.rhino.Context"
import { $Map } from "java.util.Map"
import { $ResourceManager$$Type } from "net.minecraft.server.packs.resources.ResourceManager"
import { $Scriptable, $Scriptable$$Type } from "dev.latvian.mods.rhino.Scriptable"
import { $ScriptPack } from "dev.latvian.mods.kubejs.script.ScriptPack"
import { $AccessScriptManager } from "zzzank.probejs.mixins.AccessScriptManager"
import { $ScriptType, $ScriptType$$Type } from "dev.latvian.mods.kubejs.script.ScriptType"
import { $NativeJavaClass } from "dev.latvian.mods.rhino.NativeJavaClass"
import { $ClassShutter } from "dev.latvian.mods.rhino.ClassShutter"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export class $ScriptManager implements $ClassShutter, $AccessScriptManager {
readonly "packs": $Map<string, $ScriptPack>
readonly "scriptType": $ScriptType

constructor(t: $ScriptType$$Type)

public static "getCurrentContext"(): $Context
public "isClassAllowed"(name: string): boolean
public "load"(): void
public "loadFromDirectory"(): void
public "loadJavaClass"(name: string, error: boolean): $NativeJavaClass
public "reload"(resourceManager: $ResourceManager$$Type): void
public "unload"(): void
public "visibleToScripts"(fullClassName: string, type: integer): boolean
get "canListenEvents"(): boolean
set "canListenEvents"(value: boolean)
get "context"(): $Context
set "context"(value: $Context$$Type)
get "firstLoad"(): boolean
set "firstLoad"(value: boolean)
get "topLevelScope"(): $Scriptable
set "topLevelScope"(value: $Scriptable$$Type)
}
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $ScriptManager$$Type = ($ScriptManager);
}

declare module "dev.latvian.mods.kubejs.script.ScriptPackInfo" {
import { $List } from "java.util.List"
import { $Component } from "net.minecraft.network.chat.Component"
import { $ScriptFileInfo } from "dev.latvian.mods.kubejs.script.ScriptFileInfo"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export class $ScriptPackInfo {
readonly "displayName": $Component
readonly "namespace": string
readonly "pathStart": string
readonly "scripts": $List<$ScriptFileInfo>

constructor(n: string, p: string)

}
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $ScriptPackInfo$$Type = ($ScriptPackInfo);
}

declare module "dev.latvian.mods.kubejs.script.ConsoleLine$SourceLine" {
import { $Record } from "java.lang.Record"
import { $FriendlyByteBuf$$Type } from "net.minecraft.network.FriendlyByteBuf"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export class $ConsoleLine$SourceLine extends $Record {
constructor(buf: $FriendlyByteBuf$$Type)
constructor(source: string, line: integer)

public "line"(): integer
public "source"(): string
public static "write"(buf: $FriendlyByteBuf$$Type, sourceLine: $ConsoleLine$SourceLine$$Type): void
}
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $ConsoleLine$SourceLine$$Type = ($ConsoleLine$SourceLine);
}

declare module "dev.latvian.mods.kubejs.script.PlatformWrapper$ModInfo" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export class $PlatformWrapper$ModInfo {
constructor(i: string)

public "getCustomName"(): string
public "getId"(): string
public "getName"(): string
public "getVersion"(): string
public "setName"(n: string): void
get "customName"(): string
get "id"(): string
get "name"(): string
get "version"(): string
set "name"(value: string)
}
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $PlatformWrapper$ModInfo$$Type = ($PlatformWrapper$ModInfo);
}

declare module "dev.latvian.mods.kubejs.script.ScriptFileInfo" {
import { $ResourceLocation } from "net.minecraft.resources.ResourceLocation"
import { $List } from "java.util.List"
import { $ScriptPackInfo, $ScriptPackInfo$$Type } from "dev.latvian.mods.kubejs.script.ScriptPackInfo"
import { $ScriptSource$$Type } from "dev.latvian.mods.kubejs.script.ScriptSource"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export class $ScriptFileInfo {
readonly "file": string
readonly "id": $ResourceLocation
readonly "location": string
readonly "pack": $ScriptPackInfo

constructor(p: $ScriptPackInfo$$Type, f: string)

public "getPriority"(): integer
public "getProperties"(s: string): $List<string>
public "getProperty"(s: string, def: string): string
public "preload"(source: $ScriptSource$$Type): void
public "skipLoading"(): string
get "lines"(): string[]
set "lines"(value: string[])
get "priority"(): integer
}
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $ScriptFileInfo$$Type = ($ScriptFileInfo);
}

declare module "dev.latvian.mods.kubejs.script.ScriptFile" {
import { $Context$$Type } from "dev.latvian.mods.rhino.Context"
import { $ScriptFileInfo, $ScriptFileInfo$$Type } from "dev.latvian.mods.kubejs.script.ScriptFileInfo"
import { $Scriptable$$Type } from "dev.latvian.mods.rhino.Scriptable"
import { $Comparable } from "java.lang.Comparable"
import { $ScriptSource, $ScriptSource$$Type } from "dev.latvian.mods.kubejs.script.ScriptSource"
import { $ScriptPack, $ScriptPack$$Type } from "dev.latvian.mods.kubejs.script.ScriptPack"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export class $ScriptFile implements $Comparable<$ScriptFile> {
readonly "info": $ScriptFileInfo
readonly "pack": $ScriptPack
readonly "source": $ScriptSource

constructor(p: $ScriptPack$$Type, i: $ScriptFileInfo$$Type, s: $ScriptSource$$Type)

public "compareTo"(o: $ScriptFile$$Type): integer
public "load"(): void
public "redirect$eml000$preEvalProcess"(instance: $Context$$Type, scope: $Scriptable$$Type, source: string, sourceName: string, lineno: integer, securityDomain: any): any
}
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $ScriptFile$$Type = ($ScriptFile);
}

declare module "dev.latvian.mods.kubejs.script.data.DataPackEventJS" {
import { $ResourceLocation$$Type } from "net.minecraft.resources.ResourceLocation"
import { $JsonElement$$Type } from "com.google.gson.JsonElement"
import { $VirtualKubeJSDataPack$$Type } from "dev.latvian.mods.kubejs.script.data.VirtualKubeJSDataPack"
import { $MultiPackResourceManager$$Type } from "net.minecraft.server.packs.resources.MultiPackResourceManager"
import { $EventJS } from "dev.latvian.mods.kubejs.event.EventJS"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export class $DataPackEventJS extends $EventJS {
constructor(d: $VirtualKubeJSDataPack$$Type, rm: $MultiPackResourceManager$$Type)

public "add"(id: $ResourceLocation$$Type, content: string): void
public "addJson"(id: $ResourceLocation$$Type, json: $JsonElement$$Type): void
}
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $DataPackEventJS$$Type = ($DataPackEventJS);
}

declare module "dev.latvian.mods.kubejs.script.PlatformWrapper" {
import { $PlatformWrapper$ModInfo } from "dev.latvian.mods.kubejs.script.PlatformWrapper$ModInfo"
import { $Map } from "java.util.Map"
import { $Set } from "java.util.Set"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export class $PlatformWrapper {
constructor()

public static "breakpoint"(...args: any[]): void
public static "getInfo"(modID: string): $PlatformWrapper$ModInfo
public static "getList"(): $Set<string>
public static "getMcVersion"(): string
public static "getMinecraftVersion"(): integer
public static "getMinecraftVersionString"(): string
public static "getModVersion"(): string
public static "getMods"(): $Map<string, $PlatformWrapper$ModInfo>
public static "getName"(): string
public static "isClientEnvironment"(): boolean
public static "isDevelopmentEnvironment"(): boolean
public static "isFabric"(): boolean
public static "isForge"(): boolean
public static "isGeneratingData"(): boolean
public static "isLoaded"(modId: string): boolean
public static "setModName"(modId: string, name: string): void
}
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $PlatformWrapper$$Type = ($PlatformWrapper);
}

declare module "dev.latvian.mods.kubejs.script.ScriptType" {
import { $ScriptTypeHolder } from "dev.latvian.mods.kubejs.script.ScriptTypeHolder"
import { $Context$$Type } from "dev.latvian.mods.rhino.Context"
import { $List } from "java.util.List"
import { $ScriptTypePredicate } from "dev.latvian.mods.kubejs.script.ScriptTypePredicate"
import { $Enum } from "java.lang.Enum"
import { $ConsoleJS } from "dev.latvian.mods.kubejs.util.ConsoleJS"
import { $Predicate, $Predicate$$Type } from "java.util.function.Predicate"
import { $Path } from "java.nio.file.Path"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export class $ScriptType extends $Enum<$ScriptType> implements $ScriptTypePredicate, $ScriptTypeHolder {
static readonly "CLIENT": $ScriptType
static readonly "SERVER": $ScriptType
static readonly "STARTUP": $ScriptType
static readonly "VALUES": $ScriptType[]
readonly "console": $ConsoleJS
readonly "name": string
readonly "nameStrip": string
readonly "path": $Path

public "and"(predicate0: $Predicate$$Type<$ScriptType$$Type>): $Predicate<$ScriptType>
public static "getCurrent"(cx: $Context$$Type): $ScriptType
public "getLogFile"(): $Path
public "getValidTypes"(): $List<$ScriptType>
public "isClient"(): boolean
public static "isEqual"<T>(object0: any): $Predicate<T>
public "isServer"(): boolean
public "isStartup"(): boolean
public "kjs$getScriptType"(): $ScriptType
public "negate"(): $ScriptTypePredicate
public static "not"<T>(predicate0: $Predicate$$Type<T>): $Predicate<T>
public "or"(predicate0: $Predicate$$Type<$ScriptType$$Type>): $Predicate<$ScriptType>
public "test"(type: $ScriptType$$Type): boolean
public static "valueOf"(name: string): $ScriptType
public static "values"(): $ScriptType[]
get "logFile"(): $Path
get "validTypes"(): $List<$ScriptType>
get "client"(): boolean
get "server"(): boolean
get "startup"(): boolean
}
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $ScriptType$$Type = ($ScriptType | ("startup" | "server" | "client"));
}

declare module "dev.latvian.mods.kubejs.script.data.VirtualKubeJSDataPack" {
import { $ResourceLocation$$Type } from "net.minecraft.resources.ResourceLocation"
import { $AbstractPackResources } from "net.minecraft.server.packs.AbstractPackResources"
import { $Collection } from "java.util.Collection"
import { $Set } from "java.util.Set"
import { $MetadataSectionSerializer$$Type } from "net.minecraft.server.packs.metadata.MetadataSectionSerializer"
import { $PackType$$Type } from "net.minecraft.server.packs.PackType"
import { $IoSupplier } from "net.minecraft.server.packs.resources.IoSupplier"
import { $PackResources$ResourceOutput$$Type } from "net.minecraft.server.packs.PackResources$ResourceOutput"
import { $ExportablePackResources } from "dev.latvian.mods.kubejs.script.data.ExportablePackResources"
import { $Path$$Type } from "java.nio.file.Path"
import { $PackResources } from "net.minecraft.server.packs.PackResources"
import { $InputStream } from "java.io.InputStream"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export class $VirtualKubeJSDataPack extends $AbstractPackResources implements $ExportablePackResources {
readonly "high": boolean

constructor(h: boolean)

public "addData"(id: $ResourceLocation$$Type, data: string): void
public "close"(): void
public "export"(root: $Path$$Type): void
public "getChildren"(): $Collection<$PackResources>
public "getMetadataSection"<T>(serializer: $MetadataSectionSerializer$$Type<T>): T
public "getNamespaces"(type: $PackType$$Type): $Set<string>
public "getResource"(type: $PackType$$Type, location: $ResourceLocation$$Type): $IoSupplier<$InputStream>
public "getRootResource"(...path: string[]): $IoSupplier<$InputStream>
public "hasNamespace"(key: string): boolean
public "isHidden"(): boolean
public "listResources"(packType: $PackType$$Type, namespace: string, path: string, visitor: $PackResources$ResourceOutput$$Type): void
get "children"(): $Collection<$PackResources>
get "hidden"(): boolean
}
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $VirtualKubeJSDataPack$$Type = ($VirtualKubeJSDataPack);
}

declare module "dev.latvian.mods.kubejs.script.data.ExportablePackResources" {
import { $ResourceLocation$$Type } from "net.minecraft.resources.ResourceLocation"
import { $PackResources$ResourceOutput$$Type } from "net.minecraft.server.packs.PackResources$ResourceOutput"
import { $Collection } from "java.util.Collection"
import { $Set } from "java.util.Set"
import { $MetadataSectionSerializer$$Type } from "net.minecraft.server.packs.metadata.MetadataSectionSerializer"
import { $PackType$$Type } from "net.minecraft.server.packs.PackType"
import { $Path$$Type } from "java.nio.file.Path"
import { $PackResources } from "net.minecraft.server.packs.PackResources"
import { $IoSupplier } from "net.minecraft.server.packs.resources.IoSupplier"
import { $InputStream } from "java.io.InputStream"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export interface $ExportablePackResources extends $PackResources {
"close"(): void
"export"(path0: $Path$$Type): void
"getChildren"(): $Collection<$PackResources>
"getMetadataSection"<T>(metadataSectionSerializer0: $MetadataSectionSerializer$$Type<T>): T
"getNamespaces"(packType0: $PackType$$Type): $Set<string>
"getResource"(packType0: $PackType$$Type, resourceLocation1: $ResourceLocation$$Type): $IoSupplier<$InputStream>
"getRootResource"(...string0s: string[]): $IoSupplier<$InputStream>
"isBuiltin"(): boolean
"isHidden"(): boolean
"listResources"(packType0: $PackType$$Type, string1: string, string2: string, resourceOutput3: $PackResources$ResourceOutput$$Type): void
"packId"(): string
get "children"(): $Collection<$PackResources>
get "builtin"(): boolean
get "hidden"(): boolean
}

export namespace $ExportablePackResources {
const probejs$$marker: never
}
export abstract class $ExportablePackResources$$Static implements $ExportablePackResources {
}
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $ExportablePackResources$$Type = ($ExportablePackResources);
}

