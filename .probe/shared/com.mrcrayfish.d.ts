declare module "com.mrcrayfish.furniture.refurbished.electricity.IElectricityNode" {
import { $List } from "java.util.List"
import { $AABB } from "net.minecraft.world.phys.AABB"
import { $CompoundTag$$Type } from "net.minecraft.nbt.CompoundTag"
import { $Connection, $Connection$$Type } from "com.mrcrayfish.furniture.refurbished.electricity.Connection"
import { $BlockPos, $BlockPos$$Type } from "net.minecraft.core.BlockPos"
import { $Predicate$$Type } from "java.util.function.Predicate"
import { $Set } from "java.util.Set"
import { $ItemStack$$Type } from "net.minecraft.world.item.ItemStack"
import { $Level, $Level$$Type } from "net.minecraft.world.level.Level"
import { $BlockEntity } from "net.minecraft.world.level.block.entity.BlockEntity"

export interface $IElectricityNode {
"canPowerTraverseNode"(): boolean
"connectToNode"(iElectricityNode0: $IElectricityNode$$Type): boolean
"earlyNodeTick"(level0: $Level$$Type): void
"getNodeConnections"(): $Set<$Connection>
"getNodeInteractBox"(): $AABB
"getNodeLevel"(): $Level
"getNodeMaximumConnections"(): integer
"getNodeOwner"(): $BlockEntity
"getNodePosition"(): $BlockPos
"getPositionedNodeInteractBox"(): $AABB
"getPowerSources"(): $Set<$BlockPos>
"isConnectedToNode"(iElectricityNode0: $IElectricityNode$$Type): boolean
"isNodeConnectionLimitReached"(): boolean
"isNodeInPowerableNetwork"(blockPos0: $BlockPos$$Type): boolean
"isNodeInPowerableNetwork"(): boolean
"isNodePowered"(): boolean
"isNodeReceivingPower"(): boolean
"isNodeValid"(): boolean
"isSourceNode"(): boolean
"onNodeConnectedTo"(iElectricityNode0: $IElectricityNode$$Type): void
"onNodeDestroyed"(): void
"readNodeNbt"(compoundTag0: $CompoundTag$$Type): void
"registerElectricityNodeTicker"(level0: $Level$$Type): void
"removeAllNodeConnections"(): void
"removeNodeConnection"(connection0: $Connection$$Type): void
"saveNodeNbtToItem"(itemStack0: $ItemStack$$Type): void
"setNodePowered"(boolean0: boolean): void
"setNodeReceivingPower"(boolean0: boolean): void
"syncDataToTrackingClients"(): void
"updateAndGetNodeConnections"(): $Set<$Connection>
"updateNodeConnections"(): void
"writeNodeNbt"(compoundTag0: $CompoundTag$$Type): void
get "nodeConnections"(): $Set<$Connection>
get "nodeInteractBox"(): $AABB
get "nodeLevel"(): $Level
get "nodeMaximumConnections"(): integer
get "nodeOwner"(): $BlockEntity
get "nodePosition"(): $BlockPos
get "positionedNodeInteractBox"(): $AABB
get "powerSources"(): $Set<$BlockPos>
get "nodeConnectionLimitReached"(): boolean
get "nodeInPowerableNetwork"(): boolean
get "nodePowered"(): boolean
get "nodeReceivingPower"(): boolean
get "nodeValid"(): boolean
get "sourceNode"(): boolean
set "nodePowered"(value: boolean)
set "nodeReceivingPower"(value: boolean)
}

export namespace $IElectricityNode {
function searchNodes(iElectricityNode0: $IElectricityNode$$Type, int1: integer, boolean2: boolean, predicate3: $Predicate$$Type<$IElectricityNode$$Type>, predicate4: $Predicate$$Type<$IElectricityNode$$Type>): $List<$IElectricityNode>
function searchNodes(iElectricityNode0: $IElectricityNode$$Type): $List<$IElectricityNode>
}
export abstract class $IElectricityNode$$Static implements $IElectricityNode {
static "searchNodes"(iElectricityNode0: $IElectricityNode$$Type, int1: integer, boolean2: boolean, predicate3: $Predicate$$Type<$IElectricityNode$$Type>, predicate4: $Predicate$$Type<$IElectricityNode$$Type>): $List<$IElectricityNode>
static "searchNodes"(iElectricityNode0: $IElectricityNode$$Type): $List<$IElectricityNode>
}
}

