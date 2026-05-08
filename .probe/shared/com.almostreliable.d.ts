declare module "com.almostreliable.lootjs.kube.builder.EntityPredicateBuilderJS" {
import { $Consumer$$Type } from "java.util.function.Consumer"
import { $Resolver$$Type } from "com.almostreliable.lootjs.filters.Resolver"
import { $CompoundTag$$Type } from "net.minecraft.nbt.CompoundTag"
import { $Map$$Type } from "java.util.Map"
import { $EquipmentSlot$$Type } from "net.minecraft.world.entity.EquipmentSlot"
import { $ExtendedEntityFlagsPredicate$IBuilder } from "com.almostreliable.lootjs.predicate.ExtendedEntityFlagsPredicate$IBuilder"
import { $EntityPredicate } from "net.minecraft.advancements.critereon.EntityPredicate"
import { $ItemFilter$$Type } from "com.almostreliable.lootjs.filters.ItemFilter"
import { $MobEffect$$Type } from "net.minecraft.world.effect.MobEffect"

export class $EntityPredicateBuilderJS implements $ExtendedEntityFlagsPredicate$IBuilder<$EntityPredicate> {
constructor()

public "anyType"(...resolvers: $Resolver$$Type[]): $EntityPredicateBuilderJS
public "build"(): $EntityPredicate
public "hasEffect"(effect: $MobEffect$$Type): $EntityPredicateBuilderJS
public "hasEffect"(effect: $MobEffect$$Type, amplifier: integer): $EntityPredicateBuilderJS
public "isBaby"(flag: boolean): $EntityPredicateBuilderJS
public "isCrouching"(flag: boolean): $EntityPredicateBuilderJS
public "isIllegarMob"(flag: boolean): $EntityPredicateBuilderJS
public "isOnFire"(flag: boolean): $EntityPredicateBuilderJS
public "isUndeadMob"(flag: boolean): $EntityPredicateBuilderJS
public "matchBlock"(resolver: $Resolver$$Type, propertyMap: $Map$$Type<string, string>): $EntityPredicateBuilderJS
public "matchBlock"(resolver: $Resolver$$Type): $EntityPredicateBuilderJS
public "matchFluid"(resolver: $Resolver$$Type): $EntityPredicateBuilderJS
public "matchMount"(action: $Consumer$$Type<$EntityPredicateBuilderJS$$Type>): $EntityPredicateBuilderJS
public "matchSlot"(slot: $EquipmentSlot$$Type, itemFilter: $ItemFilter$$Type): $EntityPredicateBuilderJS
public "matchTargetedEntity"(action: $Consumer$$Type<$EntityPredicateBuilderJS$$Type>): $EntityPredicateBuilderJS
public "nbt"(nbt: $CompoundTag$$Type): $EntityPredicateBuilderJS
}
}

declare module "com.almostreliable.merequester.mixin.accessors.EditBoxMixin" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $EditBoxMixin {
"merequester$isEditable"(): boolean
}

export namespace $EditBoxMixin {
const probejs$$marker: never
}
export abstract class $EditBoxMixin$$Static implements $EditBoxMixin {
}
}

declare module "com.almostreliable.lootjs.core.LootEntry" {
import { $Enchantment$$Type } from "net.minecraft.world.item.enchantment.Enchantment"
import { $JsonObject$$Type } from "com.google.gson.JsonObject"
import { $AddAttributesFunction$Builder$$Type } from "com.almostreliable.lootjs.loot.AddAttributesFunction$Builder"
import { $Component$$Type } from "net.minecraft.network.chat.Component"
import { $LootConditionsContainer$$Type } from "com.almostreliable.lootjs.kube.LootConditionsContainer"
import { $Item$$Type } from "net.minecraft.world.item.Item"
import { $ItemFilter$$Type } from "com.almostreliable.lootjs.filters.ItemFilter"
import { $Potion$$Type } from "net.minecraft.world.item.alchemy.Potion"
import { $LootEntry$Generator$$Type } from "com.almostreliable.lootjs.core.LootEntry$Generator"
import { $Consumer$$Type } from "java.util.function.Consumer"
import { $CompoundTag$$Type } from "net.minecraft.nbt.CompoundTag"
import { $NumberProvider$$Type } from "net.minecraft.world.level.storage.loot.providers.number.NumberProvider"
import { $LootFunctionsContainer, $LootFunctionsContainer$$Type } from "com.almostreliable.lootjs.loot.LootFunctionsContainer"
import { $LootContext$$Type } from "net.minecraft.world.level.storage.loot.LootContext"
import { $LootItemFunction$Builder$$Type } from "net.minecraft.world.level.storage.loot.functions.LootItemFunction$Builder"
import { $ItemStack, $ItemStack$$Type } from "net.minecraft.world.item.ItemStack"

export class $LootEntry implements $LootFunctionsContainer<$LootEntry> {
constructor(item: $Item$$Type)
constructor(generator: $LootEntry$Generator$$Type)
constructor(itemStack: $ItemStack$$Type)

public "addAttributes"(action: $Consumer$$Type<$AddAttributesFunction$Builder$$Type>): $LootEntry
public "addFunction"(builder: $LootItemFunction$Builder$$Type): $LootEntry
public "addLore"(...components: $Component$$Type[]): $LootEntry
public "addNBT"(tag: $CompoundTag$$Type): $LootEntry
public "addNbt"(tag: $CompoundTag$$Type): $LootEntry
public "addPotion"(potion: $Potion$$Type): $LootEntry
public "applyBinomialDistributionBonus"(enchantment: $Enchantment$$Type, probability: float, n: integer): $LootEntry
public "applyBonus"(enchantment: $Enchantment$$Type, multiplier: integer): $LootEntry
public "applyLootingBonus"(numberProvider: $NumberProvider$$Type): $LootEntry
public "applyOreBonus"(enchantment: $Enchantment$$Type): $LootEntry
public "createItem"(context: $LootContext$$Type): $ItemStack
public "customFunction"(json: $JsonObject$$Type): $LootEntry
public "damage"(numberProvider: $NumberProvider$$Type): $LootEntry
public "enchantRandomly"(): $LootEntry
public "enchantRandomly"(enchantments: $Enchantment$$Type[]): $LootEntry
public "enchantWithLevels"(numberProvider: $NumberProvider$$Type): $LootEntry
public "enchantWithLevels"(numberProvider: $NumberProvider$$Type, allowTreasure: boolean): $LootEntry
public "functions"(filter: $ItemFilter$$Type, action: $Consumer$$Type<$LootFunctionsContainer$$Type<$LootEntry$$Type>>): $LootEntry
public "getWeight"(): integer
public "hasWeight"(): boolean
public "limitCount"(numberProvider: $NumberProvider$$Type): $LootEntry
public "limitCount"(numberProviderMin: $NumberProvider$$Type, numberProviderMax: $NumberProvider$$Type): $LootEntry
public "matchesConditions"(context: $LootContext$$Type): boolean
public "replaceLore"(...components: $Component$$Type[]): $LootEntry
public "setName"(component: $Component$$Type): $LootEntry
public "simulateExplosionDecay"(): $LootEntry
public "smeltLoot"(): $LootEntry
public "when"(action: $Consumer$$Type<$LootConditionsContainer$$Type<any>>): $LootEntry
public "withChance"(chance: integer): $LootEntry
public "withWeight"(weight: integer): $LootEntry
get "weight"(): integer
set "name"(value: $Component$$Type)
}
}

