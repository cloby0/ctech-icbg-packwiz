declare module "com.legacy.structure_gel.api.events.RegisterArmorTrimTexturesEvent" {
import { $ResourceLocation$$Type } from "net.minecraft.resources.ResourceLocation"
import { $ArmorMaterial$$Type } from "net.minecraft.world.item.ArmorMaterial"
import { $IModBusEvent } from "net.minecraftforge.fml.event.IModBusEvent"
import { $Map$$Type } from "java.util.Map"
import { $Set$$Type } from "java.util.Set"
import { $Event } from "net.minecraftforge.eventbus.api.Event"
import { $TrimMaterial, $TrimMaterial$$Type } from "net.minecraft.world.item.armortrim.TrimMaterial"
import { $ResourceKey$$Type } from "net.minecraft.resources.ResourceKey"
import { $TrimPattern } from "net.minecraft.world.item.armortrim.TrimPattern"

export class $RegisterArmorTrimTexturesEvent extends $Event implements $IModBusEvent {
constructor()
/** @deprecated */
constructor(set0: $Set$$Type<$ResourceLocation$$Type>, map1: $Map$$Type<string, $ResourceLocation$$Type>, map2: $Map$$Type<$ResourceKey$$Type<$TrimMaterial$$Type>, $Map$$Type<$ArmorMaterial$$Type, string>>, map3: $Map$$Type<$ResourceKey$$Type<$TrimMaterial$$Type>, integer>)
constructor(set0: $Set$$Type<$ResourceLocation$$Type>, set1: $Set$$Type<$ResourceLocation$$Type>, map2: $Map$$Type<string, $ResourceLocation$$Type>, map3: $Map$$Type<$ResourceKey$$Type<$TrimMaterial$$Type>, $Map$$Type<$ArmorMaterial$$Type, string>>, map4: $Map$$Type<$ResourceKey$$Type<$TrimMaterial$$Type>, integer>)

public "registerMaterialBrightness"(resourceKey0: $ResourceKey$$Type<$TrimMaterial>, int1: integer): void
public "registerMaterialSprite"(resourceKey0: $ResourceKey$$Type<$TrimMaterial>, boolean1: boolean): void
public "registerMaterialSprite"(string0: string, resourceLocation1: $ResourceLocation$$Type, boolean2: boolean): void
public "registerPaletteOverride"(resourceKey0: $ResourceKey$$Type<$TrimMaterial>, map1: $Map$$Type<$ArmorMaterial$$Type, string>): void
public "registerPatternSprite"(resourceLocation0: $ResourceLocation$$Type): void
public "registerPatternSprite"(resourceKey0: $ResourceKey$$Type<$TrimPattern>): void
public "registerSprite"(resourceLocation0: $ResourceLocation$$Type): void
}
}

declare module "com.legacy.structure_gel.api.structure.jigsaw.IPieceFactory$Context" {
import { $Rotation, $Rotation$$Type } from "net.minecraft.world.level.block.Rotation"
import { $JigsawCapability$IJigsawCapability, $JigsawCapability$IJigsawCapability$$Type } from "com.legacy.structure_gel.api.structure.jigsaw.JigsawCapability$IJigsawCapability"
import { $StructureTemplateManager, $StructureTemplateManager$$Type } from "net.minecraft.world.level.levelgen.structure.templatesystem.StructureTemplateManager"
import { $BlockPos, $BlockPos$$Type } from "net.minecraft.core.BlockPos"
import { $BoundingBox, $BoundingBox$$Type } from "net.minecraft.world.level.levelgen.structure.BoundingBox"
import { $Optional, $Optional$$Type } from "java.util.Optional"
import { $Class$$Type } from "java.lang.Class"
import { $Record } from "java.lang.Record"
import { $StructurePoolElement, $StructurePoolElement$$Type } from "net.minecraft.world.level.levelgen.structure.pools.StructurePoolElement"

export class $IPieceFactory$Context extends $Record {
constructor(structureManager: $StructureTemplateManager$$Type, poolElement: $StructurePoolElement$$Type, pos: $BlockPos$$Type, groundLevelDelta: integer, rotation: $Rotation$$Type, bounds: $BoundingBox$$Type, jigsawCapability: $Optional$$Type<$JigsawCapability$IJigsawCapability$$Type>)

public "bounds"(): $BoundingBox
public "groundLevelDelta"(): integer
public "jigsawCapability"(): $Optional<$JigsawCapability$IJigsawCapability>
public "jigsawCapability"<T extends $JigsawCapability$IJigsawCapability>(class0: $Class$$Type<T>): $Optional<T>
public "poolElement"(): $StructurePoolElement
public "pos"(): $BlockPos
public "rotation"(): $Rotation
public "structureManager"(): $StructureTemplateManager
}
}

declare module "com.legacy.structure_gel.api.data_handler.handlers.DataHandler" {
import { $DataMap$$Type } from "com.legacy.structure_gel.api.data_handler.parsing.DataMap"
import { $Direction$$Type } from "net.minecraft.core.Direction"
import { $BlockState$$Type } from "net.minecraft.world.level.block.state.BlockState"
import { $RandomSource$$Type } from "net.minecraft.util.RandomSource"
import { $CompoundTag$$Type } from "net.minecraft.nbt.CompoundTag"
import { $WorldGenLevel$$Type } from "net.minecraft.world.level.WorldGenLevel"
import { $Vec3, $Vec3$$Type } from "net.minecraft.world.phys.Vec3"
import { $Mirror$$Type } from "net.minecraft.world.level.block.Mirror"
import { $DataHandler$Context$$Type } from "com.legacy.structure_gel.api.data_handler.handlers.DataHandler$Context"
import { $BlockPos$$Type } from "net.minecraft.core.BlockPos"
import { $BoundingBox$$Type } from "net.minecraft.world.level.levelgen.structure.BoundingBox"
import { $StructurePiece$$Type } from "net.minecraft.world.level.levelgen.structure.StructurePiece"

export class $DataHandler<T extends $DataHandler<T> = $DataHandler<T>> {
constructor(dataMap0: $DataMap$$Type)

public static "offsetPosition"(vec30: $Vec3$$Type, direction1: $Direction$$Type, mirror2: $Mirror$$Type): $Vec3
public "process"(context0: $DataHandler$Context$$Type, boolean1: boolean): void
public static "process"(blockState0: $BlockState$$Type, compoundTag1: $CompoundTag$$Type, blockPos2: $BlockPos$$Type, worldGenLevel3: $WorldGenLevel$$Type, randomSource4: $RandomSource$$Type, boundingBox5: $BoundingBox$$Type, structurePiece6: $StructurePiece$$Type, boolean7: boolean): void
}
}

