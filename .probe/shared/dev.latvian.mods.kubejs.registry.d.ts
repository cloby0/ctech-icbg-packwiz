declare module "dev.latvian.mods.kubejs.registry.RegistryInfo" {
import { $SensorType } from "net.minecraft.world.entity.ai.sensing.SensorType"
import { $WorldPreset } from "net.minecraft.world.level.levelgen.presets.WorldPreset"
import { $LootItemConditionType } from "net.minecraft.world.level.storage.loot.predicates.LootItemConditionType"
import { $Item } from "net.minecraft.world.item.Item"
import { $LootNumberProviderType } from "net.minecraft.world.level.storage.loot.providers.number.LootNumberProviderType"
import { $BannerPattern } from "net.minecraft.world.level.block.entity.BannerPattern"
import { $CatVariant } from "net.minecraft.world.entity.animal.CatVariant"
import { $StructurePoolElementType } from "net.minecraft.world.level.levelgen.structure.pools.StructurePoolElementType"
import { $Map } from "java.util.Map"
import { $Instrument } from "net.minecraft.world.item.Instrument"
import { $StructurePlacementType } from "net.minecraft.world.level.levelgen.structure.placement.StructurePlacementType"
import { $BuilderFactory$$Type } from "dev.latvian.mods.kubejs.registry.BuilderFactory"
import { $RecipeType } from "net.minecraft.world.item.crafting.RecipeType"
import { $BuilderBase, $BuilderBase$$Type } from "dev.latvian.mods.kubejs.registry.BuilderBase"
import { $RuleBlockEntityModifierType } from "net.minecraft.world.level.levelgen.structure.templatesystem.rule.blockentity.RuleBlockEntityModifierType"
import { $Context$$Type } from "dev.latvian.mods.rhino.Context"
import { $MemoryModuleType } from "net.minecraft.world.entity.ai.memory.MemoryModuleType"
import { $Set } from "java.util.Set"
import { $PoiType } from "net.minecraft.world.entity.ai.village.poi.PoiType"
import { $StructureProcessorType } from "net.minecraft.world.level.levelgen.structure.templatesystem.StructureProcessorType"
import { $Potion } from "net.minecraft.world.item.alchemy.Potion"
import { $Schedule } from "net.minecraft.world.entity.schedule.Schedule"
import { $TrimPattern } from "net.minecraft.world.item.armortrim.TrimPattern"
import { $FeatureSizeType } from "net.minecraft.world.level.levelgen.feature.featuresize.FeatureSizeType"
import { $Enchantment } from "net.minecraft.world.item.enchantment.Enchantment"
import { $IntProviderType } from "net.minecraft.util.valueproviders.IntProviderType"
import { $LootItemFunctionType } from "net.minecraft.world.level.storage.loot.functions.LootItemFunctionType"
import { $CreativeModeTab } from "net.minecraft.world.item.CreativeModeTab"
import { $EntityType } from "net.minecraft.world.entity.EntityType"
import { $NormalNoise$NoiseParameters } from "net.minecraft.world.level.levelgen.synth.NormalNoise$NoiseParameters"
import { $PositionSourceType } from "net.minecraft.world.level.gameevent.PositionSourceType"
import { $Biome } from "net.minecraft.world.level.biome.Biome"
import { $RegistryCallback$$Type } from "dev.latvian.mods.kubejs.registry.RegistryCallback"
import { $StructureTemplatePool } from "net.minecraft.world.level.levelgen.structure.pools.StructureTemplatePool"
import { $VillagerProfession } from "net.minecraft.world.entity.npc.VillagerProfession"
import { $ConfiguredWorldCarver } from "net.minecraft.world.level.levelgen.carver.ConfiguredWorldCarver"
import { $Map$Entry } from "java.util.Map$Entry"
import { $ParticleType } from "net.minecraft.core.particles.ParticleType"
import { $WorldCarver } from "net.minecraft.world.level.levelgen.carver.WorldCarver"
import { $HeightProviderType } from "net.minecraft.world.level.levelgen.heightproviders.HeightProviderType"
import { $StructureType } from "net.minecraft.world.level.levelgen.structure.StructureType"
import { $Codec } from "com.mojang.serialization.Codec"
import { $PlacedFeature } from "net.minecraft.world.level.levelgen.placement.PlacedFeature"
import { $LevelStem } from "net.minecraft.world.level.dimension.LevelStem"
import { $ChunkStatus } from "net.minecraft.world.level.chunk.ChunkStatus"
import { $ResourceLocation, $ResourceLocation$$Type } from "net.minecraft.resources.ResourceLocation"
import { $TreeDecoratorType } from "net.minecraft.world.level.levelgen.feature.treedecorators.TreeDecoratorType"
import { $Registrar } from "dev.architectury.registry.registries.Registrar"
import { $MenuType } from "net.minecraft.world.inventory.MenuType"
import { $StructureProcessorList } from "net.minecraft.world.level.levelgen.structure.templatesystem.StructureProcessorList"
import { $FoliagePlacerType } from "net.minecraft.world.level.levelgen.feature.foliageplacers.FoliagePlacerType"
import { $BuilderType } from "dev.latvian.mods.kubejs.registry.BuilderType"
import { $Activity } from "net.minecraft.world.entity.schedule.Activity"
import { $Registry } from "net.minecraft.core.Registry"
import { $ArgumentTypeInfo } from "net.minecraft.commands.synchronization.ArgumentTypeInfo"
import { $PlacementModifierType } from "net.minecraft.world.level.levelgen.placement.PlacementModifierType"
import { $NoiseGeneratorSettings } from "net.minecraft.world.level.levelgen.NoiseGeneratorSettings"
import { $StatType } from "net.minecraft.stats.StatType"
import { $TrunkPlacerType } from "net.minecraft.world.level.levelgen.feature.trunkplacers.TrunkPlacerType"
import { $PosRuleTestType } from "net.minecraft.world.level.levelgen.structure.templatesystem.PosRuleTestType"
import { $ChatType } from "net.minecraft.network.chat.ChatType"
import { $TrimMaterial } from "net.minecraft.world.item.armortrim.TrimMaterial"
import { $LootPoolEntryType } from "net.minecraft.world.level.storage.loot.entries.LootPoolEntryType"
import { $List } from "java.util.List"
import { $BlockEntityType } from "net.minecraft.world.level.block.entity.BlockEntityType"
import { $SoundEvent } from "net.minecraft.sounds.SoundEvent"
import { $FloatProviderType } from "net.minecraft.util.valueproviders.FloatProviderType"
import { $DensityFunction } from "net.minecraft.world.level.levelgen.DensityFunction"
import { $Level } from "net.minecraft.world.level.Level"
import { $LootScoreProviderType } from "net.minecraft.world.level.storage.loot.providers.score.LootScoreProviderType"
import { $Spliterator } from "java.util.Spliterator"
import { $GameEvent } from "net.minecraft.world.level.gameevent.GameEvent"
import { $DimensionType } from "net.minecraft.world.level.dimension.DimensionType"
import { $DamageType } from "net.minecraft.world.damagesource.DamageType"
import { $Iterable } from "java.lang.Iterable"
import { $BlockPredicateType } from "net.minecraft.world.level.levelgen.blockpredicates.BlockPredicateType"
import { $BlockStateProviderType } from "net.minecraft.world.level.levelgen.feature.stateproviders.BlockStateProviderType"
import { $Structure } from "net.minecraft.world.level.levelgen.structure.Structure"
import { $FlatLevelGeneratorPreset } from "net.minecraft.world.level.levelgen.flat.FlatLevelGeneratorPreset"
import { $PaintingVariant } from "net.minecraft.world.entity.decoration.PaintingVariant"
import { $Fluid } from "net.minecraft.world.level.material.Fluid"
import { $VillagerType } from "net.minecraft.world.entity.npc.VillagerType"
import { $LinkedList } from "java.util.LinkedList"
import { $LootNbtProviderType } from "net.minecraft.world.level.storage.loot.providers.nbt.LootNbtProviderType"
import { $RootPlacerType } from "net.minecraft.world.level.levelgen.feature.rootplacers.RootPlacerType"
import { $FrogVariant } from "net.minecraft.world.entity.animal.FrogVariant"
import { $Iterator } from "java.util.Iterator"
import { $RecipeSerializer } from "net.minecraft.world.item.crafting.RecipeSerializer"
import { $TypeWrapperFactory } from "dev.latvian.mods.rhino.util.wrap.TypeWrapperFactory"
import { $ResourceKey, $ResourceKey$$Type } from "net.minecraft.resources.ResourceKey"
import { $Attribute } from "net.minecraft.world.entity.ai.attributes.Attribute"
import { $Feature } from "net.minecraft.world.level.levelgen.feature.Feature"
import { $StructureSet } from "net.minecraft.world.level.levelgen.structure.StructureSet"
import { $Consumer$$Type } from "java.util.function.Consumer"
import { $ConfiguredFeature } from "net.minecraft.world.level.levelgen.feature.ConfiguredFeature"
import { $Block } from "net.minecraft.world.level.block.Block"
import { $Class, $Class$$Type } from "java.lang.Class"
import { $MultiNoiseBiomeSourceParameterList } from "net.minecraft.world.level.biome.MultiNoiseBiomeSourceParameterList"
import { $StructurePieceType } from "net.minecraft.world.level.levelgen.structure.pieces.StructurePieceType"
import { $RuleTestType } from "net.minecraft.world.level.levelgen.structure.templatesystem.RuleTestType"
import { $MobEffect } from "net.minecraft.world.effect.MobEffect"

export class $RegistryInfo<T = any> implements $Iterable<$BuilderBase<T>>, $TypeWrapperFactory<T> {
static readonly "ACTIVITY": $RegistryInfo<$Activity>
static readonly "AFTER_VANILLA": $LinkedList<$RegistryInfo<any>>
static readonly "ALL_BUILDERS": $List<$BuilderBase<any>>
static readonly "ATTRIBUTE": $RegistryInfo<$Attribute>
static readonly "BANNER_PATTERN": $RegistryInfo<$BannerPattern>
static readonly "BIOME": $RegistryInfo<$Biome>
static readonly "BIOME_SOURCE": $RegistryInfo<$Codec>
static readonly "BLOCK": $RegistryInfo<$Block>
static readonly "BLOCK_ENTITY_TYPE": $RegistryInfo<$BlockEntityType>
static readonly "BLOCK_PREDICATE_TYPE": $RegistryInfo<$BlockPredicateType>
static readonly "BLOCK_STATE_PROVIDER_TYPE": $RegistryInfo<$BlockStateProviderType>
static readonly "CARVER": $RegistryInfo<$WorldCarver>
static readonly "CAT_VARIANT": $RegistryInfo<$CatVariant>
static readonly "CHAT_TYPE": $RegistryInfo<$ChatType>
static readonly "CHUNK_GENERATOR": $RegistryInfo<$Codec>
static readonly "CHUNK_STATUS": $RegistryInfo<$ChunkStatus>
static readonly "COMMAND_ARGUMENT_TYPE": $RegistryInfo<$ArgumentTypeInfo>
static readonly "CONDITION": $RegistryInfo<$Codec>
static readonly "CONFIGURED_CARVER": $RegistryInfo<$ConfiguredWorldCarver>
static readonly "CONFIGURED_FEATURE": $RegistryInfo<$ConfiguredFeature>
static readonly "CREATIVE_MODE_TAB": $RegistryInfo<$CreativeModeTab>
static readonly "CUSTOM_STAT": $RegistryInfo<$ResourceLocation>
static readonly "DAMAGE_TYPE": $RegistryInfo<$DamageType>
static readonly "DECORATED_POT_PATTERNS": $RegistryInfo<string>
static readonly "DENSITY_FUNCTION": $RegistryInfo<$DensityFunction>
static readonly "DENSITY_FUNCTION_TYPE": $RegistryInfo<$Codec>
static readonly "DIMENSION": $RegistryInfo<$Level>
static readonly "DIMENSION_TYPE": $RegistryInfo<$DimensionType>
static readonly "ENCHANTMENT": $RegistryInfo<$Enchantment>
static readonly "ENTITY_TYPE": $RegistryInfo<$EntityType>
static readonly "FEATURE": $RegistryInfo<$Feature>
static readonly "FEATURE_SIZE_TYPE": $RegistryInfo<$FeatureSizeType>
static readonly "FLAT_LEVEL_GENERATOR_PRESET": $RegistryInfo<$FlatLevelGeneratorPreset>
static readonly "FLOAT_PROVIDER_TYPE": $RegistryInfo<$FloatProviderType>
static readonly "FLUID": $RegistryInfo<$Fluid>
static readonly "FOLIAGE_PLACER_TYPE": $RegistryInfo<$FoliagePlacerType>
static readonly "FROG_VARIANT": $RegistryInfo<$FrogVariant>
static readonly "GAME_EVENT": $RegistryInfo<$GameEvent>
static readonly "HEIGHT_PROVIDER_TYPE": $RegistryInfo<$HeightProviderType>
static readonly "INSTRUMENT": $RegistryInfo<$Instrument>
static readonly "INT_PROVIDER_TYPE": $RegistryInfo<$IntProviderType>
static readonly "ITEM": $RegistryInfo<$Item>
static readonly "LEVEL_STEM": $RegistryInfo<$LevelStem>
static readonly "LOOT_CONDITION_TYPE": $RegistryInfo<$LootItemConditionType>
static readonly "LOOT_ENTRY": $RegistryInfo<$LootPoolEntryType>
static readonly "LOOT_FUNCTION": $RegistryInfo<$LootItemFunctionType>
static readonly "LOOT_FUNCTION_TYPE": $RegistryInfo<$LootItemFunctionType>
static readonly "LOOT_ITEM": $RegistryInfo<$LootItemConditionType>
static readonly "LOOT_NBT_PROVIDER": $RegistryInfo<$LootNbtProviderType>
static readonly "LOOT_NBT_PROVIDER_TYPE": $RegistryInfo<$LootNbtProviderType>
static readonly "LOOT_NUMBER_PROVIDER": $RegistryInfo<$LootNumberProviderType>
static readonly "LOOT_NUMBER_PROVIDER_TYPE": $RegistryInfo<$LootNumberProviderType>
static readonly "LOOT_POOL_ENTRY_TYPE": $RegistryInfo<$LootPoolEntryType>
static readonly "LOOT_SCORE_PROVIDER": $RegistryInfo<$LootScoreProviderType>
static readonly "LOOT_SCORE_PROVIDER_TYPE": $RegistryInfo<$LootScoreProviderType>
static readonly "MAP": $Map<$ResourceKey<$Registry<any>>, $RegistryInfo<any>>
static readonly "MATERIAL_CONDITION": $RegistryInfo<$Codec>
static readonly "MATERIAL_RULE": $RegistryInfo<$Codec>
static readonly "MEMORY_MODULE_TYPE": $RegistryInfo<$MemoryModuleType>
static readonly "MENU": $RegistryInfo<$MenuType>
static readonly "MOB_EFFECT": $RegistryInfo<$MobEffect>
static readonly "MULTI_NOISE_BIOME_SOURCE_PARAMETER_LIST": $RegistryInfo<$MultiNoiseBiomeSourceParameterList>
static readonly "NOISE": $RegistryInfo<$NormalNoise$NoiseParameters>
static readonly "NOISE_GENERATOR_SETTINGS": $RegistryInfo<$NoiseGeneratorSettings>
static readonly "NOISE_SETTINGS": $RegistryInfo<$NoiseGeneratorSettings>
static readonly "PAINTING_VARIANT": $RegistryInfo<$PaintingVariant>
static readonly "PARTICLE_TYPE": $RegistryInfo<$ParticleType>
static readonly "PLACED_FEATURE": $RegistryInfo<$PlacedFeature>
static readonly "PLACEMENT_MODIFIER": $RegistryInfo<$PlacementModifierType>
static readonly "PLACEMENT_MODIFIER_TYPE": $RegistryInfo<$PlacementModifierType>
static readonly "POINT_OF_INTEREST_TYPE": $RegistryInfo<$PoiType>
static readonly "POSITION_SOURCE_TYPE": $RegistryInfo<$PositionSourceType>
static readonly "POS_RULE_TEST": $RegistryInfo<$PosRuleTestType>
static readonly "POTION": $RegistryInfo<$Potion>
static readonly "PROCESSOR_LIST": $RegistryInfo<$StructureProcessorList>
static readonly "RECIPE_SERIALIZER": $RegistryInfo<$RecipeSerializer>
static readonly "RECIPE_TYPE": $RegistryInfo<$RecipeType>
static readonly "ROOT_PLACER_TYPE": $RegistryInfo<$RootPlacerType>
static readonly "RULE": $RegistryInfo<$Codec>
static readonly "RULE_BLOCK_ENTITY_MODIFIER": $RegistryInfo<$RuleBlockEntityModifierType>
static readonly "RULE_TEST": $RegistryInfo<$RuleTestType>
static readonly "SCHEDULE": $RegistryInfo<$Schedule>
static readonly "SENSOR_TYPE": $RegistryInfo<$SensorType>
static readonly "SOUND_EVENT": $RegistryInfo<$SoundEvent>
static readonly "STAT_TYPE": $RegistryInfo<$StatType>
static readonly "STRUCTURE": $RegistryInfo<$Structure>
static readonly "STRUCTURE_PIECE": $RegistryInfo<$StructurePieceType>
static readonly "STRUCTURE_PLACEMENT": $RegistryInfo<$StructurePlacementType>
static readonly "STRUCTURE_PLACEMENT_TYPE": $RegistryInfo<$StructurePlacementType>
static readonly "STRUCTURE_POOL_ELEMENT": $RegistryInfo<$StructurePoolElementType>
static readonly "STRUCTURE_PROCESSOR": $RegistryInfo<$StructureProcessorType>
static readonly "STRUCTURE_SET": $RegistryInfo<$StructureSet>
static readonly "STRUCTURE_TYPE": $RegistryInfo<$StructureType>
static readonly "TEMPLATE_POOL": $RegistryInfo<$StructureTemplatePool>
static readonly "TREE_DECORATOR_TYPE": $RegistryInfo<$TreeDecoratorType>
static readonly "TRIM_MATERIAL": $RegistryInfo<$TrimMaterial>
static readonly "TRIM_PATTERN": $RegistryInfo<$TrimPattern>
static readonly "TRUNK_PLACER_TYPE": $RegistryInfo<$TrunkPlacerType>
static readonly "VILLAGER_PROFESSION": $RegistryInfo<$VillagerProfession>
static readonly "VILLAGER_TYPE": $RegistryInfo<$VillagerType>
static readonly "WORLD_PRESET": $RegistryInfo<$WorldPreset>
"bypassServerOnly": boolean
readonly "key": $ResourceKey<$Registry<T>>
"languageKeyPrefix": string
readonly "objectBaseClass": $Class<any>
readonly "objects": $Map<$ResourceLocation, $BuilderBase<T>>
readonly "types": $Map<string, $BuilderType<T>>

public "addBuilder"(builder: $BuilderBase$$Type<T>): void
public "addType"(type: string, builderType: $Class$$Type<$BuilderBase$$Type<T>>, factory: $BuilderFactory$$Type, isDefault: boolean): void
public "addType"(type: string, builderType: $Class$$Type<$BuilderBase$$Type<T>>, factory: $BuilderFactory$$Type): void
public "bypassServerOnly"(): $RegistryInfo<T>
public "entrySet"(): $Set<$Map$Entry<$ResourceKey<T>, T>>
public "fireRegistryEvent"(): void
public "forEach"(consumer0: $Consumer$$Type<$BuilderBase$$Type<T>>): void
public "getArchitecturyRegistrar"(): $Registrar<T>
public "getDefaultType"(): $BuilderType
public "getId"(value: T): $ResourceLocation
public "getValue"(id: $ResourceLocation$$Type): T
public "getVanillaRegistry"(): $Registry<T>
public "hasValue"(id: $ResourceLocation$$Type): boolean
public "iterator"(): $Iterator<$BuilderBase<T>>
public "languageKeyPrefix"(prefix: string): $RegistryInfo<T>
public "noAutoWrap"(): $RegistryInfo<T>
public static "of"<T>(key: $ResourceKey$$Type<$Registry<any>>, type: $Class$$Type<T>): $RegistryInfo<T>
public static "of"(key: $ResourceKey$$Type<$Registry<any>>): $RegistryInfo<any>
public "registerObjects"(function_: $RegistryCallback$$Type<T>): integer
public "spliterator"(): $Spliterator<$BuilderBase<T>>
public "wrap"(cx: $Context$$Type, o: any): T
[Symbol.iterator](): IterableIterator<$BuilderBase<T>>;
get "autoWrap"(): boolean
set "autoWrap"(value: boolean)
get "hasDefaultTags"(): boolean
set "hasDefaultTags"(value: boolean)
get "architecturyRegistrar"(): $Registrar<T>
get "defaultType"(): $BuilderType
get "vanillaRegistry"(): $Registry<T>
}
}