declare module "com.almostreliable.lootjs.loot.GroupedLootBuilder" {
import { $ResourceLocation$$Type } from "net.minecraft.resources.ResourceLocation"
import { $Enchantment$$Type } from "net.minecraft.world.item.enchantment.Enchantment"
import { $ILootAction$$Type } from "com.almostreliable.lootjs.core.ILootAction"
import { $Resolver$$Type } from "com.almostreliable.lootjs.filters.Resolver"
import { $JsonObject$$Type } from "com.google.gson.JsonObject"
import { $ItemFilter$$Type } from "com.almostreliable.lootjs.filters.ItemFilter"
import { $ServerPlayer$$Type } from "net.minecraft.server.level.ServerPlayer"
import { $NumberProvider$$Type } from "net.minecraft.world.level.storage.loot.providers.number.NumberProvider"
import { $LootFunctionsContainer, $LootFunctionsContainer$$Type } from "com.almostreliable.lootjs.loot.LootFunctionsContainer"
import { $Explosion$BlockInteraction$$Type } from "net.minecraft.world.level.Explosion$BlockInteraction"
import { $MinMaxBounds$Doubles$$Type } from "net.minecraft.advancements.critereon.MinMaxBounds$Doubles"
import { $Map$$Type } from "java.util.Map"
import { $GroupedLootAction } from "com.almostreliable.lootjs.loot.action.GroupedLootAction"
import { $LootItemCondition$Builder$$Type } from "net.minecraft.world.level.storage.loot.predicates.LootItemCondition$Builder"
import { $LootEntry$$Type } from "com.almostreliable.lootjs.core.LootEntry"
import { $AddAttributesFunction$Builder$$Type } from "com.almostreliable.lootjs.loot.AddAttributesFunction$Builder"
import { $Component$$Type } from "net.minecraft.network.chat.Component"
import { $ILootCondition } from "com.almostreliable.lootjs.core.ILootCondition"
import { $LootConditionsContainer, $LootConditionsContainer$$Type } from "com.almostreliable.lootjs.kube.LootConditionsContainer"
import { $Predicate$$Type } from "java.util.function.Predicate"
import { $BlockEntity$$Type } from "net.minecraft.world.level.block.entity.BlockEntity"
import { $Potion$$Type } from "net.minecraft.world.item.alchemy.Potion"
import { $Consumer$$Type } from "java.util.function.Consumer"
import { $DistancePredicateBuilder$$Type } from "com.almostreliable.lootjs.loot.condition.builder.DistancePredicateBuilder"
import { $ModifyLootAction$Callback$$Type } from "com.almostreliable.lootjs.loot.action.ModifyLootAction$Callback"
import { $List } from "java.util.List"
import { $CompoundTag$$Type } from "net.minecraft.nbt.CompoundTag"
import { $Entity$$Type } from "net.minecraft.world.entity.Entity"
import { $LootItemFunction$$Type } from "net.minecraft.world.level.storage.loot.functions.LootItemFunction"
import { $EquipmentSlot$$Type } from "net.minecraft.world.entity.EquipmentSlot"
import { $LootItemFunction$Builder$$Type } from "net.minecraft.world.level.storage.loot.functions.LootItemFunction$Builder"
import { $Block$$Type } from "net.minecraft.world.level.block.Block"
import { $LootActionsContainer } from "com.almostreliable.lootjs.loot.LootActionsContainer"
import { $DamageSourcePredicateBuilderJS$$Type } from "com.almostreliable.lootjs.kube.builder.DamageSourcePredicateBuilderJS"
import { $EntityPredicateBuilderJS$$Type } from "com.almostreliable.lootjs.kube.builder.EntityPredicateBuilderJS"

export class $GroupedLootBuilder implements $LootConditionsContainer<$GroupedLootBuilder>, $LootFunctionsContainer<$GroupedLootBuilder>, $LootActionsContainer<$GroupedLootBuilder> {
constructor()

public "addAction"(action: $ILootAction$$Type): $GroupedLootBuilder
public "addAlternativesLoot"(...entries: $LootEntry$$Type[]): $GroupedLootBuilder
public "addAttributes"(action: $Consumer$$Type<$AddAttributesFunction$Builder$$Type>): $GroupedLootBuilder
public "addCondition"(builder: $LootItemCondition$Builder$$Type): $GroupedLootBuilder
public "addFunction"(lootItemFunction: $LootItemFunction$$Type): $GroupedLootBuilder
public "addFunction"(builder: $LootItemFunction$Builder$$Type): $GroupedLootBuilder
public "addLoot"(...entries: $LootEntry$$Type[]): $GroupedLootBuilder
public "addLore"(...components: $Component$$Type[]): $GroupedLootBuilder
public "addNBT"(tag: $CompoundTag$$Type): $GroupedLootBuilder
public "addNbt"(tag: $CompoundTag$$Type): $GroupedLootBuilder
public "addPotion"(potion: $Potion$$Type): $GroupedLootBuilder
public "addSequenceLoot"(...entries: $LootEntry$$Type[]): $GroupedLootBuilder
public "addWeightedLoot"(poolEntries: $LootEntry$$Type[]): $GroupedLootBuilder
public "addWeightedLoot"(numberProvider: $NumberProvider$$Type, poolEntries: $LootEntry$$Type[]): $GroupedLootBuilder
public "addWeightedLoot"(numberProvider: $NumberProvider$$Type, allowDuplicateLoot: boolean, poolEntries: $LootEntry$$Type[]): $GroupedLootBuilder
public "and"(action: $Consumer$$Type<$LootConditionsContainer$$Type<$GroupedLootBuilder$$Type>>): $GroupedLootBuilder
public "anyBiome"(...resolvers: $Resolver$$Type[]): $GroupedLootBuilder
public "anyDimension"(...dimensions: $ResourceLocation$$Type[]): $GroupedLootBuilder
public "anyStructure"(idOrTags: string[], exact: boolean): $GroupedLootBuilder
public "applyBinomialDistributionBonus"(enchantment: $Enchantment$$Type, probability: float, n: integer): $GroupedLootBuilder
public "applyBonus"(enchantment: $Enchantment$$Type, multiplier: integer): $GroupedLootBuilder
public "applyLootingBonus"(numberProvider: $NumberProvider$$Type): $GroupedLootBuilder
public "applyOreBonus"(enchantment: $Enchantment$$Type): $GroupedLootBuilder
public "biome"(...resolvers: $Resolver$$Type[]): $GroupedLootBuilder
public "blockEntityPredicate"(predicate: $Predicate$$Type<$BlockEntity$$Type>): $GroupedLootBuilder
public "build"(): $GroupedLootAction
public "createConditions"(action: $Consumer$$Type<$LootConditionsContainer$$Type<$GroupedLootBuilder$$Type>>): $List<$ILootCondition>
public "customCondition"(json: $JsonObject$$Type): $GroupedLootBuilder
public "customDistanceToPlayer"(action: $Consumer$$Type<$DistancePredicateBuilder$$Type>): $GroupedLootBuilder
public "customFunction"(json: $JsonObject$$Type): $GroupedLootBuilder
public "damage"(numberProvider: $NumberProvider$$Type): $GroupedLootBuilder
public "directKillerPredicate"(predicate: $Predicate$$Type<$Entity$$Type>): $GroupedLootBuilder
public "distanceToKiller"(bounds: $MinMaxBounds$Doubles$$Type): $GroupedLootBuilder
public "dropExperience"(amount: integer): $GroupedLootBuilder
public "enchantRandomly"(): $GroupedLootBuilder
public "enchantRandomly"(enchantments: $Enchantment$$Type[]): $GroupedLootBuilder
public "enchantWithLevels"(numberProvider: $NumberProvider$$Type): $GroupedLootBuilder
public "enchantWithLevels"(numberProvider: $NumberProvider$$Type, allowTreasure: boolean): $GroupedLootBuilder
public "entityPredicate"(predicate: $Predicate$$Type<$Entity$$Type>): $GroupedLootBuilder
public "functions"(filter: $ItemFilter$$Type, action: $Consumer$$Type<$LootFunctionsContainer$$Type<$GroupedLootBuilder$$Type>>): $GroupedLootBuilder
public "hasAnyStage"(...stages: string[]): $GroupedLootBuilder
public "killedByPlayer"(): $GroupedLootBuilder
public "killerPredicate"(predicate: $Predicate$$Type<$Entity$$Type>): $GroupedLootBuilder
public "lightLevel"(min: integer, max: integer): $GroupedLootBuilder
public "limitCount"(numberProvider: $NumberProvider$$Type): $GroupedLootBuilder
public "limitCount"(numberProviderMin: $NumberProvider$$Type, numberProviderMax: $NumberProvider$$Type): $GroupedLootBuilder
public "matchBlockState"(block: $Block$$Type, propertyMap: $Map$$Type<string, string>): $GroupedLootBuilder
public "matchDamageSource"(action: $Consumer$$Type<$DamageSourcePredicateBuilderJS$$Type>): $GroupedLootBuilder
public "matchDirectKiller"(action: $Consumer$$Type<$EntityPredicateBuilderJS$$Type>): $GroupedLootBuilder
public "matchEntity"(action: $Consumer$$Type<$EntityPredicateBuilderJS$$Type>): $GroupedLootBuilder
public "matchEquip"(slot: $EquipmentSlot$$Type, filter: $ItemFilter$$Type): $GroupedLootBuilder
public "matchFluid"(resolver: $Resolver$$Type): $GroupedLootBuilder
public "matchKiller"(action: $Consumer$$Type<$EntityPredicateBuilderJS$$Type>): $GroupedLootBuilder
public "matchLoot"(filter: $ItemFilter$$Type): $GroupedLootBuilder
public "matchLoot"(filter: $ItemFilter$$Type, exact: boolean): $GroupedLootBuilder
public "matchMainHand"(filter: $ItemFilter$$Type): $GroupedLootBuilder
public "matchOffHand"(filter: $ItemFilter$$Type): $GroupedLootBuilder
public "matchPlayer"(action: $Consumer$$Type<$EntityPredicateBuilderJS$$Type>): $GroupedLootBuilder
public "modifyLoot"(filter: $ItemFilter$$Type, callback: $ModifyLootAction$Callback$$Type): $GroupedLootBuilder
public "not"(action: $Consumer$$Type<$LootConditionsContainer$$Type<$GroupedLootBuilder$$Type>>): $GroupedLootBuilder
public "or"(action: $Consumer$$Type<$LootConditionsContainer$$Type<$GroupedLootBuilder$$Type>>): $GroupedLootBuilder
public "playerPredicate"(predicate: $Predicate$$Type<$ServerPlayer$$Type>): $GroupedLootBuilder
public "randomChance"(value: float): $GroupedLootBuilder
public "randomChanceWithEnchantment"(enchantment: $Enchantment$$Type, chances: float[]): $GroupedLootBuilder
public "randomChanceWithLooting"(value: float, looting: float): $GroupedLootBuilder
public "randomTableBonus"(enchantment: $Enchantment$$Type, chances: float[]): $GroupedLootBuilder
public "removeLoot"(filter: $ItemFilter$$Type): $GroupedLootBuilder
public "replaceLoot"(filter: $ItemFilter$$Type, lootEntry: $LootEntry$$Type): $GroupedLootBuilder
public "replaceLoot"(filter: $ItemFilter$$Type, lootEntry: $LootEntry$$Type, preserveCount: boolean): $GroupedLootBuilder
public "replaceLore"(...components: $Component$$Type[]): $GroupedLootBuilder
public "rolls"(numberProvider: $NumberProvider$$Type): $GroupedLootBuilder
public "setName"(component: $Component$$Type): $GroupedLootBuilder
public "simulateExplosionDecay"(): $GroupedLootBuilder
public "smeltLoot"(): $GroupedLootBuilder
public "survivesExplosion"(): $GroupedLootBuilder
public "timeCheck"(period: long, min: integer, max: integer): $GroupedLootBuilder
public "timeCheck"(min: integer, max: integer): $GroupedLootBuilder
public "triggerExplosion"(radius: float, mode: $Explosion$BlockInteraction$$Type, fire: boolean): $GroupedLootBuilder
public "triggerExplosion"(radius: float, destroy: boolean, fire: boolean): $GroupedLootBuilder
public "triggerLightningStrike"(shouldDamage: boolean): $GroupedLootBuilder
public "weatherCheck"(map: $Map$$Type<string, boolean>): $GroupedLootBuilder
set "name"(value: $Component$$Type)
}
}

declare module "com.almostreliable.lootjs.loot.AddAttributesFunction" {
import { $ValidationContext$$Type } from "net.minecraft.world.level.storage.loot.ValidationContext"
import { $LootItemFunctionType } from "net.minecraft.world.level.storage.loot.functions.LootItemFunctionType"
import { $BiFunction, $BiFunction$$Type } from "java.util.function.BiFunction"
import { $Set } from "java.util.Set"
import { $Function$$Type } from "java.util.function.Function"
import { $Consumer, $Consumer$$Type } from "java.util.function.Consumer"
import { $List$$Type } from "java.util.List"
import { $AddAttributesFunction$Modifier$$Type } from "com.almostreliable.lootjs.loot.AddAttributesFunction$Modifier"
import { $LootContext, $LootContext$$Type } from "net.minecraft.world.level.storage.loot.LootContext"
import { $LootItemFunction } from "net.minecraft.world.level.storage.loot.functions.LootItemFunction"
import { $EquipmentSlot$$Type } from "net.minecraft.world.entity.EquipmentSlot"
import { $LootContextParam } from "net.minecraft.world.level.storage.loot.parameters.LootContextParam"
import { $ItemStack, $ItemStack$$Type } from "net.minecraft.world.item.ItemStack"

export class $AddAttributesFunction implements $LootItemFunction {
constructor(preserveDefaultModifier: boolean, modifiers: $List$$Type<$AddAttributesFunction$Modifier$$Type>)

public "andThen"<V>(function0: $Function$$Type<$ItemStack$$Type, V>): $BiFunction<$ItemStack, $LootContext, V>
public "apply"(itemStack: $ItemStack$$Type, context: $LootContext$$Type): $ItemStack
public static "decorate"(biFunction0: $BiFunction$$Type<$ItemStack$$Type, $LootContext$$Type, $ItemStack>, consumer1: $Consumer$$Type<$ItemStack$$Type>, lootContext2: $LootContext$$Type): $Consumer<$ItemStack>
public "getReferencedContextParams"(): $Set<$LootContextParam<any>>
public "getType"(): $LootItemFunctionType
public "preserveDefaultAttributes"(itemStack: $ItemStack$$Type, slot: $EquipmentSlot$$Type): void
public "validate"(validationContext0: $ValidationContext$$Type): void
get "referencedContextParams"(): $Set<$LootContextParam<any>>
get "type"(): $LootItemFunctionType
}
}

