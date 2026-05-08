declare module "com.lowdragmc.lowdraglib.utils.BlockInfo" {
import { $Component } from "net.minecraft.network.chat.Component"
import { $IPersistedSerializable } from "com.lowdragmc.lowdraglib.syncdata.IPersistedSerializable"
import { $BlockState, $BlockState$$Type } from "net.minecraft.world.level.block.state.BlockState"
import { $BlockEntity, $BlockEntity$$Type } from "net.minecraft.world.level.block.entity.BlockEntity"
import { $Consumer$$Type } from "java.util.function.Consumer"
import { $ConfiguratorGroup$$Type } from "com.lowdragmc.lowdraglib.gui.editor.configurator.ConfiguratorGroup"
import { $LDLRegister } from "com.lowdragmc.lowdraglib.gui.editor.annotation.LDLRegister"
import { $CompoundTag$$Type } from "net.minecraft.nbt.CompoundTag"
import { $IConfigurable } from "com.lowdragmc.lowdraglib.gui.editor.configurator.IConfigurable"
import { $BlockPos$$Type } from "net.minecraft.core.BlockPos"
import { $Block$$Type } from "net.minecraft.world.level.block.Block"
import { $ItemStack, $ItemStack$$Type } from "net.minecraft.world.item.ItemStack"
import { $Level$$Type } from "net.minecraft.world.level.Level"
import { $BlockAndTintGetter$$Type } from "net.minecraft.world.level.BlockAndTintGetter"

export class $BlockInfo implements $IPersistedSerializable, $IConfigurable {
static readonly "EMPTY": $BlockInfo

constructor()
constructor(blockState: $BlockState$$Type, hasBlockEntity: boolean)
constructor(blockState: $BlockState$$Type)
constructor(blockState: $BlockState$$Type, hasBlockEntity: boolean, itemStack: $ItemStack$$Type, postCreate: $Consumer$$Type<$BlockEntity$$Type>)
constructor(block: $Block$$Type)
constructor(blockState: $BlockState$$Type, postCreate: $Consumer$$Type<$BlockEntity$$Type>)

public "apply"(world: $Level$$Type, pos: $BlockPos$$Type): void
public "buildConfigurator"(father: $ConfiguratorGroup$$Type): void
public "clearBlockEntityCache"(): void
public "deserializeNBT"(tag: $CompoundTag$$Type): void
public static "fromBlock"(block: $Block$$Type): $BlockInfo
public static "fromBlockState"(state: $BlockState$$Type): $BlockInfo
public "getBlockEntity"(pos: $BlockPos$$Type): $BlockEntity
public "getBlockEntity"(level: $Level$$Type, pos: $BlockPos$$Type): $BlockEntity
public "getBlockState"(): $BlockState
public "getChatComponent"(): $Component
public "getItemStackForm"(): $ItemStack
public "getItemStackForm"(level: $BlockAndTintGetter$$Type, pos: $BlockPos$$Type): $ItemStack
public "getRegisterUI"(): $LDLRegister
public "getTranslateKey"(): string
public "group"(): string
public "hasBlockEntity"(): boolean
public "isLDLRegister"(): boolean
public "name"(): string
public "setBlockState"(blockState: $BlockState$$Type): void
public "setHasBlockEntity"(hasBlockEntity: boolean): void
public "setItemStack"(itemStack: $ItemStack$$Type): void
public "setPostCreate"(postCreate: $Consumer$$Type<$BlockEntity$$Type>): void
public "setTag"(tag: $CompoundTag$$Type): void
get "blockState"(): $BlockState
get "chatComponent"(): $Component
get "itemStackForm"(): $ItemStack
get "registerUI"(): $LDLRegister
get "translateKey"(): string
get "lDLRegister"(): boolean
set "blockState"(value: $BlockState$$Type)
set "itemStack"(value: $ItemStack$$Type)
set "postCreate"(value: $Consumer$$Type<$BlockEntity$$Type>)
set "tag"(value: $CompoundTag$$Type)
}
}

declare module "com.lowdragmc.lowdraglib.utils.interpolate.IEase" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $IEase {
"getInterpolation"(float0: float): float
}

export namespace $IEase {
const probejs$$marker: never
}
export abstract class $IEase$$Static implements $IEase {
}
}

