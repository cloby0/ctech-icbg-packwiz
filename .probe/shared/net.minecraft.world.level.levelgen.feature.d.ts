declare module "net.minecraft.world.level.levelgen.feature.SculkPatchFeature" {
import { $Feature } from "net.minecraft.world.level.levelgen.feature.Feature"
import { $Codec$$Type } from "com.mojang.serialization.Codec"
import { $SculkPatchConfiguration, $SculkPatchConfiguration$$Type } from "net.minecraft.world.level.levelgen.feature.configurations.SculkPatchConfiguration"

export class $SculkPatchFeature extends $Feature<$SculkPatchConfiguration> {
constructor(codec0: $Codec$$Type<$SculkPatchConfiguration$$Type>)

}
}

declare module "net.minecraft.world.level.levelgen.feature.FeaturePlaceContext" {
import { $ChunkGenerator, $ChunkGenerator$$Type } from "net.minecraft.world.level.chunk.ChunkGenerator"
import { $ConfiguredFeature, $ConfiguredFeature$$Type } from "net.minecraft.world.level.levelgen.feature.ConfiguredFeature"
import { $WorldGenLevel, $WorldGenLevel$$Type } from "net.minecraft.world.level.WorldGenLevel"
import { $BlockPos, $BlockPos$$Type } from "net.minecraft.core.BlockPos"
import { $Optional, $Optional$$Type } from "java.util.Optional"
import { $RandomSource, $RandomSource$$Type } from "net.minecraft.util.RandomSource"
import { $FeatureConfiguration, $FeatureConfiguration$$Type } from "net.minecraft.world.level.levelgen.feature.configurations.FeatureConfiguration"

export class $FeaturePlaceContext<FC extends $FeatureConfiguration = $FeatureConfiguration> {
constructor(optional0: $Optional$$Type<$ConfiguredFeature$$Type<any, any>>, worldGenLevel1: $WorldGenLevel$$Type, chunkGenerator2: $ChunkGenerator$$Type, randomSource3: $RandomSource$$Type, blockPos4: $BlockPos$$Type, fc5: FC)

public "chunkGenerator"(): $ChunkGenerator
public "config"(): FC
public "level"(): $WorldGenLevel
public "origin"(): $BlockPos
public "random"(): $RandomSource
public "topFeature"(): $Optional<$ConfiguredFeature<any, any>>
}
}

declare module "net.minecraft.world.level.levelgen.feature.FossilFeatureConfiguration" {
import { $ResourceLocation, $ResourceLocation$$Type } from "net.minecraft.resources.ResourceLocation"
import { $List, $List$$Type } from "java.util.List"
import { $ConfiguredFeature } from "net.minecraft.world.level.levelgen.feature.ConfiguredFeature"
import { $Codec } from "com.mojang.serialization.Codec"
import { $Holder, $Holder$$Type } from "net.minecraft.core.Holder"
import { $Stream } from "java.util.stream.Stream"
import { $StructureProcessorList, $StructureProcessorList$$Type } from "net.minecraft.world.level.levelgen.structure.templatesystem.StructureProcessorList"
import { $FeatureConfiguration } from "net.minecraft.world.level.levelgen.feature.configurations.FeatureConfiguration"

export class $FossilFeatureConfiguration implements $FeatureConfiguration {
static readonly "CODEC": $Codec<$FossilFeatureConfiguration>
readonly "fossilProcessors": $Holder<$StructureProcessorList>
readonly "fossilStructures": $List<$ResourceLocation>
readonly "maxEmptyCornersAllowed": integer
readonly "overlayProcessors": $Holder<$StructureProcessorList>
readonly "overlayStructures": $List<$ResourceLocation>

constructor(list0: $List$$Type<$ResourceLocation$$Type>, list1: $List$$Type<$ResourceLocation$$Type>, holder2: $Holder$$Type<$StructureProcessorList$$Type>, holder3: $Holder$$Type<$StructureProcessorList$$Type>, int4: integer)

public "getFeatures"(): $Stream<$ConfiguredFeature<any, any>>
get "features"(): $Stream<$ConfiguredFeature<any, any>>
}
}

declare module "net.minecraft.world.level.levelgen.feature.EndIslandFeature" {
import { $NoneFeatureConfiguration, $NoneFeatureConfiguration$$Type } from "net.minecraft.world.level.levelgen.feature.configurations.NoneFeatureConfiguration"
import { $Feature } from "net.minecraft.world.level.levelgen.feature.Feature"
import { $Codec$$Type } from "com.mojang.serialization.Codec"

export class $EndIslandFeature extends $Feature<$NoneFeatureConfiguration> {
constructor(codec0: $Codec$$Type<$NoneFeatureConfiguration$$Type>)

}
}

declare module "net.minecraft.world.level.levelgen.feature.LakeFeature" {
import { $Feature } from "net.minecraft.world.level.levelgen.feature.Feature"
import { $Codec$$Type } from "com.mojang.serialization.Codec"
import { $LakeFeature$Configuration, $LakeFeature$Configuration$$Type } from "net.minecraft.world.level.levelgen.feature.LakeFeature$Configuration"

/** @deprecated */
export class $LakeFeature extends $Feature<$LakeFeature$Configuration> {
constructor(codec0: $Codec$$Type<$LakeFeature$Configuration$$Type>)

}
}

declare module "net.minecraft.world.level.levelgen.feature.BlockColumnFeature" {
import { $Feature } from "net.minecraft.world.level.levelgen.feature.Feature"
import { $Codec$$Type } from "com.mojang.serialization.Codec"
import { $BlockColumnConfiguration, $BlockColumnConfiguration$$Type } from "net.minecraft.world.level.levelgen.feature.configurations.BlockColumnConfiguration"

export class $BlockColumnFeature extends $Feature<$BlockColumnConfiguration> {
constructor(codec0: $Codec$$Type<$BlockColumnConfiguration$$Type>)

}
}

declare module "net.minecraft.world.level.levelgen.feature.configurations.DeltaFeatureConfiguration" {
import { $ConfiguredFeature } from "net.minecraft.world.level.levelgen.feature.ConfiguredFeature"
import { $Codec } from "com.mojang.serialization.Codec"
import { $Stream } from "java.util.stream.Stream"
import { $IntProvider, $IntProvider$$Type } from "net.minecraft.util.valueproviders.IntProvider"
import { $BlockState, $BlockState$$Type } from "net.minecraft.world.level.block.state.BlockState"
import { $FeatureConfiguration } from "net.minecraft.world.level.levelgen.feature.configurations.FeatureConfiguration"

export class $DeltaFeatureConfiguration implements $FeatureConfiguration {
static readonly "CODEC": $Codec<$DeltaFeatureConfiguration>

constructor(blockState0: $BlockState$$Type, blockState1: $BlockState$$Type, intProvider2: $IntProvider$$Type, intProvider3: $IntProvider$$Type)

public "contents"(): $BlockState
public "getFeatures"(): $Stream<$ConfiguredFeature<any, any>>
public "rim"(): $BlockState
public "rimSize"(): $IntProvider
public "size"(): $IntProvider
get "features"(): $Stream<$ConfiguredFeature<any, any>>
}
}

declare module "net.minecraft.world.level.levelgen.feature.stateproviders.NoiseThresholdProvider" {
import { $List$$Type } from "java.util.List"
import { $Codec } from "com.mojang.serialization.Codec"
import { $NormalNoise$NoiseParameters$$Type } from "net.minecraft.world.level.levelgen.synth.NormalNoise$NoiseParameters"
import { $BlockState$$Type } from "net.minecraft.world.level.block.state.BlockState"
import { $NoiseBasedStateProvider } from "net.minecraft.world.level.levelgen.feature.stateproviders.NoiseBasedStateProvider"

export class $NoiseThresholdProvider extends $NoiseBasedStateProvider {
static readonly "CODEC": $Codec<$NoiseThresholdProvider>

constructor(long0: long, noiseParameters1: $NormalNoise$NoiseParameters$$Type, float2: float, float3: float, float4: float, blockState5: $BlockState$$Type, list6: $List$$Type<$BlockState$$Type>, list7: $List$$Type<$BlockState$$Type>)

}
}

declare module "net.minecraft.world.level.levelgen.feature.trunkplacers.GiantTrunkPlacer" {
import { $Codec } from "com.mojang.serialization.Codec"
import { $TrunkPlacer } from "net.minecraft.world.level.levelgen.feature.trunkplacers.TrunkPlacer"

export class $GiantTrunkPlacer extends $TrunkPlacer {
static readonly "CODEC": $Codec<$GiantTrunkPlacer>

constructor(int0: integer, int1: integer, int2: integer)

}
}

declare module "net.minecraft.world.level.levelgen.feature.configurations.SpikeConfiguration" {
import { $List, $List$$Type } from "java.util.List"
import { $ConfiguredFeature } from "net.minecraft.world.level.levelgen.feature.ConfiguredFeature"
import { $Codec } from "com.mojang.serialization.Codec"
import { $Stream } from "java.util.stream.Stream"
import { $BlockPos, $BlockPos$$Type } from "net.minecraft.core.BlockPos"
import { $SpikeFeature$EndSpike, $SpikeFeature$EndSpike$$Type } from "net.minecraft.world.level.levelgen.feature.SpikeFeature$EndSpike"
import { $FeatureConfiguration } from "net.minecraft.world.level.levelgen.feature.configurations.FeatureConfiguration"

export class $SpikeConfiguration implements $FeatureConfiguration {
static readonly "CODEC": $Codec<$SpikeConfiguration>

constructor(boolean0: boolean, list1: $List$$Type<$SpikeFeature$EndSpike$$Type>, blockPos2: $BlockPos$$Type)

public "getCrystalBeamTarget"(): $BlockPos
public "getFeatures"(): $Stream<$ConfiguredFeature<any, any>>
public "getSpikes"(): $List<$SpikeFeature$EndSpike>
public "isCrystalInvulnerable"(): boolean
get "crystalBeamTarget"(): $BlockPos
get "features"(): $Stream<$ConfiguredFeature<any, any>>
get "spikes"(): $List<$SpikeFeature$EndSpike>
get "crystalInvulnerable"(): boolean
}
}

declare module "net.minecraft.world.level.levelgen.feature.PointedDripstoneFeature" {
import { $Feature } from "net.minecraft.world.level.levelgen.feature.Feature"
import { $PointedDripstoneConfiguration, $PointedDripstoneConfiguration$$Type } from "net.minecraft.world.level.levelgen.feature.configurations.PointedDripstoneConfiguration"
import { $Codec$$Type } from "com.mojang.serialization.Codec"

export class $PointedDripstoneFeature extends $Feature<$PointedDripstoneConfiguration> {
constructor(codec0: $Codec$$Type<$PointedDripstoneConfiguration$$Type>)

}
}

declare module "net.minecraft.world.level.levelgen.feature.configurations.HugeMushroomFeatureConfiguration" {
import { $BlockStateProvider, $BlockStateProvider$$Type } from "net.minecraft.world.level.levelgen.feature.stateproviders.BlockStateProvider"
import { $ConfiguredFeature } from "net.minecraft.world.level.levelgen.feature.ConfiguredFeature"
import { $Codec } from "com.mojang.serialization.Codec"
import { $Stream } from "java.util.stream.Stream"
import { $FeatureConfiguration } from "net.minecraft.world.level.levelgen.feature.configurations.FeatureConfiguration"

export class $HugeMushroomFeatureConfiguration implements $FeatureConfiguration {
static readonly "CODEC": $Codec<$HugeMushroomFeatureConfiguration>
readonly "capProvider": $BlockStateProvider
readonly "foliageRadius": integer
readonly "stemProvider": $BlockStateProvider

constructor(blockStateProvider0: $BlockStateProvider$$Type, blockStateProvider1: $BlockStateProvider$$Type, int2: integer)

public "getFeatures"(): $Stream<$ConfiguredFeature<any, any>>
get "features"(): $Stream<$ConfiguredFeature<any, any>>
}
}

declare module "net.minecraft.world.level.levelgen.feature.BambooFeature" {
import { $Feature } from "net.minecraft.world.level.levelgen.feature.Feature"
import { $Codec$$Type } from "com.mojang.serialization.Codec"
import { $ProbabilityFeatureConfiguration, $ProbabilityFeatureConfiguration$$Type } from "net.minecraft.world.level.levelgen.feature.configurations.ProbabilityFeatureConfiguration"

export class $BambooFeature extends $Feature<$ProbabilityFeatureConfiguration> {
constructor(codec0: $Codec$$Type<$ProbabilityFeatureConfiguration$$Type>)

}
}

declare module "net.minecraft.world.level.levelgen.feature.configurations.ReplaceSphereConfiguration" {
import { $ConfiguredFeature } from "net.minecraft.world.level.levelgen.feature.ConfiguredFeature"
import { $Codec } from "com.mojang.serialization.Codec"
import { $Stream } from "java.util.stream.Stream"
import { $IntProvider, $IntProvider$$Type } from "net.minecraft.util.valueproviders.IntProvider"
import { $BlockState, $BlockState$$Type } from "net.minecraft.world.level.block.state.BlockState"
import { $FeatureConfiguration } from "net.minecraft.world.level.levelgen.feature.configurations.FeatureConfiguration"

export class $ReplaceSphereConfiguration implements $FeatureConfiguration {
static readonly "CODEC": $Codec<$ReplaceSphereConfiguration>
readonly "replaceState": $BlockState
readonly "targetState": $BlockState

constructor(blockState0: $BlockState$$Type, blockState1: $BlockState$$Type, intProvider2: $IntProvider$$Type)

public "getFeatures"(): $Stream<$ConfiguredFeature<any, any>>
public "radius"(): $IntProvider
get "features"(): $Stream<$ConfiguredFeature<any, any>>
}
}

declare module "net.minecraft.world.level.levelgen.feature.trunkplacers.ForkingTrunkPlacer" {
import { $Codec } from "com.mojang.serialization.Codec"
import { $TrunkPlacer } from "net.minecraft.world.level.levelgen.feature.trunkplacers.TrunkPlacer"

export class $ForkingTrunkPlacer extends $TrunkPlacer {
static readonly "CODEC": $Codec<$ForkingTrunkPlacer>

constructor(int0: integer, int1: integer, int2: integer)

}
}

declare module "net.minecraft.world.level.levelgen.feature.foliageplacers.FoliagePlacer" {
import { $FoliagePlacer$FoliageAttachment$$Type } from "net.minecraft.world.level.levelgen.feature.foliageplacers.FoliagePlacer$FoliageAttachment"
import { $Codec } from "com.mojang.serialization.Codec"
import { $FoliagePlacer$FoliageSetter$$Type } from "net.minecraft.world.level.levelgen.feature.foliageplacers.FoliagePlacer$FoliageSetter"
import { $IntProvider$$Type } from "net.minecraft.util.valueproviders.IntProvider"
import { $LevelSimulatedReader$$Type } from "net.minecraft.world.level.LevelSimulatedReader"
import { $RandomSource$$Type } from "net.minecraft.util.RandomSource"
import { $TreeConfiguration$$Type } from "net.minecraft.world.level.levelgen.feature.configurations.TreeConfiguration"

export class $FoliagePlacer {
static readonly "CODEC": $Codec<$FoliagePlacer>

constructor(intProvider0: $IntProvider$$Type, intProvider1: $IntProvider$$Type)

public "createFoliage"(levelSimulatedReader0: $LevelSimulatedReader$$Type, foliageSetter1: $FoliagePlacer$FoliageSetter$$Type, randomSource2: $RandomSource$$Type, treeConfiguration3: $TreeConfiguration$$Type, int4: integer, foliageAttachment5: $FoliagePlacer$FoliageAttachment$$Type, int6: integer, int7: integer): void
public "foliageHeight"(randomSource0: $RandomSource$$Type, int1: integer, treeConfiguration2: $TreeConfiguration$$Type): integer
public "foliageRadius"(randomSource0: $RandomSource$$Type, int1: integer): integer
}
}

declare module "net.minecraft.world.level.levelgen.feature.HugeRedMushroomFeature" {
import { $Codec$$Type } from "com.mojang.serialization.Codec"
import { $BlockPos$$Type } from "net.minecraft.core.BlockPos"
import { $HugeMushroomFeatureConfiguration$$Type } from "net.minecraft.world.level.levelgen.feature.configurations.HugeMushroomFeatureConfiguration"
import { $LevelWriter$$Type } from "net.minecraft.world.level.LevelWriter"
import { $BlockState$$Type } from "net.minecraft.world.level.block.state.BlockState"
import { $AbstractHugeMushroomFeature } from "net.minecraft.world.level.levelgen.feature.AbstractHugeMushroomFeature"

export class $HugeRedMushroomFeature extends $AbstractHugeMushroomFeature {
constructor(codec0: $Codec$$Type<$HugeMushroomFeatureConfiguration$$Type>)

public "wrapWithCondition$gno000$isValidRepairItem"(hugeRedMushroomFeature0: $HugeRedMushroomFeature$$Type, levelWriter1: $LevelWriter$$Type, blockPos2: $BlockPos$$Type, blockState3: $BlockState$$Type): boolean
}
}

