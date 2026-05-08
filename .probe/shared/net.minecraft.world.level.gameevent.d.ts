declare module "net.minecraft.world.level.gameevent.BlockPositionSource" {
import { $Codec } from "com.mojang.serialization.Codec"
import { $BlockPos$$Type } from "net.minecraft.core.BlockPos"
import { $Vec3 } from "net.minecraft.world.phys.Vec3"
import { $Optional } from "java.util.Optional"
import { $PositionSourceType } from "net.minecraft.world.level.gameevent.PositionSourceType"
import { $Level$$Type } from "net.minecraft.world.level.Level"
import { $PositionSource } from "net.minecraft.world.level.gameevent.PositionSource"

export class $BlockPositionSource implements $PositionSource {
static readonly "CODEC": $Codec<$BlockPositionSource>

constructor(blockPos0: $BlockPos$$Type)

public "getPosition"(level0: $Level$$Type): $Optional<$Vec3>
public "getType"(): $PositionSourceType<any>
get "type"(): $PositionSourceType<any>
}
}

declare module "net.minecraft.world.level.gameevent.GameEventListener" {
import { $Vec3$$Type } from "net.minecraft.world.phys.Vec3"
import { $GameEventListener$DeliveryMode } from "net.minecraft.world.level.gameevent.GameEventListener$DeliveryMode"
import { $GameEvent$$Type } from "net.minecraft.world.level.gameevent.GameEvent"
import { $GameEvent$Context$$Type } from "net.minecraft.world.level.gameevent.GameEvent$Context"
import { $ServerLevel$$Type } from "net.minecraft.server.level.ServerLevel"
import { $PositionSource } from "net.minecraft.world.level.gameevent.PositionSource"

export interface $GameEventListener {
"getDeliveryMode"(): $GameEventListener$DeliveryMode
"getListenerRadius"(): integer
"getListenerSource"(): $PositionSource
"handleGameEvent"(serverLevel0: $ServerLevel$$Type, gameEvent1: $GameEvent$$Type, context2: $GameEvent$Context$$Type, vec33: $Vec3$$Type): boolean
get "deliveryMode"(): $GameEventListener$DeliveryMode
get "listenerRadius"(): integer
get "listenerSource"(): $PositionSource
}

export namespace $GameEventListener {
const probejs$$marker: never
}
export abstract class $GameEventListener$$Static implements $GameEventListener {
}
}

declare module "net.minecraft.world.level.gameevent.GameEventListener$DeliveryMode" {
import { $Enum } from "java.lang.Enum"

export class $GameEventListener$DeliveryMode extends $Enum<$GameEventListener$DeliveryMode> {
static readonly "BY_DISTANCE": $GameEventListener$DeliveryMode
static readonly "UNSPECIFIED": $GameEventListener$DeliveryMode

public static "valueOf"(string0: string): $GameEventListener$DeliveryMode
public static "values"(): $GameEventListener$DeliveryMode[]
}
}

declare module "net.minecraft.world.level.gameevent.vibrations.VibrationSystem$User" {
import { $TagKey } from "net.minecraft.tags.TagKey"
import { $Entity$$Type } from "net.minecraft.world.entity.Entity"
import { $BlockPos$$Type } from "net.minecraft.core.BlockPos"
import { $GameEvent, $GameEvent$$Type } from "net.minecraft.world.level.gameevent.GameEvent"
import { $GameEvent$Context$$Type } from "net.minecraft.world.level.gameevent.GameEvent$Context"
import { $ServerLevel$$Type } from "net.minecraft.server.level.ServerLevel"
import { $PositionSource } from "net.minecraft.world.level.gameevent.PositionSource"

export interface $VibrationSystem$User {
"calculateTravelTimeInTicks"(float0: float): integer
"canReceiveVibration"(serverLevel0: $ServerLevel$$Type, blockPos1: $BlockPos$$Type, gameEvent2: $GameEvent$$Type, context3: $GameEvent$Context$$Type): boolean
"canTriggerAvoidVibration"(): boolean
"getListenableEvents"(): $TagKey<$GameEvent>
"getListenerRadius"(): integer
"getPositionSource"(): $PositionSource
"isValidVibration"(gameEvent0: $GameEvent$$Type, context1: $GameEvent$Context$$Type): boolean
"onDataChanged"(): void
"onReceiveVibration"(serverLevel0: $ServerLevel$$Type, blockPos1: $BlockPos$$Type, gameEvent2: $GameEvent$$Type, entity3: $Entity$$Type, entity4: $Entity$$Type, float5: float): void
"requiresAdjacentChunksToBeTicking"(): boolean
get "listenableEvents"(): $TagKey<$GameEvent>
get "listenerRadius"(): integer
get "positionSource"(): $PositionSource
}

export namespace $VibrationSystem$User {
const probejs$$marker: never
}
export abstract class $VibrationSystem$User$$Static implements $VibrationSystem$User {
}
}

