declare module "net.minecraft.world.level.material.WaterFluid$Source" {
import { $ResourceLocation } from "net.minecraft.resources.ResourceLocation"
import { $WaterFluid } from "net.minecraft.world.level.material.WaterFluid"
import { $LivingEntity$$Type } from "net.minecraft.world.entity.LivingEntity"
import { $BlockPathTypes, $BlockPathTypes$$Type } from "net.minecraft.world.level.pathfinder.BlockPathTypes"
import { $BlockState$$Type } from "net.minecraft.world.level.block.state.BlockState"
import { $Explosion$$Type } from "net.minecraft.world.level.Explosion"
import { $BlockGetter$$Type } from "net.minecraft.world.level.BlockGetter"
import { $Holder } from "net.minecraft.core.Holder"
import { $Entity$$Type } from "net.minecraft.world.entity.Entity"
import { $BlockPos$$Type } from "net.minecraft.core.BlockPos"
import { $Vec3$$Type } from "net.minecraft.world.phys.Vec3"
import { $Boat$$Type } from "net.minecraft.world.entity.vehicle.Boat"
import { $FluidState$$Type } from "net.minecraft.world.level.material.FluidState"
import { $Fluid } from "net.minecraft.world.level.material.Fluid"
import { $Mob$$Type } from "net.minecraft.world.entity.Mob"

export class $WaterFluid$Source extends $WaterFluid {
constructor()

public "arch$holder"(): $Holder<$Fluid>
public "arch$registryName"(): $ResourceLocation
public "canExtinguish"(fluidState0: $FluidState$$Type, blockGetter1: $BlockGetter$$Type, blockPos2: $BlockPos$$Type): boolean
public "canHydrate"(fluidState0: $FluidState$$Type, blockGetter1: $BlockGetter$$Type, blockPos2: $BlockPos$$Type, blockState3: $BlockState$$Type, blockPos4: $BlockPos$$Type): boolean
public "getAdjacentBlockPathType"(fluidState0: $FluidState$$Type, blockGetter1: $BlockGetter$$Type, blockPos2: $BlockPos$$Type, mob3: $Mob$$Type, blockPathTypes4: $BlockPathTypes$$Type): $BlockPathTypes
public "getBlockPathType"(fluidState0: $FluidState$$Type, blockGetter1: $BlockGetter$$Type, blockPos2: $BlockPos$$Type, mob3: $Mob$$Type, boolean4: boolean): $BlockPathTypes
public "getExplosionResistance"(fluidState0: $FluidState$$Type, blockGetter1: $BlockGetter$$Type, blockPos2: $BlockPos$$Type, explosion3: $Explosion$$Type): float
public "move"(fluidState0: $FluidState$$Type, livingEntity1: $LivingEntity$$Type, vec32: $Vec3$$Type, double3: double): boolean
public "shouldUpdateWhileBoating"(fluidState0: $FluidState$$Type, boat1: $Boat$$Type, entity2: $Entity$$Type): boolean
public "supportsBoating"(fluidState0: $FluidState$$Type, boat1: $Boat$$Type): boolean
}
}

declare module "net.minecraft.world.level.material.LavaFluid$Flowing" {
import { $ResourceLocation } from "net.minecraft.resources.ResourceLocation"
import { $LivingEntity$$Type } from "net.minecraft.world.entity.LivingEntity"
import { $BlockPathTypes, $BlockPathTypes$$Type } from "net.minecraft.world.level.pathfinder.BlockPathTypes"
import { $BlockState$$Type } from "net.minecraft.world.level.block.state.BlockState"
import { $Explosion$$Type } from "net.minecraft.world.level.Explosion"
import { $BlockGetter$$Type } from "net.minecraft.world.level.BlockGetter"
import { $Holder } from "net.minecraft.core.Holder"
import { $Entity$$Type } from "net.minecraft.world.entity.Entity"
import { $BlockPos$$Type } from "net.minecraft.core.BlockPos"
import { $Vec3$$Type } from "net.minecraft.world.phys.Vec3"
import { $Boat$$Type } from "net.minecraft.world.entity.vehicle.Boat"
import { $FluidState$$Type } from "net.minecraft.world.level.material.FluidState"
import { $Fluid } from "net.minecraft.world.level.material.Fluid"
import { $LavaFluid } from "net.minecraft.world.level.material.LavaFluid"
import { $Mob$$Type } from "net.minecraft.world.entity.Mob"

export class $LavaFluid$Flowing extends $LavaFluid {
constructor()

public "arch$holder"(): $Holder<$Fluid>
public "arch$registryName"(): $ResourceLocation
public "canExtinguish"(fluidState0: $FluidState$$Type, blockGetter1: $BlockGetter$$Type, blockPos2: $BlockPos$$Type): boolean
public "canHydrate"(fluidState0: $FluidState$$Type, blockGetter1: $BlockGetter$$Type, blockPos2: $BlockPos$$Type, blockState3: $BlockState$$Type, blockPos4: $BlockPos$$Type): boolean
public "getAdjacentBlockPathType"(fluidState0: $FluidState$$Type, blockGetter1: $BlockGetter$$Type, blockPos2: $BlockPos$$Type, mob3: $Mob$$Type, blockPathTypes4: $BlockPathTypes$$Type): $BlockPathTypes
public "getBlockPathType"(fluidState0: $FluidState$$Type, blockGetter1: $BlockGetter$$Type, blockPos2: $BlockPos$$Type, mob3: $Mob$$Type, boolean4: boolean): $BlockPathTypes
public "getExplosionResistance"(fluidState0: $FluidState$$Type, blockGetter1: $BlockGetter$$Type, blockPos2: $BlockPos$$Type, explosion3: $Explosion$$Type): float
public "move"(fluidState0: $FluidState$$Type, livingEntity1: $LivingEntity$$Type, vec32: $Vec3$$Type, double3: double): boolean
public "shouldUpdateWhileBoating"(fluidState0: $FluidState$$Type, boat1: $Boat$$Type, entity2: $Entity$$Type): boolean
public "supportsBoating"(fluidState0: $FluidState$$Type, boat1: $Boat$$Type): boolean
}
}

