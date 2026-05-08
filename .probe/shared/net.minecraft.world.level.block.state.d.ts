declare module "net.minecraft.world.level.block.state.properties.ChestType" {
import { $Enum, $Enum$$Type } from "java.lang.Enum"
import { $StringRepresentable, $StringRepresentable$$Type } from "net.minecraft.util.StringRepresentable"
import { $StringRepresentable$EnumCodec } from "net.minecraft.util.StringRepresentable$EnumCodec"
import { $Keyable } from "com.mojang.serialization.Keyable"
import { $Supplier$$Type } from "java.util.function.Supplier"
import { $Function$$Type } from "java.util.function.Function"

export class $ChestType extends $Enum<$ChestType> implements $StringRepresentable {
static readonly "LEFT": $ChestType
static readonly "RIGHT": $ChestType
static readonly "SINGLE": $ChestType

public static "fromEnum"<E extends ($Enum<E> & $StringRepresentable)>(supplier0: $Supplier$$Type<E[]>): $StringRepresentable$EnumCodec<E>
public static "fromEnumWithMapping"<E extends ($Enum<E> & $StringRepresentable)>(supplier0: $Supplier$$Type<E[]>, function1: $Function$$Type<string, string>): $StringRepresentable$EnumCodec<E>
public "getOpposite"(): $ChestType
public "getSerializedName"(): string
public static "keys"(stringRepresentable0s: $StringRepresentable$$Type[]): $Keyable
public static "valueOf"(string0: string): $ChestType
public static "values"(): $ChestType[]
get "opposite"(): $ChestType
get "serializedName"(): string
}
}

declare module "net.minecraft.world.level.block.state.properties.WoodType" {
import { $Stream } from "java.util.stream.Stream"
import { $SoundEvent, $SoundEvent$$Type } from "net.minecraft.sounds.SoundEvent"
import { $Record } from "java.lang.Record"
import { $BlockSetType, $BlockSetType$$Type } from "net.minecraft.world.level.block.state.properties.BlockSetType"
import { $SoundType, $SoundType$$Type } from "net.minecraft.world.level.block.SoundType"

export class $WoodType extends $Record {
static readonly "ACACIA": $WoodType
static readonly "BAMBOO": $WoodType
static readonly "BIRCH": $WoodType
static readonly "CHERRY": $WoodType
static readonly "CRIMSON": $WoodType
static readonly "DARK_OAK": $WoodType
static readonly "JUNGLE": $WoodType
static readonly "MANGROVE": $WoodType
static readonly "OAK": $WoodType
static readonly "SPRUCE": $WoodType
static readonly "WARPED": $WoodType

constructor(string0: string, blockSetType1: $BlockSetType$$Type)
constructor(string0: string, blockSetType1: $BlockSetType$$Type, soundType2: $SoundType$$Type, soundType3: $SoundType$$Type, soundEvent4: $SoundEvent$$Type, soundEvent5: $SoundEvent$$Type)

public "fenceGateClose"(): $SoundEvent
public "fenceGateOpen"(): $SoundEvent
public "hangingSignSoundType"(): $SoundType
public "name"(): string
public static "register"(woodType0: $WoodType$$Type): $WoodType
public "setType"(): $BlockSetType
public "soundType"(): $SoundType
public static "values"(): $Stream<$WoodType>
}
}

declare module "net.minecraft.world.level.block.state.properties.DoubleBlockHalf" {
import { $Enum, $Enum$$Type } from "java.lang.Enum"
import { $StringRepresentable, $StringRepresentable$$Type } from "net.minecraft.util.StringRepresentable"
import { $StringRepresentable$EnumCodec } from "net.minecraft.util.StringRepresentable$EnumCodec"
import { $Keyable } from "com.mojang.serialization.Keyable"
import { $Supplier$$Type } from "java.util.function.Supplier"
import { $Function$$Type } from "java.util.function.Function"

export class $DoubleBlockHalf extends $Enum<$DoubleBlockHalf> implements $StringRepresentable {
static readonly "LOWER": $DoubleBlockHalf
static readonly "UPPER": $DoubleBlockHalf

public static "fromEnum"<E extends ($Enum<E> & $StringRepresentable)>(supplier0: $Supplier$$Type<E[]>): $StringRepresentable$EnumCodec<E>
public static "fromEnumWithMapping"<E extends ($Enum<E> & $StringRepresentable)>(supplier0: $Supplier$$Type<E[]>, function1: $Function$$Type<string, string>): $StringRepresentable$EnumCodec<E>
public "getSerializedName"(): string
public static "keys"(stringRepresentable0s: $StringRepresentable$$Type[]): $Keyable
public static "valueOf"(string0: string): $DoubleBlockHalf
public static "values"(): $DoubleBlockHalf[]
get "serializedName"(): string
}
}

declare module "net.minecraft.world.level.block.state.properties.DirectionProperty" {
import { $Predicate$$Type } from "java.util.function.Predicate"
import { $Direction, $Direction$$Type } from "net.minecraft.core.Direction"
import { $EnumProperty } from "net.minecraft.world.level.block.state.properties.EnumProperty"
import { $Collection$$Type } from "java.util.Collection"

export class $DirectionProperty extends $EnumProperty<$Direction> {
public static "create"(string0: string): $DirectionProperty
public static "create"(string0: string, predicate1: $Predicate$$Type<$Direction$$Type>): $DirectionProperty
public static "create"(string0: string, collection1: $Collection$$Type<$Direction$$Type>): $DirectionProperty
public static "create"(string0: string, ...direction1s: $Direction$$Type[]): $DirectionProperty
}
}

declare module "net.minecraft.world.level.block.state.properties.BooleanProperty" {
import { $Collection } from "java.util.Collection"
import { $Optional } from "java.util.Optional"
import { $Property } from "net.minecraft.world.level.block.state.properties.Property"

export class $BooleanProperty extends $Property<boolean> {
public static "create"(string0: string): $BooleanProperty
public "getName"(boolean0: boolean): string
public "getPossibleValues"(): $Collection<boolean>
public "getValue"(string0: string): $Optional<boolean>
get "possibleValues"(): $Collection<boolean>
}
}

declare module "net.minecraft.world.level.block.state.properties.Half" {
import { $Enum, $Enum$$Type } from "java.lang.Enum"
import { $StringRepresentable, $StringRepresentable$$Type } from "net.minecraft.util.StringRepresentable"
import { $StringRepresentable$EnumCodec } from "net.minecraft.util.StringRepresentable$EnumCodec"
import { $Keyable } from "com.mojang.serialization.Keyable"
import { $Supplier$$Type } from "java.util.function.Supplier"
import { $Function$$Type } from "java.util.function.Function"

export class $Half extends $Enum<$Half> implements $StringRepresentable {
static readonly "BOTTOM": $Half
static readonly "TOP": $Half

public static "fromEnum"<E extends ($Enum<E> & $StringRepresentable)>(supplier0: $Supplier$$Type<E[]>): $StringRepresentable$EnumCodec<E>
public static "fromEnumWithMapping"<E extends ($Enum<E> & $StringRepresentable)>(supplier0: $Supplier$$Type<E[]>, function1: $Function$$Type<string, string>): $StringRepresentable$EnumCodec<E>
public "getSerializedName"(): string
public static "keys"(stringRepresentable0s: $StringRepresentable$$Type[]): $Keyable
public static "valueOf"(string0: string): $Half
public static "values"(): $Half[]
get "serializedName"(): string
}
}

declare module "net.minecraft.world.level.block.state.properties.SculkSensorPhase" {
import { $Enum, $Enum$$Type } from "java.lang.Enum"
import { $StringRepresentable, $StringRepresentable$$Type } from "net.minecraft.util.StringRepresentable"
import { $StringRepresentable$EnumCodec } from "net.minecraft.util.StringRepresentable$EnumCodec"
import { $Keyable } from "com.mojang.serialization.Keyable"
import { $Supplier$$Type } from "java.util.function.Supplier"
import { $Function$$Type } from "java.util.function.Function"

export class $SculkSensorPhase extends $Enum<$SculkSensorPhase> implements $StringRepresentable {
static readonly "ACTIVE": $SculkSensorPhase
static readonly "COOLDOWN": $SculkSensorPhase
static readonly "INACTIVE": $SculkSensorPhase

public static "fromEnum"<E extends ($Enum<E> & $StringRepresentable)>(supplier0: $Supplier$$Type<E[]>): $StringRepresentable$EnumCodec<E>
public static "fromEnumWithMapping"<E extends ($Enum<E> & $StringRepresentable)>(supplier0: $Supplier$$Type<E[]>, function1: $Function$$Type<string, string>): $StringRepresentable$EnumCodec<E>
public "getSerializedName"(): string
public static "keys"(stringRepresentable0s: $StringRepresentable$$Type[]): $Keyable
public static "valueOf"(string0: string): $SculkSensorPhase
public static "values"(): $SculkSensorPhase[]
get "serializedName"(): string
}
}

declare module "net.minecraft.world.level.block.state.BlockBehaviour$OffsetType" {
import { $Enum } from "java.lang.Enum"

export class $BlockBehaviour$OffsetType extends $Enum<$BlockBehaviour$OffsetType> {
static readonly "NONE": $BlockBehaviour$OffsetType
static readonly "XYZ": $BlockBehaviour$OffsetType
static readonly "XZ": $BlockBehaviour$OffsetType

public static "valueOf"(string0: string): $BlockBehaviour$OffsetType
public static "values"(): $BlockBehaviour$OffsetType[]
}
}