declare module "net.minecraft.world.level.levelgen.feature.trunkplacers.CherryTrunkPlacer" {
import { $Codec } from "com.mojang.serialization.Codec"
import { $TrunkPlacer } from "net.minecraft.world.level.levelgen.feature.trunkplacers.TrunkPlacer"
import { $IntProvider$$Type } from "net.minecraft.util.valueproviders.IntProvider"
import { $UniformInt$$Type } from "net.minecraft.util.valueproviders.UniformInt"

export class $CherryTrunkPlacer extends $TrunkPlacer {
static readonly "CODEC": $Codec<$CherryTrunkPlacer>

constructor(int0: integer, int1: integer, int2: integer, intProvider3: $IntProvider$$Type, intProvider4: $IntProvider$$Type, uniformInt5: $UniformInt$$Type, intProvider6: $IntProvider$$Type)

}
}

declare module "net.minecraft.world.level.levelgen.feature.configurations.RandomBooleanFeatureConfiguration" {
import { $ConfiguredFeature } from "net.minecraft.world.level.levelgen.feature.ConfiguredFeature"
import { $Codec } from "com.mojang.serialization.Codec"
import { $Holder, $Holder$$Type } from "net.minecraft.core.Holder"
import { $Stream } from "java.util.stream.Stream"
import { $PlacedFeature, $PlacedFeature$$Type } from "net.minecraft.world.level.levelgen.placement.PlacedFeature"
import { $FeatureConfiguration } from "net.minecraft.world.level.levelgen.feature.configurations.FeatureConfiguration"

export class $RandomBooleanFeatureConfiguration implements $FeatureConfiguration {
static readonly "CODEC": $Codec<$RandomBooleanFeatureConfiguration>
readonly "featureFalse": $Holder<$PlacedFeature>
readonly "featureTrue": $Holder<$PlacedFeature>

constructor(holder0: $Holder$$Type<$PlacedFeature$$Type>, holder1: $Holder$$Type<$PlacedFeature$$Type>)

public "getFeatures"(): $Stream<$ConfiguredFeature<any, any>>
get "features"(): $Stream<$ConfiguredFeature<any, any>>
}
}

declare module "net.minecraft.world.level.levelgen.feature.configurations.GeodeConfiguration" {
import { $GeodeBlockSettings, $GeodeBlockSettings$$Type } from "net.minecraft.world.level.levelgen.GeodeBlockSettings"
import { $ConfiguredFeature } from "net.minecraft.world.level.levelgen.feature.ConfiguredFeature"
import { $Codec } from "com.mojang.serialization.Codec"
import { $Stream } from "java.util.stream.Stream"
import { $IntProvider, $IntProvider$$Type } from "net.minecraft.util.valueproviders.IntProvider"
import { $GeodeCrackSettings, $GeodeCrackSettings$$Type } from "net.minecraft.world.level.levelgen.GeodeCrackSettings"
import { $GeodeLayerSettings, $GeodeLayerSettings$$Type } from "net.minecraft.world.level.levelgen.GeodeLayerSettings"
import { $FeatureConfiguration } from "net.minecraft.world.level.levelgen.feature.configurations.FeatureConfiguration"

export class $GeodeConfiguration implements $FeatureConfiguration {
static readonly "CHANCE_RANGE": $Codec<double>
static readonly "CODEC": $Codec<$GeodeConfiguration>
readonly "distributionPoints": $IntProvider
readonly "geodeBlockSettings": $GeodeBlockSettings
readonly "geodeCrackSettings": $GeodeCrackSettings
readonly "geodeLayerSettings": $GeodeLayerSettings
readonly "invalidBlocksThreshold": integer
readonly "maxGenOffset": integer
readonly "minGenOffset": integer
readonly "noiseMultiplier": double
readonly "outerWallDistance": $IntProvider
readonly "placementsRequireLayer0Alternate": boolean
readonly "pointOffset": $IntProvider
readonly "useAlternateLayer0Chance": double
readonly "usePotentialPlacementsChance": double

constructor(geodeBlockSettings0: $GeodeBlockSettings$$Type, geodeLayerSettings1: $GeodeLayerSettings$$Type, geodeCrackSettings2: $GeodeCrackSettings$$Type, double3: double, double4: double, boolean5: boolean, intProvider6: $IntProvider$$Type, intProvider7: $IntProvider$$Type, intProvider8: $IntProvider$$Type, int9: integer, int10: integer, double11: double, int12: integer)

public "getFeatures"(): $Stream<$ConfiguredFeature<any, any>>
get "features"(): $Stream<$ConfiguredFeature<any, any>>
}
}

declare module "net.minecraft.world.level.levelgen.feature.configurations.SimpleBlockConfiguration" {
import { $BlockStateProvider, $BlockStateProvider$$Type } from "net.minecraft.world.level.levelgen.feature.stateproviders.BlockStateProvider"
import { $ConfiguredFeature } from "net.minecraft.world.level.levelgen.feature.ConfiguredFeature"
import { $Codec } from "com.mojang.serialization.Codec"
import { $Stream } from "java.util.stream.Stream"
import { $Record } from "java.lang.Record"
import { $FeatureConfiguration } from "net.minecraft.world.level.levelgen.feature.configurations.FeatureConfiguration"

export class $SimpleBlockConfiguration extends $Record implements $FeatureConfiguration {
static readonly "CODEC": $Codec<$SimpleBlockConfiguration>

constructor(blockStateProvider0: $BlockStateProvider$$Type)

public "getFeatures"(): $Stream<$ConfiguredFeature<any, any>>
public "toPlace"(): $BlockStateProvider
get "features"(): $Stream<$ConfiguredFeature<any, any>>
}
}

declare module "net.minecraft.world.level.levelgen.feature.CoralMushroomFeature" {
import { $NoneFeatureConfiguration$$Type } from "net.minecraft.world.level.levelgen.feature.configurations.NoneFeatureConfiguration"
import { $Codec$$Type } from "com.mojang.serialization.Codec"
import { $CoralFeature } from "net.minecraft.world.level.levelgen.feature.CoralFeature"

export class $CoralMushroomFeature extends $CoralFeature {
constructor(codec0: $Codec$$Type<$NoneFeatureConfiguration$$Type>)

}
}

declare module "net.minecraft.world.level.levelgen.feature.foliageplacers.RandomSpreadFoliagePlacer" {
import { $FoliagePlacer } from "net.minecraft.world.level.levelgen.feature.foliageplacers.FoliagePlacer"
import { $Codec } from "com.mojang.serialization.Codec"
import { $IntProvider$$Type } from "net.minecraft.util.valueproviders.IntProvider"

export class $RandomSpreadFoliagePlacer extends $FoliagePlacer {
static readonly "CODEC": $Codec<$RandomSpreadFoliagePlacer>

constructor(intProvider0: $IntProvider$$Type, intProvider1: $IntProvider$$Type, intProvider2: $IntProvider$$Type, int3: integer)

}
}

declare module "net.minecraft.world.level.levelgen.feature.trunkplacers.UpwardsBranchingTrunkPlacer" {
import { $Codec } from "com.mojang.serialization.Codec"
import { $TrunkPlacer } from "net.minecraft.world.level.levelgen.feature.trunkplacers.TrunkPlacer"
import { $IntProvider$$Type } from "net.minecraft.util.valueproviders.IntProvider"
import { $HolderSet$$Type } from "net.minecraft.core.HolderSet"
import { $Block$$Type } from "net.minecraft.world.level.block.Block"

export class $UpwardsBranchingTrunkPlacer extends $TrunkPlacer {
static readonly "CODEC": $Codec<$UpwardsBranchingTrunkPlacer>

constructor(int0: integer, int1: integer, int2: integer, intProvider3: $IntProvider$$Type, float4: float, intProvider5: $IntProvider$$Type, holderSet6: $HolderSet$$Type<$Block$$Type>)

}
}

declare module "net.minecraft.world.level.levelgen.feature.CoralTreeFeature" {
import { $NoneFeatureConfiguration$$Type } from "net.minecraft.world.level.levelgen.feature.configurations.NoneFeatureConfiguration"
import { $Codec$$Type } from "com.mojang.serialization.Codec"
import { $CoralFeature } from "net.minecraft.world.level.levelgen.feature.CoralFeature"

export class $CoralTreeFeature extends $CoralFeature {
constructor(codec0: $Codec$$Type<$NoneFeatureConfiguration$$Type>)

}
}

declare module "net.minecraft.world.level.levelgen.feature.configurations.DripstoneClusterConfiguration" {
import { $ConfiguredFeature } from "net.minecraft.world.level.levelgen.feature.ConfiguredFeature"
import { $Codec } from "com.mojang.serialization.Codec"
import { $Stream } from "java.util.stream.Stream"
import { $FloatProvider, $FloatProvider$$Type } from "net.minecraft.util.valueproviders.FloatProvider"
import { $IntProvider, $IntProvider$$Type } from "net.minecraft.util.valueproviders.IntProvider"
import { $FeatureConfiguration } from "net.minecraft.world.level.levelgen.feature.configurations.FeatureConfiguration"

export class $DripstoneClusterConfiguration implements $FeatureConfiguration {
static readonly "CODEC": $Codec<$DripstoneClusterConfiguration>
readonly "chanceOfDripstoneColumnAtMaxDistanceFromCenter": float
readonly "density": $FloatProvider
readonly "dripstoneBlockLayerThickness": $IntProvider
readonly "floorToCeilingSearchRange": integer
readonly "height": $IntProvider
readonly "heightDeviation": integer
readonly "maxDistanceFromCenterAffectingHeightBias": integer
readonly "maxDistanceFromEdgeAffectingChanceOfDripstoneColumn": integer
readonly "maxStalagmiteStalactiteHeightDiff": integer
readonly "radius": $IntProvider
readonly "wetness": $FloatProvider

constructor(int0: integer, intProvider1: $IntProvider$$Type, intProvider2: $IntProvider$$Type, int3: integer, int4: integer, intProvider5: $IntProvider$$Type, floatProvider6: $FloatProvider$$Type, floatProvider7: $FloatProvider$$Type, float8: float, int9: integer, int10: integer)

public "getFeatures"(): $Stream<$ConfiguredFeature<any, any>>
get "features"(): $Stream<$ConfiguredFeature<any, any>>
}
}

declare module "net.minecraft.world.level.levelgen.feature.LargeDripstoneFeature" {
import { $Feature } from "net.minecraft.world.level.levelgen.feature.Feature"
import { $LargeDripstoneConfiguration, $LargeDripstoneConfiguration$$Type } from "net.minecraft.world.level.levelgen.feature.configurations.LargeDripstoneConfiguration"
import { $Codec$$Type } from "com.mojang.serialization.Codec"

export class $LargeDripstoneFeature extends $Feature<$LargeDripstoneConfiguration> {
constructor(codec0: $Codec$$Type<$LargeDripstoneConfiguration$$Type>)

}
}

declare module "net.minecraft.world.level.levelgen.feature.RandomSelectorFeature" {
import { $Feature } from "net.minecraft.world.level.levelgen.feature.Feature"
import { $Codec$$Type } from "com.mojang.serialization.Codec"
import { $RandomFeatureConfiguration, $RandomFeatureConfiguration$$Type } from "net.minecraft.world.level.levelgen.feature.configurations.RandomFeatureConfiguration"

export class $RandomSelectorFeature extends $Feature<$RandomFeatureConfiguration> {
constructor(codec0: $Codec$$Type<$RandomFeatureConfiguration$$Type>)

}
}

declare module "net.minecraft.world.level.levelgen.feature.featuresize.TwoLayersFeatureSize" {
import { $Codec } from "com.mojang.serialization.Codec"
import { $FeatureSize } from "net.minecraft.world.level.levelgen.feature.featuresize.FeatureSize"
import { $OptionalInt$$Type } from "java.util.OptionalInt"

export class $TwoLayersFeatureSize extends $FeatureSize {
static readonly "CODEC": $Codec<$TwoLayersFeatureSize>

constructor(int0: integer, int1: integer, int2: integer)
constructor(int0: integer, int1: integer, int2: integer, optionalInt3: $OptionalInt$$Type)

}
}

declare module "net.minecraft.world.level.levelgen.feature.configurations.ColumnFeatureConfiguration" {
import { $ConfiguredFeature } from "net.minecraft.world.level.levelgen.feature.ConfiguredFeature"
import { $Codec } from "com.mojang.serialization.Codec"
import { $Stream } from "java.util.stream.Stream"
import { $IntProvider, $IntProvider$$Type } from "net.minecraft.util.valueproviders.IntProvider"
import { $FeatureConfiguration } from "net.minecraft.world.level.levelgen.feature.configurations.FeatureConfiguration"

export class $ColumnFeatureConfiguration implements $FeatureConfiguration {
static readonly "CODEC": $Codec<$ColumnFeatureConfiguration>

constructor(intProvider0: $IntProvider$$Type, intProvider1: $IntProvider$$Type)

public "getFeatures"(): $Stream<$ConfiguredFeature<any, any>>
public "height"(): $IntProvider
public "reach"(): $IntProvider
get "features"(): $Stream<$ConfiguredFeature<any, any>>
}
}

declare module "net.minecraft.world.level.levelgen.feature.ReplaceBlockFeature" {
import { $Feature } from "net.minecraft.world.level.levelgen.feature.Feature"
import { $ReplaceBlockConfiguration, $ReplaceBlockConfiguration$$Type } from "net.minecraft.world.level.levelgen.feature.configurations.ReplaceBlockConfiguration"
import { $Codec$$Type } from "com.mojang.serialization.Codec"

export class $ReplaceBlockFeature extends $Feature<$ReplaceBlockConfiguration> {
constructor(codec0: $Codec$$Type<$ReplaceBlockConfiguration$$Type>)

}
}

declare module "net.minecraft.world.level.levelgen.feature.stateproviders.RandomizedIntStateProvider" {
import { $IntegerProperty$$Type } from "net.minecraft.world.level.block.state.properties.IntegerProperty"
import { $BlockStateProvider, $BlockStateProvider$$Type } from "net.minecraft.world.level.levelgen.feature.stateproviders.BlockStateProvider"
import { $Codec } from "com.mojang.serialization.Codec"
import { $IntProvider$$Type } from "net.minecraft.util.valueproviders.IntProvider"

export class $RandomizedIntStateProvider extends $BlockStateProvider {
static readonly "CODEC": $Codec<$RandomizedIntStateProvider>

constructor(blockStateProvider0: $BlockStateProvider$$Type, integerProperty1: $IntegerProperty$$Type, intProvider2: $IntProvider$$Type)
constructor(blockStateProvider0: $BlockStateProvider$$Type, string1: string, intProvider2: $IntProvider$$Type)

}
}

declare module "net.minecraft.world.level.levelgen.feature.featuresize.FeatureSize" {
import { $Codec } from "com.mojang.serialization.Codec"
import { $OptionalInt, $OptionalInt$$Type } from "java.util.OptionalInt"

export class $FeatureSize {
static readonly "CODEC": $Codec<$FeatureSize>

constructor(optionalInt0: $OptionalInt$$Type)

public "getSizeAtHeight"(int0: integer, int1: integer): integer
public "minClippedHeight"(): $OptionalInt
}
}

declare module "net.minecraft.world.level.levelgen.feature.trunkplacers.DarkOakTrunkPlacer" {
import { $Codec } from "com.mojang.serialization.Codec"
import { $TrunkPlacer } from "net.minecraft.world.level.levelgen.feature.trunkplacers.TrunkPlacer"

export class $DarkOakTrunkPlacer extends $TrunkPlacer {
static readonly "CODEC": $Codec<$DarkOakTrunkPlacer>

constructor(int0: integer, int1: integer, int2: integer)

}
}

declare module "net.minecraft.world.level.levelgen.feature.configurations.BlockColumnConfiguration$Layer" {
import { $BlockStateProvider, $BlockStateProvider$$Type } from "net.minecraft.world.level.levelgen.feature.stateproviders.BlockStateProvider"
import { $Codec } from "com.mojang.serialization.Codec"
import { $IntProvider, $IntProvider$$Type } from "net.minecraft.util.valueproviders.IntProvider"
import { $Record } from "java.lang.Record"

export class $BlockColumnConfiguration$Layer extends $Record {
static readonly "CODEC": $Codec<$BlockColumnConfiguration$Layer>

constructor(intProvider0: $IntProvider$$Type, blockStateProvider1: $BlockStateProvider$$Type)

public "height"(): $IntProvider
public "state"(): $BlockStateProvider
}
}

declare module "net.minecraft.world.level.levelgen.feature.EndGatewayFeature" {
import { $Feature } from "net.minecraft.world.level.levelgen.feature.Feature"
import { $Codec$$Type } from "com.mojang.serialization.Codec"
import { $EndGatewayConfiguration, $EndGatewayConfiguration$$Type } from "net.minecraft.world.level.levelgen.feature.configurations.EndGatewayConfiguration"

export class $EndGatewayFeature extends $Feature<$EndGatewayConfiguration> {
constructor(codec0: $Codec$$Type<$EndGatewayConfiguration$$Type>)

}
}

declare module "net.minecraft.world.level.levelgen.feature.configurations.FeatureConfiguration" {
import { $NoneFeatureConfiguration } from "net.minecraft.world.level.levelgen.feature.configurations.NoneFeatureConfiguration"
import { $ConfiguredFeature } from "net.minecraft.world.level.levelgen.feature.ConfiguredFeature"
import { $Stream } from "java.util.stream.Stream"

export interface $FeatureConfiguration {
"getFeatures"(): $Stream<$ConfiguredFeature<any, any>>
get "features"(): $Stream<$ConfiguredFeature<any, any>>
}

export namespace $FeatureConfiguration {
const NONE: $NoneFeatureConfiguration
}
export abstract class $FeatureConfiguration$$Static implements $FeatureConfiguration {
static readonly "NONE": $NoneFeatureConfiguration

}
}

