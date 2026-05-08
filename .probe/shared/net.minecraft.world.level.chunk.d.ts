declare module "net.minecraft.world.level.chunk.UpgradeData" {
import { $LevelChunk$$Type } from "net.minecraft.world.level.chunk.LevelChunk"
import { $LevelHeightAccessor$$Type } from "net.minecraft.world.level.LevelHeightAccessor"
import { $CompoundTag, $CompoundTag$$Type } from "net.minecraft.nbt.CompoundTag"

export class $UpgradeData {
static readonly "EMPTY": $UpgradeData

constructor(compoundTag0: $CompoundTag$$Type, levelHeightAccessor1: $LevelHeightAccessor$$Type)

public "isEmpty"(): boolean
public "upgrade"(levelChunk0: $LevelChunk$$Type): void
public "write"(): $CompoundTag
get "empty"(): boolean
}
}

declare module "net.minecraft.world.level.chunk.storage.ChunkScanAccess" {
import { $ChunkPos$$Type } from "net.minecraft.world.level.ChunkPos"
import { $StreamTagVisitor$$Type } from "net.minecraft.nbt.StreamTagVisitor"
import { $CompletableFuture } from "java.util.concurrent.CompletableFuture"

export interface $ChunkScanAccess {
"scanChunk"(chunkPos0: $ChunkPos$$Type, streamTagVisitor1: $StreamTagVisitor$$Type): $CompletableFuture<void>
}

export namespace $ChunkScanAccess {
const probejs$$marker: never
}
export abstract class $ChunkScanAccess$$Static implements $ChunkScanAccess {
}
}

declare module "net.minecraft.world.level.chunk.ChunkGenerator" {
import { $LevelHeightAccessor$$Type } from "net.minecraft.world.level.LevelHeightAccessor"
import { $BiomeSource, $BiomeSource$$Type } from "net.minecraft.world.level.biome.BiomeSource"
import { $HolderSet$$Type } from "net.minecraft.core.HolderSet"
import { $CompletableFuture } from "java.util.concurrent.CompletableFuture"
import { $WorldGenRegion$$Type } from "net.minecraft.server.level.WorldGenRegion"
import { $Function$$Type } from "java.util.function.Function"
import { $Biome$$Type } from "net.minecraft.world.level.biome.Biome"
import { $ServerLevel$$Type } from "net.minecraft.server.level.ServerLevel"
import { $Supplier, $Supplier$$Type } from "java.util.function.Supplier"
import { $CallbackInfoReturnable$$Type } from "org.spongepowered.asm.mixin.injection.callback.CallbackInfoReturnable"
import { $Structure, $Structure$$Type } from "net.minecraft.world.level.levelgen.structure.Structure"
import { $Holder, $Holder$$Type } from "net.minecraft.core.Holder"
import { $WorldGenLevel$$Type } from "net.minecraft.world.level.WorldGenLevel"
import { $MobCategory$$Type } from "net.minecraft.world.entity.MobCategory"
import { $IGeneratorNearbyStructureHolder } from "com.structureessentials.IGeneratorNearbyStructureHolder"
import { $ConcentricRingsStructurePlacement$$Type } from "net.minecraft.world.level.levelgen.structure.placement.ConcentricRingsStructurePlacement"
import { $BiomeManager$$Type } from "net.minecraft.world.level.biome.BiomeManager"
import { $BiomeGenerationSettings } from "net.minecraft.world.level.biome.BiomeGenerationSettings"
import { $Executor$$Type } from "java.util.concurrent.Executor"
import { $MobSpawnSettings$SpawnerData } from "net.minecraft.world.level.biome.MobSpawnSettings$SpawnerData"
import { $NoiseColumn } from "net.minecraft.world.level.NoiseColumn"
import { $HolderLookup$$Type } from "net.minecraft.core.HolderLookup"
import { $Set$$Type } from "java.util.Set"
import { $RegistryAccess$$Type } from "net.minecraft.core.RegistryAccess"
import { $ResourceKey } from "net.minecraft.resources.ResourceKey"
import { $Pair } from "com.mojang.datafixers.util.Pair"
import { $ChunkAccess, $ChunkAccess$$Type } from "net.minecraft.world.level.chunk.ChunkAccess"
import { $StructureSet$$Type } from "net.minecraft.world.level.levelgen.structure.StructureSet"
import { $List, $List$$Type } from "java.util.List"
import { $Blender$$Type } from "net.minecraft.world.level.levelgen.blending.Blender"
import { $Codec } from "com.mojang.serialization.Codec"
import { $StructureTemplateManager$$Type } from "net.minecraft.world.level.levelgen.structure.templatesystem.StructureTemplateManager"
import { $BlockPos, $BlockPos$$Type } from "net.minecraft.core.BlockPos"
import { $RandomState$$Type } from "net.minecraft.world.level.levelgen.RandomState"
import { $GenerationStep$Carving$$Type } from "net.minecraft.world.level.levelgen.GenerationStep$Carving"
import { $WeightedRandomList } from "net.minecraft.util.random.WeightedRandomList"
import { $Optional } from "java.util.Optional"
import { $Heightmap$Types$$Type } from "net.minecraft.world.level.levelgen.Heightmap$Types"
import { $StructureManager$$Type } from "net.minecraft.world.level.StructureManager"
import { $FeatureSorter$StepFeatureData, $FeatureSorter$StepFeatureData$$Type } from "net.minecraft.world.level.biome.FeatureSorter$StepFeatureData"
import { $ChunkGeneratorStructureState, $ChunkGeneratorStructureState$$Type } from "net.minecraft.world.level.chunk.ChunkGeneratorStructureState"

export class $ChunkGenerator implements $IGeneratorNearbyStructureHolder {
static readonly "CODEC": $Codec<$ChunkGenerator>

constructor(biomeSource0: $BiomeSource$$Type)
constructor(biomeSource0: $BiomeSource$$Type, function1: $Function$$Type<$Holder$$Type<$Biome$$Type>, $BiomeGenerationSettings>)

public "addDebugScreenInfo"(list0: $List$$Type<string>, randomState1: $RandomState$$Type, blockPos2: $BlockPos$$Type): void
public "applyBiomeDecoration"(worldGenLevel0: $WorldGenLevel$$Type, chunkAccess1: $ChunkAccess$$Type, structureManager2: $StructureManager$$Type): void
public "applyCarvers"(worldGenRegion0: $WorldGenRegion$$Type, long1: long, randomState2: $RandomState$$Type, biomeManager3: $BiomeManager$$Type, structureManager4: $StructureManager$$Type, chunkAccess5: $ChunkAccess$$Type, carving6: $GenerationStep$Carving$$Type): void
public "buildSurface"(worldGenRegion0: $WorldGenRegion$$Type, structureManager1: $StructureManager$$Type, randomState2: $RandomState$$Type, chunkAccess3: $ChunkAccess$$Type): void
public "createBiomes"(executor0: $Executor$$Type, randomState1: $RandomState$$Type, blender2: $Blender$$Type, structureManager3: $StructureManager$$Type, chunkAccess4: $ChunkAccess$$Type): $CompletableFuture<$ChunkAccess>
public "createReferences"(worldGenLevel0: $WorldGenLevel$$Type, structureManager1: $StructureManager$$Type, chunkAccess2: $ChunkAccess$$Type): void
public "createState"(holderLookup0: $HolderLookup$$Type<$StructureSet$$Type>, randomState1: $RandomState$$Type, long2: long): $ChunkGeneratorStructureState
public "createStructures"(registryAccess0: $RegistryAccess$$Type, chunkGeneratorStructureState1: $ChunkGeneratorStructureState$$Type, structureManager2: $StructureManager$$Type, chunkAccess3: $ChunkAccess$$Type, structureTemplateManager4: $StructureTemplateManager$$Type): void
public "fillFromNoise"(executor0: $Executor$$Type, blender1: $Blender$$Type, randomState2: $RandomState$$Type, structureManager3: $StructureManager$$Type, chunkAccess4: $ChunkAccess$$Type): $CompletableFuture<$ChunkAccess>
public "findNearestMapStructure"(serverLevel0: $ServerLevel$$Type, holderSet1: $HolderSet$$Type<$Structure$$Type>, blockPos2: $BlockPos$$Type, int3: integer, boolean4: boolean): $Pair<$BlockPos, $Holder<$Structure>>
public "getBaseColumn"(int0: integer, int1: integer, levelHeightAccessor2: $LevelHeightAccessor$$Type, randomState3: $RandomState$$Type): $NoiseColumn
public "getBaseHeight"(int0: integer, int1: integer, types2: $Heightmap$Types$$Type, levelHeightAccessor3: $LevelHeightAccessor$$Type, randomState4: $RandomState$$Type): integer
/** @deprecated */
public "getBiomeGenerationSettings"(holder0: $Holder$$Type<$Biome$$Type>): $BiomeGenerationSettings
public "getBiomeSource"(): $BiomeSource
public "getFirstFreeHeight"(int0: integer, int1: integer, types2: $Heightmap$Types$$Type, levelHeightAccessor3: $LevelHeightAccessor$$Type, randomState4: $RandomState$$Type): integer
public "getFirstOccupiedHeight"(int0: integer, int1: integer, types2: $Heightmap$Types$$Type, levelHeightAccessor3: $LevelHeightAccessor$$Type, randomState4: $RandomState$$Type): integer
public "getGenDepth"(): integer
public "getMinY"(): integer
public "getMobsAt"(holder0: $Holder$$Type<$Biome$$Type>, structureManager1: $StructureManager$$Type, mobCategory2: $MobCategory$$Type, blockPos3: $BlockPos$$Type): $WeightedRandomList<$MobSpawnSettings$SpawnerData>
public "getNearby"(long0: long): string
public "getNearestGeneratedStructure"(set0: $Set$$Type<$Holder$$Type<$Structure$$Type>>, serverLevel1: $ServerLevel$$Type, structureManager2: $StructureManager$$Type, blockPos3: $BlockPos$$Type, boolean4: boolean, concentricRingsStructurePlacement5: $ConcentricRingsStructurePlacement$$Type): $Pair<$BlockPos, $Holder<$Structure>>
public "getSeaLevel"(): integer
public "getSpawnHeight"(levelHeightAccessor0: $LevelHeightAccessor$$Type): integer
public "getTypeNameForDataFixer"(): $Optional<$ResourceKey<$Codec<$ChunkGenerator>>>
public "handler$cfc000$integrated_stronghold_disableVanillaStrongholds2"(structureHolders: $Set$$Type, serverLevel: $ServerLevel$$Type, structureManager: $StructureManager$$Type, blockPos: $BlockPos$$Type, bl: boolean, structurePlacement: $ConcentricRingsStructurePlacement$$Type, cir: $CallbackInfoReturnable$$Type): void
public "setNearby"(long0: long, string1: string): void
public "spawnOriginalMobs"(worldGenRegion0: $WorldGenRegion$$Type): void
get "biomeSource"(): $BiomeSource
set "biomeSource"(value: $BiomeSource$$Type)
get "featuresPerStep"(): $Supplier<$List<$FeatureSorter$StepFeatureData>>
set "featuresPerStep"(value: $Supplier$$Type<$List$$Type<$FeatureSorter$StepFeatureData$$Type>>)
get "genDepth"(): integer
get "minY"(): integer
get "seaLevel"(): integer
get "typeNameForDataFixer"(): $Optional<$ResourceKey<$Codec<$ChunkGenerator>>>
}
}

