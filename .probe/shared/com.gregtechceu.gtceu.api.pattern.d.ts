declare module "com.gregtechceu.gtceu.api.pattern.MultiblockShapeInfo" {
import { $BlockInfo, $BlockInfo$$Type } from "com.lowdragmc.lowdraglib.utils.BlockInfo"
import { $MultiblockShapeInfo$ShapeInfoBuilder } from "com.gregtechceu.gtceu.api.pattern.MultiblockShapeInfo$ShapeInfoBuilder"

export class $MultiblockShapeInfo {
constructor(blockInfo0sss: $BlockInfo$$Type[][][])

public static "builder"(): $MultiblockShapeInfo$ShapeInfoBuilder
public "getBlocks"(): $BlockInfo[][][]
get "blocks"(): $BlockInfo[][][]
}
}

declare module "com.gregtechceu.gtceu.api.pattern.TraceabilityPredicate" {
import { $IO$$Type } from "com.gregtechceu.gtceu.api.capability.recipe.IO"
import { $BlockInfo } from "com.lowdragmc.lowdraglib.utils.BlockInfo"
import { $List, $List$$Type } from "java.util.List"
import { $Component$$Type } from "net.minecraft.network.chat.Component"
import { $MultiblockState$$Type } from "com.gregtechceu.gtceu.api.pattern.MultiblockState"
import { $Predicate$$Type } from "java.util.function.Predicate"
import { $SimplePredicate, $SimplePredicate$$Type } from "com.gregtechceu.gtceu.api.pattern.predicates.SimplePredicate"
import { $Supplier$$Type } from "java.util.function.Supplier"

export class $TraceabilityPredicate {
constructor(traceabilityPredicate0: $TraceabilityPredicate$$Type)
constructor(predicate0: $Predicate$$Type<$MultiblockState$$Type>, supplier1: $Supplier$$Type<$BlockInfo[]>)
constructor(simplePredicate0: $SimplePredicate$$Type)
constructor()

public "addCache"(): boolean
public "addTooltips"(...component0s: $Component$$Type[]): $TraceabilityPredicate
public "disableRenderFormed"(): $TraceabilityPredicate
public "hasAir"(): boolean
public "isAir"(): boolean
public "isAny"(): boolean
public "isSingle"(): boolean
public "or"(traceabilityPredicate0: $TraceabilityPredicate$$Type): $TraceabilityPredicate
public "setController"(): $TraceabilityPredicate
public "setExactLimit"(int0: integer): $TraceabilityPredicate
public "setIO"(iO0: $IO$$Type): $TraceabilityPredicate
public "setMaxGlobalLimited"(int0: integer): $TraceabilityPredicate
public "setMaxGlobalLimited"(int0: integer, int1: integer): $TraceabilityPredicate
public "setMaxLayerLimited"(int0: integer, int1: integer): $TraceabilityPredicate
public "setMaxLayerLimited"(int0: integer): $TraceabilityPredicate
public "setMinGlobalLimited"(int0: integer, int1: integer): $TraceabilityPredicate
public "setMinGlobalLimited"(int0: integer): $TraceabilityPredicate
public "setMinLayerLimited"(int0: integer): $TraceabilityPredicate
public "setMinLayerLimited"(int0: integer, int1: integer): $TraceabilityPredicate
public "setNBTParser"(string0: string): $TraceabilityPredicate
public "setPreviewCount"(int0: integer): $TraceabilityPredicate
public "setSlotName"(string0: string): $TraceabilityPredicate
public "sort"(): $TraceabilityPredicate
public "test"(multiblockState0: $MultiblockState$$Type): boolean
get "common"(): $List<$SimplePredicate>
set "common"(value: $List$$Type<$SimplePredicate$$Type>)
get "isController"(): boolean
set "isController"(value: boolean)
get "limited"(): $List<$SimplePredicate>
set "limited"(value: $List$$Type<$SimplePredicate$$Type>)
get "air"(): boolean
get "any"(): boolean
get "single"(): boolean
set "exactLimit"(value: integer)
set "iO"(value: $IO$$Type)
set "maxGlobalLimited"(value: integer)
set "maxLayerLimited"(value: integer)
set "minGlobalLimited"(value: integer)
set "minLayerLimited"(value: integer)
set "nBTParser"(value: string)
set "previewCount"(value: integer)
set "slotName"(value: string)
}
}