declare module "net.minecraft.world.level.material.LavaFluid$Source" {
import { $ResourceLocation } from "net.minecraft.resources.ResourceLocation"
import { $LivingEntity$$Type } from "net.minecraft.world.entity.LivingEntity"
import { $BlockPathTypes, $BlockPathTypes$$Type } from "net.minecraft.world.level.pathfinder.BlockPathTypes"
import { $BlockState$$Type } from "net.minecraft.world.level.block.state.BlockState"
import { $Explosion$$Type } from "net.minecraft.world.level.Explosion"
import { $BlockGetter$$Type } from "net.minecraft.world.level.BlockGetter"
import { $Holder } from "net.minecraft.core.Holder"
import { $Entity$$Type } from "net.minecraft.world.entity.Entity"
import { $BlockPos$$Type } from "net.minecraft.core.BlockPos"
import { $Vec3$$Type } from "net.minecraft.world.phys.Vec3"
import { $Boat$$Type } from "net.minecraft.world.entity.vehicle.Boat"
import { $FluidState$$Type } from "net.minecraft.world.level.material.FluidState"
import { $Fluid } from "net.minecraft.world.level.material.Fluid"
import { $LavaFluid } from "net.minecraft.world.level.material.LavaFluid"
import { $Mob$$Type } from "net.minecraft.world.entity.Mob"

export class $LavaFluid$Source extends $LavaFluid {
constructor()

public "arch$holder"(): $Holder<$Fluid>
public "arch$registryName"(): $ResourceLocation
public "canExtinguish"(fluidState0: $FluidState$$Type, blockGetter1: $BlockGetter$$Type, blockPos2: $BlockPos$$Type): boolean
public "canHydrate"(fluidState0: $FluidState$$Type, blockGetter1: $BlockGetter$$Type, blockPos2: $BlockPos$$Type, blockState3: $BlockState$$Type, blockPos4: $BlockPos$$Type): boolean
public "getAdjacentBlockPathType"(fluidState0: $FluidState$$Type, blockGetter1: $BlockGetter$$Type, blockPos2: $BlockPos$$Type, mob3: $Mob$$Type, blockPathTypes4: $BlockPathTypes$$Type): $BlockPathTypes
public "getBlockPathType"(fluidState0: $FluidState$$Type, blockGetter1: $BlockGetter$$Type, blockPos2: $BlockPos$$Type, mob3: $Mob$$Type, boolean4: boolean): $BlockPathTypes
public "getExplosionResistance"(fluidState0: $FluidState$$Type, blockGetter1: $BlockGetter$$Type, blockPos2: $BlockPos$$Type, explosion3: $Explosion$$Type): float
public "move"(fluidState0: $FluidState$$Type, livingEntity1: $LivingEntity$$Type, vec32: $Vec3$$Type, double3: double): boolean
public "shouldUpdateWhileBoating"(fluidState0: $FluidState$$Type, boat1: $Boat$$Type, entity2: $Entity$$Type): boolean
public "supportsBoating"(fluidState0: $FluidState$$Type, boat1: $Boat$$Type): boolean
}
}

declare module "net.minecraft.world.level.material.FogType" {
import { $Enum } from "java.lang.Enum"

export class $FogType extends $Enum<$FogType> {
static readonly "LAVA": $FogType
static readonly "NONE": $FogType
static readonly "POWDER_SNOW": $FogType
static readonly "WATER": $FogType

public static "valueOf"(string0: string): $FogType
public static "values"(): $FogType[]
}
}

