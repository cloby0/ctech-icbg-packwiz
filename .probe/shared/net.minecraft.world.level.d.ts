declare module "net.minecraft.world.level.Level$ExplosionInteraction" {
import { $Enum } from "java.lang.Enum"

export class $Level$ExplosionInteraction extends $Enum<$Level$ExplosionInteraction> {
static readonly "BLOCK": $Level$ExplosionInteraction
static readonly "MOB": $Level$ExplosionInteraction
static readonly "NONE": $Level$ExplosionInteraction
static readonly "TNT": $Level$ExplosionInteraction

public static "valueOf"(string0: string): $Level$ExplosionInteraction
public static "values"(): $Level$ExplosionInteraction[]
}
}

declare module "net.minecraft.world.level.BaseSpawner" {
import { $BaseSpawnerAccessor } from "com.aetherteam.aether.mixin.mixins.common.accessor.BaseSpawnerAccessor"
import { $Entity } from "net.minecraft.world.entity.Entity"
import { $CompoundTag, $CompoundTag$$Type } from "net.minecraft.nbt.CompoundTag"
import { $SimpleWeightedRandomList, $SimpleWeightedRandomList$$Type } from "net.minecraft.util.random.SimpleWeightedRandomList"
import { $BlockPos$$Type } from "net.minecraft.core.BlockPos"
import { $EntityType$$Type } from "net.minecraft.world.entity.EntityType"
import { $SpawnData, $SpawnData$$Type } from "net.minecraft.world.level.SpawnData"
import { $RandomSource$$Type } from "net.minecraft.util.RandomSource"
import { $Level$$Type } from "net.minecraft.world.level.Level"
import { $BlockEntity } from "net.minecraft.world.level.block.entity.BlockEntity"
import { $ServerLevel$$Type } from "net.minecraft.server.level.ServerLevel"

export class $BaseSpawner implements $BaseSpawnerAccessor {
static readonly "SPAWN_DATA_TAG": string

constructor()

public "broadcastEvent"(level0: $Level$$Type, blockPos1: $BlockPos$$Type, int2: integer): void
public "clientTick"(level0: $Level$$Type, blockPos1: $BlockPos$$Type): void
public "getOrCreateDisplayEntity"(level0: $Level$$Type, randomSource1: $RandomSource$$Type, blockPos2: $BlockPos$$Type): $Entity
public "getSpawnerBlockEntity"(): $BlockEntity
public "getSpawnerEntity"(): $Entity
public "getSpin"(): double
public "getoSpin"(): double
public "load"(level0: $Level$$Type, blockPos1: $BlockPos$$Type, compoundTag2: $CompoundTag$$Type): void
public "onEventTriggered"(level0: $Level$$Type, int1: integer): boolean
public "save"(compoundTag0: $CompoundTag$$Type): $CompoundTag
public "serverTick"(serverLevel0: $ServerLevel$$Type, blockPos1: $BlockPos$$Type): void
public "setEntityId"(entityType0: $EntityType$$Type<any>, level1: $Level$$Type, randomSource2: $RandomSource$$Type, blockPos3: $BlockPos$$Type): void
get "nextSpawnData"(): $SpawnData
set "nextSpawnData"(value: $SpawnData$$Type)
get "spawnPotentials"(): $SimpleWeightedRandomList<$SpawnData>
set "spawnPotentials"(value: $SimpleWeightedRandomList$$Type<$SpawnData$$Type>)
get "spawnerBlockEntity"(): $BlockEntity
get "spawnerEntity"(): $Entity
get "spin"(): double
get "oSpin"(): double
}
}

declare module "net.minecraft.world.level.SpawnData" {
import { $Codec } from "com.mojang.serialization.Codec"
import { $SimpleWeightedRandomList } from "net.minecraft.util.random.SimpleWeightedRandomList"
import { $CompoundTag, $CompoundTag$$Type } from "net.minecraft.nbt.CompoundTag"
import { $Optional, $Optional$$Type } from "java.util.Optional"
import { $Record } from "java.lang.Record"
import { $SpawnData$CustomSpawnRules, $SpawnData$CustomSpawnRules$$Type } from "net.minecraft.world.level.SpawnData$CustomSpawnRules"

export class $SpawnData extends $Record {
static readonly "CODEC": $Codec<$SpawnData>
static readonly "ENTITY_TAG": string
static readonly "LIST_CODEC": $Codec<$SimpleWeightedRandomList<$SpawnData>>

constructor()
constructor(compoundTag0: $CompoundTag$$Type, optional1: $Optional$$Type<$SpawnData$CustomSpawnRules$$Type>)

public "customSpawnRules"(): $Optional<$SpawnData$CustomSpawnRules>
public "entityToSpawn"(): $CompoundTag
public "getCustomSpawnRules"(): $Optional<$SpawnData$CustomSpawnRules>
public "getEntityToSpawn"(): $CompoundTag
}
}

declare module "net.minecraft.world.level.WorldGenLevel" {
import { $LevelHeightAccessor } from "net.minecraft.world.level.LevelHeightAccessor"
import { $AABB$$Type } from "net.minecraft.world.phys.AABB"
import { $LivingEntity, $LivingEntity$$Type } from "net.minecraft.world.entity.LivingEntity"
import { $Direction$$Type } from "net.minecraft.core.Direction"
import { $ParticleOptions$$Type } from "net.minecraft.core.particles.ParticleOptions"
import { $BiFunction$$Type } from "java.util.function.BiFunction"
import { $EntityTypeTest$$Type } from "net.minecraft.world.level.entity.EntityTypeTest"
import { $ChunkSource } from "net.minecraft.world.level.chunk.ChunkSource"
import { $Registry } from "net.minecraft.core.Registry"
import { $ClipBlockStateContext$$Type } from "net.minecraft.world.level.ClipBlockStateContext"
import { $BlockGetter } from "net.minecraft.world.level.BlockGetter"
import { $TargetingConditions$$Type } from "net.minecraft.world.entity.ai.targeting.TargetingConditions"
import { $MinecraftServer } from "net.minecraft.server.MinecraftServer"
import { $Holder } from "net.minecraft.core.Holder"
import { $LightLayer$$Type } from "net.minecraft.world.level.LightLayer"
import { $GameEvent$Context$$Type } from "net.minecraft.world.level.gameevent.GameEvent$Context"
import { $DifficultyInstance } from "net.minecraft.world.DifficultyInstance"
import { $BiomeManager } from "net.minecraft.world.level.biome.BiomeManager"
import { $Predicate$$Type } from "java.util.function.Predicate"
import { $BlockHitResult } from "net.minecraft.world.phys.BlockHitResult"
import { $RandomSource } from "net.minecraft.util.RandomSource"
import { $UUID$$Type } from "java.util.UUID"
import { $BlockEntity, $BlockEntity$$Type } from "net.minecraft.world.level.block.entity.BlockEntity"
import { $RegistryAccess } from "net.minecraft.core.RegistryAccess"
import { $ChunkAccess } from "net.minecraft.world.level.chunk.ChunkAccess"
import { $Player, $Player$$Type } from "net.minecraft.world.entity.player.Player"
import { $FeatureFlagSet } from "net.minecraft.world.flag.FeatureFlagSet"
import { $List, $List$$Type } from "java.util.List"
import { $Stream } from "java.util.stream.Stream"
import { $LevelLightEngine } from "net.minecraft.world.level.lighting.LevelLightEngine"
import { $BlockPos, $BlockPos$$Type } from "net.minecraft.core.BlockPos"
import { $BlockEntityType$$Type } from "net.minecraft.world.level.block.entity.BlockEntityType"
import { $SoundEvent$$Type } from "net.minecraft.sounds.SoundEvent"
import { $FluidState, $FluidState$$Type } from "net.minecraft.world.level.material.FluidState"
import { $Optional } from "java.util.Optional"
import { $Heightmap$Types$$Type } from "net.minecraft.world.level.levelgen.Heightmap$Types"
import { $VoxelShape, $VoxelShape$$Type } from "net.minecraft.world.phys.shapes.VoxelShape"
import { $SoundSource$$Type } from "net.minecraft.sounds.SoundSource"
import { $CollisionContext$$Type } from "net.minecraft.world.phys.shapes.CollisionContext"
import { $BlockState, $BlockState$$Type } from "net.minecraft.world.level.block.state.BlockState"
import { $GameEvent$$Type } from "net.minecraft.world.level.gameevent.GameEvent"
import { $DimensionType } from "net.minecraft.world.level.dimension.DimensionType"
import { $Biome } from "net.minecraft.world.level.biome.Biome"
import { $Supplier$$Type } from "java.util.function.Supplier"
import { $ServerLevel } from "net.minecraft.server.level.ServerLevel"
import { $Function$$Type } from "java.util.function.Function"
import { $Iterable } from "java.lang.Iterable"
import { $LevelData } from "net.minecraft.world.level.storage.LevelData"
import { $ColorResolver$$Type } from "net.minecraft.world.level.ColorResolver"
import { $ServerLevelAccessor } from "net.minecraft.world.level.ServerLevelAccessor"
import { $ClipContext$$Type } from "net.minecraft.world.level.ClipContext"
import { $WorldBorder } from "net.minecraft.world.level.border.WorldBorder"
import { $Fluid, $Fluid$$Type } from "net.minecraft.world.level.material.Fluid"
import { $Difficulty } from "net.minecraft.world.Difficulty"
import { $HolderLookup } from "net.minecraft.core.HolderLookup"
import { $ModelDataManager } from "net.minecraftforge.client.model.data.ModelDataManager"
import { $LevelTickAccess } from "net.minecraft.world.ticks.LevelTickAccess"
import { $ResourceKey$$Type } from "net.minecraft.resources.ResourceKey"
import { $TickPriority$$Type } from "net.minecraft.world.ticks.TickPriority"
import { $Entity, $Entity$$Type } from "net.minecraft.world.entity.Entity"
import { $Vec3, $Vec3$$Type } from "net.minecraft.world.phys.Vec3"
import { $Block, $Block$$Type } from "net.minecraft.world.level.block.Block"
import { $Class$$Type } from "java.lang.Class"
import { $ChunkStatus$$Type } from "net.minecraft.world.level.chunk.ChunkStatus"

export interface $WorldGenLevel extends $ServerLevelAccessor {
"addFreshEntity"(entity0: $Entity$$Type): boolean
"addFreshEntityWithPassengers"(entity0: $Entity$$Type): void
"addParticle"(particleOptions0: $ParticleOptions$$Type, double1: double, double2: double, double3: double, double4: double, double5: double, double6: double): void
"blockUpdated"(blockPos0: $BlockPos$$Type, block1: $Block$$Type): void
"canSeeSky"(blockPos0: $BlockPos$$Type): boolean
"canSeeSkyFromBelowWater"(blockPos0: $BlockPos$$Type): boolean
"clip"(clipContext0: $ClipContext$$Type): $BlockHitResult
"clipWithInteractionOverride"(vec30: $Vec3$$Type, vec31: $Vec3$$Type, blockPos2: $BlockPos$$Type, voxelShape3: $VoxelShape$$Type, blockState4: $BlockState$$Type): $BlockHitResult
"collidesWithSuffocatingBlock"(entity0: $Entity$$Type, aABB1: $AABB$$Type): boolean
"containsAnyLiquid"(aABB0: $AABB$$Type): boolean
"dayTime"(): long
"destroyBlock"(blockPos0: $BlockPos$$Type, boolean1: boolean, entity2: $Entity$$Type, int3: integer): boolean
"destroyBlock"(blockPos0: $BlockPos$$Type, boolean1: boolean): boolean
"destroyBlock"(blockPos0: $BlockPos$$Type, boolean1: boolean, entity2: $Entity$$Type): boolean
"dimensionType"(): $DimensionType
"enabledFeatures"(): $FeatureFlagSet
"ensureCanWrite"(blockPos0: $BlockPos$$Type): boolean
"findFreePosition"(entity0: $Entity$$Type, voxelShape1: $VoxelShape$$Type, vec32: $Vec3$$Type, double3: double, double4: double, double5: double): $Optional<$Vec3>
"findSupportingBlock"(entity0: $Entity$$Type, aABB1: $AABB$$Type): $Optional<$BlockPos>
"gameEvent"(gameEvent0: $GameEvent$$Type, vec31: $Vec3$$Type, context2: $GameEvent$Context$$Type): void
"gameEvent"(gameEvent0: $GameEvent$$Type, blockPos1: $BlockPos$$Type, context2: $GameEvent$Context$$Type): void
"gameEvent"(entity0: $Entity$$Type, gameEvent1: $GameEvent$$Type, blockPos2: $BlockPos$$Type): void
"gameEvent"(entity0: $Entity$$Type, gameEvent1: $GameEvent$$Type, vec32: $Vec3$$Type): void
"getBestNeighborSignal"(blockPos0: $BlockPos$$Type): integer
"getBiome"(blockPos0: $BlockPos$$Type): $Holder<$Biome>
"getBiomeManager"(): $BiomeManager
"getBlockCollisions"(entity0: $Entity$$Type, aABB1: $AABB$$Type): $Iterable<$VoxelShape>
"getBlockEntity"<T extends $BlockEntity>(blockPos0: $BlockPos$$Type, blockEntityType1: $BlockEntityType$$Type<T>): $Optional<T>
"getBlockEntity"(blockPos0: $BlockPos$$Type): $BlockEntity
"getBlockFloorHeight"(voxelShape0: $VoxelShape$$Type, supplier1: $Supplier$$Type<$VoxelShape>): double
"getBlockFloorHeight"(blockPos0: $BlockPos$$Type): double
"getBlockState"(blockPos0: $BlockPos$$Type): $BlockState
"getBlockStates"(aABB0: $AABB$$Type): $Stream<$BlockState>
"getBlockStatesIfLoaded"(aABB0: $AABB$$Type): $Stream<$BlockState>
"getBlockTicks"(): $LevelTickAccess<$Block>
"getBlockTint"(blockPos0: $BlockPos$$Type, colorResolver1: $ColorResolver$$Type): integer
"getBrightness"(lightLayer0: $LightLayer$$Type, blockPos1: $BlockPos$$Type): integer
"getChunk"(int0: integer, int1: integer, chunkStatus2: $ChunkStatus$$Type, boolean3: boolean): $ChunkAccess
"getChunk"(blockPos0: $BlockPos$$Type): $ChunkAccess
"getChunk"(int0: integer, int1: integer, chunkStatus2: $ChunkStatus$$Type): $ChunkAccess
"getChunk"(int0: integer, int1: integer): $ChunkAccess
"getChunkForCollisions"(int0: integer, int1: integer): $BlockGetter
"getChunkSource"(): $ChunkSource
"getCollisions"(entity0: $Entity$$Type, aABB1: $AABB$$Type): $Iterable<$VoxelShape>
"getControlInputSignal"(blockPos0: $BlockPos$$Type, direction1: $Direction$$Type, boolean2: boolean): integer
"getCurrentDifficultyAt"(blockPos0: $BlockPos$$Type): $DifficultyInstance
"getDifficulty"(): $Difficulty
"getDirectSignal"(blockPos0: $BlockPos$$Type, direction1: $Direction$$Type): integer
"getDirectSignalTo"(blockPos0: $BlockPos$$Type): integer
"getEntities"(entity0: $Entity$$Type, aABB1: $AABB$$Type): $List<$Entity>
"getEntities"<T extends $Entity>(entityTypeTest0: $EntityTypeTest$$Type<$Entity$$Type, T>, aABB1: $AABB$$Type, predicate2: $Predicate$$Type<T>): $List<T>
"getEntities"(entity0: $Entity$$Type, aABB1: $AABB$$Type, predicate2: $Predicate$$Type<$Entity$$Type>): $List<$Entity>
"getEntitiesOfClass"<T extends $Entity>(class0: $Class$$Type<T>, aABB1: $AABB$$Type): $List<T>
"getEntitiesOfClass"<T extends $Entity>(class0: $Class$$Type<T>, aABB1: $AABB$$Type, predicate2: $Predicate$$Type<T>): $List<T>
"getEntityCollisions"(entity0: $Entity$$Type, aABB1: $AABB$$Type): $List<$VoxelShape>
"getExistingBlockEntity"(blockPos0: $BlockPos$$Type): $BlockEntity
"getFluidState"(blockPos0: $BlockPos$$Type): $FluidState
"getFluidTicks"(): $LevelTickAccess<$Fluid>
"getHeight"(types0: $Heightmap$Types$$Type, int1: integer, int2: integer): integer
"getHeight"(): integer
"getHeightmapPos"(types0: $Heightmap$Types$$Type, blockPos1: $BlockPos$$Type): $BlockPos
"getLevel"(): $ServerLevel
"getLevelData"(): $LevelData
"getLightEmission"(blockPos0: $BlockPos$$Type): integer
"getLightEngine"(): $LevelLightEngine
/** @deprecated */
"getLightLevelDependentMagicValue"(blockPos0: $BlockPos$$Type): float
"getLoadedChunk"(int0: integer, int1: integer): $ChunkAccess
"getMaxBuildHeight"(): integer
"getMaxLightLevel"(): integer
"getMaxLocalRawBrightness"(blockPos0: $BlockPos$$Type): integer
"getMaxLocalRawBrightness"(blockPos0: $BlockPos$$Type, int1: integer): integer
"getMaxSection"(): integer
"getMinBuildHeight"(): integer
"getMinSection"(): integer
"getModelDataManager"(): $ModelDataManager
"getMoonBrightness"(): float
"getMoonPhase"(): integer
"getNearbyEntities"<T extends $LivingEntity>(class0: $Class$$Type<T>, targetingConditions1: $TargetingConditions$$Type, livingEntity2: $LivingEntity$$Type, aABB3: $AABB$$Type): $List<T>
"getNearbyPlayers"(targetingConditions0: $TargetingConditions$$Type, livingEntity1: $LivingEntity$$Type, aABB2: $AABB$$Type): $List<$Player>
"getNearestEntity"<T extends $LivingEntity>(list0: $List$$Type<T>, targetingConditions1: $TargetingConditions$$Type, livingEntity2: $LivingEntity$$Type, double3: double, double4: double, double5: double): T
"getNearestEntity"<T extends $LivingEntity>(class0: $Class$$Type<T>, targetingConditions1: $TargetingConditions$$Type, livingEntity2: $LivingEntity$$Type, double3: double, double4: double, double5: double, aABB6: $AABB$$Type): T
"getNearestPlayer"(double0: double, double1: double, double2: double, double3: double, predicate4: $Predicate$$Type<$Entity$$Type>): $Player
"getNearestPlayer"(entity0: $Entity$$Type, double1: double): $Player
"getNearestPlayer"(double0: double, double1: double, double2: double, double3: double, boolean4: boolean): $Player
"getNearestPlayer"(targetingConditions0: $TargetingConditions$$Type, livingEntity1: $LivingEntity$$Type): $Player
"getNearestPlayer"(targetingConditions0: $TargetingConditions$$Type, livingEntity1: $LivingEntity$$Type, double2: double, double3: double, double4: double): $Player
"getNearestPlayer"(targetingConditions0: $TargetingConditions$$Type, double1: double, double2: double, double3: double): $Player
"getNoiseBiome"(int0: integer, int1: integer, int2: integer): $Holder<$Biome>
"getPathfindingCostFromLightLevels"(blockPos0: $BlockPos$$Type): float
"getPlayerByUUID"(uUID0: $UUID$$Type): $Player
"getRandom"(): $RandomSource
"getRawBrightness"(blockPos0: $BlockPos$$Type, int1: integer): integer
/** @deprecated */
"getSeaLevel"(): integer
"getSectionIndex"(int0: integer): integer
"getSectionIndexFromSectionY"(int0: integer): integer
"getSectionYFromSectionIndex"(int0: integer): integer
"getSectionsCount"(): integer
"getSeed"(): long
"getServer"(): $MinecraftServer
"getShade"(direction0: $Direction$$Type, boolean1: boolean): float
"getShade"(float0: float, float1: float, float2: float, boolean3: boolean): float
"getSignal"(blockPos0: $BlockPos$$Type, direction1: $Direction$$Type): integer
"getSkyDarken"(): integer
"getTimeOfDay"(float0: float): float
"getUncachedNoiseBiome"(int0: integer, int1: integer, int2: integer): $Holder<$Biome>
"getWorldBorder"(): $WorldBorder
"hasChunk"(int0: integer, int1: integer): boolean
/** @deprecated */
"hasChunkAt"(blockPos0: $BlockPos$$Type): boolean
/** @deprecated */
"hasChunkAt"(int0: integer, int1: integer): boolean
/** @deprecated */
"hasChunksAt"(int0: integer, int1: integer, int2: integer, int3: integer, int4: integer, int5: integer): boolean
/** @deprecated */
"hasChunksAt"(blockPos0: $BlockPos$$Type, blockPos1: $BlockPos$$Type): boolean
/** @deprecated */
"hasChunksAt"(int0: integer, int1: integer, int2: integer, int3: integer): boolean
"hasNearbyAlivePlayer"(double0: double, double1: double, double2: double, double3: double): boolean
"hasNeighborSignal"(blockPos0: $BlockPos$$Type): boolean
"hasSignal"(blockPos0: $BlockPos$$Type, direction1: $Direction$$Type): boolean
"holderLookup"<T>(resourceKey0: $ResourceKey$$Type<$Registry<T>>): $HolderLookup<T>
"isAreaLoaded"(blockPos0: $BlockPos$$Type, int1: integer): boolean
"isBlockInLine"(clipBlockStateContext0: $ClipBlockStateContext$$Type): $BlockHitResult
"isClientSide"(): boolean
"isEmptyBlock"(blockPos0: $BlockPos$$Type): boolean
"isFluidAtPosition"(blockPos0: $BlockPos$$Type, predicate1: $Predicate$$Type<$FluidState$$Type>): boolean
"isOutsideBuildHeight"(blockPos0: $BlockPos$$Type): boolean
"isOutsideBuildHeight"(int0: integer): boolean
"isStateAtPosition"(blockPos0: $BlockPos$$Type, predicate1: $Predicate$$Type<$BlockState$$Type>): boolean
"isUnobstructed"(entity0: $Entity$$Type, voxelShape1: $VoxelShape$$Type): boolean
"isUnobstructed"(blockState0: $BlockState$$Type, blockPos1: $BlockPos$$Type, collisionContext2: $CollisionContext$$Type): boolean
"isUnobstructed"(entity0: $Entity$$Type): boolean
"isWaterAt"(blockPos0: $BlockPos$$Type): boolean
"levelEvent"(int0: integer, blockPos1: $BlockPos$$Type, int2: integer): void
"levelEvent"(player0: $Player$$Type, int1: integer, blockPos2: $BlockPos$$Type, int3: integer): void
"neighborShapeChanged"(direction0: $Direction$$Type, blockState1: $BlockState$$Type, blockPos2: $BlockPos$$Type, blockPos3: $BlockPos$$Type, int4: integer, int5: integer): void
"nextSubTickCount"(): long
"noCollision"(entity0: $Entity$$Type, aABB1: $AABB$$Type): boolean
"noCollision"(entity0: $Entity$$Type): boolean
"noCollision"(aABB0: $AABB$$Type): boolean
"playSound"(player0: $Player$$Type, blockPos1: $BlockPos$$Type, soundEvent2: $SoundEvent$$Type, soundSource3: $SoundSource$$Type, float4: float, float5: float): void
"playSound"(player0: $Player$$Type, blockPos1: $BlockPos$$Type, soundEvent2: $SoundEvent$$Type, soundSource3: $SoundSource$$Type): void
"players"(): $List<$Player>
"registryAccess"(): $RegistryAccess
"removeBlock"(blockPos0: $BlockPos$$Type, boolean1: boolean): boolean
"scheduleTick"(blockPos0: $BlockPos$$Type, block1: $Block$$Type, int2: integer, tickPriority3: $TickPriority$$Type): void
"scheduleTick"(blockPos0: $BlockPos$$Type, block1: $Block$$Type, int2: integer): void
"scheduleTick"(blockPos0: $BlockPos$$Type, fluid1: $Fluid$$Type, int2: integer, tickPriority3: $TickPriority$$Type): void
"scheduleTick"(blockPos0: $BlockPos$$Type, fluid1: $Fluid$$Type, int2: integer): void
"setBlock"(blockPos0: $BlockPos$$Type, blockState1: $BlockState$$Type, int2: integer): boolean
"setBlock"(blockPos0: $BlockPos$$Type, blockState1: $BlockState$$Type, int2: integer, int3: integer): boolean
"setCurrentlyGenerating"(supplier0: $Supplier$$Type<string>): void
get "biomeManager"(): $BiomeManager
get "blockTicks"(): $LevelTickAccess<$Block>
get "chunkSource"(): $ChunkSource
get "difficulty"(): $Difficulty
get "fluidTicks"(): $LevelTickAccess<$Fluid>
get "height"(): integer
get "level"(): $ServerLevel
get "levelData"(): $LevelData
get "lightEngine"(): $LevelLightEngine
get "maxBuildHeight"(): integer
get "maxLightLevel"(): integer
get "maxSection"(): integer
get "minBuildHeight"(): integer
get "minSection"(): integer
get "modelDataManager"(): $ModelDataManager
get "moonBrightness"(): float
get "moonPhase"(): integer
get "random"(): $RandomSource
get "seaLevel"(): integer
get "sectionsCount"(): integer
get "seed"(): long
get "server"(): $MinecraftServer
get "skyDarken"(): integer
get "worldBorder"(): $WorldBorder
get "clientSide"(): boolean
set "currentlyGenerating"(value: $Supplier$$Type<string>)
}

export namespace $WorldGenLevel {
function create(int0: integer, int1: integer): $LevelHeightAccessor
function traverseBlocks<T, C>(vec30: $Vec3$$Type, vec31: $Vec3$$Type, c2: C, biFunction3: $BiFunction$$Type<C, $BlockPos$$Type, T>, function4: $Function$$Type<C, T>): T
}
export abstract class $WorldGenLevel$$Static implements $WorldGenLevel {
static "create"(int0: integer, int1: integer): $LevelHeightAccessor
static "traverseBlocks"<T, C>(vec30: $Vec3$$Type, vec31: $Vec3$$Type, c2: C, biFunction3: $BiFunction$$Type<C, $BlockPos$$Type, T>, function4: $Function$$Type<C, T>): T
}
}

