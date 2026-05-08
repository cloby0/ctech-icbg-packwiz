declare module "net.minecraft.world.level.Level$ExplosionInteraction" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $Level$ExplosionInteraction$$Type = ($Level$ExplosionInteraction | ("none" | "block" | "mob" | "tnt"));
}

declare module "net.minecraft.world.level.BaseSpawner" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $BaseSpawner$$Type = ($BaseSpawner);
}

declare module "net.minecraft.world.level.SpawnData" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $SpawnData$$Type = ($SpawnData);
}

declare module "net.minecraft.world.level.WorldGenLevel" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $WorldGenLevel$$Type = ($WorldGenLevel);
}

declare module "net.minecraft.world.level.ClipContext$Fluid" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $ClipContext$Fluid$$Type = ($ClipContext$Fluid | ("none" | "source_only" | "any" | "water"));
}

declare module "net.minecraft.world.level.ServerLevelAccessor" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $ServerLevelAccessor$$Type = ($ServerLevelAccessor);
}

declare module "net.minecraft.world.level.GameRules$Type" {
import { $GameRules$Value, $GameRules$Value$$Type } from "net.minecraft.world.level.GameRules$Value"

/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $GameRules$Type$$Type<T extends $GameRules$Value<T> = $GameRules$Value<T>> = ($GameRules$Type<T>);
}

declare module "net.minecraft.world.level.BaseCommandBlock" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $BaseCommandBlock$$Type = ($BaseCommandBlock);
}

declare module "net.minecraft.world.level.GameRules" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $GameRules$$Type = ($GameRules);
}

declare module "net.minecraft.world.level.BlockAndTintGetter" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $BlockAndTintGetter$$Type = ($BlockAndTintGetter);
}

declare module "net.minecraft.world.level.GameRules$Category" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $GameRules$Category$$Type = ($GameRules$Category | ("player" | "mobs" | "spawning" | "drops" | "updates" | "chat" | "misc"));
}

