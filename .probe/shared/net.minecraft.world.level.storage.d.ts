declare module "net.minecraft.world.level.storage.loot.LootContext$VisitedEntry" {
import { $Record } from "java.lang.Record"
import { $LootDataType, $LootDataType$$Type } from "net.minecraft.world.level.storage.loot.LootDataType"

export class $LootContext$VisitedEntry<T = any> extends $Record {
constructor(type: $LootDataType$$Type<T>, value: T)

public "type"(): $LootDataType<T>
public "value"(): T
}
}

declare module "net.minecraft.world.level.storage.loot.functions.LootItemFunction" {
import { $Consumer, $Consumer$$Type } from "java.util.function.Consumer"
import { $ValidationContext$$Type } from "net.minecraft.world.level.storage.loot.ValidationContext"
import { $LootContext, $LootContext$$Type } from "net.minecraft.world.level.storage.loot.LootContext"
import { $LootItemFunctionType } from "net.minecraft.world.level.storage.loot.functions.LootItemFunctionType"
import { $BiFunction, $BiFunction$$Type } from "java.util.function.BiFunction"
import { $Set } from "java.util.Set"
import { $LootContextParam } from "net.minecraft.world.level.storage.loot.parameters.LootContextParam"
import { $ItemStack, $ItemStack$$Type } from "net.minecraft.world.item.ItemStack"
import { $LootContextUser } from "net.minecraft.world.level.storage.loot.LootContextUser"
import { $Function$$Type } from "java.util.function.Function"

export interface $LootItemFunction extends $LootContextUser, $BiFunction<$ItemStack, $LootContext, $ItemStack> {
"andThen"<V>(function0: $Function$$Type<$ItemStack$$Type, V>): $BiFunction<$ItemStack, $LootContext, V>
"apply"(itemStack0: $ItemStack$$Type, lootContext1: $LootContext$$Type): $ItemStack
"getReferencedContextParams"(): $Set<$LootContextParam<any>>
"getType"(): $LootItemFunctionType
"validate"(validationContext0: $ValidationContext$$Type): void
get "referencedContextParams"(): $Set<$LootContextParam<any>>
get "type"(): $LootItemFunctionType
}

export namespace $LootItemFunction {
function decorate(biFunction0: $BiFunction$$Type<$ItemStack$$Type, $LootContext$$Type, $ItemStack>, consumer1: $Consumer$$Type<$ItemStack$$Type>, lootContext2: $LootContext$$Type): $Consumer<$ItemStack>
}
export abstract class $LootItemFunction$$Static implements $LootItemFunction {
static "decorate"(biFunction0: $BiFunction$$Type<$ItemStack$$Type, $LootContext$$Type, $ItemStack>, consumer1: $Consumer$$Type<$ItemStack$$Type>, lootContext2: $LootContext$$Type): $Consumer<$ItemStack>
}
}

declare module "net.minecraft.world.level.storage.loot.predicates.AnyOfCondition$Builder" {
import { $CompositeLootItemCondition$Builder } from "net.minecraft.world.level.storage.loot.predicates.CompositeLootItemCondition$Builder"
import { $LootItemCondition$Builder, $LootItemCondition$Builder$$Type } from "net.minecraft.world.level.storage.loot.predicates.LootItemCondition$Builder"
import { $AllOfCondition$Builder } from "net.minecraft.world.level.storage.loot.predicates.AllOfCondition$Builder"

export class $AnyOfCondition$Builder extends $CompositeLootItemCondition$Builder {
constructor(...builder0s: $LootItemCondition$Builder$$Type[])

public "and"(builder0: $LootItemCondition$Builder$$Type): $AllOfCondition$Builder
public "invert"(): $LootItemCondition$Builder
public "or"(builder0: $LootItemCondition$Builder$$Type): $AnyOfCondition$Builder
}
}

declare module "net.minecraft.world.level.storage.LevelVersion" {
import { $Dynamic$$Type } from "com.mojang.serialization.Dynamic"
import { $DataVersion } from "net.minecraft.world.level.storage.DataVersion"

export class $LevelVersion {
public "lastPlayed"(): long
public "levelDataVersion"(): integer
public "minecraftVersion"(): $DataVersion
public "minecraftVersionName"(): string
public static "parse"(dynamic0: $Dynamic$$Type<any>): $LevelVersion
public "snapshot"(): boolean
}
}

declare module "net.minecraft.world.level.storage.loot.providers.nbt.NbtProvider" {
import { $Tag } from "net.minecraft.nbt.Tag"
import { $LootContext$$Type } from "net.minecraft.world.level.storage.loot.LootContext"
import { $Set } from "java.util.Set"
import { $LootContextParam } from "net.minecraft.world.level.storage.loot.parameters.LootContextParam"
import { $LootNbtProviderType } from "net.minecraft.world.level.storage.loot.providers.nbt.LootNbtProviderType"

export interface $NbtProvider {
"get"(lootContext0: $LootContext$$Type): $Tag
"getReferencedContextParams"(): $Set<$LootContextParam<any>>
"getType"(): $LootNbtProviderType
get "referencedContextParams"(): $Set<$LootContextParam<any>>
get "type"(): $LootNbtProviderType
}

export namespace $NbtProvider {
const probejs$$marker: never
}
export abstract class $NbtProvider$$Static implements $NbtProvider {
}
}

declare module "net.minecraft.world.level.storage.DataVersion" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export class $DataVersion {
static "MAIN_SERIES": string

constructor(int0: integer)
constructor(int0: integer, string1: string)

public "getSeries"(): string
public "getVersion"(): integer
public "isCompatible"(dataVersion0: $DataVersion$$Type): boolean
public "isSideSeries"(): boolean
get "series"(): string
get "version"(): integer
get "sideSeries"(): boolean
}
}

declare module "net.minecraft.world.level.storage.loot.providers.score.ScoreboardNameProvider" {
import { $LootContext$$Type } from "net.minecraft.world.level.storage.loot.LootContext"
import { $Set } from "java.util.Set"
import { $LootContextParam } from "net.minecraft.world.level.storage.loot.parameters.LootContextParam"
import { $LootScoreProviderType } from "net.minecraft.world.level.storage.loot.providers.score.LootScoreProviderType"

export interface $ScoreboardNameProvider {
"getReferencedContextParams"(): $Set<$LootContextParam<any>>
"getScoreboardName"(lootContext0: $LootContext$$Type): string
"getType"(): $LootScoreProviderType
get "referencedContextParams"(): $Set<$LootContextParam<any>>
get "type"(): $LootScoreProviderType
}

export namespace $ScoreboardNameProvider {
const probejs$$marker: never
}
export abstract class $ScoreboardNameProvider$$Static implements $ScoreboardNameProvider {
}
}

declare module "net.minecraft.world.level.storage.loot.predicates.LootItemCondition$Builder" {
import { $AnyOfCondition$Builder } from "net.minecraft.world.level.storage.loot.predicates.AnyOfCondition$Builder"
import { $LootItemCondition } from "net.minecraft.world.level.storage.loot.predicates.LootItemCondition"
import { $AllOfCondition$Builder } from "net.minecraft.world.level.storage.loot.predicates.AllOfCondition$Builder"

export interface $LootItemCondition$Builder {
"and"(builder0: $LootItemCondition$Builder$$Type): $AllOfCondition$Builder
"build"(): $LootItemCondition
"invert"(): $LootItemCondition$Builder
"or"(builder0: $LootItemCondition$Builder$$Type): $AnyOfCondition$Builder
}

export namespace $LootItemCondition$Builder {
const probejs$$marker: never
}
export abstract class $LootItemCondition$Builder$$Static implements $LootItemCondition$Builder {
}
}

declare module "net.minecraft.world.level.storage.LevelStorageSource$LevelCandidates" {
import { $Consumer$$Type } from "java.util.function.Consumer"
import { $List, $List$$Type } from "java.util.List"
import { $Iterator } from "java.util.Iterator"
import { $Record } from "java.lang.Record"
import { $LevelStorageSource$LevelDirectory, $LevelStorageSource$LevelDirectory$$Type } from "net.minecraft.world.level.storage.LevelStorageSource$LevelDirectory"
import { $Spliterator } from "java.util.Spliterator"
import { $Iterable } from "java.lang.Iterable"

export class $LevelStorageSource$LevelCandidates extends $Record implements $Iterable<$LevelStorageSource$LevelDirectory> {
constructor(levels: $List$$Type<$LevelStorageSource$LevelDirectory$$Type>)

public "forEach"(consumer0: $Consumer$$Type<$LevelStorageSource$LevelDirectory$$Type>): void
public "isEmpty"(): boolean
public "iterator"(): $Iterator<$LevelStorageSource$LevelDirectory>
public "levels"(): $List<$LevelStorageSource$LevelDirectory>
public "spliterator"(): $Spliterator<$LevelStorageSource$LevelDirectory>
[Symbol.iterator](): IterableIterator<$LevelStorageSource$LevelDirectory>;
get "empty"(): boolean
}
}

declare module "net.minecraft.world.level.storage.loot.LootDataType" {
import { $ResourceLocation$$Type } from "net.minecraft.resources.ResourceLocation"
import { $JsonElement$$Type } from "com.google.gson.JsonElement"
import { $ValidationContext$$Type } from "net.minecraft.world.level.storage.loot.ValidationContext"
import { $Stream } from "java.util.stream.Stream"
import { $LootItemFunction } from "net.minecraft.world.level.storage.loot.functions.LootItemFunction"
import { $Gson } from "com.google.gson.Gson"
import { $ResourceManager$$Type } from "net.minecraft.server.packs.resources.ResourceManager"
import { $LootItemCondition } from "net.minecraft.world.level.storage.loot.predicates.LootItemCondition"
import { $Optional } from "java.util.Optional"
import { $LootTable } from "net.minecraft.world.level.storage.loot.LootTable"
import { $LootDataId$$Type } from "net.minecraft.world.level.storage.loot.LootDataId"

export class $LootDataType<T = any> {
static readonly "MODIFIER": $LootDataType<$LootItemFunction>
static readonly "PREDICATE": $LootDataType<$LootItemCondition>
static readonly "TABLE": $LootDataType<$LootTable>

public "deserialize"(resourceLocation0: $ResourceLocation$$Type, jsonElement1: $JsonElement$$Type, resourceManager2: $ResourceManager$$Type): $Optional<T>
public "directory"(): string
public "parser"(): $Gson
public "runValidation"(validationContext0: $ValidationContext$$Type, lootDataId1: $LootDataId$$Type<T>, t2: T): void
public static "values"(): $Stream<$LootDataType<any>>
}
}

declare module "net.minecraft.world.level.storage.loot.LootParams$DynamicDrop" {
import { $Consumer$$Type } from "java.util.function.Consumer"
import { $ItemStack$$Type } from "net.minecraft.world.item.ItemStack"

export interface $LootParams$DynamicDrop {
"add"(consumer0: $Consumer$$Type<$ItemStack$$Type>): void
}

export namespace $LootParams$DynamicDrop {
const probejs$$marker: never
}
export abstract class $LootParams$DynamicDrop$$Static implements $LootParams$DynamicDrop {
}
}

