declare module "net.minecraft.world.phys.Vec2" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export class $Vec2 {
static readonly "MAX": $Vec2
static readonly "MIN": $Vec2
static readonly "NEG_UNIT_X": $Vec2
static readonly "NEG_UNIT_Y": $Vec2
static readonly "ONE": $Vec2
static readonly "UNIT_X": $Vec2
static readonly "UNIT_Y": $Vec2
static readonly "ZERO": $Vec2
readonly "x": float
readonly "y": float

constructor(float0: float, float1: float)

public "add"(vec20: $Vec2$$Type): $Vec2
public "add"(float0: float): $Vec2
public "distanceToSqr"(vec20: $Vec2$$Type): float
public "dot"(vec20: $Vec2$$Type): float
public "equals"(vec20: $Vec2$$Type): boolean
public "length"(): float
public "lengthSquared"(): float
public "negated"(): $Vec2
public "normalized"(): $Vec2
public "scale"(float0: float): $Vec2
}
}

declare module "net.minecraft.world.phys.Vec3" {
import { $Codec } from "com.mojang.serialization.Codec"
import { $Direction$Axis$$Type } from "net.minecraft.core.Direction$Axis"
import { $Vec2$$Type } from "net.minecraft.world.phys.Vec2"
import { $Vec3i$$Type } from "net.minecraft.core.Vec3i"
import { $Direction$$Type } from "net.minecraft.core.Direction"
import { $Position, $Position$$Type } from "net.minecraft.core.Position"
import { $Vector3f, $Vector3f$$Type } from "org.joml.Vector3f"
import { $RandomSource$$Type } from "net.minecraft.util.RandomSource"
import { $EnumSet$$Type } from "java.util.EnumSet"

export class $Vec3 implements $Position {
static readonly "CODEC": $Codec<$Vec3>
static readonly "ZERO": $Vec3
readonly "x": double
readonly "y": double
readonly "z": double

constructor(vector3f0: $Vector3f$$Type)
constructor(double0: double, double1: double, double2: double)

public "add"(double0: double, double1: double, double2: double): $Vec3
public "add"(vec30: $Vec3$$Type): $Vec3
public "align"(enumSet0: $EnumSet$$Type<$Direction$Axis$$Type>): $Vec3
public static "atBottomCenterOf"(vec3i0: $Vec3i$$Type): $Vec3
public static "atCenterOf"(vec3i0: $Vec3i$$Type): $Vec3
public static "atLowerCornerOf"(vec3i0: $Vec3i$$Type): $Vec3
public static "atLowerCornerWithOffset"(vec3i0: $Vec3i$$Type, double1: double, double2: double, double3: double): $Vec3
public "closerThan"(position0: $Position$$Type, double1: double): boolean
public "cross"(vec30: $Vec3$$Type): $Vec3
public static "directionFromRotation"(float0: float, float1: float): $Vec3
public static "directionFromRotation"(vec20: $Vec2$$Type): $Vec3
public "distanceTo"(vec30: $Vec3$$Type): double
public "distanceToSqr"(vec30: $Vec3$$Type): double
public "distanceToSqr"(double0: double, double1: double, double2: double): double
public "dot"(vec30: $Vec3$$Type): double
public static "fromRGB24"(int0: integer): $Vec3
public "get"(axis0: $Direction$Axis$$Type): double
public "horizontalDistance"(): double
public "horizontalDistanceSqr"(): double
public "length"(): double
public "lengthSqr"(): double
public "lerp"(vec30: $Vec3$$Type, double1: double): $Vec3
public "multiply"(double0: double, double1: double, double2: double): $Vec3
public "multiply"(vec30: $Vec3$$Type): $Vec3
public "normalize"(): $Vec3
public "offsetRandom"(randomSource0: $RandomSource$$Type, float1: float): $Vec3
public "relative"(direction0: $Direction$$Type, double1: double): $Vec3
public "reverse"(): $Vec3
public "scale"(double0: double): $Vec3
public "subtract"(vec30: $Vec3$$Type): $Vec3
public "subtract"(double0: double, double1: double, double2: double): $Vec3
public "toVector3f"(): $Vector3f
public static "upFromBottomCenterOf"(vec3i0: $Vec3i$$Type, double1: double): $Vec3
public "vectorTo"(vec30: $Vec3$$Type): $Vec3
public "with"(axis0: $Direction$Axis$$Type, double1: double): $Vec3
public "x"(): double
public "xRot"(float0: float): $Vec3
public "y"(): double
public "yRot"(float0: float): $Vec3
public "z"(): double
public "zRot"(float0: float): $Vec3
}
}

