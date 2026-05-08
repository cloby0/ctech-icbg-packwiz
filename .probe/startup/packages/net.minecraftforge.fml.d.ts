declare module "net.minecraftforge.fml.event.config.ModConfigEvent$Loading" {
import { $IConfigEvent, $IConfigEvent$$Type } from "net.minecraftforge.fml.config.IConfigEvent"
import { $ModConfig$$Type } from "net.minecraftforge.fml.config.ModConfig"
import { $Event, $Event$$Type } from "net.minecraftforge.eventbus.api.Event"
import { $ModConfigEvent } from "net.minecraftforge.fml.event.config.ModConfigEvent"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export class $ModConfigEvent$Loading extends $ModConfigEvent {
constructor(modConfig0: $ModConfig$$Type)
constructor()

public static "loading"(modConfig0: $ModConfig$$Type): $IConfigEvent
public static "reloading"(modConfig0: $ModConfig$$Type): $IConfigEvent
public "self"<T extends ($Event & $IConfigEvent)>(): T
public static "unloading"(modConfig0: $ModConfig$$Type): $IConfigEvent
}
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $ModConfigEvent$Loading$$Type = ($ModConfigEvent$Loading);
}

declare module "net.minecraftforge.fml.event.lifecycle.ModLifecycleEvent" {
import { $InterModComms$IMCMessage } from "net.minecraftforge.fml.InterModComms$IMCMessage"
import { $ModContainer$$Type } from "net.minecraftforge.fml.ModContainer"
import { $Stream } from "java.util.stream.Stream"
import { $Predicate$$Type } from "java.util.function.Predicate"
import { $IModBusEvent } from "net.minecraftforge.fml.event.IModBusEvent"
import { $Event } from "net.minecraftforge.eventbus.api.Event"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export class $ModLifecycleEvent extends $Event implements $IModBusEvent {
constructor()
constructor(modContainer0: $ModContainer$$Type)

public "description"(): string
public "getIMCStream"(): $Stream<$InterModComms$IMCMessage>
public "getIMCStream"(predicate0: $Predicate$$Type<string>): $Stream<$InterModComms$IMCMessage>
get "iMCStream"(): $Stream<$InterModComms$IMCMessage>
}
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $ModLifecycleEvent$$Type = ($ModLifecycleEvent);
}

declare module "net.minecraftforge.fml.event.config.ModConfigEvent$Reloading" {
import { $IConfigEvent, $IConfigEvent$$Type } from "net.minecraftforge.fml.config.IConfigEvent"
import { $ModConfig$$Type } from "net.minecraftforge.fml.config.ModConfig"
import { $Event, $Event$$Type } from "net.minecraftforge.eventbus.api.Event"
import { $ModConfigEvent } from "net.minecraftforge.fml.event.config.ModConfigEvent"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export class $ModConfigEvent$Reloading extends $ModConfigEvent {
constructor(modConfig0: $ModConfig$$Type)
constructor()

public static "loading"(modConfig0: $ModConfig$$Type): $IConfigEvent
public static "reloading"(modConfig0: $ModConfig$$Type): $IConfigEvent
public "self"<T extends ($Event & $IConfigEvent)>(): T
public static "unloading"(modConfig0: $ModConfig$$Type): $IConfigEvent
}
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $ModConfigEvent$Reloading$$Type = ($ModConfigEvent$Reloading);
}

declare module "net.minecraftforge.fml.IExtensionPoint$DisplayTest" {
import { $BiPredicate, $BiPredicate$$Type } from "java.util.function.BiPredicate"
import { $IExtensionPoint } from "net.minecraftforge.fml.IExtensionPoint"
import { $Record } from "java.lang.Record"
import { $Supplier, $Supplier$$Type } from "java.util.function.Supplier"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export class $IExtensionPoint$DisplayTest extends $Record implements $IExtensionPoint<$IExtensionPoint$DisplayTest> {
static readonly "IGNORESERVERONLY": string
static readonly "IGNORE_ALL_VERSION": $Supplier<$IExtensionPoint$DisplayTest>
static readonly "IGNORE_SERVER_VERSION": $Supplier<$IExtensionPoint$DisplayTest>

constructor(string0: string, biPredicate1: $BiPredicate$$Type<string, boolean>)
constructor(suppliedVersion: $Supplier$$Type<string>, remoteVersionTest: $BiPredicate$$Type<string, boolean>)

public "remoteVersionTest"(): $BiPredicate<string, boolean>
public "suppliedVersion"(): $Supplier<string>
}
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $IExtensionPoint$DisplayTest$$Type = ($IExtensionPoint$DisplayTest);
}