declare module "dev.latvian.mods.kubejs.registry.BuilderType" {
import { $Class, $Class$$Type } from "java.lang.Class"
import { $Record } from "java.lang.Record"
import { $BuilderFactory, $BuilderFactory$$Type } from "dev.latvian.mods.kubejs.registry.BuilderFactory"
import { $BuilderBase, $BuilderBase$$Type } from "dev.latvian.mods.kubejs.registry.BuilderBase"

export class $BuilderType<T = any> extends $Record {
constructor(type: string, builderClass: $Class$$Type<$BuilderBase$$Type<T>>, factory: $BuilderFactory$$Type)

public "builderClass"(): $Class<$BuilderBase<T>>
public "factory"(): $BuilderFactory
public "type"(): string
}
}

declare module "dev.latvian.mods.kubejs.registry.BuilderBase" {
import { $ResourceLocation, $ResourceLocation$$Type } from "net.minecraft.resources.ResourceLocation"
import { $DataJsonGenerator$$Type } from "dev.latvian.mods.kubejs.generator.DataJsonGenerator"
import { $Component, $Component$$Type } from "net.minecraft.network.chat.Component"
import { $RegistryInfo } from "dev.latvian.mods.kubejs.registry.RegistryInfo"
import { $LangEventJS$$Type } from "dev.latvian.mods.kubejs.client.LangEventJS"
import { $Supplier } from "java.util.function.Supplier"
import { $AssetJsonGenerator$$Type } from "dev.latvian.mods.kubejs.generator.AssetJsonGenerator"

export class $BuilderBase<T = any> implements $Supplier<T> {
"displayName": $Component
"formattedDisplayName": boolean
readonly "id": $ResourceLocation
"translationKey": string

constructor(i: $ResourceLocation$$Type)

public "createAdditionalObjects"(): void
public "createObject"(): T
/**
 * Sets the display name for this object, e.g. `Stone`.
 * 
 * This will be overridden by a lang file if it exists.
 */
public "displayName"(name: $Component$$Type): $BuilderBase<T>
/** Combined method of formattedDisplayName().displayName(name). */
public "formattedDisplayName"(name: $Component$$Type): $BuilderBase<T>
/** Makes displayName() override language files. */
public "formattedDisplayName"(): $BuilderBase<T>
public "generateAssetJsons"(generator: $AssetJsonGenerator$$Type): void
public "generateDataJsons"(generator: $DataJsonGenerator$$Type): void
public "generateLang"(lang: $LangEventJS$$Type): void
public "get"(): T
public "getBuilderTranslationKey"(): string
public "getRegistryType"(): $RegistryInfo
public "getTranslationKeyGroup"(): string
public "newID"(pre: string, post: string): $ResourceLocation
/** Adds a tag to this object, e.g. `minecraft:stone`. */
public "tag"(tag: $ResourceLocation$$Type): $BuilderBase<T>
public "transformObject"(obj: T): T
/** Sets the translation key for this object, e.g. `block.minecraft.stone`. */
public "translationKey"(key: string): $BuilderBase<T>
get "builderTranslationKey"(): string
get "registryType"(): $RegistryInfo
get "translationKeyGroup"(): string
}
}

