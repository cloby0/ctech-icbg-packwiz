declare module "com.railwayteam.railways.mixin_interfaces.IWaypointableNavigation" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $IWaypointableNavigation {
"railways$isWaypointMode"(): boolean
}

export namespace $IWaypointableNavigation {
const probejs$$marker: never
}
export abstract class $IWaypointableNavigation$$Static implements $IWaypointableNavigation {
}
}

declare module "com.railwayteam.railways.mixin.client.AccessorEntity" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $AccessorEntity {
"getXRot"(): float
"getYRot"(): float
"setXRot"(float0: float): void
"setYRot"(float0: float): void
get "xRot"(): float
get "yRot"(): float
set "xRot"(value: float)
set "yRot"(value: float)
}

export namespace $AccessorEntity {
const probejs$$marker: never
}
export abstract class $AccessorEntity$$Static implements $AccessorEntity {
}
}

declare module "com.railwayteam.railways.mixin_interfaces.ICrashAdvancement" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $ICrashAdvancement {
"railways$awardCrashAdvancements"(): void
}

export namespace $ICrashAdvancement {
const probejs$$marker: never
}
export abstract class $ICrashAdvancement$$Static implements $ICrashAdvancement {
}
}

declare module "com.railwayteam.railways.mixin.client.AccessorBogeyStyle" {
import { $Map } from "java.util.Map"
import { $BogeySizes$BogeySize } from "com.simibubi.create.content.trains.bogey.BogeySizes$BogeySize"
import { $BogeyStyle$SizeRenderer } from "com.simibubi.create.content.trains.bogey.BogeyStyle$SizeRenderer"

export interface $AccessorBogeyStyle {
"getSizeRenderers"(): $Map<$BogeySizes$BogeySize, $BogeyStyle$SizeRenderer>
get "sizeRenderers"(): $Map<$BogeySizes$BogeySize, $BogeyStyle$SizeRenderer>
}

export namespace $AccessorBogeyStyle {
const probejs$$marker: never
}
export abstract class $AccessorBogeyStyle$$Static implements $AccessorBogeyStyle {
}
}

declare module "com.railwayteam.railways.mixin_interfaces.IBufferBlockCheckableNavigation" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $IBufferBlockCheckableNavigation {
"railways$updateControlsBlock"(boolean0: boolean): void
}

export namespace $IBufferBlockCheckableNavigation {
const probejs$$marker: never
}
export abstract class $IBufferBlockCheckableNavigation$$Static implements $IBufferBlockCheckableNavigation {
}
}

declare module "com.railwayteam.railways.mixin_interfaces.IFuelInventory" {
import { $MountedFluidStorageWrapper } from "com.simibubi.create.api.contraption.storage.fluid.MountedFluidStorageWrapper"

export interface $IFuelInventory {
"railways$getFluidFuels"(): $MountedFluidStorageWrapper
}

export namespace $IFuelInventory {
const probejs$$marker: never
}
export abstract class $IFuelInventory$$Static implements $IFuelInventory {
}
}

declare module "com.railwayteam.railways.mixin_interfaces.IGenerallySearchableNavigation$PointTest" {
import { $Pair$$Type } from "net.createmod.catnip.data.Pair"
import { $TrackEdge$$Type } from "com.simibubi.create.content.trains.graph.TrackEdge"
import { $Map$$Type } from "java.util.Map"
import { $Couple$$Type } from "net.createmod.catnip.data.Couple"
import { $TrackNode$$Type } from "com.simibubi.create.content.trains.graph.TrackNode"
import { $TrackEdgePoint$$Type } from "com.simibubi.create.content.trains.signal.TrackEdgePoint"

export interface $IGenerallySearchableNavigation$PointTest {
"test"(double0: double, double1: double, map2: $Map$$Type<$TrackEdge$$Type, $Pair$$Type<boolean, $Couple$$Type<$TrackNode$$Type>>>, pair3: $Pair$$Type<$Couple$$Type<$TrackNode$$Type>, $TrackEdge$$Type>, trackEdgePoint4: $TrackEdgePoint$$Type): boolean
}

export namespace $IGenerallySearchableNavigation$PointTest {
const probejs$$marker: never
}
export abstract class $IGenerallySearchableNavigation$PointTest$$Static implements $IGenerallySearchableNavigation$PointTest {
}
}

declare module "com.railwayteam.railways.mixin.AccessorNavigation" {
import { $List } from "java.util.List"
import { $Couple } from "net.createmod.catnip.data.Couple"
import { $TrackNode } from "com.simibubi.create.content.trains.graph.TrackNode"

export interface $AccessorNavigation {
"getCurrentPath"(): $List<$Couple<$TrackNode>>
get "currentPath"(): $List<$Couple<$TrackNode>>
}

export namespace $AccessorNavigation {
const probejs$$marker: never
}
export abstract class $AccessorNavigation$$Static implements $AccessorNavigation {
}
}

