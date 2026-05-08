declare module "dev.latvian.mods.kubejs.loot.GiftLootEventJS" {
import { $ResourceLocation$$Type } from "net.minecraft.resources.ResourceLocation"
import { $JsonElement$$Type } from "com.google.gson.JsonElement"
import { $Consumer$$Type } from "java.util.function.Consumer"
import { $LootEventJS } from "dev.latvian.mods.kubejs.loot.LootEventJS"
import { $Map$$Type } from "java.util.Map"
import { $LootBuilder$$Type } from "dev.latvian.mods.kubejs.loot.LootBuilder"

export class $GiftLootEventJS extends $LootEventJS {
constructor(c: $Map$$Type<$ResourceLocation$$Type, $JsonElement$$Type>)

public "addGift"(id: $ResourceLocation$$Type, b: $Consumer$$Type<$LootBuilder$$Type>): void
}
}

declare module "dev.latvian.mods.kubejs.loot.LootTableEntry" {
import { $ResourceLocation$$Type } from "net.minecraft.resources.ResourceLocation"
import { $JsonObject, $JsonObject$$Type } from "com.google.gson.JsonObject"
import { $CopyNameFunction$NameSource$$Type } from "net.minecraft.world.level.storage.loot.functions.CopyNameFunction$NameSource"
import { $Component$$Type } from "net.minecraft.network.chat.Component"
import { $ConditionalFunction$$Type } from "dev.latvian.mods.kubejs.loot.ConditionalFunction"
import { $LootContext$EntityTarget$$Type } from "net.minecraft.world.level.storage.loot.LootContext$EntityTarget"
import { $FunctionContainer } from "dev.latvian.mods.kubejs.loot.FunctionContainer"
import { $Consumer$$Type } from "java.util.function.Consumer"
import { $NumberProvider$$Type } from "net.minecraft.world.level.storage.loot.providers.number.NumberProvider"
import { $CompoundTag$$Type } from "net.minecraft.nbt.CompoundTag"
import { $Map$$Type } from "java.util.Map"
import { $ConditionContainer } from "dev.latvian.mods.kubejs.loot.ConditionContainer"

export class $LootTableEntry implements $FunctionContainer, $ConditionContainer {
readonly "json": $JsonObject

constructor(o: $JsonObject$$Type)

public "addCondition"(o: $JsonObject$$Type): $LootTableEntry
public "addConditionalFunction"(func: $Consumer$$Type<$ConditionalFunction$$Type>): $FunctionContainer
public "addFunction"(o: $JsonObject$$Type): $LootTableEntry
public "copyName"(source: $CopyNameFunction$NameSource$$Type): $FunctionContainer
public "count"(count: $NumberProvider$$Type): $FunctionContainer
public "damage"(damage: $NumberProvider$$Type): $FunctionContainer
public "enchantRandomly"(enchantments: $ResourceLocation$$Type[]): $FunctionContainer
public "enchantWithLevels"(levels: $NumberProvider$$Type, treasure: boolean): $FunctionContainer
public "entityProperties"(entity: $LootContext$EntityTarget$$Type, properties: $JsonObject$$Type): $ConditionContainer
public "entityScores"(entity: $LootContext$EntityTarget$$Type, scores: $Map$$Type<string, any>): $ConditionContainer
public "furnaceSmelt"(): $FunctionContainer
public "killedByPlayer"(): $ConditionContainer
public "lootTable"(table: $ResourceLocation$$Type, seed: long): $FunctionContainer
public "lootingEnchant"(count: $NumberProvider$$Type, limit: integer): $FunctionContainer
public "name"(name: $Component$$Type): $FunctionContainer
public "name"(name: $Component$$Type, entity: $LootContext$EntityTarget$$Type): $FunctionContainer
public "nbt"(tag: $CompoundTag$$Type): $FunctionContainer
public "quality"(quality: integer): $LootTableEntry
public "randomChance"(chance: double): $ConditionContainer
public "randomChanceWithLooting"(chance: double, multiplier: double): $ConditionContainer
public "survivesExplosion"(): $ConditionContainer
public "weight"(weight: integer): $LootTableEntry
}
}