declare module "com.lowdragmc.lowdraglib.utils.DummyWorld" {
import { $ExplosionJS } from "dev.latvian.mods.kubejs.level.ExplosionJS"
import { $ResourceLocation } from "net.minecraft.resources.ResourceLocation"
import { $LevelHeightAccessor } from "net.minecraft.world.level.LevelHeightAccessor"
import { $AABB$$Type } from "net.minecraft.world.phys.AABB"
import { $LivingEntity, $LivingEntity$$Type } from "net.minecraft.world.entity.LivingEntity"
import { $Direction$$Type } from "net.minecraft.core.Direction"
import { $ParticleOptions$$Type } from "net.minecraft.core.particles.ParticleOptions"
import { $BiFunction$$Type } from "java.util.function.BiFunction"
import { $ChunkSource } from "net.minecraft.world.level.chunk.ChunkSource"
import { $Registry } from "net.minecraft.core.Registry"
import { $ClipBlockStateContext$$Type } from "net.minecraft.world.level.ClipBlockStateContext"
import { $BlockContainerJS } from "dev.latvian.mods.kubejs.level.BlockContainerJS"
import { $TargetingConditions$$Type } from "net.minecraft.world.entity.ai.targeting.TargetingConditions"
import { $Holder } from "net.minecraft.core.Holder"
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
import { $CollisionContext$$Type } from "net.minecraft.world.phys.shapes.CollisionContext"
import { $EntityType$$Type } from "net.minecraft.world.entity.EntityType"
import { $BlockState, $BlockState$$Type } from "net.minecraft.world.level.block.state.BlockState"
import { $GameEvent$$Type } from "net.minecraft.world.level.gameevent.GameEvent"
import { $ClientLevel } from "net.minecraft.client.multiplayer.ClientLevel"
import { $Supplier, $Supplier$$Type } from "java.util.function.Supplier"
import { $Biome } from "net.minecraft.world.level.biome.Biome"
import { $Function$$Type } from "java.util.function.Function"
import { $Trackable } from "dev.uncandango.alltheleaks.mixin.Trackable"
import { $Iterable } from "java.lang.Iterable"
import { $LazyOptional } from "net.minecraftforge.common.util.LazyOptional"
import { $TrackedData, $TrackedData$$Type } from "dev.corgitaco.dataanchor.data.TrackedData"
import { $ColorResolver$$Type } from "net.minecraft.world.level.ColorResolver"
import { $ClipContext$$Type } from "net.minecraft.world.level.ClipContext"
import { $Fluid, $Fluid$$Type } from "net.minecraft.world.level.material.Fluid"
import { $WeakReference, $WeakReference$$Type } from "java.lang.ref.WeakReference"
import { $Difficulty } from "net.minecraft.world.Difficulty"
import { $ParticleManager, $ParticleManager$$Type } from "com.lowdragmc.lowdraglib.client.scene.ParticleManager"
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

export class $DummyWorld extends $Level {
constructor(level: $Level$$Type)

public "addFreshEntity"(entity0: $Entity$$Type): boolean
public "blockUpdated"(blockPos0: $BlockPos$$Type, block1: $Block$$Type): void
public "canSeeSky"(pos: $BlockPos$$Type): boolean
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
public "enabledFeatures"(): $FeatureFlagSet
public "findFreePosition"(entity0: $Entity$$Type, voxelShape1: $VoxelShape$$Type, vec32: $Vec3$$Type, double3: double, double4: double, double5: double): $Optional<$Vec3>
public "findSupportingBlock"(entity0: $Entity$$Type, aABB1: $AABB$$Type): $Optional<$BlockPos>
public "gameEvent"(event: $GameEvent$$Type, position: $Vec3$$Type, context: $GameEvent$Context$$Type): void
public "gameEvent"(pEntity: $Entity$$Type, pEvent: $GameEvent$$Type, pPos: $BlockPos$$Type): void
public "gameEvent"(gameEvent0: $GameEvent$$Type, blockPos1: $BlockPos$$Type, context2: $GameEvent$Context$$Type): void
public "gameEvent"(entity0: $Entity$$Type, gameEvent1: $GameEvent$$Type, vec32: $Vec3$$Type): void
public static "getAllLoadedEntities"(level: $Level$$Type): $Iterable<$Entity>
public "getAsClientWorld"(): $Supplier<$ClientLevel>
public "getBestNeighborSignal"(blockPos0: $BlockPos$$Type): integer
public "getBiome"(pPos: $BlockPos$$Type): $Holder<$Biome>
public "getBlock"(x: integer, y: integer, z: integer): $BlockContainerJS
public "getBlock"(blockEntity: $BlockEntity$$Type): $BlockContainerJS
public "getBlock"(pos: $BlockPos$$Type): $BlockContainerJS
public "getBlockCollisions"(entity0: $Entity$$Type, aABB1: $AABB$$Type): $Iterable<$VoxelShape>
public "getBlockEntity"<T extends $BlockEntity>(blockPos0: $BlockPos$$Type, blockEntityType1: $BlockEntityType$$Type<T>): $Optional<T>
public "getBlockFloorHeight"(voxelShape0: $VoxelShape$$Type, supplier1: $Supplier$$Type<$VoxelShape>): double
public "getBlockFloorHeight"(blockPos0: $BlockPos$$Type): double
public "getBlockState"(x: integer, y: integer, z: integer): $BlockState
public "getBlockStates"(aABB0: $AABB$$Type): $Stream<$BlockState>
public "getBlockStatesIfLoaded"(aABB0: $AABB$$Type): $Stream<$BlockState>
public "getBlockTicks"(): $LevelTickAccess<$Block>
public "getBlockTint"(blockPos0: $BlockPos$$Type, colorResolver1: $ColorResolver$$Type): integer
public "getBrightness"(pLightType: $LightLayer$$Type, pBlockPos: $BlockPos$$Type): integer
public "getCapability"<T>(capability0: $Capability$$Type<T>): $LazyOptional<T>
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
public "getLevel"(): $Level
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
public "getNoiseBiome"(pX: integer, pY: integer, pZ: integer): $Holder<$Biome>
public "getPartEntities"(): $Collection<$PartEntity<any>>
public "getParticleManager"(): $ParticleManager
public "getPathfindingCostFromLightLevels"(blockPos0: $BlockPos$$Type): float
public "getPlayerByUUID"(uUID0: $UUID$$Type): $Player
public "getPlayers"(): $EntityArrayList
public "getRawBrightness"(pos: $BlockPos$$Type, p_226659_2_: integer): integer
public "getShade"(direction: $Direction$$Type, b: boolean): float
public "getShade"(float0: float, float1: float, float2: float, boolean3: boolean): float
public "getSide"(): $ScriptType
public "getSignal"(blockPos0: $BlockPos$$Type, direction1: $Direction$$Type): integer
public static "getSummary"(): $Map<$Class<any>, $Map<$Class<any>, long>>
public "getTimeOfDay"(float0: float): float
public "getUncachedNoiseBiome"(pX: integer, pY: integer, pZ: integer): $Holder<$Biome>
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
public "levelEvent"(pPlayer: $Player$$Type, pType: integer, pPos: $BlockPos$$Type, pData: integer): void
public "levelEvent"(int0: integer, blockPos1: $BlockPos$$Type, int2: integer): void
public static "makeBasicContainer"<O, T extends $TrackedData<O>>(registry: $TrackedDataRegistry$$Type<O, T>, o: O, isClient: boolean): $TrackedDataContainer<O, T>
public static "makeBasicContainer"<O, T extends $TrackedData<O>>(registry: $TrackedDataRegistry$$Type<O, T>, o: O, isClient: boolean, lazyLoad: boolean): $TrackedDataContainer<O, T>
public "noCollision"(entity0: $Entity$$Type): boolean
public "noCollision"(aABB0: $AABB$$Type): boolean
public "playSound"(player0: $Player$$Type, blockPos1: $BlockPos$$Type, soundEvent2: $SoundEvent$$Type, soundSource3: $SoundSource$$Type): void
public "players"(): $List<$Player>
public "runCommand"(command: string): integer
public "runCommandSilent"(command: string): integer
public "scheduleTick"(blockPos0: $BlockPos$$Type, block1: $Block$$Type, int2: integer, tickPriority3: $TickPriority$$Type): void
public "scheduleTick"(blockPos0: $BlockPos$$Type, block1: $Block$$Type, int2: integer): void
public "scheduleTick"(blockPos0: $BlockPos$$Type, fluid1: $Fluid$$Type, int2: integer, tickPriority3: $TickPriority$$Type): void
public "scheduleTick"(blockPos0: $BlockPos$$Type, fluid1: $Fluid$$Type, int2: integer): void
public "self"(): $Level
public "setParticleManager"(particleManager: $ParticleManager$$Type): void
public "setStatusMessage"(message: $Component$$Type): void
public "spawnFireworks"(x: double, y: double, z: double, f: $FireworksJS$$Type): void
public "spawnParticles"(options: $ParticleOptions$$Type, overrideLimiter: boolean, x: double, y: double, z: double, vx: double, vy: double, vz: double, count: integer, speed: double): void
public static "startTracking"(object0: any): void
public "startTracking"(): void
public "tell"(message: $Component$$Type): void
public static "traverseBlocks"<T, C>(vec30: $Vec3$$Type, vec31: $Vec3$$Type, c2: C, biFunction3: $BiFunction$$Type<C, $BlockPos$$Type, T>, function4: $Function$$Type<C, T>): T
public "wrap"(): $WeakReference<$Trackable>
get "level"(): $WeakReference<$Level>
set "level"(value: $WeakReference$$Type<$Level$$Type>)
get "asClientWorld"(): $Supplier<$ClientLevel>
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
get "particleManager"(): $ParticleManager
get "side"(): $ScriptType
get "overworld"(): boolean
set "particleManager"(value: $ParticleManager$$Type)
set "statusMessage"(value: $Component$$Type)
}
}