declare module "net.minecraft.world.level.levelgen.feature.stateproviders.RuleBasedBlockStateProvider$Rule" {
import { $BlockStateProvider, $BlockStateProvider$$Type } from "net.minecraft.world.level.levelgen.feature.stateproviders.BlockStateProvider"
import { $Codec } from "com.mojang.serialization.Codec"
import { $Record } from "java.lang.Record"
import { $BlockPredicate, $BlockPredicate$$Type } from "net.minecraft.world.level.levelgen.blockpredicates.BlockPredicate"

export class $RuleBasedBlockStateProvider$Rule extends $Record {
static readonly "CODEC": $Codec<$RuleBasedBlockStateProvider$Rule>

constructor(blockPredicate0: $BlockPredicate$$Type, blockStateProvider1: $BlockStateProvider$$Type)

public "ifTrue"(): $BlockPredicate
public "then"(): $BlockStateProvider
}
}

declare module "net.minecraft.world.level.levelgen.feature.configurations.TreeConfiguration" {
import { $BlockStateProvider, $BlockStateProvider$$Type } from "net.minecraft.world.level.levelgen.feature.stateproviders.BlockStateProvider"
import { $TreeDecorator } from "net.minecraft.world.level.levelgen.feature.treedecorators.TreeDecorator"
import { $FeatureSize } from "net.minecraft.world.level.levelgen.feature.featuresize.FeatureSize"
import { $RootPlacer } from "net.minecraft.world.level.levelgen.feature.rootplacers.RootPlacer"
import { $FoliagePlacer } from "net.minecraft.world.level.levelgen.feature.foliageplacers.FoliagePlacer"
import { $List } from "java.util.List"
import { $ConfiguredFeature } from "net.minecraft.world.level.levelgen.feature.ConfiguredFeature"
import { $Codec } from "com.mojang.serialization.Codec"
import { $TrunkPlacer } from "net.minecraft.world.level.levelgen.feature.trunkplacers.TrunkPlacer"
import { $Stream } from "java.util.stream.Stream"
import { $Optional } from "java.util.Optional"
import { $FeatureConfiguration } from "net.minecraft.world.level.levelgen.feature.configurations.FeatureConfiguration"

export class $TreeConfiguration implements $FeatureConfiguration {
static readonly "CODEC": $Codec<$TreeConfiguration>
readonly "decorators": $List<$TreeDecorator>
readonly "dirtProvider": $BlockStateProvider
readonly "foliagePlacer": $FoliagePlacer
readonly "foliageProvider": $BlockStateProvider
readonly "forceDirt": boolean
readonly "ignoreVines": boolean
readonly "minimumSize": $FeatureSize
readonly "rootPlacer": $Optional<$RootPlacer>
readonly "trunkPlacer": $TrunkPlacer

public "getFeatures"(): $Stream<$ConfiguredFeature<any, any>>
get "trunkProvider"(): $BlockStateProvider
set "trunkProvider"(value: $BlockStateProvider$$Type)
get "features"(): $Stream<$ConfiguredFeature<any, any>>
}
}

declare module "net.minecraft.world.level.levelgen.feature.treedecorators.AlterGroundDecorator" {
import { $BlockStateProvider$$Type } from "net.minecraft.world.level.levelgen.feature.stateproviders.BlockStateProvider"
import { $Codec } from "com.mojang.serialization.Codec"
import { $TreeDecorator } from "net.minecraft.world.level.levelgen.feature.treedecorators.TreeDecorator"

export class $AlterGroundDecorator extends $TreeDecorator {
static readonly "CODEC": $Codec<$AlterGroundDecorator>

constructor(blockStateProvider0: $BlockStateProvider$$Type)

}
}

declare module "net.minecraft.world.level.levelgen.feature.SpikeFeature$EndSpike" {
import { $Codec } from "com.mojang.serialization.Codec"
import { $AABB } from "net.minecraft.world.phys.AABB"
import { $BlockPos$$Type } from "net.minecraft.core.BlockPos"

export class $SpikeFeature$EndSpike {
static readonly "CODEC": $Codec<$SpikeFeature$EndSpike>

constructor(int0: integer, int1: integer, int2: integer, int3: integer, boolean4: boolean)

public "getCenterX"(): integer
public "getCenterZ"(): integer
public "getHeight"(): integer
public "getRadius"(): integer
public "getTopBoundingBox"(): $AABB
public "isCenterWithinChunk"(blockPos0: $BlockPos$$Type): boolean
public "isGuarded"(): boolean
get "centerX"(): integer
get "centerZ"(): integer
get "height"(): integer
get "radius"(): integer
get "topBoundingBox"(): $AABB
get "guarded"(): boolean
}
}

declare module "net.minecraft.world.level.levelgen.feature.FossilFeature" {
import { $Feature } from "net.minecraft.world.level.levelgen.feature.Feature"
import { $Codec$$Type } from "com.mojang.serialization.Codec"
import { $FossilFeatureConfiguration, $FossilFeatureConfiguration$$Type } from "net.minecraft.world.level.levelgen.feature.FossilFeatureConfiguration"

export class $FossilFeature extends $Feature<$FossilFeatureConfiguration> {
constructor(codec0: $Codec$$Type<$FossilFeatureConfiguration$$Type>)

}
}

declare module "net.minecraft.world.level.levelgen.feature.treedecorators.BeehiveDecorator" {
import { $Codec } from "com.mojang.serialization.Codec"
import { $TreeDecorator } from "net.minecraft.world.level.levelgen.feature.treedecorators.TreeDecorator"

export class $BeehiveDecorator extends $TreeDecorator {
static readonly "CODEC": $Codec<$BeehiveDecorator>

constructor(float0: float)

}
}

declare module "net.minecraft.world.level.levelgen.feature.configurations.DiskConfiguration" {
import { $RuleBasedBlockStateProvider, $RuleBasedBlockStateProvider$$Type } from "net.minecraft.world.level.levelgen.feature.stateproviders.RuleBasedBlockStateProvider"
import { $ConfiguredFeature } from "net.minecraft.world.level.levelgen.feature.ConfiguredFeature"
import { $Codec } from "com.mojang.serialization.Codec"
import { $Stream } from "java.util.stream.Stream"
import { $IntProvider, $IntProvider$$Type } from "net.minecraft.util.valueproviders.IntProvider"
import { $Record } from "java.lang.Record"
import { $BlockPredicate, $BlockPredicate$$Type } from "net.minecraft.world.level.levelgen.blockpredicates.BlockPredicate"
import { $FeatureConfiguration } from "net.minecraft.world.level.levelgen.feature.configurations.FeatureConfiguration"

export class $DiskConfiguration extends $Record implements $FeatureConfiguration {
static readonly "CODEC": $Codec<$DiskConfiguration>

constructor(ruleBasedBlockStateProvider0: $RuleBasedBlockStateProvider$$Type, blockPredicate1: $BlockPredicate$$Type, intProvider2: $IntProvider$$Type, int3: integer)

public "getFeatures"(): $Stream<$ConfiguredFeature<any, any>>
public "halfHeight"(): integer
public "radius"(): $IntProvider
public "stateProvider"(): $RuleBasedBlockStateProvider
public "target"(): $BlockPredicate
get "features"(): $Stream<$ConfiguredFeature<any, any>>
}
}

declare module "net.minecraft.world.level.levelgen.feature.IcebergFeature" {
import { $Feature } from "net.minecraft.world.level.levelgen.feature.Feature"
import { $Codec$$Type } from "com.mojang.serialization.Codec"
import { $BlockStateConfiguration, $BlockStateConfiguration$$Type } from "net.minecraft.world.level.levelgen.feature.configurations.BlockStateConfiguration"

export class $IcebergFeature extends $Feature<$BlockStateConfiguration> {
constructor(codec0: $Codec$$Type<$BlockStateConfiguration$$Type>)

}
}

declare module "net.minecraft.world.level.levelgen.feature.configurations.EndGatewayConfiguration" {
import { $ConfiguredFeature } from "net.minecraft.world.level.levelgen.feature.ConfiguredFeature"
import { $Codec } from "com.mojang.serialization.Codec"
import { $Stream } from "java.util.stream.Stream"
import { $BlockPos, $BlockPos$$Type } from "net.minecraft.core.BlockPos"
import { $Optional } from "java.util.Optional"
import { $FeatureConfiguration } from "net.minecraft.world.level.levelgen.feature.configurations.FeatureConfiguration"

export class $EndGatewayConfiguration implements $FeatureConfiguration {
static readonly "CODEC": $Codec<$EndGatewayConfiguration>

public static "delayedExitSearch"(): $EndGatewayConfiguration
public "getExit"(): $Optional<$BlockPos>
public "getFeatures"(): $Stream<$ConfiguredFeature<any, any>>
public "isExitExact"(): boolean
public static "knownExit"(blockPos0: $BlockPos$$Type, boolean1: boolean): $EndGatewayConfiguration
get "exit"(): $Optional<$BlockPos>
get "features"(): $Stream<$ConfiguredFeature<any, any>>
get "exitExact"(): boolean
}
}

declare module "net.minecraft.world.level.levelgen.feature.IceSpikeFeature" {
import { $NoneFeatureConfiguration, $NoneFeatureConfiguration$$Type } from "net.minecraft.world.level.levelgen.feature.configurations.NoneFeatureConfiguration"
import { $Feature } from "net.minecraft.world.level.levelgen.feature.Feature"
import { $Codec$$Type } from "com.mojang.serialization.Codec"

export class $IceSpikeFeature extends $Feature<$NoneFeatureConfiguration> {
constructor(codec0: $Codec$$Type<$NoneFeatureConfiguration$$Type>)

}
}

declare module "net.minecraft.world.level.levelgen.feature.foliageplacers.PineFoliagePlacer" {
import { $FoliagePlacer } from "net.minecraft.world.level.levelgen.feature.foliageplacers.FoliagePlacer"
import { $Codec } from "com.mojang.serialization.Codec"
import { $IntProvider$$Type } from "net.minecraft.util.valueproviders.IntProvider"

export class $PineFoliagePlacer extends $FoliagePlacer {
static readonly "CODEC": $Codec<$PineFoliagePlacer>

constructor(intProvider0: $IntProvider$$Type, intProvider1: $IntProvider$$Type, intProvider2: $IntProvider$$Type)

}
}

declare module "net.minecraft.world.level.levelgen.feature.configurations.BlockStateConfiguration" {
import { $ConfiguredFeature } from "net.minecraft.world.level.levelgen.feature.ConfiguredFeature"
import { $Codec } from "com.mojang.serialization.Codec"
import { $Stream } from "java.util.stream.Stream"
import { $BlockState, $BlockState$$Type } from "net.minecraft.world.level.block.state.BlockState"
import { $FeatureConfiguration } from "net.minecraft.world.level.levelgen.feature.configurations.FeatureConfiguration"

export class $BlockStateConfiguration implements $FeatureConfiguration {
static readonly "CODEC": $Codec<$BlockStateConfiguration>
readonly "state": $BlockState

constructor(blockState0: $BlockState$$Type)

public "getFeatures"(): $Stream<$ConfiguredFeature<any, any>>
get "features"(): $Stream<$ConfiguredFeature<any, any>>
}
}

declare module "net.minecraft.world.level.levelgen.feature.configurations.RandomPatchConfiguration" {
import { $ConfiguredFeature } from "net.minecraft.world.level.levelgen.feature.ConfiguredFeature"
import { $Codec } from "com.mojang.serialization.Codec"
import { $Holder, $Holder$$Type } from "net.minecraft.core.Holder"
import { $Stream } from "java.util.stream.Stream"
import { $PlacedFeature, $PlacedFeature$$Type } from "net.minecraft.world.level.levelgen.placement.PlacedFeature"
import { $Record } from "java.lang.Record"
import { $FeatureConfiguration } from "net.minecraft.world.level.levelgen.feature.configurations.FeatureConfiguration"

export class $RandomPatchConfiguration extends $Record implements $FeatureConfiguration {
static readonly "CODEC": $Codec<$RandomPatchConfiguration>

constructor(int0: integer, int1: integer, int2: integer, holder3: $Holder$$Type<$PlacedFeature$$Type>)

public "feature"(): $Holder<$PlacedFeature>
public "getFeatures"(): $Stream<$ConfiguredFeature<any, any>>
public "tries"(): integer
public "xzSpread"(): integer
public "ySpread"(): integer
get "features"(): $Stream<$ConfiguredFeature<any, any>>
}
}

declare module "net.minecraft.world.level.levelgen.feature.configurations.ReplaceBlockConfiguration" {
import { $List, $List$$Type } from "java.util.List"
import { $ConfiguredFeature } from "net.minecraft.world.level.levelgen.feature.ConfiguredFeature"
import { $Codec } from "com.mojang.serialization.Codec"
import { $Stream } from "java.util.stream.Stream"
import { $OreConfiguration$TargetBlockState, $OreConfiguration$TargetBlockState$$Type } from "net.minecraft.world.level.levelgen.feature.configurations.OreConfiguration$TargetBlockState"
import { $BlockState$$Type } from "net.minecraft.world.level.block.state.BlockState"
import { $FeatureConfiguration } from "net.minecraft.world.level.levelgen.feature.configurations.FeatureConfiguration"

export class $ReplaceBlockConfiguration implements $FeatureConfiguration {
static readonly "CODEC": $Codec<$ReplaceBlockConfiguration>
readonly "targetStates": $List<$OreConfiguration$TargetBlockState>

constructor(blockState0: $BlockState$$Type, blockState1: $BlockState$$Type)
constructor(list0: $List$$Type<$OreConfiguration$TargetBlockState$$Type>)

public "getFeatures"(): $Stream<$ConfiguredFeature<any, any>>
get "features"(): $Stream<$ConfiguredFeature<any, any>>
}
}

declare module "net.minecraft.world.level.levelgen.feature.foliageplacers.BushFoliagePlacer" {
import { $BlobFoliagePlacer } from "net.minecraft.world.level.levelgen.feature.foliageplacers.BlobFoliagePlacer"
import { $Codec } from "com.mojang.serialization.Codec"
import { $IntProvider$$Type } from "net.minecraft.util.valueproviders.IntProvider"

export class $BushFoliagePlacer extends $BlobFoliagePlacer {
static readonly "CODEC": $Codec<$BushFoliagePlacer>

constructor(intProvider0: $IntProvider$$Type, intProvider1: $IntProvider$$Type, int2: integer)

}
}

declare module "net.minecraft.world.level.levelgen.feature.foliageplacers.FoliagePlacer$FoliageAttachment" {
import { $BlockPos, $BlockPos$$Type } from "net.minecraft.core.BlockPos"

export class $FoliagePlacer$FoliageAttachment {
constructor(blockPos0: $BlockPos$$Type, int1: integer, boolean2: boolean)

public "doubleTrunk"(): boolean
public "pos"(): $BlockPos
public "radiusOffset"(): integer
}
}

declare module "net.minecraft.world.level.levelgen.feature.MultifaceGrowthFeature" {
import { $Feature } from "net.minecraft.world.level.levelgen.feature.Feature"
import { $List$$Type } from "java.util.List"
import { $Codec$$Type } from "com.mojang.serialization.Codec"
import { $WorldGenLevel$$Type } from "net.minecraft.world.level.WorldGenLevel"
import { $BlockPos$$Type } from "net.minecraft.core.BlockPos"
import { $Direction$$Type } from "net.minecraft.core.Direction"
import { $BlockState$$Type } from "net.minecraft.world.level.block.state.BlockState"
import { $MultifaceGrowthConfiguration, $MultifaceGrowthConfiguration$$Type } from "net.minecraft.world.level.levelgen.feature.configurations.MultifaceGrowthConfiguration"
import { $RandomSource$$Type } from "net.minecraft.util.RandomSource"

export class $MultifaceGrowthFeature extends $Feature<$MultifaceGrowthConfiguration> {
constructor(codec0: $Codec$$Type<$MultifaceGrowthConfiguration$$Type>)

public static "placeGrowthIfPossible"(worldGenLevel0: $WorldGenLevel$$Type, blockPos1: $BlockPos$$Type, blockState2: $BlockState$$Type, multifaceGrowthConfiguration3: $MultifaceGrowthConfiguration$$Type, randomSource4: $RandomSource$$Type, list5: $List$$Type<$Direction$$Type>): boolean
}
}

declare module "net.minecraft.world.level.levelgen.feature.configurations.SculkPatchConfiguration" {
import { $ConfiguredFeature } from "net.minecraft.world.level.levelgen.feature.ConfiguredFeature"
import { $Codec } from "com.mojang.serialization.Codec"
import { $Stream } from "java.util.stream.Stream"
import { $IntProvider, $IntProvider$$Type } from "net.minecraft.util.valueproviders.IntProvider"
import { $Record } from "java.lang.Record"
import { $FeatureConfiguration } from "net.minecraft.world.level.levelgen.feature.configurations.FeatureConfiguration"

export class $SculkPatchConfiguration extends $Record implements $FeatureConfiguration {
static readonly "CODEC": $Codec<$SculkPatchConfiguration>

constructor(int0: integer, int1: integer, int2: integer, int3: integer, int4: integer, intProvider5: $IntProvider$$Type, float6: float)

public "amountPerCharge"(): integer
public "catalystChance"(): float
public "chargeCount"(): integer
public "extraRareGrowths"(): $IntProvider
public "getFeatures"(): $Stream<$ConfiguredFeature<any, any>>
public "growthRounds"(): integer
public "spreadAttempts"(): integer
public "spreadRounds"(): integer
get "features"(): $Stream<$ConfiguredFeature<any, any>>
}
}