declare module "com.gregtechceu.gtceu.api.pattern.MultiblockState" {
import { $Direction$$Type } from "net.minecraft.core.Direction"
import { $Collection } from "java.util.Collection"
import { $PatternError, $PatternError$$Type } from "com.gregtechceu.gtceu.api.pattern.error.PatternError"
import { $BlockState, $BlockState$$Type } from "net.minecraft.world.level.block.state.BlockState"
import { $IMultiController, $IMultiController$$Type } from "com.gregtechceu.gtceu.api.machine.feature.multiblock.IMultiController"
import { $BlockEntity } from "net.minecraft.world.level.block.entity.BlockEntity"
import { $TraceabilityPredicate, $TraceabilityPredicate$$Type } from "com.gregtechceu.gtceu.api.pattern.TraceabilityPredicate"
import { $IO, $IO$$Type } from "com.gregtechceu.gtceu.api.capability.recipe.IO"
import { $PatternMatchContext } from "com.gregtechceu.gtceu.api.pattern.util.PatternMatchContext"
import { $LongOpenHashSet, $LongOpenHashSet$$Type } from "it.unimi.dsi.fastutil.longs.LongOpenHashSet"
import { $BlockPos, $BlockPos$$Type } from "net.minecraft.core.BlockPos"
import { $SimplePredicate } from "com.gregtechceu.gtceu.api.pattern.predicates.SimplePredicate"
import { $Level, $Level$$Type } from "net.minecraft.world.level.Level"
import { $Object2IntOpenHashMap } from "it.unimi.dsi.fastutil.objects.Object2IntOpenHashMap"

export class $MultiblockState {
static readonly "UNINIT_ERROR": $PatternError
static readonly "UNLOAD_ERROR": $PatternError
readonly "controllerPos": $BlockPos
readonly "world": $Level

constructor(level0: $Level$$Type, blockPos1: $BlockPos$$Type)

public "addPosCache"(blockPos0: $BlockPos$$Type): void
public "clean"(): void
public "getBlockState"(): $BlockState
public "getCache"(): $Collection<$BlockPos>
public "getController"(): $IMultiController
public "getGlobalCount"(): $Object2IntOpenHashMap<$SimplePredicate>
public "getLayerCount"(): $Object2IntOpenHashMap<$SimplePredicate>
public "getMatchContext"(): $PatternMatchContext
public "getOffsetState"(direction0: $Direction$$Type): $BlockState
public "getPos"(): $BlockPos
public "getTileEntity"(): $BlockEntity
public "getWorld"(): $Level
public "hasError"(): boolean
public "isNeededFlip"(): boolean
public "isPosInCache"(blockPos0: $BlockPos$$Type): boolean
public "onBlockStateChanged"(blockPos0: $BlockPos$$Type, blockState1: $BlockState$$Type): void
public "setError"(patternError0: $PatternError$$Type): void
public "setNeededFlip"(boolean0: boolean): void
public "update"(blockPos0: $BlockPos$$Type, traceabilityPredicate1: $TraceabilityPredicate$$Type): boolean
get "cache"(): $LongOpenHashSet
set "cache"(value: $LongOpenHashSet$$Type)
get "error"(): $PatternError
set "error"(value: $PatternError$$Type)
get "io"(): $IO
set "io"(value: $IO$$Type)
get "lastController"(): $IMultiController
set "lastController"(value: $IMultiController$$Type)
get "predicate"(): $TraceabilityPredicate
set "predicate"(value: $TraceabilityPredicate$$Type)
get "blockState"(): $BlockState
get "controller"(): $IMultiController
get "globalCount"(): $Object2IntOpenHashMap<$SimplePredicate>
get "layerCount"(): $Object2IntOpenHashMap<$SimplePredicate>
get "matchContext"(): $PatternMatchContext
get "pos"(): $BlockPos
get "tileEntity"(): $BlockEntity
get "neededFlip"(): boolean
set "neededFlip"(value: boolean)
}
}