declare module "net.minecraft.world.level.ClipContext$Fluid" {
import { $Enum } from "java.lang.Enum"
import { $FluidState$$Type } from "net.minecraft.world.level.material.FluidState"

export class $ClipContext$Fluid extends $Enum<$ClipContext$Fluid> {
static readonly "ANY": $ClipContext$Fluid
static readonly "NONE": $ClipContext$Fluid
static readonly "SOURCE_ONLY": $ClipContext$Fluid
static readonly "WATER": $ClipContext$Fluid

public "canPick"(fluidState0: $FluidState$$Type): boolean
public static "valueOf"(string0: string): $ClipContext$Fluid
public static "values"(): $ClipContext$Fluid[]
}
}

declare module "net.minecraft.world.level.ServerLevelAccessor" {
import { $LevelHeightAccessor } from "net.minecraft.world.level.LevelHeightAccessor"
import { $AABB$$Type } from "net.minecraft.world.phys.AABB"
import { $LivingEntity, $LivingEntity$$Type } from "net.minecraft.world.entity.LivingEntity"
import { $Direction$$Type } from "net.minecraft.core.Direction"
import { $ParticleOptions$$Type } from "net.minecraft.core.particles.ParticleOptions"
import { $BiFunction$$Type } from "java.util.function.BiFunction"
import { $EntityTypeTest$$Type } from "net.minecraft.world.level.entity.EntityTypeTest"
import { $ChunkSource } from "net.minecraft.world.level.chunk.ChunkSource"
import { $Registry } from "net.minecraft.core.Registry"
import { $ClipBlockStateContext$$Type } from "net.minecraft.world.level.ClipBlockStateContext"
import { $BlockGetter } from "net.minecraft.world.level.BlockGetter"
import { $TargetingConditions$$Type } from "net.minecraft.world.entity.ai.targeting.TargetingConditions"
import { $MinecraftServer } from "net.minecraft.server.MinecraftServer"
import { $Holder } from "net.minecraft.core.Holder"
import { $LightLayer$$Type } from "net.minecraft.world.level.LightLayer"
import { $GameEvent$Context$$Type } from "net.minecraft.world.level.gameevent.GameEvent$Context"
import { $DifficultyInstance } from "net.minecraft.world.DifficultyInstance"
import { $BiomeManager } from "net.minecraft.world.level.biome.BiomeManager"
import { $Predicate$$Type } from "java.util.function.Predicate"
import { $BlockHitResult } from "net.minecraft.world.phys.BlockHitResult"
import { $RandomSource } from "net.minecraft.util.RandomSource"
import { $UUID$$Type } from "java.util.UUID"
import { $BlockEntity, $BlockEntity$$Type } from "net.minecraft.world.level.block.entity.BlockEntity"
import { $RegistryAccess } from "net.minecraft.core.RegistryAccess"
import { $ChunkAccess } from "net.minecraft.world.level.chunk.ChunkAccess"
import { $Player, $Player$$Type } from "net.minecraft.world.entity.player.Player"
import { $FeatureFlagSet } from "net.minecraft.world.flag.FeatureFlagSet"
import { $List, $List$$Type } from "java.util.List"
import { $Stream } from "java.util.stream.Stream"
import { $LevelLightEngine } from "net.minecraft.world.level.lighting.LevelLightEngine"
import { $BlockPos, $BlockPos$$Type } from "net.minecraft.core.BlockPos"
import { $BlockEntityType$$Type } from "net.minecraft.world.level.block.entity.BlockEntityType"
import { $SoundEvent$$Type } from "net.minecraft.sounds.SoundEvent"
import { $FluidState, $FluidState$$Type } from "net.minecraft.world.level.material.FluidState"
import { $Optional } from "java.util.Optional"
import { $LevelAccessor } from "net.minecraft.world.level.LevelAccessor"
import { $Heightmap$Types$$Type } from "net.minecraft.world.level.levelgen.Heightmap$Types"
import { $VoxelShape, $VoxelShape$$Type } from "net.minecraft.world.phys.shapes.VoxelShape"
import { $SoundSource$$Type } from "net.minecraft.sounds.SoundSource"
import { $CollisionContext$$Type } from "net.minecraft.world.phys.shapes.CollisionContext"
import { $BlockState, $BlockState$$Type } from "net.minecraft.world.level.block.state.BlockState"
import { $GameEvent$$Type } from "net.minecraft.world.level.gameevent.GameEvent"
import { $DimensionType } from "net.minecraft.world.level.dimension.DimensionType"
import { $Biome } from "net.minecraft.world.level.biome.Biome"
import { $Supplier$$Type } from "java.util.function.Supplier"
import { $ServerLevel } from "net.minecraft.server.level.ServerLevel"
import { $Function$$Type } from "java.util.function.Function"
import { $Iterable } from "java.lang.Iterable"
import { $LevelData } from "net.minecraft.world.level.storage.LevelData"
import { $ColorResolver$$Type } from "net.minecraft.world.level.ColorResolver"
import { $ClipContext$$Type } from "net.minecraft.world.level.ClipContext"
import { $WorldBorder } from "net.minecraft.world.level.border.WorldBorder"
import { $Fluid, $Fluid$$Type } from "net.minecraft.world.level.material.Fluid"
import { $Difficulty } from "net.minecraft.world.Difficulty"
import { $HolderLookup } from "net.minecraft.core.HolderLookup"
import { $ModelDataManager } from "net.minecraftforge.client.model.data.ModelDataManager"
import { $LevelTickAccess } from "net.minecraft.world.ticks.LevelTickAccess"
import { $ResourceKey$$Type } from "net.minecraft.resources.ResourceKey"
import { $TickPriority$$Type } from "net.minecraft.world.ticks.TickPriority"
import { $Entity, $Entity$$Type } from "net.minecraft.world.entity.Entity"
import { $Vec3, $Vec3$$Type } from "net.minecraft.world.phys.Vec3"
import { $Block, $Block$$Type } from "net.minecraft.world.level.block.Block"
import { $Class$$Type } from "java.lang.Class"
import { $ChunkStatus$$Type } from "net.minecraft.world.level.chunk.ChunkStatus"

export interface $ServerLevelAccessor extends $LevelAccessor {
"addFreshEntity"(entity0: $Entity$$Type): boolean
"addFreshEntityWithPassengers"(entity0: $Entity$$Type): void
"addParticle"(particleOptions0: $ParticleOptions$$Type, double1: double, double2: double, double3: double, double4: double, double5: double, double6: double): void
"blockUpdated"(blockPos0: $BlockPos$$Type, block1: $Block$$Type): void
"canSeeSky"(blockPos0: $BlockPos$$Type): boolean
"canSeeSkyFromBelowWater"(blockPos0: $BlockPos$$Type): boolean
"clip"(clipContext0: $ClipContext$$Type): $BlockHitResult
"clipWithInteractionOverride"(vec30: $Vec3$$Type, vec31: $Vec3$$Type, blockPos2: $BlockPos$$Type, voxelShape3: $VoxelShape$$Type, blockState4: $BlockState$$Type): $BlockHitResult
"collidesWithSuffocatingBlock"(entity0: $Entity$$Type, aABB1: $AABB$$Type): boolean
"containsAnyLiquid"(aABB0: $AABB$$Type): boolean
"dayTime"(): long
"destroyBlock"(blockPos0: $BlockPos$$Type, boolean1: boolean, entity2: $Entity$$Type, int3: integer): boolean
"destroyBlock"(blockPos0: $BlockPos$$Type, boolean1: boolean): boolean
"destroyBlock"(blockPos0: $BlockPos$$Type, boolean1: boolean, entity2: $Entity$$Type): boolean
"dimensionType"(): $DimensionType
"enabledFeatures"(): $FeatureFlagSet
"findFreePosition"(entity0: $Entity$$Type, voxelShape1: $VoxelShape$$Type, vec32: $Vec3$$Type, double3: double, double4: double, double5: double): $Optional<$Vec3>
"findSupportingBlock"(entity0: $Entity$$Type, aABB1: $AABB$$Type): $Optional<$BlockPos>
"gameEvent"(gameEvent0: $GameEvent$$Type, vec31: $Vec3$$Type, context2: $GameEvent$Context$$Type): void
"gameEvent"(gameEvent0: $GameEvent$$Type, blockPos1: $BlockPos$$Type, context2: $GameEvent$Context$$Type): void
"gameEvent"(entity0: $Entity$$Type, gameEvent1: $GameEvent$$Type, blockPos2: $BlockPos$$Type): void
"gameEvent"(entity0: $Entity$$Type, gameEvent1: $GameEvent$$Type, vec32: $Vec3$$Type): void
"getBestNeighborSignal"(blockPos0: $BlockPos$$Type): integer
"getBiome"(blockPos0: $BlockPos$$Type): $Holder<$Biome>
"getBiomeManager"(): $BiomeManager
"getBlockCollisions"(entity0: $Entity$$Type, aABB1: $AABB$$Type): $Iterable<$VoxelShape>
"getBlockEntity"<T extends $BlockEntity>(blockPos0: $BlockPos$$Type, blockEntityType1: $BlockEntityType$$Type<T>): $Optional<T>
"getBlockEntity"(blockPos0: $BlockPos$$Type): $BlockEntity
"getBlockFloorHeight"(voxelShape0: $VoxelShape$$Type, supplier1: $Supplier$$Type<$VoxelShape>): double
"getBlockFloorHeight"(blockPos0: $BlockPos$$Type): double
"getBlockState"(blockPos0: $BlockPos$$Type): $BlockState
"getBlockStates"(aABB0: $AABB$$Type): $Stream<$BlockState>
"getBlockStatesIfLoaded"(aABB0: $AABB$$Type): $Stream<$BlockState>
"getBlockTicks"(): $LevelTickAccess<$Block>
"getBlockTint"(blockPos0: $BlockPos$$Type, colorResolver1: $ColorResolver$$Type): integer
"getBrightness"(lightLayer0: $LightLayer$$Type, blockPos1: $BlockPos$$Type): integer
"getChunk"(int0: integer, int1: integer, chunkStatus2: $ChunkStatus$$Type, boolean3: boolean): $ChunkAccess
"getChunk"(blockPos0: $BlockPos$$Type): $ChunkAccess
"getChunk"(int0: integer, int1: integer, chunkStatus2: $ChunkStatus$$Type): $ChunkAccess
"getChunk"(int0: integer, int1: integer): $ChunkAccess
"getChunkForCollisions"(int0: integer, int1: integer): $BlockGetter
"getChunkSource"(): $ChunkSource
"getCollisions"(entity0: $Entity$$Type, aABB1: $AABB$$Type): $Iterable<$VoxelShape>
"getControlInputSignal"(blockPos0: $BlockPos$$Type, direction1: $Direction$$Type, boolean2: boolean): integer
"getCurrentDifficultyAt"(blockPos0: $BlockPos$$Type): $DifficultyInstance
"getDifficulty"(): $Difficulty
"getDirectSignal"(blockPos0: $BlockPos$$Type, direction1: $Direction$$Type): integer
"getDirectSignalTo"(blockPos0: $BlockPos$$Type): integer
"getEntities"(entity0: $Entity$$Type, aABB1: $AABB$$Type): $List<$Entity>
"getEntities"<T extends $Entity>(entityTypeTest0: $EntityTypeTest$$Type<$Entity$$Type, T>, aABB1: $AABB$$Type, predicate2: $Predicate$$Type<T>): $List<T>
"getEntities"(entity0: $Entity$$Type, aABB1: $AABB$$Type, predicate2: $Predicate$$Type<$Entity$$Type>): $List<$Entity>
"getEntitiesOfClass"<T extends $Entity>(class0: $Class$$Type<T>, aABB1: $AABB$$Type): $List<T>
"getEntitiesOfClass"<T extends $Entity>(class0: $Class$$Type<T>, aABB1: $AABB$$Type, predicate2: $Predicate$$Type<T>): $List<T>
"getEntityCollisions"(entity0: $Entity$$Type, aABB1: $AABB$$Type): $List<$VoxelShape>
"getExistingBlockEntity"(blockPos0: $BlockPos$$Type): $BlockEntity
"getFluidState"(blockPos0: $BlockPos$$Type): $FluidState
"getFluidTicks"(): $LevelTickAccess<$Fluid>
"getHeight"(types0: $Heightmap$Types$$Type, int1: integer, int2: integer): integer
"getHeight"(): integer
"getHeightmapPos"(types0: $Heightmap$Types$$Type, blockPos1: $BlockPos$$Type): $BlockPos
"getLevel"(): $ServerLevel
"getLevelData"(): $LevelData
"getLightEmission"(blockPos0: $BlockPos$$Type): integer
"getLightEngine"(): $LevelLightEngine
/** @deprecated */
"getLightLevelDependentMagicValue"(blockPos0: $BlockPos$$Type): float
"getLoadedChunk"(int0: integer, int1: integer): $ChunkAccess
"getMaxBuildHeight"(): integer
"getMaxLightLevel"(): integer
"getMaxLocalRawBrightness"(blockPos0: $BlockPos$$Type): integer
"getMaxLocalRawBrightness"(blockPos0: $BlockPos$$Type, int1: integer): integer
"getMaxSection"(): integer
"getMinBuildHeight"(): integer
"getMinSection"(): integer
"getModelDataManager"(): $ModelDataManager
"getMoonBrightness"(): float
"getMoonPhase"(): integer
"getNearbyEntities"<T extends $LivingEntity>(class0: $Class$$Type<T>, targetingConditions1: $TargetingConditions$$Type, livingEntity2: $LivingEntity$$Type, aABB3: $AABB$$Type): $List<T>
"getNearbyPlayers"(targetingConditions0: $TargetingConditions$$Type, livingEntity1: $LivingEntity$$Type, aABB2: $AABB$$Type): $List<$Player>
"getNearestEntity"<T extends $LivingEntity>(list0: $List$$Type<T>, targetingConditions1: $TargetingConditions$$Type, livingEntity2: $LivingEntity$$Type, double3: double, double4: double, double5: double): T
"getNearestEntity"<T extends $LivingEntity>(class0: $Class$$Type<T>, targetingConditions1: $TargetingConditions$$Type, livingEntity2: $LivingEntity$$Type, double3: double, double4: double, double5: double, aABB6: $AABB$$Type): T
"getNearestPlayer"(double0: double, double1: double, double2: double, double3: double, predicate4: $Predicate$$Type<$Entity$$Type>): $Player
"getNearestPlayer"(entity0: $Entity$$Type, double1: double): $Player
"getNearestPlayer"(double0: double, double1: double, double2: double, double3: double, boolean4: boolean): $Player
"getNearestPlayer"(targetingConditions0: $TargetingConditions$$Type, livingEntity1: $LivingEntity$$Type): $Player
"getNearestPlayer"(targetingConditions0: $TargetingConditions$$Type, livingEntity1: $LivingEntity$$Type, double2: double, double3: double, double4: double): $Player
"getNearestPlayer"(targetingConditions0: $TargetingConditions$$Type, double1: double, double2: double, double3: double): $Player
"getNoiseBiome"(int0: integer, int1: integer, int2: integer): $Holder<$Biome>
"getPathfindingCostFromLightLevels"(blockPos0: $BlockPos$$Type): float
"getPlayerByUUID"(uUID0: $UUID$$Type): $Player
"getRandom"(): $RandomSource
"getRawBrightness"(blockPos0: $BlockPos$$Type, int1: integer): integer
/** @deprecated */
"getSeaLevel"(): integer
"getSectionIndex"(int0: integer): integer
"getSectionIndexFromSectionY"(int0: integer): integer
"getSectionYFromSectionIndex"(int0: integer): integer
"getSectionsCount"(): integer
"getServer"(): $MinecraftServer
"getShade"(direction0: $Direction$$Type, boolean1: boolean): float
"getShade"(float0: float, float1: float, float2: float, boolean3: boolean): float
"getSignal"(blockPos0: $BlockPos$$Type, direction1: $Direction$$Type): integer
"getSkyDarken"(): integer
"getTimeOfDay"(float0: float): float
"getUncachedNoiseBiome"(int0: integer, int1: integer, int2: integer): $Holder<$Biome>
"getWorldBorder"(): $WorldBorder
"hasChunk"(int0: integer, int1: integer): boolean
/** @deprecated */
"hasChunkAt"(blockPos0: $BlockPos$$Type): boolean
/** @deprecated */
"hasChunkAt"(int0: integer, int1: integer): boolean
/** @deprecated */
"hasChunksAt"(int0: integer, int1: integer, int2: integer, int3: integer, int4: integer, int5: integer): boolean
/** @deprecated */
"hasChunksAt"(blockPos0: $BlockPos$$Type, blockPos1: $BlockPos$$Type): boolean
/** @deprecated */
"hasChunksAt"(int0: integer, int1: integer, int2: integer, int3: integer): boolean
"hasNearbyAlivePlayer"(double0: double, double1: double, double2: double, double3: double): boolean
"hasNeighborSignal"(blockPos0: $BlockPos$$Type): boolean
"hasSignal"(blockPos0: $BlockPos$$Type, direction1: $Direction$$Type): boolean
"holderLookup"<T>(resourceKey0: $ResourceKey$$Type<$Registry<T>>): $HolderLookup<T>
"isAreaLoaded"(blockPos0: $BlockPos$$Type, int1: integer): boolean
"isBlockInLine"(clipBlockStateContext0: $ClipBlockStateContext$$Type): $BlockHitResult
"isClientSide"(): boolean
"isEmptyBlock"(blockPos0: $BlockPos$$Type): boolean
"isFluidAtPosition"(blockPos0: $BlockPos$$Type, predicate1: $Predicate$$Type<$FluidState$$Type>): boolean
"isOutsideBuildHeight"(blockPos0: $BlockPos$$Type): boolean
"isOutsideBuildHeight"(int0: integer): boolean
"isStateAtPosition"(blockPos0: $BlockPos$$Type, predicate1: $Predicate$$Type<$BlockState$$Type>): boolean
"isUnobstructed"(entity0: $Entity$$Type, voxelShape1: $VoxelShape$$Type): boolean
"isUnobstructed"(blockState0: $BlockState$$Type, blockPos1: $BlockPos$$Type, collisionContext2: $CollisionContext$$Type): boolean
"isUnobstructed"(entity0: $Entity$$Type): boolean
"isWaterAt"(blockPos0: $BlockPos$$Type): boolean
"levelEvent"(int0: integer, blockPos1: $BlockPos$$Type, int2: integer): void
"levelEvent"(player0: $Player$$Type, int1: integer, blockPos2: $BlockPos$$Type, int3: integer): void
"neighborShapeChanged"(direction0: $Direction$$Type, blockState1: $BlockState$$Type, blockPos2: $BlockPos$$Type, blockPos3: $BlockPos$$Type, int4: integer, int5: integer): void
"nextSubTickCount"(): long
"noCollision"(entity0: $Entity$$Type, aABB1: $AABB$$Type): boolean
"noCollision"(entity0: $Entity$$Type): boolean
"noCollision"(aABB0: $AABB$$Type): boolean
"playSound"(player0: $Player$$Type, blockPos1: $BlockPos$$Type, soundEvent2: $SoundEvent$$Type, soundSource3: $SoundSource$$Type, float4: float, float5: float): void
"playSound"(player0: $Player$$Type, blockPos1: $BlockPos$$Type, soundEvent2: $SoundEvent$$Type, soundSource3: $SoundSource$$Type): void
"players"(): $List<$Player>
"registryAccess"(): $RegistryAccess
"removeBlock"(blockPos0: $BlockPos$$Type, boolean1: boolean): boolean
"scheduleTick"(blockPos0: $BlockPos$$Type, block1: $Block$$Type, int2: integer, tickPriority3: $TickPriority$$Type): void
"scheduleTick"(blockPos0: $BlockPos$$Type, block1: $Block$$Type, int2: integer): void
"scheduleTick"(blockPos0: $BlockPos$$Type, fluid1: $Fluid$$Type, int2: integer, tickPriority3: $TickPriority$$Type): void
"scheduleTick"(blockPos0: $BlockPos$$Type, fluid1: $Fluid$$Type, int2: integer): void
"setBlock"(blockPos0: $BlockPos$$Type, blockState1: $BlockState$$Type, int2: integer): boolean
"setBlock"(blockPos0: $BlockPos$$Type, blockState1: $BlockState$$Type, int2: integer, int3: integer): boolean
get "biomeManager"(): $BiomeManager
get "blockTicks"(): $LevelTickAccess<$Block>
get "chunkSource"(): $ChunkSource
get "difficulty"(): $Difficulty
get "fluidTicks"(): $LevelTickAccess<$Fluid>
get "height"(): integer
get "level"(): $ServerLevel
get "levelData"(): $LevelData
get "lightEngine"(): $LevelLightEngine
get "maxBuildHeight"(): integer
get "maxLightLevel"(): integer
get "maxSection"(): integer
get "minBuildHeight"(): integer
get "minSection"(): integer
get "modelDataManager"(): $ModelDataManager
get "moonBrightness"(): float
get "moonPhase"(): integer
get "random"(): $RandomSource
get "seaLevel"(): integer
get "sectionsCount"(): integer
get "server"(): $MinecraftServer
get "skyDarken"(): integer
get "worldBorder"(): $WorldBorder
get "clientSide"(): boolean
}

export namespace $ServerLevelAccessor {
function create(int0: integer, int1: integer): $LevelHeightAccessor
function traverseBlocks<T, C>(vec30: $Vec3$$Type, vec31: $Vec3$$Type, c2: C, biFunction3: $BiFunction$$Type<C, $BlockPos$$Type, T>, function4: $Function$$Type<C, T>): T
}
export abstract class $ServerLevelAccessor$$Static implements $ServerLevelAccessor {
static "create"(int0: integer, int1: integer): $LevelHeightAccessor
static "traverseBlocks"<T, C>(vec30: $Vec3$$Type, vec31: $Vec3$$Type, c2: C, biFunction3: $BiFunction$$Type<C, $BlockPos$$Type, T>, function4: $Function$$Type<C, T>): T
}
}

declare module "net.minecraft.world.level.GameRules$Type" {
import { $RequiredArgumentBuilder } from "com.mojang.brigadier.builder.RequiredArgumentBuilder"
import { $GameRules$Value } from "net.minecraft.world.level.GameRules$Value"
import { $GameRules$GameRuleTypeVisitor$$Type } from "net.minecraft.world.level.GameRules$GameRuleTypeVisitor"
import { $CommandSourceStack } from "net.minecraft.commands.CommandSourceStack"
import { $GameRules$Key$$Type } from "net.minecraft.world.level.GameRules$Key"

export class $GameRules$Type<T extends $GameRules$Value<T> = $GameRules$Value<T>> {
public "callVisitor"(gameRuleTypeVisitor0: $GameRules$GameRuleTypeVisitor$$Type, key1: $GameRules$Key$$Type<T>): void
public "createArgument"(string0: string): $RequiredArgumentBuilder<$CommandSourceStack, any>
public "createRule"(): T
}
}

