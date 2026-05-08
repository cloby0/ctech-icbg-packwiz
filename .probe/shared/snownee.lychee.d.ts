declare module "snownee.lychee.core.EmptyContainer" {
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

export class $EmptyContainer implements $Container {
constructor()

public "asContainer"(): $Container
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
public "extractItem"(slot: integer, amount: integer, simulate: boolean): $ItemStack
public "find"(): integer
public "find"(ingredient: $Ingredient$$Type): integer
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
public "removeItem"(int0: integer, int1: integer): $ItemStack
public "removeItemNoUpdate"(int0: integer): $ItemStack
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

declare module "snownee.lychee.random_block_ticking.RandomlyTickable" {
import { $Predicate$$Type } from "java.util.function.Predicate"
import { $BlockState$$Type } from "net.minecraft.world.level.block.state.BlockState"

export interface $RandomlyTickable {
"lychee$isTickable"(blockState0: $BlockState$$Type): boolean
"lychee$setTickable"(predicate0: $Predicate$$Type<$BlockState$$Type>): void
}

export namespace $RandomlyTickable {
const probejs$$marker: never
}
export abstract class $RandomlyTickable$$Static implements $RandomlyTickable {
}
}

declare module "snownee.lychee.core.input.ItemHolder" {
import { $Consumer$$Type } from "java.util.function.Consumer"
import { $ItemStack, $ItemStack$$Type } from "net.minecraft.world.item.ItemStack"

export class $ItemHolder {
constructor()

public "get"(): $ItemStack
public "replace"(itemStack0: $ItemStack$$Type, consumer1: $Consumer$$Type<$ItemStack$$Type>): $ItemHolder
public "split"(int0: integer, consumer1: $Consumer$$Type<$ItemStack$$Type>): $ItemHolder
}
}

declare module "snownee.lychee.mixin.LootParamsBuilderAccess" {
import { $Map } from "java.util.Map"
import { $LootContextParam } from "net.minecraft.world.level.storage.loot.parameters.LootContextParam"

export interface $LootParamsBuilderAccess {
"getParams"(): $Map<$LootContextParam<any>, any>
get "params"(): $Map<$LootContextParam<any>, any>
}

export namespace $LootParamsBuilderAccess {
const probejs$$marker: never
}
export abstract class $LootParamsBuilderAccess$$Static implements $LootParamsBuilderAccess {
}
}

declare module "snownee.lychee.mixin.GameRendererAccess" {
import { $Camera$$Type } from "net.minecraft.client.Camera"

export interface $GameRendererAccess {
"callGetFov"(camera0: $Camera$$Type, float1: float, boolean2: boolean): double
}

export namespace $GameRendererAccess {
const probejs$$marker: never
}
export abstract class $GameRendererAccess$$Static implements $GameRendererAccess {
}
}

declare module "snownee.lychee.mixin.PointedDripstoneBlockAccess" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $PointedDripstoneBlockAccess {
}

export namespace $PointedDripstoneBlockAccess {
const probejs$$marker: never
}
export abstract class $PointedDripstoneBlockAccess$$Static implements $PointedDripstoneBlockAccess {
}
}

declare module "snownee.lychee.mixin.NbtPredicateAccess" {
import { $CompoundTag } from "net.minecraft.nbt.CompoundTag"

export interface $NbtPredicateAccess {
"getTag"(): $CompoundTag
get "tag"(): $CompoundTag
}

export namespace $NbtPredicateAccess {
const probejs$$marker: never
}
export abstract class $NbtPredicateAccess$$Static implements $NbtPredicateAccess {
}
}

declare module "snownee.lychee.core.contextual.ContextualConditionType" {
import { $ResourceLocation } from "net.minecraft.resources.ResourceLocation"
import { $ContextualCondition, $ContextualCondition$$Type } from "snownee.lychee.core.contextual.ContextualCondition"
import { $JsonObject$$Type } from "com.google.gson.JsonObject"
import { $FriendlyByteBuf$$Type } from "net.minecraft.network.FriendlyByteBuf"

export class $ContextualConditionType<T extends $ContextualCondition = $ContextualCondition> {
constructor()

public "fromJson"(jsonObject0: $JsonObject$$Type): T
public "fromNetwork"(friendlyByteBuf0: $FriendlyByteBuf$$Type): T
public "getRegistryName"(): $ResourceLocation
public "toJson"(t0: T, jsonObject1: $JsonObject$$Type): void
public "toNetwork"(t0: T, friendlyByteBuf1: $FriendlyByteBuf$$Type): void
get "registryName"(): $ResourceLocation
}
}

declare module "snownee.lychee.util.json.JsonPointer" {
import { $JsonElement, $JsonElement$$Type } from "com.google.gson.JsonElement"
import { $List, $List$$Type } from "java.util.List"
import { $Collection$$Type } from "java.util.Collection"

export class $JsonPointer {
readonly "tokens": $List<string>

constructor(collection0: $Collection$$Type<string>)
constructor(string0: string)

public "append"(string0: string): $JsonPointer
public "find"(jsonElement0: $JsonElement$$Type): $JsonElement
public "getInt"(int0: integer): integer
public "getString"(int0: integer): string
public "isRoot"(): boolean
public "isSelfOrParentOf"(list0: $List$$Type<string>): boolean
public "parent"(): $JsonPointer
public "size"(): integer
get "root"(): boolean
}
}

declare module "snownee.lychee.mixin.StatePropertiesPredicateAccess" {
import { $List } from "java.util.List"
import { $StatePropertiesPredicate$PropertyMatcher } from "net.minecraft.advancements.critereon.StatePropertiesPredicate$PropertyMatcher"

export interface $StatePropertiesPredicateAccess {
"getProperties"(): $List<$StatePropertiesPredicate$PropertyMatcher>
get "properties"(): $List<$StatePropertiesPredicate$PropertyMatcher>
}

export namespace $StatePropertiesPredicateAccess {
const probejs$$marker: never
}
export abstract class $StatePropertiesPredicateAccess$$Static implements $StatePropertiesPredicateAccess {
}
}

declare module "snownee.lychee.core.recipe.ILycheeRecipe$NBTPatchContext" {
import { $JsonObject, $JsonObject$$Type } from "com.google.gson.JsonObject"
import { $Object2IntMap, $Object2IntMap$$Type } from "it.unimi.dsi.fastutil.objects.Object2IntMap"
import { $BiFunction$$Type } from "java.util.function.BiFunction"
import { $Record } from "java.lang.Record"
import { $ILycheeRecipe$$Type } from "snownee.lychee.core.recipe.ILycheeRecipe"
import { $Reference$$Type } from "snownee.lychee.core.Reference"
import { $JsonPointer, $JsonPointer$$Type } from "snownee.lychee.util.json.JsonPointer"
import { $IntCollection, $IntCollection$$Type } from "it.unimi.dsi.fastutil.ints.IntCollection"

export class $ILycheeRecipe$NBTPatchContext extends $Record {
constructor(template: $JsonObject$$Type, usedIndexes: $IntCollection$$Type, splits: $Object2IntMap$$Type<$JsonPointer$$Type>)

public "convertPath"(jsonPointer0: $JsonPointer$$Type, biFunction1: $BiFunction$$Type<string, string, string>): $JsonPointer
public "countTargets"(iLycheeRecipe0: $ILycheeRecipe$$Type<any>, jsonPointer1: $JsonPointer$$Type): integer
public "countTargets"(iLycheeRecipe0: $ILycheeRecipe$$Type<any>, reference1: $Reference$$Type): integer
public "splits"(): $Object2IntMap<$JsonPointer>
public "template"(): $JsonObject
public "usedIndexes"(): $IntCollection
}
}

declare module "snownee.lychee.core.input.ItemHolderCollection" {
import { $List } from "java.util.List"
import { $BitSet } from "java.util.BitSet"
import { $ItemStack, $ItemStack$$Type } from "net.minecraft.world.item.ItemStack"
import { $ItemHolder, $ItemHolder$$Type } from "snownee.lychee.core.input.ItemHolder"

export class $ItemHolderCollection {
static readonly "EMPTY": $ItemHolderCollection
readonly "ignoreConsumptionFlags": $BitSet
readonly "tempList": $List<$ItemStack>

constructor(...itemHolder0s: $ItemHolder$$Type[])

public "get"(int0: integer): $ItemHolder
public "postApply"(boolean0: boolean, int1: integer): integer
public "replace"(int0: integer, itemStack1: $ItemStack$$Type): $ItemHolder
public "size"(): integer
public "split"(int0: integer, int1: integer): $ItemHolder
}
}

declare module "snownee.lychee.core.contextual.CustomCondition" {
import { $JsonObject, $JsonObject$$Type } from "com.google.gson.JsonObject"
import { $ContextualCondition } from "snownee.lychee.core.contextual.ContextualCondition"
import { $Component$$Type } from "net.minecraft.network.chat.Component"
import { $BiFunction, $BiFunction$$Type } from "java.util.function.BiFunction"
import { $InteractionResult, $InteractionResult$$Type } from "net.minecraft.world.InteractionResult"
import { $ILycheeRecipe$$Type } from "snownee.lychee.core.recipe.ILycheeRecipe"
import { $MutableComponent, $MutableComponent$$Type } from "net.minecraft.network.chat.MutableComponent"
import { $Player, $Player$$Type } from "net.minecraft.world.entity.player.Player"
import { $LycheeContext$$Type } from "snownee.lychee.core.LycheeContext"
import { $List$$Type } from "java.util.List"
import { $CustomCondition$Test, $CustomCondition$Test$$Type } from "snownee.lychee.core.contextual.CustomCondition$Test"
import { $Level, $Level$$Type } from "net.minecraft.world.level.Level"
import { $ContextualConditionType } from "snownee.lychee.core.contextual.ContextualConditionType"

export class $CustomCondition implements $ContextualCondition {
readonly "data": $JsonObject

constructor(jsonObject0: $JsonObject$$Type)

public "appendTooltips"(list0: $List$$Type<$Component$$Type>, level1: $Level$$Type, player2: $Player$$Type, int3: integer, boolean4: boolean): void
public static "desc"(list0: $List$$Type<$Component$$Type>, interactionResult1: $InteractionResult$$Type, int2: integer, mutableComponent3: $MutableComponent$$Type): void
public "getDescription"(boolean0: boolean): $MutableComponent
public "getType"(): $ContextualConditionType<any>
public "makeDescriptionId"(boolean0: boolean): string
public static "parse"(jsonObject0: $JsonObject$$Type): $ContextualCondition
public "showingCount"(): integer
public "test"(iLycheeRecipe0: $ILycheeRecipe$$Type<any>, lycheeContext1: $LycheeContext$$Type, int2: integer): integer
public "testInTooltips"(level0: $Level$$Type, player1: $Player$$Type): $InteractionResult
public "toJson"(): $JsonObject
get "testFunc"(): $CustomCondition$Test
set "testFunc"(value: $CustomCondition$Test$$Type)
get "testInTooltipsFunc"(): $BiFunction<$Level, $Player, $InteractionResult>
set "testInTooltipsFunc"(value: $BiFunction$$Type<$Level$$Type, $Player$$Type, $InteractionResult$$Type>)
get "type"(): $ContextualConditionType<any>
}
}

declare module "snownee.lychee.mixin.BlockPredicateAccess" {
import { $TagKey } from "net.minecraft.tags.TagKey"
import { $NbtPredicate } from "net.minecraft.advancements.critereon.NbtPredicate"
import { $Set } from "java.util.Set"
import { $Block } from "net.minecraft.world.level.block.Block"
import { $StatePropertiesPredicate } from "net.minecraft.advancements.critereon.StatePropertiesPredicate"

export interface $BlockPredicateAccess {
"getBlocks"(): $Set<$Block>
"getNbt"(): $NbtPredicate
"getProperties"(): $StatePropertiesPredicate
"getTag"(): $TagKey<$Block>
get "blocks"(): $Set<$Block>
get "nbt"(): $NbtPredicate
get "properties"(): $StatePropertiesPredicate
get "tag"(): $TagKey<$Block>
}

export namespace $BlockPredicateAccess {
const probejs$$marker: never
}
export abstract class $BlockPredicateAccess$$Static implements $BlockPredicateAccess {
}
}

declare module "snownee.lychee.mixin.DoublesAccess" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $DoublesAccess {
}

export namespace $DoublesAccess {
const probejs$$marker: never
}
export abstract class $DoublesAccess$$Static implements $DoublesAccess {
}
}

