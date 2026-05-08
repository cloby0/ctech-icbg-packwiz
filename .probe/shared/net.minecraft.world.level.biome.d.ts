declare module "net.minecraft.world.level.biome.BiomeManager" {
import { $Holder } from "net.minecraft.core.Holder"
import { $BiomeManager$NoiseBiomeSource$$Type } from "net.minecraft.world.level.biome.BiomeManager$NoiseBiomeSource"
import { $BlockPos$$Type } from "net.minecraft.core.BlockPos"
import { $BiomeManagerAccessor } from "org.embeddedt.modernfix.common.mixin.perf.optimize_surface_rules.BiomeManagerAccessor"
import { $Biome } from "net.minecraft.world.level.biome.Biome"

export class $BiomeManager implements $BiomeManagerAccessor {
static readonly "CHUNK_CENTER_QUART": integer
readonly "biomeZoomSeed": long

constructor(noiseBiomeSource0: $BiomeManager$NoiseBiomeSource$$Type, long1: long)

public "getBiome"(blockPos0: $BlockPos$$Type): $Holder<$Biome>
public static "getFiddledDistance"(long0: long, int1: integer, int2: integer, int3: integer, double4: double, double5: double, double6: double): double
public "getNoiseBiomeAtPosition"(blockPos0: $BlockPos$$Type): $Holder<$Biome>
public "getNoiseBiomeAtPosition"(double0: double, double1: double, double2: double): $Holder<$Biome>
public "getNoiseBiomeAtQuart"(int0: integer, int1: integer, int2: integer): $Holder<$Biome>
public static "obfuscateSeed"(long0: long): long
public "withDifferentSource"(noiseBiomeSource0: $BiomeManager$NoiseBiomeSource$$Type): $BiomeManager
}
}

declare module "net.minecraft.world.level.biome.Biome$ClimateSettings" {
import { $MapCodec } from "com.mojang.serialization.MapCodec"
import { $Record } from "java.lang.Record"
import { $Biome$TemperatureModifier, $Biome$TemperatureModifier$$Type } from "net.minecraft.world.level.biome.Biome$TemperatureModifier"

export class $Biome$ClimateSettings extends $Record {
static readonly "CODEC": $MapCodec<$Biome$ClimateSettings>
"downfall": float
"hasPrecipitation": boolean
"temperature": float
"temperatureModifier": $Biome$TemperatureModifier

constructor(hasPrecipitation: boolean, temperature: float, temperatureModifier: $Biome$TemperatureModifier$$Type, downfall: float)

public "downfall"(): float
public "hasPrecipitation"(): boolean
public "temperature"(): float
public "temperatureModifier"(): $Biome$TemperatureModifier
}
}

declare module "net.minecraft.world.level.biome.AmbientMoodSettings" {
import { $Codec } from "com.mojang.serialization.Codec"
import { $Holder, $Holder$$Type } from "net.minecraft.core.Holder"
import { $SoundEvent, $SoundEvent$$Type } from "net.minecraft.sounds.SoundEvent"

export class $AmbientMoodSettings {
static readonly "CODEC": $Codec<$AmbientMoodSettings>
static readonly "LEGACY_CAVE_SETTINGS": $AmbientMoodSettings

constructor(holder0: $Holder$$Type<$SoundEvent$$Type>, int1: integer, int2: integer, double3: double)

public "getBlockSearchExtent"(): integer
public "getSoundEvent"(): $Holder<$SoundEvent>
public "getSoundPositionOffset"(): double
public "getTickDelay"(): integer
get "blockSearchExtent"(): integer
get "soundEvent"(): $Holder<$SoundEvent>
get "soundPositionOffset"(): double
get "tickDelay"(): integer
}
}

declare module "net.minecraft.world.level.biome.Biome$Precipitation" {
import { $Enum } from "java.lang.Enum"

export class $Biome$Precipitation extends $Enum<$Biome$Precipitation> {
static readonly "NONE": $Biome$Precipitation
static readonly "RAIN": $Biome$Precipitation
static readonly "SNOW": $Biome$Precipitation

public static "valueOf"(string0: string): $Biome$Precipitation
public static "values"(): $Biome$Precipitation[]
}
}

declare module "net.minecraft.world.level.biome.AmbientAdditionsSettings" {
import { $Codec } from "com.mojang.serialization.Codec"
import { $Holder, $Holder$$Type } from "net.minecraft.core.Holder"
import { $SoundEvent, $SoundEvent$$Type } from "net.minecraft.sounds.SoundEvent"

export class $AmbientAdditionsSettings {
static readonly "CODEC": $Codec<$AmbientAdditionsSettings>

constructor(holder0: $Holder$$Type<$SoundEvent$$Type>, double1: double)

public "getSoundEvent"(): $Holder<$SoundEvent>
public "getTickChance"(): double
get "soundEvent"(): $Holder<$SoundEvent>
get "tickChance"(): double
}
}