declare module "com.almostreliable.lootjs.loot.condition.builder.DistancePredicateBuilder" {
import { $MinMaxBounds$Doubles$$Type } from "net.minecraft.advancements.critereon.MinMaxBounds$Doubles"
import { $DistancePredicate } from "net.minecraft.advancements.critereon.DistancePredicate"

export class $DistancePredicateBuilder {
constructor()

public "absolute"(bounds: $MinMaxBounds$Doubles$$Type): $DistancePredicateBuilder
public "build"(): $DistancePredicate
public "horizontal"(bounds: $MinMaxBounds$Doubles$$Type): $DistancePredicateBuilder
public "x"(bounds: $MinMaxBounds$Doubles$$Type): $DistancePredicateBuilder
public "y"(bounds: $MinMaxBounds$Doubles$$Type): $DistancePredicateBuilder
public "z"(bounds: $MinMaxBounds$Doubles$$Type): $DistancePredicateBuilder
}
}

declare module "com.almostreliable.unified.config.UnifyConfig$TagInheritanceMode" {
import { $Enum } from "java.lang.Enum"

export class $UnifyConfig$TagInheritanceMode extends $Enum<$UnifyConfig$TagInheritanceMode> {
static readonly "ALLOW": $UnifyConfig$TagInheritanceMode
static readonly "DENY": $UnifyConfig$TagInheritanceMode

public static "valueOf"(name: string): $UnifyConfig$TagInheritanceMode
public static "values"(): $UnifyConfig$TagInheritanceMode[]
}
}

declare module "com.almostreliable.lootjs.core.ILootAction" {
import { $List$$Type } from "java.util.List"
import { $LootContext$$Type } from "net.minecraft.world.level.storage.loot.LootContext"
import { $ILootHandler } from "com.almostreliable.lootjs.core.ILootHandler"
import { $ItemStack$$Type } from "net.minecraft.world.item.ItemStack"

export interface $ILootAction extends $ILootHandler {
"applyLootHandler"(lootContext0: $LootContext$$Type, list1: $List$$Type<$ItemStack$$Type>): boolean
}

export namespace $ILootAction {
const probejs$$marker: never
}
export abstract class $ILootAction$$Static implements $ILootAction {
}
}

declare module "com.almostreliable.lootjs.loot.action.ModifyLootAction$Callback" {
import { $ItemStack, $ItemStack$$Type } from "net.minecraft.world.item.ItemStack"

export interface $ModifyLootAction$Callback {
"modify"(itemStack0: $ItemStack$$Type): $ItemStack
}

export namespace $ModifyLootAction$Callback {
const probejs$$marker: never
}
export abstract class $ModifyLootAction$Callback$$Static implements $ModifyLootAction$Callback {
}
}

declare module "com.almostreliable.lootjs.loot.action.GroupedLootAction" {
import { $NumberProvider$$Type } from "net.minecraft.world.level.storage.loot.providers.number.NumberProvider"
import { $Collection$$Type } from "java.util.Collection"
import { $ILootHandler$$Type } from "com.almostreliable.lootjs.core.ILootHandler"
import { $CompositeLootAction } from "com.almostreliable.lootjs.loot.action.CompositeLootAction"

export class $GroupedLootAction extends $CompositeLootAction {
constructor(numberProvider: $NumberProvider$$Type, handlers: $Collection$$Type<$ILootHandler$$Type>)

}
}

declare module "com.almostreliable.lootjs.core.LootEntry$Generator" {
import { $LootContext$$Type } from "net.minecraft.world.level.storage.loot.LootContext"
import { $ItemStack } from "net.minecraft.world.item.ItemStack"

export interface $LootEntry$Generator {
"create"(lootContext0: $LootContext$$Type): $ItemStack
}

export namespace $LootEntry$Generator {
const probejs$$marker: never
}
export abstract class $LootEntry$Generator$$Static implements $LootEntry$Generator {
}
}

declare module "com.almostreliable.merequester.mixin.accessors.SlotMixin" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $SlotMixin {
"merequester$setX"(int0: integer): void
"merequester$setY"(int0: integer): void
}

export namespace $SlotMixin {
const probejs$$marker: never
}
export abstract class $SlotMixin$$Static implements $SlotMixin {
}
}

declare module "com.almostreliable.lootjs.kube.builder.DamageSourcePredicateBuilderJS" {
import { $ResourceLocation$$Type } from "net.minecraft.resources.ResourceLocation"
import { $Consumer$$Type } from "java.util.function.Consumer"
import { $AnyOfCondition$Builder } from "net.minecraft.world.level.storage.loot.predicates.AnyOfCondition$Builder"
import { $LootItemCondition$Builder, $LootItemCondition$Builder$$Type } from "net.minecraft.world.level.storage.loot.predicates.LootItemCondition$Builder"
import { $EntityPredicateBuilderJS$$Type } from "com.almostreliable.lootjs.kube.builder.EntityPredicateBuilderJS"
import { $AllOfCondition$Builder } from "net.minecraft.world.level.storage.loot.predicates.AllOfCondition$Builder"

export class $DamageSourcePredicateBuilderJS implements $LootItemCondition$Builder {
constructor()

public "and"(builder0: $LootItemCondition$Builder$$Type): $AllOfCondition$Builder
public "anyType"(...names: string[]): $DamageSourcePredicateBuilderJS
public "invert"(): $LootItemCondition$Builder
public "is"(tag: $ResourceLocation$$Type): $DamageSourcePredicateBuilderJS
public "isNot"(tag: $ResourceLocation$$Type): $DamageSourcePredicateBuilderJS
public "matchDirectEntity"(action: $Consumer$$Type<$EntityPredicateBuilderJS$$Type>): $DamageSourcePredicateBuilderJS
public "matchSourceEntity"(action: $Consumer$$Type<$EntityPredicateBuilderJS$$Type>): $DamageSourcePredicateBuilderJS
public "or"(builder0: $LootItemCondition$Builder$$Type): $AnyOfCondition$Builder
}
}

declare module "com.almostreliable.lootjs.core.ILootHandler" {
import { $List$$Type } from "java.util.List"
import { $LootContext$$Type } from "net.minecraft.world.level.storage.loot.LootContext"
import { $ItemStack$$Type } from "net.minecraft.world.item.ItemStack"

export interface $ILootHandler {
"applyLootHandler"(lootContext0: $LootContext$$Type, list1: $List$$Type<$ItemStack$$Type>): boolean
}

export namespace $ILootHandler {
const probejs$$marker: never
}
export abstract class $ILootHandler$$Static implements $ILootHandler {
}
}

declare module "com.almostreliable.lootjs.predicate.ExtendedEntityFlagsPredicate$IBuilder" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $ExtendedEntityFlagsPredicate$IBuilder<T = any> {
"build"(): T
"isArthropodMob"(boolean0: boolean): $ExtendedEntityFlagsPredicate$IBuilder<T>
"isBaby"(boolean0: boolean): $ExtendedEntityFlagsPredicate$IBuilder<T>
"isCreature"(boolean0: boolean): $ExtendedEntityFlagsPredicate$IBuilder<T>
"isCrouching"(boolean0: boolean): $ExtendedEntityFlagsPredicate$IBuilder<T>
"isIllegarMob"(boolean0: boolean): $ExtendedEntityFlagsPredicate$IBuilder<T>
"isInWater"(boolean0: boolean): $ExtendedEntityFlagsPredicate$IBuilder<T>
"isMonster"(boolean0: boolean): $ExtendedEntityFlagsPredicate$IBuilder<T>
"isOnFire"(boolean0: boolean): $ExtendedEntityFlagsPredicate$IBuilder<T>
"isOnGround"(boolean0: boolean): $ExtendedEntityFlagsPredicate$IBuilder<T>
"isSprinting"(boolean0: boolean): $ExtendedEntityFlagsPredicate$IBuilder<T>
"isSwimming"(boolean0: boolean): $ExtendedEntityFlagsPredicate$IBuilder<T>
"isUndeadMob"(boolean0: boolean): $ExtendedEntityFlagsPredicate$IBuilder<T>
"isUnderWater"(boolean0: boolean): $ExtendedEntityFlagsPredicate$IBuilder<T>
"isWaterMob"(boolean0: boolean): $ExtendedEntityFlagsPredicate$IBuilder<T>
}

export namespace $ExtendedEntityFlagsPredicate$IBuilder {
const probejs$$marker: never
}
export abstract class $ExtendedEntityFlagsPredicate$IBuilder$$Static<T = any> implements $ExtendedEntityFlagsPredicate$IBuilder<T> {
}
}

declare module "com.almostreliable.lootjs.mixin.LootItemConditionMixin" {
import { $List$$Type } from "java.util.List"
import { $LootContext, $LootContext$$Type } from "net.minecraft.world.level.storage.loot.LootContext"
import { $ILootCondition } from "com.almostreliable.lootjs.core.ILootCondition"
import { $Predicate, $Predicate$$Type } from "java.util.function.Predicate"
import { $ItemStack$$Type } from "net.minecraft.world.item.ItemStack"

export interface $LootItemConditionMixin extends $ILootCondition {
"and"(predicate0: $Predicate$$Type<$LootContext$$Type>): $Predicate<$LootContext>
"applyLootHandler"(context: $LootContext$$Type, loot: $List$$Type<$ItemStack$$Type>): boolean
"negate"(): $Predicate<$LootContext>
"or"(predicate0: $Predicate$$Type<$LootContext$$Type>): $Predicate<$LootContext>
"test"(lootContext0: $LootContext$$Type): boolean
}

export namespace $LootItemConditionMixin {
function isEqual<T>(object0: any): $Predicate<T>
function not<T>(predicate0: $Predicate$$Type<T>): $Predicate<T>
}
export abstract class $LootItemConditionMixin$$Static implements $LootItemConditionMixin {
static "isEqual"<T>(object0: any): $Predicate<T>
static "not"<T>(predicate0: $Predicate$$Type<T>): $Predicate<T>
}
}

declare module "com.almostreliable.unified.config.Config" {
import { $Path$$Type } from "java.nio.file.Path"
import { $Config$Serializer$$Type } from "com.almostreliable.unified.config.Config$Serializer"

export class $Config {
constructor()

public static "load"<T extends $Config>(name: string, serializer: $Config$Serializer$$Type<T>): T
public static "save"<T extends $Config>(p: $Path$$Type, config: T, serializer: $Config$Serializer$$Type<T>): void
}
}

