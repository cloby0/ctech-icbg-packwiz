declare module "net.minecraft.world.level.entity.LevelEntityGetter" {
import { $Consumer$$Type } from "java.util.function.Consumer"
import { $EntityAccess } from "net.minecraft.world.level.entity.EntityAccess"
import { $AABB$$Type } from "net.minecraft.world.phys.AABB"
import { $AbortableIterationConsumer$$Type } from "net.minecraft.util.AbortableIterationConsumer"
import { $EntityTypeTest$$Type } from "net.minecraft.world.level.entity.EntityTypeTest"
import { $UUID$$Type } from "java.util.UUID"
import { $Iterable } from "java.lang.Iterable"

export interface $LevelEntityGetter<T extends $EntityAccess = $EntityAccess> {
"get"<U extends T>(entityTypeTest0: $EntityTypeTest$$Type<T, U>, abortableIterationConsumer1: $AbortableIterationConsumer$$Type<U>): void
"get"(uUID0: $UUID$$Type): T
"get"(int0: integer): T
"get"(aABB0: $AABB$$Type, consumer1: $Consumer$$Type<T>): void
"get"<U extends T>(entityTypeTest0: $EntityTypeTest$$Type<T, U>, aABB1: $AABB$$Type, abortableIterationConsumer2: $AbortableIterationConsumer$$Type<U>): void
"getAll"(): $Iterable<T>
get "all"(): $Iterable<T>
}

export namespace $LevelEntityGetter {
const probejs$$marker: never
}
export abstract class $LevelEntityGetter$$Static<T extends $EntityAccess = $EntityAccess> implements $LevelEntityGetter<T> {
}
}

