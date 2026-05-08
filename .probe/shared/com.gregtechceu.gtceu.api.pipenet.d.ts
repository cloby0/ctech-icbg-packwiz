declare module "com.gregtechceu.gtceu.api.pipenet.IPipeNode" {
import { $AABB } from "net.minecraft.world.phys.AABB"
import { $Direction$$Type } from "net.minecraft.core.Direction"
import { $Connection$$Type } from "net.minecraft.network.Connection"
import { $ClientboundBlockEntityDataPacket$$Type } from "net.minecraft.network.protocol.game.ClientboundBlockEntityDataPacket"
import { $ICoverable } from "com.gregtechceu.gtceu.api.capability.ICoverable"
import { $ModelData } from "net.minecraftforge.client.model.data.ModelData"
import { $BlockEntity } from "net.minecraft.world.level.block.entity.BlockEntity"
import { $IPipeType } from "com.gregtechceu.gtceu.api.pipenet.IPipeType"
import { $Runnable$$Type } from "java.lang.Runnable"
import { $Capability$$Type } from "net.minecraftforge.common.capabilities.Capability"
import { $ITickSubscription } from "com.gregtechceu.gtceu.api.blockentity.ITickSubscription"
import { $LazyOptional } from "net.minecraftforge.common.util.LazyOptional"
import { $Player$$Type } from "net.minecraft.world.entity.player.Player"
import { $TickableSubscription, $TickableSubscription$$Type } from "com.gregtechceu.gtceu.api.machine.TickableSubscription"
import { $CompoundTag, $CompoundTag$$Type } from "net.minecraft.nbt.CompoundTag"
import { $Enum } from "java.lang.Enum"
import { $IPaintable } from "com.gregtechceu.gtceu.api.blockentity.IPaintable"
import { $BlockPos } from "net.minecraft.core.BlockPos"
import { $Material } from "com.gregtechceu.gtceu.api.data.chemical.material.Material"
import { $Level } from "net.minecraft.world.level.Level"
import { $PipeBlock } from "com.gregtechceu.gtceu.api.block.PipeBlock"
import { $IForgeBlockEntity } from "net.minecraftforge.common.extensions.IForgeBlockEntity"
import { $PipeNet } from "com.gregtechceu.gtceu.api.pipenet.PipeNet"

export interface $IPipeNode<PipeType extends ($Enum<PipeType> & $IPipeType<NodeDataType>) = ($Enum<PipeType> & $IPipeType<NodeDataType>), NodeDataType = any> extends $ITickSubscription, $IPaintable, $IForgeBlockEntity {
"canAttachTo"(direction0: $Direction$$Type): boolean
"canHaveBlockedFaces"(): boolean
"deserializeNBT"(compoundTag0: $CompoundTag$$Type): void
"getBlockedConnections"(): integer
"getCapability"<T>(capability0: $Capability$$Type<T>, direction1: $Direction$$Type): $LazyOptional<T>
"getCapability"<T>(capability0: $Capability$$Type<T>): $LazyOptional<T>
"getConnections"(): integer
"getCoverContainer"(): $ICoverable
"getDefaultPaintingColor"(): integer
"getFrameMaterial"(): $Material
"getModelData"(): $ModelData
"getNeighbor"(direction0: $Direction$$Type): $BlockEntity
"getNodeData"(): NodeDataType
"getNumConnections"(): integer
"getOffsetTimer"(): long
"getPaintingColor"(): integer
"getPersistentData"(): $CompoundTag
"getPipeBlock"(): $PipeBlock<PipeType, NodeDataType, any>
"getPipeLevel"(): $Level
"getPipeNet"(): $PipeNet<NodeDataType>
"getPipePos"(): $BlockPos
"getPipeType"(): PipeType
"getRealColor"(): integer
"getRenderBoundingBox"(): $AABB
"getVisualConnections"(): integer
"handleUpdateTag"(compoundTag0: $CompoundTag$$Type): void
"hasCustomOutlineRendering"(player0: $Player$$Type): boolean
"isBlocked"(direction0: $Direction$$Type): boolean
"isConnected"(direction0: $Direction$$Type): boolean
"isInValid"(): boolean
"isPainted"(): boolean
"isRemote"(): boolean
"markAsDirty"(): void
"notifyBlockUpdate"(): void
"onChunkUnloaded"(): void
"onDataPacket"(connection0: $Connection$$Type, clientboundBlockEntityDataPacket1: $ClientboundBlockEntityDataPacket$$Type): void
"onLoad"(): void
"requestModelDataUpdate"(): void
"scheduleNeighborShapeUpdate"(): void
"scheduleRenderUpdate"(): void
"self"(): $BlockEntity
"serverTick"(): void
"setBlocked"(direction0: $Direction$$Type, boolean1: boolean): void
"setConnection"(direction0: $Direction$$Type, boolean1: boolean, boolean2: boolean): void
"setConnections"(int0: integer): void
"setPaintingColor"(int0: integer): void
"subscribeServerTick"(runnable0: $Runnable$$Type): $TickableSubscription
"subscribeServerTick"(tickableSubscription0: $TickableSubscription$$Type, runnable1: $Runnable$$Type): $TickableSubscription
"unsubscribe"(tickableSubscription0: $TickableSubscription$$Type): void
get "blockedConnections"(): integer
get "connections"(): integer
get "coverContainer"(): $ICoverable
get "defaultPaintingColor"(): integer
get "frameMaterial"(): $Material
get "modelData"(): $ModelData
get "nodeData"(): NodeDataType
get "numConnections"(): integer
get "offsetTimer"(): long
get "paintingColor"(): integer
get "persistentData"(): $CompoundTag
get "pipeBlock"(): $PipeBlock<PipeType, NodeDataType, any>
get "pipeLevel"(): $Level
get "pipeNet"(): $PipeNet<NodeDataType>
get "pipePos"(): $BlockPos
get "pipeType"(): PipeType
get "realColor"(): integer
get "renderBoundingBox"(): $AABB
get "visualConnections"(): integer
get "inValid"(): boolean
get "painted"(): boolean
get "remote"(): boolean
set "connections"(value: integer)
set "paintingColor"(value: integer)
}

export namespace $IPipeNode {
const probejs$$marker: never
}
export abstract class $IPipeNode$$Static<PipeType extends ($Enum<PipeType> & $IPipeType<NodeDataType>) = ($Enum<PipeType> & $IPipeType<NodeDataType>), NodeDataType = any> implements $IPipeNode<PipeType, NodeDataType> {
}
}

