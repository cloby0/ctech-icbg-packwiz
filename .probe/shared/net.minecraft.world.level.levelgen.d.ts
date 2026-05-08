declare module "net.minecraft.world.level.levelgen.GeodeLayerSettings" {
import { $Codec } from "com.mojang.serialization.Codec"

export class $GeodeLayerSettings {
static readonly "CODEC": $Codec<$GeodeLayerSettings>
readonly "filling": double
readonly "innerLayer": double
readonly "middleLayer": double
readonly "outerLayer": double

constructor(double0: double, double1: double, double2: double, double3: double)

}
}

declare module "net.minecraft.world.level.levelgen.WorldDimensions$Complete" {
import { $Registry, $Registry$$Type } from "net.minecraft.core.Registry"
import { $RegistryAccess$Frozen } from "net.minecraft.core.RegistryAccess$Frozen"
import { $LevelStem, $LevelStem$$Type } from "net.minecraft.world.level.dimension.LevelStem"
import { $Record } from "java.lang.Record"
import { $Lifecycle } from "com.mojang.serialization.Lifecycle"
import { $PrimaryLevelData$SpecialWorldProperty, $PrimaryLevelData$SpecialWorldProperty$$Type } from "net.minecraft.world.level.storage.PrimaryLevelData$SpecialWorldProperty"

export class $WorldDimensions$Complete extends $Record {
constructor(registry0: $Registry$$Type<$LevelStem$$Type>, specialWorldProperty1: $PrimaryLevelData$SpecialWorldProperty$$Type)

public "dimensions"(): $Registry<$LevelStem>
public "dimensionsRegistryAccess"(): $RegistryAccess$Frozen
public "lifecycle"(): $Lifecycle
public "specialWorldProperty"(): $PrimaryLevelData$SpecialWorldProperty
}
}

declare module "net.minecraft.world.level.levelgen.RandomState" {
import { $NormalNoise } from "net.minecraft.world.level.levelgen.synth.NormalNoise"
import { $ResourceLocation$$Type } from "net.minecraft.resources.ResourceLocation"
import { $NoiseRouter } from "net.minecraft.world.level.levelgen.NoiseRouter"
import { $SurfaceSystem } from "net.minecraft.world.level.levelgen.SurfaceSystem"
import { $PositionalRandomFactory } from "net.minecraft.world.level.levelgen.PositionalRandomFactory"
import { $Climate$Sampler } from "net.minecraft.world.level.biome.Climate$Sampler"
import { $NoiseGeneratorSettings, $NoiseGeneratorSettings$$Type } from "net.minecraft.world.level.levelgen.NoiseGeneratorSettings"
import { $NormalNoise$NoiseParameters, $NormalNoise$NoiseParameters$$Type } from "net.minecraft.world.level.levelgen.synth.NormalNoise$NoiseParameters"
import { $HolderGetter$$Type } from "net.minecraft.core.HolderGetter"
import { $HolderGetter$Provider$$Type } from "net.minecraft.core.HolderGetter$Provider"
import { $ResourceKey$$Type } from "net.minecraft.resources.ResourceKey"

export class $RandomState {
public "aquiferRandom"(): $PositionalRandomFactory
public static "create"(provider0: $HolderGetter$Provider$$Type, resourceKey1: $ResourceKey$$Type<$NoiseGeneratorSettings>, long2: long): $RandomState
public static "create"(noiseGeneratorSettings0: $NoiseGeneratorSettings$$Type, holderGetter1: $HolderGetter$$Type<$NormalNoise$NoiseParameters$$Type>, long2: long): $RandomState
public "getOrCreateNoise"(resourceKey0: $ResourceKey$$Type<$NormalNoise$NoiseParameters>): $NormalNoise
public "getOrCreateRandomFactory"(resourceLocation0: $ResourceLocation$$Type): $PositionalRandomFactory
public "oreRandom"(): $PositionalRandomFactory
public "router"(): $NoiseRouter
public "sampler"(): $Climate$Sampler
public "surfaceSystem"(): $SurfaceSystem
}
}

declare module "net.minecraft.world.level.levelgen.DensityFunctions$RangeChoice" {
import { $DensityFunction$ContextProvider$$Type } from "net.minecraft.world.level.levelgen.DensityFunction$ContextProvider"
import { $KeyDispatchDataCodec } from "net.minecraft.util.KeyDispatchDataCodec"
import { $DensityFunction } from "net.minecraft.world.level.levelgen.DensityFunction"
import { $MapCodec } from "com.mojang.serialization.MapCodec"
import { $DensityFunction$FunctionContext$$Type } from "net.minecraft.world.level.levelgen.DensityFunction$FunctionContext"
import { $Record } from "java.lang.Record"
import { $DensityFunction$Visitor$$Type } from "net.minecraft.world.level.levelgen.DensityFunction$Visitor"

export class $DensityFunctions$RangeChoice extends $Record implements $DensityFunction {
static readonly "CODEC": $KeyDispatchDataCodec<$DensityFunctions$RangeChoice>
static readonly "DATA_CODEC": $MapCodec<$DensityFunctions$RangeChoice>

public "abs"(): $DensityFunction
public "clamp"(double0: double, double1: double): $DensityFunction
public "codec"(): $KeyDispatchDataCodec<$DensityFunction>
public "compute"(functionContext0: $DensityFunction$FunctionContext$$Type): double
public "cube"(): $DensityFunction
public "fillArray"(double0s: double[], contextProvider1: $DensityFunction$ContextProvider$$Type): void
public "halfNegative"(): $DensityFunction
public "input"(): $DensityFunction
public "mapAll"(visitor0: $DensityFunction$Visitor$$Type): $DensityFunction
public "maxExclusive"(): double
public "maxValue"(): double
public "minInclusive"(): double
public "minValue"(): double
public "quarterNegative"(): $DensityFunction
public "square"(): $DensityFunction
public "squeeze"(): $DensityFunction
public "whenInRange"(): $DensityFunction
public "whenOutOfRange"(): $DensityFunction
}
}

declare module "net.minecraft.world.level.levelgen.DensityFunction$Visitor" {
import { $DensityFunction, $DensityFunction$$Type } from "net.minecraft.world.level.levelgen.DensityFunction"
import { $DensityFunction$NoiseHolder, $DensityFunction$NoiseHolder$$Type } from "net.minecraft.world.level.levelgen.DensityFunction$NoiseHolder"

export interface $DensityFunction$Visitor {
"apply"(densityFunction0: $DensityFunction$$Type): $DensityFunction
"visitNoise"(noiseHolder0: $DensityFunction$NoiseHolder$$Type): $DensityFunction$NoiseHolder
}

export namespace $DensityFunction$Visitor {
const probejs$$marker: never
}
export abstract class $DensityFunction$Visitor$$Static implements $DensityFunction$Visitor {
}
}

declare module "net.minecraft.world.level.levelgen.NoiseChunk" {
import { $DensityFunction$ContextProvider } from "net.minecraft.world.level.levelgen.DensityFunction$ContextProvider"
import { $IExtendedNoiseChunk } from "io.redspace.ironsspellbooks.worldgen.IExtendedNoiseChunk"
import { $DensityFunction$FunctionContext } from "net.minecraft.world.level.levelgen.DensityFunction$FunctionContext"
import { $IExtendedNoiseChunk$AquifierNuke, $IExtendedNoiseChunk$AquifierNuke$$Type } from "io.redspace.ironsspellbooks.worldgen.IExtendedNoiseChunk$AquifierNuke"
import { $DensityFunctions$BeardifierOrMarker$$Type } from "net.minecraft.world.level.levelgen.DensityFunctions$BeardifierOrMarker"
import { $ChunkAccess$$Type } from "net.minecraft.world.level.chunk.ChunkAccess"
import { $Blender, $Blender$$Type } from "net.minecraft.world.level.levelgen.blending.Blender"
import { $RandomState$$Type } from "net.minecraft.world.level.levelgen.RandomState"
import { $DensityFunction$$Type } from "net.minecraft.world.level.levelgen.DensityFunction"
import { $NoiseSettings$$Type } from "net.minecraft.world.level.levelgen.NoiseSettings"
import { $NoiseGeneratorSettings$$Type } from "net.minecraft.world.level.levelgen.NoiseGeneratorSettings"
import { $Aquifer } from "net.minecraft.world.level.levelgen.Aquifer"
import { $Aquifer$FluidPicker$$Type } from "net.minecraft.world.level.levelgen.Aquifer$FluidPicker"

export class $NoiseChunk implements $DensityFunction$ContextProvider, $DensityFunction$FunctionContext, $IExtendedNoiseChunk {
constructor(int0: integer, randomState1: $RandomState$$Type, int2: integer, int3: integer, noiseSettings4: $NoiseSettings$$Type, beardifierOrMarker5: $DensityFunctions$BeardifierOrMarker$$Type, noiseGeneratorSettings6: $NoiseGeneratorSettings$$Type, fluidPicker7: $Aquifer$FluidPicker$$Type, blender8: $Blender$$Type)

public "advanceCellX"(int0: integer): void
public "aquifer"(): $Aquifer
public "blockX"(): integer
public "blockY"(): integer
public "blockZ"(): integer
public "fillAllDirectly"(double0s: double[], densityFunction1: $DensityFunction$$Type): void
public static "forChunk"(chunkAccess0: $ChunkAccess$$Type, randomState1: $RandomState$$Type, beardifierOrMarker2: $DensityFunctions$BeardifierOrMarker$$Type, noiseGeneratorSettings3: $NoiseGeneratorSettings$$Type, fluidPicker4: $Aquifer$FluidPicker$$Type, blender5: $Blender$$Type): $NoiseChunk
public "getBlender"(): $Blender
public "initializeForFirstCellX"(): void
public "irons_spellbooks$getAquifierStatus"(): $IExtendedNoiseChunk$AquifierNuke
public "irons_spellbooks$setAquifierStatus"(aquifierNuke0: $IExtendedNoiseChunk$AquifierNuke$$Type): void
public "preliminarySurfaceLevel"(int0: integer, int1: integer): integer
public "selectCellYZ"(int0: integer, int1: integer): void
public "stopInterpolation"(): void
public "swapSlices"(): void
public "updateForX"(int0: integer, double1: double): void
public "updateForY"(int0: integer, double1: double): void
public "updateForZ"(int0: integer, double1: double): void
get "blender"(): $Blender
}
}

