declare module "com.gregtechceu.gtceu.api.block.IMachineBlock" {
import { $BlockEntityTicker } from "net.minecraft.world.level.block.entity.BlockEntityTicker"
import { $RotationState } from "com.gregtechceu.gtceu.api.data.RotationState"
import { $MetaMachine } from "com.gregtechceu.gtceu.api.machine.MetaMachine"
import { $Direction, $Direction$$Type } from "net.minecraft.core.Direction"
import { $BlockState$$Type } from "net.minecraft.world.level.block.state.BlockState"
import { $EntityBlock } from "net.minecraft.world.level.block.EntityBlock"
import { $BlockEntity, $BlockEntity$$Type } from "net.minecraft.world.level.block.entity.BlockEntity"
import { $ServerLevel$$Type } from "net.minecraft.server.level.ServerLevel"
import { $BlockGetter$$Type } from "net.minecraft.world.level.BlockGetter"
import { $MachineDefinition } from "com.gregtechceu.gtceu.api.machine.MachineDefinition"
import { $BlockPos$$Type } from "net.minecraft.core.BlockPos"
import { $BlockEntityType$$Type } from "net.minecraft.world.level.block.entity.BlockEntityType"
import { $GameEventListener } from "net.minecraft.world.level.gameevent.GameEventListener"
import { $Block } from "net.minecraft.world.level.block.Block"
import { $Level$$Type } from "net.minecraft.world.level.Level"
import { $BlockAndTintGetter$$Type } from "net.minecraft.world.level.BlockAndTintGetter"

export interface $IMachineBlock extends $EntityBlock {
"canConnectRedstone"(blockGetter0: $BlockGetter$$Type, blockPos1: $BlockPos$$Type, direction2: $Direction$$Type): boolean
"getDefinition"(): $MachineDefinition
"getFrontFacing"(blockState0: $BlockState$$Type): $Direction
"getListener"<T extends $BlockEntity>(serverLevel0: $ServerLevel$$Type, t1: T): $GameEventListener
"getMachine"(blockGetter0: $BlockGetter$$Type, blockPos1: $BlockPos$$Type): $MetaMachine
"getRotationState"(): $RotationState
"getTicker"<T extends $BlockEntity>(level0: $Level$$Type, blockState1: $BlockState$$Type, blockEntityType2: $BlockEntityType$$Type<T>): $BlockEntityTicker<T>
"newBlockEntity"(blockPos0: $BlockPos$$Type, blockState1: $BlockState$$Type): $BlockEntity
"self"(): $Block
get "definition"(): $MachineDefinition
get "rotationState"(): $RotationState
}

export namespace $IMachineBlock {
function colorTinted(blockState0: $BlockState$$Type, blockAndTintGetter1: $BlockAndTintGetter$$Type, blockPos2: $BlockPos$$Type, int3: integer): integer
}
export abstract class $IMachineBlock$$Static implements $IMachineBlock {
static "colorTinted"(blockState0: $BlockState$$Type, blockAndTintGetter1: $BlockAndTintGetter$$Type, blockPos2: $BlockPos$$Type, int3: integer): integer
}
}

declare module "com.gregtechceu.gtceu.api.block.ICoilType" {
import { $ResourceLocation } from "net.minecraft.resources.ResourceLocation"
import { $Material } from "com.gregtechceu.gtceu.api.data.chemical.material.Material"
import { $Lazy } from "net.minecraftforge.common.util.Lazy"

export interface $ICoilType {
"getCoilTemperature"(): integer
"getEnergyDiscount"(): integer
"getLevel"(): integer
"getMaterial"(): $Material
"getName"(): string
"getTexture"(): $ResourceLocation
"getTier"(): integer
get "coilTemperature"(): integer
get "energyDiscount"(): integer
get "level"(): integer
get "material"(): $Material
get "name"(): string
get "texture"(): $ResourceLocation
get "tier"(): integer
}

export namespace $ICoilType {
const ALL_COILS_TEMPERATURE_SORTED: $Lazy<$ICoilType[]>
function getMinRequiredType(int0: integer): $ICoilType
}
export abstract class $ICoilType$$Static implements $ICoilType {
static readonly "ALL_COILS_TEMPERATURE_SORTED": $Lazy<$ICoilType[]>

static "getMinRequiredType"(int0: integer): $ICoilType
}
}

