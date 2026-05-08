declare module "net.minecraft.advancements.critereon.ContextAwarePredicate" {
import { $JsonElement, $JsonElement$$Type } from "com.google.gson.JsonElement"
import { $SerializationContext$$Type } from "net.minecraft.advancements.critereon.SerializationContext"
import { $DeserializationContext$$Type } from "net.minecraft.advancements.critereon.DeserializationContext"
import { $LootContext, $LootContext$$Type } from "net.minecraft.world.level.storage.loot.LootContext"
import { $Predicate, $Predicate$$Type } from "java.util.function.Predicate"
import { $LootItemCondition$$Type } from "net.minecraft.world.level.storage.loot.predicates.LootItemCondition"
import { $LootContextParamSet$$Type } from "net.minecraft.world.level.storage.loot.parameters.LootContextParamSet"

export class $ContextAwarePredicate {
static readonly "ANY": $ContextAwarePredicate

public static "create"(...lootItemCondition0s: $LootItemCondition$$Type[]): $ContextAwarePredicate
public static "fromElement"(string0: string, deserializationContext1: $DeserializationContext$$Type, jsonElement2: $JsonElement$$Type, lootContextParamSet3: $LootContextParamSet$$Type): $ContextAwarePredicate
public "matches"(lootContext0: $LootContext$$Type): boolean
public "toJson"(serializationContext0: $SerializationContext$$Type): $JsonElement
public static "toJson"(contextAwarePredicate0s: $ContextAwarePredicate$$Type[], serializationContext1: $SerializationContext$$Type): $JsonElement
get "compositePredicates"(): $Predicate<$LootContext>
set "compositePredicates"(value: $Predicate$$Type<$LootContext$$Type>)
}
}

declare module "net.minecraft.advancements.CriterionTriggerInstance" {
import { $ResourceLocation } from "net.minecraft.resources.ResourceLocation"
import { $SerializationContext$$Type } from "net.minecraft.advancements.critereon.SerializationContext"
import { $JsonObject } from "com.google.gson.JsonObject"

export interface $CriterionTriggerInstance {
"getCriterion"(): $ResourceLocation
"serializeToJson"(serializationContext0: $SerializationContext$$Type): $JsonObject
get "criterion"(): $ResourceLocation
}

export namespace $CriterionTriggerInstance {
const probejs$$marker: never
}
export abstract class $CriterionTriggerInstance$$Static implements $CriterionTriggerInstance {
}
}

declare module "net.minecraft.advancements.CriterionTrigger$Listener" {
import { $CriterionTriggerInstance, $CriterionTriggerInstance$$Type } from "net.minecraft.advancements.CriterionTriggerInstance"
import { $PlayerAdvancements$$Type } from "net.minecraft.server.PlayerAdvancements"
import { $Advancement$$Type } from "net.minecraft.advancements.Advancement"

export class $CriterionTrigger$Listener<T extends $CriterionTriggerInstance = $CriterionTriggerInstance> {
constructor(t0: T, advancement1: $Advancement$$Type, string2: string)

public "getTriggerInstance"(): T
public "run"(playerAdvancements0: $PlayerAdvancements$$Type): void
get "triggerInstance"(): T
}
}

declare module "net.minecraft.advancements.DisplayInfo" {
import { $ResourceLocation, $ResourceLocation$$Type } from "net.minecraft.resources.ResourceLocation"
import { $FrameType, $FrameType$$Type } from "net.minecraft.advancements.FrameType"
import { $JsonElement } from "com.google.gson.JsonElement"
import { $JsonObject$$Type } from "com.google.gson.JsonObject"
import { $Component, $Component$$Type } from "net.minecraft.network.chat.Component"
import { $ItemStack, $ItemStack$$Type } from "net.minecraft.world.item.ItemStack"
import { $FriendlyByteBuf$$Type } from "net.minecraft.network.FriendlyByteBuf"
import { $DisplayInfoFTBL } from "dev.ftb.mods.ftblibrary.core.DisplayInfoFTBL"

export class $DisplayInfo implements $DisplayInfoFTBL {
constructor(itemStack0: $ItemStack$$Type, component1: $Component$$Type, component2: $Component$$Type, resourceLocation3: $ResourceLocation$$Type, frameType4: $FrameType$$Type, boolean5: boolean, boolean6: boolean, boolean7: boolean)

public static "fromJson"(jsonObject0: $JsonObject$$Type): $DisplayInfo
public static "fromNetwork"(friendlyByteBuf0: $FriendlyByteBuf$$Type): $DisplayInfo
public "getBackground"(): $ResourceLocation
public "getDescription"(): $Component
public "getFrame"(): $FrameType
public "getIcon"(): $ItemStack
public "getTitle"(): $Component
public "getX"(): float
public "getY"(): float
public "isHidden"(): boolean
public "serializeToJson"(): $JsonElement
public "serializeToNetwork"(friendlyByteBuf0: $FriendlyByteBuf$$Type): void
public "setLocation"(float0: float, float1: float): void
public "shouldAnnounceChat"(): boolean
public "shouldShowToast"(): boolean
get "background"(): $ResourceLocation
get "description"(): $Component
get "frame"(): $FrameType
get "icon"(): $ItemStack
get "title"(): $Component
get "x"(): float
get "y"(): float
get "hidden"(): boolean
}
}

declare module "net.minecraft.advancements.critereon.SerializationContext" {
import { $JsonElement } from "com.google.gson.JsonElement"
import { $LootItemCondition$$Type } from "net.minecraft.world.level.storage.loot.predicates.LootItemCondition"

export class $SerializationContext {
static readonly "INSTANCE": $SerializationContext

constructor()

public "serializeConditions"(lootItemCondition0s: $LootItemCondition$$Type[]): $JsonElement
}
}