declare module "com.legacy.structure_gel.api.registry.SGSimpleRegistry" {
import { $ResourceLocation, $ResourceLocation$$Type } from "net.minecraft.resources.ResourceLocation"
import { $BiMap } from "com.google.common.collect.BiMap"
import { $Map$Entry } from "java.util.Map$Entry"
import { $Stream } from "java.util.stream.Stream"
import { $BiConsumer$$Type } from "java.util.function.BiConsumer"
import { $Event } from "net.minecraftforge.eventbus.api.Event"
import { $Set } from "java.util.Set"
import { $Supplier$$Type } from "java.util.function.Supplier"

export class $SGSimpleRegistry<K = any, V = any> {
constructor(resourceLocation0: $ResourceLocation$$Type, supplier1: $Supplier$$Type<V>, supplier2: $Supplier$$Type<$Event>)

public "containsKey"(k0: K): boolean
public "containsValue"(v0: V): boolean
public "forEach"(biConsumer0: $BiConsumer$$Type<K, V>): void
public "get"(k0: K, v1: V): V
public "get"(k0: K): V
public "getDefaultValue"(): V
public "getKey"(v0: V): K
public "getKey"(v0: V, k1: K): K
public "getKeys"(): $Set<K>
public "getRegistry"(): $BiMap<K, V>
public "getRegistryName"(): $ResourceLocation
public "getValues"(): $Set<V>
public "init"(): void
public "register"<O extends V>(k0: K, o1: O): O
public "stream"(): $Stream<$Map$Entry<K, V>>
get "defaultValue"(): V
get "keys"(): $Set<K>
get "registry"(): $BiMap<K, V>
get "registryName"(): $ResourceLocation
get "values"(): $Set<V>
}
}

declare module "com.legacy.structure_gel.api.structure.base.IModifyState" {
import { $ServerLevelAccessor$$Type } from "net.minecraft.world.level.ServerLevelAccessor"
import { $BlockPos$$Type } from "net.minecraft.core.BlockPos"
import { $BlockState, $BlockState$$Type } from "net.minecraft.world.level.block.state.BlockState"
import { $RandomSource$$Type } from "net.minecraft.util.RandomSource"

export interface $IModifyState {
"modifyState"(serverLevelAccessor0: $ServerLevelAccessor$$Type, randomSource1: $RandomSource$$Type, blockPos2: $BlockPos$$Type, blockState3: $BlockState$$Type): $BlockState
}

export namespace $IModifyState {
const NOOP: $IModifyState
function mergeStates(blockState0: $BlockState$$Type, blockState1: $BlockState$$Type): $BlockState
}
export abstract class $IModifyState$$Static implements $IModifyState {
static readonly "NOOP": $IModifyState

static "mergeStates"(blockState0: $BlockState$$Type, blockState1: $BlockState$$Type): $BlockState
}
}

declare module "com.legacy.structure_gel.api.events.RegisterDataHandlerTypeEvent" {
import { $DataHandlerType, $DataHandlerType$$Type } from "com.legacy.structure_gel.api.data_handler.DataHandlerType"
import { $IModBusEvent } from "net.minecraftforge.fml.event.IModBusEvent"
import { $Event } from "net.minecraftforge.eventbus.api.Event"
import { $DataHandler, $DataHandler$$Type } from "com.legacy.structure_gel.api.data_handler.handlers.DataHandler"

/** @deprecated */
export class $RegisterDataHandlerTypeEvent extends $Event implements $IModBusEvent {
constructor()

/** @deprecated */
public "register"<T extends $DataHandler<T>>(dataHandlerType0: $DataHandlerType$$Type<T>): $DataHandlerType<T>
}
}

declare module "com.legacy.structure_gel.core.data_handler.handlers.ArchaeologyHandler" {
import { $DataMap$$Type } from "com.legacy.structure_gel.api.data_handler.parsing.DataMap"
import { $ProbabilityDataHandler } from "com.legacy.structure_gel.api.data_handler.handlers.ProbabilityDataHandler"
import { $DataParser } from "com.legacy.structure_gel.api.data_handler.parsing.DataParser"

export class $ArchaeologyHandler extends $ProbabilityDataHandler<$ArchaeologyHandler> {
constructor(dataMap0: $DataMap$$Type)

public static "parser"(): $DataParser
}
}

declare module "com.legacy.structure_gel.core.mixin.DimensionDataStorageAccessor" {
import { $Map } from "java.util.Map"
import { $SavedData } from "net.minecraft.world.level.saveddata.SavedData"

export interface $DimensionDataStorageAccessor {
"structure_gel$getCache"(): $Map<string, $SavedData>
}

export namespace $DimensionDataStorageAccessor {
const probejs$$marker: never
}
export abstract class $DimensionDataStorageAccessor$$Static implements $DimensionDataStorageAccessor {
}
}

declare module "com.legacy.structure_gel.core.capability.misc.StructureSettingsData" {
import { $IModifyState, $IModifyState$$Type } from "com.legacy.structure_gel.api.structure.base.IModifyState"

export interface $StructureSettingsData {
"structure_gel$getStateModifier"(): $IModifyState
"structure_gel$isNatural"(): boolean
"structure_gel$setNatural"(boolean0: boolean): void
"structure_gel$setStateModifier"(iModifyState0: $IModifyState$$Type): void
}

export namespace $StructureSettingsData {
const probejs$$marker: never
}
export abstract class $StructureSettingsData$$Static implements $StructureSettingsData {
}
}

declare module "com.legacy.structure_gel.api.data_handler.handlers.ProbabilityDataHandler" {
import { $DataMap$$Type } from "com.legacy.structure_gel.api.data_handler.parsing.DataMap"
import { $DataHandler } from "com.legacy.structure_gel.api.data_handler.handlers.DataHandler"

export class $ProbabilityDataHandler<T extends $ProbabilityDataHandler<T> = $ProbabilityDataHandler<T>> extends $DataHandler<T> {
constructor(dataMap0: $DataMap$$Type, string1: string)

}
}

