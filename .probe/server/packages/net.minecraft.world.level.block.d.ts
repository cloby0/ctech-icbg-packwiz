declare module "net.minecraft.world.level.block.CrossCollisionBlock" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $CrossCollisionBlock$$Type = ($CrossCollisionBlock);
}

declare module "net.minecraft.world.level.block.ChainBlock" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $ChainBlock$$Type = ($ChainBlock);
}

declare module "net.minecraft.world.level.block.FrostedIceBlock" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $FrostedIceBlock$$Type = ($FrostedIceBlock);
}

declare module "net.minecraft.world.level.block.WallSkullBlock" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $WallSkullBlock$$Type = ($WallSkullBlock);
}

declare module "net.minecraft.world.level.block.JigsawBlock" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $JigsawBlock$$Type = ($JigsawBlock);
}

declare module "net.minecraft.world.level.block.Block" {
import { $ResourceLocation } from "net.minecraft.resources.ResourceLocation"
import { $LivingEntity$$Type } from "net.minecraft.world.entity.LivingEntity"
import { $Direction, $Direction$$Type } from "net.minecraft.core.Direction"
import { $Item$$Type } from "net.minecraft.world.item.Item"
import { $RegistryEntry } from "me.kall.duplicationless.ext.RegistryEntry"
import { $IClientBlockExtensions$$Type } from "net.minecraftforge.client.extensions.common.IClientBlockExtensions"
import { $SpawnPlacements$Type$$Type } from "net.minecraft.world.entity.SpawnPlacements$Type"
import { $BlockBehaviour$Properties$$Type } from "net.minecraft.world.level.block.state.BlockBehaviour$Properties"
import { $BlockGetter$$Type } from "net.minecraft.world.level.BlockGetter"
import { $MapColor, $MapColor$$Type } from "net.minecraft.world.level.material.MapColor"
import { $Rotation$$Type } from "net.minecraft.world.level.block.Rotation"
import { $Holder } from "net.minecraft.core.Holder"
import { $Biome$Precipitation$$Type } from "net.minecraft.world.level.biome.Biome$Precipitation"
import { $ThreadLocal } from "java.lang.ThreadLocal"
import { $StateDefinition, $StateDefinition$$Type } from "net.minecraft.world.level.block.state.StateDefinition"
import { $BlockPathTypes, $BlockPathTypes$$Type } from "net.minecraft.world.level.pathfinder.BlockPathTypes"
import { $Predicate$$Type } from "java.util.function.Predicate"
import { $RandomSource$$Type } from "net.minecraft.util.RandomSource"
import { $BlockAccessor } from "fuzs.puzzleslib.mixin.accessor.BlockAccessor"
import { $Block$BlockStatePairKey } from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import { $InjectedBlockExtension } from "dev.architectury.extensions.injected.InjectedBlockExtension"
import { $LevelReader$$Type } from "net.minecraft.world.level.LevelReader"
import { $BlockEntity$$Type } from "net.minecraft.world.level.block.entity.BlockEntity"
import { $TreeConfiguration$$Type } from "net.minecraft.world.level.levelgen.feature.configurations.TreeConfiguration"
import { $SoundType } from "net.minecraft.world.level.block.SoundType"
import { $Player$$Type } from "net.minecraft.world.entity.player.Player"
import { $IdMapper } from "net.minecraft.core.IdMapper"
import { $FeatureFlagSet$$Type } from "net.minecraft.world.flag.FeatureFlagSet"
import { $List, $List$$Type } from "java.util.List"
import { $BlockPos$$Type } from "net.minecraft.core.BlockPos"
import { $SignalGetter$$Type } from "net.minecraft.world.level.SignalGetter"
import { $IForgeBlock } from "net.minecraftforge.common.extensions.IForgeBlock"
import { $FluidState$$Type } from "net.minecraft.world.level.material.FluidState"
import { $LevelAccessor$$Type } from "net.minecraft.world.level.LevelAccessor"
import { $Optional } from "java.util.Optional"
import { $BlockPlaceContext$$Type } from "net.minecraft.world.item.context.BlockPlaceContext"
import { $ItemStack, $ItemStack$$Type } from "net.minecraft.world.item.ItemStack"
import { $Level$$Type } from "net.minecraft.world.level.Level"
import { $VoxelShape, $VoxelShape$$Type } from "net.minecraft.world.phys.shapes.VoxelShape"
import { $EntityType$$Type } from "net.minecraft.world.entity.EntityType"
import { $BlockState, $BlockState$$Type } from "net.minecraft.world.level.block.state.BlockState"
import { $ServerLevel$$Type } from "net.minecraft.server.level.ServerLevel"
import { $MutableComponent } from "net.minecraft.network.chat.MutableComponent"
import { $PushReaction } from "net.minecraft.world.level.material.PushReaction"
import { $Object2ByteLinkedOpenHashMap } from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import { $ToolAction$$Type } from "net.minecraftforge.common.ToolAction"
import { $ItemLike } from "net.minecraft.world.level.ItemLike"
import { $BiConsumer$$Type } from "java.util.function.BiConsumer"
import { $UseOnContext$$Type } from "net.minecraft.world.item.context.UseOnContext"
import { $RandomlyTickable } from "snownee.lychee.random_block_ticking.RandomlyTickable"
import { $BlockBehaviour } from "net.minecraft.world.level.block.state.BlockBehaviour"
import { $BlockAndTintGetter$$Type } from "net.minecraft.world.level.BlockAndTintGetter"
import { $Component$$Type } from "net.minecraft.network.chat.Component"
import { $ResourceKey$$Type } from "net.minecraft.resources.ResourceKey"
import { $Explosion$$Type } from "net.minecraft.world.level.Explosion"
import { $Holder$Reference, $Holder$Reference$$Type } from "net.minecraft.core.Holder$Reference"
import { $IPlantable$$Type } from "net.minecraftforge.common.IPlantable"
import { $Consumer$$Type } from "java.util.function.Consumer"
import { $HitResult$$Type } from "net.minecraft.world.phys.HitResult"
import { $DelegateHolder } from "org.embeddedt.modernfix.forge.registry.DelegateHolder"
import { $Entity$$Type } from "net.minecraft.world.entity.Entity"
import { $Vec3, $Vec3$$Type } from "net.minecraft.world.phys.Vec3"
import { $TooltipFlag$$Type } from "net.minecraft.world.item.TooltipFlag"
import { $Mob$$Type } from "net.minecraft.world.entity.Mob"

export class $Block extends $BlockBehaviour implements $ItemLike, $IForgeBlock, $DelegateHolder, $BlockAccessor, $RegistryEntry, $InjectedBlockExtension, $RandomlyTickable {
/** @deprecated */
static readonly "BLOCK_STATE_REGISTRY": $IdMapper<$BlockState>
static readonly "INDESTRUCTIBLE": float
static readonly "INSTANT": float
static readonly "OCCLUSION_CACHE": $ThreadLocal<$Object2ByteLinkedOpenHashMap<$Block$BlockStatePairKey>>
static readonly "UPDATE_ALL": integer
static readonly "UPDATE_ALL_IMMEDIATE": integer
static readonly "UPDATE_CLIENTS": integer
static readonly "UPDATE_IMMEDIATE": integer
static readonly "UPDATE_INVISIBLE": integer
static readonly "UPDATE_KNOWN_SHAPE": integer
static readonly "UPDATE_LIMIT": integer
static readonly "UPDATE_MOVE_BY_PISTON": integer
static readonly "UPDATE_NEIGHBORS": integer
static readonly "UPDATE_NONE": integer
static readonly "UPDATE_SUPPRESS_DROPS": integer

constructor(properties0: $BlockBehaviour$Properties$$Type)

public "addLandingEffects"(blockState0: $BlockState$$Type, serverLevel1: $ServerLevel$$Type, blockPos2: $BlockPos$$Type, blockState3: $BlockState$$Type, livingEntity4: $LivingEntity$$Type, int5: integer): boolean
public "addRunningEffects"(blockState0: $BlockState$$Type, level1: $Level$$Type, blockPos2: $BlockPos$$Type, entity3: $Entity$$Type): boolean
public "animateTick"(blockState0: $BlockState$$Type, level1: $Level$$Type, blockPos2: $BlockPos$$Type, randomSource3: $RandomSource$$Type): void
public "appendHoverText"(itemStack0: $ItemStack$$Type, blockGetter1: $BlockGetter$$Type, list2: $List$$Type<$Component$$Type>, tooltipFlag3: $TooltipFlag$$Type): void
public "arch$holder"(): $Holder<$Block>
public "arch$registryName"(): $ResourceLocation
public static "box"(double0: double, double1: double, double2: double, double3: double, double4: double, double5: double): $VoxelShape
/** @deprecated */
public "builtInRegistryHolder"(): $Holder$Reference<$Block>
public static "byItem"(item0: $Item$$Type): $Block
public "canBeHydrated"(blockState0: $BlockState$$Type, blockGetter1: $BlockGetter$$Type, blockPos2: $BlockPos$$Type, fluidState3: $FluidState$$Type, blockPos4: $BlockPos$$Type): boolean
public "canConnectRedstone"(blockState0: $BlockState$$Type, blockGetter1: $BlockGetter$$Type, blockPos2: $BlockPos$$Type, direction3: $Direction$$Type): boolean
public "canDropFromExplosion"(blockState0: $BlockState$$Type, blockGetter1: $BlockGetter$$Type, blockPos2: $BlockPos$$Type, explosion3: $Explosion$$Type): boolean
public "canEntityDestroy"(blockState0: $BlockState$$Type, blockGetter1: $BlockGetter$$Type, blockPos2: $BlockPos$$Type, entity3: $Entity$$Type): boolean
public "canHarvestBlock"(blockState0: $BlockState$$Type, blockGetter1: $BlockGetter$$Type, blockPos2: $BlockPos$$Type, player3: $Player$$Type): boolean
public "canStickTo"(blockState0: $BlockState$$Type, blockState1: $BlockState$$Type): boolean
public static "canSupportCenter"(levelReader0: $LevelReader$$Type, blockPos1: $BlockPos$$Type, direction2: $Direction$$Type): boolean
public static "canSupportRigidBlock"(blockGetter0: $BlockGetter$$Type, blockPos1: $BlockPos$$Type): boolean
public "canSustainPlant"(blockState0: $BlockState$$Type, blockGetter1: $BlockGetter$$Type, blockPos2: $BlockPos$$Type, direction3: $Direction$$Type, iPlantable4: $IPlantable$$Type): boolean
public "collisionExtendsVertically"(blockState0: $BlockState$$Type, blockGetter1: $BlockGetter$$Type, blockPos2: $BlockPos$$Type, entity3: $Entity$$Type): boolean
public "defaultBlockState"(): $BlockState
public "destroy"(levelAccessor0: $LevelAccessor$$Type, blockPos1: $BlockPos$$Type, blockState2: $BlockState$$Type): void
/** @deprecated */
public "dropFromExplosion"(explosion0: $Explosion$$Type): boolean
public static "dropResources"(blockState0: $BlockState$$Type, level1: $Level$$Type, blockPos2: $BlockPos$$Type): void
public static "dropResources"(blockState0: $BlockState$$Type, levelAccessor1: $LevelAccessor$$Type, blockPos2: $BlockPos$$Type, blockEntity3: $BlockEntity$$Type): void
public static "dropResources"(blockState0: $BlockState$$Type, level1: $Level$$Type, blockPos2: $BlockPos$$Type, blockEntity3: $BlockEntity$$Type, entity4: $Entity$$Type, itemStack5: $ItemStack$$Type, boolean6: boolean): void
public static "dropResources"(blockState0: $BlockState$$Type, level1: $Level$$Type, blockPos2: $BlockPos$$Type, blockEntity3: $BlockEntity$$Type, entity4: $Entity$$Type, itemStack5: $ItemStack$$Type): void
public "fallOn"(level0: $Level$$Type, blockState1: $BlockState$$Type, blockPos2: $BlockPos$$Type, entity3: $Entity$$Type, float4: float): void
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
/** @deprecated */
public "getCloneItemStack"(blockGetter0: $BlockGetter$$Type, blockPos1: $BlockPos$$Type, blockState2: $BlockState$$Type): $ItemStack
public "getCloneItemStack"(blockState0: $BlockState$$Type, hitResult1: $HitResult$$Type, blockGetter2: $BlockGetter$$Type, blockPos3: $BlockPos$$Type, player4: $Player$$Type): $ItemStack
public "getDescriptionId"(): string
public static "getDrops"(blockState0: $BlockState$$Type, serverLevel1: $ServerLevel$$Type, blockPos2: $BlockPos$$Type, blockEntity3: $BlockEntity$$Type): $List<$ItemStack>
public static "getDrops"(blockState0: $BlockState$$Type, serverLevel1: $ServerLevel$$Type, blockPos2: $BlockPos$$Type, blockEntity3: $BlockEntity$$Type, entity4: $Entity$$Type, itemStack5: $ItemStack$$Type): $List<$ItemStack>
public "getEnchantPowerBonus"(blockState0: $BlockState$$Type, levelReader1: $LevelReader$$Type, blockPos2: $BlockPos$$Type): float
public "getExpDrop"(blockState0: $BlockState$$Type, levelReader1: $LevelReader$$Type, randomSource2: $RandomSource$$Type, blockPos3: $BlockPos$$Type, int4: integer, int5: integer): integer
/** @deprecated */
public "getExplosionResistance"(): float
public "getExplosionResistance"(blockState0: $BlockState$$Type, blockGetter1: $BlockGetter$$Type, blockPos2: $BlockPos$$Type, explosion3: $Explosion$$Type): float
public "getFireSpreadSpeed"(blockState0: $BlockState$$Type, blockGetter1: $BlockGetter$$Type, blockPos2: $BlockPos$$Type, direction3: $Direction$$Type): integer
public "getFlammability"(blockState0: $BlockState$$Type, blockGetter1: $BlockGetter$$Type, blockPos2: $BlockPos$$Type, direction3: $Direction$$Type): integer
public "getFriction"(): float
public "getFriction"(blockState0: $BlockState$$Type, levelReader1: $LevelReader$$Type, blockPos2: $BlockPos$$Type, entity3: $Entity$$Type): float
public static "getId"(blockState0: $BlockState$$Type): integer
public "getJumpFactor"(): float
public "getLightEmission"(blockState0: $BlockState$$Type, blockGetter1: $BlockGetter$$Type, blockPos2: $BlockPos$$Type): integer
public "getMapColor"(blockState0: $BlockState$$Type, blockGetter1: $BlockGetter$$Type, blockPos2: $BlockPos$$Type, mapColor3: $MapColor$$Type): $MapColor
public "getMod"(): string
public "getName"(): $MutableComponent
public "getPistonPushReaction"(blockState0: $BlockState$$Type): $PushReaction
public "getRenderPropertiesInternal"(): any
public "getRespawnPosition"(blockState0: $BlockState$$Type, entityType1: $EntityType$$Type<any>, levelReader2: $LevelReader$$Type, blockPos3: $BlockPos$$Type, float4: float, livingEntity5: $LivingEntity$$Type): $Optional<$Vec3>
/** @deprecated */
public "getSoundType"(blockState0: $BlockState$$Type): $SoundType
public "getSoundType"(blockState0: $BlockState$$Type, levelReader1: $LevelReader$$Type, blockPos2: $BlockPos$$Type, entity3: $Entity$$Type): $SoundType
public "getSpeedFactor"(): float
public "getStateAtViewpoint"(blockState0: $BlockState$$Type, blockGetter1: $BlockGetter$$Type, blockPos2: $BlockPos$$Type, vec33: $Vec3$$Type): $BlockState
public "getStateDefinition"(): $StateDefinition<$Block, $BlockState>
public "getStateForPlacement"(blockPlaceContext0: $BlockPlaceContext$$Type): $BlockState
public "getToolModifiedState"(blockState0: $BlockState$$Type, useOnContext1: $UseOnContext$$Type, toolAction2: $ToolAction$$Type, boolean3: boolean): $BlockState
public "getWeakChanges"(blockState0: $BlockState$$Type, levelReader1: $LevelReader$$Type, blockPos2: $BlockPos$$Type): boolean
public "handlePrecipitation"(blockState0: $BlockState$$Type, level1: $Level$$Type, blockPos2: $BlockPos$$Type, precipitation3: $Biome$Precipitation$$Type): void
public "hasDynamicShape"(): boolean
public "hidesNeighborFace"(blockGetter0: $BlockGetter$$Type, blockPos1: $BlockPos$$Type, blockState2: $BlockState$$Type, blockState3: $BlockState$$Type, direction4: $Direction$$Type): boolean
public "initializeClient"(consumer0: $Consumer$$Type<$IClientBlockExtensions$$Type>): void
public "isBed"(blockState0: $BlockState$$Type, blockGetter1: $BlockGetter$$Type, blockPos2: $BlockPos$$Type, entity3: $Entity$$Type): boolean
public "isBurning"(blockState0: $BlockState$$Type, blockGetter1: $BlockGetter$$Type, blockPos2: $BlockPos$$Type): boolean
public "isConduitFrame"(blockState0: $BlockState$$Type, levelReader1: $LevelReader$$Type, blockPos2: $BlockPos$$Type, blockPos3: $BlockPos$$Type): boolean
public "isEnabled"(featureFlagSet0: $FeatureFlagSet$$Type): boolean
public static "isExceptionForConnection"(blockState0: $BlockState$$Type): boolean
public static "isFaceFull"(voxelShape0: $VoxelShape$$Type, direction1: $Direction$$Type): boolean
public "isFertile"(blockState0: $BlockState$$Type, blockGetter1: $BlockGetter$$Type, blockPos2: $BlockPos$$Type): boolean
public "isFireSource"(blockState0: $BlockState$$Type, levelReader1: $LevelReader$$Type, blockPos2: $BlockPos$$Type, direction3: $Direction$$Type): boolean
public "isFlammable"(blockState0: $BlockState$$Type, blockGetter1: $BlockGetter$$Type, blockPos2: $BlockPos$$Type, direction3: $Direction$$Type): boolean
public "isLadder"(blockState0: $BlockState$$Type, levelReader1: $LevelReader$$Type, blockPos2: $BlockPos$$Type, livingEntity3: $LivingEntity$$Type): boolean
public "isPortalFrame"(blockState0: $BlockState$$Type, blockGetter1: $BlockGetter$$Type, blockPos2: $BlockPos$$Type): boolean
public "isPossibleToRespawnInThis"(blockState0: $BlockState$$Type): boolean
public "isRandomlyTicking"(blockState0: $BlockState$$Type): boolean
public "isScaffolding"(blockState0: $BlockState$$Type, levelReader1: $LevelReader$$Type, blockPos2: $BlockPos$$Type, livingEntity3: $LivingEntity$$Type): boolean
public static "isShapeFullBlock"(voxelShape0: $VoxelShape$$Type): boolean
public "isSlimeBlock"(blockState0: $BlockState$$Type): boolean
public "isStickyBlock"(blockState0: $BlockState$$Type): boolean
public "isValidSpawn"(blockState0: $BlockState$$Type, blockGetter1: $BlockGetter$$Type, blockPos2: $BlockPos$$Type, type3: $SpawnPlacements$Type$$Type, entityType4: $EntityType$$Type<any>): boolean
public "lychee$isTickable"(blockState0: $BlockState$$Type): boolean
public "lychee$setTickable"(predicate0: $Predicate$$Type): void
public "makesOpenTrapdoorAboveClimbable"(blockState0: $BlockState$$Type, levelReader1: $LevelReader$$Type, blockPos2: $BlockPos$$Type, blockState3: $BlockState$$Type): boolean
public "mfix$getDelegate"(resourceKey0: $ResourceKey$$Type): $Holder$Reference
public "mfix$setDelegate"(resourceKey0: $ResourceKey$$Type, reference1: $Holder$Reference$$Type): void
public "onBlockExploded"(blockState0: $BlockState$$Type, level1: $Level$$Type, blockPos2: $BlockPos$$Type, explosion3: $Explosion$$Type): void
public "onBlockStateChange"(levelReader0: $LevelReader$$Type, blockPos1: $BlockPos$$Type, blockState2: $BlockState$$Type, blockState3: $BlockState$$Type): void
public "onCaughtFire"(blockState0: $BlockState$$Type, level1: $Level$$Type, blockPos2: $BlockPos$$Type, direction3: $Direction$$Type, livingEntity4: $LivingEntity$$Type): void
public "onDestroyedByPlayer"(blockState0: $BlockState$$Type, level1: $Level$$Type, blockPos2: $BlockPos$$Type, player3: $Player$$Type, boolean4: boolean, fluidState5: $FluidState$$Type): boolean
public "onNeighborChange"(blockState0: $BlockState$$Type, levelReader1: $LevelReader$$Type, blockPos2: $BlockPos$$Type, blockPos3: $BlockPos$$Type): void
public "onTreeGrow"(blockState0: $BlockState$$Type, levelReader1: $LevelReader$$Type, biConsumer2: $BiConsumer$$Type<$BlockPos$$Type, $BlockState$$Type>, randomSource3: $RandomSource$$Type, blockPos4: $BlockPos$$Type, treeConfiguration5: $TreeConfiguration$$Type): boolean
public "playerDestroy"(level0: $Level$$Type, player1: $Player$$Type, blockPos2: $BlockPos$$Type, blockState3: $BlockState$$Type, blockEntity4: $BlockEntity$$Type, itemStack5: $ItemStack$$Type): void
public "playerWillDestroy"(level0: $Level$$Type, blockPos1: $BlockPos$$Type, blockState2: $BlockState$$Type, player3: $Player$$Type): void
public "popExperience"(serverLevel0: $ServerLevel$$Type, blockPos1: $BlockPos$$Type, int2: integer): void
public static "popResource"(level0: $Level$$Type, blockPos1: $BlockPos$$Type, itemStack2: $ItemStack$$Type): void
public static "popResourceFromFace"(level0: $Level$$Type, blockPos1: $BlockPos$$Type, direction2: $Direction$$Type, itemStack3: $ItemStack$$Type): void
public "propagatesSkylightDown"(blockState0: $BlockState$$Type, blockGetter1: $BlockGetter$$Type, blockPos2: $BlockPos$$Type): boolean
public static "pushEntitiesUp"(blockState0: $BlockState$$Type, blockState1: $BlockState$$Type, levelAccessor2: $LevelAccessor$$Type, blockPos3: $BlockPos$$Type): $BlockState
public "registerDefaultState"(blockState0: $BlockState$$Type): void
public "registry$getName"(): $ResourceLocation
public "rotate"(blockState0: $BlockState$$Type, levelAccessor1: $LevelAccessor$$Type, blockPos2: $BlockPos$$Type, rotation3: $Rotation$$Type): $BlockState
public "setBedOccupied"(blockState0: $BlockState$$Type, level1: $Level$$Type, blockPos2: $BlockPos$$Type, livingEntity3: $LivingEntity$$Type, boolean4: boolean): void
public "setDestroySpeed"(v: float): void
public "setLightEmission"(v: integer): void
public "setPlacedBy"(level0: $Level$$Type, blockPos1: $BlockPos$$Type, blockState2: $BlockState$$Type, livingEntity3: $LivingEntity$$Type, itemStack4: $ItemStack$$Type): void
public "setRequiresTool"(v: boolean): void
public "shouldCheckWeakPower"(blockState0: $BlockState$$Type, signalGetter1: $SignalGetter$$Type, blockPos2: $BlockPos$$Type, direction3: $Direction$$Type): boolean
public "shouldDisplayFluidOverlay"(blockState0: $BlockState$$Type, blockAndTintGetter1: $BlockAndTintGetter$$Type, blockPos2: $BlockPos$$Type, fluidState3: $FluidState$$Type): boolean
public static "shouldRenderFace"(blockState0: $BlockState$$Type, blockGetter1: $BlockGetter$$Type, blockPos2: $BlockPos$$Type, direction3: $Direction$$Type, blockPos4: $BlockPos$$Type): boolean
public static "stateById"(int0: integer): $BlockState
public "stepOn"(level0: $Level$$Type, blockPos1: $BlockPos$$Type, blockState2: $BlockState$$Type, entity3: $Entity$$Type): void
public "supportsExternalFaceHiding"(blockState0: $BlockState$$Type): boolean
public "updateEntityAfterFallOn"(blockGetter0: $BlockGetter$$Type, entity1: $Entity$$Type): void
public static "updateFromNeighbourShapes"(blockState0: $BlockState$$Type, levelAccessor1: $LevelAccessor$$Type, blockPos2: $BlockPos$$Type): $BlockState
public static "updateOrDestroy"(blockState0: $BlockState$$Type, blockState1: $BlockState$$Type, levelAccessor2: $LevelAccessor$$Type, blockPos3: $BlockPos$$Type, int4: integer): void
public static "updateOrDestroy"(blockState0: $BlockState$$Type, blockState1: $BlockState$$Type, levelAccessor2: $LevelAccessor$$Type, blockPos3: $BlockPos$$Type, int4: integer, int5: integer): void
public "wasExploded"(level0: $Level$$Type, blockPos1: $BlockPos$$Type, explosion2: $Explosion$$Type): void
public "withPropertiesOf"(blockState0: $BlockState$$Type): $BlockState
get "descriptionId"(): string
set "descriptionId"(value: string)
get "stateDefinition"(): $StateDefinition<$Block, $BlockState>
set "stateDefinition"(value: $StateDefinition$$Type<$Block$$Type, $BlockState$$Type>)
get "blockStates"(): $List<$BlockState>
get "explosionResistance"(): float
get "friction"(): float
get "jumpFactor"(): float
get "mod"(): string
get "name"(): $MutableComponent
get "renderPropertiesInternal"(): any
get "speedFactor"(): float
set "destroySpeed"(value: float)
set "lightEmission"(value: integer)
set "requiresTool"(value: boolean)
/** This field is a type stub generated by ProbeJS and shall not be used in any sense. */
"probejsInternal$$Literal": Special.Block
/** This field is a type stub generated by ProbeJS and shall not be used in any sense. */
"probejsInternal$$Tag": Special.BlockTag
}
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $Block$$Type = ($Block | Special.Block);
}

