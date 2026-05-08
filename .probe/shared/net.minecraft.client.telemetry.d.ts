declare module "net.minecraft.client.telemetry.TelemetryEventType" {
import { $TelemetryEvent } from "com.mojang.authlib.minecraft.TelemetryEvent"
import { $List } from "java.util.List"
import { $Codec } from "com.mojang.serialization.Codec"
import { $TelemetryEventInstance } from "net.minecraft.client.telemetry.TelemetryEventInstance"
import { $TelemetryProperty, $TelemetryProperty$$Type } from "net.minecraft.client.telemetry.TelemetryProperty"
import { $TelemetryPropertyMap$$Type } from "net.minecraft.client.telemetry.TelemetryPropertyMap"
import { $TelemetryEventType$Builder } from "net.minecraft.client.telemetry.TelemetryEventType$Builder"
import { $MutableComponent } from "net.minecraft.network.chat.MutableComponent"
import { $TelemetrySession$$Type } from "com.mojang.authlib.minecraft.TelemetrySession"

export class $TelemetryEventType {
static readonly "ADVANCEMENT_MADE": $TelemetryEventType
static readonly "CODEC": $Codec<$TelemetryEventType>
static readonly "GAME_LOAD_TIMES": $TelemetryEventType
static readonly "PERFORMANCE_METRICS": $TelemetryEventType
static readonly "WORLD_LOADED": $TelemetryEventType
static readonly "WORLD_LOAD_TIMES": $TelemetryEventType
static readonly "WORLD_UNLOADED": $TelemetryEventType

public static "builder"(string0: string, string1: string): $TelemetryEventType$Builder
public "codec"(): $Codec<$TelemetryEventInstance>
public "contains"<T>(telemetryProperty0: $TelemetryProperty$$Type<T>): boolean
public "description"(): $MutableComponent
public "export"(telemetrySession0: $TelemetrySession$$Type, telemetryPropertyMap1: $TelemetryPropertyMap$$Type): $TelemetryEvent
public "id"(): string
public "isOptIn"(): boolean
public "properties"(): $List<$TelemetryProperty<any>>
public "title"(): $MutableComponent
public static "values"(): $List<$TelemetryEventType>
get "optIn"(): boolean
}
}

