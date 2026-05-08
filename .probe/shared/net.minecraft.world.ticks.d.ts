declare module "net.minecraft.world.ticks.TickAccess" {
import { $ScheduledTick$$Type } from "net.minecraft.world.ticks.ScheduledTick"
import { $BlockPos$$Type } from "net.minecraft.core.BlockPos"

export interface $TickAccess<T = any> {
"count"(): integer
"hasScheduledTick"(blockPos0: $BlockPos$$Type, t1: T): boolean
"schedule"(scheduledTick0: $ScheduledTick$$Type<T>): void
}

export namespace $TickAccess {
const probejs$$marker: never
}
export abstract class $TickAccess$$Static<T = any> implements $TickAccess<T> {
}
}

declare module "net.minecraft.world.ticks.SerializableTickContainer" {
import { $Tag } from "net.minecraft.nbt.Tag"
import { $Function$$Type } from "java.util.function.Function"

export interface $SerializableTickContainer<T = any> {
"save"(long0: long, function1: $Function$$Type<T, string>): $Tag
}

export namespace $SerializableTickContainer {
const probejs$$marker: never
}
export abstract class $SerializableTickContainer$$Static<T = any> implements $SerializableTickContainer<T> {
}
}

declare module "net.minecraft.world.ticks.ProtoChunkTicks" {
import { $ChunkPos$$Type } from "net.minecraft.world.level.ChunkPos"
import { $ScheduledTick$$Type } from "net.minecraft.world.ticks.ScheduledTick"
import { $TickContainerAccess } from "net.minecraft.world.ticks.TickContainerAccess"
import { $List } from "java.util.List"
import { $Tag } from "net.minecraft.nbt.Tag"
import { $BlockPos$$Type } from "net.minecraft.core.BlockPos"
import { $Optional } from "java.util.Optional"
import { $SavedTick } from "net.minecraft.world.ticks.SavedTick"
import { $SerializableTickContainer } from "net.minecraft.world.ticks.SerializableTickContainer"
import { $Function$$Type } from "java.util.function.Function"
import { $ListTag$$Type } from "net.minecraft.nbt.ListTag"

export class $ProtoChunkTicks<T = any> implements $SerializableTickContainer<T>, $TickContainerAccess<T> {
constructor()

public "count"(): integer
public "hasScheduledTick"(blockPos0: $BlockPos$$Type, t1: T): boolean
public static "load"<T>(listTag0: $ListTag$$Type, function1: $Function$$Type<string, $Optional<T>>, chunkPos2: $ChunkPos$$Type): $ProtoChunkTicks<T>
public "save"(long0: long, function1: $Function$$Type<T, string>): $Tag
public "schedule"(scheduledTick0: $ScheduledTick$$Type<T>): void
public "scheduledTicks"(): $List<$SavedTick<T>>
}
}

declare module "net.minecraft.world.ticks.LevelTicks" {
import { $ScheduledTick$$Type } from "net.minecraft.world.ticks.ScheduledTick"
import { $ProfilerFiller } from "net.minecraft.util.profiling.ProfilerFiller"
import { $LevelTickAccess } from "net.minecraft.world.ticks.LevelTickAccess"
import { $Supplier$$Type } from "java.util.function.Supplier"
import { $ChunkPos$$Type } from "net.minecraft.world.level.ChunkPos"
import { $LevelChunkTicks, $LevelChunkTicks$$Type } from "net.minecraft.world.ticks.LevelChunkTicks"
import { $BlockPos$$Type } from "net.minecraft.core.BlockPos"
import { $Vec3i$$Type } from "net.minecraft.core.Vec3i"
import { $BiConsumer$$Type } from "java.util.function.BiConsumer"
import { $BoundingBox$$Type } from "net.minecraft.world.level.levelgen.structure.BoundingBox"
import { $Long2ObjectMap } from "it.unimi.dsi.fastutil.longs.Long2ObjectMap"
import { $LongPredicate$$Type } from "java.util.function.LongPredicate"

export class $LevelTicks<T = any> implements $LevelTickAccess<T> {
readonly "allContainers": $Long2ObjectMap<$LevelChunkTicks<T>>

constructor(longPredicate0: $LongPredicate$$Type, supplier1: $Supplier$$Type<$ProfilerFiller>)

public "addContainer"(chunkPos0: $ChunkPos$$Type, levelChunkTicks1: $LevelChunkTicks$$Type<T>): void
public "clearArea"(boundingBox0: $BoundingBox$$Type): void
public "copyArea"(boundingBox0: $BoundingBox$$Type, vec3i1: $Vec3i$$Type): void
public "copyAreaFrom"(levelTicks0: $LevelTicks$$Type<T>, boundingBox1: $BoundingBox$$Type, vec3i2: $Vec3i$$Type): void
public "count"(): integer
public "hasScheduledTick"(blockPos0: $BlockPos$$Type, t1: T): boolean
public "removeContainer"(chunkPos0: $ChunkPos$$Type): void
public "schedule"(scheduledTick0: $ScheduledTick$$Type<T>): void
public "tick"(long0: long, int1: integer, biConsumer2: $BiConsumer$$Type<$BlockPos$$Type, T>): void
public "willTickThisTick"(blockPos0: $BlockPos$$Type, t1: T): boolean
}
}