declare module "net.minecraft.world.level.chunk.LevelChunk" {
import { $LevelChunk$EntityCreationType$$Type } from "net.minecraft.world.level.chunk.LevelChunk$EntityCreationType"
import { $LevelHeightAccessor } from "net.minecraft.world.level.LevelHeightAccessor"
import { $AABB$$Type } from "net.minecraft.world.phys.AABB"
import { $BlendingData$$Type } from "net.minecraft.world.level.levelgen.blending.BlendingData"
import { $Direction$$Type } from "net.minecraft.core.Direction"
import { $BiFunction$$Type } from "java.util.function.BiFunction"
import { $ClipBlockStateContext$$Type } from "net.minecraft.world.level.ClipBlockStateContext"
import { $CapabilityDispatcher$$Type } from "net.minecraftforge.common.capabilities.CapabilityDispatcher"
import { $Map } from "java.util.Map"
import { $FullChunkStatus } from "net.minecraft.server.level.FullChunkStatus"
import { $TrackedDataRegistry$$Type } from "dev.corgitaco.dataanchor.data.registry.TrackedDataRegistry"
import { $RandomTickScheduler } from "corgitaco.corgilib.world.level.RandomTickScheduler"
import { $BlockHitResult } from "net.minecraft.world.phys.BlockHitResult"
import { $Set } from "java.util.Set"
import { $RandomSource$$Type } from "net.minecraft.util.RandomSource"
import { $BlockEntity, $BlockEntity$$Type } from "net.minecraft.world.level.block.entity.BlockEntity"
import { $ILevelChunk } from "me.wesley1808.servercore.common.interfaces.chunk.ILevelChunk"
import { $Capability$$Type } from "net.minecraftforge.common.capabilities.Capability"
import { $ChunkAccess } from "net.minecraft.world.level.chunk.ChunkAccess"
import { $LevelChunk$PostLoadProcessor$$Type } from "net.minecraft.world.level.chunk.LevelChunk$PostLoadProcessor"
import { $List } from "java.util.List"
import { $ObjectOpenCustomHashSet } from "it.unimi.dsi.fastutil.objects.ObjectOpenCustomHashSet"
import { $Stream } from "java.util.stream.Stream"
import { $CompoundTag, $CompoundTag$$Type } from "net.minecraft.nbt.CompoundTag"
import { $BlockPos, $BlockPos$$Type } from "net.minecraft.core.BlockPos"
import { $BlockEntityType$$Type } from "net.minecraft.world.level.block.entity.BlockEntityType"
import { $FluidState } from "net.minecraft.world.level.material.FluidState"
import { $Optional } from "java.util.Optional"
import { $Level, $Level$$Type } from "net.minecraft.world.level.Level"
import { $VoxelShape, $VoxelShape$$Type } from "net.minecraft.world.phys.shapes.VoxelShape"
import { $ProtoChunk$$Type } from "net.minecraft.world.level.chunk.ProtoChunk"
import { $BlockState, $BlockState$$Type } from "net.minecraft.world.level.block.state.BlockState"
import { $FriendlyByteBuf$$Type } from "net.minecraft.network.FriendlyByteBuf"
import { $ServerLevel$$Type } from "net.minecraft.server.level.ServerLevel"
import { $Supplier$$Type } from "java.util.function.Supplier"
import { $Function$$Type } from "java.util.function.Function"
import { $Trackable } from "dev.uncandango.alltheleaks.mixin.Trackable"
import { $LazyOptional } from "net.minecraftforge.common.util.LazyOptional"
import { $TrackedData, $TrackedData$$Type } from "dev.corgitaco.dataanchor.data.TrackedData"
import { $ICapabilityProviderImpl } from "net.minecraftforge.common.capabilities.ICapabilityProviderImpl"
import { $ClipContext$$Type } from "net.minecraft.world.level.ClipContext"
import { $LevelChunkAccessor } from "com.bawnorton.neruina.mixin.accessor.LevelChunkAccessor"
import { $ISnowTrackedChunk } from "com.Gabou.sereneseasonsplus.util.ISnowTrackedChunk"
import { $Fluid$$Type } from "net.minecraft.world.level.material.Fluid"
import { $CapabilityProvider$$Type } from "net.minecraftforge.common.capabilities.CapabilityProvider"
import { $WeakReference } from "java.lang.ref.WeakReference"
import { $UpgradeData$$Type } from "net.minecraft.world.level.chunk.UpgradeData"
import { $ModelDataManager } from "net.minecraftforge.client.model.data.ModelDataManager"
import { $ChunkPos$$Type } from "net.minecraft.world.level.ChunkPos"
import { $Consumer$$Type } from "java.util.function.Consumer"
import { $TrackedDataContainer } from "dev.corgitaco.dataanchor.data.TrackedDataContainer"
import { $LevelChunkTicks$$Type } from "net.minecraft.world.ticks.LevelChunkTicks"
import { $LevelChunkSection$$Type } from "net.minecraft.world.level.chunk.LevelChunkSection"
import { $Vec3$$Type } from "net.minecraft.world.phys.Vec3"
import { $RandomTickScheduler as $RandomTickScheduler$0 } from "dev.corgitaco.ohthetreesyoullgrow.world.level.chunk.RandomTickScheduler"
import { $Block$$Type } from "net.minecraft.world.level.block.Block"
import { $Class } from "java.lang.Class"
import { $ClientboundLevelChunkPacketData$BlockEntityTagOutput$$Type } from "net.minecraft.network.protocol.game.ClientboundLevelChunkPacketData$BlockEntityTagOutput"
import { $LevelChunkAccessor as $LevelChunkAccessor$0 } from "dev.uncandango.alltheleaks.mixin.core.accessor.LevelChunkAccessor"

export class $LevelChunk extends $ChunkAccess implements $ICapabilityProviderImpl<$LevelChunk>, $ILevelChunk, $LevelChunkAccessor, $RandomTickScheduler$0, $LevelChunkAccessor$0, $RandomTickScheduler, $LevelHeightAccessor, $ISnowTrackedChunk {
constructor(level0: $Level$$Type, chunkPos1: $ChunkPos$$Type)
constructor(serverLevel0: $ServerLevel$$Type, protoChunk1: $ProtoChunk$$Type, postLoadProcessor2: $LevelChunk$PostLoadProcessor$$Type)
constructor(level0: $Level$$Type, chunkPos1: $ChunkPos$$Type, upgradeData2: $UpgradeData$$Type, levelChunkTicks3: $LevelChunkTicks$$Type<$Block$$Type>, levelChunkTicks4: $LevelChunkTicks$$Type<$Fluid$$Type>, long5: long, levelChunkSection6s: $LevelChunkSection$$Type[], postLoadProcessor7: $LevelChunk$PostLoadProcessor$$Type, blendingData8: $BlendingData$$Type)

public "addAndRegisterBlockEntity"(blockEntity0: $BlockEntity$$Type): void
public "areCapsCompatible"(capabilityProvider0: $CapabilityProvider$$Type<$LevelChunk$$Type>): boolean
public "areCapsCompatible"(capabilityDispatcher0: $CapabilityDispatcher$$Type): boolean
public "clearAllBlockEntities"(): void
public static "clearNullReferences"(): void
public "clip"(clipContext0: $ClipContext$$Type): $BlockHitResult
public "clipWithInteractionOverride"(vec30: $Vec3$$Type, vec31: $Vec3$$Type, blockPos2: $BlockPos$$Type, voxelShape3: $VoxelShape$$Type, blockState4: $BlockState$$Type): $BlockHitResult
public static "create"(int0: integer, int1: integer): $LevelHeightAccessor
public static "createWeakRefBasedSet"(): $ObjectOpenCustomHashSet<$WeakReference<$Trackable>>
public "getBlockEntities"(): $Map<$BlockPos, $BlockEntity>
public "getBlockEntity"(blockPos0: $BlockPos$$Type, entityCreationType1: $LevelChunk$EntityCreationType$$Type): $BlockEntity
public "getBlockEntity"(blockPos0: $BlockPos$$Type): $BlockEntity
public "getBlockEntity"<T extends $BlockEntity>(blockPos0: $BlockPos$$Type, blockEntityType1: $BlockEntityType$$Type<T>): $Optional<T>
public "getBlockFloorHeight"(voxelShape0: $VoxelShape$$Type, supplier1: $Supplier$$Type<$VoxelShape>): double
public "getBlockFloorHeight"(blockPos0: $BlockPos$$Type): double
public "getBlockState"(blockPos0: $BlockPos$$Type): $BlockState
public "getBlockStates"(aABB0: $AABB$$Type): $Stream<$BlockState>
public "getCapability"<T>(capability0: $Capability$$Type<T>, direction1: $Direction$$Type): $LazyOptional<T>
public "getCapability"<T>(capability0: $Capability$$Type<T>): $LazyOptional<T>
public "getExistingBlockEntity"(blockPos0: $BlockPos$$Type): $BlockEntity
public "getFluidState"(int0: integer, int1: integer, int2: integer): $FluidState
public "getFluidState"(blockPos0: $BlockPos$$Type): $FluidState
public "getFullStatus"(): $FullChunkStatus
public "getLevel"(): $Level
public "getLightEmission"(blockPos0: $BlockPos$$Type): integer
public "getMaxBuildHeight"(): integer
public "getMaxLightLevel"(): integer
public "getMaxSection"(): integer
public "getMinBuildHeight"(): integer
public "getMinSection"(): integer
public "getModelDataManager"(): $ModelDataManager
public "getScheduledRandomTicks"(): $List<$BlockPos>
public "getSectionIndex"(int0: integer): integer
public "getSectionIndexFromSectionY"(int0: integer): integer
public "getSectionYFromSectionIndex"(int0: integer): integer
public "getSectionsCount"(): integer
public static "getSummary"(): $Map<$Class<any>, $Map<$Class<any>, long>>
public "invalidateCaps"(): void
public "isBlockInLine"(clipBlockStateContext0: $ClipBlockStateContext$$Type): $BlockHitResult
public "isEmpty"(): boolean
public "isOutsideBuildHeight"(blockPos0: $BlockPos$$Type): boolean
public "isOutsideBuildHeight"(int0: integer): boolean
public static "makeBasicContainer"<O, T extends $TrackedData<O>>(registry: $TrackedDataRegistry$$Type<O, T>, o: O, isClient: boolean): $TrackedDataContainer<O, T>
public static "makeBasicContainer"<O, T extends $TrackedData<O>>(registry: $TrackedDataRegistry$$Type<O, T>, o: O, isClient: boolean, lazyLoad: boolean): $TrackedDataContainer<O, T>
public "postProcessGeneration"(): void
/** @deprecated */
public "readCapsFromNBT"(compoundTag0: $CompoundTag$$Type): void
public "registerAllBlockEntitiesAfterLevelLoad"(): void
public "registerTickContainerInLevel"(serverLevel0: $ServerLevel$$Type): void
public "replaceBiomes"(friendlyByteBuf0: $FriendlyByteBuf$$Type): void
public "replaceWithPacketData"(friendlyByteBuf0: $FriendlyByteBuf$$Type, compoundTag1: $CompoundTag$$Type, consumer2: $Consumer$$Type<$ClientboundLevelChunkPacketData$BlockEntityTagOutput$$Type>): void
public "reviveCaps"(): void
public "runPostLoad"(): void
public "scheduleRandomTick"(blockPos0: $BlockPos$$Type): void
public "sereneseasonsplus$getAvailableSnowColumns"(): integer
public "sereneseasonsplus$getDestroyedColumns"(): $Set
public "sereneseasonsplus$getDestroyedStormId"(): integer
public "sereneseasonsplus$getIceColumns"(): $Set
public "sereneseasonsplus$getLastProgressTick"(): integer
public "sereneseasonsplus$getLastWinterId"(): integer
public "sereneseasonsplus$getSnowColumns"(): $Map
public "sereneseasonsplus$getStormIdApplied"(): integer
public "sereneseasonsplus$getStormProgress"(): float
public "sereneseasonsplus$getSurfaceHeight"(): integer
public "sereneseasonsplus$getTotalSnowLayers"(): integer
public "sereneseasonsplus$getTrackedColumnCount"(): integer
public "sereneseasonsplus$setAvailableSnowColumns"(int0: integer): void
public "sereneseasonsplus$setDestroyedStormId"(int0: integer): void
public "sereneseasonsplus$setLastProgressTick"(int0: integer): void
public "sereneseasonsplus$setLastWinterId"(int0: integer): void
public "sereneseasonsplus$setStormIdApplied"(int0: integer): void
public "sereneseasonsplus$setStormProgress"(float0: float): void
public "sereneseasonsplus$setSurfaceHeight"(int0: integer): void
public "servercore$shouldDoLightning"(randomSource: $RandomSource$$Type, thunderChance: integer): integer
public "setFullStatus"(supplier0: $Supplier$$Type<$FullChunkStatus>): void
public "setLoaded"(boolean0: boolean): void
public static "startTracking"(object0: any): void
public "startTracking"(): void
public static "traverseBlocks"<T, C>(vec30: $Vec3$$Type, vec31: $Vec3$$Type, c2: C, biFunction3: $BiFunction$$Type<C, $BlockPos$$Type, T>, function4: $Function$$Type<C, T>): T
public "unpackTicks"(long0: long): void
public "unregisterTickContainerFromLevel"(serverLevel0: $ServerLevel$$Type): void
public "wrap"(): $WeakReference<$Trackable>
/** @deprecated */
public "writeCapsToNBT"(): $CompoundTag
get "loaded"(): boolean
set "loaded"(value: boolean)
get "blockEntities"(): $Map<$BlockPos, $BlockEntity>
get "fullStatus"(): $FullChunkStatus
get "level"(): $Level
get "maxBuildHeight"(): integer
get "maxLightLevel"(): integer
get "maxSection"(): integer
get "minBuildHeight"(): integer
get "minSection"(): integer
get "modelDataManager"(): $ModelDataManager
get "scheduledRandomTicks"(): $List<$BlockPos>
get "sectionsCount"(): integer
get "empty"(): boolean
set "fullStatus"(value: $Supplier$$Type<$FullChunkStatus>)
}
}