declare module "dev.latvian.mods.kubejs.registry.BuilderFactory" {
import { $ResourceLocation$$Type } from "net.minecraft.resources.ResourceLocation"
import { $BuilderBase } from "dev.latvian.mods.kubejs.registry.BuilderBase"

export interface $BuilderFactory {
"createBuilder"(resourceLocation0: $ResourceLocation$$Type): $BuilderBase
}

export namespace $BuilderFactory {
const probejs$$marker: never
}
export abstract class $BuilderFactory$$Static implements $BuilderFactory {
}
}

declare module "dev.latvian.mods.kubejs.registry.CustomBuilderObject" {
import { $ResourceLocation$$Type } from "net.minecraft.resources.ResourceLocation"
import { $RegistryInfo, $RegistryInfo$$Type } from "dev.latvian.mods.kubejs.registry.RegistryInfo"
import { $Supplier$$Type } from "java.util.function.Supplier"
import { $BuilderBase } from "dev.latvian.mods.kubejs.registry.BuilderBase"

export class $CustomBuilderObject extends $BuilderBase {
constructor(i: $ResourceLocation$$Type, object: $Supplier$$Type<any>, registry: $RegistryInfo$$Type<any>)

public "createObject"(): any
public "getRegistryType"(): $RegistryInfo<any>
get "registryType"(): $RegistryInfo<any>
}
}

declare module "dev.latvian.mods.kubejs.registry.RegistryCallback" {
import { $ResourceLocation$$Type } from "net.minecraft.resources.ResourceLocation"
import { $Supplier$$Type } from "java.util.function.Supplier"

export interface $RegistryCallback<T = any> {
"accept"(resourceLocation0: $ResourceLocation$$Type, supplier1: $Supplier$$Type<T>): void
}

export namespace $RegistryCallback {
const probejs$$marker: never
}
export abstract class $RegistryCallback$$Static<T = any> implements $RegistryCallback<T> {
}
}