declare module "net.minecraft.world.level.storage.loot.entries.AlternativesEntry$Builder" {
import { $LootPoolEntryContainer$Builder, $LootPoolEntryContainer$Builder$$Type } from "net.minecraft.world.level.storage.loot.entries.LootPoolEntryContainer$Builder"
import { $Function$$Type } from "java.util.function.Function"
import { $LootItemCondition$Builder } from "net.minecraft.world.level.storage.loot.predicates.LootItemCondition$Builder"
import { $Iterable$$Type } from "java.lang.Iterable"

export class $AlternativesEntry$Builder extends $LootPoolEntryContainer$Builder<$AlternativesEntry$Builder> {
constructor(...builder0s: $LootPoolEntryContainer$Builder$$Type<any>[])

public "when"<E>(iterable0: $Iterable$$Type<E>, function1: $Function$$Type<E, $LootItemCondition$Builder>): $AlternativesEntry$Builder
}
}

declare module "net.minecraft.world.level.storage.loot.LootPool" {
import { $Consumer$$Type } from "java.util.function.Consumer"
import { $ValidationContext$$Type } from "net.minecraft.world.level.storage.loot.ValidationContext"
import { $NumberProvider, $NumberProvider$$Type } from "net.minecraft.world.level.storage.loot.providers.number.NumberProvider"
import { $LootContext$$Type } from "net.minecraft.world.level.storage.loot.LootContext"
import { $LootItemFunction } from "net.minecraft.world.level.storage.loot.functions.LootItemFunction"
import { $LootPoolAccessor } from "com.gregtechceu.gtceu.core.mixins.LootPoolAccessor"
import { $LootPool$Builder } from "net.minecraft.world.level.storage.loot.LootPool$Builder"
import { $LootItemCondition } from "net.minecraft.world.level.storage.loot.predicates.LootItemCondition"
import { $ItemStack$$Type } from "net.minecraft.world.item.ItemStack"
import { $LootPoolEntryContainer, $LootPoolEntryContainer$$Type } from "net.minecraft.world.level.storage.loot.entries.LootPoolEntryContainer"

export class $LootPool implements $LootPoolAccessor {
readonly "conditions": $LootItemCondition[]
readonly "functions": $LootItemFunction[]

public "addRandomItems"(consumer0: $Consumer$$Type<$ItemStack$$Type>, lootContext1: $LootContext$$Type): void
public "freeze"(): void
public "getBonusRolls"(): $NumberProvider
public "getName"(): string
public "getRolls"(): $NumberProvider
public "isFrozen"(): boolean
public static "lootPool"(): $LootPool$Builder
public "setBonusRolls"(numberProvider0: $NumberProvider$$Type): void
public "setRolls"(numberProvider0: $NumberProvider$$Type): void
public "validate"(validationContext0: $ValidationContext$$Type): void
get "bonusRolls"(): $NumberProvider
set "bonusRolls"(value: $NumberProvider$$Type)
get "entries"(): $LootPoolEntryContainer[]
set "entries"(value: $LootPoolEntryContainer$$Type[])
get "rolls"(): $NumberProvider
set "rolls"(value: $NumberProvider$$Type)
get "name"(): string
get "frozen"(): boolean
}
}

declare module "net.minecraft.world.level.storage.loot.parameters.LootContextParams" {
import { $Entity } from "net.minecraft.world.entity.Entity"
import { $Vec3 } from "net.minecraft.world.phys.Vec3"
import { $DamageSource } from "net.minecraft.world.damagesource.DamageSource"
import { $LootContextParam } from "net.minecraft.world.level.storage.loot.parameters.LootContextParam"
import { $BlockState } from "net.minecraft.world.level.block.state.BlockState"
import { $ItemStack } from "net.minecraft.world.item.ItemStack"
import { $BlockEntity } from "net.minecraft.world.level.block.entity.BlockEntity"
import { $Player } from "net.minecraft.world.entity.player.Player"

export class $LootContextParams {
static readonly "BLOCK_ENTITY": $LootContextParam<$BlockEntity>
static readonly "BLOCK_STATE": $LootContextParam<$BlockState>
static readonly "DAMAGE_SOURCE": $LootContextParam<$DamageSource>
static readonly "DIRECT_KILLER_ENTITY": $LootContextParam<$Entity>
static readonly "EXPLOSION_RADIUS": $LootContextParam<float>
static readonly "KILLER_ENTITY": $LootContextParam<$Entity>
static readonly "LAST_DAMAGE_PLAYER": $LootContextParam<$Player>
static readonly "ORIGIN": $LootContextParam<$Vec3>
static readonly "THIS_ENTITY": $LootContextParam<$Entity>
static readonly "TOOL": $LootContextParam<$ItemStack>

constructor()

}
}

declare module "net.minecraft.world.level.storage.loot.predicates.CompositeLootItemCondition$Builder" {
import { $AnyOfCondition$Builder } from "net.minecraft.world.level.storage.loot.predicates.AnyOfCondition$Builder"
import { $LootItemCondition } from "net.minecraft.world.level.storage.loot.predicates.LootItemCondition"
import { $LootItemCondition$Builder, $LootItemCondition$Builder$$Type } from "net.minecraft.world.level.storage.loot.predicates.LootItemCondition$Builder"
import { $AllOfCondition$Builder } from "net.minecraft.world.level.storage.loot.predicates.AllOfCondition$Builder"

export class $CompositeLootItemCondition$Builder implements $LootItemCondition$Builder {
constructor(...builder0s: $LootItemCondition$Builder$$Type[])

public "addTerm"(builder0: $LootItemCondition$Builder$$Type): void
public "and"(builder0: $LootItemCondition$Builder$$Type): $AllOfCondition$Builder
public "build"(): $LootItemCondition
public "invert"(): $LootItemCondition$Builder
public "or"(builder0: $LootItemCondition$Builder$$Type): $AnyOfCondition$Builder
}
}

declare module "net.minecraft.world.level.storage.loot.providers.number.NumberProvider" {
import { $ValidationContext$$Type } from "net.minecraft.world.level.storage.loot.ValidationContext"
import { $LootContext$$Type } from "net.minecraft.world.level.storage.loot.LootContext"
import { $Set } from "java.util.Set"
import { $LootContextParam } from "net.minecraft.world.level.storage.loot.parameters.LootContextParam"
import { $LootNumberProviderType } from "net.minecraft.world.level.storage.loot.providers.number.LootNumberProviderType"
import { $LootContextUser } from "net.minecraft.world.level.storage.loot.LootContextUser"

export interface $NumberProvider extends $LootContextUser {
"getFloat"(lootContext0: $LootContext$$Type): float
"getInt"(lootContext0: $LootContext$$Type): integer
"getReferencedContextParams"(): $Set<$LootContextParam<any>>
"getType"(): $LootNumberProviderType
"validate"(validationContext0: $ValidationContext$$Type): void
get "referencedContextParams"(): $Set<$LootContextParam<any>>
get "type"(): $LootNumberProviderType
}

export namespace $NumberProvider {
const probejs$$marker: never
}
export abstract class $NumberProvider$$Static implements $NumberProvider {
}
}

declare module "net.minecraft.world.level.storage.loot.LootDataId" {
import { $ResourceLocation, $ResourceLocation$$Type } from "net.minecraft.resources.ResourceLocation"
import { $Record } from "java.lang.Record"
import { $LootDataType, $LootDataType$$Type } from "net.minecraft.world.level.storage.loot.LootDataType"

export class $LootDataId<T = any> extends $Record {
constructor(lootDataType0: $LootDataType$$Type<T>, resourceLocation1: $ResourceLocation$$Type)

public "location"(): $ResourceLocation
public "type"(): $LootDataType<T>
}
}

declare module "net.minecraft.world.level.storage.LevelStorageSource$LevelStorageAccess" {
import { $WorldData, $WorldData$$Type } from "net.minecraft.world.level.storage.WorldData"
import { $Tag$$Type } from "net.minecraft.nbt.Tag"
import { $LevelSummary } from "net.minecraft.world.level.storage.LevelSummary"
import { $WorldDimensions$Complete } from "net.minecraft.world.level.levelgen.WorldDimensions$Complete"
import { $Lifecycle$$Type } from "com.mojang.serialization.Lifecycle"
import { $RegistryAccess$$Type } from "net.minecraft.core.RegistryAccess"
import { $ResourceKey$$Type } from "net.minecraft.resources.ResourceKey"
import { $AutoCloseable } from "java.lang.AutoCloseable"
import { $Pair } from "com.mojang.datafixers.util.Pair"
import { $Registry$$Type } from "net.minecraft.core.Registry"
import { $PlayerDataStorage } from "net.minecraft.world.level.storage.PlayerDataStorage"
import { $CompoundTag$$Type } from "net.minecraft.nbt.CompoundTag"
import { $DynamicOps$$Type } from "com.mojang.serialization.DynamicOps"
import { $Optional } from "java.util.Optional"
import { $LevelStem$$Type } from "net.minecraft.world.level.dimension.LevelStem"
import { $WorldDataConfiguration, $WorldDataConfiguration$$Type } from "net.minecraft.world.level.WorldDataConfiguration"
import { $Level } from "net.minecraft.world.level.Level"
import { $Path } from "java.nio.file.Path"
import { $LevelResource$$Type } from "net.minecraft.world.level.storage.LevelResource"

export class $LevelStorageSource$LevelStorageAccess implements $AutoCloseable {
public "close"(): void
public "createPlayerStorage"(): $PlayerDataStorage
public "deleteLevel"(): void
public "getDataConfiguration"(): $WorldDataConfiguration
public "getDataTag"(dynamicOps0: $DynamicOps$$Type<$Tag$$Type>, worldDataConfiguration1: $WorldDataConfiguration$$Type, registry2: $Registry$$Type<$LevelStem$$Type>, lifecycle3: $Lifecycle$$Type): $Pair<$WorldData, $WorldDimensions$Complete>
public "getDimensionPath"(resourceKey0: $ResourceKey$$Type<$Level>): $Path
public "getIconFile"(): $Optional<$Path>
public "getLevelId"(): string
public "getLevelPath"(levelResource0: $LevelResource$$Type): $Path
public "getSummary"(): $LevelSummary
public "getWorldDir"(): $Path
public "makeWorldBackup"(): long
public "readAdditionalLevelSaveData"(): void
public "renameLevel"(string0: string): void
public "saveDataTag"(registryAccess0: $RegistryAccess$$Type, worldData1: $WorldData$$Type, compoundTag2: $CompoundTag$$Type): void
public "saveDataTag"(registryAccess0: $RegistryAccess$$Type, worldData1: $WorldData$$Type): void
get "dataConfiguration"(): $WorldDataConfiguration
get "iconFile"(): $Optional<$Path>
get "levelId"(): string
get "summary"(): $LevelSummary
get "worldDir"(): $Path
}
}

