declare module "net.minecraft.world.Difficulty" {
import { $Enum, $Enum$$Type } from "java.lang.Enum"
import { $Component } from "net.minecraft.network.chat.Component"
import { $StringRepresentable, $StringRepresentable$$Type } from "net.minecraft.util.StringRepresentable"
import { $StringRepresentable$EnumCodec } from "net.minecraft.util.StringRepresentable$EnumCodec"
import { $Keyable } from "com.mojang.serialization.Keyable"
import { $Supplier$$Type } from "java.util.function.Supplier"
import { $Function$$Type } from "java.util.function.Function"

export class $Difficulty extends $Enum<$Difficulty> implements $StringRepresentable {
static readonly "CODEC": $StringRepresentable$EnumCodec<$Difficulty>
static readonly "EASY": $Difficulty
static readonly "HARD": $Difficulty
static readonly "NORMAL": $Difficulty
static readonly "PEACEFUL": $Difficulty

public static "byId"(int0: integer): $Difficulty
public static "byName"(string0: string): $Difficulty
public static "fromEnum"<E extends ($Enum<E> & $StringRepresentable)>(supplier0: $Supplier$$Type<E[]>): $StringRepresentable$EnumCodec<E>
public static "fromEnumWithMapping"<E extends ($Enum<E> & $StringRepresentable)>(supplier0: $Supplier$$Type<E[]>, function1: $Function$$Type<string, string>): $StringRepresentable$EnumCodec<E>
public "getDisplayName"(): $Component
public "getId"(): integer
public "getInfo"(): $Component
public "getKey"(): string
public "getSerializedName"(): string
public static "keys"(stringRepresentable0s: $StringRepresentable$$Type[]): $Keyable
public static "valueOf"(string0: string): $Difficulty
public static "values"(): $Difficulty[]
get "displayName"(): $Component
get "id"(): integer
get "info"(): $Component
get "key"(): string
get "serializedName"(): string
}
}

declare module "net.minecraft.world.InteractionResultHolder" {
import { $InteractionResult, $InteractionResult$$Type } from "net.minecraft.world.InteractionResult"

export class $InteractionResultHolder<T = any> {
constructor(interactionResult0: $InteractionResult$$Type, t1: T)

public static "consume"<T>(t0: T): $InteractionResultHolder<T>
public static "fail"<T>(t0: T): $InteractionResultHolder<T>
public "getObject"(): T
public "getResult"(): $InteractionResult
public static "pass"<T>(t0: T): $InteractionResultHolder<T>
public static "sidedSuccess"<T>(t0: T, boolean1: boolean): $InteractionResultHolder<T>
public static "success"<T>(t0: T): $InteractionResultHolder<T>
get "object"(): T
get "result"(): $InteractionResult
}
}

declare module "net.minecraft.world.RandomSequences" {
import { $ResourceLocation$$Type } from "net.minecraft.resources.ResourceLocation"
import { $CompoundTag$$Type } from "net.minecraft.nbt.CompoundTag"
import { $RandomSource } from "net.minecraft.util.RandomSource"
import { $SavedData } from "net.minecraft.world.level.saveddata.SavedData"

export class $RandomSequences extends $SavedData {
constructor(long0: long)

public "get"(resourceLocation0: $ResourceLocation$$Type): $RandomSource
public static "load"(long0: long, compoundTag1: $CompoundTag$$Type): $RandomSequences
}
}

declare module "net.minecraft.world.WorldlyContainerHolder" {
import { $WorldlyContainer } from "net.minecraft.world.WorldlyContainer"
import { $BlockPos$$Type } from "net.minecraft.core.BlockPos"
import { $BlockState$$Type } from "net.minecraft.world.level.block.state.BlockState"
import { $LevelAccessor$$Type } from "net.minecraft.world.level.LevelAccessor"

export interface $WorldlyContainerHolder {
"getContainer"(blockState0: $BlockState$$Type, levelAccessor1: $LevelAccessor$$Type, blockPos2: $BlockPos$$Type): $WorldlyContainer
}

export namespace $WorldlyContainerHolder {
const probejs$$marker: never
}
export abstract class $WorldlyContainerHolder$$Static implements $WorldlyContainerHolder {
}
}

