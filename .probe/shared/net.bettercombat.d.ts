declare module "net.bettercombat.logic.AnimatedHand" {
import { $Enum } from "java.lang.Enum"

export class $AnimatedHand extends $Enum<$AnimatedHand> {
static readonly "MAIN_HAND": $AnimatedHand
static readonly "OFF_HAND": $AnimatedHand
static readonly "TWO_HANDED": $AnimatedHand

public static "from"(isOffHand: boolean, isTwoHanded: boolean): $AnimatedHand
public "isOffHand"(): boolean
public static "valueOf"(name: string): $AnimatedHand
public static "values"(): $AnimatedHand[]
get "offHand"(): boolean
}
}

declare module "net.bettercombat.client.collision.OrientedBoundingBox" {
import { $AABB$$Type } from "net.minecraft.world.phys.AABB"
import { $Vec3, $Vec3$$Type } from "net.minecraft.world.phys.Vec3"
import { $Matrix3f, $Matrix3f$$Type } from "org.joml.Matrix3f"

export class $OrientedBoundingBox {
constructor(center: $Vec3$$Type, width: double, height: double, depth: double, yaw: float, pitch: float)
constructor(box: $AABB$$Type)
constructor(center: $Vec3$$Type, size: $Vec3$$Type, yaw: float, pitch: float)
constructor(obb: $OrientedBoundingBox$$Type)

public static "Intersects"(a: $OrientedBoundingBox$$Type, b: $OrientedBoundingBox$$Type): boolean
public "contains"(point: $Vec3$$Type): boolean
public "copy"(): $OrientedBoundingBox
public "intersects"(otherOBB: $OrientedBoundingBox$$Type): boolean
public "intersects"(boundingBox: $AABB$$Type): boolean
public "offset"(offset: $Vec3$$Type): $OrientedBoundingBox
public "offsetAlongAxisX"(offset: double): $OrientedBoundingBox
public "offsetAlongAxisY"(offset: double): $OrientedBoundingBox
public "offsetAlongAxisZ"(offset: double): $OrientedBoundingBox
public "scale"(scale: double): $OrientedBoundingBox
public "updateVertex"(): $OrientedBoundingBox
get "axisX"(): $Vec3
set "axisX"(value: $Vec3$$Type)
get "axisY"(): $Vec3
set "axisY"(value: $Vec3$$Type)
get "axisZ"(): $Vec3
set "axisZ"(value: $Vec3$$Type)
get "center"(): $Vec3
set "center"(value: $Vec3$$Type)
get "extent"(): $Vec3
set "extent"(value: $Vec3$$Type)
get "rotation"(): $Matrix3f
set "rotation"(value: $Matrix3f$$Type)
get "scaledAxisX"(): $Vec3
set "scaledAxisX"(value: $Vec3$$Type)
get "scaledAxisY"(): $Vec3
set "scaledAxisY"(value: $Vec3$$Type)
get "scaledAxisZ"(): $Vec3
set "scaledAxisZ"(value: $Vec3$$Type)
get "vertex1"(): $Vec3
set "vertex1"(value: $Vec3$$Type)
get "vertex2"(): $Vec3
set "vertex2"(value: $Vec3$$Type)
get "vertex3"(): $Vec3
set "vertex3"(value: $Vec3$$Type)
get "vertex4"(): $Vec3
set "vertex4"(value: $Vec3$$Type)
get "vertex5"(): $Vec3
set "vertex5"(value: $Vec3$$Type)
get "vertex6"(): $Vec3
set "vertex6"(value: $Vec3$$Type)
get "vertex7"(): $Vec3
set "vertex7"(value: $Vec3$$Type)
get "vertex8"(): $Vec3
set "vertex8"(value: $Vec3$$Type)
get "vertices"(): $Vec3[]
set "vertices"(value: $Vec3$$Type[])
}
}

declare module "net.bettercombat.api.EntityPlayer_BetterCombat" {
import { $AttackHand } from "net.bettercombat.api.AttackHand"

export interface $EntityPlayer_BetterCombat {
"getCurrentAttack"(): $AttackHand
get "currentAttack"(): $AttackHand
}

export namespace $EntityPlayer_BetterCombat {
const probejs$$marker: never
}
export abstract class $EntityPlayer_BetterCombat$$Static implements $EntityPlayer_BetterCombat {
}
}

declare module "net.bettercombat.logic.PlayerAttackProperties" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $PlayerAttackProperties {
"getComboCount"(): integer
"setComboCount"(int0: integer): void
get "comboCount"(): integer
set "comboCount"(value: integer)
}

export namespace $PlayerAttackProperties {
const probejs$$marker: never
}
export abstract class $PlayerAttackProperties$$Static implements $PlayerAttackProperties {
}
}

declare module "net.bettercombat.logic.knockback.ConfigurableKnockback" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $ConfigurableKnockback {
"setKnockbackMultiplier_BetterCombat"(float0: float): void
set "knockbackMultiplier_BetterCombat"(value: float)
}