declare module "com.legacy.structure_gel.core.data_handler.handlers.VanillaSpawnerHandler" {
import { $DataMap$$Type } from "com.legacy.structure_gel.api.data_handler.parsing.DataMap"
import { $ProbabilityDataHandler } from "com.legacy.structure_gel.api.data_handler.handlers.ProbabilityDataHandler"
import { $DataParser } from "com.legacy.structure_gel.api.data_handler.parsing.DataParser"

export class $VanillaSpawnerHandler extends $ProbabilityDataHandler<$VanillaSpawnerHandler> {
constructor(dataMap0: $DataMap$$Type)

public static "parser"(): $DataParser
}
}

declare module "com.legacy.structure_gel.api.events.RegisterDynamicSpawnerEvent" {
import { $DynamicSpawnerType, $DynamicSpawnerType$$Type } from "com.legacy.structure_gel.api.dynamic_spawner.DynamicSpawnerType"
import { $IModBusEvent } from "net.minecraftforge.fml.event.IModBusEvent"
import { $Event } from "net.minecraftforge.eventbus.api.Event"

/** @deprecated */
export class $RegisterDynamicSpawnerEvent extends $Event implements $IModBusEvent {
constructor()

/** @deprecated */
public "register"(dynamicSpawnerType0: $DynamicSpawnerType$$Type): $DynamicSpawnerType
}
}

declare module "com.legacy.structure_gel.api.data_handler.parsing.DataMap" {
import { $Registry } from "net.minecraft.core.Registry"
import { $Map, $Map$$Type } from "java.util.Map"
import { $Class$$Type } from "java.lang.Class"
import { $ResourceKey, $ResourceKey$$Type } from "net.minecraft.resources.ResourceKey"

export class $DataMap {
constructor(map0: $Map$$Type<string, any>)

public "get"<T>(string0: string, class1: $Class$$Type<T>): T
public "get"<T>(string0: string, resourceKey1: $ResourceKey$$Type<$Registry<T>>): $ResourceKey<T>
public "getBoolean"(string0: string): boolean
public "getByte"(string0: string): byte
public "getData"(): $Map<string, any>
public "getDouble"(string0: string): double
public "getFloat"(string0: string): float
public "getInt"(string0: string): integer
public "getShort"(string0: string): short
get "data"(): $Map<string, any>
set "data"(value: $Map$$Type<string, any>)
}
}

declare module "com.legacy.structure_gel.api.structure.jigsaw.IPieceFactory" {
import { $PoolElementStructurePiece } from "net.minecraft.world.level.levelgen.structure.PoolElementStructurePiece"
import { $IPieceFactory$Context$$Type } from "com.legacy.structure_gel.api.structure.jigsaw.IPieceFactory$Context"

export interface $IPieceFactory {
"create"(context0: $IPieceFactory$Context$$Type): $PoolElementStructurePiece
}

export namespace $IPieceFactory {
const VANILLA: $IPieceFactory
}
export abstract class $IPieceFactory$$Static implements $IPieceFactory {
static readonly "VANILLA": $IPieceFactory

}
}

declare module "com.legacy.structure_gel.api.dynamic_spawner.DynamicSpawnerType$SpawnerModifier" {
import { $BlockPos$$Type } from "net.minecraft.core.BlockPos"
import { $Level$$Type } from "net.minecraft.world.level.Level"
import { $SpawnerBlockEntity$$Type } from "net.minecraft.world.level.block.entity.SpawnerBlockEntity"

export interface $DynamicSpawnerType$SpawnerModifier {
"modify"(spawnerBlockEntity0: $SpawnerBlockEntity$$Type, level1: $Level$$Type, blockPos2: $BlockPos$$Type): void
}

export namespace $DynamicSpawnerType$SpawnerModifier {
const probejs$$marker: never
}
export abstract class $DynamicSpawnerType$SpawnerModifier$$Static implements $DynamicSpawnerType$SpawnerModifier {
}
}

declare module "com.legacy.structure_gel.api.data_handler.parsing.DataParser$ResourceKeyParser" {
import { $ResourceLocation$$Type } from "net.minecraft.resources.ResourceLocation"
import { $Registry } from "net.minecraft.core.Registry"
import { $Collection } from "java.util.Collection"
import { $DataParser$Parser } from "com.legacy.structure_gel.api.data_handler.parsing.DataParser$Parser"
import { $Function$$Type } from "java.util.function.Function"
import { $ResourceKey, $ResourceKey$$Type } from "net.minecraft.resources.ResourceKey"

export class $DataParser$ResourceKeyParser<T = any> extends $DataParser$Parser<$ResourceKey<T>> {
constructor(resourceLocation0: $ResourceLocation$$Type, string1: string, function2: $Function$$Type<string, $ResourceKey<T>>, resourceKey3: $ResourceKey$$Type<T>, resourceKey4: $ResourceKey$$Type<$Registry<T>>)

public "getRegistry"(): $ResourceKey<$Registry<T>>
public "getSuggestions"(): $Collection<$ResourceKey<T>>
get "registry"(): $ResourceKey<$Registry<T>>
get "suggestions"(): $Collection<$ResourceKey<T>>
}
}