declare module "net.minecraft.world.level.chunk.ChunkStatus$GenerationTask" {
import { $Either } from "com.mojang.datafixers.util.Either"
import { $Executor$$Type } from "java.util.concurrent.Executor"
import { $CompletableFuture } from "java.util.concurrent.CompletableFuture"
import { $ThreadedLevelLightEngine$$Type } from "net.minecraft.server.level.ThreadedLevelLightEngine"
import { $ServerLevel$$Type } from "net.minecraft.server.level.ServerLevel"
import { $Function$$Type } from "java.util.function.Function"
import { $ChunkAccess, $ChunkAccess$$Type } from "net.minecraft.world.level.chunk.ChunkAccess"
import { $ChunkGenerator$$Type } from "net.minecraft.world.level.chunk.ChunkGenerator"
import { $List$$Type } from "java.util.List"
import { $StructureTemplateManager$$Type } from "net.minecraft.world.level.levelgen.structure.templatesystem.StructureTemplateManager"
import { $ChunkStatus$$Type } from "net.minecraft.world.level.chunk.ChunkStatus"
import { $ChunkHolder$ChunkLoadingFailure } from "net.minecraft.server.level.ChunkHolder$ChunkLoadingFailure"

export interface $ChunkStatus$GenerationTask {
"doWork"(chunkStatus0: $ChunkStatus$$Type, executor1: $Executor$$Type, serverLevel2: $ServerLevel$$Type, chunkGenerator3: $ChunkGenerator$$Type, structureTemplateManager4: $StructureTemplateManager$$Type, threadedLevelLightEngine5: $ThreadedLevelLightEngine$$Type, function6: $Function$$Type<$ChunkAccess$$Type, $CompletableFuture<$Either<$ChunkAccess, $ChunkHolder$ChunkLoadingFailure>>>, list7: $List$$Type<$ChunkAccess$$Type>, chunkAccess8: $ChunkAccess$$Type): $CompletableFuture<$Either<$ChunkAccess, $ChunkHolder$ChunkLoadingFailure>>
}

export namespace $ChunkStatus$GenerationTask {
const probejs$$marker: never
}
export abstract class $ChunkStatus$GenerationTask$$Static implements $ChunkStatus$GenerationTask {
}
}

declare module "net.minecraft.world.level.chunk.storage.ChunkStorage" {
import { $CompletableFuture } from "java.util.concurrent.CompletableFuture"
import { $DataFixer$$Type } from "com.mojang.datafixers.DataFixer"
import { $ResourceKey$$Type } from "net.minecraft.resources.ResourceKey"
import { $Supplier$$Type } from "java.util.function.Supplier"
import { $DimensionDataStorage } from "net.minecraft.world.level.storage.DimensionDataStorage"
import { $AutoCloseable } from "java.lang.AutoCloseable"
import { $ChunkGenerator$$Type } from "net.minecraft.world.level.chunk.ChunkGenerator"
import { $ChunkPos$$Type } from "net.minecraft.world.level.ChunkPos"
import { $CompoundTag, $CompoundTag$$Type } from "net.minecraft.nbt.CompoundTag"
import { $Codec$$Type } from "com.mojang.serialization.Codec"
import { $ChunkScanAccess } from "net.minecraft.world.level.chunk.storage.ChunkScanAccess"
import { $IOWorker } from "net.minecraft.world.level.chunk.storage.IOWorker"
import { $Optional, $Optional$$Type } from "java.util.Optional"
import { $Level } from "net.minecraft.world.level.Level"
import { $Path$$Type } from "java.nio.file.Path"

export class $ChunkStorage implements $AutoCloseable {
static readonly "LAST_MONOLYTH_STRUCTURE_DATA_VERSION": integer
readonly "worker": $IOWorker

constructor(path0: $Path$$Type, dataFixer1: $DataFixer$$Type, boolean2: boolean)

public "chunkScanner"(): $ChunkScanAccess
public "close"(): void
public "flushWorker"(): void
public static "getVersion"(compoundTag0: $CompoundTag$$Type): integer
public static "injectDatafixingContext"(compoundTag0: $CompoundTag$$Type, resourceKey1: $ResourceKey$$Type<$Level>, optional2: $Optional$$Type<$ResourceKey$$Type<$Codec$$Type<$ChunkGenerator$$Type>>>): void
public "isOldChunkAround"(chunkPos0: $ChunkPos$$Type, int1: integer): boolean
public "read"(chunkPos0: $ChunkPos$$Type): $CompletableFuture<$Optional<$CompoundTag>>
public "upgradeChunkTag"(resourceKey0: $ResourceKey$$Type<$Level>, supplier1: $Supplier$$Type<$DimensionDataStorage>, compoundTag2: $CompoundTag$$Type, optional3: $Optional$$Type<$ResourceKey$$Type<$Codec$$Type<$ChunkGenerator$$Type>>>): $CompoundTag
public "write"(chunkPos0: $ChunkPos$$Type, compoundTag1: $CompoundTag$$Type): void
}
}

