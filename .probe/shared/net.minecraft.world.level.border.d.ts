declare module "net.minecraft.world.level.border.WorldBorder$BorderExtent" {
import { $VoxelShape } from "net.minecraft.world.phys.shapes.VoxelShape"
import { $BorderStatus } from "net.minecraft.world.level.border.BorderStatus"

export interface $WorldBorder$BorderExtent {
"getCollisionShape"(): $VoxelShape
"getLerpRemainingTime"(): long
"getLerpSpeed"(): double
"getLerpTarget"(): double
"getMaxX"(): double
"getMaxZ"(): double
"getMinX"(): double
"getMinZ"(): double
"getSize"(): double
"getStatus"(): $BorderStatus
"onAbsoluteMaxSizeChange"(): void
"onCenterChange"(): void
"update"(): $WorldBorder$BorderExtent
get "collisionShape"(): $VoxelShape
get "lerpRemainingTime"(): long
get "lerpSpeed"(): double
get "lerpTarget"(): double
get "maxX"(): double
get "maxZ"(): double
get "minX"(): double
get "minZ"(): double
get "size"(): double
get "status"(): $BorderStatus
}

export namespace $WorldBorder$BorderExtent {
const probejs$$marker: never
}
export abstract class $WorldBorder$BorderExtent$$Static implements $WorldBorder$BorderExtent {
}
}

declare module "net.minecraft.world.level.border.WorldBorder" {
import { $ChunkPos$$Type } from "net.minecraft.world.level.ChunkPos"
import { $Entity$$Type } from "net.minecraft.world.entity.Entity"
import { $AABB$$Type } from "net.minecraft.world.phys.AABB"
import { $WorldBorder$Settings, $WorldBorder$Settings$$Type } from "net.minecraft.world.level.border.WorldBorder$Settings"
import { $WorldBorder$BorderExtent, $WorldBorder$BorderExtent$$Type } from "net.minecraft.world.level.border.WorldBorder$BorderExtent"
import { $BlockPos, $BlockPos$$Type } from "net.minecraft.core.BlockPos"
import { $BorderChangeListener$$Type } from "net.minecraft.world.level.border.BorderChangeListener"
import { $VoxelShape } from "net.minecraft.world.phys.shapes.VoxelShape"
import { $BorderStatus } from "net.minecraft.world.level.border.BorderStatus"

export class $WorldBorder {
static readonly "DEFAULT_SETTINGS": $WorldBorder$Settings
static readonly "MAX_CENTER_COORDINATE": double
static readonly "MAX_SIZE": double

constructor()

public "addListener"(borderChangeListener0: $BorderChangeListener$$Type): void
public "applySettings"(settings0: $WorldBorder$Settings$$Type): void
public "clampToBounds"(double0: double, double1: double, double2: double): $BlockPos
public "createSettings"(): $WorldBorder$Settings
public "getAbsoluteMaxSize"(): integer
public "getCenterX"(): double
public "getCenterZ"(): double
public "getCollisionShape"(): $VoxelShape
public "getDamagePerBlock"(): double
public "getDamageSafeZone"(): double
public "getDistanceToBorder"(double0: double, double1: double): double
public "getDistanceToBorder"(entity0: $Entity$$Type): double
public "getLerpRemainingTime"(): long
public "getLerpSpeed"(): double
public "getLerpTarget"(): double
public "getMaxX"(): double
public "getMaxZ"(): double
public "getMinX"(): double
public "getMinZ"(): double
public "getSize"(): double
public "getStatus"(): $BorderStatus
public "getWarningBlocks"(): integer
public "getWarningTime"(): integer
public "isInsideCloseToBorder"(entity0: $Entity$$Type, aABB1: $AABB$$Type): boolean
public "isWithinBounds"(chunkPos0: $ChunkPos$$Type): boolean
public "isWithinBounds"(double0: double, double1: double): boolean
public "isWithinBounds"(double0: double, double1: double, double2: double): boolean
public "isWithinBounds"(aABB0: $AABB$$Type): boolean
public "isWithinBounds"(blockPos0: $BlockPos$$Type): boolean
public "lerpSizeBetween"(double0: double, double1: double, long2: long): void
public "redirect$cno000$getUpdatedArea"(borderExtent0: $WorldBorder$BorderExtent$$Type): $WorldBorder$BorderExtent
public "removeListener"(borderChangeListener0: $BorderChangeListener$$Type): void
public "setAbsoluteMaxSize"(int0: integer): void
public "setCenter"(double0: double, double1: double): void
public "setDamagePerBlock"(double0: double): void
public "setDamageSafeZone"(double0: double): void
public "setSize"(double0: double): void
public "setWarningBlocks"(int0: integer): void
public "setWarningTime"(int0: integer): void
public "tick"(): void
get "absoluteMaxSize"(): integer
get "centerX"(): double
get "centerZ"(): double
get "collisionShape"(): $VoxelShape
get "damagePerBlock"(): double
get "damageSafeZone"(): double
get "lerpRemainingTime"(): long
get "lerpSpeed"(): double
get "lerpTarget"(): double
get "maxX"(): double
get "maxZ"(): double
get "minX"(): double
get "minZ"(): double
get "size"(): double
get "status"(): $BorderStatus
get "warningBlocks"(): integer
get "warningTime"(): integer
set "absoluteMaxSize"(value: integer)
set "damagePerBlock"(value: double)
set "damageSafeZone"(value: double)
set "size"(value: double)
set "warningBlocks"(value: integer)
set "warningTime"(value: integer)
}
}

