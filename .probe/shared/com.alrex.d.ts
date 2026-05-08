declare module "com.alrex.parcool.common.capability.IStamina$Type" {
import { $ServerPlayer$$Type } from "net.minecraft.server.level.ServerPlayer"
import { $IStamina, $IStamina$$Type } from "com.alrex.parcool.common.capability.IStamina"
import { $Enum } from "java.lang.Enum"
import { $Player$$Type } from "net.minecraft.world.entity.player.Player"

export class $IStamina$Type extends $Enum<$IStamina$Type> {
static readonly "Default": $IStamina$Type
static readonly "EpicFight": $IStamina$Type
static readonly "Feathers": $IStamina$Type
static readonly "Hunger": $IStamina$Type
static readonly "Paraglider": $IStamina$Type

public static "getFromInstance"(iStamina0: $IStamina$$Type): $IStamina$Type
public "handleConsumeOnServer"(serverPlayer0: $ServerPlayer$$Type, int1: integer): void
public "newInstance"(player0: $Player$$Type): $IStamina
public static "valueOf"(string0: string): $IStamina$Type
public static "values"(): $IStamina$Type[]
}
}

declare module "com.alrex.parcool.api.unstable.action.ParCoolActionEvent$Start" {
import { $ParCoolActionEvent } from "com.alrex.parcool.api.unstable.action.ParCoolActionEvent"

export class $ParCoolActionEvent$Start extends $ParCoolActionEvent {
constructor()

}
}

declare module "com.alrex.parcool.common.capability.Parkourability" {
import { $BehaviorEnforcer } from "com.alrex.parcool.common.action.BehaviorEnforcer"
import { $Action, $Action$$Type } from "com.alrex.parcool.common.action.Action"
import { $ParCoolConfig$Client$Booleans$$Type } from "com.alrex.parcool.config.ParCoolConfig$Client$Booleans"
import { $LocalPlayer$$Type } from "net.minecraft.client.player.LocalPlayer"
import { $ActionInfo } from "com.alrex.parcool.common.info.ActionInfo"
import { $ServerLimitation } from "com.alrex.parcool.common.info.ServerLimitation"
import { $AdditionalProperties } from "com.alrex.parcool.common.action.AdditionalProperties"
import { $Player$$Type } from "net.minecraft.world.entity.player.Player"
import { $ParCoolConfig$Server$Integers$$Type } from "com.alrex.parcool.config.ParCoolConfig$Server$Integers"
import { $ParCoolConfig$Client$Doubles$$Type } from "com.alrex.parcool.config.ParCoolConfig$Client$Doubles"
import { $ParCoolConfig$Server$Doubles$$Type } from "com.alrex.parcool.config.ParCoolConfig$Server$Doubles"
import { $ParCoolConfig$Server$Booleans$$Type } from "com.alrex.parcool.config.ParCoolConfig$Server$Booleans"
import { $List } from "java.util.List"
import { $ClientSetting } from "com.alrex.parcool.common.info.ClientSetting"
import { $ParCoolConfig$Client$Integers$$Type } from "com.alrex.parcool.config.ParCoolConfig$Client$Integers"
import { $Class$$Type } from "java.lang.Class"

export class $Parkourability {
constructor()

public "CopyFrom"(parkourability0: $Parkourability$$Type): void
public "get"<T extends $Action>(class0: $Class$$Type<T>): T
public static "get"(player0: $Player$$Type): $Parkourability
public "getActionFromID"(short0: short): $Action
public "getActionID"(action0: $Action$$Type): short
public "getActionInfo"(): $ActionInfo
public "getAdditionalProperties"(): $AdditionalProperties
public "getBehaviorEnforcer"(): $BehaviorEnforcer
public "getClientInfo"(): $ClientSetting
public "getLimitedValue"(integers0: $ParCoolConfig$Client$Integers$$Type, integers1: $ParCoolConfig$Server$Integers$$Type): integer
public "getLimitedValue"(doubles0: $ParCoolConfig$Client$Doubles$$Type, doubles1: $ParCoolConfig$Server$Doubles$$Type): double
public "getLimitedValue"(booleans0: $ParCoolConfig$Client$Booleans$$Type, booleans1: $ParCoolConfig$Server$Booleans$$Type): boolean
public "getList"(): $List<$Action>
public "getServerLimitation"(): $ServerLimitation
/** Client only, do not use in server scripts */
public "getSynchronizeTrialCount"(): integer
public "incrementSynchronizeTrialCount"(): void
public "isDoingAny"(...class0s: $Class$$Type<$Action$$Type>[]): boolean
public "isDoingNothing"(): boolean
/** Client only, do not use in server scripts */
public "limitationIsNotSynced"(): boolean
/** Client only, do not use in server scripts */
public "trySyncLimitation"(localPlayer0: $LocalPlayer$$Type): void
get "actionInfo"(): $ActionInfo
get "additionalProperties"(): $AdditionalProperties
get "behaviorEnforcer"(): $BehaviorEnforcer
get "clientInfo"(): $ClientSetting
get "list"(): $List<$Action>
get "serverLimitation"(): $ServerLimitation
get "synchronizeTrialCount"(): integer
get "doingNothing"(): boolean
}
}

declare module "com.alrex.parcool.api.unstable.action.ParCoolActionEvent$TryToStart" {
import { $Action$$Type } from "com.alrex.parcool.common.action.Action"
import { $ParCoolActionEvent } from "com.alrex.parcool.api.unstable.action.ParCoolActionEvent"
import { $Player$$Type } from "net.minecraft.world.entity.player.Player"

export class $ParCoolActionEvent$TryToStart extends $ParCoolActionEvent {
constructor(player0: $Player$$Type, action1: $Action$$Type)
constructor()

}
}

declare module "com.alrex.parcool.api.unstable.action.ParCoolActionEvent$Tick" {
import { $ParCoolActionEvent } from "com.alrex.parcool.api.unstable.action.ParCoolActionEvent"

export class $ParCoolActionEvent$Tick extends $ParCoolActionEvent {
constructor()

}
}