declare module "com.gregtechceu.gtceu.api.pipenet.longdistance.LongDistanceNetwork" {
import { $BlockPos$$Type } from "net.minecraft.core.BlockPos"
import { $LevelAccessor$$Type } from "net.minecraft.world.level.LevelAccessor"
import { $ILDEndpoint, $ILDEndpoint$$Type } from "com.gregtechceu.gtceu.api.pipenet.longdistance.ILDEndpoint"
import { $LongDistancePipeType } from "com.gregtechceu.gtceu.api.pipenet.longdistance.LongDistancePipeType"

export class $LongDistanceNetwork {
public static "get"(levelAccessor0: $LevelAccessor$$Type, blockPos1: $BlockPos$$Type): $LongDistanceNetwork
public "getActiveInputIndex"(): $ILDEndpoint
public "getActiveOutputIndex"(): $ILDEndpoint
public "getEndpointAmount"(): integer
public "getOtherEndpoint"(iLDEndpoint0: $ILDEndpoint$$Type): $ILDEndpoint
public "getPipeAmount"(): integer
public "getPipeType"(): $LongDistancePipeType
public "getTotalSize"(): integer
public "invalidateEndpoints"(): void
public "isIOIndexInvalid"(): boolean
public "isValid"(): boolean
public "onPlaceEndpoint"(iLDEndpoint0: $ILDEndpoint$$Type): void
public "onPlacePipe"(blockPos0: $BlockPos$$Type): void
public "onRemoveEndpoint"(iLDEndpoint0: $ILDEndpoint$$Type): void
public "onRemovePipe"(blockPos0: $BlockPos$$Type): void
get "activeInputIndex"(): $ILDEndpoint
get "activeOutputIndex"(): $ILDEndpoint
get "endpointAmount"(): integer
get "pipeAmount"(): integer
get "pipeType"(): $LongDistancePipeType
get "totalSize"(): integer
get "iOIndexInvalid"(): boolean
get "valid"(): boolean
}
}

