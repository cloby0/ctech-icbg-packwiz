declare module "com.abdelaziz.canary.common.entity.EquipmentEntity$EquipmentTrackingEntity" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $EquipmentEntity$EquipmentTrackingEntity {
}

export namespace $EquipmentEntity$EquipmentTrackingEntity {
const probejs$$marker: never
}
export abstract class $EquipmentEntity$EquipmentTrackingEntity$$Static implements $EquipmentEntity$EquipmentTrackingEntity {
}
}

declare module "com.abdelaziz.canary.common.entity.item.ItemStackSubscriber" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $ItemStackSubscriber {
"notifyBeforeCountChange"(int0: integer, int1: integer): void
}

export namespace $ItemStackSubscriber {
const probejs$$marker: never
}
export abstract class $ItemStackSubscriber$$Static implements $ItemStackSubscriber {
}
}

declare module "com.abdelaziz.canary.common.world.chunk.ChunkHolderExtended" {
import { $Either, $Either$$Type } from "com.mojang.datafixers.util.Either"
import { $CompletableFuture, $CompletableFuture$$Type } from "java.util.concurrent.CompletableFuture"
import { $ChunkHolder$ChunkLoadingFailure, $ChunkHolder$ChunkLoadingFailure$$Type } from "net.minecraft.server.level.ChunkHolder$ChunkLoadingFailure"
import { $ChunkAccess, $ChunkAccess$$Type } from "net.minecraft.world.level.chunk.ChunkAccess"

export interface $ChunkHolderExtended {
"getFutureByStatus"(int0: integer): $CompletableFuture<$Either<$ChunkAccess, $ChunkHolder$ChunkLoadingFailure>>
"setFutureForStatus"(int0: integer, completableFuture1: $CompletableFuture$$Type<$Either$$Type<$ChunkAccess$$Type, $ChunkHolder$ChunkLoadingFailure$$Type>>): void
"updateLastAccessTime"(long0: long): boolean
}

export namespace $ChunkHolderExtended {
const probejs$$marker: never
}
export abstract class $ChunkHolderExtended$$Static implements $ChunkHolderExtended {
}
}

declare module "com.abdelaziz.canary.common.shapes.OffsetVoxelShapeCache" {
import { $Direction$$Type } from "net.minecraft.core.Direction"
import { $VoxelShape, $VoxelShape$$Type } from "net.minecraft.world.phys.shapes.VoxelShape"

export interface $OffsetVoxelShapeCache {
"getOffsetSimplifiedShape"(float0: float, direction1: $Direction$$Type): $VoxelShape
"setShape"(float0: float, direction1: $Direction$$Type, voxelShape2: $VoxelShape$$Type): void
}

export namespace $OffsetVoxelShapeCache {
const probejs$$marker: never
}
export abstract class $OffsetVoxelShapeCache$$Static implements $OffsetVoxelShapeCache {
}
}

declare module "com.abdelaziz.canary.common.block.entity.inventory_change_tracking.InventoryChangeTracker" {
import { $InventoryChangeEmitter } from "com.abdelaziz.canary.common.block.entity.inventory_change_tracking.InventoryChangeEmitter"
import { $InventoryChangeListener$$Type } from "com.abdelaziz.canary.common.block.entity.inventory_change_tracking.InventoryChangeListener"
import { $CanaryStackList$$Type } from "com.abdelaziz.canary.common.hopper.CanaryStackList"

export interface $InventoryChangeTracker extends $InventoryChangeEmitter {
"emitCallbackReplaced"(): void
"emitContentModified"(): void
"emitFirstComparatorAdded"(): void
"emitRemoved"(): void
"emitStackListReplaced"(): void
"forwardContentChangeOnce"(inventoryChangeListener0: $InventoryChangeListener$$Type, canaryStackList1: $CanaryStackList$$Type, inventoryChangeTracker2: $InventoryChangeTracker$$Type): void
"forwardMajorInventoryChanges"(inventoryChangeListener0: $InventoryChangeListener$$Type): void
"listenForContentChangesOnce"(canaryStackList0: $CanaryStackList$$Type, inventoryChangeListener1: $InventoryChangeListener$$Type): void
"listenForMajorInventoryChanges"(inventoryChangeListener0: $InventoryChangeListener$$Type): void
"stopForwardingMajorInventoryChanges"(inventoryChangeListener0: $InventoryChangeListener$$Type): void
"stopListenForMajorInventoryChanges"(inventoryChangeListener0: $InventoryChangeListener$$Type): void
}

export namespace $InventoryChangeTracker {
const probejs$$marker: never
}
export abstract class $InventoryChangeTracker$$Static implements $InventoryChangeTracker {
}
}

