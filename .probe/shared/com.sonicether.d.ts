declare module "com.sonicether.soundphysics.world.ClonedClientLevel" {
import { $LevelHeightAccessor } from "net.minecraft.world.level.LevelHeightAccessor"
import { $AABB$$Type } from "net.minecraft.world.phys.AABB"
import { $BiFunction$$Type } from "java.util.function.BiFunction"
import { $BlockHitResult } from "net.minecraft.world.phys.BlockHitResult"
import { $BlockState, $BlockState$$Type } from "net.minecraft.world.level.block.state.BlockState"
import { $ClientLevel$$Type } from "net.minecraft.client.multiplayer.ClientLevel"
import { $ModelDataManager } from "net.minecraftforge.client.model.data.ModelDataManager"
import { $BlockEntity, $BlockEntity$$Type } from "net.minecraft.world.level.block.entity.BlockEntity"
import { $Supplier$$Type } from "java.util.function.Supplier"
import { $Function$$Type } from "java.util.function.Function"
import { $ClipBlockStateContext$$Type } from "net.minecraft.world.level.ClipBlockStateContext"
import { $Stream } from "java.util.stream.Stream"
import { $ClipContext$$Type } from "net.minecraft.world.level.ClipContext"
import { $BlockPos, $BlockPos$$Type } from "net.minecraft.core.BlockPos"
import { $Vec3$$Type } from "net.minecraft.world.phys.Vec3"
import { $BlockEntityType$$Type } from "net.minecraft.world.level.block.entity.BlockEntityType"
import { $FluidState } from "net.minecraft.world.level.material.FluidState"
import { $Optional } from "java.util.Optional"
import { $ClientLevelProxy } from "com.sonicether.soundphysics.world.ClientLevelProxy"
import { $VoxelShape, $VoxelShape$$Type } from "net.minecraft.world.phys.shapes.VoxelShape"
import { $ClonedLevelChunk } from "com.sonicether.soundphysics.world.ClonedLevelChunk"

export class $ClonedClientLevel implements $ClientLevelProxy {
constructor(clientLevel0: $ClientLevel$$Type, blockPos1: $BlockPos$$Type, long2: long, int3: integer)

public "clip"(clipContext0: $ClipContext$$Type): $BlockHitResult
public "clipWithInteractionOverride"(vec30: $Vec3$$Type, vec31: $Vec3$$Type, blockPos2: $BlockPos$$Type, voxelShape3: $VoxelShape$$Type, blockState4: $BlockState$$Type): $BlockHitResult
public static "create"(int0: integer, int1: integer): $LevelHeightAccessor
public "getBlockEntity"(blockPos0: $BlockPos$$Type): $BlockEntity
public "getBlockEntity"<T extends $BlockEntity>(blockPos0: $BlockPos$$Type, blockEntityType1: $BlockEntityType$$Type<T>): $Optional<T>
public "getBlockFloorHeight"(voxelShape0: $VoxelShape$$Type, supplier1: $Supplier$$Type<$VoxelShape>): double
public "getBlockFloorHeight"(blockPos0: $BlockPos$$Type): double
public "getBlockState"(blockPos0: $BlockPos$$Type): $BlockState
public "getBlockStates"(aABB0: $AABB$$Type): $Stream<$BlockState>
public "getChunk"(int0: integer, int1: integer): $ClonedLevelChunk
public "getExistingBlockEntity"(blockPos0: $BlockPos$$Type): $BlockEntity
public "getFluidState"(blockPos0: $BlockPos$$Type): $FluidState
public "getHeight"(): integer
public "getLightEmission"(blockPos0: $BlockPos$$Type): integer
public "getMaxBuildHeight"(): integer
public "getMaxLightLevel"(): integer
public "getMaxSection"(): integer
public "getMinBuildHeight"(): integer
public "getMinSection"(): integer
public "getModelDataManager"(): $ModelDataManager
public "getOrigin"(): $BlockPos
public "getSectionIndex"(int0: integer): integer
public "getSectionIndexFromSectionY"(int0: integer): integer
public "getSectionYFromSectionIndex"(int0: integer): integer
public "getSectionsCount"(): integer
public "getTick"(): long
public "isBlockInLine"(clipBlockStateContext0: $ClipBlockStateContext$$Type): $BlockHitResult
public "isOutsideBuildHeight"(blockPos0: $BlockPos$$Type): boolean
public "isOutsideBuildHeight"(int0: integer): boolean
public static "traverseBlocks"<T, C>(vec30: $Vec3$$Type, vec31: $Vec3$$Type, c2: C, biFunction3: $BiFunction$$Type<C, $BlockPos$$Type, T>, function4: $Function$$Type<C, T>): T
get "height"(): integer
get "maxBuildHeight"(): integer
get "maxLightLevel"(): integer
get "maxSection"(): integer
get "minBuildHeight"(): integer
get "minSection"(): integer
get "modelDataManager"(): $ModelDataManager
get "origin"(): $BlockPos
get "sectionsCount"(): integer
get "tick"(): long
}
}