declare module "com.alrex.parcool.common.action.Action" {
import { $StaminaConsumeTiming } from "com.alrex.parcool.common.action.StaminaConsumeTiming"
import { $IStamina$$Type } from "com.alrex.parcool.common.capability.IStamina"
import { $TickEvent$RenderTickEvent$$Type } from "net.minecraftforge.event.TickEvent$RenderTickEvent"
import { $Parkourability$$Type } from "com.alrex.parcool.common.capability.Parkourability"
import { $LocalPlayer$$Type } from "net.minecraft.client.player.LocalPlayer"
import { $ByteBuffer$$Type } from "java.nio.ByteBuffer"
import { $Player$$Type } from "net.minecraft.world.entity.player.Player"

export class $Action {
constructor()

/** Client only, do not use in server scripts */
public "canContinue"(player0: $Player$$Type, parkourability1: $Parkourability$$Type, iStamina2: $IStamina$$Type): boolean
/** Client only, do not use in server scripts */
public "canStart"(player0: $Player$$Type, parkourability1: $Parkourability$$Type, iStamina2: $IStamina$$Type, byteBuffer3: $ByteBuffer$$Type): boolean
public "finish"(player0: $Player$$Type): void
public "getDoingTick"(): integer
public "getNotDoingTick"(): integer
public "getStaminaConsumeTiming"(): $StaminaConsumeTiming
/** Client only, do not use in server scripts */
public "getStatusValue"(localPlayer0: $LocalPlayer$$Type, parkourability1: $Parkourability$$Type): float
public "getTickFromLastStarted"(): integer
public "isDoing"(): boolean
public "isJustStarted"(): boolean
/** Client only, do not use in server scripts */
public "onClientTick"(player0: $Player$$Type, parkourability1: $Parkourability$$Type, iStamina2: $IStamina$$Type): void
/** Client only, do not use in server scripts */
public "onRenderTick"(renderTickEvent0: $TickEvent$RenderTickEvent$$Type, player1: $Player$$Type, parkourability2: $Parkourability$$Type): void
public "onServerTick"(player0: $Player$$Type, parkourability1: $Parkourability$$Type, iStamina2: $IStamina$$Type): void
public "onStart"(player0: $Player$$Type, parkourability1: $Parkourability$$Type, byteBuffer2: $ByteBuffer$$Type): void
/** Client only, do not use in server scripts */
public "onStartInLocalClient"(player0: $Player$$Type, parkourability1: $Parkourability$$Type, iStamina2: $IStamina$$Type, byteBuffer3: $ByteBuffer$$Type): void
/** Client only, do not use in server scripts */
public "onStartInOtherClient"(player0: $Player$$Type, parkourability1: $Parkourability$$Type, byteBuffer2: $ByteBuffer$$Type): void
public "onStartInServer"(player0: $Player$$Type, parkourability1: $Parkourability$$Type, byteBuffer2: $ByteBuffer$$Type): void
public "onStop"(player0: $Player$$Type): void
public "onStopInLocalClient"(player0: $Player$$Type): void
public "onStopInOtherClient"(player0: $Player$$Type): void
public "onStopInServer"(player0: $Player$$Type): void
public "onTick"(player0: $Player$$Type, parkourability1: $Parkourability$$Type, iStamina2: $IStamina$$Type): void
public "onWorkingTick"(player0: $Player$$Type, parkourability1: $Parkourability$$Type, iStamina2: $IStamina$$Type): void
/** Client only, do not use in server scripts */
public "onWorkingTickInClient"(player0: $Player$$Type, parkourability1: $Parkourability$$Type, iStamina2: $IStamina$$Type): void
/** Client only, do not use in server scripts */
public "onWorkingTickInLocalClient"(player0: $Player$$Type, parkourability1: $Parkourability$$Type, iStamina2: $IStamina$$Type): void
/** Client only, do not use in server scripts */
public "onWorkingTickInOtherClient"(player0: $Player$$Type, parkourability1: $Parkourability$$Type, iStamina2: $IStamina$$Type): void
public "onWorkingTickInServer"(player0: $Player$$Type, parkourability1: $Parkourability$$Type, iStamina2: $IStamina$$Type): void
public "restoreSynchronizedState"(byteBuffer0: $ByteBuffer$$Type): void
public "saveSynchronizedState"(byteBuffer0: $ByteBuffer$$Type): void
public "start"(player0: $Player$$Type, parkourability1: $Parkourability$$Type, byteBuffer2: $ByteBuffer$$Type, iStamina3: $IStamina$$Type): void
public "tick"(): void
/** Client only, do not use in server scripts */
public "wantsToShowStatusBar"(localPlayer0: $LocalPlayer$$Type, parkourability1: $Parkourability$$Type): boolean
get "doingTick"(): integer
get "notDoingTick"(): integer
get "staminaConsumeTiming"(): $StaminaConsumeTiming
get "tickFromLastStarted"(): integer
get "doing"(): boolean
get "justStarted"(): boolean
}
}

declare module "com.alrex.parcool.common.capability.IStamina" {
import { $Player$$Type } from "net.minecraft.world.entity.player.Player"

export interface $IStamina {
"consume"(int0: integer): void
"get"(): integer
"getActualMaxStamina"(): integer
"getOldValue"(): integer
"getRequestedValueConsumedOnServer"(): integer
"isExhausted"(): boolean
"isImposingExhaustionPenalty"(): boolean
"recover"(int0: integer): void
"set"(int0: integer): void
"setExhaustion"(boolean0: boolean): void
"tick"(): void
"updateOldValue"(): void
"wantToConsumeOnServer"(): boolean
get "actualMaxStamina"(): integer
get "oldValue"(): integer
get "requestedValueConsumedOnServer"(): integer
get "exhausted"(): boolean
get "imposingExhaustionPenalty"(): boolean
set "exhaustion"(value: boolean)
}

export namespace $IStamina {
function get(player0: $Player$$Type): $IStamina
}
export abstract class $IStamina$$Static implements $IStamina {
static "get"(player0: $Player$$Type): $IStamina
}
}

declare module "com.alrex.parcool.api.unstable.action.ParCoolActionEvent$Start$Pre" {
import { $ParCoolActionEvent$Start } from "com.alrex.parcool.api.unstable.action.ParCoolActionEvent$Start"
import { $Action$$Type } from "com.alrex.parcool.common.action.Action"
import { $Player$$Type } from "net.minecraft.world.entity.player.Player"

export class $ParCoolActionEvent$Start$Pre extends $ParCoolActionEvent$Start {
constructor(player0: $Player$$Type, action1: $Action$$Type)
constructor()

}
}

declare module "com.alrex.parcool.api.client.gui.ParCoolHUDEvent" {
import { $Event } from "net.minecraftforge.eventbus.api.Event"

export class $ParCoolHUDEvent extends $Event {
constructor()

}
}

declare module "com.alrex.parcool.client.animation.PlayerModelRotator" {
import { $Vector3f$$Type } from "org.joml.Vector3f"
import { $PoseStack, $PoseStack$$Type } from "com.mojang.blaze3d.vertex.PoseStack"
import { $Player$$Type } from "net.minecraft.world.entity.player.Player"

export class $PlayerModelRotator {
constructor(poseStack0: $PoseStack$$Type, player1: $Player$$Type, float2: float, float3: float, float4: float, float5: float)

public "end"(): void
public "endEnabledLegGrounding"(): void
public "getPartialTick"(): float
public "getRawStack"(): $PoseStack
public "getXRot"(): float
public "getYRot"(): float
public "getZRot"(): float
public "rotate"(float0: float, vector3f1: $Vector3f$$Type): $PlayerModelRotator
public "rotatePitchFrontward"(float0: float): $PlayerModelRotator
public "rotateRollRightward"(float0: float): $PlayerModelRotator
public "rotateYawRightward"(float0: float): $PlayerModelRotator
public "start"(): $PlayerModelRotator
public "startBasedCenter"(): $PlayerModelRotator
public "startBasedTop"(): $PlayerModelRotator
public "translate"(float0: float, float1: float, float2: float): $PlayerModelRotator
public "translateY"(float0: float): $PlayerModelRotator
get "partialTick"(): float
get "rawStack"(): $PoseStack
get "xRot"(): float
get "yRot"(): float
get "zRot"(): float
}
}

declare module "com.alrex.parcool.config.ParCoolConfig$AdvantageousDirection" {
import { $Enum } from "java.lang.Enum"

export class $ParCoolConfig$AdvantageousDirection extends $Enum<$ParCoolConfig$AdvantageousDirection> {
static readonly "Higher": $ParCoolConfig$AdvantageousDirection
static readonly "Lower": $ParCoolConfig$AdvantageousDirection

public static "valueOf"(string0: string): $ParCoolConfig$AdvantageousDirection
public static "values"(): $ParCoolConfig$AdvantageousDirection[]
}
}