declare module "com.gregtechceu.gtceu.api.block.MaterialPipeBlock" {
import { $ResourceLocation } from "net.minecraft.resources.ResourceLocation"
import { $LivingEntity$$Type } from "net.minecraft.world.entity.LivingEntity"
import { $Direction, $Direction$$Type } from "net.minecraft.core.Direction"
import { $Item$$Type } from "net.minecraft.world.item.Item"
import { $SpawnPlacements$Type$$Type } from "net.minecraft.world.entity.SpawnPlacements$Type"
import { $BlockBehaviour$Properties$$Type } from "net.minecraft.world.level.block.state.BlockBehaviour$Properties"
import { $BlockGetter$$Type } from "net.minecraft.world.level.BlockGetter"
import { $MapColor, $MapColor$$Type } from "net.minecraft.world.level.material.MapColor"
import { $Rotation$$Type } from "net.minecraft.world.level.block.Rotation"
import { $Holder } from "net.minecraft.core.Holder"
import { $Enum, $Enum$$Type } from "java.lang.Enum"
import { $BlockColor } from "net.minecraft.client.color.block.BlockColor"
import { $BlockPathTypes, $BlockPathTypes$$Type } from "net.minecraft.world.level.pathfinder.BlockPathTypes"
import { $RandomSource$$Type } from "net.minecraft.util.RandomSource"
import { $LevelReader$$Type } from "net.minecraft.world.level.LevelReader"
import { $BlockEntity, $BlockEntity$$Type } from "net.minecraft.world.level.block.entity.BlockEntity"
import { $TreeConfiguration$$Type } from "net.minecraft.world.level.levelgen.feature.configurations.TreeConfiguration"
import { $IPipeType, $IPipeType$$Type } from "com.gregtechceu.gtceu.api.pipenet.IPipeType"
import { $SoundType } from "net.minecraft.world.level.block.SoundType"
import { $LevelPipeNet } from "com.gregtechceu.gtceu.api.pipenet.LevelPipeNet"
import { $Player$$Type } from "net.minecraft.world.entity.player.Player"
import { $FeatureFlagSet$$Type } from "net.minecraft.world.flag.FeatureFlagSet"
import { $List } from "java.util.List"
import { $BlockPos$$Type } from "net.minecraft.core.BlockPos"
import { $SoundEvent } from "net.minecraft.sounds.SoundEvent"
import { $SignalGetter$$Type } from "net.minecraft.world.level.SignalGetter"
import { $FluidState$$Type } from "net.minecraft.world.level.material.FluidState"
import { $GameEventListener } from "net.minecraft.world.level.gameevent.GameEventListener"
import { $Optional } from "java.util.Optional"
import { $LevelAccessor$$Type } from "net.minecraft.world.level.LevelAccessor"
import { $ItemStack, $ItemStack$$Type } from "net.minecraft.world.item.ItemStack"
import { $Material, $Material$$Type } from "com.gregtechceu.gtceu.api.data.chemical.material.Material"
import { $Level$$Type } from "net.minecraft.world.level.Level"
import { $EntityType$$Type } from "net.minecraft.world.entity.EntityType"
import { $BlockState, $BlockState$$Type } from "net.minecraft.world.level.block.state.BlockState"
import { $ServerLevel$$Type } from "net.minecraft.server.level.ServerLevel"
import { $PushReaction } from "net.minecraft.world.level.material.PushReaction"
import { $ToolAction$$Type } from "net.minecraftforge.common.ToolAction"
import { $BiConsumer$$Type } from "java.util.function.BiConsumer"
import { $Fluid$$Type } from "net.minecraft.world.level.material.Fluid"
import { $UseOnContext$$Type } from "net.minecraft.world.item.context.UseOnContext"
import { $PipeBlock } from "com.gregtechceu.gtceu.api.block.PipeBlock"
import { $BlockAndTintGetter$$Type } from "net.minecraft.world.level.BlockAndTintGetter"
import { $PipeNet } from "com.gregtechceu.gtceu.api.pipenet.PipeNet"
import { $IMaterialPipeType, $IMaterialPipeType$$Type } from "com.gregtechceu.gtceu.api.pipenet.IMaterialPipeType"
import { $Explosion$$Type } from "net.minecraft.world.level.Explosion"
import { $IPipeNode$$Type } from "com.gregtechceu.gtceu.api.pipenet.IPipeNode"
import { $HitResult$$Type } from "net.minecraft.world.phys.HitResult"
import { $Entity$$Type } from "net.minecraft.world.entity.Entity"
import { $Vec3, $Vec3$$Type } from "net.minecraft.world.phys.Vec3"
import { $Block, $Block$$Type } from "net.minecraft.world.level.block.Block"
import { $Mob$$Type } from "net.minecraft.world.entity.Mob"

export class $MaterialPipeBlock<PipeType extends ($Enum<PipeType> & $IPipeType<NodeDataType> & $IMaterialPipeType<NodeDataType>) = ($Enum<PipeType> & $IPipeType<NodeDataType> & $IMaterialPipeType<NodeDataType>), NodeDataType = any, WorldPipeNetType extends $LevelPipeNet<NodeDataType, $PipeNet<NodeDataType>> = $LevelPipeNet<NodeDataType, $PipeNet<NodeDataType>>> extends $PipeBlock<PipeType, NodeDataType, WorldPipeNetType> {
readonly "material": $Material

constructor(properties0: $BlockBehaviour$Properties$$Type, pipetype1: PipeType, material2: $Material$$Type)

public "addLandingEffects"(blockState0: $BlockState$$Type, serverLevel1: $ServerLevel$$Type, blockPos2: $BlockPos$$Type, blockState3: $BlockState$$Type, livingEntity4: $LivingEntity$$Type, int5: integer): boolean
public "addRunningEffects"(blockState0: $BlockState$$Type, level1: $Level$$Type, blockPos2: $BlockPos$$Type, entity3: $Entity$$Type): boolean
public "arch$holder"(): $Holder<$Block>
public "arch$registryName"(): $ResourceLocation
public "canBeHydrated"(blockState0: $BlockState$$Type, blockGetter1: $BlockGetter$$Type, blockPos2: $BlockPos$$Type, fluidState3: $FluidState$$Type, blockPos4: $BlockPos$$Type): boolean
public "canConnectRedstone"(blockState0: $BlockState$$Type, blockGetter1: $BlockGetter$$Type, blockPos2: $BlockPos$$Type, direction3: $Direction$$Type): boolean
public "canDropFromExplosion"(blockState0: $BlockState$$Type, blockGetter1: $BlockGetter$$Type, blockPos2: $BlockPos$$Type, explosion3: $Explosion$$Type): boolean
public "canEntityDestroy"(blockState0: $BlockState$$Type, blockGetter1: $BlockGetter$$Type, blockPos2: $BlockPos$$Type, entity3: $Entity$$Type): boolean
public "canHarvestBlock"(blockState0: $BlockState$$Type, blockGetter1: $BlockGetter$$Type, blockPos2: $BlockPos$$Type, player3: $Player$$Type): boolean
public "canPlaceLiquid"(blockGetter0: $BlockGetter$$Type, blockPos1: $BlockPos$$Type, blockState2: $BlockState$$Type, fluid3: $Fluid$$Type): boolean
public "canStickTo"(blockState0: $BlockState$$Type, blockState1: $BlockState$$Type): boolean
public "collisionExtendsVertically"(blockState0: $BlockState$$Type, blockGetter1: $BlockGetter$$Type, blockPos2: $BlockPos$$Type, entity3: $Entity$$Type): boolean
public "createProperties"(iPipeNode0: $IPipeNode$$Type<PipeType, NodeDataType>): NodeDataType
public "createRawData"(blockState0: $BlockState$$Type, itemStack1: $ItemStack$$Type): NodeDataType
public static "get"(item: $Item$$Type): $ResourceLocation
public static "get"(block: $Block$$Type): $ResourceLocation
public static "get"(state: $BlockState$$Type): $ResourceLocation
public static "get"(entity: $Entity$$Type): $ResourceLocation
public static "get"(stack: $ItemStack$$Type): $ResourceLocation
public static "get"(type: $EntityType$$Type<any>): $ResourceLocation
public "getAdjacentBlockPathType"(blockState0: $BlockState$$Type, blockGetter1: $BlockGetter$$Type, blockPos2: $BlockPos$$Type, mob3: $Mob$$Type, blockPathTypes4: $BlockPathTypes$$Type): $BlockPathTypes
public "getBeaconColorMultiplier"(blockState0: $BlockState$$Type, levelReader1: $LevelReader$$Type, blockPos2: $BlockPos$$Type, blockPos3: $BlockPos$$Type): float[]
public "getBedDirection"(blockState0: $BlockState$$Type, levelReader1: $LevelReader$$Type, blockPos2: $BlockPos$$Type): $Direction
public "getBlockPathType"(blockState0: $BlockState$$Type, blockGetter1: $BlockGetter$$Type, blockPos2: $BlockPos$$Type, mob3: $Mob$$Type): $BlockPathTypes
public "getBlockStates"(): $List<$BlockState>
public "getCloneItemStack"(blockState0: $BlockState$$Type, hitResult1: $HitResult$$Type, blockGetter2: $BlockGetter$$Type, blockPos3: $BlockPos$$Type, player4: $Player$$Type): $ItemStack
public "getEnchantPowerBonus"(blockState0: $BlockState$$Type, levelReader1: $LevelReader$$Type, blockPos2: $BlockPos$$Type): float
public "getExpDrop"(blockState0: $BlockState$$Type, levelReader1: $LevelReader$$Type, randomSource2: $RandomSource$$Type, blockPos3: $BlockPos$$Type, int4: integer, int5: integer): integer
public "getExplosionResistance"(blockState0: $BlockState$$Type, blockGetter1: $BlockGetter$$Type, blockPos2: $BlockPos$$Type, explosion3: $Explosion$$Type): float
public "getFallbackType"(): NodeDataType
public "getFireSpreadSpeed"(blockState0: $BlockState$$Type, blockGetter1: $BlockGetter$$Type, blockPos2: $BlockPos$$Type, direction3: $Direction$$Type): integer
public "getFlammability"(blockState0: $BlockState$$Type, blockGetter1: $BlockGetter$$Type, blockPos2: $BlockPos$$Type, direction3: $Direction$$Type): integer
public "getFriction"(blockState0: $BlockState$$Type, levelReader1: $LevelReader$$Type, blockPos2: $BlockPos$$Type, entity3: $Entity$$Type): float
public "getLightEmission"(blockState0: $BlockState$$Type, blockGetter1: $BlockGetter$$Type, blockPos2: $BlockPos$$Type): integer
public "getListener"<T extends $BlockEntity>(serverLevel0: $ServerLevel$$Type, t1: T): $GameEventListener
public "getMapColor"(blockState0: $BlockState$$Type, blockGetter1: $BlockGetter$$Type, blockPos2: $BlockPos$$Type, mapColor3: $MapColor$$Type): $MapColor
public "getMod"(): string
public "getPickupSound"(): $Optional<$SoundEvent>
public "getPickupSound"(blockState0: $BlockState$$Type): $Optional<$SoundEvent>
public "getPistonPushReaction"(blockState0: $BlockState$$Type): $PushReaction
public "getRespawnPosition"(blockState0: $BlockState$$Type, entityType1: $EntityType$$Type<any>, levelReader2: $LevelReader$$Type, blockPos3: $BlockPos$$Type, float4: float, livingEntity5: $LivingEntity$$Type): $Optional<$Vec3>
public "getSoundType"(blockState0: $BlockState$$Type, levelReader1: $LevelReader$$Type, blockPos2: $BlockPos$$Type, entity3: $Entity$$Type): $SoundType
public "getStateAtViewpoint"(blockState0: $BlockState$$Type, blockGetter1: $BlockGetter$$Type, blockPos2: $BlockPos$$Type, vec33: $Vec3$$Type): $BlockState
public "getToolModifiedState"(blockState0: $BlockState$$Type, useOnContext1: $UseOnContext$$Type, toolAction2: $ToolAction$$Type, boolean3: boolean): $BlockState
public "getWeakChanges"(blockState0: $BlockState$$Type, levelReader1: $LevelReader$$Type, blockPos2: $BlockPos$$Type): boolean
public "hidesNeighborFace"(blockGetter0: $BlockGetter$$Type, blockPos1: $BlockPos$$Type, blockState2: $BlockState$$Type, blockState3: $BlockState$$Type, direction4: $Direction$$Type): boolean
public "isBed"(blockState0: $BlockState$$Type, blockGetter1: $BlockGetter$$Type, blockPos2: $BlockPos$$Type, entity3: $Entity$$Type): boolean
public "isBurning"(blockState0: $BlockState$$Type, blockGetter1: $BlockGetter$$Type, blockPos2: $BlockPos$$Type): boolean
public "isConduitFrame"(blockState0: $BlockState$$Type, levelReader1: $LevelReader$$Type, blockPos2: $BlockPos$$Type, blockPos3: $BlockPos$$Type): boolean
public "isEnabled"(featureFlagSet0: $FeatureFlagSet$$Type): boolean
public "isFertile"(blockState0: $BlockState$$Type, blockGetter1: $BlockGetter$$Type, blockPos2: $BlockPos$$Type): boolean
public "isFireSource"(blockState0: $BlockState$$Type, levelReader1: $LevelReader$$Type, blockPos2: $BlockPos$$Type, direction3: $Direction$$Type): boolean
public "isFlammable"(blockState0: $BlockState$$Type, blockGetter1: $BlockGetter$$Type, blockPos2: $BlockPos$$Type, direction3: $Direction$$Type): boolean
public "isLadder"(blockState0: $BlockState$$Type, levelReader1: $LevelReader$$Type, blockPos2: $BlockPos$$Type, livingEntity3: $LivingEntity$$Type): boolean
public "isPortalFrame"(blockState0: $BlockState$$Type, blockGetter1: $BlockGetter$$Type, blockPos2: $BlockPos$$Type): boolean
public "isScaffolding"(blockState0: $BlockState$$Type, levelReader1: $LevelReader$$Type, blockPos2: $BlockPos$$Type, livingEntity3: $LivingEntity$$Type): boolean
public "isSlimeBlock"(blockState0: $BlockState$$Type): boolean
public "isStickyBlock"(blockState0: $BlockState$$Type): boolean
public "isValidSpawn"(blockState0: $BlockState$$Type, blockGetter1: $BlockGetter$$Type, blockPos2: $BlockPos$$Type, type3: $SpawnPlacements$Type$$Type, entityType4: $EntityType$$Type<any>): boolean
public "makesOpenTrapdoorAboveClimbable"(blockState0: $BlockState$$Type, levelReader1: $LevelReader$$Type, blockPos2: $BlockPos$$Type, blockState3: $BlockState$$Type): boolean
public "onBlockExploded"(blockState0: $BlockState$$Type, level1: $Level$$Type, blockPos2: $BlockPos$$Type, explosion3: $Explosion$$Type): void
public "onBlockStateChange"(levelReader0: $LevelReader$$Type, blockPos1: $BlockPos$$Type, blockState2: $BlockState$$Type, blockState3: $BlockState$$Type): void
public "onCaughtFire"(blockState0: $BlockState$$Type, level1: $Level$$Type, blockPos2: $BlockPos$$Type, direction3: $Direction$$Type, livingEntity4: $LivingEntity$$Type): void
public "onDestroyedByPlayer"(blockState0: $BlockState$$Type, level1: $Level$$Type, blockPos2: $BlockPos$$Type, player3: $Player$$Type, boolean4: boolean, fluidState5: $FluidState$$Type): boolean
public "onTreeGrow"(blockState0: $BlockState$$Type, levelReader1: $LevelReader$$Type, biConsumer2: $BiConsumer$$Type<$BlockPos$$Type, $BlockState$$Type>, randomSource3: $RandomSource$$Type, blockPos4: $BlockPos$$Type, treeConfiguration5: $TreeConfiguration$$Type): boolean
public "pickupBlock"(levelAccessor0: $LevelAccessor$$Type, blockPos1: $BlockPos$$Type, blockState2: $BlockState$$Type): $ItemStack
public "placeLiquid"(levelAccessor0: $LevelAccessor$$Type, blockPos1: $BlockPos$$Type, blockState2: $BlockState$$Type, fluidState3: $FluidState$$Type): boolean
public "rotate"(blockState0: $BlockState$$Type, levelAccessor1: $LevelAccessor$$Type, blockPos2: $BlockPos$$Type, rotation3: $Rotation$$Type): $BlockState
public "setBedOccupied"(blockState0: $BlockState$$Type, level1: $Level$$Type, blockPos2: $BlockPos$$Type, livingEntity3: $LivingEntity$$Type, boolean4: boolean): void
public "setDestroySpeed"(v: float): void
public "setLightEmission"(v: integer): void
public "setRequiresTool"(v: boolean): void
public "shouldCheckWeakPower"(blockState0: $BlockState$$Type, signalGetter1: $SignalGetter$$Type, blockPos2: $BlockPos$$Type, direction3: $Direction$$Type): boolean
public "shouldDisplayFluidOverlay"(blockState0: $BlockState$$Type, blockAndTintGetter1: $BlockAndTintGetter$$Type, blockPos2: $BlockPos$$Type, fluidState3: $FluidState$$Type): boolean
public "supportsExternalFaceHiding"(blockState0: $BlockState$$Type): boolean
public "tinted"(blockState0: $BlockState$$Type, blockAndTintGetter1: $BlockAndTintGetter$$Type, blockPos2: $BlockPos$$Type, int3: integer): integer
/** Client only, do not use in server scripts */
public static "tintedColor"(): $BlockColor
get "blockStates"(): $List<$BlockState>
get "fallbackType"(): NodeDataType
get "mod"(): string
get "pickupSound"(): $Optional<$SoundEvent>
set "destroySpeed"(value: float)
set "lightEmission"(value: integer)
set "requiresTool"(value: boolean)
}
}