declare module "com.gregtechceu.gtceu.api.pattern.MultiblockShapeInfo$ShapeInfoBuilder" {
import { $IMachineBlock, $IMachineBlock$$Type } from "com.gregtechceu.gtceu.api.block.IMachineBlock"
import { $BlockInfo } from "com.lowdragmc.lowdraglib.utils.BlockInfo"
import { $Builder } from "com.lowdragmc.lowdraglib.utils.Builder"
import { $Direction$$Type } from "net.minecraft.core.Direction"
import { $BlockState$$Type } from "net.minecraft.world.level.block.state.BlockState"
import { $Block, $Block$$Type } from "net.minecraft.world.level.block.Block"
import { $Supplier$$Type } from "java.util.function.Supplier"
import { $MultiblockShapeInfo } from "com.gregtechceu.gtceu.api.pattern.MultiblockShapeInfo"

export class $MultiblockShapeInfo$ShapeInfoBuilder extends $Builder<$BlockInfo, $MultiblockShapeInfo$ShapeInfoBuilder> {
constructor()

public "build"(): $MultiblockShapeInfo
public "where"(char0: character, iMachineBlock1: $IMachineBlock$$Type, direction2: $Direction$$Type): $MultiblockShapeInfo$ShapeInfoBuilder
public "where"(char0: character, block1: $Block$$Type): $MultiblockShapeInfo$ShapeInfoBuilder
public "where"(char0: character, supplier1: $Supplier$$Type<$Block>): $MultiblockShapeInfo$ShapeInfoBuilder
public "where"(char0: character, blockState1: $BlockState$$Type): $MultiblockShapeInfo$ShapeInfoBuilder
public "where"(char0: character, supplier1: $Supplier$$Type<$IMachineBlock>, direction2: $Direction$$Type): $MultiblockShapeInfo$ShapeInfoBuilder
}
}

declare module "com.gregtechceu.gtceu.api.pattern.error.PatternError" {
import { $List } from "java.util.List"
import { $Component } from "net.minecraft.network.chat.Component"
import { $BlockPos } from "net.minecraft.core.BlockPos"
import { $MultiblockState$$Type } from "com.gregtechceu.gtceu.api.pattern.MultiblockState"
import { $ItemStack } from "net.minecraft.world.item.ItemStack"
import { $Level } from "net.minecraft.world.level.Level"

export class $PatternError {
constructor()

public "getCandidates"(): $List<$List<$ItemStack>>
public "getErrorInfo"(): $Component
public "getPos"(): $BlockPos
public "getWorld"(): $Level
public "setWorldState"(multiblockState0: $MultiblockState$$Type): void
get "candidates"(): $List<$List<$ItemStack>>
get "errorInfo"(): $Component
get "pos"(): $BlockPos
get "world"(): $Level
set "worldState"(value: $MultiblockState$$Type)
}
}

declare module "com.gregtechceu.gtceu.api.pattern.predicates.SimplePredicate" {
import { $IO, $IO$$Type } from "com.gregtechceu.gtceu.api.capability.recipe.IO"
import { $BlockInfo, $BlockInfo$$Type } from "com.lowdragmc.lowdraglib.utils.BlockInfo"
import { $List, $List$$Type } from "java.util.List"
import { $Component, $Component$$Type } from "net.minecraft.network.chat.Component"
import { $MultiblockState, $MultiblockState$$Type } from "com.gregtechceu.gtceu.api.pattern.MultiblockState"
import { $Predicate, $Predicate$$Type } from "java.util.function.Predicate"
import { $ItemStack } from "net.minecraft.world.item.ItemStack"
import { $TraceabilityPredicate$$Type } from "com.gregtechceu.gtceu.api.pattern.TraceabilityPredicate"
import { $Supplier, $Supplier$$Type } from "java.util.function.Supplier"

export class $SimplePredicate {
static "AIR": $SimplePredicate
static "ANY": $SimplePredicate
readonly "type": string

constructor(string0: string)
constructor(predicate0: $Predicate$$Type<$MultiblockState$$Type>, supplier1: $Supplier$$Type<$BlockInfo[]>)
constructor(string0: string, predicate1: $Predicate$$Type<$MultiblockState$$Type>, supplier2: $Supplier$$Type<$BlockInfo[]>)
constructor()

public "buildPredicate"(): $SimplePredicate
public "getCandidates"(): $List<$ItemStack>
/** Client only, do not use in server scripts */
public "getToolTips"(traceabilityPredicate0: $TraceabilityPredicate$$Type): $List<$Component>
public "test"(multiblockState0: $MultiblockState$$Type): boolean
public "testGlobal"(multiblockState0: $MultiblockState$$Type): boolean
public "testLayer"(multiblockState0: $MultiblockState$$Type): boolean
public "testLimited"(multiblockState0: $MultiblockState$$Type): boolean
get "candidates"(): $Supplier<$BlockInfo[]>
set "candidates"(value: $Supplier$$Type<$BlockInfo$$Type[]>)
get "disableRenderFormed"(): boolean
set "disableRenderFormed"(value: boolean)
get "io"(): $IO
set "io"(value: $IO$$Type)
get "maxCount"(): integer
set "maxCount"(value: integer)
get "maxLayerCount"(): integer
set "maxLayerCount"(value: integer)
get "minCount"(): integer
set "minCount"(value: integer)
get "minLayerCount"(): integer
set "minLayerCount"(value: integer)
get "nbtParser"(): string
set "nbtParser"(value: string)
get "predicate"(): $Predicate<$MultiblockState>
set "predicate"(value: $Predicate$$Type<$MultiblockState$$Type>)
get "previewCount"(): integer
set "previewCount"(value: integer)
get "slotName"(): string
set "slotName"(value: string)
get "toolTips"(): $List<$Component>
set "toolTips"(value: $List$$Type<$Component$$Type>)
}
}