declare module "snownee.lychee.core.contextual.ContextualCondition" {
import { $JsonObject, $JsonObject$$Type } from "com.google.gson.JsonObject"
import { $Component$$Type } from "net.minecraft.network.chat.Component"
import { $InteractionResult, $InteractionResult$$Type } from "net.minecraft.world.InteractionResult"
import { $ILycheeRecipe$$Type } from "snownee.lychee.core.recipe.ILycheeRecipe"
import { $MutableComponent, $MutableComponent$$Type } from "net.minecraft.network.chat.MutableComponent"
import { $Player$$Type } from "net.minecraft.world.entity.player.Player"
import { $LycheeContext$$Type } from "snownee.lychee.core.LycheeContext"
import { $List$$Type } from "java.util.List"
import { $Gson } from "com.google.gson.Gson"
import { $GsonContextImpl } from "snownee.lychee.util.GsonContextImpl"
import { $Level$$Type } from "net.minecraft.world.level.Level"
import { $ContextualConditionType } from "snownee.lychee.core.contextual.ContextualConditionType"

export interface $ContextualCondition {
"appendTooltips"(list0: $List$$Type<$Component$$Type>, level1: $Level$$Type, player2: $Player$$Type, int3: integer, boolean4: boolean): void
"getDescription"(boolean0: boolean): $MutableComponent
"getType"(): $ContextualConditionType<$ContextualCondition>
"makeDescriptionId"(boolean0: boolean): string
"showingCount"(): integer
"test"(iLycheeRecipe0: $ILycheeRecipe$$Type<any>, lycheeContext1: $LycheeContext$$Type, int2: integer): integer
"testInTooltips"(level0: $Level$$Type, player1: $Player$$Type): $InteractionResult
"toJson"(): $JsonObject
get "type"(): $ContextualConditionType<$ContextualCondition>
}

export namespace $ContextualCondition {
const gsonContext: $GsonContextImpl
const predicateGson: $Gson
function desc(list0: $List$$Type<$Component$$Type>, interactionResult1: $InteractionResult$$Type, int2: integer, mutableComponent3: $MutableComponent$$Type): void
function parse(jsonObject0: $JsonObject$$Type): $ContextualCondition
}
export abstract class $ContextualCondition$$Static implements $ContextualCondition {
static readonly "gsonContext": $GsonContextImpl
static readonly "predicateGson": $Gson

static "desc"(list0: $List$$Type<$Component$$Type>, interactionResult1: $InteractionResult$$Type, int2: integer, mutableComponent3: $MutableComponent$$Type): void
static "parse"(jsonObject0: $JsonObject$$Type): $ContextualCondition
}
}