declare module "com.lowdragmc.lowdraglib.utils.TrackedDummyWorld" {
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
import { $Map, $Map$$Type } from "java.util.Map"
import { $Vector3f } from "org.joml.Vector3f"
import { $GameEvent$Context$$Type } from "net.minecraft.world.level.gameevent.GameEvent$Context"
import { $TrackedDataRegistry$$Type } from "dev.corgitaco.dataanchor.data.registry.TrackedDataRegistry"
import { $DummyWorld } from "com.lowdragmc.lowdraglib.utils.DummyWorld"
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
import { $BlockPos, $BlockPos$$Type } from "net.minecraft.core.BlockPos"
import { $BlockEntityType$$Type } from "net.minecraft.world.level.block.entity.BlockEntityType"
import { $SoundEvent$$Type } from "net.minecraft.sounds.SoundEvent"
import { $Optional } from "java.util.Optional"
import { $Heightmap$Types$$Type } from "net.minecraft.world.level.levelgen.Heightmap$Types"
import { $ItemStack, $ItemStack$$Type } from "net.minecraft.world.item.ItemStack"
import { $Level, $Level$$Type } from "net.minecraft.world.level.Level"
import { $VoxelShape, $VoxelShape$$Type } from "net.minecraft.world.phys.shapes.VoxelShape"
import { $SoundSource$$Type } from "net.minecraft.sounds.SoundSource"
import { $CollisionContext$$Type } from "net.minecraft.world.phys.shapes.CollisionContext"
import { $EntityType$$Type } from "net.minecraft.world.entity.EntityType"
import { $BlockState, $BlockState$$Type } from "net.minecraft.world.level.block.state.BlockState"
import { $GameEvent$$Type } from "net.minecraft.world.level.gameevent.GameEvent"
import { $Supplier$$Type } from "java.util.function.Supplier"
import { $Function$$Type } from "java.util.function.Function"
import { $Trackable } from "dev.uncandango.alltheleaks.mixin.Trackable"
import { $Iterable } from "java.lang.Iterable"
import { $LazyOptional } from "net.minecraftforge.common.util.LazyOptional"
import { $TrackedData, $TrackedData$$Type } from "dev.corgitaco.dataanchor.data.TrackedData"
import { $ColorResolver$$Type } from "net.minecraft.world.level.ColorResolver"
import { $BlockInfo, $BlockInfo$$Type } from "com.lowdragmc.lowdraglib.utils.BlockInfo"
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

export class $TrackedDummyWorld extends $DummyWorld {
readonly "blockEntities": $Map<$BlockPos, $BlockEntity>
readonly "entities": $Map<integer, $Entity>
readonly "maxPos": $Vector3f
readonly "minPos": $Vector3f
readonly "proxyWorld": $WeakReference<$Level>
readonly "renderedBlocks": $Map<$BlockPos, $BlockInfo>

constructor(world: $Level$$Type)
constructor()

public "addBlock"(pos: $BlockPos$$Type, blockInfo: $BlockInfo$$Type): void
public "addBlocks"(renderedBlocks: $Map$$Type<$BlockPos$$Type, $BlockInfo$$Type>): void
public "addFreshEntity"(entity: $Entity$$Type): boolean
public "blockUpdated"(blockPos0: $BlockPos$$Type, block1: $Block$$Type): void
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
public "findFreePosition"(entity0: $Entity$$Type, voxelShape1: $VoxelShape$$Type, vec32: $Vec3$$Type, double3: double, double4: double, double5: double): $Optional<$Vec3>
public "findSupportingBlock"(entity0: $Entity$$Type, aABB1: $AABB$$Type): $Optional<$BlockPos>
public "gameEvent"(gameEvent0: $GameEvent$$Type, blockPos1: $BlockPos$$Type, context2: $GameEvent$Context$$Type): void
public "gameEvent"(entity0: $Entity$$Type, gameEvent1: $GameEvent$$Type, vec32: $Vec3$$Type): void
public "getAllEntities"(): $List<$Entity>
public static "getAllLoadedEntities"(level: $Level$$Type): $Iterable<$Entity>
public "getBestNeighborSignal"(blockPos0: $BlockPos$$Type): integer
public "getBlock"(x: integer, y: integer, z: integer): $BlockContainerJS
public "getBlock"(blockEntity: $BlockEntity$$Type): $BlockContainerJS
public "getBlock"(pos: $BlockPos$$Type): $BlockContainerJS
public "getBlockCollisions"(entity0: $Entity$$Type, aABB1: $AABB$$Type): $Iterable<$VoxelShape>
public "getBlockEntity"<T extends $BlockEntity>(blockPos0: $BlockPos$$Type, blockEntityType1: $BlockEntityType$$Type<T>): $Optional<T>
public "getBlockFloorHeight"(voxelShape0: $VoxelShape$$Type, supplier1: $Supplier$$Type<$VoxelShape>): double
public "getBlockFloorHeight"(blockPos0: $BlockPos$$Type): double
public "getBlockStates"(aABB0: $AABB$$Type): $Stream<$BlockState>
public "getBlockStatesIfLoaded"(aABB0: $AABB$$Type): $Stream<$BlockState>
public "getBlockTint"(blockPos: $BlockPos$$Type, colorResolver: $ColorResolver$$Type): integer
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
public "getMaxLocalRawBrightness"(blockPos0: $BlockPos$$Type): integer
public "getMaxLocalRawBrightness"(blockPos0: $BlockPos$$Type, int1: integer): integer
public "getMaxPos"(): $Vector3f
public "getMinPos"(): $Vector3f
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
public "getPartEntities"(): $Collection<$PartEntity<any>>
public "getPathfindingCostFromLightLevels"(blockPos0: $BlockPos$$Type): float
public "getPlayerByUUID"(uUID0: $UUID$$Type): $Player
public "getPlayers"(): $EntityArrayList
public "getRenderedBlocks"(): $Map<$BlockPos, $BlockInfo>
public "getShade"(float0: float, float1: float, float2: float, boolean3: boolean): float
public "getSide"(): $ScriptType
public "getSignal"(blockPos0: $BlockPos$$Type, direction1: $Direction$$Type): integer
public "getSize"(): $Vector3f
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
public static "isUnsafeItemNBTKey"(name: string): boolean
public "isWaterAt"(blockPos0: $BlockPos$$Type): boolean
public "levelEvent"(int0: integer, blockPos1: $BlockPos$$Type, int2: integer): void
public static "makeBasicContainer"<O, T extends $TrackedData<O>>(registry: $TrackedDataRegistry$$Type<O, T>, o: O, isClient: boolean): $TrackedDataContainer<O, T>
public static "makeBasicContainer"<O, T extends $TrackedData<O>>(registry: $TrackedDataRegistry$$Type<O, T>, o: O, isClient: boolean, lazyLoad: boolean): $TrackedDataContainer<O, T>
public "noCollision"(entity0: $Entity$$Type): boolean
public "noCollision"(aABB0: $AABB$$Type): boolean
public "playSound"(player0: $Player$$Type, blockPos1: $BlockPos$$Type, soundEvent2: $SoundEvent$$Type, soundSource3: $SoundSource$$Type): void
public "removeBlock"(pos: $BlockPos$$Type): $BlockInfo
public "runCommand"(command: string): integer
public "runCommandSilent"(command: string): integer
public "scheduleTick"(blockPos0: $BlockPos$$Type, block1: $Block$$Type, int2: integer, tickPriority3: $TickPriority$$Type): void
public "scheduleTick"(blockPos0: $BlockPos$$Type, block1: $Block$$Type, int2: integer): void
public "scheduleTick"(blockPos0: $BlockPos$$Type, fluid1: $Fluid$$Type, int2: integer, tickPriority3: $TickPriority$$Type): void
public "scheduleTick"(blockPos0: $BlockPos$$Type, fluid1: $Fluid$$Type, int2: integer): void
public "self"(): $Level
public "setInnerBlockEntity"(pBlockEntity: $BlockEntity$$Type): void
public "setRenderFilter"(renderFilter: $Predicate$$Type<$BlockPos$$Type>): void
public "setStatusMessage"(message: $Component$$Type): void
public "spawnFireworks"(x: double, y: double, z: double, f: $FireworksJS$$Type): void
public "spawnParticles"(options: $ParticleOptions$$Type, overrideLimiter: boolean, x: double, y: double, z: double, vx: double, vy: double, vz: double, count: integer, speed: double): void
public static "startTracking"(object0: any): void
public "startTracking"(): void
public "tell"(message: $Component$$Type): void
public "tickWorld"(): void
public static "traverseBlocks"<T, C>(vec30: $Vec3$$Type, vec31: $Vec3$$Type, c2: C, biFunction3: $BiFunction$$Type<C, $BlockPos$$Type, T>, function4: $Function$$Type<C, T>): T
public static "withUnsafeNBTDiscarded"(stack: $ItemStack$$Type): $ItemStack
public "wrap"(): $WeakReference<$Trackable>
get "allEntities"(): $List<$Entity>
get "difficulty"(): $Difficulty
get "dimension"(): $ResourceLocation
get "displayName"(): $Component
get "maxLightLevel"(): integer
get "modelDataManager"(): $ModelDataManager
get "moonBrightness"(): float
get "moonPhase"(): integer
get "name"(): $Component
get "partEntities"(): $Collection<$PartEntity<any>>
get "players"(): $EntityArrayList
get "side"(): $ScriptType
get "size"(): $Vector3f
get "overworld"(): boolean
set "innerBlockEntity"(value: $BlockEntity$$Type)
set "renderFilter"(value: $Predicate$$Type<$BlockPos$$Type>)
set "statusMessage"(value: $Component$$Type)
}
}