declare module "com.almostreliable.lootjs.loot.action.CompositeLootAction" {
import { $ILootAction } from "com.almostreliable.lootjs.core.ILootAction"
import { $List$$Type } from "java.util.List"
import { $LootContext$$Type } from "net.minecraft.world.level.storage.loot.LootContext"
import { $Collection$$Type } from "java.util.Collection"
import { $ILootHandler$$Type } from "com.almostreliable.lootjs.core.ILootHandler"
import { $ItemStack$$Type } from "net.minecraft.world.item.ItemStack"

export class $CompositeLootAction implements $ILootAction {
constructor(handlers: $Collection$$Type<$ILootHandler$$Type>)

public "applyLootHandler"(context: $LootContext$$Type, loot: $List$$Type<$ItemStack$$Type>): boolean
}
}

declare module "com.almostreliable.lootjs.loot.LootActionsContainer" {
import { $ILootAction$$Type } from "com.almostreliable.lootjs.core.ILootAction"
import { $ModifyLootAction$Callback$$Type } from "com.almostreliable.lootjs.loot.action.ModifyLootAction$Callback"
import { $NumberProvider$$Type } from "net.minecraft.world.level.storage.loot.providers.number.NumberProvider"
import { $Explosion$BlockInteraction$$Type } from "net.minecraft.world.level.Explosion$BlockInteraction"
import { $ItemFilter$$Type } from "com.almostreliable.lootjs.filters.ItemFilter"
import { $LootEntry$$Type } from "com.almostreliable.lootjs.core.LootEntry"

export interface $LootActionsContainer<A extends $LootActionsContainer<any> = $LootActionsContainer<any>> {
"addAction"(iLootAction0: $ILootAction$$Type): A
"addAlternativesLoot"(...entries: $LootEntry$$Type[]): A
"addLoot"(...entries: $LootEntry$$Type[]): A
"addSequenceLoot"(...entries: $LootEntry$$Type[]): A
"addWeightedLoot"(poolEntries: $LootEntry$$Type[]): A
"addWeightedLoot"(numberProvider: $NumberProvider$$Type, poolEntries: $LootEntry$$Type[]): A
"addWeightedLoot"(numberProvider: $NumberProvider$$Type, allowDuplicateLoot: boolean, poolEntries: $LootEntry$$Type[]): A
"dropExperience"(amount: integer): A
"modifyLoot"(filter: $ItemFilter$$Type, callback: $ModifyLootAction$Callback$$Type): A
"removeLoot"(filter: $ItemFilter$$Type): A
"replaceLoot"(filter: $ItemFilter$$Type, lootEntry: $LootEntry$$Type): A
"replaceLoot"(filter: $ItemFilter$$Type, lootEntry: $LootEntry$$Type, preserveCount: boolean): A
"triggerExplosion"(radius: float, mode: $Explosion$BlockInteraction$$Type, fire: boolean): A
"triggerExplosion"(radius: float, destroy: boolean, fire: boolean): A
"triggerLightningStrike"(shouldDamage: boolean): A
}

export namespace $LootActionsContainer {
const probejs$$marker: never
}
export abstract class $LootActionsContainer$$Static<A extends $LootActionsContainer<any> = $LootActionsContainer<any>> implements $LootActionsContainer<A> {
}
}

declare module "com.almostreliable.lootjs.loot.AddAttributesFunction$Builder" {
import { $Consumer$$Type } from "java.util.function.Consumer"
import { $AddAttributesFunction$Modifier$Builder$$Type } from "com.almostreliable.lootjs.loot.AddAttributesFunction$Modifier$Builder"
import { $AddAttributesFunction$Modifier$$Type } from "com.almostreliable.lootjs.loot.AddAttributesFunction$Modifier"
import { $NumberProvider$$Type } from "net.minecraft.world.level.storage.loot.providers.number.NumberProvider"
import { $EquipmentSlot$$Type } from "net.minecraft.world.entity.EquipmentSlot"
import { $LootItemFunction$Builder } from "net.minecraft.world.level.storage.loot.functions.LootItemFunction$Builder"
import { $AddAttributesFunction } from "com.almostreliable.lootjs.loot.AddAttributesFunction"
import { $Attribute$$Type } from "net.minecraft.world.entity.ai.attributes.Attribute"

export class $AddAttributesFunction$Builder implements $LootItemFunction$Builder {
constructor()

public "add"(modifier: $AddAttributesFunction$Modifier$$Type): $AddAttributesFunction$Builder
public "add"(attribute: $Attribute$$Type, amount: $NumberProvider$$Type, action: $Consumer$$Type<$AddAttributesFunction$Modifier$Builder$$Type>): $AddAttributesFunction$Builder
public "build"(): $AddAttributesFunction
public "forSlots"(probability: float, attribute: $Attribute$$Type, amount: $NumberProvider$$Type, slots: $EquipmentSlot$$Type[]): $AddAttributesFunction$Builder
public "forSlots"(attribute: $Attribute$$Type, amount: $NumberProvider$$Type, slots: $EquipmentSlot$$Type[]): $AddAttributesFunction$Builder
public "preserveDefaults"(flag: boolean): $AddAttributesFunction$Builder
public "simple"(attribute: $Attribute$$Type, amount: $NumberProvider$$Type): $AddAttributesFunction$Builder
public "simple"(probability: float, attribute: $Attribute$$Type, amount: $NumberProvider$$Type): $AddAttributesFunction$Builder
}
}

declare module "com.almostreliable.unified.config.UnifyConfig" {
import { $ResourceLocation, $ResourceLocation$$Type } from "net.minecraft.resources.ResourceLocation"
import { $Item, $Item$$Type } from "net.minecraft.world.item.Item"
import { $Collection$$Type } from "java.util.Collection"
import { $Set, $Set$$Type } from "java.util.Set"
import { $Config } from "com.almostreliable.unified.config.Config"
import { $List, $List$$Type } from "java.util.List"
import { $Holder$$Type } from "net.minecraft.core.Holder"
import { $Enum$$Type } from "java.lang.Enum"
import { $UnifyConfig$TagInheritanceMode$$Type } from "com.almostreliable.unified.config.UnifyConfig$TagInheritanceMode"
import { $Map, $Map$$Type } from "java.util.Map"
import { $UnifyTag, $UnifyTag$$Type } from "com.almostreliable.unified.utils.UnifyTag"
import { $Block$$Type } from "net.minecraft.world.level.block.Block"
import { $Pattern$$Type } from "java.util.regex.Pattern"

export class $UnifyConfig extends $Config {
static readonly "NAME": string

constructor(modPriorities: $List$$Type<string>, stoneStrata: $List$$Type<string>, unbakedTags: $List$$Type<string>, materials: $List$$Type<string>, priorityOverrides: $Map$$Type<$ResourceLocation$$Type, string>, customTags: $Map$$Type<$ResourceLocation$$Type, $Set$$Type<$ResourceLocation$$Type>>, tagOwnerships: $Map$$Type<$ResourceLocation$$Type, $Set$$Type<$ResourceLocation$$Type>>, itemTagInheritanceMode: $Enum$$Type<$UnifyConfig$TagInheritanceMode$$Type>, itemTagInheritance: $Map$$Type<$ResourceLocation$$Type, $Set$$Type<$Pattern$$Type>>, blockTagInheritanceMode: $Enum$$Type<$UnifyConfig$TagInheritanceMode$$Type>, blockTagInheritance: $Map$$Type<$ResourceLocation$$Type, $Set$$Type<$Pattern$$Type>>, ignoredTags: $Set$$Type<$UnifyTag$$Type<$Item$$Type>>, ignoredItems: $Set$$Type<$Pattern$$Type>, ignoredRecipeTypes: $Set$$Type<$Pattern$$Type>, ignoredRecipes: $Set$$Type<$Pattern$$Type>, hideJeiRei: boolean)

public "bakeAndValidateTags"(tags: $Map$$Type<$ResourceLocation$$Type, $Collection$$Type<$Holder$$Type<$Item$$Type>>>): $Set<$UnifyTag<$Item>>
public "bakeTags"(): $Set<$UnifyTag<$Item>>
public "clearCache"(): void
public "getCustomTags"(): $Map<$ResourceLocation, $Set<$ResourceLocation>>
public "getMaterials"(): $List<string>
public "getModPriorities"(): $List<string>
public "getPriorityOverrides"(): $Map<$ResourceLocation, string>
public "getStoneStrata"(): $List<string>
public "getTagOwnerships"(): $Map<$ResourceLocation, $Set<$ResourceLocation>>
public "includeItem"(item: $ResourceLocation$$Type): boolean
public "includeRecipe"(recipe: $ResourceLocation$$Type): boolean
public "includeRecipeType"(type: $ResourceLocation$$Type): boolean
public "reiOrJeiDisabled"(): boolean
public "shouldInheritBlockTag"(itemTag: $UnifyTag$$Type<$Block$$Type>, dominantTags: $Set$$Type<$UnifyTag$$Type<$Item$$Type>>): boolean
public "shouldInheritItemTag"(itemTag: $UnifyTag$$Type<$Item$$Type>, dominantTags: $Set$$Type<$UnifyTag$$Type<$Item$$Type>>): boolean
get "customTags"(): $Map<$ResourceLocation, $Set<$ResourceLocation>>
get "materials"(): $List<string>
get "modPriorities"(): $List<string>
get "priorityOverrides"(): $Map<$ResourceLocation, string>
get "stoneStrata"(): $List<string>
get "tagOwnerships"(): $Map<$ResourceLocation, $Set<$ResourceLocation>>
}
}

declare module "com.almostreliable.lootjs.core.ILootCondition" {
import { $List$$Type } from "java.util.List"
import { $LootContext, $LootContext$$Type } from "net.minecraft.world.level.storage.loot.LootContext"
import { $Predicate, $Predicate$$Type } from "java.util.function.Predicate"
import { $ILootHandler } from "com.almostreliable.lootjs.core.ILootHandler"
import { $ItemStack$$Type } from "net.minecraft.world.item.ItemStack"

export interface $ILootCondition extends $ILootHandler, $Predicate<$LootContext> {
"and"(predicate0: $Predicate$$Type<$LootContext$$Type>): $Predicate<$LootContext>
"applyLootHandler"(context: $LootContext$$Type, loot: $List$$Type<$ItemStack$$Type>): boolean
"negate"(): $Predicate<$LootContext>
"or"(predicate0: $Predicate$$Type<$LootContext$$Type>): $Predicate<$LootContext>
"test"(lootContext0: $LootContext$$Type): boolean
}

export namespace $ILootCondition {
function isEqual<T>(object0: any): $Predicate<T>
function not<T>(predicate0: $Predicate$$Type<T>): $Predicate<T>
}
export abstract class $ILootCondition$$Static implements $ILootCondition {
static "isEqual"<T>(object0: any): $Predicate<T>
static "not"<T>(predicate0: $Predicate$$Type<T>): $Predicate<T>
}
}

