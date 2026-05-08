declare module "net.minecraft.world.level.levelgen.carver.CarverDebugSettings" {
import { $Codec } from "com.mojang.serialization.Codec"
import { $BlockState, $BlockState$$Type } from "net.minecraft.world.level.block.state.BlockState"

export class $CarverDebugSettings {
static readonly "CODEC": $Codec<$CarverDebugSettings>
static readonly "DEFAULT": $CarverDebugSettings

public "getAirState"(): $BlockState
public "getBarrierState"(): $BlockState
public "getLavaState"(): $BlockState
public "getWaterState"(): $BlockState
public "isDebugMode"(): boolean
public static "of"(boolean0: boolean, blockState1: $BlockState$$Type, blockState2: $BlockState$$Type, blockState3: $BlockState$$Type, blockState4: $BlockState$$Type): $CarverDebugSettings
public static "of"(blockState0: $BlockState$$Type, blockState1: $BlockState$$Type, blockState2: $BlockState$$Type, blockState3: $BlockState$$Type): $CarverDebugSettings
public static "of"(boolean0: boolean, blockState1: $BlockState$$Type): $CarverDebugSettings
get "airState"(): $BlockState
get "barrierState"(): $BlockState
get "lavaState"(): $BlockState
get "waterState"(): $BlockState
get "debugMode"(): boolean
}
}

declare module "net.minecraft.world.level.levelgen.carver.CanyonCarverConfiguration$CanyonShapeConfiguration" {
import { $Codec } from "com.mojang.serialization.Codec"
import { $FloatProvider, $FloatProvider$$Type } from "net.minecraft.util.valueproviders.FloatProvider"

export class $CanyonCarverConfiguration$CanyonShapeConfiguration {
static readonly "CODEC": $Codec<$CanyonCarverConfiguration$CanyonShapeConfiguration>
readonly "distanceFactor": $FloatProvider
readonly "horizontalRadiusFactor": $FloatProvider
readonly "thickness": $FloatProvider
readonly "verticalRadiusCenterFactor": float
readonly "verticalRadiusDefaultFactor": float
readonly "widthSmoothness": integer

constructor(floatProvider0: $FloatProvider$$Type, floatProvider1: $FloatProvider$$Type, int2: integer, floatProvider3: $FloatProvider$$Type, float4: float, float5: float)

}
}

declare module "net.minecraft.world.level.levelgen.carver.NetherWorldCarver" {
import { $CaveCarverConfiguration$$Type } from "net.minecraft.world.level.levelgen.carver.CaveCarverConfiguration"
import { $Codec$$Type } from "com.mojang.serialization.Codec"
import { $CaveWorldCarver } from "net.minecraft.world.level.levelgen.carver.CaveWorldCarver"

export class $NetherWorldCarver extends $CaveWorldCarver {
constructor(codec0: $Codec$$Type<$CaveCarverConfiguration$$Type>)

}
}