declare module "net.minecraft.world.level.block.state.BlockBehaviour" {
import { $ResourceLocation, $ResourceLocation$$Type } from "net.minecraft.resources.ResourceLocation"
import { $FeatureElement } from "net.minecraft.world.flag.FeatureElement"
import { $CollisionContext$$Type } from "net.minecraft.world.phys.shapes.CollisionContext"
import { $Direction$$Type } from "net.minecraft.core.Direction"
import { $Item } from "net.minecraft.world.item.Item"
import { $BlockState, $BlockState$$Type } from "net.minecraft.world.level.block.state.BlockState"
import { $BlockBehaviour$Properties, $BlockBehaviour$Properties$$Type } from "net.minecraft.world.level.block.state.BlockBehaviour$Properties"
import { $ServerLevel$$Type } from "net.minecraft.server.level.ServerLevel"
import { $CallbackInfoReturnable$$Type } from "org.spongepowered.asm.mixin.injection.callback.CallbackInfoReturnable"
import { $CallbackInfo$$Type } from "org.spongepowered.asm.mixin.injection.callback.CallbackInfo"
import { $MapColor } from "net.minecraft.world.level.material.MapColor"
import { $BlockGetter$$Type } from "net.minecraft.world.level.BlockGetter"
import { $RenderShape } from "net.minecraft.world.level.block.RenderShape"
import { $Rotation$$Type } from "net.minecraft.world.level.block.Rotation"
import { $BlockKJS } from "dev.latvian.mods.kubejs.core.BlockKJS"
import { $BlockBuilder, $BlockBuilder$$Type } from "dev.latvian.mods.kubejs.block.BlockBuilder"
import { $Mirror$$Type } from "net.minecraft.world.level.block.Mirror"
import { $Projectile$$Type } from "net.minecraft.world.entity.projectile.Projectile"
import { $Fluid$$Type } from "net.minecraft.world.level.material.Fluid"
import { $LootTable$$Type } from "net.minecraft.world.level.storage.loot.LootTable"
import { $LootParams$$Type } from "net.minecraft.world.level.storage.loot.LootParams"
import { $BlockHitResult$$Type } from "net.minecraft.world.phys.BlockHitResult"
import { $RandomSource$$Type } from "net.minecraft.util.RandomSource"
import { $InteractionResult } from "net.minecraft.world.InteractionResult"
import { $LevelReader$$Type } from "net.minecraft.world.level.LevelReader"
import { $SoundType, $SoundType$$Type } from "net.minecraft.world.level.block.SoundType"
import { $Player$$Type } from "net.minecraft.world.entity.player.Player"
import { $Consumer$$Type } from "java.util.function.Consumer"
import { $FeatureFlagSet, $FeatureFlagSet$$Type } from "net.minecraft.world.flag.FeatureFlagSet"
import { $BlockBehaviourAccessor } from "com.gregtechceu.gtceu.core.mixins.BlockBehaviourAccessor"
import { $List } from "java.util.List"
import { $Entity$$Type } from "net.minecraft.world.entity.Entity"
import { $CompoundTag } from "net.minecraft.nbt.CompoundTag"
import { $PathComputationType$$Type } from "net.minecraft.world.level.pathfinder.PathComputationType"
import { $BlockPos$$Type } from "net.minecraft.core.BlockPos"
import { $FluidState } from "net.minecraft.world.level.material.FluidState"
import { $BlockPlaceContext$$Type } from "net.minecraft.world.item.context.BlockPlaceContext"
import { $LevelAccessor$$Type } from "net.minecraft.world.level.LevelAccessor"
import { $MenuProvider } from "net.minecraft.world.MenuProvider"
import { $Block$$Type } from "net.minecraft.world.level.block.Block"
import { $ItemStack, $ItemStack$$Type } from "net.minecraft.world.item.ItemStack"
import { $InteractionHand$$Type } from "net.minecraft.world.InteractionHand"
import { $Level$$Type } from "net.minecraft.world.level.Level"
import { $LootParams$Builder$$Type } from "net.minecraft.world.level.storage.loot.LootParams$Builder"
import { $VoxelShape } from "net.minecraft.world.phys.shapes.VoxelShape"

export class $BlockBehaviour implements $FeatureElement, $BlockKJS, $BlockBehaviourAccessor {
constructor(properties0: $BlockBehaviour$Properties$$Type)

public "asItem"(): $Item
/** @deprecated */
public "attack"(blockState0: $BlockState$$Type, level1: $Level$$Type, blockPos2: $BlockPos$$Type, player3: $Player$$Type): void
/** @deprecated */
public "canBeReplaced"(blockState0: $BlockState$$Type, blockPlaceContext1: $BlockPlaceContext$$Type): boolean
/** @deprecated */
public "canBeReplaced"(blockState0: $BlockState$$Type, fluid1: $Fluid$$Type): boolean
/** @deprecated */
public "canSurvive"(blockState0: $BlockState$$Type, levelReader1: $LevelReader$$Type, blockPos2: $BlockPos$$Type): boolean
public "defaultDestroyTime"(): float
public "defaultMapColor"(): $MapColor
/** @deprecated */
public "entityInside"(blockState0: $BlockState$$Type, level1: $Level$$Type, blockPos2: $BlockPos$$Type, entity3: $Entity$$Type): void
/** @deprecated */
public "getAnalogOutputSignal"(blockState0: $BlockState$$Type, level1: $Level$$Type, blockPos2: $BlockPos$$Type): integer
public "getBlockBuilder"(): $BlockBuilder
public "getBlockStates"(): $List<$BlockState>
/** @deprecated */
public "getBlockSupportShape"(blockState0: $BlockState$$Type, blockGetter1: $BlockGetter$$Type, blockPos2: $BlockPos$$Type): $VoxelShape
/** @deprecated */
public "getCollisionShape"(blockState0: $BlockState$$Type, blockGetter1: $BlockGetter$$Type, blockPos2: $BlockPos$$Type, collisionContext3: $CollisionContext$$Type): $VoxelShape
/** @deprecated */
public "getDestroyProgress"(blockState0: $BlockState$$Type, player1: $Player$$Type, blockGetter2: $BlockGetter$$Type, blockPos3: $BlockPos$$Type): float
/** @deprecated */
public "getDirectSignal"(blockState0: $BlockState$$Type, blockGetter1: $BlockGetter$$Type, blockPos2: $BlockPos$$Type, direction3: $Direction$$Type): integer
/** @deprecated */
public "getDrops"(blockState0: $BlockState$$Type, builder1: $LootParams$Builder$$Type): $List<$ItemStack>
/** @deprecated */
public "getFluidState"(blockState0: $BlockState$$Type): $FluidState
public "getId"(): string
public "getIdLocation"(): $ResourceLocation
/** @deprecated */
public "getInteractionShape"(blockState0: $BlockState$$Type, blockGetter1: $BlockGetter$$Type, blockPos2: $BlockPos$$Type): $VoxelShape
/** @deprecated */
public "getLightBlock"(blockState0: $BlockState$$Type, blockGetter1: $BlockGetter$$Type, blockPos2: $BlockPos$$Type): integer
public "getLootTable"(): $ResourceLocation
public "getMaxHorizontalOffset"(): float
public "getMaxVerticalOffset"(): float
/** @deprecated */
public "getMenuProvider"(blockState0: $BlockState$$Type, level1: $Level$$Type, blockPos2: $BlockPos$$Type): $MenuProvider
public "getMod"(): string
/** @deprecated */
public "getOcclusionShape"(blockState0: $BlockState$$Type, blockGetter1: $BlockGetter$$Type, blockPos2: $BlockPos$$Type): $VoxelShape
/** @deprecated */
public "getRenderShape"(blockState0: $BlockState$$Type): $RenderShape
/** @deprecated */
public "getSeed"(blockState0: $BlockState$$Type, blockPos1: $BlockPos$$Type): long
/** @deprecated */
public "getShadeBrightness"(blockState0: $BlockState$$Type, blockGetter1: $BlockGetter$$Type, blockPos2: $BlockPos$$Type): float
/** @deprecated */
public "getShape"(blockState0: $BlockState$$Type, blockGetter1: $BlockGetter$$Type, blockPos2: $BlockPos$$Type, collisionContext3: $CollisionContext$$Type): $VoxelShape
/** @deprecated */
public "getSignal"(blockState0: $BlockState$$Type, blockGetter1: $BlockGetter$$Type, blockPos2: $BlockPos$$Type, direction3: $Direction$$Type): integer
public "getTypeData"(): $CompoundTag
/** @deprecated */
public "getVisualShape"(blockState0: $BlockState$$Type, blockGetter1: $BlockGetter$$Type, blockPos2: $BlockPos$$Type, collisionContext3: $CollisionContext$$Type): $VoxelShape
public "handler$dje000$pathFindable"(blockState0: $BlockState$$Type, blockGetter1: $BlockGetter$$Type, blockPos2: $BlockPos$$Type, pathComputationType3: $PathComputationType$$Type, callbackInfoReturnable4: $CallbackInfoReturnable$$Type): void
public "handler$feh000$addSimpleFastECdrops"(state: $BlockState$$Type, builder: $LootParams$Builder$$Type, cir: $CallbackInfoReturnable$$Type, resId: $ResourceLocation$$Type, lootParams: $LootParams$$Type, serverLevel: $ServerLevel$$Type, lootTable: $LootTable$$Type): void
public "handler$gmh000$quark$tick"(blockState0: $BlockState$$Type, serverLevel1: $ServerLevel$$Type, blockPos2: $BlockPos$$Type, randomSource3: $RandomSource$$Type, callbackInfo4: $CallbackInfo$$Type): void
/** @deprecated */
public "hasAnalogOutputSignal"(blockState0: $BlockState$$Type): boolean
/** @deprecated */
public "isCollisionShapeFullBlock"(blockState0: $BlockState$$Type, blockGetter1: $BlockGetter$$Type, blockPos2: $BlockPos$$Type): boolean
public "isEnabled"(featureFlagSet0: $FeatureFlagSet$$Type): boolean
/** @deprecated */
public "isOcclusionShapeFullBlock"(blockState0: $BlockState$$Type, blockGetter1: $BlockGetter$$Type, blockPos2: $BlockPos$$Type): boolean
/** @deprecated */
public "isPathfindable"(blockState0: $BlockState$$Type, blockGetter1: $BlockGetter$$Type, blockPos2: $BlockPos$$Type, pathComputationType3: $PathComputationType$$Type): boolean
/** @deprecated */
public "isSignalSource"(blockState0: $BlockState$$Type): boolean
/** @deprecated */
public "mirror"(blockState0: $BlockState$$Type, mirror1: $Mirror$$Type): $BlockState
/** @deprecated */
public "neighborChanged"(blockState0: $BlockState$$Type, level1: $Level$$Type, blockPos2: $BlockPos$$Type, block3: $Block$$Type, blockPos4: $BlockPos$$Type, boolean5: boolean): void
/** @deprecated */
public "onPlace"(blockState0: $BlockState$$Type, level1: $Level$$Type, blockPos2: $BlockPos$$Type, blockState3: $BlockState$$Type, boolean4: boolean): void
/** @deprecated */
public "onProjectileHit"(level0: $Level$$Type, blockState1: $BlockState$$Type, blockHitResult2: $BlockHitResult$$Type, projectile3: $Projectile$$Type): void
/** @deprecated */
public "onRemove"(blockState0: $BlockState$$Type, level1: $Level$$Type, blockPos2: $BlockPos$$Type, blockState3: $BlockState$$Type, boolean4: boolean): void
/** @deprecated */
public "randomTick"(blockState0: $BlockState$$Type, serverLevel1: $ServerLevel$$Type, blockPos2: $BlockPos$$Type, randomSource3: $RandomSource$$Type): void
public "requiredFeatures"(): $FeatureFlagSet
/** @deprecated */
public "rotate"(blockState0: $BlockState$$Type, rotation1: $Rotation$$Type): $BlockState
public "setBlockBuilder"(b: $BlockBuilder$$Type): void
public "setDestroySpeed"(v: float): void
public "setLightEmission"(v: integer): void
public "setNameKey"(key: string): void
public "setRandomTickCallback"(callback: $Consumer$$Type): void
public "setRequiresTool"(v: boolean): void
/** @deprecated */
public "skipRendering"(blockState0: $BlockState$$Type, blockState1: $BlockState$$Type, direction2: $Direction$$Type): boolean
/** @deprecated */
public "spawnAfterBreak"(blockState0: $BlockState$$Type, serverLevel1: $ServerLevel$$Type, blockPos2: $BlockPos$$Type, itemStack3: $ItemStack$$Type, boolean4: boolean): void
/** @deprecated */
public "tick"(blockState0: $BlockState$$Type, serverLevel1: $ServerLevel$$Type, blockPos2: $BlockPos$$Type, randomSource3: $RandomSource$$Type): void
/** @deprecated */
public "triggerEvent"(blockState0: $BlockState$$Type, level1: $Level$$Type, blockPos2: $BlockPos$$Type, int3: integer, int4: integer): boolean
/** @deprecated */
public "updateIndirectNeighbourShapes"(blockState0: $BlockState$$Type, levelAccessor1: $LevelAccessor$$Type, blockPos2: $BlockPos$$Type, int3: integer, int4: integer): void
/** @deprecated */
public "updateShape"(blockState0: $BlockState$$Type, direction1: $Direction$$Type, blockState2: $BlockState$$Type, levelAccessor3: $LevelAccessor$$Type, blockPos4: $BlockPos$$Type, blockPos5: $BlockPos$$Type): $BlockState
/** @deprecated */
public "use"(blockState0: $BlockState$$Type, level1: $Level$$Type, blockPos2: $BlockPos$$Type, player3: $Player$$Type, interactionHand4: $InteractionHand$$Type, blockHitResult5: $BlockHitResult$$Type): $InteractionResult
/** @deprecated */
public "useShapeForLightOcclusion"(blockState0: $BlockState$$Type): boolean
get "hasCollision"(): boolean
set "hasCollision"(value: boolean)
get "properties"(): $BlockBehaviour$Properties
set "properties"(value: $BlockBehaviour$Properties$$Type)
get "soundType"(): $SoundType
set "soundType"(value: $SoundType$$Type)
get "blockBuilder"(): $BlockBuilder
get "blockStates"(): $List<$BlockState>
get "id"(): string
get "idLocation"(): $ResourceLocation
get "lootTable"(): $ResourceLocation
get "maxHorizontalOffset"(): float
get "maxVerticalOffset"(): float
get "mod"(): string
get "typeData"(): $CompoundTag
set "blockBuilder"(value: $BlockBuilder$$Type)
set "destroySpeed"(value: float)
set "lightEmission"(value: integer)
set "nameKey"(value: string)
set "randomTickCallback"(value: $Consumer$$Type)
set "requiresTool"(value: boolean)
}
}

declare module "net.minecraft.world.level.block.state.properties.Tilt" {
import { $Enum, $Enum$$Type } from "java.lang.Enum"
import { $StringRepresentable, $StringRepresentable$$Type } from "net.minecraft.util.StringRepresentable"
import { $StringRepresentable$EnumCodec } from "net.minecraft.util.StringRepresentable$EnumCodec"
import { $Keyable } from "com.mojang.serialization.Keyable"
import { $Supplier$$Type } from "java.util.function.Supplier"
import { $Function$$Type } from "java.util.function.Function"

export class $Tilt extends $Enum<$Tilt> implements $StringRepresentable {
static readonly "FULL": $Tilt
static readonly "NONE": $Tilt
static readonly "PARTIAL": $Tilt
static readonly "UNSTABLE": $Tilt

public "causesVibration"(): boolean
public static "fromEnum"<E extends ($Enum<E> & $StringRepresentable)>(supplier0: $Supplier$$Type<E[]>): $StringRepresentable$EnumCodec<E>
public static "fromEnumWithMapping"<E extends ($Enum<E> & $StringRepresentable)>(supplier0: $Supplier$$Type<E[]>, function1: $Function$$Type<string, string>): $StringRepresentable$EnumCodec<E>
public "getSerializedName"(): string
public static "keys"(stringRepresentable0s: $StringRepresentable$$Type[]): $Keyable
public static "valueOf"(string0: string): $Tilt
public static "values"(): $Tilt[]
get "serializedName"(): string
}
}

declare module "net.minecraft.world.level.block.state.properties.SlabType" {
import { $Enum, $Enum$$Type } from "java.lang.Enum"
import { $StringRepresentable, $StringRepresentable$$Type } from "net.minecraft.util.StringRepresentable"
import { $StringRepresentable$EnumCodec } from "net.minecraft.util.StringRepresentable$EnumCodec"
import { $Keyable } from "com.mojang.serialization.Keyable"
import { $Supplier$$Type } from "java.util.function.Supplier"
import { $Function$$Type } from "java.util.function.Function"

export class $SlabType extends $Enum<$SlabType> implements $StringRepresentable {
static readonly "BOTTOM": $SlabType
static readonly "DOUBLE": $SlabType
static readonly "TOP": $SlabType

public static "fromEnum"<E extends ($Enum<E> & $StringRepresentable)>(supplier0: $Supplier$$Type<E[]>): $StringRepresentable$EnumCodec<E>
public static "fromEnumWithMapping"<E extends ($Enum<E> & $StringRepresentable)>(supplier0: $Supplier$$Type<E[]>, function1: $Function$$Type<string, string>): $StringRepresentable$EnumCodec<E>
public "getSerializedName"(): string
public static "keys"(stringRepresentable0s: $StringRepresentable$$Type[]): $Keyable
public static "valueOf"(string0: string): $SlabType
public static "values"(): $SlabType[]
get "serializedName"(): string
}
}

declare module "net.minecraft.world.level.block.state.properties.Property" {
import { $Codec } from "com.mojang.serialization.Codec"
import { $Stream } from "java.util.stream.Stream"
import { $StateHolder, $StateHolder$$Type } from "net.minecraft.world.level.block.state.StateHolder"
import { $DynamicOps$$Type } from "com.mojang.serialization.DynamicOps"
import { $Property$Value } from "net.minecraft.world.level.block.state.properties.Property$Value"
import { $Collection } from "java.util.Collection"
import { $Optional } from "java.util.Optional"
import { $Comparable, $Comparable$$Type } from "java.lang.Comparable"
import { $Class } from "java.lang.Class"
import { $DataResult } from "com.mojang.serialization.DataResult"

export class $Property<T extends $Comparable<T> = $Comparable<T>> {
public "codec"(): $Codec<T>
public "generateHashCode"(): integer
public "getAllValues"(): $Stream<$Property$Value<T>>
public "getName"(): string
public "getName"(t0: T): string
public "getPossibleValues"(): $Collection<T>
public "getValue"(string0: string): $Optional<T>
public "getValueClass"(): $Class<T>
public "parseValue"<U, S extends $StateHolder<any, S>>(dynamicOps0: $DynamicOps$$Type<U>, s1: S, u2: U): $DataResult<S>
public "value"(t0: T): $Property$Value<T>
public "value"(stateHolder0: $StateHolder$$Type<any, any>): $Property$Value<T>
public "valueCodec"(): $Codec<$Property$Value<T>>
get "allValues"(): $Stream<$Property$Value<T>>
get "name"(): string
get "possibleValues"(): $Collection<T>
get "valueClass"(): $Class<T>
}
}

