declare module "com.railwayteam.railways.mixin_interfaces.IWaypointableNavigation" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $IWaypointableNavigation$$Type = ($IWaypointableNavigation | (() => boolean));
}

declare module "com.railwayteam.railways.mixin.client.AccessorEntity" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $AccessorEntity$$Type = ($AccessorEntity);
}

declare module "com.railwayteam.railways.mixin_interfaces.ICrashAdvancement" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $ICrashAdvancement$$Type = ($ICrashAdvancement | (() => void));
}

declare module "com.railwayteam.railways.mixin.client.AccessorBogeyStyle" {
import { $Map$$Type } from "java.util.Map"
import { $BogeySizes$BogeySize$$Type } from "com.simibubi.create.content.trains.bogey.BogeySizes$BogeySize"
import { $BogeyStyle$SizeRenderer$$Type } from "com.simibubi.create.content.trains.bogey.BogeyStyle$SizeRenderer"

/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $AccessorBogeyStyle$$Type = ($AccessorBogeyStyle | (() => $Map$$Type<$BogeySizes$BogeySize$$Type, $BogeyStyle$SizeRenderer$$Type>));
}

declare module "com.railwayteam.railways.mixin_interfaces.IBufferBlockCheckableNavigation" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $IBufferBlockCheckableNavigation$$Type = ($IBufferBlockCheckableNavigation | ((arg0: boolean) => void));
}

declare module "com.railwayteam.railways.mixin_interfaces.IFuelInventory" {
import { $MountedFluidStorageWrapper$$Type } from "com.simibubi.create.api.contraption.storage.fluid.MountedFluidStorageWrapper"

/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $IFuelInventory$$Type = ($IFuelInventory | (() => $MountedFluidStorageWrapper$$Type));
}

declare module "com.railwayteam.railways.mixin_interfaces.IGenerallySearchableNavigation$PointTest" {
import { $Pair } from "net.createmod.catnip.data.Pair"
import { $TrackEdge } from "com.simibubi.create.content.trains.graph.TrackEdge"
import { $Map } from "java.util.Map"
import { $Couple } from "net.createmod.catnip.data.Couple"
import { $TrackNode } from "com.simibubi.create.content.trains.graph.TrackNode"
import { $TrackEdgePoint } from "com.simibubi.create.content.trains.signal.TrackEdgePoint"

/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $IGenerallySearchableNavigation$PointTest$$Type = ($IGenerallySearchableNavigation$PointTest | ((arg0: double, arg1: double, arg2: $Map<$TrackEdge, $Pair<boolean, $Couple<$TrackNode>>>, arg3: $Pair<$Couple<$TrackNode>, $TrackEdge>, arg4: $TrackEdgePoint) => boolean));
}

declare module "com.railwayteam.railways.mixin.AccessorNavigation" {
import { $List$$Type } from "java.util.List"
import { $Couple$$Type } from "net.createmod.catnip.data.Couple"
import { $TrackNode$$Type } from "com.simibubi.create.content.trains.graph.TrackNode"

/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $AccessorNavigation$$Type = ($AccessorNavigation | (() => $List$$Type<$Couple$$Type<$TrackNode$$Type>>));
}

declare module "com.railwayteam.railways.mixin.AccessorCarriageBogey" {
import { $AbstractBogeyBlock$$Type } from "com.simibubi.create.content.trains.bogey.AbstractBogeyBlock"

/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $AccessorCarriageBogey$$Type = ($AccessorCarriageBogey | (() => $AbstractBogeyBlock$$Type<any>));
}

declare module "com.railwayteam.railways.mixin_interfaces.ILimitedGlobalStation" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $ILimitedGlobalStation$$Type = ($ILimitedGlobalStation);
}

declare module "com.railwayteam.railways.mixin.AccessorScheduleRuntime" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $AccessorScheduleRuntime$$Type = ($AccessorScheduleRuntime);
}

declare module "com.railwayteam.railways.mixin_interfaces.IBufferBlockedTrain" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $IBufferBlockedTrain$$Type = ($IBufferBlockedTrain);
}

declare module "com.railwayteam.railways.mixin_interfaces.IStrictSignalTrain" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $IStrictSignalTrain$$Type = ($IStrictSignalTrain | ((arg0: boolean) => void));
}

declare module "com.railwayteam.railways.mixin.AccessorDataFixTypes" {
import { $DSL$TypeReference$$Type } from "com.mojang.datafixers.DSL$TypeReference"

/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $AccessorDataFixTypes$$Type = ($AccessorDataFixTypes | (() => $DSL$TypeReference$$Type));
}