declare module "dev.latvian.mods.kubejs.loot.LootBuilder" {
import { $ResourceLocation, $ResourceLocation$$Type } from "net.minecraft.resources.ResourceLocation"
import { $JsonObject, $JsonObject$$Type } from "com.google.gson.JsonObject"
import { $CopyNameFunction$NameSource$$Type } from "net.minecraft.world.level.storage.loot.functions.CopyNameFunction$NameSource"
import { $Component$$Type } from "net.minecraft.network.chat.Component"
import { $ConditionalFunction$$Type } from "dev.latvian.mods.kubejs.loot.ConditionalFunction"
import { $LootContext$EntityTarget$$Type } from "net.minecraft.world.level.storage.loot.LootContext$EntityTarget"
import { $FunctionContainer } from "dev.latvian.mods.kubejs.loot.FunctionContainer"
import { $LootBuilderPool$$Type } from "dev.latvian.mods.kubejs.loot.LootBuilderPool"
import { $JsonElement$$Type } from "com.google.gson.JsonElement"
import { $Consumer$$Type } from "java.util.function.Consumer"
import { $JsonArray, $JsonArray$$Type } from "com.google.gson.JsonArray"
import { $NumberProvider$$Type } from "net.minecraft.world.level.storage.loot.providers.number.NumberProvider"
import { $CompoundTag$$Type } from "net.minecraft.nbt.CompoundTag"
import { $Map$$Type } from "java.util.Map"
import { $ConditionContainer } from "dev.latvian.mods.kubejs.loot.ConditionContainer"

export class $LootBuilder implements $FunctionContainer, $ConditionContainer {
constructor(prev: $JsonElement$$Type)

public "addCondition"(o: $JsonObject$$Type): $LootBuilder
public "addConditionalFunction"(func: $Consumer$$Type<$ConditionalFunction$$Type>): $FunctionContainer
public "addFunction"(o: $JsonObject$$Type): $LootBuilder
public "addPool"(p: $Consumer$$Type<$LootBuilderPool$$Type>): void
public "clearConditions"(): void
public "clearFunctions"(): void
public "clearPools"(): void
public "copyName"(source: $CopyNameFunction$NameSource$$Type): $FunctionContainer
public "count"(count: $NumberProvider$$Type): $FunctionContainer
public "damage"(damage: $NumberProvider$$Type): $FunctionContainer
public "enchantRandomly"(enchantments: $ResourceLocation$$Type[]): $FunctionContainer
public "enchantWithLevels"(levels: $NumberProvider$$Type, treasure: boolean): $FunctionContainer
public "entityProperties"(entity: $LootContext$EntityTarget$$Type, properties: $JsonObject$$Type): $ConditionContainer
public "entityScores"(entity: $LootContext$EntityTarget$$Type, scores: $Map$$Type<string, any>): $ConditionContainer
public "furnaceSmelt"(): $FunctionContainer
public "killedByPlayer"(): $ConditionContainer
public "lootTable"(table: $ResourceLocation$$Type, seed: long): $FunctionContainer
public "lootingEnchant"(count: $NumberProvider$$Type, limit: integer): $FunctionContainer
public "name"(name: $Component$$Type): $FunctionContainer
public "name"(name: $Component$$Type, entity: $LootContext$EntityTarget$$Type): $FunctionContainer
public "nbt"(tag: $CompoundTag$$Type): $FunctionContainer
public "randomChance"(chance: double): $ConditionContainer
public "randomChanceWithLooting"(chance: double, multiplier: double): $ConditionContainer
public "survivesExplosion"(): $ConditionContainer
public "toJson"(): $JsonObject
get "conditions"(): $JsonArray
set "conditions"(value: $JsonArray$$Type)
get "customId"(): $ResourceLocation
set "customId"(value: $ResourceLocation$$Type)
get "functions"(): $JsonArray
set "functions"(value: $JsonArray$$Type)
get "pools"(): $JsonArray
set "pools"(value: $JsonArray$$Type)
get "type"(): string
set "type"(value: string)
}
}