declare module "net.minecraft.world.level.biome.BiomeSpecialEffects$GrassColorModifier" {
import { $IExtensibleEnum } from "net.minecraftforge.common.IExtensibleEnum"
import { $Codec } from "com.mojang.serialization.Codec"
import { $Enum, $Enum$$Type } from "java.lang.Enum"
import { $StringRepresentable, $StringRepresentable$$Type } from "net.minecraft.util.StringRepresentable"
import { $StringRepresentable$EnumCodec } from "net.minecraft.util.StringRepresentable$EnumCodec"
import { $Keyable } from "com.mojang.serialization.Keyable"
import { $Supplier$$Type } from "java.util.function.Supplier"
import { $Function$$Type } from "java.util.function.Function"
import { $BiomeSpecialEffects$GrassColorModifier$ColorModifier$$Type } from "net.minecraft.world.level.biome.BiomeSpecialEffects$GrassColorModifier$ColorModifier"

export class $BiomeSpecialEffects$GrassColorModifier extends $Enum<$BiomeSpecialEffects$GrassColorModifier> implements $StringRepresentable, $IExtensibleEnum {
static readonly "CODEC": $Codec<$BiomeSpecialEffects$GrassColorModifier>
static readonly "DARK_FOREST": $BiomeSpecialEffects$GrassColorModifier
static readonly "NONE": $BiomeSpecialEffects$GrassColorModifier
static readonly "SWAMP": $BiomeSpecialEffects$GrassColorModifier

public static "byName"(string0: string): $BiomeSpecialEffects$GrassColorModifier
public static "create"(string0: string, string1: string, colorModifier2: $BiomeSpecialEffects$GrassColorModifier$ColorModifier$$Type): $BiomeSpecialEffects$GrassColorModifier
public static "createCodecForExtensibleEnum"<E extends ($Enum<E> & $StringRepresentable)>(supplier0: $Supplier$$Type<E[]>, function1: $Function$$Type<string, E>): $Codec<E>
public static "fromEnum"<E extends ($Enum<E> & $StringRepresentable)>(supplier0: $Supplier$$Type<E[]>): $StringRepresentable$EnumCodec<E>
public static "fromEnumWithMapping"<E extends ($Enum<E> & $StringRepresentable)>(supplier0: $Supplier$$Type<E[]>, function1: $Function$$Type<string, string>): $StringRepresentable$EnumCodec<E>
public "getName"(): string
public "getSerializedName"(): string
public "init"(): void
public static "keys"(stringRepresentable0s: $StringRepresentable$$Type[]): $Keyable
public "modifyColor"(double0: double, double1: double, int2: integer): integer
public static "valueOf"(string0: string): $BiomeSpecialEffects$GrassColorModifier
public static "values"(): $BiomeSpecialEffects$GrassColorModifier[]
get "name"(): string
get "serializedName"(): string
}
}

declare module "net.minecraft.world.level.biome.Biome$TemperatureModifier" {
import { $Codec } from "com.mojang.serialization.Codec"
import { $Enum, $Enum$$Type } from "java.lang.Enum"
import { $BlockPos$$Type } from "net.minecraft.core.BlockPos"
import { $StringRepresentable, $StringRepresentable$$Type } from "net.minecraft.util.StringRepresentable"
import { $StringRepresentable$EnumCodec } from "net.minecraft.util.StringRepresentable$EnumCodec"
import { $Keyable } from "com.mojang.serialization.Keyable"
import { $Supplier$$Type } from "java.util.function.Supplier"
import { $Function$$Type } from "java.util.function.Function"

export class $Biome$TemperatureModifier extends $Enum<$Biome$TemperatureModifier> implements $StringRepresentable {
static readonly "CODEC": $Codec<$Biome$TemperatureModifier>
static readonly "FROZEN": $Biome$TemperatureModifier
static readonly "NONE": $Biome$TemperatureModifier

public static "fromEnum"<E extends ($Enum<E> & $StringRepresentable)>(supplier0: $Supplier$$Type<E[]>): $StringRepresentable$EnumCodec<E>
public static "fromEnumWithMapping"<E extends ($Enum<E> & $StringRepresentable)>(supplier0: $Supplier$$Type<E[]>, function1: $Function$$Type<string, string>): $StringRepresentable$EnumCodec<E>
public "getName"(): string
public "getSerializedName"(): string
public static "keys"(stringRepresentable0s: $StringRepresentable$$Type[]): $Keyable
public "modifyTemperature"(blockPos0: $BlockPos$$Type, float1: float): float
public static "valueOf"(string0: string): $Biome$TemperatureModifier
public static "values"(): $Biome$TemperatureModifier[]
get "name"(): string
get "serializedName"(): string
}
}

declare module "net.minecraft.world.level.biome.BiomeSource" {
import { $Predicate$$Type } from "java.util.function.Predicate"
import { $BiomeResolver } from "net.minecraft.world.level.biome.BiomeResolver"
import { $Set } from "java.util.Set"
import { $RandomSource$$Type } from "net.minecraft.util.RandomSource"
import { $LevelReader$$Type } from "net.minecraft.world.level.LevelReader"
import { $Supplier } from "java.util.function.Supplier"
import { $Biome, $Biome$$Type } from "net.minecraft.world.level.biome.Biome"
import { $Pair } from "com.mojang.datafixers.util.Pair"
import { $IExtendedBiomeSource } from "terrablender.worldgen.IExtendedBiomeSource"
import { $List$$Type } from "java.util.List"
import { $Codec } from "com.mojang.serialization.Codec"
import { $Holder, $Holder$$Type } from "net.minecraft.core.Holder"
import { $Climate$Sampler$$Type } from "net.minecraft.world.level.biome.Climate$Sampler"
import { $BlockPos, $BlockPos$$Type } from "net.minecraft.core.BlockPos"

export class $BiomeSource implements $BiomeResolver, $IExtendedBiomeSource {
static "CODEC": $Codec<$BiomeSource>
"possibleBiomes": $Supplier<$Set<$Holder<$Biome>>>

public "addDebugInfo"(list0: $List$$Type<string>, blockPos1: $BlockPos$$Type, sampler2: $Climate$Sampler$$Type): void
public "appendDeferredBiomesList"(list0: $List$$Type): void
public "findBiomeHorizontal"(int0: integer, int1: integer, int2: integer, int3: integer, int4: integer, predicate5: $Predicate$$Type<$Holder$$Type<$Biome$$Type>>, randomSource6: $RandomSource$$Type, boolean7: boolean, sampler8: $Climate$Sampler$$Type): $Pair<$BlockPos, $Holder<$Biome>>
public "findBiomeHorizontal"(int0: integer, int1: integer, int2: integer, int3: integer, predicate4: $Predicate$$Type<$Holder$$Type<$Biome$$Type>>, randomSource5: $RandomSource$$Type, sampler6: $Climate$Sampler$$Type): $Pair<$BlockPos, $Holder<$Biome>>
public "findClosestBiome3d"(blockPos0: $BlockPos$$Type, int1: integer, int2: integer, int3: integer, predicate4: $Predicate$$Type<$Holder$$Type<$Biome$$Type>>, sampler5: $Climate$Sampler$$Type, levelReader6: $LevelReader$$Type): $Pair<$BlockPos, $Holder<$Biome>>
public "getBiomesWithin"(int0: integer, int1: integer, int2: integer, int3: integer, sampler4: $Climate$Sampler$$Type): $Set<$Holder<$Biome>>
public "getNoiseBiome"(int0: integer, int1: integer, int2: integer, sampler3: $Climate$Sampler$$Type): $Holder<$Biome>
public "possibleBiomes"(): $Set<$Holder<$Biome>>
}
}

