declare module "com.abdelaziz.canary.common.entity.EquipmentEntity$EquipmentTrackingEntity" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $EquipmentEntity$EquipmentTrackingEntity$$Type = ($EquipmentEntity$EquipmentTrackingEntity);
}

declare module "com.abdelaziz.canary.common.entity.item.ItemStackSubscriber" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $ItemStackSubscriber$$Type = ($ItemStackSubscriber | ((arg0: integer, arg1: integer) => void));
}

declare module "com.abdelaziz.canary.common.world.chunk.ChunkHolderExtended" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $ChunkHolderExtended$$Type = ($ChunkHolderExtended);
}

declare module "com.abdelaziz.canary.common.shapes.OffsetVoxelShapeCache" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $OffsetVoxelShapeCache$$Type = ($OffsetVoxelShapeCache);
}

declare module "com.abdelaziz.canary.common.block.entity.inventory_change_tracking.InventoryChangeTracker" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $InventoryChangeTracker$$Type = ($InventoryChangeTracker);
}

declare module "com.abdelaziz.canary.common.block.entity.inventory_change_tracking.InventoryChangeEmitter" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $InventoryChangeEmitter$$Type = ($InventoryChangeEmitter);
}

declare module "com.abdelaziz.canary.common.entity.PositionedEntityTrackingSection" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $PositionedEntityTrackingSection$$Type = ($PositionedEntityTrackingSection);
}

declare module "com.abdelaziz.canary.common.block.entity.inventory_comparator_tracking.ComparatorTracker" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $ComparatorTracker$$Type = ($ComparatorTracker);
}

declare module "com.abdelaziz.canary.common.hopper.CanaryStackList" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $CanaryStackList$$Type = ($CanaryStackList);
}

declare module "com.abdelaziz.canary.common.world.ChunkRandomSource" {
import { $BlockPos$MutableBlockPos } from "net.minecraft.core.BlockPos$MutableBlockPos"

/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $ChunkRandomSource$$Type = ($ChunkRandomSource | ((arg0: integer, arg1: integer, arg2: integer, arg3: integer, arg4: $BlockPos$MutableBlockPos) => void));
}

declare module "com.abdelaziz.canary.mixin.world.block_entity_ticking.sleeping.RebindableTickingBlockEntityWrapperAccessor" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $RebindableTickingBlockEntityWrapperAccessor$$Type = ($RebindableTickingBlockEntityWrapperAccessor);
}

declare module "com.abdelaziz.canary.common.ai.pathing.BlockStatePathingCache" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $BlockStatePathingCache$$Type = ($BlockStatePathingCache);
}

declare module "com.abdelaziz.canary.common.entity.NavigatingEntity" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $NavigatingEntity$$Type = ($NavigatingEntity);
}

declare module "com.abdelaziz.canary.common.entity.pushable.EntityPushablePredicate" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $EntityPushablePredicate$$Type<S = any> = ($EntityPushablePredicate<S>);
}

declare module "com.abdelaziz.canary.common.world.ClimbingMobCachingSection" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $ClimbingMobCachingSection$$Type = ($ClimbingMobCachingSection);
}

declare module "com.abdelaziz.canary.mixin.util.accessors.ServerLevelAccessor" {
import { $Entity$$Type } from "net.minecraft.world.entity.Entity"
import { $PersistentEntitySectionManager$$Type } from "net.minecraft.world.level.entity.PersistentEntitySectionManager"

/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $ServerLevelAccessor$$Type = ($ServerLevelAccessor | (() => $PersistentEntitySectionManager$$Type<$Entity$$Type>));
}

declare module "com.abdelaziz.canary.common.entity.EntityClassGroup" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $EntityClassGroup$$Type = ($EntityClassGroup);
}