declare module "net.minecraft.world.level.block.state.properties.AttachFace" {
import { $Enum, $Enum$$Type } from "java.lang.Enum"
import { $StringRepresentable, $StringRepresentable$$Type } from "net.minecraft.util.StringRepresentable"
import { $StringRepresentable$EnumCodec } from "net.minecraft.util.StringRepresentable$EnumCodec"
import { $Keyable } from "com.mojang.serialization.Keyable"
import { $Supplier$$Type } from "java.util.function.Supplier"
import { $Function$$Type } from "java.util.function.Function"

export class $AttachFace extends $Enum<$AttachFace> implements $StringRepresentable {
static readonly "CEILING": $AttachFace
static readonly "FLOOR": $AttachFace
static readonly "WALL": $AttachFace

public static "fromEnum"<E extends ($Enum<E> & $StringRepresentable)>(supplier0: $Supplier$$Type<E[]>): $StringRepresentable$EnumCodec<E>
public static "fromEnumWithMapping"<E extends ($Enum<E> & $StringRepresentable)>(supplier0: $Supplier$$Type<E[]>, function1: $Function$$Type<string, string>): $StringRepresentable$EnumCodec<E>
public "getSerializedName"(): string
public static "keys"(stringRepresentable0s: $StringRepresentable$$Type[]): $Keyable
public static "valueOf"(string0: string): $AttachFace
public static "values"(): $AttachFace[]
get "serializedName"(): string
}
}

declare module "net.minecraft.world.level.block.state.properties.BlockStateProperties" {
import { $PistonType } from "net.minecraft.world.level.block.state.properties.PistonType"
import { $Tilt } from "net.minecraft.world.level.block.state.properties.Tilt"
import { $ComparatorMode } from "net.minecraft.world.level.block.state.properties.ComparatorMode"
import { $BellAttachType } from "net.minecraft.world.level.block.state.properties.BellAttachType"
import { $BambooLeaves } from "net.minecraft.world.level.block.state.properties.BambooLeaves"
import { $StairsShape } from "net.minecraft.world.level.block.state.properties.StairsShape"
import { $BooleanProperty } from "net.minecraft.world.level.block.state.properties.BooleanProperty"
import { $Direction$Axis } from "net.minecraft.core.Direction$Axis"
import { $EnumProperty } from "net.minecraft.world.level.block.state.properties.EnumProperty"
import { $NoteBlockInstrument } from "net.minecraft.world.level.block.state.properties.NoteBlockInstrument"
import { $ChestType } from "net.minecraft.world.level.block.state.properties.ChestType"
import { $BedPart } from "net.minecraft.world.level.block.state.properties.BedPart"
import { $DripstoneThickness } from "net.minecraft.world.level.block.state.properties.DripstoneThickness"
import { $SlabType } from "net.minecraft.world.level.block.state.properties.SlabType"
import { $StructureMode } from "net.minecraft.world.level.block.state.properties.StructureMode"
import { $RailShape } from "net.minecraft.world.level.block.state.properties.RailShape"
import { $DoubleBlockHalf } from "net.minecraft.world.level.block.state.properties.DoubleBlockHalf"
import { $IntegerProperty } from "net.minecraft.world.level.block.state.properties.IntegerProperty"
import { $RedstoneSide } from "net.minecraft.world.level.block.state.properties.RedstoneSide"
import { $SculkSensorPhase } from "net.minecraft.world.level.block.state.properties.SculkSensorPhase"
import { $AttachFace } from "net.minecraft.world.level.block.state.properties.AttachFace"
import { $DoorHingeSide } from "net.minecraft.world.level.block.state.properties.DoorHingeSide"
import { $WallSide } from "net.minecraft.world.level.block.state.properties.WallSide"
import { $DirectionProperty } from "net.minecraft.world.level.block.state.properties.DirectionProperty"
import { $FrontAndTop } from "net.minecraft.core.FrontAndTop"
import { $Half } from "net.minecraft.world.level.block.state.properties.Half"

export class $BlockStateProperties {
static readonly "AGE_1": $IntegerProperty
static readonly "AGE_15": $IntegerProperty
static readonly "AGE_2": $IntegerProperty
static readonly "AGE_25": $IntegerProperty
static readonly "AGE_3": $IntegerProperty
static readonly "AGE_4": $IntegerProperty
static readonly "AGE_5": $IntegerProperty
static readonly "AGE_7": $IntegerProperty
static readonly "ATTACHED": $BooleanProperty
static readonly "ATTACH_FACE": $EnumProperty<$AttachFace>
static readonly "AXIS": $EnumProperty<$Direction$Axis>
static readonly "BAMBOO_LEAVES": $EnumProperty<$BambooLeaves>
static readonly "BED_PART": $EnumProperty<$BedPart>
static readonly "BELL_ATTACHMENT": $EnumProperty<$BellAttachType>
static readonly "BERRIES": $BooleanProperty
static readonly "BITES": $IntegerProperty
static readonly "BLOOM": $BooleanProperty
static readonly "BOTTOM": $BooleanProperty
static readonly "CANDLES": $IntegerProperty
static readonly "CAN_SUMMON": $BooleanProperty
static readonly "CHEST_TYPE": $EnumProperty<$ChestType>
static readonly "CHISELED_BOOKSHELF_SLOT_0_OCCUPIED": $BooleanProperty
static readonly "CHISELED_BOOKSHELF_SLOT_1_OCCUPIED": $BooleanProperty
static readonly "CHISELED_BOOKSHELF_SLOT_2_OCCUPIED": $BooleanProperty
static readonly "CHISELED_BOOKSHELF_SLOT_3_OCCUPIED": $BooleanProperty
static readonly "CHISELED_BOOKSHELF_SLOT_4_OCCUPIED": $BooleanProperty
static readonly "CHISELED_BOOKSHELF_SLOT_5_OCCUPIED": $BooleanProperty
static readonly "CONDITIONAL": $BooleanProperty
static readonly "CRACKED": $BooleanProperty
static readonly "DELAY": $IntegerProperty
static readonly "DISARMED": $BooleanProperty
static readonly "DISTANCE": $IntegerProperty
static readonly "DOOR_HINGE": $EnumProperty<$DoorHingeSide>
static readonly "DOUBLE_BLOCK_HALF": $EnumProperty<$DoubleBlockHalf>
static readonly "DOWN": $BooleanProperty
static readonly "DRAG": $BooleanProperty
static readonly "DRIPSTONE_THICKNESS": $EnumProperty<$DripstoneThickness>
static readonly "DUSTED": $IntegerProperty
static readonly "EAST": $BooleanProperty
static readonly "EAST_REDSTONE": $EnumProperty<$RedstoneSide>
static readonly "EAST_WALL": $EnumProperty<$WallSide>
static readonly "EGGS": $IntegerProperty
static readonly "ENABLED": $BooleanProperty
static readonly "EXTENDED": $BooleanProperty
static readonly "EYE": $BooleanProperty
static readonly "FACING": $DirectionProperty
static readonly "FACING_HOPPER": $DirectionProperty
static readonly "FALLING": $BooleanProperty
static readonly "FLOWER_AMOUNT": $IntegerProperty
static readonly "HALF": $EnumProperty<$Half>
static readonly "HANGING": $BooleanProperty
static readonly "HAS_BOOK": $BooleanProperty
static readonly "HAS_BOTTLE_0": $BooleanProperty
static readonly "HAS_BOTTLE_1": $BooleanProperty
static readonly "HAS_BOTTLE_2": $BooleanProperty
static readonly "HAS_RECORD": $BooleanProperty
static readonly "HATCH": $IntegerProperty
static readonly "HORIZONTAL_AXIS": $EnumProperty<$Direction$Axis>
static readonly "HORIZONTAL_FACING": $DirectionProperty
static readonly "INVERTED": $BooleanProperty
static readonly "IN_WALL": $BooleanProperty
static readonly "LAYERS": $IntegerProperty
static readonly "LEVEL": $IntegerProperty
static readonly "LEVEL_CAULDRON": $IntegerProperty
static readonly "LEVEL_COMPOSTER": $IntegerProperty
static readonly "LEVEL_FLOWING": $IntegerProperty
static readonly "LEVEL_HONEY": $IntegerProperty
static readonly "LIT": $BooleanProperty
static readonly "LOCKED": $BooleanProperty
static readonly "MAX_AGE_1": integer
static readonly "MAX_AGE_15": integer
static readonly "MAX_AGE_2": integer
static readonly "MAX_AGE_25": integer
static readonly "MAX_AGE_3": integer
static readonly "MAX_AGE_4": integer
static readonly "MAX_AGE_5": integer
static readonly "MAX_AGE_7": integer
static readonly "MAX_DISTANCE": integer
static readonly "MAX_LEVEL_15": integer
static readonly "MAX_LEVEL_3": integer
static readonly "MAX_LEVEL_8": integer
static readonly "MAX_RESPAWN_ANCHOR_CHARGES": integer
static readonly "MIN_LEVEL": integer
static readonly "MIN_LEVEL_CAULDRON": integer
static readonly "MIN_RESPAWN_ANCHOR_CHARGES": integer
static readonly "MODE_COMPARATOR": $EnumProperty<$ComparatorMode>
static readonly "MOISTURE": $IntegerProperty
static readonly "NORTH": $BooleanProperty
static readonly "NORTH_REDSTONE": $EnumProperty<$RedstoneSide>
static readonly "NORTH_WALL": $EnumProperty<$WallSide>
static readonly "NOTE": $IntegerProperty
static readonly "NOTEBLOCK_INSTRUMENT": $EnumProperty<$NoteBlockInstrument>
static readonly "OCCUPIED": $BooleanProperty
static readonly "OPEN": $BooleanProperty
static readonly "ORIENTATION": $EnumProperty<$FrontAndTop>
static readonly "PERSISTENT": $BooleanProperty
static readonly "PICKLES": $IntegerProperty
static readonly "PISTON_TYPE": $EnumProperty<$PistonType>
static readonly "POWER": $IntegerProperty
static readonly "POWERED": $BooleanProperty
static readonly "RAIL_SHAPE": $EnumProperty<$RailShape>
static readonly "RAIL_SHAPE_STRAIGHT": $EnumProperty<$RailShape>
static readonly "RESPAWN_ANCHOR_CHARGES": $IntegerProperty
static readonly "ROTATION_16": $IntegerProperty
static readonly "SCULK_SENSOR_PHASE": $EnumProperty<$SculkSensorPhase>
static readonly "SHORT": $BooleanProperty
static readonly "SHRIEKING": $BooleanProperty
static readonly "SIGNAL_FIRE": $BooleanProperty
static readonly "SLAB_TYPE": $EnumProperty<$SlabType>
static readonly "SNOWY": $BooleanProperty
static readonly "SOUTH": $BooleanProperty
static readonly "SOUTH_REDSTONE": $EnumProperty<$RedstoneSide>
static readonly "SOUTH_WALL": $EnumProperty<$WallSide>
static readonly "STABILITY_DISTANCE": $IntegerProperty
static readonly "STABILITY_MAX_DISTANCE": integer
static readonly "STAGE": $IntegerProperty
static readonly "STAIRS_SHAPE": $EnumProperty<$StairsShape>
static readonly "STRUCTUREBLOCK_MODE": $EnumProperty<$StructureMode>
static readonly "TILT": $EnumProperty<$Tilt>
static readonly "TRIGGERED": $BooleanProperty
static readonly "UNSTABLE": $BooleanProperty
static readonly "UP": $BooleanProperty
static readonly "VERTICAL_DIRECTION": $DirectionProperty
static readonly "WATERLOGGED": $BooleanProperty
static readonly "WEST": $BooleanProperty
static readonly "WEST_REDSTONE": $EnumProperty<$RedstoneSide>
static readonly "WEST_WALL": $EnumProperty<$WallSide>

constructor()

}
}

declare module "net.minecraft.world.level.block.state.properties.PistonType" {
import { $Enum, $Enum$$Type } from "java.lang.Enum"
import { $StringRepresentable, $StringRepresentable$$Type } from "net.minecraft.util.StringRepresentable"
import { $StringRepresentable$EnumCodec } from "net.minecraft.util.StringRepresentable$EnumCodec"
import { $Keyable } from "com.mojang.serialization.Keyable"
import { $Supplier$$Type } from "java.util.function.Supplier"
import { $Function$$Type } from "java.util.function.Function"

export class $PistonType extends $Enum<$PistonType> implements $StringRepresentable {
static readonly "DEFAULT": $PistonType
static readonly "STICKY": $PistonType

public static "fromEnum"<E extends ($Enum<E> & $StringRepresentable)>(supplier0: $Supplier$$Type<E[]>): $StringRepresentable$EnumCodec<E>
public static "fromEnumWithMapping"<E extends ($Enum<E> & $StringRepresentable)>(supplier0: $Supplier$$Type<E[]>, function1: $Function$$Type<string, string>): $StringRepresentable$EnumCodec<E>
public "getSerializedName"(): string
public static "keys"(stringRepresentable0s: $StringRepresentable$$Type[]): $Keyable
public static "valueOf"(string0: string): $PistonType
public static "values"(): $PistonType[]
get "serializedName"(): string
}
}