declare module "com.gregtechceu.gtceu.api.block.IFilterType" {
import { $Enum, $Enum$$Type } from "java.lang.Enum"
import { $StringRepresentable, $StringRepresentable$$Type } from "net.minecraft.util.StringRepresentable"
import { $StringRepresentable$EnumCodec } from "net.minecraft.util.StringRepresentable$EnumCodec"
import { $Keyable } from "com.mojang.serialization.Keyable"
import { $Supplier$$Type } from "java.util.function.Supplier"
import { $Function$$Type } from "java.util.function.Function"
import { $CleanroomType } from "com.gregtechceu.gtceu.api.machine.multiblock.CleanroomType"

export interface $IFilterType extends $StringRepresentable {
"getCleanroomType"(): $CleanroomType
"getSerializedName"(): string
get "cleanroomType"(): $CleanroomType
get "serializedName"(): string
}

export namespace $IFilterType {
function fromEnum<E extends ($Enum<E> & $StringRepresentable)>(supplier0: $Supplier$$Type<E[]>): $StringRepresentable$EnumCodec<E>
function fromEnumWithMapping<E extends ($Enum<E> & $StringRepresentable)>(supplier0: $Supplier$$Type<E[]>, function1: $Function$$Type<string, string>): $StringRepresentable$EnumCodec<E>
function keys(stringRepresentable0s: $StringRepresentable$$Type[]): $Keyable
}
export abstract class $IFilterType$$Static implements $IFilterType {
static "fromEnum"<E extends ($Enum<E> & $StringRepresentable)>(supplier0: $Supplier$$Type<E[]>): $StringRepresentable$EnumCodec<E>
static "fromEnumWithMapping"<E extends ($Enum<E> & $StringRepresentable)>(supplier0: $Supplier$$Type<E[]>, function1: $Function$$Type<string, string>): $StringRepresentable$EnumCodec<E>
static "keys"(stringRepresentable0s: $StringRepresentable$$Type[]): $Keyable
}
}