declare module "com.abdelaziz.canary.common.block.entity.inventory_change_tracking.InventoryChangeEmitter" {
import { $InventoryChangeListener$$Type } from "com.abdelaziz.canary.common.block.entity.inventory_change_tracking.InventoryChangeListener"
import { $CanaryStackList$$Type } from "com.abdelaziz.canary.common.hopper.CanaryStackList"
import { $InventoryChangeTracker$$Type } from "com.abdelaziz.canary.common.block.entity.inventory_change_tracking.InventoryChangeTracker"

export interface $InventoryChangeEmitter {
"emitCallbackReplaced"(): void
"emitContentModified"(): void
"emitFirstComparatorAdded"(): void
"emitRemoved"(): void
"emitStackListReplaced"(): void
"forwardContentChangeOnce"(inventoryChangeListener0: $InventoryChangeListener$$Type, canaryStackList1: $CanaryStackList$$Type, inventoryChangeTracker2: $InventoryChangeTracker$$Type): void
"forwardMajorInventoryChanges"(inventoryChangeListener0: $InventoryChangeListener$$Type): void
"stopForwardingMajorInventoryChanges"(inventoryChangeListener0: $InventoryChangeListener$$Type): void
}

export namespace $InventoryChangeEmitter {
const probejs$$marker: never
}
export abstract class $InventoryChangeEmitter$$Static implements $InventoryChangeEmitter {
}
}

declare module "com.abdelaziz.canary.common.entity.PositionedEntityTrackingSection" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $PositionedEntityTrackingSection {
"getPos"(): long
"setPos"(long0: long): void
get "pos"(): long
set "pos"(value: long)
}

export namespace $PositionedEntityTrackingSection {
const probejs$$marker: never
}
export abstract class $PositionedEntityTrackingSection$$Static implements $PositionedEntityTrackingSection {
}
}

declare module "com.abdelaziz.canary.common.block.entity.inventory_comparator_tracking.ComparatorTracker" {
import { $Direction$$Type } from "net.minecraft.core.Direction"

export interface $ComparatorTracker {
"hasAnyComparatorNearby"(): boolean
"onComparatorAdded"(direction0: $Direction$$Type, int1: integer): void
}

export namespace $ComparatorTracker {
const probejs$$marker: never
}
export abstract class $ComparatorTracker$$Static implements $ComparatorTracker {
}
}