declare module "net.minecraft.world.level.block.state.pattern.BlockPattern" {
import { $LoadingCache } from "com.google.common.cache.LoadingCache"
import { $BlockInWorld, $BlockInWorld$$Type } from "net.minecraft.world.level.block.state.pattern.BlockInWorld"
import { $BlockPos, $BlockPos$$Type } from "net.minecraft.core.BlockPos"
import { $Predicate, $Predicate$$Type } from "java.util.function.Predicate"
import { $Direction$$Type } from "net.minecraft.core.Direction"
import { $BlockPattern$BlockPatternMatch } from "net.minecraft.world.level.block.state.pattern.BlockPattern$BlockPatternMatch"
import { $LevelReader$$Type } from "net.minecraft.world.level.LevelReader"

export class $BlockPattern {
constructor(predicate0sss: $Predicate$$Type<$BlockInWorld$$Type>[][][])

public static "createLevelCache"(levelReader0: $LevelReader$$Type, boolean1: boolean): $LoadingCache<$BlockPos, $BlockInWorld>
public "find"(levelReader0: $LevelReader$$Type, blockPos1: $BlockPos$$Type): $BlockPattern$BlockPatternMatch
public "getDepth"(): integer
public "getHeight"(): integer
public "getPattern"(): $Predicate<$BlockInWorld>[][][]
public "getWidth"(): integer
public "matches"(levelReader0: $LevelReader$$Type, blockPos1: $BlockPos$$Type, direction2: $Direction$$Type, direction3: $Direction$$Type): $BlockPattern$BlockPatternMatch
get "depth"(): integer
get "height"(): integer
get "pattern"(): $Predicate<$BlockInWorld>[][][]
get "width"(): integer
}
}

declare module "net.minecraft.world.level.block.state.properties.BedPart" {
import { $Enum, $Enum$$Type } from "java.lang.Enum"
import { $StringRepresentable, $StringRepresentable$$Type } from "net.minecraft.util.StringRepresentable"
import { $StringRepresentable$EnumCodec } from "net.minecraft.util.StringRepresentable$EnumCodec"
import { $Keyable } from "com.mojang.serialization.Keyable"
import { $Supplier$$Type } from "java.util.function.Supplier"
import { $Function$$Type } from "java.util.function.Function"

export class $BedPart extends $Enum<$BedPart> implements $StringRepresentable {
static readonly "FOOT": $BedPart
static readonly "HEAD": $BedPart

public static "fromEnum"<E extends ($Enum<E> & $StringRepresentable)>(supplier0: $Supplier$$Type<E[]>): $StringRepresentable$EnumCodec<E>
public static "fromEnumWithMapping"<E extends ($Enum<E> & $StringRepresentable)>(supplier0: $Supplier$$Type<E[]>, function1: $Function$$Type<string, string>): $StringRepresentable$EnumCodec<E>
public "getSerializedName"(): string
public static "keys"(stringRepresentable0s: $StringRepresentable$$Type[]): $Keyable
public static "valueOf"(string0: string): $BedPart
public static "values"(): $BedPart[]
get "serializedName"(): string
}
}

declare module "net.minecraft.world.level.block.state.properties.Property$Value" {
import { $Comparable, $Comparable$$Type } from "java.lang.Comparable"
import { $Record } from "java.lang.Record"
import { $Property, $Property$$Type } from "net.minecraft.world.level.block.state.properties.Property"

export class $Property$Value<T extends $Comparable<T> = $Comparable<T>> extends $Record {
constructor(property0: $Property$$Type<T>, t1: T)

public "property"(): $Property<T>
public "value"(): T
}
}

declare module "net.minecraft.world.level.block.state.properties.ComparatorMode" {
import { $Enum, $Enum$$Type } from "java.lang.Enum"
import { $StringRepresentable, $StringRepresentable$$Type } from "net.minecraft.util.StringRepresentable"
import { $StringRepresentable$EnumCodec } from "net.minecraft.util.StringRepresentable$EnumCodec"
import { $Keyable } from "com.mojang.serialization.Keyable"
import { $Supplier$$Type } from "java.util.function.Supplier"
import { $Function$$Type } from "java.util.function.Function"

export class $ComparatorMode extends $Enum<$ComparatorMode> implements $StringRepresentable {
static readonly "COMPARE": $ComparatorMode
static readonly "SUBTRACT": $ComparatorMode

public static "fromEnum"<E extends ($Enum<E> & $StringRepresentable)>(supplier0: $Supplier$$Type<E[]>): $StringRepresentable$EnumCodec<E>
public static "fromEnumWithMapping"<E extends ($Enum<E> & $StringRepresentable)>(supplier0: $Supplier$$Type<E[]>, function1: $Function$$Type<string, string>): $StringRepresentable$EnumCodec<E>
public "getSerializedName"(): string
public static "keys"(stringRepresentable0s: $StringRepresentable$$Type[]): $Keyable
public static "valueOf"(string0: string): $ComparatorMode
public static "values"(): $ComparatorMode[]
get "serializedName"(): string
}
}

declare module "net.minecraft.world.level.block.state.StateDefinition" {
import { $StateHolder, $StateHolder$$Type } from "net.minecraft.world.level.block.state.StateHolder"
import { $ImmutableList } from "com.google.common.collect.ImmutableList"
import { $Collection } from "java.util.Collection"
import { $MapCodec, $MapCodec$$Type } from "com.mojang.serialization.MapCodec"
import { $Comparable, $Comparable$$Type } from "java.lang.Comparable"
import { $Property, $Property$$Type } from "net.minecraft.world.level.block.state.properties.Property"
import { $Supplier$$Type } from "java.util.function.Supplier"

export class $StateDefinition<O = any, S extends $StateHolder<O, S> = $StateHolder<O, S>> {
public "any"(): S
public static "appendPropertyCodec"<S extends $StateHolder<any, S>, T extends $Comparable<T>>(mapCodec0: $MapCodec$$Type<S>, supplier1: $Supplier$$Type<S>, string2: string, property3: $Property$$Type<T>): $MapCodec<S>
public "getOwner"(): O
public "getPossibleStates"(): $ImmutableList<S>
public "getProperties"(): $Collection<$Property<any>>
public "getProperty"(string0: string): $Property<any>
get "owner"(): O
set "owner"(value: O)
get "possibleStates"(): $ImmutableList<S>
get "properties"(): $Collection<$Property<any>>
}
}

declare module "net.minecraft.world.level.block.state.pattern.BlockInWorld" {
import { $BlockPos, $BlockPos$$Type } from "net.minecraft.core.BlockPos"
import { $Predicate, $Predicate$$Type } from "java.util.function.Predicate"
import { $BlockState, $BlockState$$Type } from "net.minecraft.world.level.block.state.BlockState"
import { $LevelReader, $LevelReader$$Type } from "net.minecraft.world.level.LevelReader"
import { $BlockEntity } from "net.minecraft.world.level.block.entity.BlockEntity"

export class $BlockInWorld {
constructor(levelReader0: $LevelReader$$Type, blockPos1: $BlockPos$$Type, boolean2: boolean)

public "getEntity"(): $BlockEntity
public "getLevel"(): $LevelReader
public "getPos"(): $BlockPos
public "getState"(): $BlockState
public static "hasState"(predicate0: $Predicate$$Type<$BlockState$$Type>): $Predicate<$BlockInWorld>
get "entity"(): $BlockEntity
get "level"(): $LevelReader
get "pos"(): $BlockPos
get "state"(): $BlockState
}
}

declare module "net.minecraft.world.level.block.state.properties.StairsShape" {
import { $Enum, $Enum$$Type } from "java.lang.Enum"
import { $StringRepresentable, $StringRepresentable$$Type } from "net.minecraft.util.StringRepresentable"
import { $StringRepresentable$EnumCodec } from "net.minecraft.util.StringRepresentable$EnumCodec"
import { $Keyable } from "com.mojang.serialization.Keyable"
import { $Supplier$$Type } from "java.util.function.Supplier"
import { $Function$$Type } from "java.util.function.Function"

export class $StairsShape extends $Enum<$StairsShape> implements $StringRepresentable {
static readonly "INNER_LEFT": $StairsShape
static readonly "INNER_RIGHT": $StairsShape
static readonly "OUTER_LEFT": $StairsShape
static readonly "OUTER_RIGHT": $StairsShape
static readonly "STRAIGHT": $StairsShape

public static "fromEnum"<E extends ($Enum<E> & $StringRepresentable)>(supplier0: $Supplier$$Type<E[]>): $StringRepresentable$EnumCodec<E>
public static "fromEnumWithMapping"<E extends ($Enum<E> & $StringRepresentable)>(supplier0: $Supplier$$Type<E[]>, function1: $Function$$Type<string, string>): $StringRepresentable$EnumCodec<E>
public "getSerializedName"(): string
public static "keys"(stringRepresentable0s: $StringRepresentable$$Type[]): $Keyable
public static "valueOf"(string0: string): $StairsShape
public static "values"(): $StairsShape[]
get "serializedName"(): string
}
}

declare module "net.minecraft.world.level.block.state.properties.StructureMode" {
import { $Enum, $Enum$$Type } from "java.lang.Enum"
import { $Component } from "net.minecraft.network.chat.Component"
import { $StringRepresentable, $StringRepresentable$$Type } from "net.minecraft.util.StringRepresentable"
import { $StringRepresentable$EnumCodec } from "net.minecraft.util.StringRepresentable$EnumCodec"
import { $Keyable } from "com.mojang.serialization.Keyable"
import { $Supplier$$Type } from "java.util.function.Supplier"
import { $Function$$Type } from "java.util.function.Function"

export class $StructureMode extends $Enum<$StructureMode> implements $StringRepresentable {
static readonly "CORNER": $StructureMode
static readonly "DATA": $StructureMode
static readonly "LOAD": $StructureMode
static readonly "SAVE": $StructureMode

public static "fromEnum"<E extends ($Enum<E> & $StringRepresentable)>(supplier0: $Supplier$$Type<E[]>): $StringRepresentable$EnumCodec<E>
public static "fromEnumWithMapping"<E extends ($Enum<E> & $StringRepresentable)>(supplier0: $Supplier$$Type<E[]>, function1: $Function$$Type<string, string>): $StringRepresentable$EnumCodec<E>
public "getDisplayName"(): $Component
public "getSerializedName"(): string
public static "keys"(stringRepresentable0s: $StringRepresentable$$Type[]): $Keyable
public static "valueOf"(string0: string): $StructureMode
public static "values"(): $StructureMode[]
get "displayName"(): $Component
get "serializedName"(): string
}
}

declare module "net.minecraft.world.level.block.state.properties.RailShape" {
import { $Enum, $Enum$$Type } from "java.lang.Enum"
import { $StringRepresentable, $StringRepresentable$$Type } from "net.minecraft.util.StringRepresentable"
import { $StringRepresentable$EnumCodec } from "net.minecraft.util.StringRepresentable$EnumCodec"
import { $Keyable } from "com.mojang.serialization.Keyable"
import { $Supplier$$Type } from "java.util.function.Supplier"
import { $Function$$Type } from "java.util.function.Function"

export class $RailShape extends $Enum<$RailShape> implements $StringRepresentable {
static readonly "ASCENDING_EAST": $RailShape
static readonly "ASCENDING_NORTH": $RailShape
static readonly "ASCENDING_SOUTH": $RailShape
static readonly "ASCENDING_WEST": $RailShape
static readonly "EAST_WEST": $RailShape
static readonly "NORTH_EAST": $RailShape
static readonly "NORTH_SOUTH": $RailShape
static readonly "NORTH_WEST": $RailShape
static readonly "SOUTH_EAST": $RailShape
static readonly "SOUTH_WEST": $RailShape

public static "fromEnum"<E extends ($Enum<E> & $StringRepresentable)>(supplier0: $Supplier$$Type<E[]>): $StringRepresentable$EnumCodec<E>
public static "fromEnumWithMapping"<E extends ($Enum<E> & $StringRepresentable)>(supplier0: $Supplier$$Type<E[]>, function1: $Function$$Type<string, string>): $StringRepresentable$EnumCodec<E>
public "getName"(): string
public "getSerializedName"(): string
public "isAscending"(): boolean
public static "keys"(stringRepresentable0s: $StringRepresentable$$Type[]): $Keyable
public static "valueOf"(string0: string): $RailShape
public static "values"(): $RailShape[]
get "name"(): string
get "serializedName"(): string
get "ascending"(): boolean
}
}

declare module "net.minecraft.world.level.block.state.properties.BambooLeaves" {
import { $Enum, $Enum$$Type } from "java.lang.Enum"
import { $StringRepresentable, $StringRepresentable$$Type } from "net.minecraft.util.StringRepresentable"
import { $StringRepresentable$EnumCodec } from "net.minecraft.util.StringRepresentable$EnumCodec"
import { $Keyable } from "com.mojang.serialization.Keyable"
import { $Supplier$$Type } from "java.util.function.Supplier"
import { $Function$$Type } from "java.util.function.Function"

export class $BambooLeaves extends $Enum<$BambooLeaves> implements $StringRepresentable {
static readonly "LARGE": $BambooLeaves
static readonly "NONE": $BambooLeaves
static readonly "SMALL": $BambooLeaves

public static "fromEnum"<E extends ($Enum<E> & $StringRepresentable)>(supplier0: $Supplier$$Type<E[]>): $StringRepresentable$EnumCodec<E>
public static "fromEnumWithMapping"<E extends ($Enum<E> & $StringRepresentable)>(supplier0: $Supplier$$Type<E[]>, function1: $Function$$Type<string, string>): $StringRepresentable$EnumCodec<E>
public "getSerializedName"(): string
public static "keys"(stringRepresentable0s: $StringRepresentable$$Type[]): $Keyable
public static "valueOf"(string0: string): $BambooLeaves
public static "values"(): $BambooLeaves[]
get "serializedName"(): string
}
}

declare module "net.minecraft.world.level.block.state.properties.BellAttachType" {
import { $Enum, $Enum$$Type } from "java.lang.Enum"
import { $StringRepresentable, $StringRepresentable$$Type } from "net.minecraft.util.StringRepresentable"
import { $StringRepresentable$EnumCodec } from "net.minecraft.util.StringRepresentable$EnumCodec"
import { $Keyable } from "com.mojang.serialization.Keyable"
import { $Supplier$$Type } from "java.util.function.Supplier"
import { $Function$$Type } from "java.util.function.Function"

export class $BellAttachType extends $Enum<$BellAttachType> implements $StringRepresentable {
static readonly "CEILING": $BellAttachType
static readonly "DOUBLE_WALL": $BellAttachType
static readonly "FLOOR": $BellAttachType
static readonly "SINGLE_WALL": $BellAttachType

public static "fromEnum"<E extends ($Enum<E> & $StringRepresentable)>(supplier0: $Supplier$$Type<E[]>): $StringRepresentable$EnumCodec<E>
public static "fromEnumWithMapping"<E extends ($Enum<E> & $StringRepresentable)>(supplier0: $Supplier$$Type<E[]>, function1: $Function$$Type<string, string>): $StringRepresentable$EnumCodec<E>
public "getSerializedName"(): string
public static "keys"(stringRepresentable0s: $StringRepresentable$$Type[]): $Keyable
public static "valueOf"(string0: string): $BellAttachType
public static "values"(): $BellAttachType[]
get "serializedName"(): string
}
}