declare module "snownee.lychee.core.recipe.ILycheeRecipe" {
import { $ResourceLocation } from "net.minecraft.resources.ResourceLocation"
import { $JsonObject$$Type } from "com.google.gson.JsonObject"
import { $ContextualHolder } from "snownee.lychee.core.contextual.ContextualHolder"
import { $BlockPredicate } from "net.minecraft.advancements.critereon.BlockPredicate"
import { $JsonPointer, $JsonPointer$$Type } from "snownee.lychee.util.json.JsonPointer"
import { $LycheeContext, $LycheeContext$$Type } from "snownee.lychee.core.LycheeContext"
import { $JsonElement } from "com.google.gson.JsonElement"
import { $List, $List$$Type } from "java.util.List"
import { $Stream, $Stream$$Type } from "java.util.stream.Stream"
import { $IntList } from "it.unimi.dsi.fastutil.ints.IntList"
import { $Map } from "java.util.Map"
import { $Reference$$Type } from "snownee.lychee.core.Reference"
import { $PostAction, $PostAction$$Type } from "snownee.lychee.core.post.PostAction"
import { $ILycheeRecipe$NBTPatchContext } from "snownee.lychee.core.recipe.ILycheeRecipe$NBTPatchContext"

export interface $ILycheeRecipe<C extends $LycheeContext = $LycheeContext> {
"applyPostActions"(lycheeContext0: $LycheeContext$$Type, int1: integer): C
"defaultItemPointer"(): $JsonPointer
"getActionGroups"(): $Map<$JsonPointer, $List<$PostAction>>
"getAllActions"(): $Stream<$PostAction>
"getBlockInputs"(): $List<$BlockPredicate>
"getBlockOutputs"(): $List<$BlockPredicate>
"getComment"(): string
"getContextualHolder"(): $ContextualHolder
"getItemIndexes"(jsonPointer0: $JsonPointer$$Type): $IntList
"getItemIndexes"(reference0: $Reference$$Type): $IntList
"getPostActions"(): $Stream<$PostAction>
"isActionPath"(jsonPointer0: $JsonPointer$$Type): boolean
"isUnstableContext"(): boolean
"lychee$getId"(): $ResourceLocation
"showInRecipeViewer"(): boolean
"showingActionsCount"(): integer
get "actionGroups"(): $Map<$JsonPointer, $List<$PostAction>>
get "allActions"(): $Stream<$PostAction>
get "blockInputs"(): $List<$BlockPredicate>
get "blockOutputs"(): $List<$BlockPredicate>
get "comment"(): string
get "contextualHolder"(): $ContextualHolder
get "postActions"(): $Stream<$PostAction>
get "unstableContext"(): boolean
}

export namespace $ILycheeRecipe {
const ITEM_IN: $JsonPointer
const ITEM_OUT: $JsonPointer
const POST: $JsonPointer
const RESULT: $JsonPointer
const patchContexts: $Map<$ResourceLocation, $ILycheeRecipe$NBTPatchContext>
function filterHidden(stream0: $Stream$$Type<$PostAction$$Type>): $Stream<$PostAction>
function processActionGroup(iLycheeRecipe0: $ILycheeRecipe$$Type<any>, jsonPointer1: $JsonPointer$$Type, list2: $List$$Type<$PostAction$$Type>, jsonObject3: $JsonObject$$Type): $JsonElement
function processActions(iLycheeRecipe0: $ILycheeRecipe$$Type<any>, jsonObject1: $JsonObject$$Type): void
}
export abstract class $ILycheeRecipe$$Static<C extends $LycheeContext = $LycheeContext> implements $ILycheeRecipe<C> {
static readonly "ITEM_IN": $JsonPointer
static readonly "ITEM_OUT": $JsonPointer
static readonly "POST": $JsonPointer
static readonly "RESULT": $JsonPointer
static readonly "patchContexts": $Map<$ResourceLocation, $ILycheeRecipe$NBTPatchContext>

static "filterHidden"(stream0: $Stream$$Type<$PostAction$$Type>): $Stream<$PostAction>
static "processActionGroup"(iLycheeRecipe0: $ILycheeRecipe$$Type<any>, jsonPointer1: $JsonPointer$$Type, list2: $List$$Type<$PostAction$$Type>, jsonObject3: $JsonObject$$Type): $JsonElement
static "processActions"(iLycheeRecipe0: $ILycheeRecipe$$Type<any>, jsonObject1: $JsonObject$$Type): void
}
}