declare module "net.minecraft.world.DifficultyInstance" {
import { $Difficulty, $Difficulty$$Type } from "net.minecraft.world.Difficulty"

export class $DifficultyInstance {
constructor(difficulty0: $Difficulty$$Type, long1: long, long2: long, float3: float)

public "getDifficulty"(): $Difficulty
public "getEffectiveDifficulty"(): float
public "getSpecialMultiplier"(): float
public "isHard"(): boolean
public "isHarderThan"(float0: float): boolean
get "difficulty"(): $Difficulty
get "effectiveDifficulty"(): float
get "specialMultiplier"(): float
get "hard"(): boolean
}
}

declare module "net.minecraft.world.SimpleContainer" {
import { $Predicate$$Type } from "java.util.function.Predicate"
import { $Item$$Type } from "net.minecraft.world.item.Item"
import { $StackedContents$$Type } from "net.minecraft.world.entity.player.StackedContents"
import { $StackedContentsCompatible } from "net.minecraft.world.inventory.StackedContentsCompatible"
import { $Set$$Type } from "java.util.Set"
import { $BlockEntity$$Type } from "net.minecraft.world.level.block.entity.BlockEntity"
import { $Ingredient$$Type } from "net.minecraft.world.item.crafting.Ingredient"
import { $Player$$Type } from "net.minecraft.world.entity.player.Player"
import { $BlockContainerJS } from "dev.latvian.mods.kubejs.level.BlockContainerJS"
import { $List } from "java.util.List"
import { $Container, $Container$$Type } from "net.minecraft.world.Container"
import { $SimpleContainerAccessor } from "fuzs.puzzleslib.mixin.accessor.SimpleContainerAccessor"
import { $ItemStack, $ItemStack$$Type } from "net.minecraft.world.item.ItemStack"
import { $Level$$Type } from "net.minecraft.world.level.Level"
import { $ListTag, $ListTag$$Type } from "net.minecraft.nbt.ListTag"
import { $ContainerListener$$Type } from "net.minecraft.world.ContainerListener"

export class $SimpleContainer implements $Container, $StackedContentsCompatible, $SimpleContainerAccessor {
constructor(int0: integer)
constructor(...itemStack0s: $ItemStack$$Type[])

public "addItem"(itemStack0: $ItemStack$$Type): $ItemStack
public "addListener"(containerListener0: $ContainerListener$$Type): void
public "asContainer"(): $Container
public "canAddItem"(itemStack0: $ItemStack$$Type): boolean
public "canPlaceItem"(int0: integer, itemStack1: $ItemStack$$Type): boolean
public "canTakeItem"(container0: $Container$$Type, int1: integer, itemStack2: $ItemStack$$Type): boolean
public "clear"(): void
public "clear"(ingredient: $Ingredient$$Type): void
public "clearContent"(): void
public "count"(): integer
public "count"(ingredient: $Ingredient$$Type): integer
public "countItem"(item0: $Item$$Type): integer
public "countNonEmpty"(ingredient: $Ingredient$$Type): integer
public "countNonEmpty"(): integer
public "createTag"(): $ListTag
public "extractItem"(slot: integer, amount: integer, simulate: boolean): $ItemStack
public "fillStackedContents"(stackedContents0: $StackedContents$$Type): void
public "find"(): integer
public "find"(ingredient: $Ingredient$$Type): integer
public "fromTag"(listTag0: $ListTag$$Type): void
public "getAllItems"(): $List<$ItemStack>
public "getBlock"(level: $Level$$Type): $BlockContainerJS
public "getContainerSize"(): integer
public "getHeight"(): integer
public "getItem"(int0: integer): $ItemStack
public "getMaxStackSize"(): integer
public "getSlotLimit"(slot: integer): integer
public "getSlots"(): integer
public "getStackInSlot"(slot: integer): $ItemStack
public "getWidth"(): integer
public "hasAnyMatching"(predicate0: $Predicate$$Type<$ItemStack$$Type>): boolean
public "hasAnyOf"(set0: $Set$$Type<$Item$$Type>): boolean
public "insertItem"(slot: integer, stack: $ItemStack$$Type, simulate: boolean): $ItemStack
public "insertItem"(stack: $ItemStack$$Type, simulate: boolean): $ItemStack
public "isEmpty"(): boolean
public "isEmpty"(): boolean
public "isItemValid"(slot: integer, stack: $ItemStack$$Type): boolean
public "isMutable"(): boolean
public "kjs$self"(): $Container
public "removeAllItems"(): $List<$ItemStack>
public "removeItem"(int0: integer, int1: integer): $ItemStack
public "removeItemNoUpdate"(int0: integer): $ItemStack
public "removeItemType"(item0: $Item$$Type, int1: integer): $ItemStack
public "removeListener"(containerListener0: $ContainerListener$$Type): void
public "setChanged"(): void
public "setChanged"(): void
public "setItem"(int0: integer, itemStack1: $ItemStack$$Type): void
public "setStackInSlot"(slot: integer, stack: $ItemStack$$Type): void
public "startOpen"(player0: $Player$$Type): void
public "stillValid"(player0: $Player$$Type): boolean
public static "stillValidBlockEntity"(blockEntity0: $BlockEntity$$Type, player1: $Player$$Type): boolean
public static "stillValidBlockEntity"(blockEntity0: $BlockEntity$$Type, player1: $Player$$Type, double2: double): boolean
public static "stillValidBlockEntity"(blockEntity0: $BlockEntity$$Type, player1: $Player$$Type, int2: integer): boolean
public "stopOpen"(player0: $Player$$Type): void
public static "tryClear"(object0: any): void
get "allItems"(): $List<$ItemStack>
get "containerSize"(): integer
get "height"(): integer
get "maxStackSize"(): integer
get "slots"(): integer
get "width"(): integer
get "empty"(): boolean
get "empty"(): boolean
get "mutable"(): boolean
}
}