declare module "com.abdelaziz.canary.common.hopper.CanaryStackList" {
import { $ItemStackSubscriber } from "com.abdelaziz.canary.common.entity.item.ItemStackSubscriber"
import { $Predicate$$Type } from "java.util.function.Predicate"
import { $Collection$$Type } from "java.util.Collection"
import { $CanaryDefaultedList } from "com.abdelaziz.canary.api.inventory.CanaryDefaultedList"
import { $UnaryOperator$$Type } from "java.util.function.UnaryOperator"
import { $InventoryChangeTracker$$Type } from "com.abdelaziz.canary.common.block.entity.inventory_change_tracking.InventoryChangeTracker"
import { $Consumer$$Type } from "java.util.function.Consumer"
import { $List } from "java.util.List"
import { $Container$$Type } from "net.minecraft.world.Container"
import { $Stream } from "java.util.stream.Stream"
import { $NonNullList, $NonNullList$$Type } from "net.minecraft.core.NonNullList"
import { $ItemStack, $ItemStack$$Type } from "net.minecraft.world.item.ItemStack"
import { $Comparator$$Type } from "java.util.Comparator"
import { $Spliterator } from "java.util.Spliterator"
import { $IntFunction$$Type } from "java.util.function.IntFunction"

export class $CanaryStackList extends $NonNullList<$ItemStack> implements $CanaryDefaultedList, $ItemStackSubscriber {
constructor(nonNullList0: $NonNullList$$Type<$ItemStack$$Type>, int1: integer)
constructor(int0: integer)

public "add"(int0: integer, itemStack1: $ItemStack$$Type): void
public "addAll"(collection0: $Collection$$Type<$ItemStack$$Type>): boolean
public "changed"(): void
public "changedALot"(): void
public "changedInteractionConditions"(): void
public "clearSignalStrengthOverride"(): void
public "contains"(object0: any): boolean
public "containsAll"(collection0: $Collection$$Type<any>): boolean
public static "copyOf"<E>(collection0: $Collection$$Type<E>): $List<E>
public "forEach"(consumer0: $Consumer$$Type<$ItemStack$$Type>): void
public "getFullSlots"(): integer
public "getModCount"(): long
public "getOccupiedSlots"(): integer
public "getSignalStrength"(container0: $Container$$Type): integer
public "hasSignalStrengthOverride"(): boolean
public "isEmpty"(): boolean
public "maybeSendsComparatorUpdatesOnFailedExtract"(): boolean
public "notifyBeforeCountChange"(int0: integer, int1: integer): void
public static "of"<E>(e0: E, e1: E, e2: E, e3: E): $List<E>
public static "of"<E>(e0: E, e1: E, e2: E): $List<E>
public static "of"<E>(e0: E, e1: E): $List<E>
public static "of"<E>(e0: E): $List<E>
public static "of"<E>(): $List<E>
public static "of"<E>(e0: E, e1: E, e2: E, e3: E, e4: E, e5: E, e6: E, e7: E): $List<E>
public static "of"<E>(e0: E, e1: E, e2: E, e3: E, e4: E, e5: E, e6: E): $List<E>
public static "of"<E>(e0: E, e1: E, e2: E, e3: E, e4: E, e5: E): $List<E>
public static "of"<E>(e0: E, e1: E, e2: E, e3: E, e4: E): $List<E>
public static "of"<E>(e0: E, e1: E, e2: E, e3: E, e4: E, e5: E, e6: E, e7: E, e8: E, e9: E): $List<E>
public static "of"<E>(e0: E, e1: E, e2: E, e3: E, e4: E, e5: E, e6: E, e7: E, e8: E): $List<E>
public static "of"<E>(...e0s: E[]): $List<E>
public "parallelStream"(): $Stream<$ItemStack>
public "remove"(object0: any): boolean
public "removeAll"(collection0: $Collection$$Type<any>): boolean
public "removeIf"(predicate0: $Predicate$$Type<$ItemStack$$Type>): boolean
public "removeInventoryModificationCallback"(inventoryChangeTracker0: $InventoryChangeTracker$$Type): void
public "replaceAll"(unaryOperator0: $UnaryOperator$$Type<$ItemStack$$Type>): void
public "retainAll"(collection0: $Collection$$Type<any>): boolean
public "runComparatorUpdatePatternOnFailedExtract"(canaryStackList0: $CanaryStackList$$Type, container1: $Container$$Type): void
public "set"(int0: integer, itemStack1: $ItemStack$$Type): $ItemStack
public "setInventoryModificationCallback"(inventoryChangeTracker0: $InventoryChangeTracker$$Type): void
public "setReducedSignalStrengthOverride"(): void
public "sort"(comparator0: $Comparator$$Type<$ItemStack$$Type>): void
public "spliterator"(): $Spliterator<$ItemStack>
public "stream"(): $Stream<$ItemStack>
public "toArray"(): any[]
public "toArray"<T>(t0s: T[]): T[]
public "toArray"<T>(intFunction0: $IntFunction$$Type<T[]>): T[]
get "fullSlots"(): integer
get "modCount"(): long
get "occupiedSlots"(): integer
get "empty"(): boolean
set "inventoryModificationCallback"(value: $InventoryChangeTracker$$Type)
}
}

declare module "com.abdelaziz.canary.common.world.ChunkRandomSource" {
import { $BlockPos$MutableBlockPos$$Type } from "net.minecraft.core.BlockPos$MutableBlockPos"

export interface $ChunkRandomSource {
"getRandomPosInChunk"(int0: integer, int1: integer, int2: integer, int3: integer, mutableBlockPos4: $BlockPos$MutableBlockPos$$Type): void
}

export namespace $ChunkRandomSource {
const probejs$$marker: never
}
export abstract class $ChunkRandomSource$$Static implements $ChunkRandomSource {
}
}

declare module "com.abdelaziz.canary.mixin.world.block_entity_ticking.sleeping.RebindableTickingBlockEntityWrapperAccessor" {
import { $TickingBlockEntity, $TickingBlockEntity$$Type } from "net.minecraft.world.level.block.entity.TickingBlockEntity"

export interface $RebindableTickingBlockEntityWrapperAccessor {
"callRebind"(tickingBlockEntity0: $TickingBlockEntity$$Type): void
"getTicker"(): $TickingBlockEntity
get "ticker"(): $TickingBlockEntity
}

export namespace $RebindableTickingBlockEntityWrapperAccessor {
const probejs$$marker: never
}
export abstract class $RebindableTickingBlockEntityWrapperAccessor$$Static implements $RebindableTickingBlockEntityWrapperAccessor {
}
}

declare module "com.abdelaziz.canary.common.ai.pathing.BlockStatePathingCache" {
import { $BlockPathTypes } from "net.minecraft.world.level.pathfinder.BlockPathTypes"

export interface $BlockStatePathingCache {
"getNeighborPathNodeType"(): $BlockPathTypes
"getPathNodeType"(): $BlockPathTypes
get "neighborPathNodeType"(): $BlockPathTypes
get "pathNodeType"(): $BlockPathTypes
}

export namespace $BlockStatePathingCache {
const probejs$$marker: never
}
export abstract class $BlockStatePathingCache$$Static implements $BlockStatePathingCache {
}
}