declare module "net.minecraft.world.level.entity.EntitySection" {
import { $EntityAccess, $EntityAccess$$Type } from "net.minecraft.world.level.entity.EntityAccess"
import { $EntitySectionAccessor } from "com.abdelaziz.canary.mixin.util.accessors.EntitySectionAccessor"
import { $EntityMovementTrackerSection } from "com.abdelaziz.canary.common.entity.movement_tracker.EntityMovementTrackerSection"
import { $AABB$$Type } from "net.minecraft.world.phys.AABB"
import { $BlockCachingEntity$$Type } from "com.abdelaziz.canary.common.entity.pushable.BlockCachingEntity"
import { $ClimbingMobCachingSection } from "com.abdelaziz.canary.common.world.ClimbingMobCachingSection"
import { $AbortableIterationConsumer$$Type } from "net.minecraft.util.AbortableIterationConsumer"
import { $Visibility, $Visibility$$Type } from "net.minecraft.world.level.entity.Visibility"
import { $BlockState$$Type } from "net.minecraft.world.level.block.state.BlockState"
import { $EntityTypeTest$$Type } from "net.minecraft.world.level.entity.EntityTypeTest"
import { $ArrayList$$Type } from "java.util.ArrayList"
import { $CallbackInfoReturnable$$Type } from "org.spongepowered.asm.mixin.injection.callback.CallbackInfoReturnable"
import { $AbortableIterationConsumer$Continuation } from "net.minecraft.util.AbortableIterationConsumer$Continuation"
import { $Entity$$Type } from "net.minecraft.world.entity.Entity"
import { $Stream } from "java.util.stream.Stream"
import { $EntityPushablePredicate$$Type } from "com.abdelaziz.canary.common.entity.pushable.EntityPushablePredicate"
import { $Class$$Type } from "java.lang.Class"
import { $EntitySectionStorage$$Type } from "net.minecraft.world.level.entity.EntitySectionStorage"
import { $PositionedEntityTrackingSection } from "com.abdelaziz.canary.common.entity.PositionedEntityTrackingSection"
import { $Level$$Type } from "net.minecraft.world.level.Level"
import { $SectionedEntityMovementTracker$$Type } from "com.abdelaziz.canary.common.entity.movement_tracker.SectionedEntityMovementTracker"

export class $EntitySection<T extends $EntityAccess = $EntityAccess> implements $ClimbingMobCachingSection, $EntitySectionAccessor, $EntityMovementTrackerSection, $PositionedEntityTrackingSection {
constructor(class0: $Class$$Type<T>, visibility1: $Visibility$$Type)

public "add"(t0: T): void
public "addListener"(sectionedEntityMovementTracker0: $SectionedEntityMovementTracker$$Type): void
public "collectPushableEntities"(level0: $Level$$Type, entity1: $Entity$$Type, aABB2: $AABB$$Type, entityPushablePredicate3: $EntityPushablePredicate$$Type, arrayList4: $ArrayList$$Type): $AbortableIterationConsumer$Continuation
public "getChangeTime"(int0: integer): long
public "getEntities"<U extends T>(entityTypeTest0: $EntityTypeTest$$Type<T, U>, aABB1: $AABB$$Type, abortableIterationConsumer2: $AbortableIterationConsumer$$Type<U>): $AbortableIterationConsumer$Continuation
public "getEntities"(aABB0: $AABB$$Type, abortableIterationConsumer1: $AbortableIterationConsumer$$Type<T>): $AbortableIterationConsumer$Continuation
public "getEntities"(): $Stream<T>
public "getPos"(): long
public "getStatus"(): $Visibility
public "handler$cnb000$isEmpty"(callbackInfoReturnable0: $CallbackInfoReturnable$$Type): void
public "isEmpty"(): boolean
public "listenToMovementOnce"(sectionedEntityMovementTracker0: $SectionedEntityMovementTracker$$Type, int1: integer): void
public "localvar$cnb000$swapStatus"(visibility0: $Visibility$$Type): $Visibility
public "onEntityModifiedCachedBlock"(blockCachingEntity0: $BlockCachingEntity$$Type, blockState1: $BlockState$$Type): void
public "remove"(t0: T): boolean
public "removeListenToMovementOnce"(sectionedEntityMovementTracker0: $SectionedEntityMovementTracker$$Type, int1: integer): void
public "removeListener"(entitySectionStorage0: $EntitySectionStorage$$Type, sectionedEntityMovementTracker1: $SectionedEntityMovementTracker$$Type): void
public "setPos"(long0: long): void
public "size"(): integer
public "trackEntityMovement"(int0: integer, long1: long): void
public "updateChunkStatus"(visibility0: $Visibility$$Type): $Visibility
get "entities"(): $Stream<T>
get "pos"(): long
get "status"(): $Visibility
get "empty"(): boolean
set "pos"(value: long)
}
}

declare module "net.minecraft.world.level.entity.EntityInLevelCallback" {
import { $Entity$RemovalReason$$Type } from "net.minecraft.world.entity.Entity$RemovalReason"

export interface $EntityInLevelCallback {
"onMove"(): void
"onRemove"(removalReason0: $Entity$RemovalReason$$Type): void
}

export namespace $EntityInLevelCallback {
const NULL: $EntityInLevelCallback
}
export abstract class $EntityInLevelCallback$$Static implements $EntityInLevelCallback {
static readonly "NULL": $EntityInLevelCallback

}
}

declare module "net.minecraft.world.level.entity.LevelCallback" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $LevelCallback<T = any> {
"onCreated"(t0: T): void
"onDestroyed"(t0: T): void
"onSectionChange"(t0: T): void
"onTickingEnd"(t0: T): void
"onTickingStart"(t0: T): void
"onTrackingEnd"(t0: T): void
"onTrackingStart"(t0: T): void
}

export namespace $LevelCallback {
const probejs$$marker: never
}
export abstract class $LevelCallback$$Static<T = any> implements $LevelCallback<T> {
}
}