declare module "net.minecraft.world.level.chunk.PalettedContainer" {
import { $Predicate$$Type } from "java.util.function.Predicate"
import { $IdMap$$Type } from "net.minecraft.core.IdMap"
import { $ReadableContainerExtended } from "me.jellysquid.mods.sodium.client.world.ReadableContainerExtended"
import { $PalettedContainerRO$PackedData } from "net.minecraft.world.level.chunk.PalettedContainerRO$PackedData"
import { $FriendlyByteBuf$$Type } from "net.minecraft.network.FriendlyByteBuf"
import { $Consumer$$Type } from "java.util.function.Consumer"
import { $CallbackInfo$$Type } from "org.spongepowered.asm.mixin.injection.callback.CallbackInfo"
import { $List$$Type } from "java.util.List"
import { $Codec, $Codec$$Type } from "com.mojang.serialization.Codec"
import { $PaletteResize } from "net.minecraft.world.level.chunk.PaletteResize"
import { $PalettedContainer$Configuration$$Type } from "net.minecraft.world.level.chunk.PalettedContainer$Configuration"
import { $PalettedContainer$Strategy$$Type } from "net.minecraft.world.level.chunk.PalettedContainer$Strategy"
import { $BitStorage$$Type } from "net.minecraft.util.BitStorage"
import { $PalettedContainerRO, $PalettedContainerRO$$Type } from "net.minecraft.world.level.chunk.PalettedContainerRO"
import { $PalettedContainer$CountConsumer$$Type } from "net.minecraft.world.level.chunk.PalettedContainer$CountConsumer"

export class $PalettedContainer<T = any> implements $PaletteResize<T>, $PalettedContainerRO<T>, $ReadableContainerExtended {
constructor(idMap0: $IdMap$$Type<T>, t1: T, strategy2: $PalettedContainer$Strategy$$Type)
constructor(idMap0: $IdMap$$Type<T>, strategy1: $PalettedContainer$Strategy$$Type, configuration2: $PalettedContainer$Configuration$$Type<T>, bitStorage3: $BitStorage$$Type, list4: $List$$Type<T>)

public "acquire"(): void
public static "clone"<T>(palettedContainerRO0: $PalettedContainerRO$$Type<T>): $PalettedContainerRO<T>
public static "codecRO"<T>(idMap0: $IdMap$$Type<T>, codec1: $Codec$$Type<T>, strategy2: $PalettedContainer$Strategy$$Type, t3: T): $Codec<$PalettedContainerRO<T>>
public static "codecRW"<T>(idMap0: $IdMap$$Type<T>, codec1: $Codec$$Type<T>, strategy2: $PalettedContainer$Strategy$$Type, t3: T): $Codec<$PalettedContainer<T>>
public "copy"(): $PalettedContainer<T>
public "count"(countConsumer0: $PalettedContainer$CountConsumer$$Type<T>): void
public "get"(int0: integer): T
public "get"(int0: integer, int1: integer, int2: integer): T
public "getAll"(consumer0: $Consumer$$Type<T>): void
public "getAndSet"(int0: integer, int1: integer, int2: integer, t3: T): T
public "getAndSetUnchecked"(int0: integer, int1: integer, int2: integer, t3: T): T
public "getSerializedSize"(): integer
public "handler$cke000$count"(countConsumer0: $PalettedContainer$CountConsumer$$Type, callbackInfo1: $CallbackInfo$$Type): void
public "maybeHas"(predicate0: $Predicate$$Type<T>): boolean
public static "of"<T>(palettedContainerRO0: $PalettedContainerRO$$Type<T>): $ReadableContainerExtended<T>
public "onResize"(int0: integer, t1: T): integer
public "pack"(idMap0: $IdMap$$Type, strategy1: $PalettedContainer$Strategy$$Type): $PalettedContainerRO$PackedData
public "read"(friendlyByteBuf0: $FriendlyByteBuf$$Type): void
public "recreate"(): $PalettedContainer<T>
public "release"(): void
public "set"(int0: integer, int1: integer, int2: integer, t3: T): void
public "sodium$copy"(): $PalettedContainerRO
public "sodium$unpack"(object0s: any[], int1: integer, int2: integer, int3: integer, int4: integer, int5: integer, int6: integer): void
public "sodium$unpack"(object0s: any[]): void
public "write"(friendlyByteBuf0: $FriendlyByteBuf$$Type): void
get "serializedSize"(): integer
}
}

declare module "net.minecraft.world.level.chunk.BlockColumn" {
import { $BlockState, $BlockState$$Type } from "net.minecraft.world.level.block.state.BlockState"

export interface $BlockColumn {
"getBlock"(int0: integer): $BlockState
"setBlock"(int0: integer, blockState1: $BlockState$$Type): void
}

export namespace $BlockColumn {
const probejs$$marker: never
}
export abstract class $BlockColumn$$Static implements $BlockColumn {
}
}

declare module "net.minecraft.world.level.chunk.Palette$Factory" {
import { $List$$Type } from "java.util.List"
import { $PaletteResize$$Type } from "net.minecraft.world.level.chunk.PaletteResize"
import { $Palette } from "net.minecraft.world.level.chunk.Palette"
import { $IdMap$$Type } from "net.minecraft.core.IdMap"

export interface $Palette$Factory {
"create"<A>(int0: integer, idMap1: $IdMap$$Type<A>, paletteResize2: $PaletteResize$$Type<A>, list3: $List$$Type<A>): $Palette<A>
}

export namespace $Palette$Factory {
const probejs$$marker: never
}
export abstract class $Palette$Factory$$Static implements $Palette$Factory {
}
}

declare module "net.minecraft.world.level.chunk.ProtoChunk" {
import { $LevelHeightAccessor, $LevelHeightAccessor$$Type } from "net.minecraft.world.level.LevelHeightAccessor"
import { $AABB$$Type } from "net.minecraft.world.phys.AABB"
import { $BlendingData$$Type } from "net.minecraft.world.level.levelgen.blending.BlendingData"
import { $BiFunction$$Type } from "java.util.function.BiFunction"
import { $BlockState, $BlockState$$Type } from "net.minecraft.world.level.block.state.BlockState"
import { $Biome$$Type } from "net.minecraft.world.level.biome.Biome"
import { $Supplier$$Type } from "java.util.function.Supplier"
import { $Function$$Type } from "java.util.function.Function"
import { $ProtoChunkTicks$$Type } from "net.minecraft.world.ticks.ProtoChunkTicks"
import { $Trackable } from "dev.uncandango.alltheleaks.mixin.Trackable"
import { $TrackedData, $TrackedData$$Type } from "dev.corgitaco.dataanchor.data.TrackedData"
import { $Registry$$Type } from "net.minecraft.core.Registry"
import { $ClipBlockStateContext$$Type } from "net.minecraft.world.level.ClipBlockStateContext"
import { $ClipContext$$Type } from "net.minecraft.world.level.ClipContext"
import { $Map } from "java.util.Map"
import { $ISnowTrackedChunk } from "com.Gabou.sereneseasonsplus.util.ISnowTrackedChunk"
import { $Fluid, $Fluid$$Type } from "net.minecraft.world.level.material.Fluid"
import { $WeakReference } from "java.lang.ref.WeakReference"
import { $TrackedDataRegistry$$Type } from "dev.corgitaco.dataanchor.data.registry.TrackedDataRegistry"
import { $BlockHitResult } from "net.minecraft.world.phys.BlockHitResult"
import { $Set } from "java.util.Set"
import { $UpgradeData$$Type } from "net.minecraft.world.level.chunk.UpgradeData"
import { $ModelDataManager } from "net.minecraftforge.client.model.data.ModelDataManager"
import { $BlockEntity, $BlockEntity$$Type } from "net.minecraft.world.level.block.entity.BlockEntity"
import { $CarvingMask, $CarvingMask$$Type } from "net.minecraft.world.level.chunk.CarvingMask"
import { $ChunkAccess } from "net.minecraft.world.level.chunk.ChunkAccess"
import { $ChunkPos$$Type } from "net.minecraft.world.level.ChunkPos"
import { $List } from "java.util.List"
import { $CompoundTag, $CompoundTag$$Type } from "net.minecraft.nbt.CompoundTag"
import { $ObjectOpenCustomHashSet } from "it.unimi.dsi.fastutil.objects.ObjectOpenCustomHashSet"
import { $Stream } from "java.util.stream.Stream"
import { $TrackedDataContainer } from "dev.corgitaco.dataanchor.data.TrackedDataContainer"
import { $LevelLightEngine$$Type } from "net.minecraft.world.level.lighting.LevelLightEngine"
import { $LevelChunkSection$$Type } from "net.minecraft.world.level.chunk.LevelChunkSection"
import { $Vec3$$Type } from "net.minecraft.world.phys.Vec3"
import { $BlockPos, $BlockPos$$Type } from "net.minecraft.core.BlockPos"
import { $BlockEntityType$$Type } from "net.minecraft.world.level.block.entity.BlockEntityType"
import { $LevelChunkTicks } from "net.minecraft.world.ticks.LevelChunkTicks"
import { $FluidState } from "net.minecraft.world.level.material.FluidState"
import { $GenerationStep$Carving$$Type } from "net.minecraft.world.level.levelgen.GenerationStep$Carving"
import { $Optional } from "java.util.Optional"
import { $Block, $Block$$Type } from "net.minecraft.world.level.block.Block"
import { $Class } from "java.lang.Class"
import { $ChunkStatus$$Type } from "net.minecraft.world.level.chunk.ChunkStatus"
import { $VoxelShape, $VoxelShape$$Type } from "net.minecraft.world.phys.shapes.VoxelShape"
import { $BelowZeroRetrogen$$Type } from "net.minecraft.world.level.levelgen.BelowZeroRetrogen"

export class $ProtoChunk extends $ChunkAccess implements $ISnowTrackedChunk {
constructor(chunkPos0: $ChunkPos$$Type, upgradeData1: $UpgradeData$$Type, levelHeightAccessor2: $LevelHeightAccessor$$Type, registry3: $Registry$$Type<$Biome$$Type>, blendingData4: $BlendingData$$Type)
constructor(chunkPos0: $ChunkPos$$Type, upgradeData1: $UpgradeData$$Type, levelChunkSection2s: $LevelChunkSection$$Type[], protoChunkTicks3: $ProtoChunkTicks$$Type<$Block$$Type>, protoChunkTicks4: $ProtoChunkTicks$$Type<$Fluid$$Type>, levelHeightAccessor5: $LevelHeightAccessor$$Type, registry6: $Registry$$Type<$Biome$$Type>, blendingData7: $BlendingData$$Type)

public "addEntity"(compoundTag0: $CompoundTag$$Type): void
public static "clearNullReferences"(): void
public "clip"(clipContext0: $ClipContext$$Type): $BlockHitResult
public "clipWithInteractionOverride"(vec30: $Vec3$$Type, vec31: $Vec3$$Type, blockPos2: $BlockPos$$Type, voxelShape3: $VoxelShape$$Type, blockState4: $BlockState$$Type): $BlockHitResult
public static "create"(int0: integer, int1: integer): $LevelHeightAccessor
public static "createWeakRefBasedSet"(): $ObjectOpenCustomHashSet<$WeakReference<$Trackable>>
public "getBlockEntities"(): $Map<$BlockPos, $BlockEntity>
public "getBlockEntity"(blockPos0: $BlockPos$$Type): $BlockEntity
public "getBlockEntity"<T extends $BlockEntity>(blockPos0: $BlockPos$$Type, blockEntityType1: $BlockEntityType$$Type<T>): $Optional<T>
public "getBlockEntityNbts"(): $Map<$BlockPos, $CompoundTag>
public "getBlockFloorHeight"(voxelShape0: $VoxelShape$$Type, supplier1: $Supplier$$Type<$VoxelShape>): double
public "getBlockFloorHeight"(blockPos0: $BlockPos$$Type): double
public "getBlockState"(blockPos0: $BlockPos$$Type): $BlockState
public "getBlockStates"(aABB0: $AABB$$Type): $Stream<$BlockState>
public "getCarvingMask"(carving0: $GenerationStep$Carving$$Type): $CarvingMask
public "getEntities"(): $List<$CompoundTag>
public "getExistingBlockEntity"(blockPos0: $BlockPos$$Type): $BlockEntity
public "getFluidState"(blockPos0: $BlockPos$$Type): $FluidState
public "getLightEmission"(blockPos0: $BlockPos$$Type): integer
public "getMaxBuildHeight"(): integer
public "getMaxLightLevel"(): integer
public "getMaxSection"(): integer
public "getMinSection"(): integer
public "getModelDataManager"(): $ModelDataManager
public "getOrCreateCarvingMask"(carving0: $GenerationStep$Carving$$Type): $CarvingMask
public "getSectionIndex"(int0: integer): integer
public "getSectionIndexFromSectionY"(int0: integer): integer
public "getSectionYFromSectionIndex"(int0: integer): integer
public "getSectionsCount"(): integer
public static "getSummary"(): $Map<$Class<any>, $Map<$Class<any>, long>>
public "isBlockInLine"(clipBlockStateContext0: $ClipBlockStateContext$$Type): $BlockHitResult
public "isOutsideBuildHeight"(blockPos0: $BlockPos$$Type): boolean
public "isOutsideBuildHeight"(int0: integer): boolean
public static "makeBasicContainer"<O, T extends $TrackedData<O>>(registry: $TrackedDataRegistry$$Type<O, T>, o: O, isClient: boolean): $TrackedDataContainer<O, T>
public static "makeBasicContainer"<O, T extends $TrackedData<O>>(registry: $TrackedDataRegistry$$Type<O, T>, o: O, isClient: boolean, lazyLoad: boolean): $TrackedDataContainer<O, T>
public static "packOffsetCoordinates"(blockPos0: $BlockPos$$Type): short
public "sereneseasonsplus$getAvailableSnowColumns"(): integer
public "sereneseasonsplus$getDestroyedColumns"(): $Set
public "sereneseasonsplus$getDestroyedStormId"(): integer
public "sereneseasonsplus$getIceColumns"(): $Set
public "sereneseasonsplus$getLastProgressTick"(): integer
public "sereneseasonsplus$getLastWinterId"(): integer
public "sereneseasonsplus$getSnowColumns"(): $Map
public "sereneseasonsplus$getStormIdApplied"(): integer
public "sereneseasonsplus$getStormProgress"(): float
public "sereneseasonsplus$getSurfaceHeight"(): integer
public "sereneseasonsplus$getTotalSnowLayers"(): integer
public "sereneseasonsplus$getTrackedColumnCount"(): integer
public "sereneseasonsplus$setAvailableSnowColumns"(int0: integer): void
public "sereneseasonsplus$setDestroyedStormId"(int0: integer): void
public "sereneseasonsplus$setLastProgressTick"(int0: integer): void
public "sereneseasonsplus$setLastWinterId"(int0: integer): void
public "sereneseasonsplus$setStormIdApplied"(int0: integer): void
public "sereneseasonsplus$setStormProgress"(float0: float): void
public "sereneseasonsplus$setSurfaceHeight"(int0: integer): void
public "setBelowZeroRetrogen"(belowZeroRetrogen0: $BelowZeroRetrogen$$Type): void
public "setCarvingMask"(carving0: $GenerationStep$Carving$$Type, carvingMask1: $CarvingMask$$Type): void
public "setLightEngine"(levelLightEngine0: $LevelLightEngine$$Type): void
public "setStatus"(chunkStatus0: $ChunkStatus$$Type): void
public static "startTracking"(object0: any): void
public "startTracking"(): void
public static "traverseBlocks"<T, C>(vec30: $Vec3$$Type, vec31: $Vec3$$Type, c2: C, biFunction3: $BiFunction$$Type<C, $BlockPos$$Type, T>, function4: $Function$$Type<C, T>): T
public "unpackBlockTicks"(): $LevelChunkTicks<$Block>
public "unpackFluidTicks"(): $LevelChunkTicks<$Fluid>
public static "unpackOffsetCoordinates"(short0: short, int1: integer, chunkPos2: $ChunkPos$$Type): $BlockPos
public "wrap"(): $WeakReference<$Trackable>
get "blockEntities"(): $Map<$BlockPos, $BlockEntity>
get "blockEntityNbts"(): $Map<$BlockPos, $CompoundTag>
get "entities"(): $List<$CompoundTag>
get "maxBuildHeight"(): integer
get "maxLightLevel"(): integer
get "maxSection"(): integer
get "minSection"(): integer
get "modelDataManager"(): $ModelDataManager
get "sectionsCount"(): integer
set "belowZeroRetrogen"(value: $BelowZeroRetrogen$$Type)
set "lightEngine"(value: $LevelLightEngine$$Type)
set "status"(value: $ChunkStatus$$Type)
}
}