declare module "net.minecraft.world.phys.shapes.DiscreteVoxelShape$IntLineConsumer" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $DiscreteVoxelShape$IntLineConsumer {
"consume"(int0: integer, int1: integer, int2: integer, int3: integer, int4: integer, int5: integer): void
}

export namespace $DiscreteVoxelShape$IntLineConsumer {
const probejs$$marker: never
}
export abstract class $DiscreteVoxelShape$IntLineConsumer$$Static implements $DiscreteVoxelShape$IntLineConsumer {
}
}

declare module "net.minecraft.world.phys.HitResult" {
import { $Entity$$Type } from "net.minecraft.world.entity.Entity"
import { $Vec3 } from "net.minecraft.world.phys.Vec3"
import { $HitResult$Type } from "net.minecraft.world.phys.HitResult$Type"

export class $HitResult {
public "distanceTo"(entity0: $Entity$$Type): double
public "getLocation"(): $Vec3
public "getType"(): $HitResult$Type
get "location"(): $Vec3
get "type"(): $HitResult$Type
}
}

declare module "net.minecraft.world.phys.EntityHitResult" {
import { $HitResult } from "net.minecraft.world.phys.HitResult"
import { $Entity, $Entity$$Type } from "net.minecraft.world.entity.Entity"
import { $Vec3$$Type } from "net.minecraft.world.phys.Vec3"

export class $EntityHitResult extends $HitResult {
constructor(entity0: $Entity$$Type, vec31: $Vec3$$Type)
constructor(entity0: $Entity$$Type)

public "getEntity"(): $Entity
get "entity"(): $Entity
}
}

declare module "net.minecraft.world.phys.shapes.DiscreteVoxelShape$IntFaceConsumer" {
import { $Direction$$Type } from "net.minecraft.core.Direction"

export interface $DiscreteVoxelShape$IntFaceConsumer {
"consume"(direction0: $Direction$$Type, int1: integer, int2: integer, int3: integer): void
}

export namespace $DiscreteVoxelShape$IntFaceConsumer {
const probejs$$marker: never
}
export abstract class $DiscreteVoxelShape$IntFaceConsumer$$Static implements $DiscreteVoxelShape$IntFaceConsumer {
}
}

declare module "net.minecraft.world.phys.BlockHitResult" {
import { $HitResult } from "net.minecraft.world.phys.HitResult"
import { $Vec3$$Type } from "net.minecraft.world.phys.Vec3"
import { $BlockPos, $BlockPos$$Type } from "net.minecraft.core.BlockPos"
import { $Direction, $Direction$$Type } from "net.minecraft.core.Direction"

export class $BlockHitResult extends $HitResult {
constructor(vec30: $Vec3$$Type, direction1: $Direction$$Type, blockPos2: $BlockPos$$Type, boolean3: boolean)
constructor(boolean0: boolean, vec31: $Vec3$$Type, direction2: $Direction$$Type, blockPos3: $BlockPos$$Type, boolean4: boolean)

public "getBlockPos"(): $BlockPos
public "getDirection"(): $Direction
public "isInside"(): boolean
public static "miss"(vec30: $Vec3$$Type, direction1: $Direction$$Type, blockPos2: $BlockPos$$Type): $BlockHitResult
public "withDirection"(direction0: $Direction$$Type): $BlockHitResult
public "withPosition"(blockPos0: $BlockPos$$Type): $BlockHitResult
get "blockPos"(): $BlockPos
get "direction"(): $Direction
get "inside"(): boolean
}
}