declare module "net.minecraft.advancements.AdvancementList$Listener" {
import { $Advancement$$Type } from "net.minecraft.advancements.Advancement"

export interface $AdvancementList$Listener {
"onAddAdvancementRoot"(advancement0: $Advancement$$Type): void
"onAddAdvancementTask"(advancement0: $Advancement$$Type): void
"onAdvancementsCleared"(): void
"onRemoveAdvancementRoot"(advancement0: $Advancement$$Type): void
"onRemoveAdvancementTask"(advancement0: $Advancement$$Type): void
}

export namespace $AdvancementList$Listener {
const probejs$$marker: never
}
export abstract class $AdvancementList$Listener$$Static implements $AdvancementList$Listener {
}
}

declare module "net.minecraft.advancements.critereon.ItemPredicate" {
import { $ResourceLocation, $ResourceLocation$$Type } from "net.minecraft.resources.ResourceLocation"
import { $JsonObject, $JsonObject$$Type } from "com.google.gson.JsonObject"
import { $NbtPredicate$$Type } from "net.minecraft.advancements.critereon.NbtPredicate"
import { $Item, $Item$$Type } from "net.minecraft.world.item.Item"
import { $Set, $Set$$Type } from "java.util.Set"
import { $Function, $Function$$Type } from "java.util.function.Function"
import { $Potion$$Type } from "net.minecraft.world.item.alchemy.Potion"
import { $TagKey$$Type } from "net.minecraft.tags.TagKey"
import { $JsonElement, $JsonElement$$Type } from "com.google.gson.JsonElement"
import { $MinMaxBounds$Ints$$Type } from "net.minecraft.advancements.critereon.MinMaxBounds$Ints"
import { $EnchantmentPredicate$$Type } from "net.minecraft.advancements.critereon.EnchantmentPredicate"
import { $Map } from "java.util.Map"
import { $ItemStack$$Type } from "net.minecraft.world.item.ItemStack"

export class $ItemPredicate {
static readonly "ANY": $ItemPredicate

constructor(tagKey0: $TagKey$$Type<$Item$$Type>, set1: $Set$$Type<$Item$$Type>, ints2: $MinMaxBounds$Ints$$Type, ints3: $MinMaxBounds$Ints$$Type, enchantmentPredicate4s: $EnchantmentPredicate$$Type[], enchantmentPredicate5s: $EnchantmentPredicate$$Type[], potion6: $Potion$$Type, nbtPredicate7: $NbtPredicate$$Type)
constructor()

public static "fromJson"(jsonElement0: $JsonElement$$Type): $ItemPredicate
public static "fromJsonArray"(jsonElement0: $JsonElement$$Type): $ItemPredicate[]
public static "getPredicates"(): $Map<$ResourceLocation, $Function<$JsonObject, $ItemPredicate>>
public "matches"(itemStack0: $ItemStack$$Type): boolean
public static "register"(resourceLocation0: $ResourceLocation$$Type, function1: $Function$$Type<$JsonObject$$Type, $ItemPredicate>): void
public "serializeToJson"(): $JsonElement
get "items"(): $Set<$Item>
set "items"(value: $Set$$Type<$Item$$Type>)
}
}

declare module "net.minecraft.advancements.AdvancementProgress" {
import { $Date } from "java.util.Date"
import { $Map$$Type } from "java.util.Map"
import { $CriterionProgress } from "net.minecraft.advancements.CriterionProgress"
import { $Criterion$$Type } from "net.minecraft.advancements.Criterion"
import { $Comparable } from "java.lang.Comparable"
import { $FriendlyByteBuf$$Type } from "net.minecraft.network.FriendlyByteBuf"
import { $Iterable } from "java.lang.Iterable"

export class $AdvancementProgress implements $Comparable<$AdvancementProgress> {
constructor()

public "compareTo"(advancementProgress0: $AdvancementProgress$$Type): integer
public static "fromNetwork"(friendlyByteBuf0: $FriendlyByteBuf$$Type): $AdvancementProgress
public "getCompletedCriteria"(): $Iterable<string>
public "getCriterion"(string0: string): $CriterionProgress
public "getFirstProgressDate"(): $Date
public "getPercent"(): float
public "getProgressText"(): string
public "getRemainingCriteria"(): $Iterable<string>
public "grantProgress"(string0: string): boolean
public "hasProgress"(): boolean
public "isDone"(): boolean
public "revokeProgress"(string0: string): boolean
public "serializeToNetwork"(friendlyByteBuf0: $FriendlyByteBuf$$Type): void
public "update"(map0: $Map$$Type<string, $Criterion$$Type>, string1ss: string[][]): void
get "completedCriteria"(): $Iterable<string>
get "firstProgressDate"(): $Date
get "percent"(): float
get "progressText"(): string
get "remainingCriteria"(): $Iterable<string>
get "done"(): boolean
}
}

declare module "net.minecraft.advancements.FrameType" {
import { $Component } from "net.minecraft.network.chat.Component"
import { $Enum } from "java.lang.Enum"
import { $ChatFormatting } from "net.minecraft.ChatFormatting"

export class $FrameType extends $Enum<$FrameType> {
static readonly "CHALLENGE": $FrameType
static readonly "GOAL": $FrameType
static readonly "TASK": $FrameType

public static "byName"(string0: string): $FrameType
public "getChatColor"(): $ChatFormatting
public "getDisplayName"(): $Component
public "getName"(): string
public "getTexture"(): integer
public static "valueOf"(string0: string): $FrameType
public static "values"(): $FrameType[]
get "chatColor"(): $ChatFormatting
get "displayName"(): $Component
get "name"(): string
get "texture"(): integer
}
}