declare module "net.minecraft.world.level.storage.CommandStorage" {
import { $ResourceLocation, $ResourceLocation$$Type } from "net.minecraft.resources.ResourceLocation"
import { $CompoundTag, $CompoundTag$$Type } from "net.minecraft.nbt.CompoundTag"
import { $Stream } from "java.util.stream.Stream"
import { $DimensionDataStorage$$Type } from "net.minecraft.world.level.storage.DimensionDataStorage"

export class $CommandStorage {
constructor(dimensionDataStorage0: $DimensionDataStorage$$Type)

public "get"(resourceLocation0: $ResourceLocation$$Type): $CompoundTag
public "keys"(): $Stream<$ResourceLocation>
public "set"(resourceLocation0: $ResourceLocation$$Type, compoundTag1: $CompoundTag$$Type): void
}
}

declare module "net.minecraft.world.level.storage.loot.entries.ComposableEntryContainer" {
import { $Consumer$$Type } from "java.util.function.Consumer"
import { $LootPoolEntry$$Type } from "net.minecraft.world.level.storage.loot.entries.LootPoolEntry"
import { $LootContext$$Type } from "net.minecraft.world.level.storage.loot.LootContext"

export interface $ComposableEntryContainer {
"and"(composableEntryContainer0: $ComposableEntryContainer$$Type): $ComposableEntryContainer
"expand"(lootContext0: $LootContext$$Type, consumer1: $Consumer$$Type<$LootPoolEntry$$Type>): boolean
"or"(composableEntryContainer0: $ComposableEntryContainer$$Type): $ComposableEntryContainer
}

export namespace $ComposableEntryContainer {
const ALWAYS_FALSE: $ComposableEntryContainer
const ALWAYS_TRUE: $ComposableEntryContainer
}
export abstract class $ComposableEntryContainer$$Static implements $ComposableEntryContainer {
static readonly "ALWAYS_FALSE": $ComposableEntryContainer
static readonly "ALWAYS_TRUE": $ComposableEntryContainer

}
}

declare module "net.minecraft.world.level.storage.loot.entries.LootPoolEntry" {
import { $Consumer$$Type } from "java.util.function.Consumer"
import { $LootContext$$Type } from "net.minecraft.world.level.storage.loot.LootContext"
import { $ItemStack$$Type } from "net.minecraft.world.item.ItemStack"

export interface $LootPoolEntry {
"createItemStack"(consumer0: $Consumer$$Type<$ItemStack$$Type>, lootContext1: $LootContext$$Type): void
"getWeight"(float0: float): integer
}

export namespace $LootPoolEntry {
const probejs$$marker: never
}
export abstract class $LootPoolEntry$$Static implements $LootPoolEntry {
}
}

declare module "net.minecraft.world.level.storage.WritableLevelData" {
import { $LevelHeightAccessor$$Type } from "net.minecraft.world.level.LevelHeightAccessor"
import { $BlockPos$$Type } from "net.minecraft.core.BlockPos"
import { $CrashReportCategory$$Type } from "net.minecraft.CrashReportCategory"
import { $GameRules } from "net.minecraft.world.level.GameRules"
import { $Difficulty } from "net.minecraft.world.Difficulty"
import { $LevelData } from "net.minecraft.world.level.storage.LevelData"

export interface $WritableLevelData extends $LevelData {
"fillCrashReportCategory"(crashReportCategory0: $CrashReportCategory$$Type, levelHeightAccessor1: $LevelHeightAccessor$$Type): void
"getDayTime"(): long
"getDifficulty"(): $Difficulty
"getGameRules"(): $GameRules
"getGameTime"(): long
"getSpawnAngle"(): float
"getXSpawn"(): integer
"getYSpawn"(): integer
"getZSpawn"(): integer
"isDifficultyLocked"(): boolean
"isHardcore"(): boolean
"isRaining"(): boolean
"isThundering"(): boolean
"setRaining"(boolean0: boolean): void
"setSpawn"(blockPos0: $BlockPos$$Type, float1: float): void
"setSpawnAngle"(float0: float): void
"setXSpawn"(int0: integer): void
"setYSpawn"(int0: integer): void
"setZSpawn"(int0: integer): void
get "dayTime"(): long
get "difficulty"(): $Difficulty
get "gameRules"(): $GameRules
get "gameTime"(): long
get "spawnAngle"(): float
get "xSpawn"(): integer
get "ySpawn"(): integer
get "zSpawn"(): integer
get "difficultyLocked"(): boolean
get "hardcore"(): boolean
get "raining"(): boolean
get "thundering"(): boolean
set "raining"(value: boolean)
set "spawnAngle"(value: float)
set "xSpawn"(value: integer)
set "ySpawn"(value: integer)
set "zSpawn"(value: integer)
}

export namespace $WritableLevelData {
const probejs$$marker: never
}
export abstract class $WritableLevelData$$Static implements $WritableLevelData {
}
}

declare module "net.minecraft.world.level.storage.loot.LootContextUser" {
import { $ValidationContext$$Type } from "net.minecraft.world.level.storage.loot.ValidationContext"
import { $Set } from "java.util.Set"
import { $LootContextParam } from "net.minecraft.world.level.storage.loot.parameters.LootContextParam"

export interface $LootContextUser {
"getReferencedContextParams"(): $Set<$LootContextParam<any>>
"validate"(validationContext0: $ValidationContext$$Type): void
get "referencedContextParams"(): $Set<$LootContextParam<any>>
}

export namespace $LootContextUser {
const probejs$$marker: never
}
export abstract class $LootContextUser$$Static implements $LootContextUser {
}
}

declare module "net.minecraft.world.level.storage.loot.ValidationContext" {
import { $LootDataResolver, $LootDataResolver$$Type } from "net.minecraft.world.level.storage.loot.LootDataResolver"
import { $Set$$Type } from "java.util.Set"
import { $LootDataId$$Type } from "net.minecraft.world.level.storage.loot.LootDataId"
import { $LootContextParamSet$$Type } from "net.minecraft.world.level.storage.loot.parameters.LootContextParamSet"
import { $Multimap, $Multimap$$Type } from "com.google.common.collect.Multimap"
import { $LootContextUser$$Type } from "net.minecraft.world.level.storage.loot.LootContextUser"
import { $Supplier$$Type } from "java.util.function.Supplier"

export class $ValidationContext {
constructor(lootContextParamSet0: $LootContextParamSet$$Type, lootDataResolver1: $LootDataResolver$$Type)
constructor(multimap0: $Multimap$$Type<string, string>, supplier1: $Supplier$$Type<string>, lootContextParamSet2: $LootContextParamSet$$Type, lootDataResolver3: $LootDataResolver$$Type, set4: $Set$$Type<$LootDataId$$Type<any>>)

public "enterElement"(string0: string, lootDataId1: $LootDataId$$Type<any>): $ValidationContext
public "forChild"(string0: string): $ValidationContext
public "getProblems"(): $Multimap<string, string>
public "hasVisitedElement"(lootDataId0: $LootDataId$$Type<any>): boolean
public "reportProblem"(string0: string): void
public "resolver"(): $LootDataResolver
public "setParams"(lootContextParamSet0: $LootContextParamSet$$Type): $ValidationContext
public "validateUser"(lootContextUser0: $LootContextUser$$Type): void
get "problems"(): $Multimap<string, string>
set "params"(value: $LootContextParamSet$$Type)
}
}

declare module "net.minecraft.world.level.storage.loot.parameters.LootContextParamSet" {
import { $ValidationContext$$Type } from "net.minecraft.world.level.storage.loot.ValidationContext"
import { $Set } from "java.util.Set"
import { $LootContextParam, $LootContextParam$$Type } from "net.minecraft.world.level.storage.loot.parameters.LootContextParam"
import { $LootContextParamSet$Builder } from "net.minecraft.world.level.storage.loot.parameters.LootContextParamSet$Builder"
import { $LootContextUser$$Type } from "net.minecraft.world.level.storage.loot.LootContextUser"

export class $LootContextParamSet {
public static "builder"(): $LootContextParamSet$Builder
public "getAllowed"(): $Set<$LootContextParam<any>>
public "getRequired"(): $Set<$LootContextParam<any>>
public "isAllowed"(lootContextParam0: $LootContextParam$$Type<any>): boolean
public "validateUser"(validationContext0: $ValidationContext$$Type, lootContextUser1: $LootContextUser$$Type): void
get "allowed"(): $Set<$LootContextParam<any>>
get "required"(): $Set<$LootContextParam<any>>
}
}

declare module "net.minecraft.world.level.storage.loot.SerializerType" {
import { $Serializer, $Serializer$$Type } from "net.minecraft.world.level.storage.loot.Serializer"

export class $SerializerType<T = any> {
constructor(serializer0: $Serializer$$Type<T>)

public "getSerializer"(): $Serializer<T>
get "serializer"(): $Serializer<T>
}
}

declare module "net.minecraft.world.level.storage.loot.LootTable$Builder" {
import { $ResourceLocation$$Type } from "net.minecraft.resources.ResourceLocation"
import { $FunctionUserBuilder } from "net.minecraft.world.level.storage.loot.functions.FunctionUserBuilder"
import { $LootPool$Builder$$Type } from "net.minecraft.world.level.storage.loot.LootPool$Builder"
import { $LootItemFunction$Builder } from "net.minecraft.world.level.storage.loot.functions.LootItemFunction$Builder"
import { $LootTable } from "net.minecraft.world.level.storage.loot.LootTable"
import { $LootContextParamSet$$Type } from "net.minecraft.world.level.storage.loot.parameters.LootContextParamSet"
import { $Function$$Type } from "java.util.function.Function"
import { $Iterable$$Type } from "java.lang.Iterable"

export class $LootTable$Builder implements $FunctionUserBuilder<$LootTable$Builder> {
constructor()

public "apply"<E>(iterable0: $Iterable$$Type<E>, function1: $Function$$Type<E, $LootItemFunction$Builder>): $LootTable$Builder
public "apply"<E>(e0s: E[], function1: $Function$$Type<E, $LootItemFunction$Builder>): $LootTable$Builder
public "build"(): $LootTable
public "setParamSet"(lootContextParamSet0: $LootContextParamSet$$Type): $LootTable$Builder
public "setRandomSequence"(resourceLocation0: $ResourceLocation$$Type): $LootTable$Builder
public "withPool"(builder0: $LootPool$Builder$$Type): $LootTable$Builder
set "paramSet"(value: $LootContextParamSet$$Type)
set "randomSequence"(value: $ResourceLocation$$Type)
}
}