declare module "net.minecraft.world.phys.shapes.VoxelShape" {
import { $VoxelShapeAccess } from "malte0811.ferritecore.mixin.blockstatecache.VoxelShapeAccess"
import { $AABB, $AABB$$Type } from "net.minecraft.world.phys.AABB"
import { $DoubleList } from "it.unimi.dsi.fastutil.doubles.DoubleList"
import { $Direction$$Type } from "net.minecraft.core.Direction"
import { $BlockHitResult } from "net.minecraft.world.phys.BlockHitResult"
import { $Shapes$DoubleLineConsumer$$Type } from "net.minecraft.world.phys.shapes.Shapes$DoubleLineConsumer"
import { $VoxelShapeAccessor } from "com.copycatsplus.copycats.mixin.copycat.VoxelShapeAccessor"
import { $OffsetVoxelShapeCache } from "com.abdelaziz.canary.common.shapes.OffsetVoxelShapeCache"
import { $List } from "java.util.List"
import { $Direction$Axis$$Type } from "net.minecraft.core.Direction$Axis"
import { $Vec3, $Vec3$$Type } from "net.minecraft.world.phys.Vec3"
import { $BlockPos$$Type } from "net.minecraft.core.BlockPos"
import { $Optional } from "java.util.Optional"
import { $AxisCycle$$Type } from "net.minecraft.core.AxisCycle"
import { $DiscreteVoxelShape, $DiscreteVoxelShape$$Type } from "net.minecraft.world.phys.shapes.DiscreteVoxelShape"

export class $VoxelShape implements $OffsetVoxelShapeCache, $VoxelShapeAccessor, $VoxelShapeAccess {
constructor(discreteVoxelShape0: $DiscreteVoxelShape$$Type)

public "bounds"(): $AABB
public "clip"(vec30: $Vec3$$Type, vec31: $Vec3$$Type, blockPos2: $BlockPos$$Type): $BlockHitResult
public "closestPointTo"(vec30: $Vec3$$Type): $Optional<$Vec3>
public "collide"(axis0: $Direction$Axis$$Type, aABB1: $AABB$$Type, double2: double): double
public "collideX"(axisCycle0: $AxisCycle$$Type, aABB1: $AABB$$Type, double2: double): double
public "findIndex"(axis0: $Direction$Axis$$Type, double1: double): integer
public "forAllBoxes"(doubleLineConsumer0: $Shapes$DoubleLineConsumer$$Type): void
public "forAllEdges"(doubleLineConsumer0: $Shapes$DoubleLineConsumer$$Type): void
public "getCoords"(axis0: $Direction$Axis$$Type): $DoubleList
public "getFaceShape"(direction0: $Direction$$Type): $VoxelShape
public "getOffsetSimplifiedShape"(float0: float, direction1: $Direction$$Type): $VoxelShape
public "isEmpty"(): boolean
public "max"(axis0: $Direction$Axis$$Type, double1: double, double2: double): double
public "max"(axis0: $Direction$Axis$$Type): double
public "min"(axis0: $Direction$Axis$$Type, double1: double, double2: double): double
public "min"(axis0: $Direction$Axis$$Type): double
public "move"(double0: double, double1: double, double2: double): $VoxelShape
public "optimize"(): $VoxelShape
public "setShape"(float0: float, direction1: $Direction$$Type, voxelShape2: $VoxelShape$$Type): void
public "toAabbs"(): $List<$AABB>
get "shape"(): $DiscreteVoxelShape
set "shape"(value: $DiscreteVoxelShape$$Type)
get "empty"(): boolean
}
}

declare module "net.minecraft.world.phys.shapes.BooleanOp" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $BooleanOp {
"apply"(boolean0: boolean, boolean1: boolean): boolean
}