declare module "net.minecraft.world.level.block.state.properties.NoteBlockInstrument" {
import { $Holder } from "net.minecraft.core.Holder"
import { $Enum, $Enum$$Type } from "java.lang.Enum"
import { $SoundEvent } from "net.minecraft.sounds.SoundEvent"
import { $StringRepresentable, $StringRepresentable$$Type } from "net.minecraft.util.StringRepresentable"
import { $StringRepresentable$EnumCodec } from "net.minecraft.util.StringRepresentable$EnumCodec"
import { $Keyable } from "com.mojang.serialization.Keyable"
import { $Supplier$$Type } from "java.util.function.Supplier"
import { $Function$$Type } from "java.util.function.Function"

export class $NoteBlockInstrument extends $Enum<$NoteBlockInstrument> implements $StringRepresentable {
static readonly "BANJO": $NoteBlockInstrument
static readonly "BASEDRUM": $NoteBlockInstrument
static readonly "BASS": $NoteBlockInstrument
static readonly "BELL": $NoteBlockInstrument
static readonly "BIT": $NoteBlockInstrument
static readonly "CHIME": $NoteBlockInstrument
static readonly "COW_BELL": $NoteBlockInstrument
static readonly "CREEPER": $NoteBlockInstrument
static readonly "CUSTOM_HEAD": $NoteBlockInstrument
static readonly "DIDGERIDOO": $NoteBlockInstrument
static readonly "DRAGON": $NoteBlockInstrument
static readonly "FLUTE": $NoteBlockInstrument
static readonly "GUITAR": $NoteBlockInstrument
static readonly "HARP": $NoteBlockInstrument
static readonly "HAT": $NoteBlockInstrument
static readonly "IRON_XYLOPHONE": $NoteBlockInstrument
static readonly "PIGLIN": $NoteBlockInstrument
static readonly "PLING": $NoteBlockInstrument
static readonly "SKELETON": $NoteBlockInstrument
static readonly "SNARE": $NoteBlockInstrument
static readonly "WITHER_SKELETON": $NoteBlockInstrument
static readonly "XYLOPHONE": $NoteBlockInstrument
static readonly "ZOMBIE": $NoteBlockInstrument

public static "fromEnum"<E extends ($Enum<E> & $StringRepresentable)>(supplier0: $Supplier$$Type<E[]>): $StringRepresentable$EnumCodec<E>
public static "fromEnumWithMapping"<E extends ($Enum<E> & $StringRepresentable)>(supplier0: $Supplier$$Type<E[]>, function1: $Function$$Type<string, string>): $StringRepresentable$EnumCodec<E>
public "getSerializedName"(): string
public "getSoundEvent"(): $Holder<$SoundEvent>
public "hasCustomSound"(): boolean
public "isTunable"(): boolean
public static "keys"(stringRepresentable0s: $StringRepresentable$$Type[]): $Keyable
public static "valueOf"(string0: string): $NoteBlockInstrument
public static "values"(): $NoteBlockInstrument[]
public "worksAboveNoteBlock"(): boolean
get "serializedName"(): string
get "soundEvent"(): $Holder<$SoundEvent>
get "tunable"(): boolean
}
}

declare module "net.minecraft.world.level.block.state.BlockBehaviour$StatePredicate" {
import { $BlockGetter$$Type } from "net.minecraft.world.level.BlockGetter"
import { $BlockPos$$Type } from "net.minecraft.core.BlockPos"
import { $BlockState$$Type } from "net.minecraft.world.level.block.state.BlockState"

export interface $BlockBehaviour$StatePredicate {
"test"(blockState0: $BlockState$$Type, blockGetter1: $BlockGetter$$Type, blockPos2: $BlockPos$$Type): boolean
}

export namespace $BlockBehaviour$StatePredicate {
const probejs$$marker: never
}
export abstract class $BlockBehaviour$StatePredicate$$Static implements $BlockBehaviour$StatePredicate {
}
}

declare module "net.minecraft.world.level.block.state.BlockBehaviour$Properties" {
import { $BlockBehaviour$StateArgumentPredicate, $BlockBehaviour$StateArgumentPredicate$$Type } from "net.minecraft.world.level.block.state.BlockBehaviour$StateArgumentPredicate"
import { $ResourceLocation, $ResourceLocation$$Type } from "net.minecraft.resources.ResourceLocation"
import { $FeatureFlag$$Type } from "net.minecraft.world.flag.FeatureFlag"
import { $DyeColor$$Type } from "net.minecraft.world.item.DyeColor"
import { $BlockPropertiesAccessor } from "com.gregtechceu.gtceu.core.mixins.BlockPropertiesAccessor"
import { $EntityType, $EntityType$$Type } from "net.minecraft.world.entity.EntityType"
import { $ToIntFunction, $ToIntFunction$$Type } from "java.util.function.ToIntFunction"
import { $BlockState, $BlockState$$Type } from "net.minecraft.world.level.block.state.BlockState"
import { $Function, $Function$$Type } from "java.util.function.Function"
import { $Supplier$$Type } from "java.util.function.Supplier"
import { $SoundType, $SoundType$$Type } from "net.minecraft.world.level.block.SoundType"
import { $BlockBehaviour$StatePredicate, $BlockBehaviour$StatePredicate$$Type } from "net.minecraft.world.level.block.state.BlockBehaviour$StatePredicate"
import { $BlockPropertiesAccessor as $BlockPropertiesAccessor$0 } from "com.supermartijn642.core.mixin.BlockPropertiesAccessor"
import { $BlockPropertiesAccessor as $BlockPropertiesAccessor$1 } from "vazkii.botania.mixin.BlockPropertiesAccessor"
import { $ICopiedBlockProperties } from "com.bobmowzie.mowziesmobs.server.block.ICopiedBlockProperties"
import { $MapColor, $MapColor$$Type } from "net.minecraft.world.level.material.MapColor"
import { $PushReaction, $PushReaction$$Type } from "net.minecraft.world.level.material.PushReaction"
import { $NoteBlockInstrument, $NoteBlockInstrument$$Type } from "net.minecraft.world.level.block.state.properties.NoteBlockInstrument"
import { $Block, $Block$$Type } from "net.minecraft.world.level.block.Block"
import { $BlockBehaviour$$Type } from "net.minecraft.world.level.block.state.BlockBehaviour"
import { $BlockBehaviour$OffsetType$$Type } from "net.minecraft.world.level.block.state.BlockBehaviour$OffsetType"

export class $BlockBehaviour$Properties implements $BlockPropertiesAccessor$0, $ICopiedBlockProperties, $BlockPropertiesAccessor$1, $BlockPropertiesAccessor {
"destroyTime": float
"dynamicShape": boolean
"emissiveRendering": $BlockBehaviour$StatePredicate
"explosionResistance": float
"friction": float
"hasPostProcess": $BlockBehaviour$StatePredicate
"ignitedByLava": boolean
"instrument": $NoteBlockInstrument
"isRedstoneConductor": $BlockBehaviour$StatePredicate
"isSuffocating": $BlockBehaviour$StatePredicate
"isValidSpawn": $BlockBehaviour$StateArgumentPredicate<$EntityType<any>>
"isViewBlocking": $BlockBehaviour$StatePredicate
"jumpFactor": float
"mapColor": $Function<$BlockState, $MapColor>
"pushReaction": $PushReaction
"replaceable": boolean
"requiresCorrectToolForDrops": boolean
"speedFactor": float

constructor()

public "air"(): $BlockBehaviour$Properties
public static "copy"(blockBehaviour0: $BlockBehaviour$$Type): $BlockBehaviour$Properties
public "destroyTime"(float0: float): $BlockBehaviour$Properties
/** @deprecated */
public "dropsLike"(block0: $Block$$Type): $BlockBehaviour$Properties
public "dynamicShape"(): $BlockBehaviour$Properties
public "emissiveRendering"(statePredicate0: $BlockBehaviour$StatePredicate$$Type): $BlockBehaviour$Properties
public "explosionResistance"(float0: float): $BlockBehaviour$Properties
/** @deprecated */
public "forceSolidOff"(): $BlockBehaviour$Properties
public "forceSolidOn"(): $BlockBehaviour$Properties
public "friction"(float0: float): $BlockBehaviour$Properties
public "getBaseBlock"(): $Block
public "hasPostProcess"(statePredicate0: $BlockBehaviour$StatePredicate$$Type): $BlockBehaviour$Properties
public "ignitedByLava"(): $BlockBehaviour$Properties
public "instabreak"(): $BlockBehaviour$Properties
public "instrument"(noteBlockInstrument0: $NoteBlockInstrument$$Type): $BlockBehaviour$Properties
public "isRedstoneConductor"(statePredicate0: $BlockBehaviour$StatePredicate$$Type): $BlockBehaviour$Properties
public "isSuffocating"(statePredicate0: $BlockBehaviour$StatePredicate$$Type): $BlockBehaviour$Properties
public "isValidSpawn"(stateArgumentPredicate0: $BlockBehaviour$StateArgumentPredicate$$Type<$EntityType$$Type<any>>): $BlockBehaviour$Properties
public "isViewBlocking"(statePredicate0: $BlockBehaviour$StatePredicate$$Type): $BlockBehaviour$Properties
public "jumpFactor"(float0: float): $BlockBehaviour$Properties
public "lightLevel"(toIntFunction0: $ToIntFunction$$Type<$BlockState$$Type>): $BlockBehaviour$Properties
public "liquid"(): $BlockBehaviour$Properties
public "lootFrom"(supplier0: $Supplier$$Type<$Block>): $BlockBehaviour$Properties
public "mapColor"(function0: $Function$$Type<$BlockState$$Type, $MapColor>): $BlockBehaviour$Properties
public "mapColor"(dyeColor0: $DyeColor$$Type): $BlockBehaviour$Properties
public "mapColor"(mapColor0: $MapColor$$Type): $BlockBehaviour$Properties
public "noCollission"(): $BlockBehaviour$Properties
public "noLootTable"(): $BlockBehaviour$Properties
public "noOcclusion"(): $BlockBehaviour$Properties
public "noParticlesOnBreak"(): $BlockBehaviour$Properties
public static "of"(): $BlockBehaviour$Properties
public "offsetType"(offsetType0: $BlockBehaviour$OffsetType$$Type): $BlockBehaviour$Properties
public "pushReaction"(pushReaction0: $PushReaction$$Type): $BlockBehaviour$Properties
public "randomTicks"(): $BlockBehaviour$Properties
public "replaceable"(): $BlockBehaviour$Properties
public "requiredFeatures"(...featureFlag0s: $FeatureFlag$$Type[]): $BlockBehaviour$Properties
public "requiresCorrectToolForDrops"(): $BlockBehaviour$Properties
public "setBaseBlock"(block0: $Block$$Type): void
public "sound"(soundType0: $SoundType$$Type): $BlockBehaviour$Properties
public "speedFactor"(float0: float): $BlockBehaviour$Properties
public "strength"(float0: float): $BlockBehaviour$Properties
public "strength"(float0: float, float1: float): $BlockBehaviour$Properties
get "baseBlock"(): $Block
set "baseBlock"(value: $Block$$Type)
get "canOcclude"(): boolean
set "canOcclude"(value: boolean)
get "drops"(): $ResourceLocation
set "drops"(value: $ResourceLocation$$Type)
get "hasCollision"(): boolean
set "hasCollision"(value: boolean)
get "isAir"(): boolean
set "isAir"(value: boolean)
get "isRandomlyTicking"(): boolean
set "isRandomlyTicking"(value: boolean)
get "lightEmission"(): $ToIntFunction<$BlockState>
set "lightEmission"(value: $ToIntFunction$$Type<$BlockState$$Type>)
get "soundType"(): $SoundType
set "soundType"(value: $SoundType$$Type)
}
}

declare module "net.minecraft.world.level.block.state.properties.WallSide" {
import { $Enum, $Enum$$Type } from "java.lang.Enum"
import { $StringRepresentable, $StringRepresentable$$Type } from "net.minecraft.util.StringRepresentable"
import { $StringRepresentable$EnumCodec } from "net.minecraft.util.StringRepresentable$EnumCodec"
import { $Keyable } from "com.mojang.serialization.Keyable"
import { $Supplier$$Type } from "java.util.function.Supplier"
import { $Function$$Type } from "java.util.function.Function"

export class $WallSide extends $Enum<$WallSide> implements $StringRepresentable {
static readonly "LOW": $WallSide
static readonly "NONE": $WallSide
static readonly "TALL": $WallSide

public static "fromEnum"<E extends ($Enum<E> & $StringRepresentable)>(supplier0: $Supplier$$Type<E[]>): $StringRepresentable$EnumCodec<E>
public static "fromEnumWithMapping"<E extends ($Enum<E> & $StringRepresentable)>(supplier0: $Supplier$$Type<E[]>, function1: $Function$$Type<string, string>): $StringRepresentable$EnumCodec<E>
public "getSerializedName"(): string
public static "keys"(stringRepresentable0s: $StringRepresentable$$Type[]): $Keyable
public static "valueOf"(string0: string): $WallSide
public static "values"(): $WallSide[]
get "serializedName"(): string
}
}