declare module "net.minecraft.world.level.levelgen.WorldgenRandom$Algorithm" {
import { $Enum } from "java.lang.Enum"
import { $RandomSource } from "net.minecraft.util.RandomSource"

export class $WorldgenRandom$Algorithm extends $Enum<$WorldgenRandom$Algorithm> {
static readonly "LEGACY": $WorldgenRandom$Algorithm
static readonly "XOROSHIRO": $WorldgenRandom$Algorithm

public "newInstance"(long0: long): $RandomSource
public static "valueOf"(string0: string): $WorldgenRandom$Algorithm
public static "values"(): $WorldgenRandom$Algorithm[]
}
}

declare module "net.minecraft.world.level.levelgen.DensityFunction$SimpleFunction" {
import { $DensityFunction$ContextProvider$$Type } from "net.minecraft.world.level.levelgen.DensityFunction$ContextProvider"
import { $KeyDispatchDataCodec } from "net.minecraft.util.KeyDispatchDataCodec"
import { $DensityFunction } from "net.minecraft.world.level.levelgen.DensityFunction"
import { $DensityFunction$FunctionContext$$Type } from "net.minecraft.world.level.levelgen.DensityFunction$FunctionContext"
import { $DensityFunction$Visitor$$Type } from "net.minecraft.world.level.levelgen.DensityFunction$Visitor"

export interface $DensityFunction$SimpleFunction extends $DensityFunction {
"abs"(): $DensityFunction
"clamp"(double0: double, double1: double): $DensityFunction
"codec"(): $KeyDispatchDataCodec<$DensityFunction>
"compute"(functionContext0: $DensityFunction$FunctionContext$$Type): double
"cube"(): $DensityFunction
"fillArray"(double0s: double[], contextProvider1: $DensityFunction$ContextProvider$$Type): void
"halfNegative"(): $DensityFunction
"mapAll"(visitor0: $DensityFunction$Visitor$$Type): $DensityFunction
"maxValue"(): double
"minValue"(): double
"quarterNegative"(): $DensityFunction
"square"(): $DensityFunction
"squeeze"(): $DensityFunction
}

export namespace $DensityFunction$SimpleFunction {
const probejs$$marker: never
}
export abstract class $DensityFunction$SimpleFunction$$Static implements $DensityFunction$SimpleFunction {
}
}

declare module "net.minecraft.world.level.levelgen.Aquifer$FluidPicker" {
import { $Aquifer$FluidStatus } from "net.minecraft.world.level.levelgen.Aquifer$FluidStatus"

export interface $Aquifer$FluidPicker {
"computeFluid"(int0: integer, int1: integer, int2: integer): $Aquifer$FluidStatus
}

export namespace $Aquifer$FluidPicker {
const probejs$$marker: never
}
export abstract class $Aquifer$FluidPicker$$Static implements $Aquifer$FluidPicker {
}
}

declare module "net.minecraft.world.level.levelgen.BelowZeroRetrogen" {
import { $LevelHeightAccessor } from "net.minecraft.world.level.LevelHeightAccessor"
import { $Codec } from "com.mojang.serialization.Codec"
import { $CompoundTag$$Type } from "net.minecraft.nbt.CompoundTag"
import { $BiomeResolver, $BiomeResolver$$Type } from "net.minecraft.world.level.biome.BiomeResolver"
import { $ProtoChunk$$Type } from "net.minecraft.world.level.chunk.ProtoChunk"
import { $ChunkStatus } from "net.minecraft.world.level.chunk.ChunkStatus"
import { $ChunkAccess$$Type } from "net.minecraft.world.level.chunk.ChunkAccess"

export class $BelowZeroRetrogen {
static readonly "CODEC": $Codec<$BelowZeroRetrogen>
static readonly "UPGRADE_HEIGHT_ACCESSOR": $LevelHeightAccessor

public "applyBedrockMask"(protoChunk0: $ProtoChunk$$Type): void
public static "getBiomeResolver"(biomeResolver0: $BiomeResolver$$Type, chunkAccess1: $ChunkAccess$$Type): $BiomeResolver
public "hasBedrockHole"(int0: integer, int1: integer): boolean
public "hasBedrockHoles"(): boolean
public static "read"(compoundTag0: $CompoundTag$$Type): $BelowZeroRetrogen
public static "replaceOldBedrock"(protoChunk0: $ProtoChunk$$Type): void
public "targetStatus"(): $ChunkStatus
}
}

declare module "net.minecraft.world.level.levelgen.PositionalRandomFactory" {
import { $ResourceLocation$$Type } from "net.minecraft.resources.ResourceLocation"
import { $BlockPos$$Type } from "net.minecraft.core.BlockPos"
import { $RandomSource } from "net.minecraft.util.RandomSource"
import { $StringBuilder$$Type } from "java.lang.StringBuilder"

export interface $PositionalRandomFactory {
"at"(blockPos0: $BlockPos$$Type): $RandomSource
"at"(int0: integer, int1: integer, int2: integer): $RandomSource
"fromHashOf"(resourceLocation0: $ResourceLocation$$Type): $RandomSource
"fromHashOf"(string0: string): $RandomSource
"parityConfigString"(stringBuilder0: $StringBuilder$$Type): void
}

export namespace $PositionalRandomFactory {
const probejs$$marker: never
}
export abstract class $PositionalRandomFactory$$Static implements $PositionalRandomFactory {
}
}

declare module "net.minecraft.world.level.levelgen.DensityFunctions$Constant" {
import { $DensityFunction$ContextProvider$$Type } from "net.minecraft.world.level.levelgen.DensityFunction$ContextProvider"
import { $KeyDispatchDataCodec } from "net.minecraft.util.KeyDispatchDataCodec"
import { $DensityFunction$SimpleFunction } from "net.minecraft.world.level.levelgen.DensityFunction$SimpleFunction"
import { $DensityFunction } from "net.minecraft.world.level.levelgen.DensityFunction"
import { $DensityFunction$FunctionContext$$Type } from "net.minecraft.world.level.levelgen.DensityFunction$FunctionContext"
import { $Record } from "java.lang.Record"
import { $DensityFunction$Visitor$$Type } from "net.minecraft.world.level.levelgen.DensityFunction$Visitor"

export class $DensityFunctions$Constant extends $Record implements $DensityFunction$SimpleFunction {
public "abs"(): $DensityFunction
public "clamp"(double0: double, double1: double): $DensityFunction
public "codec"(): $KeyDispatchDataCodec<$DensityFunction>
public "compute"(functionContext0: $DensityFunction$FunctionContext$$Type): double
public "cube"(): $DensityFunction
public "fillArray"(double0s: double[], contextProvider1: $DensityFunction$ContextProvider$$Type): void
public "halfNegative"(): $DensityFunction
public "mapAll"(visitor0: $DensityFunction$Visitor$$Type): $DensityFunction
public "maxValue"(): double
public "minValue"(): double
public "quarterNegative"(): $DensityFunction
public "square"(): $DensityFunction
public "squeeze"(): $DensityFunction
public "value"(): double
}
}

declare module "net.minecraft.world.level.levelgen.WorldGenSettings" {
import { $WorldOptions, $WorldOptions$$Type } from "net.minecraft.world.level.levelgen.WorldOptions"
import { $Codec } from "com.mojang.serialization.Codec"
import { $DynamicOps$$Type } from "com.mojang.serialization.DynamicOps"
import { $Record } from "java.lang.Record"
import { $DataResult } from "com.mojang.serialization.DataResult"
import { $RegistryAccess$$Type } from "net.minecraft.core.RegistryAccess"
import { $WorldDimensions, $WorldDimensions$$Type } from "net.minecraft.world.level.levelgen.WorldDimensions"

export class $WorldGenSettings extends $Record {
static readonly "CODEC": $Codec<$WorldGenSettings>

constructor(worldOptions0: $WorldOptions$$Type, worldDimensions1: $WorldDimensions$$Type)

public "dimensions"(): $WorldDimensions
public static "encode"<T>(dynamicOps0: $DynamicOps$$Type<T>, worldOptions1: $WorldOptions$$Type, worldDimensions2: $WorldDimensions$$Type): $DataResult<T>
public static "encode"<T>(dynamicOps0: $DynamicOps$$Type<T>, worldOptions1: $WorldOptions$$Type, registryAccess2: $RegistryAccess$$Type): $DataResult<T>
public "options"(): $WorldOptions
}
}

declare module "net.minecraft.world.level.levelgen.GeodeBlockSettings" {
import { $TagKey, $TagKey$$Type } from "net.minecraft.tags.TagKey"
import { $BlockStateProvider, $BlockStateProvider$$Type } from "net.minecraft.world.level.levelgen.feature.stateproviders.BlockStateProvider"
import { $List, $List$$Type } from "java.util.List"
import { $Codec } from "com.mojang.serialization.Codec"
import { $BlockState, $BlockState$$Type } from "net.minecraft.world.level.block.state.BlockState"
import { $Block, $Block$$Type } from "net.minecraft.world.level.block.Block"

export class $GeodeBlockSettings {
static readonly "CODEC": $Codec<$GeodeBlockSettings>
readonly "alternateInnerLayerProvider": $BlockStateProvider
readonly "cannotReplace": $TagKey<$Block>
readonly "fillingProvider": $BlockStateProvider
readonly "innerLayerProvider": $BlockStateProvider
readonly "innerPlacements": $List<$BlockState>
readonly "invalidBlocks": $TagKey<$Block>
readonly "middleLayerProvider": $BlockStateProvider
readonly "outerLayerProvider": $BlockStateProvider

constructor(blockStateProvider0: $BlockStateProvider$$Type, blockStateProvider1: $BlockStateProvider$$Type, blockStateProvider2: $BlockStateProvider$$Type, blockStateProvider3: $BlockStateProvider$$Type, blockStateProvider4: $BlockStateProvider$$Type, list5: $List$$Type<$BlockState$$Type>, tagKey6: $TagKey$$Type<$Block$$Type>, tagKey7: $TagKey$$Type<$Block$$Type>)

}
}