declare module "com.abdelaziz.canary.common.world.interests.PointOfInterestStorageExtended" {
import { $PoiRecord, $PoiRecord$$Type } from "net.minecraft.world.entity.ai.village.poi.PoiRecord"
import { $PoiManager$Occupancy } from "net.minecraft.world.entity.ai.village.poi.PoiManager$Occupancy"
import { $Holder } from "net.minecraft.core.Holder"
import { $BlockPos } from "net.minecraft.core.BlockPos"
import { $WorldBorder } from "net.minecraft.world.level.border.WorldBorder"
import { $Predicate } from "java.util.function.Predicate"
import { $Optional$$Type } from "java.util.Optional"
import { $PoiType } from "net.minecraft.world.entity.ai.village.poi.PoiType"

/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $PointOfInterestStorageExtended$$Type = ($PointOfInterestStorageExtended | ((arg0: $BlockPos, arg1: integer, arg2: $Holder<$PoiType>, arg3: $PoiManager$Occupancy, arg4: $Predicate<$PoiRecord>, arg5: $WorldBorder) => $Optional$$Type<$PoiRecord$$Type>));
}

declare module "com.abdelaziz.canary.common.entity.movement_tracker.SectionedEntityMovementTracker" {
import { $EntityAccess, $EntityAccess$$Type } from "net.minecraft.world.level.entity.EntityAccess"

/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $SectionedEntityMovementTracker$$Type<E extends $EntityAccess = $EntityAccess, S = any> = ($SectionedEntityMovementTracker<E, S>);
}

declare module "com.abdelaziz.canary.common.world.blockentity.BlockEntityGetter" {
import { $BlockPos } from "net.minecraft.core.BlockPos"
import { $BlockEntity$$Type } from "net.minecraft.world.level.block.entity.BlockEntity"

/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $BlockEntityGetter$$Type = ($BlockEntityGetter | ((arg0: $BlockPos) => $BlockEntity$$Type));
}

declare module "com.abdelaziz.canary.mixin.util.accessors.PersistentEntitySectionManagerAccessor" {
import { $EntityAccess, $EntityAccess$$Type } from "net.minecraft.world.level.entity.EntityAccess"
import { $EntitySectionStorage$$Type } from "net.minecraft.world.level.entity.EntitySectionStorage"

/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $PersistentEntitySectionManagerAccessor$$Type<T extends $EntityAccess = $EntityAccess> = ($PersistentEntitySectionManagerAccessor<T> | (() => $EntitySectionStorage$$Type<T>));
}

declare module "com.abdelaziz.canary.common.entity.movement_tracker.SectionedEntityMovementListener" {
import { $Class } from "java.lang.Class"

/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $SectionedEntityMovementListener$$Type = ($SectionedEntityMovementListener | ((arg0: $Class<any>) => void));
}

declare module "com.abdelaziz.canary.common.hopper.NotifyingItemStack" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $NotifyingItemStack$$Type = ($NotifyingItemStack);
}

declare module "com.abdelaziz.canary.common.world.ChunkView" {
import { $ChunkAccess$$Type } from "net.minecraft.world.level.chunk.ChunkAccess"

/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $ChunkView$$Type = ($ChunkView | ((arg0: integer, arg1: integer) => $ChunkAccess$$Type));
}

declare module "com.abdelaziz.canary.common.world.interests.PointOfInterestSetExtended" {
import { $Consumer } from "java.util.function.Consumer"
import { $PoiRecord } from "net.minecraft.world.entity.ai.village.poi.PoiRecord"
import { $PoiManager$Occupancy } from "net.minecraft.world.entity.ai.village.poi.PoiManager$Occupancy"
import { $Holder } from "net.minecraft.core.Holder"
import { $Predicate } from "java.util.function.Predicate"
import { $PoiType } from "net.minecraft.world.entity.ai.village.poi.PoiType"

/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $PointOfInterestSetExtended$$Type = ($PointOfInterestSetExtended | ((arg0: $Predicate<$Holder<$PoiType>>, arg1: $PoiManager$Occupancy, arg2: $Consumer<$PoiRecord>) => void));
}