declare module "net.minecraft.world.level.levelgen.feature.WeepingVinesFeature" {
import { $NoneFeatureConfiguration, $NoneFeatureConfiguration$$Type } from "net.minecraft.world.level.levelgen.feature.configurations.NoneFeatureConfiguration"
import { $Feature } from "net.minecraft.world.level.levelgen.feature.Feature"
import { $Codec$$Type } from "com.mojang.serialization.Codec"
import { $LevelAccessor$$Type } from "net.minecraft.world.level.LevelAccessor"
import { $RandomSource$$Type } from "net.minecraft.util.RandomSource"
import { $BlockPos$MutableBlockPos$$Type } from "net.minecraft.core.BlockPos$MutableBlockPos"

export class $WeepingVinesFeature extends $Feature<$NoneFeatureConfiguration> {
constructor(codec0: $Codec$$Type<$NoneFeatureConfiguration$$Type>)

public static "placeWeepingVinesColumn"(levelAccessor0: $LevelAccessor$$Type, randomSource1: $RandomSource$$Type, mutableBlockPos2: $BlockPos$MutableBlockPos$$Type, int3: integer, int4: integer, int5: integer): void
}
}

declare module "net.minecraft.world.level.levelgen.feature.SpikeFeature" {
import { $Feature } from "net.minecraft.world.level.levelgen.feature.Feature"
import { $List } from "java.util.List"
import { $Codec$$Type } from "com.mojang.serialization.Codec"
import { $WorldGenLevel$$Type } from "net.minecraft.world.level.WorldGenLevel"
import { $SpikeConfiguration, $SpikeConfiguration$$Type } from "net.minecraft.world.level.levelgen.feature.configurations.SpikeConfiguration"
import { $SpikeFeature$EndSpike } from "net.minecraft.world.level.levelgen.feature.SpikeFeature$EndSpike"

export class $SpikeFeature extends $Feature<$SpikeConfiguration> {
static readonly "NUMBER_OF_SPIKES": integer

constructor(codec0: $Codec$$Type<$SpikeConfiguration$$Type>)

public static "getSpikesForLevel"(worldGenLevel0: $WorldGenLevel$$Type): $List<$SpikeFeature$EndSpike>
}
}

declare module "net.minecraft.world.level.levelgen.feature.VegetationPatchFeature" {
import { $Feature } from "net.minecraft.world.level.levelgen.feature.Feature"
import { $Codec$$Type } from "com.mojang.serialization.Codec"
import { $VegetationPatchConfiguration, $VegetationPatchConfiguration$$Type } from "net.minecraft.world.level.levelgen.feature.configurations.VegetationPatchConfiguration"

export class $VegetationPatchFeature extends $Feature<$VegetationPatchConfiguration> {
constructor(codec0: $Codec$$Type<$VegetationPatchConfiguration$$Type>)

}
}

declare module "net.minecraft.world.level.levelgen.feature.configurations.LargeDripstoneConfiguration" {
import { $ConfiguredFeature } from "net.minecraft.world.level.levelgen.feature.ConfiguredFeature"
import { $Codec } from "com.mojang.serialization.Codec"
import { $Stream } from "java.util.stream.Stream"
import { $FloatProvider, $FloatProvider$$Type } from "net.minecraft.util.valueproviders.FloatProvider"
import { $IntProvider, $IntProvider$$Type } from "net.minecraft.util.valueproviders.IntProvider"
import { $FeatureConfiguration } from "net.minecraft.world.level.levelgen.feature.configurations.FeatureConfiguration"

export class $LargeDripstoneConfiguration implements $FeatureConfiguration {
static readonly "CODEC": $Codec<$LargeDripstoneConfiguration>
readonly "columnRadius": $IntProvider
readonly "floorToCeilingSearchRange": integer
readonly "heightScale": $FloatProvider
readonly "maxColumnRadiusToCaveHeightRatio": float
readonly "minBluntnessForWind": float
readonly "minRadiusForWind": integer
readonly "stalactiteBluntness": $FloatProvider
readonly "stalagmiteBluntness": $FloatProvider
readonly "windSpeed": $FloatProvider

constructor(int0: integer, intProvider1: $IntProvider$$Type, floatProvider2: $FloatProvider$$Type, float3: float, floatProvider4: $FloatProvider$$Type, floatProvider5: $FloatProvider$$Type, floatProvider6: $FloatProvider$$Type, int7: integer, float8: float)

public "getFeatures"(): $Stream<$ConfiguredFeature<any, any>>
get "features"(): $Stream<$ConfiguredFeature<any, any>>
}
}

declare module "net.minecraft.world.level.levelgen.feature.NoOpFeature" {
import { $NoneFeatureConfiguration, $NoneFeatureConfiguration$$Type } from "net.minecraft.world.level.levelgen.feature.configurations.NoneFeatureConfiguration"
import { $Feature } from "net.minecraft.world.level.levelgen.feature.Feature"
import { $Codec$$Type } from "com.mojang.serialization.Codec"

export class $NoOpFeature extends $Feature<$NoneFeatureConfiguration> {
constructor(codec0: $Codec$$Type<$NoneFeatureConfiguration$$Type>)

}
}

declare module "net.minecraft.world.level.levelgen.feature.DesertWellFeature" {
import { $NoneFeatureConfiguration, $NoneFeatureConfiguration$$Type } from "net.minecraft.world.level.levelgen.feature.configurations.NoneFeatureConfiguration"
import { $Feature } from "net.minecraft.world.level.levelgen.feature.Feature"
import { $Codec$$Type } from "com.mojang.serialization.Codec"

export class $DesertWellFeature extends $Feature<$NoneFeatureConfiguration> {
constructor(codec0: $Codec$$Type<$NoneFeatureConfiguration$$Type>)

}
}

declare module "net.minecraft.world.level.levelgen.feature.UnderwaterMagmaFeature" {
import { $Feature } from "net.minecraft.world.level.levelgen.feature.Feature"
import { $Codec$$Type } from "com.mojang.serialization.Codec"
import { $UnderwaterMagmaConfiguration, $UnderwaterMagmaConfiguration$$Type } from "net.minecraft.world.level.levelgen.feature.configurations.UnderwaterMagmaConfiguration"

export class $UnderwaterMagmaFeature extends $Feature<$UnderwaterMagmaConfiguration> {
constructor(codec0: $Codec$$Type<$UnderwaterMagmaConfiguration$$Type>)

}
}

declare module "net.minecraft.world.level.levelgen.feature.foliageplacers.FoliagePlacer$FoliageSetter" {
import { $BlockPos$$Type } from "net.minecraft.core.BlockPos"
import { $BlockState$$Type } from "net.minecraft.world.level.block.state.BlockState"

export interface $FoliagePlacer$FoliageSetter {
"isSet"(blockPos0: $BlockPos$$Type): boolean
"set"(blockPos0: $BlockPos$$Type, blockState1: $BlockState$$Type): void
}

export namespace $FoliagePlacer$FoliageSetter {
const probejs$$marker: never
}
export abstract class $FoliagePlacer$FoliageSetter$$Static implements $FoliagePlacer$FoliageSetter {
}
}

declare module "net.minecraft.world.level.levelgen.feature.configurations.OreConfiguration$TargetBlockState" {
import { $Codec } from "com.mojang.serialization.Codec"
import { $BlockState } from "net.minecraft.world.level.block.state.BlockState"
import { $RuleTest } from "net.minecraft.world.level.levelgen.structure.templatesystem.RuleTest"

export class $OreConfiguration$TargetBlockState {
static readonly "CODEC": $Codec<$OreConfiguration$TargetBlockState>
readonly "state": $BlockState
readonly "target": $RuleTest

}
}

declare module "net.minecraft.world.level.levelgen.feature.configurations.TwistingVinesConfig" {
import { $ConfiguredFeature } from "net.minecraft.world.level.levelgen.feature.ConfiguredFeature"
import { $Codec } from "com.mojang.serialization.Codec"
import { $Stream } from "java.util.stream.Stream"
import { $Record } from "java.lang.Record"
import { $FeatureConfiguration } from "net.minecraft.world.level.levelgen.feature.configurations.FeatureConfiguration"

export class $TwistingVinesConfig extends $Record implements $FeatureConfiguration {
static readonly "CODEC": $Codec<$TwistingVinesConfig>

constructor(int0: integer, int1: integer, int2: integer)

public "getFeatures"(): $Stream<$ConfiguredFeature<any, any>>
public "maxHeight"(): integer
public "spreadHeight"(): integer
public "spreadWidth"(): integer
get "features"(): $Stream<$ConfiguredFeature<any, any>>
}
}

declare module "net.minecraft.world.level.levelgen.feature.DeltaFeature" {
import { $Feature } from "net.minecraft.world.level.levelgen.feature.Feature"
import { $Codec$$Type } from "com.mojang.serialization.Codec"
import { $DeltaFeatureConfiguration, $DeltaFeatureConfiguration$$Type } from "net.minecraft.world.level.levelgen.feature.configurations.DeltaFeatureConfiguration"

export class $DeltaFeature extends $Feature<$DeltaFeatureConfiguration> {
constructor(codec0: $Codec$$Type<$DeltaFeatureConfiguration$$Type>)

}
}

declare module "net.minecraft.world.level.levelgen.feature.RootSystemFeature" {
import { $Feature } from "net.minecraft.world.level.levelgen.feature.Feature"
import { $Codec$$Type } from "com.mojang.serialization.Codec"
import { $RootSystemConfiguration, $RootSystemConfiguration$$Type } from "net.minecraft.world.level.levelgen.feature.configurations.RootSystemConfiguration"

export class $RootSystemFeature extends $Feature<$RootSystemConfiguration> {
constructor(codec0: $Codec$$Type<$RootSystemConfiguration$$Type>)

}
}

declare module "net.minecraft.world.level.levelgen.feature.BlockBlobFeature" {
import { $Feature } from "net.minecraft.world.level.levelgen.feature.Feature"
import { $Codec$$Type } from "com.mojang.serialization.Codec"
import { $BlockStateConfiguration, $BlockStateConfiguration$$Type } from "net.minecraft.world.level.levelgen.feature.configurations.BlockStateConfiguration"

export class $BlockBlobFeature extends $Feature<$BlockStateConfiguration> {
constructor(codec0: $Codec$$Type<$BlockStateConfiguration$$Type>)

}
}

declare module "net.minecraft.world.level.levelgen.feature.configurations.NetherForestVegetationConfig" {
import { $BlockStateProvider$$Type } from "net.minecraft.world.level.levelgen.feature.stateproviders.BlockStateProvider"
import { $ConfiguredFeature } from "net.minecraft.world.level.levelgen.feature.ConfiguredFeature"
import { $Codec } from "com.mojang.serialization.Codec"
import { $Stream } from "java.util.stream.Stream"
import { $BlockPileConfiguration } from "net.minecraft.world.level.levelgen.feature.configurations.BlockPileConfiguration"

export class $NetherForestVegetationConfig extends $BlockPileConfiguration {
static readonly "CODEC": $Codec<$NetherForestVegetationConfig>
readonly "spreadHeight": integer
readonly "spreadWidth": integer

constructor(blockStateProvider0: $BlockStateProvider$$Type, int1: integer, int2: integer)

public "getFeatures"(): $Stream<$ConfiguredFeature<any, any>>
get "features"(): $Stream<$ConfiguredFeature<any, any>>
}
}

declare module "net.minecraft.world.level.levelgen.feature.foliageplacers.SpruceFoliagePlacer" {
import { $FoliagePlacer } from "net.minecraft.world.level.levelgen.feature.foliageplacers.FoliagePlacer"
import { $Codec } from "com.mojang.serialization.Codec"
import { $IntProvider$$Type } from "net.minecraft.util.valueproviders.IntProvider"

export class $SpruceFoliagePlacer extends $FoliagePlacer {
static readonly "CODEC": $Codec<$SpruceFoliagePlacer>

constructor(intProvider0: $IntProvider$$Type, intProvider1: $IntProvider$$Type, intProvider2: $IntProvider$$Type)

}
}

declare module "net.minecraft.world.level.levelgen.feature.treedecorators.CocoaDecorator" {
import { $Codec } from "com.mojang.serialization.Codec"
import { $TreeDecorator } from "net.minecraft.world.level.levelgen.feature.treedecorators.TreeDecorator"

export class $CocoaDecorator extends $TreeDecorator {
static readonly "CODEC": $Codec<$CocoaDecorator>

constructor(float0: float)

}
}

declare module "net.minecraft.world.level.levelgen.feature.WaterloggedVegetationPatchFeature" {
import { $Codec$$Type } from "com.mojang.serialization.Codec"
import { $VegetationPatchConfiguration$$Type } from "net.minecraft.world.level.levelgen.feature.configurations.VegetationPatchConfiguration"
import { $VegetationPatchFeature } from "net.minecraft.world.level.levelgen.feature.VegetationPatchFeature"

export class $WaterloggedVegetationPatchFeature extends $VegetationPatchFeature {
constructor(codec0: $Codec$$Type<$VegetationPatchConfiguration$$Type>)

}
}

declare module "net.minecraft.world.level.levelgen.feature.configurations.RootSystemConfiguration" {
import { $TagKey, $TagKey$$Type } from "net.minecraft.tags.TagKey"
import { $BlockStateProvider, $BlockStateProvider$$Type } from "net.minecraft.world.level.levelgen.feature.stateproviders.BlockStateProvider"
import { $ConfiguredFeature } from "net.minecraft.world.level.levelgen.feature.ConfiguredFeature"
import { $Codec } from "com.mojang.serialization.Codec"
import { $Holder, $Holder$$Type } from "net.minecraft.core.Holder"
import { $Stream } from "java.util.stream.Stream"
import { $PlacedFeature, $PlacedFeature$$Type } from "net.minecraft.world.level.levelgen.placement.PlacedFeature"
import { $Block, $Block$$Type } from "net.minecraft.world.level.block.Block"
import { $BlockPredicate, $BlockPredicate$$Type } from "net.minecraft.world.level.levelgen.blockpredicates.BlockPredicate"
import { $FeatureConfiguration } from "net.minecraft.world.level.levelgen.feature.configurations.FeatureConfiguration"

export class $RootSystemConfiguration implements $FeatureConfiguration {
static readonly "CODEC": $Codec<$RootSystemConfiguration>
readonly "allowedTreePosition": $BlockPredicate
readonly "allowedVerticalWaterForTree": integer
readonly "hangingRootPlacementAttempts": integer
readonly "hangingRootRadius": integer
readonly "hangingRootStateProvider": $BlockStateProvider
readonly "hangingRootsVerticalSpan": integer
readonly "requiredVerticalSpaceForTree": integer
readonly "rootColumnMaxHeight": integer
readonly "rootPlacementAttempts": integer
readonly "rootRadius": integer
readonly "rootReplaceable": $TagKey<$Block>
readonly "rootStateProvider": $BlockStateProvider
readonly "treeFeature": $Holder<$PlacedFeature>

constructor(holder0: $Holder$$Type<$PlacedFeature$$Type>, int1: integer, int2: integer, tagKey3: $TagKey$$Type<$Block$$Type>, blockStateProvider4: $BlockStateProvider$$Type, int5: integer, int6: integer, int7: integer, int8: integer, blockStateProvider9: $BlockStateProvider$$Type, int10: integer, int11: integer, blockPredicate12: $BlockPredicate$$Type)

public "getFeatures"(): $Stream<$ConfiguredFeature<any, any>>
get "features"(): $Stream<$ConfiguredFeature<any, any>>
}
}

declare module "net.minecraft.world.level.levelgen.feature.SimpleRandomSelectorFeature" {
import { $Feature } from "net.minecraft.world.level.levelgen.feature.Feature"
import { $Codec$$Type } from "com.mojang.serialization.Codec"
import { $SimpleRandomFeatureConfiguration, $SimpleRandomFeatureConfiguration$$Type } from "net.minecraft.world.level.levelgen.feature.configurations.SimpleRandomFeatureConfiguration"

export class $SimpleRandomSelectorFeature extends $Feature<$SimpleRandomFeatureConfiguration> {
constructor(codec0: $Codec$$Type<$SimpleRandomFeatureConfiguration$$Type>)

}
}

declare module "net.minecraft.world.level.levelgen.feature.TreeFeature" {
import { $Feature } from "net.minecraft.world.level.levelgen.feature.Feature"
import { $Codec$$Type } from "com.mojang.serialization.Codec"
import { $WorldGenLevel$$Type } from "net.minecraft.world.level.WorldGenLevel"
import { $FoliagePlacer$FoliageSetter$$Type } from "net.minecraft.world.level.levelgen.feature.foliageplacers.FoliagePlacer$FoliageSetter"
import { $BlockPos$$Type } from "net.minecraft.core.BlockPos"
import { $LevelSimulatedReader$$Type } from "net.minecraft.world.level.LevelSimulatedReader"
import { $BiConsumer$$Type } from "java.util.function.BiConsumer"
import { $BlockState$$Type } from "net.minecraft.world.level.block.state.BlockState"
import { $LevelWriter$$Type } from "net.minecraft.world.level.LevelWriter"
import { $RandomSource$$Type } from "net.minecraft.util.RandomSource"
import { $TreeConfiguration, $TreeConfiguration$$Type } from "net.minecraft.world.level.levelgen.feature.configurations.TreeConfiguration"

export class $TreeFeature extends $Feature<$TreeConfiguration> {
constructor(codec0: $Codec$$Type<$TreeConfiguration$$Type>)

public "doPlace"(worldGenLevel0: $WorldGenLevel$$Type, randomSource1: $RandomSource$$Type, blockPos2: $BlockPos$$Type, biConsumer3: $BiConsumer$$Type<$BlockPos$$Type, $BlockState$$Type>, biConsumer4: $BiConsumer$$Type<$BlockPos$$Type, $BlockState$$Type>, foliageSetter5: $FoliagePlacer$FoliageSetter$$Type, treeConfiguration6: $TreeConfiguration$$Type): boolean
public static "isAirOrLeaves"(levelSimulatedReader0: $LevelSimulatedReader$$Type, blockPos1: $BlockPos$$Type): boolean
public static "setBlockKnownShape"(levelWriter0: $LevelWriter$$Type, blockPos1: $BlockPos$$Type, blockState2: $BlockState$$Type): void
public static "validTreePos"(levelSimulatedReader0: $LevelSimulatedReader$$Type, blockPos1: $BlockPos$$Type): boolean
}
}