export namespace $BooleanOp {
const AND: $BooleanOp
const CAUSED_BY: $BooleanOp
const CAUSES: $BooleanOp
const FALSE: $BooleanOp
const FIRST: $BooleanOp
const NOT_AND: $BooleanOp
const NOT_FIRST: $BooleanOp
const NOT_OR: $BooleanOp
const NOT_SAME: $BooleanOp
const NOT_SECOND: $BooleanOp
const ONLY_FIRST: $BooleanOp
const ONLY_SECOND: $BooleanOp
const OR: $BooleanOp
const SAME: $BooleanOp
const SECOND: $BooleanOp
const TRUE: $BooleanOp
}
export abstract class $BooleanOp$$Static implements $BooleanOp {
static readonly "AND": $BooleanOp
static readonly "CAUSED_BY": $BooleanOp
static readonly "CAUSES": $BooleanOp
static readonly "FALSE": $BooleanOp
static readonly "FIRST": $BooleanOp
static readonly "NOT_AND": $BooleanOp
static readonly "NOT_FIRST": $BooleanOp
static readonly "NOT_OR": $BooleanOp
static readonly "NOT_SAME": $BooleanOp
static readonly "NOT_SECOND": $BooleanOp
static readonly "ONLY_FIRST": $BooleanOp
static readonly "ONLY_SECOND": $BooleanOp
static readonly "OR": $BooleanOp
static readonly "SAME": $BooleanOp
static readonly "SECOND": $BooleanOp
static readonly "TRUE": $BooleanOp

}
}

declare module "net.minecraft.world.phys.shapes.Shapes$DoubleLineConsumer" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $Shapes$DoubleLineConsumer {
"consume"(double0: double, double1: double, double2: double, double3: double, double4: double, double5: double): void
}

export namespace $Shapes$DoubleLineConsumer {
const probejs$$marker: never
}
export abstract class $Shapes$DoubleLineConsumer$$Static implements $Shapes$DoubleLineConsumer {
}
}

declare module "net.minecraft.world.phys.HitResult$Type" {
import { $Enum } from "java.lang.Enum"

export class $HitResult$Type extends $Enum<$HitResult$Type> {
static readonly "BLOCK": $HitResult$Type
static readonly "ENTITY": $HitResult$Type
static readonly "MISS": $HitResult$Type

public static "valueOf"(string0: string): $HitResult$Type
public static "values"(): $HitResult$Type[]
}
}

declare module "net.minecraft.world.phys.AABB" {
import { $Direction$Axis$$Type } from "net.minecraft.core.Direction$Axis"
import { $BlockPos$$Type } from "net.minecraft.core.BlockPos"
import { $Vec3, $Vec3$$Type } from "net.minecraft.world.phys.Vec3"
import { $BlockHitResult } from "net.minecraft.world.phys.BlockHitResult"
import { $Optional } from "java.util.Optional"
import { $BoundingBox$$Type } from "net.minecraft.world.level.levelgen.structure.BoundingBox"
import { $Iterable$$Type } from "java.lang.Iterable"

export class $AABB {
readonly "maxX": double
readonly "maxY": double
readonly "maxZ": double
readonly "minX": double
readonly "minY": double
readonly "minZ": double

constructor(blockPos0: $BlockPos$$Type)
constructor(blockPos0: $BlockPos$$Type, blockPos1: $BlockPos$$Type)
constructor(vec30: $Vec3$$Type, vec31: $Vec3$$Type)
constructor(double0: double, double1: double, double2: double, double3: double, double4: double, double5: double)

public static "clip"(iterable0: $Iterable$$Type<$AABB$$Type>, vec31: $Vec3$$Type, vec32: $Vec3$$Type, blockPos3: $BlockPos$$Type): $BlockHitResult
public "clip"(vec30: $Vec3$$Type, vec31: $Vec3$$Type): $Optional<$Vec3>
public "contains"(vec30: $Vec3$$Type): boolean
public "contains"(double0: double, double1: double, double2: double): boolean
public "contract"(double0: double, double1: double, double2: double): $AABB
public "deflate"(double0: double, double1: double, double2: double): $AABB
public "deflate"(double0: double): $AABB
public "distanceToSqr"(vec30: $Vec3$$Type): double
public "expandTowards"(vec30: $Vec3$$Type): $AABB
public "expandTowards"(double0: double, double1: double, double2: double): $AABB
public "getCenter"(): $Vec3
public "getSize"(): double
public "getXsize"(): double
public "getYsize"(): double
public "getZsize"(): double
public "hasNaN"(): boolean
public "inflate"(double0: double, double1: double, double2: double): $AABB
public "inflate"(double0: double): $AABB
public "intersect"(aABB0: $AABB$$Type): $AABB
public "intersects"(double0: double, double1: double, double2: double, double3: double, double4: double, double5: double): boolean
public "intersects"(vec30: $Vec3$$Type, vec31: $Vec3$$Type): boolean
public "intersects"(aABB0: $AABB$$Type): boolean
public "max"(axis0: $Direction$Axis$$Type): double
public "min"(axis0: $Direction$Axis$$Type): double
public "minmax"(aABB0: $AABB$$Type): $AABB
public "move"(blockPos0: $BlockPos$$Type): $AABB
public "move"(double0: double, double1: double, double2: double): $AABB
public "move"(vec30: $Vec3$$Type): $AABB
public static "of"(boundingBox0: $BoundingBox$$Type): $AABB
public static "ofSize"(vec30: $Vec3$$Type, double1: double, double2: double, double3: double): $AABB
public "setMaxX"(double0: double): $AABB
public "setMaxY"(double0: double): $AABB
public "setMaxZ"(double0: double): $AABB
public "setMinX"(double0: double): $AABB
public "setMinY"(double0: double): $AABB
public "setMinZ"(double0: double): $AABB
public static "unitCubeFromLowerCorner"(vec30: $Vec3$$Type): $AABB
get "center"(): $Vec3
get "size"(): double
get "xsize"(): double
get "ysize"(): double
get "zsize"(): double
}
}