declare module "net.minecraft.world.level.entity.EntityLookup" {
import { $EntityAccess, $EntityAccess$$Type } from "net.minecraft.world.level.entity.EntityAccess"
import { $AbortableIterationConsumer$$Type } from "net.minecraft.util.AbortableIterationConsumer"
import { $EntityTypeTest$$Type } from "net.minecraft.world.level.entity.EntityTypeTest"
import { $UUID$$Type } from "java.util.UUID"
import { $Iterable } from "java.lang.Iterable"

export class $EntityLookup<T extends $EntityAccess = $EntityAccess> {
constructor()

public "add"(t0: T): void
public "count"(): integer
public "getAllEntities"(): $Iterable<T>
public "getEntities"<U extends T>(entityTypeTest0: $EntityTypeTest$$Type<T, U>, abortableIterationConsumer1: $AbortableIterationConsumer$$Type<U>): void
public "getEntity"(int0: integer): T
public "getEntity"(uUID0: $UUID$$Type): T
public "remove"(t0: T): void
get "allEntities"(): $Iterable<T>
}
}

declare module "net.minecraft.world.level.entity.EntityTypeTest" {
import { $Class, $Class$$Type } from "java.lang.Class"

export interface $EntityTypeTest<B = any, T extends B = B> {
"getBaseClass"(): $Class<B>
"tryCast"(b0: B): T
get "baseClass"(): $Class<B>
}

export namespace $EntityTypeTest {
function forClass<B, T extends B>(class0: $Class$$Type<T>): $EntityTypeTest<B, T>
}
export abstract class $EntityTypeTest$$Static<B = any, T extends B = B> implements $EntityTypeTest<B, T> {
static "forClass"<B, T extends B>(class0: $Class$$Type<T>): $EntityTypeTest<B, T>
}
}

declare module "net.minecraft.world.level.entity.EntityPersistentStorage" {
import { $ChunkPos$$Type } from "net.minecraft.world.level.ChunkPos"
import { $ChunkEntities, $ChunkEntities$$Type } from "net.minecraft.world.level.entity.ChunkEntities"
import { $CompletableFuture } from "java.util.concurrent.CompletableFuture"
import { $AutoCloseable } from "java.lang.AutoCloseable"

export interface $EntityPersistentStorage<T = any> extends $AutoCloseable {
"close"(): void
"flush"(boolean0: boolean): void
"loadEntities"(chunkPos0: $ChunkPos$$Type): $CompletableFuture<$ChunkEntities<T>>
"storeEntities"(chunkEntities0: $ChunkEntities$$Type<T>): void
}

export namespace $EntityPersistentStorage {
const probejs$$marker: never
}
export abstract class $EntityPersistentStorage$$Static<T = any> implements $EntityPersistentStorage<T> {
}
}

declare module "net.minecraft.world.level.entity.EntityAccess" {
import { $AABB } from "net.minecraft.world.phys.AABB"
import { $Stream } from "java.util.stream.Stream"
import { $BlockPos } from "net.minecraft.core.BlockPos"
import { $Entity$RemovalReason$$Type } from "net.minecraft.world.entity.Entity$RemovalReason"
import { $EntityInLevelCallback$$Type } from "net.minecraft.world.level.entity.EntityInLevelCallback"
import { $UUID } from "java.util.UUID"

export interface $EntityAccess {
"blockPosition"(): $BlockPos
"getBoundingBox"(): $AABB
"getId"(): integer
"getPassengersAndSelf"(): $Stream<$EntityAccess>
"getSelfAndPassengers"(): $Stream<$EntityAccess>
"getUUID"(): $UUID
"isAlwaysTicking"(): boolean
"setLevelCallback"(entityInLevelCallback0: $EntityInLevelCallback$$Type): void
"setRemoved"(removalReason0: $Entity$RemovalReason$$Type): void
"shouldBeSaved"(): boolean
get "boundingBox"(): $AABB
get "id"(): integer
get "passengersAndSelf"(): $Stream<$EntityAccess>
get "selfAndPassengers"(): $Stream<$EntityAccess>
get "uUID"(): $UUID
get "alwaysTicking"(): boolean
set "levelCallback"(value: $EntityInLevelCallback$$Type)
set "removed"(value: $Entity$RemovalReason$$Type)
}

export namespace $EntityAccess {
const probejs$$marker: never
}
export abstract class $EntityAccess$$Static implements $EntityAccess {
}
}