declare module "net.minecraft.world.level.gameevent.GameEventListener$Holder" {
import { $GameEventListener } from "net.minecraft.world.level.gameevent.GameEventListener"

export interface $GameEventListener$Holder<T extends $GameEventListener = $GameEventListener> {
"getListener"(): T
get "listener"(): T
}

export namespace $GameEventListener$Holder {
const probejs$$marker: never
}
export abstract class $GameEventListener$Holder$$Static<T extends $GameEventListener = $GameEventListener> implements $GameEventListener$Holder<T> {
}
}

declare module "net.minecraft.world.level.gameevent.vibrations.VibrationSystem" {
import { $VibrationSystem$Data } from "net.minecraft.world.level.gameevent.vibrations.VibrationSystem$Data"
import { $ToIntFunction } from "java.util.function.ToIntFunction"
import { $GameEvent, $GameEvent$$Type } from "net.minecraft.world.level.gameevent.GameEvent"
import { $VibrationSystem$User } from "net.minecraft.world.level.gameevent.vibrations.VibrationSystem$User"

export interface $VibrationSystem {
"getVibrationData"(): $VibrationSystem$Data
"getVibrationUser"(): $VibrationSystem$User
get "vibrationData"(): $VibrationSystem$Data
get "vibrationUser"(): $VibrationSystem$User
}

export namespace $VibrationSystem {
const RESONANCE_EVENTS: $GameEvent[]
const VIBRATION_FREQUENCY_FOR_EVENT: $ToIntFunction<$GameEvent>
function getGameEventFrequency(gameEvent0: $GameEvent$$Type): integer
function getRedstoneStrengthForDistance(float0: float, int1: integer): integer
function getResonanceEventByFrequency(int0: integer): $GameEvent
}
export abstract class $VibrationSystem$$Static implements $VibrationSystem {
static readonly "RESONANCE_EVENTS": $GameEvent[]
static readonly "VIBRATION_FREQUENCY_FOR_EVENT": $ToIntFunction<$GameEvent>

static "getGameEventFrequency"(gameEvent0: $GameEvent$$Type): integer
static "getRedstoneStrengthForDistance"(float0: float, int1: integer): integer
static "getResonanceEventByFrequency"(int0: integer): $GameEvent
}
}

declare module "net.minecraft.world.level.gameevent.EntityPositionSource" {
import { $Codec } from "com.mojang.serialization.Codec"
import { $Entity$$Type } from "net.minecraft.world.entity.Entity"
import { $Vec3 } from "net.minecraft.world.phys.Vec3"
import { $Optional } from "java.util.Optional"
import { $PositionSourceType } from "net.minecraft.world.level.gameevent.PositionSourceType"
import { $Level$$Type } from "net.minecraft.world.level.Level"
import { $PositionSource } from "net.minecraft.world.level.gameevent.PositionSource"

export class $EntityPositionSource implements $PositionSource {
static readonly "CODEC": $Codec<$EntityPositionSource>

constructor(entity0: $Entity$$Type, float1: float)

public "getPosition"(level0: $Level$$Type): $Optional<$Vec3>
public "getType"(): $PositionSourceType<any>
get "type"(): $PositionSourceType<any>
}
}

declare module "net.minecraft.world.level.gameevent.GameEvent$Context" {
import { $Entity, $Entity$$Type } from "net.minecraft.world.entity.Entity"
import { $BlockState, $BlockState$$Type } from "net.minecraft.world.level.block.state.BlockState"
import { $Record } from "java.lang.Record"

export class $GameEvent$Context extends $Record {
constructor(entity0: $Entity$$Type, blockState1: $BlockState$$Type)

public "affectedState"(): $BlockState
public static "of"(blockState0: $BlockState$$Type): $GameEvent$Context
public static "of"(entity0: $Entity$$Type): $GameEvent$Context
public static "of"(entity0: $Entity$$Type, blockState1: $BlockState$$Type): $GameEvent$Context
public "sourceEntity"(): $Entity
}
}