declare module "net.minecraft.world.level.chunk.LevelChunkSection" {
import { $Registry$$Type } from "net.minecraft.core.Registry"
import { $Holder, $Holder$$Type } from "net.minecraft.core.Holder"
import { $Climate$Sampler$$Type } from "net.minecraft.world.level.biome.Climate$Sampler"
import { $Predicate$$Type } from "java.util.function.Predicate"
import { $BiomeResolver$$Type } from "net.minecraft.world.level.biome.BiomeResolver"
import { $FluidState } from "net.minecraft.world.level.material.FluidState"
import { $BlockState, $BlockState$$Type } from "net.minecraft.world.level.block.state.BlockState"
import { $PalettedContainer, $PalettedContainer$$Type } from "net.minecraft.world.level.chunk.PalettedContainer"
import { $PalettedContainerRO, $PalettedContainerRO$$Type } from "net.minecraft.world.level.chunk.PalettedContainerRO"
import { $FriendlyByteBuf$$Type } from "net.minecraft.network.FriendlyByteBuf"
import { $Biome, $Biome$$Type } from "net.minecraft.world.level.biome.Biome"

export class $LevelChunkSection {
static readonly "BIOME_CONTAINER_BITS": integer
static readonly "SECTION_HEIGHT": integer
static readonly "SECTION_SIZE": integer
static readonly "SECTION_WIDTH": integer

constructor(registry0: $Registry$$Type<$Biome$$Type>)
constructor(palettedContainer0: $PalettedContainer$$Type<$BlockState$$Type>, palettedContainerRO1: $PalettedContainerRO$$Type<$Holder$$Type<$Biome$$Type>>)

public "acquire"(): void
public "fillBiomesFromNoise"(biomeResolver0: $BiomeResolver$$Type, sampler1: $Climate$Sampler$$Type, int2: integer, int3: integer, int4: integer): void
public "getBiomes"(): $PalettedContainerRO<$Holder<$Biome>>
public "getBlockState"(int0: integer, int1: integer, int2: integer): $BlockState
public "getFluidState"(int0: integer, int1: integer, int2: integer): $FluidState
public "getNoiseBiome"(int0: integer, int1: integer, int2: integer): $Holder<$Biome>
public "getSerializedSize"(): integer
public "getStates"(): $PalettedContainer<$BlockState>
public "hasOnlyAir"(): boolean
public "isRandomlyTicking"(): boolean
public "isRandomlyTickingBlocks"(): boolean
public "isRandomlyTickingFluids"(): boolean
public "maybeHas"(predicate0: $Predicate$$Type<$BlockState$$Type>): boolean
public "read"(friendlyByteBuf0: $FriendlyByteBuf$$Type): void
public "readBiomes"(friendlyByteBuf0: $FriendlyByteBuf$$Type): void
public "recalcBlockCounts"(): void
public "release"(): void
public "setBlockState"(int0: integer, int1: integer, int2: integer, blockState3: $BlockState$$Type): $BlockState
public "setBlockState"(int0: integer, int1: integer, int2: integer, blockState3: $BlockState$$Type, boolean4: boolean): $BlockState
public "write"(friendlyByteBuf0: $FriendlyByteBuf$$Type): void
get "biomes"(): $PalettedContainerRO<$Holder<$Biome>>
get "serializedSize"(): integer
get "states"(): $PalettedContainer<$BlockState>
get "randomlyTicking"(): boolean
get "randomlyTickingBlocks"(): boolean
get "randomlyTickingFluids"(): boolean
}
}

declare module "net.minecraft.world.level.chunk.storage.IOWorker" {
import { $ChunkPos$$Type } from "net.minecraft.world.level.ChunkPos"
import { $CompoundTag, $CompoundTag$$Type } from "net.minecraft.nbt.CompoundTag"
import { $RegionFileStorage } from "net.minecraft.world.level.chunk.storage.RegionFileStorage"
import { $ChunkScanAccess } from "net.minecraft.world.level.chunk.storage.ChunkScanAccess"
import { $StreamTagVisitor$$Type } from "net.minecraft.nbt.StreamTagVisitor"
import { $Optional } from "java.util.Optional"
import { $CompletableFuture } from "java.util.concurrent.CompletableFuture"
import { $AutoCloseable } from "java.lang.AutoCloseable"

export class $IOWorker implements $ChunkScanAccess, $AutoCloseable {
readonly "storage": $RegionFileStorage

public "close"(): void
public "isOldChunkAround"(chunkPos0: $ChunkPos$$Type, int1: integer): boolean
public "loadAsync"(chunkPos0: $ChunkPos$$Type): $CompletableFuture<$Optional<$CompoundTag>>
public "scanChunk"(chunkPos0: $ChunkPos$$Type, streamTagVisitor1: $StreamTagVisitor$$Type): $CompletableFuture<void>
public "store"(chunkPos0: $ChunkPos$$Type, compoundTag1: $CompoundTag$$Type): $CompletableFuture<void>
public "synchronize"(boolean0: boolean): $CompletableFuture<void>
}
}

declare module "net.minecraft.world.level.chunk.PalettedContainerRO" {
import { $Consumer$$Type } from "java.util.function.Consumer"
import { $Predicate$$Type } from "java.util.function.Predicate"
import { $IdMap$$Type } from "net.minecraft.core.IdMap"
import { $PalettedContainer$Strategy$$Type } from "net.minecraft.world.level.chunk.PalettedContainer$Strategy"
import { $PalettedContainer } from "net.minecraft.world.level.chunk.PalettedContainer"
import { $PalettedContainerRO$PackedData } from "net.minecraft.world.level.chunk.PalettedContainerRO$PackedData"
import { $FriendlyByteBuf$$Type } from "net.minecraft.network.FriendlyByteBuf"
import { $PalettedContainer$CountConsumer$$Type } from "net.minecraft.world.level.chunk.PalettedContainer$CountConsumer"

export interface $PalettedContainerRO<T = any> {
"count"(countConsumer0: $PalettedContainer$CountConsumer$$Type<T>): void
"get"(int0: integer, int1: integer, int2: integer): T
"getAll"(consumer0: $Consumer$$Type<T>): void
"getSerializedSize"(): integer
"maybeHas"(predicate0: $Predicate$$Type<T>): boolean
"pack"(idMap0: $IdMap$$Type<T>, strategy1: $PalettedContainer$Strategy$$Type): $PalettedContainerRO$PackedData<T>
"recreate"(): $PalettedContainer<T>
"write"(friendlyByteBuf0: $FriendlyByteBuf$$Type): void
get "serializedSize"(): integer
}

export namespace $PalettedContainerRO {
const probejs$$marker: never
}
export abstract class $PalettedContainerRO$$Static<T = any> implements $PalettedContainerRO<T> {
}
}