declare module "com.gregtechceu.gtceu.api.pipenet.longdistance.LongDistancePipeBlock" {
import { $ResourceLocation } from "net.minecraft.resources.ResourceLocation"
import { $LivingEntity$$Type } from "net.minecraft.world.entity.LivingEntity"
import { $Direction, $Direction$$Type } from "net.minecraft.core.Direction"
import { $EntityType$$Type } from "net.minecraft.world.entity.EntityType"
import { $Item$$Type } from "net.minecraft.world.item.Item"
import { $BlockState, $BlockState$$Type } from "net.minecraft.world.level.block.state.BlockState"
import { $SpawnPlacements$Type$$Type } from "net.minecraft.world.entity.SpawnPlacements$Type"
import { $BlockBehaviour$Properties$$Type } from "net.minecraft.world.level.block.state.BlockBehaviour$Properties"
import { $ServerLevel$$Type } from "net.minecraft.server.level.ServerLevel"
import { $ILDNetworkPart } from "com.gregtechceu.gtceu.api.pipenet.longdistance.ILDNetworkPart"
import { $BlockGetter$$Type } from "net.minecraft.world.level.BlockGetter"
import { $MapColor, $MapColor$$Type } from "net.minecraft.world.level.material.MapColor"
import { $PushReaction } from "net.minecraft.world.level.material.PushReaction"
import { $Rotation$$Type } from "net.minecraft.world.level.block.Rotation"
import { $Holder } from "net.minecraft.core.Holder"
import { $ToolAction$$Type } from "net.minecraftforge.common.ToolAction"
import { $BiConsumer$$Type } from "java.util.function.BiConsumer"
import { $UseOnContext$$Type } from "net.minecraft.world.item.context.UseOnContext"
import { $BlockAndTintGetter$$Type } from "net.minecraft.world.level.BlockAndTintGetter"
import { $BlockPathTypes, $BlockPathTypes$$Type } from "net.minecraft.world.level.pathfinder.BlockPathTypes"
import { $RandomSource$$Type } from "net.minecraft.util.RandomSource"
import { $LevelReader$$Type } from "net.minecraft.world.level.LevelReader"
import { $TreeConfiguration$$Type } from "net.minecraft.world.level.levelgen.feature.configurations.TreeConfiguration"
import { $Explosion$$Type } from "net.minecraft.world.level.Explosion"
import { $SoundType } from "net.minecraft.world.level.block.SoundType"
import { $Player$$Type } from "net.minecraft.world.entity.player.Player"
import { $HitResult$$Type } from "net.minecraft.world.phys.HitResult"
import { $FeatureFlagSet$$Type } from "net.minecraft.world.flag.FeatureFlagSet"
import { $List } from "java.util.List"
import { $Entity$$Type } from "net.minecraft.world.entity.Entity"
import { $BlockPos$$Type } from "net.minecraft.core.BlockPos"
import { $Vec3, $Vec3$$Type } from "net.minecraft.world.phys.Vec3"
import { $SignalGetter$$Type } from "net.minecraft.world.level.SignalGetter"
import { $FluidState$$Type } from "net.minecraft.world.level.material.FluidState"
import { $Optional } from "java.util.Optional"
import { $LevelAccessor$$Type } from "net.minecraft.world.level.LevelAccessor"
import { $Block, $Block$$Type } from "net.minecraft.world.level.block.Block"
import { $ItemStack, $ItemStack$$Type } from "net.minecraft.world.item.ItemStack"
import { $Level$$Type } from "net.minecraft.world.level.Level"
import { $Mob$$Type } from "net.minecraft.world.entity.Mob"
import { $LongDistancePipeType, $LongDistancePipeType$$Type } from "com.gregtechceu.gtceu.api.pipenet.longdistance.LongDistancePipeType"
import { $LongDistanceNetwork } from "com.gregtechceu.gtceu.api.pipenet.longdistance.LongDistanceNetwork"

export class $LongDistancePipeBlock extends $Block implements $ILDNetworkPart {
constructor(properties0: $BlockBehaviour$Properties$$Type, longDistancePipeType1: $LongDistancePipeType$$Type)

public "addLandingEffects"(blockState0: $BlockState$$Type, serverLevel1: $ServerLevel$$Type, blockPos2: $BlockPos$$Type, blockState3: $BlockState$$Type, livingEntity4: $LivingEntity$$Type, int5: integer): boolean
public "addRunningEffects"(blockState0: $BlockState$$Type, level1: $Level$$Type, blockPos2: $BlockPos$$Type, entity3: $Entity$$Type): boolean
public "arch$holder"(): $Holder<$Block>
public "arch$registryName"(): $ResourceLocation
public "canBeHydrated"(blockState0: $BlockState$$Type, blockGetter1: $BlockGetter$$Type, blockPos2: $BlockPos$$Type, fluidState3: $FluidState$$Type, blockPos4: $BlockPos$$Type): boolean
public "canConnectRedstone"(blockState0: $BlockState$$Type, blockGetter1: $BlockGetter$$Type, blockPos2: $BlockPos$$Type, direction3: $Direction$$Type): boolean
public "canDropFromExplosion"(blockState0: $BlockState$$Type, blockGetter1: $BlockGetter$$Type, blockPos2: $BlockPos$$Type, explosion3: $Explosion$$Type): boolean
public "canEntityDestroy"(blockState0: $BlockState$$Type, blockGetter1: $BlockGetter$$Type, blockPos2: $BlockPos$$Type, entity3: $Entity$$Type): boolean
public "canHarvestBlock"(blockState0: $BlockState$$Type, blockGetter1: $BlockGetter$$Type, blockPos2: $BlockPos$$Type, player3: $Player$$Type): boolean
public "canStickTo"(blockState0: $BlockState$$Type, blockState1: $BlockState$$Type): boolean
public "collisionExtendsVertically"(blockState0: $BlockState$$Type, blockGetter1: $BlockGetter$$Type, blockPos2: $BlockPos$$Type, entity3: $Entity$$Type): boolean
public "findNetworks"(level0: $Level$$Type, blockPos1: $BlockPos$$Type): $List<$LongDistanceNetwork>
public static "get"(item: $Item$$Type): $ResourceLocation
public static "get"(block: $Block$$Type): $ResourceLocation
public static "get"(state: $BlockState$$Type): $ResourceLocation
public static "get"(entity: $Entity$$Type): $ResourceLocation
public static "get"(stack: $ItemStack$$Type): $ResourceLocation
public static "get"(type: $EntityType$$Type<any>): $ResourceLocation
public "getAdjacentBlockPathType"(blockState0: $BlockState$$Type, blockGetter1: $BlockGetter$$Type, blockPos2: $BlockPos$$Type, mob3: $Mob$$Type, blockPathTypes4: $BlockPathTypes$$Type): $BlockPathTypes
public "getAppearance"(blockState0: $BlockState$$Type, blockAndTintGetter1: $BlockAndTintGetter$$Type, blockPos2: $BlockPos$$Type, direction3: $Direction$$Type, blockState4: $BlockState$$Type, blockPos5: $BlockPos$$Type): $BlockState
public "getBeaconColorMultiplier"(blockState0: $BlockState$$Type, levelReader1: $LevelReader$$Type, blockPos2: $BlockPos$$Type, blockPos3: $BlockPos$$Type): float[]
public "getBedDirection"(blockState0: $BlockState$$Type, levelReader1: $LevelReader$$Type, blockPos2: $BlockPos$$Type): $Direction
public "getBlockPathType"(blockState0: $BlockState$$Type, blockGetter1: $BlockGetter$$Type, blockPos2: $BlockPos$$Type, mob3: $Mob$$Type): $BlockPathTypes
public "getBlockStates"(): $List<$BlockState>
public "getCloneItemStack"(blockState0: $BlockState$$Type, hitResult1: $HitResult$$Type, blockGetter2: $BlockGetter$$Type, blockPos3: $BlockPos$$Type, player4: $Player$$Type): $ItemStack
public "getEnchantPowerBonus"(blockState0: $BlockState$$Type, levelReader1: $LevelReader$$Type, blockPos2: $BlockPos$$Type): float
public "getExpDrop"(blockState0: $BlockState$$Type, levelReader1: $LevelReader$$Type, randomSource2: $RandomSource$$Type, blockPos3: $BlockPos$$Type, int4: integer, int5: integer): integer
public "getExplosionResistance"(blockState0: $BlockState$$Type, blockGetter1: $BlockGetter$$Type, blockPos2: $BlockPos$$Type, explosion3: $Explosion$$Type): float
public "getFireSpreadSpeed"(blockState0: $BlockState$$Type, blockGetter1: $BlockGetter$$Type, blockPos2: $BlockPos$$Type, direction3: $Direction$$Type): integer
public "getFlammability"(blockState0: $BlockState$$Type, blockGetter1: $BlockGetter$$Type, blockPos2: $BlockPos$$Type, direction3: $Direction$$Type): integer
public "getFriction"(blockState0: $BlockState$$Type, levelReader1: $LevelReader$$Type, blockPos2: $BlockPos$$Type, entity3: $Entity$$Type): float
public "getLightEmission"(blockState0: $BlockState$$Type, blockGetter1: $BlockGetter$$Type, blockPos2: $BlockPos$$Type): integer
public "getMapColor"(blockState0: $BlockState$$Type, blockGetter1: $BlockGetter$$Type, blockPos2: $BlockPos$$Type, mapColor3: $MapColor$$Type): $MapColor
public "getMod"(): string
public "getPipeType"(): $LongDistancePipeType
public "getPistonPushReaction"(blockState0: $BlockState$$Type): $PushReaction
public "getRespawnPosition"(blockState0: $BlockState$$Type, entityType1: $EntityType$$Type<any>, levelReader2: $LevelReader$$Type, blockPos3: $BlockPos$$Type, float4: float, livingEntity5: $LivingEntity$$Type): $Optional<$Vec3>
public "getSoundType"(blockState0: $BlockState$$Type, levelReader1: $LevelReader$$Type, blockPos2: $BlockPos$$Type, entity3: $Entity$$Type): $SoundType
public "getStateAtViewpoint"(blockState0: $BlockState$$Type, blockGetter1: $BlockGetter$$Type, blockPos2: $BlockPos$$Type, vec33: $Vec3$$Type): $BlockState
public "getToolModifiedState"(blockState0: $BlockState$$Type, useOnContext1: $UseOnContext$$Type, toolAction2: $ToolAction$$Type, boolean3: boolean): $BlockState
public "getWeakChanges"(blockState0: $BlockState$$Type, levelReader1: $LevelReader$$Type, blockPos2: $BlockPos$$Type): boolean
public "hidesNeighborFace"(blockGetter0: $BlockGetter$$Type, blockPos1: $BlockPos$$Type, blockState2: $BlockState$$Type, blockState3: $BlockState$$Type, direction4: $Direction$$Type): boolean
public "isBed"(blockState0: $BlockState$$Type, blockGetter1: $BlockGetter$$Type, blockPos2: $BlockPos$$Type, entity3: $Entity$$Type): boolean
public "isBurning"(blockState0: $BlockState$$Type, blockGetter1: $BlockGetter$$Type, blockPos2: $BlockPos$$Type): boolean
public "isConduitFrame"(blockState0: $BlockState$$Type, levelReader1: $LevelReader$$Type, blockPos2: $BlockPos$$Type, blockPos3: $BlockPos$$Type): boolean
public "isEnabled"(featureFlagSet0: $FeatureFlagSet$$Type): boolean
public "isFertile"(blockState0: $BlockState$$Type, blockGetter1: $BlockGetter$$Type, blockPos2: $BlockPos$$Type): boolean
public "isFireSource"(blockState0: $BlockState$$Type, levelReader1: $LevelReader$$Type, blockPos2: $BlockPos$$Type, direction3: $Direction$$Type): boolean
public "isFlammable"(blockState0: $BlockState$$Type, blockGetter1: $BlockGetter$$Type, blockPos2: $BlockPos$$Type, direction3: $Direction$$Type): boolean
public "isLadder"(blockState0: $BlockState$$Type, levelReader1: $LevelReader$$Type, blockPos2: $BlockPos$$Type, livingEntity3: $LivingEntity$$Type): boolean
public "isPortalFrame"(blockState0: $BlockState$$Type, blockGetter1: $BlockGetter$$Type, blockPos2: $BlockPos$$Type): boolean
public "isScaffolding"(blockState0: $BlockState$$Type, levelReader1: $LevelReader$$Type, blockPos2: $BlockPos$$Type, livingEntity3: $LivingEntity$$Type): boolean
public "isSlimeBlock"(blockState0: $BlockState$$Type): boolean
public "isStickyBlock"(blockState0: $BlockState$$Type): boolean
public "isValidSpawn"(blockState0: $BlockState$$Type, blockGetter1: $BlockGetter$$Type, blockPos2: $BlockPos$$Type, type3: $SpawnPlacements$Type$$Type, entityType4: $EntityType$$Type<any>): boolean
public "makesOpenTrapdoorAboveClimbable"(blockState0: $BlockState$$Type, levelReader1: $LevelReader$$Type, blockPos2: $BlockPos$$Type, blockState3: $BlockState$$Type): boolean
public "onBlockExploded"(blockState0: $BlockState$$Type, level1: $Level$$Type, blockPos2: $BlockPos$$Type, explosion3: $Explosion$$Type): void
public "onBlockStateChange"(levelReader0: $LevelReader$$Type, blockPos1: $BlockPos$$Type, blockState2: $BlockState$$Type, blockState3: $BlockState$$Type): void
public "onCaughtFire"(blockState0: $BlockState$$Type, level1: $Level$$Type, blockPos2: $BlockPos$$Type, direction3: $Direction$$Type, livingEntity4: $LivingEntity$$Type): void
public "onDestroyedByPlayer"(blockState0: $BlockState$$Type, level1: $Level$$Type, blockPos2: $BlockPos$$Type, player3: $Player$$Type, boolean4: boolean, fluidState5: $FluidState$$Type): boolean
public "onNeighborChange"(blockState0: $BlockState$$Type, levelReader1: $LevelReader$$Type, blockPos2: $BlockPos$$Type, blockPos3: $BlockPos$$Type): void
public "onTreeGrow"(blockState0: $BlockState$$Type, levelReader1: $LevelReader$$Type, biConsumer2: $BiConsumer$$Type<$BlockPos$$Type, $BlockState$$Type>, randomSource3: $RandomSource$$Type, blockPos4: $BlockPos$$Type, treeConfiguration5: $TreeConfiguration$$Type): boolean
public "rotate"(blockState0: $BlockState$$Type, levelAccessor1: $LevelAccessor$$Type, blockPos2: $BlockPos$$Type, rotation3: $Rotation$$Type): $BlockState
public "setBedOccupied"(blockState0: $BlockState$$Type, level1: $Level$$Type, blockPos2: $BlockPos$$Type, livingEntity3: $LivingEntity$$Type, boolean4: boolean): void
public "setDestroySpeed"(v: float): void
public "setLightEmission"(v: integer): void
public "setRequiresTool"(v: boolean): void
public "shouldCheckWeakPower"(blockState0: $BlockState$$Type, signalGetter1: $SignalGetter$$Type, blockPos2: $BlockPos$$Type, direction3: $Direction$$Type): boolean
public "shouldDisplayFluidOverlay"(blockState0: $BlockState$$Type, blockAndTintGetter1: $BlockAndTintGetter$$Type, blockPos2: $BlockPos$$Type, fluidState3: $FluidState$$Type): boolean
public "supportsExternalFaceHiding"(blockState0: $BlockState$$Type): boolean
public static "tryGet"(levelAccessor0: $LevelAccessor$$Type, blockPos1: $BlockPos$$Type): $ILDNetworkPart
public static "tryGet"(levelAccessor0: $LevelAccessor$$Type, blockPos1: $BlockPos$$Type, blockState2: $BlockState$$Type): $ILDNetworkPart
get "blockStates"(): $List<$BlockState>
get "mod"(): string
get "pipeType"(): $LongDistancePipeType
set "destroySpeed"(value: float)
set "lightEmission"(value: integer)
set "requiresTool"(value: boolean)
}
}