declare module "snownee.lychee.core.post.PostActionType" {
import { $ResourceLocation } from "net.minecraft.resources.ResourceLocation"
import { $JsonObject$$Type } from "com.google.gson.JsonObject"
import { $FriendlyByteBuf$$Type } from "net.minecraft.network.FriendlyByteBuf"
import { $PostAction, $PostAction$$Type } from "snownee.lychee.core.post.PostAction"

export class $PostActionType<T extends $PostAction = $PostAction> {
constructor()

public "fromJson"(jsonObject0: $JsonObject$$Type): T
public "fromNetwork"(friendlyByteBuf0: $FriendlyByteBuf$$Type): T
public "getRegistryName"(): $ResourceLocation
public "toJson"(t0: T, jsonObject1: $JsonObject$$Type): void
public "toNetwork"(t0: T, friendlyByteBuf1: $FriendlyByteBuf$$Type): void
get "registryName"(): $ResourceLocation
}
}

declare module "snownee.lychee.core.post.CustomAction" {
import { $JsonObject, $JsonObject$$Type } from "com.google.gson.JsonObject"
import { $PostAction } from "snownee.lychee.core.post.PostAction"
import { $CustomAction$Apply, $CustomAction$Apply$$Type } from "snownee.lychee.core.post.CustomAction$Apply"

export class $CustomAction extends $PostAction {
readonly "data": $JsonObject

constructor(jsonObject0: $JsonObject$$Type)

get "applyFunc"(): $CustomAction$Apply
set "applyFunc"(value: $CustomAction$Apply$$Type)
get "canChangeContext"(): boolean
set "canChangeContext"(value: boolean)
get "canRepeat"(): boolean
set "canRepeat"(value: boolean)
}
}

declare module "snownee.lychee.block_crushing.LycheeFallingBlockEntity" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $LycheeFallingBlockEntity {
"lychee$anvilDamageChance"(float0: float): void
"lychee$cancelDrop"(): void
"lychee$matched"(): void
}

export namespace $LycheeFallingBlockEntity {
const probejs$$marker: never
}
export abstract class $LycheeFallingBlockEntity$$Static implements $LycheeFallingBlockEntity {
}
}

declare module "snownee.lychee.mixin.ShapedRecipeAccess" {
import { $CraftingContainer$$Type } from "net.minecraft.world.inventory.CraftingContainer"
import { $ItemStack } from "net.minecraft.world.item.ItemStack"

export interface $ShapedRecipeAccess {
"callMatches"(craftingContainer0: $CraftingContainer$$Type, int1: integer, int2: integer, boolean3: boolean): boolean
"getResult"(): $ItemStack
get "result"(): $ItemStack
}

export namespace $ShapedRecipeAccess {
const probejs$$marker: never
}
export abstract class $ShapedRecipeAccess$$Static implements $ShapedRecipeAccess {
}
}

declare module "snownee.lychee.LycheeLootContextParams" {
import { $BlockPos } from "net.minecraft.core.BlockPos"
import { $Direction } from "net.minecraft.core.Direction"
import { $Map } from "java.util.Map"
import { $LootContextParam } from "net.minecraft.world.level.storage.loot.parameters.LootContextParam"

export class $LycheeLootContextParams {
static readonly "ALL": $Map<string, $LootContextParam<any>>
static readonly "BLOCK_POS": $LootContextParam<$BlockPos>
static readonly "DIRECTION": $LootContextParam<$Direction>

constructor()

public static "init"(): void
public static "trimRL"(string0: string): string
public static "trimRL"(string0: string, string1: string): string
}
}