declare module "com.gregtechceu.gtceu.api.block.IFusionCasingType" {
import { $ResourceLocation } from "net.minecraft.resources.ResourceLocation"
import { $Enum, $Enum$$Type } from "java.lang.Enum"
import { $StringRepresentable, $StringRepresentable$$Type } from "net.minecraft.util.StringRepresentable"
import { $StringRepresentable$EnumCodec } from "net.minecraft.util.StringRepresentable$EnumCodec"
import { $Keyable } from "com.mojang.serialization.Keyable"
import { $Supplier$$Type } from "java.util.function.Supplier"
import { $Function$$Type } from "java.util.function.Function"

export interface $IFusionCasingType extends $StringRepresentable {
"getHarvestLevel"(): integer
"getSerializedName"(): string
"getTexture"(): $ResourceLocation
get "harvestLevel"(): integer
get "serializedName"(): string
get "texture"(): $ResourceLocation
}

export namespace $IFusionCasingType {
function fromEnum<E extends ($Enum<E> & $StringRepresentable)>(supplier0: $Supplier$$Type<E[]>): $StringRepresentable$EnumCodec<E>
function fromEnumWithMapping<E extends ($Enum<E> & $StringRepresentable)>(supplier0: $Supplier$$Type<E[]>, function1: $Function$$Type<string, string>): $StringRepresentable$EnumCodec<E>
function keys(stringRepresentable0s: $StringRepresentable$$Type[]): $Keyable
}
export abstract class $IFusionCasingType$$Static implements $IFusionCasingType {
static "fromEnum"<E extends ($Enum<E> & $StringRepresentable)>(supplier0: $Supplier$$Type<E[]>): $StringRepresentable$EnumCodec<E>
static "fromEnumWithMapping"<E extends ($Enum<E> & $StringRepresentable)>(supplier0: $Supplier$$Type<E[]>, function1: $Function$$Type<string, string>): $StringRepresentable$EnumCodec<E>
static "keys"(stringRepresentable0s: $StringRepresentable$$Type[]): $Keyable
}
}