declare module "com.railwayteam.railways.mixin.AccessorCarriageBogey" {
import { $AbstractBogeyBlock } from "com.simibubi.create.content.trains.bogey.AbstractBogeyBlock"

export interface $AccessorCarriageBogey {
"getType"(): $AbstractBogeyBlock<any>
get "type"(): $AbstractBogeyBlock<any>
}

export namespace $AccessorCarriageBogey {
const probejs$$marker: never
}
export abstract class $AccessorCarriageBogey$$Static implements $AccessorCarriageBogey {
}
}

declare module "com.railwayteam.railways.mixin_interfaces.ILimitedGlobalStation" {
import { $StationEditPacket } from "com.simibubi.create.content.trains.station.StationEditPacket"
import { $ILimited } from "com.railwayteam.railways.mixin_interfaces.ILimited"
import { $BlockPos$$Type } from "net.minecraft.core.BlockPos"
import { $Train, $Train$$Type } from "com.simibubi.create.content.trains.entity.Train"

export interface $ILimitedGlobalStation extends $ILimited {
"getDisablingTrain"(): $Train
"isLimitEnabled"(): boolean
"isStationEnabled"(): boolean
"orDisablingTrain"(train0: $Train$$Type, train1: $Train$$Type): $Train
"setLimitEnabled"(boolean0: boolean): void
get "disablingTrain"(): $Train
get "limitEnabled"(): boolean
get "stationEnabled"(): boolean
set "limitEnabled"(value: boolean)
}

export namespace $ILimitedGlobalStation {
function makeLimitEnabledPacket(pos: $BlockPos$$Type, limitEnabled: boolean): $StationEditPacket
}
export abstract class $ILimitedGlobalStation$$Static implements $ILimitedGlobalStation {
static "makeLimitEnabledPacket"(pos: $BlockPos$$Type, limitEnabled: boolean): $StationEditPacket
}
}

declare module "com.railwayteam.railways.mixin.AccessorScheduleRuntime" {
import { $Train } from "com.simibubi.create.content.trains.entity.Train"

export interface $AccessorScheduleRuntime {
"getTrain"(): $Train
"setCooldown"(int0: integer): void
get "train"(): $Train
set "cooldown"(value: integer)
}

export namespace $AccessorScheduleRuntime {
const probejs$$marker: never
}
export abstract class $AccessorScheduleRuntime$$Static implements $AccessorScheduleRuntime {
}
}

declare module "com.railwayteam.railways.mixin_interfaces.IBufferBlockedTrain" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $IBufferBlockedTrain {
"railways$getBlockedSign"(): integer
"railways$isControlBlocked"(): boolean
"railways$setControlBlocked"(boolean0: boolean, boolean1: boolean): void
}

export namespace $IBufferBlockedTrain {
const probejs$$marker: never
}
export abstract class $IBufferBlockedTrain$$Static implements $IBufferBlockedTrain {
}
}

declare module "com.railwayteam.railways.mixin_interfaces.IStrictSignalTrain" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $IStrictSignalTrain {
"railways$setStrictSignals"(boolean0: boolean): void
}

export namespace $IStrictSignalTrain {
const probejs$$marker: never
}
export abstract class $IStrictSignalTrain$$Static implements $IStrictSignalTrain {
}
}

declare module "com.railwayteam.railways.mixin.AccessorDataFixTypes" {
import { $DSL$TypeReference } from "com.mojang.datafixers.DSL$TypeReference"

export interface $AccessorDataFixTypes {
"railways$getType"(): $DSL$TypeReference
}

export namespace $AccessorDataFixTypes {
const probejs$$marker: never
}
export abstract class $AccessorDataFixTypes$$Static implements $AccessorDataFixTypes {
}
}

declare module "com.railwayteam.railways.forge.mixin.ChunkMapAccessor" {
import { $Int2ObjectMap } from "it.unimi.dsi.fastutil.ints.Int2ObjectMap"
import { $ChunkMap$TrackedEntity } from "net.minecraft.server.level.ChunkMap$TrackedEntity"

export interface $ChunkMapAccessor {
"getEntityMap"(): $Int2ObjectMap<$ChunkMap$TrackedEntity>
get "entityMap"(): $Int2ObjectMap<$ChunkMap$TrackedEntity>
}

export namespace $ChunkMapAccessor {
const probejs$$marker: never
}
export abstract class $ChunkMapAccessor$$Static implements $ChunkMapAccessor {
}
}

declare module "com.railwayteam.railways.mixin.client.AccessorPartialModel" {
import { $BakedModel$$Type } from "net.minecraft.client.resources.model.BakedModel"

export interface $AccessorPartialModel {
"railways$setBakedModel"(bakedModel0: $BakedModel$$Type): void
}

export namespace $AccessorPartialModel {
const probejs$$marker: never
}
export abstract class $AccessorPartialModel$$Static implements $AccessorPartialModel {
}
}