declare module "com.sonicether.soundphysics.world.CachingClientLevel" {
import { $ClonedClientLevel, $ClonedClientLevel$$Type } from "com.sonicether.soundphysics.world.ClonedClientLevel"

export interface $CachingClientLevel {
"sound_physics_remastered$getCachedClone"(): $ClonedClientLevel
"sound_physics_remastered$setCachedClone"(clonedClientLevel0: $ClonedClientLevel$$Type): void
}

export namespace $CachingClientLevel {
const probejs$$marker: never
}
export abstract class $CachingClientLevel$$Static implements $CachingClientLevel {
}
}

declare module "com.sonicether.soundphysics.world.ClonedLevelChunk" {
import { $LevelHeightAccessor } from "net.minecraft.world.level.LevelHeightAccessor"
import { $AABB$$Type } from "net.minecraft.world.phys.AABB"
import { $BiFunction$$Type } from "java.util.function.BiFunction"
import { $BlockState, $BlockState$$Type } from "net.minecraft.world.level.block.state.BlockState"
import { $Supplier$$Type } from "java.util.function.Supplier"
import { $Function$$Type } from "java.util.function.Function"
import { $Trackable } from "dev.uncandango.alltheleaks.mixin.Trackable"
import { $TrackedData, $TrackedData$$Type } from "dev.corgitaco.dataanchor.data.TrackedData"
import { $ClipBlockStateContext$$Type } from "net.minecraft.world.level.ClipBlockStateContext"
import { $ClipContext$$Type } from "net.minecraft.world.level.ClipContext"
import { $Map } from "java.util.Map"
import { $WeakReference } from "java.lang.ref.WeakReference"
import { $TrackedDataRegistry$$Type } from "dev.corgitaco.dataanchor.data.registry.TrackedDataRegistry"
import { $BlockHitResult } from "net.minecraft.world.phys.BlockHitResult"
import { $ModelDataManager } from "net.minecraftforge.client.model.data.ModelDataManager"
import { $BlockEntity, $BlockEntity$$Type } from "net.minecraft.world.level.block.entity.BlockEntity"
import { $ChunkAccess } from "net.minecraft.world.level.chunk.ChunkAccess"
import { $ChunkPos$$Type } from "net.minecraft.world.level.ChunkPos"
import { $ObjectOpenCustomHashSet } from "it.unimi.dsi.fastutil.objects.ObjectOpenCustomHashSet"
import { $Stream } from "java.util.stream.Stream"
import { $TrackedDataContainer } from "dev.corgitaco.dataanchor.data.TrackedDataContainer"
import { $LevelChunkSection$$Type } from "net.minecraft.world.level.chunk.LevelChunkSection"
import { $Vec3$$Type } from "net.minecraft.world.phys.Vec3"
import { $BlockPos$$Type } from "net.minecraft.core.BlockPos"
import { $BlockEntityType$$Type } from "net.minecraft.world.level.block.entity.BlockEntityType"
import { $FluidState } from "net.minecraft.world.level.material.FluidState"
import { $Optional } from "java.util.Optional"
import { $Class } from "java.lang.Class"
import { $Level$$Type } from "net.minecraft.world.level.Level"
import { $VoxelShape, $VoxelShape$$Type } from "net.minecraft.world.phys.shapes.VoxelShape"

export class $ClonedLevelChunk extends $ChunkAccess {
constructor(level0: $Level$$Type, chunkPos1: $ChunkPos$$Type, levelChunkSection2s: $LevelChunkSection$$Type[])

public static "clearNullReferences"(): void
public "clip"(clipContext0: $ClipContext$$Type): $BlockHitResult
public "clipWithInteractionOverride"(vec30: $Vec3$$Type, vec31: $Vec3$$Type, blockPos2: $BlockPos$$Type, voxelShape3: $VoxelShape$$Type, blockState4: $BlockState$$Type): $BlockHitResult
public static "create"(int0: integer, int1: integer): $LevelHeightAccessor
public static "createWeakRefBasedSet"(): $ObjectOpenCustomHashSet<$WeakReference<$Trackable>>
public "getBlockEntity"(blockPos0: $BlockPos$$Type): $BlockEntity
public "getBlockEntity"<T extends $BlockEntity>(blockPos0: $BlockPos$$Type, blockEntityType1: $BlockEntityType$$Type<T>): $Optional<T>
public "getBlockFloorHeight"(voxelShape0: $VoxelShape$$Type, supplier1: $Supplier$$Type<$VoxelShape>): double
public "getBlockFloorHeight"(blockPos0: $BlockPos$$Type): double
public "getBlockState"(blockPos0: $BlockPos$$Type): $BlockState
public "getBlockStates"(aABB0: $AABB$$Type): $Stream<$BlockState>
public "getExistingBlockEntity"(blockPos0: $BlockPos$$Type): $BlockEntity
public "getFluidState"(blockPos0: $BlockPos$$Type): $FluidState
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
public "isBlockInLine"(clipBlockStateContext0: $ClipBlockStateContext$$Type): $BlockHitResult
public "isOutsideBuildHeight"(blockPos0: $BlockPos$$Type): boolean
public "isOutsideBuildHeight"(int0: integer): boolean
public static "makeBasicContainer"<O, T extends $TrackedData<O>>(registry: $TrackedDataRegistry$$Type<O, T>, o: O, isClient: boolean): $TrackedDataContainer<O, T>
public static "makeBasicContainer"<O, T extends $TrackedData<O>>(registry: $TrackedDataRegistry$$Type<O, T>, o: O, isClient: boolean, lazyLoad: boolean): $TrackedDataContainer<O, T>
public static "startTracking"(object0: any): void
public "startTracking"(): void
public static "traverseBlocks"<T, C>(vec30: $Vec3$$Type, vec31: $Vec3$$Type, c2: C, biFunction3: $BiFunction$$Type<C, $BlockPos$$Type, T>, function4: $Function$$Type<C, T>): T
public "wrap"(): $WeakReference<$Trackable>
get "maxBuildHeight"(): integer
get "maxLightLevel"(): integer
get "maxSection"(): integer
get "minSection"(): integer
get "modelDataManager"(): $ModelDataManager
get "sectionsCount"(): integer
}
}

