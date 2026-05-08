declare module "net.minecraft.world.level.biome.BiomeManager" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $BiomeManager$$Type = ($BiomeManager);
}

declare module "net.minecraft.world.level.biome.Biome$ClimateSettings" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $Biome$ClimateSettings$$Type = ($Biome$ClimateSettings);
}

declare module "net.minecraft.world.level.biome.AmbientMoodSettings" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $AmbientMoodSettings$$Type = ($AmbientMoodSettings);
}

declare module "net.minecraft.world.level.biome.Biome$Precipitation" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $Biome$Precipitation$$Type = ($Biome$Precipitation | ("none" | "rain" | "snow"));
}

declare module "net.minecraft.world.level.biome.AmbientAdditionsSettings" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $AmbientAdditionsSettings$$Type = ($AmbientAdditionsSettings);
}

declare module "net.minecraft.world.level.biome.BiomeSpecialEffects$GrassColorModifier" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $BiomeSpecialEffects$GrassColorModifier$$Type = ($BiomeSpecialEffects$GrassColorModifier | ("none" | "dark_forest" | "swamp"));
}

declare module "net.minecraft.world.level.biome.Biome$TemperatureModifier" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $Biome$TemperatureModifier$$Type = ($Biome$TemperatureModifier | ("none" | "frozen"));
}

declare module "net.minecraft.world.level.biome.BiomeSource" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $BiomeSource$$Type = ($BiomeSource);
}

declare module "net.minecraft.world.level.biome.BiomeGenerationSettings$PlainBuilder" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $BiomeGenerationSettings$PlainBuilder$$Type = ($BiomeGenerationSettings$PlainBuilder);
}

declare module "net.minecraft.world.level.biome.MobSpawnSettings$MobSpawnCost" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $MobSpawnSettings$MobSpawnCost$$Type = ($MobSpawnSettings$MobSpawnCost);
}

declare module "net.minecraft.world.level.biome.Climate$Sampler" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $Climate$Sampler$$Type = ($Climate$Sampler);
}

declare module "net.minecraft.world.level.biome.Climate$DistanceMetric" {
import { $Climate$RTree$Node } from "net.minecraft.world.level.biome.Climate$RTree$Node"

/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $Climate$DistanceMetric$$Type<T = any> = ($Climate$DistanceMetric<T> | ((arg0: $Climate$RTree$Node<T>, arg1: long[]) => long));
}

declare module "net.minecraft.world.level.biome.MultiNoiseBiomeSourceParameterList$Preset" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $MultiNoiseBiomeSourceParameterList$Preset$$Type = ($MultiNoiseBiomeSourceParameterList$Preset);
}

declare module "net.minecraft.world.level.biome.Climate$TargetPoint" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $Climate$TargetPoint$$Type = ($Climate$TargetPoint);
}