declare module "com.railwayteam.railways.mixin.AccessorTrackTargetingBehavior" {
import { $CompoundTag, $CompoundTag$$Type } from "net.minecraft.nbt.CompoundTag"
import { $Vec3, $Vec3$$Type } from "net.minecraft.world.phys.Vec3"
import { $BlockPos, $BlockPos$$Type } from "net.minecraft.core.BlockPos"
import { $BezierTrackPointLocation, $BezierTrackPointLocation$$Type } from "com.simibubi.create.content.trains.track.BezierTrackPointLocation"
import { $Direction$AxisDirection, $Direction$AxisDirection$$Type } from "net.minecraft.core.Direction$AxisDirection"
import { $UUID, $UUID$$Type } from "java.util.UUID"
import { $TrackEdgePoint$$Type } from "com.simibubi.create.content.trains.signal.TrackEdgePoint"

export interface $AccessorTrackTargetingBehavior {
"getId"(): $UUID
"getMigrationData"(): $CompoundTag
"getPrevDirection"(): $Vec3
"getRotatedDirection"(): $Vec3
"getTargetBezier"(): $BezierTrackPointLocation
"getTargetDirection"(): $Direction$AxisDirection
"getTargetTrack"(): $BlockPos
"isOrthogonal"(): boolean
"setEdgePoint"(trackEdgePoint0: $TrackEdgePoint$$Type): void
"setId"(uUID0: $UUID$$Type): void
"setMigrationData"(compoundTag0: $CompoundTag$$Type): void
"setOrthogonal"(boolean0: boolean): void
"setPrevDirection"(vec30: $Vec3$$Type): void
"setRotatedDirection"(vec30: $Vec3$$Type): void
"setTargetBezier"(bezierTrackPointLocation0: $BezierTrackPointLocation$$Type): void
"setTargetDirection"(axisDirection0: $Direction$AxisDirection$$Type): void
"setTargetTrack"(blockPos0: $BlockPos$$Type): void
get "id"(): $UUID
get "migrationData"(): $CompoundTag
get "prevDirection"(): $Vec3
get "rotatedDirection"(): $Vec3
get "targetBezier"(): $BezierTrackPointLocation
get "targetDirection"(): $Direction$AxisDirection
get "targetTrack"(): $BlockPos
get "orthogonal"(): boolean
set "edgePoint"(value: $TrackEdgePoint$$Type)
set "id"(value: $UUID$$Type)
set "migrationData"(value: $CompoundTag$$Type)
set "orthogonal"(value: boolean)
set "prevDirection"(value: $Vec3$$Type)
set "rotatedDirection"(value: $Vec3$$Type)
set "targetBezier"(value: $BezierTrackPointLocation$$Type)
set "targetDirection"(value: $Direction$AxisDirection$$Type)
set "targetTrack"(value: $BlockPos$$Type)
}

export namespace $AccessorTrackTargetingBehavior {
const probejs$$marker: never
}
export abstract class $AccessorTrackTargetingBehavior$$Static implements $AccessorTrackTargetingBehavior {
}
}

declare module "com.railwayteam.railways.forge.mixin.ContainerLevelAccessMixin" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $ContainerLevelAccessMixin {
}

export namespace $ContainerLevelAccessMixin {
const probejs$$marker: never
}
export abstract class $ContainerLevelAccessMixin$$Static implements $ContainerLevelAccessMixin {
}
}

declare module "com.railwayteam.railways.api.bogeymenu.v0.forge.BogeyMenuEvents$EntryRegistrationEvent" {
import { $Event } from "net.minecraftforge.eventbus.api.Event"

export class $BogeyMenuEvents$EntryRegistrationEvent extends $Event {
constructor()

}
}

declare module "com.railwayteam.railways.mixin.AccessorAbstractContraptionEntity" {
import { $StructureTransform$$Type } from "com.simibubi.create.content.contraptions.StructureTransform"

export interface $AccessorAbstractContraptionEntity {
"railways$moveCollidedEntitiesOnDisassembly"(structureTransform0: $StructureTransform$$Type): void
"railways$setSkipActorStop"(boolean0: boolean): void
}

export namespace $AccessorAbstractContraptionEntity {
const probejs$$marker: never
}
export abstract class $AccessorAbstractContraptionEntity$$Static implements $AccessorAbstractContraptionEntity {
}
}

declare module "com.railwayteam.railways.content.switches.TrackSwitchBlock$SwitchConstraint" {
import { $Enum } from "java.lang.Enum"

export class $TrackSwitchBlock$SwitchConstraint extends $Enum<$TrackSwitchBlock$SwitchConstraint> {
static readonly "NONE": $TrackSwitchBlock$SwitchConstraint
static readonly "TO_LEFT": $TrackSwitchBlock$SwitchConstraint
static readonly "TO_RIGHT": $TrackSwitchBlock$SwitchConstraint

public "canGoLeft"(): boolean
public "canGoRight"(): boolean
public static "valueOf"(name: string): $TrackSwitchBlock$SwitchConstraint
public static "values"(): $TrackSwitchBlock$SwitchConstraint[]
}
}