declare module "com.gregtechceu.gtceu.api.pipenet.longdistance.LongDistanceNetwork$WorldData" {
import { $CompoundTag$$Type } from "net.minecraft.nbt.CompoundTag"
import { $BlockPos$$Type } from "net.minecraft.core.BlockPos"
import { $LevelAccessor, $LevelAccessor$$Type } from "net.minecraft.world.level.LevelAccessor"
import { $ServerLevel$$Type } from "net.minecraft.server.level.ServerLevel"
import { $SavedData } from "net.minecraft.world.level.saveddata.SavedData"
import { $LongDistanceNetwork } from "com.gregtechceu.gtceu.api.pipenet.longdistance.LongDistanceNetwork"

export class $LongDistanceNetwork$WorldData extends $SavedData {
constructor()

public static "create"(serverLevel0: $ServerLevel$$Type): $LongDistanceNetwork$WorldData
public static "get"(levelAccessor0: $LevelAccessor$$Type): $LongDistanceNetwork$WorldData
public "getNetwork"(blockPos0: $BlockPos$$Type): $LongDistanceNetwork
public "getWorld"(): $LevelAccessor
public static "load"(compoundTag0: $CompoundTag$$Type, serverLevel1: $ServerLevel$$Type): $LongDistanceNetwork$WorldData
get "world"(): $LevelAccessor
}
}