declare module "com.alrex.parcool.config.ParCoolConfig$Client$Doubles" {
import { $ParCoolConfig$ConfigGroup } from "com.alrex.parcool.config.ParCoolConfig$ConfigGroup"
import { $ForgeConfigSpec$Builder$$Type } from "net.minecraftforge.common.ForgeConfigSpec$Builder"
import { $Enum } from "java.lang.Enum"
import { $ParCoolConfig$Item } from "com.alrex.parcool.config.ParCoolConfig$Item"
import { $ForgeConfigSpec$DoubleValue } from "net.minecraftforge.common.ForgeConfigSpec$DoubleValue"
import { $ByteBuffer$$Type } from "java.nio.ByteBuffer"

export class $ParCoolConfig$Client$Doubles extends $Enum<$ParCoolConfig$Client$Doubles> implements $ParCoolConfig$Item<double> {
readonly "Comment": string
static readonly "DamageCompleteRemovableHeightBreakfall": $ParCoolConfig$Client$Doubles
static readonly "DamageReductionRateBreakfall": $ParCoolConfig$Client$Doubles
readonly "DefaultValue": double
static readonly "DodgeSpeedModifier": $ParCoolConfig$Client$Doubles
static readonly "FastRunSpeedModifier": $ParCoolConfig$Client$Doubles
static readonly "FastSwimSpeedModifier": $ParCoolConfig$Client$Doubles
readonly "Group": $ParCoolConfig$ConfigGroup
static readonly "LowestFallDistanceForBreakfall": $ParCoolConfig$Client$Doubles
readonly "Max": double
readonly "Min": double
readonly "Path": string
static readonly "SkyDiveSpeedDecreaseRate": $ParCoolConfig$Client$Doubles
readonly "Translation": string

/** Client only, do not use in server scripts */
public "getInternalInstance"(): $ForgeConfigSpec$DoubleValue
public "getPath"(): string
public "readFromBuffer"(byteBuffer0: $ByteBuffer$$Type): double
public "register"(builder0: $ForgeConfigSpec$Builder$$Type): void
public "set"(double0: double): void
public static "valueOf"(string0: string): $ParCoolConfig$Client$Doubles
public static "values"(): $ParCoolConfig$Client$Doubles[]
public "writeToBuffer"(byteBuffer0: $ByteBuffer$$Type): void
get "internalInstance"(): $ForgeConfigSpec$DoubleValue
get "path"(): string
}
}

declare module "com.alrex.parcool.common.action.BehaviorEnforcer" {
import { $BehaviorEnforcer$ID, $BehaviorEnforcer$ID$$Type } from "com.alrex.parcool.common.action.BehaviorEnforcer$ID"
import { $Vec3 } from "net.minecraft.world.phys.Vec3"
import { $BehaviorEnforcer$Marker$$Type } from "com.alrex.parcool.common.action.BehaviorEnforcer$Marker"
import { $Supplier$$Type } from "java.util.function.Supplier"

export class $BehaviorEnforcer {
constructor()

public "addMarkerCancellingDescendFromEdge"(iD0: $BehaviorEnforcer$ID$$Type, marker1: $BehaviorEnforcer$Marker$$Type): void
public "addMarkerCancellingFallFlying"(iD0: $BehaviorEnforcer$ID$$Type, marker1: $BehaviorEnforcer$Marker$$Type): void
public "addMarkerCancellingJump"(iD0: $BehaviorEnforcer$ID$$Type, marker1: $BehaviorEnforcer$Marker$$Type): void
public "addMarkerCancellingShowName"(iD0: $BehaviorEnforcer$ID$$Type, marker1: $BehaviorEnforcer$Marker$$Type): void
public "addMarkerCancellingSneak"(iD0: $BehaviorEnforcer$ID$$Type, marker1: $BehaviorEnforcer$Marker$$Type): void
public "addMarkerCancellingSprint"(iD0: $BehaviorEnforcer$ID$$Type, marker1: $BehaviorEnforcer$Marker$$Type): void
public "cancelDescendFromEdge"(): boolean
public "cancelFallFlying"(): boolean
public "cancelJump"(): boolean
public "cancelShowingName"(): boolean
public "cancelSneak"(): boolean
public "cancelSprint"(): boolean
public "getEnforcedMovePoint"(): $Vec3
public "getEnforcedPosition"(): $Vec3
public static "newID"(): $BehaviorEnforcer$ID
public "setMarkerEnforceMovePoint"(marker0: $BehaviorEnforcer$Marker$$Type, supplier1: $Supplier$$Type<$Vec3>): void
public "setMarkerEnforcePosition"(marker0: $BehaviorEnforcer$Marker$$Type, supplier1: $Supplier$$Type<$Vec3>): void
get "enforcedMovePoint"(): $Vec3
get "enforcedPosition"(): $Vec3
}
}

declare module "com.alrex.parcool.config.ParCoolConfig$Server$Booleans" {
import { $ParCoolConfig$ConfigGroup } from "com.alrex.parcool.config.ParCoolConfig$ConfigGroup"
import { $ForgeConfigSpec$Builder$$Type } from "net.minecraftforge.common.ForgeConfigSpec$Builder"
import { $Enum } from "java.lang.Enum"
import { $ParCoolConfig$Item } from "com.alrex.parcool.config.ParCoolConfig$Item"
import { $ByteBuffer$$Type } from "java.nio.ByteBuffer"

export class $ParCoolConfig$Server$Booleans extends $Enum<$ParCoolConfig$Server$Booleans> implements $ParCoolConfig$Item<boolean> {
readonly "AdvantageousValue": boolean
static readonly "AllowDisableWallJumpCooldown": $ParCoolConfig$Server$Booleans
static readonly "AllowInfiniteStamina": $ParCoolConfig$Server$Booleans
readonly "Comment": string
readonly "DefaultValue": boolean
static readonly "DodgeProvideInvulnerableFrame": $ParCoolConfig$Server$Booleans
readonly "Group": $ParCoolConfig$ConfigGroup
readonly "Path": string

public "getPath"(): string
public "readFromBuffer"(byteBuffer0: $ByteBuffer$$Type): boolean
public "register"(builder0: $ForgeConfigSpec$Builder$$Type): void
public "set"(boolean0: boolean): void
public static "valueOf"(string0: string): $ParCoolConfig$Server$Booleans
public static "values"(): $ParCoolConfig$Server$Booleans[]
public "writeToBuffer"(byteBuffer0: $ByteBuffer$$Type): void
get "path"(): string
}
}