declare module "net.minecraft.world.level.gameevent.vibrations.VibrationSystem$Data" {
import { $Codec } from "com.mojang.serialization.Codec"
import { $VibrationInfo, $VibrationInfo$$Type } from "net.minecraft.world.level.gameevent.vibrations.VibrationInfo"
import { $VibrationSelector } from "net.minecraft.world.level.gameevent.vibrations.VibrationSelector"

export class $VibrationSystem$Data {
static "CODEC": $Codec<$VibrationSystem$Data>
static readonly "NBT_TAG_KEY": string

constructor()

public "decrementTravelTime"(): void
public "getCurrentVibration"(): $VibrationInfo
public "getSelectionStrategy"(): $VibrationSelector
public "getTravelTimeInTicks"(): integer
public "setCurrentVibration"(vibrationInfo0: $VibrationInfo$$Type): void
public "setReloadVibrationParticle"(boolean0: boolean): void
public "setTravelTimeInTicks"(int0: integer): void
public "shouldReloadVibrationParticle"(): boolean
get "currentVibration"(): $VibrationInfo
get "selectionStrategy"(): $VibrationSelector
get "travelTimeInTicks"(): integer
set "currentVibration"(value: $VibrationInfo$$Type)
set "reloadVibrationParticle"(value: boolean)
set "travelTimeInTicks"(value: integer)
}
}

declare module "net.minecraft.world.level.gameevent.DynamicGameEventListener" {
import { $GameEventListener, $GameEventListener$$Type } from "net.minecraft.world.level.gameevent.GameEventListener"
import { $ServerLevel$$Type } from "net.minecraft.server.level.ServerLevel"

export class $DynamicGameEventListener<T extends $GameEventListener = $GameEventListener> {
constructor(t0: T)

public "add"(serverLevel0: $ServerLevel$$Type): void
public "getListener"(): T
public "move"(serverLevel0: $ServerLevel$$Type): void
public "remove"(serverLevel0: $ServerLevel$$Type): void
get "listener"(): T
}
}

declare module "net.minecraft.world.level.gameevent.vibrations.VibrationInfo" {
import { $Codec } from "com.mojang.serialization.Codec"
import { $Entity, $Entity$$Type } from "net.minecraft.world.entity.Entity"
import { $Vec3, $Vec3$$Type } from "net.minecraft.world.phys.Vec3"
import { $Optional } from "java.util.Optional"
import { $GameEvent, $GameEvent$$Type } from "net.minecraft.world.level.gameevent.GameEvent"
import { $Record } from "java.lang.Record"
import { $UUID, $UUID$$Type } from "java.util.UUID"
import { $ServerLevel$$Type } from "net.minecraft.server.level.ServerLevel"

export class $VibrationInfo extends $Record {
static readonly "CODEC": $Codec<$VibrationInfo>

constructor(gameEvent0: $GameEvent$$Type, float1: float, vec32: $Vec3$$Type, uUID3: $UUID$$Type, uUID4: $UUID$$Type, entity5: $Entity$$Type)
constructor(gameEvent0: $GameEvent$$Type, float1: float, vec32: $Vec3$$Type, entity3: $Entity$$Type)
constructor(gameEvent0: $GameEvent$$Type, float1: float, vec32: $Vec3$$Type, uUID3: $UUID$$Type, uUID4: $UUID$$Type)

public "distance"(): float
public "entity"(): $Entity
public "gameEvent"(): $GameEvent
public "getEntity"(serverLevel0: $ServerLevel$$Type): $Optional<$Entity>
public "getProjectileOwner"(serverLevel0: $ServerLevel$$Type): $Optional<$Entity>
public "pos"(): $Vec3
public "projectileOwnerUuid"(): $UUID
public "uuid"(): $UUID
}
}

declare module "net.minecraft.world.level.gameevent.PositionSource" {
import { $Codec } from "com.mojang.serialization.Codec"
import { $Vec3 } from "net.minecraft.world.phys.Vec3"
import { $Optional } from "java.util.Optional"
import { $PositionSourceType } from "net.minecraft.world.level.gameevent.PositionSourceType"
import { $Level$$Type } from "net.minecraft.world.level.Level"

export interface $PositionSource {
"getPosition"(level0: $Level$$Type): $Optional<$Vec3>
"getType"(): $PositionSourceType<any>
get "type"(): $PositionSourceType<any>
}

export namespace $PositionSource {
const CODEC: $Codec<$PositionSource>
}
export abstract class $PositionSource$$Static implements $PositionSource {
static readonly "CODEC": $Codec<$PositionSource>

}
}

declare module "net.minecraft.world.level.gameevent.vibrations.VibrationSelector" {
import { $Codec } from "com.mojang.serialization.Codec"
import { $Optional, $Optional$$Type } from "java.util.Optional"
import { $VibrationInfo, $VibrationInfo$$Type } from "net.minecraft.world.level.gameevent.vibrations.VibrationInfo"

export class $VibrationSelector {
static readonly "CODEC": $Codec<$VibrationSelector>

constructor(optional0: $Optional$$Type<$VibrationInfo$$Type>, long1: long)
constructor()

public "addCandidate"(vibrationInfo0: $VibrationInfo$$Type, long1: long): void
public "chosenCandidate"(long0: long): $Optional<$VibrationInfo>
public "startOver"(): void
}
}