declare module "net.minecraft.world.level.levelgen.SurfaceRules$RuleSource" {
import { $Registry$$Type } from "net.minecraft.core.Registry"
import { $Codec, $Codec$$Type } from "com.mojang.serialization.Codec"
import { $KeyDispatchDataCodec } from "net.minecraft.util.KeyDispatchDataCodec"
import { $SurfaceRules$Context, $SurfaceRules$Context$$Type } from "net.minecraft.world.level.levelgen.SurfaceRules$Context"
import { $Function, $Function$$Type } from "java.util.function.Function"
import { $SurfaceRules$SurfaceRule, $SurfaceRules$SurfaceRule$$Type } from "net.minecraft.world.level.levelgen.SurfaceRules$SurfaceRule"

export interface $SurfaceRules$RuleSource extends $Function<$SurfaceRules$Context, $SurfaceRules$SurfaceRule> {
"andThen"<V>(function0: $Function$$Type<$SurfaceRules$SurfaceRule$$Type, V>): $Function<$SurfaceRules$Context, V>
"apply"(context0: $SurfaceRules$Context$$Type): $SurfaceRules$SurfaceRule
"codec"(): $KeyDispatchDataCodec<$SurfaceRules$RuleSource>
"compose"<V>(function0: $Function$$Type<V, $SurfaceRules$Context>): $Function<V, $SurfaceRules$SurfaceRule>
}

export namespace $SurfaceRules$RuleSource {
const CODEC: $Codec<$SurfaceRules$RuleSource>
function bootstrap(registry0: $Registry$$Type<$Codec$$Type<$SurfaceRules$RuleSource$$Type>>): $Codec<$SurfaceRules$RuleSource>
function identity<T>(): $Function<T, T>
}
export abstract class $SurfaceRules$RuleSource$$Static implements $SurfaceRules$RuleSource {
static readonly "CODEC": $Codec<$SurfaceRules$RuleSource>

static "bootstrap"(registry0: $Registry$$Type<$Codec$$Type<$SurfaceRules$RuleSource$$Type>>): $Codec<$SurfaceRules$RuleSource>
static "identity"<T>(): $Function<T, T>
}
}

declare module "net.minecraft.world.level.levelgen.GenerationStep$Carving" {
import { $Codec } from "com.mojang.serialization.Codec"
import { $Enum, $Enum$$Type } from "java.lang.Enum"
import { $StringRepresentable, $StringRepresentable$$Type } from "net.minecraft.util.StringRepresentable"
import { $StringRepresentable$EnumCodec } from "net.minecraft.util.StringRepresentable$EnumCodec"
import { $Keyable } from "com.mojang.serialization.Keyable"
import { $Supplier$$Type } from "java.util.function.Supplier"
import { $Function$$Type } from "java.util.function.Function"

export class $GenerationStep$Carving extends $Enum<$GenerationStep$Carving> implements $StringRepresentable {
static readonly "AIR": $GenerationStep$Carving
static readonly "CODEC": $Codec<$GenerationStep$Carving>
static readonly "LIQUID": $GenerationStep$Carving

public static "fromEnum"<E extends ($Enum<E> & $StringRepresentable)>(supplier0: $Supplier$$Type<E[]>): $StringRepresentable$EnumCodec<E>
public static "fromEnumWithMapping"<E extends ($Enum<E> & $StringRepresentable)>(supplier0: $Supplier$$Type<E[]>, function1: $Function$$Type<string, string>): $StringRepresentable$EnumCodec<E>
public "getName"(): string
public "getSerializedName"(): string
public static "keys"(stringRepresentable0s: $StringRepresentable$$Type[]): $Keyable
public static "valueOf"(string0: string): $GenerationStep$Carving
public static "values"(): $GenerationStep$Carving[]
get "name"(): string
get "serializedName"(): string
}
}

declare module "net.minecraft.world.level.levelgen.DensityFunctions$MarkerOrMarked" {
import { $DensityFunction$ContextProvider$$Type } from "net.minecraft.world.level.levelgen.DensityFunction$ContextProvider"
import { $DensityFunctions$Marker$Type } from "net.minecraft.world.level.levelgen.DensityFunctions$Marker$Type"
import { $KeyDispatchDataCodec } from "net.minecraft.util.KeyDispatchDataCodec"
import { $DensityFunction } from "net.minecraft.world.level.levelgen.DensityFunction"
import { $DensityFunction$FunctionContext$$Type } from "net.minecraft.world.level.levelgen.DensityFunction$FunctionContext"
import { $DensityFunction$Visitor$$Type } from "net.minecraft.world.level.levelgen.DensityFunction$Visitor"

export interface $DensityFunctions$MarkerOrMarked extends $DensityFunction {
"abs"(): $DensityFunction
"clamp"(double0: double, double1: double): $DensityFunction
"codec"(): $KeyDispatchDataCodec<$DensityFunction>
"compute"(functionContext0: $DensityFunction$FunctionContext$$Type): double
"cube"(): $DensityFunction
"fillArray"(double0s: double[], contextProvider1: $DensityFunction$ContextProvider$$Type): void
"halfNegative"(): $DensityFunction
"mapAll"(visitor0: $DensityFunction$Visitor$$Type): $DensityFunction
"maxValue"(): double
"minValue"(): double
"quarterNegative"(): $DensityFunction
"square"(): $DensityFunction
"squeeze"(): $DensityFunction
"type"(): $DensityFunctions$Marker$Type
"wrapped"(): $DensityFunction
}

export namespace $DensityFunctions$MarkerOrMarked {
const probejs$$marker: never
}
export abstract class $DensityFunctions$MarkerOrMarked$$Static implements $DensityFunctions$MarkerOrMarked {
}
}

declare module "net.minecraft.world.level.levelgen.DensityFunctions$Marker$Type" {
import { $Enum, $Enum$$Type } from "java.lang.Enum"
import { $StringRepresentable, $StringRepresentable$$Type } from "net.minecraft.util.StringRepresentable"
import { $StringRepresentable$EnumCodec } from "net.minecraft.util.StringRepresentable$EnumCodec"
import { $Keyable } from "com.mojang.serialization.Keyable"
import { $Supplier$$Type } from "java.util.function.Supplier"
import { $Function$$Type } from "java.util.function.Function"

export class $DensityFunctions$Marker$Type extends $Enum<$DensityFunctions$Marker$Type> implements $StringRepresentable {
static readonly "Cache2D": $DensityFunctions$Marker$Type
static readonly "CacheAllInCell": $DensityFunctions$Marker$Type
static readonly "CacheOnce": $DensityFunctions$Marker$Type
static readonly "FlatCache": $DensityFunctions$Marker$Type
static readonly "Interpolated": $DensityFunctions$Marker$Type

public static "fromEnum"<E extends ($Enum<E> & $StringRepresentable)>(supplier0: $Supplier$$Type<E[]>): $StringRepresentable$EnumCodec<E>
public static "fromEnumWithMapping"<E extends ($Enum<E> & $StringRepresentable)>(supplier0: $Supplier$$Type<E[]>, function1: $Function$$Type<string, string>): $StringRepresentable$EnumCodec<E>
public "getSerializedName"(): string
public static "keys"(stringRepresentable0s: $StringRepresentable$$Type[]): $Keyable
public static "valueOf"(string0: string): $DensityFunctions$Marker$Type
public static "values"(): $DensityFunctions$Marker$Type[]
get "serializedName"(): string
}
}

declare module "net.minecraft.world.level.levelgen.WorldGenerationContext" {
import { $ChunkGenerator$$Type } from "net.minecraft.world.level.chunk.ChunkGenerator"
import { $LevelHeightAccessor$$Type } from "net.minecraft.world.level.LevelHeightAccessor"

export class $WorldGenerationContext {
constructor(chunkGenerator0: $ChunkGenerator$$Type, levelHeightAccessor1: $LevelHeightAccessor$$Type)

public "getGenDepth"(): integer
public "getMinGenY"(): integer
get "genDepth"(): integer
get "minGenY"(): integer
}
}

declare module "net.minecraft.world.level.levelgen.DensityFunctions$TwoArgumentSimpleFunction$Type" {
import { $Enum, $Enum$$Type } from "java.lang.Enum"
import { $StringRepresentable, $StringRepresentable$$Type } from "net.minecraft.util.StringRepresentable"
import { $StringRepresentable$EnumCodec } from "net.minecraft.util.StringRepresentable$EnumCodec"
import { $Keyable } from "com.mojang.serialization.Keyable"
import { $Supplier$$Type } from "java.util.function.Supplier"
import { $Function$$Type } from "java.util.function.Function"

export class $DensityFunctions$TwoArgumentSimpleFunction$Type extends $Enum<$DensityFunctions$TwoArgumentSimpleFunction$Type> implements $StringRepresentable {
static readonly "ADD": $DensityFunctions$TwoArgumentSimpleFunction$Type
static readonly "MAX": $DensityFunctions$TwoArgumentSimpleFunction$Type
static readonly "MIN": $DensityFunctions$TwoArgumentSimpleFunction$Type
static readonly "MUL": $DensityFunctions$TwoArgumentSimpleFunction$Type

public static "fromEnum"<E extends ($Enum<E> & $StringRepresentable)>(supplier0: $Supplier$$Type<E[]>): $StringRepresentable$EnumCodec<E>
public static "fromEnumWithMapping"<E extends ($Enum<E> & $StringRepresentable)>(supplier0: $Supplier$$Type<E[]>, function1: $Function$$Type<string, string>): $StringRepresentable$EnumCodec<E>
public "getSerializedName"(): string
public static "keys"(stringRepresentable0s: $StringRepresentable$$Type[]): $Keyable
public static "valueOf"(string0: string): $DensityFunctions$TwoArgumentSimpleFunction$Type
public static "values"(): $DensityFunctions$TwoArgumentSimpleFunction$Type[]
get "serializedName"(): string
}
}

declare module "net.minecraft.world.level.levelgen.Aquifer$FluidStatus" {
import { $BlockState, $BlockState$$Type } from "net.minecraft.world.level.block.state.BlockState"

export class $Aquifer$FluidStatus {
constructor(int0: integer, blockState1: $BlockState$$Type)

public "at"(int0: integer): $BlockState
}
}