declare module "com.legacy.structure_gel.api.data_handler.parsing.DataParser$Parser" {
import { $ResourceLocation$$Type } from "net.minecraft.resources.ResourceLocation"
import { $BiPredicate$$Type } from "java.util.function.BiPredicate"
import { $Predicate, $Predicate$$Type } from "java.util.function.Predicate"
import { $Collection } from "java.util.Collection"
import { $Class, $Class$$Type } from "java.lang.Class"
import { $Function, $Function$$Type } from "java.util.function.Function"
import { $Supplier$$Type } from "java.util.function.Supplier"

export class $DataParser$Parser<T = any> {
readonly "defaultVal": T
readonly "key": string
readonly "name": string
readonly "parseFunc": $Function<string, T>
readonly "type": $Class<T>
readonly "typeName": string
readonly "validator": $Predicate<string>

constructor(resourceLocation0: $ResourceLocation$$Type, string1: string, function2: $Function$$Type<string, T>, t3: T, class4: $Class$$Type<T>, string5: string, predicate6: $Predicate$$Type<string>)

public "getDefaultValName"(): string
public "getExample"(): string
public "getSuggestionToString"(): $Function<T, string>
public "getSuggestions"(): $Collection<T>
public "getTranlsationKey"(string0: string): string
public "parse"(string0: string): T
public "setDefaultValName"(string0: string): $DataParser$Parser<T>
public "setDefaultValName"(string0: string, biPredicate1: $BiPredicate$$Type<T, T>): $DataParser$Parser<T>
public "setExample"(string0: string): $DataParser$Parser<T>
public "setSuggestions"<S>(supplier0: $Supplier$$Type<$Collection<T>>, function1: $Function$$Type<T, string>): $DataParser$Parser<T>
get "defaultValName"(): string
get "example"(): string
get "suggestionToString"(): $Function<T, string>
get "suggestions"(): $Collection<T>
set "defaultValName"(value: string)
set "example"(value: string)
}
}

declare module "com.legacy.structure_gel.api.events.LoadStructureTemplateEvent" {
import { $ResourceLocation, $ResourceLocation$$Type } from "net.minecraft.resources.ResourceLocation"
import { $Predicate$$Type } from "java.util.function.Predicate"
import { $StructureTemplate$StructureEntityInfo, $StructureTemplate$StructureEntityInfo$$Type } from "net.minecraft.world.level.levelgen.structure.templatesystem.StructureTemplate$StructureEntityInfo"
import { $BlockState$$Type } from "net.minecraft.world.level.block.state.BlockState"
import { $Consumer$$Type } from "java.util.function.Consumer"
import { $List, $List$$Type } from "java.util.List"
import { $StructureTemplate$Palette, $StructureTemplate$Palette$$Type } from "net.minecraft.world.level.levelgen.structure.templatesystem.StructureTemplate$Palette"
import { $CompoundTag$$Type } from "net.minecraft.nbt.CompoundTag"
import { $StructureTemplate$StructureBlockInfo, $StructureTemplate$StructureBlockInfo$$Type } from "net.minecraft.world.level.levelgen.structure.templatesystem.StructureTemplate$StructureBlockInfo"
import { $Vec3$$Type } from "net.minecraft.world.phys.Vec3"
import { $BlockPos, $BlockPos$$Type } from "net.minecraft.core.BlockPos"
import { $Vec3i, $Vec3i$$Type } from "net.minecraft.core.Vec3i"
import { $Optional } from "java.util.Optional"
import { $Event } from "net.minecraftforge.eventbus.api.Event"
import { $JigsawBlockEntity$$Type } from "net.minecraft.world.level.block.entity.JigsawBlockEntity"

export class $LoadStructureTemplateEvent extends $Event {
constructor(resourceLocation0: $ResourceLocation$$Type, list1: $List$$Type<$StructureTemplate$Palette$$Type>, list2: $List$$Type<$StructureTemplate$StructureEntityInfo$$Type>, vec3i3: $Vec3i$$Type)
constructor()

public "addEntity"(vec30: $Vec3$$Type, blockPos1: $BlockPos$$Type, compoundTag2: $CompoundTag$$Type): void
public "addEntity"(structureEntityInfo0: $StructureTemplate$StructureEntityInfo$$Type): void
public "getBlock"(palette0: $StructureTemplate$Palette$$Type, blockPos1: $BlockPos$$Type): $Optional<$StructureTemplate$StructureBlockInfo>
public "getEntityInfoList"(): $List<$StructureTemplate$StructureEntityInfo>
public "getId"(): $ResourceLocation
public "getPalettes"(): $List<$StructureTemplate$Palette>
public "getSize"(): $Vec3i
public "hasBlock"(palette0: $StructureTemplate$Palette$$Type, blockPos1: $BlockPos$$Type, predicate2: $Predicate$$Type<$StructureTemplate$StructureBlockInfo$$Type>): boolean
public "isInBounds"(blockPos0: $BlockPos$$Type): boolean
public "moveInBounds"(blockPos0: $BlockPos$$Type): $BlockPos
public "setBlock"(blockPos0: $BlockPos$$Type, blockState1: $BlockState$$Type, compoundTag2: $CompoundTag$$Type): void
public "setBlock"(palette0: $StructureTemplate$Palette$$Type, blockPos1: $BlockPos$$Type, blockState2: $BlockState$$Type, compoundTag3: $CompoundTag$$Type): void
public "setBlock"(palette0: $StructureTemplate$Palette$$Type, structureBlockInfo1: $StructureTemplate$StructureBlockInfo$$Type): void
public "setJigsaw"(blockState0: $BlockState$$Type, blockPos1: $BlockPos$$Type, consumer2: $Consumer$$Type<$JigsawBlockEntity$$Type>): void
public "setJigsaw"(palette0: $StructureTemplate$Palette$$Type, blockState1: $BlockState$$Type, blockPos2: $BlockPos$$Type, consumer3: $Consumer$$Type<$JigsawBlockEntity$$Type>): void
get "entityInfoList"(): $List<$StructureTemplate$StructureEntityInfo>
get "id"(): $ResourceLocation
get "palettes"(): $List<$StructureTemplate$Palette>
get "size"(): $Vec3i
}
}

declare module "com.legacy.structure_gel.api.data_handler.handlers.DataHandler$Context" {
import { $WorldGenLevel } from "net.minecraft.world.level.WorldGenLevel"
import { $BlockPos } from "net.minecraft.core.BlockPos"
import { $Vec3 } from "net.minecraft.world.phys.Vec3"
import { $BoundingBox } from "net.minecraft.world.level.levelgen.structure.BoundingBox"
import { $BlockState } from "net.minecraft.world.level.block.state.BlockState"
import { $RandomSource } from "net.minecraft.util.RandomSource"
import { $StructurePiece } from "net.minecraft.world.level.levelgen.structure.StructurePiece"

export class $DataHandler$Context {
public "getBlockPos"(): $BlockPos
public "getBounds"(): $BoundingBox
public "getDataHandlerPos"(): $BlockPos
public "getDataHandlerState"(): $BlockState
public "getLevel"(): $WorldGenLevel
public "getPiece"(): $StructurePiece
public "getPos"(): $Vec3
public "getRandom"(): $RandomSource
get "blockPos"(): $BlockPos
get "bounds"(): $BoundingBox
get "dataHandlerPos"(): $BlockPos
get "dataHandlerState"(): $BlockState
get "level"(): $WorldGenLevel
get "piece"(): $StructurePiece
get "pos"(): $Vec3
get "random"(): $RandomSource
}
}