declare module "net.minecraft.world.ticks.LevelTickAccess" {
import { $ScheduledTick$$Type } from "net.minecraft.world.ticks.ScheduledTick"
import { $TickAccess } from "net.minecraft.world.ticks.TickAccess"
import { $BlockPos$$Type } from "net.minecraft.core.BlockPos"

export interface $LevelTickAccess<T = any> extends $TickAccess<T> {
"count"(): integer
"hasScheduledTick"(blockPos0: $BlockPos$$Type, t1: T): boolean
"schedule"(scheduledTick0: $ScheduledTick$$Type<T>): void
"willTickThisTick"(blockPos0: $BlockPos$$Type, t1: T): boolean
}

export namespace $LevelTickAccess {
const probejs$$marker: never
}
export abstract class $LevelTickAccess$$Static<T = any> implements $LevelTickAccess<T> {
}
}

declare module "net.minecraft.world.ticks.SavedTick" {
import { $ChunkPos$$Type } from "net.minecraft.world.level.ChunkPos"
import { $Consumer$$Type } from "java.util.function.Consumer"
import { $ScheduledTick, $ScheduledTick$$Type } from "net.minecraft.world.ticks.ScheduledTick"
import { $TickPriority, $TickPriority$$Type } from "net.minecraft.world.ticks.TickPriority"
import { $CompoundTag, $CompoundTag$$Type } from "net.minecraft.nbt.CompoundTag"
import { $BlockPos, $BlockPos$$Type } from "net.minecraft.core.BlockPos"
import { $Optional } from "java.util.Optional"
import { $Hash$Strategy } from "it.unimi.dsi.fastutil.Hash$Strategy"
import { $Record } from "java.lang.Record"
import { $Function$$Type } from "java.util.function.Function"
import { $ListTag$$Type } from "net.minecraft.nbt.ListTag"

export class $SavedTick<T = any> extends $Record {
static readonly "UNIQUE_TICK_HASH": $Hash$Strategy<$SavedTick<any>>

constructor(t0: T, blockPos1: $BlockPos$$Type, int2: integer, tickPriority3: $TickPriority$$Type)

public "delay"(): integer
public static "loadTick"<T>(compoundTag0: $CompoundTag$$Type, function1: $Function$$Type<string, $Optional<T>>): $Optional<$SavedTick<T>>
public static "loadTickList"<T>(listTag0: $ListTag$$Type, function1: $Function$$Type<string, $Optional<T>>, chunkPos2: $ChunkPos$$Type, consumer3: $Consumer$$Type<$SavedTick$$Type<T>>): void
public "pos"(): $BlockPos
public "priority"(): $TickPriority
public static "probe"<T>(t0: T, blockPos1: $BlockPos$$Type): $SavedTick<T>
public "save"(function0: $Function$$Type<T, string>): $CompoundTag
public static "saveTick"<T>(scheduledTick0: $ScheduledTick$$Type<T>, function1: $Function$$Type<T, string>, long2: long): $CompoundTag
public "type"(): T
public "unpack"(long0: long, long1: long): $ScheduledTick<T>
}
}

declare module "net.minecraft.world.ticks.TickContainerAccess" {
import { $ScheduledTick$$Type } from "net.minecraft.world.ticks.ScheduledTick"
import { $TickAccess } from "net.minecraft.world.ticks.TickAccess"
import { $BlockPos$$Type } from "net.minecraft.core.BlockPos"

export interface $TickContainerAccess<T = any> extends $TickAccess<T> {
"count"(): integer
"hasScheduledTick"(blockPos0: $BlockPos$$Type, t1: T): boolean
"schedule"(scheduledTick0: $ScheduledTick$$Type<T>): void
}

export namespace $TickContainerAccess {
const probejs$$marker: never
}
export abstract class $TickContainerAccess$$Static<T = any> implements $TickContainerAccess<T> {
}
}