declare module "dev.latvian.mods.kubejs.loot.BlockLootEventJS" {
import { $ResourceLocation$$Type } from "net.minecraft.resources.ResourceLocation"
import { $JsonElement$$Type } from "com.google.gson.JsonElement"
import { $Consumer$$Type } from "java.util.function.Consumer"
import { $LootEventJS } from "dev.latvian.mods.kubejs.loot.LootEventJS"
import { $Map$$Type } from "java.util.Map"
import { $ItemStack$$Type } from "net.minecraft.world.item.ItemStack"
import { $LootBuilder$$Type } from "dev.latvian.mods.kubejs.loot.LootBuilder"
import { $BlockStatePredicate$$Type } from "dev.latvian.mods.kubejs.block.state.BlockStatePredicate"

export class $BlockLootEventJS extends $LootEventJS {
constructor(c: $Map$$Type<$ResourceLocation$$Type, $JsonElement$$Type>)

public "addBlock"(blocks: $BlockStatePredicate$$Type, b: $Consumer$$Type<$LootBuilder$$Type>): void
public "addSimpleBlock"(blocks: $BlockStatePredicate$$Type): void
public "addSimpleBlock"(blocks: $BlockStatePredicate$$Type, item: $ItemStack$$Type): void
public "build"(blocks: $BlockStatePredicate$$Type, b: $Consumer$$Type<$LootBuilder$$Type>): void
public "modifyBlock"(blocks: $BlockStatePredicate$$Type, b: $Consumer$$Type<$LootBuilder$$Type>): void
}
}

declare module "dev.latvian.mods.kubejs.loot.ConditionalFunction" {
import { $ResourceLocation$$Type } from "net.minecraft.resources.ResourceLocation"
import { $JsonObject, $JsonObject$$Type } from "com.google.gson.JsonObject"
import { $CopyNameFunction$NameSource$$Type } from "net.minecraft.world.level.storage.loot.functions.CopyNameFunction$NameSource"
import { $Component$$Type } from "net.minecraft.network.chat.Component"
import { $LootContext$EntityTarget$$Type } from "net.minecraft.world.level.storage.loot.LootContext$EntityTarget"
import { $FunctionContainer } from "dev.latvian.mods.kubejs.loot.FunctionContainer"
import { $Consumer$$Type } from "java.util.function.Consumer"
import { $JsonArray, $JsonArray$$Type } from "com.google.gson.JsonArray"
import { $NumberProvider$$Type } from "net.minecraft.world.level.storage.loot.providers.number.NumberProvider"
import { $CompoundTag$$Type } from "net.minecraft.nbt.CompoundTag"
import { $Map$$Type } from "java.util.Map"
import { $ConditionContainer } from "dev.latvian.mods.kubejs.loot.ConditionContainer"

export class $ConditionalFunction implements $FunctionContainer, $ConditionContainer {
constructor()

public "addConditionalFunction"(func: $Consumer$$Type<$ConditionalFunction$$Type>): $FunctionContainer
public "copyName"(source: $CopyNameFunction$NameSource$$Type): $FunctionContainer
public "count"(count: $NumberProvider$$Type): $FunctionContainer
public "damage"(damage: $NumberProvider$$Type): $FunctionContainer
public "enchantRandomly"(enchantments: $ResourceLocation$$Type[]): $FunctionContainer
public "enchantWithLevels"(levels: $NumberProvider$$Type, treasure: boolean): $FunctionContainer
public "entityProperties"(entity: $LootContext$EntityTarget$$Type, properties: $JsonObject$$Type): $ConditionContainer
public "entityScores"(entity: $LootContext$EntityTarget$$Type, scores: $Map$$Type<string, any>): $ConditionContainer
public "furnaceSmelt"(): $FunctionContainer
public "killedByPlayer"(): $ConditionContainer
public "lootTable"(table: $ResourceLocation$$Type, seed: long): $FunctionContainer
public "lootingEnchant"(count: $NumberProvider$$Type, limit: integer): $FunctionContainer
public "name"(name: $Component$$Type): $FunctionContainer
public "name"(name: $Component$$Type, entity: $LootContext$EntityTarget$$Type): $FunctionContainer
public "nbt"(tag: $CompoundTag$$Type): $FunctionContainer
public "randomChance"(chance: double): $ConditionContainer
public "randomChanceWithLooting"(chance: double, multiplier: double): $ConditionContainer
public "survivesExplosion"(): $ConditionContainer
get "conditions"(): $JsonArray
set "conditions"(value: $JsonArray$$Type)
get "function"(): $JsonObject
set "function"(value: $JsonObject$$Type)
}
}