declare module "net.minecraft.world.MenuProvider" {
import { $Component } from "net.minecraft.network.chat.Component"
import { $AbstractContainerMenu } from "net.minecraft.world.inventory.AbstractContainerMenu"
import { $Inventory$$Type } from "net.minecraft.world.entity.player.Inventory"
import { $MenuConstructor } from "net.minecraft.world.inventory.MenuConstructor"
import { $Player$$Type } from "net.minecraft.world.entity.player.Player"

export interface $MenuProvider extends $MenuConstructor {
"createMenu"(int0: integer, inventory1: $Inventory$$Type, player2: $Player$$Type): $AbstractContainerMenu
"getDisplayName"(): $Component
get "displayName"(): $Component
}

export namespace $MenuProvider {
const probejs$$marker: never
}
export abstract class $MenuProvider$$Static implements $MenuProvider {
}
}

declare module "net.minecraft.world.LockCode" {
import { $CompoundTag$$Type } from "net.minecraft.nbt.CompoundTag"
import { $ItemStack$$Type } from "net.minecraft.world.item.ItemStack"

export class $LockCode {
static readonly "NO_LOCK": $LockCode
static readonly "TAG_LOCK": string

constructor(string0: string)

public "addToTag"(compoundTag0: $CompoundTag$$Type): void
public static "fromTag"(compoundTag0: $CompoundTag$$Type): $LockCode
public "unlocksWith"(itemStack0: $ItemStack$$Type): boolean
}
}