declare module "net.minecraft.client.telemetry.TelemetryProperty" {
import { $TelemetryProperty$ServerType } from "net.minecraft.client.telemetry.TelemetryProperty$ServerType"
import { $GameLoadTimesEvent$Measurement } from "net.minecraft.client.telemetry.events.GameLoadTimesEvent$Measurement"
import { $TelemetryProperty$Exporter, $TelemetryProperty$Exporter$$Type } from "net.minecraft.client.telemetry.TelemetryProperty$Exporter"
import { $TelemetryPropertyContainer$$Type } from "com.mojang.authlib.minecraft.TelemetryPropertyContainer"
import { $TelemetryProperty$GameMode } from "net.minecraft.client.telemetry.TelemetryProperty$GameMode"
import { $LongList } from "it.unimi.dsi.fastutil.longs.LongList"
import { $TelemetryPropertyMap$$Type } from "net.minecraft.client.telemetry.TelemetryPropertyMap"
import { $Record } from "java.lang.Record"
import { $UUID } from "java.util.UUID"
import { $Instant } from "java.time.Instant"
import { $MutableComponent } from "net.minecraft.network.chat.MutableComponent"
import { $Codec, $Codec$$Type } from "com.mojang.serialization.Codec"

export class $TelemetryProperty<T = any> extends $Record {
static readonly "ADVANCEMENT_GAME_TIME": $TelemetryProperty<long>
static readonly "ADVANCEMENT_ID": $TelemetryProperty<string>
static readonly "CLIENT_ID": $TelemetryProperty<string>
static readonly "CLIENT_MODDED": $TelemetryProperty<boolean>
static readonly "DEDICATED_MEMORY_KB": $TelemetryProperty<integer>
static readonly "EVENT_TIMESTAMP_UTC": $TelemetryProperty<$Instant>
static readonly "FRAME_RATE_SAMPLES": $TelemetryProperty<$LongList>
static readonly "GAME_MODE": $TelemetryProperty<$TelemetryProperty$GameMode>
static readonly "GAME_VERSION": $TelemetryProperty<string>
static readonly "LAUNCHER_NAME": $TelemetryProperty<string>
static readonly "LOAD_TIME_BOOTSTRAP_MS": $TelemetryProperty<$GameLoadTimesEvent$Measurement>
static readonly "LOAD_TIME_LOADING_OVERLAY_MS": $TelemetryProperty<$GameLoadTimesEvent$Measurement>
static readonly "LOAD_TIME_PRE_WINDOW_MS": $TelemetryProperty<$GameLoadTimesEvent$Measurement>
static readonly "LOAD_TIME_TOTAL_TIME_MS": $TelemetryProperty<$GameLoadTimesEvent$Measurement>
static readonly "MINECRAFT_SESSION_ID": $TelemetryProperty<$UUID>
static readonly "NEW_WORLD": $TelemetryProperty<boolean>
static readonly "NUMBER_OF_SAMPLES": $TelemetryProperty<integer>
static readonly "OPERATING_SYSTEM": $TelemetryProperty<string>
static readonly "OPT_IN": $TelemetryProperty<boolean>
static readonly "PLATFORM": $TelemetryProperty<string>
static readonly "REALMS_MAP_CONTENT": $TelemetryProperty<string>
static readonly "RENDER_DISTANCE": $TelemetryProperty<integer>
static readonly "RENDER_TIME_SAMPLES": $TelemetryProperty<$LongList>
static readonly "SECONDS_SINCE_LOAD": $TelemetryProperty<integer>
static readonly "SERVER_MODDED": $TelemetryProperty<boolean>
static readonly "SERVER_TYPE": $TelemetryProperty<$TelemetryProperty$ServerType>
static readonly "TICKS_SINCE_LOAD": $TelemetryProperty<integer>
static readonly "USED_MEMORY_SAMPLES": $TelemetryProperty<$LongList>
static readonly "USER_ID": $TelemetryProperty<string>
static readonly "WORLD_LOAD_TIME_MS": $TelemetryProperty<integer>
static readonly "WORLD_SESSION_ID": $TelemetryProperty<$UUID>

constructor(string0: string, string1: string, codec2: $Codec$$Type<T>, exporter3: $TelemetryProperty$Exporter$$Type<T>)

public static "bool"(string0: string, string1: string): $TelemetryProperty<boolean>
public "codec"(): $Codec<T>
public static "create"<T>(string0: string, string1: string, codec2: $Codec$$Type<T>, exporter3: $TelemetryProperty$Exporter$$Type<T>): $TelemetryProperty<T>
public "export"(telemetryPropertyMap0: $TelemetryPropertyMap$$Type, telemetryPropertyContainer1: $TelemetryPropertyContainer$$Type): void
public "exportKey"(): string
public "exporter"(): $TelemetryProperty$Exporter<T>
public static "gameLoadMeasurement"(string0: string, string1: string): $TelemetryProperty<$GameLoadTimesEvent$Measurement>
public "id"(): string
public static "integer"(string0: string, string1: string): $TelemetryProperty<integer>
public static "longSamples"(string0: string, string1: string): $TelemetryProperty<$LongList>
public static "makeLong"(string0: string, string1: string): $TelemetryProperty<long>
public static "string"(string0: string, string1: string): $TelemetryProperty<string>
public "title"(): $MutableComponent
public static "uuid"(string0: string, string1: string): $TelemetryProperty<$UUID>
}
}

declare module "net.minecraft.client.telemetry.TelemetryProperty$GameMode" {
import { $Codec } from "com.mojang.serialization.Codec"
import { $Enum, $Enum$$Type } from "java.lang.Enum"
import { $StringRepresentable, $StringRepresentable$$Type } from "net.minecraft.util.StringRepresentable"
import { $StringRepresentable$EnumCodec } from "net.minecraft.util.StringRepresentable$EnumCodec"
import { $Keyable } from "com.mojang.serialization.Keyable"
import { $Supplier$$Type } from "java.util.function.Supplier"
import { $Function$$Type } from "java.util.function.Function"

export class $TelemetryProperty$GameMode extends $Enum<$TelemetryProperty$GameMode> implements $StringRepresentable {
static readonly "ADVENTURE": $TelemetryProperty$GameMode
static readonly "CODEC": $Codec<$TelemetryProperty$GameMode>
static readonly "CREATIVE": $TelemetryProperty$GameMode
static readonly "HARDCORE": $TelemetryProperty$GameMode
static readonly "SPECTATOR": $TelemetryProperty$GameMode
static readonly "SURVIVAL": $TelemetryProperty$GameMode

public static "fromEnum"<E extends ($Enum<E> & $StringRepresentable)>(supplier0: $Supplier$$Type<E[]>): $StringRepresentable$EnumCodec<E>
public static "fromEnumWithMapping"<E extends ($Enum<E> & $StringRepresentable)>(supplier0: $Supplier$$Type<E[]>, function1: $Function$$Type<string, string>): $StringRepresentable$EnumCodec<E>
public "getSerializedName"(): string
public "id"(): integer
public static "keys"(stringRepresentable0s: $StringRepresentable$$Type[]): $Keyable
public static "valueOf"(string0: string): $TelemetryProperty$GameMode
public static "values"(): $TelemetryProperty$GameMode[]
get "serializedName"(): string
}
}