declare module "com.railwayteam.railways.mixin_interfaces.ICarriageBufferDistanceTracker" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $ICarriageBufferDistanceTracker {
"railways$getLeadingDistance"(): integer
"railways$getTrailingDistance"(): integer
"railways$setLeadingDistance"(int0: integer): void
"railways$setTrailingDistance"(int0: integer): void
}

export namespace $ICarriageBufferDistanceTracker {
const probejs$$marker: never
}
export abstract class $ICarriageBufferDistanceTracker$$Static implements $ICarriageBufferDistanceTracker {
}
}

declare module "com.railwayteam.railways.mixin.client.AccessorLevelRenderer" {
import { $RenderBuffers } from "net.minecraft.client.renderer.RenderBuffers"
import { $ParticleOptions$$Type } from "net.minecraft.core.particles.ParticleOptions"
import { $Particle } from "net.minecraft.client.particle.Particle"

export interface $AccessorLevelRenderer {
"callAddParticleInternal"(particleOptions0: $ParticleOptions$$Type, boolean1: boolean, boolean2: boolean, double3: double, double4: double, double5: double, double6: double, double7: double, double8: double): $Particle
"railways$getRenderBuffers"(): $RenderBuffers
}

export namespace $AccessorLevelRenderer {
const probejs$$marker: never
}
export abstract class $AccessorLevelRenderer$$Static implements $AccessorLevelRenderer {
}
}

declare module "com.railwayteam.railways.mixin_interfaces.IIndexedSchedule" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $IIndexedSchedule {
"railways$getIndex"(): integer
"railways$setIndex"(int0: integer): void
}

export namespace $IIndexedSchedule {
const probejs$$marker: never
}
export abstract class $IIndexedSchedule$$Static implements $IIndexedSchedule {
}
}

declare module "com.railwayteam.railways.mixin_interfaces.IHasTrackCasing" {
import { $BlockPos$$Type } from "net.minecraft.core.BlockPos"
import { $Block, $Block$$Type } from "net.minecraft.world.level.block.Block"
import { $Level$$Type } from "net.minecraft.world.level.Level"

export interface $IHasTrackCasing {
"railways$getTrackCasing"(): $Block
"railways$isAlternate"(): boolean
"railways$setAlternate"(alternate: boolean): void
"railways$setTrackCasing"(block0: $Block$$Type): void
}

export namespace $IHasTrackCasing {
function getTrackCasing(world: $Level$$Type, pos: $BlockPos$$Type): $Block
function isAlternate(world: $Level$$Type, pos: $BlockPos$$Type): boolean
function setAlternateModel(world: $Level$$Type, pos: $BlockPos$$Type, useAlternateModel: boolean): boolean
function setTrackCasing(world: $Level$$Type, pos: $BlockPos$$Type, trackCasing: $Block$$Type): void
}
export abstract class $IHasTrackCasing$$Static implements $IHasTrackCasing {
static "getTrackCasing"(world: $Level$$Type, pos: $BlockPos$$Type): $Block
static "isAlternate"(world: $Level$$Type, pos: $BlockPos$$Type): boolean
static "setAlternateModel"(world: $Level$$Type, pos: $BlockPos$$Type, useAlternateModel: boolean): boolean
static "setTrackCasing"(world: $Level$$Type, pos: $BlockPos$$Type, trackCasing: $Block$$Type): void
}
}

declare module "com.railwayteam.railways.mixin_interfaces.IDistanceTravelled" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $IDistanceTravelled {
"railways$getDistanceTravelled"(): double
}

export namespace $IDistanceTravelled {
const probejs$$marker: never
}
export abstract class $IDistanceTravelled$$Static implements $IDistanceTravelled {
}
}

declare module "com.railwayteam.railways.mixin_interfaces.ISwitchDisabledEdge" {
import { $TrackEdge$$Type } from "com.simibubi.create.content.trains.graph.TrackEdge"

export interface $ISwitchDisabledEdge {
"ackAutomaticSelection"(): void
"getAutomaticallySelectedPriority"(): integer
"isAutomatic"(): boolean
"isAutomaticallySelected"(): boolean
"isEnabled"(): boolean
"setAutomatic"(boolean0: boolean): void
"setAutomaticallySelected"(): void
"setEnabled"(boolean0: boolean): void
get "automaticallySelectedPriority"(): integer
get "automatic"(): boolean
get "automaticallySelected"(): boolean
get "enabled"(): boolean
set "automatic"(value: boolean)
set "enabled"(value: boolean)
}

export namespace $ISwitchDisabledEdge {
function automaticallySelect(edge: $TrackEdge$$Type): void
function isAutomatic(edge: $TrackEdge$$Type): boolean
function isDisabled(edge: $TrackEdge$$Type): boolean
function isEnabled(edge: $TrackEdge$$Type): boolean
}
export abstract class $ISwitchDisabledEdge$$Static implements $ISwitchDisabledEdge {
static "automaticallySelect"(edge: $TrackEdge$$Type): void
static "isAutomatic"(edge: $TrackEdge$$Type): boolean
static "isDisabled"(edge: $TrackEdge$$Type): boolean
static "isEnabled"(edge: $TrackEdge$$Type): boolean
}
}