declare module "net.minecraft.world.level.block.SeagrassBlock" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $SeagrassBlock$$Type = ($SeagrassBlock);
}

declare module "net.minecraft.world.level.block.SimpleWaterloggedBlock" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $SimpleWaterloggedBlock$$Type = ($SimpleWaterloggedBlock);
}

declare module "net.minecraft.world.level.block.KelpPlantBlock" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $KelpPlantBlock$$Type = ($KelpPlantBlock);
}

declare module "net.minecraft.world.level.block.PiglinWallSkullBlock" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $PiglinWallSkullBlock$$Type = ($PiglinWallSkullBlock);
}

declare module "net.minecraft.world.level.block.SupportType" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $SupportType$$Type = ($SupportType | ("full" | "center" | "rigid"));
}

declare module "net.minecraft.world.level.block.MultifaceSpreader" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $MultifaceSpreader$$Type = ($MultifaceSpreader);
}

declare module "net.minecraft.world.level.block.Rotation" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $Rotation$$Type = ($Rotation | ("none" | "clockwise_90" | "clockwise_180" | "counterclockwise_90"));
}

declare module "net.minecraft.world.level.block.CocoaBlock" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $CocoaBlock$$Type = ($CocoaBlock);
}

declare module "net.minecraft.world.level.block.PitcherCropBlock" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $PitcherCropBlock$$Type = ($PitcherCropBlock);
}