declare module "com.railwayteam.railways.forge.mixin.ChunkMapAccessor" {
import { $Int2ObjectMap$$Type } from "it.unimi.dsi.fastutil.ints.Int2ObjectMap"
import { $ChunkMap$TrackedEntity$$Type } from "net.minecraft.server.level.ChunkMap$TrackedEntity"

/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $ChunkMapAccessor$$Type = ($ChunkMapAccessor | (() => $Int2ObjectMap$$Type<$ChunkMap$TrackedEntity$$Type>));
}

declare module "com.railwayteam.railways.mixin.client.AccessorPartialModel" {
import { $BakedModel } from "net.minecraft.client.resources.model.BakedModel"

/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $AccessorPartialModel$$Type = ($AccessorPartialModel | ((arg0: $BakedModel) => void));
}

declare module "com.railwayteam.railways.mixin.AccessorTrackTargetingBehavior" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $AccessorTrackTargetingBehavior$$Type = ($AccessorTrackTargetingBehavior);
}

declare module "com.railwayteam.railways.forge.mixin.ContainerLevelAccessMixin" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $ContainerLevelAccessMixin$$Type = ($ContainerLevelAccessMixin);
}

declare module "com.railwayteam.railways.api.bogeymenu.v0.forge.BogeyMenuEvents$EntryRegistrationEvent" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $BogeyMenuEvents$EntryRegistrationEvent$$Type = ($BogeyMenuEvents$EntryRegistrationEvent);
}

declare module "com.railwayteam.railways.mixin.AccessorAbstractContraptionEntity" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $AccessorAbstractContraptionEntity$$Type = ($AccessorAbstractContraptionEntity);
}

declare module "com.railwayteam.railways.content.switches.TrackSwitchBlock$SwitchConstraint" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $TrackSwitchBlock$SwitchConstraint$$Type = ($TrackSwitchBlock$SwitchConstraint | ("none" | "to_right" | "to_left"));
}

declare module "com.railwayteam.railways.mixin_interfaces.ICarriageBufferDistanceTracker" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $ICarriageBufferDistanceTracker$$Type = ($ICarriageBufferDistanceTracker);
}

declare module "com.railwayteam.railways.mixin.client.AccessorLevelRenderer" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $AccessorLevelRenderer$$Type = ($AccessorLevelRenderer);
}

declare module "com.railwayteam.railways.mixin_interfaces.IIndexedSchedule" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $IIndexedSchedule$$Type = ($IIndexedSchedule);
}

declare module "com.railwayteam.railways.mixin_interfaces.IHasTrackCasing" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $IHasTrackCasing$$Type = ($IHasTrackCasing);
}

declare module "com.railwayteam.railways.mixin_interfaces.IDistanceTravelled" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $IDistanceTravelled$$Type = ($IDistanceTravelled | (() => double));
}

declare module "com.railwayteam.railways.mixin_interfaces.ISwitchDisabledEdge" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $ISwitchDisabledEdge$$Type = ($ISwitchDisabledEdge);
}

declare module "com.railwayteam.railways.mixin_interfaces.IContraptionFuel" {
import { $MountedFluidStorageWrapper$$Type } from "com.simibubi.create.api.contraption.storage.fluid.MountedFluidStorageWrapper"

/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $IContraptionFuel$$Type = ($IContraptionFuel | (() => $MountedFluidStorageWrapper$$Type));
}

declare module "com.railwayteam.railways.mixin.AccessorBlockEntityType" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $AccessorBlockEntityType$$Type = ($AccessorBlockEntityType);
}

declare module "com.railwayteam.railways.forge.mixin.ChunkMapAccessor$TrackedEntityAccessor" {
import { $ServerPlayerConnection$$Type } from "net.minecraft.server.network.ServerPlayerConnection"
import { $Set$$Type } from "java.util.Set"

/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $ChunkMapAccessor$TrackedEntityAccessor$$Type = ($ChunkMapAccessor$TrackedEntityAccessor | (() => $Set$$Type<$ServerPlayerConnection$$Type>));
}

declare module "com.railwayteam.railways.mixin_interfaces.IGenerallySearchableNavigation" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $IGenerallySearchableNavigation$$Type = ($IGenerallySearchableNavigation);
}

declare module "com.railwayteam.railways.mixin_interfaces.IUpdateCount" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $IUpdateCount$$Type = ($IUpdateCount);
}

declare module "com.railwayteam.railways.mixin.client.AccessorWalkAnimationState" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $AccessorWalkAnimationState$$Type = ($AccessorWalkAnimationState);
}

declare module "com.railwayteam.railways.mixin_interfaces.IPreAssembleCallback" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $IPreAssembleCallback$$Type = ($IPreAssembleCallback | (() => void));
}