declare module "com.legacy.structure_gel.api.structure.ExtendedJigsawStructure$PlaceContext" {
import { $ResourceLocation, $ResourceLocation$$Type } from "net.minecraft.resources.ResourceLocation"
import { $JigsawCapability$IJigsawCapability, $JigsawCapability$IJigsawCapability$$Type } from "com.legacy.structure_gel.api.structure.jigsaw.JigsawCapability$IJigsawCapability"
import { $Holder, $Holder$$Type } from "net.minecraft.core.Holder"
import { $StructureTemplatePool, $StructureTemplatePool$$Type } from "net.minecraft.world.level.levelgen.structure.pools.StructureTemplatePool"
import { $Optional, $Optional$$Type } from "java.util.Optional"
import { $Record } from "java.lang.Record"
import { $Heightmap$Types, $Heightmap$Types$$Type } from "net.minecraft.world.level.levelgen.Heightmap$Types"

export class $ExtendedJigsawStructure$PlaceContext extends $Record {
constructor(startPool: $Holder$$Type<$StructureTemplatePool$$Type>, startJigsawName: $Optional$$Type<$ResourceLocation$$Type>, maxDepth: integer, useExpansionHack: boolean, projectStartToHeightmap: $Optional$$Type<$Heightmap$Types$$Type>, maxDistanceFromCenter: integer, capability: $Optional$$Type<$JigsawCapability$IJigsawCapability$$Type>)

public "capability"(): $Optional<$JigsawCapability$IJigsawCapability>
public "maxDepth"(): integer
public "maxDistanceFromCenter"(): integer
public "projectStartToHeightmap"(): $Optional<$Heightmap$Types>
public "startJigsawName"(): $Optional<$ResourceLocation>
public "startPool"(): $Holder<$StructureTemplatePool>
public "useExpansionHack"(): boolean
}
}

declare module "com.legacy.structure_gel.api.data_handler.parsing.DataParser$NumberParser" {
import { $ResourceLocation$$Type } from "net.minecraft.resources.ResourceLocation"
import { $BiPredicate$$Type } from "java.util.function.BiPredicate"
import { $Pair$$Type } from "org.apache.commons.lang3.tuple.Pair"
import { $DataParser$Parser } from "com.legacy.structure_gel.api.data_handler.parsing.DataParser$Parser"
import { $Class$$Type } from "java.lang.Class"
import { $Function$$Type } from "java.util.function.Function"

export class $DataParser$NumberParser<T extends number = number> extends $DataParser$Parser<T> {
constructor(resourceLocation0: $ResourceLocation$$Type, string1: string, function2: $Function$$Type<string, T>, t3: T, class4: $Class$$Type<T>, string5: string, t6: T, t7: T, biPredicate8: $BiPredicate$$Type<T, $Pair$$Type<T, T>>)

public "getMax"(): T
public "getMin"(): T
get "max"(): T
get "min"(): T
}
}

declare module "com.legacy.structure_gel.core.mixin.StructureTemplateAccessor" {
import { $List } from "java.util.List"
import { $StructureTemplate$Palette } from "net.minecraft.world.level.levelgen.structure.templatesystem.StructureTemplate$Palette"
import { $Vec3i } from "net.minecraft.core.Vec3i"
import { $StructureTemplate$StructureEntityInfo } from "net.minecraft.world.level.levelgen.structure.templatesystem.StructureTemplate$StructureEntityInfo"

export interface $StructureTemplateAccessor {
"getEntityInfoList"(): $List<$StructureTemplate$StructureEntityInfo>
"getPalettes"(): $List<$StructureTemplate$Palette>
"getSize"(): $Vec3i
get "entityInfoList"(): $List<$StructureTemplate$StructureEntityInfo>
get "palettes"(): $List<$StructureTemplate$Palette>
get "size"(): $Vec3i
}

export namespace $StructureTemplateAccessor {
const probejs$$marker: never
}
export abstract class $StructureTemplateAccessor$$Static implements $StructureTemplateAccessor {
}
}

declare module "com.legacy.structure_gel.core.data_handler.handlers.DynamicSpawnerHandler" {
import { $DataMap$$Type } from "com.legacy.structure_gel.api.data_handler.parsing.DataMap"
import { $ProbabilityDataHandler } from "com.legacy.structure_gel.api.data_handler.handlers.ProbabilityDataHandler"
import { $DataParser } from "com.legacy.structure_gel.api.data_handler.parsing.DataParser"

export class $DynamicSpawnerHandler extends $ProbabilityDataHandler<$DynamicSpawnerHandler> {
constructor(dataMap0: $DataMap$$Type)

public static "parser"(): $DataParser
}
}

declare module "com.legacy.structure_gel.core.data_handler.handlers.ConfiguredFeatureHandler" {
import { $DataMap$$Type } from "com.legacy.structure_gel.api.data_handler.parsing.DataMap"
import { $ProbabilityDataHandler } from "com.legacy.structure_gel.api.data_handler.handlers.ProbabilityDataHandler"
import { $DataParser } from "com.legacy.structure_gel.api.data_handler.parsing.DataParser"

export class $ConfiguredFeatureHandler extends $ProbabilityDataHandler<$ConfiguredFeatureHandler> {
constructor(dataMap0: $DataMap$$Type)

public static "parser"(): $DataParser
}
}

declare module "com.legacy.structure_gel.core.structure.jigsaw.SinglePoolElementExtension" {
import { $StructurePiece, $StructurePiece$$Type } from "net.minecraft.world.level.levelgen.structure.StructurePiece"

export interface $SinglePoolElementExtension {
"structure_gel$getPiece"(): $StructurePiece
"structure_gel$setPiece"(structurePiece0: $StructurePiece$$Type): void
}

export namespace $SinglePoolElementExtension {
const probejs$$marker: never
}
export abstract class $SinglePoolElementExtension$$Static implements $SinglePoolElementExtension {
}
}