declare module "net.minecraft.world.level.material.FluidState" {
import { $LivingEntity$$Type } from "net.minecraft.world.entity.LivingEntity"
import { $Direction$$Type } from "net.minecraft.core.Direction"
import { $ParticleOptions } from "net.minecraft.core.particles.ParticleOptions"
import { $HolderSet$$Type } from "net.minecraft.core.HolderSet"
import { $BlockState, $BlockState$$Type } from "net.minecraft.world.level.block.state.BlockState"
import { $FluidType } from "net.minecraftforge.fluids.FluidType"
import { $TagKey, $TagKey$$Type } from "net.minecraft.tags.TagKey"
import { $BlockGetter$$Type } from "net.minecraft.world.level.BlockGetter"
import { $Holder } from "net.minecraft.core.Holder"
import { $IForgeFluidState } from "net.minecraftforge.common.extensions.IForgeFluidState"
import { $StateHolder } from "net.minecraft.world.level.block.state.StateHolder"
import { $Fluid, $Fluid$$Type } from "net.minecraft.world.level.material.Fluid"
import { $ImmutableMap$$Type } from "com.google.common.collect.ImmutableMap"
import { $BlockPathTypes, $BlockPathTypes$$Type } from "net.minecraft.world.level.pathfinder.BlockPathTypes"
import { $MapCodec$$Type } from "com.mojang.serialization.MapCodec"
import { $RandomSource$$Type } from "net.minecraft.util.RandomSource"
import { $Property$$Type } from "net.minecraft.world.level.block.state.properties.Property"
import { $Explosion$$Type } from "net.minecraft.world.level.Explosion"
import { $Codec } from "com.mojang.serialization.Codec"
import { $Stream } from "java.util.stream.Stream"
import { $Entity$$Type } from "net.minecraft.world.entity.Entity"
import { $BlockPos$$Type } from "net.minecraft.core.BlockPos"
import { $Vec3, $Vec3$$Type } from "net.minecraft.world.phys.Vec3"
import { $Boat$$Type } from "net.minecraft.world.entity.vehicle.Boat"
import { $Comparable$$Type } from "java.lang.Comparable"
import { $Level$$Type } from "net.minecraft.world.level.Level"
import { $Mob$$Type } from "net.minecraft.world.entity.Mob"
import { $VoxelShape } from "net.minecraft.world.phys.shapes.VoxelShape"

export class $FluidState extends $StateHolder<$Fluid, $FluidState> implements $IForgeFluidState {
static readonly "AMOUNT_FULL": integer
static readonly "AMOUNT_MAX": integer
static readonly "CODEC": $Codec<$FluidState>

constructor(fluid0: $Fluid$$Type, immutableMap1: $ImmutableMap$$Type<$Property$$Type<any>, $Comparable$$Type<any>>, mapCodec2: $MapCodec$$Type<$FluidState$$Type>)

public "animateTick"(level0: $Level$$Type, blockPos1: $BlockPos$$Type, randomSource2: $RandomSource$$Type): void
public "canBeReplacedWith"(blockGetter0: $BlockGetter$$Type, blockPos1: $BlockPos$$Type, fluid2: $Fluid$$Type, direction3: $Direction$$Type): boolean
public "canConvertToSource"(level0: $Level$$Type, blockPos1: $BlockPos$$Type): boolean
public "canExtinguish"(blockGetter0: $BlockGetter$$Type, blockPos1: $BlockPos$$Type): boolean
public "canHydrate"(blockGetter0: $BlockGetter$$Type, blockPos1: $BlockPos$$Type, blockState2: $BlockState$$Type, blockPos3: $BlockPos$$Type): boolean
public "createLegacyBlock"(): $BlockState
public "getAdjacentBlockPathType"(blockGetter0: $BlockGetter$$Type, blockPos1: $BlockPos$$Type, mob2: $Mob$$Type, blockPathTypes3: $BlockPathTypes$$Type): $BlockPathTypes
public "getAmount"(): integer
public "getBlockPathType"(blockGetter0: $BlockGetter$$Type, blockPos1: $BlockPos$$Type, mob2: $Mob$$Type, boolean3: boolean): $BlockPathTypes
public "getDripParticle"(): $ParticleOptions
/** @deprecated */
public "getExplosionResistance"(): float
public "getExplosionResistance"(blockGetter0: $BlockGetter$$Type, blockPos1: $BlockPos$$Type, explosion2: $Explosion$$Type): float
public "getFlow"(blockGetter0: $BlockGetter$$Type, blockPos1: $BlockPos$$Type): $Vec3
public "getFluidType"(): $FluidType
public "getHeight"(blockGetter0: $BlockGetter$$Type, blockPos1: $BlockPos$$Type): float
public "getOwnHeight"(): float
public "getShape"(blockGetter0: $BlockGetter$$Type, blockPos1: $BlockPos$$Type): $VoxelShape
public "getTags"(): $Stream<$TagKey<$Fluid>>
public "getType"(): $Fluid
public "holder"(): $Holder<$Fluid>
public "is"(fluid0: $Fluid$$Type): boolean
public "is"(holderSet0: $HolderSet$$Type<$Fluid$$Type>): boolean
public "is"(tagKey0: $TagKey$$Type<$Fluid$$Type>): boolean
public "isEmpty"(): boolean
public "isRandomlyTicking"(): boolean
public "isSource"(): boolean
public "isSourceOfType"(fluid0: $Fluid$$Type): boolean
public "move"(livingEntity0: $LivingEntity$$Type, vec31: $Vec3$$Type, double2: double): boolean
public "randomTick"(level0: $Level$$Type, blockPos1: $BlockPos$$Type, randomSource2: $RandomSource$$Type): void
public "shouldRenderBackwardUpFace"(blockGetter0: $BlockGetter$$Type, blockPos1: $BlockPos$$Type): boolean
public "shouldUpdateWhileBoating"(boat0: $Boat$$Type, entity1: $Entity$$Type): boolean
public "supportsBoating"(boat0: $Boat$$Type): boolean
public "tick"(level0: $Level$$Type, blockPos1: $BlockPos$$Type): void
get "amount"(): integer
get "dripParticle"(): $ParticleOptions
get "explosionResistance"(): float
get "fluidType"(): $FluidType
get "ownHeight"(): float
get "tags"(): $Stream<$TagKey<$Fluid>>
get "type"(): $Fluid
get "empty"(): boolean
get "randomlyTicking"(): boolean
get "source"(): boolean
}
}