declare module "com.alrex.parcool.common.info.ActionInfo" {
import { $Action$$Type } from "com.alrex.parcool.common.action.Action"
import { $ClientSetting, $ClientSetting$$Type } from "com.alrex.parcool.common.info.ClientSetting"
import { $Class$$Type } from "java.lang.Class"
import { $ServerLimitation, $ServerLimitation$$Type } from "com.alrex.parcool.common.info.ServerLimitation"

export class $ActionInfo {
constructor()

public "can"(class0: $Class$$Type<$Action$$Type>): boolean
public "getClientSetting"(): $ClientSetting
public "getMaxStaminaLimit"(): integer
public "getServerLimitation"(): $ServerLimitation
public "getStaminaConsumptionOf"(class0: $Class$$Type<$Action$$Type>): integer
public "getStaminaRecoveryLimit"(): integer
public "isInfiniteStaminaPermitted"(): boolean
public "isStaminaInfinite"(boolean0: boolean): boolean
public "setClientSetting"(clientSetting0: $ClientSetting$$Type): void
public "setServerLimitation"(serverLimitation0: $ServerLimitation$$Type): void
get "clientSetting"(): $ClientSetting
get "maxStaminaLimit"(): integer
get "serverLimitation"(): $ServerLimitation
get "staminaRecoveryLimit"(): integer
get "infiniteStaminaPermitted"(): boolean
set "clientSetting"(value: $ClientSetting$$Type)
set "serverLimitation"(value: $ServerLimitation$$Type)
}
}

declare module "com.alrex.parcool.api.unstable.action.ParCoolActionEvent$Tick$Pre" {
import { $ParCoolActionEvent$Tick } from "com.alrex.parcool.api.unstable.action.ParCoolActionEvent$Tick"
import { $Action$$Type } from "com.alrex.parcool.common.action.Action"
import { $Player$$Type } from "net.minecraft.world.entity.player.Player"

export class $ParCoolActionEvent$Tick$Pre extends $ParCoolActionEvent$Tick {
constructor(player0: $Player$$Type, action1: $Action$$Type)
constructor()

}
}

declare module "com.alrex.parcool.api.unstable.animation.AnimationPart" {
import { $Enum } from "java.lang.Enum"

export class $AnimationPart extends $Enum<$AnimationPart> {
static readonly "CAMERA": $AnimationPart
static readonly "HEAD": $AnimationPart
static readonly "LEFT_ARM": $AnimationPart
static readonly "LEFT_LEG": $AnimationPart
static readonly "RIGHT_ARM": $AnimationPart
static readonly "RIGHT_LEG": $AnimationPart
static readonly "ROTATION": $AnimationPart

public static "valueOf"(string0: string): $AnimationPart
public static "values"(): $AnimationPart[]
}
}

declare module "com.alrex.parcool.api.unstable.action.ParCoolActionEvent$TryToContinueEvent" {
import { $Action$$Type } from "com.alrex.parcool.common.action.Action"
import { $ParCoolActionEvent } from "com.alrex.parcool.api.unstable.action.ParCoolActionEvent"
import { $Player$$Type } from "net.minecraft.world.entity.player.Player"

/** @deprecated */
export class $ParCoolActionEvent$TryToContinueEvent extends $ParCoolActionEvent {
constructor(player0: $Player$$Type, action1: $Action$$Type)
constructor()

}
}

declare module "com.alrex.parcool.api.unstable.action.ParCoolActionEvent" {
import { $Action, $Action$$Type } from "com.alrex.parcool.common.action.Action"
import { $Event } from "net.minecraftforge.eventbus.api.Event"
import { $Player, $Player$$Type } from "net.minecraft.world.entity.player.Player"

export class $ParCoolActionEvent extends $Event {
constructor(player0: $Player$$Type, action1: $Action$$Type)
constructor()

public "getAction"(): $Action
public "getPlayer"(): $Player
get "action"(): $Action
get "player"(): $Player
}
}

declare module "com.alrex.parcool.config.ParCoolConfig$Server$Doubles" {
import { $ParCoolConfig$ConfigGroup } from "com.alrex.parcool.config.ParCoolConfig$ConfigGroup"
import { $ForgeConfigSpec$Builder$$Type } from "net.minecraftforge.common.ForgeConfigSpec$Builder"
import { $Enum } from "java.lang.Enum"
import { $ParCoolConfig$Item } from "com.alrex.parcool.config.ParCoolConfig$Item"
import { $ParCoolConfig$AdvantageousDirection } from "com.alrex.parcool.config.ParCoolConfig$AdvantageousDirection"
import { $ByteBuffer$$Type } from "java.nio.ByteBuffer"

export class $ParCoolConfig$Server$Doubles extends $Enum<$ParCoolConfig$Server$Doubles> implements $ParCoolConfig$Item<double> {
readonly "Advantageous": $ParCoolConfig$AdvantageousDirection
readonly "Comment": string
readonly "DefaultValue": double
readonly "Group": $ParCoolConfig$ConfigGroup
readonly "Max": double
static readonly "MaxDamageCompleteRemovableHeightBreakfall": $ParCoolConfig$Server$Doubles
static readonly "MaxDamageReductionRateBreakfall": $ParCoolConfig$Server$Doubles
static readonly "MaxDodgeSpeedModifier": $ParCoolConfig$Server$Doubles
static readonly "MaxFastRunSpeedModifier": $ParCoolConfig$Server$Doubles
static readonly "MaxFastSwimSpeedModifier": $ParCoolConfig$Server$Doubles
readonly "Min": double
static readonly "MinLowestFallDistanceForBreakfall": $ParCoolConfig$Server$Doubles
static readonly "MinSkyDiveSpeedDecreaseRate": $ParCoolConfig$Server$Doubles
readonly "Path": string

public "getPath"(): string
public "readFromBuffer"(byteBuffer0: $ByteBuffer$$Type): double
public "register"(builder0: $ForgeConfigSpec$Builder$$Type): void
public "set"(double0: double): void
public static "valueOf"(string0: string): $ParCoolConfig$Server$Doubles
public static "values"(): $ParCoolConfig$Server$Doubles[]
public "writeToBuffer"(byteBuffer0: $ByteBuffer$$Type): void
get "path"(): string
}
}

declare module "com.alrex.parcool.client.animation.Animator" {
import { $ViewportEvent$ComputeCameraAngles$$Type } from "net.minecraftforge.client.event.ViewportEvent$ComputeCameraAngles"
import { $TickEvent$RenderTickEvent$$Type } from "net.minecraftforge.event.TickEvent$RenderTickEvent"
import { $Parkourability$$Type } from "com.alrex.parcool.common.capability.Parkourability"
import { $PlayerModelTransformer$$Type } from "com.alrex.parcool.client.animation.PlayerModelTransformer"
import { $PlayerModelRotator$$Type } from "com.alrex.parcool.client.animation.PlayerModelRotator"
import { $Player$$Type } from "net.minecraft.world.entity.player.Player"

export class $Animator {
constructor()

public "animatePost"(player0: $Player$$Type, parkourability1: $Parkourability$$Type, playerModelTransformer2: $PlayerModelTransformer$$Type): void
public "animatePre"(player0: $Player$$Type, parkourability1: $Parkourability$$Type, playerModelTransformer2: $PlayerModelTransformer$$Type): boolean
public "onCameraSetUp"(computeCameraAngles0: $ViewportEvent$ComputeCameraAngles$$Type, player1: $Player$$Type, parkourability2: $Parkourability$$Type): void
public "onRenderTick"(renderTickEvent0: $TickEvent$RenderTickEvent$$Type, player1: $Player$$Type, parkourability2: $Parkourability$$Type): void
public "rotatePost"(player0: $Player$$Type, parkourability1: $Parkourability$$Type, playerModelRotator2: $PlayerModelRotator$$Type): void
public "rotatePre"(player0: $Player$$Type, parkourability1: $Parkourability$$Type, playerModelRotator2: $PlayerModelRotator$$Type): boolean
public "shouldRemoved"(player0: $Player$$Type, parkourability1: $Parkourability$$Type): boolean
public "tick"(player0: $Player$$Type): void
}
}