declare module "com.gregtechceu.gtceu.api.block.ActiveBlock" {
import { $ResourceLocation } from "net.minecraft.resources.ResourceLocation"
import { $LivingEntity$$Type } from "net.minecraft.world.entity.LivingEntity"
import { $Direction, $Direction$$Type } from "net.minecraft.core.Direction"
import { $EntityType$$Type } from "net.minecraft.world.entity.EntityType"
import { $Item$$Type } from "net.minecraft.world.item.Item"
import { $BlockState, $BlockState$$Type } from "net.minecraft.world.level.block.state.BlockState"
import { $SpawnPlacements$Type$$Type } from "net.minecraft.world.entity.SpawnPlacements$Type"
import { $BlockBehaviour$Properties$$Type } from "net.minecraft.world.level.block.state.BlockBehaviour$Properties"
import { $ServerLevel$$Type } from "net.minecraft.server.level.ServerLevel"
import { $BlockGetter$$Type } from "net.minecraft.world.level.BlockGetter"
import { $MapColor, $MapColor$$Type } from "net.minecraft.world.level.material.MapColor"
import { $PushReaction } from "net.minecraft.world.level.material.PushReaction"
import { $Rotation$$Type } from "net.minecraft.world.level.block.Rotation"
import { $Holder } from "net.minecraft.core.Holder"
import { $ToolAction$$Type } from "net.minecraftforge.common.ToolAction"
import { $BiConsumer$$Type } from "java.util.function.BiConsumer"
import { $UseOnContext$$Type } from "net.minecraft.world.item.context.UseOnContext"
import { $BlockAndTintGetter$$Type } from "net.minecraft.world.level.BlockAndTintGetter"
import { $BlockPathTypes, $BlockPathTypes$$Type } from "net.minecraft.world.level.pathfinder.BlockPathTypes"
import { $RandomSource$$Type } from "net.minecraft.util.RandomSource"
import { $LevelReader$$Type } from "net.minecraft.world.level.LevelReader"
import { $TreeConfiguration$$Type } from "net.minecraft.world.level.levelgen.feature.configurations.TreeConfiguration"
import { $Explosion$$Type } from "net.minecraft.world.level.Explosion"
import { $SoundType } from "net.minecraft.world.level.block.SoundType"
import { $Player$$Type } from "net.minecraft.world.entity.player.Player"
import { $HitResult$$Type } from "net.minecraft.world.phys.HitResult"
import { $FeatureFlagSet$$Type } from "net.minecraft.world.flag.FeatureFlagSet"
import { $List } from "java.util.List"
import { $Entity$$Type } from "net.minecraft.world.entity.Entity"
import { $BlockPos$$Type } from "net.minecraft.core.BlockPos"
import { $Vec3, $Vec3$$Type } from "net.minecraft.world.phys.Vec3"
import { $SignalGetter$$Type } from "net.minecraft.world.level.SignalGetter"
import { $FluidState$$Type } from "net.minecraft.world.level.material.FluidState"
import { $Optional } from "java.util.Optional"
import { $LevelAccessor$$Type } from "net.minecraft.world.level.LevelAccessor"
import { $Block, $Block$$Type } from "net.minecraft.world.level.block.Block"
import { $ItemStack, $ItemStack$$Type } from "net.minecraft.world.item.ItemStack"
import { $Level$$Type } from "net.minecraft.world.level.Level"
import { $Mob$$Type } from "net.minecraft.world.entity.Mob"

export class $ActiveBlock extends $Block {
constructor(properties0: $BlockBehaviour$Properties$$Type)

public "addLandingEffects"(blockState0: $BlockState$$Type, serverLevel1: $ServerLevel$$Type, blockPos2: $BlockPos$$Type, blockState3: $BlockState$$Type, livingEntity4: $LivingEntity$$Type, int5: integer): boolean
public "addRunningEffects"(blockState0: $BlockState$$Type, level1: $Level$$Type, blockPos2: $BlockPos$$Type, entity3: $Entity$$Type): boolean
public "arch$holder"(): $Holder<$Block>
public "arch$registryName"(): $ResourceLocation
public "canBeHydrated"(blockState0: $BlockState$$Type, blockGetter1: $BlockGetter$$Type, blockPos2: $BlockPos$$Type, fluidState3: $FluidState$$Type, blockPos4: $BlockPos$$Type): boolean
public "canConnectRedstone"(blockState0: $BlockState$$Type, blockGetter1: $BlockGetter$$Type, blockPos2: $BlockPos$$Type, direction3: $Direction$$Type): boolean
public "canDropFromExplosion"(blockState0: $BlockState$$Type, blockGetter1: $BlockGetter$$Type, blockPos2: $BlockPos$$Type, explosion3: $Explosion$$Type): boolean
public "canEntityDestroy"(blockState0: $BlockState$$Type, blockGetter1: $BlockGetter$$Type, blockPos2: $BlockPos$$Type, entity3: $Entity$$Type): boolean
public "canHarvestBlock"(blockState0: $BlockState$$Type, blockGetter1: $BlockGetter$$Type, blockPos2: $BlockPos$$Type, player3: $Player$$Type): boolean
public "canStickTo"(blockState0: $BlockState$$Type, blockState1: $BlockState$$Type): boolean
public "changeActive"(blockState0: $BlockState$$Type, boolean1: boolean): $BlockState
public "collisionExtendsVertically"(blockState0: $BlockState$$Type, blockGetter1: $BlockGetter$$Type, blockPos2: $BlockPos$$Type, entity3: $Entity$$Type): boolean
public static "get"(item: $Item$$Type): $ResourceLocation
public static "get"(block: $Block$$Type): $ResourceLocation
public static "get"(state: $BlockState$$Type): $ResourceLocation
public static "get"(entity: $Entity$$Type): $ResourceLocation
public static "get"(stack: $ItemStack$$Type): $ResourceLocation
public static "get"(type: $EntityType$$Type<any>): $ResourceLocation
public "getAdjacentBlockPathType"(blockState0: $BlockState$$Type, blockGetter1: $BlockGetter$$Type, blockPos2: $BlockPos$$Type, mob3: $Mob$$Type, blockPathTypes4: $BlockPathTypes$$Type): $BlockPathTypes
public "getAppearance"(blockState0: $BlockState$$Type, blockAndTintGetter1: $BlockAndTintGetter$$Type, blockPos2: $BlockPos$$Type, direction3: $Direction$$Type, blockState4: $BlockState$$Type, blockPos5: $BlockPos$$Type): $BlockState
public "getBeaconColorMultiplier"(blockState0: $BlockState$$Type, levelReader1: $LevelReader$$Type, blockPos2: $BlockPos$$Type, blockPos3: $BlockPos$$Type): float[]
public "getBedDirection"(blockState0: $BlockState$$Type, levelReader1: $LevelReader$$Type, blockPos2: $BlockPos$$Type): $Direction
public "getBlockPathType"(blockState0: $BlockState$$Type, blockGetter1: $BlockGetter$$Type, blockPos2: $BlockPos$$Type, mob3: $Mob$$Type): $BlockPathTypes
public "getBlockStates"(): $List<$BlockState>
public "getCloneItemStack"(blockState0: $BlockState$$Type, hitResult1: $HitResult$$Type, blockGetter2: $BlockGetter$$Type, blockPos3: $BlockPos$$Type, player4: $Player$$Type): $ItemStack
public "getEnchantPowerBonus"(blockState0: $BlockState$$Type, levelReader1: $LevelReader$$Type, blockPos2: $BlockPos$$Type): float
public "getExpDrop"(blockState0: $BlockState$$Type, levelReader1: $LevelReader$$Type, randomSource2: $RandomSource$$Type, blockPos3: $BlockPos$$Type, int4: integer, int5: integer): integer
public "getExplosionResistance"(blockState0: $BlockState$$Type, blockGetter1: $BlockGetter$$Type, blockPos2: $BlockPos$$Type, explosion3: $Explosion$$Type): float
public "getFireSpreadSpeed"(blockState0: $BlockState$$Type, blockGetter1: $BlockGetter$$Type, blockPos2: $BlockPos$$Type, direction3: $Direction$$Type): integer
public "getFlammability"(blockState0: $BlockState$$Type, blockGetter1: $BlockGetter$$Type, blockPos2: $BlockPos$$Type, direction3: $Direction$$Type): integer
public "getFriction"(blockState0: $BlockState$$Type, levelReader1: $LevelReader$$Type, blockPos2: $BlockPos$$Type, entity3: $Entity$$Type): float
public "getLightEmission"(blockState0: $BlockState$$Type, blockGetter1: $BlockGetter$$Type, blockPos2: $BlockPos$$Type): integer
public "getMapColor"(blockState0: $BlockState$$Type, blockGetter1: $BlockGetter$$Type, blockPos2: $BlockPos$$Type, mapColor3: $MapColor$$Type): $MapColor
public "getMod"(): string
public "getPistonPushReaction"(blockState0: $BlockState$$Type): $PushReaction
public "getRespawnPosition"(blockState0: $BlockState$$Type, entityType1: $EntityType$$Type<any>, levelReader2: $LevelReader$$Type, blockPos3: $BlockPos$$Type, float4: float, livingEntity5: $LivingEntity$$Type): $Optional<$Vec3>
public "getSoundType"(blockState0: $BlockState$$Type, levelReader1: $LevelReader$$Type, blockPos2: $BlockPos$$Type, entity3: $Entity$$Type): $SoundType
public "getStateAtViewpoint"(blockState0: $BlockState$$Type, blockGetter1: $BlockGetter$$Type, blockPos2: $BlockPos$$Type, vec33: $Vec3$$Type): $BlockState
public "getToolModifiedState"(blockState0: $BlockState$$Type, useOnContext1: $UseOnContext$$Type, toolAction2: $ToolAction$$Type, boolean3: boolean): $BlockState
public "getWeakChanges"(blockState0: $BlockState$$Type, levelReader1: $LevelReader$$Type, blockPos2: $BlockPos$$Type): boolean
public "hidesNeighborFace"(blockGetter0: $BlockGetter$$Type, blockPos1: $BlockPos$$Type, blockState2: $BlockState$$Type, blockState3: $BlockState$$Type, direction4: $Direction$$Type): boolean
public "isActive"(blockState0: $BlockState$$Type): boolean
public "isBed"(blockState0: $BlockState$$Type, blockGetter1: $BlockGetter$$Type, blockPos2: $BlockPos$$Type, entity3: $Entity$$Type): boolean
public "isBurning"(blockState0: $BlockState$$Type, blockGetter1: $BlockGetter$$Type, blockPos2: $BlockPos$$Type): boolean
public "isConduitFrame"(blockState0: $BlockState$$Type, levelReader1: $LevelReader$$Type, blockPos2: $BlockPos$$Type, blockPos3: $BlockPos$$Type): boolean
public "isEnabled"(featureFlagSet0: $FeatureFlagSet$$Type): boolean
public "isFertile"(blockState0: $BlockState$$Type, blockGetter1: $BlockGetter$$Type, blockPos2: $BlockPos$$Type): boolean
public "isFireSource"(blockState0: $BlockState$$Type, levelReader1: $LevelReader$$Type, blockPos2: $BlockPos$$Type, direction3: $Direction$$Type): boolean
public "isFlammable"(blockState0: $BlockState$$Type, blockGetter1: $BlockGetter$$Type, blockPos2: $BlockPos$$Type, direction3: $Direction$$Type): boolean
public "isLadder"(blockState0: $BlockState$$Type, levelReader1: $LevelReader$$Type, blockPos2: $BlockPos$$Type, livingEntity3: $LivingEntity$$Type): boolean
public "isPortalFrame"(blockState0: $BlockState$$Type, blockGetter1: $BlockGetter$$Type, blockPos2: $BlockPos$$Type): boolean
public "isScaffolding"(blockState0: $BlockState$$Type, levelReader1: $LevelReader$$Type, blockPos2: $BlockPos$$Type, livingEntity3: $LivingEntity$$Type): boolean
public "isSlimeBlock"(blockState0: $BlockState$$Type): boolean
public "isStickyBlock"(blockState0: $BlockState$$Type): boolean
public "isValidSpawn"(blockState0: $BlockState$$Type, blockGetter1: $BlockGetter$$Type, blockPos2: $BlockPos$$Type, type3: $SpawnPlacements$Type$$Type, entityType4: $EntityType$$Type<any>): boolean
public "makesOpenTrapdoorAboveClimbable"(blockState0: $BlockState$$Type, levelReader1: $LevelReader$$Type, blockPos2: $BlockPos$$Type, blockState3: $BlockState$$Type): boolean
public "onBlockExploded"(blockState0: $BlockState$$Type, level1: $Level$$Type, blockPos2: $BlockPos$$Type, explosion3: $Explosion$$Type): void
public "onBlockStateChange"(levelReader0: $LevelReader$$Type, blockPos1: $BlockPos$$Type, blockState2: $BlockState$$Type, blockState3: $BlockState$$Type): void
public "onCaughtFire"(blockState0: $BlockState$$Type, level1: $Level$$Type, blockPos2: $BlockPos$$Type, direction3: $Direction$$Type, livingEntity4: $LivingEntity$$Type): void
public "onDestroyedByPlayer"(blockState0: $BlockState$$Type, level1: $Level$$Type, blockPos2: $BlockPos$$Type, player3: $Player$$Type, boolean4: boolean, fluidState5: $FluidState$$Type): boolean
public "onNeighborChange"(blockState0: $BlockState$$Type, levelReader1: $LevelReader$$Type, blockPos2: $BlockPos$$Type, blockPos3: $BlockPos$$Type): void
public "onTreeGrow"(blockState0: $BlockState$$Type, levelReader1: $LevelReader$$Type, biConsumer2: $BiConsumer$$Type<$BlockPos$$Type, $BlockState$$Type>, randomSource3: $RandomSource$$Type, blockPos4: $BlockPos$$Type, treeConfiguration5: $TreeConfiguration$$Type): boolean
public "rotate"(blockState0: $BlockState$$Type, levelAccessor1: $LevelAccessor$$Type, blockPos2: $BlockPos$$Type, rotation3: $Rotation$$Type): $BlockState
public "setBedOccupied"(blockState0: $BlockState$$Type, level1: $Level$$Type, blockPos2: $BlockPos$$Type, livingEntity3: $LivingEntity$$Type, boolean4: boolean): void
public "setDestroySpeed"(v: float): void
public "setLightEmission"(v: integer): void
public "setRequiresTool"(v: boolean): void
public "shouldCheckWeakPower"(blockState0: $BlockState$$Type, signalGetter1: $SignalGetter$$Type, blockPos2: $BlockPos$$Type, direction3: $Direction$$Type): boolean
public "shouldDisplayFluidOverlay"(blockState0: $BlockState$$Type, blockAndTintGetter1: $BlockAndTintGetter$$Type, blockPos2: $BlockPos$$Type, fluidState3: $FluidState$$Type): boolean
public "supportsExternalFaceHiding"(blockState0: $BlockState$$Type): boolean
get "blockStates"(): $List<$BlockState>
get "mod"(): string
set "destroySpeed"(value: float)
set "lightEmission"(value: integer)
set "requiresTool"(value: boolean)
}
}