declare module "net.minecraft.world.level.material.WaterFluid$Flowing" {
import { $ResourceLocation } from "net.minecraft.resources.ResourceLocation"
import { $WaterFluid } from "net.minecraft.world.level.material.WaterFluid"
import { $LivingEntity$$Type } from "net.minecraft.world.entity.LivingEntity"
import { $BlockPathTypes, $BlockPathTypes$$Type } from "net.minecraft.world.level.pathfinder.BlockPathTypes"
import { $BlockState$$Type } from "net.minecraft.world.level.block.state.BlockState"
import { $Explosion$$Type } from "net.minecraft.world.level.Explosion"
import { $BlockGetter$$Type } from "net.minecraft.world.level.BlockGetter"
import { $Holder } from "net.minecraft.core.Holder"
import { $Entity$$Type } from "net.minecraft.world.entity.Entity"
import { $BlockPos$$Type } from "net.minecraft.core.BlockPos"
import { $Vec3$$Type } from "net.minecraft.world.phys.Vec3"
import { $Boat$$Type } from "net.minecraft.world.entity.vehicle.Boat"
import { $FluidState$$Type } from "net.minecraft.world.level.material.FluidState"
import { $Fluid } from "net.minecraft.world.level.material.Fluid"
import { $Mob$$Type } from "net.minecraft.world.entity.Mob"

export class $WaterFluid$Flowing extends $WaterFluid {
constructor()

public "arch$holder"(): $Holder<$Fluid>
public "arch$registryName"(): $ResourceLocation
public "canExtinguish"(fluidState0: $FluidState$$Type, blockGetter1: $BlockGetter$$Type, blockPos2: $BlockPos$$Type): boolean
public "canHydrate"(fluidState0: $FluidState$$Type, blockGetter1: $BlockGetter$$Type, blockPos2: $BlockPos$$Type, blockState3: $BlockState$$Type, blockPos4: $BlockPos$$Type): boolean
public "getAdjacentBlockPathType"(fluidState0: $FluidState$$Type, blockGetter1: $BlockGetter$$Type, blockPos2: $BlockPos$$Type, mob3: $Mob$$Type, blockPathTypes4: $BlockPathTypes$$Type): $BlockPathTypes
public "getBlockPathType"(fluidState0: $FluidState$$Type, blockGetter1: $BlockGetter$$Type, blockPos2: $BlockPos$$Type, mob3: $Mob$$Type, boolean4: boolean): $BlockPathTypes
public "getExplosionResistance"(fluidState0: $FluidState$$Type, blockGetter1: $BlockGetter$$Type, blockPos2: $BlockPos$$Type, explosion3: $Explosion$$Type): float
public "move"(fluidState0: $FluidState$$Type, livingEntity1: $LivingEntity$$Type, vec32: $Vec3$$Type, double3: double): boolean
public "shouldUpdateWhileBoating"(fluidState0: $FluidState$$Type, boat1: $Boat$$Type, entity2: $Entity$$Type): boolean
public "supportsBoating"(fluidState0: $FluidState$$Type, boat1: $Boat$$Type): boolean
}
}

declare module "net.minecraft.world.level.material.MapColor$Brightness" {
import { $Enum } from "java.lang.Enum"

export class $MapColor$Brightness extends $Enum<$MapColor$Brightness> {
static readonly "HIGH": $MapColor$Brightness
static readonly "LOW": $MapColor$Brightness
static readonly "LOWEST": $MapColor$Brightness
static readonly "NORMAL": $MapColor$Brightness
readonly "id": integer
readonly "modifier": integer

public static "byId"(int0: integer): $MapColor$Brightness
public static "valueOf"(string0: string): $MapColor$Brightness
public static "values"(): $MapColor$Brightness[]
}
}

declare module "net.minecraft.world.level.material.PushReaction" {
import { $Enum } from "java.lang.Enum"

export class $PushReaction extends $Enum<$PushReaction> {
static readonly "BLOCK": $PushReaction
static readonly "DESTROY": $PushReaction
static readonly "IGNORE": $PushReaction
static readonly "NORMAL": $PushReaction
static readonly "PUSH_ONLY": $PushReaction

public static "valueOf"(string0: string): $PushReaction
public static "values"(): $PushReaction[]
}
}