declare module "com.alrex.parcool.config.ParCoolConfig$Item" {
import { $ForgeConfigSpec$Builder$$Type } from "net.minecraftforge.common.ForgeConfigSpec$Builder"
import { $ByteBuffer$$Type } from "java.nio.ByteBuffer"
import { $ForgeConfigSpec$ConfigValue } from "net.minecraftforge.common.ForgeConfigSpec$ConfigValue"

export interface $ParCoolConfig$Item<T = any> {
"get"(): T
"getInternalInstance"(): $ForgeConfigSpec$ConfigValue<T>
"getPath"(): string
"readFromBuffer"(byteBuffer0: $ByteBuffer$$Type): T
"register"(builder0: $ForgeConfigSpec$Builder$$Type): void
"set"(t0: T): void
"writeToBuffer"(byteBuffer0: $ByteBuffer$$Type): void
get "internalInstance"(): $ForgeConfigSpec$ConfigValue<T>
get "path"(): string
}

export namespace $ParCoolConfig$Item {
const probejs$$marker: never
}
export abstract class $ParCoolConfig$Item$$Static<T = any> implements $ParCoolConfig$Item<T> {
}
}

declare module "com.alrex.parcool.client.animation.PlayerModelTransformer" {
import { $AnimationOption$$Type } from "com.alrex.parcool.api.unstable.animation.AnimationOption"
import { $Player$$Type } from "net.minecraft.world.entity.player.Player"
import { $PlayerModel, $PlayerModel$$Type } from "net.minecraft.client.model.PlayerModel"
import { $ModelPart$$Type } from "net.minecraft.client.model.geom.ModelPart"

export class $PlayerModelTransformer {
constructor(player0: $Player$$Type, playerModel1: $PlayerModel$$Type, boolean2: boolean, float3: float, float4: float, float5: float, float6: float, float7: float)

public "addRotateLeftArm"(float0: float, float1: float, float2: float, float3: float): $PlayerModelTransformer
public "addRotateLeftArm"(float0: float, float1: float, float2: float): $PlayerModelTransformer
public "addRotateLeftLeg"(float0: float, float1: float, float2: float, float3: float): $PlayerModelTransformer
public "addRotateLeftLeg"(float0: float, float1: float, float2: float): $PlayerModelTransformer
public "addRotateRightArm"(float0: float, float1: float, float2: float): $PlayerModelTransformer
public "addRotateRightArm"(float0: float, float1: float, float2: float, float3: float): $PlayerModelTransformer
public "addRotateRightLeg"(float0: float, float1: float, float2: float): $PlayerModelTransformer
public "addRotateRightLeg"(float0: float, float1: float, float2: float, float3: float): $PlayerModelTransformer
public "copyFromBodyToWear"(): void
public "end"(): void
public "getHeadPitch"(): float
public "getLimbSwing"(): float
public "getLimbSwingAmount"(): float
public "getNetHeadYaw"(): float
public "getPartialTick"(): float
public "getRawModel"(): $PlayerModel
public "makeArmsMoveDynamically"(float0: float): $PlayerModelTransformer
public "makeArmsNatural"(): $PlayerModelTransformer
public "makeLegsLittleMoving"(): $PlayerModelTransformer
public "makeLegsMoveDynamically"(float0: float): $PlayerModelTransformer
public "makeLegsShakingDynamically"(float0: float): $PlayerModelTransformer
public "reset"(): void
public "resetModel"(modelPart0: $ModelPart$$Type): void
public "rotateAdditionallyHeadPitch"(float0: float): $PlayerModelTransformer
public "rotateAdditionallyHeadRoll"(float0: float): $PlayerModelTransformer
public "rotateAdditionallyHeadYaw"(float0: float): $PlayerModelTransformer
public "rotateHeadPitch"(float0: float): $PlayerModelTransformer
public "rotateHeadYaw"(float0: float): $PlayerModelTransformer
public "rotateHeadYawRadian"(float0: float): $PlayerModelTransformer
public "rotateLeftArm"(float0: float, float1: float, float2: float): $PlayerModelTransformer
public "rotateLeftArm"(float0: float, float1: float, float2: float, float3: float): $PlayerModelTransformer
public "rotateLeftLeg"(float0: float, float1: float, float2: float): $PlayerModelTransformer
public "rotateLeftLeg"(float0: float, float1: float, float2: float, float3: float): $PlayerModelTransformer
public "rotateRightArm"(float0: float, float1: float, float2: float, float3: float): $PlayerModelTransformer
public "rotateRightArm"(float0: float, float1: float, float2: float): $PlayerModelTransformer
public "rotateRightLeg"(float0: float, float1: float, float2: float, float3: float): $PlayerModelTransformer
public "rotateRightLeg"(float0: float, float1: float, float2: float): $PlayerModelTransformer
public "setOption"(animationOption0: $AnimationOption$$Type): void
public "translateHead"(float0: float, float1: float, float2: float): $PlayerModelTransformer
public "translateLeftArm"(float0: float, float1: float, float2: float): $PlayerModelTransformer
public "translateLeftLeg"(float0: float, float1: float, float2: float): $PlayerModelTransformer
public "translateRightArm"(float0: float, float1: float, float2: float): $PlayerModelTransformer
public "translateRightLeg"(float0: float, float1: float, float2: float): $PlayerModelTransformer
get "headPitch"(): float
get "limbSwing"(): float
get "limbSwingAmount"(): float
get "netHeadYaw"(): float
get "partialTick"(): float
get "rawModel"(): $PlayerModel
set "option"(value: $AnimationOption$$Type)
}
}

declare module "com.alrex.parcool.config.ParCoolConfig$ConfigGroup" {
import { $Enum } from "java.lang.Enum"

export class $ParCoolConfig$ConfigGroup extends $Enum<$ParCoolConfig$ConfigGroup> {
static readonly "Animation": $ParCoolConfig$ConfigGroup
static readonly "CameraAnimation": $ParCoolConfig$ConfigGroup
static readonly "Control": $ParCoolConfig$ConfigGroup
static readonly "HUD": $ParCoolConfig$ConfigGroup
static readonly "Modifier": $ParCoolConfig$ConfigGroup
static readonly "Other": $ParCoolConfig$ConfigGroup
static readonly "Stamina": $ParCoolConfig$ConfigGroup

public static "valueOf"(string0: string): $ParCoolConfig$ConfigGroup
public static "values"(): $ParCoolConfig$ConfigGroup[]
}
}

declare module "com.alrex.parcool.common.action.BehaviorEnforcer$Marker" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $BehaviorEnforcer$Marker {
"remain"(): boolean
}

export namespace $BehaviorEnforcer$Marker {
const probejs$$marker: never
}
export abstract class $BehaviorEnforcer$Marker$$Static implements $BehaviorEnforcer$Marker {
}
}

declare module "com.alrex.parcool.api.unstable.action.ParCoolActionEvent$Finish$Pre" {
import { $ParCoolActionEvent$Finish } from "com.alrex.parcool.api.unstable.action.ParCoolActionEvent$Finish"
import { $Action$$Type } from "com.alrex.parcool.common.action.Action"
import { $Player$$Type } from "net.minecraft.world.entity.player.Player"

export class $ParCoolActionEvent$Finish$Pre extends $ParCoolActionEvent$Finish {
constructor(player0: $Player$$Type, action1: $Action$$Type)
constructor()

}
}