declare module "net.minecraft.world.level.levelgen.carver.CaveCarverConfiguration" {
import { $CarverConfiguration, $CarverConfiguration$$Type } from "net.minecraft.world.level.levelgen.carver.CarverConfiguration"
import { $ConfiguredFeature } from "net.minecraft.world.level.levelgen.feature.ConfiguredFeature"
import { $Codec } from "com.mojang.serialization.Codec"
import { $Stream } from "java.util.stream.Stream"
import { $FloatProvider, $FloatProvider$$Type } from "net.minecraft.util.valueproviders.FloatProvider"
import { $CarverDebugSettings$$Type } from "net.minecraft.world.level.levelgen.carver.CarverDebugSettings"
import { $HolderSet$$Type } from "net.minecraft.core.HolderSet"
import { $Block$$Type } from "net.minecraft.world.level.block.Block"
import { $VerticalAnchor$$Type } from "net.minecraft.world.level.levelgen.VerticalAnchor"
import { $HeightProvider$$Type } from "net.minecraft.world.level.levelgen.heightproviders.HeightProvider"

export class $CaveCarverConfiguration extends $CarverConfiguration {
static readonly "CODEC": $Codec<$CaveCarverConfiguration>
readonly "horizontalRadiusMultiplier": $FloatProvider
readonly "verticalRadiusMultiplier": $FloatProvider

constructor(float0: float, heightProvider1: $HeightProvider$$Type, floatProvider2: $FloatProvider$$Type, verticalAnchor3: $VerticalAnchor$$Type, holderSet4: $HolderSet$$Type<$Block$$Type>, floatProvider5: $FloatProvider$$Type, floatProvider6: $FloatProvider$$Type, floatProvider7: $FloatProvider$$Type)
constructor(carverConfiguration0: $CarverConfiguration$$Type, floatProvider1: $FloatProvider$$Type, floatProvider2: $FloatProvider$$Type, floatProvider3: $FloatProvider$$Type)
constructor(float0: float, heightProvider1: $HeightProvider$$Type, floatProvider2: $FloatProvider$$Type, verticalAnchor3: $VerticalAnchor$$Type, carverDebugSettings4: $CarverDebugSettings$$Type, holderSet5: $HolderSet$$Type<$Block$$Type>, floatProvider6: $FloatProvider$$Type, floatProvider7: $FloatProvider$$Type, floatProvider8: $FloatProvider$$Type)

public "getFeatures"(): $Stream<$ConfiguredFeature<any, any>>
get "features"(): $Stream<$ConfiguredFeature<any, any>>
}
}

declare module "net.minecraft.world.level.levelgen.carver.CaveWorldCarver" {
import { $CaveCarverConfiguration, $CaveCarverConfiguration$$Type } from "net.minecraft.world.level.levelgen.carver.CaveCarverConfiguration"
import { $CarvingContext$$Type } from "net.minecraft.world.level.levelgen.carver.CarvingContext"
import { $RandomSource$$Type } from "net.minecraft.util.RandomSource"
import { $WorldCarver } from "net.minecraft.world.level.levelgen.carver.WorldCarver"
import { $Function$$Type } from "java.util.function.Function"
import { $Biome } from "net.minecraft.world.level.biome.Biome"
import { $ChunkAccess$$Type } from "net.minecraft.world.level.chunk.ChunkAccess"
import { $CarvingMask$$Type } from "net.minecraft.world.level.chunk.CarvingMask"
import { $ChunkPos$$Type } from "net.minecraft.world.level.ChunkPos"
import { $Codec$$Type } from "com.mojang.serialization.Codec"
import { $Holder } from "net.minecraft.core.Holder"
import { $BlockPos$$Type } from "net.minecraft.core.BlockPos"
import { $Aquifer$$Type } from "net.minecraft.world.level.levelgen.Aquifer"

export class $CaveWorldCarver extends $WorldCarver<$CaveCarverConfiguration> {
constructor(codec0: $Codec$$Type<$CaveCarverConfiguration$$Type>)

public "carve"(carvingContext0: $CarvingContext$$Type, caveCarverConfiguration1: $CaveCarverConfiguration$$Type, chunkAccess2: $ChunkAccess$$Type, function3: $Function$$Type<$BlockPos$$Type, $Holder<$Biome>>, randomSource4: $RandomSource$$Type, aquifer5: $Aquifer$$Type, chunkPos6: $ChunkPos$$Type, carvingMask7: $CarvingMask$$Type): boolean
public "isStartChunk"(caveCarverConfiguration0: $CaveCarverConfiguration$$Type, randomSource1: $RandomSource$$Type): boolean
}
}