declare module "net.minecraft.client.telemetry.ClientTelemetryManager" {
import { $User$$Type } from "net.minecraft.client.User"
import { $WorldSessionTelemetryManager } from "net.minecraft.client.telemetry.WorldSessionTelemetryManager"
import { $TelemetryEventSender } from "net.minecraft.client.telemetry.TelemetryEventSender"
import { $Minecraft$$Type } from "net.minecraft.client.Minecraft"
import { $Duration$$Type } from "java.time.Duration"
import { $Path } from "java.nio.file.Path"
import { $AutoCloseable } from "java.lang.AutoCloseable"
import { $UserApiService$$Type } from "com.mojang.authlib.minecraft.UserApiService"

export class $ClientTelemetryManager implements $AutoCloseable {
constructor(minecraft0: $Minecraft$$Type, userApiService1: $UserApiService$$Type, user2: $User$$Type)

public "close"(): void
public "createWorldSessionManager"(boolean0: boolean, duration1: $Duration$$Type, string2: string): $WorldSessionTelemetryManager
public "getLogDirectory"(): $Path
public "getOutsideSessionSender"(): $TelemetryEventSender
get "logDirectory"(): $Path
get "outsideSessionSender"(): $TelemetryEventSender
}
}

declare module "net.minecraft.client.telemetry.TelemetryPropertyMap" {
import { $List$$Type } from "java.util.List"
import { $Codec } from "com.mojang.serialization.Codec"
import { $TelemetryProperty, $TelemetryProperty$$Type } from "net.minecraft.client.telemetry.TelemetryProperty"
import { $Set } from "java.util.Set"
import { $TelemetryPropertyMap$Builder } from "net.minecraft.client.telemetry.TelemetryPropertyMap$Builder"

export class $TelemetryPropertyMap {
public static "builder"(): $TelemetryPropertyMap$Builder
public static "createCodec"(list0: $List$$Type<$TelemetryProperty$$Type<any>>): $Codec<$TelemetryPropertyMap>
public "get"<T>(telemetryProperty0: $TelemetryProperty$$Type<T>): T
public "propertySet"(): $Set<$TelemetryProperty<any>>
}
}

declare module "net.minecraft.client.telemetry.TelemetryEventType$Builder" {
import { $List$$Type } from "java.util.List"
import { $TelemetryProperty$$Type } from "net.minecraft.client.telemetry.TelemetryProperty"
import { $TelemetryEventType } from "net.minecraft.client.telemetry.TelemetryEventType"

export class $TelemetryEventType$Builder {
public "define"<T>(telemetryProperty0: $TelemetryProperty$$Type<T>): $TelemetryEventType$Builder
public "defineAll"(list0: $List$$Type<$TelemetryProperty$$Type<any>>): $TelemetryEventType$Builder
public "optIn"(): $TelemetryEventType$Builder
public "register"(): $TelemetryEventType
}
}

declare module "net.minecraft.client.telemetry.WorldSessionTelemetryManager" {
import { $TelemetryEventSender$$Type } from "net.minecraft.client.telemetry.TelemetryEventSender"
import { $Duration$$Type } from "java.time.Duration"
import { $Advancement$$Type } from "net.minecraft.advancements.Advancement"
import { $Level$$Type } from "net.minecraft.world.level.Level"
import { $GameType$$Type } from "net.minecraft.world.level.GameType"

export class $WorldSessionTelemetryManager {
constructor(telemetryEventSender0: $TelemetryEventSender$$Type, boolean1: boolean, duration2: $Duration$$Type, string3: string)

public "onAdvancementDone"(level0: $Level$$Type, advancement1: $Advancement$$Type): void
public "onDisconnect"(): void
public "onPlayerInfoReceived"(gameType0: $GameType$$Type, boolean1: boolean): void
public "onServerBrandReceived"(string0: string): void
public "setTime"(long0: long): void
public "tick"(): void
public "worldSessionStart"(): void
set "time"(value: long)
}
}

declare module "net.minecraft.client.telemetry.TelemetryPropertyMap$Builder" {
import { $TelemetryProperty$$Type } from "net.minecraft.client.telemetry.TelemetryProperty"
import { $TelemetryPropertyMap, $TelemetryPropertyMap$$Type } from "net.minecraft.client.telemetry.TelemetryPropertyMap"

export class $TelemetryPropertyMap$Builder {
public "build"(): $TelemetryPropertyMap
public "put"<T>(telemetryProperty0: $TelemetryProperty$$Type<T>, t1: T): $TelemetryPropertyMap$Builder
public "putAll"(telemetryPropertyMap0: $TelemetryPropertyMap$$Type): $TelemetryPropertyMap$Builder
public "putIfNotNull"<T>(telemetryProperty0: $TelemetryProperty$$Type<T>, t1: T): $TelemetryPropertyMap$Builder
}
}