declare module "com.alrex.parcool.api.unstable.animation.AnimationOption" {
import { $AnimationPart$$Type } from "com.alrex.parcool.api.unstable.animation.AnimationPart"

export class $AnimationOption {
constructor()

public "cancel"(animationPart0: $AnimationPart$$Type): void
public "cancelAnimation"(): void
public "isAnimationCanceled"(): boolean
public "isCanceled"(animationPart0: $AnimationPart$$Type): boolean
get "animationCanceled"(): boolean
}
}

declare module "com.alrex.parcool.common.info.ClientSetting" {
import { $ParCoolConfig$Client$Doubles$$Type } from "com.alrex.parcool.config.ParCoolConfig$Client$Doubles"
import { $IStamina$Type } from "com.alrex.parcool.common.capability.IStamina$Type"
import { $Action$$Type } from "com.alrex.parcool.common.action.Action"
import { $ParCoolConfig$Client$Integers$$Type } from "com.alrex.parcool.config.ParCoolConfig$Client$Integers"
import { $ParCoolConfig$Client$Booleans$$Type } from "com.alrex.parcool.config.ParCoolConfig$Client$Booleans"
import { $Class$$Type } from "java.lang.Class"
import { $ByteBuffer$$Type } from "java.nio.ByteBuffer"

export class $ClientSetting {
static readonly "UNSYNCED_INSTANCE": $ClientSetting

constructor()

public "get"(doubles0: $ParCoolConfig$Client$Doubles$$Type): double
public "get"(booleans0: $ParCoolConfig$Client$Booleans$$Type): boolean
public "get"(integers0: $ParCoolConfig$Client$Integers$$Type): integer
public "getPossibilityOf"(class0: $Class$$Type<$Action$$Type>): boolean
public "getStaminaConsumptionOf"(class0: $Class$$Type<$Action$$Type>): integer
public "getStaminaType"(): $IStamina$Type
public static "readFrom"(byteBuffer0: $ByteBuffer$$Type): $ClientSetting
/** Client only, do not use in server scripts */
public static "readFromLocalConfig"(): $ClientSetting
public "writeTo"(byteBuffer0: $ByteBuffer$$Type): void
get "staminaType"(): $IStamina$Type
}
}

declare module "com.alrex.parcool.api.unstable.action.ParCoolActionEvent$TryToStartEvent" {
import { $Action$$Type } from "com.alrex.parcool.common.action.Action"
import { $ParCoolActionEvent } from "com.alrex.parcool.api.unstable.action.ParCoolActionEvent"
import { $Player$$Type } from "net.minecraft.world.entity.player.Player"

/** @deprecated */
export class $ParCoolActionEvent$TryToStartEvent extends $ParCoolActionEvent {
constructor(player0: $Player$$Type, action1: $Action$$Type)
constructor()

}
}

declare module "com.alrex.parcool.common.action.AdditionalProperties" {
import { $Parkourability$$Type } from "com.alrex.parcool.common.capability.Parkourability"
import { $Player$$Type } from "net.minecraft.world.entity.player.Player"

export class $AdditionalProperties {
constructor()

public "getActualNotLandingTick"(): integer
public "getInWaterTick"(): integer
public "getLandingTick"(): integer
public "getLastSneakingTick"(): integer
public "getLastSprintingTick"(): integer
public "getNotCreativeFlyingTick"(): integer
public "getNotInWaterTick"(): integer
public "getNotLandingTick"(): integer
public "getNotSneakingTick"(): integer
public "getNotSprintingTick"(): integer
public "getPreviousNotLandingTick"(): integer
public "getSneakingTick"(): integer
public "getSprintingTick"(): integer
public "getTickAfterLastJump"(): integer
public "isInAirByJumping"(): boolean
public "onJump"(): void
public "onTick"(player0: $Player$$Type, parkourability1: $Parkourability$$Type): void
get "actualNotLandingTick"(): integer
get "inWaterTick"(): integer
get "landingTick"(): integer
get "lastSneakingTick"(): integer
get "lastSprintingTick"(): integer
get "notCreativeFlyingTick"(): integer
get "notInWaterTick"(): integer
get "notLandingTick"(): integer
get "notSneakingTick"(): integer
get "notSprintingTick"(): integer
get "previousNotLandingTick"(): integer
get "sneakingTick"(): integer
get "sprintingTick"(): integer
get "tickAfterLastJump"(): integer
get "inAirByJumping"(): boolean
}
}

declare module "com.alrex.parcool.config.ParCoolConfig$Client$Integers" {
import { $ParCoolConfig$ConfigGroup } from "com.alrex.parcool.config.ParCoolConfig$ConfigGroup"
import { $ForgeConfigSpec$Builder$$Type } from "net.minecraftforge.common.ForgeConfigSpec$Builder"
import { $Enum } from "java.lang.Enum"
import { $ParCoolConfig$Item } from "com.alrex.parcool.config.ParCoolConfig$Item"
import { $ByteBuffer$$Type } from "java.nio.ByteBuffer"

export class $ParCoolConfig$Client$Integers extends $Enum<$ParCoolConfig$Client$Integers> implements $ParCoolConfig$Item<integer> {
static readonly "AcceptableAngleOfWallJump": $ParCoolConfig$Client$Integers
readonly "Comment": string
static readonly "CoyoteTime": $ParCoolConfig$Client$Integers
readonly "DefaultValue": integer
static readonly "DodgeCoolTime": $ParCoolConfig$Client$Integers
readonly "Group": $ParCoolConfig$ConfigGroup
static readonly "HorizontalOffsetOfLightStaminaHUD": $ParCoolConfig$Client$Integers
static readonly "HorizontalOffsetOfStaminaHUD": $ParCoolConfig$Client$Integers
static readonly "JustTimeBreakfallTick": $ParCoolConfig$Client$Integers
readonly "Max": integer
static readonly "MaxSuccessiveDodgeCount": $ParCoolConfig$Client$Integers
readonly "Min": integer
readonly "Path": string
static readonly "SlidingContinuableTick": $ParCoolConfig$Client$Integers
static readonly "SuccessiveDodgeCoolTime": $ParCoolConfig$Client$Integers
readonly "Translation": string
static readonly "VerticalOffsetOfLightStaminaHUD": $ParCoolConfig$Client$Integers
static readonly "VerticalOffsetOfStaminaHUD": $ParCoolConfig$Client$Integers
static readonly "WallRunContinuableTick": $ParCoolConfig$Client$Integers

public "getPath"(): string
public "readFromBuffer"(byteBuffer0: $ByteBuffer$$Type): integer
public "register"(builder0: $ForgeConfigSpec$Builder$$Type): void
public "set"(integer0: integer): void
public static "valueOf"(string0: string): $ParCoolConfig$Client$Integers
public static "values"(): $ParCoolConfig$Client$Integers[]
public "writeToBuffer"(byteBuffer0: $ByteBuffer$$Type): void
get "path"(): string
}
}

declare module "com.alrex.parcool.api.unstable.action.ParCoolActionEvent$Tick$Post" {
import { $ParCoolActionEvent$Tick } from "com.alrex.parcool.api.unstable.action.ParCoolActionEvent$Tick"
import { $Action$$Type } from "com.alrex.parcool.common.action.Action"
import { $Player$$Type } from "net.minecraft.world.entity.player.Player"

export class $ParCoolActionEvent$Tick$Post extends $ParCoolActionEvent$Tick {
constructor(player0: $Player$$Type, action1: $Action$$Type)
constructor()

}
}

