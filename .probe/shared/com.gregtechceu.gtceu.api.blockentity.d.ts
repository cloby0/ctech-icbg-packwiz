declare module "com.gregtechceu.gtceu.api.blockentity.ITickSubscription" {
import { $TickableSubscription, $TickableSubscription$$Type } from "com.gregtechceu.gtceu.api.machine.TickableSubscription"
import { $Runnable$$Type } from "java.lang.Runnable"

export interface $ITickSubscription {
"subscribeServerTick"(runnable0: $Runnable$$Type): $TickableSubscription
"subscribeServerTick"(tickableSubscription0: $TickableSubscription$$Type, runnable1: $Runnable$$Type): $TickableSubscription
"unsubscribe"(tickableSubscription0: $TickableSubscription$$Type): void
}

export namespace $ITickSubscription {
const probejs$$marker: never
}
export abstract class $ITickSubscription$$Static implements $ITickSubscription {
}
}

declare module "com.gregtechceu.gtceu.api.blockentity.ICopyable" {
import { $ServerPlayer$$Type } from "net.minecraft.server.level.ServerPlayer"
import { $List } from "java.util.List"
import { $CompoundTag, $CompoundTag$$Type } from "net.minecraft.nbt.CompoundTag"
import { $ItemStack } from "net.minecraft.world.item.ItemStack"

export interface $ICopyable {
"copyConfig"(compoundTag0: $CompoundTag$$Type): $CompoundTag
"getItemsRequiredToPaste"(): $List<$ItemStack>
"pasteConfig"(serverPlayer0: $ServerPlayer$$Type, compoundTag1: $CompoundTag$$Type): void
get "itemsRequiredToPaste"(): $List<$ItemStack>
}

export namespace $ICopyable {
const probejs$$marker: never
}
export abstract class $ICopyable$$Static implements $ICopyable {
}
}

