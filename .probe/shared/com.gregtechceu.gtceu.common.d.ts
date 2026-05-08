declare module "com.gregtechceu.gtceu.common.blockentity.CableBlockEntity" {
import { $IFieldUpdateListener$$Type } from "com.lowdragmc.lowdraglib.syncdata.IFieldUpdateListener"
import { $AABB } from "net.minecraft.world.phys.AABB"
import { $Direction$$Type } from "net.minecraft.core.Direction"
import { $Connection$$Type } from "net.minecraft.network.Connection"
import { $BlockState$$Type } from "net.minecraft.world.level.block.state.BlockState"
import { $PipeBlockEntity } from "com.gregtechceu.gtceu.api.blockentity.PipeBlockEntity"
import { $Runnable$$Type } from "java.lang.Runnable"
import { $LazyOptional } from "net.minecraftforge.common.util.LazyOptional"
import { $TrackedData, $TrackedData$$Type } from "dev.corgitaco.dataanchor.data.TrackedData"
import { $Insulation } from "com.gregtechceu.gtceu.common.pipelike.cable.Insulation"
import { $IEnergyContainer } from "com.gregtechceu.gtceu.api.capability.IEnergyContainer"
import { $IRef, $IRef$$Type } from "com.lowdragmc.lowdraglib.syncdata.managed.IRef"
import { $TrackedDataRegistry$$Type } from "dev.corgitaco.dataanchor.data.registry.TrackedDataRegistry"
import { $PipeNet } from "com.gregtechceu.gtceu.api.pipenet.PipeNet"
import { $Component } from "net.minecraft.network.chat.Component"
import { $WireProperties } from "com.gregtechceu.gtceu.api.data.chemical.material.properties.WireProperties"
import { $ClientboundBlockEntityDataPacket$$Type } from "net.minecraft.network.protocol.game.ClientboundBlockEntityDataPacket"
import { $CableBlock } from "com.gregtechceu.gtceu.common.block.CableBlock"
import { $ModelData } from "net.minecraftforge.client.model.data.ModelData"
import { $BlockEntity } from "net.minecraft.world.level.block.entity.BlockEntity"
import { $Capability$$Type } from "net.minecraftforge.common.capabilities.Capability"
import { $Player$$Type } from "net.minecraft.world.entity.player.Player"
import { $List } from "java.util.List"
import { $TickableSubscription, $TickableSubscription$$Type } from "com.gregtechceu.gtceu.api.machine.TickableSubscription"
import { $CompoundTag$$Type } from "net.minecraft.nbt.CompoundTag"
import { $TrackedDataContainer } from "dev.corgitaco.dataanchor.data.TrackedDataContainer"
import { $BlockEntityType, $BlockEntityType$$Type } from "net.minecraft.world.level.block.entity.BlockEntityType"
import { $BlockPos, $BlockPos$$Type } from "net.minecraft.core.BlockPos"
import { $IDataInfoProvider } from "com.gregtechceu.gtceu.api.machine.feature.IDataInfoProvider"
import { $PortableScannerBehavior$DisplayMode$$Type } from "com.gregtechceu.gtceu.common.item.PortableScannerBehavior$DisplayMode"
import { $Level } from "net.minecraft.world.level.Level"
import { $ManagedFieldHolder } from "com.lowdragmc.lowdraglib.syncdata.field.ManagedFieldHolder"
import { $ISubscription } from "com.lowdragmc.lowdraglib.syncdata.ISubscription"

export class $CableBlockEntity extends $PipeBlockEntity<$Insulation, $WireProperties> implements $IDataInfoProvider {
static readonly "MANAGED_FIELD_HOLDER": $ManagedFieldHolder

constructor(blockEntityType0: $BlockEntityType$$Type<any>, blockPos1: $BlockPos$$Type, blockState2: $BlockState$$Type)

public "addSyncUpdateListener"<T>(name: string, listener: $IFieldUpdateListener$$Type<T>): $ISubscription
public "applyHeat"(int0: integer): void
public "asyncTick"(periodID: long): void
public "canAttachTo"(direction0: $Direction$$Type): boolean
public "canHaveBlockedFaces"(): boolean
public "checkNetwork"(): void
public "defaultServerTick"(): void
public "deserializeNBT"(compoundTag0: $CompoundTag$$Type): void
public "getAverageAmperage"(): double
public "getAverageVoltage"(): double
public "getBlockEntityType"(): $BlockEntityType<any>
public "getCapability"<T>(capability0: $Capability$$Type<T>, direction1: $Direction$$Type): $LazyOptional<T>
public "getCapability"<T>(capability0: $Capability$$Type<T>): $LazyOptional<T>
public "getCurrentMaxVoltage"(): long
public "getCurrentPos"(): $BlockPos
public "getDataInfo"(displayMode0: $PortableScannerBehavior$DisplayMode$$Type): $List<$Component>
public "getDebugInfo"(player0: $Player$$Type, int1: integer, displayMode2: $PortableScannerBehavior$DisplayMode$$Type): $List<$Component>
public "getDefaultTemp"(): integer
public "getEnergyContainer"(direction0: $Direction$$Type): $IEnergyContainer
public "getMaxAmperage"(): long
public "getMaxVoltage"(): long
public static "getMeltTemp"(): integer
public "getModelData"(): $ModelData
public "getNeighbor"(direction0: $Direction$$Type): $BlockEntity
public "getNonLazyFields"(): $IRef[]
public "getPipeBlock"(): $CableBlock
public "getPipeLevel"(): $Level
public "getPipeNet"(): $PipeNet<$WireProperties>
public "getPipePos"(): $BlockPos
public "getPipeType"(): $Insulation
public "getRealColor"(): integer
public "getRenderBoundingBox"(): $AABB
public "getSelf"(): $BlockEntity
public "getSyncTag"(): string
public "getTemperature"(): integer
public "handleUpdateTag"(compoundTag0: $CompoundTag$$Type): void
public "hasCustomOutlineRendering"(player0: $Player$$Type): boolean
public "incrementAmperage"(long0: long, long1: long): boolean
public "isAsyncSyncing"(): boolean
public "isBlocked"(direction0: $Direction$$Type): boolean
public "isConnected"(direction0: $Direction$$Type): boolean
public "isInValid"(): boolean
public "isPainted"(): boolean
public "isRemote"(): boolean
public "loadCustomPersistedData"(tag: $CompoundTag$$Type): void
public "loadManagedPersistentData"(tag: $CompoundTag$$Type): void
public static "makeBasicContainer"<O, T extends $TrackedData<O>>(registry: $TrackedDataRegistry$$Type<O, T>, o: O, isClient: boolean): $TrackedDataContainer<O, T>
public static "makeBasicContainer"<O, T extends $TrackedData<O>>(registry: $TrackedDataRegistry$$Type<O, T>, o: O, isClient: boolean, lazyLoad: boolean): $TrackedDataContainer<O, T>
public "markAsDirty"(): void
public "markDirty"(name: string): void
public static "onBlockEntityRegister"(blockEntityType0: $BlockEntityType$$Type<$CableBlockEntity$$Type>): void
public "onDataPacket"(connection0: $Connection$$Type, clientboundBlockEntityDataPacket1: $ClientboundBlockEntityDataPacket$$Type): void
public "onInValid"(): void
public "onLoad"(): void
public "onPersistedChanged"(ref: $IRef$$Type, isDirty: boolean): void
public "onSyncChanged"(ref: $IRef$$Type, isDirty: boolean): void
public "onValid"(): void
public "readCustomSyncData"(tag: $CompoundTag$$Type): void
public "requestModelDataUpdate"(): void
public "saveCustomPersistedData"(tag: $CompoundTag$$Type, forDrop: boolean): void
public "saveManagedPersistentData"(tag: $CompoundTag$$Type, forDrop: boolean): void
public "scheduleNeighborShapeUpdate"(): void
public "scheduleRender"(fieldName: string, newValue: any, oldValue: any): void
public "sdl$isDynamicLightEnabled"(): boolean
public "sdl$setDynamicLightEnabled"(enabled: boolean): void
public "self"(): $BlockEntity
public "setAsyncSyncing"(syncing: boolean): void
public "setTemperature"(int0: integer): void
public "subscribeServerTick"(tickableSubscription0: $TickableSubscription$$Type, runnable1: $Runnable$$Type): $TickableSubscription
public "syncNow"(force: boolean): void
public "useAsyncThread"(): boolean
public "writeCustomSyncData"(tag: $CompoundTag$$Type): void
get "averageAmperage"(): double
get "averageVoltage"(): double
get "blockEntityType"(): $BlockEntityType<any>
get "currentMaxVoltage"(): long
get "currentPos"(): $BlockPos
get "defaultTemp"(): integer
get "maxAmperage"(): long
get "maxVoltage"(): long
get "modelData"(): $ModelData
get "nonLazyFields"(): $IRef[]
get "pipeBlock"(): $CableBlock
get "pipeLevel"(): $Level
get "pipeNet"(): $PipeNet<$WireProperties>
get "pipePos"(): $BlockPos
get "pipeType"(): $Insulation
get "realColor"(): integer
get "renderBoundingBox"(): $AABB
get "syncTag"(): string
get "temperature"(): integer
get "asyncSyncing"(): boolean
get "inValid"(): boolean
get "painted"(): boolean
get "remote"(): boolean
set "asyncSyncing"(value: boolean)
set "temperature"(value: integer)
}
}

declare module "com.gregtechceu.gtceu.common.block.BoilerFireboxType" {
import { $ResourceLocation, $ResourceLocation$$Type } from "net.minecraft.resources.ResourceLocation"
import { $Codec } from "com.mojang.serialization.Codec"
import { $Map } from "java.util.Map"
import { $Record } from "java.lang.Record"

export class $BoilerFireboxType extends $Record {
static "BRONZE_FIREBOX": $BoilerFireboxType
static readonly "CODEC": $Codec<$BoilerFireboxType>
static readonly "FIREBOX_TYPES": $Map<string, $BoilerFireboxType>
static "STEEL_FIREBOX": $BoilerFireboxType
static "TITANIUM_FIREBOX": $BoilerFireboxType
static "TUNGSTENSTEEL_FIREBOX": $BoilerFireboxType

constructor(name: string, bottom: $ResourceLocation$$Type, top: $ResourceLocation$$Type, side: $ResourceLocation$$Type)

public "bottom"(): $ResourceLocation
public "name"(): string
public "side"(): $ResourceLocation
public "top"(): $ResourceLocation
}
}

declare module "com.gregtechceu.gtceu.common.data.GTItems$StackProperty" {
import { $ItemStack$$Type } from "net.minecraft.world.item.ItemStack"

export interface $GTItems$StackProperty {
"apply"(itemStack0: $ItemStack$$Type): float
}

export namespace $GTItems$StackProperty {
const probejs$$marker: never
}
export abstract class $GTItems$StackProperty$$Static implements $GTItems$StackProperty {
}
}

declare module "com.gregtechceu.gtceu.common.machine.owner.PlayerOwner" {
import { $MachineOwner } from "com.gregtechceu.gtceu.common.machine.owner.MachineOwner"
import { $UUID$$Type } from "java.util.UUID"

export class $PlayerOwner extends $MachineOwner {
constructor(uUID0: $UUID$$Type)

}
}

declare module "com.gregtechceu.gtceu.common.block.GTStandingSignBlock" {
import { $ResourceLocation } from "net.minecraft.resources.ResourceLocation"
import { $BlockEntityTicker } from "net.minecraft.world.level.block.entity.BlockEntityTicker"
import { $LivingEntity$$Type } from "net.minecraft.world.entity.LivingEntity"
import { $Direction, $Direction$$Type } from "net.minecraft.core.Direction"
import { $EntityType$$Type } from "net.minecraft.world.entity.EntityType"
import { $Item$$Type } from "net.minecraft.world.item.Item"
import { $BlockState, $BlockState$$Type } from "net.minecraft.world.level.block.state.BlockState"
import { $SpawnPlacements$Type$$Type } from "net.minecraft.world.entity.SpawnPlacements$Type"
import { $BlockBehaviour$Properties$$Type } from "net.minecraft.world.level.block.state.BlockBehaviour$Properties"
import { $ServerLevel$$Type } from "net.minecraft.server.level.ServerLevel"
import { $BlockGetter$$Type } from "net.minecraft.world.level.BlockGetter"
import { $MapColor, $MapColor$$Type } from "net.minecraft.world.level.material.MapColor"
import { $PushReaction } from "net.minecraft.world.level.material.PushReaction"
import { $Rotation$$Type } from "net.minecraft.world.level.block.Rotation"
import { $Holder } from "net.minecraft.core.Holder"
import { $ToolAction$$Type } from "net.minecraftforge.common.ToolAction"
import { $BiConsumer$$Type } from "java.util.function.BiConsumer"
import { $Fluid$$Type } from "net.minecraft.world.level.material.Fluid"
import { $UseOnContext$$Type } from "net.minecraft.world.item.context.UseOnContext"
import { $StandingSignBlock } from "net.minecraft.world.level.block.StandingSignBlock"
import { $BlockAndTintGetter$$Type } from "net.minecraft.world.level.BlockAndTintGetter"
import { $BlockPathTypes, $BlockPathTypes$$Type } from "net.minecraft.world.level.pathfinder.BlockPathTypes"
import { $RandomSource$$Type } from "net.minecraft.util.RandomSource"
import { $LevelReader$$Type } from "net.minecraft.world.level.LevelReader"
import { $BlockEntity, $BlockEntity$$Type } from "net.minecraft.world.level.block.entity.BlockEntity"
import { $TreeConfiguration$$Type } from "net.minecraft.world.level.levelgen.feature.configurations.TreeConfiguration"
import { $Explosion$$Type } from "net.minecraft.world.level.Explosion"
import { $SoundType } from "net.minecraft.world.level.block.SoundType"
import { $Player$$Type } from "net.minecraft.world.entity.player.Player"
import { $HitResult$$Type } from "net.minecraft.world.phys.HitResult"
import { $FeatureFlagSet$$Type } from "net.minecraft.world.flag.FeatureFlagSet"
import { $List } from "java.util.List"
import { $Entity$$Type } from "net.minecraft.world.entity.Entity"
import { $BlockPos$$Type } from "net.minecraft.core.BlockPos"
import { $SoundEvent } from "net.minecraft.sounds.SoundEvent"
import { $Vec3, $Vec3$$Type } from "net.minecraft.world.phys.Vec3"
import { $BlockEntityType$$Type } from "net.minecraft.world.level.block.entity.BlockEntityType"
import { $SignalGetter$$Type } from "net.minecraft.world.level.SignalGetter"
import { $FluidState$$Type } from "net.minecraft.world.level.material.FluidState"
import { $GameEventListener } from "net.minecraft.world.level.gameevent.GameEventListener"
import { $Optional } from "java.util.Optional"
import { $LevelAccessor$$Type } from "net.minecraft.world.level.LevelAccessor"
import { $WoodType$$Type } from "net.minecraft.world.level.block.state.properties.WoodType"
import { $Block, $Block$$Type } from "net.minecraft.world.level.block.Block"
import { $ItemStack, $ItemStack$$Type } from "net.minecraft.world.item.ItemStack"
import { $Level$$Type } from "net.minecraft.world.level.Level"
import { $Mob$$Type } from "net.minecraft.world.entity.Mob"

export class $GTStandingSignBlock extends $StandingSignBlock {
constructor(properties0: $BlockBehaviour$Properties$$Type, woodType1: $WoodType$$Type)

public "addLandingEffects"(blockState0: $BlockState$$Type, serverLevel1: $ServerLevel$$Type, blockPos2: $BlockPos$$Type, blockState3: $BlockState$$Type, livingEntity4: $LivingEntity$$Type, int5: integer): boolean
public "addRunningEffects"(blockState0: $BlockState$$Type, level1: $Level$$Type, blockPos2: $BlockPos$$Type, entity3: $Entity$$Type): boolean
public "arch$holder"(): $Holder<$Block>
public "arch$registryName"(): $ResourceLocation
public "canBeHydrated"(blockState0: $BlockState$$Type, blockGetter1: $BlockGetter$$Type, blockPos2: $BlockPos$$Type, fluidState3: $FluidState$$Type, blockPos4: $BlockPos$$Type): boolean
public "canConnectRedstone"(blockState0: $BlockState$$Type, blockGetter1: $BlockGetter$$Type, blockPos2: $BlockPos$$Type, direction3: $Direction$$Type): boolean
public "canDropFromExplosion"(blockState0: $BlockState$$Type, blockGetter1: $BlockGetter$$Type, blockPos2: $BlockPos$$Type, explosion3: $Explosion$$Type): boolean
public "canEntityDestroy"(blockState0: $BlockState$$Type, blockGetter1: $BlockGetter$$Type, blockPos2: $BlockPos$$Type, entity3: $Entity$$Type): boolean
public "canHarvestBlock"(blockState0: $BlockState$$Type, blockGetter1: $BlockGetter$$Type, blockPos2: $BlockPos$$Type, player3: $Player$$Type): boolean
public "canPlaceLiquid"(blockGetter0: $BlockGetter$$Type, blockPos1: $BlockPos$$Type, blockState2: $BlockState$$Type, fluid3: $Fluid$$Type): boolean
public "canStickTo"(blockState0: $BlockState$$Type, blockState1: $BlockState$$Type): boolean
public "collisionExtendsVertically"(blockState0: $BlockState$$Type, blockGetter1: $BlockGetter$$Type, blockPos2: $BlockPos$$Type, entity3: $Entity$$Type): boolean
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
public "getListener"<T extends $BlockEntity>(serverLevel0: $ServerLevel$$Type, t1: T): $GameEventListener
public "getMapColor"(blockState0: $BlockState$$Type, blockGetter1: $BlockGetter$$Type, blockPos2: $BlockPos$$Type, mapColor3: $MapColor$$Type): $MapColor
public "getMod"(): string
public "getPickupSound"(): $Optional<$SoundEvent>
public "getPickupSound"(blockState0: $BlockState$$Type): $Optional<$SoundEvent>
public "getPistonPushReaction"(blockState0: $BlockState$$Type): $PushReaction
public "getRespawnPosition"(blockState0: $BlockState$$Type, entityType1: $EntityType$$Type<any>, levelReader2: $LevelReader$$Type, blockPos3: $BlockPos$$Type, float4: float, livingEntity5: $LivingEntity$$Type): $Optional<$Vec3>
public "getSoundType"(blockState0: $BlockState$$Type, levelReader1: $LevelReader$$Type, blockPos2: $BlockPos$$Type, entity3: $Entity$$Type): $SoundType
public "getStateAtViewpoint"(blockState0: $BlockState$$Type, blockGetter1: $BlockGetter$$Type, blockPos2: $BlockPos$$Type, vec33: $Vec3$$Type): $BlockState
public "getTicker"<T extends $BlockEntity>(level0: $Level$$Type, blockState1: $BlockState$$Type, blockEntityType2: $BlockEntityType$$Type<T>): $BlockEntityTicker<T>
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
public "pickupBlock"(levelAccessor0: $LevelAccessor$$Type, blockPos1: $BlockPos$$Type, blockState2: $BlockState$$Type): $ItemStack
public "placeLiquid"(levelAccessor0: $LevelAccessor$$Type, blockPos1: $BlockPos$$Type, blockState2: $BlockState$$Type, fluidState3: $FluidState$$Type): boolean
public "rotate"(blockState0: $BlockState$$Type, levelAccessor1: $LevelAccessor$$Type, blockPos2: $BlockPos$$Type, rotation3: $Rotation$$Type): $BlockState
public "setBedOccupied"(blockState0: $BlockState$$Type, level1: $Level$$Type, blockPos2: $BlockPos$$Type, livingEntity3: $LivingEntity$$Type, boolean4: boolean): void
public "setDestroySpeed"(v: float): void
public "setLightEmission"(v: integer): void
public "setRequiresTool"(v: boolean): void
public "shouldCheckWeakPower"(blockState0: $BlockState$$Type, signalGetter1: $SignalGetter$$Type, blockPos2: $BlockPos$$Type, direction3: $Direction$$Type): boolean
public "shouldDisplayFluidOverlay"(blockState0: $BlockState$$Type, blockAndTintGetter1: $BlockAndTintGetter$$Type, blockPos2: $BlockPos$$Type, fluidState3: $FluidState$$Type): boolean
public "supportsExternalFaceHiding"(blockState0: $BlockState$$Type): boolean
get "blockStates"(): $List<$BlockState>
get "mod"(): string
get "pickupSound"(): $Optional<$SoundEvent>
set "destroySpeed"(value: float)
set "lightEmission"(value: integer)
set "requiresTool"(value: boolean)
}
}

declare module "com.gregtechceu.gtceu.common.block.FluidPipeBlock" {
import { $ResourceLocation } from "net.minecraft.resources.ResourceLocation"
import { $LivingEntity$$Type } from "net.minecraft.world.entity.LivingEntity"
import { $Direction, $Direction$$Type } from "net.minecraft.core.Direction"
import { $Item$$Type } from "net.minecraft.world.item.Item"
import { $PipeBlockEntity } from "com.gregtechceu.gtceu.api.blockentity.PipeBlockEntity"
import { $SpawnPlacements$Type$$Type } from "net.minecraft.world.entity.SpawnPlacements$Type"
import { $BlockBehaviour$Properties$$Type } from "net.minecraft.world.level.block.state.BlockBehaviour$Properties"
import { $BlockGetter$$Type } from "net.minecraft.world.level.BlockGetter"
import { $MapColor, $MapColor$$Type } from "net.minecraft.world.level.material.MapColor"
import { $Rotation$$Type } from "net.minecraft.world.level.block.Rotation"
import { $Holder } from "net.minecraft.core.Holder"
import { $MaterialPipeBlock } from "com.gregtechceu.gtceu.api.block.MaterialPipeBlock"
import { $BlockPathTypes, $BlockPathTypes$$Type } from "net.minecraft.world.level.pathfinder.BlockPathTypes"
import { $RandomSource$$Type } from "net.minecraft.util.RandomSource"
import { $LevelReader$$Type } from "net.minecraft.world.level.LevelReader"
import { $BlockEntity, $BlockEntity$$Type } from "net.minecraft.world.level.block.entity.BlockEntity"
import { $TreeConfiguration$$Type } from "net.minecraft.world.level.levelgen.feature.configurations.TreeConfiguration"
import { $SoundType } from "net.minecraft.world.level.block.SoundType"
import { $Player$$Type } from "net.minecraft.world.entity.player.Player"
import { $FeatureFlagSet$$Type } from "net.minecraft.world.flag.FeatureFlagSet"
import { $List } from "java.util.List"
import { $BlockPos$$Type } from "net.minecraft.core.BlockPos"
import { $BlockEntityType } from "net.minecraft.world.level.block.entity.BlockEntityType"
import { $SoundEvent } from "net.minecraft.sounds.SoundEvent"
import { $SignalGetter$$Type } from "net.minecraft.world.level.SignalGetter"
import { $LevelFluidPipeNet } from "com.gregtechceu.gtceu.common.pipelike.fluidpipe.LevelFluidPipeNet"
import { $FluidState$$Type } from "net.minecraft.world.level.material.FluidState"
import { $GameEventListener } from "net.minecraft.world.level.gameevent.GameEventListener"
import { $Optional } from "java.util.Optional"
import { $LevelAccessor$$Type } from "net.minecraft.world.level.LevelAccessor"
import { $ItemStack, $ItemStack$$Type } from "net.minecraft.world.item.ItemStack"
import { $Material$$Type } from "com.gregtechceu.gtceu.api.data.chemical.material.Material"
import { $Level$$Type } from "net.minecraft.world.level.Level"
import { $EntityType$$Type } from "net.minecraft.world.entity.EntityType"
import { $BlockState, $BlockState$$Type } from "net.minecraft.world.level.block.state.BlockState"
import { $ServerLevel$$Type } from "net.minecraft.server.level.ServerLevel"
import { $PushReaction } from "net.minecraft.world.level.material.PushReaction"
import { $ToolAction$$Type } from "net.minecraftforge.common.ToolAction"
import { $BiConsumer$$Type } from "java.util.function.BiConsumer"
import { $Fluid$$Type } from "net.minecraft.world.level.material.Fluid"
import { $UseOnContext$$Type } from "net.minecraft.world.item.context.UseOnContext"
import { $BlockAndTintGetter$$Type } from "net.minecraft.world.level.BlockAndTintGetter"
import { $Explosion$$Type } from "net.minecraft.world.level.Explosion"
import { $FluidPipeProperties } from "com.gregtechceu.gtceu.api.data.chemical.material.properties.FluidPipeProperties"
import { $HitResult$$Type } from "net.minecraft.world.phys.HitResult"
import { $Entity$$Type } from "net.minecraft.world.entity.Entity"
import { $FluidPipeType, $FluidPipeType$$Type } from "com.gregtechceu.gtceu.common.pipelike.fluidpipe.FluidPipeType"
import { $Vec3, $Vec3$$Type } from "net.minecraft.world.phys.Vec3"
import { $Block, $Block$$Type } from "net.minecraft.world.level.block.Block"
import { $Mob$$Type } from "net.minecraft.world.entity.Mob"

export class $FluidPipeBlock extends $MaterialPipeBlock<$FluidPipeType, $FluidPipeProperties, $LevelFluidPipeNet> {
constructor(properties0: $BlockBehaviour$Properties$$Type, fluidPipeType1: $FluidPipeType$$Type, material2: $Material$$Type)

public "addLandingEffects"(blockState0: $BlockState$$Type, serverLevel1: $ServerLevel$$Type, blockPos2: $BlockPos$$Type, blockState3: $BlockState$$Type, livingEntity4: $LivingEntity$$Type, int5: integer): boolean
public "addRunningEffects"(blockState0: $BlockState$$Type, level1: $Level$$Type, blockPos2: $BlockPos$$Type, entity3: $Entity$$Type): boolean
public "arch$holder"(): $Holder<$Block>
public "arch$registryName"(): $ResourceLocation
public "canBeHydrated"(blockState0: $BlockState$$Type, blockGetter1: $BlockGetter$$Type, blockPos2: $BlockPos$$Type, fluidState3: $FluidState$$Type, blockPos4: $BlockPos$$Type): boolean
public "canConnectRedstone"(blockState0: $BlockState$$Type, blockGetter1: $BlockGetter$$Type, blockPos2: $BlockPos$$Type, direction3: $Direction$$Type): boolean
public "canDropFromExplosion"(blockState0: $BlockState$$Type, blockGetter1: $BlockGetter$$Type, blockPos2: $BlockPos$$Type, explosion3: $Explosion$$Type): boolean
public "canEntityDestroy"(blockState0: $BlockState$$Type, blockGetter1: $BlockGetter$$Type, blockPos2: $BlockPos$$Type, entity3: $Entity$$Type): boolean
public "canHarvestBlock"(blockState0: $BlockState$$Type, blockGetter1: $BlockGetter$$Type, blockPos2: $BlockPos$$Type, player3: $Player$$Type): boolean
public "canPlaceLiquid"(blockGetter0: $BlockGetter$$Type, blockPos1: $BlockPos$$Type, blockState2: $BlockState$$Type, fluid3: $Fluid$$Type): boolean
public "canStickTo"(blockState0: $BlockState$$Type, blockState1: $BlockState$$Type): boolean
public "collisionExtendsVertically"(blockState0: $BlockState$$Type, blockGetter1: $BlockGetter$$Type, blockPos2: $BlockPos$$Type, entity3: $Entity$$Type): boolean
public static "get"(item: $Item$$Type): $ResourceLocation
public static "get"(block: $Block$$Type): $ResourceLocation
public static "get"(state: $BlockState$$Type): $ResourceLocation
public static "get"(entity: $Entity$$Type): $ResourceLocation
public static "get"(stack: $ItemStack$$Type): $ResourceLocation
public static "get"(type: $EntityType$$Type<any>): $ResourceLocation
public "getAdjacentBlockPathType"(blockState0: $BlockState$$Type, blockGetter1: $BlockGetter$$Type, blockPos2: $BlockPos$$Type, mob3: $Mob$$Type, blockPathTypes4: $BlockPathTypes$$Type): $BlockPathTypes
public "getBeaconColorMultiplier"(blockState0: $BlockState$$Type, levelReader1: $LevelReader$$Type, blockPos2: $BlockPos$$Type, blockPos3: $BlockPos$$Type): float[]
public "getBedDirection"(blockState0: $BlockState$$Type, levelReader1: $LevelReader$$Type, blockPos2: $BlockPos$$Type): $Direction
public "getBlockEntityType"(): $BlockEntityType<$PipeBlockEntity<$FluidPipeType, $FluidPipeProperties>>
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
public "getListener"<T extends $BlockEntity>(serverLevel0: $ServerLevel$$Type, t1: T): $GameEventListener
public "getMapColor"(blockState0: $BlockState$$Type, blockGetter1: $BlockGetter$$Type, blockPos2: $BlockPos$$Type, mapColor3: $MapColor$$Type): $MapColor
public "getMod"(): string
public "getPickupSound"(): $Optional<$SoundEvent>
public "getPickupSound"(blockState0: $BlockState$$Type): $Optional<$SoundEvent>
public "getPistonPushReaction"(blockState0: $BlockState$$Type): $PushReaction
public "getRespawnPosition"(blockState0: $BlockState$$Type, entityType1: $EntityType$$Type<any>, levelReader2: $LevelReader$$Type, blockPos3: $BlockPos$$Type, float4: float, livingEntity5: $LivingEntity$$Type): $Optional<$Vec3>
public "getSoundType"(blockState0: $BlockState$$Type, levelReader1: $LevelReader$$Type, blockPos2: $BlockPos$$Type, entity3: $Entity$$Type): $SoundType
public "getStateAtViewpoint"(blockState0: $BlockState$$Type, blockGetter1: $BlockGetter$$Type, blockPos2: $BlockPos$$Type, vec33: $Vec3$$Type): $BlockState
public "getToolModifiedState"(blockState0: $BlockState$$Type, useOnContext1: $UseOnContext$$Type, toolAction2: $ToolAction$$Type, boolean3: boolean): $BlockState
public "getWeakChanges"(blockState0: $BlockState$$Type, levelReader1: $LevelReader$$Type, blockPos2: $BlockPos$$Type): boolean
public "getWorldPipeNet"(serverLevel0: $ServerLevel$$Type): $LevelFluidPipeNet
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
public "onTreeGrow"(blockState0: $BlockState$$Type, levelReader1: $LevelReader$$Type, biConsumer2: $BiConsumer$$Type<$BlockPos$$Type, $BlockState$$Type>, randomSource3: $RandomSource$$Type, blockPos4: $BlockPos$$Type, treeConfiguration5: $TreeConfiguration$$Type): boolean
public "pickupBlock"(levelAccessor0: $LevelAccessor$$Type, blockPos1: $BlockPos$$Type, blockState2: $BlockState$$Type): $ItemStack
public "placeLiquid"(levelAccessor0: $LevelAccessor$$Type, blockPos1: $BlockPos$$Type, blockState2: $BlockState$$Type, fluidState3: $FluidState$$Type): boolean
public "rotate"(blockState0: $BlockState$$Type, levelAccessor1: $LevelAccessor$$Type, blockPos2: $BlockPos$$Type, rotation3: $Rotation$$Type): $BlockState
public "setBedOccupied"(blockState0: $BlockState$$Type, level1: $Level$$Type, blockPos2: $BlockPos$$Type, livingEntity3: $LivingEntity$$Type, boolean4: boolean): void
public "setDestroySpeed"(v: float): void
public "setLightEmission"(v: integer): void
public "setRequiresTool"(v: boolean): void
public "shouldCheckWeakPower"(blockState0: $BlockState$$Type, signalGetter1: $SignalGetter$$Type, blockPos2: $BlockPos$$Type, direction3: $Direction$$Type): boolean
public "shouldDisplayFluidOverlay"(blockState0: $BlockState$$Type, blockAndTintGetter1: $BlockAndTintGetter$$Type, blockPos2: $BlockPos$$Type, fluidState3: $FluidState$$Type): boolean
public "supportsExternalFaceHiding"(blockState0: $BlockState$$Type): boolean
get "blockEntityType"(): $BlockEntityType<$PipeBlockEntity<$FluidPipeType, $FluidPipeProperties>>
get "blockStates"(): $List<$BlockState>
get "mod"(): string
get "pickupSound"(): $Optional<$SoundEvent>
set "destroySpeed"(value: float)
set "lightEmission"(value: integer)
set "requiresTool"(value: boolean)
}
}

declare module "com.gregtechceu.gtceu.common.data.GTSoundEntries" {
import { $SoundEntry } from "com.gregtechceu.gtceu.api.sound.SoundEntry"

export class $GTSoundEntries {
static readonly "ARC": $SoundEntry
static readonly "ASSEMBLER": $SoundEntry
static readonly "BATH": $SoundEntry
static readonly "BOILER": $SoundEntry
static readonly "CENTRIFUGE": $SoundEntry
static readonly "CHAINSAW_TOOL": $SoundEntry
static readonly "CHEMICAL": $SoundEntry
static readonly "COMBUSTION": $SoundEntry
static readonly "COMPRESSOR": $SoundEntry
static readonly "COMPUTATION": $SoundEntry
static readonly "COOLING": $SoundEntry
static readonly "CUT": $SoundEntry
static readonly "DRILL_TOOL": $SoundEntry
static readonly "ELECTROLYZER": $SoundEntry
static readonly "FILE_TOOL": $SoundEntry
static readonly "FIRE": $SoundEntry
static readonly "FORGE_HAMMER": $SoundEntry
static readonly "FURNACE": $SoundEntry
static readonly "JET_ENGINE": $SoundEntry
static readonly "MACERATOR": $SoundEntry
static readonly "METAL_PIPE": $SoundEntry
static readonly "MINER": $SoundEntry
static readonly "MIXER": $SoundEntry
static readonly "MORTAR_TOOL": $SoundEntry
static readonly "MOTOR": $SoundEntry
static readonly "PLUNGER_TOOL": $SoundEntry
static readonly "PORTABLE_SCANNER": $SoundEntry
static readonly "PORTAL_CLOSING": $SoundEntry
static readonly "PORTAL_OPENING": $SoundEntry
static readonly "REPLICATOR": $SoundEntry
static readonly "SAW_TOOL": $SoundEntry
static readonly "SCIENCE": $SoundEntry
static readonly "SCREWDRIVER_TOOL": $SoundEntry
static readonly "SOFT_MALLET_TOOL": $SoundEntry
static readonly "SPRAY_CAN_TOOL": $SoundEntry
static readonly "SUS_RECORD": $SoundEntry
static readonly "TURBINE": $SoundEntry
static readonly "WIRECUTTER_TOOL": $SoundEntry
static readonly "WRENCH_TOOL": $SoundEntry

constructor()

public static "init"(): void
}
}

declare module "com.gregtechceu.gtceu.common.data.GTRecipeTypes" {
import { $GTRecipeType } from "com.gregtechceu.gtceu.api.recipe.GTRecipeType"
import { $RecipeType$$Type } from "net.minecraft.world.item.crafting.RecipeType"

export class $GTRecipeTypes {
static readonly "AIR_SCRUBBER_RECIPES": $GTRecipeType
static readonly "ALLOY_SMELTER_RECIPES": $GTRecipeType
static readonly "ARC_FURNACE_RECIPES": $GTRecipeType
static readonly "ASSEMBLER_RECIPES": $GTRecipeType
static readonly "ASSEMBLY_LINE_RECIPES": $GTRecipeType
static readonly "AUTOCLAVE_RECIPES": $GTRecipeType
static readonly "BENDER_RECIPES": $GTRecipeType
static readonly "BLAST_RECIPES": $GTRecipeType
static readonly "BREWING_RECIPES": $GTRecipeType
static readonly "CANNER_RECIPES": $GTRecipeType
static readonly "CENTRIFUGE_RECIPES": $GTRecipeType
static readonly "CHEMICAL_BATH_RECIPES": $GTRecipeType
static readonly "CHEMICAL_RECIPES": $GTRecipeType
static readonly "CIRCUIT_ASSEMBLER_RECIPES": $GTRecipeType
static readonly "COKE_OVEN_RECIPES": $GTRecipeType
static readonly "COMBUSTION_GENERATOR_FUELS": $GTRecipeType
static readonly "COMPRESSOR_RECIPES": $GTRecipeType
static readonly "CRACKING_RECIPES": $GTRecipeType
static readonly "CUTTER_RECIPES": $GTRecipeType
static readonly "DISTILLATION_RECIPES": $GTRecipeType
static readonly "DISTILLERY_RECIPES": $GTRecipeType
static readonly "DUMMY": string
static readonly "DUMMY_RECIPES": $GTRecipeType
static readonly "ELECTRIC": string
static readonly "ELECTROLYZER_RECIPES": $GTRecipeType
static readonly "ELECTROMAGNETIC_SEPARATOR_RECIPES": $GTRecipeType
static readonly "EXTRACTOR_RECIPES": $GTRecipeType
static readonly "EXTRUDER_RECIPES": $GTRecipeType
static readonly "FERMENTING_RECIPES": $GTRecipeType
static readonly "FLUID_HEATER_RECIPES": $GTRecipeType
static readonly "FLUID_SOLIDFICATION_RECIPES": $GTRecipeType
static readonly "FORGE_HAMMER_RECIPES": $GTRecipeType
static readonly "FORMING_PRESS_RECIPES": $GTRecipeType
static readonly "FURNACE_RECIPES": $GTRecipeType
static readonly "FUSION_RECIPES": $GTRecipeType
static readonly "GAS_COLLECTOR_RECIPES": $GTRecipeType
static readonly "GAS_TURBINE_FUELS": $GTRecipeType
static readonly "GENERATOR": string
static readonly "IMPLOSION_RECIPES": $GTRecipeType
static readonly "LARGE_BOILER_RECIPES": $GTRecipeType
static readonly "LARGE_CHEMICAL_RECIPES": $GTRecipeType
static readonly "LASER_ENGRAVER_RECIPES": $GTRecipeType
static readonly "LATHE_RECIPES": $GTRecipeType
static readonly "MACERATOR_RECIPES": $GTRecipeType
static readonly "MIXER_RECIPES": $GTRecipeType
static readonly "MULTIBLOCK": string
static readonly "ORE_WASHER_RECIPES": $GTRecipeType
static readonly "PACKER_RECIPES": $GTRecipeType
static readonly "PLASMA_GENERATOR_FUELS": $GTRecipeType
static readonly "POLARIZER_RECIPES": $GTRecipeType
static readonly "PRIMITIVE_BLAST_FURNACE_RECIPES": $GTRecipeType
static readonly "PYROLYSE_RECIPES": $GTRecipeType
static readonly "RESEARCH_STATION_RECIPES": $GTRecipeType
static readonly "ROCK_BREAKER_RECIPES": $GTRecipeType
static readonly "SCANNER_RECIPES": $GTRecipeType
static readonly "SIFTER_RECIPES": $GTRecipeType
static readonly "STEAM": string
static readonly "STEAM_BOILER_RECIPES": $GTRecipeType
static readonly "STEAM_TURBINE_FUELS": $GTRecipeType
static readonly "THERMAL_CENTRIFUGE_RECIPES": $GTRecipeType
static readonly "VACUUM_RECIPES": $GTRecipeType
static readonly "WIREMILL_RECIPES": $GTRecipeType

constructor()

public static "get"(string0: string): $GTRecipeType
public static "init"(): void
public static "register"(string0: string, string1: string, ...recipeType2s: $RecipeType$$Type<any>[]): $GTRecipeType
}
}

declare module "com.gregtechceu.gtceu.common.block.GTCeilingHangingSignBlock" {
import { $ResourceLocation } from "net.minecraft.resources.ResourceLocation"
import { $BlockEntityTicker } from "net.minecraft.world.level.block.entity.BlockEntityTicker"
import { $LivingEntity$$Type } from "net.minecraft.world.entity.LivingEntity"
import { $Direction, $Direction$$Type } from "net.minecraft.core.Direction"
import { $EntityType$$Type } from "net.minecraft.world.entity.EntityType"
import { $Item$$Type } from "net.minecraft.world.item.Item"
import { $BlockState, $BlockState$$Type } from "net.minecraft.world.level.block.state.BlockState"
import { $SpawnPlacements$Type$$Type } from "net.minecraft.world.entity.SpawnPlacements$Type"
import { $BlockBehaviour$Properties$$Type } from "net.minecraft.world.level.block.state.BlockBehaviour$Properties"
import { $ServerLevel$$Type } from "net.minecraft.server.level.ServerLevel"
import { $BlockGetter$$Type } from "net.minecraft.world.level.BlockGetter"
import { $MapColor, $MapColor$$Type } from "net.minecraft.world.level.material.MapColor"
import { $PushReaction } from "net.minecraft.world.level.material.PushReaction"
import { $Rotation$$Type } from "net.minecraft.world.level.block.Rotation"
import { $Holder } from "net.minecraft.core.Holder"
import { $ToolAction$$Type } from "net.minecraftforge.common.ToolAction"
import { $BiConsumer$$Type } from "java.util.function.BiConsumer"
import { $Fluid$$Type } from "net.minecraft.world.level.material.Fluid"
import { $UseOnContext$$Type } from "net.minecraft.world.item.context.UseOnContext"
import { $BlockAndTintGetter$$Type } from "net.minecraft.world.level.BlockAndTintGetter"
import { $CeilingHangingSignBlock } from "net.minecraft.world.level.block.CeilingHangingSignBlock"
import { $BlockPathTypes, $BlockPathTypes$$Type } from "net.minecraft.world.level.pathfinder.BlockPathTypes"
import { $RandomSource$$Type } from "net.minecraft.util.RandomSource"
import { $LevelReader$$Type } from "net.minecraft.world.level.LevelReader"
import { $BlockEntity, $BlockEntity$$Type } from "net.minecraft.world.level.block.entity.BlockEntity"
import { $TreeConfiguration$$Type } from "net.minecraft.world.level.levelgen.feature.configurations.TreeConfiguration"
import { $Explosion$$Type } from "net.minecraft.world.level.Explosion"
import { $SoundType } from "net.minecraft.world.level.block.SoundType"
import { $Player$$Type } from "net.minecraft.world.entity.player.Player"
import { $HitResult$$Type } from "net.minecraft.world.phys.HitResult"
import { $FeatureFlagSet$$Type } from "net.minecraft.world.flag.FeatureFlagSet"
import { $List } from "java.util.List"
import { $Entity$$Type } from "net.minecraft.world.entity.Entity"
import { $BlockPos$$Type } from "net.minecraft.core.BlockPos"
import { $SoundEvent } from "net.minecraft.sounds.SoundEvent"
import { $Vec3, $Vec3$$Type } from "net.minecraft.world.phys.Vec3"
import { $BlockEntityType$$Type } from "net.minecraft.world.level.block.entity.BlockEntityType"
import { $SignalGetter$$Type } from "net.minecraft.world.level.SignalGetter"
import { $FluidState$$Type } from "net.minecraft.world.level.material.FluidState"
import { $GameEventListener } from "net.minecraft.world.level.gameevent.GameEventListener"
import { $Optional } from "java.util.Optional"
import { $LevelAccessor$$Type } from "net.minecraft.world.level.LevelAccessor"
import { $WoodType$$Type } from "net.minecraft.world.level.block.state.properties.WoodType"
import { $Block, $Block$$Type } from "net.minecraft.world.level.block.Block"
import { $ItemStack, $ItemStack$$Type } from "net.minecraft.world.item.ItemStack"
import { $Level$$Type } from "net.minecraft.world.level.Level"
import { $Mob$$Type } from "net.minecraft.world.entity.Mob"

export class $GTCeilingHangingSignBlock extends $CeilingHangingSignBlock {
constructor(properties0: $BlockBehaviour$Properties$$Type, woodType1: $WoodType$$Type)

public "addLandingEffects"(blockState0: $BlockState$$Type, serverLevel1: $ServerLevel$$Type, blockPos2: $BlockPos$$Type, blockState3: $BlockState$$Type, livingEntity4: $LivingEntity$$Type, int5: integer): boolean
public "addRunningEffects"(blockState0: $BlockState$$Type, level1: $Level$$Type, blockPos2: $BlockPos$$Type, entity3: $Entity$$Type): boolean
public "arch$holder"(): $Holder<$Block>
public "arch$registryName"(): $ResourceLocation
public "canBeHydrated"(blockState0: $BlockState$$Type, blockGetter1: $BlockGetter$$Type, blockPos2: $BlockPos$$Type, fluidState3: $FluidState$$Type, blockPos4: $BlockPos$$Type): boolean
public "canConnectRedstone"(blockState0: $BlockState$$Type, blockGetter1: $BlockGetter$$Type, blockPos2: $BlockPos$$Type, direction3: $Direction$$Type): boolean
public "canDropFromExplosion"(blockState0: $BlockState$$Type, blockGetter1: $BlockGetter$$Type, blockPos2: $BlockPos$$Type, explosion3: $Explosion$$Type): boolean
public "canEntityDestroy"(blockState0: $BlockState$$Type, blockGetter1: $BlockGetter$$Type, blockPos2: $BlockPos$$Type, entity3: $Entity$$Type): boolean
public "canHarvestBlock"(blockState0: $BlockState$$Type, blockGetter1: $BlockGetter$$Type, blockPos2: $BlockPos$$Type, player3: $Player$$Type): boolean
public "canPlaceLiquid"(blockGetter0: $BlockGetter$$Type, blockPos1: $BlockPos$$Type, blockState2: $BlockState$$Type, fluid3: $Fluid$$Type): boolean
public "canStickTo"(blockState0: $BlockState$$Type, blockState1: $BlockState$$Type): boolean
public "collisionExtendsVertically"(blockState0: $BlockState$$Type, blockGetter1: $BlockGetter$$Type, blockPos2: $BlockPos$$Type, entity3: $Entity$$Type): boolean
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
public "getListener"<T extends $BlockEntity>(serverLevel0: $ServerLevel$$Type, t1: T): $GameEventListener
public "getMapColor"(blockState0: $BlockState$$Type, blockGetter1: $BlockGetter$$Type, blockPos2: $BlockPos$$Type, mapColor3: $MapColor$$Type): $MapColor
public "getMod"(): string
public "getPickupSound"(): $Optional<$SoundEvent>
public "getPickupSound"(blockState0: $BlockState$$Type): $Optional<$SoundEvent>
public "getPistonPushReaction"(blockState0: $BlockState$$Type): $PushReaction
public "getRespawnPosition"(blockState0: $BlockState$$Type, entityType1: $EntityType$$Type<any>, levelReader2: $LevelReader$$Type, blockPos3: $BlockPos$$Type, float4: float, livingEntity5: $LivingEntity$$Type): $Optional<$Vec3>
public "getSoundType"(blockState0: $BlockState$$Type, levelReader1: $LevelReader$$Type, blockPos2: $BlockPos$$Type, entity3: $Entity$$Type): $SoundType
public "getStateAtViewpoint"(blockState0: $BlockState$$Type, blockGetter1: $BlockGetter$$Type, blockPos2: $BlockPos$$Type, vec33: $Vec3$$Type): $BlockState
public "getTicker"<T extends $BlockEntity>(level0: $Level$$Type, blockState1: $BlockState$$Type, blockEntityType2: $BlockEntityType$$Type<T>): $BlockEntityTicker<T>
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
public "pickupBlock"(levelAccessor0: $LevelAccessor$$Type, blockPos1: $BlockPos$$Type, blockState2: $BlockState$$Type): $ItemStack
public "placeLiquid"(levelAccessor0: $LevelAccessor$$Type, blockPos1: $BlockPos$$Type, blockState2: $BlockState$$Type, fluidState3: $FluidState$$Type): boolean
public "rotate"(blockState0: $BlockState$$Type, levelAccessor1: $LevelAccessor$$Type, blockPos2: $BlockPos$$Type, rotation3: $Rotation$$Type): $BlockState
public "setBedOccupied"(blockState0: $BlockState$$Type, level1: $Level$$Type, blockPos2: $BlockPos$$Type, livingEntity3: $LivingEntity$$Type, boolean4: boolean): void
public "setDestroySpeed"(v: float): void
public "setLightEmission"(v: integer): void
public "setRequiresTool"(v: boolean): void
public "shouldCheckWeakPower"(blockState0: $BlockState$$Type, signalGetter1: $SignalGetter$$Type, blockPos2: $BlockPos$$Type, direction3: $Direction$$Type): boolean
public "shouldDisplayFluidOverlay"(blockState0: $BlockState$$Type, blockAndTintGetter1: $BlockAndTintGetter$$Type, blockPos2: $BlockPos$$Type, fluidState3: $FluidState$$Type): boolean
public "supportsExternalFaceHiding"(blockState0: $BlockState$$Type): boolean
get "blockStates"(): $List<$BlockState>
get "mod"(): string
get "pickupSound"(): $Optional<$SoundEvent>
set "destroySpeed"(value: float)
set "lightEmission"(value: integer)
set "requiresTool"(value: boolean)
}
}

declare module "com.gregtechceu.gtceu.common.block.explosive.IndustrialTNTBlock" {
import { $ResourceLocation } from "net.minecraft.resources.ResourceLocation"
import { $LivingEntity$$Type } from "net.minecraft.world.entity.LivingEntity"
import { $Direction, $Direction$$Type } from "net.minecraft.core.Direction"
import { $EntityType$$Type } from "net.minecraft.world.entity.EntityType"
import { $Item$$Type } from "net.minecraft.world.item.Item"
import { $BlockState, $BlockState$$Type } from "net.minecraft.world.level.block.state.BlockState"
import { $SpawnPlacements$Type$$Type } from "net.minecraft.world.entity.SpawnPlacements$Type"
import { $BlockBehaviour$Properties$$Type } from "net.minecraft.world.level.block.state.BlockBehaviour$Properties"
import { $ServerLevel$$Type } from "net.minecraft.server.level.ServerLevel"
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
import { $GTExplosiveBlock } from "com.gregtechceu.gtceu.common.block.explosive.GTExplosiveBlock"

export class $IndustrialTNTBlock extends $GTExplosiveBlock {
constructor(properties0: $BlockBehaviour$Properties$$Type)

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
get "blockStates"(): $List<$BlockState>
get "mod"(): string
set "destroySpeed"(value: float)
set "lightEmission"(value: integer)
set "requiresTool"(value: boolean)
}
}

declare module "com.gregtechceu.gtceu.common.pipelike.laser.LaserPipeNet" {
import { $LaserPipeProperties } from "com.gregtechceu.gtceu.common.pipelike.laser.LaserPipeProperties"
import { $BlockPos$$Type } from "net.minecraft.core.BlockPos"
import { $Direction$$Type } from "net.minecraft.core.Direction"
import { $LaserRoutePath } from "com.gregtechceu.gtceu.common.pipelike.laser.LaserRoutePath"
import { $LevelLaserPipeNet$$Type } from "com.gregtechceu.gtceu.common.pipelike.laser.LevelLaserPipeNet"
import { $PipeNet } from "com.gregtechceu.gtceu.api.pipenet.PipeNet"

export class $LaserPipeNet extends $PipeNet<$LaserPipeProperties> {
constructor(levelLaserPipeNet0: $LevelLaserPipeNet$$Type)

public "getNetData"(blockPos0: $BlockPos$$Type, direction1: $Direction$$Type): $LaserRoutePath
}
}

declare module "com.gregtechceu.gtceu.common.data.GTRecipeCategories" {
import { $GTRecipeType$$Type } from "com.gregtechceu.gtceu.api.recipe.GTRecipeType"
import { $GTRecipeCategory } from "com.gregtechceu.gtceu.api.recipe.category.GTRecipeCategory"

export class $GTRecipeCategories {
static readonly "ARC_FURNACE_RECYCLING": $GTRecipeCategory
static readonly "CHEM_DYES": $GTRecipeCategory
static readonly "EXTRACTOR_RECYCLING": $GTRecipeCategory
static readonly "INGOT_MOLDING": $GTRecipeCategory
static readonly "MACERATOR_RECYCLING": $GTRecipeCategory
static readonly "ORE_BATHING": $GTRecipeCategory
static readonly "ORE_CRUSHING": $GTRecipeCategory
static readonly "ORE_FORGING": $GTRecipeCategory

constructor()

public static "get"(string0: string): $GTRecipeCategory
public static "init"(): void
public static "register"(string0: string, gTRecipeType1: $GTRecipeType$$Type): $GTRecipeCategory
}
}

declare module "com.gregtechceu.gtceu.common.pipelike.item.ItemPipeNet" {
import { $List } from "java.util.List"
import { $ItemPipeProperties, $ItemPipeProperties$$Type } from "com.gregtechceu.gtceu.api.data.chemical.material.properties.ItemPipeProperties"
import { $BlockPos$$Type } from "net.minecraft.core.BlockPos"
import { $Direction$$Type } from "net.minecraft.core.Direction"
import { $ItemRoutePathSet$$Type } from "com.gregtechceu.gtceu.common.pipelike.item.ItemRoutePathSet"
import { $LevelPipeNet$$Type } from "com.gregtechceu.gtceu.api.pipenet.LevelPipeNet"
import { $PipeNet, $PipeNet$$Type } from "com.gregtechceu.gtceu.api.pipenet.PipeNet"
import { $ItemRoutePath } from "com.gregtechceu.gtceu.common.pipelike.item.ItemRoutePath"

export class $ItemPipeNet extends $PipeNet<$ItemPipeProperties> {
constructor(levelPipeNet0: $LevelPipeNet$$Type<$ItemPipeProperties$$Type, $PipeNet$$Type<$ItemPipeProperties$$Type>>)

public "getNetData"(blockPos0: $BlockPos$$Type, direction1: $Direction$$Type, itemRoutePathSet2: $ItemRoutePathSet$$Type): $List<$ItemRoutePath>
}
}

declare module "com.gregtechceu.gtceu.common.cover.data.TransferMode" {
import { $Enum } from "java.lang.Enum"
import { $IGuiTexture } from "com.lowdragmc.lowdraglib.gui.texture.IGuiTexture"
import { $EnumSelectorWidget$SelectableEnum } from "com.gregtechceu.gtceu.api.gui.widget.EnumSelectorWidget$SelectableEnum"

export class $TransferMode extends $Enum<$TransferMode> implements $EnumSelectorWidget$SelectableEnum {
static readonly "KEEP_EXACT": $TransferMode
static readonly "TRANSFER_ANY": $TransferMode
static readonly "TRANSFER_EXACT": $TransferMode
readonly "icon": $IGuiTexture
readonly "maxStackSize": integer
readonly "tooltip": string

public "getIcon"(): $IGuiTexture
public "getTooltip"(): string
public static "valueOf"(string0: string): $TransferMode
public static "values"(): $TransferMode[]
}
}

declare module "com.gregtechceu.gtceu.common.block.StoneBlockType" {
import { $Enum } from "java.lang.Enum"

export class $StoneBlockType extends $Enum<$StoneBlockType> {
static readonly "BRICKS": $StoneBlockType
static readonly "BRICKS_CRACKED": $StoneBlockType
static readonly "BRICKS_MOSSY": $StoneBlockType
static readonly "BRICKS_SMALL": $StoneBlockType
static readonly "BRICKS_SQUARE": $StoneBlockType
static readonly "CHISELED": $StoneBlockType
static readonly "COBBLE": $StoneBlockType
static readonly "COBBLE_MOSSY": $StoneBlockType
static readonly "POLISHED": $StoneBlockType
static readonly "STONE": $StoneBlockType
static readonly "TILED": $StoneBlockType
static readonly "TILED_SMALL": $StoneBlockType
static readonly "WINDMILL_A": $StoneBlockType
static readonly "WINDMILL_B": $StoneBlockType
readonly "blockId": string
readonly "hardness": float
readonly "id": string
readonly "resistance": float

public static "valueOf"(string0: string): $StoneBlockType
public static "values"(): $StoneBlockType[]
}
}

declare module "com.gregtechceu.gtceu.common.blockentity.OpticalPipeBlockEntity" {
import { $IFieldUpdateListener$$Type } from "com.lowdragmc.lowdraglib.syncdata.IFieldUpdateListener"
import { $AABB } from "net.minecraft.world.phys.AABB"
import { $Direction$$Type } from "net.minecraft.core.Direction"
import { $Connection$$Type } from "net.minecraft.network.Connection"
import { $BlockState$$Type } from "net.minecraft.world.level.block.state.BlockState"
import { $PipeBlockEntity } from "com.gregtechceu.gtceu.api.blockentity.PipeBlockEntity"
import { $Runnable$$Type } from "java.lang.Runnable"
import { $LazyOptional } from "net.minecraftforge.common.util.LazyOptional"
import { $TrackedData, $TrackedData$$Type } from "dev.corgitaco.dataanchor.data.TrackedData"
import { $OpticalPipeType } from "com.gregtechceu.gtceu.common.pipelike.optical.OpticalPipeType"
import { $IRef, $IRef$$Type } from "com.lowdragmc.lowdraglib.syncdata.managed.IRef"
import { $OpticalPipeNet } from "com.gregtechceu.gtceu.common.pipelike.optical.OpticalPipeNet"
import { $PipeBlock } from "com.gregtechceu.gtceu.api.block.PipeBlock"
import { $TrackedDataRegistry$$Type } from "dev.corgitaco.dataanchor.data.registry.TrackedDataRegistry"
import { $PipeNet } from "com.gregtechceu.gtceu.api.pipenet.PipeNet"
import { $OpticalPipeProperties } from "com.gregtechceu.gtceu.common.pipelike.optical.OpticalPipeProperties"
import { $ClientboundBlockEntityDataPacket$$Type } from "net.minecraft.network.protocol.game.ClientboundBlockEntityDataPacket"
import { $ModelData } from "net.minecraftforge.client.model.data.ModelData"
import { $BlockEntity } from "net.minecraft.world.level.block.entity.BlockEntity"
import { $Capability$$Type } from "net.minecraftforge.common.capabilities.Capability"
import { $Player$$Type } from "net.minecraft.world.entity.player.Player"
import { $TickableSubscription, $TickableSubscription$$Type } from "com.gregtechceu.gtceu.api.machine.TickableSubscription"
import { $CompoundTag$$Type } from "net.minecraft.nbt.CompoundTag"
import { $TrackedDataContainer } from "dev.corgitaco.dataanchor.data.TrackedDataContainer"
import { $BlockEntityType, $BlockEntityType$$Type } from "net.minecraft.world.level.block.entity.BlockEntityType"
import { $BlockPos, $BlockPos$$Type } from "net.minecraft.core.BlockPos"
import { $Level } from "net.minecraft.world.level.Level"
import { $ISubscription } from "com.lowdragmc.lowdraglib.syncdata.ISubscription"

export class $OpticalPipeBlockEntity extends $PipeBlockEntity<$OpticalPipeType, $OpticalPipeProperties> {
constructor(blockEntityType0: $BlockEntityType$$Type<any>, blockPos1: $BlockPos$$Type, blockState2: $BlockState$$Type)

public "addSyncUpdateListener"<T>(name: string, listener: $IFieldUpdateListener$$Type<T>): $ISubscription
public "asyncTick"(periodID: long): void
public "canAttachTo"(direction0: $Direction$$Type): boolean
public "canHaveBlockedFaces"(): boolean
public "checkNetwork"(): void
public "defaultServerTick"(): void
public "deserializeNBT"(compoundTag0: $CompoundTag$$Type): void
public "getBlockEntityType"(): $BlockEntityType<any>
public "getCapability"<T>(capability0: $Capability$$Type<T>, direction1: $Direction$$Type): $LazyOptional<T>
public "getCapability"<T>(capability0: $Capability$$Type<T>): $LazyOptional<T>
public "getCurrentPos"(): $BlockPos
public "getModelData"(): $ModelData
public "getNeighbor"(direction0: $Direction$$Type): $BlockEntity
public "getNonLazyFields"(): $IRef[]
public "getOpticalPipeNet"(): $OpticalPipeNet
public "getPipeBlock"(): $PipeBlock<$OpticalPipeType, $OpticalPipeProperties, any>
public "getPipeLevel"(): $Level
public "getPipeNet"(): $PipeNet<$OpticalPipeProperties>
public "getPipePos"(): $BlockPos
public "getPipeType"(): $OpticalPipeType
public "getRealColor"(): integer
public "getRenderBoundingBox"(): $AABB
public "getSelf"(): $BlockEntity
public "getSyncTag"(): string
public "handleUpdateTag"(compoundTag0: $CompoundTag$$Type): void
public "hasCustomOutlineRendering"(player0: $Player$$Type): boolean
public "isActive"(): boolean
public "isAsyncSyncing"(): boolean
public "isBlocked"(direction0: $Direction$$Type): boolean
public "isConnected"(direction0: $Direction$$Type): boolean
public "isInValid"(): boolean
public "isPainted"(): boolean
public "isRemote"(): boolean
public "loadCustomPersistedData"(tag: $CompoundTag$$Type): void
public "loadManagedPersistentData"(tag: $CompoundTag$$Type): void
public static "makeBasicContainer"<O, T extends $TrackedData<O>>(registry: $TrackedDataRegistry$$Type<O, T>, o: O, isClient: boolean): $TrackedDataContainer<O, T>
public static "makeBasicContainer"<O, T extends $TrackedData<O>>(registry: $TrackedDataRegistry$$Type<O, T>, o: O, isClient: boolean, lazyLoad: boolean): $TrackedDataContainer<O, T>
public "markAsDirty"(): void
public "markDirty"(name: string): void
public "onDataPacket"(connection0: $Connection$$Type, clientboundBlockEntityDataPacket1: $ClientboundBlockEntityDataPacket$$Type): void
public "onInValid"(): void
public "onLoad"(): void
public "onPersistedChanged"(ref: $IRef$$Type, isDirty: boolean): void
public "onSyncChanged"(ref: $IRef$$Type, isDirty: boolean): void
public "onValid"(): void
public "readCustomSyncData"(tag: $CompoundTag$$Type): void
public "requestModelDataUpdate"(): void
public "saveCustomPersistedData"(tag: $CompoundTag$$Type, forDrop: boolean): void
public "saveManagedPersistentData"(tag: $CompoundTag$$Type, forDrop: boolean): void
public "scheduleNeighborShapeUpdate"(): void
public "scheduleRender"(fieldName: string, newValue: any, oldValue: any): void
public "sdl$isDynamicLightEnabled"(): boolean
public "sdl$setDynamicLightEnabled"(enabled: boolean): void
public "self"(): $BlockEntity
public "setActive"(boolean0: boolean, int1: integer): void
public "setAsyncSyncing"(syncing: boolean): void
public "subscribeServerTick"(tickableSubscription0: $TickableSubscription$$Type, runnable1: $Runnable$$Type): $TickableSubscription
public "syncNow"(force: boolean): void
public "useAsyncThread"(): boolean
public "writeCustomSyncData"(tag: $CompoundTag$$Type): void
get "blockEntityType"(): $BlockEntityType<any>
get "currentPos"(): $BlockPos
get "modelData"(): $ModelData
get "nonLazyFields"(): $IRef[]
get "opticalPipeNet"(): $OpticalPipeNet
get "pipeBlock"(): $PipeBlock<$OpticalPipeType, $OpticalPipeProperties, any>
get "pipeLevel"(): $Level
get "pipeNet"(): $PipeNet<$OpticalPipeProperties>
get "pipePos"(): $BlockPos
get "pipeType"(): $OpticalPipeType
get "realColor"(): integer
get "renderBoundingBox"(): $AABB
get "syncTag"(): string
get "active"(): boolean
get "asyncSyncing"(): boolean
get "inValid"(): boolean
get "painted"(): boolean
get "remote"(): boolean
set "asyncSyncing"(value: boolean)
}
}

declare module "com.gregtechceu.gtceu.common.pipelike.optical.OpticalPipeType" {
import { $ResourceLocation } from "net.minecraft.resources.ResourceLocation"
import { $Enum, $Enum$$Type } from "java.lang.Enum"
import { $OpticalPipeProperties, $OpticalPipeProperties$$Type } from "com.gregtechceu.gtceu.common.pipelike.optical.OpticalPipeProperties"
import { $StringRepresentable, $StringRepresentable$$Type } from "net.minecraft.util.StringRepresentable"
import { $StringRepresentable$EnumCodec } from "net.minecraft.util.StringRepresentable$EnumCodec"
import { $Keyable } from "com.mojang.serialization.Keyable"
import { $Supplier$$Type } from "java.util.function.Supplier"
import { $Function$$Type } from "java.util.function.Function"
import { $IPipeType } from "com.gregtechceu.gtceu.api.pipenet.IPipeType"

export class $OpticalPipeType extends $Enum<$OpticalPipeType> implements $IPipeType<$OpticalPipeProperties>, $StringRepresentable {
static readonly "NORMAL": $OpticalPipeType
static readonly "TYPE": $ResourceLocation

public static "fromEnum"<E extends ($Enum<E> & $StringRepresentable)>(supplier0: $Supplier$$Type<E[]>): $StringRepresentable$EnumCodec<E>
public static "fromEnumWithMapping"<E extends ($Enum<E> & $StringRepresentable)>(supplier0: $Supplier$$Type<E[]>, function1: $Function$$Type<string, string>): $StringRepresentable$EnumCodec<E>
public "getSerializedName"(): string
public "getThickness"(): float
public "isPaintable"(): boolean
public static "keys"(stringRepresentable0s: $StringRepresentable$$Type[]): $Keyable
public "modifyProperties"(opticalPipeProperties0: $OpticalPipeProperties$$Type): $OpticalPipeProperties
public "type"(): $ResourceLocation
public static "valueOf"(string0: string): $OpticalPipeType
public static "values"(): $OpticalPipeType[]
get "serializedName"(): string
get "thickness"(): float
get "paintable"(): boolean
}
}

declare module "com.gregtechceu.gtceu.common.pipelike.item.longdistance.LDItemPipeType" {
import { $LongDistancePipeType } from "com.gregtechceu.gtceu.api.pipenet.longdistance.LongDistancePipeType"

export class $LDItemPipeType extends $LongDistancePipeType {
static readonly "INSTANCE": $LDItemPipeType

}
}

declare module "com.gregtechceu.gtceu.common.data.GTMaterials" {
import { $List } from "java.util.List"
import { $MarkerMaterial } from "com.gregtechceu.gtceu.api.data.chemical.material.MarkerMaterial"
import { $Material } from "com.gregtechceu.gtceu.api.data.chemical.material.Material"
import { $MaterialFlag } from "com.gregtechceu.gtceu.api.data.chemical.material.info.MaterialFlag"

export class $GTMaterials {
static "AceticAcid": $Material
static "AceticAnhydride": $Material
static "Acetone": $Material
static "AcidicEnrichedNaquadahSolution": $Material
static "AcidicNaquadriaSolution": $Material
static "AcidicOsmiumSolution": $Material
static "Actinium": $Material
static "ActivatedCarbon": $Material
static "Agar": $Material
static "Air": $Material
static "AllylChloride": $Material
static "Almandine": $Material
static "Aluminium": $Material
static "AluminiumSulfite": $Material
static "Alunite": $Material
static "Americium": $Material
static "Amethyst": $Material
static "AminoPhenol": $Material
static "Ammonia": $Material
static "AmmoniumChloride": $Material
static "AmmoniumFormate": $Material
static "Andesite": $Material
static "Andradite": $Material
static "AnnealedCopper": $Material
static "Antimony": $Material
static "AntimonyTrifluoride": $Material
static "AntimonyTrioxide": $Material
static "Apatite": $Material
static "AquaRegia": $Material
static "Argon": $Material
static "Arsenic": $Material
static "ArsenicTrioxide": $Material
static "Asbestos": $Material
static "Ash": $Material
static "Astatine": $Material
static "Bacteria": $Material
static "BacterialSludge": $Material
static "Barite": $Material
static "Barium": $Material
static "BariumSulfide": $Material
static "Basalt": $Material
static "BasalticMineralSand": $Material
static "Bastnasite": $Material
static "BatteryAlloy": $Material
static "Bauxite": $Material
static "BauxiteSlag": $Material
static "BauxiteSludge": $Material
static "BauxiteSlurry": $Material
static "Bentonite": $Material
static "Benzene": $Material
static "Berkelium": $Material
static "Beryllium": $Material
static "BioDiesel": $Material
static "Biomass": $Material
static "Biotite": $Material
static "Biphenyl": $Material
static "Bismuth": $Material
static "BismuthBronze": $Material
static "BisphenolA": $Material
static "BlackBronze": $Material
static "BlackSteel": $Material
static "Blackstone": $Material
static "Blaze": $Material
static "BlueAlloy": $Material
static "BlueSteel": $Material
static "BlueTopaz": $Material
static "Bohrium": $Material
static "Bone": $Material
static "Borax": $Material
static "Bornite": $Material
static "Boron": $Material
static "BorosilicateGlass": $Material
static "Brass": $Material
static "Brick": $Material
static "Bromine": $Material
static "Bronze": $Material
static "Butadiene": $Material
static "Butane": $Material
static "Butene": $Material
static "Butyraldehyde": $Material
static "CHEMICAL_DYES": $Material[]
static "Cadmium": $Material
static "Caesium": $Material
static "Calcite": $Material
static "Calcium": $Material
static "CalciumCarbonate": $Material
static "CalciumChloride": $Material
static "CalciumFerrocyanide": $Material
static "CalciumHydroxide": $Material
static "CalciumPhosphide": $Material
static "Californium": $Material
static "Caprolactam": $Material
static "Carbon": $Material
static "CarbonDioxide": $Material
static "CarbonMonoxide": $Material
static "Cassiterite": $Material
static "CassiteriteSand": $Material
static "Cerium": $Material
static "CertusQuartz": $Material
static "CetaneBoostedDiesel": $Material
static "Chalcocite": $Material
static "Chalcopyrite": $Material
static "Charcoal": $Material
static "CharcoalByproducts": $Material
static "Chlorine": $Material
static "Chlorobenzene": $Material
static "Chloroform": $Material
static "Chloromethane": $Material
static "Chromite": $Material
static "Chromium": $Material
static "ChromiumTrioxide": $Material
static "Cinnabar": $Material
static "Clay": $Material
static "Coal": $Material
static "CoalGas": $Material
static "CoalTar": $Material
static "Cobalt": $Material
static "CobaltBrass": $Material
static "CobaltOxide": $Material
static "Cobaltite": $Material
static "Cocoa": $Material
static "Coke": $Material
static "Collagen": $Material
static "Concrete": $Material
static "ConstructionFoam": $Material
static "Cooperite": $Material
static "Copernicium": $Material
static "Copper": $Material
static "CrackedBauxiteSlurry": $Material
static "Creosote": $Material
static "Cumene": $Material
static "CupricOxide": $Material
static "Cupronickel": $Material
static "Curium": $Material
static "Cyclohexane": $Material
static "CyclohexanoneOxime": $Material
static "DamascusSteel": $Material
static "DarkAsh": $Material
static "Darmstadtium": $Material
static "DecalcifiedBauxiteSludge": $Material
static "Deepslate": $Material
static "DepletedUraniumHexafluoride": $Material
static "Deuterium": $Material
static "Diaminobenzidine": $Material
static "Diamond": $Material
static "Diatomite": $Material
static "Dichlorobenzene": $Material
static "Dichlorobenzidine": $Material
static "Dichloroethane": $Material
static "Diesel": $Material
static "Diethylenetriamine": $Material
static "DiethylenetriaminePentaacetonitrile": $Material
static "DiethylenetriaminepentaaceticAcid": $Material
static "DilutedHydrochloricAcid": $Material
static "DilutedSulfuricAcid": $Material
static "Dimethylamine": $Material
static "Dimethylbenzene": $Material
static "Dimethyldichlorosilane": $Material
static "Dimethylhydrazine": $Material
static "DinitrogenTetroxide": $Material
static "Diorite": $Material
static "DiphenylIsophtalate": $Material
static "DissolvedCalciumAcetate": $Material
static "DistilledWater": $Material
static "DrillingFluid": $Material
static "Dubnium": $Material
static "Duranium": $Material
static "DyeBlack": $Material
static "DyeBlue": $Material
static "DyeBrown": $Material
static "DyeCyan": $Material
static "DyeGray": $Material
static "DyeGreen": $Material
static "DyeLightBlue": $Material
static "DyeLightGray": $Material
static "DyeLime": $Material
static "DyeMagenta": $Material
static "DyeOrange": $Material
static "DyePink": $Material
static "DyePurple": $Material
static "DyeRed": $Material
static "DyeWhite": $Material
static "DyeYellow": $Material
static "Dysprosium": $Material
static readonly "EXT2_METAL": $List<$MaterialFlag>
static readonly "EXT_METAL": $List<$MaterialFlag>
static "EchoShard": $Material
static "Einsteinium": $Material
static "Electrotine": $Material
static "Electrum": $Material
static "Emerald": $Material
static "EnderAir": $Material
static "EnderEye": $Material
static "EnderPearl": $Material
static "Endstone": $Material
static "EnrichedBacterialSludge": $Material
static "EnrichedNaquadahSolution": $Material
static "EnrichedNaquadahSulfate": $Material
static "EnrichedNaquadahTriniumEuropiumDuranide": $Material
static "EnrichedNaquadahWaste": $Material
static "EnrichedUraniumHexafluoride": $Material
static "Epichlorohydrin": $Material
static "Epoxy": $Material
static "Erbium": $Material
static "Ethane": $Material
static "Ethanol": $Material
static "Ethenone": $Material
static "EthylTertButylEther": $Material
static "Ethylbenzene": $Material
static "Ethylene": $Material
static "Europium": $Material
static "FermentedBiomass": $Material
static "Fermium": $Material
static "FerriteMixture": $Material
static "Ferrosilite": $Material
static "Fireclay": $Material
static "FishOil": $Material
static "Flerovium": $Material
static "Flint": $Material
static "Fluorine": $Material
static "FluoroantimonicAcid": $Material
static "Formaldehyde": $Material
static "Formamide": $Material
static "FormicAcid": $Material
static "Francium": $Material
static "FullersEarth": $Material
static "Gadolinium": $Material
static "Galena": $Material
static "Gallium": $Material
static "GalliumArsenide": $Material
static "GalliumSulfide": $Material
static "GarnetRed": $Material
static "GarnetSand": $Material
static "GarnetYellow": $Material
static "Garnierite": $Material
static "Gasoline": $Material
static "Gelatin": $Material
static "GelatinMixture": $Material
static "Germanium": $Material
static "Glass": $Material
static "GlauconiteSand": $Material
static "Glowstone": $Material
static "Glue": $Material
static "Glycerol": $Material
static "GlycerylTrinitrate": $Material
static "Glycolonitrile": $Material
static "Goethite": $Material
static "Gold": $Material
static "Granite": $Material
static "GraniteRed": $Material
static "GraniticMineralSand": $Material
static "Graphene": $Material
static "Graphite": $Material
static "GreenSapphire": $Material
static "GreenSapphireSlurry": $Material
static "Grossular": $Material
static "Gunpowder": $Material
static "Gypsum": $Material
static "HSLASteel": $Material
static "HSSE": $Material
static "HSSG": $Material
static "HSSS": $Material
static "Hafnium": $Material
static "Hassium": $Material
static "HastelloyC276": $Material
static "HastelloyX": $Material
static "HeavyFuel": $Material
static "Helium": $Material
static "Helium3": $Material
static "Hematite": $Material
static "HighOctaneGasoline": $Material
static "Holmium": $Material
static "HydroCrackedButadiene": $Material
static "HydroCrackedButane": $Material
static "HydroCrackedButene": $Material
static "HydroCrackedEthane": $Material
static "HydroCrackedEthylene": $Material
static "HydroCrackedPropane": $Material
static "HydroCrackedPropene": $Material
static "HydrochloricAcid": $Material
static "HydrofluoricAcid": $Material
static "Hydrogen": $Material
static "HydrogenCyanide": $Material
static "HydrogenPeroxide": $Material
static "HydrogenSulfide": $Material
static "HypochlorousAcid": $Material
static "Ice": $Material
static "Ilmenite": $Material
static "IlmeniteSlag": $Material
static "ImpureEnrichedNaquadahSolution": $Material
static "ImpureNaquadriaSolution": $Material
static "IncoloyMA956": $Material
static "Indium": $Material
static "IndiumConcentrate": $Material
static "IndiumGalliumPhosphide": $Material
static "IndiumPhosphide": $Material
static "IndiumTinBariumTitaniumCuprate": $Material
static "InertMetalMixture": $Material
static "Invar": $Material
static "Iodine": $Material
static "Iridium": $Material
static "IridiumChloride": $Material
static "IridiumMetalResidue": $Material
static "Iron": $Material
static "Iron2Chloride": $Material
static "Iron3Chloride": $Material
static "IronMagnetic": $Material
static "Isoprene": $Material
static "Kanthal": $Material
static "Krypton": $Material
static "Kyanite": $Material
static "LPG": $Material
static "Lanthanum": $Material
static "Lapis": $Material
static "Lapotron": $Material
static "Lava": $Material
static "Lawrencium": $Material
static "Lazurite": $Material
static "Lead": $Material
static "LeadZincSolution": $Material
static "Lepidolite": $Material
static "LightFuel": $Material
static "LightlyHydroCrackedGas": $Material
static "LightlyHydroCrackedHeavyFuel": $Material
static "LightlyHydroCrackedLightFuel": $Material
static "LightlyHydroCrackedNaphtha": $Material
static "LightlySteamCrackedGas": $Material
static "LightlySteamCrackedHeavyFuel": $Material
static "LightlySteamCrackedLightFuel": $Material
static "LightlySteamCrackedNaphtha": $Material
static "Limonite": $Material
static "LiquidAir": $Material
static "LiquidEnderAir": $Material
static "LiquidNetherAir": $Material
static "Lithium": $Material
static "LithiumChloride": $Material
static "Livermorium": $Material
static "Lubricant": $Material
static "Lutetium": $Material
static "Magnalium": $Material
static "Magnesia": $Material
static "Magnesite": $Material
static "Magnesium": $Material
static "MagnesiumChloride": $Material
static "MagnesiumDiboride": $Material
static "Magnetite": $Material
static "Malachite": $Material
static "Manganese": $Material
static "ManganesePhosphide": $Material
static "MaragingSteel300": $Material
static "Marble": $Material
static "Massicot": $Material
static "McGuffium239": $Material
static "Meat": $Material
static "Meitnerium": $Material
static "Mendelevium": $Material
static "Mercury": $Material
static "MercuryBariumCalciumCuprate": $Material
static "MetalMixture": $Material
static "Methane": $Material
static "Methanol": $Material
static "MethylAcetate": $Material
static "Mica": $Material
static "Milk": $Material
static "Mirabilite": $Material
static "Molybdenite": $Material
static "Molybdenum": $Material
static "MolybdenumDisilicide": $Material
static "Monazite": $Material
static "Monochloramine": $Material
static "Moscovium": $Material
static "Mutagen": $Material
static readonly "NULL": $MarkerMaterial
static "Naphtha": $Material
static "Naphthalene": $Material
static "Naquadah": $Material
static "NaquadahAlloy": $Material
static "NaquadahEnriched": $Material
static "Naquadria": $Material
static "NaquadriaSolution": $Material
static "NaquadriaSulfate": $Material
static "NaquadriaWaste": $Material
static "NaturalGas": $Material
static "Neodymium": $Material
static "NeodymiumMagnetic": $Material
static "Neon": $Material
static "Neptunium": $Material
static "NetherAir": $Material
static "NetherQuartz": $Material
static "NetherStar": $Material
static "Netherite": $Material
static "Netherrack": $Material
static "Neutronium": $Material
static "Nichrome": $Material
static "Nickel": $Material
static "NickelZincFerrite": $Material
static "Nihonium": $Material
static "Niobium": $Material
static "NiobiumNitride": $Material
static "NiobiumTitanium": $Material
static "NitrationMixture": $Material
static "NitricAcid": $Material
static "NitricOxide": $Material
static "Nitrobenzene": $Material
static "Nitrochlorobenzene": $Material
static "Nitrogen": $Material
static "NitrogenDioxide": $Material
static "NitrosylChloride": $Material
static "NitrousOxide": $Material
static "Nobelium": $Material
static "Obsidian": $Material
static "Octane": $Material
static "Oganesson": $Material
static "Oil": $Material
static "OilHeavy": $Material
static "OilLight": $Material
static "Oilsands": $Material
static "Olivine": $Material
static "Opal": $Material
static "Osmiridium": $Material
static "Osmium": $Material
static "OsmiumTetroxide": $Material
static "Oxygen": $Material
static "PCBCoolant": $Material
static "Palladium": $Material
static "PalladiumRaw": $Material
static "Paper": $Material
static "Paracetamol": $Material
static "Pentlandite": $Material
static "Perlite": $Material
static "Phenol": $Material
static "Phosphate": $Material
static "PhosphoricAcid": $Material
static "Phosphorus": $Material
static "PhosphorusPentoxide": $Material
static "PhthalicAcid": $Material
static "Pitchblende": $Material
static "Platinum": $Material
static "PlatinumGroupSludge": $Material
static "PlatinumRaw": $Material
static "PlatinumSludgeResidue": $Material
static "Plutonium239": $Material
static "Plutonium241": $Material
static "Pollucite": $Material
static "Polonium": $Material
static "Polybenzimidazole": $Material
static "Polycaprolactam": $Material
static "PolychlorinatedBiphenyl": $Material
static "Polydimethylsiloxane": $Material
static "Polyethylene": $Material
static "PolyphenyleneSulfide": $Material
static "Polytetrafluoroethylene": $Material
static "PolyvinylAcetate": $Material
static "PolyvinylButyral": $Material
static "PolyvinylChloride": $Material
static "Potash": $Material
static "Potassium": $Material
static "PotassiumCarbonate": $Material
static "PotassiumCyanide": $Material
static "PotassiumDichromate": $Material
static "PotassiumFeldspar": $Material
static "PotassiumFerrocyanide": $Material
static "PotassiumHydroxide": $Material
static "PotassiumIodide": $Material
static "PotassiumSulfate": $Material
static "Potin": $Material
static "Powellite": $Material
static "Praseodymium": $Material
static "Promethium": $Material
static "Propane": $Material
static "Propene": $Material
static "Protactinium": $Material
static "PrussianBlue": $Material
static "Pyrite": $Material
static "Pyrochlore": $Material
static "Pyrolusite": $Material
static "Pyrope": $Material
static "QuartzSand": $Material
static "Quartzite": $Material
static "Quicklime": $Material
static "RTMAlloy": $Material
static "RadAway": $Material
static "Radium": $Material
static "Radon": $Material
static "RareEarth": $Material
static "RarestMetalMixture": $Material
static "RawGasoline": $Material
static "RawGrowthMedium": $Material
static "RawOil": $Material
static "RawRubber": $Material
static "RawStyreneButadieneRubber": $Material
static "Realgar": $Material
static "RedAlloy": $Material
static "RedSteel": $Material
static "Redrock": $Material
static "Redstone": $Material
static "RefineryGas": $Material
static "ReinforcedEpoxyResin": $Material
static "Rhenium": $Material
static "Rhodium": $Material
static "RhodiumPlatedPalladium": $Material
static "RhodiumSulfate": $Material
static "RockSalt": $Material
static "RocketFuel": $Material
static "Roentgenium": $Material
static "RoseGold": $Material
static "Rubber": $Material
static "Rubidium": $Material
static "Ruby": $Material
static "RubySlurry": $Material
static "Ruridit": $Material
static "Ruthenium": $Material
static "RutheniumTetroxide": $Material
static "RutheniumTriniumAmericiumNeutronate": $Material
static "Rutherfordium": $Material
static "Rutile": $Material
static readonly "STD_METAL": $List<$MaterialFlag>
static "Salt": $Material
static "SaltWater": $Material
static "Saltpeter": $Material
static "Samarium": $Material
static "SamariumIronArsenicOxide": $Material
static "SamariumMagnetic": $Material
static "Sapphire": $Material
static "SapphireSlurry": $Material
static "Scandium": $Material
static "Scheelite": $Material
static "Sculk": $Material
static "Seaborgium": $Material
static "SeedOil": $Material
static "Selenium": $Material
static "SeverelyHydroCrackedGas": $Material
static "SeverelyHydroCrackedHeavyFuel": $Material
static "SeverelyHydroCrackedLightFuel": $Material
static "SeverelyHydroCrackedNaphtha": $Material
static "SeverelySteamCrackedGas": $Material
static "SeverelySteamCrackedHeavyFuel": $Material
static "SeverelySteamCrackedLightFuel": $Material
static "SeverelySteamCrackedNaphtha": $Material
static "Silicon": $Material
static "SiliconDioxide": $Material
static "SiliconeRubber": $Material
static "Silver": $Material
static "Soapstone": $Material
static "SodaAsh": $Material
static "Sodalite": $Material
static "Sodium": $Material
static "SodiumBicarbonate": $Material
static "SodiumBisulfate": $Material
static "SodiumHydroxide": $Material
static "SodiumNitrite": $Material
static "SodiumPersulfate": $Material
static "SodiumPotassium": $Material
static "SodiumSulfide": $Material
static "SolderingAlloy": $Material
static "Spessartine": $Material
static "Sphalerite": $Material
static "Spodumene": $Material
static "StainlessSteel": $Material
static "Steam": $Material
static "SteamCrackedButadiene": $Material
static "SteamCrackedButane": $Material
static "SteamCrackedButene": $Material
static "SteamCrackedEthane": $Material
static "SteamCrackedEthylene": $Material
static "SteamCrackedPropane": $Material
static "SteamCrackedPropene": $Material
static "Steel": $Material
static "SteelMagnetic": $Material
static "Stellite100": $Material
static "SterileGrowthMedium": $Material
static "SterlingSilver": $Material
static "Stibnite": $Material
static "Stone": $Material
static "Strontium": $Material
static "Styrene": $Material
static "StyreneButadieneRubber": $Material
static "Sugar": $Material
static "Sulfur": $Material
static "SulfurDioxide": $Material
static "SulfurTrioxide": $Material
static "SulfuricAcid": $Material
static "SulfuricCopperSolution": $Material
static "SulfuricGas": $Material
static "SulfuricHeavyFuel": $Material
static "SulfuricLightFuel": $Material
static "SulfuricNaphtha": $Material
static "SulfuricNickelSolution": $Material
static "Talc": $Material
static "Tantalite": $Material
static "Tantalum": $Material
static "TantalumCarbide": $Material
static "Technetium": $Material
static "Tellurium": $Material
static "Tennessine": $Material
static "Terbium": $Material
static "Tetrafluoroethylene": $Material
static "Tetrahedrite": $Material
static "Tetranitromethane": $Material
static "Thallium": $Material
static "Thorium": $Material
static "Thulium": $Material
static "Tin": $Material
static "TinAlloy": $Material
static "Titanium": $Material
static "TitaniumCarbide": $Material
static "TitaniumTetrachloride": $Material
static "TitaniumTrifluoride": $Material
static "TitaniumTungstenCarbide": $Material
static "Toluene": $Material
static "Topaz": $Material
static "TreatedWood": $Material
static "TricalciumPhosphate": $Material
static "Trinium": $Material
static "TriniumSulfide": $Material
static "Tritanium": $Material
static "Tritium": $Material
static "Trona": $Material
static "Tuff": $Material
static "Tungstate": $Material
static "Tungsten": $Material
static "TungstenCarbide": $Material
static "TungstenSteel": $Material
static "TungsticAcid": $Material
static "UUMatter": $Material
static "Ultimet": $Material
static "Uraninite": $Material
static "Uranium235": $Material
static "Uranium238": $Material
static "UraniumHexafluoride": $Material
static "UraniumRhodiumDinaquadide": $Material
static "UraniumTriplatinum": $Material
static "Uvarovite": $Material
static "VOLTAGE_COMMON_MATERIALS": $Material[]
static "Vanadium": $Material
static "VanadiumGallium": $Material
static "VanadiumMagnetite": $Material
static "VanadiumSteel": $Material
static "VinylAcetate": $Material
static "VinylChloride": $Material
static "Water": $Material
static "WatertightSteel": $Material
static "Wax": $Material
static "Wheat": $Material
static "Wood": $Material
static "WoodGas": $Material
static "WoodTar": $Material
static "WoodVinegar": $Material
static "WroughtIron": $Material
static "Wulfenite": $Material
static "Xenon": $Material
/** @deprecated */
static "YellowLimonite": $Material
static "Ytterbium": $Material
static "Yttrium": $Material
static "YttriumBariumCuprate": $Material
static "Zeolite": $Material
static "Zeron100": $Material
static "Zinc": $Material
static "ZincSulfide": $Material
static "Zincite": $Material
static "Zirconium": $Material

constructor()

public static "get"(string0: string): $Material
public static "init"(): void
}
}

declare module "com.gregtechceu.gtceu.common.data.GTOres" {
import { $ResourceLocation$$Type } from "net.minecraft.resources.ResourceLocation"
import { $Consumer$$Type } from "java.util.function.Consumer"
import { $GTOreDefinition, $GTOreDefinition$$Type } from "com.gregtechceu.gtceu.api.data.worldgen.GTOreDefinition"
import { $RuleTest } from "net.minecraft.world.level.levelgen.structure.templatesystem.RuleTest"

export class $GTOres {
static readonly "APATITE_VEIN": $GTOreDefinition
static readonly "BANDED_IRON_VEIN": $GTOreDefinition
static readonly "BAUXITE_VEIN_END": $GTOreDefinition
static readonly "BERYLLIUM_VEIN": $GTOreDefinition
static readonly "CASSITERITE_VEIN": $GTOreDefinition
static readonly "CERTUS_QUARTZ_VEIN": $GTOreDefinition
static readonly "COAL_VEIN": $GTOreDefinition
static readonly "COPPER_TIN_VEIN": $GTOreDefinition
static readonly "COPPER_VEIN": $GTOreDefinition
static "DEEPSLATE_RULES": $RuleTest[]
static readonly "DIAMOND_VEIN": $GTOreDefinition
static "END_RULES": $RuleTest[]
static readonly "GALENA_VEIN": $GTOreDefinition
static readonly "GARNET_TIN_VEIN": $GTOreDefinition
static readonly "GARNET_VEIN": $GTOreDefinition
static readonly "IRON_VEIN": $GTOreDefinition
static readonly "LAPIS_VEIN": $GTOreDefinition
static readonly "LUBRICANT_VEIN": $GTOreDefinition
static readonly "MAGNETITE_VEIN_END": $GTOreDefinition
static readonly "MAGNETITE_VEIN_OW": $GTOreDefinition
static readonly "MANGANESE_VEIN": $GTOreDefinition
static readonly "MANGANESE_VEIN_OW": $GTOreDefinition
static readonly "MICA_VEIN": $GTOreDefinition
static readonly "MINERAL_SAND_VEIN": $GTOreDefinition
static readonly "MOLYBDENUM_VEIN": $GTOreDefinition
static readonly "MONAZITE_VEIN": $GTOreDefinition
static readonly "NAQUADAH_VEIN": $GTOreDefinition
static readonly "NETHER_QUARTZ_VEIN": $GTOreDefinition
static "NETHER_RULES": $RuleTest[]
static readonly "NICKEL_VEIN": $GTOreDefinition
static readonly "OILSANDS_VEIN": $GTOreDefinition
static readonly "OLIVINE_VEIN": $GTOreDefinition
static "OVERWORLD_RULES": $RuleTest[]
static readonly "PITCHBLENDE_VEIN": $GTOreDefinition
static readonly "REDSTONE_VEIN": $GTOreDefinition
static readonly "REDSTONE_VEIN_OW": $GTOreDefinition
static readonly "SALTPETER_VEIN": $GTOreDefinition
static readonly "SALTS_VEIN": $GTOreDefinition
static readonly "SAPPHIRE_VEIN": $GTOreDefinition
static readonly "SCHEELITE_VEIN": $GTOreDefinition
static readonly "SHELDONITE_VEIN": $GTOreDefinition
static readonly "SULFUR_VEIN": $GTOreDefinition
static readonly "TETRAHEDRITE_VEIN": $GTOreDefinition
static readonly "TOPAZ_VEIN": $GTOreDefinition

constructor()

public static "blankOreDefinition"(): $GTOreDefinition
public static "create"(resourceLocation0: $ResourceLocation$$Type, consumer1: $Consumer$$Type<$GTOreDefinition$$Type>): $GTOreDefinition
public static "getLargestIndicatorOffset"(): integer
public static "getLargestVeinSize"(): integer
public static "init"(): void
public static "updateLargestVeinSize"(): void
}
}

declare module "com.gregtechceu.gtceu.common.pipelike.duct.LevelDuctPipeNet" {
import { $CompoundTag$$Type } from "net.minecraft.nbt.CompoundTag"
import { $DuctPipeNet } from "com.gregtechceu.gtceu.common.pipelike.duct.DuctPipeNet"
import { $DuctPipeProperties } from "com.gregtechceu.gtceu.common.pipelike.duct.DuctPipeProperties"
import { $ServerLevel$$Type } from "net.minecraft.server.level.ServerLevel"
import { $LevelPipeNet } from "com.gregtechceu.gtceu.api.pipenet.LevelPipeNet"

export class $LevelDuctPipeNet extends $LevelPipeNet<$DuctPipeProperties, $DuctPipeNet> {
constructor(serverLevel0: $ServerLevel$$Type)
constructor(serverLevel0: $ServerLevel$$Type, compoundTag1: $CompoundTag$$Type)

public static "getOrCreate"(serverLevel0: $ServerLevel$$Type): $LevelDuctPipeNet
}
}

declare module "com.gregtechceu.gtceu.common.pipelike.cable.EnergyNet" {
import { $EnergyRoutePath } from "com.gregtechceu.gtceu.common.pipelike.cable.EnergyRoutePath"
import { $List } from "java.util.List"
import { $BlockPos$$Type } from "net.minecraft.core.BlockPos"
import { $WireProperties } from "com.gregtechceu.gtceu.api.data.chemical.material.properties.WireProperties"
import { $PipeNet } from "com.gregtechceu.gtceu.api.pipenet.PipeNet"

export class $EnergyNet extends $PipeNet<$WireProperties> {
public "addEnergyFluxPerSec"(long0: long): void
public "clearCache"(): void
public "getEnergyFluxPerSec"(): long
public "getNetData"(blockPos0: $BlockPos$$Type): $List<$EnergyRoutePath>
get "energyFluxPerSec"(): long
}
}

declare module "com.gregtechceu.gtceu.common.pipelike.fluidpipe.longdistance.LDFluidPipeType" {
import { $LongDistancePipeType } from "com.gregtechceu.gtceu.api.pipenet.longdistance.LongDistancePipeType"

export class $LDFluidPipeType extends $LongDistancePipeType {
static readonly "INSTANCE": $LDFluidPipeType

}
}

declare module "com.gregtechceu.gtceu.common.pipelike.item.LevelItemPipeNet" {
import { $CompoundTag$$Type } from "net.minecraft.nbt.CompoundTag"
import { $ItemPipeProperties } from "com.gregtechceu.gtceu.api.data.chemical.material.properties.ItemPipeProperties"
import { $ItemPipeNet } from "com.gregtechceu.gtceu.common.pipelike.item.ItemPipeNet"
import { $ServerLevel$$Type } from "net.minecraft.server.level.ServerLevel"
import { $LevelPipeNet } from "com.gregtechceu.gtceu.api.pipenet.LevelPipeNet"

export class $LevelItemPipeNet extends $LevelPipeNet<$ItemPipeProperties, $ItemPipeNet> {
constructor(serverLevel0: $ServerLevel$$Type)
constructor(serverLevel0: $ServerLevel$$Type, compoundTag1: $CompoundTag$$Type)

public static "getOrCreate"(serverLevel0: $ServerLevel$$Type): $LevelItemPipeNet
}
}

declare module "com.gregtechceu.gtceu.common.capability.MedicalConditionTracker" {
import { $IMedicalConditionTracker } from "com.gregtechceu.gtceu.api.capability.IMedicalConditionTracker"
import { $CompoundTag, $CompoundTag$$Type } from "net.minecraft.nbt.CompoundTag"
import { $Object2FloatMap } from "it.unimi.dsi.fastutil.objects.Object2FloatMap"
import { $MedicalCondition, $MedicalCondition$$Type } from "com.gregtechceu.gtceu.api.data.medicalcondition.MedicalCondition"
import { $Material$$Type } from "com.gregtechceu.gtceu.api.data.chemical.material.Material"
import { $INBTSerializable } from "net.minecraftforge.common.util.INBTSerializable"
import { $Player, $Player$$Type } from "net.minecraft.world.entity.player.Player"
import { $MobEffect$$Type } from "net.minecraft.world.effect.MobEffect"

export class $MedicalConditionTracker implements $IMedicalConditionTracker, $INBTSerializable<$CompoundTag> {
constructor(player0: $Player$$Type)

public "deserializeNBT"(compoundTag0: $CompoundTag$$Type): void
public "getMaxAirSupply"(): integer
public "getMedicalConditions"(): $Object2FloatMap<$MedicalCondition>
public "getPlayer"(): $Player
public "heal"(medicalCondition0: $MedicalCondition$$Type, int1: integer): void
public "progressCondition"(medicalCondition0: $MedicalCondition$$Type, float1: float): void
public "progressRelatedCondition"(material0: $Material$$Type): void
public "removeMedicalCondition"(medicalCondition0: $MedicalCondition$$Type): void
public "setMaxAirSupply"(int0: integer): void
public "setMobEffect"(mobEffect0: $MobEffect$$Type, int1: integer): void
public "tick"(): void
get "maxAirSupply"(): integer
get "medicalConditions"(): $Object2FloatMap<$MedicalCondition>
get "player"(): $Player
set "maxAirSupply"(value: integer)
}
}

declare module "com.gregtechceu.gtceu.common.item.GTBoatItem" {
import { $ResourceLocation } from "net.minecraft.resources.ResourceLocation"
import { $Enchantment, $Enchantment$$Type } from "net.minecraft.world.item.enchantment.Enchantment"
import { $LivingEntity, $LivingEntity$$Type } from "net.minecraft.world.entity.LivingEntity"
import { $AABB } from "net.minecraft.world.phys.AABB"
import { $ICapabilityProvider } from "net.minecraftforge.common.capabilities.ICapabilityProvider"
import { $EntityType$$Type } from "net.minecraft.world.entity.EntityType"
import { $GTBoat$BoatType$$Type } from "com.gregtechceu.gtceu.common.entity.GTBoat$BoatType"
import { $Item$Properties$$Type } from "net.minecraft.world.item.Item$Properties"
import { $Item, $Item$$Type } from "net.minecraft.world.item.Item"
import { $BlockState$$Type } from "net.minecraft.world.level.block.state.BlockState"
import { $Multimap } from "com.google.common.collect.Multimap"
import { $Holder } from "net.minecraft.core.Holder"
import { $ToolAction$$Type } from "net.minecraftforge.common.ToolAction"
import { $AttributeModifier } from "net.minecraft.world.entity.ai.attributes.AttributeModifier"
import { $DamageSource$$Type } from "net.minecraft.world.damagesource.DamageSource"
import { $Map } from "java.util.Map"
import { $UseOnContext$$Type } from "net.minecraft.world.item.context.UseOnContext"
import { $RecipeType$$Type } from "net.minecraft.world.item.crafting.RecipeType"
import { $AttributeModifier$Operation$$Type } from "net.minecraft.world.entity.ai.attributes.AttributeModifier$Operation"
import { $FoodProperties } from "net.minecraft.world.food.FoodProperties"
import { $Component, $Component$$Type } from "net.minecraft.network.chat.Component"
import { $InteractionResult } from "net.minecraft.world.InteractionResult"
import { $UUID$$Type } from "java.util.UUID"
import { $LevelReader$$Type } from "net.minecraft.world.level.LevelReader"
import { $Attribute, $Attribute$$Type } from "net.minecraft.world.entity.ai.attributes.Attribute"
import { $Player$$Type } from "net.minecraft.world.entity.player.Player"
import { $EnderMan$$Type } from "net.minecraft.world.entity.monster.EnderMan"
import { $Consumer$$Type } from "java.util.function.Consumer"
import { $FeatureFlagSet$$Type } from "net.minecraft.world.flag.FeatureFlagSet"
import { $List } from "java.util.List"
import { $Entity, $Entity$$Type } from "net.minecraft.world.entity.Entity"
import { $CompoundTag, $CompoundTag$$Type } from "net.minecraft.nbt.CompoundTag"
import { $MutableToolTier$$Type } from "dev.latvian.mods.kubejs.item.MutableToolTier"
import { $BlockPos$$Type } from "net.minecraft.core.BlockPos"
import { $ItemEntity$$Type } from "net.minecraft.world.entity.item.ItemEntity"
import { $EquipmentSlot, $EquipmentSlot$$Type } from "net.minecraft.world.entity.EquipmentSlot"
import { $FoodBuilder$$Type } from "dev.latvian.mods.kubejs.item.FoodBuilder"
import { $Block$$Type } from "net.minecraft.world.level.block.Block"
import { $ItemStack, $ItemStack$$Type } from "net.minecraft.world.item.ItemStack"
import { $Level$$Type } from "net.minecraft.world.level.Level"
import { $Mob$$Type } from "net.minecraft.world.entity.Mob"

export class $GTBoatItem extends $Item {
constructor(boolean0: boolean, boatType1: $GTBoat$BoatType$$Type, properties2: $Item$Properties$$Type)

public "addAttribute"(attribute: $Attribute$$Type, uuid: $UUID$$Type, name: string, d: double, operation: $AttributeModifier$Operation$$Type): void
public "arch$holder"(): $Holder<$Item>
public "arch$registryName"(): $ResourceLocation
public "canApplyAtEnchantingTable"(itemStack0: $ItemStack$$Type, enchantment1: $Enchantment$$Type): boolean
public "canContinueUsing"(itemStack0: $ItemStack$$Type, itemStack1: $ItemStack$$Type): boolean
public "canDisableShield"(itemStack0: $ItemStack$$Type, itemStack1: $ItemStack$$Type, livingEntity2: $LivingEntity$$Type, livingEntity3: $LivingEntity$$Type): boolean
public "canElytraFly"(itemStack0: $ItemStack$$Type, livingEntity1: $LivingEntity$$Type): boolean
public "canEquip"(itemStack0: $ItemStack$$Type, equipmentSlot1: $EquipmentSlot$$Type, entity2: $Entity$$Type): boolean
public "canGrindstoneRepair"(itemStack0: $ItemStack$$Type): boolean
public "canPerformAction"(itemStack0: $ItemStack$$Type, toolAction1: $ToolAction$$Type): boolean
public "canWalkOnPowderedSnow"(itemStack0: $ItemStack$$Type, livingEntity1: $LivingEntity$$Type): boolean
public "createEntity"(level0: $Level$$Type, entity1: $Entity$$Type, itemStack2: $ItemStack$$Type): $Entity
public "damageItem"<T extends $LivingEntity>(itemStack0: $ItemStack$$Type, int1: integer, t2: T, consumer3: $Consumer$$Type<T>): integer
public "doesSneakBypassUse"(itemStack0: $ItemStack$$Type, levelReader1: $LevelReader$$Type, blockPos2: $BlockPos$$Type, player3: $Player$$Type): boolean
public "elytraFlightTick"(itemStack0: $ItemStack$$Type, livingEntity1: $LivingEntity$$Type, int2: integer): boolean
public static "get"(item: $Item$$Type): $ResourceLocation
public static "get"(block: $Block$$Type): $ResourceLocation
public static "get"(state: $BlockState$$Type): $ResourceLocation
public static "get"(entity: $Entity$$Type): $ResourceLocation
public static "get"(stack: $ItemStack$$Type): $ResourceLocation
public static "get"(type: $EntityType$$Type<any>): $ResourceLocation
public "getAllEnchantments"(itemStack0: $ItemStack$$Type): $Map<$Enchantment, integer>
public "getArmorTexture"(itemStack0: $ItemStack$$Type, entity1: $Entity$$Type, equipmentSlot2: $EquipmentSlot$$Type, string3: string): string
public "getAttributeModifiers"(equipmentSlot0: $EquipmentSlot$$Type, itemStack1: $ItemStack$$Type): $Multimap<$Attribute, $AttributeModifier>
public "getAttributes"(attribute: $Attribute$$Type): $List<$AttributeModifier>
public "getBurnTime"(itemStack0: $ItemStack$$Type, recipeType1: $RecipeType$$Type<any>): integer
public "getCraftingRemainingItem"(itemStack0: $ItemStack$$Type): $ItemStack
public "getCreativeTab"(): string
public "getCreatorModId"(itemStack0: $ItemStack$$Type): string
public "getDamage"(itemStack0: $ItemStack$$Type): integer
public "getDefaultTooltipHideFlags"(itemStack0: $ItemStack$$Type): integer
public "getDigSpeed"(): float
public "getEnchantmentLevel"(itemStack0: $ItemStack$$Type, enchantment1: $Enchantment$$Type): integer
public "getEnchantmentValue"(itemStack0: $ItemStack$$Type): integer
public "getEntityLifespan"(itemStack0: $ItemStack$$Type, level1: $Level$$Type): integer
public "getEquipmentSlot"(itemStack0: $ItemStack$$Type): $EquipmentSlot
public "getFoodProperties"(itemStack0: $ItemStack$$Type, livingEntity1: $LivingEntity$$Type): $FoodProperties
public "getHighlightTip"(itemStack0: $ItemStack$$Type, component1: $Component$$Type): $Component
public "getMaxDamage"(itemStack0: $ItemStack$$Type): integer
public "getMaxStackSize"(itemStack0: $ItemStack$$Type): integer
public "getMod"(): string
public "getShareTag"(itemStack0: $ItemStack$$Type): $CompoundTag
public "getSweepHitBox"(itemStack0: $ItemStack$$Type, player1: $Player$$Type, entity2: $Entity$$Type): $AABB
public "getXpRepairRatio"(itemStack0: $ItemStack$$Type): float
public "hasCraftingRemainingItem"(itemStack0: $ItemStack$$Type): boolean
public "hasCustomEntity"(itemStack0: $ItemStack$$Type): boolean
public "initCapabilities"(itemStack0: $ItemStack$$Type, compoundTag1: $CompoundTag$$Type): $ICapabilityProvider
public "isBookEnchantable"(itemStack0: $ItemStack$$Type, itemStack1: $ItemStack$$Type): boolean
public "isCorrectToolForDrops"(itemStack0: $ItemStack$$Type, blockState1: $BlockState$$Type): boolean
public "isDamageable"(itemStack0: $ItemStack$$Type): boolean
public "isDamaged"(itemStack0: $ItemStack$$Type): boolean
public "isEnabled"(featureFlagSet0: $FeatureFlagSet$$Type): boolean
public "isEnderMask"(itemStack0: $ItemStack$$Type, player1: $Player$$Type, enderMan2: $EnderMan$$Type): boolean
public "isNotReplaceableByPickAction"(itemStack0: $ItemStack$$Type, player1: $Player$$Type, int2: integer): boolean
public "isPiglinCurrency"(itemStack0: $ItemStack$$Type): boolean
public "makesPiglinsNeutral"(itemStack0: $ItemStack$$Type, livingEntity1: $LivingEntity$$Type): boolean
/** @deprecated */
public "onArmorTick"(itemStack0: $ItemStack$$Type, level1: $Level$$Type, player2: $Player$$Type): void
public "onBlockStartBreak"(itemStack0: $ItemStack$$Type, blockPos1: $BlockPos$$Type, player2: $Player$$Type): boolean
public "onDestroyed"(itemEntity0: $ItemEntity$$Type, damageSource1: $DamageSource$$Type): void
public "onDroppedByPlayer"(itemStack0: $ItemStack$$Type, player1: $Player$$Type): boolean
public "onEntityItemUpdate"(itemStack0: $ItemStack$$Type, itemEntity1: $ItemEntity$$Type): boolean
public "onEntitySwing"(itemStack0: $ItemStack$$Type, livingEntity1: $LivingEntity$$Type): boolean
public "onHorseArmorTick"(itemStack0: $ItemStack$$Type, level1: $Level$$Type, mob2: $Mob$$Type): void
public "onInventoryTick"(itemStack0: $ItemStack$$Type, level1: $Level$$Type, player2: $Player$$Type, int3: integer, int4: integer): void
public "onItemUseFirst"(itemStack0: $ItemStack$$Type, useOnContext1: $UseOnContext$$Type): $InteractionResult
public "onLeftClickEntity"(itemStack0: $ItemStack$$Type, player1: $Player$$Type, entity2: $Entity$$Type): boolean
public "onStopUsing"(itemStack0: $ItemStack$$Type, livingEntity1: $LivingEntity$$Type, int2: integer): void
public "readShareTag"(itemStack0: $ItemStack$$Type, compoundTag1: $CompoundTag$$Type): void
public "removeAttribute"(attribute: $Attribute$$Type, uuid: $UUID$$Type): void
public "setArmorKnockbackResistance"(knockbackResistance: double): void
public "setArmorProtection"(armorProtection: double): void
public "setArmorToughness"(armorToughness: double): void
public "setAttackDamage"(attackDamage: double): void
public "setAttackSpeed"(attackSpeed: double): void
public "setDamage"(itemStack0: $ItemStack$$Type, int1: integer): void
public "setDigSpeed"(speed: float): void
public "setFoodProperties"(consumer: $Consumer$$Type<$FoodBuilder$$Type>): void
public "setTier"(c: $Consumer$$Type<$MutableToolTier$$Type>): void
public "shouldCauseBlockBreakReset"(itemStack0: $ItemStack$$Type, itemStack1: $ItemStack$$Type): boolean
public "shouldCauseReequipAnimation"(itemStack0: $ItemStack$$Type, itemStack1: $ItemStack$$Type, boolean2: boolean): boolean
get "creativeTab"(): string
get "digSpeed"(): float
get "mod"(): string
set "armorKnockbackResistance"(value: double)
set "armorProtection"(value: double)
set "armorToughness"(value: double)
set "attackDamage"(value: double)
set "attackSpeed"(value: double)
set "digSpeed"(value: float)
set "foodProperties"(value: $Consumer$$Type<$FoodBuilder$$Type>)
set "tier"(value: $Consumer$$Type<$MutableToolTier$$Type>)
}
}

declare module "com.gregtechceu.gtceu.common.data.models.GTMachineModels" {
import { $ResourceLocation, $ResourceLocation$$Type } from "net.minecraft.resources.ResourceLocation"
import { $ImmutableMap } from "com.google.common.collect.ImmutableMap"
import { $ModelFile } from "net.minecraftforge.client.model.generators.ModelFile"
import { $MachineRenderState$$Type } from "com.gregtechceu.gtceu.client.model.machine.MachineRenderState"
import { $MachineBuilder$ModelInitializer, $MachineBuilder$ModelInitializer$$Type } from "com.gregtechceu.gtceu.api.registry.registrate.MachineBuilder$ModelInitializer"
import { $WorkableOverlays$$Type } from "com.gregtechceu.gtceu.client.model.machine.overlays.WorkableOverlays"
import { $MachineModelBuilder$$Type } from "com.gregtechceu.gtceu.data.model.builder.MachineModelBuilder"
import { $BlockModelProvider$$Type } from "net.minecraftforge.client.model.generators.BlockModelProvider"
import { $NonNullBiConsumer } from "com.tterrag.registrate.util.nullness.NonNullBiConsumer"
import { $ConfiguredModel } from "net.minecraftforge.client.model.generators.ConfiguredModel"
import { $Int2ObjectMap } from "it.unimi.dsi.fastutil.ints.Int2ObjectMap"
import { $RecipeLogic$Status$$Type } from "com.gregtechceu.gtceu.api.machine.trait.RecipeLogic$Status"
import { $Block } from "net.minecraft.world.level.block.Block"
import { $DataGenContext } from "com.tterrag.registrate.providers.DataGenContext"
import { $Material } from "com.gregtechceu.gtceu.api.data.chemical.material.Material"
import { $BlockModelBuilder, $BlockModelBuilder$$Type } from "net.minecraftforge.client.model.generators.BlockModelBuilder"
import { $GTBlockstateProvider } from "com.gregtechceu.gtceu.api.registry.registrate.provider.GTBlockstateProvider"

export class $GTMachineModels {
static readonly "ADVANCED_COMPUTER_CASING_TEXTURE": $ResourceLocation
static readonly "CHARGER_FINISHED": $ResourceLocation
static readonly "CHARGER_FINISHED_EMISSIVE": $ResourceLocation
static readonly "CHARGER_IDLE": $ResourceLocation
static readonly "CHARGER_RUNNING": $ResourceLocation
static readonly "CHARGER_RUNNING_EMISSIVE": $ResourceLocation
static readonly "COMPUTER_CASING_TEXTURE": $ResourceLocation
static readonly "CONVERTER_FE_IN": $ResourceLocation
static readonly "CONVERTER_FE_IN_EMISSIVE": $ResourceLocation
static readonly "CONVERTER_FE_OUT": $ResourceLocation
static readonly "CONVERTER_FE_OUT_EMISSIVE": $ResourceLocation
static readonly "CUBE_ALL_SIDED_OVERLAY_MODEL": $ResourceLocation
static readonly "CUBE_ALL_SINGLE_OVERLAY_MODEL": $ResourceLocation
static readonly "EMISSIVE_SUFFIX": string
static readonly "GENERATOR_MODEL": $ResourceLocation
static readonly "HATCH_PART_COLOR_RING_MODEL": $ResourceLocation
static readonly "HATCH_PART_EMISSIVE_COLOR_RING_MODEL": $ResourceLocation
static readonly "HATCH_PART_EMISSIVE_MODEL": $ResourceLocation
static readonly "HATCH_PART_MODEL": $ResourceLocation
static readonly "HPCA_PART_MODEL": $ResourceLocation
static readonly "HP_STEAM_HULL_MODEL": $ResourceLocation
static readonly "LP_STEAM_HULL_MODEL": $ResourceLocation
static readonly "MAINTENANCE_TAPED_OVERLAY": $ResourceLocation
static readonly "MATERIALS_TO_CASING_TEXTURES": $ImmutableMap<$Material, $ResourceLocation>
/** @deprecated */
static readonly "OVERLAY_FLUID_HATCH_HALF_PX_TEX": string
static readonly "OVERLAY_FLUID_HATCH_INPUT": string
static readonly "OVERLAY_FLUID_HATCH_OUTPUT": string
/** @deprecated */
static readonly "OVERLAY_FLUID_HATCH_TEX": string
/** @deprecated */
static readonly "OVERLAY_ITEM_HATCH": string
static readonly "OVERLAY_ITEM_HATCH_INPUT": string
static readonly "OVERLAY_ITEM_HATCH_OUTPUT": string
static readonly "OVERLAY_PREFIX": string
static readonly "OVERLAY_QTANK_EMISSIVE_TEXTURE": $ResourceLocation
static readonly "OVERLAY_SCREEN_TEXTURE": $ResourceLocation
static readonly "ROTOR_HOLDER_BLOCK": $ResourceLocation
static readonly "ROTOR_HOLDER_OVERLAY": $ResourceLocation
static readonly "ROTOR_HOLDER_ROTOR_IDLE": $ResourceLocation
static readonly "ROTOR_HOLDER_ROTOR_SPINNING": $ResourceLocation
static readonly "SIDED_SIDED_OVERLAY_MODEL": $ResourceLocation
static readonly "SIDED_SINGLE_OVERLAY_MODEL": $ResourceLocation
static readonly "TIERED_HULL_MODELS": $Int2ObjectMap<$ResourceLocation>
static readonly "TRANSFORMER_LIKE": $ResourceLocation
static readonly "VENT_OVERLAY": $ResourceLocation

constructor()

public static "addWorkableOverlays"(workableOverlays0: $WorkableOverlays$$Type, status1: $RecipeLogic$Status$$Type, blockModelBuilder2: $BlockModelBuilder$$Type): $ConfiguredModel[]
public static "casingTexture"(blockModelBuilder0: $BlockModelBuilder$$Type, string1: string, resourceLocation2: $ResourceLocation$$Type): void
public static "casingTextures"(blockModelBuilder0: $BlockModelBuilder$$Type, resourceLocation1: $ResourceLocation$$Type): $BlockModelBuilder
public static "colorOverlayHullModel"(resourceLocation0: $ResourceLocation$$Type, resourceLocation1: $ResourceLocation$$Type, resourceLocation2: $ResourceLocation$$Type, machineRenderState3: $MachineRenderState$$Type, blockModelProvider4: $BlockModelProvider$$Type): $BlockModelBuilder
public static "createBasicMachineModel"(resourceLocation0: $ResourceLocation$$Type): $MachineBuilder$ModelInitializer
public static "createBasicReplaceableTextureMachineModel"(resourceLocation0: $ResourceLocation$$Type): $MachineBuilder$ModelInitializer
public static "createBatteryBufferModel"(int0: integer): $MachineBuilder$ModelInitializer
public static "createChargerModel"(): $MachineBuilder$ModelInitializer
public static "createColorOverlaySteamHullMachineModel"(resourceLocation0: $ResourceLocation$$Type, resourceLocation1: $ResourceLocation$$Type, resourceLocation2: $ResourceLocation$$Type): $MachineBuilder$ModelInitializer
public static "createColorOverlayTieredHullMachineModel"(resourceLocation0: $ResourceLocation$$Type, resourceLocation1: $ResourceLocation$$Type, resourceLocation2: $ResourceLocation$$Type): $MachineBuilder$ModelInitializer
public static "createConverterModel"(int0: integer): $MachineBuilder$ModelInitializer
public static "createCrateModel"(boolean0: boolean): $MachineBuilder$ModelInitializer
public static "createDiodeModel"(): $MachineBuilder$ModelInitializer
public static "createFisherModel"(): $MachineBuilder$ModelInitializer
public static "createHPCAPartModel"(boolean0: boolean, resourceLocation1: $ResourceLocation$$Type, resourceLocation2: $ResourceLocation$$Type): $MachineBuilder$ModelInitializer
public static "createItemCollectorModel"(resourceLocation0: $ResourceLocation$$Type): $MachineBuilder$ModelInitializer
public static "createMachineModel"(modelInitializer0: $MachineBuilder$ModelInitializer$$Type): $NonNullBiConsumer<$DataGenContext<$Block, $Block>, $GTBlockstateProvider>
public static "createMaintenanceModel"(resourceLocation0: $ResourceLocation$$Type): $MachineBuilder$ModelInitializer
public static "createOverlayCasingMachineModel"(resourceLocation0: $ResourceLocation$$Type, resourceLocation1: $ResourceLocation$$Type): $MachineBuilder$ModelInitializer
public static "createOverlaySteamHullMachineModel"(resourceLocation0: $ResourceLocation$$Type): $MachineBuilder$ModelInitializer
public static "createOverlayTieredHullMachineModel"(resourceLocation0: $ResourceLocation$$Type): $MachineBuilder$ModelInitializer
public static "createRotorHolderModel"(): $MachineBuilder$ModelInitializer
public static "createSidedOverlayCasingMachineModel"(resourceLocation0: $ResourceLocation$$Type, resourceLocation1: $ResourceLocation$$Type): $MachineBuilder$ModelInitializer
public static "createSidedWorkableCasingMachineModel"(resourceLocation0: $ResourceLocation$$Type, resourceLocation1: $ResourceLocation$$Type): $MachineBuilder$ModelInitializer
public static "createSimpleGeneratorModel"(resourceLocation0: $ResourceLocation$$Type): $MachineBuilder$ModelInitializer
public static "createSingleOverlayTieredHullMachineModel"(resourceLocation0: $ResourceLocation$$Type, resourceLocation1: $ResourceLocation$$Type): $MachineBuilder$ModelInitializer
public static "createTieredHullMachineModel"(resourceLocation0: $ResourceLocation$$Type): $MachineBuilder$ModelInitializer
public static "createTransformerModel"(int0: integer): $MachineBuilder$ModelInitializer
public static "createWorkableCasingMachineModel"(resourceLocation0: $ResourceLocation$$Type, resourceLocation1: $ResourceLocation$$Type): $MachineBuilder$ModelInitializer
public static "createWorkableSteamHullMachineModel"(boolean0: boolean, resourceLocation1: $ResourceLocation$$Type): $MachineBuilder$ModelInitializer
public static "createWorkableTieredHullMachineModel"(resourceLocation0: $ResourceLocation$$Type): $MachineBuilder$ModelInitializer
public static "createWorldAcceleratorModel"(resourceLocation0: $ResourceLocation$$Type, resourceLocation1: $ResourceLocation$$Type): $MachineBuilder$ModelInitializer
public static "getSteamCasingTexture"(boolean0: boolean): $ResourceLocation
public static "getTieredHullTexture"(int0: integer): $ResourceLocation
public static "steamCasingTextures"(blockModelBuilder0: $BlockModelBuilder$$Type, boolean1: boolean): $BlockModelBuilder
public static "steamHullModel"(blockModelProvider0: $BlockModelProvider$$Type, boolean1: boolean): $ModelFile
public static "tieredHullModel"(blockModelProvider0: $BlockModelProvider$$Type, int1: integer): $ModelFile
public static "tieredHullModel"(blockModelProvider0: $BlockModelProvider$$Type, machineModelBuilder1: $MachineModelBuilder$$Type<$BlockModelBuilder$$Type>): $ModelFile
public static "tieredHullTextures"(blockModelBuilder0: $BlockModelBuilder$$Type, int1: integer): $BlockModelBuilder
}
}

declare module "com.gregtechceu.gtceu.common.pipelike.cable.Insulation" {
import { $ResourceLocation } from "net.minecraft.resources.ResourceLocation"
import { $TagPrefix } from "com.gregtechceu.gtceu.api.data.tag.TagPrefix"
import { $Enum } from "java.lang.Enum"
import { $PipeModel } from "com.gregtechceu.gtceu.client.model.pipe.PipeModel"
import { $WireProperties, $WireProperties$$Type } from "com.gregtechceu.gtceu.api.data.chemical.material.properties.WireProperties"
import { $IMaterialPipeType } from "com.gregtechceu.gtceu.api.pipenet.IMaterialPipeType"
import { $Material$$Type } from "com.gregtechceu.gtceu.api.data.chemical.material.Material"
import { $GTBlockstateProvider$$Type } from "com.gregtechceu.gtceu.api.registry.registrate.provider.GTBlockstateProvider"
import { $PipeBlock$$Type } from "com.gregtechceu.gtceu.api.block.PipeBlock"

export class $Insulation extends $Enum<$Insulation> implements $IMaterialPipeType<$WireProperties> {
static readonly "CABLE_DOUBLE": $Insulation
static readonly "CABLE_HEX": $Insulation
static readonly "CABLE_OCTAL": $Insulation
static readonly "CABLE_QUADRUPLE": $Insulation
static readonly "CABLE_SINGLE": $Insulation
static readonly "TYPE_ID": $ResourceLocation
static readonly "WIRE_DOUBLE": $Insulation
static readonly "WIRE_HEX": $Insulation
static readonly "WIRE_OCTAL": $Insulation
static readonly "WIRE_QUADRUPLE": $Insulation
static readonly "WIRE_SINGLE": $Insulation
readonly "amperage": integer
readonly "insulationLevel": integer
readonly "isCable": boolean
readonly "lossMultiplier": integer
readonly "name": string
readonly "tagPrefix": $TagPrefix
readonly "thickness": float

public "createPipeModel"(pipeBlock0: $PipeBlock$$Type<any, any, any>, material1: $Material$$Type, gTBlockstateProvider2: $GTBlockstateProvider$$Type): $PipeModel
public "getTagPrefix"(): $TagPrefix
public "getThickness"(): float
public "isCable"(): boolean
public "isPaintable"(): boolean
public "modifyProperties"(wireProperties0: $WireProperties$$Type): $WireProperties
public "type"(): $ResourceLocation
public static "valueOf"(string0: string): $Insulation
public static "values"(): $Insulation[]
get "cable"(): boolean
get "paintable"(): boolean
}
}

declare module "com.gregtechceu.gtceu.common.block.RubberWoodBlock" {
import { $ResourceLocation } from "net.minecraft.resources.ResourceLocation"
import { $LivingEntity$$Type } from "net.minecraft.world.entity.LivingEntity"
import { $Direction, $Direction$$Type } from "net.minecraft.core.Direction"
import { $EntityType$$Type } from "net.minecraft.world.entity.EntityType"
import { $Item$$Type } from "net.minecraft.world.item.Item"
import { $BlockState, $BlockState$$Type } from "net.minecraft.world.level.block.state.BlockState"
import { $SpawnPlacements$Type$$Type } from "net.minecraft.world.entity.SpawnPlacements$Type"
import { $BlockBehaviour$Properties$$Type } from "net.minecraft.world.level.block.state.BlockBehaviour$Properties"
import { $ServerLevel$$Type } from "net.minecraft.server.level.ServerLevel"
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
import { $RotatedPillarBlock } from "net.minecraft.world.level.block.RotatedPillarBlock"
import { $Level$$Type } from "net.minecraft.world.level.Level"
import { $Mob$$Type } from "net.minecraft.world.entity.Mob"

export class $RubberWoodBlock extends $RotatedPillarBlock {
constructor(properties0: $BlockBehaviour$Properties$$Type)

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
get "blockStates"(): $List<$BlockState>
get "mod"(): string
set "destroySpeed"(value: float)
set "lightEmission"(value: integer)
set "requiresTool"(value: boolean)
}
}

declare module "com.gregtechceu.gtceu.common.data.machines.GTMachineUtils" {
import { $ResourceLocation$$Type } from "net.minecraft.resources.ResourceLocation"
import { $BoilerFireboxType$$Type } from "com.gregtechceu.gtceu.common.block.BoilerFireboxType"
import { $GTRecipeType$$Type } from "com.gregtechceu.gtceu.api.recipe.GTRecipeType"
import { $GTRegistrate$$Type } from "com.gregtechceu.gtceu.api.registry.registrate.GTRegistrate"
import { $BiFunction$$Type } from "java.util.function.BiFunction"
import { $Supplier$$Type } from "java.util.function.Supplier"
import { $IO$$Type } from "com.gregtechceu.gtceu.api.capability.recipe.IO"
import { $Int2IntFunction, $Int2IntFunction$$Type } from "it.unimi.dsi.fastutil.ints.Int2IntFunction"
import { $Pair } from "it.unimi.dsi.fastutil.Pair"
import { $PropertyFluidFilter$$Type } from "com.gregtechceu.gtceu.api.fluids.PropertyFluidFilter"
import { $BiConsumer, $BiConsumer$$Type } from "java.util.function.BiConsumer"
import { $MultiblockMachineDefinition } from "com.gregtechceu.gtceu.api.machine.MultiblockMachineDefinition"
import { $MultiblockMachineBuilder$$Type } from "com.gregtechceu.gtceu.api.registry.registrate.MultiblockMachineBuilder"
import { $PartAbility, $PartAbility$$Type } from "com.gregtechceu.gtceu.api.machine.multiblock.PartAbility"
import { $Component } from "net.minecraft.network.chat.Component"
import { $MachineBuilder$$Type } from "com.gregtechceu.gtceu.api.registry.registrate.MachineBuilder"
import { $MetaMachine } from "com.gregtechceu.gtceu.api.machine.MetaMachine"
import { $MedicalCondition$$Type } from "com.gregtechceu.gtceu.api.data.medicalcondition.MedicalCondition"
import { $List } from "java.util.List"
import { $MultiblockControllerMachine } from "com.gregtechceu.gtceu.api.machine.multiblock.MultiblockControllerMachine"
import { $Object2IntMap } from "it.unimi.dsi.fastutil.objects.Object2IntMap"
import { $MachineDefinition, $MachineDefinition$$Type } from "com.gregtechceu.gtceu.api.machine.MachineDefinition"
import { $IMachineBlockEntity$$Type } from "com.gregtechceu.gtceu.api.machine.IMachineBlockEntity"
import { $Block } from "net.minecraft.world.level.block.Block"
import { $ItemStack } from "net.minecraft.world.item.ItemStack"
import { $Material$$Type } from "com.gregtechceu.gtceu.api.data.chemical.material.Material"

export class $GTMachineUtils {
static readonly "ALL_TIERS": integer[]
static "CHEST_TOOLTIPS": $BiConsumer<$ItemStack, $List<$Component>>
static "DRUM_CAPACITY": $Object2IntMap<$MachineDefinition>
static readonly "DUAL_HATCH_TIERS": integer[]
static readonly "DUAL_INPUT_HATCH_ABILITIES": $PartAbility[]
static readonly "DUAL_OUTPUT_HATCH_ABILITIES": $PartAbility[]
static readonly "ELECTRIC_TIERS": integer[]
static readonly "HIGH_TIERS": integer[]
static readonly "LOW_TIERS": integer[]
static readonly "MULTI_HATCH_TIERS": integer[]
static "TANK_TOOLTIPS": $BiConsumer<$ItemStack, $List<$Component>>
static readonly "defaultTankSizeFunction": $Int2IntFunction
static readonly "genericGeneratorTankSizeFunction": $Int2IntFunction
static readonly "hvCappedTankSizeFunction": $Int2IntFunction
static readonly "largeTankSizeFunction": $Int2IntFunction
static readonly "steamGeneratorTankSizeFunction": $Int2IntFunction

constructor()

public static "defaultEnvironmentRequirement"(): $Component
public static "environmentRequirement"(medicalCondition0: $MedicalCondition$$Type): $Component
public static "explosion"(): $Component
public static "init"(): void
public static "registerBatteryBuffer"(gTRegistrate0: $GTRegistrate$$Type, int1: integer): $MachineDefinition[]
public static "registerBatteryBuffer"(int0: integer): $MachineDefinition[]
public static "registerCharger"(gTRegistrate0: $GTRegistrate$$Type, int1: integer): $MachineDefinition[]
public static "registerCharger"(int0: integer): $MachineDefinition[]
public static "registerConverter"(int0: integer): $MachineDefinition[]
public static "registerConverter"(gTRegistrate0: $GTRegistrate$$Type, int1: integer): $MachineDefinition[]
public static "registerCrate"(gTRegistrate0: $GTRegistrate$$Type, material1: $Material$$Type, int2: integer, string3: string): $MachineDefinition
public static "registerCrate"(material0: $Material$$Type, int1: integer, string2: string): $MachineDefinition
public static "registerDrum"(gTRegistrate0: $GTRegistrate$$Type, material1: $Material$$Type, int2: integer, string3: string): $MachineDefinition
public static "registerDrum"(material0: $Material$$Type, int1: integer, string2: string): $MachineDefinition
public static "registerFluidHatches"(gTRegistrate0: $GTRegistrate$$Type, string1: string, string2: string, string3: string, iO4: $IO$$Type, int5: integer, int6: integer, int7s: integer[], ...partAbility8s: $PartAbility$$Type[]): $MachineDefinition[]
public static "registerFluidHatches"(string0: string, string1: string, string2: string, iO3: $IO$$Type, int4: integer, int5: integer, int6s: integer[], ...partAbility7s: $PartAbility$$Type[]): $MachineDefinition[]
public static "registerLargeBoiler"(string0: string, supplier1: $Supplier$$Type<$Block>, supplier2: $Supplier$$Type<$Block>, supplier3: $Supplier$$Type<$Block>, resourceLocation4: $ResourceLocation$$Type, boilerFireboxType5: $BoilerFireboxType$$Type, int6: integer, int7: integer): $MultiblockMachineDefinition
public static "registerLargeBoiler"(gTRegistrate0: $GTRegistrate$$Type, string1: string, supplier2: $Supplier$$Type<$Block>, supplier3: $Supplier$$Type<$Block>, supplier4: $Supplier$$Type<$Block>, resourceLocation5: $ResourceLocation$$Type, boilerFireboxType6: $BoilerFireboxType$$Type, int7: integer, int8: integer): $MultiblockMachineDefinition
public static "registerLargeCombustionEngine"(string0: string, int1: integer, supplier2: $Supplier$$Type<$Block>, supplier3: $Supplier$$Type<$Block>, supplier4: $Supplier$$Type<$Block>, resourceLocation5: $ResourceLocation$$Type, resourceLocation6: $ResourceLocation$$Type): $MultiblockMachineDefinition
public static "registerLargeCombustionEngine"(gTRegistrate0: $GTRegistrate$$Type, string1: string, int2: integer, supplier3: $Supplier$$Type<$Block>, supplier4: $Supplier$$Type<$Block>, supplier5: $Supplier$$Type<$Block>, resourceLocation6: $ResourceLocation$$Type, resourceLocation7: $ResourceLocation$$Type): $MultiblockMachineDefinition
public static "registerLargeTurbine"(gTRegistrate0: $GTRegistrate$$Type, string1: string, int2: integer, gTRecipeType3: $GTRecipeType$$Type, supplier4: $Supplier$$Type<$Block>, supplier5: $Supplier$$Type<$Block>, resourceLocation6: $ResourceLocation$$Type, resourceLocation7: $ResourceLocation$$Type, boolean8: boolean): $MultiblockMachineDefinition
public static "registerLargeTurbine"(gTRegistrate0: $GTRegistrate$$Type, string1: string, int2: integer, gTRecipeType3: $GTRecipeType$$Type, supplier4: $Supplier$$Type<$Block>, supplier5: $Supplier$$Type<$Block>, resourceLocation6: $ResourceLocation$$Type, resourceLocation7: $ResourceLocation$$Type): $MultiblockMachineDefinition
public static "registerLargeTurbine"(string0: string, int1: integer, gTRecipeType2: $GTRecipeType$$Type, supplier3: $Supplier$$Type<$Block>, supplier4: $Supplier$$Type<$Block>, resourceLocation5: $ResourceLocation$$Type, resourceLocation6: $ResourceLocation$$Type, boolean7: boolean): $MultiblockMachineDefinition
public static "registerLargeTurbine"(string0: string, int1: integer, gTRecipeType2: $GTRecipeType$$Type, supplier3: $Supplier$$Type<$Block>, supplier4: $Supplier$$Type<$Block>, resourceLocation5: $ResourceLocation$$Type, resourceLocation6: $ResourceLocation$$Type): $MultiblockMachineDefinition
public static "registerLaserHatch"(gTRegistrate0: $GTRegistrate$$Type, iO1: $IO$$Type, int2: integer, partAbility3: $PartAbility$$Type): $MachineDefinition[]
public static "registerLaserHatch"(iO0: $IO$$Type, int1: integer, partAbility2: $PartAbility$$Type): $MachineDefinition[]
public static "registerMultiblockTank"(gTRegistrate0: $GTRegistrate$$Type, string1: string, string2: string, int3: integer, supplier4: $Supplier$$Type<$Block>, supplier5: $Supplier$$Type<$Block>, propertyFluidFilter6: $PropertyFluidFilter$$Type, biConsumer7: $BiConsumer$$Type<$MultiblockMachineBuilder$$Type, $ResourceLocation$$Type>): $MultiblockMachineDefinition
public static "registerMultiblockTank"(string0: string, string1: string, int2: integer, supplier3: $Supplier$$Type<$Block>, supplier4: $Supplier$$Type<$Block>, propertyFluidFilter5: $PropertyFluidFilter$$Type, biConsumer6: $BiConsumer$$Type<$MultiblockMachineBuilder$$Type, $ResourceLocation$$Type>): $MultiblockMachineDefinition
public static "registerQuantumChests"(gTRegistrate0: $GTRegistrate$$Type, string1: string, ...int2s: integer[]): $MachineDefinition[]
public static "registerQuantumChests"(string0: string, ...int1s: integer[]): $MachineDefinition[]
public static "registerQuantumTanks"(string0: string, ...int1s: integer[]): $MachineDefinition[]
public static "registerQuantumTanks"(gTRegistrate0: $GTRegistrate$$Type, string1: string, ...int2s: integer[]): $MachineDefinition[]
public static "registerSimpleGenerator"(gTRegistrate0: $GTRegistrate$$Type, string1: string, gTRecipeType2: $GTRecipeType$$Type, int2IntFunction3: $Int2IntFunction$$Type, float4: float, ...int5s: integer[]): $MachineDefinition[]
public static "registerSimpleGenerator"(string0: string, gTRecipeType1: $GTRecipeType$$Type, int2IntFunction2: $Int2IntFunction$$Type, float3: float, ...int4s: integer[]): $MachineDefinition[]
public static "registerSimpleMachines"(gTRegistrate0: $GTRegistrate$$Type, string1: string, gTRecipeType2: $GTRecipeType$$Type, int2IntFunction3: $Int2IntFunction$$Type): $MachineDefinition[]
public static "registerSimpleMachines"(string0: string, gTRecipeType1: $GTRecipeType$$Type, int2IntFunction2: $Int2IntFunction$$Type): $MachineDefinition[]
public static "registerSimpleMachines"(gTRegistrate0: $GTRegistrate$$Type, string1: string, gTRecipeType2: $GTRecipeType$$Type, int2IntFunction3: $Int2IntFunction$$Type, boolean4: boolean): $MachineDefinition[]
public static "registerSimpleMachines"(string0: string, gTRecipeType1: $GTRecipeType$$Type, int2IntFunction2: $Int2IntFunction$$Type, boolean3: boolean): $MachineDefinition[]
public static "registerSimpleMachines"(gTRegistrate0: $GTRegistrate$$Type, string1: string, gTRecipeType2: $GTRecipeType$$Type, int2IntFunction3: $Int2IntFunction$$Type, boolean4: boolean, ...int5s: integer[]): $MachineDefinition[]
public static "registerSimpleMachines"(gTRegistrate0: $GTRegistrate$$Type, string1: string, gTRecipeType2: $GTRecipeType$$Type): $MachineDefinition[]
public static "registerSimpleMachines"(string0: string, gTRecipeType1: $GTRecipeType$$Type): $MachineDefinition[]
public static "registerSimpleSteamMachines"(string0: string, gTRecipeType1: $GTRecipeType$$Type): $Pair<$MachineDefinition, $MachineDefinition>
public static "registerSimpleSteamMachines"(gTRegistrate0: $GTRegistrate$$Type, string1: string, gTRecipeType2: $GTRecipeType$$Type): $Pair<$MachineDefinition, $MachineDefinition>
public static "registerSteamMachines"(gTRegistrate0: $GTRegistrate$$Type, string1: string, biFunction2: $BiFunction$$Type<$IMachineBlockEntity$$Type, boolean, $MetaMachine>, biFunction3: $BiFunction$$Type<boolean, $MachineBuilder$$Type<$MachineDefinition$$Type, any>, $MachineDefinition>): $Pair<$MachineDefinition, $MachineDefinition>
public static "registerSteamMachines"(string0: string, biFunction1: $BiFunction$$Type<$IMachineBlockEntity$$Type, boolean, $MetaMachine>, biFunction2: $BiFunction$$Type<boolean, $MachineBuilder$$Type<$MachineDefinition$$Type, any>, $MachineDefinition>): $Pair<$MachineDefinition, $MachineDefinition>
public static "registerTankValve"(string0: string, string1: string, boolean2: boolean, biConsumer3: $BiConsumer$$Type<$MachineBuilder$$Type<any, any>, $ResourceLocation$$Type>): $MachineDefinition
public static "registerTankValve"(gTRegistrate0: $GTRegistrate$$Type, string1: string, string2: string, boolean3: boolean, biConsumer4: $BiConsumer$$Type<$MachineBuilder$$Type<any, any>, $ResourceLocation$$Type>): $MachineDefinition
public static "registerTieredMachines"(gTRegistrate0: $GTRegistrate$$Type, string1: string, biFunction2: $BiFunction$$Type<$IMachineBlockEntity$$Type, integer, $MetaMachine>, biFunction3: $BiFunction$$Type<integer, $MachineBuilder$$Type<$MachineDefinition$$Type, any>, $MachineDefinition>, ...int4s: integer[]): $MachineDefinition[]
public static "registerTieredMachines"(string0: string, biFunction1: $BiFunction$$Type<$IMachineBlockEntity$$Type, integer, $MetaMachine>, biFunction2: $BiFunction$$Type<integer, $MachineBuilder$$Type<$MachineDefinition$$Type, any>, $MachineDefinition>, ...int3s: integer[]): $MachineDefinition[]
public static "registerTieredMultis"(gTRegistrate0: $GTRegistrate$$Type, string1: string, biFunction2: $BiFunction$$Type<$IMachineBlockEntity$$Type, integer, $MultiblockControllerMachine>, biFunction3: $BiFunction$$Type<integer, $MultiblockMachineBuilder$$Type<any, any>, $MultiblockMachineDefinition>, ...int4s: integer[]): $MultiblockMachineDefinition[]
public static "registerTieredMultis"(string0: string, biFunction1: $BiFunction$$Type<$IMachineBlockEntity$$Type, integer, $MultiblockControllerMachine>, biFunction2: $BiFunction$$Type<integer, $MultiblockMachineBuilder$$Type<any, any>, $MultiblockMachineDefinition>, ...int3s: integer[]): $MultiblockMachineDefinition[]
public static "registerTransformerMachines"(gTRegistrate0: $GTRegistrate$$Type, string1: string, int2: integer): $MachineDefinition[]
public static "registerTransformerMachines"(string0: string, int1: integer): $MachineDefinition[]
public static "workableTiered"(int0: integer, long1: long, long2: long, gTRecipeType3: $GTRecipeType$$Type, long4: long, boolean5: boolean): $Component[]
}
}

declare module "com.gregtechceu.gtceu.common.pipelike.laser.LaserRoutePath" {
import { $ILaserContainer } from "com.gregtechceu.gtceu.api.capability.ILaserContainer"
import { $IRoutePath } from "com.gregtechceu.gtceu.api.pipenet.IRoutePath"
import { $IAttachData } from "com.gregtechceu.gtceu.api.pipenet.IAttachData"
import { $BlockPos, $BlockPos$$Type } from "net.minecraft.core.BlockPos"
import { $Direction, $Direction$$Type } from "net.minecraft.core.Direction"
import { $BlockEntity } from "net.minecraft.world.level.block.entity.BlockEntity"
import { $Level$$Type } from "net.minecraft.world.level.Level"
import { $Capability$$Type } from "net.minecraftforge.common.capabilities.Capability"

export class $LaserRoutePath implements $IRoutePath<$ILaserContainer>, $IAttachData {
constructor(blockPos0: $BlockPos$$Type, direction1: $Direction$$Type, int2: integer)

public "canAttachTo"(direction0: $Direction$$Type): boolean
public "getConnections"(): byte
public "getDistance"(): integer
public "getTargetBlockEntity"(level0: $Level$$Type): $BlockEntity
public "getTargetCapability"<I>(capability0: $Capability$$Type<I>, level1: $Level$$Type): I
public "getTargetFacing"(): $Direction
public "getTargetPipePos"(): $BlockPos
public "setAttached"(direction0: $Direction$$Type, boolean1: boolean): boolean
get "connections"(): byte
get "distance"(): integer
get "targetFacing"(): $Direction
get "targetPipePos"(): $BlockPos
}
}

declare module "com.gregtechceu.gtceu.common.pipelike.duct.DuctRoutePath" {
import { $IRoutePath } from "com.gregtechceu.gtceu.api.pipenet.IRoutePath"
import { $IHazardParticleContainer } from "com.gregtechceu.gtceu.api.capability.IHazardParticleContainer"
import { $BlockPos } from "net.minecraft.core.BlockPos"
import { $Direction, $Direction$$Type } from "net.minecraft.core.Direction"
import { $DuctPipeBlockEntity, $DuctPipeBlockEntity$$Type } from "com.gregtechceu.gtceu.common.blockentity.DuctPipeBlockEntity"
import { $DuctPipeProperties, $DuctPipeProperties$$Type } from "com.gregtechceu.gtceu.common.pipelike.duct.DuctPipeProperties"
import { $FacingPos } from "com.gregtechceu.gtceu.utils.FacingPos"
import { $BlockEntity } from "net.minecraft.world.level.block.entity.BlockEntity"
import { $Level$$Type } from "net.minecraft.world.level.Level"
import { $Capability$$Type } from "net.minecraftforge.common.capabilities.Capability"

export class $DuctRoutePath implements $IRoutePath<$IHazardParticleContainer> {
constructor(ductPipeBlockEntity0: $DuctPipeBlockEntity$$Type, direction1: $Direction$$Type, int2: integer, ductPipeProperties3: $DuctPipeProperties$$Type)

public "getDistance"(): integer
public "getProperties"(): $DuctPipeProperties
public "getTargetBlockEntity"(level0: $Level$$Type): $BlockEntity
public "getTargetCapability"<I>(capability0: $Capability$$Type<I>, level1: $Level$$Type): I
public "getTargetFacing"(): $Direction
public "getTargetPipe"(): $DuctPipeBlockEntity
public "getTargetPipePos"(): $BlockPos
public "toFacingPos"(): $FacingPos
get "distance"(): integer
get "properties"(): $DuctPipeProperties
get "targetFacing"(): $Direction
get "targetPipe"(): $DuctPipeBlockEntity
get "targetPipePos"(): $BlockPos
}
}

declare module "com.gregtechceu.gtceu.common.block.LampBlock" {
import { $ResourceLocation } from "net.minecraft.resources.ResourceLocation"
import { $DyeColor, $DyeColor$$Type } from "net.minecraft.world.item.DyeColor"
import { $LivingEntity$$Type } from "net.minecraft.world.entity.LivingEntity"
import { $Direction, $Direction$$Type } from "net.minecraft.core.Direction"
import { $EntityType$$Type } from "net.minecraft.world.entity.EntityType"
import { $Item$$Type } from "net.minecraft.world.item.Item"
import { $BlockState, $BlockState$$Type } from "net.minecraft.world.level.block.state.BlockState"
import { $SpawnPlacements$Type$$Type } from "net.minecraft.world.entity.SpawnPlacements$Type"
import { $BlockBehaviour$Properties$$Type } from "net.minecraft.world.level.block.state.BlockBehaviour$Properties"
import { $ServerLevel$$Type } from "net.minecraft.server.level.ServerLevel"
import { $BooleanProperty } from "net.minecraft.world.level.block.state.properties.BooleanProperty"
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
import { $CompoundTag, $CompoundTag$$Type } from "net.minecraft.nbt.CompoundTag"
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

export class $LampBlock extends $Block {
static readonly "BLOOM": $BooleanProperty
static readonly "BLOOM_FLAG": integer
static readonly "INVERTED": $BooleanProperty
static readonly "INVERTED_FLAG": integer
static readonly "LIGHT": $BooleanProperty
static readonly "LIGHT_FLAG": integer
static readonly "POWERED": $BooleanProperty
static readonly "POWERED_FLAG": integer
static readonly "TAG_BLOOM": string
static readonly "TAG_INVERTED": string
static readonly "TAG_LIT": string
readonly "bordered": boolean
readonly "color": $DyeColor

constructor(properties0: $BlockBehaviour$Properties$$Type, dyeColor1: $DyeColor$$Type, boolean2: boolean)

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
public "getPistonPushReaction"(blockState0: $BlockState$$Type): $PushReaction
public "getRespawnPosition"(blockState0: $BlockState$$Type, entityType1: $EntityType$$Type<any>, levelReader2: $LevelReader$$Type, blockPos3: $BlockPos$$Type, float4: float, livingEntity5: $LivingEntity$$Type): $Optional<$Vec3>
public "getSoundType"(blockState0: $BlockState$$Type, levelReader1: $LevelReader$$Type, blockPos2: $BlockPos$$Type, entity3: $Entity$$Type): $SoundType
public "getStackFromIndex"(int0: integer): $ItemStack
public "getStateAtViewpoint"(blockState0: $BlockState$$Type, blockGetter1: $BlockGetter$$Type, blockPos2: $BlockPos$$Type, vec33: $Vec3$$Type): $BlockState
public "getTagFromState"(blockState0: $BlockState$$Type): $CompoundTag
public "getToolModifiedState"(blockState0: $BlockState$$Type, useOnContext1: $UseOnContext$$Type, toolAction2: $ToolAction$$Type, boolean3: boolean): $BlockState
public "getWeakChanges"(blockState0: $BlockState$$Type, levelReader1: $LevelReader$$Type, blockPos2: $BlockPos$$Type): boolean
public "hidesNeighborFace"(blockGetter0: $BlockGetter$$Type, blockPos1: $BlockPos$$Type, blockState2: $BlockState$$Type, blockState3: $BlockState$$Type, direction4: $Direction$$Type): boolean
public "isBed"(blockState0: $BlockState$$Type, blockGetter1: $BlockGetter$$Type, blockPos2: $BlockPos$$Type, entity3: $Entity$$Type): boolean
public static "isBloomEnabled"(blockState0: $BlockState$$Type): boolean
public static "isBloomEnabled"(compoundTag0: $CompoundTag$$Type): boolean
public "isBurning"(blockState0: $BlockState$$Type, blockGetter1: $BlockGetter$$Type, blockPos2: $BlockPos$$Type): boolean
public "isConduitFrame"(blockState0: $BlockState$$Type, levelReader1: $LevelReader$$Type, blockPos2: $BlockPos$$Type, blockPos3: $BlockPos$$Type): boolean
public "isEnabled"(featureFlagSet0: $FeatureFlagSet$$Type): boolean
public "isFertile"(blockState0: $BlockState$$Type, blockGetter1: $BlockGetter$$Type, blockPos2: $BlockPos$$Type): boolean
public "isFireSource"(blockState0: $BlockState$$Type, levelReader1: $LevelReader$$Type, blockPos2: $BlockPos$$Type, direction3: $Direction$$Type): boolean
public "isFlammable"(blockState0: $BlockState$$Type, blockGetter1: $BlockGetter$$Type, blockPos2: $BlockPos$$Type, direction3: $Direction$$Type): boolean
public static "isInverted"(blockState0: $BlockState$$Type): boolean
public static "isInverted"(compoundTag0: $CompoundTag$$Type): boolean
public "isLadder"(blockState0: $BlockState$$Type, levelReader1: $LevelReader$$Type, blockPos2: $BlockPos$$Type, livingEntity3: $LivingEntity$$Type): boolean
public static "isLightActive"(blockState0: $BlockState$$Type): boolean
public static "isLightEnabled"(compoundTag0: $CompoundTag$$Type): boolean
public static "isLightEnabled"(blockState0: $BlockState$$Type): boolean
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
get "blockStates"(): $List<$BlockState>
get "mod"(): string
set "destroySpeed"(value: float)
set "lightEmission"(value: integer)
set "requiresTool"(value: boolean)
}
}

declare module "com.gregtechceu.gtceu.common.data.GTItems" {
import { $ResourceLocation, $ResourceLocation$$Type } from "net.minecraft.resources.ResourceLocation"
import { $GTBoatItem } from "com.gregtechceu.gtceu.common.item.GTBoatItem"
import { $TagPrefix$$Type } from "com.gregtechceu.gtceu.api.data.tag.TagPrefix"
import { $Tier$$Type } from "net.minecraft.world.item.Tier"
import { $Item, $Item$$Type } from "net.minecraft.world.item.Item"
import { $MarkerMaterial } from "com.gregtechceu.gtceu.api.data.chemical.material.MarkerMaterial"
import { $ItemPropertyFunction } from "net.minecraft.client.renderer.item.ItemPropertyFunction"
import { $ItemMaterialInfo$$Type } from "com.gregtechceu.gtceu.api.data.chemical.material.stack.ItemMaterialInfo"
import { $Supplier, $Supplier$$Type } from "java.util.function.Supplier"
import { $ItemBuilder, $ItemBuilder$$Type } from "com.tterrag.registrate.builders.ItemBuilder"
import { $MaterialToolTier$$Type } from "com.gregtechceu.gtceu.api.item.tool.MaterialToolTier"
import { $ItemEntry } from "com.tterrag.registrate.util.entry.ItemEntry"
import { $ItemLike, $ItemLike$$Type } from "net.minecraft.world.level.ItemLike"
import { $Map } from "java.util.Map"
import { $GTItems$StackProperty$$Type } from "com.gregtechceu.gtceu.common.data.GTItems$StackProperty"
import { $RecordItem } from "net.minecraft.world.item.RecordItem"
import { $ICustomDescriptionId } from "com.gregtechceu.gtceu.api.item.component.ICustomDescriptionId"
import { $NonNullFunction } from "com.tterrag.registrate.util.nullness.NonNullFunction"
import { $IComponentItem, $IComponentItem$$Type } from "com.gregtechceu.gtceu.api.item.IComponentItem"
import { $Collection$$Type } from "java.util.Collection"
import { $ComponentItem, $ComponentItem$$Type } from "com.gregtechceu.gtceu.api.item.ComponentItem"
import { $NonNullConsumer } from "com.tterrag.registrate.util.nullness.NonNullConsumer"
import { $IItemComponent$$Type } from "com.gregtechceu.gtceu.api.item.component.IItemComponent"
import { $ArmorComponentItem } from "com.gregtechceu.gtceu.api.item.armor.ArmorComponentItem"
import { $DyeItem } from "net.minecraft.world.item.DyeItem"
import { $Material$$Type } from "com.gregtechceu.gtceu.api.data.chemical.material.Material"
import { $ItemColor } from "net.minecraft.client.color.item.ItemColor"

export class $GTItems {
static "ADVANCED_CIRCUIT_BOARD": $ItemEntry<$Item>
static "ADVANCED_SMD_CAPACITOR": $ItemEntry<$Item>
static "ADVANCED_SMD_DIODE": $ItemEntry<$Item>
static "ADVANCED_SMD_INDUCTOR": $ItemEntry<$Item>
static "ADVANCED_SMD_RESISTOR": $ItemEntry<$Item>
static "ADVANCED_SMD_TRANSISTOR": $ItemEntry<$Item>
static "ADVANCED_SYSTEM_ON_CHIP": $ItemEntry<$Item>
static "ADVANCED_SYSTEM_ON_CHIP_WAFER": $ItemEntry<$Item>
static "BASIC_CIRCUIT_BOARD": $ItemEntry<$Item>
static "BASIC_TAPE": $ItemEntry<$ComponentItem>
static "BATTERY_EV_VANADIUM": $ItemEntry<$ComponentItem>
static "BATTERY_HULL_HV": $ItemEntry<$Item>
static "BATTERY_HULL_LARGE_NAQUADRIA": $ItemEntry<$Item>
static "BATTERY_HULL_LARGE_VANADIUM": $ItemEntry<$Item>
static "BATTERY_HULL_LV": $ItemEntry<$Item>
static "BATTERY_HULL_MEDIUM_NAQUADRIA": $ItemEntry<$Item>
static "BATTERY_HULL_MEDIUM_VANADIUM": $ItemEntry<$Item>
static "BATTERY_HULL_MV": $ItemEntry<$Item>
static "BATTERY_HULL_SMALL_VANADIUM": $ItemEntry<$Item>
static "BATTERY_HV_CADMIUM": $ItemEntry<$ComponentItem>
static "BATTERY_HV_LITHIUM": $ItemEntry<$ComponentItem>
static "BATTERY_HV_SODIUM": $ItemEntry<$ComponentItem>
static "BATTERY_IV_VANADIUM": $ItemEntry<$ComponentItem>
static "BATTERY_LV_CADMIUM": $ItemEntry<$ComponentItem>
static "BATTERY_LV_LITHIUM": $ItemEntry<$ComponentItem>
static "BATTERY_LV_SODIUM": $ItemEntry<$ComponentItem>
static "BATTERY_LuV_VANADIUM": $ItemEntry<$ComponentItem>
static "BATTERY_MV_CADMIUM": $ItemEntry<$ComponentItem>
static "BATTERY_MV_LITHIUM": $ItemEntry<$ComponentItem>
static "BATTERY_MV_SODIUM": $ItemEntry<$ComponentItem>
static "BATTERY_ULV_TANTALUM": $ItemEntry<$ComponentItem>
static "BATTERY_UV_NAQUADRIA": $ItemEntry<$ComponentItem>
static "BATTERY_ZPM_NAQUADRIA": $ItemEntry<$ComponentItem>
static "BIO_CHAFF": $ItemEntry<$ComponentItem>
static "BLACKLIGHT": $ItemEntry<$Item>
static "BOTTLE_PURPLE_DRINK": $ItemEntry<$ComponentItem>
static "CAMERA": $ItemEntry<$Item>
static "CAPACITOR": $ItemEntry<$Item>
static "CARBON_FIBERS": $ItemEntry<$Item>
static "CARBON_FIBER_PLATE": $ItemEntry<$Item>
static "CARBON_MESH": $ItemEntry<$Item>
static "CENTRAL_PROCESSING_UNIT": $ItemEntry<$Item>
static "CENTRAL_PROCESSING_UNIT_WAFER": $ItemEntry<$Item>
static "CLIPBOARD": $ItemEntry<$Item>
static "COATED_BOARD": $ItemEntry<$Item>
static "COKE_OVEN_BRICK": $ItemEntry<$Item>
static "COMPONENT_GRINDER_DIAMOND": $ItemEntry<$Item>
static "COMPONENT_GRINDER_TUNGSTEN": $ItemEntry<$Item>
static "COMPRESSED_CLAY": $ItemEntry<$Item>
static "COMPRESSED_COKE_CLAY": $ItemEntry<$Item>
static "COMPRESSED_FIRECLAY": $ItemEntry<$Item>
static "CONVEYOR_MODULE_EV": $ItemEntry<$ComponentItem>
static "CONVEYOR_MODULE_HV": $ItemEntry<$ComponentItem>
static "CONVEYOR_MODULE_IV": $ItemEntry<$ComponentItem>
static "CONVEYOR_MODULE_LV": $ItemEntry<$ComponentItem>
static "CONVEYOR_MODULE_LuV": $ItemEntry<$ComponentItem>
static "CONVEYOR_MODULE_MV": $ItemEntry<$ComponentItem>
static "CONVEYOR_MODULE_OpV": $ItemEntry<$ComponentItem>
static "CONVEYOR_MODULE_UEV": $ItemEntry<$ComponentItem>
static "CONVEYOR_MODULE_UHV": $ItemEntry<$ComponentItem>
static "CONVEYOR_MODULE_UIV": $ItemEntry<$ComponentItem>
static "CONVEYOR_MODULE_UV": $ItemEntry<$ComponentItem>
static "CONVEYOR_MODULE_UXV": $ItemEntry<$ComponentItem>
static "CONVEYOR_MODULE_ZPM": $ItemEntry<$ComponentItem>
static "COVER_ACTIVITY_DETECTOR": $ItemEntry<$ComponentItem>
static "COVER_ACTIVITY_DETECTOR_ADVANCED": $ItemEntry<$ComponentItem>
static "COVER_ENDER_FLUID_LINK": $ItemEntry<$ComponentItem>
static "COVER_ENDER_ITEM_LINK": $ItemEntry<$ComponentItem>
static "COVER_ENDER_REDSTONE_LINK": $ItemEntry<$ComponentItem>
static "COVER_ENERGY_DETECTOR": $ItemEntry<$ComponentItem>
static "COVER_ENERGY_DETECTOR_ADVANCED": $ItemEntry<$ComponentItem>
static "COVER_FACADE": $ItemEntry<$ComponentItem>
static "COVER_FLUID_DETECTOR": $ItemEntry<$ComponentItem>
static "COVER_FLUID_DETECTOR_ADVANCED": $ItemEntry<$ComponentItem>
static "COVER_FLUID_VOIDING": $ItemEntry<$ComponentItem>
static "COVER_FLUID_VOIDING_ADVANCED": $ItemEntry<$ComponentItem>
static "COVER_INFINITE_WATER": $ItemEntry<$ComponentItem>
static "COVER_ITEM_DETECTOR": $ItemEntry<$ComponentItem>
static "COVER_ITEM_DETECTOR_ADVANCED": $ItemEntry<$ComponentItem>
static "COVER_ITEM_VOIDING": $ItemEntry<$ComponentItem>
static "COVER_ITEM_VOIDING_ADVANCED": $ItemEntry<$ComponentItem>
static "COVER_MACHINE_CONTROLLER": $ItemEntry<$ComponentItem>
static "COVER_MAINTENANCE_DETECTOR": $ItemEntry<$ComponentItem>
static "COVER_SCREEN": $ItemEntry<$ComponentItem>
static "COVER_SHUTTER": $ItemEntry<$ComponentItem>
static "COVER_SOLAR_PANEL": $ItemEntry<$ComponentItem>
static "COVER_SOLAR_PANEL_EV": $ItemEntry<$ComponentItem>
static "COVER_SOLAR_PANEL_HV": $ItemEntry<$ComponentItem>
static "COVER_SOLAR_PANEL_IV": $ItemEntry<$ComponentItem>
static "COVER_SOLAR_PANEL_LV": $ItemEntry<$ComponentItem>
static "COVER_SOLAR_PANEL_LuV": $ItemEntry<$ComponentItem>
static "COVER_SOLAR_PANEL_MV": $ItemEntry<$ComponentItem>
static "COVER_SOLAR_PANEL_ULV": $ItemEntry<$ComponentItem>
static "COVER_SOLAR_PANEL_UV": $ItemEntry<$ComponentItem>
static "COVER_SOLAR_PANEL_ZPM": $ItemEntry<$ComponentItem>
static "COVER_STORAGE": $ItemEntry<$ComponentItem>
static "COVER_WIRELESS_TRANSMITTER": $ItemEntry<$ComponentItem>
static "CRYSTAL_ASSEMBLY_LuV": $ItemEntry<$Item>
static "CRYSTAL_CENTRAL_PROCESSING_UNIT": $ItemEntry<$Item>
static "CRYSTAL_COMPUTER_ZPM": $ItemEntry<$Item>
static "CRYSTAL_MAINFRAME_UV": $ItemEntry<$Item>
static "CRYSTAL_PROCESSOR_IV": $ItemEntry<$Item>
static "CRYSTAL_SYSTEM_ON_CHIP": $ItemEntry<$Item>
static "DIODE": $ItemEntry<$Item>
static "DOUGH": $ItemEntry<$ComponentItem>
static "DUCT_TAPE": $ItemEntry<$ComponentItem>
static readonly "DYE_ONLY_ITEMS": $ItemEntry<$DyeItem>[]
static "DYNAMITE": $ItemEntry<$ComponentItem>
static "ELECTRIC_JETPACK": $ItemEntry<$ArmorComponentItem>
static "ELECTRIC_JETPACK_ADVANCED": $ItemEntry<$ArmorComponentItem>
static "ELECTRIC_MOTOR_EV": $ItemEntry<$Item>
static "ELECTRIC_MOTOR_HV": $ItemEntry<$Item>
static "ELECTRIC_MOTOR_IV": $ItemEntry<$Item>
static "ELECTRIC_MOTOR_LV": $ItemEntry<$Item>
static "ELECTRIC_MOTOR_LuV": $ItemEntry<$Item>
static "ELECTRIC_MOTOR_MV": $ItemEntry<$Item>
static "ELECTRIC_MOTOR_OpV": $ItemEntry<$Item>
static "ELECTRIC_MOTOR_UEV": $ItemEntry<$Item>
static "ELECTRIC_MOTOR_UHV": $ItemEntry<$Item>
static "ELECTRIC_MOTOR_UIV": $ItemEntry<$Item>
static "ELECTRIC_MOTOR_UV": $ItemEntry<$Item>
static "ELECTRIC_MOTOR_UXV": $ItemEntry<$Item>
static "ELECTRIC_MOTOR_ZPM": $ItemEntry<$Item>
static "ELECTRIC_PISTON_EV": $ItemEntry<$Item>
static "ELECTRIC_PISTON_HV": $ItemEntry<$Item>
static "ELECTRIC_PISTON_IV": $ItemEntry<$Item>
static "ELECTRIC_PISTON_LV": $ItemEntry<$Item>
static "ELECTRIC_PISTON_LuV": $ItemEntry<$Item>
static "ELECTRIC_PISTON_MV": $ItemEntry<$Item>
static "ELECTRIC_PISTON_OpV": $ItemEntry<$Item>
static "ELECTRIC_PISTON_UEV": $ItemEntry<$Item>
static "ELECTRIC_PISTON_UHV": $ItemEntry<$Item>
static "ELECTRIC_PISTON_UIV": $ItemEntry<$Item>
static "ELECTRIC_PISTON_UV": $ItemEntry<$Item>
static "ELECTRIC_PISTON_UXV": $ItemEntry<$Item>
static "ELECTRIC_PISTON_ZPM": $ItemEntry<$Item>
static "ELECTRIC_PUMP_EV": $ItemEntry<$ComponentItem>
static "ELECTRIC_PUMP_HV": $ItemEntry<$ComponentItem>
static "ELECTRIC_PUMP_IV": $ItemEntry<$ComponentItem>
static "ELECTRIC_PUMP_LV": $ItemEntry<$ComponentItem>
static "ELECTRIC_PUMP_LuV": $ItemEntry<$ComponentItem>
static "ELECTRIC_PUMP_MV": $ItemEntry<$ComponentItem>
static "ELECTRIC_PUMP_OpV": $ItemEntry<$ComponentItem>
static "ELECTRIC_PUMP_UEV": $ItemEntry<$ComponentItem>
static "ELECTRIC_PUMP_UHV": $ItemEntry<$ComponentItem>
static "ELECTRIC_PUMP_UIV": $ItemEntry<$ComponentItem>
static "ELECTRIC_PUMP_UV": $ItemEntry<$ComponentItem>
static "ELECTRIC_PUMP_UXV": $ItemEntry<$ComponentItem>
static "ELECTRIC_PUMP_ZPM": $ItemEntry<$ComponentItem>
static "ELECTRONIC_CIRCUIT_LV": $ItemEntry<$Item>
static "ELECTRONIC_CIRCUIT_MV": $ItemEntry<$Item>
static "ELITE_CIRCUIT_BOARD": $ItemEntry<$Item>
static "EMITTER_EV": $ItemEntry<$Item>
static "EMITTER_HV": $ItemEntry<$Item>
static "EMITTER_IV": $ItemEntry<$Item>
static "EMITTER_LV": $ItemEntry<$Item>
static "EMITTER_LuV": $ItemEntry<$Item>
static "EMITTER_MV": $ItemEntry<$Item>
static "EMITTER_OpV": $ItemEntry<$Item>
static "EMITTER_UEV": $ItemEntry<$Item>
static "EMITTER_UHV": $ItemEntry<$Item>
static "EMITTER_UIV": $ItemEntry<$Item>
static "EMITTER_UV": $ItemEntry<$Item>
static "EMITTER_UXV": $ItemEntry<$Item>
static "EMITTER_ZPM": $ItemEntry<$Item>
static "ENERGIUM_CRYSTAL": $ItemEntry<$ComponentItem>
static "ENERGIUM_DUST": $ItemEntry<$Item>
static "ENERGY_CLUSTER": $ItemEntry<$ComponentItem>
static "ENERGY_LAPOTRONIC_ORB": $ItemEntry<$ComponentItem>
static "ENERGY_LAPOTRONIC_ORB_CLUSTER": $ItemEntry<$ComponentItem>
static "ENERGY_MODULE": $ItemEntry<$ComponentItem>
static "ENGRAVED_CRYSTAL_CHIP": $ItemEntry<$Item>
static "ENGRAVED_LAPOTRON_CHIP": $ItemEntry<$Item>
static "EPOXY_BOARD": $ItemEntry<$Item>
static "EXTREME_CIRCUIT_BOARD": $ItemEntry<$Item>
static "FACE_MASK": $ItemEntry<$ArmorComponentItem>
static "FERTILIZER": $ItemEntry<$ComponentItem>
static "FIBER_BOARD": $ItemEntry<$Item>
static "FIELD_GENERATOR_EV": $ItemEntry<$Item>
static "FIELD_GENERATOR_HV": $ItemEntry<$Item>
static "FIELD_GENERATOR_IV": $ItemEntry<$Item>
static "FIELD_GENERATOR_LV": $ItemEntry<$Item>
static "FIELD_GENERATOR_LuV": $ItemEntry<$Item>
static "FIELD_GENERATOR_MV": $ItemEntry<$Item>
static "FIELD_GENERATOR_OpV": $ItemEntry<$Item>
static "FIELD_GENERATOR_UEV": $ItemEntry<$Item>
static "FIELD_GENERATOR_UHV": $ItemEntry<$Item>
static "FIELD_GENERATOR_UIV": $ItemEntry<$Item>
static "FIELD_GENERATOR_UV": $ItemEntry<$Item>
static "FIELD_GENERATOR_UXV": $ItemEntry<$Item>
static "FIELD_GENERATOR_ZPM": $ItemEntry<$Item>
static "FIRECLAY_BRICK": $ItemEntry<$Item>
static "FLUID_CELL": $ItemEntry<$ComponentItem>
static "FLUID_CELL_GLASS_VIAL": $ItemEntry<$ComponentItem>
static "FLUID_CELL_LARGE_ALUMINIUM": $ItemEntry<$ComponentItem>
static "FLUID_CELL_LARGE_STAINLESS_STEEL": $ItemEntry<$ComponentItem>
static "FLUID_CELL_LARGE_STEEL": $ItemEntry<$ComponentItem>
static "FLUID_CELL_LARGE_TITANIUM": $ItemEntry<$ComponentItem>
static "FLUID_CELL_LARGE_TUNGSTEN_STEEL": $ItemEntry<$ComponentItem>
static "FLUID_CELL_UNIVERSAL": $ItemEntry<$ComponentItem>
static "FLUID_FILTER": $ItemEntry<$ComponentItem>
static "FLUID_REGULATOR_EV": $ItemEntry<$ComponentItem>
static "FLUID_REGULATOR_HV": $ItemEntry<$ComponentItem>
static "FLUID_REGULATOR_IV": $ItemEntry<$ComponentItem>
static "FLUID_REGULATOR_LV": $ItemEntry<$ComponentItem>
static "FLUID_REGULATOR_LuV": $ItemEntry<$ComponentItem>
static "FLUID_REGULATOR_MV": $ItemEntry<$ComponentItem>
static "FLUID_REGULATOR_OpV": $ItemEntry<$ComponentItem>
static "FLUID_REGULATOR_UEV": $ItemEntry<$ComponentItem>
static "FLUID_REGULATOR_UHV": $ItemEntry<$ComponentItem>
static "FLUID_REGULATOR_UIV": $ItemEntry<$ComponentItem>
static "FLUID_REGULATOR_UV": $ItemEntry<$ComponentItem>
static "FLUID_REGULATOR_UXV": $ItemEntry<$ComponentItem>
static "FLUID_REGULATOR_ZPM": $ItemEntry<$ComponentItem>
static "GELLED_TOLUENE": $ItemEntry<$Item>
static readonly "GLASS_LENSES": $Map<$MarkerMaterial, $ItemEntry<$Item>>
static "GLASS_TUBE": $ItemEntry<$Item>
static "GOOD_CIRCUIT_BOARD": $ItemEntry<$Item>
static "GRAVITATION_ENGINE": $ItemEntry<$Item>
static "GRAVI_STAR": $ItemEntry<$Item>
static "HAZMAT_BOOTS": $ItemEntry<$ArmorComponentItem>
static "HAZMAT_CHESTPLATE": $ItemEntry<$ArmorComponentItem>
static "HAZMAT_HELMET": $ItemEntry<$ArmorComponentItem>
static "HAZMAT_LEGGINGS": $ItemEntry<$ArmorComponentItem>
static "HIGHLY_ADVANCED_SOC": $ItemEntry<$Item>
static "HIGHLY_ADVANCED_SOC_WAFER": $ItemEntry<$Item>
static "HIGH_POWER_INTEGRATED_CIRCUIT": $ItemEntry<$Item>
static "HIGH_POWER_INTEGRATED_CIRCUIT_WAFER": $ItemEntry<$Item>
static "IMAGE_MODULE": $ItemEntry<$ComponentItem>
static "INDUCTOR": $ItemEntry<$Item>
static "INTEGRATED_CIRCUIT_HV": $ItemEntry<$Item>
static "INTEGRATED_CIRCUIT_LV": $ItemEntry<$Item>
static "INTEGRATED_CIRCUIT_MV": $ItemEntry<$Item>
static "INTEGRATED_LOGIC_CIRCUIT": $ItemEntry<$Item>
static "INTEGRATED_LOGIC_CIRCUIT_WAFER": $ItemEntry<$Item>
static "IRON_MINECART_WHEELS": $ItemEntry<$Item>
static "ITEM_FILTER": $ItemEntry<$ComponentItem>
static "ITEM_MAGNET_HV": $ItemEntry<$ComponentItem>
static "ITEM_MAGNET_LV": $ItemEntry<$ComponentItem>
static "LAPOTRON_CRYSTAL": $ItemEntry<$ComponentItem>
static "LIQUID_FUEL_JETPACK": $ItemEntry<$ArmorComponentItem>
static "LOW_POWER_INTEGRATED_CIRCUIT": $ItemEntry<$Item>
static "LOW_POWER_INTEGRATED_CIRCUIT_WAFER": $ItemEntry<$Item>
static "MACHINE_MEMORY_CARD": $ItemEntry<$ComponentItem>
static "MAINFRAME_IV": $ItemEntry<$Item>
static "MASK_FILTER": $ItemEntry<$Item>
static "MICROPROCESSOR_LV": $ItemEntry<$Item>
static "MULTILAYER_FIBER_BOARD": $ItemEntry<$Item>
static "NAND_CHIP_ULV": $ItemEntry<$Item>
static "NAND_MEMORY_CHIP": $ItemEntry<$Item>
static "NAND_MEMORY_CHIP_WAFER": $ItemEntry<$Item>
static "NANO_BOOTS": $ItemEntry<$ArmorComponentItem>
static "NANO_CENTRAL_PROCESSING_UNIT": $ItemEntry<$Item>
static "NANO_CENTRAL_PROCESSING_UNIT_WAFER": $ItemEntry<$Item>
static "NANO_CHESTPLATE": $ItemEntry<$ArmorComponentItem>
static "NANO_CHESTPLATE_ADVANCED": $ItemEntry<$ArmorComponentItem>
static "NANO_COMPUTER_IV": $ItemEntry<$Item>
static "NANO_HELMET": $ItemEntry<$ArmorComponentItem>
static "NANO_LEGGINGS": $ItemEntry<$ArmorComponentItem>
static "NANO_MAINFRAME_LuV": $ItemEntry<$Item>
static "NANO_PROCESSOR_ASSEMBLY_EV": $ItemEntry<$Item>
static "NANO_PROCESSOR_HV": $ItemEntry<$Item>
static "NANO_SABER": $ItemEntry<$ComponentItem>
static "NAN_CERTIFICATE": $ItemEntry<$Item>
static "NAQUADAH_BOULE": $ItemEntry<$Item>
static "NAQUADAH_WAFER": $ItemEntry<$Item>
static "NEURO_PROCESSOR": $ItemEntry<$Item>
static "NEUTRONIUM_BOULE": $ItemEntry<$Item>
static "NEUTRONIUM_WAFER": $ItemEntry<$Item>
static "NEUTRON_REFLECTOR": $ItemEntry<$Item>
static "NIGHTVISION_GOGGLES": $ItemEntry<$ArmorComponentItem>
static "NOR_MEMORY_CHIP": $ItemEntry<$Item>
static "NOR_MEMORY_CHIP_WAFER": $ItemEntry<$Item>
static "PARACETAMOL_PILL": $ItemEntry<$ComponentItem>
static "PETRI_DISH": $ItemEntry<$Item>
static "PHENOLIC_BOARD": $ItemEntry<$Item>
static "PHOSPHORUS_BOULE": $ItemEntry<$Item>
static "PHOSPHORUS_WAFER": $ItemEntry<$Item>
static "PLANT_BALL": $ItemEntry<$ComponentItem>
static "PLASTIC_BOARD": $ItemEntry<$Item>
static "PLASTIC_CIRCUIT_BOARD": $ItemEntry<$Item>
static "PLUGIN_ADVANCED_MONITOR": $ItemEntry<$Item>
static "PLUGIN_FAKE_GUI": $ItemEntry<$Item>
static "PLUGIN_ONLINE_PIC": $ItemEntry<$Item>
static "PLUGIN_TEXT": $ItemEntry<$Item>
static "PORTABLE_DEBUG_SCANNER": $ItemEntry<$ComponentItem>
static "PORTABLE_SCANNER": $ItemEntry<$ComponentItem>
static "POWER_INTEGRATED_CIRCUIT": $ItemEntry<$Item>
static "POWER_INTEGRATED_CIRCUIT_WAFER": $ItemEntry<$Item>
static "POWER_THRUSTER": $ItemEntry<$Item>
static "POWER_THRUSTER_ADVANCED": $ItemEntry<$Item>
static "POWER_UNIT_EV": $ItemEntry<$ComponentItem>
static "POWER_UNIT_HV": $ItemEntry<$ComponentItem>
static "POWER_UNIT_IV": $ItemEntry<$ComponentItem>
static "POWER_UNIT_LV": $ItemEntry<$ComponentItem>
static "POWER_UNIT_MV": $ItemEntry<$ComponentItem>
static "PROCESSOR_ASSEMBLY_HV": $ItemEntry<$Item>
static "PROCESSOR_MV": $ItemEntry<$Item>
static "PROGRAMMED_CIRCUIT": $ItemEntry<$ComponentItem>
static "PROSPECTOR_HV": $ItemEntry<$ComponentItem>
static "PROSPECTOR_LV": $ItemEntry<$ComponentItem>
static "PROSPECTOR_LuV": $ItemEntry<$ComponentItem>
static "QUANTUM_ASSEMBLY_IV": $ItemEntry<$Item>
static "QUANTUM_BOOTS": $ItemEntry<$ArmorComponentItem>
static "QUANTUM_CHESTPLATE": $ItemEntry<$ArmorComponentItem>
static "QUANTUM_CHESTPLATE_ADVANCED": $ItemEntry<$ArmorComponentItem>
static "QUANTUM_COMPUTER_LuV": $ItemEntry<$Item>
static "QUANTUM_EYE": $ItemEntry<$Item>
static "QUANTUM_HELMET": $ItemEntry<$ArmorComponentItem>
static "QUANTUM_LEGGINGS": $ItemEntry<$ArmorComponentItem>
static "QUANTUM_MAINFRAME_ZPM": $ItemEntry<$Item>
static "QUANTUM_PROCESSOR_EV": $ItemEntry<$Item>
static "QUANTUM_STAR": $ItemEntry<$Item>
static "QUBIT_CENTRAL_PROCESSING_UNIT": $ItemEntry<$Item>
static "QUBIT_CENTRAL_PROCESSING_UNIT_WAFER": $ItemEntry<$Item>
static "RAD_AWAY_PILL": $ItemEntry<$ComponentItem>
static "RANDOM_ACCESS_MEMORY": $ItemEntry<$Item>
static "RANDOM_ACCESS_MEMORY_WAFER": $ItemEntry<$Item>
static "RAW_CRYSTAL_CHIP": $ItemEntry<$Item>
static "RAW_CRYSTAL_CHIP_PART": $ItemEntry<$Item>
static "RESISTOR": $ItemEntry<$Item>
static "ROBOT_ARM_EV": $ItemEntry<$ComponentItem>
static "ROBOT_ARM_HV": $ItemEntry<$ComponentItem>
static "ROBOT_ARM_IV": $ItemEntry<$ComponentItem>
static "ROBOT_ARM_LV": $ItemEntry<$ComponentItem>
static "ROBOT_ARM_LuV": $ItemEntry<$ComponentItem>
static "ROBOT_ARM_MV": $ItemEntry<$ComponentItem>
static "ROBOT_ARM_OpV": $ItemEntry<$ComponentItem>
static "ROBOT_ARM_UEV": $ItemEntry<$ComponentItem>
static "ROBOT_ARM_UHV": $ItemEntry<$ComponentItem>
static "ROBOT_ARM_UIV": $ItemEntry<$ComponentItem>
static "ROBOT_ARM_UV": $ItemEntry<$ComponentItem>
static "ROBOT_ARM_UXV": $ItemEntry<$ComponentItem>
static "ROBOT_ARM_ZPM": $ItemEntry<$ComponentItem>
static "RUBBER_BOAT": $ItemEntry<$GTBoatItem>
static "RUBBER_CHEST_BOAT": $ItemEntry<$GTBoatItem>
static "RUBBER_GLOVES": $ItemEntry<$ArmorComponentItem>
static "SENSOR_EV": $ItemEntry<$Item>
static "SENSOR_HV": $ItemEntry<$Item>
static "SENSOR_IV": $ItemEntry<$Item>
static "SENSOR_LV": $ItemEntry<$Item>
static "SENSOR_LuV": $ItemEntry<$Item>
static "SENSOR_MV": $ItemEntry<$Item>
static "SENSOR_OpV": $ItemEntry<$Item>
static "SENSOR_UEV": $ItemEntry<$Item>
static "SENSOR_UHV": $ItemEntry<$Item>
static "SENSOR_UIV": $ItemEntry<$Item>
static "SENSOR_UV": $ItemEntry<$Item>
static "SENSOR_UXV": $ItemEntry<$Item>
static "SENSOR_ZPM": $ItemEntry<$Item>
static "SHAPE_EMPTY": $ItemEntry<$Item>
static readonly "SHAPE_EXTRUDERS": $ItemEntry<$Item>[]
static "SHAPE_EXTRUDER_BLOCK": $ItemEntry<$Item>
static "SHAPE_EXTRUDER_BOLT": $ItemEntry<$Item>
static "SHAPE_EXTRUDER_BOTTLE": $ItemEntry<$Item>
static "SHAPE_EXTRUDER_CELL": $ItemEntry<$Item>
static "SHAPE_EXTRUDER_FOIL": $ItemEntry<$Item>
static "SHAPE_EXTRUDER_GEAR": $ItemEntry<$Item>
static "SHAPE_EXTRUDER_GEAR_SMALL": $ItemEntry<$Item>
static "SHAPE_EXTRUDER_INGOT": $ItemEntry<$Item>
static "SHAPE_EXTRUDER_PIPE_HUGE": $ItemEntry<$Item>
static "SHAPE_EXTRUDER_PIPE_LARGE": $ItemEntry<$Item>
static "SHAPE_EXTRUDER_PIPE_NORMAL": $ItemEntry<$Item>
static "SHAPE_EXTRUDER_PIPE_SMALL": $ItemEntry<$Item>
static "SHAPE_EXTRUDER_PIPE_TINY": $ItemEntry<$Item>
static "SHAPE_EXTRUDER_PLATE": $ItemEntry<$Item>
static "SHAPE_EXTRUDER_RING": $ItemEntry<$Item>
static "SHAPE_EXTRUDER_ROD": $ItemEntry<$Item>
static "SHAPE_EXTRUDER_ROTOR": $ItemEntry<$Item>
static "SHAPE_EXTRUDER_WIRE": $ItemEntry<$Item>
static readonly "SHAPE_MOLDS": $ItemEntry<$Item>[]
static readonly "SHAPE_MOLD_ANVIL": $ItemEntry<$Item>
static readonly "SHAPE_MOLD_BALL": $ItemEntry<$Item>
static readonly "SHAPE_MOLD_BLOCK": $ItemEntry<$Item>
static readonly "SHAPE_MOLD_BOTTLE": $ItemEntry<$Item>
static readonly "SHAPE_MOLD_CYLINDER": $ItemEntry<$Item>
static readonly "SHAPE_MOLD_GEAR": $ItemEntry<$Item>
static readonly "SHAPE_MOLD_GEAR_SMALL": $ItemEntry<$Item>
static readonly "SHAPE_MOLD_HUGE_PIPE": $ItemEntry<$Item>
static readonly "SHAPE_MOLD_INGOT": $ItemEntry<$Item>
static readonly "SHAPE_MOLD_LARGE_PIPE": $ItemEntry<$Item>
static readonly "SHAPE_MOLD_NAME": $ItemEntry<$Item>
static readonly "SHAPE_MOLD_NORMAL_PIPE": $ItemEntry<$Item>
static readonly "SHAPE_MOLD_NUGGET": $ItemEntry<$Item>
static readonly "SHAPE_MOLD_PILL": $ItemEntry<$Item>
static readonly "SHAPE_MOLD_PLATE": $ItemEntry<$Item>
static readonly "SHAPE_MOLD_ROTOR": $ItemEntry<$Item>
static readonly "SHAPE_MOLD_SMALL_PIPE": $ItemEntry<$Item>
static readonly "SHAPE_MOLD_TINY_PIPE": $ItemEntry<$Item>
static "SILICON_BOULE": $ItemEntry<$Item>
static "SILICON_WAFER": $ItemEntry<$Item>
static "SIMPLE_SYSTEM_ON_CHIP": $ItemEntry<$Item>
static "SIMPLE_SYSTEM_ON_CHIP_WAFER": $ItemEntry<$Item>
static "SMART_ITEM_FILTER": $ItemEntry<$ComponentItem>
static "SMD_CAPACITOR": $ItemEntry<$Item>
static "SMD_DIODE": $ItemEntry<$Item>
static "SMD_INDUCTOR": $ItemEntry<$Item>
static "SMD_RESISTOR": $ItemEntry<$Item>
static "SMD_TRANSISTOR": $ItemEntry<$Item>
static readonly "SPRAY_CAN_DYES": $ItemEntry<$ComponentItem>[]
static "SPRAY_EMPTY": $ItemEntry<$Item>
static "SPRAY_SOLVENT": $ItemEntry<$ComponentItem>
static "STEEL_MINECART_WHEELS": $ItemEntry<$Item>
static "STEM_CELLS": $ItemEntry<$Item>
static "STICKY_RESIN": $ItemEntry<$ComponentItem>
static "SUS_RECORD": $ItemEntry<$RecordItem>
static "SYSTEM_ON_CHIP": $ItemEntry<$Item>
static "SYSTEM_ON_CHIP_WAFER": $ItemEntry<$Item>
static "TAG_FILTER": $ItemEntry<$ComponentItem>
static "TAG_FLUID_FILTER": $ItemEntry<$ComponentItem>
static "TERMINAL": $ItemEntry<$ComponentItem>
static "TEXT_MODULE": $ItemEntry<$ComponentItem>
static "TOOL_DATA_MODULE": $ItemEntry<$ComponentItem>
static "TOOL_DATA_ORB": $ItemEntry<$ComponentItem>
static "TOOL_DATA_STICK": $ItemEntry<$ComponentItem>
static "TOOL_LIGHTER_INVAR": $ItemEntry<$ComponentItem>
static "TOOL_LIGHTER_PLATINUM": $ItemEntry<$ComponentItem>
static "TOOL_MATCHBOX": $ItemEntry<$ComponentItem>
static "TOOL_MATCHES": $ItemEntry<$ComponentItem>
static "TRANSISTOR": $ItemEntry<$Item>
static "TREATED_WOOD_BOAT": $ItemEntry<$GTBoatItem>
static "TREATED_WOOD_CHEST_BOAT": $ItemEntry<$GTBoatItem>
static "TURBINE_ROTOR": $ItemEntry<$ComponentItem>
static "ULTIMATE_BATTERY": $ItemEntry<$ComponentItem>
static "ULTRA_HIGH_POWER_INTEGRATED_CIRCUIT": $ItemEntry<$Item>
static "ULTRA_HIGH_POWER_INTEGRATED_CIRCUIT_WAFER": $ItemEntry<$Item>
static "ULTRA_LOW_POWER_INTEGRATED_CIRCUIT": $ItemEntry<$Item>
static "ULTRA_LOW_POWER_INTEGRATED_CIRCUIT_WAFER": $ItemEntry<$Item>
static "VACUUM_TUBE": $ItemEntry<$Item>
static "VOLTAGE_COIL_EV": $ItemEntry<$ComponentItem>
static "VOLTAGE_COIL_HV": $ItemEntry<$ComponentItem>
static "VOLTAGE_COIL_IV": $ItemEntry<$ComponentItem>
static "VOLTAGE_COIL_LV": $ItemEntry<$ComponentItem>
static "VOLTAGE_COIL_LuV": $ItemEntry<$ComponentItem>
static "VOLTAGE_COIL_MV": $ItemEntry<$ComponentItem>
static "VOLTAGE_COIL_ULV": $ItemEntry<$ComponentItem>
static "VOLTAGE_COIL_UV": $ItemEntry<$ComponentItem>
static "VOLTAGE_COIL_ZPM": $ItemEntry<$ComponentItem>
static "WETWARE_BOARD": $ItemEntry<$Item>
static "WETWARE_CIRCUIT_BOARD": $ItemEntry<$Item>
static "WETWARE_MAINFRAME_UHV": $ItemEntry<$Item>
static "WETWARE_PROCESSOR_ASSEMBLY_ZPM": $ItemEntry<$Item>
static "WETWARE_PROCESSOR_LuV": $ItemEntry<$Item>
static "WETWARE_SUPER_COMPUTER_UV": $ItemEntry<$Item>
static "WIRELESS": $ItemEntry<$Item>
static "WOODEN_FORM_BRICK": $ItemEntry<$ComponentItem>
static "WOODEN_FORM_EMPTY": $ItemEntry<$Item>
static "WORKSTATION_EV": $ItemEntry<$Item>
static "ZERO_POINT_MODULE": $ItemEntry<$ComponentItem>

constructor()

public static "attach"<T extends $IComponentItem>(iItemComponent0: $IItemComponent$$Type): $NonNullConsumer<T>
public static "attach"<T extends $IComponentItem>(...iItemComponent0s: $IItemComponent$$Type[]): $NonNullConsumer<T>
public static "burnTime"<T extends $ComponentItem>(int0: integer): $NonNullConsumer<T>
public static "cauldronInteraction"<T extends $Item>(t0: T): void
/** Client only, do not use in server scripts */
public static "cellColor"(): $ItemColor
public static "cellName"(): $ICustomDescriptionId
public static "createFluidCell"(material0: $Material$$Type, int1: integer, int2: integer, int3: integer): $ItemEntry<$ComponentItem>
public static "getTierName"(tier0: $Tier$$Type): $ResourceLocation
public static "init"(): void
public static "materialInfo"<T extends $ItemLike>(itemMaterialInfo0: $ItemMaterialInfo$$Type): $NonNullConsumer<T>
public static "modelPredicate"<T extends $Item>(resourceLocation0: $ResourceLocation$$Type, supplier1: $Supplier$$Type<$Supplier<$ItemPropertyFunction>>): $NonNullConsumer<T>
public static "modelPredicate"<T extends $Item>(resourceLocation0: $ResourceLocation$$Type, stackProperty1: $GTItems$StackProperty$$Type): $NonNullConsumer<T>
public static "registerToolTier"(materialToolTier0: $MaterialToolTier$$Type, resourceLocation1: $ResourceLocation$$Type, collection2: $Collection$$Type<$ResourceLocation$$Type>, collection3: $Collection$$Type<$ResourceLocation$$Type>): void
public static "unificationItem"<P, T extends $Item, S2 extends $ItemBuilder<T, P>>(tagPrefix0: $TagPrefix$$Type, material1: $Material$$Type): $NonNullFunction<S2, S2>
}
}

declare module "com.gregtechceu.gtceu.common.pipelike.duct.DuctNetHandler" {
import { $IHazardParticleContainer } from "com.gregtechceu.gtceu.api.capability.IHazardParticleContainer"
import { $BlockPos$$Type } from "net.minecraft.core.BlockPos"
import { $Direction$$Type } from "net.minecraft.core.Direction"
import { $DuctPipeNet, $DuctPipeNet$$Type } from "com.gregtechceu.gtceu.common.pipelike.duct.DuctPipeNet"
import { $DuctPipeBlockEntity$$Type } from "com.gregtechceu.gtceu.common.blockentity.DuctPipeBlockEntity"
import { $MedicalCondition$$Type } from "com.gregtechceu.gtceu.api.data.medicalcondition.MedicalCondition"
import { $ServerLevel$$Type } from "net.minecraft.server.level.ServerLevel"

export class $DuctNetHandler implements $IHazardParticleContainer {
constructor(ductPipeNet0: $DuctPipeNet$$Type, ductPipeBlockEntity1: $DuctPipeBlockEntity$$Type, direction2: $Direction$$Type)

public "addHazard"(medicalCondition0: $MedicalCondition$$Type, float1: float): float
public "changeHazard"(medicalCondition0: $MedicalCondition$$Type, float1: float): float
public static "emitPollutionParticles"(serverLevel0: $ServerLevel$$Type, blockPos1: $BlockPos$$Type, direction2: $Direction$$Type): void
public "getHazardCanBeInserted"(medicalCondition0: $MedicalCondition$$Type): float
public "getHazardCapacity"(medicalCondition0: $MedicalCondition$$Type): float
public "getHazardStored"(medicalCondition0: $MedicalCondition$$Type): float
public "getNet"(): $DuctPipeNet
public "inputsHazard"(direction0: $Direction$$Type, medicalCondition1: $MedicalCondition$$Type): boolean
public "outputsHazard"(direction0: $Direction$$Type, medicalCondition1: $MedicalCondition$$Type): boolean
public "removeHazard"(medicalCondition0: $MedicalCondition$$Type, float1: float): float
public "updateNetwork"(ductPipeNet0: $DuctPipeNet$$Type): void
get "net"(): $DuctPipeNet
}
}

declare module "com.gregtechceu.gtceu.common.data.GTElements" {
import { $Element } from "com.gregtechceu.gtceu.api.data.chemical.Element"

export class $GTElements {
static readonly "Ac": $Element
static readonly "Ag": $Element
static readonly "Al": $Element
static readonly "Am": $Element
static readonly "Ar": $Element
static readonly "As": $Element
static readonly "At": $Element
static readonly "Au": $Element
static readonly "B": $Element
static readonly "Ba": $Element
static readonly "Be": $Element
static readonly "Bh": $Element
static readonly "Bi": $Element
static readonly "Bk": $Element
static readonly "Br": $Element
static readonly "C": $Element
static readonly "Ca": $Element
static readonly "Cd": $Element
static readonly "Ce": $Element
static readonly "Cf": $Element
static readonly "Cl": $Element
static readonly "Cm": $Element
static readonly "Cn": $Element
static readonly "Co": $Element
static readonly "Cr": $Element
static readonly "Cs": $Element
static readonly "Cu": $Element
static readonly "D": $Element
static readonly "Db": $Element
static readonly "Dr": $Element
static readonly "Ds": $Element
static readonly "Dy": $Element
static readonly "Er": $Element
static readonly "Es": $Element
static readonly "Eu": $Element
static readonly "F": $Element
static readonly "Fe": $Element
static readonly "Fl": $Element
static readonly "Fm": $Element
static readonly "Fr": $Element
static readonly "Ga": $Element
static readonly "Gd": $Element
static readonly "Ge": $Element
static readonly "H": $Element
static readonly "He": $Element
static readonly "He3": $Element
static readonly "Hf": $Element
static readonly "Hg": $Element
static readonly "Ho": $Element
static readonly "Hs": $Element
static readonly "I": $Element
static readonly "In": $Element
static readonly "Ir": $Element
static readonly "K": $Element
static readonly "Ke": $Element
static readonly "Kr": $Element
static readonly "La": $Element
static readonly "Li": $Element
static readonly "Lr": $Element
static readonly "Lu": $Element
static readonly "Lv": $Element
static readonly "Ma": $Element
static readonly "Mc": $Element
static readonly "Md": $Element
static readonly "Mg": $Element
static readonly "Mn": $Element
static readonly "Mo": $Element
static readonly "Mt": $Element
static readonly "N": $Element
static readonly "Na": $Element
static readonly "Nb": $Element
static readonly "Nd": $Element
static readonly "Ne": $Element
static readonly "Nh": $Element
static readonly "Ni": $Element
static readonly "No": $Element
static readonly "Np": $Element
static readonly "Nq": $Element
static readonly "Nq1": $Element
static readonly "Nq2": $Element
static readonly "Nt": $Element
static readonly "O": $Element
static readonly "Og": $Element
static readonly "Os": $Element
static readonly "P": $Element
static readonly "Pa": $Element
static readonly "Pb": $Element
static readonly "Pd": $Element
static readonly "Pm": $Element
static readonly "Po": $Element
static readonly "Pr": $Element
static readonly "Pt": $Element
static readonly "Pu": $Element
static readonly "Pu239": $Element
static readonly "Pu241": $Element
static readonly "Ra": $Element
static readonly "Rb": $Element
static readonly "Re": $Element
static readonly "Rf": $Element
static readonly "Rg": $Element
static readonly "Rh": $Element
static readonly "Rn": $Element
static readonly "Ru": $Element
static readonly "S": $Element
static readonly "Sb": $Element
static readonly "Sc": $Element
static readonly "Se": $Element
static readonly "Sg": $Element
static readonly "Si": $Element
static readonly "Sm": $Element
static readonly "Sn": $Element
static readonly "Sp": $Element
static readonly "Sr": $Element
static readonly "T": $Element
static readonly "Ta": $Element
static readonly "Tb": $Element
static readonly "Tc": $Element
static readonly "Te": $Element
static readonly "Th": $Element
static readonly "Ti": $Element
static readonly "Tl": $Element
static readonly "Tm": $Element
static readonly "Tr": $Element
static readonly "Ts": $Element
static readonly "U": $Element
static readonly "U235": $Element
static readonly "U238": $Element
static readonly "V": $Element
static readonly "W": $Element
static readonly "Xe": $Element
static readonly "Y": $Element
static readonly "Yb": $Element
static readonly "Zn": $Element
static readonly "Zr": $Element

constructor()

public static "createAndRegister"(long0: long, long1: long, long2: long, string3: string, string4: string, string5: string, boolean6: boolean): $Element
public static "get"(string0: string): $Element
public static "init"(): void
}
}

declare module "com.gregtechceu.gtceu.common.blockentity.ItemPipeBlockEntity" {
import { $IFieldUpdateListener$$Type } from "com.lowdragmc.lowdraglib.syncdata.IFieldUpdateListener"
import { $AABB } from "net.minecraft.world.phys.AABB"
import { $Direction, $Direction$$Type } from "net.minecraft.core.Direction"
import { $Connection$$Type } from "net.minecraft.network.Connection"
import { $BlockState$$Type } from "net.minecraft.world.level.block.state.BlockState"
import { $FacingPos } from "com.gregtechceu.gtceu.utils.FacingPos"
import { $PipeBlockEntity } from "com.gregtechceu.gtceu.api.blockentity.PipeBlockEntity"
import { $Runnable$$Type } from "java.lang.Runnable"
import { $LazyOptional } from "net.minecraftforge.common.util.LazyOptional"
import { $TrackedData, $TrackedData$$Type } from "dev.corgitaco.dataanchor.data.TrackedData"
import { $IItemHandlerModifiable } from "net.minecraftforge.items.IItemHandlerModifiable"
import { $IRef, $IRef$$Type } from "com.lowdragmc.lowdraglib.syncdata.managed.IRef"
import { $PipeBlock } from "com.gregtechceu.gtceu.api.block.PipeBlock"
import { $TrackedDataRegistry$$Type } from "dev.corgitaco.dataanchor.data.registry.TrackedDataRegistry"
import { $PipeNet } from "com.gregtechceu.gtceu.api.pipenet.PipeNet"
import { $ItemPipeProperties } from "com.gregtechceu.gtceu.api.data.chemical.material.properties.ItemPipeProperties"
import { $EnumMap } from "java.util.EnumMap"
import { $ItemPipeType } from "com.gregtechceu.gtceu.common.pipelike.item.ItemPipeType"
import { $ClientboundBlockEntityDataPacket$$Type } from "net.minecraft.network.protocol.game.ClientboundBlockEntityDataPacket"
import { $ModelData } from "net.minecraftforge.client.model.data.ModelData"
import { $BlockEntity } from "net.minecraft.world.level.block.entity.BlockEntity"
import { $Capability$$Type } from "net.minecraftforge.common.capabilities.Capability"
import { $Player$$Type } from "net.minecraft.world.entity.player.Player"
import { $TickableSubscription, $TickableSubscription$$Type } from "com.gregtechceu.gtceu.api.machine.TickableSubscription"
import { $CompoundTag$$Type } from "net.minecraft.nbt.CompoundTag"
import { $TrackedDataContainer } from "dev.corgitaco.dataanchor.data.TrackedDataContainer"
import { $Object2IntMap } from "it.unimi.dsi.fastutil.objects.Object2IntMap"
import { $BlockEntityType, $BlockEntityType$$Type } from "net.minecraft.world.level.block.entity.BlockEntityType"
import { $BlockPos, $BlockPos$$Type } from "net.minecraft.core.BlockPos"
import { $ItemNetHandler } from "com.gregtechceu.gtceu.common.pipelike.item.ItemNetHandler"
import { $ItemPipeNet } from "com.gregtechceu.gtceu.common.pipelike.item.ItemPipeNet"
import { $Level } from "net.minecraft.world.level.Level"
import { $ISubscription } from "com.lowdragmc.lowdraglib.syncdata.ISubscription"

export class $ItemPipeBlockEntity extends $PipeBlockEntity<$ItemPipeType, $ItemPipeProperties> {
constructor(blockEntityType0: $BlockEntityType$$Type<any>, blockPos1: $BlockPos$$Type, blockState2: $BlockState$$Type)

public "addSyncUpdateListener"<T>(name: string, listener: $IFieldUpdateListener$$Type<T>): $ISubscription
public "addTransferredItems"(int0: integer): void
public "asyncTick"(periodID: long): void
public "canAttachTo"(direction0: $Direction$$Type): boolean
public "canHaveBlockedFaces"(): boolean
public "checkNetwork"(): void
public "defaultServerTick"(): void
public "deserializeNBT"(compoundTag0: $CompoundTag$$Type): void
public "getBlockEntityType"(): $BlockEntityType<any>
public "getCapability"<T>(capability0: $Capability$$Type<T>, direction1: $Direction$$Type): $LazyOptional<T>
public "getCapability"<T>(capability0: $Capability$$Type<T>): $LazyOptional<T>
public "getCurrentPos"(): $BlockPos
public "getHandler"(direction0: $Direction$$Type, boolean1: boolean): $IItemHandlerModifiable
public "getHandlers"(): $EnumMap<$Direction, $ItemNetHandler>
public "getItemPipeNet"(): $ItemPipeNet
public "getLevelTime"(): long
public "getModelData"(): $ModelData
public "getNeighbor"(direction0: $Direction$$Type): $BlockEntity
public "getNonLazyFields"(): $IRef[]
public "getPipeBlock"(): $PipeBlock<$ItemPipeType, $ItemPipeProperties, any>
public "getPipeLevel"(): $Level
public "getPipeNet"(): $PipeNet<$ItemPipeProperties>
public "getPipePos"(): $BlockPos
public "getPipeType"(): $ItemPipeType
public "getRealColor"(): integer
public "getRenderBoundingBox"(): $AABB
public "getSelf"(): $BlockEntity
public "getSyncTag"(): string
public "getTransferred"(): $Object2IntMap<$FacingPos>
public "getTransferredItems"(): integer
public "handleUpdateTag"(compoundTag0: $CompoundTag$$Type): void
public "hasCustomOutlineRendering"(player0: $Player$$Type): boolean
public "initHandlers"(): void
public "isAsyncSyncing"(): boolean
public "isBlocked"(direction0: $Direction$$Type): boolean
public "isConnected"(direction0: $Direction$$Type): boolean
public "isInValid"(): boolean
public "isPainted"(): boolean
public "isRemote"(): boolean
public "loadCustomPersistedData"(tag: $CompoundTag$$Type): void
public "loadManagedPersistentData"(tag: $CompoundTag$$Type): void
public static "makeBasicContainer"<O, T extends $TrackedData<O>>(registry: $TrackedDataRegistry$$Type<O, T>, o: O, isClient: boolean): $TrackedDataContainer<O, T>
public static "makeBasicContainer"<O, T extends $TrackedData<O>>(registry: $TrackedDataRegistry$$Type<O, T>, o: O, isClient: boolean, lazyLoad: boolean): $TrackedDataContainer<O, T>
public "markAsDirty"(): void
public "markDirty"(name: string): void
public static "onBlockEntityRegister"(blockEntityType0: $BlockEntityType$$Type<$ItemPipeBlockEntity$$Type>): void
public "onDataPacket"(connection0: $Connection$$Type, clientboundBlockEntityDataPacket1: $ClientboundBlockEntityDataPacket$$Type): void
public "onInValid"(): void
public "onLoad"(): void
public "onPersistedChanged"(ref: $IRef$$Type, isDirty: boolean): void
public "onSyncChanged"(ref: $IRef$$Type, isDirty: boolean): void
public "onValid"(): void
public "readCustomSyncData"(tag: $CompoundTag$$Type): void
public "requestModelDataUpdate"(): void
public "resetTransferred"(): void
public "saveCustomPersistedData"(tag: $CompoundTag$$Type, forDrop: boolean): void
public "saveManagedPersistentData"(tag: $CompoundTag$$Type, forDrop: boolean): void
public "scheduleNeighborShapeUpdate"(): void
public "scheduleRender"(fieldName: string, newValue: any, oldValue: any): void
public "sdl$isDynamicLightEnabled"(): boolean
public "sdl$setDynamicLightEnabled"(enabled: boolean): void
public "self"(): $BlockEntity
public "setAsyncSyncing"(syncing: boolean): void
public "subscribeServerTick"(tickableSubscription0: $TickableSubscription$$Type, runnable1: $Runnable$$Type): $TickableSubscription
public "syncNow"(force: boolean): void
public "useAsyncThread"(): boolean
public "writeCustomSyncData"(tag: $CompoundTag$$Type): void
get "blockEntityType"(): $BlockEntityType<any>
get "currentPos"(): $BlockPos
get "handlers"(): $EnumMap<$Direction, $ItemNetHandler>
get "itemPipeNet"(): $ItemPipeNet
get "levelTime"(): long
get "modelData"(): $ModelData
get "nonLazyFields"(): $IRef[]
get "pipeBlock"(): $PipeBlock<$ItemPipeType, $ItemPipeProperties, any>
get "pipeLevel"(): $Level
get "pipeNet"(): $PipeNet<$ItemPipeProperties>
get "pipePos"(): $BlockPos
get "pipeType"(): $ItemPipeType
get "realColor"(): integer
get "renderBoundingBox"(): $AABB
get "syncTag"(): string
get "transferred"(): $Object2IntMap<$FacingPos>
get "transferredItems"(): integer
get "asyncSyncing"(): boolean
get "inValid"(): boolean
get "painted"(): boolean
get "remote"(): boolean
set "asyncSyncing"(value: boolean)
}
}

declare module "com.gregtechceu.gtceu.common.block.FoamBlock" {
import { $ResourceLocation } from "net.minecraft.resources.ResourceLocation"
import { $LivingEntity$$Type } from "net.minecraft.world.entity.LivingEntity"
import { $Direction, $Direction$$Type } from "net.minecraft.core.Direction"
import { $EntityType$$Type } from "net.minecraft.world.entity.EntityType"
import { $Item$$Type } from "net.minecraft.world.item.Item"
import { $BlockState, $BlockState$$Type } from "net.minecraft.world.level.block.state.BlockState"
import { $SpawnPlacements$Type$$Type } from "net.minecraft.world.entity.SpawnPlacements$Type"
import { $BlockBehaviour$Properties$$Type } from "net.minecraft.world.level.block.state.BlockBehaviour$Properties"
import { $ServerLevel$$Type } from "net.minecraft.server.level.ServerLevel"
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

export class $FoamBlock extends $Block {
constructor(properties0: $BlockBehaviour$Properties$$Type, boolean1: boolean)

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
get "blockStates"(): $List<$BlockState>
get "mod"(): string
set "destroySpeed"(value: float)
set "lightEmission"(value: integer)
set "requiresTool"(value: boolean)
}
}

declare module "com.gregtechceu.gtceu.common.cover.RobotArmCover" {
import { $IFieldUpdateListener$$Type } from "com.lowdragmc.lowdraglib.syncdata.IFieldUpdateListener"
import { $Direction$$Type } from "net.minecraft.core.Direction"
import { $ICoverable$$Type } from "com.gregtechceu.gtceu.api.capability.ICoverable"
import { $CoverBehavior } from "com.gregtechceu.gtceu.api.cover.CoverBehavior"
import { $CoverDefinition$$Type } from "com.gregtechceu.gtceu.api.cover.CoverDefinition"
import { $Player$$Type } from "net.minecraft.world.entity.player.Player"
import { $ConveyorCover } from "com.gregtechceu.gtceu.common.cover.ConveyorCover"
import { $List } from "java.util.List"
import { $ModularUI } from "com.lowdragmc.lowdraglib.gui.modular.ModularUI"
import { $ItemStack } from "net.minecraft.world.item.ItemStack"
import { $IRef$$Type } from "com.lowdragmc.lowdraglib.syncdata.managed.IRef"
import { $ManagedFieldHolder } from "com.lowdragmc.lowdraglib.syncdata.field.ManagedFieldHolder"
import { $ISubscription } from "com.lowdragmc.lowdraglib.syncdata.ISubscription"
import { $TransferMode, $TransferMode$$Type } from "com.gregtechceu.gtceu.common.cover.data.TransferMode"

export class $RobotArmCover extends $ConveyorCover {
static readonly "MANAGED_FIELD_HOLDER": $ManagedFieldHolder

constructor(coverDefinition0: $CoverDefinition$$Type, iCoverable1: $ICoverable$$Type, direction2: $Direction$$Type, int3: integer)
constructor(coverDefinition0: $CoverDefinition$$Type, iCoverable1: $ICoverable$$Type, direction2: $Direction$$Type, int3: integer, int4: integer)

public "addSyncUpdateListener"<T>(name: string, listener: $IFieldUpdateListener$$Type<T>): $ISubscription
public "buffer"(int0: integer): void
public "clearBuffer"(): void
public "createUI"(player0: $Player$$Type): $ModularUI
public "getBuffer"(): integer
public "getGlobalTransferLimit"(): integer
public "getItemsRequiredToPaste"(): $List<$ItemStack>
public "getTransferMode"(): $TransferMode
public "isInvalid"(): boolean
public "isRemote"(): boolean
public "isSuspendAfterFinish"(): boolean
public "markAsDirty"(): void
public "markDirty"(name: string): void
public "onPersistedChanged"(ref: $IRef$$Type, isDirty: boolean): void
public "onSyncChanged"(ref: $IRef$$Type, isDirty: boolean): void
public "onUIClosed"(): void
public "scheduleRender"(fieldName: string, newValue: any, oldValue: any): void
public "self"(): $CoverBehavior
public "setGlobalTransferLimit"(int0: integer): void
public "setSuspendAfterFinish"(boolean0: boolean): void
public "setTransferMode"(transferMode0: $TransferMode$$Type): void
get "globalTransferLimit"(): integer
get "itemsRequiredToPaste"(): $List<$ItemStack>
get "transferMode"(): $TransferMode
get "invalid"(): boolean
get "remote"(): boolean
get "suspendAfterFinish"(): boolean
set "globalTransferLimit"(value: integer)
set "suspendAfterFinish"(value: boolean)
set "transferMode"(value: $TransferMode$$Type)
}
}

declare module "com.gregtechceu.gtceu.common.data.GCYMBlocks" {
import { $BlockEntry } from "com.tterrag.registrate.util.entry.BlockEntry"
import { $Block } from "net.minecraft.world.level.block.Block"
import { $ActiveBlock } from "com.gregtechceu.gtceu.api.block.ActiveBlock"

export class $GCYMBlocks {
static readonly "CASING_ATOMIC": $BlockEntry<$Block>
static readonly "CASING_CORROSION_PROOF": $BlockEntry<$Block>
static readonly "CASING_HIGH_TEMPERATURE_SMELTING": $BlockEntry<$Block>
static readonly "CASING_INDUSTRIAL_STEAM": $BlockEntry<$Block>
static readonly "CASING_LARGE_SCALE_ASSEMBLING": $BlockEntry<$Block>
static readonly "CASING_LASER_SAFE_ENGRAVING": $BlockEntry<$Block>
static readonly "CASING_NONCONDUCTING": $BlockEntry<$Block>
static readonly "CASING_REACTION_SAFE": $BlockEntry<$Block>
static readonly "CASING_SECURE_MACERATION": $BlockEntry<$Block>
static readonly "CASING_SHOCK_PROOF": $BlockEntry<$Block>
static readonly "CASING_STRESS_PROOF": $BlockEntry<$Block>
static readonly "CASING_VIBRATION_SAFE": $BlockEntry<$Block>
static readonly "CASING_WATERTIGHT": $BlockEntry<$Block>
static readonly "CRUSHING_WHEELS": $BlockEntry<$ActiveBlock>
static readonly "ELECTROLYTIC_CELL": $BlockEntry<$ActiveBlock>
static readonly "HEAT_VENT": $BlockEntry<$ActiveBlock>
static readonly "MOLYBDENUM_DISILICIDE_COIL_BLOCK": $BlockEntry<$ActiveBlock>
static readonly "SLICING_BLADES": $BlockEntry<$ActiveBlock>

constructor()

public static "init"(): void
}
}

declare module "com.gregtechceu.gtceu.common.entity.GTBoat$BoatType" {
import { $Enum } from "java.lang.Enum"
import { $Block } from "net.minecraft.world.level.block.Block"

export class $GTBoat$BoatType extends $Enum<$GTBoat$BoatType> {
static readonly "RUBBER": $GTBoat$BoatType
static readonly "TREATED_WOOD": $GTBoat$BoatType

public static "byId"(int0: integer): $GTBoat$BoatType
public static "byName"(string0: string): $GTBoat$BoatType
public "getName"(): string
public "getPlanks"(): $Block
public static "valueOf"(string0: string): $GTBoat$BoatType
public static "values"(): $GTBoat$BoatType[]
get "name"(): string
get "planks"(): $Block
}
}

declare module "com.gregtechceu.gtceu.common.block.CableBlock" {
import { $ResourceLocation } from "net.minecraft.resources.ResourceLocation"
import { $LivingEntity$$Type } from "net.minecraft.world.entity.LivingEntity"
import { $Direction, $Direction$$Type } from "net.minecraft.core.Direction"
import { $Item$$Type } from "net.minecraft.world.item.Item"
import { $PipeBlockEntity } from "com.gregtechceu.gtceu.api.blockentity.PipeBlockEntity"
import { $SpawnPlacements$Type$$Type } from "net.minecraft.world.entity.SpawnPlacements$Type"
import { $BlockBehaviour$Properties$$Type } from "net.minecraft.world.level.block.state.BlockBehaviour$Properties"
import { $BlockGetter$$Type } from "net.minecraft.world.level.BlockGetter"
import { $MapColor, $MapColor$$Type } from "net.minecraft.world.level.material.MapColor"
import { $Rotation$$Type } from "net.minecraft.world.level.block.Rotation"
import { $Holder } from "net.minecraft.core.Holder"
import { $MaterialPipeBlock } from "com.gregtechceu.gtceu.api.block.MaterialPipeBlock"
import { $BlockPathTypes, $BlockPathTypes$$Type } from "net.minecraft.world.level.pathfinder.BlockPathTypes"
import { $WireProperties } from "com.gregtechceu.gtceu.api.data.chemical.material.properties.WireProperties"
import { $LevelEnergyNet } from "com.gregtechceu.gtceu.common.pipelike.cable.LevelEnergyNet"
import { $RandomSource$$Type } from "net.minecraft.util.RandomSource"
import { $LevelReader$$Type } from "net.minecraft.world.level.LevelReader"
import { $BlockEntity, $BlockEntity$$Type } from "net.minecraft.world.level.block.entity.BlockEntity"
import { $TreeConfiguration$$Type } from "net.minecraft.world.level.levelgen.feature.configurations.TreeConfiguration"
import { $SoundType } from "net.minecraft.world.level.block.SoundType"
import { $Player$$Type } from "net.minecraft.world.entity.player.Player"
import { $FeatureFlagSet$$Type } from "net.minecraft.world.flag.FeatureFlagSet"
import { $List } from "java.util.List"
import { $BlockPos$$Type } from "net.minecraft.core.BlockPos"
import { $BlockEntityType } from "net.minecraft.world.level.block.entity.BlockEntityType"
import { $SoundEvent } from "net.minecraft.sounds.SoundEvent"
import { $SignalGetter$$Type } from "net.minecraft.world.level.SignalGetter"
import { $FluidState$$Type } from "net.minecraft.world.level.material.FluidState"
import { $GameEventListener } from "net.minecraft.world.level.gameevent.GameEventListener"
import { $Optional } from "java.util.Optional"
import { $LevelAccessor$$Type } from "net.minecraft.world.level.LevelAccessor"
import { $ItemStack, $ItemStack$$Type } from "net.minecraft.world.item.ItemStack"
import { $Material$$Type } from "com.gregtechceu.gtceu.api.data.chemical.material.Material"
import { $Level$$Type } from "net.minecraft.world.level.Level"
import { $EntityType$$Type } from "net.minecraft.world.entity.EntityType"
import { $BlockState, $BlockState$$Type } from "net.minecraft.world.level.block.state.BlockState"
import { $ServerLevel$$Type } from "net.minecraft.server.level.ServerLevel"
import { $PushReaction } from "net.minecraft.world.level.material.PushReaction"
import { $ToolAction$$Type } from "net.minecraftforge.common.ToolAction"
import { $Insulation, $Insulation$$Type } from "com.gregtechceu.gtceu.common.pipelike.cable.Insulation"
import { $BiConsumer$$Type } from "java.util.function.BiConsumer"
import { $Fluid$$Type } from "net.minecraft.world.level.material.Fluid"
import { $UseOnContext$$Type } from "net.minecraft.world.item.context.UseOnContext"
import { $BlockAndTintGetter$$Type } from "net.minecraft.world.level.BlockAndTintGetter"
import { $Explosion$$Type } from "net.minecraft.world.level.Explosion"
import { $HitResult$$Type } from "net.minecraft.world.phys.HitResult"
import { $Entity$$Type } from "net.minecraft.world.entity.Entity"
import { $Vec3, $Vec3$$Type } from "net.minecraft.world.phys.Vec3"
import { $Block, $Block$$Type } from "net.minecraft.world.level.block.Block"
import { $Mob$$Type } from "net.minecraft.world.entity.Mob"

export class $CableBlock extends $MaterialPipeBlock<$Insulation, $WireProperties, $LevelEnergyNet> {
constructor(properties0: $BlockBehaviour$Properties$$Type, insulation1: $Insulation$$Type, material2: $Material$$Type)

public "addLandingEffects"(blockState0: $BlockState$$Type, serverLevel1: $ServerLevel$$Type, blockPos2: $BlockPos$$Type, blockState3: $BlockState$$Type, livingEntity4: $LivingEntity$$Type, int5: integer): boolean
public "addRunningEffects"(blockState0: $BlockState$$Type, level1: $Level$$Type, blockPos2: $BlockPos$$Type, entity3: $Entity$$Type): boolean
public "arch$holder"(): $Holder<$Block>
public "arch$registryName"(): $ResourceLocation
public "canBeHydrated"(blockState0: $BlockState$$Type, blockGetter1: $BlockGetter$$Type, blockPos2: $BlockPos$$Type, fluidState3: $FluidState$$Type, blockPos4: $BlockPos$$Type): boolean
public "canConnectRedstone"(blockState0: $BlockState$$Type, blockGetter1: $BlockGetter$$Type, blockPos2: $BlockPos$$Type, direction3: $Direction$$Type): boolean
public "canDropFromExplosion"(blockState0: $BlockState$$Type, blockGetter1: $BlockGetter$$Type, blockPos2: $BlockPos$$Type, explosion3: $Explosion$$Type): boolean
public "canEntityDestroy"(blockState0: $BlockState$$Type, blockGetter1: $BlockGetter$$Type, blockPos2: $BlockPos$$Type, entity3: $Entity$$Type): boolean
public "canHarvestBlock"(blockState0: $BlockState$$Type, blockGetter1: $BlockGetter$$Type, blockPos2: $BlockPos$$Type, player3: $Player$$Type): boolean
public "canPlaceLiquid"(blockGetter0: $BlockGetter$$Type, blockPos1: $BlockPos$$Type, blockState2: $BlockState$$Type, fluid3: $Fluid$$Type): boolean
public "canStickTo"(blockState0: $BlockState$$Type, blockState1: $BlockState$$Type): boolean
public "collisionExtendsVertically"(blockState0: $BlockState$$Type, blockGetter1: $BlockGetter$$Type, blockPos2: $BlockPos$$Type, entity3: $Entity$$Type): boolean
public static "get"(item: $Item$$Type): $ResourceLocation
public static "get"(block: $Block$$Type): $ResourceLocation
public static "get"(state: $BlockState$$Type): $ResourceLocation
public static "get"(entity: $Entity$$Type): $ResourceLocation
public static "get"(stack: $ItemStack$$Type): $ResourceLocation
public static "get"(type: $EntityType$$Type<any>): $ResourceLocation
public "getAdjacentBlockPathType"(blockState0: $BlockState$$Type, blockGetter1: $BlockGetter$$Type, blockPos2: $BlockPos$$Type, mob3: $Mob$$Type, blockPathTypes4: $BlockPathTypes$$Type): $BlockPathTypes
public "getBeaconColorMultiplier"(blockState0: $BlockState$$Type, levelReader1: $LevelReader$$Type, blockPos2: $BlockPos$$Type, blockPos3: $BlockPos$$Type): float[]
public "getBedDirection"(blockState0: $BlockState$$Type, levelReader1: $LevelReader$$Type, blockPos2: $BlockPos$$Type): $Direction
public "getBlockEntityType"(): $BlockEntityType<$PipeBlockEntity<$Insulation, $WireProperties>>
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
public "getListener"<T extends $BlockEntity>(serverLevel0: $ServerLevel$$Type, t1: T): $GameEventListener
public "getMapColor"(blockState0: $BlockState$$Type, blockGetter1: $BlockGetter$$Type, blockPos2: $BlockPos$$Type, mapColor3: $MapColor$$Type): $MapColor
public "getMod"(): string
public "getPickupSound"(): $Optional<$SoundEvent>
public "getPickupSound"(blockState0: $BlockState$$Type): $Optional<$SoundEvent>
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
public "onTreeGrow"(blockState0: $BlockState$$Type, levelReader1: $LevelReader$$Type, biConsumer2: $BiConsumer$$Type<$BlockPos$$Type, $BlockState$$Type>, randomSource3: $RandomSource$$Type, blockPos4: $BlockPos$$Type, treeConfiguration5: $TreeConfiguration$$Type): boolean
public "pickupBlock"(levelAccessor0: $LevelAccessor$$Type, blockPos1: $BlockPos$$Type, blockState2: $BlockState$$Type): $ItemStack
public "placeLiquid"(levelAccessor0: $LevelAccessor$$Type, blockPos1: $BlockPos$$Type, blockState2: $BlockState$$Type, fluidState3: $FluidState$$Type): boolean
public "rotate"(blockState0: $BlockState$$Type, levelAccessor1: $LevelAccessor$$Type, blockPos2: $BlockPos$$Type, rotation3: $Rotation$$Type): $BlockState
public "setBedOccupied"(blockState0: $BlockState$$Type, level1: $Level$$Type, blockPos2: $BlockPos$$Type, livingEntity3: $LivingEntity$$Type, boolean4: boolean): void
public "setDestroySpeed"(v: float): void
public "setLightEmission"(v: integer): void
public "setRequiresTool"(v: boolean): void
public "shouldCheckWeakPower"(blockState0: $BlockState$$Type, signalGetter1: $SignalGetter$$Type, blockPos2: $BlockPos$$Type, direction3: $Direction$$Type): boolean
public "shouldDisplayFluidOverlay"(blockState0: $BlockState$$Type, blockAndTintGetter1: $BlockAndTintGetter$$Type, blockPos2: $BlockPos$$Type, fluidState3: $FluidState$$Type): boolean
public "supportsExternalFaceHiding"(blockState0: $BlockState$$Type): boolean
get "blockEntityType"(): $BlockEntityType<$PipeBlockEntity<$Insulation, $WireProperties>>
get "blockStates"(): $List<$BlockState>
get "mod"(): string
get "pickupSound"(): $Optional<$SoundEvent>
set "destroySpeed"(value: float)
set "lightEmission"(value: integer)
set "requiresTool"(value: boolean)
}
}

declare module "com.gregtechceu.gtceu.common.data.models.GTModels" {
import { $ResourceLocation, $ResourceLocation$$Type } from "net.minecraft.resources.ResourceLocation"
import { $BoilerFireboxType$$Type } from "com.gregtechceu.gtceu.common.block.BoilerFireboxType"
import { $FusionCasingBlock } from "com.gregtechceu.gtceu.common.block.FusionCasingBlock"
import { $DyeColor$$Type } from "net.minecraft.world.item.DyeColor"
import { $BlockItem$$Type } from "net.minecraft.world.item.BlockItem"
import { $IFusionCasingType$$Type } from "com.gregtechceu.gtceu.api.block.IFusionCasingType"
import { $Item, $Item$$Type } from "net.minecraft.world.item.Item"
import { $RegistrateBlockstateProvider, $RegistrateBlockstateProvider$$Type } from "com.tterrag.registrate.providers.RegistrateBlockstateProvider"
import { $ActiveBlock } from "com.gregtechceu.gtceu.api.block.ActiveBlock"
import { $NonNullBiConsumer } from "com.tterrag.registrate.util.nullness.NonNullBiConsumer"
import { $BatteryBlock } from "com.gregtechceu.gtceu.common.block.BatteryBlock"
import { $IFilterType$$Type } from "com.gregtechceu.gtceu.api.block.IFilterType"
import { $IBatteryData$$Type } from "com.gregtechceu.gtceu.api.machine.multiblock.IBatteryData"
import { $CoilBlock } from "com.gregtechceu.gtceu.common.block.CoilBlock"
import { $Block, $Block$$Type } from "net.minecraft.world.level.block.Block"
import { $ICoilType$$Type } from "com.gregtechceu.gtceu.api.block.ICoilType"
import { $DataGenContext, $DataGenContext$$Type } from "com.tterrag.registrate.providers.DataGenContext"
import { $RegistrateItemModelProvider, $RegistrateItemModelProvider$$Type } from "com.tterrag.registrate.providers.RegistrateItemModelProvider"
import { $LampBlock } from "com.gregtechceu.gtceu.common.block.LampBlock"
import { $GTBlockstateProvider, $GTBlockstateProvider$$Type } from "com.gregtechceu.gtceu.api.registry.registrate.provider.GTBlockstateProvider"
import { $PipeBlock$$Type } from "com.gregtechceu.gtceu.api.block.PipeBlock"

export class $GTModels {
static readonly "ACTIVE_SUFFIX": string
static readonly "BLANK_TEXTURE": $ResourceLocation

constructor()

public static "createActiveModel"(resourceLocation0: $ResourceLocation$$Type): $NonNullBiConsumer<$DataGenContext<$Block, $ActiveBlock>, $RegistrateBlockstateProvider>
public static "createBatteryBlockModel"(iBatteryData0: $IBatteryData$$Type): $NonNullBiConsumer<$DataGenContext<$Block, $BatteryBlock>, $RegistrateBlockstateProvider>
public static "createCleanroomFilterModel"(iFilterType0: $IFilterType$$Type): $NonNullBiConsumer<$DataGenContext<$Block, $Block>, $RegistrateBlockstateProvider>
public static "createCoilModel"(iCoilType0: $ICoilType$$Type): $NonNullBiConsumer<$DataGenContext<$Block, $CoilBlock>, $RegistrateBlockstateProvider>
public static "createCrossBlockState"(dataGenContext0: $DataGenContext$$Type<$Block$$Type, $Block$$Type>, registrateBlockstateProvider1: $RegistrateBlockstateProvider$$Type): void
public static "createFireboxModel"(boilerFireboxType0: $BoilerFireboxType$$Type): $NonNullBiConsumer<$DataGenContext<$Block, $ActiveBlock>, $RegistrateBlockstateProvider>
public static "createFusionCasingModel"(iFusionCasingType0: $IFusionCasingType$$Type): $NonNullBiConsumer<$DataGenContext<$Block, $FusionCasingBlock>, $RegistrateBlockstateProvider>
public static "createHermeticCasingModel"(string0: string): $NonNullBiConsumer<$DataGenContext<$Block, $Block>, $RegistrateBlockstateProvider>
public static "createMachineCasingModel"(string0: string): $NonNullBiConsumer<$DataGenContext<$Block, $Block>, $RegistrateBlockstateProvider>
public static "createModelBlockState"(resourceLocation0: $ResourceLocation$$Type): $NonNullBiConsumer<$DataGenContext<$Block, $Block>, $GTBlockstateProvider>
public static "createPipeBlockModel"(dataGenContext0: $DataGenContext$$Type<$Block$$Type, $PipeBlock$$Type<any, any, any>>, gTBlockstateProvider1: $GTBlockstateProvider$$Type): void
public static "createSidedCasingModel"(resourceLocation0: $ResourceLocation$$Type): $NonNullBiConsumer<$DataGenContext<$Block, $Block>, $RegistrateBlockstateProvider>
public static "createSteamCasingModel"(string0: string): $NonNullBiConsumer<$DataGenContext<$Block, $Block>, $RegistrateBlockstateProvider>
public static "createTextureModel"(dataGenContext0: $DataGenContext$$Type<$Item$$Type, $Item$$Type>, registrateItemModelProvider1: $RegistrateItemModelProvider$$Type, resourceLocation2: $ResourceLocation$$Type): void
public static "cubeAllModel"(resourceLocation0: $ResourceLocation$$Type): $NonNullBiConsumer<$DataGenContext<$Block, $Block>, $GTBlockstateProvider>
public static "lampModel"(dyeColor0: $DyeColor$$Type, boolean1: boolean): $NonNullBiConsumer<$DataGenContext<$Block, $LampBlock>, $RegistrateBlockstateProvider>
public static "overrideModel"<T extends $Item>(resourceLocation0: $ResourceLocation$$Type, int1: integer): $NonNullBiConsumer<$DataGenContext<$Item, T>, $RegistrateItemModelProvider>
public static "randomRotatedModel"(resourceLocation0: $ResourceLocation$$Type): $NonNullBiConsumer<$DataGenContext<$Block, $Block>, $RegistrateBlockstateProvider>
public static "registerMaterialFluidModels"(): void
public static "rubberTreeSaplingModel"(dataGenContext0: $DataGenContext$$Type<$Item$$Type, $BlockItem$$Type>, registrateItemModelProvider1: $RegistrateItemModelProvider$$Type): void
}
}

declare module "com.gregtechceu.gtceu.common.block.MinerPipeBlock" {
import { $ResourceLocation } from "net.minecraft.resources.ResourceLocation"
import { $LivingEntity$$Type } from "net.minecraft.world.entity.LivingEntity"
import { $Direction, $Direction$$Type } from "net.minecraft.core.Direction"
import { $EntityType$$Type } from "net.minecraft.world.entity.EntityType"
import { $Item$$Type } from "net.minecraft.world.item.Item"
import { $BlockState, $BlockState$$Type } from "net.minecraft.world.level.block.state.BlockState"
import { $SpawnPlacements$Type$$Type } from "net.minecraft.world.entity.SpawnPlacements$Type"
import { $BlockBehaviour$Properties$$Type } from "net.minecraft.world.level.block.state.BlockBehaviour$Properties"
import { $ServerLevel$$Type } from "net.minecraft.server.level.ServerLevel"
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
import { $VoxelShape } from "net.minecraft.world.phys.shapes.VoxelShape"

export class $MinerPipeBlock extends $Block {
static "SHAPE": $VoxelShape

constructor(properties0: $BlockBehaviour$Properties$$Type)

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
get "blockStates"(): $List<$BlockState>
get "mod"(): string
set "destroySpeed"(value: float)
set "lightEmission"(value: integer)
set "requiresTool"(value: boolean)
}
}

declare module "com.gregtechceu.gtceu.common.pipelike.item.ItemNetHandler" {
import { $IItemHandler, $IItemHandler$$Type } from "net.minecraftforge.items.IItemHandler"
import { $ItemPipeBlockEntity$$Type } from "com.gregtechceu.gtceu.common.blockentity.ItemPipeBlockEntity"
import { $Direction, $Direction$$Type } from "net.minecraft.core.Direction"
import { $CoverBehavior, $CoverBehavior$$Type } from "com.gregtechceu.gtceu.api.cover.CoverBehavior"
import { $RobotArmCover$$Type } from "com.gregtechceu.gtceu.common.cover.RobotArmCover"
import { $Ingredient$$Type } from "net.minecraft.world.item.crafting.Ingredient"
import { $BlockContainerJS } from "dev.latvian.mods.kubejs.level.BlockContainerJS"
import { $List } from "java.util.List"
import { $Container } from "net.minecraft.world.Container"
import { $BlockPos$$Type } from "net.minecraft.core.BlockPos"
import { $ItemPipeNet, $ItemPipeNet$$Type } from "com.gregtechceu.gtceu.common.pipelike.item.ItemPipeNet"
import { $IItemHandlerModifiable } from "net.minecraftforge.items.IItemHandlerModifiable"
import { $ItemStack, $ItemStack$$Type } from "net.minecraft.world.item.ItemStack"
import { $Level$$Type } from "net.minecraft.world.level.Level"

export class $ItemNetHandler implements $IItemHandlerModifiable {
constructor(itemPipeNet0: $ItemPipeNet$$Type, itemPipeBlockEntity1: $ItemPipeBlockEntity$$Type, direction2: $Direction$$Type)

public "asContainer"(): $Container
public static "checkImportCover"(coverBehavior0: $CoverBehavior$$Type, boolean1: boolean, itemStack2: $ItemStack$$Type): boolean
public "clear"(ingredient: $Ingredient$$Type): void
public "clear"(): void
public "count"(): integer
public "count"(ingredient: $Ingredient$$Type): integer
public "countNonEmpty"(ingredient: $Ingredient$$Type): integer
public "countNonEmpty"(): integer
public static "countStack"(iItemHandler0: $IItemHandler$$Type, itemStack1: $ItemStack$$Type, robotArmCover2: $RobotArmCover$$Type): integer
public "extractItem"(int0: integer, int1: integer, boolean2: boolean): $ItemStack
public "extractItem"(i: integer, i1: integer, b: boolean): $ItemStack
public "find"(): integer
public "find"(ingredient: $Ingredient$$Type): integer
public "getAllItems"(): $List<$ItemStack>
public "getBlock"(level: $Level$$Type): $BlockContainerJS
public "getCoverOnNeighbour"(blockPos0: $BlockPos$$Type, direction1: $Direction$$Type): $CoverBehavior
public "getFacing"(): $Direction
public "getHeight"(): integer
public "getNetwork"(): $ItemPipeNet
public "getSlotLimit"(int0: integer): integer
public "getSlotLimit"(i: integer): integer
public "getSlots"(): integer
public "getSlots"(): integer
public "getStackInSlot"(int0: integer): $ItemStack
public "getStackInSlot"(i: integer): $ItemStack
public "getWidth"(): integer
public "insertItem"(int0: integer, itemStack1: $ItemStack$$Type, boolean2: boolean): $ItemStack
public "insertItem"(i: integer, itemStack: $ItemStack$$Type, b: boolean): $ItemStack
public "insertItem"(stack: $ItemStack$$Type, simulate: boolean): $ItemStack
public "isEmpty"(): boolean
public "isItemValid"(int0: integer, itemStack1: $ItemStack$$Type): boolean
public "isItemValid"(i: integer, itemStack: $ItemStack$$Type): boolean
public "isMutable"(): boolean
public "kjs$self"(): $IItemHandler
public "setChanged"(): void
public "setNetwork"(itemPipeNet0: $ItemPipeNet$$Type): void
public "setStackInSlot"(int0: integer, itemStack1: $ItemStack$$Type): void
public "setStackInSlot"(slot: integer, stack: $ItemStack$$Type): void
get "allItems"(): $List<$ItemStack>
get "facing"(): $Direction
get "height"(): integer
get "network"(): $ItemPipeNet
get "slots"(): integer
get "slots"(): integer
get "width"(): integer
get "empty"(): boolean
get "mutable"(): boolean
set "network"(value: $ItemPipeNet$$Type)
}
}

declare module "com.gregtechceu.gtceu.common.pipelike.cable.EnergyRoutePath" {
import { $IRoutePath } from "com.gregtechceu.gtceu.api.pipenet.IRoutePath"
import { $BlockPos, $BlockPos$$Type } from "net.minecraft.core.BlockPos"
import { $CableBlockEntity, $CableBlockEntity$$Type } from "com.gregtechceu.gtceu.common.blockentity.CableBlockEntity"
import { $Direction, $Direction$$Type } from "net.minecraft.core.Direction"
import { $IEnergyContainer } from "com.gregtechceu.gtceu.api.capability.IEnergyContainer"
import { $BlockEntity } from "net.minecraft.world.level.block.entity.BlockEntity"
import { $Level$$Type } from "net.minecraft.world.level.Level"
import { $Capability$$Type } from "net.minecraftforge.common.capabilities.Capability"

export class $EnergyRoutePath implements $IRoutePath<$IEnergyContainer> {
constructor(blockPos0: $BlockPos$$Type, direction1: $Direction$$Type, cableBlockEntity2s: $CableBlockEntity$$Type[], int3: integer, long4: long)

public "getDistance"(): integer
public "getMaxLoss"(): long
public "getPath"(): $CableBlockEntity[]
public "getTargetBlockEntity"(level0: $Level$$Type): $BlockEntity
public "getTargetCapability"<I>(capability0: $Capability$$Type<I>, level1: $Level$$Type): I
public "getTargetFacing"(): $Direction
public "getTargetPipePos"(): $BlockPos
get "distance"(): integer
get "maxLoss"(): long
get "path"(): $CableBlockEntity[]
get "targetFacing"(): $Direction
get "targetPipePos"(): $BlockPos
}
}

declare module "com.gregtechceu.gtceu.common.pipelike.item.ItemPipeType" {
import { $ResourceLocation } from "net.minecraft.resources.ResourceLocation"
import { $TagPrefix } from "com.gregtechceu.gtceu.api.data.tag.TagPrefix"
import { $ItemPipeProperties, $ItemPipeProperties$$Type } from "com.gregtechceu.gtceu.api.data.chemical.material.properties.ItemPipeProperties"
import { $Enum } from "java.lang.Enum"
import { $PipeModel } from "com.gregtechceu.gtceu.client.model.pipe.PipeModel"
import { $IMaterialPipeType } from "com.gregtechceu.gtceu.api.pipenet.IMaterialPipeType"
import { $Material$$Type } from "com.gregtechceu.gtceu.api.data.chemical.material.Material"
import { $GTBlockstateProvider$$Type } from "com.gregtechceu.gtceu.api.registry.registrate.provider.GTBlockstateProvider"
import { $PipeBlock$$Type } from "com.gregtechceu.gtceu.api.block.PipeBlock"

export class $ItemPipeType extends $Enum<$ItemPipeType> implements $IMaterialPipeType<$ItemPipeProperties> {
static readonly "HUGE": $ItemPipeType
static readonly "LARGE": $ItemPipeType
static readonly "NORMAL": $ItemPipeType
static readonly "RESTRICTIVE_HUGE": $ItemPipeType
static readonly "RESTRICTIVE_LARGE": $ItemPipeType
static readonly "RESTRICTIVE_NORMAL": $ItemPipeType
static readonly "RESTRICTIVE_SMALL": $ItemPipeType
static readonly "SMALL": $ItemPipeType
static readonly "TYPE_ID": $ResourceLocation
static readonly "VALUES": $ItemPipeType[]
readonly "name": string

public "createPipeModel"(pipeBlock0: $PipeBlock$$Type<any, any, any>, material1: $Material$$Type, gTBlockstateProvider2: $GTBlockstateProvider$$Type): $PipeModel
public "getName"(): string
public "getRateMultiplier"(): float
public "getSizeForTexture"(): string
public "getTagPrefix"(): $TagPrefix
public "getThickness"(): float
public "isPaintable"(): boolean
public "isRestrictive"(): boolean
public "modifyProperties"(itemPipeProperties0: $ItemPipeProperties$$Type): $ItemPipeProperties
public "type"(): $ResourceLocation
public static "valueOf"(string0: string): $ItemPipeType
public static "values"(): $ItemPipeType[]
get "rateMultiplier"(): float
get "sizeForTexture"(): string
get "tagPrefix"(): $TagPrefix
get "thickness"(): float
get "paintable"(): boolean
get "restrictive"(): boolean
}
}

declare module "com.gregtechceu.gtceu.common.pipelike.optical.LevelOpticalPipeNet" {
import { $CompoundTag$$Type } from "net.minecraft.nbt.CompoundTag"
import { $OpticalPipeProperties } from "com.gregtechceu.gtceu.common.pipelike.optical.OpticalPipeProperties"
import { $ServerLevel$$Type } from "net.minecraft.server.level.ServerLevel"
import { $LevelPipeNet } from "com.gregtechceu.gtceu.api.pipenet.LevelPipeNet"
import { $OpticalPipeNet } from "com.gregtechceu.gtceu.common.pipelike.optical.OpticalPipeNet"

export class $LevelOpticalPipeNet extends $LevelPipeNet<$OpticalPipeProperties, $OpticalPipeNet> {
constructor(serverLevel0: $ServerLevel$$Type)
constructor(serverLevel0: $ServerLevel$$Type, compoundTag1: $CompoundTag$$Type)

public static "getOrCreate"(serverLevel0: $ServerLevel$$Type): $LevelOpticalPipeNet
}
}

declare module "com.gregtechceu.gtceu.common.machine.electric.ChargerMachine$State" {
import { $Enum, $Enum$$Type } from "java.lang.Enum"
import { $StringRepresentable, $StringRepresentable$$Type } from "net.minecraft.util.StringRepresentable"
import { $StringRepresentable$EnumCodec } from "net.minecraft.util.StringRepresentable$EnumCodec"
import { $Keyable } from "com.mojang.serialization.Keyable"
import { $Supplier$$Type } from "java.util.function.Supplier"
import { $Function$$Type } from "java.util.function.Function"

export class $ChargerMachine$State extends $Enum<$ChargerMachine$State> implements $StringRepresentable {
static readonly "FINISHED": $ChargerMachine$State
static readonly "IDLE": $ChargerMachine$State
static readonly "RUNNING": $ChargerMachine$State

public static "fromEnum"<E extends ($Enum<E> & $StringRepresentable)>(supplier0: $Supplier$$Type<E[]>): $StringRepresentable$EnumCodec<E>
public static "fromEnumWithMapping"<E extends ($Enum<E> & $StringRepresentable)>(supplier0: $Supplier$$Type<E[]>, function1: $Function$$Type<string, string>): $StringRepresentable$EnumCodec<E>
public "getSerializedName"(): string
public static "keys"(stringRepresentable0s: $StringRepresentable$$Type[]): $Keyable
public static "valueOf"(string0: string): $ChargerMachine$State
public static "values"(): $ChargerMachine$State[]
get "serializedName"(): string
}
}

declare module "com.gregtechceu.gtceu.common.data.GTMaterialItems" {
import { $TagPrefix } from "com.gregtechceu.gtceu.api.data.tag.TagPrefix"
import { $Item } from "net.minecraft.world.item.Item"
import { $ItemProviderEntry } from "com.tterrag.registrate.util.entry.ItemProviderEntry"
import { $Supplier } from "java.util.function.Supplier"
import { $ArmorItem } from "net.minecraft.world.item.ArmorItem"
import { $GTToolType } from "com.gregtechceu.gtceu.api.item.tool.GTToolType"
import { $ItemEntry } from "com.tterrag.registrate.util.entry.ItemEntry"
import { $ItemLike } from "net.minecraft.world.level.ItemLike"
import { $IGTTool } from "com.gregtechceu.gtceu.api.item.IGTTool"
import { $Map } from "java.util.Map"
import { $MaterialEntry } from "com.gregtechceu.gtceu.api.data.chemical.material.stack.MaterialEntry"
import { $Material } from "com.gregtechceu.gtceu.api.data.chemical.material.Material"
import { $Table } from "com.google.common.collect.Table"
import { $ArmorItem$Type } from "net.minecraft.world.item.ArmorItem$Type"

export class $GTMaterialItems {
static readonly "ARMOR_ITEMS": $Table<$Material, $ArmorItem$Type, $ItemEntry<$ArmorItem>>
static "MATERIAL_ITEMS": $Table<$TagPrefix, $Material, $ItemEntry<$Item>>
static readonly "TOOL_ITEMS": $Table<$Material, $GTToolType, $ItemProviderEntry<$IGTTool>>
static readonly "purifyMap": $Map<$TagPrefix, $TagPrefix>
static readonly "toUnify": $Map<$MaterialEntry, $Supplier<$ItemLike>>

constructor()

public static "generateArmors"(): void
public static "generateMaterialItems"(): void
public static "generateTools"(): void
}
}

declare module "com.gregtechceu.gtceu.common.cover.data.DistributionMode" {
import { $Enum } from "java.lang.Enum"
import { $IGuiTexture } from "com.lowdragmc.lowdraglib.gui.texture.IGuiTexture"
import { $EnumSelectorWidget$SelectableEnum } from "com.gregtechceu.gtceu.api.gui.widget.EnumSelectorWidget$SelectableEnum"

export class $DistributionMode extends $Enum<$DistributionMode> implements $EnumSelectorWidget$SelectableEnum {
static readonly "INSERT_FIRST": $DistributionMode
static readonly "ROUND_ROBIN_GLOBAL": $DistributionMode
static readonly "ROUND_ROBIN_PRIO": $DistributionMode
static readonly "VALUES": $DistributionMode[]
readonly "localeName": string

public "getIcon"(): $IGuiTexture
public "getTooltip"(): string
public static "valueOf"(string0: string): $DistributionMode
public static "values"(): $DistributionMode[]
get "icon"(): $IGuiTexture
get "tooltip"(): string
}
}

declare module "com.gregtechceu.gtceu.common.data.GTBlocks" {
import { $BlockEntry } from "com.tterrag.registrate.util.entry.BlockEntry"
import { $BoilerFireboxType } from "com.gregtechceu.gtceu.common.block.BoilerFireboxType"
import { $ResourceLocation$$Type } from "net.minecraft.resources.ResourceLocation"
import { $FusionCasingBlock } from "com.gregtechceu.gtceu.common.block.FusionCasingBlock"
import { $TagPrefix, $TagPrefix$$Type } from "com.gregtechceu.gtceu.api.data.tag.TagPrefix"
import { $FenceGateBlock } from "net.minecraft.world.level.block.FenceGateBlock"
import { $TrapDoorBlock } from "net.minecraft.world.level.block.TrapDoorBlock"
import { $DuctPipeBlock } from "com.gregtechceu.gtceu.common.block.DuctPipeBlock"
import { $BlockBuilder, $BlockBuilder$$Type } from "com.tterrag.registrate.builders.BlockBuilder"
import { $PowderbarrelBlock } from "com.gregtechceu.gtceu.common.block.explosive.PowderbarrelBlock"
import { $RubberLogBlock } from "com.gregtechceu.gtceu.common.block.RubberLogBlock"
import { $PressurePlateBlock } from "net.minecraft.world.level.block.PressurePlateBlock"
import { $BlockBehaviour$Properties, $BlockBehaviour$Properties$$Type } from "net.minecraft.world.level.block.state.BlockBehaviour$Properties"
import { $ActiveBlock } from "com.gregtechceu.gtceu.api.block.ActiveBlock"
import { $NonNullSupplier$$Type } from "com.tterrag.registrate.util.nullness.NonNullSupplier"
import { $Map } from "java.util.Map"
import { $CoilBlock } from "com.gregtechceu.gtceu.common.block.CoilBlock"
import { $BlockSetType } from "net.minecraft.world.level.block.state.properties.BlockSetType"
import { $OpticalPipeBlock } from "com.gregtechceu.gtceu.common.block.OpticalPipeBlock"
import { $BlockColor } from "net.minecraft.client.color.block.BlockColor"
import { $ImmutableMap } from "com.google.common.collect.ImmutableMap"
import { $IFusionCasingType } from "com.gregtechceu.gtceu.api.block.IFusionCasingType"
import { $LaserPipeBlock } from "com.gregtechceu.gtceu.common.block.LaserPipeBlock"
import { $GTStandingSignBlock } from "com.gregtechceu.gtceu.common.block.GTStandingSignBlock"
import { $BatteryBlock } from "com.gregtechceu.gtceu.common.block.BatteryBlock"
import { $WoodType } from "net.minecraft.world.level.block.state.properties.WoodType"
import { $GTWallHangingSignBlock } from "com.gregtechceu.gtceu.common.block.GTWallHangingSignBlock"
import { $Material, $Material$$Type } from "com.gregtechceu.gtceu.api.data.chemical.material.Material"
import { $StairBlock } from "net.minecraft.world.level.block.StairBlock"
import { $GTCeilingHangingSignBlock } from "com.gregtechceu.gtceu.common.block.GTCeilingHangingSignBlock"
import { $DyeColor } from "net.minecraft.world.item.DyeColor"
import { $FoamBlock } from "com.gregtechceu.gtceu.common.block.FoamBlock"
import { $BlockState } from "net.minecraft.world.level.block.state.BlockState"
import { $SlabBlock } from "net.minecraft.world.level.block.SlabBlock"
import { $FenceBlock } from "net.minecraft.world.level.block.FenceBlock"
import { $Supplier, $Supplier$$Type } from "java.util.function.Supplier"
import { $StoneTypes } from "com.gregtechceu.gtceu.common.block.StoneTypes"
import { $ButtonBlock } from "net.minecraft.world.level.block.ButtonBlock"
import { $GTWallSignBlock } from "com.gregtechceu.gtceu.common.block.GTWallSignBlock"
import { $NonNullFunction, $NonNullFunction$$Type } from "com.tterrag.registrate.util.nullness.NonNullFunction"
import { $StoneBlockType } from "com.gregtechceu.gtceu.common.block.StoneBlockType"
import { $IndustrialTNTBlock } from "com.gregtechceu.gtceu.common.block.explosive.IndustrialTNTBlock"
import { $RubberWoodBlock } from "com.gregtechceu.gtceu.common.block.RubberWoodBlock"
import { $SaplingBlock } from "net.minecraft.world.level.block.SaplingBlock"
import { $RenderType } from "net.minecraft.client.renderer.RenderType"
import { $DoorBlock } from "net.minecraft.world.level.block.DoorBlock"
import { $GlassBlock } from "net.minecraft.world.level.block.GlassBlock"
import { $Block, $Block$$Type } from "net.minecraft.world.level.block.Block"
import { $RotatedPillarBlock } from "net.minecraft.world.level.block.RotatedPillarBlock"
import { $LampBlock } from "com.gregtechceu.gtceu.common.block.LampBlock"
import { $MinerPipeBlock } from "com.gregtechceu.gtceu.common.block.MinerPipeBlock"
import { $Table } from "com.google.common.collect.Table"
import { $LongDistancePipeBlock } from "com.gregtechceu.gtceu.api.pipenet.longdistance.LongDistancePipeBlock"
import { $ItemColor } from "net.minecraft.client.color.item.ItemColor"
import { $LeavesBlock } from "net.minecraft.world.level.block.LeavesBlock"

export class $GTBlocks {
static readonly "ACID_HAZARD_SIGN_BLOCK": $BlockEntry<$Block>
static readonly "ADVANCED_COMPUTER_CASING": $BlockEntry<$Block>
static readonly "ALL_FIREBOXES": $Map<$BoilerFireboxType, $BlockEntry<$ActiveBlock>>
static readonly "ALL_FUSION_CASINGS": $Map<$IFusionCasingType, $Supplier<$FusionCasingBlock>>
static readonly "ANTIMATTER_HAZARD_SIGN_BLOCK": $BlockEntry<$Block>
static readonly "BATTERY_EMPTY_TIER_I": $BlockEntry<$BatteryBlock>
static readonly "BATTERY_EMPTY_TIER_II": $BlockEntry<$BatteryBlock>
static readonly "BATTERY_EMPTY_TIER_III": $BlockEntry<$BatteryBlock>
static readonly "BATTERY_LAPOTRONIC_EV": $BlockEntry<$BatteryBlock>
static readonly "BATTERY_LAPOTRONIC_IV": $BlockEntry<$BatteryBlock>
static readonly "BATTERY_LAPOTRONIC_LuV": $BlockEntry<$BatteryBlock>
static readonly "BATTERY_LAPOTRONIC_UV": $BlockEntry<$BatteryBlock>
static readonly "BATTERY_LAPOTRONIC_ZPM": $BlockEntry<$BatteryBlock>
static readonly "BATTERY_ULTIMATE_UHV": $BlockEntry<$BatteryBlock>
static readonly "BIO_HAZARD_SIGN_BLOCK": $BlockEntry<$Block>
static readonly "BORDERLESS_LAMPS": $Map<$DyeColor, $BlockEntry<$LampBlock>>
static readonly "BOSS_HAZARD_SIGN_BLOCK": $BlockEntry<$Block>
static "BRITTLE_CHARCOAL": $BlockEntry<$Block>
static readonly "BRONZE_BRICKS_HULL": $BlockEntry<$Block>
static readonly "BRONZE_HULL": $BlockEntry<$Block>
static readonly "CASING_ALUMINIUM_FROSTPROOF": $BlockEntry<$Block>
static readonly "CASING_ASSEMBLY_CONTROL": $BlockEntry<$Block>
static readonly "CASING_ASSEMBLY_LINE": $BlockEntry<$ActiveBlock>
static readonly "CASING_BRONZE_BRICKS": $BlockEntry<$Block>
static readonly "CASING_BRONZE_GEARBOX": $BlockEntry<$Block>
static readonly "CASING_BRONZE_PIPE": $BlockEntry<$Block>
static readonly "CASING_COKE_BRICKS": $BlockEntry<$Block>
static readonly "CASING_ENGINE_INTAKE": $BlockEntry<$ActiveBlock>
static readonly "CASING_EXTREME_ENGINE_INTAKE": $BlockEntry<$ActiveBlock>
static readonly "CASING_GRATE": $BlockEntry<$Block>
static readonly "CASING_HSSE_STURDY": $BlockEntry<$Block>
static readonly "CASING_INVAR_HEATPROOF": $BlockEntry<$Block>
static readonly "CASING_LAMINATED_GLASS": $BlockEntry<$GlassBlock>
static readonly "CASING_PALLADIUM_SUBSTATION": $BlockEntry<$Block>
static readonly "CASING_POLYTETRAFLUOROETHYLENE_PIPE": $BlockEntry<$Block>
static readonly "CASING_PRIMITIVE_BRICKS": $BlockEntry<$Block>
static readonly "CASING_PTFE_INERT": $BlockEntry<$Block>
static readonly "CASING_PUMP_DECK": $BlockEntry<$Block>
static readonly "CASING_STAINLESS_CLEAN": $BlockEntry<$Block>
static readonly "CASING_STAINLESS_STEEL_GEARBOX": $BlockEntry<$Block>
static readonly "CASING_STAINLESS_TURBINE": $BlockEntry<$Block>
static readonly "CASING_STEEL_GEARBOX": $BlockEntry<$Block>
static readonly "CASING_STEEL_PIPE": $BlockEntry<$Block>
static readonly "CASING_STEEL_SOLID": $BlockEntry<$Block>
static readonly "CASING_STEEL_TURBINE": $BlockEntry<$Block>
static readonly "CASING_TEMPERED_GLASS": $BlockEntry<$GlassBlock>
static readonly "CASING_TITANIUM_GEARBOX": $BlockEntry<$Block>
static readonly "CASING_TITANIUM_PIPE": $BlockEntry<$Block>
static readonly "CASING_TITANIUM_STABLE": $BlockEntry<$Block>
static readonly "CASING_TITANIUM_TURBINE": $BlockEntry<$Block>
static readonly "CASING_TUNGSTENSTEEL_GEARBOX": $BlockEntry<$Block>
static readonly "CASING_TUNGSTENSTEEL_PIPE": $BlockEntry<$Block>
static readonly "CASING_TUNGSTENSTEEL_ROBUST": $BlockEntry<$Block>
static readonly "CASING_TUNGSTENSTEEL_TURBINE": $BlockEntry<$Block>
static readonly "CASING_WOOD_WALL": $BlockEntry<$Block>
static readonly "CAUSALITY_HAZARD_SIGN_BLOCK": $BlockEntry<$Block>
static readonly "CLEANROOM_GLASS": $BlockEntry<$GlassBlock>
static "COBBLE_BLOCKS": $Map<$TagPrefix, $Supplier<$BlockState>>
static readonly "COIL_CUPRONICKEL": $BlockEntry<$CoilBlock>
static readonly "COIL_HSSG": $BlockEntry<$CoilBlock>
static readonly "COIL_KANTHAL": $BlockEntry<$CoilBlock>
static readonly "COIL_NAQUADAH": $BlockEntry<$CoilBlock>
static readonly "COIL_NICHROME": $BlockEntry<$CoilBlock>
static readonly "COIL_RTMALLOY": $BlockEntry<$CoilBlock>
static readonly "COIL_TRINIUM": $BlockEntry<$CoilBlock>
static readonly "COIL_TRITANIUM": $BlockEntry<$CoilBlock>
static readonly "COMPUTER_CASING": $BlockEntry<$Block>
static readonly "COMPUTER_HEAT_VENT": $BlockEntry<$Block>
static "DARK_CONCRETE": $BlockEntry<$Block>
static readonly "DUCT_PIPES": $BlockEntry<$DuctPipeBlock>[]
static readonly "EXPLOSION_HAZARD_SIGN_BLOCK": $BlockEntry<$Block>
static readonly "FILTER_CASING": $BlockEntry<$Block>
static readonly "FILTER_CASING_STERILE": $BlockEntry<$Block>
static readonly "FIREBOX_BRONZE": $BlockEntry<$ActiveBlock>
static readonly "FIREBOX_STEEL": $BlockEntry<$ActiveBlock>
static readonly "FIREBOX_TITANIUM": $BlockEntry<$ActiveBlock>
static readonly "FIREBOX_TUNGSTENSTEEL": $BlockEntry<$ActiveBlock>
static readonly "FIRE_HAZARD_SIGN_BLOCK": $BlockEntry<$Block>
static readonly "FOAM": $BlockEntry<$FoamBlock>
static readonly "FROST_HAZARD_SIGN_BLOCK": $BlockEntry<$Block>
static readonly "FUSION_CASING": $BlockEntry<$FusionCasingBlock>
static readonly "FUSION_CASING_MK2": $BlockEntry<$FusionCasingBlock>
static readonly "FUSION_CASING_MK3": $BlockEntry<$FusionCasingBlock>
static readonly "FUSION_COIL": $BlockEntry<$FusionCasingBlock>
static readonly "FUSION_GLASS": $BlockEntry<$GlassBlock>
static readonly "GENERIC_HAZARD_SIGN_BLOCK": $BlockEntry<$Block>
static readonly "GREGIFICATION_HAZARD_SIGN_BLOCK": $BlockEntry<$Block>
static readonly "HERMETIC_CASING_EV": $BlockEntry<$Block>
static readonly "HERMETIC_CASING_HV": $BlockEntry<$Block>
static readonly "HERMETIC_CASING_IV": $BlockEntry<$Block>
static readonly "HERMETIC_CASING_LV": $BlockEntry<$Block>
static readonly "HERMETIC_CASING_LuV": $BlockEntry<$Block>
static readonly "HERMETIC_CASING_MV": $BlockEntry<$Block>
static readonly "HERMETIC_CASING_UHV": $BlockEntry<$Block>
static readonly "HERMETIC_CASING_UV": $BlockEntry<$Block>
static readonly "HERMETIC_CASING_ZPM": $BlockEntry<$Block>
static readonly "HIGH_POWER_CASING": $BlockEntry<$Block>
static readonly "HIGH_PRESSURE_HAZARD_SIGN_BLOCK": $BlockEntry<$Block>
static readonly "HIGH_TEMPERATURE_HAZARD_SIGN_BLOCK": $BlockEntry<$Block>
static readonly "HIGH_VOLTAGE_HAZARD_SIGN_BLOCK": $BlockEntry<$Block>
static readonly "INDUSTRIAL_TNT": $BlockEntry<$IndustrialTNTBlock>
static readonly "LAMPS": $Map<$DyeColor, $BlockEntry<$LampBlock>>
static readonly "LARGE_METAL_SHEETS": $Map<$DyeColor, $BlockEntry<$Block>>
static readonly "LASER_HAZARD_SIGN_BLOCK": $BlockEntry<$Block>
static readonly "LASER_PIPES": $BlockEntry<$LaserPipeBlock>[]
static readonly "LD_FLUID_PIPE": $BlockEntry<$LongDistancePipeBlock>
static readonly "LD_ITEM_PIPE": $BlockEntry<$LongDistancePipeBlock>
static "LIGHT_CONCRETE": $BlockEntry<$Block>
static readonly "MACHINE_CASING_EV": $BlockEntry<$Block>
static readonly "MACHINE_CASING_HV": $BlockEntry<$Block>
static readonly "MACHINE_CASING_IV": $BlockEntry<$Block>
static readonly "MACHINE_CASING_LV": $BlockEntry<$Block>
static readonly "MACHINE_CASING_LuV": $BlockEntry<$Block>
static readonly "MACHINE_CASING_MAX": $BlockEntry<$Block>
static readonly "MACHINE_CASING_MV": $BlockEntry<$Block>
static readonly "MACHINE_CASING_OpV": $BlockEntry<$Block>
static readonly "MACHINE_CASING_UEV": $BlockEntry<$Block>
static readonly "MACHINE_CASING_UHV": $BlockEntry<$Block>
static readonly "MACHINE_CASING_UIV": $BlockEntry<$Block>
static readonly "MACHINE_CASING_ULV": $BlockEntry<$Block>
static readonly "MACHINE_CASING_UV": $BlockEntry<$Block>
static readonly "MACHINE_CASING_UXV": $BlockEntry<$Block>
static readonly "MACHINE_CASING_ZPM": $BlockEntry<$Block>
static readonly "MAGIC_HAZARD_SIGN_BLOCK": $BlockEntry<$Block>
static readonly "MAGNETIC_HAZARD_SIGN_BLOCK": $BlockEntry<$Block>
static "MARBLE": $BlockEntry<$Block>
static readonly "MATERIALS_TO_CASINGS": $ImmutableMap<$Material, $BlockEntry<$Block>>
static readonly "METAL_SHEETS": $Map<$DyeColor, $BlockEntry<$Block>>
static readonly "MINER_PIPE": $BlockEntry<$MinerPipeBlock>
static readonly "MOB_INFESTATION_HAZARD_SIGN_BLOCK": $BlockEntry<$Block>
static readonly "MOB_SPAWNER_HAZARD_SIGN_BLOCK": $BlockEntry<$Block>
static readonly "NOISE_HAZARD_SIGN_BLOCK": $BlockEntry<$Block>
static readonly "OPTICAL_PIPES": $BlockEntry<$OpticalPipeBlock>[]
static readonly "PETRIFIED_FOAM": $BlockEntry<$Block>
static readonly "PLASTCRETE": $BlockEntry<$Block>
static readonly "POWDERBARREL": $BlockEntry<$PowderbarrelBlock>
static readonly "RADIOACTIVE_HAZARD_SIGN_BLOCK": $BlockEntry<$Block>
static "RED_GRANITE": $BlockEntry<$Block>
static readonly "REINFORCED_FOAM": $BlockEntry<$FoamBlock>
static readonly "REINFORCED_STONE": $BlockEntry<$Block>
static readonly "RUBBER_BUTTON": $BlockEntry<$ButtonBlock>
static readonly "RUBBER_DOOR": $BlockEntry<$DoorBlock>
static readonly "RUBBER_FENCE": $BlockEntry<$FenceBlock>
static readonly "RUBBER_FENCE_GATE": $BlockEntry<$FenceGateBlock>
static readonly "RUBBER_HANGING_SIGN": $BlockEntry<$GTCeilingHangingSignBlock>
static readonly "RUBBER_LEAVES": $BlockEntry<$LeavesBlock>
static readonly "RUBBER_LEAVES_DROPPING_CHANCE": float[]
static readonly "RUBBER_LOG": $BlockEntry<$RubberLogBlock>
static readonly "RUBBER_PLANK": $BlockEntry<$Block>
static readonly "RUBBER_PRESSURE_PLATE": $BlockEntry<$PressurePlateBlock>
static readonly "RUBBER_SAPLING": $BlockEntry<$SaplingBlock>
static readonly "RUBBER_SET": $BlockSetType
static readonly "RUBBER_SIGN": $BlockEntry<$GTStandingSignBlock>
static readonly "RUBBER_SLAB": $BlockEntry<$SlabBlock>
static readonly "RUBBER_STAIRS": $BlockEntry<$StairBlock>
static readonly "RUBBER_TRAPDOOR": $BlockEntry<$TrapDoorBlock>
static readonly "RUBBER_TYPE": $WoodType
static readonly "RUBBER_WALL_HANGING_SIGN": $BlockEntry<$GTWallHangingSignBlock>
static readonly "RUBBER_WALL_SIGN": $BlockEntry<$GTWallSignBlock>
static readonly "RUBBER_WOOD": $BlockEntry<$RubberWoodBlock>
static readonly "SPATIAL_STORAGE_HAZARD_SIGN_BLOCK": $BlockEntry<$Block>
static readonly "STEEL_BRICKS_HULL": $BlockEntry<$Block>
static readonly "STEEL_HULL": $BlockEntry<$Block>
static "STONE_BLOCKS": $Table<$StoneBlockType, $StoneTypes, $BlockEntry<$Block>>
static readonly "STRIPPED_RUBBER_LOG": $BlockEntry<$RotatedPillarBlock>
static readonly "STRIPPED_RUBBER_WOOD": $BlockEntry<$RotatedPillarBlock>
static readonly "STUDS": $Map<$DyeColor, $BlockEntry<$Block>>
static readonly "SUPERCONDUCTING_COIL": $BlockEntry<$FusionCasingBlock>
static readonly "TREATED_WOOD_BUTTON": $BlockEntry<$ButtonBlock>
static readonly "TREATED_WOOD_DOOR": $BlockEntry<$DoorBlock>
static readonly "TREATED_WOOD_FENCE": $BlockEntry<$FenceBlock>
static readonly "TREATED_WOOD_FENCE_GATE": $BlockEntry<$FenceGateBlock>
static readonly "TREATED_WOOD_HANGING_SIGN": $BlockEntry<$GTCeilingHangingSignBlock>
static readonly "TREATED_WOOD_PLANK": $BlockEntry<$Block>
static readonly "TREATED_WOOD_PRESSURE_PLATE": $BlockEntry<$PressurePlateBlock>
static readonly "TREATED_WOOD_SET": $BlockSetType
static readonly "TREATED_WOOD_SIGN": $BlockEntry<$GTStandingSignBlock>
static readonly "TREATED_WOOD_SLAB": $BlockEntry<$SlabBlock>
static readonly "TREATED_WOOD_STAIRS": $BlockEntry<$StairBlock>
static readonly "TREATED_WOOD_TRAPDOOR": $BlockEntry<$TrapDoorBlock>
static readonly "TREATED_WOOD_TYPE": $WoodType
static readonly "TREATED_WOOD_WALL_HANGING_SIGN": $BlockEntry<$GTWallHangingSignBlock>
static readonly "TREATED_WOOD_WALL_SIGN": $BlockEntry<$GTWallSignBlock>
static readonly "TURRET_HAZARD_SIGN_BLOCK": $BlockEntry<$Block>
static readonly "VOID_HAZARD_SIGN_BLOCK": $BlockEntry<$Block>
static readonly "YELLOW_STRIPES_BLOCK_A": $BlockEntry<$Block>
static readonly "YELLOW_STRIPES_BLOCK_B": $BlockEntry<$Block>

constructor()

public static "copy"(properties0: $BlockBehaviour$Properties$$Type, properties1: $BlockBehaviour$Properties$$Type): $BlockBehaviour$Properties
public static "createCasingBlock"(string0: string, nonNullFunction1: $NonNullFunction$$Type<$BlockBehaviour$Properties$$Type, $Block>, resourceLocation2: $ResourceLocation$$Type, nonNullSupplier3: $NonNullSupplier$$Type<$Block>, supplier4: $Supplier$$Type<$Supplier<$RenderType>>): $BlockEntry<$Block>
public static "createCasingBlock"(string0: string, resourceLocation1: $ResourceLocation$$Type): $BlockEntry<$Block>
public static "doMetalPipe"(material0: $Material$$Type): boolean
public static "generateStoneBlocks"(): void
public static "init"(): void
/** Client only, do not use in server scripts */
public static "leavesBlockColor"(): $BlockColor
/** Client only, do not use in server scripts */
public static "leavesItemColor"(): $ItemColor
public static "registerCobbleBlock"(tagPrefix0: $TagPrefix$$Type, supplier1: $Supplier$$Type<$BlockState>): void
public static "removeCobbleBlock"(tagPrefix0: $TagPrefix$$Type): void
public static "unificationBlock"<P, T extends $Block, S2 extends $BlockBuilder<T, P>>(tagPrefix0: $TagPrefix$$Type, material1: $Material$$Type): $NonNullFunction<S2, S2>
}
}

declare module "com.gregtechceu.gtceu.common.machine.owner.MachineOwner" {
import { $List$$Type } from "java.util.List"
import { $Component, $Component$$Type } from "net.minecraft.network.chat.Component"
import { $MetaMachine$$Type } from "com.gregtechceu.gtceu.api.machine.MetaMachine"
import { $PlayerOwner } from "com.gregtechceu.gtceu.common.machine.owner.PlayerOwner"
import { $Set } from "java.util.Set"
import { $UUID, $UUID$$Type } from "java.util.UUID"
import { $Player$$Type } from "net.minecraft.world.entity.player.Player"

export class $MachineOwner {
static readonly "EMPTY": $UUID

public static "canBreakOwnerMachine"(player0: $Player$$Type, metaMachine1: $MetaMachine$$Type): boolean
public static "canOpenOwnerMachine"(player0: $Player$$Type, metaMachine1: $MetaMachine$$Type): boolean
public "displayInfo"(list0: $List$$Type<$Component$$Type>): void
public static "displayPlayerInfo"(list0: $List$$Type<$Component$$Type>, uUID1: $UUID$$Type): void
public "getMembers"(): $Set<$UUID>
public "getName"(): string
public static "getOwner"(uUID0: $UUID$$Type): $MachineOwner
public static "getPlayerOwner"(uUID0: $UUID$$Type): $PlayerOwner
public "getPlayerUUID"(): $UUID
public "getTypeDisplayName"(): $Component
public "getUUID"(): $UUID
public static "init"(): void
public "isPlayerFriendly"(uUID0: $UUID$$Type): boolean
public "isPlayerFriendly"(player0: $Player$$Type): boolean
public "isPlayerInTeam"(uUID0: $UUID$$Type): boolean
public "isPlayerInTeam"(player0: $Player$$Type): boolean
get "members"(): $Set<$UUID>
get "name"(): string
get "playerUUID"(): $UUID
get "typeDisplayName"(): $Component
get "uUID"(): $UUID
}
}

declare module "com.gregtechceu.gtceu.common.pipelike.fluidpipe.FluidPipeNet" {
import { $FluidPipeProperties, $FluidPipeProperties$$Type } from "com.gregtechceu.gtceu.api.data.chemical.material.properties.FluidPipeProperties"
import { $LevelPipeNet$$Type } from "com.gregtechceu.gtceu.api.pipenet.LevelPipeNet"
import { $PipeNet } from "com.gregtechceu.gtceu.api.pipenet.PipeNet"

export class $FluidPipeNet extends $PipeNet<$FluidPipeProperties> {
constructor(levelPipeNet0: $LevelPipeNet$$Type<$FluidPipeProperties$$Type, $FluidPipeNet$$Type>)

}
}

declare module "com.gregtechceu.gtceu.common.block.FusionCasingBlock" {
import { $ResourceLocation } from "net.minecraft.resources.ResourceLocation"
import { $LivingEntity$$Type } from "net.minecraft.world.entity.LivingEntity"
import { $Direction, $Direction$$Type } from "net.minecraft.core.Direction"
import { $EntityType$$Type } from "net.minecraft.world.entity.EntityType"
import { $Item$$Type } from "net.minecraft.world.item.Item"
import { $BlockState, $BlockState$$Type } from "net.minecraft.world.level.block.state.BlockState"
import { $SpawnPlacements$Type$$Type } from "net.minecraft.world.entity.SpawnPlacements$Type"
import { $BlockBehaviour$Properties$$Type } from "net.minecraft.world.level.block.state.BlockBehaviour$Properties"
import { $ServerLevel$$Type } from "net.minecraft.server.level.ServerLevel"
import { $ActiveBlock } from "com.gregtechceu.gtceu.api.block.ActiveBlock"
import { $BlockGetter$$Type } from "net.minecraft.world.level.BlockGetter"
import { $MapColor, $MapColor$$Type } from "net.minecraft.world.level.material.MapColor"
import { $PushReaction } from "net.minecraft.world.level.material.PushReaction"
import { $Rotation$$Type } from "net.minecraft.world.level.block.Rotation"
import { $Holder } from "net.minecraft.core.Holder"
import { $ToolAction$$Type } from "net.minecraftforge.common.ToolAction"
import { $BiConsumer$$Type } from "java.util.function.BiConsumer"
import { $UseOnContext$$Type } from "net.minecraft.world.item.context.UseOnContext"
import { $BlockAndTintGetter$$Type } from "net.minecraft.world.level.BlockAndTintGetter"
import { $IFusionCasingType$$Type } from "com.gregtechceu.gtceu.api.block.IFusionCasingType"
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

export class $FusionCasingBlock extends $ActiveBlock {
constructor(properties0: $BlockBehaviour$Properties$$Type, iFusionCasingType1: $IFusionCasingType$$Type)

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
public static "get"(item: $Item$$Type): $ResourceLocation
public static "get"(block: $Block$$Type): $ResourceLocation
public static "get"(state: $BlockState$$Type): $ResourceLocation
public static "get"(entity: $Entity$$Type): $ResourceLocation
public static "get"(stack: $ItemStack$$Type): $ResourceLocation
public static "get"(type: $EntityType$$Type<any>): $ResourceLocation
public "getAdjacentBlockPathType"(blockState0: $BlockState$$Type, blockGetter1: $BlockGetter$$Type, blockPos2: $BlockPos$$Type, mob3: $Mob$$Type, blockPathTypes4: $BlockPathTypes$$Type): $BlockPathTypes
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
get "blockStates"(): $List<$BlockState>
get "mod"(): string
set "destroySpeed"(value: float)
set "lightEmission"(value: integer)
set "requiresTool"(value: boolean)
}
}

declare module "com.gregtechceu.gtceu.common.blockentity.DuctPipeBlockEntity" {
import { $IFieldUpdateListener$$Type } from "com.lowdragmc.lowdraglib.syncdata.IFieldUpdateListener"
import { $AABB } from "net.minecraft.world.phys.AABB"
import { $Direction, $Direction$$Type } from "net.minecraft.core.Direction"
import { $Connection$$Type } from "net.minecraft.network.Connection"
import { $BlockState$$Type } from "net.minecraft.world.level.block.state.BlockState"
import { $DuctNetHandler } from "com.gregtechceu.gtceu.common.pipelike.duct.DuctNetHandler"
import { $DuctPipeProperties } from "com.gregtechceu.gtceu.common.pipelike.duct.DuctPipeProperties"
import { $PipeBlockEntity } from "com.gregtechceu.gtceu.api.blockentity.PipeBlockEntity"
import { $Runnable$$Type } from "java.lang.Runnable"
import { $LazyOptional } from "net.minecraftforge.common.util.LazyOptional"
import { $TrackedData, $TrackedData$$Type } from "dev.corgitaco.dataanchor.data.TrackedData"
import { $DuctPipeNet } from "com.gregtechceu.gtceu.common.pipelike.duct.DuctPipeNet"
import { $IRef, $IRef$$Type } from "com.lowdragmc.lowdraglib.syncdata.managed.IRef"
import { $PipeBlock } from "com.gregtechceu.gtceu.api.block.PipeBlock"
import { $TrackedDataRegistry$$Type } from "dev.corgitaco.dataanchor.data.registry.TrackedDataRegistry"
import { $PipeNet } from "com.gregtechceu.gtceu.api.pipenet.PipeNet"
import { $EnumMap } from "java.util.EnumMap"
import { $ClientboundBlockEntityDataPacket$$Type } from "net.minecraft.network.protocol.game.ClientboundBlockEntityDataPacket"
import { $ModelData } from "net.minecraftforge.client.model.data.ModelData"
import { $BlockEntity } from "net.minecraft.world.level.block.entity.BlockEntity"
import { $Capability$$Type } from "net.minecraftforge.common.capabilities.Capability"
import { $Player$$Type } from "net.minecraft.world.entity.player.Player"
import { $IHazardParticleContainer } from "com.gregtechceu.gtceu.api.capability.IHazardParticleContainer"
import { $TickableSubscription, $TickableSubscription$$Type } from "com.gregtechceu.gtceu.api.machine.TickableSubscription"
import { $CompoundTag$$Type } from "net.minecraft.nbt.CompoundTag"
import { $DuctPipeType } from "com.gregtechceu.gtceu.common.pipelike.duct.DuctPipeType"
import { $TrackedDataContainer } from "dev.corgitaco.dataanchor.data.TrackedDataContainer"
import { $BlockEntityType, $BlockEntityType$$Type } from "net.minecraft.world.level.block.entity.BlockEntityType"
import { $BlockPos, $BlockPos$$Type } from "net.minecraft.core.BlockPos"
import { $Level } from "net.minecraft.world.level.Level"
import { $ISubscription } from "com.lowdragmc.lowdraglib.syncdata.ISubscription"

export class $DuctPipeBlockEntity extends $PipeBlockEntity<$DuctPipeType, $DuctPipeProperties> {
readonly "clientCapability": $IHazardParticleContainer

constructor(blockEntityType0: $BlockEntityType$$Type<any>, blockPos1: $BlockPos$$Type, blockState2: $BlockState$$Type)

public "addSyncUpdateListener"<T>(name: string, listener: $IFieldUpdateListener$$Type<T>): $ISubscription
public "asyncTick"(periodID: long): void
public "canAttachTo"(direction0: $Direction$$Type): boolean
public "canHaveBlockedFaces"(): boolean
public "checkNetwork"(): void
public "defaultServerTick"(): void
public "deserializeNBT"(compoundTag0: $CompoundTag$$Type): void
public "getBlockEntityType"(): $BlockEntityType<any>
public "getCapability"<T>(capability0: $Capability$$Type<T>, direction1: $Direction$$Type): $LazyOptional<T>
public "getCapability"<T>(capability0: $Capability$$Type<T>): $LazyOptional<T>
public "getCurrentPos"(): $BlockPos
public "getDefaultHandler"(): $DuctNetHandler
public "getDuctPipeNet"(): $DuctPipeNet
public "getHandlers"(): $EnumMap<$Direction, $DuctNetHandler>
public "getModelData"(): $ModelData
public "getNeighbor"(direction0: $Direction$$Type): $BlockEntity
public "getNonLazyFields"(): $IRef[]
public "getPipeBlock"(): $PipeBlock<$DuctPipeType, $DuctPipeProperties, any>
public "getPipeLevel"(): $Level
public "getPipeNet"(): $PipeNet<$DuctPipeProperties>
public "getPipePos"(): $BlockPos
public "getPipeType"(): $DuctPipeType
public "getRealColor"(): integer
public "getRenderBoundingBox"(): $AABB
public "getSelf"(): $BlockEntity
public "getSyncTag"(): string
public "handleUpdateTag"(compoundTag0: $CompoundTag$$Type): void
public "hasCustomOutlineRendering"(player0: $Player$$Type): boolean
public "initHandlers"(): void
public "isAsyncSyncing"(): boolean
public "isBlocked"(direction0: $Direction$$Type): boolean
public "isConnected"(direction0: $Direction$$Type): boolean
public "isInValid"(): boolean
public "isPainted"(): boolean
public "isRemote"(): boolean
public "loadCustomPersistedData"(tag: $CompoundTag$$Type): void
public "loadManagedPersistentData"(tag: $CompoundTag$$Type): void
public static "makeBasicContainer"<O, T extends $TrackedData<O>>(registry: $TrackedDataRegistry$$Type<O, T>, o: O, isClient: boolean): $TrackedDataContainer<O, T>
public static "makeBasicContainer"<O, T extends $TrackedData<O>>(registry: $TrackedDataRegistry$$Type<O, T>, o: O, isClient: boolean, lazyLoad: boolean): $TrackedDataContainer<O, T>
public "markAsDirty"(): void
public "markDirty"(name: string): void
public static "onBlockEntityRegister"(blockEntityType0: $BlockEntityType$$Type<$DuctPipeBlockEntity$$Type>): void
public "onDataPacket"(connection0: $Connection$$Type, clientboundBlockEntityDataPacket1: $ClientboundBlockEntityDataPacket$$Type): void
public "onInValid"(): void
public "onLoad"(): void
public "onPersistedChanged"(ref: $IRef$$Type, isDirty: boolean): void
public "onSyncChanged"(ref: $IRef$$Type, isDirty: boolean): void
public "onValid"(): void
public "readCustomSyncData"(tag: $CompoundTag$$Type): void
public "requestModelDataUpdate"(): void
public "saveCustomPersistedData"(tag: $CompoundTag$$Type, forDrop: boolean): void
public "saveManagedPersistentData"(tag: $CompoundTag$$Type, forDrop: boolean): void
public "scheduleNeighborShapeUpdate"(): void
public "scheduleRender"(fieldName: string, newValue: any, oldValue: any): void
public "sdl$isDynamicLightEnabled"(): boolean
public "sdl$setDynamicLightEnabled"(enabled: boolean): void
public "self"(): $BlockEntity
public "setAsyncSyncing"(syncing: boolean): void
public "subscribeServerTick"(tickableSubscription0: $TickableSubscription$$Type, runnable1: $Runnable$$Type): $TickableSubscription
public "syncNow"(force: boolean): void
public "useAsyncThread"(): boolean
public "writeCustomSyncData"(tag: $CompoundTag$$Type): void
get "blockEntityType"(): $BlockEntityType<any>
get "currentPos"(): $BlockPos
get "defaultHandler"(): $DuctNetHandler
get "ductPipeNet"(): $DuctPipeNet
get "handlers"(): $EnumMap<$Direction, $DuctNetHandler>
get "modelData"(): $ModelData
get "nonLazyFields"(): $IRef[]
get "pipeBlock"(): $PipeBlock<$DuctPipeType, $DuctPipeProperties, any>
get "pipeLevel"(): $Level
get "pipeNet"(): $PipeNet<$DuctPipeProperties>
get "pipePos"(): $BlockPos
get "pipeType"(): $DuctPipeType
get "realColor"(): integer
get "renderBoundingBox"(): $AABB
get "syncTag"(): string
get "asyncSyncing"(): boolean
get "inValid"(): boolean
get "painted"(): boolean
get "remote"(): boolean
set "asyncSyncing"(value: boolean)
}
}

declare module "com.gregtechceu.gtceu.common.data.GTMachines" {
import { $List } from "java.util.List"
import { $MachineDefinition } from "com.gregtechceu.gtceu.api.machine.MachineDefinition"
import { $Component } from "net.minecraft.network.chat.Component"
import { $Pair } from "it.unimi.dsi.fastutil.Pair"
import { $BiConsumer } from "java.util.function.BiConsumer"
import { $ItemStack } from "net.minecraft.world.item.ItemStack"

export class $GTMachines {
static readonly "ADVANCED_MONITOR": $MachineDefinition
static readonly "AIR_SCRUBBER": $MachineDefinition[]
static readonly "ALLOY_SMELTER": $MachineDefinition[]
static "ALUMINIUM_CRATE": $MachineDefinition
static "ALUMINIUM_DRUM": $MachineDefinition
static readonly "ARC_FURNACE": $MachineDefinition[]
static readonly "ASSEMBLER": $MachineDefinition[]
static readonly "AUTOCLAVE": $MachineDefinition[]
static readonly "AUTO_MAINTENANCE_HATCH": $MachineDefinition
static readonly "BATTERY_BUFFER_16": $MachineDefinition[]
static readonly "BATTERY_BUFFER_4": $MachineDefinition[]
static readonly "BATTERY_BUFFER_8": $MachineDefinition[]
static readonly "BENDER": $MachineDefinition[]
static readonly "BLOCK_BREAKER": $MachineDefinition[]
static readonly "BREWERY": $MachineDefinition[]
static "BRONZE_CRATE": $MachineDefinition
static "BRONZE_DRUM": $MachineDefinition
static readonly "BUFFER": $MachineDefinition[]
static readonly "CANNER": $MachineDefinition[]
static readonly "CENTRIFUGE": $MachineDefinition[]
static readonly "CHARGER_4": $MachineDefinition[]
static readonly "CHEMICAL_BATH": $MachineDefinition[]
static readonly "CHEMICAL_REACTOR": $MachineDefinition[]
static readonly "CIRCUIT_ASSEMBLER": $MachineDefinition[]
static readonly "CLEANING_MAINTENANCE_HATCH": $MachineDefinition
static readonly "COKE_OVEN_HATCH": $MachineDefinition
static readonly "COMBUSTION": $MachineDefinition[]
static readonly "COMPRESSOR": $MachineDefinition[]
static readonly "CONFIGURABLE_MAINTENANCE_HATCH": $MachineDefinition
static readonly "CREATIVE_COMPUTATION_PROVIDER": $MachineDefinition
static readonly "CREATIVE_ENERGY": $MachineDefinition
static readonly "CREATIVE_FLUID": $MachineDefinition
static readonly "CREATIVE_ITEM": $MachineDefinition
static readonly "CREATIVE_TOOLTIPS": $BiConsumer<$ItemStack, $List<$Component>>
static readonly "CUTTER": $MachineDefinition[]
static readonly "DIODE": $MachineDefinition[]
static readonly "DISTILLERY": $MachineDefinition[]
static readonly "DUAL_EXPORT_HATCH": $MachineDefinition[]
static readonly "DUAL_IMPORT_HATCH": $MachineDefinition[]
static readonly "ELECTRIC_FURNACE": $MachineDefinition[]
static readonly "ELECTROLYZER": $MachineDefinition[]
static readonly "ELECTROMAGNETIC_SEPARATOR": $MachineDefinition[]
static readonly "ENERGY_CONVERTER_16A": $MachineDefinition[]
static readonly "ENERGY_CONVERTER_1A": $MachineDefinition[]
static readonly "ENERGY_CONVERTER_4A": $MachineDefinition[]
static readonly "ENERGY_CONVERTER_8A": $MachineDefinition[]
static readonly "ENERGY_INPUT_HATCH": $MachineDefinition[]
static readonly "ENERGY_INPUT_HATCH_16A": $MachineDefinition[]
static readonly "ENERGY_INPUT_HATCH_4A": $MachineDefinition[]
static readonly "ENERGY_OUTPUT_HATCH": $MachineDefinition[]
static readonly "ENERGY_OUTPUT_HATCH_16A": $MachineDefinition[]
static readonly "ENERGY_OUTPUT_HATCH_4A": $MachineDefinition[]
static readonly "EXTRACTOR": $MachineDefinition[]
static readonly "EXTRUDER": $MachineDefinition[]
static readonly "FERMENTER": $MachineDefinition[]
static readonly "FISHER": $MachineDefinition[]
static readonly "FLUID_EXPORT_HATCH": $MachineDefinition[]
static readonly "FLUID_EXPORT_HATCH_4X": $MachineDefinition[]
static readonly "FLUID_EXPORT_HATCH_9X": $MachineDefinition[]
static readonly "FLUID_HEATER": $MachineDefinition[]
static readonly "FLUID_IMPORT_HATCH": $MachineDefinition[]
static readonly "FLUID_IMPORT_HATCH_4X": $MachineDefinition[]
static readonly "FLUID_IMPORT_HATCH_9X": $MachineDefinition[]
static readonly "FLUID_PASSTHROUGH_HATCH": $MachineDefinition[]
static readonly "FLUID_SOLIDIFIER": $MachineDefinition[]
static readonly "FORGE_HAMMER": $MachineDefinition[]
static readonly "FORMING_PRESS": $MachineDefinition[]
static readonly "GAS_COLLECTOR": $MachineDefinition[]
static readonly "GAS_TURBINE": $MachineDefinition[]
static "GOLD_DRUM": $MachineDefinition
static readonly "HI_AMP_TRANSFORMER_2A": $MachineDefinition[]
static readonly "HI_AMP_TRANSFORMER_4A": $MachineDefinition[]
static readonly "HULL": $MachineDefinition[]
static readonly "ITEM_COLLECTOR": $MachineDefinition[]
static readonly "ITEM_EXPORT_BUS": $MachineDefinition[]
static readonly "ITEM_IMPORT_BUS": $MachineDefinition[]
static readonly "ITEM_PASSTHROUGH_HATCH": $MachineDefinition[]
static readonly "LASER_ENGRAVER": $MachineDefinition[]
static readonly "LASER_INPUT_HATCH_1024": $MachineDefinition[]
static readonly "LASER_INPUT_HATCH_256": $MachineDefinition[]
static readonly "LASER_INPUT_HATCH_4096": $MachineDefinition[]
static readonly "LASER_OUTPUT_HATCH_1024": $MachineDefinition[]
static readonly "LASER_OUTPUT_HATCH_256": $MachineDefinition[]
static readonly "LASER_OUTPUT_HATCH_4096": $MachineDefinition[]
static readonly "LATHE": $MachineDefinition[]
static readonly "LONG_DIST_FLUID_ENDPOINT": $MachineDefinition
static readonly "LONG_DIST_ITEM_ENDPOINT": $MachineDefinition
static readonly "MACERATOR": $MachineDefinition[]
static readonly "MAINTENANCE_HATCH": $MachineDefinition
static readonly "MINER": $MachineDefinition[]
static readonly "MIXER": $MachineDefinition[]
static readonly "MONITOR": $MachineDefinition
static readonly "MUFFLER_HATCH": $MachineDefinition[]
static readonly "ORE_WASHER": $MachineDefinition[]
static readonly "PACKER": $MachineDefinition[]
static readonly "POLARIZER": $MachineDefinition[]
static readonly "POWER_TRANSFORMER": $MachineDefinition[]
static readonly "PUMP": $MachineDefinition[]
static readonly "PUMP_HATCH": $MachineDefinition
static readonly "QUANTUM_CHEST": $MachineDefinition[]
static readonly "QUANTUM_TANK": $MachineDefinition[]
static readonly "RESERVOIR_HATCH": $MachineDefinition
static readonly "ROCK_CRUSHER": $MachineDefinition[]
static readonly "ROTOR_HOLDER": $MachineDefinition[]
static readonly "SCANNER": $MachineDefinition[]
static readonly "SIFTER": $MachineDefinition[]
static "STAINLESS_STEEL_CRATE": $MachineDefinition
static "STAINLESS_STEEL_DRUM": $MachineDefinition
static readonly "STEAM_ALLOY_SMELTER": $Pair<$MachineDefinition, $MachineDefinition>
static readonly "STEAM_COMPRESSOR": $Pair<$MachineDefinition, $MachineDefinition>
static readonly "STEAM_EXPORT_BUS": $MachineDefinition
static readonly "STEAM_EXTRACTOR": $Pair<$MachineDefinition, $MachineDefinition>
static readonly "STEAM_FURNACE": $Pair<$MachineDefinition, $MachineDefinition>
static readonly "STEAM_HAMMER": $Pair<$MachineDefinition, $MachineDefinition>
static readonly "STEAM_HATCH": $MachineDefinition
static readonly "STEAM_IMPORT_BUS": $MachineDefinition
static readonly "STEAM_LIQUID_BOILER": $Pair<$MachineDefinition, $MachineDefinition>
static readonly "STEAM_MACERATOR": $Pair<$MachineDefinition, $MachineDefinition>
static readonly "STEAM_MINER": $Pair<$MachineDefinition, $MachineDefinition>
static readonly "STEAM_ROCK_CRUSHER": $Pair<$MachineDefinition, $MachineDefinition>
static readonly "STEAM_SOLAR_BOILER": $Pair<$MachineDefinition, $MachineDefinition>
static readonly "STEAM_SOLID_BOILER": $Pair<$MachineDefinition, $MachineDefinition>
static readonly "STEAM_TURBINE": $MachineDefinition[]
static "STEEL_CRATE": $MachineDefinition
static "STEEL_DRUM": $MachineDefinition
static readonly "SUBSTATION_ENERGY_INPUT_HATCH": $MachineDefinition[]
static readonly "SUBSTATION_ENERGY_OUTPUT_HATCH": $MachineDefinition[]
static readonly "SUPER_CHEST": $MachineDefinition[]
static readonly "SUPER_TANK": $MachineDefinition[]
static readonly "THERMAL_CENTRIFUGE": $MachineDefinition[]
static "TITANIUM_CRATE": $MachineDefinition
static "TITANIUM_DRUM": $MachineDefinition
static readonly "TRANSFORMER": $MachineDefinition[]
static "TUNGSTENSTEEL_CRATE": $MachineDefinition
static "TUNGSTENSTEEL_DRUM": $MachineDefinition
static readonly "WIREMILL": $MachineDefinition[]
static "WOODEN_CRATE": $MachineDefinition
static "WOODEN_DRUM": $MachineDefinition
static readonly "WORLD_ACCELERATOR": $MachineDefinition[]

constructor()

public static "get"(string0: string): $MachineDefinition
public static "init"(): void
}
}

declare module "com.gregtechceu.gtceu.common.pipelike.item.ItemRoutePathSet" {
import { $Enum } from "java.lang.Enum"

export class $ItemRoutePathSet extends $Enum<$ItemRoutePathSet> {
static readonly "FULL": $ItemRoutePathSet
static readonly "NONRESTRICTED": $ItemRoutePathSet
static readonly "RESTRICTED": $ItemRoutePathSet

public static "valueOf"(string0: string): $ItemRoutePathSet
public static "values"(): $ItemRoutePathSet[]
}
}

declare module "com.gregtechceu.gtceu.common.block.BatteryBlock" {
import { $ResourceLocation } from "net.minecraft.resources.ResourceLocation"
import { $LivingEntity$$Type } from "net.minecraft.world.entity.LivingEntity"
import { $Direction, $Direction$$Type } from "net.minecraft.core.Direction"
import { $EntityType$$Type } from "net.minecraft.world.entity.EntityType"
import { $Item$$Type } from "net.minecraft.world.item.Item"
import { $BlockState, $BlockState$$Type } from "net.minecraft.world.level.block.state.BlockState"
import { $SpawnPlacements$Type$$Type } from "net.minecraft.world.entity.SpawnPlacements$Type"
import { $BlockBehaviour$Properties$$Type } from "net.minecraft.world.level.block.state.BlockBehaviour$Properties"
import { $ServerLevel$$Type } from "net.minecraft.server.level.ServerLevel"
import { $BlockGetter$$Type } from "net.minecraft.world.level.BlockGetter"
import { $MapColor, $MapColor$$Type } from "net.minecraft.world.level.material.MapColor"
import { $PushReaction } from "net.minecraft.world.level.material.PushReaction"
import { $Rotation$$Type } from "net.minecraft.world.level.block.Rotation"
import { $Holder } from "net.minecraft.core.Holder"
import { $ToolAction$$Type } from "net.minecraftforge.common.ToolAction"
import { $IBatteryData, $IBatteryData$$Type } from "com.gregtechceu.gtceu.api.machine.multiblock.IBatteryData"
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

export class $BatteryBlock extends $Block {
constructor(properties0: $BlockBehaviour$Properties$$Type, iBatteryData1: $IBatteryData$$Type)

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
public "getData"(): $IBatteryData
public "getEnchantPowerBonus"(blockState0: $BlockState$$Type, levelReader1: $LevelReader$$Type, blockPos2: $BlockPos$$Type): float
public "getExpDrop"(blockState0: $BlockState$$Type, levelReader1: $LevelReader$$Type, randomSource2: $RandomSource$$Type, blockPos3: $BlockPos$$Type, int4: integer, int5: integer): integer
public "getExplosionResistance"(blockState0: $BlockState$$Type, blockGetter1: $BlockGetter$$Type, blockPos2: $BlockPos$$Type, explosion3: $Explosion$$Type): float
public "getFireSpreadSpeed"(blockState0: $BlockState$$Type, blockGetter1: $BlockGetter$$Type, blockPos2: $BlockPos$$Type, direction3: $Direction$$Type): integer
public "getFlammability"(blockState0: $BlockState$$Type, blockGetter1: $BlockGetter$$Type, blockPos2: $BlockPos$$Type, direction3: $Direction$$Type): integer
public "getFriction"(blockState0: $BlockState$$Type, levelReader1: $LevelReader$$Type, blockPos2: $BlockPos$$Type, entity3: $Entity$$Type): float
public "getLightEmission"(blockState0: $BlockState$$Type, blockGetter1: $BlockGetter$$Type, blockPos2: $BlockPos$$Type): integer
public "getMapColor"(blockState0: $BlockState$$Type, blockGetter1: $BlockGetter$$Type, blockPos2: $BlockPos$$Type, mapColor3: $MapColor$$Type): $MapColor
public "getMod"(): string
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
get "blockStates"(): $List<$BlockState>
get "data"(): $IBatteryData
get "mod"(): string
set "destroySpeed"(value: float)
set "lightEmission"(value: integer)
set "requiresTool"(value: boolean)
}
}

declare module "com.gregtechceu.gtceu.common.block.ItemPipeBlock" {
import { $ResourceLocation } from "net.minecraft.resources.ResourceLocation"
import { $LivingEntity$$Type } from "net.minecraft.world.entity.LivingEntity"
import { $Direction, $Direction$$Type } from "net.minecraft.core.Direction"
import { $Item$$Type } from "net.minecraft.world.item.Item"
import { $PipeBlockEntity } from "com.gregtechceu.gtceu.api.blockentity.PipeBlockEntity"
import { $SpawnPlacements$Type$$Type } from "net.minecraft.world.entity.SpawnPlacements$Type"
import { $BlockBehaviour$Properties$$Type } from "net.minecraft.world.level.block.state.BlockBehaviour$Properties"
import { $BlockGetter$$Type } from "net.minecraft.world.level.BlockGetter"
import { $MapColor, $MapColor$$Type } from "net.minecraft.world.level.material.MapColor"
import { $Rotation$$Type } from "net.minecraft.world.level.block.Rotation"
import { $Holder } from "net.minecraft.core.Holder"
import { $MaterialPipeBlock } from "com.gregtechceu.gtceu.api.block.MaterialPipeBlock"
import { $ItemPipeProperties } from "com.gregtechceu.gtceu.api.data.chemical.material.properties.ItemPipeProperties"
import { $ItemPipeType, $ItemPipeType$$Type } from "com.gregtechceu.gtceu.common.pipelike.item.ItemPipeType"
import { $BlockPathTypes, $BlockPathTypes$$Type } from "net.minecraft.world.level.pathfinder.BlockPathTypes"
import { $RandomSource$$Type } from "net.minecraft.util.RandomSource"
import { $LevelReader$$Type } from "net.minecraft.world.level.LevelReader"
import { $BlockEntity, $BlockEntity$$Type } from "net.minecraft.world.level.block.entity.BlockEntity"
import { $TreeConfiguration$$Type } from "net.minecraft.world.level.levelgen.feature.configurations.TreeConfiguration"
import { $SoundType } from "net.minecraft.world.level.block.SoundType"
import { $Player$$Type } from "net.minecraft.world.entity.player.Player"
import { $FeatureFlagSet$$Type } from "net.minecraft.world.flag.FeatureFlagSet"
import { $List } from "java.util.List"
import { $BlockPos$$Type } from "net.minecraft.core.BlockPos"
import { $BlockEntityType } from "net.minecraft.world.level.block.entity.BlockEntityType"
import { $SoundEvent } from "net.minecraft.sounds.SoundEvent"
import { $SignalGetter$$Type } from "net.minecraft.world.level.SignalGetter"
import { $FluidState$$Type } from "net.minecraft.world.level.material.FluidState"
import { $GameEventListener } from "net.minecraft.world.level.gameevent.GameEventListener"
import { $Optional } from "java.util.Optional"
import { $LevelAccessor$$Type } from "net.minecraft.world.level.LevelAccessor"
import { $ItemStack, $ItemStack$$Type } from "net.minecraft.world.item.ItemStack"
import { $Material$$Type } from "com.gregtechceu.gtceu.api.data.chemical.material.Material"
import { $Level$$Type } from "net.minecraft.world.level.Level"
import { $EntityType$$Type } from "net.minecraft.world.entity.EntityType"
import { $BlockState, $BlockState$$Type } from "net.minecraft.world.level.block.state.BlockState"
import { $ServerLevel$$Type } from "net.minecraft.server.level.ServerLevel"
import { $PushReaction } from "net.minecraft.world.level.material.PushReaction"
import { $LevelItemPipeNet } from "com.gregtechceu.gtceu.common.pipelike.item.LevelItemPipeNet"
import { $ToolAction$$Type } from "net.minecraftforge.common.ToolAction"
import { $BiConsumer$$Type } from "java.util.function.BiConsumer"
import { $Fluid$$Type } from "net.minecraft.world.level.material.Fluid"
import { $UseOnContext$$Type } from "net.minecraft.world.item.context.UseOnContext"
import { $BlockAndTintGetter$$Type } from "net.minecraft.world.level.BlockAndTintGetter"
import { $Explosion$$Type } from "net.minecraft.world.level.Explosion"
import { $HitResult$$Type } from "net.minecraft.world.phys.HitResult"
import { $Entity$$Type } from "net.minecraft.world.entity.Entity"
import { $Vec3, $Vec3$$Type } from "net.minecraft.world.phys.Vec3"
import { $Block, $Block$$Type } from "net.minecraft.world.level.block.Block"
import { $Mob$$Type } from "net.minecraft.world.entity.Mob"

export class $ItemPipeBlock extends $MaterialPipeBlock<$ItemPipeType, $ItemPipeProperties, $LevelItemPipeNet> {
constructor(properties0: $BlockBehaviour$Properties$$Type, itemPipeType1: $ItemPipeType$$Type, material2: $Material$$Type)

public "addLandingEffects"(blockState0: $BlockState$$Type, serverLevel1: $ServerLevel$$Type, blockPos2: $BlockPos$$Type, blockState3: $BlockState$$Type, livingEntity4: $LivingEntity$$Type, int5: integer): boolean
public "addRunningEffects"(blockState0: $BlockState$$Type, level1: $Level$$Type, blockPos2: $BlockPos$$Type, entity3: $Entity$$Type): boolean
public "arch$holder"(): $Holder<$Block>
public "arch$registryName"(): $ResourceLocation
public "canBeHydrated"(blockState0: $BlockState$$Type, blockGetter1: $BlockGetter$$Type, blockPos2: $BlockPos$$Type, fluidState3: $FluidState$$Type, blockPos4: $BlockPos$$Type): boolean
public "canConnectRedstone"(blockState0: $BlockState$$Type, blockGetter1: $BlockGetter$$Type, blockPos2: $BlockPos$$Type, direction3: $Direction$$Type): boolean
public "canDropFromExplosion"(blockState0: $BlockState$$Type, blockGetter1: $BlockGetter$$Type, blockPos2: $BlockPos$$Type, explosion3: $Explosion$$Type): boolean
public "canEntityDestroy"(blockState0: $BlockState$$Type, blockGetter1: $BlockGetter$$Type, blockPos2: $BlockPos$$Type, entity3: $Entity$$Type): boolean
public "canHarvestBlock"(blockState0: $BlockState$$Type, blockGetter1: $BlockGetter$$Type, blockPos2: $BlockPos$$Type, player3: $Player$$Type): boolean
public "canPlaceLiquid"(blockGetter0: $BlockGetter$$Type, blockPos1: $BlockPos$$Type, blockState2: $BlockState$$Type, fluid3: $Fluid$$Type): boolean
public "canStickTo"(blockState0: $BlockState$$Type, blockState1: $BlockState$$Type): boolean
public "collisionExtendsVertically"(blockState0: $BlockState$$Type, blockGetter1: $BlockGetter$$Type, blockPos2: $BlockPos$$Type, entity3: $Entity$$Type): boolean
public static "get"(item: $Item$$Type): $ResourceLocation
public static "get"(block: $Block$$Type): $ResourceLocation
public static "get"(state: $BlockState$$Type): $ResourceLocation
public static "get"(entity: $Entity$$Type): $ResourceLocation
public static "get"(stack: $ItemStack$$Type): $ResourceLocation
public static "get"(type: $EntityType$$Type<any>): $ResourceLocation
public "getAdjacentBlockPathType"(blockState0: $BlockState$$Type, blockGetter1: $BlockGetter$$Type, blockPos2: $BlockPos$$Type, mob3: $Mob$$Type, blockPathTypes4: $BlockPathTypes$$Type): $BlockPathTypes
public "getBeaconColorMultiplier"(blockState0: $BlockState$$Type, levelReader1: $LevelReader$$Type, blockPos2: $BlockPos$$Type, blockPos3: $BlockPos$$Type): float[]
public "getBedDirection"(blockState0: $BlockState$$Type, levelReader1: $LevelReader$$Type, blockPos2: $BlockPos$$Type): $Direction
public "getBlockEntityType"(): $BlockEntityType<$PipeBlockEntity<$ItemPipeType, $ItemPipeProperties>>
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
public "getListener"<T extends $BlockEntity>(serverLevel0: $ServerLevel$$Type, t1: T): $GameEventListener
public "getMapColor"(blockState0: $BlockState$$Type, blockGetter1: $BlockGetter$$Type, blockPos2: $BlockPos$$Type, mapColor3: $MapColor$$Type): $MapColor
public "getMod"(): string
public "getPickupSound"(): $Optional<$SoundEvent>
public "getPickupSound"(blockState0: $BlockState$$Type): $Optional<$SoundEvent>
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
public "onTreeGrow"(blockState0: $BlockState$$Type, levelReader1: $LevelReader$$Type, biConsumer2: $BiConsumer$$Type<$BlockPos$$Type, $BlockState$$Type>, randomSource3: $RandomSource$$Type, blockPos4: $BlockPos$$Type, treeConfiguration5: $TreeConfiguration$$Type): boolean
public "pickupBlock"(levelAccessor0: $LevelAccessor$$Type, blockPos1: $BlockPos$$Type, blockState2: $BlockState$$Type): $ItemStack
public "placeLiquid"(levelAccessor0: $LevelAccessor$$Type, blockPos1: $BlockPos$$Type, blockState2: $BlockState$$Type, fluidState3: $FluidState$$Type): boolean
public "rotate"(blockState0: $BlockState$$Type, levelAccessor1: $LevelAccessor$$Type, blockPos2: $BlockPos$$Type, rotation3: $Rotation$$Type): $BlockState
public "setBedOccupied"(blockState0: $BlockState$$Type, level1: $Level$$Type, blockPos2: $BlockPos$$Type, livingEntity3: $LivingEntity$$Type, boolean4: boolean): void
public "setDestroySpeed"(v: float): void
public "setLightEmission"(v: integer): void
public "setRequiresTool"(v: boolean): void
public "shouldCheckWeakPower"(blockState0: $BlockState$$Type, signalGetter1: $SignalGetter$$Type, blockPos2: $BlockPos$$Type, direction3: $Direction$$Type): boolean
public "shouldDisplayFluidOverlay"(blockState0: $BlockState$$Type, blockAndTintGetter1: $BlockAndTintGetter$$Type, blockPos2: $BlockPos$$Type, fluidState3: $FluidState$$Type): boolean
public "supportsExternalFaceHiding"(blockState0: $BlockState$$Type): boolean
get "blockEntityType"(): $BlockEntityType<$PipeBlockEntity<$ItemPipeType, $ItemPipeProperties>>
get "blockStates"(): $List<$BlockState>
get "mod"(): string
get "pickupSound"(): $Optional<$SoundEvent>
set "destroySpeed"(value: float)
set "lightEmission"(value: integer)
set "requiresTool"(value: boolean)
}
}

declare module "com.gregtechceu.gtceu.common.pipelike.fluidpipe.LevelFluidPipeNet" {
import { $FluidPipeProperties } from "com.gregtechceu.gtceu.api.data.chemical.material.properties.FluidPipeProperties"
import { $CompoundTag$$Type } from "net.minecraft.nbt.CompoundTag"
import { $FluidPipeNet } from "com.gregtechceu.gtceu.common.pipelike.fluidpipe.FluidPipeNet"
import { $ServerLevel$$Type } from "net.minecraft.server.level.ServerLevel"
import { $LevelPipeNet } from "com.gregtechceu.gtceu.api.pipenet.LevelPipeNet"

export class $LevelFluidPipeNet extends $LevelPipeNet<$FluidPipeProperties, $FluidPipeNet> {
constructor(serverLevel0: $ServerLevel$$Type)
constructor(serverLevel0: $ServerLevel$$Type, compoundTag1: $CompoundTag$$Type)

public static "getOrCreate"(serverLevel0: $ServerLevel$$Type): $LevelFluidPipeNet
}
}

declare module "com.gregtechceu.gtceu.common.pipelike.optical.OpticalPipeNet" {
import { $OpticalPipeProperties, $OpticalPipeProperties$$Type } from "com.gregtechceu.gtceu.common.pipelike.optical.OpticalPipeProperties"
import { $OpticalRoutePath } from "com.gregtechceu.gtceu.common.pipelike.optical.OpticalRoutePath"
import { $BlockPos$$Type } from "net.minecraft.core.BlockPos"
import { $Direction$$Type } from "net.minecraft.core.Direction"
import { $LevelPipeNet$$Type } from "com.gregtechceu.gtceu.api.pipenet.LevelPipeNet"
import { $PipeNet, $PipeNet$$Type } from "com.gregtechceu.gtceu.api.pipenet.PipeNet"

export class $OpticalPipeNet extends $PipeNet<$OpticalPipeProperties> {
constructor(levelPipeNet0: $LevelPipeNet$$Type<$OpticalPipeProperties$$Type, $PipeNet$$Type<$OpticalPipeProperties$$Type>>)

public "getNetData"(blockPos0: $BlockPos$$Type, direction1: $Direction$$Type): $OpticalRoutePath
}
}

declare module "com.gregtechceu.gtceu.common.pipelike.duct.DuctPipeType" {
import { $ResourceLocation } from "net.minecraft.resources.ResourceLocation"
import { $Enum, $Enum$$Type } from "java.lang.Enum"
import { $StringRepresentable, $StringRepresentable$$Type } from "net.minecraft.util.StringRepresentable"
import { $StringRepresentable$EnumCodec } from "net.minecraft.util.StringRepresentable$EnumCodec"
import { $Keyable } from "com.mojang.serialization.Keyable"
import { $DuctPipeProperties, $DuctPipeProperties$$Type } from "com.gregtechceu.gtceu.common.pipelike.duct.DuctPipeProperties"
import { $Supplier$$Type } from "java.util.function.Supplier"
import { $Function$$Type } from "java.util.function.Function"
import { $IPipeType } from "com.gregtechceu.gtceu.api.pipenet.IPipeType"

export class $DuctPipeType extends $Enum<$DuctPipeType> implements $IPipeType<$DuctPipeProperties>, $StringRepresentable {
static readonly "HUGE": $DuctPipeType
static readonly "LARGE": $DuctPipeType
static readonly "NORMAL": $DuctPipeType
static readonly "SMALL": $DuctPipeType
static readonly "TYPE_ID": $ResourceLocation
static readonly "VALUES": $DuctPipeType[]
readonly "name": string

public static "fromEnum"<E extends ($Enum<E> & $StringRepresentable)>(supplier0: $Supplier$$Type<E[]>): $StringRepresentable$EnumCodec<E>
public static "fromEnumWithMapping"<E extends ($Enum<E> & $StringRepresentable)>(supplier0: $Supplier$$Type<E[]>, function1: $Function$$Type<string, string>): $StringRepresentable$EnumCodec<E>
public "getName"(): string
public "getRateMultiplier"(): float
public "getSerializedName"(): string
public "getThickness"(): float
public "isPaintable"(): boolean
public static "keys"(stringRepresentable0s: $StringRepresentable$$Type[]): $Keyable
public "modifyProperties"(ductPipeProperties0: $DuctPipeProperties$$Type): $DuctPipeProperties
public "type"(): $ResourceLocation
public static "valueOf"(string0: string): $DuctPipeType
public static "values"(): $DuctPipeType[]
get "rateMultiplier"(): float
get "serializedName"(): string
get "thickness"(): float
get "paintable"(): boolean
}
}

declare module "com.gregtechceu.gtceu.common.pipelike.fluidpipe.FluidPipeType" {
import { $ResourceLocation } from "net.minecraft.resources.ResourceLocation"
import { $FluidPipeProperties, $FluidPipeProperties$$Type } from "com.gregtechceu.gtceu.api.data.chemical.material.properties.FluidPipeProperties"
import { $TagPrefix } from "com.gregtechceu.gtceu.api.data.tag.TagPrefix"
import { $Enum } from "java.lang.Enum"
import { $PipeModel } from "com.gregtechceu.gtceu.client.model.pipe.PipeModel"
import { $IMaterialPipeType } from "com.gregtechceu.gtceu.api.pipenet.IMaterialPipeType"
import { $Material$$Type } from "com.gregtechceu.gtceu.api.data.chemical.material.Material"
import { $GTBlockstateProvider$$Type } from "com.gregtechceu.gtceu.api.registry.registrate.provider.GTBlockstateProvider"
import { $PipeBlock$$Type } from "com.gregtechceu.gtceu.api.block.PipeBlock"

export class $FluidPipeType extends $Enum<$FluidPipeType> implements $IMaterialPipeType<$FluidPipeProperties> {
static readonly "HUGE": $FluidPipeType
static readonly "LARGE": $FluidPipeType
static readonly "NONUPLE": $FluidPipeType
static readonly "NORMAL": $FluidPipeType
static readonly "QUADRUPLE": $FluidPipeType
static readonly "SMALL": $FluidPipeType
static readonly "TINY": $FluidPipeType
static readonly "TYPE_ID": $ResourceLocation
readonly "capacityMultiplier": integer
readonly "channels": integer
readonly "name": string
readonly "tagPrefix": $TagPrefix
readonly "thickness": float

public "createPipeModel"(pipeBlock0: $PipeBlock$$Type<any, any, any>, material1: $Material$$Type, gTBlockstateProvider2: $GTBlockstateProvider$$Type): $PipeModel
public "getTagPrefix"(): $TagPrefix
public "getThickness"(): float
public "isPaintable"(): boolean
public "modifyProperties"(fluidPipeProperties0: $FluidPipeProperties$$Type): $FluidPipeProperties
public "type"(): $ResourceLocation
public static "valueOf"(string0: string): $FluidPipeType
public static "values"(): $FluidPipeType[]
get "paintable"(): boolean
}
}

declare module "com.gregtechceu.gtceu.common.block.explosive.GTExplosiveBlock" {
import { $ResourceLocation } from "net.minecraft.resources.ResourceLocation"
import { $LivingEntity$$Type } from "net.minecraft.world.entity.LivingEntity"
import { $Direction, $Direction$$Type } from "net.minecraft.core.Direction"
import { $EntityType$$Type } from "net.minecraft.world.entity.EntityType"
import { $Item$$Type } from "net.minecraft.world.item.Item"
import { $BlockState, $BlockState$$Type } from "net.minecraft.world.level.block.state.BlockState"
import { $SpawnPlacements$Type$$Type } from "net.minecraft.world.entity.SpawnPlacements$Type"
import { $BlockBehaviour$Properties$$Type } from "net.minecraft.world.level.block.state.BlockBehaviour$Properties"
import { $ServerLevel$$Type } from "net.minecraft.server.level.ServerLevel"
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

export class $GTExplosiveBlock extends $Block {
constructor(properties0: $BlockBehaviour$Properties$$Type, boolean1: boolean, boolean2: boolean, int3: integer)

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
public "explode"(level0: $Level$$Type, blockPos1: $BlockPos$$Type, livingEntity2: $LivingEntity$$Type): void
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
get "blockStates"(): $List<$BlockState>
get "mod"(): string
set "destroySpeed"(value: float)
set "lightEmission"(value: integer)
set "requiresTool"(value: boolean)
}
}

declare module "com.gregtechceu.gtceu.common.cover.data.ManualIOMode" {
import { $Enum } from "java.lang.Enum"
import { $IGuiTexture } from "com.lowdragmc.lowdraglib.gui.texture.IGuiTexture"
import { $EnumSelectorWidget$SelectableEnum } from "com.gregtechceu.gtceu.api.gui.widget.EnumSelectorWidget$SelectableEnum"

export class $ManualIOMode extends $Enum<$ManualIOMode> implements $EnumSelectorWidget$SelectableEnum {
static readonly "DISABLED": $ManualIOMode
static readonly "FILTERED": $ManualIOMode
static readonly "UNFILTERED": $ManualIOMode
static readonly "VALUES": $ManualIOMode[]
readonly "localeName": string

public "getIcon"(): $IGuiTexture
public "getTooltip"(): string
public static "valueOf"(string0: string): $ManualIOMode
public static "values"(): $ManualIOMode[]
get "icon"(): $IGuiTexture
get "tooltip"(): string
}
}

declare module "com.gregtechceu.gtceu.common.pipelike.optical.OpticalRoutePath" {
import { $OpticalPipeBlockEntity, $OpticalPipeBlockEntity$$Type } from "com.gregtechceu.gtceu.common.blockentity.OpticalPipeBlockEntity"
import { $IOpticalComputationProvider } from "com.gregtechceu.gtceu.api.capability.IOpticalComputationProvider"
import { $IRoutePath } from "com.gregtechceu.gtceu.api.pipenet.IRoutePath"
import { $IOpticalDataAccessHatch } from "com.gregtechceu.gtceu.api.capability.IOpticalDataAccessHatch"
import { $BlockPos } from "net.minecraft.core.BlockPos"
import { $Direction, $Direction$$Type } from "net.minecraft.core.Direction"
import { $BlockEntity } from "net.minecraft.world.level.block.entity.BlockEntity"
import { $Level$$Type } from "net.minecraft.world.level.Level"
import { $Capability$$Type } from "net.minecraftforge.common.capabilities.Capability"

export class $OpticalRoutePath implements $IRoutePath<$IOpticalComputationProvider> {
constructor(opticalPipeBlockEntity0: $OpticalPipeBlockEntity$$Type, direction1: $Direction$$Type, int2: integer)

public "getComputationHatch"(): $IOpticalComputationProvider
public "getDataHatch"(): $IOpticalDataAccessHatch
public "getDistance"(): integer
public "getTargetBlockEntity"(level0: $Level$$Type): $BlockEntity
public "getTargetCapability"<I>(capability0: $Capability$$Type<I>, level1: $Level$$Type): I
public "getTargetFacing"(): $Direction
public "getTargetPipe"(): $OpticalPipeBlockEntity
public "getTargetPipePos"(): $BlockPos
get "computationHatch"(): $IOpticalComputationProvider
get "dataHatch"(): $IOpticalDataAccessHatch
get "distance"(): integer
get "targetFacing"(): $Direction
get "targetPipe"(): $OpticalPipeBlockEntity
get "targetPipePos"(): $BlockPos
}
}

declare module "com.gregtechceu.gtceu.common.machine.multiblock.part.DiodePartMachine$AmpMode" {
import { $Enum, $Enum$$Type } from "java.lang.Enum"
import { $StringRepresentable, $StringRepresentable$$Type } from "net.minecraft.util.StringRepresentable"
import { $StringRepresentable$EnumCodec } from "net.minecraft.util.StringRepresentable$EnumCodec"
import { $Keyable } from "com.mojang.serialization.Keyable"
import { $Supplier$$Type } from "java.util.function.Supplier"
import { $Function$$Type } from "java.util.function.Function"

export class $DiodePartMachine$AmpMode extends $Enum<$DiodePartMachine$AmpMode> implements $StringRepresentable {
static readonly "MODE_16A": $DiodePartMachine$AmpMode
static readonly "MODE_1A": $DiodePartMachine$AmpMode
static readonly "MODE_2A": $DiodePartMachine$AmpMode
static readonly "MODE_4A": $DiodePartMachine$AmpMode
static readonly "MODE_8A": $DiodePartMachine$AmpMode
static readonly "VALUES": $DiodePartMachine$AmpMode[]

public "cycle"(): $DiodePartMachine$AmpMode
public static "fromEnum"<E extends ($Enum<E> & $StringRepresentable)>(supplier0: $Supplier$$Type<E[]>): $StringRepresentable$EnumCodec<E>
public static "fromEnumWithMapping"<E extends ($Enum<E> & $StringRepresentable)>(supplier0: $Supplier$$Type<E[]>, function1: $Function$$Type<string, string>): $StringRepresentable$EnumCodec<E>
public "getAmpValue"(): integer
public static "getByValue"(int0: integer): $DiodePartMachine$AmpMode
public "getSerializedName"(): string
public static "keys"(stringRepresentable0s: $StringRepresentable$$Type[]): $Keyable
public static "valueOf"(string0: string): $DiodePartMachine$AmpMode
public static "values"(): $DiodePartMachine$AmpMode[]
get "ampValue"(): integer
get "serializedName"(): string
}
}

declare module "com.gregtechceu.gtceu.common.data.machines.GCYMMachines" {
import { $MachineDefinition } from "com.gregtechceu.gtceu.api.machine.MachineDefinition"
import { $MultiblockMachineDefinition } from "com.gregtechceu.gtceu.api.machine.MultiblockMachineDefinition"

export class $GCYMMachines {
static readonly "BLAST_ALLOY_SMELTER": $MultiblockMachineDefinition
static readonly "LARGE_ARC_SMELTER": $MultiblockMachineDefinition
static readonly "LARGE_ASSEMBLER": $MultiblockMachineDefinition
static readonly "LARGE_AUTOCLAVE": $MultiblockMachineDefinition
static readonly "LARGE_BREWER": $MultiblockMachineDefinition
static readonly "LARGE_CENTRIFUGE": $MultiblockMachineDefinition
static readonly "LARGE_CHEMICAL_BATH": $MultiblockMachineDefinition
static readonly "LARGE_CIRCUIT_ASSEMBLER": $MultiblockMachineDefinition
static readonly "LARGE_CUTTER": $MultiblockMachineDefinition
static readonly "LARGE_DISTILLERY": $MultiblockMachineDefinition
static readonly "LARGE_ELECTROLYZER": $MultiblockMachineDefinition
static readonly "LARGE_ELECTROMAGNET": $MultiblockMachineDefinition
static readonly "LARGE_ENGRAVING_LASER": $MultiblockMachineDefinition
static readonly "LARGE_EXTRACTOR": $MultiblockMachineDefinition
static readonly "LARGE_EXTRUDER": $MultiblockMachineDefinition
static readonly "LARGE_MACERATION_TOWER": $MultiblockMachineDefinition
static readonly "LARGE_MATERIAL_PRESS": $MultiblockMachineDefinition
static readonly "LARGE_MIXER": $MultiblockMachineDefinition
static readonly "LARGE_PACKER": $MultiblockMachineDefinition
static readonly "LARGE_SIFTING_FUNNEL": $MultiblockMachineDefinition
static readonly "LARGE_SOLIDIFIER": $MultiblockMachineDefinition
static readonly "LARGE_WIREMILL": $MultiblockMachineDefinition
static readonly "MEGA_BLAST_FURNACE": $MultiblockMachineDefinition
static readonly "MEGA_VACUUM_FREEZER": $MultiblockMachineDefinition
static readonly "PARALLEL_HATCH": $MachineDefinition[]

constructor()

public static "init"(): void
}
}

declare module "com.gregtechceu.gtceu.common.cover.ConveyorCover" {
import { $IFieldUpdateListener$$Type } from "com.lowdragmc.lowdraglib.syncdata.IFieldUpdateListener"
import { $Direction$$Type } from "net.minecraft.core.Direction"
import { $IControllable } from "com.gregtechceu.gtceu.api.capability.IControllable"
import { $ICoverable$$Type } from "com.gregtechceu.gtceu.api.capability.ICoverable"
import { $CoverBehavior } from "com.gregtechceu.gtceu.api.cover.CoverBehavior"
import { $DistributionMode, $DistributionMode$$Type } from "com.gregtechceu.gtceu.common.cover.data.DistributionMode"
import { $IO, $IO$$Type } from "com.gregtechceu.gtceu.api.capability.recipe.IO"
import { $ServerPlayer$$Type } from "net.minecraft.server.level.ServerPlayer"
import { $Int2IntFunction } from "it.unimi.dsi.fastutil.ints.Int2IntFunction"
import { $ItemFilter } from "com.gregtechceu.gtceu.api.cover.filter.ItemFilter"
import { $ModularUI } from "com.lowdragmc.lowdraglib.gui.modular.ModularUI"
import { $IRef$$Type } from "com.lowdragmc.lowdraglib.syncdata.managed.IRef"
import { $IUICover } from "com.gregtechceu.gtceu.api.cover.IUICover"
import { $FilterHandler } from "com.gregtechceu.gtceu.api.cover.filter.FilterHandler"
import { $Widget } from "com.lowdragmc.lowdraglib.gui.widget.Widget"
import { $CoverDefinition$$Type } from "com.gregtechceu.gtceu.api.cover.CoverDefinition"
import { $Player$$Type } from "net.minecraft.world.entity.player.Player"
import { $List } from "java.util.List"
import { $CompoundTag, $CompoundTag$$Type } from "net.minecraft.nbt.CompoundTag"
import { $ManualIOMode } from "com.gregtechceu.gtceu.common.cover.data.ManualIOMode"
import { $ItemStack } from "net.minecraft.world.item.ItemStack"
import { $ManagedFieldHolder } from "com.lowdragmc.lowdraglib.syncdata.field.ManagedFieldHolder"
import { $ISubscription } from "com.lowdragmc.lowdraglib.syncdata.ISubscription"
import { $IIOCover } from "com.gregtechceu.gtceu.api.cover.IIOCover"

export class $ConveyorCover extends $CoverBehavior implements $IIOCover, $IUICover, $IControllable {
static readonly "CONVEYOR_SCALING": $Int2IntFunction
static readonly "MANAGED_FIELD_HOLDER": $ManagedFieldHolder
readonly "maxItemTransferRate": integer
readonly "tier": integer

constructor(coverDefinition0: $CoverDefinition$$Type, iCoverable1: $ICoverable$$Type, direction2: $Direction$$Type, int3: integer)
constructor(coverDefinition0: $CoverDefinition$$Type, iCoverable1: $ICoverable$$Type, direction2: $Direction$$Type, int3: integer, int4: integer)

public "addSyncUpdateListener"<T>(name: string, listener: $IFieldUpdateListener$$Type<T>): $ISubscription
public "copyConfig"(compoundTag0: $CompoundTag$$Type): $CompoundTag
public "createUI"(player0: $Player$$Type): $ModularUI
public "createUIWidget"(): $Widget
public "getDistributionMode"(): $DistributionMode
public "getFilterHandler"(): $FilterHandler<$ItemStack, $ItemFilter>
public "getIo"(): $IO
public "getItemsRequiredToPaste"(): $List<$ItemStack>
public "getManualIOMode"(): $ManualIOMode
public "getTransferRate"(): integer
public "isInvalid"(): boolean
public "isRemote"(): boolean
public "isSuspendAfterFinish"(): boolean
public "isWorkingEnabled"(): boolean
public "markAsDirty"(): void
public "markDirty"(name: string): void
public "onPersistedChanged"(ref: $IRef$$Type, isDirty: boolean): void
public "onSyncChanged"(ref: $IRef$$Type, isDirty: boolean): void
public "onUIClosed"(): void
public "pasteConfig"(serverPlayer0: $ServerPlayer$$Type, compoundTag1: $CompoundTag$$Type): void
public "scheduleRender"(fieldName: string, newValue: any, oldValue: any): void
public "self"(): $CoverBehavior
public "setDistributionMode"(distributionMode0: $DistributionMode$$Type): void
public "setIo"(iO0: $IO$$Type): void
public "setSuspendAfterFinish"(boolean0: boolean): void
public "setTransferRate"(int0: integer): void
public "setWorkingEnabled"(boolean0: boolean): void
public "shouldRespectDistributionMode"(): boolean
get "distributionMode"(): $DistributionMode
get "filterHandler"(): $FilterHandler<$ItemStack, $ItemFilter>
get "io"(): $IO
get "itemsRequiredToPaste"(): $List<$ItemStack>
get "manualIOMode"(): $ManualIOMode
get "transferRate"(): integer
get "invalid"(): boolean
get "remote"(): boolean
get "suspendAfterFinish"(): boolean
get "workingEnabled"(): boolean
set "distributionMode"(value: $DistributionMode$$Type)
set "io"(value: $IO$$Type)
set "suspendAfterFinish"(value: boolean)
set "transferRate"(value: integer)
set "workingEnabled"(value: boolean)
}
}

declare module "com.gregtechceu.gtceu.common.block.DuctPipeBlock" {
import { $ResourceLocation } from "net.minecraft.resources.ResourceLocation"
import { $LivingEntity$$Type } from "net.minecraft.world.entity.LivingEntity"
import { $Direction, $Direction$$Type } from "net.minecraft.core.Direction"
import { $Item$$Type } from "net.minecraft.world.item.Item"
import { $PipeBlockEntity } from "com.gregtechceu.gtceu.api.blockentity.PipeBlockEntity"
import { $SpawnPlacements$Type$$Type } from "net.minecraft.world.entity.SpawnPlacements$Type"
import { $BlockBehaviour$Properties$$Type } from "net.minecraft.world.level.block.state.BlockBehaviour$Properties"
import { $BlockGetter$$Type } from "net.minecraft.world.level.BlockGetter"
import { $MapColor, $MapColor$$Type } from "net.minecraft.world.level.material.MapColor"
import { $Rotation$$Type } from "net.minecraft.world.level.block.Rotation"
import { $Holder } from "net.minecraft.core.Holder"
import { $BlockPathTypes, $BlockPathTypes$$Type } from "net.minecraft.world.level.pathfinder.BlockPathTypes"
import { $RandomSource$$Type } from "net.minecraft.util.RandomSource"
import { $LevelReader$$Type } from "net.minecraft.world.level.LevelReader"
import { $BlockEntity, $BlockEntity$$Type } from "net.minecraft.world.level.block.entity.BlockEntity"
import { $TreeConfiguration$$Type } from "net.minecraft.world.level.levelgen.feature.configurations.TreeConfiguration"
import { $SoundType } from "net.minecraft.world.level.block.SoundType"
import { $Player$$Type } from "net.minecraft.world.entity.player.Player"
import { $FeatureFlagSet$$Type } from "net.minecraft.world.flag.FeatureFlagSet"
import { $List } from "java.util.List"
import { $BlockPos$$Type } from "net.minecraft.core.BlockPos"
import { $BlockEntityType } from "net.minecraft.world.level.block.entity.BlockEntityType"
import { $SoundEvent } from "net.minecraft.sounds.SoundEvent"
import { $SignalGetter$$Type } from "net.minecraft.world.level.SignalGetter"
import { $FluidState$$Type } from "net.minecraft.world.level.material.FluidState"
import { $GameEventListener } from "net.minecraft.world.level.gameevent.GameEventListener"
import { $Optional } from "java.util.Optional"
import { $LevelAccessor$$Type } from "net.minecraft.world.level.LevelAccessor"
import { $ItemStack, $ItemStack$$Type } from "net.minecraft.world.item.ItemStack"
import { $Level$$Type } from "net.minecraft.world.level.Level"
import { $EntityType$$Type } from "net.minecraft.world.entity.EntityType"
import { $BlockState, $BlockState$$Type } from "net.minecraft.world.level.block.state.BlockState"
import { $DuctPipeProperties, $DuctPipeProperties$$Type } from "com.gregtechceu.gtceu.common.pipelike.duct.DuctPipeProperties"
import { $ServerLevel$$Type } from "net.minecraft.server.level.ServerLevel"
import { $PushReaction } from "net.minecraft.world.level.material.PushReaction"
import { $ToolAction$$Type } from "net.minecraftforge.common.ToolAction"
import { $BiConsumer$$Type } from "java.util.function.BiConsumer"
import { $Fluid$$Type } from "net.minecraft.world.level.material.Fluid"
import { $UseOnContext$$Type } from "net.minecraft.world.item.context.UseOnContext"
import { $PipeBlock } from "com.gregtechceu.gtceu.api.block.PipeBlock"
import { $BlockAndTintGetter$$Type } from "net.minecraft.world.level.BlockAndTintGetter"
import { $Explosion$$Type } from "net.minecraft.world.level.Explosion"
import { $IPipeNode$$Type } from "com.gregtechceu.gtceu.api.pipenet.IPipeNode"
import { $HitResult$$Type } from "net.minecraft.world.phys.HitResult"
import { $LevelDuctPipeNet } from "com.gregtechceu.gtceu.common.pipelike.duct.LevelDuctPipeNet"
import { $DuctPipeType, $DuctPipeType$$Type } from "com.gregtechceu.gtceu.common.pipelike.duct.DuctPipeType"
import { $Entity$$Type } from "net.minecraft.world.entity.Entity"
import { $Vec3, $Vec3$$Type } from "net.minecraft.world.phys.Vec3"
import { $Block, $Block$$Type } from "net.minecraft.world.level.block.Block"
import { $Mob$$Type } from "net.minecraft.world.entity.Mob"

export class $DuctPipeBlock extends $PipeBlock<$DuctPipeType, $DuctPipeProperties, $LevelDuctPipeNet> {
constructor(properties0: $BlockBehaviour$Properties$$Type, ductPipeType1: $DuctPipeType$$Type)

public "addLandingEffects"(blockState0: $BlockState$$Type, serverLevel1: $ServerLevel$$Type, blockPos2: $BlockPos$$Type, blockState3: $BlockState$$Type, livingEntity4: $LivingEntity$$Type, int5: integer): boolean
public "addRunningEffects"(blockState0: $BlockState$$Type, level1: $Level$$Type, blockPos2: $BlockPos$$Type, entity3: $Entity$$Type): boolean
public "arch$holder"(): $Holder<$Block>
public "arch$registryName"(): $ResourceLocation
public "canBeHydrated"(blockState0: $BlockState$$Type, blockGetter1: $BlockGetter$$Type, blockPos2: $BlockPos$$Type, fluidState3: $FluidState$$Type, blockPos4: $BlockPos$$Type): boolean
public "canConnectRedstone"(blockState0: $BlockState$$Type, blockGetter1: $BlockGetter$$Type, blockPos2: $BlockPos$$Type, direction3: $Direction$$Type): boolean
public "canDropFromExplosion"(blockState0: $BlockState$$Type, blockGetter1: $BlockGetter$$Type, blockPos2: $BlockPos$$Type, explosion3: $Explosion$$Type): boolean
public "canEntityDestroy"(blockState0: $BlockState$$Type, blockGetter1: $BlockGetter$$Type, blockPos2: $BlockPos$$Type, entity3: $Entity$$Type): boolean
public "canHarvestBlock"(blockState0: $BlockState$$Type, blockGetter1: $BlockGetter$$Type, blockPos2: $BlockPos$$Type, player3: $Player$$Type): boolean
public "canPlaceLiquid"(blockGetter0: $BlockGetter$$Type, blockPos1: $BlockPos$$Type, blockState2: $BlockState$$Type, fluid3: $Fluid$$Type): boolean
public "canStickTo"(blockState0: $BlockState$$Type, blockState1: $BlockState$$Type): boolean
public "collisionExtendsVertically"(blockState0: $BlockState$$Type, blockGetter1: $BlockGetter$$Type, blockPos2: $BlockPos$$Type, entity3: $Entity$$Type): boolean
public "createProperties"(iPipeNode0: $IPipeNode$$Type<$DuctPipeType$$Type, $DuctPipeProperties$$Type>): $DuctPipeProperties
public "createRawData"(blockState0: $BlockState$$Type, itemStack1: $ItemStack$$Type): $DuctPipeProperties
public static "get"(item: $Item$$Type): $ResourceLocation
public static "get"(block: $Block$$Type): $ResourceLocation
public static "get"(state: $BlockState$$Type): $ResourceLocation
public static "get"(entity: $Entity$$Type): $ResourceLocation
public static "get"(stack: $ItemStack$$Type): $ResourceLocation
public static "get"(type: $EntityType$$Type<any>): $ResourceLocation
public "getAdjacentBlockPathType"(blockState0: $BlockState$$Type, blockGetter1: $BlockGetter$$Type, blockPos2: $BlockPos$$Type, mob3: $Mob$$Type, blockPathTypes4: $BlockPathTypes$$Type): $BlockPathTypes
public "getBeaconColorMultiplier"(blockState0: $BlockState$$Type, levelReader1: $LevelReader$$Type, blockPos2: $BlockPos$$Type, blockPos3: $BlockPos$$Type): float[]
public "getBedDirection"(blockState0: $BlockState$$Type, levelReader1: $LevelReader$$Type, blockPos2: $BlockPos$$Type): $Direction
public "getBlockEntityType"(): $BlockEntityType<$PipeBlockEntity<$DuctPipeType, $DuctPipeProperties>>
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
public "getListener"<T extends $BlockEntity>(serverLevel0: $ServerLevel$$Type, t1: T): $GameEventListener
public "getMapColor"(blockState0: $BlockState$$Type, blockGetter1: $BlockGetter$$Type, blockPos2: $BlockPos$$Type, mapColor3: $MapColor$$Type): $MapColor
public "getMod"(): string
public "getPickupSound"(): $Optional<$SoundEvent>
public "getPickupSound"(blockState0: $BlockState$$Type): $Optional<$SoundEvent>
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
public "onTreeGrow"(blockState0: $BlockState$$Type, levelReader1: $LevelReader$$Type, biConsumer2: $BiConsumer$$Type<$BlockPos$$Type, $BlockState$$Type>, randomSource3: $RandomSource$$Type, blockPos4: $BlockPos$$Type, treeConfiguration5: $TreeConfiguration$$Type): boolean
public "pickupBlock"(levelAccessor0: $LevelAccessor$$Type, blockPos1: $BlockPos$$Type, blockState2: $BlockState$$Type): $ItemStack
public "placeLiquid"(levelAccessor0: $LevelAccessor$$Type, blockPos1: $BlockPos$$Type, blockState2: $BlockState$$Type, fluidState3: $FluidState$$Type): boolean
public "rotate"(blockState0: $BlockState$$Type, levelAccessor1: $LevelAccessor$$Type, blockPos2: $BlockPos$$Type, rotation3: $Rotation$$Type): $BlockState
public "setBedOccupied"(blockState0: $BlockState$$Type, level1: $Level$$Type, blockPos2: $BlockPos$$Type, livingEntity3: $LivingEntity$$Type, boolean4: boolean): void
public "setDestroySpeed"(v: float): void
public "setLightEmission"(v: integer): void
public "setRequiresTool"(v: boolean): void
public "shouldCheckWeakPower"(blockState0: $BlockState$$Type, signalGetter1: $SignalGetter$$Type, blockPos2: $BlockPos$$Type, direction3: $Direction$$Type): boolean
public "shouldDisplayFluidOverlay"(blockState0: $BlockState$$Type, blockAndTintGetter1: $BlockAndTintGetter$$Type, blockPos2: $BlockPos$$Type, fluidState3: $FluidState$$Type): boolean
public "supportsExternalFaceHiding"(blockState0: $BlockState$$Type): boolean
get "blockEntityType"(): $BlockEntityType<$PipeBlockEntity<$DuctPipeType, $DuctPipeProperties>>
get "blockStates"(): $List<$BlockState>
get "mod"(): string
get "pickupSound"(): $Optional<$SoundEvent>
set "destroySpeed"(value: float)
set "lightEmission"(value: integer)
set "requiresTool"(value: boolean)
}
}

declare module "com.gregtechceu.gtceu.common.block.LaserPipeBlock" {
import { $ResourceLocation } from "net.minecraft.resources.ResourceLocation"
import { $LaserPipeProperties, $LaserPipeProperties$$Type } from "com.gregtechceu.gtceu.common.pipelike.laser.LaserPipeProperties"
import { $LivingEntity$$Type } from "net.minecraft.world.entity.LivingEntity"
import { $Direction, $Direction$$Type } from "net.minecraft.core.Direction"
import { $Item$$Type } from "net.minecraft.world.item.Item"
import { $PipeBlockEntity } from "com.gregtechceu.gtceu.api.blockentity.PipeBlockEntity"
import { $SpawnPlacements$Type$$Type } from "net.minecraft.world.entity.SpawnPlacements$Type"
import { $BlockBehaviour$Properties$$Type } from "net.minecraft.world.level.block.state.BlockBehaviour$Properties"
import { $BlockGetter$$Type } from "net.minecraft.world.level.BlockGetter"
import { $MapColor, $MapColor$$Type } from "net.minecraft.world.level.material.MapColor"
import { $Rotation$$Type } from "net.minecraft.world.level.block.Rotation"
import { $Holder } from "net.minecraft.core.Holder"
import { $BlockColor } from "net.minecraft.client.color.block.BlockColor"
import { $BlockPathTypes, $BlockPathTypes$$Type } from "net.minecraft.world.level.pathfinder.BlockPathTypes"
import { $RandomSource$$Type } from "net.minecraft.util.RandomSource"
import { $LevelReader$$Type } from "net.minecraft.world.level.LevelReader"
import { $BlockEntity, $BlockEntity$$Type } from "net.minecraft.world.level.block.entity.BlockEntity"
import { $TreeConfiguration$$Type } from "net.minecraft.world.level.levelgen.feature.configurations.TreeConfiguration"
import { $SoundType } from "net.minecraft.world.level.block.SoundType"
import { $Player$$Type } from "net.minecraft.world.entity.player.Player"
import { $FeatureFlagSet$$Type } from "net.minecraft.world.flag.FeatureFlagSet"
import { $List } from "java.util.List"
import { $BlockPos$$Type } from "net.minecraft.core.BlockPos"
import { $BlockEntityType } from "net.minecraft.world.level.block.entity.BlockEntityType"
import { $SoundEvent } from "net.minecraft.sounds.SoundEvent"
import { $SignalGetter$$Type } from "net.minecraft.world.level.SignalGetter"
import { $FluidState$$Type } from "net.minecraft.world.level.material.FluidState"
import { $GameEventListener } from "net.minecraft.world.level.gameevent.GameEventListener"
import { $Optional } from "java.util.Optional"
import { $LevelAccessor$$Type } from "net.minecraft.world.level.LevelAccessor"
import { $ItemStack, $ItemStack$$Type } from "net.minecraft.world.item.ItemStack"
import { $Level$$Type } from "net.minecraft.world.level.Level"
import { $LevelLaserPipeNet } from "com.gregtechceu.gtceu.common.pipelike.laser.LevelLaserPipeNet"
import { $EntityType$$Type } from "net.minecraft.world.entity.EntityType"
import { $BlockState, $BlockState$$Type } from "net.minecraft.world.level.block.state.BlockState"
import { $ServerLevel$$Type } from "net.minecraft.server.level.ServerLevel"
import { $PushReaction } from "net.minecraft.world.level.material.PushReaction"
import { $ToolAction$$Type } from "net.minecraftforge.common.ToolAction"
import { $BiConsumer$$Type } from "java.util.function.BiConsumer"
import { $Fluid$$Type } from "net.minecraft.world.level.material.Fluid"
import { $UseOnContext$$Type } from "net.minecraft.world.item.context.UseOnContext"
import { $PipeBlock } from "com.gregtechceu.gtceu.api.block.PipeBlock"
import { $BlockAndTintGetter$$Type } from "net.minecraft.world.level.BlockAndTintGetter"
import { $Explosion$$Type } from "net.minecraft.world.level.Explosion"
import { $IPipeNode$$Type } from "com.gregtechceu.gtceu.api.pipenet.IPipeNode"
import { $HitResult$$Type } from "net.minecraft.world.phys.HitResult"
import { $LaserPipeType, $LaserPipeType$$Type } from "com.gregtechceu.gtceu.common.pipelike.laser.LaserPipeType"
import { $Entity$$Type } from "net.minecraft.world.entity.Entity"
import { $Vec3, $Vec3$$Type } from "net.minecraft.world.phys.Vec3"
import { $Block, $Block$$Type } from "net.minecraft.world.level.block.Block"
import { $Mob$$Type } from "net.minecraft.world.entity.Mob"

export class $LaserPipeBlock extends $PipeBlock<$LaserPipeType, $LaserPipeProperties, $LevelLaserPipeNet> {
constructor(properties0: $BlockBehaviour$Properties$$Type, laserPipeType1: $LaserPipeType$$Type)

public "addLandingEffects"(blockState0: $BlockState$$Type, serverLevel1: $ServerLevel$$Type, blockPos2: $BlockPos$$Type, blockState3: $BlockState$$Type, livingEntity4: $LivingEntity$$Type, int5: integer): boolean
public "addRunningEffects"(blockState0: $BlockState$$Type, level1: $Level$$Type, blockPos2: $BlockPos$$Type, entity3: $Entity$$Type): boolean
public "arch$holder"(): $Holder<$Block>
public "arch$registryName"(): $ResourceLocation
public "canBeHydrated"(blockState0: $BlockState$$Type, blockGetter1: $BlockGetter$$Type, blockPos2: $BlockPos$$Type, fluidState3: $FluidState$$Type, blockPos4: $BlockPos$$Type): boolean
public "canConnectRedstone"(blockState0: $BlockState$$Type, blockGetter1: $BlockGetter$$Type, blockPos2: $BlockPos$$Type, direction3: $Direction$$Type): boolean
public "canDropFromExplosion"(blockState0: $BlockState$$Type, blockGetter1: $BlockGetter$$Type, blockPos2: $BlockPos$$Type, explosion3: $Explosion$$Type): boolean
public "canEntityDestroy"(blockState0: $BlockState$$Type, blockGetter1: $BlockGetter$$Type, blockPos2: $BlockPos$$Type, entity3: $Entity$$Type): boolean
public "canHarvestBlock"(blockState0: $BlockState$$Type, blockGetter1: $BlockGetter$$Type, blockPos2: $BlockPos$$Type, player3: $Player$$Type): boolean
public "canPlaceLiquid"(blockGetter0: $BlockGetter$$Type, blockPos1: $BlockPos$$Type, blockState2: $BlockState$$Type, fluid3: $Fluid$$Type): boolean
public "canStickTo"(blockState0: $BlockState$$Type, blockState1: $BlockState$$Type): boolean
public "collisionExtendsVertically"(blockState0: $BlockState$$Type, blockGetter1: $BlockGetter$$Type, blockPos2: $BlockPos$$Type, entity3: $Entity$$Type): boolean
public "createProperties"(iPipeNode0: $IPipeNode$$Type<$LaserPipeType$$Type, $LaserPipeProperties$$Type>): $LaserPipeProperties
public "createRawData"(blockState0: $BlockState$$Type, itemStack1: $ItemStack$$Type): $LaserPipeProperties
public static "get"(item: $Item$$Type): $ResourceLocation
public static "get"(block: $Block$$Type): $ResourceLocation
public static "get"(state: $BlockState$$Type): $ResourceLocation
public static "get"(entity: $Entity$$Type): $ResourceLocation
public static "get"(stack: $ItemStack$$Type): $ResourceLocation
public static "get"(type: $EntityType$$Type<any>): $ResourceLocation
public "getAdjacentBlockPathType"(blockState0: $BlockState$$Type, blockGetter1: $BlockGetter$$Type, blockPos2: $BlockPos$$Type, mob3: $Mob$$Type, blockPathTypes4: $BlockPathTypes$$Type): $BlockPathTypes
public "getBeaconColorMultiplier"(blockState0: $BlockState$$Type, levelReader1: $LevelReader$$Type, blockPos2: $BlockPos$$Type, blockPos3: $BlockPos$$Type): float[]
public "getBedDirection"(blockState0: $BlockState$$Type, levelReader1: $LevelReader$$Type, blockPos2: $BlockPos$$Type): $Direction
public "getBlockEntityType"(): $BlockEntityType<$PipeBlockEntity<$LaserPipeType, $LaserPipeProperties>>
public "getBlockPathType"(blockState0: $BlockState$$Type, blockGetter1: $BlockGetter$$Type, blockPos2: $BlockPos$$Type, mob3: $Mob$$Type): $BlockPathTypes
public "getBlockStates"(): $List<$BlockState>
public "getCloneItemStack"(blockState0: $BlockState$$Type, hitResult1: $HitResult$$Type, blockGetter2: $BlockGetter$$Type, blockPos3: $BlockPos$$Type, player4: $Player$$Type): $ItemStack
public "getEnchantPowerBonus"(blockState0: $BlockState$$Type, levelReader1: $LevelReader$$Type, blockPos2: $BlockPos$$Type): float
public "getExpDrop"(blockState0: $BlockState$$Type, levelReader1: $LevelReader$$Type, randomSource2: $RandomSource$$Type, blockPos3: $BlockPos$$Type, int4: integer, int5: integer): integer
public "getExplosionResistance"(blockState0: $BlockState$$Type, blockGetter1: $BlockGetter$$Type, blockPos2: $BlockPos$$Type, explosion3: $Explosion$$Type): float
public "getFallbackType"(): $LaserPipeProperties
public "getFireSpreadSpeed"(blockState0: $BlockState$$Type, blockGetter1: $BlockGetter$$Type, blockPos2: $BlockPos$$Type, direction3: $Direction$$Type): integer
public "getFlammability"(blockState0: $BlockState$$Type, blockGetter1: $BlockGetter$$Type, blockPos2: $BlockPos$$Type, direction3: $Direction$$Type): integer
public "getFriction"(blockState0: $BlockState$$Type, levelReader1: $LevelReader$$Type, blockPos2: $BlockPos$$Type, entity3: $Entity$$Type): float
public "getLightEmission"(blockState0: $BlockState$$Type, blockGetter1: $BlockGetter$$Type, blockPos2: $BlockPos$$Type): integer
public "getListener"<T extends $BlockEntity>(serverLevel0: $ServerLevel$$Type, t1: T): $GameEventListener
public "getMapColor"(blockState0: $BlockState$$Type, blockGetter1: $BlockGetter$$Type, blockPos2: $BlockPos$$Type, mapColor3: $MapColor$$Type): $MapColor
public "getMod"(): string
public "getPickupSound"(): $Optional<$SoundEvent>
public "getPickupSound"(blockState0: $BlockState$$Type): $Optional<$SoundEvent>
public "getPistonPushReaction"(blockState0: $BlockState$$Type): $PushReaction
public "getRespawnPosition"(blockState0: $BlockState$$Type, entityType1: $EntityType$$Type<any>, levelReader2: $LevelReader$$Type, blockPos3: $BlockPos$$Type, float4: float, livingEntity5: $LivingEntity$$Type): $Optional<$Vec3>
public "getSoundType"(blockState0: $BlockState$$Type, levelReader1: $LevelReader$$Type, blockPos2: $BlockPos$$Type, entity3: $Entity$$Type): $SoundType
public "getStateAtViewpoint"(blockState0: $BlockState$$Type, blockGetter1: $BlockGetter$$Type, blockPos2: $BlockPos$$Type, vec33: $Vec3$$Type): $BlockState
public "getToolModifiedState"(blockState0: $BlockState$$Type, useOnContext1: $UseOnContext$$Type, toolAction2: $ToolAction$$Type, boolean3: boolean): $BlockState
public "getWeakChanges"(blockState0: $BlockState$$Type, levelReader1: $LevelReader$$Type, blockPos2: $BlockPos$$Type): boolean
public "getWorldPipeNet"(serverLevel0: $ServerLevel$$Type): $LevelLaserPipeNet
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
public "onTreeGrow"(blockState0: $BlockState$$Type, levelReader1: $LevelReader$$Type, biConsumer2: $BiConsumer$$Type<$BlockPos$$Type, $BlockState$$Type>, randomSource3: $RandomSource$$Type, blockPos4: $BlockPos$$Type, treeConfiguration5: $TreeConfiguration$$Type): boolean
public "pickupBlock"(levelAccessor0: $LevelAccessor$$Type, blockPos1: $BlockPos$$Type, blockState2: $BlockState$$Type): $ItemStack
public "placeLiquid"(levelAccessor0: $LevelAccessor$$Type, blockPos1: $BlockPos$$Type, blockState2: $BlockState$$Type, fluidState3: $FluidState$$Type): boolean
public "rotate"(blockState0: $BlockState$$Type, levelAccessor1: $LevelAccessor$$Type, blockPos2: $BlockPos$$Type, rotation3: $Rotation$$Type): $BlockState
public "setBedOccupied"(blockState0: $BlockState$$Type, level1: $Level$$Type, blockPos2: $BlockPos$$Type, livingEntity3: $LivingEntity$$Type, boolean4: boolean): void
public "setDestroySpeed"(v: float): void
public "setLightEmission"(v: integer): void
public "setRequiresTool"(v: boolean): void
public "shouldCheckWeakPower"(blockState0: $BlockState$$Type, signalGetter1: $SignalGetter$$Type, blockPos2: $BlockPos$$Type, direction3: $Direction$$Type): boolean
public "shouldDisplayFluidOverlay"(blockState0: $BlockState$$Type, blockAndTintGetter1: $BlockAndTintGetter$$Type, blockPos2: $BlockPos$$Type, fluidState3: $FluidState$$Type): boolean
public "supportsExternalFaceHiding"(blockState0: $BlockState$$Type): boolean
/** Client only, do not use in server scripts */
public static "tintedColor"(): $BlockColor
get "blockEntityType"(): $BlockEntityType<$PipeBlockEntity<$LaserPipeType, $LaserPipeProperties>>
get "blockStates"(): $List<$BlockState>
get "fallbackType"(): $LaserPipeProperties
get "mod"(): string
get "pickupSound"(): $Optional<$SoundEvent>
set "destroySpeed"(value: float)
set "lightEmission"(value: integer)
set "requiresTool"(value: boolean)
}
}

declare module "com.gregtechceu.gtceu.common.block.GTWallHangingSignBlock" {
import { $ResourceLocation } from "net.minecraft.resources.ResourceLocation"
import { $BlockEntityTicker } from "net.minecraft.world.level.block.entity.BlockEntityTicker"
import { $LivingEntity$$Type } from "net.minecraft.world.entity.LivingEntity"
import { $Direction, $Direction$$Type } from "net.minecraft.core.Direction"
import { $EntityType$$Type } from "net.minecraft.world.entity.EntityType"
import { $Item$$Type } from "net.minecraft.world.item.Item"
import { $BlockState, $BlockState$$Type } from "net.minecraft.world.level.block.state.BlockState"
import { $SpawnPlacements$Type$$Type } from "net.minecraft.world.entity.SpawnPlacements$Type"
import { $BlockBehaviour$Properties$$Type } from "net.minecraft.world.level.block.state.BlockBehaviour$Properties"
import { $ServerLevel$$Type } from "net.minecraft.server.level.ServerLevel"
import { $BlockGetter$$Type } from "net.minecraft.world.level.BlockGetter"
import { $MapColor, $MapColor$$Type } from "net.minecraft.world.level.material.MapColor"
import { $PushReaction } from "net.minecraft.world.level.material.PushReaction"
import { $Rotation$$Type } from "net.minecraft.world.level.block.Rotation"
import { $Holder } from "net.minecraft.core.Holder"
import { $ToolAction$$Type } from "net.minecraftforge.common.ToolAction"
import { $BiConsumer$$Type } from "java.util.function.BiConsumer"
import { $Fluid$$Type } from "net.minecraft.world.level.material.Fluid"
import { $UseOnContext$$Type } from "net.minecraft.world.item.context.UseOnContext"
import { $BlockAndTintGetter$$Type } from "net.minecraft.world.level.BlockAndTintGetter"
import { $BlockPathTypes, $BlockPathTypes$$Type } from "net.minecraft.world.level.pathfinder.BlockPathTypes"
import { $RandomSource$$Type } from "net.minecraft.util.RandomSource"
import { $LevelReader$$Type } from "net.minecraft.world.level.LevelReader"
import { $BlockEntity, $BlockEntity$$Type } from "net.minecraft.world.level.block.entity.BlockEntity"
import { $TreeConfiguration$$Type } from "net.minecraft.world.level.levelgen.feature.configurations.TreeConfiguration"
import { $Explosion$$Type } from "net.minecraft.world.level.Explosion"
import { $SoundType } from "net.minecraft.world.level.block.SoundType"
import { $Player$$Type } from "net.minecraft.world.entity.player.Player"
import { $HitResult$$Type } from "net.minecraft.world.phys.HitResult"
import { $FeatureFlagSet$$Type } from "net.minecraft.world.flag.FeatureFlagSet"
import { $List } from "java.util.List"
import { $Entity$$Type } from "net.minecraft.world.entity.Entity"
import { $BlockPos$$Type } from "net.minecraft.core.BlockPos"
import { $SoundEvent } from "net.minecraft.sounds.SoundEvent"
import { $Vec3, $Vec3$$Type } from "net.minecraft.world.phys.Vec3"
import { $BlockEntityType$$Type } from "net.minecraft.world.level.block.entity.BlockEntityType"
import { $SignalGetter$$Type } from "net.minecraft.world.level.SignalGetter"
import { $WallHangingSignBlock } from "net.minecraft.world.level.block.WallHangingSignBlock"
import { $FluidState$$Type } from "net.minecraft.world.level.material.FluidState"
import { $GameEventListener } from "net.minecraft.world.level.gameevent.GameEventListener"
import { $Optional } from "java.util.Optional"
import { $LevelAccessor$$Type } from "net.minecraft.world.level.LevelAccessor"
import { $WoodType$$Type } from "net.minecraft.world.level.block.state.properties.WoodType"
import { $Block, $Block$$Type } from "net.minecraft.world.level.block.Block"
import { $ItemStack, $ItemStack$$Type } from "net.minecraft.world.item.ItemStack"
import { $Level$$Type } from "net.minecraft.world.level.Level"
import { $Mob$$Type } from "net.minecraft.world.entity.Mob"

export class $GTWallHangingSignBlock extends $WallHangingSignBlock {
constructor(properties0: $BlockBehaviour$Properties$$Type, woodType1: $WoodType$$Type)

public "addLandingEffects"(blockState0: $BlockState$$Type, serverLevel1: $ServerLevel$$Type, blockPos2: $BlockPos$$Type, blockState3: $BlockState$$Type, livingEntity4: $LivingEntity$$Type, int5: integer): boolean
public "addRunningEffects"(blockState0: $BlockState$$Type, level1: $Level$$Type, blockPos2: $BlockPos$$Type, entity3: $Entity$$Type): boolean
public "arch$holder"(): $Holder<$Block>
public "arch$registryName"(): $ResourceLocation
public "canBeHydrated"(blockState0: $BlockState$$Type, blockGetter1: $BlockGetter$$Type, blockPos2: $BlockPos$$Type, fluidState3: $FluidState$$Type, blockPos4: $BlockPos$$Type): boolean
public "canConnectRedstone"(blockState0: $BlockState$$Type, blockGetter1: $BlockGetter$$Type, blockPos2: $BlockPos$$Type, direction3: $Direction$$Type): boolean
public "canDropFromExplosion"(blockState0: $BlockState$$Type, blockGetter1: $BlockGetter$$Type, blockPos2: $BlockPos$$Type, explosion3: $Explosion$$Type): boolean
public "canEntityDestroy"(blockState0: $BlockState$$Type, blockGetter1: $BlockGetter$$Type, blockPos2: $BlockPos$$Type, entity3: $Entity$$Type): boolean
public "canHarvestBlock"(blockState0: $BlockState$$Type, blockGetter1: $BlockGetter$$Type, blockPos2: $BlockPos$$Type, player3: $Player$$Type): boolean
public "canPlaceLiquid"(blockGetter0: $BlockGetter$$Type, blockPos1: $BlockPos$$Type, blockState2: $BlockState$$Type, fluid3: $Fluid$$Type): boolean
public "canStickTo"(blockState0: $BlockState$$Type, blockState1: $BlockState$$Type): boolean
public "collisionExtendsVertically"(blockState0: $BlockState$$Type, blockGetter1: $BlockGetter$$Type, blockPos2: $BlockPos$$Type, entity3: $Entity$$Type): boolean
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
public "getListener"<T extends $BlockEntity>(serverLevel0: $ServerLevel$$Type, t1: T): $GameEventListener
public "getMapColor"(blockState0: $BlockState$$Type, blockGetter1: $BlockGetter$$Type, blockPos2: $BlockPos$$Type, mapColor3: $MapColor$$Type): $MapColor
public "getMod"(): string
public "getPickupSound"(): $Optional<$SoundEvent>
public "getPickupSound"(blockState0: $BlockState$$Type): $Optional<$SoundEvent>
public "getPistonPushReaction"(blockState0: $BlockState$$Type): $PushReaction
public "getRespawnPosition"(blockState0: $BlockState$$Type, entityType1: $EntityType$$Type<any>, levelReader2: $LevelReader$$Type, blockPos3: $BlockPos$$Type, float4: float, livingEntity5: $LivingEntity$$Type): $Optional<$Vec3>
public "getSoundType"(blockState0: $BlockState$$Type, levelReader1: $LevelReader$$Type, blockPos2: $BlockPos$$Type, entity3: $Entity$$Type): $SoundType
public "getStateAtViewpoint"(blockState0: $BlockState$$Type, blockGetter1: $BlockGetter$$Type, blockPos2: $BlockPos$$Type, vec33: $Vec3$$Type): $BlockState
public "getTicker"<T extends $BlockEntity>(level0: $Level$$Type, blockState1: $BlockState$$Type, blockEntityType2: $BlockEntityType$$Type<T>): $BlockEntityTicker<T>
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
public "pickupBlock"(levelAccessor0: $LevelAccessor$$Type, blockPos1: $BlockPos$$Type, blockState2: $BlockState$$Type): $ItemStack
public "placeLiquid"(levelAccessor0: $LevelAccessor$$Type, blockPos1: $BlockPos$$Type, blockState2: $BlockState$$Type, fluidState3: $FluidState$$Type): boolean
public "rotate"(blockState0: $BlockState$$Type, levelAccessor1: $LevelAccessor$$Type, blockPos2: $BlockPos$$Type, rotation3: $Rotation$$Type): $BlockState
public "setBedOccupied"(blockState0: $BlockState$$Type, level1: $Level$$Type, blockPos2: $BlockPos$$Type, livingEntity3: $LivingEntity$$Type, boolean4: boolean): void
public "setDestroySpeed"(v: float): void
public "setLightEmission"(v: integer): void
public "setRequiresTool"(v: boolean): void
public "shouldCheckWeakPower"(blockState0: $BlockState$$Type, signalGetter1: $SignalGetter$$Type, blockPos2: $BlockPos$$Type, direction3: $Direction$$Type): boolean
public "shouldDisplayFluidOverlay"(blockState0: $BlockState$$Type, blockAndTintGetter1: $BlockAndTintGetter$$Type, blockPos2: $BlockPos$$Type, fluidState3: $FluidState$$Type): boolean
public "supportsExternalFaceHiding"(blockState0: $BlockState$$Type): boolean
get "blockStates"(): $List<$BlockState>
get "mod"(): string
get "pickupSound"(): $Optional<$SoundEvent>
set "destroySpeed"(value: float)
set "lightEmission"(value: integer)
set "requiresTool"(value: boolean)
}
}

declare module "com.gregtechceu.gtceu.common.machine.owner.RegisterOwnerTypeEvent" {
import { $IModBusEvent } from "net.minecraftforge.fml.event.IModBusEvent"
import { $MachineOwner } from "com.gregtechceu.gtceu.common.machine.owner.MachineOwner"
import { $Event } from "net.minecraftforge.eventbus.api.Event"
import { $UUID$$Type } from "java.util.UUID"
import { $Function$$Type } from "java.util.function.Function"

export class $RegisterOwnerTypeEvent extends $Event implements $IModBusEvent {
constructor()

public "register"(int0: integer, function1: $Function$$Type<$UUID$$Type, $MachineOwner>): void
}
}

declare module "com.gregtechceu.gtceu.common.block.OpticalPipeBlock" {
import { $ResourceLocation } from "net.minecraft.resources.ResourceLocation"
import { $LivingEntity$$Type } from "net.minecraft.world.entity.LivingEntity"
import { $Direction, $Direction$$Type } from "net.minecraft.core.Direction"
import { $Item$$Type } from "net.minecraft.world.item.Item"
import { $PipeBlockEntity } from "com.gregtechceu.gtceu.api.blockentity.PipeBlockEntity"
import { $SpawnPlacements$Type$$Type } from "net.minecraft.world.entity.SpawnPlacements$Type"
import { $BlockBehaviour$Properties$$Type } from "net.minecraft.world.level.block.state.BlockBehaviour$Properties"
import { $BlockGetter$$Type } from "net.minecraft.world.level.BlockGetter"
import { $MapColor, $MapColor$$Type } from "net.minecraft.world.level.material.MapColor"
import { $Rotation$$Type } from "net.minecraft.world.level.block.Rotation"
import { $Holder } from "net.minecraft.core.Holder"
import { $OpticalPipeType, $OpticalPipeType$$Type } from "com.gregtechceu.gtceu.common.pipelike.optical.OpticalPipeType"
import { $BlockColor } from "net.minecraft.client.color.block.BlockColor"
import { $OpticalPipeProperties, $OpticalPipeProperties$$Type } from "com.gregtechceu.gtceu.common.pipelike.optical.OpticalPipeProperties"
import { $BlockPathTypes, $BlockPathTypes$$Type } from "net.minecraft.world.level.pathfinder.BlockPathTypes"
import { $RandomSource$$Type } from "net.minecraft.util.RandomSource"
import { $LevelReader$$Type } from "net.minecraft.world.level.LevelReader"
import { $BlockEntity, $BlockEntity$$Type } from "net.minecraft.world.level.block.entity.BlockEntity"
import { $TreeConfiguration$$Type } from "net.minecraft.world.level.levelgen.feature.configurations.TreeConfiguration"
import { $SoundType } from "net.minecraft.world.level.block.SoundType"
import { $Player$$Type } from "net.minecraft.world.entity.player.Player"
import { $FeatureFlagSet$$Type } from "net.minecraft.world.flag.FeatureFlagSet"
import { $List } from "java.util.List"
import { $BlockPos$$Type } from "net.minecraft.core.BlockPos"
import { $BlockEntityType } from "net.minecraft.world.level.block.entity.BlockEntityType"
import { $SoundEvent } from "net.minecraft.sounds.SoundEvent"
import { $SignalGetter$$Type } from "net.minecraft.world.level.SignalGetter"
import { $FluidState$$Type } from "net.minecraft.world.level.material.FluidState"
import { $GameEventListener } from "net.minecraft.world.level.gameevent.GameEventListener"
import { $Optional } from "java.util.Optional"
import { $LevelAccessor$$Type } from "net.minecraft.world.level.LevelAccessor"
import { $ItemStack, $ItemStack$$Type } from "net.minecraft.world.item.ItemStack"
import { $Level$$Type } from "net.minecraft.world.level.Level"
import { $EntityType$$Type } from "net.minecraft.world.entity.EntityType"
import { $BlockState, $BlockState$$Type } from "net.minecraft.world.level.block.state.BlockState"
import { $ServerLevel$$Type } from "net.minecraft.server.level.ServerLevel"
import { $PushReaction } from "net.minecraft.world.level.material.PushReaction"
import { $ToolAction$$Type } from "net.minecraftforge.common.ToolAction"
import { $LevelOpticalPipeNet } from "com.gregtechceu.gtceu.common.pipelike.optical.LevelOpticalPipeNet"
import { $BiConsumer$$Type } from "java.util.function.BiConsumer"
import { $Fluid$$Type } from "net.minecraft.world.level.material.Fluid"
import { $UseOnContext$$Type } from "net.minecraft.world.item.context.UseOnContext"
import { $PipeBlock } from "com.gregtechceu.gtceu.api.block.PipeBlock"
import { $BlockAndTintGetter$$Type } from "net.minecraft.world.level.BlockAndTintGetter"
import { $Explosion$$Type } from "net.minecraft.world.level.Explosion"
import { $IPipeNode$$Type } from "com.gregtechceu.gtceu.api.pipenet.IPipeNode"
import { $HitResult$$Type } from "net.minecraft.world.phys.HitResult"
import { $Entity$$Type } from "net.minecraft.world.entity.Entity"
import { $Vec3, $Vec3$$Type } from "net.minecraft.world.phys.Vec3"
import { $Block, $Block$$Type } from "net.minecraft.world.level.block.Block"
import { $Mob$$Type } from "net.minecraft.world.entity.Mob"

export class $OpticalPipeBlock extends $PipeBlock<$OpticalPipeType, $OpticalPipeProperties, $LevelOpticalPipeNet> {
constructor(properties0: $BlockBehaviour$Properties$$Type, opticalPipeType1: $OpticalPipeType$$Type)

public "addLandingEffects"(blockState0: $BlockState$$Type, serverLevel1: $ServerLevel$$Type, blockPos2: $BlockPos$$Type, blockState3: $BlockState$$Type, livingEntity4: $LivingEntity$$Type, int5: integer): boolean
public "addRunningEffects"(blockState0: $BlockState$$Type, level1: $Level$$Type, blockPos2: $BlockPos$$Type, entity3: $Entity$$Type): boolean
public "arch$holder"(): $Holder<$Block>
public "arch$registryName"(): $ResourceLocation
public "canBeHydrated"(blockState0: $BlockState$$Type, blockGetter1: $BlockGetter$$Type, blockPos2: $BlockPos$$Type, fluidState3: $FluidState$$Type, blockPos4: $BlockPos$$Type): boolean
public "canConnectRedstone"(blockState0: $BlockState$$Type, blockGetter1: $BlockGetter$$Type, blockPos2: $BlockPos$$Type, direction3: $Direction$$Type): boolean
public "canDropFromExplosion"(blockState0: $BlockState$$Type, blockGetter1: $BlockGetter$$Type, blockPos2: $BlockPos$$Type, explosion3: $Explosion$$Type): boolean
public "canEntityDestroy"(blockState0: $BlockState$$Type, blockGetter1: $BlockGetter$$Type, blockPos2: $BlockPos$$Type, entity3: $Entity$$Type): boolean
public "canHarvestBlock"(blockState0: $BlockState$$Type, blockGetter1: $BlockGetter$$Type, blockPos2: $BlockPos$$Type, player3: $Player$$Type): boolean
public "canPlaceLiquid"(blockGetter0: $BlockGetter$$Type, blockPos1: $BlockPos$$Type, blockState2: $BlockState$$Type, fluid3: $Fluid$$Type): boolean
public "canStickTo"(blockState0: $BlockState$$Type, blockState1: $BlockState$$Type): boolean
public "collisionExtendsVertically"(blockState0: $BlockState$$Type, blockGetter1: $BlockGetter$$Type, blockPos2: $BlockPos$$Type, entity3: $Entity$$Type): boolean
public "createProperties"(iPipeNode0: $IPipeNode$$Type<$OpticalPipeType$$Type, $OpticalPipeProperties$$Type>): $OpticalPipeProperties
public "createRawData"(blockState0: $BlockState$$Type, itemStack1: $ItemStack$$Type): $OpticalPipeProperties
public static "get"(item: $Item$$Type): $ResourceLocation
public static "get"(block: $Block$$Type): $ResourceLocation
public static "get"(state: $BlockState$$Type): $ResourceLocation
public static "get"(entity: $Entity$$Type): $ResourceLocation
public static "get"(stack: $ItemStack$$Type): $ResourceLocation
public static "get"(type: $EntityType$$Type<any>): $ResourceLocation
public "getAdjacentBlockPathType"(blockState0: $BlockState$$Type, blockGetter1: $BlockGetter$$Type, blockPos2: $BlockPos$$Type, mob3: $Mob$$Type, blockPathTypes4: $BlockPathTypes$$Type): $BlockPathTypes
public "getBeaconColorMultiplier"(blockState0: $BlockState$$Type, levelReader1: $LevelReader$$Type, blockPos2: $BlockPos$$Type, blockPos3: $BlockPos$$Type): float[]
public "getBedDirection"(blockState0: $BlockState$$Type, levelReader1: $LevelReader$$Type, blockPos2: $BlockPos$$Type): $Direction
public "getBlockEntityType"(): $BlockEntityType<$PipeBlockEntity<$OpticalPipeType, $OpticalPipeProperties>>
public "getBlockPathType"(blockState0: $BlockState$$Type, blockGetter1: $BlockGetter$$Type, blockPos2: $BlockPos$$Type, mob3: $Mob$$Type): $BlockPathTypes
public "getBlockStates"(): $List<$BlockState>
public "getCloneItemStack"(blockState0: $BlockState$$Type, hitResult1: $HitResult$$Type, blockGetter2: $BlockGetter$$Type, blockPos3: $BlockPos$$Type, player4: $Player$$Type): $ItemStack
public "getEnchantPowerBonus"(blockState0: $BlockState$$Type, levelReader1: $LevelReader$$Type, blockPos2: $BlockPos$$Type): float
public "getExpDrop"(blockState0: $BlockState$$Type, levelReader1: $LevelReader$$Type, randomSource2: $RandomSource$$Type, blockPos3: $BlockPos$$Type, int4: integer, int5: integer): integer
public "getExplosionResistance"(blockState0: $BlockState$$Type, blockGetter1: $BlockGetter$$Type, blockPos2: $BlockPos$$Type, explosion3: $Explosion$$Type): float
public "getFallbackType"(): $OpticalPipeProperties
public "getFireSpreadSpeed"(blockState0: $BlockState$$Type, blockGetter1: $BlockGetter$$Type, blockPos2: $BlockPos$$Type, direction3: $Direction$$Type): integer
public "getFlammability"(blockState0: $BlockState$$Type, blockGetter1: $BlockGetter$$Type, blockPos2: $BlockPos$$Type, direction3: $Direction$$Type): integer
public "getFriction"(blockState0: $BlockState$$Type, levelReader1: $LevelReader$$Type, blockPos2: $BlockPos$$Type, entity3: $Entity$$Type): float
public "getLightEmission"(blockState0: $BlockState$$Type, blockGetter1: $BlockGetter$$Type, blockPos2: $BlockPos$$Type): integer
public "getListener"<T extends $BlockEntity>(serverLevel0: $ServerLevel$$Type, t1: T): $GameEventListener
public "getMapColor"(blockState0: $BlockState$$Type, blockGetter1: $BlockGetter$$Type, blockPos2: $BlockPos$$Type, mapColor3: $MapColor$$Type): $MapColor
public "getMod"(): string
public "getPickupSound"(): $Optional<$SoundEvent>
public "getPickupSound"(blockState0: $BlockState$$Type): $Optional<$SoundEvent>
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
public "onTreeGrow"(blockState0: $BlockState$$Type, levelReader1: $LevelReader$$Type, biConsumer2: $BiConsumer$$Type<$BlockPos$$Type, $BlockState$$Type>, randomSource3: $RandomSource$$Type, blockPos4: $BlockPos$$Type, treeConfiguration5: $TreeConfiguration$$Type): boolean
public "pickupBlock"(levelAccessor0: $LevelAccessor$$Type, blockPos1: $BlockPos$$Type, blockState2: $BlockState$$Type): $ItemStack
public "placeLiquid"(levelAccessor0: $LevelAccessor$$Type, blockPos1: $BlockPos$$Type, blockState2: $BlockState$$Type, fluidState3: $FluidState$$Type): boolean
public "rotate"(blockState0: $BlockState$$Type, levelAccessor1: $LevelAccessor$$Type, blockPos2: $BlockPos$$Type, rotation3: $Rotation$$Type): $BlockState
public "setBedOccupied"(blockState0: $BlockState$$Type, level1: $Level$$Type, blockPos2: $BlockPos$$Type, livingEntity3: $LivingEntity$$Type, boolean4: boolean): void
public "setDestroySpeed"(v: float): void
public "setLightEmission"(v: integer): void
public "setRequiresTool"(v: boolean): void
public "shouldCheckWeakPower"(blockState0: $BlockState$$Type, signalGetter1: $SignalGetter$$Type, blockPos2: $BlockPos$$Type, direction3: $Direction$$Type): boolean
public "shouldDisplayFluidOverlay"(blockState0: $BlockState$$Type, blockAndTintGetter1: $BlockAndTintGetter$$Type, blockPos2: $BlockPos$$Type, fluidState3: $FluidState$$Type): boolean
public "supportsExternalFaceHiding"(blockState0: $BlockState$$Type): boolean
/** Client only, do not use in server scripts */
public static "tintedColor"(): $BlockColor
get "blockEntityType"(): $BlockEntityType<$PipeBlockEntity<$OpticalPipeType, $OpticalPipeProperties>>
get "blockStates"(): $List<$BlockState>
get "fallbackType"(): $OpticalPipeProperties
get "mod"(): string
get "pickupSound"(): $Optional<$SoundEvent>
set "destroySpeed"(value: float)
set "lightEmission"(value: integer)
set "requiresTool"(value: boolean)
}
}

declare module "com.gregtechceu.gtceu.common.item.PortableScannerBehavior$DisplayMode" {
import { $Enum } from "java.lang.Enum"

export class $PortableScannerBehavior$DisplayMode extends $Enum<$PortableScannerBehavior$DisplayMode> {
static readonly "SHOW_ALL": $PortableScannerBehavior$DisplayMode
static readonly "SHOW_BLOCK_INFO": $PortableScannerBehavior$DisplayMode
static readonly "SHOW_ELECTRICAL_INFO": $PortableScannerBehavior$DisplayMode
static readonly "SHOW_ENVIRONMENTAL_INFO": $PortableScannerBehavior$DisplayMode
static readonly "SHOW_MACHINE_INFO": $PortableScannerBehavior$DisplayMode
static readonly "SHOW_RECIPE_INFO": $PortableScannerBehavior$DisplayMode

public "getLangKey"(): string
public static "valueOf"(string0: string): $PortableScannerBehavior$DisplayMode
public static "values"(): $PortableScannerBehavior$DisplayMode[]
get "langKey"(): string
}
}

declare module "com.gregtechceu.gtceu.common.pipelike.optical.OpticalPipeProperties" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export class $OpticalPipeProperties {
static readonly "INSTANCE": $OpticalPipeProperties

constructor()

}
}

declare module "com.gregtechceu.gtceu.common.data.GTMedicalConditions" {
import { $MedicalCondition } from "com.gregtechceu.gtceu.api.data.medicalcondition.MedicalCondition"

export class $GTMedicalConditions {
static readonly "ARSENICOSIS": $MedicalCondition
static readonly "ASBESTOSIS": $MedicalCondition
static readonly "BERYLLIOSIS": $MedicalCondition
static readonly "CARBON_MONOXIDE_POISONING": $MedicalCondition
static readonly "CARCINOGEN": $MedicalCondition
static readonly "CHEMICAL_BURNS": $MedicalCondition
static readonly "IRRITANT": $MedicalCondition
static readonly "METHANOL_POISONING": $MedicalCondition
static readonly "NAUSEA": $MedicalCondition
static readonly "NONE": $MedicalCondition
static readonly "POISON": $MedicalCondition
static readonly "SILICOSIS": $MedicalCondition
static readonly "WEAK_POISON": $MedicalCondition

constructor()

}
}

declare module "com.gregtechceu.gtceu.common.block.StoneTypes" {
import { $MapColor } from "net.minecraft.world.level.material.MapColor"
import { $TagPrefix } from "com.gregtechceu.gtceu.api.data.tag.TagPrefix"
import { $Enum, $Enum$$Type } from "java.lang.Enum"
import { $StringRepresentable, $StringRepresentable$$Type } from "net.minecraft.util.StringRepresentable"
import { $BlockState } from "net.minecraft.world.level.block.state.BlockState"
import { $StringRepresentable$EnumCodec } from "net.minecraft.util.StringRepresentable$EnumCodec"
import { $Keyable } from "com.mojang.serialization.Keyable"
import { $Material } from "com.gregtechceu.gtceu.api.data.chemical.material.Material"
import { $Supplier, $Supplier$$Type } from "java.util.function.Supplier"
import { $Function$$Type } from "java.util.function.Function"

export class $StoneTypes extends $Enum<$StoneTypes> implements $StringRepresentable {
static readonly "ANDESITE": $StoneTypes
static readonly "BASALT": $StoneTypes
static readonly "CONCRETE_DARK": $StoneTypes
static readonly "CONCRETE_LIGHT": $StoneTypes
static readonly "DEEPSLATE": $StoneTypes
static readonly "DIORITE": $StoneTypes
static readonly "GRANITE": $StoneTypes
static readonly "MARBLE": $StoneTypes
static readonly "RED_GRANITE": $StoneTypes
static readonly "STONE": $StoneTypes
readonly "generateBlocks": boolean
readonly "mapColor": $MapColor
readonly "material": $Material
readonly "natural": boolean
readonly "state": $Supplier<$Supplier<$BlockState>>

public static "fromEnum"<E extends ($Enum<E> & $StringRepresentable)>(supplier0: $Supplier$$Type<E[]>): $StringRepresentable$EnumCodec<E>
public static "fromEnumWithMapping"<E extends ($Enum<E> & $StringRepresentable)>(supplier0: $Supplier$$Type<E[]>, function1: $Function$$Type<string, string>): $StringRepresentable$EnumCodec<E>
public "getMaterial"(): $Material
public "getSerializedName"(): string
public "getState"(): $Supplier<$Supplier<$BlockState>>
public "getTagPrefix"(): $TagPrefix
public static "init"(): void
public "isNatural"(): boolean
public static "keys"(stringRepresentable0s: $StringRepresentable$$Type[]): $Keyable
public static "valueOf"(string0: string): $StoneTypes
public static "values"(): $StoneTypes[]
get "serializedName"(): string
get "tagPrefix"(): $TagPrefix
}
}

declare module "com.gregtechceu.gtceu.common.unification.material.MaterialRegistryManager" {
import { $ResourceLocation } from "net.minecraft.resources.ResourceLocation"
import { $IMaterialRegistryManager$Phase } from "com.gregtechceu.gtceu.api.data.chemical.material.IMaterialRegistryManager$Phase"
import { $Codec } from "com.mojang.serialization.Codec"
import { $Collection } from "java.util.Collection"
import { $MaterialRegistry } from "com.gregtechceu.gtceu.api.data.chemical.material.registry.MaterialRegistry"
import { $Material, $Material$$Type } from "com.gregtechceu.gtceu.api.data.chemical.material.Material"
import { $IMaterialRegistryManager } from "com.gregtechceu.gtceu.api.data.chemical.material.IMaterialRegistryManager"

export class $MaterialRegistryManager implements $IMaterialRegistryManager {
public "canModifyMaterials"(): boolean
public "closeRegistries"(): void
public "codec"(): $Codec<$Material>
public "createRegistry"(string0: string): $MaterialRegistry
public "freezeRegistries"(): void
public "getDefaultFallback"(): $Material
public static "getInstance"(): $MaterialRegistryManager
public "getKey"(material0: $Material$$Type): $ResourceLocation
public "getMaterial"(string0: string): $Material
public "getPhase"(): $IMaterialRegistryManager$Phase
public "getRegisteredMaterials"(): $Collection<$Material>
public "getRegistries"(): $Collection<$MaterialRegistry>
public "getRegistry"(int0: integer): $MaterialRegistry
public "getRegistry"(string0: string): $MaterialRegistry
public "unfreezeRegistries"(): void
get "defaultFallback"(): $Material
get "phase"(): $IMaterialRegistryManager$Phase
get "registeredMaterials"(): $Collection<$Material>
get "registries"(): $Collection<$MaterialRegistry>
}
}

declare module "com.gregtechceu.gtceu.common.pipelike.cable.LevelEnergyNet" {
import { $CompoundTag$$Type } from "net.minecraft.nbt.CompoundTag"
import { $WireProperties } from "com.gregtechceu.gtceu.api.data.chemical.material.properties.WireProperties"
import { $EnergyNet } from "com.gregtechceu.gtceu.common.pipelike.cable.EnergyNet"
import { $ServerLevel$$Type } from "net.minecraft.server.level.ServerLevel"
import { $LevelPipeNet } from "com.gregtechceu.gtceu.api.pipenet.LevelPipeNet"

export class $LevelEnergyNet extends $LevelPipeNet<$WireProperties, $EnergyNet> {
constructor(serverLevel0: $ServerLevel$$Type)
constructor(serverLevel0: $ServerLevel$$Type, compoundTag1: $CompoundTag$$Type)

public static "getOrCreate"(serverLevel0: $ServerLevel$$Type): $LevelEnergyNet
}
}

declare module "com.gregtechceu.gtceu.common.block.SurfaceRockBlock" {
import { $ResourceLocation } from "net.minecraft.resources.ResourceLocation"
import { $LivingEntity$$Type } from "net.minecraft.world.entity.LivingEntity"
import { $Direction, $Direction$$Type } from "net.minecraft.core.Direction"
import { $EntityType$$Type } from "net.minecraft.world.entity.EntityType"
import { $Item$$Type } from "net.minecraft.world.item.Item"
import { $BlockState, $BlockState$$Type } from "net.minecraft.world.level.block.state.BlockState"
import { $SpawnPlacements$Type$$Type } from "net.minecraft.world.entity.SpawnPlacements$Type"
import { $BlockBehaviour$Properties$$Type } from "net.minecraft.world.level.block.state.BlockBehaviour$Properties"
import { $ServerLevel$$Type } from "net.minecraft.server.level.ServerLevel"
import { $BlockGetter$$Type } from "net.minecraft.world.level.BlockGetter"
import { $MapColor, $MapColor$$Type } from "net.minecraft.world.level.material.MapColor"
import { $PushReaction } from "net.minecraft.world.level.material.PushReaction"
import { $Rotation$$Type } from "net.minecraft.world.level.block.Rotation"
import { $Holder } from "net.minecraft.core.Holder"
import { $ToolAction$$Type } from "net.minecraftforge.common.ToolAction"
import { $BiConsumer$$Type } from "java.util.function.BiConsumer"
import { $UseOnContext$$Type } from "net.minecraft.world.item.context.UseOnContext"
import { $BlockAndTintGetter$$Type } from "net.minecraft.world.level.BlockAndTintGetter"
import { $BlockColor } from "net.minecraft.client.color.block.BlockColor"
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
import { $DirectionProperty } from "net.minecraft.world.level.block.state.properties.DirectionProperty"
import { $Optional } from "java.util.Optional"
import { $LevelAccessor$$Type } from "net.minecraft.world.level.LevelAccessor"
import { $Block, $Block$$Type } from "net.minecraft.world.level.block.Block"
import { $ItemStack, $ItemStack$$Type } from "net.minecraft.world.item.ItemStack"
import { $Material, $Material$$Type } from "com.gregtechceu.gtceu.api.data.chemical.material.Material"
import { $Level$$Type } from "net.minecraft.world.level.Level"
import { $Mob$$Type } from "net.minecraft.world.entity.Mob"
import { $ItemColor } from "net.minecraft.client.color.item.ItemColor"

export class $SurfaceRockBlock extends $Block {
static readonly "FACING": $DirectionProperty

constructor(properties0: $BlockBehaviour$Properties$$Type, material1: $Material$$Type)

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
public "getMaterial"(): $Material
public "getMod"(): string
public "getPistonPushReaction"(blockState0: $BlockState$$Type): $PushReaction
public "getRespawnPosition"(blockState0: $BlockState$$Type, entityType1: $EntityType$$Type<any>, levelReader2: $LevelReader$$Type, blockPos3: $BlockPos$$Type, float4: float, livingEntity5: $LivingEntity$$Type): $Optional<$Vec3>
public "getSoundType"(blockState0: $BlockState$$Type, levelReader1: $LevelReader$$Type, blockPos2: $BlockPos$$Type, entity3: $Entity$$Type): $SoundType
public "getStateAtViewpoint"(blockState0: $BlockState$$Type, blockGetter1: $BlockGetter$$Type, blockPos2: $BlockPos$$Type, vec33: $Vec3$$Type): $BlockState
public "getStateForDirection"(direction0: $Direction$$Type): $BlockState
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
/** Client only, do not use in server scripts */
public static "tintedBlockColor"(): $BlockColor
/** Client only, do not use in server scripts */
public static "tintedItemColor"(): $ItemColor
get "blockStates"(): $List<$BlockState>
get "material"(): $Material
get "mod"(): string
set "destroySpeed"(value: float)
set "lightEmission"(value: integer)
set "requiresTool"(value: boolean)
}
}

declare module "com.gregtechceu.gtceu.common.block.CoilBlock" {
import { $ResourceLocation } from "net.minecraft.resources.ResourceLocation"
import { $LivingEntity$$Type } from "net.minecraft.world.entity.LivingEntity"
import { $Direction, $Direction$$Type } from "net.minecraft.core.Direction"
import { $EntityType$$Type } from "net.minecraft.world.entity.EntityType"
import { $Item$$Type } from "net.minecraft.world.item.Item"
import { $BlockState, $BlockState$$Type } from "net.minecraft.world.level.block.state.BlockState"
import { $SpawnPlacements$Type$$Type } from "net.minecraft.world.entity.SpawnPlacements$Type"
import { $BlockBehaviour$Properties$$Type } from "net.minecraft.world.level.block.state.BlockBehaviour$Properties"
import { $ServerLevel$$Type } from "net.minecraft.server.level.ServerLevel"
import { $ActiveBlock } from "com.gregtechceu.gtceu.api.block.ActiveBlock"
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
import { $ICoilType, $ICoilType$$Type } from "com.gregtechceu.gtceu.api.block.ICoilType"
import { $Block, $Block$$Type } from "net.minecraft.world.level.block.Block"
import { $ItemStack, $ItemStack$$Type } from "net.minecraft.world.item.ItemStack"
import { $Level$$Type } from "net.minecraft.world.level.Level"
import { $Mob$$Type } from "net.minecraft.world.entity.Mob"

export class $CoilBlock extends $ActiveBlock {
constructor(properties0: $BlockBehaviour$Properties$$Type, iCoilType1: $ICoilType$$Type)

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
public static "get"(item: $Item$$Type): $ResourceLocation
public static "get"(block: $Block$$Type): $ResourceLocation
public static "get"(state: $BlockState$$Type): $ResourceLocation
public static "get"(entity: $Entity$$Type): $ResourceLocation
public static "get"(stack: $ItemStack$$Type): $ResourceLocation
public static "get"(type: $EntityType$$Type<any>): $ResourceLocation
public "getAdjacentBlockPathType"(blockState0: $BlockState$$Type, blockGetter1: $BlockGetter$$Type, blockPos2: $BlockPos$$Type, mob3: $Mob$$Type, blockPathTypes4: $BlockPathTypes$$Type): $BlockPathTypes
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
get "coilType"(): $ICoilType
set "coilType"(value: $ICoilType$$Type)
get "blockStates"(): $List<$BlockState>
get "mod"(): string
set "destroySpeed"(value: float)
set "lightEmission"(value: integer)
set "requiresTool"(value: boolean)
}
}

declare module "com.gregtechceu.gtceu.common.pipelike.laser.LevelLaserPipeNet" {
import { $LaserPipeProperties } from "com.gregtechceu.gtceu.common.pipelike.laser.LaserPipeProperties"
import { $CompoundTag$$Type } from "net.minecraft.nbt.CompoundTag"
import { $LaserPipeNet } from "com.gregtechceu.gtceu.common.pipelike.laser.LaserPipeNet"
import { $ServerLevel$$Type } from "net.minecraft.server.level.ServerLevel"
import { $LevelPipeNet } from "com.gregtechceu.gtceu.api.pipenet.LevelPipeNet"

export class $LevelLaserPipeNet extends $LevelPipeNet<$LaserPipeProperties, $LaserPipeNet> {
constructor(serverLevel0: $ServerLevel$$Type)
constructor(serverLevel0: $ServerLevel$$Type, compoundTag1: $CompoundTag$$Type)

public static "getOrCreate"(serverLevel0: $ServerLevel$$Type): $LevelLaserPipeNet
}
}

declare module "com.gregtechceu.gtceu.common.block.GTWallSignBlock" {
import { $ResourceLocation } from "net.minecraft.resources.ResourceLocation"
import { $BlockEntityTicker } from "net.minecraft.world.level.block.entity.BlockEntityTicker"
import { $LivingEntity$$Type } from "net.minecraft.world.entity.LivingEntity"
import { $Direction, $Direction$$Type } from "net.minecraft.core.Direction"
import { $EntityType$$Type } from "net.minecraft.world.entity.EntityType"
import { $Item$$Type } from "net.minecraft.world.item.Item"
import { $BlockState, $BlockState$$Type } from "net.minecraft.world.level.block.state.BlockState"
import { $SpawnPlacements$Type$$Type } from "net.minecraft.world.entity.SpawnPlacements$Type"
import { $BlockBehaviour$Properties$$Type } from "net.minecraft.world.level.block.state.BlockBehaviour$Properties"
import { $ServerLevel$$Type } from "net.minecraft.server.level.ServerLevel"
import { $BlockGetter$$Type } from "net.minecraft.world.level.BlockGetter"
import { $MapColor, $MapColor$$Type } from "net.minecraft.world.level.material.MapColor"
import { $PushReaction } from "net.minecraft.world.level.material.PushReaction"
import { $Rotation$$Type } from "net.minecraft.world.level.block.Rotation"
import { $WallSignBlock } from "net.minecraft.world.level.block.WallSignBlock"
import { $Holder } from "net.minecraft.core.Holder"
import { $ToolAction$$Type } from "net.minecraftforge.common.ToolAction"
import { $BiConsumer$$Type } from "java.util.function.BiConsumer"
import { $Fluid$$Type } from "net.minecraft.world.level.material.Fluid"
import { $UseOnContext$$Type } from "net.minecraft.world.item.context.UseOnContext"
import { $BlockAndTintGetter$$Type } from "net.minecraft.world.level.BlockAndTintGetter"
import { $BlockPathTypes, $BlockPathTypes$$Type } from "net.minecraft.world.level.pathfinder.BlockPathTypes"
import { $RandomSource$$Type } from "net.minecraft.util.RandomSource"
import { $LevelReader$$Type } from "net.minecraft.world.level.LevelReader"
import { $BlockEntity, $BlockEntity$$Type } from "net.minecraft.world.level.block.entity.BlockEntity"
import { $TreeConfiguration$$Type } from "net.minecraft.world.level.levelgen.feature.configurations.TreeConfiguration"
import { $Explosion$$Type } from "net.minecraft.world.level.Explosion"
import { $SoundType } from "net.minecraft.world.level.block.SoundType"
import { $Player$$Type } from "net.minecraft.world.entity.player.Player"
import { $HitResult$$Type } from "net.minecraft.world.phys.HitResult"
import { $FeatureFlagSet$$Type } from "net.minecraft.world.flag.FeatureFlagSet"
import { $List } from "java.util.List"
import { $Entity$$Type } from "net.minecraft.world.entity.Entity"
import { $BlockPos$$Type } from "net.minecraft.core.BlockPos"
import { $SoundEvent } from "net.minecraft.sounds.SoundEvent"
import { $Vec3, $Vec3$$Type } from "net.minecraft.world.phys.Vec3"
import { $BlockEntityType$$Type } from "net.minecraft.world.level.block.entity.BlockEntityType"
import { $SignalGetter$$Type } from "net.minecraft.world.level.SignalGetter"
import { $FluidState$$Type } from "net.minecraft.world.level.material.FluidState"
import { $GameEventListener } from "net.minecraft.world.level.gameevent.GameEventListener"
import { $Optional } from "java.util.Optional"
import { $LevelAccessor$$Type } from "net.minecraft.world.level.LevelAccessor"
import { $WoodType$$Type } from "net.minecraft.world.level.block.state.properties.WoodType"
import { $Block, $Block$$Type } from "net.minecraft.world.level.block.Block"
import { $ItemStack, $ItemStack$$Type } from "net.minecraft.world.item.ItemStack"
import { $Level$$Type } from "net.minecraft.world.level.Level"
import { $Mob$$Type } from "net.minecraft.world.entity.Mob"

export class $GTWallSignBlock extends $WallSignBlock {
constructor(properties0: $BlockBehaviour$Properties$$Type, woodType1: $WoodType$$Type)

public "addLandingEffects"(blockState0: $BlockState$$Type, serverLevel1: $ServerLevel$$Type, blockPos2: $BlockPos$$Type, blockState3: $BlockState$$Type, livingEntity4: $LivingEntity$$Type, int5: integer): boolean
public "addRunningEffects"(blockState0: $BlockState$$Type, level1: $Level$$Type, blockPos2: $BlockPos$$Type, entity3: $Entity$$Type): boolean
public "arch$holder"(): $Holder<$Block>
public "arch$registryName"(): $ResourceLocation
public "canBeHydrated"(blockState0: $BlockState$$Type, blockGetter1: $BlockGetter$$Type, blockPos2: $BlockPos$$Type, fluidState3: $FluidState$$Type, blockPos4: $BlockPos$$Type): boolean
public "canConnectRedstone"(blockState0: $BlockState$$Type, blockGetter1: $BlockGetter$$Type, blockPos2: $BlockPos$$Type, direction3: $Direction$$Type): boolean
public "canDropFromExplosion"(blockState0: $BlockState$$Type, blockGetter1: $BlockGetter$$Type, blockPos2: $BlockPos$$Type, explosion3: $Explosion$$Type): boolean
public "canEntityDestroy"(blockState0: $BlockState$$Type, blockGetter1: $BlockGetter$$Type, blockPos2: $BlockPos$$Type, entity3: $Entity$$Type): boolean
public "canHarvestBlock"(blockState0: $BlockState$$Type, blockGetter1: $BlockGetter$$Type, blockPos2: $BlockPos$$Type, player3: $Player$$Type): boolean
public "canPlaceLiquid"(blockGetter0: $BlockGetter$$Type, blockPos1: $BlockPos$$Type, blockState2: $BlockState$$Type, fluid3: $Fluid$$Type): boolean
public "canStickTo"(blockState0: $BlockState$$Type, blockState1: $BlockState$$Type): boolean
public "collisionExtendsVertically"(blockState0: $BlockState$$Type, blockGetter1: $BlockGetter$$Type, blockPos2: $BlockPos$$Type, entity3: $Entity$$Type): boolean
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
public "getListener"<T extends $BlockEntity>(serverLevel0: $ServerLevel$$Type, t1: T): $GameEventListener
public "getMapColor"(blockState0: $BlockState$$Type, blockGetter1: $BlockGetter$$Type, blockPos2: $BlockPos$$Type, mapColor3: $MapColor$$Type): $MapColor
public "getMod"(): string
public "getPickupSound"(): $Optional<$SoundEvent>
public "getPickupSound"(blockState0: $BlockState$$Type): $Optional<$SoundEvent>
public "getPistonPushReaction"(blockState0: $BlockState$$Type): $PushReaction
public "getRespawnPosition"(blockState0: $BlockState$$Type, entityType1: $EntityType$$Type<any>, levelReader2: $LevelReader$$Type, blockPos3: $BlockPos$$Type, float4: float, livingEntity5: $LivingEntity$$Type): $Optional<$Vec3>
public "getSoundType"(blockState0: $BlockState$$Type, levelReader1: $LevelReader$$Type, blockPos2: $BlockPos$$Type, entity3: $Entity$$Type): $SoundType
public "getStateAtViewpoint"(blockState0: $BlockState$$Type, blockGetter1: $BlockGetter$$Type, blockPos2: $BlockPos$$Type, vec33: $Vec3$$Type): $BlockState
public "getTicker"<T extends $BlockEntity>(level0: $Level$$Type, blockState1: $BlockState$$Type, blockEntityType2: $BlockEntityType$$Type<T>): $BlockEntityTicker<T>
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
public "pickupBlock"(levelAccessor0: $LevelAccessor$$Type, blockPos1: $BlockPos$$Type, blockState2: $BlockState$$Type): $ItemStack
public "placeLiquid"(levelAccessor0: $LevelAccessor$$Type, blockPos1: $BlockPos$$Type, blockState2: $BlockState$$Type, fluidState3: $FluidState$$Type): boolean
public "rotate"(blockState0: $BlockState$$Type, levelAccessor1: $LevelAccessor$$Type, blockPos2: $BlockPos$$Type, rotation3: $Rotation$$Type): $BlockState
public "setBedOccupied"(blockState0: $BlockState$$Type, level1: $Level$$Type, blockPos2: $BlockPos$$Type, livingEntity3: $LivingEntity$$Type, boolean4: boolean): void
public "setDestroySpeed"(v: float): void
public "setLightEmission"(v: integer): void
public "setRequiresTool"(v: boolean): void
public "shouldCheckWeakPower"(blockState0: $BlockState$$Type, signalGetter1: $SignalGetter$$Type, blockPos2: $BlockPos$$Type, direction3: $Direction$$Type): boolean
public "shouldDisplayFluidOverlay"(blockState0: $BlockState$$Type, blockAndTintGetter1: $BlockAndTintGetter$$Type, blockPos2: $BlockPos$$Type, fluidState3: $FluidState$$Type): boolean
public "supportsExternalFaceHiding"(blockState0: $BlockState$$Type): boolean
get "blockStates"(): $List<$BlockState>
get "mod"(): string
get "pickupSound"(): $Optional<$SoundEvent>
set "destroySpeed"(value: float)
set "lightEmission"(value: integer)
set "requiresTool"(value: boolean)
}
}

declare module "com.gregtechceu.gtceu.common.pipelike.laser.LaserPipeProperties" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export class $LaserPipeProperties {
static readonly "INSTANCE": $LaserPipeProperties

constructor()

}
}

declare module "com.gregtechceu.gtceu.common.pipelike.laser.LaserPipeType" {
import { $ResourceLocation } from "net.minecraft.resources.ResourceLocation"
import { $LaserPipeProperties, $LaserPipeProperties$$Type } from "com.gregtechceu.gtceu.common.pipelike.laser.LaserPipeProperties"
import { $Enum, $Enum$$Type } from "java.lang.Enum"
import { $StringRepresentable, $StringRepresentable$$Type } from "net.minecraft.util.StringRepresentable"
import { $StringRepresentable$EnumCodec } from "net.minecraft.util.StringRepresentable$EnumCodec"
import { $Keyable } from "com.mojang.serialization.Keyable"
import { $Supplier$$Type } from "java.util.function.Supplier"
import { $Function$$Type } from "java.util.function.Function"
import { $IPipeType } from "com.gregtechceu.gtceu.api.pipenet.IPipeType"

export class $LaserPipeType extends $Enum<$LaserPipeType> implements $IPipeType<$LaserPipeProperties>, $StringRepresentable {
static readonly "NORMAL": $LaserPipeType
static readonly "TYPE_ID": $ResourceLocation

public static "fromEnum"<E extends ($Enum<E> & $StringRepresentable)>(supplier0: $Supplier$$Type<E[]>): $StringRepresentable$EnumCodec<E>
public static "fromEnumWithMapping"<E extends ($Enum<E> & $StringRepresentable)>(supplier0: $Supplier$$Type<E[]>, function1: $Function$$Type<string, string>): $StringRepresentable$EnumCodec<E>
public "getSerializedName"(): string
public "getThickness"(): float
public "isPaintable"(): boolean
public static "keys"(stringRepresentable0s: $StringRepresentable$$Type[]): $Keyable
public "modifyProperties"(laserPipeProperties0: $LaserPipeProperties$$Type): $LaserPipeProperties
public "type"(): $ResourceLocation
public static "valueOf"(string0: string): $LaserPipeType
public static "values"(): $LaserPipeType[]
get "serializedName"(): string
get "thickness"(): float
get "paintable"(): boolean
}
}

declare module "com.gregtechceu.gtceu.common.block.explosive.PowderbarrelBlock" {
import { $ResourceLocation } from "net.minecraft.resources.ResourceLocation"
import { $LivingEntity$$Type } from "net.minecraft.world.entity.LivingEntity"
import { $Direction, $Direction$$Type } from "net.minecraft.core.Direction"
import { $EntityType$$Type } from "net.minecraft.world.entity.EntityType"
import { $Item$$Type } from "net.minecraft.world.item.Item"
import { $BlockState, $BlockState$$Type } from "net.minecraft.world.level.block.state.BlockState"
import { $SpawnPlacements$Type$$Type } from "net.minecraft.world.entity.SpawnPlacements$Type"
import { $BlockBehaviour$Properties$$Type } from "net.minecraft.world.level.block.state.BlockBehaviour$Properties"
import { $ServerLevel$$Type } from "net.minecraft.server.level.ServerLevel"
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
import { $GTExplosiveBlock } from "com.gregtechceu.gtceu.common.block.explosive.GTExplosiveBlock"

export class $PowderbarrelBlock extends $GTExplosiveBlock {
constructor(properties0: $BlockBehaviour$Properties$$Type)

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
get "blockStates"(): $List<$BlockState>
get "mod"(): string
set "destroySpeed"(value: float)
set "lightEmission"(value: integer)
set "requiresTool"(value: boolean)
}
}

declare module "com.gregtechceu.gtceu.common.pipelike.duct.DuctPipeNet" {
import { $List } from "java.util.List"
import { $BlockPos$$Type } from "net.minecraft.core.BlockPos"
import { $Direction$$Type } from "net.minecraft.core.Direction"
import { $DuctRoutePath } from "com.gregtechceu.gtceu.common.pipelike.duct.DuctRoutePath"
import { $DuctPipeProperties, $DuctPipeProperties$$Type } from "com.gregtechceu.gtceu.common.pipelike.duct.DuctPipeProperties"
import { $LevelPipeNet$$Type } from "com.gregtechceu.gtceu.api.pipenet.LevelPipeNet"
import { $PipeNet, $PipeNet$$Type } from "com.gregtechceu.gtceu.api.pipenet.PipeNet"

export class $DuctPipeNet extends $PipeNet<$DuctPipeProperties> {
constructor(levelPipeNet0: $LevelPipeNet$$Type<$DuctPipeProperties$$Type, $PipeNet$$Type<$DuctPipeProperties$$Type>>)

public "getNetData"(blockPos0: $BlockPos$$Type, direction1: $Direction$$Type): $List<$DuctRoutePath>
}
}

declare module "com.gregtechceu.gtceu.common.data.machines.GTMultiMachines" {
import { $MachineDefinition } from "com.gregtechceu.gtceu.api.machine.MachineDefinition"
import { $MultiblockMachineDefinition } from "com.gregtechceu.gtceu.api.machine.MultiblockMachineDefinition"

export class $GTMultiMachines {
static readonly "ACTIVE_TRANSFORMER": $MultiblockMachineDefinition
static readonly "ASSEMBLY_LINE": $MultiblockMachineDefinition
static "BEDROCK_ORE_MINER": $MultiblockMachineDefinition[]
static readonly "BRONZE_MULTIBLOCK_TANK": $MultiblockMachineDefinition
static readonly "BRONZE_TANK_VALVE": $MachineDefinition
static readonly "CENTRAL_MONITOR": $MultiblockMachineDefinition
static readonly "CHARCOAL_PILE_IGNITER": $MultiblockMachineDefinition
static readonly "CLEANROOM": $MultiblockMachineDefinition
static readonly "COKE_OVEN": $MultiblockMachineDefinition
static readonly "CRACKER": $MultiblockMachineDefinition
static readonly "DISTILLATION_TOWER": $MultiblockMachineDefinition
static readonly "ELECTRIC_BLAST_FURNACE": $MultiblockMachineDefinition
static readonly "EXTREME_COMBUSTION_ENGINE": $MultiblockMachineDefinition
static readonly "FLUID_DRILLING_RIG": $MultiblockMachineDefinition[]
static readonly "FUSION_REACTOR": $MultiblockMachineDefinition[]
static readonly "IMPLOSION_COMPRESSOR": $MultiblockMachineDefinition
static readonly "LARGE_BOILER_BRONZE": $MultiblockMachineDefinition
static readonly "LARGE_BOILER_STEEL": $MultiblockMachineDefinition
static readonly "LARGE_BOILER_TITANIUM": $MultiblockMachineDefinition
static readonly "LARGE_BOILER_TUNGSTENSTEEL": $MultiblockMachineDefinition
static readonly "LARGE_CHEMICAL_REACTOR": $MultiblockMachineDefinition
static readonly "LARGE_COMBUSTION_ENGINE": $MultiblockMachineDefinition
static readonly "LARGE_GAS_TURBINE": $MultiblockMachineDefinition
static readonly "LARGE_MINER": $MultiblockMachineDefinition[]
static readonly "LARGE_PLASMA_TURBINE": $MultiblockMachineDefinition
static readonly "LARGE_STEAM_TURBINE": $MultiblockMachineDefinition
static readonly "MULTI_SMELTER": $MultiblockMachineDefinition
static readonly "POWER_SUBSTATION": $MultiblockMachineDefinition
static readonly "PRIMITIVE_BLAST_FURNACE": $MultiblockMachineDefinition
static readonly "PRIMITIVE_PUMP": $MultiblockMachineDefinition
static readonly "PYROLYSE_OVEN": $MultiblockMachineDefinition
static readonly "STEAM_GRINDER": $MultiblockMachineDefinition
static readonly "STEAM_OVEN": $MultiblockMachineDefinition
static readonly "STEEL_MULTIBLOCK_TANK": $MultiblockMachineDefinition
static readonly "STEEL_TANK_VALVE": $MachineDefinition
static readonly "VACUUM_FREEZER": $MultiblockMachineDefinition
static readonly "WOODEN_MULTIBLOCK_TANK": $MultiblockMachineDefinition
static readonly "WOODEN_TANK_VALVE": $MachineDefinition

constructor()

public static "init"(): void
}
}

declare module "com.gregtechceu.gtceu.common.cosmetics.GTCapes" {
import { $ResourceLocation } from "net.minecraft.resources.ResourceLocation"
import { $RegisterGTCapesEvent$$Type } from "com.gregtechceu.gtceu.api.cosmetics.event.RegisterGTCapesEvent"

export class $GTCapes {
static readonly "ACE_CAPE": $ResourceLocation
static readonly "AGENDER_CAPE": $ResourceLocation
static readonly "AROMANTIC_CAPE": $ResourceLocation
static readonly "BI_CAPE": $ResourceLocation
static readonly "DEBUG_CAPE": $ResourceLocation
static readonly "GENDERFLUID_CAPE": $ResourceLocation
static readonly "GENDERQUEER_CAPE": $ResourceLocation
static readonly "GREEN_CAPE": $ResourceLocation
static readonly "GREGTECH_CAPE": $ResourceLocation
static readonly "INTERSEX_CAPE": $ResourceLocation
static readonly "LESBIAN_CAPE": $ResourceLocation
static readonly "NONBINARY_CAPE": $ResourceLocation
static readonly "PAN_CAPE": $ResourceLocation
static readonly "RAINBOW_CAPE": $ResourceLocation
static readonly "RED_CAPE": $ResourceLocation
static readonly "TRANS_CAPE": $ResourceLocation
static readonly "YELLOW_CAPE": $ResourceLocation

constructor()

public static "giveDevCapes"(registerGTCapesEvent0: $RegisterGTCapesEvent$$Type): void
public static "registerGTCapes"(registerGTCapesEvent0: $RegisterGTCapesEvent$$Type): void
}
}

declare module "com.gregtechceu.gtceu.common.data.GTRecipeModifiers" {
import { $GTRecipe$$Type } from "com.gregtechceu.gtceu.api.recipe.GTRecipe"
import { $MetaMachine$$Type } from "com.gregtechceu.gtceu.api.machine.MetaMachine"
import { $BiFunction } from "java.util.function.BiFunction"
import { $MedicalCondition } from "com.gregtechceu.gtceu.api.data.medicalcondition.MedicalCondition"
import { $RecipeModifier } from "com.gregtechceu.gtceu.api.recipe.modifier.RecipeModifier"
import { $Function } from "java.util.function.Function"
import { $OverclockingLogic } from "com.gregtechceu.gtceu.api.recipe.OverclockingLogic"
import { $ModifierFunction } from "com.gregtechceu.gtceu.api.recipe.modifier.ModifierFunction"

export class $GTRecipeModifiers {
static readonly "BATCH_MODE": $RecipeModifier
static readonly "DEFAULT_ENVIRONMENT_REQUIREMENT": $RecipeModifier
static readonly "ELECTRIC_OVERCLOCK": $Function<$OverclockingLogic, $RecipeModifier>
static readonly "ENVIRONMENT_REQUIREMENT": $BiFunction<$MedicalCondition, integer, $RecipeModifier>
static readonly "OC_NON_PERFECT": $RecipeModifier
static readonly "OC_NON_PERFECT_SUBTICK": $RecipeModifier
static readonly "OC_PERFECT": $RecipeModifier
static readonly "OC_PERFECT_SUBTICK": $RecipeModifier
static readonly "PARALLEL_HATCH": $RecipeModifier

constructor()

public static "batchMode"(metaMachine0: $MetaMachine$$Type, gTRecipe1: $GTRecipe$$Type): $ModifierFunction
public static "crackerOverclock"(metaMachine0: $MetaMachine$$Type, gTRecipe1: $GTRecipe$$Type): $ModifierFunction
public static "ebfOverclock"(metaMachine0: $MetaMachine$$Type, gTRecipe1: $GTRecipe$$Type): $ModifierFunction
public static "hatchParallel"(metaMachine0: $MetaMachine$$Type, gTRecipe1: $GTRecipe$$Type): $ModifierFunction
public static "multiSmelterParallel"(metaMachine0: $MetaMachine$$Type, gTRecipe1: $GTRecipe$$Type): $ModifierFunction
public static "pyrolyseOvenOverclock"(metaMachine0: $MetaMachine$$Type, gTRecipe1: $GTRecipe$$Type): $ModifierFunction
}
}

declare module "com.gregtechceu.gtceu.common.pipelike.item.ItemRoutePath" {
import { $IItemHandler } from "net.minecraftforge.items.IItemHandler"
import { $ItemPipeBlockEntity, $ItemPipeBlockEntity$$Type } from "com.gregtechceu.gtceu.common.blockentity.ItemPipeBlockEntity"
import { $ItemPipeProperties, $ItemPipeProperties$$Type } from "com.gregtechceu.gtceu.api.data.chemical.material.properties.ItemPipeProperties"
import { $Direction, $Direction$$Type } from "net.minecraft.core.Direction"
import { $Predicate$$Type } from "java.util.function.Predicate"
import { $FacingPos } from "com.gregtechceu.gtceu.utils.FacingPos"
import { $BlockEntity } from "net.minecraft.world.level.block.entity.BlockEntity"
import { $Capability$$Type } from "net.minecraftforge.common.capabilities.Capability"
import { $List$$Type } from "java.util.List"
import { $IRoutePath } from "com.gregtechceu.gtceu.api.pipenet.IRoutePath"
import { $BlockPos } from "net.minecraft.core.BlockPos"
import { $ItemStack$$Type } from "net.minecraft.world.item.ItemStack"
import { $Level$$Type } from "net.minecraft.world.level.Level"

export class $ItemRoutePath implements $IRoutePath<$IItemHandler> {
constructor(itemPipeBlockEntity0: $ItemPipeBlockEntity$$Type, direction1: $Direction$$Type, int2: integer, itemPipeProperties3: $ItemPipeProperties$$Type, boolean4: boolean, list5: $List$$Type<$Predicate$$Type<$ItemStack$$Type>>)

public "getDistance"(): integer
public "getProperties"(): $ItemPipeProperties
public "getTargetBlockEntity"(level0: $Level$$Type): $BlockEntity
public "getTargetCapability"<I>(capability0: $Capability$$Type<I>, level1: $Level$$Type): I
public "getTargetFacing"(): $Direction
public "getTargetPipe"(): $ItemPipeBlockEntity
public "getTargetPipePos"(): $BlockPos
public "isRestrictive"(): boolean
public "matchesFilters"(itemStack0: $ItemStack$$Type): boolean
public "toFacingPos"(): $FacingPos
get "distance"(): integer
get "properties"(): $ItemPipeProperties
get "targetFacing"(): $Direction
get "targetPipe"(): $ItemPipeBlockEntity
get "targetPipePos"(): $BlockPos
get "restrictive"(): boolean
}
}

declare module "com.gregtechceu.gtceu.common.block.RubberLogBlock" {
import { $ResourceLocation } from "net.minecraft.resources.ResourceLocation"
import { $LivingEntity$$Type } from "net.minecraft.world.entity.LivingEntity"
import { $Direction, $Direction$$Type } from "net.minecraft.core.Direction"
import { $EntityType$$Type } from "net.minecraft.world.entity.EntityType"
import { $Item$$Type } from "net.minecraft.world.item.Item"
import { $BlockState, $BlockState$$Type } from "net.minecraft.world.level.block.state.BlockState"
import { $SpawnPlacements$Type$$Type } from "net.minecraft.world.entity.SpawnPlacements$Type"
import { $BlockBehaviour$Properties$$Type } from "net.minecraft.world.level.block.state.BlockBehaviour$Properties"
import { $ServerLevel$$Type } from "net.minecraft.server.level.ServerLevel"
import { $BooleanProperty } from "net.minecraft.world.level.block.state.properties.BooleanProperty"
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
import { $RotatedPillarBlock } from "net.minecraft.world.level.block.RotatedPillarBlock"
import { $Level$$Type } from "net.minecraft.world.level.Level"
import { $Mob$$Type } from "net.minecraft.world.entity.Mob"

export class $RubberLogBlock extends $RotatedPillarBlock {
static readonly "NATURAL": $BooleanProperty

constructor(properties0: $BlockBehaviour$Properties$$Type)

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
public "changeNatural"(blockState0: $BlockState$$Type, boolean1: boolean): $BlockState
public "collisionExtendsVertically"(blockState0: $BlockState$$Type, blockGetter1: $BlockGetter$$Type, blockPos2: $BlockPos$$Type, entity3: $Entity$$Type): boolean
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
public "isNatural"(blockState0: $BlockState$$Type): boolean
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
get "blockStates"(): $List<$BlockState>
get "mod"(): string
set "destroySpeed"(value: float)
set "lightEmission"(value: integer)
set "requiresTool"(value: boolean)
}
}

declare module "com.gregtechceu.gtceu.common.pipelike.duct.DuctPipeProperties" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export class $DuctPipeProperties {
constructor(float0: float)
constructor()

public "getTransferRate"(): float
public "setTransferRate"(float0: float): void
get "transferRate"(): float
set "transferRate"(value: float)
}
}

declare module "com.gregtechceu.gtceu.common.data.GTMaterialBlocks" {
import { $BlockEntry } from "com.tterrag.registrate.util.entry.BlockEntry"
import { $TagPrefix } from "com.gregtechceu.gtceu.api.data.tag.TagPrefix"
import { $ItemPipeBlock } from "com.gregtechceu.gtceu.common.block.ItemPipeBlock"
import { $Map } from "java.util.Map"
import { $SurfaceRockBlock } from "com.gregtechceu.gtceu.common.block.SurfaceRockBlock"
import { $FluidPipeBlock } from "com.gregtechceu.gtceu.common.block.FluidPipeBlock"
import { $CableBlock } from "com.gregtechceu.gtceu.common.block.CableBlock"
import { $Block } from "net.minecraft.world.level.block.Block"
import { $Material } from "com.gregtechceu.gtceu.api.data.chemical.material.Material"
import { $Table } from "com.google.common.collect.Table"

export class $GTMaterialBlocks {
static "CABLE_BLOCKS": $Table<$TagPrefix, $Material, $BlockEntry<$CableBlock>>
static "FLUID_PIPE_BLOCKS": $Table<$TagPrefix, $Material, $BlockEntry<$FluidPipeBlock>>
static "ITEM_PIPE_BLOCKS": $Table<$TagPrefix, $Material, $BlockEntry<$ItemPipeBlock>>
static "MATERIAL_BLOCKS": $Table<$TagPrefix, $Material, $BlockEntry<$Block>>
static "SURFACE_ROCK_BLOCKS": $Map<$Material, $BlockEntry<$SurfaceRockBlock>>

constructor()

public static "generateCableBlocks"(): void
public static "generateFluidPipeBlocks"(): void
public static "generateItemPipeBlocks"(): void
public static "generateMaterialBlocks"(): void
public static "generateOreBlocks"(): void
public static "generateOreIndicators"(): void
}
}