declare module "com.lowdragmc.lowdraglib.utils.Builder" {
import { $Class$$Type } from "java.lang.Class"

export class $Builder<T = any, B extends $Builder<T, B> = $Builder<T, B>> {
constructor()

public "aisle"(...data: string[]): B
public "bakeArray"(clazz: $Class$$Type<T>, defaultValue: T): T[][][]
public "shallowCopy"(): B
public "where"(symbol: character, value: T): B
}
}

declare module "com.lowdragmc.lowdraglib.utils.BlockPosFace" {
import { $BlockPos, $BlockPos$$Type } from "net.minecraft.core.BlockPos"
import { $Direction, $Direction$$Type } from "net.minecraft.core.Direction"

export class $BlockPosFace {
readonly "facing": $Direction
readonly "pos": $BlockPos

constructor(pos: $BlockPos$$Type, facing: $Direction$$Type)

}
}

declare module "com.lowdragmc.lowdraglib.utils.PositionedRect" {
import { $Position, $Position$$Type } from "com.lowdragmc.lowdraglib.utils.Position"
import { $Size, $Size$$Type } from "com.lowdragmc.lowdraglib.utils.Size"

export class $PositionedRect {
readonly "position": $Position
readonly "size": $Size

constructor(x: integer, y: integer, width: integer, height: integer)
constructor(position: $Position$$Type, size: $Size$$Type)
constructor(pos1: $Position$$Type, pos2: $Position$$Type)

public "getPosition"(): $Position
public "getSize"(): $Size
public "intersects"(other: $Position$$Type): boolean
public "intersects"(other: $PositionedRect$$Type): boolean
}
}

