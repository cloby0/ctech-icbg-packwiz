declare module "net.minecraft.world.level.material.WaterFluid$Source" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $WaterFluid$Source$$Type = ($WaterFluid$Source);
}

declare module "net.minecraft.world.level.material.LavaFluid$Flowing" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $LavaFluid$Flowing$$Type = ($LavaFluid$Flowing);
}

declare module "net.minecraft.world.level.material.LavaFluid$Source" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $LavaFluid$Source$$Type = ($LavaFluid$Source);
}

declare module "net.minecraft.world.level.material.FogType" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $FogType$$Type = ($FogType | ("lava" | "water" | "powder_snow" | "none"));
}

declare module "net.minecraft.world.level.material.FluidState" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $FluidState$$Type = ($FluidState);
}

declare module "net.minecraft.world.level.material.WaterFluid$Flowing" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $WaterFluid$Flowing$$Type = ($WaterFluid$Flowing);
}

declare module "net.minecraft.world.level.material.MapColor$Brightness" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $MapColor$Brightness$$Type = ($MapColor$Brightness | ("low" | "normal" | "high" | "lowest"));
}

declare module "net.minecraft.world.level.material.PushReaction" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $PushReaction$$Type = ($PushReaction | ("normal" | "destroy" | "block" | "ignore" | "push_only"));
}