declare module "net.minecraft.world.level.entity.ChunkStatusUpdateListener" {
import { $ChunkPos$$Type } from "net.minecraft.world.level.ChunkPos"
import { $FullChunkStatus$$Type } from "net.minecraft.server.level.FullChunkStatus"

export interface $ChunkStatusUpdateListener {
"onChunkStatusChange"(chunkPos0: $ChunkPos$$Type, fullChunkStatus1: $FullChunkStatus$$Type): void
}

export namespace $ChunkStatusUpdateListener {
const probejs$$marker: never
}
export abstract class $ChunkStatusUpdateListener$$Static implements $ChunkStatusUpdateListener {
}
}

declare module "net.minecraft.world.level.entity.EntityTickList" {
import { $Consumer$$Type } from "java.util.function.Consumer"
import { $Entity$$Type } from "net.minecraft.world.entity.Entity"
import { $EntityTickListAccessor } from "net.conczin.immersive_optimization.mixin.EntityTickListAccessor"

export class $EntityTickList implements $EntityTickListAccessor {
constructor()

public "add"(entity0: $Entity$$Type): void
public "contains"(entity0: $Entity$$Type): boolean
public "forEach"(consumer0: $Consumer$$Type<$Entity$$Type>): void
public "remove"(entity0: $Entity$$Type): void
}
}

declare module "net.minecraft.world.level.entity.EntitySectionStorage" {
import { $MovementTrackerCache } from "com.abdelaziz.canary.common.entity.movement_tracker.MovementTrackerCache"
import { $EntityAccess } from "net.minecraft.world.level.entity.EntityAccess"
import { $AABB$$Type } from "net.minecraft.world.phys.AABB"
import { $LongStream } from "java.util.stream.LongStream"
import { $AbortableIterationConsumer$$Type } from "net.minecraft.util.AbortableIterationConsumer"
import { $Long2ObjectFunction$$Type } from "it.unimi.dsi.fastutil.longs.Long2ObjectFunction"
import { $Visibility } from "net.minecraft.world.level.entity.Visibility"
import { $EntityTypeTest$$Type } from "net.minecraft.world.level.entity.EntityTypeTest"
import { $CallbackInfo$$Type } from "org.spongepowered.asm.mixin.injection.callback.CallbackInfo"
import { $Stream } from "java.util.stream.Stream"
import { $Class$$Type } from "java.lang.Class"
import { $EntitySection, $EntitySection$$Type } from "net.minecraft.world.level.entity.EntitySection"
import { $SectionedEntityMovementTracker, $SectionedEntityMovementTracker$$Type } from "com.abdelaziz.canary.common.entity.movement_tracker.SectionedEntityMovementTracker"
import { $LongSet } from "it.unimi.dsi.fastutil.longs.LongSet"

export class $EntitySectionStorage<T extends $EntityAccess = $EntityAccess> implements $MovementTrackerCache {
constructor(class0: $Class$$Type<T>, long2ObjectFunction1: $Long2ObjectFunction$$Type<$Visibility>)

public "count"(): integer
public "deduplicate"(sectionedEntityMovementTracker0: $SectionedEntityMovementTracker$$Type): $SectionedEntityMovementTracker
public "forEachAccessibleNonEmptySection"(aABB0: $AABB$$Type, abortableIterationConsumer1: $AbortableIterationConsumer$$Type<$EntitySection$$Type<T>>): void
public "getAllChunksWithExistingSections"(): $LongSet
public "getEntities"(aABB0: $AABB$$Type, abortableIterationConsumer1: $AbortableIterationConsumer$$Type<T>): void
public "getEntities"<U extends T>(entityTypeTest0: $EntityTypeTest$$Type<T, U>, aABB1: $AABB$$Type, abortableIterationConsumer2: $AbortableIterationConsumer$$Type<U>): void
public "getExistingSectionPositionsInChunk"(long0: long): $LongStream
public "getExistingSectionsInChunk"(long0: long): $Stream<$EntitySection<T>>
public "getOrCreateSection"(long0: long): $EntitySection<T>
public "getSection"(long0: long): $EntitySection<T>
public "handler$clk000$forEachInBox"(aABB0: $AABB$$Type, abortableIterationConsumer1: $AbortableIterationConsumer$$Type, callbackInfo2: $CallbackInfo$$Type, int3: integer, int4: integer, int5: integer, int6: integer, int7: integer, int8: integer, int9: integer): void
public "remove"(long0: long): void
public "remove"(sectionedEntityMovementTracker0: $SectionedEntityMovementTracker$$Type): void
get "allChunksWithExistingSections"(): $LongSet
}
}