declare module "net.minecraft.world.level.block.state.BlockBehaviour$BlockStateBase" {
import { $BlockStatePathingCache } from "com.abdelaziz.canary.common.ai.pathing.BlockStatePathingCache"
import { $Direction$$Type } from "net.minecraft.core.Direction"
import { $CallbackInfoReturnable$$Type } from "org.spongepowered.asm.mixin.injection.callback.CallbackInfoReturnable"
import { $CallbackInfo$$Type } from "org.spongepowered.asm.mixin.injection.callback.CallbackInfo"
import { $MapColor } from "net.minecraft.world.level.material.MapColor"
import { $BlockGetter$$Type } from "net.minecraft.world.level.BlockGetter"
import { $RenderShape } from "net.minecraft.world.level.block.RenderShape"
import { $Rotation$$Type } from "net.minecraft.world.level.block.Rotation"
import { $Holder } from "net.minecraft.core.Holder"
import { $StateHolder } from "net.minecraft.world.level.block.state.StateHolder"
import { $Projectile$$Type } from "net.minecraft.world.entity.projectile.Projectile"
import { $BlockPathTypes } from "net.minecraft.world.level.pathfinder.BlockPathTypes"
import { $Predicate$$Type } from "java.util.function.Predicate"
import { $BlockHitResult$$Type } from "net.minecraft.world.phys.BlockHitResult"
import { $RandomSource$$Type } from "net.minecraft.util.RandomSource"
import { $InteractionResult } from "net.minecraft.world.InteractionResult"
import { $LevelReader$$Type } from "net.minecraft.world.level.LevelReader"
import { $BlockEntity, $BlockEntity$$Type } from "net.minecraft.world.level.block.entity.BlockEntity"
import { $SoundType } from "net.minecraft.world.level.block.SoundType"
import { $Player$$Type } from "net.minecraft.world.entity.player.Player"
import { $List } from "java.util.List"
import { $Stream } from "java.util.stream.Stream"
import { $PathComputationType$$Type } from "net.minecraft.world.level.pathfinder.PathComputationType"
import { $BlockPos$$Type } from "net.minecraft.core.BlockPos"
import { $BlockEntityType$$Type } from "net.minecraft.world.level.block.entity.BlockEntityType"
import { $FluidState } from "net.minecraft.world.level.material.FluidState"
import { $BlockPlaceContext$$Type } from "net.minecraft.world.item.context.BlockPlaceContext"
import { $LevelAccessor$$Type } from "net.minecraft.world.level.LevelAccessor"
import { $BlockStateKJS } from "dev.latvian.mods.kubejs.core.BlockStateKJS"
import { $MenuProvider } from "net.minecraft.world.MenuProvider"
import { $ItemStack, $ItemStack$$Type } from "net.minecraft.world.item.ItemStack"
import { $Level$$Type } from "net.minecraft.world.level.Level"
import { $LootParams$Builder$$Type } from "net.minecraft.world.level.storage.loot.LootParams$Builder"
import { $VoxelShape } from "net.minecraft.world.phys.shapes.VoxelShape"
import { $BlockEntityTicker } from "net.minecraft.world.level.block.entity.BlockEntityTicker"
import { $CollisionContext$$Type } from "net.minecraft.world.phys.shapes.CollisionContext"
import { $EntityType$$Type } from "net.minecraft.world.entity.EntityType"
import { $HolderSet$$Type } from "net.minecraft.core.HolderSet"
import { $BlockState, $BlockState$$Type } from "net.minecraft.world.level.block.state.BlockState"
import { $SupportType$$Type } from "net.minecraft.world.level.block.SupportType"
import { $ServerLevel$$Type } from "net.minecraft.server.level.ServerLevel"
import { $TagKey, $TagKey$$Type } from "net.minecraft.tags.TagKey"
import { $PushReaction } from "net.minecraft.world.level.material.PushReaction"
import { $Mirror$$Type } from "net.minecraft.world.level.block.Mirror"
import { $NoteBlockInstrument } from "net.minecraft.world.level.block.state.properties.NoteBlockInstrument"
import { $Fluid$$Type } from "net.minecraft.world.level.material.Fluid"
import { $IBlockState } from "org.embeddedt.modernfix.duck.IBlockState"
import { $Entity$$Type } from "net.minecraft.world.entity.Entity"
import { $Vec3, $Vec3$$Type } from "net.minecraft.world.phys.Vec3"
import { $Block, $Block$$Type } from "net.minecraft.world.level.block.Block"
import { $InteractionHand$$Type } from "net.minecraft.world.InteractionHand"

export class $BlockBehaviour$BlockStateBase extends $StateHolder<$Block, $BlockState> implements $IBlockState, $BlockStatePathingCache, $BlockStateKJS {
readonly "mapColor": $MapColor

public "attack"(level0: $Level$$Type, blockPos1: $BlockPos$$Type, player2: $Player$$Type): void
/** @deprecated */
public "blocksMotion"(): boolean
public "canBeReplaced"(): boolean
public "canBeReplaced"(blockPlaceContext0: $BlockPlaceContext$$Type): boolean
public "canBeReplaced"(fluid0: $Fluid$$Type): boolean
public "canOcclude"(): boolean
public "canSurvive"(levelReader0: $LevelReader$$Type, blockPos1: $BlockPos$$Type): boolean
public "clearCache"(): void
public "emissiveRendering"(blockGetter0: $BlockGetter$$Type, blockPos1: $BlockPos$$Type): boolean
public "entityCanStandOn"(blockGetter0: $BlockGetter$$Type, blockPos1: $BlockPos$$Type, entity2: $Entity$$Type): boolean
public "entityCanStandOnFace"(blockGetter0: $BlockGetter$$Type, blockPos1: $BlockPos$$Type, entity2: $Entity$$Type, direction3: $Direction$$Type): boolean
public "entityInside"(level0: $Level$$Type, blockPos1: $BlockPos$$Type, entity2: $Entity$$Type): void
public "getAnalogOutputSignal"(level0: $Level$$Type, blockPos1: $BlockPos$$Type): integer
public "getBlock"(): $Block
public "getBlockHolder"(): $Holder<$Block>
public "getBlockSupportShape"(blockGetter0: $BlockGetter$$Type, blockPos1: $BlockPos$$Type): $VoxelShape
public "getCollisionShape"(blockGetter0: $BlockGetter$$Type, blockPos1: $BlockPos$$Type): $VoxelShape
public "getCollisionShape"(blockGetter0: $BlockGetter$$Type, blockPos1: $BlockPos$$Type, collisionContext2: $CollisionContext$$Type): $VoxelShape
public "getDestroyProgress"(player0: $Player$$Type, blockGetter1: $BlockGetter$$Type, blockPos2: $BlockPos$$Type): float
public "getDestroySpeed"(blockGetter0: $BlockGetter$$Type, blockPos1: $BlockPos$$Type): float
public "getDirectSignal"(blockGetter0: $BlockGetter$$Type, blockPos1: $BlockPos$$Type, direction2: $Direction$$Type): integer
public "getDrops"(builder0: $LootParams$Builder$$Type): $List<$ItemStack>
public "getFaceOcclusionShape"(blockGetter0: $BlockGetter$$Type, blockPos1: $BlockPos$$Type, direction2: $Direction$$Type): $VoxelShape
public "getFluidState"(): $FluidState
public "getInteractionShape"(blockGetter0: $BlockGetter$$Type, blockPos1: $BlockPos$$Type): $VoxelShape
public "getLightBlock"(blockGetter0: $BlockGetter$$Type, blockPos1: $BlockPos$$Type): integer
/** @deprecated */
public "getLightEmission"(): integer
public "getMapColor"(blockGetter0: $BlockGetter$$Type, blockPos1: $BlockPos$$Type): $MapColor
public "getMenuProvider"(level0: $Level$$Type, blockPos1: $BlockPos$$Type): $MenuProvider
public "getNeighborPathNodeType"(): $BlockPathTypes
public "getOcclusionShape"(blockGetter0: $BlockGetter$$Type, blockPos1: $BlockPos$$Type): $VoxelShape
public "getOffset"(blockGetter0: $BlockGetter$$Type, blockPos1: $BlockPos$$Type): $Vec3
public "getPathNodeType"(): $BlockPathTypes
public "getPistonPushReaction"(): $PushReaction
public "getRenderShape"(): $RenderShape
public "getSeed"(blockPos0: $BlockPos$$Type): long
public "getShadeBrightness"(blockGetter0: $BlockGetter$$Type, blockPos1: $BlockPos$$Type): float
public "getShape"(blockGetter0: $BlockGetter$$Type, blockPos1: $BlockPos$$Type): $VoxelShape
public "getShape"(blockGetter0: $BlockGetter$$Type, blockPos1: $BlockPos$$Type, collisionContext2: $CollisionContext$$Type): $VoxelShape
public "getSignal"(blockGetter0: $BlockGetter$$Type, blockPos1: $BlockPos$$Type, direction2: $Direction$$Type): integer
public "getSoundType"(): $SoundType
public "getTags"(): $Stream<$TagKey<$Block>>
public "getTicker"<T extends $BlockEntity>(level0: $Level$$Type, blockEntityType1: $BlockEntityType$$Type<T>): $BlockEntityTicker<T>
public "getVisualShape"(blockGetter0: $BlockGetter$$Type, blockPos1: $BlockPos$$Type, collisionContext2: $CollisionContext$$Type): $VoxelShape
public "handler$efj000$onRandomTick"(serverLevel0: $ServerLevel$$Type, blockPos1: $BlockPos$$Type, randomSource2: $RandomSource$$Type, callbackInfo3: $CallbackInfo$$Type): void
public "handler$egj000$getArsSignal"(blockGetter0: $BlockGetter$$Type, blockPos1: $BlockPos$$Type, direction2: $Direction$$Type, callbackInfoReturnable3: $CallbackInfoReturnable$$Type): void
public "handler$iaa000$cacheStateHead"(callbackInfo0: $CallbackInfo$$Type): void
public "handler$iaa000$cacheStateTail"(callbackInfo0: $CallbackInfo$$Type): void
public "hasAnalogOutputSignal"(): boolean
public "hasBlockEntity"(): boolean
public "hasLargeCollisionShape"(): boolean
public "hasOffsetFunction"(): boolean
public "hasPostProcess"(blockGetter0: $BlockGetter$$Type, blockPos1: $BlockPos$$Type): boolean
public "ignitedByLava"(): boolean
public "initCache"(): void
public "instrument"(): $NoteBlockInstrument
public "is"(tagKey0: $TagKey$$Type<$Block$$Type>, predicate1: $Predicate$$Type<$BlockBehaviour$BlockStateBase$$Type>): boolean
public "is"(holderSet0: $HolderSet$$Type<$Block$$Type>): boolean
public "is"(tagKey0: $TagKey$$Type<$Block$$Type>): boolean
public "is"(block0: $Block$$Type): boolean
public "isAir"(): boolean
public "isCacheInvalid"(): boolean
public "isCollisionShapeFullBlock"(blockGetter0: $BlockGetter$$Type, blockPos1: $BlockPos$$Type): boolean
public "isFaceSturdy"(blockGetter0: $BlockGetter$$Type, blockPos1: $BlockPos$$Type, direction2: $Direction$$Type, supportType3: $SupportType$$Type): boolean
public "isFaceSturdy"(blockGetter0: $BlockGetter$$Type, blockPos1: $BlockPos$$Type, direction2: $Direction$$Type): boolean
public "isPathfindable"(blockGetter0: $BlockGetter$$Type, blockPos1: $BlockPos$$Type, pathComputationType2: $PathComputationType$$Type): boolean
public "isRandomlyTicking"(): boolean
public "isRedstoneConductor"(blockGetter0: $BlockGetter$$Type, blockPos1: $BlockPos$$Type): boolean
public "isSignalSource"(): boolean
/** @deprecated */
public "isSolid"(): boolean
public "isSolidRender"(blockGetter0: $BlockGetter$$Type, blockPos1: $BlockPos$$Type): boolean
public "isSuffocating"(blockGetter0: $BlockGetter$$Type, blockPos1: $BlockPos$$Type): boolean
public "isValidSpawn"(blockGetter0: $BlockGetter$$Type, blockPos1: $BlockPos$$Type, entityType2: $EntityType$$Type<any>): boolean
public "isViewBlocking"(blockGetter0: $BlockGetter$$Type, blockPos1: $BlockPos$$Type): boolean
/** @deprecated */
public "liquid"(): boolean
public "mirror"(mirror0: $Mirror$$Type): $BlockState
public "modifyReturnValue$hem000$supp$modifyPlanterOffset"(original: $Vec3$$Type, level: $BlockGetter$$Type, pos: $BlockPos$$Type): $Vec3
/** @deprecated */
public "neighborChanged"(level0: $Level$$Type, blockPos1: $BlockPos$$Type, block2: $Block$$Type, blockPos3: $BlockPos$$Type, boolean4: boolean): void
public "onPlace"(level0: $Level$$Type, blockPos1: $BlockPos$$Type, blockState2: $BlockState$$Type, boolean3: boolean): void
public "onProjectileHit"(level0: $Level$$Type, blockState1: $BlockState$$Type, blockHitResult2: $BlockHitResult$$Type, projectile3: $Projectile$$Type): void
public "onRemove"(level0: $Level$$Type, blockPos1: $BlockPos$$Type, blockState2: $BlockState$$Type, boolean3: boolean): void
public "propagatesSkylightDown"(blockGetter0: $BlockGetter$$Type, blockPos1: $BlockPos$$Type): boolean
public "randomTick"(serverLevel0: $ServerLevel$$Type, blockPos1: $BlockPos$$Type, randomSource2: $RandomSource$$Type): void
public "requiresCorrectToolForDrops"(): boolean
/** @deprecated */
public "rotate"(rotation0: $Rotation$$Type): $BlockState
public "shouldSpawnParticlesOnBreak"(): boolean
public "skipRendering"(blockState0: $BlockState$$Type, direction1: $Direction$$Type): boolean
public "spawnAfterBreak"(serverLevel0: $ServerLevel$$Type, blockPos1: $BlockPos$$Type, itemStack2: $ItemStack$$Type, boolean3: boolean): void
public "tick"(serverLevel0: $ServerLevel$$Type, blockPos1: $BlockPos$$Type, randomSource2: $RandomSource$$Type): void
public "triggerEvent"(level0: $Level$$Type, blockPos1: $BlockPos$$Type, int2: integer, int3: integer): boolean
public "updateIndirectNeighbourShapes"(levelAccessor0: $LevelAccessor$$Type, blockPos1: $BlockPos$$Type, int2: integer): void
public "updateIndirectNeighbourShapes"(levelAccessor0: $LevelAccessor$$Type, blockPos1: $BlockPos$$Type, int2: integer, int3: integer): void
public "updateNeighbourShapes"(levelAccessor0: $LevelAccessor$$Type, blockPos1: $BlockPos$$Type, int2: integer): void
public "updateNeighbourShapes"(levelAccessor0: $LevelAccessor$$Type, blockPos1: $BlockPos$$Type, int2: integer, int3: integer): void
public "updateShape"(direction0: $Direction$$Type, blockState1: $BlockState$$Type, levelAccessor2: $LevelAccessor$$Type, blockPos3: $BlockPos$$Type, blockPos4: $BlockPos$$Type): $BlockState
public "use"(level0: $Level$$Type, player1: $Player$$Type, interactionHand2: $InteractionHand$$Type, blockHitResult3: $BlockHitResult$$Type): $InteractionResult
public "useShapeForLightOcclusion"(): boolean
get "block"(): $Block
get "blockHolder"(): $Holder<$Block>
get "fluidState"(): $FluidState
get "lightEmission"(): integer
get "neighborPathNodeType"(): $BlockPathTypes
get "pathNodeType"(): $BlockPathTypes
get "pistonPushReaction"(): $PushReaction
get "renderShape"(): $RenderShape
get "soundType"(): $SoundType
get "tags"(): $Stream<$TagKey<$Block>>
get "air"(): boolean
get "cacheInvalid"(): boolean
get "randomlyTicking"(): boolean
get "signalSource"(): boolean
get "solid"(): boolean
}
}