declare module "net.minecraft.advancements.AdvancementList" {
import { $ResourceLocation$$Type } from "net.minecraft.resources.ResourceLocation"
import { $AdvancementList$Listener$$Type } from "net.minecraft.advancements.AdvancementList$Listener"
import { $Advancement$Builder$$Type } from "net.minecraft.advancements.Advancement$Builder"
import { $Map$$Type } from "java.util.Map"
import { $Collection } from "java.util.Collection"
import { $Advancement } from "net.minecraft.advancements.Advancement"
import { $Set$$Type } from "java.util.Set"
import { $Iterable } from "java.lang.Iterable"

export class $AdvancementList {
constructor()

public "add"(map0: $Map$$Type<$ResourceLocation$$Type, $Advancement$Builder$$Type>): void
public "clear"(): void
public "get"(resourceLocation0: $ResourceLocation$$Type): $Advancement
public "getAllAdvancements"(): $Collection<$Advancement>
public "getRoots"(): $Iterable<$Advancement>
public "remove"(set0: $Set$$Type<$ResourceLocation$$Type>): void
public "setListener"(listener0: $AdvancementList$Listener$$Type): void
get "allAdvancements"(): $Collection<$Advancement>
get "roots"(): $Iterable<$Advancement>
set "listener"(value: $AdvancementList$Listener$$Type)
}
}

declare module "net.minecraft.advancements.Advancement$Builder" {
import { $ResourceLocation$$Type } from "net.minecraft.resources.ResourceLocation"
import { $AdvancementRewards$$Type } from "net.minecraft.advancements.AdvancementRewards"
import { $JsonObject, $JsonObject$$Type } from "com.google.gson.JsonObject"
import { $RequirementsStrategy$$Type } from "net.minecraft.advancements.RequirementsStrategy"
import { $Component$$Type } from "net.minecraft.network.chat.Component"
import { $Advancement, $Advancement$$Type } from "net.minecraft.advancements.Advancement"
import { $Criterion, $Criterion$$Type } from "net.minecraft.advancements.Criterion"
import { $AdvancementRewards$Builder$$Type } from "net.minecraft.advancements.AdvancementRewards$Builder"
import { $FriendlyByteBuf$$Type } from "net.minecraft.network.FriendlyByteBuf"
import { $Function$$Type } from "java.util.function.Function"
import { $ExistingFileHelper$$Type } from "net.minecraftforge.common.data.ExistingFileHelper"
import { $FrameType$$Type } from "net.minecraft.advancements.FrameType"
import { $Consumer$$Type } from "java.util.function.Consumer"
import { $DeserializationContext$$Type } from "net.minecraft.advancements.critereon.DeserializationContext"
import { $DisplayInfo$$Type } from "net.minecraft.advancements.DisplayInfo"
import { $CriterionTriggerInstance$$Type } from "net.minecraft.advancements.CriterionTriggerInstance"
import { $IForgeAdvancementBuilder } from "net.minecraftforge.common.extensions.IForgeAdvancementBuilder"
import { $ItemLike$$Type } from "net.minecraft.world.level.ItemLike"
import { $Map, $Map$$Type } from "java.util.Map"
import { $ItemStack$$Type } from "net.minecraft.world.item.ItemStack"
import { $ICondition$IContext$$Type } from "net.minecraftforge.common.crafting.conditions.ICondition$IContext"

export class $Advancement$Builder implements $IForgeAdvancementBuilder {
constructor(resourceLocation0: $ResourceLocation$$Type, displayInfo1: $DisplayInfo$$Type, advancementRewards2: $AdvancementRewards$$Type, map3: $Map$$Type<string, $Criterion$$Type>, string4ss: string[][], boolean5: boolean)
constructor(boolean0: boolean)

public "addCriterion"(string0: string, criterionTriggerInstance1: $CriterionTriggerInstance$$Type): $Advancement$Builder
public "addCriterion"(string0: string, criterion1: $Criterion$$Type): $Advancement$Builder
public static "advancement"(): $Advancement$Builder
public "build"(resourceLocation0: $ResourceLocation$$Type): $Advancement
public "canBuild"(function0: $Function$$Type<$ResourceLocation$$Type, $Advancement>): boolean
public "display"(itemStack0: $ItemStack$$Type, component1: $Component$$Type, component2: $Component$$Type, resourceLocation3: $ResourceLocation$$Type, frameType4: $FrameType$$Type, boolean5: boolean, boolean6: boolean, boolean7: boolean): $Advancement$Builder
public "display"(displayInfo0: $DisplayInfo$$Type): $Advancement$Builder
public "display"(itemLike0: $ItemLike$$Type, component1: $Component$$Type, component2: $Component$$Type, resourceLocation3: $ResourceLocation$$Type, frameType4: $FrameType$$Type, boolean5: boolean, boolean6: boolean, boolean7: boolean): $Advancement$Builder
/** @deprecated */
public static "fromJson"(jsonObject0: $JsonObject$$Type, deserializationContext1: $DeserializationContext$$Type): $Advancement$Builder
public static "fromJson"(jsonObject0: $JsonObject$$Type, deserializationContext1: $DeserializationContext$$Type, iContext2: $ICondition$IContext$$Type): $Advancement$Builder
public static "fromNetwork"(friendlyByteBuf0: $FriendlyByteBuf$$Type): $Advancement$Builder
public "getCriteria"(): $Map<string, $Criterion>
public "parent"(advancement0: $Advancement$$Type): $Advancement$Builder
public "parent"(resourceLocation0: $ResourceLocation$$Type): $Advancement$Builder
public static "recipeAdvancement"(): $Advancement$Builder
public "requirements"(string0ss: string[][]): $Advancement$Builder
public "requirements"(requirementsStrategy0: $RequirementsStrategy$$Type): $Advancement$Builder
public "rewards"(builder0: $AdvancementRewards$Builder$$Type): $Advancement$Builder
public "rewards"(advancementRewards0: $AdvancementRewards$$Type): $Advancement$Builder
public "save"(consumer0: $Consumer$$Type<$Advancement$$Type>, string1: string): $Advancement
public "save"(consumer0: $Consumer$$Type<$Advancement$$Type>, resourceLocation1: $ResourceLocation$$Type, existingFileHelper2: $ExistingFileHelper$$Type): $Advancement
public "serializeToJson"(): $JsonObject
public "serializeToNetwork"(friendlyByteBuf0: $FriendlyByteBuf$$Type): void
get "criteria"(): $Map<string, $Criterion>
set "criteria"(value: $Map$$Type<string, $Criterion$$Type>)
}
}