declare module "com.railwayteam.railways.mixin_interfaces.IContraptionFuel" {
import { $MountedFluidStorageWrapper } from "com.simibubi.create.api.contraption.storage.fluid.MountedFluidStorageWrapper"

export interface $IContraptionFuel {
"railways$getFluidFuels"(): $MountedFluidStorageWrapper
}

export namespace $IContraptionFuel {
const probejs$$marker: never
}
export abstract class $IContraptionFuel$$Static implements $IContraptionFuel {
}
}

declare module "com.railwayteam.railways.mixin.AccessorBlockEntityType" {
import { $Set, $Set$$Type } from "java.util.Set"
import { $Block, $Block$$Type } from "net.minecraft.world.level.block.Block"

export interface $AccessorBlockEntityType {
"getValidBlocks"(): $Set<$Block>
"setValidBlocks"(set0: $Set$$Type<$Block$$Type>): void
get "validBlocks"(): $Set<$Block>
set "validBlocks"(value: $Set$$Type<$Block$$Type>)
}

export namespace $AccessorBlockEntityType {
const probejs$$marker: never
}
export abstract class $AccessorBlockEntityType$$Static implements $AccessorBlockEntityType {
}
}

declare module "com.railwayteam.railways.forge.mixin.ChunkMapAccessor$TrackedEntityAccessor" {
import { $ServerPlayerConnection } from "net.minecraft.server.network.ServerPlayerConnection"
import { $Set } from "java.util.Set"

export interface $ChunkMapAccessor$TrackedEntityAccessor {
"getSeenBy"(): $Set<$ServerPlayerConnection>
get "seenBy"(): $Set<$ServerPlayerConnection>
}

export namespace $ChunkMapAccessor$TrackedEntityAccessor {
const probejs$$marker: never
}
export abstract class $ChunkMapAccessor$TrackedEntityAccessor$$Static implements $ChunkMapAccessor$TrackedEntityAccessor {
}
}

declare module "com.railwayteam.railways.mixin_interfaces.IGenerallySearchableNavigation" {
import { $Pair } from "net.createmod.catnip.data.Pair"
import { $TrackSwitchBlock$SwitchState } from "com.railwayteam.railways.content.switches.TrackSwitchBlock$SwitchState"
import { $IGenerallySearchableNavigation$PointTest$$Type } from "com.railwayteam.railways.mixin_interfaces.IGenerallySearchableNavigation$PointTest"
import { $TrackSwitch } from "com.railwayteam.railways.content.switches.TrackSwitch"
import { $Optional } from "java.util.Optional"

export interface $IGenerallySearchableNavigation {
"railways$findNearestApproachableSwitch"(boolean0: boolean): $Pair<$TrackSwitch, $Pair<boolean, $Optional<$TrackSwitchBlock$SwitchState>>>
"railways$searchGeneral"(double0: double, double1: double, boolean2: boolean, pointTest3: $IGenerallySearchableNavigation$PointTest$$Type): void
"railways$searchGeneral"(double0: double, boolean1: boolean, pointTest2: $IGenerallySearchableNavigation$PointTest$$Type): void
}

export namespace $IGenerallySearchableNavigation {
const probejs$$marker: never
}
export abstract class $IGenerallySearchableNavigation$$Static implements $IGenerallySearchableNavigation {
}
}

declare module "com.railwayteam.railways.mixin_interfaces.IUpdateCount" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $IUpdateCount {
"railways$fromParent"(iUpdateCount0: $IUpdateCount$$Type): void
"railways$getUpdateCount"(): integer
"railways$markUpdate"(): void
}

export namespace $IUpdateCount {
function outOfSync(a: $IUpdateCount$$Type, b: $IUpdateCount$$Type): boolean
}
export abstract class $IUpdateCount$$Static implements $IUpdateCount {
static "outOfSync"(a: $IUpdateCount$$Type, b: $IUpdateCount$$Type): boolean
}
}

declare module "com.railwayteam.railways.mixin.client.AccessorWalkAnimationState" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $AccessorWalkAnimationState {
"getSpeedOld"(): float
"setPosition"(float0: float): void
"setSpeedOld"(float0: float): void
get "speedOld"(): float
set "position"(value: float)
set "speedOld"(value: float)
}