declare module "net.minecraft.world.level.Level" {
import { $Level$ExplosionInteraction$$Type } from "net.minecraft.world.level.Level$ExplosionInteraction"
import { $LevelHeightAccessor } from "net.minecraft.world.level.LevelHeightAccessor"
import { $AABB$$Type } from "net.minecraft.world.phys.AABB"
import { $BlockEntityGetter } from "com.abdelaziz.canary.common.world.blockentity.BlockEntityGetter"
import { $ChunkRandomSource } from "com.abdelaziz.canary.common.world.ChunkRandomSource"
import { $ParticleOptions$$Type } from "net.minecraft.core.particles.ParticleOptions"
import { $ChunkSource } from "net.minecraft.world.level.chunk.ChunkSource"
import { $MinecraftServer } from "net.minecraft.server.MinecraftServer"
import { $Holder, $Holder$$Type } from "net.minecraft.core.Holder"
import { $Map } from "java.util.Map"
import { $LightLayer$$Type } from "net.minecraft.world.level.LightLayer"
import { $TrackedDataRegistry$$Type } from "dev.corgitaco.dataanchor.data.registry.TrackedDataRegistry"
import { $ExplosionDamageCalculator$$Type } from "net.minecraft.world.level.ExplosionDamageCalculator"
import { $IForgeLevel } from "net.minecraftforge.common.extensions.IForgeLevel"
import { $ProfilerFiller } from "net.minecraft.util.profiling.ProfilerFiller"
import { $LevelAccessor } from "dev.uncandango.alltheleaks.mixin.core.accessor.LevelAccessor"
import { $BlockEntity, $BlockEntity$$Type } from "net.minecraft.world.level.block.entity.BlockEntity"
import { $RegistryAccess } from "net.minecraft.core.RegistryAccess"
import { $LevelAccessor as $LevelAccessor$0 } from "vazkii.botania.mixin.LevelAccessor"
import { $LevelMixinAccessor } from "wootrevived.woot.mixins.accessors.LevelMixinAccessor"
import { $FeatureFlagSet } from "net.minecraft.world.flag.FeatureFlagSet"
import { $ObjectOpenCustomHashSet } from "it.unimi.dsi.fastutil.objects.ObjectOpenCustomHashSet"
import { $Stream } from "java.util.stream.Stream"
import { $FluidState, $FluidState$$Type } from "net.minecraft.world.level.material.FluidState"
import { $Packet$$Type } from "net.minecraft.network.protocol.Packet"
import { $Heightmap$Types$$Type } from "net.minecraft.world.level.levelgen.Heightmap$Types"
import { $VoxelShape, $VoxelShape$$Type } from "net.minecraft.world.phys.shapes.VoxelShape"
import { $CrashReport$$Type } from "net.minecraft.CrashReport"
import { $LevelExtension } from "dev.engine_room.flywheel.impl.extension.LevelExtension"
import { $SoundSource$$Type } from "net.minecraft.sounds.SoundSource"
import { $LevelChunk, $LevelChunk$$Type } from "net.minecraft.world.level.chunk.LevelChunk"
import { $CollisionContext$$Type } from "net.minecraft.world.phys.shapes.CollisionContext"
import { $EntityType$$Type } from "net.minecraft.world.entity.EntityType"
import { $BlockState, $BlockState$$Type } from "net.minecraft.world.level.block.state.BlockState"
import { $CrashReportCategory } from "net.minecraft.CrashReportCategory"
import { $Biome } from "net.minecraft.world.level.biome.Biome"
import { $Supplier, $Supplier$$Type } from "java.util.function.Supplier"
import { $MultipartPartsHolder } from "earth.terrarium.adastra.common.entities.multipart.MultipartPartsHolder"
import { $LazyOptional } from "net.minecraftforge.common.util.LazyOptional"
import { $LevelData } from "net.minecraft.world.level.storage.LevelData"
import { $TrackedData, $TrackedData$$Type } from "dev.corgitaco.dataanchor.data.TrackedData"
import { $ArrayList, $ArrayList$$Type } from "java.util.ArrayList"
import { $Explosion$BlockInteraction } from "net.minecraft.world.level.Explosion$BlockInteraction"
import { $Difficulty } from "net.minecraft.world.Difficulty"
import { $BlockPos$MutableBlockPos$$Type } from "net.minecraft.core.BlockPos$MutableBlockPos"
import { $Component, $Component$$Type } from "net.minecraft.network.chat.Component"
import { $ElectricityTicker } from "com.mrcrayfish.furniture.refurbished.electricity.ElectricityTicker"
import { $LevelTickAccess } from "net.minecraft.world.ticks.LevelTickAccess"
import { $FireworksJS$$Type } from "dev.latvian.mods.kubejs.level.FireworksJS"
import { $ScriptType } from "dev.latvian.mods.kubejs.script.ScriptType"
import { $TickPriority$$Type } from "net.minecraft.world.ticks.TickPriority"
import { $LevelKJS } from "dev.latvian.mods.kubejs.core.LevelKJS"
import { $Codec } from "com.mojang.serialization.Codec"
import { $Int2ObjectMap } from "it.unimi.dsi.fastutil.ints.Int2ObjectMap"
import { $ChunkStatus$$Type } from "net.minecraft.world.level.chunk.ChunkStatus"
import { $ExplosionJS } from "dev.latvian.mods.kubejs.level.ExplosionJS"
import { $ResourceLocation } from "net.minecraft.resources.ResourceLocation"
import { $LivingEntity, $LivingEntity$$Type } from "net.minecraft.world.entity.LivingEntity"
import { $DamageSources } from "net.minecraft.world.damagesource.DamageSources"
import { $MapItemSavedData, $MapItemSavedData$$Type } from "net.minecraft.world.level.saveddata.maps.MapItemSavedData"
import { $Direction$$Type } from "net.minecraft.core.Direction"
import { $BiFunction$$Type } from "java.util.function.BiFunction"
import { $TrackedDataKey$$Type } from "dev.corgitaco.dataanchor.data.registry.TrackedDataKey"
import { $EntityTypeTest$$Type } from "net.minecraft.world.level.entity.EntityTypeTest"
import { $AutoCloseable } from "java.lang.AutoCloseable"
import { $CallbackInfoReturnable$$Type } from "org.spongepowered.asm.mixin.injection.callback.CallbackInfoReturnable"
import { $Registry } from "net.minecraft.core.Registry"
import { $ClipBlockStateContext$$Type } from "net.minecraft.world.level.ClipBlockStateContext"
import { $BlockContainerJS } from "dev.latvian.mods.kubejs.level.BlockContainerJS"
import { $BlockGetter } from "net.minecraft.world.level.BlockGetter"
import { $TargetingConditions$$Type } from "net.minecraft.world.entity.ai.targeting.TargetingConditions"
import { $GameEvent$Context$$Type } from "net.minecraft.world.level.gameevent.GameEvent$Context"
import { $DifficultyInstance } from "net.minecraft.world.DifficultyInstance"
import { $GameRules$Key$$Type } from "net.minecraft.world.level.GameRules$Key"
import { $BiomeManager } from "net.minecraft.world.level.biome.BiomeManager"
import { $LevelEntityGetter } from "net.minecraft.world.level.entity.LevelEntityGetter"
import { $InternalDirtyMarker } from "dev.corgitaco.dataanchor.data.InternalDirtyMarker"
import { $Predicate$$Type } from "java.util.function.Predicate"
import { $Collection, $Collection$$Type } from "java.util.Collection"
import { $BlockHitResult } from "net.minecraft.world.phys.BlockHitResult"
import { $GameRules } from "net.minecraft.world.level.GameRules"
import { $RandomSource } from "net.minecraft.util.RandomSource"
import { $UUID$$Type } from "java.util.UUID"
import { $Capability$$Type } from "net.minecraftforge.common.capabilities.Capability"
import { $ChunkAccess } from "net.minecraft.world.level.chunk.ChunkAccess"
import { $Player, $Player$$Type } from "net.minecraft.world.entity.player.Player"
import { $List, $List$$Type } from "java.util.List"
import { $CompoundTag$$Type } from "net.minecraft.nbt.CompoundTag"
import { $LevelLightEngine } from "net.minecraft.world.level.lighting.LevelLightEngine"
import { $BlockPos, $BlockPos$$Type } from "net.minecraft.core.BlockPos"
import { $BlockEntityType$$Type } from "net.minecraft.world.level.block.entity.BlockEntityType"
import { $RecipeManager } from "net.minecraft.world.item.crafting.RecipeManager"
import { $SoundEvent$$Type } from "net.minecraft.sounds.SoundEvent"
import { $Optional } from "java.util.Optional"
import { $LevelAccessor as $LevelAccessor$1 } from "net.minecraft.world.level.LevelAccessor"
import { $GameRules$BooleanValue$$Type } from "net.minecraft.world.level.GameRules$BooleanValue"
import { $ElectricityTicker$Access } from "com.mrcrayfish.furniture.refurbished.electricity.ElectricityTicker$Access"
import { $Tickable$Level } from "me.kall.doespotatotick.ext.Tickable$Level"
import { $GameEvent$$Type } from "net.minecraft.world.level.gameevent.GameEvent"
import { $DimensionType } from "net.minecraft.world.level.dimension.DimensionType"
import { $TickingBlockEntity, $TickingBlockEntity$$Type } from "net.minecraft.world.level.block.entity.TickingBlockEntity"
import { $Function$$Type } from "java.util.function.Function"
import { $Trackable } from "dev.uncandango.alltheleaks.mixin.Trackable"
import { $Iterable } from "java.lang.Iterable"
import { $ColorResolver$$Type } from "net.minecraft.world.level.ColorResolver"
import { $ClipContext$$Type } from "net.minecraft.world.level.ClipContext"
import { $WorldBorder } from "net.minecraft.world.level.border.WorldBorder"
import { $DamageSource$$Type } from "net.minecraft.world.damagesource.DamageSource"
import { $Fluid, $Fluid$$Type } from "net.minecraft.world.level.material.Fluid"
import { $CapabilityProvider } from "net.minecraftforge.common.capabilities.CapabilityProvider"
import { $WeakReference } from "java.lang.ref.WeakReference"
import { $AttachedData } from "dev.latvian.mods.kubejs.util.AttachedData"
import { $BlockSnapshot, $BlockSnapshot$$Type } from "net.minecraftforge.common.util.BlockSnapshot"
import { $PartEntity } from "net.minecraftforge.entity.PartEntity"
import { $HolderLookup } from "net.minecraft.core.HolderLookup"
import { $ModelDataManager } from "net.minecraftforge.client.model.data.ModelDataManager"
import { $ResourceKey, $ResourceKey$$Type } from "net.minecraft.resources.ResourceKey"
import { $Explosion } from "net.minecraft.world.level.Explosion"
import { $Consumer$$Type } from "java.util.function.Consumer"
import { $Scoreboard } from "net.minecraft.world.scores.Scoreboard"
import { $EntityArrayList } from "dev.latvian.mods.kubejs.player.EntityArrayList"
import { $Entity, $Entity$$Type } from "net.minecraft.world.entity.Entity"
import { $TrackedDataContainer } from "dev.corgitaco.dataanchor.data.TrackedDataContainer"
import { $Vec3, $Vec3$$Type } from "net.minecraft.world.phys.Vec3"
import { $Class, $Class$$Type } from "java.lang.Class"
import { $Block, $Block$$Type } from "net.minecraft.world.level.block.Block"
import { $LevelAccessor as $LevelAccessor$2 } from "com.aetherteam.aether.mixin.mixins.common.accessor.LevelAccessor"

export class $Level extends $CapabilityProvider<$Level> implements $LevelAccessor$1, $AutoCloseable, $IForgeLevel, $LevelAccessor, $Trackable, $LevelExtension, $ChunkRandomSource, $BlockEntityGetter, $LevelHeightAccessor, $LevelAccessor$0, $MultipartPartsHolder, $LevelAccessor$2, $ElectricityTicker$Access, $TrackedDataContainer, $InternalDirtyMarker, $LevelKJS, $LevelMixinAccessor, $Tickable$Level {
static readonly "END": $ResourceKey<$Level>
static readonly "LONG_PARTICLE_CLIP_RANGE": integer
static readonly "MAX_BRIGHTNESS": integer
static readonly "MAX_ENTITY_SPAWN_Y": integer
static readonly "MAX_LEVEL_SIZE": integer
static readonly "MIN_ENTITY_SPAWN_Y": integer
static readonly "NETHER": $ResourceKey<$Level>
static readonly "OVERWORLD": $ResourceKey<$Level>
static readonly "RESOURCE_KEY_CODEC": $Codec<$ResourceKey<$Level>>
static readonly "SHORT_PARTICLE_CLIP_RANGE": integer
static readonly "TICKS_PER_DAY": integer
readonly "blockEntityTickers": $List<$TickingBlockEntity>
readonly "isClientSide": boolean
readonly "random": $RandomSource
/** @deprecated */
readonly "threadSafeRandom": $RandomSource

public "adastra$getParts"(): $Int2ObjectMap
public "addAlwaysVisibleParticle"(particleOptions0: $ParticleOptions$$Type, double1: double, double2: double, double3: double, double4: double, double5: double, double6: double): void
public "addAlwaysVisibleParticle"(particleOptions0: $ParticleOptions$$Type, boolean1: boolean, double2: double, double3: double, double4: double, double5: double, double6: double, double7: double): void
public "addBlockEntityTicker"(tickingBlockEntity0: $TickingBlockEntity$$Type): void
public "addDestroyBlockEffect"(blockPos0: $BlockPos$$Type, blockState1: $BlockState$$Type): void
public "addFreshBlockEntities"(collection0: $Collection$$Type<$BlockEntity$$Type>): void
public "addFreshEntity"(entity0: $Entity$$Type): boolean
public "addParticle"(particleOptions0: $ParticleOptions$$Type, double1: double, double2: double, double3: double, double4: double, double5: double, double6: double): void
public "addParticle"(particleOptions0: $ParticleOptions$$Type, boolean1: boolean, double2: double, double3: double, double4: double, double5: double, double6: double, double7: double): void
public "atl$getBaseClass"(): $Class
public "blockEntityChanged"(blockPos0: $BlockPos$$Type): void
public "blockEvent"(blockPos0: $BlockPos$$Type, block1: $Block$$Type, int2: integer, int3: integer): void
public "blockUpdated"(blockPos0: $BlockPos$$Type, block1: $Block$$Type): void
public "broadcastDamageEvent"(entity0: $Entity$$Type, damageSource1: $DamageSource$$Type): void
public "broadcastEntityEvent"(entity0: $Entity$$Type, byte1: byte): void
public "canSeeSky"(blockPos0: $BlockPos$$Type): boolean
public "canSeeSkyFromBelowWater"(blockPos0: $BlockPos$$Type): boolean
public static "clearNullReferences"(): void
public "clip"(clipContext0: $ClipContext$$Type): $BlockHitResult
public "clipWithInteractionOverride"(vec30: $Vec3$$Type, vec31: $Vec3$$Type, blockPos2: $BlockPos$$Type, voxelShape3: $VoxelShape$$Type, blockState4: $BlockState$$Type): $BlockHitResult
public "close"(): void
public "collidesWithSuffocatingBlock"(entity0: $Entity$$Type, aABB1: $AABB$$Type): boolean
public "containsAnyLiquid"(aABB0: $AABB$$Type): boolean
public static "create"(int0: integer, int1: integer): $LevelHeightAccessor
public "createEntity"(type: $EntityType$$Type<any>): $Entity
public "createEntityList"(entities: $Collection$$Type<$Entity$$Type>): $EntityArrayList
public "createExplosion"(x: double, y: double, z: double): $ExplosionJS
public "createFireworks"(double0: double, double1: double, double2: double, double3: double, double4: double, double5: double, compoundTag6: $CompoundTag$$Type): void
public static "createWeakRefBasedSet"(): $ObjectOpenCustomHashSet<$WeakReference<$Trackable>>
public "damageSources"(): $DamageSources
public "dataAnchor$clearDirty"(): void
public "dataAnchor$createTrackedData"(): void
public "dataAnchor$getTrackedData"(key: $TrackedDataKey$$Type): $Optional
public "dataAnchor$getTrackedDataKeys"(): $Collection
public "dataAnchor$markDirty"(): void
public "dayTime"(): long
public "destroyBlock"(blockPos0: $BlockPos$$Type, boolean1: boolean, entity2: $Entity$$Type, int3: integer): boolean
public "destroyBlock"(blockPos0: $BlockPos$$Type, boolean1: boolean): boolean
public "destroyBlock"(blockPos0: $BlockPos$$Type, boolean1: boolean, entity2: $Entity$$Type): boolean
public "destroyBlockProgress"(int0: integer, blockPos1: $BlockPos$$Type, int2: integer): void
public "dimensionType"(): $DimensionType
public "dimensionTypeId"(): $ResourceKey<$DimensionType>
public "dimensionTypeRegistration"(): $Holder<$DimensionType>
public "disconnect"(): void
public "dpt$hasRaids"(): boolean
public "dpt$setValid"(valid: boolean): void
public "dpt$valid"(): boolean
public "enabledFeatures"(): $FeatureFlagSet
public "explode"(entity0: $Entity$$Type, double1: double, double2: double, double3: double, float4: float, explosionInteraction5: $Level$ExplosionInteraction$$Type): $Explosion
public "explode"(entity0: $Entity$$Type, damageSource1: $DamageSource$$Type, explosionDamageCalculator2: $ExplosionDamageCalculator$$Type, double3: double, double4: double, double5: double, float6: float, boolean7: boolean, explosionInteraction8: $Level$ExplosionInteraction$$Type): $Explosion
public "explode"(entity0: $Entity$$Type, double1: double, double2: double, double3: double, float4: float, boolean5: boolean, explosionInteraction6: $Level$ExplosionInteraction$$Type): $Explosion
public "explode"(entity0: $Entity$$Type, damageSource1: $DamageSource$$Type, explosionDamageCalculator2: $ExplosionDamageCalculator$$Type, vec33: $Vec3$$Type, float4: float, boolean5: boolean, explosionInteraction6: $Level$ExplosionInteraction$$Type): $Explosion
public "explode"(entity0: $Entity$$Type, damageSource1: $DamageSource$$Type, explosionDamageCalculator2: $ExplosionDamageCalculator$$Type, double3: double, double4: double, double5: double, float6: float, boolean7: boolean, explosionInteraction8: $Level$ExplosionInteraction$$Type, boolean9: boolean): $Explosion
public "fillReportDetails"(crashReport0: $CrashReport$$Type): $CrashReportCategory
public "findFreePosition"(entity0: $Entity$$Type, voxelShape1: $VoxelShape$$Type, vec32: $Vec3$$Type, double3: double, double4: double, double5: double): $Optional<$Vec3>
public "findSupportingBlock"(entity0: $Entity$$Type, aABB1: $AABB$$Type): $Optional<$BlockPos>
public "flywheel$getAllLoadedEntities"(): $Iterable
public "gameEvent"(gameEvent0: $GameEvent$$Type, vec31: $Vec3$$Type, context2: $GameEvent$Context$$Type): void
public "gameEvent"(gameEvent0: $GameEvent$$Type, blockPos1: $BlockPos$$Type, context2: $GameEvent$Context$$Type): void
public "gameEvent"(entity0: $Entity$$Type, gameEvent1: $GameEvent$$Type, blockPos2: $BlockPos$$Type): void
public "gameEvent"(entity0: $Entity$$Type, gameEvent1: $GameEvent$$Type, vec32: $Vec3$$Type): void
public "gatherChunkSourceStats"(): string
public static "getAllLoadedEntities"(level: $Level$$Type): $Iterable<$Entity>
public "getBestNeighborSignal"(blockPos0: $BlockPos$$Type): integer
public "getBiome"(blockPos0: $BlockPos$$Type): $Holder<$Biome>
public "getBiomeManager"(): $BiomeManager
public "getBlock"(x: integer, y: integer, z: integer): $BlockContainerJS
public "getBlock"(blockEntity: $BlockEntity$$Type): $BlockContainerJS
public "getBlock"(pos: $BlockPos$$Type): $BlockContainerJS
public "getBlockCollisions"(entity0: $Entity$$Type, aABB1: $AABB$$Type): $Iterable<$VoxelShape>
public "getBlockEntity"(blockPos0: $BlockPos$$Type): $BlockEntity
public "getBlockEntity"<T extends $BlockEntity>(blockPos0: $BlockPos$$Type, blockEntityType1: $BlockEntityType$$Type<T>): $Optional<T>
public "getBlockFloorHeight"(voxelShape0: $VoxelShape$$Type, supplier1: $Supplier$$Type<$VoxelShape>): double
public "getBlockFloorHeight"(blockPos0: $BlockPos$$Type): double
public "getBlockRandomPos"(int0: integer, int1: integer, int2: integer, int3: integer): $BlockPos
public "getBlockState"(blockPos0: $BlockPos$$Type): $BlockState
public "getBlockStates"(aABB0: $AABB$$Type): $Stream<$BlockState>
public "getBlockStatesIfLoaded"(aABB0: $AABB$$Type): $Stream<$BlockState>
public "getBlockTicks"(): $LevelTickAccess<$Block>
public "getBlockTint"(blockPos0: $BlockPos$$Type, colorResolver1: $ColorResolver$$Type): integer
public "getBrightness"(lightLayer0: $LightLayer$$Type, blockPos1: $BlockPos$$Type): integer
public "getCapability"<T>(capability0: $Capability$$Type<T>): $LazyOptional<T>
public "getChunk"(int0: integer, int1: integer, chunkStatus2: $ChunkStatus$$Type, boolean3: boolean): $ChunkAccess
public "getChunk"(blockPos0: $BlockPos$$Type): $ChunkAccess
public "getChunk"(int0: integer, int1: integer, chunkStatus2: $ChunkStatus$$Type): $ChunkAccess
public "getChunkAt"(blockPos0: $BlockPos$$Type): $LevelChunk
public "getChunkForCollisions"(int0: integer, int1: integer): $BlockGetter
public "getChunkSource"(): $ChunkSource
public "getCollisions"(entity0: $Entity$$Type, aABB1: $AABB$$Type): $Iterable<$VoxelShape>
public "getControlInputSignal"(blockPos0: $BlockPos$$Type, direction1: $Direction$$Type, boolean2: boolean): integer
public "getCurrentDifficultyAt"(blockPos0: $BlockPos$$Type): $DifficultyInstance
public "getData"(): $AttachedData
public "getDayTime"(): long
public "getDestroyType"(key0: $GameRules$Key$$Type<$GameRules$BooleanValue$$Type>): $Explosion$BlockInteraction
public "getDifficulty"(): $Difficulty
public "getDimension"(): $ResourceLocation
public "getDimensionKey"(): $ResourceKey<$Level>
public "getDirectSignal"(blockPos0: $BlockPos$$Type, direction1: $Direction$$Type): integer
public "getDirectSignalTo"(blockPos0: $BlockPos$$Type): integer
public "getDisplayName"(): $Component
public "getEntities"<T extends $Entity>(entityTypeTest0: $EntityTypeTest$$Type<$Entity$$Type, T>, aABB1: $AABB$$Type, predicate2: $Predicate$$Type<T>): $List<T>
public "getEntities"(entity0: $Entity$$Type, aABB1: $AABB$$Type, predicate2: $Predicate$$Type<$Entity$$Type>): $List<$Entity>
public "getEntities"(): $LevelEntityGetter<$Entity>
public "getEntities"<T extends $Entity>(entityTypeTest0: $EntityTypeTest$$Type<$Entity$$Type, T>, aABB1: $AABB$$Type, predicate2: $Predicate$$Type<T>, list3: $List$$Type<T>): void
public "getEntities"<T extends $Entity>(entityTypeTest0: $EntityTypeTest$$Type<$Entity$$Type, T>, aABB1: $AABB$$Type, predicate2: $Predicate$$Type<T>, list3: $List$$Type<T>, int4: integer): void
public "getEntities"(): $EntityArrayList
public "getEntities"(entity0: $Entity$$Type, aABB1: $AABB$$Type): $List<$Entity>
public "getEntitiesOfClass"<T extends $Entity>(class0: $Class$$Type<T>, aABB1: $AABB$$Type): $List<T>
public "getEntitiesOfClass"<T extends $Entity>(class0: $Class$$Type<T>, aABB1: $AABB$$Type, predicate2: $Predicate$$Type<T>): $List<T>
public "getEntitiesWithin"(aabb: $AABB$$Type): $EntityArrayList
public "getEntity"(int0: integer): $Entity
public "getEntityCollisions"(entity0: $Entity$$Type, aABB1: $AABB$$Type): $List<$VoxelShape>
public "getExistingBlockEntity"(blockPos0: $BlockPos$$Type): $BlockEntity
public "getFluidState"(blockPos0: $BlockPos$$Type): $FluidState
public "getFluidTicks"(): $LevelTickAccess<$Fluid>
public "getFreeMapId"(): integer
public "getGameRules"(): $GameRules
public "getHeight"(types0: $Heightmap$Types$$Type, int1: integer, int2: integer): integer
public "getHeight"(): integer
public "getHeightmapPos"(types0: $Heightmap$Types$$Type, blockPos1: $BlockPos$$Type): $BlockPos
public "getLevelData"(): $LevelData
public "getLightEmission"(blockPos0: $BlockPos$$Type): integer
public "getLightEngine"(): $LevelLightEngine
/** @deprecated */
public "getLightLevelDependentMagicValue"(blockPos0: $BlockPos$$Type): float
public "getLoadedChunk"(int0: integer, int1: integer): $ChunkAccess
public "getLoadedExistingBlockEntity"(blockPos0: $BlockPos$$Type): $BlockEntity
public "getMapData"(string0: string): $MapItemSavedData
public "getMaxBuildHeight"(): integer
public "getMaxEntityRadius"(): double
public "getMaxLightLevel"(): integer
public "getMaxLocalRawBrightness"(blockPos0: $BlockPos$$Type): integer
public "getMaxLocalRawBrightness"(blockPos0: $BlockPos$$Type, int1: integer): integer
public "getMaxSection"(): integer
public "getMinBuildHeight"(): integer
public "getMinSection"(): integer
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
public "getProfiler"(): $ProfilerFiller
public "getProfilerSupplier"(): $Supplier<$ProfilerFiller>
public "getRainLevel"(float0: float): float
public "getRandom"(): $RandomSource
public "getRandomPosInChunk"(int0: integer, int1: integer, int2: integer, int3: integer, mutableBlockPos4: $BlockPos$MutableBlockPos$$Type): void
public "getRawBrightness"(blockPos0: $BlockPos$$Type, int1: integer): integer
public "getRecipeManager"(): $RecipeManager
public "getScoreboard"(): $Scoreboard
public "getSeaLevel"(): integer
public "getSectionIndex"(int0: integer): integer
public "getSectionIndexFromSectionY"(int0: integer): integer
public "getSectionYFromSectionIndex"(int0: integer): integer
public "getSectionsCount"(): integer
public "getServer"(): $MinecraftServer
public "getShade"(direction0: $Direction$$Type, boolean1: boolean): float
public "getShade"(float0: float, float1: float, float2: float, boolean3: boolean): float
public "getSharedSpawnAngle"(): float
public "getSharedSpawnPos"(): $BlockPos
public "getSide"(): $ScriptType
public "getSignal"(blockPos0: $BlockPos$$Type, direction1: $Direction$$Type): integer
public "getSkyDarken"(): integer
public static "getSummary"(): $Map<$Class<any>, $Map<$Class<any>, long>>
public "getSunAngle"(float0: float): float
public "getThunderLevel"(float0: float): float
public "getTime"(): long
public "getTimeOfDay"(float0: float): float
public "getUncachedNoiseBiome"(int0: integer, int1: integer, int2: integer): $Holder<$Biome>
public "getWorldBorder"(): $WorldBorder
public "globalLevelEvent"(int0: integer, blockPos1: $BlockPos$$Type, int2: integer): void
public "guardEntityTick"<T extends $Entity>(consumer0: $Consumer$$Type<T>, t1: T): void
public "handler$blm000$immersiveOptimization$shouldTickBlocksAt"(long0: long, callbackInfoReturnable1: $CallbackInfoReturnable$$Type): void
public "handler$efk000$onIsRainingAt"(blockPos0: $BlockPos$$Type, callbackInfoReturnable1: $CallbackInfoReturnable$$Type): void
public "handler$fdl000$simpleclouds$localizedWeather_isRainingAt"(blockPos0: $BlockPos$$Type, callbackInfoReturnable1: $CallbackInfoReturnable$$Type): void
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
public "increaseMaxEntityRadius"(double0: double): double
public "isAreaLoaded"(blockPos0: $BlockPos$$Type, int1: integer): boolean
public "isBlockInLine"(clipBlockStateContext0: $ClipBlockStateContext$$Type): $BlockHitResult
public "isClientSide"(): boolean
public "isDay"(): boolean
public "isDebug"(): boolean
public "isEmptyBlock"(blockPos0: $BlockPos$$Type): boolean
public "isFluidAtPosition"(blockPos0: $BlockPos$$Type, predicate1: $Predicate$$Type<$FluidState$$Type>): boolean
public static "isInSpawnableBounds"(blockPos0: $BlockPos$$Type): boolean
public "isInWorldBounds"(blockPos0: $BlockPos$$Type): boolean
public "isLoaded"(blockPos0: $BlockPos$$Type): boolean
public "isNight"(): boolean
public "isOutsideBuildHeight"(blockPos0: $BlockPos$$Type): boolean
public "isOutsideBuildHeight"(int0: integer): boolean
public "isOverworld"(): boolean
public "isRaining"(): boolean
public "isRainingAt"(blockPos0: $BlockPos$$Type): boolean
public "isStateAtPosition"(blockPos0: $BlockPos$$Type, predicate1: $Predicate$$Type<$BlockState$$Type>): boolean
public "isThundering"(): boolean
public "isUnobstructed"(entity0: $Entity$$Type, voxelShape1: $VoxelShape$$Type): boolean
public "isUnobstructed"(blockState0: $BlockState$$Type, blockPos1: $BlockPos$$Type, collisionContext2: $CollisionContext$$Type): boolean
public "isUnobstructed"(entity0: $Entity$$Type): boolean
public "isWaterAt"(blockPos0: $BlockPos$$Type): boolean
public "levelEvent"(int0: integer, blockPos1: $BlockPos$$Type, int2: integer): void
public "levelEvent"(player0: $Player$$Type, int1: integer, blockPos2: $BlockPos$$Type, int3: integer): void
public "loadedAndEntityCanStandOn"(blockPos0: $BlockPos$$Type, entity1: $Entity$$Type): boolean
public "loadedAndEntityCanStandOnFace"(blockPos0: $BlockPos$$Type, entity1: $Entity$$Type, direction2: $Direction$$Type): boolean
public static "makeBasicContainer"<O, T extends $TrackedData<O>>(registry: $TrackedDataRegistry$$Type<O, T>, o: O, isClient: boolean): $TrackedDataContainer<O, T>
public static "makeBasicContainer"<O, T extends $TrackedData<O>>(registry: $TrackedDataRegistry$$Type<O, T>, o: O, isClient: boolean, lazyLoad: boolean): $TrackedDataContainer<O, T>
public "markAndNotifyBlock"(blockPos0: $BlockPos$$Type, levelChunk1: $LevelChunk$$Type, blockState2: $BlockState$$Type, blockState3: $BlockState$$Type, int4: integer, int5: integer): void
public "mayInteract"(player0: $Player$$Type, blockPos1: $BlockPos$$Type): boolean
public "neighborChanged"(blockPos0: $BlockPos$$Type, block1: $Block$$Type, blockPos2: $BlockPos$$Type): void
public "neighborChanged"(blockState0: $BlockState$$Type, blockPos1: $BlockPos$$Type, block2: $Block$$Type, blockPos3: $BlockPos$$Type, boolean4: boolean): void
public "neighborShapeChanged"(direction0: $Direction$$Type, blockState1: $BlockState$$Type, blockPos2: $BlockPos$$Type, blockPos3: $BlockPos$$Type, int4: integer, int5: integer): void
public "nextSubTickCount"(): long
public "noCollision"(entity0: $Entity$$Type, aABB1: $AABB$$Type): boolean
public "noCollision"(entity0: $Entity$$Type): boolean
public "noCollision"(aABB0: $AABB$$Type): boolean
public "noSave"(): boolean
public "onBlockStateChange"(blockPos0: $BlockPos$$Type, blockState1: $BlockState$$Type, blockState2: $BlockState$$Type): void
public "playLocalSound"(double0: double, double1: double, double2: double, soundEvent3: $SoundEvent$$Type, soundSource4: $SoundSource$$Type, float5: float, float6: float, boolean7: boolean): void
public "playLocalSound"(blockPos0: $BlockPos$$Type, soundEvent1: $SoundEvent$$Type, soundSource2: $SoundSource$$Type, float3: float, float4: float, boolean5: boolean): void
public "playSeededSound"(player0: $Player$$Type, double1: double, double2: double, double3: double, holder4: $Holder$$Type<$SoundEvent$$Type>, soundSource5: $SoundSource$$Type, float6: float, float7: float, long8: long): void
public "playSeededSound"(player0: $Player$$Type, double1: double, double2: double, double3: double, soundEvent4: $SoundEvent$$Type, soundSource5: $SoundSource$$Type, float6: float, float7: float, long8: long): void
public "playSeededSound"(player0: $Player$$Type, entity1: $Entity$$Type, holder2: $Holder$$Type<$SoundEvent$$Type>, soundSource3: $SoundSource$$Type, float4: float, float5: float, long6: long): void
public "playSound"(player0: $Player$$Type, double1: double, double2: double, double3: double, soundEvent4: $SoundEvent$$Type, soundSource5: $SoundSource$$Type, float6: float, float7: float): void
public "playSound"(player0: $Player$$Type, entity1: $Entity$$Type, soundEvent2: $SoundEvent$$Type, soundSource3: $SoundSource$$Type, float4: float, float5: float): void
public "playSound"(entity0: $Entity$$Type, blockPos1: $BlockPos$$Type, soundEvent2: $SoundEvent$$Type, soundSource3: $SoundSource$$Type, float4: float, float5: float): void
public "playSound"(player0: $Player$$Type, blockPos1: $BlockPos$$Type, soundEvent2: $SoundEvent$$Type, soundSource3: $SoundSource$$Type, float4: float, float5: float): void
public "playSound"(player0: $Player$$Type, blockPos1: $BlockPos$$Type, soundEvent2: $SoundEvent$$Type, soundSource3: $SoundSource$$Type): void
public "players"(): $List<$Player>
public "refurbishedFurniture$GetElectricityTicker"(): $ElectricityTicker
public "registryAccess"(): $RegistryAccess
public "removeBlock"(blockPos0: $BlockPos$$Type, boolean1: boolean): boolean
public "removeBlockEntity"(blockPos0: $BlockPos$$Type): void
public "runCommand"(command: string): integer
public "runCommandSilent"(command: string): integer
public "scheduleTick"(blockPos0: $BlockPos$$Type, block1: $Block$$Type, int2: integer, tickPriority3: $TickPriority$$Type): void
public "scheduleTick"(blockPos0: $BlockPos$$Type, block1: $Block$$Type, int2: integer): void
public "scheduleTick"(blockPos0: $BlockPos$$Type, fluid1: $Fluid$$Type, int2: integer, tickPriority3: $TickPriority$$Type): void
public "scheduleTick"(blockPos0: $BlockPos$$Type, fluid1: $Fluid$$Type, int2: integer): void
public "self"(): $Level
public "sendBlockUpdated"(blockPos0: $BlockPos$$Type, blockState1: $BlockState$$Type, blockState2: $BlockState$$Type, int3: integer): void
public "sendPacketToServer"(packet0: $Packet$$Type<any>): void
public "setBlock"(blockPos0: $BlockPos$$Type, blockState1: $BlockState$$Type, int2: integer): boolean
public "setBlock"(blockPos0: $BlockPos$$Type, blockState1: $BlockState$$Type, int2: integer, int3: integer): boolean
public "setBlockAndUpdate"(blockPos0: $BlockPos$$Type, blockState1: $BlockState$$Type): boolean
public "setBlockEntity"(blockEntity0: $BlockEntity$$Type): void
public "setBlocksDirty"(blockPos0: $BlockPos$$Type, blockState1: $BlockState$$Type, blockState2: $BlockState$$Type): void
public "setMapData"(string0: string, mapItemSavedData1: $MapItemSavedData$$Type): void
public "setRainLevel"(float0: float): void
public "setSkyFlashTime"(int0: integer): void
public "setSpawnSettings"(boolean0: boolean, boolean1: boolean): void
public "setStatusMessage"(message: $Component$$Type): void
public "setThunderLevel"(float0: float): void
public "shouldTickBlocksAt"(long0: long): boolean
public "shouldTickBlocksAt"(blockPos0: $BlockPos$$Type): boolean
public "shouldTickDeath"(entity0: $Entity$$Type): boolean
public "spawnFireworks"(x: double, y: double, z: double, f: $FireworksJS$$Type): void
public "spawnParticles"(options: $ParticleOptions$$Type, overrideLimiter: boolean, x: double, y: double, z: double, vx: double, vy: double, vz: double, count: integer, speed: double): void
public static "startTracking"(object0: any): void
public "startTracking"(): void
public "tell"(message: $Component$$Type): void
public static "traverseBlocks"<T, C>(vec30: $Vec3$$Type, vec31: $Vec3$$Type, c2: C, biFunction3: $BiFunction$$Type<C, $BlockPos$$Type, T>, function4: $Function$$Type<C, T>): T
public "updateNeighborsAt"(blockPos0: $BlockPos$$Type, block1: $Block$$Type): void
public "updateNeighborsAtExceptFromFacing"(blockPos0: $BlockPos$$Type, block1: $Block$$Type, direction2: $Direction$$Type): void
public "updateNeighbourForOutputSignal"(blockPos0: $BlockPos$$Type, block1: $Block$$Type): void
public "updateSkyBrightness"(): void
public "woot$setDimension"(resourceKey0: $ResourceKey$$Type, resourceKey1: $ResourceKey$$Type, holder2: $Holder$$Type): void
public "wrap"(): $WeakReference<$Trackable>
get "captureBlockSnapshots"(): boolean
set "captureBlockSnapshots"(value: boolean)
get "capturedBlockSnapshots"(): $ArrayList<$BlockSnapshot>
set "capturedBlockSnapshots"(value: $ArrayList$$Type<$BlockSnapshot$$Type>)
get "oRainLevel"(): float
set "oRainLevel"(value: float)
get "oThunderLevel"(): float
set "oThunderLevel"(value: float)
get "rainLevel"(): float
set "rainLevel"(value: float)
get "restoringBlockSnapshots"(): boolean
set "restoringBlockSnapshots"(value: boolean)
get "thunderLevel"(): float
set "thunderLevel"(value: float)
get "biomeManager"(): $BiomeManager
get "blockTicks"(): $LevelTickAccess<$Block>
get "chunkSource"(): $ChunkSource
get "data"(): $AttachedData
get "difficulty"(): $Difficulty
get "dimension"(): $ResourceLocation
get "dimensionKey"(): $ResourceKey<$Level>
get "displayName"(): $Component
get "entities"(): $LevelEntityGetter<$Entity>
get "entities"(): $EntityArrayList
get "fluidTicks"(): $LevelTickAccess<$Fluid>
get "freeMapId"(): integer
get "gameRules"(): $GameRules
get "height"(): integer
get "levelData"(): $LevelData
get "lightEngine"(): $LevelLightEngine
get "maxBuildHeight"(): integer
get "maxEntityRadius"(): double
get "maxLightLevel"(): integer
get "maxSection"(): integer
get "minBuildHeight"(): integer
get "minSection"(): integer
get "modelDataManager"(): $ModelDataManager
get "moonBrightness"(): float
get "moonPhase"(): integer
get "name"(): $Component
get "partEntities"(): $Collection<$PartEntity<any>>
get "profiler"(): $ProfilerFiller
get "profilerSupplier"(): $Supplier<$ProfilerFiller>
get "recipeManager"(): $RecipeManager
get "scoreboard"(): $Scoreboard
get "seaLevel"(): integer
get "sectionsCount"(): integer
get "server"(): $MinecraftServer
get "sharedSpawnAngle"(): float
get "sharedSpawnPos"(): $BlockPos
get "side"(): $ScriptType
get "skyDarken"(): integer
get "time"(): long
get "worldBorder"(): $WorldBorder
get "clientSide"(): boolean
get "day"(): boolean
get "debug"(): boolean
get "night"(): boolean
get "overworld"(): boolean
get "raining"(): boolean
get "thundering"(): boolean
set "blockEntity"(value: $BlockEntity$$Type)
set "skyFlashTime"(value: integer)
set "statusMessage"(value: $Component$$Type)
/** This field is a type stub generated by ProbeJS and shall not be used in any sense. */
"probejsInternal$$Literal": Special.Dimension
/** This field is a type stub generated by ProbeJS and shall not be used in any sense. */
"probejsInternal$$Tag": Special.DimensionTag
}
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $Level$$Type = ($Level | Special.Dimension);
}