declare module "net.minecraft.world.level.block.TargetBlock" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $TargetBlock$$Type = ($TargetBlock);
}

declare module "net.minecraft.world.level.block.LeverBlock" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $LeverBlock$$Type = ($LeverBlock);
}

declare module "net.minecraft.world.level.block.NetherSproutsBlock" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $NetherSproutsBlock$$Type = ($NetherSproutsBlock);
}

declare module "net.minecraft.world.level.block.RedstoneLampBlock" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $RedstoneLampBlock$$Type = ($RedstoneLampBlock);
}

declare module "net.minecraft.world.level.block.SculkSpreader$ChargeCursor" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $SculkSpreader$ChargeCursor$$Type = ($SculkSpreader$ChargeCursor);
}

declare module "net.minecraft.world.level.block.WoolCarpetBlock" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $WoolCarpetBlock$$Type = ($WoolCarpetBlock);
}

declare module "net.minecraft.world.level.block.MushroomBlock" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $MushroomBlock$$Type = ($MushroomBlock);
}

declare module "net.minecraft.world.level.block.InfestedBlock" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $InfestedBlock$$Type = ($InfestedBlock);
}

declare module "net.minecraft.world.level.block.GrowingPlantBodyBlock" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $GrowingPlantBodyBlock$$Type = ($GrowingPlantBodyBlock);
}