declare module "net.minecraft.world.level.levelgen.DensityFunctions$Marker" {
import { $DensityFunctions$Marker$Type, $DensityFunctions$Marker$Type$$Type } from "net.minecraft.world.level.levelgen.DensityFunctions$Marker$Type"
import { $DensityFunction$ContextProvider$$Type } from "net.minecraft.world.level.levelgen.DensityFunction$ContextProvider"
import { $KeyDispatchDataCodec } from "net.minecraft.util.KeyDispatchDataCodec"
import { $DensityFunction, $DensityFunction$$Type } from "net.minecraft.world.level.levelgen.DensityFunction"
import { $DensityFunction$FunctionContext$$Type } from "net.minecraft.world.level.levelgen.DensityFunction$FunctionContext"
import { $Record } from "java.lang.Record"
import { $DensityFunctions$MarkerOrMarked } from "net.minecraft.world.level.levelgen.DensityFunctions$MarkerOrMarked"
import { $DensityFunction$Visitor$$Type } from "net.minecraft.world.level.levelgen.DensityFunction$Visitor"

export class $DensityFunctions$Marker extends $Record implements $DensityFunctions$MarkerOrMarked {
constructor(type0: $DensityFunctions$Marker$Type$$Type, densityFunction1: $DensityFunction$$Type)

public "abs"(): $DensityFunction
public "clamp"(double0: double, double1: double): $DensityFunction
public "codec"(): $KeyDispatchDataCodec<$DensityFunction>
public "compute"(functionContext0: $DensityFunction$FunctionContext$$Type): double
public "cube"(): $DensityFunction
public "fillArray"(double0s: double[], contextProvider1: $DensityFunction$ContextProvider$$Type): void
public "halfNegative"(): $DensityFunction
public "mapAll"(visitor0: $DensityFunction$Visitor$$Type): $DensityFunction
public "maxValue"(): double
public "minValue"(): double
public "quarterNegative"(): $DensityFunction
public "square"(): $DensityFunction
public "squeeze"(): $DensityFunction
public "type"(): $DensityFunctions$Marker$Type
public "wrapped"(): $DensityFunction
}
}

declare module "net.minecraft.world.level.levelgen.DensityFunctions$BeardifierOrMarker" {
import { $DensityFunction$ContextProvider$$Type } from "net.minecraft.world.level.levelgen.DensityFunction$ContextProvider"
import { $KeyDispatchDataCodec } from "net.minecraft.util.KeyDispatchDataCodec"
import { $DensityFunction$SimpleFunction } from "net.minecraft.world.level.levelgen.DensityFunction$SimpleFunction"
import { $DensityFunction } from "net.minecraft.world.level.levelgen.DensityFunction"
import { $DensityFunction$FunctionContext$$Type } from "net.minecraft.world.level.levelgen.DensityFunction$FunctionContext"
import { $DensityFunction$Visitor$$Type } from "net.minecraft.world.level.levelgen.DensityFunction$Visitor"

export interface $DensityFunctions$BeardifierOrMarker extends $DensityFunction$SimpleFunction {
"abs"(): $DensityFunction
"clamp"(double0: double, double1: double): $DensityFunction
"codec"(): $KeyDispatchDataCodec<$DensityFunction>
"compute"(functionContext0: $DensityFunction$FunctionContext$$Type): double
"cube"(): $DensityFunction
"fillArray"(double0s: double[], contextProvider1: $DensityFunction$ContextProvider$$Type): void
"halfNegative"(): $DensityFunction
"mapAll"(visitor0: $DensityFunction$Visitor$$Type): $DensityFunction
"maxValue"(): double
"minValue"(): double
"quarterNegative"(): $DensityFunction
"square"(): $DensityFunction
"squeeze"(): $DensityFunction
}

export namespace $DensityFunctions$BeardifierOrMarker {
const CODEC: $KeyDispatchDataCodec<$DensityFunction>
}
export abstract class $DensityFunctions$BeardifierOrMarker$$Static implements $DensityFunctions$BeardifierOrMarker {
static readonly "CODEC": $KeyDispatchDataCodec<$DensityFunction>

}
}

declare module "net.minecraft.world.level.levelgen.SurfaceRules$Condition" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $SurfaceRules$Condition {
"test"(): boolean
}

export namespace $SurfaceRules$Condition {
const probejs$$marker: never
}
export abstract class $SurfaceRules$Condition$$Static implements $SurfaceRules$Condition {
}
}

declare module "net.minecraft.world.level.levelgen.SurfaceRules$Context" {
import { $SurfaceSystem, $SurfaceSystem$$Type } from "net.minecraft.world.level.levelgen.SurfaceSystem"
import { $NoiseChunk, $NoiseChunk$$Type } from "net.minecraft.world.level.levelgen.NoiseChunk"
import { $Function, $Function$$Type } from "java.util.function.Function"
import { $Biome, $Biome$$Type } from "net.minecraft.world.level.biome.Biome"
import { $Supplier, $Supplier$$Type } from "java.util.function.Supplier"
import { $ChunkAccess, $ChunkAccess$$Type } from "net.minecraft.world.level.chunk.ChunkAccess"
import { $Registry$$Type } from "net.minecraft.core.Registry"
import { $Holder, $Holder$$Type } from "net.minecraft.core.Holder"
import { $BlockPos, $BlockPos$$Type } from "net.minecraft.core.BlockPos"
import { $RandomState, $RandomState$$Type } from "net.minecraft.world.level.levelgen.RandomState"
import { $WorldGenerationContext, $WorldGenerationContext$$Type } from "net.minecraft.world.level.levelgen.WorldGenerationContext"
import { $SurfaceRules$Condition } from "net.minecraft.world.level.levelgen.SurfaceRules$Condition"
import { $BlockPos$MutableBlockPos } from "net.minecraft.core.BlockPos$MutableBlockPos"

export class $SurfaceRules$Context {
static readonly "HOW_FAR_BELOW_PRELIMINARY_SURFACE_LEVEL_TO_BUILD_SURFACE": integer
static readonly "SURFACE_CELL_BITS": integer
static readonly "SURFACE_CELL_MASK": integer
static readonly "SURFACE_CELL_SIZE": integer
readonly "abovePreliminarySurface": $SurfaceRules$Condition
readonly "biomeGetter": $Function<$BlockPos, $Holder<$Biome>>
readonly "chunk": $ChunkAccess
readonly "context": $WorldGenerationContext
readonly "hole": $SurfaceRules$Condition
readonly "noiseChunk": $NoiseChunk
readonly "pos": $BlockPos$MutableBlockPos
readonly "preliminarySurfaceCache": integer[]
readonly "randomState": $RandomState
readonly "steep": $SurfaceRules$Condition
readonly "system": $SurfaceSystem
readonly "temperature": $SurfaceRules$Condition

constructor(surfaceSystem0: $SurfaceSystem$$Type, randomState1: $RandomState$$Type, chunkAccess2: $ChunkAccess$$Type, noiseChunk3: $NoiseChunk$$Type, function4: $Function$$Type<$BlockPos$$Type, $Holder<$Biome>>, registry5: $Registry$$Type<$Biome$$Type>, worldGenerationContext6: $WorldGenerationContext$$Type)

public static "blockCoordToSurfaceCell"(int0: integer): integer
public "getMinSurfaceLevel"(): integer
public "getSurfaceSecondary"(): double
public static "surfaceCellToBlockCoord"(int0: integer): integer
public "updateXZ"(int0: integer, int1: integer): void
public "updateY"(int0: integer, int1: integer, int2: integer, int3: integer, int4: integer, int5: integer): void
get "biome"(): $Supplier<$Holder<$Biome>>
set "biome"(value: $Supplier$$Type<$Holder$$Type<$Biome$$Type>>)
get "blockX"(): integer
set "blockX"(value: integer)
get "blockY"(): integer
set "blockY"(value: integer)
get "blockZ"(): integer
set "blockZ"(value: integer)
get "lastMinSurfaceLevelUpdate"(): long
set "lastMinSurfaceLevelUpdate"(value: long)
get "lastPreliminarySurfaceCellOrigin"(): long
set "lastPreliminarySurfaceCellOrigin"(value: long)
get "lastSurfaceDepth2Update"(): long
set "lastSurfaceDepth2Update"(value: long)
get "lastUpdateXZ"(): long
set "lastUpdateXZ"(value: long)
get "lastUpdateY"(): long
set "lastUpdateY"(value: long)
get "minSurfaceLevel"(): integer
set "minSurfaceLevel"(value: integer)
get "stoneDepthAbove"(): integer
set "stoneDepthAbove"(value: integer)
get "stoneDepthBelow"(): integer
set "stoneDepthBelow"(value: integer)
get "surfaceDepth"(): integer
set "surfaceDepth"(value: integer)
get "surfaceSecondary"(): double
set "surfaceSecondary"(value: double)
get "waterHeight"(): integer
set "waterHeight"(value: integer)
}
}

declare module "net.minecraft.world.level.levelgen.LegacyRandomSource" {
import { $PositionalRandomFactory } from "net.minecraft.world.level.levelgen.PositionalRandomFactory"
import { $BitRandomSource } from "net.minecraft.world.level.levelgen.BitRandomSource"
import { $RandomSource } from "net.minecraft.util.RandomSource"

export class $LegacyRandomSource implements $BitRandomSource {
constructor(long0: long)

public "consumeCount"(int0: integer): void
public static "create"(long0: long): $RandomSource
public static "create"(): $RandomSource
public static "createNewThreadLocalInstance"(): $RandomSource
/** @deprecated */
public static "createThreadSafe"(): $RandomSource
public "fork"(): $RandomSource
public "forkPositional"(): $PositionalRandomFactory
public "next"(int0: integer): integer
public "nextBoolean"(): boolean
public "nextDouble"(): double
public "nextFloat"(): float
public "nextGaussian"(): double
public "nextInt"(int0: integer): integer
public "nextInt"(): integer
public "nextInt"(int0: integer, int1: integer): integer
public "nextIntBetweenInclusive"(int0: integer, int1: integer): integer
public "nextLong"(): long
public "setSeed"(long0: long): void
public "triangle"(double0: double, double1: double): double
set "seed"(value: long)
}
}