declare module "net.minecraft.world.phys.shapes.CollisionContext" {
import { $Entity$$Type } from "net.minecraft.world.entity.Entity"
import { $BlockPos$$Type } from "net.minecraft.core.BlockPos"
import { $FluidState$$Type } from "net.minecraft.world.level.material.FluidState"
import { $Item$$Type } from "net.minecraft.world.item.Item"
import { $VoxelShape$$Type } from "net.minecraft.world.phys.shapes.VoxelShape"

export interface $CollisionContext {
"canStandOnFluid"(fluidState0: $FluidState$$Type, fluidState1: $FluidState$$Type): boolean
"isAbove"(voxelShape0: $VoxelShape$$Type, blockPos1: $BlockPos$$Type, boolean2: boolean): boolean
"isDescending"(): boolean
"isHoldingItem"(item0: $Item$$Type): boolean
get "descending"(): boolean
}

export namespace $CollisionContext {
function empty(): $CollisionContext
function of(entity0: $Entity$$Type): $CollisionContext
}
export abstract class $CollisionContext$$Static implements $CollisionContext {
static "empty"(): $CollisionContext
static "of"(entity0: $Entity$$Type): $CollisionContext
}
}

declare module "net.minecraft.world.phys.shapes.Shapes" {
import { $Direction$Axis$$Type } from "net.minecraft.core.Direction$Axis"
import { $AABB$$Type } from "net.minecraft.world.phys.AABB"
import { $Direction$$Type } from "net.minecraft.core.Direction"
import { $BooleanOp$$Type } from "net.minecraft.world.phys.shapes.BooleanOp"
import { $VoxelShape, $VoxelShape$$Type } from "net.minecraft.world.phys.shapes.VoxelShape"
import { $Iterable$$Type } from "java.lang.Iterable"

export class $Shapes {
static readonly "BIG_EPSILON": double
static readonly "EPSILON": double
static "INFINITY": $VoxelShape

constructor()

public static "block"(): $VoxelShape
public static "blockOccudes"(voxelShape0: $VoxelShape$$Type, voxelShape1: $VoxelShape$$Type, direction2: $Direction$$Type): boolean
public static "box"(double0: double, double1: double, double2: double, double3: double, double4: double, double5: double): $VoxelShape
public static "collide"(axis0: $Direction$Axis$$Type, aABB1: $AABB$$Type, iterable2: $Iterable$$Type<$VoxelShape$$Type>, double3: double): double
public static "create"(double0: double, double1: double, double2: double, double3: double, double4: double, double5: double): $VoxelShape
public static "create"(aABB0: $AABB$$Type): $VoxelShape
public static "empty"(): $VoxelShape
public static "faceShapeOccludes"(voxelShape0: $VoxelShape$$Type, voxelShape1: $VoxelShape$$Type): boolean
public static "findBits"(double0: double, double1: double): integer
public static "getFaceShape"(voxelShape0: $VoxelShape$$Type, direction1: $Direction$$Type): $VoxelShape
public static "join"(voxelShape0: $VoxelShape$$Type, voxelShape1: $VoxelShape$$Type, booleanOp2: $BooleanOp$$Type): $VoxelShape
public static "joinIsNotEmpty"(voxelShape0: $VoxelShape$$Type, voxelShape1: $VoxelShape$$Type, booleanOp2: $BooleanOp$$Type): boolean
public static "joinUnoptimized"(voxelShape0: $VoxelShape$$Type, voxelShape1: $VoxelShape$$Type, booleanOp2: $BooleanOp$$Type): $VoxelShape
public static "mergedFaceOccludes"(voxelShape0: $VoxelShape$$Type, voxelShape1: $VoxelShape$$Type, direction2: $Direction$$Type): boolean
public static "or"(voxelShape0: $VoxelShape$$Type, ...voxelShape1s: $VoxelShape$$Type[]): $VoxelShape
public static "or"(voxelShape0: $VoxelShape$$Type, voxelShape1: $VoxelShape$$Type): $VoxelShape
}
}