declare module "net.minecraft.world.level.biome.Biome" {
import { $AmbientMoodSettings } from "net.minecraft.world.level.biome.AmbientMoodSettings"
import { $Music } from "net.minecraft.sounds.Music"
import { $BiomeGenerationSettings } from "net.minecraft.world.level.biome.BiomeGenerationSettings"
import { $Biome$ClimateSettings } from "net.minecraft.world.level.biome.Biome$ClimateSettings"
import { $HolderSet } from "net.minecraft.core.HolderSet"
import { $AmbientAdditionsSettings } from "net.minecraft.world.level.biome.AmbientAdditionsSettings"
import { $LevelReader$$Type } from "net.minecraft.world.level.LevelReader"
import { $CallbackInfoReturnable$$Type } from "org.spongepowered.asm.mixin.injection.callback.CallbackInfoReturnable"
import { $Codec } from "com.mojang.serialization.Codec"
import { $Holder } from "net.minecraft.core.Holder"
import { $AmbientParticleSettings } from "net.minecraft.world.level.biome.AmbientParticleSettings"
import { $BlockPos$$Type } from "net.minecraft.core.BlockPos"
import { $SoundEvent } from "net.minecraft.sounds.SoundEvent"
import { $MobSpawnSettings } from "net.minecraft.world.level.biome.MobSpawnSettings"
import { $PerlinSimplexNoise } from "net.minecraft.world.level.levelgen.synth.PerlinSimplexNoise"
import { $Optional } from "java.util.Optional"
import { $BiomeSpecialEffects } from "net.minecraft.world.level.biome.BiomeSpecialEffects"
import { $BiomeFTBC } from "dev.ftb.mods.ftbchunks.core.BiomeFTBC"
import { $ModifiableBiomeInfo } from "net.minecraftforge.common.world.ModifiableBiomeInfo"
import { $Biome$Precipitation } from "net.minecraft.world.level.biome.Biome$Precipitation"
import { $BiomeAccessor } from "vazkii.botania.mixin.BiomeAccessor"

export class $Biome implements $BiomeAccessor, $BiomeFTBC {
/** @deprecated */
static readonly "BIOME_INFO_NOISE": $PerlinSimplexNoise
static readonly "CODEC": $Codec<$Holder<$Biome>>
static readonly "DIRECT_CODEC": $Codec<$Biome>
static readonly "LIST_CODEC": $Codec<$HolderSet<$Biome>>
static readonly "NETWORK_CODEC": $Codec<$Biome>

public "coldEnoughToSnow"(blockPos0: $BlockPos$$Type): boolean
public "getAmbientAdditions"(): $Optional<$AmbientAdditionsSettings>
public "getAmbientLoop"(): $Optional<$Holder<$SoundEvent>>
public "getAmbientMood"(): $Optional<$AmbientMoodSettings>
public "getAmbientParticle"(): $Optional<$AmbientParticleSettings>
public "getBackgroundMusic"(): $Optional<$Music>
public "getBaseTemperature"(): float
public "getFTBCBiomeColorIndex"(): integer
public "getFogColor"(): integer
public "getFoliageColor"(): integer
public "getGenerationSettings"(): $BiomeGenerationSettings
public "getGrassColor"(double0: double, double1: double): integer
public "getMobSettings"(): $MobSpawnSettings
public "getModifiedClimateSettings"(): $Biome$ClimateSettings
public "getModifiedSpecialEffects"(): $BiomeSpecialEffects
public "getPrecipitationAt"(blockPos0: $BlockPos$$Type): $Biome$Precipitation
public "getSkyColor"(): integer
public "getSpecialEffects"(): $BiomeSpecialEffects
public "getTemperature"(blockPos0: $BlockPos$$Type): float
public "getWaterColor"(): integer
public "getWaterFogColor"(): integer
public "handler$dle000$grass"(double0: double, double1: double, callbackInfoReturnable2: $CallbackInfoReturnable$$Type): void
public "handler$efi000$onShouldSnow"(levelReader0: $LevelReader$$Type, blockPos1: $BlockPos$$Type, callbackInfoReturnable2: $CallbackInfoReturnable$$Type): void
public "handler$efn000$onGetPrecipitationAt"(blockPos0: $BlockPos$$Type, callbackInfoReturnable1: $CallbackInfoReturnable$$Type): void
public "hasPrecipitation"(): boolean
public "modifiableBiomeInfo"(): $ModifiableBiomeInfo
public "redirect$efi000$onShouldFreeze_warmEnoughToRain"(biome0: $Biome$$Type, blockPos1: $BlockPos$$Type, levelReader2: $LevelReader$$Type): boolean
public "setFTBCBiomeColorIndex"(c: integer): void
public "shouldFreeze"(levelReader0: $LevelReader$$Type, blockPos1: $BlockPos$$Type): boolean
public "shouldFreeze"(levelReader0: $LevelReader$$Type, blockPos1: $BlockPos$$Type, boolean2: boolean): boolean
public "shouldMeltFrozenOceanIcebergSlightly"(blockPos0: $BlockPos$$Type): boolean
public "shouldSnow"(levelReader0: $LevelReader$$Type, blockPos1: $BlockPos$$Type): boolean
public "warmEnoughToRain"(blockPos0: $BlockPos$$Type): boolean
get "ambientAdditions"(): $Optional<$AmbientAdditionsSettings>
get "ambientLoop"(): $Optional<$Holder<$SoundEvent>>
get "ambientMood"(): $Optional<$AmbientMoodSettings>
get "ambientParticle"(): $Optional<$AmbientParticleSettings>
get "backgroundMusic"(): $Optional<$Music>
get "baseTemperature"(): float
get "fTBCBiomeColorIndex"(): integer
get "fogColor"(): integer
get "foliageColor"(): integer
get "generationSettings"(): $BiomeGenerationSettings
get "mobSettings"(): $MobSpawnSettings
get "modifiedClimateSettings"(): $Biome$ClimateSettings
get "modifiedSpecialEffects"(): $BiomeSpecialEffects
get "skyColor"(): integer
get "specialEffects"(): $BiomeSpecialEffects
get "waterColor"(): integer
get "waterFogColor"(): integer
set "fTBCBiomeColorIndex"(value: integer)
/** This field is a type stub generated by ProbeJS and shall not be used in any sense. */
"probejsInternal$$Literal": Special.WorldgenBiome
/** This field is a type stub generated by ProbeJS and shall not be used in any sense. */
"probejsInternal$$Tag": Special.WorldgenBiomeTag
}
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $Biome$$Type = ($Biome | Special.WorldgenBiome);
}