declare module "com.gregtechceu.gtceu.api.pipenet.longdistance.ILDEndpoint" {
import { $IO, $IO$$Type } from "com.gregtechceu.gtceu.api.capability.recipe.IO"
import { $ILDNetworkPart } from "com.gregtechceu.gtceu.api.pipenet.longdistance.ILDNetworkPart"
import { $BlockPos, $BlockPos$$Type } from "net.minecraft.core.BlockPos"
import { $Direction } from "net.minecraft.core.Direction"
import { $LevelAccessor$$Type } from "net.minecraft.world.level.LevelAccessor"
import { $BlockState$$Type } from "net.minecraft.world.level.block.state.BlockState"
import { $Level } from "net.minecraft.world.level.Level"
import { $LongDistancePipeType } from "com.gregtechceu.gtceu.api.pipenet.longdistance.LongDistancePipeType"

export interface $ILDEndpoint extends $ILDNetworkPart {
"getFrontFacing"(): $Direction
"getIoType"(): $IO
"getLevel"(): $Level
"getLink"(): $ILDEndpoint
"getOutputFacing"(): $Direction
"getPipeType"(): $LongDistancePipeType
"getPos"(): $BlockPos
"invalidateLink"(): void
"isInValid"(): boolean
"isInput"(): boolean
"isOutput"(): boolean
"setIoType"(iO0: $IO$$Type): void
get "frontFacing"(): $Direction
get "ioType"(): $IO
get "level"(): $Level
get "link"(): $ILDEndpoint
get "outputFacing"(): $Direction
get "pipeType"(): $LongDistancePipeType
get "pos"(): $BlockPos
get "inValid"(): boolean
get "input"(): boolean
get "output"(): boolean
set "ioType"(value: $IO$$Type)
}

export namespace $ILDEndpoint {
function tryGet(levelAccessor0: $LevelAccessor$$Type, blockPos1: $BlockPos$$Type): $ILDEndpoint
function tryGet(levelAccessor0: $LevelAccessor$$Type, blockPos1: $BlockPos$$Type, blockState2: $BlockState$$Type): $ILDNetworkPart
}
export abstract class $ILDEndpoint$$Static implements $ILDEndpoint {
static "tryGet"(levelAccessor0: $LevelAccessor$$Type, blockPos1: $BlockPos$$Type): $ILDEndpoint
static "tryGet"(levelAccessor0: $LevelAccessor$$Type, blockPos1: $BlockPos$$Type, blockState2: $BlockState$$Type): $ILDNetworkPart
}
}