declare module "net.minecraft.world.level.border.WorldBorder$Settings" {
import { $CompoundTag$$Type } from "net.minecraft.nbt.CompoundTag"
import { $DynamicLike$$Type } from "com.mojang.serialization.DynamicLike"

export class $WorldBorder$Settings {
public "getCenterX"(): double
public "getCenterZ"(): double
public "getDamagePerBlock"(): double
public "getSafeZone"(): double
public "getSize"(): double
public "getSizeLerpTarget"(): double
public "getSizeLerpTime"(): long
public "getWarningBlocks"(): integer
public "getWarningTime"(): integer
public static "read"(dynamicLike0: $DynamicLike$$Type<any>, settings1: $WorldBorder$Settings$$Type): $WorldBorder$Settings
public "write"(compoundTag0: $CompoundTag$$Type): void
get "centerX"(): double
get "centerZ"(): double
get "damagePerBlock"(): double
get "safeZone"(): double
get "size"(): double
get "sizeLerpTarget"(): double
get "sizeLerpTime"(): long
get "warningBlocks"(): integer
get "warningTime"(): integer
}
}

declare module "net.minecraft.world.level.border.BorderChangeListener" {
import { $WorldBorder$$Type } from "net.minecraft.world.level.border.WorldBorder"

export interface $BorderChangeListener {
"onBorderCenterSet"(worldBorder0: $WorldBorder$$Type, double1: double, double2: double): void
"onBorderSetDamagePerBlock"(worldBorder0: $WorldBorder$$Type, double1: double): void
"onBorderSetDamageSafeZOne"(worldBorder0: $WorldBorder$$Type, double1: double): void
"onBorderSetWarningBlocks"(worldBorder0: $WorldBorder$$Type, int1: integer): void
"onBorderSetWarningTime"(worldBorder0: $WorldBorder$$Type, int1: integer): void
"onBorderSizeLerping"(worldBorder0: $WorldBorder$$Type, double1: double, double2: double, long3: long): void
"onBorderSizeSet"(worldBorder0: $WorldBorder$$Type, double1: double): void
}

export namespace $BorderChangeListener {
const probejs$$marker: never
}
export abstract class $BorderChangeListener$$Static implements $BorderChangeListener {
}
}

declare module "net.minecraft.world.level.border.BorderStatus" {
import { $Enum } from "java.lang.Enum"

export class $BorderStatus extends $Enum<$BorderStatus> {
static readonly "GROWING": $BorderStatus
static readonly "SHRINKING": $BorderStatus
static readonly "STATIONARY": $BorderStatus

public "getColor"(): integer
public static "valueOf"(string0: string): $BorderStatus
public static "values"(): $BorderStatus[]
get "color"(): integer
}
}