declare module "com.legacy.structure_gel.api.structure.jigsaw.JigsawCapability$JigsawType" {
import { $ResourceLocation, $ResourceLocation$$Type } from "net.minecraft.resources.ResourceLocation"
import { $SGSimpleRegistry } from "com.legacy.structure_gel.api.registry.SGSimpleRegistry"
import { $JigsawCapability$IJigsawCapability, $JigsawCapability$IJigsawCapability$$Type } from "com.legacy.structure_gel.api.structure.jigsaw.JigsawCapability$IJigsawCapability"
import { $Codec } from "com.mojang.serialization.Codec"

export interface $JigsawCapability$JigsawType<A extends $JigsawCapability$IJigsawCapability = $JigsawCapability$IJigsawCapability> {
"getCodec"(): $Codec<A>
get "codec"(): $Codec<A>
}

export namespace $JigsawCapability$JigsawType {
const REGISTRY: $SGSimpleRegistry<$ResourceLocation, $JigsawCapability$JigsawType<any>>
const REGISTRY_CODEC: $Codec<$JigsawCapability$JigsawType<any>>
const VANILLA: $JigsawCapability$JigsawType<any>
function register<A extends $JigsawCapability$IJigsawCapability>(resourceLocation0: $ResourceLocation$$Type, jigsawType1: $JigsawCapability$JigsawType$$Type<A>): $JigsawCapability$JigsawType<A>
}
export abstract class $JigsawCapability$JigsawType$$Static<A extends $JigsawCapability$IJigsawCapability = $JigsawCapability$IJigsawCapability> implements $JigsawCapability$JigsawType<A> {
static readonly "REGISTRY": $SGSimpleRegistry<$ResourceLocation, $JigsawCapability$JigsawType<any>>
static readonly "REGISTRY_CODEC": $Codec<$JigsawCapability$JigsawType<any>>
static readonly "VANILLA": $JigsawCapability$JigsawType<any>

static "register"<A extends $JigsawCapability$IJigsawCapability>(resourceLocation0: $ResourceLocation$$Type, jigsawType1: $JigsawCapability$JigsawType$$Type<A>): $JigsawCapability$JigsawType<A>
}
}

declare module "com.legacy.structure_gel.api.events.RegisterJigsawCapabilityEvent" {
import { $ResourceLocation$$Type } from "net.minecraft.resources.ResourceLocation"
import { $JigsawCapability$IJigsawCapability, $JigsawCapability$IJigsawCapability$$Type } from "com.legacy.structure_gel.api.structure.jigsaw.JigsawCapability$IJigsawCapability"
import { $JigsawCapability$JigsawType, $JigsawCapability$JigsawType$$Type } from "com.legacy.structure_gel.api.structure.jigsaw.JigsawCapability$JigsawType"
import { $IModBusEvent } from "net.minecraftforge.fml.event.IModBusEvent"
import { $Event } from "net.minecraftforge.eventbus.api.Event"

/** @deprecated */
export class $RegisterJigsawCapabilityEvent extends $Event implements $IModBusEvent {
constructor()

/** @deprecated */
public "register"<A extends $JigsawCapability$IJigsawCapability>(resourceLocation0: $ResourceLocation$$Type, jigsawType1: $JigsawCapability$JigsawType$$Type<A>): $JigsawCapability$JigsawType<A>
}
}

declare module "com.legacy.structure_gel.core.dynamic_spawner.DynamicSpawner" {
import { $Cloneable } from "java.lang.Cloneable"
import { $BlockPos$$Type } from "net.minecraft.core.BlockPos"
import { $SpawnData$$Type } from "net.minecraft.world.level.SpawnData"
import { $BaseSpawner } from "net.minecraft.world.level.BaseSpawner"
import { $Level$$Type } from "net.minecraft.world.level.Level"

export class $DynamicSpawner extends $BaseSpawner implements $Cloneable {
constructor()

public "m_142667_"(level0: $Level$$Type, blockPos1: $BlockPos$$Type, spawnData2: $SpawnData$$Type): void
}
}

declare module "com.legacy.structure_gel.api.structure.jigsaw.JigsawCapability$IJigsawCapability" {
import { $Structure$GenerationContext$$Type } from "net.minecraft.world.level.levelgen.structure.Structure$GenerationContext"
import { $ExtendedJigsawStructure$PlaceContext$$Type } from "com.legacy.structure_gel.api.structure.ExtendedJigsawStructure$PlaceContext"
import { $IPieceFactory } from "com.legacy.structure_gel.api.structure.jigsaw.IPieceFactory"
import { $StructurePiecesBuilder$$Type } from "net.minecraft.world.level.levelgen.structure.pieces.StructurePiecesBuilder"
import { $BlockPos$$Type } from "net.minecraft.core.BlockPos"
import { $JigsawCapability$JigsawType } from "com.legacy.structure_gel.api.structure.jigsaw.JigsawCapability$JigsawType"

export interface $JigsawCapability$IJigsawCapability {
"canPlace"(generationContext0: $Structure$GenerationContext$$Type, blockPos1: $BlockPos$$Type, placeContext2: $ExtendedJigsawStructure$PlaceContext$$Type): boolean
"getPieceFactory"(): $IPieceFactory
"getType"(): $JigsawCapability$JigsawType<any>
"modifyPieceBuilder"(structurePiecesBuilder0: $StructurePiecesBuilder$$Type, generationContext1: $Structure$GenerationContext$$Type): void
get "pieceFactory"(): $IPieceFactory
get "type"(): $JigsawCapability$JigsawType<any>
}

export namespace $JigsawCapability$IJigsawCapability {
const probejs$$marker: never
}
export abstract class $JigsawCapability$IJigsawCapability$$Static implements $JigsawCapability$IJigsawCapability {
}
}

declare module "com.legacy.structure_gel.core.data_handler.handlers.EmptyDataHandler" {
import { $DataMap$$Type } from "com.legacy.structure_gel.api.data_handler.parsing.DataMap"
import { $DataParser } from "com.legacy.structure_gel.api.data_handler.parsing.DataParser"
import { $DataHandler } from "com.legacy.structure_gel.api.data_handler.handlers.DataHandler"

export class $EmptyDataHandler extends $DataHandler<$EmptyDataHandler> {
constructor(dataMap0: $DataMap$$Type)

public static "parser"(): $DataParser
}
}