declare module "net.minecraft.world.level.biome.BiomeGenerationSettings$PlainBuilder" {
import { $List } from "java.util.List"
import { $Holder, $Holder$$Type } from "net.minecraft.core.Holder"
import { $BiomeGenerationSettings } from "net.minecraft.world.level.biome.BiomeGenerationSettings"
import { $PlacedFeature, $PlacedFeature$$Type } from "net.minecraft.world.level.levelgen.placement.PlacedFeature"
import { $GenerationStep$Carving$$Type } from "net.minecraft.world.level.levelgen.GenerationStep$Carving"
import { $ConfiguredWorldCarver$$Type } from "net.minecraft.world.level.levelgen.carver.ConfiguredWorldCarver"
import { $GenerationStep$Decoration$$Type } from "net.minecraft.world.level.levelgen.GenerationStep$Decoration"

export class $BiomeGenerationSettings$PlainBuilder {
readonly "features": $List<$List<$Holder<$PlacedFeature>>>

constructor()

public "addCarver"(carving0: $GenerationStep$Carving$$Type, holder1: $Holder$$Type<$ConfiguredWorldCarver$$Type<any>>): $BiomeGenerationSettings$PlainBuilder
public "addFeature"(decoration0: $GenerationStep$Decoration$$Type, holder1: $Holder$$Type<$PlacedFeature$$Type>): $BiomeGenerationSettings$PlainBuilder
public "addFeature"(int0: integer, holder1: $Holder$$Type<$PlacedFeature$$Type>): $BiomeGenerationSettings$PlainBuilder
public "build"(): $BiomeGenerationSettings
}
}

declare module "net.minecraft.world.level.biome.MobSpawnSettings$MobSpawnCost" {
import { $Codec } from "com.mojang.serialization.Codec"
import { $Record } from "java.lang.Record"

export class $MobSpawnSettings$MobSpawnCost extends $Record {
static readonly "CODEC": $Codec<$MobSpawnSettings$MobSpawnCost>

constructor(energyBudget: double, charge: double)

public "charge"(): double
public "energyBudget"(): double
}
}

declare module "net.minecraft.world.level.biome.Climate$Sampler" {
import { $Climate$TargetPoint } from "net.minecraft.world.level.biome.Climate$TargetPoint"
import { $List, $List$$Type } from "java.util.List"
import { $BlockPos } from "net.minecraft.core.BlockPos"
import { $DensityFunction, $DensityFunction$$Type } from "net.minecraft.world.level.levelgen.DensityFunction"
import { $Climate$ParameterPoint, $Climate$ParameterPoint$$Type } from "net.minecraft.world.level.biome.Climate$ParameterPoint"
import { $Record } from "java.lang.Record"

export class $Climate$Sampler extends $Record {
constructor(densityFunction0: $DensityFunction$$Type, densityFunction1: $DensityFunction$$Type, densityFunction2: $DensityFunction$$Type, densityFunction3: $DensityFunction$$Type, densityFunction4: $DensityFunction$$Type, densityFunction5: $DensityFunction$$Type, list6: $List$$Type<$Climate$ParameterPoint$$Type>)

public "continentalness"(): $DensityFunction
public "depth"(): $DensityFunction
public "erosion"(): $DensityFunction
public "findSpawnPosition"(): $BlockPos
public "humidity"(): $DensityFunction
public "sample"(int0: integer, int1: integer, int2: integer): $Climate$TargetPoint
public "spawnTarget"(): $List<$Climate$ParameterPoint>
public "temperature"(): $DensityFunction
public "weirdness"(): $DensityFunction
}
}

declare module "net.minecraft.world.level.biome.Climate$DistanceMetric" {
import { $Climate$RTree$Node$$Type } from "net.minecraft.world.level.biome.Climate$RTree$Node"

export interface $Climate$DistanceMetric<T = any> {
"distance"(node0: $Climate$RTree$Node$$Type<T>, long1s: long[]): long
}

export namespace $Climate$DistanceMetric {
const probejs$$marker: never
}
export abstract class $Climate$DistanceMetric$$Static<T = any> implements $Climate$DistanceMetric<T> {
}
}