declare module "com.gregtechceu.gtceu.api.pipenet.longdistance.ILDNetworkPart" {
import { $BlockPos$$Type } from "net.minecraft.core.BlockPos"
import { $LevelAccessor$$Type } from "net.minecraft.world.level.LevelAccessor"
import { $BlockState$$Type } from "net.minecraft.world.level.block.state.BlockState"
import { $LongDistancePipeType } from "com.gregtechceu.gtceu.api.pipenet.longdistance.LongDistancePipeType"

export interface $ILDNetworkPart {
"getPipeType"(): $LongDistancePipeType
get "pipeType"(): $LongDistancePipeType
}

export namespace $ILDNetworkPart {
function tryGet(levelAccessor0: $LevelAccessor$$Type, blockPos1: $BlockPos$$Type): $ILDNetworkPart
function tryGet(levelAccessor0: $LevelAccessor$$Type, blockPos1: $BlockPos$$Type, blockState2: $BlockState$$Type): $ILDNetworkPart
}
export abstract class $ILDNetworkPart$$Static implements $ILDNetworkPart {
static "tryGet"(levelAccessor0: $LevelAccessor$$Type, blockPos1: $BlockPos$$Type): $ILDNetworkPart
static "tryGet"(levelAccessor0: $LevelAccessor$$Type, blockPos1: $BlockPos$$Type, blockState2: $BlockState$$Type): $ILDNetworkPart
}
}