declare module "com.gregtechceu.gtceu.api.pattern.BlockPattern" {
import { $BlockInfo } from "com.lowdragmc.lowdraglib.utils.BlockInfo"
import { $MultiblockState$$Type } from "com.gregtechceu.gtceu.api.pattern.MultiblockState"
import { $BlockPos$$Type } from "net.minecraft.core.BlockPos"
import { $Direction$$Type } from "net.minecraft.core.Direction"
import { $TraceabilityPredicate$$Type } from "com.gregtechceu.gtceu.api.pattern.TraceabilityPredicate"
import { $RelativeDirection, $RelativeDirection$$Type } from "com.gregtechceu.gtceu.api.pattern.util.RelativeDirection"
import { $Player$$Type } from "net.minecraft.world.entity.player.Player"

export class $BlockPattern {
readonly "aisleRepetitions": integer[][]
readonly "structureDir": $RelativeDirection[]

constructor(traceabilityPredicate0sss: $TraceabilityPredicate$$Type[][][], relativeDirection1s: $RelativeDirection$$Type[], int2ss: integer[][], int3s: integer[])

public "autoBuild"(player0: $Player$$Type, multiblockState1: $MultiblockState$$Type): void
public "checkPatternAt"(multiblockState0: $MultiblockState$$Type, blockPos1: $BlockPos$$Type, direction2: $Direction$$Type, direction3: $Direction$$Type, boolean4: boolean, boolean5: boolean): boolean
public "checkPatternAt"(multiblockState0: $MultiblockState$$Type, boolean1: boolean): boolean
/** @deprecated */
public "getDimensions"(): integer[]
public "getFormedRepetitionCount"(): integer[]
public "getPreview"(int0s: integer[]): $BlockInfo[][][]
get "dimensions"(): integer[]
get "formedRepetitionCount"(): integer[]
}
}

