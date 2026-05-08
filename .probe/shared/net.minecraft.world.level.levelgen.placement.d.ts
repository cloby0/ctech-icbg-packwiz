declare module "net.minecraft.world.level.levelgen.placement.EnvironmentScanPlacement" {
import { $Codec } from "com.mojang.serialization.Codec"
import { $Direction$$Type } from "net.minecraft.core.Direction"
import { $PlacementModifier } from "net.minecraft.world.level.levelgen.placement.PlacementModifier"
import { $BlockPredicate$$Type } from "net.minecraft.world.level.levelgen.blockpredicates.BlockPredicate"

export class $EnvironmentScanPlacement extends $PlacementModifier {
static readonly "CODEC": $Codec<$EnvironmentScanPlacement>

public static "scanningFor"(direction0: $Direction$$Type, blockPredicate1: $BlockPredicate$$Type, blockPredicate2: $BlockPredicate$$Type, int3: integer): $EnvironmentScanPlacement
public static "scanningFor"(direction0: $Direction$$Type, blockPredicate1: $BlockPredicate$$Type, int2: integer): $EnvironmentScanPlacement
}
}

declare module "net.minecraft.world.level.levelgen.placement.RepeatingPlacement" {
import { $PlacementModifier } from "net.minecraft.world.level.levelgen.placement.PlacementModifier"

export class $RepeatingPlacement extends $PlacementModifier {
constructor()

}
}

declare module "net.minecraft.world.level.levelgen.placement.HeightmapPlacement" {
import { $Codec } from "com.mojang.serialization.Codec"
import { $Heightmap$Types$$Type } from "net.minecraft.world.level.levelgen.Heightmap$Types"
import { $PlacementModifier } from "net.minecraft.world.level.levelgen.placement.PlacementModifier"

export class $HeightmapPlacement extends $PlacementModifier {
static readonly "CODEC": $Codec<$HeightmapPlacement>

public static "onHeightmap"(types0: $Heightmap$Types$$Type): $HeightmapPlacement
}
}

declare module "net.minecraft.world.level.levelgen.placement.PlacementFilter" {
import { $PlacementModifier } from "net.minecraft.world.level.levelgen.placement.PlacementModifier"

export class $PlacementFilter extends $PlacementModifier {
constructor()

}
}

declare module "net.minecraft.world.level.levelgen.placement.NoiseThresholdCountPlacement" {
import { $Codec } from "com.mojang.serialization.Codec"
import { $RepeatingPlacement } from "net.minecraft.world.level.levelgen.placement.RepeatingPlacement"

export class $NoiseThresholdCountPlacement extends $RepeatingPlacement {
static readonly "CODEC": $Codec<$NoiseThresholdCountPlacement>

public static "of"(double0: double, int1: integer, int2: integer): $NoiseThresholdCountPlacement
}
}

declare module "net.minecraft.world.level.levelgen.placement.NoiseBasedCountPlacement" {
import { $Codec } from "com.mojang.serialization.Codec"
import { $RepeatingPlacement } from "net.minecraft.world.level.levelgen.placement.RepeatingPlacement"

export class $NoiseBasedCountPlacement extends $RepeatingPlacement {
static readonly "CODEC": $Codec<$NoiseBasedCountPlacement>

public static "of"(int0: integer, double1: double, double2: double): $NoiseBasedCountPlacement
}
}

declare module "net.minecraft.world.level.levelgen.placement.PlacementContext" {
import { $ChunkGenerator, $ChunkGenerator$$Type } from "net.minecraft.world.level.chunk.ChunkGenerator"
import { $ChunkPos$$Type } from "net.minecraft.world.level.ChunkPos"
import { $WorldGenLevel, $WorldGenLevel$$Type } from "net.minecraft.world.level.WorldGenLevel"
import { $BlockPos$$Type } from "net.minecraft.core.BlockPos"
import { $PlacedFeature, $PlacedFeature$$Type } from "net.minecraft.world.level.levelgen.placement.PlacedFeature"
import { $GenerationStep$Carving$$Type } from "net.minecraft.world.level.levelgen.GenerationStep$Carving"
import { $Optional, $Optional$$Type } from "java.util.Optional"
import { $BlockState } from "net.minecraft.world.level.block.state.BlockState"
import { $WorldGenerationContext } from "net.minecraft.world.level.levelgen.WorldGenerationContext"
import { $Heightmap$Types$$Type } from "net.minecraft.world.level.levelgen.Heightmap$Types"
import { $CarvingMask } from "net.minecraft.world.level.chunk.CarvingMask"

export class $PlacementContext extends $WorldGenerationContext {
constructor(worldGenLevel0: $WorldGenLevel$$Type, chunkGenerator1: $ChunkGenerator$$Type, optional2: $Optional$$Type<$PlacedFeature$$Type>)

public "generator"(): $ChunkGenerator
public "getBlockState"(blockPos0: $BlockPos$$Type): $BlockState
public "getCarvingMask"(chunkPos0: $ChunkPos$$Type, carving1: $GenerationStep$Carving$$Type): $CarvingMask
public "getHeight"(types0: $Heightmap$Types$$Type, int1: integer, int2: integer): integer
public "getLevel"(): $WorldGenLevel
public "getMinBuildHeight"(): integer
public "topFeature"(): $Optional<$PlacedFeature>
get "level"(): $WorldGenLevel
get "minBuildHeight"(): integer
}
}