declare module "net.minecraft.world.level.block.MultifaceSpreader$SpreadType" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $MultifaceSpreader$SpreadType$$Type = ($MultifaceSpreader$SpreadType | ("same_position" | "same_plane" | "wrap_around"));
}

declare module "net.minecraft.world.level.block.NetherrackBlock" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $NetherrackBlock$$Type = ($NetherrackBlock);
}

declare module "net.minecraft.world.level.block.MangroveRootsBlock" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $MangroveRootsBlock$$Type = ($MangroveRootsBlock);
}

declare module "net.minecraft.world.level.block.DaylightDetectorBlock" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $DaylightDetectorBlock$$Type = ($DaylightDetectorBlock);
}

declare module "net.minecraft.world.level.block.CaveVines" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $CaveVines$$Type = ($CaveVines);
}

declare module "net.minecraft.world.level.block.AbstractChestBlock" {
import { $BlockEntity, $BlockEntity$$Type } from "net.minecraft.world.level.block.entity.BlockEntity"

/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $AbstractChestBlock$$Type<E extends $BlockEntity = $BlockEntity> = ($AbstractChestBlock<E>);
}

declare module "net.minecraft.world.level.block.RedstoneWallTorchBlock" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $RedstoneWallTorchBlock$$Type = ($RedstoneWallTorchBlock);
}

declare module "net.minecraft.world.level.block.FungusBlock" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $FungusBlock$$Type = ($FungusBlock);
}

declare module "net.minecraft.world.level.block.WitherRoseBlock" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $WitherRoseBlock$$Type = ($WitherRoseBlock);
}

declare module "net.minecraft.world.level.block.TintedGlassBlock" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $TintedGlassBlock$$Type = ($TintedGlassBlock);
}

declare module "net.minecraft.world.level.block.DetectorRailBlock" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $DetectorRailBlock$$Type = ($DetectorRailBlock);
}

declare module "net.minecraft.world.level.block.GrowingPlantHeadBlock" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $GrowingPlantHeadBlock$$Type = ($GrowingPlantHeadBlock);
}

declare module "net.minecraft.world.level.block.BucketPickup" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $BucketPickup$$Type = ($BucketPickup);
}

declare module "net.minecraft.world.level.block.DispenserBlock" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $DispenserBlock$$Type = ($DispenserBlock);
}

declare module "net.minecraft.world.level.block.TripWireBlock" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $TripWireBlock$$Type = ($TripWireBlock);
}

declare module "net.minecraft.world.level.block.CherryLeavesBlock" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $CherryLeavesBlock$$Type = ($CherryLeavesBlock);
}

declare module "net.minecraft.world.level.block.VineBlock" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $VineBlock$$Type = ($VineBlock);
}

declare module "net.minecraft.world.level.block.TrappedChestBlock" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $TrappedChestBlock$$Type = ($TrappedChestBlock);
}

declare module "net.minecraft.world.level.block.HayBlock" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $HayBlock$$Type = ($HayBlock);
}

declare module "net.minecraft.world.level.block.SoulSandBlock" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $SoulSandBlock$$Type = ($SoulSandBlock);
}

declare module "net.minecraft.world.level.block.WitherSkullBlock" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $WitherSkullBlock$$Type = ($WitherSkullBlock);
}

declare module "net.minecraft.world.level.block.BonemealableBlock" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $BonemealableBlock$$Type = ($BonemealableBlock);
}

declare module "net.minecraft.world.level.block.FurnaceBlock" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $FurnaceBlock$$Type = ($FurnaceBlock);
}

declare module "net.minecraft.world.level.block.BigDripleafBlock" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $BigDripleafBlock$$Type = ($BigDripleafBlock);
}

declare module "net.minecraft.world.level.block.BeaconBlock" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $BeaconBlock$$Type = ($BeaconBlock);
}

declare module "net.minecraft.world.level.block.CalibratedSculkSensorBlock" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $CalibratedSculkSensorBlock$$Type = ($CalibratedSculkSensorBlock);
}

declare module "net.minecraft.world.level.block.SculkBlock" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $SculkBlock$$Type = ($SculkBlock);
}

declare module "net.minecraft.world.level.block.Fallable" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $Fallable$$Type = ($Fallable);
}

declare module "net.minecraft.world.level.block.MudBlock" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $MudBlock$$Type = ($MudBlock);
}

declare module "net.minecraft.world.level.block.HangingRootsBlock" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $HangingRootsBlock$$Type = ($HangingRootsBlock);
}

declare module "net.minecraft.world.level.block.EquipableCarvedPumpkinBlock" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $EquipableCarvedPumpkinBlock$$Type = ($EquipableCarvedPumpkinBlock);
}

declare module "net.minecraft.world.level.block.CakeBlock" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $CakeBlock$$Type = ($CakeBlock);
}

declare module "net.minecraft.world.level.block.WallHangingSignBlock" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $WallHangingSignBlock$$Type = ($WallHangingSignBlock);
}

declare module "net.minecraft.world.level.block.TripWireHookBlock" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $TripWireHookBlock$$Type = ($TripWireHookBlock);
}

declare module "net.minecraft.world.level.block.SnowLayerBlock" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $SnowLayerBlock$$Type = ($SnowLayerBlock);
}

declare module "net.minecraft.world.level.block.BeaconBeamBlock" {
import { $DyeColor$$Type } from "net.minecraft.world.item.DyeColor"

/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $BeaconBeamBlock$$Type = ($BeaconBeamBlock | (() => $DyeColor$$Type));
}

declare module "net.minecraft.world.level.block.InfestedRotatedPillarBlock" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $InfestedRotatedPillarBlock$$Type = ($InfestedRotatedPillarBlock);
}

declare module "net.minecraft.world.level.block.WeepingVinesPlantBlock" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $WeepingVinesPlantBlock$$Type = ($WeepingVinesPlantBlock);
}