declare module "com.railwayteam.railways.mixin.AccessorCarriageContraptionEntity" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $AccessorCarriageContraptionEntity$$Type = ($AccessorCarriageContraptionEntity);
}

declare module "com.railwayteam.railways.mixin.AccessorBlockEntity" {
import { $BlockPos } from "net.minecraft.core.BlockPos"

/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $AccessorBlockEntity$$Type = ($AccessorBlockEntity | ((arg0: $BlockPos) => void));
}

declare module "com.railwayteam.railways.mixin.client.AccessorMinecraft" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $AccessorMinecraft$$Type = ($AccessorMinecraft | ((arg0: string) => void));
}

declare module "com.railwayteam.railways.mixin.AccessorCarriage" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $AccessorCarriage$$Type = ($AccessorCarriage);
}

declare module "com.railwayteam.railways.content.switches.TrackSwitchBlock$SwitchState" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $TrackSwitchBlock$SwitchState$$Type = ($TrackSwitchBlock$SwitchState | ("normal" | "reverse_left" | "reverse_right"));
}

declare module "com.railwayteam.railways.mixin.client.AccessorLivingEntityRenderer" {
import { $LivingEntity, $LivingEntity$$Type } from "net.minecraft.world.entity.LivingEntity"
import { $PoseStack } from "com.mojang.blaze3d.vertex.PoseStack"

/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $AccessorLivingEntityRenderer$$Type<T extends $LivingEntity = $LivingEntity> = ($AccessorLivingEntityRenderer<T> | ((arg0: T, arg1: $PoseStack, arg2: float, arg3: float, arg4: float) => void));
}

declare module "com.railwayteam.railways.mixin_interfaces.IHandcarTrain" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $IHandcarTrain$$Type = ($IHandcarTrain);
}

declare module "com.railwayteam.railways.mixin.conductor_possession.AccessorKeyMapping" {
import { $InputConstants$Key$$Type } from "com.mojang.blaze3d.platform.InputConstants$Key"

/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $AccessorKeyMapping$$Type = ($AccessorKeyMapping | (() => $InputConstants$Key$$Type));
}

declare module "com.railwayteam.railways.mixin_interfaces.AnimatedTextureDuck" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $AnimatedTextureDuck$$Type = ($AnimatedTextureDuck | (() => void));
}

declare module "com.railwayteam.railways.mixin_interfaces.ITrueMaxSpeedTrain" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $ITrueMaxSpeedTrain$$Type = ($ITrueMaxSpeedTrain | ((arg0: boolean) => void));
}

declare module "com.railwayteam.railways.mixin_interfaces.ILimited" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $ILimited$$Type = ($ILimited);
}

declare module "com.railwayteam.railways.mixin_interfaces.IOccupiedCouplers" {
import { $Set$$Type } from "java.util.Set"
import { $UUID$$Type } from "java.util.UUID"

/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $IOccupiedCouplers$$Type = ($IOccupiedCouplers | (() => $Set$$Type<$UUID$$Type>));
}

declare module "com.railwayteam.railways.mixin_interfaces.IPotentiallyInvisibleSpriteContents" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $IPotentiallyInvisibleSpriteContents$$Type = ($IPotentiallyInvisibleSpriteContents);
}

declare module "com.railwayteam.railways.mixin_interfaces.ItemStackDuck" {
import { $Item } from "net.minecraft.world.item.Item"

/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $ItemStackDuck$$Type = ($ItemStackDuck | ((arg0: $Item) => void));
}

declare module "com.railwayteam.railways.mixin.AccessorOrientedContraptionEntity" {
import { $StructureTransform$$Type } from "com.simibubi.create.content.contraptions.StructureTransform"

/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $AccessorOrientedContraptionEntity$$Type = ($AccessorOrientedContraptionEntity | (() => $StructureTransform$$Type));
}

declare module "com.railwayteam.railways.mixin_interfaces.ICarriageConductors" {
import { $List$$Type } from "java.util.List"
import { $UUID$$Type } from "java.util.UUID"

/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $ICarriageConductors$$Type = ($ICarriageConductors | (() => $List$$Type<$UUID$$Type>));
}

declare module "com.railwayteam.railways.mixin.AccessorBlockSetType" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $AccessorBlockSetType$$Type = ($AccessorBlockSetType);
}

declare module "com.railwayteam.railways.mixin_interfaces.IShadowTrain" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $IShadowTrain$$Type = ($IShadowTrain);
}

declare module "com.railwayteam.railways.mixin.AccessorTrain" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $AccessorTrain$$Type = ($AccessorTrain);
}

declare module "com.railwayteam.railways.content.switches.TrackSwitch" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $TrackSwitch$$Type = ($TrackSwitch);
}