declare module "snownee.lychee.core.post.Delay$LycheeMarker" {
import { $LycheeContext, $LycheeContext$$Type } from "snownee.lychee.core.LycheeContext"
import { $Marker } from "net.minecraft.world.entity.Marker"
import { $ILycheeRecipe$$Type } from "snownee.lychee.core.recipe.ILycheeRecipe"

export interface $Delay$LycheeMarker {
"getEntity"(): $Marker
"lychee$addDelay"(int0: integer): void
"lychee$getContext"(): $LycheeContext
"lychee$setContext"(iLycheeRecipe0: $ILycheeRecipe$$Type<any>, lycheeContext1: $LycheeContext$$Type): void
get "entity"(): $Marker
}

export namespace $Delay$LycheeMarker {
const probejs$$marker: never
}
export abstract class $Delay$LycheeMarker$$Static implements $Delay$LycheeMarker {
}
}

declare module "snownee.lychee.mixin.ItemEntityAccess" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $ItemEntityAccess {
"setHealth"(int0: integer): void
set "health"(value: integer)
}

export namespace $ItemEntityAccess {
const probejs$$marker: never
}
export abstract class $ItemEntityAccess$$Static implements $ItemEntityAccess {
}
}

declare module "snownee.lychee.mixin.ChunkMapAccess" {
import { $ChunkHolder } from "net.minecraft.server.level.ChunkHolder"
import { $Iterable } from "java.lang.Iterable"

export interface $ChunkMapAccess {
"callGetChunks"(): $Iterable<$ChunkHolder>
}

export namespace $ChunkMapAccess {
const probejs$$marker: never
}
export abstract class $ChunkMapAccess$$Static implements $ChunkMapAccess {
}
}

declare module "snownee.lychee.compat.kubejs.ClickedInfoBadgeEventJS" {
import { $ClientEventJS } from "dev.latvian.mods.kubejs.client.ClientEventJS"
import { $ILycheeRecipe, $ILycheeRecipe$$Type } from "snownee.lychee.core.recipe.ILycheeRecipe"

export class $ClickedInfoBadgeEventJS extends $ClientEventJS {
readonly "button": integer
readonly "recipe": $ILycheeRecipe<any>

constructor(iLycheeRecipe0: $ILycheeRecipe$$Type<any>, int1: integer)

}
}

declare module "snownee.lychee.core.LycheeContext" {
import { $JsonObject, $JsonObject$$Type } from "com.google.gson.JsonObject"
import { $Predicate$$Type } from "java.util.function.Predicate"
import { $Item$$Type } from "net.minecraft.world.item.Item"
import { $Set$$Type } from "java.util.Set"
import { $Delay$LycheeMarker$$Type } from "snownee.lychee.core.post.Delay$LycheeMarker"
import { $RandomSource } from "net.minecraft.util.RandomSource"
import { $BlockEntity$$Type } from "net.minecraft.world.level.block.entity.BlockEntity"
import { $ServerLevel } from "net.minecraft.server.level.ServerLevel"
import { $EmptyContainer } from "snownee.lychee.core.EmptyContainer"
import { $Ingredient$$Type } from "net.minecraft.world.item.crafting.Ingredient"
import { $Player$$Type } from "net.minecraft.world.entity.player.Player"
import { $ActionRuntime, $ActionRuntime$$Type } from "snownee.lychee.core.ActionRuntime"
import { $BlockContainerJS } from "dev.latvian.mods.kubejs.level.BlockContainerJS"
import { $List } from "java.util.List"
import { $Container, $Container$$Type } from "net.minecraft.world.Container"
import { $Stream$$Type } from "java.util.stream.Stream"
import { $LootContext } from "net.minecraft.world.level.storage.loot.LootContext"
import { $Map } from "java.util.Map"
import { $LootContextParam, $LootContextParam$$Type } from "net.minecraft.world.level.storage.loot.parameters.LootContextParam"
import { $ItemStack, $ItemStack$$Type } from "net.minecraft.world.item.ItemStack"
import { $Level, $Level$$Type } from "net.minecraft.world.level.Level"
import { $PostAction$$Type } from "snownee.lychee.core.post.PostAction"
import { $ItemHolderCollection, $ItemHolderCollection$$Type } from "snownee.lychee.core.input.ItemHolderCollection"

export class $LycheeContext extends $EmptyContainer {
public "asContainer"(): $Container
public "canPlaceItem"(int0: integer, itemStack1: $ItemStack$$Type): boolean
public "canTakeItem"(container0: $Container$$Type, int1: integer, itemStack2: $ItemStack$$Type): boolean
public "clear"(): void
public "clear"(ingredient: $Ingredient$$Type): void
public "copy"(): $LycheeContext
public "copyParams"(): $Map<$LootContextParam<any>, any>
public "count"(): integer
public "count"(ingredient: $Ingredient$$Type): integer
public "countItem"(item0: $Item$$Type): integer
public "countNonEmpty"(ingredient: $Ingredient$$Type): integer
public "countNonEmpty"(): integer
public "enqueueActions"(stream0: $Stream$$Type<$PostAction$$Type>, int1: integer, boolean2: boolean): void
public "extractItem"(slot: integer, amount: integer, simulate: boolean): $ItemStack
public "find"(): integer
public "find"(ingredient: $Ingredient$$Type): integer
public "getAllItems"(): $List<$ItemStack>
public "getBlock"(level: $Level$$Type): $BlockContainerJS
public "getHeight"(): integer
public "getLevel"(): $Level
public "getMaxStackSize"(): integer
public "getParam"<T>(lootContextParam0: $LootContextParam$$Type<T>): T
public "getParamOrNull"<T>(lootContextParam0: $LootContextParam$$Type<T>): T
public "getParams"(): $Map<$LootContextParam<any>, any>
public "getRandom"(): $RandomSource
public "getServerLevel"(): $ServerLevel
public "getSlotLimit"(slot: integer): integer
public "getSlots"(): integer
public "getStackInSlot"(slot: integer): $ItemStack
public "getWidth"(): integer
public "hasAnyMatching"(predicate0: $Predicate$$Type<$ItemStack$$Type>): boolean
public "hasAnyOf"(set0: $Set$$Type<$Item$$Type>): boolean
public "hasParam"(lootContextParam0: $LootContextParam$$Type<any>): boolean
public "insertItem"(slot: integer, stack: $ItemStack$$Type, simulate: boolean): $ItemStack
public "insertItem"(stack: $ItemStack$$Type, simulate: boolean): $ItemStack
public "isEmpty"(): boolean
public "isItemValid"(slot: integer, stack: $ItemStack$$Type): boolean
public "isMutable"(): boolean
public "kjs$self"(): $Container
public "lazyGetBlockEntity"(): void
public static "load"(jsonObject0: $JsonObject$$Type, lycheeMarker1: $Delay$LycheeMarker$$Type): $LycheeContext
public "removeParam"(lootContextParam0: $LootContextParam$$Type<any>): void
public "save"(): $JsonObject
public "setChanged"(): void
public "setParam"(lootContextParam0: $LootContextParam$$Type<any>, object1: any): void
public "setStackInSlot"(slot: integer, stack: $ItemStack$$Type): void
public "startOpen"(player0: $Player$$Type): void
public static "stillValidBlockEntity"(blockEntity0: $BlockEntity$$Type, player1: $Player$$Type): boolean
public static "stillValidBlockEntity"(blockEntity0: $BlockEntity$$Type, player1: $Player$$Type, double2: double): boolean
public static "stillValidBlockEntity"(blockEntity0: $BlockEntity$$Type, player1: $Player$$Type, int2: integer): boolean
public "stopOpen"(player0: $Player$$Type): void
public "toLootContext"(): $LootContext
public static "tryClear"(object0: any): void
get "itemHolders"(): $ItemHolderCollection
set "itemHolders"(value: $ItemHolderCollection$$Type)
get "json"(): $JsonObject
set "json"(value: $JsonObject$$Type)
get "runtime"(): $ActionRuntime
set "runtime"(value: $ActionRuntime$$Type)
get "allItems"(): $List<$ItemStack>
get "height"(): integer
get "level"(): $Level
get "maxStackSize"(): integer
get "params"(): $Map<$LootContextParam<any>, any>
get "random"(): $RandomSource
get "serverLevel"(): $ServerLevel
get "slots"(): integer
get "width"(): integer
get "empty"(): boolean
get "mutable"(): boolean
}
}