declare module "net.minecraft.world.level.BaseCommandBlock" {
import { $CompoundTag, $CompoundTag$$Type } from "net.minecraft.nbt.CompoundTag"
import { $Component, $Component$$Type } from "net.minecraft.network.chat.Component"
import { $CommandSourceStack } from "net.minecraft.commands.CommandSourceStack"
import { $Vec3 } from "net.minecraft.world.phys.Vec3"
import { $InteractionResult } from "net.minecraft.world.InteractionResult"
import { $CommandSource } from "net.minecraft.commands.CommandSource"
import { $Level$$Type } from "net.minecraft.world.level.Level"
import { $ServerLevel } from "net.minecraft.server.level.ServerLevel"
import { $Player$$Type } from "net.minecraft.world.entity.player.Player"

export class $BaseCommandBlock implements $CommandSource {
constructor()

public "acceptsFailure"(): boolean
public "acceptsSuccess"(): boolean
public "alwaysAccepts"(): boolean
public "createCommandSourceStack"(): $CommandSourceStack
public "getCommand"(): string
public "getLastOutput"(): $Component
public "getLevel"(): $ServerLevel
public "getName"(): $Component
public "getPosition"(): $Vec3
public "getSuccessCount"(): integer
public "isTrackOutput"(): boolean
public "isValid"(): boolean
public "load"(compoundTag0: $CompoundTag$$Type): void
public "onUpdated"(): void
public "performCommand"(level0: $Level$$Type): boolean
public "save"(compoundTag0: $CompoundTag$$Type): $CompoundTag
public "sendSystemMessage"(component0: $Component$$Type): void
public "setCommand"(string0: string): void
public "setLastOutput"(component0: $Component$$Type): void
public "setName"(component0: $Component$$Type): void
public "setSuccessCount"(int0: integer): void
public "setTrackOutput"(boolean0: boolean): void
public "shouldInformAdmins"(): boolean
public "usedBy"(player0: $Player$$Type): $InteractionResult
get "command"(): string
get "lastOutput"(): $Component
get "level"(): $ServerLevel
get "name"(): $Component
get "position"(): $Vec3
get "successCount"(): integer
get "trackOutput"(): boolean
get "valid"(): boolean
set "command"(value: string)
set "lastOutput"(value: $Component$$Type)
set "name"(value: $Component$$Type)
set "successCount"(value: integer)
set "trackOutput"(value: boolean)
}
}

declare module "net.minecraft.world.level.GameRules" {
import { $MinecraftServer$$Type } from "net.minecraft.server.MinecraftServer"
import { $CompoundTag } from "net.minecraft.nbt.CompoundTag"
import { $GameRules$Value, $GameRules$Value$$Type } from "net.minecraft.world.level.GameRules$Value"
import { $GameRules$GameRuleTypeVisitor$$Type } from "net.minecraft.world.level.GameRules$GameRuleTypeVisitor"
import { $GameRules$Type$$Type } from "net.minecraft.world.level.GameRules$Type"
import { $GameRulesKJS } from "dev.latvian.mods.kubejs.core.GameRulesKJS"
import { $GameRules$IntegerValue, $GameRules$IntegerValue$$Type } from "net.minecraft.world.level.GameRules$IntegerValue"
import { $GameRules$BooleanValue, $GameRules$BooleanValue$$Type } from "net.minecraft.world.level.GameRules$BooleanValue"
import { $DynamicLike$$Type } from "com.mojang.serialization.DynamicLike"
import { $GameRules$Category$$Type } from "net.minecraft.world.level.GameRules$Category"
import { $GameRules$Key, $GameRules$Key$$Type } from "net.minecraft.world.level.GameRules$Key"

export class $GameRules implements $GameRulesKJS {
static readonly "DEFAULT_RANDOM_TICK_SPEED": integer
static readonly "RULE_ANNOUNCE_ADVANCEMENTS": $GameRules$Key<$GameRules$BooleanValue>
static readonly "RULE_BLOCK_EXPLOSION_DROP_DECAY": $GameRules$Key<$GameRules$BooleanValue>
static readonly "RULE_COMMANDBLOCKOUTPUT": $GameRules$Key<$GameRules$BooleanValue>
static readonly "RULE_COMMAND_MODIFICATION_BLOCK_LIMIT": $GameRules$Key<$GameRules$IntegerValue>
static readonly "RULE_DAYLIGHT": $GameRules$Key<$GameRules$BooleanValue>
static readonly "RULE_DISABLE_ELYTRA_MOVEMENT_CHECK": $GameRules$Key<$GameRules$BooleanValue>
static readonly "RULE_DISABLE_RAIDS": $GameRules$Key<$GameRules$BooleanValue>
static readonly "RULE_DOBLOCKDROPS": $GameRules$Key<$GameRules$BooleanValue>
static readonly "RULE_DOENTITYDROPS": $GameRules$Key<$GameRules$BooleanValue>
static readonly "RULE_DOFIRETICK": $GameRules$Key<$GameRules$BooleanValue>
static readonly "RULE_DOINSOMNIA": $GameRules$Key<$GameRules$BooleanValue>
static readonly "RULE_DOMOBLOOT": $GameRules$Key<$GameRules$BooleanValue>
static readonly "RULE_DOMOBSPAWNING": $GameRules$Key<$GameRules$BooleanValue>
static readonly "RULE_DO_IMMEDIATE_RESPAWN": $GameRules$Key<$GameRules$BooleanValue>
static readonly "RULE_DO_PATROL_SPAWNING": $GameRules$Key<$GameRules$BooleanValue>
static readonly "RULE_DO_TRADER_SPAWNING": $GameRules$Key<$GameRules$BooleanValue>
static readonly "RULE_DO_VINES_SPREAD": $GameRules$Key<$GameRules$BooleanValue>
static readonly "RULE_DO_WARDEN_SPAWNING": $GameRules$Key<$GameRules$BooleanValue>
static readonly "RULE_DROWNING_DAMAGE": $GameRules$Key<$GameRules$BooleanValue>
static readonly "RULE_FALL_DAMAGE": $GameRules$Key<$GameRules$BooleanValue>
static readonly "RULE_FIRE_DAMAGE": $GameRules$Key<$GameRules$BooleanValue>
static readonly "RULE_FORGIVE_DEAD_PLAYERS": $GameRules$Key<$GameRules$BooleanValue>
static readonly "RULE_FREEZE_DAMAGE": $GameRules$Key<$GameRules$BooleanValue>
static readonly "RULE_GLOBAL_SOUND_EVENTS": $GameRules$Key<$GameRules$BooleanValue>
static readonly "RULE_KEEPINVENTORY": $GameRules$Key<$GameRules$BooleanValue>
static readonly "RULE_LAVA_SOURCE_CONVERSION": $GameRules$Key<$GameRules$BooleanValue>
static readonly "RULE_LIMITED_CRAFTING": $GameRules$Key<$GameRules$BooleanValue>
static readonly "RULE_LOGADMINCOMMANDS": $GameRules$Key<$GameRules$BooleanValue>
static readonly "RULE_MAX_COMMAND_CHAIN_LENGTH": $GameRules$Key<$GameRules$IntegerValue>
static readonly "RULE_MAX_ENTITY_CRAMMING": $GameRules$Key<$GameRules$IntegerValue>
static readonly "RULE_MOBGRIEFING": $GameRules$Key<$GameRules$BooleanValue>
static readonly "RULE_MOB_EXPLOSION_DROP_DECAY": $GameRules$Key<$GameRules$BooleanValue>
static readonly "RULE_NATURAL_REGENERATION": $GameRules$Key<$GameRules$BooleanValue>
static readonly "RULE_PLAYERS_SLEEPING_PERCENTAGE": $GameRules$Key<$GameRules$IntegerValue>
static readonly "RULE_RANDOMTICKING": $GameRules$Key<$GameRules$IntegerValue>
static readonly "RULE_REDUCEDDEBUGINFO": $GameRules$Key<$GameRules$BooleanValue>
static readonly "RULE_SENDCOMMANDFEEDBACK": $GameRules$Key<$GameRules$BooleanValue>
static readonly "RULE_SHOWDEATHMESSAGES": $GameRules$Key<$GameRules$BooleanValue>
static readonly "RULE_SNOW_ACCUMULATION_HEIGHT": $GameRules$Key<$GameRules$IntegerValue>
static readonly "RULE_SPAWN_RADIUS": $GameRules$Key<$GameRules$IntegerValue>
static readonly "RULE_SPECTATORSGENERATECHUNKS": $GameRules$Key<$GameRules$BooleanValue>
static readonly "RULE_TNT_EXPLOSION_DROP_DECAY": $GameRules$Key<$GameRules$BooleanValue>
static readonly "RULE_UNIVERSAL_ANGER": $GameRules$Key<$GameRules$BooleanValue>
static readonly "RULE_WATER_SOURCE_CONVERSION": $GameRules$Key<$GameRules$BooleanValue>
static readonly "RULE_WEATHER_CYCLE": $GameRules$Key<$GameRules$BooleanValue>

constructor(dynamicLike0: $DynamicLike$$Type<any>)
constructor()

public "assignFrom"(gameRules0: $GameRules$$Type, minecraftServer1: $MinecraftServer$$Type): void
public "copy"(): $GameRules
public "createTag"(): $CompoundTag
public "get"(rule: string): $GameRules$Value
public "getBoolean"(key0: $GameRules$Key$$Type<$GameRules$BooleanValue$$Type>): boolean
public "getInt"(key0: $GameRules$Key$$Type<$GameRules$IntegerValue$$Type>): integer
public "getRule"<T extends $GameRules$Value<T>>(key0: $GameRules$Key$$Type<T>): T
public "kjs$getBoolean"(rule: string): boolean
public "kjs$getInt"(rule: string): integer
public "kjs$getString"(rule: string): string
public static "register"<T extends $GameRules$Value<T>>(string0: string, category1: $GameRules$Category$$Type, type2: $GameRules$Type$$Type<T>): $GameRules$Key<T>
public "set"(rule: string, value: string): void
public static "visitGameRuleTypes"(gameRuleTypeVisitor0: $GameRules$GameRuleTypeVisitor$$Type): void
}
}

declare module "net.minecraft.world.level.BlockAndTintGetter" {
import { $LevelHeightAccessor } from "net.minecraft.world.level.LevelHeightAccessor"
import { $AABB$$Type } from "net.minecraft.world.phys.AABB"
import { $Direction$$Type } from "net.minecraft.core.Direction"
import { $BiFunction$$Type } from "java.util.function.BiFunction"
import { $BlockState, $BlockState$$Type } from "net.minecraft.world.level.block.state.BlockState"
import { $Supplier$$Type } from "java.util.function.Supplier"
import { $Function$$Type } from "java.util.function.Function"
import { $ColorResolver$$Type } from "net.minecraft.world.level.ColorResolver"
import { $ClipBlockStateContext$$Type } from "net.minecraft.world.level.ClipBlockStateContext"
import { $IForgeBlockAndTintGetter } from "net.minecraftforge.client.extensions.IForgeBlockAndTintGetter"
import { $BlockGetter } from "net.minecraft.world.level.BlockGetter"
import { $ClipContext$$Type } from "net.minecraft.world.level.ClipContext"
import { $LightLayer$$Type } from "net.minecraft.world.level.LightLayer"
import { $BlockHitResult } from "net.minecraft.world.phys.BlockHitResult"
import { $ModelDataManager } from "net.minecraftforge.client.model.data.ModelDataManager"
import { $BlockEntity, $BlockEntity$$Type } from "net.minecraft.world.level.block.entity.BlockEntity"
import { $Stream } from "java.util.stream.Stream"
import { $LevelLightEngine } from "net.minecraft.world.level.lighting.LevelLightEngine"
import { $BlockPos$$Type } from "net.minecraft.core.BlockPos"
import { $Vec3$$Type } from "net.minecraft.world.phys.Vec3"
import { $BlockEntityType$$Type } from "net.minecraft.world.level.block.entity.BlockEntityType"
import { $FluidState } from "net.minecraft.world.level.material.FluidState"
import { $Optional } from "java.util.Optional"
import { $VoxelShape, $VoxelShape$$Type } from "net.minecraft.world.phys.shapes.VoxelShape"

export interface $BlockAndTintGetter extends $BlockGetter, $IForgeBlockAndTintGetter {
"canSeeSky"(blockPos0: $BlockPos$$Type): boolean
"clip"(clipContext0: $ClipContext$$Type): $BlockHitResult
"clipWithInteractionOverride"(vec30: $Vec3$$Type, vec31: $Vec3$$Type, blockPos2: $BlockPos$$Type, voxelShape3: $VoxelShape$$Type, blockState4: $BlockState$$Type): $BlockHitResult
"getBlockEntity"<T extends $BlockEntity>(blockPos0: $BlockPos$$Type, blockEntityType1: $BlockEntityType$$Type<T>): $Optional<T>
"getBlockEntity"(blockPos0: $BlockPos$$Type): $BlockEntity
"getBlockFloorHeight"(voxelShape0: $VoxelShape$$Type, supplier1: $Supplier$$Type<$VoxelShape>): double
"getBlockFloorHeight"(blockPos0: $BlockPos$$Type): double
"getBlockState"(blockPos0: $BlockPos$$Type): $BlockState
"getBlockStates"(aABB0: $AABB$$Type): $Stream<$BlockState>
"getBlockTint"(blockPos0: $BlockPos$$Type, colorResolver1: $ColorResolver$$Type): integer
"getBrightness"(lightLayer0: $LightLayer$$Type, blockPos1: $BlockPos$$Type): integer
"getExistingBlockEntity"(blockPos0: $BlockPos$$Type): $BlockEntity
"getFluidState"(blockPos0: $BlockPos$$Type): $FluidState
"getHeight"(): integer
"getLightEmission"(blockPos0: $BlockPos$$Type): integer
"getLightEngine"(): $LevelLightEngine
"getMaxBuildHeight"(): integer
"getMaxLightLevel"(): integer
"getMaxSection"(): integer
"getMinBuildHeight"(): integer
"getMinSection"(): integer
"getModelDataManager"(): $ModelDataManager
"getRawBrightness"(blockPos0: $BlockPos$$Type, int1: integer): integer
"getSectionIndex"(int0: integer): integer
"getSectionIndexFromSectionY"(int0: integer): integer
"getSectionYFromSectionIndex"(int0: integer): integer
"getSectionsCount"(): integer
"getShade"(direction0: $Direction$$Type, boolean1: boolean): float
"getShade"(float0: float, float1: float, float2: float, boolean3: boolean): float
"isBlockInLine"(clipBlockStateContext0: $ClipBlockStateContext$$Type): $BlockHitResult
"isOutsideBuildHeight"(blockPos0: $BlockPos$$Type): boolean
"isOutsideBuildHeight"(int0: integer): boolean
get "height"(): integer
get "lightEngine"(): $LevelLightEngine
get "maxBuildHeight"(): integer
get "maxLightLevel"(): integer
get "maxSection"(): integer
get "minBuildHeight"(): integer
get "minSection"(): integer
get "modelDataManager"(): $ModelDataManager
get "sectionsCount"(): integer
}

export namespace $BlockAndTintGetter {
function create(int0: integer, int1: integer): $LevelHeightAccessor
function traverseBlocks<T, C>(vec30: $Vec3$$Type, vec31: $Vec3$$Type, c2: C, biFunction3: $BiFunction$$Type<C, $BlockPos$$Type, T>, function4: $Function$$Type<C, T>): T
}
export abstract class $BlockAndTintGetter$$Static implements $BlockAndTintGetter {
static "create"(int0: integer, int1: integer): $LevelHeightAccessor
static "traverseBlocks"<T, C>(vec30: $Vec3$$Type, vec31: $Vec3$$Type, c2: C, biFunction3: $BiFunction$$Type<C, $BlockPos$$Type, T>, function4: $Function$$Type<C, T>): T
}
}

declare module "net.minecraft.world.level.GameRules$Category" {
import { $Enum } from "java.lang.Enum"

export class $GameRules$Category extends $Enum<$GameRules$Category> {
static readonly "CHAT": $GameRules$Category
static readonly "DROPS": $GameRules$Category
static readonly "MISC": $GameRules$Category
static readonly "MOBS": $GameRules$Category
static readonly "PLAYER": $GameRules$Category
static readonly "SPAWNING": $GameRules$Category
static readonly "UPDATES": $GameRules$Category

public "getDescriptionId"(): string
public static "valueOf"(string0: string): $GameRules$Category
public static "values"(): $GameRules$Category[]
get "descriptionId"(): string
}
}

declare module "net.minecraft.world.level.NoiseColumn" {
import { $BlockState, $BlockState$$Type } from "net.minecraft.world.level.block.state.BlockState"
import { $BlockColumn } from "net.minecraft.world.level.chunk.BlockColumn"

export class $NoiseColumn implements $BlockColumn {
constructor(int0: integer, blockState1s: $BlockState$$Type[])

public "getBlock"(int0: integer): $BlockState
public "setBlock"(int0: integer, blockState1: $BlockState$$Type): void
}
}

declare module "net.minecraft.world.level.LevelHeightAccessor" {
import { $BlockPos$$Type } from "net.minecraft.core.BlockPos"

export interface $LevelHeightAccessor {
"getHeight"(): integer
"getMaxBuildHeight"(): integer
"getMaxSection"(): integer
"getMinBuildHeight"(): integer
"getMinSection"(): integer
"getSectionIndex"(int0: integer): integer
"getSectionIndexFromSectionY"(int0: integer): integer
"getSectionYFromSectionIndex"(int0: integer): integer
"getSectionsCount"(): integer
"isOutsideBuildHeight"(blockPos0: $BlockPos$$Type): boolean
"isOutsideBuildHeight"(int0: integer): boolean
get "height"(): integer
get "maxBuildHeight"(): integer
get "maxSection"(): integer
get "minBuildHeight"(): integer
get "minSection"(): integer
get "sectionsCount"(): integer
}

export namespace $LevelHeightAccessor {
function create(int0: integer, int1: integer): $LevelHeightAccessor
}
export abstract class $LevelHeightAccessor$$Static implements $LevelHeightAccessor {
static "create"(int0: integer, int1: integer): $LevelHeightAccessor
}
}