declare module "net.minecraft.advancements.critereon.DeserializationContext" {
import { $ResourceLocation, $ResourceLocation$$Type } from "net.minecraft.resources.ResourceLocation"
import { $JsonArray$$Type } from "com.google.gson.JsonArray"
import { $LootItemCondition } from "net.minecraft.world.level.storage.loot.predicates.LootItemCondition"
import { $LootContextParamSet$$Type } from "net.minecraft.world.level.storage.loot.parameters.LootContextParamSet"
import { $LootDataManager$$Type } from "net.minecraft.world.level.storage.loot.LootDataManager"

export class $DeserializationContext {
constructor(resourceLocation0: $ResourceLocation$$Type, lootDataManager1: $LootDataManager$$Type)

public "deserializeConditions"(jsonArray0: $JsonArray$$Type, string1: string, lootContextParamSet2: $LootContextParamSet$$Type): $LootItemCondition[]
public "getAdvancementId"(): $ResourceLocation
get "advancementId"(): $ResourceLocation
}
}

declare module "net.minecraft.advancements.critereon.StatePropertiesPredicate" {
import { $Consumer$$Type } from "java.util.function.Consumer"
import { $JsonElement, $JsonElement$$Type } from "com.google.gson.JsonElement"
import { $StateDefinition$$Type } from "net.minecraft.world.level.block.state.StateDefinition"
import { $StateHolder, $StateHolder$$Type } from "net.minecraft.world.level.block.state.StateHolder"
import { $StatePropertiesPredicateAccess } from "snownee.lychee.mixin.StatePropertiesPredicateAccess"
import { $FluidState$$Type } from "net.minecraft.world.level.material.FluidState"
import { $BlockState$$Type } from "net.minecraft.world.level.block.state.BlockState"

export class $StatePropertiesPredicate implements $StatePropertiesPredicateAccess {
static readonly "ANY": $StatePropertiesPredicate

public "checkState"(stateDefinition0: $StateDefinition$$Type<any, any>, consumer1: $Consumer$$Type<string>): void
public static "fromJson"(jsonElement0: $JsonElement$$Type): $StatePropertiesPredicate
public "matches"<S extends $StateHolder<any, S>>(stateDefinition0: $StateDefinition$$Type<any, S>, s1: S): boolean
public "matches"(fluidState0: $FluidState$$Type): boolean
public "matches"(blockState0: $BlockState$$Type): boolean
public "serializeToJson"(): $JsonElement
}
}

declare module "net.minecraft.advancements.critereon.EnterBlockTrigger$TriggerInstance" {
import { $BlockState$$Type } from "net.minecraft.world.level.block.state.BlockState"
import { $Block$$Type } from "net.minecraft.world.level.block.Block"
import { $ContextAwarePredicate$$Type } from "net.minecraft.advancements.critereon.ContextAwarePredicate"
import { $AbstractCriterionTriggerInstance } from "net.minecraft.advancements.critereon.AbstractCriterionTriggerInstance"
import { $StatePropertiesPredicate$$Type } from "net.minecraft.advancements.critereon.StatePropertiesPredicate"

export class $EnterBlockTrigger$TriggerInstance extends $AbstractCriterionTriggerInstance {
constructor(contextAwarePredicate0: $ContextAwarePredicate$$Type, block1: $Block$$Type, statePropertiesPredicate2: $StatePropertiesPredicate$$Type)

public static "entersBlock"(block0: $Block$$Type): $EnterBlockTrigger$TriggerInstance
public "matches"(blockState0: $BlockState$$Type): boolean
}
}

declare module "net.minecraft.advancements.critereon.SimpleCriterionTrigger" {
import { $ResourceLocation } from "net.minecraft.resources.ResourceLocation"
import { $JsonObject$$Type } from "com.google.gson.JsonObject"
import { $DeserializationContext$$Type } from "net.minecraft.advancements.critereon.DeserializationContext"
import { $PlayerAdvancements$$Type } from "net.minecraft.server.PlayerAdvancements"
import { $CriterionTrigger$Listener$$Type } from "net.minecraft.advancements.CriterionTrigger$Listener"
import { $AbstractCriterionTriggerInstance } from "net.minecraft.advancements.critereon.AbstractCriterionTriggerInstance"
import { $CriterionTrigger } from "net.minecraft.advancements.CriterionTrigger"

export class $SimpleCriterionTrigger<T extends $AbstractCriterionTriggerInstance = $AbstractCriterionTriggerInstance> implements $CriterionTrigger<T> {
constructor()

public "addPlayerListener"(playerAdvancements0: $PlayerAdvancements$$Type, listener1: $CriterionTrigger$Listener$$Type<T>): void
public "createInstance"(jsonObject0: $JsonObject$$Type, deserializationContext1: $DeserializationContext$$Type): T
public "getId"(): $ResourceLocation
public "removePlayerListener"(playerAdvancements0: $PlayerAdvancements$$Type, listener1: $CriterionTrigger$Listener$$Type<T>): void
public "removePlayerListeners"(playerAdvancements0: $PlayerAdvancements$$Type): void
get "id"(): $ResourceLocation
}
}