declare module "net.minecraft.world.level.storage.ServerLevelData" {
import { $LevelHeightAccessor$$Type } from "net.minecraft.world.level.LevelHeightAccessor"
import { $MinecraftServer } from "net.minecraft.server.MinecraftServer"
import { $WorldBorder$Settings, $WorldBorder$Settings$$Type } from "net.minecraft.world.level.border.WorldBorder$Settings"
import { $BlockPos$$Type } from "net.minecraft.core.BlockPos"
import { $TimerQueue } from "net.minecraft.world.level.timers.TimerQueue"
import { $CrashReportCategory$$Type } from "net.minecraft.CrashReportCategory"
import { $GameRules } from "net.minecraft.world.level.GameRules"
import { $UUID, $UUID$$Type } from "java.util.UUID"
import { $GameType, $GameType$$Type } from "net.minecraft.world.level.GameType"
import { $Difficulty } from "net.minecraft.world.Difficulty"
import { $WritableLevelData } from "net.minecraft.world.level.storage.WritableLevelData"

export interface $ServerLevelData extends $WritableLevelData {
"fillCrashReportCategory"(crashReportCategory0: $CrashReportCategory$$Type, levelHeightAccessor1: $LevelHeightAccessor$$Type): void
"getAllowCommands"(): boolean
"getClearWeatherTime"(): integer
"getDayTime"(): long
"getDifficulty"(): $Difficulty
"getGameRules"(): $GameRules
"getGameTime"(): long
"getGameType"(): $GameType
"getLevelName"(): string
"getRainTime"(): integer
"getScheduledEvents"(): $TimerQueue<$MinecraftServer>
"getSpawnAngle"(): float
"getThunderTime"(): integer
"getWanderingTraderId"(): $UUID
"getWanderingTraderSpawnChance"(): integer
"getWanderingTraderSpawnDelay"(): integer
"getWorldBorder"(): $WorldBorder$Settings
"getXSpawn"(): integer
"getYSpawn"(): integer
"getZSpawn"(): integer
"isDifficultyLocked"(): boolean
"isHardcore"(): boolean
"isInitialized"(): boolean
"isRaining"(): boolean
"isThundering"(): boolean
"setClearWeatherTime"(int0: integer): void
"setDayTime"(long0: long): void
"setGameTime"(long0: long): void
"setGameType"(gameType0: $GameType$$Type): void
"setInitialized"(boolean0: boolean): void
"setRainTime"(int0: integer): void
"setRaining"(boolean0: boolean): void
"setSpawn"(blockPos0: $BlockPos$$Type, float1: float): void
"setSpawnAngle"(float0: float): void
"setThunderTime"(int0: integer): void
"setThundering"(boolean0: boolean): void
"setWanderingTraderId"(uUID0: $UUID$$Type): void
"setWanderingTraderSpawnChance"(int0: integer): void
"setWanderingTraderSpawnDelay"(int0: integer): void
"setWorldBorder"(settings0: $WorldBorder$Settings$$Type): void
"setXSpawn"(int0: integer): void
"setYSpawn"(int0: integer): void
"setZSpawn"(int0: integer): void
get "allowCommands"(): boolean
get "clearWeatherTime"(): integer
get "dayTime"(): long
get "difficulty"(): $Difficulty
get "gameRules"(): $GameRules
get "gameTime"(): long
get "gameType"(): $GameType
get "levelName"(): string
get "rainTime"(): integer
get "scheduledEvents"(): $TimerQueue<$MinecraftServer>
get "spawnAngle"(): float
get "thunderTime"(): integer
get "wanderingTraderId"(): $UUID
get "wanderingTraderSpawnChance"(): integer
get "wanderingTraderSpawnDelay"(): integer
get "worldBorder"(): $WorldBorder$Settings
get "xSpawn"(): integer
get "ySpawn"(): integer
get "zSpawn"(): integer
get "difficultyLocked"(): boolean
get "hardcore"(): boolean
get "initialized"(): boolean
get "raining"(): boolean
get "thundering"(): boolean
set "clearWeatherTime"(value: integer)
set "dayTime"(value: long)
set "gameTime"(value: long)
set "gameType"(value: $GameType$$Type)
set "initialized"(value: boolean)
set "rainTime"(value: integer)
set "raining"(value: boolean)
set "spawnAngle"(value: float)
set "thunderTime"(value: integer)
set "thundering"(value: boolean)
set "wanderingTraderId"(value: $UUID$$Type)
set "wanderingTraderSpawnChance"(value: integer)
set "wanderingTraderSpawnDelay"(value: integer)
set "worldBorder"(value: $WorldBorder$Settings$$Type)
set "xSpawn"(value: integer)
set "ySpawn"(value: integer)
set "zSpawn"(value: integer)
}

export namespace $ServerLevelData {
const probejs$$marker: never
}
export abstract class $ServerLevelData$$Static implements $ServerLevelData {
}
}

declare module "net.minecraft.world.level.storage.DimensionDataStorage" {
import { $CompoundTag, $CompoundTag$$Type } from "net.minecraft.nbt.CompoundTag"
import { $DimensionDataStorageAccessor } from "com.legacy.structure_gel.core.mixin.DimensionDataStorageAccessor"
import { $Map } from "java.util.Map"
import { $SavedData, $SavedData$$Type } from "net.minecraft.world.level.saveddata.SavedData"
import { $DataFixer$$Type } from "com.mojang.datafixers.DataFixer"
import { $Function$$Type } from "java.util.function.Function"
import { $Supplier$$Type } from "java.util.function.Supplier"
import { $File, $File$$Type } from "java.io.File"

export class $DimensionDataStorage implements $DimensionDataStorageAccessor {
readonly "cache": $Map<string, $SavedData>
readonly "dataFolder": $File

constructor(file0: $File$$Type, dataFixer1: $DataFixer$$Type)

public "computeIfAbsent"<T extends $SavedData>(function0: $Function$$Type<$CompoundTag$$Type, T>, supplier1: $Supplier$$Type<T>, string2: string): T
public "get"<T extends $SavedData>(function0: $Function$$Type<$CompoundTag$$Type, T>, string1: string): T
public "readTagFromDisk"(string0: string, int1: integer): $CompoundTag
public "save"(): void
public "set"(string0: string, savedData1: $SavedData$$Type): void
}
}

declare module "net.minecraft.world.level.storage.LevelResource" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export class $LevelResource {
static readonly "DATAPACK_DIR": $LevelResource
static readonly "GENERATED_DIR": $LevelResource
static readonly "ICON_FILE": $LevelResource
static readonly "LEVEL_DATA_FILE": $LevelResource
static readonly "LOCK_FILE": $LevelResource
static readonly "MAP_RESOURCE_FILE": $LevelResource
static readonly "OLD_LEVEL_DATA_FILE": $LevelResource
static readonly "PLAYER_ADVANCEMENTS_DIR": $LevelResource
static readonly "PLAYER_DATA_DIR": $LevelResource
static readonly "PLAYER_OLD_DATA_DIR": $LevelResource
static readonly "PLAYER_STATS_DIR": $LevelResource
static readonly "ROOT": $LevelResource

constructor(string0: string)

public "getId"(): string
get "id"(): string
}
}

declare module "net.minecraft.world.level.storage.loot.parameters.LootContextParam" {
import { $ResourceLocation, $ResourceLocation$$Type } from "net.minecraft.resources.ResourceLocation"

export class $LootContextParam<T = any> {
constructor(resourceLocation0: $ResourceLocation$$Type)

public "getName"(): $ResourceLocation
get "name"(): $ResourceLocation
}
}

declare module "net.minecraft.world.level.storage.loot.entries.EntryGroup$Builder" {
import { $LootPoolEntryContainer$Builder, $LootPoolEntryContainer$Builder$$Type } from "net.minecraft.world.level.storage.loot.entries.LootPoolEntryContainer$Builder"
import { $Function$$Type } from "java.util.function.Function"
import { $LootItemCondition$Builder } from "net.minecraft.world.level.storage.loot.predicates.LootItemCondition$Builder"
import { $Iterable$$Type } from "java.lang.Iterable"

export class $EntryGroup$Builder extends $LootPoolEntryContainer$Builder<$EntryGroup$Builder> {
constructor(...builder0s: $LootPoolEntryContainer$Builder$$Type<any>[])

public "when"<E>(iterable0: $Iterable$$Type<E>, function1: $Function$$Type<E, $LootItemCondition$Builder>): $EntryGroup$Builder
}
}

declare module "net.minecraft.world.level.storage.loot.entries.SequentialEntry$Builder" {
import { $LootPoolEntryContainer$Builder, $LootPoolEntryContainer$Builder$$Type } from "net.minecraft.world.level.storage.loot.entries.LootPoolEntryContainer$Builder"
import { $Function$$Type } from "java.util.function.Function"
import { $LootItemCondition$Builder } from "net.minecraft.world.level.storage.loot.predicates.LootItemCondition$Builder"
import { $Iterable$$Type } from "java.lang.Iterable"

export class $SequentialEntry$Builder extends $LootPoolEntryContainer$Builder<$SequentialEntry$Builder> {
constructor(...builder0s: $LootPoolEntryContainer$Builder$$Type<any>[])

public "when"<E>(iterable0: $Iterable$$Type<E>, function1: $Function$$Type<E, $LootItemCondition$Builder>): $SequentialEntry$Builder
}
}

declare module "net.minecraft.world.level.storage.loot.LootParams" {
import { $ResourceLocation$$Type } from "net.minecraft.resources.ResourceLocation"
import { $Consumer$$Type } from "java.util.function.Consumer"
import { $LootParams$DynamicDrop$$Type } from "net.minecraft.world.level.storage.loot.LootParams$DynamicDrop"
import { $Map$$Type } from "java.util.Map"
import { $LootContextParam$$Type } from "net.minecraft.world.level.storage.loot.parameters.LootContextParam"
import { $ItemStack$$Type } from "net.minecraft.world.item.ItemStack"
import { $ServerLevel, $ServerLevel$$Type } from "net.minecraft.server.level.ServerLevel"

export class $LootParams {
constructor(serverLevel0: $ServerLevel$$Type, map1: $Map$$Type<$LootContextParam$$Type<any>, any>, map2: $Map$$Type<$ResourceLocation$$Type, $LootParams$DynamicDrop$$Type>, float3: float)

public "addDynamicDrops"(resourceLocation0: $ResourceLocation$$Type, consumer1: $Consumer$$Type<$ItemStack$$Type>): void
public "getLevel"(): $ServerLevel
public "getLuck"(): float
public "getOptionalParameter"<T>(lootContextParam0: $LootContextParam$$Type<T>): T
public "getParamOrNull"<T>(lootContextParam0: $LootContextParam$$Type<T>): T
public "getParameter"<T>(lootContextParam0: $LootContextParam$$Type<T>): T
public "hasParam"(lootContextParam0: $LootContextParam$$Type<any>): boolean
get "level"(): $ServerLevel
get "luck"(): float
}
}