declare module "com.gregtechceu.gtceu.api.pipenet.IPipeType" {
import { $ResourceLocation } from "net.minecraft.resources.ResourceLocation"

export interface $IPipeType<NodeDataType = any> {
"getThickness"(): float
"isPaintable"(): boolean
"modifyProperties"(nodedatatype0: NodeDataType): NodeDataType
"type"(): $ResourceLocation
get "thickness"(): float
get "paintable"(): boolean
}

export namespace $IPipeType {
const probejs$$marker: never
}
export abstract class $IPipeType$$Static<NodeDataType = any> implements $IPipeType<NodeDataType> {
}
}

declare module "com.gregtechceu.gtceu.api.pipenet.IMaterialPipeType" {
import { $ResourceLocation } from "net.minecraft.resources.ResourceLocation"
import { $TagPrefix } from "com.gregtechceu.gtceu.api.data.tag.TagPrefix"
import { $IPipeType } from "com.gregtechceu.gtceu.api.pipenet.IPipeType"

export interface $IMaterialPipeType<NodeDataType = any> extends $IPipeType<NodeDataType> {
"getTagPrefix"(): $TagPrefix
"getThickness"(): float
"isPaintable"(): boolean
"modifyProperties"(nodedatatype0: NodeDataType): NodeDataType
"type"(): $ResourceLocation
get "tagPrefix"(): $TagPrefix
get "thickness"(): float
get "paintable"(): boolean
}

export namespace $IMaterialPipeType {
const probejs$$marker: never
}
export abstract class $IMaterialPipeType$$Static<NodeDataType = any> implements $IMaterialPipeType<NodeDataType> {
}
}

declare module "com.gregtechceu.gtceu.api.pipenet.LevelPipeNet" {
import { $CompoundTag$$Type } from "net.minecraft.nbt.CompoundTag"
import { $BlockPos$$Type } from "net.minecraft.core.BlockPos"
import { $Direction$$Type } from "net.minecraft.core.Direction"
import { $ServerLevel, $ServerLevel$$Type } from "net.minecraft.server.level.ServerLevel"
import { $SavedData } from "net.minecraft.world.level.saveddata.SavedData"
import { $PipeNet } from "com.gregtechceu.gtceu.api.pipenet.PipeNet"

export class $LevelPipeNet<NodeDataType = any, T extends $PipeNet<NodeDataType> = $PipeNet<NodeDataType>> extends $SavedData {
constructor(serverLevel0: $ServerLevel$$Type)
constructor(serverLevel0: $ServerLevel$$Type, compoundTag1: $CompoundTag$$Type)

public "addNode"(blockPos0: $BlockPos$$Type, nodedatatype1: NodeDataType, int2: integer, int3: integer, boolean4: boolean): void
public "getNetFromPos"(blockPos0: $BlockPos$$Type): T
public "getWorld"(): $ServerLevel
public "removeNode"(blockPos0: $BlockPos$$Type): void
public "updateBlockedConnections"(blockPos0: $BlockPos$$Type, direction1: $Direction$$Type, boolean2: boolean): void
public "updateData"(blockPos0: $BlockPos$$Type, nodedatatype1: NodeDataType): void
public "updateMark"(blockPos0: $BlockPos$$Type, int1: integer): void
get "world"(): $ServerLevel
}
}

declare module "com.gregtechceu.gtceu.api.pipenet.IAttachData" {
import { $Direction$$Type } from "net.minecraft.core.Direction"

export interface $IAttachData {
"canAttachTo"(direction0: $Direction$$Type): boolean
"setAttached"(direction0: $Direction$$Type, boolean1: boolean): boolean
}

export namespace $IAttachData {
const probejs$$marker: never
}
export abstract class $IAttachData$$Static implements $IAttachData {
}
}

declare module "com.gregtechceu.gtceu.api.pipenet.Node" {
import { $Direction$$Type } from "net.minecraft.core.Direction"

export class $Node<NodeDataType = any> {
static readonly "ALL_CLOSED": integer
static readonly "ALL_OPENED": integer
static readonly "DEFAULT_MARK": integer

constructor(nodedatatype0: NodeDataType, int1: integer, int2: integer, boolean3: boolean)

public "isBlocked"(direction0: $Direction$$Type): boolean
get "data"(): NodeDataType
set "data"(value: NodeDataType)
get "isActive"(): boolean
set "isActive"(value: boolean)
get "mark"(): integer
set "mark"(value: integer)
get "openConnections"(): integer
set "openConnections"(value: integer)
}
}

declare module "com.gregtechceu.gtceu.api.pipenet.IRoutePath" {
import { $BlockPos } from "net.minecraft.core.BlockPos"
import { $Direction } from "net.minecraft.core.Direction"
import { $Level$$Type } from "net.minecraft.world.level.Level"
import { $BlockEntity } from "net.minecraft.world.level.block.entity.BlockEntity"
import { $Capability$$Type } from "net.minecraftforge.common.capabilities.Capability"

export interface $IRoutePath<T = any> {
"getDistance"(): integer
"getHandler"(level0: $Level$$Type): T
"getTargetBlockEntity"(level0: $Level$$Type): $BlockEntity
"getTargetCapability"<I>(capability0: $Capability$$Type<I>, level1: $Level$$Type): I
"getTargetFacing"(): $Direction
"getTargetPipePos"(): $BlockPos
get "distance"(): integer
get "targetFacing"(): $Direction
get "targetPipePos"(): $BlockPos
}

export namespace $IRoutePath {
const probejs$$marker: never
}
export abstract class $IRoutePath$$Static<T = any> implements $IRoutePath<T> {
}
}