declare module "snownee.lychee.core.contextual.CustomCondition$Test" {
import { $LycheeContext$$Type } from "snownee.lychee.core.LycheeContext"
import { $ILycheeRecipe$$Type } from "snownee.lychee.core.recipe.ILycheeRecipe"

export interface $CustomCondition$Test {
"test"(iLycheeRecipe0: $ILycheeRecipe$$Type<any>, lycheeContext1: $LycheeContext$$Type, int2: integer): integer
}

export namespace $CustomCondition$Test {
const probejs$$marker: never
}
export abstract class $CustomCondition$Test$$Static implements $CustomCondition$Test {
}
}

declare module "snownee.lychee.mixin.CraftingMenuAccess" {
import { $ContainerLevelAccess } from "net.minecraft.world.inventory.ContainerLevelAccess"
import { $Player } from "net.minecraft.world.entity.player.Player"

export interface $CraftingMenuAccess {
"getAccess"(): $ContainerLevelAccess
"getPlayer"(): $Player
get "access"(): $ContainerLevelAccess
get "player"(): $Player
}

export namespace $CraftingMenuAccess {
const probejs$$marker: never
}
export abstract class $CraftingMenuAccess$$Static implements $CraftingMenuAccess {
}
}

declare module "snownee.lychee.core.recipe.LycheeCounter" {
import { $ResourceLocation, $ResourceLocation$$Type } from "net.minecraft.resources.ResourceLocation"
import { $Recipe$$Type } from "net.minecraft.world.item.crafting.Recipe"

export interface $LycheeCounter {
"lychee$getCount"(): integer
"lychee$getRecipeId"(): $ResourceLocation
"lychee$setCount"(int0: integer): void
"lychee$setRecipeId"(resourceLocation0: $ResourceLocation$$Type): void
"lychee$update"(resourceLocation0: $ResourceLocation$$Type, recipe1: $Recipe$$Type<any>): void
}

export namespace $LycheeCounter {
const probejs$$marker: never
}
export abstract class $LycheeCounter$$Static implements $LycheeCounter {
}
}

declare module "snownee.lychee.mixin.IntsAccess" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $IntsAccess {
}

export namespace $IntsAccess {
const probejs$$marker: never
}
export abstract class $IntsAccess$$Static implements $IntsAccess {
}
}

declare module "snownee.lychee.compat.kubejs.CustomActionEventJS" {
import { $CustomAction, $CustomAction$$Type } from "snownee.lychee.core.post.CustomAction"
import { $Map } from "java.util.Map"
import { $EventJS } from "dev.latvian.mods.kubejs.event.EventJS"
import { $ILycheeRecipe, $ILycheeRecipe$$Type } from "snownee.lychee.core.recipe.ILycheeRecipe"
import { $ILycheeRecipe$NBTPatchContext, $ILycheeRecipe$NBTPatchContext$$Type } from "snownee.lychee.core.recipe.ILycheeRecipe$NBTPatchContext"

export class $CustomActionEventJS extends $EventJS {
readonly "action": $CustomAction
readonly "data": $Map<any, any>
readonly "id": string
readonly "patchContext": $ILycheeRecipe$NBTPatchContext
readonly "recipe": $ILycheeRecipe<any>

constructor(string0: string, customAction1: $CustomAction$$Type, iLycheeRecipe2: $ILycheeRecipe$$Type<any>, nBTPatchContext3: $ILycheeRecipe$NBTPatchContext$$Type)

}
}