declare module "net.minecraft.advancements.critereon.EnchantmentPredicate" {
import { $Enchantment$$Type } from "net.minecraft.world.item.enchantment.Enchantment"
import { $JsonElement, $JsonElement$$Type } from "com.google.gson.JsonElement"
import { $MinMaxBounds$Ints$$Type } from "net.minecraft.advancements.critereon.MinMaxBounds$Ints"
import { $Map$$Type } from "java.util.Map"

export class $EnchantmentPredicate {
static readonly "ANY": $EnchantmentPredicate
static readonly "NONE": $EnchantmentPredicate[]

constructor()
constructor(enchantment0: $Enchantment$$Type, ints1: $MinMaxBounds$Ints$$Type)

public "containedIn"(map0: $Map$$Type<$Enchantment$$Type, integer>): boolean
public static "fromJson"(jsonElement0: $JsonElement$$Type): $EnchantmentPredicate
public static "fromJsonArray"(jsonElement0: $JsonElement$$Type): $EnchantmentPredicate[]
public "serializeToJson"(): $JsonElement
}
}

declare module "net.minecraft.advancements.CriterionTrigger" {
import { $ResourceLocation } from "net.minecraft.resources.ResourceLocation"
import { $JsonObject$$Type } from "com.google.gson.JsonObject"
import { $DeserializationContext$$Type } from "net.minecraft.advancements.critereon.DeserializationContext"
import { $CriterionTriggerInstance } from "net.minecraft.advancements.CriterionTriggerInstance"
import { $PlayerAdvancements$$Type } from "net.minecraft.server.PlayerAdvancements"
import { $CriterionTrigger$Listener$$Type } from "net.minecraft.advancements.CriterionTrigger$Listener"

export interface $CriterionTrigger<T extends $CriterionTriggerInstance = $CriterionTriggerInstance> {
"addPlayerListener"(playerAdvancements0: $PlayerAdvancements$$Type, listener1: $CriterionTrigger$Listener$$Type<T>): void
"createInstance"(jsonObject0: $JsonObject$$Type, deserializationContext1: $DeserializationContext$$Type): T
"getId"(): $ResourceLocation
"removePlayerListener"(playerAdvancements0: $PlayerAdvancements$$Type, listener1: $CriterionTrigger$Listener$$Type<T>): void
"removePlayerListeners"(playerAdvancements0: $PlayerAdvancements$$Type): void
get "id"(): $ResourceLocation
}

export namespace $CriterionTrigger {
const probejs$$marker: never
}
export abstract class $CriterionTrigger$$Static<T extends $CriterionTriggerInstance = $CriterionTriggerInstance> implements $CriterionTrigger<T> {
}
}

declare module "net.minecraft.advancements.critereon.AbstractCriterionTriggerInstance" {
import { $ResourceLocation, $ResourceLocation$$Type } from "net.minecraft.resources.ResourceLocation"
import { $SerializationContext$$Type } from "net.minecraft.advancements.critereon.SerializationContext"
import { $JsonObject } from "com.google.gson.JsonObject"
import { $CriterionTriggerInstance } from "net.minecraft.advancements.CriterionTriggerInstance"
import { $ContextAwarePredicate$$Type } from "net.minecraft.advancements.critereon.ContextAwarePredicate"

export class $AbstractCriterionTriggerInstance implements $CriterionTriggerInstance {
constructor(resourceLocation0: $ResourceLocation$$Type, contextAwarePredicate1: $ContextAwarePredicate$$Type)

public "getCriterion"(): $ResourceLocation
public "serializeToJson"(serializationContext0: $SerializationContext$$Type): $JsonObject
get "criterion"(): $ResourceLocation
}
}

declare module "net.minecraft.advancements.Advancement" {
import { $ResourceLocation, $ResourceLocation$$Type } from "net.minecraft.resources.ResourceLocation"
import { $AdvancementRewards, $AdvancementRewards$$Type } from "net.minecraft.advancements.AdvancementRewards"
import { $Advancement$Builder } from "net.minecraft.advancements.Advancement$Builder"
import { $DisplayInfo, $DisplayInfo$$Type } from "net.minecraft.advancements.DisplayInfo"
import { $Component } from "net.minecraft.network.chat.Component"
import { $Map, $Map$$Type } from "java.util.Map"
import { $Criterion, $Criterion$$Type } from "net.minecraft.advancements.Criterion"
import { $Iterable } from "java.lang.Iterable"

export class $Advancement {
constructor(resourceLocation0: $ResourceLocation$$Type, advancement1: $Advancement$$Type, displayInfo2: $DisplayInfo$$Type, advancementRewards3: $AdvancementRewards$$Type, map4: $Map$$Type<string, $Criterion$$Type>, string5ss: string[][], boolean6: boolean)

public "addChild"(advancement0: $Advancement$$Type): void
public "deconstruct"(): $Advancement$Builder
public "getChatComponent"(): $Component
public "getChildren"(): $Iterable<$Advancement>
public "getCriteria"(): $Map<string, $Criterion>
public "getDisplay"(): $DisplayInfo
public "getId"(): $ResourceLocation
public "getMaxCriteraRequired"(): integer
public "getParent"(): $Advancement
public "getRequirements"(): string[][]
public "getRewards"(): $AdvancementRewards
public "getRoot"(): $Advancement
public static "getRoot"(advancement0: $Advancement$$Type): $Advancement
public "sendsTelemetryEvent"(): boolean
get "criteria"(): $Map<string, $Criterion>
set "criteria"(value: $Map$$Type<string, $Criterion$$Type>)
get "requirements"(): string[][]
set "requirements"(value: string[][])
get "chatComponent"(): $Component
get "children"(): $Iterable<$Advancement>
get "display"(): $DisplayInfo
get "id"(): $ResourceLocation
get "maxCriteraRequired"(): integer
get "parent"(): $Advancement
get "rewards"(): $AdvancementRewards
get "root"(): $Advancement
}
}