declare module "net.minecraft.world.level.block.BaseCoralPlantTypeBlock" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $BaseCoralPlantTypeBlock$$Type = ($BaseCoralPlantTypeBlock);
}

declare module "net.minecraft.world.level.block.RedStoneOreBlock" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $RedStoneOreBlock$$Type = ($RedStoneOreBlock);
}

declare module "net.minecraft.world.level.block.LiquidBlockContainer" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $LiquidBlockContainer$$Type = ($LiquidBlockContainer);
}

declare module "net.minecraft.world.level.block.RedStoneWireBlock" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $RedStoneWireBlock$$Type = ($RedStoneWireBlock);
}

declare module "net.minecraft.world.level.block.TallFlowerBlock" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $TallFlowerBlock$$Type = ($TallFlowerBlock);
}

declare module "net.minecraft.world.level.block.WallTorchBlock" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $WallTorchBlock$$Type = ($WallTorchBlock);
}

declare module "net.minecraft.world.level.block.SpongeBlock" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $SpongeBlock$$Type = ($SpongeBlock);
}

declare module "net.minecraft.world.level.block.WaterlilyBlock" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $WaterlilyBlock$$Type = ($WaterlilyBlock);
}

declare module "net.minecraft.world.level.block.DeadBushBlock" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $DeadBushBlock$$Type = ($DeadBushBlock);
}

declare module "net.minecraft.world.level.block.BannerBlock" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $BannerBlock$$Type = ($BannerBlock);
}

declare module "net.minecraft.world.level.block.FenceBlock" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $FenceBlock$$Type = ($FenceBlock);
}

declare module "net.minecraft.world.level.block.ShulkerBoxBlock" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $ShulkerBoxBlock$$Type = ($ShulkerBoxBlock);
}

declare module "net.minecraft.world.level.block.MangroveLeavesBlock" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $MangroveLeavesBlock$$Type = ($MangroveLeavesBlock);
}

declare module "net.minecraft.world.level.block.IceBlock" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $IceBlock$$Type = ($IceBlock);
}

declare module "net.minecraft.world.level.block.EndGatewayBlock" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $EndGatewayBlock$$Type = ($EndGatewayBlock);
}

declare module "net.minecraft.world.level.block.CactusBlock" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $CactusBlock$$Type = ($CactusBlock);
}

declare module "net.minecraft.world.level.block.CarrotBlock" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $CarrotBlock$$Type = ($CarrotBlock);
}

declare module "net.minecraft.world.level.block.DragonEggBlock" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $DragonEggBlock$$Type = ($DragonEggBlock);
}

declare module "net.minecraft.world.level.block.TallSeagrassBlock" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $TallSeagrassBlock$$Type = ($TallSeagrassBlock);
}

declare module "net.minecraft.world.level.block.LiquidBlock" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $LiquidBlock$$Type = ($LiquidBlock);
}

declare module "net.minecraft.world.level.block.WeightedPressurePlateBlock" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $WeightedPressurePlateBlock$$Type = ($WeightedPressurePlateBlock);
}

declare module "net.minecraft.world.level.block.DecoratedPotBlock" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $DecoratedPotBlock$$Type = ($DecoratedPotBlock);
}

declare module "net.minecraft.world.level.block.WeepingVinesBlock" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $WeepingVinesBlock$$Type = ($WeepingVinesBlock);
}

declare module "net.minecraft.world.level.block.AbstractGlassBlock" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $AbstractGlassBlock$$Type = ($AbstractGlassBlock);
}

declare module "net.minecraft.world.level.block.TwistingVinesPlantBlock" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $TwistingVinesPlantBlock$$Type = ($TwistingVinesPlantBlock);
}

declare module "net.minecraft.world.level.block.CoralBlock" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $CoralBlock$$Type = ($CoralBlock);
}

declare module "net.minecraft.world.level.block.CropBlock" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $CropBlock$$Type = ($CropBlock);
}

declare module "net.minecraft.world.level.block.GlassBlock" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $GlassBlock$$Type = ($GlassBlock);
}

declare module "net.minecraft.world.level.block.FlowerBlock" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $FlowerBlock$$Type = ($FlowerBlock);
}

declare module "net.minecraft.world.level.block.GrindstoneBlock" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $GrindstoneBlock$$Type = ($GrindstoneBlock);
}

declare module "net.minecraft.world.level.block.BaseCoralPlantBlock" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $BaseCoralPlantBlock$$Type = ($BaseCoralPlantBlock);
}

declare module "net.minecraft.world.level.block.KelpBlock" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $KelpBlock$$Type = ($KelpBlock);
}

declare module "net.minecraft.world.level.block.HorizontalDirectionalBlock" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $HorizontalDirectionalBlock$$Type = ($HorizontalDirectionalBlock);
}

declare module "net.minecraft.world.level.block.RootedDirtBlock" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $RootedDirtBlock$$Type = ($RootedDirtBlock);
}

declare module "net.minecraft.world.level.block.SignBlock" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $SignBlock$$Type = ($SignBlock);
}

declare module "net.minecraft.world.level.block.PressurePlateBlock" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $PressurePlateBlock$$Type = ($PressurePlateBlock);
}

declare module "net.minecraft.world.level.block.MagmaBlock" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $MagmaBlock$$Type = ($MagmaBlock);
}

declare module "net.minecraft.world.level.block.DiodeBlock" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $DiodeBlock$$Type = ($DiodeBlock);
}

declare module "net.minecraft.world.level.block.FletchingTableBlock" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $FletchingTableBlock$$Type = ($FletchingTableBlock);
}

declare module "net.minecraft.world.level.block.DoubleBlockCombiner$NeighborCombineResult" {
import { $DoubleBlockCombiner$Combiner } from "net.minecraft.world.level.block.DoubleBlockCombiner$Combiner"

/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $DoubleBlockCombiner$NeighborCombineResult$$Type<S = any> = ($DoubleBlockCombiner$NeighborCombineResult<S> | ((arg0: $DoubleBlockCombiner$Combiner<S, T>) => T));
}

declare module "net.minecraft.world.level.block.WeatheringCopper$WeatherState" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $WeatheringCopper$WeatherState$$Type = ($WeatheringCopper$WeatherState | ("unaffected" | "exposed" | "weathered" | "oxidized"));
}

declare module "net.minecraft.world.level.block.AmethystBlock" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $AmethystBlock$$Type = ($AmethystBlock);
}

declare module "net.minecraft.world.level.block.MangrovePropaguleBlock" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $MangrovePropaguleBlock$$Type = ($MangrovePropaguleBlock);
}

declare module "net.minecraft.world.level.block.AbstractCauldronBlock" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $AbstractCauldronBlock$$Type = ($AbstractCauldronBlock);
}

declare module "net.minecraft.world.level.block.MultifaceSpreader$SpreadPos" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $MultifaceSpreader$SpreadPos$$Type = ($MultifaceSpreader$SpreadPos);
}

declare module "net.minecraft.world.level.block.LeavesBlock" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $LeavesBlock$$Type = ($LeavesBlock);
}

declare module "net.minecraft.world.level.block.ConcretePowderBlock" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $ConcretePowderBlock$$Type = ($ConcretePowderBlock);
}

declare module "net.minecraft.world.level.block.RotatedPillarBlock" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $RotatedPillarBlock$$Type = ($RotatedPillarBlock);
}

declare module "net.minecraft.world.level.block.FallingBlock" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $FallingBlock$$Type = ($FallingBlock);
}

declare module "net.minecraft.world.level.block.RedstoneTorchBlock" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $RedstoneTorchBlock$$Type = ($RedstoneTorchBlock);
}

declare module "net.minecraft.world.level.block.SculkSensorBlock" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $SculkSensorBlock$$Type = ($SculkSensorBlock);
}

declare module "net.minecraft.world.level.block.CarpetBlock" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $CarpetBlock$$Type = ($CarpetBlock);
}

declare module "net.minecraft.world.level.block.AttachedStemBlock" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $AttachedStemBlock$$Type = ($AttachedStemBlock);
}

declare module "net.minecraft.world.level.block.EntityBlock" {
import { $BlockPos } from "net.minecraft.core.BlockPos"
import { $BlockState } from "net.minecraft.world.level.block.state.BlockState"
import { $BlockEntity$$Type } from "net.minecraft.world.level.block.entity.BlockEntity"

/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $EntityBlock$$Type = ($EntityBlock | ((arg0: $BlockPos, arg1: $BlockState) => $BlockEntity$$Type));
}

declare module "net.minecraft.world.level.block.FaceAttachedHorizontalDirectionalBlock" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $FaceAttachedHorizontalDirectionalBlock$$Type = ($FaceAttachedHorizontalDirectionalBlock);
}

