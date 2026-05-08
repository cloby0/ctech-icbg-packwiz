declare module "net.minecraft.world.level.portal.PortalShape" {
import { $Direction$Axis$$Type } from "net.minecraft.core.Direction$Axis"
import { $PortalInfo } from "net.minecraft.world.level.portal.PortalInfo"
import { $Entity$$Type } from "net.minecraft.world.entity.Entity"
import { $BlockPos$$Type } from "net.minecraft.core.BlockPos"
import { $Vec3, $Vec3$$Type } from "net.minecraft.world.phys.Vec3"
import { $Predicate$$Type } from "java.util.function.Predicate"
import { $EntityDimensions$$Type } from "net.minecraft.world.entity.EntityDimensions"
import { $LevelAccessor$$Type } from "net.minecraft.world.level.LevelAccessor"
import { $Optional } from "java.util.Optional"
import { $BlockUtil$FoundRectangle$$Type } from "net.minecraft.BlockUtil$FoundRectangle"
import { $ServerLevel$$Type } from "net.minecraft.server.level.ServerLevel"

export class $PortalShape {
static readonly "MAX_HEIGHT": integer
static readonly "MAX_WIDTH": integer

constructor(levelAccessor0: $LevelAccessor$$Type, blockPos1: $BlockPos$$Type, axis2: $Direction$Axis$$Type)

public "createPortalBlocks"(): void
public static "createPortalInfo"(serverLevel0: $ServerLevel$$Type, foundRectangle1: $BlockUtil$FoundRectangle$$Type, axis2: $Direction$Axis$$Type, vec33: $Vec3$$Type, entity4: $Entity$$Type, vec35: $Vec3$$Type, float6: float, float7: float): $PortalInfo
public static "findEmptyPortalShape"(levelAccessor0: $LevelAccessor$$Type, blockPos1: $BlockPos$$Type, axis2: $Direction$Axis$$Type): $Optional<$PortalShape>
public static "findPortalShape"(levelAccessor0: $LevelAccessor$$Type, blockPos1: $BlockPos$$Type, predicate2: $Predicate$$Type<$PortalShape$$Type>, axis3: $Direction$Axis$$Type): $Optional<$PortalShape>
public static "getRelativePosition"(foundRectangle0: $BlockUtil$FoundRectangle$$Type, axis1: $Direction$Axis$$Type, vec32: $Vec3$$Type, entityDimensions3: $EntityDimensions$$Type): $Vec3
public "isComplete"(): boolean
public "isValid"(): boolean
get "complete"(): boolean
get "valid"(): boolean
}
}

declare module "net.minecraft.world.level.portal.PortalForcer" {
import { $ServerPlayer$$Type } from "net.minecraft.server.level.ServerPlayer"
import { $Direction$Axis$$Type } from "net.minecraft.core.Direction$Axis"
import { $PortalInfo } from "net.minecraft.world.level.portal.PortalInfo"
import { $Entity, $Entity$$Type } from "net.minecraft.world.entity.Entity"
import { $ITeleporter } from "net.minecraftforge.common.util.ITeleporter"
import { $BlockPos$$Type } from "net.minecraft.core.BlockPos"
import { $WorldBorder$$Type } from "net.minecraft.world.level.border.WorldBorder"
import { $Optional } from "java.util.Optional"
import { $BlockUtil$FoundRectangle } from "net.minecraft.BlockUtil$FoundRectangle"
import { $ServerLevel$$Type } from "net.minecraft.server.level.ServerLevel"
import { $Function$$Type } from "java.util.function.Function"

export class $PortalForcer implements $ITeleporter {
constructor(serverLevel0: $ServerLevel$$Type)

public "createPortal"(blockPos0: $BlockPos$$Type, axis1: $Direction$Axis$$Type): $Optional<$BlockUtil$FoundRectangle>
public "findPortalAround"(blockPos0: $BlockPos$$Type, boolean1: boolean, worldBorder2: $WorldBorder$$Type): $Optional
public "getPortalInfo"(entity0: $Entity$$Type, serverLevel1: $ServerLevel$$Type, function2: $Function$$Type<$ServerLevel$$Type, $PortalInfo>): $PortalInfo
public "isVanilla"(): boolean
public "placeEntity"(entity0: $Entity$$Type, serverLevel1: $ServerLevel$$Type, serverLevel2: $ServerLevel$$Type, float3: float, function4: $Function$$Type<boolean, $Entity>): $Entity
public "playTeleportSound"(serverPlayer0: $ServerPlayer$$Type, serverLevel1: $ServerLevel$$Type, serverLevel2: $ServerLevel$$Type): boolean
get "vanilla"(): boolean
}
}

declare module "net.minecraft.world.level.portal.PortalInfo" {
import { $Vec3, $Vec3$$Type } from "net.minecraft.world.phys.Vec3"

export class $PortalInfo {
readonly "pos": $Vec3
readonly "speed": $Vec3
readonly "xRot": float
readonly "yRot": float

constructor(vec30: $Vec3$$Type, vec31: $Vec3$$Type, float2: float, float3: float)

}
}