declare module "net.minecraft.world.level.LevelTimeAccess" {
import { $CollisionContext$$Type } from "net.minecraft.world.phys.shapes.CollisionContext"
import { $LevelHeightAccessor } from "net.minecraft.world.level.LevelHeightAccessor"
import { $AABB$$Type } from "net.minecraft.world.phys.AABB"
import { $Direction$$Type } from "net.minecraft.core.Direction"
import { $BiFunction$$Type } from "java.util.function.BiFunction"
import { $BlockState, $BlockState$$Type } from "net.minecraft.world.level.block.state.BlockState"
import { $DimensionType } from "net.minecraft.world.level.dimension.DimensionType"
import { $Biome } from "net.minecraft.world.level.biome.Biome"
import { $Supplier$$Type } from "java.util.function.Supplier"
import { $Function$$Type } from "java.util.function.Function"
import { $Iterable } from "java.lang.Iterable"
import { $ColorResolver$$Type } from "net.minecraft.world.level.ColorResolver"
import { $Registry } from "net.minecraft.core.Registry"
import { $ClipBlockStateContext$$Type } from "net.minecraft.world.level.ClipBlockStateContext"
import { $BlockGetter } from "net.minecraft.world.level.BlockGetter"
import { $Holder } from "net.minecraft.core.Holder"
import { $ClipContext$$Type } from "net.minecraft.world.level.ClipContext"
import { $WorldBorder } from "net.minecraft.world.level.border.WorldBorder"
import { $LightLayer$$Type } from "net.minecraft.world.level.LightLayer"
import { $BiomeManager } from "net.minecraft.world.level.biome.BiomeManager"
import { $BlockHitResult } from "net.minecraft.world.phys.BlockHitResult"
import { $HolderLookup } from "net.minecraft.core.HolderLookup"
import { $ModelDataManager } from "net.minecraftforge.client.model.data.ModelDataManager"
import { $BlockEntity, $BlockEntity$$Type } from "net.minecraft.world.level.block.entity.BlockEntity"
import { $RegistryAccess } from "net.minecraft.core.RegistryAccess"
import { $LevelReader } from "net.minecraft.world.level.LevelReader"
import { $ResourceKey$$Type } from "net.minecraft.resources.ResourceKey"
import { $ChunkAccess } from "net.minecraft.world.level.chunk.ChunkAccess"
import { $FeatureFlagSet } from "net.minecraft.world.flag.FeatureFlagSet"
import { $List } from "java.util.List"
import { $Entity$$Type } from "net.minecraft.world.entity.Entity"
import { $Stream } from "java.util.stream.Stream"
import { $LevelLightEngine } from "net.minecraft.world.level.lighting.LevelLightEngine"
import { $BlockPos, $BlockPos$$Type } from "net.minecraft.core.BlockPos"
import { $Vec3, $Vec3$$Type } from "net.minecraft.world.phys.Vec3"
import { $BlockEntityType$$Type } from "net.minecraft.world.level.block.entity.BlockEntityType"
import { $FluidState } from "net.minecraft.world.level.material.FluidState"
import { $Optional } from "java.util.Optional"
import { $ChunkStatus$$Type } from "net.minecraft.world.level.chunk.ChunkStatus"
import { $Heightmap$Types$$Type } from "net.minecraft.world.level.levelgen.Heightmap$Types"
import { $VoxelShape, $VoxelShape$$Type } from "net.minecraft.world.phys.shapes.VoxelShape"

export interface $LevelTimeAccess extends $LevelReader {
"canSeeSky"(blockPos0: $BlockPos$$Type): boolean
"canSeeSkyFromBelowWater"(blockPos0: $BlockPos$$Type): boolean
"clip"(clipContext0: $ClipContext$$Type): $BlockHitResult
"clipWithInteractionOverride"(vec30: $Vec3$$Type, vec31: $Vec3$$Type, blockPos2: $BlockPos$$Type, voxelShape3: $VoxelShape$$Type, blockState4: $BlockState$$Type): $BlockHitResult
"collidesWithSuffocatingBlock"(entity0: $Entity$$Type, aABB1: $AABB$$Type): boolean
"containsAnyLiquid"(aABB0: $AABB$$Type): boolean
"dayTime"(): long
"dimensionType"(): $DimensionType
"enabledFeatures"(): $FeatureFlagSet
"findFreePosition"(entity0: $Entity$$Type, voxelShape1: $VoxelShape$$Type, vec32: $Vec3$$Type, double3: double, double4: double, double5: double): $Optional<$Vec3>
"findSupportingBlock"(entity0: $Entity$$Type, aABB1: $AABB$$Type): $Optional<$BlockPos>
"getBestNeighborSignal"(blockPos0: $BlockPos$$Type): integer
"getBiome"(blockPos0: $BlockPos$$Type): $Holder<$Biome>
"getBiomeManager"(): $BiomeManager
"getBlockCollisions"(entity0: $Entity$$Type, aABB1: $AABB$$Type): $Iterable<$VoxelShape>
"getBlockEntity"<T extends $BlockEntity>(blockPos0: $BlockPos$$Type, blockEntityType1: $BlockEntityType$$Type<T>): $Optional<T>
"getBlockEntity"(blockPos0: $BlockPos$$Type): $BlockEntity
"getBlockFloorHeight"(voxelShape0: $VoxelShape$$Type, supplier1: $Supplier$$Type<$VoxelShape>): double
"getBlockFloorHeight"(blockPos0: $BlockPos$$Type): double
"getBlockState"(blockPos0: $BlockPos$$Type): $BlockState
"getBlockStates"(aABB0: $AABB$$Type): $Stream<$BlockState>
"getBlockStatesIfLoaded"(aABB0: $AABB$$Type): $Stream<$BlockState>
"getBlockTint"(blockPos0: $BlockPos$$Type, colorResolver1: $ColorResolver$$Type): integer
"getBrightness"(lightLayer0: $LightLayer$$Type, blockPos1: $BlockPos$$Type): integer
"getChunk"(int0: integer, int1: integer, chunkStatus2: $ChunkStatus$$Type, boolean3: boolean): $ChunkAccess
"getChunk"(blockPos0: $BlockPos$$Type): $ChunkAccess
"getChunk"(int0: integer, int1: integer, chunkStatus2: $ChunkStatus$$Type): $ChunkAccess
"getChunk"(int0: integer, int1: integer): $ChunkAccess
"getChunkForCollisions"(int0: integer, int1: integer): $BlockGetter
"getCollisions"(entity0: $Entity$$Type, aABB1: $AABB$$Type): $Iterable<$VoxelShape>
"getControlInputSignal"(blockPos0: $BlockPos$$Type, direction1: $Direction$$Type, boolean2: boolean): integer
"getDirectSignal"(blockPos0: $BlockPos$$Type, direction1: $Direction$$Type): integer
"getDirectSignalTo"(blockPos0: $BlockPos$$Type): integer
"getEntityCollisions"(entity0: $Entity$$Type, aABB1: $AABB$$Type): $List<$VoxelShape>
"getExistingBlockEntity"(blockPos0: $BlockPos$$Type): $BlockEntity
"getFluidState"(blockPos0: $BlockPos$$Type): $FluidState
"getHeight"(types0: $Heightmap$Types$$Type, int1: integer, int2: integer): integer
"getHeight"(): integer
"getHeightmapPos"(types0: $Heightmap$Types$$Type, blockPos1: $BlockPos$$Type): $BlockPos
"getLightEmission"(blockPos0: $BlockPos$$Type): integer
"getLightEngine"(): $LevelLightEngine
/** @deprecated */
"getLightLevelDependentMagicValue"(blockPos0: $BlockPos$$Type): float
"getLoadedChunk"(int0: integer, int1: integer): $ChunkAccess
"getMaxBuildHeight"(): integer
"getMaxLightLevel"(): integer
"getMaxLocalRawBrightness"(blockPos0: $BlockPos$$Type): integer
"getMaxLocalRawBrightness"(blockPos0: $BlockPos$$Type, int1: integer): integer
"getMaxSection"(): integer
"getMinBuildHeight"(): integer
"getMinSection"(): integer
"getModelDataManager"(): $ModelDataManager
"getMoonBrightness"(): float
"getMoonPhase"(): integer
"getNoiseBiome"(int0: integer, int1: integer, int2: integer): $Holder<$Biome>
"getPathfindingCostFromLightLevels"(blockPos0: $BlockPos$$Type): float
"getRawBrightness"(blockPos0: $BlockPos$$Type, int1: integer): integer
/** @deprecated */
"getSeaLevel"(): integer
"getSectionIndex"(int0: integer): integer
"getSectionIndexFromSectionY"(int0: integer): integer
"getSectionYFromSectionIndex"(int0: integer): integer
"getSectionsCount"(): integer
"getShade"(direction0: $Direction$$Type, boolean1: boolean): float
"getShade"(float0: float, float1: float, float2: float, boolean3: boolean): float
"getSignal"(blockPos0: $BlockPos$$Type, direction1: $Direction$$Type): integer
"getSkyDarken"(): integer
"getTimeOfDay"(float0: float): float
"getUncachedNoiseBiome"(int0: integer, int1: integer, int2: integer): $Holder<$Biome>
"getWorldBorder"(): $WorldBorder
/** @deprecated */
"hasChunk"(int0: integer, int1: integer): boolean
/** @deprecated */
"hasChunkAt"(blockPos0: $BlockPos$$Type): boolean
/** @deprecated */
"hasChunkAt"(int0: integer, int1: integer): boolean
/** @deprecated */
"hasChunksAt"(int0: integer, int1: integer, int2: integer, int3: integer, int4: integer, int5: integer): boolean
/** @deprecated */
"hasChunksAt"(blockPos0: $BlockPos$$Type, blockPos1: $BlockPos$$Type): boolean
/** @deprecated */
"hasChunksAt"(int0: integer, int1: integer, int2: integer, int3: integer): boolean
"hasNeighborSignal"(blockPos0: $BlockPos$$Type): boolean
"hasSignal"(blockPos0: $BlockPos$$Type, direction1: $Direction$$Type): boolean
"holderLookup"<T>(resourceKey0: $ResourceKey$$Type<$Registry<T>>): $HolderLookup<T>
"isAreaLoaded"(blockPos0: $BlockPos$$Type, int1: integer): boolean
"isBlockInLine"(clipBlockStateContext0: $ClipBlockStateContext$$Type): $BlockHitResult
"isClientSide"(): boolean
"isEmptyBlock"(blockPos0: $BlockPos$$Type): boolean
"isOutsideBuildHeight"(blockPos0: $BlockPos$$Type): boolean
"isOutsideBuildHeight"(int0: integer): boolean
"isUnobstructed"(entity0: $Entity$$Type, voxelShape1: $VoxelShape$$Type): boolean
"isUnobstructed"(blockState0: $BlockState$$Type, blockPos1: $BlockPos$$Type, collisionContext2: $CollisionContext$$Type): boolean
"isUnobstructed"(entity0: $Entity$$Type): boolean
"isWaterAt"(blockPos0: $BlockPos$$Type): boolean
"noCollision"(entity0: $Entity$$Type, aABB1: $AABB$$Type): boolean
"noCollision"(entity0: $Entity$$Type): boolean
"noCollision"(aABB0: $AABB$$Type): boolean
"registryAccess"(): $RegistryAccess
get "biomeManager"(): $BiomeManager
get "height"(): integer
get "lightEngine"(): $LevelLightEngine
get "maxBuildHeight"(): integer
get "maxLightLevel"(): integer
get "maxSection"(): integer
get "minBuildHeight"(): integer
get "minSection"(): integer
get "modelDataManager"(): $ModelDataManager
get "moonBrightness"(): float
get "moonPhase"(): integer
get "seaLevel"(): integer
get "sectionsCount"(): integer
get "skyDarken"(): integer
get "worldBorder"(): $WorldBorder
get "clientSide"(): boolean
}

export namespace $LevelTimeAccess {
function create(int0: integer, int1: integer): $LevelHeightAccessor
function traverseBlocks<T, C>(vec30: $Vec3$$Type, vec31: $Vec3$$Type, c2: C, biFunction3: $BiFunction$$Type<C, $BlockPos$$Type, T>, function4: $Function$$Type<C, T>): T
}
export abstract class $LevelTimeAccess$$Static implements $LevelTimeAccess {
static "create"(int0: integer, int1: integer): $LevelHeightAccessor
static "traverseBlocks"<T, C>(vec30: $Vec3$$Type, vec31: $Vec3$$Type, c2: C, biFunction3: $BiFunction$$Type<C, $BlockPos$$Type, T>, function4: $Function$$Type<C, T>): T
}
}

declare module "net.minecraft.world.level.ItemLike" {
import { $Item } from "net.minecraft.world.item.Item"

export interface $ItemLike {
"asItem"(): $Item
}

export namespace $ItemLike {
const probejs$$marker: never
}
export abstract class $ItemLike$$Static implements $ItemLike {
}
}

declare module "net.minecraft.world.level.ClipContext$ShapeGetter" {
import { $CollisionContext$$Type } from "net.minecraft.world.phys.shapes.CollisionContext"
import { $BlockGetter$$Type } from "net.minecraft.world.level.BlockGetter"
import { $BlockPos$$Type } from "net.minecraft.core.BlockPos"
import { $BlockState$$Type } from "net.minecraft.world.level.block.state.BlockState"
import { $VoxelShape } from "net.minecraft.world.phys.shapes.VoxelShape"

export interface $ClipContext$ShapeGetter {
"get"(blockState0: $BlockState$$Type, blockGetter1: $BlockGetter$$Type, blockPos2: $BlockPos$$Type, collisionContext3: $CollisionContext$$Type): $VoxelShape
}

export namespace $ClipContext$ShapeGetter {
const probejs$$marker: never
}
export abstract class $ClipContext$ShapeGetter$$Static implements $ClipContext$ShapeGetter {
}
}

declare module "net.minecraft.world.level.ClipContext$Block" {
import { $CollisionContext$$Type } from "net.minecraft.world.phys.shapes.CollisionContext"
import { $BlockGetter$$Type } from "net.minecraft.world.level.BlockGetter"
import { $ClipContext$ShapeGetter } from "net.minecraft.world.level.ClipContext$ShapeGetter"
import { $Enum } from "java.lang.Enum"
import { $BlockPos$$Type } from "net.minecraft.core.BlockPos"
import { $BlockState$$Type } from "net.minecraft.world.level.block.state.BlockState"
import { $VoxelShape } from "net.minecraft.world.phys.shapes.VoxelShape"

export class $ClipContext$Block extends $Enum<$ClipContext$Block> implements $ClipContext$ShapeGetter {
static readonly "COLLIDER": $ClipContext$Block
static readonly "FALLDAMAGE_RESETTING": $ClipContext$Block
static readonly "OUTLINE": $ClipContext$Block
static readonly "VISUAL": $ClipContext$Block

public "get"(blockState0: $BlockState$$Type, blockGetter1: $BlockGetter$$Type, blockPos2: $BlockPos$$Type, collisionContext3: $CollisionContext$$Type): $VoxelShape
public static "valueOf"(string0: string): $ClipContext$Block
public static "values"(): $ClipContext$Block[]
}
}

declare module "net.minecraft.world.level.LevelWriter" {
import { $Entity$$Type } from "net.minecraft.world.entity.Entity"
import { $BlockPos$$Type } from "net.minecraft.core.BlockPos"
import { $BlockState$$Type } from "net.minecraft.world.level.block.state.BlockState"

export interface $LevelWriter {
"addFreshEntity"(entity0: $Entity$$Type): boolean
"destroyBlock"(blockPos0: $BlockPos$$Type, boolean1: boolean, entity2: $Entity$$Type, int3: integer): boolean
"destroyBlock"(blockPos0: $BlockPos$$Type, boolean1: boolean): boolean
"destroyBlock"(blockPos0: $BlockPos$$Type, boolean1: boolean, entity2: $Entity$$Type): boolean
"removeBlock"(blockPos0: $BlockPos$$Type, boolean1: boolean): boolean
"setBlock"(blockPos0: $BlockPos$$Type, blockState1: $BlockState$$Type, int2: integer): boolean
"setBlock"(blockPos0: $BlockPos$$Type, blockState1: $BlockState$$Type, int2: integer, int3: integer): boolean
}

export namespace $LevelWriter {
const probejs$$marker: never
}
export abstract class $LevelWriter$$Static implements $LevelWriter {
}
}

declare module "net.minecraft.world.level.Explosion" {
import { $ExplosionDamageCalculator, $ExplosionDamageCalculator$$Type } from "net.minecraft.world.level.ExplosionDamageCalculator"
import { $LivingEntity } from "net.minecraft.world.entity.LivingEntity"
import { $Collection$$Type } from "java.util.Collection"
import { $ObjectArrayList, $ObjectArrayList$$Type } from "it.unimi.dsi.fastutil.objects.ObjectArrayList"
import { $RandomSource } from "net.minecraft.util.RandomSource"
import { $Pair$$Type } from "com.mojang.datafixers.util.Pair"
import { $Player } from "net.minecraft.world.entity.player.Player"
import { $HashSet } from "java.util.HashSet"
import { $CallbackInfo$$Type } from "org.spongepowered.asm.mixin.injection.callback.CallbackInfo"
import { $List, $List$$Type } from "java.util.List"
import { $Entity, $Entity$$Type } from "net.minecraft.world.entity.Entity"
import { $Explosion$BlockInteraction, $Explosion$BlockInteraction$$Type } from "net.minecraft.world.level.Explosion$BlockInteraction"
import { $Vec3, $Vec3$$Type } from "net.minecraft.world.phys.Vec3"
import { $BlockPos, $BlockPos$$Type } from "net.minecraft.core.BlockPos"
import { $DamageSource, $DamageSource$$Type } from "net.minecraft.world.damagesource.DamageSource"
import { $Map } from "java.util.Map"
import { $ItemStack$$Type } from "net.minecraft.world.item.ItemStack"
import { $Level, $Level$$Type } from "net.minecraft.world.level.Level"

export class $Explosion {
static readonly "EXPLOSION_DAMAGE_CALCULATOR": $ExplosionDamageCalculator
static readonly "MAX_DROPS_PER_COMBINED_STACK": integer
readonly "damageCalculator": $ExplosionDamageCalculator
readonly "fire": boolean
readonly "hitPlayers": $Map<$Player, $Vec3>
readonly "level": $Level
readonly "position": $Vec3
readonly "random": $RandomSource
readonly "toBlow": $ObjectArrayList<$BlockPos>
readonly "x": double
readonly "y": double
readonly "z": double

constructor(level0: $Level$$Type, entity1: $Entity$$Type, double2: double, double3: double, double4: double, float5: float, boolean6: boolean, blockInteraction7: $Explosion$BlockInteraction$$Type, list8: $List$$Type<$BlockPos$$Type>)
constructor(level0: $Level$$Type, entity1: $Entity$$Type, double2: double, double3: double, double4: double, float5: float, boolean6: boolean, blockInteraction7: $Explosion$BlockInteraction$$Type)
constructor(level0: $Level$$Type, entity1: $Entity$$Type, damageSource2: $DamageSource$$Type, explosionDamageCalculator3: $ExplosionDamageCalculator$$Type, double4: double, double5: double, double6: double, float7: float, boolean8: boolean, blockInteraction9: $Explosion$BlockInteraction$$Type)
constructor(level0: $Level$$Type, entity1: $Entity$$Type, double2: double, double3: double, double4: double, float5: float, list6: $List$$Type<$BlockPos$$Type>)

public static "addBlockDrops"(objectArrayList0: $ObjectArrayList$$Type<$Pair$$Type<$ItemStack$$Type, $BlockPos$$Type>>, itemStack1: $ItemStack$$Type, blockPos2: $BlockPos$$Type): void
public "clearToBlow"(): void
public "constant$col000$skipLoop"(int0: integer): integer
public "explode"(): void
public "finalizeExplosion"(boolean0: boolean): void
public "getDamageSource"(): $DamageSource
public "getDirectSourceEntity"(): $Entity
public "getExploder"(): $Entity
public "getHitPlayers"(): $Map<$Player, $Vec3>
public "getIndirectSourceEntity"(): $LivingEntity
public "getPosition"(): $Vec3
public static "getSeenPercent"(vec30: $Vec3$$Type, entity1: $Entity$$Type): float
public "getToBlow"(): $List<$BlockPos>
public "handler$hda000$explode"(ci: $CallbackInfo$$Type): void
public "interactsWithBlocks"(): boolean
public "redirect$col000$collectBlocks"(objectArrayList0: $ObjectArrayList$$Type, collection1: $Collection$$Type): boolean
public "redirect$col000$skipNewHashSet"(): $HashSet
get "blockInteraction"(): $Explosion$BlockInteraction
set "blockInteraction"(value: $Explosion$BlockInteraction$$Type)
get "damageSource"(): $DamageSource
set "damageSource"(value: $DamageSource$$Type)
get "radius"(): float
set "radius"(value: float)
get "source"(): $Entity
set "source"(value: $Entity$$Type)
get "directSourceEntity"(): $Entity
get "exploder"(): $Entity
get "indirectSourceEntity"(): $LivingEntity
}
}

declare module "net.minecraft.world.level.CollisionGetter" {
import { $CollisionContext$$Type } from "net.minecraft.world.phys.shapes.CollisionContext"
import { $LevelHeightAccessor } from "net.minecraft.world.level.LevelHeightAccessor"
import { $AABB$$Type } from "net.minecraft.world.phys.AABB"
import { $BiFunction$$Type } from "java.util.function.BiFunction"
import { $BlockState, $BlockState$$Type } from "net.minecraft.world.level.block.state.BlockState"
import { $Supplier$$Type } from "java.util.function.Supplier"
import { $Function$$Type } from "java.util.function.Function"
import { $Iterable } from "java.lang.Iterable"
import { $ClipBlockStateContext$$Type } from "net.minecraft.world.level.ClipBlockStateContext"
import { $BlockGetter } from "net.minecraft.world.level.BlockGetter"
import { $ClipContext$$Type } from "net.minecraft.world.level.ClipContext"
import { $WorldBorder } from "net.minecraft.world.level.border.WorldBorder"
import { $BlockHitResult } from "net.minecraft.world.phys.BlockHitResult"
import { $ModelDataManager } from "net.minecraftforge.client.model.data.ModelDataManager"
import { $BlockEntity, $BlockEntity$$Type } from "net.minecraft.world.level.block.entity.BlockEntity"
import { $List } from "java.util.List"
import { $Entity$$Type } from "net.minecraft.world.entity.Entity"
import { $Stream } from "java.util.stream.Stream"
import { $Vec3, $Vec3$$Type } from "net.minecraft.world.phys.Vec3"
import { $BlockPos, $BlockPos$$Type } from "net.minecraft.core.BlockPos"
import { $BlockEntityType$$Type } from "net.minecraft.world.level.block.entity.BlockEntityType"
import { $FluidState } from "net.minecraft.world.level.material.FluidState"
import { $Optional } from "java.util.Optional"
import { $VoxelShape, $VoxelShape$$Type } from "net.minecraft.world.phys.shapes.VoxelShape"

export interface $CollisionGetter extends $BlockGetter {
"clip"(clipContext0: $ClipContext$$Type): $BlockHitResult
"clipWithInteractionOverride"(vec30: $Vec3$$Type, vec31: $Vec3$$Type, blockPos2: $BlockPos$$Type, voxelShape3: $VoxelShape$$Type, blockState4: $BlockState$$Type): $BlockHitResult
"collidesWithSuffocatingBlock"(entity0: $Entity$$Type, aABB1: $AABB$$Type): boolean
"findFreePosition"(entity0: $Entity$$Type, voxelShape1: $VoxelShape$$Type, vec32: $Vec3$$Type, double3: double, double4: double, double5: double): $Optional<$Vec3>
"findSupportingBlock"(entity0: $Entity$$Type, aABB1: $AABB$$Type): $Optional<$BlockPos>
"getBlockCollisions"(entity0: $Entity$$Type, aABB1: $AABB$$Type): $Iterable<$VoxelShape>
"getBlockEntity"<T extends $BlockEntity>(blockPos0: $BlockPos$$Type, blockEntityType1: $BlockEntityType$$Type<T>): $Optional<T>
"getBlockEntity"(blockPos0: $BlockPos$$Type): $BlockEntity
"getBlockFloorHeight"(voxelShape0: $VoxelShape$$Type, supplier1: $Supplier$$Type<$VoxelShape>): double
"getBlockFloorHeight"(blockPos0: $BlockPos$$Type): double
"getBlockState"(blockPos0: $BlockPos$$Type): $BlockState
"getBlockStates"(aABB0: $AABB$$Type): $Stream<$BlockState>
"getChunkForCollisions"(int0: integer, int1: integer): $BlockGetter
"getCollisions"(entity0: $Entity$$Type, aABB1: $AABB$$Type): $Iterable<$VoxelShape>
"getEntityCollisions"(entity0: $Entity$$Type, aABB1: $AABB$$Type): $List<$VoxelShape>
"getExistingBlockEntity"(blockPos0: $BlockPos$$Type): $BlockEntity
"getFluidState"(blockPos0: $BlockPos$$Type): $FluidState
"getHeight"(): integer
"getLightEmission"(blockPos0: $BlockPos$$Type): integer
"getMaxBuildHeight"(): integer
"getMaxLightLevel"(): integer
"getMaxSection"(): integer
"getMinBuildHeight"(): integer
"getMinSection"(): integer
"getModelDataManager"(): $ModelDataManager
"getSectionIndex"(int0: integer): integer
"getSectionIndexFromSectionY"(int0: integer): integer
"getSectionYFromSectionIndex"(int0: integer): integer
"getSectionsCount"(): integer
"getWorldBorder"(): $WorldBorder
"isBlockInLine"(clipBlockStateContext0: $ClipBlockStateContext$$Type): $BlockHitResult
"isOutsideBuildHeight"(blockPos0: $BlockPos$$Type): boolean
"isOutsideBuildHeight"(int0: integer): boolean
"isUnobstructed"(entity0: $Entity$$Type, voxelShape1: $VoxelShape$$Type): boolean
"isUnobstructed"(blockState0: $BlockState$$Type, blockPos1: $BlockPos$$Type, collisionContext2: $CollisionContext$$Type): boolean
"isUnobstructed"(entity0: $Entity$$Type): boolean
"noCollision"(entity0: $Entity$$Type, aABB1: $AABB$$Type): boolean
"noCollision"(entity0: $Entity$$Type): boolean
"noCollision"(aABB0: $AABB$$Type): boolean
get "height"(): integer
get "maxBuildHeight"(): integer
get "maxLightLevel"(): integer
get "maxSection"(): integer
get "minBuildHeight"(): integer
get "minSection"(): integer
get "modelDataManager"(): $ModelDataManager
get "sectionsCount"(): integer
get "worldBorder"(): $WorldBorder
}

export namespace $CollisionGetter {
function create(int0: integer, int1: integer): $LevelHeightAccessor
function traverseBlocks<T, C>(vec30: $Vec3$$Type, vec31: $Vec3$$Type, c2: C, biFunction3: $BiFunction$$Type<C, $BlockPos$$Type, T>, function4: $Function$$Type<C, T>): T
}
export abstract class $CollisionGetter$$Static implements $CollisionGetter {
static "create"(int0: integer, int1: integer): $LevelHeightAccessor
static "traverseBlocks"<T, C>(vec30: $Vec3$$Type, vec31: $Vec3$$Type, c2: C, biFunction3: $BiFunction$$Type<C, $BlockPos$$Type, T>, function4: $Function$$Type<C, T>): T
}
}