declare module "net.minecraft.advancements.AdvancementRewards" {
import { $ResourceLocation, $ResourceLocation$$Type } from "net.minecraft.resources.ResourceLocation"
import { $JsonElement } from "com.google.gson.JsonElement"
import { $JsonObject$$Type } from "com.google.gson.JsonObject"
import { $ServerPlayer$$Type } from "net.minecraft.server.level.ServerPlayer"
import { $CommandFunction$CacheableFunction$$Type } from "net.minecraft.commands.CommandFunction$CacheableFunction"

export class $AdvancementRewards {
static readonly "EMPTY": $AdvancementRewards

constructor(int0: integer, resourceLocation1s: $ResourceLocation$$Type[], resourceLocation2s: $ResourceLocation$$Type[], cacheableFunction3: $CommandFunction$CacheableFunction$$Type)

public static "deserialize"(jsonObject0: $JsonObject$$Type): $AdvancementRewards
public "getRecipes"(): $ResourceLocation[]
public "grant"(serverPlayer0: $ServerPlayer$$Type): void
public "serializeToJson"(): $JsonElement
get "recipes"(): $ResourceLocation[]
}
}

declare module "net.minecraft.advancements.critereon.EntityPredicate" {
import { $JsonElement, $JsonElement$$Type } from "com.google.gson.JsonElement"
import { $ServerPlayer$$Type } from "net.minecraft.server.level.ServerPlayer"
import { $JsonObject$$Type } from "com.google.gson.JsonObject"
import { $Entity$$Type } from "net.minecraft.world.entity.Entity"
import { $DeserializationContext$$Type } from "net.minecraft.advancements.critereon.DeserializationContext"
import { $LootContext } from "net.minecraft.world.level.storage.loot.LootContext"
import { $Vec3$$Type } from "net.minecraft.world.phys.Vec3"
import { $ServerLevel$$Type } from "net.minecraft.server.level.ServerLevel"
import { $ContextAwarePredicate } from "net.minecraft.advancements.critereon.ContextAwarePredicate"

export class $EntityPredicate {
static readonly "ANY": $EntityPredicate

public static "createContext"(serverPlayer0: $ServerPlayer$$Type, entity1: $Entity$$Type): $LootContext
public static "fromJson"(jsonElement0: $JsonElement$$Type): $EntityPredicate
public static "fromJson"(jsonObject0: $JsonObject$$Type, string1: string, deserializationContext2: $DeserializationContext$$Type): $ContextAwarePredicate
public static "fromJsonArray"(jsonObject0: $JsonObject$$Type, string1: string, deserializationContext2: $DeserializationContext$$Type): $ContextAwarePredicate[]
public "matches"(serverLevel0: $ServerLevel$$Type, vec31: $Vec3$$Type, entity2: $Entity$$Type): boolean
public "matches"(serverPlayer0: $ServerPlayer$$Type, entity1: $Entity$$Type): boolean
public "serializeToJson"(): $JsonElement
public static "wrap"(entityPredicate0: $EntityPredicate$$Type): $ContextAwarePredicate
}
}

declare module "net.minecraft.advancements.critereon.InventoryChangeTrigger$TriggerInstance" {
import { $MinMaxBounds$Ints$$Type } from "net.minecraft.advancements.critereon.MinMaxBounds$Ints"
import { $ItemLike$$Type } from "net.minecraft.world.level.ItemLike"
import { $ItemStack$$Type } from "net.minecraft.world.item.ItemStack"
import { $Inventory$$Type } from "net.minecraft.world.entity.player.Inventory"
import { $ItemPredicate$$Type } from "net.minecraft.advancements.critereon.ItemPredicate"
import { $ContextAwarePredicate$$Type } from "net.minecraft.advancements.critereon.ContextAwarePredicate"
import { $AbstractCriterionTriggerInstance } from "net.minecraft.advancements.critereon.AbstractCriterionTriggerInstance"

export class $InventoryChangeTrigger$TriggerInstance extends $AbstractCriterionTriggerInstance {
constructor(contextAwarePredicate0: $ContextAwarePredicate$$Type, ints1: $MinMaxBounds$Ints$$Type, ints2: $MinMaxBounds$Ints$$Type, ints3: $MinMaxBounds$Ints$$Type, itemPredicate4s: $ItemPredicate$$Type[])

public static "hasItems"(...itemPredicate0s: $ItemPredicate$$Type[]): $InventoryChangeTrigger$TriggerInstance
public static "hasItems"(...itemLike0s: $ItemLike$$Type[]): $InventoryChangeTrigger$TriggerInstance
public "matches"(inventory0: $Inventory$$Type, itemStack1: $ItemStack$$Type, int2: integer, int3: integer, int4: integer): boolean
}
}

declare module "net.minecraft.advancements.Criterion" {
import { $JsonElement } from "com.google.gson.JsonElement"
import { $JsonObject$$Type } from "com.google.gson.JsonObject"
import { $DeserializationContext$$Type } from "net.minecraft.advancements.critereon.DeserializationContext"
import { $CriterionTriggerInstance, $CriterionTriggerInstance$$Type } from "net.minecraft.advancements.CriterionTriggerInstance"
import { $Map, $Map$$Type } from "java.util.Map"
import { $FriendlyByteBuf$$Type } from "net.minecraft.network.FriendlyByteBuf"

export class $Criterion {
constructor(criterionTriggerInstance0: $CriterionTriggerInstance$$Type)
constructor()

public static "criteriaFromJson"(jsonObject0: $JsonObject$$Type, deserializationContext1: $DeserializationContext$$Type): $Map<string, $Criterion>
public static "criteriaFromNetwork"(friendlyByteBuf0: $FriendlyByteBuf$$Type): $Map<string, $Criterion>
public static "criterionFromJson"(jsonObject0: $JsonObject$$Type, deserializationContext1: $DeserializationContext$$Type): $Criterion
public static "criterionFromNetwork"(friendlyByteBuf0: $FriendlyByteBuf$$Type): $Criterion
public "getTrigger"(): $CriterionTriggerInstance
public "serializeToJson"(): $JsonElement
public "serializeToNetwork"(friendlyByteBuf0: $FriendlyByteBuf$$Type): void
public static "serializeToNetwork"(map0: $Map$$Type<string, $Criterion$$Type>, friendlyByteBuf1: $FriendlyByteBuf$$Type): void
get "trigger"(): $CriterionTriggerInstance
}
}