declare module "com.lowdragmc.lowdraglib.utils.Rect" {
import { $Position, $Position$$Type } from "com.lowdragmc.lowdraglib.utils.Position"
import { $Size$$Type } from "com.lowdragmc.lowdraglib.utils.Size"

export class $Rect {
readonly "down": integer
readonly "left": integer
readonly "right": integer
readonly "up": integer

public "downAnd"(x: integer): $Position
public "expand"(expand: integer): $Rect
public "expand"(x: integer, y: integer): $Rect
public "expandDown"(expand: integer): $Rect
public "expandLeft"(expand: integer): $Rect
public "expandRight"(expand: integer): $Rect
public "expandUp"(expand: integer): $Rect
public "getHeight"(): integer
public "getHeightCenter"(): integer
public "getWidth"(): integer
public "getWidthCenter"(): integer
public "horizontalExpand"(left: integer, right: integer): $Rect
public "horizontalExpand"(x: integer): $Rect
public "isCollide"(rect: $Rect$$Type): boolean
public "leftAnd"(y: integer): $Position
public "moveHorizontal"(delta: integer): $Rect
public "moveVertical"(delta: integer): $Rect
public static "of"(position: $Position$$Type, size: $Size$$Type): $Rect
public static "ofAbsolute"(left: integer, right: integer, up: integer, down: integer): $Rect
public static "ofRelative"(left: integer, width: integer, up: integer, height: integer): $Rect
public "rightAnd"(y: integer): $Position
public "toDownCenter"(): $Position
public "toLeftCenter"(): $Position
public "toLeftDown"(): $Position
public "toLeftUp"(): $Position
public "toRightCenter"(): $Position
public "toRightDown"(): $Position
public "toRightUp"(): $Position
public "toUpCenter"(): $Position
public "upAnd"(x: integer): $Position
public "verticalExpand"(y: integer): $Rect
public "verticalExpand"(up: integer, down: integer): $Rect
public "withDown"(down: integer): $Rect
public "withDownFixedHeight"(height: integer): $Rect
public "withLeft"(left: integer): $Rect
public "withLeftFixedWidth"(width: integer): $Rect
public "withRight"(right: integer): $Rect
public "withRightFixedWidth"(width: integer): $Rect
public "withUp"(up: integer): $Rect
public "withUpFixedHeight"(height: integer): $Rect
get "height"(): integer
get "heightCenter"(): integer
get "width"(): integer
get "widthCenter"(): integer
}
}