declare module "net.minecraft.world.level.levelgen.carver.CarvingContext" {
import { $LevelHeightAccessor$$Type } from "net.minecraft.world.level.LevelHeightAccessor"
import { $NoiseChunk$$Type } from "net.minecraft.world.level.levelgen.NoiseChunk"
import { $BlockState } from "net.minecraft.world.level.block.state.BlockState"
import { $RegistryAccess, $RegistryAccess$$Type } from "net.minecraft.core.RegistryAccess"
import { $Function$$Type } from "java.util.function.Function"
import { $Biome } from "net.minecraft.world.level.biome.Biome"
import { $ChunkAccess$$Type } from "net.minecraft.world.level.chunk.ChunkAccess"
import { $Holder } from "net.minecraft.core.Holder"
import { $BlockPos$$Type } from "net.minecraft.core.BlockPos"
import { $RandomState, $RandomState$$Type } from "net.minecraft.world.level.levelgen.RandomState"
import { $SurfaceRules$RuleSource$$Type } from "net.minecraft.world.level.levelgen.SurfaceRules$RuleSource"
import { $Optional } from "java.util.Optional"
import { $WorldGenerationContext } from "net.minecraft.world.level.levelgen.WorldGenerationContext"
import { $NoiseBasedChunkGenerator$$Type } from "net.minecraft.world.level.levelgen.NoiseBasedChunkGenerator"

export class $CarvingContext extends $WorldGenerationContext {
constructor(noiseBasedChunkGenerator0: $NoiseBasedChunkGenerator$$Type, registryAccess1: $RegistryAccess$$Type, levelHeightAccessor2: $LevelHeightAccessor$$Type, noiseChunk3: $NoiseChunk$$Type, randomState4: $RandomState$$Type, ruleSource5: $SurfaceRules$RuleSource$$Type)

public "randomState"(): $RandomState
/** @deprecated */
public "registryAccess"(): $RegistryAccess
/** @deprecated */
public "topMaterial"(function0: $Function$$Type<$BlockPos$$Type, $Holder<$Biome>>, chunkAccess1: $ChunkAccess$$Type, blockPos2: $BlockPos$$Type, boolean3: boolean): $Optional<$BlockState>
}
}

declare module "net.minecraft.world.level.levelgen.carver.CanyonCarverConfiguration" {
import { $CarverConfiguration, $CarverConfiguration$$Type } from "net.minecraft.world.level.levelgen.carver.CarverConfiguration"
import { $ConfiguredFeature } from "net.minecraft.world.level.levelgen.feature.ConfiguredFeature"
import { $Codec } from "com.mojang.serialization.Codec"
import { $Stream } from "java.util.stream.Stream"
import { $FloatProvider, $FloatProvider$$Type } from "net.minecraft.util.valueproviders.FloatProvider"
import { $CarverDebugSettings$$Type } from "net.minecraft.world.level.levelgen.carver.CarverDebugSettings"
import { $HolderSet$$Type } from "net.minecraft.core.HolderSet"
import { $Block$$Type } from "net.minecraft.world.level.block.Block"
import { $CanyonCarverConfiguration$CanyonShapeConfiguration, $CanyonCarverConfiguration$CanyonShapeConfiguration$$Type } from "net.minecraft.world.level.levelgen.carver.CanyonCarverConfiguration$CanyonShapeConfiguration"
import { $VerticalAnchor$$Type } from "net.minecraft.world.level.levelgen.VerticalAnchor"
import { $HeightProvider$$Type } from "net.minecraft.world.level.levelgen.heightproviders.HeightProvider"

export class $CanyonCarverConfiguration extends $CarverConfiguration {
static readonly "CODEC": $Codec<$CanyonCarverConfiguration>
readonly "shape": $CanyonCarverConfiguration$CanyonShapeConfiguration
readonly "verticalRotation": $FloatProvider

constructor(float0: float, heightProvider1: $HeightProvider$$Type, floatProvider2: $FloatProvider$$Type, verticalAnchor3: $VerticalAnchor$$Type, carverDebugSettings4: $CarverDebugSettings$$Type, holderSet5: $HolderSet$$Type<$Block$$Type>, floatProvider6: $FloatProvider$$Type, canyonShapeConfiguration7: $CanyonCarverConfiguration$CanyonShapeConfiguration$$Type)
constructor(carverConfiguration0: $CarverConfiguration$$Type, floatProvider1: $FloatProvider$$Type, canyonShapeConfiguration2: $CanyonCarverConfiguration$CanyonShapeConfiguration$$Type)

public "getFeatures"(): $Stream<$ConfiguredFeature<any, any>>
get "features"(): $Stream<$ConfiguredFeature<any, any>>
}
}