declare module "net.minecraft.world.level.biome.MultiNoiseBiomeSourceParameterList$Preset" {
import { $ResourceLocation, $ResourceLocation$$Type } from "net.minecraft.resources.ResourceLocation"
import { $Codec } from "com.mojang.serialization.Codec"
import { $Stream } from "java.util.stream.Stream"
import { $Record } from "java.lang.Record"
import { $MultiNoiseBiomeSourceParameterList$Preset$SourceProvider, $MultiNoiseBiomeSourceParameterList$Preset$SourceProvider$$Type } from "net.minecraft.world.level.biome.MultiNoiseBiomeSourceParameterList$Preset$SourceProvider"
import { $ResourceKey } from "net.minecraft.resources.ResourceKey"
import { $Biome } from "net.minecraft.world.level.biome.Biome"

export class $MultiNoiseBiomeSourceParameterList$Preset extends $Record {
static readonly "CODEC": $Codec<$MultiNoiseBiomeSourceParameterList$Preset>
static readonly "NETHER": $MultiNoiseBiomeSourceParameterList$Preset
static readonly "OVERWORLD": $MultiNoiseBiomeSourceParameterList$Preset

constructor(resourceLocation0: $ResourceLocation$$Type, sourceProvider1: $MultiNoiseBiomeSourceParameterList$Preset$SourceProvider$$Type)

public "id"(): $ResourceLocation
public "provider"(): $MultiNoiseBiomeSourceParameterList$Preset$SourceProvider
public "usedBiomes"(): $Stream<$ResourceKey<$Biome>>
}
}

declare module "net.minecraft.world.level.biome.Climate$TargetPoint" {
import { $Record } from "java.lang.Record"

export class $Climate$TargetPoint extends $Record {
constructor(long0: long, long1: long, long2: long, long3: long, long4: long, long5: long)

public "continentalness"(): long
public "depth"(): long
public "erosion"(): long
public "humidity"(): long
public "temperature"(): long
public "weirdness"(): long
}
}

declare module "net.minecraft.world.level.biome.MobSpawnSettings$Builder" {
import { $List } from "java.util.List"
import { $MobSpawnSettings$SpawnerData, $MobSpawnSettings$SpawnerData$$Type } from "net.minecraft.world.level.biome.MobSpawnSettings$SpawnerData"
import { $MobSpawnSettings } from "net.minecraft.world.level.biome.MobSpawnSettings"
import { $EntityType, $EntityType$$Type } from "net.minecraft.world.entity.EntityType"
import { $MobCategory, $MobCategory$$Type } from "net.minecraft.world.entity.MobCategory"
import { $Map } from "java.util.Map"
import { $MobSpawnSettingsBuilderForgeAccessor } from "fuzs.puzzleslib.mixin.accessor.MobSpawnSettingsBuilderForgeAccessor"
import { $MobSpawnSettings$MobSpawnCost } from "net.minecraft.world.level.biome.MobSpawnSettings$MobSpawnCost"

export class $MobSpawnSettings$Builder implements $MobSpawnSettingsBuilderForgeAccessor {
"creatureGenerationProbability": float
readonly "mobSpawnCosts": $Map<$EntityType<any>, $MobSpawnSettings$MobSpawnCost>
readonly "spawners": $Map<$MobCategory, $List<$MobSpawnSettings$SpawnerData>>

constructor()

public "addMobCharge"(entityType0: $EntityType$$Type<any>, double1: double, double2: double): $MobSpawnSettings$Builder
public "addSpawn"(mobCategory0: $MobCategory$$Type, spawnerData1: $MobSpawnSettings$SpawnerData$$Type): $MobSpawnSettings$Builder
public "build"(): $MobSpawnSettings
public "creatureGenerationProbability"(float0: float): $MobSpawnSettings$Builder
}
}

declare module "net.minecraft.world.level.biome.BiomeResolver" {
import { $Holder } from "net.minecraft.core.Holder"
import { $Climate$Sampler$$Type } from "net.minecraft.world.level.biome.Climate$Sampler"
import { $Biome } from "net.minecraft.world.level.biome.Biome"

export interface $BiomeResolver {
"getNoiseBiome"(int0: integer, int1: integer, int2: integer, sampler3: $Climate$Sampler$$Type): $Holder<$Biome>
}

export namespace $BiomeResolver {
const probejs$$marker: never
}
export abstract class $BiomeResolver$$Static implements $BiomeResolver {
}
}

declare module "net.minecraft.world.level.biome.Climate$RTree" {
import { $Climate$TargetPoint$$Type } from "net.minecraft.world.level.biome.Climate$TargetPoint"
import { $List$$Type } from "java.util.List"
import { $Climate$DistanceMetric$$Type } from "net.minecraft.world.level.biome.Climate$DistanceMetric"
import { $Climate$ParameterPoint$$Type } from "net.minecraft.world.level.biome.Climate$ParameterPoint"
import { $Pair$$Type } from "com.mojang.datafixers.util.Pair"

export class $Climate$RTree<T = any> {
public static "create"<T>(list0: $List$$Type<$Pair$$Type<$Climate$ParameterPoint$$Type, T>>): $Climate$RTree<T>
public "search"(targetPoint0: $Climate$TargetPoint$$Type, distanceMetric1: $Climate$DistanceMetric$$Type<T>): T
}
}