declare module "net.minecraft.world.Container" {
import { $Predicate$$Type } from "java.util.function.Predicate"
import { $Item$$Type } from "net.minecraft.world.item.Item"
import { $InventoryKJS } from "dev.latvian.mods.kubejs.core.InventoryKJS"
import { $Set$$Type } from "java.util.Set"
import { $BlockEntity$$Type } from "net.minecraft.world.level.block.entity.BlockEntity"
import { $Ingredient$$Type } from "net.minecraft.world.item.crafting.Ingredient"
import { $Player$$Type } from "net.minecraft.world.entity.player.Player"
import { $BlockContainerJS } from "dev.latvian.mods.kubejs.level.BlockContainerJS"
import { $List } from "java.util.List"
import { $ItemStack, $ItemStack$$Type } from "net.minecraft.world.item.ItemStack"
import { $Level$$Type } from "net.minecraft.world.level.Level"
import { $Clearable } from "net.minecraft.world.Clearable"

export interface $Container extends $Clearable, $InventoryKJS {
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
"removeItem"(int0: integer, int1: integer): $ItemStack
"removeItemNoUpdate"(int0: integer): $ItemStack
"setChanged"(): void
"setChanged"(): void
"setItem"(int0: integer, itemStack1: $ItemStack$$Type): void
"setStackInSlot"(slot: integer, stack: $ItemStack$$Type): void
"startOpen"(player0: $Player$$Type): void
"stillValid"(player0: $Player$$Type): boolean
"stopOpen"(player0: $Player$$Type): void
get "allItems"(): $List<$ItemStack>
get "containerSize"(): integer
get "height"(): integer
get "maxStackSize"(): integer
get "slots"(): integer
get "width"(): integer
get "empty"(): boolean
get "empty"(): boolean
get "mutable"(): boolean
}

export namespace $Container {
const DEFAULT_DISTANCE_LIMIT: integer
const LARGE_MAX_STACK_SIZE: integer
function stillValidBlockEntity(blockEntity0: $BlockEntity$$Type, player1: $Player$$Type): boolean
function stillValidBlockEntity(blockEntity0: $BlockEntity$$Type, player1: $Player$$Type, double2: double): boolean
function stillValidBlockEntity(blockEntity0: $BlockEntity$$Type, player1: $Player$$Type, int2: integer): boolean
function tryClear(object0: any): void
}
export abstract class $Container$$Static implements $Container {
static readonly "DEFAULT_DISTANCE_LIMIT": integer
static readonly "LARGE_MAX_STACK_SIZE": integer

static "stillValidBlockEntity"(blockEntity0: $BlockEntity$$Type, player1: $Player$$Type): boolean
static "stillValidBlockEntity"(blockEntity0: $BlockEntity$$Type, player1: $Player$$Type, double2: double): boolean
static "stillValidBlockEntity"(blockEntity0: $BlockEntity$$Type, player1: $Player$$Type, int2: integer): boolean
static "tryClear"(object0: any): void
}
}

declare module "net.minecraft.world.InteractionResult" {
import { $Enum } from "java.lang.Enum"

export class $InteractionResult extends $Enum<$InteractionResult> {
static readonly "CONSUME": $InteractionResult
static readonly "CONSUME_PARTIAL": $InteractionResult
static readonly "FAIL": $InteractionResult
static readonly "PASS": $InteractionResult
static readonly "SUCCESS": $InteractionResult

public "consumesAction"(): boolean
public "shouldAwardStats"(): boolean
public "shouldSwing"(): boolean
public static "sidedSuccess"(boolean0: boolean): $InteractionResult
public static "valueOf"(string0: string): $InteractionResult
public static "values"(): $InteractionResult[]
}
}

declare module "net.minecraft.world.ContainerListener" {
import { $Container$$Type } from "net.minecraft.world.Container"

export interface $ContainerListener {
"containerChanged"(container0: $Container$$Type): void
}

export namespace $ContainerListener {
const probejs$$marker: never
}
export abstract class $ContainerListener$$Static implements $ContainerListener {
}
}

declare module "net.minecraft.world.BossEvent$BossBarColor" {
import { $Enum } from "java.lang.Enum"
import { $ChatFormatting } from "net.minecraft.ChatFormatting"

export class $BossEvent$BossBarColor extends $Enum<$BossEvent$BossBarColor> {
static readonly "BLUE": $BossEvent$BossBarColor
static readonly "GREEN": $BossEvent$BossBarColor
static readonly "PINK": $BossEvent$BossBarColor
static readonly "PURPLE": $BossEvent$BossBarColor
static readonly "RED": $BossEvent$BossBarColor
static readonly "WHITE": $BossEvent$BossBarColor
static readonly "YELLOW": $BossEvent$BossBarColor

public static "byName"(string0: string): $BossEvent$BossBarColor
public "getFormatting"(): $ChatFormatting
public "getName"(): string
public static "valueOf"(string0: string): $BossEvent$BossBarColor
public static "values"(): $BossEvent$BossBarColor[]
get "formatting"(): $ChatFormatting
get "name"(): string
}
}