declare module "net.minecraft.world.level.chunk.LevelChunk$EntityCreationType" {
import { $Enum } from "java.lang.Enum"

export class $LevelChunk$EntityCreationType extends $Enum<$LevelChunk$EntityCreationType> {
static readonly "CHECK": $LevelChunk$EntityCreationType
static readonly "IMMEDIATE": $LevelChunk$EntityCreationType
static readonly "QUEUED": $LevelChunk$EntityCreationType

public static "valueOf"(string0: string): $LevelChunk$EntityCreationType
public static "values"(): $LevelChunk$EntityCreationType[]
}
}

declare module "net.minecraft.world.level.chunk.storage.RegionFileStorage" {
import { $ChunkPos$$Type } from "net.minecraft.world.level.ChunkPos"
import { $CompoundTag } from "net.minecraft.nbt.CompoundTag"
import { $StreamTagVisitor$$Type } from "net.minecraft.nbt.StreamTagVisitor"
import { $Path } from "java.nio.file.Path"
import { $Long2ObjectLinkedOpenHashMap } from "it.unimi.dsi.fastutil.longs.Long2ObjectLinkedOpenHashMap"
import { $AutoCloseable } from "java.lang.AutoCloseable"
import { $RegionFile } from "net.minecraft.world.level.chunk.storage.RegionFile"

export class $RegionFileStorage implements $AutoCloseable {
static readonly "ANVIL_EXTENSION": string
readonly "folder": $Path
readonly "regionCache": $Long2ObjectLinkedOpenHashMap<$RegionFile>

public "close"(): void
public "flush"(): void
public "read"(chunkPos0: $ChunkPos$$Type): $CompoundTag
public "scanChunk"(chunkPos0: $ChunkPos$$Type, streamTagVisitor1: $StreamTagVisitor$$Type): void
}
}

declare module "net.minecraft.world.level.chunk.ChunkStatus$LoadingTask" {
import { $Either } from "com.mojang.datafixers.util.Either"
import { $StructureTemplateManager$$Type } from "net.minecraft.world.level.levelgen.structure.templatesystem.StructureTemplateManager"
import { $CompletableFuture } from "java.util.concurrent.CompletableFuture"
import { $ChunkStatus$$Type } from "net.minecraft.world.level.chunk.ChunkStatus"
import { $ThreadedLevelLightEngine$$Type } from "net.minecraft.server.level.ThreadedLevelLightEngine"
import { $ChunkHolder$ChunkLoadingFailure } from "net.minecraft.server.level.ChunkHolder$ChunkLoadingFailure"
import { $ServerLevel$$Type } from "net.minecraft.server.level.ServerLevel"
import { $Function$$Type } from "java.util.function.Function"
import { $ChunkAccess, $ChunkAccess$$Type } from "net.minecraft.world.level.chunk.ChunkAccess"

export interface $ChunkStatus$LoadingTask {
"doWork"(chunkStatus0: $ChunkStatus$$Type, serverLevel1: $ServerLevel$$Type, structureTemplateManager2: $StructureTemplateManager$$Type, threadedLevelLightEngine3: $ThreadedLevelLightEngine$$Type, function4: $Function$$Type<$ChunkAccess$$Type, $CompletableFuture<$Either<$ChunkAccess, $ChunkHolder$ChunkLoadingFailure>>>, chunkAccess5: $ChunkAccess$$Type): $CompletableFuture<$Either<$ChunkAccess, $ChunkHolder$ChunkLoadingFailure>>
}

export namespace $ChunkStatus$LoadingTask {
const probejs$$marker: never
}
export abstract class $ChunkStatus$LoadingTask$$Static implements $ChunkStatus$LoadingTask {
}
}

declare module "net.minecraft.world.level.chunk.LevelChunk$PostLoadProcessor" {
import { $LevelChunk$$Type } from "net.minecraft.world.level.chunk.LevelChunk"

export interface $LevelChunk$PostLoadProcessor {
"run"(levelChunk0: $LevelChunk$$Type): void
}

export namespace $LevelChunk$PostLoadProcessor {
const probejs$$marker: never
}
export abstract class $LevelChunk$PostLoadProcessor$$Static implements $LevelChunk$PostLoadProcessor {
}
}

declare module "net.minecraft.world.level.chunk.PalettedContainer$Configuration" {
import { $PaletteResize$$Type } from "net.minecraft.world.level.chunk.PaletteResize"
import { $IdMap$$Type } from "net.minecraft.core.IdMap"
import { $Palette$Factory, $Palette$Factory$$Type } from "net.minecraft.world.level.chunk.Palette$Factory"
import { $Record } from "java.lang.Record"
import { $PalettedContainer$Data } from "net.minecraft.world.level.chunk.PalettedContainer$Data"

export class $PalettedContainer$Configuration<T = any> extends $Record {
constructor(factory: $Palette$Factory$$Type, bits: integer)

public "bits"(): integer
public "createData"(idMap0: $IdMap$$Type<T>, paletteResize1: $PaletteResize$$Type<T>, int2: integer): $PalettedContainer$Data<T>
public "factory"(): $Palette$Factory
}
}

declare module "net.minecraft.world.level.chunk.ImposterProtoChunk" {
import { $LevelChunk, $LevelChunk$$Type } from "net.minecraft.world.level.chunk.LevelChunk"
import { $LevelHeightAccessor } from "net.minecraft.world.level.LevelHeightAccessor"
import { $AABB$$Type } from "net.minecraft.world.phys.AABB"
import { $BiFunction$$Type } from "java.util.function.BiFunction"
import { $ProtoChunk } from "net.minecraft.world.level.chunk.ProtoChunk"
import { $BlockState, $BlockState$$Type } from "net.minecraft.world.level.block.state.BlockState"
import { $Supplier$$Type } from "java.util.function.Supplier"
import { $Function$$Type } from "java.util.function.Function"
import { $Trackable } from "dev.uncandango.alltheleaks.mixin.Trackable"
import { $TrackedData, $TrackedData$$Type } from "dev.corgitaco.dataanchor.data.TrackedData"
import { $ClipBlockStateContext$$Type } from "net.minecraft.world.level.ClipBlockStateContext"
import { $Structure } from "net.minecraft.world.level.levelgen.structure.Structure"
import { $ClipContext$$Type } from "net.minecraft.world.level.ClipContext"
import { $Map } from "java.util.Map"
import { $WeakReference } from "java.lang.ref.WeakReference"
import { $TrackedDataRegistry$$Type } from "dev.corgitaco.dataanchor.data.registry.TrackedDataRegistry"
import { $LongSet } from "it.unimi.dsi.fastutil.longs.LongSet"
import { $BlockHitResult } from "net.minecraft.world.phys.BlockHitResult"
import { $ModelDataManager } from "net.minecraftforge.client.model.data.ModelDataManager"
import { $BlockEntity, $BlockEntity$$Type } from "net.minecraft.world.level.block.entity.BlockEntity"
import { $ObjectOpenCustomHashSet } from "it.unimi.dsi.fastutil.objects.ObjectOpenCustomHashSet"
import { $Stream } from "java.util.stream.Stream"
import { $TrackedDataContainer } from "dev.corgitaco.dataanchor.data.TrackedDataContainer"
import { $Vec3$$Type } from "net.minecraft.world.phys.Vec3"
import { $BlockPos$$Type } from "net.minecraft.core.BlockPos"
import { $BlockEntityType$$Type } from "net.minecraft.world.level.block.entity.BlockEntityType"
import { $Optional } from "java.util.Optional"
import { $Class } from "java.lang.Class"
import { $VoxelShape, $VoxelShape$$Type } from "net.minecraft.world.phys.shapes.VoxelShape"

export class $ImposterProtoChunk extends $ProtoChunk {
constructor(levelChunk0: $LevelChunk$$Type, boolean1: boolean)

public static "clearNullReferences"(): void
public "clip"(clipContext0: $ClipContext$$Type): $BlockHitResult
public "clipWithInteractionOverride"(vec30: $Vec3$$Type, vec31: $Vec3$$Type, blockPos2: $BlockPos$$Type, voxelShape3: $VoxelShape$$Type, blockState4: $BlockState$$Type): $BlockHitResult
public static "create"(int0: integer, int1: integer): $LevelHeightAccessor
public static "createWeakRefBasedSet"(): $ObjectOpenCustomHashSet<$WeakReference<$Trackable>>
public "getAllReferences"(): $Map<$Structure, $LongSet>
public "getBlockEntity"<T extends $BlockEntity>(blockPos0: $BlockPos$$Type, blockEntityType1: $BlockEntityType$$Type<T>): $Optional<T>
public "getBlockFloorHeight"(voxelShape0: $VoxelShape$$Type, supplier1: $Supplier$$Type<$VoxelShape>): double
public "getBlockFloorHeight"(blockPos0: $BlockPos$$Type): double
public "getBlockStates"(aABB0: $AABB$$Type): $Stream<$BlockState>
public "getExistingBlockEntity"(blockPos0: $BlockPos$$Type): $BlockEntity
public "getLightEmission"(blockPos0: $BlockPos$$Type): integer
public "getMaxBuildHeight"(): integer
public "getMaxLightLevel"(): integer
public "getMaxSection"(): integer
public "getMinSection"(): integer
public "getModelDataManager"(): $ModelDataManager
public "getSectionIndex"(int0: integer): integer
public "getSectionIndexFromSectionY"(int0: integer): integer
public "getSectionYFromSectionIndex"(int0: integer): integer
public "getSectionsCount"(): integer
public static "getSummary"(): $Map<$Class<any>, $Map<$Class<any>, long>>
public "getWrapped"(): $LevelChunk
public "isBlockInLine"(clipBlockStateContext0: $ClipBlockStateContext$$Type): $BlockHitResult
public "isOutsideBuildHeight"(blockPos0: $BlockPos$$Type): boolean
public "isOutsideBuildHeight"(int0: integer): boolean
public static "makeBasicContainer"<O, T extends $TrackedData<O>>(registry: $TrackedDataRegistry$$Type<O, T>, o: O, isClient: boolean): $TrackedDataContainer<O, T>
public static "makeBasicContainer"<O, T extends $TrackedData<O>>(registry: $TrackedDataRegistry$$Type<O, T>, o: O, isClient: boolean, lazyLoad: boolean): $TrackedDataContainer<O, T>
public "sereneseasonsplus$getTotalSnowLayers"(): integer
public "sereneseasonsplus$getTrackedColumnCount"(): integer
public static "startTracking"(object0: any): void
public "startTracking"(): void
public static "traverseBlocks"<T, C>(vec30: $Vec3$$Type, vec31: $Vec3$$Type, c2: C, biFunction3: $BiFunction$$Type<C, $BlockPos$$Type, T>, function4: $Function$$Type<C, T>): T
public "wrap"(): $WeakReference<$Trackable>
get "allReferences"(): $Map<$Structure, $LongSet>
get "maxBuildHeight"(): integer
get "maxLightLevel"(): integer
get "maxSection"(): integer
get "minSection"(): integer
get "modelDataManager"(): $ModelDataManager
get "sectionsCount"(): integer
get "wrapped"(): $LevelChunk
}
}