declare module "net.minecraftforge.fml.config.ConfigFileTypeHandler" {
import { $ModConfig, $ModConfig$$Type } from "net.minecraftforge.fml.config.ModConfig"
import { $CommentedFileConfig, $CommentedFileConfig$$Type } from "com.electronwill.nightconfig.core.file.CommentedFileConfig"
import { $Function } from "java.util.function.Function"
import { $Path$$Type } from "java.nio.file.Path"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export class $ConfigFileTypeHandler {
constructor()

public static "backUpConfig"(commentedFileConfig0: $CommentedFileConfig$$Type, int1: integer): void
public static "backUpConfig"(commentedFileConfig0: $CommentedFileConfig$$Type): void
public "reader"(path0: $Path$$Type): $Function<$ModConfig, $CommentedFileConfig>
public "unload"(path0: $Path$$Type, modConfig1: $ModConfig$$Type): void
}
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $ConfigFileTypeHandler$$Type = ($ConfigFileTypeHandler);
}

declare module "net.minecraftforge.fml.event.lifecycle.FMLClientSetupEvent" {
import { $ModContainer$$Type } from "net.minecraftforge.fml.ModContainer"
import { $ParallelDispatchEvent } from "net.minecraftforge.fml.event.lifecycle.ParallelDispatchEvent"
import { $ModLoadingStage$$Type } from "net.minecraftforge.fml.ModLoadingStage"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export class $FMLClientSetupEvent extends $ParallelDispatchEvent {
constructor(modContainer0: $ModContainer$$Type, modLoadingStage1: $ModLoadingStage$$Type)
constructor()

}
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $FMLClientSetupEvent$$Type = ($FMLClientSetupEvent);
}

declare module "net.minecraftforge.fml.config.IConfigEvent$ConfigConfig" {
import { $IConfigEvent } from "net.minecraftforge.fml.config.IConfigEvent"
import { $ModConfig, $ModConfig$$Type } from "net.minecraftforge.fml.config.ModConfig"
import { $Record } from "java.lang.Record"
import { $Function, $Function$$Type } from "java.util.function.Function"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export class $IConfigEvent$ConfigConfig extends $Record {
constructor(loading: $Function$$Type<$ModConfig$$Type, $IConfigEvent>, reloading: $Function$$Type<$ModConfig$$Type, $IConfigEvent>, unloading: $Function$$Type<$ModConfig$$Type, $IConfigEvent>)

public "loading"(): $Function<$ModConfig, $IConfigEvent>
public "reloading"(): $Function<$ModConfig, $IConfigEvent>
public "unloading"(): $Function<$ModConfig, $IConfigEvent>
}
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $IConfigEvent$ConfigConfig$$Type = ($IConfigEvent$ConfigConfig);
}

declare module "net.minecraftforge.fml.config.ModConfig" {
import { $ModContainer$$Type } from "net.minecraftforge.fml.ModContainer"
import { $CommentedConfig } from "com.electronwill.nightconfig.core.CommentedConfig"
import { $ModConfig$Type, $ModConfig$Type$$Type } from "net.minecraftforge.fml.config.ModConfig$Type"
import { $IConfigSpec, $IConfigSpec$$Type } from "net.minecraftforge.fml.config.IConfigSpec"
import { $Path } from "java.nio.file.Path"
import { $ConfigFileTypeHandler } from "net.minecraftforge.fml.config.ConfigFileTypeHandler"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export class $ModConfig {
constructor(type0: $ModConfig$Type$$Type, iConfigSpec1: $IConfigSpec$$Type<any>, modContainer2: $ModContainer$$Type, string3: string)
constructor(type0: $ModConfig$Type$$Type, iConfigSpec1: $IConfigSpec$$Type<any>, modContainer2: $ModContainer$$Type)

public "acceptSyncedConfig"(byte0s: byte[]): void
public "getConfigData"(): $CommentedConfig
public "getFileName"(): string
public "getFullPath"(): $Path
public "getHandler"(): $ConfigFileTypeHandler
public "getModId"(): string
public "getSpec"<T extends $IConfigSpec<T>>(): $IConfigSpec<T>
public "getType"(): $ModConfig$Type
public "save"(): void
get "configData"(): $CommentedConfig
get "fileName"(): string
get "fullPath"(): $Path
get "handler"(): $ConfigFileTypeHandler
get "modId"(): string
get "spec"(): $IConfigSpec<T>
get "type"(): $ModConfig$Type
}
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $ModConfig$$Type = ($ModConfig);
}

declare module "net.minecraftforge.fml.loading.progress.Message" {
import { $Message$MessageType$$Type } from "net.minecraftforge.fml.loading.progress.Message$MessageType"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export class $Message {
constructor(string0: string, messageType1: $Message$MessageType$$Type)

public "getText"(): string
public "getTypeColour"(): float[]
get "text"(): string
get "typeColour"(): float[]
}
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $Message$$Type = ($Message);
}