declare module "com.abdelaziz.canary.common.entity.NavigatingEntity" {
import { $PathNavigation, $PathNavigation$$Type } from "net.minecraft.world.entity.ai.navigation.PathNavigation"

export interface $NavigatingEntity {
"getRegisteredNavigation"(): $PathNavigation
"isRegisteredToWorld"(): boolean
"setRegisteredToWorld"(pathNavigation0: $PathNavigation$$Type): void
"updateNavigationRegistration"(): void
get "registeredNavigation"(): $PathNavigation
get "registeredToWorld"(): boolean
set "registeredToWorld"(value: $PathNavigation$$Type)
}

export namespace $NavigatingEntity {
const probejs$$marker: never
}
export abstract class $NavigatingEntity$$Static implements $NavigatingEntity {
}
}

declare module "com.abdelaziz.canary.common.entity.pushable.EntityPushablePredicate" {
import { $Predicate, $Predicate$$Type } from "java.util.function.Predicate"

export class $EntityPushablePredicate<S = any> implements $Predicate<S> {
constructor()

public static "and"<T>(predicate0: $Predicate$$Type<T>, predicate1: $Predicate$$Type<T>): $Predicate<T>
public "and"(predicate0: $Predicate$$Type<S>): $Predicate<S>
public static "isEqual"<T>(object0: any): $Predicate<T>
public "negate"(): $Predicate<S>
public static "not"<T>(predicate0: $Predicate$$Type<T>): $Predicate<T>
public "or"(predicate0: $Predicate$$Type<S>): $Predicate<S>
public "test"(s0: S): boolean
}
}

declare module "com.abdelaziz.canary.common.world.ClimbingMobCachingSection" {
import { $AbortableIterationConsumer$Continuation } from "net.minecraft.util.AbortableIterationConsumer$Continuation"
import { $Entity$$Type } from "net.minecraft.world.entity.Entity"
import { $AABB$$Type } from "net.minecraft.world.phys.AABB"
import { $BlockCachingEntity$$Type } from "com.abdelaziz.canary.common.entity.pushable.BlockCachingEntity"
import { $EntityPushablePredicate$$Type } from "com.abdelaziz.canary.common.entity.pushable.EntityPushablePredicate"
import { $BlockState$$Type } from "net.minecraft.world.level.block.state.BlockState"
import { $Level$$Type } from "net.minecraft.world.level.Level"
import { $ArrayList$$Type } from "java.util.ArrayList"

export interface $ClimbingMobCachingSection {
"collectPushableEntities"(level0: $Level$$Type, entity1: $Entity$$Type, aABB2: $AABB$$Type, entityPushablePredicate3: $EntityPushablePredicate$$Type<$Entity$$Type>, arrayList4: $ArrayList$$Type<$Entity$$Type>): $AbortableIterationConsumer$Continuation
"onEntityModifiedCachedBlock"(blockCachingEntity0: $BlockCachingEntity$$Type, blockState1: $BlockState$$Type): void
}

export namespace $ClimbingMobCachingSection {
const probejs$$marker: never
}
export abstract class $ClimbingMobCachingSection$$Static implements $ClimbingMobCachingSection {
}
}

declare module "com.abdelaziz.canary.mixin.util.accessors.ServerLevelAccessor" {
import { $Entity } from "net.minecraft.world.entity.Entity"
import { $PersistentEntitySectionManager } from "net.minecraft.world.level.entity.PersistentEntitySectionManager"

export interface $ServerLevelAccessor {
"getEntityManager"(): $PersistentEntitySectionManager<$Entity>
get "entityManager"(): $PersistentEntitySectionManager<$Entity>
}

export namespace $ServerLevelAccessor {
const probejs$$marker: never
}
export abstract class $ServerLevelAccessor$$Static implements $ServerLevelAccessor {
}
}

declare module "com.abdelaziz.canary.common.entity.EntityClassGroup" {
import { $Predicate$$Type } from "java.util.function.Predicate"
import { $Class$$Type } from "java.lang.Class"

export class $EntityClassGroup {
static readonly "MINECART_BOAT_LIKE_COLLISION": $EntityClassGroup

constructor(predicate0: $Predicate$$Type<$Class$$Type<any>>)

public "clear"(): void
public "contains"(class0: $Class$$Type<any>): boolean
}
}