declare module "net.minecraft.world.level.storage.loot.LootTable" {
import { $ResourceLocation, $ResourceLocation$$Type } from "net.minecraft.resources.ResourceLocation"
import { $LootPool, $LootPool$$Type } from "net.minecraft.world.level.storage.loot.LootPool"
import { $ValidationContext$$Type } from "net.minecraft.world.level.storage.loot.ValidationContext"
import { $LootParams$$Type } from "net.minecraft.world.level.storage.loot.LootParams"
import { $ObjectArrayList } from "it.unimi.dsi.fastutil.objects.ObjectArrayList"
import { $LootTable$Builder } from "net.minecraft.world.level.storage.loot.LootTable$Builder"
import { $LootTableForgeAccessor } from "fuzs.puzzleslib.mixin.accessor.LootTableForgeAccessor"
import { $ServerLevel$$Type } from "net.minecraft.server.level.ServerLevel"
import { $CallbackInfoReturnable$$Type } from "org.spongepowered.asm.mixin.injection.callback.CallbackInfoReturnable"
import { $Consumer, $Consumer$$Type } from "java.util.function.Consumer"
import { $List } from "java.util.List"
import { $Container$$Type } from "net.minecraft.world.Container"
import { $LootContext$$Type } from "net.minecraft.world.level.storage.loot.LootContext"
import { $LootItemFunction, $LootItemFunction$$Type } from "net.minecraft.world.level.storage.loot.functions.LootItemFunction"
import { $AccessorLootTable } from "at.petrak.hexcasting.mixin.accessor.AccessorLootTable"
import { $LootContextParamSet } from "net.minecraft.world.level.storage.loot.parameters.LootContextParamSet"
import { $ItemStack, $ItemStack$$Type } from "net.minecraft.world.item.ItemStack"
import { $AccessorLootTable as $AccessorLootTable$0 } from "org.violetmoon.zeta.mixin.mixins.AccessorLootTable"
import { $ILootTableID } from "com.lootintegrations.loot.ILootTableID"

export class $LootTable implements $AccessorLootTable$0, $LootTableForgeAccessor, $ILootTableID, $AccessorLootTable {
static readonly "DEFAULT_PARAM_SET": $LootContextParamSet
static readonly "EMPTY": $LootTable
readonly "pools": $List<$LootPool>

public "addPool"(lootPool0: $LootPool$$Type): void
public static "createStackSplitter"(serverLevel0: $ServerLevel$$Type, consumer1: $Consumer$$Type<$ItemStack$$Type>): $Consumer<$ItemStack>
public "fill"(container0: $Container$$Type, lootParams1: $LootParams$$Type, long2: long): void
public "freeze"(): void
public "getID"(): $ResourceLocation
public "getLootTableId"(): $ResourceLocation
public "getParamSet"(): $LootContextParamSet
public "getPool"(string0: string): $LootPool
public "getRandomItems"(lootContext0: $LootContext$$Type): $ObjectArrayList<$ItemStack>
public "getRandomItems"(lootParams0: $LootParams$$Type, consumer1: $Consumer$$Type<$ItemStack$$Type>): void
public "getRandomItems"(lootContext0: $LootContext$$Type, consumer1: $Consumer$$Type<$ItemStack$$Type>): void
public "getRandomItems"(lootParams0: $LootParams$$Type): $ObjectArrayList<$ItemStack>
public "getRandomItems"(lootParams0: $LootParams$$Type, long1: long): $ObjectArrayList<$ItemStack>
public "getRandomItems"(lootParams0: $LootParams$$Type, long1: long, consumer2: $Consumer$$Type<$ItemStack$$Type>): void
/** @deprecated */
public "getRandomItemsRaw"(lootParams0: $LootParams$$Type, consumer1: $Consumer$$Type<$ItemStack$$Type>): void
/** @deprecated */
public "getRandomItemsRaw"(lootContext0: $LootContext$$Type, consumer1: $Consumer$$Type<$ItemStack$$Type>): void
public "handler$dom000$on"(lootContext0: $LootContext$$Type, callbackInfoReturnable1: $CallbackInfoReturnable$$Type): void
public "handler$ibm000$getDrops"(lootContext0: $LootContext$$Type, callbackInfoReturnable1: $CallbackInfoReturnable$$Type): void
public "handler$zko000$getRandomItems"(lootContext0: $LootContext$$Type, callbackInfoReturnable1: $CallbackInfoReturnable$$Type): void
public "isFrozen"(): boolean
public static "lootTable"(): $LootTable$Builder
public "removePool"(string0: string): $LootPool
public "setId"(resourceLocation0: $ResourceLocation$$Type): void
public "setLootTableId"(resourceLocation0: $ResourceLocation$$Type): void
public "validate"(validationContext0: $ValidationContext$$Type): void
get "functions"(): $LootItemFunction[]
set "functions"(value: $LootItemFunction$$Type[])
get "iD"(): $ResourceLocation
get "lootTableId"(): $ResourceLocation
get "paramSet"(): $LootContextParamSet
get "frozen"(): boolean
set "id"(value: $ResourceLocation$$Type)
set "lootTableId"(value: $ResourceLocation$$Type)
}
}

declare module "net.minecraft.world.level.storage.loot.entries.LootPoolEntryContainer$Builder" {
import { $AlternativesEntry$Builder } from "net.minecraft.world.level.storage.loot.entries.AlternativesEntry$Builder"
import { $SequentialEntry$Builder } from "net.minecraft.world.level.storage.loot.entries.SequentialEntry$Builder"
import { $LootItemCondition$Builder, $LootItemCondition$Builder$$Type } from "net.minecraft.world.level.storage.loot.predicates.LootItemCondition$Builder"
import { $Function$$Type } from "java.util.function.Function"
import { $EntryGroup$Builder } from "net.minecraft.world.level.storage.loot.entries.EntryGroup$Builder"
import { $LootPoolEntryContainer } from "net.minecraft.world.level.storage.loot.entries.LootPoolEntryContainer"
import { $Iterable$$Type } from "java.lang.Iterable"
import { $ConditionUserBuilder } from "net.minecraft.world.level.storage.loot.predicates.ConditionUserBuilder"

export class $LootPoolEntryContainer$Builder<T extends $LootPoolEntryContainer$Builder<T> = $LootPoolEntryContainer$Builder<T>> implements $ConditionUserBuilder<T> {
constructor()

public "append"(builder0: $LootPoolEntryContainer$Builder$$Type<any>): $EntryGroup$Builder
public "build"(): $LootPoolEntryContainer
public "otherwise"(builder0: $LootPoolEntryContainer$Builder$$Type<any>): $AlternativesEntry$Builder
public "then"(builder0: $LootPoolEntryContainer$Builder$$Type<any>): $SequentialEntry$Builder
public "unwrap"(): T
public "when"(builder0: $LootItemCondition$Builder$$Type): T
public "when"<E>(iterable0: $Iterable$$Type<E>, function1: $Function$$Type<E, $LootItemCondition$Builder>): T
}
}

declare module "net.minecraft.world.level.storage.LevelStorageSource$LevelDirectory" {
import { $LocalDateTime$$Type } from "java.time.LocalDateTime"
import { $Record } from "java.lang.Record"
import { $Path, $Path$$Type } from "java.nio.file.Path"
import { $LevelResource$$Type } from "net.minecraft.world.level.storage.LevelResource"

export class $LevelStorageSource$LevelDirectory extends $Record {
constructor(path: $Path$$Type)

public "corruptedDataFile"(localDateTime0: $LocalDateTime$$Type): $Path
public "dataFile"(): $Path
public "directoryName"(): string
public "iconFile"(): $Path
public "lockFile"(): $Path
public "oldDataFile"(): $Path
public "path"(): $Path
public "resourcePath"(levelResource0: $LevelResource$$Type): $Path
}
}

declare module "net.minecraft.world.level.storage.loot.Serializer" {
import { $JsonObject$$Type } from "com.google.gson.JsonObject"
import { $JsonSerializationContext$$Type } from "com.google.gson.JsonSerializationContext"
import { $JsonDeserializationContext$$Type } from "com.google.gson.JsonDeserializationContext"

export interface $Serializer<T = any> {
"deserialize"(jsonObject0: $JsonObject$$Type, jsonDeserializationContext1: $JsonDeserializationContext$$Type): T
"serialize"(jsonObject0: $JsonObject$$Type, t1: T, jsonSerializationContext2: $JsonSerializationContext$$Type): void
}

export namespace $Serializer {
const probejs$$marker: never
}
export abstract class $Serializer$$Static<T = any> implements $Serializer<T> {
}
}

declare module "net.minecraft.world.level.storage.PrimaryLevelData$SpecialWorldProperty" {
import { $Enum } from "java.lang.Enum"

/** @deprecated */
export class $PrimaryLevelData$SpecialWorldProperty extends $Enum<$PrimaryLevelData$SpecialWorldProperty> {
static readonly "DEBUG": $PrimaryLevelData$SpecialWorldProperty
static readonly "FLAT": $PrimaryLevelData$SpecialWorldProperty
static readonly "NONE": $PrimaryLevelData$SpecialWorldProperty

public static "valueOf"(string0: string): $PrimaryLevelData$SpecialWorldProperty
public static "values"(): $PrimaryLevelData$SpecialWorldProperty[]
}
}

declare module "net.minecraft.world.level.storage.LevelData" {
import { $LevelHeightAccessor$$Type } from "net.minecraft.world.level.LevelHeightAccessor"
import { $CrashReportCategory$$Type } from "net.minecraft.CrashReportCategory"
import { $GameRules } from "net.minecraft.world.level.GameRules"
import { $Difficulty } from "net.minecraft.world.Difficulty"

export interface $LevelData {
"fillCrashReportCategory"(crashReportCategory0: $CrashReportCategory$$Type, levelHeightAccessor1: $LevelHeightAccessor$$Type): void
"getDayTime"(): long
"getDifficulty"(): $Difficulty
"getGameRules"(): $GameRules
"getGameTime"(): long
"getSpawnAngle"(): float
"getXSpawn"(): integer
"getYSpawn"(): integer
"getZSpawn"(): integer
"isDifficultyLocked"(): boolean
"isHardcore"(): boolean
"isRaining"(): boolean
"isThundering"(): boolean
"setRaining"(boolean0: boolean): void
get "dayTime"(): long
get "difficulty"(): $Difficulty
get "gameRules"(): $GameRules
get "gameTime"(): long
get "spawnAngle"(): float
get "xSpawn"(): integer
get "ySpawn"(): integer
get "zSpawn"(): integer
get "difficultyLocked"(): boolean
get "hardcore"(): boolean
get "raining"(): boolean
get "thundering"(): boolean
set "raining"(value: boolean)
}

export namespace $LevelData {
const probejs$$marker: never
}
export abstract class $LevelData$$Static implements $LevelData {
}
}

declare module "net.minecraft.world.level.storage.loot.LootContext$EntityTarget" {
import { $Entity } from "net.minecraft.world.entity.Entity"
import { $Enum } from "java.lang.Enum"
import { $LootContextParam } from "net.minecraft.world.level.storage.loot.parameters.LootContextParam"

export class $LootContext$EntityTarget extends $Enum<$LootContext$EntityTarget> {
static readonly "DIRECT_KILLER": $LootContext$EntityTarget
static readonly "KILLER": $LootContext$EntityTarget
static readonly "KILLER_PLAYER": $LootContext$EntityTarget
static readonly "THIS": $LootContext$EntityTarget
readonly "name": string

public static "getByName"(string0: string): $LootContext$EntityTarget
public "getName"(): string
public "getParam"(): $LootContextParam<$Entity>
public static "valueOf"(string0: string): $LootContext$EntityTarget
public static "values"(): $LootContext$EntityTarget[]
get "param"(): $LootContextParam<$Entity>
}
}

