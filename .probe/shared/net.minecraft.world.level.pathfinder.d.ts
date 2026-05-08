declare module "net.minecraft.world.level.pathfinder.Path" {
import { $List, $List$$Type } from "java.util.List"
import { $Entity$$Type } from "net.minecraft.world.entity.Entity"
import { $BlockPos, $BlockPos$$Type } from "net.minecraft.core.BlockPos"
import { $Vec3 } from "net.minecraft.world.phys.Vec3"
import { $FriendlyByteBuf$$Type } from "net.minecraft.network.FriendlyByteBuf"
import { $Node, $Node$$Type } from "net.minecraft.world.level.pathfinder.Node"

export class $Path {
readonly "nodes": $List<$Node>

constructor(list0: $List$$Type<$Node$$Type>, blockPos1: $BlockPos$$Type, boolean2: boolean)

public "advance"(): void
public "canReach"(): boolean
public static "createFromStream"(friendlyByteBuf0: $FriendlyByteBuf$$Type): $Path
public "getClosedSet"(): $Node[]
public "getDistToTarget"(): float
public "getEndNode"(): $Node
public "getEntityPosAtNode"(entity0: $Entity$$Type, int1: integer): $Vec3
public "getNextEntityPos"(entity0: $Entity$$Type): $Vec3
public "getNextNode"(): $Node
public "getNextNodeIndex"(): integer
public "getNextNodePos"(): $BlockPos
public "getNode"(int0: integer): $Node
public "getNodeCount"(): integer
public "getNodePos"(int0: integer): $BlockPos
public "getOpenSet"(): $Node[]
public "getPreviousNode"(): $Node
public "getTarget"(): $BlockPos
public "isDone"(): boolean
public "notStarted"(): boolean
public "replaceNode"(int0: integer, node1: $Node$$Type): void
public "sameAs"(path0: $Path$$Type): boolean
public "setNextNodeIndex"(int0: integer): void
public "truncateNodes"(int0: integer): void
public "writeToStream"(friendlyByteBuf0: $FriendlyByteBuf$$Type): void
get "closedSet"(): $Node[]
get "distToTarget"(): float
get "endNode"(): $Node
get "nextNode"(): $Node
get "nextNodeIndex"(): integer
get "nextNodePos"(): $BlockPos
get "nodeCount"(): integer
get "openSet"(): $Node[]
get "previousNode"(): $Node
get "target"(): $BlockPos
get "done"(): boolean
set "nextNodeIndex"(value: integer)
}
}

declare module "net.minecraft.world.level.pathfinder.Node" {
import { $BlockPos, $BlockPos$$Type } from "net.minecraft.core.BlockPos"
import { $Vec3 } from "net.minecraft.world.phys.Vec3"
import { $BlockPathTypes, $BlockPathTypes$$Type } from "net.minecraft.world.level.pathfinder.BlockPathTypes"
import { $FriendlyByteBuf$$Type } from "net.minecraft.network.FriendlyByteBuf"

export class $Node {
readonly "x": integer
readonly "y": integer
readonly "z": integer

constructor(int0: integer, int1: integer, int2: integer)

public "asBlockPos"(): $BlockPos
public "asVec3"(): $Vec3
public "cloneAndMove"(int0: integer, int1: integer, int2: integer): $Node
public static "createFromStream"(friendlyByteBuf0: $FriendlyByteBuf$$Type): $Node
public static "createHash"(int0: integer, int1: integer, int2: integer): integer
public "distanceManhattan"(node0: $Node$$Type): float
public "distanceManhattan"(blockPos0: $BlockPos$$Type): float
public "distanceTo"(blockPos0: $BlockPos$$Type): float
public "distanceTo"(node0: $Node$$Type): float
public "distanceToSqr"(blockPos0: $BlockPos$$Type): float
public "distanceToSqr"(node0: $Node$$Type): float
public "distanceToXZ"(node0: $Node$$Type): float
public "inOpenSet"(): boolean
public "writeToStream"(friendlyByteBuf0: $FriendlyByteBuf$$Type): void
get "cameFrom"(): $Node
set "cameFrom"(value: $Node$$Type)
get "closed"(): boolean
set "closed"(value: boolean)
get "costMalus"(): float
set "costMalus"(value: float)
get "f"(): float
set "f"(value: float)
get "g"(): float
set "g"(value: float)
get "h"(): float
set "h"(value: float)
get "heapIdx"(): integer
set "heapIdx"(value: integer)
get "type"(): $BlockPathTypes
set "type"(value: $BlockPathTypes$$Type)
get "walkedDistance"(): float
set "walkedDistance"(value: float)
}
}