declare module "com.abdelaziz.canary.common.world.interests.PointOfInterestStorageExtended" {
import { $PoiRecord, $PoiRecord$$Type } from "net.minecraft.world.entity.ai.village.poi.PoiRecord"
import { $PoiManager$Occupancy$$Type } from "net.minecraft.world.entity.ai.village.poi.PoiManager$Occupancy"
import { $Holder$$Type } from "net.minecraft.core.Holder"
import { $BlockPos$$Type } from "net.minecraft.core.BlockPos"
import { $WorldBorder$$Type } from "net.minecraft.world.level.border.WorldBorder"
import { $Predicate$$Type } from "java.util.function.Predicate"
import { $Optional } from "java.util.Optional"
import { $PoiType$$Type } from "net.minecraft.world.entity.ai.village.poi.PoiType"

export interface $PointOfInterestStorageExtended {
"findNearestForPortalLogic"(blockPos0: $BlockPos$$Type, int1: integer, holder2: $Holder$$Type<$PoiType$$Type>, occupancy3: $PoiManager$Occupancy$$Type, predicate4: $Predicate$$Type<$PoiRecord$$Type>, worldBorder5: $WorldBorder$$Type): $Optional<$PoiRecord>
}

export namespace $PointOfInterestStorageExtended {
const probejs$$marker: never
}
export abstract class $PointOfInterestStorageExtended$$Static implements $PointOfInterestStorageExtended {
}
}

declare module "com.abdelaziz.canary.common.entity.movement_tracker.SectionedEntityMovementTracker" {
import { $EntityMovementTrackerSection$$Type } from "com.abdelaziz.canary.common.entity.movement_tracker.EntityMovementTrackerSection"
import { $EntityAccess } from "net.minecraft.world.level.entity.EntityAccess"
import { $SectionedEntityMovementListener$$Type } from "com.abdelaziz.canary.common.entity.movement_tracker.SectionedEntityMovementListener"
import { $WorldSectionBox$$Type } from "com.abdelaziz.canary.common.util.tuples.WorldSectionBox"
import { $Class$$Type } from "java.lang.Class"
import { $ServerLevel$$Type } from "net.minecraft.server.level.ServerLevel"

export class $SectionedEntityMovementTracker<E extends $EntityAccess = $EntityAccess, S = any> {
constructor(worldSectionBox0: $WorldSectionBox$$Type, class1: $Class$$Type<S>)

public "emitEntityMovement"(int0: integer, entityMovementTrackerSection1: $EntityMovementTrackerSection$$Type): void
public "isUnchangedSince"(long0: long): boolean
public "listenToEntityMovementOnce"(sectionedEntityMovementListener0: $SectionedEntityMovementListener$$Type): void
public "onSectionEnteredRange"(entityMovementTrackerSection0: $EntityMovementTrackerSection$$Type): void
public "onSectionLeftRange"(entityMovementTrackerSection0: $EntityMovementTrackerSection$$Type): void
public "register"(serverLevel0: $ServerLevel$$Type): void
public "unRegister"(serverLevel0: $ServerLevel$$Type): void
}
}

declare module "com.abdelaziz.canary.common.world.blockentity.BlockEntityGetter" {
import { $BlockPos$$Type } from "net.minecraft.core.BlockPos"
import { $BlockEntity } from "net.minecraft.world.level.block.entity.BlockEntity"

export interface $BlockEntityGetter {
"getLoadedExistingBlockEntity"(blockPos0: $BlockPos$$Type): $BlockEntity
}

export namespace $BlockEntityGetter {
const probejs$$marker: never
}
export abstract class $BlockEntityGetter$$Static implements $BlockEntityGetter {
}
}

declare module "com.abdelaziz.canary.mixin.util.accessors.PersistentEntitySectionManagerAccessor" {
import { $EntityAccess } from "net.minecraft.world.level.entity.EntityAccess"
import { $EntitySectionStorage } from "net.minecraft.world.level.entity.EntitySectionStorage"

export interface $PersistentEntitySectionManagerAccessor<T extends $EntityAccess = $EntityAccess> {
"getSectionStorage"(): $EntitySectionStorage<T>
get "sectionStorage"(): $EntitySectionStorage<T>
}

export namespace $PersistentEntitySectionManagerAccessor {
const probejs$$marker: never
}
export abstract class $PersistentEntitySectionManagerAccessor$$Static<T extends $EntityAccess = $EntityAccess> implements $PersistentEntitySectionManagerAccessor<T> {
}
}

declare module "com.abdelaziz.canary.common.entity.movement_tracker.SectionedEntityMovementListener" {
import { $Class$$Type } from "java.lang.Class"

export interface $SectionedEntityMovementListener {
"handleEntityMovement"(class0: $Class$$Type<any>): void
}

export namespace $SectionedEntityMovementListener {
const probejs$$marker: never
}
export abstract class $SectionedEntityMovementListener$$Static implements $SectionedEntityMovementListener {
}
}