declare module "net.minecraft.world.level.biome.Climate$ParameterList" {
import { $Climate$TargetPoint$$Type } from "net.minecraft.world.level.biome.Climate$TargetPoint"
import { $RegionType$$Type } from "terrablender.api.RegionType"
import { $List, $List$$Type } from "java.util.List"
import { $Codec } from "com.mojang.serialization.Codec"
import { $IExtendedParameterList } from "terrablender.worldgen.IExtendedParameterList"
import { $MapCodec$$Type } from "com.mojang.serialization.MapCodec"
import { $Climate$ParameterPoint, $Climate$ParameterPoint$$Type } from "net.minecraft.world.level.biome.Climate$ParameterPoint"
import { $Climate$RTree } from "net.minecraft.world.level.biome.Climate$RTree"
import { $RegistryAccess$$Type } from "net.minecraft.core.RegistryAccess"
import { $Pair, $Pair$$Type } from "com.mojang.datafixers.util.Pair"

export class $Climate$ParameterList<T = any> implements $IExtendedParameterList {
constructor(list0: $List$$Type<$Pair$$Type<$Climate$ParameterPoint$$Type, T>>)

public static "codec"<T>(mapCodec0: $MapCodec$$Type<T>): $Codec<$Climate$ParameterList<T>>
public "findValue"(targetPoint0: $Climate$TargetPoint$$Type): T
public "findValueBruteForce"(targetPoint0: $Climate$TargetPoint$$Type): T
public "findValueIndex"(targetPoint0: $Climate$TargetPoint$$Type): T
public "findValuePositional"(targetPoint0: $Climate$TargetPoint$$Type, int1: integer, int2: integer, int3: integer): any
public "getTree"(int0: integer): $Climate$RTree
public "getTreeCount"(): integer
public "getUniqueness"(int0: integer, int1: integer, int2: integer): integer
public "initializeForTerraBlender"(registryAccess0: $RegistryAccess$$Type, regionType1: $RegionType$$Type, long2: long): void
public "isInitialized"(): boolean
public "values"(): $List<$Pair<$Climate$ParameterPoint, T>>
get "treeCount"(): integer
get "initialized"(): boolean
}
}

declare module "net.minecraft.world.level.biome.Climate$RTree$Leaf" {
import { $Climate$DistanceMetric$$Type } from "net.minecraft.world.level.biome.Climate$DistanceMetric"
import { $Climate$ParameterPoint$$Type } from "net.minecraft.world.level.biome.Climate$ParameterPoint"
import { $Climate$RTree$Node } from "net.minecraft.world.level.biome.Climate$RTree$Node"

export class $Climate$RTree$Leaf<T = any> extends $Climate$RTree$Node<T> {
constructor(parameterPoint0: $Climate$ParameterPoint$$Type, t1: T)

public "search"(long0s: long[], leaf1: $Climate$RTree$Leaf$$Type<T>, distanceMetric2: $Climate$DistanceMetric$$Type<T>): $Climate$RTree$Leaf<T>
}
}

declare module "net.minecraft.world.level.biome.AmbientParticleSettings" {
import { $Codec } from "com.mojang.serialization.Codec"
import { $ParticleOptions, $ParticleOptions$$Type } from "net.minecraft.core.particles.ParticleOptions"
import { $RandomSource$$Type } from "net.minecraft.util.RandomSource"

export class $AmbientParticleSettings {
static readonly "CODEC": $Codec<$AmbientParticleSettings>

constructor(particleOptions0: $ParticleOptions$$Type, float1: float)

public "canSpawn"(randomSource0: $RandomSource$$Type): boolean
public "getOptions"(): $ParticleOptions
get "options"(): $ParticleOptions
}
}

declare module "net.minecraft.world.level.biome.BiomeSpecialEffects$GrassColorModifier$ColorModifier" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $BiomeSpecialEffects$GrassColorModifier$ColorModifier {
"modifyGrassColor"(double0: double, double1: double, int2: integer): integer
}

export namespace $BiomeSpecialEffects$GrassColorModifier$ColorModifier {
const probejs$$marker: never
}
export abstract class $BiomeSpecialEffects$GrassColorModifier$ColorModifier$$Static implements $BiomeSpecialEffects$GrassColorModifier$ColorModifier {
}
}