declare module "net.minecraft.world.level.storage.LevelSummary" {
import { $LevelSummary$BackupStatus } from "net.minecraft.world.level.storage.LevelSummary$BackupStatus"
import { $LevelSettings, $LevelSettings$$Type } from "net.minecraft.world.level.LevelSettings"
import { $LevelVersion, $LevelVersion$$Type } from "net.minecraft.world.level.storage.LevelVersion"
import { $IForgeLevelSummary } from "net.minecraftforge.common.extensions.IForgeLevelSummary"
import { $Component } from "net.minecraft.network.chat.Component"
import { $Comparable } from "java.lang.Comparable"
import { $GameType } from "net.minecraft.world.level.GameType"
import { $Path, $Path$$Type } from "java.nio.file.Path"
import { $MutableComponent } from "net.minecraft.network.chat.MutableComponent"

export class $LevelSummary implements $Comparable<$LevelSummary>, $IForgeLevelSummary {
constructor(levelSettings0: $LevelSettings$$Type, levelVersion1: $LevelVersion$$Type, string2: string, boolean3: boolean, boolean4: boolean, boolean5: boolean, path6: $Path$$Type)

public "askToOpenWorld"(): boolean
public "backupStatus"(): $LevelSummary$BackupStatus
public "compareTo"(levelSummary0: $LevelSummary$$Type): integer
public "getGameMode"(): $GameType
public "getIcon"(): $Path
public "getInfo"(): $Component
public "getLastPlayed"(): long
public "getLevelId"(): string
public "getLevelName"(): string
public "getSettings"(): $LevelSettings
public "getWorldVersionName"(): $MutableComponent
public "hasCheats"(): boolean
public "isCompatible"(): boolean
public "isDisabled"(): boolean
public "isExperimental"(): boolean
public "isHardcore"(): boolean
/** @deprecated */
public "isLifecycleExperimental"(): boolean
public "isLocked"(): boolean
public "levelVersion"(): $LevelVersion
public "markVersionInList"(): boolean
public "requiresManualConversion"(): boolean
get "gameMode"(): $GameType
get "icon"(): $Path
get "info"(): $Component
get "lastPlayed"(): long
get "levelId"(): string
get "levelName"(): string
get "settings"(): $LevelSettings
get "worldVersionName"(): $MutableComponent
get "compatible"(): boolean
get "disabled"(): boolean
get "experimental"(): boolean
get "hardcore"(): boolean
get "lifecycleExperimental"(): boolean
get "locked"(): boolean
}
}

declare module "net.minecraft.world.level.storage.loot.functions.CopyNameFunction$NameSource" {
import { $Enum } from "java.lang.Enum"
import { $LootContextParam } from "net.minecraft.world.level.storage.loot.parameters.LootContextParam"

export class $CopyNameFunction$NameSource extends $Enum<$CopyNameFunction$NameSource> {
static readonly "BLOCK_ENTITY": $CopyNameFunction$NameSource
static readonly "KILLER": $CopyNameFunction$NameSource
static readonly "KILLER_PLAYER": $CopyNameFunction$NameSource
static readonly "THIS": $CopyNameFunction$NameSource
readonly "name": string
readonly "param": $LootContextParam<any>

public static "getByName"(string0: string): $CopyNameFunction$NameSource
public static "valueOf"(string0: string): $CopyNameFunction$NameSource
public static "values"(): $CopyNameFunction$NameSource[]
}
}

declare module "net.minecraft.world.level.storage.loot.LootParams$Builder" {
import { $ResourceLocation$$Type } from "net.minecraft.resources.ResourceLocation"
import { $LootParams$DynamicDrop$$Type } from "net.minecraft.world.level.storage.loot.LootParams$DynamicDrop"
import { $LootParams } from "net.minecraft.world.level.storage.loot.LootParams"
import { $LootContextParam$$Type } from "net.minecraft.world.level.storage.loot.parameters.LootContextParam"
import { $LootContextParamSet$$Type } from "net.minecraft.world.level.storage.loot.parameters.LootContextParamSet"
import { $ServerLevel, $ServerLevel$$Type } from "net.minecraft.server.level.ServerLevel"
import { $CallbackInfoReturnable$$Type } from "org.spongepowered.asm.mixin.injection.callback.CallbackInfoReturnable"
import { $LootParamsBuilderAccess } from "snownee.lychee.mixin.LootParamsBuilderAccess"

export class $LootParams$Builder implements $LootParamsBuilderAccess {
constructor(serverLevel0: $ServerLevel$$Type)

public "create"(lootContextParamSet0: $LootContextParamSet$$Type): $LootParams
public "getLevel"(): $ServerLevel
public "getOptionalParameter"<T>(lootContextParam0: $LootContextParam$$Type<T>): T
public "getParameter"<T>(lootContextParam0: $LootContextParam$$Type<T>): T
public "handler$ehh000$addTypeOnCreate"(paramSet: $LootContextParamSet$$Type, cir: $CallbackInfoReturnable$$Type): void
public "withDynamicDrop"(resourceLocation0: $ResourceLocation$$Type, dynamicDrop1: $LootParams$DynamicDrop$$Type): $LootParams$Builder
public "withLuck"(float0: float): $LootParams$Builder
public "withOptionalParameter"<T>(lootContextParam0: $LootContextParam$$Type<T>, t1: T): $LootParams$Builder
public "withParameter"<T>(lootContextParam0: $LootContextParam$$Type<T>, t1: T): $LootParams$Builder
get "luck"(): float
set "luck"(value: float)
get "level"(): $ServerLevel
}
}

declare module "net.minecraft.world.level.storage.loot.predicates.AllOfCondition$Builder" {
import { $AnyOfCondition$Builder } from "net.minecraft.world.level.storage.loot.predicates.AnyOfCondition$Builder"
import { $CompositeLootItemCondition$Builder } from "net.minecraft.world.level.storage.loot.predicates.CompositeLootItemCondition$Builder"
import { $LootItemCondition$Builder, $LootItemCondition$Builder$$Type } from "net.minecraft.world.level.storage.loot.predicates.LootItemCondition$Builder"

export class $AllOfCondition$Builder extends $CompositeLootItemCondition$Builder {
constructor(...builder0s: $LootItemCondition$Builder$$Type[])

public "and"(builder0: $LootItemCondition$Builder$$Type): $AllOfCondition$Builder
public "invert"(): $LootItemCondition$Builder
public "or"(builder0: $LootItemCondition$Builder$$Type): $AnyOfCondition$Builder
}
}

declare module "net.minecraft.world.level.storage.loot.predicates.ConditionUserBuilder" {
import { $LootItemCondition$Builder, $LootItemCondition$Builder$$Type } from "net.minecraft.world.level.storage.loot.predicates.LootItemCondition$Builder"
import { $Function$$Type } from "java.util.function.Function"
import { $Iterable$$Type } from "java.lang.Iterable"

export interface $ConditionUserBuilder<T extends $ConditionUserBuilder<T> = $ConditionUserBuilder<T>> {
"unwrap"(): T
"when"(builder0: $LootItemCondition$Builder$$Type): T
"when"<E>(iterable0: $Iterable$$Type<E>, function1: $Function$$Type<E, $LootItemCondition$Builder>): T
}

export namespace $ConditionUserBuilder {
const probejs$$marker: never
}
export abstract class $ConditionUserBuilder$$Static<T extends $ConditionUserBuilder<T> = $ConditionUserBuilder<T>> implements $ConditionUserBuilder<T> {
}
}

declare module "net.minecraft.world.level.storage.loot.parameters.LootContextParamSet$Builder" {
import { $LootContextParam$$Type } from "net.minecraft.world.level.storage.loot.parameters.LootContextParam"
import { $LootContextParamSet } from "net.minecraft.world.level.storage.loot.parameters.LootContextParamSet"

export class $LootContextParamSet$Builder {
constructor()

public "build"(): $LootContextParamSet
public "optional"(lootContextParam0: $LootContextParam$$Type<any>): $LootContextParamSet$Builder
public "required"(lootContextParam0: $LootContextParam$$Type<any>): $LootContextParamSet$Builder
}
}

declare module "net.minecraft.world.level.storage.loot.LootPool$Builder" {
import { $LootPool } from "net.minecraft.world.level.storage.loot.LootPool"
import { $LootItemCondition } from "net.minecraft.world.level.storage.loot.predicates.LootItemCondition"
import { $Function$$Type } from "java.util.function.Function"
import { $LootPoolEntryContainer } from "net.minecraft.world.level.storage.loot.entries.LootPoolEntryContainer"
import { $Iterable$$Type } from "java.lang.Iterable"
import { $List } from "java.util.List"
import { $FunctionUserBuilder } from "net.minecraft.world.level.storage.loot.functions.FunctionUserBuilder"
import { $NumberProvider$$Type } from "net.minecraft.world.level.storage.loot.providers.number.NumberProvider"
import { $LootItemFunction } from "net.minecraft.world.level.storage.loot.functions.LootItemFunction"
import { $LootItemFunction$Builder, $LootItemFunction$Builder$$Type } from "net.minecraft.world.level.storage.loot.functions.LootItemFunction$Builder"
import { $LootPoolEntryContainer$Builder$$Type } from "net.minecraft.world.level.storage.loot.entries.LootPoolEntryContainer$Builder"
import { $LootItemCondition$Builder } from "net.minecraft.world.level.storage.loot.predicates.LootItemCondition$Builder"
import { $ConditionUserBuilder } from "net.minecraft.world.level.storage.loot.predicates.ConditionUserBuilder"

export class $LootPool$Builder implements $FunctionUserBuilder<$LootPool$Builder>, $ConditionUserBuilder<$LootPool$Builder> {
readonly "conditions": $List<$LootItemCondition>
readonly "entries": $List<$LootPoolEntryContainer>
readonly "functions": $List<$LootItemFunction>

constructor()

public "add"(builder0: $LootPoolEntryContainer$Builder$$Type<any>): $LootPool$Builder
public "apply"(builder0: $LootItemFunction$Builder$$Type): $LootPool$Builder
public "apply"<E>(iterable0: $Iterable$$Type<E>, function1: $Function$$Type<E, $LootItemFunction$Builder>): $LootPool$Builder
public "apply"<E>(e0s: E[], function1: $Function$$Type<E, $LootItemFunction$Builder>): $LootPool$Builder
public "build"(): $LootPool
public "name"(string0: string): $LootPool$Builder
public "setBonusRolls"(numberProvider0: $NumberProvider$$Type): $LootPool$Builder
public "setRolls"(numberProvider0: $NumberProvider$$Type): $LootPool$Builder
public "when"<E>(iterable0: $Iterable$$Type<E>, function1: $Function$$Type<E, $LootItemCondition$Builder>): $LootPool$Builder
set "bonusRolls"(value: $NumberProvider$$Type)
set "rolls"(value: $NumberProvider$$Type)
}
}