declare module "net.minecraft.world.level.NoiseColumn" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $NoiseColumn$$Type = ($NoiseColumn);
}

declare module "net.minecraft.world.level.LevelHeightAccessor" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $LevelHeightAccessor$$Type = ($LevelHeightAccessor);
}

declare module "net.minecraft.world.level.LevelTimeAccess" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $LevelTimeAccess$$Type = ($LevelTimeAccess);
}

declare module "net.minecraft.world.level.ItemLike" {
import { $Item$$Type } from "net.minecraft.world.item.Item"

/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $ItemLike$$Type = ($ItemLike | (() => $Item$$Type));
}

declare module "net.minecraft.world.level.ClipContext$ShapeGetter" {
import { $CollisionContext } from "net.minecraft.world.phys.shapes.CollisionContext"
import { $BlockGetter } from "net.minecraft.world.level.BlockGetter"
import { $BlockPos } from "net.minecraft.core.BlockPos"
import { $BlockState } from "net.minecraft.world.level.block.state.BlockState"
import { $VoxelShape$$Type } from "net.minecraft.world.phys.shapes.VoxelShape"

/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $ClipContext$ShapeGetter$$Type = ($ClipContext$ShapeGetter | ((arg0: $BlockState, arg1: $BlockGetter, arg2: $BlockPos, arg3: $CollisionContext) => $VoxelShape$$Type));
}