declare module "net.minecraft.world.level.biome.BiomeSpecialEffects$Builder" {
import { $Music, $Music$$Type } from "net.minecraft.sounds.Music"
import { $AmbientMoodSettings, $AmbientMoodSettings$$Type } from "net.minecraft.world.level.biome.AmbientMoodSettings"
import { $AmbientParticleSettings, $AmbientParticleSettings$$Type } from "net.minecraft.world.level.biome.AmbientParticleSettings"
import { $Holder, $Holder$$Type } from "net.minecraft.core.Holder"
import { $BiomeSpecialEffects$GrassColorModifier, $BiomeSpecialEffects$GrassColorModifier$$Type } from "net.minecraft.world.level.biome.BiomeSpecialEffects$GrassColorModifier"
import { $SoundEvent, $SoundEvent$$Type } from "net.minecraft.sounds.SoundEvent"
import { $Optional, $Optional$$Type } from "java.util.Optional"
import { $AmbientAdditionsSettings, $AmbientAdditionsSettings$$Type } from "net.minecraft.world.level.biome.AmbientAdditionsSettings"
import { $BiomeSpecialEffects } from "net.minecraft.world.level.biome.BiomeSpecialEffects"
import { $OptionalInt } from "java.util.OptionalInt"
import { $BiomeSpecialEffectsBuilderForgeAccessor } from "fuzs.puzzleslib.mixin.accessor.BiomeSpecialEffectsBuilderForgeAccessor"

export class $BiomeSpecialEffects$Builder implements $BiomeSpecialEffectsBuilderForgeAccessor {
"ambientParticle": $Optional<$AmbientParticleSettings>
"backgroundMusic": $Optional<$Music>
"fogColor": $OptionalInt
"foliageColorOverride": $Optional<integer>
"grassColorModifier": $BiomeSpecialEffects$GrassColorModifier
"grassColorOverride": $Optional<integer>
"skyColor": $OptionalInt
"waterColor": $OptionalInt
"waterFogColor": $OptionalInt

constructor()

public "ambientAdditionsSound"(ambientAdditionsSettings0: $AmbientAdditionsSettings$$Type): $BiomeSpecialEffects$Builder
public "ambientLoopSound"(holder0: $Holder$$Type<$SoundEvent$$Type>): $BiomeSpecialEffects$Builder
public "ambientMoodSound"(ambientMoodSettings0: $AmbientMoodSettings$$Type): $BiomeSpecialEffects$Builder
public "ambientParticle"(ambientParticleSettings0: $AmbientParticleSettings$$Type): $BiomeSpecialEffects$Builder
public "backgroundMusic"(music0: $Music$$Type): $BiomeSpecialEffects$Builder
public "build"(): $BiomeSpecialEffects
public "fogColor"(int0: integer): $BiomeSpecialEffects$Builder
public "foliageColorOverride"(int0: integer): $BiomeSpecialEffects$Builder
public "grassColorModifier"(grassColorModifier0: $BiomeSpecialEffects$GrassColorModifier$$Type): $BiomeSpecialEffects$Builder
public "grassColorOverride"(int0: integer): $BiomeSpecialEffects$Builder
public "skyColor"(int0: integer): $BiomeSpecialEffects$Builder
public "waterColor"(int0: integer): $BiomeSpecialEffects$Builder
public "waterFogColor"(int0: integer): $BiomeSpecialEffects$Builder
get "ambientAdditionsSettings"(): $Optional<$AmbientAdditionsSettings>
set "ambientAdditionsSettings"(value: $Optional$$Type<$AmbientAdditionsSettings$$Type>)
get "ambientLoopSoundEvent"(): $Optional<$Holder<$SoundEvent>>
set "ambientLoopSoundEvent"(value: $Optional$$Type<$Holder$$Type<$SoundEvent$$Type>>)
get "ambientMoodSettings"(): $Optional<$AmbientMoodSettings>
set "ambientMoodSettings"(value: $Optional$$Type<$AmbientMoodSettings$$Type>)
}
}

declare module "net.minecraft.world.level.biome.Climate$ParameterPoint" {
import { $List, $List$$Type } from "java.util.List"
import { $Codec } from "com.mojang.serialization.Codec"
import { $Operation$$Type } from "com.llamalad7.mixinextras.injector.wrapoperation.Operation"
import { $Record } from "java.lang.Record"
import { $Climate$Parameter, $Climate$Parameter$$Type } from "net.minecraft.world.level.biome.Climate$Parameter"

export class $Climate$ParameterPoint extends $Record {
static readonly "CODEC": $Codec<$Climate$ParameterPoint>

constructor(parameter0: $Climate$Parameter$$Type, parameter1: $Climate$Parameter$$Type, parameter2: $Climate$Parameter$$Type, parameter3: $Climate$Parameter$$Type, parameter4: $Climate$Parameter$$Type, parameter5: $Climate$Parameter$$Type, long6: long)

public "continentalness"(): $Climate$Parameter
public "depth"(): $Climate$Parameter
public "erosion"(): $Climate$Parameter
public "humidity"(): $Climate$Parameter
public "modifyExpressionValue$gmm000$giveMinimumOffsetIfDisabled"(long0: long): long
public "modifyReturnValue$gmm000$dummyOutDisabledParameters"(list0: $List$$Type): $List
public "offset"(): long
public "temperature"(): $Climate$Parameter
public "weirdness"(): $Climate$Parameter
public "wrapOperation$gmm000$giveMinimumDistanceForDisabledParameters"(parameter0: $Climate$Parameter$$Type, long1: long, operation2: $Operation$$Type): long
}
}

declare module "net.minecraft.world.level.biome.Climate$RTree$Node" {
import { $List$$Type } from "java.util.List"
import { $Climate$DistanceMetric$$Type } from "net.minecraft.world.level.biome.Climate$DistanceMetric"
import { $Climate$RTree$Leaf, $Climate$RTree$Leaf$$Type } from "net.minecraft.world.level.biome.Climate$RTree$Leaf"
import { $Climate$Parameter$$Type } from "net.minecraft.world.level.biome.Climate$Parameter"

export class $Climate$RTree$Node<T = any> {
constructor(list0: $List$$Type<$Climate$Parameter$$Type>)

public "distance"(long0s: long[]): long
public "search"(long0s: long[], leaf1: $Climate$RTree$Leaf$$Type<T>, distanceMetric2: $Climate$DistanceMetric$$Type<T>): $Climate$RTree$Leaf<T>
}
}