declare module "dev.latvian.mods.kubejs.loot.LootBuilderPool" {
import { $ResourceLocation$$Type } from "net.minecraft.resources.ResourceLocation"
import { $JsonObject, $JsonObject$$Type } from "com.google.gson.JsonObject"
import { $CopyNameFunction$NameSource$$Type } from "net.minecraft.world.level.storage.loot.functions.CopyNameFunction$NameSource"
import { $Component$$Type } from "net.minecraft.network.chat.Component"
import { $ConditionalFunction$$Type } from "dev.latvian.mods.kubejs.loot.ConditionalFunction"
import { $LootContext$EntityTarget$$Type } from "net.minecraft.world.level.storage.loot.LootContext$EntityTarget"
import { $FunctionContainer } from "dev.latvian.mods.kubejs.loot.FunctionContainer"
import { $Consumer$$Type } from "java.util.function.Consumer"
import { $LootTableEntry } from "dev.latvian.mods.kubejs.loot.LootTableEntry"
import { $JsonArray } from "com.google.gson.JsonArray"
import { $NumberProvider, $NumberProvider$$Type } from "net.minecraft.world.level.storage.loot.providers.number.NumberProvider"
import { $CompoundTag$$Type } from "net.minecraft.nbt.CompoundTag"
import { $Map$$Type } from "java.util.Map"
import { $ItemStack$$Type } from "net.minecraft.world.item.ItemStack"
import { $ConditionContainer } from "dev.latvian.mods.kubejs.loot.ConditionContainer"

export class $LootBuilderPool implements $FunctionContainer, $ConditionContainer {
readonly "conditions": $JsonArray
readonly "entries": $JsonArray
readonly "functions": $JsonArray

constructor()

public "addConditionalFunction"(func: $Consumer$$Type<$ConditionalFunction$$Type>): $FunctionContainer
public "addEmpty"(weight: integer): $LootTableEntry
public "addEntry"(json: $JsonObject$$Type): $LootTableEntry
public "addFunction"(o: $JsonObject$$Type): $LootBuilderPool
public "addItem"(item: $ItemStack$$Type): $LootTableEntry
public "addItem"(item: $ItemStack$$Type, weight: integer): $LootTableEntry
public "addItem"(item: $ItemStack$$Type, weight: integer, count: $NumberProvider$$Type): $LootTableEntry
public "addLootTable"(table: $ResourceLocation$$Type): $LootTableEntry
public "addTag"(tag: string, expand: boolean): $LootTableEntry
public "copyName"(source: $CopyNameFunction$NameSource$$Type): $FunctionContainer
public "count"(count: $NumberProvider$$Type): $FunctionContainer
public "damage"(damage: $NumberProvider$$Type): $FunctionContainer
public "enchantRandomly"(enchantments: $ResourceLocation$$Type[]): $FunctionContainer
public "enchantWithLevels"(levels: $NumberProvider$$Type, treasure: boolean): $FunctionContainer
public "entityProperties"(entity: $LootContext$EntityTarget$$Type, properties: $JsonObject$$Type): $ConditionContainer
public "entityScores"(entity: $LootContext$EntityTarget$$Type, scores: $Map$$Type<string, any>): $ConditionContainer
public "furnaceSmelt"(): $FunctionContainer
public "killedByPlayer"(): $ConditionContainer
public "lootTable"(table: $ResourceLocation$$Type, seed: long): $FunctionContainer
public "lootingEnchant"(count: $NumberProvider$$Type, limit: integer): $FunctionContainer
public "name"(name: $Component$$Type): $FunctionContainer
public "name"(name: $Component$$Type, entity: $LootContext$EntityTarget$$Type): $FunctionContainer
public "nbt"(tag: $CompoundTag$$Type): $FunctionContainer
public "randomChance"(chance: double): $ConditionContainer
public "randomChanceWithLooting"(chance: double, multiplier: double): $ConditionContainer
public "setBinomialRolls"(n: integer, p: float): void
public "setUniformRolls"(min: float, max: float): void
public "survivesExplosion"(): $ConditionContainer
public "toJson"(): $JsonObject
get "bonusRolls"(): $NumberProvider
set "bonusRolls"(value: $NumberProvider$$Type)
get "rolls"(): $NumberProvider
set "rolls"(value: $NumberProvider$$Type)
}
}