declare module "snownee.lychee.core.ActionRuntime" {
import { $LycheeContext$$Type } from "snownee.lychee.core.LycheeContext"
import { $Delay$LycheeMarker, $Delay$LycheeMarker$$Type } from "snownee.lychee.core.post.Delay$LycheeMarker"
import { $ILycheeRecipe$$Type } from "snownee.lychee.core.recipe.ILycheeRecipe"
import { $LinkedList } from "java.util.LinkedList"
import { $Job } from "snownee.lychee.core.Job"
import { $ActionRuntime$State, $ActionRuntime$State$$Type } from "snownee.lychee.core.ActionRuntime$State"

export class $ActionRuntime {
readonly "jobs": $LinkedList<$Job>

constructor()

public "run"(iLycheeRecipe0: $ILycheeRecipe$$Type<any>, lycheeContext1: $LycheeContext$$Type): void
get "doDefault"(): boolean
set "doDefault"(value: boolean)
get "marker"(): $Delay$LycheeMarker
set "marker"(value: $Delay$LycheeMarker$$Type)
get "state"(): $ActionRuntime$State
set "state"(value: $ActionRuntime$State$$Type)
}
}

declare module "snownee.lychee.core.post.CustomAction$Apply" {
import { $LycheeContext$$Type } from "snownee.lychee.core.LycheeContext"
import { $ILycheeRecipe$$Type } from "snownee.lychee.core.recipe.ILycheeRecipe"

export interface $CustomAction$Apply {
"apply"(iLycheeRecipe0: $ILycheeRecipe$$Type<any>, lycheeContext1: $LycheeContext$$Type, int2: integer): void
}

export namespace $CustomAction$Apply {
const probejs$$marker: never
}
export abstract class $CustomAction$Apply$$Static implements $CustomAction$Apply {
}
}

declare module "snownee.lychee.core.Job" {
import { $LycheeContext$$Type } from "snownee.lychee.core.LycheeContext"
import { $ILycheeRecipe$$Type } from "snownee.lychee.core.recipe.ILycheeRecipe"
import { $PostAction, $PostAction$$Type } from "snownee.lychee.core.post.PostAction"

export class $Job {
constructor(postAction0: $PostAction$$Type, int1: integer)

public "apply"(iLycheeRecipe0: $ILycheeRecipe$$Type<any>, lycheeContext1: $LycheeContext$$Type): void
get "action"(): $PostAction
set "action"(value: $PostAction$$Type)
get "times"(): integer
set "times"(value: integer)
}
}

declare module "snownee.lychee.mixin.RecipeManagerAccess" {
import { $ResourceLocation } from "net.minecraft.resources.ResourceLocation"
import { $Container, $Container$$Type } from "net.minecraft.world.Container"
import { $Recipe, $Recipe$$Type } from "net.minecraft.world.item.crafting.Recipe"
import { $Map } from "java.util.Map"
import { $RecipeType$$Type } from "net.minecraft.world.item.crafting.RecipeType"

export interface $RecipeManagerAccess {
"callByType"<C extends $Container, T extends $Recipe<C>>(recipeType0: $RecipeType$$Type<T>): $Map<$ResourceLocation, $Recipe<C>>
}

export namespace $RecipeManagerAccess {
const probejs$$marker: never
}
export abstract class $RecipeManagerAccess$$Static implements $RecipeManagerAccess {
}
}

declare module "snownee.lychee.core.ActionRuntime$State" {
import { $Enum } from "java.lang.Enum"

export class $ActionRuntime$State extends $Enum<$ActionRuntime$State> {
static readonly "PAUSED": $ActionRuntime$State
static readonly "RUNNING": $ActionRuntime$State
static readonly "STOPPED": $ActionRuntime$State

public static "valueOf"(string0: string): $ActionRuntime$State
public static "values"(): $ActionRuntime$State[]
}
}

declare module "snownee.lychee.compat.kubejs.CustomConditionEventJS" {
import { $Map } from "java.util.Map"
import { $EventJS } from "dev.latvian.mods.kubejs.event.EventJS"
import { $CustomCondition, $CustomCondition$$Type } from "snownee.lychee.core.contextual.CustomCondition"

export class $CustomConditionEventJS extends $EventJS {
readonly "condition": $CustomCondition
readonly "data": $Map<any, any>
readonly "id": string

constructor(string0: string, customCondition1: $CustomCondition$$Type)

}
}

declare module "snownee.lychee.core.contextual.ContextualHolder" {
import { $LycheeContext$$Type } from "snownee.lychee.core.LycheeContext"
import { $JsonElement, $JsonElement$$Type } from "com.google.gson.JsonElement"
import { $ContextualCondition, $ContextualCondition$$Type } from "snownee.lychee.core.contextual.ContextualCondition"
import { $List, $List$$Type } from "java.util.List"
import { $Component$$Type } from "net.minecraft.network.chat.Component"
import { $ILycheeRecipe$$Type } from "snownee.lychee.core.recipe.ILycheeRecipe"
import { $FriendlyByteBuf$$Type } from "net.minecraft.network.FriendlyByteBuf"
import { $Level$$Type } from "net.minecraft.world.level.Level"
import { $Player$$Type } from "net.minecraft.world.entity.player.Player"

export class $ContextualHolder {
constructor()

public "checkConditions"(iLycheeRecipe0: $ILycheeRecipe$$Type<any>, lycheeContext1: $LycheeContext$$Type, int2: integer): integer
public "conditionsFromNetwork"(friendlyByteBuf0: $FriendlyByteBuf$$Type): void
public "conditionsToNetwork"(friendlyByteBuf0: $FriendlyByteBuf$$Type): void
public "getConditionTooltips"(list0: $List$$Type<$Component$$Type>, int1: integer, level2: $Level$$Type, player3: $Player$$Type): void
public "getConditions"(): $List<$ContextualCondition>
public "isSecretCondition"(int0: integer): boolean
public "parseConditions"(jsonElement0: $JsonElement$$Type): void
public "rawConditionsToJson"(): $JsonElement
public "showingConditionsCount"(): integer
public "withCondition"(contextualCondition0: $ContextualCondition$$Type): void
get "conditions"(): $List<$ContextualCondition>
}
}