declare module "net.minecraft.world.level.levelgen.placement.CountPlacement" {
import { $Codec } from "com.mojang.serialization.Codec"
import { $IntProvider$$Type } from "net.minecraft.util.valueproviders.IntProvider"
import { $RepeatingPlacement } from "net.minecraft.world.level.levelgen.placement.RepeatingPlacement"

export class $CountPlacement extends $RepeatingPlacement {
static readonly "CODEC": $Codec<$CountPlacement>

public static "of"(intProvider0: $IntProvider$$Type): $CountPlacement
public static "of"(int0: integer): $CountPlacement
}
}

declare module "net.minecraft.world.level.levelgen.placement.HeightRangePlacement" {
import { $Codec } from "com.mojang.serialization.Codec"
import { $PlacementModifier } from "net.minecraft.world.level.levelgen.placement.PlacementModifier"
import { $VerticalAnchor$$Type } from "net.minecraft.world.level.levelgen.VerticalAnchor"
import { $HeightProvider, $HeightProvider$$Type } from "net.minecraft.world.level.levelgen.heightproviders.HeightProvider"

export class $HeightRangePlacement extends $PlacementModifier {
static readonly "CODEC": $Codec<$HeightRangePlacement>
readonly "height": $HeightProvider

public static "of"(heightProvider0: $HeightProvider$$Type): $HeightRangePlacement
public static "triangle"(verticalAnchor0: $VerticalAnchor$$Type, verticalAnchor1: $VerticalAnchor$$Type): $HeightRangePlacement
public static "uniform"(verticalAnchor0: $VerticalAnchor$$Type, verticalAnchor1: $VerticalAnchor$$Type): $HeightRangePlacement
}
}

declare module "net.minecraft.world.level.levelgen.placement.BiomeFilter" {
import { $Codec } from "com.mojang.serialization.Codec"
import { $PlacementFilter } from "net.minecraft.world.level.levelgen.placement.PlacementFilter"

export class $BiomeFilter extends $PlacementFilter {
static "CODEC": $Codec<$BiomeFilter>

public static "biome"(): $BiomeFilter
}
}

declare module "net.minecraft.world.level.levelgen.placement.BlockPredicateFilter" {
import { $Codec } from "com.mojang.serialization.Codec"
import { $PlacementFilter } from "net.minecraft.world.level.levelgen.placement.PlacementFilter"
import { $BlockPredicate$$Type } from "net.minecraft.world.level.levelgen.blockpredicates.BlockPredicate"

export class $BlockPredicateFilter extends $PlacementFilter {
static readonly "CODEC": $Codec<$BlockPredicateFilter>

public static "forPredicate"(blockPredicate0: $BlockPredicate$$Type): $BlockPredicateFilter
}
}

declare module "net.minecraft.world.level.levelgen.placement.RarityFilter" {
import { $Codec } from "com.mojang.serialization.Codec"
import { $PlacementFilter } from "net.minecraft.world.level.levelgen.placement.PlacementFilter"

export class $RarityFilter extends $PlacementFilter {
static readonly "CODEC": $Codec<$RarityFilter>

public static "onAverageOnceEvery"(int0: integer): $RarityFilter
}
}

declare module "net.minecraft.world.level.levelgen.placement.SurfaceRelativeThresholdFilter" {
import { $Codec } from "com.mojang.serialization.Codec"
import { $PlacementFilter } from "net.minecraft.world.level.levelgen.placement.PlacementFilter"
import { $Heightmap$Types$$Type } from "net.minecraft.world.level.levelgen.Heightmap$Types"

export class $SurfaceRelativeThresholdFilter extends $PlacementFilter {
static readonly "CODEC": $Codec<$SurfaceRelativeThresholdFilter>

public static "of"(types0: $Heightmap$Types$$Type, int1: integer, int2: integer): $SurfaceRelativeThresholdFilter
}
}