declare module "net.minecraft.world.level.levelgen.DensityFunction$FunctionContext" {
import { $Blender } from "net.minecraft.world.level.levelgen.blending.Blender"

export interface $DensityFunction$FunctionContext {
"blockX"(): integer
"blockY"(): integer
"blockZ"(): integer
"getBlender"(): $Blender
get "blender"(): $Blender
}

export namespace $DensityFunction$FunctionContext {
const probejs$$marker: never
}
export abstract class $DensityFunction$FunctionContext$$Static implements $DensityFunction$FunctionContext {
}
}

declare module "net.minecraft.world.level.levelgen.DensityFunctions$Noise" {
import { $DensityFunction$ContextProvider$$Type } from "net.minecraft.world.level.levelgen.DensityFunction$ContextProvider"
import { $KeyDispatchDataCodec } from "net.minecraft.util.KeyDispatchDataCodec"
import { $DensityFunction } from "net.minecraft.world.level.levelgen.DensityFunction"
import { $MapCodec } from "com.mojang.serialization.MapCodec"
import { $DensityFunction$FunctionContext$$Type } from "net.minecraft.world.level.levelgen.DensityFunction$FunctionContext"
import { $Record } from "java.lang.Record"
import { $DensityFunction$NoiseHolder } from "net.minecraft.world.level.levelgen.DensityFunction$NoiseHolder"
import { $DensityFunction$Visitor$$Type } from "net.minecraft.world.level.levelgen.DensityFunction$Visitor"

export class $DensityFunctions$Noise extends $Record implements $DensityFunction {
static readonly "CODEC": $KeyDispatchDataCodec<$DensityFunctions$Noise>
static readonly "DATA_CODEC": $MapCodec<$DensityFunctions$Noise>

public "abs"(): $DensityFunction
public "clamp"(double0: double, double1: double): $DensityFunction
public "codec"(): $KeyDispatchDataCodec<$DensityFunction>
public "compute"(functionContext0: $DensityFunction$FunctionContext$$Type): double
public "cube"(): $DensityFunction
public "fillArray"(double0s: double[], contextProvider1: $DensityFunction$ContextProvider$$Type): void
public "halfNegative"(): $DensityFunction
public "mapAll"(visitor0: $DensityFunction$Visitor$$Type): $DensityFunction
public "maxValue"(): double
public "minValue"(): double
public "noise"(): $DensityFunction$NoiseHolder
public "quarterNegative"(): $DensityFunction
public "square"(): $DensityFunction
public "squeeze"(): $DensityFunction
/** @deprecated */
public "xzScale"(): double
public "yScale"(): double
}
}

declare module "net.minecraft.world.level.levelgen.SurfaceRules$SurfaceRule" {
import { $BlockState } from "net.minecraft.world.level.block.state.BlockState"

export interface $SurfaceRules$SurfaceRule {
"tryApply"(int0: integer, int1: integer, int2: integer): $BlockState
}

export namespace $SurfaceRules$SurfaceRule {
const probejs$$marker: never
}
export abstract class $SurfaceRules$SurfaceRule$$Static implements $SurfaceRules$SurfaceRule {
}
}

declare module "net.minecraft.world.level.levelgen.DensityFunctions$YClampedGradient" {
import { $DensityFunction$ContextProvider$$Type } from "net.minecraft.world.level.levelgen.DensityFunction$ContextProvider"
import { $KeyDispatchDataCodec } from "net.minecraft.util.KeyDispatchDataCodec"
import { $DensityFunction$SimpleFunction } from "net.minecraft.world.level.levelgen.DensityFunction$SimpleFunction"
import { $DensityFunction } from "net.minecraft.world.level.levelgen.DensityFunction"
import { $DensityFunction$FunctionContext$$Type } from "net.minecraft.world.level.levelgen.DensityFunction$FunctionContext"
import { $Record } from "java.lang.Record"
import { $DensityFunction$Visitor$$Type } from "net.minecraft.world.level.levelgen.DensityFunction$Visitor"

export class $DensityFunctions$YClampedGradient extends $Record implements $DensityFunction$SimpleFunction {
static readonly "CODEC": $KeyDispatchDataCodec<$DensityFunctions$YClampedGradient>

public "abs"(): $DensityFunction
public "clamp"(double0: double, double1: double): $DensityFunction
public "codec"(): $KeyDispatchDataCodec<$DensityFunction>
public "compute"(functionContext0: $DensityFunction$FunctionContext$$Type): double
public "cube"(): $DensityFunction
public "fillArray"(double0s: double[], contextProvider1: $DensityFunction$ContextProvider$$Type): void
public "fromValue"(): double
public "fromY"(): integer
public "halfNegative"(): $DensityFunction
public "mapAll"(visitor0: $DensityFunction$Visitor$$Type): $DensityFunction
public "maxValue"(): double
public "minValue"(): double
public "quarterNegative"(): $DensityFunction
public "square"(): $DensityFunction
public "squeeze"(): $DensityFunction
public "toValue"(): double
public "toY"(): integer
}
}

declare module "net.minecraft.world.level.levelgen.Heightmap$Types" {
import { $Codec } from "com.mojang.serialization.Codec"
import { $Enum, $Enum$$Type } from "java.lang.Enum"
import { $StringRepresentable, $StringRepresentable$$Type } from "net.minecraft.util.StringRepresentable"
import { $Predicate } from "java.util.function.Predicate"
import { $StringRepresentable$EnumCodec } from "net.minecraft.util.StringRepresentable$EnumCodec"
import { $BlockState } from "net.minecraft.world.level.block.state.BlockState"
import { $Keyable } from "com.mojang.serialization.Keyable"
import { $Supplier$$Type } from "java.util.function.Supplier"
import { $Function$$Type } from "java.util.function.Function"

export class $Heightmap$Types extends $Enum<$Heightmap$Types> implements $StringRepresentable {
static readonly "CODEC": $Codec<$Heightmap$Types>
static readonly "MOTION_BLOCKING": $Heightmap$Types
static readonly "MOTION_BLOCKING_NO_LEAVES": $Heightmap$Types
static readonly "OCEAN_FLOOR": $Heightmap$Types
static readonly "OCEAN_FLOOR_WG": $Heightmap$Types
static readonly "WORLD_SURFACE": $Heightmap$Types
static readonly "WORLD_SURFACE_WG": $Heightmap$Types

public static "fromEnum"<E extends ($Enum<E> & $StringRepresentable)>(supplier0: $Supplier$$Type<E[]>): $StringRepresentable$EnumCodec<E>
public static "fromEnumWithMapping"<E extends ($Enum<E> & $StringRepresentable)>(supplier0: $Supplier$$Type<E[]>, function1: $Function$$Type<string, string>): $StringRepresentable$EnumCodec<E>
public "getSerializationKey"(): string
public "getSerializedName"(): string
public "isOpaque"(): $Predicate<$BlockState>
public "keepAfterWorldgen"(): boolean
public static "keys"(stringRepresentable0s: $StringRepresentable$$Type[]): $Keyable
public "sendToClient"(): boolean
public static "valueOf"(string0: string): $Heightmap$Types
public static "values"(): $Heightmap$Types[]
get "serializationKey"(): string
get "serializedName"(): string
get "opaque"(): $Predicate<$BlockState>
}
}

declare module "net.minecraft.world.level.levelgen.DensityFunctions$PureTransformer" {
import { $DensityFunction$ContextProvider$$Type } from "net.minecraft.world.level.levelgen.DensityFunction$ContextProvider"
import { $KeyDispatchDataCodec } from "net.minecraft.util.KeyDispatchDataCodec"
import { $DensityFunction } from "net.minecraft.world.level.levelgen.DensityFunction"
import { $DensityFunction$FunctionContext$$Type } from "net.minecraft.world.level.levelgen.DensityFunction$FunctionContext"
import { $DensityFunction$Visitor$$Type } from "net.minecraft.world.level.levelgen.DensityFunction$Visitor"

export interface $DensityFunctions$PureTransformer extends $DensityFunction {
"abs"(): $DensityFunction
"clamp"(double0: double, double1: double): $DensityFunction
"codec"(): $KeyDispatchDataCodec<$DensityFunction>
"compute"(functionContext0: $DensityFunction$FunctionContext$$Type): double
"cube"(): $DensityFunction
"fillArray"(double0s: double[], contextProvider1: $DensityFunction$ContextProvider$$Type): void
"halfNegative"(): $DensityFunction
"input"(): $DensityFunction
"mapAll"(visitor0: $DensityFunction$Visitor$$Type): $DensityFunction
"maxValue"(): double
"minValue"(): double
"quarterNegative"(): $DensityFunction
"square"(): $DensityFunction
"squeeze"(): $DensityFunction
"transform"(double0: double): double
}

export namespace $DensityFunctions$PureTransformer {
const probejs$$marker: never
}
export abstract class $DensityFunctions$PureTransformer$$Static implements $DensityFunctions$PureTransformer {
}
}

declare module "net.minecraft.world.level.levelgen.NoiseSettings" {
import { $LevelHeightAccessor$$Type } from "net.minecraft.world.level.LevelHeightAccessor"
import { $Codec } from "com.mojang.serialization.Codec"
import { $Record } from "java.lang.Record"

export class $NoiseSettings extends $Record {
static readonly "CAVES_NOISE_SETTINGS": $NoiseSettings
static readonly "CODEC": $Codec<$NoiseSettings>
static readonly "END_NOISE_SETTINGS": $NoiseSettings
static readonly "FLOATING_ISLANDS_NOISE_SETTINGS": $NoiseSettings
static readonly "NETHER_NOISE_SETTINGS": $NoiseSettings
static readonly "OVERWORLD_NOISE_SETTINGS": $NoiseSettings

constructor(int0: integer, int1: integer, int2: integer, int3: integer)

public "clampToHeightAccessor"(levelHeightAccessor0: $LevelHeightAccessor$$Type): $NoiseSettings
public static "create"(int0: integer, int1: integer, int2: integer, int3: integer): $NoiseSettings
public "getCellHeight"(): integer
public "getCellWidth"(): integer
public "height"(): integer
public "minY"(): integer
public "noiseSizeHorizontal"(): integer
public "noiseSizeVertical"(): integer
get "cellHeight"(): integer
get "cellWidth"(): integer
}
}