declare module "com.legacy.structure_gel.api.data_handler.DataHandlerType" {
import { $ResourceLocation, $ResourceLocation$$Type } from "net.minecraft.resources.ResourceLocation"
import { $ConfiguredFeatureHandler } from "com.legacy.structure_gel.core.data_handler.handlers.ConfiguredFeatureHandler"
import { $EntityHandler } from "com.legacy.structure_gel.core.data_handler.handlers.EntityHandler"
import { $SGSimpleRegistry } from "com.legacy.structure_gel.api.registry.SGSimpleRegistry"
import { $VanillaSpawnerHandler } from "com.legacy.structure_gel.core.data_handler.handlers.VanillaSpawnerHandler"
import { $DynamicSpawnerHandler } from "com.legacy.structure_gel.core.data_handler.handlers.DynamicSpawnerHandler"
import { $DataMap$$Type } from "com.legacy.structure_gel.api.data_handler.parsing.DataMap"
import { $ArchaeologyHandler } from "com.legacy.structure_gel.core.data_handler.handlers.ArchaeologyHandler"
import { $DataParser } from "com.legacy.structure_gel.api.data_handler.parsing.DataParser"
import { $Function$$Type } from "java.util.function.Function"
import { $Supplier$$Type } from "java.util.function.Supplier"
import { $ChestHandler } from "com.legacy.structure_gel.core.data_handler.handlers.ChestHandler"
import { $EmptyDataHandler } from "com.legacy.structure_gel.core.data_handler.handlers.EmptyDataHandler"
import { $BlockStateHandler } from "com.legacy.structure_gel.core.data_handler.handlers.BlockStateHandler"
import { $DataHandler, $DataHandler$$Type } from "com.legacy.structure_gel.api.data_handler.handlers.DataHandler"

export class $DataHandlerType<T extends $DataHandler<T> = $DataHandler<T>> {
static readonly "ARCHAEOLOGY_HANDLER": $DataHandlerType<$ArchaeologyHandler>
static readonly "BLOCK_STATE": $DataHandlerType<$BlockStateHandler>
static readonly "CHEST": $DataHandlerType<$ChestHandler>
static readonly "CONFIGURED_FEATURE": $DataHandlerType<$ConfiguredFeatureHandler>
static readonly "DYNAMIC_SPAWNER": $DataHandlerType<$DynamicSpawnerHandler>
static readonly "EMPTY": $DataHandlerType<$EmptyDataHandler>
static readonly "ENTITY": $DataHandlerType<$EntityHandler>
static readonly "REGISTRY": $SGSimpleRegistry<$ResourceLocation, $DataHandlerType<any>>
static readonly "SPAWNER": $DataHandlerType<$VanillaSpawnerHandler>

constructor(resourceLocation0: $ResourceLocation$$Type, function1: $Function$$Type<$DataMap$$Type, T>, supplier2: $Supplier$$Type<$DataParser>)

public "create"(dataMap0: $DataMap$$Type): T
public "getDataParser"(): $DataParser
public "getRegistryName"(): $ResourceLocation
public static "register"<T extends $DataHandler<T>>(dataHandlerType0: $DataHandlerType$$Type<T>): $DataHandlerType<T>
get "dataParser"(): $DataParser
get "registryName"(): $ResourceLocation
}
}

declare module "com.legacy.structure_gel.core.data_handler.handlers.EntityHandler" {
import { $DataMap$$Type } from "com.legacy.structure_gel.api.data_handler.parsing.DataMap"
import { $ProbabilityDataHandler } from "com.legacy.structure_gel.api.data_handler.handlers.ProbabilityDataHandler"
import { $DataParser } from "com.legacy.structure_gel.api.data_handler.parsing.DataParser"

export class $EntityHandler extends $ProbabilityDataHandler<$EntityHandler> {
constructor(dataMap0: $DataMap$$Type)

public static "parser"(): $DataParser
}
}

declare module "com.legacy.structure_gel.core.data_handler.handlers.ChestHandler" {
import { $DataMap$$Type } from "com.legacy.structure_gel.api.data_handler.parsing.DataMap"
import { $ProbabilityDataHandler } from "com.legacy.structure_gel.api.data_handler.handlers.ProbabilityDataHandler"
import { $DataParser } from "com.legacy.structure_gel.api.data_handler.parsing.DataParser"

export class $ChestHandler extends $ProbabilityDataHandler<$ChestHandler> {
constructor(dataMap0: $DataMap$$Type)

public static "parser"(): $DataParser
}
}

declare module "com.legacy.structure_gel.api.events.RegisterLootTableAliasEvent" {
import { $ResourceLocation$$Type } from "net.minecraft.resources.ResourceLocation"
import { $IModBusEvent } from "net.minecraftforge.fml.event.IModBusEvent"
import { $Event } from "net.minecraftforge.eventbus.api.Event"

/** @deprecated */
export class $RegisterLootTableAliasEvent extends $Event implements $IModBusEvent {
constructor()

/** @deprecated */
public "register"(resourceLocation0: $ResourceLocation$$Type, resourceLocation1: $ResourceLocation$$Type): void
}
}