declare module "net.minecraft.world.level.block.state.properties.RedstoneSide" {
import { $Enum, $Enum$$Type } from "java.lang.Enum"
import { $StringRepresentable, $StringRepresentable$$Type } from "net.minecraft.util.StringRepresentable"
import { $StringRepresentable$EnumCodec } from "net.minecraft.util.StringRepresentable$EnumCodec"
import { $Keyable } from "com.mojang.serialization.Keyable"
import { $Supplier$$Type } from "java.util.function.Supplier"
import { $Function$$Type } from "java.util.function.Function"

export class $RedstoneSide extends $Enum<$RedstoneSide> implements $StringRepresentable {
static readonly "NONE": $RedstoneSide
static readonly "SIDE": $RedstoneSide
static readonly "UP": $RedstoneSide

public static "fromEnum"<E extends ($Enum<E> & $StringRepresentable)>(supplier0: $Supplier$$Type<E[]>): $StringRepresentable$EnumCodec<E>
public static "fromEnumWithMapping"<E extends ($Enum<E> & $StringRepresentable)>(supplier0: $Supplier$$Type<E[]>, function1: $Function$$Type<string, string>): $StringRepresentable$EnumCodec<E>
public "getSerializedName"(): string
public "isConnected"(): boolean
public static "keys"(stringRepresentable0s: $StringRepresentable$$Type[]): $Keyable
public static "valueOf"(string0: string): $RedstoneSide
public static "values"(): $RedstoneSide[]
get "serializedName"(): string
get "connected"(): boolean
}
}

declare module "net.minecraft.world.level.block.state.BlockBehaviour$StateArgumentPredicate" {
import { $BlockGetter$$Type } from "net.minecraft.world.level.BlockGetter"
import { $BlockPos$$Type } from "net.minecraft.core.BlockPos"
import { $BlockState$$Type } from "net.minecraft.world.level.block.state.BlockState"

export interface $BlockBehaviour$StateArgumentPredicate<A = any> {
"test"(blockState0: $BlockState$$Type, blockGetter1: $BlockGetter$$Type, blockPos2: $BlockPos$$Type, a3: A): boolean
}

export namespace $BlockBehaviour$StateArgumentPredicate {
const probejs$$marker: never
}
export abstract class $BlockBehaviour$StateArgumentPredicate$$Static<A = any> implements $BlockBehaviour$StateArgumentPredicate<A> {
}
}

declare module "net.minecraft.world.level.block.state.properties.DripstoneThickness" {
import { $Enum, $Enum$$Type } from "java.lang.Enum"
import { $StringRepresentable, $StringRepresentable$$Type } from "net.minecraft.util.StringRepresentable"
import { $StringRepresentable$EnumCodec } from "net.minecraft.util.StringRepresentable$EnumCodec"
import { $Keyable } from "com.mojang.serialization.Keyable"
import { $Supplier$$Type } from "java.util.function.Supplier"
import { $Function$$Type } from "java.util.function.Function"

export class $DripstoneThickness extends $Enum<$DripstoneThickness> implements $StringRepresentable {
static readonly "BASE": $DripstoneThickness
static readonly "FRUSTUM": $DripstoneThickness
static readonly "MIDDLE": $DripstoneThickness
static readonly "TIP": $DripstoneThickness
static readonly "TIP_MERGE": $DripstoneThickness

public static "fromEnum"<E extends ($Enum<E> & $StringRepresentable)>(supplier0: $Supplier$$Type<E[]>): $StringRepresentable$EnumCodec<E>
public static "fromEnumWithMapping"<E extends ($Enum<E> & $StringRepresentable)>(supplier0: $Supplier$$Type<E[]>, function1: $Function$$Type<string, string>): $StringRepresentable$EnumCodec<E>
public "getSerializedName"(): string
public static "keys"(stringRepresentable0s: $StringRepresentable$$Type[]): $Keyable
public static "valueOf"(string0: string): $DripstoneThickness
public static "values"(): $DripstoneThickness[]
get "serializedName"(): string
}
}

declare module "net.minecraft.world.level.block.state.properties.IntegerProperty" {
import { $Collection } from "java.util.Collection"
import { $Optional } from "java.util.Optional"
import { $Property } from "net.minecraft.world.level.block.state.properties.Property"
import { $IntegerPropertyAccessor } from "com.gregtechceu.gtceu.core.mixins.IntegerPropertyAccessor"

export class $IntegerProperty extends $Property<integer> implements $IntegerPropertyAccessor {
public static "create"(string0: string, int1: integer, int2: integer): $IntegerProperty
public "getName"(integer0: integer): string
public "getPossibleValues"(): $Collection<integer>
public "getValue"(string0: string): $Optional<integer>
get "possibleValues"(): $Collection<integer>
}
}

declare module "net.minecraft.world.level.block.state.properties.DoorHingeSide" {
import { $Enum, $Enum$$Type } from "java.lang.Enum"
import { $StringRepresentable, $StringRepresentable$$Type } from "net.minecraft.util.StringRepresentable"
import { $StringRepresentable$EnumCodec } from "net.minecraft.util.StringRepresentable$EnumCodec"
import { $Keyable } from "com.mojang.serialization.Keyable"
import { $Supplier$$Type } from "java.util.function.Supplier"
import { $Function$$Type } from "java.util.function.Function"

export class $DoorHingeSide extends $Enum<$DoorHingeSide> implements $StringRepresentable {
static readonly "LEFT": $DoorHingeSide
static readonly "RIGHT": $DoorHingeSide

public static "fromEnum"<E extends ($Enum<E> & $StringRepresentable)>(supplier0: $Supplier$$Type<E[]>): $StringRepresentable$EnumCodec<E>
public static "fromEnumWithMapping"<E extends ($Enum<E> & $StringRepresentable)>(supplier0: $Supplier$$Type<E[]>, function1: $Function$$Type<string, string>): $StringRepresentable$EnumCodec<E>
public "getSerializedName"(): string
public static "keys"(stringRepresentable0s: $StringRepresentable$$Type[]): $Keyable
public static "valueOf"(string0: string): $DoorHingeSide
public static "values"(): $DoorHingeSide[]
get "serializedName"(): string
}
}

declare module "net.minecraft.world.level.block.state.pattern.BlockPattern$BlockPatternMatch" {
import { $LoadingCache$$Type } from "com.google.common.cache.LoadingCache"
import { $BlockInWorld, $BlockInWorld$$Type } from "net.minecraft.world.level.block.state.pattern.BlockInWorld"
import { $BlockPos, $BlockPos$$Type } from "net.minecraft.core.BlockPos"
import { $Direction, $Direction$$Type } from "net.minecraft.core.Direction"

export class $BlockPattern$BlockPatternMatch {
constructor(blockPos0: $BlockPos$$Type, direction1: $Direction$$Type, direction2: $Direction$$Type, loadingCache3: $LoadingCache$$Type<$BlockPos$$Type, $BlockInWorld$$Type>, int4: integer, int5: integer, int6: integer)

public "getBlock"(int0: integer, int1: integer, int2: integer): $BlockInWorld
public "getDepth"(): integer
public "getForwards"(): $Direction
public "getFrontTopLeft"(): $BlockPos
public "getHeight"(): integer
public "getUp"(): $Direction
public "getWidth"(): integer
get "depth"(): integer
get "forwards"(): $Direction
get "frontTopLeft"(): $BlockPos
get "height"(): integer
get "up"(): $Direction
get "width"(): integer
}
}

declare module "net.minecraft.world.level.block.state.properties.BlockSetType" {
import { $Stream } from "java.util.stream.Stream"
import { $SoundEvent, $SoundEvent$$Type } from "net.minecraft.sounds.SoundEvent"
import { $Record } from "java.lang.Record"
import { $SoundType, $SoundType$$Type } from "net.minecraft.world.level.block.SoundType"
import { $AccessorBlockSetType } from "com.railwayteam.railways.mixin.AccessorBlockSetType"

export class $BlockSetType extends $Record implements $AccessorBlockSetType {
static readonly "ACACIA": $BlockSetType
static readonly "BAMBOO": $BlockSetType
static readonly "BIRCH": $BlockSetType
static readonly "CHERRY": $BlockSetType
static readonly "CRIMSON": $BlockSetType
static readonly "DARK_OAK": $BlockSetType
static readonly "GOLD": $BlockSetType
static readonly "IRON": $BlockSetType
static readonly "JUNGLE": $BlockSetType
static readonly "MANGROVE": $BlockSetType
static readonly "OAK": $BlockSetType
static readonly "POLISHED_BLACKSTONE": $BlockSetType
static readonly "SPRUCE": $BlockSetType
static readonly "STONE": $BlockSetType
static readonly "WARPED": $BlockSetType

constructor(string0: string, boolean1: boolean, soundType2: $SoundType$$Type, soundEvent3: $SoundEvent$$Type, soundEvent4: $SoundEvent$$Type, soundEvent5: $SoundEvent$$Type, soundEvent6: $SoundEvent$$Type, soundEvent7: $SoundEvent$$Type, soundEvent8: $SoundEvent$$Type, soundEvent9: $SoundEvent$$Type, soundEvent10: $SoundEvent$$Type)
constructor(string0: string)

public "buttonClickOff"(): $SoundEvent
public "buttonClickOn"(): $SoundEvent
public "canOpenByHand"(): boolean
public "doorClose"(): $SoundEvent
public "doorOpen"(): $SoundEvent
public "name"(): string
public "pressurePlateClickOff"(): $SoundEvent
public "pressurePlateClickOn"(): $SoundEvent
public static "register"(blockSetType0: $BlockSetType$$Type): $BlockSetType
public "soundType"(): $SoundType
public "trapdoorClose"(): $SoundEvent
public "trapdoorOpen"(): $SoundEvent
public static "values"(): $Stream<$BlockSetType>
}
}

declare module "net.minecraft.world.level.block.state.properties.EnumProperty" {
import { $Enum, $Enum$$Type } from "java.lang.Enum"
import { $StringRepresentable, $StringRepresentable$$Type } from "net.minecraft.util.StringRepresentable"
import { $Predicate$$Type } from "java.util.function.Predicate"
import { $Collection, $Collection$$Type } from "java.util.Collection"
import { $Optional } from "java.util.Optional"
import { $Class$$Type } from "java.lang.Class"
import { $Property } from "net.minecraft.world.level.block.state.properties.Property"

export class $EnumProperty<T extends ($Enum<T> & $StringRepresentable) = ($Enum<T> & $StringRepresentable)> extends $Property<T> {
public static "create"<T extends ($Enum<T> & $StringRepresentable)>(string0: string, class1: $Class$$Type<T>): $EnumProperty<T>
public static "create"<T extends ($Enum<T> & $StringRepresentable)>(string0: string, class1: $Class$$Type<T>, predicate2: $Predicate$$Type<T>): $EnumProperty<T>
public static "create"<T extends ($Enum<T> & $StringRepresentable)>(string0: string, class1: $Class$$Type<T>, collection2: $Collection$$Type<T>): $EnumProperty<T>
public static "create"<T extends ($Enum<T> & $StringRepresentable)>(string0: string, class1: $Class$$Type<T>, ...t2s: T[]): $EnumProperty<T>
public "getName"(t0: T): string
public "getPossibleValues"(): $Collection<T>
public "getValue"(string0: string): $Optional<T>
get "possibleValues"(): $Collection<T>
}
}

declare module "net.minecraft.world.level.block.state.BlockBehaviour$OffsetFunction" {
import { $BlockGetter$$Type } from "net.minecraft.world.level.BlockGetter"
import { $Vec3 } from "net.minecraft.world.phys.Vec3"
import { $BlockPos$$Type } from "net.minecraft.core.BlockPos"
import { $BlockState$$Type } from "net.minecraft.world.level.block.state.BlockState"

export interface $BlockBehaviour$OffsetFunction {
"evaluate"(blockState0: $BlockState$$Type, blockGetter1: $BlockGetter$$Type, blockPos2: $BlockPos$$Type): $Vec3
}

export namespace $BlockBehaviour$OffsetFunction {
const probejs$$marker: never
}
export abstract class $BlockBehaviour$OffsetFunction$$Static implements $BlockBehaviour$OffsetFunction {
}
}