declare module "com.gregtechceu.gtceu.api.block.PipeBlock" {
import { $ResourceLocation } from "net.minecraft.resources.ResourceLocation"
import { $LivingEntity$$Type } from "net.minecraft.world.entity.LivingEntity"
import { $Direction, $Direction$$Type } from "net.minecraft.core.Direction"
import { $Item$$Type } from "net.minecraft.world.item.Item"
import { $PipeBlockEntity } from "com.gregtechceu.gtceu.api.blockentity.PipeBlockEntity"
import { $SpawnPlacements$Type$$Type } from "net.minecraft.world.entity.SpawnPlacements$Type"
import { $BlockBehaviour$Properties$$Type } from "net.minecraft.world.level.block.state.BlockBehaviour$Properties"
import { $BlockGetter$$Type } from "net.minecraft.world.level.BlockGetter"
import { $MapColor, $MapColor$$Type } from "net.minecraft.world.level.material.MapColor"
import { $Rotation$$Type } from "net.minecraft.world.level.block.Rotation"
import { $Holder } from "net.minecraft.core.Holder"
import { $Enum, $Enum$$Type } from "java.lang.Enum"
import { $PipeModel } from "com.gregtechceu.gtceu.client.model.pipe.PipeModel"
import { $GTBlockstateProvider$$Type } from "com.gregtechceu.gtceu.api.registry.registrate.provider.GTBlockstateProvider"
import { $BlockPathTypes, $BlockPathTypes$$Type } from "net.minecraft.world.level.pathfinder.BlockPathTypes"
import { $SimpleWaterloggedBlock } from "net.minecraft.world.level.block.SimpleWaterloggedBlock"
import { $RandomSource$$Type } from "net.minecraft.util.RandomSource"
import { $EntityBlock } from "net.minecraft.world.level.block.EntityBlock"
import { $BlockEntity, $BlockEntity$$Type } from "net.minecraft.world.level.block.entity.BlockEntity"
import { $LevelReader$$Type } from "net.minecraft.world.level.LevelReader"
import { $TreeConfiguration$$Type } from "net.minecraft.world.level.levelgen.feature.configurations.TreeConfiguration"
import { $IPipeType, $IPipeType$$Type } from "com.gregtechceu.gtceu.api.pipenet.IPipeType"
import { $SoundType } from "net.minecraft.world.level.block.SoundType"
import { $LevelPipeNet } from "com.gregtechceu.gtceu.api.pipenet.LevelPipeNet"
import { $Player$$Type } from "net.minecraft.world.entity.player.Player"
import { $GTToolType } from "com.gregtechceu.gtceu.api.item.tool.GTToolType"
import { $FeatureFlagSet$$Type } from "net.minecraft.world.flag.FeatureFlagSet"
import { $List } from "java.util.List"
import { $BlockPos$$Type } from "net.minecraft.core.BlockPos"
import { $BlockEntityType, $BlockEntityType$$Type } from "net.minecraft.world.level.block.entity.BlockEntityType"
import { $SoundEvent } from "net.minecraft.sounds.SoundEvent"
import { $SignalGetter$$Type } from "net.minecraft.world.level.SignalGetter"
import { $FluidState$$Type } from "net.minecraft.world.level.material.FluidState"
import { $GameEventListener } from "net.minecraft.world.level.gameevent.GameEventListener"
import { $Optional } from "java.util.Optional"
import { $LevelAccessor$$Type } from "net.minecraft.world.level.LevelAccessor"
import { $ItemStack, $ItemStack$$Type } from "net.minecraft.world.item.ItemStack"
import { $Level$$Type } from "net.minecraft.world.level.Level"
import { $VoxelShape } from "net.minecraft.world.phys.shapes.VoxelShape"
import { $BlockEntityTicker } from "net.minecraft.world.level.block.entity.BlockEntityTicker"
import { $EntityType$$Type } from "net.minecraft.world.entity.EntityType"
import { $BlockState, $BlockState$$Type } from "net.minecraft.world.level.block.state.BlockState"
import { $ServerLevel$$Type } from "net.minecraft.server.level.ServerLevel"
import { $PushReaction } from "net.minecraft.world.level.material.PushReaction"
import { $ToolAction$$Type } from "net.minecraftforge.common.ToolAction"
import { $BiConsumer$$Type } from "java.util.function.BiConsumer"
import { $Fluid$$Type } from "net.minecraft.world.level.material.Fluid"
import { $UseOnContext$$Type } from "net.minecraft.world.item.context.UseOnContext"
import { $BlockAndTintGetter$$Type } from "net.minecraft.world.level.BlockAndTintGetter"
import { $PipeNet } from "com.gregtechceu.gtceu.api.pipenet.PipeNet"
import { $Explosion$$Type } from "net.minecraft.world.level.Explosion"
import { $IPipeNode, $IPipeNode$$Type } from "com.gregtechceu.gtceu.api.pipenet.IPipeNode"
import { $HitResult$$Type } from "net.minecraft.world.phys.HitResult"
import { $Entity$$Type } from "net.minecraft.world.entity.Entity"
import { $Vec3, $Vec3$$Type } from "net.minecraft.world.phys.Vec3"
import { $Block, $Block$$Type } from "net.minecraft.world.level.block.Block"
import { $Mob$$Type } from "net.minecraft.world.entity.Mob"

export class $PipeBlock<PipeType extends ($Enum<PipeType> & $IPipeType<NodeDataType>) = ($Enum<PipeType> & $IPipeType<NodeDataType>), NodeDataType = any, WorldPipeNetType extends $LevelPipeNet<NodeDataType, $PipeNet<NodeDataType>> = $LevelPipeNet<NodeDataType, $PipeNet<NodeDataType>>> extends $Block implements $EntityBlock, $SimpleWaterloggedBlock {
readonly "pipeType": PipeType

constructor(properties0: $BlockBehaviour$Properties$$Type, pipetype1: PipeType)

public "addLandingEffects"(blockState0: $BlockState$$Type, serverLevel1: $ServerLevel$$Type, blockPos2: $BlockPos$$Type, blockState3: $BlockState$$Type, livingEntity4: $LivingEntity$$Type, int5: integer): boolean
public "addRunningEffects"(blockState0: $BlockState$$Type, level1: $Level$$Type, blockPos2: $BlockPos$$Type, entity3: $Entity$$Type): boolean
public "arch$holder"(): $Holder<$Block>
public "arch$registryName"(): $ResourceLocation
public "canBeHydrated"(blockState0: $BlockState$$Type, blockGetter1: $BlockGetter$$Type, blockPos2: $BlockPos$$Type, fluidState3: $FluidState$$Type, blockPos4: $BlockPos$$Type): boolean
public "canConnect"(iPipeNode0: $IPipeNode$$Type<PipeType, NodeDataType>, direction1: $Direction$$Type): boolean
public "canConnectRedstone"(blockState0: $BlockState$$Type, blockGetter1: $BlockGetter$$Type, blockPos2: $BlockPos$$Type, direction3: $Direction$$Type): boolean
public "canDropFromExplosion"(blockState0: $BlockState$$Type, blockGetter1: $BlockGetter$$Type, blockPos2: $BlockPos$$Type, explosion3: $Explosion$$Type): boolean
public "canEntityDestroy"(blockState0: $BlockState$$Type, blockGetter1: $BlockGetter$$Type, blockPos2: $BlockPos$$Type, entity3: $Entity$$Type): boolean
public "canHarvestBlock"(blockState0: $BlockState$$Type, blockGetter1: $BlockGetter$$Type, blockPos2: $BlockPos$$Type, player3: $Player$$Type): boolean
public "canPipeConnectToBlock"(iPipeNode0: $IPipeNode$$Type<PipeType, NodeDataType>, direction1: $Direction$$Type, blockEntity2: $BlockEntity$$Type): boolean
public "canPipesConnect"(iPipeNode0: $IPipeNode$$Type<PipeType, NodeDataType>, direction1: $Direction$$Type, iPipeNode2: $IPipeNode$$Type<PipeType, NodeDataType>): boolean
public "canPlaceLiquid"(blockGetter0: $BlockGetter$$Type, blockPos1: $BlockPos$$Type, blockState2: $BlockState$$Type, fluid3: $Fluid$$Type): boolean
public "canStickTo"(blockState0: $BlockState$$Type, blockState1: $BlockState$$Type): boolean
public "collisionExtendsVertically"(blockState0: $BlockState$$Type, blockGetter1: $BlockGetter$$Type, blockPos2: $BlockPos$$Type, entity3: $Entity$$Type): boolean
public "createPipeModel"(gTBlockstateProvider0: $GTBlockstateProvider$$Type): $PipeModel
public "createProperties"(blockState0: $BlockState$$Type, itemStack1: $ItemStack$$Type): NodeDataType
public "createProperties"(iPipeNode0: $IPipeNode$$Type<PipeType, NodeDataType>): NodeDataType
public "createRawData"(blockState0: $BlockState$$Type, itemStack1: $ItemStack$$Type): NodeDataType
public static "get"(item: $Item$$Type): $ResourceLocation
public static "get"(block: $Block$$Type): $ResourceLocation
public static "get"(state: $BlockState$$Type): $ResourceLocation
public static "get"(entity: $Entity$$Type): $ResourceLocation
public static "get"(stack: $ItemStack$$Type): $ResourceLocation
public static "get"(type: $EntityType$$Type<any>): $ResourceLocation
public "getAdjacentBlockPathType"(blockState0: $BlockState$$Type, blockGetter1: $BlockGetter$$Type, blockPos2: $BlockPos$$Type, mob3: $Mob$$Type, blockPathTypes4: $BlockPathTypes$$Type): $BlockPathTypes
public "getAppearance"(blockState0: $BlockState$$Type, blockAndTintGetter1: $BlockAndTintGetter$$Type, blockPos2: $BlockPos$$Type, direction3: $Direction$$Type, blockState4: $BlockState$$Type, blockPos5: $BlockPos$$Type): $BlockState
public "getBeaconColorMultiplier"(blockState0: $BlockState$$Type, levelReader1: $LevelReader$$Type, blockPos2: $BlockPos$$Type, blockPos3: $BlockPos$$Type): float[]
public "getBedDirection"(blockState0: $BlockState$$Type, levelReader1: $LevelReader$$Type, blockPos2: $BlockPos$$Type): $Direction
public "getBlockEntityType"(): $BlockEntityType<$PipeBlockEntity<PipeType, NodeDataType>>
public "getBlockPathType"(blockState0: $BlockState$$Type, blockGetter1: $BlockGetter$$Type, blockPos2: $BlockPos$$Type, mob3: $Mob$$Type): $BlockPathTypes
public "getBlockStates"(): $List<$BlockState>
public "getCloneItemStack"(blockState0: $BlockState$$Type, hitResult1: $HitResult$$Type, blockGetter2: $BlockGetter$$Type, blockPos3: $BlockPos$$Type, player4: $Player$$Type): $ItemStack
public "getEnchantPowerBonus"(blockState0: $BlockState$$Type, levelReader1: $LevelReader$$Type, blockPos2: $BlockPos$$Type): float
public "getExpDrop"(blockState0: $BlockState$$Type, levelReader1: $LevelReader$$Type, randomSource2: $RandomSource$$Type, blockPos3: $BlockPos$$Type, int4: integer, int5: integer): integer
public "getExplosionResistance"(blockState0: $BlockState$$Type, blockGetter1: $BlockGetter$$Type, blockPos2: $BlockPos$$Type, explosion3: $Explosion$$Type): float
public "getFallbackType"(): NodeDataType
public "getFireSpreadSpeed"(blockState0: $BlockState$$Type, blockGetter1: $BlockGetter$$Type, blockPos2: $BlockPos$$Type, direction3: $Direction$$Type): integer
public "getFlammability"(blockState0: $BlockState$$Type, blockGetter1: $BlockGetter$$Type, blockPos2: $BlockPos$$Type, direction3: $Direction$$Type): integer
public "getFriction"(blockState0: $BlockState$$Type, levelReader1: $LevelReader$$Type, blockPos2: $BlockPos$$Type, entity3: $Entity$$Type): float
public "getLightEmission"(blockState0: $BlockState$$Type, blockGetter1: $BlockGetter$$Type, blockPos2: $BlockPos$$Type): integer
public "getListener"<T extends $BlockEntity>(serverLevel0: $ServerLevel$$Type, t1: T): $GameEventListener
public "getMapColor"(blockState0: $BlockState$$Type, blockGetter1: $BlockGetter$$Type, blockPos2: $BlockPos$$Type, mapColor3: $MapColor$$Type): $MapColor
public "getMod"(): string
public "getPickupSound"(): $Optional<$SoundEvent>
public "getPickupSound"(blockState0: $BlockState$$Type): $Optional<$SoundEvent>
public "getPipeTile"(blockGetter0: $BlockGetter$$Type, blockPos1: $BlockPos$$Type): $IPipeNode<PipeType, NodeDataType>
public "getPipeTuneTool"(): $GTToolType
public "getPistonPushReaction"(blockState0: $BlockState$$Type): $PushReaction
public "getRespawnPosition"(blockState0: $BlockState$$Type, entityType1: $EntityType$$Type<any>, levelReader2: $LevelReader$$Type, blockPos3: $BlockPos$$Type, float4: float, livingEntity5: $LivingEntity$$Type): $Optional<$Vec3>
public "getShapes"(int0: integer): $VoxelShape
public "getSoundType"(blockState0: $BlockState$$Type, levelReader1: $LevelReader$$Type, blockPos2: $BlockPos$$Type, entity3: $Entity$$Type): $SoundType
public "getStateAtViewpoint"(blockState0: $BlockState$$Type, blockGetter1: $BlockGetter$$Type, blockPos2: $BlockPos$$Type, vec33: $Vec3$$Type): $BlockState
public "getTicker"<T extends $BlockEntity>(level0: $Level$$Type, blockState1: $BlockState$$Type, blockEntityType2: $BlockEntityType$$Type<T>): $BlockEntityTicker<T>
public "getToolModifiedState"(blockState0: $BlockState$$Type, useOnContext1: $UseOnContext$$Type, toolAction2: $ToolAction$$Type, boolean3: boolean): $BlockState
public "getWeakChanges"(blockState0: $BlockState$$Type, levelReader1: $LevelReader$$Type, blockPos2: $BlockPos$$Type): boolean
public "getWorldPipeNet"(serverLevel0: $ServerLevel$$Type): WorldPipeNetType
public "hidesNeighborFace"(blockGetter0: $BlockGetter$$Type, blockPos1: $BlockPos$$Type, blockState2: $BlockState$$Type, blockState3: $BlockState$$Type, direction4: $Direction$$Type): boolean
public "isBed"(blockState0: $BlockState$$Type, blockGetter1: $BlockGetter$$Type, blockPos2: $BlockPos$$Type, entity3: $Entity$$Type): boolean
public "isBurning"(blockState0: $BlockState$$Type, blockGetter1: $BlockGetter$$Type, blockPos2: $BlockPos$$Type): boolean
public "isConduitFrame"(blockState0: $BlockState$$Type, levelReader1: $LevelReader$$Type, blockPos2: $BlockPos$$Type, blockPos3: $BlockPos$$Type): boolean
public "isEnabled"(featureFlagSet0: $FeatureFlagSet$$Type): boolean
public "isFertile"(blockState0: $BlockState$$Type, blockGetter1: $BlockGetter$$Type, blockPos2: $BlockPos$$Type): boolean
public "isFireSource"(blockState0: $BlockState$$Type, levelReader1: $LevelReader$$Type, blockPos2: $BlockPos$$Type, direction3: $Direction$$Type): boolean
public "isFlammable"(blockState0: $BlockState$$Type, blockGetter1: $BlockGetter$$Type, blockPos2: $BlockPos$$Type, direction3: $Direction$$Type): boolean
public "isLadder"(blockState0: $BlockState$$Type, levelReader1: $LevelReader$$Type, blockPos2: $BlockPos$$Type, livingEntity3: $LivingEntity$$Type): boolean
public "isPortalFrame"(blockState0: $BlockState$$Type, blockGetter1: $BlockGetter$$Type, blockPos2: $BlockPos$$Type): boolean
public "isScaffolding"(blockState0: $BlockState$$Type, levelReader1: $LevelReader$$Type, blockPos2: $BlockPos$$Type, livingEntity3: $LivingEntity$$Type): boolean
public "isSlimeBlock"(blockState0: $BlockState$$Type): boolean
public "isStickyBlock"(blockState0: $BlockState$$Type): boolean
public "isValidSpawn"(blockState0: $BlockState$$Type, blockGetter1: $BlockGetter$$Type, blockPos2: $BlockPos$$Type, type3: $SpawnPlacements$Type$$Type, entityType4: $EntityType$$Type<any>): boolean
public "makesOpenTrapdoorAboveClimbable"(blockState0: $BlockState$$Type, levelReader1: $LevelReader$$Type, blockPos2: $BlockPos$$Type, blockState3: $BlockState$$Type): boolean
public "newBlockEntity"(blockPos0: $BlockPos$$Type, blockState1: $BlockState$$Type): $PipeBlockEntity<PipeType, NodeDataType>
public "onBlockExploded"(blockState0: $BlockState$$Type, level1: $Level$$Type, blockPos2: $BlockPos$$Type, explosion3: $Explosion$$Type): void
public "onBlockStateChange"(levelReader0: $LevelReader$$Type, blockPos1: $BlockPos$$Type, blockState2: $BlockState$$Type, blockState3: $BlockState$$Type): void
public "onCaughtFire"(blockState0: $BlockState$$Type, level1: $Level$$Type, blockPos2: $BlockPos$$Type, direction3: $Direction$$Type, livingEntity4: $LivingEntity$$Type): void
public "onDestroyedByPlayer"(blockState0: $BlockState$$Type, level1: $Level$$Type, blockPos2: $BlockPos$$Type, player3: $Player$$Type, boolean4: boolean, fluidState5: $FluidState$$Type): boolean
public "onNeighborChange"(blockState0: $BlockState$$Type, levelReader1: $LevelReader$$Type, blockPos2: $BlockPos$$Type, blockPos3: $BlockPos$$Type): void
public "onTreeGrow"(blockState0: $BlockState$$Type, levelReader1: $LevelReader$$Type, biConsumer2: $BiConsumer$$Type<$BlockPos$$Type, $BlockState$$Type>, randomSource3: $RandomSource$$Type, blockPos4: $BlockPos$$Type, treeConfiguration5: $TreeConfiguration$$Type): boolean
public "pickupBlock"(levelAccessor0: $LevelAccessor$$Type, blockPos1: $BlockPos$$Type, blockState2: $BlockState$$Type): $ItemStack
public "placeLiquid"(levelAccessor0: $LevelAccessor$$Type, blockPos1: $BlockPos$$Type, blockState2: $BlockState$$Type, fluidState3: $FluidState$$Type): boolean
public "rotate"(blockState0: $BlockState$$Type, levelAccessor1: $LevelAccessor$$Type, blockPos2: $BlockPos$$Type, rotation3: $Rotation$$Type): $BlockState
public "setBedOccupied"(blockState0: $BlockState$$Type, level1: $Level$$Type, blockPos2: $BlockPos$$Type, livingEntity3: $LivingEntity$$Type, boolean4: boolean): void
public "setDestroySpeed"(v: float): void
public "setLightEmission"(v: integer): void
public "setRequiresTool"(v: boolean): void
public "shouldCheckWeakPower"(blockState0: $BlockState$$Type, signalGetter1: $SignalGetter$$Type, blockPos2: $BlockPos$$Type, direction3: $Direction$$Type): boolean
public "shouldDisplayFluidOverlay"(blockState0: $BlockState$$Type, blockAndTintGetter1: $BlockAndTintGetter$$Type, blockPos2: $BlockPos$$Type, fluidState3: $FluidState$$Type): boolean
public "supportsExternalFaceHiding"(blockState0: $BlockState$$Type): boolean
public "updateActiveNodeStatus"(level0: $Level$$Type, blockPos1: $BlockPos$$Type, iPipeNode2: $IPipeNode$$Type<PipeType, NodeDataType>): void
get "blockEntityType"(): $BlockEntityType<$PipeBlockEntity<PipeType, NodeDataType>>
get "blockStates"(): $List<$BlockState>
get "fallbackType"(): NodeDataType
get "mod"(): string
get "pickupSound"(): $Optional<$SoundEvent>
get "pipeTuneTool"(): $GTToolType
set "destroySpeed"(value: float)
set "lightEmission"(value: integer)
set "requiresTool"(value: boolean)
}
}