declare module "net.minecraft.world.level.block.CryingObsidianBlock" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $CryingObsidianBlock$$Type = ($CryingObsidianBlock);
}

declare module "net.minecraft.world.level.block.PlayerWallHeadBlock" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $PlayerWallHeadBlock$$Type = ($PlayerWallHeadBlock);
}

declare module "net.minecraft.world.level.block.ButtonBlock" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $ButtonBlock$$Type = ($ButtonBlock);
}

declare module "net.minecraft.world.level.block.LoomBlock" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $LoomBlock$$Type = ($LoomBlock);
}

declare module "net.minecraft.world.level.block.CoralFanBlock" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $CoralFanBlock$$Type = ($CoralFanBlock);
}

declare module "net.minecraft.world.level.block.BubbleColumnBlock" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $BubbleColumnBlock$$Type = ($BubbleColumnBlock);
}

declare module "net.minecraft.world.level.block.RootsBlock" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $RootsBlock$$Type = ($RootsBlock);
}

declare module "net.minecraft.world.level.block.MelonBlock" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $MelonBlock$$Type = ($MelonBlock);
}

declare module "net.minecraft.world.level.block.IronBarsBlock" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $IronBarsBlock$$Type = ($IronBarsBlock);
}

declare module "net.minecraft.world.level.block.WallSignBlock" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $WallSignBlock$$Type = ($WallSignBlock);
}

declare module "net.minecraft.world.level.block.WallBannerBlock" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $WallBannerBlock$$Type = ($WallBannerBlock);
}

declare module "net.minecraft.world.level.block.Block$BlockStatePairKey" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $Block$BlockStatePairKey$$Type = ($Block$BlockStatePairKey);
}

declare module "net.minecraft.world.level.block.HoneyBlock" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $HoneyBlock$$Type = ($HoneyBlock);
}

declare module "net.minecraft.world.level.block.SmithingTableBlock" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $SmithingTableBlock$$Type = ($SmithingTableBlock);
}

declare module "net.minecraft.world.level.block.WebBlock" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $WebBlock$$Type = ($WebBlock);
}

declare module "net.minecraft.world.level.block.BuddingAmethystBlock" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $BuddingAmethystBlock$$Type = ($BuddingAmethystBlock);
}

declare module "net.minecraft.world.level.block.CoralPlantBlock" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $CoralPlantBlock$$Type = ($CoralPlantBlock);
}

declare module "net.minecraft.world.level.block.MultifaceBlock" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $MultifaceBlock$$Type = ($MultifaceBlock);
}

declare module "net.minecraft.world.level.block.StructureVoidBlock" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $StructureVoidBlock$$Type = ($StructureVoidBlock);
}

declare module "net.minecraft.world.level.block.AbstractFurnaceBlock" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $AbstractFurnaceBlock$$Type = ($AbstractFurnaceBlock);
}

declare module "net.minecraft.world.level.block.DoubleBlockCombiner$Combiner" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $DoubleBlockCombiner$Combiner$$Type<S = any, T = any> = ($DoubleBlockCombiner$Combiner<S, T>);
}

declare module "net.minecraft.world.level.block.LayeredCauldronBlock" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $LayeredCauldronBlock$$Type = ($LayeredCauldronBlock);
}

declare module "net.minecraft.world.level.block.AbstractSkullBlock" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $AbstractSkullBlock$$Type = ($AbstractSkullBlock);
}

declare module "net.minecraft.world.level.block.SculkSpreader" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $SculkSpreader$$Type = ($SculkSpreader);
}

declare module "net.minecraft.world.level.block.RailBlock" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $RailBlock$$Type = ($RailBlock);
}

declare module "net.minecraft.world.level.block.AbstractBannerBlock" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $AbstractBannerBlock$$Type = ($AbstractBannerBlock);
}

declare module "net.minecraft.world.level.block.HopperBlock" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $HopperBlock$$Type = ($HopperBlock);
}

declare module "net.minecraft.world.level.block.TorchBlock" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $TorchBlock$$Type = ($TorchBlock);
}

declare module "net.minecraft.world.level.block.TwistingVinesBlock" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $TwistingVinesBlock$$Type = ($TwistingVinesBlock);
}

declare module "net.minecraft.world.level.block.DropExperienceBlock" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $DropExperienceBlock$$Type = ($DropExperienceBlock);
}

declare module "net.minecraft.world.level.block.SugarCaneBlock" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $SugarCaneBlock$$Type = ($SugarCaneBlock);
}

declare module "net.minecraft.world.level.block.WeatheringCopperSlabBlock" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $WeatheringCopperSlabBlock$$Type = ($WeatheringCopperSlabBlock);
}

declare module "net.minecraft.world.level.block.PowderSnowCauldronBlock" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $PowderSnowCauldronBlock$$Type = ($PowderSnowCauldronBlock);
}

declare module "net.minecraft.world.level.block.Blocks" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $Blocks$$Type = ($Blocks);
}

declare module "net.minecraft.world.level.block.MyceliumBlock" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $MyceliumBlock$$Type = ($MyceliumBlock);
}

declare module "net.minecraft.world.level.block.DirtPathBlock" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $DirtPathBlock$$Type = ($DirtPathBlock);
}

declare module "net.minecraft.world.level.block.NyliumBlock" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $NyliumBlock$$Type = ($NyliumBlock);
}

declare module "net.minecraft.world.level.block.BaseCoralWallFanBlock" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $BaseCoralWallFanBlock$$Type = ($BaseCoralWallFanBlock);
}

declare module "net.minecraft.world.level.block.SculkBehaviour" {
import { $BlockPos } from "net.minecraft.core.BlockPos"
import { $SculkSpreader$ChargeCursor } from "net.minecraft.world.level.block.SculkSpreader$ChargeCursor"
import { $LevelAccessor } from "net.minecraft.world.level.LevelAccessor"
import { $RandomSource } from "net.minecraft.util.RandomSource"
import { $SculkSpreader } from "net.minecraft.world.level.block.SculkSpreader"

/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $SculkBehaviour$$Type = ($SculkBehaviour | ((arg0: $SculkSpreader$ChargeCursor, arg1: $LevelAccessor, arg2: $BlockPos, arg3: $RandomSource, arg4: $SculkSpreader, arg5: boolean) => integer));
}

declare module "net.minecraft.world.level.block.PowderSnowBlock" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $PowderSnowBlock$$Type = ($PowderSnowBlock);
}

declare module "net.minecraft.world.level.block.WetSpongeBlock" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $WetSpongeBlock$$Type = ($WetSpongeBlock);
}

declare module "net.minecraft.world.level.block.LadderBlock" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $LadderBlock$$Type = ($LadderBlock);
}

declare module "net.minecraft.world.level.block.CauldronBlock" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $CauldronBlock$$Type = ($CauldronBlock);
}

declare module "net.minecraft.world.level.block.ConduitBlock" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $ConduitBlock$$Type = ($ConduitBlock);
}

declare module "net.minecraft.world.level.block.CandleCakeBlock" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $CandleCakeBlock$$Type = ($CandleCakeBlock);
}

declare module "net.minecraft.world.level.block.CommandBlock" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $CommandBlock$$Type = ($CommandBlock);
}

declare module "net.minecraft.world.level.block.CandleBlock" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $CandleBlock$$Type = ($CandleBlock);
}

declare module "net.minecraft.world.level.block.LightBlock" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $LightBlock$$Type = ($LightBlock);
}

declare module "net.minecraft.world.level.block.SculkCatalystBlock" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $SculkCatalystBlock$$Type = ($SculkCatalystBlock);
}

declare module "net.minecraft.world.level.block.StainedGlassPaneBlock" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $StainedGlassPaneBlock$$Type = ($StainedGlassPaneBlock);
}

declare module "net.minecraft.world.level.block.NetherPortalBlock" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $NetherPortalBlock$$Type = ($NetherPortalBlock);
}

declare module "net.minecraft.world.level.block.AmethystClusterBlock" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $AmethystClusterBlock$$Type = ($AmethystClusterBlock);
}

declare module "net.minecraft.world.level.block.SaplingBlock" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $SaplingBlock$$Type = ($SaplingBlock);
}

declare module "net.minecraft.world.level.block.BedBlock" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $BedBlock$$Type = ($BedBlock);
}

declare module "net.minecraft.world.level.block.PumpkinBlock" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $PumpkinBlock$$Type = ($PumpkinBlock);
}

declare module "net.minecraft.world.level.block.HugeMushroomBlock" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $HugeMushroomBlock$$Type = ($HugeMushroomBlock);
}

declare module "net.minecraft.world.level.block.StemBlock" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $StemBlock$$Type = ($StemBlock);
}

declare module "net.minecraft.world.level.block.ChestBlock" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $ChestBlock$$Type = ($ChestBlock);
}