declare module "net.minecraft.world.level.entity.TransientEntitySectionManager" {
import { $ChunkPos$$Type } from "net.minecraft.world.level.ChunkPos"
import { $EntityAccess, $EntityAccess$$Type } from "net.minecraft.world.level.entity.EntityAccess"
import { $LevelEntityGetter } from "net.minecraft.world.level.entity.LevelEntityGetter"
import { $TransientEntitySectionManagerAccessor } from "com.abdelaziz.canary.mixin.util.accessors.TransientEntitySectionManagerAccessor"
import { $EntitySectionStorage } from "net.minecraft.world.level.entity.EntitySectionStorage"
import { $Class$$Type } from "java.lang.Class"
import { $LevelCallback$$Type } from "net.minecraft.world.level.entity.LevelCallback"
import { $EntityLookup } from "net.minecraft.world.level.entity.EntityLookup"

export class $TransientEntitySectionManager<T extends $EntityAccess = $EntityAccess> implements $TransientEntitySectionManagerAccessor {
readonly "entityStorage": $EntityLookup<T>
readonly "sectionStorage": $EntitySectionStorage<T>

constructor(class0: $Class$$Type<T>, levelCallback1: $LevelCallback$$Type<T>)

public "addEntity"(t0: T): void
public "count"(): integer
public "gatherStats"(): string
public "getEntityGetter"(): $LevelEntityGetter<T>
public "startTicking"(chunkPos0: $ChunkPos$$Type): void
public "stopTicking"(chunkPos0: $ChunkPos$$Type): void
get "entityGetter"(): $LevelEntityGetter<T>
}
}

declare module "net.minecraft.world.level.entity.Visibility" {
import { $Enum } from "java.lang.Enum"
import { $FullChunkStatus$$Type } from "net.minecraft.server.level.FullChunkStatus"

export class $Visibility extends $Enum<$Visibility> {
static readonly "HIDDEN": $Visibility
static readonly "TICKING": $Visibility
static readonly "TRACKED": $Visibility

public static "fromFullChunkStatus"(fullChunkStatus0: $FullChunkStatus$$Type): $Visibility
public "isAccessible"(): boolean
public "isTicking"(): boolean
public static "valueOf"(string0: string): $Visibility
public static "values"(): $Visibility[]
get "accessible"(): boolean
get "ticking"(): boolean
}
}