declare module "net.minecraft.world.level.LevelAccessor" {
import { $LevelHeightAccessor } from "net.minecraft.world.level.LevelHeightAccessor"
import { $AABB$$Type } from "net.minecraft.world.phys.AABB"
import { $LivingEntity, $LivingEntity$$Type } from "net.minecraft.world.entity.LivingEntity"
import { $Direction$$Type } from "net.minecraft.core.Direction"
import { $ParticleOptions$$Type } from "net.minecraft.core.particles.ParticleOptions"
import { $BiFunction$$Type } from "java.util.function.BiFunction"
import { $EntityTypeTest$$Type } from "net.minecraft.world.level.entity.EntityTypeTest"
import { $ChunkSource } from "net.minecraft.world.level.chunk.ChunkSource"
import { $Registry } from "net.minecraft.core.Registry"
import { $ClipBlockStateContext$$Type } from "net.minecraft.world.level.ClipBlockStateContext"
import { $BlockGetter } from "net.minecraft.world.level.BlockGetter"
import { $TargetingConditions$$Type } from "net.minecraft.world.entity.ai.targeting.TargetingConditions"
import { $MinecraftServer } from "net.minecraft.server.MinecraftServer"
import { $Holder } from "net.minecraft.core.Holder"
import { $LightLayer$$Type } from "net.minecraft.world.level.LightLayer"
import { $GameEvent$Context$$Type } from "net.minecraft.world.level.gameevent.GameEvent$Context"
import { $DifficultyInstance } from "net.minecraft.world.DifficultyInstance"
import { $CommonLevelAccessor } from "net.minecraft.world.level.CommonLevelAccessor"
import { $BiomeManager } from "net.minecraft.world.level.biome.BiomeManager"
import { $Predicate$$Type } from "java.util.function.Predicate"
import { $BlockHitResult } from "net.minecraft.world.phys.BlockHitResult"
import { $RandomSource } from "net.minecraft.util.RandomSource"
import { $UUID$$Type } from "java.util.UUID"
import { $BlockEntity, $BlockEntity$$Type } from "net.minecraft.world.level.block.entity.BlockEntity"
import { $RegistryAccess } from "net.minecraft.core.RegistryAccess"
import { $ChunkAccess } from "net.minecraft.world.level.chunk.ChunkAccess"
import { $Player, $Player$$Type } from "net.minecraft.world.entity.player.Player"
import { $FeatureFlagSet } from "net.minecraft.world.flag.FeatureFlagSet"
import { $List, $List$$Type } from "java.util.List"
import { $Stream } from "java.util.stream.Stream"
import { $LevelLightEngine } from "net.minecraft.world.level.lighting.LevelLightEngine"
import { $BlockPos, $BlockPos$$Type } from "net.minecraft.core.BlockPos"
import { $BlockEntityType$$Type } from "net.minecraft.world.level.block.entity.BlockEntityType"
import { $SoundEvent$$Type } from "net.minecraft.sounds.SoundEvent"
import { $FluidState, $FluidState$$Type } from "net.minecraft.world.level.material.FluidState"
import { $Optional } from "java.util.Optional"
import { $Heightmap$Types$$Type } from "net.minecraft.world.level.levelgen.Heightmap$Types"
import { $VoxelShape, $VoxelShape$$Type } from "net.minecraft.world.phys.shapes.VoxelShape"
import { $SoundSource$$Type } from "net.minecraft.sounds.SoundSource"
import { $CollisionContext$$Type } from "net.minecraft.world.phys.shapes.CollisionContext"
import { $BlockState, $BlockState$$Type } from "net.minecraft.world.level.block.state.BlockState"
import { $GameEvent$$Type } from "net.minecraft.world.level.gameevent.GameEvent"
import { $DimensionType } from "net.minecraft.world.level.dimension.DimensionType"
import { $Biome } from "net.minecraft.world.level.biome.Biome"
import { $Supplier$$Type } from "java.util.function.Supplier"
import { $Function$$Type } from "java.util.function.Function"
import { $Iterable } from "java.lang.Iterable"
import { $LevelData } from "net.minecraft.world.level.storage.LevelData"
import { $ColorResolver$$Type } from "net.minecraft.world.level.ColorResolver"
import { $ClipContext$$Type } from "net.minecraft.world.level.ClipContext"
import { $WorldBorder } from "net.minecraft.world.level.border.WorldBorder"
import { $Fluid, $Fluid$$Type } from "net.minecraft.world.level.material.Fluid"
import { $Difficulty } from "net.minecraft.world.Difficulty"
import { $HolderLookup } from "net.minecraft.core.HolderLookup"
import { $ModelDataManager } from "net.minecraftforge.client.model.data.ModelDataManager"
import { $LevelTickAccess } from "net.minecraft.world.ticks.LevelTickAccess"
import { $ResourceKey$$Type } from "net.minecraft.resources.ResourceKey"
import { $TickPriority$$Type } from "net.minecraft.world.ticks.TickPriority"
import { $Entity, $Entity$$Type } from "net.minecraft.world.entity.Entity"
import { $Vec3, $Vec3$$Type } from "net.minecraft.world.phys.Vec3"
import { $Block, $Block$$Type } from "net.minecraft.world.level.block.Block"
import { $Class$$Type } from "java.lang.Class"
import { $ChunkStatus$$Type } from "net.minecraft.world.level.chunk.ChunkStatus"
import { $LevelTimeAccess } from "net.minecraft.world.level.LevelTimeAccess"

export interface $LevelAccessor extends $CommonLevelAccessor, $LevelTimeAccess {
"addFreshEntity"(entity0: $Entity$$Type): boolean
"addParticle"(particleOptions0: $ParticleOptions$$Type, double1: double, double2: double, double3: double, double4: double, double5: double, double6: double): void
"blockUpdated"(blockPos0: $BlockPos$$Type, block1: $Block$$Type): void
"canSeeSky"(blockPos0: $BlockPos$$Type): boolean
"canSeeSkyFromBelowWater"(blockPos0: $BlockPos$$Type): boolean
"clip"(clipContext0: $ClipContext$$Type): $BlockHitResult
"clipWithInteractionOverride"(vec30: $Vec3$$Type, vec31: $Vec3$$Type, blockPos2: $BlockPos$$Type, voxelShape3: $VoxelShape$$Type, blockState4: $BlockState$$Type): $BlockHitResult
"collidesWithSuffocatingBlock"(entity0: $Entity$$Type, aABB1: $AABB$$Type): boolean
"containsAnyLiquid"(aABB0: $AABB$$Type): boolean
"dayTime"(): long
"destroyBlock"(blockPos0: $BlockPos$$Type, boolean1: boolean, entity2: $Entity$$Type, int3: integer): boolean
"destroyBlock"(blockPos0: $BlockPos$$Type, boolean1: boolean): boolean
"destroyBlock"(blockPos0: $BlockPos$$Type, boolean1: boolean, entity2: $Entity$$Type): boolean
"dimensionType"(): $DimensionType
"enabledFeatures"(): $FeatureFlagSet
"findFreePosition"(entity0: $Entity$$Type, voxelShape1: $VoxelShape$$Type, vec32: $Vec3$$Type, double3: double, double4: double, double5: double): $Optional<$Vec3>
"findSupportingBlock"(entity0: $Entity$$Type, aABB1: $AABB$$Type): $Optional<$BlockPos>
"gameEvent"(gameEvent0: $GameEvent$$Type, vec31: $Vec3$$Type, context2: $GameEvent$Context$$Type): void
"gameEvent"(gameEvent0: $GameEvent$$Type, blockPos1: $BlockPos$$Type, context2: $GameEvent$Context$$Type): void
"gameEvent"(entity0: $Entity$$Type, gameEvent1: $GameEvent$$Type, blockPos2: $BlockPos$$Type): void
"gameEvent"(entity0: $Entity$$Type, gameEvent1: $GameEvent$$Type, vec32: $Vec3$$Type): void
"getBestNeighborSignal"(blockPos0: $BlockPos$$Type): integer
"getBiome"(blockPos0: $BlockPos$$Type): $Holder<$Biome>
"getBiomeManager"(): $BiomeManager
"getBlockCollisions"(entity0: $Entity$$Type, aABB1: $AABB$$Type): $Iterable<$VoxelShape>
"getBlockEntity"<T extends $BlockEntity>(blockPos0: $BlockPos$$Type, blockEntityType1: $BlockEntityType$$Type<T>): $Optional<T>
"getBlockEntity"(blockPos0: $BlockPos$$Type): $BlockEntity
"getBlockFloorHeight"(voxelShape0: $VoxelShape$$Type, supplier1: $Supplier$$Type<$VoxelShape>): double
"getBlockFloorHeight"(blockPos0: $BlockPos$$Type): double
"getBlockState"(blockPos0: $BlockPos$$Type): $BlockState
"getBlockStates"(aABB0: $AABB$$Type): $Stream<$BlockState>
"getBlockStatesIfLoaded"(aABB0: $AABB$$Type): $Stream<$BlockState>
"getBlockTicks"(): $LevelTickAccess<$Block>
"getBlockTint"(blockPos0: $BlockPos$$Type, colorResolver1: $ColorResolver$$Type): integer
"getBrightness"(lightLayer0: $LightLayer$$Type, blockPos1: $BlockPos$$Type): integer
"getChunk"(int0: integer, int1: integer, chunkStatus2: $ChunkStatus$$Type, boolean3: boolean): $ChunkAccess
"getChunk"(blockPos0: $BlockPos$$Type): $ChunkAccess
"getChunk"(int0: integer, int1: integer, chunkStatus2: $ChunkStatus$$Type): $ChunkAccess
"getChunk"(int0: integer, int1: integer): $ChunkAccess
"getChunkForCollisions"(int0: integer, int1: integer): $BlockGetter
"getChunkSource"(): $ChunkSource
"getCollisions"(entity0: $Entity$$Type, aABB1: $AABB$$Type): $Iterable<$VoxelShape>
"getControlInputSignal"(blockPos0: $BlockPos$$Type, direction1: $Direction$$Type, boolean2: boolean): integer
"getCurrentDifficultyAt"(blockPos0: $BlockPos$$Type): $DifficultyInstance
"getDifficulty"(): $Difficulty
"getDirectSignal"(blockPos0: $BlockPos$$Type, direction1: $Direction$$Type): integer
"getDirectSignalTo"(blockPos0: $BlockPos$$Type): integer
"getEntities"(entity0: $Entity$$Type, aABB1: $AABB$$Type): $List<$Entity>
"getEntities"<T extends $Entity>(entityTypeTest0: $EntityTypeTest$$Type<$Entity$$Type, T>, aABB1: $AABB$$Type, predicate2: $Predicate$$Type<T>): $List<T>
"getEntities"(entity0: $Entity$$Type, aABB1: $AABB$$Type, predicate2: $Predicate$$Type<$Entity$$Type>): $List<$Entity>
"getEntitiesOfClass"<T extends $Entity>(class0: $Class$$Type<T>, aABB1: $AABB$$Type): $List<T>
"getEntitiesOfClass"<T extends $Entity>(class0: $Class$$Type<T>, aABB1: $AABB$$Type, predicate2: $Predicate$$Type<T>): $List<T>
"getEntityCollisions"(entity0: $Entity$$Type, aABB1: $AABB$$Type): $List<$VoxelShape>
"getExistingBlockEntity"(blockPos0: $BlockPos$$Type): $BlockEntity
"getFluidState"(blockPos0: $BlockPos$$Type): $FluidState
"getFluidTicks"(): $LevelTickAccess<$Fluid>
"getHeight"(types0: $Heightmap$Types$$Type, int1: integer, int2: integer): integer
"getHeight"(): integer
"getHeightmapPos"(types0: $Heightmap$Types$$Type, blockPos1: $BlockPos$$Type): $BlockPos
"getLevelData"(): $LevelData
"getLightEmission"(blockPos0: $BlockPos$$Type): integer
"getLightEngine"(): $LevelLightEngine
/** @deprecated */
"getLightLevelDependentMagicValue"(blockPos0: $BlockPos$$Type): float
"getLoadedChunk"(int0: integer, int1: integer): $ChunkAccess
"getMaxBuildHeight"(): integer
"getMaxLightLevel"(): integer
"getMaxLocalRawBrightness"(blockPos0: $BlockPos$$Type): integer
"getMaxLocalRawBrightness"(blockPos0: $BlockPos$$Type, int1: integer): integer
"getMaxSection"(): integer
"getMinBuildHeight"(): integer
"getMinSection"(): integer
"getModelDataManager"(): $ModelDataManager
"getMoonBrightness"(): float
"getMoonPhase"(): integer
"getNearbyEntities"<T extends $LivingEntity>(class0: $Class$$Type<T>, targetingConditions1: $TargetingConditions$$Type, livingEntity2: $LivingEntity$$Type, aABB3: $AABB$$Type): $List<T>
"getNearbyPlayers"(targetingConditions0: $TargetingConditions$$Type, livingEntity1: $LivingEntity$$Type, aABB2: $AABB$$Type): $List<$Player>
"getNearestEntity"<T extends $LivingEntity>(list0: $List$$Type<T>, targetingConditions1: $TargetingConditions$$Type, livingEntity2: $LivingEntity$$Type, double3: double, double4: double, double5: double): T
"getNearestEntity"<T extends $LivingEntity>(class0: $Class$$Type<T>, targetingConditions1: $TargetingConditions$$Type, livingEntity2: $LivingEntity$$Type, double3: double, double4: double, double5: double, aABB6: $AABB$$Type): T
"getNearestPlayer"(double0: double, double1: double, double2: double, double3: double, predicate4: $Predicate$$Type<$Entity$$Type>): $Player
"getNearestPlayer"(entity0: $Entity$$Type, double1: double): $Player
"getNearestPlayer"(double0: double, double1: double, double2: double, double3: double, boolean4: boolean): $Player
"getNearestPlayer"(targetingConditions0: $TargetingConditions$$Type, livingEntity1: $LivingEntity$$Type): $Player
"getNearestPlayer"(targetingConditions0: $TargetingConditions$$Type, livingEntity1: $LivingEntity$$Type, double2: double, double3: double, double4: double): $Player
"getNearestPlayer"(targetingConditions0: $TargetingConditions$$Type, double1: double, double2: double, double3: double): $Player
"getNoiseBiome"(int0: integer, int1: integer, int2: integer): $Holder<$Biome>
"getPathfindingCostFromLightLevels"(blockPos0: $BlockPos$$Type): float
"getPlayerByUUID"(uUID0: $UUID$$Type): $Player
"getRandom"(): $RandomSource
"getRawBrightness"(blockPos0: $BlockPos$$Type, int1: integer): integer
/** @deprecated */
"getSeaLevel"(): integer
"getSectionIndex"(int0: integer): integer
"getSectionIndexFromSectionY"(int0: integer): integer
"getSectionYFromSectionIndex"(int0: integer): integer
"getSectionsCount"(): integer
"getServer"(): $MinecraftServer
"getShade"(direction0: $Direction$$Type, boolean1: boolean): float
"getShade"(float0: float, float1: float, float2: float, boolean3: boolean): float
"getSignal"(blockPos0: $BlockPos$$Type, direction1: $Direction$$Type): integer
"getSkyDarken"(): integer
"getTimeOfDay"(float0: float): float
"getUncachedNoiseBiome"(int0: integer, int1: integer, int2: integer): $Holder<$Biome>
"getWorldBorder"(): $WorldBorder
"hasChunk"(int0: integer, int1: integer): boolean
/** @deprecated */
"hasChunkAt"(blockPos0: $BlockPos$$Type): boolean
/** @deprecated */
"hasChunkAt"(int0: integer, int1: integer): boolean
/** @deprecated */
"hasChunksAt"(int0: integer, int1: integer, int2: integer, int3: integer, int4: integer, int5: integer): boolean
/** @deprecated */
"hasChunksAt"(blockPos0: $BlockPos$$Type, blockPos1: $BlockPos$$Type): boolean
/** @deprecated */
"hasChunksAt"(int0: integer, int1: integer, int2: integer, int3: integer): boolean
"hasNearbyAlivePlayer"(double0: double, double1: double, double2: double, double3: double): boolean
"hasNeighborSignal"(blockPos0: $BlockPos$$Type): boolean
"hasSignal"(blockPos0: $BlockPos$$Type, direction1: $Direction$$Type): boolean
"holderLookup"<T>(resourceKey0: $ResourceKey$$Type<$Registry<T>>): $HolderLookup<T>
"isAreaLoaded"(blockPos0: $BlockPos$$Type, int1: integer): boolean
"isBlockInLine"(clipBlockStateContext0: $ClipBlockStateContext$$Type): $BlockHitResult
"isClientSide"(): boolean
"isEmptyBlock"(blockPos0: $BlockPos$$Type): boolean
"isFluidAtPosition"(blockPos0: $BlockPos$$Type, predicate1: $Predicate$$Type<$FluidState$$Type>): boolean
"isOutsideBuildHeight"(blockPos0: $BlockPos$$Type): boolean
"isOutsideBuildHeight"(int0: integer): boolean
"isStateAtPosition"(blockPos0: $BlockPos$$Type, predicate1: $Predicate$$Type<$BlockState$$Type>): boolean
"isUnobstructed"(entity0: $Entity$$Type, voxelShape1: $VoxelShape$$Type): boolean
"isUnobstructed"(blockState0: $BlockState$$Type, blockPos1: $BlockPos$$Type, collisionContext2: $CollisionContext$$Type): boolean
"isUnobstructed"(entity0: $Entity$$Type): boolean
"isWaterAt"(blockPos0: $BlockPos$$Type): boolean
"levelEvent"(int0: integer, blockPos1: $BlockPos$$Type, int2: integer): void
"levelEvent"(player0: $Player$$Type, int1: integer, blockPos2: $BlockPos$$Type, int3: integer): void
"neighborShapeChanged"(direction0: $Direction$$Type, blockState1: $BlockState$$Type, blockPos2: $BlockPos$$Type, blockPos3: $BlockPos$$Type, int4: integer, int5: integer): void
"nextSubTickCount"(): long
"noCollision"(entity0: $Entity$$Type, aABB1: $AABB$$Type): boolean
"noCollision"(entity0: $Entity$$Type): boolean
"noCollision"(aABB0: $AABB$$Type): boolean
"playSound"(player0: $Player$$Type, blockPos1: $BlockPos$$Type, soundEvent2: $SoundEvent$$Type, soundSource3: $SoundSource$$Type, float4: float, float5: float): void
"playSound"(player0: $Player$$Type, blockPos1: $BlockPos$$Type, soundEvent2: $SoundEvent$$Type, soundSource3: $SoundSource$$Type): void
"players"(): $List<$Player>
"registryAccess"(): $RegistryAccess
"removeBlock"(blockPos0: $BlockPos$$Type, boolean1: boolean): boolean
"scheduleTick"(blockPos0: $BlockPos$$Type, block1: $Block$$Type, int2: integer, tickPriority3: $TickPriority$$Type): void
"scheduleTick"(blockPos0: $BlockPos$$Type, block1: $Block$$Type, int2: integer): void
"scheduleTick"(blockPos0: $BlockPos$$Type, fluid1: $Fluid$$Type, int2: integer, tickPriority3: $TickPriority$$Type): void
"scheduleTick"(blockPos0: $BlockPos$$Type, fluid1: $Fluid$$Type, int2: integer): void
"setBlock"(blockPos0: $BlockPos$$Type, blockState1: $BlockState$$Type, int2: integer): boolean
"setBlock"(blockPos0: $BlockPos$$Type, blockState1: $BlockState$$Type, int2: integer, int3: integer): boolean
get "biomeManager"(): $BiomeManager
get "blockTicks"(): $LevelTickAccess<$Block>
get "chunkSource"(): $ChunkSource
get "difficulty"(): $Difficulty
get "fluidTicks"(): $LevelTickAccess<$Fluid>
get "height"(): integer
get "levelData"(): $LevelData
get "lightEngine"(): $LevelLightEngine
get "maxBuildHeight"(): integer
get "maxLightLevel"(): integer
get "maxSection"(): integer
get "minBuildHeight"(): integer
get "minSection"(): integer
get "modelDataManager"(): $ModelDataManager
get "moonBrightness"(): float
get "moonPhase"(): integer
get "random"(): $RandomSource
get "seaLevel"(): integer
get "sectionsCount"(): integer
get "server"(): $MinecraftServer
get "skyDarken"(): integer
get "worldBorder"(): $WorldBorder
get "clientSide"(): boolean
}

export namespace $LevelAccessor {
function create(int0: integer, int1: integer): $LevelHeightAccessor
function traverseBlocks<T, C>(vec30: $Vec3$$Type, vec31: $Vec3$$Type, c2: C, biFunction3: $BiFunction$$Type<C, $BlockPos$$Type, T>, function4: $Function$$Type<C, T>): T
}
export abstract class $LevelAccessor$$Static implements $LevelAccessor {
static "create"(int0: integer, int1: integer): $LevelHeightAccessor
static "traverseBlocks"<T, C>(vec30: $Vec3$$Type, vec31: $Vec3$$Type, c2: C, biFunction3: $BiFunction$$Type<C, $BlockPos$$Type, T>, function4: $Function$$Type<C, T>): T
}
}

declare module "net.minecraft.world.level.GameRules$BooleanValue" {
import { $MinecraftServer$$Type } from "net.minecraft.server.MinecraftServer"
import { $GameRules$Value } from "net.minecraft.world.level.GameRules$Value"
import { $BooleanValueInvoker } from "artifacts.mixin.gamerule.BooleanValueInvoker"
import { $GameRules$Type, $GameRules$Type$$Type } from "net.minecraft.world.level.GameRules$Type"
import { $BiConsumer$$Type } from "java.util.function.BiConsumer"

export class $GameRules$BooleanValue extends $GameRules$Value<$GameRules$BooleanValue> implements $BooleanValueInvoker {
constructor(type0: $GameRules$Type$$Type<$GameRules$BooleanValue$$Type>, boolean1: boolean)

public static "create"(boolean0: boolean): $GameRules$Type<$GameRules$BooleanValue>
public static "create"(boolean0: boolean, biConsumer1: $BiConsumer$$Type<$MinecraftServer$$Type, $GameRules$BooleanValue$$Type>): $GameRules$Type<$GameRules$BooleanValue>
public "get"(): boolean
public "set"(boolean0: boolean, minecraftServer1: $MinecraftServer$$Type): void
public "setFrom"(booleanValue0: $GameRules$BooleanValue$$Type, minecraftServer1: $MinecraftServer$$Type): void
}
}

declare module "net.minecraft.world.level.SpawnData$CustomSpawnRules" {
import { $Codec } from "com.mojang.serialization.Codec"
import { $InclusiveRange, $InclusiveRange$$Type } from "net.minecraft.util.InclusiveRange"
import { $Record } from "java.lang.Record"

export class $SpawnData$CustomSpawnRules extends $Record {
static readonly "CODEC": $Codec<$SpawnData$CustomSpawnRules>

constructor(inclusiveRange0: $InclusiveRange$$Type<integer>, inclusiveRange1: $InclusiveRange$$Type<integer>)

public "blockLightLimit"(): $InclusiveRange<integer>
public "skyLightLimit"(): $InclusiveRange<integer>
}
}

declare module "net.minecraft.world.level.DataPackConfig" {
import { $List, $List$$Type } from "java.util.List"
import { $Codec } from "com.mojang.serialization.Codec"

export class $DataPackConfig {
static readonly "CODEC": $Codec<$DataPackConfig>
static readonly "DEFAULT": $DataPackConfig

constructor(list0: $List$$Type<string>, list1: $List$$Type<string>)

public "addModPacks"(list0: $List$$Type<string>): void
public "getDisabled"(): $List<string>
public "getEnabled"(): $List<string>
get "disabled"(): $List<string>
get "enabled"(): $List<string>
}
}

declare module "net.minecraft.world.level.EntityGetter" {
import { $List, $List$$Type } from "java.util.List"
import { $TargetingConditions$$Type } from "net.minecraft.world.entity.ai.targeting.TargetingConditions"
import { $Entity, $Entity$$Type } from "net.minecraft.world.entity.Entity"
import { $AABB$$Type } from "net.minecraft.world.phys.AABB"
import { $LivingEntity, $LivingEntity$$Type } from "net.minecraft.world.entity.LivingEntity"
import { $Predicate$$Type } from "java.util.function.Predicate"
import { $EntityTypeTest$$Type } from "net.minecraft.world.level.entity.EntityTypeTest"
import { $Class$$Type } from "java.lang.Class"
import { $UUID$$Type } from "java.util.UUID"
import { $VoxelShape, $VoxelShape$$Type } from "net.minecraft.world.phys.shapes.VoxelShape"
import { $Player } from "net.minecraft.world.entity.player.Player"

export interface $EntityGetter {
"getEntities"(entity0: $Entity$$Type, aABB1: $AABB$$Type): $List<$Entity>
"getEntities"<T extends $Entity>(entityTypeTest0: $EntityTypeTest$$Type<$Entity$$Type, T>, aABB1: $AABB$$Type, predicate2: $Predicate$$Type<T>): $List<T>
"getEntities"(entity0: $Entity$$Type, aABB1: $AABB$$Type, predicate2: $Predicate$$Type<$Entity$$Type>): $List<$Entity>
"getEntitiesOfClass"<T extends $Entity>(class0: $Class$$Type<T>, aABB1: $AABB$$Type): $List<T>
"getEntitiesOfClass"<T extends $Entity>(class0: $Class$$Type<T>, aABB1: $AABB$$Type, predicate2: $Predicate$$Type<T>): $List<T>
"getEntityCollisions"(entity0: $Entity$$Type, aABB1: $AABB$$Type): $List<$VoxelShape>
"getNearbyEntities"<T extends $LivingEntity>(class0: $Class$$Type<T>, targetingConditions1: $TargetingConditions$$Type, livingEntity2: $LivingEntity$$Type, aABB3: $AABB$$Type): $List<T>
"getNearbyPlayers"(targetingConditions0: $TargetingConditions$$Type, livingEntity1: $LivingEntity$$Type, aABB2: $AABB$$Type): $List<$Player>
"getNearestEntity"<T extends $LivingEntity>(list0: $List$$Type<T>, targetingConditions1: $TargetingConditions$$Type, livingEntity2: $LivingEntity$$Type, double3: double, double4: double, double5: double): T
"getNearestEntity"<T extends $LivingEntity>(class0: $Class$$Type<T>, targetingConditions1: $TargetingConditions$$Type, livingEntity2: $LivingEntity$$Type, double3: double, double4: double, double5: double, aABB6: $AABB$$Type): T
"getNearestPlayer"(double0: double, double1: double, double2: double, double3: double, predicate4: $Predicate$$Type<$Entity$$Type>): $Player
"getNearestPlayer"(entity0: $Entity$$Type, double1: double): $Player
"getNearestPlayer"(double0: double, double1: double, double2: double, double3: double, boolean4: boolean): $Player
"getNearestPlayer"(targetingConditions0: $TargetingConditions$$Type, livingEntity1: $LivingEntity$$Type): $Player
"getNearestPlayer"(targetingConditions0: $TargetingConditions$$Type, livingEntity1: $LivingEntity$$Type, double2: double, double3: double, double4: double): $Player
"getNearestPlayer"(targetingConditions0: $TargetingConditions$$Type, double1: double, double2: double, double3: double): $Player
"getPlayerByUUID"(uUID0: $UUID$$Type): $Player
"hasNearbyAlivePlayer"(double0: double, double1: double, double2: double, double3: double): boolean
"isUnobstructed"(entity0: $Entity$$Type, voxelShape1: $VoxelShape$$Type): boolean
"players"(): $List<$Player>
}

export namespace $EntityGetter {
const probejs$$marker: never
}
export abstract class $EntityGetter$$Static implements $EntityGetter {
}
}