declare module "net.minecraft.world.level.levelgen.placement.CaveSurface" {
import { $Codec } from "com.mojang.serialization.Codec"
import { $Enum, $Enum$$Type } from "java.lang.Enum"
import { $StringRepresentable, $StringRepresentable$$Type } from "net.minecraft.util.StringRepresentable"
import { $Direction } from "net.minecraft.core.Direction"
import { $StringRepresentable$EnumCodec } from "net.minecraft.util.StringRepresentable$EnumCodec"
import { $Keyable } from "com.mojang.serialization.Keyable"
import { $Supplier$$Type } from "java.util.function.Supplier"
import { $Function$$Type } from "java.util.function.Function"

export class $CaveSurface extends $Enum<$CaveSurface> implements $StringRepresentable {
static readonly "CEILING": $CaveSurface
static readonly "CODEC": $Codec<$CaveSurface>
static readonly "FLOOR": $CaveSurface

public static "fromEnum"<E extends ($Enum<E> & $StringRepresentable)>(supplier0: $Supplier$$Type<E[]>): $StringRepresentable$EnumCodec<E>
public static "fromEnumWithMapping"<E extends ($Enum<E> & $StringRepresentable)>(supplier0: $Supplier$$Type<E[]>, function1: $Function$$Type<string, string>): $StringRepresentable$EnumCodec<E>
public "getDirection"(): $Direction
public "getSerializedName"(): string
public "getY"(): integer
public static "keys"(stringRepresentable0s: $StringRepresentable$$Type[]): $Keyable
public static "valueOf"(string0: string): $CaveSurface
public static "values"(): $CaveSurface[]
get "direction"(): $Direction
get "serializedName"(): string
get "y"(): integer
}
}

declare module "net.minecraft.world.level.levelgen.placement.CarvingMaskPlacement" {
import { $Codec } from "com.mojang.serialization.Codec"
import { $GenerationStep$Carving$$Type } from "net.minecraft.world.level.levelgen.GenerationStep$Carving"
import { $PlacementModifier } from "net.minecraft.world.level.levelgen.placement.PlacementModifier"

export class $CarvingMaskPlacement extends $PlacementModifier {
static readonly "CODEC": $Codec<$CarvingMaskPlacement>

public static "forStep"(carving0: $GenerationStep$Carving$$Type): $CarvingMaskPlacement
}
}

declare module "net.minecraft.world.level.levelgen.placement.InSquarePlacement" {
import { $Codec } from "com.mojang.serialization.Codec"
import { $PlacementModifier } from "net.minecraft.world.level.levelgen.placement.PlacementModifier"

export class $InSquarePlacement extends $PlacementModifier {
static readonly "CODEC": $Codec<$InSquarePlacement>

constructor()

public static "spread"(): $InSquarePlacement
}
}

declare module "net.minecraft.world.level.levelgen.placement.SurfaceWaterDepthFilter" {
import { $Codec } from "com.mojang.serialization.Codec"
import { $PlacementFilter } from "net.minecraft.world.level.levelgen.placement.PlacementFilter"

export class $SurfaceWaterDepthFilter extends $PlacementFilter {
static readonly "CODEC": $Codec<$SurfaceWaterDepthFilter>

public static "forMaxDepth"(int0: integer): $SurfaceWaterDepthFilter
}
}

declare module "net.minecraft.world.level.levelgen.placement.PlacementModifier" {
import { $Codec } from "com.mojang.serialization.Codec"
import { $Stream } from "java.util.stream.Stream"
import { $PlacementModifierType } from "net.minecraft.world.level.levelgen.placement.PlacementModifierType"
import { $BlockPos, $BlockPos$$Type } from "net.minecraft.core.BlockPos"
import { $PlacementContext$$Type } from "net.minecraft.world.level.levelgen.placement.PlacementContext"
import { $RandomSource$$Type } from "net.minecraft.util.RandomSource"

export class $PlacementModifier {
static readonly "CODEC": $Codec<$PlacementModifier>

constructor()

public "getPositions"(placementContext0: $PlacementContext$$Type, randomSource1: $RandomSource$$Type, blockPos2: $BlockPos$$Type): $Stream<$BlockPos>
public "type"(): $PlacementModifierType<any>
}
}

declare module "net.minecraft.world.level.levelgen.placement.RandomOffsetPlacement" {
import { $Codec } from "com.mojang.serialization.Codec"
import { $IntProvider$$Type } from "net.minecraft.util.valueproviders.IntProvider"
import { $PlacementModifier } from "net.minecraft.world.level.levelgen.placement.PlacementModifier"

export class $RandomOffsetPlacement extends $PlacementModifier {
static readonly "CODEC": $Codec<$RandomOffsetPlacement>

public static "horizontal"(intProvider0: $IntProvider$$Type): $RandomOffsetPlacement
public static "of"(intProvider0: $IntProvider$$Type, intProvider1: $IntProvider$$Type): $RandomOffsetPlacement
public static "vertical"(intProvider0: $IntProvider$$Type): $RandomOffsetPlacement
}
}

declare module "net.minecraft.world.level.levelgen.placement.CountOnEveryLayerPlacement" {
import { $Codec } from "com.mojang.serialization.Codec"
import { $IntProvider$$Type } from "net.minecraft.util.valueproviders.IntProvider"
import { $PlacementModifier } from "net.minecraft.world.level.levelgen.placement.PlacementModifier"

/** @deprecated */
export class $CountOnEveryLayerPlacement extends $PlacementModifier {
static readonly "CODEC": $Codec<$CountOnEveryLayerPlacement>

public static "of"(intProvider0: $IntProvider$$Type): $CountOnEveryLayerPlacement
public static "of"(int0: integer): $CountOnEveryLayerPlacement
}
}