declare module "net.minecraft.world.level.levelgen.Aquifer" {
import { $ChunkPos$$Type } from "net.minecraft.world.level.ChunkPos"
import { $NoiseRouter$$Type } from "net.minecraft.world.level.levelgen.NoiseRouter"
import { $PositionalRandomFactory$$Type } from "net.minecraft.world.level.levelgen.PositionalRandomFactory"
import { $NoiseChunk$$Type } from "net.minecraft.world.level.levelgen.NoiseChunk"
import { $DensityFunction$FunctionContext$$Type } from "net.minecraft.world.level.levelgen.DensityFunction$FunctionContext"
import { $BlockState } from "net.minecraft.world.level.block.state.BlockState"
import { $Aquifer$FluidPicker$$Type } from "net.minecraft.world.level.levelgen.Aquifer$FluidPicker"

export interface $Aquifer {
"computeSubstance"(functionContext0: $DensityFunction$FunctionContext$$Type, double1: double): $BlockState
"shouldScheduleFluidUpdate"(): boolean
}

export namespace $Aquifer {
function create(noiseChunk0: $NoiseChunk$$Type, chunkPos1: $ChunkPos$$Type, noiseRouter2: $NoiseRouter$$Type, positionalRandomFactory3: $PositionalRandomFactory$$Type, int4: integer, int5: integer, fluidPicker6: $Aquifer$FluidPicker$$Type): $Aquifer
function createDisabled(fluidPicker0: $Aquifer$FluidPicker$$Type): $Aquifer
}
export abstract class $Aquifer$$Static implements $Aquifer {
static "create"(noiseChunk0: $NoiseChunk$$Type, chunkPos1: $ChunkPos$$Type, noiseRouter2: $NoiseRouter$$Type, positionalRandomFactory3: $PositionalRandomFactory$$Type, int4: integer, int5: integer, fluidPicker6: $Aquifer$FluidPicker$$Type): $Aquifer
static "createDisabled"(fluidPicker0: $Aquifer$FluidPicker$$Type): $Aquifer
}
}

declare module "net.minecraft.world.level.levelgen.DensityFunction$ContextProvider" {
import { $DensityFunction$$Type } from "net.minecraft.world.level.levelgen.DensityFunction"
import { $DensityFunction$FunctionContext } from "net.minecraft.world.level.levelgen.DensityFunction$FunctionContext"

export interface $DensityFunction$ContextProvider {
"fillAllDirectly"(double0s: double[], densityFunction1: $DensityFunction$$Type): void
"forIndex"(int0: integer): $DensityFunction$FunctionContext
}

export namespace $DensityFunction$ContextProvider {
const probejs$$marker: never
}
export abstract class $DensityFunction$ContextProvider$$Static implements $DensityFunction$ContextProvider {
}
}

declare module "net.minecraft.world.level.levelgen.DensityFunction$NoiseHolder" {
import { $NormalNoise, $NormalNoise$$Type } from "net.minecraft.world.level.levelgen.synth.NormalNoise"
import { $Codec } from "com.mojang.serialization.Codec"
import { $Holder, $Holder$$Type } from "net.minecraft.core.Holder"
import { $NormalNoise$NoiseParameters, $NormalNoise$NoiseParameters$$Type } from "net.minecraft.world.level.levelgen.synth.NormalNoise$NoiseParameters"
import { $Record } from "java.lang.Record"

export class $DensityFunction$NoiseHolder extends $Record {
static readonly "CODEC": $Codec<$DensityFunction$NoiseHolder>

constructor(holder0: $Holder$$Type<$NormalNoise$NoiseParameters$$Type>, normalNoise1: $NormalNoise$$Type)
constructor(holder0: $Holder$$Type<$NormalNoise$NoiseParameters$$Type>)

public "getValue"(double0: double, double1: double, double2: double): double
public "maxValue"(): double
public "noise"(): $NormalNoise
public "noiseData"(): $Holder<$NormalNoise$NoiseParameters>
}
}

declare module "net.minecraft.world.level.levelgen.BitRandomSource" {
import { $PositionalRandomFactory } from "net.minecraft.world.level.levelgen.PositionalRandomFactory"
import { $RandomSource } from "net.minecraft.util.RandomSource"

export interface $BitRandomSource extends $RandomSource {
"consumeCount"(int0: integer): void
"fork"(): $RandomSource
"forkPositional"(): $PositionalRandomFactory
"next"(int0: integer): integer
"nextBoolean"(): boolean
"nextDouble"(): double
"nextFloat"(): float
"nextGaussian"(): double
"nextInt"(int0: integer): integer
"nextInt"(): integer
"nextInt"(int0: integer, int1: integer): integer
"nextIntBetweenInclusive"(int0: integer, int1: integer): integer
"nextLong"(): long
"setSeed"(long0: long): void
"triangle"(double0: double, double1: double): double
set "seed"(value: long)
}

export namespace $BitRandomSource {
const DOUBLE_MULTIPLIER: double
const FLOAT_MULTIPLIER: float
function create(long0: long): $RandomSource
function create(): $RandomSource
function createNewThreadLocalInstance(): $RandomSource
function createThreadSafe(): $RandomSource
}
export abstract class $BitRandomSource$$Static implements $BitRandomSource {
static readonly "DOUBLE_MULTIPLIER": double
static readonly "FLOAT_MULTIPLIER": float

static "create"(long0: long): $RandomSource
static "create"(): $RandomSource
static "createNewThreadLocalInstance"(): $RandomSource
/** @deprecated */
static "createThreadSafe"(): $RandomSource
}
}

declare module "net.minecraft.world.level.levelgen.NoiseBasedChunkGenerator" {
import { $BiomeManager$$Type } from "net.minecraft.world.level.biome.BiomeManager"
import { $BiomeSource$$Type } from "net.minecraft.world.level.biome.BiomeSource"
import { $BlockState } from "net.minecraft.world.level.block.state.BlockState"
import { $Biome$$Type } from "net.minecraft.world.level.biome.Biome"
import { $ResourceKey$$Type } from "net.minecraft.resources.ResourceKey"
import { $Supplier, $Supplier$$Type } from "java.util.function.Supplier"
import { $ChunkAccess$$Type } from "net.minecraft.world.level.chunk.ChunkAccess"
import { $Registry$$Type } from "net.minecraft.core.Registry"
import { $ChunkGenerator } from "net.minecraft.world.level.chunk.ChunkGenerator"
import { $Blender$$Type } from "net.minecraft.world.level.levelgen.blending.Blender"
import { $Codec } from "com.mojang.serialization.Codec"
import { $Holder, $Holder$$Type } from "net.minecraft.core.Holder"
import { $RandomState$$Type } from "net.minecraft.world.level.levelgen.RandomState"
import { $NoiseGeneratorSettings, $NoiseGeneratorSettings$$Type } from "net.minecraft.world.level.levelgen.NoiseGeneratorSettings"
import { $WorldGenerationContext$$Type } from "net.minecraft.world.level.levelgen.WorldGenerationContext"
import { $StructureManager$$Type } from "net.minecraft.world.level.StructureManager"
import { $Aquifer$FluidPicker, $Aquifer$FluidPicker$$Type } from "net.minecraft.world.level.levelgen.Aquifer$FluidPicker"

export class $NoiseBasedChunkGenerator extends $ChunkGenerator {
static "AIR": $BlockState
static "CODEC": $Codec<$NoiseBasedChunkGenerator>

constructor(biomeSource0: $BiomeSource$$Type, holder1: $Holder$$Type<$NoiseGeneratorSettings$$Type>)

public "buildSurface"(chunkAccess0: $ChunkAccess$$Type, worldGenerationContext1: $WorldGenerationContext$$Type, randomState2: $RandomState$$Type, structureManager3: $StructureManager$$Type, biomeManager4: $BiomeManager$$Type, registry5: $Registry$$Type<$Biome$$Type>, blender6: $Blender$$Type): void
public "generatorSettings"(): $Holder<$NoiseGeneratorSettings>
public "stable"(resourceKey0: $ResourceKey$$Type<$NoiseGeneratorSettings>): boolean
get "globalFluidPicker"(): $Supplier<$Aquifer$FluidPicker>
set "globalFluidPicker"(value: $Supplier$$Type<$Aquifer$FluidPicker$$Type>)
get "settings"(): $Holder<$NoiseGeneratorSettings>
set "settings"(value: $Holder$$Type<$NoiseGeneratorSettings$$Type>)
}
}

declare module "net.minecraft.world.level.levelgen.DensityFunctions$Clamp" {
import { $DensityFunction$ContextProvider$$Type } from "net.minecraft.world.level.levelgen.DensityFunction$ContextProvider"
import { $DensityFunctions$PureTransformer } from "net.minecraft.world.level.levelgen.DensityFunctions$PureTransformer"
import { $KeyDispatchDataCodec } from "net.minecraft.util.KeyDispatchDataCodec"
import { $DensityFunction } from "net.minecraft.world.level.levelgen.DensityFunction"
import { $DensityFunction$FunctionContext$$Type } from "net.minecraft.world.level.levelgen.DensityFunction$FunctionContext"
import { $Record } from "java.lang.Record"
import { $DensityFunction$Visitor$$Type } from "net.minecraft.world.level.levelgen.DensityFunction$Visitor"

export class $DensityFunctions$Clamp extends $Record implements $DensityFunctions$PureTransformer {
static readonly "CODEC": $KeyDispatchDataCodec<$DensityFunctions$Clamp>

public "abs"(): $DensityFunction
public "clamp"(double0: double, double1: double): $DensityFunction
public "codec"(): $KeyDispatchDataCodec<$DensityFunction>
public "compute"(functionContext0: $DensityFunction$FunctionContext$$Type): double
public "cube"(): $DensityFunction
public "fillArray"(double0s: double[], contextProvider1: $DensityFunction$ContextProvider$$Type): void
public "halfNegative"(): $DensityFunction
public "input"(): $DensityFunction
public "mapAll"(visitor0: $DensityFunction$Visitor$$Type): $DensityFunction
public "maxValue"(): double
public "minValue"(): double
public "quarterNegative"(): $DensityFunction
public "square"(): $DensityFunction
public "squeeze"(): $DensityFunction
public "transform"(double0: double): double
}
}