declare module "net.minecraft.world.level.biome.MobSpawnSettings$Builder" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $MobSpawnSettings$Builder$$Type = ($MobSpawnSettings$Builder);
}

declare module "net.minecraft.world.level.biome.BiomeResolver" {
import { $Holder$$Type } from "net.minecraft.core.Holder"
import { $Climate$Sampler } from "net.minecraft.world.level.biome.Climate$Sampler"
import { $Biome$$Type } from "net.minecraft.world.level.biome.Biome"

/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $BiomeResolver$$Type = ($BiomeResolver | ((arg0: integer, arg1: integer, arg2: integer, arg3: $Climate$Sampler) => $Holder$$Type<$Biome$$Type>));
}

declare module "net.minecraft.world.level.biome.Climate$RTree" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $Climate$RTree$$Type<T = any> = ($Climate$RTree<T>);
}

declare module "net.minecraft.world.level.biome.Climate$ParameterList" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $Climate$ParameterList$$Type<T = any> = ($Climate$ParameterList<T>);
}

declare module "net.minecraft.world.level.biome.Climate$RTree$Leaf" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $Climate$RTree$Leaf$$Type<T = any> = ($Climate$RTree$Leaf<T>);
}

declare module "net.minecraft.world.level.biome.AmbientParticleSettings" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $AmbientParticleSettings$$Type = ($AmbientParticleSettings);
}

declare module "net.minecraft.world.level.biome.BiomeSpecialEffects$GrassColorModifier$ColorModifier" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $BiomeSpecialEffects$GrassColorModifier$ColorModifier$$Type = ($BiomeSpecialEffects$GrassColorModifier$ColorModifier | ((arg0: double, arg1: double, arg2: integer) => integer));
}

declare module "net.minecraft.world.level.biome.BiomeSpecialEffects$Builder" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $BiomeSpecialEffects$Builder$$Type = ($BiomeSpecialEffects$Builder);
}

declare module "net.minecraft.world.level.biome.Climate$ParameterPoint" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $Climate$ParameterPoint$$Type = ($Climate$ParameterPoint);
}

declare module "net.minecraft.world.level.biome.Climate$RTree$Node" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $Climate$RTree$Node$$Type<T = any> = ($Climate$RTree$Node<T>);
}

declare module "net.minecraft.world.level.biome.BiomeGenerationSettings" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $BiomeGenerationSettings$$Type = ($BiomeGenerationSettings);
}