declare module "net.minecraft.world.level.block.PinkPetalsBlock" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $PinkPetalsBlock$$Type = ($PinkPetalsBlock);
}

declare module "net.minecraft.world.level.block.SweetBerryBushBlock" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $SweetBerryBushBlock$$Type = ($SweetBerryBushBlock);
}

declare module "net.minecraft.world.level.block.StonecutterBlock" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $StonecutterBlock$$Type = ($StonecutterBlock);
}

declare module "net.minecraft.world.level.block.DirectionalBlock" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $DirectionalBlock$$Type = ($DirectionalBlock);
}

declare module "net.minecraft.world.level.block.BeehiveBlock" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $BeehiveBlock$$Type = ($BeehiveBlock);
}

declare module "net.minecraft.world.level.block.SpreadingSnowyDirtBlock" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $SpreadingSnowyDirtBlock$$Type = ($SpreadingSnowyDirtBlock);
}

declare module "net.minecraft.world.level.block.SuspiciousEffectHolder" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $SuspiciousEffectHolder$$Type = ($SuspiciousEffectHolder);
}

declare module "net.minecraft.world.level.block.BambooStalkBlock" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $BambooStalkBlock$$Type = ($BambooStalkBlock);
}

declare module "net.minecraft.world.level.block.CarvedPumpkinBlock" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $CarvedPumpkinBlock$$Type = ($CarvedPumpkinBlock);
}

declare module "net.minecraft.world.level.block.WitherWallSkullBlock" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $WitherWallSkullBlock$$Type = ($WitherWallSkullBlock);
}

declare module "net.minecraft.world.level.block.SoundType" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $SoundType$$Type = ($SoundType | string);
}

declare module "net.minecraft.world.level.block.ComposterBlock" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $ComposterBlock$$Type = ($ComposterBlock);
}

declare module "net.minecraft.world.level.block.ObserverBlock" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $ObserverBlock$$Type = ($ObserverBlock);
}

declare module "net.minecraft.world.level.block.BlastFurnaceBlock" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $BlastFurnaceBlock$$Type = ($BlastFurnaceBlock);
}

declare module "net.minecraft.world.level.block.BaseFireBlock" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $BaseFireBlock$$Type = ($BaseFireBlock);
}

declare module "net.minecraft.world.level.block.BarrelBlock" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $BarrelBlock$$Type = ($BarrelBlock);
}

declare module "net.minecraft.world.level.block.Mirror" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $Mirror$$Type = ($Mirror | ("none" | "left_right" | "front_back"));
}

declare module "net.minecraft.world.level.block.StainedGlassBlock" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $StainedGlassBlock$$Type = ($StainedGlassBlock);
}

declare module "net.minecraft.world.level.block.ChorusPlantBlock" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $ChorusPlantBlock$$Type = ($ChorusPlantBlock);
}

declare module "net.minecraft.world.level.block.AbstractCandleBlock" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $AbstractCandleBlock$$Type = ($AbstractCandleBlock);
}

declare module "net.minecraft.world.level.block.StairBlock" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $StairBlock$$Type = ($StairBlock);
}

declare module "net.minecraft.world.level.block.ChangeOverTimeBlock" {
import { $Enum, $Enum$$Type } from "java.lang.Enum"

/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $ChangeOverTimeBlock$$Type<T extends $Enum<T> = $Enum<T>> = ($ChangeOverTimeBlock<T>);
}

declare module "net.minecraft.world.level.block.MultifaceSpreader$SpreadPredicate" {
import { $BlockGetter } from "net.minecraft.world.level.BlockGetter"
import { $BlockPos } from "net.minecraft.core.BlockPos"
import { $MultifaceSpreader$SpreadPos } from "net.minecraft.world.level.block.MultifaceSpreader$SpreadPos"

/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $MultifaceSpreader$SpreadPredicate$$Type = ($MultifaceSpreader$SpreadPredicate | ((arg0: $BlockGetter, arg1: $BlockPos, arg2: $MultifaceSpreader$SpreadPos) => boolean));
}

declare module "net.minecraft.world.level.block.TorchflowerCropBlock" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $TorchflowerCropBlock$$Type = ($TorchflowerCropBlock);
}

declare module "net.minecraft.world.level.block.ChorusFlowerBlock" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $ChorusFlowerBlock$$Type = ($ChorusFlowerBlock);
}

declare module "net.minecraft.world.level.block.SmallDripleafBlock" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $SmallDripleafBlock$$Type = ($SmallDripleafBlock);
}

declare module "net.minecraft.world.level.block.FireBlock" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $FireBlock$$Type = ($FireBlock);
}

declare module "net.minecraft.world.level.block.FlowerPotBlock" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $FlowerPotBlock$$Type = ($FlowerPotBlock);
}

declare module "net.minecraft.world.level.block.BasePressurePlateBlock" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $BasePressurePlateBlock$$Type = ($BasePressurePlateBlock);
}

declare module "net.minecraft.world.level.block.PipeBlock" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $PipeBlock$$Type = ($PipeBlock);
}

declare module "net.minecraft.world.level.block.WeatheringCopperFullBlock" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $WeatheringCopperFullBlock$$Type = ($WeatheringCopperFullBlock);
}

declare module "net.minecraft.world.level.block.NoteBlock" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $NoteBlock$$Type = ($NoteBlock);
}

declare module "net.minecraft.world.level.block.PoweredRailBlock" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $PoweredRailBlock$$Type = ($PoweredRailBlock);
}

declare module "net.minecraft.world.level.block.ChiseledBookShelfBlock" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $ChiseledBookShelfBlock$$Type = ($ChiseledBookShelfBlock);
}

declare module "net.minecraft.world.level.block.BellBlock" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $BellBlock$$Type = ($BellBlock);
}

declare module "net.minecraft.world.level.block.PlayerHeadBlock" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $PlayerHeadBlock$$Type = ($PlayerHeadBlock);
}

declare module "net.minecraft.world.level.block.CeilingHangingSignBlock" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $CeilingHangingSignBlock$$Type = ($CeilingHangingSignBlock);
}

declare module "net.minecraft.world.level.block.RodBlock" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $RodBlock$$Type = ($RodBlock);
}

declare module "net.minecraft.world.level.block.LanternBlock" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $LanternBlock$$Type = ($LanternBlock);
}

declare module "net.minecraft.world.level.block.SporeBlossomBlock" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $SporeBlossomBlock$$Type = ($SporeBlossomBlock);
}

declare module "net.minecraft.world.level.block.GravelBlock" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $GravelBlock$$Type = ($GravelBlock);
}

declare module "net.minecraft.world.level.block.CoralWallFanBlock" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $CoralWallFanBlock$$Type = ($CoralWallFanBlock);
}

declare module "net.minecraft.world.level.block.CartographyTableBlock" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $CartographyTableBlock$$Type = ($CartographyTableBlock);
}

declare module "net.minecraft.world.level.block.SkullBlock$Type" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $SkullBlock$Type$$Type = ($SkullBlock$Type);
}

declare module "net.minecraft.world.level.block.PotatoBlock" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $PotatoBlock$$Type = ($PotatoBlock);
}

declare module "net.minecraft.world.level.block.SpawnerBlock" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $SpawnerBlock$$Type = ($SpawnerBlock);
}

declare module "net.minecraft.world.level.block.FenceGateBlock" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $FenceGateBlock$$Type = ($FenceGateBlock);
}

declare module "net.minecraft.world.level.block.TntBlock" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $TntBlock$$Type = ($TntBlock);
}

declare module "net.minecraft.world.level.block.DoorBlock" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $DoorBlock$$Type = ($DoorBlock);
}

declare module "net.minecraft.world.level.block.AnvilBlock" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $AnvilBlock$$Type = ($AnvilBlock);
}

declare module "net.minecraft.world.level.block.TallGrassBlock" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $TallGrassBlock$$Type = ($TallGrassBlock);
}

declare module "net.minecraft.world.level.block.LightningRodBlock" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $LightningRodBlock$$Type = ($LightningRodBlock);
}

declare module "net.minecraft.world.level.block.GrassBlock" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $GrassBlock$$Type = ($GrassBlock);
}

declare module "net.minecraft.world.level.block.BrewingStandBlock" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $BrewingStandBlock$$Type = ($BrewingStandBlock);
}

declare module "net.minecraft.world.level.block.CaveVinesBlock" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $CaveVinesBlock$$Type = ($CaveVinesBlock);
}

declare module "net.minecraft.world.level.block.SnowyDirtBlock" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $SnowyDirtBlock$$Type = ($SnowyDirtBlock);
}

declare module "net.minecraft.world.level.block.LecternBlock" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $LecternBlock$$Type = ($LecternBlock);
}