declare module "net.minecraft.world.level.material.EmptyFluid" {
import { $ResourceLocation } from "net.minecraft.resources.ResourceLocation"
import { $LivingEntity$$Type } from "net.minecraft.world.entity.LivingEntity"
import { $Direction$$Type } from "net.minecraft.core.Direction"
import { $BlockPathTypes, $BlockPathTypes$$Type } from "net.minecraft.world.level.pathfinder.BlockPathTypes"
import { $BlockState$$Type } from "net.minecraft.world.level.block.state.BlockState"
import { $Explosion$$Type } from "net.minecraft.world.level.Explosion"
import { $BlockGetter$$Type } from "net.minecraft.world.level.BlockGetter"
import { $Holder } from "net.minecraft.core.Holder"
import { $Entity$$Type } from "net.minecraft.world.entity.Entity"
import { $BlockPos$$Type } from "net.minecraft.core.BlockPos"
import { $Vec3, $Vec3$$Type } from "net.minecraft.world.phys.Vec3"
import { $Boat$$Type } from "net.minecraft.world.entity.vehicle.Boat"
import { $FluidState$$Type } from "net.minecraft.world.level.material.FluidState"
import { $Fluid, $Fluid$$Type } from "net.minecraft.world.level.material.Fluid"
import { $Level$$Type } from "net.minecraft.world.level.Level"
import { $Mob$$Type } from "net.minecraft.world.entity.Mob"

export class $EmptyFluid extends $Fluid {
constructor()

public "arch$holder"(): $Holder<$Fluid>
public "arch$registryName"(): $ResourceLocation
public "canBeReplacedWith"(fluidState0: $FluidState$$Type, blockGetter1: $BlockGetter$$Type, blockPos2: $BlockPos$$Type, fluid3: $Fluid$$Type, direction4: $Direction$$Type): boolean
public "canConvertToSource"(fluidState0: $FluidState$$Type, level1: $Level$$Type, blockPos2: $BlockPos$$Type): boolean
public "canExtinguish"(fluidState0: $FluidState$$Type, blockGetter1: $BlockGetter$$Type, blockPos2: $BlockPos$$Type): boolean
public "canHydrate"(fluidState0: $FluidState$$Type, blockGetter1: $BlockGetter$$Type, blockPos2: $BlockPos$$Type, blockState3: $BlockState$$Type, blockPos4: $BlockPos$$Type): boolean
public "getAdjacentBlockPathType"(fluidState0: $FluidState$$Type, blockGetter1: $BlockGetter$$Type, blockPos2: $BlockPos$$Type, mob3: $Mob$$Type, blockPathTypes4: $BlockPathTypes$$Type): $BlockPathTypes
public "getBlockPathType"(fluidState0: $FluidState$$Type, blockGetter1: $BlockGetter$$Type, blockPos2: $BlockPos$$Type, mob3: $Mob$$Type, boolean4: boolean): $BlockPathTypes
public "getExplosionResistance"(fluidState0: $FluidState$$Type, blockGetter1: $BlockGetter$$Type, blockPos2: $BlockPos$$Type, explosion3: $Explosion$$Type): float
public "getFlow"(blockGetter0: $BlockGetter$$Type, blockPos1: $BlockPos$$Type, fluidState2: $FluidState$$Type): $Vec3
public "move"(fluidState0: $FluidState$$Type, livingEntity1: $LivingEntity$$Type, vec32: $Vec3$$Type, double3: double): boolean
public "shouldUpdateWhileBoating"(fluidState0: $FluidState$$Type, boat1: $Boat$$Type, entity2: $Entity$$Type): boolean
public "supportsBoating"(fluidState0: $FluidState$$Type, boat1: $Boat$$Type): boolean
}
}