declare module "com.almostreliable.lootjs.forge.filters.ForgeItemFilter" {
import { $ResourceLocationFilter$$Type } from "com.almostreliable.lootjs.filters.ResourceLocationFilter"
import { $Predicate, $Predicate$$Type } from "java.util.function.Predicate"
import { $EquipmentSlot$$Type } from "net.minecraft.world.entity.EquipmentSlot"
import { $ItemFilter, $ItemFilter$$Type } from "com.almostreliable.lootjs.filters.ItemFilter"
import { $ItemStack, $ItemStack$$Type } from "net.minecraft.world.item.ItemStack"

export interface $ForgeItemFilter extends $ItemFilter {
"and"(other: $ItemFilter$$Type): $ItemFilter
"and"(predicate0: $Predicate$$Type<$ItemStack$$Type>): $Predicate<$ItemStack>
"or"(other: $ItemFilter$$Type): $ItemFilter
"or"(predicate0: $Predicate$$Type<$ItemStack$$Type>): $Predicate<$ItemStack>
"test"(itemStack0: $ItemStack$$Type): boolean
}

export namespace $ForgeItemFilter {
function and(...itemFilters: $ItemFilter$$Type[]): $ItemFilter
function canPerformAction(...actions: string[]): $ItemFilter
function canPerformAnyAction(...actions: string[]): $ItemFilter
function custom(predicate: $Predicate$$Type<$ItemStack$$Type>): $ItemFilter
function equipmentSlot(slot: $EquipmentSlot$$Type): $ItemFilter
function hasEnchantment(filter: $ResourceLocationFilter$$Type): $ItemFilter
function hasEnchantment(filter: $ResourceLocationFilter$$Type, min: integer, max: integer): $ItemFilter
function isEqual<T>(object0: any): $Predicate<T>
function not(itemFilter: $ItemFilter$$Type): $ItemFilter
function not<T>(predicate0: $Predicate$$Type<T>): $Predicate<T>
function or(...itemFilters: $ItemFilter$$Type[]): $ItemFilter
}
export abstract class $ForgeItemFilter$$Static implements $ForgeItemFilter {
static "and"(...itemFilters: $ItemFilter$$Type[]): $ItemFilter
static "canPerformAction"(...actions: string[]): $ItemFilter
static "canPerformAnyAction"(...actions: string[]): $ItemFilter
static "custom"(predicate: $Predicate$$Type<$ItemStack$$Type>): $ItemFilter
static "equipmentSlot"(slot: $EquipmentSlot$$Type): $ItemFilter
static "hasEnchantment"(filter: $ResourceLocationFilter$$Type): $ItemFilter
static "hasEnchantment"(filter: $ResourceLocationFilter$$Type, min: integer, max: integer): $ItemFilter
static "isEqual"<T>(object0: any): $Predicate<T>
static "not"(itemFilter: $ItemFilter$$Type): $ItemFilter
static "not"<T>(predicate0: $Predicate$$Type<T>): $Predicate<T>
static "or"(...itemFilters: $ItemFilter$$Type[]): $ItemFilter
}
}

declare module "com.almostreliable.lootjs.loot.LootFunctionsContainer" {
import { $Consumer$$Type } from "java.util.function.Consumer"
import { $Enchantment$$Type } from "net.minecraft.world.item.enchantment.Enchantment"
import { $JsonObject$$Type } from "com.google.gson.JsonObject"
import { $AddAttributesFunction$Builder$$Type } from "com.almostreliable.lootjs.loot.AddAttributesFunction$Builder"
import { $CompoundTag$$Type } from "net.minecraft.nbt.CompoundTag"
import { $NumberProvider$$Type } from "net.minecraft.world.level.storage.loot.providers.number.NumberProvider"
import { $Component$$Type } from "net.minecraft.network.chat.Component"
import { $LootItemFunction$$Type } from "net.minecraft.world.level.storage.loot.functions.LootItemFunction"
import { $LootItemFunction$Builder$$Type } from "net.minecraft.world.level.storage.loot.functions.LootItemFunction$Builder"
import { $ItemFilter$$Type } from "com.almostreliable.lootjs.filters.ItemFilter"
import { $Potion$$Type } from "net.minecraft.world.item.alchemy.Potion"

export interface $LootFunctionsContainer<F extends $LootFunctionsContainer<any> = $LootFunctionsContainer<any>> {
"addAttributes"(action: $Consumer$$Type<$AddAttributesFunction$Builder$$Type>): F
"addFunction"(lootItemFunction0: $LootItemFunction$$Type): F
"addFunction"(builder: $LootItemFunction$Builder$$Type): F
"addLore"(...components: $Component$$Type[]): F
"addNBT"(tag: $CompoundTag$$Type): F
"addNbt"(tag: $CompoundTag$$Type): F
"addPotion"(potion: $Potion$$Type): F
"applyBinomialDistributionBonus"(enchantment: $Enchantment$$Type, probability: float, n: integer): F
"applyBonus"(enchantment: $Enchantment$$Type, multiplier: integer): F
"applyLootingBonus"(numberProvider: $NumberProvider$$Type): F
"applyOreBonus"(enchantment: $Enchantment$$Type): F
"customFunction"(json: $JsonObject$$Type): F
"damage"(numberProvider: $NumberProvider$$Type): F
"enchantRandomly"(): F
"enchantRandomly"(enchantments: $Enchantment$$Type[]): F
"enchantWithLevels"(numberProvider: $NumberProvider$$Type): F
"enchantWithLevels"(numberProvider: $NumberProvider$$Type, allowTreasure: boolean): F
"functions"(filter: $ItemFilter$$Type, action: $Consumer$$Type<$LootFunctionsContainer$$Type<F>>): F
"limitCount"(numberProvider: $NumberProvider$$Type): F
"limitCount"(numberProviderMin: $NumberProvider$$Type, numberProviderMax: $NumberProvider$$Type): F
"replaceLore"(...components: $Component$$Type[]): F
"setName"(component: $Component$$Type): F
"simulateExplosionDecay"(): F
"smeltLoot"(): F
set "name"(value: $Component$$Type)
}

export namespace $LootFunctionsContainer {
const probejs$$marker: never
}
export abstract class $LootFunctionsContainer$$Static<F extends $LootFunctionsContainer<any> = $LootFunctionsContainer<any>> implements $LootFunctionsContainer<F> {
}
}

declare module "com.almostreliable.lootjs.kube.LootConditionsContainer" {
import { $ResourceLocation$$Type } from "net.minecraft.resources.ResourceLocation"
import { $Enchantment$$Type } from "net.minecraft.world.item.enchantment.Enchantment"
import { $Resolver$$Type } from "com.almostreliable.lootjs.filters.Resolver"
import { $JsonObject$$Type } from "com.google.gson.JsonObject"
import { $ILootCondition, $ILootCondition$$Type } from "com.almostreliable.lootjs.core.ILootCondition"
import { $Predicate$$Type } from "java.util.function.Predicate"
import { $ItemFilter$$Type } from "com.almostreliable.lootjs.filters.ItemFilter"
import { $BlockEntity$$Type } from "net.minecraft.world.level.block.entity.BlockEntity"
import { $Consumer$$Type } from "java.util.function.Consumer"
import { $DistancePredicateBuilder$$Type } from "com.almostreliable.lootjs.loot.condition.builder.DistancePredicateBuilder"
import { $ServerPlayer$$Type } from "net.minecraft.server.level.ServerPlayer"
import { $List } from "java.util.List"
import { $Entity$$Type } from "net.minecraft.world.entity.Entity"
import { $MinMaxBounds$Doubles$$Type } from "net.minecraft.advancements.critereon.MinMaxBounds$Doubles"
import { $Map$$Type } from "java.util.Map"
import { $EquipmentSlot$$Type } from "net.minecraft.world.entity.EquipmentSlot"
import { $Block$$Type } from "net.minecraft.world.level.block.Block"
import { $LootItemCondition$Builder$$Type } from "net.minecraft.world.level.storage.loot.predicates.LootItemCondition$Builder"
import { $DamageSourcePredicateBuilderJS$$Type } from "com.almostreliable.lootjs.kube.builder.DamageSourcePredicateBuilderJS"
import { $EntityPredicateBuilderJS$$Type } from "com.almostreliable.lootjs.kube.builder.EntityPredicateBuilderJS"

export interface $LootConditionsContainer<B extends $LootConditionsContainer<any> = $LootConditionsContainer<any>> {
"addCondition"(builder: $LootItemCondition$Builder$$Type): B
"addCondition"(iLootCondition0: $ILootCondition$$Type): B
"and"(action: $Consumer$$Type<$LootConditionsContainer$$Type<B>>): B
"anyBiome"(...resolvers: $Resolver$$Type[]): B
"anyDimension"(...dimensions: $ResourceLocation$$Type[]): B
"anyStructure"(idOrTags: string[], exact: boolean): B
"biome"(...resolvers: $Resolver$$Type[]): B
"blockEntityPredicate"(predicate: $Predicate$$Type<$BlockEntity$$Type>): B
"createConditions"(action: $Consumer$$Type<$LootConditionsContainer$$Type<B>>): $List<$ILootCondition>
"customCondition"(json: $JsonObject$$Type): B
"customDistanceToPlayer"(action: $Consumer$$Type<$DistancePredicateBuilder$$Type>): B
"directKillerPredicate"(predicate: $Predicate$$Type<$Entity$$Type>): B
"distanceToKiller"(bounds: $MinMaxBounds$Doubles$$Type): B
"entityPredicate"(predicate: $Predicate$$Type<$Entity$$Type>): B
"hasAnyStage"(...stages: string[]): B
"killedByPlayer"(): B
"killerPredicate"(predicate: $Predicate$$Type<$Entity$$Type>): B
"lightLevel"(min: integer, max: integer): B
"matchBlockState"(block: $Block$$Type, propertyMap: $Map$$Type<string, string>): B
"matchDamageSource"(action: $Consumer$$Type<$DamageSourcePredicateBuilderJS$$Type>): B
"matchDirectKiller"(action: $Consumer$$Type<$EntityPredicateBuilderJS$$Type>): B
"matchEntity"(action: $Consumer$$Type<$EntityPredicateBuilderJS$$Type>): B
"matchEquip"(slot: $EquipmentSlot$$Type, filter: $ItemFilter$$Type): B
"matchFluid"(resolver: $Resolver$$Type): B
"matchKiller"(action: $Consumer$$Type<$EntityPredicateBuilderJS$$Type>): B
"matchLoot"(filter: $ItemFilter$$Type): B
"matchLoot"(filter: $ItemFilter$$Type, exact: boolean): B
"matchMainHand"(filter: $ItemFilter$$Type): B
"matchOffHand"(filter: $ItemFilter$$Type): B
"matchPlayer"(action: $Consumer$$Type<$EntityPredicateBuilderJS$$Type>): B
"not"(action: $Consumer$$Type<$LootConditionsContainer$$Type<B>>): B
"or"(action: $Consumer$$Type<$LootConditionsContainer$$Type<B>>): B
"playerPredicate"(predicate: $Predicate$$Type<$ServerPlayer$$Type>): B
"randomChance"(value: float): B
"randomChanceWithEnchantment"(enchantment: $Enchantment$$Type, chances: float[]): B
"randomChanceWithLooting"(value: float, looting: float): B
"randomTableBonus"(enchantment: $Enchantment$$Type, chances: float[]): B
"survivesExplosion"(): B
"timeCheck"(period: long, min: integer, max: integer): B
"timeCheck"(min: integer, max: integer): B
"weatherCheck"(map: $Map$$Type<string, boolean>): B
}

export namespace $LootConditionsContainer {
const probejs$$marker: never
}
export abstract class $LootConditionsContainer$$Static<B extends $LootConditionsContainer<any> = $LootConditionsContainer<any>> implements $LootConditionsContainer<B> {
}
}