declare module "net.minecraft.world.level.gameevent.EntityPositionSource$Type" {
import { $Codec } from "com.mojang.serialization.Codec"
import { $PositionSourceType, $PositionSourceType$$Type } from "net.minecraft.world.level.gameevent.PositionSourceType"
import { $FriendlyByteBuf$$Type } from "net.minecraft.network.FriendlyByteBuf"
import { $EntityPositionSource, $EntityPositionSource$$Type } from "net.minecraft.world.level.gameevent.EntityPositionSource"
import { $PositionSource, $PositionSource$$Type } from "net.minecraft.world.level.gameevent.PositionSource"

export class $EntityPositionSource$Type implements $PositionSourceType<$EntityPositionSource> {
constructor()

public "codec"(): $Codec<$EntityPositionSource>
public static "fromNetwork"(friendlyByteBuf0: $FriendlyByteBuf$$Type): $PositionSource
public static "register"<S extends $PositionSourceType<T>, T extends $PositionSource>(string0: string, s1: S): S
public static "toNetwork"<T extends $PositionSource>(t0: T, friendlyByteBuf1: $FriendlyByteBuf$$Type): void
public "write"(friendlyByteBuf0: $FriendlyByteBuf$$Type, entityPositionSource1: $EntityPositionSource$$Type): void
}
}

declare module "net.minecraft.world.level.gameevent.BlockPositionSource$Type" {
import { $Codec } from "com.mojang.serialization.Codec"
import { $BlockPositionSource, $BlockPositionSource$$Type } from "net.minecraft.world.level.gameevent.BlockPositionSource"
import { $PositionSourceType, $PositionSourceType$$Type } from "net.minecraft.world.level.gameevent.PositionSourceType"
import { $FriendlyByteBuf$$Type } from "net.minecraft.network.FriendlyByteBuf"
import { $PositionSource, $PositionSource$$Type } from "net.minecraft.world.level.gameevent.PositionSource"

export class $BlockPositionSource$Type implements $PositionSourceType<$BlockPositionSource> {
constructor()

public "codec"(): $Codec<$BlockPositionSource>
public static "fromNetwork"(friendlyByteBuf0: $FriendlyByteBuf$$Type): $PositionSource
public static "register"<S extends $PositionSourceType<T>, T extends $PositionSource>(string0: string, s1: S): S
public static "toNetwork"<T extends $PositionSource>(t0: T, friendlyByteBuf1: $FriendlyByteBuf$$Type): void
public "write"(friendlyByteBuf0: $FriendlyByteBuf$$Type, blockPositionSource1: $BlockPositionSource$$Type): void
}
}

declare module "net.minecraft.world.level.gameevent.vibrations.VibrationSystem$Listener" {
import { $BlockPos$$Type } from "net.minecraft.core.BlockPos"
import { $Vec3$$Type } from "net.minecraft.world.phys.Vec3"
import { $GameEventListener$DeliveryMode } from "net.minecraft.world.level.gameevent.GameEventListener$DeliveryMode"
import { $GameEventListener } from "net.minecraft.world.level.gameevent.GameEventListener"
import { $GameEvent$$Type } from "net.minecraft.world.level.gameevent.GameEvent"
import { $GameEvent$Context$$Type } from "net.minecraft.world.level.gameevent.GameEvent$Context"
import { $VibrationSystem$$Type } from "net.minecraft.world.level.gameevent.vibrations.VibrationSystem"
import { $ServerLevel$$Type } from "net.minecraft.server.level.ServerLevel"
import { $PositionSource } from "net.minecraft.world.level.gameevent.PositionSource"

export class $VibrationSystem$Listener implements $GameEventListener {
constructor(vibrationSystem0: $VibrationSystem$$Type)

public static "distanceBetweenInBlocks"(blockPos0: $BlockPos$$Type, blockPos1: $BlockPos$$Type): float
public "forceScheduleVibration"(serverLevel0: $ServerLevel$$Type, gameEvent1: $GameEvent$$Type, context2: $GameEvent$Context$$Type, vec33: $Vec3$$Type): void
public "getDeliveryMode"(): $GameEventListener$DeliveryMode
public "getListenerRadius"(): integer
public "getListenerSource"(): $PositionSource
public "handleGameEvent"(serverLevel0: $ServerLevel$$Type, gameEvent1: $GameEvent$$Type, context2: $GameEvent$Context$$Type, vec33: $Vec3$$Type): boolean
get "deliveryMode"(): $GameEventListener$DeliveryMode
get "listenerRadius"(): integer
get "listenerSource"(): $PositionSource
}
}