declare module "net.minecraft.world.level.material.WaterFluid" {
import { $ResourceLocation } from "net.minecraft.resources.ResourceLocation"
import { $LivingEntity$$Type } from "net.minecraft.world.entity.LivingEntity"
import { $Direction$$Type } from "net.minecraft.core.Direction"
import { $BlockPathTypes, $BlockPathTypes$$Type } from "net.minecraft.world.level.pathfinder.BlockPathTypes"
import { $ParticleOptions } from "net.minecraft.core.particles.ParticleOptions"
import { $BlockState, $BlockState$$Type } from "net.minecraft.world.level.block.state.BlockState"
import { $RandomSource$$Type } from "net.minecraft.util.RandomSource"
import { $LevelReader$$Type } from "net.minecraft.world.level.LevelReader"
import { $Explosion$$Type } from "net.minecraft.world.level.Explosion"
import { $BlockGetter$$Type } from "net.minecraft.world.level.BlockGetter"
import { $Holder } from "net.minecraft.core.Holder"
import { $Entity$$Type } from "net.minecraft.world.entity.Entity"
import { $FlowingFluid } from "net.minecraft.world.level.material.FlowingFluid"
import { $BlockPos$$Type } from "net.minecraft.core.BlockPos"
import { $Vec3$$Type } from "net.minecraft.world.phys.Vec3"
import { $Boat$$Type } from "net.minecraft.world.entity.vehicle.Boat"
import { $FluidState$$Type } from "net.minecraft.world.level.material.FluidState"
import { $Fluid, $Fluid$$Type } from "net.minecraft.world.level.material.Fluid"
import { $Level$$Type } from "net.minecraft.world.level.Level"
import { $Mob$$Type } from "net.minecraft.world.entity.Mob"

export class $WaterFluid extends $FlowingFluid {
constructor()

public "animateTick"(level0: $Level$$Type, blockPos1: $BlockPos$$Type, fluidState2: $FluidState$$Type, randomSource3: $RandomSource$$Type): void
public "arch$holder"(): $Holder<$Fluid>
public "arch$registryName"(): $ResourceLocation
public "canBeReplacedWith"(fluidState0: $FluidState$$Type, blockGetter1: $BlockGetter$$Type, blockPos2: $BlockPos$$Type, fluid3: $Fluid$$Type, direction4: $Direction$$Type): boolean
public "canExtinguish"(fluidState0: $FluidState$$Type, blockGetter1: $BlockGetter$$Type, blockPos2: $BlockPos$$Type): boolean
public "canHydrate"(fluidState0: $FluidState$$Type, blockGetter1: $BlockGetter$$Type, blockPos2: $BlockPos$$Type, blockState3: $BlockState$$Type, blockPos4: $BlockPos$$Type): boolean
public "createLegacyBlock"(fluidState0: $FluidState$$Type): $BlockState
public "getAdjacentBlockPathType"(fluidState0: $FluidState$$Type, blockGetter1: $BlockGetter$$Type, blockPos2: $BlockPos$$Type, mob3: $Mob$$Type, blockPathTypes4: $BlockPathTypes$$Type): $BlockPathTypes
public "getBlockPathType"(fluidState0: $FluidState$$Type, blockGetter1: $BlockGetter$$Type, blockPos2: $BlockPos$$Type, mob3: $Mob$$Type, boolean4: boolean): $BlockPathTypes
public "getDripParticle"(): $ParticleOptions
public "getDropOff"(levelReader0: $LevelReader$$Type): integer
public "getExplosionResistance"(fluidState0: $FluidState$$Type, blockGetter1: $BlockGetter$$Type, blockPos2: $BlockPos$$Type, explosion3: $Explosion$$Type): float
public "getSlopeFindDistance"(levelReader0: $LevelReader$$Type): integer
public "move"(fluidState0: $FluidState$$Type, livingEntity1: $LivingEntity$$Type, vec32: $Vec3$$Type, double3: double): boolean
public "shouldUpdateWhileBoating"(fluidState0: $FluidState$$Type, boat1: $Boat$$Type, entity2: $Entity$$Type): boolean
public "supportsBoating"(fluidState0: $FluidState$$Type, boat1: $Boat$$Type): boolean
get "dripParticle"(): $ParticleOptions
}
}

declare module "net.minecraft.world.level.material.LavaFluid" {
import { $ResourceLocation } from "net.minecraft.resources.ResourceLocation"
import { $LivingEntity$$Type } from "net.minecraft.world.entity.LivingEntity"
import { $Direction$$Type } from "net.minecraft.core.Direction"
import { $BlockPathTypes, $BlockPathTypes$$Type } from "net.minecraft.world.level.pathfinder.BlockPathTypes"
import { $ParticleOptions } from "net.minecraft.core.particles.ParticleOptions"
import { $BlockState, $BlockState$$Type } from "net.minecraft.world.level.block.state.BlockState"
import { $RandomSource$$Type } from "net.minecraft.util.RandomSource"
import { $LevelReader$$Type } from "net.minecraft.world.level.LevelReader"
import { $Explosion$$Type } from "net.minecraft.world.level.Explosion"
import { $BlockGetter$$Type } from "net.minecraft.world.level.BlockGetter"
import { $Holder } from "net.minecraft.core.Holder"
import { $Entity$$Type } from "net.minecraft.world.entity.Entity"
import { $FlowingFluid } from "net.minecraft.world.level.material.FlowingFluid"
import { $BlockPos$$Type } from "net.minecraft.core.BlockPos"
import { $Vec3$$Type } from "net.minecraft.world.phys.Vec3"
import { $Boat$$Type } from "net.minecraft.world.entity.vehicle.Boat"
import { $FluidState$$Type } from "net.minecraft.world.level.material.FluidState"
import { $Fluid, $Fluid$$Type } from "net.minecraft.world.level.material.Fluid"
import { $Level$$Type } from "net.minecraft.world.level.Level"
import { $Mob$$Type } from "net.minecraft.world.entity.Mob"

export class $LavaFluid extends $FlowingFluid {
static readonly "MIN_LEVEL_CUTOFF": float

constructor()

public "animateTick"(level0: $Level$$Type, blockPos1: $BlockPos$$Type, fluidState2: $FluidState$$Type, randomSource3: $RandomSource$$Type): void
public "arch$holder"(): $Holder<$Fluid>
public "arch$registryName"(): $ResourceLocation
public "canBeReplacedWith"(fluidState0: $FluidState$$Type, blockGetter1: $BlockGetter$$Type, blockPos2: $BlockPos$$Type, fluid3: $Fluid$$Type, direction4: $Direction$$Type): boolean
public "canExtinguish"(fluidState0: $FluidState$$Type, blockGetter1: $BlockGetter$$Type, blockPos2: $BlockPos$$Type): boolean
public "canHydrate"(fluidState0: $FluidState$$Type, blockGetter1: $BlockGetter$$Type, blockPos2: $BlockPos$$Type, blockState3: $BlockState$$Type, blockPos4: $BlockPos$$Type): boolean
public "createLegacyBlock"(fluidState0: $FluidState$$Type): $BlockState
public "getAdjacentBlockPathType"(fluidState0: $FluidState$$Type, blockGetter1: $BlockGetter$$Type, blockPos2: $BlockPos$$Type, mob3: $Mob$$Type, blockPathTypes4: $BlockPathTypes$$Type): $BlockPathTypes
public "getBlockPathType"(fluidState0: $FluidState$$Type, blockGetter1: $BlockGetter$$Type, blockPos2: $BlockPos$$Type, mob3: $Mob$$Type, boolean4: boolean): $BlockPathTypes
public "getDripParticle"(): $ParticleOptions
public "getDropOff"(levelReader0: $LevelReader$$Type): integer
public "getExplosionResistance"(fluidState0: $FluidState$$Type, blockGetter1: $BlockGetter$$Type, blockPos2: $BlockPos$$Type, explosion3: $Explosion$$Type): float
public "getSlopeFindDistance"(levelReader0: $LevelReader$$Type): integer
public "getSpreadDelay"(level0: $Level$$Type, blockPos1: $BlockPos$$Type, fluidState2: $FluidState$$Type, fluidState3: $FluidState$$Type): integer
public "move"(fluidState0: $FluidState$$Type, livingEntity1: $LivingEntity$$Type, vec32: $Vec3$$Type, double3: double): boolean
public "randomTick"(level0: $Level$$Type, blockPos1: $BlockPos$$Type, fluidState2: $FluidState$$Type, randomSource3: $RandomSource$$Type): void
public "shouldUpdateWhileBoating"(fluidState0: $FluidState$$Type, boat1: $Boat$$Type, entity2: $Entity$$Type): boolean
public "supportsBoating"(fluidState0: $FluidState$$Type, boat1: $Boat$$Type): boolean
get "dripParticle"(): $ParticleOptions
}
}