declare module "com.almostreliable.lootjs.loot.AddAttributesFunction$Modifier$Builder" {
import { $AttributeModifier$Operation$$Type } from "net.minecraft.world.entity.ai.attributes.AttributeModifier$Operation"
import { $NumberProvider$$Type } from "net.minecraft.world.level.storage.loot.providers.number.NumberProvider"
import { $AddAttributesFunction$Modifier } from "com.almostreliable.lootjs.loot.AddAttributesFunction$Modifier"
import { $EquipmentSlot$$Type } from "net.minecraft.world.entity.EquipmentSlot"
import { $UUID$$Type } from "java.util.UUID"
import { $Attribute$$Type } from "net.minecraft.world.entity.ai.attributes.Attribute"

export class $AddAttributesFunction$Modifier$Builder {
constructor(attribute: $Attribute$$Type, amount: $NumberProvider$$Type)

public "build"(): $AddAttributesFunction$Modifier
public "setName"(name: string): void
public "setOperation"(operation: $AttributeModifier$Operation$$Type): void
public "setProbability"(probability: float): void
public "setSlots"(slots: $EquipmentSlot$$Type[]): void
public "setUuid"(uuid: $UUID$$Type): void
set "name"(value: string)
set "operation"(value: $AttributeModifier$Operation$$Type)
set "probability"(value: float)
set "slots"(value: $EquipmentSlot$$Type[])
set "uuid"(value: $UUID$$Type)
}
}

declare module "com.almostreliable.unified.compat.AlmostKube" {
import { $ResourceLocation$$Type } from "net.minecraft.resources.ResourceLocation"
import { $UnifyConfig } from "com.almostreliable.unified.config.UnifyConfig"
import { $Set } from "java.util.Set"
import { $ItemStack, $ItemStack$$Type } from "net.minecraft.world.item.ItemStack"

export class $AlmostKube {
public static "getItemIds"(tag: $ResourceLocation$$Type): $Set<string>
public static "getPreferredItemForTag"(tag: $ResourceLocation$$Type): $ItemStack
public static "getPreferredTagForItem"(stack: $ItemStack$$Type): string
public static "getReplacementForItem"(stack: $ItemStack$$Type): $ItemStack
public static "getTags"(): $Set<string>
public static "getUnifyConfig"(): $UnifyConfig
}
}

declare module "com.almostreliable.lootjs.kube.LootEntryWrapper" {
import { $JsonObject$$Type } from "com.google.gson.JsonObject"
import { $CompoundTag$$Type } from "net.minecraft.nbt.CompoundTag"
import { $ItemStack$$Type } from "net.minecraft.world.item.ItemStack"
import { $LootEntry } from "com.almostreliable.lootjs.core.LootEntry"

export class $LootEntryWrapper {
constructor()

public static "of"(in_: $ItemStack$$Type, nbt: $CompoundTag$$Type): $LootEntry
public static "of"(o: any): $LootEntry
public static "of"(in_: $ItemStack$$Type, count: integer, nbt: $CompoundTag$$Type): $LootEntry
public static "of"(in_: $ItemStack$$Type, count: integer): $LootEntry
public static "ofJson"(json: $JsonObject$$Type): $LootEntry
public static "withChance"(o: any, chance: integer): $LootEntry
}
}

declare module "com.almostreliable.lootjs.kube.builder.LootActionsBuilderJS" {
import { $ResourceLocation$$Type } from "net.minecraft.resources.ResourceLocation"
import { $Enchantment$$Type } from "net.minecraft.world.item.enchantment.Enchantment"
import { $ILootAction$$Type } from "com.almostreliable.lootjs.core.ILootAction"
import { $Resolver$$Type } from "com.almostreliable.lootjs.filters.Resolver"
import { $JsonObject$$Type } from "com.google.gson.JsonObject"
import { $LootContextJS$$Type } from "com.almostreliable.lootjs.kube.LootContextJS"
import { $ItemFilter$$Type } from "com.almostreliable.lootjs.filters.ItemFilter"
import { $ServerPlayer$$Type } from "net.minecraft.server.level.ServerPlayer"
import { $NumberProvider$$Type } from "net.minecraft.world.level.storage.loot.providers.number.NumberProvider"
import { $LootFunctionsContainer, $LootFunctionsContainer$$Type } from "com.almostreliable.lootjs.loot.LootFunctionsContainer"
import { $Explosion$BlockInteraction$$Type } from "net.minecraft.world.level.Explosion$BlockInteraction"
import { $MinMaxBounds$Doubles$$Type } from "net.minecraft.advancements.critereon.MinMaxBounds$Doubles"
import { $GroupedLootBuilder$$Type } from "com.almostreliable.lootjs.loot.GroupedLootBuilder"
import { $Map$$Type } from "java.util.Map"
import { $LootItemCondition$Builder$$Type } from "net.minecraft.world.level.storage.loot.predicates.LootItemCondition$Builder"
import { $LootEntry$$Type } from "com.almostreliable.lootjs.core.LootEntry"
import { $AddAttributesFunction$Builder$$Type } from "com.almostreliable.lootjs.loot.AddAttributesFunction$Builder"
import { $ILootCondition, $ILootCondition$$Type } from "com.almostreliable.lootjs.core.ILootCondition"
import { $Component$$Type } from "net.minecraft.network.chat.Component"
import { $LootConditionsContainer, $LootConditionsContainer$$Type } from "com.almostreliable.lootjs.kube.LootConditionsContainer"
import { $Predicate$$Type } from "java.util.function.Predicate"
import { $BlockEntity$$Type } from "net.minecraft.world.level.block.entity.BlockEntity"
import { $Potion$$Type } from "net.minecraft.world.item.alchemy.Potion"
import { $Consumer$$Type } from "java.util.function.Consumer"
import { $DistancePredicateBuilder$$Type } from "com.almostreliable.lootjs.loot.condition.builder.DistancePredicateBuilder"
import { $ModifyLootAction$Callback$$Type } from "com.almostreliable.lootjs.loot.action.ModifyLootAction$Callback"
import { $List } from "java.util.List"
import { $CompoundTag$$Type } from "net.minecraft.nbt.CompoundTag"
import { $Entity$$Type } from "net.minecraft.world.entity.Entity"
import { $EquipmentSlot$$Type } from "net.minecraft.world.entity.EquipmentSlot"
import { $LootItemFunction$Builder$$Type } from "net.minecraft.world.level.storage.loot.functions.LootItemFunction$Builder"
import { $Block$$Type } from "net.minecraft.world.level.block.Block"
import { $LootActionsContainer } from "com.almostreliable.lootjs.loot.LootActionsContainer"
import { $DamageSourcePredicateBuilderJS$$Type } from "com.almostreliable.lootjs.kube.builder.DamageSourcePredicateBuilderJS"
import { $EntityPredicateBuilderJS$$Type } from "com.almostreliable.lootjs.kube.builder.EntityPredicateBuilderJS"

export class $LootActionsBuilderJS implements $LootConditionsContainer<$LootActionsBuilderJS>, $LootFunctionsContainer<$LootActionsBuilderJS>, $LootActionsContainer<$LootActionsBuilderJS> {
static readonly "DEPRECATED_MSG": string

constructor()

public "addAction"(action: $ILootAction$$Type): $LootActionsBuilderJS
public "addAlternativesLoot"(...entries: $LootEntry$$Type[]): $LootActionsBuilderJS
public "addAttributes"(action: $Consumer$$Type<$AddAttributesFunction$Builder$$Type>): $LootActionsBuilderJS
public "addCondition"(condition: $ILootCondition$$Type): $LootActionsBuilderJS
public "addCondition"(builder: $LootItemCondition$Builder$$Type): $LootActionsBuilderJS
public "addFunction"(builder: $LootItemFunction$Builder$$Type): $LootActionsBuilderJS
public "addLoot"(...entries: $LootEntry$$Type[]): $LootActionsBuilderJS
public "addLore"(...components: $Component$$Type[]): $LootActionsBuilderJS
public "addNBT"(tag: $CompoundTag$$Type): $LootActionsBuilderJS
public "addNbt"(tag: $CompoundTag$$Type): $LootActionsBuilderJS
public "addPotion"(potion: $Potion$$Type): $LootActionsBuilderJS
public "addSequenceLoot"(...entries: $LootEntry$$Type[]): $LootActionsBuilderJS
public "addWeightedLoot"(poolEntries: $LootEntry$$Type[]): $LootActionsBuilderJS
public "addWeightedLoot"(numberProvider: $NumberProvider$$Type, poolEntries: $LootEntry$$Type[]): $LootActionsBuilderJS
public "addWeightedLoot"(numberProvider: $NumberProvider$$Type, allowDuplicateLoot: boolean, poolEntries: $LootEntry$$Type[]): $LootActionsBuilderJS
public "and"(action: $Consumer$$Type<$LootConditionsContainer$$Type<$LootActionsBuilderJS$$Type>>): $LootActionsBuilderJS
public "anyBiome"(...resolvers: $Resolver$$Type[]): $LootActionsBuilderJS
public "anyDimension"(...dimensions: $ResourceLocation$$Type[]): $LootActionsBuilderJS
public "anyStructure"(idOrTags: string[], exact: boolean): $LootActionsBuilderJS
public "apply"(action: $Consumer$$Type<$LootContextJS$$Type>): $LootActionsBuilderJS
public "applyBinomialDistributionBonus"(enchantment: $Enchantment$$Type, probability: float, n: integer): $LootActionsBuilderJS
public "applyBonus"(enchantment: $Enchantment$$Type, multiplier: integer): $LootActionsBuilderJS
public "applyLootingBonus"(numberProvider: $NumberProvider$$Type): $LootActionsBuilderJS
public "applyOreBonus"(enchantment: $Enchantment$$Type): $LootActionsBuilderJS
public "biome"(...resolvers: $Resolver$$Type[]): $LootActionsBuilderJS
public "blockEntityPredicate"(predicate: $Predicate$$Type<$BlockEntity$$Type>): $LootActionsBuilderJS
public "createConditions"(action: $Consumer$$Type<$LootConditionsContainer$$Type<$LootActionsBuilderJS$$Type>>): $List<$ILootCondition>
public "customCondition"(json: $JsonObject$$Type): $LootActionsBuilderJS
public "customDistanceToPlayer"(action: $Consumer$$Type<$DistancePredicateBuilder$$Type>): $LootActionsBuilderJS
public "customFunction"(json: $JsonObject$$Type): $LootActionsBuilderJS
public "damage"(numberProvider: $NumberProvider$$Type): $LootActionsBuilderJS
public "directKillerPredicate"(predicate: $Predicate$$Type<$Entity$$Type>): $LootActionsBuilderJS
public "distanceToKiller"(bounds: $MinMaxBounds$Doubles$$Type): $LootActionsBuilderJS
public "dropExperience"(amount: integer): $LootActionsBuilderJS
public "enchantRandomly"(): $LootActionsBuilderJS
public "enchantRandomly"(enchantments: $Enchantment$$Type[]): $LootActionsBuilderJS
public "enchantWithLevels"(numberProvider: $NumberProvider$$Type): $LootActionsBuilderJS
public "enchantWithLevels"(numberProvider: $NumberProvider$$Type, allowTreasure: boolean): $LootActionsBuilderJS
public "entityPredicate"(predicate: $Predicate$$Type<$Entity$$Type>): $LootActionsBuilderJS
public "functions"(filter: $ItemFilter$$Type, action: $Consumer$$Type<$LootFunctionsContainer$$Type<$LootActionsBuilderJS$$Type>>): $LootActionsBuilderJS
public "getLogName"(alternative: string): string
public "group"(callback: $Consumer$$Type<$GroupedLootBuilder$$Type>): $LootActionsBuilderJS
public "hasAnyStage"(...stages: string[]): $LootActionsBuilderJS
public "killedByPlayer"(): $LootActionsBuilderJS
public "killerPredicate"(predicate: $Predicate$$Type<$Entity$$Type>): $LootActionsBuilderJS
public "lightLevel"(min: integer, max: integer): $LootActionsBuilderJS
public "limitCount"(numberProvider: $NumberProvider$$Type): $LootActionsBuilderJS
public "limitCount"(numberProviderMin: $NumberProvider$$Type, numberProviderMax: $NumberProvider$$Type): $LootActionsBuilderJS
public "logName"(logName: string): $LootActionsBuilderJS
public "matchBlockState"(block: $Block$$Type, propertyMap: $Map$$Type<string, string>): $LootActionsBuilderJS
public "matchDamageSource"(action: $Consumer$$Type<$DamageSourcePredicateBuilderJS$$Type>): $LootActionsBuilderJS
public "matchDirectKiller"(action: $Consumer$$Type<$EntityPredicateBuilderJS$$Type>): $LootActionsBuilderJS
public "matchEntity"(action: $Consumer$$Type<$EntityPredicateBuilderJS$$Type>): $LootActionsBuilderJS
public "matchEquip"(slot: $EquipmentSlot$$Type, filter: $ItemFilter$$Type): $LootActionsBuilderJS
public "matchFluid"(resolver: $Resolver$$Type): $LootActionsBuilderJS
public "matchKiller"(action: $Consumer$$Type<$EntityPredicateBuilderJS$$Type>): $LootActionsBuilderJS
public "matchLoot"(filter: $ItemFilter$$Type): $LootActionsBuilderJS
public "matchLoot"(filter: $ItemFilter$$Type, exact: boolean): $LootActionsBuilderJS
public "matchMainHand"(filter: $ItemFilter$$Type): $LootActionsBuilderJS
public "matchOffHand"(filter: $ItemFilter$$Type): $LootActionsBuilderJS
public "matchPlayer"(action: $Consumer$$Type<$EntityPredicateBuilderJS$$Type>): $LootActionsBuilderJS
public "modifyLoot"(filter: $ItemFilter$$Type, callback: $ModifyLootAction$Callback$$Type): $LootActionsBuilderJS
public "not"(action: $Consumer$$Type<$LootConditionsContainer$$Type<$LootActionsBuilderJS$$Type>>): $LootActionsBuilderJS
public "or"(action: $Consumer$$Type<$LootConditionsContainer$$Type<$LootActionsBuilderJS$$Type>>): $LootActionsBuilderJS
public "playerAction"(action: $Consumer$$Type<$ServerPlayer$$Type>): $LootActionsBuilderJS
public "playerPredicate"(predicate: $Predicate$$Type<$ServerPlayer$$Type>): $LootActionsBuilderJS
public "pool"(callback: $Consumer$$Type<$GroupedLootBuilder$$Type>): $LootActionsBuilderJS
public "randomChance"(value: float): $LootActionsBuilderJS
public "randomChanceWithEnchantment"(enchantment: $Enchantment$$Type, chances: float[]): $LootActionsBuilderJS
public "randomChanceWithLooting"(value: float, looting: float): $LootActionsBuilderJS
public "randomTableBonus"(enchantment: $Enchantment$$Type, chances: float[]): $LootActionsBuilderJS
public "removeLoot"(filter: $ItemFilter$$Type): $LootActionsBuilderJS
public "replaceLoot"(filter: $ItemFilter$$Type, lootEntry: $LootEntry$$Type): $LootActionsBuilderJS
public "replaceLoot"(filter: $ItemFilter$$Type, lootEntry: $LootEntry$$Type, preserveCount: boolean): $LootActionsBuilderJS
public "replaceLore"(...components: $Component$$Type[]): $LootActionsBuilderJS
public "setName"(component: $Component$$Type): $LootActionsBuilderJS
public "simulateExplosionDecay"(): $LootActionsBuilderJS
public "smeltLoot"(): $LootActionsBuilderJS
public "survivesExplosion"(): $LootActionsBuilderJS
public "timeCheck"(period: long, min: integer, max: integer): $LootActionsBuilderJS
public "timeCheck"(min: integer, max: integer): $LootActionsBuilderJS
public "triggerExplosion"(radius: float, mode: $Explosion$BlockInteraction$$Type, fire: boolean): $LootActionsBuilderJS
public "triggerExplosion"(radius: float, destroy: boolean, fire: boolean): $LootActionsBuilderJS
public "triggerLightningStrike"(shouldDamage: boolean): $LootActionsBuilderJS
public "weatherCheck"(map: $Map$$Type<string, boolean>): $LootActionsBuilderJS
set "name"(value: $Component$$Type)
}
}