declare module "com.gregtechceu.gtceu.api.pattern.util.RelativeDirection" {
import { $Enum, $Enum$$Type } from "java.lang.Enum"
import { $BlockPos, $BlockPos$$Type } from "net.minecraft.core.BlockPos"
import { $Direction, $Direction$$Type } from "net.minecraft.core.Direction"
import { $Vec3i } from "net.minecraft.core.Vec3i"
import { $StringRepresentable, $StringRepresentable$$Type } from "net.minecraft.util.StringRepresentable"
import { $StringRepresentable$EnumCodec } from "net.minecraft.util.StringRepresentable$EnumCodec"
import { $Keyable } from "com.mojang.serialization.Keyable"
import { $Comparator } from "java.util.Comparator"
import { $Supplier$$Type } from "java.util.function.Supplier"
import { $Function$$Type } from "java.util.function.Function"

export class $RelativeDirection extends $Enum<$RelativeDirection> implements $StringRepresentable {
static readonly "BACK": $RelativeDirection
static readonly "CODEC": $StringRepresentable$EnumCodec<$RelativeDirection>
static readonly "DOWN": $RelativeDirection
static readonly "FRONT": $RelativeDirection
static readonly "LEFT": $RelativeDirection
static readonly "RIGHT": $RelativeDirection
static readonly "UP": $RelativeDirection
static readonly "VALUES": $RelativeDirection[]
readonly "global": $Direction

public "applyVec3i"(direction0: $Direction$$Type): $Vec3i
public static "findRelativeOf"(direction0: $Direction$$Type, direction1: $Direction$$Type, direction2: $Direction$$Type): $RelativeDirection
public static "findRelativeOf"(direction0: $Direction$$Type, direction1: $Direction$$Type): $RelativeDirection
public static "fromEnum"<E extends ($Enum<E> & $StringRepresentable)>(supplier0: $Supplier$$Type<E[]>): $StringRepresentable$EnumCodec<E>
public static "fromEnumWithMapping"<E extends ($Enum<E> & $StringRepresentable)>(supplier0: $Supplier$$Type<E[]>, function1: $Function$$Type<string, string>): $StringRepresentable$EnumCodec<E>
public static "fromGlobalDirection"(direction0: $Direction$$Type): $RelativeDirection
public "getActualDirection"(direction0: $Direction$$Type): $Direction
public static "getActualDirection"(direction0: $Direction$$Type, direction1: $Direction$$Type, direction2: $Direction$$Type): $Direction
public "getOpposite"(): $RelativeDirection
public "getRelative"(direction0: $Direction$$Type, direction1: $Direction$$Type, boolean2: boolean): $Direction
/** @deprecated */
public "getRelativeFacing"(direction0: $Direction$$Type, direction1: $Direction$$Type, boolean2: boolean): $Direction
public "getSerializedName"(): string
public "getSorter"(direction0: $Direction$$Type, direction1: $Direction$$Type, boolean2: boolean): $Comparator<$BlockPos>
public "isSameAxis"(relativeDirection0: $RelativeDirection$$Type): boolean
public static "keys"(stringRepresentable0s: $StringRepresentable$$Type[]): $Keyable
public static "offsetPos"(blockPos0: $BlockPos$$Type, direction1: $Direction$$Type, direction2: $Direction$$Type, boolean3: boolean, int4: integer, int5: integer, int6: integer): $BlockPos
public static "simulateAxisRotation"(direction0: $Direction$$Type, direction1: $Direction$$Type, direction2: $Direction$$Type): $Direction
public static "valueOf"(string0: string): $RelativeDirection
public static "values"(): $RelativeDirection[]
get "opposite"(): $RelativeDirection
get "serializedName"(): string
}
}

declare module "com.gregtechceu.gtceu.api.pattern.Predicates" {
import { $BlockEntry$$Type } from "com.tterrag.registrate.util.entry.BlockEntry"
import { $IMachineBlock$$Type } from "com.gregtechceu.gtceu.api.block.IMachineBlock"
import { $DyeColor$$Type } from "net.minecraft.world.item.DyeColor"
import { $GTRecipeType$$Type } from "com.gregtechceu.gtceu.api.recipe.GTRecipeType"
import { $MultiblockState$$Type } from "com.gregtechceu.gtceu.api.pattern.MultiblockState"
import { $Predicate$$Type } from "java.util.function.Predicate"
import { $BlockState$$Type } from "net.minecraft.world.level.block.state.BlockState"
import { $TraceabilityPredicate, $TraceabilityPredicate$$Type } from "com.gregtechceu.gtceu.api.pattern.TraceabilityPredicate"
import { $Supplier$$Type } from "java.util.function.Supplier"
import { $TagKey$$Type } from "net.minecraft.tags.TagKey"
import { $BlockInfo } from "com.lowdragmc.lowdraglib.utils.BlockInfo"
import { $MachineDefinition$$Type } from "com.gregtechceu.gtceu.api.machine.MachineDefinition"
import { $Block$$Type } from "net.minecraft.world.level.block.Block"
import { $Fluid$$Type } from "net.minecraft.world.level.material.Fluid"
import { $Material$$Type } from "com.gregtechceu.gtceu.api.data.chemical.material.Material"
import { $LampBlock$$Type } from "com.gregtechceu.gtceu.common.block.LampBlock"
import { $PartAbility$$Type } from "com.gregtechceu.gtceu.api.machine.multiblock.PartAbility"

export class $Predicates {
constructor()

public static "abilities"(...partAbility0s: $PartAbility$$Type[]): $TraceabilityPredicate
public static "ability"(partAbility0: $PartAbility$$Type, ...int1s: integer[]): $TraceabilityPredicate
public static "air"(): $TraceabilityPredicate
public static "any"(): $TraceabilityPredicate
public static "anyLamp"(): $TraceabilityPredicate
public static "autoAbilities"(boolean0: boolean, boolean1: boolean, boolean2: boolean): $TraceabilityPredicate
public static "autoAbilities"(gTRecipeType0s: $GTRecipeType$$Type[], boolean1: boolean, boolean2: boolean, boolean3: boolean, boolean4: boolean, boolean5: boolean, boolean6: boolean): $TraceabilityPredicate
public static "autoAbilities"(...gTRecipeType0s: $GTRecipeType$$Type[]): $TraceabilityPredicate
public static "blockTag"(tagKey0: $TagKey$$Type<$Block$$Type>): $TraceabilityPredicate
public static "blocks"(...block0s: $Block$$Type[]): $TraceabilityPredicate
public static "blocks"(...iMachineBlock0s: $IMachineBlock$$Type[]): $TraceabilityPredicate
public static "cleanroomFilters"(): $TraceabilityPredicate
public static "controller"(traceabilityPredicate0: $TraceabilityPredicate$$Type): $TraceabilityPredicate
public static "custom"(predicate0: $Predicate$$Type<$MultiblockState$$Type>, supplier1: $Supplier$$Type<$BlockInfo[]>): $TraceabilityPredicate
public static "dataHatchPredicate"(traceabilityPredicate0: $TraceabilityPredicate$$Type): $TraceabilityPredicate
public static "fluidTag"(tagKey0: $TagKey$$Type<$Fluid$$Type>): $TraceabilityPredicate
public static "fluids"(...fluid0s: $Fluid$$Type[]): $TraceabilityPredicate
public static "frames"(...material0s: $Material$$Type[]): $TraceabilityPredicate
public static "heatingCoils"(): $TraceabilityPredicate
public static "lamps"(...blockEntry0s: $BlockEntry$$Type<$LampBlock$$Type>[]): $TraceabilityPredicate
public static "lampsByColor"(dyeColor0: $DyeColor$$Type): $TraceabilityPredicate
public static "machines"(...machineDefinition0s: $MachineDefinition$$Type[]): $TraceabilityPredicate
public static "powerSubstationBatteries"(): $TraceabilityPredicate
public static "states"(...blockState0s: $BlockState$$Type[]): $TraceabilityPredicate
}
}