declare module "net.minecraft.client.telemetry.TelemetryEventSender" {
import { $Consumer$$Type } from "java.util.function.Consumer"
import { $TelemetryEventType$$Type } from "net.minecraft.client.telemetry.TelemetryEventType"
import { $TelemetryPropertyMap$Builder$$Type } from "net.minecraft.client.telemetry.TelemetryPropertyMap$Builder"

export interface $TelemetryEventSender {
"decorate"(consumer0: $Consumer$$Type<$TelemetryPropertyMap$Builder$$Type>): $TelemetryEventSender
"send"(telemetryEventType0: $TelemetryEventType$$Type, consumer1: $Consumer$$Type<$TelemetryPropertyMap$Builder$$Type>): void
}

export namespace $TelemetryEventSender {
const DISABLED: $TelemetryEventSender
}
export abstract class $TelemetryEventSender$$Static implements $TelemetryEventSender {
static readonly "DISABLED": $TelemetryEventSender

}
}

declare module "net.minecraft.client.telemetry.TelemetryProperty$Exporter" {
import { $TelemetryPropertyContainer$$Type } from "com.mojang.authlib.minecraft.TelemetryPropertyContainer"

export interface $TelemetryProperty$Exporter<T = any> {
"apply"(telemetryPropertyContainer0: $TelemetryPropertyContainer$$Type, string1: string, t2: T): void
}

export namespace $TelemetryProperty$Exporter {
const probejs$$marker: never
}
export abstract class $TelemetryProperty$Exporter$$Static<T = any> implements $TelemetryProperty$Exporter<T> {
}
}

declare module "net.minecraft.client.telemetry.events.GameLoadTimesEvent$Measurement" {
import { $Codec } from "com.mojang.serialization.Codec"
import { $Record } from "java.lang.Record"

export class $GameLoadTimesEvent$Measurement extends $Record {
static readonly "CODEC": $Codec<$GameLoadTimesEvent$Measurement>

constructor(int0: integer)

public "millis"(): integer
}
}

declare module "net.minecraft.client.telemetry.TelemetryEventInstance" {
import { $TelemetryEvent } from "com.mojang.authlib.minecraft.TelemetryEvent"
import { $Codec } from "com.mojang.serialization.Codec"
import { $TelemetryEventType, $TelemetryEventType$$Type } from "net.minecraft.client.telemetry.TelemetryEventType"
import { $TelemetryPropertyMap, $TelemetryPropertyMap$$Type } from "net.minecraft.client.telemetry.TelemetryPropertyMap"
import { $Record } from "java.lang.Record"
import { $TelemetrySession$$Type } from "com.mojang.authlib.minecraft.TelemetrySession"

export class $TelemetryEventInstance extends $Record {
static readonly "CODEC": $Codec<$TelemetryEventInstance>

constructor(telemetryEventType0: $TelemetryEventType$$Type, telemetryPropertyMap1: $TelemetryPropertyMap$$Type)

public "export"(telemetrySession0: $TelemetrySession$$Type): $TelemetryEvent
public "properties"(): $TelemetryPropertyMap
public "type"(): $TelemetryEventType
}
}

declare module "net.minecraft.client.telemetry.TelemetryProperty$ServerType" {
import { $Codec } from "com.mojang.serialization.Codec"
import { $Enum, $Enum$$Type } from "java.lang.Enum"
import { $StringRepresentable, $StringRepresentable$$Type } from "net.minecraft.util.StringRepresentable"
import { $StringRepresentable$EnumCodec } from "net.minecraft.util.StringRepresentable$EnumCodec"
import { $Keyable } from "com.mojang.serialization.Keyable"
import { $Supplier$$Type } from "java.util.function.Supplier"
import { $Function$$Type } from "java.util.function.Function"

export class $TelemetryProperty$ServerType extends $Enum<$TelemetryProperty$ServerType> implements $StringRepresentable {
static readonly "CODEC": $Codec<$TelemetryProperty$ServerType>
static readonly "LOCAL": $TelemetryProperty$ServerType
static readonly "OTHER": $TelemetryProperty$ServerType
static readonly "REALM": $TelemetryProperty$ServerType

public static "fromEnum"<E extends ($Enum<E> & $StringRepresentable)>(supplier0: $Supplier$$Type<E[]>): $StringRepresentable$EnumCodec<E>
public static "fromEnumWithMapping"<E extends ($Enum<E> & $StringRepresentable)>(supplier0: $Supplier$$Type<E[]>, function1: $Function$$Type<string, string>): $StringRepresentable$EnumCodec<E>
public "getSerializedName"(): string
public static "keys"(stringRepresentable0s: $StringRepresentable$$Type[]): $Keyable
public static "valueOf"(string0: string): $TelemetryProperty$ServerType
public static "values"(): $TelemetryProperty$ServerType[]
get "serializedName"(): string
}
}