declare module "net.minecraft.world.level.chunk.PalettedContainerRO$PackedData" {
import { $List, $List$$Type } from "java.util.List"
import { $LongStream, $LongStream$$Type } from "java.util.stream.LongStream"
import { $Optional, $Optional$$Type } from "java.util.Optional"
import { $Record } from "java.lang.Record"

export class $PalettedContainerRO$PackedData<T = any> extends $Record {
constructor(list0: $List$$Type<T>, optional1: $Optional$$Type<$LongStream$$Type>)

public "paletteEntries"(): $List<T>
public "storage"(): $Optional<$LongStream>
}
}

declare module "net.minecraft.world.level.chunk.Palette" {
import { $Predicate$$Type } from "java.util.function.Predicate"
import { $FriendlyByteBuf$$Type } from "net.minecraft.network.FriendlyByteBuf"

export interface $Palette<T = any> {
"copy"(): $Palette<T>
"getSerializedSize"(): integer
"getSize"(): integer
"idFor"(t0: T): integer
"maybeHas"(predicate0: $Predicate$$Type<T>): boolean
"read"(friendlyByteBuf0: $FriendlyByteBuf$$Type): void
"valueFor"(int0: integer): T
"write"(friendlyByteBuf0: $FriendlyByteBuf$$Type): void
get "serializedSize"(): integer
get "size"(): integer
}

export namespace $Palette {
const probejs$$marker: never
}
export abstract class $Palette$$Static<T = any> implements $Palette<T> {
}
}

declare module "net.minecraft.world.level.chunk.PalettedContainer$CountConsumer" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $PalettedContainer$CountConsumer<T = any> {
"accept"(t0: T, int1: integer): void
}

export namespace $PalettedContainer$CountConsumer {
const probejs$$marker: never
}
export abstract class $PalettedContainer$CountConsumer$$Static<T = any> implements $PalettedContainer$CountConsumer<T> {
}
}

declare module "net.minecraft.world.level.chunk.PalettedContainer$Strategy" {
import { $IdMap$$Type } from "net.minecraft.core.IdMap"
import { $PalettedContainer$Configuration } from "net.minecraft.world.level.chunk.PalettedContainer$Configuration"
import { $Palette$Factory } from "net.minecraft.world.level.chunk.Palette$Factory"

export class $PalettedContainer$Strategy {
static readonly "HASHMAP_PALETTE_FACTORY": $Palette$Factory
static readonly "LINEAR_PALETTE_FACTORY": $Palette$Factory
static "SECTION_BIOMES": $PalettedContainer$Strategy
static "SECTION_STATES": $PalettedContainer$Strategy
static readonly "SINGLE_VALUE_PALETTE_FACTORY": $Palette$Factory

constructor(int0: integer)

public "calculateBitsForSerialization"<A>(idMap0: $IdMap$$Type<A>, int1: integer): integer
public "getConfiguration"<A>(idMap0: $IdMap$$Type<A>, int1: integer): $PalettedContainer$Configuration<A>
public "getIndex"(int0: integer, int1: integer, int2: integer): integer
public "size"(): integer
}
}

declare module "net.minecraft.world.level.chunk.StructureAccess" {
import { $Structure, $Structure$$Type } from "net.minecraft.world.level.levelgen.structure.Structure"
import { $Map, $Map$$Type } from "java.util.Map"
import { $LongSet, $LongSet$$Type } from "it.unimi.dsi.fastutil.longs.LongSet"
import { $StructureStart, $StructureStart$$Type } from "net.minecraft.world.level.levelgen.structure.StructureStart"

export interface $StructureAccess {
"addReferenceForStructure"(structure0: $Structure$$Type, long1: long): void
"getAllReferences"(): $Map<$Structure, $LongSet>
"getReferencesForStructure"(structure0: $Structure$$Type): $LongSet
"getStartForStructure"(structure0: $Structure$$Type): $StructureStart
"setAllReferences"(map0: $Map$$Type<$Structure$$Type, $LongSet$$Type>): void
"setStartForStructure"(structure0: $Structure$$Type, structureStart1: $StructureStart$$Type): void
get "allReferences"(): $Map<$Structure, $LongSet>
set "allReferences"(value: $Map$$Type<$Structure$$Type, $LongSet$$Type>)
}

export namespace $StructureAccess {
const probejs$$marker: never
}
export abstract class $StructureAccess$$Static implements $StructureAccess {
}
}

declare module "net.minecraft.world.level.chunk.BulkSectionAccess" {
import { $BlockPos$$Type } from "net.minecraft.core.BlockPos"
import { $LevelChunkSection } from "net.minecraft.world.level.chunk.LevelChunkSection"
import { $LevelAccessor$$Type } from "net.minecraft.world.level.LevelAccessor"
import { $BlockState } from "net.minecraft.world.level.block.state.BlockState"
import { $AutoCloseable } from "java.lang.AutoCloseable"

export class $BulkSectionAccess implements $AutoCloseable {
constructor(levelAccessor0: $LevelAccessor$$Type)

public "close"(): void
public "getBlockState"(blockPos0: $BlockPos$$Type): $BlockState
public "getSection"(blockPos0: $BlockPos$$Type): $LevelChunkSection
}
}

declare module "net.minecraft.world.level.chunk.ChunkGeneratorStructureState" {
import { $BiomeSource$$Type } from "net.minecraft.world.level.biome.BiomeSource"
import { $HolderLookup$$Type } from "net.minecraft.core.HolderLookup"
import { $IChunkGenerator } from "org.embeddedt.modernfix.duck.IChunkGenerator"
import { $StructureSet, $StructureSet$$Type } from "net.minecraft.world.level.levelgen.structure.StructureSet"
import { $ChunkPos } from "net.minecraft.world.level.ChunkPos"
import { $Structure$$Type } from "net.minecraft.world.level.levelgen.structure.Structure"
import { $List } from "java.util.List"
import { $Stream$$Type } from "java.util.stream.Stream"
import { $Holder, $Holder$$Type } from "net.minecraft.core.Holder"
import { $RandomState, $RandomState$$Type } from "net.minecraft.world.level.levelgen.RandomState"
import { $RegistryAccess$Frozen$$Type } from "net.minecraft.core.RegistryAccess$Frozen"
import { $StructurePlacement } from "net.minecraft.world.level.levelgen.structure.placement.StructurePlacement"
import { $ConcentricRingsStructurePlacement$$Type } from "net.minecraft.world.level.levelgen.structure.placement.ConcentricRingsStructurePlacement"
import { $Path$$Type } from "java.nio.file.Path"

export class $ChunkGeneratorStructureState implements $IChunkGenerator {
public static "createForFlat"(randomState0: $RandomState$$Type, long1: long, biomeSource2: $BiomeSource$$Type, stream3: $Stream$$Type<$Holder$$Type<$StructureSet$$Type>>): $ChunkGeneratorStructureState
public static "createForNormal"(randomState0: $RandomState$$Type, long1: long, biomeSource2: $BiomeSource$$Type, holderLookup3: $HolderLookup$$Type<$StructureSet$$Type>): $ChunkGeneratorStructureState
public "ensureStructuresGenerated"(): void
public "getLevelSeed"(): long
public "getPlacementsForStructure"(holder0: $Holder$$Type<$Structure$$Type>): $List<$StructurePlacement>
public "getRingPositionsFor"(concentricRingsStructurePlacement0: $ConcentricRingsStructurePlacement$$Type): $List<$ChunkPos>
public "hasStructureChunkInRange"(holder0: $Holder$$Type<$StructureSet$$Type>, int1: integer, int2: integer, int3: integer): boolean
public "mfix$setStrongholdCachePath"(path0: $Path$$Type, frozen1: $RegistryAccess$Frozen$$Type): void
public "possibleStructureSets"(): $List<$Holder<$StructureSet>>
public "randomState"(): $RandomState
get "levelSeed"(): long
}
}

declare module "net.minecraft.world.level.chunk.storage.SectionStorage" {
import { $LevelHeightAccessor$$Type } from "net.minecraft.world.level.LevelHeightAccessor"
import { $DataFixTypes$$Type } from "net.minecraft.util.datafix.DataFixTypes"
import { $RegistryAccess$$Type } from "net.minecraft.core.RegistryAccess"
import { $Function$$Type } from "java.util.function.Function"
import { $Runnable$$Type } from "java.lang.Runnable"
import { $DataFixer$$Type } from "com.mojang.datafixers.DataFixer"
import { $AutoCloseable } from "java.lang.AutoCloseable"
import { $Iterable } from "java.lang.Iterable"
import { $ChunkPos$$Type } from "net.minecraft.world.level.ChunkPos"
import { $Codec } from "com.mojang.serialization.Codec"
import { $Stream } from "java.util.stream.Stream"
import { $Optional } from "java.util.Optional"
import { $RegionBasedStorageSectionExtended } from "com.abdelaziz.canary.common.world.interests.RegionBasedStorageSectionExtended"
import { $Path$$Type } from "java.nio.file.Path"

export class $SectionStorage<R = any> implements $AutoCloseable, $RegionBasedStorageSectionExtended {
constructor(path0: $Path$$Type, function1: $Function$$Type<$Runnable$$Type, $Codec<R>>, function2: $Function$$Type<$Runnable$$Type, R>, dataFixer3: $DataFixer$$Type, dataFixTypes4: $DataFixTypes$$Type, boolean5: boolean, registryAccess6: $RegistryAccess$$Type, levelHeightAccessor7: $LevelHeightAccessor$$Type)

public "close"(): void
public "flush"(chunkPos0: $ChunkPos$$Type): void
public "getInChunkColumn"(int0: integer, int1: integer): $Iterable
public "getOrLoad"(long0: long): $Optional<R>
public "getWithinChunkColumn"(int0: integer, int1: integer): $Stream
public "hasWork"(): boolean
}
}

declare module "net.minecraft.world.level.chunk.DataLayer" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export class $DataLayer {
static readonly "LAYER_COUNT": integer
static readonly "LAYER_SIZE": integer
static readonly "SIZE": integer

constructor()
constructor(int0: integer)
constructor(byte0s: byte[])

public "copy"(): $DataLayer
public "fill"(int0: integer): void
public "get"(int0: integer, int1: integer, int2: integer): integer
public "getData"(): byte[]
public "isDefinitelyFilledWith"(int0: integer): boolean
public "isDefinitelyHomogenous"(): boolean
public "isEmpty"(): boolean
public "layerToString"(int0: integer): string
public "set"(int0: integer, int1: integer, int2: integer, int3: integer): void
get "data"(): byte[]
get "definitelyHomogenous"(): boolean
get "empty"(): boolean
}
}