declare module "net.minecraft.world.level.levelgen.feature.HugeFungusFeature" {
import { $Feature } from "net.minecraft.world.level.levelgen.feature.Feature"
import { $Codec$$Type } from "com.mojang.serialization.Codec"
import { $HugeFungusConfiguration, $HugeFungusConfiguration$$Type } from "net.minecraft.world.level.levelgen.feature.HugeFungusConfiguration"

export class $HugeFungusFeature extends $Feature<$HugeFungusConfiguration> {
constructor(codec0: $Codec$$Type<$HugeFungusConfiguration$$Type>)

}
}

declare module "net.minecraft.world.level.levelgen.feature.ChorusPlantFeature" {
import { $NoneFeatureConfiguration, $NoneFeatureConfiguration$$Type } from "net.minecraft.world.level.levelgen.feature.configurations.NoneFeatureConfiguration"
import { $Feature } from "net.minecraft.world.level.levelgen.feature.Feature"
import { $Codec$$Type } from "com.mojang.serialization.Codec"

export class $ChorusPlantFeature extends $Feature<$NoneFeatureConfiguration> {
constructor(codec0: $Codec$$Type<$NoneFeatureConfiguration$$Type>)

}
}

declare module "net.minecraft.world.level.levelgen.feature.DripstoneClusterFeature" {
import { $Feature } from "net.minecraft.world.level.levelgen.feature.Feature"
import { $Codec$$Type } from "com.mojang.serialization.Codec"
import { $DripstoneClusterConfiguration, $DripstoneClusterConfiguration$$Type } from "net.minecraft.world.level.levelgen.feature.configurations.DripstoneClusterConfiguration"

export class $DripstoneClusterFeature extends $Feature<$DripstoneClusterConfiguration> {
constructor(codec0: $Codec$$Type<$DripstoneClusterConfiguration$$Type>)

}
}

declare module "net.minecraft.world.level.levelgen.feature.configurations.CountConfiguration" {
import { $ConfiguredFeature } from "net.minecraft.world.level.levelgen.feature.ConfiguredFeature"
import { $Codec } from "com.mojang.serialization.Codec"
import { $Stream } from "java.util.stream.Stream"
import { $IntProvider, $IntProvider$$Type } from "net.minecraft.util.valueproviders.IntProvider"
import { $FeatureConfiguration } from "net.minecraft.world.level.levelgen.feature.configurations.FeatureConfiguration"

export class $CountConfiguration implements $FeatureConfiguration {
static readonly "CODEC": $Codec<$CountConfiguration>

constructor(int0: integer)
constructor(intProvider0: $IntProvider$$Type)

public "count"(): $IntProvider
public "getFeatures"(): $Stream<$ConfiguredFeature<any, any>>
get "features"(): $Stream<$ConfiguredFeature<any, any>>
}
}

declare module "net.minecraft.world.level.levelgen.feature.configurations.PointedDripstoneConfiguration" {
import { $ConfiguredFeature } from "net.minecraft.world.level.levelgen.feature.ConfiguredFeature"
import { $Codec } from "com.mojang.serialization.Codec"
import { $Stream } from "java.util.stream.Stream"
import { $FeatureConfiguration } from "net.minecraft.world.level.levelgen.feature.configurations.FeatureConfiguration"

export class $PointedDripstoneConfiguration implements $FeatureConfiguration {
static readonly "CODEC": $Codec<$PointedDripstoneConfiguration>
readonly "chanceOfDirectionalSpread": float
readonly "chanceOfSpreadRadius2": float
readonly "chanceOfSpreadRadius3": float
readonly "chanceOfTallerDripstone": float

constructor(float0: float, float1: float, float2: float, float3: float)

public "getFeatures"(): $Stream<$ConfiguredFeature<any, any>>
get "features"(): $Stream<$ConfiguredFeature<any, any>>
}
}

declare module "net.minecraft.world.level.levelgen.feature.LakeFeature$Configuration" {
import { $BlockStateProvider, $BlockStateProvider$$Type } from "net.minecraft.world.level.levelgen.feature.stateproviders.BlockStateProvider"
import { $ConfiguredFeature } from "net.minecraft.world.level.levelgen.feature.ConfiguredFeature"
import { $Codec } from "com.mojang.serialization.Codec"
import { $Stream } from "java.util.stream.Stream"
import { $Record } from "java.lang.Record"
import { $FeatureConfiguration } from "net.minecraft.world.level.levelgen.feature.configurations.FeatureConfiguration"

export class $LakeFeature$Configuration extends $Record implements $FeatureConfiguration {
static readonly "CODEC": $Codec<$LakeFeature$Configuration>

constructor(blockStateProvider0: $BlockStateProvider$$Type, blockStateProvider1: $BlockStateProvider$$Type)

public "barrier"(): $BlockStateProvider
public "fluid"(): $BlockStateProvider
public "getFeatures"(): $Stream<$ConfiguredFeature<any, any>>
get "features"(): $Stream<$ConfiguredFeature<any, any>>
}
}

declare module "net.minecraft.world.level.levelgen.feature.BlueIceFeature" {
import { $NoneFeatureConfiguration, $NoneFeatureConfiguration$$Type } from "net.minecraft.world.level.levelgen.feature.configurations.NoneFeatureConfiguration"
import { $Feature } from "net.minecraft.world.level.levelgen.feature.Feature"
import { $Codec$$Type } from "com.mojang.serialization.Codec"

export class $BlueIceFeature extends $Feature<$NoneFeatureConfiguration> {
constructor(codec0: $Codec$$Type<$NoneFeatureConfiguration$$Type>)

}
}

declare module "net.minecraft.world.level.levelgen.feature.foliageplacers.AcaciaFoliagePlacer" {
import { $FoliagePlacer } from "net.minecraft.world.level.levelgen.feature.foliageplacers.FoliagePlacer"
import { $Codec } from "com.mojang.serialization.Codec"
import { $IntProvider$$Type } from "net.minecraft.util.valueproviders.IntProvider"

export class $AcaciaFoliagePlacer extends $FoliagePlacer {
static readonly "CODEC": $Codec<$AcaciaFoliagePlacer>

constructor(intProvider0: $IntProvider$$Type, intProvider1: $IntProvider$$Type)

}
}

declare module "net.minecraft.world.level.levelgen.feature.configurations.SpringConfiguration" {
import { $ConfiguredFeature } from "net.minecraft.world.level.levelgen.feature.ConfiguredFeature"
import { $Codec } from "com.mojang.serialization.Codec"
import { $Stream } from "java.util.stream.Stream"
import { $FluidState, $FluidState$$Type } from "net.minecraft.world.level.material.FluidState"
import { $HolderSet, $HolderSet$$Type } from "net.minecraft.core.HolderSet"
import { $Block, $Block$$Type } from "net.minecraft.world.level.block.Block"
import { $FeatureConfiguration } from "net.minecraft.world.level.levelgen.feature.configurations.FeatureConfiguration"

export class $SpringConfiguration implements $FeatureConfiguration {
static readonly "CODEC": $Codec<$SpringConfiguration>
readonly "holeCount": integer
readonly "requiresBlockBelow": boolean
readonly "rockCount": integer
readonly "state": $FluidState
readonly "validBlocks": $HolderSet<$Block>

constructor(fluidState0: $FluidState$$Type, boolean1: boolean, int2: integer, int3: integer, holderSet4: $HolderSet$$Type<$Block$$Type>)

public "getFeatures"(): $Stream<$ConfiguredFeature<any, any>>
get "features"(): $Stream<$ConfiguredFeature<any, any>>
}
}

declare module "net.minecraft.world.level.levelgen.feature.configurations.RandomFeatureConfiguration" {
import { $WeightedPlacedFeature, $WeightedPlacedFeature$$Type } from "net.minecraft.world.level.levelgen.feature.WeightedPlacedFeature"
import { $List, $List$$Type } from "java.util.List"
import { $ConfiguredFeature } from "net.minecraft.world.level.levelgen.feature.ConfiguredFeature"
import { $Codec } from "com.mojang.serialization.Codec"
import { $Holder, $Holder$$Type } from "net.minecraft.core.Holder"
import { $Stream } from "java.util.stream.Stream"
import { $PlacedFeature, $PlacedFeature$$Type } from "net.minecraft.world.level.levelgen.placement.PlacedFeature"
import { $FeatureConfiguration } from "net.minecraft.world.level.levelgen.feature.configurations.FeatureConfiguration"

export class $RandomFeatureConfiguration implements $FeatureConfiguration {
static readonly "CODEC": $Codec<$RandomFeatureConfiguration>
readonly "defaultFeature": $Holder<$PlacedFeature>
readonly "features": $List<$WeightedPlacedFeature>

constructor(list0: $List$$Type<$WeightedPlacedFeature$$Type>, holder1: $Holder$$Type<$PlacedFeature$$Type>)

public "getFeatures"(): $Stream<$ConfiguredFeature<any, any>>
}
}

declare module "net.minecraft.world.level.levelgen.feature.configurations.OreConfiguration" {
import { $List, $List$$Type } from "java.util.List"
import { $ConfiguredFeature } from "net.minecraft.world.level.levelgen.feature.ConfiguredFeature"
import { $Codec } from "com.mojang.serialization.Codec"
import { $Stream } from "java.util.stream.Stream"
import { $OreConfiguration$TargetBlockState, $OreConfiguration$TargetBlockState$$Type } from "net.minecraft.world.level.levelgen.feature.configurations.OreConfiguration$TargetBlockState"
import { $BlockState$$Type } from "net.minecraft.world.level.block.state.BlockState"
import { $RuleTest$$Type } from "net.minecraft.world.level.levelgen.structure.templatesystem.RuleTest"
import { $FeatureConfiguration } from "net.minecraft.world.level.levelgen.feature.configurations.FeatureConfiguration"

export class $OreConfiguration implements $FeatureConfiguration {
static readonly "CODEC": $Codec<$OreConfiguration>
readonly "discardChanceOnAirExposure": float
readonly "size": integer
readonly "targetStates": $List<$OreConfiguration$TargetBlockState>

constructor(list0: $List$$Type<$OreConfiguration$TargetBlockState$$Type>, int1: integer)
constructor(list0: $List$$Type<$OreConfiguration$TargetBlockState$$Type>, int1: integer, float2: float)
constructor(ruleTest0: $RuleTest$$Type, blockState1: $BlockState$$Type, int2: integer, float3: float)
constructor(ruleTest0: $RuleTest$$Type, blockState1: $BlockState$$Type, int2: integer)

public "getFeatures"(): $Stream<$ConfiguredFeature<any, any>>
public static "target"(ruleTest0: $RuleTest$$Type, blockState1: $BlockState$$Type): $OreConfiguration$TargetBlockState
get "features"(): $Stream<$ConfiguredFeature<any, any>>
}
}

declare module "net.minecraft.world.level.levelgen.feature.SeaPickleFeature" {
import { $Feature } from "net.minecraft.world.level.levelgen.feature.Feature"
import { $CountConfiguration, $CountConfiguration$$Type } from "net.minecraft.world.level.levelgen.feature.configurations.CountConfiguration"
import { $Codec$$Type } from "com.mojang.serialization.Codec"

export class $SeaPickleFeature extends $Feature<$CountConfiguration> {
constructor(codec0: $Codec$$Type<$CountConfiguration$$Type>)

}
}

declare module "net.minecraft.world.level.levelgen.feature.VinesFeature" {
import { $NoneFeatureConfiguration, $NoneFeatureConfiguration$$Type } from "net.minecraft.world.level.levelgen.feature.configurations.NoneFeatureConfiguration"
import { $Feature } from "net.minecraft.world.level.levelgen.feature.Feature"
import { $Codec$$Type } from "com.mojang.serialization.Codec"

export class $VinesFeature extends $Feature<$NoneFeatureConfiguration> {
constructor(codec0: $Codec$$Type<$NoneFeatureConfiguration$$Type>)

}
}

declare module "net.minecraft.world.level.levelgen.feature.foliageplacers.CherryFoliagePlacer" {
import { $FoliagePlacer } from "net.minecraft.world.level.levelgen.feature.foliageplacers.FoliagePlacer"
import { $Codec } from "com.mojang.serialization.Codec"
import { $IntProvider$$Type } from "net.minecraft.util.valueproviders.IntProvider"

export class $CherryFoliagePlacer extends $FoliagePlacer {
static readonly "CODEC": $Codec<$CherryFoliagePlacer>

constructor(intProvider0: $IntProvider$$Type, intProvider1: $IntProvider$$Type, intProvider2: $IntProvider$$Type, float3: float, float4: float, float5: float, float6: float)

}
}

declare module "net.minecraft.world.level.levelgen.feature.stateproviders.NoiseBasedStateProvider" {
import { $BlockStateProvider } from "net.minecraft.world.level.levelgen.feature.stateproviders.BlockStateProvider"

export class $NoiseBasedStateProvider extends $BlockStateProvider {
}
}

declare module "net.minecraft.world.level.levelgen.feature.foliageplacers.FancyFoliagePlacer" {
import { $BlobFoliagePlacer } from "net.minecraft.world.level.levelgen.feature.foliageplacers.BlobFoliagePlacer"
import { $Codec } from "com.mojang.serialization.Codec"
import { $IntProvider$$Type } from "net.minecraft.util.valueproviders.IntProvider"

export class $FancyFoliagePlacer extends $BlobFoliagePlacer {
static readonly "CODEC": $Codec<$FancyFoliagePlacer>

constructor(intProvider0: $IntProvider$$Type, intProvider1: $IntProvider$$Type, int2: integer)

}
}

declare module "net.minecraft.world.level.levelgen.feature.foliageplacers.MegaPineFoliagePlacer" {
import { $FoliagePlacer } from "net.minecraft.world.level.levelgen.feature.foliageplacers.FoliagePlacer"
import { $Codec } from "com.mojang.serialization.Codec"
import { $IntProvider$$Type } from "net.minecraft.util.valueproviders.IntProvider"

export class $MegaPineFoliagePlacer extends $FoliagePlacer {
static readonly "CODEC": $Codec<$MegaPineFoliagePlacer>

constructor(intProvider0: $IntProvider$$Type, intProvider1: $IntProvider$$Type, intProvider2: $IntProvider$$Type)

}
}

declare module "net.minecraft.world.level.levelgen.feature.RandomPatchFeature" {
import { $Feature } from "net.minecraft.world.level.levelgen.feature.Feature"
import { $Codec$$Type } from "com.mojang.serialization.Codec"
import { $RandomPatchConfiguration, $RandomPatchConfiguration$$Type } from "net.minecraft.world.level.levelgen.feature.configurations.RandomPatchConfiguration"

export class $RandomPatchFeature extends $Feature<$RandomPatchConfiguration> {
constructor(codec0: $Codec$$Type<$RandomPatchConfiguration$$Type>)

}
}

declare module "net.minecraft.world.level.levelgen.feature.WeightedPlacedFeature" {
import { $ChunkGenerator$$Type } from "net.minecraft.world.level.chunk.ChunkGenerator"
import { $Codec } from "com.mojang.serialization.Codec"
import { $Holder, $Holder$$Type } from "net.minecraft.core.Holder"
import { $WorldGenLevel$$Type } from "net.minecraft.world.level.WorldGenLevel"
import { $BlockPos$$Type } from "net.minecraft.core.BlockPos"
import { $PlacedFeature, $PlacedFeature$$Type } from "net.minecraft.world.level.levelgen.placement.PlacedFeature"
import { $RandomSource$$Type } from "net.minecraft.util.RandomSource"

export class $WeightedPlacedFeature {
static readonly "CODEC": $Codec<$WeightedPlacedFeature>
readonly "chance": float
readonly "feature": $Holder<$PlacedFeature>

constructor(holder0: $Holder$$Type<$PlacedFeature$$Type>, float1: float)

public "place"(worldGenLevel0: $WorldGenLevel$$Type, chunkGenerator1: $ChunkGenerator$$Type, randomSource2: $RandomSource$$Type, blockPos3: $BlockPos$$Type): boolean
}
}

declare module "net.minecraft.world.level.levelgen.feature.configurations.UnderwaterMagmaConfiguration" {
import { $ConfiguredFeature } from "net.minecraft.world.level.levelgen.feature.ConfiguredFeature"
import { $Codec } from "com.mojang.serialization.Codec"
import { $Stream } from "java.util.stream.Stream"
import { $FeatureConfiguration } from "net.minecraft.world.level.levelgen.feature.configurations.FeatureConfiguration"

export class $UnderwaterMagmaConfiguration implements $FeatureConfiguration {
static readonly "CODEC": $Codec<$UnderwaterMagmaConfiguration>
readonly "floorSearchRange": integer
readonly "placementProbabilityPerValidPosition": float
readonly "placementRadiusAroundFloor": integer

constructor(int0: integer, int1: integer, float2: float)

public "getFeatures"(): $Stream<$ConfiguredFeature<any, any>>
get "features"(): $Stream<$ConfiguredFeature<any, any>>
}
}