export namespace $AccessorWalkAnimationState {
const probejs$$marker: never
}
export abstract class $AccessorWalkAnimationState$$Static implements $AccessorWalkAnimationState {
}
}

declare module "com.railwayteam.railways.mixin_interfaces.IPreAssembleCallback" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $IPreAssembleCallback {
"railways$preAssemble"(): void
}

export namespace $IPreAssembleCallback {
const probejs$$marker: never
}
export abstract class $IPreAssembleCallback$$Static implements $IPreAssembleCallback {
}
}

declare module "com.railwayteam.railways.mixin.AccessorCarriageContraptionEntity" {
import { $Carriage$$Type } from "com.simibubi.create.content.trains.entity.Carriage"

export interface $AccessorCarriageContraptionEntity {
"railways$bindCarriage"(): void
"railways$setCarriage"(carriage0: $Carriage$$Type): void
}

export namespace $AccessorCarriageContraptionEntity {
const probejs$$marker: never
}
export abstract class $AccessorCarriageContraptionEntity$$Static implements $AccessorCarriageContraptionEntity {
}
}

declare module "com.railwayteam.railways.mixin.AccessorBlockEntity" {
import { $BlockPos$$Type } from "net.minecraft.core.BlockPos"

export interface $AccessorBlockEntity {
"setWorldPosition"(blockPos0: $BlockPos$$Type): void
set "worldPosition"(value: $BlockPos$$Type)
}

export namespace $AccessorBlockEntity {
const probejs$$marker: never
}
export abstract class $AccessorBlockEntity$$Static implements $AccessorBlockEntity {
}
}

declare module "com.railwayteam.railways.mixin.client.AccessorMinecraft" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $AccessorMinecraft {
"railways$openChatScreen"(string0: string): void
}

export namespace $AccessorMinecraft {
const probejs$$marker: never
}
export abstract class $AccessorMinecraft$$Static implements $AccessorMinecraft {
}
}

declare module "com.railwayteam.railways.mixin.AccessorCarriage" {
import { $CompoundTag } from "net.minecraft.nbt.CompoundTag"
import { $Map } from "java.util.Map"
import { $Carriage$DimensionalCarriageEntity } from "com.simibubi.create.content.trains.entity.Carriage$DimensionalCarriageEntity"
import { $Level } from "net.minecraft.world.level.Level"
import { $ResourceKey } from "net.minecraft.resources.ResourceKey"

export interface $AccessorCarriage {
"getSerialisedPassengers"(): $Map<integer, $CompoundTag>
"railways$getEntities"(): $Map<$ResourceKey<$Level>, $Carriage$DimensionalCarriageEntity>
get "serialisedPassengers"(): $Map<integer, $CompoundTag>
}

export namespace $AccessorCarriage {
const probejs$$marker: never
}
export abstract class $AccessorCarriage$$Static implements $AccessorCarriage {
}
}

declare module "com.railwayteam.railways.content.switches.TrackSwitchBlock$SwitchState" {
import { $Enum, $Enum$$Type } from "java.lang.Enum"
import { $StringRepresentable, $StringRepresentable$$Type } from "net.minecraft.util.StringRepresentable"
import { $TrackSwitch$$Type } from "com.railwayteam.railways.content.switches.TrackSwitch"
import { $StringRepresentable$EnumCodec } from "net.minecraft.util.StringRepresentable$EnumCodec"
import { $TrackSwitchBlock$SwitchConstraint$$Type } from "com.railwayteam.railways.content.switches.TrackSwitchBlock$SwitchConstraint"
import { $Keyable } from "com.mojang.serialization.Keyable"
import { $TravellingPoint$SteerDirection$$Type } from "com.simibubi.create.content.trains.entity.TravellingPoint$SteerDirection"
import { $Supplier$$Type } from "java.util.function.Supplier"
import { $Function$$Type } from "java.util.function.Function"

export class $TrackSwitchBlock$SwitchState extends $Enum<$TrackSwitchBlock$SwitchState> implements $StringRepresentable {
static readonly "NORMAL": $TrackSwitchBlock$SwitchState
static readonly "REVERSE_LEFT": $TrackSwitchBlock$SwitchState
static readonly "REVERSE_RIGHT": $TrackSwitchBlock$SwitchState

public "canSwitchTo"(next: $TrackSwitchBlock$SwitchState$$Type, constraint: $TrackSwitchBlock$SwitchConstraint$$Type): boolean
public static "fromEnum"<E extends ($Enum<E> & $StringRepresentable)>(supplier0: $Supplier$$Type<E[]>): $StringRepresentable$EnumCodec<E>
public static "fromEnumWithMapping"<E extends ($Enum<E> & $StringRepresentable)>(supplier0: $Supplier$$Type<E[]>, function1: $Function$$Type<string, string>): $StringRepresentable$EnumCodec<E>
public static "fromSteerDirection"(direction: $TravellingPoint$SteerDirection$$Type, forward: boolean): $TrackSwitchBlock$SwitchState
public "getSerializedName"(): string
public static "keys"(stringRepresentable0s: $StringRepresentable$$Type[]): $Keyable
public "nextStateFor"(sw: $TrackSwitch$$Type, constraint: $TrackSwitchBlock$SwitchConstraint$$Type): $TrackSwitchBlock$SwitchState
public "nextStateForPonder"(constraint: $TrackSwitchBlock$SwitchConstraint$$Type): $TrackSwitchBlock$SwitchState
public static "valueOf"(name: string): $TrackSwitchBlock$SwitchState
public static "values"(): $TrackSwitchBlock$SwitchState[]
get "serializedName"(): string
}
}