declare module "net.minecraft.world.level.LightLayer" {
import { $Enum } from "java.lang.Enum"

export class $LightLayer extends $Enum<$LightLayer> {
static readonly "BLOCK": $LightLayer
static readonly "SKY": $LightLayer

public static "valueOf"(string0: string): $LightLayer
public static "values"(): $LightLayer[]
}
}

declare module "net.minecraft.world.level.SignalGetter" {
import { $LevelHeightAccessor } from "net.minecraft.world.level.LevelHeightAccessor"
import { $AABB$$Type } from "net.minecraft.world.phys.AABB"
import { $Direction, $Direction$$Type } from "net.minecraft.core.Direction"
import { $BiFunction$$Type } from "java.util.function.BiFunction"
import { $BlockHitResult } from "net.minecraft.world.phys.BlockHitResult"
import { $BlockState, $BlockState$$Type } from "net.minecraft.world.level.block.state.BlockState"
import { $ModelDataManager } from "net.minecraftforge.client.model.data.ModelDataManager"
import { $BlockEntity, $BlockEntity$$Type } from "net.minecraft.world.level.block.entity.BlockEntity"
import { $Supplier$$Type } from "java.util.function.Supplier"
import { $Function$$Type } from "java.util.function.Function"
import { $ClipBlockStateContext$$Type } from "net.minecraft.world.level.ClipBlockStateContext"
import { $BlockGetter } from "net.minecraft.world.level.BlockGetter"
import { $Stream } from "java.util.stream.Stream"
import { $ClipContext$$Type } from "net.minecraft.world.level.ClipContext"
import { $Vec3$$Type } from "net.minecraft.world.phys.Vec3"
import { $BlockPos$$Type } from "net.minecraft.core.BlockPos"
import { $BlockEntityType$$Type } from "net.minecraft.world.level.block.entity.BlockEntityType"
import { $FluidState } from "net.minecraft.world.level.material.FluidState"
import { $Optional } from "java.util.Optional"
import { $VoxelShape, $VoxelShape$$Type } from "net.minecraft.world.phys.shapes.VoxelShape"

export interface $SignalGetter extends $BlockGetter {
"clip"(clipContext0: $ClipContext$$Type): $BlockHitResult
"clipWithInteractionOverride"(vec30: $Vec3$$Type, vec31: $Vec3$$Type, blockPos2: $BlockPos$$Type, voxelShape3: $VoxelShape$$Type, blockState4: $BlockState$$Type): $BlockHitResult
"getBestNeighborSignal"(blockPos0: $BlockPos$$Type): integer
"getBlockEntity"<T extends $BlockEntity>(blockPos0: $BlockPos$$Type, blockEntityType1: $BlockEntityType$$Type<T>): $Optional<T>
"getBlockEntity"(blockPos0: $BlockPos$$Type): $BlockEntity
"getBlockFloorHeight"(voxelShape0: $VoxelShape$$Type, supplier1: $Supplier$$Type<$VoxelShape>): double
"getBlockFloorHeight"(blockPos0: $BlockPos$$Type): double
"getBlockState"(blockPos0: $BlockPos$$Type): $BlockState
"getBlockStates"(aABB0: $AABB$$Type): $Stream<$BlockState>
"getControlInputSignal"(blockPos0: $BlockPos$$Type, direction1: $Direction$$Type, boolean2: boolean): integer
"getDirectSignal"(blockPos0: $BlockPos$$Type, direction1: $Direction$$Type): integer
"getDirectSignalTo"(blockPos0: $BlockPos$$Type): integer
"getExistingBlockEntity"(blockPos0: $BlockPos$$Type): $BlockEntity
"getFluidState"(blockPos0: $BlockPos$$Type): $FluidState
"getHeight"(): integer
"getLightEmission"(blockPos0: $BlockPos$$Type): integer
"getMaxBuildHeight"(): integer
"getMaxLightLevel"(): integer
"getMaxSection"(): integer
"getMinBuildHeight"(): integer
"getMinSection"(): integer
"getModelDataManager"(): $ModelDataManager
"getSectionIndex"(int0: integer): integer
"getSectionIndexFromSectionY"(int0: integer): integer
"getSectionYFromSectionIndex"(int0: integer): integer
"getSectionsCount"(): integer
"getSignal"(blockPos0: $BlockPos$$Type, direction1: $Direction$$Type): integer
"hasNeighborSignal"(blockPos0: $BlockPos$$Type): boolean
"hasSignal"(blockPos0: $BlockPos$$Type, direction1: $Direction$$Type): boolean
"isBlockInLine"(clipBlockStateContext0: $ClipBlockStateContext$$Type): $BlockHitResult
"isOutsideBuildHeight"(blockPos0: $BlockPos$$Type): boolean
"isOutsideBuildHeight"(int0: integer): boolean
get "height"(): integer
get "maxBuildHeight"(): integer
get "maxLightLevel"(): integer
get "maxSection"(): integer
get "minBuildHeight"(): integer
get "minSection"(): integer
get "modelDataManager"(): $ModelDataManager
get "sectionsCount"(): integer
}

export namespace $SignalGetter {
const DIRECTIONS: $Direction[]
function create(int0: integer, int1: integer): $LevelHeightAccessor
function traverseBlocks<T, C>(vec30: $Vec3$$Type, vec31: $Vec3$$Type, c2: C, biFunction3: $BiFunction$$Type<C, $BlockPos$$Type, T>, function4: $Function$$Type<C, T>): T
}
export abstract class $SignalGetter$$Static implements $SignalGetter {
static readonly "DIRECTIONS": $Direction[]

static "create"(int0: integer, int1: integer): $LevelHeightAccessor
static "traverseBlocks"<T, C>(vec30: $Vec3$$Type, vec31: $Vec3$$Type, c2: C, biFunction3: $BiFunction$$Type<C, $BlockPos$$Type, T>, function4: $Function$$Type<C, T>): T
}
}

declare module "net.minecraft.world.level.ClipContext" {
import { $BlockGetter$$Type } from "net.minecraft.world.level.BlockGetter"
import { $ClipContext$Fluid$$Type } from "net.minecraft.world.level.ClipContext$Fluid"
import { $Entity$$Type } from "net.minecraft.world.entity.Entity"
import { $Vec3, $Vec3$$Type } from "net.minecraft.world.phys.Vec3"
import { $BlockPos$$Type } from "net.minecraft.core.BlockPos"
import { $ClipContext$Block$$Type } from "net.minecraft.world.level.ClipContext$Block"
import { $FluidState$$Type } from "net.minecraft.world.level.material.FluidState"
import { $BlockState$$Type } from "net.minecraft.world.level.block.state.BlockState"
import { $VoxelShape } from "net.minecraft.world.phys.shapes.VoxelShape"

export class $ClipContext {
constructor(vec30: $Vec3$$Type, vec31: $Vec3$$Type, block2: $ClipContext$Block$$Type, fluid3: $ClipContext$Fluid$$Type, entity4: $Entity$$Type)

public "getBlockShape"(blockState0: $BlockState$$Type, blockGetter1: $BlockGetter$$Type, blockPos2: $BlockPos$$Type): $VoxelShape
public "getFluidShape"(fluidState0: $FluidState$$Type, blockGetter1: $BlockGetter$$Type, blockPos2: $BlockPos$$Type): $VoxelShape
public "getFrom"(): $Vec3
public "getTo"(): $Vec3
get "from"(): $Vec3
get "to"(): $Vec3
}
}

declare module "net.minecraft.world.level.LevelSimulatedReader" {
import { $BlockPos, $BlockPos$$Type } from "net.minecraft.core.BlockPos"
import { $BlockEntityType$$Type } from "net.minecraft.world.level.block.entity.BlockEntityType"
import { $Predicate$$Type } from "java.util.function.Predicate"
import { $FluidState$$Type } from "net.minecraft.world.level.material.FluidState"
import { $Optional } from "java.util.Optional"
import { $BlockState$$Type } from "net.minecraft.world.level.block.state.BlockState"
import { $Heightmap$Types$$Type } from "net.minecraft.world.level.levelgen.Heightmap$Types"
import { $BlockEntity, $BlockEntity$$Type } from "net.minecraft.world.level.block.entity.BlockEntity"

export interface $LevelSimulatedReader {
"getBlockEntity"<T extends $BlockEntity>(blockPos0: $BlockPos$$Type, blockEntityType1: $BlockEntityType$$Type<T>): $Optional<T>
"getHeightmapPos"(types0: $Heightmap$Types$$Type, blockPos1: $BlockPos$$Type): $BlockPos
"isFluidAtPosition"(blockPos0: $BlockPos$$Type, predicate1: $Predicate$$Type<$FluidState$$Type>): boolean
"isStateAtPosition"(blockPos0: $BlockPos$$Type, predicate1: $Predicate$$Type<$BlockState$$Type>): boolean
}

export namespace $LevelSimulatedReader {
const probejs$$marker: never
}
export abstract class $LevelSimulatedReader$$Static implements $LevelSimulatedReader {
}
}

declare module "net.minecraft.world.level.LevelSimulatedRW" {
import { $Entity$$Type } from "net.minecraft.world.entity.Entity"
import { $BlockPos, $BlockPos$$Type } from "net.minecraft.core.BlockPos"
import { $BlockEntityType$$Type } from "net.minecraft.world.level.block.entity.BlockEntityType"
import { $Predicate$$Type } from "java.util.function.Predicate"
import { $FluidState$$Type } from "net.minecraft.world.level.material.FluidState"
import { $LevelSimulatedReader } from "net.minecraft.world.level.LevelSimulatedReader"
import { $Optional } from "java.util.Optional"
import { $BlockState$$Type } from "net.minecraft.world.level.block.state.BlockState"
import { $LevelWriter } from "net.minecraft.world.level.LevelWriter"
import { $Heightmap$Types$$Type } from "net.minecraft.world.level.levelgen.Heightmap$Types"
import { $BlockEntity, $BlockEntity$$Type } from "net.minecraft.world.level.block.entity.BlockEntity"

export interface $LevelSimulatedRW extends $LevelSimulatedReader, $LevelWriter {
"addFreshEntity"(entity0: $Entity$$Type): boolean
"destroyBlock"(blockPos0: $BlockPos$$Type, boolean1: boolean, entity2: $Entity$$Type, int3: integer): boolean
"destroyBlock"(blockPos0: $BlockPos$$Type, boolean1: boolean): boolean
"destroyBlock"(blockPos0: $BlockPos$$Type, boolean1: boolean, entity2: $Entity$$Type): boolean
"getBlockEntity"<T extends $BlockEntity>(blockPos0: $BlockPos$$Type, blockEntityType1: $BlockEntityType$$Type<T>): $Optional<T>
"getHeightmapPos"(types0: $Heightmap$Types$$Type, blockPos1: $BlockPos$$Type): $BlockPos
"isFluidAtPosition"(blockPos0: $BlockPos$$Type, predicate1: $Predicate$$Type<$FluidState$$Type>): boolean
"isStateAtPosition"(blockPos0: $BlockPos$$Type, predicate1: $Predicate$$Type<$BlockState$$Type>): boolean
"removeBlock"(blockPos0: $BlockPos$$Type, boolean1: boolean): boolean
"setBlock"(blockPos0: $BlockPos$$Type, blockState1: $BlockState$$Type, int2: integer): boolean
"setBlock"(blockPos0: $BlockPos$$Type, blockState1: $BlockState$$Type, int2: integer, int3: integer): boolean
}

export namespace $LevelSimulatedRW {
const probejs$$marker: never
}
export abstract class $LevelSimulatedRW$$Static implements $LevelSimulatedRW {
}
}

declare module "net.minecraft.world.level.GameType" {
import { $Abilities$$Type } from "net.minecraft.world.entity.player.Abilities"
import { $CallbackInfo$$Type } from "org.spongepowered.asm.mixin.injection.callback.CallbackInfo"
import { $Enum, $Enum$$Type } from "java.lang.Enum"
import { $Component } from "net.minecraft.network.chat.Component"
import { $StringRepresentable, $StringRepresentable$$Type } from "net.minecraft.util.StringRepresentable"
import { $StringRepresentable$EnumCodec } from "net.minecraft.util.StringRepresentable$EnumCodec"
import { $Keyable } from "com.mojang.serialization.Keyable"
import { $Supplier$$Type } from "java.util.function.Supplier"
import { $Function$$Type } from "java.util.function.Function"

export class $GameType extends $Enum<$GameType> implements $StringRepresentable {
static readonly "ADVENTURE": $GameType
static readonly "CODEC": $StringRepresentable$EnumCodec<$GameType>
static readonly "CREATIVE": $GameType
static readonly "DEFAULT_MODE": $GameType
static readonly "SPECTATOR": $GameType
static readonly "SURVIVAL": $GameType

public static "byId"(int0: integer): $GameType
public static "byName"(string0: string): $GameType
public static "byName"(string0: string, gameType1: $GameType$$Type): $GameType
public static "byNullableId"(int0: integer): $GameType
public static "fromEnum"<E extends ($Enum<E> & $StringRepresentable)>(supplier0: $Supplier$$Type<E[]>): $StringRepresentable$EnumCodec<E>
public static "fromEnumWithMapping"<E extends ($Enum<E> & $StringRepresentable)>(supplier0: $Supplier$$Type<E[]>, function1: $Function$$Type<string, string>): $StringRepresentable$EnumCodec<E>
public "getId"(): integer
public "getLongDisplayName"(): $Component
public "getName"(): string
public static "getNullableId"(gameType0: $GameType$$Type): integer
public "getSerializedName"(): string
public "getShortDisplayName"(): $Component
public "handler$bga000$apoth_flightAttribModifier"(abilities0: $Abilities$$Type, callbackInfo1: $CallbackInfo$$Type): void
public "handler$bga000$apoth_recordOldFlyingAttribs"(abilities0: $Abilities$$Type, callbackInfo1: $CallbackInfo$$Type): void
public "isBlockPlacingRestricted"(): boolean
public "isCreative"(): boolean
public "isSurvival"(): boolean
public static "keys"(stringRepresentable0s: $StringRepresentable$$Type[]): $Keyable
public "updatePlayerAbilities"(abilities0: $Abilities$$Type): void
public static "valueOf"(string0: string): $GameType
public static "values"(): $GameType[]
get "id"(): integer
get "longDisplayName"(): $Component
get "name"(): string
get "serializedName"(): string
get "shortDisplayName"(): $Component
get "blockPlacingRestricted"(): boolean
get "creative"(): boolean
get "survival"(): boolean
}
}

declare module "net.minecraft.world.level.ClipBlockStateContext" {
import { $Vec3, $Vec3$$Type } from "net.minecraft.world.phys.Vec3"
import { $Predicate, $Predicate$$Type } from "java.util.function.Predicate"
import { $BlockState, $BlockState$$Type } from "net.minecraft.world.level.block.state.BlockState"

export class $ClipBlockStateContext {
constructor(vec30: $Vec3$$Type, vec31: $Vec3$$Type, predicate2: $Predicate$$Type<$BlockState$$Type>)

public "getFrom"(): $Vec3
public "getTo"(): $Vec3
public "isTargetBlock"(): $Predicate<$BlockState>
get "from"(): $Vec3
get "to"(): $Vec3
get "targetBlock"(): $Predicate<$BlockState>
}
}

declare module "net.minecraft.world.level.ColorResolver" {
import { $Biome$$Type } from "net.minecraft.world.level.biome.Biome"

export interface $ColorResolver {
"getColor"(biome0: $Biome$$Type, double1: double, double2: double): integer
}

export namespace $ColorResolver {
const probejs$$marker: never
}
export abstract class $ColorResolver$$Static implements $ColorResolver {
}
}

declare module "net.minecraft.world.level.ExplosionDamageCalculator" {
import { $BlockGetter$$Type } from "net.minecraft.world.level.BlockGetter"
import { $BlockPos$$Type } from "net.minecraft.core.BlockPos"
import { $FluidState$$Type } from "net.minecraft.world.level.material.FluidState"
import { $Optional } from "java.util.Optional"
import { $BlockState$$Type } from "net.minecraft.world.level.block.state.BlockState"
import { $Explosion$$Type } from "net.minecraft.world.level.Explosion"

export class $ExplosionDamageCalculator {
constructor()

public "getBlockExplosionResistance"(explosion0: $Explosion$$Type, blockGetter1: $BlockGetter$$Type, blockPos2: $BlockPos$$Type, blockState3: $BlockState$$Type, fluidState4: $FluidState$$Type): $Optional<float>
public "shouldBlockExplode"(explosion0: $Explosion$$Type, blockGetter1: $BlockGetter$$Type, blockPos2: $BlockPos$$Type, blockState3: $BlockState$$Type, float4: float): boolean
}
}

declare module "net.minecraft.world.level.GameRules$Key" {
import { $GameRules$Value } from "net.minecraft.world.level.GameRules$Value"
import { $GameRules$Category, $GameRules$Category$$Type } from "net.minecraft.world.level.GameRules$Category"

export class $GameRules$Key<T extends $GameRules$Value<T> = $GameRules$Value<T>> {
constructor(string0: string, category1: $GameRules$Category$$Type)

public "getCategory"(): $GameRules$Category
public "getDescriptionId"(): string
public "getId"(): string
get "category"(): $GameRules$Category
get "descriptionId"(): string
get "id"(): string
}
}

declare module "net.minecraft.world.level.LevelSettings" {
import { $Dynamic$$Type } from "com.mojang.serialization.Dynamic"
import { $GameRules, $GameRules$$Type } from "net.minecraft.world.level.GameRules"
import { $WorldDataConfiguration, $WorldDataConfiguration$$Type } from "net.minecraft.world.level.WorldDataConfiguration"
import { $Lifecycle, $Lifecycle$$Type } from "com.mojang.serialization.Lifecycle"
import { $GameType, $GameType$$Type } from "net.minecraft.world.level.GameType"
import { $Difficulty, $Difficulty$$Type } from "net.minecraft.world.Difficulty"

export class $LevelSettings {
constructor(string0: string, gameType1: $GameType$$Type, boolean2: boolean, difficulty3: $Difficulty$$Type, boolean4: boolean, gameRules5: $GameRules$$Type, worldDataConfiguration6: $WorldDataConfiguration$$Type, lifecycle7: $Lifecycle$$Type)
constructor(string0: string, gameType1: $GameType$$Type, boolean2: boolean, difficulty3: $Difficulty$$Type, boolean4: boolean, gameRules5: $GameRules$$Type, worldDataConfiguration6: $WorldDataConfiguration$$Type)

public "allowCommands"(): boolean
public "copy"(): $LevelSettings
public "difficulty"(): $Difficulty
public "gameRules"(): $GameRules
public "gameType"(): $GameType
public "getDataConfiguration"(): $WorldDataConfiguration
public "getLifecycle"(): $Lifecycle
public "hardcore"(): boolean
public "levelName"(): string
public static "parse"(dynamic0: $Dynamic$$Type<any>, worldDataConfiguration1: $WorldDataConfiguration$$Type): $LevelSettings
public "withDataConfiguration"(worldDataConfiguration0: $WorldDataConfiguration$$Type): $LevelSettings
public "withDifficulty"(difficulty0: $Difficulty$$Type): $LevelSettings
public "withGameType"(gameType0: $GameType$$Type): $LevelSettings
public "withLifecycle"(lifecycle0: $Lifecycle$$Type): $LevelSettings
get "dataConfiguration"(): $WorldDataConfiguration
get "lifecycle"(): $Lifecycle
}
}

declare module "net.minecraft.world.level.ChunkPos" {
import { $Stream } from "java.util.stream.Stream"
import { $BlockPos, $BlockPos$$Type } from "net.minecraft.core.BlockPos"

export class $ChunkPos {
static readonly "INVALID_CHUNK_POS": long
static readonly "REGION_MAX_INDEX": integer
static readonly "REGION_SIZE": integer
static readonly "ZERO": $ChunkPos
readonly "x": integer
readonly "z": integer

constructor(long0: long)
constructor(blockPos0: $BlockPos$$Type)
constructor(int0: integer, int1: integer)

public static "asLong"(int0: integer, int1: integer): long
public static "asLong"(blockPos0: $BlockPos$$Type): long
public "getBlockAt"(int0: integer, int1: integer, int2: integer): $BlockPos
public "getBlockX"(int0: integer): integer
public "getBlockZ"(int0: integer): integer
public "getChessboardDistance"(chunkPos0: $ChunkPos$$Type): integer
public "getMaxBlockX"(): integer
public "getMaxBlockZ"(): integer
public "getMiddleBlockPosition"(int0: integer): $BlockPos
public "getMiddleBlockX"(): integer
public "getMiddleBlockZ"(): integer
public "getMinBlockX"(): integer
public "getMinBlockZ"(): integer
public "getRegionLocalX"(): integer
public "getRegionLocalZ"(): integer
public "getRegionX"(): integer
public "getRegionZ"(): integer
public "getWorldPosition"(): $BlockPos
public static "getX"(long0: long): integer
public static "getZ"(long0: long): integer
public static "hash"(int0: integer, int1: integer): integer
public static "maxFromRegion"(int0: integer, int1: integer): $ChunkPos
public static "minFromRegion"(int0: integer, int1: integer): $ChunkPos
public static "rangeClosed"(chunkPos0: $ChunkPos$$Type, int1: integer): $Stream<$ChunkPos>
public static "rangeClosed"(chunkPos0: $ChunkPos$$Type, chunkPos1: $ChunkPos$$Type): $Stream<$ChunkPos>
public "toLong"(): long
get "maxBlockX"(): integer
get "maxBlockZ"(): integer
get "middleBlockX"(): integer
get "middleBlockZ"(): integer
get "minBlockX"(): integer
get "minBlockZ"(): integer
get "regionLocalX"(): integer
get "regionLocalZ"(): integer
get "regionX"(): integer
get "regionZ"(): integer
get "worldPosition"(): $BlockPos
}
}

declare module "net.minecraft.world.level.StructureManager" {
import { $StructureCheckResult } from "net.minecraft.world.level.levelgen.structure.StructureCheckResult"
import { $Predicate$$Type } from "java.util.function.Predicate"
import { $StructureAccess$$Type } from "net.minecraft.world.level.chunk.StructureAccess"
import { $WorldGenRegion$$Type } from "net.minecraft.server.level.WorldGenRegion"
import { $RegistryAccess } from "net.minecraft.core.RegistryAccess"
import { $ResourceKey$$Type } from "net.minecraft.resources.ResourceKey"
import { $StructureManagerAccessor } from "com.craisinlord.integrated_api.mixins.structures.StructureManagerAccessor"
import { $ChunkPos$$Type } from "net.minecraft.world.level.ChunkPos"
import { $Consumer$$Type } from "java.util.function.Consumer"
import { $TagKey$$Type } from "net.minecraft.tags.TagKey"
import { $Structure, $Structure$$Type } from "net.minecraft.world.level.levelgen.structure.Structure"
import { $WorldOptions$$Type } from "net.minecraft.world.level.levelgen.WorldOptions"
import { $List } from "java.util.List"
import { $StructureManagerAccessor as $StructureManagerAccessor$0 } from "com.github.L_Ender.cataclysm.mixin.accessor.StructureManagerAccessor"
import { $BlockPos$$Type } from "net.minecraft.core.BlockPos"
import { $Map } from "java.util.Map"
import { $LevelAccessor, $LevelAccessor$$Type } from "net.minecraft.world.level.LevelAccessor"
import { $SectionPos$$Type } from "net.minecraft.core.SectionPos"
import { $StructureCheck$$Type } from "net.minecraft.world.level.levelgen.structure.StructureCheck"
import { $StructureStart, $StructureStart$$Type } from "net.minecraft.world.level.levelgen.structure.StructureStart"
import { $LongSet, $LongSet$$Type } from "it.unimi.dsi.fastutil.longs.LongSet"

export class $StructureManager implements $StructureManagerAccessor, $StructureManagerAccessor$0 {
readonly "level": $LevelAccessor

constructor(levelAccessor0: $LevelAccessor$$Type, worldOptions1: $WorldOptions$$Type, structureCheck2: $StructureCheck$$Type)

public "addReference"(structureStart0: $StructureStart$$Type): void
public "addReferenceForStructure"(sectionPos0: $SectionPos$$Type, structure1: $Structure$$Type, long2: long, structureAccess3: $StructureAccess$$Type): void
public "checkStructurePresence"(chunkPos0: $ChunkPos$$Type, structure1: $Structure$$Type, boolean2: boolean): $StructureCheckResult
public "fillStartsForStructure"(structure0: $Structure$$Type, longSet1: $LongSet$$Type, consumer2: $Consumer$$Type<$StructureStart$$Type>): void
public "forWorldGenRegion"(worldGenRegion0: $WorldGenRegion$$Type): $StructureManager
public "getAllStructuresAt"(blockPos0: $BlockPos$$Type): $Map<$Structure, $LongSet>
public "getStartForStructure"(sectionPos0: $SectionPos$$Type, structure1: $Structure$$Type, structureAccess2: $StructureAccess$$Type): $StructureStart
public "getStructureAt"(blockPos0: $BlockPos$$Type, structure1: $Structure$$Type): $StructureStart
public "getStructureWithPieceAt"(blockPos0: $BlockPos$$Type, resourceKey1: $ResourceKey$$Type<$Structure>): $StructureStart
public "getStructureWithPieceAt"(blockPos0: $BlockPos$$Type, structure1: $Structure$$Type): $StructureStart
public "getStructureWithPieceAt"(blockPos0: $BlockPos$$Type, tagKey1: $TagKey$$Type<$Structure$$Type>): $StructureStart
public "hasAnyStructureAt"(blockPos0: $BlockPos$$Type): boolean
public "registryAccess"(): $RegistryAccess
public "setStartForStructure"(sectionPos0: $SectionPos$$Type, structure1: $Structure$$Type, structureStart2: $StructureStart$$Type, structureAccess3: $StructureAccess$$Type): void
public "shouldGenerateStructures"(): boolean
public "startsForStructure"(sectionPos0: $SectionPos$$Type, structure1: $Structure$$Type): $List<$StructureStart>
public "startsForStructure"(chunkPos0: $ChunkPos$$Type, predicate1: $Predicate$$Type<$Structure$$Type>): $List<$StructureStart>
public "structureHasPieceAt"(blockPos0: $BlockPos$$Type, structureStart1: $StructureStart$$Type): boolean
}
}