declare module "net.minecraft.world.level.biome.BiomeGenerationSettings" {
import { $List, $List$$Type } from "java.util.List"
import { $ConfiguredFeature, $ConfiguredFeature$$Type } from "net.minecraft.world.level.levelgen.feature.ConfiguredFeature"
import { $Holder } from "net.minecraft.core.Holder"
import { $PlacedFeature, $PlacedFeature$$Type } from "net.minecraft.world.level.levelgen.placement.PlacedFeature"
import { $HolderSet } from "net.minecraft.core.HolderSet"
import { $MapCodec } from "com.mojang.serialization.MapCodec"
import { $GenerationStep$Carving, $GenerationStep$Carving$$Type } from "net.minecraft.world.level.levelgen.GenerationStep$Carving"
import { $Set } from "java.util.Set"
import { $ConfiguredWorldCarver } from "net.minecraft.world.level.levelgen.carver.ConfiguredWorldCarver"
import { $Supplier, $Supplier$$Type } from "java.util.function.Supplier"
import { $Iterable } from "java.lang.Iterable"

export class $BiomeGenerationSettings {
static readonly "CODEC": $MapCodec<$BiomeGenerationSettings>
static readonly "EMPTY": $BiomeGenerationSettings

public "features"(): $List<$HolderSet<$PlacedFeature>>
public "getCarvers"(carving0: $GenerationStep$Carving$$Type): $Iterable<$Holder<$ConfiguredWorldCarver<any>>>
public "getCarvingStages"(): $Set<$GenerationStep$Carving>
public "getFlowerFeatures"(): $List<$ConfiguredFeature<any, any>>
public "hasFeature"(placedFeature0: $PlacedFeature$$Type): boolean
get "flowerFeatures"(): $Supplier<$List<$ConfiguredFeature<any, any>>>
set "flowerFeatures"(value: $Supplier$$Type<$List$$Type<$ConfiguredFeature$$Type<any, any>>>)
get "carvingStages"(): $Set<$GenerationStep$Carving>
}
}

declare module "net.minecraft.world.level.biome.Climate$Parameter" {
import { $Codec } from "com.mojang.serialization.Codec"
import { $Record } from "java.lang.Record"

export class $Climate$Parameter extends $Record {
static readonly "CODEC": $Codec<$Climate$Parameter>

constructor(long0: long, long1: long)

public "distance"(parameter0: $Climate$Parameter$$Type): long
public "distance"(long0: long): long
public "max"(): long
public "min"(): long
public static "point"(float0: float): $Climate$Parameter
public static "span"(float0: float, float1: float): $Climate$Parameter
public static "span"(parameter0: $Climate$Parameter$$Type, parameter1: $Climate$Parameter$$Type): $Climate$Parameter
public "span"(parameter0: $Climate$Parameter$$Type): $Climate$Parameter
}
}

declare module "net.minecraft.world.level.biome.FeatureSorter$StepFeatureData" {
import { $List, $List$$Type } from "java.util.List"
import { $PlacedFeature, $PlacedFeature$$Type } from "net.minecraft.world.level.levelgen.placement.PlacedFeature"
import { $ToIntFunction, $ToIntFunction$$Type } from "java.util.function.ToIntFunction"
import { $Record } from "java.lang.Record"

export class $FeatureSorter$StepFeatureData extends $Record {
constructor(list0: $List$$Type<$PlacedFeature$$Type>, toIntFunction1: $ToIntFunction$$Type<$PlacedFeature$$Type>)

public "features"(): $List<$PlacedFeature>
public "indexMapping"(): $ToIntFunction<$PlacedFeature>
}
}

declare module "net.minecraft.world.level.biome.MobSpawnSettings" {
import { $MobSpawnSettings$SpawnerData } from "net.minecraft.world.level.biome.MobSpawnSettings$SpawnerData"
import { $EntityType, $EntityType$$Type } from "net.minecraft.world.entity.EntityType"
import { $MobCategory, $MobCategory$$Type } from "net.minecraft.world.entity.MobCategory"
import { $MapCodec } from "com.mojang.serialization.MapCodec"
import { $WeightedRandomList } from "net.minecraft.util.random.WeightedRandomList"
import { $Set } from "java.util.Set"
import { $MobSpawnSettings$MobSpawnCost } from "net.minecraft.world.level.biome.MobSpawnSettings$MobSpawnCost"

export class $MobSpawnSettings {
static readonly "CODEC": $MapCodec<$MobSpawnSettings>
static readonly "EMPTY": $MobSpawnSettings
static readonly "EMPTY_MOB_LIST": $WeightedRandomList<$MobSpawnSettings$SpawnerData>

public "getCreatureProbability"(): float
public "getEntityTypes"(): $Set<$EntityType<any>>
public "getMobSpawnCost"(entityType0: $EntityType$$Type<any>): $MobSpawnSettings$MobSpawnCost
public "getMobs"(mobCategory0: $MobCategory$$Type): $WeightedRandomList<$MobSpawnSettings$SpawnerData>
public "getSpawnerTypes"(): $Set<$MobCategory>
get "creatureProbability"(): float
get "entityTypes"(): $Set<$EntityType<any>>
get "spawnerTypes"(): $Set<$MobCategory>
}
}

declare module "net.minecraft.world.level.biome.BiomeManager$NoiseBiomeSource" {
import { $Holder } from "net.minecraft.core.Holder"
import { $Biome } from "net.minecraft.world.level.biome.Biome"

export interface $BiomeManager$NoiseBiomeSource {
"getNoiseBiome"(int0: integer, int1: integer, int2: integer): $Holder<$Biome>
}

export namespace $BiomeManager$NoiseBiomeSource {
const probejs$$marker: never
}
export abstract class $BiomeManager$NoiseBiomeSource$$Static implements $BiomeManager$NoiseBiomeSource {
}
}