declare module "net.minecraftforge.fml.config.ModConfig$Type" {
import { $Enum } from "java.lang.Enum"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export class $ModConfig$Type extends $Enum<$ModConfig$Type> {
static readonly "CLIENT": $ModConfig$Type
static readonly "COMMON": $ModConfig$Type
static readonly "SERVER": $ModConfig$Type

public "extension"(): string
public static "valueOf"(string0: string): $ModConfig$Type
public static "values"(): $ModConfig$Type[]
}
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $ModConfig$Type$$Type = ($ModConfig$Type | ("common" | "client" | "server"));
}

declare module "net.minecraftforge.fml.event.lifecycle.FMLCommonSetupEvent" {
import { $ModContainer$$Type } from "net.minecraftforge.fml.ModContainer"
import { $ParallelDispatchEvent } from "net.minecraftforge.fml.event.lifecycle.ParallelDispatchEvent"
import { $ModLoadingStage$$Type } from "net.minecraftforge.fml.ModLoadingStage"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export class $FMLCommonSetupEvent extends $ParallelDispatchEvent {
constructor(modContainer0: $ModContainer$$Type, modLoadingStage1: $ModLoadingStage$$Type)
constructor()

}
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $FMLCommonSetupEvent$$Type = ($FMLCommonSetupEvent);
}

declare module "net.minecraftforge.fml.event.lifecycle.FMLLoadCompleteEvent" {
import { $ModContainer$$Type } from "net.minecraftforge.fml.ModContainer"
import { $ParallelDispatchEvent } from "net.minecraftforge.fml.event.lifecycle.ParallelDispatchEvent"
import { $ModLoadingStage$$Type } from "net.minecraftforge.fml.ModLoadingStage"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export class $FMLLoadCompleteEvent extends $ParallelDispatchEvent {
constructor(modContainer0: $ModContainer$$Type, modLoadingStage1: $ModLoadingStage$$Type)
constructor()

}
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $FMLLoadCompleteEvent$$Type = ($FMLLoadCompleteEvent);
}

declare module "net.minecraftforge.fml.event.lifecycle.FMLConstructModEvent" {
import { $ModContainer$$Type } from "net.minecraftforge.fml.ModContainer"
import { $ParallelDispatchEvent } from "net.minecraftforge.fml.event.lifecycle.ParallelDispatchEvent"
import { $ModLoadingStage$$Type } from "net.minecraftforge.fml.ModLoadingStage"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export class $FMLConstructModEvent extends $ParallelDispatchEvent {
constructor(modContainer0: $ModContainer$$Type, modLoadingStage1: $ModLoadingStage$$Type)
constructor()

}
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $FMLConstructModEvent$$Type = ($FMLConstructModEvent);
}

declare module "net.minecraftforge.fml.IExtensionPoint" {
import { $Record, $Record$$Type } from "java.lang.Record"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export interface $IExtensionPoint<T extends $Record = $Record> {
}

export namespace $IExtensionPoint {
const probejs$$marker: never
}
export abstract class $IExtensionPoint$$Static<T extends $Record = $Record> implements $IExtensionPoint<T> {
}
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $IExtensionPoint$$Type<T extends $Record = $Record> = ($IExtensionPoint<T>);
}

declare module "net.minecraftforge.fml.event.IModBusEvent" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export interface $IModBusEvent {
}

export namespace $IModBusEvent {
const probejs$$marker: never
}
export abstract class $IModBusEvent$$Static implements $IModBusEvent {
}
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $IModBusEvent$$Type = ($IModBusEvent);
}

declare module "net.minecraftforge.fml.event.config.ModConfigEvent$Unloading" {
import { $IConfigEvent, $IConfigEvent$$Type } from "net.minecraftforge.fml.config.IConfigEvent"
import { $ModConfig$$Type } from "net.minecraftforge.fml.config.ModConfig"
import { $Event, $Event$$Type } from "net.minecraftforge.eventbus.api.Event"
import { $ModConfigEvent } from "net.minecraftforge.fml.event.config.ModConfigEvent"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export class $ModConfigEvent$Unloading extends $ModConfigEvent {
constructor(modConfig0: $ModConfig$$Type)
constructor()

public static "loading"(modConfig0: $ModConfig$$Type): $IConfigEvent
public static "reloading"(modConfig0: $ModConfig$$Type): $IConfigEvent
public "self"<T extends ($Event & $IConfigEvent)>(): T
public static "unloading"(modConfig0: $ModConfig$$Type): $IConfigEvent
}
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $ModConfigEvent$Unloading$$Type = ($ModConfigEvent$Unloading);
}