declare module "net.minecraft.world.level.block.state.BlockState" {
import { $LivingEntity$$Type } from "net.minecraft.world.entity.LivingEntity"
import { $BlockStateFTBC } from "dev.ftb.mods.ftbchunks.core.BlockStateFTBC"
import { $Direction, $Direction$$Type } from "net.minecraft.core.Direction"
import { $EntityType$$Type } from "net.minecraft.world.entity.EntityType"
import { $SpawnPlacements$Type$$Type } from "net.minecraft.world.entity.SpawnPlacements$Type"
import { $ServerLevel$$Type } from "net.minecraft.server.level.ServerLevel"
import { $IForgeBlockState } from "net.minecraftforge.common.extensions.IForgeBlockState"
import { $BlockGetter$$Type } from "net.minecraft.world.level.BlockGetter"
import { $Rotation$$Type } from "net.minecraft.world.level.block.Rotation"
import { $ToolAction$$Type } from "net.minecraftforge.common.ToolAction"
import { $BiConsumer$$Type } from "java.util.function.BiConsumer"
import { $UseOnContext$$Type } from "net.minecraft.world.item.context.UseOnContext"
import { $BlockAndTintGetter$$Type } from "net.minecraft.world.level.BlockAndTintGetter"
import { $ImmutableMap$$Type } from "com.google.common.collect.ImmutableMap"
import { $BlockPathTypes, $BlockPathTypes$$Type } from "net.minecraft.world.level.pathfinder.BlockPathTypes"
import { $BlockBehaviour$BlockStateBase } from "net.minecraft.world.level.block.state.BlockBehaviour$BlockStateBase"
import { $MapCodec$$Type } from "com.mojang.serialization.MapCodec"
import { $RandomSource$$Type } from "net.minecraft.util.RandomSource"
import { $Property$$Type } from "net.minecraft.world.level.block.state.properties.Property"
import { $LevelReader$$Type } from "net.minecraft.world.level.LevelReader"
import { $TreeConfiguration$$Type } from "net.minecraft.world.level.levelgen.feature.configurations.TreeConfiguration"
import { $Explosion$$Type } from "net.minecraft.world.level.Explosion"
import { $SoundType } from "net.minecraft.world.level.block.SoundType"
import { $Player$$Type } from "net.minecraft.world.entity.player.Player"
import { $IPlantable$$Type } from "net.minecraftforge.common.IPlantable"
import { $HitResult$$Type } from "net.minecraft.world.phys.HitResult"
import { $Codec } from "com.mojang.serialization.Codec"
import { $Entity$$Type } from "net.minecraft.world.entity.Entity"
import { $BlockPos$$Type } from "net.minecraft.core.BlockPos"
import { $Vec3, $Vec3$$Type } from "net.minecraft.world.phys.Vec3"
import { $SignalGetter$$Type } from "net.minecraft.world.level.SignalGetter"
import { $FluidState$$Type } from "net.minecraft.world.level.material.FluidState"
import { $Optional } from "java.util.Optional"
import { $LevelAccessor$$Type } from "net.minecraft.world.level.LevelAccessor"
import { $Block$$Type } from "net.minecraft.world.level.block.Block"
import { $Comparable$$Type } from "java.lang.Comparable"
import { $ItemStack } from "net.minecraft.world.item.ItemStack"
import { $Level$$Type } from "net.minecraft.world.level.Level"
import { $Mob$$Type } from "net.minecraft.world.entity.Mob"

export class $BlockState extends $BlockBehaviour$BlockStateBase implements $IForgeBlockState, $BlockStateFTBC {
static readonly "CODEC": $Codec<$BlockState>

constructor(block0: $Block$$Type, immutableMap1: $ImmutableMap$$Type<$Property$$Type<any>, $Comparable$$Type<any>>, mapCodec2: $MapCodec$$Type<$BlockState$$Type>)

public "addLandingEffects"(serverLevel0: $ServerLevel$$Type, blockPos1: $BlockPos$$Type, blockState2: $BlockState$$Type, livingEntity3: $LivingEntity$$Type, int4: integer): boolean
public "addRunningEffects"(level0: $Level$$Type, blockPos1: $BlockPos$$Type, entity2: $Entity$$Type): boolean
public "canBeHydrated"(blockGetter0: $BlockGetter$$Type, blockPos1: $BlockPos$$Type, fluidState2: $FluidState$$Type, blockPos3: $BlockPos$$Type): boolean
public "canDropFromExplosion"(blockGetter0: $BlockGetter$$Type, blockPos1: $BlockPos$$Type, explosion2: $Explosion$$Type): boolean
public "canEntityDestroy"(blockGetter0: $BlockGetter$$Type, blockPos1: $BlockPos$$Type, entity2: $Entity$$Type): boolean
public "canHarvestBlock"(blockGetter0: $BlockGetter$$Type, blockPos1: $BlockPos$$Type, player2: $Player$$Type): boolean
public "canRedstoneConnectTo"(blockGetter0: $BlockGetter$$Type, blockPos1: $BlockPos$$Type, direction2: $Direction$$Type): boolean
public "canStickTo"(blockState0: $BlockState$$Type): boolean
public "canSustainPlant"(blockGetter0: $BlockGetter$$Type, blockPos1: $BlockPos$$Type, direction2: $Direction$$Type, iPlantable3: $IPlantable$$Type): boolean
public "collisionExtendsVertically"(blockGetter0: $BlockGetter$$Type, blockPos1: $BlockPos$$Type, entity2: $Entity$$Type): boolean
public "getAdjacentBlockPathType"(blockGetter0: $BlockGetter$$Type, blockPos1: $BlockPos$$Type, mob2: $Mob$$Type, blockPathTypes3: $BlockPathTypes$$Type): $BlockPathTypes
public "getAppearance"(blockAndTintGetter0: $BlockAndTintGetter$$Type, blockPos1: $BlockPos$$Type, direction2: $Direction$$Type, blockState3: $BlockState$$Type, blockPos4: $BlockPos$$Type): $BlockState
public "getBeaconColorMultiplier"(levelReader0: $LevelReader$$Type, blockPos1: $BlockPos$$Type, blockPos2: $BlockPos$$Type): float[]
public "getBedDirection"(levelReader0: $LevelReader$$Type, blockPos1: $BlockPos$$Type): $Direction
public "getBlockPathType"(blockGetter0: $BlockGetter$$Type, blockPos1: $BlockPos$$Type, mob2: $Mob$$Type): $BlockPathTypes
public "getCloneItemStack"(hitResult0: $HitResult$$Type, blockGetter1: $BlockGetter$$Type, blockPos2: $BlockPos$$Type, player3: $Player$$Type): $ItemStack
public "getEnchantPowerBonus"(levelReader0: $LevelReader$$Type, blockPos1: $BlockPos$$Type): float
public "getExpDrop"(levelReader0: $LevelReader$$Type, randomSource1: $RandomSource$$Type, blockPos2: $BlockPos$$Type, int3: integer, int4: integer): integer
public "getExplosionResistance"(blockGetter0: $BlockGetter$$Type, blockPos1: $BlockPos$$Type, explosion2: $Explosion$$Type): float
public "getFTBCIsWater"(): boolean
public "getFireSpreadSpeed"(blockGetter0: $BlockGetter$$Type, blockPos1: $BlockPos$$Type, direction2: $Direction$$Type): integer
public "getFlammability"(blockGetter0: $BlockGetter$$Type, blockPos1: $BlockPos$$Type, direction2: $Direction$$Type): integer
public "getFriction"(levelReader0: $LevelReader$$Type, blockPos1: $BlockPos$$Type, entity2: $Entity$$Type): float
public "getLightEmission"(blockGetter0: $BlockGetter$$Type, blockPos1: $BlockPos$$Type): integer
public "getRespawnPosition"(entityType0: $EntityType$$Type<any>, levelReader1: $LevelReader$$Type, blockPos2: $BlockPos$$Type, float3: float, livingEntity4: $LivingEntity$$Type): $Optional<$Vec3>
public "getSoundType"(levelReader0: $LevelReader$$Type, blockPos1: $BlockPos$$Type, entity2: $Entity$$Type): $SoundType
public "getStateAtViewpoint"(blockGetter0: $BlockGetter$$Type, blockPos1: $BlockPos$$Type, vec32: $Vec3$$Type): $BlockState
public "getToolModifiedState"(useOnContext0: $UseOnContext$$Type, toolAction1: $ToolAction$$Type, boolean2: boolean): $BlockState
public "getWeakChanges"(levelReader0: $LevelReader$$Type, blockPos1: $BlockPos$$Type): boolean
public "hidesNeighborFace"(blockGetter0: $BlockGetter$$Type, blockPos1: $BlockPos$$Type, blockState2: $BlockState$$Type, direction3: $Direction$$Type): boolean
public "isBed"(blockGetter0: $BlockGetter$$Type, blockPos1: $BlockPos$$Type, livingEntity2: $LivingEntity$$Type): boolean
public "isBurning"(blockGetter0: $BlockGetter$$Type, blockPos1: $BlockPos$$Type): boolean
public "isConduitFrame"(levelReader0: $LevelReader$$Type, blockPos1: $BlockPos$$Type, blockPos2: $BlockPos$$Type): boolean
public "isFertile"(blockGetter0: $BlockGetter$$Type, blockPos1: $BlockPos$$Type): boolean
public "isFireSource"(levelReader0: $LevelReader$$Type, blockPos1: $BlockPos$$Type, direction2: $Direction$$Type): boolean
public "isFlammable"(blockGetter0: $BlockGetter$$Type, blockPos1: $BlockPos$$Type, direction2: $Direction$$Type): boolean
public "isLadder"(levelReader0: $LevelReader$$Type, blockPos1: $BlockPos$$Type, livingEntity2: $LivingEntity$$Type): boolean
public "isPortalFrame"(blockGetter0: $BlockGetter$$Type, blockPos1: $BlockPos$$Type): boolean
public "isScaffolding"(livingEntity0: $LivingEntity$$Type): boolean
public "isSlimeBlock"(): boolean
public "isStickyBlock"(): boolean
public "isValidSpawn"(levelReader0: $LevelReader$$Type, blockPos1: $BlockPos$$Type, type2: $SpawnPlacements$Type$$Type, entityType3: $EntityType$$Type<any>): boolean
public "onBlockExploded"(level0: $Level$$Type, blockPos1: $BlockPos$$Type, explosion2: $Explosion$$Type): void
public "onBlockStateChange"(levelReader0: $LevelReader$$Type, blockPos1: $BlockPos$$Type, blockState2: $BlockState$$Type): void
public "onCaughtFire"(level0: $Level$$Type, blockPos1: $BlockPos$$Type, direction2: $Direction$$Type, livingEntity3: $LivingEntity$$Type): void
public "onDestroyedByPlayer"(level0: $Level$$Type, blockPos1: $BlockPos$$Type, player2: $Player$$Type, boolean3: boolean, fluidState4: $FluidState$$Type): boolean
public "onNeighborChange"(levelReader0: $LevelReader$$Type, blockPos1: $BlockPos$$Type, blockPos2: $BlockPos$$Type): void
public "onTreeGrow"(levelReader0: $LevelReader$$Type, biConsumer1: $BiConsumer$$Type<$BlockPos$$Type, $BlockState$$Type>, randomSource2: $RandomSource$$Type, blockPos3: $BlockPos$$Type, treeConfiguration4: $TreeConfiguration$$Type): boolean
public "rotate"(levelAccessor0: $LevelAccessor$$Type, blockPos1: $BlockPos$$Type, rotation2: $Rotation$$Type): $BlockState
public "setBedOccupied"(level0: $Level$$Type, blockPos1: $BlockPos$$Type, livingEntity2: $LivingEntity$$Type, boolean3: boolean): void
public "shouldCheckWeakPower"(signalGetter0: $SignalGetter$$Type, blockPos1: $BlockPos$$Type, direction2: $Direction$$Type): boolean
public "shouldDisplayFluidOverlay"(blockAndTintGetter0: $BlockAndTintGetter$$Type, blockPos1: $BlockPos$$Type, fluidState2: $FluidState$$Type): boolean
public "supportsExternalFaceHiding"(): boolean
get "fTBCIsWater"(): boolean
get "slimeBlock"(): boolean
get "stickyBlock"(): boolean
}
}

declare module "net.minecraft.world.level.block.state.StateHolder" {
import { $StateHolderAccessor } from "com.simibubi.create.foundation.mixin.accessor.StateHolderAccessor"
import { $FastMapStateHolder } from "malte0811.ferritecore.ducks.FastMapStateHolder"
import { $ImmutableMap, $ImmutableMap$$Type } from "com.google.common.collect.ImmutableMap"
import { $Collection } from "java.util.Collection"
import { $Map$$Type } from "java.util.Map"
import { $Optional } from "java.util.Optional"
import { $Comparable, $Comparable$$Type } from "java.lang.Comparable"
import { $Property, $Property$$Type } from "net.minecraft.world.level.block.state.properties.Property"
import { $FastMap, $FastMap$$Type } from "malte0811.ferritecore.fastmap.FastMap"
import { $Table, $Table$$Type } from "com.google.common.collect.Table"

export class $StateHolder<O = any, S = any> implements $FastMapStateHolder, $StateHolderAccessor {
static readonly "NAME_TAG": string
static readonly "PROPERTIES_TAG": string

public "cycle"<T extends $Comparable<T>>(property0: $Property$$Type<T>): S
public "getNeighborTable"(): $Table
public "getOptionalValue"<T extends $Comparable<T>>(property0: $Property$$Type<T>): $Optional<T>
public "getProperties"(): $Collection<$Property<any>>
public "getStateIndex"(): integer
public "getStateMap"(): $FastMap
public "getValue"<T extends $Comparable<T>>(property0: $Property$$Type<T>): T
public "getValues"(): $ImmutableMap<$Property<any>, $Comparable<any>>
public "getVanillaPropertyMap"(): $ImmutableMap
public "hasProperty"<T extends $Comparable<T>>(property0: $Property$$Type<T>): boolean
public "populateNeighbours"(map0: $Map$$Type): void
public "redirect$hpm000$getNeighborFromFastMap"(table0: $Table$$Type, object1: any, object2: any): any
public "replacePropertyMap"(immutableMap0: $ImmutableMap$$Type): void
public "setNeighborTable"(table0: $Table$$Type): void
public "setStateIndex"(int0: integer): void
public "setStateMap"(fastMap0: $FastMap$$Type): void
public "setValue"<T extends $Comparable<T>, V extends T>(property0: $Property$$Type<T>, v1: V): S
public "trySetValue"<T extends $Comparable<T>, V extends T>(property0: $Property$$Type<T>, v1: V): S
get "owner"(): O
set "owner"(value: O)
get "neighborTable"(): $Table
get "properties"(): $Collection<$Property<any>>
get "stateIndex"(): integer
get "stateMap"(): $FastMap
get "values"(): $ImmutableMap<$Property<any>, $Comparable<any>>
get "vanillaPropertyMap"(): $ImmutableMap
set "neighborTable"(value: $Table$$Type)
set "stateIndex"(value: integer)
set "stateMap"(value: $FastMap$$Type)
}
}