declare module "com.abdelaziz.canary.common.hopper.NotifyingItemStack" {
import { $ItemStackSubscriber$$Type } from "com.abdelaziz.canary.common.entity.item.ItemStackSubscriber"

export interface $NotifyingItemStack {
"canary$subscribe"(itemStackSubscriber0: $ItemStackSubscriber$$Type): void
"canary$subscribeWithIndex"(itemStackSubscriber0: $ItemStackSubscriber$$Type, int1: integer): void
"canary$unsubscribe"(itemStackSubscriber0: $ItemStackSubscriber$$Type): void
"canary$unsubscribeWithIndex"(itemStackSubscriber0: $ItemStackSubscriber$$Type, int1: integer): void
}

export namespace $NotifyingItemStack {
const probejs$$marker: never
}
export abstract class $NotifyingItemStack$$Static implements $NotifyingItemStack {
}
}

declare module "com.abdelaziz.canary.common.world.ChunkView" {
import { $ChunkAccess } from "net.minecraft.world.level.chunk.ChunkAccess"

export interface $ChunkView {
"getLoadedChunk"(int0: integer, int1: integer): $ChunkAccess
}

export namespace $ChunkView {
const probejs$$marker: never
}
export abstract class $ChunkView$$Static implements $ChunkView {
}
}

declare module "com.abdelaziz.canary.common.world.interests.PointOfInterestSetExtended" {
import { $Consumer$$Type } from "java.util.function.Consumer"
import { $PoiRecord$$Type } from "net.minecraft.world.entity.ai.village.poi.PoiRecord"
import { $PoiManager$Occupancy$$Type } from "net.minecraft.world.entity.ai.village.poi.PoiManager$Occupancy"
import { $Holder$$Type } from "net.minecraft.core.Holder"
import { $Predicate$$Type } from "java.util.function.Predicate"
import { $PoiType$$Type } from "net.minecraft.world.entity.ai.village.poi.PoiType"

export interface $PointOfInterestSetExtended {
"collectMatchingPoints"(predicate0: $Predicate$$Type<$Holder$$Type<$PoiType$$Type>>, occupancy1: $PoiManager$Occupancy$$Type, consumer2: $Consumer$$Type<$PoiRecord$$Type>): void
}

export namespace $PointOfInterestSetExtended {
const probejs$$marker: never
}
export abstract class $PointOfInterestSetExtended$$Static implements $PointOfInterestSetExtended {
}
}

declare module "com.abdelaziz.canary.common.block.entity.inventory_change_tracking.InventoryChangeListener" {
import { $Container$$Type } from "net.minecraft.world.Container"

export interface $InventoryChangeListener {
"handleComparatorAdded"(container0: $Container$$Type): boolean
"handleInventoryContentModified"(container0: $Container$$Type): void
"handleInventoryRemoved"(container0: $Container$$Type): void
"handleStackListReplaced"(container0: $Container$$Type): void
}

export namespace $InventoryChangeListener {
const probejs$$marker: never
}
export abstract class $InventoryChangeListener$$Static implements $InventoryChangeListener {
}
}

declare module "com.abdelaziz.canary.common.client.ClientWorldAccessor" {
import { $TransientEntitySectionManager } from "net.minecraft.world.level.entity.TransientEntitySectionManager"
import { $Entity } from "net.minecraft.world.entity.Entity"

export interface $ClientWorldAccessor {
"getEntityManager"(): $TransientEntitySectionManager<$Entity>
get "entityManager"(): $TransientEntitySectionManager<$Entity>
}

export namespace $ClientWorldAccessor {
const probejs$$marker: never
}
export abstract class $ClientWorldAccessor$$Static implements $ClientWorldAccessor {
}
}

declare module "com.abdelaziz.canary.mixin.util.accessors.TransientEntitySectionManagerAccessor" {
import { $EntityAccess } from "net.minecraft.world.level.entity.EntityAccess"
import { $EntitySectionStorage } from "net.minecraft.world.level.entity.EntitySectionStorage"

export interface $TransientEntitySectionManagerAccessor<T extends $EntityAccess = $EntityAccess> {
"getSectionStorage"(): $EntitySectionStorage<T>
get "sectionStorage"(): $EntitySectionStorage<T>
}

export namespace $TransientEntitySectionManagerAccessor {
const probejs$$marker: never
}
export abstract class $TransientEntitySectionManagerAccessor$$Static<T extends $EntityAccess = $EntityAccess> implements $TransientEntitySectionManagerAccessor<T> {
}
}