declare module "net.minecraft.world.InteractionHand" {
import { $Enum } from "java.lang.Enum"

export class $InteractionHand extends $Enum<$InteractionHand> {
static readonly "MAIN_HAND": $InteractionHand
static readonly "OFF_HAND": $InteractionHand

public static "valueOf"(string0: string): $InteractionHand
public static "values"(): $InteractionHand[]
}
}

declare module "net.minecraft.world.Nameable" {
import { $Component } from "net.minecraft.network.chat.Component"

export interface $Nameable {
"getCustomName"(): $Component
"getDisplayName"(): $Component
"getName"(): $Component
"hasCustomName"(): boolean
get "customName"(): $Component
get "displayName"(): $Component
get "name"(): $Component
}

export namespace $Nameable {
const probejs$$marker: never
}
export abstract class $Nameable$$Static implements $Nameable {
}
}

declare module "net.minecraft.world.BossEvent" {
import { $BossEvent$BossBarOverlay, $BossEvent$BossBarOverlay$$Type } from "net.minecraft.world.BossEvent$BossBarOverlay"
import { $Component, $Component$$Type } from "net.minecraft.network.chat.Component"
import { $BossEvent$BossBarColor, $BossEvent$BossBarColor$$Type } from "net.minecraft.world.BossEvent$BossBarColor"
import { $UUID, $UUID$$Type } from "java.util.UUID"

export class $BossEvent {
constructor(uUID0: $UUID$$Type, component1: $Component$$Type, bossBarColor2: $BossEvent$BossBarColor$$Type, bossBarOverlay3: $BossEvent$BossBarOverlay$$Type)

public "getColor"(): $BossEvent$BossBarColor
public "getId"(): $UUID
public "getName"(): $Component
public "getOverlay"(): $BossEvent$BossBarOverlay
public "getProgress"(): float
public "setColor"(bossBarColor0: $BossEvent$BossBarColor$$Type): void
public "setCreateWorldFog"(boolean0: boolean): $BossEvent
public "setDarkenScreen"(boolean0: boolean): $BossEvent
public "setName"(component0: $Component$$Type): void
public "setOverlay"(bossBarOverlay0: $BossEvent$BossBarOverlay$$Type): void
public "setPlayBossMusic"(boolean0: boolean): $BossEvent
public "setProgress"(float0: float): void
public "shouldCreateWorldFog"(): boolean
public "shouldDarkenScreen"(): boolean
public "shouldPlayBossMusic"(): boolean
get "color"(): $BossEvent$BossBarColor
get "id"(): $UUID
get "name"(): $Component
get "overlay"(): $BossEvent$BossBarOverlay
get "progress"(): float
set "color"(value: $BossEvent$BossBarColor$$Type)
set "createWorldFog"(value: boolean)
set "darkenScreen"(value: boolean)
set "name"(value: $Component$$Type)
set "overlay"(value: $BossEvent$BossBarOverlay$$Type)
set "playBossMusic"(value: boolean)
set "progress"(value: float)
}
}

declare module "net.minecraft.world.BossEvent$BossBarOverlay" {
import { $Enum } from "java.lang.Enum"

export class $BossEvent$BossBarOverlay extends $Enum<$BossEvent$BossBarOverlay> {
static readonly "NOTCHED_10": $BossEvent$BossBarOverlay
static readonly "NOTCHED_12": $BossEvent$BossBarOverlay
static readonly "NOTCHED_20": $BossEvent$BossBarOverlay
static readonly "NOTCHED_6": $BossEvent$BossBarOverlay
static readonly "PROGRESS": $BossEvent$BossBarOverlay

public static "byName"(string0: string): $BossEvent$BossBarOverlay
public "getName"(): string
public static "valueOf"(string0: string): $BossEvent$BossBarOverlay
public static "values"(): $BossEvent$BossBarOverlay[]
get "name"(): string
}
}