declare module "net.minecraftforge.fml.event.lifecycle.ParallelDispatchEvent" {
import { $ModContainer$$Type } from "net.minecraftforge.fml.ModContainer"
import { $ModLifecycleEvent } from "net.minecraftforge.fml.event.lifecycle.ModLifecycleEvent"
import { $CompletableFuture } from "java.util.concurrent.CompletableFuture"
import { $ModLoadingStage$$Type } from "net.minecraftforge.fml.ModLoadingStage"
import { $Supplier$$Type } from "java.util.function.Supplier"
import { $Runnable$$Type } from "java.lang.Runnable"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export class $ParallelDispatchEvent extends $ModLifecycleEvent {
constructor()
constructor(modContainer0: $ModContainer$$Type, modLoadingStage1: $ModLoadingStage$$Type)

public "enqueueWork"<T>(supplier0: $Supplier$$Type<T>): $CompletableFuture<T>
public "enqueueWork"(runnable0: $Runnable$$Type): $CompletableFuture<void>
}
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $ParallelDispatchEvent$$Type = ($ParallelDispatchEvent);
}

declare module "net.minecraftforge.fml.config.IConfigEvent" {
import { $IConfigEvent$ConfigConfig } from "net.minecraftforge.fml.config.IConfigEvent$ConfigConfig"
import { $ModConfig, $ModConfig$$Type } from "net.minecraftforge.fml.config.ModConfig"
import { $Event, $Event$$Type } from "net.minecraftforge.eventbus.api.Event"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export interface $IConfigEvent {
"getConfig"(): $ModConfig
"self"<T extends ($Event & $IConfigEvent)>(): T
get "config"(): $ModConfig
}

export namespace $IConfigEvent {
const CONFIGCONFIG: $IConfigEvent$ConfigConfig
function loading(modConfig0: $ModConfig$$Type): $IConfigEvent
function reloading(modConfig0: $ModConfig$$Type): $IConfigEvent
function unloading(modConfig0: $ModConfig$$Type): $IConfigEvent
}
export abstract class $IConfigEvent$$Static implements $IConfigEvent {
static readonly "CONFIGCONFIG": $IConfigEvent$ConfigConfig

static "loading"(modConfig0: $ModConfig$$Type): $IConfigEvent
static "reloading"(modConfig0: $ModConfig$$Type): $IConfigEvent
static "unloading"(modConfig0: $ModConfig$$Type): $IConfigEvent
}
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $IConfigEvent$$Type = ($IConfigEvent | (() => $ModConfig$$Type));
}

declare module "net.minecraftforge.fml.ModLoadingStage" {
import { $Throwable$$Type } from "java.lang.Throwable"
import { $Enum } from "java.lang.Enum"
import { $DeferredWorkQueue } from "net.minecraftforge.fml.DeferredWorkQueue"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export class $ModLoadingStage extends $Enum<$ModLoadingStage> {
static readonly "COMMON_SETUP": $ModLoadingStage
static readonly "COMPLETE": $ModLoadingStage
static readonly "CONSTRUCT": $ModLoadingStage
static readonly "DONE": $ModLoadingStage
static readonly "ENQUEUE_IMC": $ModLoadingStage
static readonly "ERROR": $ModLoadingStage
static readonly "PROCESS_IMC": $ModLoadingStage
static readonly "SIDED_SETUP": $ModLoadingStage
static readonly "VALIDATE": $ModLoadingStage

public "currentState"(throwable0: $Throwable$$Type): $ModLoadingStage
public "getDeferredWorkQueue"(): $DeferredWorkQueue
public static "valueOf"(string0: string): $ModLoadingStage
public static "values"(): $ModLoadingStage[]
get "deferredWorkQueue"(): $DeferredWorkQueue
}
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $ModLoadingStage$$Type = ($ModLoadingStage | ("error" | "validate" | "construct" | "common_setup" | "sided_setup" | "enqueue_imc" | "process_imc" | "complete" | "done"));
}

declare module "net.minecraftforge.fml.event.lifecycle.InterModProcessEvent" {
import { $ModContainer$$Type } from "net.minecraftforge.fml.ModContainer"
import { $ParallelDispatchEvent } from "net.minecraftforge.fml.event.lifecycle.ParallelDispatchEvent"
import { $ModLoadingStage$$Type } from "net.minecraftforge.fml.ModLoadingStage"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export class $InterModProcessEvent extends $ParallelDispatchEvent {
constructor(modContainer0: $ModContainer$$Type, modLoadingStage1: $ModLoadingStage$$Type)
constructor()

}
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $InterModProcessEvent$$Type = ($InterModProcessEvent);
}

declare module "net.minecraftforge.fml.LogicalSide" {
import { $Enum } from "java.lang.Enum"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export class $LogicalSide extends $Enum<$LogicalSide> {
static readonly "CLIENT": $LogicalSide
static readonly "SERVER": $LogicalSide

public "isClient"(): boolean
public "isServer"(): boolean
public static "valueOf"(string0: string): $LogicalSide
public static "values"(): $LogicalSide[]
get "client"(): boolean
get "server"(): boolean
}
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $LogicalSide$$Type = ($LogicalSide | ("client" | "server"));
}