declare module "com.lowdragmc.lowdraglib.utils.Position" {
import { $Vec2 } from "net.minecraft.world.phys.Vec2"
import { $Size$$Type } from "com.lowdragmc.lowdraglib.utils.Size"
import { $Vector2f } from "org.joml.Vector2f"

export class $Position {
static readonly "ORIGIN": $Position
readonly "x": integer
readonly "y": integer

constructor(x: integer, y: integer)

public "add"(other: $Position$$Type): $Position
public "add"(size: $Size$$Type): $Position
public "add"(x: integer, y: integer): $Position
public "addX"(x: integer): $Position
public "addY"(y: integer): $Position
public "getX"(): integer
public "getY"(): integer
public static "of"(x: integer, y: integer): $Position
public "subtract"(other: $Position$$Type): $Position
public "vec2"(): $Vec2
public "vector2f"(): $Vector2f
}
}

declare module "com.lowdragmc.lowdraglib.utils.Size" {
import { $Position$$Type } from "com.lowdragmc.lowdraglib.utils.Position"

export class $Size {
static readonly "ZERO": $Size
readonly "height": integer
readonly "width": integer

constructor(width: integer, height: integer)

public "add"(width: integer, height: integer): $Size
public static "add"(position: $Position$$Type): $Size
public "add"(other: $Size$$Type): $Size
public "addHeight"(height: integer): $Size
public "addWidth"(width: integer): $Size
public "getHeight"(): integer
public "getWidth"(): integer
public static "of"(width: integer, height: integer): $Size
public "subtract"(other: $Size$$Type): $Size
}
}