declare module "com.mrcrayfish.furniture.refurbished.electricity.ElectricityTicker$Access" {
import { $ElectricityTicker } from "com.mrcrayfish.furniture.refurbished.electricity.ElectricityTicker"

export interface $ElectricityTicker$Access {
"refurbishedFurniture$GetElectricityTicker"(): $ElectricityTicker
}

export namespace $ElectricityTicker$Access {
const probejs$$marker: never
}
export abstract class $ElectricityTicker$Access$$Static implements $ElectricityTicker$Access {
}
}

declare module "com.mrcrayfish.furniture.refurbished.mixin.EntityAccessor" {
import { $BlockPos } from "net.minecraft.core.BlockPos"

export interface $EntityAccessor {
"refurbishedFurnitureBlockPosAffectsMovement"(): $BlockPos
}

export namespace $EntityAccessor {
const probejs$$marker: never
}
export abstract class $EntityAccessor$$Static implements $EntityAccessor {
}
}

declare module "com.mrcrayfish.furniture.refurbished.electricity.LinkManager$Access" {
import { $LinkManager } from "com.mrcrayfish.furniture.refurbished.electricity.LinkManager"

export interface $LinkManager$Access {
"refurbishedFurniture$GetLinkManager"(): $LinkManager
}

export namespace $LinkManager$Access {
const probejs$$marker: never
}
export abstract class $LinkManager$Access$$Static implements $LinkManager$Access {
}
}

declare module "com.mrcrayfish.furniture.refurbished.mixin.client.ScreenAccessor" {
import { $GuiEventListener } from "net.minecraft.client.gui.components.events.GuiEventListener"
import { $List } from "java.util.List"
import { $NarratableEntry } from "net.minecraft.client.gui.narration.NarratableEntry"

export interface $ScreenAccessor {
"getChildren"(): $List<$GuiEventListener>
"getNarratables"(): $List<$NarratableEntry>
get "children"(): $List<$GuiEventListener>
get "narratables"(): $List<$NarratableEntry>
}

export namespace $ScreenAccessor {
const probejs$$marker: never
}
export abstract class $ScreenAccessor$$Static implements $ScreenAccessor {
}
}

declare module "com.mrcrayfish.furniture.refurbished.electricity.LinkManager" {
import { $MinecraftServer$$Type } from "net.minecraft.server.MinecraftServer"
import { $IElectricityNode$$Type } from "com.mrcrayfish.furniture.refurbished.electricity.IElectricityNode"
import { $Optional } from "java.util.Optional"
import { $Level$$Type } from "net.minecraft.world.level.Level"
import { $Player$$Type } from "net.minecraft.world.entity.player.Player"

export class $LinkManager {
static readonly "MAX_LINK_LENGTH": double

constructor()

public static "get"(minecraftServer0: $MinecraftServer$$Type): $Optional<$LinkManager>
public "onNodeInteract"(level0: $Level$$Type, player1: $Player$$Type, iElectricityNode2: $IElectricityNode$$Type): void
public "onPlayerLoggedOut"(player0: $Player$$Type): void
public "onPlayerTick"(player0: $Player$$Type): void
}
}

declare module "com.mrcrayfish.furniture.refurbished.electricity.Connection" {
import { $BlockPos, $BlockPos$$Type } from "net.minecraft.core.BlockPos"
import { $IElectricityNode, $IElectricityNode$$Type } from "com.mrcrayfish.furniture.refurbished.electricity.IElectricityNode"
import { $Level$$Type } from "net.minecraft.world.level.Level"

export class $Connection {
public "getNodeA"(level0: $Level$$Type): $IElectricityNode
public "getNodeB"(level0: $Level$$Type): $IElectricityNode
public "getOtherNode"(iElectricityNode0: $IElectricityNode$$Type): $IElectricityNode
public "getPosA"(): $BlockPos
public "getPosB"(): $BlockPos
public "isConnected"(level0: $Level$$Type): boolean
public "isCrossingPowerableZone"(level0: $Level$$Type): boolean
public "isPowered"(level0: $Level$$Type): boolean
public static "of"(blockPos0: $BlockPos$$Type, blockPos1: $BlockPos$$Type): $Connection
get "posA"(): $BlockPos
get "posB"(): $BlockPos
}
}

declare module "com.mrcrayfish.furniture.refurbished.electricity.ElectricityTicker" {
import { $IElectricityNode$$Type } from "com.mrcrayfish.furniture.refurbished.electricity.IElectricityNode"
import { $Level$$Type } from "net.minecraft.world.level.Level"

export class $ElectricityTicker {
constructor(level0: $Level$$Type)

public "addElectricityNode"(iElectricityNode0: $IElectricityNode$$Type): void
public "earlyTick"(): void
public static "get"(level0: $Level$$Type): $ElectricityTicker
public "tick"(): void
}
}