declare module "com.alrex.parcool.api.unstable.action.ParCoolActionEvent$StartEvent" {
import { $Action$$Type } from "com.alrex.parcool.common.action.Action"
import { $ParCoolActionEvent } from "com.alrex.parcool.api.unstable.action.ParCoolActionEvent"
import { $Player$$Type } from "net.minecraft.world.entity.player.Player"

/** @deprecated */
export class $ParCoolActionEvent$StartEvent extends $ParCoolActionEvent {
constructor(player0: $Player$$Type, action1: $Action$$Type)
constructor()

}
}

declare module "com.alrex.parcool.common.action.StaminaConsumeTiming" {
import { $Enum } from "java.lang.Enum"

export class $StaminaConsumeTiming extends $Enum<$StaminaConsumeTiming> {
static readonly "None": $StaminaConsumeTiming
static readonly "OnStart": $StaminaConsumeTiming
static readonly "OnWorking": $StaminaConsumeTiming

public static "valueOf"(string0: string): $StaminaConsumeTiming
public static "values"(): $StaminaConsumeTiming[]
}
}

declare module "com.alrex.parcool.api.unstable.animation.ParCoolAnimationInfoEvent" {
import { $Animator, $Animator$$Type } from "com.alrex.parcool.client.animation.Animator"
import { $Event } from "net.minecraftforge.eventbus.api.Event"
import { $AbstractClientPlayer, $AbstractClientPlayer$$Type } from "net.minecraft.client.player.AbstractClientPlayer"
import { $AnimationOption } from "com.alrex.parcool.api.unstable.animation.AnimationOption"

export class $ParCoolAnimationInfoEvent extends $Event {
constructor(abstractClientPlayer0: $AbstractClientPlayer$$Type, animator1: $Animator$$Type)
constructor()

public "getAnimator"(): $Animator
public "getOption"(): $AnimationOption
public "getPlayer"(): $AbstractClientPlayer
get "animator"(): $Animator
get "option"(): $AnimationOption
get "player"(): $AbstractClientPlayer
}
}

declare module "com.alrex.parcool.common.info.ServerLimitation" {
import { $ParCoolConfig$Server$Integers$$Type } from "com.alrex.parcool.config.ParCoolConfig$Server$Integers"
import { $ServerPlayer$$Type } from "net.minecraft.server.level.ServerPlayer"
import { $ParCoolConfig$Server$Doubles$$Type } from "com.alrex.parcool.config.ParCoolConfig$Server$Doubles"
import { $ParCoolConfig$Server$Booleans$$Type } from "com.alrex.parcool.config.ParCoolConfig$Server$Booleans"
import { $Action$$Type } from "com.alrex.parcool.common.action.Action"
import { $Class$$Type } from "java.lang.Class"
import { $ByteBuffer$$Type } from "java.nio.ByteBuffer"

export class $ServerLimitation {
static readonly "UNSYNCED_INSTANCE": $ServerLimitation

constructor()

public "get"(doubles0: $ParCoolConfig$Server$Doubles$$Type): double
public "get"(booleans0: $ParCoolConfig$Server$Booleans$$Type): boolean
public "get"(integers0: $ParCoolConfig$Server$Integers$$Type): integer
public static "get"(serverPlayer0: $ServerPlayer$$Type): $ServerLimitation
public "getStaminaConsumptionOf"(class0: $Class$$Type<$Action$$Type>): integer
public "isPermitted"(class0: $Class$$Type<$Action$$Type>): boolean
public "isSynced"(): boolean
public static "readFrom"(byteBuffer0: $ByteBuffer$$Type): $ServerLimitation
public "writeTo"(byteBuffer0: $ByteBuffer$$Type): void
get "synced"(): boolean
}
}

declare module "com.alrex.parcool.config.ParCoolConfig$Server$Integers" {
import { $ParCoolConfig$ConfigGroup } from "com.alrex.parcool.config.ParCoolConfig$ConfigGroup"
import { $ForgeConfigSpec$Builder$$Type } from "net.minecraftforge.common.ForgeConfigSpec$Builder"
import { $Enum } from "java.lang.Enum"
import { $ParCoolConfig$Item } from "com.alrex.parcool.config.ParCoolConfig$Item"
import { $ParCoolConfig$AdvantageousDirection } from "com.alrex.parcool.config.ParCoolConfig$AdvantageousDirection"
import { $ByteBuffer$$Type } from "java.nio.ByteBuffer"

export class $ParCoolConfig$Server$Integers extends $Enum<$ParCoolConfig$Server$Integers> implements $ParCoolConfig$Item<integer> {
readonly "Advantageous": $ParCoolConfig$AdvantageousDirection
readonly "Comment": string
readonly "DefaultValue": integer
static readonly "DodgeCoolTime": $ParCoolConfig$Server$Integers
readonly "Group": $ParCoolConfig$ConfigGroup
readonly "Max": integer
static readonly "MaxCoyoteTime": $ParCoolConfig$Server$Integers
static readonly "MaxJustTimeBreakfallTick": $ParCoolConfig$Server$Integers
static readonly "MaxSlidingContinuableTick": $ParCoolConfig$Server$Integers
static readonly "MaxStaminaLimit": $ParCoolConfig$Server$Integers
static readonly "MaxStaminaRecovery": $ParCoolConfig$Server$Integers
static readonly "MaxSuccessiveDodgeCount": $ParCoolConfig$Server$Integers
static readonly "MaxWallRunContinuableTick": $ParCoolConfig$Server$Integers
readonly "Min": integer
readonly "Path": string
static readonly "SuccessiveDodgeCoolTime": $ParCoolConfig$Server$Integers

public "getPath"(): string
public "readFromBuffer"(byteBuffer0: $ByteBuffer$$Type): integer
public "register"(builder0: $ForgeConfigSpec$Builder$$Type): void
public "set"(integer0: integer): void
public static "valueOf"(string0: string): $ParCoolConfig$Server$Integers
public static "values"(): $ParCoolConfig$Server$Integers[]
public "writeToBuffer"(byteBuffer0: $ByteBuffer$$Type): void
get "path"(): string
}
}

declare module "com.alrex.parcool.common.action.BehaviorEnforcer$ID" {
import { $Comparable } from "java.lang.Comparable"

export class $BehaviorEnforcer$ID implements $Comparable<$BehaviorEnforcer$ID> {
public "compareTo"(iD0: $BehaviorEnforcer$ID$$Type): integer
}
}