declare module "com.gregtechceu.gtceu.api.pipenet.PipeNet" {
import { $ChunkPos } from "net.minecraft.world.level.ChunkPos"
import { $ITagSerializable } from "com.lowdragmc.lowdraglib.syncdata.ITagSerializable"
import { $CompoundTag, $CompoundTag$$Type } from "net.minecraft.nbt.CompoundTag"
import { $BlockPos, $BlockPos$$Type } from "net.minecraft.core.BlockPos"
import { $Direction$$Type } from "net.minecraft.core.Direction"
import { $Map } from "java.util.Map"
import { $Set } from "java.util.Set"
import { $Node } from "com.gregtechceu.gtceu.api.pipenet.Node"
import { $ServerLevel } from "net.minecraft.server.level.ServerLevel"
import { $LevelPipeNet, $LevelPipeNet$$Type } from "com.gregtechceu.gtceu.api.pipenet.LevelPipeNet"

export class $PipeNet<NodeDataType = any> implements $ITagSerializable<$CompoundTag> {
constructor(levelPipeNet0: $LevelPipeNet$$Type<NodeDataType, $PipeNet$$Type<NodeDataType>>)

public "containsNode"(blockPos0: $BlockPos$$Type): boolean
public "deserializeNBT"(compoundTag0: $CompoundTag$$Type): void
public "getAllNodes"(): $Map<$BlockPos, $Node<NodeDataType>>
public "getContainedChunks"(): $Set<$ChunkPos>
public "getLastUpdate"(): long
public "getLevel"(): $ServerLevel
public "getNodeAt"(blockPos0: $BlockPos$$Type): $Node<NodeDataType>
public "getWorldData"(): $LevelPipeNet<NodeDataType, $PipeNet<NodeDataType>>
public "isNodeConnectedTo"(blockPos0: $BlockPos$$Type, direction1: $Direction$$Type): boolean
public "isValid"(): boolean
public "markNodeAsActive"(blockPos0: $BlockPos$$Type, boolean1: boolean): boolean
public "onNeighbourUpdate"(blockPos0: $BlockPos$$Type): void
public "onPipeConnectionsUpdate"(): void
public "removeNode"(blockPos0: $BlockPos$$Type): void
public "updateBlockedConnections"(blockPos0: $BlockPos$$Type, direction1: $Direction$$Type, boolean2: boolean): void
public "updateMark"(blockPos0: $BlockPos$$Type, int1: integer): void
public "updateNodeData"(blockPos0: $BlockPos$$Type, nodedatatype1: NodeDataType): void
get "allNodes"(): $Map<$BlockPos, $Node<NodeDataType>>
get "containedChunks"(): $Set<$ChunkPos>
get "lastUpdate"(): long
get "level"(): $ServerLevel
get "worldData"(): $LevelPipeNet<NodeDataType, $PipeNet<NodeDataType>>
get "valid"(): boolean
}
}

declare module "com.gregtechceu.gtceu.api.pipenet.longdistance.LongDistancePipeType" {
import { $ILDNetworkPart$$Type } from "com.gregtechceu.gtceu.api.pipenet.longdistance.ILDNetworkPart"
import { $LongDistanceNetwork$WorldData$$Type } from "com.gregtechceu.gtceu.api.pipenet.longdistance.LongDistanceNetwork$WorldData"
import { $LDItemPipeType } from "com.gregtechceu.gtceu.common.pipelike.item.longdistance.LDItemPipeType"
import { $ILDEndpoint$$Type } from "com.gregtechceu.gtceu.api.pipenet.longdistance.ILDEndpoint"
import { $Level$$Type } from "net.minecraft.world.level.Level"
import { $LDFluidPipeType } from "com.gregtechceu.gtceu.common.pipelike.fluidpipe.longdistance.LDFluidPipeType"
import { $LongDistanceNetwork } from "com.gregtechceu.gtceu.api.pipenet.longdistance.LongDistanceNetwork"

export class $LongDistancePipeType {
public "createNetwork"(worldData0: $LongDistanceNetwork$WorldData$$Type): $LongDistanceNetwork
public "createNetwork"(level0: $Level$$Type): $LongDistanceNetwork
public static "fluid"(): $LDFluidPipeType
public "getMinLength"(): integer
public "getName"(): string
public static "getPipeType"(string0: string): $LongDistancePipeType
public "isValidPart"(iLDNetworkPart0: $ILDNetworkPart$$Type): boolean
public static "item"(): $LDItemPipeType
public "satisfiesMinLength"(iLDEndpoint0: $ILDEndpoint$$Type, iLDEndpoint1: $ILDEndpoint$$Type): boolean
get "minLength"(): integer
get "name"(): string
}
}