declare module "net.minecraft.world.ticks.ScheduledTick" {
import { $TickPriority, $TickPriority$$Type } from "net.minecraft.world.ticks.TickPriority"
import { $BlockPos, $BlockPos$$Type } from "net.minecraft.core.BlockPos"
import { $Hash$Strategy } from "it.unimi.dsi.fastutil.Hash$Strategy"
import { $Record } from "java.lang.Record"
import { $Comparator } from "java.util.Comparator"

export class $ScheduledTick<T = any> extends $Record {
static readonly "DRAIN_ORDER": $Comparator<$ScheduledTick<any>>
static readonly "INTRA_TICK_DRAIN_ORDER": $Comparator<$ScheduledTick<any>>
static readonly "UNIQUE_TICK_HASH": $Hash$Strategy<$ScheduledTick<any>>

constructor(t0: T, blockPos1: $BlockPos$$Type, long2: long, long3: long)
constructor(t0: T, blockPos1: $BlockPos$$Type, long2: long, tickPriority3: $TickPriority$$Type, long4: long)

public "pos"(): $BlockPos
public "priority"(): $TickPriority
public static "probe"<T>(t0: T, blockPos1: $BlockPos$$Type): $ScheduledTick<T>
public "subTickOrder"(): long
public "triggerTick"(): long
public "type"(): T
}
}

declare module "net.minecraft.world.ticks.TickPriority" {
import { $Enum } from "java.lang.Enum"

export class $TickPriority extends $Enum<$TickPriority> {
static readonly "EXTREMELY_HIGH": $TickPriority
static readonly "EXTREMELY_LOW": $TickPriority
static readonly "HIGH": $TickPriority
static readonly "LOW": $TickPriority
static readonly "NORMAL": $TickPriority
static readonly "VERY_HIGH": $TickPriority
static readonly "VERY_LOW": $TickPriority

public static "byValue"(int0: integer): $TickPriority
public "getValue"(): integer
public static "valueOf"(string0: string): $TickPriority
public static "values"(): $TickPriority[]
get "value"(): integer
}
}

declare module "net.minecraft.world.ticks.ContainerSingleItem" {
import { $BlockContainerJS } from "dev.latvian.mods.kubejs.level.BlockContainerJS"
import { $List } from "java.util.List"
import { $Container, $Container$$Type } from "net.minecraft.world.Container"
import { $Predicate$$Type } from "java.util.function.Predicate"
import { $Item$$Type } from "net.minecraft.world.item.Item"
import { $Set$$Type } from "java.util.Set"
import { $ItemStack, $ItemStack$$Type } from "net.minecraft.world.item.ItemStack"
import { $Level$$Type } from "net.minecraft.world.level.Level"
import { $BlockEntity$$Type } from "net.minecraft.world.level.block.entity.BlockEntity"
import { $Ingredient$$Type } from "net.minecraft.world.item.crafting.Ingredient"
import { $Player$$Type } from "net.minecraft.world.entity.player.Player"

export interface $ContainerSingleItem extends $Container {
"asContainer"(): $Container
"canPlaceItem"(int0: integer, itemStack1: $ItemStack$$Type): boolean
"canTakeItem"(container0: $Container$$Type, int1: integer, itemStack2: $ItemStack$$Type): boolean
"clear"(): void
"clear"(ingredient: $Ingredient$$Type): void
"clearContent"(): void
"count"(): integer
"count"(ingredient: $Ingredient$$Type): integer
"countItem"(item0: $Item$$Type): integer
"countNonEmpty"(ingredient: $Ingredient$$Type): integer
"countNonEmpty"(): integer
"extractItem"(slot: integer, amount: integer, simulate: boolean): $ItemStack
"find"(): integer
"find"(ingredient: $Ingredient$$Type): integer
"getAllItems"(): $List<$ItemStack>
"getBlock"(level: $Level$$Type): $BlockContainerJS
"getContainerSize"(): integer
"getFirstItem"(): $ItemStack
"getHeight"(): integer
"getItem"(int0: integer): $ItemStack
"getMaxStackSize"(): integer
"getSlotLimit"(slot: integer): integer
"getSlots"(): integer
"getStackInSlot"(slot: integer): $ItemStack
"getWidth"(): integer
"hasAnyMatching"(predicate0: $Predicate$$Type<$ItemStack$$Type>): boolean
"hasAnyOf"(set0: $Set$$Type<$Item$$Type>): boolean
"insertItem"(slot: integer, stack: $ItemStack$$Type, simulate: boolean): $ItemStack
"insertItem"(stack: $ItemStack$$Type, simulate: boolean): $ItemStack
"isEmpty"(): boolean
"isEmpty"(): boolean
"isItemValid"(slot: integer, stack: $ItemStack$$Type): boolean
"isMutable"(): boolean
"kjs$self"(): $Container
"removeFirstItem"(): $ItemStack
"removeItem"(int0: integer, int1: integer): $ItemStack
"removeItemNoUpdate"(int0: integer): $ItemStack
"setChanged"(): void
"setChanged"(): void
"setFirstItem"(itemStack0: $ItemStack$$Type): void
"setItem"(int0: integer, itemStack1: $ItemStack$$Type): void
"setStackInSlot"(slot: integer, stack: $ItemStack$$Type): void
"startOpen"(player0: $Player$$Type): void
"stillValid"(player0: $Player$$Type): boolean
"stopOpen"(player0: $Player$$Type): void
get "allItems"(): $List<$ItemStack>
get "containerSize"(): integer
get "firstItem"(): $ItemStack
get "height"(): integer
get "maxStackSize"(): integer
get "slots"(): integer
get "width"(): integer
get "empty"(): boolean
get "empty"(): boolean
get "mutable"(): boolean
set "firstItem"(value: $ItemStack$$Type)
}

export namespace $ContainerSingleItem {
function stillValidBlockEntity(blockEntity0: $BlockEntity$$Type, player1: $Player$$Type): boolean
function stillValidBlockEntity(blockEntity0: $BlockEntity$$Type, player1: $Player$$Type, double2: double): boolean
function stillValidBlockEntity(blockEntity0: $BlockEntity$$Type, player1: $Player$$Type, int2: integer): boolean
function tryClear(object0: any): void
}
export abstract class $ContainerSingleItem$$Static implements $ContainerSingleItem {
static "stillValidBlockEntity"(blockEntity0: $BlockEntity$$Type, player1: $Player$$Type): boolean
static "stillValidBlockEntity"(blockEntity0: $BlockEntity$$Type, player1: $Player$$Type, double2: double): boolean
static "stillValidBlockEntity"(blockEntity0: $BlockEntity$$Type, player1: $Player$$Type, int2: integer): boolean
static "tryClear"(object0: any): void
}
}