declare module "net.minecraft.world.WorldlyContainer" {
import { $Direction$$Type } from "net.minecraft.core.Direction"
import { $Predicate$$Type } from "java.util.function.Predicate"
import { $Item$$Type } from "net.minecraft.world.item.Item"
import { $Set$$Type } from "java.util.Set"
import { $BlockEntity$$Type } from "net.minecraft.world.level.block.entity.BlockEntity"
import { $Ingredient$$Type } from "net.minecraft.world.item.crafting.Ingredient"
import { $Player$$Type } from "net.minecraft.world.entity.player.Player"
import { $BlockContainerJS } from "dev.latvian.mods.kubejs.level.BlockContainerJS"
import { $List } from "java.util.List"
import { $Container, $Container$$Type } from "net.minecraft.world.Container"
import { $ItemStack, $ItemStack$$Type } from "net.minecraft.world.item.ItemStack"
import { $Level$$Type } from "net.minecraft.world.level.Level"

export interface $WorldlyContainer extends $Container {
"asContainer"(): $Container
"canPlaceItem"(int0: integer, itemStack1: $ItemStack$$Type): boolean
"canPlaceItemThroughFace"(int0: integer, itemStack1: $ItemStack$$Type, direction2: $Direction$$Type): boolean
"canTakeItem"(container0: $Container$$Type, int1: integer, itemStack2: $ItemStack$$Type): boolean
"canTakeItemThroughFace"(int0: integer, itemStack1: $ItemStack$$Type, direction2: $Direction$$Type): boolean
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
"getHeight"(): integer
"getItem"(int0: integer): $ItemStack
"getMaxStackSize"(): integer
"getSlotLimit"(slot: integer): integer
"getSlots"(): integer
"getSlotsForFace"(direction0: $Direction$$Type): integer[]
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
"removeItem"(int0: integer, int1: integer): $ItemStack
"removeItemNoUpdate"(int0: integer): $ItemStack
"setChanged"(): void
"setChanged"(): void
"setItem"(int0: integer, itemStack1: $ItemStack$$Type): void
"setStackInSlot"(slot: integer, stack: $ItemStack$$Type): void
"startOpen"(player0: $Player$$Type): void
"stillValid"(player0: $Player$$Type): boolean
"stopOpen"(player0: $Player$$Type): void
get "allItems"(): $List<$ItemStack>
get "containerSize"(): integer
get "height"(): integer
get "maxStackSize"(): integer
get "slots"(): integer
get "width"(): integer
get "empty"(): boolean
get "empty"(): boolean
get "mutable"(): boolean
}

export namespace $WorldlyContainer {
function stillValidBlockEntity(blockEntity0: $BlockEntity$$Type, player1: $Player$$Type): boolean
function stillValidBlockEntity(blockEntity0: $BlockEntity$$Type, player1: $Player$$Type, double2: double): boolean
function stillValidBlockEntity(blockEntity0: $BlockEntity$$Type, player1: $Player$$Type, int2: integer): boolean
function tryClear(object0: any): void
}
export abstract class $WorldlyContainer$$Static implements $WorldlyContainer {
static "stillValidBlockEntity"(blockEntity0: $BlockEntity$$Type, player1: $Player$$Type): boolean
static "stillValidBlockEntity"(blockEntity0: $BlockEntity$$Type, player1: $Player$$Type, double2: double): boolean
static "stillValidBlockEntity"(blockEntity0: $BlockEntity$$Type, player1: $Player$$Type, int2: integer): boolean
static "tryClear"(object0: any): void
}
}

declare module "net.minecraft.world.Clearable" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $Clearable {
"clearContent"(): void
}

export namespace $Clearable {
function tryClear(object0: any): void
}
export abstract class $Clearable$$Static implements $Clearable {
static "tryClear"(object0: any): void
}
}