declare module "net.minecraft.world.level.material.Fluid" {
import { $ResourceLocation } from "net.minecraft.resources.ResourceLocation"
import { $LivingEntity$$Type } from "net.minecraft.world.entity.LivingEntity"
import { $Item } from "net.minecraft.world.item.Item"
import { $BlockState$$Type } from "net.minecraft.world.level.block.state.BlockState"
import { $IForgeFluid } from "net.minecraftforge.common.extensions.IForgeFluid"
import { $FluidType } from "net.minecraftforge.fluids.FluidType"
import { $InjectedFluidExtension } from "dev.architectury.extensions.injected.InjectedFluidExtension"
import { $TagKey$$Type } from "net.minecraft.tags.TagKey"
import { $BlockGetter$$Type } from "net.minecraft.world.level.BlockGetter"
import { $Holder } from "net.minecraft.core.Holder"
import { $StateDefinition } from "net.minecraft.world.level.block.state.StateDefinition"
import { $BlockPathTypes, $BlockPathTypes$$Type } from "net.minecraft.world.level.pathfinder.BlockPathTypes"
import { $LevelReader$$Type } from "net.minecraft.world.level.LevelReader"
import { $Explosion$$Type } from "net.minecraft.world.level.Explosion"
import { $Holder$Reference } from "net.minecraft.core.Holder$Reference"
import { $IdMapper } from "net.minecraft.core.IdMapper"
import { $Entity$$Type } from "net.minecraft.world.entity.Entity"
import { $BlockPos$$Type } from "net.minecraft.core.BlockPos"
import { $SoundEvent } from "net.minecraft.sounds.SoundEvent"
import { $Vec3$$Type } from "net.minecraft.world.phys.Vec3"
import { $Boat$$Type } from "net.minecraft.world.entity.vehicle.Boat"
import { $FluidState, $FluidState$$Type } from "net.minecraft.world.level.material.FluidState"
import { $Optional } from "java.util.Optional"
import { $Level$$Type } from "net.minecraft.world.level.Level"
import { $Mob$$Type } from "net.minecraft.world.entity.Mob"
import { $VoxelShape } from "net.minecraft.world.phys.shapes.VoxelShape"

export class $Fluid implements $IForgeFluid, $InjectedFluidExtension {
static readonly "FLUID_STATE_REGISTRY": $IdMapper<$FluidState>

public "arch$holder"(): $Holder<$Fluid>
public "arch$registryName"(): $ResourceLocation
/** @deprecated */
public "builtInRegistryHolder"(): $Holder$Reference<$Fluid>
public "canConvertToSource"(fluidState0: $FluidState$$Type, level1: $Level$$Type, blockPos2: $BlockPos$$Type): boolean
public "canExtinguish"(fluidState0: $FluidState$$Type, blockGetter1: $BlockGetter$$Type, blockPos2: $BlockPos$$Type): boolean
public "canHydrate"(fluidState0: $FluidState$$Type, blockGetter1: $BlockGetter$$Type, blockPos2: $BlockPos$$Type, blockState3: $BlockState$$Type, blockPos4: $BlockPos$$Type): boolean
public "defaultFluidState"(): $FluidState
public "getAdjacentBlockPathType"(fluidState0: $FluidState$$Type, blockGetter1: $BlockGetter$$Type, blockPos2: $BlockPos$$Type, mob3: $Mob$$Type, blockPathTypes4: $BlockPathTypes$$Type): $BlockPathTypes
public "getAmount"(fluidState0: $FluidState$$Type): integer
public "getBlockPathType"(fluidState0: $FluidState$$Type, blockGetter1: $BlockGetter$$Type, blockPos2: $BlockPos$$Type, mob3: $Mob$$Type, boolean4: boolean): $BlockPathTypes
public "getBucket"(): $Item
public "getExplosionResistance"(fluidState0: $FluidState$$Type, blockGetter1: $BlockGetter$$Type, blockPos2: $BlockPos$$Type, explosion3: $Explosion$$Type): float
public "getFluidType"(): $FluidType
public "getHeight"(fluidState0: $FluidState$$Type, blockGetter1: $BlockGetter$$Type, blockPos2: $BlockPos$$Type): float
public "getOwnHeight"(fluidState0: $FluidState$$Type): float
public "getPickupSound"(): $Optional<$SoundEvent>
public "getShape"(fluidState0: $FluidState$$Type, blockGetter1: $BlockGetter$$Type, blockPos2: $BlockPos$$Type): $VoxelShape
public "getStateDefinition"(): $StateDefinition<$Fluid, $FluidState>
public "getTickDelay"(levelReader0: $LevelReader$$Type): integer
/** @deprecated */
public "is"(tagKey0: $TagKey$$Type<$Fluid$$Type>): boolean
public "isEmpty"(): boolean
public "isSame"(fluid0: $Fluid$$Type): boolean
public "isSource"(fluidState0: $FluidState$$Type): boolean
public "move"(fluidState0: $FluidState$$Type, livingEntity1: $LivingEntity$$Type, vec32: $Vec3$$Type, double3: double): boolean
public "shouldUpdateWhileBoating"(fluidState0: $FluidState$$Type, boat1: $Boat$$Type, entity2: $Entity$$Type): boolean
public "supportsBoating"(fluidState0: $FluidState$$Type, boat1: $Boat$$Type): boolean
get "bucket"(): $Item
get "fluidType"(): $FluidType
get "pickupSound"(): $Optional<$SoundEvent>
get "stateDefinition"(): $StateDefinition<$Fluid, $FluidState>
get "empty"(): boolean
/** This field is a type stub generated by ProbeJS and shall not be used in any sense. */
"probejsInternal$$Literal": Special.Fluid
/** This field is a type stub generated by ProbeJS and shall not be used in any sense. */
"probejsInternal$$Tag": Special.FluidTag
}
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $Fluid$$Type = ($Fluid | Special.Fluid);
}

declare module "net.minecraft.world.level.material.EmptyFluid" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $EmptyFluid$$Type = ($EmptyFluid);
}

declare module "net.minecraft.world.level.material.WaterFluid" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $WaterFluid$$Type = ($WaterFluid);
}

declare module "net.minecraft.world.level.material.LavaFluid" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $LavaFluid$$Type = ($LavaFluid);
}

declare module "net.minecraft.world.level.material.FlowingFluid" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $FlowingFluid$$Type = ($FlowingFluid);
}

declare module "net.minecraft.world.level.material.MapColor" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $MapColor$$Type = ($MapColor);
}