declare module "net.minecraft.world.phys.shapes.DiscreteVoxelShape" {
import { $Direction$Axis$$Type } from "net.minecraft.core.Direction$Axis"
import { $DiscreteVoxelShape$IntLineConsumer$$Type } from "net.minecraft.world.phys.shapes.DiscreteVoxelShape$IntLineConsumer"
import { $DiscreteVSAccess } from "malte0811.ferritecore.mixin.blockstatecache.DiscreteVSAccess"
import { $DiscreteVoxelShape$IntFaceConsumer$$Type } from "net.minecraft.world.phys.shapes.DiscreteVoxelShape$IntFaceConsumer"
import { $AxisCycle$$Type } from "net.minecraft.core.AxisCycle"

export class $DiscreteVoxelShape implements $DiscreteVSAccess {
public "fill"(int0: integer, int1: integer, int2: integer): void
public "firstFull"(axis0: $Direction$Axis$$Type, int1: integer, int2: integer): integer
public "firstFull"(axis0: $Direction$Axis$$Type): integer
public "forAllBoxes"(intLineConsumer0: $DiscreteVoxelShape$IntLineConsumer$$Type, boolean1: boolean): void
public "forAllEdges"(intLineConsumer0: $DiscreteVoxelShape$IntLineConsumer$$Type, boolean1: boolean): void
public "forAllFaces"(intFaceConsumer0: $DiscreteVoxelShape$IntFaceConsumer$$Type): void
public "getSize"(axis0: $Direction$Axis$$Type): integer
public "getXSize"(): integer
public "getYSize"(): integer
public "getZSize"(): integer
public "isEmpty"(): boolean
public "isFull"(int0: integer, int1: integer, int2: integer): boolean
public "isFull"(axisCycle0: $AxisCycle$$Type, int1: integer, int2: integer, int3: integer): boolean
public "isFullWide"(int0: integer, int1: integer, int2: integer): boolean
public "isFullWide"(axisCycle0: $AxisCycle$$Type, int1: integer, int2: integer, int3: integer): boolean
public "lastFull"(axis0: $Direction$Axis$$Type, int1: integer, int2: integer): integer
public "lastFull"(axis0: $Direction$Axis$$Type): integer
get "xSize"(): integer
get "ySize"(): integer
get "zSize"(): integer
get "empty"(): boolean
}
}