export namespace $ConfigurableKnockback {
const probejs$$marker: never
}
export abstract class $ConfigurableKnockback$$Static implements $ConfigurableKnockback {
}
}

declare module "net.bettercombat.client.animation.PlayerAttackAnimatable" {
import { $AnimatedHand$$Type } from "net.bettercombat.logic.AnimatedHand"

export interface $PlayerAttackAnimatable {
"playAttackAnimation"(string0: string, animatedHand1: $AnimatedHand$$Type, float2: float, float3: float): void
"stopAttackAnimation"(float0: float): void
"updateAnimationsOnTick"(): void
}

export namespace $PlayerAttackAnimatable {
const probejs$$marker: never
}
export abstract class $PlayerAttackAnimatable$$Static implements $PlayerAttackAnimatable {
}
}

declare module "net.bettercombat.logic.ItemStackNBTWeaponAttributes" {
import { $WeaponAttributes, $WeaponAttributes$$Type } from "net.bettercombat.api.WeaponAttributes"

export interface $ItemStackNBTWeaponAttributes {
"getWeaponAttributes"(): $WeaponAttributes
"hasInvalidAttributes"(): boolean
"setInvalidAttributes"(boolean0: boolean): void
"setWeaponAttributes"(weaponAttributes0: $WeaponAttributes$$Type): void
get "weaponAttributes"(): $WeaponAttributes
set "invalidAttributes"(value: boolean)
set "weaponAttributes"(value: $WeaponAttributes$$Type)
}

export namespace $ItemStackNBTWeaponAttributes {
const probejs$$marker: never
}
export abstract class $ItemStackNBTWeaponAttributes$$Static implements $ItemStackNBTWeaponAttributes {
}
}

declare module "net.bettercombat.api.ComboState" {
import { $Record } from "java.lang.Record"

export class $ComboState extends $Record {
constructor(current: integer, total: integer)

public "current"(): integer
public "total"(): integer
}
}

declare module "net.bettercombat.api.WeaponAttributes$Sound" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export class $WeaponAttributes$Sound {
constructor()
constructor(id: string)

public "id"(): string
public "pitch"(): float
public "randomness"(): float
public "volume"(): float
}
}

declare module "net.bettercombat.api.WeaponAttributes$HitBoxShape" {
import { $Enum } from "java.lang.Enum"

export class $WeaponAttributes$HitBoxShape extends $Enum<$WeaponAttributes$HitBoxShape> {
static readonly "FORWARD_BOX": $WeaponAttributes$HitBoxShape
static readonly "HORIZONTAL_PLANE": $WeaponAttributes$HitBoxShape
static readonly "VERTICAL_PLANE": $WeaponAttributes$HitBoxShape

public static "valueOf"(name: string): $WeaponAttributes$HitBoxShape
public static "values"(): $WeaponAttributes$HitBoxShape[]
}
}

declare module "net.bettercombat.api.WeaponAttributes$Condition" {
import { $Enum } from "java.lang.Enum"

export class $WeaponAttributes$Condition extends $Enum<$WeaponAttributes$Condition> {
static readonly "DUAL_WIELDING_ANY": $WeaponAttributes$Condition
static readonly "DUAL_WIELDING_SAME": $WeaponAttributes$Condition
static readonly "DUAL_WIELDING_SAME_CATEGORY": $WeaponAttributes$Condition
static readonly "MAIN_HAND_ONLY": $WeaponAttributes$Condition
static readonly "MOUNTED": $WeaponAttributes$Condition
static readonly "NOT_DUAL_WIELDING": $WeaponAttributes$Condition
static readonly "NOT_MOUNTED": $WeaponAttributes$Condition
static readonly "NO_OFFHAND_ITEM": $WeaponAttributes$Condition
static readonly "OFF_HAND_ONLY": $WeaponAttributes$Condition
static readonly "OFF_HAND_SHIELD": $WeaponAttributes$Condition

public static "valueOf"(name: string): $WeaponAttributes$Condition
public static "values"(): $WeaponAttributes$Condition[]
}
}

declare module "net.bettercombat.mixin.PlayerEntityAccessor" {
import { $Inventory } from "net.minecraft.world.entity.player.Inventory"

export interface $PlayerEntityAccessor {
"getInventory"(): $Inventory
get "inventory"(): $Inventory
}

export namespace $PlayerEntityAccessor {
const probejs$$marker: never
}
export abstract class $PlayerEntityAccessor$$Static implements $PlayerEntityAccessor {
}
}