declare module "dev.latvian.mods.kubejs.loot.FishingLootEventJS" {
import { $ResourceLocation$$Type } from "net.minecraft.resources.ResourceLocation"
import { $JsonElement$$Type } from "com.google.gson.JsonElement"
import { $Consumer$$Type } from "java.util.function.Consumer"
import { $LootEventJS } from "dev.latvian.mods.kubejs.loot.LootEventJS"
import { $Map$$Type } from "java.util.Map"
import { $LootBuilder$$Type } from "dev.latvian.mods.kubejs.loot.LootBuilder"

export class $FishingLootEventJS extends $LootEventJS {
constructor(c: $Map$$Type<$ResourceLocation$$Type, $JsonElement$$Type>)

public "addFishing"(id: $ResourceLocation$$Type, b: $Consumer$$Type<$LootBuilder$$Type>): void
}
}

declare module "dev.latvian.mods.kubejs.loot.EntityLootEventJS" {
import { $ResourceLocation$$Type } from "net.minecraft.resources.ResourceLocation"
import { $JsonElement$$Type } from "com.google.gson.JsonElement"
import { $Consumer$$Type } from "java.util.function.Consumer"
import { $LootEventJS } from "dev.latvian.mods.kubejs.loot.LootEventJS"
import { $EntityType$$Type } from "net.minecraft.world.entity.EntityType"
import { $Map$$Type } from "java.util.Map"
import { $LootBuilder$$Type } from "dev.latvian.mods.kubejs.loot.LootBuilder"

export class $EntityLootEventJS extends $LootEventJS {
constructor(c: $Map$$Type<$ResourceLocation$$Type, $JsonElement$$Type>)

public "addEntity"(type: $EntityType$$Type<any>, b: $Consumer$$Type<$LootBuilder$$Type>): void
public "modifyEntity"(type: $EntityType$$Type<any>, b: $Consumer$$Type<$LootBuilder$$Type>): void
}
}

declare module "dev.latvian.mods.kubejs.loot.ChestLootEventJS" {
import { $ResourceLocation$$Type } from "net.minecraft.resources.ResourceLocation"
import { $JsonElement$$Type } from "com.google.gson.JsonElement"
import { $Consumer$$Type } from "java.util.function.Consumer"
import { $LootEventJS } from "dev.latvian.mods.kubejs.loot.LootEventJS"
import { $Map$$Type } from "java.util.Map"
import { $LootBuilder$$Type } from "dev.latvian.mods.kubejs.loot.LootBuilder"

export class $ChestLootEventJS extends $LootEventJS {
constructor(c: $Map$$Type<$ResourceLocation$$Type, $JsonElement$$Type>)

public "addChest"(id: $ResourceLocation$$Type, b: $Consumer$$Type<$LootBuilder$$Type>): void
}
}

declare module "dev.latvian.mods.kubejs.loot.GenericLootEventJS" {
import { $ResourceLocation$$Type } from "net.minecraft.resources.ResourceLocation"
import { $JsonElement$$Type } from "com.google.gson.JsonElement"
import { $Consumer$$Type } from "java.util.function.Consumer"
import { $LootEventJS } from "dev.latvian.mods.kubejs.loot.LootEventJS"
import { $Map$$Type } from "java.util.Map"
import { $LootBuilder$$Type } from "dev.latvian.mods.kubejs.loot.LootBuilder"

export class $GenericLootEventJS extends $LootEventJS {
constructor(c: $Map$$Type<$ResourceLocation$$Type, $JsonElement$$Type>)

public "addGeneric"(id: $ResourceLocation$$Type, b: $Consumer$$Type<$LootBuilder$$Type>): void
}
}