declare module "net.minecraft.world.level.ClipContext$Block" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $ClipContext$Block$$Type = ($ClipContext$Block | ("collider" | "outline" | "visual" | "falldamage_resetting"));
}

declare module "net.minecraft.world.level.LevelWriter" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $LevelWriter$$Type = ($LevelWriter);
}

declare module "net.minecraft.world.level.Explosion" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $Explosion$$Type = ($Explosion);
}

declare module "net.minecraft.world.level.CollisionGetter" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $CollisionGetter$$Type = ($CollisionGetter);
}

declare module "net.minecraft.world.level.LevelAccessor" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $LevelAccessor$$Type = ($LevelAccessor);
}

declare module "net.minecraft.world.level.GameRules$BooleanValue" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $GameRules$BooleanValue$$Type = ($GameRules$BooleanValue);
}

declare module "net.minecraft.world.level.SpawnData$CustomSpawnRules" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $SpawnData$CustomSpawnRules$$Type = ($SpawnData$CustomSpawnRules);
}

declare module "net.minecraft.world.level.DataPackConfig" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $DataPackConfig$$Type = ($DataPackConfig);
}

declare module "net.minecraft.world.level.EntityGetter" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $EntityGetter$$Type = ($EntityGetter);
}

declare module "net.minecraft.world.level.LightLayer" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $LightLayer$$Type = ($LightLayer | ("sky" | "block"));
}