declare module "net.minecraft.world.level.PathNavigationRegion" {
import { $CollisionContext$$Type } from "net.minecraft.world.phys.shapes.CollisionContext"
import { $LevelHeightAccessor } from "net.minecraft.world.level.LevelHeightAccessor"
import { $AABB$$Type } from "net.minecraft.world.phys.AABB"
import { $CollisionGetter } from "net.minecraft.world.level.CollisionGetter"
import { $BiFunction$$Type } from "java.util.function.BiFunction"
import { $BlockState, $BlockState$$Type } from "net.minecraft.world.level.block.state.BlockState"
import { $Supplier$$Type } from "java.util.function.Supplier"
import { $Function$$Type } from "java.util.function.Function"
import { $Iterable } from "java.lang.Iterable"
import { $ClipBlockStateContext$$Type } from "net.minecraft.world.level.ClipBlockStateContext"
import { $BlockGetter } from "net.minecraft.world.level.BlockGetter"
import { $ClipContext$$Type } from "net.minecraft.world.level.ClipContext"
import { $WorldBorder } from "net.minecraft.world.level.border.WorldBorder"
import { $ProfilerFiller } from "net.minecraft.util.profiling.ProfilerFiller"
import { $ChunkView } from "com.abdelaziz.canary.common.world.ChunkView"
import { $BlockHitResult } from "net.minecraft.world.phys.BlockHitResult"
import { $ModelDataManager } from "net.minecraftforge.client.model.data.ModelDataManager"
import { $BlockEntity, $BlockEntity$$Type } from "net.minecraft.world.level.block.entity.BlockEntity"
import { $ChunkAccess } from "net.minecraft.world.level.chunk.ChunkAccess"
import { $List } from "java.util.List"
import { $Entity$$Type } from "net.minecraft.world.entity.Entity"
import { $Stream } from "java.util.stream.Stream"
import { $BlockPos, $BlockPos$$Type } from "net.minecraft.core.BlockPos"
import { $Vec3, $Vec3$$Type } from "net.minecraft.world.phys.Vec3"
import { $BlockEntityType$$Type } from "net.minecraft.world.level.block.entity.BlockEntityType"
import { $FluidState } from "net.minecraft.world.level.material.FluidState"
import { $Optional } from "java.util.Optional"
import { $Level$$Type } from "net.minecraft.world.level.Level"
import { $VoxelShape, $VoxelShape$$Type } from "net.minecraft.world.phys.shapes.VoxelShape"

export class $PathNavigationRegion implements $BlockGetter, $CollisionGetter, $ChunkView {
constructor(level0: $Level$$Type, blockPos1: $BlockPos$$Type, blockPos2: $BlockPos$$Type)

public "clip"(clipContext0: $ClipContext$$Type): $BlockHitResult
public "clipWithInteractionOverride"(vec30: $Vec3$$Type, vec31: $Vec3$$Type, blockPos2: $BlockPos$$Type, voxelShape3: $VoxelShape$$Type, blockState4: $BlockState$$Type): $BlockHitResult
public "collidesWithSuffocatingBlock"(entity0: $Entity$$Type, aABB1: $AABB$$Type): boolean
public static "create"(int0: integer, int1: integer): $LevelHeightAccessor
public "findFreePosition"(entity0: $Entity$$Type, voxelShape1: $VoxelShape$$Type, vec32: $Vec3$$Type, double3: double, double4: double, double5: double): $Optional<$Vec3>
public "findSupportingBlock"(entity0: $Entity$$Type, aABB1: $AABB$$Type): $Optional<$BlockPos>
public "getBlockCollisions"(entity0: $Entity$$Type, aABB1: $AABB$$Type): $Iterable<$VoxelShape>
public "getBlockEntity"(blockPos0: $BlockPos$$Type): $BlockEntity
public "getBlockEntity"<T extends $BlockEntity>(blockPos0: $BlockPos$$Type, blockEntityType1: $BlockEntityType$$Type<T>): $Optional<T>
public "getBlockFloorHeight"(voxelShape0: $VoxelShape$$Type, supplier1: $Supplier$$Type<$VoxelShape>): double
public "getBlockFloorHeight"(blockPos0: $BlockPos$$Type): double
public "getBlockState"(blockPos0: $BlockPos$$Type): $BlockState
public "getBlockStates"(aABB0: $AABB$$Type): $Stream<$BlockState>
public "getChunkForCollisions"(int0: integer, int1: integer): $BlockGetter
public "getCollisions"(entity0: $Entity$$Type, aABB1: $AABB$$Type): $Iterable<$VoxelShape>
public "getEntityCollisions"(entity0: $Entity$$Type, aABB1: $AABB$$Type): $List<$VoxelShape>
public "getExistingBlockEntity"(blockPos0: $BlockPos$$Type): $BlockEntity
public "getFluidState"(blockPos0: $BlockPos$$Type): $FluidState
public "getHeight"(): integer
public "getLightEmission"(blockPos0: $BlockPos$$Type): integer
public "getLoadedChunk"(int0: integer, int1: integer): $ChunkAccess
public "getMaxBuildHeight"(): integer
public "getMaxLightLevel"(): integer
public "getMaxSection"(): integer
public "getMinBuildHeight"(): integer
public "getMinSection"(): integer
public "getModelDataManager"(): $ModelDataManager
public "getProfiler"(): $ProfilerFiller
public "getSectionIndex"(int0: integer): integer
public "getSectionIndexFromSectionY"(int0: integer): integer
public "getSectionYFromSectionIndex"(int0: integer): integer
public "getSectionsCount"(): integer
public "getWorldBorder"(): $WorldBorder
public "isBlockInLine"(clipBlockStateContext0: $ClipBlockStateContext$$Type): $BlockHitResult
public "isOutsideBuildHeight"(blockPos0: $BlockPos$$Type): boolean
public "isOutsideBuildHeight"(int0: integer): boolean
public "isUnobstructed"(entity0: $Entity$$Type, voxelShape1: $VoxelShape$$Type): boolean
public "isUnobstructed"(blockState0: $BlockState$$Type, blockPos1: $BlockPos$$Type, collisionContext2: $CollisionContext$$Type): boolean
public "isUnobstructed"(entity0: $Entity$$Type): boolean
public "noCollision"(entity0: $Entity$$Type, aABB1: $AABB$$Type): boolean
public "noCollision"(entity0: $Entity$$Type): boolean
public "noCollision"(aABB0: $AABB$$Type): boolean
public static "traverseBlocks"<T, C>(vec30: $Vec3$$Type, vec31: $Vec3$$Type, c2: C, biFunction3: $BiFunction$$Type<C, $BlockPos$$Type, T>, function4: $Function$$Type<C, T>): T
get "height"(): integer
get "maxBuildHeight"(): integer
get "maxLightLevel"(): integer
get "maxSection"(): integer
get "minBuildHeight"(): integer
get "minSection"(): integer
get "modelDataManager"(): $ModelDataManager
get "profiler"(): $ProfilerFiller
get "sectionsCount"(): integer
get "worldBorder"(): $WorldBorder
}
}

declare module "net.minecraft.world.level.GameRules$Value" {
import { $MinecraftServer$$Type } from "net.minecraft.server.MinecraftServer"
import { $CommandContext$$Type } from "com.mojang.brigadier.context.CommandContext"
import { $CommandSourceStack$$Type } from "net.minecraft.commands.CommandSourceStack"
import { $GameRules$Type$$Type } from "net.minecraft.world.level.GameRules$Type"

export class $GameRules$Value<T extends $GameRules$Value<T> = $GameRules$Value<T>> {
constructor(type0: $GameRules$Type$$Type<T>)

public "deserialize"(string0: string): void
public "getCommandResult"(): integer
public "onChanged"(minecraftServer0: $MinecraftServer$$Type): void
public "serialize"(): string
public "setFrom"(t0: T, minecraftServer1: $MinecraftServer$$Type): void
public "setFromArgument"(commandContext0: $CommandContext$$Type<$CommandSourceStack$$Type>, string1: string): void
get "commandResult"(): integer
}
}

declare module "net.minecraft.world.level.GameRules$IntegerValue" {
import { $MinecraftServer$$Type } from "net.minecraft.server.MinecraftServer"
import { $GameRules$Value } from "net.minecraft.world.level.GameRules$Value"
import { $IntegerValueInvoker } from "artifacts.mixin.gamerule.IntegerValueInvoker"
import { $GameRules$Type, $GameRules$Type$$Type } from "net.minecraft.world.level.GameRules$Type"
import { $BiConsumer$$Type } from "java.util.function.BiConsumer"

export class $GameRules$IntegerValue extends $GameRules$Value<$GameRules$IntegerValue> implements $IntegerValueInvoker {
constructor(type0: $GameRules$Type$$Type<$GameRules$IntegerValue$$Type>, int1: integer)

public static "create"(int0: integer, biConsumer1: $BiConsumer$$Type<$MinecraftServer$$Type, $GameRules$IntegerValue$$Type>): $GameRules$Type<$GameRules$IntegerValue>
public static "create"(int0: integer): $GameRules$Type<$GameRules$IntegerValue>
public "get"(): integer
public "set"(int0: integer, minecraftServer1: $MinecraftServer$$Type): void
public "setFrom"(integerValue0: $GameRules$IntegerValue$$Type, minecraftServer1: $MinecraftServer$$Type): void
public "tryDeserialize"(string0: string): boolean
}
}

declare module "net.minecraft.world.level.Explosion$BlockInteraction" {
import { $Enum } from "java.lang.Enum"

export class $Explosion$BlockInteraction extends $Enum<$Explosion$BlockInteraction> {
static readonly "DESTROY": $Explosion$BlockInteraction
static readonly "DESTROY_WITH_DECAY": $Explosion$BlockInteraction
static readonly "KEEP": $Explosion$BlockInteraction

public static "valueOf"(string0: string): $Explosion$BlockInteraction
public static "values"(): $Explosion$BlockInteraction[]
}
}

declare module "net.minecraft.world.level.CommonLevelAccessor" {
import { $LevelHeightAccessor } from "net.minecraft.world.level.LevelHeightAccessor"
import { $AABB$$Type } from "net.minecraft.world.phys.AABB"
import { $LivingEntity, $LivingEntity$$Type } from "net.minecraft.world.entity.LivingEntity"
import { $Direction$$Type } from "net.minecraft.core.Direction"
import { $BiFunction$$Type } from "java.util.function.BiFunction"
import { $EntityTypeTest$$Type } from "net.minecraft.world.level.entity.EntityTypeTest"
import { $Registry } from "net.minecraft.core.Registry"
import { $ClipBlockStateContext$$Type } from "net.minecraft.world.level.ClipBlockStateContext"
import { $BlockGetter } from "net.minecraft.world.level.BlockGetter"
import { $TargetingConditions$$Type } from "net.minecraft.world.entity.ai.targeting.TargetingConditions"
import { $Holder } from "net.minecraft.core.Holder"
import { $LevelSimulatedRW } from "net.minecraft.world.level.LevelSimulatedRW"
import { $LightLayer$$Type } from "net.minecraft.world.level.LightLayer"
import { $BiomeManager } from "net.minecraft.world.level.biome.BiomeManager"
import { $Predicate$$Type } from "java.util.function.Predicate"
import { $BlockHitResult } from "net.minecraft.world.phys.BlockHitResult"
import { $UUID$$Type } from "java.util.UUID"
import { $BlockEntity, $BlockEntity$$Type } from "net.minecraft.world.level.block.entity.BlockEntity"
import { $RegistryAccess } from "net.minecraft.core.RegistryAccess"
import { $LevelReader } from "net.minecraft.world.level.LevelReader"
import { $ChunkAccess } from "net.minecraft.world.level.chunk.ChunkAccess"
import { $Player } from "net.minecraft.world.entity.player.Player"
import { $FeatureFlagSet } from "net.minecraft.world.flag.FeatureFlagSet"
import { $List, $List$$Type } from "java.util.List"
import { $Stream } from "java.util.stream.Stream"
import { $LevelLightEngine } from "net.minecraft.world.level.lighting.LevelLightEngine"
import { $BlockPos, $BlockPos$$Type } from "net.minecraft.core.BlockPos"
import { $BlockEntityType$$Type } from "net.minecraft.world.level.block.entity.BlockEntityType"
import { $FluidState, $FluidState$$Type } from "net.minecraft.world.level.material.FluidState"
import { $Optional } from "java.util.Optional"
import { $Heightmap$Types$$Type } from "net.minecraft.world.level.levelgen.Heightmap$Types"
import { $VoxelShape, $VoxelShape$$Type } from "net.minecraft.world.phys.shapes.VoxelShape"
import { $CollisionContext$$Type } from "net.minecraft.world.phys.shapes.CollisionContext"
import { $BlockState, $BlockState$$Type } from "net.minecraft.world.level.block.state.BlockState"
import { $DimensionType } from "net.minecraft.world.level.dimension.DimensionType"
import { $EntityGetter } from "net.minecraft.world.level.EntityGetter"
import { $Biome } from "net.minecraft.world.level.biome.Biome"
import { $Supplier$$Type } from "java.util.function.Supplier"
import { $Function$$Type } from "java.util.function.Function"
import { $Iterable } from "java.lang.Iterable"
import { $ColorResolver$$Type } from "net.minecraft.world.level.ColorResolver"
import { $ClipContext$$Type } from "net.minecraft.world.level.ClipContext"
import { $WorldBorder } from "net.minecraft.world.level.border.WorldBorder"
import { $HolderLookup } from "net.minecraft.core.HolderLookup"
import { $ModelDataManager } from "net.minecraftforge.client.model.data.ModelDataManager"
import { $ResourceKey$$Type } from "net.minecraft.resources.ResourceKey"
import { $Entity, $Entity$$Type } from "net.minecraft.world.entity.Entity"
import { $Vec3, $Vec3$$Type } from "net.minecraft.world.phys.Vec3"
import { $Class$$Type } from "java.lang.Class"
import { $ChunkStatus$$Type } from "net.minecraft.world.level.chunk.ChunkStatus"

export interface $CommonLevelAccessor extends $EntityGetter, $LevelReader, $LevelSimulatedRW {
"addFreshEntity"(entity0: $Entity$$Type): boolean
"canSeeSky"(blockPos0: $BlockPos$$Type): boolean
"canSeeSkyFromBelowWater"(blockPos0: $BlockPos$$Type): boolean
"clip"(clipContext0: $ClipContext$$Type): $BlockHitResult
"clipWithInteractionOverride"(vec30: $Vec3$$Type, vec31: $Vec3$$Type, blockPos2: $BlockPos$$Type, voxelShape3: $VoxelShape$$Type, blockState4: $BlockState$$Type): $BlockHitResult
"collidesWithSuffocatingBlock"(entity0: $Entity$$Type, aABB1: $AABB$$Type): boolean
"containsAnyLiquid"(aABB0: $AABB$$Type): boolean
"destroyBlock"(blockPos0: $BlockPos$$Type, boolean1: boolean, entity2: $Entity$$Type, int3: integer): boolean
"destroyBlock"(blockPos0: $BlockPos$$Type, boolean1: boolean): boolean
"destroyBlock"(blockPos0: $BlockPos$$Type, boolean1: boolean, entity2: $Entity$$Type): boolean
"dimensionType"(): $DimensionType
"enabledFeatures"(): $FeatureFlagSet
"findFreePosition"(entity0: $Entity$$Type, voxelShape1: $VoxelShape$$Type, vec32: $Vec3$$Type, double3: double, double4: double, double5: double): $Optional<$Vec3>
"findSupportingBlock"(entity0: $Entity$$Type, aABB1: $AABB$$Type): $Optional<$BlockPos>
"getBestNeighborSignal"(blockPos0: $BlockPos$$Type): integer
"getBiome"(blockPos0: $BlockPos$$Type): $Holder<$Biome>
"getBiomeManager"(): $BiomeManager
"getBlockCollisions"(entity0: $Entity$$Type, aABB1: $AABB$$Type): $Iterable<$VoxelShape>
"getBlockEntity"<T extends $BlockEntity>(blockPos0: $BlockPos$$Type, blockEntityType1: $BlockEntityType$$Type<T>): $Optional<T>
"getBlockEntity"(blockPos0: $BlockPos$$Type): $BlockEntity
"getBlockFloorHeight"(voxelShape0: $VoxelShape$$Type, supplier1: $Supplier$$Type<$VoxelShape>): double
"getBlockFloorHeight"(blockPos0: $BlockPos$$Type): double
"getBlockState"(blockPos0: $BlockPos$$Type): $BlockState
"getBlockStates"(aABB0: $AABB$$Type): $Stream<$BlockState>
"getBlockStatesIfLoaded"(aABB0: $AABB$$Type): $Stream<$BlockState>
"getBlockTint"(blockPos0: $BlockPos$$Type, colorResolver1: $ColorResolver$$Type): integer
"getBrightness"(lightLayer0: $LightLayer$$Type, blockPos1: $BlockPos$$Type): integer
"getChunk"(int0: integer, int1: integer, chunkStatus2: $ChunkStatus$$Type, boolean3: boolean): $ChunkAccess
"getChunk"(blockPos0: $BlockPos$$Type): $ChunkAccess
"getChunk"(int0: integer, int1: integer, chunkStatus2: $ChunkStatus$$Type): $ChunkAccess
"getChunk"(int0: integer, int1: integer): $ChunkAccess
"getChunkForCollisions"(int0: integer, int1: integer): $BlockGetter
"getCollisions"(entity0: $Entity$$Type, aABB1: $AABB$$Type): $Iterable<$VoxelShape>
"getControlInputSignal"(blockPos0: $BlockPos$$Type, direction1: $Direction$$Type, boolean2: boolean): integer
"getDirectSignal"(blockPos0: $BlockPos$$Type, direction1: $Direction$$Type): integer
"getDirectSignalTo"(blockPos0: $BlockPos$$Type): integer
"getEntities"(entity0: $Entity$$Type, aABB1: $AABB$$Type): $List<$Entity>
"getEntities"<T extends $Entity>(entityTypeTest0: $EntityTypeTest$$Type<$Entity$$Type, T>, aABB1: $AABB$$Type, predicate2: $Predicate$$Type<T>): $List<T>
"getEntities"(entity0: $Entity$$Type, aABB1: $AABB$$Type, predicate2: $Predicate$$Type<$Entity$$Type>): $List<$Entity>
"getEntitiesOfClass"<T extends $Entity>(class0: $Class$$Type<T>, aABB1: $AABB$$Type): $List<T>
"getEntitiesOfClass"<T extends $Entity>(class0: $Class$$Type<T>, aABB1: $AABB$$Type, predicate2: $Predicate$$Type<T>): $List<T>
"getEntityCollisions"(entity0: $Entity$$Type, aABB1: $AABB$$Type): $List<$VoxelShape>
"getExistingBlockEntity"(blockPos0: $BlockPos$$Type): $BlockEntity
"getFluidState"(blockPos0: $BlockPos$$Type): $FluidState
"getHeight"(types0: $Heightmap$Types$$Type, int1: integer, int2: integer): integer
"getHeight"(): integer
"getHeightmapPos"(types0: $Heightmap$Types$$Type, blockPos1: $BlockPos$$Type): $BlockPos
"getLightEmission"(blockPos0: $BlockPos$$Type): integer
"getLightEngine"(): $LevelLightEngine
/** @deprecated */
"getLightLevelDependentMagicValue"(blockPos0: $BlockPos$$Type): float
"getLoadedChunk"(int0: integer, int1: integer): $ChunkAccess
"getMaxBuildHeight"(): integer
"getMaxLightLevel"(): integer
"getMaxLocalRawBrightness"(blockPos0: $BlockPos$$Type): integer
"getMaxLocalRawBrightness"(blockPos0: $BlockPos$$Type, int1: integer): integer
"getMaxSection"(): integer
"getMinBuildHeight"(): integer
"getMinSection"(): integer
"getModelDataManager"(): $ModelDataManager
"getNearbyEntities"<T extends $LivingEntity>(class0: $Class$$Type<T>, targetingConditions1: $TargetingConditions$$Type, livingEntity2: $LivingEntity$$Type, aABB3: $AABB$$Type): $List<T>
"getNearbyPlayers"(targetingConditions0: $TargetingConditions$$Type, livingEntity1: $LivingEntity$$Type, aABB2: $AABB$$Type): $List<$Player>
"getNearestEntity"<T extends $LivingEntity>(list0: $List$$Type<T>, targetingConditions1: $TargetingConditions$$Type, livingEntity2: $LivingEntity$$Type, double3: double, double4: double, double5: double): T
"getNearestEntity"<T extends $LivingEntity>(class0: $Class$$Type<T>, targetingConditions1: $TargetingConditions$$Type, livingEntity2: $LivingEntity$$Type, double3: double, double4: double, double5: double, aABB6: $AABB$$Type): T
"getNearestPlayer"(double0: double, double1: double, double2: double, double3: double, predicate4: $Predicate$$Type<$Entity$$Type>): $Player
"getNearestPlayer"(entity0: $Entity$$Type, double1: double): $Player
"getNearestPlayer"(double0: double, double1: double, double2: double, double3: double, boolean4: boolean): $Player
"getNearestPlayer"(targetingConditions0: $TargetingConditions$$Type, livingEntity1: $LivingEntity$$Type): $Player
"getNearestPlayer"(targetingConditions0: $TargetingConditions$$Type, livingEntity1: $LivingEntity$$Type, double2: double, double3: double, double4: double): $Player
"getNearestPlayer"(targetingConditions0: $TargetingConditions$$Type, double1: double, double2: double, double3: double): $Player
"getNoiseBiome"(int0: integer, int1: integer, int2: integer): $Holder<$Biome>
"getPathfindingCostFromLightLevels"(blockPos0: $BlockPos$$Type): float
"getPlayerByUUID"(uUID0: $UUID$$Type): $Player
"getRawBrightness"(blockPos0: $BlockPos$$Type, int1: integer): integer
/** @deprecated */
"getSeaLevel"(): integer
"getSectionIndex"(int0: integer): integer
"getSectionIndexFromSectionY"(int0: integer): integer
"getSectionYFromSectionIndex"(int0: integer): integer
"getSectionsCount"(): integer
"getShade"(direction0: $Direction$$Type, boolean1: boolean): float
"getShade"(float0: float, float1: float, float2: float, boolean3: boolean): float
"getSignal"(blockPos0: $BlockPos$$Type, direction1: $Direction$$Type): integer
"getSkyDarken"(): integer
"getUncachedNoiseBiome"(int0: integer, int1: integer, int2: integer): $Holder<$Biome>
"getWorldBorder"(): $WorldBorder
/** @deprecated */
"hasChunk"(int0: integer, int1: integer): boolean
/** @deprecated */
"hasChunkAt"(blockPos0: $BlockPos$$Type): boolean
/** @deprecated */
"hasChunkAt"(int0: integer, int1: integer): boolean
/** @deprecated */
"hasChunksAt"(int0: integer, int1: integer, int2: integer, int3: integer, int4: integer, int5: integer): boolean
/** @deprecated */
"hasChunksAt"(blockPos0: $BlockPos$$Type, blockPos1: $BlockPos$$Type): boolean
/** @deprecated */
"hasChunksAt"(int0: integer, int1: integer, int2: integer, int3: integer): boolean
"hasNearbyAlivePlayer"(double0: double, double1: double, double2: double, double3: double): boolean
"hasNeighborSignal"(blockPos0: $BlockPos$$Type): boolean
"hasSignal"(blockPos0: $BlockPos$$Type, direction1: $Direction$$Type): boolean
"holderLookup"<T>(resourceKey0: $ResourceKey$$Type<$Registry<T>>): $HolderLookup<T>
"isAreaLoaded"(blockPos0: $BlockPos$$Type, int1: integer): boolean
"isBlockInLine"(clipBlockStateContext0: $ClipBlockStateContext$$Type): $BlockHitResult
"isClientSide"(): boolean
"isEmptyBlock"(blockPos0: $BlockPos$$Type): boolean
"isFluidAtPosition"(blockPos0: $BlockPos$$Type, predicate1: $Predicate$$Type<$FluidState$$Type>): boolean
"isOutsideBuildHeight"(blockPos0: $BlockPos$$Type): boolean
"isOutsideBuildHeight"(int0: integer): boolean
"isStateAtPosition"(blockPos0: $BlockPos$$Type, predicate1: $Predicate$$Type<$BlockState$$Type>): boolean
"isUnobstructed"(entity0: $Entity$$Type, voxelShape1: $VoxelShape$$Type): boolean
"isUnobstructed"(blockState0: $BlockState$$Type, blockPos1: $BlockPos$$Type, collisionContext2: $CollisionContext$$Type): boolean
"isUnobstructed"(entity0: $Entity$$Type): boolean
"isWaterAt"(blockPos0: $BlockPos$$Type): boolean
"noCollision"(entity0: $Entity$$Type, aABB1: $AABB$$Type): boolean
"noCollision"(entity0: $Entity$$Type): boolean
"noCollision"(aABB0: $AABB$$Type): boolean
"players"(): $List<$Player>
"registryAccess"(): $RegistryAccess
"removeBlock"(blockPos0: $BlockPos$$Type, boolean1: boolean): boolean
"setBlock"(blockPos0: $BlockPos$$Type, blockState1: $BlockState$$Type, int2: integer): boolean
"setBlock"(blockPos0: $BlockPos$$Type, blockState1: $BlockState$$Type, int2: integer, int3: integer): boolean
get "biomeManager"(): $BiomeManager
get "height"(): integer
get "lightEngine"(): $LevelLightEngine
get "maxBuildHeight"(): integer
get "maxLightLevel"(): integer
get "maxSection"(): integer
get "minBuildHeight"(): integer
get "minSection"(): integer
get "modelDataManager"(): $ModelDataManager
get "seaLevel"(): integer
get "sectionsCount"(): integer
get "skyDarken"(): integer
get "worldBorder"(): $WorldBorder
get "clientSide"(): boolean
}

export namespace $CommonLevelAccessor {
function create(int0: integer, int1: integer): $LevelHeightAccessor
function traverseBlocks<T, C>(vec30: $Vec3$$Type, vec31: $Vec3$$Type, c2: C, biFunction3: $BiFunction$$Type<C, $BlockPos$$Type, T>, function4: $Function$$Type<C, T>): T
}
export abstract class $CommonLevelAccessor$$Static implements $CommonLevelAccessor {
static "create"(int0: integer, int1: integer): $LevelHeightAccessor
static "traverseBlocks"<T, C>(vec30: $Vec3$$Type, vec31: $Vec3$$Type, c2: C, biFunction3: $BiFunction$$Type<C, $BlockPos$$Type, T>, function4: $Function$$Type<C, T>): T
}
}