declare module "net.minecraft.world.level.storage.loot.LootDataResolver" {
import { $ResourceLocation$$Type } from "net.minecraft.resources.ResourceLocation"
import { $Optional } from "java.util.Optional"
import { $LootDataId$$Type } from "net.minecraft.world.level.storage.loot.LootDataId"
import { $LootTable } from "net.minecraft.world.level.storage.loot.LootTable"
import { $LootDataType$$Type } from "net.minecraft.world.level.storage.loot.LootDataType"

export interface $LootDataResolver {
"getElement"<T>(lootDataId0: $LootDataId$$Type<T>): T
"getElement"<T>(lootDataType0: $LootDataType$$Type<T>, resourceLocation1: $ResourceLocation$$Type): T
"getElementOptional"<T>(lootDataType0: $LootDataType$$Type<T>, resourceLocation1: $ResourceLocation$$Type): $Optional<T>
"getElementOptional"<T>(lootDataId0: $LootDataId$$Type<T>): $Optional<T>
"getLootTable"(resourceLocation0: $ResourceLocation$$Type): $LootTable
}

export namespace $LootDataResolver {
const probejs$$marker: never
}
export abstract class $LootDataResolver$$Static implements $LootDataResolver {
}
}

declare module "net.minecraft.world.level.storage.loot.functions.LootItemFunction$Builder" {
import { $LootItemFunction } from "net.minecraft.world.level.storage.loot.functions.LootItemFunction"

export interface $LootItemFunction$Builder {
"build"(): $LootItemFunction
}

export namespace $LootItemFunction$Builder {
const probejs$$marker: never
}
export abstract class $LootItemFunction$Builder$$Static implements $LootItemFunction$Builder {
}
}

declare module "net.minecraft.world.level.storage.loot.predicates.LootItemCondition" {
import { $List$$Type } from "java.util.List"
import { $ValidationContext$$Type } from "net.minecraft.world.level.storage.loot.ValidationContext"
import { $LootContext, $LootContext$$Type } from "net.minecraft.world.level.storage.loot.LootContext"
import { $ILootCondition } from "com.almostreliable.lootjs.core.ILootCondition"
import { $LootItemConditionType } from "net.minecraft.world.level.storage.loot.predicates.LootItemConditionType"
import { $Predicate, $Predicate$$Type } from "java.util.function.Predicate"
import { $Set } from "java.util.Set"
import { $LootContextParam } from "net.minecraft.world.level.storage.loot.parameters.LootContextParam"
import { $ItemStack$$Type } from "net.minecraft.world.item.ItemStack"
import { $LootItemConditionMixin } from "com.almostreliable.lootjs.mixin.LootItemConditionMixin"
import { $LootContextUser } from "net.minecraft.world.level.storage.loot.LootContextUser"

export interface $LootItemCondition extends $LootContextUser, $Predicate<$LootContext>, $ILootCondition, $LootItemConditionMixin {
"and"(predicate0: $Predicate$$Type<$LootContext$$Type>): $Predicate<$LootContext>
"applyLootHandler"(context: $LootContext$$Type, loot: $List$$Type<$ItemStack$$Type>): boolean
"getReferencedContextParams"(): $Set<$LootContextParam<any>>
"getType"(): $LootItemConditionType
"negate"(): $Predicate<$LootContext>
"or"(predicate0: $Predicate$$Type<$LootContext$$Type>): $Predicate<$LootContext>
"test"(lootContext0: $LootContext$$Type): boolean
"validate"(validationContext0: $ValidationContext$$Type): void
get "referencedContextParams"(): $Set<$LootContextParam<any>>
get "type"(): $LootItemConditionType
}

export namespace $LootItemCondition {
function isEqual<T>(object0: any): $Predicate<T>
function not<T>(predicate0: $Predicate$$Type<T>): $Predicate<T>
}
export abstract class $LootItemCondition$$Static implements $LootItemCondition {
static "isEqual"<T>(object0: any): $Predicate<T>
static "not"<T>(predicate0: $Predicate$$Type<T>): $Predicate<T>
}
}

declare module "net.minecraft.world.level.storage.LevelSummary$BackupStatus" {
import { $Enum } from "java.lang.Enum"

export class $LevelSummary$BackupStatus extends $Enum<$LevelSummary$BackupStatus> {
static readonly "DOWNGRADE": $LevelSummary$BackupStatus
static readonly "NONE": $LevelSummary$BackupStatus
static readonly "UPGRADE_TO_SNAPSHOT": $LevelSummary$BackupStatus

public "getTranslationKey"(): string
public "isSevere"(): boolean
public "shouldBackup"(): boolean
public static "valueOf"(string0: string): $LevelSummary$BackupStatus
public static "values"(): $LevelSummary$BackupStatus[]
get "translationKey"(): string
get "severe"(): boolean
}
}

declare module "net.minecraft.world.level.storage.loot.functions.FunctionUserBuilder" {
import { $LootItemFunction$Builder, $LootItemFunction$Builder$$Type } from "net.minecraft.world.level.storage.loot.functions.LootItemFunction$Builder"
import { $Function$$Type } from "java.util.function.Function"
import { $Iterable$$Type } from "java.lang.Iterable"

export interface $FunctionUserBuilder<T extends $FunctionUserBuilder<T> = $FunctionUserBuilder<T>> {
"apply"<E>(iterable0: $Iterable$$Type<E>, function1: $Function$$Type<E, $LootItemFunction$Builder>): T
"apply"<E>(e0s: E[], function1: $Function$$Type<E, $LootItemFunction$Builder>): T
"apply"(builder0: $LootItemFunction$Builder$$Type): T
"unwrap"(): T
}

export namespace $FunctionUserBuilder {
const probejs$$marker: never
}
export abstract class $FunctionUserBuilder$$Static<T extends $FunctionUserBuilder<T> = $FunctionUserBuilder<T>> implements $FunctionUserBuilder<T> {
}
}

declare module "net.minecraft.world.level.storage.LevelStorageSource" {
import { $List } from "java.util.List"
import { $LevelSummary } from "net.minecraft.world.level.storage.LevelSummary"
import { $LevelStorageSource$LevelCandidates, $LevelStorageSource$LevelCandidates$$Type } from "net.minecraft.world.level.storage.LevelStorageSource$LevelCandidates"
import { $CompletableFuture } from "java.util.concurrent.CompletableFuture"
import { $DirectoryValidator, $DirectoryValidator$$Type } from "net.minecraft.world.level.validation.DirectoryValidator"
import { $Path, $Path$$Type } from "java.nio.file.Path"
import { $DataFixer$$Type } from "com.mojang.datafixers.DataFixer"
import { $LevelStorageSource$LevelStorageAccess } from "net.minecraft.world.level.storage.LevelStorageSource$LevelStorageAccess"

export class $LevelStorageSource {
static readonly "ALLOWED_SYMLINKS_CONFIG_NAME": string

constructor(path0: $Path$$Type, path1: $Path$$Type, directoryValidator2: $DirectoryValidator$$Type, dataFixer3: $DataFixer$$Type)

public "createAccess"(string0: string): $LevelStorageSource$LevelStorageAccess
public static "createDefault"(path0: $Path$$Type): $LevelStorageSource
public "findLevelCandidates"(): $LevelStorageSource$LevelCandidates
public "getBackupPath"(): $Path
public "getBaseDir"(): $Path
public "getName"(): string
public "getWorldDirValidator"(): $DirectoryValidator
public "isNewLevelIdAcceptable"(string0: string): boolean
public "levelExists"(string0: string): boolean
public "loadLevelSummaries"(levelCandidates0: $LevelStorageSource$LevelCandidates$$Type): $CompletableFuture<$List<$LevelSummary>>
public static "parseValidator"(path0: $Path$$Type): $DirectoryValidator
public "validateAndCreateAccess"(string0: string): $LevelStorageSource$LevelStorageAccess
get "backupPath"(): $Path
get "baseDir"(): $Path
get "name"(): string
get "worldDirValidator"(): $DirectoryValidator
}
}

declare module "net.minecraft.world.level.storage.loot.LootDataManager" {
import { $ResourceLocation, $ResourceLocation$$Type } from "net.minecraft.resources.ResourceLocation"
import { $ProfilerFiller$$Type } from "net.minecraft.util.profiling.ProfilerFiller"
import { $Executor$$Type } from "java.util.concurrent.Executor"
import { $Collection } from "java.util.Collection"
import { $ResourceManager$$Type } from "net.minecraft.server.packs.resources.ResourceManager"
import { $LootItemCondition, $LootItemCondition$$Type } from "net.minecraft.world.level.storage.loot.predicates.LootItemCondition"
import { $CompletableFuture } from "java.util.concurrent.CompletableFuture"
import { $PreparableReloadListener$PreparationBarrier$$Type } from "net.minecraft.server.packs.resources.PreparableReloadListener$PreparationBarrier"
import { $JsonElement$$Type } from "com.google.gson.JsonElement"
import { $CallbackInfo$$Type } from "org.spongepowered.asm.mixin.injection.callback.CallbackInfo"
import { $LootItemFunction, $LootItemFunction$$Type } from "net.minecraft.world.level.storage.loot.functions.LootItemFunction"
import { $LootDataResolver } from "net.minecraft.world.level.storage.loot.LootDataResolver"
import { $Map$$Type } from "java.util.Map"
import { $LootTablesKJS } from "dev.latvian.mods.kubejs.core.LootTablesKJS"
import { $Optional } from "java.util.Optional"
import { $PreparableReloadListener } from "net.minecraft.server.packs.resources.PreparableReloadListener"
import { $LootDataId, $LootDataId$$Type } from "net.minecraft.world.level.storage.loot.LootDataId"
import { $LootTable } from "net.minecraft.world.level.storage.loot.LootTable"
import { $LootDataType$$Type } from "net.minecraft.world.level.storage.loot.LootDataType"

export class $LootDataManager implements $PreparableReloadListener, $LootDataResolver, $LootTablesKJS {
static readonly "EMPTY_LOOT_TABLE_KEY": $LootDataId<$LootTable>

constructor()

public static "createComposite"(lootItemCondition0s: $LootItemCondition$$Type[]): $LootItemCondition
public static "createComposite"(lootItemFunction0s: $LootItemFunction$$Type[]): $LootItemFunction
public "getElement"<T>(lootDataId0: $LootDataId$$Type<T>): T
public "getElement"<T>(lootDataType0: $LootDataType$$Type<T>, resourceLocation1: $ResourceLocation$$Type): T
public "getElementOptional"<T>(lootDataType0: $LootDataType$$Type<T>, resourceLocation1: $ResourceLocation$$Type): $Optional<T>
public "getElementOptional"<T>(lootDataId0: $LootDataId$$Type<T>): $Optional<T>
public "getKeys"(lootDataType0: $LootDataType$$Type<any>): $Collection<$ResourceLocation>
public "getLootTable"(resourceLocation0: $ResourceLocation$$Type): $LootTable
public "getName"(): string
public "handler$gcg000$gtceu$injectLootTables"(map0: $Map$$Type, callbackInfo1: $CallbackInfo$$Type): void
public "kjs$completeReload"(parsedMap: $Map$$Type<$LootDataType$$Type<any>, $Map$$Type<$ResourceLocation$$Type, any>>, elements: $Map$$Type<$LootDataId$$Type<any>, any>): void
public static "kjs$postLootEvents"(map: $Map$$Type<$ResourceLocation$$Type, $JsonElement$$Type>): void
public "reload"(preparationBarrier0: $PreparableReloadListener$PreparationBarrier$$Type, resourceManager1: $ResourceManager$$Type, profilerFiller2: $ProfilerFiller$$Type, profilerFiller3: $ProfilerFiller$$Type, executor4: $Executor$$Type, executor5: $Executor$$Type): $CompletableFuture<void>
get "name"(): string
}
}