declare module "net.minecraft.world.level.levelgen.WorldgenRandom" {
import { $RandomSource, $RandomSource$$Type } from "net.minecraft.util.RandomSource"
import { $LegacyRandomSource } from "net.minecraft.world.level.levelgen.LegacyRandomSource"

export class $WorldgenRandom extends $LegacyRandomSource {
constructor(randomSource0: $RandomSource$$Type)

public "consumeCount"(int0: integer): void
public static "create"(long0: long): $RandomSource
public static "create"(): $RandomSource
public static "createNewThreadLocalInstance"(): $RandomSource
/** @deprecated */
public static "createThreadSafe"(): $RandomSource
public "getCount"(): integer
public "nextBoolean"(): boolean
public "nextDouble"(): double
public "nextFloat"(): float
public "nextInt"(int0: integer): integer
public "nextInt"(): integer
public "nextInt"(int0: integer, int1: integer): integer
public "nextIntBetweenInclusive"(int0: integer, int1: integer): integer
public "nextLong"(): long
public static "seedSlimeChunk"(int0: integer, int1: integer, long2: long, long3: long): $RandomSource
public "setDecorationSeed"(long0: long, int1: integer, int2: integer): long
public "setFeatureSeed"(long0: long, int1: integer, int2: integer): void
public "setLargeFeatureSeed"(long0: long, int1: integer, int2: integer): void
public "setLargeFeatureWithSalt"(long0: long, int1: integer, int2: integer, int3: integer): void
public "triangle"(double0: double, double1: double): double
get "count"(): integer
}
}

declare module "net.minecraft.world.level.levelgen.VerticalAnchor" {
import { $Codec } from "com.mojang.serialization.Codec"
import { $WorldGenerationContext$$Type } from "net.minecraft.world.level.levelgen.WorldGenerationContext"

export interface $VerticalAnchor {
"resolveY"(worldGenerationContext0: $WorldGenerationContext$$Type): integer
}

export namespace $VerticalAnchor {
const BOTTOM: $VerticalAnchor
const CODEC: $Codec<$VerticalAnchor>
const TOP: $VerticalAnchor
function aboveBottom(int0: integer): $VerticalAnchor
function absolute(int0: integer): $VerticalAnchor
function belowTop(int0: integer): $VerticalAnchor
function bottom(): $VerticalAnchor
function top(): $VerticalAnchor
}
export abstract class $VerticalAnchor$$Static implements $VerticalAnchor {
static readonly "BOTTOM": $VerticalAnchor
static readonly "CODEC": $Codec<$VerticalAnchor>
static readonly "TOP": $VerticalAnchor

static "aboveBottom"(int0: integer): $VerticalAnchor
static "absolute"(int0: integer): $VerticalAnchor
static "belowTop"(int0: integer): $VerticalAnchor
static "bottom"(): $VerticalAnchor
static "top"(): $VerticalAnchor
}
}

declare module "net.minecraft.world.level.levelgen.WorldOptions" {
import { $OptionalLong, $OptionalLong$$Type } from "java.util.OptionalLong"
import { $MapCodec } from "com.mojang.serialization.MapCodec"

export class $WorldOptions {
static readonly "CODEC": $MapCodec<$WorldOptions>
static readonly "DEMO_OPTIONS": $WorldOptions

constructor(long0: long, boolean1: boolean, boolean2: boolean)

public static "defaultWithRandomSeed"(): $WorldOptions
public "generateBonusChest"(): boolean
public "generateStructures"(): boolean
public "isOldCustomizedWorld"(): boolean
public static "parseSeed"(string0: string): $OptionalLong
public static "randomSeed"(): long
public "seed"(): long
public "withBonusChest"(boolean0: boolean): $WorldOptions
public "withSeed"(optionalLong0: $OptionalLong$$Type): $WorldOptions
public "withStructures"(boolean0: boolean): $WorldOptions
get "oldCustomizedWorld"(): boolean
}
}

declare module "net.minecraft.world.level.levelgen.WorldDimensions" {
import { $ImmutableSet } from "com.google.common.collect.ImmutableSet"
import { $WorldDimensions$Complete } from "net.minecraft.world.level.levelgen.WorldDimensions$Complete"
import { $MapCodec } from "com.mojang.serialization.MapCodec"
import { $Record } from "java.lang.Record"
import { $DimensionType$$Type } from "net.minecraft.world.level.dimension.DimensionType"
import { $RegistryAccess$$Type } from "net.minecraft.core.RegistryAccess"
import { $ResourceKey, $ResourceKey$$Type } from "net.minecraft.resources.ResourceKey"
import { $Registry, $Registry$$Type } from "net.minecraft.core.Registry"
import { $ChunkGenerator, $ChunkGenerator$$Type } from "net.minecraft.world.level.chunk.ChunkGenerator"
import { $Stream, $Stream$$Type } from "java.util.stream.Stream"
import { $Holder$$Type } from "net.minecraft.core.Holder"
import { $Optional } from "java.util.Optional"
import { $LevelStem, $LevelStem$$Type } from "net.minecraft.world.level.dimension.LevelStem"
import { $Level } from "net.minecraft.world.level.Level"

export class $WorldDimensions extends $Record {
static readonly "CODEC": $MapCodec<$WorldDimensions>

constructor(registry0: $Registry$$Type<$LevelStem$$Type>)

public "bake"(registry0: $Registry$$Type<$LevelStem$$Type>): $WorldDimensions$Complete
public "dimensions"(): $Registry<$LevelStem>
public "get"(resourceKey0: $ResourceKey$$Type<$LevelStem>): $Optional<$LevelStem>
public "isDebug"(): boolean
public static "keysInOrder"(stream0: $Stream$$Type<$ResourceKey$$Type<$LevelStem$$Type>>): $Stream<$ResourceKey<$LevelStem>>
public "levels"(): $ImmutableSet<$ResourceKey<$Level>>
public "overworld"(): $ChunkGenerator
public "replaceOverworldGenerator"(registryAccess0: $RegistryAccess$$Type, chunkGenerator1: $ChunkGenerator$$Type): $WorldDimensions
public static "withOverworld"(registry0: $Registry$$Type<$DimensionType$$Type>, registry1: $Registry$$Type<$LevelStem$$Type>, chunkGenerator2: $ChunkGenerator$$Type): $Registry<$LevelStem>
public static "withOverworld"(registry0: $Registry$$Type<$LevelStem$$Type>, holder1: $Holder$$Type<$DimensionType$$Type>, chunkGenerator2: $ChunkGenerator$$Type): $Registry<$LevelStem>
get "debug"(): boolean
}
}

declare module "net.minecraft.world.level.levelgen.DensityFunctions$Ap2" {
import { $DensityFunction$ContextProvider$$Type } from "net.minecraft.world.level.levelgen.DensityFunction$ContextProvider"
import { $KeyDispatchDataCodec } from "net.minecraft.util.KeyDispatchDataCodec"
import { $DensityFunctions$TwoArgumentSimpleFunction } from "net.minecraft.world.level.levelgen.DensityFunctions$TwoArgumentSimpleFunction"
import { $DensityFunction, $DensityFunction$$Type } from "net.minecraft.world.level.levelgen.DensityFunction"
import { $DensityFunction$FunctionContext$$Type } from "net.minecraft.world.level.levelgen.DensityFunction$FunctionContext"
import { $DensityFunctions$TwoArgumentSimpleFunction$Type, $DensityFunctions$TwoArgumentSimpleFunction$Type$$Type } from "net.minecraft.world.level.levelgen.DensityFunctions$TwoArgumentSimpleFunction$Type"
import { $Record } from "java.lang.Record"
import { $DensityFunction$Visitor$$Type } from "net.minecraft.world.level.levelgen.DensityFunction$Visitor"

export class $DensityFunctions$Ap2 extends $Record implements $DensityFunctions$TwoArgumentSimpleFunction {
public "abs"(): $DensityFunction
public "argument1"(): $DensityFunction
public "argument2"(): $DensityFunction
public "clamp"(double0: double, double1: double): $DensityFunction
public "codec"(): $KeyDispatchDataCodec<$DensityFunction>
public "compute"(functionContext0: $DensityFunction$FunctionContext$$Type): double
public static "create"(type0: $DensityFunctions$TwoArgumentSimpleFunction$Type$$Type, densityFunction1: $DensityFunction$$Type, densityFunction2: $DensityFunction$$Type): $DensityFunctions$TwoArgumentSimpleFunction
public "cube"(): $DensityFunction
public "fillArray"(double0s: double[], contextProvider1: $DensityFunction$ContextProvider$$Type): void
public "halfNegative"(): $DensityFunction
public "mapAll"(visitor0: $DensityFunction$Visitor$$Type): $DensityFunction
public "maxValue"(): double
public "minValue"(): double
public "quarterNegative"(): $DensityFunction
public "square"(): $DensityFunction
public "squeeze"(): $DensityFunction
public "type"(): $DensityFunctions$TwoArgumentSimpleFunction$Type
}
}