declare module "net.minecraft.advancements.critereon.DistancePredicate" {
import { $JsonElement, $JsonElement$$Type } from "com.google.gson.JsonElement"
import { $MinMaxBounds$Doubles$$Type } from "net.minecraft.advancements.critereon.MinMaxBounds$Doubles"

export class $DistancePredicate {
static readonly "ANY": $DistancePredicate

constructor(doubles0: $MinMaxBounds$Doubles$$Type, doubles1: $MinMaxBounds$Doubles$$Type, doubles2: $MinMaxBounds$Doubles$$Type, doubles3: $MinMaxBounds$Doubles$$Type, doubles4: $MinMaxBounds$Doubles$$Type)

public static "absolute"(doubles0: $MinMaxBounds$Doubles$$Type): $DistancePredicate
public static "fromJson"(jsonElement0: $JsonElement$$Type): $DistancePredicate
public static "horizontal"(doubles0: $MinMaxBounds$Doubles$$Type): $DistancePredicate
public "matches"(double0: double, double1: double, double2: double, double3: double, double4: double, double5: double): boolean
public "serializeToJson"(): $JsonElement
public static "vertical"(doubles0: $MinMaxBounds$Doubles$$Type): $DistancePredicate
}
}

declare module "net.minecraft.advancements.CriterionProgress" {
import { $JsonElement } from "com.google.gson.JsonElement"
import { $Date } from "java.util.Date"
import { $FriendlyByteBuf$$Type } from "net.minecraft.network.FriendlyByteBuf"

export class $CriterionProgress {
constructor()

public static "fromJson"(string0: string): $CriterionProgress
public static "fromNetwork"(friendlyByteBuf0: $FriendlyByteBuf$$Type): $CriterionProgress
public "getObtained"(): $Date
public "grant"(): void
public "isDone"(): boolean
public "revoke"(): void
public "serializeToJson"(): $JsonElement
public "serializeToNetwork"(friendlyByteBuf0: $FriendlyByteBuf$$Type): void
get "obtained"(): $Date
get "done"(): boolean
}
}

declare module "net.minecraft.advancements.critereon.BlockPredicate" {
import { $TagKey$$Type } from "net.minecraft.tags.TagKey"
import { $JsonElement, $JsonElement$$Type } from "com.google.gson.JsonElement"
import { $NbtPredicate$$Type } from "net.minecraft.advancements.critereon.NbtPredicate"
import { $BlockPos$$Type } from "net.minecraft.core.BlockPos"
import { $Set$$Type } from "java.util.Set"
import { $BlockPredicateAccess } from "snownee.lychee.mixin.BlockPredicateAccess"
import { $Block$$Type } from "net.minecraft.world.level.block.Block"
import { $ServerLevel$$Type } from "net.minecraft.server.level.ServerLevel"
import { $StatePropertiesPredicate$$Type } from "net.minecraft.advancements.critereon.StatePropertiesPredicate"

export class $BlockPredicate implements $BlockPredicateAccess {
static readonly "ANY": $BlockPredicate

constructor(tagKey0: $TagKey$$Type<$Block$$Type>, set1: $Set$$Type<$Block$$Type>, statePropertiesPredicate2: $StatePropertiesPredicate$$Type, nbtPredicate3: $NbtPredicate$$Type)

public static "fromJson"(jsonElement0: $JsonElement$$Type): $BlockPredicate
public "matches"(serverLevel0: $ServerLevel$$Type, blockPos1: $BlockPos$$Type): boolean
public "serializeToJson"(): $JsonElement
}
}

declare module "net.minecraft.advancements.critereon.MinMaxBounds" {
import { $JsonElement } from "com.google.gson.JsonElement"
import { $SimpleCommandExceptionType } from "com.mojang.brigadier.exceptions.SimpleCommandExceptionType"

export class $MinMaxBounds<T extends number = number> {
static readonly "ERROR_EMPTY": $SimpleCommandExceptionType
static readonly "ERROR_SWAPPED": $SimpleCommandExceptionType

public "getMax"(): T
public "getMin"(): T
public "isAny"(): boolean
public "serializeToJson"(): $JsonElement
get "max"(): T
get "min"(): T
get "any"(): boolean
}
}

declare module "net.minecraft.advancements.RequirementsStrategy" {
import { $Collection$$Type } from "java.util.Collection"

export interface $RequirementsStrategy {
"createRequirements"(collection0: $Collection$$Type<string>): string[][]
}

export namespace $RequirementsStrategy {
const AND: $RequirementsStrategy
const OR: $RequirementsStrategy
}
export abstract class $RequirementsStrategy$$Static implements $RequirementsStrategy {
static readonly "AND": $RequirementsStrategy
static readonly "OR": $RequirementsStrategy

}
}