declare module "com.abdelaziz.canary.common.block.entity.inventory_change_tracking.InventoryChangeListener" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $InventoryChangeListener$$Type = ($InventoryChangeListener);
}

declare module "com.abdelaziz.canary.common.client.ClientWorldAccessor" {
import { $TransientEntitySectionManager$$Type } from "net.minecraft.world.level.entity.TransientEntitySectionManager"
import { $Entity$$Type } from "net.minecraft.world.entity.Entity"

/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $ClientWorldAccessor$$Type = ($ClientWorldAccessor | (() => $TransientEntitySectionManager$$Type<$Entity$$Type>));
}

declare module "com.abdelaziz.canary.mixin.util.accessors.TransientEntitySectionManagerAccessor" {
import { $EntityAccess, $EntityAccess$$Type } from "net.minecraft.world.level.entity.EntityAccess"
import { $EntitySectionStorage$$Type } from "net.minecraft.world.level.entity.EntitySectionStorage"

/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $TransientEntitySectionManagerAccessor$$Type<T extends $EntityAccess = $EntityAccess> = ($TransientEntitySectionManagerAccessor<T> | (() => $EntitySectionStorage$$Type<T>));
}

declare module "com.abdelaziz.canary.common.block.entity.SleepingBlockEntity" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $SleepingBlockEntity$$Type = ($SleepingBlockEntity);
}

declare module "com.abdelaziz.canary.common.util.tuples.WorldSectionBox" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $WorldSectionBox$$Type = ($WorldSectionBox);
}

declare module "com.abdelaziz.canary.common.entity.movement_tracker.EntityMovementTrackerSection" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $EntityMovementTrackerSection$$Type = ($EntityMovementTrackerSection);
}

declare module "com.abdelaziz.canary.api.inventory.CanaryDefaultedList" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $CanaryDefaultedList$$Type = ($CanaryDefaultedList | (() => void));
}

declare module "com.abdelaziz.canary.mixin.util.accessors.EntitySectionAccessor" {
import { $ClassInstanceMultiMap$$Type } from "net.minecraft.util.ClassInstanceMultiMap"

/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $EntitySectionAccessor$$Type<T = any> = ($EntitySectionAccessor<T> | (() => $ClassInstanceMultiMap$$Type<T>));
}

declare module "com.abdelaziz.canary.common.ai.MemoryModificationCounter" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $MemoryModificationCounter$$Type = ($MemoryModificationCounter | (() => long));
}

declare module "com.abdelaziz.canary.common.entity.pushable.BlockCachingEntity" {
import { $BlockState$$Type } from "net.minecraft.world.level.block.state.BlockState"

/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $BlockCachingEntity$$Type = ($BlockCachingEntity | (() => $BlockState$$Type));
}

declare module "com.abdelaziz.canary.common.entity.EquipmentEntity" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $EquipmentEntity$$Type = ($EquipmentEntity);
}

declare module "com.abdelaziz.canary.common.world.chunk.ClassGroupFilterableList" {
import { $Collection$$Type } from "java.util.Collection"
import { $EntityClassGroup } from "com.abdelaziz.canary.common.entity.EntityClassGroup"

/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $ClassGroupFilterableList$$Type<T = any> = ($ClassGroupFilterableList<T> | ((arg0: $EntityClassGroup) => $Collection$$Type<T>));
}

declare module "com.abdelaziz.canary.common.world.ServerWorldExtended" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $ServerWorldExtended$$Type = ($ServerWorldExtended);
}

declare module "com.abdelaziz.canary.common.world.interests.RegionBasedStorageSectionExtended" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $RegionBasedStorageSectionExtended$$Type<R = any> = ($RegionBasedStorageSectionExtended<R>);
}

declare module "com.abdelaziz.canary.common.entity.movement_tracker.MovementTrackerCache" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $MovementTrackerCache$$Type = ($MovementTrackerCache);
}