declare module "com.almostreliable.lootjs.kube.wrapper.IntervalJS" {
import { $MinMaxBounds$Ints } from "net.minecraft.advancements.critereon.MinMaxBounds$Ints"
import { $MinMaxBounds$Doubles } from "net.minecraft.advancements.critereon.MinMaxBounds$Doubles"

export class $IntervalJS {
constructor()

public "between"(min: double, max: double): $IntervalJS
public "getVanillaDoubles"(): $MinMaxBounds$Doubles
public "getVanillaInt"(): $MinMaxBounds$Ints
public "matches"(value: double): boolean
public "matchesSqr"(value: double): boolean
public "max"(max: double): $IntervalJS
public "min"(min: double): $IntervalJS
public static "ofDoubles"(o: any): $MinMaxBounds$Doubles
public static "ofInt"(o: any): $MinMaxBounds$Ints
get "vanillaDoubles"(): $MinMaxBounds$Doubles
get "vanillaInt"(): $MinMaxBounds$Ints
}
}

declare module "com.almostreliable.unified.utils.UnifyTag" {
import { $ResourceLocation, $ResourceLocation$$Type } from "net.minecraft.resources.ResourceLocation"
import { $Item } from "net.minecraft.world.item.Item"
import { $Class, $Class$$Type } from "java.lang.Class"
import { $Block } from "net.minecraft.world.level.block.Block"
import { $Record } from "java.lang.Record"

export class $UnifyTag<T = any> extends $Record {
constructor(boundType: $Class$$Type<T>, location: $ResourceLocation$$Type)

public static "block"(location: $ResourceLocation$$Type): $UnifyTag<$Block>
public "boundType"(): $Class<T>
public static "item"(location: $ResourceLocation$$Type): $UnifyTag<$Item>
public "location"(): $ResourceLocation
}
}

declare module "com.almostreliable.lootjs.filters.ResourceLocationFilter" {
import { $ResourceLocation, $ResourceLocation$$Type } from "net.minecraft.resources.ResourceLocation"
import { $Predicate, $Predicate$$Type } from "java.util.function.Predicate"

export interface $ResourceLocationFilter extends $Predicate<$ResourceLocation> {
"and"(predicate0: $Predicate$$Type<$ResourceLocation$$Type>): $Predicate<$ResourceLocation>
"negate"(): $Predicate<$ResourceLocation>
"or"(predicate0: $Predicate$$Type<$ResourceLocation$$Type>): $Predicate<$ResourceLocation>
"test"(resourceLocation0: $ResourceLocation$$Type): boolean
}

export namespace $ResourceLocationFilter {
function isEqual<T>(object0: any): $Predicate<T>
function not<T>(predicate0: $Predicate$$Type<T>): $Predicate<T>
}
export abstract class $ResourceLocationFilter$$Static implements $ResourceLocationFilter {
static "isEqual"<T>(object0: any): $Predicate<T>
static "not"<T>(predicate0: $Predicate$$Type<T>): $Predicate<T>
}
}