declare module "net.minecraft.world.level.SignalGetter" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $SignalGetter$$Type = ($SignalGetter);
}

declare module "net.minecraft.world.level.ClipContext" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $ClipContext$$Type = ($ClipContext);
}

declare module "net.minecraft.world.level.LevelSimulatedReader" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $LevelSimulatedReader$$Type = ($LevelSimulatedReader);
}

declare module "net.minecraft.world.level.LevelSimulatedRW" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $LevelSimulatedRW$$Type = ($LevelSimulatedRW);
}

declare module "net.minecraft.world.level.GameType" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $GameType$$Type = ($GameType | ("survival" | "creative" | "adventure" | "spectator"));
}

declare module "net.minecraft.world.level.ClipBlockStateContext" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $ClipBlockStateContext$$Type = ($ClipBlockStateContext);
}

declare module "net.minecraft.world.level.ColorResolver" {
import { $Biome } from "net.minecraft.world.level.biome.Biome"

/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $ColorResolver$$Type = ($ColorResolver | ((arg0: $Biome, arg1: double, arg2: double) => integer));
}

declare module "net.minecraft.world.level.ExplosionDamageCalculator" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $ExplosionDamageCalculator$$Type = ($ExplosionDamageCalculator);
}

declare module "net.minecraft.world.level.GameRules$Key" {
import { $GameRules$Value, $GameRules$Value$$Type } from "net.minecraft.world.level.GameRules$Value"

/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $GameRules$Key$$Type<T extends $GameRules$Value<T> = $GameRules$Value<T>> = ($GameRules$Key<T>);
}