declare module "snownee.lychee.core.post.PostAction" {
import { $PostActionType } from "snownee.lychee.core.post.PostActionType"
import { $JsonObject, $JsonObject$$Type } from "com.google.gson.JsonObject"
import { $Component } from "net.minecraft.network.chat.Component"
import { $ContextualHolder } from "snownee.lychee.core.contextual.ContextualHolder"
import { $ILycheeRecipe$$Type } from "snownee.lychee.core.recipe.ILycheeRecipe"
import { $BlockPredicate } from "net.minecraft.advancements.critereon.BlockPredicate"
import { $JsonPointer$$Type } from "snownee.lychee.util.json.JsonPointer"
import { $FriendlyByteBuf$$Type } from "net.minecraft.network.FriendlyByteBuf"
import { $LycheeContext$$Type } from "snownee.lychee.core.LycheeContext"
import { $Consumer$$Type } from "java.util.function.Consumer"
import { $JsonElement, $JsonElement$$Type } from "com.google.gson.JsonElement"
import { $List } from "java.util.List"
import { $ItemStack } from "net.minecraft.world.item.ItemStack"
import { $ILycheeRecipe$NBTPatchContext$$Type } from "snownee.lychee.core.recipe.ILycheeRecipe$NBTPatchContext"

export class $PostAction extends $ContextualHolder {
constructor()

public "canChangeContext"(): boolean
public "canRepeat"(): boolean
public "doApply"(iLycheeRecipe0: $ILycheeRecipe$$Type<any>, lycheeContext1: $LycheeContext$$Type, int2: integer): void
public "getBlockOutputs"(): $List<$BlockPredicate>
public "getDisplayName"(): $Component
public "getItemOutputs"(): $List<$ItemStack>
public "getType"(): $PostActionType<any>
public "getUsedPointers"(iLycheeRecipe0: $ILycheeRecipe$$Type<any>, consumer1: $Consumer$$Type<$JsonPointer$$Type>): void
public "isHidden"(): boolean
public "onFailure"(iLycheeRecipe0: $ILycheeRecipe$$Type<any>, lycheeContext1: $LycheeContext$$Type, int2: integer): void
public static "parse"(jsonObject0: $JsonObject$$Type): $PostAction
public static "parseActions"(jsonElement0: $JsonElement$$Type, consumer1: $Consumer$$Type<$PostAction$$Type>): void
public "preApply"(iLycheeRecipe0: $ILycheeRecipe$$Type<any>, lycheeContext1: $LycheeContext$$Type, nBTPatchContext2: $ILycheeRecipe$NBTPatchContext$$Type): void
public "preventSync"(): boolean
public "provideJsonInfo"(iLycheeRecipe0: $ILycheeRecipe$$Type<any>, jsonPointer1: $JsonPointer$$Type, jsonObject2: $JsonObject$$Type): $JsonElement
public static "read"(friendlyByteBuf0: $FriendlyByteBuf$$Type): $PostAction
public "toJson"(): $JsonObject
public "validate"(iLycheeRecipe0: $ILycheeRecipe$$Type<any>, nBTPatchContext1: $ILycheeRecipe$NBTPatchContext$$Type): void
get "path"(): string
set "path"(value: string)
get "blockOutputs"(): $List<$BlockPredicate>
get "displayName"(): $Component
get "itemOutputs"(): $List<$ItemStack>
get "type"(): $PostActionType<any>
get "hidden"(): boolean
}
}

declare module "snownee.lychee.core.Reference" {
import { $JsonObject$$Type } from "com.google.gson.JsonObject"
import { $FriendlyByteBuf$$Type } from "net.minecraft.network.FriendlyByteBuf"
import { $JsonPointer } from "snownee.lychee.util.json.JsonPointer"

export class $Reference {
static readonly "DEFAULT": $Reference

constructor()

public static "create"(string0: string): $Reference
public static "fromJson"(jsonObject0: $JsonObject$$Type, string1: string): $Reference
public static "fromNetwork"(friendlyByteBuf0: $FriendlyByteBuf$$Type): $Reference
public "getPointer"(): $JsonPointer
public "isPointer"(): boolean
public static "toJson"(reference0: $Reference$$Type, jsonObject1: $JsonObject$$Type, string2: string): void
public static "toNetwork"(reference0: $Reference$$Type, friendlyByteBuf1: $FriendlyByteBuf$$Type): void
get "pointer"(): $JsonPointer
get "pointer"(): boolean
}
}

declare module "snownee.lychee.util.GsonContextImpl" {
import { $JsonElement, $JsonElement$$Type } from "com.google.gson.JsonElement"
import { $Type$$Type } from "java.lang.reflect.Type"
import { $Gson$$Type } from "com.google.gson.Gson"
import { $JsonSerializationContext } from "com.google.gson.JsonSerializationContext"
import { $JsonDeserializationContext } from "com.google.gson.JsonDeserializationContext"

export class $GsonContextImpl implements $JsonSerializationContext, $JsonDeserializationContext {
constructor(gson0: $Gson$$Type)

public "deserialize"<R>(jsonElement0: $JsonElement$$Type, type1: $Type$$Type): R
public "serialize"(object0: any, type1: $Type$$Type): $JsonElement
public "serialize"(object0: any): $JsonElement
}
}