declare module "com.almostreliable.lootjs.filters.ItemFilter" {
import { $ResourceLocationFilter$$Type } from "com.almostreliable.lootjs.filters.ResourceLocationFilter"
import { $Predicate, $Predicate$$Type } from "java.util.function.Predicate"
import { $EquipmentSlot$$Type } from "net.minecraft.world.entity.EquipmentSlot"
import { $ItemStack, $ItemStack$$Type } from "net.minecraft.world.item.ItemStack"

export interface $ItemFilter extends $Predicate<$ItemStack> {
"and"(other: $ItemFilter$$Type): $ItemFilter
"and"(predicate0: $Predicate$$Type<$ItemStack$$Type>): $Predicate<$ItemStack>
"or"(other: $ItemFilter$$Type): $ItemFilter
"or"(predicate0: $Predicate$$Type<$ItemStack$$Type>): $Predicate<$ItemStack>
"test"(itemStack0: $ItemStack$$Type): boolean
}

export namespace $ItemFilter {
const ALWAYS_FALSE: $ItemFilter
const ALWAYS_TRUE: $ItemFilter
const ARMOR: $ItemFilter
const AXE: $ItemFilter
const BLOCK: $ItemFilter
const CHEST_ARMOR: $ItemFilter
const DAMAGEABLE: $ItemFilter
const DAMAGED: $ItemFilter
const ENCHANTABLE: $ItemFilter
const ENCHANTED: $ItemFilter
const FEET_ARMOR: $ItemFilter
const FOOD: $ItemFilter
const HAS_TIER: $ItemFilter
const HEAD_ARMOR: $ItemFilter
const HOE: $ItemFilter
const LEGS_ARMOR: $ItemFilter
const PICKAXE: $ItemFilter
const POTION: $ItemFilter
const PROJECTILE_WEAPON: $ItemFilter
const SHOVEL: $ItemFilter
const SWORD: $ItemFilter
const TOOL: $ItemFilter
const WEAPON: $ItemFilter
function and(...itemFilters: $ItemFilter$$Type[]): $ItemFilter
function custom(predicate: $Predicate$$Type<$ItemStack$$Type>): $ItemFilter
function equipmentSlot(slot: $EquipmentSlot$$Type): $ItemFilter
function hasEnchantment(filter: $ResourceLocationFilter$$Type): $ItemFilter
function hasEnchantment(filter: $ResourceLocationFilter$$Type, min: integer, max: integer): $ItemFilter
function isEqual<T>(object0: any): $Predicate<T>
function not(itemFilter: $ItemFilter$$Type): $ItemFilter
function not<T>(predicate0: $Predicate$$Type<T>): $Predicate<T>
function or(...itemFilters: $ItemFilter$$Type[]): $ItemFilter
}
export abstract class $ItemFilter$$Static implements $ItemFilter {
static readonly "ALWAYS_FALSE": $ItemFilter
static readonly "ALWAYS_TRUE": $ItemFilter
static readonly "ARMOR": $ItemFilter
static readonly "AXE": $ItemFilter
static readonly "BLOCK": $ItemFilter
static readonly "CHEST_ARMOR": $ItemFilter
static readonly "DAMAGEABLE": $ItemFilter
static readonly "DAMAGED": $ItemFilter
static readonly "ENCHANTABLE": $ItemFilter
static readonly "ENCHANTED": $ItemFilter
static readonly "FEET_ARMOR": $ItemFilter
static readonly "FOOD": $ItemFilter
static readonly "HAS_TIER": $ItemFilter
static readonly "HEAD_ARMOR": $ItemFilter
static readonly "HOE": $ItemFilter
static readonly "LEGS_ARMOR": $ItemFilter
static readonly "PICKAXE": $ItemFilter
static readonly "POTION": $ItemFilter
static readonly "PROJECTILE_WEAPON": $ItemFilter
static readonly "SHOVEL": $ItemFilter
static readonly "SWORD": $ItemFilter
static readonly "TOOL": $ItemFilter
static readonly "WEAPON": $ItemFilter

static "and"(...itemFilters: $ItemFilter$$Type[]): $ItemFilter
static "custom"(predicate: $Predicate$$Type<$ItemStack$$Type>): $ItemFilter
static "equipmentSlot"(slot: $EquipmentSlot$$Type): $ItemFilter
static "hasEnchantment"(filter: $ResourceLocationFilter$$Type): $ItemFilter
static "hasEnchantment"(filter: $ResourceLocationFilter$$Type, min: integer, max: integer): $ItemFilter
static "isEqual"<T>(object0: any): $Predicate<T>
static "not"(itemFilter: $ItemFilter$$Type): $ItemFilter
static "not"<T>(predicate0: $Predicate$$Type<T>): $Predicate<T>
static "or"(...itemFilters: $ItemFilter$$Type[]): $ItemFilter
}
}

declare module "com.almostreliable.lootjs.kube.LootModificationEventJS" {
import { $LootActionsBuilderJS } from "com.almostreliable.lootjs.kube.builder.LootActionsBuilderJS"
import { $ResourceLocationFilter$$Type } from "com.almostreliable.lootjs.filters.ResourceLocationFilter"
import { $EntityType$$Type } from "net.minecraft.world.entity.EntityType"
import { $LootContextType$$Type } from "com.almostreliable.lootjs.core.LootContextType"
import { $EventJS } from "dev.latvian.mods.kubejs.event.EventJS"

export class $LootModificationEventJS extends $EventJS {
constructor()

public "addBlockLootModifier"(o: any): $LootActionsBuilderJS
public "addEntityLootModifier"(...entities: $EntityType$$Type<any>[]): $LootActionsBuilderJS
public "addLootTableModifier"(...filters: $ResourceLocationFilter$$Type[]): $LootActionsBuilderJS
public "addLootTypeModifier"(...types: $LootContextType$$Type[]): $LootActionsBuilderJS
public "disableCreeperHeadDrop"(): void
public "disableLootModification"(...filters: $ResourceLocationFilter$$Type[]): void
public "disableSkeletonHeadDrop"(): void
public "disableWitherStarDrop"(): void
public "disableZombieHeadDrop"(): void
public "enableLogging"(): void
}
}

declare module "com.almostreliable.unified.config.Config$Serializer" {
import { $JsonObject, $JsonObject$$Type } from "com.google.gson.JsonObject"
import { $Supplier$$Type } from "java.util.function.Supplier"
import { $Config, $Config$$Type } from "com.almostreliable.unified.config.Config"

export class $Config$Serializer<T extends $Config = $Config> {
constructor()

public "deserialize"(jsonObject0: $JsonObject$$Type): T
public "isInvalid"(): boolean
public "safeGet"<V>(supplier: $Supplier$$Type<V>, defaultValue: V): V
public "serialize"(t0: T): $JsonObject
get "invalid"(): boolean
}
}

declare module "com.almostreliable.lootjs.loot.AddAttributesFunction$Modifier" {
import { $AttributeModifier$Operation$$Type } from "net.minecraft.world.entity.ai.attributes.AttributeModifier$Operation"
import { $NumberProvider$$Type } from "net.minecraft.world.level.storage.loot.providers.number.NumberProvider"
import { $LootContext$$Type } from "net.minecraft.world.level.storage.loot.LootContext"
import { $AttributeModifier } from "net.minecraft.world.entity.ai.attributes.AttributeModifier"
import { $EquipmentSlot } from "net.minecraft.world.entity.EquipmentSlot"
import { $ItemStack$$Type } from "net.minecraft.world.item.ItemStack"
import { $UUID$$Type } from "java.util.UUID"
import { $Function$$Type } from "java.util.function.Function"
import { $Attribute$$Type } from "net.minecraft.world.entity.ai.attributes.Attribute"

export class $AddAttributesFunction$Modifier {
constructor(probability: float, attribute: $Attribute$$Type, operation: $AttributeModifier$Operation$$Type, amount: $NumberProvider$$Type, name: string, slots: $Function$$Type<$ItemStack$$Type, $EquipmentSlot[]>, uuid: $UUID$$Type)

public "createAttributeModifier"(context: $LootContext$$Type): $AttributeModifier
}
}

declare module "com.almostreliable.lootjs.filters.Resolver" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export class $Resolver {
public static "of"(value: string): $Resolver
}
}

declare module "com.almostreliable.lootjs.core.LootContextType" {
import { $Enum } from "java.lang.Enum"

export class $LootContextType extends $Enum<$LootContextType> {
static readonly "ADVANCEMENT_ENTITY": $LootContextType
static readonly "ADVANCEMENT_REWARD": $LootContextType
static readonly "BLOCK": $LootContextType
static readonly "CHEST": $LootContextType
static readonly "ENTITY": $LootContextType
static readonly "FISHING": $LootContextType
static readonly "GIFT": $LootContextType
static readonly "PIGLIN_BARTER": $LootContextType
static readonly "UNKNOWN": $LootContextType

public static "valueOf"(name: string): $LootContextType
public static "values"(): $LootContextType[]
}
}

declare module "com.almostreliable.lootjs.kube.LootContextJS" {
import { $ResourceLocation } from "net.minecraft.resources.ResourceLocation"
import { $RandomSource } from "net.minecraft.util.RandomSource"
import { $ItemFilter$$Type } from "com.almostreliable.lootjs.filters.ItemFilter"
import { $ServerLevel } from "net.minecraft.server.level.ServerLevel"
import { $Consumer$$Type } from "java.util.function.Consumer"
import { $BlockContainerJS } from "dev.latvian.mods.kubejs.level.BlockContainerJS"
import { $ServerPlayer } from "net.minecraft.server.level.ServerPlayer"
import { $List } from "java.util.List"
import { $MinecraftServer } from "net.minecraft.server.MinecraftServer"
import { $Entity } from "net.minecraft.world.entity.Entity"
import { $LootContext, $LootContext$$Type } from "net.minecraft.world.level.storage.loot.LootContext"
import { $BlockPos } from "net.minecraft.core.BlockPos"
import { $Vec3 } from "net.minecraft.world.phys.Vec3"
import { $DamageSource } from "net.minecraft.world.damagesource.DamageSource"
import { $Map } from "java.util.Map"
import { $LootContextType } from "com.almostreliable.lootjs.core.LootContextType"
import { $ItemStack, $ItemStack$$Type } from "net.minecraft.world.item.ItemStack"
import { $LootEntry$$Type } from "com.almostreliable.lootjs.core.LootEntry"

export class $LootContextJS {
constructor(context: $LootContext$$Type)

public "addLoot"(lootEntry: $LootEntry$$Type): void
public "cancel"(): void
public "findLoot"(itemFilter: $ItemFilter$$Type): $List<$ItemStack>
public "forEachLoot"(action: $Consumer$$Type<$ItemStack$$Type>): void
public "getBlockPos"(): $BlockPos
public "getCustomData"(): $Map<string, any>
public "getDamageSource"(): $DamageSource
public "getDestroyedBlock"(): $BlockContainerJS
public "getEntity"(): $Entity
public "getExplosionRadius"(): float
public "getKillerEntity"(): $Entity
public "getLevel"(): $ServerLevel
public "getLoot"(): $List<$ItemStack>
public "getLootTableId"(): $ResourceLocation
public "getLooting"(): integer
public "getLuck"(): float
public "getPlayer"(): $ServerPlayer
public "getPosition"(): $Vec3
public "getRandom"(): $RandomSource
public "getServer"(): $MinecraftServer
public "getTool"(): $ItemStack
public "getType"(): $LootContextType
public "getVanillaContext"(): $LootContext
public "hasLoot"(ingredient: $ItemFilter$$Type): boolean
public "isCanceled"(): boolean
public "isExploded"(): boolean
public "lootSize"(): integer
public "removeLoot"(itemFilter: $ItemFilter$$Type): void
get "blockPos"(): $BlockPos
get "customData"(): $Map<string, any>
get "damageSource"(): $DamageSource
get "destroyedBlock"(): $BlockContainerJS
get "entity"(): $Entity
get "explosionRadius"(): float
get "killerEntity"(): $Entity
get "level"(): $ServerLevel
get "loot"(): $List<$ItemStack>
get "lootTableId"(): $ResourceLocation
get "looting"(): integer
get "luck"(): float
get "player"(): $ServerPlayer
get "position"(): $Vec3
get "random"(): $RandomSource
get "server"(): $MinecraftServer
get "tool"(): $ItemStack
get "type"(): $LootContextType
get "vanillaContext"(): $LootContext
get "canceled"(): boolean
get "exploded"(): boolean
}
}