declare module "com.gregtechceu.gtceu.api.blockentity.PipeBlockEntity" {
import { $IToolable } from "com.gregtechceu.gtceu.api.capability.IToolable"
import { $IFieldUpdateListener$$Type } from "com.lowdragmc.lowdraglib.syncdata.IFieldUpdateListener"
import { $AABB } from "net.minecraft.world.phys.AABB"
import { $Direction$$Type } from "net.minecraft.core.Direction"
import { $Connection$$Type } from "net.minecraft.network.Connection"
import { $BlockState$$Type } from "net.minecraft.world.level.block.state.BlockState"
import { $Runnable$$Type } from "java.lang.Runnable"
import { $LazyOptional } from "net.minecraftforge.common.util.LazyOptional"
import { $TrackedData, $TrackedData$$Type } from "dev.corgitaco.dataanchor.data.TrackedData"
import { $ServerPlayer$$Type } from "net.minecraft.server.level.ServerPlayer"
import { $Enum } from "java.lang.Enum"
import { $IRef, $IRef$$Type } from "com.lowdragmc.lowdraglib.syncdata.managed.IRef"
import { $UseOnContext$$Type } from "net.minecraft.world.item.context.UseOnContext"
import { $PipeBlock } from "com.gregtechceu.gtceu.api.block.PipeBlock"
import { $TrackedDataRegistry$$Type } from "dev.corgitaco.dataanchor.data.registry.TrackedDataRegistry"
import { $PipeNet } from "com.gregtechceu.gtceu.api.pipenet.PipeNet"
import { $ClientboundBlockEntityDataPacket$$Type } from "net.minecraft.network.protocol.game.ClientboundBlockEntityDataPacket"
import { $Set$$Type } from "java.util.Set"
import { $InteractionResult } from "net.minecraft.world.InteractionResult"
import { $ModelData } from "net.minecraftforge.client.model.data.ModelData"
import { $BlockEntity } from "net.minecraft.world.level.block.entity.BlockEntity"
import { $IPipeType } from "com.gregtechceu.gtceu.api.pipenet.IPipeType"
import { $Capability$$Type } from "net.minecraftforge.common.capabilities.Capability"
import { $Pair } from "com.mojang.datafixers.util.Pair"
import { $Player$$Type } from "net.minecraft.world.entity.player.Player"
import { $IPipeNode } from "com.gregtechceu.gtceu.api.pipenet.IPipeNode"
import { $GTToolType, $GTToolType$$Type } from "com.gregtechceu.gtceu.api.item.tool.GTToolType"
import { $IManagedStorage } from "com.lowdragmc.lowdraglib.syncdata.IManagedStorage"
import { $List } from "java.util.List"
import { $TickableSubscription, $TickableSubscription$$Type } from "com.gregtechceu.gtceu.api.machine.TickableSubscription"
import { $IEnhancedManaged } from "com.lowdragmc.lowdraglib.syncdata.IEnhancedManaged"
import { $CompoundTag, $CompoundTag$$Type } from "net.minecraft.nbt.CompoundTag"
import { $TrackedDataContainer } from "dev.corgitaco.dataanchor.data.TrackedDataContainer"
import { $BlockEntityType, $BlockEntityType$$Type } from "net.minecraft.world.level.block.entity.BlockEntityType"
import { $BlockPos, $BlockPos$$Type } from "net.minecraft.core.BlockPos"
import { $ResourceTexture } from "com.lowdragmc.lowdraglib.gui.texture.ResourceTexture"
import { $IToolGridHighlight } from "com.gregtechceu.gtceu.api.item.tool.IToolGridHighlight"
import { $IAutoPersistBlockEntity } from "com.lowdragmc.lowdraglib.syncdata.blockentity.IAutoPersistBlockEntity"
import { $ItemStack, $ItemStack$$Type } from "net.minecraft.world.item.ItemStack"
import { $Material, $Material$$Type } from "com.gregtechceu.gtceu.api.data.chemical.material.Material"
import { $Level } from "net.minecraft.world.level.Level"
import { $ManagedFieldHolder } from "com.lowdragmc.lowdraglib.syncdata.field.ManagedFieldHolder"
import { $ISubscription } from "com.lowdragmc.lowdraglib.syncdata.ISubscription"
import { $IAsyncAutoSyncBlockEntity } from "com.lowdragmc.lowdraglib.syncdata.blockentity.IAsyncAutoSyncBlockEntity"
import { $ICopyable } from "com.gregtechceu.gtceu.api.blockentity.ICopyable"

export class $PipeBlockEntity<PipeType extends ($Enum<PipeType> & $IPipeType<NodeDataType>) = ($Enum<PipeType> & $IPipeType<NodeDataType>), NodeDataType = any> extends $BlockEntity implements $IPipeNode<PipeType, NodeDataType>, $IEnhancedManaged, $IAsyncAutoSyncBlockEntity, $IAutoPersistBlockEntity, $IToolGridHighlight, $IToolable, $ICopyable {
static readonly "MANAGED_FIELD_HOLDER": $ManagedFieldHolder

constructor(blockEntityType0: $BlockEntityType$$Type<any>, blockPos1: $BlockPos$$Type, blockState2: $BlockState$$Type)

public "addSyncUpdateListener"<T>(name: string, listener: $IFieldUpdateListener$$Type<T>): $ISubscription
public "asyncTick"(periodID: long): void
public "canAttachTo"(direction0: $Direction$$Type): boolean
public "canHaveBlockedFaces"(): boolean
public "copyConfig"(compoundTag0: $CompoundTag$$Type): $CompoundTag
public "defaultServerTick"(): void
public "deserializeNBT"(compoundTag0: $CompoundTag$$Type): void
public "doExplosion"(float0: float): void
public "getBlockEntityType"(): $BlockEntityType<any>
public "getBlockedConnections"(): integer
public "getCapability"<T>(capability0: $Capability$$Type<T>): $LazyOptional<T>
public "getConnections"(): integer
public "getCurrentPos"(): $BlockPos
public "getDefaultPaintingColor"(): integer
public "getFieldHolder"(): $ManagedFieldHolder
public "getFrameMaterial"(): $Material
public "getItemsRequiredToPaste"(): $List<$ItemStack>
public "getModelData"(): $ModelData
public "getNeighbor"(direction0: $Direction$$Type): $BlockEntity
public "getNodeData"(): NodeDataType
public "getNonLazyFields"(): $IRef[]
public "getNumConnections"(): integer
public "getOffsetTimer"(): long
public "getPaintingColor"(): integer
public "getPipeBlock"(): $PipeBlock<PipeType, NodeDataType, any>
public "getPipeLevel"(): $Level
public "getPipeNet"(): $PipeNet<NodeDataType>
public "getPipePos"(): $BlockPos
public "getPipeTexture"(boolean0: boolean): $ResourceTexture
public "getPipeTuneTool"(): $GTToolType
public "getPipeType"(): PipeType
public "getRealColor"(): integer
public "getRenderBoundingBox"(): $AABB
public "getRootStorage"(): $IManagedStorage
public "getSelf"(): $BlockEntity
public "getSyncTag"(): string
public "getVisualConnections"(): integer
public "handleUpdateTag"(compoundTag0: $CompoundTag$$Type): void
public "hasCustomOutlineRendering"(player0: $Player$$Type): boolean
public "isAsyncSyncing"(): boolean
public "isBlocked"(direction0: $Direction$$Type): boolean
public static "isConnected"(int0: integer, direction1: $Direction$$Type): boolean
public "isConnected"(direction0: $Direction$$Type): boolean
public static "isFaceBlocked"(int0: integer, direction1: $Direction$$Type): boolean
public "isInValid"(): boolean
public "isPainted"(): boolean
public "isRemote"(): boolean
public "loadCustomPersistedData"(tag: $CompoundTag$$Type): void
public "loadManagedPersistentData"(tag: $CompoundTag$$Type): void
public static "makeBasicContainer"<O, T extends $TrackedData<O>>(registry: $TrackedDataRegistry$$Type<O, T>, o: O, isClient: boolean): $TrackedDataContainer<O, T>
public static "makeBasicContainer"<O, T extends $TrackedData<O>>(registry: $TrackedDataRegistry$$Type<O, T>, o: O, isClient: boolean, lazyLoad: boolean): $TrackedDataContainer<O, T>
public "markAsDirty"(): void
public "markDirty"(name: string): void
public "notifyBlockUpdate"(): void
public "onChanged"(): void
public "onDataPacket"(connection0: $Connection$$Type, clientboundBlockEntityDataPacket1: $ClientboundBlockEntityDataPacket$$Type): void
public "onInValid"(): void
public "onLoad"(): void
public "onPersistedChanged"(ref: $IRef$$Type, isDirty: boolean): void
public "onSyncChanged"(ref: $IRef$$Type, isDirty: boolean): void
public "onToolClick"(set0: $Set$$Type<$GTToolType$$Type>, itemStack1: $ItemStack$$Type, useOnContext2: $UseOnContext$$Type): $Pair<$GTToolType, $InteractionResult>
public "onValid"(): void
public "pasteConfig"(serverPlayer0: $ServerPlayer$$Type, compoundTag1: $CompoundTag$$Type): void
public "readCustomSyncData"(tag: $CompoundTag$$Type): void
public "requestModelDataUpdate"(): void
public "saveCustomPersistedData"(tag: $CompoundTag$$Type, forDrop: boolean): void
public "saveManagedPersistentData"(tag: $CompoundTag$$Type, forDrop: boolean): void
public "scheduleNeighborShapeUpdate"(): void
public "scheduleRender"(fieldName: string, newValue: any, oldValue: any): void
public "scheduleRenderUpdate"(): void
public "sdl$isDynamicLightEnabled"(): boolean
public "sdl$setDynamicLightEnabled"(enabled: boolean): void
public "self"(): $BlockEntity
public "serverTick"(): void
public "setAsyncSyncing"(syncing: boolean): void
public "setBlocked"(direction0: $Direction$$Type, boolean1: boolean): void
public "setBlockedConnections"(int0: integer): void
public "setConnection"(direction0: $Direction$$Type, boolean1: boolean, boolean2: boolean): void
public "setConnections"(int0: integer): void
public "setFrameMaterial"(material0: $Material$$Type): void
public "setPaintingColor"(int0: integer): void
public "shouldRenderGrid"(player0: $Player$$Type, blockPos1: $BlockPos$$Type, blockState2: $BlockState$$Type, itemStack3: $ItemStack$$Type, set4: $Set$$Type<$GTToolType$$Type>): boolean
public "sideTips"(player0: $Player$$Type, blockPos1: $BlockPos$$Type, blockState2: $BlockState$$Type, set3: $Set$$Type<$GTToolType$$Type>, direction4: $Direction$$Type): $ResourceTexture
public "subscribeServerTick"(runnable0: $Runnable$$Type): $TickableSubscription
public "subscribeServerTick"(tickableSubscription0: $TickableSubscription$$Type, runnable1: $Runnable$$Type): $TickableSubscription
public "syncNow"(force: boolean): void
public "unsubscribe"(tickableSubscription0: $TickableSubscription$$Type): void
public "useAsyncThread"(): boolean
public "writeCustomSyncData"(tag: $CompoundTag$$Type): void
get "blockEntityType"(): $BlockEntityType<any>
get "blockedConnections"(): integer
get "connections"(): integer
get "currentPos"(): $BlockPos
get "defaultPaintingColor"(): integer
get "fieldHolder"(): $ManagedFieldHolder
get "frameMaterial"(): $Material
get "itemsRequiredToPaste"(): $List<$ItemStack>
get "modelData"(): $ModelData
get "nodeData"(): NodeDataType
get "nonLazyFields"(): $IRef[]
get "numConnections"(): integer
get "offsetTimer"(): long
get "paintingColor"(): integer
get "pipeBlock"(): $PipeBlock<PipeType, NodeDataType, any>
get "pipeLevel"(): $Level
get "pipeNet"(): $PipeNet<NodeDataType>
get "pipePos"(): $BlockPos
get "pipeTuneTool"(): $GTToolType
get "pipeType"(): PipeType
get "realColor"(): integer
get "renderBoundingBox"(): $AABB
get "rootStorage"(): $IManagedStorage
get "syncTag"(): string
get "visualConnections"(): integer
get "asyncSyncing"(): boolean
get "inValid"(): boolean
get "painted"(): boolean
get "remote"(): boolean
set "asyncSyncing"(value: boolean)
set "blockedConnections"(value: integer)
set "connections"(value: integer)
set "frameMaterial"(value: $Material$$Type)
set "paintingColor"(value: integer)
}
}

declare module "com.gregtechceu.gtceu.api.blockentity.IPaintable" {
import { $BooleanProperty } from "net.minecraft.world.level.block.state.properties.BooleanProperty"

export interface $IPaintable {
"getDefaultPaintingColor"(): integer
"getPaintingColor"(): integer
"getRealColor"(): integer
"isPainted"(): boolean
"setPaintingColor"(int0: integer): void
get "defaultPaintingColor"(): integer
get "paintingColor"(): integer
get "realColor"(): integer
get "painted"(): boolean
set "paintingColor"(value: integer)
}

export namespace $IPaintable {
const IS_PAINTED_PROPERTY: $BooleanProperty
const UNPAINTED_COLOR: integer
}
export abstract class $IPaintable$$Static implements $IPaintable {
static readonly "IS_PAINTED_PROPERTY": $BooleanProperty
static readonly "UNPAINTED_COLOR": integer

}
}