declare module "com.railwayteam.railways.mixin.client.AccessorLivingEntityRenderer" {
import { $LivingEntity, $LivingEntity$$Type } from "net.minecraft.world.entity.LivingEntity"
import { $PoseStack$$Type } from "com.mojang.blaze3d.vertex.PoseStack"

export interface $AccessorLivingEntityRenderer<T extends $LivingEntity = $LivingEntity> {
"callSetupRotations"(t0: T, poseStack1: $PoseStack$$Type, float2: float, float3: float, float4: float): void
}

export namespace $AccessorLivingEntityRenderer {
const probejs$$marker: never
}
export abstract class $AccessorLivingEntityRenderer$$Static<T extends $LivingEntity = $LivingEntity> implements $AccessorLivingEntityRenderer<T> {
}
}

declare module "com.railwayteam.railways.mixin_interfaces.IHandcarTrain" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $IHandcarTrain {
"railways$isHandcar"(): boolean
"railways$setHandcar"(boolean0: boolean): void
}

export namespace $IHandcarTrain {
const probejs$$marker: never
}
export abstract class $IHandcarTrain$$Static implements $IHandcarTrain {
}
}

declare module "com.railwayteam.railways.mixin.conductor_possession.AccessorKeyMapping" {
import { $InputConstants$Key } from "com.mojang.blaze3d.platform.InputConstants$Key"

export interface $AccessorKeyMapping {
"getKey"(): $InputConstants$Key
get "key"(): $InputConstants$Key
}

export namespace $AccessorKeyMapping {
const probejs$$marker: never
}
export abstract class $AccessorKeyMapping$$Static implements $AccessorKeyMapping {
}
}

declare module "com.railwayteam.railways.mixin_interfaces.AnimatedTextureDuck" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $AnimatedTextureDuck {
"railways$uploadWithVisibility"(): void
}

export namespace $AnimatedTextureDuck {
const probejs$$marker: never
}
export abstract class $AnimatedTextureDuck$$Static implements $AnimatedTextureDuck {
}
}

declare module "com.railwayteam.railways.mixin_interfaces.ITrueMaxSpeedTrain" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $ITrueMaxSpeedTrain {
"railways$setLimitBypass"(boolean0: boolean): void
}

export namespace $ITrueMaxSpeedTrain {
const probejs$$marker: never
}
export abstract class $ITrueMaxSpeedTrain$$Static implements $ITrueMaxSpeedTrain {
}
}

declare module "com.railwayteam.railways.mixin_interfaces.ILimited" {
import { $StationEditPacket } from "com.simibubi.create.content.trains.station.StationEditPacket"
import { $BlockPos$$Type } from "net.minecraft.core.BlockPos"

export interface $ILimited {
"isLimitEnabled"(): boolean
"setLimitEnabled"(boolean0: boolean): void
get "limitEnabled"(): boolean
set "limitEnabled"(value: boolean)
}

export namespace $ILimited {
function makeLimitEnabledPacket(pos: $BlockPos$$Type, limitEnabled: boolean): $StationEditPacket
}
export abstract class $ILimited$$Static implements $ILimited {
static "makeLimitEnabledPacket"(pos: $BlockPos$$Type, limitEnabled: boolean): $StationEditPacket
}
}

declare module "com.railwayteam.railways.mixin_interfaces.IOccupiedCouplers" {
import { $Set } from "java.util.Set"
import { $UUID } from "java.util.UUID"

export interface $IOccupiedCouplers {
"railways$getOccupiedCouplers"(): $Set<$UUID>
}

export namespace $IOccupiedCouplers {
const probejs$$marker: never
}
export abstract class $IOccupiedCouplers$$Static implements $IOccupiedCouplers {
}
}

declare module "com.railwayteam.railways.mixin_interfaces.IPotentiallyInvisibleSpriteContents" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $IPotentiallyInvisibleSpriteContents {
"railways$isVisible"(): boolean
"railways$shouldDoInvisibility"(): boolean
"railways$uploadFrame"(boolean0: boolean): void
}