declare module "net.minecraft.world.level.levelgen.feature.treedecorators.TrunkVineDecorator" {
import { $Codec } from "com.mojang.serialization.Codec"
import { $TreeDecorator } from "net.minecraft.world.level.levelgen.feature.treedecorators.TreeDecorator"

export class $TrunkVineDecorator extends $TreeDecorator {
static readonly "CODEC": $Codec<$TrunkVineDecorator>
static readonly "INSTANCE": $TrunkVineDecorator

constructor()

}
}

declare module "net.minecraft.world.level.levelgen.feature.configurations.ProbabilityFeatureConfiguration" {
import { $ConfiguredFeature } from "net.minecraft.world.level.levelgen.feature.ConfiguredFeature"
import { $Codec } from "com.mojang.serialization.Codec"
import { $Stream } from "java.util.stream.Stream"
import { $FeatureConfiguration } from "net.minecraft.world.level.levelgen.feature.configurations.FeatureConfiguration"

export class $ProbabilityFeatureConfiguration implements $FeatureConfiguration {
static readonly "CODEC": $Codec<$ProbabilityFeatureConfiguration>
readonly "probability": float

constructor(float0: float)

public "getFeatures"(): $Stream<$ConfiguredFeature<any, any>>
get "features"(): $Stream<$ConfiguredFeature<any, any>>
}
}

declare module "net.minecraft.world.level.levelgen.feature.stateproviders.DualNoiseProvider" {
import { $List$$Type } from "java.util.List"
import { $Codec } from "com.mojang.serialization.Codec"
import { $NormalNoise$NoiseParameters$$Type } from "net.minecraft.world.level.levelgen.synth.NormalNoise$NoiseParameters"
import { $BlockState$$Type } from "net.minecraft.world.level.block.state.BlockState"
import { $InclusiveRange$$Type } from "net.minecraft.util.InclusiveRange"
import { $NoiseProvider } from "net.minecraft.world.level.levelgen.feature.stateproviders.NoiseProvider"

export class $DualNoiseProvider extends $NoiseProvider {
static readonly "CODEC": $Codec<$DualNoiseProvider>

constructor(inclusiveRange0: $InclusiveRange$$Type<integer>, noiseParameters1: $NormalNoise$NoiseParameters$$Type, float2: float, long3: long, noiseParameters4: $NormalNoise$NoiseParameters$$Type, float5: float, list6: $List$$Type<$BlockState$$Type>)

}
}

declare module "net.minecraft.world.level.levelgen.feature.foliageplacers.BlobFoliagePlacer" {
import { $FoliagePlacer } from "net.minecraft.world.level.levelgen.feature.foliageplacers.FoliagePlacer"
import { $Codec } from "com.mojang.serialization.Codec"
import { $IntProvider$$Type } from "net.minecraft.util.valueproviders.IntProvider"

export class $BlobFoliagePlacer extends $FoliagePlacer {
static readonly "CODEC": $Codec<$BlobFoliagePlacer>

constructor(intProvider0: $IntProvider$$Type, intProvider1: $IntProvider$$Type, int2: integer)

}
}

declare module "net.minecraft.world.level.levelgen.feature.stateproviders.RuleBasedBlockStateProvider" {
import { $BlockStateProvider, $BlockStateProvider$$Type } from "net.minecraft.world.level.levelgen.feature.stateproviders.BlockStateProvider"
import { $List, $List$$Type } from "java.util.List"
import { $Codec } from "com.mojang.serialization.Codec"
import { $WorldGenLevel$$Type } from "net.minecraft.world.level.WorldGenLevel"
import { $BlockPos$$Type } from "net.minecraft.core.BlockPos"
import { $BlockState } from "net.minecraft.world.level.block.state.BlockState"
import { $RuleBasedBlockStateProvider$Rule, $RuleBasedBlockStateProvider$Rule$$Type } from "net.minecraft.world.level.levelgen.feature.stateproviders.RuleBasedBlockStateProvider$Rule"
import { $RandomSource$$Type } from "net.minecraft.util.RandomSource"
import { $Block$$Type } from "net.minecraft.world.level.block.Block"
import { $Record } from "java.lang.Record"

export class $RuleBasedBlockStateProvider extends $Record {
static readonly "CODEC": $Codec<$RuleBasedBlockStateProvider>

constructor(blockStateProvider0: $BlockStateProvider$$Type, list1: $List$$Type<$RuleBasedBlockStateProvider$Rule$$Type>)

public "fallback"(): $BlockStateProvider
public "getState"(worldGenLevel0: $WorldGenLevel$$Type, randomSource1: $RandomSource$$Type, blockPos2: $BlockPos$$Type): $BlockState
public "rules"(): $List<$RuleBasedBlockStateProvider$Rule>
public static "simple"(blockStateProvider0: $BlockStateProvider$$Type): $RuleBasedBlockStateProvider
public static "simple"(block0: $Block$$Type): $RuleBasedBlockStateProvider
}
}

declare module "net.minecraft.world.level.levelgen.feature.trunkplacers.BendingTrunkPlacer" {
import { $Codec } from "com.mojang.serialization.Codec"
import { $TrunkPlacer } from "net.minecraft.world.level.levelgen.feature.trunkplacers.TrunkPlacer"
import { $IntProvider$$Type } from "net.minecraft.util.valueproviders.IntProvider"

export class $BendingTrunkPlacer extends $TrunkPlacer {
static readonly "CODEC": $Codec<$BendingTrunkPlacer>

constructor(int0: integer, int1: integer, int2: integer, int3: integer, intProvider4: $IntProvider$$Type)

}
}

declare module "net.minecraft.world.level.levelgen.feature.configurations.SimpleRandomFeatureConfiguration" {
import { $ConfiguredFeature } from "net.minecraft.world.level.levelgen.feature.ConfiguredFeature"
import { $Codec } from "com.mojang.serialization.Codec"
import { $Stream } from "java.util.stream.Stream"
import { $PlacedFeature, $PlacedFeature$$Type } from "net.minecraft.world.level.levelgen.placement.PlacedFeature"
import { $HolderSet, $HolderSet$$Type } from "net.minecraft.core.HolderSet"
import { $FeatureConfiguration } from "net.minecraft.world.level.levelgen.feature.configurations.FeatureConfiguration"

export class $SimpleRandomFeatureConfiguration implements $FeatureConfiguration {
static readonly "CODEC": $Codec<$SimpleRandomFeatureConfiguration>
readonly "features": $HolderSet<$PlacedFeature>

constructor(holderSet0: $HolderSet$$Type<$PlacedFeature$$Type>)

public "getFeatures"(): $Stream<$ConfiguredFeature<any, any>>
}
}

declare module "net.minecraft.world.level.levelgen.feature.trunkplacers.TrunkPlacer" {
import { $FoliagePlacer$FoliageAttachment } from "net.minecraft.world.level.levelgen.feature.foliageplacers.FoliagePlacer$FoliageAttachment"
import { $List } from "java.util.List"
import { $Codec } from "com.mojang.serialization.Codec"
import { $BlockPos$$Type } from "net.minecraft.core.BlockPos"
import { $LevelSimulatedReader$$Type } from "net.minecraft.world.level.LevelSimulatedReader"
import { $BiConsumer$$Type } from "java.util.function.BiConsumer"
import { $BlockState$$Type } from "net.minecraft.world.level.block.state.BlockState"
import { $RandomSource$$Type } from "net.minecraft.util.RandomSource"
import { $TreeConfiguration$$Type } from "net.minecraft.world.level.levelgen.feature.configurations.TreeConfiguration"

export class $TrunkPlacer {
static readonly "CODEC": $Codec<$TrunkPlacer>
static readonly "MAX_HEIGHT": integer

constructor(int0: integer, int1: integer, int2: integer)

public "getTreeHeight"(randomSource0: $RandomSource$$Type): integer
public "isFree"(levelSimulatedReader0: $LevelSimulatedReader$$Type, blockPos1: $BlockPos$$Type): boolean
public "placeTrunk"(levelSimulatedReader0: $LevelSimulatedReader$$Type, biConsumer1: $BiConsumer$$Type<$BlockPos$$Type, $BlockState$$Type>, randomSource2: $RandomSource$$Type, int3: integer, blockPos4: $BlockPos$$Type, treeConfiguration5: $TreeConfiguration$$Type): $List<$FoliagePlacer$FoliageAttachment>
public static "setDirtAt"(levelSimulatedReader0: $LevelSimulatedReader$$Type, biConsumer1: $BiConsumer$$Type<$BlockPos$$Type, $BlockState$$Type>, randomSource2: $RandomSource$$Type, blockPos3: $BlockPos$$Type, treeConfiguration4: $TreeConfiguration$$Type): void
}
}

declare module "net.minecraft.world.level.levelgen.feature.trunkplacers.FancyTrunkPlacer" {
import { $Codec } from "com.mojang.serialization.Codec"
import { $TrunkPlacer } from "net.minecraft.world.level.levelgen.feature.trunkplacers.TrunkPlacer"

export class $FancyTrunkPlacer extends $TrunkPlacer {
static readonly "CODEC": $Codec<$FancyTrunkPlacer>

constructor(int0: integer, int1: integer, int2: integer)

}
}

declare module "net.minecraft.world.level.levelgen.feature.BasaltColumnsFeature" {
import { $Feature } from "net.minecraft.world.level.levelgen.feature.Feature"
import { $Codec$$Type } from "com.mojang.serialization.Codec"
import { $ColumnFeatureConfiguration, $ColumnFeatureConfiguration$$Type } from "net.minecraft.world.level.levelgen.feature.configurations.ColumnFeatureConfiguration"

export class $BasaltColumnsFeature extends $Feature<$ColumnFeatureConfiguration> {
constructor(codec0: $Codec$$Type<$ColumnFeatureConfiguration$$Type>)

}
}

declare module "net.minecraft.world.level.levelgen.feature.stateproviders.RotatedBlockProvider" {
import { $BlockStateProvider } from "net.minecraft.world.level.levelgen.feature.stateproviders.BlockStateProvider"
import { $Codec } from "com.mojang.serialization.Codec"
import { $Block$$Type } from "net.minecraft.world.level.block.Block"

export class $RotatedBlockProvider extends $BlockStateProvider {
static readonly "CODEC": $Codec<$RotatedBlockProvider>

constructor(block0: $Block$$Type)

}
}

declare module "net.minecraft.world.level.levelgen.feature.rootplacers.MangroveRootPlacement" {
import { $BlockStateProvider, $BlockStateProvider$$Type } from "net.minecraft.world.level.levelgen.feature.stateproviders.BlockStateProvider"
import { $Codec } from "com.mojang.serialization.Codec"
import { $HolderSet, $HolderSet$$Type } from "net.minecraft.core.HolderSet"
import { $Block, $Block$$Type } from "net.minecraft.world.level.block.Block"
import { $Record } from "java.lang.Record"

export class $MangroveRootPlacement extends $Record {
static readonly "CODEC": $Codec<$MangroveRootPlacement>

constructor(holderSet0: $HolderSet$$Type<$Block$$Type>, holderSet1: $HolderSet$$Type<$Block$$Type>, blockStateProvider2: $BlockStateProvider$$Type, int3: integer, int4: integer, float5: float)

public "canGrowThrough"(): $HolderSet<$Block>
public "maxRootLength"(): integer
public "maxRootWidth"(): integer
public "muddyRootsIn"(): $HolderSet<$Block>
public "muddyRootsProvider"(): $BlockStateProvider
public "randomSkewChance"(): float
}
}

declare module "net.minecraft.world.level.levelgen.feature.GlowstoneFeature" {
import { $NoneFeatureConfiguration, $NoneFeatureConfiguration$$Type } from "net.minecraft.world.level.levelgen.feature.configurations.NoneFeatureConfiguration"
import { $Feature } from "net.minecraft.world.level.levelgen.feature.Feature"
import { $Codec$$Type } from "com.mojang.serialization.Codec"

export class $GlowstoneFeature extends $Feature<$NoneFeatureConfiguration> {
constructor(codec0: $Codec$$Type<$NoneFeatureConfiguration$$Type>)

}
}

declare module "net.minecraft.world.level.levelgen.feature.ReplaceBlobsFeature" {
import { $Feature } from "net.minecraft.world.level.levelgen.feature.Feature"
import { $Codec$$Type } from "com.mojang.serialization.Codec"
import { $ReplaceSphereConfiguration, $ReplaceSphereConfiguration$$Type } from "net.minecraft.world.level.levelgen.feature.configurations.ReplaceSphereConfiguration"

export class $ReplaceBlobsFeature extends $Feature<$ReplaceSphereConfiguration> {
constructor(codec0: $Codec$$Type<$ReplaceSphereConfiguration$$Type>)

}
}

declare module "net.minecraft.world.level.levelgen.feature.treedecorators.TreeDecorator" {
import { $TreeDecorator$Context$$Type } from "net.minecraft.world.level.levelgen.feature.treedecorators.TreeDecorator$Context"
import { $Codec } from "com.mojang.serialization.Codec"

export class $TreeDecorator {
static readonly "CODEC": $Codec<$TreeDecorator>

constructor()

public "place"(context0: $TreeDecorator$Context$$Type): void
}
}

declare module "net.minecraft.world.level.levelgen.feature.treedecorators.AttachedToLeavesDecorator" {
import { $BlockStateProvider$$Type } from "net.minecraft.world.level.levelgen.feature.stateproviders.BlockStateProvider"
import { $List$$Type } from "java.util.List"
import { $Codec } from "com.mojang.serialization.Codec"
import { $TreeDecorator } from "net.minecraft.world.level.levelgen.feature.treedecorators.TreeDecorator"
import { $Direction$$Type } from "net.minecraft.core.Direction"

export class $AttachedToLeavesDecorator extends $TreeDecorator {
static readonly "CODEC": $Codec<$AttachedToLeavesDecorator>

constructor(float0: float, int1: integer, int2: integer, blockStateProvider3: $BlockStateProvider$$Type, int4: integer, list5: $List$$Type<$Direction$$Type>)

}
}

declare module "net.minecraft.world.level.levelgen.feature.KelpFeature" {
import { $NoneFeatureConfiguration, $NoneFeatureConfiguration$$Type } from "net.minecraft.world.level.levelgen.feature.configurations.NoneFeatureConfiguration"
import { $Feature } from "net.minecraft.world.level.levelgen.feature.Feature"
import { $Codec$$Type } from "com.mojang.serialization.Codec"

export class $KelpFeature extends $Feature<$NoneFeatureConfiguration> {
constructor(codec0: $Codec$$Type<$NoneFeatureConfiguration$$Type>)

}
}

declare module "net.minecraft.world.level.levelgen.feature.FillLayerFeature" {
import { $Feature } from "net.minecraft.world.level.levelgen.feature.Feature"
import { $Codec$$Type } from "com.mojang.serialization.Codec"
import { $LayerConfiguration, $LayerConfiguration$$Type } from "net.minecraft.world.level.levelgen.feature.configurations.LayerConfiguration"

export class $FillLayerFeature extends $Feature<$LayerConfiguration> {
constructor(codec0: $Codec$$Type<$LayerConfiguration$$Type>)

}
}

declare module "net.minecraft.world.level.levelgen.feature.rootplacers.AboveRootPlacement" {
import { $BlockStateProvider, $BlockStateProvider$$Type } from "net.minecraft.world.level.levelgen.feature.stateproviders.BlockStateProvider"
import { $Codec } from "com.mojang.serialization.Codec"
import { $Record } from "java.lang.Record"

export class $AboveRootPlacement extends $Record {
static readonly "CODEC": $Codec<$AboveRootPlacement>

constructor(blockStateProvider0: $BlockStateProvider$$Type, float1: float)

public "aboveRootPlacementChance"(): float
public "aboveRootProvider"(): $BlockStateProvider
}
}

declare module "net.minecraft.world.level.levelgen.feature.configurations.BlockColumnConfiguration" {
import { $List, $List$$Type } from "java.util.List"
import { $ConfiguredFeature } from "net.minecraft.world.level.levelgen.feature.ConfiguredFeature"
import { $BlockStateProvider$$Type } from "net.minecraft.world.level.levelgen.feature.stateproviders.BlockStateProvider"
import { $Codec } from "com.mojang.serialization.Codec"
import { $Stream } from "java.util.stream.Stream"
import { $BlockColumnConfiguration$Layer, $BlockColumnConfiguration$Layer$$Type } from "net.minecraft.world.level.levelgen.feature.configurations.BlockColumnConfiguration$Layer"
import { $IntProvider$$Type } from "net.minecraft.util.valueproviders.IntProvider"
import { $Direction, $Direction$$Type } from "net.minecraft.core.Direction"
import { $Record } from "java.lang.Record"
import { $BlockPredicate, $BlockPredicate$$Type } from "net.minecraft.world.level.levelgen.blockpredicates.BlockPredicate"
import { $FeatureConfiguration } from "net.minecraft.world.level.levelgen.feature.configurations.FeatureConfiguration"

export class $BlockColumnConfiguration extends $Record implements $FeatureConfiguration {
static readonly "CODEC": $Codec<$BlockColumnConfiguration>

constructor(list0: $List$$Type<$BlockColumnConfiguration$Layer$$Type>, direction1: $Direction$$Type, blockPredicate2: $BlockPredicate$$Type, boolean3: boolean)

public "allowedPlacement"(): $BlockPredicate
public "direction"(): $Direction
public "getFeatures"(): $Stream<$ConfiguredFeature<any, any>>
public static "layer"(intProvider0: $IntProvider$$Type, blockStateProvider1: $BlockStateProvider$$Type): $BlockColumnConfiguration$Layer
public "layers"(): $List<$BlockColumnConfiguration$Layer>
public "prioritizeTip"(): boolean
public static "simple"(intProvider0: $IntProvider$$Type, blockStateProvider1: $BlockStateProvider$$Type): $BlockColumnConfiguration
get "features"(): $Stream<$ConfiguredFeature<any, any>>
}
}