declare module "net.minecraft.world.level.entity.PersistentEntitySectionManager" {
import { $EntityAccess, $EntityAccess$$Type } from "net.minecraft.world.level.entity.EntityAccess"
import { $LevelEntityGetter } from "net.minecraft.world.level.entity.LevelEntityGetter"
import { $PersistentEntitySectionManagerMixin } from "wootrevived.woot.mixins.impl.PersistentEntitySectionManagerMixin"
import { $PersistentEntitySectionManagerAccessor } from "com.abdelaziz.canary.mixin.util.accessors.PersistentEntitySectionManagerAccessor"
import { $Visibility, $Visibility$$Type } from "net.minecraft.world.level.entity.Visibility"
import { $UUID$$Type } from "java.util.UUID"
import { $EntityPersistentStorage, $EntityPersistentStorage$$Type } from "net.minecraft.world.level.entity.EntityPersistentStorage"
import { $AutoCloseable } from "java.lang.AutoCloseable"
import { $ChunkPos$$Type } from "net.minecraft.world.level.ChunkPos"
import { $Stream$$Type } from "java.util.stream.Stream"
import { $BlockPos$$Type } from "net.minecraft.core.BlockPos"
import { $Writer$$Type } from "java.io.Writer"
import { $EntitySectionStorage } from "net.minecraft.world.level.entity.EntitySectionStorage"
import { $Class$$Type } from "java.lang.Class"
import { $LevelCallback$$Type } from "net.minecraft.world.level.entity.LevelCallback"
import { $Long2ObjectMap } from "it.unimi.dsi.fastutil.longs.Long2ObjectMap"
import { $FullChunkStatus$$Type } from "net.minecraft.server.level.FullChunkStatus"
import { $EntityLookup } from "net.minecraft.world.level.entity.EntityLookup"

export class $PersistentEntitySectionManager<T extends $EntityAccess = $EntityAccess> implements $AutoCloseable, $PersistentEntitySectionManagerAccessor, $PersistentEntitySectionManagerMixin {
readonly "chunkVisibility": $Long2ObjectMap<$Visibility>
readonly "permanentStorage": $EntityPersistentStorage<T>
readonly "sectionStorage": $EntitySectionStorage<T>
readonly "visibleEntityStorage": $EntityLookup<T>

constructor(class0: $Class$$Type<T>, levelCallback1: $LevelCallback$$Type<T>, entityPersistentStorage2: $EntityPersistentStorage$$Type<T>)

public "addLegacyChunkEntities"(stream0: $Stream$$Type): void
public "addNewEntity"(t0: T): boolean
public "addNewEntityWithoutEvent"(t0: T): boolean
public "addWorldGenChunkEntities"(stream0: $Stream$$Type): void
public "areEntitiesLoaded"(long0: long): boolean
public "autoSave"(): void
public "canPositionTick"(blockPos0: $BlockPos$$Type): boolean
public "canPositionTick"(chunkPos0: $ChunkPos$$Type): boolean
public "close"(): void
public "dumpSections"(writer0: $Writer$$Type): void
public "gatherStats"(): string
public "getEntityGetter"(): $LevelEntityGetter<T>
public "isLoaded"(uUID0: $UUID$$Type): boolean
public "redirect$cal000$processUnloadsSafe"(persistentEntitySectionManager0: $PersistentEntitySectionManager$$Type): void
public "saveAll"(): void
public "tick"(): void
public "updateChunkStatus"(chunkPos0: $ChunkPos$$Type, fullChunkStatus1: $FullChunkStatus$$Type): void
public "updateChunkStatus"(chunkPos0: $ChunkPos$$Type, visibility1: $Visibility$$Type): void
get "entityGetter"(): $LevelEntityGetter<T>
}
}

declare module "net.minecraft.world.level.entity.ChunkEntities" {
import { $ChunkPos, $ChunkPos$$Type } from "net.minecraft.world.level.ChunkPos"
import { $List$$Type } from "java.util.List"
import { $Stream } from "java.util.stream.Stream"

export class $ChunkEntities<T = any> {
constructor(chunkPos0: $ChunkPos$$Type, list1: $List$$Type<T>)

public "getEntities"(): $Stream<T>
public "getPos"(): $ChunkPos
public "isEmpty"(): boolean
get "entities"(): $Stream<T>
get "pos"(): $ChunkPos
get "empty"(): boolean
}
}