declare module "net.minecraft.world.level.block.CampfireBlock" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $CampfireBlock$$Type = ($CampfireBlock);
}

declare module "net.minecraft.world.level.block.SculkShriekerBlock" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $SculkShriekerBlock$$Type = ($SculkShriekerBlock);
}

declare module "net.minecraft.world.level.block.DoubleBlockCombiner$BlockType" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $DoubleBlockCombiner$BlockType$$Type = ($DoubleBlockCombiner$BlockType | ("single" | "first" | "second"));
}

declare module "net.minecraft.world.level.block.SmokerBlock" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $SmokerBlock$$Type = ($SmokerBlock);
}

declare module "net.minecraft.world.level.block.GlazedTerracottaBlock" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $GlazedTerracottaBlock$$Type = ($GlazedTerracottaBlock);
}

declare module "net.minecraft.world.level.block.EnderChestBlock" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $EnderChestBlock$$Type = ($EnderChestBlock);
}

declare module "net.minecraft.world.level.block.RepeaterBlock" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $RepeaterBlock$$Type = ($RepeaterBlock);
}

declare module "net.minecraft.world.level.block.SculkVeinBlock" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $SculkVeinBlock$$Type = ($SculkVeinBlock);
}

declare module "net.minecraft.world.level.block.SoulFireBlock" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $SoulFireBlock$$Type = ($SoulFireBlock);
}

declare module "net.minecraft.world.level.block.StandingSignBlock" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $StandingSignBlock$$Type = ($StandingSignBlock);
}

declare module "net.minecraft.world.level.block.MossBlock" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $MossBlock$$Type = ($MossBlock);
}

declare module "net.minecraft.world.level.block.HalfTransparentBlock" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $HalfTransparentBlock$$Type = ($HalfTransparentBlock);
}

declare module "net.minecraft.world.level.block.SeaPickleBlock" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $SeaPickleBlock$$Type = ($SeaPickleBlock);
}

declare module "net.minecraft.world.level.block.BambooSaplingBlock" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $BambooSaplingBlock$$Type = ($BambooSaplingBlock);
}

declare module "net.minecraft.world.level.block.TurtleEggBlock" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $TurtleEggBlock$$Type = ($TurtleEggBlock);
}

declare module "net.minecraft.world.level.block.PoweredBlock" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $PoweredBlock$$Type = ($PoweredBlock);
}

declare module "net.minecraft.world.level.block.BeetrootBlock" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $BeetrootBlock$$Type = ($BeetrootBlock);
}

declare module "net.minecraft.world.level.block.CraftingTableBlock" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $CraftingTableBlock$$Type = ($CraftingTableBlock);
}

declare module "net.minecraft.world.level.block.BarrierBlock" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $BarrierBlock$$Type = ($BarrierBlock);
}

declare module "net.minecraft.world.level.block.SkullBlock" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $SkullBlock$$Type = ($SkullBlock);
}

declare module "net.minecraft.world.level.block.WeatheringCopper" {
import { $WeatheringCopper$WeatherState$$Type } from "net.minecraft.world.level.block.WeatheringCopper$WeatherState"

/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $WeatheringCopper$$Type = ($WeatheringCopper | (() => $WeatheringCopper$WeatherState$$Type));
}

declare module "net.minecraft.world.level.block.FrogspawnBlock" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $FrogspawnBlock$$Type = ($FrogspawnBlock);
}

declare module "net.minecraft.world.level.block.ScaffoldingBlock" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $ScaffoldingBlock$$Type = ($ScaffoldingBlock);
}

declare module "net.minecraft.world.level.block.JukeboxBlock" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $JukeboxBlock$$Type = ($JukeboxBlock);
}

declare module "net.minecraft.world.level.block.NetherWartBlock" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $NetherWartBlock$$Type = ($NetherWartBlock);
}

declare module "net.minecraft.world.level.block.DoublePlantBlock" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $DoublePlantBlock$$Type = ($DoublePlantBlock);
}

declare module "net.minecraft.world.level.block.ComparatorBlock" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $ComparatorBlock$$Type = ($ComparatorBlock);
}

declare module "net.minecraft.world.level.block.EndRodBlock" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $EndRodBlock$$Type = ($EndRodBlock);
}

declare module "net.minecraft.world.level.block.SlimeBlock" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $SlimeBlock$$Type = ($SlimeBlock);
}

declare module "net.minecraft.world.level.block.StructureBlock" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $StructureBlock$$Type = ($StructureBlock);
}

declare module "net.minecraft.world.level.block.DropperBlock" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $DropperBlock$$Type = ($DropperBlock);
}

declare module "net.minecraft.world.level.block.PointedDripstoneBlock" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $PointedDripstoneBlock$$Type = ($PointedDripstoneBlock);
}

declare module "net.minecraft.world.level.block.SlabBlock" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $SlabBlock$$Type = ($SlabBlock);
}

declare module "net.minecraft.world.level.block.BaseCoralFanBlock" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $BaseCoralFanBlock$$Type = ($BaseCoralFanBlock);
}

declare module "net.minecraft.world.level.block.GrowingPlantBlock" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $GrowingPlantBlock$$Type = ($GrowingPlantBlock);
}

declare module "net.minecraft.world.level.block.TrapDoorBlock" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $TrapDoorBlock$$Type = ($TrapDoorBlock);
}

declare module "net.minecraft.world.level.block.SnifferEggBlock" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $SnifferEggBlock$$Type = ($SnifferEggBlock);
}

declare module "net.minecraft.world.level.block.RenderShape" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $RenderShape$$Type = ($RenderShape | ("invisible" | "entityblock_animated" | "model"));
}

declare module "net.minecraft.world.level.block.GameMasterBlock" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $GameMasterBlock$$Type = ($GameMasterBlock);
}

declare module "net.minecraft.world.level.block.LavaCauldronBlock" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $LavaCauldronBlock$$Type = ($LavaCauldronBlock);
}

declare module "net.minecraft.world.level.block.AzaleaBlock" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $AzaleaBlock$$Type = ($AzaleaBlock);
}

declare module "net.minecraft.world.level.block.BaseEntityBlock" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $BaseEntityBlock$$Type = ($BaseEntityBlock);
}

declare module "net.minecraft.world.level.block.GlowLichenBlock" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $GlowLichenBlock$$Type = ($GlowLichenBlock);
}

declare module "net.minecraft.world.level.block.EndPortalBlock" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $EndPortalBlock$$Type = ($EndPortalBlock);
}

declare module "net.minecraft.world.level.block.WallBlock" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $WallBlock$$Type = ($WallBlock);
}

declare module "net.minecraft.world.level.block.BigDripleafStemBlock" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $BigDripleafStemBlock$$Type = ($BigDripleafStemBlock);
}

declare module "net.minecraft.world.level.block.EnchantmentTableBlock" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $EnchantmentTableBlock$$Type = ($EnchantmentTableBlock);
}

declare module "net.minecraft.world.level.block.StemGrownBlock" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $StemGrownBlock$$Type = ($StemGrownBlock);
}

declare module "net.minecraft.world.level.block.FarmBlock" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $FarmBlock$$Type = ($FarmBlock);
}

declare module "net.minecraft.world.level.block.SandBlock" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $SandBlock$$Type = ($SandBlock);
}

declare module "net.minecraft.world.level.block.AirBlock" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $AirBlock$$Type = ($AirBlock);
}

declare module "net.minecraft.world.level.block.CaveVinesPlantBlock" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $CaveVinesPlantBlock$$Type = ($CaveVinesPlantBlock);
}

declare module "net.minecraft.world.level.block.RespawnAnchorBlock" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $RespawnAnchorBlock$$Type = ($RespawnAnchorBlock);
}

declare module "net.minecraft.world.level.block.EndPortalFrameBlock" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $EndPortalFrameBlock$$Type = ($EndPortalFrameBlock);
}

declare module "net.minecraft.world.level.block.PressurePlateBlock$Sensitivity" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $PressurePlateBlock$Sensitivity$$Type = ($PressurePlateBlock$Sensitivity | ("everything" | "mobs"));
}

declare module "net.minecraft.world.level.block.BushBlock" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $BushBlock$$Type = ($BushBlock);
}

declare module "net.minecraft.world.level.block.BaseRailBlock" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $BaseRailBlock$$Type = ($BaseRailBlock);
}

declare module "net.minecraft.world.level.block.MultifaceSpreader$SpreadConfig" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $MultifaceSpreader$SpreadConfig$$Type = ($MultifaceSpreader$SpreadConfig);
}

declare module "net.minecraft.world.level.block.BrushableBlock" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $BrushableBlock$$Type = ($BrushableBlock);
}

declare module "net.minecraft.world.level.block.WeatheringCopperStairBlock" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $WeatheringCopperStairBlock$$Type = ($WeatheringCopperStairBlock);
}