declare module "net.minecraft.world.level.biome.BiomeSpecialEffects" {
import { $AmbientMoodSettings, $AmbientMoodSettings$$Type } from "net.minecraft.world.level.biome.AmbientMoodSettings"
import { $Music, $Music$$Type } from "net.minecraft.sounds.Music"
import { $Codec } from "com.mojang.serialization.Codec"
import { $Holder, $Holder$$Type } from "net.minecraft.core.Holder"
import { $AmbientParticleSettings, $AmbientParticleSettings$$Type } from "net.minecraft.world.level.biome.AmbientParticleSettings"
import { $BiomeSpecialEffects$GrassColorModifier, $BiomeSpecialEffects$GrassColorModifier$$Type } from "net.minecraft.world.level.biome.BiomeSpecialEffects$GrassColorModifier"
import { $SoundEvent, $SoundEvent$$Type } from "net.minecraft.sounds.SoundEvent"
import { $Optional, $Optional$$Type } from "java.util.Optional"
import { $AmbientAdditionsSettings, $AmbientAdditionsSettings$$Type } from "net.minecraft.world.level.biome.AmbientAdditionsSettings"

export class $BiomeSpecialEffects {
static readonly "CODEC": $Codec<$BiomeSpecialEffects>

public "getAmbientAdditionsSettings"(): $Optional<$AmbientAdditionsSettings>
public "getAmbientLoopSoundEvent"(): $Optional<$Holder<$SoundEvent>>
public "getAmbientMoodSettings"(): $Optional<$AmbientMoodSettings>
public "getAmbientParticleSettings"(): $Optional<$AmbientParticleSettings>
public "getBackgroundMusic"(): $Optional<$Music>
public "getFogColor"(): integer
public "getFoliageColorOverride"(): $Optional<integer>
public "getGrassColorModifier"(): $BiomeSpecialEffects$GrassColorModifier
public "getGrassColorOverride"(): $Optional<integer>
public "getSkyColor"(): integer
public "getWaterColor"(): integer
public "getWaterFogColor"(): integer
get "ambientAdditionsSettings"(): $Optional<$AmbientAdditionsSettings>
set "ambientAdditionsSettings"(value: $Optional$$Type<$AmbientAdditionsSettings$$Type>)
get "ambientLoopSoundEvent"(): $Optional<$Holder<$SoundEvent>>
set "ambientLoopSoundEvent"(value: $Optional$$Type<$Holder$$Type<$SoundEvent$$Type>>)
get "ambientMoodSettings"(): $Optional<$AmbientMoodSettings>
set "ambientMoodSettings"(value: $Optional$$Type<$AmbientMoodSettings$$Type>)
get "ambientParticleSettings"(): $Optional<$AmbientParticleSettings>
set "ambientParticleSettings"(value: $Optional$$Type<$AmbientParticleSettings$$Type>)
get "backgroundMusic"(): $Optional<$Music>
set "backgroundMusic"(value: $Optional$$Type<$Music$$Type>)
get "fogColor"(): integer
set "fogColor"(value: integer)
get "foliageColorOverride"(): $Optional<integer>
set "foliageColorOverride"(value: $Optional$$Type<integer>)
get "grassColorModifier"(): $BiomeSpecialEffects$GrassColorModifier
set "grassColorModifier"(value: $BiomeSpecialEffects$GrassColorModifier$$Type)
get "grassColorOverride"(): $Optional<integer>
set "grassColorOverride"(value: $Optional$$Type<integer>)
get "skyColor"(): integer
set "skyColor"(value: integer)
get "waterColor"(): integer
set "waterColor"(value: integer)
get "waterFogColor"(): integer
set "waterFogColor"(value: integer)
}
}

declare module "net.minecraft.world.level.biome.MobSpawnSettings$SpawnerData" {
import { $Codec } from "com.mojang.serialization.Codec"
import { $WeightedEntry$IntrusiveBase } from "net.minecraft.util.random.WeightedEntry$IntrusiveBase"
import { $EntityType, $EntityType$$Type } from "net.minecraft.world.entity.EntityType"
import { $Weight$$Type } from "net.minecraft.util.random.Weight"
import { $WeightedEntry$Wrapper } from "net.minecraft.util.random.WeightedEntry$Wrapper"

export class $MobSpawnSettings$SpawnerData extends $WeightedEntry$IntrusiveBase {
static readonly "CODEC": $Codec<$MobSpawnSettings$SpawnerData>
readonly "maxCount": integer
readonly "minCount": integer
readonly "type": $EntityType<any>

constructor(entityType0: $EntityType$$Type<any>, weight1: $Weight$$Type, int2: integer, int3: integer)
constructor(entityType0: $EntityType$$Type<any>, int1: integer, int2: integer, int3: integer)

public static "wrap"<T>(t0: T, int1: integer): $WeightedEntry$Wrapper<T>
}
}

declare module "net.minecraft.world.level.biome.MultiNoiseBiomeSourceParameterList$Preset$SourceProvider" {
import { $Function$$Type } from "java.util.function.Function"
import { $ResourceKey$$Type } from "net.minecraft.resources.ResourceKey"
import { $Biome$$Type } from "net.minecraft.world.level.biome.Biome"
import { $Climate$ParameterList } from "net.minecraft.world.level.biome.Climate$ParameterList"

export interface $MultiNoiseBiomeSourceParameterList$Preset$SourceProvider {
"apply"<T>(function0: $Function$$Type<$ResourceKey$$Type<$Biome$$Type>, T>): $Climate$ParameterList<T>
}

export namespace $MultiNoiseBiomeSourceParameterList$Preset$SourceProvider {
const probejs$$marker: never
}
export abstract class $MultiNoiseBiomeSourceParameterList$Preset$SourceProvider$$Static implements $MultiNoiseBiomeSourceParameterList$Preset$SourceProvider {
}
}