declare module "com.legacy.structure_gel.api.data_handler.parsing.DataParser" {
import { $ResourceLocation, $ResourceLocation$$Type } from "net.minecraft.resources.ResourceLocation"
import { $DataHandlerType$$Type } from "com.legacy.structure_gel.api.data_handler.DataHandlerType"
import { $Direction, $Direction$$Type } from "net.minecraft.core.Direction"
import { $Predicate$$Type } from "java.util.function.Predicate"
import { $DataMap } from "com.legacy.structure_gel.api.data_handler.parsing.DataMap"
import { $DataParser$Parser, $DataParser$Parser$$Type } from "com.legacy.structure_gel.api.data_handler.parsing.DataParser$Parser"
import { $BlockState, $BlockState$$Type } from "net.minecraft.world.level.block.state.BlockState"
import { $Function$$Type } from "java.util.function.Function"
import { $ResourceKey, $ResourceKey$$Type } from "net.minecraft.resources.ResourceKey"
import { $Registry } from "net.minecraft.core.Registry"
import { $Consumer$$Type } from "java.util.function.Consumer"
import { $DataParser$NumberParser } from "com.legacy.structure_gel.api.data_handler.parsing.DataParser$NumberParser"
import { $BiPredicate$$Type } from "java.util.function.BiPredicate"
import { $List } from "java.util.List"
import { $Direction$Axis, $Direction$Axis$$Type } from "net.minecraft.core.Direction$Axis"
import { $CompoundTag, $CompoundTag$$Type } from "net.minecraft.nbt.CompoundTag"
import { $Pair$$Type } from "org.apache.commons.lang3.tuple.Pair"
import { $Map$$Type } from "java.util.Map"
import { $Class$$Type } from "java.lang.Class"
import { $ItemStack, $ItemStack$$Type } from "net.minecraft.world.item.ItemStack"
import { $DataParser$ResourceKeyParser } from "com.legacy.structure_gel.api.data_handler.parsing.DataParser$ResourceKeyParser"

export class $DataParser {
readonly "dataHandlerType": $ResourceLocation

public "add"(string0: string, boolean1: boolean): $DataParser$Parser<boolean>
public "add"(string0: string, string1: string): $DataParser$Parser<string>
public "add"(string0: string, resourceLocation1: $ResourceLocation$$Type): $DataParser$Parser<$ResourceLocation>
public "add"(string0: string, direction1: $Direction$$Type): $DataParser$Parser<$Direction>
public "add"<T>(string0: string, function1: $Function$$Type<string, T>, t2: T, class3: $Class$$Type<T>, string4: string): $DataParser$Parser<T>
public "add"(string0: string, int1: integer, int2: integer, int3: integer): $DataParser$NumberParser<integer>
public "add"(string0: string, float1: float, float2: float, float3: float): $DataParser$NumberParser<float>
public "add"(string0: string, double1: double, double2: double, double3: double): $DataParser$NumberParser<double>
public "add"<T>(string0: string, resourceKey1: $ResourceKey$$Type<T>): $DataParser$ResourceKeyParser<$ResourceKey<T>>
public "add"<T>(string0: string, resourceKey1: $ResourceKey$$Type<$Registry<T>>, t2: T): $DataParser$ResourceKeyParser<$ResourceKey<T>>
public "add"(parser0: $DataParser$Parser$$Type<any>): void
public "add"<T>(string0: string, function1: $Function$$Type<string, T>, t2: T, class3: $Class$$Type<T>, string4: string, predicate5: $Predicate$$Type<string>): $DataParser$Parser<T>
public "add"(string0: string, axis1: $Direction$Axis$$Type): $DataParser$Parser<$Direction$Axis>
public "add"(string0: string, blockState1: $BlockState$$Type): $DataParser$Parser<$BlockState>
public "add"(string0: string, itemStack1: $ItemStack$$Type): $DataParser$Parser<$ItemStack>
public "add"(string0: string, compoundTag1: $CompoundTag$$Type): $DataParser$Parser<$CompoundTag>
public "addByte"(string0: string, byte1: byte, byte2: byte, byte3: byte): $DataParser$NumberParser<byte>
public "addNumber"<T extends number>(string0: string, function1: $Function$$Type<string, T>, t2: T, class3: $Class$$Type<T>, string4: string, t5: T, t6: T, biPredicate7: $BiPredicate$$Type<T, $Pair$$Type<T, T>>): $DataParser$NumberParser<T>
public "addShort"(string0: string, short1: short, short2: short, short3: short): $DataParser$NumberParser<short>
public "getParsers"(): $List<$DataParser$Parser<any>>
public static "of"(dataHandlerType0: $DataHandlerType$$Type<any>, consumer1: $Consumer$$Type<$DataParser$$Type>): $DataParser
public "parse"(map0: $Map$$Type<string, string>): $DataMap
public static "parseResourceKey"<T>(resourceKey0: $ResourceKey$$Type<$Registry<T>>, string1: string): $ResourceKey<T>
get "parsers"(): $List<$DataParser$Parser<any>>
}
}

declare module "com.legacy.structure_gel.api.dynamic_spawner.DynamicSpawnerType" {
import { $ResourceLocation, $ResourceLocation$$Type } from "net.minecraft.resources.ResourceLocation"
import { $SGSimpleRegistry } from "com.legacy.structure_gel.api.registry.SGSimpleRegistry"
import { $BlockPos$$Type } from "net.minecraft.core.BlockPos"
import { $DynamicSpawnerType$SpawnerModifier$$Type } from "com.legacy.structure_gel.api.dynamic_spawner.DynamicSpawnerType$SpawnerModifier"
import { $DynamicSpawner } from "com.legacy.structure_gel.core.dynamic_spawner.DynamicSpawner"
import { $Level$$Type } from "net.minecraft.world.level.Level"

export class $DynamicSpawnerType {
static readonly "DEFAULT": $DynamicSpawnerType
static readonly "REGISTRY": $SGSimpleRegistry<$ResourceLocation, $DynamicSpawnerType>

constructor(resourceLocation0: $ResourceLocation$$Type, spawnerModifier1: $DynamicSpawnerType$SpawnerModifier$$Type)

public "createSpawner"(level0: $Level$$Type, blockPos1: $BlockPos$$Type): $DynamicSpawner
public "getRegistryName"(): $ResourceLocation
public static "register"(dynamicSpawnerType0: $DynamicSpawnerType$$Type): $DynamicSpawnerType
get "registryName"(): $ResourceLocation
}
}

declare module "com.legacy.structure_gel.core.data_handler.handlers.BlockStateHandler" {
import { $DataMap$$Type } from "com.legacy.structure_gel.api.data_handler.parsing.DataMap"
import { $ProbabilityDataHandler } from "com.legacy.structure_gel.api.data_handler.handlers.ProbabilityDataHandler"
import { $DataParser } from "com.legacy.structure_gel.api.data_handler.parsing.DataParser"

export class $BlockStateHandler extends $ProbabilityDataHandler<$BlockStateHandler> {
constructor(dataMap0: $DataMap$$Type)

public static "parser"(): $DataParser
}
}