declare module "net.minecraft.world.level.levelgen.feature.configurations.LayerConfiguration" {
import { $ConfiguredFeature } from "net.minecraft.world.level.levelgen.feature.ConfiguredFeature"
import { $Codec } from "com.mojang.serialization.Codec"
import { $Stream } from "java.util.stream.Stream"
import { $BlockState, $BlockState$$Type } from "net.minecraft.world.level.block.state.BlockState"
import { $FeatureConfiguration } from "net.minecraft.world.level.levelgen.feature.configurations.FeatureConfiguration"

export class $LayerConfiguration implements $FeatureConfiguration {
static readonly "CODEC": $Codec<$LayerConfiguration>
readonly "height": integer
readonly "state": $BlockState

constructor(int0: integer, blockState1: $BlockState$$Type)

public "getFeatures"(): $Stream<$ConfiguredFeature<any, any>>
get "features"(): $Stream<$ConfiguredFeature<any, any>>
}
}

declare module "net.minecraft.world.level.levelgen.feature.MonsterRoomFeature" {
import { $NoneFeatureConfiguration, $NoneFeatureConfiguration$$Type } from "net.minecraft.world.level.levelgen.feature.configurations.NoneFeatureConfiguration"
import { $Feature } from "net.minecraft.world.level.levelgen.feature.Feature"
import { $Codec$$Type } from "com.mojang.serialization.Codec"
import { $DungeonFeatureAccessor } from "com.craisinlord.integrated_api.mixins.features.DungeonFeatureAccessor"

export class $MonsterRoomFeature extends $Feature<$NoneFeatureConfiguration> implements $DungeonFeatureAccessor {
constructor(codec0: $Codec$$Type<$NoneFeatureConfiguration$$Type>)

}
}

declare module "net.minecraft.world.level.levelgen.feature.NetherForestVegetationFeature" {
import { $Feature } from "net.minecraft.world.level.levelgen.feature.Feature"
import { $NetherForestVegetationConfig, $NetherForestVegetationConfig$$Type } from "net.minecraft.world.level.levelgen.feature.configurations.NetherForestVegetationConfig"
import { $Codec$$Type } from "com.mojang.serialization.Codec"

export class $NetherForestVegetationFeature extends $Feature<$NetherForestVegetationConfig> {
constructor(codec0: $Codec$$Type<$NetherForestVegetationConfig$$Type>)

}
}

declare module "net.minecraft.world.level.levelgen.feature.ScatteredOreFeature" {
import { $Feature } from "net.minecraft.world.level.levelgen.feature.Feature"
import { $OreConfiguration } from "net.minecraft.world.level.levelgen.feature.configurations.OreConfiguration"

export class $ScatteredOreFeature extends $Feature<$OreConfiguration> {
}
}

declare module "net.minecraft.world.level.levelgen.feature.SnowAndFreezeFeature" {
import { $NoneFeatureConfiguration, $NoneFeatureConfiguration$$Type } from "net.minecraft.world.level.levelgen.feature.configurations.NoneFeatureConfiguration"
import { $Feature } from "net.minecraft.world.level.levelgen.feature.Feature"
import { $Codec$$Type } from "com.mojang.serialization.Codec"

export class $SnowAndFreezeFeature extends $Feature<$NoneFeatureConfiguration> {
constructor(codec0: $Codec$$Type<$NoneFeatureConfiguration$$Type>)

}
}

declare module "net.minecraft.world.level.levelgen.feature.stateproviders.NoiseProvider" {
import { $List$$Type } from "java.util.List"
import { $Codec } from "com.mojang.serialization.Codec"
import { $NormalNoise$NoiseParameters$$Type } from "net.minecraft.world.level.levelgen.synth.NormalNoise$NoiseParameters"
import { $BlockState$$Type } from "net.minecraft.world.level.block.state.BlockState"
import { $NoiseBasedStateProvider } from "net.minecraft.world.level.levelgen.feature.stateproviders.NoiseBasedStateProvider"

export class $NoiseProvider extends $NoiseBasedStateProvider {
static readonly "CODEC": $Codec<$NoiseProvider>

constructor(long0: long, noiseParameters1: $NormalNoise$NoiseParameters$$Type, float2: float, list3: $List$$Type<$BlockState$$Type>)

}
}

declare module "net.minecraft.world.level.levelgen.feature.SpringFeature" {
import { $Feature } from "net.minecraft.world.level.levelgen.feature.Feature"
import { $Codec$$Type } from "com.mojang.serialization.Codec"
import { $SpringConfiguration, $SpringConfiguration$$Type } from "net.minecraft.world.level.levelgen.feature.configurations.SpringConfiguration"

export class $SpringFeature extends $Feature<$SpringConfiguration> {
constructor(codec0: $Codec$$Type<$SpringConfiguration$$Type>)

}
}

declare module "net.minecraft.world.level.levelgen.feature.rootplacers.RootPlacer" {
import { $BlockStateProvider$$Type } from "net.minecraft.world.level.levelgen.feature.stateproviders.BlockStateProvider"
import { $Codec } from "com.mojang.serialization.Codec"
import { $IntProvider$$Type } from "net.minecraft.util.valueproviders.IntProvider"
import { $AboveRootPlacement$$Type } from "net.minecraft.world.level.levelgen.feature.rootplacers.AboveRootPlacement"
import { $BlockPos, $BlockPos$$Type } from "net.minecraft.core.BlockPos"
import { $LevelSimulatedReader$$Type } from "net.minecraft.world.level.LevelSimulatedReader"
import { $BiConsumer$$Type } from "java.util.function.BiConsumer"
import { $Optional$$Type } from "java.util.Optional"
import { $BlockState$$Type } from "net.minecraft.world.level.block.state.BlockState"
import { $RandomSource$$Type } from "net.minecraft.util.RandomSource"
import { $TreeConfiguration$$Type } from "net.minecraft.world.level.levelgen.feature.configurations.TreeConfiguration"

export class $RootPlacer {
static readonly "CODEC": $Codec<$RootPlacer>

constructor(intProvider0: $IntProvider$$Type, blockStateProvider1: $BlockStateProvider$$Type, optional2: $Optional$$Type<$AboveRootPlacement$$Type>)

public "getTrunkOrigin"(blockPos0: $BlockPos$$Type, randomSource1: $RandomSource$$Type): $BlockPos
public "placeRoots"(levelSimulatedReader0: $LevelSimulatedReader$$Type, biConsumer1: $BiConsumer$$Type<$BlockPos$$Type, $BlockState$$Type>, randomSource2: $RandomSource$$Type, blockPos3: $BlockPos$$Type, blockPos4: $BlockPos$$Type, treeConfiguration5: $TreeConfiguration$$Type): boolean
}
}

declare module "net.minecraft.world.level.levelgen.feature.HugeFungusConfiguration" {
import { $ConfiguredFeature } from "net.minecraft.world.level.levelgen.feature.ConfiguredFeature"
import { $Codec } from "com.mojang.serialization.Codec"
import { $Stream } from "java.util.stream.Stream"
import { $BlockState, $BlockState$$Type } from "net.minecraft.world.level.block.state.BlockState"
import { $BlockPredicate, $BlockPredicate$$Type } from "net.minecraft.world.level.levelgen.blockpredicates.BlockPredicate"
import { $FeatureConfiguration } from "net.minecraft.world.level.levelgen.feature.configurations.FeatureConfiguration"

export class $HugeFungusConfiguration implements $FeatureConfiguration {
static readonly "CODEC": $Codec<$HugeFungusConfiguration>
readonly "decorState": $BlockState
readonly "hatState": $BlockState
readonly "planted": boolean
readonly "replaceableBlocks": $BlockPredicate
readonly "stemState": $BlockState
readonly "validBaseState": $BlockState

constructor(blockState0: $BlockState$$Type, blockState1: $BlockState$$Type, blockState2: $BlockState$$Type, blockState3: $BlockState$$Type, blockPredicate4: $BlockPredicate$$Type, boolean5: boolean)

public "getFeatures"(): $Stream<$ConfiguredFeature<any, any>>
get "features"(): $Stream<$ConfiguredFeature<any, any>>
}
}

declare module "net.minecraft.world.level.levelgen.feature.trunkplacers.MegaJungleTrunkPlacer" {
import { $Codec } from "com.mojang.serialization.Codec"
import { $GiantTrunkPlacer } from "net.minecraft.world.level.levelgen.feature.trunkplacers.GiantTrunkPlacer"

export class $MegaJungleTrunkPlacer extends $GiantTrunkPlacer {
static readonly "CODEC": $Codec<$MegaJungleTrunkPlacer>

constructor(int0: integer, int1: integer, int2: integer)

}
}

declare module "net.minecraft.world.level.levelgen.feature.configurations.VegetationPatchConfiguration" {
import { $TagKey, $TagKey$$Type } from "net.minecraft.tags.TagKey"
import { $BlockStateProvider, $BlockStateProvider$$Type } from "net.minecraft.world.level.levelgen.feature.stateproviders.BlockStateProvider"
import { $ConfiguredFeature } from "net.minecraft.world.level.levelgen.feature.ConfiguredFeature"
import { $Codec } from "com.mojang.serialization.Codec"
import { $Holder, $Holder$$Type } from "net.minecraft.core.Holder"
import { $Stream } from "java.util.stream.Stream"
import { $CaveSurface, $CaveSurface$$Type } from "net.minecraft.world.level.levelgen.placement.CaveSurface"
import { $IntProvider, $IntProvider$$Type } from "net.minecraft.util.valueproviders.IntProvider"
import { $PlacedFeature, $PlacedFeature$$Type } from "net.minecraft.world.level.levelgen.placement.PlacedFeature"
import { $Block, $Block$$Type } from "net.minecraft.world.level.block.Block"
import { $FeatureConfiguration } from "net.minecraft.world.level.levelgen.feature.configurations.FeatureConfiguration"

export class $VegetationPatchConfiguration implements $FeatureConfiguration {
static readonly "CODEC": $Codec<$VegetationPatchConfiguration>
readonly "depth": $IntProvider
readonly "extraBottomBlockChance": float
readonly "extraEdgeColumnChance": float
readonly "groundState": $BlockStateProvider
readonly "replaceable": $TagKey<$Block>
readonly "surface": $CaveSurface
readonly "vegetationChance": float
readonly "vegetationFeature": $Holder<$PlacedFeature>
readonly "verticalRange": integer
readonly "xzRadius": $IntProvider

constructor(tagKey0: $TagKey$$Type<$Block$$Type>, blockStateProvider1: $BlockStateProvider$$Type, holder2: $Holder$$Type<$PlacedFeature$$Type>, caveSurface3: $CaveSurface$$Type, intProvider4: $IntProvider$$Type, float5: float, int6: integer, float7: float, intProvider8: $IntProvider$$Type, float9: float)

public "getFeatures"(): $Stream<$ConfiguredFeature<any, any>>
get "features"(): $Stream<$ConfiguredFeature<any, any>>
}
}

declare module "net.minecraft.world.level.levelgen.feature.GeodeFeature" {
import { $Feature } from "net.minecraft.world.level.levelgen.feature.Feature"
import { $Codec$$Type } from "com.mojang.serialization.Codec"
import { $GeodeConfiguration, $GeodeConfiguration$$Type } from "net.minecraft.world.level.levelgen.feature.configurations.GeodeConfiguration"

export class $GeodeFeature extends $Feature<$GeodeConfiguration> {
constructor(codec0: $Codec$$Type<$GeodeConfiguration$$Type>)

}
}

declare module "net.minecraft.world.level.levelgen.feature.foliageplacers.MegaJungleFoliagePlacer" {
import { $FoliagePlacer } from "net.minecraft.world.level.levelgen.feature.foliageplacers.FoliagePlacer"
import { $Codec } from "com.mojang.serialization.Codec"
import { $IntProvider$$Type } from "net.minecraft.util.valueproviders.IntProvider"

export class $MegaJungleFoliagePlacer extends $FoliagePlacer {
static readonly "CODEC": $Codec<$MegaJungleFoliagePlacer>

constructor(intProvider0: $IntProvider$$Type, intProvider1: $IntProvider$$Type, int2: integer)

}
}

declare module "net.minecraft.world.level.levelgen.feature.rootplacers.MangroveRootPlacer" {
import { $BlockStateProvider$$Type } from "net.minecraft.world.level.levelgen.feature.stateproviders.BlockStateProvider"
import { $Codec } from "com.mojang.serialization.Codec"
import { $IntProvider$$Type } from "net.minecraft.util.valueproviders.IntProvider"
import { $AboveRootPlacement$$Type } from "net.minecraft.world.level.levelgen.feature.rootplacers.AboveRootPlacement"
import { $Optional$$Type } from "java.util.Optional"
import { $RootPlacer } from "net.minecraft.world.level.levelgen.feature.rootplacers.RootPlacer"
import { $MangroveRootPlacement$$Type } from "net.minecraft.world.level.levelgen.feature.rootplacers.MangroveRootPlacement"

export class $MangroveRootPlacer extends $RootPlacer {
static readonly "CODEC": $Codec<$MangroveRootPlacer>
static readonly "ROOT_LENGTH_LIMIT": integer
static readonly "ROOT_WIDTH_LIMIT": integer

constructor(intProvider0: $IntProvider$$Type, blockStateProvider1: $BlockStateProvider$$Type, optional2: $Optional$$Type<$AboveRootPlacement$$Type>, mangroveRootPlacement3: $MangroveRootPlacement$$Type)

}
}

declare module "net.minecraft.world.level.levelgen.feature.trunkplacers.StraightTrunkPlacer" {
import { $Codec } from "com.mojang.serialization.Codec"
import { $TrunkPlacer } from "net.minecraft.world.level.levelgen.feature.trunkplacers.TrunkPlacer"

export class $StraightTrunkPlacer extends $TrunkPlacer {
static readonly "CODEC": $Codec<$StraightTrunkPlacer>

constructor(int0: integer, int1: integer, int2: integer)

}
}

declare module "net.minecraft.world.level.levelgen.feature.CoralClawFeature" {
import { $NoneFeatureConfiguration$$Type } from "net.minecraft.world.level.levelgen.feature.configurations.NoneFeatureConfiguration"
import { $Codec$$Type } from "com.mojang.serialization.Codec"
import { $CoralFeature } from "net.minecraft.world.level.levelgen.feature.CoralFeature"

export class $CoralClawFeature extends $CoralFeature {
constructor(codec0: $Codec$$Type<$NoneFeatureConfiguration$$Type>)

}
}

declare module "net.minecraft.world.level.levelgen.feature.VoidStartPlatformFeature" {
import { $NoneFeatureConfiguration, $NoneFeatureConfiguration$$Type } from "net.minecraft.world.level.levelgen.feature.configurations.NoneFeatureConfiguration"
import { $Feature } from "net.minecraft.world.level.levelgen.feature.Feature"
import { $Codec$$Type } from "com.mojang.serialization.Codec"

export class $VoidStartPlatformFeature extends $Feature<$NoneFeatureConfiguration> {
constructor(codec0: $Codec$$Type<$NoneFeatureConfiguration$$Type>)

}
}

declare module "net.minecraft.world.level.levelgen.feature.BlockPileFeature" {
import { $Feature } from "net.minecraft.world.level.levelgen.feature.Feature"
import { $Codec$$Type } from "com.mojang.serialization.Codec"
import { $BlockPileConfiguration, $BlockPileConfiguration$$Type } from "net.minecraft.world.level.levelgen.feature.configurations.BlockPileConfiguration"

export class $BlockPileFeature extends $Feature<$BlockPileConfiguration> {
constructor(codec0: $Codec$$Type<$BlockPileConfiguration$$Type>)

}
}

declare module "net.minecraft.world.level.levelgen.feature.featuresize.ThreeLayersFeatureSize" {
import { $Codec } from "com.mojang.serialization.Codec"
import { $FeatureSize } from "net.minecraft.world.level.levelgen.feature.featuresize.FeatureSize"
import { $OptionalInt$$Type } from "java.util.OptionalInt"

export class $ThreeLayersFeatureSize extends $FeatureSize {
static readonly "CODEC": $Codec<$ThreeLayersFeatureSize>

constructor(int0: integer, int1: integer, int2: integer, int3: integer, int4: integer, optionalInt5: $OptionalInt$$Type)

}
}