declare module "net.minecraft.world.level.material.FlowingFluid" {
import { $ResourceLocation } from "net.minecraft.resources.ResourceLocation"
import { $LivingEntity$$Type } from "net.minecraft.world.entity.LivingEntity"
import { $BlockPathTypes, $BlockPathTypes$$Type } from "net.minecraft.world.level.pathfinder.BlockPathTypes"
import { $BlockState$$Type } from "net.minecraft.world.level.block.state.BlockState"
import { $Explosion$$Type } from "net.minecraft.world.level.Explosion"
import { $BooleanProperty } from "net.minecraft.world.level.block.state.properties.BooleanProperty"
import { $IntegerProperty } from "net.minecraft.world.level.block.state.properties.IntegerProperty"
import { $BlockGetter$$Type } from "net.minecraft.world.level.BlockGetter"
import { $Holder } from "net.minecraft.core.Holder"
import { $Entity$$Type } from "net.minecraft.world.entity.Entity"
import { $BlockPos$$Type } from "net.minecraft.core.BlockPos"
import { $Vec3, $Vec3$$Type } from "net.minecraft.world.phys.Vec3"
import { $Boat$$Type } from "net.minecraft.world.entity.vehicle.Boat"
import { $FlowingFluidAccessor } from "com.simibubi.create.foundation.mixin.accessor.FlowingFluidAccessor"
import { $FluidState, $FluidState$$Type } from "net.minecraft.world.level.material.FluidState"
import { $Fluid } from "net.minecraft.world.level.material.Fluid"
import { $Level$$Type } from "net.minecraft.world.level.Level"
import { $Mob$$Type } from "net.minecraft.world.entity.Mob"

export class $FlowingFluid extends $Fluid implements $FlowingFluidAccessor {
static readonly "FALLING": $BooleanProperty
static readonly "LEVEL": $IntegerProperty

constructor()

public "arch$holder"(): $Holder<$Fluid>
public "arch$registryName"(): $ResourceLocation
public "canConvertToSource"(fluidState0: $FluidState$$Type, level1: $Level$$Type, blockPos2: $BlockPos$$Type): boolean
public "canExtinguish"(fluidState0: $FluidState$$Type, blockGetter1: $BlockGetter$$Type, blockPos2: $BlockPos$$Type): boolean
public "canHydrate"(fluidState0: $FluidState$$Type, blockGetter1: $BlockGetter$$Type, blockPos2: $BlockPos$$Type, blockState3: $BlockState$$Type, blockPos4: $BlockPos$$Type): boolean
public "getAdjacentBlockPathType"(fluidState0: $FluidState$$Type, blockGetter1: $BlockGetter$$Type, blockPos2: $BlockPos$$Type, mob3: $Mob$$Type, blockPathTypes4: $BlockPathTypes$$Type): $BlockPathTypes
public "getBlockPathType"(fluidState0: $FluidState$$Type, blockGetter1: $BlockGetter$$Type, blockPos2: $BlockPos$$Type, mob3: $Mob$$Type, boolean4: boolean): $BlockPathTypes
public "getExplosionResistance"(fluidState0: $FluidState$$Type, blockGetter1: $BlockGetter$$Type, blockPos2: $BlockPos$$Type, explosion3: $Explosion$$Type): float
public "getFlow"(blockGetter0: $BlockGetter$$Type, blockPos1: $BlockPos$$Type, fluidState2: $FluidState$$Type): $Vec3
public "getFlowing"(): $Fluid
public "getFlowing"(int0: integer, boolean1: boolean): $FluidState
public "getSource"(): $Fluid
public "getSource"(boolean0: boolean): $FluidState
public "move"(fluidState0: $FluidState$$Type, livingEntity1: $LivingEntity$$Type, vec32: $Vec3$$Type, double3: double): boolean
public "shouldUpdateWhileBoating"(fluidState0: $FluidState$$Type, boat1: $Boat$$Type, entity2: $Entity$$Type): boolean
public "supportsBoating"(fluidState0: $FluidState$$Type, boat1: $Boat$$Type): boolean
public "tick"(level0: $Level$$Type, blockPos1: $BlockPos$$Type, fluidState2: $FluidState$$Type): void
get "flowing"(): $Fluid
get "source"(): $Fluid
}
}