declare module "com.alrex.parcool.config.ParCoolConfig$Client$Booleans" {
import { $ParCoolConfig$ConfigGroup } from "com.alrex.parcool.config.ParCoolConfig$ConfigGroup"
import { $ForgeConfigSpec$Builder$$Type } from "net.minecraftforge.common.ForgeConfigSpec$Builder"
import { $Enum } from "java.lang.Enum"
import { $ParCoolConfig$Item } from "com.alrex.parcool.config.ParCoolConfig$Item"
import { $ByteBuffer$$Type } from "java.nio.ByteBuffer"

export class $ParCoolConfig$Client$Booleans extends $Enum<$ParCoolConfig$Client$Booleans> implements $ParCoolConfig$Item<boolean> {
static readonly "CanGetOffStepsWhileDodge": $ParCoolConfig$Client$Booleans
readonly "Comment": string
readonly "DefaultValue": boolean
static readonly "Enable3DRenderingForZipline": $ParCoolConfig$Client$Booleans
static readonly "EnableActionParticles": $ParCoolConfig$Client$Booleans
static readonly "EnableActionParticlesOfJustTimeBreakfall": $ParCoolConfig$Client$Booleans
static readonly "EnableActionSounds": $ParCoolConfig$Client$Booleans
static readonly "EnableAnimation": $ParCoolConfig$Client$Booleans
static readonly "EnableCameraAnimationOfBackWallJump": $ParCoolConfig$Client$Booleans
static readonly "EnableCameraAnimationOfDodge": $ParCoolConfig$Client$Booleans
static readonly "EnableCameraAnimationOfFlipping": $ParCoolConfig$Client$Booleans
static readonly "EnableCameraAnimationOfHWallRun": $ParCoolConfig$Client$Booleans
static readonly "EnableCameraAnimationOfHangDown": $ParCoolConfig$Client$Booleans
static readonly "EnableCameraAnimationOfRolling": $ParCoolConfig$Client$Booleans
static readonly "EnableCameraAnimationOfVault": $ParCoolConfig$Client$Booleans
static readonly "EnableCrawlInAir": $ParCoolConfig$Client$Booleans
static readonly "EnableDoubleTappingForDodge": $ParCoolConfig$Client$Booleans
static readonly "EnableFPVAnimation": $ParCoolConfig$Client$Booleans
static readonly "EnableFallingAnimation": $ParCoolConfig$Client$Booleans
static readonly "EnableJustTimeEffectOfBreakfall": $ParCoolConfig$Client$Booleans
static readonly "EnableLeanAnimationOfFastRun": $ParCoolConfig$Client$Booleans
static readonly "EnableRollWhenCreative": $ParCoolConfig$Client$Booleans
static readonly "EnableStaminaExhaustionPenalty": $ParCoolConfig$Client$Booleans
static readonly "EnableVaultInAir": $ParCoolConfig$Client$Booleans
static readonly "EnableWallJumpCooldown": $ParCoolConfig$Client$Booleans
readonly "Group": $ParCoolConfig$ConfigGroup
static readonly "HideInBlockSneakNeeded": $ParCoolConfig$Client$Booleans
static readonly "HideStaminaHUDWhenStaminaIsInfinite": $ParCoolConfig$Client$Booleans
static readonly "InfiniteStamina": $ParCoolConfig$Client$Booleans
static readonly "InfiniteStaminaWhenCreative": $ParCoolConfig$Client$Booleans
static readonly "ParCoolIsActive": $ParCoolConfig$Client$Booleans
readonly "Path": string
static readonly "ShowActionStatusBar": $ParCoolConfig$Client$Booleans
static readonly "ShowAutoResynchronizationNotification": $ParCoolConfig$Client$Booleans
static readonly "ShowLightStaminaHUDAlways": $ParCoolConfig$Client$Booleans
static readonly "SubstituteSprintForFastRun": $ParCoolConfig$Client$Booleans
readonly "Translation": string
static readonly "VaultKeyPressedNeeded": $ParCoolConfig$Client$Booleans

public "getPath"(): string
public "readFromBuffer"(byteBuffer0: $ByteBuffer$$Type): boolean
public "register"(builder0: $ForgeConfigSpec$Builder$$Type): void
public "set"(boolean0: boolean): void
public static "valueOf"(string0: string): $ParCoolConfig$Client$Booleans
public static "values"(): $ParCoolConfig$Client$Booleans[]
public "writeToBuffer"(byteBuffer0: $ByteBuffer$$Type): void
get "path"(): string
}
}

declare module "com.alrex.parcool.api.unstable.action.ParCoolActionEvent$Start$Post" {
import { $ParCoolActionEvent$Start } from "com.alrex.parcool.api.unstable.action.ParCoolActionEvent$Start"
import { $Action$$Type } from "com.alrex.parcool.common.action.Action"
import { $Player$$Type } from "net.minecraft.world.entity.player.Player"

export class $ParCoolActionEvent$Start$Post extends $ParCoolActionEvent$Start {
constructor(player0: $Player$$Type, action1: $Action$$Type)
constructor()

}
}

declare module "com.alrex.parcool.api.unstable.action.ParCoolActionEvent$TryToContinue" {
import { $Action$$Type } from "com.alrex.parcool.common.action.Action"
import { $ParCoolActionEvent } from "com.alrex.parcool.api.unstable.action.ParCoolActionEvent"
import { $Player$$Type } from "net.minecraft.world.entity.player.Player"

export class $ParCoolActionEvent$TryToContinue extends $ParCoolActionEvent {
constructor(player0: $Player$$Type, action1: $Action$$Type)
constructor()

}
}

declare module "com.alrex.parcool.api.client.gui.ParCoolHUDEvent$RenderEvent" {
import { $ParCoolHUDEvent } from "com.alrex.parcool.api.client.gui.ParCoolHUDEvent"
import { $GuiGraphics, $GuiGraphics$$Type } from "net.minecraft.client.gui.GuiGraphics"
import { $ForgeGui, $ForgeGui$$Type } from "net.minecraftforge.client.gui.overlay.ForgeGui"

export class $ParCoolHUDEvent$RenderEvent extends $ParCoolHUDEvent {
constructor(forgeGui0: $ForgeGui$$Type, guiGraphics1: $GuiGraphics$$Type, float2: float, int3: integer, int4: integer)
constructor()

public "getGui"(): $ForgeGui
public "getGuiGraphics"(): $GuiGraphics
public "getPartialTick"(): float
public "getScreenHeight"(): float
public "getScreenWidth"(): float
get "gui"(): $ForgeGui
get "guiGraphics"(): $GuiGraphics
get "partialTick"(): float
get "screenHeight"(): float
get "screenWidth"(): float
}
}

declare module "com.alrex.parcool.api.unstable.action.ParCoolActionEvent$Finish$Post" {
import { $ParCoolActionEvent$Finish } from "com.alrex.parcool.api.unstable.action.ParCoolActionEvent$Finish"
import { $Action$$Type } from "com.alrex.parcool.common.action.Action"
import { $Player$$Type } from "net.minecraft.world.entity.player.Player"

export class $ParCoolActionEvent$Finish$Post extends $ParCoolActionEvent$Finish {
constructor(player0: $Player$$Type, action1: $Action$$Type)
constructor()

}
}

declare module "com.alrex.parcool.api.unstable.action.ParCoolActionEvent$Finish" {
import { $ParCoolActionEvent } from "com.alrex.parcool.api.unstable.action.ParCoolActionEvent"

export class $ParCoolActionEvent$Finish extends $ParCoolActionEvent {
constructor()

}
}

declare module "com.alrex.parcool.api.unstable.action.ParCoolActionEvent$StopEvent" {
import { $Action$$Type } from "com.alrex.parcool.common.action.Action"
import { $ParCoolActionEvent } from "com.alrex.parcool.api.unstable.action.ParCoolActionEvent"
import { $Player$$Type } from "net.minecraft.world.entity.player.Player"

/** @deprecated */
export class $ParCoolActionEvent$StopEvent extends $ParCoolActionEvent {
constructor(player0: $Player$$Type, action1: $Action$$Type)
constructor()

}
}