declare module "dev.latvian.mods.kubejs.loot.ConditionContainer" {
import { $JsonObject$$Type } from "com.google.gson.JsonObject"
import { $LootContext$EntityTarget$$Type } from "net.minecraft.world.level.storage.loot.LootContext$EntityTarget"
import { $Map$$Type } from "java.util.Map"

export interface $ConditionContainer {
"addCondition"(jsonObject0: $JsonObject$$Type): $ConditionContainer
"entityProperties"(entity: $LootContext$EntityTarget$$Type, properties: $JsonObject$$Type): $ConditionContainer
"entityScores"(entity: $LootContext$EntityTarget$$Type, scores: $Map$$Type<string, any>): $ConditionContainer
"killedByPlayer"(): $ConditionContainer
"randomChance"(chance: double): $ConditionContainer
"randomChanceWithLooting"(chance: double, multiplier: double): $ConditionContainer
"survivesExplosion"(): $ConditionContainer
}

export namespace $ConditionContainer {
const probejs$$marker: never
}
export abstract class $ConditionContainer$$Static implements $ConditionContainer {
}
}

declare module "dev.latvian.mods.kubejs.loot.LootEventJS" {
import { $ResourceLocation$$Type } from "net.minecraft.resources.ResourceLocation"
import { $JsonElement$$Type } from "com.google.gson.JsonElement"
import { $Consumer$$Type } from "java.util.function.Consumer"
import { $JsonObject$$Type } from "com.google.gson.JsonObject"
import { $Map$$Type } from "java.util.Map"
import { $EventJS } from "dev.latvian.mods.kubejs.event.EventJS"
import { $LootBuilder$$Type } from "dev.latvian.mods.kubejs.loot.LootBuilder"

export class $LootEventJS extends $EventJS {
constructor(c: $Map$$Type<$ResourceLocation$$Type, $JsonElement$$Type>)

public "addJson"(id: $ResourceLocation$$Type, json: $JsonObject$$Type): void
public "getDirectory"(): string
public "getType"(): string
public "modify"(id: $ResourceLocation$$Type, b: $Consumer$$Type<$LootBuilder$$Type>): void
public "removeAll"(): void
get "directory"(): string
get "type"(): string
}
}

declare module "dev.latvian.mods.kubejs.loot.FunctionContainer" {
import { $Consumer$$Type } from "java.util.function.Consumer"
import { $ResourceLocation$$Type } from "net.minecraft.resources.ResourceLocation"
import { $JsonObject$$Type } from "com.google.gson.JsonObject"
import { $CopyNameFunction$NameSource$$Type } from "net.minecraft.world.level.storage.loot.functions.CopyNameFunction$NameSource"
import { $NumberProvider$$Type } from "net.minecraft.world.level.storage.loot.providers.number.NumberProvider"
import { $CompoundTag$$Type } from "net.minecraft.nbt.CompoundTag"
import { $Component$$Type } from "net.minecraft.network.chat.Component"
import { $ConditionalFunction$$Type } from "dev.latvian.mods.kubejs.loot.ConditionalFunction"
import { $LootContext$EntityTarget$$Type } from "net.minecraft.world.level.storage.loot.LootContext$EntityTarget"

export interface $FunctionContainer {
"addConditionalFunction"(func: $Consumer$$Type<$ConditionalFunction$$Type>): $FunctionContainer
"addFunction"(jsonObject0: $JsonObject$$Type): $FunctionContainer
"copyName"(source: $CopyNameFunction$NameSource$$Type): $FunctionContainer
"count"(count: $NumberProvider$$Type): $FunctionContainer
"damage"(damage: $NumberProvider$$Type): $FunctionContainer
"enchantRandomly"(enchantments: $ResourceLocation$$Type[]): $FunctionContainer
"enchantWithLevels"(levels: $NumberProvider$$Type, treasure: boolean): $FunctionContainer
"furnaceSmelt"(): $FunctionContainer
"lootTable"(table: $ResourceLocation$$Type, seed: long): $FunctionContainer
"lootingEnchant"(count: $NumberProvider$$Type, limit: integer): $FunctionContainer
"name"(name: $Component$$Type): $FunctionContainer
"name"(name: $Component$$Type, entity: $LootContext$EntityTarget$$Type): $FunctionContainer
"nbt"(tag: $CompoundTag$$Type): $FunctionContainer
}

export namespace $FunctionContainer {
const probejs$$marker: never
}
export abstract class $FunctionContainer$$Static implements $FunctionContainer {
}
}