declare module "com.abdelaziz.canary.common.block.entity.SleepingBlockEntity" {
import { $RebindableTickingBlockEntityWrapperAccessor, $RebindableTickingBlockEntityWrapperAccessor$$Type } from "com.abdelaziz.canary.mixin.world.block_entity_ticking.sleeping.RebindableTickingBlockEntityWrapperAccessor"
import { $TickingBlockEntity, $TickingBlockEntity$$Type } from "net.minecraft.world.level.block.entity.TickingBlockEntity"

export interface $SleepingBlockEntity {
"getSleepingTicker"(): $TickingBlockEntity
"getTickWrapper"(): $RebindableTickingBlockEntityWrapperAccessor
"isSleeping"(): boolean
"setSleepingTicker"(tickingBlockEntity0: $TickingBlockEntity$$Type): void
"setTickWrapper"(rebindableTickingBlockEntityWrapperAccessor0: $RebindableTickingBlockEntityWrapperAccessor$$Type): void
"setTicker"(tickingBlockEntity0: $TickingBlockEntity$$Type): void
"sleepOnlyCurrentTick"(): void
"startSleeping"(): boolean
"wakeUpNow"(): void
get "sleepingTicker"(): $TickingBlockEntity
get "tickWrapper"(): $RebindableTickingBlockEntityWrapperAccessor
get "sleeping"(): boolean
set "sleepingTicker"(value: $TickingBlockEntity$$Type)
set "tickWrapper"(value: $RebindableTickingBlockEntityWrapperAccessor$$Type)
set "ticker"(value: $TickingBlockEntity$$Type)
}

export namespace $SleepingBlockEntity {
const SLEEPING_BLOCK_ENTITY_TICKER: $TickingBlockEntity
}
export abstract class $SleepingBlockEntity$$Static implements $SleepingBlockEntity {
static readonly "SLEEPING_BLOCK_ENTITY_TICKER": $TickingBlockEntity

}
}

declare module "com.abdelaziz.canary.common.util.tuples.WorldSectionBox" {
import { $AABB$$Type } from "net.minecraft.world.phys.AABB"
import { $Record } from "java.lang.Record"
import { $Level, $Level$$Type } from "net.minecraft.world.level.Level"

export class $WorldSectionBox extends $Record {
constructor(world: $Level$$Type, chunkX1: integer, chunkY1: integer, chunkZ1: integer, chunkX2: integer, chunkY2: integer, chunkZ2: integer)

public "chunkX1"(): integer
public "chunkX2"(): integer
public "chunkY1"(): integer
public "chunkY2"(): integer
public "chunkZ1"(): integer
public "chunkZ2"(): integer
public static "entityAccessBox"(level0: $Level$$Type, aABB1: $AABB$$Type): $WorldSectionBox
public "matchesRelevantBlocksBox"(aABB0: $AABB$$Type): boolean
public "numSections"(): integer
public static "relevantExpandedBlocksBox"(level0: $Level$$Type, aABB1: $AABB$$Type): $WorldSectionBox
public static "relevantFluidBox"(level0: $Level$$Type, aABB1: $AABB$$Type): $WorldSectionBox
public "world"(): $Level
}
}

declare module "com.abdelaziz.canary.common.entity.movement_tracker.EntityMovementTrackerSection" {
import { $EntityAccess, $EntityAccess$$Type } from "net.minecraft.world.level.entity.EntityAccess"
import { $EntitySectionStorage$$Type } from "net.minecraft.world.level.entity.EntitySectionStorage"
import { $SectionedEntityMovementTracker$$Type } from "com.abdelaziz.canary.common.entity.movement_tracker.SectionedEntityMovementTracker"

export interface $EntityMovementTrackerSection {
"addListener"(sectionedEntityMovementTracker0: $SectionedEntityMovementTracker$$Type<any, any>): void
"getChangeTime"(int0: integer): long
"listenToMovementOnce"<S, E extends $EntityAccess>(sectionedEntityMovementTracker0: $SectionedEntityMovementTracker$$Type<E, S>, int1: integer): void
"removeListenToMovementOnce"<S, E extends $EntityAccess>(sectionedEntityMovementTracker0: $SectionedEntityMovementTracker$$Type<E, S>, int1: integer): void
"removeListener"(entitySectionStorage0: $EntitySectionStorage$$Type<any>, sectionedEntityMovementTracker1: $SectionedEntityMovementTracker$$Type<any, any>): void
"trackEntityMovement"(int0: integer, long1: long): void
}

export namespace $EntityMovementTrackerSection {
const probejs$$marker: never
}
export abstract class $EntityMovementTrackerSection$$Static implements $EntityMovementTrackerSection {
}
}

declare module "com.abdelaziz.canary.api.inventory.CanaryDefaultedList" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $CanaryDefaultedList {
"changedInteractionConditions"(): void
}