declare module "com.gregtechceu.gtceu.api.pattern.util.PatternMatchContext" {
import { $Map$Entry } from "java.util.Map$Entry"
import { $Set } from "java.util.Set"
import { $Supplier$$Type } from "java.util.function.Supplier"

export class $PatternMatchContext {
constructor()

public "containsKey"(string0: string): boolean
public "entrySet"(): $Set<$Map$Entry<string, any>>
public "get"<T>(string0: string): T
public "getInt"(string0: string): integer
public "getOrCreate"<T>(string0: string, supplier1: $Supplier$$Type<T>): T
public "getOrDefault"<T>(string0: string, t1: T): T
public "getOrPut"<T>(string0: string, t1: T): T
public "increment"(string0: string, int1: integer): void
public "reset"(): void
public "set"(string0: string, object1: any): void
}
}

declare module "com.gregtechceu.gtceu.api.pattern.FactoryBlockPattern" {
import { $TraceabilityPredicate$$Type } from "com.gregtechceu.gtceu.api.pattern.TraceabilityPredicate"
import { $BlockPattern } from "com.gregtechceu.gtceu.api.pattern.BlockPattern"
import { $RelativeDirection$$Type } from "com.gregtechceu.gtceu.api.pattern.util.RelativeDirection"

export class $FactoryBlockPattern {
public "aisle"(...string0s: string[]): $FactoryBlockPattern
public "aisleRepeatable"(int0: integer, int1: integer, ...string2s: string[]): $FactoryBlockPattern
public "build"(): $BlockPattern
public "setRepeatable"(int0: integer, int1: integer): $FactoryBlockPattern
public "setRepeatable"(int0: integer): $FactoryBlockPattern
public static "start"(): $FactoryBlockPattern
public static "start"(relativeDirection0: $RelativeDirection$$Type, relativeDirection1: $RelativeDirection$$Type, relativeDirection2: $RelativeDirection$$Type): $FactoryBlockPattern
public "where"(char0: character, traceabilityPredicate1: $TraceabilityPredicate$$Type): $FactoryBlockPattern
public "where"(string0: string, traceabilityPredicate1: $TraceabilityPredicate$$Type): $FactoryBlockPattern
set "repeatable"(value: integer)
}
}