declare module "net.minecraft.world.level.storage.loot.LootContext" {
import { $ResourceLocation, $ResourceLocation$$Type } from "net.minecraft.resources.ResourceLocation"
import { $LootParams$$Type } from "net.minecraft.world.level.storage.loot.LootParams"
import { $INoMapContext } from "com.lootintegrations.loot.INoMapContext"
import { $LootItemCondition, $LootItemCondition$$Type } from "net.minecraft.world.level.storage.loot.predicates.LootItemCondition"
import { $RandomSource, $RandomSource$$Type } from "net.minecraft.util.RandomSource"
import { $ServerLevel } from "net.minecraft.server.level.ServerLevel"
import { $Consumer$$Type } from "java.util.function.Consumer"
import { $LootItemFunction, $LootItemFunction$$Type } from "net.minecraft.world.level.storage.loot.functions.LootItemFunction"
import { $LootDataResolver, $LootDataResolver$$Type } from "net.minecraft.world.level.storage.loot.LootDataResolver"
import { $LootContextAccessor } from "com.craisinlord.integrated_api.mixins.resources.LootContextAccessor"
import { $LootContext$VisitedEntry, $LootContext$VisitedEntry$$Type } from "net.minecraft.world.level.storage.loot.LootContext$VisitedEntry"
import { $LootContextParam$$Type } from "net.minecraft.world.level.storage.loot.parameters.LootContextParam"
import { $LootTable, $LootTable$$Type } from "net.minecraft.world.level.storage.loot.LootTable"
import { $ItemStack$$Type } from "net.minecraft.world.item.ItemStack"

export class $LootContext implements $LootContextAccessor, $INoMapContext {
constructor(lootParams0: $LootParams$$Type, randomSource1: $RandomSource$$Type, lootDataResolver2: $LootDataResolver$$Type)

public "addDynamicDrops"(resourceLocation0: $ResourceLocation$$Type, consumer1: $Consumer$$Type<$ItemStack$$Type>): void
public "areMapsDisabled"(): boolean
public static "createVisitedEntry"(lootItemCondition0: $LootItemCondition$$Type): $LootContext$VisitedEntry<$LootItemCondition>
public static "createVisitedEntry"(lootTable0: $LootTable$$Type): $LootContext$VisitedEntry<$LootTable>
public static "createVisitedEntry"(lootItemFunction0: $LootItemFunction$$Type): $LootContext$VisitedEntry<$LootItemFunction>
public "disabledMaps"(): void
public "getLevel"(): $ServerLevel
public "getLootingModifier"(): integer
public "getLuck"(): float
public "getParam"<T>(lootContextParam0: $LootContextParam$$Type<T>): T
public "getParamOrNull"<T>(lootContextParam0: $LootContextParam$$Type<T>): T
public "getQueriedLootTableId"(): $ResourceLocation
public "getRandom"(): $RandomSource
public "getResolver"(): $LootDataResolver
public "hasParam"(lootContextParam0: $LootContextParam$$Type<any>): boolean
public "hasVisitedElement"(visitedEntry0: $LootContext$VisitedEntry$$Type<any>): boolean
public "popVisitedElement"(visitedEntry0: $LootContext$VisitedEntry$$Type<any>): void
public "pushVisitedElement"(visitedEntry0: $LootContext$VisitedEntry$$Type<any>): boolean
public "setQueriedLootTableId"(resourceLocation0: $ResourceLocation$$Type): void
get "level"(): $ServerLevel
get "lootingModifier"(): integer
get "luck"(): float
get "queriedLootTableId"(): $ResourceLocation
get "random"(): $RandomSource
get "resolver"(): $LootDataResolver
set "queriedLootTableId"(value: $ResourceLocation$$Type)
}
}

declare module "net.minecraft.world.level.storage.PlayerDataStorage" {
import { $CompoundTag } from "net.minecraft.nbt.CompoundTag"
import { $DataFixer$$Type } from "com.mojang.datafixers.DataFixer"
import { $File } from "java.io.File"
import { $LevelStorageSource$LevelStorageAccess$$Type } from "net.minecraft.world.level.storage.LevelStorageSource$LevelStorageAccess"
import { $Player$$Type } from "net.minecraft.world.entity.player.Player"

export class $PlayerDataStorage {
constructor(levelStorageAccess0: $LevelStorageSource$LevelStorageAccess$$Type, dataFixer1: $DataFixer$$Type)

public "getPlayerDataFolder"(): $File
public "getSeenPlayers"(): string[]
public "load"(player0: $Player$$Type): $CompoundTag
public "save"(player0: $Player$$Type): void
get "playerDataFolder"(): $File
get "seenPlayers"(): string[]
}
}

declare module "net.minecraft.world.level.storage.WorldData" {
import { $CrashReportCategory$$Type } from "net.minecraft.CrashReportCategory"
import { $GameRules } from "net.minecraft.world.level.GameRules"
import { $Set } from "java.util.Set"
import { $EndDragonFight$Data, $EndDragonFight$Data$$Type } from "net.minecraft.world.level.dimension.end.EndDragonFight$Data"
import { $ServerLevelData } from "net.minecraft.world.level.storage.ServerLevelData"
import { $Lifecycle } from "com.mojang.serialization.Lifecycle"
import { $RegistryAccess$$Type } from "net.minecraft.core.RegistryAccess"
import { $FeatureFlagSet } from "net.minecraft.world.flag.FeatureFlagSet"
import { $LevelSettings } from "net.minecraft.world.level.LevelSettings"
import { $WorldOptions } from "net.minecraft.world.level.levelgen.WorldOptions"
import { $CompoundTag, $CompoundTag$$Type } from "net.minecraft.nbt.CompoundTag"
import { $WorldDataConfiguration, $WorldDataConfiguration$$Type } from "net.minecraft.world.level.WorldDataConfiguration"
import { $GameType, $GameType$$Type } from "net.minecraft.world.level.GameType"
import { $Difficulty, $Difficulty$$Type } from "net.minecraft.world.Difficulty"

export interface $WorldData {
"createTag"(registryAccess0: $RegistryAccess$$Type, compoundTag1: $CompoundTag$$Type): $CompoundTag
"enabledFeatures"(): $FeatureFlagSet
"endDragonFightData"(): $EndDragonFight$Data
"fillCrashReportCategory"(crashReportCategory0: $CrashReportCategory$$Type): void
"getAllowCommands"(): boolean
"getCustomBossEvents"(): $CompoundTag
"getDataConfiguration"(): $WorldDataConfiguration
"getDifficulty"(): $Difficulty
"getGameRules"(): $GameRules
"getGameType"(): $GameType
"getKnownServerBrands"(): $Set<string>
"getLevelName"(): string
"getLevelSettings"(): $LevelSettings
"getLoadedPlayerTag"(): $CompoundTag
"getRemovedFeatureFlags"(): $Set<string>
"getStorageVersionName"(int0: integer): string
"getVersion"(): integer
"isDebugWorld"(): boolean
"isDifficultyLocked"(): boolean
"isFlatWorld"(): boolean
"isHardcore"(): boolean
"overworldData"(): $ServerLevelData
"setCustomBossEvents"(compoundTag0: $CompoundTag$$Type): void
"setDataConfiguration"(worldDataConfiguration0: $WorldDataConfiguration$$Type): void
"setDifficulty"(difficulty0: $Difficulty$$Type): void
"setDifficultyLocked"(boolean0: boolean): void
"setEndDragonFightData"(data0: $EndDragonFight$Data$$Type): void
"setGameType"(gameType0: $GameType$$Type): void
"setModdedInfo"(string0: string, boolean1: boolean): void
"wasModded"(): boolean
"worldGenOptions"(): $WorldOptions
"worldGenSettingsLifecycle"(): $Lifecycle
get "allowCommands"(): boolean
get "customBossEvents"(): $CompoundTag
get "dataConfiguration"(): $WorldDataConfiguration
get "difficulty"(): $Difficulty
get "gameRules"(): $GameRules
get "gameType"(): $GameType
get "knownServerBrands"(): $Set<string>
get "levelName"(): string
get "levelSettings"(): $LevelSettings
get "loadedPlayerTag"(): $CompoundTag
get "removedFeatureFlags"(): $Set<string>
get "version"(): integer
get "debugWorld"(): boolean
get "difficultyLocked"(): boolean
get "flatWorld"(): boolean
get "hardcore"(): boolean
set "customBossEvents"(value: $CompoundTag$$Type)
set "dataConfiguration"(value: $WorldDataConfiguration$$Type)
set "difficulty"(value: $Difficulty$$Type)
set "difficultyLocked"(value: boolean)
set "gameType"(value: $GameType$$Type)
}

export namespace $WorldData {
const ANVIL_VERSION_ID: integer
const MCREGION_VERSION_ID: integer
}
export abstract class $WorldData$$Static implements $WorldData {
static readonly "ANVIL_VERSION_ID": integer
static readonly "MCREGION_VERSION_ID": integer

}
}

declare module "net.minecraft.world.level.storage.loot.entries.LootPoolEntryContainer" {
import { $Consumer$$Type } from "java.util.function.Consumer"
import { $LootPoolEntryType } from "net.minecraft.world.level.storage.loot.entries.LootPoolEntryType"
import { $LootPoolEntry$$Type } from "net.minecraft.world.level.storage.loot.entries.LootPoolEntry"
import { $ValidationContext$$Type } from "net.minecraft.world.level.storage.loot.ValidationContext"
import { $ComposableEntryContainer, $ComposableEntryContainer$$Type } from "net.minecraft.world.level.storage.loot.entries.ComposableEntryContainer"
import { $LootContext$$Type } from "net.minecraft.world.level.storage.loot.LootContext"
import { $LootItemCondition } from "net.minecraft.world.level.storage.loot.predicates.LootItemCondition"

export class $LootPoolEntryContainer implements $ComposableEntryContainer {
readonly "conditions": $LootItemCondition[]

public "and"(composableEntryContainer0: $ComposableEntryContainer$$Type): $ComposableEntryContainer
public "expand"(lootContext0: $LootContext$$Type, consumer1: $Consumer$$Type<$LootPoolEntry$$Type>): boolean
public "getType"(): $LootPoolEntryType
public "or"(composableEntryContainer0: $ComposableEntryContainer$$Type): $ComposableEntryContainer
public "validate"(validationContext0: $ValidationContext$$Type): void
get "type"(): $LootPoolEntryType
}
}