declare module "net.minecraft.world.level.CustomSpawner" {
import { $ServerLevel$$Type } from "net.minecraft.server.level.ServerLevel"

export interface $CustomSpawner {
"tick"(serverLevel0: $ServerLevel$$Type, boolean1: boolean, boolean2: boolean): integer
}

export namespace $CustomSpawner {
const probejs$$marker: never
}
export abstract class $CustomSpawner$$Static implements $CustomSpawner {
}
}

declare module "net.minecraft.world.level.WorldDataConfiguration" {
import { $FeatureFlagSet, $FeatureFlagSet$$Type } from "net.minecraft.world.flag.FeatureFlagSet"
import { $Codec } from "com.mojang.serialization.Codec"
import { $DataPackConfig, $DataPackConfig$$Type } from "net.minecraft.world.level.DataPackConfig"
import { $Record } from "java.lang.Record"

export class $WorldDataConfiguration extends $Record {
static readonly "CODEC": $Codec<$WorldDataConfiguration>
static readonly "DEFAULT": $WorldDataConfiguration
static readonly "ENABLED_FEATURES_ID": string

constructor(dataPackConfig0: $DataPackConfig$$Type, featureFlagSet1: $FeatureFlagSet$$Type)

public "dataPacks"(): $DataPackConfig
public "enabledFeatures"(): $FeatureFlagSet
public "expandFeatures"(featureFlagSet0: $FeatureFlagSet$$Type): $WorldDataConfiguration
}
}

declare module "net.minecraft.world.level.BlockGetter" {
import { $LevelHeightAccessor } from "net.minecraft.world.level.LevelHeightAccessor"
import { $AABB$$Type } from "net.minecraft.world.phys.AABB"
import { $BiFunction$$Type } from "java.util.function.BiFunction"
import { $BlockHitResult } from "net.minecraft.world.phys.BlockHitResult"
import { $BlockState, $BlockState$$Type } from "net.minecraft.world.level.block.state.BlockState"
import { $ModelDataManager } from "net.minecraftforge.client.model.data.ModelDataManager"
import { $BlockEntity, $BlockEntity$$Type } from "net.minecraft.world.level.block.entity.BlockEntity"
import { $Supplier$$Type } from "java.util.function.Supplier"
import { $Function$$Type } from "java.util.function.Function"
import { $ClipBlockStateContext$$Type } from "net.minecraft.world.level.ClipBlockStateContext"
import { $IForgeBlockGetter } from "net.minecraftforge.common.extensions.IForgeBlockGetter"
import { $Stream } from "java.util.stream.Stream"
import { $ClipContext$$Type } from "net.minecraft.world.level.ClipContext"
import { $Vec3$$Type } from "net.minecraft.world.phys.Vec3"
import { $BlockPos$$Type } from "net.minecraft.core.BlockPos"
import { $BlockEntityType$$Type } from "net.minecraft.world.level.block.entity.BlockEntityType"
import { $FluidState } from "net.minecraft.world.level.material.FluidState"
import { $Optional } from "java.util.Optional"
import { $VoxelShape, $VoxelShape$$Type } from "net.minecraft.world.phys.shapes.VoxelShape"

export interface $BlockGetter extends $LevelHeightAccessor, $IForgeBlockGetter {
"clip"(clipContext0: $ClipContext$$Type): $BlockHitResult
"clipWithInteractionOverride"(vec30: $Vec3$$Type, vec31: $Vec3$$Type, blockPos2: $BlockPos$$Type, voxelShape3: $VoxelShape$$Type, blockState4: $BlockState$$Type): $BlockHitResult
"getBlockEntity"<T extends $BlockEntity>(blockPos0: $BlockPos$$Type, blockEntityType1: $BlockEntityType$$Type<T>): $Optional<T>
"getBlockEntity"(blockPos0: $BlockPos$$Type): $BlockEntity
"getBlockFloorHeight"(voxelShape0: $VoxelShape$$Type, supplier1: $Supplier$$Type<$VoxelShape>): double
"getBlockFloorHeight"(blockPos0: $BlockPos$$Type): double
"getBlockState"(blockPos0: $BlockPos$$Type): $BlockState
"getBlockStates"(aABB0: $AABB$$Type): $Stream<$BlockState>
"getExistingBlockEntity"(blockPos0: $BlockPos$$Type): $BlockEntity
"getFluidState"(blockPos0: $BlockPos$$Type): $FluidState
"getHeight"(): integer
"getLightEmission"(blockPos0: $BlockPos$$Type): integer
"getMaxBuildHeight"(): integer
"getMaxLightLevel"(): integer
"getMaxSection"(): integer
"getMinBuildHeight"(): integer
"getMinSection"(): integer
"getModelDataManager"(): $ModelDataManager
"getSectionIndex"(int0: integer): integer
"getSectionIndexFromSectionY"(int0: integer): integer
"getSectionYFromSectionIndex"(int0: integer): integer
"getSectionsCount"(): integer
"isBlockInLine"(clipBlockStateContext0: $ClipBlockStateContext$$Type): $BlockHitResult
"isOutsideBuildHeight"(blockPos0: $BlockPos$$Type): boolean
"isOutsideBuildHeight"(int0: integer): boolean
get "height"(): integer
get "maxBuildHeight"(): integer
get "maxLightLevel"(): integer
get "maxSection"(): integer
get "minBuildHeight"(): integer
get "minSection"(): integer
get "modelDataManager"(): $ModelDataManager
get "sectionsCount"(): integer
}

export namespace $BlockGetter {
function create(int0: integer, int1: integer): $LevelHeightAccessor
function traverseBlocks<T, C>(vec30: $Vec3$$Type, vec31: $Vec3$$Type, c2: C, biFunction3: $BiFunction$$Type<C, $BlockPos$$Type, T>, function4: $Function$$Type<C, T>): T
}
export abstract class $BlockGetter$$Static implements $BlockGetter {
static "create"(int0: integer, int1: integer): $LevelHeightAccessor
static "traverseBlocks"<T, C>(vec30: $Vec3$$Type, vec31: $Vec3$$Type, c2: C, biFunction3: $BiFunction$$Type<C, $BlockPos$$Type, T>, function4: $Function$$Type<C, T>): T
}
}

declare module "net.minecraft.world.level.GameRules$GameRuleTypeVisitor" {
import { $GameRules$Value, $GameRules$Value$$Type } from "net.minecraft.world.level.GameRules$Value"
import { $GameRules$Type$$Type } from "net.minecraft.world.level.GameRules$Type"
import { $GameRules$IntegerValue$$Type } from "net.minecraft.world.level.GameRules$IntegerValue"
import { $GameRules$BooleanValue$$Type } from "net.minecraft.world.level.GameRules$BooleanValue"
import { $GameRules$Key$$Type } from "net.minecraft.world.level.GameRules$Key"

export interface $GameRules$GameRuleTypeVisitor {
"visit"<T extends $GameRules$Value<T>>(key0: $GameRules$Key$$Type<T>, type1: $GameRules$Type$$Type<T>): void
"visitBoolean"(key0: $GameRules$Key$$Type<$GameRules$BooleanValue$$Type>, type1: $GameRules$Type$$Type<$GameRules$BooleanValue$$Type>): void
"visitInteger"(key0: $GameRules$Key$$Type<$GameRules$IntegerValue$$Type>, type1: $GameRules$Type$$Type<$GameRules$IntegerValue$$Type>): void
}

export namespace $GameRules$GameRuleTypeVisitor {
const probejs$$marker: never
}
export abstract class $GameRules$GameRuleTypeVisitor$$Static implements $GameRules$GameRuleTypeVisitor {
}
}

declare module "net.minecraft.world.level.LevelReader" {
import { $CollisionContext$$Type } from "net.minecraft.world.phys.shapes.CollisionContext"
import { $LevelHeightAccessor } from "net.minecraft.world.level.LevelHeightAccessor"
import { $AABB$$Type } from "net.minecraft.world.phys.AABB"
import { $Direction$$Type } from "net.minecraft.core.Direction"
import { $CollisionGetter } from "net.minecraft.world.level.CollisionGetter"
import { $BiFunction$$Type } from "java.util.function.BiFunction"
import { $BlockState, $BlockState$$Type } from "net.minecraft.world.level.block.state.BlockState"
import { $DimensionType } from "net.minecraft.world.level.dimension.DimensionType"
import { $Biome } from "net.minecraft.world.level.biome.Biome"
import { $Supplier$$Type } from "java.util.function.Supplier"
import { $Function$$Type } from "java.util.function.Function"
import { $Iterable } from "java.lang.Iterable"
import { $ColorResolver$$Type } from "net.minecraft.world.level.ColorResolver"
import { $Registry } from "net.minecraft.core.Registry"
import { $ClipBlockStateContext$$Type } from "net.minecraft.world.level.ClipBlockStateContext"
import { $BlockGetter } from "net.minecraft.world.level.BlockGetter"
import { $Holder } from "net.minecraft.core.Holder"
import { $ClipContext$$Type } from "net.minecraft.world.level.ClipContext"
import { $WorldBorder } from "net.minecraft.world.level.border.WorldBorder"
import { $LightLayer$$Type } from "net.minecraft.world.level.LightLayer"
import { $BlockAndTintGetter } from "net.minecraft.world.level.BlockAndTintGetter"
import { $BiomeManager } from "net.minecraft.world.level.biome.BiomeManager"
import { $BiomeManager$NoiseBiomeSource } from "net.minecraft.world.level.biome.BiomeManager$NoiseBiomeSource"
import { $ChunkView } from "com.abdelaziz.canary.common.world.ChunkView"
import { $BlockHitResult } from "net.minecraft.world.phys.BlockHitResult"
import { $HolderLookup } from "net.minecraft.core.HolderLookup"
import { $ModelDataManager } from "net.minecraftforge.client.model.data.ModelDataManager"
import { $BlockEntity, $BlockEntity$$Type } from "net.minecraft.world.level.block.entity.BlockEntity"
import { $RegistryAccess } from "net.minecraft.core.RegistryAccess"
import { $ResourceKey$$Type } from "net.minecraft.resources.ResourceKey"
import { $ChunkAccess } from "net.minecraft.world.level.chunk.ChunkAccess"
import { $FeatureFlagSet } from "net.minecraft.world.flag.FeatureFlagSet"
import { $List } from "java.util.List"
import { $Entity$$Type } from "net.minecraft.world.entity.Entity"
import { $Stream } from "java.util.stream.Stream"
import { $LevelLightEngine } from "net.minecraft.world.level.lighting.LevelLightEngine"
import { $BlockPos, $BlockPos$$Type } from "net.minecraft.core.BlockPos"
import { $Vec3, $Vec3$$Type } from "net.minecraft.world.phys.Vec3"
import { $BlockEntityType$$Type } from "net.minecraft.world.level.block.entity.BlockEntityType"
import { $SignalGetter } from "net.minecraft.world.level.SignalGetter"
import { $FluidState } from "net.minecraft.world.level.material.FluidState"
import { $Optional } from "java.util.Optional"
import { $ChunkStatus$$Type } from "net.minecraft.world.level.chunk.ChunkStatus"
import { $Heightmap$Types$$Type } from "net.minecraft.world.level.levelgen.Heightmap$Types"
import { $VoxelShape, $VoxelShape$$Type } from "net.minecraft.world.phys.shapes.VoxelShape"

export interface $LevelReader extends $BlockAndTintGetter, $CollisionGetter, $SignalGetter, $BiomeManager$NoiseBiomeSource, $ChunkView {
"canSeeSky"(blockPos0: $BlockPos$$Type): boolean
"canSeeSkyFromBelowWater"(blockPos0: $BlockPos$$Type): boolean
"clip"(clipContext0: $ClipContext$$Type): $BlockHitResult
"clipWithInteractionOverride"(vec30: $Vec3$$Type, vec31: $Vec3$$Type, blockPos2: $BlockPos$$Type, voxelShape3: $VoxelShape$$Type, blockState4: $BlockState$$Type): $BlockHitResult
"collidesWithSuffocatingBlock"(entity0: $Entity$$Type, aABB1: $AABB$$Type): boolean
"containsAnyLiquid"(aABB0: $AABB$$Type): boolean
"dimensionType"(): $DimensionType
"enabledFeatures"(): $FeatureFlagSet
"findFreePosition"(entity0: $Entity$$Type, voxelShape1: $VoxelShape$$Type, vec32: $Vec3$$Type, double3: double, double4: double, double5: double): $Optional<$Vec3>
"findSupportingBlock"(entity0: $Entity$$Type, aABB1: $AABB$$Type): $Optional<$BlockPos>
"getBestNeighborSignal"(blockPos0: $BlockPos$$Type): integer
"getBiome"(blockPos0: $BlockPos$$Type): $Holder<$Biome>
"getBiomeManager"(): $BiomeManager
"getBlockCollisions"(entity0: $Entity$$Type, aABB1: $AABB$$Type): $Iterable<$VoxelShape>
"getBlockEntity"<T extends $BlockEntity>(blockPos0: $BlockPos$$Type, blockEntityType1: $BlockEntityType$$Type<T>): $Optional<T>
"getBlockEntity"(blockPos0: $BlockPos$$Type): $BlockEntity
"getBlockFloorHeight"(voxelShape0: $VoxelShape$$Type, supplier1: $Supplier$$Type<$VoxelShape>): double
"getBlockFloorHeight"(blockPos0: $BlockPos$$Type): double
"getBlockState"(blockPos0: $BlockPos$$Type): $BlockState
"getBlockStates"(aABB0: $AABB$$Type): $Stream<$BlockState>
"getBlockStatesIfLoaded"(aABB0: $AABB$$Type): $Stream<$BlockState>
"getBlockTint"(blockPos0: $BlockPos$$Type, colorResolver1: $ColorResolver$$Type): integer
"getBrightness"(lightLayer0: $LightLayer$$Type, blockPos1: $BlockPos$$Type): integer
"getChunk"(int0: integer, int1: integer, chunkStatus2: $ChunkStatus$$Type, boolean3: boolean): $ChunkAccess
"getChunk"(blockPos0: $BlockPos$$Type): $ChunkAccess
"getChunk"(int0: integer, int1: integer, chunkStatus2: $ChunkStatus$$Type): $ChunkAccess
"getChunk"(int0: integer, int1: integer): $ChunkAccess
"getChunkForCollisions"(int0: integer, int1: integer): $BlockGetter
"getCollisions"(entity0: $Entity$$Type, aABB1: $AABB$$Type): $Iterable<$VoxelShape>
"getControlInputSignal"(blockPos0: $BlockPos$$Type, direction1: $Direction$$Type, boolean2: boolean): integer
"getDirectSignal"(blockPos0: $BlockPos$$Type, direction1: $Direction$$Type): integer
"getDirectSignalTo"(blockPos0: $BlockPos$$Type): integer
"getEntityCollisions"(entity0: $Entity$$Type, aABB1: $AABB$$Type): $List<$VoxelShape>
"getExistingBlockEntity"(blockPos0: $BlockPos$$Type): $BlockEntity
"getFluidState"(blockPos0: $BlockPos$$Type): $FluidState
"getHeight"(types0: $Heightmap$Types$$Type, int1: integer, int2: integer): integer
"getHeight"(): integer
"getHeightmapPos"(types0: $Heightmap$Types$$Type, blockPos1: $BlockPos$$Type): $BlockPos
"getLightEmission"(blockPos0: $BlockPos$$Type): integer
"getLightEngine"(): $LevelLightEngine
/** @deprecated */
"getLightLevelDependentMagicValue"(blockPos0: $BlockPos$$Type): float
"getLoadedChunk"(int0: integer, int1: integer): $ChunkAccess
"getMaxBuildHeight"(): integer
"getMaxLightLevel"(): integer
"getMaxLocalRawBrightness"(blockPos0: $BlockPos$$Type): integer
"getMaxLocalRawBrightness"(blockPos0: $BlockPos$$Type, int1: integer): integer
"getMaxSection"(): integer
"getMinBuildHeight"(): integer
"getMinSection"(): integer
"getModelDataManager"(): $ModelDataManager
"getNoiseBiome"(int0: integer, int1: integer, int2: integer): $Holder<$Biome>
"getPathfindingCostFromLightLevels"(blockPos0: $BlockPos$$Type): float
"getRawBrightness"(blockPos0: $BlockPos$$Type, int1: integer): integer
/** @deprecated */
"getSeaLevel"(): integer
"getSectionIndex"(int0: integer): integer
"getSectionIndexFromSectionY"(int0: integer): integer
"getSectionYFromSectionIndex"(int0: integer): integer
"getSectionsCount"(): integer
"getShade"(direction0: $Direction$$Type, boolean1: boolean): float
"getShade"(float0: float, float1: float, float2: float, boolean3: boolean): float
"getSignal"(blockPos0: $BlockPos$$Type, direction1: $Direction$$Type): integer
"getSkyDarken"(): integer
"getUncachedNoiseBiome"(int0: integer, int1: integer, int2: integer): $Holder<$Biome>
"getWorldBorder"(): $WorldBorder
/** @deprecated */
"hasChunk"(int0: integer, int1: integer): boolean
/** @deprecated */
"hasChunkAt"(blockPos0: $BlockPos$$Type): boolean
/** @deprecated */
"hasChunkAt"(int0: integer, int1: integer): boolean
/** @deprecated */
"hasChunksAt"(int0: integer, int1: integer, int2: integer, int3: integer, int4: integer, int5: integer): boolean
/** @deprecated */
"hasChunksAt"(blockPos0: $BlockPos$$Type, blockPos1: $BlockPos$$Type): boolean
/** @deprecated */
"hasChunksAt"(int0: integer, int1: integer, int2: integer, int3: integer): boolean
"hasNeighborSignal"(blockPos0: $BlockPos$$Type): boolean
"hasSignal"(blockPos0: $BlockPos$$Type, direction1: $Direction$$Type): boolean
"holderLookup"<T>(resourceKey0: $ResourceKey$$Type<$Registry<T>>): $HolderLookup<T>
"isAreaLoaded"(blockPos0: $BlockPos$$Type, int1: integer): boolean
"isBlockInLine"(clipBlockStateContext0: $ClipBlockStateContext$$Type): $BlockHitResult
"isClientSide"(): boolean
"isEmptyBlock"(blockPos0: $BlockPos$$Type): boolean
"isOutsideBuildHeight"(blockPos0: $BlockPos$$Type): boolean
"isOutsideBuildHeight"(int0: integer): boolean
"isUnobstructed"(entity0: $Entity$$Type, voxelShape1: $VoxelShape$$Type): boolean
"isUnobstructed"(blockState0: $BlockState$$Type, blockPos1: $BlockPos$$Type, collisionContext2: $CollisionContext$$Type): boolean
"isUnobstructed"(entity0: $Entity$$Type): boolean
"isWaterAt"(blockPos0: $BlockPos$$Type): boolean
"noCollision"(entity0: $Entity$$Type, aABB1: $AABB$$Type): boolean
"noCollision"(entity0: $Entity$$Type): boolean
"noCollision"(aABB0: $AABB$$Type): boolean
"registryAccess"(): $RegistryAccess
get "biomeManager"(): $BiomeManager
get "height"(): integer
get "lightEngine"(): $LevelLightEngine
get "maxBuildHeight"(): integer
get "maxLightLevel"(): integer
get "maxSection"(): integer
get "minBuildHeight"(): integer
get "minSection"(): integer
get "modelDataManager"(): $ModelDataManager
get "seaLevel"(): integer
get "sectionsCount"(): integer
get "skyDarken"(): integer
get "worldBorder"(): $WorldBorder
get "clientSide"(): boolean
}

export namespace $LevelReader {
function create(int0: integer, int1: integer): $LevelHeightAccessor
function traverseBlocks<T, C>(vec30: $Vec3$$Type, vec31: $Vec3$$Type, c2: C, biFunction3: $BiFunction$$Type<C, $BlockPos$$Type, T>, function4: $Function$$Type<C, T>): T
}
export abstract class $LevelReader$$Static implements $LevelReader {
static "create"(int0: integer, int1: integer): $LevelHeightAccessor
static "traverseBlocks"<T, C>(vec30: $Vec3$$Type, vec31: $Vec3$$Type, c2: C, biFunction3: $BiFunction$$Type<C, $BlockPos$$Type, T>, function4: $Function$$Type<C, T>): T
}
}