declare module "net.minecraft.world.level.chunk.CarvingMask" {
import { $ChunkPos$$Type } from "net.minecraft.world.level.ChunkPos"
import { $Stream } from "java.util.stream.Stream"
import { $BlockPos } from "net.minecraft.core.BlockPos"
import { $CarvingMask$Mask$$Type } from "net.minecraft.world.level.chunk.CarvingMask$Mask"

export class $CarvingMask {
constructor(int0: integer, int1: integer)
constructor(long0s: long[], int1: integer)

public "get"(int0: integer, int1: integer, int2: integer): boolean
public "set"(int0: integer, int1: integer, int2: integer): void
public "setAdditionalMask"(mask0: $CarvingMask$Mask$$Type): void
public "stream"(chunkPos0: $ChunkPos$$Type): $Stream<$BlockPos>
public "toArray"(): long[]
set "additionalMask"(value: $CarvingMask$Mask$$Type)
}
}

declare module "net.minecraft.world.level.chunk.CarvingMask$Mask" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $CarvingMask$Mask {
"test"(int0: integer, int1: integer, int2: integer): boolean
}

export namespace $CarvingMask$Mask {
const probejs$$marker: never
}
export abstract class $CarvingMask$Mask$$Static implements $CarvingMask$Mask {
}
}

declare module "net.minecraft.world.level.chunk.PalettedContainer$Data" {
import { $Palette, $Palette$$Type } from "net.minecraft.world.level.chunk.Palette"
import { $PalettedContainer$Configuration } from "net.minecraft.world.level.chunk.PalettedContainer$Configuration"
import { $BitStorage, $BitStorage$$Type } from "net.minecraft.util.BitStorage"
import { $Record } from "java.lang.Record"
import { $FriendlyByteBuf$$Type } from "net.minecraft.network.FriendlyByteBuf"

export class $PalettedContainer$Data<T = any> extends $Record {
public "configuration"(): $PalettedContainer$Configuration<T>
public "copy"(): $PalettedContainer$Data<T>
public "copyFrom"(palette0: $Palette$$Type<T>, bitStorage1: $BitStorage$$Type): void
public "getSerializedSize"(): integer
public "palette"(): $Palette<T>
public "storage"(): $BitStorage
public "write"(friendlyByteBuf0: $FriendlyByteBuf$$Type): void
get "serializedSize"(): integer
}
}

declare module "net.minecraft.world.level.chunk.ChunkSource" {
import { $LevelChunk } from "net.minecraft.world.level.chunk.LevelChunk"
import { $LightChunk } from "net.minecraft.world.level.chunk.LightChunk"
import { $AutoCloseable } from "java.lang.AutoCloseable"
import { $ChunkAccess } from "net.minecraft.world.level.chunk.ChunkAccess"
import { $BooleanSupplier$$Type } from "java.util.function.BooleanSupplier"
import { $LightChunkGetter } from "net.minecraft.world.level.chunk.LightChunkGetter"
import { $ChunkPos$$Type } from "net.minecraft.world.level.ChunkPos"
import { $BlockGetter } from "net.minecraft.world.level.BlockGetter"
import { $LevelLightEngine } from "net.minecraft.world.level.lighting.LevelLightEngine"
import { $ChunkStatus$$Type } from "net.minecraft.world.level.chunk.ChunkStatus"
import { $LightLayer$$Type } from "net.minecraft.world.level.LightLayer"
import { $SectionPos$$Type } from "net.minecraft.core.SectionPos"

export class $ChunkSource implements $LightChunkGetter, $AutoCloseable {
constructor()

public "close"(): void
public "gatherStats"(): string
public "getChunk"(int0: integer, int1: integer, chunkStatus2: $ChunkStatus$$Type, boolean3: boolean): $ChunkAccess
public "getChunk"(int0: integer, int1: integer, boolean2: boolean): $LevelChunk
public "getChunkForLighting"(int0: integer, int1: integer): $LightChunk
public "getChunkNow"(int0: integer, int1: integer): $LevelChunk
public "getLevel"(): $BlockGetter
public "getLightEngine"(): $LevelLightEngine
public "getLoadedChunksCount"(): integer
public "hasChunk"(int0: integer, int1: integer): boolean
public "onLightUpdate"(lightLayer0: $LightLayer$$Type, sectionPos1: $SectionPos$$Type): void
public "setSpawnSettings"(boolean0: boolean, boolean1: boolean): void
public "tick"(booleanSupplier0: $BooleanSupplier$$Type, boolean1: boolean): void
public "updateChunkForced"(chunkPos0: $ChunkPos$$Type, boolean1: boolean): void
get "level"(): $BlockGetter
get "lightEngine"(): $LevelLightEngine
get "loadedChunksCount"(): integer
}
}

declare module "net.minecraft.world.level.chunk.PaletteResize" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $PaletteResize<T = any> {
"onResize"(int0: integer, t1: T): integer
}

export namespace $PaletteResize {
const probejs$$marker: never
}
export abstract class $PaletteResize$$Static<T = any> implements $PaletteResize<T> {
}
}

declare module "net.minecraft.world.level.chunk.storage.RegionFileVersion" {
import { $OutputStream, $OutputStream$$Type } from "java.io.OutputStream"
import { $InputStream, $InputStream$$Type } from "java.io.InputStream"

export class $RegionFileVersion {
static readonly "VERSION_DEFLATE": $RegionFileVersion
static readonly "VERSION_GZIP": $RegionFileVersion
static readonly "VERSION_NONE": $RegionFileVersion

public static "fromId"(int0: integer): $RegionFileVersion
public "getId"(): integer
public static "isValidVersion"(int0: integer): boolean
public "wrap"(inputStream0: $InputStream$$Type): $InputStream
public "wrap"(outputStream0: $OutputStream$$Type): $OutputStream
get "id"(): integer
}
}

declare module "net.minecraft.world.level.chunk.ChunkStatus$ChunkType" {
import { $Enum } from "java.lang.Enum"

export class $ChunkStatus$ChunkType extends $Enum<$ChunkStatus$ChunkType> {
static readonly "LEVELCHUNK": $ChunkStatus$ChunkType
static readonly "PROTOCHUNK": $ChunkStatus$ChunkType

public static "valueOf"(string0: string): $ChunkStatus$ChunkType
public static "values"(): $ChunkStatus$ChunkType[]
}
}

declare module "net.minecraft.world.level.chunk.storage.RegionFile" {
import { $ChunkPos$$Type } from "net.minecraft.world.level.ChunkPos"
import { $DataInputStream } from "java.io.DataInputStream"
import { $DataOutputStream } from "java.io.DataOutputStream"
import { $RegionFileVersion$$Type } from "net.minecraft.world.level.chunk.storage.RegionFileVersion"
import { $Path$$Type } from "java.nio.file.Path"
import { $AutoCloseable } from "java.lang.AutoCloseable"

export class $RegionFile implements $AutoCloseable {
constructor(path0: $Path$$Type, path1: $Path$$Type, regionFileVersion2: $RegionFileVersion$$Type, boolean3: boolean)
constructor(path0: $Path$$Type, path1: $Path$$Type, boolean2: boolean)

public "clear"(chunkPos0: $ChunkPos$$Type): void
public "close"(): void
public "doesChunkExist"(chunkPos0: $ChunkPos$$Type): boolean
public "flush"(): void
public "getChunkDataInputStream"(chunkPos0: $ChunkPos$$Type): $DataInputStream
public "getChunkDataOutputStream"(chunkPos0: $ChunkPos$$Type): $DataOutputStream
public "hasChunk"(chunkPos0: $ChunkPos$$Type): boolean
}
}

declare module "net.minecraft.world.level.chunk.LightChunk" {
import { $LevelHeightAccessor } from "net.minecraft.world.level.LevelHeightAccessor"
import { $AABB$$Type } from "net.minecraft.world.phys.AABB"
import { $BiFunction$$Type } from "java.util.function.BiFunction"
import { $BlockHitResult } from "net.minecraft.world.phys.BlockHitResult"
import { $BlockState, $BlockState$$Type } from "net.minecraft.world.level.block.state.BlockState"
import { $ModelDataManager } from "net.minecraftforge.client.model.data.ModelDataManager"
import { $ChunkSkyLightSources } from "net.minecraft.world.level.lighting.ChunkSkyLightSources"
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
import { $BiConsumer$$Type } from "java.util.function.BiConsumer"
import { $Optional } from "java.util.Optional"
import { $VoxelShape, $VoxelShape$$Type } from "net.minecraft.world.phys.shapes.VoxelShape"

export interface $LightChunk extends $BlockGetter {
"clip"(clipContext0: $ClipContext$$Type): $BlockHitResult
"clipWithInteractionOverride"(vec30: $Vec3$$Type, vec31: $Vec3$$Type, blockPos2: $BlockPos$$Type, voxelShape3: $VoxelShape$$Type, blockState4: $BlockState$$Type): $BlockHitResult
"findBlockLightSources"(biConsumer0: $BiConsumer$$Type<$BlockPos$$Type, $BlockState$$Type>): void
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
"getSkyLightSources"(): $ChunkSkyLightSources
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
get "skyLightSources"(): $ChunkSkyLightSources
}

export namespace $LightChunk {
function create(int0: integer, int1: integer): $LevelHeightAccessor
function traverseBlocks<T, C>(vec30: $Vec3$$Type, vec31: $Vec3$$Type, c2: C, biFunction3: $BiFunction$$Type<C, $BlockPos$$Type, T>, function4: $Function$$Type<C, T>): T
}
export abstract class $LightChunk$$Static implements $LightChunk {
static "create"(int0: integer, int1: integer): $LevelHeightAccessor
static "traverseBlocks"<T, C>(vec30: $Vec3$$Type, vec31: $Vec3$$Type, c2: C, biFunction3: $BiFunction$$Type<C, $BlockPos$$Type, T>, function4: $Function$$Type<C, T>): T
}
}

declare module "net.minecraft.world.level.chunk.LightChunkGetter" {
import { $BlockGetter } from "net.minecraft.world.level.BlockGetter"
import { $LightLayer$$Type } from "net.minecraft.world.level.LightLayer"
import { $LightChunk } from "net.minecraft.world.level.chunk.LightChunk"
import { $SectionPos$$Type } from "net.minecraft.core.SectionPos"

export interface $LightChunkGetter {
"getChunkForLighting"(int0: integer, int1: integer): $LightChunk
"getLevel"(): $BlockGetter
"onLightUpdate"(lightLayer0: $LightLayer$$Type, sectionPos1: $SectionPos$$Type): void
get "level"(): $BlockGetter
}

export namespace $LightChunkGetter {
const probejs$$marker: never
}
export abstract class $LightChunkGetter$$Static implements $LightChunkGetter {
}
}