declare module "net.minecraftforge.fml.event.config.ModConfigEvent" {
import { $IModBusEvent } from "net.minecraftforge.fml.event.IModBusEvent"
import { $IConfigEvent, $IConfigEvent$$Type } from "net.minecraftforge.fml.config.IConfigEvent"
import { $ModConfig, $ModConfig$$Type } from "net.minecraftforge.fml.config.ModConfig"
import { $Event, $Event$$Type } from "net.minecraftforge.eventbus.api.Event"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export class $ModConfigEvent extends $Event implements $IModBusEvent, $IConfigEvent {
constructor()

public "getConfig"(): $ModConfig
public static "loading"(modConfig0: $ModConfig$$Type): $IConfigEvent
public static "reloading"(modConfig0: $ModConfig$$Type): $IConfigEvent
public "self"<T extends ($Event & $IConfigEvent)>(): T
public static "unloading"(modConfig0: $ModConfig$$Type): $IConfigEvent
get "config"(): $ModConfig
}
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $ModConfigEvent$$Type = ($ModConfigEvent);
}

declare module "net.minecraftforge.fml.loading.progress.Message$MessageType" {
import { $Enum } from "java.lang.Enum"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export class $Message$MessageType extends $Enum<$Message$MessageType> {
static readonly "LOC": $Message$MessageType
static readonly "MC": $Message$MessageType
static readonly "ML": $Message$MessageType
static readonly "MOD": $Message$MessageType

public "colour"(): float[]
public static "valueOf"(string0: string): $Message$MessageType
public static "values"(): $Message$MessageType[]
}
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $Message$MessageType$$Type = ($Message$MessageType | ("mc" | "ml" | "loc" | "mod"));
}

declare module "net.minecraftforge.fml.InterModComms$IMCMessage" {
import { $Record } from "java.lang.Record"
import { $Supplier, $Supplier$$Type } from "java.util.function.Supplier"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export class $InterModComms$IMCMessage extends $Record {
constructor(senderModId: string, modId: string, method: string, messageSupplier: $Supplier$$Type<any>)

/** @deprecated */
public "getMessageSupplier"<T>(): $Supplier<T>
/** @deprecated */
public "getMethod"(): string
/** @deprecated */
public "getModId"(): string
/** @deprecated */
public "getSenderModId"(): string
public "messageSupplier"(): $Supplier<any>
public "method"(): string
public "modId"(): string
public "senderModId"(): string
}
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $InterModComms$IMCMessage$$Type = ($InterModComms$IMCMessage);
}

declare module "net.minecraftforge.fml.ModContainer" {
import { $Throwable$$Type } from "java.lang.Throwable"
import { $Executor$$Type } from "java.util.concurrent.Executor"
import { $IModBusEvent, $IModBusEvent$$Type } from "net.minecraftforge.fml.event.IModBusEvent"
import { $BiFunction$$Type } from "java.util.function.BiFunction"
import { $CompletableFuture } from "java.util.concurrent.CompletableFuture"
import { $Record, $Record$$Type } from "java.lang.Record"
import { $IModInfo, $IModInfo$$Type } from "net.minecraftforge.forgespi.language.IModInfo"
import { $ModLoadingStage, $ModLoadingStage$$Type } from "net.minecraftforge.fml.ModLoadingStage"
import { $Supplier$$Type } from "java.util.function.Supplier"
import { $ProgressMeter$$Type } from "net.minecraftforge.fml.loading.progress.ProgressMeter"
import { $BiPredicate$$Type } from "java.util.function.BiPredicate"
import { $IExtensionPoint, $IExtensionPoint$$Type } from "net.minecraftforge.fml.IExtensionPoint"
import { $IConfigEvent$$Type } from "net.minecraftforge.fml.config.IConfigEvent"
import { $ModConfig$$Type } from "net.minecraftforge.fml.config.ModConfig"
import { $Event, $Event$$Type } from "net.minecraftforge.eventbus.api.Event"
import { $Optional } from "java.util.Optional"
import { $Class$$Type } from "java.lang.Class"
import { $IModStateTransition$EventGenerator$$Type } from "net.minecraftforge.fml.IModStateTransition$EventGenerator"
import { $IExtensionPoint$DisplayTest, $IExtensionPoint$DisplayTest$$Type } from "net.minecraftforge.fml.IExtensionPoint$DisplayTest"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export class $ModContainer {
constructor(iModInfo0: $IModInfo$$Type)

public "addConfig"(modConfig0: $ModConfig$$Type): void
public static "buildTransitionHandler"<T extends ($Event & $IModBusEvent)>(modContainer0: $ModContainer$$Type, eventGenerator1: $IModStateTransition$EventGenerator$$Type<T>, progressMeter2: $ProgressMeter$$Type, biFunction3: $BiFunction$$Type<$ModLoadingStage$$Type, $Throwable$$Type, $ModLoadingStage>, executor4: $Executor$$Type): $CompletableFuture<void>
public "dispatchConfigEvent"(iConfigEvent0: $IConfigEvent$$Type): void
public "getCurrentState"(): $ModLoadingStage
public "getCustomExtension"<T extends $Record>(class0: $Class$$Type<$IExtensionPoint$$Type<T>>): $Optional<T>
public "getMod"(): any
public "getModId"(): string
public "getModInfo"(): $IModInfo
public "getNamespace"(): string
public "matches"(object0: any): boolean
public "registerDisplayTest"(displayTest0: $IExtensionPoint$DisplayTest$$Type): void
public "registerDisplayTest"(string0: string, biPredicate1: $BiPredicate$$Type<string, boolean>): void
public "registerDisplayTest"(supplier0: $Supplier$$Type<string>, biPredicate1: $BiPredicate$$Type<string, boolean>): void
public "registerDisplayTest"(supplier0: $Supplier$$Type<$IExtensionPoint$DisplayTest>): void
public "registerExtensionPoint"<T extends ($Record & $IExtensionPoint<T>)>(class0: $Class$$Type<$IExtensionPoint$$Type<T>>, supplier1: $Supplier$$Type<T>): void
get "currentState"(): $ModLoadingStage
get "mod"(): any
get "modId"(): string
get "modInfo"(): $IModInfo
get "namespace"(): string
}
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $ModContainer$$Type = ($ModContainer);
}