declare module "net.minecraft.world.level.levelgen.carver.CarverConfiguration" {
import { $ConfiguredFeature } from "net.minecraft.world.level.levelgen.feature.ConfiguredFeature"
import { $Stream } from "java.util.stream.Stream"
import { $ProbabilityFeatureConfiguration } from "net.minecraft.world.level.levelgen.feature.configurations.ProbabilityFeatureConfiguration"
import { $CarverDebugSettings, $CarverDebugSettings$$Type } from "net.minecraft.world.level.levelgen.carver.CarverDebugSettings"
import { $FloatProvider, $FloatProvider$$Type } from "net.minecraft.util.valueproviders.FloatProvider"
import { $HolderSet, $HolderSet$$Type } from "net.minecraft.core.HolderSet"
import { $MapCodec } from "com.mojang.serialization.MapCodec"
import { $Block, $Block$$Type } from "net.minecraft.world.level.block.Block"
import { $VerticalAnchor, $VerticalAnchor$$Type } from "net.minecraft.world.level.levelgen.VerticalAnchor"
import { $HeightProvider, $HeightProvider$$Type } from "net.minecraft.world.level.levelgen.heightproviders.HeightProvider"

export class $CarverConfiguration extends $ProbabilityFeatureConfiguration {
static readonly "CODEC": $MapCodec<$CarverConfiguration>
readonly "debugSettings": $CarverDebugSettings
readonly "lavaLevel": $VerticalAnchor
readonly "replaceable": $HolderSet<$Block>
readonly "y": $HeightProvider
readonly "yScale": $FloatProvider

constructor(float0: float, heightProvider1: $HeightProvider$$Type, floatProvider2: $FloatProvider$$Type, verticalAnchor3: $VerticalAnchor$$Type, carverDebugSettings4: $CarverDebugSettings$$Type, holderSet5: $HolderSet$$Type<$Block$$Type>)

public "getFeatures"(): $Stream<$ConfiguredFeature<any, any>>
get "features"(): $Stream<$ConfiguredFeature<any, any>>
}
}

declare module "net.minecraft.world.level.levelgen.carver.CanyonWorldCarver" {
import { $CarvingContext$$Type } from "net.minecraft.world.level.levelgen.carver.CarvingContext"
import { $RandomSource$$Type } from "net.minecraft.util.RandomSource"
import { $WorldCarver } from "net.minecraft.world.level.levelgen.carver.WorldCarver"
import { $CanyonCarverConfiguration, $CanyonCarverConfiguration$$Type } from "net.minecraft.world.level.levelgen.carver.CanyonCarverConfiguration"
import { $Function$$Type } from "java.util.function.Function"
import { $Biome } from "net.minecraft.world.level.biome.Biome"
import { $ChunkAccess$$Type } from "net.minecraft.world.level.chunk.ChunkAccess"
import { $CarvingMask$$Type } from "net.minecraft.world.level.chunk.CarvingMask"
import { $ChunkPos$$Type } from "net.minecraft.world.level.ChunkPos"
import { $Codec$$Type } from "com.mojang.serialization.Codec"
import { $Holder } from "net.minecraft.core.Holder"
import { $BlockPos$$Type } from "net.minecraft.core.BlockPos"
import { $Aquifer$$Type } from "net.minecraft.world.level.levelgen.Aquifer"

export class $CanyonWorldCarver extends $WorldCarver<$CanyonCarverConfiguration> {
constructor(codec0: $Codec$$Type<$CanyonCarverConfiguration$$Type>)

public "carve"(carvingContext0: $CarvingContext$$Type, canyonCarverConfiguration1: $CanyonCarverConfiguration$$Type, chunkAccess2: $ChunkAccess$$Type, function3: $Function$$Type<$BlockPos$$Type, $Holder<$Biome>>, randomSource4: $RandomSource$$Type, aquifer5: $Aquifer$$Type, chunkPos6: $ChunkPos$$Type, carvingMask7: $CarvingMask$$Type): boolean
public "isStartChunk"(canyonCarverConfiguration0: $CanyonCarverConfiguration$$Type, randomSource1: $RandomSource$$Type): boolean
}
}