declare module "net.minecraft.world.level.biome.MultiNoiseBiomeSourceParameterList" {
import { $Codec } from "com.mojang.serialization.Codec"
import { $Holder } from "net.minecraft.core.Holder"
import { $Map } from "java.util.Map"
import { $MultiNoiseBiomeSourceParameterList$Preset, $MultiNoiseBiomeSourceParameterList$Preset$$Type } from "net.minecraft.world.level.biome.MultiNoiseBiomeSourceParameterList$Preset"
import { $HolderGetter$$Type } from "net.minecraft.core.HolderGetter"
import { $Biome, $Biome$$Type } from "net.minecraft.world.level.biome.Biome"
import { $ResourceKey } from "net.minecraft.resources.ResourceKey"
import { $Climate$ParameterList } from "net.minecraft.world.level.biome.Climate$ParameterList"

export class $MultiNoiseBiomeSourceParameterList {
static readonly "CODEC": $Codec<$Holder<$MultiNoiseBiomeSourceParameterList>>
static readonly "DIRECT_CODEC": $Codec<$MultiNoiseBiomeSourceParameterList>

constructor(preset0: $MultiNoiseBiomeSourceParameterList$Preset$$Type, holderGetter1: $HolderGetter$$Type<$Biome$$Type>)

public static "knownPresets"(): $Map<$MultiNoiseBiomeSourceParameterList$Preset, $Climate$ParameterList<$ResourceKey<$Biome>>>
public "parameters"(): $Climate$ParameterList<$Holder<$Biome>>
/** This field is a type stub generated by ProbeJS and shall not be used in any sense. */
"probejsInternal$$Literal": Special.WorldgenMultiNoiseBiomeSourceParameterList
/** This field is a type stub generated by ProbeJS and shall not be used in any sense. */
"probejsInternal$$Tag": Special.WorldgenMultiNoiseBiomeSourceParameterListTag
}
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $MultiNoiseBiomeSourceParameterList$$Type = ($MultiNoiseBiomeSourceParameterList | Special.WorldgenMultiNoiseBiomeSourceParameterList);
}

declare module "net.minecraft.world.level.biome.Climate$Parameter" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $Climate$Parameter$$Type = ($Climate$Parameter);
}

declare module "net.minecraft.world.level.biome.FeatureSorter$StepFeatureData" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $FeatureSorter$StepFeatureData$$Type = ($FeatureSorter$StepFeatureData);
}

declare module "net.minecraft.world.level.biome.MobSpawnSettings" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $MobSpawnSettings$$Type = ($MobSpawnSettings);
}

declare module "net.minecraft.world.level.biome.BiomeManager$NoiseBiomeSource" {
import { $Holder$$Type } from "net.minecraft.core.Holder"
import { $Biome$$Type } from "net.minecraft.world.level.biome.Biome"

/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $BiomeManager$NoiseBiomeSource$$Type = ($BiomeManager$NoiseBiomeSource | ((arg0: integer, arg1: integer, arg2: integer) => $Holder$$Type<$Biome$$Type>));
}

declare module "net.minecraft.world.level.biome.BiomeSpecialEffects" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $BiomeSpecialEffects$$Type = ($BiomeSpecialEffects);
}

declare module "net.minecraft.world.level.biome.MobSpawnSettings$SpawnerData" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $MobSpawnSettings$SpawnerData$$Type = ($MobSpawnSettings$SpawnerData);
}

declare module "net.minecraft.world.level.biome.MultiNoiseBiomeSourceParameterList$Preset$SourceProvider" {
import { $Function } from "java.util.function.Function"
import { $ResourceKey } from "net.minecraft.resources.ResourceKey"
import { $Biome } from "net.minecraft.world.level.biome.Biome"
import { $Climate$ParameterList$$Type } from "net.minecraft.world.level.biome.Climate$ParameterList"

/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $MultiNoiseBiomeSourceParameterList$Preset$SourceProvider$$Type = ($MultiNoiseBiomeSourceParameterList$Preset$SourceProvider | ((arg0: $Function<$ResourceKey<$Biome>, T>) => $Climate$ParameterList$$Type<T>));
}