declare module "net.minecraft.advancements.critereon.NbtPredicate" {
import { $JsonElement, $JsonElement$$Type } from "com.google.gson.JsonElement"
import { $CompoundTag, $CompoundTag$$Type } from "net.minecraft.nbt.CompoundTag"
import { $Entity$$Type } from "net.minecraft.world.entity.Entity"
import { $Tag$$Type } from "net.minecraft.nbt.Tag"
import { $NbtPredicateAccess } from "snownee.lychee.mixin.NbtPredicateAccess"
import { $ItemStack$$Type } from "net.minecraft.world.item.ItemStack"

export class $NbtPredicate implements $NbtPredicateAccess {
static readonly "ANY": $NbtPredicate

constructor(compoundTag0: $CompoundTag$$Type)

public static "fromJson"(jsonElement0: $JsonElement$$Type): $NbtPredicate
public static "getEntityTagToCompare"(entity0: $Entity$$Type): $CompoundTag
public "matches"(itemStack0: $ItemStack$$Type): boolean
public "matches"(tag0: $Tag$$Type): boolean
public "matches"(entity0: $Entity$$Type): boolean
public "serializeToJson"(): $JsonElement
}
}

declare module "net.minecraft.advancements.AdvancementRewards$Builder" {
import { $ResourceLocation$$Type } from "net.minecraft.resources.ResourceLocation"
import { $AdvancementRewards } from "net.minecraft.advancements.AdvancementRewards"

export class $AdvancementRewards$Builder {
constructor()

public "addExperience"(int0: integer): $AdvancementRewards$Builder
public "addLootTable"(resourceLocation0: $ResourceLocation$$Type): $AdvancementRewards$Builder
public "addRecipe"(resourceLocation0: $ResourceLocation$$Type): $AdvancementRewards$Builder
public "build"(): $AdvancementRewards
public static "experience"(int0: integer): $AdvancementRewards$Builder
public static "function"(resourceLocation0: $ResourceLocation$$Type): $AdvancementRewards$Builder
public static "loot"(resourceLocation0: $ResourceLocation$$Type): $AdvancementRewards$Builder
public static "recipe"(resourceLocation0: $ResourceLocation$$Type): $AdvancementRewards$Builder
public "runs"(resourceLocation0: $ResourceLocation$$Type): $AdvancementRewards$Builder
}
}

declare module "net.minecraft.advancements.critereon.StatePropertiesPredicate$PropertyMatcher" {
import { $Consumer$$Type } from "java.util.function.Consumer"
import { $JsonElement } from "com.google.gson.JsonElement"
import { $StateDefinition$$Type } from "net.minecraft.world.level.block.state.StateDefinition"
import { $StateHolder, $StateHolder$$Type } from "net.minecraft.world.level.block.state.StateHolder"

export class $StatePropertiesPredicate$PropertyMatcher {
constructor(string0: string)

public "checkState"(stateDefinition0: $StateDefinition$$Type<any, any>, consumer1: $Consumer$$Type<string>): void
public "getName"(): string
public "match"<S extends $StateHolder<any, S>>(stateDefinition0: $StateDefinition$$Type<any, S>, s1: S): boolean
public "toJson"(): $JsonElement
get "name"(): string
}
}

declare module "net.minecraft.advancements.critereon.MinMaxBounds$Ints" {
import { $JsonElement$$Type } from "com.google.gson.JsonElement"
import { $MinMaxBounds } from "net.minecraft.advancements.critereon.MinMaxBounds"
import { $StringReader$$Type } from "com.mojang.brigadier.StringReader"
import { $IntsAccess } from "snownee.lychee.mixin.IntsAccess"
import { $Function$$Type } from "java.util.function.Function"

export class $MinMaxBounds$Ints extends $MinMaxBounds<integer> implements $IntsAccess {
static readonly "ANY": $MinMaxBounds$Ints

constructor(integer0: integer, integer1: integer)

public static "atLeast"(int0: integer): $MinMaxBounds$Ints
public static "atMost"(int0: integer): $MinMaxBounds$Ints
public static "between"(int0: integer, int1: integer): $MinMaxBounds$Ints
public static "exactly"(int0: integer): $MinMaxBounds$Ints
public static "fromJson"(jsonElement0: $JsonElement$$Type): $MinMaxBounds$Ints
public static "fromReader"(stringReader0: $StringReader$$Type, function1: $Function$$Type<integer, integer>): $MinMaxBounds$Ints
public static "fromReader"(stringReader0: $StringReader$$Type): $MinMaxBounds$Ints
public "matches"(int0: integer): boolean
public "matchesSqr"(long0: long): boolean
}
}

declare module "net.minecraft.advancements.critereon.MinMaxBounds$Doubles" {
import { $JsonElement$$Type } from "com.google.gson.JsonElement"
import { $DoublesAccess } from "snownee.lychee.mixin.DoublesAccess"
import { $MinMaxBounds } from "net.minecraft.advancements.critereon.MinMaxBounds"
import { $StringReader$$Type } from "com.mojang.brigadier.StringReader"
import { $Function$$Type } from "java.util.function.Function"

export class $MinMaxBounds$Doubles extends $MinMaxBounds<double> implements $DoublesAccess {
static readonly "ANY": $MinMaxBounds$Doubles

constructor(double0: double, double1: double)

public static "atLeast"(double0: double): $MinMaxBounds$Doubles
public static "atMost"(double0: double): $MinMaxBounds$Doubles
public static "between"(double0: double, double1: double): $MinMaxBounds$Doubles
public static "exactly"(double0: double): $MinMaxBounds$Doubles
public static "fromJson"(jsonElement0: $JsonElement$$Type): $MinMaxBounds$Doubles
public static "fromReader"(stringReader0: $StringReader$$Type, function1: $Function$$Type<double, double>): $MinMaxBounds$Doubles
public static "fromReader"(stringReader0: $StringReader$$Type): $MinMaxBounds$Doubles
public "matches"(double0: double): boolean
public "matchesSqr"(double0: double): boolean
}
}