declare module "net.minecraft.world.level.levelgen.feature.configurations.MultifaceGrowthConfiguration" {
import { $ConfiguredFeature } from "net.minecraft.world.level.levelgen.feature.ConfiguredFeature"
import { $List } from "java.util.List"
import { $Codec } from "com.mojang.serialization.Codec"
import { $Stream } from "java.util.stream.Stream"
import { $Direction, $Direction$$Type } from "net.minecraft.core.Direction"
import { $HolderSet, $HolderSet$$Type } from "net.minecraft.core.HolderSet"
import { $Block, $Block$$Type } from "net.minecraft.world.level.block.Block"
import { $RandomSource$$Type } from "net.minecraft.util.RandomSource"
import { $MultifaceBlock, $MultifaceBlock$$Type } from "net.minecraft.world.level.block.MultifaceBlock"
import { $FeatureConfiguration } from "net.minecraft.world.level.levelgen.feature.configurations.FeatureConfiguration"

export class $MultifaceGrowthConfiguration implements $FeatureConfiguration {
static readonly "CODEC": $Codec<$MultifaceGrowthConfiguration>
readonly "canBePlacedOn": $HolderSet<$Block>
readonly "canPlaceOnCeiling": boolean
readonly "canPlaceOnFloor": boolean
readonly "canPlaceOnWall": boolean
readonly "chanceOfSpreading": float
readonly "placeBlock": $MultifaceBlock
readonly "searchRange": integer

constructor(multifaceBlock0: $MultifaceBlock$$Type, int1: integer, boolean2: boolean, boolean3: boolean, boolean4: boolean, float5: float, holderSet6: $HolderSet$$Type<$Block$$Type>)

public "getFeatures"(): $Stream<$ConfiguredFeature<any, any>>
public "getShuffledDirections"(randomSource0: $RandomSource$$Type): $List<$Direction>
public "getShuffledDirectionsExcept"(randomSource0: $RandomSource$$Type, direction1: $Direction$$Type): $List<$Direction>
get "features"(): $Stream<$ConfiguredFeature<any, any>>
}
}

declare module "net.minecraft.world.level.levelgen.feature.stateproviders.SimpleStateProvider" {
import { $BlockStateProvider } from "net.minecraft.world.level.levelgen.feature.stateproviders.BlockStateProvider"
import { $Codec } from "com.mojang.serialization.Codec"

export class $SimpleStateProvider extends $BlockStateProvider {
static readonly "CODEC": $Codec<$SimpleStateProvider>

}
}

declare module "net.minecraft.world.level.levelgen.feature.SeagrassFeature" {
import { $Feature } from "net.minecraft.world.level.levelgen.feature.Feature"
import { $Codec$$Type } from "com.mojang.serialization.Codec"
import { $ProbabilityFeatureConfiguration, $ProbabilityFeatureConfiguration$$Type } from "net.minecraft.world.level.levelgen.feature.configurations.ProbabilityFeatureConfiguration"

export class $SeagrassFeature extends $Feature<$ProbabilityFeatureConfiguration> {
constructor(codec0: $Codec$$Type<$ProbabilityFeatureConfiguration$$Type>)

}
}

declare module "net.minecraft.world.level.levelgen.feature.AbstractHugeMushroomFeature" {
import { $Feature } from "net.minecraft.world.level.levelgen.feature.Feature"
import { $Codec$$Type } from "com.mojang.serialization.Codec"
import { $HugeMushroomFeatureConfiguration, $HugeMushroomFeatureConfiguration$$Type } from "net.minecraft.world.level.levelgen.feature.configurations.HugeMushroomFeatureConfiguration"

export class $AbstractHugeMushroomFeature extends $Feature<$HugeMushroomFeatureConfiguration> {
constructor(codec0: $Codec$$Type<$HugeMushroomFeatureConfiguration$$Type>)

}
}

declare module "net.minecraft.world.level.levelgen.feature.OreFeature" {
import { $Feature } from "net.minecraft.world.level.levelgen.feature.Feature"
import { $Codec$$Type } from "com.mojang.serialization.Codec"
import { $OreConfiguration$TargetBlockState$$Type } from "net.minecraft.world.level.levelgen.feature.configurations.OreConfiguration$TargetBlockState"
import { $BlockPos$$Type } from "net.minecraft.core.BlockPos"
import { $BlockState, $BlockState$$Type } from "net.minecraft.world.level.block.state.BlockState"
import { $RandomSource$$Type } from "net.minecraft.util.RandomSource"
import { $OreConfiguration, $OreConfiguration$$Type } from "net.minecraft.world.level.levelgen.feature.configurations.OreConfiguration"
import { $Function$$Type } from "java.util.function.Function"
import { $BlockPos$MutableBlockPos$$Type } from "net.minecraft.core.BlockPos$MutableBlockPos"

export class $OreFeature extends $Feature<$OreConfiguration> {
constructor(codec0: $Codec$$Type<$OreConfiguration$$Type>)

public static "canPlaceOre"(blockState0: $BlockState$$Type, function1: $Function$$Type<$BlockPos$$Type, $BlockState>, randomSource2: $RandomSource$$Type, oreConfiguration3: $OreConfiguration$$Type, targetBlockState4: $OreConfiguration$TargetBlockState$$Type, mutableBlockPos5: $BlockPos$MutableBlockPos$$Type): boolean
}
}

declare module "net.minecraft.world.level.levelgen.feature.configurations.NoneFeatureConfiguration" {
import { $ConfiguredFeature } from "net.minecraft.world.level.levelgen.feature.ConfiguredFeature"
import { $Codec } from "com.mojang.serialization.Codec"
import { $Stream } from "java.util.stream.Stream"
import { $FeatureConfiguration } from "net.minecraft.world.level.levelgen.feature.configurations.FeatureConfiguration"

export class $NoneFeatureConfiguration implements $FeatureConfiguration {
static readonly "CODEC": $Codec<$NoneFeatureConfiguration>
static readonly "INSTANCE": $NoneFeatureConfiguration

constructor()

public "getFeatures"(): $Stream<$ConfiguredFeature<any, any>>
get "features"(): $Stream<$ConfiguredFeature<any, any>>
}
}

declare module "net.minecraft.world.level.levelgen.feature.HugeBrownMushroomFeature" {
import { $Codec$$Type } from "com.mojang.serialization.Codec"
import { $BlockPos$$Type } from "net.minecraft.core.BlockPos"
import { $HugeMushroomFeatureConfiguration$$Type } from "net.minecraft.world.level.levelgen.feature.configurations.HugeMushroomFeatureConfiguration"
import { $LevelWriter$$Type } from "net.minecraft.world.level.LevelWriter"
import { $BlockState$$Type } from "net.minecraft.world.level.block.state.BlockState"
import { $AbstractHugeMushroomFeature } from "net.minecraft.world.level.levelgen.feature.AbstractHugeMushroomFeature"

export class $HugeBrownMushroomFeature extends $AbstractHugeMushroomFeature {
constructor(codec0: $Codec$$Type<$HugeMushroomFeatureConfiguration$$Type>)

public "wrapWithCondition$gnn000$isValidRepairItem"(hugeBrownMushroomFeature0: $HugeBrownMushroomFeature$$Type, levelWriter1: $LevelWriter$$Type, blockPos2: $BlockPos$$Type, blockState3: $BlockState$$Type): boolean
}
}

declare module "net.minecraft.world.level.levelgen.feature.BonusChestFeature" {
import { $NoneFeatureConfiguration, $NoneFeatureConfiguration$$Type } from "net.minecraft.world.level.levelgen.feature.configurations.NoneFeatureConfiguration"
import { $Feature } from "net.minecraft.world.level.levelgen.feature.Feature"
import { $Codec$$Type } from "com.mojang.serialization.Codec"

export class $BonusChestFeature extends $Feature<$NoneFeatureConfiguration> {
constructor(codec0: $Codec$$Type<$NoneFeatureConfiguration$$Type>)

}
}

declare module "net.minecraft.world.level.levelgen.feature.CoralFeature" {
import { $NoneFeatureConfiguration, $NoneFeatureConfiguration$$Type } from "net.minecraft.world.level.levelgen.feature.configurations.NoneFeatureConfiguration"
import { $Feature } from "net.minecraft.world.level.levelgen.feature.Feature"
import { $Codec$$Type } from "com.mojang.serialization.Codec"

export class $CoralFeature extends $Feature<$NoneFeatureConfiguration> {
constructor(codec0: $Codec$$Type<$NoneFeatureConfiguration$$Type>)

}
}

declare module "net.minecraft.world.level.levelgen.feature.configurations.BlockPileConfiguration" {
import { $BlockStateProvider, $BlockStateProvider$$Type } from "net.minecraft.world.level.levelgen.feature.stateproviders.BlockStateProvider"
import { $ConfiguredFeature } from "net.minecraft.world.level.levelgen.feature.ConfiguredFeature"
import { $Codec } from "com.mojang.serialization.Codec"
import { $Stream } from "java.util.stream.Stream"
import { $FeatureConfiguration } from "net.minecraft.world.level.levelgen.feature.configurations.FeatureConfiguration"

export class $BlockPileConfiguration implements $FeatureConfiguration {
static readonly "CODEC": $Codec<$BlockPileConfiguration>
readonly "stateProvider": $BlockStateProvider

constructor(blockStateProvider0: $BlockStateProvider$$Type)

public "getFeatures"(): $Stream<$ConfiguredFeature<any, any>>
get "features"(): $Stream<$ConfiguredFeature<any, any>>
}
}

declare module "net.minecraft.world.level.levelgen.feature.SimpleBlockFeature" {
import { $Feature } from "net.minecraft.world.level.levelgen.feature.Feature"
import { $SimpleBlockConfiguration, $SimpleBlockConfiguration$$Type } from "net.minecraft.world.level.levelgen.feature.configurations.SimpleBlockConfiguration"
import { $Codec$$Type } from "com.mojang.serialization.Codec"

export class $SimpleBlockFeature extends $Feature<$SimpleBlockConfiguration> {
constructor(codec0: $Codec$$Type<$SimpleBlockConfiguration$$Type>)

}
}

declare module "net.minecraft.world.level.levelgen.feature.foliageplacers.DarkOakFoliagePlacer" {
import { $FoliagePlacer } from "net.minecraft.world.level.levelgen.feature.foliageplacers.FoliagePlacer"
import { $Codec } from "com.mojang.serialization.Codec"
import { $IntProvider$$Type } from "net.minecraft.util.valueproviders.IntProvider"

export class $DarkOakFoliagePlacer extends $FoliagePlacer {
static readonly "CODEC": $Codec<$DarkOakFoliagePlacer>

constructor(intProvider0: $IntProvider$$Type, intProvider1: $IntProvider$$Type)

}
}

declare module "net.minecraft.world.level.levelgen.feature.stateproviders.WeightedStateProvider" {
import { $BlockStateProvider } from "net.minecraft.world.level.levelgen.feature.stateproviders.BlockStateProvider"
import { $Codec } from "com.mojang.serialization.Codec"
import { $SimpleWeightedRandomList$$Type } from "net.minecraft.util.random.SimpleWeightedRandomList"
import { $SimpleWeightedRandomList$Builder$$Type } from "net.minecraft.util.random.SimpleWeightedRandomList$Builder"
import { $BlockState$$Type } from "net.minecraft.world.level.block.state.BlockState"

export class $WeightedStateProvider extends $BlockStateProvider {
static readonly "CODEC": $Codec<$WeightedStateProvider>

constructor(builder0: $SimpleWeightedRandomList$Builder$$Type<$BlockState$$Type>)
constructor(simpleWeightedRandomList0: $SimpleWeightedRandomList$$Type<$BlockState$$Type>)

}
}

declare module "net.minecraft.world.level.levelgen.feature.treedecorators.TreeDecorator$Context" {
import { $BooleanProperty$$Type } from "net.minecraft.world.level.block.state.properties.BooleanProperty"
import { $BlockPos, $BlockPos$$Type } from "net.minecraft.core.BlockPos"
import { $LevelSimulatedReader, $LevelSimulatedReader$$Type } from "net.minecraft.world.level.LevelSimulatedReader"
import { $BiConsumer$$Type } from "java.util.function.BiConsumer"
import { $BlockState$$Type } from "net.minecraft.world.level.block.state.BlockState"
import { $Set$$Type } from "java.util.Set"
import { $ObjectArrayList } from "it.unimi.dsi.fastutil.objects.ObjectArrayList"
import { $RandomSource, $RandomSource$$Type } from "net.minecraft.util.RandomSource"

export class $TreeDecorator$Context {
constructor(levelSimulatedReader0: $LevelSimulatedReader$$Type, biConsumer1: $BiConsumer$$Type<$BlockPos$$Type, $BlockState$$Type>, randomSource2: $RandomSource$$Type, set3: $Set$$Type<$BlockPos$$Type>, set4: $Set$$Type<$BlockPos$$Type>, set5: $Set$$Type<$BlockPos$$Type>)

public "isAir"(blockPos0: $BlockPos$$Type): boolean
public "leaves"(): $ObjectArrayList<$BlockPos>
public "level"(): $LevelSimulatedReader
public "logs"(): $ObjectArrayList<$BlockPos>
public "placeVine"(blockPos0: $BlockPos$$Type, booleanProperty1: $BooleanProperty$$Type): void
public "random"(): $RandomSource
public "roots"(): $ObjectArrayList<$BlockPos>
public "setBlock"(blockPos0: $BlockPos$$Type, blockState1: $BlockState$$Type): void
}
}

declare module "net.minecraft.world.level.levelgen.feature.TwistingVinesFeature" {
import { $Feature } from "net.minecraft.world.level.levelgen.feature.Feature"
import { $Codec$$Type } from "com.mojang.serialization.Codec"
import { $LevelAccessor$$Type } from "net.minecraft.world.level.LevelAccessor"
import { $RandomSource$$Type } from "net.minecraft.util.RandomSource"
import { $BlockPos$MutableBlockPos$$Type } from "net.minecraft.core.BlockPos$MutableBlockPos"
import { $TwistingVinesConfig, $TwistingVinesConfig$$Type } from "net.minecraft.world.level.levelgen.feature.configurations.TwistingVinesConfig"

export class $TwistingVinesFeature extends $Feature<$TwistingVinesConfig> {
constructor(codec0: $Codec$$Type<$TwistingVinesConfig$$Type>)

public static "placeWeepingVinesColumn"(levelAccessor0: $LevelAccessor$$Type, randomSource1: $RandomSource$$Type, mutableBlockPos2: $BlockPos$MutableBlockPos$$Type, int3: integer, int4: integer, int5: integer): void
}
}

declare module "net.minecraft.world.level.levelgen.feature.treedecorators.LeaveVineDecorator" {
import { $Codec } from "com.mojang.serialization.Codec"
import { $TreeDecorator } from "net.minecraft.world.level.levelgen.feature.treedecorators.TreeDecorator"

export class $LeaveVineDecorator extends $TreeDecorator {
static readonly "CODEC": $Codec<$LeaveVineDecorator>

constructor(float0: float)

}
}

declare module "net.minecraft.world.level.levelgen.feature.RandomBooleanSelectorFeature" {
import { $Feature } from "net.minecraft.world.level.levelgen.feature.Feature"
import { $Codec$$Type } from "com.mojang.serialization.Codec"
import { $RandomBooleanFeatureConfiguration, $RandomBooleanFeatureConfiguration$$Type } from "net.minecraft.world.level.levelgen.feature.configurations.RandomBooleanFeatureConfiguration"

export class $RandomBooleanSelectorFeature extends $Feature<$RandomBooleanFeatureConfiguration> {
constructor(codec0: $Codec$$Type<$RandomBooleanFeatureConfiguration$$Type>)

}
}

declare module "net.minecraft.world.level.levelgen.feature.stateproviders.BlockStateProvider" {
import { $SimpleStateProvider } from "net.minecraft.world.level.levelgen.feature.stateproviders.SimpleStateProvider"
import { $Codec } from "com.mojang.serialization.Codec"
import { $BlockPos$$Type } from "net.minecraft.core.BlockPos"
import { $BlockState, $BlockState$$Type } from "net.minecraft.world.level.block.state.BlockState"
import { $RandomSource$$Type } from "net.minecraft.util.RandomSource"
import { $Block$$Type } from "net.minecraft.world.level.block.Block"

export class $BlockStateProvider {
static readonly "CODEC": $Codec<$BlockStateProvider>

constructor()

public "getState"(randomSource0: $RandomSource$$Type, blockPos1: $BlockPos$$Type): $BlockState
public static "simple"(block0: $Block$$Type): $SimpleStateProvider
public static "simple"(blockState0: $BlockState$$Type): $SimpleStateProvider
}
}

declare module "net.minecraft.world.level.levelgen.feature.BasaltPillarFeature" {
import { $NoneFeatureConfiguration, $NoneFeatureConfiguration$$Type } from "net.minecraft.world.level.levelgen.feature.configurations.NoneFeatureConfiguration"
import { $Feature } from "net.minecraft.world.level.levelgen.feature.Feature"
import { $Codec$$Type } from "com.mojang.serialization.Codec"

export class $BasaltPillarFeature extends $Feature<$NoneFeatureConfiguration> {
constructor(codec0: $Codec$$Type<$NoneFeatureConfiguration$$Type>)

}
}

declare module "net.minecraft.world.level.levelgen.feature.DiskFeature" {
import { $Feature } from "net.minecraft.world.level.levelgen.feature.Feature"
import { $DiskConfiguration, $DiskConfiguration$$Type } from "net.minecraft.world.level.levelgen.feature.configurations.DiskConfiguration"
import { $Codec$$Type } from "com.mojang.serialization.Codec"

export class $DiskFeature extends $Feature<$DiskConfiguration> {
constructor(codec0: $Codec$$Type<$DiskConfiguration$$Type>)

}
}