declare module "net.minecraft.world.level.pathfinder.BlockPathTypes" {
import { $IExtensibleEnum } from "net.minecraftforge.common.IExtensibleEnum"
import { $Codec } from "com.mojang.serialization.Codec"
import { $Enum, $Enum$$Type } from "java.lang.Enum"
import { $StringRepresentable, $StringRepresentable$$Type } from "net.minecraft.util.StringRepresentable"
import { $Supplier$$Type } from "java.util.function.Supplier"
import { $Function$$Type } from "java.util.function.Function"

export class $BlockPathTypes extends $Enum<$BlockPathTypes> implements $IExtensibleEnum {
static readonly "BLOCKED": $BlockPathTypes
static readonly "BREACH": $BlockPathTypes
static readonly "COCOA": $BlockPathTypes
static readonly "DAMAGE_CAUTIOUS": $BlockPathTypes
static readonly "DAMAGE_FIRE": $BlockPathTypes
static readonly "DAMAGE_OTHER": $BlockPathTypes
static readonly "DANGER_FIRE": $BlockPathTypes
static readonly "DANGER_OTHER": $BlockPathTypes
static readonly "DANGER_POWDER_SNOW": $BlockPathTypes
static readonly "DOOR_IRON_CLOSED": $BlockPathTypes
static readonly "DOOR_OPEN": $BlockPathTypes
static readonly "DOOR_WOOD_CLOSED": $BlockPathTypes
static readonly "FENCE": $BlockPathTypes
static readonly "LAVA": $BlockPathTypes
static readonly "LEAVES": $BlockPathTypes
static readonly "OPEN": $BlockPathTypes
static readonly "POWDER_SNOW": $BlockPathTypes
static readonly "RAIL": $BlockPathTypes
static readonly "STICKY_HONEY": $BlockPathTypes
static readonly "TRAPDOOR": $BlockPathTypes
static readonly "UNPASSABLE_RAIL": $BlockPathTypes
static readonly "WALKABLE": $BlockPathTypes
static readonly "WALKABLE_DOOR": $BlockPathTypes
static readonly "WATER": $BlockPathTypes
static readonly "WATER_BORDER": $BlockPathTypes

public static "create"(string0: string, float1: float): $BlockPathTypes
public static "createCodecForExtensibleEnum"<E extends ($Enum<E> & $StringRepresentable)>(supplier0: $Supplier$$Type<E[]>, function1: $Function$$Type<string, E>): $Codec<E>
public "getDanger"(): $BlockPathTypes
public "getMalus"(): float
/** @deprecated */
public "init"(): void
public static "valueOf"(string0: string): $BlockPathTypes
public static "values"(): $BlockPathTypes[]
get "danger"(): $BlockPathTypes
get "malus"(): float
}
}

declare module "net.minecraft.world.level.pathfinder.PathComputationType" {
import { $Enum } from "java.lang.Enum"

export class $PathComputationType extends $Enum<$PathComputationType> {
static readonly "AIR": $PathComputationType
static readonly "LAND": $PathComputationType
static readonly "WATER": $PathComputationType

public static "valueOf"(string0: string): $PathComputationType
public static "values"(): $PathComputationType[]
}
}

declare module "net.minecraft.world.level.pathfinder.Target" {
import { $FriendlyByteBuf$$Type } from "net.minecraft.network.FriendlyByteBuf"
import { $Node, $Node$$Type } from "net.minecraft.world.level.pathfinder.Node"

export class $Target extends $Node {
constructor(int0: integer, int1: integer, int2: integer)
constructor(node0: $Node$$Type)

public static "createFromStream"(friendlyByteBuf0: $FriendlyByteBuf$$Type): $Target
public "getBestNode"(): $Node
public "isReached"(): boolean
public "setReached"(): void
public "updateBest"(float0: float, node1: $Node$$Type): void
get "bestNode"(): $Node
get "reached"(): boolean
}
}

declare module "net.minecraft.world.level.pathfinder.NodeEvaluator" {
import { $BlockGetter$$Type } from "net.minecraft.world.level.BlockGetter"
import { $BlockPathTypes } from "net.minecraft.world.level.pathfinder.BlockPathTypes"
import { $Target } from "net.minecraft.world.level.pathfinder.Target"
import { $Mob$$Type } from "net.minecraft.world.entity.Mob"
import { $PathNavigationRegion$$Type } from "net.minecraft.world.level.PathNavigationRegion"
import { $Node, $Node$$Type } from "net.minecraft.world.level.pathfinder.Node"

export class $NodeEvaluator {
constructor()

public "canFloat"(): boolean
public "canOpenDoors"(): boolean
public "canPassDoors"(): boolean
public "canWalkOverFences"(): boolean
public "done"(): void
public "getBlockPathType"(blockGetter0: $BlockGetter$$Type, int1: integer, int2: integer, int3: integer): $BlockPathTypes
public "getBlockPathType"(blockGetter0: $BlockGetter$$Type, int1: integer, int2: integer, int3: integer, mob4: $Mob$$Type): $BlockPathTypes
public "getGoal"(double0: double, double1: double, double2: double): $Target
public "getNeighbors"(node0s: $Node$$Type[], node1: $Node$$Type): integer
public "getStart"(): $Node
public "prepare"(pathNavigationRegion0: $PathNavigationRegion$$Type, mob1: $Mob$$Type): void
public "setCanFloat"(boolean0: boolean): void
public "setCanOpenDoors"(boolean0: boolean): void
public "setCanPassDoors"(boolean0: boolean): void
public "setCanWalkOverFences"(boolean0: boolean): void
get "entityDepth"(): integer
set "entityDepth"(value: integer)
get "entityHeight"(): integer
set "entityHeight"(value: integer)
get "entityWidth"(): integer
set "entityWidth"(value: integer)
get "start"(): $Node
}
}