declare module "net.bettercombat.mixin.client.MinecraftClientAccessor" {
import { $EntityRenderDispatcher } from "net.minecraft.client.renderer.entity.EntityRenderDispatcher"

export interface $MinecraftClientAccessor {
"getAttackCooldown"(): integer
"getEntityRenderDispatcher"(): $EntityRenderDispatcher
"setAttackCooldown"(int0: integer): void
get "attackCooldown"(): integer
get "entityRenderDispatcher"(): $EntityRenderDispatcher
set "attackCooldown"(value: integer)
}

export namespace $MinecraftClientAccessor {
const probejs$$marker: never
}
export abstract class $MinecraftClientAccessor$$Static implements $MinecraftClientAccessor {
}
}

declare module "net.bettercombat.api.WeaponAttributes" {
import { $WeaponAttributes$Attack, $WeaponAttributes$Attack$$Type } from "net.bettercombat.api.WeaponAttributes$Attack"

export class $WeaponAttributes {
constructor(attack_range: double, pose: string, off_hand_pose: string, isTwoHanded: boolean, category: string, attacks: $WeaponAttributes$Attack$$Type[])

public "attackRange"(): double
public "attacks"(): $WeaponAttributes$Attack[]
public "category"(): string
public "isTwoHanded"(): boolean
public "offHandPose"(): string
public "pose"(): string
public "two_handed"(): boolean
get "twoHanded"(): boolean
}
}

declare module "net.bettercombat.api.MinecraftClient_BetterCombat" {
import { $Entity } from "net.minecraft.world.entity.Entity"

export interface $MinecraftClient_BetterCombat {
"cancelUpswing"(): void
"getComboCount"(): integer
"getCursorTarget"(): $Entity
"getSwingProgress"(): float
"getUpswingTicks"(): integer
"hasTargetsInReach"(): boolean
"isWeaponSwingInProgress"(): boolean
get "comboCount"(): integer
get "cursorTarget"(): $Entity
get "swingProgress"(): float
get "upswingTicks"(): integer
get "weaponSwingInProgress"(): boolean
}

export namespace $MinecraftClient_BetterCombat {
const probejs$$marker: never
}
export abstract class $MinecraftClient_BetterCombat$$Static implements $MinecraftClient_BetterCombat {
}
}

declare module "net.bettercombat.mixin.LivingEntityAccessor" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $LivingEntityAccessor {
"getLastAttackedTicks"(): integer
"invokeTurnHead"(float0: float, float1: float): float
"setLastAttackedTicks"(int0: integer): void
get "lastAttackedTicks"(): integer
set "lastAttackedTicks"(value: integer)
}

export namespace $LivingEntityAccessor {
const probejs$$marker: never
}
export abstract class $LivingEntityAccessor$$Static implements $LivingEntityAccessor {
}
}

declare module "net.bettercombat.api.WeaponAttributes$Attack" {
import { $WeaponAttributes$Sound, $WeaponAttributes$Sound$$Type } from "net.bettercombat.api.WeaponAttributes$Sound"
import { $WeaponAttributes$HitBoxShape, $WeaponAttributes$HitBoxShape$$Type } from "net.bettercombat.api.WeaponAttributes$HitBoxShape"
import { $WeaponAttributes$Condition, $WeaponAttributes$Condition$$Type } from "net.bettercombat.api.WeaponAttributes$Condition"

export class $WeaponAttributes$Attack {
constructor()
constructor(conditions: $WeaponAttributes$Condition$$Type[], hitbox: $WeaponAttributes$HitBoxShape$$Type, damage_multiplier: double, angle: double, upswing: double, animation: string, swing_sound: $WeaponAttributes$Sound$$Type, impact_sound: $WeaponAttributes$Sound$$Type)

public "angle"(): double
public "animation"(): string
public "conditions"(): $WeaponAttributes$Condition[]
public "damageMultiplier"(): double
public "hitbox"(): $WeaponAttributes$HitBoxShape
public "impactSound"(): $WeaponAttributes$Sound
public "swingSound"(): $WeaponAttributes$Sound
public "upswing"(): double
}
}

declare module "net.bettercombat.api.AttackHand" {
import { $ComboState, $ComboState$$Type } from "net.bettercombat.api.ComboState"
import { $Record } from "java.lang.Record"
import { $ItemStack, $ItemStack$$Type } from "net.minecraft.world.item.ItemStack"
import { $WeaponAttributes, $WeaponAttributes$$Type } from "net.bettercombat.api.WeaponAttributes"
import { $WeaponAttributes$Attack, $WeaponAttributes$Attack$$Type } from "net.bettercombat.api.WeaponAttributes$Attack"

export class $AttackHand extends $Record {
constructor(attack: $WeaponAttributes$Attack$$Type, combo: $ComboState$$Type, isOffHand: boolean, attributes: $WeaponAttributes$$Type, itemStack: $ItemStack$$Type)

public "attack"(): $WeaponAttributes$Attack
public "attributes"(): $WeaponAttributes
public "combo"(): $ComboState
public "isOffHand"(): boolean
public "itemStack"(): $ItemStack
public "upswingRate"(): double
get "offHand"(): boolean
}
}