declare module "net.minecraft.world.level.material.MapColor" {
import { $MapColor$Brightness$$Type } from "net.minecraft.world.level.material.MapColor$Brightness"

export class $MapColor {
static readonly "CLAY": $MapColor
static readonly "COLOR_BLACK": $MapColor
static readonly "COLOR_BLUE": $MapColor
static readonly "COLOR_BROWN": $MapColor
static readonly "COLOR_CYAN": $MapColor
static readonly "COLOR_GRAY": $MapColor
static readonly "COLOR_GREEN": $MapColor
static readonly "COLOR_LIGHT_BLUE": $MapColor
static readonly "COLOR_LIGHT_GRAY": $MapColor
static readonly "COLOR_LIGHT_GREEN": $MapColor
static readonly "COLOR_MAGENTA": $MapColor
static readonly "COLOR_ORANGE": $MapColor
static readonly "COLOR_PINK": $MapColor
static readonly "COLOR_PURPLE": $MapColor
static readonly "COLOR_RED": $MapColor
static readonly "COLOR_YELLOW": $MapColor
static readonly "CRIMSON_HYPHAE": $MapColor
static readonly "CRIMSON_NYLIUM": $MapColor
static readonly "CRIMSON_STEM": $MapColor
static readonly "DEEPSLATE": $MapColor
static readonly "DIAMOND": $MapColor
static readonly "DIRT": $MapColor
static readonly "EMERALD": $MapColor
static readonly "FIRE": $MapColor
static readonly "GLOW_LICHEN": $MapColor
static readonly "GOLD": $MapColor
static readonly "GRASS": $MapColor
static readonly "ICE": $MapColor
static readonly "LAPIS": $MapColor
static readonly "MATERIAL_COLORS": $MapColor[]
static readonly "METAL": $MapColor
static readonly "NETHER": $MapColor
static readonly "NONE": $MapColor
static readonly "PLANT": $MapColor
static readonly "PODZOL": $MapColor
static readonly "QUARTZ": $MapColor
static readonly "RAW_IRON": $MapColor
static readonly "SAND": $MapColor
static readonly "SNOW": $MapColor
static readonly "STONE": $MapColor
static readonly "TERRACOTTA_BLACK": $MapColor
static readonly "TERRACOTTA_BLUE": $MapColor
static readonly "TERRACOTTA_BROWN": $MapColor
static readonly "TERRACOTTA_CYAN": $MapColor
static readonly "TERRACOTTA_GRAY": $MapColor
static readonly "TERRACOTTA_GREEN": $MapColor
static readonly "TERRACOTTA_LIGHT_BLUE": $MapColor
static readonly "TERRACOTTA_LIGHT_GRAY": $MapColor
static readonly "TERRACOTTA_LIGHT_GREEN": $MapColor
static readonly "TERRACOTTA_MAGENTA": $MapColor
static readonly "TERRACOTTA_ORANGE": $MapColor
static readonly "TERRACOTTA_PINK": $MapColor
static readonly "TERRACOTTA_PURPLE": $MapColor
static readonly "TERRACOTTA_RED": $MapColor
static readonly "TERRACOTTA_WHITE": $MapColor
static readonly "TERRACOTTA_YELLOW": $MapColor
static readonly "WARPED_HYPHAE": $MapColor
static readonly "WARPED_NYLIUM": $MapColor
static readonly "WARPED_STEM": $MapColor
static readonly "WARPED_WART_BLOCK": $MapColor
static readonly "WATER": $MapColor
static readonly "WOOD": $MapColor
static readonly "WOOL": $MapColor
readonly "col": integer
readonly "id": integer

public static "byId"(int0: integer): $MapColor
public "calculateRGBColor"(brightness0: $MapColor$Brightness$$Type): integer
public static "getColorFromPackedId"(int0: integer): integer
public "getPackedId"(brightness0: $MapColor$Brightness$$Type): byte
}
}