export namespace $IPotentiallyInvisibleSpriteContents {
const probejs$$marker: never
}
export abstract class $IPotentiallyInvisibleSpriteContents$$Static implements $IPotentiallyInvisibleSpriteContents {
}
}

declare module "com.railwayteam.railways.mixin_interfaces.ItemStackDuck" {
import { $Item$$Type } from "net.minecraft.world.item.Item"

export interface $ItemStackDuck {
"railways$setItem"(item0: $Item$$Type): void
}

export namespace $ItemStackDuck {
const probejs$$marker: never
}
export abstract class $ItemStackDuck$$Static implements $ItemStackDuck {
}
}

declare module "com.railwayteam.railways.mixin.AccessorOrientedContraptionEntity" {
import { $StructureTransform } from "com.simibubi.create.content.contraptions.StructureTransform"

export interface $AccessorOrientedContraptionEntity {
"railways$makeStructureTransform"(): $StructureTransform
}

export namespace $AccessorOrientedContraptionEntity {
const probejs$$marker: never
}
export abstract class $AccessorOrientedContraptionEntity$$Static implements $AccessorOrientedContraptionEntity {
}
}

declare module "com.railwayteam.railways.mixin_interfaces.ICarriageConductors" {
import { $List } from "java.util.List"
import { $UUID } from "java.util.UUID"

export interface $ICarriageConductors {
"railways$getControllingConductors"(): $List<$UUID>
}

export namespace $ICarriageConductors {
const probejs$$marker: never
}
export abstract class $ICarriageConductors$$Static implements $ICarriageConductors {
}
}

declare module "com.railwayteam.railways.mixin.AccessorBlockSetType" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $AccessorBlockSetType {
}

export namespace $AccessorBlockSetType {
const probejs$$marker: never
}
export abstract class $AccessorBlockSetType$$Static implements $AccessorBlockSetType {
}
}

declare module "com.railwayteam.railways.mixin_interfaces.IShadowTrain" {
import { $ResourceLocation, $ResourceLocation$$Type } from "net.minecraft.resources.ResourceLocation"

export interface $IShadowTrain {
"railways$clearShadow"(): void
"railways$getShadowKey"(): $ResourceLocation
"railways$isShadow"(): boolean
"railways$setShadow"(resourceLocation0: $ResourceLocation$$Type): void
}

export namespace $IShadowTrain {
const probejs$$marker: never
}
export abstract class $IShadowTrain$$Static implements $IShadowTrain {
}
}

declare module "com.railwayteam.railways.mixin.AccessorTrain" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $AccessorTrain {
"railways$getStress"(): double[]
"railways$setStress"(double0s: double[]): void
}

export namespace $AccessorTrain {
const probejs$$marker: never
}
export abstract class $AccessorTrain$$Static implements $AccessorTrain {
}
}

declare module "com.railwayteam.railways.content.switches.TrackSwitch" {
import { $TrackNodeLocation, $TrackNodeLocation$$Type } from "com.simibubi.create.content.trains.graph.TrackNodeLocation"
import { $TrackSwitchBlock$SwitchState, $TrackSwitchBlock$SwitchState$$Type } from "com.railwayteam.railways.content.switches.TrackSwitchBlock$SwitchState"
import { $TrackGraph$$Type } from "com.simibubi.create.content.trains.graph.TrackGraph"
import { $SingleBlockEntityEdgePoint } from "com.simibubi.create.content.trains.signal.SingleBlockEntityEdgePoint"

export class $TrackSwitch extends $SingleBlockEntityEdgePoint {
constructor()

public static "getSelectionPriority"(): integer
public "getSwitchState"(): $TrackSwitchBlock$SwitchState
public "getSwitchTarget"(): $TrackNodeLocation
public "getTargetState"(loc: $TrackNodeLocation$$Type): $TrackSwitchBlock$SwitchState
public "hasLeftExit"(): boolean
public "hasRightExit"(): boolean
public "hasStraightExit"(): boolean
public "isAutomatic"(): boolean
public "isLocked"(): boolean
public "setEdgesActive"(graph: $TrackGraph$$Type): void
public "setSwitchState"(state: $TrackSwitchBlock$SwitchState$$Type): boolean
public "shouldAutoTrainsSwitch"(): boolean
public "trySetSwitchState"(state: $TrackSwitchBlock$SwitchState$$Type): boolean
public "updateEdges"(graph: $TrackGraph$$Type): void
get "switchState"(): $TrackSwitchBlock$SwitchState
get "switchTarget"(): $TrackNodeLocation
get "automatic"(): boolean
get "locked"(): boolean
set "edgesActive"(value: $TrackGraph$$Type)
set "switchState"(value: $TrackSwitchBlock$SwitchState$$Type)
}
}