declare module "net.minecraft.world.level.levelgen.DensityFunctions$TwoArgumentSimpleFunction" {
import { $DensityFunction$ContextProvider$$Type } from "net.minecraft.world.level.levelgen.DensityFunction$ContextProvider"
import { $Logger } from "org.slf4j.Logger"
import { $KeyDispatchDataCodec } from "net.minecraft.util.KeyDispatchDataCodec"
import { $DensityFunction, $DensityFunction$$Type } from "net.minecraft.world.level.levelgen.DensityFunction"
import { $DensityFunction$FunctionContext$$Type } from "net.minecraft.world.level.levelgen.DensityFunction$FunctionContext"
import { $DensityFunctions$TwoArgumentSimpleFunction$Type, $DensityFunctions$TwoArgumentSimpleFunction$Type$$Type } from "net.minecraft.world.level.levelgen.DensityFunctions$TwoArgumentSimpleFunction$Type"
import { $DensityFunction$Visitor$$Type } from "net.minecraft.world.level.levelgen.DensityFunction$Visitor"

export interface $DensityFunctions$TwoArgumentSimpleFunction extends $DensityFunction {
"abs"(): $DensityFunction
"argument1"(): $DensityFunction
"argument2"(): $DensityFunction
"clamp"(double0: double, double1: double): $DensityFunction
"codec"(): $KeyDispatchDataCodec<$DensityFunction>
"compute"(functionContext0: $DensityFunction$FunctionContext$$Type): double
"cube"(): $DensityFunction
"fillArray"(double0s: double[], contextProvider1: $DensityFunction$ContextProvider$$Type): void
"halfNegative"(): $DensityFunction
"mapAll"(visitor0: $DensityFunction$Visitor$$Type): $DensityFunction
"maxValue"(): double
"minValue"(): double
"quarterNegative"(): $DensityFunction
"square"(): $DensityFunction
"squeeze"(): $DensityFunction
"type"(): $DensityFunctions$TwoArgumentSimpleFunction$Type
}

export namespace $DensityFunctions$TwoArgumentSimpleFunction {
const LOGGER: $Logger
function create(type0: $DensityFunctions$TwoArgumentSimpleFunction$Type$$Type, densityFunction1: $DensityFunction$$Type, densityFunction2: $DensityFunction$$Type): $DensityFunctions$TwoArgumentSimpleFunction
}
export abstract class $DensityFunctions$TwoArgumentSimpleFunction$$Static implements $DensityFunctions$TwoArgumentSimpleFunction {
static readonly "LOGGER": $Logger

static "create"(type0: $DensityFunctions$TwoArgumentSimpleFunction$Type$$Type, densityFunction1: $DensityFunction$$Type, densityFunction2: $DensityFunction$$Type): $DensityFunctions$TwoArgumentSimpleFunction
}
}

declare module "net.minecraft.world.level.levelgen.GenerationStep$Decoration" {
import { $Codec } from "com.mojang.serialization.Codec"
import { $Enum, $Enum$$Type } from "java.lang.Enum"
import { $StringRepresentable, $StringRepresentable$$Type } from "net.minecraft.util.StringRepresentable"
import { $StringRepresentable$EnumCodec } from "net.minecraft.util.StringRepresentable$EnumCodec"
import { $Keyable } from "com.mojang.serialization.Keyable"
import { $Supplier$$Type } from "java.util.function.Supplier"
import { $Function$$Type } from "java.util.function.Function"

export class $GenerationStep$Decoration extends $Enum<$GenerationStep$Decoration> implements $StringRepresentable {
static readonly "CODEC": $Codec<$GenerationStep$Decoration>
static readonly "FLUID_SPRINGS": $GenerationStep$Decoration
static readonly "LAKES": $GenerationStep$Decoration
static readonly "LOCAL_MODIFICATIONS": $GenerationStep$Decoration
static readonly "RAW_GENERATION": $GenerationStep$Decoration
static readonly "STRONGHOLDS": $GenerationStep$Decoration
static readonly "SURFACE_STRUCTURES": $GenerationStep$Decoration
static readonly "TOP_LAYER_MODIFICATION": $GenerationStep$Decoration
static readonly "UNDERGROUND_DECORATION": $GenerationStep$Decoration
static readonly "UNDERGROUND_ORES": $GenerationStep$Decoration
static readonly "UNDERGROUND_STRUCTURES": $GenerationStep$Decoration
static readonly "VEGETAL_DECORATION": $GenerationStep$Decoration

public static "fromEnum"<E extends ($Enum<E> & $StringRepresentable)>(supplier0: $Supplier$$Type<E[]>): $StringRepresentable$EnumCodec<E>
public static "fromEnumWithMapping"<E extends ($Enum<E> & $StringRepresentable)>(supplier0: $Supplier$$Type<E[]>, function1: $Function$$Type<string, string>): $StringRepresentable$EnumCodec<E>
public "getName"(): string
public "getSerializedName"(): string
public static "keys"(stringRepresentable0s: $StringRepresentable$$Type[]): $Keyable
public static "valueOf"(string0: string): $GenerationStep$Decoration
public static "values"(): $GenerationStep$Decoration[]
get "name"(): string
get "serializedName"(): string
}
}

declare module "net.minecraft.world.level.levelgen.NoiseRouter" {
import { $Codec } from "com.mojang.serialization.Codec"
import { $DensityFunction, $DensityFunction$$Type } from "net.minecraft.world.level.levelgen.DensityFunction"
import { $Record } from "java.lang.Record"
import { $DensityFunction$Visitor$$Type } from "net.minecraft.world.level.levelgen.DensityFunction$Visitor"

export class $NoiseRouter extends $Record {
static readonly "CODEC": $Codec<$NoiseRouter>

constructor(densityFunction0: $DensityFunction$$Type, densityFunction1: $DensityFunction$$Type, densityFunction2: $DensityFunction$$Type, densityFunction3: $DensityFunction$$Type, densityFunction4: $DensityFunction$$Type, densityFunction5: $DensityFunction$$Type, densityFunction6: $DensityFunction$$Type, densityFunction7: $DensityFunction$$Type, densityFunction8: $DensityFunction$$Type, densityFunction9: $DensityFunction$$Type, densityFunction10: $DensityFunction$$Type, densityFunction11: $DensityFunction$$Type, densityFunction12: $DensityFunction$$Type, densityFunction13: $DensityFunction$$Type, densityFunction14: $DensityFunction$$Type)

public "barrierNoise"(): $DensityFunction
public "continents"(): $DensityFunction
public "depth"(): $DensityFunction
public "erosion"(): $DensityFunction
public "finalDensity"(): $DensityFunction
public "fluidLevelFloodednessNoise"(): $DensityFunction
public "fluidLevelSpreadNoise"(): $DensityFunction
public "initialDensityWithoutJaggedness"(): $DensityFunction
public "lavaNoise"(): $DensityFunction
public "mapAll"(visitor0: $DensityFunction$Visitor$$Type): $NoiseRouter
public "ridges"(): $DensityFunction
public "temperature"(): $DensityFunction
public "vegetation"(): $DensityFunction
public "veinGap"(): $DensityFunction
public "veinRidged"(): $DensityFunction
public "veinToggle"(): $DensityFunction
}
}

declare module "net.minecraft.world.level.levelgen.GeodeCrackSettings" {
import { $Codec } from "com.mojang.serialization.Codec"

export class $GeodeCrackSettings {
static readonly "CODEC": $Codec<$GeodeCrackSettings>
readonly "baseCrackSize": double
readonly "crackPointOffset": integer
readonly "generateCrackChance": double

constructor(double0: double, double1: double, int2: integer)

}
}

declare module "net.minecraft.world.level.levelgen.SurfaceSystem" {
import { $BiomeManager$$Type } from "net.minecraft.world.level.biome.BiomeManager"
import { $BandsRuleSource$$Type } from "net.potionstudios.biomeswevegone.world.level.levelgen.surfacerules.BandsRuleSource"
import { $PositionalRandomFactory, $PositionalRandomFactory$$Type } from "net.minecraft.world.level.levelgen.PositionalRandomFactory"
import { $SimpleWeightedRandomList$$Type } from "net.minecraft.util.random.SimpleWeightedRandomList"
import { $CarvingContext$$Type } from "net.minecraft.world.level.levelgen.carver.CarvingContext"
import { $NoiseChunk$$Type } from "net.minecraft.world.level.levelgen.NoiseChunk"
import { $BandsContext } from "net.potionstudios.biomeswevegone.world.level.levelgen.surfacerules.BandsContext"
import { $BlockState, $BlockState$$Type } from "net.minecraft.world.level.block.state.BlockState"
import { $Biome, $Biome$$Type } from "net.minecraft.world.level.biome.Biome"
import { $Function$$Type } from "java.util.function.Function"
import { $ChunkAccess$$Type } from "net.minecraft.world.level.chunk.ChunkAccess"
import { $Registry$$Type } from "net.minecraft.core.Registry"
import { $Holder } from "net.minecraft.core.Holder"
import { $IntProvider$$Type } from "net.minecraft.util.valueproviders.IntProvider"
import { $BlockPos$$Type } from "net.minecraft.core.BlockPos"
import { $RandomState$$Type } from "net.minecraft.world.level.levelgen.RandomState"
import { $SurfaceRules$RuleSource$$Type } from "net.minecraft.world.level.levelgen.SurfaceRules$RuleSource"
import { $WorldGenerationContext$$Type } from "net.minecraft.world.level.levelgen.WorldGenerationContext"
import { $Optional } from "java.util.Optional"

export class $SurfaceSystem implements $BandsContext {
readonly "noiseRandom": $PositionalRandomFactory

constructor(randomState0: $RandomState$$Type, blockState1: $BlockState$$Type, int2: integer, positionalRandomFactory3: $PositionalRandomFactory$$Type)

public "buildSurface"(randomState0: $RandomState$$Type, biomeManager1: $BiomeManager$$Type, registry2: $Registry$$Type<$Biome$$Type>, boolean3: boolean, worldGenerationContext4: $WorldGenerationContext$$Type, chunkAccess5: $ChunkAccess$$Type, noiseChunk6: $NoiseChunk$$Type, ruleSource7: $SurfaceRules$RuleSource$$Type): void
public "getBandsState"(bandsRuleSource: $BandsRuleSource$$Type, bandStates: $SimpleWeightedRandomList$$Type, bandSizeProvider: $IntProvider$$Type, bandsCountProvider: $IntProvider$$Type, x: integer, y: integer, z: integer, frequency: float, noiseScale: integer): $BlockState
/** @deprecated */
public "topMaterial"(ruleSource0: $SurfaceRules$RuleSource$$Type, carvingContext1: $CarvingContext$$Type, function2: $Function$$Type<$BlockPos$$Type, $Holder<$Biome>>, chunkAccess3: $ChunkAccess$$Type, noiseChunk4: $NoiseChunk$$Type, blockPos5: $BlockPos$$Type, boolean6: boolean): $Optional<$BlockState>
}
}