declare module "net.minecraftforge.fml.event.lifecycle.InterModEnqueueEvent" {
import { $ModContainer$$Type } from "net.minecraftforge.fml.ModContainer"
import { $ParallelDispatchEvent } from "net.minecraftforge.fml.event.lifecycle.ParallelDispatchEvent"
import { $ModLoadingStage$$Type } from "net.minecraftforge.fml.ModLoadingStage"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export class $InterModEnqueueEvent extends $ParallelDispatchEvent {
constructor(modContainer0: $ModContainer$$Type, modLoadingStage1: $ModLoadingStage$$Type)
constructor()

}
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $InterModEnqueueEvent$$Type = ($InterModEnqueueEvent);
}

declare module "net.minecraftforge.fml.DeferredWorkQueue" {
import { $ModContainer$$Type } from "net.minecraftforge.fml.ModContainer"
import { $Optional, $Optional$$Type } from "java.util.Optional"
import { $CompletableFuture } from "java.util.concurrent.CompletableFuture"
import { $ModLoadingStage$$Type } from "net.minecraftforge.fml.ModLoadingStage"
import { $Supplier$$Type } from "java.util.function.Supplier"
import { $Runnable$$Type } from "java.lang.Runnable"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export class $DeferredWorkQueue {
constructor(modLoadingStage0: $ModLoadingStage$$Type)

public "enqueueWork"<T>(modContainer0: $ModContainer$$Type, supplier1: $Supplier$$Type<T>): $CompletableFuture<T>
public "enqueueWork"(modContainer0: $ModContainer$$Type, runnable1: $Runnable$$Type): $CompletableFuture<void>
public static "lookup"(optional0: $Optional$$Type<$ModLoadingStage$$Type>): $Optional<$DeferredWorkQueue>
public "runTasks"(): void
}
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $DeferredWorkQueue$$Type = ($DeferredWorkQueue);
}

declare module "net.minecraftforge.fml.event.lifecycle.FMLDedicatedServerSetupEvent" {
import { $ModContainer$$Type } from "net.minecraftforge.fml.ModContainer"
import { $ParallelDispatchEvent } from "net.minecraftforge.fml.event.lifecycle.ParallelDispatchEvent"
import { $ModLoadingStage$$Type } from "net.minecraftforge.fml.ModLoadingStage"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export class $FMLDedicatedServerSetupEvent extends $ParallelDispatchEvent {
constructor(modContainer0: $ModContainer$$Type, modLoadingStage1: $ModLoadingStage$$Type)
constructor()

}
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $FMLDedicatedServerSetupEvent$$Type = ($FMLDedicatedServerSetupEvent);
}