export namespace $CanaryDefaultedList {
const probejs$$marker: never
}
export abstract class $CanaryDefaultedList$$Static implements $CanaryDefaultedList {
}
}

declare module "com.abdelaziz.canary.mixin.util.accessors.EntitySectionAccessor" {
import { $ClassInstanceMultiMap } from "net.minecraft.util.ClassInstanceMultiMap"

export interface $EntitySectionAccessor<T = any> {
"getStorage"(): $ClassInstanceMultiMap<T>
get "storage"(): $ClassInstanceMultiMap<T>
}

export namespace $EntitySectionAccessor {
const probejs$$marker: never
}
export abstract class $EntitySectionAccessor$$Static<T = any> implements $EntitySectionAccessor<T> {
}
}

declare module "com.abdelaziz.canary.common.ai.MemoryModificationCounter" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $MemoryModificationCounter {
"getModCount"(): long
get "modCount"(): long
}

export namespace $MemoryModificationCounter {
const probejs$$marker: never
}
export abstract class $MemoryModificationCounter$$Static implements $MemoryModificationCounter {
}
}

declare module "com.abdelaziz.canary.common.entity.pushable.BlockCachingEntity" {
import { $BlockState, $BlockState$$Type } from "net.minecraft.world.level.block.state.BlockState"

export interface $BlockCachingEntity {
"canaryOnBlockCacheDeleted"(): void
"canaryOnBlockCacheSet"(blockState0: $BlockState$$Type): void
"canarySetClimbingMobCachingSectionUpdateBehavior"(boolean0: boolean): void
"getCachedFeetBlockState"(): $BlockState
get "cachedFeetBlockState"(): $BlockState
}

export namespace $BlockCachingEntity {
const probejs$$marker: never
}
export abstract class $BlockCachingEntity$$Static implements $BlockCachingEntity {
}
}

declare module "com.abdelaziz.canary.common.entity.EquipmentEntity" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $EquipmentEntity {
"canaryOnEquipmentChanged"(): void
}

export namespace $EquipmentEntity {
const probejs$$marker: never
}
export abstract class $EquipmentEntity$$Static implements $EquipmentEntity {
}
}

declare module "com.abdelaziz.canary.common.world.chunk.ClassGroupFilterableList" {
import { $Collection } from "java.util.Collection"
import { $EntityClassGroup$$Type } from "com.abdelaziz.canary.common.entity.EntityClassGroup"

export interface $ClassGroupFilterableList<T = any> {
"getAllOfGroupType"(entityClassGroup0: $EntityClassGroup$$Type): $Collection<T>
}

export namespace $ClassGroupFilterableList {
const probejs$$marker: never
}
export abstract class $ClassGroupFilterableList$$Static<T = any> implements $ClassGroupFilterableList<T> {
}
}

declare module "com.abdelaziz.canary.common.world.ServerWorldExtended" {
import { $Mob$$Type } from "net.minecraft.world.entity.Mob"

export interface $ServerWorldExtended {
"setNavigationActive"(mob0: $Mob$$Type): void
"setNavigationInactive"(mob0: $Mob$$Type): void
set "navigationActive"(value: $Mob$$Type)
set "navigationInactive"(value: $Mob$$Type)
}

export namespace $ServerWorldExtended {
const probejs$$marker: never
}
export abstract class $ServerWorldExtended$$Static implements $ServerWorldExtended {
}
}

declare module "com.abdelaziz.canary.common.world.interests.RegionBasedStorageSectionExtended" {
import { $Stream } from "java.util.stream.Stream"
import { $Iterable } from "java.lang.Iterable"

export interface $RegionBasedStorageSectionExtended<R = any> {
"getInChunkColumn"(int0: integer, int1: integer): $Iterable<R>
"getWithinChunkColumn"(int0: integer, int1: integer): $Stream<R>
}

export namespace $RegionBasedStorageSectionExtended {
const probejs$$marker: never
}
export abstract class $RegionBasedStorageSectionExtended$$Static<R = any> implements $RegionBasedStorageSectionExtended<R> {
}
}

declare module "com.abdelaziz.canary.common.entity.movement_tracker.MovementTrackerCache" {
import { $SectionedEntityMovementTracker, $SectionedEntityMovementTracker$$Type } from "com.abdelaziz.canary.common.entity.movement_tracker.SectionedEntityMovementTracker"

export interface $MovementTrackerCache {
"deduplicate"<S extends $SectionedEntityMovementTracker<any, any>>(s0: S): S
"remove"(sectionedEntityMovementTracker0: $SectionedEntityMovementTracker$$Type<any, any>): void
}

export namespace $MovementTrackerCache {
const probejs$$marker: never
}
export abstract class $MovementTrackerCache$$Static implements $MovementTrackerCache {
}
}

