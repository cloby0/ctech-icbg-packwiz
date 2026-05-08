declare module "com.simibubi.create.foundation.fluid.FluidIngredient" {
import { $JsonElement$$Type } from "com.google.gson.JsonElement"
import { $TagKey$$Type } from "net.minecraft.tags.TagKey"
import { $JsonObject } from "com.google.gson.JsonObject"
import { $List, $List$$Type } from "java.util.List"
import { $Predicate, $Predicate$$Type } from "java.util.function.Predicate"
import { $FluidStack, $FluidStack$$Type } from "net.minecraftforge.fluids.FluidStack"
import { $Fluid$$Type } from "net.minecraft.world.level.material.Fluid"
import { $FriendlyByteBuf$$Type } from "net.minecraft.network.FriendlyByteBuf"

export class $FluidIngredient implements $Predicate<$FluidStack> {
static readonly "EMPTY": $FluidIngredient

constructor()

public "and"(predicate0: $Predicate$$Type<$FluidStack$$Type>): $Predicate<$FluidStack>
public static "deserialize"(jsonElement0: $JsonElement$$Type): $FluidIngredient
public static "fromFluid"(fluid0: $Fluid$$Type, int1: integer): $FluidIngredient
public static "fromFluidStack"(fluidStack0: $FluidStack$$Type): $FluidIngredient
public static "fromTag"(tagKey0: $TagKey$$Type<$Fluid$$Type>, int1: integer): $FluidIngredient
public "getMatchingFluidStacks"(): $List<$FluidStack>
public "getRequiredAmount"(): integer
public static "isEqual"<T>(object0: any): $Predicate<T>
public static "isFluidIngredient"(jsonElement0: $JsonElement$$Type): boolean
public "negate"(): $Predicate<$FluidStack>
public static "not"<T>(predicate0: $Predicate$$Type<T>): $Predicate<T>
public "or"(predicate0: $Predicate$$Type<$FluidStack$$Type>): $Predicate<$FluidStack>
public static "read"(friendlyByteBuf0: $FriendlyByteBuf$$Type): $FluidIngredient
public "serialize"(): $JsonObject
public "test"(fluidStack0: $FluidStack$$Type): boolean
public "write"(friendlyByteBuf0: $FriendlyByteBuf$$Type): void
get "matchingFluidStacks"(): $List<$FluidStack>
set "matchingFluidStacks"(value: $List$$Type<$FluidStack$$Type>)
get "requiredAmount"(): integer
}
}

declare module "com.simibubi.create.content.kinetics.base.IRotate" {
import { $IRotate$SpeedLevel } from "com.simibubi.create.content.kinetics.base.IRotate$SpeedLevel"
import { $Direction$Axis } from "net.minecraft.core.Direction$Axis"
import { $IWrenchable } from "com.simibubi.create.content.equipment.wrench.IWrenchable"
import { $BlockPos$$Type } from "net.minecraft.core.BlockPos"
import { $Direction$$Type } from "net.minecraft.core.Direction"
import { $BlockState, $BlockState$$Type } from "net.minecraft.world.level.block.state.BlockState"
import { $InteractionResult } from "net.minecraft.world.InteractionResult"
import { $UseOnContext$$Type } from "net.minecraft.world.item.context.UseOnContext"
import { $LevelReader$$Type } from "net.minecraft.world.level.LevelReader"
import { $Level$$Type } from "net.minecraft.world.level.Level"

export interface $IRotate extends $IWrenchable {
"getMinimumRequiredSpeedLevel"(): $IRotate$SpeedLevel
"getRotatedBlockState"(blockState0: $BlockState$$Type, direction1: $Direction$$Type): $BlockState
"getRotationAxis"(blockState0: $BlockState$$Type): $Direction$Axis
"hasShaftTowards"(levelReader0: $LevelReader$$Type, blockPos1: $BlockPos$$Type, blockState2: $BlockState$$Type, direction3: $Direction$$Type): boolean
"hideStressImpact"(): boolean
"onSneakWrenched"(blockState0: $BlockState$$Type, useOnContext1: $UseOnContext$$Type): $InteractionResult
"onWrenched"(blockState0: $BlockState$$Type, useOnContext1: $UseOnContext$$Type): $InteractionResult
"showCapacityWithAnnotation"(): boolean
"updateAfterWrenched"(blockState0: $BlockState$$Type, useOnContext1: $UseOnContext$$Type): $BlockState
get "minimumRequiredSpeedLevel"(): $IRotate$SpeedLevel
}

export namespace $IRotate {
function playRemoveSound(level0: $Level$$Type, blockPos1: $BlockPos$$Type): void
function playRotateSound(level0: $Level$$Type, blockPos1: $BlockPos$$Type): void
}
export abstract class $IRotate$$Static implements $IRotate {
static "playRemoveSound"(level0: $Level$$Type, blockPos1: $BlockPos$$Type): void
static "playRotateSound"(level0: $Level$$Type, blockPos1: $BlockPos$$Type): void
}
}

declare module "com.simibubi.create.content.trains.track.TrackMaterial$TrackType" {
import { $ResourceLocation, $ResourceLocation$$Type } from "net.minecraft.resources.ResourceLocation"
import { $TrackMaterial$TrackType$TrackBlockFactory$$Type } from "com.simibubi.create.content.trains.track.TrackMaterial$TrackType$TrackBlockFactory"

export class $TrackMaterial$TrackType {
static readonly "STANDARD": $TrackMaterial$TrackType
readonly "id": $ResourceLocation

constructor(resourceLocation0: $ResourceLocation$$Type, trackBlockFactory1: $TrackMaterial$TrackType$TrackBlockFactory$$Type)

}
}

declare module "com.simibubi.create.content.trains.bogey.BogeyStyle$SizeRenderer" {
import { $BogeyVisualizer, $BogeyVisualizer$$Type } from "com.simibubi.create.content.trains.bogey.BogeyVisualizer"
import { $Record } from "java.lang.Record"
import { $BogeyRenderer, $BogeyRenderer$$Type } from "com.simibubi.create.content.trains.bogey.BogeyRenderer"

export class $BogeyStyle$SizeRenderer extends $Record {
constructor(renderer: $BogeyRenderer$$Type, visualizer: $BogeyVisualizer$$Type)

public "renderer"(): $BogeyRenderer
public "visualizer"(): $BogeyVisualizer
}
}

declare module "com.simibubi.create.api.contraption.storage.fluid.MountedFluidStorageWrapper" {
import { $ImmutableMap, $ImmutableMap$$Type } from "com.google.common.collect.ImmutableMap"
import { $BlockPos, $BlockPos$$Type } from "net.minecraft.core.BlockPos"
import { $CombinedTankWrapper } from "com.simibubi.create.foundation.fluid.CombinedTankWrapper"
import { $MountedFluidStorage, $MountedFluidStorage$$Type } from "com.simibubi.create.api.contraption.storage.fluid.MountedFluidStorage"

export class $MountedFluidStorageWrapper extends $CombinedTankWrapper {
readonly "storages": $ImmutableMap<$BlockPos, $MountedFluidStorage>

constructor(immutableMap0: $ImmutableMap$$Type<$BlockPos$$Type, $MountedFluidStorage$$Type>)

}
}

declare module "com.simibubi.create.content.contraptions.ContraptionWorld" {
import { $ExplosionJS } from "dev.latvian.mods.kubejs.level.ExplosionJS"
import { $ResourceLocation } from "net.minecraft.resources.ResourceLocation"
import { $LevelHeightAccessor } from "net.minecraft.world.level.LevelHeightAccessor"
import { $AABB$$Type } from "net.minecraft.world.phys.AABB"
import { $LivingEntity, $LivingEntity$$Type } from "net.minecraft.world.entity.LivingEntity"
import { $Direction$$Type } from "net.minecraft.core.Direction"
import { $ParticleOptions$$Type } from "net.minecraft.core.particles.ParticleOptions"
import { $BiFunction$$Type } from "java.util.function.BiFunction"
import { $Registry } from "net.minecraft.core.Registry"
import { $ClipBlockStateContext$$Type } from "net.minecraft.world.level.ClipBlockStateContext"
import { $BlockContainerJS } from "dev.latvian.mods.kubejs.level.BlockContainerJS"
import { $TargetingConditions$$Type } from "net.minecraft.world.entity.ai.targeting.TargetingConditions"
import { $Holder } from "net.minecraft.core.Holder"
import { $Map } from "java.util.Map"
import { $Contraption$$Type } from "com.simibubi.create.content.contraptions.Contraption"
import { $LightLayer$$Type } from "net.minecraft.world.level.LightLayer"
import { $GameEvent$Context$$Type } from "net.minecraft.world.level.gameevent.GameEvent$Context"
import { $TrackedDataRegistry$$Type } from "dev.corgitaco.dataanchor.data.registry.TrackedDataRegistry"
import { $Predicate$$Type } from "java.util.function.Predicate"
import { $Collection, $Collection$$Type } from "java.util.Collection"
import { $BlockHitResult } from "net.minecraft.world.phys.BlockHitResult"
import { $UUID$$Type } from "java.util.UUID"
import { $BlockEntity, $BlockEntity$$Type } from "net.minecraft.world.level.block.entity.BlockEntity"
import { $Capability$$Type } from "net.minecraftforge.common.capabilities.Capability"
import { $ChunkAccess } from "net.minecraft.world.level.chunk.ChunkAccess"
import { $Player, $Player$$Type } from "net.minecraft.world.entity.player.Player"
import { $List, $List$$Type } from "java.util.List"
import { $ObjectOpenCustomHashSet } from "it.unimi.dsi.fastutil.objects.ObjectOpenCustomHashSet"
import { $Stream } from "java.util.stream.Stream"
import { $WrappedLevel } from "net.createmod.catnip.levelWrappers.WrappedLevel"
import { $BlockPos, $BlockPos$$Type } from "net.minecraft.core.BlockPos"
import { $BlockEntityType$$Type } from "net.minecraft.world.level.block.entity.BlockEntityType"
import { $SoundEvent$$Type } from "net.minecraft.sounds.SoundEvent"
import { $Optional } from "java.util.Optional"
import { $Heightmap$Types$$Type } from "net.minecraft.world.level.levelgen.Heightmap$Types"
import { $Level, $Level$$Type } from "net.minecraft.world.level.Level"
import { $VoxelShape, $VoxelShape$$Type } from "net.minecraft.world.phys.shapes.VoxelShape"
import { $SoundSource$$Type } from "net.minecraft.sounds.SoundSource"
import { $CollisionContext$$Type } from "net.minecraft.world.phys.shapes.CollisionContext"
import { $EntityType$$Type } from "net.minecraft.world.entity.EntityType"
import { $BlockState, $BlockState$$Type } from "net.minecraft.world.level.block.state.BlockState"
import { $GameEvent$$Type } from "net.minecraft.world.level.gameevent.GameEvent"
import { $Biome } from "net.minecraft.world.level.biome.Biome"
import { $Supplier$$Type } from "java.util.function.Supplier"
import { $Function$$Type } from "java.util.function.Function"
import { $Trackable } from "dev.uncandango.alltheleaks.mixin.Trackable"
import { $Iterable } from "java.lang.Iterable"
import { $LazyOptional } from "net.minecraftforge.common.util.LazyOptional"
import { $TrackedData, $TrackedData$$Type } from "dev.corgitaco.dataanchor.data.TrackedData"
import { $ColorResolver$$Type } from "net.minecraft.world.level.ColorResolver"
import { $ClipContext$$Type } from "net.minecraft.world.level.ClipContext"
import { $Fluid$$Type } from "net.minecraft.world.level.material.Fluid"
import { $WeakReference } from "java.lang.ref.WeakReference"
import { $Difficulty } from "net.minecraft.world.Difficulty"
import { $Component, $Component$$Type } from "net.minecraft.network.chat.Component"
import { $PartEntity } from "net.minecraftforge.entity.PartEntity"
import { $HolderLookup } from "net.minecraft.core.HolderLookup"
import { $ModelDataManager } from "net.minecraftforge.client.model.data.ModelDataManager"
import { $FireworksJS$$Type } from "dev.latvian.mods.kubejs.level.FireworksJS"
import { $ResourceKey$$Type } from "net.minecraft.resources.ResourceKey"
import { $ScriptType } from "dev.latvian.mods.kubejs.script.ScriptType"
import { $TickPriority$$Type } from "net.minecraft.world.ticks.TickPriority"
import { $EntityArrayList } from "dev.latvian.mods.kubejs.player.EntityArrayList"
import { $Entity, $Entity$$Type } from "net.minecraft.world.entity.Entity"
import { $TrackedDataContainer } from "dev.corgitaco.dataanchor.data.TrackedDataContainer"
import { $Vec3, $Vec3$$Type } from "net.minecraft.world.phys.Vec3"
import { $Block$$Type } from "net.minecraft.world.level.block.Block"
import { $Class, $Class$$Type } from "java.lang.Class"

export class $ContraptionWorld extends $WrappedLevel {
constructor(level0: $Level$$Type, contraption1: $Contraption$$Type)

public "blockUpdated"(blockPos0: $BlockPos$$Type, block1: $Block$$Type): void
public "canSeeSky"(blockPos0: $BlockPos$$Type): boolean
public "canSeeSkyFromBelowWater"(blockPos0: $BlockPos$$Type): boolean
public static "clearNullReferences"(): void
public "clip"(clipContext0: $ClipContext$$Type): $BlockHitResult
public "clipWithInteractionOverride"(vec30: $Vec3$$Type, vec31: $Vec3$$Type, blockPos2: $BlockPos$$Type, voxelShape3: $VoxelShape$$Type, blockState4: $BlockState$$Type): $BlockHitResult
public "collidesWithSuffocatingBlock"(entity0: $Entity$$Type, aABB1: $AABB$$Type): boolean
public "containsAnyLiquid"(aABB0: $AABB$$Type): boolean
public static "create"(int0: integer, int1: integer): $LevelHeightAccessor
public "createEntity"(type: $EntityType$$Type<any>): $Entity
public "createEntityList"(entities: $Collection$$Type<$Entity$$Type>): $EntityArrayList
public "createExplosion"(x: double, y: double, z: double): $ExplosionJS
public static "createWeakRefBasedSet"(): $ObjectOpenCustomHashSet<$WeakReference<$Trackable>>
public "dayTime"(): long
public "destroyBlock"(blockPos0: $BlockPos$$Type, boolean1: boolean): boolean
public "destroyBlock"(blockPos0: $BlockPos$$Type, boolean1: boolean, entity2: $Entity$$Type): boolean
public "findFreePosition"(entity0: $Entity$$Type, voxelShape1: $VoxelShape$$Type, vec32: $Vec3$$Type, double3: double, double4: double, double5: double): $Optional<$Vec3>
public "findSupportingBlock"(entity0: $Entity$$Type, aABB1: $AABB$$Type): $Optional<$BlockPos>
public "gameEvent"(gameEvent0: $GameEvent$$Type, blockPos1: $BlockPos$$Type, context2: $GameEvent$Context$$Type): void
public "gameEvent"(entity0: $Entity$$Type, gameEvent1: $GameEvent$$Type, vec32: $Vec3$$Type): void
public static "getAllLoadedEntities"(level: $Level$$Type): $Iterable<$Entity>
public "getBestNeighborSignal"(blockPos0: $BlockPos$$Type): integer
public "getBiome"(blockPos0: $BlockPos$$Type): $Holder<$Biome>
public "getBlock"(x: integer, y: integer, z: integer): $BlockContainerJS
public "getBlock"(blockEntity: $BlockEntity$$Type): $BlockContainerJS
public "getBlock"(pos: $BlockPos$$Type): $BlockContainerJS
public "getBlockCollisions"(entity0: $Entity$$Type, aABB1: $AABB$$Type): $Iterable<$VoxelShape>
public "getBlockEntity"<T extends $BlockEntity>(blockPos0: $BlockPos$$Type, blockEntityType1: $BlockEntityType$$Type<T>): $Optional<T>
public "getBlockFloorHeight"(voxelShape0: $VoxelShape$$Type, supplier1: $Supplier$$Type<$VoxelShape>): double
public "getBlockFloorHeight"(blockPos0: $BlockPos$$Type): double
public "getBlockStates"(aABB0: $AABB$$Type): $Stream<$BlockState>
public "getBlockStatesIfLoaded"(aABB0: $AABB$$Type): $Stream<$BlockState>
public "getBlockTint"(blockPos0: $BlockPos$$Type, colorResolver1: $ColorResolver$$Type): integer
public "getBrightness"(lightLayer0: $LightLayer$$Type, blockPos1: $BlockPos$$Type): integer
public "getCapability"<T>(capability0: $Capability$$Type<T>): $LazyOptional<T>
public "getCollisions"(entity0: $Entity$$Type, aABB1: $AABB$$Type): $Iterable<$VoxelShape>
public "getControlInputSignal"(blockPos0: $BlockPos$$Type, direction1: $Direction$$Type, boolean2: boolean): integer
public "getDifficulty"(): $Difficulty
public "getDimension"(): $ResourceLocation
public "getDirectSignal"(blockPos0: $BlockPos$$Type, direction1: $Direction$$Type): integer
public "getDirectSignalTo"(blockPos0: $BlockPos$$Type): integer
public "getDisplayName"(): $Component
public "getEntities"(): $EntityArrayList
public "getEntities"(entity0: $Entity$$Type, aABB1: $AABB$$Type): $List<$Entity>
public "getEntitiesOfClass"<T extends $Entity>(class0: $Class$$Type<T>, aABB1: $AABB$$Type): $List<T>
public "getEntitiesOfClass"<T extends $Entity>(class0: $Class$$Type<T>, aABB1: $AABB$$Type, predicate2: $Predicate$$Type<T>): $List<T>
public "getEntitiesWithin"(aabb: $AABB$$Type): $EntityArrayList
public "getEntityCollisions"(entity0: $Entity$$Type, aABB1: $AABB$$Type): $List<$VoxelShape>
public "getExistingBlockEntity"(blockPos0: $BlockPos$$Type): $BlockEntity
public "getHeightmapPos"(types0: $Heightmap$Types$$Type, blockPos1: $BlockPos$$Type): $BlockPos
public "getLightEmission"(blockPos0: $BlockPos$$Type): integer
/** @deprecated */
public "getLightLevelDependentMagicValue"(blockPos0: $BlockPos$$Type): float
public "getLoadedChunk"(int0: integer, int1: integer): $ChunkAccess
public "getMaxLightLevel"(): integer
public "getMaxLocalRawBrightness"(blockPos0: $BlockPos$$Type, int1: integer): integer
public "getModelDataManager"(): $ModelDataManager
public "getMoonBrightness"(): float
public "getMoonPhase"(): integer
public "getName"(): $Component
public "getNearbyEntities"<T extends $LivingEntity>(class0: $Class$$Type<T>, targetingConditions1: $TargetingConditions$$Type, livingEntity2: $LivingEntity$$Type, aABB3: $AABB$$Type): $List<T>
public "getNearbyPlayers"(targetingConditions0: $TargetingConditions$$Type, livingEntity1: $LivingEntity$$Type, aABB2: $AABB$$Type): $List<$Player>
public "getNearestEntity"<T extends $LivingEntity>(list0: $List$$Type<T>, targetingConditions1: $TargetingConditions$$Type, livingEntity2: $LivingEntity$$Type, double3: double, double4: double, double5: double): T
public "getNearestEntity"<T extends $LivingEntity>(class0: $Class$$Type<T>, targetingConditions1: $TargetingConditions$$Type, livingEntity2: $LivingEntity$$Type, double3: double, double4: double, double5: double, aABB6: $AABB$$Type): T
public "getNearestPlayer"(double0: double, double1: double, double2: double, double3: double, predicate4: $Predicate$$Type<$Entity$$Type>): $Player
public "getNearestPlayer"(entity0: $Entity$$Type, double1: double): $Player
public "getNearestPlayer"(double0: double, double1: double, double2: double, double3: double, boolean4: boolean): $Player
public "getNearestPlayer"(targetingConditions0: $TargetingConditions$$Type, livingEntity1: $LivingEntity$$Type): $Player
public "getNearestPlayer"(targetingConditions0: $TargetingConditions$$Type, livingEntity1: $LivingEntity$$Type, double2: double, double3: double, double4: double): $Player
public "getNearestPlayer"(targetingConditions0: $TargetingConditions$$Type, double1: double, double2: double, double3: double): $Player
public "getNoiseBiome"(int0: integer, int1: integer, int2: integer): $Holder<$Biome>
public "getPartEntities"(): $Collection<$PartEntity<any>>
public "getPathfindingCostFromLightLevels"(blockPos0: $BlockPos$$Type): float
public "getPlayerByUUID"(uUID0: $UUID$$Type): $Player
public "getPlayers"(): $EntityArrayList
public "getRawBrightness"(blockPos0: $BlockPos$$Type, int1: integer): integer
public "getShade"(float0: float, float1: float, float2: float, boolean3: boolean): float
public "getSide"(): $ScriptType
public "getSignal"(blockPos0: $BlockPos$$Type, direction1: $Direction$$Type): integer
public static "getSummary"(): $Map<$Class<any>, $Map<$Class<any>, long>>
public "getTimeOfDay"(float0: float): float
public "hasChunk"(int0: integer, int1: integer): boolean
/** @deprecated */
public "hasChunkAt"(blockPos0: $BlockPos$$Type): boolean
/** @deprecated */
public "hasChunkAt"(int0: integer, int1: integer): boolean
/** @deprecated */
public "hasChunksAt"(int0: integer, int1: integer, int2: integer, int3: integer, int4: integer, int5: integer): boolean
/** @deprecated */
public "hasChunksAt"(blockPos0: $BlockPos$$Type, blockPos1: $BlockPos$$Type): boolean
/** @deprecated */
public "hasChunksAt"(int0: integer, int1: integer, int2: integer, int3: integer): boolean
public "hasNearbyAlivePlayer"(double0: double, double1: double, double2: double, double3: double): boolean
public "hasNeighborSignal"(blockPos0: $BlockPos$$Type): boolean
public "hasSignal"(blockPos0: $BlockPos$$Type, direction1: $Direction$$Type): boolean
public "holderLookup"<T>(resourceKey0: $ResourceKey$$Type<$Registry<T>>): $HolderLookup<T>
public "isAreaLoaded"(blockPos0: $BlockPos$$Type, int1: integer): boolean
public "isBlockInLine"(clipBlockStateContext0: $ClipBlockStateContext$$Type): $BlockHitResult
public "isEmptyBlock"(blockPos0: $BlockPos$$Type): boolean
public "isOverworld"(): boolean
public "isUnobstructed"(entity0: $Entity$$Type, voxelShape1: $VoxelShape$$Type): boolean
public "isUnobstructed"(blockState0: $BlockState$$Type, blockPos1: $BlockPos$$Type, collisionContext2: $CollisionContext$$Type): boolean
public "isUnobstructed"(entity0: $Entity$$Type): boolean
public "isWaterAt"(blockPos0: $BlockPos$$Type): boolean
public "levelEvent"(int0: integer, blockPos1: $BlockPos$$Type, int2: integer): void
public static "makeBasicContainer"<O, T extends $TrackedData<O>>(registry: $TrackedDataRegistry$$Type<O, T>, o: O, isClient: boolean): $TrackedDataContainer<O, T>
public static "makeBasicContainer"<O, T extends $TrackedData<O>>(registry: $TrackedDataRegistry$$Type<O, T>, o: O, isClient: boolean, lazyLoad: boolean): $TrackedDataContainer<O, T>
public "noCollision"(entity0: $Entity$$Type): boolean
public "noCollision"(aABB0: $AABB$$Type): boolean
public "playSound"(player0: $Player$$Type, blockPos1: $BlockPos$$Type, soundEvent2: $SoundEvent$$Type, soundSource3: $SoundSource$$Type): void
public "runCommand"(command: string): integer
public "runCommandSilent"(command: string): integer
public "scheduleTick"(blockPos0: $BlockPos$$Type, block1: $Block$$Type, int2: integer, tickPriority3: $TickPriority$$Type): void
public "scheduleTick"(blockPos0: $BlockPos$$Type, block1: $Block$$Type, int2: integer): void
public "scheduleTick"(blockPos0: $BlockPos$$Type, fluid1: $Fluid$$Type, int2: integer, tickPriority3: $TickPriority$$Type): void
public "scheduleTick"(blockPos0: $BlockPos$$Type, fluid1: $Fluid$$Type, int2: integer): void
public "self"(): $Level
public "setStatusMessage"(message: $Component$$Type): void
public "spawnFireworks"(x: double, y: double, z: double, f: $FireworksJS$$Type): void
public "spawnParticles"(options: $ParticleOptions$$Type, overrideLimiter: boolean, x: double, y: double, z: double, vx: double, vy: double, vz: double, count: integer, speed: double): void
public static "startTracking"(object0: any): void
public "startTracking"(): void
public "tell"(message: $Component$$Type): void
public static "traverseBlocks"<T, C>(vec30: $Vec3$$Type, vec31: $Vec3$$Type, c2: C, biFunction3: $BiFunction$$Type<C, $BlockPos$$Type, T>, function4: $Function$$Type<C, T>): T
public "wrap"(): $WeakReference<$Trackable>
get "difficulty"(): $Difficulty
get "dimension"(): $ResourceLocation
get "displayName"(): $Component
get "entities"(): $EntityArrayList
get "maxLightLevel"(): integer
get "modelDataManager"(): $ModelDataManager
get "moonBrightness"(): float
get "moonPhase"(): integer
get "name"(): $Component
get "partEntities"(): $Collection<$PartEntity<any>>
get "players"(): $EntityArrayList
get "side"(): $ScriptType
get "overworld"(): boolean
set "statusMessage"(value: $Component$$Type)
}
}

declare module "com.simibubi.create.foundation.item.SmartInventory" {
import { $IItemHandler } from "net.minecraftforge.items.IItemHandler"
import { $Predicate$$Type } from "java.util.function.Predicate"
import { $Item$$Type } from "net.minecraft.world.item.Item"
import { $Set$$Type } from "java.util.Set"
import { $BlockEntity$$Type } from "net.minecraft.world.level.block.entity.BlockEntity"
import { $Ingredient$$Type } from "net.minecraft.world.item.crafting.Ingredient"
import { $Player$$Type } from "net.minecraft.world.entity.player.Player"
import { $Consumer$$Type } from "java.util.function.Consumer"
import { $BiPredicate$$Type } from "java.util.function.BiPredicate"
import { $BlockContainerJS } from "dev.latvian.mods.kubejs.level.BlockContainerJS"
import { $List } from "java.util.List"
import { $Container, $Container$$Type } from "net.minecraft.world.Container"
import { $CompoundTag, $CompoundTag$$Type } from "net.minecraft.nbt.CompoundTag"
import { $IItemHandlerModifiable, $IItemHandlerModifiable$$Type } from "net.minecraftforge.items.IItemHandlerModifiable"
import { $ItemStack, $ItemStack$$Type } from "net.minecraft.world.item.ItemStack"
import { $Level$$Type } from "net.minecraft.world.level.Level"
import { $RecipeWrapper } from "net.minecraftforge.items.wrapper.RecipeWrapper"
import { $SyncedBlockEntity$$Type } from "com.simibubi.create.foundation.blockEntity.SyncedBlockEntity"
import { $INBTSerializable } from "net.minecraftforge.common.util.INBTSerializable"

export class $SmartInventory extends $RecipeWrapper implements $IItemHandlerModifiable, $INBTSerializable<$CompoundTag> {
constructor(int0: integer, syncedBlockEntity1: $SyncedBlockEntity$$Type, biPredicate2: $BiPredicate$$Type<integer, $ItemStack$$Type>)
constructor(int0: integer, syncedBlockEntity1: $SyncedBlockEntity$$Type)
constructor(int0: integer, syncedBlockEntity1: $SyncedBlockEntity$$Type, int2: integer, boolean3: boolean)
constructor(int0: integer, syncedBlockEntity1: $SyncedBlockEntity$$Type, int2: integer, boolean3: boolean, biPredicate4: $BiPredicate$$Type<integer, $ItemStack$$Type>)
constructor(iItemHandlerModifiable0: $IItemHandlerModifiable$$Type, int1: integer, boolean2: boolean)

public "allowExtraction"(): $SmartInventory
public "allowInsertion"(): $SmartInventory
public "asContainer"(): $Container
public "canTakeItem"(container0: $Container$$Type, int1: integer, itemStack2: $ItemStack$$Type): boolean
public "clear"(): void
public "clear"(ingredient: $Ingredient$$Type): void
public "count"(): integer
public "count"(ingredient: $Ingredient$$Type): integer
public "countItem"(item0: $Item$$Type): integer
public "countNonEmpty"(ingredient: $Ingredient$$Type): integer
public "countNonEmpty"(): integer
public "deserializeNBT"(compoundTag0: $CompoundTag$$Type): void
public "extractItem"(int0: integer, int1: integer, boolean2: boolean): $ItemStack
public "extractItem"(i: integer, i1: integer, b: boolean): $ItemStack
public "find"(): integer
public "find"(ingredient: $Ingredient$$Type): integer
public "forbidExtraction"(): $SmartInventory
public "forbidInsertion"(): $SmartInventory
public "getAllItems"(): $List<$ItemStack>
public "getBlock"(level: $Level$$Type): $BlockContainerJS
public "getHeight"(): integer
public "getSlotLimit"(int0: integer): integer
public "getSlotLimit"(i: integer): integer
public "getSlots"(): integer
public "getSlots"(): integer
public "getStackInSlot"(int0: integer): $ItemStack
public "getStackInSlot"(i: integer): $ItemStack
public "getStackLimit"(int0: integer, itemStack1: $ItemStack$$Type): integer
public "getWidth"(): integer
public "hasAnyMatching"(predicate0: $Predicate$$Type<$ItemStack$$Type>): boolean
public "hasAnyOf"(set0: $Set$$Type<$Item$$Type>): boolean
public "insertItem"(int0: integer, itemStack1: $ItemStack$$Type, boolean2: boolean): $ItemStack
public "insertItem"(i: integer, itemStack: $ItemStack$$Type, b: boolean): $ItemStack
public "insertItem"(stack: $ItemStack$$Type, simulate: boolean): $ItemStack
public "isEmpty"(): boolean
public "isItemValid"(int0: integer, itemStack1: $ItemStack$$Type): boolean
public "isItemValid"(i: integer, itemStack: $ItemStack$$Type): boolean
public "isMutable"(): boolean
public "kjs$self"(): $IItemHandler
public "serializeNBT"(): $CompoundTag
public "setChanged"(): void
public "setStackInSlot"(int0: integer, itemStack1: $ItemStack$$Type): void
public "setStackInSlot"(slot: integer, stack: $ItemStack$$Type): void
public static "stillValidBlockEntity"(blockEntity0: $BlockEntity$$Type, player1: $Player$$Type): boolean
public static "stillValidBlockEntity"(blockEntity0: $BlockEntity$$Type, player1: $Player$$Type, double2: double): boolean
public static "stillValidBlockEntity"(blockEntity0: $BlockEntity$$Type, player1: $Player$$Type, int2: integer): boolean
public static "tryClear"(object0: any): void
public "whenContentsChanged"(consumer0: $Consumer$$Type<integer>): $SmartInventory
public "withMaxStackSize"(int0: integer): $SmartInventory
get "allItems"(): $List<$ItemStack>
get "height"(): integer
get "slots"(): integer
get "slots"(): integer
get "width"(): integer
get "empty"(): boolean
get "mutable"(): boolean
}
}

declare module "com.simibubi.create.foundation.mixin.accessor.MouseHandlerAccessor" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $MouseHandlerAccessor {
"create$setXPos"(double0: double): void
"create$setYPos"(double0: double): void
}

export namespace $MouseHandlerAccessor {
const probejs$$marker: never
}
export abstract class $MouseHandlerAccessor$$Static implements $MouseHandlerAccessor {
}
}

declare module "com.simibubi.create.content.trains.station.GlobalStation" {
import { $StationEditPacket } from "com.simibubi.create.content.trains.station.StationEditPacket"
import { $ILimitedGlobalStation } from "com.railwayteam.railways.mixin_interfaces.ILimitedGlobalStation"
import { $BlockPos, $BlockPos$$Type } from "net.minecraft.core.BlockPos"
import { $Map, $Map$$Type } from "java.util.Map"
import { $Train, $Train$$Type } from "com.simibubi.create.content.trains.entity.Train"
import { $GlobalPackagePort, $GlobalPackagePort$$Type } from "com.simibubi.create.content.trains.station.GlobalPackagePort"
import { $TrackNode$$Type } from "com.simibubi.create.content.trains.graph.TrackNode"
import { $SingleBlockEntityEdgePoint } from "com.simibubi.create.content.trains.signal.SingleBlockEntityEdgePoint"
import { $WeakReference, $WeakReference$$Type } from "java.lang.ref.WeakReference"

export class $GlobalStation extends $SingleBlockEntityEdgePoint implements $ILimitedGlobalStation {
constructor()

public "canApproachFrom"(trackNode0: $TrackNode$$Type): boolean
public "cancelReservation"(train0: $Train$$Type): void
public "getDisablingTrain"(): $Train
public "getImminentTrain"(): $Train
public "getNearestTrain"(): $Train
public "getPresentTrain"(): $Train
public "isLimitEnabled"(): boolean
public "isStationEnabled"(): boolean
public static "makeLimitEnabledPacket"(pos: $BlockPos$$Type, limitEnabled: boolean): $StationEditPacket
public "orDisablingTrain"(before: $Train$$Type, except: $Train$$Type): $Train
public "reserveFor"(train0: $Train$$Type): void
public "runMailTransfer"(): void
public "setLimitEnabled"(limitEnabled: boolean): void
public "trainDeparted"(train0: $Train$$Type): void
get "assembling"(): boolean
set "assembling"(value: boolean)
get "connectedPorts"(): $Map<$BlockPos, $GlobalPackagePort>
set "connectedPorts"(value: $Map$$Type<$BlockPos$$Type, $GlobalPackagePort$$Type>)
get "name"(): string
set "name"(value: string)
get "nearestTrain"(): $WeakReference<$Train>
set "nearestTrain"(value: $WeakReference$$Type<$Train$$Type>)
get "disablingTrain"(): $Train
get "imminentTrain"(): $Train
get "presentTrain"(): $Train
get "limitEnabled"(): boolean
get "stationEnabled"(): boolean
set "limitEnabled"(value: boolean)
}
}

declare module "com.simibubi.create.foundation.mixin.accessor.ServerLevelAccessor" {
import { $EntityTickList } from "net.minecraft.world.level.entity.EntityTickList"

export interface $ServerLevelAccessor {
"create$getEntityTickList"(): $EntityTickList
}

export namespace $ServerLevelAccessor {
const probejs$$marker: never
}
export abstract class $ServerLevelAccessor$$Static implements $ServerLevelAccessor {
}
}

declare module "com.simibubi.create.content.trains.entity.TravellingPoint" {
import { $TravellingPoint$IPortalListener, $TravellingPoint$IPortalListener$$Type } from "com.simibubi.create.content.trains.entity.TravellingPoint$IPortalListener"
import { $TravellingPoint$SteerDirection$$Type } from "com.simibubi.create.content.trains.entity.TravellingPoint$SteerDirection"
import { $TravellingPoint$IEdgePointListener, $TravellingPoint$IEdgePointListener$$Type } from "com.simibubi.create.content.trains.entity.TravellingPoint$IEdgePointListener"
import { $TravellingPoint$ITurnListener, $TravellingPoint$ITurnListener$$Type } from "com.simibubi.create.content.trains.entity.TravellingPoint$ITurnListener"
import { $Consumer$$Type } from "java.util.function.Consumer"
import { $List$$Type } from "java.util.List"
import { $CompoundTag, $CompoundTag$$Type } from "net.minecraft.nbt.CompoundTag"
import { $TrackEdge, $TrackEdge$$Type } from "com.simibubi.create.content.trains.graph.TrackEdge"
import { $TrackGraphLocation$$Type } from "com.simibubi.create.content.trains.graph.TrackGraphLocation"
import { $TravellingPoint$ITrackSelector, $TravellingPoint$ITrackSelector$$Type } from "com.simibubi.create.content.trains.entity.TravellingPoint$ITrackSelector"
import { $Vec3, $Vec3$$Type } from "net.minecraft.world.phys.Vec3"
import { $TrackGraph$$Type } from "com.simibubi.create.content.trains.graph.TrackGraph"
import { $TrackNode, $TrackNode$$Type } from "com.simibubi.create.content.trains.graph.TrackNode"
import { $DimensionPalette$$Type } from "com.simibubi.create.content.trains.graph.DimensionPalette"

export class $TravellingPoint {
constructor(trackNode0: $TrackNode$$Type, trackNode1: $TrackNode$$Type, trackEdge2: $TrackEdge$$Type, double3: double, boolean4: boolean)
constructor()

public "follow"(travellingPoint0: $TravellingPoint$$Type): $TravellingPoint$ITrackSelector
public "follow"(travellingPoint0: $TravellingPoint$$Type, consumer1: $Consumer$$Type<boolean>): $TravellingPoint$ITrackSelector
public "getPosition"(trackGraph0: $TrackGraph$$Type, boolean1: boolean): $Vec3
public "getPosition"(trackGraph0: $TrackGraph$$Type): $Vec3
public "getPositionWithOffset"(trackGraph0: $TrackGraph$$Type, double1: double, boolean2: boolean): $Vec3
public "ignoreEdgePoints"(): $TravellingPoint$IEdgePointListener
public "ignorePortals"(): $TravellingPoint$IPortalListener
public "ignoreTurns"(): $TravellingPoint$ITurnListener
public "migrateTo"(list0: $List$$Type<$TrackGraphLocation$$Type>): void
public "random"(): $TravellingPoint$ITrackSelector
public static "read"(compoundTag0: $CompoundTag$$Type, trackGraph1: $TrackGraph$$Type, dimensionPalette2: $DimensionPalette$$Type): $TravellingPoint
public "reverse"(trackGraph0: $TrackGraph$$Type): void
public "steer"(steerDirection0: $TravellingPoint$SteerDirection$$Type, vec31: $Vec3$$Type): $TravellingPoint$ITrackSelector
public "travel"(trackGraph0: $TrackGraph$$Type, double1: double, iTrackSelector2: $TravellingPoint$ITrackSelector$$Type): double
public "travel"(trackGraph0: $TrackGraph$$Type, double1: double, iTrackSelector2: $TravellingPoint$ITrackSelector$$Type, iEdgePointListener3: $TravellingPoint$IEdgePointListener$$Type): double
public "travel"(trackGraph0: $TrackGraph$$Type, double1: double, iTrackSelector2: $TravellingPoint$ITrackSelector$$Type, iEdgePointListener3: $TravellingPoint$IEdgePointListener$$Type, iTurnListener4: $TravellingPoint$ITurnListener$$Type): double
public "travel"(trackGraph0: $TrackGraph$$Type, double1: double, iTrackSelector2: $TravellingPoint$ITrackSelector$$Type, iEdgePointListener3: $TravellingPoint$IEdgePointListener$$Type, iTurnListener4: $TravellingPoint$ITurnListener$$Type, iPortalListener5: $TravellingPoint$IPortalListener$$Type): double
public "write"(dimensionPalette0: $DimensionPalette$$Type): $CompoundTag
get "blocked"(): boolean
set "blocked"(value: boolean)
get "edge"(): $TrackEdge
set "edge"(value: $TrackEdge$$Type)
get "node1"(): $TrackNode
set "node1"(value: $TrackNode$$Type)
get "node2"(): $TrackNode
set "node2"(value: $TrackNode$$Type)
get "position"(): double
set "position"(value: double)
get "upsideDown"(): boolean
set "upsideDown"(value: boolean)
}
}

declare module "com.simibubi.create.content.trains.signal.SignalBlockEntity$OverlayState" {
import { $Enum } from "java.lang.Enum"

export class $SignalBlockEntity$OverlayState extends $Enum<$SignalBlockEntity$OverlayState> {
static readonly "DUAL": $SignalBlockEntity$OverlayState
static readonly "RENDER": $SignalBlockEntity$OverlayState
static readonly "SKIP": $SignalBlockEntity$OverlayState

public static "valueOf"(string0: string): $SignalBlockEntity$OverlayState
public static "values"(): $SignalBlockEntity$OverlayState[]
}
}

declare module "com.simibubi.create.content.trains.track.TrackBlockEntityTilt" {
import { $Vec3$$Type } from "net.minecraft.world.phys.Vec3"
import { $Optional, $Optional$$Type } from "java.util.Optional"
import { $BezierConnection, $BezierConnection$$Type } from "com.simibubi.create.content.trains.track.BezierConnection"
import { $TrackBlockEntity$$Type } from "com.simibubi.create.content.trains.track.TrackBlockEntity"
import { $ModelProperty } from "net.minecraftforge.client.model.data.ModelProperty"

export class $TrackBlockEntityTilt {
static readonly "ASCENDING_PROPERTY": $ModelProperty<double>

constructor(trackBlockEntity0: $TrackBlockEntity$$Type)

public "captureSmoothingHandles"(): void
public static "compareHandles"(vec30: $Vec3$$Type, vec31: $Vec3$$Type): boolean
public "getYOffsetForAxisEnd"(vec30: $Vec3$$Type): integer
public "restoreToOriginalCurve"(bezierConnection0: $BezierConnection$$Type): $BezierConnection
public "tryApplySmoothing"(): void
public "undoSmoothing"(): void
get "smoothingAngle"(): $Optional<double>
set "smoothingAngle"(value: $Optional$$Type<double>)
}
}

declare module "com.simibubi.create.content.trains.graph.DimensionPalette" {
import { $CompoundTag$$Type } from "net.minecraft.nbt.CompoundTag"
import { $Level } from "net.minecraft.world.level.Level"
import { $FriendlyByteBuf$$Type } from "net.minecraft.network.FriendlyByteBuf"
import { $ResourceKey, $ResourceKey$$Type } from "net.minecraft.resources.ResourceKey"

export class $DimensionPalette {
constructor()

public "decode"(int0: integer): $ResourceKey<$Level>
public "encode"(resourceKey0: $ResourceKey$$Type<$Level>): integer
public static "read"(compoundTag0: $CompoundTag$$Type): $DimensionPalette
public static "receive"(friendlyByteBuf0: $FriendlyByteBuf$$Type): $DimensionPalette
public "send"(friendlyByteBuf0: $FriendlyByteBuf$$Type): void
public "write"(compoundTag0: $CompoundTag$$Type): void
}
}

declare module "com.simibubi.create.content.trains.station.StationEditPacket" {
import { $ILimited } from "com.railwayteam.railways.mixin_interfaces.ILimited"
import { $StationBlockEntity } from "com.simibubi.create.content.trains.station.StationBlockEntity"
import { $BlockPos$$Type } from "net.minecraft.core.BlockPos"
import { $FriendlyByteBuf$$Type } from "net.minecraft.network.FriendlyByteBuf"
import { $DoorControl$$Type } from "com.simibubi.create.content.decoration.slidingDoor.DoorControl"
import { $BlockEntityConfigurationPacket } from "com.simibubi.create.foundation.networking.BlockEntityConfigurationPacket"

export class $StationEditPacket extends $BlockEntityConfigurationPacket<$StationBlockEntity> implements $ILimited {
constructor(blockPos0: $BlockPos$$Type)
constructor(friendlyByteBuf0: $FriendlyByteBuf$$Type)

public static "configure"(blockPos0: $BlockPos$$Type, boolean1: boolean, string2: string, doorControl3: $DoorControl$$Type): $StationEditPacket
public static "dropSchedule"(blockPos0: $BlockPos$$Type): $StationEditPacket
public "isLimitEnabled"(): boolean
public static "makeLimitEnabledPacket"(pos: $BlockPos$$Type, limitEnabled: boolean): $StationEditPacket
public "setLimitEnabled"(limitEnabled: boolean): void
public static "tryAssemble"(blockPos0: $BlockPos$$Type): $StationEditPacket
public static "tryDisassemble"(blockPos0: $BlockPos$$Type): $StationEditPacket
get "limitEnabled"(): boolean
set "limitEnabled"(value: boolean)
}
}

declare module "com.simibubi.create.foundation.collision.Matrix3d" {
import { $Vec3, $Vec3$$Type } from "net.minecraft.world.phys.Vec3"
import { $Matrix4f } from "org.joml.Matrix4f"

export class $Matrix3d {
constructor()

public "add"(matrix3d0: $Matrix3d$$Type): $Matrix3d
public "asIdentity"(): $Matrix3d
public "asXRotation"(float0: float): $Matrix3d
public "asYRotation"(float0: float): $Matrix3d
public "asZRotation"(float0: float): $Matrix3d
public "copy"(): $Matrix3d
/** Client only, do not use in server scripts */
public "getAsMatrix4f"(): $Matrix4f
public "multiply"(matrix3d0: $Matrix3d$$Type): $Matrix3d
public "scale"(double0: double): $Matrix3d
public "transform"(vec30: $Vec3$$Type): $Vec3
public "transpose"(): $Matrix3d
get "asMatrix4f"(): $Matrix4f
}
}

declare module "com.simibubi.create.foundation.gui.widget.TooltipArea" {
import { $List$$Type } from "java.util.List"
import { $Component, $Component$$Type } from "net.minecraft.network.chat.Component"
import { $GuiGraphics$$Type } from "net.minecraft.client.gui.GuiGraphics"
import { $AbstractWidget$$Type } from "net.minecraft.client.gui.components.AbstractWidget"
import { $ComponentPath } from "net.minecraft.client.gui.ComponentPath"
import { $AbstractSimiWidget } from "net.createmod.catnip.gui.widget.AbstractSimiWidget"

export class $TooltipArea extends $AbstractSimiWidget {
constructor(int0: integer, int1: integer, int2: integer, int3: integer)

public "charTyped"(char0: character, int1: integer): boolean
public "getCurrentFocusPath"(): $ComponentPath
public "getOriginalMessageFancyMenu"(): $Component
public "keyPressed"(int0: integer, int1: integer, int2: integer): boolean
public "keyReleased"(int0: integer, int1: integer, int2: integer): boolean
public "m_87963_"(guiGraphics0: $GuiGraphics$$Type, int1: integer, int2: integer, float3: float): void
public "mouseMoved"(double0: double, double1: double): void
public "mouseScrolled"(double0: double, double1: double, double2: double): boolean
public "renderCustomBackgroundFancyMenu"(abstractWidget0: $AbstractWidget$$Type, guiGraphics1: $GuiGraphics$$Type, int2: integer, int3: integer, int4: integer, int5: integer): boolean
public "setPosition"(int0: integer, int1: integer): void
public "stopCustomClickSoundFancyMenu"(): void
public "stopHoverSoundFancyMenu"(): void
public "tickFocusStateListenersFancyMenu"(boolean0: boolean): void
public "tickHoverOrFocusStateListenersFancyMenu"(boolean0: boolean): void
public "tickHoverStateListenersFancyMenu"(boolean0: boolean): void
public "withTooltip"(list0: $List$$Type<$Component$$Type>): $TooltipArea
get "currentFocusPath"(): $ComponentPath
get "originalMessageFancyMenu"(): $Component
}
}

declare module "com.simibubi.create.api.behaviour.movement.MovementBehaviour" {
import { $ActorVisual } from "com.simibubi.create.content.contraptions.render.ActorVisual"
import { $SimpleRegistry } from "com.simibubi.create.api.registry.SimpleRegistry"
import { $ContraptionMatrices$$Type } from "com.simibubi.create.content.contraptions.render.ContraptionMatrices"
import { $NonNullConsumer } from "com.tterrag.registrate.util.nullness.NonNullConsumer"
import { $VisualizationContext$$Type } from "dev.engine_room.flywheel.api.visualization.VisualizationContext"
import { $MovementContext$$Type } from "com.simibubi.create.content.contraptions.behaviour.MovementContext"
import { $Vec3, $Vec3$$Type } from "net.minecraft.world.phys.Vec3"
import { $BlockPos$$Type } from "net.minecraft.core.BlockPos"
import { $Block, $Block$$Type } from "net.minecraft.world.level.block.Block"
import { $ItemStack, $ItemStack$$Type } from "net.minecraft.world.item.ItemStack"
import { $MultiBufferSource$$Type } from "net.minecraft.client.renderer.MultiBufferSource"
import { $VirtualRenderWorld$$Type } from "com.simibubi.create.foundation.virtualWorld.VirtualRenderWorld"

export interface $MovementBehaviour {
"canBeDisabledVia"(movementContext0: $MovementContext$$Type): $ItemStack
"cancelStall"(movementContext0: $MovementContext$$Type): void
/** Client only, do not use in server scripts */
"createVisual"(visualizationContext0: $VisualizationContext$$Type, virtualRenderWorld1: $VirtualRenderWorld$$Type, movementContext2: $MovementContext$$Type): $ActorVisual
"disableBlockEntityRendering"(): boolean
"dropItem"(movementContext0: $MovementContext$$Type, itemStack1: $ItemStack$$Type): void
"getActiveAreaOffset"(movementContext0: $MovementContext$$Type): $Vec3
"isActive"(movementContext0: $MovementContext$$Type): boolean
"mustTickWhileDisabled"(): boolean
"onDisabledByControls"(movementContext0: $MovementContext$$Type): void
"onSpeedChanged"(movementContext0: $MovementContext$$Type, vec31: $Vec3$$Type, vec32: $Vec3$$Type): void
/** Client only, do not use in server scripts */
"renderInContraption"(movementContext0: $MovementContext$$Type, virtualRenderWorld1: $VirtualRenderWorld$$Type, contraptionMatrices2: $ContraptionMatrices$$Type, multiBufferSource3: $MultiBufferSource$$Type): void
"startMoving"(movementContext0: $MovementContext$$Type): void
"stopMoving"(movementContext0: $MovementContext$$Type): void
"tick"(movementContext0: $MovementContext$$Type): void
"visitNewPosition"(movementContext0: $MovementContext$$Type, blockPos1: $BlockPos$$Type): void
"writeExtraData"(movementContext0: $MovementContext$$Type): void
}

export namespace $MovementBehaviour {
const REGISTRY: $SimpleRegistry<$Block, $MovementBehaviour>
function movementBehaviour<B extends $Block>(movementBehaviour0: $MovementBehaviour$$Type): $NonNullConsumer<B>
}
export abstract class $MovementBehaviour$$Static implements $MovementBehaviour {
static readonly "REGISTRY": $SimpleRegistry<$Block, $MovementBehaviour>

static "movementBehaviour"<B extends $Block>(movementBehaviour0: $MovementBehaviour$$Type): $NonNullConsumer<B>
}
}

declare module "com.simibubi.create.content.trains.track.TrackShape" {
import { $List } from "java.util.List"
import { $Rotation$$Type } from "net.minecraft.world.level.block.Rotation"
import { $Enum, $Enum$$Type } from "java.lang.Enum"
import { $Vec3 } from "net.minecraft.world.phys.Vec3"
import { $Mirror$$Type } from "net.minecraft.world.level.block.Mirror"
import { $Direction$$Type } from "net.minecraft.core.Direction"
import { $StringRepresentable, $StringRepresentable$$Type } from "net.minecraft.util.StringRepresentable"
import { $StringRepresentable$EnumCodec } from "net.minecraft.util.StringRepresentable$EnumCodec"
import { $Keyable } from "com.mojang.serialization.Keyable"
import { $Supplier$$Type } from "java.util.function.Supplier"
import { $Function$$Type } from "java.util.function.Function"

export class $TrackShape extends $Enum<$TrackShape> implements $StringRepresentable {
static readonly "AE": $TrackShape
static readonly "AN": $TrackShape
static readonly "AS": $TrackShape
static readonly "AW": $TrackShape
static readonly "CR_D": $TrackShape
static readonly "CR_NDX": $TrackShape
static readonly "CR_NDZ": $TrackShape
static readonly "CR_O": $TrackShape
static readonly "CR_PDX": $TrackShape
static readonly "CR_PDZ": $TrackShape
static readonly "ND": $TrackShape
static readonly "NONE": $TrackShape
static readonly "PD": $TrackShape
static readonly "TE": $TrackShape
static readonly "TN": $TrackShape
static readonly "TS": $TrackShape
static readonly "TW": $TrackShape
static readonly "XO": $TrackShape
static readonly "ZO": $TrackShape

public static "asPortal"(direction0: $Direction$$Type): $TrackShape
public static "fromEnum"<E extends ($Enum<E> & $StringRepresentable)>(supplier0: $Supplier$$Type<E[]>): $StringRepresentable$EnumCodec<E>
public static "fromEnumWithMapping"<E extends ($Enum<E> & $StringRepresentable)>(supplier0: $Supplier$$Type<E[]>, function1: $Function$$Type<string, string>): $StringRepresentable$EnumCodec<E>
public "getAxes"(): $List<$Vec3>
public "getModel"(): string
public "getModelRotation"(): integer
public "getNormal"(): $Vec3
public "getSerializedName"(): string
public "isJunction"(): boolean
public "isPortal"(): boolean
public static "keys"(stringRepresentable0s: $StringRepresentable$$Type[]): $Keyable
public "mirror"(mirror0: $Mirror$$Type): $TrackShape
public "rotate"(rotation0: $Rotation$$Type): $TrackShape
public static "valueOf"(string0: string): $TrackShape
public static "values"(): $TrackShape[]
get "axes"(): $List<$Vec3>
get "model"(): string
get "modelRotation"(): integer
get "normal"(): $Vec3
get "serializedName"(): string
get "junction"(): boolean
get "portal"(): boolean
}
}

declare module "com.simibubi.create.content.contraptions.render.ClientContraption" {
import { $ClientContraption$RenderedBlocks } from "com.simibubi.create.content.contraptions.render.ClientContraption$RenderedBlocks"
import { $List } from "java.util.List"
import { $StructureTemplate$StructureBlockInfo$$Type } from "net.minecraft.world.level.levelgen.structure.templatesystem.StructureTemplate$StructureBlockInfo"
import { $BlockPos$$Type } from "net.minecraft.core.BlockPos"
import { $BitSet } from "java.util.BitSet"
import { $Contraption$$Type } from "com.simibubi.create.content.contraptions.Contraption"
import { $ModelData } from "net.minecraftforge.client.model.data.ModelData"
import { $BlockEntity } from "net.minecraft.world.level.block.entity.BlockEntity"
import { $ContraptionMatrices } from "com.simibubi.create.content.contraptions.render.ContraptionMatrices"
import { $Level$$Type } from "net.minecraft.world.level.Level"
import { $VirtualRenderWorld } from "com.simibubi.create.foundation.virtualWorld.VirtualRenderWorld"

export class $ClientContraption {
readonly "renderedBlockEntityView": $List<$BlockEntity>
readonly "scratchErroredBlockEntities": $BitSet
readonly "shouldRenderBlockEntities": $BitSet

constructor(contraption0: $Contraption$$Type)

public "childrenVersion"(): integer
public "getAndAdjustShouldRenderBlockEntities"(): $BitSet
public "getBlockEntity"(blockPos0: $BlockPos$$Type): $BlockEntity
public "getMatrices"(): $ContraptionMatrices
public "getModelData"(blockPos0: $BlockPos$$Type): $ModelData
public "getRenderLevel"(): $VirtualRenderWorld
public "getRenderedBlocks"(): $ClientContraption$RenderedBlocks
public "invalidateChildren"(): void
public "invalidateStructure"(): void
public "readBlockEntity"(level0: $Level$$Type, structureBlockInfo1: $StructureTemplate$StructureBlockInfo$$Type, boolean2: boolean): $BlockEntity
public "resetRenderLevel"(): void
public "structureVersion"(): integer
get "andAdjustShouldRenderBlockEntities"(): $BitSet
get "matrices"(): $ContraptionMatrices
get "renderLevel"(): $VirtualRenderWorld
get "renderedBlocks"(): $ClientContraption$RenderedBlocks
}
}

declare module "com.simibubi.create.content.logistics.packagePort.PackagePortBlockEntity" {
import { $Component } from "net.minecraft.network.chat.Component"
import { $Direction$$Type } from "net.minecraft.core.Direction"
import { $AbstractContainerMenu } from "net.minecraft.world.inventory.AbstractContainerMenu"
import { $SmartBlockEntity } from "com.simibubi.create.foundation.blockEntity.SmartBlockEntity"
import { $BlockState$$Type } from "net.minecraft.world.level.block.state.BlockState"
import { $InteractionResult } from "net.minecraft.world.InteractionResult"
import { $ModelData } from "net.minecraftforge.client.model.data.ModelData"
import { $Inventory$$Type } from "net.minecraft.world.entity.player.Inventory"
import { $Capability$$Type } from "net.minecraftforge.common.capabilities.Capability"
import { $Player$$Type } from "net.minecraft.world.entity.player.Player"
import { $LazyOptional } from "net.minecraftforge.common.util.LazyOptional"
import { $TrackedData, $TrackedData$$Type } from "dev.corgitaco.dataanchor.data.TrackedData"
import { $CompoundTag$$Type } from "net.minecraft.nbt.CompoundTag"
import { $TrackedDataContainer } from "dev.corgitaco.dataanchor.data.TrackedDataContainer"
import { $SmartInventory, $SmartInventory$$Type } from "com.simibubi.create.foundation.item.SmartInventory"
import { $PackagePortTarget, $PackagePortTarget$$Type } from "com.simibubi.create.content.logistics.packagePort.PackagePortTarget"
import { $BlockEntityType$$Type } from "net.minecraft.world.level.block.entity.BlockEntityType"
import { $BlockPos$$Type } from "net.minecraft.core.BlockPos"
import { $MenuProvider } from "net.minecraft.world.MenuProvider"
import { $ItemStack$$Type } from "net.minecraft.world.item.ItemStack"
import { $TrackedDataRegistry$$Type } from "dev.corgitaco.dataanchor.data.registry.TrackedDataRegistry"

export class $PackagePortBlockEntity extends $SmartBlockEntity implements $MenuProvider {
constructor(blockEntityType0: $BlockEntityType$$Type<any>, blockPos1: $BlockPos$$Type, blockState2: $BlockState$$Type)

public "createMenu"(int0: integer, inventory1: $Inventory$$Type, player2: $Player$$Type): $AbstractContainerMenu
public "deserializeNBT"(compoundTag0: $CompoundTag$$Type): void
public "drop"(itemStack0: $ItemStack$$Type): void
public "filterChanged"(): void
public "getCapability"<T>(capability0: $Capability$$Type<T>, direction1: $Direction$$Type): $LazyOptional<T>
public "getCapability"<T>(capability0: $Capability$$Type<T>): $LazyOptional<T>
public "getComparatorOutput"(): integer
public "getDisplayName"(): $Component
public "getFilterString"(): string
public "getModelData"(): $ModelData
public "hasCustomOutlineRendering"(player0: $Player$$Type): boolean
public "isBackedUp"(): boolean
public static "makeBasicContainer"<O, T extends $TrackedData<O>>(registry: $TrackedDataRegistry$$Type<O, T>, o: O, isClient: boolean): $TrackedDataContainer<O, T>
public static "makeBasicContainer"<O, T extends $TrackedData<O>>(registry: $TrackedDataRegistry$$Type<O, T>, o: O, isClient: boolean, lazyLoad: boolean): $TrackedDataContainer<O, T>
public "onLoad"(): void
public "requestModelDataUpdate"(): void
public "sdl$isDynamicLightEnabled"(): boolean
public "sdl$setDynamicLightEnabled"(enabled: boolean): void
public "use"(player0: $Player$$Type): $InteractionResult
get "acceptsPackages"(): boolean
set "acceptsPackages"(value: boolean)
get "addressFilter"(): string
set "addressFilter"(value: string)
get "inventory"(): $SmartInventory
set "inventory"(value: $SmartInventory$$Type)
get "target"(): $PackagePortTarget
set "target"(value: $PackagePortTarget$$Type)
get "comparatorOutput"(): integer
get "displayName"(): $Component
get "filterString"(): string
get "modelData"(): $ModelData
get "backedUp"(): boolean
}
}

declare module "com.simibubi.create.foundation.blockEntity.behaviour.BlockEntityBehaviour" {
import { $BlockGetter$$Type } from "net.minecraft.world.level.BlockGetter"
import { $CompoundTag$$Type } from "net.minecraft.nbt.CompoundTag"
import { $BlockPos, $BlockPos$$Type } from "net.minecraft.core.BlockPos"
import { $BehaviourType, $BehaviourType$$Type } from "com.simibubi.create.foundation.blockEntity.behaviour.BehaviourType"
import { $SmartBlockEntity, $SmartBlockEntity$$Type } from "com.simibubi.create.foundation.blockEntity.SmartBlockEntity"
import { $BlockState$$Type } from "net.minecraft.world.level.block.state.BlockState"
import { $BlockEntity$$Type } from "net.minecraft.world.level.block.entity.BlockEntity"
import { $Level } from "net.minecraft.world.level.Level"
import { $ItemRequirement } from "com.simibubi.create.content.schematics.requirement.ItemRequirement"

export class $BlockEntityBehaviour {
constructor(smartBlockEntity0: $SmartBlockEntity$$Type)

public "destroy"(): void
public static "get"<T extends $BlockEntityBehaviour>(blockGetter0: $BlockGetter$$Type, blockPos1: $BlockPos$$Type, behaviourType2: $BehaviourType$$Type<T>): T
public static "get"<T extends $BlockEntityBehaviour>(blockEntity0: $BlockEntity$$Type, behaviourType1: $BehaviourType$$Type<T>): T
public "getPos"(): $BlockPos
public "getRequiredItems"(): $ItemRequirement
public "getType"(): $BehaviourType<any>
public "getWorld"(): $Level
public "initialize"(): void
public "isSafeNBT"(): boolean
public "lazyTick"(): void
public "onBlockChanged"(blockState0: $BlockState$$Type): void
public "onNeighborChanged"(blockPos0: $BlockPos$$Type): void
public "read"(compoundTag0: $CompoundTag$$Type, boolean1: boolean): void
public "setLazyTickRate"(int0: integer): void
public "tick"(): void
public "unload"(): void
public "write"(compoundTag0: $CompoundTag$$Type, boolean1: boolean): void
public "writeSafe"(compoundTag0: $CompoundTag$$Type): void
get "blockEntity"(): $SmartBlockEntity
set "blockEntity"(value: $SmartBlockEntity$$Type)
get "pos"(): $BlockPos
get "requiredItems"(): $ItemRequirement
get "type"(): $BehaviourType<any>
get "world"(): $Level
get "safeNBT"(): boolean
set "lazyTickRate"(value: integer)
}
}

declare module "com.simibubi.create.content.trains.entity.TravellingPoint$ITrackSelector" {
import { $List, $List$$Type } from "java.util.List"
import { $Map$Entry, $Map$Entry$$Type } from "java.util.Map$Entry"
import { $Pair, $Pair$$Type } from "net.createmod.catnip.data.Pair"
import { $TrackEdge, $TrackEdge$$Type } from "com.simibubi.create.content.trains.graph.TrackEdge"
import { $BiFunction } from "java.util.function.BiFunction"
import { $TrackGraph, $TrackGraph$$Type } from "com.simibubi.create.content.trains.graph.TrackGraph"
import { $TrackNode, $TrackNode$$Type } from "com.simibubi.create.content.trains.graph.TrackNode"
import { $Function$$Type } from "java.util.function.Function"

export interface $TravellingPoint$ITrackSelector extends $BiFunction<$TrackGraph, $Pair<boolean, $List<$Map$Entry<$TrackNode, $TrackEdge>>>, $Map$Entry<$TrackNode, $TrackEdge>> {
"andThen"<V>(function0: $Function$$Type<$Map$Entry$$Type<$TrackNode$$Type, $TrackEdge$$Type>, V>): $BiFunction<$TrackGraph, $Pair<boolean, $List<$Map$Entry<$TrackNode, $TrackEdge>>>, V>
"apply"(trackGraph0: $TrackGraph$$Type, pair1: $Pair$$Type<boolean, $List$$Type<$Map$Entry$$Type<$TrackNode$$Type, $TrackEdge$$Type>>>): $Map$Entry<$TrackNode, $TrackEdge>
}

export namespace $TravellingPoint$ITrackSelector {
const probejs$$marker: never
}
export abstract class $TravellingPoint$ITrackSelector$$Static implements $TravellingPoint$ITrackSelector {
}
}

declare module "com.simibubi.create.content.trains.entity.Carriage" {
import { $TravellingPoint, $TravellingPoint$$Type } from "com.simibubi.create.content.trains.entity.TravellingPoint"
import { $CarriageBogey, $CarriageBogey$$Type } from "com.simibubi.create.content.trains.entity.CarriageBogey"
import { $Couple, $Couple$$Type } from "net.createmod.catnip.data.Couple"
import { $CarriageContraption$$Type } from "com.simibubi.create.content.trains.entity.CarriageContraption"
import { $ResourceKey, $ResourceKey$$Type } from "net.minecraft.resources.ResourceKey"
import { $Consumer$$Type } from "java.util.function.Consumer"
import { $ICarriageBufferDistanceTracker } from "com.railwayteam.railways.mixin_interfaces.ICarriageBufferDistanceTracker"
import { $List } from "java.util.List"
import { $Pair } from "net.createmod.catnip.data.Pair"
import { $CompoundTag, $CompoundTag$$Type } from "net.minecraft.nbt.CompoundTag"
import { $TrainCargoManager, $TrainCargoManager$$Type } from "com.simibubi.create.content.contraptions.minecart.TrainCargoManager"
import { $AtomicInteger } from "java.util.concurrent.atomic.AtomicInteger"
import { $CarriageContraptionEntity, $CarriageContraptionEntity$$Type } from "com.simibubi.create.content.trains.entity.CarriageContraptionEntity"
import { $BlockPos } from "net.minecraft.core.BlockPos"
import { $ICarriageConductors } from "com.railwayteam.railways.mixin_interfaces.ICarriageConductors"
import { $Carriage$DimensionalCarriageEntity } from "com.simibubi.create.content.trains.entity.Carriage$DimensionalCarriageEntity"
import { $Optional } from "java.util.Optional"
import { $TrackGraph$$Type } from "com.simibubi.create.content.trains.graph.TrackGraph"
import { $Train, $Train$$Type } from "com.simibubi.create.content.trains.entity.Train"
import { $Level, $Level$$Type } from "net.minecraft.world.level.Level"
import { $DimensionPalette$$Type } from "com.simibubi.create.content.trains.graph.DimensionPalette"
import { $AccessorCarriage } from "com.railwayteam.railways.mixin.AccessorCarriage"

export class $Carriage implements $AccessorCarriage, $ICarriageConductors, $ICarriageBufferDistanceTracker {
static readonly "netIdGenerator": $AtomicInteger

constructor(carriageBogey0: $CarriageBogey$$Type, carriageBogey1: $CarriageBogey$$Type, int2: integer)

public "alignEntity"(level0: $Level$$Type): void
public "anyAvailableDimensionalCarriage"(): $Pair<$ResourceKey<$Level>, $Carriage$DimensionalCarriageEntity>
public "anyAvailableEntity"(): $CarriageContraptionEntity
public "forEachPresentEntity"(consumer0: $Consumer$$Type<$CarriageContraptionEntity$$Type>): void
public "getAnchorDiff"(): double
public "getDimensional"(resourceKey0: $ResourceKey$$Type<$Level>): $Carriage$DimensionalCarriageEntity
public "getDimensional"(level0: $Level$$Type): $Carriage$DimensionalCarriageEntity
public "getDimensionalIfPresent"(resourceKey0: $ResourceKey$$Type<$Level>): $Carriage$DimensionalCarriageEntity
public "getLeadingPoint"(): $TravellingPoint
public "getPositionInDimension"(resourceKey0: $ResourceKey$$Type<$Level>): $Optional<$BlockPos>
public "getPresentDimensions"(): $List<$ResourceKey<$Level>>
public "getTrailingPoint"(): $TravellingPoint
public "isOnIncompatibleTrack"(): boolean
public "isOnTwoBogeys"(): boolean
public "leadingBogey"(): $CarriageBogey
public "manageEntities"(level0: $Level$$Type): void
public "presentInMultipleDimensions"(): boolean
public "railways$getControllingConductors"(): $List
public "railways$getLeadingDistance"(): integer
public "railways$getTrailingDistance"(): integer
public "railways$setLeadingDistance"(distance: integer): void
public "railways$setTrailingDistance"(distance: integer): void
public static "read"(compoundTag0: $CompoundTag$$Type, trackGraph1: $TrackGraph$$Type, dimensionPalette2: $DimensionPalette$$Type): $Carriage
public "setContraption"(level0: $Level$$Type, carriageContraption1: $CarriageContraption$$Type): void
public "setTrain"(train0: $Train$$Type): void
public "trailingBogey"(): $CarriageBogey
public "travel"(level0: $Level$$Type, trackGraph1: $TrackGraph$$Type, double2: double, travellingPoint3: $TravellingPoint$$Type, travellingPoint4: $TravellingPoint$$Type, int5: integer): double
public "updateConductors"(): void
public "updateContraptionAnchors"(): void
public "write"(dimensionPalette0: $DimensionPalette$$Type): $CompoundTag
get "blocked"(): boolean
set "blocked"(value: boolean)
get "bogeySpacing"(): integer
set "bogeySpacing"(value: integer)
get "bogeys"(): $Couple<$CarriageBogey>
set "bogeys"(value: $Couple$$Type<$CarriageBogey$$Type>)
get "id"(): integer
set "id"(value: integer)
get "presentConductors"(): $Couple<boolean>
set "presentConductors"(value: $Couple$$Type<boolean>)
get "stalled"(): boolean
set "stalled"(value: boolean)
get "storage"(): $TrainCargoManager
set "storage"(value: $TrainCargoManager$$Type)
get "train"(): $Train
set "train"(value: $Train$$Type)
get "anchorDiff"(): double
get "leadingPoint"(): $TravellingPoint
get "presentDimensions"(): $List<$ResourceKey<$Level>>
get "trailingPoint"(): $TravellingPoint
get "onIncompatibleTrack"(): boolean
get "onTwoBogeys"(): boolean
}
}

declare module "com.simibubi.create.content.kinetics.fan.processing.FanProcessingType$AirFlowParticleAccess" {
import { $ParticleOptions$$Type } from "net.minecraft.core.particles.ParticleOptions"

export interface $FanProcessingType$AirFlowParticleAccess {
"setAlpha"(float0: float): void
"setColor"(int0: integer): void
"spawnExtraParticle"(particleOptions0: $ParticleOptions$$Type, float1: float): void
set "alpha"(value: float)
set "color"(value: integer)
}

export namespace $FanProcessingType$AirFlowParticleAccess {
const probejs$$marker: never
}
export abstract class $FanProcessingType$AirFlowParticleAccess$$Static implements $FanProcessingType$AirFlowParticleAccess {
}
}

declare module "com.simibubi.create.api.contraption.transformable.TransformableBlockEntity" {
import { $StructureTransform$$Type } from "com.simibubi.create.content.contraptions.StructureTransform"
import { $BlockEntity$$Type } from "net.minecraft.world.level.block.entity.BlockEntity"

export interface $TransformableBlockEntity {
"transform"(blockEntity0: $BlockEntity$$Type, structureTransform1: $StructureTransform$$Type): void
}

export namespace $TransformableBlockEntity {
const probejs$$marker: never
}
export abstract class $TransformableBlockEntity$$Static implements $TransformableBlockEntity {
}
}

declare module "com.simibubi.create.content.trains.track.BezierConnection$GirderAngles" {
import { $PoseStack$Pose } from "com.mojang.blaze3d.vertex.PoseStack$Pose"
import { $BlockPos } from "net.minecraft.core.BlockPos"
import { $Couple } from "net.createmod.catnip.data.Couple"

export class $BezierConnection$GirderAngles {
readonly "beamCaps": $Couple<$Couple<$PoseStack$Pose>>[]
readonly "beams": $Couple<$PoseStack$Pose>[]
readonly "length": integer
readonly "lightPosition": $BlockPos[]

}
}

declare module "com.simibubi.create.content.kinetics.transmission.sequencer.SequencerInstructions" {
import { $Enum } from "java.lang.Enum"

export class $SequencerInstructions extends $Enum<$SequencerInstructions> {
static readonly "AWAIT": $SequencerInstructions
static readonly "DELAY": $SequencerInstructions
static readonly "END": $SequencerInstructions
static readonly "TURN_ANGLE": $SequencerInstructions
static readonly "TURN_DISTANCE": $SequencerInstructions

public "needsPropagation"(): boolean
public static "valueOf"(string0: string): $SequencerInstructions
public static "values"(): $SequencerInstructions[]
}
}

declare module "com.simibubi.create.content.trains.entity.TravellingPoint$SteerDirection" {
import { $Enum } from "java.lang.Enum"

export class $TravellingPoint$SteerDirection extends $Enum<$TravellingPoint$SteerDirection> {
static readonly "LEFT": $TravellingPoint$SteerDirection
static readonly "NONE": $TravellingPoint$SteerDirection
static readonly "RIGHT": $TravellingPoint$SteerDirection

public static "valueOf"(string0: string): $TravellingPoint$SteerDirection
public static "values"(): $TravellingPoint$SteerDirection[]
}
}

declare module "com.simibubi.create.foundation.blockEntity.IMergeableBE" {
import { $BlockEntity$$Type } from "net.minecraft.world.level.block.entity.BlockEntity"

export interface $IMergeableBE {
"accept"(blockEntity0: $BlockEntity$$Type): void
}

export namespace $IMergeableBE {
const probejs$$marker: never
}
export abstract class $IMergeableBE$$Static implements $IMergeableBE {
}
}

declare module "com.simibubi.create.content.trains.graph.EdgeData" {
import { $List } from "java.util.List"
import { $CompoundTag, $CompoundTag$$Type } from "net.minecraft.nbt.CompoundTag"
import { $TrackEdge$$Type } from "com.simibubi.create.content.trains.graph.TrackEdge"
import { $TrackEdgeIntersection } from "com.simibubi.create.content.trains.graph.TrackEdgeIntersection"
import { $TrackGraph$$Type } from "com.simibubi.create.content.trains.graph.TrackGraph"
import { $UUID, $UUID$$Type } from "java.util.UUID"
import { $TrackNode$$Type } from "com.simibubi.create.content.trains.graph.TrackNode"
import { $ISwitchDisabledEdge } from "com.railwayteam.railways.mixin_interfaces.ISwitchDisabledEdge"
import { $DimensionPalette$$Type } from "com.simibubi.create.content.trains.graph.DimensionPalette"
import { $TrackEdgePoint, $TrackEdgePoint$$Type } from "com.simibubi.create.content.trains.signal.TrackEdgePoint"
import { $EdgePointType$$Type } from "com.simibubi.create.content.trains.graph.EdgePointType"

export class $EdgeData implements $ISwitchDisabledEdge {
static readonly "passiveGroup": $UUID

constructor(trackEdge0: $TrackEdge$$Type)

public "ackAutomaticSelection"(): void
public "addIntersection"(trackGraph0: $TrackGraph$$Type, uUID1: $UUID$$Type, double2: double, trackNode3: $TrackNode$$Type, trackNode4: $TrackNode$$Type, double5: double): void
public "addPoint"<T extends $TrackEdgePoint>(trackGraph0: $TrackGraph$$Type, trackEdgePoint1: $TrackEdgePoint$$Type): void
public static "automaticallySelect"(edge: $TrackEdge$$Type): void
public "get"<T extends $TrackEdgePoint>(edgePointType0: $EdgePointType$$Type<T>, double1: double): T
public "getAutomaticallySelectedPriority"(): integer
public "getEffectiveEdgeGroupId"(trackGraph0: $TrackGraph$$Type): $UUID
public "getGroupAtPosition"(trackGraph0: $TrackGraph$$Type, double1: double): $UUID
public "getIntersections"(): $List<$TrackEdgeIntersection>
public "getPoints"(): $List<$TrackEdgePoint>
public "getSingleSignalGroup"(): $UUID
public "hasIntersections"(): boolean
public "hasPoints"(): boolean
public "hasSignalBoundaries"(): boolean
public "isAutomatic"(): boolean
public static "isAutomatic"(edge: $TrackEdge$$Type): boolean
public "isAutomaticallySelected"(): boolean
public static "isDisabled"(edge: $TrackEdge$$Type): boolean
public "isEnabled"(): boolean
public static "isEnabled"(edge: $TrackEdge$$Type): boolean
public "next"(double0: double): $TrackEdgePoint
public "next"<T extends $TrackEdgePoint>(edgePointType0: $EdgePointType$$Type<T>, double1: double): T
public static "read"(compoundTag0: $CompoundTag$$Type, trackEdge1: $TrackEdge$$Type, trackGraph2: $TrackGraph$$Type, dimensionPalette3: $DimensionPalette$$Type): $EdgeData
public "refreshIntersectingSignalGroups"(trackGraph0: $TrackGraph$$Type): void
public "removeIntersection"(trackGraph0: $TrackGraph$$Type, uUID1: $UUID$$Type): void
public "removePoint"(trackGraph0: $TrackGraph$$Type, trackEdgePoint1: $TrackEdgePoint$$Type): void
public "setAutomatic"(automatic: boolean): void
public "setAutomaticallySelected"(): void
public "setEnabled"(enabled: boolean): void
public "setSingleSignalGroup"(trackGraph0: $TrackGraph$$Type, uUID1: $UUID$$Type): void
public "write"(dimensionPalette0: $DimensionPalette$$Type): $CompoundTag
get "automaticallySelectedPriority"(): integer
get "intersections"(): $List<$TrackEdgeIntersection>
get "points"(): $List<$TrackEdgePoint>
get "singleSignalGroup"(): $UUID
get "automatic"(): boolean
get "automaticallySelected"(): boolean
get "enabled"(): boolean
set "automatic"(value: boolean)
set "enabled"(value: boolean)
}
}

declare module "com.simibubi.create.content.trains.entity.TravellingPoint$IPortalListener" {
import { $TrackNodeLocation, $TrackNodeLocation$$Type } from "com.simibubi.create.content.trains.graph.TrackNodeLocation"
import { $Predicate, $Predicate$$Type } from "java.util.function.Predicate"
import { $Couple, $Couple$$Type } from "net.createmod.catnip.data.Couple"

export interface $TravellingPoint$IPortalListener extends $Predicate<$Couple<$TrackNodeLocation>> {
"and"(predicate0: $Predicate$$Type<$Couple$$Type<$TrackNodeLocation$$Type>>): $Predicate<$Couple<$TrackNodeLocation>>
"negate"(): $Predicate<$Couple<$TrackNodeLocation>>
"or"(predicate0: $Predicate$$Type<$Couple$$Type<$TrackNodeLocation$$Type>>): $Predicate<$Couple<$TrackNodeLocation>>
"test"(couple0: $Couple$$Type<$TrackNodeLocation$$Type>): boolean
}

export namespace $TravellingPoint$IPortalListener {
function isEqual<T>(object0: any): $Predicate<T>
function not<T>(predicate0: $Predicate$$Type<T>): $Predicate<T>
}
export abstract class $TravellingPoint$IPortalListener$$Static implements $TravellingPoint$IPortalListener {
static "isEqual"<T>(object0: any): $Predicate<T>
static "not"<T>(predicate0: $Predicate$$Type<T>): $Predicate<T>
}
}

declare module "com.simibubi.create.content.contraptions.behaviour.MovementContext" {
import { $StructureTemplate$StructureBlockInfo$$Type } from "net.minecraft.world.level.levelgen.structure.templatesystem.StructureTemplate$StructureBlockInfo"
import { $CompoundTag, $CompoundTag$$Type } from "net.minecraft.nbt.CompoundTag"
import { $BlockPos, $BlockPos$$Type } from "net.minecraft.core.BlockPos"
import { $Vec3, $Vec3$$Type } from "net.minecraft.world.phys.Vec3"
import { $BlockState, $BlockState$$Type } from "net.minecraft.world.level.block.state.BlockState"
import { $MountedItemStorage } from "com.simibubi.create.api.contraption.storage.item.MountedItemStorage"
import { $UnaryOperator, $UnaryOperator$$Type } from "java.util.function.UnaryOperator"
import { $Contraption, $Contraption$$Type } from "com.simibubi.create.content.contraptions.Contraption"
import { $Level, $Level$$Type } from "net.minecraft.world.level.Level"
import { $FilterItemStack } from "com.simibubi.create.content.logistics.filter.FilterItemStack"
import { $MountedFluidStorage } from "com.simibubi.create.api.contraption.storage.fluid.MountedFluidStorage"

export class $MovementContext {
constructor(level0: $Level$$Type, structureBlockInfo1: $StructureTemplate$StructureBlockInfo$$Type, contraption2: $Contraption$$Type)

public "getAnimationSpeed"(): float
public "getFilterFromBE"(): $FilterItemStack
public "getFluidStorage"(): $MountedFluidStorage
public "getItemStorage"(): $MountedItemStorage
public static "readNBT"(level0: $Level$$Type, structureBlockInfo1: $StructureTemplate$StructureBlockInfo$$Type, compoundTag2: $CompoundTag$$Type, contraption3: $Contraption$$Type): $MovementContext
public "writeToNBT"(compoundTag0: $CompoundTag$$Type): $CompoundTag
get "blockEntityData"(): $CompoundTag
set "blockEntityData"(value: $CompoundTag$$Type)
get "contraption"(): $Contraption
set "contraption"(value: $Contraption$$Type)
get "data"(): $CompoundTag
set "data"(value: $CompoundTag$$Type)
get "disabled"(): boolean
set "disabled"(value: boolean)
get "firstMovement"(): boolean
set "firstMovement"(value: boolean)
get "localPos"(): $BlockPos
set "localPos"(value: $BlockPos$$Type)
get "motion"(): $Vec3
set "motion"(value: $Vec3$$Type)
get "position"(): $Vec3
set "position"(value: $Vec3$$Type)
get "relativeMotion"(): $Vec3
set "relativeMotion"(value: $Vec3$$Type)
get "rotation"(): $UnaryOperator<$Vec3>
set "rotation"(value: $UnaryOperator$$Type<$Vec3$$Type>)
get "stall"(): boolean
set "stall"(value: boolean)
get "state"(): $BlockState
set "state"(value: $BlockState$$Type)
get "temporaryData"(): any
set "temporaryData"(value: any)
get "world"(): $Level
set "world"(value: $Level$$Type)
get "animationSpeed"(): float
get "filterFromBE"(): $FilterItemStack
get "fluidStorage"(): $MountedFluidStorage
get "itemStorage"(): $MountedItemStorage
}
}

declare module "com.simibubi.create.content.trains.signal.SignalBoundary" {
import { $SignalBlockEntity$OverlayState } from "com.simibubi.create.content.trains.signal.SignalBlockEntity$OverlayState"
import { $SignalBlock$SignalType, $SignalBlock$SignalType$$Type } from "com.simibubi.create.content.trains.signal.SignalBlock$SignalType"
import { $BlockPos, $BlockPos$$Type } from "net.minecraft.core.BlockPos"
import { $SignalBlockEntity$SignalState, $SignalBlockEntity$SignalState$$Type } from "com.simibubi.create.content.trains.signal.SignalBlockEntity$SignalState"
import { $Map, $Map$$Type } from "java.util.Map"
import { $Couple, $Couple$$Type } from "net.createmod.catnip.data.Couple"
import { $SignalBlockEntity$$Type } from "com.simibubi.create.content.trains.signal.SignalBlockEntity"
import { $UUID, $UUID$$Type } from "java.util.UUID"
import { $TrackNode$$Type } from "com.simibubi.create.content.trains.graph.TrackNode"
import { $TrackEdgePoint } from "com.simibubi.create.content.trains.signal.TrackEdgePoint"

export class $SignalBoundary extends $TrackEdgePoint {
constructor()

public "cycleSignalType"(blockPos0: $BlockPos$$Type): void
public "getGroup"(trackNode0: $TrackNode$$Type): $UUID
public "getOverlayFor"(blockPos0: $BlockPos$$Type): $SignalBlockEntity$OverlayState
public "getStateFor"(blockPos0: $BlockPos$$Type): $SignalBlockEntity$SignalState
public "getTypeFor"(blockPos0: $BlockPos$$Type): $SignalBlock$SignalType
public "isForcedRed"(boolean0: boolean): boolean
public "isForcedRed"(trackNode0: $TrackNode$$Type): boolean
public "queueUpdate"(trackNode0: $TrackNode$$Type): void
public "setGroup"(boolean0: boolean, uUID1: $UUID$$Type): void
public "setGroupAndUpdate"(trackNode0: $TrackNode$$Type, uUID1: $UUID$$Type): void
public "updateBlockEntityPower"(signalBlockEntity0: $SignalBlockEntity$$Type): void
get "blockEntities"(): $Couple<$Map<$BlockPos, boolean>>
set "blockEntities"(value: $Couple$$Type<$Map$$Type<$BlockPos$$Type, boolean>>)
get "cachedStates"(): $Couple<$SignalBlockEntity$SignalState>
set "cachedStates"(value: $Couple$$Type<$SignalBlockEntity$SignalState$$Type>)
get "groups"(): $Couple<$UUID>
set "groups"(value: $Couple$$Type<$UUID$$Type>)
get "sidesToUpdate"(): $Couple<boolean>
set "sidesToUpdate"(value: $Couple$$Type<boolean>)
get "types"(): $Couple<$SignalBlock$SignalType>
set "types"(value: $Couple$$Type<$SignalBlock$SignalType$$Type>)
}
}

declare module "com.simibubi.create.foundation.block.ProperWaterloggedBlock" {
import { $SimpleWaterloggedBlock } from "net.minecraft.world.level.block.SimpleWaterloggedBlock"
import { $BlockState, $BlockState$$Type } from "net.minecraft.world.level.block.state.BlockState"
import { $BooleanProperty } from "net.minecraft.world.level.block.state.properties.BooleanProperty"
import { $BlockGetter$$Type } from "net.minecraft.world.level.BlockGetter"
import { $BlockPos$$Type } from "net.minecraft.core.BlockPos"
import { $SoundEvent } from "net.minecraft.sounds.SoundEvent"
import { $FluidState, $FluidState$$Type } from "net.minecraft.world.level.material.FluidState"
import { $Optional } from "java.util.Optional"
import { $LevelAccessor$$Type } from "net.minecraft.world.level.LevelAccessor"
import { $BlockPlaceContext$$Type } from "net.minecraft.world.item.context.BlockPlaceContext"
import { $Fluid$$Type } from "net.minecraft.world.level.material.Fluid"
import { $ItemStack } from "net.minecraft.world.item.ItemStack"

export interface $ProperWaterloggedBlock extends $SimpleWaterloggedBlock {
"canPlaceLiquid"(blockGetter0: $BlockGetter$$Type, blockPos1: $BlockPos$$Type, blockState2: $BlockState$$Type, fluid3: $Fluid$$Type): boolean
"fluidState"(blockState0: $BlockState$$Type): $FluidState
"getPickupSound"(): $Optional<$SoundEvent>
"getPickupSound"(blockState0: $BlockState$$Type): $Optional<$SoundEvent>
"pickupBlock"(levelAccessor0: $LevelAccessor$$Type, blockPos1: $BlockPos$$Type, blockState2: $BlockState$$Type): $ItemStack
"placeLiquid"(levelAccessor0: $LevelAccessor$$Type, blockPos1: $BlockPos$$Type, blockState2: $BlockState$$Type, fluidState3: $FluidState$$Type): boolean
"updateWater"(levelAccessor0: $LevelAccessor$$Type, blockState1: $BlockState$$Type, blockPos2: $BlockPos$$Type): void
"withWater"(blockState0: $BlockState$$Type, blockPlaceContext1: $BlockPlaceContext$$Type): $BlockState
get "pickupSound"(): $Optional<$SoundEvent>
}

export namespace $ProperWaterloggedBlock {
const WATERLOGGED: $BooleanProperty
function withWater(levelAccessor0: $LevelAccessor$$Type, blockState1: $BlockState$$Type, blockPos2: $BlockPos$$Type): $BlockState
}
export abstract class $ProperWaterloggedBlock$$Static implements $ProperWaterloggedBlock {
static readonly "WATERLOGGED": $BooleanProperty

static "withWater"(levelAccessor0: $LevelAccessor$$Type, blockState1: $BlockState$$Type, blockPos2: $BlockPos$$Type): $BlockState
}
}

declare module "com.simibubi.create.content.trains.graph.TrackEdgeIntersection" {
import { $TrackNodeLocation, $TrackNodeLocation$$Type } from "com.simibubi.create.content.trains.graph.TrackNodeLocation"
import { $CompoundTag, $CompoundTag$$Type } from "net.minecraft.nbt.CompoundTag"
import { $Couple, $Couple$$Type } from "net.createmod.catnip.data.Couple"
import { $UUID, $UUID$$Type } from "java.util.UUID"
import { $DimensionPalette$$Type } from "com.simibubi.create.content.trains.graph.DimensionPalette"

export class $TrackEdgeIntersection {
constructor()

public "isNear"(double0: double): boolean
public static "read"(compoundTag0: $CompoundTag$$Type, dimensionPalette1: $DimensionPalette$$Type): $TrackEdgeIntersection
public "targets"(trackNodeLocation0: $TrackNodeLocation$$Type, trackNodeLocation1: $TrackNodeLocation$$Type): boolean
public "write"(dimensionPalette0: $DimensionPalette$$Type): $CompoundTag
get "groupId"(): $UUID
set "groupId"(value: $UUID$$Type)
get "id"(): $UUID
set "id"(value: $UUID$$Type)
get "location"(): double
set "location"(value: double)
get "target"(): $Couple<$TrackNodeLocation>
set "target"(value: $Couple$$Type<$TrackNodeLocation$$Type>)
get "targetLocation"(): double
set "targetLocation"(value: double)
}
}

declare module "com.simibubi.create.content.contraptions.AbstractContraptionEntity$ContraptionRotationState" {
import { $Matrix3d } from "com.simibubi.create.foundation.collision.Matrix3d"

export class $AbstractContraptionEntity$ContraptionRotationState {
static readonly "NONE": $AbstractContraptionEntity$ContraptionRotationState

constructor()

public "asMatrix"(): $Matrix3d
public "getYawOffset"(): float
public "hasVerticalRotation"(): boolean
get "secondYRotation"(): float
set "secondYRotation"(value: float)
get "xRotation"(): float
set "xRotation"(value: float)
get "yRotation"(): float
set "yRotation"(value: float)
get "zRotation"(): float
set "zRotation"(value: float)
get "yawOffset"(): float
}
}

declare module "com.simibubi.create.foundation.blockEntity.behaviour.scrollValue.ScrollValueBehaviour$StepContext" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export class $ScrollValueBehaviour$StepContext {
constructor()

get "control"(): boolean
set "control"(value: boolean)
get "currentValue"(): integer
set "currentValue"(value: integer)
get "forward"(): boolean
set "forward"(value: boolean)
get "shift"(): boolean
set "shift"(value: boolean)
}
}

declare module "com.simibubi.create.foundation.mixin.accessor.FlowingFluidAccessor" {
import { $BlockPos$$Type } from "net.minecraft.core.BlockPos"
import { $FluidState } from "net.minecraft.world.level.material.FluidState"
import { $BlockState$$Type } from "net.minecraft.world.level.block.state.BlockState"
import { $Level$$Type } from "net.minecraft.world.level.Level"

export interface $FlowingFluidAccessor {
"create$getNewLiquid"(level0: $Level$$Type, blockPos1: $BlockPos$$Type, blockState2: $BlockState$$Type): $FluidState
}

export namespace $FlowingFluidAccessor {
const probejs$$marker: never
}
export abstract class $FlowingFluidAccessor$$Static implements $FlowingFluidAccessor {
}
}

declare module "com.simibubi.create.api.event.PipeCollisionEvent$Flow" {
import { $BlockPos$$Type } from "net.minecraft.core.BlockPos"
import { $PipeCollisionEvent } from "com.simibubi.create.api.event.PipeCollisionEvent"
import { $BlockState$$Type } from "net.minecraft.world.level.block.state.BlockState"
import { $Fluid, $Fluid$$Type } from "net.minecraft.world.level.material.Fluid"
import { $Level$$Type } from "net.minecraft.world.level.Level"

export class $PipeCollisionEvent$Flow extends $PipeCollisionEvent {
constructor(level0: $Level$$Type, blockPos1: $BlockPos$$Type, fluid2: $Fluid$$Type, fluid3: $Fluid$$Type, blockState4: $BlockState$$Type)
constructor()

public "getFirstFluid"(): $Fluid
public "getSecondFluid"(): $Fluid
get "firstFluid"(): $Fluid
get "secondFluid"(): $Fluid
}
}

declare module "com.simibubi.create.api.contraption.storage.item.MountedItemStorage" {
import { $IItemHandler } from "net.minecraftforge.items.IItemHandler"
import { $MountedItemStorageType } from "com.simibubi.create.api.contraption.storage.item.MountedItemStorageType"
import { $BlockState$$Type } from "net.minecraft.world.level.block.state.BlockState"
import { $BlockEntity$$Type } from "net.minecraft.world.level.block.entity.BlockEntity"
import { $Ingredient$$Type } from "net.minecraft.world.item.crafting.Ingredient"
import { $BlockContainerJS } from "dev.latvian.mods.kubejs.level.BlockContainerJS"
import { $ServerPlayer$$Type } from "net.minecraft.server.level.ServerPlayer"
import { $List } from "java.util.List"
import { $Codec } from "com.mojang.serialization.Codec"
import { $Container } from "net.minecraft.world.Container"
import { $StructureTemplate$StructureBlockInfo$$Type } from "net.minecraft.world.level.levelgen.structure.templatesystem.StructureTemplate$StructureBlockInfo"
import { $BlockPos$$Type } from "net.minecraft.core.BlockPos"
import { $IItemHandlerModifiable } from "net.minecraftforge.items.IItemHandlerModifiable"
import { $ItemStack, $ItemStack$$Type } from "net.minecraft.world.item.ItemStack"
import { $Contraption$$Type } from "com.simibubi.create.content.contraptions.Contraption"
import { $Level$$Type } from "net.minecraft.world.level.Level"

export class $MountedItemStorage implements $IItemHandlerModifiable {
static readonly "CODEC": $Codec<$MountedItemStorage>
readonly "type": $MountedItemStorageType<$MountedItemStorage>

public "asContainer"(): $Container
public "clear"(ingredient: $Ingredient$$Type): void
public "clear"(): void
public "count"(): integer
public "count"(ingredient: $Ingredient$$Type): integer
public "countNonEmpty"(ingredient: $Ingredient$$Type): integer
public "countNonEmpty"(): integer
public "extractItem"(i: integer, i1: integer, b: boolean): $ItemStack
public "extractItem"(int0: integer, int1: integer, boolean2: boolean): $ItemStack
public "find"(): integer
public "find"(ingredient: $Ingredient$$Type): integer
public "getAllItems"(): $List<$ItemStack>
public "getBlock"(level: $Level$$Type): $BlockContainerJS
public "getHeight"(): integer
public "getSlotLimit"(i: integer): integer
public "getSlotLimit"(int0: integer): integer
public "getSlots"(): integer
public "getSlots"(): integer
public "getStackInSlot"(i: integer): $ItemStack
public "getStackInSlot"(int0: integer): $ItemStack
public "getWidth"(): integer
public "handleInteraction"(serverPlayer0: $ServerPlayer$$Type, contraption1: $Contraption$$Type, structureBlockInfo2: $StructureTemplate$StructureBlockInfo$$Type): boolean
public "insertItem"(i: integer, itemStack: $ItemStack$$Type, b: boolean): $ItemStack
public "insertItem"(int0: integer, itemStack1: $ItemStack$$Type, boolean2: boolean): $ItemStack
public "insertItem"(stack: $ItemStack$$Type, simulate: boolean): $ItemStack
public "isEmpty"(): boolean
public "isItemValid"(i: integer, itemStack: $ItemStack$$Type): boolean
public "isItemValid"(int0: integer, itemStack1: $ItemStack$$Type): boolean
public "isMutable"(): boolean
public "kjs$self"(): $IItemHandler
public "setChanged"(): void
public "setStackInSlot"(int0: integer, itemStack1: $ItemStack$$Type): void
public "setStackInSlot"(slot: integer, stack: $ItemStack$$Type): void
public "unmount"(level0: $Level$$Type, blockState1: $BlockState$$Type, blockPos2: $BlockPos$$Type, blockEntity3: $BlockEntity$$Type): void
get "allItems"(): $List<$ItemStack>
get "height"(): integer
get "slots"(): integer
get "slots"(): integer
get "width"(): integer
get "empty"(): boolean
get "mutable"(): boolean
}
}

declare module "com.simibubi.create.foundation.mixin.accessor.CropBlockAccessor" {
import { $IntegerProperty } from "net.minecraft.world.level.block.state.properties.IntegerProperty"

export interface $CropBlockAccessor {
"create$callGetAgeProperty"(): $IntegerProperty
}

export namespace $CropBlockAccessor {
const probejs$$marker: never
}
export abstract class $CropBlockAccessor$$Static implements $CropBlockAccessor {
}
}

declare module "com.simibubi.create.api.contraption.storage.item.MountedItemStorageWrapper" {
import { $CombinedInvWrapper } from "net.minecraftforge.items.wrapper.CombinedInvWrapper"
import { $BlockContainerJS } from "dev.latvian.mods.kubejs.level.BlockContainerJS"
import { $IItemHandler } from "net.minecraftforge.items.IItemHandler"
import { $List } from "java.util.List"
import { $Container } from "net.minecraft.world.Container"
import { $ImmutableMap, $ImmutableMap$$Type } from "com.google.common.collect.ImmutableMap"
import { $BlockPos, $BlockPos$$Type } from "net.minecraft.core.BlockPos"
import { $MountedItemStorage, $MountedItemStorage$$Type } from "com.simibubi.create.api.contraption.storage.item.MountedItemStorage"
import { $ItemStack, $ItemStack$$Type } from "net.minecraft.world.item.ItemStack"
import { $Level$$Type } from "net.minecraft.world.level.Level"
import { $Ingredient$$Type } from "net.minecraft.world.item.crafting.Ingredient"

export class $MountedItemStorageWrapper extends $CombinedInvWrapper {
readonly "storages": $ImmutableMap<$BlockPos, $MountedItemStorage>

constructor(immutableMap0: $ImmutableMap$$Type<$BlockPos$$Type, $MountedItemStorage$$Type>)

public "asContainer"(): $Container
public "clear"(ingredient: $Ingredient$$Type): void
public "clear"(): void
public "count"(): integer
public "count"(ingredient: $Ingredient$$Type): integer
public "countNonEmpty"(ingredient: $Ingredient$$Type): integer
public "countNonEmpty"(): integer
public "extractItem"(i: integer, i1: integer, b: boolean): $ItemStack
public "find"(): integer
public "find"(ingredient: $Ingredient$$Type): integer
public "getAllItems"(): $List<$ItemStack>
public "getBlock"(level: $Level$$Type): $BlockContainerJS
public "getHeight"(): integer
public "getSlotLimit"(i: integer): integer
public "getSlots"(): integer
public "getStackInSlot"(i: integer): $ItemStack
public "getWidth"(): integer
public "insertItem"(i: integer, itemStack: $ItemStack$$Type, b: boolean): $ItemStack
public "insertItem"(stack: $ItemStack$$Type, simulate: boolean): $ItemStack
public "isEmpty"(): boolean
public "isItemValid"(i: integer, itemStack: $ItemStack$$Type): boolean
public "isMutable"(): boolean
public "kjs$self"(): $IItemHandler
public "setChanged"(): void
public "setStackInSlot"(slot: integer, stack: $ItemStack$$Type): void
get "allItems"(): $List<$ItemStack>
get "height"(): integer
get "slots"(): integer
get "width"(): integer
get "empty"(): boolean
get "mutable"(): boolean
}
}

declare module "com.simibubi.create.content.trains.bogey.BogeyVisual" {
import { $Consumer$$Type } from "java.util.function.Consumer"
import { $CompoundTag$$Type } from "net.minecraft.nbt.CompoundTag"
import { $Instance$$Type } from "dev.engine_room.flywheel.api.instance.Instance"
import { $PoseStack$$Type } from "com.mojang.blaze3d.vertex.PoseStack"

export interface $BogeyVisual {
"collectCrumblingInstances"(consumer0: $Consumer$$Type<$Instance$$Type>): void
"delete"(): void
"hide"(): void
"update"(compoundTag0: $CompoundTag$$Type, float1: float, poseStack2: $PoseStack$$Type): void
"updateLight"(int0: integer): void
}

export namespace $BogeyVisual {
const probejs$$marker: never
}
export abstract class $BogeyVisual$$Static implements $BogeyVisual {
}
}

declare module "com.simibubi.create.foundation.block.IBE" {
import { $BlockEntityTicker } from "net.minecraft.world.level.block.entity.BlockEntityTicker"
import { $BlockState$$Type } from "net.minecraft.world.level.block.state.BlockState"
import { $InteractionResult } from "net.minecraft.world.InteractionResult"
import { $EntityBlock } from "net.minecraft.world.level.block.EntityBlock"
import { $BlockEntity, $BlockEntity$$Type } from "net.minecraft.world.level.block.entity.BlockEntity"
import { $ServerLevel$$Type } from "net.minecraft.server.level.ServerLevel"
import { $Function$$Type } from "java.util.function.Function"
import { $Consumer$$Type } from "java.util.function.Consumer"
import { $BlockGetter$$Type } from "net.minecraft.world.level.BlockGetter"
import { $BlockPos$$Type } from "net.minecraft.core.BlockPos"
import { $BlockEntityType, $BlockEntityType$$Type } from "net.minecraft.world.level.block.entity.BlockEntityType"
import { $GameEventListener } from "net.minecraft.world.level.gameevent.GameEventListener"
import { $Optional } from "java.util.Optional"
import { $Class } from "java.lang.Class"
import { $Level$$Type } from "net.minecraft.world.level.Level"

export interface $IBE<T extends $BlockEntity = $BlockEntity> extends $EntityBlock {
"getBlockEntity"(blockGetter0: $BlockGetter$$Type, blockPos1: $BlockPos$$Type): T
"getBlockEntityClass"(): $Class<T>
"getBlockEntityOptional"(blockGetter0: $BlockGetter$$Type, blockPos1: $BlockPos$$Type): $Optional<T>
"getBlockEntityType"(): $BlockEntityType<T>
"getListener"<T extends $BlockEntity>(serverLevel0: $ServerLevel$$Type, t1: T): $GameEventListener
"getTicker"<S extends $BlockEntity>(level0: $Level$$Type, blockState1: $BlockState$$Type, blockEntityType2: $BlockEntityType$$Type<S>): $BlockEntityTicker<S>
"newBlockEntity"(blockPos0: $BlockPos$$Type, blockState1: $BlockState$$Type): $BlockEntity
"onBlockEntityUse"(blockGetter0: $BlockGetter$$Type, blockPos1: $BlockPos$$Type, function2: $Function$$Type<T, $InteractionResult>): $InteractionResult
"withBlockEntityDo"(blockGetter0: $BlockGetter$$Type, blockPos1: $BlockPos$$Type, consumer2: $Consumer$$Type<T>): void
get "blockEntityClass"(): $Class<T>
get "blockEntityType"(): $BlockEntityType<T>
}

export namespace $IBE {
function onRemove(blockState0: $BlockState$$Type, level1: $Level$$Type, blockPos2: $BlockPos$$Type, blockState3: $BlockState$$Type): void
}
export abstract class $IBE$$Static<T extends $BlockEntity = $BlockEntity> implements $IBE<T> {
static "onRemove"(blockState0: $BlockState$$Type, level1: $Level$$Type, blockPos2: $BlockPos$$Type, blockState3: $BlockState$$Type): void
}
}

declare module "com.simibubi.create.content.schematics.requirement.ItemRequirement" {
import { $List, $List$$Type } from "java.util.List"
import { $Entity$$Type } from "net.minecraft.world.entity.Entity"
import { $Item$$Type } from "net.minecraft.world.item.Item"
import { $BlockState$$Type } from "net.minecraft.world.level.block.state.BlockState"
import { $ItemStack$$Type } from "net.minecraft.world.item.ItemStack"
import { $BlockEntity$$Type } from "net.minecraft.world.level.block.entity.BlockEntity"
import { $ItemRequirement$ItemUseType$$Type } from "com.simibubi.create.content.schematics.requirement.ItemRequirement$ItemUseType"
import { $ItemRequirement$StackRequirement, $ItemRequirement$StackRequirement$$Type } from "com.simibubi.create.content.schematics.requirement.ItemRequirement$StackRequirement"

export class $ItemRequirement {
static readonly "INVALID": $ItemRequirement
static readonly "NONE": $ItemRequirement

constructor(stackRequirement0: $ItemRequirement$StackRequirement$$Type)
constructor(list0: $List$$Type<$ItemRequirement$StackRequirement$$Type>)
constructor(itemUseType0: $ItemRequirement$ItemUseType$$Type, itemStack1: $ItemStack$$Type)
constructor(itemUseType0: $ItemRequirement$ItemUseType$$Type, item1: $Item$$Type)
constructor(itemUseType0: $ItemRequirement$ItemUseType$$Type, list1: $List$$Type<$ItemStack$$Type>)

public "getRequiredItems"(): $List<$ItemRequirement$StackRequirement>
public "isEmpty"(): boolean
public "isInvalid"(): boolean
public static "of"(entity0: $Entity$$Type): $ItemRequirement
public static "of"(blockState0: $BlockState$$Type, blockEntity1: $BlockEntity$$Type): $ItemRequirement
public "union"(itemRequirement0: $ItemRequirement$$Type): $ItemRequirement
get "requiredItems"(): $List<$ItemRequirement$StackRequirement>
get "empty"(): boolean
get "invalid"(): boolean
}
}

declare module "com.simibubi.create.content.trains.schedule.ScheduleEntry" {
import { $List, $List$$Type } from "java.util.List"
import { $CompoundTag, $CompoundTag$$Type } from "net.minecraft.nbt.CompoundTag"
import { $ScheduleInstruction, $ScheduleInstruction$$Type } from "com.simibubi.create.content.trains.schedule.destination.ScheduleInstruction"
import { $ScheduleWaitCondition, $ScheduleWaitCondition$$Type } from "com.simibubi.create.content.trains.schedule.condition.ScheduleWaitCondition"

export class $ScheduleEntry {
constructor()

public static "fromTag"(compoundTag0: $CompoundTag$$Type): $ScheduleEntry
public "write"(): $CompoundTag
get "conditions"(): $List<$List<$ScheduleWaitCondition>>
set "conditions"(value: $List$$Type<$List$$Type<$ScheduleWaitCondition$$Type>>)
get "instruction"(): $ScheduleInstruction
set "instruction"(value: $ScheduleInstruction$$Type)
}
}

declare module "com.simibubi.create.foundation.mixin.accessor.UseOnContextAccessor" {
import { $BlockHitResult } from "net.minecraft.world.phys.BlockHitResult"

export interface $UseOnContextAccessor {
"create$getHitResult"(): $BlockHitResult
}

export namespace $UseOnContextAccessor {
const probejs$$marker: never
}
export abstract class $UseOnContextAccessor$$Static implements $UseOnContextAccessor {
}
}

declare module "com.simibubi.create.content.trains.schedule.condition.ScheduleWaitCondition" {
import { $ResourceLocation } from "net.minecraft.resources.ResourceLocation"
import { $Component } from "net.minecraft.network.chat.Component"
import { $GuiGraphics$$Type } from "net.minecraft.client.gui.GuiGraphics"
import { $ScheduleDataEntry } from "com.simibubi.create.content.trains.schedule.ScheduleDataEntry"
import { $MutableComponent } from "net.minecraft.network.chat.MutableComponent"
import { $List } from "java.util.List"
import { $CompoundTag, $CompoundTag$$Type } from "net.minecraft.nbt.CompoundTag"
import { $Pair } from "net.createmod.catnip.data.Pair"
import { $ModularGuiLineBuilder$$Type } from "com.simibubi.create.foundation.gui.ModularGuiLineBuilder"
import { $Train$$Type } from "com.simibubi.create.content.trains.entity.Train"
import { $ItemStack, $ItemStack$$Type } from "net.minecraft.world.item.ItemStack"
import { $Level$$Type } from "net.minecraft.world.level.Level"

export class $ScheduleWaitCondition extends $ScheduleDataEntry {
constructor()

public static "fromTag"(compoundTag0: $CompoundTag$$Type): $ScheduleWaitCondition
public "getId"(): $ResourceLocation
public "getItem"(int0: integer): $ItemStack
public "getSecondLineIcon"(): $ItemStack
public "getSecondLineTooltip"(int0: integer): $List<$Component>
public "getSummary"(): $Pair<$ItemStack, $Component>
public "getTitleAs"(string0: string): $List<$Component>
public "getWaitingStatus"(level0: $Level$$Type, train1: $Train$$Type, compoundTag2: $CompoundTag$$Type): $MutableComponent
/** Client only, do not use in server scripts */
public "initConfigurationWidgets"(modularGuiLineBuilder0: $ModularGuiLineBuilder$$Type): void
/** Client only, do not use in server scripts */
public "renderSpecialIcon"(guiGraphics0: $GuiGraphics$$Type, int1: integer, int2: integer): boolean
public "setItem"(int0: integer, itemStack1: $ItemStack$$Type): void
public "slotsTargeted"(): integer
public "tickCompletion"(level0: $Level$$Type, train1: $Train$$Type, compoundTag2: $CompoundTag$$Type): boolean
public "write"(): $CompoundTag
get "id"(): $ResourceLocation
get "secondLineIcon"(): $ItemStack
get "summary"(): $Pair<$ItemStack, $Component>
}
}

declare module "com.simibubi.create.api.schematic.requirement.SpecialBlockItemRequirement" {
import { $BlockState$$Type } from "net.minecraft.world.level.block.state.BlockState"
import { $BlockEntity$$Type } from "net.minecraft.world.level.block.entity.BlockEntity"
import { $ItemRequirement } from "com.simibubi.create.content.schematics.requirement.ItemRequirement"

export interface $SpecialBlockItemRequirement {
"getRequiredItems"(blockState0: $BlockState$$Type, blockEntity1: $BlockEntity$$Type): $ItemRequirement
}

export namespace $SpecialBlockItemRequirement {
const probejs$$marker: never
}
export abstract class $SpecialBlockItemRequirement$$Static implements $SpecialBlockItemRequirement {
}
}

declare module "com.simibubi.create.content.trains.graph.TrackGraph" {
import { $TrackNodeLocation$DiscoveredLocation$$Type } from "com.simibubi.create.content.trains.graph.TrackNodeLocation$DiscoveredLocation"
import { $Collection } from "java.util.Collection"
import { $Couple$$Type } from "net.createmod.catnip.data.Couple"
import { $Set } from "java.util.Set"
import { $BezierConnection$$Type } from "com.simibubi.create.content.trains.track.BezierConnection"
import { $UUID, $UUID$$Type } from "java.util.UUID"
import { $TrackEdgePoint, $TrackEdgePoint$$Type } from "com.simibubi.create.content.trains.signal.TrackEdgePoint"
import { $TrackNodeLocation, $TrackNodeLocation$$Type } from "com.simibubi.create.content.trains.graph.TrackNodeLocation"
import { $Pair$$Type } from "net.createmod.catnip.data.Pair"
import { $CompoundTag, $CompoundTag$$Type } from "net.minecraft.nbt.CompoundTag"
import { $TrackEdge, $TrackEdge$$Type } from "com.simibubi.create.content.trains.graph.TrackEdge"
import { $AtomicInteger } from "java.util.concurrent.atomic.AtomicInteger"
import { $Vec3$$Type } from "net.minecraft.world.phys.Vec3"
import { $Map, $Map$$Type } from "java.util.Map"
import { $LevelAccessor$$Type } from "net.minecraft.world.level.LevelAccessor"
import { $Color, $Color$$Type } from "net.createmod.catnip.theme.Color"
import { $TrackNode, $TrackNode$$Type } from "com.simibubi.create.content.trains.graph.TrackNode"
import { $Level$$Type } from "net.minecraft.world.level.Level"
import { $TrackGraphBounds } from "com.simibubi.create.content.trains.graph.TrackGraphBounds"
import { $DimensionPalette$$Type } from "com.simibubi.create.content.trains.graph.DimensionPalette"
import { $EdgePointType$$Type } from "com.simibubi.create.content.trains.graph.EdgePointType"

export class $TrackGraph {
static readonly "graphNetIdGenerator": $AtomicInteger
static readonly "nodeNetIdGenerator": $AtomicInteger

constructor()
constructor(uUID0: $UUID$$Type)

public "addNode"(trackNode0: $TrackNode$$Type): void
public "addNodeIfAbsent"(trackNode0: $TrackNode$$Type): boolean
public "addPoint"<T extends $TrackEdgePoint>(edgePointType0: $EdgePointType$$Type<T>, t1: T): void
public "connectNodes"(levelAccessor0: $LevelAccessor$$Type, discoveredLocation1: $TrackNodeLocation$DiscoveredLocation$$Type, discoveredLocation2: $TrackNodeLocation$DiscoveredLocation$$Type, bezierConnection3: $BezierConnection$$Type): void
public "createNodeIfAbsent"(discoveredLocation0: $TrackNodeLocation$DiscoveredLocation$$Type): boolean
public "deferIntersectionUpdate"(trackEdge0: $TrackEdge$$Type): void
public "disconnectNodes"(trackNode0: $TrackNode$$Type, trackNode1: $TrackNode$$Type): void
public "distanceToLocationSqr"(level0: $Level$$Type, vec31: $Vec3$$Type): float
public "findDisconnectedGraphs"(levelAccessor0: $LevelAccessor$$Type, map1: $Map$$Type<integer, $Pair$$Type<integer, $UUID$$Type>>): $Set<$TrackGraph>
public "getBounds"(level0: $Level$$Type): $TrackGraphBounds
public "getChecksum"(): integer
public "getConnection"(couple0: $Couple$$Type<$TrackNode$$Type>): $TrackEdge
public "getConnectionsFrom"(trackNode0: $TrackNode$$Type): $Map<$TrackNode, $TrackEdge>
public "getNode"(int0: integer): $TrackNode
public "getNodes"(): $Set<$TrackNodeLocation>
public "getPoint"<T extends $TrackEdgePoint>(edgePointType0: $EdgePointType$$Type<T>, uUID1: $UUID$$Type): T
public "getPoints"<T extends $TrackEdgePoint>(edgePointType0: $EdgePointType$$Type<T>): $Collection<T>
public "invalidateBounds"(): void
public "isEmpty"(): boolean
public "loadNode"(trackNodeLocation0: $TrackNodeLocation$$Type, int1: integer, vec32: $Vec3$$Type): void
public "locateNode"(trackNodeLocation0: $TrackNodeLocation$$Type): $TrackNode
public "locateNode"(level0: $Level$$Type, vec31: $Vec3$$Type): $TrackNode
public "markDirty"(): void
public static "nextGraphId"(): integer
public static "nextNodeId"(): integer
public "putConnection"(trackNode0: $TrackNode$$Type, trackNode1: $TrackNode$$Type, trackEdge2: $TrackEdge$$Type): boolean
public static "read"(compoundTag0: $CompoundTag$$Type, dimensionPalette1: $DimensionPalette$$Type): $TrackGraph
public "removeNode"(levelAccessor0: $LevelAccessor$$Type, trackNodeLocation1: $TrackNodeLocation$$Type): boolean
public "removePoint"<T extends $TrackEdgePoint>(edgePointType0: $EdgePointType$$Type<T>, uUID1: $UUID$$Type): T
public "resolveIntersectingEdgeGroups"(level0: $Level$$Type): void
public "setId"(uUID0: $UUID$$Type): void
public "setNetId"(int0: integer): void
public "tickPoints"(boolean0: boolean): void
public "transfer"(levelAccessor0: $LevelAccessor$$Type, trackNode1: $TrackNode$$Type, trackGraph2: $TrackGraph$$Type): void
public "transferAll"(trackGraph0: $TrackGraph$$Type): void
public "write"(dimensionPalette0: $DimensionPalette$$Type): $CompoundTag
get "color"(): $Color
set "color"(value: $Color$$Type)
get "id"(): $UUID
set "id"(value: $UUID$$Type)
get "checksum"(): integer
get "nodes"(): $Set<$TrackNodeLocation>
get "empty"(): boolean
set "netId"(value: integer)
}
}

declare module "com.simibubi.create.foundation.advancement.CreateAdvancement$Builder" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export class $CreateAdvancement$Builder {
}
}

declare module "com.simibubi.create.content.trains.entity.TrainStatus" {
import { $TrainStatus$StatusMessage$$Type } from "com.simibubi.create.content.trains.entity.TrainStatus$StatusMessage"
import { $Train$$Type } from "com.simibubi.create.content.trains.entity.Train"
import { $Level$$Type } from "net.minecraft.world.level.Level"

export class $TrainStatus {
constructor(train0: $Train$$Type)

public "addMessage"(statusMessage0: $TrainStatus$StatusMessage$$Type): void
public "crash"(): void
public "displayInformation"(string0: string, boolean1: boolean, ...object2s: any[]): void
public "doublePortal"(): void
public "endOfTrack"(): void
public "failedMigration"(): void
public "failedNavigation"(): void
public "failedNavigationNoTarget"(string0: string): void
public "failedPackageNoTarget"(string0: string): void
public "foundConductor"(): void
public "highStress"(): void
public "manualControls"(): void
public "missingConductor"(): void
public "missingCorrectConductor"(): void
public "newSchedule"(): void
public "successfulMigration"(): void
public "successfulNavigation"(): void
public "tick"(level0: $Level$$Type): void
public "trackOK"(): void
get "conductor"(): boolean
set "conductor"(value: boolean)
get "navigation"(): boolean
set "navigation"(value: boolean)
get "track"(): boolean
set "track"(value: boolean)
}
}

declare module "com.simibubi.create.content.trains.entity.Train" {
import { $ResourceLocation, $ResourceLocation$$Type } from "net.minecraft.resources.ResourceLocation"
import { $TravellingPoint$$Type } from "com.simibubi.create.content.trains.entity.TravellingPoint"
import { $LivingEntity } from "net.minecraft.world.entity.LivingEntity"
import { $IOccupiedCouplers } from "com.railwayteam.railways.mixin_interfaces.IOccupiedCouplers"
import { $AccessorTrain } from "com.railwayteam.railways.mixin.AccessorTrain"
import { $Direction$$Type } from "net.minecraft.core.Direction"
import { $TravellingPoint$IEdgePointListener } from "com.simibubi.create.content.trains.entity.TravellingPoint$IEdgePointListener"
import { $TrainStatus, $TrainStatus$$Type } from "com.simibubi.create.content.trains.entity.TrainStatus"
import { $ScheduleRuntime, $ScheduleRuntime$$Type } from "com.simibubi.create.content.trains.schedule.ScheduleRuntime"
import { $Navigation, $Navigation$$Type } from "com.simibubi.create.content.trains.entity.Navigation"
import { $IBufferBlockedTrain } from "com.railwayteam.railways.mixin_interfaces.IBufferBlockedTrain"
import { $Pair, $Pair$$Type } from "net.createmod.catnip.data.Pair"
import { $Carriage, $Carriage$$Type } from "com.simibubi.create.content.trains.entity.Carriage"
import { $Map, $Map$$Type } from "java.util.Map"
import { $BiConsumer$$Type } from "java.util.function.BiConsumer"
import { $TrackGraph, $TrackGraph$$Type } from "com.simibubi.create.content.trains.graph.TrackGraph"
import { $IIndexedSchedule } from "com.railwayteam.railways.mixin_interfaces.IIndexedSchedule"
import { $DimensionPalette$$Type } from "com.simibubi.create.content.trains.graph.DimensionPalette"
import { $ITrueMaxSpeedTrain } from "com.railwayteam.railways.mixin_interfaces.ITrueMaxSpeedTrain"
import { $Component, $Component$$Type } from "net.minecraft.network.chat.Component"
import { $Couple } from "net.createmod.catnip.data.Couple"
import { $Set, $Set$$Type } from "java.util.Set"
import { $UUID, $UUID$$Type } from "java.util.UUID"
import { $TravellingPoint$SteerDirection, $TravellingPoint$SteerDirection$$Type } from "com.simibubi.create.content.trains.entity.TravellingPoint$SteerDirection"
import { $ResourceKey, $ResourceKey$$Type } from "net.minecraft.resources.ResourceKey"
import { $Player, $Player$$Type } from "net.minecraft.world.entity.player.Player"
import { $Consumer$$Type } from "java.util.function.Consumer"
import { $List, $List$$Type } from "java.util.List"
import { $TrainIconType, $TrainIconType$$Type } from "com.simibubi.create.content.trains.entity.TrainIconType"
import { $CompoundTag, $CompoundTag$$Type } from "net.minecraft.nbt.CompoundTag"
import { $BlockPos, $BlockPos$$Type } from "net.minecraft.core.BlockPos"
import { $Vec3, $Vec3$$Type } from "net.minecraft.world.phys.Vec3"
import { $ICrashAdvancement } from "com.railwayteam.railways.mixin_interfaces.ICrashAdvancement"
import { $IShadowTrain } from "com.railwayteam.railways.mixin_interfaces.IShadowTrain"
import { $Optional } from "java.util.Optional"
import { $GlobalStation, $GlobalStation$$Type } from "com.simibubi.create.content.trains.station.GlobalStation"
import { $TrackNode, $TrackNode$$Type } from "com.simibubi.create.content.trains.graph.TrackNode"
import { $IHandcarTrain } from "com.railwayteam.railways.mixin_interfaces.IHandcarTrain"
import { $Level, $Level$$Type } from "net.minecraft.world.level.Level"
import { $IStrictSignalTrain } from "com.railwayteam.railways.mixin_interfaces.IStrictSignalTrain"

export class $Train implements $AccessorTrain, $IStrictSignalTrain, $IIndexedSchedule, $IBufferBlockedTrain, $ICrashAdvancement, $ITrueMaxSpeedTrain, $IShadowTrain, $IHandcarTrain, $IOccupiedCouplers {
constructor(uUID0: $UUID$$Type, uUID1: $UUID$$Type, trackGraph2: $TrackGraph$$Type, list3: $List$$Type<$Carriage$$Type>, list4: $List$$Type<integer>, boolean5: boolean)

public "acceleration"(): float
public "approachTargetSpeed"(float0: float): void
public "arriveAt"(globalStation0: $GlobalStation$$Type): void
public "backSignalListener"(): $TravellingPoint$IEdgePointListener
public "burnFuel"(): void
public "canDisassemble"(): boolean
public "cancelStall"(): void
public "collectInitiallyOccupiedSignalBlocks"(): void
public "countPlayerPassengers"(): integer
public "crash"(): void
public "detachFromTracks"(): void
public "determineHonk"(level0: $Level$$Type): void
public "disassemble"(direction0: $Direction$$Type, blockPos1: $BlockPos$$Type): boolean
public "distanceToLocationSqr"(level0: $Level$$Type, vec31: $Vec3$$Type): float
public "earlyTick"(level0: $Level$$Type): void
public "findCollidingTrain"(level0: $Level$$Type, vec31: $Vec3$$Type, vec32: $Vec3$$Type, resourceKey3: $ResourceKey$$Type<$Level>): $Pair<$Train, $Vec3>
public "forEachTravellingPoint"(consumer0: $Consumer$$Type<$TravellingPoint$$Type>): void
public "forEachTravellingPointBackwards"(biConsumer0: $BiConsumer$$Type<$TravellingPoint$$Type, double>): void
public "frontSignalListener"(): $TravellingPoint$IEdgePointListener
public "getCurrentStation"(): $GlobalStation
public "getEndpointEdges"(): $Couple<$Couple<$TrackNode>>
public "getNavigationPenalty"(): integer
public "getOwner"(level0: $Level$$Type): $LivingEntity
public "getPositionInDimension"(resourceKey0: $ResourceKey$$Type<$Level>): $Optional<$BlockPos>
public "getPresentDimensions"(): $List<$ResourceKey<$Level>>
public "getTotalLength"(): integer
public "hasBackwardConductor"(): boolean
public "hasForwardConductor"(): boolean
public "isTravellingOn"(trackNode0: $TrackNode$$Type): boolean
public "leaveStation"(): void
public "maxSpeed"(): float
public "maxTurnSpeed"(): float
public "railways$awardCrashAdvancements"(): void
public "railways$clearShadow"(): void
public "railways$getBlockedSign"(): integer
public "railways$getIndex"(): integer
public "railways$getOccupiedCouplers"(): $Set
public "railways$getShadowKey"(): $ResourceLocation
public "railways$isControlBlocked"(): boolean
public "railways$isHandcar"(): boolean
public "railways$isShadow"(): boolean
public "railways$setControlBlocked"(controlBlocked: boolean, forceBackwards: boolean): void
public "railways$setHandcar"(handcar: boolean): void
public "railways$setIndex"(index: integer): void
public "railways$setLimitBypass"(shouldBypass: boolean): void
public "railways$setShadow"(shadowKey: $ResourceLocation$$Type): void
public "railways$setStrictSignals"(strictSignals: boolean): void
public static "read"(compoundTag0: $CompoundTag$$Type, map1: $Map$$Type<$UUID$$Type, $TrackGraph$$Type>, dimensionPalette2: $DimensionPalette$$Type): $Train
public "reattachToTracks"(level0: $Level$$Type): void
public "setCurrentStation"(globalStation0: $GlobalStation$$Type): void
public "shouldCarriageSyncThisTick"(long0: long, int1: integer): boolean
public "tick"(level0: $Level$$Type): void
public "write"(dimensionPalette0: $DimensionPalette$$Type): $CompoundTag
get "accumulatedSteamRelease"(): float
set "accumulatedSteamRelease"(value: float)
get "backwardsDriver"(): $Player
set "backwardsDriver"(value: $Player$$Type)
get "cachedObserverFiltering"(): $Map<$UUID, $Pair<integer, boolean>>
set "cachedObserverFiltering"(value: $Map$$Type<$UUID$$Type, $Pair$$Type<integer, boolean>>)
get "carriageSpacing"(): $List<integer>
set "carriageSpacing"(value: $List$$Type<integer>)
get "carriageWaitingForChunks"(): integer
set "carriageWaitingForChunks"(value: integer)
get "carriages"(): $List<$Carriage>
set "carriages"(value: $List$$Type<$Carriage$$Type>)
get "currentStation"(): $UUID
set "currentStation"(value: $UUID$$Type)
get "currentlyBackwards"(): boolean
set "currentlyBackwards"(value: boolean)
get "derailed"(): boolean
set "derailed"(value: boolean)
get "doubleEnded"(): boolean
set "doubleEnded"(value: boolean)
get "fuelTicks"(): integer
set "fuelTicks"(value: integer)
get "graph"(): $TrackGraph
set "graph"(value: $TrackGraph$$Type)
get "honk"(): boolean
set "honk"(value: boolean)
get "honkPitch"(): integer
set "honkPitch"(value: integer)
get "honkTicks"(): integer
set "honkTicks"(value: integer)
get "icon"(): $TrainIconType
set "icon"(value: $TrainIconType$$Type)
get "id"(): $UUID
set "id"(value: $UUID$$Type)
get "invalid"(): boolean
set "invalid"(value: boolean)
get "lowHonk"(): boolean
set "lowHonk"(value: boolean)
get "manualSteer"(): $TravellingPoint$SteerDirection
set "manualSteer"(value: $TravellingPoint$SteerDirection$$Type)
get "manualTick"(): boolean
set "manualTick"(value: boolean)
get "mapColorIndex"(): integer
set "mapColorIndex"(value: integer)
get "migrationCooldown"(): integer
set "migrationCooldown"(value: integer)
get "name"(): $Component
set "name"(value: $Component$$Type)
get "navigation"(): $Navigation
set "navigation"(value: $Navigation$$Type)
get "occupiedObservers"(): $Set<$UUID>
set "occupiedObservers"(value: $Set$$Type<$UUID$$Type>)
get "occupiedSignalBlocks"(): $Map<$UUID, $UUID>
set "occupiedSignalBlocks"(value: $Map$$Type<$UUID$$Type, $UUID$$Type>)
get "owner"(): $UUID
set "owner"(value: $UUID$$Type)
get "railways$occupiedCouplers"(): $Set
set "railways$occupiedCouplers"(value: $Set$$Type)
get "reservedSignalBlocks"(): $Set<$UUID>
set "reservedSignalBlocks"(value: $Set$$Type<$UUID$$Type>)
get "runtime"(): $ScheduleRuntime
set "runtime"(value: $ScheduleRuntime$$Type)
get "speed"(): double
set "speed"(value: double)
get "speedBeforeStall"(): double
set "speedBeforeStall"(value: double)
get "status"(): $TrainStatus
set "status"(value: $TrainStatus$$Type)
get "targetSpeed"(): double
set "targetSpeed"(value: double)
get "throttle"(): double
set "throttle"(value: double)
get "updateSignalBlocks"(): boolean
set "updateSignalBlocks"(value: boolean)
get "endpointEdges"(): $Couple<$Couple<$TrackNode>>
get "navigationPenalty"(): integer
get "presentDimensions"(): $List<$ResourceKey<$Level>>
get "totalLength"(): integer
}
}

declare module "com.simibubi.create.content.trains.schedule.IScheduleInput" {
import { $ResourceLocation } from "net.minecraft.resources.ResourceLocation"
import { $List } from "java.util.List"
import { $CompoundTag, $CompoundTag$$Type } from "net.minecraft.nbt.CompoundTag"
import { $Pair } from "net.createmod.catnip.data.Pair"
import { $Component } from "net.minecraft.network.chat.Component"
import { $GuiGraphics$$Type } from "net.minecraft.client.gui.GuiGraphics"
import { $ModularGuiLineBuilder$$Type } from "com.simibubi.create.foundation.gui.ModularGuiLineBuilder"
import { $ItemStack, $ItemStack$$Type } from "net.minecraft.world.item.ItemStack"

export interface $IScheduleInput {
"getData"(): $CompoundTag
"getId"(): $ResourceLocation
"getItem"(int0: integer): $ItemStack
"getSecondLineIcon"(): $ItemStack
"getSecondLineTooltip"(int0: integer): $List<$Component>
"getSummary"(): $Pair<$ItemStack, $Component>
"getTitleAs"(string0: string): $List<$Component>
/** Client only, do not use in server scripts */
"initConfigurationWidgets"(modularGuiLineBuilder0: $ModularGuiLineBuilder$$Type): void
/** Client only, do not use in server scripts */
"renderSpecialIcon"(guiGraphics0: $GuiGraphics$$Type, int1: integer, int2: integer): boolean
"setData"(compoundTag0: $CompoundTag$$Type): void
"setItem"(int0: integer, itemStack1: $ItemStack$$Type): void
"slotsTargeted"(): integer
get "data"(): $CompoundTag
get "id"(): $ResourceLocation
get "secondLineIcon"(): $ItemStack
get "summary"(): $Pair<$ItemStack, $Component>
set "data"(value: $CompoundTag$$Type)
}

export namespace $IScheduleInput {
const probejs$$marker: never
}
export abstract class $IScheduleInput$$Static implements $IScheduleInput {
}
}

declare module "com.simibubi.create.content.kinetics.belt.behaviour.BeltProcessingBehaviour$ProcessingResult" {
import { $Enum } from "java.lang.Enum"

export class $BeltProcessingBehaviour$ProcessingResult extends $Enum<$BeltProcessingBehaviour$ProcessingResult> {
static readonly "HOLD": $BeltProcessingBehaviour$ProcessingResult
static readonly "PASS": $BeltProcessingBehaviour$ProcessingResult
static readonly "REMOVE": $BeltProcessingBehaviour$ProcessingResult

public static "valueOf"(string0: string): $BeltProcessingBehaviour$ProcessingResult
public static "values"(): $BeltProcessingBehaviour$ProcessingResult[]
}
}

declare module "com.simibubi.create.content.trains.track.TrackMaterial$TrackModelHolder" {
import { $PartialModel, $PartialModel$$Type } from "dev.engine_room.flywheel.lib.model.baked.PartialModel"
import { $Record } from "java.lang.Record"

export class $TrackMaterial$TrackModelHolder extends $Record {
constructor(tie: $PartialModel$$Type, leftSegment: $PartialModel$$Type, rightSegment: $PartialModel$$Type)

public "leftSegment"(): $PartialModel
public "rightSegment"(): $PartialModel
public "tie"(): $PartialModel
}
}

declare module "com.simibubi.create.api.schematic.requirement.SpecialBlockEntityItemRequirement" {
import { $BlockState$$Type } from "net.minecraft.world.level.block.state.BlockState"
import { $ItemRequirement } from "com.simibubi.create.content.schematics.requirement.ItemRequirement"

export interface $SpecialBlockEntityItemRequirement {
"getRequiredItems"(blockState0: $BlockState$$Type): $ItemRequirement
}

export namespace $SpecialBlockEntityItemRequirement {
const probejs$$marker: never
}
export abstract class $SpecialBlockEntityItemRequirement$$Static implements $SpecialBlockEntityItemRequirement {
}
}

declare module "com.simibubi.create.content.trains.track.TrackBlockEntity" {
import { $BlockState$$Type } from "net.minecraft.world.level.block.state.BlockState"
import { $LazyOptional } from "net.minecraftforge.common.util.LazyOptional"
import { $TrackedData, $TrackedData$$Type } from "dev.corgitaco.dataanchor.data.TrackedData"
import { $Pair, $Pair$$Type } from "net.createmod.catnip.data.Pair"
import { $Map } from "java.util.Map"
import { $TrackBlockEntityTilt, $TrackBlockEntityTilt$$Type } from "com.simibubi.create.content.trains.track.TrackBlockEntityTilt"
import { $TrackedDataRegistry$$Type } from "dev.corgitaco.dataanchor.data.registry.TrackedDataRegistry"
import { $TransformableBlockEntity } from "com.simibubi.create.api.contraption.transformable.TransformableBlockEntity"
import { $SmartBlockEntity } from "com.simibubi.create.foundation.blockEntity.SmartBlockEntity"
import { $BezierConnection, $BezierConnection$$Type } from "com.simibubi.create.content.trains.track.BezierConnection"
import { $ModelData } from "net.minecraftforge.client.model.data.ModelData"
import { $IHasTrackCasing } from "com.railwayteam.railways.mixin_interfaces.IHasTrackCasing"
import { $BlockEntity$$Type } from "net.minecraft.world.level.block.entity.BlockEntity"
import { $ResourceKey, $ResourceKey$$Type } from "net.minecraft.resources.ResourceKey"
import { $Capability$$Type } from "net.minecraftforge.common.capabilities.Capability"
import { $Player$$Type } from "net.minecraft.world.entity.player.Player"
import { $CompoundTag$$Type } from "net.minecraft.nbt.CompoundTag"
import { $TrackedDataContainer } from "dev.corgitaco.dataanchor.data.TrackedDataContainer"
import { $BlockEntityType$$Type } from "net.minecraft.world.level.block.entity.BlockEntityType"
import { $BlockPos, $BlockPos$$Type } from "net.minecraft.core.BlockPos"
import { $StructureTransform$$Type } from "com.simibubi.create.content.contraptions.StructureTransform"
import { $IMergeableBE } from "com.simibubi.create.foundation.blockEntity.IMergeableBE"
import { $Block, $Block$$Type } from "net.minecraft.world.level.block.Block"
import { $Level, $Level$$Type } from "net.minecraft.world.level.Level"

export class $TrackBlockEntity extends $SmartBlockEntity implements $TransformableBlockEntity, $IMergeableBE, $IHasTrackCasing {
constructor(blockEntityType0: $BlockEntityType$$Type<any>, blockPos1: $BlockPos$$Type, blockState2: $BlockState$$Type)

public "accept"(blockEntity0: $BlockEntity$$Type): void
public "addConnection"(bezierConnection0: $BezierConnection$$Type): void
public "bind"(resourceKey0: $ResourceKey$$Type<$Level>, blockPos1: $BlockPos$$Type): void
public "deserializeNBT"(compoundTag0: $CompoundTag$$Type): void
public "getCapability"<T>(capability0: $Capability$$Type<T>): $LazyOptional<T>
public "getConnections"(): $Map<$BlockPos, $BezierConnection>
public "getModelData"(): $ModelData
public static "getTrackCasing"(world: $Level$$Type, pos: $BlockPos$$Type): $Block
public "hasCustomOutlineRendering"(player0: $Player$$Type): boolean
public "hasInteractableConnections"(): boolean
public static "isAlternate"(world: $Level$$Type, pos: $BlockPos$$Type): boolean
public "isTilted"(): boolean
public static "makeBasicContainer"<O, T extends $TrackedData<O>>(registry: $TrackedDataRegistry$$Type<O, T>, o: O, isClient: boolean): $TrackedDataContainer<O, T>
public static "makeBasicContainer"<O, T extends $TrackedData<O>>(registry: $TrackedDataRegistry$$Type<O, T>, o: O, isClient: boolean, lazyLoad: boolean): $TrackedDataContainer<O, T>
public "manageFakeTracksAlong"(bezierConnection0: $BezierConnection$$Type, boolean1: boolean): void
public "onLoad"(): void
public "railways$getTrackCasing"(): $Block
public "railways$isAlternate"(): boolean
public "railways$setAlternate"(alternate: boolean): void
public "railways$setTrackCasing"(trackCasing: $Block$$Type): void
public "removeConnection"(blockPos0: $BlockPos$$Type): void
public "removeInboundConnections"(boolean0: boolean): void
public "requestModelDataUpdate"(): void
public "sdl$isDynamicLightEnabled"(): boolean
public "sdl$setDynamicLightEnabled"(enabled: boolean): void
public static "setAlternateModel"(world: $Level$$Type, pos: $BlockPos$$Type, useAlternateModel: boolean): boolean
public static "setTrackCasing"(world: $Level$$Type, pos: $BlockPos$$Type, trackCasing: $Block$$Type): void
public "transform"(blockEntity0: $BlockEntity$$Type, structureTransform1: $StructureTransform$$Type): void
public "validateConnections"(): void
get "boundLocation"(): $Pair<$ResourceKey<$Level>, $BlockPos>
set "boundLocation"(value: $Pair$$Type<$ResourceKey$$Type<$Level$$Type>, $BlockPos$$Type>)
get "tilt"(): $TrackBlockEntityTilt
set "tilt"(value: $TrackBlockEntityTilt$$Type)
get "connections"(): $Map<$BlockPos, $BezierConnection>
get "modelData"(): $ModelData
get "tilted"(): boolean
}
}

declare module "com.simibubi.create.content.trains.entity.TravellingPoint$IEdgePointListener" {
import { $BiPredicate, $BiPredicate$$Type } from "java.util.function.BiPredicate"
import { $Pair, $Pair$$Type } from "net.createmod.catnip.data.Pair"
import { $Couple, $Couple$$Type } from "net.createmod.catnip.data.Couple"
import { $TrackNode, $TrackNode$$Type } from "com.simibubi.create.content.trains.graph.TrackNode"
import { $TrackEdgePoint, $TrackEdgePoint$$Type } from "com.simibubi.create.content.trains.signal.TrackEdgePoint"

export interface $TravellingPoint$IEdgePointListener extends $BiPredicate<double, $Pair<$TrackEdgePoint, $Couple<$TrackNode>>> {
"and"(biPredicate0: $BiPredicate$$Type<double, $Pair$$Type<$TrackEdgePoint$$Type, $Couple$$Type<$TrackNode$$Type>>>): $BiPredicate<double, $Pair<$TrackEdgePoint, $Couple<$TrackNode>>>
"negate"(): $BiPredicate<double, $Pair<$TrackEdgePoint, $Couple<$TrackNode>>>
"or"(biPredicate0: $BiPredicate$$Type<double, $Pair$$Type<$TrackEdgePoint$$Type, $Couple$$Type<$TrackNode$$Type>>>): $BiPredicate<double, $Pair<$TrackEdgePoint, $Couple<$TrackNode>>>
"test"(double0: double, pair1: $Pair$$Type<$TrackEdgePoint$$Type, $Couple$$Type<$TrackNode$$Type>>): boolean
}

export namespace $TravellingPoint$IEdgePointListener {
const probejs$$marker: never
}
export abstract class $TravellingPoint$IEdgePointListener$$Static implements $TravellingPoint$IEdgePointListener {
}
}

declare module "com.simibubi.create.content.trains.entity.Carriage$DimensionalCarriageEntity" {
import { $TrackNodeLocation, $TrackNodeLocation$$Type } from "com.simibubi.create.content.trains.graph.TrackNodeLocation"
import { $CompoundTag, $CompoundTag$$Type } from "net.minecraft.nbt.CompoundTag"
import { $Carriage$$Type } from "com.simibubi.create.content.trains.entity.Carriage"
import { $CarriageContraptionEntity, $CarriageContraptionEntity$$Type } from "com.simibubi.create.content.trains.entity.CarriageContraptionEntity"
import { $Vec3, $Vec3$$Type } from "net.minecraft.world.phys.Vec3"
import { $Couple, $Couple$$Type } from "net.createmod.catnip.data.Couple"
import { $Level } from "net.minecraft.world.level.Level"
import { $WeakReference, $WeakReference$$Type } from "java.lang.ref.WeakReference"
import { $ResourceKey$$Type } from "net.minecraft.resources.ResourceKey"

export class $Carriage$DimensionalCarriageEntity {
constructor(carriage0: $Carriage$$Type)

public "alignEntity"(carriageContraptionEntity0: $CarriageContraptionEntity$$Type): void
public "discardPivot"(): void
public "findPivot"(resourceKey0: $ResourceKey$$Type<$Level>, boolean1: boolean): $TrackNodeLocation
public "leadingAnchor"(): $Vec3
public "maxAllowedLocalCoord"(): integer
public "minAllowedLocalCoord"(): integer
public "read"(compoundTag0: $CompoundTag$$Type): void
public "trailingAnchor"(): $Vec3
public "updateCutoff"(boolean0: boolean): void
public "updatePassengerLoadout"(): void
public "updateRenderedCutoff"(): void
public "write"(): $CompoundTag
get "cutoff"(): float
set "cutoff"(value: float)
get "entity"(): $WeakReference<$CarriageContraptionEntity>
set "entity"(value: $WeakReference$$Type<$CarriageContraptionEntity$$Type>)
get "pivot"(): $TrackNodeLocation
set "pivot"(value: $TrackNodeLocation$$Type)
get "pointsInitialised"(): boolean
set "pointsInitialised"(value: boolean)
get "positionAnchor"(): $Vec3
set "positionAnchor"(value: $Vec3$$Type)
get "rotationAnchors"(): $Couple<$Vec3>
set "rotationAnchors"(value: $Couple$$Type<$Vec3$$Type>)
}
}

declare module "com.simibubi.create.content.trains.graph.EdgePointType" {
import { $ResourceLocation, $ResourceLocation$$Type } from "net.minecraft.resources.ResourceLocation"
import { $TrackObserver } from "com.simibubi.create.content.trains.observer.TrackObserver"
import { $Map } from "java.util.Map"
import { $SignalBoundary } from "com.simibubi.create.content.trains.signal.SignalBoundary"
import { $GlobalStation } from "com.simibubi.create.content.trains.station.GlobalStation"
import { $FriendlyByteBuf$$Type } from "net.minecraft.network.FriendlyByteBuf"
import { $Supplier$$Type } from "java.util.function.Supplier"
import { $DimensionPalette$$Type } from "com.simibubi.create.content.trains.graph.DimensionPalette"
import { $TrackEdgePoint, $TrackEdgePoint$$Type } from "com.simibubi.create.content.trains.signal.TrackEdgePoint"

export class $EdgePointType<T extends $TrackEdgePoint = $TrackEdgePoint> {
static readonly "OBSERVER": $EdgePointType<$TrackObserver>
static readonly "SIGNAL": $EdgePointType<$SignalBoundary>
static readonly "STATION": $EdgePointType<$GlobalStation>
static readonly "TYPES": $Map<$ResourceLocation, $EdgePointType<any>>

constructor(resourceLocation0: $ResourceLocation$$Type, supplier1: $Supplier$$Type<T>)

public "create"(): T
public "getId"(): $ResourceLocation
public static "read"(friendlyByteBuf0: $FriendlyByteBuf$$Type, dimensionPalette1: $DimensionPalette$$Type): $TrackEdgePoint
public static "register"<T extends $TrackEdgePoint>(resourceLocation0: $ResourceLocation$$Type, supplier1: $Supplier$$Type<T>): $EdgePointType<T>
get "id"(): $ResourceLocation
}
}

declare module "com.simibubi.create.content.contraptions.render.ActorVisual" {
import { $MovementContext$$Type } from "com.simibubi.create.content.contraptions.behaviour.MovementContext"
import { $Visual } from "dev.engine_room.flywheel.api.visual.Visual"
import { $VisualizationContext$$Type } from "dev.engine_room.flywheel.api.visualization.VisualizationContext"
import { $BlockAndTintGetter$$Type } from "net.minecraft.world.level.BlockAndTintGetter"

export class $ActorVisual implements $Visual {
constructor(visualizationContext0: $VisualizationContext$$Type, blockAndTintGetter1: $BlockAndTintGetter$$Type, movementContext2: $MovementContext$$Type)

public "beginFrame"(): void
public "delete"(): void
public "tick"(): void
public "update"(float0: float): void
}
}

declare module "com.simibubi.create.content.trains.graph.DiscoveredPath" {
import { $List, $List$$Type } from "java.util.List"
import { $Couple, $Couple$$Type } from "net.createmod.catnip.data.Couple"
import { $TrackNode, $TrackNode$$Type } from "com.simibubi.create.content.trains.graph.TrackNode"
import { $GlobalStation, $GlobalStation$$Type } from "com.simibubi.create.content.trains.station.GlobalStation"

export class $DiscoveredPath {
constructor(double0: double, double1: double, list2: $List$$Type<$Couple$$Type<$TrackNode$$Type>>, globalStation3: $GlobalStation$$Type)

get "cost"(): double
set "cost"(value: double)
get "destination"(): $GlobalStation
set "destination"(value: $GlobalStation$$Type)
get "distance"(): double
set "distance"(value: double)
get "path"(): $List<$Couple<$TrackNode>>
set "path"(value: $List$$Type<$Couple$$Type<$TrackNode$$Type>>)
}
}

declare module "com.simibubi.create.content.kinetics.base.IRotate$SpeedLevel" {
import { $Enum } from "java.lang.Enum"
import { $ChatFormatting } from "net.minecraft.ChatFormatting"
import { $LangBuilder } from "net.createmod.catnip.lang.LangBuilder"

export class $IRotate$SpeedLevel extends $Enum<$IRotate$SpeedLevel> {
static readonly "FAST": $IRotate$SpeedLevel
static readonly "MEDIUM": $IRotate$SpeedLevel
static readonly "NONE": $IRotate$SpeedLevel
static readonly "SLOW": $IRotate$SpeedLevel

public "getColor"(): integer
public static "getFormattedSpeedText"(float0: float, boolean1: boolean): $LangBuilder
public "getParticleSpeed"(): integer
public "getSpeedValue"(): float
public "getTextColor"(): $ChatFormatting
public static "of"(float0: float): $IRotate$SpeedLevel
public static "valueOf"(string0: string): $IRotate$SpeedLevel
public static "values"(): $IRotate$SpeedLevel[]
get "color"(): integer
get "particleSpeed"(): integer
get "speedValue"(): float
get "textColor"(): $ChatFormatting
}
}

declare module "com.simibubi.create.foundation.blockEntity.CachedRenderBBBlockEntity" {
import { $AABB } from "net.minecraft.world.phys.AABB"
import { $BlockState$$Type } from "net.minecraft.world.level.block.state.BlockState"
import { $ModelData } from "net.minecraftforge.client.model.data.ModelData"
import { $Capability$$Type } from "net.minecraftforge.common.capabilities.Capability"
import { $LazyOptional } from "net.minecraftforge.common.util.LazyOptional"
import { $Player$$Type } from "net.minecraft.world.entity.player.Player"
import { $TrackedData, $TrackedData$$Type } from "dev.corgitaco.dataanchor.data.TrackedData"
import { $CompoundTag$$Type } from "net.minecraft.nbt.CompoundTag"
import { $TrackedDataContainer } from "dev.corgitaco.dataanchor.data.TrackedDataContainer"
import { $BlockEntityType$$Type } from "net.minecraft.world.level.block.entity.BlockEntityType"
import { $BlockPos$$Type } from "net.minecraft.core.BlockPos"
import { $TrackedDataRegistry$$Type } from "dev.corgitaco.dataanchor.data.registry.TrackedDataRegistry"
import { $SyncedBlockEntity } from "com.simibubi.create.foundation.blockEntity.SyncedBlockEntity"

export class $CachedRenderBBBlockEntity extends $SyncedBlockEntity {
constructor(blockEntityType0: $BlockEntityType$$Type<any>, blockPos1: $BlockPos$$Type, blockState2: $BlockState$$Type)

public "deserializeNBT"(compoundTag0: $CompoundTag$$Type): void
public "getCapability"<T>(capability0: $Capability$$Type<T>): $LazyOptional<T>
public "getModelData"(): $ModelData
/** Client only, do not use in server scripts */
public "getRenderBoundingBox"(): $AABB
public "hasCustomOutlineRendering"(player0: $Player$$Type): boolean
public static "makeBasicContainer"<O, T extends $TrackedData<O>>(registry: $TrackedDataRegistry$$Type<O, T>, o: O, isClient: boolean): $TrackedDataContainer<O, T>
public static "makeBasicContainer"<O, T extends $TrackedData<O>>(registry: $TrackedDataRegistry$$Type<O, T>, o: O, isClient: boolean, lazyLoad: boolean): $TrackedDataContainer<O, T>
public "onLoad"(): void
public "requestModelDataUpdate"(): void
public "sdl$isDynamicLightEnabled"(): boolean
public "sdl$setDynamicLightEnabled"(enabled: boolean): void
get "modelData"(): $ModelData
get "renderBoundingBox"(): $AABB
}
}

declare module "com.simibubi.create.foundation.mixin.accessor.SystemReportAccessor" {
import { $Map } from "java.util.Map"

export interface $SystemReportAccessor {
"getEntries"(): $Map<string, string>
get "entries"(): $Map<string, string>
}

export namespace $SystemReportAccessor {
const probejs$$marker: never
}
export abstract class $SystemReportAccessor$$Static implements $SystemReportAccessor {
}
}

declare module "com.simibubi.create.content.contraptions.OrientedContraptionEntity" {
import { $ResourceLocation, $ResourceLocation$$Type } from "net.minecraft.resources.ResourceLocation"
import { $EntityType$$Type } from "net.minecraft.world.entity.EntityType"
import { $Direction, $Direction$$Type } from "net.minecraft.core.Direction"
import { $GameProfile } from "com.mojang.authlib.GameProfile"
import { $BlockState$$Type } from "net.minecraft.world.level.block.state.BlockState"
import { $FluidType$$Type } from "net.minecraftforge.fluids.FluidType"
import { $LazyOptional } from "net.minecraftforge.common.util.LazyOptional"
import { $TrackedData, $TrackedData$$Type } from "dev.corgitaco.dataanchor.data.TrackedData"
import { $BlockContainerJS, $BlockContainerJS$$Type } from "dev.latvian.mods.kubejs.level.BlockContainerJS"
import { $BiPredicate$$Type } from "java.util.function.BiPredicate"
import { $MinecraftServer } from "net.minecraft.server.MinecraftServer"
import { $Pose$$Type } from "net.minecraft.world.entity.Pose"
import { $MobCategory } from "net.minecraft.world.entity.MobCategory"
import { $MinecartController } from "com.simibubi.create.content.contraptions.minecart.capability.MinecartController"
import { $Contraption$$Type } from "com.simibubi.create.content.contraptions.Contraption"
import { $ObjectList } from "it.unimi.dsi.fastutil.objects.ObjectList"
import { $TrackedDataRegistry$$Type } from "dev.corgitaco.dataanchor.data.registry.TrackedDataRegistry"
import { $SoundAction$$Type } from "net.minecraftforge.common.SoundAction"
import { $Component, $Component$$Type } from "net.minecraft.network.chat.Component"
import { $Couple } from "net.createmod.catnip.data.Couple"
import { $PartEntity } from "net.minecraftforge.entity.PartEntity"
import { $UUID, $UUID$$Type } from "java.util.UUID"
import { $Capability$$Type } from "net.minecraftforge.common.capabilities.Capability"
import { $RayTraceResultJS } from "dev.latvian.mods.kubejs.entity.RayTraceResultJS"
import { $ScriptType } from "dev.latvian.mods.kubejs.script.ScriptType"
import { $Player$$Type } from "net.minecraft.world.entity.player.Player"
import { $HitResult$$Type } from "net.minecraft.world.phys.HitResult"
import { $EntityArrayList } from "dev.latvian.mods.kubejs.player.EntityArrayList"
import { $Entity, $Entity$$Type } from "net.minecraft.world.entity.Entity"
import { $CompoundTag, $CompoundTag$$Type } from "net.minecraft.nbt.CompoundTag"
import { $TrackedDataContainer } from "dev.corgitaco.dataanchor.data.TrackedDataContainer"
import { $AbstractContraptionEntity } from "com.simibubi.create.content.contraptions.AbstractContraptionEntity"
import { $BlockPos$$Type } from "net.minecraft.core.BlockPos"
import { $SoundEvent, $SoundEvent$$Type } from "net.minecraft.sounds.SoundEvent"
import { $ContraptionRelocationPacket$$Type } from "com.simibubi.create.content.contraptions.ContraptionRelocationPacket"
import { $Boat$$Type } from "net.minecraft.world.entity.vehicle.Boat"
import { $FluidState$$Type } from "net.minecraft.world.level.material.FluidState"
import { $AccessorOrientedContraptionEntity } from "com.railwayteam.railways.mixin.AccessorOrientedContraptionEntity"
import { $EntityDimensions$$Type } from "net.minecraft.world.entity.EntityDimensions"
import { $ItemStack } from "net.minecraft.world.item.ItemStack"
import { $Level, $Level$$Type } from "net.minecraft.world.level.Level"

export class $OrientedContraptionEntity extends $AbstractContraptionEntity implements $AccessorOrientedContraptionEntity {
constructor(entityType0: $EntityType$$Type<any>, level1: $Level$$Type)

public "alwaysAccepts"(): boolean
public "attack"(hp: float): void
public "canBeRiddenUnderFluidType"(fluidType0: $FluidType$$Type, entity1: $Entity$$Type): boolean
public "canFluidExtinguish"(fluidType0: $FluidType$$Type): boolean
public "canHydrateInFluidType"(fluidType0: $FluidType$$Type): boolean
public "canRiderInteract"(): boolean
public "canStartSwimming"(): boolean
public "canSwimInFluidType"(fluidType0: $FluidType$$Type): boolean
public "canaryOnBlockCacheDeleted"(): void
public "canaryOnBlockCacheSet"(blockState0: $BlockState$$Type): void
public "canarySetClimbingMobCachingSectionUpdateBehavior"(boolean0: boolean): void
public static "create"(level0: $Level$$Type, contraption1: $Contraption$$Type, direction2: $Direction$$Type): $OrientedContraptionEntity
public static "createAtYaw"(level0: $Level$$Type, contraption1: $Contraption$$Type, direction2: $Direction$$Type, float3: float): $OrientedContraptionEntity
public "deserializeNBT"(compoundTag0: $CompoundTag$$Type): void
public "getBlock"(): $BlockContainerJS
public "getCapability"<T>(capability0: $Capability$$Type<T>): $LazyOptional<T>
public "getClassification"(boolean0: boolean): $MobCategory
public "getCoupledCartsIfPresent"(): $Couple<$MinecartController>
public "getCouplingId"(): $UUID
public "getDisplayName"(): $Component
public "getDistance"(pos: $BlockPos$$Type): double
public "getDistance"(x: double, y: double, z: double): double
public "getDistanceSq"(pos: $BlockPos$$Type): double
/** @deprecated */
public "getEyeHeightForge"(pose0: $Pose$$Type, entityDimensions1: $EntityDimensions$$Type): float
public "getFacing"(): $Direction
public "getFluidFallDistanceModifier"(fluidType0: $FluidType$$Type): float
public "getFluidMotionScale"(fluidType0: $FluidType$$Type): double
public "getInitialOrientation"(): $Direction
public "getInitialYaw"(): float
public "getItem"(): $ItemStack
public "getLevel"(): $Level
public static "getMatched"(entity: $Entity$$Type): $ObjectList<$ResourceLocation>
public "getMotionX"(): double
public "getMotionY"(): double
public "getMotionZ"(): double
public "getName"(): $Component
public "getNbt"(): $CompoundTag
public "getParts"(): $PartEntity<any>[]
public "getPassengers"(): $EntityArrayList
public "getPickedResult"(hitResult0: $HitResult$$Type): $ItemStack
public "getProfile"(): $GameProfile
public "getScriptType"(): $ScriptType
public "getServer"(): $MinecraftServer
public "getSoundFromFluidType"(fluidType0: $FluidType$$Type, soundAction1: $SoundAction$$Type): $SoundEvent
public "getStepHeight"(): float
public "getTeamId"(): string
public "getType"(): string
/** Client only, do not use in server scripts */
public static "handleRelocationPacket"(contraptionRelocationPacket0: $ContraptionRelocationPacket$$Type): void
public "hasCustomOutlineRendering"(player0: $Player$$Type): boolean
public "isAmbientCreature"(): boolean
public "isAnimal"(): boolean
public "isDynamicLightEnabled"(): boolean
public "isDynamicLightEnabledH"(): boolean
public "isEyeInFluidType"(fluidType0: $FluidType$$Type): boolean
public "isFrame"(): boolean
public "isInFluidType"(fluidState0: $FluidState$$Type): boolean
public "isInFluidType"(fluidType0: $FluidType$$Type): boolean
public "isInFluidType"(biPredicate0: $BiPredicate$$Type<$FluidType$$Type, double>): boolean
public "isInitialOrientationPresent"(): boolean
public "isLiving"(): boolean
public "isMonster"(): boolean
public "isMultipartEntity"(): boolean
public "isOnScoreboardTeam"(teamId: string): boolean
public "isPeacefulCreature"(): boolean
public "isPlayer"(): boolean
public "isPushedByFluid"(fluidType0: $FluidType$$Type): boolean
public "isWaterCreature"(): boolean
public static "makeBasicContainer"<O, T extends $TrackedData<O>>(registry: $TrackedDataRegistry$$Type<O, T>, o: O, isClient: boolean): $TrackedDataContainer<O, T>
public static "makeBasicContainer"<O, T extends $TrackedData<O>>(registry: $TrackedDataRegistry$$Type<O, T>, o: O, isClient: boolean, lazyLoad: boolean): $TrackedDataContainer<O, T>
public "mergeNbt"(tag: $CompoundTag$$Type): $Entity
public "playSound"(id: $SoundEvent$$Type): void
public "playSound"(id: $SoundEvent$$Type, volume: float, pitch: float): void
public "rayTrace"(distance: double): $RayTraceResultJS
public "rayTrace"(distance: double, fluids: boolean): $RayTraceResultJS
public "runCommand"(command: string): integer
public "runCommandSilent"(command: string): integer
public "sdl$isDynamicLightEnabled"(): boolean
public "sdl$setDynamicLightEnabled"(enabled: boolean): void
public "self"(): $Entity
public "serializeNBT"(): $CompoundTag
public "setCouplingId"(uUID0: $UUID$$Type): void
public "setDynamicLightEnabled"(boolean0: boolean): void
public "setHexereiDynamicLightEnabled"(boolean0: boolean): void
public "setInitialOrientation"(direction0: $Direction$$Type): void
public "setMotionX"(x: double): void
public "setMotionY"(y: double): void
public "setMotionZ"(z: double): void
public "setNbt"(nbt: $CompoundTag$$Type): void
public "setPosition"(block: $BlockContainerJS$$Type): void
public "setPosition"(x: double, y: double, z: double): void
public "setPositionAndRotation"(x: double, y: double, z: double, yaw: float, pitch: float): void
public "setRotation"(yaw: float, pitch: float): void
public "setStatusMessage"(message: $Component$$Type): void
public "setX"(x: double): void
public "setY"(y: double): void
public "setZ"(z: double): void
public "shouldRiderSit"(): boolean
public "shouldUpdateFluidWhileBoating"(fluidState0: $FluidState$$Type, boat1: $Boat$$Type): boolean
public "spawn"(): void
public "startAtInitialYaw"(): void
public "startAtYaw"(float0: float): void
public "teleportTo"(dimension: $ResourceLocation$$Type, x: double, y: double, z: double, yaw: float, pitch: float): void
public "tell"(message: $Component$$Type): void
get "nonDamageTicks"(): integer
set "nonDamageTicks"(value: integer)
get "pitch"(): float
set "pitch"(value: float)
get "prevPitch"(): float
set "prevPitch"(value: float)
get "prevYaw"(): float
set "prevYaw"(value: float)
get "targetYaw"(): float
set "targetYaw"(value: float)
get "yaw"(): float
set "yaw"(value: float)
get "block"(): $BlockContainerJS
get "coupledCartsIfPresent"(): $Couple<$MinecartController>
get "couplingId"(): $UUID
get "displayName"(): $Component
get "facing"(): $Direction
get "initialOrientation"(): $Direction
get "initialYaw"(): float
get "item"(): $ItemStack
get "level"(): $Level
get "motionX"(): double
get "motionY"(): double
get "motionZ"(): double
get "name"(): $Component
get "nbt"(): $CompoundTag
get "parts"(): $PartEntity<any>[]
get "passengers"(): $EntityArrayList
get "profile"(): $GameProfile
get "scriptType"(): $ScriptType
get "server"(): $MinecraftServer
get "stepHeight"(): float
get "teamId"(): string
get "type"(): string
get "ambientCreature"(): boolean
get "animal"(): boolean
get "dynamicLightEnabled"(): boolean
get "dynamicLightEnabledH"(): boolean
get "frame"(): boolean
get "initialOrientationPresent"(): boolean
get "living"(): boolean
get "monster"(): boolean
get "multipartEntity"(): boolean
get "peacefulCreature"(): boolean
get "player"(): boolean
get "waterCreature"(): boolean
set "couplingId"(value: $UUID$$Type)
set "dynamicLightEnabled"(value: boolean)
set "hexereiDynamicLightEnabled"(value: boolean)
set "initialOrientation"(value: $Direction$$Type)
set "motionX"(value: double)
set "motionY"(value: double)
set "motionZ"(value: double)
set "nbt"(value: $CompoundTag$$Type)
set "position"(value: $BlockContainerJS$$Type)
set "statusMessage"(value: $Component$$Type)
set "x"(value: double)
set "y"(value: double)
set "z"(value: double)
}
}

declare module "com.simibubi.create.api.contraption.storage.fluid.MountedFluidStorageType" {
import { $Codec } from "com.mojang.serialization.Codec"
import { $NonNullUnaryOperator } from "com.tterrag.registrate.util.nullness.NonNullUnaryOperator"
import { $BlockPos$$Type } from "net.minecraft.core.BlockPos"
import { $BlockState$$Type } from "net.minecraft.world.level.block.state.BlockState"
import { $BlockBuilder } from "com.tterrag.registrate.builders.BlockBuilder"
import { $RegistryEntry$$Type } from "com.tterrag.registrate.util.entry.RegistryEntry"
import { $SimpleRegistry } from "com.simibubi.create.api.registry.SimpleRegistry"
import { $Block, $Block$$Type } from "net.minecraft.world.level.block.Block"
import { $Level$$Type } from "net.minecraft.world.level.Level"
import { $BlockEntity$$Type } from "net.minecraft.world.level.block.entity.BlockEntity"
import { $MountedFluidStorage } from "com.simibubi.create.api.contraption.storage.fluid.MountedFluidStorage"

export class $MountedFluidStorageType<T extends $MountedFluidStorage = $MountedFluidStorage> {
static readonly "CODEC": $Codec<$MountedFluidStorageType<any>>
static readonly "REGISTRY": $SimpleRegistry<$Block, $MountedFluidStorageType<any>>
readonly "codec": $Codec<T>

public "mount"(level0: $Level$$Type, blockState1: $BlockState$$Type, blockPos2: $BlockPos$$Type, blockEntity3: $BlockEntity$$Type): T
public static "mountedFluidStorage"<B extends $Block, P>(registryEntry0: $RegistryEntry$$Type<$MountedFluidStorageType$$Type<any>>): $NonNullUnaryOperator<$BlockBuilder<B, P>>
}
}

declare module "com.simibubi.create.content.contraptions.Contraption" {
import { $ClientContraption } from "com.simibubi.create.content.contraptions.render.ClientContraption"
import { $Object2BooleanMap, $Object2BooleanMap$$Type } from "it.unimi.dsi.fastutil.objects.Object2BooleanMap"
import { $AABB, $AABB$$Type } from "net.minecraft.world.phys.AABB"
import { $Direction$$Type } from "net.minecraft.core.Direction"
import { $IContraptionFuel } from "com.railwayteam.railways.mixin_interfaces.IContraptionFuel"
import { $MountedStorageManager } from "com.simibubi.create.content.contraptions.MountedStorageManager"
import { $Iterable$$Type } from "java.lang.Iterable"
import { $Direction$Axis$$Type } from "net.minecraft.core.Direction$Axis"
import { $StructureTemplate$StructureBlockInfo } from "net.minecraft.world.level.levelgen.structure.templatesystem.StructureTemplate$StructureBlockInfo"
import { $MovementContext, $MovementContext$$Type } from "com.simibubi.create.content.contraptions.behaviour.MovementContext"
import { $MutablePair } from "org.apache.commons.lang3.tuple.MutablePair"
import { $MountedFluidStorageWrapper } from "com.simibubi.create.api.contraption.storage.fluid.MountedFluidStorageWrapper"
import { $Vec3i$$Type } from "net.minecraft.core.Vec3i"
import { $Map, $Map$$Type } from "java.util.Map"
import { $BiConsumer$$Type } from "java.util.function.BiConsumer"
import { $MovingInteractionBehaviour } from "com.simibubi.create.api.behaviour.interaction.MovingInteractionBehaviour"
import { $ContraptionWorld } from "com.simibubi.create.content.contraptions.ContraptionWorld"
import { $UUID, $UUID$$Type } from "java.util.UUID"
import { $BlockEntity } from "net.minecraft.world.level.block.entity.BlockEntity"
import { $List, $List$$Type } from "java.util.List"
import { $Entity$$Type } from "net.minecraft.world.entity.Entity"
import { $CompoundTag, $CompoundTag$$Type } from "net.minecraft.nbt.CompoundTag"
import { $AbstractContraptionEntity, $AbstractContraptionEntity$$Type } from "com.simibubi.create.content.contraptions.AbstractContraptionEntity"
import { $BlockPos, $BlockPos$$Type } from "net.minecraft.core.BlockPos"
import { $StructureTransform$$Type } from "com.simibubi.create.content.contraptions.StructureTransform"
import { $ContraptionType } from "com.simibubi.create.api.contraption.ContraptionType"
import { $Optional, $Optional$$Type } from "java.util.Optional"
import { $ItemStack, $ItemStack$$Type } from "net.minecraft.world.item.ItemStack"
import { $Level$$Type } from "net.minecraft.world.level.Level"
import { $MovementBehaviour$$Type } from "com.simibubi.create.api.behaviour.movement.MovementBehaviour"

export class $Contraption implements $IContraptionFuel {
constructor()

public "addBlocksToWorld"(level0: $Level$$Type, structureTransform1: $StructureTransform$$Type): void
public "addPassengersToWorld"(level0: $Level$$Type, structureTransform1: $StructureTransform$$Type, list2: $List$$Type<$Entity$$Type>): void
public "assemble"(level0: $Level$$Type, blockPos1: $BlockPos$$Type): boolean
public "canBeStabilized"(direction0: $Direction$$Type, blockPos1: $BlockPos$$Type): boolean
public "containsBlockBreakers"(): boolean
public "expandBoundsAroundAxis"(axis0: $Direction$Axis$$Type): void
public "forEachActor"(level0: $Level$$Type, biConsumer1: $BiConsumer$$Type<$MovementBehaviour$$Type, $MovementContext$$Type>): void
public static "fromNBT"(level0: $Level$$Type, compoundTag1: $CompoundTag$$Type, boolean2: boolean): $Contraption
public "getActorAt"(blockPos0: $BlockPos$$Type): $MutablePair<$StructureTemplate$StructureBlockInfo, $MovementContext>
public "getActors"(): $List<$MutablePair<$StructureTemplate$StructureBlockInfo, $MovementContext>>
public "getBearingPosOf"(uUID0: $UUID$$Type): $BlockPos
public "getBlockEntityClientSide"(blockPos0: $BlockPos$$Type): $BlockEntity
public "getBlocks"(): $Map<$BlockPos, $StructureTemplate$StructureBlockInfo>
public "getContraptionWorld"(): $ContraptionWorld
public "getDisabledActors"(): $List<$ItemStack>
public "getInteractors"(): $Map<$BlockPos, $MovingInteractionBehaviour>
public "getIsLegacy"(): $Object2BooleanMap<$BlockPos>
public "getOrCreateClientContraptionLazy"(): $ClientContraption
public static "getRadius"(iterable0: $Iterable$$Type<$Vec3i$$Type>, axis1: $Direction$Axis$$Type): double
public "getSeatMapping"(): $Map<$UUID, integer>
public "getSeatOf"(uUID0: $UUID$$Type): $BlockPos
public "getSeats"(): $List<$BlockPos>
public "getSimplifiedEntityColliders"(): $Optional<$List<$AABB>>
public "getStorage"(): $MountedStorageManager
public "getType"(): $ContraptionType
public "invalidateClientContraptionChildren"(): void
public "invalidateClientContraptionStructure"(): void
public "invalidateColliders"(): void
public "isActorTypeDisabled"(itemStack0: $ItemStack$$Type): boolean
public "isHiddenInPortal"(blockPos0: $BlockPos$$Type): boolean
public "onEntityCreated"(abstractContraptionEntity0: $AbstractContraptionEntity$$Type): void
public "onEntityInitialize"(level0: $Level$$Type, abstractContraptionEntity1: $AbstractContraptionEntity$$Type): void
public "onEntityRemoved"(abstractContraptionEntity0: $AbstractContraptionEntity$$Type): void
public "railways$getFluidFuels"(): $MountedFluidStorageWrapper
public "readNBT"(level0: $Level$$Type, compoundTag1: $CompoundTag$$Type, boolean2: boolean): void
public "removeBlocksFromWorld"(level0: $Level$$Type, blockPos1: $BlockPos$$Type): void
public "resetClientContraption"(): void
public "searchMovedStructure"(level0: $Level$$Type, blockPos1: $BlockPos$$Type, direction2: $Direction$$Type): boolean
public "setActorsActive"(itemStack0: $ItemStack$$Type, boolean1: boolean): void
public "setSeatMapping"(map0: $Map$$Type<$UUID$$Type, integer>): void
public "startMoving"(level0: $Level$$Type): void
public "stop"(level0: $Level$$Type): void
public "tickStorage"(abstractContraptionEntity0: $AbstractContraptionEntity$$Type): void
public "writeNBT"(boolean0: boolean): $CompoundTag
public "writeStorage"(compoundTag0: $CompoundTag$$Type, boolean1: boolean): void
get "anchor"(): $BlockPos
set "anchor"(value: $BlockPos$$Type)
get "bounds"(): $AABB
set "bounds"(value: $AABB$$Type)
get "disassembled"(): boolean
set "disassembled"(value: boolean)
get "entity"(): $AbstractContraptionEntity
set "entity"(value: $AbstractContraptionEntity$$Type)
get "hasUniversalCreativeCrate"(): boolean
set "hasUniversalCreativeCrate"(value: boolean)
get "isLegacy"(): $Object2BooleanMap<$BlockPos>
set "isLegacy"(value: $Object2BooleanMap$$Type<$BlockPos$$Type>)
get "simplifiedEntityColliders"(): $Optional<$List<$AABB>>
set "simplifiedEntityColliders"(value: $Optional$$Type<$List$$Type<$AABB$$Type>>)
get "stalled"(): boolean
set "stalled"(value: boolean)
get "actors"(): $List<$MutablePair<$StructureTemplate$StructureBlockInfo, $MovementContext>>
get "blocks"(): $Map<$BlockPos, $StructureTemplate$StructureBlockInfo>
get "contraptionWorld"(): $ContraptionWorld
get "disabledActors"(): $List<$ItemStack>
get "interactors"(): $Map<$BlockPos, $MovingInteractionBehaviour>
get "orCreateClientContraptionLazy"(): $ClientContraption
get "seatMapping"(): $Map<$UUID, integer>
get "seats"(): $List<$BlockPos>
get "storage"(): $MountedStorageManager
get "type"(): $ContraptionType
set "seatMapping"(value: $Map$$Type<$UUID$$Type, integer>)
}
}

declare module "com.simibubi.create.foundation.mixin.accessor.ConcretePowderBlockAccessor" {
import { $BlockState } from "net.minecraft.world.level.block.state.BlockState"

export interface $ConcretePowderBlockAccessor {
"create$getConcrete"(): $BlockState
}

export namespace $ConcretePowderBlockAccessor {
const probejs$$marker: never
}
export abstract class $ConcretePowderBlockAccessor$$Static implements $ConcretePowderBlockAccessor {
}
}

declare module "com.simibubi.create.content.trains.track.TrackMaterial" {
import { $ResourceLocation, $ResourceLocation$$Type } from "net.minecraft.resources.ResourceLocation"
import { $TrackMaterial$TrackModelHolder } from "com.simibubi.create.content.trains.track.TrackMaterial$TrackModelHolder"
import { $TrackMaterial$TrackType, $TrackMaterial$TrackType$$Type } from "com.simibubi.create.content.trains.track.TrackMaterial$TrackType"
import { $Item$$Type } from "net.minecraft.world.item.Item"
import { $TrackBlock } from "com.simibubi.create.content.trains.track.TrackBlock"
import { $Supplier, $Supplier$$Type } from "java.util.function.Supplier"
import { $BlockBehaviour$Properties$$Type } from "net.minecraft.world.level.block.state.BlockBehaviour$Properties"
import { $Ingredient, $Ingredient$$Type } from "net.minecraft.world.item.crafting.Ingredient"
import { $List } from "java.util.List"
import { $NonNullSupplier, $NonNullSupplier$$Type } from "com.tterrag.registrate.util.nullness.NonNullSupplier"
import { $TrackMaterial$TrackType$TrackBlockFactory$$Type } from "com.simibubi.create.content.trains.track.TrackMaterial$TrackType$TrackBlockFactory"
import { $Map } from "java.util.Map"
import { $Block } from "net.minecraft.world.level.block.Block"
import { $ItemStack } from "net.minecraft.world.item.ItemStack"

export class $TrackMaterial {
static readonly "ALL": $Map<$ResourceLocation, $TrackMaterial>
static readonly "ANDESITE": $TrackMaterial
readonly "id": $ResourceLocation
readonly "langName": string
readonly "particle": $ResourceLocation
readonly "railsIngredient": $Ingredient
readonly "sleeperIngredient": $Ingredient
readonly "trackBlock": $NonNullSupplier<$NonNullSupplier<$TrackBlock>>
readonly "trackType": $TrackMaterial$TrackType

constructor(resourceLocation0: $ResourceLocation$$Type, string1: string, nonNullSupplier2: $NonNullSupplier$$Type<$NonNullSupplier<$TrackBlock>>, resourceLocation3: $ResourceLocation$$Type, ingredient4: $Ingredient$$Type, ingredient5: $Ingredient$$Type, trackType6: $TrackMaterial$TrackType$$Type, supplier7: $Supplier$$Type<$Supplier<$TrackMaterial$TrackModelHolder>>)
constructor(resourceLocation0: $ResourceLocation$$Type, string1: string, nonNullSupplier2: $NonNullSupplier$$Type<$NonNullSupplier<$TrackBlock>>, resourceLocation3: $ResourceLocation$$Type, ingredient4: $Ingredient$$Type, ingredient5: $Ingredient$$Type, trackType6: $TrackMaterial$TrackType$$Type, supplier7: $Supplier$$Type<$Supplier<$TrackMaterial$TrackModelHolder>>, trackBlockFactory8: $TrackMaterial$TrackType$TrackBlockFactory$$Type)

public static "allBlocks"(): $List<$NonNullSupplier<$Block>>
public static "allBlocksFromMod"(string0: string): $List<$NonNullSupplier<$Block>>
public static "allFromMod"(string0: string): $List<$TrackMaterial>
public "asStack"(int0: integer): $ItemStack
public "asStack"(): $ItemStack
public "createBlock"(properties0: $BlockBehaviour$Properties$$Type): $TrackBlock
public static "deserialize"(string0: string): $TrackMaterial
public static "fromItem"(item0: $Item$$Type): $TrackMaterial
public "getBlock"(): $TrackBlock
public "getBlockSupplier"(): $NonNullSupplier<$TrackBlock>
/** Client only, do not use in server scripts */
public "getModelHolder"(): $TrackMaterial$TrackModelHolder
public "isFromMod"(string0: string): boolean
public "resourceName"(): string
get "block"(): $TrackBlock
get "blockSupplier"(): $NonNullSupplier<$TrackBlock>
get "modelHolder"(): $TrackMaterial$TrackModelHolder
}
}

declare module "com.simibubi.create.content.schematics.requirement.ItemRequirement$ItemUseType" {
import { $Enum } from "java.lang.Enum"

export class $ItemRequirement$ItemUseType extends $Enum<$ItemRequirement$ItemUseType> {
static readonly "CONSUME": $ItemRequirement$ItemUseType
static readonly "DAMAGE": $ItemRequirement$ItemUseType

public static "valueOf"(string0: string): $ItemRequirement$ItemUseType
public static "values"(): $ItemRequirement$ItemUseType[]
}
}

declare module "com.simibubi.create.content.trains.entity.TravellingPoint$ITurnListener" {
import { $TrackEdge, $TrackEdge$$Type } from "com.simibubi.create.content.trains.graph.TrackEdge"
import { $BiConsumer, $BiConsumer$$Type } from "java.util.function.BiConsumer"

export interface $TravellingPoint$ITurnListener extends $BiConsumer<double, $TrackEdge> {
"accept"(double0: double, trackEdge1: $TrackEdge$$Type): void
"andThen"(biConsumer0: $BiConsumer$$Type<double, $TrackEdge$$Type>): $BiConsumer<double, $TrackEdge>
}

export namespace $TravellingPoint$ITurnListener {
const probejs$$marker: never
}
export abstract class $TravellingPoint$ITurnListener$$Static implements $TravellingPoint$ITurnListener {
}
}

declare module "com.simibubi.create.content.kinetics.fan.processing.FanProcessingType" {
import { $FanProcessingType$AirFlowParticleAccess$$Type } from "com.simibubi.create.content.kinetics.fan.processing.FanProcessingType$AirFlowParticleAccess"
import { $List } from "java.util.List"
import { $Entity$$Type } from "net.minecraft.world.entity.Entity"
import { $BlockPos$$Type } from "net.minecraft.core.BlockPos"
import { $Vec3$$Type } from "net.minecraft.world.phys.Vec3"
import { $RandomSource$$Type } from "net.minecraft.util.RandomSource"
import { $ItemStack, $ItemStack$$Type } from "net.minecraft.world.item.ItemStack"
import { $Level$$Type } from "net.minecraft.world.level.Level"

export interface $FanProcessingType {
"affectEntity"(entity0: $Entity$$Type, level1: $Level$$Type): void
"canProcess"(itemStack0: $ItemStack$$Type, level1: $Level$$Type): boolean
"getPriority"(): integer
"isValidAt"(level0: $Level$$Type, blockPos1: $BlockPos$$Type): boolean
"morphAirFlow"(airFlowParticleAccess0: $FanProcessingType$AirFlowParticleAccess$$Type, randomSource1: $RandomSource$$Type): void
"process"(itemStack0: $ItemStack$$Type, level1: $Level$$Type): $List<$ItemStack>
"spawnProcessingParticles"(level0: $Level$$Type, vec31: $Vec3$$Type): void
get "priority"(): integer
}

export namespace $FanProcessingType {
function getAt(level0: $Level$$Type, blockPos1: $BlockPos$$Type): $FanProcessingType
function parse(string0: string): $FanProcessingType
}
export abstract class $FanProcessingType$$Static implements $FanProcessingType {
static "getAt"(level0: $Level$$Type, blockPos1: $BlockPos$$Type): $FanProcessingType
static "parse"(string0: string): $FanProcessingType
}
}

declare module "com.simibubi.create.api.event.PipeCollisionEvent" {
import { $BlockPos } from "net.minecraft.core.BlockPos"
import { $BlockState, $BlockState$$Type } from "net.minecraft.world.level.block.state.BlockState"
import { $Event } from "net.minecraftforge.eventbus.api.Event"
import { $Level } from "net.minecraft.world.level.Level"

export class $PipeCollisionEvent extends $Event {
constructor()

public "getLevel"(): $Level
public "getPos"(): $BlockPos
public "getState"(): $BlockState
public "setState"(blockState0: $BlockState$$Type): void
get "level"(): $Level
get "pos"(): $BlockPos
get "state"(): $BlockState
set "state"(value: $BlockState$$Type)
}
}

declare module "com.simibubi.create.content.contraptions.ContraptionRelocationPacket" {
import { $FriendlyByteBuf$$Type } from "net.minecraft.network.FriendlyByteBuf"
import { $SimplePacketBase } from "com.simibubi.create.foundation.networking.SimplePacketBase"

export class $ContraptionRelocationPacket extends $SimplePacketBase {
constructor(int0: integer)
constructor(friendlyByteBuf0: $FriendlyByteBuf$$Type)

}
}

declare module "com.simibubi.create.content.trains.track.BezierTrackPointLocation" {
import { $BlockPos, $BlockPos$$Type } from "net.minecraft.core.BlockPos"
import { $Record } from "java.lang.Record"

export class $BezierTrackPointLocation extends $Record {
constructor(curveTarget: $BlockPos$$Type, segment: integer)

public "curveTarget"(): $BlockPos
public "segment"(): integer
}
}

declare module "com.simibubi.create.content.kinetics.base.KineticBlockEntity" {
import { $IHaveHoveringInformation } from "com.simibubi.create.api.equipment.goggles.IHaveHoveringInformation"
import { $Direction$$Type } from "net.minecraft.core.Direction"
import { $IHaveGoggleInformation } from "com.simibubi.create.api.equipment.goggles.IHaveGoggleInformation"
import { $BlockState$$Type } from "net.minecraft.world.level.block.state.BlockState"
import { $LazyOptional, $LazyOptional$$Type } from "net.minecraftforge.common.util.LazyOptional"
import { $TrackedData, $TrackedData$$Type } from "dev.corgitaco.dataanchor.data.TrackedData"
import { $IRotate$$Type } from "com.simibubi.create.content.kinetics.base.IRotate"
import { $Direction$Axis$$Type } from "net.minecraft.core.Direction$Axis"
import { $TrackedDataRegistry$$Type } from "dev.corgitaco.dataanchor.data.registry.TrackedDataRegistry"
import { $IFluidHandler$$Type } from "net.minecraftforge.fluids.capability.IFluidHandler"
import { $Component$$Type } from "net.minecraft.network.chat.Component"
import { $SequencedGearshiftBlockEntity$SequenceContext, $SequencedGearshiftBlockEntity$SequenceContext$$Type } from "com.simibubi.create.content.kinetics.transmission.sequencer.SequencedGearshiftBlockEntity$SequenceContext"
import { $SmartBlockEntity } from "com.simibubi.create.foundation.blockEntity.SmartBlockEntity"
import { $ModelData } from "net.minecraftforge.client.model.data.ModelData"
import { $Capability$$Type } from "net.minecraftforge.common.capabilities.Capability"
import { $Player$$Type } from "net.minecraft.world.entity.player.Player"
import { $List, $List$$Type } from "java.util.List"
import { $CompoundTag$$Type } from "net.minecraft.nbt.CompoundTag"
import { $TrackedDataContainer } from "dev.corgitaco.dataanchor.data.TrackedDataContainer"
import { $BlockEntityType$$Type } from "net.minecraft.world.level.block.entity.BlockEntityType"
import { $BlockPos, $BlockPos$$Type } from "net.minecraft.core.BlockPos"
import { $ItemStack } from "net.minecraft.world.item.ItemStack"
import { $Level$$Type } from "net.minecraft.world.level.Level"
import { $KineticNetwork } from "com.simibubi.create.content.kinetics.KineticNetwork"

export class $KineticBlockEntity extends $SmartBlockEntity implements $IHaveGoggleInformation, $IHaveHoveringInformation {
constructor(blockEntityType0: $BlockEntityType$$Type<any>, blockPos1: $BlockPos$$Type, blockState2: $BlockState$$Type)

public "addPropagationLocations"(iRotate0: $IRotate$$Type, blockState1: $BlockState$$Type, list2: $List$$Type<$BlockPos$$Type>): $List<$BlockPos>
public "addToGoggleTooltip"(list0: $List$$Type<$Component$$Type>, boolean1: boolean): boolean
public "addToTooltip"(list0: $List$$Type<$Component$$Type>, boolean1: boolean): boolean
public "attachKinetics"(): void
public "calculateAddedStressCapacity"(): float
public "calculateStressApplied"(): float
public "clearKineticInformation"(): void
public "containedFluidTooltip"(list0: $List$$Type<$Component$$Type>, boolean1: boolean, lazyOptional2: $LazyOptional$$Type<$IFluidHandler$$Type>): boolean
public static "convertToAngular"(float0: float): float
public static "convertToDirection"(float0: float, direction1: $Direction$$Type): float
public static "convertToLinear"(float0: float): float
public "deserializeNBT"(compoundTag0: $CompoundTag$$Type): void
public "detachKinetics"(): void
public "getCapability"<T>(capability0: $Capability$$Type<T>): $LazyOptional<T>
public "getFlickerScore"(): integer
public "getGeneratedSpeed"(): float
public "getIcon"(boolean0: boolean): $ItemStack
public "getModelData"(): $ModelData
public "getOrCreateNetwork"(): $KineticNetwork
public "getRotationAngleOffset"(axis0: $Direction$Axis$$Type): integer
public "getSpeed"(): float
public "getTheoreticalSpeed"(): float
public "hasCustomOutlineRendering"(player0: $Player$$Type): boolean
public "hasNetwork"(): boolean
public "hasSource"(): boolean
public "isCustomConnection"(kineticBlockEntity0: $KineticBlockEntity$$Type, blockState1: $BlockState$$Type, blockState2: $BlockState$$Type): boolean
public "isOverStressed"(): boolean
public "isSource"(): boolean
public "isSpeedRequirementFulfilled"(): boolean
public static "makeBasicContainer"<O, T extends $TrackedData<O>>(registry: $TrackedDataRegistry$$Type<O, T>, o: O, isClient: boolean): $TrackedDataContainer<O, T>
public static "makeBasicContainer"<O, T extends $TrackedData<O>>(registry: $TrackedDataRegistry$$Type<O, T>, o: O, isClient: boolean, lazyLoad: boolean): $TrackedDataContainer<O, T>
public "needsSpeedUpdate"(): boolean
public "onLoad"(): void
public "onSpeedChanged"(float0: float): void
public "propagateRotationTo"(kineticBlockEntity0: $KineticBlockEntity$$Type, blockState1: $BlockState$$Type, blockState2: $BlockState$$Type, blockPos3: $BlockPos$$Type, boolean4: boolean, boolean5: boolean): float
public "removeSource"(): void
public "requestModelDataUpdate"(): void
public "sdl$isDynamicLightEnabled"(): boolean
public "sdl$setDynamicLightEnabled"(enabled: boolean): void
public "setNetwork"(long0: long): void
public "setSource"(blockPos0: $BlockPos$$Type): void
public "setSpeed"(float0: float): void
public static "switchToBlockState"(level0: $Level$$Type, blockPos1: $BlockPos$$Type, blockState2: $BlockState$$Type): void
/** Client only, do not use in server scripts */
public "tickAudio"(): void
public "updateFromNetwork"(float0: float, float1: float, int2: integer): void
public "warnOfMovement"(): void
get "network"(): long
set "network"(value: long)
get "networkDirty"(): boolean
set "networkDirty"(value: boolean)
get "preventSpeedUpdate"(): integer
set "preventSpeedUpdate"(value: integer)
get "sequenceContext"(): $SequencedGearshiftBlockEntity$SequenceContext
set "sequenceContext"(value: $SequencedGearshiftBlockEntity$SequenceContext$$Type)
get "source"(): $BlockPos
set "source"(value: $BlockPos$$Type)
get "updateSpeed"(): boolean
set "updateSpeed"(value: boolean)
get "flickerScore"(): integer
get "generatedSpeed"(): float
get "modelData"(): $ModelData
get "orCreateNetwork"(): $KineticNetwork
get "speed"(): float
get "theoreticalSpeed"(): float
get "overStressed"(): boolean
get "speedRequirementFulfilled"(): boolean
set "speed"(value: float)
}
}

declare module "com.simibubi.create.content.trains.schedule.Schedule" {
import { $ResourceLocation, $ResourceLocation$$Type } from "net.minecraft.resources.ResourceLocation"
import { $ScheduleEntry, $ScheduleEntry$$Type } from "com.simibubi.create.content.trains.schedule.ScheduleEntry"
import { $List, $List$$Type } from "java.util.List"
import { $Pair, $Pair$$Type } from "net.createmod.catnip.data.Pair"
import { $CompoundTag, $CompoundTag$$Type } from "net.minecraft.nbt.CompoundTag"
import { $Component } from "net.minecraft.network.chat.Component"
import { $ScheduleInstruction } from "com.simibubi.create.content.trains.schedule.destination.ScheduleInstruction"
import { $ScheduleWaitCondition } from "com.simibubi.create.content.trains.schedule.condition.ScheduleWaitCondition"
import { $Supplier } from "java.util.function.Supplier"

export class $Schedule {
static "CONDITION_TYPES": $List<$Pair<$ResourceLocation, $Supplier<$ScheduleWaitCondition>>>
static "INSTRUCTION_TYPES": $List<$Pair<$ResourceLocation, $Supplier<$ScheduleInstruction>>>

constructor()

public static "fromTag"(compoundTag0: $CompoundTag$$Type): $Schedule
public static "getTypeOptions"<T>(list0: $List$$Type<$Pair$$Type<$ResourceLocation$$Type, T>>): $List<$Component>
public "write"(): $CompoundTag
get "cyclic"(): boolean
set "cyclic"(value: boolean)
get "entries"(): $List<$ScheduleEntry>
set "entries"(value: $List$$Type<$ScheduleEntry$$Type>)
get "savedProgress"(): integer
set "savedProgress"(value: integer)
}
}

declare module "com.simibubi.create.compat.computercraft.AbstractComputerBehaviour" {
import { $BehaviourType } from "com.simibubi.create.foundation.blockEntity.behaviour.BehaviourType"
import { $SmartBlockEntity$$Type } from "com.simibubi.create.foundation.blockEntity.SmartBlockEntity"
import { $ComputerEvent$$Type } from "com.simibubi.create.compat.computercraft.events.ComputerEvent"
import { $BlockEntityBehaviour } from "com.simibubi.create.foundation.blockEntity.behaviour.BlockEntityBehaviour"
import { $Capability$$Type } from "net.minecraftforge.common.capabilities.Capability"
import { $LazyOptional } from "net.minecraftforge.common.util.LazyOptional"

export class $AbstractComputerBehaviour extends $BlockEntityBehaviour {
static readonly "TYPE": $BehaviourType<$AbstractComputerBehaviour>

constructor(smartBlockEntity0: $SmartBlockEntity$$Type)

public "getPeripheralCapability"<T>(): $LazyOptional<T>
public "hasAttachedComputer"(): boolean
public "isPeripheralCap"<T>(capability0: $Capability$$Type<T>): boolean
public "prepareComputerEvent"(computerEvent0: $ComputerEvent$$Type): void
public "removePeripheral"(): void
public "setHasAttachedComputer"(boolean0: boolean): void
get "peripheralCapability"(): $LazyOptional<T>
}
}

declare module "com.simibubi.create.content.trains.entity.TrainIconType" {
import { $ResourceLocation, $ResourceLocation$$Type } from "net.minecraft.resources.ResourceLocation"
import { $GuiGraphics$$Type } from "net.minecraft.client.gui.GuiGraphics"
import { $Map } from "java.util.Map"

export class $TrainIconType {
static readonly "ENGINE": integer
static readonly "FLIPPED_ENGINE": integer
static "REGISTRY": $Map<$ResourceLocation, $TrainIconType>

constructor(resourceLocation0: $ResourceLocation$$Type, resourceLocation1: $ResourceLocation$$Type, int2: integer, int3: integer)

public static "byId"(resourceLocation0: $ResourceLocation$$Type): $TrainIconType
public static "getDefault"(): $TrainIconType
public "getIconOffset"(int0: integer): integer
public "getIconWidth"(int0: integer): integer
public "getId"(): $ResourceLocation
public static "register"(resourceLocation0: $ResourceLocation$$Type, resourceLocation1: $ResourceLocation$$Type, int2: integer, int3: integer): void
/** Client only, do not use in server scripts */
public "render"(int0: integer, guiGraphics1: $GuiGraphics$$Type, int2: integer, int3: integer): integer
get "id"(): $ResourceLocation
}
}

declare module "com.simibubi.create.foundation.networking.SimplePacketBase" {
import { $NetworkEvent$Context$$Type } from "net.minecraftforge.network.NetworkEvent$Context"
import { $FriendlyByteBuf$$Type } from "net.minecraft.network.FriendlyByteBuf"

export class $SimplePacketBase {
constructor()

public "handle"(context0: $NetworkEvent$Context$$Type): boolean
public "write"(friendlyByteBuf0: $FriendlyByteBuf$$Type): void
}
}

declare module "com.simibubi.create.content.trains.entity.ArrivalSoundQueue" {
import { $CompoundTag$$Type } from "net.minecraft.nbt.CompoundTag"
import { $Pair } from "net.createmod.catnip.data.Pair"
import { $StructureTemplate$StructureBlockInfo$$Type } from "net.minecraft.world.level.levelgen.structure.templatesystem.StructureTemplate$StructureBlockInfo"
import { $BlockPos$$Type } from "net.minecraft.core.BlockPos"
import { $CarriageContraptionEntity$$Type } from "com.simibubi.create.content.trains.entity.CarriageContraptionEntity"
import { $BlockState$$Type } from "net.minecraft.world.level.block.state.BlockState"

export class $ArrivalSoundQueue {
constructor()

public "add"(int0: integer, blockPos1: $BlockPos$$Type): void
public "deserialize"(compoundTag0: $CompoundTag$$Type): void
public "firstTick"(): integer
public "getFirstWhistle"(carriageContraptionEntity0: $CarriageContraptionEntity$$Type): $Pair<boolean, integer>
public static "isPlayable"(blockState0: $BlockState$$Type): boolean
public "lastTick"(): integer
public static "play"(carriageContraptionEntity0: $CarriageContraptionEntity$$Type, structureBlockInfo1: $StructureTemplate$StructureBlockInfo$$Type): void
public "serialize"(compoundTag0: $CompoundTag$$Type): void
public "tick"(carriageContraptionEntity0: $CarriageContraptionEntity$$Type, int1: integer, boolean2: boolean): boolean
get "offset"(): integer
set "offset"(value: integer)
}
}

declare module "com.simibubi.create.content.trains.entity.CarriageContraptionEntity" {
import { $ResourceLocation, $ResourceLocation$$Type } from "net.minecraft.resources.ResourceLocation"
import { $EntityType$$Type } from "net.minecraft.world.entity.EntityType"
import { $Direction } from "net.minecraft.core.Direction"
import { $GameProfile } from "com.mojang.authlib.GameProfile"
import { $BlockState$$Type } from "net.minecraft.world.level.block.state.BlockState"
import { $CarriageContraption$$Type } from "com.simibubi.create.content.trains.entity.CarriageContraption"
import { $FluidType$$Type } from "net.minecraftforge.fluids.FluidType"
import { $LazyOptional } from "net.minecraftforge.common.util.LazyOptional"
import { $TrackedData, $TrackedData$$Type } from "dev.corgitaco.dataanchor.data.TrackedData"
import { $BlockContainerJS, $BlockContainerJS$$Type } from "dev.latvian.mods.kubejs.level.BlockContainerJS"
import { $BiPredicate$$Type } from "java.util.function.BiPredicate"
import { $MinecraftServer } from "net.minecraft.server.MinecraftServer"
import { $Pose$$Type } from "net.minecraft.world.entity.Pose"
import { $Carriage, $Carriage$$Type } from "com.simibubi.create.content.trains.entity.Carriage"
import { $AccessorCarriageContraptionEntity } from "com.railwayteam.railways.mixin.AccessorCarriageContraptionEntity"
import { $MobCategory } from "net.minecraft.world.entity.MobCategory"
import { $ObjectList } from "it.unimi.dsi.fastutil.objects.ObjectList"
import { $TrackedDataRegistry$$Type } from "dev.corgitaco.dataanchor.data.registry.TrackedDataRegistry"
import { $OrientedContraptionEntity } from "com.simibubi.create.content.contraptions.OrientedContraptionEntity"
import { $SoundAction$$Type } from "net.minecraftforge.common.SoundAction"
import { $IUpdateCount, $IUpdateCount$$Type } from "com.railwayteam.railways.mixin_interfaces.IUpdateCount"
import { $Component, $Component$$Type } from "net.minecraft.network.chat.Component"
import { $CarriageSounds, $CarriageSounds$$Type } from "com.simibubi.create.content.trains.entity.CarriageSounds"
import { $Couple } from "net.createmod.catnip.data.Couple"
import { $PartEntity } from "net.minecraftforge.entity.PartEntity"
import { $UUID, $UUID$$Type } from "java.util.UUID"
import { $IDistanceTravelled } from "com.railwayteam.railways.mixin_interfaces.IDistanceTravelled"
import { $Capability$$Type } from "net.minecraftforge.common.capabilities.Capability"
import { $RayTraceResultJS } from "dev.latvian.mods.kubejs.entity.RayTraceResultJS"
import { $ScriptType } from "dev.latvian.mods.kubejs.script.ScriptType"
import { $Player$$Type } from "net.minecraft.world.entity.player.Player"
import { $HitResult$$Type } from "net.minecraft.world.phys.HitResult"
import { $EntityArrayList } from "dev.latvian.mods.kubejs.player.EntityArrayList"
import { $Entity, $Entity$$Type } from "net.minecraft.world.entity.Entity"
import { $CompoundTag, $CompoundTag$$Type } from "net.minecraft.nbt.CompoundTag"
import { $TrackedDataContainer } from "dev.corgitaco.dataanchor.data.TrackedDataContainer"
import { $BlockPos$$Type } from "net.minecraft.core.BlockPos"
import { $SoundEvent, $SoundEvent$$Type } from "net.minecraft.sounds.SoundEvent"
import { $Boat$$Type } from "net.minecraft.world.entity.vehicle.Boat"
import { $FluidState$$Type } from "net.minecraft.world.level.material.FluidState"
import { $CarriageSyncData } from "com.simibubi.create.content.trains.entity.CarriageSyncData"
import { $EntityDimensions$$Type } from "net.minecraft.world.entity.EntityDimensions"
import { $ItemStack } from "net.minecraft.world.item.ItemStack"
import { $Level, $Level$$Type } from "net.minecraft.world.level.Level"
import { $CarriageParticles, $CarriageParticles$$Type } from "com.simibubi.create.content.trains.entity.CarriageParticles"

export class $CarriageContraptionEntity extends $OrientedContraptionEntity implements $AccessorCarriageContraptionEntity, $IDistanceTravelled, $IUpdateCount {
constructor(entityType0: $EntityType$$Type<any>, level1: $Level$$Type)

public "alwaysAccepts"(): boolean
public "attack"(hp: float): void
public "canBeRiddenUnderFluidType"(fluidType0: $FluidType$$Type, entity1: $Entity$$Type): boolean
public "canFluidExtinguish"(fluidType0: $FluidType$$Type): boolean
public "canHydrateInFluidType"(fluidType0: $FluidType$$Type): boolean
public "canRiderInteract"(): boolean
public "canStartSwimming"(): boolean
public "canSwimInFluidType"(fluidType0: $FluidType$$Type): boolean
public "canaryOnBlockCacheDeleted"(): void
public "canaryOnBlockCacheSet"(blockState0: $BlockState$$Type): void
public "canarySetClimbingMobCachingSectionUpdateBehavior"(boolean0: boolean): void
public "checkConductors"(): $Couple<boolean>
public static "create"(level0: $Level$$Type, carriageContraption1: $CarriageContraption$$Type): $CarriageContraptionEntity
public "deserializeNBT"(compoundTag0: $CompoundTag$$Type): void
public "getBlock"(): $BlockContainerJS
public "getCapability"<T>(capability0: $Capability$$Type<T>): $LazyOptional<T>
public "getCarriage"(): $Carriage
public "getCarriageData"(): $CarriageSyncData
public "getClassification"(boolean0: boolean): $MobCategory
public "getDisplayName"(): $Component
public "getDistance"(pos: $BlockPos$$Type): double
public "getDistance"(x: double, y: double, z: double): double
public "getDistanceSq"(pos: $BlockPos$$Type): double
/** @deprecated */
public "getEyeHeightForge"(pose0: $Pose$$Type, entityDimensions1: $EntityDimensions$$Type): float
public "getFacing"(): $Direction
public "getFluidFallDistanceModifier"(fluidType0: $FluidType$$Type): float
public "getFluidMotionScale"(fluidType0: $FluidType$$Type): double
public "getItem"(): $ItemStack
public "getLevel"(): $Level
public static "getMatched"(entity: $Entity$$Type): $ObjectList<$ResourceLocation>
public "getMotionX"(): double
public "getMotionY"(): double
public "getMotionZ"(): double
public "getName"(): $Component
public "getNbt"(): $CompoundTag
public "getParts"(): $PartEntity<any>[]
public "getPassengers"(): $EntityArrayList
public "getPickedResult"(hitResult0: $HitResult$$Type): $ItemStack
public "getProfile"(): $GameProfile
public "getScriptType"(): $ScriptType
public "getServer"(): $MinecraftServer
public "getSoundFromFluidType"(fluidType0: $FluidType$$Type, soundAction1: $SoundAction$$Type): $SoundEvent
public "getStepHeight"(): float
public "getTeamId"(): string
public "getType"(): string
public "hasCustomOutlineRendering"(player0: $Player$$Type): boolean
public "hasSchedule"(): boolean
public "isAmbientCreature"(): boolean
public "isAnimal"(): boolean
public "isDynamicLightEnabled"(): boolean
public "isDynamicLightEnabledH"(): boolean
public "isEyeInFluidType"(fluidType0: $FluidType$$Type): boolean
public "isFrame"(): boolean
public "isInFluidType"(fluidState0: $FluidState$$Type): boolean
public "isInFluidType"(fluidType0: $FluidType$$Type): boolean
public "isInFluidType"(biPredicate0: $BiPredicate$$Type<$FluidType$$Type, double>): boolean
public "isLiving"(): boolean
public "isLocalCoordWithin"(blockPos0: $BlockPos$$Type, int1: integer, int2: integer): boolean
public "isMonster"(): boolean
public "isMultipartEntity"(): boolean
public "isOnScoreboardTeam"(teamId: string): boolean
public "isPeacefulCreature"(): boolean
public "isPlayer"(): boolean
public "isPushedByFluid"(fluidType0: $FluidType$$Type): boolean
public "isWaterCreature"(): boolean
public static "makeBasicContainer"<O, T extends $TrackedData<O>>(registry: $TrackedDataRegistry$$Type<O, T>, o: O, isClient: boolean): $TrackedDataContainer<O, T>
public static "makeBasicContainer"<O, T extends $TrackedData<O>>(registry: $TrackedDataRegistry$$Type<O, T>, o: O, isClient: boolean, lazyLoad: boolean): $TrackedDataContainer<O, T>
public "mergeNbt"(tag: $CompoundTag$$Type): $Entity
public static "outOfSync"(a: $IUpdateCount$$Type, b: $IUpdateCount$$Type): boolean
public "playSound"(id: $SoundEvent$$Type): void
public "playSound"(id: $SoundEvent$$Type, volume: float, pitch: float): void
public "railways$fromParent"(parent: $IUpdateCount$$Type): void
public "railways$getDistanceTravelled"(): double
public "railways$getUpdateCount"(): integer
public "railways$markUpdate"(): void
public "rayTrace"(distance: double): $RayTraceResultJS
public "rayTrace"(distance: double, fluids: boolean): $RayTraceResultJS
public "runCommand"(command: string): integer
public "runCommandSilent"(command: string): integer
public "sdl$isDynamicLightEnabled"(): boolean
public "sdl$setDynamicLightEnabled"(enabled: boolean): void
public "self"(): $Entity
public "serializeNBT"(): $CompoundTag
public "setCarriage"(carriage0: $Carriage$$Type): void
public "setDynamicLightEnabled"(boolean0: boolean): void
public "setHexereiDynamicLightEnabled"(boolean0: boolean): void
public "setMotionX"(x: double): void
public "setMotionY"(y: double): void
public "setMotionZ"(z: double): void
public "setNbt"(nbt: $CompoundTag$$Type): void
public "setPosition"(block: $BlockContainerJS$$Type): void
public "setPosition"(x: double, y: double, z: double): void
public "setPositionAndRotation"(x: double, y: double, z: double, yaw: float, pitch: float): void
public "setRotation"(yaw: float, pitch: float): void
public "setServerSidePrevPosition"(): void
public "setStatusMessage"(message: $Component$$Type): void
public "setX"(x: double): void
public "setY"(y: double): void
public "setZ"(z: double): void
public "shouldRiderSit"(): boolean
public "shouldUpdateFluidWhileBoating"(fluidState0: $FluidState$$Type, boat1: $Boat$$Type): boolean
public "spawn"(): void
public "syncCarriage"(): void
public "teleportTo"(dimension: $ResourceLocation$$Type, x: double, y: double, z: double, yaw: float, pitch: float): void
public "tell"(message: $Component$$Type): void
/** Client only, do not use in server scripts */
public "updateRenderedPortalCutoff"(): void
get "carriageIndex"(): integer
set "carriageIndex"(value: integer)
get "firstPositionUpdate"(): boolean
set "firstPositionUpdate"(value: boolean)
get "leftTickingChunks"(): boolean
set "leftTickingChunks"(value: boolean)
get "movingBackwards"(): boolean
set "movingBackwards"(value: boolean)
/** Client only, do not use in server scripts */
get "particles"(): $CarriageParticles
/** Client only, do not use in server scripts */
set "particles"(value: $CarriageParticles$$Type)
/** Client only, do not use in server scripts */
get "sounds"(): $CarriageSounds
/** Client only, do not use in server scripts */
set "sounds"(value: $CarriageSounds$$Type)
get "trainId"(): $UUID
set "trainId"(value: $UUID$$Type)
get "validForRender"(): boolean
set "validForRender"(value: boolean)
get "block"(): $BlockContainerJS
get "carriage"(): $Carriage
get "carriageData"(): $CarriageSyncData
get "displayName"(): $Component
get "facing"(): $Direction
get "item"(): $ItemStack
get "level"(): $Level
get "motionX"(): double
get "motionY"(): double
get "motionZ"(): double
get "name"(): $Component
get "nbt"(): $CompoundTag
get "parts"(): $PartEntity<any>[]
get "passengers"(): $EntityArrayList
get "profile"(): $GameProfile
get "scriptType"(): $ScriptType
get "server"(): $MinecraftServer
get "stepHeight"(): float
get "teamId"(): string
get "type"(): string
get "ambientCreature"(): boolean
get "animal"(): boolean
get "dynamicLightEnabled"(): boolean
get "dynamicLightEnabledH"(): boolean
get "frame"(): boolean
get "living"(): boolean
get "monster"(): boolean
get "multipartEntity"(): boolean
get "peacefulCreature"(): boolean
get "player"(): boolean
get "waterCreature"(): boolean
set "carriage"(value: $Carriage$$Type)
set "dynamicLightEnabled"(value: boolean)
set "hexereiDynamicLightEnabled"(value: boolean)
set "motionX"(value: double)
set "motionY"(value: double)
set "motionZ"(value: double)
set "nbt"(value: $CompoundTag$$Type)
set "position"(value: $BlockContainerJS$$Type)
set "statusMessage"(value: $Component$$Type)
set "x"(value: double)
set "y"(value: double)
set "z"(value: double)
}
}

declare module "com.simibubi.create.content.trains.bogey.BogeyVisualizer" {
import { $BogeyVisual } from "com.simibubi.create.content.trains.bogey.BogeyVisual"
import { $VisualizationContext$$Type } from "dev.engine_room.flywheel.api.visualization.VisualizationContext"

export interface $BogeyVisualizer {
"createVisual"(visualizationContext0: $VisualizationContext$$Type, float1: float, boolean2: boolean): $BogeyVisual
}

export namespace $BogeyVisualizer {
const probejs$$marker: never
}
export abstract class $BogeyVisualizer$$Static implements $BogeyVisualizer {
}
}

declare module "com.simibubi.create.content.trains.station.StationBlockEntity" {
import { $DoorControlBehaviour, $DoorControlBehaviour$$Type } from "com.simibubi.create.content.decoration.slidingDoor.DoorControlBehaviour"
import { $Direction, $Direction$$Type } from "net.minecraft.core.Direction"
import { $BlockState$$Type } from "net.minecraft.world.level.block.state.BlockState"
import { $LazyOptional } from "net.minecraftforge.common.util.LazyOptional"
import { $TrackedData, $TrackedData$$Type } from "dev.corgitaco.dataanchor.data.TrackedData"
import { $ServerPlayer$$Type } from "net.minecraft.server.level.ServerPlayer"
import { $LerpedFloat, $LerpedFloat$$Type } from "net.createmod.catnip.animation.LerpedFloat"
import { $WorldAttached } from "net.createmod.catnip.data.WorldAttached"
import { $Map } from "java.util.Map"
import { $PackagePortBlockEntity$$Type } from "com.simibubi.create.content.logistics.packagePort.PackagePortBlockEntity"
import { $TrackedDataRegistry$$Type } from "dev.corgitaco.dataanchor.data.registry.TrackedDataRegistry"
import { $ITrackBlock$$Type } from "com.simibubi.create.content.trains.track.ITrackBlock"
import { $AbstractComputerBehaviour, $AbstractComputerBehaviour$$Type } from "com.simibubi.create.compat.computercraft.AbstractComputerBehaviour"
import { $TransformableBlockEntity } from "com.simibubi.create.api.contraption.transformable.TransformableBlockEntity"
import { $Component, $Component$$Type } from "net.minecraft.network.chat.Component"
import { $SmartBlockEntity } from "com.simibubi.create.foundation.blockEntity.SmartBlockEntity"
import { $UUID$$Type } from "java.util.UUID"
import { $ModelData } from "net.minecraftforge.client.model.data.ModelData"
import { $BlockEntity$$Type } from "net.minecraft.world.level.block.entity.BlockEntity"
import { $Capability$$Type } from "net.minecraftforge.common.capabilities.Capability"
import { $Player$$Type } from "net.minecraft.world.entity.player.Player"
import { $CompoundTag$$Type } from "net.minecraft.nbt.CompoundTag"
import { $TrackedDataContainer } from "dev.corgitaco.dataanchor.data.TrackedDataContainer"
import { $BlockPos, $BlockPos$$Type } from "net.minecraft.core.BlockPos"
import { $BlockEntityType$$Type } from "net.minecraft.world.level.block.entity.BlockEntityType"
import { $StructureTransform$$Type } from "com.simibubi.create.content.contraptions.StructureTransform"
import { $BoundingBox } from "net.minecraft.world.level.levelgen.structure.BoundingBox"
import { $Train$$Type } from "com.simibubi.create.content.trains.entity.Train"
import { $ItemStack } from "net.minecraft.world.item.ItemStack"
import { $GlobalStation, $GlobalStation$$Type } from "com.simibubi.create.content.trains.station.GlobalStation"
import { $InteractionHand$$Type } from "net.minecraft.world.InteractionHand"
import { $TrackTargetingBehaviour, $TrackTargetingBehaviour$$Type } from "com.simibubi.create.content.trains.track.TrackTargetingBehaviour"

export class $StationBlockEntity extends $SmartBlockEntity implements $TransformableBlockEntity {
static "assemblyAreas": $WorldAttached<$Map<$BlockPos, $BoundingBox>>

constructor(blockEntityType0: $BlockEntityType$$Type<any>, blockPos1: $BlockPos$$Type, blockState2: $BlockState$$Type)

public "assemble"(uUID0: $UUID$$Type): void
public "attachPackagePort"(packagePortBlockEntity0: $PackagePortBlockEntity$$Type): void
public "cancelAssembly"(): void
public "deserializeNBT"(compoundTag0: $CompoundTag$$Type): void
public "dropSchedule"(serverPlayer0: $ServerPlayer$$Type, train1: $Train$$Type): void
public "enterAssemblyMode"(serverPlayer0: $ServerPlayer$$Type): boolean
public "exitAssemblyMode"(): boolean
public "getAssemblyDirection"(): $Direction
public "getAutoSchedule"(): $ItemStack
public "getCapability"<T>(capability0: $Capability$$Type<T>, direction1: $Direction$$Type): $LazyOptional<T>
public "getCapability"<T>(capability0: $Capability$$Type<T>): $LazyOptional<T>
public "getModelData"(): $ModelData
public "getStation"(): $GlobalStation
public "hasCustomOutlineRendering"(player0: $Player$$Type): boolean
public "isAssembling"(): boolean
public "isValidBogeyOffset"(int0: integer): boolean
public static "makeBasicContainer"<O, T extends $TrackedData<O>>(registry: $TrackedDataRegistry$$Type<O, T>, o: O, isClient: boolean): $TrackedDataContainer<O, T>
public static "makeBasicContainer"<O, T extends $TrackedData<O>>(registry: $TrackedDataRegistry$$Type<O, T>, o: O, isClient: boolean, lazyLoad: boolean): $TrackedDataContainer<O, T>
public "onLoad"(): void
public "refreshAssemblyInfo"(): void
public "removePackagePort"(packagePortBlockEntity0: $PackagePortBlockEntity$$Type): void
public "requestModelDataUpdate"(): void
public "resolveFlagAngle"(): boolean
public "sdl$isDynamicLightEnabled"(): boolean
public "sdl$setDynamicLightEnabled"(enabled: boolean): void
public "trackClicked"(player0: $Player$$Type, interactionHand1: $InteractionHand$$Type, iTrackBlock2: $ITrackBlock$$Type, blockState3: $BlockState$$Type, blockPos4: $BlockPos$$Type): boolean
public "transform"(blockEntity0: $BlockEntity$$Type, structureTransform1: $StructureTransform$$Type): void
public "tryDisassembleTrain"(serverPlayer0: $ServerPlayer$$Type): boolean
public "tryEnterAssemblyMode"(): boolean
public "updateMapColor"(int0: integer): void
public "updateName"(string0: string): boolean
get "computerBehaviour"(): $AbstractComputerBehaviour
set "computerBehaviour"(value: $AbstractComputerBehaviour$$Type)
get "doorControls"(): $DoorControlBehaviour
set "doorControls"(value: $DoorControlBehaviour$$Type)
get "edgePoint"(): $TrackTargetingBehaviour<$GlobalStation>
set "edgePoint"(value: $TrackTargetingBehaviour$$Type<$GlobalStation$$Type>)
get "flag"(): $LerpedFloat
set "flag"(value: $LerpedFloat$$Type)
get "lastDisassembledMapColorIndex"(): integer
set "lastDisassembledMapColorIndex"(value: integer)
get "lastDisassembledTrainName"(): $Component
set "lastDisassembledTrainName"(value: $Component$$Type)
get "assemblyDirection"(): $Direction
get "autoSchedule"(): $ItemStack
get "modelData"(): $ModelData
get "station"(): $GlobalStation
get "assembling"(): boolean
}
}

declare module "com.simibubi.create.content.trains.track.TrackMaterial$TrackType$TrackBlockFactory" {
import { $TrackMaterial$$Type } from "com.simibubi.create.content.trains.track.TrackMaterial"
import { $TrackBlock } from "com.simibubi.create.content.trains.track.TrackBlock"
import { $BlockBehaviour$Properties$$Type } from "net.minecraft.world.level.block.state.BlockBehaviour$Properties"

export interface $TrackMaterial$TrackType$TrackBlockFactory {
"create"(properties0: $BlockBehaviour$Properties$$Type, trackMaterial1: $TrackMaterial$$Type): $TrackBlock
}

export namespace $TrackMaterial$TrackType$TrackBlockFactory {
const probejs$$marker: never
}
export abstract class $TrackMaterial$TrackType$TrackBlockFactory$$Static implements $TrackMaterial$TrackType$TrackBlockFactory {
}
}

declare module "com.simibubi.create.api.registry.SimpleRegistry" {
import { $StateHolder$$Type } from "net.minecraft.world.level.block.state.StateHolder"
import { $SimpleRegistry$Provider$$Type } from "com.simibubi.create.api.registry.SimpleRegistry$Provider"

export interface $SimpleRegistry<K = any, V = any> {
"get"(stateHolder0: $StateHolder$$Type<K, any>): V
"get"(k0: K): V
"invalidate"(): void
"register"(k0: K, v1: V): void
"registerProvider"(provider0: $SimpleRegistry$Provider$$Type<K, V>): void
}

export namespace $SimpleRegistry {
function create<K, V>(): $SimpleRegistry<K, V>
}
export abstract class $SimpleRegistry$$Static<K = any, V = any> implements $SimpleRegistry<K, V> {
static "create"<K, V>(): $SimpleRegistry<K, V>
}
}

declare module "com.simibubi.create.content.trains.track.BezierConnection" {
import { $TrackMaterial, $TrackMaterial$$Type } from "com.simibubi.create.content.trains.track.TrackMaterial"
import { $BezierConnection$GirderAngles } from "com.simibubi.create.content.trains.track.BezierConnection$GirderAngles"
import { $AABB } from "net.minecraft.world.phys.AABB"
import { $Iterator } from "java.util.Iterator"
import { $Couple, $Couple$$Type } from "net.createmod.catnip.data.Couple"
import { $IHasTrackCasing } from "com.railwayteam.railways.mixin_interfaces.IHasTrackCasing"
import { $FriendlyByteBuf$$Type } from "net.minecraft.network.FriendlyByteBuf"
import { $BezierConnection$SegmentAngles } from "com.simibubi.create.content.trains.track.BezierConnection$SegmentAngles"
import { $Iterable } from "java.lang.Iterable"
import { $Player$$Type } from "net.minecraft.world.entity.player.Player"
import { $Consumer$$Type } from "java.util.function.Consumer"
import { $CompoundTag, $CompoundTag$$Type } from "net.minecraft.nbt.CompoundTag"
import { $Pair } from "net.createmod.catnip.data.Pair"
import { $Vec3, $Vec3$$Type } from "net.minecraft.world.phys.Vec3"
import { $BlockPos, $BlockPos$$Type } from "net.minecraft.core.BlockPos"
import { $Map } from "java.util.Map"
import { $Block, $Block$$Type } from "net.minecraft.world.level.block.Block"
import { $Level$$Type } from "net.minecraft.world.level.Level"
import { $Spliterator } from "java.util.Spliterator"
import { $BezierConnection$Segment, $BezierConnection$Segment$$Type } from "com.simibubi.create.content.trains.track.BezierConnection$Segment"

export class $BezierConnection implements $Iterable<$BezierConnection$Segment>, $IHasTrackCasing {
readonly "axes": $Couple<$Vec3>
readonly "bePositions": $Couple<$BlockPos>
readonly "hasGirder": boolean
readonly "normals": $Couple<$Vec3>
readonly "primary": boolean
readonly "starts": $Couple<$Vec3>

constructor(compoundTag0: $CompoundTag$$Type, blockPos1: $BlockPos$$Type)
constructor(couple0: $Couple$$Type<$BlockPos$$Type>, couple1: $Couple$$Type<$Vec3$$Type>, couple2: $Couple$$Type<$Vec3$$Type>, couple3: $Couple$$Type<$Vec3$$Type>, boolean4: boolean, boolean5: boolean, trackMaterial6: $TrackMaterial$$Type)
constructor(friendlyByteBuf0: $FriendlyByteBuf$$Type)

public "addItemsToPlayer"(player0: $Player$$Type): void
public "clone"(): $BezierConnection
public "equalsSansMaterial"(bezierConnection0: $BezierConnection$$Type): boolean
public "forEach"(consumer0: $Consumer$$Type<$BezierConnection$Segment$$Type>): void
public "getBakedGirders"(): $BezierConnection$GirderAngles
public "getBakedSegments"(): $BezierConnection$SegmentAngles
public "getBounds"(): $AABB
public "getGirderItemCost"(): integer
public "getHandleLength"(): double
public "getKey"(): $BlockPos
public "getLength"(): double
public "getMaterial"(): $TrackMaterial
public "getNormal"(double0: double): $Vec3
public "getPosition"(double0: double): $Vec3
public "getRadius"(): double
public "getSegmentCount"(): integer
public "getSegmentT"(int0: integer): float
public "getStepLUT"(): float[]
public static "getTrackCasing"(world: $Level$$Type, pos: $BlockPos$$Type): $Block
public "getTrackItemCost"(): integer
public "incrementT"(double0: double, double1: double): double
public static "isAlternate"(world: $Level$$Type, pos: $BlockPos$$Type): boolean
public "isPrimary"(): boolean
public "iterator"(): $Iterator<$BezierConnection$Segment>
public "railways$getTrackCasing"(): $Block
public "railways$isAlternate"(): boolean
public "railways$setAlternate"(alternate: boolean): void
public "railways$setTrackCasing"(trackCasing: $Block$$Type): void
public "rasterise"(): $Map<$Pair<integer, integer>, double>
public "secondary"(): $BezierConnection
public static "setAlternateModel"(world: $Level$$Type, pos: $BlockPos$$Type, useAlternateModel: boolean): boolean
public "setMaterial"(trackMaterial0: $TrackMaterial$$Type): void
public static "setTrackCasing"(world: $Level$$Type, pos: $BlockPos$$Type, trackCasing: $Block$$Type): void
public "spawnDestroyParticles"(level0: $Level$$Type): void
public "spawnItems"(level0: $Level$$Type): void
public "spliterator"(): $Spliterator<$BezierConnection$Segment>
public "write"(friendlyByteBuf0: $FriendlyByteBuf$$Type): void
public "write"(blockPos0: $BlockPos$$Type): $CompoundTag
public "yOffsetAt"(vec30: $Vec3$$Type): integer
[Symbol.iterator](): IterableIterator<$BezierConnection$Segment>;
get "smoothing"(): $Couple<integer>
set "smoothing"(value: $Couple$$Type<integer>)
get "bakedGirders"(): $BezierConnection$GirderAngles
get "bakedSegments"(): $BezierConnection$SegmentAngles
get "bounds"(): $AABB
get "girderItemCost"(): integer
get "handleLength"(): double
get "key"(): $BlockPos
get "length"(): double
get "material"(): $TrackMaterial
get "radius"(): double
get "segmentCount"(): integer
get "stepLUT"(): float[]
get "trackItemCost"(): integer
set "material"(value: $TrackMaterial$$Type)
}
}

declare module "com.simibubi.create.content.trains.bogey.BogeyStyle" {
import { $ResourceLocation, $ResourceLocation$$Type } from "net.minecraft.resources.ResourceLocation"
import { $Component, $Component$$Type } from "net.minecraft.network.chat.Component"
import { $ParticleOptions, $ParticleOptions$$Type } from "net.minecraft.core.particles.ParticleOptions"
import { $BogeySizes$BogeySize, $BogeySizes$BogeySize$$Type } from "com.simibubi.create.content.trains.bogey.BogeySizes$BogeySize"
import { $BogeyStyle$SizeRenderer$$Type } from "com.simibubi.create.content.trains.bogey.BogeyStyle$SizeRenderer"
import { $Set } from "java.util.Set"
import { $Supplier, $Supplier$$Type } from "java.util.function.Supplier"
import { $VisualizationContext$$Type } from "dev.engine_room.flywheel.api.visualization.VisualizationContext"
import { $PoseStack$$Type } from "com.mojang.blaze3d.vertex.PoseStack"
import { $CompoundTag, $CompoundTag$$Type } from "net.minecraft.nbt.CompoundTag"
import { $AbstractBogeyBlock, $AbstractBogeyBlock$$Type } from "com.simibubi.create.content.trains.bogey.AbstractBogeyBlock"
import { $SoundEvent } from "net.minecraft.sounds.SoundEvent"
import { $BogeyVisual } from "com.simibubi.create.content.trains.bogey.BogeyVisual"
import { $Map, $Map$$Type } from "java.util.Map"
import { $AccessorBogeyStyle } from "com.railwayteam.railways.mixin.client.AccessorBogeyStyle"
import { $MultiBufferSource$$Type } from "net.minecraft.client.renderer.MultiBufferSource"

export class $BogeyStyle implements $AccessorBogeyStyle {
readonly "contactParticle": $ParticleOptions
readonly "cycleGroup": $ResourceLocation
readonly "defaultData": $CompoundTag
readonly "displayName": $Component
readonly "id": $ResourceLocation
readonly "smokeParticle": $ParticleOptions
readonly "soundEvent": $Supplier<$SoundEvent>

constructor(resourceLocation0: $ResourceLocation$$Type, resourceLocation1: $ResourceLocation$$Type, component2: $Component$$Type, supplier3: $Supplier$$Type<$SoundEvent>, particleOptions4: $ParticleOptions$$Type, particleOptions5: $ParticleOptions$$Type, compoundTag6: $CompoundTag$$Type, map7: $Map$$Type<$BogeySizes$BogeySize$$Type, $Supplier$$Type<$AbstractBogeyBlock$$Type<any>>>, map8: $Map$$Type<$BogeySizes$BogeySize$$Type, $Supplier$$Type<$Supplier$$Type<$BogeyStyle$SizeRenderer$$Type>>>)

/** Client only, do not use in server scripts */
public "createVisual"(bogeySize0: $BogeySizes$BogeySize$$Type, visualizationContext1: $VisualizationContext$$Type, float2: float, boolean3: boolean): $BogeyVisual
public "getBlockForSize"(bogeySize0: $BogeySizes$BogeySize$$Type): $AbstractBogeyBlock<any>
public "getCycleGroup"(): $Map<$ResourceLocation, $BogeyStyle>
public "getNextBlock"(bogeySize0: $BogeySizes$BogeySize$$Type): $AbstractBogeyBlock<any>
/** Client only, do not use in server scripts */
public "render"(bogeySize0: $BogeySizes$BogeySize$$Type, float1: float, poseStack2: $PoseStack$$Type, multiBufferSource3: $MultiBufferSource$$Type, int4: integer, int5: integer, float6: float, compoundTag7: $CompoundTag$$Type, boolean8: boolean): void
public "validSizes"(): $Set<$BogeySizes$BogeySize>
}
}

declare module "com.simibubi.create.foundation.gui.widget.Label" {
import { $Component, $Component$$Type } from "net.minecraft.network.chat.Component"
import { $GuiGraphics$$Type } from "net.minecraft.client.gui.GuiGraphics"
import { $AbstractWidget$$Type } from "net.minecraft.client.gui.components.AbstractWidget"
import { $ComponentPath } from "net.minecraft.client.gui.ComponentPath"
import { $AbstractSimiWidget } from "net.createmod.catnip.gui.widget.AbstractSimiWidget"

export class $Label extends $AbstractSimiWidget {
constructor(int0: integer, int1: integer, component2: $Component$$Type)

public "charTyped"(char0: character, int1: integer): boolean
public "colored"(int0: integer): $Label
public "getCurrentFocusPath"(): $ComponentPath
public "getOriginalMessageFancyMenu"(): $Component
public "keyPressed"(int0: integer, int1: integer, int2: integer): boolean
public "keyReleased"(int0: integer, int1: integer, int2: integer): boolean
public "mouseMoved"(double0: double, double1: double): void
public "mouseScrolled"(double0: double, double1: double, double2: double): boolean
public "renderCustomBackgroundFancyMenu"(abstractWidget0: $AbstractWidget$$Type, guiGraphics1: $GuiGraphics$$Type, int2: integer, int3: integer, int4: integer, int5: integer): boolean
public "setPosition"(int0: integer, int1: integer): void
public "setTextAndTrim"(component0: $Component$$Type, boolean1: boolean, int2: integer): void
public "stopCustomClickSoundFancyMenu"(): void
public "stopHoverSoundFancyMenu"(): void
public "tickFocusStateListenersFancyMenu"(boolean0: boolean): void
public "tickHoverOrFocusStateListenersFancyMenu"(boolean0: boolean): void
public "tickHoverStateListenersFancyMenu"(boolean0: boolean): void
public "withShadow"(): $Label
public "withSuffix"(string0: string): $Label
get "suffix"(): string
set "suffix"(value: string)
get "text"(): $Component
set "text"(value: $Component$$Type)
get "currentFocusPath"(): $ComponentPath
get "originalMessageFancyMenu"(): $Component
}
}

declare module "com.simibubi.create.content.kinetics.belt.behaviour.BeltProcessingBehaviour$ProcessingCallback" {
import { $TransportedItemStackHandlerBehaviour$$Type } from "com.simibubi.create.content.kinetics.belt.behaviour.TransportedItemStackHandlerBehaviour"
import { $TransportedItemStack$$Type } from "com.simibubi.create.content.kinetics.belt.transport.TransportedItemStack"
import { $BeltProcessingBehaviour$ProcessingResult } from "com.simibubi.create.content.kinetics.belt.behaviour.BeltProcessingBehaviour$ProcessingResult"

export interface $BeltProcessingBehaviour$ProcessingCallback {
"apply"(transportedItemStack0: $TransportedItemStack$$Type, transportedItemStackHandlerBehaviour1: $TransportedItemStackHandlerBehaviour$$Type): $BeltProcessingBehaviour$ProcessingResult
}

export namespace $BeltProcessingBehaviour$ProcessingCallback {
const probejs$$marker: never
}
export abstract class $BeltProcessingBehaviour$ProcessingCallback$$Static implements $BeltProcessingBehaviour$ProcessingCallback {
}
}

declare module "com.simibubi.create.content.trains.schedule.destination.ScheduleInstruction" {
import { $ResourceLocation } from "net.minecraft.resources.ResourceLocation"
import { $Component } from "net.minecraft.network.chat.Component"
import { $GuiGraphics$$Type } from "net.minecraft.client.gui.GuiGraphics"
import { $DiscoveredPath } from "com.simibubi.create.content.trains.graph.DiscoveredPath"
import { $ScheduleDataEntry } from "com.simibubi.create.content.trains.schedule.ScheduleDataEntry"
import { $ScheduleRuntime$$Type } from "com.simibubi.create.content.trains.schedule.ScheduleRuntime"
import { $List } from "java.util.List"
import { $CompoundTag, $CompoundTag$$Type } from "net.minecraft.nbt.CompoundTag"
import { $Pair } from "net.createmod.catnip.data.Pair"
import { $ModularGuiLineBuilder$$Type } from "com.simibubi.create.foundation.gui.ModularGuiLineBuilder"
import { $ItemStack, $ItemStack$$Type } from "net.minecraft.world.item.ItemStack"
import { $Level$$Type } from "net.minecraft.world.level.Level"

export class $ScheduleInstruction extends $ScheduleDataEntry {
constructor()

public static "fromTag"(compoundTag0: $CompoundTag$$Type): $ScheduleInstruction
public "getId"(): $ResourceLocation
public "getItem"(int0: integer): $ItemStack
public "getSecondLineIcon"(): $ItemStack
public "getSecondLineTooltip"(int0: integer): $List<$Component>
public "getSummary"(): $Pair<$ItemStack, $Component>
public "getTitleAs"(string0: string): $List<$Component>
/** Client only, do not use in server scripts */
public "initConfigurationWidgets"(modularGuiLineBuilder0: $ModularGuiLineBuilder$$Type): void
/** Client only, do not use in server scripts */
public "renderSpecialIcon"(guiGraphics0: $GuiGraphics$$Type, int1: integer, int2: integer): boolean
public "setItem"(int0: integer, itemStack1: $ItemStack$$Type): void
public "slotsTargeted"(): integer
public "start"(scheduleRuntime0: $ScheduleRuntime$$Type, level1: $Level$$Type): $DiscoveredPath
public "supportsConditions"(): boolean
public "write"(): $CompoundTag
get "id"(): $ResourceLocation
get "secondLineIcon"(): $ItemStack
get "summary"(): $Pair<$ItemStack, $Component>
}
}

declare module "com.simibubi.create.foundation.mixin.accessor.LivingEntityAccessor" {
import { $ItemStack$$Type } from "net.minecraft.world.item.ItemStack"

export interface $LivingEntityAccessor {
"create$callSpawnItemParticles"(itemStack0: $ItemStack$$Type, int1: integer): void
}

export namespace $LivingEntityAccessor {
const probejs$$marker: never
}
export abstract class $LivingEntityAccessor$$Static implements $LivingEntityAccessor {
}
}

declare module "com.simibubi.create.api.contraption.ContraptionType" {
import { $TagKey$$Type } from "net.minecraft.tags.TagKey"
import { $Contraption } from "com.simibubi.create.content.contraptions.Contraption"
import { $Supplier, $Supplier$$Type } from "java.util.function.Supplier"
import { $Holder$Reference } from "net.minecraft.core.Holder$Reference"

export class $ContraptionType {
readonly "factory": $Supplier<$Contraption>
readonly "holder": $Holder$Reference<$ContraptionType>

constructor(supplier0: $Supplier$$Type<$Contraption>)

public static "fromType"(string0: string): $Contraption
public "is"(tagKey0: $TagKey$$Type<$ContraptionType$$Type>): boolean
}
}

declare module "com.simibubi.create.foundation.mixin.accessor.MobEffectInstanceAccessor" {
import { $MobEffectInstance } from "net.minecraft.world.effect.MobEffectInstance"

export interface $MobEffectInstanceAccessor {
"create$getHiddenEffect"(): $MobEffectInstance
}

export namespace $MobEffectInstanceAccessor {
const probejs$$marker: never
}
export abstract class $MobEffectInstanceAccessor$$Static implements $MobEffectInstanceAccessor {
}
}

declare module "com.simibubi.create.content.trains.entity.CarriageSyncData" {
import { $TravellingPoint$$Type } from "com.simibubi.create.content.trains.entity.TravellingPoint"
import { $Pair, $Pair$$Type } from "net.createmod.catnip.data.Pair"
import { $Vector, $Vector$$Type } from "java.util.Vector"
import { $CarriageContraptionEntity$$Type } from "com.simibubi.create.content.trains.entity.CarriageContraptionEntity"
import { $Carriage$$Type } from "com.simibubi.create.content.trains.entity.Carriage"
import { $Vec3, $Vec3$$Type } from "net.minecraft.world.phys.Vec3"
import { $Couple, $Couple$$Type } from "net.createmod.catnip.data.Couple"
import { $TrackGraph$$Type } from "com.simibubi.create.content.trains.graph.TrackGraph"
import { $FriendlyByteBuf$$Type } from "net.minecraft.network.FriendlyByteBuf"

export class $CarriageSyncData {
constructor()

public "apply"(carriageContraptionEntity0: $CarriageContraptionEntity$$Type, carriage1: $Carriage$$Type): void
public "approach"(carriageContraptionEntity0: $CarriageContraptionEntity$$Type, carriage1: $Carriage$$Type, float2: float): void
public "copy"(): $CarriageSyncData
public "getDistanceTo"(trackGraph0: $TrackGraph$$Type, travellingPoint1: $TravellingPoint$$Type, travellingPoint2: $TravellingPoint$$Type, float3: float, boolean4: boolean): float
public "isDirty"(): boolean
public "read"(friendlyByteBuf0: $FriendlyByteBuf$$Type): void
public "setDirty"(boolean0: boolean): void
public "update"(carriageContraptionEntity0: $CarriageContraptionEntity$$Type, carriage1: $Carriage$$Type): void
public "write"(friendlyByteBuf0: $FriendlyByteBuf$$Type): void
get "distanceToDestination"(): float
set "distanceToDestination"(value: float)
get "fallbackLocations"(): $Pair<$Vec3, $Couple<$Vec3>>
set "fallbackLocations"(value: $Pair$$Type<$Vec3$$Type, $Couple$$Type<$Vec3$$Type>>)
get "leadingCarriage"(): boolean
set "leadingCarriage"(value: boolean)
get "wheelLocations"(): $Vector<$Pair<$Couple<integer>, float>>
set "wheelLocations"(value: $Vector$$Type<$Pair$$Type<$Couple$$Type<integer>, float>>)
get "dirty"(): boolean
set "dirty"(value: boolean)
}
}

declare module "com.simibubi.create.content.trains.track.TrackTargetingBehaviour$RenderedTrackOverlayType" {
import { $Enum } from "java.lang.Enum"

export class $TrackTargetingBehaviour$RenderedTrackOverlayType extends $Enum<$TrackTargetingBehaviour$RenderedTrackOverlayType> {
static readonly "DUAL_SIGNAL": $TrackTargetingBehaviour$RenderedTrackOverlayType
static readonly "OBSERVER": $TrackTargetingBehaviour$RenderedTrackOverlayType
static readonly "SIGNAL": $TrackTargetingBehaviour$RenderedTrackOverlayType
static readonly "STATION": $TrackTargetingBehaviour$RenderedTrackOverlayType

public static "valueOf"(string0: string): $TrackTargetingBehaviour$RenderedTrackOverlayType
public static "values"(): $TrackTargetingBehaviour$RenderedTrackOverlayType[]
}
}

declare module "com.simibubi.create.foundation.mixin.accessor.NbtAccounterAccessor" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $NbtAccounterAccessor {
"create$getUsage"(): long
}

export namespace $NbtAccounterAccessor {
const probejs$$marker: never
}
export abstract class $NbtAccounterAccessor$$Static implements $NbtAccounterAccessor {
}
}

declare module "com.simibubi.create.content.trains.graph.TrackEdge" {
import { $TrackMaterial, $TrackMaterial$$Type } from "com.simibubi.create.content.trains.track.TrackMaterial"
import { $CompoundTag, $CompoundTag$$Type } from "net.minecraft.nbt.CompoundTag"
import { $Vec3 } from "net.minecraft.world.phys.Vec3"
import { $EdgeData } from "com.simibubi.create.content.trains.graph.EdgeData"
import { $Collection } from "java.util.Collection"
import { $TrackGraph$$Type } from "com.simibubi.create.content.trains.graph.TrackGraph"
import { $BezierConnection, $BezierConnection$$Type } from "com.simibubi.create.content.trains.track.BezierConnection"
import { $TrackNode, $TrackNode$$Type } from "com.simibubi.create.content.trains.graph.TrackNode"
import { $DimensionPalette$$Type } from "com.simibubi.create.content.trains.graph.DimensionPalette"

export class $TrackEdge {
constructor(trackNode0: $TrackNode$$Type, trackNode1: $TrackNode$$Type, bezierConnection2: $BezierConnection$$Type, trackMaterial3: $TrackMaterial$$Type)

public "canTravelTo"(trackEdge0: $TrackEdge$$Type): boolean
public "getDirection"(boolean0: boolean): $Vec3
public "getDirectionAt"(double0: double): $Vec3
public "getEdgeData"(): $EdgeData
public "getIntersection"(trackNode0: $TrackNode$$Type, trackNode1: $TrackNode$$Type, trackEdge2: $TrackEdge$$Type, trackNode3: $TrackNode$$Type, trackNode4: $TrackNode$$Type): $Collection<double[]>
public "getLength"(): double
public "getNormal"(trackGraph0: $TrackGraph$$Type, double1: double): $Vec3
public "getNormalSmoothed"(trackGraph0: $TrackGraph$$Type, double1: double): $Vec3
public "getPosition"(trackGraph0: $TrackGraph$$Type, double1: double): $Vec3
public "getPositionSmoothed"(trackGraph0: $TrackGraph$$Type, double1: double): $Vec3
public "getTrackMaterial"(): $TrackMaterial
public "getTurn"(): $BezierConnection
public "incrementT"(double0: double, double1: double): double
public "isInterDimensional"(): boolean
public "isTurn"(): boolean
public static "read"(trackNode0: $TrackNode$$Type, trackNode1: $TrackNode$$Type, compoundTag2: $CompoundTag$$Type, trackGraph3: $TrackGraph$$Type, dimensionPalette4: $DimensionPalette$$Type): $TrackEdge
public "write"(dimensionPalette0: $DimensionPalette$$Type): $CompoundTag
get "node1"(): $TrackNode
set "node1"(value: $TrackNode$$Type)
get "node2"(): $TrackNode
set "node2"(value: $TrackNode$$Type)
get "edgeData"(): $EdgeData
get "length"(): double
get "trackMaterial"(): $TrackMaterial
get "turn"(): $BezierConnection
get "interDimensional"(): boolean
get "turn"(): boolean
}
}

declare module "com.simibubi.create.content.trains.graph.TrackNode" {
import { $TrackNodeLocation, $TrackNodeLocation$$Type } from "com.simibubi.create.content.trains.graph.TrackNodeLocation"
import { $Vec3, $Vec3$$Type } from "net.minecraft.world.phys.Vec3"

export class $TrackNode {
constructor(trackNodeLocation0: $TrackNodeLocation$$Type, int1: integer, vec32: $Vec3$$Type)

public "getLocation"(): $TrackNodeLocation
public "getNetId"(): integer
public "getNormal"(): $Vec3
get "location"(): $TrackNodeLocation
get "netId"(): integer
get "normal"(): $Vec3
}
}

declare module "com.simibubi.create.content.trains.bogey.AbstractBogeyBlock" {
import { $ResourceLocation, $ResourceLocation$$Type } from "net.minecraft.resources.ResourceLocation"
import { $LivingEntity$$Type } from "net.minecraft.world.entity.LivingEntity"
import { $Direction, $Direction$$Type } from "net.minecraft.core.Direction"
import { $Item$$Type } from "net.minecraft.world.item.Item"
import { $SpawnPlacements$Type$$Type } from "net.minecraft.world.entity.SpawnPlacements$Type"
import { $BlockBehaviour$Properties$$Type } from "net.minecraft.world.level.block.state.BlockBehaviour$Properties"
import { $BlockGetter$$Type } from "net.minecraft.world.level.BlockGetter"
import { $MapColor, $MapColor$$Type } from "net.minecraft.world.level.material.MapColor"
import { $Rotation$$Type } from "net.minecraft.world.level.block.Rotation"
import { $Holder } from "net.minecraft.core.Holder"
import { $Carriage$$Type } from "com.simibubi.create.content.trains.entity.Carriage"
import { $EnumSet } from "java.util.EnumSet"
import { $BlockPathTypes, $BlockPathTypes$$Type } from "net.minecraft.world.level.pathfinder.BlockPathTypes"
import { $AbstractBogeyBlockEntity, $AbstractBogeyBlockEntity$$Type } from "com.simibubi.create.content.trains.bogey.AbstractBogeyBlockEntity"
import { $Set } from "java.util.Set"
import { $RandomSource$$Type } from "net.minecraft.util.RandomSource"
import { $InteractionResult } from "net.minecraft.world.InteractionResult"
import { $Property } from "net.minecraft.world.level.block.state.properties.Property"
import { $LevelReader$$Type } from "net.minecraft.world.level.LevelReader"
import { $BlockEntity, $BlockEntity$$Type } from "net.minecraft.world.level.block.entity.BlockEntity"
import { $TreeConfiguration$$Type } from "net.minecraft.world.level.levelgen.feature.configurations.TreeConfiguration"
import { $SoundType } from "net.minecraft.world.level.block.SoundType"
import { $Player$$Type } from "net.minecraft.world.entity.player.Player"
import { $FeatureFlagSet$$Type } from "net.minecraft.world.flag.FeatureFlagSet"
import { $List } from "java.util.List"
import { $BlockPos$$Type } from "net.minecraft.core.BlockPos"
import { $BlockEntityType, $BlockEntityType$$Type } from "net.minecraft.world.level.block.entity.BlockEntityType"
import { $SoundEvent } from "net.minecraft.sounds.SoundEvent"
import { $SignalGetter$$Type } from "net.minecraft.world.level.SignalGetter"
import { $FluidState, $FluidState$$Type } from "net.minecraft.world.level.material.FluidState"
import { $GameEventListener } from "net.minecraft.world.level.gameevent.GameEventListener"
import { $Optional } from "java.util.Optional"
import { $LevelAccessor$$Type } from "net.minecraft.world.level.LevelAccessor"
import { $BlockPlaceContext$$Type } from "net.minecraft.world.item.context.BlockPlaceContext"
import { $ItemStack, $ItemStack$$Type } from "net.minecraft.world.item.ItemStack"
import { $Level$$Type } from "net.minecraft.world.level.Level"
import { $BogeyStyle, $BogeyStyle$$Type } from "com.simibubi.create.content.trains.bogey.BogeyStyle"
import { $BlockEntityTicker } from "net.minecraft.world.level.block.entity.BlockEntityTicker"
import { $EntityType$$Type } from "net.minecraft.world.entity.EntityType"
import { $TrackMaterial$TrackType } from "com.simibubi.create.content.trains.track.TrackMaterial$TrackType"
import { $BlockState, $BlockState$$Type } from "net.minecraft.world.level.block.state.BlockState"
import { $ServerLevel$$Type } from "net.minecraft.server.level.ServerLevel"
import { $Function$$Type } from "java.util.function.Function"
import { $PushReaction } from "net.minecraft.world.level.material.PushReaction"
import { $Direction$Axis } from "net.minecraft.core.Direction$Axis"
import { $ToolAction$$Type } from "net.minecraftforge.common.ToolAction"
import { $EnumProperty } from "net.minecraft.world.level.block.state.properties.EnumProperty"
import { $BiConsumer$$Type } from "java.util.function.BiConsumer"
import { $Fluid$$Type } from "net.minecraft.world.level.material.Fluid"
import { $UseOnContext$$Type } from "net.minecraft.world.item.context.UseOnContext"
import { $BlockAndTintGetter$$Type } from "net.minecraft.world.level.BlockAndTintGetter"
import { $IWrenchable } from "com.simibubi.create.content.equipment.wrench.IWrenchable"
import { $BogeySizes$BogeySize, $BogeySizes$BogeySize$$Type } from "com.simibubi.create.content.trains.bogey.BogeySizes$BogeySize"
import { $Explosion$$Type } from "net.minecraft.world.level.Explosion"
import { $SpecialBlockItemRequirement } from "com.simibubi.create.api.schematic.requirement.SpecialBlockItemRequirement"
import { $Consumer$$Type } from "java.util.function.Consumer"
import { $HitResult$$Type } from "net.minecraft.world.phys.HitResult"
import { $ProperWaterloggedBlock } from "com.simibubi.create.foundation.block.ProperWaterloggedBlock"
import { $Entity$$Type } from "net.minecraft.world.entity.Entity"
import { $Vec3, $Vec3$$Type } from "net.minecraft.world.phys.Vec3"
import { $IBE } from "com.simibubi.create.foundation.block.IBE"
import { $Block, $Block$$Type } from "net.minecraft.world.level.block.Block"
import { $Class } from "java.lang.Class"
import { $Mob$$Type } from "net.minecraft.world.entity.Mob"
import { $ItemRequirement } from "com.simibubi.create.content.schematics.requirement.ItemRequirement"

export class $AbstractBogeyBlock<T extends $AbstractBogeyBlockEntity = $AbstractBogeyBlockEntity> extends $Block implements $IBE<T>, $ProperWaterloggedBlock, $SpecialBlockItemRequirement, $IWrenchable {
static readonly "AXIS": $EnumProperty<$Direction$Axis>

constructor(properties0: $BlockBehaviour$Properties$$Type, bogeySize1: $BogeySizes$BogeySize$$Type)

public "addLandingEffects"(blockState0: $BlockState$$Type, serverLevel1: $ServerLevel$$Type, blockPos2: $BlockPos$$Type, blockState3: $BlockState$$Type, livingEntity4: $LivingEntity$$Type, int5: integer): boolean
public "addRunningEffects"(blockState0: $BlockState$$Type, level1: $Level$$Type, blockPos2: $BlockPos$$Type, entity3: $Entity$$Type): boolean
public "allowsSingleBogeyCarriage"(): boolean
public "arch$holder"(): $Holder<$Block>
public "arch$registryName"(): $ResourceLocation
public "canBeHydrated"(blockState0: $BlockState$$Type, blockGetter1: $BlockGetter$$Type, blockPos2: $BlockPos$$Type, fluidState3: $FluidState$$Type, blockPos4: $BlockPos$$Type): boolean
public "canBeUpsideDown"(): boolean
public "canConnectRedstone"(blockState0: $BlockState$$Type, blockGetter1: $BlockGetter$$Type, blockPos2: $BlockPos$$Type, direction3: $Direction$$Type): boolean
public "canDropFromExplosion"(blockState0: $BlockState$$Type, blockGetter1: $BlockGetter$$Type, blockPos2: $BlockPos$$Type, explosion3: $Explosion$$Type): boolean
public "canEntityDestroy"(blockState0: $BlockState$$Type, blockGetter1: $BlockGetter$$Type, blockPos2: $BlockPos$$Type, entity3: $Entity$$Type): boolean
public "canHarvestBlock"(blockState0: $BlockState$$Type, blockGetter1: $BlockGetter$$Type, blockPos2: $BlockPos$$Type, player3: $Player$$Type): boolean
public "canPlaceLiquid"(blockGetter0: $BlockGetter$$Type, blockPos1: $BlockPos$$Type, blockState2: $BlockState$$Type, fluid3: $Fluid$$Type): boolean
public "canStickTo"(blockState0: $BlockState$$Type, blockState1: $BlockState$$Type): boolean
public "captureBlockEntityForTrain"(): boolean
public "collisionExtendsVertically"(blockState0: $BlockState$$Type, blockGetter1: $BlockGetter$$Type, blockPos2: $BlockPos$$Type, entity3: $Entity$$Type): boolean
public "fluidState"(blockState0: $BlockState$$Type): $FluidState
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
public "getBlockEntity"(blockGetter0: $BlockGetter$$Type, blockPos1: $BlockPos$$Type): T
public "getBlockEntityClass"(): $Class<T>
public "getBlockEntityOptional"(blockGetter0: $BlockGetter$$Type, blockPos1: $BlockPos$$Type): $Optional<T>
public "getBlockEntityType"(): $BlockEntityType<T>
public "getBlockPathType"(blockState0: $BlockState$$Type, blockGetter1: $BlockGetter$$Type, blockPos2: $BlockPos$$Type, mob3: $Mob$$Type): $BlockPathTypes
public "getBlockStates"(): $List<$BlockState>
public "getBogeyUpDirection"(): $Direction
public "getCloneItemStack"(blockState0: $BlockState$$Type, hitResult1: $HitResult$$Type, blockGetter2: $BlockGetter$$Type, blockPos3: $BlockPos$$Type, player4: $Player$$Type): $ItemStack
public "getConnectorAnchorOffset"(boolean0: boolean): $Vec3
public "getDefaultStyle"(): $BogeyStyle
public "getEnchantPowerBonus"(blockState0: $BlockState$$Type, levelReader1: $LevelReader$$Type, blockPos2: $BlockPos$$Type): float
public "getExpDrop"(blockState0: $BlockState$$Type, levelReader1: $LevelReader$$Type, randomSource2: $RandomSource$$Type, blockPos3: $BlockPos$$Type, int4: integer, int5: integer): integer
public "getExplosionResistance"(blockState0: $BlockState$$Type, blockGetter1: $BlockGetter$$Type, blockPos2: $BlockPos$$Type, explosion3: $Explosion$$Type): float
public "getFireSpreadSpeed"(blockState0: $BlockState$$Type, blockGetter1: $BlockGetter$$Type, blockPos2: $BlockPos$$Type, direction3: $Direction$$Type): integer
public "getFlammability"(blockState0: $BlockState$$Type, blockGetter1: $BlockGetter$$Type, blockPos2: $BlockPos$$Type, direction3: $Direction$$Type): integer
public "getFriction"(blockState0: $BlockState$$Type, levelReader1: $LevelReader$$Type, blockPos2: $BlockPos$$Type, entity3: $Entity$$Type): float
public "getLightEmission"(blockState0: $BlockState$$Type, blockGetter1: $BlockGetter$$Type, blockPos2: $BlockPos$$Type): integer
public "getListener"<T extends $BlockEntity>(serverLevel0: $ServerLevel$$Type, t1: T): $GameEventListener
public "getMapColor"(blockState0: $BlockState$$Type, blockGetter1: $BlockGetter$$Type, blockPos2: $BlockPos$$Type, mapColor3: $MapColor$$Type): $MapColor
public "getMatchingBogey"(direction0: $Direction$$Type, boolean1: boolean): $BlockState
public "getMod"(): string
public "getNextSize"(abstractBogeyBlockEntity0: $AbstractBogeyBlockEntity$$Type): $BlockState
public "getNextSize"(level0: $Level$$Type, blockPos1: $BlockPos$$Type): $BlockState
public "getNextStyle"(bogeyStyle0: $BogeyStyle$$Type): $BogeyStyle
public "getNextStyle"(level0: $Level$$Type, blockPos1: $BlockPos$$Type): $BogeyStyle
public "getPickupSound"(): $Optional<$SoundEvent>
public "getPickupSound"(blockState0: $BlockState$$Type): $Optional<$SoundEvent>
public "getPistonPushReaction"(blockState0: $BlockState$$Type): $PushReaction
public "getRequiredItems"(blockState0: $BlockState$$Type, blockEntity1: $BlockEntity$$Type): $ItemRequirement
public "getRespawnPosition"(blockState0: $BlockState$$Type, entityType1: $EntityType$$Type<any>, levelReader2: $LevelReader$$Type, blockPos3: $BlockPos$$Type, float4: float, livingEntity5: $LivingEntity$$Type): $Optional<$Vec3>
public "getRotatedBlockState"(blockState0: $BlockState$$Type, direction1: $Direction$$Type): $BlockState
public "getSize"(): $BogeySizes$BogeySize
public "getSoundType"(blockState0: $BlockState$$Type, levelReader1: $LevelReader$$Type, blockPos2: $BlockPos$$Type, entity3: $Entity$$Type): $SoundType
public "getStateAtViewpoint"(blockState0: $BlockState$$Type, blockGetter1: $BlockGetter$$Type, blockPos2: $BlockPos$$Type, vec33: $Vec3$$Type): $BlockState
public "getStateOfSize"(abstractBogeyBlockEntity0: $AbstractBogeyBlockEntity$$Type, bogeySize1: $BogeySizes$BogeySize$$Type): $BlockState
public "getStickySurfaces"(blockGetter0: $BlockGetter$$Type, blockPos1: $BlockPos$$Type, blockState2: $BlockState$$Type): $EnumSet<$Direction>
public "getTicker"<S extends $BlockEntity>(level0: $Level$$Type, blockState1: $BlockState$$Type, blockEntityType2: $BlockEntityType$$Type<S>): $BlockEntityTicker<S>
public "getToolModifiedState"(blockState0: $BlockState$$Type, useOnContext1: $UseOnContext$$Type, toolAction2: $ToolAction$$Type, boolean3: boolean): $BlockState
public "getTrackType"(bogeyStyle0: $BogeyStyle$$Type): $TrackMaterial$TrackType
public "getValidPathfindingTypes"(bogeyStyle0: $BogeyStyle$$Type): $Set<$TrackMaterial$TrackType>
public "getVersion"(blockState0: $BlockState$$Type, boolean1: boolean): $BlockState
public "getWeakChanges"(blockState0: $BlockState$$Type, levelReader1: $LevelReader$$Type, blockPos2: $BlockPos$$Type): boolean
public "getWheelPointSpacing"(): double
public "getWheelRadius"(): double
public "hidesNeighborFace"(blockGetter0: $BlockGetter$$Type, blockPos1: $BlockPos$$Type, blockState2: $BlockState$$Type, blockState3: $BlockState$$Type, direction4: $Direction$$Type): boolean
public "isBed"(blockState0: $BlockState$$Type, blockGetter1: $BlockGetter$$Type, blockPos2: $BlockPos$$Type, entity3: $Entity$$Type): boolean
public "isBurning"(blockState0: $BlockState$$Type, blockGetter1: $BlockGetter$$Type, blockPos2: $BlockPos$$Type): boolean
public "isConduitFrame"(blockState0: $BlockState$$Type, levelReader1: $LevelReader$$Type, blockPos2: $BlockPos$$Type, blockPos3: $BlockPos$$Type): boolean
public "isEnabled"(featureFlagSet0: $FeatureFlagSet$$Type): boolean
public "isFertile"(blockState0: $BlockState$$Type, blockGetter1: $BlockGetter$$Type, blockPos2: $BlockPos$$Type): boolean
public "isFireSource"(blockState0: $BlockState$$Type, levelReader1: $LevelReader$$Type, blockPos2: $BlockPos$$Type, direction3: $Direction$$Type): boolean
public "isFlammable"(blockState0: $BlockState$$Type, blockGetter1: $BlockGetter$$Type, blockPos2: $BlockPos$$Type, direction3: $Direction$$Type): boolean
public "isLadder"(blockState0: $BlockState$$Type, levelReader1: $LevelReader$$Type, blockPos2: $BlockPos$$Type, livingEntity3: $LivingEntity$$Type): boolean
public "isOnIncompatibleTrack"(carriage0: $Carriage$$Type, boolean1: boolean): boolean
public "isPortalFrame"(blockState0: $BlockState$$Type, blockGetter1: $BlockGetter$$Type, blockPos2: $BlockPos$$Type): boolean
public "isScaffolding"(blockState0: $BlockState$$Type, levelReader1: $LevelReader$$Type, blockPos2: $BlockPos$$Type, livingEntity3: $LivingEntity$$Type): boolean
public "isSlimeBlock"(blockState0: $BlockState$$Type): boolean
public "isStickyBlock"(blockState0: $BlockState$$Type): boolean
public "isTrackAxisAlongFirstCoordinate"(blockState0: $BlockState$$Type): boolean
public "isUpsideDown"(blockState0: $BlockState$$Type): boolean
public "isValidSpawn"(blockState0: $BlockState$$Type, blockGetter1: $BlockGetter$$Type, blockPos2: $BlockPos$$Type, type3: $SpawnPlacements$Type$$Type, entityType4: $EntityType$$Type<any>): boolean
public "makesOpenTrapdoorAboveClimbable"(blockState0: $BlockState$$Type, levelReader1: $LevelReader$$Type, blockPos2: $BlockPos$$Type, blockState3: $BlockState$$Type): boolean
public "newBlockEntity"(blockPos0: $BlockPos$$Type, blockState1: $BlockState$$Type): $BlockEntity
public "onBlockEntityUse"(blockGetter0: $BlockGetter$$Type, blockPos1: $BlockPos$$Type, function2: $Function$$Type<T, $InteractionResult>): $InteractionResult
public "onBlockExploded"(blockState0: $BlockState$$Type, level1: $Level$$Type, blockPos2: $BlockPos$$Type, explosion3: $Explosion$$Type): void
public "onBlockStateChange"(levelReader0: $LevelReader$$Type, blockPos1: $BlockPos$$Type, blockState2: $BlockState$$Type, blockState3: $BlockState$$Type): void
public "onCaughtFire"(blockState0: $BlockState$$Type, level1: $Level$$Type, blockPos2: $BlockPos$$Type, direction3: $Direction$$Type, livingEntity4: $LivingEntity$$Type): void
public "onDestroyedByPlayer"(blockState0: $BlockState$$Type, level1: $Level$$Type, blockPos2: $BlockPos$$Type, player3: $Player$$Type, boolean4: boolean, fluidState5: $FluidState$$Type): boolean
public "onNeighborChange"(blockState0: $BlockState$$Type, levelReader1: $LevelReader$$Type, blockPos2: $BlockPos$$Type, blockPos3: $BlockPos$$Type): void
public static "onRemove"(blockState0: $BlockState$$Type, level1: $Level$$Type, blockPos2: $BlockPos$$Type, blockState3: $BlockState$$Type): void
public "onSneakWrenched"(blockState0: $BlockState$$Type, useOnContext1: $UseOnContext$$Type): $InteractionResult
public "onTreeGrow"(blockState0: $BlockState$$Type, levelReader1: $LevelReader$$Type, biConsumer2: $BiConsumer$$Type<$BlockPos$$Type, $BlockState$$Type>, randomSource3: $RandomSource$$Type, blockPos4: $BlockPos$$Type, treeConfiguration5: $TreeConfiguration$$Type): boolean
public "onWrenched"(blockState0: $BlockState$$Type, useOnContext1: $UseOnContext$$Type): $InteractionResult
public "pickupBlock"(levelAccessor0: $LevelAccessor$$Type, blockPos1: $BlockPos$$Type, blockState2: $BlockState$$Type): $ItemStack
public "placeLiquid"(levelAccessor0: $LevelAccessor$$Type, blockPos1: $BlockPos$$Type, blockState2: $BlockState$$Type, fluidState3: $FluidState$$Type): boolean
public static "playRemoveSound"(level0: $Level$$Type, blockPos1: $BlockPos$$Type): void
public static "playRotateSound"(level0: $Level$$Type, blockPos1: $BlockPos$$Type): void
public "propertiesToCopy"(): $List<$Property<any>>
public static "registerStandardBogey"(resourceLocation0: $ResourceLocation$$Type): void
public "rotate"(blockState0: $BlockState$$Type, levelAccessor1: $LevelAccessor$$Type, blockPos2: $BlockPos$$Type, rotation3: $Rotation$$Type): $BlockState
public "setBedOccupied"(blockState0: $BlockState$$Type, level1: $Level$$Type, blockPos2: $BlockPos$$Type, livingEntity3: $LivingEntity$$Type, boolean4: boolean): void
public "setDestroySpeed"(v: float): void
public "setLightEmission"(v: integer): void
public "setRequiresTool"(v: boolean): void
public "shouldCheckWeakPower"(blockState0: $BlockState$$Type, signalGetter1: $SignalGetter$$Type, blockPos2: $BlockPos$$Type, direction3: $Direction$$Type): boolean
public "shouldDisplayFluidOverlay"(blockState0: $BlockState$$Type, blockAndTintGetter1: $BlockAndTintGetter$$Type, blockPos2: $BlockPos$$Type, fluidState3: $FluidState$$Type): boolean
public "supportsExternalFaceHiding"(blockState0: $BlockState$$Type): boolean
public "updateAfterWrenched"(blockState0: $BlockState$$Type, useOnContext1: $UseOnContext$$Type): $BlockState
public "updateWater"(levelAccessor0: $LevelAccessor$$Type, blockState1: $BlockState$$Type, blockPos2: $BlockPos$$Type): void
public "withBlockEntityDo"(blockGetter0: $BlockGetter$$Type, blockPos1: $BlockPos$$Type, consumer2: $Consumer$$Type<T>): void
public static "withWater"(levelAccessor0: $LevelAccessor$$Type, blockState1: $BlockState$$Type, blockPos2: $BlockPos$$Type): $BlockState
public "withWater"(blockState0: $BlockState$$Type, blockPlaceContext1: $BlockPlaceContext$$Type): $BlockState
get "size"(): $BogeySizes$BogeySize
set "size"(value: $BogeySizes$BogeySize$$Type)
get "blockEntityClass"(): $Class<T>
get "blockEntityType"(): $BlockEntityType<T>
get "blockStates"(): $List<$BlockState>
get "bogeyUpDirection"(): $Direction
get "defaultStyle"(): $BogeyStyle
get "mod"(): string
get "pickupSound"(): $Optional<$SoundEvent>
get "wheelPointSpacing"(): double
get "wheelRadius"(): double
set "destroySpeed"(value: float)
set "lightEmission"(value: integer)
set "requiresTool"(value: boolean)
}
}

declare module "com.simibubi.create.content.trains.schedule.ScheduleDataEntry" {
import { $ResourceLocation } from "net.minecraft.resources.ResourceLocation"
import { $List } from "java.util.List"
import { $CompoundTag, $CompoundTag$$Type } from "net.minecraft.nbt.CompoundTag"
import { $Pair } from "net.createmod.catnip.data.Pair"
import { $Component } from "net.minecraft.network.chat.Component"
import { $GuiGraphics$$Type } from "net.minecraft.client.gui.GuiGraphics"
import { $ModularGuiLineBuilder$$Type } from "com.simibubi.create.foundation.gui.ModularGuiLineBuilder"
import { $ItemStack, $ItemStack$$Type } from "net.minecraft.world.item.ItemStack"
import { $IScheduleInput } from "com.simibubi.create.content.trains.schedule.IScheduleInput"

export class $ScheduleDataEntry implements $IScheduleInput {
constructor()

public "getData"(): $CompoundTag
public "getId"(): $ResourceLocation
public "getItem"(int0: integer): $ItemStack
public "getSecondLineIcon"(): $ItemStack
public "getSecondLineTooltip"(int0: integer): $List<$Component>
public "getSummary"(): $Pair<$ItemStack, $Component>
public "getTitleAs"(string0: string): $List<$Component>
/** Client only, do not use in server scripts */
public "initConfigurationWidgets"(modularGuiLineBuilder0: $ModularGuiLineBuilder$$Type): void
/** Client only, do not use in server scripts */
public "renderSpecialIcon"(guiGraphics0: $GuiGraphics$$Type, int1: integer, int2: integer): boolean
public "setData"(compoundTag0: $CompoundTag$$Type): void
public "setItem"(int0: integer, itemStack1: $ItemStack$$Type): void
public "slotsTargeted"(): integer
get "data"(): $CompoundTag
get "id"(): $ResourceLocation
get "secondLineIcon"(): $ItemStack
get "summary"(): $Pair<$ItemStack, $Component>
set "data"(value: $CompoundTag$$Type)
}
}

declare module "com.simibubi.create.content.trains.schedule.ScheduleRuntime$State" {
import { $Enum } from "java.lang.Enum"

export class $ScheduleRuntime$State extends $Enum<$ScheduleRuntime$State> {
static readonly "IN_TRANSIT": $ScheduleRuntime$State
static readonly "POST_TRANSIT": $ScheduleRuntime$State
static readonly "PRE_TRANSIT": $ScheduleRuntime$State

public static "valueOf"(string0: string): $ScheduleRuntime$State
public static "values"(): $ScheduleRuntime$State[]
}
}

declare module "com.simibubi.create.content.trains.signal.SingleBlockEntityEdgePoint" {
import { $BlockPos, $BlockPos$$Type } from "net.minecraft.core.BlockPos"
import { $Level, $Level$$Type } from "net.minecraft.world.level.Level"
import { $ResourceKey, $ResourceKey$$Type } from "net.minecraft.resources.ResourceKey"
import { $TrackEdgePoint } from "com.simibubi.create.content.trains.signal.TrackEdgePoint"

export class $SingleBlockEntityEdgePoint extends $TrackEdgePoint {
constructor()

public "getBlockEntityDimension"(): $ResourceKey<$Level>
public "getBlockEntityPos"(): $BlockPos
get "blockEntityDimension"(): $ResourceKey<$Level>
set "blockEntityDimension"(value: $ResourceKey$$Type<$Level$$Type>)
get "blockEntityPos"(): $BlockPos
set "blockEntityPos"(value: $BlockPos$$Type)
}
}

declare module "com.simibubi.create.content.trains.entity.CarriageParticles" {
import { $CarriageContraptionEntity$$Type } from "com.simibubi.create.content.trains.entity.CarriageContraptionEntity"
import { $Carriage$DimensionalCarriageEntity$$Type } from "com.simibubi.create.content.trains.entity.Carriage$DimensionalCarriageEntity"

export class $CarriageParticles {
constructor(carriageContraptionEntity0: $CarriageContraptionEntity$$Type)

public "tick"(dimensionalCarriageEntity0: $Carriage$DimensionalCarriageEntity$$Type): void
}
}

declare module "com.simibubi.create.content.trains.entity.TrainStatus$StatusMessage" {
import { $Component, $Component$$Type } from "net.minecraft.network.chat.Component"
import { $Record } from "java.lang.Record"
import { $Player$$Type } from "net.minecraft.world.entity.player.Player"

export class $TrainStatus$StatusMessage extends $Record {
constructor(...messages: $Component$$Type[])

public "displayToPlayer"(player0: $Player$$Type): void
public "messages"(): $Component[]
}
}

declare module "com.simibubi.create.foundation.mixin.accessor.FallingBlockEntityAccessor" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $FallingBlockEntityAccessor {
}

export namespace $FallingBlockEntityAccessor {
const probejs$$marker: never
}
export abstract class $FallingBlockEntityAccessor$$Static implements $FallingBlockEntityAccessor {
}
}

declare module "com.simibubi.create.content.trains.station.StationMarker" {
import { $MapDecoration$Type } from "net.minecraft.world.level.saveddata.maps.MapDecoration$Type"
import { $BlockGetter$$Type } from "net.minecraft.world.level.BlockGetter"
import { $CompoundTag, $CompoundTag$$Type } from "net.minecraft.nbt.CompoundTag"
import { $Component, $Component$$Type } from "net.minecraft.network.chat.Component"
import { $BlockPos, $BlockPos$$Type } from "net.minecraft.core.BlockPos"

export class $StationMarker {
static readonly "TYPE": $MapDecoration$Type

constructor(blockPos0: $BlockPos$$Type, blockPos1: $BlockPos$$Type, component2: $Component$$Type)

public static "fromWorld"(blockGetter0: $BlockGetter$$Type, blockPos1: $BlockPos$$Type): $StationMarker
public "getId"(): string
public "getName"(): $Component
public "getSource"(): $BlockPos
public "getTarget"(): $BlockPos
public static "load"(compoundTag0: $CompoundTag$$Type): $StationMarker
public "save"(): $CompoundTag
get "id"(): string
get "name"(): $Component
get "source"(): $BlockPos
get "target"(): $BlockPos
}
}

declare module "com.simibubi.create.content.trains.track.ITrackBlock" {
import { $TrackMaterial, $TrackMaterial$$Type } from "com.simibubi.create.content.trains.track.TrackMaterial"
import { $TrackNodeLocation$DiscoveredLocation, $TrackNodeLocation$DiscoveredLocation$$Type } from "com.simibubi.create.content.trains.graph.TrackNodeLocation$DiscoveredLocation"
import { $Direction$$Type } from "net.minecraft.core.Direction"
import { $Collection, $Collection$$Type } from "java.util.Collection"
import { $BiFunction$$Type } from "java.util.function.BiFunction"
import { $BezierTrackPointLocation$$Type } from "com.simibubi.create.content.trains.track.BezierTrackPointLocation"
import { $BlockState, $BlockState$$Type } from "net.minecraft.world.level.block.state.BlockState"
import { $PartialModel } from "dev.engine_room.flywheel.lib.model.baked.PartialModel"
import { $BezierConnection$$Type } from "com.simibubi.create.content.trains.track.BezierConnection"
import { $Direction$AxisDirection, $Direction$AxisDirection$$Type } from "net.minecraft.core.Direction$AxisDirection"
import { $Affine, $Affine$$Type } from "dev.engine_room.flywheel.lib.transform.Affine"
import { $Function$$Type } from "java.util.function.Function"
import { $ResourceKey } from "net.minecraft.resources.ResourceKey"
import { $PoseStack$$Type } from "com.mojang.blaze3d.vertex.PoseStack"
import { $TrackNodeLocation$$Type } from "com.simibubi.create.content.trains.graph.TrackNodeLocation"
import { $BlockGetter$$Type } from "net.minecraft.world.level.BlockGetter"
import { $List } from "java.util.List"
import { $TrackTargetingBehaviour$RenderedTrackOverlayType$$Type } from "com.simibubi.create.content.trains.track.TrackTargetingBehaviour$RenderedTrackOverlayType"
import { $Pair } from "net.createmod.catnip.data.Pair"
import { $Vec3, $Vec3$$Type } from "net.minecraft.world.phys.Vec3"
import { $BlockPos$$Type } from "net.minecraft.core.BlockPos"
import { $Level } from "net.minecraft.world.level.Level"

export interface $ITrackBlock {
"getBogeyAnchor"(blockGetter0: $BlockGetter$$Type, blockPos1: $BlockPos$$Type, blockState2: $BlockState$$Type): $BlockState
"getConnected"(blockGetter0: $BlockGetter$$Type, blockPos1: $BlockPos$$Type, blockState2: $BlockState$$Type, boolean3: boolean, trackNodeLocation4: $TrackNodeLocation$$Type): $Collection<$TrackNodeLocation$DiscoveredLocation>
"getCurveStart"(blockGetter0: $BlockGetter$$Type, blockPos1: $BlockPos$$Type, blockState2: $BlockState$$Type, vec33: $Vec3$$Type): $Vec3
"getElevationAtCenter"(blockGetter0: $BlockGetter$$Type, blockPos1: $BlockPos$$Type, blockState2: $BlockState$$Type): double
"getMaterial"(): $TrackMaterial
"getNearestTrackAxis"(blockGetter0: $BlockGetter$$Type, blockPos1: $BlockPos$$Type, blockState2: $BlockState$$Type, vec33: $Vec3$$Type): $Pair<$Vec3, $Direction$AxisDirection>
"getTrackAxes"(blockGetter0: $BlockGetter$$Type, blockPos1: $BlockPos$$Type, blockState2: $BlockState$$Type): $List<$Vec3>
"getUpNormal"(blockGetter0: $BlockGetter$$Type, blockPos1: $BlockPos$$Type, blockState2: $BlockState$$Type): $Vec3
"getYOffsetAt"(blockGetter0: $BlockGetter$$Type, blockPos1: $BlockPos$$Type, blockState2: $BlockState$$Type, vec33: $Vec3$$Type): integer
"isSlope"(blockGetter0: $BlockGetter$$Type, blockPos1: $BlockPos$$Type, blockState2: $BlockState$$Type): boolean
"overlay"(blockGetter0: $BlockGetter$$Type, blockPos1: $BlockPos$$Type, blockState2: $BlockState$$Type, blockState3: $BlockState$$Type): $BlockState
/** Client only, do not use in server scripts */
"prepareAssemblyOverlay"(blockGetter0: $BlockGetter$$Type, blockPos1: $BlockPos$$Type, blockState2: $BlockState$$Type, direction3: $Direction$$Type, poseStack4: $PoseStack$$Type): $PartialModel
/** Client only, do not use in server scripts */
"prepareTrackOverlay"<Self extends $Affine<Self>>(affine0: $Affine$$Type<Self>, blockGetter1: $BlockGetter$$Type, blockPos2: $BlockPos$$Type, blockState3: $BlockState$$Type, bezierTrackPointLocation4: $BezierTrackPointLocation$$Type, axisDirection5: $Direction$AxisDirection$$Type, renderedTrackOverlayType6: $TrackTargetingBehaviour$RenderedTrackOverlayType$$Type): $PartialModel
"trackEquals"(blockState0: $BlockState$$Type, blockState1: $BlockState$$Type): boolean
get "material"(): $TrackMaterial
}

export namespace $ITrackBlock {
function addToListIfConnected(trackNodeLocation0: $TrackNodeLocation$$Type, collection1: $Collection$$Type<$TrackNodeLocation$DiscoveredLocation$$Type>, biFunction2: $BiFunction$$Type<double, boolean, $Vec3>, function3: $Function$$Type<boolean, $Vec3>, function4: $Function$$Type<boolean, $ResourceKey<$Level>>, function5: $Function$$Type<$Vec3$$Type, integer>, vec36: $Vec3$$Type, bezierConnection7: $BezierConnection$$Type, biFunction8: $BiFunction$$Type<boolean, $Vec3$$Type, $TrackMaterial>): void
function getMaterialSimple(blockGetter0: $BlockGetter$$Type, vec31: $Vec3$$Type): $TrackMaterial
function getMaterialSimple(blockGetter0: $BlockGetter$$Type, vec31: $Vec3$$Type, trackMaterial2: $TrackMaterial$$Type): $TrackMaterial
function walkConnectedTracks(blockGetter0: $BlockGetter$$Type, trackNodeLocation1: $TrackNodeLocation$$Type, boolean2: boolean): $Collection<$TrackNodeLocation$DiscoveredLocation>
}
export abstract class $ITrackBlock$$Static implements $ITrackBlock {
static "addToListIfConnected"(trackNodeLocation0: $TrackNodeLocation$$Type, collection1: $Collection$$Type<$TrackNodeLocation$DiscoveredLocation$$Type>, biFunction2: $BiFunction$$Type<double, boolean, $Vec3>, function3: $Function$$Type<boolean, $Vec3>, function4: $Function$$Type<boolean, $ResourceKey<$Level>>, function5: $Function$$Type<$Vec3$$Type, integer>, vec36: $Vec3$$Type, bezierConnection7: $BezierConnection$$Type, biFunction8: $BiFunction$$Type<boolean, $Vec3$$Type, $TrackMaterial>): void
static "getMaterialSimple"(blockGetter0: $BlockGetter$$Type, vec31: $Vec3$$Type): $TrackMaterial
static "getMaterialSimple"(blockGetter0: $BlockGetter$$Type, vec31: $Vec3$$Type, trackMaterial2: $TrackMaterial$$Type): $TrackMaterial
static "walkConnectedTracks"(blockGetter0: $BlockGetter$$Type, trackNodeLocation1: $TrackNodeLocation$$Type, boolean2: boolean): $Collection<$TrackNodeLocation$DiscoveredLocation>
}
}

declare module "com.simibubi.create.api.event.PipeCollisionEvent$Spill" {
import { $BlockPos$$Type } from "net.minecraft.core.BlockPos"
import { $PipeCollisionEvent } from "com.simibubi.create.api.event.PipeCollisionEvent"
import { $BlockState$$Type } from "net.minecraft.world.level.block.state.BlockState"
import { $Fluid, $Fluid$$Type } from "net.minecraft.world.level.material.Fluid"
import { $Level$$Type } from "net.minecraft.world.level.Level"

export class $PipeCollisionEvent$Spill extends $PipeCollisionEvent {
constructor(level0: $Level$$Type, blockPos1: $BlockPos$$Type, fluid2: $Fluid$$Type, fluid3: $Fluid$$Type, blockState4: $BlockState$$Type)
constructor()

public "getPipeFluid"(): $Fluid
public "getWorldFluid"(): $Fluid
get "pipeFluid"(): $Fluid
get "worldFluid"(): $Fluid
}
}

declare module "com.simibubi.create.api.equipment.goggles.IHaveGoggleInformation" {
import { $List$$Type } from "java.util.List"
import { $IFluidHandler$$Type } from "net.minecraftforge.fluids.capability.IFluidHandler"
import { $Component$$Type } from "net.minecraft.network.chat.Component"
import { $IHaveCustomOverlayIcon } from "com.simibubi.create.api.equipment.goggles.IHaveCustomOverlayIcon"
import { $ItemStack } from "net.minecraft.world.item.ItemStack"
import { $LazyOptional$$Type } from "net.minecraftforge.common.util.LazyOptional"

export interface $IHaveGoggleInformation extends $IHaveCustomOverlayIcon {
"addToGoggleTooltip"(list0: $List$$Type<$Component$$Type>, boolean1: boolean): boolean
"containedFluidTooltip"(list0: $List$$Type<$Component$$Type>, boolean1: boolean, lazyOptional2: $LazyOptional$$Type<$IFluidHandler$$Type>): boolean
"getIcon"(boolean0: boolean): $ItemStack
}

export namespace $IHaveGoggleInformation {
const probejs$$marker: never
}
export abstract class $IHaveGoggleInformation$$Static implements $IHaveGoggleInformation {
}
}

declare module "com.simibubi.create.content.trains.signal.SignalBlockEntity" {
import { $AbstractComputerBehaviour, $AbstractComputerBehaviour$$Type } from "com.simibubi.create.compat.computercraft.AbstractComputerBehaviour"
import { $TransformableBlockEntity } from "com.simibubi.create.api.contraption.transformable.TransformableBlockEntity"
import { $SignalBlockEntity$SignalState, $SignalBlockEntity$SignalState$$Type } from "com.simibubi.create.content.trains.signal.SignalBlockEntity$SignalState"
import { $Direction$$Type } from "net.minecraft.core.Direction"
import { $SmartBlockEntity } from "com.simibubi.create.foundation.blockEntity.SmartBlockEntity"
import { $BlockState$$Type } from "net.minecraft.world.level.block.state.BlockState"
import { $ModelData } from "net.minecraftforge.client.model.data.ModelData"
import { $BlockEntity$$Type } from "net.minecraft.world.level.block.entity.BlockEntity"
import { $Capability$$Type } from "net.minecraftforge.common.capabilities.Capability"
import { $LazyOptional } from "net.minecraftforge.common.util.LazyOptional"
import { $Player$$Type } from "net.minecraft.world.entity.player.Player"
import { $TrackedData, $TrackedData$$Type } from "dev.corgitaco.dataanchor.data.TrackedData"
import { $SignalBlockEntity$OverlayState, $SignalBlockEntity$OverlayState$$Type } from "com.simibubi.create.content.trains.signal.SignalBlockEntity$OverlayState"
import { $CompoundTag$$Type } from "net.minecraft.nbt.CompoundTag"
import { $TrackedDataContainer } from "dev.corgitaco.dataanchor.data.TrackedDataContainer"
import { $BlockEntityType$$Type } from "net.minecraft.world.level.block.entity.BlockEntityType"
import { $BlockPos$$Type } from "net.minecraft.core.BlockPos"
import { $StructureTransform$$Type } from "com.simibubi.create.content.contraptions.StructureTransform"
import { $SignalBoundary, $SignalBoundary$$Type } from "com.simibubi.create.content.trains.signal.SignalBoundary"
import { $TrackedDataRegistry$$Type } from "dev.corgitaco.dataanchor.data.registry.TrackedDataRegistry"
import { $TrackTargetingBehaviour, $TrackTargetingBehaviour$$Type } from "com.simibubi.create.content.trains.track.TrackTargetingBehaviour"

export class $SignalBlockEntity extends $SmartBlockEntity implements $TransformableBlockEntity {
constructor(blockEntityType0: $BlockEntityType$$Type<any>, blockPos1: $BlockPos$$Type, blockState2: $BlockState$$Type)

public "deserializeNBT"(compoundTag0: $CompoundTag$$Type): void
public "enterState"(signalState0: $SignalBlockEntity$SignalState$$Type): void
public "getCapability"<T>(capability0: $Capability$$Type<T>, direction1: $Direction$$Type): $LazyOptional<T>
public "getCapability"<T>(capability0: $Capability$$Type<T>): $LazyOptional<T>
public "getModelData"(): $ModelData
public "getOverlay"(): $SignalBlockEntity$OverlayState
public "getReportedPower"(): boolean
public "getSignal"(): $SignalBoundary
public "getState"(): $SignalBlockEntity$SignalState
public "hasCustomOutlineRendering"(player0: $Player$$Type): boolean
public "isPowered"(): boolean
public static "makeBasicContainer"<O, T extends $TrackedData<O>>(registry: $TrackedDataRegistry$$Type<O, T>, o: O, isClient: boolean): $TrackedDataContainer<O, T>
public static "makeBasicContainer"<O, T extends $TrackedData<O>>(registry: $TrackedDataRegistry$$Type<O, T>, o: O, isClient: boolean, lazyLoad: boolean): $TrackedDataContainer<O, T>
public "onLoad"(): void
public "requestModelDataUpdate"(): void
public "sdl$isDynamicLightEnabled"(): boolean
public "sdl$setDynamicLightEnabled"(enabled: boolean): void
public "setOverlay"(overlayState0: $SignalBlockEntity$OverlayState$$Type): void
public "transform"(blockEntity0: $BlockEntity$$Type, structureTransform1: $StructureTransform$$Type): void
get "computerBehaviour"(): $AbstractComputerBehaviour
set "computerBehaviour"(value: $AbstractComputerBehaviour$$Type)
get "edgePoint"(): $TrackTargetingBehaviour<$SignalBoundary>
set "edgePoint"(value: $TrackTargetingBehaviour$$Type<$SignalBoundary$$Type>)
get "modelData"(): $ModelData
get "overlay"(): $SignalBlockEntity$OverlayState
get "reportedPower"(): boolean
get "signal"(): $SignalBoundary
get "state"(): $SignalBlockEntity$SignalState
get "powered"(): boolean
set "overlay"(value: $SignalBlockEntity$OverlayState$$Type)
}
}

declare module "com.simibubi.create.content.trains.track.BezierConnection$SegmentAngles" {
import { $PoseStack$Pose } from "com.mojang.blaze3d.vertex.PoseStack$Pose"
import { $BlockPos } from "net.minecraft.core.BlockPos"
import { $Couple } from "net.createmod.catnip.data.Couple"

export class $BezierConnection$SegmentAngles {
readonly "length": integer
readonly "lightPosition": $BlockPos[]
readonly "railTransforms": $Couple<$PoseStack$Pose>[]
readonly "tieTransform": $PoseStack$Pose[]

}
}

declare module "com.simibubi.create.content.trains.graph.TrackNodeLocation$DiscoveredLocation" {
import { $TrackMaterial$$Type } from "com.simibubi.create.content.trains.track.TrackMaterial"
import { $TrackNodeLocation } from "com.simibubi.create.content.trains.graph.TrackNodeLocation"
import { $Vec3, $Vec3$$Type } from "net.minecraft.world.phys.Vec3"
import { $BezierConnection, $BezierConnection$$Type } from "com.simibubi.create.content.trains.track.BezierConnection"
import { $Level, $Level$$Type } from "net.minecraft.world.level.Level"
import { $ResourceKey$$Type } from "net.minecraft.resources.ResourceKey"

export class $TrackNodeLocation$DiscoveredLocation extends $TrackNodeLocation {
constructor(level0: $Level$$Type, double1: double, double2: double, double3: double)
constructor(resourceKey0: $ResourceKey$$Type<$Level>, vec31: $Vec3$$Type)
constructor(level0: $Level$$Type, vec31: $Vec3$$Type)

public "connectedViaTurn"(): boolean
public "differentMaterials"(): boolean
public "forceNode"(): $TrackNodeLocation$DiscoveredLocation
public "getDirection"(): $Vec3
public "getTurn"(): $BezierConnection
public "materialA"(trackMaterial0: $TrackMaterial$$Type): $TrackNodeLocation$DiscoveredLocation
public "materialB"(trackMaterial0: $TrackMaterial$$Type): $TrackNodeLocation$DiscoveredLocation
public "materials"(trackMaterial0: $TrackMaterial$$Type, trackMaterial1: $TrackMaterial$$Type): $TrackNodeLocation$DiscoveredLocation
public "notInLineWith"(vec30: $Vec3$$Type): boolean
public "shouldForceNode"(): boolean
public "viaTurn"(bezierConnection0: $BezierConnection$$Type): $TrackNodeLocation$DiscoveredLocation
public "withDirection"(vec30: $Vec3$$Type): $TrackNodeLocation$DiscoveredLocation
public "withNormal"(vec30: $Vec3$$Type): $TrackNodeLocation$DiscoveredLocation
public "withYOffset"(int0: integer): $TrackNodeLocation$DiscoveredLocation
get "direction"(): $Vec3
get "turn"(): $BezierConnection
}
}

declare module "com.simibubi.create.foundation.virtualWorld.VirtualRenderWorld" {
import { $ExplosionJS } from "dev.latvian.mods.kubejs.level.ExplosionJS"
import { $ResourceLocation } from "net.minecraft.resources.ResourceLocation"
import { $LevelHeightAccessor } from "net.minecraft.world.level.LevelHeightAccessor"
import { $AABB$$Type } from "net.minecraft.world.phys.AABB"
import { $LivingEntity, $LivingEntity$$Type } from "net.minecraft.world.entity.LivingEntity"
import { $Direction$$Type } from "net.minecraft.core.Direction"
import { $ParticleOptions$$Type } from "net.minecraft.core.particles.ParticleOptions"
import { $BiFunction$$Type } from "java.util.function.BiFunction"
import { $Runnable$$Type } from "java.lang.Runnable"
import { $ChunkSource } from "net.minecraft.world.level.chunk.ChunkSource"
import { $Registry } from "net.minecraft.core.Registry"
import { $ClipBlockStateContext$$Type } from "net.minecraft.world.level.ClipBlockStateContext"
import { $BlockContainerJS } from "dev.latvian.mods.kubejs.level.BlockContainerJS"
import { $TargetingConditions$$Type } from "net.minecraft.world.entity.ai.targeting.TargetingConditions"
import { $Holder } from "net.minecraft.core.Holder"
import { $VisualizationLevel } from "dev.engine_room.flywheel.api.visualization.VisualizationLevel"
import { $Map } from "java.util.Map"
import { $LightLayer$$Type } from "net.minecraft.world.level.LightLayer"
import { $GameEvent$Context$$Type } from "net.minecraft.world.level.gameevent.GameEvent$Context"
import { $TrackedDataRegistry$$Type } from "dev.corgitaco.dataanchor.data.registry.TrackedDataRegistry"
import { $Predicate$$Type } from "java.util.function.Predicate"
import { $Collection, $Collection$$Type } from "java.util.Collection"
import { $BlockHitResult } from "net.minecraft.world.phys.BlockHitResult"
import { $UUID$$Type } from "java.util.UUID"
import { $BlockEntity, $BlockEntity$$Type } from "net.minecraft.world.level.block.entity.BlockEntity"
import { $Capability$$Type } from "net.minecraftforge.common.capabilities.Capability"
import { $ChunkAccess } from "net.minecraft.world.level.chunk.ChunkAccess"
import { $Player, $Player$$Type } from "net.minecraft.world.entity.player.Player"
import { $FeatureFlagSet } from "net.minecraft.world.flag.FeatureFlagSet"
import { $List, $List$$Type } from "java.util.List"
import { $ObjectOpenCustomHashSet } from "it.unimi.dsi.fastutil.objects.ObjectOpenCustomHashSet"
import { $Stream } from "java.util.stream.Stream"
import { $BlockPos, $BlockPos$$Type } from "net.minecraft.core.BlockPos"
import { $BlockEntityType$$Type } from "net.minecraft.world.level.block.entity.BlockEntityType"
import { $SoundEvent$$Type } from "net.minecraft.sounds.SoundEvent"
import { $Optional } from "java.util.Optional"
import { $Heightmap$Types$$Type } from "net.minecraft.world.level.levelgen.Heightmap$Types"
import { $Level, $Level$$Type } from "net.minecraft.world.level.Level"
import { $VoxelShape, $VoxelShape$$Type } from "net.minecraft.world.phys.shapes.VoxelShape"
import { $SoundSource$$Type } from "net.minecraft.sounds.SoundSource"
import { $LevelChunk } from "net.minecraft.world.level.chunk.LevelChunk"
import { $CollisionContext$$Type } from "net.minecraft.world.phys.shapes.CollisionContext"
import { $EntityType$$Type } from "net.minecraft.world.entity.EntityType"
import { $BlockState, $BlockState$$Type } from "net.minecraft.world.level.block.state.BlockState"
import { $GameEvent$$Type } from "net.minecraft.world.level.gameevent.GameEvent"
import { $Biome } from "net.minecraft.world.level.biome.Biome"
import { $Supplier$$Type } from "java.util.function.Supplier"
import { $Function$$Type } from "java.util.function.Function"
import { $Trackable } from "dev.uncandango.alltheleaks.mixin.Trackable"
import { $Iterable } from "java.lang.Iterable"
import { $LazyOptional } from "net.minecraftforge.common.util.LazyOptional"
import { $TrackedData, $TrackedData$$Type } from "dev.corgitaco.dataanchor.data.TrackedData"
import { $ColorResolver$$Type } from "net.minecraft.world.level.ColorResolver"
import { $ClipContext$$Type } from "net.minecraft.world.level.ClipContext"
import { $Vec3i$$Type } from "net.minecraft.core.Vec3i"
import { $Fluid, $Fluid$$Type } from "net.minecraft.world.level.material.Fluid"
import { $WeakReference } from "java.lang.ref.WeakReference"
import { $Difficulty } from "net.minecraft.world.Difficulty"
import { $Component, $Component$$Type } from "net.minecraft.network.chat.Component"
import { $PartEntity } from "net.minecraftforge.entity.PartEntity"
import { $HolderLookup } from "net.minecraft.core.HolderLookup"
import { $ModelDataManager } from "net.minecraftforge.client.model.data.ModelDataManager"
import { $LevelTickAccess } from "net.minecraft.world.ticks.LevelTickAccess"
import { $FireworksJS$$Type } from "dev.latvian.mods.kubejs.level.FireworksJS"
import { $ResourceKey$$Type } from "net.minecraft.resources.ResourceKey"
import { $ScriptType } from "dev.latvian.mods.kubejs.script.ScriptType"
import { $TickPriority$$Type } from "net.minecraft.world.ticks.TickPriority"
import { $EntityArrayList } from "dev.latvian.mods.kubejs.player.EntityArrayList"
import { $Entity, $Entity$$Type } from "net.minecraft.world.entity.Entity"
import { $TrackedDataContainer } from "dev.corgitaco.dataanchor.data.TrackedDataContainer"
import { $Vec3, $Vec3$$Type } from "net.minecraft.world.phys.Vec3"
import { $Block, $Block$$Type } from "net.minecraft.world.level.block.Block"
import { $Class, $Class$$Type } from "java.lang.Class"

export class $VirtualRenderWorld extends $Level implements $VisualizationLevel {
constructor(level0: $Level$$Type, int1: integer, int2: integer, vec3i3: $Vec3i$$Type, runnable4: $Runnable$$Type)

public "actuallyGetChunk"(int0: integer, int1: integer): $ChunkAccess
public "addFreshEntity"(entity0: $Entity$$Type): boolean
public "blockUpdated"(blockPos0: $BlockPos$$Type, block1: $Block$$Type): void
public "canSeeSky"(blockPos0: $BlockPos$$Type): boolean
public "canSeeSkyFromBelowWater"(blockPos0: $BlockPos$$Type): boolean
public "clear"(): void
public static "clearNullReferences"(): void
public "clip"(clipContext0: $ClipContext$$Type): $BlockHitResult
public "clipWithInteractionOverride"(vec30: $Vec3$$Type, vec31: $Vec3$$Type, blockPos2: $BlockPos$$Type, voxelShape3: $VoxelShape$$Type, blockState4: $BlockState$$Type): $BlockHitResult
public "collidesWithSuffocatingBlock"(entity0: $Entity$$Type, aABB1: $AABB$$Type): boolean
public "containsAnyLiquid"(aABB0: $AABB$$Type): boolean
public static "create"(int0: integer, int1: integer): $LevelHeightAccessor
public "createEntity"(type: $EntityType$$Type<any>): $Entity
public "createEntityList"(entities: $Collection$$Type<$Entity$$Type>): $EntityArrayList
public "createExplosion"(x: double, y: double, z: double): $ExplosionJS
public static "createWeakRefBasedSet"(): $ObjectOpenCustomHashSet<$WeakReference<$Trackable>>
public "dayTime"(): long
public "destroyBlock"(blockPos0: $BlockPos$$Type, boolean1: boolean): boolean
public "destroyBlock"(blockPos0: $BlockPos$$Type, boolean1: boolean, entity2: $Entity$$Type): boolean
public "enabledFeatures"(): $FeatureFlagSet
public "findFreePosition"(entity0: $Entity$$Type, voxelShape1: $VoxelShape$$Type, vec32: $Vec3$$Type, double3: double, double4: double, double5: double): $Optional<$Vec3>
public "findSupportingBlock"(entity0: $Entity$$Type, aABB1: $AABB$$Type): $Optional<$BlockPos>
public "gameEvent"(gameEvent0: $GameEvent$$Type, vec31: $Vec3$$Type, context2: $GameEvent$Context$$Type): void
public "gameEvent"(gameEvent0: $GameEvent$$Type, blockPos1: $BlockPos$$Type, context2: $GameEvent$Context$$Type): void
public "gameEvent"(entity0: $Entity$$Type, gameEvent1: $GameEvent$$Type, blockPos2: $BlockPos$$Type): void
public "gameEvent"(entity0: $Entity$$Type, gameEvent1: $GameEvent$$Type, vec32: $Vec3$$Type): void
public static "getAllLoadedEntities"(level: $Level$$Type): $Iterable<$Entity>
public "getAnyChunkImmediately"(int0: integer, int1: integer): $ChunkAccess
public "getBestNeighborSignal"(blockPos0: $BlockPos$$Type): integer
public "getBiome"(blockPos0: $BlockPos$$Type): $Holder<$Biome>
public "getBlock"(x: integer, y: integer, z: integer): $BlockContainerJS
public "getBlock"(blockEntity: $BlockEntity$$Type): $BlockContainerJS
public "getBlock"(pos: $BlockPos$$Type): $BlockContainerJS
public "getBlockCollisions"(entity0: $Entity$$Type, aABB1: $AABB$$Type): $Iterable<$VoxelShape>
public "getBlockEntity"<T extends $BlockEntity>(blockPos0: $BlockPos$$Type, blockEntityType1: $BlockEntityType$$Type<T>): $Optional<T>
public "getBlockFloorHeight"(voxelShape0: $VoxelShape$$Type, supplier1: $Supplier$$Type<$VoxelShape>): double
public "getBlockFloorHeight"(blockPos0: $BlockPos$$Type): double
public "getBlockState"(int0: integer, int1: integer, int2: integer): $BlockState
public "getBlockStates"(aABB0: $AABB$$Type): $Stream<$BlockState>
public "getBlockStatesIfLoaded"(aABB0: $AABB$$Type): $Stream<$BlockState>
public "getBlockTicks"(): $LevelTickAccess<$Block>
public "getBlockTint"(blockPos0: $BlockPos$$Type, colorResolver1: $ColorResolver$$Type): integer
public "getBrightness"(lightLayer0: $LightLayer$$Type, blockPos1: $BlockPos$$Type): integer
public "getCapability"<T>(capability0: $Capability$$Type<T>): $LazyOptional<T>
public "getChunkAtImmediately"(int0: integer, int1: integer): $LevelChunk
public "getChunkSource"(): $ChunkSource
public "getCollisions"(entity0: $Entity$$Type, aABB1: $AABB$$Type): $Iterable<$VoxelShape>
public "getControlInputSignal"(blockPos0: $BlockPos$$Type, direction1: $Direction$$Type, boolean2: boolean): integer
public "getDifficulty"(): $Difficulty
public "getDimension"(): $ResourceLocation
public "getDirectSignal"(blockPos0: $BlockPos$$Type, direction1: $Direction$$Type): integer
public "getDirectSignalTo"(blockPos0: $BlockPos$$Type): integer
public "getDisplayName"(): $Component
public "getEntities"(): $EntityArrayList
public "getEntities"(entity0: $Entity$$Type, aABB1: $AABB$$Type): $List<$Entity>
public "getEntitiesOfClass"<T extends $Entity>(class0: $Class$$Type<T>, aABB1: $AABB$$Type): $List<T>
public "getEntitiesOfClass"<T extends $Entity>(class0: $Class$$Type<T>, aABB1: $AABB$$Type, predicate2: $Predicate$$Type<T>): $List<T>
public "getEntitiesWithin"(aabb: $AABB$$Type): $EntityArrayList
public "getEntityCollisions"(entity0: $Entity$$Type, aABB1: $AABB$$Type): $List<$VoxelShape>
public "getExistingBlockEntity"(blockPos0: $BlockPos$$Type): $BlockEntity
public "getFluidTicks"(): $LevelTickAccess<$Fluid>
public "getHeightmapPos"(types0: $Heightmap$Types$$Type, blockPos1: $BlockPos$$Type): $BlockPos
public "getLightEmission"(blockPos0: $BlockPos$$Type): integer
/** @deprecated */
public "getLightLevelDependentMagicValue"(blockPos0: $BlockPos$$Type): float
public "getLoadedChunk"(int0: integer, int1: integer): $ChunkAccess
public "getMaxLightLevel"(): integer
public "getMaxLocalRawBrightness"(blockPos0: $BlockPos$$Type): integer
public "getMaxLocalRawBrightness"(blockPos0: $BlockPos$$Type, int1: integer): integer
public "getModelDataManager"(): $ModelDataManager
public "getMoonBrightness"(): float
public "getMoonPhase"(): integer
public "getName"(): $Component
public "getNearbyEntities"<T extends $LivingEntity>(class0: $Class$$Type<T>, targetingConditions1: $TargetingConditions$$Type, livingEntity2: $LivingEntity$$Type, aABB3: $AABB$$Type): $List<T>
public "getNearbyPlayers"(targetingConditions0: $TargetingConditions$$Type, livingEntity1: $LivingEntity$$Type, aABB2: $AABB$$Type): $List<$Player>
public "getNearestEntity"<T extends $LivingEntity>(list0: $List$$Type<T>, targetingConditions1: $TargetingConditions$$Type, livingEntity2: $LivingEntity$$Type, double3: double, double4: double, double5: double): T
public "getNearestEntity"<T extends $LivingEntity>(class0: $Class$$Type<T>, targetingConditions1: $TargetingConditions$$Type, livingEntity2: $LivingEntity$$Type, double3: double, double4: double, double5: double, aABB6: $AABB$$Type): T
public "getNearestPlayer"(double0: double, double1: double, double2: double, double3: double, predicate4: $Predicate$$Type<$Entity$$Type>): $Player
public "getNearestPlayer"(entity0: $Entity$$Type, double1: double): $Player
public "getNearestPlayer"(double0: double, double1: double, double2: double, double3: double, boolean4: boolean): $Player
public "getNearestPlayer"(targetingConditions0: $TargetingConditions$$Type, livingEntity1: $LivingEntity$$Type): $Player
public "getNearestPlayer"(targetingConditions0: $TargetingConditions$$Type, livingEntity1: $LivingEntity$$Type, double2: double, double3: double, double4: double): $Player
public "getNearestPlayer"(targetingConditions0: $TargetingConditions$$Type, double1: double, double2: double, double3: double): $Player
public "getNoiseBiome"(int0: integer, int1: integer, int2: integer): $Holder<$Biome>
public "getPartEntities"(): $Collection<$PartEntity<any>>
public "getPathfindingCostFromLightLevels"(blockPos0: $BlockPos$$Type): float
public "getPlayerByUUID"(uUID0: $UUID$$Type): $Player
public "getPlayers"(): $EntityArrayList
public "getRawBrightness"(blockPos0: $BlockPos$$Type, int1: integer): integer
public "getShade"(direction0: $Direction$$Type, boolean1: boolean): float
public "getShade"(float0: float, float1: float, float2: float, boolean3: boolean): float
public "getSide"(): $ScriptType
public "getSignal"(blockPos0: $BlockPos$$Type, direction1: $Direction$$Type): integer
public static "getSummary"(): $Map<$Class<any>, $Map<$Class<any>, long>>
public "getTimeOfDay"(float0: float): float
public "getUncachedNoiseBiome"(int0: integer, int1: integer, int2: integer): $Holder<$Biome>
public "hasChunk"(int0: integer, int1: integer): boolean
/** @deprecated */
public "hasChunkAt"(blockPos0: $BlockPos$$Type): boolean
/** @deprecated */
public "hasChunkAt"(int0: integer, int1: integer): boolean
/** @deprecated */
public "hasChunksAt"(int0: integer, int1: integer, int2: integer, int3: integer, int4: integer, int5: integer): boolean
/** @deprecated */
public "hasChunksAt"(blockPos0: $BlockPos$$Type, blockPos1: $BlockPos$$Type): boolean
/** @deprecated */
public "hasChunksAt"(int0: integer, int1: integer, int2: integer, int3: integer): boolean
public "hasNearbyAlivePlayer"(double0: double, double1: double, double2: double, double3: double): boolean
public "hasNeighborSignal"(blockPos0: $BlockPos$$Type): boolean
public "hasSignal"(blockPos0: $BlockPos$$Type, direction1: $Direction$$Type): boolean
public "holderLookup"<T>(resourceKey0: $ResourceKey$$Type<$Registry<T>>): $HolderLookup<T>
public "isAreaLoaded"(blockPos0: $BlockPos$$Type, int1: integer): boolean
public "isBlockInLine"(clipBlockStateContext0: $ClipBlockStateContext$$Type): $BlockHitResult
public "isEmptyBlock"(blockPos0: $BlockPos$$Type): boolean
public "isOverworld"(): boolean
public "isUnobstructed"(entity0: $Entity$$Type, voxelShape1: $VoxelShape$$Type): boolean
public "isUnobstructed"(blockState0: $BlockState$$Type, blockPos1: $BlockPos$$Type, collisionContext2: $CollisionContext$$Type): boolean
public "isUnobstructed"(entity0: $Entity$$Type): boolean
public "isWaterAt"(blockPos0: $BlockPos$$Type): boolean
public "levelEvent"(player0: $Player$$Type, int1: integer, blockPos2: $BlockPos$$Type, int3: integer): void
public "levelEvent"(int0: integer, blockPos1: $BlockPos$$Type, int2: integer): void
public static "makeBasicContainer"<O, T extends $TrackedData<O>>(registry: $TrackedDataRegistry$$Type<O, T>, o: O, isClient: boolean): $TrackedDataContainer<O, T>
public static "makeBasicContainer"<O, T extends $TrackedData<O>>(registry: $TrackedDataRegistry$$Type<O, T>, o: O, isClient: boolean, lazyLoad: boolean): $TrackedDataContainer<O, T>
public static "nextMultipleOf16"(int0: integer): integer
public "noCollision"(entity0: $Entity$$Type): boolean
public "noCollision"(aABB0: $AABB$$Type): boolean
public "playSound"(player0: $Player$$Type, blockPos1: $BlockPos$$Type, soundEvent2: $SoundEvent$$Type, soundSource3: $SoundSource$$Type): void
public "players"(): $List<$Player>
public "resetExternalLight"(): void
public "runCommand"(command: string): integer
public "runCommandSilent"(command: string): integer
public "runLightEngine"(): void
public "scheduleTick"(blockPos0: $BlockPos$$Type, block1: $Block$$Type, int2: integer, tickPriority3: $TickPriority$$Type): void
public "scheduleTick"(blockPos0: $BlockPos$$Type, block1: $Block$$Type, int2: integer): void
public "scheduleTick"(blockPos0: $BlockPos$$Type, fluid1: $Fluid$$Type, int2: integer, tickPriority3: $TickPriority$$Type): void
public "scheduleTick"(blockPos0: $BlockPos$$Type, fluid1: $Fluid$$Type, int2: integer): void
public "self"(): $Level
public "setBlockEntities"(collection0: $Collection$$Type<$BlockEntity$$Type>): void
public "setExternalLight"(int0: integer): void
public "setStatusMessage"(message: $Component$$Type): void
public "spawnFireworks"(x: double, y: double, z: double, f: $FireworksJS$$Type): void
public "spawnParticles"(options: $ParticleOptions$$Type, overrideLimiter: boolean, x: double, y: double, z: double, vx: double, vy: double, vz: double, count: integer, speed: double): void
public static "startTracking"(object0: any): void
public "startTracking"(): void
public "supportsVisualization"(): boolean
public "tell"(message: $Component$$Type): void
public static "traverseBlocks"<T, C>(vec30: $Vec3$$Type, vec31: $Vec3$$Type, c2: C, biFunction3: $BiFunction$$Type<C, $BlockPos$$Type, T>, function4: $Function$$Type<C, T>): T
public "wrap"(): $WeakReference<$Trackable>
get "blockTicks"(): $LevelTickAccess<$Block>
get "chunkSource"(): $ChunkSource
get "difficulty"(): $Difficulty
get "dimension"(): $ResourceLocation
get "displayName"(): $Component
get "entities"(): $EntityArrayList
get "fluidTicks"(): $LevelTickAccess<$Fluid>
get "maxLightLevel"(): integer
get "modelDataManager"(): $ModelDataManager
get "moonBrightness"(): float
get "moonPhase"(): integer
get "name"(): $Component
get "partEntities"(): $Collection<$PartEntity<any>>
get "side"(): $ScriptType
get "overworld"(): boolean
set "blockEntities"(value: $Collection$$Type<$BlockEntity$$Type>)
set "externalLight"(value: integer)
set "statusMessage"(value: $Component$$Type)
}
}

declare module "com.simibubi.create.foundation.mixin.accessor.LevelRendererAccessor" {
import { $Frustum } from "net.minecraft.client.renderer.culling.Frustum"

export interface $LevelRendererAccessor {
"create$getCapturedFrustum"(): $Frustum
"create$getCullingFrustum"(): $Frustum
}

export namespace $LevelRendererAccessor {
const probejs$$marker: never
}
export abstract class $LevelRendererAccessor$$Static implements $LevelRendererAccessor {
}
}

declare module "com.simibubi.create.content.logistics.filter.FilterItemStack" {
import { $CompoundTag, $CompoundTag$$Type } from "net.minecraft.nbt.CompoundTag"
import { $FluidStack, $FluidStack$$Type } from "net.minecraftforge.fluids.FluidStack"
import { $ItemStack, $ItemStack$$Type } from "net.minecraft.world.item.ItemStack"
import { $Level$$Type } from "net.minecraft.world.level.Level"

export class $FilterItemStack {
public static "empty"(): $FilterItemStack
public "fluid"(level0: $Level$$Type): $FluidStack
public "isEmpty"(): boolean
public "isFilterItem"(): boolean
public "item"(): $ItemStack
public static "of"(compoundTag0: $CompoundTag$$Type): $FilterItemStack
public static "of"(itemStack0: $ItemStack$$Type): $FilterItemStack
public "serializeNBT"(): $CompoundTag
public "test"(level0: $Level$$Type, fluidStack1: $FluidStack$$Type): boolean
public "test"(level0: $Level$$Type, itemStack1: $ItemStack$$Type): boolean
public "test"(level0: $Level$$Type, fluidStack1: $FluidStack$$Type, boolean2: boolean): boolean
public "test"(level0: $Level$$Type, itemStack1: $ItemStack$$Type, boolean2: boolean): boolean
get "filterItem"(): boolean
}
}

declare module "com.simibubi.create.content.kinetics.deployer.DeployerRecipeSearchEvent" {
import { $Container } from "net.minecraft.world.Container"
import { $Recipe } from "net.minecraft.world.item.crafting.Recipe"
import { $Optional } from "java.util.Optional"
import { $Event } from "net.minecraftforge.eventbus.api.Event"
import { $DeployerBlockEntity, $DeployerBlockEntity$$Type } from "com.simibubi.create.content.kinetics.deployer.DeployerBlockEntity"
import { $RecipeWrapper, $RecipeWrapper$$Type } from "net.minecraftforge.items.wrapper.RecipeWrapper"
import { $Supplier$$Type } from "java.util.function.Supplier"

export class $DeployerRecipeSearchEvent extends $Event {
constructor(deployerBlockEntity0: $DeployerBlockEntity$$Type, recipeWrapper1: $RecipeWrapper$$Type)
constructor()

public "addRecipe"(supplier0: $Supplier$$Type<$Optional<$Recipe<$Container>>>, int1: integer): void
public "getBlockEntity"(): $DeployerBlockEntity
public "getInventory"(): $RecipeWrapper
public "getRecipe"(): $Recipe<$Container>
public "shouldAddRecipeWithPriority"(int0: integer): boolean
get "blockEntity"(): $DeployerBlockEntity
get "inventory"(): $RecipeWrapper
get "recipe"(): $Recipe<$Container>
}
}

declare module "com.simibubi.create.content.contraptions.MountedStorageSyncPacket" {
import { $BlockPos, $BlockPos$$Type } from "net.minecraft.core.BlockPos"
import { $Map, $Map$$Type } from "java.util.Map"
import { $MountedItemStorage, $MountedItemStorage$$Type } from "com.simibubi.create.api.contraption.storage.item.MountedItemStorage"
import { $FriendlyByteBuf$$Type } from "net.minecraft.network.FriendlyByteBuf"
import { $SimplePacketBase } from "com.simibubi.create.foundation.networking.SimplePacketBase"
import { $MountedFluidStorage, $MountedFluidStorage$$Type } from "com.simibubi.create.api.contraption.storage.fluid.MountedFluidStorage"

export class $MountedStorageSyncPacket extends $SimplePacketBase {
readonly "contraptionId": integer
readonly "fluids": $Map<$BlockPos, $MountedFluidStorage>
readonly "items": $Map<$BlockPos, $MountedItemStorage>

constructor(int0: integer, map1: $Map$$Type<$BlockPos$$Type, $MountedItemStorage$$Type>, map2: $Map$$Type<$BlockPos$$Type, $MountedFluidStorage$$Type>)
constructor(friendlyByteBuf0: $FriendlyByteBuf$$Type)

}
}

declare module "com.simibubi.create.api.event.TrackGraphMergeEvent" {
import { $TrackGraph, $TrackGraph$$Type } from "com.simibubi.create.content.trains.graph.TrackGraph"
import { $Event } from "net.minecraftforge.eventbus.api.Event"

export class $TrackGraphMergeEvent extends $Event {
constructor()
constructor(trackGraph0: $TrackGraph$$Type, trackGraph1: $TrackGraph$$Type)

public "getGraphMergedFrom"(): $TrackGraph
public "getGraphMergedInto"(): $TrackGraph
get "graphMergedFrom"(): $TrackGraph
get "graphMergedInto"(): $TrackGraph
}
}

declare module "com.simibubi.create.content.kinetics.deployer.DeployerFakePlayer" {
import { $ResourceLocation, $ResourceLocation$$Type } from "net.minecraft.resources.ResourceLocation"
import { $LivingEntity, $LivingEntity$$Type } from "net.minecraft.world.entity.LivingEntity"
import { $Direction } from "net.minecraft.core.Direction"
import { $Item$$Type } from "net.minecraft.world.item.Item"
import { $GameProfile } from "com.mojang.authlib.GameProfile"
import { $FluidType$$Type } from "net.minecraftforge.fluids.FluidType"
import { $KnockBackModifier } from "com.tacz.guns.api.entity.KnockBackModifier"
import { $BlockContainerJS, $BlockContainerJS$$Type } from "dev.latvian.mods.kubejs.level.BlockContainerJS"
import { $LivingExperienceDropEvent$$Type } from "net.minecraftforge.event.entity.living.LivingExperienceDropEvent"
import { $MinecraftServer } from "net.minecraft.server.MinecraftServer"
import { $Pose$$Type } from "net.minecraft.world.entity.Pose"
import { $AnimationApplier } from "dev.kosmx.playerAnim.impl.animation.AnimationApplier"
import { $Map } from "java.util.Map"
import { $TrackedDataRegistry$$Type } from "dev.corgitaco.dataanchor.data.registry.TrackedDataRegistry"
import { $NotificationBuilder$$Type } from "dev.latvian.mods.kubejs.util.NotificationBuilder"
import { $SoundAction$$Type } from "net.minecraftforge.common.SoundAction"
import { $InventoryKJS$$Type } from "dev.latvian.mods.kubejs.core.InventoryKJS"
import { $KubeJSGUI$$Type } from "dev.latvian.mods.kubejs.gui.KubeJSGUI"
import { $LevelRenderer$$Type } from "net.minecraft.client.renderer.LevelRenderer"
import { $UUID, $UUID$$Type } from "java.util.UUID"
import { $Capability$$Type } from "net.minecraftforge.common.capabilities.Capability"
import { $Player$$Type } from "net.minecraft.world.entity.player.Player"
import { $ChestMenuData$$Type } from "dev.latvian.mods.kubejs.gui.chest.ChestMenuData"
import { $ObjectOpenCustomHashSet } from "it.unimi.dsi.fastutil.objects.ObjectOpenCustomHashSet"
import { $CompoundTag, $CompoundTag$$Type } from "net.minecraft.nbt.CompoundTag"
import { $BlockPos$$Type } from "net.minecraft.core.BlockPos"
import { $SoundEvent, $SoundEvent$$Type } from "net.minecraft.sounds.SoundEvent"
import { $PlayerStatsJS } from "dev.latvian.mods.kubejs.player.PlayerStatsJS"
import { $Boat$$Type } from "net.minecraft.world.entity.vehicle.Boat"
import { $FluidState$$Type } from "net.minecraft.world.level.material.FluidState"
import { $ItemStack, $ItemStack$$Type } from "net.minecraft.world.item.ItemStack"
import { $Level } from "net.minecraft.world.level.Level"
import { $AbstractContainerMenu } from "net.minecraft.world.inventory.AbstractContainerMenu"
import { $BlockState } from "net.minecraft.world.level.block.state.BlockState"
import { $ServerLevel$$Type } from "net.minecraft.server.level.ServerLevel"
import { $Trackable } from "dev.uncandango.alltheleaks.mixin.Trackable"
import { $LazyOptional } from "net.minecraftforge.common.util.LazyOptional"
import { $Ingredient$$Type } from "net.minecraft.world.item.crafting.Ingredient"
import { $TrackedData, $TrackedData$$Type } from "dev.corgitaco.dataanchor.data.TrackedData"
import { $LivingChangeTargetEvent$$Type } from "net.minecraftforge.event.entity.living.LivingChangeTargetEvent"
import { $BiPredicate$$Type } from "java.util.function.BiPredicate"
import { $ServerPlayer } from "net.minecraft.server.level.ServerPlayer"
import { $Container } from "net.minecraft.world.Container"
import { $MobCategory } from "net.minecraft.world.entity.MobCategory"
import { $WeakReference } from "java.lang.ref.WeakReference"
import { $ObjectList } from "it.unimi.dsi.fastutil.objects.ObjectList"
import { $EntityPotionEffectsJS } from "dev.latvian.mods.kubejs.entity.EntityPotionEffectsJS"
import { $AttributeModifier$Operation$$Type } from "net.minecraft.world.entity.ai.attributes.AttributeModifier$Operation"
import { $Component, $Component$$Type } from "net.minecraft.network.chat.Component"
import { $PartEntity } from "net.minecraftforge.entity.PartEntity"
import { $RayTraceResultJS } from "dev.latvian.mods.kubejs.entity.RayTraceResultJS"
import { $Attribute$$Type } from "net.minecraft.world.entity.ai.attributes.Attribute"
import { $ScriptType } from "dev.latvian.mods.kubejs.script.ScriptType"
import { $Consumer$$Type } from "java.util.function.Consumer"
import { $HitResult$$Type } from "net.minecraft.world.phys.HitResult"
import { $EntityArrayList } from "dev.latvian.mods.kubejs.player.EntityArrayList"
import { $Entity, $Entity$$Type } from "net.minecraft.world.entity.Entity"
import { $TrackedDataContainer } from "dev.corgitaco.dataanchor.data.TrackedDataContainer"
import { $EntityEvent$Size$$Type } from "net.minecraftforge.event.entity.EntityEvent$Size"
import { $Vec3$$Type } from "net.minecraft.world.phys.Vec3"
import { $EquipmentSlot$$Type } from "net.minecraft.world.entity.EquipmentSlot"
import { $EntityDimensions$$Type } from "net.minecraft.world.entity.EntityDimensions"
import { $LivingDropsEvent$$Type } from "net.minecraftforge.event.entity.living.LivingDropsEvent"
import { $Class } from "java.lang.Class"
import { $InteractionHand$$Type } from "net.minecraft.world.InteractionHand"
import { $FakePlayer } from "net.minecraftforge.common.util.FakePlayer"

export class $DeployerFakePlayer extends $FakePlayer {
static readonly "fallbackID": $UUID

constructor(serverLevel0: $ServerLevel$$Type, uUID1: $UUID$$Type)

public "addExhaustion"(exhaustion: float): void
public "addFood"(f: integer, m: float): void
public "addItemCooldown"(item: $Item$$Type, ticks: integer): void
public "addXP"(xp: integer): void
public "addXPLevels"(l: integer): void
public "alwaysAccepts"(): boolean
public "attack"(hp: float): void
public "ban"(banner: string, reason: string, expiresInMillis: long): void
public "boostElytraFlight"(): void
public "canBeRiddenUnderFluidType"(fluidType0: $FluidType$$Type, entity1: $Entity$$Type): boolean
public "canDrownInFluidType"(fluidType0: $FluidType$$Type): boolean
public "canEntityBeSeen"(entity: $LivingEntity$$Type): boolean
public "canFluidExtinguish"(fluidType0: $FluidType$$Type): boolean
public "canHydrateInFluidType"(fluidType0: $FluidType$$Type): boolean
public "canReach"(vec30: $Vec3$$Type, double1: double): boolean
public "canReach"(blockPos0: $BlockPos$$Type, double1: double): boolean
public "canReach"(entity0: $Entity$$Type, double1: double): boolean
public "canReachRaw"(blockPos0: $BlockPos$$Type, double1: double): boolean
public "canReachRaw"(entity0: $Entity$$Type, double1: double): boolean
public "canRiderInteract"(): boolean
public "canStartSwimming"(): boolean
public "canSwimInFluidType"(fluidType0: $FluidType$$Type): boolean
public "captureInventory"(autoRestore: boolean): $Container
public static "clearNullReferences"(): void
public static "createWeakRefBasedSet"(): $ObjectOpenCustomHashSet<$WeakReference<$Trackable>>
public "damageEquipment"(slot: $EquipmentSlot$$Type, amount: integer, onBroken: $Consumer$$Type<$ItemStack$$Type>): void
public "damageEquipment"(slot: $EquipmentSlot$$Type): void
public "damageEquipment"(slot: $EquipmentSlot$$Type, amount: integer): void
public "damageHeldItem"(): void
public "damageHeldItem"(hand: $InteractionHand$$Type, amount: integer): void
public "damageHeldItem"(hand: $InteractionHand$$Type, amount: integer, onBroken: $Consumer$$Type<$ItemStack$$Type>): void
public static "deployerCollectsDropsFromKilledEntities"(livingDropsEvent0: $LivingDropsEvent$$Type): void
public static "deployerHasEyesOnHisFeet"(size0: $EntityEvent$Size$$Type): void
public static "deployerKillsDoNotSpawnXP"(livingExperienceDropEvent0: $LivingExperienceDropEvent$$Type): void
public "deserializeNBT"(compoundTag0: $CompoundTag$$Type): void
public static "entitiesDontRetaliate"(livingChangeTargetEvent0: $LivingChangeTargetEvent$$Type): void
public "foodEaten"(is: $ItemStack$$Type): void
public static "fromLivingEntity"(livingEntity0: $LivingEntity$$Type): $KnockBackModifier
public static "getAlpha"(le: $LivingEntity$$Type, partialTicks: float): float
/** @deprecated */
public "getAnimation"(): $AnimationApplier
public "getAttributeBaseValue"(attribute: $Attribute$$Type): double
public "getAttributeTotalValue"(attribute: $Attribute$$Type): double
public "getBlock"(): $BlockContainerJS
public "getBlockReach"(): double
public "getCachedFeetBlockState"(): $BlockState
public "getCapability"<T>(capability0: $Capability$$Type<T>): $LazyOptional<T>
public "getChestArmorItem"(): $ItemStack
public "getClassification"(boolean0: boolean): $MobCategory
public "getDefaultMovementSpeed"(): double
public "getDisplayName"(): $Component
public "getDistance"(pos: $BlockPos$$Type): double
public "getDistance"(x: double, y: double, z: double): double
public "getDistanceSq"(pos: $BlockPos$$Type): double
public "getEntityReach"(): double
public "getEquipment"(slot: $EquipmentSlot$$Type): $ItemStack
/** @deprecated */
public "getEyeHeightForge"(pose0: $Pose$$Type, entityDimensions1: $EntityDimensions$$Type): float
public "getFacing"(): $Direction
public "getFeetArmorItem"(): $ItemStack
public "getFluidFallDistanceModifier"(fluidType0: $FluidType$$Type): float
public "getFluidMotionScale"(fluidType0: $FluidType$$Type): double
public "getFoodLevel"(): integer
public "getHeadArmorItem"(): $ItemStack
public "getHeldItem"(hand: $InteractionHand$$Type): $ItemStack
public "getItem"(): $ItemStack
public "getLegsArmorItem"(): $ItemStack
public "getLevel"(): $Level
public "getMainHandItem"(): $ItemStack
public static "getMatched"(entity: $Entity$$Type): $ObjectList<$ResourceLocation>
public "getMotionX"(): double
public "getMotionY"(): double
public "getMotionZ"(): double
public "getMouseItem"(): $ItemStack
public "getName"(): $Component
public "getNbt"(): $CompoundTag
public "getOffHandItem"(): $ItemStack
public "getOpenInventory"(): $AbstractContainerMenu
public "getParts"(): $PartEntity<any>[]
public "getPassengers"(): $EntityArrayList
public "getPickedResult"(hitResult0: $HitResult$$Type): $ItemStack
public "getPotionEffects"(): $EntityPotionEffectsJS
public "getProfile"(): $GameProfile
public "getReachDistance"(): double
public "getSaturation"(): float
public "getScriptType"(): $ScriptType
public "getSelectedSlot"(): integer
public "getServer"(): $MinecraftServer
public "getSoundFromFluidType"(fluidType0: $FluidType$$Type, soundAction1: $SoundAction$$Type): $SoundEvent
public "getSpawnLocation"(): $BlockContainerJS
public "getStats"(): $PlayerStatsJS
public "getStepHeight"(): float
public static "getSummary"(): $Map<$Class<any>, $Map<$Class<any>, long>>
public "getTeamId"(): string
public "getTotalMovementSpeed"(): double
public "getType"(): string
public "getXp"(): integer
public "getXpLevel"(): integer
public "give"(item: $ItemStack$$Type): void
public "giveInHand"(item: $ItemStack$$Type): void
public "hasCustomOutlineRendering"(player0: $Player$$Type): boolean
public "isAdvancementDone"(id: $ResourceLocation$$Type): boolean
public "isAmbientCreature"(): boolean
public "isAnimal"(): boolean
public "isCloseEnough"(entity0: $Entity$$Type, double1: double): boolean
public "isDynamicLightEnabled"(): boolean
public "isDynamicLightEnabledH"(): boolean
public "isEyeInFluidType"(fluidType0: $FluidType$$Type): boolean
public "isFake"(): boolean
public "isFrame"(): boolean
public "isHoldingInAnyHand"(i: $Ingredient$$Type): boolean
public "isInFluidType"(fluidState0: $FluidState$$Type): boolean
public "isInFluidType"(fluidType0: $FluidType$$Type): boolean
public "isInFluidType"(biPredicate0: $BiPredicate$$Type<$FluidType$$Type, double>): boolean
public "isLiving"(): boolean
public "isMiningBlock"(): boolean
public "isMonster"(): boolean
public "isMultipartEntity"(): boolean
public "isOnScoreboardTeam"(teamId: string): boolean
public "isOp"(): boolean
public "isPeacefulCreature"(): boolean
public "isPlayer"(): boolean
public "isPushedByFluid"(fluidType0: $FluidType$$Type): boolean
public "isUndead"(): boolean
public "isWaterCreature"(): boolean
public "jumpInFluid"(fluidType0: $FluidType$$Type): void
public "kick"(): void
public "kick"(reason: $Component$$Type): void
public static "makeBasicContainer"<O, T extends $TrackedData<O>>(registry: $TrackedDataRegistry$$Type<O, T>, o: O, isClient: boolean): $TrackedDataContainer<O, T>
public static "makeBasicContainer"<O, T extends $TrackedData<O>>(registry: $TrackedDataRegistry$$Type<O, T>, o: O, isClient: boolean, lazyLoad: boolean): $TrackedDataContainer<O, T>
public "mergeNbt"(tag: $CompoundTag$$Type): $Entity
public "modifyAttribute"(attribute: $Attribute$$Type, identifier: string, d: double, operation: $AttributeModifier$Operation$$Type): void
public "moveInFluid"(fluidState0: $FluidState$$Type, vec31: $Vec3$$Type, double2: double): boolean
public "notify"(builder: $NotificationBuilder$$Type): void
public "notify"(title: $Component$$Type, text: $Component$$Type): void
public "openChestGUI"(title: $Component$$Type, rows: integer, gui: $Consumer$$Type<$ChestMenuData$$Type>): void
public "openGUI"(gui: $Consumer$$Type<$KubeJSGUI$$Type>): void
public "openInventoryGUI"(inventory: $InventoryKJS$$Type, title: $Component$$Type): void
public "paint"(renderer: $CompoundTag$$Type): void
public "playSound"(id: $SoundEvent$$Type): void
public "playSound"(id: $SoundEvent$$Type, volume: float, pitch: float): void
public "rayTrace"(): $RayTraceResultJS
public "rayTrace"(distance: double): $RayTraceResultJS
public "rayTrace"(distance: double, fluids: boolean): $RayTraceResultJS
public "removeAttribute"(attribute: $Attribute$$Type, identifier: string): void
public "revokeAdvancement"(id: $ResourceLocation$$Type): void
public "runCommand"(command: string): integer
public "runCommandSilent"(command: string): integer
public "sdl$getDynamicLightLevel"(): $Level
public "sdl$getDynamicLightX"(): double
public "sdl$getDynamicLightY"(): double
public "sdl$getDynamicLightZ"(): double
public "sdl$isDynamicLightEnabled"(): boolean
public "sdl$resetDynamicLight"(): void
public "sdl$setDynamicLightEnabled"(enabled: boolean): void
public "sdl$shouldUpdateDynamicLight"(): boolean
public "self"(): $ServerPlayer
public "self"(): $LivingEntity
public "sendData"(channel: string, data: $CompoundTag$$Type): void
public "sendData"(channel: string): void
public "sendInventoryUpdate"(): void
public "serializeNBT"(): $CompoundTag
public "setAttributeBaseValue"(attribute: $Attribute$$Type, value: double): void
public "setChestArmorItem"(item: $ItemStack$$Type): void
public "setCreativeMode"(mode: boolean): void
public "setDefaultMovementSpeed"(speed: double): void
public "setDefaultMovementSpeedMultiplier"(speed: double): void
public "setDynamicLightEnabled"(boolean0: boolean): void
public "setEquipment"(slot: $EquipmentSlot$$Type, item: $ItemStack$$Type): void
public "setFeetArmorItem"(item: $ItemStack$$Type): void
public "setFoodLevel"(foodLevel: integer): void
public "setHeadArmorItem"(item: $ItemStack$$Type): void
public "setHeldItem"(hand: $InteractionHand$$Type, item: $ItemStack$$Type): void
public "setHexereiDynamicLightEnabled"(boolean0: boolean): void
public "setLegsArmorItem"(item: $ItemStack$$Type): void
public "setMainHandItem"(item: $ItemStack$$Type): void
public "setMaxHealth"(hp: float): void
public "setMotionX"(x: double): void
public "setMotionY"(y: double): void
public "setMotionZ"(z: double): void
public "setMouseItem"(item: $ItemStack$$Type): void
public "setMovementSpeedAddition"(speed: double): void
public "setNbt"(nbt: $CompoundTag$$Type): void
public "setOffHandItem"(item: $ItemStack$$Type): void
public "setPosition"(block: $BlockContainerJS$$Type): void
public "setPosition"(x: double, y: double, z: double): void
public "setPositionAndRotation"(x: double, y: double, z: double, yaw: float, pitch: float): void
public "setRotation"(yaw: float, pitch: float): void
public "setSaturation"(saturation: float): void
public "setSelectedSlot"(index: integer): void
public "setSpawnLocation"(c: $BlockContainerJS$$Type): void
public "setStatusMessage"(message: $Component$$Type): void
public "setTotalMovementSpeedMultiplier"(speed: double): void
public "setX"(x: double): void
public "setXp"(xp: integer): void
public "setXpLevel"(l: integer): void
public "setY"(y: double): void
public "setZ"(z: double): void
public "shouldRiderSit"(): boolean
public "shouldUpdateFluidWhileBoating"(fluidState0: $FluidState$$Type, boat1: $Boat$$Type): boolean
public "sinkInFluid"(fluidType0: $FluidType$$Type): void
public "sodiumdynamiclights$scheduleTrackedChunksRebuild"(levelRenderer0: $LevelRenderer$$Type): void
public "sodiumdynamiclights$updateDynamicLight"(levelRenderer0: $LevelRenderer$$Type): boolean
public "spawn"(): void
public static "startTracking"(object0: any): void
public "startTracking"(): void
public "supplementaries$hasQuiver"(): boolean
public "swing"(): void
public "swing"(hand: $InteractionHand$$Type): void
public "teleportTo"(dimension: $ResourceLocation$$Type, x: double, y: double, z: double, yaw: float, pitch: float): void
public "tell"(message: $Component$$Type): void
public static "tickEntity"(entity: $LivingEntity$$Type): void
public "unlockAdvancement"(id: $ResourceLocation$$Type): void
public "wrap"(): $WeakReference<$Trackable>
get "onMinecartContraption"(): boolean
set "onMinecartContraption"(value: boolean)
get "placedTracks"(): boolean
set "placedTracks"(value: boolean)
get "animation"(): $AnimationApplier
get "block"(): $BlockContainerJS
get "blockReach"(): double
get "cachedFeetBlockState"(): $BlockState
get "chestArmorItem"(): $ItemStack
get "defaultMovementSpeed"(): double
get "displayName"(): $Component
get "entityReach"(): double
get "facing"(): $Direction
get "feetArmorItem"(): $ItemStack
get "foodLevel"(): integer
get "headArmorItem"(): $ItemStack
get "item"(): $ItemStack
get "legsArmorItem"(): $ItemStack
get "level"(): $Level
get "mainHandItem"(): $ItemStack
get "motionX"(): double
get "motionY"(): double
get "motionZ"(): double
get "mouseItem"(): $ItemStack
get "name"(): $Component
get "nbt"(): $CompoundTag
get "offHandItem"(): $ItemStack
get "openInventory"(): $AbstractContainerMenu
get "parts"(): $PartEntity<any>[]
get "passengers"(): $EntityArrayList
get "potionEffects"(): $EntityPotionEffectsJS
get "profile"(): $GameProfile
get "reachDistance"(): double
get "saturation"(): float
get "scriptType"(): $ScriptType
get "selectedSlot"(): integer
get "server"(): $MinecraftServer
get "spawnLocation"(): $BlockContainerJS
get "stats"(): $PlayerStatsJS
get "stepHeight"(): float
get "teamId"(): string
get "totalMovementSpeed"(): double
get "type"(): string
get "xp"(): integer
get "xpLevel"(): integer
get "ambientCreature"(): boolean
get "animal"(): boolean
get "dynamicLightEnabled"(): boolean
get "dynamicLightEnabledH"(): boolean
get "fake"(): boolean
get "frame"(): boolean
get "living"(): boolean
get "miningBlock"(): boolean
get "monster"(): boolean
get "multipartEntity"(): boolean
get "op"(): boolean
get "peacefulCreature"(): boolean
get "player"(): boolean
get "undead"(): boolean
get "waterCreature"(): boolean
set "chestArmorItem"(value: $ItemStack$$Type)
set "creativeMode"(value: boolean)
set "defaultMovementSpeed"(value: double)
set "defaultMovementSpeedMultiplier"(value: double)
set "dynamicLightEnabled"(value: boolean)
set "feetArmorItem"(value: $ItemStack$$Type)
set "foodLevel"(value: integer)
set "headArmorItem"(value: $ItemStack$$Type)
set "hexereiDynamicLightEnabled"(value: boolean)
set "legsArmorItem"(value: $ItemStack$$Type)
set "mainHandItem"(value: $ItemStack$$Type)
set "maxHealth"(value: float)
set "motionX"(value: double)
set "motionY"(value: double)
set "motionZ"(value: double)
set "mouseItem"(value: $ItemStack$$Type)
set "movementSpeedAddition"(value: double)
set "nbt"(value: $CompoundTag$$Type)
set "offHandItem"(value: $ItemStack$$Type)
set "position"(value: $BlockContainerJS$$Type)
set "saturation"(value: float)
set "selectedSlot"(value: integer)
set "spawnLocation"(value: $BlockContainerJS$$Type)
set "statusMessage"(value: $Component$$Type)
set "totalMovementSpeedMultiplier"(value: double)
set "x"(value: double)
set "xp"(value: integer)
set "xpLevel"(value: integer)
set "y"(value: double)
set "z"(value: double)
}
}

declare module "com.simibubi.create.foundation.blockEntity.SmartBlockEntity" {
import { $CachedRenderBBBlockEntity } from "com.simibubi.create.foundation.blockEntity.CachedRenderBBBlockEntity"
import { $BlockState$$Type } from "net.minecraft.world.level.block.state.BlockState"
import { $FriendlyByteBuf$$Type } from "net.minecraft.network.FriendlyByteBuf"
import { $LazyOptional } from "net.minecraftforge.common.util.LazyOptional"
import { $TrackedData, $TrackedData$$Type } from "dev.corgitaco.dataanchor.data.TrackedData"
import { $CreateAdvancement$$Type } from "com.simibubi.create.foundation.advancement.CreateAdvancement"
import { $PartialSafeNBT } from "com.simibubi.create.api.schematic.nbt.PartialSafeNBT"
import { $VirtualBlockEntity } from "net.createmod.ponder.api.VirtualBlockEntity"
import { $TrackedDataRegistry$$Type } from "dev.corgitaco.dataanchor.data.registry.TrackedDataRegistry"
import { $BehaviourType$$Type } from "com.simibubi.create.foundation.blockEntity.behaviour.BehaviourType"
import { $Collection } from "java.util.Collection"
import { $SpecialBlockEntityItemRequirement } from "com.simibubi.create.api.schematic.requirement.SpecialBlockEntityItemRequirement"
import { $ModelData } from "net.minecraftforge.client.model.data.ModelData"
import { $BlockEntityBehaviour, $BlockEntityBehaviour$$Type } from "com.simibubi.create.foundation.blockEntity.behaviour.BlockEntityBehaviour"
import { $Capability$$Type } from "net.minecraftforge.common.capabilities.Capability"
import { $IInteractionChecker } from "com.simibubi.create.foundation.utility.IInteractionChecker"
import { $Player$$Type } from "net.minecraft.world.entity.player.Player"
import { $Consumer$$Type } from "java.util.function.Consumer"
import { $List$$Type } from "java.util.List"
import { $CompoundTag$$Type } from "net.minecraft.nbt.CompoundTag"
import { $TrackedDataContainer } from "dev.corgitaco.dataanchor.data.TrackedDataContainer"
import { $BlockEntityType$$Type } from "net.minecraft.world.level.block.entity.BlockEntityType"
import { $BlockPos$$Type } from "net.minecraft.core.BlockPos"
import { $ItemRequirement } from "com.simibubi.create.content.schematics.requirement.ItemRequirement"

export class $SmartBlockEntity extends $CachedRenderBBBlockEntity implements $PartialSafeNBT, $IInteractionChecker, $SpecialBlockEntityItemRequirement, $VirtualBlockEntity {
constructor(blockEntityType0: $BlockEntityType$$Type<any>, blockPos1: $BlockPos$$Type, blockState2: $BlockState$$Type)

public "addBehaviours"(list0: $List$$Type<$BlockEntityBehaviour$$Type>): void
public "addBehavioursDeferred"(list0: $List$$Type<$BlockEntityBehaviour$$Type>): void
public "attachBehaviourLate"(blockEntityBehaviour0: $BlockEntityBehaviour$$Type): void
public "award"(createAdvancement0: $CreateAdvancement$$Type): void
public "awardIfNear"(createAdvancement0: $CreateAdvancement$$Type, int1: integer): void
public "canPlayerUse"(player0: $Player$$Type): boolean
public "deserializeNBT"(compoundTag0: $CompoundTag$$Type): void
public "destroy"(): void
public "forEachBehaviour"(consumer0: $Consumer$$Type<$BlockEntityBehaviour$$Type>): void
public "getAllBehaviours"(): $Collection<$BlockEntityBehaviour>
public "getBehaviour"<T extends $BlockEntityBehaviour>(behaviourType0: $BehaviourType$$Type<T>): T
public "getCapability"<T>(capability0: $Capability$$Type<T>): $LazyOptional<T>
public "getModelData"(): $ModelData
public "getRequiredItems"(blockState0: $BlockState$$Type): $ItemRequirement
public "hasCustomOutlineRendering"(player0: $Player$$Type): boolean
public "initialize"(): void
public "invalidate"(): void
public "isChunkUnloaded"(): boolean
public "isVirtual"(): boolean
public "lazyTick"(): void
public "m_183515_"(compoundTag0: $CompoundTag$$Type): void
public static "makeBasicContainer"<O, T extends $TrackedData<O>>(registry: $TrackedDataRegistry$$Type<O, T>, o: O, isClient: boolean): $TrackedDataContainer<O, T>
public static "makeBasicContainer"<O, T extends $TrackedData<O>>(registry: $TrackedDataRegistry$$Type<O, T>, o: O, isClient: boolean, lazyLoad: boolean): $TrackedDataContainer<O, T>
public "markVirtual"(): void
public "onLoad"(): void
public "refreshBlockState"(): void
public "registerAwardables"(list0: $List$$Type<$BlockEntityBehaviour$$Type>, ...createAdvancement1s: $CreateAdvancement$$Type[]): void
public "remove"(): void
public "removeBehaviour"(behaviourType0: $BehaviourType$$Type<any>): void
public "requestModelDataUpdate"(): void
public "sdl$isDynamicLightEnabled"(): boolean
public "sdl$setDynamicLightEnabled"(enabled: boolean): void
public "sendToMenu"(friendlyByteBuf0: $FriendlyByteBuf$$Type): void
public "setLazyTickRate"(int0: integer): void
public "tick"(): void
public "writeSafe"(compoundTag0: $CompoundTag$$Type): void
get "allBehaviours"(): $Collection<$BlockEntityBehaviour>
get "modelData"(): $ModelData
get "chunkUnloaded"(): boolean
get "virtual"(): boolean
set "lazyTickRate"(value: integer)
}
}

declare module "com.simibubi.create.foundation.blockEntity.behaviour.BehaviourType" {
import { $BlockEntityBehaviour } from "com.simibubi.create.foundation.blockEntity.behaviour.BlockEntityBehaviour"

export class $BehaviourType<T extends $BlockEntityBehaviour = $BlockEntityBehaviour> {
constructor(string0: string)
constructor()

public "getName"(): string
get "name"(): string
}
}

declare module "com.simibubi.create.foundation.mixin.accessor.ItemFrameAccessor" {
import { $ItemStack } from "net.minecraft.world.item.ItemStack"

export interface $ItemFrameAccessor {
"create$getFrameItemStack"(): $ItemStack
}

export namespace $ItemFrameAccessor {
const probejs$$marker: never
}
export abstract class $ItemFrameAccessor$$Static implements $ItemFrameAccessor {
}
}

declare module "com.simibubi.create.content.kinetics.KineticNetwork" {
import { $CallbackInfo$$Type } from "org.spongepowered.asm.mixin.injection.callback.CallbackInfo"
import { $Map, $Map$$Type } from "java.util.Map"
import { $FlywheelAccessibleKineticNetwork } from "com.kipti.bnb.mixin_accessor.FlywheelAccessibleKineticNetwork"
import { $KineticBlockEntity, $KineticBlockEntity$$Type } from "com.simibubi.create.content.kinetics.base.KineticBlockEntity"

export class $KineticNetwork implements $FlywheelAccessibleKineticNetwork {
constructor()

public "add"(kineticBlockEntity0: $KineticBlockEntity$$Type): void
public "addSilently"(kineticBlockEntity0: $KineticBlockEntity$$Type, float1: float, float2: float): void
public "bits_n_bobs$getFlywheelStressAbsoptionCapacity"(): float
public "bits_n_bobs$getFlywheelStressReleaseCapacity"(): float
public "bits_n_bobs$updateFlywheelStresses"(): void
public "calculateCapacity"(): float
public "calculateStress"(): float
public "getActualCapacityOf"(kineticBlockEntity0: $KineticBlockEntity$$Type): float
public "getActualStressOf"(kineticBlockEntity0: $KineticBlockEntity$$Type): float
public "getSize"(): integer
public "handler$bjd000$add"(kineticBlockEntity0: $KineticBlockEntity$$Type, callbackInfo1: $CallbackInfo$$Type): void
public "handler$bjd000$addSilently"(kineticBlockEntity0: $KineticBlockEntity$$Type, float1: float, float2: float, callbackInfo3: $CallbackInfo$$Type): void
public "handler$bjd000$bits_n_bobs$updateNetworkHead"(callbackInfo0: $CallbackInfo$$Type): void
public "handler$bjd000$remove"(kineticBlockEntity0: $KineticBlockEntity$$Type, callbackInfo1: $CallbackInfo$$Type): void
public "initFromTE"(float0: float, float1: float, int2: integer): void
public "remove"(kineticBlockEntity0: $KineticBlockEntity$$Type): void
public "sync"(): void
public "updateCapacity"(): void
public "updateCapacityFor"(kineticBlockEntity0: $KineticBlockEntity$$Type, float1: float): void
public "updateNetwork"(): void
public "updateStress"(): void
public "updateStressFor"(kineticBlockEntity0: $KineticBlockEntity$$Type, float1: float): void
get "id"(): long
set "id"(value: long)
get "initialized"(): boolean
set "initialized"(value: boolean)
get "members"(): $Map<$KineticBlockEntity, float>
set "members"(value: $Map$$Type<$KineticBlockEntity$$Type, float>)
get "sources"(): $Map<$KineticBlockEntity, float>
set "sources"(value: $Map$$Type<$KineticBlockEntity$$Type, float>)
get "size"(): integer
}
}

declare module "com.simibubi.create.foundation.gui.widget.ScrollInput" {
import { $Consumer$$Type } from "java.util.function.Consumer"
import { $Component } from "net.minecraft.network.chat.Component"
import { $GuiGraphics$$Type } from "net.minecraft.client.gui.GuiGraphics"
import { $ScrollValueBehaviour$StepContext, $ScrollValueBehaviour$StepContext$$Type } from "com.simibubi.create.foundation.blockEntity.behaviour.scrollValue.ScrollValueBehaviour$StepContext"
import { $Label$$Type } from "com.simibubi.create.foundation.gui.widget.Label"
import { $AbstractWidget$$Type } from "net.minecraft.client.gui.components.AbstractWidget"
import { $ComponentPath } from "net.minecraft.client.gui.ComponentPath"
import { $MutableComponent$$Type } from "net.minecraft.network.chat.MutableComponent"
import { $Function, $Function$$Type } from "java.util.function.Function"
import { $AbstractSimiWidget } from "net.createmod.catnip.gui.widget.AbstractSimiWidget"

export class $ScrollInput extends $AbstractSimiWidget {
constructor(int0: integer, int1: integer, int2: integer, int3: integer)

public "addHint"(mutableComponent0: $MutableComponent$$Type): $ScrollInput
public "calling"(consumer0: $Consumer$$Type<integer>): $ScrollInput
public "charTyped"(char0: character, int1: integer): boolean
public "format"(function0: $Function$$Type<integer, $Component>): $ScrollInput
public "getCurrentFocusPath"(): $ComponentPath
public "getOriginalMessageFancyMenu"(): $Component
public "getState"(): integer
public "inverted"(): $ScrollInput
public "keyPressed"(int0: integer, int1: integer, int2: integer): boolean
public "keyReleased"(int0: integer, int1: integer, int2: integer): boolean
public "mouseMoved"(double0: double, double1: double): void
public "mouseScrolled"(double0: double, double1: double, double2: double): boolean
public "onChanged"(): void
public "removeCallback"(): $ScrollInput
public "renderCustomBackgroundFancyMenu"(abstractWidget0: $AbstractWidget$$Type, guiGraphics1: $GuiGraphics$$Type, int2: integer, int3: integer, int4: integer, int5: integer): boolean
public "setPosition"(int0: integer, int1: integer): void
public "setState"(int0: integer): $ScrollInput
public "standardStep"(): $Function<$ScrollValueBehaviour$StepContext, integer>
public "stopCustomClickSoundFancyMenu"(): void
public "stopHoverSoundFancyMenu"(): void
public "tickFocusStateListenersFancyMenu"(boolean0: boolean): void
public "tickHoverOrFocusStateListenersFancyMenu"(boolean0: boolean): void
public "tickHoverStateListenersFancyMenu"(boolean0: boolean): void
public "titled"(mutableComponent0: $MutableComponent$$Type): $ScrollInput
public "withRange"(int0: integer, int1: integer): $ScrollInput
public "withShiftStep"(int0: integer): $ScrollInput
public "withStepFunction"(function0: $Function$$Type<$ScrollValueBehaviour$StepContext$$Type, integer>): $ScrollInput
public "writingTo"(label0: $Label$$Type): $ScrollInput
get "currentFocusPath"(): $ComponentPath
get "originalMessageFancyMenu"(): $Component
get "state"(): integer
set "state"(value: integer)
}
}

declare module "com.simibubi.create.content.trains.entity.Navigation" {
import { $AccessorNavigation } from "com.railwayteam.railways.mixin.AccessorNavigation"
import { $TravellingPoint$$Type } from "com.simibubi.create.content.trains.entity.TravellingPoint"
import { $DiscoveredPath, $DiscoveredPath$$Type } from "com.simibubi.create.content.trains.graph.DiscoveredPath"
import { $IWaypointableNavigation } from "com.railwayteam.railways.mixin_interfaces.IWaypointableNavigation"
import { $UUID, $UUID$$Type } from "java.util.UUID"
import { $Navigation$StationTest$$Type } from "com.simibubi.create.content.trains.entity.Navigation$StationTest"
import { $IGenerallySearchableNavigation } from "com.railwayteam.railways.mixin_interfaces.IGenerallySearchableNavigation"
import { $ArrayList$$Type } from "java.util.ArrayList"
import { $Pair, $Pair$$Type } from "net.createmod.catnip.data.Pair"
import { $CompoundTag, $CompoundTag$$Type } from "net.minecraft.nbt.CompoundTag"
import { $TravellingPoint$ITrackSelector } from "com.simibubi.create.content.trains.entity.TravellingPoint$ITrackSelector"
import { $IGenerallySearchableNavigation$PointTest$$Type } from "com.railwayteam.railways.mixin_interfaces.IGenerallySearchableNavigation$PointTest"
import { $TrackGraph$$Type } from "com.simibubi.create.content.trains.graph.TrackGraph"
import { $Train, $Train$$Type } from "com.simibubi.create.content.trains.entity.Train"
import { $GlobalStation, $GlobalStation$$Type } from "com.simibubi.create.content.trains.station.GlobalStation"
import { $IBufferBlockCheckableNavigation } from "com.railwayteam.railways.mixin_interfaces.IBufferBlockCheckableNavigation"
import { $Level$$Type } from "net.minecraft.world.level.Level"
import { $DimensionPalette$$Type } from "com.simibubi.create.content.trains.graph.DimensionPalette"

export class $Navigation implements $AccessorNavigation, $IGenerallySearchableNavigation, $IBufferBlockCheckableNavigation, $IWaypointableNavigation {
constructor(train0: $Train$$Type)

public "cancelNavigation"(): void
public "control"(travellingPoint0: $TravellingPoint$$Type): $TravellingPoint$ITrackSelector
public "controlSignalScout"(): $TravellingPoint$ITrackSelector
public "findNearestApproachable"(boolean0: boolean): $GlobalStation
public "findPathTo"(globalStation0: $GlobalStation$$Type, double1: double): $DiscoveredPath
public "findPathTo"(arrayList0: $ArrayList$$Type<$GlobalStation$$Type>, double1: double): $DiscoveredPath
public "isActive"(): boolean
public "railways$findNearestApproachableSwitch"(forward: boolean): $Pair
public "railways$isWaypointMode"(): boolean
public "railways$searchGeneral"(maxDistance: double, forward: boolean, pointTest: $IGenerallySearchableNavigation$PointTest$$Type): void
public "railways$searchGeneral"(maxDistance: double, maxCost: double, forward: boolean, pointTest: $IGenerallySearchableNavigation$PointTest$$Type): void
public "railways$updateControlsBlock"(forceBackwards: boolean): void
public "read"(compoundTag0: $CompoundTag$$Type, trackGraph1: $TrackGraph$$Type, dimensionPalette2: $DimensionPalette$$Type): void
public "search"(double0: double, boolean1: boolean, arrayList2: $ArrayList$$Type<$GlobalStation$$Type>, stationTest3: $Navigation$StationTest$$Type): void
public "search"(double0: double, double1: double, boolean2: boolean, arrayList3: $ArrayList$$Type<$GlobalStation$$Type>, stationTest4: $Navigation$StationTest$$Type): void
public "startNavigation"(discoveredPath0: $DiscoveredPath$$Type): double
public "tick"(level0: $Level$$Type): void
public "write"(dimensionPalette0: $DimensionPalette$$Type): $CompoundTag
get "announceArrival"(): boolean
set "announceArrival"(value: boolean)
get "destination"(): $GlobalStation
set "destination"(value: $GlobalStation$$Type)
get "destinationBehindTrain"(): boolean
set "destinationBehindTrain"(value: boolean)
get "distanceStartedAt"(): double
set "distanceStartedAt"(value: double)
get "distanceToDestination"(): double
set "distanceToDestination"(value: double)
get "distanceToSignal"(): double
set "distanceToSignal"(value: double)
get "ticksWaitingForSignal"(): integer
set "ticksWaitingForSignal"(value: integer)
get "train"(): $Train
set "train"(value: $Train$$Type)
get "waitingForSignal"(): $Pair<$UUID, boolean>
set "waitingForSignal"(value: $Pair$$Type<$UUID$$Type, boolean>)
get "active"(): boolean
}
}

declare module "com.simibubi.create.content.trains.observer.TrackObserver" {
import { $Train$$Type } from "com.simibubi.create.content.trains.entity.Train"
import { $UUID } from "java.util.UUID"
import { $ItemStack$$Type } from "net.minecraft.world.item.ItemStack"
import { $SingleBlockEntityEdgePoint } from "com.simibubi.create.content.trains.signal.SingleBlockEntityEdgePoint"
import { $Level$$Type } from "net.minecraft.world.level.Level"
import { $FilterItemStack } from "com.simibubi.create.content.logistics.filter.FilterItemStack"

export class $TrackObserver extends $SingleBlockEntityEdgePoint {
constructor()

public "getCurrentTrain"(): $UUID
public "getFilter"(): $FilterItemStack
public "isActivated"(): boolean
public "keepAlive"(train0: $Train$$Type): void
public "setFilterAndNotify"(level0: $Level$$Type, itemStack1: $ItemStack$$Type): void
get "currentTrain"(): $UUID
get "filter"(): $FilterItemStack
get "activated"(): boolean
}
}

declare module "com.simibubi.create.foundation.block.render.BlockDestructionProgressExtension" {
import { $BlockPos, $BlockPos$$Type } from "net.minecraft.core.BlockPos"
import { $Set, $Set$$Type } from "java.util.Set"

export interface $BlockDestructionProgressExtension {
"create$getExtraPositions"(): $Set<$BlockPos>
"create$setExtraPositions"(set0: $Set$$Type<$BlockPos$$Type>): void
}

export namespace $BlockDestructionProgressExtension {
const probejs$$marker: never
}
export abstract class $BlockDestructionProgressExtension$$Static implements $BlockDestructionProgressExtension {
}
}

declare module "com.simibubi.create.foundation.blockEntity.SyncedBlockEntity" {
import { $PacketDistributor$PacketTarget } from "net.minecraftforge.network.PacketDistributor$PacketTarget"
import { $LevelChunk } from "net.minecraft.world.level.chunk.LevelChunk"
import { $AABB } from "net.minecraft.world.phys.AABB"
import { $Connection$$Type } from "net.minecraft.network.Connection"
import { $BlockState$$Type } from "net.minecraft.world.level.block.state.BlockState"
import { $ClientboundBlockEntityDataPacket, $ClientboundBlockEntityDataPacket$$Type } from "net.minecraft.network.protocol.game.ClientboundBlockEntityDataPacket"
import { $ModelData } from "net.minecraftforge.client.model.data.ModelData"
import { $HolderGetter } from "net.minecraft.core.HolderGetter"
import { $BlockEntity } from "net.minecraft.world.level.block.entity.BlockEntity"
import { $Capability$$Type } from "net.minecraftforge.common.capabilities.Capability"
import { $LazyOptional } from "net.minecraftforge.common.util.LazyOptional"
import { $Player$$Type } from "net.minecraft.world.entity.player.Player"
import { $TrackedData, $TrackedData$$Type } from "dev.corgitaco.dataanchor.data.TrackedData"
import { $CompoundTag, $CompoundTag$$Type } from "net.minecraft.nbt.CompoundTag"
import { $TrackedDataContainer } from "dev.corgitaco.dataanchor.data.TrackedDataContainer"
import { $BlockEntityType$$Type } from "net.minecraft.world.level.block.entity.BlockEntityType"
import { $BlockPos$$Type } from "net.minecraft.core.BlockPos"
import { $Block } from "net.minecraft.world.level.block.Block"
import { $TrackedDataRegistry$$Type } from "dev.corgitaco.dataanchor.data.registry.TrackedDataRegistry"

export class $SyncedBlockEntity extends $BlockEntity {
constructor(blockEntityType0: $BlockEntityType$$Type<any>, blockPos1: $BlockPos$$Type, blockState2: $BlockState$$Type)

public "blockHolderGetter"(): $HolderGetter<$Block>
public "containedChunk"(): $LevelChunk
public "deserializeNBT"(compoundTag0: $CompoundTag$$Type): void
public "getCapability"<T>(capability0: $Capability$$Type<T>): $LazyOptional<T>
public "getModelData"(): $ModelData
public "getRenderBoundingBox"(): $AABB
public "getUpdatePacket"(): $ClientboundBlockEntityDataPacket
public "handleUpdateTag"(compoundTag0: $CompoundTag$$Type): void
public "hasCustomOutlineRendering"(player0: $Player$$Type): boolean
public static "makeBasicContainer"<O, T extends $TrackedData<O>>(registry: $TrackedDataRegistry$$Type<O, T>, o: O, isClient: boolean): $TrackedDataContainer<O, T>
public static "makeBasicContainer"<O, T extends $TrackedData<O>>(registry: $TrackedDataRegistry$$Type<O, T>, o: O, isClient: boolean, lazyLoad: boolean): $TrackedDataContainer<O, T>
public "notifyUpdate"(): void
public "onDataPacket"(connection0: $Connection$$Type, clientboundBlockEntityDataPacket1: $ClientboundBlockEntityDataPacket$$Type): void
public "onLoad"(): void
public "packetTarget"(): $PacketDistributor$PacketTarget
public "readClient"(compoundTag0: $CompoundTag$$Type): void
public "requestModelDataUpdate"(): void
public "sdl$isDynamicLightEnabled"(): boolean
public "sdl$setDynamicLightEnabled"(enabled: boolean): void
public "sendData"(): void
public "writeClient"(compoundTag0: $CompoundTag$$Type): $CompoundTag
get "modelData"(): $ModelData
get "renderBoundingBox"(): $AABB
get "updatePacket"(): $ClientboundBlockEntityDataPacket
}
}

declare module "com.simibubi.create.content.trains.graph.TrackGraphLocation" {
import { $TrackNodeLocation, $TrackNodeLocation$$Type } from "com.simibubi.create.content.trains.graph.TrackNodeLocation"
import { $Couple, $Couple$$Type } from "net.createmod.catnip.data.Couple"
import { $TrackGraph, $TrackGraph$$Type } from "com.simibubi.create.content.trains.graph.TrackGraph"

export class $TrackGraphLocation {
constructor()

get "edge"(): $Couple<$TrackNodeLocation>
set "edge"(value: $Couple$$Type<$TrackNodeLocation$$Type>)
get "graph"(): $TrackGraph
set "graph"(value: $TrackGraph$$Type)
get "position"(): double
set "position"(value: double)
}
}

declare module "com.simibubi.create.content.decoration.slidingDoor.DoorControlBehaviour" {
import { $BehaviourType } from "com.simibubi.create.foundation.blockEntity.behaviour.BehaviourType"
import { $SmartBlockEntity$$Type } from "com.simibubi.create.foundation.blockEntity.SmartBlockEntity"
import { $DoorControl, $DoorControl$$Type } from "com.simibubi.create.content.decoration.slidingDoor.DoorControl"
import { $BlockEntityBehaviour } from "com.simibubi.create.foundation.blockEntity.behaviour.BlockEntityBehaviour"

export class $DoorControlBehaviour extends $BlockEntityBehaviour {
static readonly "TYPE": $BehaviourType<$DoorControlBehaviour>

constructor(smartBlockEntity0: $SmartBlockEntity$$Type)

public "set"(doorControl0: $DoorControl$$Type): void
get "mode"(): $DoorControl
set "mode"(value: $DoorControl$$Type)
}
}

declare module "com.simibubi.create.content.decoration.slidingDoor.DoorControl" {
import { $Consumer$$Type } from "java.util.function.Consumer"
import { $Pair } from "net.createmod.catnip.data.Pair"
import { $Enum } from "java.lang.Enum"
import { $Label } from "com.simibubi.create.foundation.gui.widget.Label"
import { $Direction$$Type } from "net.minecraft.core.Direction"
import { $ScrollInput } from "com.simibubi.create.foundation.gui.widget.ScrollInput"

export class $DoorControl extends $Enum<$DoorControl> {
static readonly "ALL": $DoorControl
static readonly "EAST": $DoorControl
static readonly "NONE": $DoorControl
static readonly "NORTH": $DoorControl
static readonly "SOUTH": $DoorControl
static readonly "WEST": $DoorControl

/** Client only, do not use in server scripts */
public static "createWidget"(int0: integer, int1: integer, consumer2: $Consumer$$Type<$DoorControl$$Type>, doorControl3: $DoorControl$$Type): $Pair<$ScrollInput, $Label>
public "matches"(direction0: $Direction$$Type): boolean
public static "valueOf"(string0: string): $DoorControl
public static "values"(): $DoorControl[]
}
}

declare module "com.simibubi.create.foundation.mixin.accessor.SuspiciousStewItemAccessor" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $SuspiciousStewItemAccessor {
}

export namespace $SuspiciousStewItemAccessor {
const probejs$$marker: never
}
export abstract class $SuspiciousStewItemAccessor$$Static implements $SuspiciousStewItemAccessor {
}
}

declare module "com.simibubi.create.content.kinetics.deployer.DeployerBlockEntity" {
import { $IFluidHandler$$Type } from "net.minecraftforge.fluids.capability.IFluidHandler"
import { $Component$$Type } from "net.minecraft.network.chat.Component"
import { $Direction$$Type } from "net.minecraft.core.Direction"
import { $BlockState$$Type } from "net.minecraft.world.level.block.state.BlockState"
import { $PartialModel } from "dev.engine_room.flywheel.lib.model.baked.PartialModel"
import { $KineticBlockEntity } from "com.simibubi.create.content.kinetics.base.KineticBlockEntity"
import { $ModelData } from "net.minecraftforge.client.model.data.ModelData"
import { $Capability$$Type } from "net.minecraftforge.common.capabilities.Capability"
import { $LazyOptional, $LazyOptional$$Type } from "net.minecraftforge.common.util.LazyOptional"
import { $Player$$Type } from "net.minecraft.world.entity.player.Player"
import { $TrackedData, $TrackedData$$Type } from "dev.corgitaco.dataanchor.data.TrackedData"
import { $List$$Type } from "java.util.List"
import { $CompoundTag$$Type } from "net.minecraft.nbt.CompoundTag"
import { $Container } from "net.minecraft.world.Container"
import { $TrackedDataContainer } from "dev.corgitaco.dataanchor.data.TrackedDataContainer"
import { $BeltProcessingBehaviour, $BeltProcessingBehaviour$$Type } from "com.simibubi.create.content.kinetics.belt.behaviour.BeltProcessingBehaviour"
import { $BlockEntityType$$Type } from "net.minecraft.world.level.block.entity.BlockEntityType"
import { $BlockPos$$Type } from "net.minecraft.core.BlockPos"
import { $Recipe } from "net.minecraft.world.item.crafting.Recipe"
import { $ItemStack, $ItemStack$$Type } from "net.minecraft.world.item.ItemStack"
import { $DeployerFakePlayer } from "com.simibubi.create.content.kinetics.deployer.DeployerFakePlayer"
import { $TrackedDataRegistry$$Type } from "dev.corgitaco.dataanchor.data.registry.TrackedDataRegistry"

export class $DeployerBlockEntity extends $KineticBlockEntity {
constructor(blockEntityType0: $BlockEntityType$$Type<any>, blockPos1: $BlockPos$$Type, blockState2: $BlockState$$Type)

public "changeMode"(): void
public "containedFluidTooltip"(list0: $List$$Type<$Component$$Type>, boolean1: boolean, lazyOptional2: $LazyOptional$$Type<$IFluidHandler$$Type>): boolean
public "deserializeNBT"(compoundTag0: $CompoundTag$$Type): void
public "discardPlayer"(): void
public "getCapability"<T>(capability0: $Capability$$Type<T>, direction1: $Direction$$Type): $LazyOptional<T>
public "getCapability"<T>(capability0: $Capability$$Type<T>): $LazyOptional<T>
/** Client only, do not use in server scripts */
public "getHandOffset"(float0: float): float
/** Client only, do not use in server scripts */
public "getHandPose"(): $PartialModel
public "getIcon"(boolean0: boolean): $ItemStack
public "getModelData"(): $ModelData
public "getPlayer"(): $DeployerFakePlayer
public "getRecipe"(itemStack0: $ItemStack$$Type): $Recipe<$Container>
public "hasCustomOutlineRendering"(player0: $Player$$Type): boolean
public static "makeBasicContainer"<O, T extends $TrackedData<O>>(registry: $TrackedDataRegistry$$Type<O, T>, o: O, isClient: boolean): $TrackedDataContainer<O, T>
public static "makeBasicContainer"<O, T extends $TrackedData<O>>(registry: $TrackedDataRegistry$$Type<O, T>, o: O, isClient: boolean, lazyLoad: boolean): $TrackedDataContainer<O, T>
public "onLoad"(): void
public "redstoneUpdate"(): void
public "sdl$isDynamicLightEnabled"(): boolean
public "sdl$setDynamicLightEnabled"(enabled: boolean): void
public "setAnimatedOffset"(float0: float): void
public "startFistBump"(direction0: $Direction$$Type): boolean
public "triggerFistBump"(): void
public "write"(compoundTag0: $CompoundTag$$Type, boolean1: boolean): void
get "processingBehaviour"(): $BeltProcessingBehaviour
set "processingBehaviour"(value: $BeltProcessingBehaviour$$Type)
get "handPose"(): $PartialModel
get "modelData"(): $ModelData
get "player"(): $DeployerFakePlayer
set "animatedOffset"(value: float)
}
}

declare module "com.simibubi.create.foundation.block.IHaveBigOutline" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $IHaveBigOutline {
}

export namespace $IHaveBigOutline {
const probejs$$marker: never
}
export abstract class $IHaveBigOutline$$Static implements $IHaveBigOutline {
}
}

declare module "com.simibubi.create.content.equipment.wrench.IWrenchable" {
import { $BlockPos$$Type } from "net.minecraft.core.BlockPos"
import { $Direction$$Type } from "net.minecraft.core.Direction"
import { $BlockState, $BlockState$$Type } from "net.minecraft.world.level.block.state.BlockState"
import { $InteractionResult } from "net.minecraft.world.InteractionResult"
import { $UseOnContext$$Type } from "net.minecraft.world.item.context.UseOnContext"
import { $Level$$Type } from "net.minecraft.world.level.Level"

export interface $IWrenchable {
"getRotatedBlockState"(blockState0: $BlockState$$Type, direction1: $Direction$$Type): $BlockState
"onSneakWrenched"(blockState0: $BlockState$$Type, useOnContext1: $UseOnContext$$Type): $InteractionResult
"onWrenched"(blockState0: $BlockState$$Type, useOnContext1: $UseOnContext$$Type): $InteractionResult
"updateAfterWrenched"(blockState0: $BlockState$$Type, useOnContext1: $UseOnContext$$Type): $BlockState
}

export namespace $IWrenchable {
function playRemoveSound(level0: $Level$$Type, blockPos1: $BlockPos$$Type): void
function playRotateSound(level0: $Level$$Type, blockPos1: $BlockPos$$Type): void
}
export abstract class $IWrenchable$$Static implements $IWrenchable {
static "playRemoveSound"(level0: $Level$$Type, blockPos1: $BlockPos$$Type): void
static "playRotateSound"(level0: $Level$$Type, blockPos1: $BlockPos$$Type): void
}
}

declare module "com.simibubi.create.content.kinetics.belt.behaviour.TransportedItemStackHandlerBehaviour$PositionGetter" {
import { $Vec3 } from "net.minecraft.world.phys.Vec3"
import { $TransportedItemStack$$Type } from "com.simibubi.create.content.kinetics.belt.transport.TransportedItemStack"

export interface $TransportedItemStackHandlerBehaviour$PositionGetter {
"getWorldPositionVector"(transportedItemStack0: $TransportedItemStack$$Type): $Vec3
}

export namespace $TransportedItemStackHandlerBehaviour$PositionGetter {
const probejs$$marker: never
}
export abstract class $TransportedItemStackHandlerBehaviour$PositionGetter$$Static implements $TransportedItemStackHandlerBehaviour$PositionGetter {
}
}

declare module "com.simibubi.create.content.kinetics.belt.behaviour.TransportedItemStackHandlerBehaviour$TransportedResult" {
import { $List, $List$$Type } from "java.util.List"
import { $ItemStack$$Type } from "net.minecraft.world.item.ItemStack"
import { $TransportedItemStack, $TransportedItemStack$$Type } from "com.simibubi.create.content.kinetics.belt.transport.TransportedItemStack"

export class $TransportedItemStackHandlerBehaviour$TransportedResult {
public static "convertTo"(list0: $List$$Type<$TransportedItemStack$$Type>): $TransportedItemStackHandlerBehaviour$TransportedResult
public static "convertTo"(transportedItemStack0: $TransportedItemStack$$Type): $TransportedItemStackHandlerBehaviour$TransportedResult
public static "convertToAndLeaveHeld"(list0: $List$$Type<$TransportedItemStack$$Type>, transportedItemStack1: $TransportedItemStack$$Type): $TransportedItemStackHandlerBehaviour$TransportedResult
public "didntChangeFrom"(itemStack0: $ItemStack$$Type): boolean
public static "doNothing"(): $TransportedItemStackHandlerBehaviour$TransportedResult
public "doesNothing"(): boolean
public "getHeldOutput"(): $TransportedItemStack
public "getOutputs"(): $List<$TransportedItemStack>
public "hasHeldOutput"(): boolean
public static "removeItem"(): $TransportedItemStackHandlerBehaviour$TransportedResult
get "heldOutput"(): $TransportedItemStack
get "outputs"(): $List<$TransportedItemStack>
}
}

declare module "com.simibubi.create.foundation.fluid.CombinedTankWrapper" {
import { $IFluidHandler, $IFluidHandler$$Type } from "net.minecraftforge.fluids.capability.IFluidHandler"
import { $FluidStack, $FluidStack$$Type } from "net.minecraftforge.fluids.FluidStack"
import { $IFluidHandler$FluidAction$$Type } from "net.minecraftforge.fluids.capability.IFluidHandler$FluidAction"

export class $CombinedTankWrapper implements $IFluidHandler {
constructor(...iFluidHandler0s: $IFluidHandler$$Type[])

public "drain"(fluidStack0: $FluidStack$$Type, fluidAction1: $IFluidHandler$FluidAction$$Type): $FluidStack
public "drain"(int0: integer, fluidAction1: $IFluidHandler$FluidAction$$Type): $FluidStack
public "enforceVariety"(): $CombinedTankWrapper
public "fill"(fluidStack0: $FluidStack$$Type, fluidAction1: $IFluidHandler$FluidAction$$Type): integer
public "getFluidInTank"(int0: integer): $FluidStack
public "getTankCapacity"(int0: integer): integer
public "getTanks"(): integer
public "isFluidValid"(int0: integer, fluidStack1: $FluidStack$$Type): boolean
get "tanks"(): integer
}
}

declare module "com.simibubi.create.foundation.mixin.accessor.BlockLootSubProviderAccessor" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $BlockLootSubProviderAccessor {
}

export namespace $BlockLootSubProviderAccessor {
const probejs$$marker: never
}
export abstract class $BlockLootSubProviderAccessor$$Static implements $BlockLootSubProviderAccessor {
}
}

declare module "com.simibubi.create.content.trains.graph.TrackNodeLocation" {
import { $CompoundTag, $CompoundTag$$Type } from "net.minecraft.nbt.CompoundTag"
import { $Vec3, $Vec3$$Type } from "net.minecraft.world.phys.Vec3"
import { $BlockPos } from "net.minecraft.core.BlockPos"
import { $Vec3i } from "net.minecraft.core.Vec3i"
import { $Collection } from "java.util.Collection"
import { $Level, $Level$$Type } from "net.minecraft.world.level.Level"
import { $FriendlyByteBuf$$Type } from "net.minecraft.network.FriendlyByteBuf"
import { $ResourceKey, $ResourceKey$$Type } from "net.minecraft.resources.ResourceKey"
import { $DimensionPalette$$Type } from "com.simibubi.create.content.trains.graph.DimensionPalette"

export class $TrackNodeLocation extends $Vec3i {
constructor(vec30: $Vec3$$Type)
constructor(double0: double, double1: double, double2: double)

public "allAdjacent"(): $Collection<$BlockPos>
public "equalsIgnoreDim"(object0: any): boolean
public "getDimension"(): $ResourceKey<$Level>
public "getLocation"(): $Vec3
public "in"(resourceKey0: $ResourceKey$$Type<$Level>): $TrackNodeLocation
public "in"(level0: $Level$$Type): $TrackNodeLocation
public static "read"(compoundTag0: $CompoundTag$$Type, dimensionPalette1: $DimensionPalette$$Type): $TrackNodeLocation
public static "receive"(friendlyByteBuf0: $FriendlyByteBuf$$Type, dimensionPalette1: $DimensionPalette$$Type): $TrackNodeLocation
public "send"(friendlyByteBuf0: $FriendlyByteBuf$$Type, dimensionPalette1: $DimensionPalette$$Type): void
public "write"(dimensionPalette0: $DimensionPalette$$Type): $CompoundTag
get "dimension"(): $ResourceKey<$Level>
set "dimension"(value: $ResourceKey$$Type<$Level$$Type>)
get "yOffsetPixels"(): integer
set "yOffsetPixels"(value: integer)
get "location"(): $Vec3
}
}

declare module "com.simibubi.create.content.trains.display.GlobalTrainDisplayData$TrainDeparturePrediction" {
import { $Train, $Train$$Type } from "com.simibubi.create.content.trains.entity.Train"
import { $Comparable } from "java.lang.Comparable"
import { $MutableComponent, $MutableComponent$$Type } from "net.minecraft.network.chat.MutableComponent"

export class $GlobalTrainDisplayData$TrainDeparturePrediction implements $Comparable<$GlobalTrainDisplayData$TrainDeparturePrediction> {
constructor(train0: $Train$$Type, int1: integer, mutableComponent2: $MutableComponent$$Type, string3: string)

public "compareTo"(trainDeparturePrediction0: $GlobalTrainDisplayData$TrainDeparturePrediction$$Type): integer
get "destination"(): string
set "destination"(value: string)
get "scheduleTitle"(): $MutableComponent
set "scheduleTitle"(value: $MutableComponent$$Type)
get "ticks"(): integer
set "ticks"(value: integer)
get "train"(): $Train
set "train"(value: $Train$$Type)
}
}

declare module "com.simibubi.create.content.trains.graph.TrackGraphBounds" {
import { $List, $List$$Type } from "java.util.List"
import { $AABB, $AABB$$Type } from "net.minecraft.world.phys.AABB"
import { $TrackGraph$$Type } from "com.simibubi.create.content.trains.graph.TrackGraph"
import { $BezierConnection, $BezierConnection$$Type } from "com.simibubi.create.content.trains.track.BezierConnection"
import { $Level } from "net.minecraft.world.level.Level"
import { $ResourceKey$$Type } from "net.minecraft.resources.ResourceKey"

export class $TrackGraphBounds {
constructor(trackGraph0: $TrackGraph$$Type, resourceKey1: $ResourceKey$$Type<$Level>)

get "beziers"(): $List<$BezierConnection>
set "beziers"(value: $List$$Type<$BezierConnection$$Type>)
get "box"(): $AABB
set "box"(value: $AABB$$Type)
}
}

declare module "com.simibubi.create.content.trains.station.StationMapData" {
import { $StationBlockEntity$$Type } from "com.simibubi.create.content.trains.station.StationBlockEntity"
import { $BlockPos$$Type } from "net.minecraft.core.BlockPos"
import { $LevelAccessor$$Type } from "net.minecraft.world.level.LevelAccessor"
import { $StationMarker$$Type } from "com.simibubi.create.content.trains.station.StationMarker"

export interface $StationMapData {
"addStationMarker"(stationMarker0: $StationMarker$$Type): void
"toggleStation"(levelAccessor0: $LevelAccessor$$Type, blockPos1: $BlockPos$$Type, stationBlockEntity2: $StationBlockEntity$$Type): boolean
}

export namespace $StationMapData {
const probejs$$marker: never
}
export abstract class $StationMapData$$Static implements $StationMapData {
}
}

declare module "com.simibubi.create.foundation.utility.IInteractionChecker" {
import { $Player$$Type } from "net.minecraft.world.entity.player.Player"

export interface $IInteractionChecker {
"canPlayerUse"(player0: $Player$$Type): boolean
}

export namespace $IInteractionChecker {
const probejs$$marker: never
}
export abstract class $IInteractionChecker$$Static implements $IInteractionChecker {
}
}

declare module "com.simibubi.create.content.contraptions.minecart.capability.MinecartController" {
import { $CompoundTag, $CompoundTag$$Type } from "net.minecraft.nbt.CompoundTag"
import { $AbstractMinecart, $AbstractMinecart$$Type } from "net.minecraft.world.entity.vehicle.AbstractMinecart"
import { $UUID, $UUID$$Type } from "java.util.UUID"
import { $INBTSerializable } from "net.minecraftforge.common.util.INBTSerializable"

export class $MinecartController implements $INBTSerializable<$CompoundTag> {
static "EMPTY": $MinecartController

constructor(abstractMinecart0: $AbstractMinecart$$Type)

public "cart"(): $AbstractMinecart
public "coupleWith"(boolean0: boolean, uUID1: $UUID$$Type, float2: float, boolean3: boolean): void
public "decouple"(): void
public "deserializeNBT"(compoundTag0: $CompoundTag$$Type): void
public static "empty"(): $MinecartController
public "getCoupledCart"(boolean0: boolean): $UUID
public "getCouplingLength"(boolean0: boolean): float
public "hasContraptionCoupling"(boolean0: boolean): boolean
public "isConnectedToCoupling"(): boolean
public "isCoupledThroughContraption"(): boolean
public "isFullyCoupled"(): boolean
public "isLeadingCoupling"(): boolean
public "isPresent"(): boolean
public "isStalled"(): boolean
public "prepareForCoupling"(boolean0: boolean): void
public "removeConnection"(boolean0: boolean): void
public "sendData"(): void
public "setStalledExternally"(boolean0: boolean): void
public "tick"(): void
get "connectedToCoupling"(): boolean
get "coupledThroughContraption"(): boolean
get "fullyCoupled"(): boolean
get "leadingCoupling"(): boolean
get "present"(): boolean
get "stalled"(): boolean
set "stalledExternally"(value: boolean)
}
}

declare module "com.simibubi.create.content.trains.schedule.ScheduleRuntime" {
import { $Schedule, $Schedule$$Type } from "com.simibubi.create.content.trains.schedule.Schedule"
import { $DiscoveredPath } from "com.simibubi.create.content.trains.graph.DiscoveredPath"
import { $Collection } from "java.util.Collection"
import { $AccessorScheduleRuntime } from "com.railwayteam.railways.mixin.AccessorScheduleRuntime"
import { $MutableComponent } from "net.minecraft.network.chat.MutableComponent"
import { $List, $List$$Type } from "java.util.List"
import { $ScheduleRuntime$State, $ScheduleRuntime$State$$Type } from "com.simibubi.create.content.trains.schedule.ScheduleRuntime$State"
import { $CompoundTag, $CompoundTag$$Type } from "net.minecraft.nbt.CompoundTag"
import { $Train, $Train$$Type } from "com.simibubi.create.content.trains.entity.Train"
import { $ItemStack } from "net.minecraft.world.item.ItemStack"
import { $GlobalTrainDisplayData$TrainDeparturePrediction } from "com.simibubi.create.content.trains.display.GlobalTrainDisplayData$TrainDeparturePrediction"
import { $Level$$Type } from "net.minecraft.world.level.Level"

export class $ScheduleRuntime implements $AccessorScheduleRuntime {
constructor(train0: $Train$$Type)

public "destinationReached"(): void
public "discardSchedule"(): void
public "getSchedule"(): $Schedule
public "getWaitingStatus"(level0: $Level$$Type): $MutableComponent
public "read"(compoundTag0: $CompoundTag$$Type): void
public "returnSchedule"(): $ItemStack
public "setSchedule"(schedule0: $Schedule$$Type, boolean1: boolean): void
public "setSchedulePresentClientside"(boolean0: boolean): void
public "startCooldown"(): void
public "startCurrentInstruction"(level0: $Level$$Type): $DiscoveredPath
public "submitPredictions"(): $Collection<$GlobalTrainDisplayData$TrainDeparturePrediction>
public "tick"(level0: $Level$$Type): void
public "tickConditions"(level0: $Level$$Type): void
public "transitInterrupted"(): void
public "write"(): $CompoundTag
get "completed"(): boolean
set "completed"(value: boolean)
get "conditionContext"(): $List<$CompoundTag>
set "conditionContext"(value: $List$$Type<$CompoundTag$$Type>)
get "conditionProgress"(): $List<integer>
set "conditionProgress"(value: $List$$Type<integer>)
get "currentEntry"(): integer
set "currentEntry"(value: integer)
get "currentTitle"(): string
set "currentTitle"(value: string)
get "displayLinkUpdateRequested"(): boolean
set "displayLinkUpdateRequested"(value: boolean)
get "isAutoSchedule"(): boolean
set "isAutoSchedule"(value: boolean)
get "paused"(): boolean
set "paused"(value: boolean)
get "predictionTicks"(): $List<integer>
set "predictionTicks"(value: $List$$Type<integer>)
get "schedule"(): $Schedule
set "schedule"(value: $Schedule$$Type)
get "state"(): $ScheduleRuntime$State
set "state"(value: $ScheduleRuntime$State$$Type)
get "ticksInTransit"(): integer
set "ticksInTransit"(value: integer)
get "train"(): $Train
set "train"(value: $Train$$Type)
set "schedulePresentClientside"(value: boolean)
}
}

declare module "com.simibubi.create.content.trains.signal.TrackEdgePoint" {
import { $Couple, $Couple$$Type } from "net.createmod.catnip.data.Couple"
import { $UUID, $UUID$$Type } from "java.util.UUID"
import { $BlockEntity$$Type } from "net.minecraft.world.level.block.entity.BlockEntity"
import { $FriendlyByteBuf$$Type } from "net.minecraft.network.FriendlyByteBuf"
import { $TrackNodeLocation, $TrackNodeLocation$$Type } from "com.simibubi.create.content.trains.graph.TrackNodeLocation"
import { $CompoundTag$$Type } from "net.minecraft.nbt.CompoundTag"
import { $TrackEdge$$Type } from "com.simibubi.create.content.trains.graph.TrackEdge"
import { $BlockPos$$Type } from "net.minecraft.core.BlockPos"
import { $LevelAccessor$$Type } from "net.minecraft.world.level.LevelAccessor"
import { $TrackGraph$$Type } from "com.simibubi.create.content.trains.graph.TrackGraph"
import { $TrackNode$$Type } from "com.simibubi.create.content.trains.graph.TrackNode"
import { $DimensionPalette$$Type } from "com.simibubi.create.content.trains.graph.DimensionPalette"
import { $EdgePointType, $EdgePointType$$Type } from "com.simibubi.create.content.trains.graph.EdgePointType"

export class $TrackEdgePoint {
constructor()

public "blockEntityAdded"(blockEntity0: $BlockEntity$$Type, boolean1: boolean): void
public "blockEntityRemoved"(blockPos0: $BlockPos$$Type, boolean1: boolean): void
public "canCoexistWith"(edgePointType0: $EdgePointType$$Type<any>, boolean1: boolean): boolean
public "canMerge"(): boolean
public "canNavigateVia"(trackNode0: $TrackNode$$Type): boolean
public "getId"(): $UUID
public "getLocationOn"(trackEdge0: $TrackEdge$$Type): double
public "getType"(): $EdgePointType<any>
public "invalidate"(levelAccessor0: $LevelAccessor$$Type): void
public "isPrimary"(trackNode0: $TrackNode$$Type): boolean
public "onRemoved"(trackGraph0: $TrackGraph$$Type): void
public "read"(friendlyByteBuf0: $FriendlyByteBuf$$Type, dimensionPalette1: $DimensionPalette$$Type): void
public "read"(compoundTag0: $CompoundTag$$Type, boolean1: boolean, dimensionPalette2: $DimensionPalette$$Type): void
public "setId"(uUID0: $UUID$$Type): void
public "setLocation"(couple0: $Couple$$Type<$TrackNodeLocation$$Type>, double1: double): void
public "setType"(edgePointType0: $EdgePointType$$Type<any>): void
public "tick"(trackGraph0: $TrackGraph$$Type, boolean1: boolean): void
public "write"(friendlyByteBuf0: $FriendlyByteBuf$$Type, dimensionPalette1: $DimensionPalette$$Type): void
public "write"(compoundTag0: $CompoundTag$$Type, dimensionPalette1: $DimensionPalette$$Type): void
get "edgeLocation"(): $Couple<$TrackNodeLocation>
set "edgeLocation"(value: $Couple$$Type<$TrackNodeLocation$$Type>)
get "id"(): $UUID
set "id"(value: $UUID$$Type)
get "position"(): double
set "position"(value: double)
get "type"(): $EdgePointType<any>
set "type"(value: $EdgePointType$$Type<any>)
}
}

declare module "com.simibubi.create.api.contraption.storage.item.MountedItemStorageType" {
import { $BlockState$$Type } from "net.minecraft.world.level.block.state.BlockState"
import { $BlockBuilder } from "com.tterrag.registrate.builders.BlockBuilder"
import { $SimpleRegistry } from "com.simibubi.create.api.registry.SimpleRegistry"
import { $BlockEntity$$Type } from "net.minecraft.world.level.block.entity.BlockEntity"
import { $Holder$Reference } from "net.minecraft.core.Holder$Reference"
import { $TagKey$$Type } from "net.minecraft.tags.TagKey"
import { $Codec } from "com.mojang.serialization.Codec"
import { $NonNullUnaryOperator } from "com.tterrag.registrate.util.nullness.NonNullUnaryOperator"
import { $BlockPos$$Type } from "net.minecraft.core.BlockPos"
import { $RegistryEntry$$Type } from "com.tterrag.registrate.util.entry.RegistryEntry"
import { $Block, $Block$$Type } from "net.minecraft.world.level.block.Block"
import { $MountedItemStorage } from "com.simibubi.create.api.contraption.storage.item.MountedItemStorage"
import { $Level$$Type } from "net.minecraft.world.level.Level"

export class $MountedItemStorageType<T extends $MountedItemStorage = $MountedItemStorage> {
static readonly "CODEC": $Codec<$MountedItemStorageType<any>>
static readonly "REGISTRY": $SimpleRegistry<$Block, $MountedItemStorageType<any>>
readonly "codec": $Codec<T>
readonly "holder": $Holder$Reference<$MountedItemStorageType<any>>

public "is"(tagKey0: $TagKey$$Type<$MountedItemStorageType$$Type<any>>): boolean
public "mount"(level0: $Level$$Type, blockState1: $BlockState$$Type, blockPos2: $BlockPos$$Type, blockEntity3: $BlockEntity$$Type): T
public static "mountedItemStorage"<B extends $Block, P>(registryEntry0: $RegistryEntry$$Type<$MountedItemStorageType$$Type<any>>): $NonNullUnaryOperator<$BlockBuilder<B, P>>
}
}

declare module "com.simibubi.create.content.contraptions.minecart.TrainCargoManager" {
import { $MountedStorageManager } from "com.simibubi.create.content.contraptions.MountedStorageManager"

export class $TrainCargoManager extends $MountedStorageManager {
constructor()

public "getTicksSinceLastExchange"(): integer
public "getVersion"(): integer
public "resetIdleCargoTracker"(): void
public "tickIdleCargoTracker"(): void
get "ticksSinceLastExchange"(): integer
get "version"(): integer
}
}

declare module "com.simibubi.create.foundation.gui.ModularGuiLine" {
import { $Consumer$$Type } from "java.util.function.Consumer"
import { $GuiEventListener, $GuiEventListener$$Type } from "net.minecraft.client.gui.components.events.GuiEventListener"
import { $Pair$$Type } from "net.createmod.catnip.data.Pair"
import { $CompoundTag$$Type } from "net.minecraft.nbt.CompoundTag"
import { $GuiGraphics$$Type } from "net.minecraft.client.gui.GuiGraphics"
import { $NarratableEntry, $NarratableEntry$$Type } from "net.minecraft.client.gui.narration.NarratableEntry"
import { $Renderable, $Renderable$$Type } from "net.minecraft.client.gui.components.Renderable"
import { $AbstractWidget$$Type } from "net.minecraft.client.gui.components.AbstractWidget"

export class $ModularGuiLine {
constructor()

public "add"(pair0: $Pair$$Type<$AbstractWidget$$Type, string>): void
public "clear"(): void
public "forEach"(consumer0: $Consumer$$Type<$GuiEventListener$$Type>): void
public "loadValues"<T extends ($GuiEventListener & $Renderable & $NarratableEntry)>(compoundTag0: $CompoundTag$$Type, consumer1: $Consumer$$Type<T>, consumer2: $Consumer$$Type<T>): void
public "renderWidgetBG"(int0: integer, guiGraphics1: $GuiGraphics$$Type): void
public "saveValues"(compoundTag0: $CompoundTag$$Type): void
}
}

declare module "com.simibubi.create.api.behaviour.interaction.MovingInteractionBehaviour" {
import { $Entity$$Type } from "net.minecraft.world.entity.Entity"
import { $AbstractContraptionEntity$$Type } from "com.simibubi.create.content.contraptions.AbstractContraptionEntity"
import { $BlockPos$$Type } from "net.minecraft.core.BlockPos"
import { $SimpleRegistry } from "com.simibubi.create.api.registry.SimpleRegistry"
import { $Block, $Block$$Type } from "net.minecraft.world.level.block.Block"
import { $InteractionHand$$Type } from "net.minecraft.world.InteractionHand"
import { $NonNullConsumer } from "com.tterrag.registrate.util.nullness.NonNullConsumer"
import { $Player$$Type } from "net.minecraft.world.entity.player.Player"

export class $MovingInteractionBehaviour {
static readonly "REGISTRY": $SimpleRegistry<$Block, $MovingInteractionBehaviour>

constructor()

public "handleEntityCollision"(entity0: $Entity$$Type, blockPos1: $BlockPos$$Type, abstractContraptionEntity2: $AbstractContraptionEntity$$Type): void
public "handlePlayerInteraction"(player0: $Player$$Type, interactionHand1: $InteractionHand$$Type, blockPos2: $BlockPos$$Type, abstractContraptionEntity3: $AbstractContraptionEntity$$Type): boolean
public static "interactionBehaviour"<B extends $Block>(movingInteractionBehaviour0: $MovingInteractionBehaviour$$Type): $NonNullConsumer<B>
}
}

declare module "com.simibubi.create.foundation.mixin.accessor.AgeableListModelAccessor" {
import { $Iterable } from "java.lang.Iterable"
import { $ModelPart } from "net.minecraft.client.model.geom.ModelPart"

export interface $AgeableListModelAccessor {
"create$callBodyParts"(): $Iterable<$ModelPart>
"create$callHeadParts"(): $Iterable<$ModelPart>
}

export namespace $AgeableListModelAccessor {
const probejs$$marker: never
}
export abstract class $AgeableListModelAccessor$$Static implements $AgeableListModelAccessor {
}
}

declare module "com.simibubi.create.content.kinetics.belt.behaviour.TransportedItemStackHandlerBehaviour$ProcessingCallback" {
import { $Function$$Type } from "java.util.function.Function"
import { $TransportedItemStack$$Type } from "com.simibubi.create.content.kinetics.belt.transport.TransportedItemStack"
import { $TransportedItemStackHandlerBehaviour$TransportedResult } from "com.simibubi.create.content.kinetics.belt.behaviour.TransportedItemStackHandlerBehaviour$TransportedResult"

export interface $TransportedItemStackHandlerBehaviour$ProcessingCallback {
"applyToAllItems"(float0: float, function1: $Function$$Type<$TransportedItemStack$$Type, $TransportedItemStackHandlerBehaviour$TransportedResult>): void
}

export namespace $TransportedItemStackHandlerBehaviour$ProcessingCallback {
const probejs$$marker: never
}
export abstract class $TransportedItemStackHandlerBehaviour$ProcessingCallback$$Static implements $TransportedItemStackHandlerBehaviour$ProcessingCallback {
}
}

declare module "com.simibubi.create.content.kinetics.belt.behaviour.TransportedItemStackHandlerBehaviour" {
import { $Vec3 } from "net.minecraft.world.phys.Vec3"
import { $BehaviourType } from "com.simibubi.create.foundation.blockEntity.behaviour.BehaviourType"
import { $SmartBlockEntity$$Type } from "com.simibubi.create.foundation.blockEntity.SmartBlockEntity"
import { $TransportedItemStackHandlerBehaviour$PositionGetter$$Type } from "com.simibubi.create.content.kinetics.belt.behaviour.TransportedItemStackHandlerBehaviour$PositionGetter"
import { $TransportedItemStackHandlerBehaviour$ProcessingCallback$$Type } from "com.simibubi.create.content.kinetics.belt.behaviour.TransportedItemStackHandlerBehaviour$ProcessingCallback"
import { $TransportedItemStack$$Type } from "com.simibubi.create.content.kinetics.belt.transport.TransportedItemStack"
import { $Function$$Type } from "java.util.function.Function"
import { $TransportedItemStackHandlerBehaviour$TransportedResult, $TransportedItemStackHandlerBehaviour$TransportedResult$$Type } from "com.simibubi.create.content.kinetics.belt.behaviour.TransportedItemStackHandlerBehaviour$TransportedResult"
import { $BlockEntityBehaviour } from "com.simibubi.create.foundation.blockEntity.behaviour.BlockEntityBehaviour"

export class $TransportedItemStackHandlerBehaviour extends $BlockEntityBehaviour {
static readonly "TYPE": $BehaviourType<$TransportedItemStackHandlerBehaviour>

constructor(smartBlockEntity0: $SmartBlockEntity$$Type, processingCallback1: $TransportedItemStackHandlerBehaviour$ProcessingCallback$$Type)

public "getWorldPositionOf"(transportedItemStack0: $TransportedItemStack$$Type): $Vec3
public "handleCenteredProcessingOnAllItems"(float0: float, function1: $Function$$Type<$TransportedItemStack$$Type, $TransportedItemStackHandlerBehaviour$TransportedResult>): void
public "handleProcessingOnAllItems"(function0: $Function$$Type<$TransportedItemStack$$Type, $TransportedItemStackHandlerBehaviour$TransportedResult>): void
public "handleProcessingOnItem"(transportedItemStack0: $TransportedItemStack$$Type, transportedResult1: $TransportedItemStackHandlerBehaviour$TransportedResult$$Type): void
public "withStackPlacement"(positionGetter0: $TransportedItemStackHandlerBehaviour$PositionGetter$$Type): $TransportedItemStackHandlerBehaviour
}
}

declare module "com.simibubi.create.content.trains.entity.CarriageSounds" {
import { $CarriageContraptionEntity$$Type } from "com.simibubi.create.content.trains.entity.CarriageContraptionEntity"
import { $Vec3$$Type } from "net.minecraft.world.phys.Vec3"
import { $Carriage$DimensionalCarriageEntity$$Type } from "com.simibubi.create.content.trains.entity.Carriage$DimensionalCarriageEntity"

export class $CarriageSounds {
constructor(carriageContraptionEntity0: $CarriageContraptionEntity$$Type)

public "finalizeSharedVolume"(float0: float): void
public "stop"(): void
public "submitSharedSoundVolume"(vec30: $Vec3$$Type, float1: float): void
public "tick"(dimensionalCarriageEntity0: $Carriage$DimensionalCarriageEntity$$Type): void
}
}

declare module "com.simibubi.create.api.schematic.nbt.PartialSafeNBT" {
import { $CompoundTag$$Type } from "net.minecraft.nbt.CompoundTag"

export interface $PartialSafeNBT {
"writeSafe"(compoundTag0: $CompoundTag$$Type): void
}

export namespace $PartialSafeNBT {
const probejs$$marker: never
}
export abstract class $PartialSafeNBT$$Static implements $PartialSafeNBT {
}
}

declare module "com.simibubi.create.content.kinetics.transmission.sequencer.SequencedGearshiftBlockEntity$SequenceContext" {
import { $CompoundTag, $CompoundTag$$Type } from "net.minecraft.nbt.CompoundTag"
import { $SequencerInstructions, $SequencerInstructions$$Type } from "com.simibubi.create.content.kinetics.transmission.sequencer.SequencerInstructions"
import { $Record } from "java.lang.Record"

export class $SequencedGearshiftBlockEntity$SequenceContext extends $Record {
constructor(instruction: $SequencerInstructions$$Type, relativeValue: double)

public static "fromGearshift"(sequencerInstructions0: $SequencerInstructions$$Type, double1: double, int2: integer): $SequencedGearshiftBlockEntity$SequenceContext
public static "fromNBT"(compoundTag0: $CompoundTag$$Type): $SequencedGearshiftBlockEntity$SequenceContext
public "getEffectiveValue"(double0: double): double
public "instruction"(): $SequencerInstructions
public "relativeValue"(): double
public "serializeNBT"(): $CompoundTag
}
}

declare module "com.simibubi.create.content.schematics.requirement.ItemRequirement$StackRequirement" {
import { $ItemStack, $ItemStack$$Type } from "net.minecraft.world.item.ItemStack"
import { $ItemRequirement$ItemUseType, $ItemRequirement$ItemUseType$$Type } from "com.simibubi.create.content.schematics.requirement.ItemRequirement$ItemUseType"

export class $ItemRequirement$StackRequirement {
readonly "stack": $ItemStack
readonly "usage": $ItemRequirement$ItemUseType

constructor(itemStack0: $ItemStack$$Type, itemUseType1: $ItemRequirement$ItemUseType$$Type)

public "matches"(itemStack0: $ItemStack$$Type): boolean
}
}

declare module "com.simibubi.create.content.contraptions.render.ContraptionMatrices" {
import { $Entity$$Type } from "net.minecraft.world.entity.Entity"
import { $Matrix4f, $Matrix4f$$Type } from "org.joml.Matrix4f"
import { $PoseStack, $PoseStack$$Type } from "com.mojang.blaze3d.vertex.PoseStack"

export class $ContraptionMatrices {
constructor()

public static "clearStack"(poseStack0: $PoseStack$$Type): void
public "getLight"(): $Matrix4f
public "getModel"(): $PoseStack
public "getModelViewProjection"(): $PoseStack
public "getViewProjection"(): $PoseStack
public "getWorld"(): $Matrix4f
public static "transform"(poseStack0: $PoseStack$$Type, poseStack1: $PoseStack$$Type): void
public static "translateToEntity"(matrix4f0: $Matrix4f$$Type, entity1: $Entity$$Type, float2: float): void
get "light"(): $Matrix4f
get "model"(): $PoseStack
get "modelViewProjection"(): $PoseStack
get "viewProjection"(): $PoseStack
get "world"(): $Matrix4f
}
}

declare module "com.simibubi.create.api.equipment.goggles.IHaveHoveringInformation" {
import { $List$$Type } from "java.util.List"
import { $Component$$Type } from "net.minecraft.network.chat.Component"
import { $IHaveCustomOverlayIcon } from "com.simibubi.create.api.equipment.goggles.IHaveCustomOverlayIcon"
import { $ItemStack } from "net.minecraft.world.item.ItemStack"

export interface $IHaveHoveringInformation extends $IHaveCustomOverlayIcon {
"addToTooltip"(list0: $List$$Type<$Component$$Type>, boolean1: boolean): boolean
"getIcon"(boolean0: boolean): $ItemStack
}

export namespace $IHaveHoveringInformation {
const probejs$$marker: never
}
export abstract class $IHaveHoveringInformation$$Static implements $IHaveHoveringInformation {
}
}

declare module "com.simibubi.create.content.logistics.packagePort.PackagePortTarget" {
import { $CompoundTag, $CompoundTag$$Type } from "net.minecraft.nbt.CompoundTag"
import { $BlockPos, $BlockPos$$Type } from "net.minecraft.core.BlockPos"
import { $Vec3 } from "net.minecraft.world.phys.Vec3"
import { $PackagePortBlockEntity$$Type } from "com.simibubi.create.content.logistics.packagePort.PackagePortBlockEntity"
import { $LevelAccessor$$Type } from "net.minecraft.world.level.LevelAccessor"
import { $ItemStack, $ItemStack$$Type } from "net.minecraft.world.item.ItemStack"
import { $BlockEntity, $BlockEntity$$Type } from "net.minecraft.world.level.block.entity.BlockEntity"

export class $PackagePortTarget {
constructor(string0: string, blockPos1: $BlockPos$$Type)

public "be"(levelAccessor0: $LevelAccessor$$Type, blockPos1: $BlockPos$$Type): $BlockEntity
public "canSupport"(blockEntity0: $BlockEntity$$Type): boolean
public "depositImmediately"(): boolean
public "deregister"(packagePortBlockEntity0: $PackagePortBlockEntity$$Type, levelAccessor1: $LevelAccessor$$Type, blockPos2: $BlockPos$$Type): void
public "export"(levelAccessor0: $LevelAccessor$$Type, blockPos1: $BlockPos$$Type, itemStack2: $ItemStack$$Type, boolean3: boolean): boolean
public "getExactTargetLocation"(packagePortBlockEntity0: $PackagePortBlockEntity$$Type, levelAccessor1: $LevelAccessor$$Type, blockPos2: $BlockPos$$Type): $Vec3
public "getIcon"(): $ItemStack
public static "read"(compoundTag0: $CompoundTag$$Type): $PackagePortTarget
public "register"(packagePortBlockEntity0: $PackagePortBlockEntity$$Type, levelAccessor1: $LevelAccessor$$Type, blockPos2: $BlockPos$$Type): void
public "setup"(packagePortBlockEntity0: $PackagePortBlockEntity$$Type, levelAccessor1: $LevelAccessor$$Type, blockPos2: $BlockPos$$Type): void
public "write"(): $CompoundTag
get "relativePos"(): $BlockPos
set "relativePos"(value: $BlockPos$$Type)
get "icon"(): $ItemStack
}
}

declare module "com.simibubi.create.foundation.mixin.accessor.GuiAccessor" {
import { $SubtitleOverlay } from "net.minecraft.client.gui.components.SubtitleOverlay"

export interface $GuiAccessor {
"create$getSubtitleOverlay"(): $SubtitleOverlay
}

export namespace $GuiAccessor {
const probejs$$marker: never
}
export abstract class $GuiAccessor$$Static implements $GuiAccessor {
}
}

declare module "com.simibubi.create.foundation.mixin.accessor.DispenserBlockAccessor" {
import { $DispenseItemBehavior } from "net.minecraft.core.dispenser.DispenseItemBehavior"
import { $ItemStack$$Type } from "net.minecraft.world.item.ItemStack"

export interface $DispenserBlockAccessor {
"create$callGetDispenseMethod"(itemStack0: $ItemStack$$Type): $DispenseItemBehavior
}

export namespace $DispenserBlockAccessor {
const probejs$$marker: never
}
export abstract class $DispenserBlockAccessor$$Static implements $DispenserBlockAccessor {
}
}

declare module "com.simibubi.create.content.trains.track.TrackTargetingBehaviour" {
import { $ITrackBlock } from "com.simibubi.create.content.trains.track.ITrackBlock"
import { $IPreAssembleCallback } from "com.railwayteam.railways.mixin_interfaces.IPreAssembleCallback"
import { $BehaviourType } from "com.simibubi.create.foundation.blockEntity.behaviour.BehaviourType"
import { $BezierTrackPointLocation$$Type } from "com.simibubi.create.content.trains.track.BezierTrackPointLocation"
import { $SmartBlockEntity$$Type } from "com.simibubi.create.foundation.blockEntity.SmartBlockEntity"
import { $BlockState } from "net.minecraft.world.level.block.state.BlockState"
import { $Direction$AxisDirection$$Type } from "net.minecraft.core.Direction$AxisDirection"
import { $BlockEntity$$Type } from "net.minecraft.world.level.block.entity.BlockEntity"
import { $BlockEntityBehaviour } from "com.simibubi.create.foundation.blockEntity.behaviour.BlockEntityBehaviour"
import { $TrackEdgePoint } from "com.simibubi.create.content.trains.signal.TrackEdgePoint"
import { $PoseStack$$Type } from "com.mojang.blaze3d.vertex.PoseStack"
import { $TrackTargetingBehaviour$RenderedTrackOverlayType$$Type } from "com.simibubi.create.content.trains.track.TrackTargetingBehaviour$RenderedTrackOverlayType"
import { $CompoundTag$$Type } from "net.minecraft.nbt.CompoundTag"
import { $TrackGraphLocation } from "com.simibubi.create.content.trains.graph.TrackGraphLocation"
import { $BlockPos, $BlockPos$$Type } from "net.minecraft.core.BlockPos"
import { $StructureTransform$$Type } from "com.simibubi.create.content.contraptions.StructureTransform"
import { $LevelAccessor$$Type } from "net.minecraft.world.level.LevelAccessor"
import { $AccessorTrackTargetingBehavior } from "com.railwayteam.railways.mixin.AccessorTrackTargetingBehavior"
import { $MultiBufferSource$$Type } from "net.minecraft.client.renderer.MultiBufferSource"
import { $EdgePointType$$Type } from "com.simibubi.create.content.trains.graph.EdgePointType"

export class $TrackTargetingBehaviour<T extends $TrackEdgePoint = $TrackEdgePoint> extends $BlockEntityBehaviour implements $AccessorTrackTargetingBehavior, $IPreAssembleCallback {
static readonly "TYPE": $BehaviourType<$TrackTargetingBehaviour<any>>

constructor(smartBlockEntity0: $SmartBlockEntity$$Type, edgePointType1: $EdgePointType$$Type<T>)

public "createEdgePoint"(): T
public "determineGraphLocation"(): $TrackGraphLocation
public "getEdgePoint"(): T
public "getGlobalPosition"(): $BlockPos
public "getPositionForMapMarker"(): $BlockPos
public "getTrack"(): $ITrackBlock
public "getTrackBlockState"(): $BlockState
public "hasValidTrack"(): boolean
public "invalidateEdgePoint"(compoundTag0: $CompoundTag$$Type): void
public "isOnCurve"(): boolean
public "railways$preAssemble"(): void
/** Client only, do not use in server scripts */
public static "render"(levelAccessor0: $LevelAccessor$$Type, blockPos1: $BlockPos$$Type, axisDirection2: $Direction$AxisDirection$$Type, bezierTrackPointLocation3: $BezierTrackPointLocation$$Type, poseStack4: $PoseStack$$Type, multiBufferSource5: $MultiBufferSource$$Type, int6: integer, int7: integer, renderedTrackOverlayType8: $TrackTargetingBehaviour$RenderedTrackOverlayType$$Type, float9: float): void
public "transform"(blockEntity0: $BlockEntity$$Type, structureTransform1: $StructureTransform$$Type): void
get "edgePoint"(): T
get "globalPosition"(): $BlockPos
get "positionForMapMarker"(): $BlockPos
get "track"(): $ITrackBlock
get "trackBlockState"(): $BlockState
get "onCurve"(): boolean
}
}

declare module "com.simibubi.create.content.contraptions.StructureTransform" {
import { $Rotation, $Rotation$$Type } from "net.minecraft.world.level.block.Rotation"
import { $Direction$Axis, $Direction$Axis$$Type } from "net.minecraft.core.Direction$Axis"
import { $BlockPos, $BlockPos$$Type } from "net.minecraft.core.BlockPos"
import { $Mirror, $Mirror$$Type } from "net.minecraft.world.level.block.Mirror"
import { $Vec3, $Vec3$$Type } from "net.minecraft.world.phys.Vec3"
import { $Direction, $Direction$$Type } from "net.minecraft.core.Direction"
import { $BlockState, $BlockState$$Type } from "net.minecraft.world.level.block.state.BlockState"
import { $BlockEntity$$Type } from "net.minecraft.world.level.block.entity.BlockEntity"
import { $FriendlyByteBuf$$Type } from "net.minecraft.network.FriendlyByteBuf"

export class $StructureTransform {
constructor(blockPos0: $BlockPos$$Type, axis1: $Direction$Axis$$Type, rotation2: $Rotation$$Type, mirror3: $Mirror$$Type)
constructor(blockPos0: $BlockPos$$Type, float1: float, float2: float, float3: float)

public "apply"(vec30: $Vec3$$Type): $Vec3
public "apply"(blockPos0: $BlockPos$$Type): $BlockPos
public "apply"(blockEntity0: $BlockEntity$$Type): void
public "apply"(blockState0: $BlockState$$Type): $BlockState
public "applyWithoutOffset"(vec30: $Vec3$$Type): $Vec3
public "applyWithoutOffset"(blockPos0: $BlockPos$$Type): $BlockPos
public "applyWithoutOffsetUncentered"(vec30: $Vec3$$Type): $Vec3
public static "fromBuffer"(friendlyByteBuf0: $FriendlyByteBuf$$Type): $StructureTransform
public "mirrorFacing"(direction0: $Direction$$Type): $Direction
public "rotateAxis"(axis0: $Direction$Axis$$Type): $Direction$Axis
public "rotateFacing"(direction0: $Direction$$Type): $Direction
public "unapply"(blockPos0: $BlockPos$$Type): $BlockPos
public "unapplyWithoutOffset"(blockPos0: $BlockPos$$Type): $BlockPos
public "unapplyWithoutOffset"(vec30: $Vec3$$Type): $Vec3
public "writeToBuffer"(friendlyByteBuf0: $FriendlyByteBuf$$Type): void
get "angle"(): integer
set "angle"(value: integer)
get "mirror"(): $Mirror
set "mirror"(value: $Mirror$$Type)
get "offset"(): $BlockPos
set "offset"(value: $BlockPos$$Type)
get "rotation"(): $Rotation
set "rotation"(value: $Rotation$$Type)
get "rotationAxis"(): $Direction$Axis
set "rotationAxis"(value: $Direction$Axis$$Type)
}
}

declare module "com.simibubi.create.foundation.gui.ModularGuiLineBuilder" {
import { $Font$$Type } from "net.minecraft.client.gui.Font"
import { $SelectionScrollInput$$Type } from "com.simibubi.create.foundation.gui.widget.SelectionScrollInput"
import { $TooltipArea$$Type } from "com.simibubi.create.foundation.gui.widget.TooltipArea"
import { $Label$$Type } from "com.simibubi.create.foundation.gui.widget.Label"
import { $EditBox$$Type } from "net.minecraft.client.gui.components.EditBox"
import { $BiConsumer$$Type } from "java.util.function.BiConsumer"
import { $ModularGuiLine$$Type } from "com.simibubi.create.foundation.gui.ModularGuiLine"
import { $ScrollInput$$Type } from "com.simibubi.create.foundation.gui.widget.ScrollInput"

export class $ModularGuiLineBuilder {
constructor(font0: $Font$$Type, modularGuiLine1: $ModularGuiLine$$Type, int2: integer, int3: integer)

public "addIntegerTextInput"(int0: integer, int1: integer, biConsumer2: $BiConsumer$$Type<$EditBox$$Type, $TooltipArea$$Type>, string3: string): $ModularGuiLineBuilder
public "addScrollInput"(int0: integer, int1: integer, biConsumer2: $BiConsumer$$Type<$ScrollInput$$Type, $Label$$Type>, string3: string): $ModularGuiLineBuilder
public "addSelectionScrollInput"(int0: integer, int1: integer, biConsumer2: $BiConsumer$$Type<$SelectionScrollInput$$Type, $Label$$Type>, string3: string): $ModularGuiLineBuilder
public "addTextInput"(int0: integer, int1: integer, biConsumer2: $BiConsumer$$Type<$EditBox$$Type, $TooltipArea$$Type>, string3: string): $ModularGuiLineBuilder
public "customArea"(int0: integer, int1: integer): $ModularGuiLineBuilder
public "speechBubble"(): $ModularGuiLineBuilder
}
}

declare module "com.simibubi.create.content.contraptions.MountedStorageManager" {
import { $CombinedInvWrapper } from "net.minecraftforge.items.wrapper.CombinedInvWrapper"
import { $ImmutableMap } from "com.google.common.collect.ImmutableMap"
import { $IFuelInventory } from "com.railwayteam.railways.mixin_interfaces.IFuelInventory"
import { $BlockState$$Type } from "net.minecraft.world.level.block.state.BlockState"
import { $BlockEntity$$Type } from "net.minecraft.world.level.block.entity.BlockEntity"
import { $MountedItemStorageWrapper } from "com.simibubi.create.api.contraption.storage.item.MountedItemStorageWrapper"
import { $Player$$Type } from "net.minecraft.world.entity.player.Player"
import { $AbstractContraptionEntity$$Type } from "com.simibubi.create.content.contraptions.AbstractContraptionEntity"
import { $CompoundTag$$Type } from "net.minecraft.nbt.CompoundTag"
import { $StructureTemplate$StructureBlockInfo$$Type } from "net.minecraft.world.level.levelgen.structure.templatesystem.StructureTemplate$StructureBlockInfo"
import { $BlockPos, $BlockPos$$Type } from "net.minecraft.core.BlockPos"
import { $MountedFluidStorageWrapper } from "com.simibubi.create.api.contraption.storage.fluid.MountedFluidStorageWrapper"
import { $IItemHandlerModifiable$$Type } from "net.minecraftforge.items.IItemHandlerModifiable"
import { $MountedItemStorage } from "com.simibubi.create.api.contraption.storage.item.MountedItemStorage"
import { $Contraption$$Type } from "com.simibubi.create.content.contraptions.Contraption"
import { $Level$$Type } from "net.minecraft.world.level.Level"
import { $MountedStorageSyncPacket$$Type } from "com.simibubi.create.content.contraptions.MountedStorageSyncPacket"

export class $MountedStorageManager implements $IFuelInventory {
constructor()

public "addBlock"(level0: $Level$$Type, blockState1: $BlockState$$Type, blockPos2: $BlockPos$$Type, blockPos3: $BlockPos$$Type, blockEntity4: $BlockEntity$$Type): void
public "attachExternal"(iItemHandlerModifiable0: $IItemHandlerModifiable$$Type): void
public "getAllItemStorages"(): $ImmutableMap<$BlockPos, $MountedItemStorage>
public "getAllItems"(): $CombinedInvWrapper
public "getFluids"(): $MountedFluidStorageWrapper
public "getFuelItems"(): $MountedItemStorageWrapper
public "getMountedItems"(): $MountedItemStorageWrapper
public "handlePlayerStorageInteraction"(contraption0: $Contraption$$Type, player1: $Player$$Type, blockPos2: $BlockPos$$Type): boolean
public "handleSync"(mountedStorageSyncPacket0: $MountedStorageSyncPacket$$Type, abstractContraptionEntity1: $AbstractContraptionEntity$$Type): void
public "initialize"(): void
public "railways$getFluidFuels"(): $MountedFluidStorageWrapper
public "read"(compoundTag0: $CompoundTag$$Type, boolean1: boolean, contraption2: $Contraption$$Type): void
public "tick"(abstractContraptionEntity0: $AbstractContraptionEntity$$Type): void
public "unmount"(level0: $Level$$Type, structureBlockInfo1: $StructureTemplate$StructureBlockInfo$$Type, blockPos2: $BlockPos$$Type, blockEntity3: $BlockEntity$$Type): void
public "write"(compoundTag0: $CompoundTag$$Type, boolean1: boolean): void
get "allItemStorages"(): $ImmutableMap<$BlockPos, $MountedItemStorage>
get "allItems"(): $CombinedInvWrapper
get "fluids"(): $MountedFluidStorageWrapper
get "fuelItems"(): $MountedItemStorageWrapper
get "mountedItems"(): $MountedItemStorageWrapper
}
}

declare module "com.simibubi.create.content.trains.track.TrackBlock" {
import { $ResourceLocation } from "net.minecraft.resources.ResourceLocation"
import { $LivingEntity$$Type } from "net.minecraft.world.entity.LivingEntity"
import { $TrackNodeLocation$DiscoveredLocation, $TrackNodeLocation$DiscoveredLocation$$Type } from "com.simibubi.create.content.trains.graph.TrackNodeLocation$DiscoveredLocation"
import { $Direction, $Direction$$Type } from "net.minecraft.core.Direction"
import { $BiFunction$$Type } from "java.util.function.BiFunction"
import { $Item$$Type } from "net.minecraft.world.item.Item"
import { $PartialModel } from "dev.engine_room.flywheel.lib.model.baked.PartialModel"
import { $Random$$Type } from "java.util.Random"
import { $Direction$AxisDirection, $Direction$AxisDirection$$Type } from "net.minecraft.core.Direction$AxisDirection"
import { $SpawnPlacements$Type$$Type } from "net.minecraft.world.entity.SpawnPlacements$Type"
import { $TrackShape } from "com.simibubi.create.content.trains.track.TrackShape"
import { $BlockBehaviour$Properties$$Type } from "net.minecraft.world.level.block.state.BlockBehaviour$Properties"
import { $BooleanProperty } from "net.minecraft.world.level.block.state.properties.BooleanProperty"
import { $BlockGetter$$Type } from "net.minecraft.world.level.BlockGetter"
import { $MapColor, $MapColor$$Type } from "net.minecraft.world.level.material.MapColor"
import { $TrackTargetingBehaviour$RenderedTrackOverlayType$$Type } from "com.simibubi.create.content.trains.track.TrackTargetingBehaviour$RenderedTrackOverlayType"
import { $Rotation$$Type } from "net.minecraft.world.level.block.Rotation"
import { $Holder } from "net.minecraft.core.Holder"
import { $BlockPathTypes, $BlockPathTypes$$Type } from "net.minecraft.world.level.pathfinder.BlockPathTypes"
import { $Collection, $Collection$$Type } from "java.util.Collection"
import { $BezierTrackPointLocation$$Type } from "com.simibubi.create.content.trains.track.BezierTrackPointLocation"
import { $BezierConnection$$Type } from "com.simibubi.create.content.trains.track.BezierConnection"
import { $RandomSource$$Type } from "net.minecraft.util.RandomSource"
import { $InteractionResult } from "net.minecraft.world.InteractionResult"
import { $LevelReader$$Type } from "net.minecraft.world.level.LevelReader"
import { $BlockEntity, $BlockEntity$$Type } from "net.minecraft.world.level.block.entity.BlockEntity"
import { $TreeConfiguration$$Type } from "net.minecraft.world.level.levelgen.feature.configurations.TreeConfiguration"
import { $SoundType } from "net.minecraft.world.level.block.SoundType"
import { $Player$$Type } from "net.minecraft.world.entity.player.Player"
import { $FeatureFlagSet$$Type } from "net.minecraft.world.flag.FeatureFlagSet"
import { $List } from "java.util.List"
import { $BlockPos$$Type } from "net.minecraft.core.BlockPos"
import { $BlockEntityType, $BlockEntityType$$Type } from "net.minecraft.world.level.block.entity.BlockEntityType"
import { $SoundEvent } from "net.minecraft.sounds.SoundEvent"
import { $SignalGetter$$Type } from "net.minecraft.world.level.SignalGetter"
import { $FluidState, $FluidState$$Type } from "net.minecraft.world.level.material.FluidState"
import { $GameEventListener } from "net.minecraft.world.level.gameevent.GameEventListener"
import { $Optional } from "java.util.Optional"
import { $LevelAccessor$$Type } from "net.minecraft.world.level.LevelAccessor"
import { $BlockPlaceContext$$Type } from "net.minecraft.world.item.context.BlockPlaceContext"
import { $ItemStack, $ItemStack$$Type } from "net.minecraft.world.item.ItemStack"
import { $Level, $Level$$Type } from "net.minecraft.world.level.Level"
import { $BlockEntityTicker } from "net.minecraft.world.level.block.entity.BlockEntityTicker"
import { $IHaveBigOutline } from "com.simibubi.create.foundation.block.IHaveBigOutline"
import { $EntityType$$Type } from "net.minecraft.world.entity.EntityType"
import { $BlockState, $BlockState$$Type } from "net.minecraft.world.level.block.state.BlockState"
import { $Affine, $Affine$$Type } from "dev.engine_room.flywheel.lib.transform.Affine"
import { $ServerLevel$$Type } from "net.minecraft.server.level.ServerLevel"
import { $Function$$Type } from "java.util.function.Function"
import { $PoseStack$$Type } from "com.mojang.blaze3d.vertex.PoseStack"
import { $TrackNodeLocation$$Type } from "com.simibubi.create.content.trains.graph.TrackNodeLocation"
import { $PushReaction } from "net.minecraft.world.level.material.PushReaction"
import { $Pair } from "net.createmod.catnip.data.Pair"
import { $ToolAction$$Type } from "net.minecraftforge.common.ToolAction"
import { $EnumProperty } from "net.minecraft.world.level.block.state.properties.EnumProperty"
import { $BiConsumer$$Type } from "java.util.function.BiConsumer"
import { $Fluid$$Type } from "net.minecraft.world.level.material.Fluid"
import { $UseOnContext$$Type } from "net.minecraft.world.item.context.UseOnContext"
import { $BlockAndTintGetter$$Type } from "net.minecraft.world.level.BlockAndTintGetter"
import { $TrackMaterial, $TrackMaterial$$Type } from "com.simibubi.create.content.trains.track.TrackMaterial"
import { $ITrackBlock } from "com.simibubi.create.content.trains.track.ITrackBlock"
import { $IWrenchable } from "com.simibubi.create.content.equipment.wrench.IWrenchable"
import { $TrackBlockEntity, $TrackBlockEntity$$Type } from "com.simibubi.create.content.trains.track.TrackBlockEntity"
import { $ResourceKey } from "net.minecraft.resources.ResourceKey"
import { $Explosion$$Type } from "net.minecraft.world.level.Explosion"
import { $SpecialBlockItemRequirement } from "com.simibubi.create.api.schematic.requirement.SpecialBlockItemRequirement"
import { $Consumer$$Type } from "java.util.function.Consumer"
import { $HitResult$$Type } from "net.minecraft.world.phys.HitResult"
import { $ProperWaterloggedBlock } from "com.simibubi.create.foundation.block.ProperWaterloggedBlock"
import { $Entity$$Type } from "net.minecraft.world.entity.Entity"
import { $Vec3, $Vec3$$Type } from "net.minecraft.world.phys.Vec3"
import { $IBE } from "com.simibubi.create.foundation.block.IBE"
import { $Block, $Block$$Type } from "net.minecraft.world.level.block.Block"
import { $Class } from "java.lang.Class"
import { $Mob$$Type } from "net.minecraft.world.entity.Mob"
import { $ItemRequirement } from "com.simibubi.create.content.schematics.requirement.ItemRequirement"

export class $TrackBlock extends $Block implements $IBE<$TrackBlockEntity>, $IWrenchable, $ITrackBlock, $SpecialBlockItemRequirement, $ProperWaterloggedBlock, $IHaveBigOutline {
static readonly "HAS_BE": $BooleanProperty
static readonly "SHAPE": $EnumProperty<$TrackShape>

constructor(properties0: $BlockBehaviour$Properties$$Type, trackMaterial1: $TrackMaterial$$Type)

public "addLandingEffects"(blockState0: $BlockState$$Type, serverLevel1: $ServerLevel$$Type, blockPos2: $BlockPos$$Type, blockState3: $BlockState$$Type, livingEntity4: $LivingEntity$$Type, int5: integer): boolean
public "addRunningEffects"(blockState0: $BlockState$$Type, level1: $Level$$Type, blockPos2: $BlockPos$$Type, entity3: $Entity$$Type): boolean
public static "addToListIfConnected"(trackNodeLocation0: $TrackNodeLocation$$Type, collection1: $Collection$$Type<$TrackNodeLocation$DiscoveredLocation$$Type>, biFunction2: $BiFunction$$Type<double, boolean, $Vec3>, function3: $Function$$Type<boolean, $Vec3>, function4: $Function$$Type<boolean, $ResourceKey<$Level>>, function5: $Function$$Type<$Vec3$$Type, integer>, vec36: $Vec3$$Type, bezierConnection7: $BezierConnection$$Type, biFunction8: $BiFunction$$Type<boolean, $Vec3$$Type, $TrackMaterial>): void
public "animateTick"(blockState0: $BlockState$$Type, level1: $Level$$Type, blockPos2: $BlockPos$$Type, random3: $Random$$Type): void
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
public "fluidState"(blockState0: $BlockState$$Type): $FluidState
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
public "getBlockEntity"(blockGetter0: $BlockGetter$$Type, blockPos1: $BlockPos$$Type): $TrackBlockEntity
public "getBlockEntityClass"(): $Class<$TrackBlockEntity>
public "getBlockEntityOptional"(blockGetter0: $BlockGetter$$Type, blockPos1: $BlockPos$$Type): $Optional<$TrackBlockEntity>
public "getBlockEntityType"(): $BlockEntityType<$TrackBlockEntity>
public "getBlockPathType"(blockState0: $BlockState$$Type, blockGetter1: $BlockGetter$$Type, blockPos2: $BlockPos$$Type, mob3: $Mob$$Type): $BlockPathTypes
public "getBlockStates"(): $List<$BlockState>
public "getBogeyAnchor"(blockGetter0: $BlockGetter$$Type, blockPos1: $BlockPos$$Type, blockState2: $BlockState$$Type): $BlockState
public "getCloneItemStack"(blockState0: $BlockState$$Type, hitResult1: $HitResult$$Type, blockGetter2: $BlockGetter$$Type, blockPos3: $BlockPos$$Type, player4: $Player$$Type): $ItemStack
public "getConnected"(blockGetter0: $BlockGetter$$Type, blockPos1: $BlockPos$$Type, blockState2: $BlockState$$Type, boolean3: boolean, trackNodeLocation4: $TrackNodeLocation$$Type): $Collection<$TrackNodeLocation$DiscoveredLocation>
public "getCurveStart"(blockGetter0: $BlockGetter$$Type, blockPos1: $BlockPos$$Type, blockState2: $BlockState$$Type, vec33: $Vec3$$Type): $Vec3
public "getElevationAtCenter"(blockGetter0: $BlockGetter$$Type, blockPos1: $BlockPos$$Type, blockState2: $BlockState$$Type): double
public "getEnchantPowerBonus"(blockState0: $BlockState$$Type, levelReader1: $LevelReader$$Type, blockPos2: $BlockPos$$Type): float
public "getExpDrop"(blockState0: $BlockState$$Type, levelReader1: $LevelReader$$Type, randomSource2: $RandomSource$$Type, blockPos3: $BlockPos$$Type, int4: integer, int5: integer): integer
public "getExplosionResistance"(blockState0: $BlockState$$Type, blockGetter1: $BlockGetter$$Type, blockPos2: $BlockPos$$Type, explosion3: $Explosion$$Type): float
public "getFireSpreadSpeed"(blockState0: $BlockState$$Type, blockGetter1: $BlockGetter$$Type, blockPos2: $BlockPos$$Type, direction3: $Direction$$Type): integer
public "getFlammability"(blockState0: $BlockState$$Type, blockGetter1: $BlockGetter$$Type, blockPos2: $BlockPos$$Type, direction3: $Direction$$Type): integer
public "getFriction"(blockState0: $BlockState$$Type, levelReader1: $LevelReader$$Type, blockPos2: $BlockPos$$Type, entity3: $Entity$$Type): float
public "getLightEmission"(blockState0: $BlockState$$Type, blockGetter1: $BlockGetter$$Type, blockPos2: $BlockPos$$Type): integer
public "getListener"<T extends $BlockEntity>(serverLevel0: $ServerLevel$$Type, t1: T): $GameEventListener
public "getMapColor"(blockState0: $BlockState$$Type, blockGetter1: $BlockGetter$$Type, blockPos2: $BlockPos$$Type, mapColor3: $MapColor$$Type): $MapColor
public "getMaterial"(): $TrackMaterial
public static "getMaterialSimple"(blockGetter0: $BlockGetter$$Type, vec31: $Vec3$$Type): $TrackMaterial
public static "getMaterialSimple"(blockGetter0: $BlockGetter$$Type, vec31: $Vec3$$Type, trackMaterial2: $TrackMaterial$$Type): $TrackMaterial
public "getMod"(): string
public "getNearestTrackAxis"(blockGetter0: $BlockGetter$$Type, blockPos1: $BlockPos$$Type, blockState2: $BlockState$$Type, vec33: $Vec3$$Type): $Pair<$Vec3, $Direction$AxisDirection>
public "getPickupSound"(): $Optional<$SoundEvent>
public "getPickupSound"(blockState0: $BlockState$$Type): $Optional<$SoundEvent>
public "getPistonPushReaction"(blockState0: $BlockState$$Type): $PushReaction
public "getRequiredItems"(blockState0: $BlockState$$Type, blockEntity1: $BlockEntity$$Type): $ItemRequirement
public "getRespawnPosition"(blockState0: $BlockState$$Type, entityType1: $EntityType$$Type<any>, levelReader2: $LevelReader$$Type, blockPos3: $BlockPos$$Type, float4: float, livingEntity5: $LivingEntity$$Type): $Optional<$Vec3>
public "getRotatedBlockState"(blockState0: $BlockState$$Type, direction1: $Direction$$Type): $BlockState
public "getSoundType"(blockState0: $BlockState$$Type, levelReader1: $LevelReader$$Type, blockPos2: $BlockPos$$Type, entity3: $Entity$$Type): $SoundType
public "getStateAtViewpoint"(blockState0: $BlockState$$Type, blockGetter1: $BlockGetter$$Type, blockPos2: $BlockPos$$Type, vec33: $Vec3$$Type): $BlockState
public "getTicker"<S extends $BlockEntity>(level0: $Level$$Type, blockState1: $BlockState$$Type, blockEntityType2: $BlockEntityType$$Type<S>): $BlockEntityTicker<S>
public "getToolModifiedState"(blockState0: $BlockState$$Type, useOnContext1: $UseOnContext$$Type, toolAction2: $ToolAction$$Type, boolean3: boolean): $BlockState
public "getTrackAxes"(blockGetter0: $BlockGetter$$Type, blockPos1: $BlockPos$$Type, blockState2: $BlockState$$Type): $List<$Vec3>
public "getUpNormal"(blockGetter0: $BlockGetter$$Type, blockPos1: $BlockPos$$Type, blockState2: $BlockState$$Type): $Vec3
public "getWeakChanges"(blockState0: $BlockState$$Type, levelReader1: $LevelReader$$Type, blockPos2: $BlockPos$$Type): boolean
public "getYOffsetAt"(blockGetter0: $BlockGetter$$Type, blockPos1: $BlockPos$$Type, blockState2: $BlockState$$Type, vec33: $Vec3$$Type): integer
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
public "isSlope"(blockGetter0: $BlockGetter$$Type, blockPos1: $BlockPos$$Type, blockState2: $BlockState$$Type): boolean
public "isStickyBlock"(blockState0: $BlockState$$Type): boolean
public "isValidSpawn"(blockState0: $BlockState$$Type, blockGetter1: $BlockGetter$$Type, blockPos2: $BlockPos$$Type, type3: $SpawnPlacements$Type$$Type, entityType4: $EntityType$$Type<any>): boolean
public "makesOpenTrapdoorAboveClimbable"(blockState0: $BlockState$$Type, levelReader1: $LevelReader$$Type, blockPos2: $BlockPos$$Type, blockState3: $BlockState$$Type): boolean
public "newBlockEntity"(blockPos0: $BlockPos$$Type, blockState1: $BlockState$$Type): $BlockEntity
public "onBlockEntityUse"(blockGetter0: $BlockGetter$$Type, blockPos1: $BlockPos$$Type, function2: $Function$$Type<$TrackBlockEntity$$Type, $InteractionResult>): $InteractionResult
public "onBlockExploded"(blockState0: $BlockState$$Type, level1: $Level$$Type, blockPos2: $BlockPos$$Type, explosion3: $Explosion$$Type): void
public "onBlockStateChange"(levelReader0: $LevelReader$$Type, blockPos1: $BlockPos$$Type, blockState2: $BlockState$$Type, blockState3: $BlockState$$Type): void
public "onCaughtFire"(blockState0: $BlockState$$Type, level1: $Level$$Type, blockPos2: $BlockPos$$Type, direction3: $Direction$$Type, livingEntity4: $LivingEntity$$Type): void
public "onDestroyedByPlayer"(blockState0: $BlockState$$Type, level1: $Level$$Type, blockPos2: $BlockPos$$Type, player3: $Player$$Type, boolean4: boolean, fluidState5: $FluidState$$Type): boolean
public "onNeighborChange"(blockState0: $BlockState$$Type, levelReader1: $LevelReader$$Type, blockPos2: $BlockPos$$Type, blockPos3: $BlockPos$$Type): void
public static "onRemove"(blockState0: $BlockState$$Type, level1: $Level$$Type, blockPos2: $BlockPos$$Type, blockState3: $BlockState$$Type): void
public "onSneakWrenched"(blockState0: $BlockState$$Type, useOnContext1: $UseOnContext$$Type): $InteractionResult
public "onTreeGrow"(blockState0: $BlockState$$Type, levelReader1: $LevelReader$$Type, biConsumer2: $BiConsumer$$Type<$BlockPos$$Type, $BlockState$$Type>, randomSource3: $RandomSource$$Type, blockPos4: $BlockPos$$Type, treeConfiguration5: $TreeConfiguration$$Type): boolean
public "onWrenched"(blockState0: $BlockState$$Type, useOnContext1: $UseOnContext$$Type): $InteractionResult
public "overlay"(blockGetter0: $BlockGetter$$Type, blockPos1: $BlockPos$$Type, blockState2: $BlockState$$Type, blockState3: $BlockState$$Type): $BlockState
public "pickupBlock"(levelAccessor0: $LevelAccessor$$Type, blockPos1: $BlockPos$$Type, blockState2: $BlockState$$Type): $ItemStack
public "placeLiquid"(levelAccessor0: $LevelAccessor$$Type, blockPos1: $BlockPos$$Type, blockState2: $BlockState$$Type, fluidState3: $FluidState$$Type): boolean
public static "playRemoveSound"(level0: $Level$$Type, blockPos1: $BlockPos$$Type): void
public static "playRotateSound"(level0: $Level$$Type, blockPos1: $BlockPos$$Type): void
/** Client only, do not use in server scripts */
public "prepareAssemblyOverlay"(blockGetter0: $BlockGetter$$Type, blockPos1: $BlockPos$$Type, blockState2: $BlockState$$Type, direction3: $Direction$$Type, poseStack4: $PoseStack$$Type): $PartialModel
/** Client only, do not use in server scripts */
public "prepareTrackOverlay"<Self extends $Affine<Self>>(affine0: $Affine$$Type<Self>, blockGetter1: $BlockGetter$$Type, blockPos2: $BlockPos$$Type, blockState3: $BlockState$$Type, bezierTrackPointLocation4: $BezierTrackPointLocation$$Type, axisDirection5: $Direction$AxisDirection$$Type, renderedTrackOverlayType6: $TrackTargetingBehaviour$RenderedTrackOverlayType$$Type): $PartialModel
public "rotate"(blockState0: $BlockState$$Type, levelAccessor1: $LevelAccessor$$Type, blockPos2: $BlockPos$$Type, rotation3: $Rotation$$Type): $BlockState
public "setBedOccupied"(blockState0: $BlockState$$Type, level1: $Level$$Type, blockPos2: $BlockPos$$Type, livingEntity3: $LivingEntity$$Type, boolean4: boolean): void
public "setDestroySpeed"(v: float): void
public "setLightEmission"(v: integer): void
public "setRequiresTool"(v: boolean): void
public "shouldCheckWeakPower"(blockState0: $BlockState$$Type, signalGetter1: $SignalGetter$$Type, blockPos2: $BlockPos$$Type, direction3: $Direction$$Type): boolean
public "shouldDisplayFluidOverlay"(blockState0: $BlockState$$Type, blockAndTintGetter1: $BlockAndTintGetter$$Type, blockPos2: $BlockPos$$Type, fluidState3: $FluidState$$Type): boolean
public "supportsExternalFaceHiding"(blockState0: $BlockState$$Type): boolean
public "trackEquals"(blockState0: $BlockState$$Type, blockState1: $BlockState$$Type): boolean
public "updateAfterWrenched"(blockState0: $BlockState$$Type, useOnContext1: $UseOnContext$$Type): $BlockState
public "updateWater"(levelAccessor0: $LevelAccessor$$Type, blockState1: $BlockState$$Type, blockPos2: $BlockPos$$Type): void
public static "walkConnectedTracks"(blockGetter0: $BlockGetter$$Type, trackNodeLocation1: $TrackNodeLocation$$Type, boolean2: boolean): $Collection<$TrackNodeLocation$DiscoveredLocation>
public "withBlockEntityDo"(blockGetter0: $BlockGetter$$Type, blockPos1: $BlockPos$$Type, consumer2: $Consumer$$Type<$TrackBlockEntity$$Type>): void
public static "withWater"(levelAccessor0: $LevelAccessor$$Type, blockState1: $BlockState$$Type, blockPos2: $BlockPos$$Type): $BlockState
public "withWater"(blockState0: $BlockState$$Type, blockPlaceContext1: $BlockPlaceContext$$Type): $BlockState
get "blockEntityClass"(): $Class<$TrackBlockEntity>
get "blockEntityType"(): $BlockEntityType<$TrackBlockEntity>
get "blockStates"(): $List<$BlockState>
get "material"(): $TrackMaterial
get "mod"(): string
get "pickupSound"(): $Optional<$SoundEvent>
set "destroySpeed"(value: float)
set "lightEmission"(value: integer)
set "requiresTool"(value: boolean)
}
}

declare module "com.simibubi.create.content.trains.station.GlobalPackagePort" {
import { $ItemStackHandler, $ItemStackHandler$$Type } from "net.minecraftforge.items.ItemStackHandler"
import { $IItemHandlerModifiable$$Type } from "net.minecraftforge.items.IItemHandlerModifiable"

export class $GlobalPackagePort {
constructor()

public "restoreOfflineBuffer"(iItemHandlerModifiable0: $IItemHandlerModifiable$$Type): void
public "saveOfflineBuffer"(iItemHandlerModifiable0: $IItemHandlerModifiable$$Type): void
get "address"(): string
set "address"(value: string)
get "offlineBuffer"(): $ItemStackHandler
set "offlineBuffer"(value: $ItemStackHandler$$Type)
get "primed"(): boolean
set "primed"(value: boolean)
}
}

declare module "com.simibubi.create.foundation.mixin.accessor.StateHolderAccessor" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $StateHolderAccessor<O = any, S = any> {
"getOwner"(): O
get "owner"(): O
}

export namespace $StateHolderAccessor {
const probejs$$marker: never
}
export abstract class $StateHolderAccessor$$Static<O = any, S = any> implements $StateHolderAccessor<O, S> {
}
}

declare module "com.simibubi.create.content.contraptions.render.ClientContraption$RenderedBlocks" {
import { $BlockPos, $BlockPos$$Type } from "net.minecraft.core.BlockPos"
import { $BlockState } from "net.minecraft.world.level.block.state.BlockState"
import { $Record } from "java.lang.Record"
import { $Function, $Function$$Type } from "java.util.function.Function"
import { $Iterable, $Iterable$$Type } from "java.lang.Iterable"

export class $ClientContraption$RenderedBlocks extends $Record {
constructor(lookup: $Function$$Type<$BlockPos$$Type, $BlockState>, positions: $Iterable$$Type<$BlockPos$$Type>)

public "lookup"(): $Function<$BlockPos, $BlockState>
public "positions"(): $Iterable<$BlockPos>
}
}

declare module "com.simibubi.create.foundation.advancement.CreateAdvancement" {
import { $UnaryOperator$$Type } from "java.util.function.UnaryOperator"
import { $CreateAdvancement$Builder$$Type } from "com.simibubi.create.foundation.advancement.CreateAdvancement$Builder"
import { $Player$$Type } from "net.minecraft.world.entity.player.Player"

export class $CreateAdvancement {
constructor(string0: string, unaryOperator1: $UnaryOperator$$Type<$CreateAdvancement$Builder$$Type>)

public "awardTo"(player0: $Player$$Type): void
public "isAlreadyAwardedTo"(player0: $Player$$Type): boolean
}
}

declare module "com.simibubi.create.content.trains.entity.Navigation$StationTest" {
import { $Pair$$Type } from "net.createmod.catnip.data.Pair"
import { $TrackEdge$$Type } from "com.simibubi.create.content.trains.graph.TrackEdge"
import { $Map$$Type } from "java.util.Map"
import { $Couple$$Type } from "net.createmod.catnip.data.Couple"
import { $TrackNode$$Type } from "com.simibubi.create.content.trains.graph.TrackNode"
import { $GlobalStation$$Type } from "com.simibubi.create.content.trains.station.GlobalStation"

export interface $Navigation$StationTest {
"test"(double0: double, double1: double, map2: $Map$$Type<$TrackEdge$$Type, $Pair$$Type<boolean, $Couple$$Type<$TrackNode$$Type>>>, pair3: $Pair$$Type<$Couple$$Type<$TrackNode$$Type>, $TrackEdge$$Type>, globalStation4: $GlobalStation$$Type): boolean
}

export namespace $Navigation$StationTest {
const probejs$$marker: never
}
export abstract class $Navigation$StationTest$$Static implements $Navigation$StationTest {
}
}

declare module "com.simibubi.create.content.contraptions.AbstractContraptionEntity" {
import { $ResourceLocation, $ResourceLocation$$Type } from "net.minecraft.resources.ResourceLocation"
import { $MutableInt } from "org.apache.commons.lang3.mutable.MutableInt"
import { $EntityType$Builder, $EntityType$Builder$$Type } from "net.minecraft.world.entity.EntityType$Builder"
import { $Direction, $Direction$$Type } from "net.minecraft.core.Direction"
import { $GameProfile } from "com.mojang.authlib.GameProfile"
import { $FluidType$$Type } from "net.minecraftforge.fluids.FluidType"
import { $Entity$MoveFunction$$Type } from "net.minecraft.world.entity.Entity$MoveFunction"
import { $BlockContainerJS, $BlockContainerJS$$Type } from "dev.latvian.mods.kubejs.level.BlockContainerJS"
import { $MinecraftServer } from "net.minecraft.server.MinecraftServer"
import { $Pose$$Type } from "net.minecraft.world.entity.Pose"
import { $Map } from "java.util.Map"
import { $AbstractContraptionEntity$ContraptionRotationState } from "com.simibubi.create.content.contraptions.AbstractContraptionEntity$ContraptionRotationState"
import { $Contraption } from "com.simibubi.create.content.contraptions.Contraption"
import { $TrackedDataRegistry$$Type } from "dev.corgitaco.dataanchor.data.registry.TrackedDataRegistry"
import { $SoundAction$$Type } from "net.minecraftforge.common.SoundAction"
import { $Collection$$Type } from "java.util.Collection"
import { $UUID, $UUID$$Type } from "java.util.UUID"
import { $Capability$$Type } from "net.minecraftforge.common.capabilities.Capability"
import { $Player$$Type } from "net.minecraft.world.entity.player.Player"
import { $CompoundTag, $CompoundTag$$Type } from "net.minecraft.nbt.CompoundTag"
import { $BlockPos$$Type } from "net.minecraft.core.BlockPos"
import { $SoundEvent, $SoundEvent$$Type } from "net.minecraft.sounds.SoundEvent"
import { $Boat$$Type } from "net.minecraft.world.entity.vehicle.Boat"
import { $FluidState$$Type } from "net.minecraft.world.level.material.FluidState"
import { $Optional } from "java.util.Optional"
import { $ItemStack } from "net.minecraft.world.item.ItemStack"
import { $Level, $Level$$Type } from "net.minecraft.world.level.Level"
import { $EntityType$$Type } from "net.minecraft.world.entity.EntityType"
import { $BlockState$$Type } from "net.minecraft.world.level.block.state.BlockState"
import { $FriendlyByteBuf$$Type } from "net.minecraft.network.FriendlyByteBuf"
import { $AccessorAbstractContraptionEntity } from "com.railwayteam.railways.mixin.AccessorAbstractContraptionEntity"
import { $PoseStack$$Type } from "com.mojang.blaze3d.vertex.PoseStack"
import { $LazyOptional } from "net.minecraftforge.common.util.LazyOptional"
import { $TrackedData, $TrackedData$$Type } from "dev.corgitaco.dataanchor.data.TrackedData"
import { $BiPredicate$$Type } from "java.util.function.BiPredicate"
import { $IEntityAdditionalSpawnData } from "net.minecraftforge.entity.IEntityAdditionalSpawnData"
import { $StructureTemplate$StructureBlockInfo$$Type } from "net.minecraft.world.level.levelgen.structure.templatesystem.StructureTemplate$StructureBlockInfo"
import { $MobCategory } from "net.minecraft.world.entity.MobCategory"
import { $ObjectList } from "it.unimi.dsi.fastutil.objects.ObjectList"
import { $Component, $Component$$Type } from "net.minecraft.network.chat.Component"
import { $PartEntity } from "net.minecraftforge.entity.PartEntity"
import { $RayTraceResultJS } from "dev.latvian.mods.kubejs.entity.RayTraceResultJS"
import { $ScriptType } from "dev.latvian.mods.kubejs.script.ScriptType"
import { $HitResult$$Type } from "net.minecraft.world.phys.HitResult"
import { $EntityArrayList } from "dev.latvian.mods.kubejs.player.EntityArrayList"
import { $Entity, $Entity$$Type } from "net.minecraft.world.entity.Entity"
import { $TrackedDataContainer } from "dev.corgitaco.dataanchor.data.TrackedDataContainer"
import { $Vec3, $Vec3$$Type } from "net.minecraft.world.phys.Vec3"
import { $EntityDimensions$$Type } from "net.minecraft.world.entity.EntityDimensions"
import { $InteractionHand$$Type } from "net.minecraft.world.InteractionHand"

export class $AbstractContraptionEntity extends $Entity implements $IEntityAdditionalSpawnData, $AccessorAbstractContraptionEntity {
readonly "collidingEntities": $Map<$Entity, $MutableInt>

constructor(entityType0: $EntityType$$Type<any>, level1: $Level$$Type)

public "addSittingPassenger"(entity0: $Entity$$Type, int1: integer): void
public "alignPassenger"(entity0: $Entity$$Type): void
public "alwaysAccepts"(): boolean
/** Client only, do not use in server scripts */
public "applyLocalTransforms"(poseStack0: $PoseStack$$Type, float1: float): void
public "applyRotation"(vec30: $Vec3$$Type, float1: float): $Vec3
public "attack"(hp: float): void
public static "build"(builder0: $EntityType$Builder$$Type<any>): $EntityType$Builder<any>
public "canBeRiddenUnderFluidType"(fluidType0: $FluidType$$Type, entity1: $Entity$$Type): boolean
public "canFluidExtinguish"(fluidType0: $FluidType$$Type): boolean
public "canHydrateInFluidType"(fluidType0: $FluidType$$Type): boolean
public "canRiderInteract"(): boolean
public "canStartSwimming"(): boolean
public "canSwimInFluidType"(fluidType0: $FluidType$$Type): boolean
public "canaryOnBlockCacheDeleted"(): void
public "canaryOnBlockCacheSet"(blockState0: $BlockState$$Type): void
public "canarySetClimbingMobCachingSectionUpdateBehavior"(boolean0: boolean): void
public "collisionEnabled"(): boolean
public "control"(blockPos0: $BlockPos$$Type, collection1: $Collection$$Type<integer>, player2: $Player$$Type): boolean
public "deserializeNBT"(compoundTag0: $CompoundTag$$Type): void
public "disassemble"(): void
public "getAnchorVec"(): $Vec3
public "getBlock"(): $BlockContainerJS
public "getCapability"<T>(capability0: $Capability$$Type<T>): $LazyOptional<T>
public "getClassification"(boolean0: boolean): $MobCategory
public "getContactPointMotion"(vec30: $Vec3$$Type): $Vec3
public "getContraption"(): $Contraption
public "getContraptionName"(): $Component
public "getControllingPlayer"(): $Optional<$UUID>
public "getDisplayName"(): $Component
public "getDistance"(pos: $BlockPos$$Type): double
public "getDistance"(x: double, y: double, z: double): double
public "getDistanceSq"(pos: $BlockPos$$Type): double
/** @deprecated */
public "getEyeHeightForge"(pose0: $Pose$$Type, entityDimensions1: $EntityDimensions$$Type): float
public "getFacing"(): $Direction
public "getFluidFallDistanceModifier"(fluidType0: $FluidType$$Type): float
public "getFluidMotionScale"(fluidType0: $FluidType$$Type): double
public "getItem"(): $ItemStack
public "getLevel"(): $Level
public static "getMatched"(entity: $Entity$$Type): $ObjectList<$ResourceLocation>
public "getMotionX"(): double
public "getMotionY"(): double
public "getMotionZ"(): double
public "getName"(): $Component
public "getNbt"(): $CompoundTag
public "getParts"(): $PartEntity<any>[]
public "getPassengerPosition"(entity0: $Entity$$Type, float1: float): $Vec3
public "getPassengers"(): $EntityArrayList
public "getPickedResult"(hitResult0: $HitResult$$Type): $ItemStack
public "getPrevAnchorVec"(): $Vec3
public "getPrevPositionVec"(): $Vec3
public "getProfile"(): $GameProfile
public "getRotationState"(): $AbstractContraptionEntity$ContraptionRotationState
public "getScriptType"(): $ScriptType
public "getServer"(): $MinecraftServer
public "getSoundFromFluidType"(fluidType0: $FluidType$$Type, soundAction1: $SoundAction$$Type): $SoundEvent
public "getStepHeight"(): float
public "getTeamId"(): string
public "getType"(): string
public "getYawOffset"(): float
public "handlePlayerInteraction"(player0: $Player$$Type, blockPos1: $BlockPos$$Type, direction2: $Direction$$Type, interactionHand3: $InteractionHand$$Type): boolean
public "hasCustomOutlineRendering"(player0: $Player$$Type): boolean
public "isAliveOrStale"(): boolean
public "isAmbientCreature"(): boolean
public "isAnimal"(): boolean
public "isDynamicLightEnabled"(): boolean
public "isDynamicLightEnabledH"(): boolean
public "isEyeInFluidType"(fluidType0: $FluidType$$Type): boolean
public "isFrame"(): boolean
public "isInFluidType"(fluidState0: $FluidState$$Type): boolean
public "isInFluidType"(fluidType0: $FluidType$$Type): boolean
public "isInFluidType"(biPredicate0: $BiPredicate$$Type<$FluidType$$Type, double>): boolean
public "isLiving"(): boolean
public "isMonster"(): boolean
public "isMultipartEntity"(): boolean
public "isOnScoreboardTeam"(teamId: string): boolean
public "isPeacefulCreature"(): boolean
public "isPlayer"(): boolean
public "isPrevPosInvalid"(): boolean
public "isPushedByFluid"(fluidType0: $FluidType$$Type): boolean
public "isReadyForRender"(): boolean
public "isStalled"(): boolean
public "isWaterCreature"(): boolean
public "m_19956_"(entity0: $Entity$$Type, moveFunction1: $Entity$MoveFunction$$Type): void
public static "makeBasicContainer"<O, T extends $TrackedData<O>>(registry: $TrackedDataRegistry$$Type<O, T>, o: O, isClient: boolean): $TrackedDataContainer<O, T>
public static "makeBasicContainer"<O, T extends $TrackedData<O>>(registry: $TrackedDataRegistry$$Type<O, T>, o: O, isClient: boolean, lazyLoad: boolean): $TrackedDataContainer<O, T>
public "mergeNbt"(tag: $CompoundTag$$Type): $Entity
public "move"(double0: double, double1: double, double2: double): void
public static "pitchFromVector"(vec30: $Vec3$$Type): float
public "playSound"(id: $SoundEvent$$Type): void
public "playSound"(id: $SoundEvent$$Type, volume: float, pitch: float): void
public "rayTrace"(distance: double): $RayTraceResultJS
public "rayTrace"(distance: double, fluids: boolean): $RayTraceResultJS
public "readSpawnData"(friendlyByteBuf0: $FriendlyByteBuf$$Type): void
public "refreshPSIs"(): void
public "registerColliding"(entity0: $Entity$$Type): void
public "reverseRotation"(vec30: $Vec3$$Type, float1: float): $Vec3
public "runCommand"(command: string): integer
public "runCommandSilent"(command: string): integer
public "sdl$isDynamicLightEnabled"(): boolean
public "sdl$setDynamicLightEnabled"(enabled: boolean): void
public "self"(): $Entity
public "serializeNBT"(): $CompoundTag
public "setBlock"(blockPos0: $BlockPos$$Type, structureBlockInfo1: $StructureTemplate$StructureBlockInfo$$Type): void
public "setContraptionMotion"(vec30: $Vec3$$Type): void
public "setControllingPlayer"(uUID0: $UUID$$Type): void
public "setDynamicLightEnabled"(boolean0: boolean): void
public "setHexereiDynamicLightEnabled"(boolean0: boolean): void
public "setMotionX"(x: double): void
public "setMotionY"(y: double): void
public "setMotionZ"(z: double): void
public "setNbt"(nbt: $CompoundTag$$Type): void
public "setPosition"(block: $BlockContainerJS$$Type): void
public "setPosition"(x: double, y: double, z: double): void
public "setPositionAndRotation"(x: double, y: double, z: double, yaw: float, pitch: float): void
public "setRotation"(yaw: float, pitch: float): void
public "setStatusMessage"(message: $Component$$Type): void
public "setX"(x: double): void
public "setY"(y: double): void
public "setZ"(z: double): void
public "shouldRiderSit"(): boolean
public "shouldUpdateFluidWhileBoating"(fluidState0: $FluidState$$Type, boat1: $Boat$$Type): boolean
public "spawn"(): void
public "startControlling"(blockPos0: $BlockPos$$Type, player1: $Player$$Type): boolean
public "stopControlling"(blockPos0: $BlockPos$$Type): void
public "supportsTerrainCollision"(): boolean
public "teleportTo"(dimension: $ResourceLocation$$Type, x: double, y: double, z: double, yaw: float, pitch: float): void
public "tell"(message: $Component$$Type): void
public "tickActors"(): void
public "toGlobalVector"(vec30: $Vec3$$Type, float1: float): $Vec3
public "toGlobalVector"(vec30: $Vec3$$Type, float1: float, boolean2: boolean): $Vec3
public "toLocalVector"(vec30: $Vec3$$Type, float1: float): $Vec3
public "toLocalVector"(vec30: $Vec3$$Type, float1: float, boolean2: boolean): $Vec3
public "writeSpawnData"(friendlyByteBuf0: $FriendlyByteBuf$$Type): void
public static "yawFromVector"(vec30: $Vec3$$Type): float
get "staleTicks"(): integer
set "staleTicks"(value: integer)
get "anchorVec"(): $Vec3
get "block"(): $BlockContainerJS
get "contraption"(): $Contraption
get "contraptionName"(): $Component
get "controllingPlayer"(): $Optional<$UUID>
get "displayName"(): $Component
get "facing"(): $Direction
get "item"(): $ItemStack
get "level"(): $Level
get "motionX"(): double
get "motionY"(): double
get "motionZ"(): double
get "name"(): $Component
get "nbt"(): $CompoundTag
get "parts"(): $PartEntity<any>[]
get "passengers"(): $EntityArrayList
get "prevAnchorVec"(): $Vec3
get "prevPositionVec"(): $Vec3
get "profile"(): $GameProfile
get "rotationState"(): $AbstractContraptionEntity$ContraptionRotationState
get "scriptType"(): $ScriptType
get "server"(): $MinecraftServer
get "stepHeight"(): float
get "teamId"(): string
get "type"(): string
get "yawOffset"(): float
get "aliveOrStale"(): boolean
get "ambientCreature"(): boolean
get "animal"(): boolean
get "dynamicLightEnabled"(): boolean
get "dynamicLightEnabledH"(): boolean
get "frame"(): boolean
get "living"(): boolean
get "monster"(): boolean
get "multipartEntity"(): boolean
get "peacefulCreature"(): boolean
get "player"(): boolean
get "prevPosInvalid"(): boolean
get "readyForRender"(): boolean
get "stalled"(): boolean
get "waterCreature"(): boolean
set "contraptionMotion"(value: $Vec3$$Type)
set "controllingPlayer"(value: $UUID$$Type)
set "dynamicLightEnabled"(value: boolean)
set "hexereiDynamicLightEnabled"(value: boolean)
set "motionX"(value: double)
set "motionY"(value: double)
set "motionZ"(value: double)
set "nbt"(value: $CompoundTag$$Type)
set "position"(value: $BlockContainerJS$$Type)
set "statusMessage"(value: $Component$$Type)
set "x"(value: double)
set "y"(value: double)
set "z"(value: double)
}
}

declare module "com.simibubi.create.content.trains.signal.SignalBlockEntity$SignalState" {
import { $Enum } from "java.lang.Enum"

export class $SignalBlockEntity$SignalState extends $Enum<$SignalBlockEntity$SignalState> {
static readonly "GREEN": $SignalBlockEntity$SignalState
static readonly "INVALID": $SignalBlockEntity$SignalState
static readonly "RED": $SignalBlockEntity$SignalState
static readonly "YELLOW": $SignalBlockEntity$SignalState

public "isGreenLight"(float0: float): boolean
public "isRedLight"(float0: float): boolean
public "isYellowLight"(float0: float): boolean
public static "valueOf"(string0: string): $SignalBlockEntity$SignalState
public static "values"(): $SignalBlockEntity$SignalState[]
}
}

declare module "com.simibubi.create.content.trains.bogey.BogeySizes$BogeySize" {
import { $ResourceLocation, $ResourceLocation$$Type } from "net.minecraft.resources.ResourceLocation"
import { $Record } from "java.lang.Record"

export class $BogeySizes$BogeySize extends $Record {
constructor(id: $ResourceLocation$$Type, wheelRadius: float)

public "id"(): $ResourceLocation
public "nextBySize"(): $BogeySizes$BogeySize
public "wheelRadius"(): float
}
}

declare module "com.simibubi.create.content.trains.entity.CarriageBogey" {
import { $TravellingPoint, $TravellingPoint$$Type } from "com.simibubi.create.content.trains.entity.TravellingPoint"
import { $BogeySizes$BogeySize } from "com.simibubi.create.content.trains.bogey.BogeySizes$BogeySize"
import { $Couple, $Couple$$Type } from "net.createmod.catnip.data.Couple"
import { $AccessorCarriageBogey } from "com.railwayteam.railways.mixin.AccessorCarriageBogey"
import { $ResourceKey } from "net.minecraft.resources.ResourceKey"
import { $AbstractBogeyBlock$$Type } from "com.simibubi.create.content.trains.bogey.AbstractBogeyBlock"
import { $CompoundTag, $CompoundTag$$Type } from "net.minecraft.nbt.CompoundTag"
import { $Vec3, $Vec3$$Type } from "net.minecraft.world.phys.Vec3"
import { $CarriageContraptionEntity$$Type } from "com.simibubi.create.content.trains.entity.CarriageContraptionEntity"
import { $Carriage, $Carriage$$Type } from "com.simibubi.create.content.trains.entity.Carriage"
import { $TrackGraph$$Type } from "com.simibubi.create.content.trains.graph.TrackGraph"
import { $Level } from "net.minecraft.world.level.Level"
import { $BogeyStyle } from "com.simibubi.create.content.trains.bogey.BogeyStyle"
import { $DimensionPalette$$Type } from "com.simibubi.create.content.trains.graph.DimensionPalette"

export class $CarriageBogey implements $AccessorCarriageBogey {
static readonly "UPSIDE_DOWN_KEY": string

constructor(abstractBogeyBlock0: $AbstractBogeyBlock$$Type<any>, boolean1: boolean, compoundTag2: $CompoundTag$$Type, travellingPoint3: $TravellingPoint$$Type, travellingPoint4: $TravellingPoint$$Type)

public "getAnchorPosition"(): $Vec3
public "getAnchorPosition"(boolean0: boolean): $Vec3
public "getDimension"(): $ResourceKey<$Level>
public "getSize"(): $BogeySizes$BogeySize
public "getStress"(): double
public "getStyle"(): $BogeyStyle
public "isUpsideDown"(): boolean
public "leading"(): $TravellingPoint
public static "read"(compoundTag0: $CompoundTag$$Type, trackGraph1: $TrackGraph$$Type, dimensionPalette2: $DimensionPalette$$Type): $CarriageBogey
public "trailing"(): $TravellingPoint
public "updateAngles"(carriageContraptionEntity0: $CarriageContraptionEntity$$Type, double1: double): void
public "updateCouplingAnchor"(vec30: $Vec3$$Type, float1: float, float2: float, int3: integer, float4: float, boolean5: boolean): void
public "write"(dimensionPalette0: $DimensionPalette$$Type): $CompoundTag
get "bogeyData"(): $CompoundTag
set "bogeyData"(value: $CompoundTag$$Type)
get "carriage"(): $Carriage
set "carriage"(value: $Carriage$$Type)
get "couplingAnchors"(): $Couple<$Vec3>
set "couplingAnchors"(value: $Couple$$Type<$Vec3$$Type>)
get "anchorPosition"(): $Vec3
get "dimension"(): $ResourceKey<$Level>
get "size"(): $BogeySizes$BogeySize
get "stress"(): double
get "style"(): $BogeyStyle
get "upsideDown"(): boolean
}
}

declare module "com.simibubi.create.content.kinetics.belt.transport.TransportedItemStack" {
import { $CompoundTag, $CompoundTag$$Type } from "net.minecraft.nbt.CompoundTag"
import { $Direction, $Direction$$Type } from "net.minecraft.core.Direction"
import { $FanProcessingType, $FanProcessingType$$Type } from "com.simibubi.create.content.kinetics.fan.processing.FanProcessingType"
import { $Comparable } from "java.lang.Comparable"
import { $ItemStack, $ItemStack$$Type } from "net.minecraft.world.item.ItemStack"

export class $TransportedItemStack implements $Comparable<$TransportedItemStack> {
constructor(itemStack0: $ItemStack$$Type)

public "clearFanProcessingData"(): void
public "compareTo"(transportedItemStack0: $TransportedItemStack$$Type): integer
public "copy"(): $TransportedItemStack
public "getSimilar"(): $TransportedItemStack
public "getTargetSideOffset"(): float
public static "read"(compoundTag0: $CompoundTag$$Type): $TransportedItemStack
public "serializeNBT"(): $CompoundTag
get "angle"(): integer
set "angle"(value: integer)
get "beltPosition"(): float
set "beltPosition"(value: float)
get "insertedAt"(): integer
set "insertedAt"(value: integer)
get "insertedFrom"(): $Direction
set "insertedFrom"(value: $Direction$$Type)
get "locked"(): boolean
set "locked"(value: boolean)
get "lockedExternally"(): boolean
set "lockedExternally"(value: boolean)
get "prevBeltPosition"(): float
set "prevBeltPosition"(value: float)
get "prevSideOffset"(): float
set "prevSideOffset"(value: float)
get "processedBy"(): $FanProcessingType
set "processedBy"(value: $FanProcessingType$$Type)
get "processingTime"(): integer
set "processingTime"(value: integer)
get "sideOffset"(): float
set "sideOffset"(value: float)
get "stack"(): $ItemStack
set "stack"(value: $ItemStack$$Type)
get "similar"(): $TransportedItemStack
get "targetSideOffset"(): float
}
}

declare module "com.simibubi.create.content.trains.track.BezierConnection$Segment" {
import { $Vec3, $Vec3$$Type } from "net.minecraft.world.phys.Vec3"

export class $BezierConnection$Segment {
constructor()

get "derivative"(): $Vec3
set "derivative"(value: $Vec3$$Type)
get "faceNormal"(): $Vec3
set "faceNormal"(value: $Vec3$$Type)
get "index"(): integer
set "index"(value: integer)
get "normal"(): $Vec3
set "normal"(value: $Vec3$$Type)
get "position"(): $Vec3
set "position"(value: $Vec3$$Type)
}
}

declare module "com.simibubi.create.content.kinetics.belt.behaviour.BeltProcessingBehaviour" {
import { $BlockGetter$$Type } from "net.minecraft.world.level.BlockGetter"
import { $TransportedItemStackHandlerBehaviour$$Type } from "com.simibubi.create.content.kinetics.belt.behaviour.TransportedItemStackHandlerBehaviour"
import { $BlockPos$$Type } from "net.minecraft.core.BlockPos"
import { $BehaviourType } from "com.simibubi.create.foundation.blockEntity.behaviour.BehaviourType"
import { $SmartBlockEntity$$Type } from "com.simibubi.create.foundation.blockEntity.SmartBlockEntity"
import { $BeltProcessingBehaviour$ProcessingCallback$$Type } from "com.simibubi.create.content.kinetics.belt.behaviour.BeltProcessingBehaviour$ProcessingCallback"
import { $TransportedItemStack$$Type } from "com.simibubi.create.content.kinetics.belt.transport.TransportedItemStack"
import { $BlockEntityBehaviour } from "com.simibubi.create.foundation.blockEntity.behaviour.BlockEntityBehaviour"
import { $BeltProcessingBehaviour$ProcessingResult } from "com.simibubi.create.content.kinetics.belt.behaviour.BeltProcessingBehaviour$ProcessingResult"

export class $BeltProcessingBehaviour extends $BlockEntityBehaviour {
static readonly "TYPE": $BehaviourType<$BeltProcessingBehaviour>

constructor(smartBlockEntity0: $SmartBlockEntity$$Type)

public "handleHeldItem"(transportedItemStack0: $TransportedItemStack$$Type, transportedItemStackHandlerBehaviour1: $TransportedItemStackHandlerBehaviour$$Type): $BeltProcessingBehaviour$ProcessingResult
public "handleReceivedItem"(transportedItemStack0: $TransportedItemStack$$Type, transportedItemStackHandlerBehaviour1: $TransportedItemStackHandlerBehaviour$$Type): $BeltProcessingBehaviour$ProcessingResult
public static "isBlocked"(blockGetter0: $BlockGetter$$Type, blockPos1: $BlockPos$$Type): boolean
public "whenItemEnters"(processingCallback0: $BeltProcessingBehaviour$ProcessingCallback$$Type): $BeltProcessingBehaviour
public "whileItemHeld"(processingCallback0: $BeltProcessingBehaviour$ProcessingCallback$$Type): $BeltProcessingBehaviour
}
}

declare module "com.simibubi.create.content.trains.signal.SignalBlock$SignalType" {
import { $Enum, $Enum$$Type } from "java.lang.Enum"
import { $StringRepresentable, $StringRepresentable$$Type } from "net.minecraft.util.StringRepresentable"
import { $StringRepresentable$EnumCodec } from "net.minecraft.util.StringRepresentable$EnumCodec"
import { $Keyable } from "com.mojang.serialization.Keyable"
import { $Supplier$$Type } from "java.util.function.Supplier"
import { $Function$$Type } from "java.util.function.Function"

export class $SignalBlock$SignalType extends $Enum<$SignalBlock$SignalType> implements $StringRepresentable {
static readonly "CROSS_SIGNAL": $SignalBlock$SignalType
static readonly "ENTRY_SIGNAL": $SignalBlock$SignalType

public static "fromEnum"<E extends ($Enum<E> & $StringRepresentable)>(supplier0: $Supplier$$Type<E[]>): $StringRepresentable$EnumCodec<E>
public static "fromEnumWithMapping"<E extends ($Enum<E> & $StringRepresentable)>(supplier0: $Supplier$$Type<E[]>, function1: $Function$$Type<string, string>): $StringRepresentable$EnumCodec<E>
public "getSerializedName"(): string
public static "keys"(stringRepresentable0s: $StringRepresentable$$Type[]): $Keyable
public static "valueOf"(string0: string): $SignalBlock$SignalType
public static "values"(): $SignalBlock$SignalType[]
get "serializedName"(): string
}
}

declare module "com.simibubi.create.content.trains.entity.CarriageContraption" {
import { $BlockPos, $BlockPos$$Type } from "net.minecraft.core.BlockPos"
import { $CarriageContraptionEntity$$Type } from "com.simibubi.create.content.trains.entity.CarriageContraptionEntity"
import { $Direction, $Direction$$Type } from "net.minecraft.core.Direction"
import { $ArrivalSoundQueue, $ArrivalSoundQueue$$Type } from "com.simibubi.create.content.trains.entity.ArrivalSoundQueue"
import { $Map, $Map$$Type } from "java.util.Map"
import { $Couple, $Couple$$Type } from "net.createmod.catnip.data.Couple"
import { $Contraption } from "com.simibubi.create.content.contraptions.Contraption"
import { $MountedStorageManager$$Type } from "com.simibubi.create.content.contraptions.MountedStorageManager"

export class $CarriageContraption extends $Contraption {
constructor(direction0: $Direction$$Type)
constructor()

public "atSeam"(int0: integer): boolean
public "atSeam"(blockPos0: $BlockPos$$Type): boolean
public "getAssemblyDirection"(): $Direction
public "getSecondBogeyPos"(): $BlockPos
public "hasBackwardControls"(): boolean
public "hasForwardControls"(): boolean
public "inControl"(blockPos0: $BlockPos$$Type, direction1: $Direction$$Type): boolean
public "isHiddenInPortal"(int0: integer): boolean
public "notInPortal"(): boolean
public "returnStorageForDisassembly"(mountedStorageManager0: $MountedStorageManager$$Type): void
public "setSoundQueueOffset"(int0: integer): void
public "swapStorageAfterAssembly"(carriageContraptionEntity0: $CarriageContraptionEntity$$Type): void
public "withinVisible"(int0: integer): boolean
public "withinVisible"(blockPos0: $BlockPos$$Type): boolean
get "blockConductors"(): $Couple<boolean>
set "blockConductors"(value: $Couple$$Type<boolean>)
get "conductorSeats"(): $Map<$BlockPos, $Couple<boolean>>
set "conductorSeats"(value: $Map$$Type<$BlockPos$$Type, $Couple$$Type<boolean>>)
get "portalCutoffMax"(): integer
set "portalCutoffMax"(value: integer)
get "portalCutoffMin"(): integer
set "portalCutoffMin"(value: integer)
get "soundQueue"(): $ArrivalSoundQueue
set "soundQueue"(value: $ArrivalSoundQueue$$Type)
get "assemblyDirection"(): $Direction
get "secondBogeyPos"(): $BlockPos
set "soundQueueOffset"(value: integer)
}
}

declare module "com.simibubi.create.api.equipment.goggles.IHaveCustomOverlayIcon" {
import { $ItemStack } from "net.minecraft.world.item.ItemStack"

export interface $IHaveCustomOverlayIcon {
"getIcon"(boolean0: boolean): $ItemStack
}

export namespace $IHaveCustomOverlayIcon {
const probejs$$marker: never
}
export abstract class $IHaveCustomOverlayIcon$$Static implements $IHaveCustomOverlayIcon {
}
}

declare module "com.simibubi.create.content.trains.bogey.BogeyRenderer" {
import { $CompoundTag$$Type } from "net.minecraft.nbt.CompoundTag"
import { $MultiBufferSource$$Type } from "net.minecraft.client.renderer.MultiBufferSource"
import { $PoseStack$$Type } from "com.mojang.blaze3d.vertex.PoseStack"

export interface $BogeyRenderer {
"render"(compoundTag0: $CompoundTag$$Type, float1: float, float2: float, poseStack3: $PoseStack$$Type, multiBufferSource4: $MultiBufferSource$$Type, int5: integer, int6: integer, boolean7: boolean): void
}

export namespace $BogeyRenderer {
const probejs$$marker: never
}
export abstract class $BogeyRenderer$$Static implements $BogeyRenderer {
}
}

declare module "com.simibubi.create.foundation.mixin.accessor.FontAccessor" {
import { $ResourceLocation } from "net.minecraft.resources.ResourceLocation"
import { $FontSet } from "net.minecraft.client.gui.font.FontSet"
import { $Function } from "java.util.function.Function"

export interface $FontAccessor {
"create$getFonts"(): $Function<$ResourceLocation, $FontSet>
}

export namespace $FontAccessor {
const probejs$$marker: never
}
export abstract class $FontAccessor$$Static implements $FontAccessor {
}
}

declare module "com.simibubi.create.api.contraption.storage.fluid.MountedFluidStorage" {
import { $IFluidHandler } from "net.minecraftforge.fluids.capability.IFluidHandler"
import { $Codec } from "com.mojang.serialization.Codec"
import { $BlockPos$$Type } from "net.minecraft.core.BlockPos"
import { $MountedFluidStorageType } from "com.simibubi.create.api.contraption.storage.fluid.MountedFluidStorageType"
import { $BlockState$$Type } from "net.minecraft.world.level.block.state.BlockState"
import { $FluidStack, $FluidStack$$Type } from "net.minecraftforge.fluids.FluidStack"
import { $Level$$Type } from "net.minecraft.world.level.Level"
import { $BlockEntity$$Type } from "net.minecraft.world.level.block.entity.BlockEntity"
import { $IFluidHandler$FluidAction$$Type } from "net.minecraftforge.fluids.capability.IFluidHandler$FluidAction"

export class $MountedFluidStorage implements $IFluidHandler {
static readonly "CODEC": $Codec<$MountedFluidStorage>
readonly "type": $MountedFluidStorageType<$MountedFluidStorage>

public "drain"(fluidStack0: $FluidStack$$Type, fluidAction1: $IFluidHandler$FluidAction$$Type): $FluidStack
public "drain"(int0: integer, fluidAction1: $IFluidHandler$FluidAction$$Type): $FluidStack
public "fill"(fluidStack0: $FluidStack$$Type, fluidAction1: $IFluidHandler$FluidAction$$Type): integer
public "getFluidInTank"(int0: integer): $FluidStack
public "getTankCapacity"(int0: integer): integer
public "getTanks"(): integer
public "isFluidValid"(int0: integer, fluidStack1: $FluidStack$$Type): boolean
public "unmount"(level0: $Level$$Type, blockState1: $BlockState$$Type, blockPos2: $BlockPos$$Type, blockEntity3: $BlockEntity$$Type): void
get "tanks"(): integer
}
}

declare module "com.simibubi.create.compat.computercraft.events.ComputerEvent" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $ComputerEvent {
}

export namespace $ComputerEvent {
const probejs$$marker: never
}
export abstract class $ComputerEvent$$Static implements $ComputerEvent {
}
}

declare module "com.simibubi.create.foundation.gui.widget.SelectionScrollInput" {
import { $List$$Type } from "java.util.List"
import { $Component, $Component$$Type } from "net.minecraft.network.chat.Component"
import { $GuiGraphics$$Type } from "net.minecraft.client.gui.GuiGraphics"
import { $AbstractWidget$$Type } from "net.minecraft.client.gui.components.AbstractWidget"
import { $ComponentPath } from "net.minecraft.client.gui.ComponentPath"
import { $ScrollInput } from "com.simibubi.create.foundation.gui.widget.ScrollInput"

export class $SelectionScrollInput extends $ScrollInput {
constructor(int0: integer, int1: integer, int2: integer, int3: integer)

public "charTyped"(char0: character, int1: integer): boolean
public "forOptions"(list0: $List$$Type<$Component$$Type>): $ScrollInput
public "getCurrentFocusPath"(): $ComponentPath
public "getOriginalMessageFancyMenu"(): $Component
public "keyPressed"(int0: integer, int1: integer, int2: integer): boolean
public "keyReleased"(int0: integer, int1: integer, int2: integer): boolean
public "mouseMoved"(double0: double, double1: double): void
public "renderCustomBackgroundFancyMenu"(abstractWidget0: $AbstractWidget$$Type, guiGraphics1: $GuiGraphics$$Type, int2: integer, int3: integer, int4: integer, int5: integer): boolean
public "setPosition"(int0: integer, int1: integer): void
public "stopCustomClickSoundFancyMenu"(): void
public "stopHoverSoundFancyMenu"(): void
public "tickFocusStateListenersFancyMenu"(boolean0: boolean): void
public "tickHoverOrFocusStateListenersFancyMenu"(boolean0: boolean): void
public "tickHoverStateListenersFancyMenu"(boolean0: boolean): void
get "currentFocusPath"(): $ComponentPath
get "originalMessageFancyMenu"(): $Component
}
}

declare module "com.simibubi.create.content.trains.bogey.AbstractBogeyBlockEntity" {
import { $CachedRenderBBBlockEntity } from "com.simibubi.create.foundation.blockEntity.CachedRenderBBBlockEntity"
import { $BlockState$$Type } from "net.minecraft.world.level.block.state.BlockState"
import { $ModelData } from "net.minecraftforge.client.model.data.ModelData"
import { $Capability$$Type } from "net.minecraftforge.common.capabilities.Capability"
import { $LazyOptional } from "net.minecraftforge.common.util.LazyOptional"
import { $Player$$Type } from "net.minecraft.world.entity.player.Player"
import { $TrackedData, $TrackedData$$Type } from "dev.corgitaco.dataanchor.data.TrackedData"
import { $CompoundTag, $CompoundTag$$Type } from "net.minecraft.nbt.CompoundTag"
import { $TrackedDataContainer } from "dev.corgitaco.dataanchor.data.TrackedDataContainer"
import { $BlockEntityType$$Type } from "net.minecraft.world.level.block.entity.BlockEntityType"
import { $BlockPos$$Type } from "net.minecraft.core.BlockPos"
import { $BogeyStyle, $BogeyStyle$$Type } from "com.simibubi.create.content.trains.bogey.BogeyStyle"
import { $TrackedDataRegistry$$Type } from "dev.corgitaco.dataanchor.data.registry.TrackedDataRegistry"

export class $AbstractBogeyBlockEntity extends $CachedRenderBBBlockEntity {
static readonly "BOGEY_DATA_KEY": string
static readonly "BOGEY_STYLE_KEY": string

constructor(blockEntityType0: $BlockEntityType$$Type<any>, blockPos1: $BlockPos$$Type, blockState2: $BlockState$$Type)

public "animate"(float0: float): void
public "deserializeNBT"(compoundTag0: $CompoundTag$$Type): void
public "getBogeyData"(): $CompoundTag
public "getCapability"<T>(capability0: $Capability$$Type<T>): $LazyOptional<T>
public "getDefaultStyle"(): $BogeyStyle
public "getModelData"(): $ModelData
public "getStyle"(): $BogeyStyle
public "getVirtualAngle"(float0: float): float
public "hasCustomOutlineRendering"(player0: $Player$$Type): boolean
public static "makeBasicContainer"<O, T extends $TrackedData<O>>(registry: $TrackedDataRegistry$$Type<O, T>, o: O, isClient: boolean): $TrackedDataContainer<O, T>
public static "makeBasicContainer"<O, T extends $TrackedData<O>>(registry: $TrackedDataRegistry$$Type<O, T>, o: O, isClient: boolean, lazyLoad: boolean): $TrackedDataContainer<O, T>
public "onLoad"(): void
public "requestModelDataUpdate"(): void
public "sdl$isDynamicLightEnabled"(): boolean
public "sdl$setDynamicLightEnabled"(enabled: boolean): void
public "setBogeyData"(compoundTag0: $CompoundTag$$Type): void
public "setBogeyStyle"(bogeyStyle0: $BogeyStyle$$Type): void
get "bogeyData"(): $CompoundTag
get "defaultStyle"(): $BogeyStyle
get "modelData"(): $ModelData
get "style"(): $BogeyStyle
set "bogeyData"(value: $CompoundTag$$Type)
set "bogeyStyle"(value: $BogeyStyle$$Type)
}
}

declare module "com.simibubi.create.foundation.networking.BlockEntityConfigurationPacket" {
import { $BlockPos$$Type } from "net.minecraft.core.BlockPos"
import { $FriendlyByteBuf$$Type } from "net.minecraft.network.FriendlyByteBuf"
import { $SimplePacketBase } from "com.simibubi.create.foundation.networking.SimplePacketBase"
import { $SyncedBlockEntity } from "com.simibubi.create.foundation.blockEntity.SyncedBlockEntity"

export class $BlockEntityConfigurationPacket<BE extends $SyncedBlockEntity = $SyncedBlockEntity> extends $SimplePacketBase {
constructor(blockPos0: $BlockPos$$Type)
constructor(friendlyByteBuf0: $FriendlyByteBuf$$Type)

}
}

declare module "com.simibubi.create.api.registry.SimpleRegistry$Provider" {
import { $TagKey$$Type } from "net.minecraft.tags.TagKey"
import { $Holder } from "net.minecraft.core.Holder"
import { $BlockEntityType, $BlockEntityType$$Type } from "net.minecraft.world.level.block.entity.BlockEntityType"
import { $EntityType, $EntityType$$Type } from "net.minecraft.world.entity.EntityType"
import { $Item, $Item$$Type } from "net.minecraft.world.item.Item"
import { $Block, $Block$$Type } from "net.minecraft.world.level.block.Block"
import { $Fluid, $Fluid$$Type } from "net.minecraft.world.level.material.Fluid"
import { $Function$$Type } from "java.util.function.Function"
import { $Runnable$$Type } from "java.lang.Runnable"

export interface $SimpleRegistry$Provider<K = any, V = any> {
"get"(k0: K): V
"onRegister"(runnable0: $Runnable$$Type): void
}

export namespace $SimpleRegistry$Provider {
function forBlockEntityTag<V>(tagKey0: $TagKey$$Type<$BlockEntityType$$Type<any>>, v1: V): $SimpleRegistry$Provider<$BlockEntityType<any>, V>
function forBlockTag<V>(tagKey0: $TagKey$$Type<$Block$$Type>, v1: V): $SimpleRegistry$Provider<$Block, V>
function forEntityTag<V>(tagKey0: $TagKey$$Type<$EntityType$$Type<any>>, v1: V): $SimpleRegistry$Provider<$EntityType<any>, V>
function forFluidTag<V>(tagKey0: $TagKey$$Type<$Fluid$$Type>, v1: V): $SimpleRegistry$Provider<$Fluid, V>
function forItemTag<V>(tagKey0: $TagKey$$Type<$Item$$Type>, v1: V): $SimpleRegistry$Provider<$Item, V>
function forTag<K, V>(tagKey0: $TagKey$$Type<K>, function1: $Function$$Type<K, $Holder<K>>, v2: V): $SimpleRegistry$Provider<K, V>
}
export abstract class $SimpleRegistry$Provider$$Static<K = any, V = any> implements $SimpleRegistry$Provider<K, V> {
static "forBlockEntityTag"<V>(tagKey0: $TagKey$$Type<$BlockEntityType$$Type<any>>, v1: V): $SimpleRegistry$Provider<$BlockEntityType<any>, V>
static "forBlockTag"<V>(tagKey0: $TagKey$$Type<$Block$$Type>, v1: V): $SimpleRegistry$Provider<$Block, V>
static "forEntityTag"<V>(tagKey0: $TagKey$$Type<$EntityType$$Type<any>>, v1: V): $SimpleRegistry$Provider<$EntityType<any>, V>
static "forFluidTag"<V>(tagKey0: $TagKey$$Type<$Fluid$$Type>, v1: V): $SimpleRegistry$Provider<$Fluid, V>
static "forItemTag"<V>(tagKey0: $TagKey$$Type<$Item$$Type>, v1: V): $SimpleRegistry$Provider<$Item, V>
static "forTag"<K, V>(tagKey0: $TagKey$$Type<K>, function1: $Function$$Type<K, $Holder<K>>, v2: V): $SimpleRegistry$Provider<K, V>
}
}