declare module "net.minecraft.world.ticks.LevelChunkTicks" {
import { $ScheduledTick, $ScheduledTick$$Type } from "net.minecraft.world.ticks.ScheduledTick"
import { $TickContainerAccess } from "net.minecraft.world.ticks.TickContainerAccess"
import { $Predicate$$Type } from "java.util.function.Predicate"
import { $Function$$Type } from "java.util.function.Function"
import { $ChunkPos$$Type } from "net.minecraft.world.level.ChunkPos"
import { $List$$Type } from "java.util.List"
import { $Stream } from "java.util.stream.Stream"
import { $BlockPos$$Type } from "net.minecraft.core.BlockPos"
import { $BiConsumer$$Type } from "java.util.function.BiConsumer"
import { $Optional } from "java.util.Optional"
import { $SavedTick$$Type } from "net.minecraft.world.ticks.SavedTick"
import { $SerializableTickContainer } from "net.minecraft.world.ticks.SerializableTickContainer"
import { $ListTag, $ListTag$$Type } from "net.minecraft.nbt.ListTag"

export class $LevelChunkTicks<T = any> implements $SerializableTickContainer<T>, $TickContainerAccess<T> {
constructor()
constructor(list0: $List$$Type<$SavedTick$$Type<T>>)

public "count"(): integer
public "getAll"(): $Stream
public "hasScheduledTick"(blockPos0: $BlockPos$$Type, object1: any): boolean
public static "load"<T>(listTag0: $ListTag$$Type, function1: $Function$$Type<string, $Optional<T>>, chunkPos2: $ChunkPos$$Type): $LevelChunkTicks<T>
public "peek"(): $ScheduledTick
public "poll"(): $ScheduledTick
public "removeIf"(predicate0: $Predicate$$Type): void
public "save"(long0: long, function1: $Function$$Type): $ListTag
public "schedule"(scheduledTick0: $ScheduledTick$$Type): void
public "setOnTickAdded"(biConsumer0: $BiConsumer$$Type<$LevelChunkTicks$$Type<T>, $ScheduledTick$$Type<T>>): void
public "unpack"(long0: long): void
get "all"(): $Stream
set "onTickAdded"(value: $BiConsumer$$Type<$LevelChunkTicks$$Type<T>, $ScheduledTick$$Type<T>>)
}
}