declare module "net.minecraftforge.fml.config.IConfigSpec" {
import { $LongSupplier$$Type } from "java.util.function.LongSupplier"
import { $Set } from "java.util.Set"
import { $EnumGetMethod$$Type } from "com.electronwill.nightconfig.core.EnumGetMethod"
import { $Supplier$$Type } from "java.util.function.Supplier"
import { $OptionalInt } from "java.util.OptionalInt"
import { $ConfigFormat } from "com.electronwill.nightconfig.core.ConfigFormat"
import { $OptionalLong } from "java.util.OptionalLong"
import { $CommentedConfig$$Type } from "com.electronwill.nightconfig.core.CommentedConfig"
import { $List$$Type } from "java.util.List"
import { $Enum, $Enum$$Type } from "java.lang.Enum"
import { $Map } from "java.util.Map"
import { $Optional } from "java.util.Optional"
import { $Class$$Type } from "java.lang.Class"
import { $UnmodifiableConfig$Entry } from "com.electronwill.nightconfig.core.UnmodifiableConfig$Entry"
import { $IntSupplier$$Type } from "java.util.function.IntSupplier"
import { $UnmodifiableConfig } from "com.electronwill.nightconfig.core.UnmodifiableConfig"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export interface $IConfigSpec<T extends $IConfigSpec<T> = $IConfigSpec<T>> extends $UnmodifiableConfig {
"acceptConfig"(commentedConfig0: $CommentedConfig$$Type): void
"afterReload"(): void
"apply"<T>(string0: string): T
"apply"<T>(list0: $List$$Type<string>): T
"configFormat"(): $ConfigFormat<any>
"contains"(string0: string): boolean
"contains"(list0: $List$$Type<string>): boolean
"correct"(commentedConfig0: $CommentedConfig$$Type): integer
"entrySet"(): $Set<$UnmodifiableConfig$Entry>
"get"<T>(list0: $List$$Type<string>): T
"get"<T>(string0: string): T
"getByte"(string0: string): byte
"getByte"(list0: $List$$Type<string>): byte
"getByteOrElse"(list0: $List$$Type<string>, byte1: byte): byte
"getByteOrElse"(string0: string, byte1: byte): byte
"getChar"(list0: $List$$Type<string>): character
"getChar"(string0: string): character
"getCharOrElse"(string0: string, char1: character): character
"getCharOrElse"(list0: $List$$Type<string>, char1: character): character
"getEnum"<T extends $Enum<T>>(list0: $List$$Type<string>, class1: $Class$$Type<T>): T
"getEnum"<T extends $Enum<T>>(list0: $List$$Type<string>, class1: $Class$$Type<T>, enumGetMethod2: $EnumGetMethod$$Type): T
"getEnum"<T extends $Enum<T>>(string0: string, class1: $Class$$Type<T>): T
"getEnum"<T extends $Enum<T>>(string0: string, class1: $Class$$Type<T>, enumGetMethod2: $EnumGetMethod$$Type): T
"getEnumOrElse"<T extends $Enum<T>>(string0: string, class1: $Class$$Type<T>, supplier2: $Supplier$$Type<T>): T
"getEnumOrElse"<T extends $Enum<T>>(list0: $List$$Type<string>, t1: T): T
"getEnumOrElse"<T extends $Enum<T>>(list0: $List$$Type<string>, class1: $Class$$Type<T>, enumGetMethod2: $EnumGetMethod$$Type, supplier3: $Supplier$$Type<T>): T
"getEnumOrElse"<T extends $Enum<T>>(list0: $List$$Type<string>, class1: $Class$$Type<T>, supplier2: $Supplier$$Type<T>): T
"getEnumOrElse"<T extends $Enum<T>>(string0: string, t1: T, enumGetMethod2: $EnumGetMethod$$Type): T
"getEnumOrElse"<T extends $Enum<T>>(string0: string, t1: T): T
"getEnumOrElse"<T extends $Enum<T>>(list0: $List$$Type<string>, t1: T, enumGetMethod2: $EnumGetMethod$$Type): T
"getEnumOrElse"<T extends $Enum<T>>(string0: string, class1: $Class$$Type<T>, enumGetMethod2: $EnumGetMethod$$Type, supplier3: $Supplier$$Type<T>): T
"getInt"(list0: $List$$Type<string>): integer
"getInt"(string0: string): integer
"getIntOrElse"(string0: string, int1: integer): integer
"getIntOrElse"(list0: $List$$Type<string>, int1: integer): integer
"getIntOrElse"(list0: $List$$Type<string>, intSupplier1: $IntSupplier$$Type): integer
"getIntOrElse"(string0: string, intSupplier1: $IntSupplier$$Type): integer
"getLong"(list0: $List$$Type<string>): long
"getLong"(string0: string): long
"getLongOrElse"(list0: $List$$Type<string>, long1: long): long
"getLongOrElse"(string0: string, long1: long): long
"getLongOrElse"(string0: string, longSupplier1: $LongSupplier$$Type): long
"getLongOrElse"(list0: $List$$Type<string>, longSupplier1: $LongSupplier$$Type): long
"getOptional"<T>(list0: $List$$Type<string>): $Optional<T>
"getOptional"<T>(string0: string): $Optional<T>
"getOptionalEnum"<T extends $Enum<T>>(list0: $List$$Type<string>, class1: $Class$$Type<T>, enumGetMethod2: $EnumGetMethod$$Type): $Optional<T>
"getOptionalEnum"<T extends $Enum<T>>(list0: $List$$Type<string>, class1: $Class$$Type<T>): $Optional<T>
"getOptionalEnum"<T extends $Enum<T>>(string0: string, class1: $Class$$Type<T>, enumGetMethod2: $EnumGetMethod$$Type): $Optional<T>
"getOptionalEnum"<T extends $Enum<T>>(string0: string, class1: $Class$$Type<T>): $Optional<T>
"getOptionalInt"(list0: $List$$Type<string>): $OptionalInt
"getOptionalInt"(string0: string): $OptionalInt
"getOptionalLong"(string0: string): $OptionalLong
"getOptionalLong"(list0: $List$$Type<string>): $OptionalLong
"getOrElse"<T>(string0: string, supplier1: $Supplier$$Type<T>): T
"getOrElse"<T>(list0: $List$$Type<string>, supplier1: $Supplier$$Type<T>): T
"getOrElse"<T>(list0: $List$$Type<string>, t1: T): T
"getOrElse"<T>(string0: string, t1: T): T
"getRaw"<T>(list0: $List$$Type<string>): T
"getRaw"<T>(string0: string): T
"getShort"(list0: $List$$Type<string>): short
"getShort"(string0: string): short
"getShortOrElse"(list0: $List$$Type<string>, short1: short): short
"getShortOrElse"(string0: string, short1: short): short
"isCorrect"(commentedConfig0: $CommentedConfig$$Type): boolean
"isCorrecting"(): boolean
"isEmpty"(): boolean
"isNull"(string0: string): boolean
"isNull"(list0: $List$$Type<string>): boolean
"self"(): T
"size"(): integer
"valueMap"(): $Map<string, any>
get "correcting"(): boolean
get "empty"(): boolean
}

export namespace $IConfigSpec {
const probejs$$marker: never
}
export abstract class $IConfigSpec$$Static<T extends $IConfigSpec<T> = $IConfigSpec<T>> implements $IConfigSpec<T> {
}
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $IConfigSpec$$Type<T extends $IConfigSpec<T> = $IConfigSpec<T>> = ($IConfigSpec<T>);
}