declare module "com.sonicether.soundphysics.mixin.ChannelAccessor" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $ChannelAccessor {
"getSource"(): integer
get "source"(): integer
}

export namespace $ChannelAccessor {
const probejs$$marker: never
}
export abstract class $ChannelAccessor$$Static implements $ChannelAccessor {
}
}

declare module "com.sonicether.soundphysics.world.ClientLevelProxy" {
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
import { $BlockGetter } from "net.minecraft.world.level.BlockGetter"
import { $Stream } from "java.util.stream.Stream"
import { $ClipContext$$Type } from "net.minecraft.world.level.ClipContext"
import { $Vec3$$Type } from "net.minecraft.world.phys.Vec3"
import { $BlockPos$$Type } from "net.minecraft.core.BlockPos"
import { $BlockEntityType$$Type } from "net.minecraft.world.level.block.entity.BlockEntityType"
import { $FluidState } from "net.minecraft.world.level.material.FluidState"
import { $Optional } from "java.util.Optional"
import { $VoxelShape, $VoxelShape$$Type } from "net.minecraft.world.phys.shapes.VoxelShape"

export interface $ClientLevelProxy extends $BlockGetter {
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

export namespace $ClientLevelProxy {
function create(int0: integer, int1: integer): $LevelHeightAccessor
function traverseBlocks<T, C>(vec30: $Vec3$$Type, vec31: $Vec3$$Type, c2: C, biFunction3: $BiFunction$$Type<C, $BlockPos$$Type, T>, function4: $Function$$Type<C, T>): T
}
export abstract class $ClientLevelProxy$$Static implements $ClientLevelProxy {
static "create"(int0: integer, int1: integer): $LevelHeightAccessor
static "traverseBlocks"<T, C>(vec30: $Vec3$$Type, vec31: $Vec3$$Type, c2: C, biFunction3: $BiFunction$$Type<C, $BlockPos$$Type, T>, function4: $Function$$Type<C, T>): T
}
}