declare module "net.minecraft.world.level.LevelSettings" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $LevelSettings$$Type = ($LevelSettings);
}

declare module "net.minecraft.world.level.ChunkPos" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $ChunkPos$$Type = ($ChunkPos);
}

declare module "net.minecraft.world.level.StructureManager" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $StructureManager$$Type = ($StructureManager);
}

declare module "net.minecraft.world.level.PathNavigationRegion" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $PathNavigationRegion$$Type = ($PathNavigationRegion);
}

declare module "net.minecraft.world.level.GameRules$Value" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $GameRules$Value$$Type<T extends $GameRules$Value<T> = $GameRules$Value<T>> = ($GameRules$Value<T>);
}

declare module "net.minecraft.world.level.GameRules$IntegerValue" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $GameRules$IntegerValue$$Type = ($GameRules$IntegerValue);
}

declare module "net.minecraft.world.level.Explosion$BlockInteraction" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $Explosion$BlockInteraction$$Type = ($Explosion$BlockInteraction | ("keep" | "destroy" | "destroy_with_decay"));
}

declare module "net.minecraft.world.level.CommonLevelAccessor" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $CommonLevelAccessor$$Type = ($CommonLevelAccessor);
}

declare module "net.minecraft.world.level.CustomSpawner" {
import { $ServerLevel } from "net.minecraft.server.level.ServerLevel"

/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $CustomSpawner$$Type = ($CustomSpawner | ((arg0: $ServerLevel, arg1: boolean, arg2: boolean) => integer));
}

declare module "net.minecraft.world.level.WorldDataConfiguration" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $WorldDataConfiguration$$Type = ($WorldDataConfiguration);
}

declare module "net.minecraft.world.level.BlockGetter" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $BlockGetter$$Type = ($BlockGetter);
}

declare module "net.minecraft.world.level.GameRules$GameRuleTypeVisitor" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $GameRules$GameRuleTypeVisitor$$Type = ($GameRules$GameRuleTypeVisitor);
}

declare module "net.minecraft.world.level.LevelReader" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $LevelReader$$Type = ($LevelReader);
}