declare module "net.minecraftforge.fml.loading.progress.ProgressMeter" {
import { $Message, $Message$$Type } from "net.minecraftforge.fml.loading.progress.Message"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export class $ProgressMeter {
constructor(string0: string, int1: integer, int2: integer, message3: $Message$$Type)

public "complete"(): void
public "current"(): integer
public "increment"(): void
public "label"(string0: string): void
public "label"(): $Message
public "name"(): string
public "progress"(): float
public "setAbsolute"(int0: integer): void
public "steps"(): integer
set "absolute"(value: integer)
}
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $ProgressMeter$$Type = ($ProgressMeter);
}

declare module "net.minecraftforge.fml.IModStateTransition$EventGenerator" {
import { $ModContainer, $ModContainer$$Type } from "net.minecraftforge.fml.ModContainer"
import { $IModBusEvent, $IModBusEvent$$Type } from "net.minecraftforge.fml.event.IModBusEvent"
import { $Event, $Event$$Type } from "net.minecraftforge.eventbus.api.Event"
import { $Function, $Function$$Type } from "java.util.function.Function"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export interface $IModStateTransition$EventGenerator<T extends ($Event & $IModBusEvent) = ($Event & $IModBusEvent)> extends $Function<$ModContainer, T> {
"andThen"<V>(function0: $Function$$Type<T, V>): $Function<$ModContainer, V>
"apply"(modContainer0: $ModContainer$$Type): T
"compose"<V>(function0: $Function$$Type<V, $ModContainer>): $Function<V, T>
}

export namespace $IModStateTransition$EventGenerator {
function fromFunction<FN extends ($Event & $IModBusEvent)>(function0: $Function$$Type<$ModContainer$$Type, FN>): $IModStateTransition$EventGenerator<FN>
function identity<T>(): $Function<T, T>
}
export abstract class $IModStateTransition$EventGenerator$$Static<T extends ($Event & $IModBusEvent) = ($Event & $IModBusEvent)> implements $IModStateTransition$EventGenerator<T> {
static "fromFunction"<FN extends ($Event & $IModBusEvent)>(function0: $Function$$Type<$ModContainer$$Type, FN>): $IModStateTransition$EventGenerator<FN>
static "identity"<T>(): $Function<T, T>
}
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $IModStateTransition$EventGenerator$$Type<T extends ($Event & $IModBusEvent) = ($Event & $IModBusEvent)> = ($IModStateTransition$EventGenerator<T> | ((arg0: $ModContainer) => T));
}

