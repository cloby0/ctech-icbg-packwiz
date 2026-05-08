declare module "net.minecraftforge.common.extensions.IForgeCommandSourceStack" {
import { $ResourceLocation$$Type } from "net.minecraft.resources.ResourceLocation"
import { $Scoreboard } from "net.minecraft.world.scores.Scoreboard"
import { $RecipeManager } from "net.minecraft.world.item.crafting.RecipeManager"
import { $Advancement } from "net.minecraft.advancements.Advancement"
import { $Level } from "net.minecraft.world.level.Level"

export interface $IForgeCommandSourceStack {
"getAdvancement"(resourceLocation0: $ResourceLocation$$Type): $Advancement
"getRecipeManager"(): $RecipeManager
"getScoreboard"(): $Scoreboard
"getUnsidedLevel"(): $Level
get "recipeManager"(): $RecipeManager
get "scoreboard"(): $Scoreboard
get "unsidedLevel"(): $Level
}

export namespace $IForgeCommandSourceStack {
const probejs$$marker: never
}
export abstract class $IForgeCommandSourceStack$$Static implements $IForgeCommandSourceStack {
}
}

declare module "net.minecraftforge.common.util.MutableHashedLinkedMap" {
import { $Consumer$$Type } from "java.util.function.Consumer"
import { $Map$Entry, $Map$Entry$$Type } from "java.util.Map$Entry"
import { $Iterator } from "java.util.Iterator"
import { $MutableHashedLinkedMap$MergeFunction$$Type } from "net.minecraftforge.common.util.MutableHashedLinkedMap$MergeFunction"
import { $Hash$Strategy, $Hash$Strategy$$Type } from "it.unimi.dsi.fastutil.Hash$Strategy"
import { $Spliterator } from "java.util.Spliterator"
import { $Iterable } from "java.lang.Iterable"

export class $MutableHashedLinkedMap<K = any, V = any> implements $Iterable<$Map$Entry<K, V>> {
static readonly "BASIC": $Hash$Strategy<any>
static readonly "IDENTITY": $Hash$Strategy<any>

constructor()
constructor(strategy0: $Hash$Strategy$$Type<K>, mergeFunction1: $MutableHashedLinkedMap$MergeFunction$$Type<K, V>)
constructor(strategy0: $Hash$Strategy$$Type<K>)

public "contains"(k0: K): boolean
public "forEach"(consumer0: $Consumer$$Type<$Map$Entry$$Type<K, V>>): void
public "get"(k0: K): V
public "isEmpty"(): boolean
public "iterator"(): $Iterator<$Map$Entry<K, V>>
public "put"(k0: K, v1: V): V
public "putAfter"(k0: K, k1: K, v2: V): V
public "putBefore"(k0: K, k1: K, v2: V): V
public "putFirst"(k0: K, v1: V): V
public "remove"(k0: K): V
public "spliterator"(): $Spliterator<$Map$Entry<K, V>>
[Symbol.iterator](): IterableIterator<$Map$Entry<K, V>>;
get "empty"(): boolean
}
}

declare module "net.minecraftforge.common.extensions.IForgeAbstractMinecart" {
import { $BlockPos, $BlockPos$$Type } from "net.minecraft.core.BlockPos"

export interface $IForgeAbstractMinecart {
"canBeRidden"(): boolean
"canUseRail"(): boolean
"getComparatorLevel"(): integer
"getCurrentCartSpeedCapOnRail"(): float
"getCurrentRailPosition"(): $BlockPos
"getDragAir"(): double
"getMaxCartSpeedOnRail"(): float
"getMaxSpeedAirLateral"(): float
"getMaxSpeedAirVertical"(): float
"getMaxSpeedWithRail"(): double
"getSlopeAdjustment"(): double
"isPoweredCart"(): boolean
"moveMinecartOnRail"(blockPos0: $BlockPos$$Type): void
"setCanUseRail"(boolean0: boolean): void
"setCurrentCartSpeedCapOnRail"(float0: float): void
"setDragAir"(double0: double): void
"setMaxSpeedAirLateral"(float0: float): void
"setMaxSpeedAirVertical"(float0: float): void
"shouldDoRailFunctions"(): boolean
get "comparatorLevel"(): integer
get "currentCartSpeedCapOnRail"(): float
get "currentRailPosition"(): $BlockPos
get "dragAir"(): double
get "maxCartSpeedOnRail"(): float
get "maxSpeedAirLateral"(): float
get "maxSpeedAirVertical"(): float
get "maxSpeedWithRail"(): double
get "slopeAdjustment"(): double
get "poweredCart"(): boolean
set "currentCartSpeedCapOnRail"(value: float)
set "dragAir"(value: double)
set "maxSpeedAirLateral"(value: float)
set "maxSpeedAirVertical"(value: float)
}

export namespace $IForgeAbstractMinecart {
const DEFAULT_AIR_DRAG: double
const DEFAULT_MAX_SPEED_AIR_LATERAL: float
const DEFAULT_MAX_SPEED_AIR_VERTICAL: float
}
export abstract class $IForgeAbstractMinecart$$Static implements $IForgeAbstractMinecart {
static readonly "DEFAULT_AIR_DRAG": double
static readonly "DEFAULT_MAX_SPEED_AIR_LATERAL": float
static readonly "DEFAULT_MAX_SPEED_AIR_VERTICAL": float

}
}

declare module "net.minecraftforge.common.IForgeShearable" {
import { $List } from "java.util.List"
import { $BlockPos$$Type } from "net.minecraft.core.BlockPos"
import { $ItemStack, $ItemStack$$Type } from "net.minecraft.world.item.ItemStack"
import { $Level$$Type } from "net.minecraft.world.level.Level"
import { $Player$$Type } from "net.minecraft.world.entity.player.Player"

export interface $IForgeShearable {
"isShearable"(itemStack0: $ItemStack$$Type, level1: $Level$$Type, blockPos2: $BlockPos$$Type): boolean
"onSheared"(player0: $Player$$Type, itemStack1: $ItemStack$$Type, level2: $Level$$Type, blockPos3: $BlockPos$$Type, int4: integer): $List<$ItemStack>
}

export namespace $IForgeShearable {
const probejs$$marker: never
}
export abstract class $IForgeShearable$$Static implements $IForgeShearable {
}
}

declare module "net.minecraftforge.common.extensions.IForgeTagAppender" {
import { $TagKey$$Type } from "net.minecraft.tags.TagKey"
import { $ResourceLocation$$Type } from "net.minecraft.resources.ResourceLocation"
import { $ResourceKey$$Type } from "net.minecraft.resources.ResourceKey"
import { $TagsProvider$TagAppender } from "net.minecraft.data.tags.TagsProvider$TagAppender"

export interface $IForgeTagAppender<T = any> {
"addOptionalTag"(tagKey0: $TagKey$$Type<T>): $TagsProvider$TagAppender<T>
"addOptionalTags"(...tagKey0s: $TagKey$$Type<T>[]): $TagsProvider$TagAppender<T>
"addTags"(...tagKey0s: $TagKey$$Type<T>[]): $TagsProvider$TagAppender<T>
"remove"(resourceKey0: $ResourceKey$$Type<T>): $TagsProvider$TagAppender<T>
"remove"(resourceKey0: $ResourceKey$$Type<T>, ...resourceKey1s: $ResourceKey$$Type<T>[]): $TagsProvider$TagAppender<T>
"remove"(tagKey0: $TagKey$$Type<T>): $TagsProvider$TagAppender<T>
"remove"(tagKey0: $TagKey$$Type<T>, ...tagKey1s: $TagKey$$Type<T>[]): $TagsProvider$TagAppender<T>
"remove"(resourceLocation0: $ResourceLocation$$Type, ...resourceLocation1s: $ResourceLocation$$Type[]): $TagsProvider$TagAppender<T>
"remove"(resourceLocation0: $ResourceLocation$$Type): $TagsProvider$TagAppender<T>
"replace"(): $TagsProvider$TagAppender<T>
"replace"(boolean0: boolean): $TagsProvider$TagAppender<T>
}

export namespace $IForgeTagAppender {
const probejs$$marker: never
}
export abstract class $IForgeTagAppender$$Static<T = any> implements $IForgeTagAppender<T> {
}
}

declare module "net.minecraftforge.common.capabilities.CapabilityProvider" {
import { $ICapabilityProviderImpl } from "net.minecraftforge.common.capabilities.ICapabilityProviderImpl"
import { $CapabilityDispatcher$$Type } from "net.minecraftforge.common.capabilities.CapabilityDispatcher"
import { $Direction$$Type } from "net.minecraft.core.Direction"
import { $Capability$$Type } from "net.minecraftforge.common.capabilities.Capability"
import { $LazyOptional } from "net.minecraftforge.common.util.LazyOptional"
import { $CallbackInfoReturnable$$Type } from "org.spongepowered.asm.mixin.injection.callback.CallbackInfoReturnable"

export class $CapabilityProvider<B extends $ICapabilityProviderImpl<B> = $ICapabilityProviderImpl<B>> implements $ICapabilityProviderImpl<B> {
public "areCapsCompatible"(capabilityDispatcher0: $CapabilityDispatcher$$Type): boolean
public "areCapsCompatible"(capabilityProvider0: $CapabilityProvider$$Type<B>): boolean
public "getCapability"<T>(capability0: $Capability$$Type<T>, direction1: $Direction$$Type): $LazyOptional<T>
public "getCapability"<T>(capability0: $Capability$$Type<T>): $LazyOptional<T>
public "handler$elf001$getCapability"(cap: $Capability$$Type, side: $Direction$$Type, cir: $CallbackInfoReturnable$$Type): void
public "invalidateCaps"(): void
public "reviveCaps"(): void
}
}

declare module "net.minecraftforge.common.world.ModifiableBiomeInfo$BiomeInfo$Builder" {
import { $ClimateSettingsBuilder } from "net.minecraftforge.common.world.ClimateSettingsBuilder"
import { $BiomeGenerationSettingsBuilder } from "net.minecraftforge.common.world.BiomeGenerationSettingsBuilder"
import { $BiomeSpecialEffectsBuilder } from "net.minecraftforge.common.world.BiomeSpecialEffectsBuilder"
import { $MobSpawnSettingsBuilder } from "net.minecraftforge.common.world.MobSpawnSettingsBuilder"
import { $ModifiableBiomeInfo$BiomeInfo, $ModifiableBiomeInfo$BiomeInfo$$Type } from "net.minecraftforge.common.world.ModifiableBiomeInfo$BiomeInfo"

export class $ModifiableBiomeInfo$BiomeInfo$Builder {
public "build"(): $ModifiableBiomeInfo$BiomeInfo
public static "copyOf"(biomeInfo0: $ModifiableBiomeInfo$BiomeInfo$$Type): $ModifiableBiomeInfo$BiomeInfo$Builder
public "getClimateSettings"(): $ClimateSettingsBuilder
public "getGenerationSettings"(): $BiomeGenerationSettingsBuilder
public "getMobSpawnSettings"(): $MobSpawnSettingsBuilder
public "getSpecialEffects"(): $BiomeSpecialEffectsBuilder
get "climateSettings"(): $ClimateSettingsBuilder
get "generationSettings"(): $BiomeGenerationSettingsBuilder
get "mobSpawnSettings"(): $MobSpawnSettingsBuilder
get "specialEffects"(): $BiomeSpecialEffectsBuilder
}
}

declare module "net.minecraftforge.common.util.TransformationHelper$TransformOrigin" {
import { $Enum, $Enum$$Type } from "java.lang.Enum"
import { $StringRepresentable, $StringRepresentable$$Type } from "net.minecraft.util.StringRepresentable"
import { $Vector3f } from "org.joml.Vector3f"
import { $StringRepresentable$EnumCodec } from "net.minecraft.util.StringRepresentable$EnumCodec"
import { $Keyable } from "com.mojang.serialization.Keyable"
import { $Supplier$$Type } from "java.util.function.Supplier"
import { $Function$$Type } from "java.util.function.Function"

export class $TransformationHelper$TransformOrigin extends $Enum<$TransformationHelper$TransformOrigin> implements $StringRepresentable {
static readonly "CENTER": $TransformationHelper$TransformOrigin
static readonly "CORNER": $TransformationHelper$TransformOrigin
static readonly "OPPOSING_CORNER": $TransformationHelper$TransformOrigin

public static "fromEnum"<E extends ($Enum<E> & $StringRepresentable)>(supplier0: $Supplier$$Type<E[]>): $StringRepresentable$EnumCodec<E>
public static "fromEnumWithMapping"<E extends ($Enum<E> & $StringRepresentable)>(supplier0: $Supplier$$Type<E[]>, function1: $Function$$Type<string, string>): $StringRepresentable$EnumCodec<E>
public static "fromString"(string0: string): $TransformationHelper$TransformOrigin
public "getSerializedName"(): string
public "getVector"(): $Vector3f
public static "keys"(stringRepresentable0s: $StringRepresentable$$Type[]): $Keyable
public static "valueOf"(string0: string): $TransformationHelper$TransformOrigin
public static "values"(): $TransformationHelper$TransformOrigin[]
get "serializedName"(): string
get "vector"(): $Vector3f
}
}

declare module "net.minecraftforge.common.ForgeConfigSpec$Builder" {
import { $ForgeConfigSpec$BooleanValue } from "net.minecraftforge.common.ForgeConfigSpec$BooleanValue"
import { $Predicate$$Type } from "java.util.function.Predicate"
import { $Collection$$Type } from "java.util.Collection"
import { $ForgeConfigSpec } from "net.minecraftforge.common.ForgeConfigSpec"
import { $ForgeConfigSpec$DoubleValue } from "net.minecraftforge.common.ForgeConfigSpec$DoubleValue"
import { $EnumGetMethod$$Type } from "com.electronwill.nightconfig.core.EnumGetMethod"
import { $ForgeConfigSpec$LongValue } from "net.minecraftforge.common.ForgeConfigSpec$LongValue"
import { $Function$$Type } from "java.util.function.Function"
import { $Supplier$$Type } from "java.util.function.Supplier"
import { $ForgeConfigSpec$IntValue } from "net.minecraftforge.common.ForgeConfigSpec$IntValue"
import { $ForgeConfigSpec$ConfigValue } from "net.minecraftforge.common.ForgeConfigSpec$ConfigValue"
import { $List, $List$$Type } from "java.util.List"
import { $ForgeConfigSpec$ValueSpec$$Type } from "net.minecraftforge.common.ForgeConfigSpec$ValueSpec"
import { $Pair } from "org.apache.commons.lang3.tuple.Pair"
import { $Enum, $Enum$$Type } from "java.lang.Enum"
import { $ForgeConfigSpec$EnumValue } from "net.minecraftforge.common.ForgeConfigSpec$EnumValue"
import { $Class$$Type } from "java.lang.Class"
import { $Comparable, $Comparable$$Type } from "java.lang.Comparable"

export class $ForgeConfigSpec$Builder {
constructor()

public "build"(): $ForgeConfigSpec
public "comment"(string0: string): $ForgeConfigSpec$Builder
public "comment"(...string0s: string[]): $ForgeConfigSpec$Builder
public "configure"<T>(function0: $Function$$Type<$ForgeConfigSpec$Builder$$Type, T>): $Pair<T, $ForgeConfigSpec>
public "define"<T>(string0: string, supplier1: $Supplier$$Type<T>, predicate2: $Predicate$$Type<any>): $ForgeConfigSpec$ConfigValue<T>
public "define"<T>(list0: $List$$Type<string>, t1: T, predicate2: $Predicate$$Type<any>): $ForgeConfigSpec$ConfigValue<T>
public "define"<T>(list0: $List$$Type<string>, supplier1: $Supplier$$Type<T>, predicate2: $Predicate$$Type<any>): $ForgeConfigSpec$ConfigValue<T>
public "define"<T>(list0: $List$$Type<string>, supplier1: $Supplier$$Type<T>, predicate2: $Predicate$$Type<any>, class3: $Class$$Type<any>): $ForgeConfigSpec$ConfigValue<T>
public "define"<T>(list0: $List$$Type<string>, valueSpec1: $ForgeConfigSpec$ValueSpec$$Type, supplier2: $Supplier$$Type<T>): $ForgeConfigSpec$ConfigValue<T>
public "define"<T>(string0: string, t1: T, predicate2: $Predicate$$Type<any>): $ForgeConfigSpec$ConfigValue<T>
public "define"<T>(list0: $List$$Type<string>, t1: T): $ForgeConfigSpec$ConfigValue<T>
public "define"<T>(string0: string, t1: T): $ForgeConfigSpec$ConfigValue<T>
public "define"(string0: string, boolean1: boolean): $ForgeConfigSpec$BooleanValue
public "define"(list0: $List$$Type<string>, boolean1: boolean): $ForgeConfigSpec$BooleanValue
public "define"(string0: string, supplier1: $Supplier$$Type<boolean>): $ForgeConfigSpec$BooleanValue
public "define"(list0: $List$$Type<string>, supplier1: $Supplier$$Type<boolean>): $ForgeConfigSpec$BooleanValue
public "defineEnum"<V extends $Enum<V>>(list0: $List$$Type<string>, v1: V, ...v2s: V[]): $ForgeConfigSpec$EnumValue<V>
public "defineEnum"<V extends $Enum<V>>(list0: $List$$Type<string>, v1: V, enumGetMethod2: $EnumGetMethod$$Type, ...v3s: V[]): $ForgeConfigSpec$EnumValue<V>
public "defineEnum"<V extends $Enum<V>>(string0: string, v1: V, collection2: $Collection$$Type<V>): $ForgeConfigSpec$EnumValue<V>
public "defineEnum"<V extends $Enum<V>>(string0: string, v1: V, enumGetMethod2: $EnumGetMethod$$Type, collection3: $Collection$$Type<V>): $ForgeConfigSpec$EnumValue<V>
public "defineEnum"<V extends $Enum<V>>(list0: $List$$Type<string>, v1: V, collection2: $Collection$$Type<V>): $ForgeConfigSpec$EnumValue<V>
public "defineEnum"<V extends $Enum<V>>(list0: $List$$Type<string>, v1: V, enumGetMethod2: $EnumGetMethod$$Type, collection3: $Collection$$Type<V>): $ForgeConfigSpec$EnumValue<V>
public "defineEnum"<V extends $Enum<V>>(string0: string, v1: V): $ForgeConfigSpec$EnumValue<V>
public "defineEnum"<V extends $Enum<V>>(string0: string, v1: V, enumGetMethod2: $EnumGetMethod$$Type): $ForgeConfigSpec$EnumValue<V>
public "defineEnum"<V extends $Enum<V>>(list0: $List$$Type<string>, v1: V): $ForgeConfigSpec$EnumValue<V>
public "defineEnum"<V extends $Enum<V>>(list0: $List$$Type<string>, v1: V, enumGetMethod2: $EnumGetMethod$$Type): $ForgeConfigSpec$EnumValue<V>
public "defineEnum"<V extends $Enum<V>>(string0: string, v1: V, ...v2s: V[]): $ForgeConfigSpec$EnumValue<V>
public "defineEnum"<V extends $Enum<V>>(string0: string, supplier1: $Supplier$$Type<V>, predicate2: $Predicate$$Type<any>, class3: $Class$$Type<V>): $ForgeConfigSpec$EnumValue<V>
public "defineEnum"<V extends $Enum<V>>(string0: string, supplier1: $Supplier$$Type<V>, enumGetMethod2: $EnumGetMethod$$Type, predicate3: $Predicate$$Type<any>, class4: $Class$$Type<V>): $ForgeConfigSpec$EnumValue<V>
public "defineEnum"<V extends $Enum<V>>(list0: $List$$Type<string>, supplier1: $Supplier$$Type<V>, predicate2: $Predicate$$Type<any>, class3: $Class$$Type<V>): $ForgeConfigSpec$EnumValue<V>
public "defineEnum"<V extends $Enum<V>>(list0: $List$$Type<string>, supplier1: $Supplier$$Type<V>, enumGetMethod2: $EnumGetMethod$$Type, predicate3: $Predicate$$Type<any>, class4: $Class$$Type<V>): $ForgeConfigSpec$EnumValue<V>
public "defineEnum"<V extends $Enum<V>>(string0: string, v1: V, enumGetMethod2: $EnumGetMethod$$Type, ...v3s: V[]): $ForgeConfigSpec$EnumValue<V>
public "defineEnum"<V extends $Enum<V>>(string0: string, v1: V, predicate2: $Predicate$$Type<any>): $ForgeConfigSpec$EnumValue<V>
public "defineEnum"<V extends $Enum<V>>(string0: string, v1: V, enumGetMethod2: $EnumGetMethod$$Type, predicate3: $Predicate$$Type<any>): $ForgeConfigSpec$EnumValue<V>
public "defineEnum"<V extends $Enum<V>>(list0: $List$$Type<string>, v1: V, enumGetMethod2: $EnumGetMethod$$Type, predicate3: $Predicate$$Type<any>): $ForgeConfigSpec$EnumValue<V>
public "defineEnum"<V extends $Enum<V>>(list0: $List$$Type<string>, v1: V, predicate2: $Predicate$$Type<any>): $ForgeConfigSpec$EnumValue<V>
public "defineInList"<T>(string0: string, t1: T, collection2: $Collection$$Type<T>): $ForgeConfigSpec$ConfigValue<T>
public "defineInList"<T>(string0: string, supplier1: $Supplier$$Type<T>, collection2: $Collection$$Type<T>): $ForgeConfigSpec$ConfigValue<T>
public "defineInList"<T>(list0: $List$$Type<string>, supplier1: $Supplier$$Type<T>, collection2: $Collection$$Type<T>): $ForgeConfigSpec$ConfigValue<T>
public "defineInList"<T>(list0: $List$$Type<string>, t1: T, collection2: $Collection$$Type<T>): $ForgeConfigSpec$ConfigValue<T>
public "defineInRange"(string0: string, double1: double, double2: double, double3: double): $ForgeConfigSpec$DoubleValue
public "defineInRange"(list0: $List$$Type<string>, double1: double, double2: double, double3: double): $ForgeConfigSpec$DoubleValue
public "defineInRange"(list0: $List$$Type<string>, supplier1: $Supplier$$Type<integer>, int2: integer, int3: integer): $ForgeConfigSpec$IntValue
public "defineInRange"(string0: string, long1: long, long2: long, long3: long): $ForgeConfigSpec$LongValue
public "defineInRange"(list0: $List$$Type<string>, long1: long, long2: long, long3: long): $ForgeConfigSpec$LongValue
public "defineInRange"(list0: $List$$Type<string>, int1: integer, int2: integer, int3: integer): $ForgeConfigSpec$IntValue
public "defineInRange"(string0: string, supplier1: $Supplier$$Type<integer>, int2: integer, int3: integer): $ForgeConfigSpec$IntValue
public "defineInRange"(string0: string, int1: integer, int2: integer, int3: integer): $ForgeConfigSpec$IntValue
public "defineInRange"(list0: $List$$Type<string>, supplier1: $Supplier$$Type<double>, double2: double, double3: double): $ForgeConfigSpec$DoubleValue
public "defineInRange"(string0: string, supplier1: $Supplier$$Type<double>, double2: double, double3: double): $ForgeConfigSpec$DoubleValue
public "defineInRange"<V extends $Comparable<V>>(string0: string, supplier1: $Supplier$$Type<V>, v2: V, v3: V, class4: $Class$$Type<V>): $ForgeConfigSpec$ConfigValue<V>
public "defineInRange"<V extends $Comparable<V>>(list0: $List$$Type<string>, supplier1: $Supplier$$Type<V>, v2: V, v3: V, class4: $Class$$Type<V>): $ForgeConfigSpec$ConfigValue<V>
public "defineInRange"<V extends $Comparable<V>>(list0: $List$$Type<string>, v1: V, v2: V, v3: V, class4: $Class$$Type<V>): $ForgeConfigSpec$ConfigValue<V>
public "defineInRange"(list0: $List$$Type<string>, supplier1: $Supplier$$Type<long>, long2: long, long3: long): $ForgeConfigSpec$LongValue
public "defineInRange"(string0: string, supplier1: $Supplier$$Type<long>, long2: long, long3: long): $ForgeConfigSpec$LongValue
public "defineInRange"<V extends $Comparable<V>>(string0: string, v1: V, v2: V, v3: V, class4: $Class$$Type<V>): $ForgeConfigSpec$ConfigValue<V>
public "defineList"<T>(string0: string, supplier1: $Supplier$$Type<$List<T>>, predicate2: $Predicate$$Type<any>): $ForgeConfigSpec$ConfigValue<$List<T>>
public "defineList"<T>(string0: string, list1: $List$$Type<T>, predicate2: $Predicate$$Type<any>): $ForgeConfigSpec$ConfigValue<$List<T>>
public "defineList"<T>(list0: $List$$Type<string>, list1: $List$$Type<T>, predicate2: $Predicate$$Type<any>): $ForgeConfigSpec$ConfigValue<$List<T>>
public "defineList"<T>(list0: $List$$Type<string>, supplier1: $Supplier$$Type<$List<T>>, predicate2: $Predicate$$Type<any>): $ForgeConfigSpec$ConfigValue<$List<T>>
public "defineListAllowEmpty"<T>(string0: string, supplier1: $Supplier$$Type<$List<T>>, predicate2: $Predicate$$Type<any>): $ForgeConfigSpec$ConfigValue<$List<T>>
public "defineListAllowEmpty"<T>(string0: string, list1: $List$$Type<T>, predicate2: $Predicate$$Type<any>): $ForgeConfigSpec$ConfigValue<$List<T>>
public "defineListAllowEmpty"<T>(list0: $List$$Type<string>, list1: $List$$Type<T>, predicate2: $Predicate$$Type<any>): $ForgeConfigSpec$ConfigValue<$List<T>>
public "defineListAllowEmpty"<T>(list0: $List$$Type<string>, supplier1: $Supplier$$Type<$List<T>>, predicate2: $Predicate$$Type<any>): $ForgeConfigSpec$ConfigValue<$List<T>>
public "pop"(): $ForgeConfigSpec$Builder
public "pop"(int0: integer): $ForgeConfigSpec$Builder
public "push"(string0: string): $ForgeConfigSpec$Builder
public "push"(list0: $List$$Type<string>): $ForgeConfigSpec$Builder
public "translation"(string0: string): $ForgeConfigSpec$Builder
public "worldRestart"(): $ForgeConfigSpec$Builder
}
}

declare module "net.minecraftforge.common.world.StructureModifier$Phase" {
import { $Enum } from "java.lang.Enum"

export class $StructureModifier$Phase extends $Enum<$StructureModifier$Phase> {
static readonly "ADD": $StructureModifier$Phase
static readonly "AFTER_EVERYTHING": $StructureModifier$Phase
static readonly "BEFORE_EVERYTHING": $StructureModifier$Phase
static readonly "MODIFY": $StructureModifier$Phase
static readonly "REMOVE": $StructureModifier$Phase

public static "valueOf"(string0: string): $StructureModifier$Phase
public static "values"(): $StructureModifier$Phase[]
}
}

declare module "net.minecraftforge.common.extensions.IForgeFriendlyByteBuf" {
import { $ResourceLocation$$Type } from "net.minecraft.resources.ResourceLocation"
import { $FluidStack, $FluidStack$$Type } from "net.minecraftforge.fluids.FluidStack"
import { $Class$$Type } from "java.lang.Class"
import { $IForgeRegistry$$Type } from "net.minecraftforge.registries.IForgeRegistry"

export interface $IForgeFriendlyByteBuf {
"readFluidStack"(): $FluidStack
"readRegistryId"<T>(): T
"readRegistryIdSafe"<T>(class0: $Class$$Type<T>): T
"readRegistryIdUnsafe"<T>(iForgeRegistry0: $IForgeRegistry$$Type<T>): T
"writeFluidStack"(fluidStack0: $FluidStack$$Type): void
"writeRegistryId"<T>(iForgeRegistry0: $IForgeRegistry$$Type<T>, t1: T): void
"writeRegistryIdUnsafe"(iForgeRegistry0: $IForgeRegistry$$Type<any>, resourceLocation1: $ResourceLocation$$Type): void
"writeRegistryIdUnsafe"<T>(iForgeRegistry0: $IForgeRegistry$$Type<T>, t1: T): void
}

export namespace $IForgeFriendlyByteBuf {
const probejs$$marker: never
}
export abstract class $IForgeFriendlyByteBuf$$Static implements $IForgeFriendlyByteBuf {
}
}

declare module "net.minecraftforge.common.capabilities.ICapabilityProvider" {
import { $Direction$$Type } from "net.minecraft.core.Direction"
import { $Capability$$Type } from "net.minecraftforge.common.capabilities.Capability"
import { $LazyOptional } from "net.minecraftforge.common.util.LazyOptional"

export interface $ICapabilityProvider {
"getCapability"<T>(capability0: $Capability$$Type<T>, direction1: $Direction$$Type): $LazyOptional<T>
"getCapability"<T>(capability0: $Capability$$Type<T>): $LazyOptional<T>
}

export namespace $ICapabilityProvider {
const probejs$$marker: never
}
export abstract class $ICapabilityProvider$$Static implements $ICapabilityProvider {
}
}

declare module "net.minecraftforge.common.extensions.IForgeFluid" {
import { $LivingEntity$$Type } from "net.minecraft.world.entity.LivingEntity"
import { $BlockPathTypes, $BlockPathTypes$$Type } from "net.minecraft.world.level.pathfinder.BlockPathTypes"
import { $BlockState$$Type } from "net.minecraft.world.level.block.state.BlockState"
import { $FluidType } from "net.minecraftforge.fluids.FluidType"
import { $Explosion$$Type } from "net.minecraft.world.level.Explosion"
import { $BlockGetter$$Type } from "net.minecraft.world.level.BlockGetter"
import { $Entity$$Type } from "net.minecraft.world.entity.Entity"
import { $BlockPos$$Type } from "net.minecraft.core.BlockPos"
import { $Vec3$$Type } from "net.minecraft.world.phys.Vec3"
import { $Boat$$Type } from "net.minecraft.world.entity.vehicle.Boat"
import { $FluidState$$Type } from "net.minecraft.world.level.material.FluidState"
import { $Level$$Type } from "net.minecraft.world.level.Level"
import { $Mob$$Type } from "net.minecraft.world.entity.Mob"

export interface $IForgeFluid {
"canConvertToSource"(fluidState0: $FluidState$$Type, level1: $Level$$Type, blockPos2: $BlockPos$$Type): boolean
"canExtinguish"(fluidState0: $FluidState$$Type, blockGetter1: $BlockGetter$$Type, blockPos2: $BlockPos$$Type): boolean
"canHydrate"(fluidState0: $FluidState$$Type, blockGetter1: $BlockGetter$$Type, blockPos2: $BlockPos$$Type, blockState3: $BlockState$$Type, blockPos4: $BlockPos$$Type): boolean
"getAdjacentBlockPathType"(fluidState0: $FluidState$$Type, blockGetter1: $BlockGetter$$Type, blockPos2: $BlockPos$$Type, mob3: $Mob$$Type, blockPathTypes4: $BlockPathTypes$$Type): $BlockPathTypes
"getBlockPathType"(fluidState0: $FluidState$$Type, blockGetter1: $BlockGetter$$Type, blockPos2: $BlockPos$$Type, mob3: $Mob$$Type, boolean4: boolean): $BlockPathTypes
"getExplosionResistance"(fluidState0: $FluidState$$Type, blockGetter1: $BlockGetter$$Type, blockPos2: $BlockPos$$Type, explosion3: $Explosion$$Type): float
"getFluidType"(): $FluidType
"move"(fluidState0: $FluidState$$Type, livingEntity1: $LivingEntity$$Type, vec32: $Vec3$$Type, double3: double): boolean
"shouldUpdateWhileBoating"(fluidState0: $FluidState$$Type, boat1: $Boat$$Type, entity2: $Entity$$Type): boolean
"supportsBoating"(fluidState0: $FluidState$$Type, boat1: $Boat$$Type): boolean
get "fluidType"(): $FluidType
}

export namespace $IForgeFluid {
const probejs$$marker: never
}
export abstract class $IForgeFluid$$Static implements $IForgeFluid {
}
}

declare module "net.minecraftforge.common.extensions.IForgePotion" {
import { $ItemStack$$Type } from "net.minecraft.world.item.ItemStack"

export interface $IForgePotion {
"isFoil"(itemStack0: $ItemStack$$Type): boolean
}

export namespace $IForgePotion {
const probejs$$marker: never
}
export abstract class $IForgePotion$$Static implements $IForgePotion {
}
}

declare module "net.minecraftforge.common.capabilities.ICapabilityProviderImpl" {
import { $ICapabilityProvider } from "net.minecraftforge.common.capabilities.ICapabilityProvider"
import { $CapabilityDispatcher$$Type } from "net.minecraftforge.common.capabilities.CapabilityDispatcher"
import { $Direction$$Type } from "net.minecraft.core.Direction"
import { $CapabilityProvider$$Type } from "net.minecraftforge.common.capabilities.CapabilityProvider"
import { $Capability$$Type } from "net.minecraftforge.common.capabilities.Capability"
import { $LazyOptional } from "net.minecraftforge.common.util.LazyOptional"

export interface $ICapabilityProviderImpl<B extends $ICapabilityProviderImpl<B> = $ICapabilityProviderImpl<B>> extends $ICapabilityProvider {
"areCapsCompatible"(capabilityDispatcher0: $CapabilityDispatcher$$Type): boolean
"areCapsCompatible"(capabilityProvider0: $CapabilityProvider$$Type<B>): boolean
"getCapability"<T>(capability0: $Capability$$Type<T>, direction1: $Direction$$Type): $LazyOptional<T>
"getCapability"<T>(capability0: $Capability$$Type<T>): $LazyOptional<T>
"invalidateCaps"(): void
"reviveCaps"(): void
}

export namespace $ICapabilityProviderImpl {
const probejs$$marker: never
}
export abstract class $ICapabilityProviderImpl$$Static<B extends $ICapabilityProviderImpl<B> = $ICapabilityProviderImpl<B>> implements $ICapabilityProviderImpl<B> {
}
}

declare module "net.minecraftforge.common.data.ExistingFileHelper$IResourceType" {
import { $PackType } from "net.minecraft.server.packs.PackType"

export interface $ExistingFileHelper$IResourceType {
"getPackType"(): $PackType
"getPrefix"(): string
"getSuffix"(): string
get "packType"(): $PackType
get "prefix"(): string
get "suffix"(): string
}

export namespace $ExistingFileHelper$IResourceType {
const probejs$$marker: never
}
export abstract class $ExistingFileHelper$IResourceType$$Static implements $ExistingFileHelper$IResourceType {
}
}

declare module "net.minecraftforge.common.util.BrainBuilder" {
import { $SensorType } from "net.minecraft.world.entity.ai.sensing.SensorType"
import { $Dynamic$$Type } from "com.mojang.serialization.Dynamic"
import { $LivingEntity } from "net.minecraft.world.entity.LivingEntity"
import { $Collection, $Collection$$Type } from "java.util.Collection"
import { $MemoryModuleType, $MemoryModuleType$$Type } from "net.minecraft.world.entity.ai.memory.MemoryModuleType"
import { $Set, $Set$$Type } from "java.util.Set"
import { $MemoryStatus, $MemoryStatus$$Type } from "net.minecraft.world.entity.ai.memory.MemoryStatus"
import { $Sensor } from "net.minecraft.world.entity.ai.sensing.Sensor"
import { $Pair, $Pair$$Type } from "com.mojang.datafixers.util.Pair"
import { $BehaviorControl, $BehaviorControl$$Type } from "net.minecraft.world.entity.ai.behavior.BehaviorControl"
import { $Activity, $Activity$$Type } from "net.minecraft.world.entity.schedule.Activity"
import { $Schedule, $Schedule$$Type } from "net.minecraft.world.entity.schedule.Schedule"
import { $Map, $Map$$Type } from "java.util.Map"
import { $Brain, $Brain$$Type } from "net.minecraft.world.entity.ai.Brain"
import { $Brain$Provider } from "net.minecraft.world.entity.ai.Brain$Provider"

export class $BrainBuilder<E extends $LivingEntity = $LivingEntity> {
constructor(brain0: $Brain$$Type<E>)

public "addActivityMemoriesToEraseWhenStoppedFrom"(map0: $Map$$Type<$Activity$$Type, $Set$$Type<$MemoryModuleType$$Type<any>>>): void
public "addActivityMemoriesToEraseWhenStoppedTo"(map0: $Map$$Type<$Activity$$Type, $Set$$Type<$MemoryModuleType$$Type<any>>>): void
public "addActivityRequirementsFrom"(map0: $Map$$Type<$Activity$$Type, $Set$$Type<$Pair$$Type<$MemoryModuleType$$Type<any>, $MemoryStatus$$Type>>>): void
public "addActivityRequirementsTo"(map0: $Map$$Type<$Activity$$Type, $Set$$Type<$Pair$$Type<$MemoryModuleType$$Type<any>, $MemoryStatus$$Type>>>): void
public "addAvailableBehaviorsByPriorityFrom"(map0: $Map$$Type<integer, $Map$$Type<$Activity$$Type, $Set$$Type<$BehaviorControl$$Type<E>>>>): void
public "addAvailableBehaviorsByPriorityTo"(map0: $Map$$Type<integer, $Map$$Type<$Activity$$Type, $Set$$Type<$BehaviorControl$$Type<E>>>>): void
public "addBehaviorToActivityByPriority"(integer0: integer, activity1: $Activity$$Type, behaviorControl2: $BehaviorControl$$Type<E>): void
public "addMemoriesToEraseWhenActivityStopped"(activity0: $Activity$$Type, collection1: $Collection$$Type<$MemoryModuleType$$Type<any>>): void
public "addRequirementsToActivity"(activity0: $Activity$$Type, collection1: $Collection$$Type<$Pair$$Type<$MemoryModuleType$$Type<any>, $MemoryStatus$$Type>>): void
public "getActiveActivites"(): $Set<$Activity>
public "getActivityMemoriesToEraseWhenStopped"(): $Map<$Activity, $Set<$MemoryModuleType<any>>>
public "getActivityRequirements"(): $Map<$Activity, $Set<$Pair<$MemoryModuleType<any>, $MemoryStatus>>>
public "getAvailableBehaviorsByPriority"(): $Map<integer, $Map<$Activity, $Set<$BehaviorControl<E>>>>
public "getCoreActivities"(): $Set<$Activity>
public "getDefaultActivity"(): $Activity
public "getMemoryTypes"(): $Collection<$MemoryModuleType<any>>
public "getSchedule"(): $Schedule
public "getSensorTypes"(): $Collection<$SensorType<$Sensor<E>>>
public "makeBrain"(dynamic0: $Dynamic$$Type<any>): $Brain<E>
public "provider"(): $Brain$Provider<E>
public "setActiveActivites"(set0: $Set$$Type<$Activity$$Type>): void
public "setDefaultActivity"(activity0: $Activity$$Type): void
public "setSchedule"(schedule0: $Schedule$$Type): void
get "activeActivites"(): $Set<$Activity>
get "activityMemoriesToEraseWhenStopped"(): $Map<$Activity, $Set<$MemoryModuleType<any>>>
get "activityRequirements"(): $Map<$Activity, $Set<$Pair<$MemoryModuleType<any>, $MemoryStatus>>>
get "availableBehaviorsByPriority"(): $Map<integer, $Map<$Activity, $Set<$BehaviorControl<E>>>>
get "coreActivities"(): $Set<$Activity>
get "defaultActivity"(): $Activity
get "memoryTypes"(): $Collection<$MemoryModuleType<any>>
get "schedule"(): $Schedule
get "sensorTypes"(): $Collection<$SensorType<$Sensor<E>>>
set "activeActivites"(value: $Set$$Type<$Activity$$Type>)
set "defaultActivity"(value: $Activity$$Type)
set "schedule"(value: $Schedule$$Type)
}
}

declare module "net.minecraftforge.common.util.FakePlayer" {
import { $ResourceLocation, $ResourceLocation$$Type } from "net.minecraft.resources.ResourceLocation"
import { $LivingEntity, $LivingEntity$$Type } from "net.minecraft.world.entity.LivingEntity"
import { $Direction } from "net.minecraft.core.Direction"
import { $GameProfile, $GameProfile$$Type } from "com.mojang.authlib.GameProfile"
import { $Item$$Type } from "net.minecraft.world.item.Item"
import { $FluidType$$Type } from "net.minecraftforge.fluids.FluidType"
import { $KnockBackModifier } from "com.tacz.guns.api.entity.KnockBackModifier"
import { $BlockContainerJS, $BlockContainerJS$$Type } from "dev.latvian.mods.kubejs.level.BlockContainerJS"
import { $MinecraftServer } from "net.minecraft.server.MinecraftServer"
import { $Pose$$Type } from "net.minecraft.world.entity.Pose"
import { $AnimationApplier } from "dev.kosmx.playerAnim.impl.animation.AnimationApplier"
import { $Map } from "java.util.Map"
import { $TrackedDataRegistry$$Type } from "dev.corgitaco.dataanchor.data.registry.TrackedDataRegistry"
import { $NotificationBuilder$$Type } from "dev.latvian.mods.kubejs.util.NotificationBuilder"
import { $SoundAction$$Type } from "net.minecraftforge.common.SoundAction"
import { $InventoryKJS$$Type } from "dev.latvian.mods.kubejs.core.InventoryKJS"
import { $KubeJSGUI$$Type } from "dev.latvian.mods.kubejs.gui.KubeJSGUI"
import { $LevelRenderer$$Type } from "net.minecraft.client.renderer.LevelRenderer"
import { $Capability$$Type } from "net.minecraftforge.common.capabilities.Capability"
import { $Player$$Type } from "net.minecraft.world.entity.player.Player"
import { $ChestMenuData$$Type } from "dev.latvian.mods.kubejs.gui.chest.ChestMenuData"
import { $ObjectOpenCustomHashSet } from "it.unimi.dsi.fastutil.objects.ObjectOpenCustomHashSet"
import { $CompoundTag, $CompoundTag$$Type } from "net.minecraft.nbt.CompoundTag"
import { $BlockPos$$Type } from "net.minecraft.core.BlockPos"
import { $SoundEvent, $SoundEvent$$Type } from "net.minecraft.sounds.SoundEvent"
import { $PlayerStatsJS } from "dev.latvian.mods.kubejs.player.PlayerStatsJS"
import { $Boat$$Type } from "net.minecraft.world.entity.vehicle.Boat"
import { $FluidState$$Type } from "net.minecraft.world.level.material.FluidState"
import { $ItemStack, $ItemStack$$Type } from "net.minecraft.world.item.ItemStack"
import { $Level } from "net.minecraft.world.level.Level"
import { $AbstractContainerMenu } from "net.minecraft.world.inventory.AbstractContainerMenu"
import { $BlockState } from "net.minecraft.world.level.block.state.BlockState"
import { $ServerLevel$$Type } from "net.minecraft.server.level.ServerLevel"
import { $Trackable } from "dev.uncandango.alltheleaks.mixin.Trackable"
import { $LazyOptional } from "net.minecraftforge.common.util.LazyOptional"
import { $Ingredient$$Type } from "net.minecraft.world.item.crafting.Ingredient"
import { $TrackedData, $TrackedData$$Type } from "dev.corgitaco.dataanchor.data.TrackedData"
import { $BiPredicate$$Type } from "java.util.function.BiPredicate"
import { $ServerPlayer } from "net.minecraft.server.level.ServerPlayer"
import { $Container } from "net.minecraft.world.Container"
import { $MobCategory } from "net.minecraft.world.entity.MobCategory"
import { $WeakReference } from "java.lang.ref.WeakReference"
import { $ObjectList } from "it.unimi.dsi.fastutil.objects.ObjectList"
import { $EntityPotionEffectsJS } from "dev.latvian.mods.kubejs.entity.EntityPotionEffectsJS"
import { $AttributeModifier$Operation$$Type } from "net.minecraft.world.entity.ai.attributes.AttributeModifier$Operation"
import { $Component, $Component$$Type } from "net.minecraft.network.chat.Component"
import { $PartEntity } from "net.minecraftforge.entity.PartEntity"
import { $RayTraceResultJS } from "dev.latvian.mods.kubejs.entity.RayTraceResultJS"
import { $Attribute$$Type } from "net.minecraft.world.entity.ai.attributes.Attribute"
import { $ScriptType } from "dev.latvian.mods.kubejs.script.ScriptType"
import { $Consumer$$Type } from "java.util.function.Consumer"
import { $HitResult$$Type } from "net.minecraft.world.phys.HitResult"
import { $EntityArrayList } from "dev.latvian.mods.kubejs.player.EntityArrayList"
import { $Entity, $Entity$$Type } from "net.minecraft.world.entity.Entity"
import { $TrackedDataContainer } from "dev.corgitaco.dataanchor.data.TrackedDataContainer"
import { $Vec3$$Type } from "net.minecraft.world.phys.Vec3"
import { $EquipmentSlot$$Type } from "net.minecraft.world.entity.EquipmentSlot"
import { $EntityDimensions$$Type } from "net.minecraft.world.entity.EntityDimensions"
import { $Class } from "java.lang.Class"
import { $InteractionHand$$Type } from "net.minecraft.world.InteractionHand"

export class $FakePlayer extends $ServerPlayer {
constructor(serverLevel0: $ServerLevel$$Type, gameProfile1: $GameProfile$$Type)

public "addExhaustion"(exhaustion: float): void
public "addFood"(f: integer, m: float): void
public "addItemCooldown"(item: $Item$$Type, ticks: integer): void
public "addXP"(xp: integer): void
public "addXPLevels"(l: integer): void
public "alwaysAccepts"(): boolean
public "attack"(hp: float): void
public "ban"(banner: string, reason: string, expiresInMillis: long): void
public "boostElytraFlight"(): void
public "canBeRiddenUnderFluidType"(fluidType0: $FluidType$$Type, entity1: $Entity$$Type): boolean
public "canDrownInFluidType"(fluidType0: $FluidType$$Type): boolean
public "canEntityBeSeen"(entity: $LivingEntity$$Type): boolean
public "canFluidExtinguish"(fluidType0: $FluidType$$Type): boolean
public "canHydrateInFluidType"(fluidType0: $FluidType$$Type): boolean
public "canReach"(vec30: $Vec3$$Type, double1: double): boolean
public "canReach"(blockPos0: $BlockPos$$Type, double1: double): boolean
public "canReach"(entity0: $Entity$$Type, double1: double): boolean
public "canReachRaw"(blockPos0: $BlockPos$$Type, double1: double): boolean
public "canReachRaw"(entity0: $Entity$$Type, double1: double): boolean
public "canRiderInteract"(): boolean
public "canStartSwimming"(): boolean
public "canSwimInFluidType"(fluidType0: $FluidType$$Type): boolean
public "captureInventory"(autoRestore: boolean): $Container
public static "clearNullReferences"(): void
public static "createWeakRefBasedSet"(): $ObjectOpenCustomHashSet<$WeakReference<$Trackable>>
public "damageEquipment"(slot: $EquipmentSlot$$Type, amount: integer, onBroken: $Consumer$$Type<$ItemStack$$Type>): void
public "damageEquipment"(slot: $EquipmentSlot$$Type): void
public "damageEquipment"(slot: $EquipmentSlot$$Type, amount: integer): void
public "damageHeldItem"(): void
public "damageHeldItem"(hand: $InteractionHand$$Type, amount: integer): void
public "damageHeldItem"(hand: $InteractionHand$$Type, amount: integer, onBroken: $Consumer$$Type<$ItemStack$$Type>): void
public "deserializeNBT"(compoundTag0: $CompoundTag$$Type): void
public "foodEaten"(is: $ItemStack$$Type): void
public static "fromLivingEntity"(livingEntity0: $LivingEntity$$Type): $KnockBackModifier
public static "getAlpha"(le: $LivingEntity$$Type, partialTicks: float): float
/** @deprecated */
public "getAnimation"(): $AnimationApplier
public "getAttributeBaseValue"(attribute: $Attribute$$Type): double
public "getAttributeTotalValue"(attribute: $Attribute$$Type): double
public "getBlock"(): $BlockContainerJS
public "getBlockReach"(): double
public "getCachedFeetBlockState"(): $BlockState
public "getCapability"<T>(capability0: $Capability$$Type<T>): $LazyOptional<T>
public "getChestArmorItem"(): $ItemStack
public "getClassification"(boolean0: boolean): $MobCategory
public "getDefaultMovementSpeed"(): double
public "getDisplayName"(): $Component
public "getDistance"(pos: $BlockPos$$Type): double
public "getDistance"(x: double, y: double, z: double): double
public "getDistanceSq"(pos: $BlockPos$$Type): double
public "getEntityReach"(): double
public "getEquipment"(slot: $EquipmentSlot$$Type): $ItemStack
/** @deprecated */
public "getEyeHeightForge"(pose0: $Pose$$Type, entityDimensions1: $EntityDimensions$$Type): float
public "getFacing"(): $Direction
public "getFeetArmorItem"(): $ItemStack
public "getFluidFallDistanceModifier"(fluidType0: $FluidType$$Type): float
public "getFluidMotionScale"(fluidType0: $FluidType$$Type): double
public "getFoodLevel"(): integer
public "getHeadArmorItem"(): $ItemStack
public "getHeldItem"(hand: $InteractionHand$$Type): $ItemStack
public "getItem"(): $ItemStack
public "getLegsArmorItem"(): $ItemStack
public "getLevel"(): $Level
public "getMainHandItem"(): $ItemStack
public static "getMatched"(entity: $Entity$$Type): $ObjectList<$ResourceLocation>
public "getMotionX"(): double
public "getMotionY"(): double
public "getMotionZ"(): double
public "getMouseItem"(): $ItemStack
public "getName"(): $Component
public "getNbt"(): $CompoundTag
public "getOffHandItem"(): $ItemStack
public "getOpenInventory"(): $AbstractContainerMenu
public "getParts"(): $PartEntity<any>[]
public "getPassengers"(): $EntityArrayList
public "getPickedResult"(hitResult0: $HitResult$$Type): $ItemStack
public "getPotionEffects"(): $EntityPotionEffectsJS
public "getProfile"(): $GameProfile
public "getReachDistance"(): double
public "getSaturation"(): float
public "getScriptType"(): $ScriptType
public "getSelectedSlot"(): integer
public "getServer"(): $MinecraftServer
public "getSoundFromFluidType"(fluidType0: $FluidType$$Type, soundAction1: $SoundAction$$Type): $SoundEvent
public "getSpawnLocation"(): $BlockContainerJS
public "getStats"(): $PlayerStatsJS
public "getStepHeight"(): float
public static "getSummary"(): $Map<$Class<any>, $Map<$Class<any>, long>>
public "getTeamId"(): string
public "getTotalMovementSpeed"(): double
public "getType"(): string
public "getXp"(): integer
public "getXpLevel"(): integer
public "give"(item: $ItemStack$$Type): void
public "giveInHand"(item: $ItemStack$$Type): void
public "hasCustomOutlineRendering"(player0: $Player$$Type): boolean
public "isAdvancementDone"(id: $ResourceLocation$$Type): boolean
public "isAmbientCreature"(): boolean
public "isAnimal"(): boolean
public "isCloseEnough"(entity0: $Entity$$Type, double1: double): boolean
public "isDynamicLightEnabled"(): boolean
public "isDynamicLightEnabledH"(): boolean
public "isEyeInFluidType"(fluidType0: $FluidType$$Type): boolean
public "isFake"(): boolean
public "isFrame"(): boolean
public "isHoldingInAnyHand"(i: $Ingredient$$Type): boolean
public "isInFluidType"(fluidState0: $FluidState$$Type): boolean
public "isInFluidType"(fluidType0: $FluidType$$Type): boolean
public "isInFluidType"(biPredicate0: $BiPredicate$$Type<$FluidType$$Type, double>): boolean
public "isLiving"(): boolean
public "isMiningBlock"(): boolean
public "isMonster"(): boolean
public "isMultipartEntity"(): boolean
public "isOnScoreboardTeam"(teamId: string): boolean
public "isOp"(): boolean
public "isPeacefulCreature"(): boolean
public "isPlayer"(): boolean
public "isPushedByFluid"(fluidType0: $FluidType$$Type): boolean
public "isUndead"(): boolean
public "isWaterCreature"(): boolean
public "jumpInFluid"(fluidType0: $FluidType$$Type): void
public "kick"(): void
public "kick"(reason: $Component$$Type): void
public static "makeBasicContainer"<O, T extends $TrackedData<O>>(registry: $TrackedDataRegistry$$Type<O, T>, o: O, isClient: boolean): $TrackedDataContainer<O, T>
public static "makeBasicContainer"<O, T extends $TrackedData<O>>(registry: $TrackedDataRegistry$$Type<O, T>, o: O, isClient: boolean, lazyLoad: boolean): $TrackedDataContainer<O, T>
public "mergeNbt"(tag: $CompoundTag$$Type): $Entity
public "modifyAttribute"(attribute: $Attribute$$Type, identifier: string, d: double, operation: $AttributeModifier$Operation$$Type): void
public "moveInFluid"(fluidState0: $FluidState$$Type, vec31: $Vec3$$Type, double2: double): boolean
public "notify"(builder: $NotificationBuilder$$Type): void
public "notify"(title: $Component$$Type, text: $Component$$Type): void
public "openChestGUI"(title: $Component$$Type, rows: integer, gui: $Consumer$$Type<$ChestMenuData$$Type>): void
public "openGUI"(gui: $Consumer$$Type<$KubeJSGUI$$Type>): void
public "openInventoryGUI"(inventory: $InventoryKJS$$Type, title: $Component$$Type): void
public "paint"(renderer: $CompoundTag$$Type): void
public "playSound"(id: $SoundEvent$$Type): void
public "playSound"(id: $SoundEvent$$Type, volume: float, pitch: float): void
public "rayTrace"(): $RayTraceResultJS
public "rayTrace"(distance: double): $RayTraceResultJS
public "rayTrace"(distance: double, fluids: boolean): $RayTraceResultJS
public "removeAttribute"(attribute: $Attribute$$Type, identifier: string): void
public "revokeAdvancement"(id: $ResourceLocation$$Type): void
public "runCommand"(command: string): integer
public "runCommandSilent"(command: string): integer
public "sdl$getDynamicLightLevel"(): $Level
public "sdl$getDynamicLightX"(): double
public "sdl$getDynamicLightY"(): double
public "sdl$getDynamicLightZ"(): double
public "sdl$isDynamicLightEnabled"(): boolean
public "sdl$resetDynamicLight"(): void
public "sdl$setDynamicLightEnabled"(enabled: boolean): void
public "sdl$shouldUpdateDynamicLight"(): boolean
public "self"(): $ServerPlayer
public "self"(): $LivingEntity
public "sendData"(channel: string, data: $CompoundTag$$Type): void
public "sendData"(channel: string): void
public "sendInventoryUpdate"(): void
public "serializeNBT"(): $CompoundTag
public "setAttributeBaseValue"(attribute: $Attribute$$Type, value: double): void
public "setChestArmorItem"(item: $ItemStack$$Type): void
public "setCreativeMode"(mode: boolean): void
public "setDefaultMovementSpeed"(speed: double): void
public "setDefaultMovementSpeedMultiplier"(speed: double): void
public "setDynamicLightEnabled"(boolean0: boolean): void
public "setEquipment"(slot: $EquipmentSlot$$Type, item: $ItemStack$$Type): void
public "setFeetArmorItem"(item: $ItemStack$$Type): void
public "setFoodLevel"(foodLevel: integer): void
public "setHeadArmorItem"(item: $ItemStack$$Type): void
public "setHeldItem"(hand: $InteractionHand$$Type, item: $ItemStack$$Type): void
public "setHexereiDynamicLightEnabled"(boolean0: boolean): void
public "setLegsArmorItem"(item: $ItemStack$$Type): void
public "setMainHandItem"(item: $ItemStack$$Type): void
public "setMaxHealth"(hp: float): void
public "setMotionX"(x: double): void
public "setMotionY"(y: double): void
public "setMotionZ"(z: double): void
public "setMouseItem"(item: $ItemStack$$Type): void
public "setMovementSpeedAddition"(speed: double): void
public "setNbt"(nbt: $CompoundTag$$Type): void
public "setOffHandItem"(item: $ItemStack$$Type): void
public "setPosition"(block: $BlockContainerJS$$Type): void
public "setPosition"(x: double, y: double, z: double): void
public "setPositionAndRotation"(x: double, y: double, z: double, yaw: float, pitch: float): void
public "setRotation"(yaw: float, pitch: float): void
public "setSaturation"(saturation: float): void
public "setSelectedSlot"(index: integer): void
public "setSpawnLocation"(c: $BlockContainerJS$$Type): void
public "setStatusMessage"(message: $Component$$Type): void
public "setTotalMovementSpeedMultiplier"(speed: double): void
public "setX"(x: double): void
public "setXp"(xp: integer): void
public "setXpLevel"(l: integer): void
public "setY"(y: double): void
public "setZ"(z: double): void
public "shouldRiderSit"(): boolean
public "shouldUpdateFluidWhileBoating"(fluidState0: $FluidState$$Type, boat1: $Boat$$Type): boolean
public "sinkInFluid"(fluidType0: $FluidType$$Type): void
public "sodiumdynamiclights$scheduleTrackedChunksRebuild"(levelRenderer0: $LevelRenderer$$Type): void
public "sodiumdynamiclights$updateDynamicLight"(levelRenderer0: $LevelRenderer$$Type): boolean
public "spawn"(): void
public static "startTracking"(object0: any): void
public "startTracking"(): void
public "supplementaries$hasQuiver"(): boolean
public "swing"(): void
public "swing"(hand: $InteractionHand$$Type): void
public "teleportTo"(dimension: $ResourceLocation$$Type, x: double, y: double, z: double, yaw: float, pitch: float): void
public "tell"(message: $Component$$Type): void
public static "tickEntity"(entity: $LivingEntity$$Type): void
public "unlockAdvancement"(id: $ResourceLocation$$Type): void
public "wrap"(): $WeakReference<$Trackable>
get "animation"(): $AnimationApplier
get "block"(): $BlockContainerJS
get "blockReach"(): double
get "cachedFeetBlockState"(): $BlockState
get "chestArmorItem"(): $ItemStack
get "defaultMovementSpeed"(): double
get "displayName"(): $Component
get "entityReach"(): double
get "facing"(): $Direction
get "feetArmorItem"(): $ItemStack
get "foodLevel"(): integer
get "headArmorItem"(): $ItemStack
get "item"(): $ItemStack
get "legsArmorItem"(): $ItemStack
get "level"(): $Level
get "mainHandItem"(): $ItemStack
get "motionX"(): double
get "motionY"(): double
get "motionZ"(): double
get "mouseItem"(): $ItemStack
get "name"(): $Component
get "nbt"(): $CompoundTag
get "offHandItem"(): $ItemStack
get "openInventory"(): $AbstractContainerMenu
get "parts"(): $PartEntity<any>[]
get "passengers"(): $EntityArrayList
get "potionEffects"(): $EntityPotionEffectsJS
get "profile"(): $GameProfile
get "reachDistance"(): double
get "saturation"(): float
get "scriptType"(): $ScriptType
get "selectedSlot"(): integer
get "server"(): $MinecraftServer
get "spawnLocation"(): $BlockContainerJS
get "stats"(): $PlayerStatsJS
get "stepHeight"(): float
get "teamId"(): string
get "totalMovementSpeed"(): double
get "type"(): string
get "xp"(): integer
get "xpLevel"(): integer
get "ambientCreature"(): boolean
get "animal"(): boolean
get "dynamicLightEnabled"(): boolean
get "dynamicLightEnabledH"(): boolean
get "fake"(): boolean
get "frame"(): boolean
get "living"(): boolean
get "miningBlock"(): boolean
get "monster"(): boolean
get "multipartEntity"(): boolean
get "op"(): boolean
get "peacefulCreature"(): boolean
get "player"(): boolean
get "undead"(): boolean
get "waterCreature"(): boolean
set "chestArmorItem"(value: $ItemStack$$Type)
set "creativeMode"(value: boolean)
set "defaultMovementSpeed"(value: double)
set "defaultMovementSpeedMultiplier"(value: double)
set "dynamicLightEnabled"(value: boolean)
set "feetArmorItem"(value: $ItemStack$$Type)
set "foodLevel"(value: integer)
set "headArmorItem"(value: $ItemStack$$Type)
set "hexereiDynamicLightEnabled"(value: boolean)
set "legsArmorItem"(value: $ItemStack$$Type)
set "mainHandItem"(value: $ItemStack$$Type)
set "maxHealth"(value: float)
set "motionX"(value: double)
set "motionY"(value: double)
set "motionZ"(value: double)
set "mouseItem"(value: $ItemStack$$Type)
set "movementSpeedAddition"(value: double)
set "nbt"(value: $CompoundTag$$Type)
set "offHandItem"(value: $ItemStack$$Type)
set "position"(value: $BlockContainerJS$$Type)
set "saturation"(value: float)
set "selectedSlot"(value: integer)
set "spawnLocation"(value: $BlockContainerJS$$Type)
set "statusMessage"(value: $Component$$Type)
set "totalMovementSpeedMultiplier"(value: double)
set "x"(value: double)
set "xp"(value: integer)
set "xpLevel"(value: integer)
set "y"(value: double)
set "z"(value: double)
}
}

declare module "net.minecraftforge.common.extensions.IForgeBaseRailBlock" {
import { $BlockGetter$$Type } from "net.minecraft.world.level.BlockGetter"
import { $BlockPos$$Type } from "net.minecraft.core.BlockPos"
import { $AbstractMinecart$$Type } from "net.minecraft.world.entity.vehicle.AbstractMinecart"
import { $BlockState$$Type } from "net.minecraft.world.level.block.state.BlockState"
import { $Level$$Type } from "net.minecraft.world.level.Level"
import { $RailShape, $RailShape$$Type } from "net.minecraft.world.level.block.state.properties.RailShape"

export interface $IForgeBaseRailBlock {
"canMakeSlopes"(blockState0: $BlockState$$Type, blockGetter1: $BlockGetter$$Type, blockPos2: $BlockPos$$Type): boolean
"getRailDirection"(blockState0: $BlockState$$Type, blockGetter1: $BlockGetter$$Type, blockPos2: $BlockPos$$Type, abstractMinecart3: $AbstractMinecart$$Type): $RailShape
"getRailMaxSpeed"(blockState0: $BlockState$$Type, level1: $Level$$Type, blockPos2: $BlockPos$$Type, abstractMinecart3: $AbstractMinecart$$Type): float
"isFlexibleRail"(blockState0: $BlockState$$Type, blockGetter1: $BlockGetter$$Type, blockPos2: $BlockPos$$Type): boolean
"isValidRailShape"(railShape0: $RailShape$$Type): boolean
"onMinecartPass"(blockState0: $BlockState$$Type, level1: $Level$$Type, blockPos2: $BlockPos$$Type, abstractMinecart3: $AbstractMinecart$$Type): void
}

export namespace $IForgeBaseRailBlock {
const probejs$$marker: never
}
export abstract class $IForgeBaseRailBlock$$Static implements $IForgeBaseRailBlock {
}
}

declare module "net.minecraftforge.common.SoundAction" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export class $SoundAction {
public static "get"(string0: string): $SoundAction
public "name"(): string
}
}

declare module "net.minecraftforge.common.extensions.IForgeHolderSet" {
import { $IForgeHolderSet$SerializationType } from "net.minecraftforge.common.extensions.IForgeHolderSet$SerializationType"
import { $Runnable$$Type } from "java.lang.Runnable"

export interface $IForgeHolderSet<T = any> {
"addInvalidationListener"(runnable0: $Runnable$$Type): void
"serializationType"(): $IForgeHolderSet$SerializationType
}

export namespace $IForgeHolderSet {
const probejs$$marker: never
}
export abstract class $IForgeHolderSet$$Static<T = any> implements $IForgeHolderSet<T> {
}
}

declare module "net.minecraftforge.common.util.MutableHashedLinkedMap$MergeFunction" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $MutableHashedLinkedMap$MergeFunction<Key = any, Value = any> {
"apply"(key0: Key, value1: Value, value2: Value): Value
}

export namespace $MutableHashedLinkedMap$MergeFunction {
const probejs$$marker: never
}
export abstract class $MutableHashedLinkedMap$MergeFunction$$Static<Key = any, Value = any> implements $MutableHashedLinkedMap$MergeFunction<Key, Value> {
}
}

declare module "net.minecraftforge.common.extensions.IForgePackResources" {
import { $Collection } from "java.util.Collection"
import { $PackResources } from "net.minecraft.server.packs.PackResources"

export interface $IForgePackResources {
"getChildren"(): $Collection<$PackResources>
"isHidden"(): boolean
get "children"(): $Collection<$PackResources>
get "hidden"(): boolean
}

export namespace $IForgePackResources {
const probejs$$marker: never
}
export abstract class $IForgePackResources$$Static implements $IForgePackResources {
}
}

declare module "net.minecraftforge.common.world.BiomeGenerationSettingsBuilder" {
import { $List } from "java.util.List"
import { $Holder } from "net.minecraft.core.Holder"
import { $BiomeGenerationSettings$$Type } from "net.minecraft.world.level.biome.BiomeGenerationSettings"
import { $PlacedFeature } from "net.minecraft.world.level.levelgen.placement.PlacedFeature"
import { $BiomeGenerationSettings$PlainBuilder } from "net.minecraft.world.level.biome.BiomeGenerationSettings$PlainBuilder"
import { $GenerationStep$Carving$$Type } from "net.minecraft.world.level.levelgen.GenerationStep$Carving"
import { $ConfiguredWorldCarver } from "net.minecraft.world.level.levelgen.carver.ConfiguredWorldCarver"
import { $GenerationStep$Decoration$$Type } from "net.minecraft.world.level.levelgen.GenerationStep$Decoration"

export class $BiomeGenerationSettingsBuilder extends $BiomeGenerationSettings$PlainBuilder {
constructor(biomeGenerationSettings0: $BiomeGenerationSettings$$Type)

public "getCarvers"(carving0: $GenerationStep$Carving$$Type): $List<$Holder<$ConfiguredWorldCarver<any>>>
public "getFeatures"(decoration0: $GenerationStep$Decoration$$Type): $List<$Holder<$PlacedFeature>>
}
}

declare module "net.minecraftforge.common.extensions.IForgeEntity" {
import { $SoundAction$$Type } from "net.minecraftforge.common.SoundAction"
import { $Direction$$Type } from "net.minecraft.core.Direction"
import { $Collection, $Collection$$Type } from "java.util.Collection"
import { $BlockState$$Type } from "net.minecraft.world.level.block.state.BlockState"
import { $PartEntity } from "net.minecraftforge.entity.PartEntity"
import { $FluidType, $FluidType$$Type } from "net.minecraftforge.fluids.FluidType"
import { $Capability$$Type } from "net.minecraftforge.common.capabilities.Capability"
import { $LazyOptional } from "net.minecraftforge.common.util.LazyOptional"
import { $Player$$Type } from "net.minecraft.world.entity.player.Player"
import { $HitResult$$Type } from "net.minecraft.world.phys.HitResult"
import { $BiPredicate$$Type } from "java.util.function.BiPredicate"
import { $ICapabilitySerializable } from "net.minecraftforge.common.capabilities.ICapabilitySerializable"
import { $Entity$$Type } from "net.minecraft.world.entity.Entity"
import { $CompoundTag, $CompoundTag$$Type } from "net.minecraft.nbt.CompoundTag"
import { $Pose$$Type } from "net.minecraft.world.entity.Pose"
import { $BlockPos$$Type } from "net.minecraft.core.BlockPos"
import { $ItemEntity, $ItemEntity$$Type } from "net.minecraft.world.entity.item.ItemEntity"
import { $SoundEvent } from "net.minecraft.sounds.SoundEvent"
import { $MobCategory } from "net.minecraft.world.entity.MobCategory"
import { $Boat$$Type } from "net.minecraft.world.entity.vehicle.Boat"
import { $FluidState$$Type } from "net.minecraft.world.level.material.FluidState"
import { $EntityDimensions$$Type } from "net.minecraft.world.entity.EntityDimensions"
import { $ItemStack } from "net.minecraft.world.item.ItemStack"

export interface $IForgeEntity extends $ICapabilitySerializable<$CompoundTag> {
"canBeRiddenUnderFluidType"(fluidType0: $FluidType$$Type, entity1: $Entity$$Type): boolean
"canFluidExtinguish"(fluidType0: $FluidType$$Type): boolean
"canHydrateInFluidType"(fluidType0: $FluidType$$Type): boolean
"canRiderInteract"(): boolean
"canStartSwimming"(): boolean
"canSwimInFluidType"(fluidType0: $FluidType$$Type): boolean
"canTrample"(blockState0: $BlockState$$Type, blockPos1: $BlockPos$$Type, float2: float): boolean
"canUpdate"(boolean0: boolean): void
"canUpdate"(): boolean
"captureDrops"(collection0: $Collection$$Type<$ItemEntity$$Type>): $Collection<$ItemEntity>
"captureDrops"(): $Collection<$ItemEntity>
"deserializeNBT"(compoundTag0: $CompoundTag$$Type): void
"getCapability"<T>(capability0: $Capability$$Type<T>, direction1: $Direction$$Type): $LazyOptional<T>
"getCapability"<T>(capability0: $Capability$$Type<T>): $LazyOptional<T>
"getClassification"(boolean0: boolean): $MobCategory
/** @deprecated */
"getEyeHeightForge"(pose0: $Pose$$Type, entityDimensions1: $EntityDimensions$$Type): float
"getEyeInFluidType"(): $FluidType
"getFluidFallDistanceModifier"(fluidType0: $FluidType$$Type): float
"getFluidMotionScale"(fluidType0: $FluidType$$Type): double
"getFluidTypeHeight"(fluidType0: $FluidType$$Type): double
"getMaxHeightFluidType"(): $FluidType
"getParts"(): $PartEntity<any>[]
"getPersistentData"(): $CompoundTag
"getPickedResult"(hitResult0: $HitResult$$Type): $ItemStack
"getSoundFromFluidType"(fluidType0: $FluidType$$Type, soundAction1: $SoundAction$$Type): $SoundEvent
"getStepHeight"(): float
"hasCustomOutlineRendering"(player0: $Player$$Type): boolean
"isAddedToWorld"(): boolean
"isEyeInFluidType"(fluidType0: $FluidType$$Type): boolean
"isInFluidType"(fluidState0: $FluidState$$Type): boolean
"isInFluidType"(fluidType0: $FluidType$$Type): boolean
"isInFluidType"(biPredicate0: $BiPredicate$$Type<$FluidType$$Type, double>): boolean
"isInFluidType"(biPredicate0: $BiPredicate$$Type<$FluidType$$Type, double>, boolean1: boolean): boolean
"isInFluidType"(): boolean
"isMultipartEntity"(): boolean
"isPushedByFluid"(fluidType0: $FluidType$$Type): boolean
"onAddedToWorld"(): void
"onRemovedFromWorld"(): void
"revive"(): void
"serializeNBT"(): $CompoundTag
"shouldRiderSit"(): boolean
"shouldUpdateFluidWhileBoating"(fluidState0: $FluidState$$Type, boat1: $Boat$$Type): boolean
get "eyeInFluidType"(): $FluidType
get "maxHeightFluidType"(): $FluidType
get "parts"(): $PartEntity<any>[]
get "persistentData"(): $CompoundTag
get "stepHeight"(): float
get "addedToWorld"(): boolean
get "inFluidType"(): boolean
get "multipartEntity"(): boolean
}

export namespace $IForgeEntity {
const probejs$$marker: never
}
export abstract class $IForgeEntity$$Static implements $IForgeEntity {
}
}

declare module "net.minecraftforge.common.world.ModifiableStructureInfo$StructureInfo$Builder" {
import { $ModifiableStructureInfo$StructureInfo, $ModifiableStructureInfo$StructureInfo$$Type } from "net.minecraftforge.common.world.ModifiableStructureInfo$StructureInfo"
import { $StructureSettingsBuilder } from "net.minecraftforge.common.world.StructureSettingsBuilder"

export class $ModifiableStructureInfo$StructureInfo$Builder {
public "build"(): $ModifiableStructureInfo$StructureInfo
public static "copyOf"(structureInfo0: $ModifiableStructureInfo$StructureInfo$$Type): $ModifiableStructureInfo$StructureInfo$Builder
public "getStructureSettings"(): $StructureSettingsBuilder
get "structureSettings"(): $StructureSettingsBuilder
}
}

declare module "net.minecraftforge.common.world.ModifiableBiomeInfo$BiomeInfo" {
import { $Biome$ClimateSettings, $Biome$ClimateSettings$$Type } from "net.minecraft.world.level.biome.Biome$ClimateSettings"
import { $BiomeGenerationSettings, $BiomeGenerationSettings$$Type } from "net.minecraft.world.level.biome.BiomeGenerationSettings"
import { $MobSpawnSettings, $MobSpawnSettings$$Type } from "net.minecraft.world.level.biome.MobSpawnSettings"
import { $BiomeSpecialEffects, $BiomeSpecialEffects$$Type } from "net.minecraft.world.level.biome.BiomeSpecialEffects"
import { $Record } from "java.lang.Record"

export class $ModifiableBiomeInfo$BiomeInfo extends $Record {
constructor(climateSettings: $Biome$ClimateSettings$$Type, effects: $BiomeSpecialEffects$$Type, generationSettings: $BiomeGenerationSettings$$Type, mobSpawnSettings: $MobSpawnSettings$$Type)

public "climateSettings"(): $Biome$ClimateSettings
public "effects"(): $BiomeSpecialEffects
public "generationSettings"(): $BiomeGenerationSettings
public "mobSpawnSettings"(): $MobSpawnSettings
}
}

declare module "net.minecraftforge.common.loot.IGlobalLootModifier" {
import { $JsonElement } from "com.google.gson.JsonElement"
import { $Codec } from "com.mojang.serialization.Codec"
import { $Dynamic$$Type } from "com.mojang.serialization.Dynamic"
import { $LootContext$$Type } from "net.minecraft.world.level.storage.loot.LootContext"
import { $LootItemCondition } from "net.minecraft.world.level.storage.loot.predicates.LootItemCondition"
import { $ObjectArrayList, $ObjectArrayList$$Type } from "it.unimi.dsi.fastutil.objects.ObjectArrayList"
import { $ItemStack, $ItemStack$$Type } from "net.minecraft.world.item.ItemStack"

export interface $IGlobalLootModifier {
"apply"(objectArrayList0: $ObjectArrayList$$Type<$ItemStack$$Type>, lootContext1: $LootContext$$Type): $ObjectArrayList<$ItemStack>
"codec"(): $Codec<$IGlobalLootModifier>
}

export namespace $IGlobalLootModifier {
const DIRECT_CODEC: $Codec<$IGlobalLootModifier>
const LOOT_CONDITIONS_CODEC: $Codec<$LootItemCondition[]>
function getJson<U>(dynamic0: $Dynamic$$Type<any>): $JsonElement
}
export abstract class $IGlobalLootModifier$$Static implements $IGlobalLootModifier {
static readonly "DIRECT_CODEC": $Codec<$IGlobalLootModifier>
static readonly "LOOT_CONDITIONS_CODEC": $Codec<$LootItemCondition[]>

static "getJson"<U>(dynamic0: $Dynamic$$Type<any>): $JsonElement
}
}

declare module "net.minecraftforge.common.ForgeConfigSpec$IntValue" {
import { $ForgeConfigSpec$ConfigValue } from "net.minecraftforge.common.ForgeConfigSpec$ConfigValue"

export class $ForgeConfigSpec$IntValue extends $ForgeConfigSpec$ConfigValue<integer> {
}
}

declare module "net.minecraftforge.common.extensions.IForgeRecipeSerializer" {
import { $ResourceLocation$$Type } from "net.minecraft.resources.ResourceLocation"
import { $JsonObject$$Type } from "com.google.gson.JsonObject"
import { $Recipe } from "net.minecraft.world.item.crafting.Recipe"
import { $ICondition$IContext$$Type } from "net.minecraftforge.common.crafting.conditions.ICondition$IContext"

export interface $IForgeRecipeSerializer<T extends $Recipe<any> = $Recipe<any>> {
"fromJson"(resourceLocation0: $ResourceLocation$$Type, jsonObject1: $JsonObject$$Type, iContext2: $ICondition$IContext$$Type): T
}

export namespace $IForgeRecipeSerializer {
const probejs$$marker: never
}
export abstract class $IForgeRecipeSerializer$$Static<T extends $Recipe<any> = $Recipe<any>> implements $IForgeRecipeSerializer<T> {
}
}

declare module "net.minecraftforge.common.extensions.IForgeLevel" {
import { $ICapabilityProvider } from "net.minecraftforge.common.capabilities.ICapabilityProvider"
import { $Direction$$Type } from "net.minecraft.core.Direction"
import { $Collection } from "java.util.Collection"
import { $PartEntity } from "net.minecraftforge.entity.PartEntity"
import { $Capability$$Type } from "net.minecraftforge.common.capabilities.Capability"
import { $LazyOptional } from "net.minecraftforge.common.util.LazyOptional"

export interface $IForgeLevel extends $ICapabilityProvider {
"getCapability"<T>(capability0: $Capability$$Type<T>, direction1: $Direction$$Type): $LazyOptional<T>
"getCapability"<T>(capability0: $Capability$$Type<T>): $LazyOptional<T>
"getMaxEntityRadius"(): double
"getPartEntities"(): $Collection<$PartEntity<any>>
"increaseMaxEntityRadius"(double0: double): double
get "maxEntityRadius"(): double
get "partEntities"(): $Collection<$PartEntity<any>>
}

export namespace $IForgeLevel {
const probejs$$marker: never
}
export abstract class $IForgeLevel$$Static implements $IForgeLevel {
}
}

declare module "net.minecraftforge.common.ForgeConfigSpec$ValueSpec" {
import { $Class } from "java.lang.Class"
import { $Comparable, $Comparable$$Type } from "java.lang.Comparable"
import { $ForgeConfigSpec$Range } from "net.minecraftforge.common.ForgeConfigSpec$Range"

export class $ForgeConfigSpec$ValueSpec {
public "correct"(object0: any): any
public "getClazz"(): $Class<any>
public "getComment"(): string
public "getDefault"(): any
public "getRange"<V extends $Comparable<V>>(): $ForgeConfigSpec$Range<V>
public "getTranslationKey"(): string
public "needsWorldRestart"(): boolean
public "test"(object0: any): boolean
get "clazz"(): $Class<any>
get "comment"(): string
get "default"(): any
get "range"(): $ForgeConfigSpec$Range<V>
get "translationKey"(): string
}
}

declare module "net.minecraftforge.common.util.LazyOptional" {
import { $NonNullFunction$$Type } from "net.minecraftforge.common.util.NonNullFunction"
import { $Throwable, $Throwable$$Type } from "java.lang.Throwable"
import { $NonNullPredicate$$Type } from "net.minecraftforge.common.util.NonNullPredicate"
import { $NonNullConsumer$$Type } from "net.minecraftforge.common.util.NonNullConsumer"
import { $Optional } from "java.util.Optional"
import { $NonNullSupplier$$Type } from "net.minecraftforge.common.util.NonNullSupplier"

export class $LazyOptional<T = any> {
public "addListener"(nonNullConsumer0: $NonNullConsumer$$Type<$LazyOptional$$Type<T>>): void
public "cast"<X>(): $LazyOptional<X>
public static "empty"<T>(): $LazyOptional<T>
public "filter"(nonNullPredicate0: $NonNullPredicate$$Type<T>): $Optional<T>
public "ifPresent"(nonNullConsumer0: $NonNullConsumer$$Type<T>): void
public "invalidate"(): void
public "isPresent"(): boolean
public "lazyMap"<U>(nonNullFunction0: $NonNullFunction$$Type<T, U>): $LazyOptional<U>
public "map"<U>(nonNullFunction0: $NonNullFunction$$Type<T, U>): $Optional<U>
public static "of"<T>(nonNullSupplier0: $NonNullSupplier$$Type<T>): $LazyOptional<T>
public "orElse"(t0: T): T
public "orElseGet"(nonNullSupplier0: $NonNullSupplier$$Type<T>): T
public "orElseThrow"<X extends $Throwable>(nonNullSupplier0: $NonNullSupplier$$Type<X>): T
public "removeListener"(nonNullConsumer0: $NonNullConsumer$$Type<$LazyOptional$$Type<T>>): void
public "resolve"(): $Optional<T>
get "present"(): boolean
}
}

declare module "net.minecraftforge.common.extensions.IForgeHolderSet$SerializationType" {
import { $Enum } from "java.lang.Enum"

export class $IForgeHolderSet$SerializationType extends $Enum<$IForgeHolderSet$SerializationType> {
static readonly "LIST": $IForgeHolderSet$SerializationType
static readonly "OBJECT": $IForgeHolderSet$SerializationType
static readonly "STRING": $IForgeHolderSet$SerializationType
static readonly "UNKNOWN": $IForgeHolderSet$SerializationType

public static "valueOf"(string0: string): $IForgeHolderSet$SerializationType
public static "values"(): $IForgeHolderSet$SerializationType[]
}
}

declare module "net.minecraftforge.common.data.ExistingFileHelper$ResourceType" {
import { $ExistingFileHelper$IResourceType } from "net.minecraftforge.common.data.ExistingFileHelper$IResourceType"
import { $PackType, $PackType$$Type } from "net.minecraft.server.packs.PackType"

export class $ExistingFileHelper$ResourceType implements $ExistingFileHelper$IResourceType {
constructor(packType0: $PackType$$Type, string1: string, string2: string)

public "getPackType"(): $PackType
public "getPrefix"(): string
public "getSuffix"(): string
get "packType"(): $PackType
get "prefix"(): string
get "suffix"(): string
}
}

declare module "net.minecraftforge.common.world.StructureModifier" {
import { $Structure$$Type } from "net.minecraft.world.level.levelgen.structure.Structure"
import { $Codec } from "com.mojang.serialization.Codec"
import { $Holder, $Holder$$Type } from "net.minecraft.core.Holder"
import { $ModifiableStructureInfo$StructureInfo$Builder$$Type } from "net.minecraftforge.common.world.ModifiableStructureInfo$StructureInfo$Builder"
import { $HolderSet } from "net.minecraft.core.HolderSet"
import { $StructureModifier$Phase$$Type } from "net.minecraftforge.common.world.StructureModifier$Phase"

export interface $StructureModifier {
"codec"(): $Codec<$StructureModifier>
"modify"(holder0: $Holder$$Type<$Structure$$Type>, phase1: $StructureModifier$Phase$$Type, builder2: $ModifiableStructureInfo$StructureInfo$Builder$$Type): void
}

export namespace $StructureModifier {
const DIRECT_CODEC: $Codec<$StructureModifier>
const LIST_CODEC: $Codec<$HolderSet<$StructureModifier>>
const REFERENCE_CODEC: $Codec<$Holder<$StructureModifier>>
}
export abstract class $StructureModifier$$Static implements $StructureModifier {
static readonly "DIRECT_CODEC": $Codec<$StructureModifier>
static readonly "LIST_CODEC": $Codec<$HolderSet<$StructureModifier>>
static readonly "REFERENCE_CODEC": $Codec<$Holder<$StructureModifier>>

}
}

declare module "net.minecraftforge.common.ForgeConfigSpec$Range" {
import { $Predicate, $Predicate$$Type } from "java.util.function.Predicate"
import { $Class } from "java.lang.Class"
import { $Comparable } from "java.lang.Comparable"

export class $ForgeConfigSpec$Range<V extends $Comparable<V> = $Comparable<V>> implements $Predicate<any> {
public "and"(predicate0: $Predicate$$Type<any>): $Predicate<any>
public "correct"(object0: any, object1: any): any
public "getClazz"(): $Class<V>
public "getMax"(): V
public "getMin"(): V
public static "isEqual"<T>(object0: any): $Predicate<T>
public "negate"(): $Predicate<any>
public static "not"<T>(predicate0: $Predicate$$Type<T>): $Predicate<T>
public "or"(predicate0: $Predicate$$Type<any>): $Predicate<any>
public "test"(object0: any): boolean
get "clazz"(): $Class<V>
get "max"(): V
get "min"(): V
}
}

declare module "net.minecraftforge.common.extensions.IForgeEnchantment" {
import { $EnchantmentCategory$$Type } from "net.minecraft.world.item.enchantment.EnchantmentCategory"
import { $Item$$Type } from "net.minecraft.world.item.Item"
import { $Set$$Type } from "java.util.Set"
import { $ItemStack$$Type } from "net.minecraft.world.item.ItemStack"
import { $MobType$$Type } from "net.minecraft.world.entity.MobType"

export interface $IForgeEnchantment {
"allowedInCreativeTab"(item0: $Item$$Type, set1: $Set$$Type<$EnchantmentCategory$$Type>): boolean
"getDamageBonus"(int0: integer, mobType1: $MobType$$Type, itemStack2: $ItemStack$$Type): float
}

export namespace $IForgeEnchantment {
const probejs$$marker: never
}
export abstract class $IForgeEnchantment$$Static implements $IForgeEnchantment {
}
}

declare module "net.minecraftforge.common.util.BlockSnapshot" {
import { $CompoundTag } from "net.minecraft.nbt.CompoundTag"
import { $BlockPos, $BlockPos$$Type } from "net.minecraft.core.BlockPos"
import { $LevelAccessor, $LevelAccessor$$Type } from "net.minecraft.world.level.LevelAccessor"
import { $BlockState } from "net.minecraft.world.level.block.state.BlockState"
import { $Level } from "net.minecraft.world.level.Level"
import { $BlockEntity } from "net.minecraft.world.level.block.entity.BlockEntity"
import { $ResourceKey$$Type } from "net.minecraft.resources.ResourceKey"

export class $BlockSnapshot {
public static "create"(resourceKey0: $ResourceKey$$Type<$Level>, levelAccessor1: $LevelAccessor$$Type, blockPos2: $BlockPos$$Type): $BlockSnapshot
public static "create"(resourceKey0: $ResourceKey$$Type<$Level>, levelAccessor1: $LevelAccessor$$Type, blockPos2: $BlockPos$$Type, int3: integer): $BlockSnapshot
public "getBlockEntity"(): $BlockEntity
public "getCurrentBlock"(): $BlockState
public "getFlag"(): integer
public "getLevel"(): $LevelAccessor
public "getPos"(): $BlockPos
public "getReplacedBlock"(): $BlockState
public "getTag"(): $CompoundTag
public "restore"(boolean0: boolean, boolean1: boolean): boolean
public "restore"(boolean0: boolean): boolean
public "restore"(): boolean
public "restoreToLocation"(levelAccessor0: $LevelAccessor$$Type, blockPos1: $BlockPos$$Type, boolean2: boolean, boolean3: boolean): boolean
get "blockEntity"(): $BlockEntity
get "currentBlock"(): $BlockState
get "flag"(): integer
get "level"(): $LevelAccessor
get "pos"(): $BlockPos
get "replacedBlock"(): $BlockState
get "tag"(): $CompoundTag
}
}

declare module "net.minecraftforge.common.extensions.IForgeBlockGetter" {
import { $BlockPos$$Type } from "net.minecraft.core.BlockPos"
import { $ModelDataManager } from "net.minecraftforge.client.model.data.ModelDataManager"
import { $BlockEntity } from "net.minecraft.world.level.block.entity.BlockEntity"

export interface $IForgeBlockGetter {
"getExistingBlockEntity"(blockPos0: $BlockPos$$Type): $BlockEntity
"getModelDataManager"(): $ModelDataManager
get "modelDataManager"(): $ModelDataManager
}

export namespace $IForgeBlockGetter {
const probejs$$marker: never
}
export abstract class $IForgeBlockGetter$$Static implements $IForgeBlockGetter {
}
}

declare module "net.minecraftforge.common.capabilities.CapabilityDispatcher" {
import { $ResourceLocation$$Type } from "net.minecraft.resources.ResourceLocation"
import { $List$$Type } from "java.util.List"
import { $CompoundTag, $CompoundTag$$Type } from "net.minecraft.nbt.CompoundTag"
import { $ICapabilityProvider, $ICapabilityProvider$$Type } from "net.minecraftforge.common.capabilities.ICapabilityProvider"
import { $Direction$$Type } from "net.minecraft.core.Direction"
import { $Map$$Type } from "java.util.Map"
import { $Runnable$$Type } from "java.lang.Runnable"
import { $Capability$$Type } from "net.minecraftforge.common.capabilities.Capability"
import { $INBTSerializable } from "net.minecraftforge.common.util.INBTSerializable"
import { $LazyOptional } from "net.minecraftforge.common.util.LazyOptional"

export class $CapabilityDispatcher implements $INBTSerializable<$CompoundTag>, $ICapabilityProvider {
constructor(map0: $Map$$Type<$ResourceLocation$$Type, $ICapabilityProvider$$Type>, list1: $List$$Type<$Runnable$$Type>, iCapabilityProvider2: $ICapabilityProvider$$Type)
constructor(map0: $Map$$Type<$ResourceLocation$$Type, $ICapabilityProvider$$Type>, list1: $List$$Type<$Runnable$$Type>)

public "areCompatible"(capabilityDispatcher0: $CapabilityDispatcher$$Type): boolean
public "deserializeNBT"(compoundTag0: $CompoundTag$$Type): void
public "getCapability"(capability0: $Capability$$Type, direction1: $Direction$$Type): $LazyOptional
public "getCapability"<T>(capability0: $Capability$$Type<T>): $LazyOptional<T>
public "invalidate"(): void
public "serializeNBT"(): $CompoundTag
}
}

declare module "net.minecraftforge.common.util.NonNullPredicate" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $NonNullPredicate<T = any> {
"test"(t0: T): boolean
}

export namespace $NonNullPredicate {
const probejs$$marker: never
}
export abstract class $NonNullPredicate$$Static<T = any> implements $NonNullPredicate<T> {
}
}

declare module "net.minecraftforge.common.extensions.IForgeDispensibleContainerItem" {
import { $BlockPos$$Type } from "net.minecraft.core.BlockPos"
import { $BlockHitResult$$Type } from "net.minecraft.world.phys.BlockHitResult"
import { $ItemStack$$Type } from "net.minecraft.world.item.ItemStack"
import { $Level$$Type } from "net.minecraft.world.level.Level"
import { $Player$$Type } from "net.minecraft.world.entity.player.Player"

export interface $IForgeDispensibleContainerItem {
"emptyContents"(player0: $Player$$Type, level1: $Level$$Type, blockPos2: $BlockPos$$Type, blockHitResult3: $BlockHitResult$$Type, itemStack4: $ItemStack$$Type): boolean
}

export namespace $IForgeDispensibleContainerItem {
const probejs$$marker: never
}
export abstract class $IForgeDispensibleContainerItem$$Static implements $IForgeDispensibleContainerItem {
}
}

declare module "net.minecraftforge.common.extensions.IForgePlayer" {
import { $Entity$$Type } from "net.minecraft.world.entity.Entity"
import { $Vec3$$Type } from "net.minecraft.world.phys.Vec3"
import { $BlockPos$$Type } from "net.minecraft.core.BlockPos"

export interface $IForgePlayer {
"canReach"(vec30: $Vec3$$Type, double1: double): boolean
"canReach"(blockPos0: $BlockPos$$Type, double1: double): boolean
"canReach"(entity0: $Entity$$Type, double1: double): boolean
"canReachRaw"(blockPos0: $BlockPos$$Type, double1: double): boolean
"canReachRaw"(entity0: $Entity$$Type, double1: double): boolean
"getBlockReach"(): double
"getEntityReach"(): double
"isCloseEnough"(entity0: $Entity$$Type, double1: double): boolean
get "blockReach"(): double
get "entityReach"(): double
}

export namespace $IForgePlayer {
const probejs$$marker: never
}
export abstract class $IForgePlayer$$Static implements $IForgePlayer {
}
}

declare module "net.minecraftforge.common.ForgeConfigSpec" {
import { $ConfigSpec$CorrectionListener$$Type } from "com.electronwill.nightconfig.core.ConfigSpec$CorrectionListener"
import { $LongSupplier$$Type } from "java.util.function.LongSupplier"
import { $IConfigSpec } from "net.minecraftforge.fml.config.IConfigSpec"
import { $EnumGetMethod$$Type } from "com.electronwill.nightconfig.core.EnumGetMethod"
import { $Supplier$$Type } from "java.util.function.Supplier"
import { $OptionalInt } from "java.util.OptionalInt"
import { $UnmodifiableConfigWrapper } from "com.electronwill.nightconfig.core.utils.UnmodifiableConfigWrapper"
import { $OptionalLong } from "java.util.OptionalLong"
import { $CommentedConfig$$Type } from "com.electronwill.nightconfig.core.CommentedConfig"
import { $List$$Type } from "java.util.List"
import { $Enum, $Enum$$Type } from "java.lang.Enum"
import { $Optional } from "java.util.Optional"
import { $Class$$Type } from "java.lang.Class"
import { $IntSupplier$$Type } from "java.util.function.IntSupplier"
import { $UnmodifiableConfig } from "com.electronwill.nightconfig.core.UnmodifiableConfig"

export class $ForgeConfigSpec extends $UnmodifiableConfigWrapper<$UnmodifiableConfig> implements $IConfigSpec<$ForgeConfigSpec> {
public "acceptConfig"(commentedConfig0: $CommentedConfig$$Type): void
public "afterReload"(): void
public "apply"<T>(string0: string): T
public "apply"<T>(list0: $List$$Type<string>): T
public "contains"(string0: string): boolean
public "correct"(commentedConfig0: $CommentedConfig$$Type, correctionListener1: $ConfigSpec$CorrectionListener$$Type): integer
public "correct"(commentedConfig0: $CommentedConfig$$Type, correctionListener1: $ConfigSpec$CorrectionListener$$Type, correctionListener2: $ConfigSpec$CorrectionListener$$Type): integer
public "correct"(commentedConfig0: $CommentedConfig$$Type): integer
public "get"<T>(list0: $List$$Type<string>): T
public "get"<T>(string0: string): T
public "getByte"(string0: string): byte
public "getByte"(list0: $List$$Type<string>): byte
public "getByteOrElse"(list0: $List$$Type<string>, byte1: byte): byte
public "getByteOrElse"(string0: string, byte1: byte): byte
public "getChar"(list0: $List$$Type<string>): character
public "getChar"(string0: string): character
public "getCharOrElse"(string0: string, char1: character): character
public "getCharOrElse"(list0: $List$$Type<string>, char1: character): character
public "getEnum"<T extends $Enum<T>>(list0: $List$$Type<string>, class1: $Class$$Type<T>): T
public "getEnum"<T extends $Enum<T>>(list0: $List$$Type<string>, class1: $Class$$Type<T>, enumGetMethod2: $EnumGetMethod$$Type): T
public "getEnum"<T extends $Enum<T>>(string0: string, class1: $Class$$Type<T>): T
public "getEnum"<T extends $Enum<T>>(string0: string, class1: $Class$$Type<T>, enumGetMethod2: $EnumGetMethod$$Type): T
public "getEnumOrElse"<T extends $Enum<T>>(string0: string, class1: $Class$$Type<T>, supplier2: $Supplier$$Type<T>): T
public "getEnumOrElse"<T extends $Enum<T>>(list0: $List$$Type<string>, t1: T): T
public "getEnumOrElse"<T extends $Enum<T>>(list0: $List$$Type<string>, class1: $Class$$Type<T>, enumGetMethod2: $EnumGetMethod$$Type, supplier3: $Supplier$$Type<T>): T
public "getEnumOrElse"<T extends $Enum<T>>(list0: $List$$Type<string>, class1: $Class$$Type<T>, supplier2: $Supplier$$Type<T>): T
public "getEnumOrElse"<T extends $Enum<T>>(string0: string, t1: T, enumGetMethod2: $EnumGetMethod$$Type): T
public "getEnumOrElse"<T extends $Enum<T>>(string0: string, t1: T): T
public "getEnumOrElse"<T extends $Enum<T>>(list0: $List$$Type<string>, t1: T, enumGetMethod2: $EnumGetMethod$$Type): T
public "getEnumOrElse"<T extends $Enum<T>>(string0: string, class1: $Class$$Type<T>, enumGetMethod2: $EnumGetMethod$$Type, supplier3: $Supplier$$Type<T>): T
public "getInt"(list0: $List$$Type<string>): integer
public "getInt"(string0: string): integer
public "getIntOrElse"(string0: string, int1: integer): integer
public "getIntOrElse"(list0: $List$$Type<string>, int1: integer): integer
public "getIntOrElse"(list0: $List$$Type<string>, intSupplier1: $IntSupplier$$Type): integer
public "getIntOrElse"(string0: string, intSupplier1: $IntSupplier$$Type): integer
public "getLevelComment"(list0: $List$$Type<string>): string
public "getLevelTranslationKey"(list0: $List$$Type<string>): string
public "getLong"(list0: $List$$Type<string>): long
public "getLong"(string0: string): long
public "getLongOrElse"(list0: $List$$Type<string>, long1: long): long
public "getLongOrElse"(string0: string, long1: long): long
public "getLongOrElse"(string0: string, longSupplier1: $LongSupplier$$Type): long
public "getLongOrElse"(list0: $List$$Type<string>, longSupplier1: $LongSupplier$$Type): long
public "getOptional"<T>(list0: $List$$Type<string>): $Optional<T>
public "getOptional"<T>(string0: string): $Optional<T>
public "getOptionalEnum"<T extends $Enum<T>>(list0: $List$$Type<string>, class1: $Class$$Type<T>, enumGetMethod2: $EnumGetMethod$$Type): $Optional<T>
public "getOptionalEnum"<T extends $Enum<T>>(list0: $List$$Type<string>, class1: $Class$$Type<T>): $Optional<T>
public "getOptionalEnum"<T extends $Enum<T>>(string0: string, class1: $Class$$Type<T>, enumGetMethod2: $EnumGetMethod$$Type): $Optional<T>
public "getOptionalEnum"<T extends $Enum<T>>(string0: string, class1: $Class$$Type<T>): $Optional<T>
public "getOptionalInt"(list0: $List$$Type<string>): $OptionalInt
public "getOptionalInt"(string0: string): $OptionalInt
public "getOptionalLong"(string0: string): $OptionalLong
public "getOptionalLong"(list0: $List$$Type<string>): $OptionalLong
public "getOrElse"<T>(string0: string, supplier1: $Supplier$$Type<T>): T
public "getOrElse"<T>(list0: $List$$Type<string>, supplier1: $Supplier$$Type<T>): T
public "getOrElse"<T>(list0: $List$$Type<string>, t1: T): T
public "getOrElse"<T>(string0: string, t1: T): T
public "getRaw"<T>(string0: string): T
public "getShort"(list0: $List$$Type<string>): short
public "getShort"(string0: string): short
public "getShortOrElse"(list0: $List$$Type<string>, short1: short): short
public "getShortOrElse"(string0: string, short1: short): short
public "getSpec"(): $UnmodifiableConfig
public "getValues"(): $UnmodifiableConfig
public "isCorrect"(commentedConfig0: $CommentedConfig$$Type): boolean
public "isCorrecting"(): boolean
public "isLoaded"(): boolean
public "isNull"(string0: string): boolean
public "isNull"(list0: $List$$Type<string>): boolean
public "save"(): void
public "self"(): $ForgeConfigSpec
public "setConfig"(commentedConfig0: $CommentedConfig$$Type): void
get "spec"(): $UnmodifiableConfig
get "values"(): $UnmodifiableConfig
get "correcting"(): boolean
get "loaded"(): boolean
set "config"(value: $CommentedConfig$$Type)
}
}

declare module "net.minecraftforge.common.ForgeConfigSpec$BooleanValue" {
import { $ForgeConfigSpec$ConfigValue } from "net.minecraftforge.common.ForgeConfigSpec$ConfigValue"

export class $ForgeConfigSpec$BooleanValue extends $ForgeConfigSpec$ConfigValue<boolean> {
}
}

declare module "net.minecraftforge.common.ForgeConfigSpec$DoubleValue" {
import { $ForgeConfigSpec$ConfigValue } from "net.minecraftforge.common.ForgeConfigSpec$ConfigValue"

export class $ForgeConfigSpec$DoubleValue extends $ForgeConfigSpec$ConfigValue<double> {
}
}

declare module "net.minecraftforge.common.extensions.IForgeItemStack" {
import { $Enchantment, $Enchantment$$Type } from "net.minecraft.world.item.enchantment.Enchantment"
import { $LivingEntity$$Type } from "net.minecraft.world.entity.LivingEntity"
import { $AABB } from "net.minecraft.world.phys.AABB"
import { $Direction$$Type } from "net.minecraft.core.Direction"
import { $LazyOptional } from "net.minecraftforge.common.util.LazyOptional"
import { $ToolAction$$Type } from "net.minecraftforge.common.ToolAction"
import { $DamageSource$$Type } from "net.minecraft.world.damagesource.DamageSource"
import { $Map } from "java.util.Map"
import { $UseOnContext$$Type } from "net.minecraft.world.item.context.UseOnContext"
import { $RecipeType$$Type } from "net.minecraft.world.item.crafting.RecipeType"
import { $FoodProperties } from "net.minecraft.world.food.FoodProperties"
import { $Component, $Component$$Type } from "net.minecraft.network.chat.Component"
import { $InteractionResult } from "net.minecraft.world.InteractionResult"
import { $LevelReader$$Type } from "net.minecraft.world.level.LevelReader"
import { $Capability$$Type } from "net.minecraftforge.common.capabilities.Capability"
import { $Player$$Type } from "net.minecraft.world.entity.player.Player"
import { $EnderMan$$Type } from "net.minecraft.world.entity.monster.EnderMan"
import { $ICapabilitySerializable } from "net.minecraftforge.common.capabilities.ICapabilitySerializable"
import { $Entity$$Type } from "net.minecraft.world.entity.Entity"
import { $CompoundTag, $CompoundTag$$Type } from "net.minecraft.nbt.CompoundTag"
import { $BlockPos$$Type } from "net.minecraft.core.BlockPos"
import { $ItemEntity$$Type } from "net.minecraft.world.entity.item.ItemEntity"
import { $EquipmentSlot, $EquipmentSlot$$Type } from "net.minecraft.world.entity.EquipmentSlot"
import { $ItemStack, $ItemStack$$Type } from "net.minecraft.world.item.ItemStack"
import { $Level$$Type } from "net.minecraft.world.level.Level"
import { $Mob$$Type } from "net.minecraft.world.entity.Mob"

export interface $IForgeItemStack extends $ICapabilitySerializable<$CompoundTag> {
"areShareTagsEqual"(itemStack0: $ItemStack$$Type): boolean
"canApplyAtEnchantingTable"(enchantment0: $Enchantment$$Type): boolean
"canDisableShield"(itemStack0: $ItemStack$$Type, livingEntity1: $LivingEntity$$Type, livingEntity2: $LivingEntity$$Type): boolean
"canElytraFly"(livingEntity0: $LivingEntity$$Type): boolean
"canEquip"(equipmentSlot0: $EquipmentSlot$$Type, entity1: $Entity$$Type): boolean
"canGrindstoneRepair"(): boolean
"canPerformAction"(toolAction0: $ToolAction$$Type): boolean
"canWalkOnPowderedSnow"(livingEntity0: $LivingEntity$$Type): boolean
"deserializeNBT"(compoundTag0: $CompoundTag$$Type): void
"doesSneakBypassUse"(levelReader0: $LevelReader$$Type, blockPos1: $BlockPos$$Type, player2: $Player$$Type): boolean
"elytraFlightTick"(livingEntity0: $LivingEntity$$Type, int1: integer): boolean
"equals"(itemStack0: $ItemStack$$Type, boolean1: boolean): boolean
"getAllEnchantments"(): $Map<$Enchantment, integer>
"getBurnTime"(recipeType0: $RecipeType$$Type<any>): integer
"getCapability"<T>(capability0: $Capability$$Type<T>, direction1: $Direction$$Type): $LazyOptional<T>
"getCapability"<T>(capability0: $Capability$$Type<T>): $LazyOptional<T>
"getCraftingRemainingItem"(): $ItemStack
"getEnchantmentLevel"(enchantment0: $Enchantment$$Type): integer
"getEnchantmentValue"(): integer
"getEntityLifespan"(level0: $Level$$Type): integer
"getEquipmentSlot"(): $EquipmentSlot
"getFoodProperties"(livingEntity0: $LivingEntity$$Type): $FoodProperties
"getHighlightTip"(component0: $Component$$Type): $Component
"getShareTag"(): $CompoundTag
"getSweepHitBox"(player0: $Player$$Type, entity1: $Entity$$Type): $AABB
"getXpRepairRatio"(): float
"hasCraftingRemainingItem"(): boolean
"isBookEnchantable"(itemStack0: $ItemStack$$Type): boolean
"isEnderMask"(player0: $Player$$Type, enderMan1: $EnderMan$$Type): boolean
"isNotReplaceableByPickAction"(player0: $Player$$Type, int1: integer): boolean
"isPiglinCurrency"(): boolean
"isRepairable"(): boolean
"makesPiglinsNeutral"(livingEntity0: $LivingEntity$$Type): boolean
/** @deprecated */
"onArmorTick"(level0: $Level$$Type, player1: $Player$$Type): void
"onBlockStartBreak"(blockPos0: $BlockPos$$Type, player1: $Player$$Type): boolean
"onDestroyed"(itemEntity0: $ItemEntity$$Type, damageSource1: $DamageSource$$Type): void
"onDroppedByPlayer"(player0: $Player$$Type): boolean
"onEntityItemUpdate"(itemEntity0: $ItemEntity$$Type): boolean
"onEntitySwing"(livingEntity0: $LivingEntity$$Type): boolean
"onHorseArmorTick"(level0: $Level$$Type, mob1: $Mob$$Type): void
"onInventoryTick"(level0: $Level$$Type, player1: $Player$$Type, int2: integer, int3: integer): void
"onItemUseFirst"(useOnContext0: $UseOnContext$$Type): $InteractionResult
"onStopUsing"(livingEntity0: $LivingEntity$$Type, int1: integer): void
"readShareTag"(compoundTag0: $CompoundTag$$Type): void
"shouldCauseBlockBreakReset"(itemStack0: $ItemStack$$Type): boolean
get "allEnchantments"(): $Map<$Enchantment, integer>
get "craftingRemainingItem"(): $ItemStack
get "enchantmentValue"(): integer
get "equipmentSlot"(): $EquipmentSlot
get "shareTag"(): $CompoundTag
get "xpRepairRatio"(): float
get "piglinCurrency"(): boolean
get "repairable"(): boolean
}

export namespace $IForgeItemStack {
const probejs$$marker: never
}
export abstract class $IForgeItemStack$$Static implements $IForgeItemStack {
}
}

declare module "net.minecraftforge.common.util.NonNullFunction" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $NonNullFunction<T = any, R = any> {
"apply"(t0: T): R
}

export namespace $NonNullFunction {
const probejs$$marker: never
}
export abstract class $NonNullFunction$$Static<T = any, R = any> implements $NonNullFunction<T, R> {
}
}

declare module "net.minecraftforge.common.extensions.IForgeBoat" {
import { $Entity$$Type } from "net.minecraft.world.entity.Entity"
import { $FluidState$$Type } from "net.minecraft.world.level.material.FluidState"
import { $FluidType$$Type } from "net.minecraftforge.fluids.FluidType"

export interface $IForgeBoat {
"canBoatInFluid"(fluidType0: $FluidType$$Type): boolean
"canBoatInFluid"(fluidState0: $FluidState$$Type): boolean
"shouldUpdateFluidWhileRiding"(fluidState0: $FluidState$$Type, entity1: $Entity$$Type): boolean
}

export namespace $IForgeBoat {
const probejs$$marker: never
}
export abstract class $IForgeBoat$$Static implements $IForgeBoat {
}
}

declare module "net.minecraftforge.common.extensions.IForgeItem" {
import { $Enchantment, $Enchantment$$Type } from "net.minecraft.world.item.enchantment.Enchantment"
import { $LivingEntity, $LivingEntity$$Type } from "net.minecraft.world.entity.LivingEntity"
import { $AABB } from "net.minecraft.world.phys.AABB"
import { $ICapabilityProvider } from "net.minecraftforge.common.capabilities.ICapabilityProvider"
import { $BlockState$$Type } from "net.minecraft.world.level.block.state.BlockState"
import { $Multimap } from "com.google.common.collect.Multimap"
import { $IForgeItemMixin } from "org.violetmoon.quark.mixin.mixins.IForgeItemMixin"
import { $ToolAction$$Type } from "net.minecraftforge.common.ToolAction"
import { $AttributeModifier } from "net.minecraft.world.entity.ai.attributes.AttributeModifier"
import { $DamageSource$$Type } from "net.minecraft.world.damagesource.DamageSource"
import { $Map } from "java.util.Map"
import { $UseOnContext$$Type } from "net.minecraft.world.item.context.UseOnContext"
import { $RecipeType$$Type } from "net.minecraft.world.item.crafting.RecipeType"
import { $FoodProperties } from "net.minecraft.world.food.FoodProperties"
import { $Component, $Component$$Type } from "net.minecraft.network.chat.Component"
import { $InteractionResult } from "net.minecraft.world.InteractionResult"
import { $LevelReader$$Type } from "net.minecraft.world.level.LevelReader"
import { $Player$$Type } from "net.minecraft.world.entity.player.Player"
import { $Attribute } from "net.minecraft.world.entity.ai.attributes.Attribute"
import { $EnderMan$$Type } from "net.minecraft.world.entity.monster.EnderMan"
import { $Consumer$$Type } from "java.util.function.Consumer"
import { $Entity, $Entity$$Type } from "net.minecraft.world.entity.Entity"
import { $CompoundTag, $CompoundTag$$Type } from "net.minecraft.nbt.CompoundTag"
import { $BlockPos$$Type } from "net.minecraft.core.BlockPos"
import { $ItemEntity$$Type } from "net.minecraft.world.entity.item.ItemEntity"
import { $EquipmentSlot, $EquipmentSlot$$Type } from "net.minecraft.world.entity.EquipmentSlot"
import { $ItemStack, $ItemStack$$Type } from "net.minecraft.world.item.ItemStack"
import { $Level$$Type } from "net.minecraft.world.level.Level"
import { $Mob$$Type } from "net.minecraft.world.entity.Mob"

export interface $IForgeItem extends $IForgeItemMixin {
"canApplyAtEnchantingTable"(itemStack0: $ItemStack$$Type, enchantment1: $Enchantment$$Type): boolean
"canContinueUsing"(itemStack0: $ItemStack$$Type, itemStack1: $ItemStack$$Type): boolean
"canDisableShield"(itemStack0: $ItemStack$$Type, itemStack1: $ItemStack$$Type, livingEntity2: $LivingEntity$$Type, livingEntity3: $LivingEntity$$Type): boolean
"canElytraFly"(itemStack0: $ItemStack$$Type, livingEntity1: $LivingEntity$$Type): boolean
"canEquip"(itemStack0: $ItemStack$$Type, equipmentSlot1: $EquipmentSlot$$Type, entity2: $Entity$$Type): boolean
"canGrindstoneRepair"(itemStack0: $ItemStack$$Type): boolean
"canPerformAction"(itemStack0: $ItemStack$$Type, toolAction1: $ToolAction$$Type): boolean
"canWalkOnPowderedSnow"(itemStack0: $ItemStack$$Type, livingEntity1: $LivingEntity$$Type): boolean
"createEntity"(level0: $Level$$Type, entity1: $Entity$$Type, itemStack2: $ItemStack$$Type): $Entity
"damageItem"<T extends $LivingEntity>(itemStack0: $ItemStack$$Type, int1: integer, t2: T, consumer3: $Consumer$$Type<T>): integer
"doesSneakBypassUse"(itemStack0: $ItemStack$$Type, levelReader1: $LevelReader$$Type, blockPos2: $BlockPos$$Type, player3: $Player$$Type): boolean
"elytraFlightTick"(itemStack0: $ItemStack$$Type, livingEntity1: $LivingEntity$$Type, int2: integer): boolean
"getAllEnchantments"(itemStack0: $ItemStack$$Type): $Map<$Enchantment, integer>
"getArmorTexture"(itemStack0: $ItemStack$$Type, entity1: $Entity$$Type, equipmentSlot2: $EquipmentSlot$$Type, string3: string): string
"getAttributeModifiers"(equipmentSlot0: $EquipmentSlot$$Type, itemStack1: $ItemStack$$Type): $Multimap<$Attribute, $AttributeModifier>
"getBurnTime"(itemStack0: $ItemStack$$Type, recipeType1: $RecipeType$$Type<any>): integer
"getCraftingRemainingItem"(itemStack0: $ItemStack$$Type): $ItemStack
"getCreatorModId"(itemStack0: $ItemStack$$Type): string
"getDamage"(itemStack0: $ItemStack$$Type): integer
"getDefaultTooltipHideFlags"(itemStack0: $ItemStack$$Type): integer
"getEnchantmentLevel"(itemStack0: $ItemStack$$Type, enchantment1: $Enchantment$$Type): integer
"getEnchantmentValue"(itemStack0: $ItemStack$$Type): integer
"getEntityLifespan"(itemStack0: $ItemStack$$Type, level1: $Level$$Type): integer
"getEquipmentSlot"(itemStack0: $ItemStack$$Type): $EquipmentSlot
"getFoodProperties"(itemStack0: $ItemStack$$Type, livingEntity1: $LivingEntity$$Type): $FoodProperties
"getHighlightTip"(itemStack0: $ItemStack$$Type, component1: $Component$$Type): $Component
"getMaxDamage"(itemStack0: $ItemStack$$Type): integer
"getMaxStackSize"(itemStack0: $ItemStack$$Type): integer
"getShareTag"(itemStack0: $ItemStack$$Type): $CompoundTag
"getSweepHitBox"(itemStack0: $ItemStack$$Type, player1: $Player$$Type, entity2: $Entity$$Type): $AABB
"getXpRepairRatio"(itemStack0: $ItemStack$$Type): float
"hasCraftingRemainingItem"(itemStack0: $ItemStack$$Type): boolean
"hasCustomEntity"(itemStack0: $ItemStack$$Type): boolean
"initCapabilities"(itemStack0: $ItemStack$$Type, compoundTag1: $CompoundTag$$Type): $ICapabilityProvider
"isBookEnchantable"(itemStack0: $ItemStack$$Type, itemStack1: $ItemStack$$Type): boolean
"isCorrectToolForDrops"(itemStack0: $ItemStack$$Type, blockState1: $BlockState$$Type): boolean
"isDamageable"(itemStack0: $ItemStack$$Type): boolean
"isDamaged"(itemStack0: $ItemStack$$Type): boolean
"isEnderMask"(itemStack0: $ItemStack$$Type, player1: $Player$$Type, enderMan2: $EnderMan$$Type): boolean
"isNotReplaceableByPickAction"(itemStack0: $ItemStack$$Type, player1: $Player$$Type, int2: integer): boolean
"isPiglinCurrency"(itemStack0: $ItemStack$$Type): boolean
"isRepairable"(itemStack0: $ItemStack$$Type): boolean
"makesPiglinsNeutral"(itemStack0: $ItemStack$$Type, livingEntity1: $LivingEntity$$Type): boolean
/** @deprecated */
"onArmorTick"(itemStack0: $ItemStack$$Type, level1: $Level$$Type, player2: $Player$$Type): void
"onBlockStartBreak"(itemStack0: $ItemStack$$Type, blockPos1: $BlockPos$$Type, player2: $Player$$Type): boolean
"onDestroyed"(itemEntity0: $ItemEntity$$Type, damageSource1: $DamageSource$$Type): void
"onDroppedByPlayer"(itemStack0: $ItemStack$$Type, player1: $Player$$Type): boolean
"onEntityItemUpdate"(itemStack0: $ItemStack$$Type, itemEntity1: $ItemEntity$$Type): boolean
"onEntitySwing"(itemStack0: $ItemStack$$Type, livingEntity1: $LivingEntity$$Type): boolean
"onHorseArmorTick"(itemStack0: $ItemStack$$Type, level1: $Level$$Type, mob2: $Mob$$Type): void
"onInventoryTick"(itemStack0: $ItemStack$$Type, level1: $Level$$Type, player2: $Player$$Type, int3: integer, int4: integer): void
"onItemUseFirst"(itemStack0: $ItemStack$$Type, useOnContext1: $UseOnContext$$Type): $InteractionResult
"onLeftClickEntity"(itemStack0: $ItemStack$$Type, player1: $Player$$Type, entity2: $Entity$$Type): boolean
"onStopUsing"(itemStack0: $ItemStack$$Type, livingEntity1: $LivingEntity$$Type, int2: integer): void
"readShareTag"(itemStack0: $ItemStack$$Type, compoundTag1: $CompoundTag$$Type): void
"setDamage"(itemStack0: $ItemStack$$Type, int1: integer): void
"shouldCauseBlockBreakReset"(itemStack0: $ItemStack$$Type, itemStack1: $ItemStack$$Type): boolean
"shouldCauseReequipAnimation"(itemStack0: $ItemStack$$Type, itemStack1: $ItemStack$$Type, boolean2: boolean): boolean
}

export namespace $IForgeItem {
const probejs$$marker: never
}
export abstract class $IForgeItem$$Static implements $IForgeItem {
}
}

declare module "net.minecraftforge.common.IPlantable" {
import { $BlockGetter$$Type } from "net.minecraft.world.level.BlockGetter"
import { $PlantType } from "net.minecraftforge.common.PlantType"
import { $BlockPos$$Type } from "net.minecraft.core.BlockPos"
import { $BlockState } from "net.minecraft.world.level.block.state.BlockState"

export interface $IPlantable {
"getPlant"(blockGetter0: $BlockGetter$$Type, blockPos1: $BlockPos$$Type): $BlockState
"getPlantType"(blockGetter0: $BlockGetter$$Type, blockPos1: $BlockPos$$Type): $PlantType
}

export namespace $IPlantable {
const probejs$$marker: never
}
export abstract class $IPlantable$$Static implements $IPlantable {
}
}

declare module "net.minecraftforge.common.world.ModifiableStructureInfo" {
import { $Structure$$Type } from "net.minecraft.world.level.levelgen.structure.Structure"
import { $List$$Type } from "java.util.List"
import { $Holder$$Type } from "net.minecraft.core.Holder"
import { $HolderSet$$Type } from "net.minecraft.core.HolderSet"
import { $IStructureModifier } from "com.structureessentials.IStructureModifier"
import { $ModifiableStructureInfo$StructureInfo, $ModifiableStructureInfo$StructureInfo$$Type } from "net.minecraftforge.common.world.ModifiableStructureInfo$StructureInfo"
import { $StructureModifier$$Type } from "net.minecraftforge.common.world.StructureModifier"

export class $ModifiableStructureInfo implements $IStructureModifier {
constructor(structureInfo0: $ModifiableStructureInfo$StructureInfo$$Type)

public "applyStructureModifiers"(holder0: $Holder$$Type<$Structure$$Type>, list1: $List$$Type<$StructureModifier$$Type>): void
public "get"(): $ModifiableStructureInfo$StructureInfo
public "getModifiedStructureInfo"(): $ModifiableStructureInfo$StructureInfo
public "getOriginalStructureInfo"(): $ModifiableStructureInfo$StructureInfo
public "setStructureBiomes"(holderSet0: $HolderSet$$Type): void
get "modifiedStructureInfo"(): $ModifiableStructureInfo$StructureInfo
get "originalStructureInfo"(): $ModifiableStructureInfo$StructureInfo
set "structureBiomes"(value: $HolderSet$$Type)
}
}

declare module "net.minecraftforge.common.world.BiomeModifier" {
import { $BiomeModifier$Phase$$Type } from "net.minecraftforge.common.world.BiomeModifier$Phase"
import { $Codec } from "com.mojang.serialization.Codec"
import { $Holder, $Holder$$Type } from "net.minecraft.core.Holder"
import { $ModifiableBiomeInfo$BiomeInfo$Builder$$Type } from "net.minecraftforge.common.world.ModifiableBiomeInfo$BiomeInfo$Builder"
import { $HolderSet } from "net.minecraft.core.HolderSet"
import { $Biome$$Type } from "net.minecraft.world.level.biome.Biome"

export interface $BiomeModifier {
"codec"(): $Codec<$BiomeModifier>
"modify"(holder0: $Holder$$Type<$Biome$$Type>, phase1: $BiomeModifier$Phase$$Type, builder2: $ModifiableBiomeInfo$BiomeInfo$Builder$$Type): void
}

export namespace $BiomeModifier {
const DIRECT_CODEC: $Codec<$BiomeModifier>
const LIST_CODEC: $Codec<$HolderSet<$BiomeModifier>>
const REFERENCE_CODEC: $Codec<$Holder<$BiomeModifier>>
}
export abstract class $BiomeModifier$$Static implements $BiomeModifier {
static readonly "DIRECT_CODEC": $Codec<$BiomeModifier>
static readonly "LIST_CODEC": $Codec<$HolderSet<$BiomeModifier>>
static readonly "REFERENCE_CODEC": $Codec<$Holder<$BiomeModifier>>

}
}

declare module "net.minecraftforge.common.data.LanguageProvider" {
import { $Enchantment, $Enchantment$$Type } from "net.minecraft.world.item.enchantment.Enchantment"
import { $EntityType, $EntityType$$Type } from "net.minecraft.world.entity.EntityType"
import { $Item, $Item$$Type } from "net.minecraft.world.item.Item"
import { $CompletableFuture } from "java.util.concurrent.CompletableFuture"
import { $Supplier$$Type } from "java.util.function.Supplier"
import { $CachedOutput$$Type } from "net.minecraft.data.CachedOutput"
import { $JsonElement$$Type } from "com.google.gson.JsonElement"
import { $PackOutput$$Type } from "net.minecraft.data.PackOutput"
import { $Block, $Block$$Type } from "net.minecraft.world.level.block.Block"
import { $ItemStack, $ItemStack$$Type } from "net.minecraft.world.item.ItemStack"
import { $Path$$Type } from "java.nio.file.Path"
import { $DataProvider } from "net.minecraft.data.DataProvider"
import { $MobEffect, $MobEffect$$Type } from "net.minecraft.world.effect.MobEffect"

export class $LanguageProvider implements $DataProvider {
constructor(packOutput0: $PackOutput$$Type, string1: string, string2: string)

public "add"(block0: $Block$$Type, string1: string): void
public "add"(mobEffect0: $MobEffect$$Type, string1: string): void
public "add"(entityType0: $EntityType$$Type<any>, string1: string): void
public "add"(string0: string, string1: string): void
public "add"(itemStack0: $ItemStack$$Type, string1: string): void
public "add"(item0: $Item$$Type, string1: string): void
public "add"(enchantment0: $Enchantment$$Type, string1: string): void
public "addBlock"(supplier0: $Supplier$$Type<$Block>, string1: string): void
public "addEffect"(supplier0: $Supplier$$Type<$MobEffect>, string1: string): void
public "addEnchantment"(supplier0: $Supplier$$Type<$Enchantment>, string1: string): void
public "addEntityType"(supplier0: $Supplier$$Type<$EntityType<any>>, string1: string): void
public "addItem"(supplier0: $Supplier$$Type<$Item>, string1: string): void
public "addItemStack"(supplier0: $Supplier$$Type<$ItemStack>, string1: string): void
public "getName"(): string
public "run"(cachedOutput0: $CachedOutput$$Type): $CompletableFuture<any>
public static "saveStable"(cachedOutput0: $CachedOutput$$Type, jsonElement1: $JsonElement$$Type, path2: $Path$$Type): $CompletableFuture<any>
get "name"(): string
}
}

declare module "net.minecraftforge.common.extensions.IForgeMenuType" {
import { $AbstractContainerMenu, $AbstractContainerMenu$$Type } from "net.minecraft.world.inventory.AbstractContainerMenu"
import { $Inventory$$Type } from "net.minecraft.world.entity.player.Inventory"
import { $FriendlyByteBuf$$Type } from "net.minecraft.network.FriendlyByteBuf"
import { $MenuType } from "net.minecraft.world.inventory.MenuType"
import { $IContainerFactory$$Type } from "net.minecraftforge.network.IContainerFactory"

export interface $IForgeMenuType<T = any> {
"create"(int0: integer, inventory1: $Inventory$$Type, friendlyByteBuf2: $FriendlyByteBuf$$Type): T
}

export namespace $IForgeMenuType {
function create<T extends $AbstractContainerMenu>(iContainerFactory0: $IContainerFactory$$Type<T>): $MenuType<T>
}
export abstract class $IForgeMenuType$$Static<T = any> implements $IForgeMenuType<T> {
static "create"<T extends $AbstractContainerMenu>(iContainerFactory0: $IContainerFactory$$Type<T>): $MenuType<T>
}
}

declare module "net.minecraftforge.common.extensions.IForgeLevelSummary" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $IForgeLevelSummary {
"isLifecycleExperimental"(): boolean
get "lifecycleExperimental"(): boolean
}

export namespace $IForgeLevelSummary {
const probejs$$marker: never
}
export abstract class $IForgeLevelSummary$$Static implements $IForgeLevelSummary {
}
}

declare module "net.minecraftforge.common.ForgeConfigSpec$LongValue" {
import { $ForgeConfigSpec$ConfigValue } from "net.minecraftforge.common.ForgeConfigSpec$ConfigValue"

export class $ForgeConfigSpec$LongValue extends $ForgeConfigSpec$ConfigValue<long> {
}
}

declare module "net.minecraftforge.common.ForgeConfigSpec$EnumValue" {
import { $Enum } from "java.lang.Enum"
import { $ForgeConfigSpec$ConfigValue } from "net.minecraftforge.common.ForgeConfigSpec$ConfigValue"

export class $ForgeConfigSpec$EnumValue<T extends $Enum<T> = $Enum<T>> extends $ForgeConfigSpec$ConfigValue<T> {
}
}

declare module "net.minecraftforge.common.world.ClimateSettingsBuilder" {
import { $Biome$ClimateSettings, $Biome$ClimateSettings$$Type } from "net.minecraft.world.level.biome.Biome$ClimateSettings"
import { $Biome$TemperatureModifier, $Biome$TemperatureModifier$$Type } from "net.minecraft.world.level.biome.Biome$TemperatureModifier"

export class $ClimateSettingsBuilder {
public "build"(): $Biome$ClimateSettings
public static "copyOf"(climateSettings0: $Biome$ClimateSettings$$Type): $ClimateSettingsBuilder
public static "create"(boolean0: boolean, float1: float, temperatureModifier2: $Biome$TemperatureModifier$$Type, float3: float): $ClimateSettingsBuilder
public "getDownfall"(): float
public "getTemperature"(): float
public "getTemperatureModifier"(): $Biome$TemperatureModifier
public "hasPrecipitation"(): boolean
public "setDownfall"(float0: float): void
public "setHasPrecipitation"(boolean0: boolean): void
public "setTemperature"(float0: float): void
public "setTemperatureModifier"(temperatureModifier0: $Biome$TemperatureModifier$$Type): void
get "downfall"(): float
get "temperature"(): float
get "temperatureModifier"(): $Biome$TemperatureModifier
set "downfall"(value: float)
set "temperature"(value: float)
set "temperatureModifier"(value: $Biome$TemperatureModifier$$Type)
}
}

declare module "net.minecraftforge.common.extensions.IForgeBlockState" {
import { $LivingEntity$$Type } from "net.minecraft.world.entity.LivingEntity"
import { $Direction, $Direction$$Type } from "net.minecraft.core.Direction"
import { $EntityType$$Type } from "net.minecraft.world.entity.EntityType"
import { $BlockState, $BlockState$$Type } from "net.minecraft.world.level.block.state.BlockState"
import { $SpawnPlacements$Type$$Type } from "net.minecraft.world.entity.SpawnPlacements$Type"
import { $ServerLevel$$Type } from "net.minecraft.server.level.ServerLevel"
import { $BlockGetter$$Type } from "net.minecraft.world.level.BlockGetter"
import { $Rotation$$Type } from "net.minecraft.world.level.block.Rotation"
import { $ToolAction$$Type } from "net.minecraftforge.common.ToolAction"
import { $BiConsumer$$Type } from "java.util.function.BiConsumer"
import { $UseOnContext$$Type } from "net.minecraft.world.item.context.UseOnContext"
import { $BlockAndTintGetter$$Type } from "net.minecraft.world.level.BlockAndTintGetter"
import { $BlockPathTypes, $BlockPathTypes$$Type } from "net.minecraft.world.level.pathfinder.BlockPathTypes"
import { $RandomSource$$Type } from "net.minecraft.util.RandomSource"
import { $LevelReader$$Type } from "net.minecraft.world.level.LevelReader"
import { $TreeConfiguration$$Type } from "net.minecraft.world.level.levelgen.feature.configurations.TreeConfiguration"
import { $Explosion$$Type } from "net.minecraft.world.level.Explosion"
import { $SoundType } from "net.minecraft.world.level.block.SoundType"
import { $Player$$Type } from "net.minecraft.world.entity.player.Player"
import { $IPlantable$$Type } from "net.minecraftforge.common.IPlantable"
import { $HitResult$$Type } from "net.minecraft.world.phys.HitResult"
import { $Entity$$Type } from "net.minecraft.world.entity.Entity"
import { $BlockPos$$Type } from "net.minecraft.core.BlockPos"
import { $Vec3, $Vec3$$Type } from "net.minecraft.world.phys.Vec3"
import { $SignalGetter$$Type } from "net.minecraft.world.level.SignalGetter"
import { $FluidState$$Type } from "net.minecraft.world.level.material.FluidState"
import { $Optional } from "java.util.Optional"
import { $LevelAccessor$$Type } from "net.minecraft.world.level.LevelAccessor"
import { $ItemStack } from "net.minecraft.world.item.ItemStack"
import { $Level$$Type } from "net.minecraft.world.level.Level"
import { $Mob$$Type } from "net.minecraft.world.entity.Mob"

export interface $IForgeBlockState {
"addLandingEffects"(serverLevel0: $ServerLevel$$Type, blockPos1: $BlockPos$$Type, blockState2: $BlockState$$Type, livingEntity3: $LivingEntity$$Type, int4: integer): boolean
"addRunningEffects"(level0: $Level$$Type, blockPos1: $BlockPos$$Type, entity2: $Entity$$Type): boolean
"canBeHydrated"(blockGetter0: $BlockGetter$$Type, blockPos1: $BlockPos$$Type, fluidState2: $FluidState$$Type, blockPos3: $BlockPos$$Type): boolean
"canDropFromExplosion"(blockGetter0: $BlockGetter$$Type, blockPos1: $BlockPos$$Type, explosion2: $Explosion$$Type): boolean
"canEntityDestroy"(blockGetter0: $BlockGetter$$Type, blockPos1: $BlockPos$$Type, entity2: $Entity$$Type): boolean
"canHarvestBlock"(blockGetter0: $BlockGetter$$Type, blockPos1: $BlockPos$$Type, player2: $Player$$Type): boolean
"canRedstoneConnectTo"(blockGetter0: $BlockGetter$$Type, blockPos1: $BlockPos$$Type, direction2: $Direction$$Type): boolean
"canStickTo"(blockState0: $BlockState$$Type): boolean
"canSustainPlant"(blockGetter0: $BlockGetter$$Type, blockPos1: $BlockPos$$Type, direction2: $Direction$$Type, iPlantable3: $IPlantable$$Type): boolean
"collisionExtendsVertically"(blockGetter0: $BlockGetter$$Type, blockPos1: $BlockPos$$Type, entity2: $Entity$$Type): boolean
"getAdjacentBlockPathType"(blockGetter0: $BlockGetter$$Type, blockPos1: $BlockPos$$Type, mob2: $Mob$$Type, blockPathTypes3: $BlockPathTypes$$Type): $BlockPathTypes
"getAppearance"(blockAndTintGetter0: $BlockAndTintGetter$$Type, blockPos1: $BlockPos$$Type, direction2: $Direction$$Type, blockState3: $BlockState$$Type, blockPos4: $BlockPos$$Type): $BlockState
"getBeaconColorMultiplier"(levelReader0: $LevelReader$$Type, blockPos1: $BlockPos$$Type, blockPos2: $BlockPos$$Type): float[]
"getBedDirection"(levelReader0: $LevelReader$$Type, blockPos1: $BlockPos$$Type): $Direction
"getBlockPathType"(blockGetter0: $BlockGetter$$Type, blockPos1: $BlockPos$$Type, mob2: $Mob$$Type): $BlockPathTypes
"getCloneItemStack"(hitResult0: $HitResult$$Type, blockGetter1: $BlockGetter$$Type, blockPos2: $BlockPos$$Type, player3: $Player$$Type): $ItemStack
"getEnchantPowerBonus"(levelReader0: $LevelReader$$Type, blockPos1: $BlockPos$$Type): float
"getExpDrop"(levelReader0: $LevelReader$$Type, randomSource1: $RandomSource$$Type, blockPos2: $BlockPos$$Type, int3: integer, int4: integer): integer
"getExplosionResistance"(blockGetter0: $BlockGetter$$Type, blockPos1: $BlockPos$$Type, explosion2: $Explosion$$Type): float
"getFireSpreadSpeed"(blockGetter0: $BlockGetter$$Type, blockPos1: $BlockPos$$Type, direction2: $Direction$$Type): integer
"getFlammability"(blockGetter0: $BlockGetter$$Type, blockPos1: $BlockPos$$Type, direction2: $Direction$$Type): integer
"getFriction"(levelReader0: $LevelReader$$Type, blockPos1: $BlockPos$$Type, entity2: $Entity$$Type): float
"getLightEmission"(blockGetter0: $BlockGetter$$Type, blockPos1: $BlockPos$$Type): integer
"getRespawnPosition"(entityType0: $EntityType$$Type<any>, levelReader1: $LevelReader$$Type, blockPos2: $BlockPos$$Type, float3: float, livingEntity4: $LivingEntity$$Type): $Optional<$Vec3>
"getSoundType"(levelReader0: $LevelReader$$Type, blockPos1: $BlockPos$$Type, entity2: $Entity$$Type): $SoundType
"getStateAtViewpoint"(blockGetter0: $BlockGetter$$Type, blockPos1: $BlockPos$$Type, vec32: $Vec3$$Type): $BlockState
"getToolModifiedState"(useOnContext0: $UseOnContext$$Type, toolAction1: $ToolAction$$Type, boolean2: boolean): $BlockState
"getWeakChanges"(levelReader0: $LevelReader$$Type, blockPos1: $BlockPos$$Type): boolean
"hidesNeighborFace"(blockGetter0: $BlockGetter$$Type, blockPos1: $BlockPos$$Type, blockState2: $BlockState$$Type, direction3: $Direction$$Type): boolean
"isBed"(blockGetter0: $BlockGetter$$Type, blockPos1: $BlockPos$$Type, livingEntity2: $LivingEntity$$Type): boolean
"isBurning"(blockGetter0: $BlockGetter$$Type, blockPos1: $BlockPos$$Type): boolean
"isConduitFrame"(levelReader0: $LevelReader$$Type, blockPos1: $BlockPos$$Type, blockPos2: $BlockPos$$Type): boolean
"isFertile"(blockGetter0: $BlockGetter$$Type, blockPos1: $BlockPos$$Type): boolean
"isFireSource"(levelReader0: $LevelReader$$Type, blockPos1: $BlockPos$$Type, direction2: $Direction$$Type): boolean
"isFlammable"(blockGetter0: $BlockGetter$$Type, blockPos1: $BlockPos$$Type, direction2: $Direction$$Type): boolean
"isLadder"(levelReader0: $LevelReader$$Type, blockPos1: $BlockPos$$Type, livingEntity2: $LivingEntity$$Type): boolean
"isPortalFrame"(blockGetter0: $BlockGetter$$Type, blockPos1: $BlockPos$$Type): boolean
"isScaffolding"(livingEntity0: $LivingEntity$$Type): boolean
"isSlimeBlock"(): boolean
"isStickyBlock"(): boolean
"isValidSpawn"(levelReader0: $LevelReader$$Type, blockPos1: $BlockPos$$Type, type2: $SpawnPlacements$Type$$Type, entityType3: $EntityType$$Type<any>): boolean
"onBlockExploded"(level0: $Level$$Type, blockPos1: $BlockPos$$Type, explosion2: $Explosion$$Type): void
"onBlockStateChange"(levelReader0: $LevelReader$$Type, blockPos1: $BlockPos$$Type, blockState2: $BlockState$$Type): void
"onCaughtFire"(level0: $Level$$Type, blockPos1: $BlockPos$$Type, direction2: $Direction$$Type, livingEntity3: $LivingEntity$$Type): void
"onDestroyedByPlayer"(level0: $Level$$Type, blockPos1: $BlockPos$$Type, player2: $Player$$Type, boolean3: boolean, fluidState4: $FluidState$$Type): boolean
"onNeighborChange"(levelReader0: $LevelReader$$Type, blockPos1: $BlockPos$$Type, blockPos2: $BlockPos$$Type): void
"onTreeGrow"(levelReader0: $LevelReader$$Type, biConsumer1: $BiConsumer$$Type<$BlockPos$$Type, $BlockState$$Type>, randomSource2: $RandomSource$$Type, blockPos3: $BlockPos$$Type, treeConfiguration4: $TreeConfiguration$$Type): boolean
"rotate"(levelAccessor0: $LevelAccessor$$Type, blockPos1: $BlockPos$$Type, rotation2: $Rotation$$Type): $BlockState
"setBedOccupied"(level0: $Level$$Type, blockPos1: $BlockPos$$Type, livingEntity2: $LivingEntity$$Type, boolean3: boolean): void
"shouldCheckWeakPower"(signalGetter0: $SignalGetter$$Type, blockPos1: $BlockPos$$Type, direction2: $Direction$$Type): boolean
"shouldDisplayFluidOverlay"(blockAndTintGetter0: $BlockAndTintGetter$$Type, blockPos1: $BlockPos$$Type, fluidState2: $FluidState$$Type): boolean
"supportsExternalFaceHiding"(): boolean
get "slimeBlock"(): boolean
get "stickyBlock"(): boolean
}

export namespace $IForgeBlockState {
const probejs$$marker: never
}
export abstract class $IForgeBlockState$$Static implements $IForgeBlockState {
}
}

declare module "net.minecraftforge.common.world.ModifiableStructureInfo$StructureInfo" {
import { $Structure$StructureSettings, $Structure$StructureSettings$$Type } from "net.minecraft.world.level.levelgen.structure.Structure$StructureSettings"
import { $Record } from "java.lang.Record"

export class $ModifiableStructureInfo$StructureInfo extends $Record {
constructor(structureSettings: $Structure$StructureSettings$$Type)

public "structureSettings"(): $Structure$StructureSettings
}
}

declare module "net.minecraftforge.common.extensions.IForgeLivingEntity" {
import { $LivingEntity } from "net.minecraft.world.entity.LivingEntity"
import { $Direction$$Type } from "net.minecraft.core.Direction"
import { $BlockState$$Type } from "net.minecraft.world.level.block.state.BlockState"
import { $FluidType, $FluidType$$Type } from "net.minecraftforge.fluids.FluidType"
import { $LazyOptional } from "net.minecraftforge.common.util.LazyOptional"
import { $BiPredicate$$Type } from "java.util.function.BiPredicate"
import { $Pose$$Type } from "net.minecraft.world.entity.Pose"
import { $MobCategory } from "net.minecraft.world.entity.MobCategory"
import { $SoundAction$$Type } from "net.minecraftforge.common.SoundAction"
import { $IForgeEntity } from "net.minecraftforge.common.extensions.IForgeEntity"
import { $Collection, $Collection$$Type } from "java.util.Collection"
import { $PartEntity } from "net.minecraftforge.entity.PartEntity"
import { $Capability$$Type } from "net.minecraftforge.common.capabilities.Capability"
import { $Player$$Type } from "net.minecraft.world.entity.player.Player"
import { $HitResult$$Type } from "net.minecraft.world.phys.HitResult"
import { $Entity$$Type } from "net.minecraft.world.entity.Entity"
import { $CompoundTag, $CompoundTag$$Type } from "net.minecraft.nbt.CompoundTag"
import { $BlockPos$$Type } from "net.minecraft.core.BlockPos"
import { $ItemEntity, $ItemEntity$$Type } from "net.minecraft.world.entity.item.ItemEntity"
import { $SoundEvent } from "net.minecraft.sounds.SoundEvent"
import { $Vec3$$Type } from "net.minecraft.world.phys.Vec3"
import { $Boat$$Type } from "net.minecraft.world.entity.vehicle.Boat"
import { $FluidState$$Type } from "net.minecraft.world.level.material.FluidState"
import { $EntityDimensions$$Type } from "net.minecraft.world.entity.EntityDimensions"
import { $ItemStack } from "net.minecraft.world.item.ItemStack"

export interface $IForgeLivingEntity extends $IForgeEntity {
"canBeRiddenUnderFluidType"(fluidType0: $FluidType$$Type, entity1: $Entity$$Type): boolean
"canDrownInFluidType"(fluidType0: $FluidType$$Type): boolean
"canFluidExtinguish"(fluidType0: $FluidType$$Type): boolean
"canHydrateInFluidType"(fluidType0: $FluidType$$Type): boolean
"canRiderInteract"(): boolean
"canStartSwimming"(): boolean
"canSwimInFluidType"(fluidType0: $FluidType$$Type): boolean
"canTrample"(blockState0: $BlockState$$Type, blockPos1: $BlockPos$$Type, float2: float): boolean
"canUpdate"(boolean0: boolean): void
"canUpdate"(): boolean
"captureDrops"(collection0: $Collection$$Type<$ItemEntity$$Type>): $Collection<$ItemEntity>
"captureDrops"(): $Collection<$ItemEntity>
"deserializeNBT"(compoundTag0: $CompoundTag$$Type): void
"getCapability"<T>(capability0: $Capability$$Type<T>, direction1: $Direction$$Type): $LazyOptional<T>
"getCapability"<T>(capability0: $Capability$$Type<T>): $LazyOptional<T>
"getClassification"(boolean0: boolean): $MobCategory
/** @deprecated */
"getEyeHeightForge"(pose0: $Pose$$Type, entityDimensions1: $EntityDimensions$$Type): float
"getEyeInFluidType"(): $FluidType
"getFluidFallDistanceModifier"(fluidType0: $FluidType$$Type): float
"getFluidMotionScale"(fluidType0: $FluidType$$Type): double
"getFluidTypeHeight"(fluidType0: $FluidType$$Type): double
"getMaxHeightFluidType"(): $FluidType
"getParts"(): $PartEntity<any>[]
"getPersistentData"(): $CompoundTag
"getPickedResult"(hitResult0: $HitResult$$Type): $ItemStack
"getSoundFromFluidType"(fluidType0: $FluidType$$Type, soundAction1: $SoundAction$$Type): $SoundEvent
"getStepHeight"(): float
"hasCustomOutlineRendering"(player0: $Player$$Type): boolean
"isAddedToWorld"(): boolean
"isEyeInFluidType"(fluidType0: $FluidType$$Type): boolean
"isInFluidType"(fluidState0: $FluidState$$Type): boolean
"isInFluidType"(fluidType0: $FluidType$$Type): boolean
"isInFluidType"(biPredicate0: $BiPredicate$$Type<$FluidType$$Type, double>): boolean
"isInFluidType"(biPredicate0: $BiPredicate$$Type<$FluidType$$Type, double>, boolean1: boolean): boolean
"isInFluidType"(): boolean
"isMultipartEntity"(): boolean
"isPushedByFluid"(fluidType0: $FluidType$$Type): boolean
"jumpInFluid"(fluidType0: $FluidType$$Type): void
"moveInFluid"(fluidState0: $FluidState$$Type, vec31: $Vec3$$Type, double2: double): boolean
"onAddedToWorld"(): void
"onRemovedFromWorld"(): void
"revive"(): void
"self"(): $LivingEntity
"serializeNBT"(): $CompoundTag
"shouldRiderSit"(): boolean
"shouldUpdateFluidWhileBoating"(fluidState0: $FluidState$$Type, boat1: $Boat$$Type): boolean
"sinkInFluid"(fluidType0: $FluidType$$Type): void
get "eyeInFluidType"(): $FluidType
get "maxHeightFluidType"(): $FluidType
get "parts"(): $PartEntity<any>[]
get "persistentData"(): $CompoundTag
get "stepHeight"(): float
get "addedToWorld"(): boolean
get "inFluidType"(): boolean
get "multipartEntity"(): boolean
}

export namespace $IForgeLivingEntity {
const probejs$$marker: never
}
export abstract class $IForgeLivingEntity$$Static implements $IForgeLivingEntity {
}
}

declare module "net.minecraftforge.common.world.StructureSettingsBuilder$StructureSpawnOverrideBuilder" {
import { $List } from "java.util.List"
import { $MobSpawnSettings$SpawnerData, $MobSpawnSettings$SpawnerData$$Type } from "net.minecraft.world.level.biome.MobSpawnSettings$SpawnerData"
import { $StructureSpawnOverride$BoundingBoxType, $StructureSpawnOverride$BoundingBoxType$$Type } from "net.minecraft.world.level.levelgen.structure.StructureSpawnOverride$BoundingBoxType"
import { $StructureSpawnOverride, $StructureSpawnOverride$$Type } from "net.minecraft.world.level.levelgen.structure.StructureSpawnOverride"

export class $StructureSettingsBuilder$StructureSpawnOverrideBuilder {
public "addSpawn"(spawnerData0: $MobSpawnSettings$SpawnerData$$Type): void
public "build"(): $StructureSpawnOverride
public static "copyOf"(structureSpawnOverride0: $StructureSpawnOverride$$Type): $StructureSettingsBuilder$StructureSpawnOverrideBuilder
public "getBoundingBox"(): $StructureSpawnOverride$BoundingBoxType
public "getSpawns"(): $List<$MobSpawnSettings$SpawnerData>
public "removeSpawn"(spawnerData0: $MobSpawnSettings$SpawnerData$$Type): void
public "setBoundingBox"(boundingBoxType0: $StructureSpawnOverride$BoundingBoxType$$Type): void
get "boundingBox"(): $StructureSpawnOverride$BoundingBoxType
get "spawns"(): $List<$MobSpawnSettings$SpawnerData>
set "boundingBox"(value: $StructureSpawnOverride$BoundingBoxType$$Type)
}
}

declare module "net.minecraftforge.common.extensions.IForgeRawTagBuilder" {
import { $ResourceLocation$$Type } from "net.minecraft.resources.ResourceLocation"
import { $JsonObject$$Type } from "com.google.gson.JsonObject"
import { $TagBuilder } from "net.minecraft.tags.TagBuilder"
import { $TagEntry$$Type } from "net.minecraft.tags.TagEntry"

export interface $IForgeRawTagBuilder {
"getRawBuilder"(): $TagBuilder
"remove"(tagEntry0: $TagEntry$$Type, string1: string): $TagBuilder
"removeElement"(resourceLocation0: $ResourceLocation$$Type, string1: string): $TagBuilder
"removeTag"(resourceLocation0: $ResourceLocation$$Type, string1: string): $TagBuilder
/** @deprecated */
"serializeTagAdditions"(jsonObject0: $JsonObject$$Type): void
get "rawBuilder"(): $TagBuilder
}

export namespace $IForgeRawTagBuilder {
const probejs$$marker: never
}
export abstract class $IForgeRawTagBuilder$$Static implements $IForgeRawTagBuilder {
}
}

declare module "net.minecraftforge.common.world.BiomeSpecialEffectsBuilder" {
import { $AmbientMoodSettings } from "net.minecraft.world.level.biome.AmbientMoodSettings"
import { $Music } from "net.minecraft.sounds.Music"
import { $BiomeSpecialEffects$Builder } from "net.minecraft.world.level.biome.BiomeSpecialEffects$Builder"
import { $Holder } from "net.minecraft.core.Holder"
import { $AmbientParticleSettings } from "net.minecraft.world.level.biome.AmbientParticleSettings"
import { $BiomeSpecialEffects$GrassColorModifier } from "net.minecraft.world.level.biome.BiomeSpecialEffects$GrassColorModifier"
import { $SoundEvent } from "net.minecraft.sounds.SoundEvent"
import { $BiomeSpecialEffects$$Type } from "net.minecraft.world.level.biome.BiomeSpecialEffects"
import { $Optional } from "java.util.Optional"
import { $AmbientAdditionsSettings } from "net.minecraft.world.level.biome.AmbientAdditionsSettings"

export class $BiomeSpecialEffectsBuilder extends $BiomeSpecialEffects$Builder {
public static "copyOf"(biomeSpecialEffects0: $BiomeSpecialEffects$$Type): $BiomeSpecialEffectsBuilder
public static "create"(int0: integer, int1: integer, int2: integer, int3: integer): $BiomeSpecialEffectsBuilder
public "getAmbientAdditionsSound"(): $Optional<$AmbientAdditionsSettings>
public "getAmbientLoopSound"(): $Optional<$Holder<$SoundEvent>>
public "getAmbientMoodSound"(): $Optional<$AmbientMoodSettings>
public "getAmbientParticle"(): $Optional<$AmbientParticleSettings>
public "getBackgroundMusic"(): $Optional<$Music>
public "getFogColor"(): integer
public "getFoliageColorOverride"(): $Optional<integer>
public "getGrassColorModifier"(): $BiomeSpecialEffects$GrassColorModifier
public "getGrassColorOverride"(): $Optional<integer>
public "getSkyColor"(): integer
public "getWaterFogColor"(): integer
public "waterColor"(): integer
get "ambientAdditionsSound"(): $Optional<$AmbientAdditionsSettings>
get "ambientLoopSound"(): $Optional<$Holder<$SoundEvent>>
get "ambientMoodSound"(): $Optional<$AmbientMoodSettings>
get "ambientParticle"(): $Optional<$AmbientParticleSettings>
get "backgroundMusic"(): $Optional<$Music>
get "fogColor"(): integer
get "foliageColorOverride"(): $Optional<integer>
get "grassColorModifier"(): $BiomeSpecialEffects$GrassColorModifier
get "grassColorOverride"(): $Optional<integer>
get "skyColor"(): integer
get "waterFogColor"(): integer
}
}

declare module "net.minecraftforge.common.capabilities.Capability" {
import { $Consumer$$Type } from "java.util.function.Consumer"
import { $LazyOptional, $LazyOptional$$Type } from "net.minecraftforge.common.util.LazyOptional"

export class $Capability<T = any> {
public "addListener"(consumer0: $Consumer$$Type<$Capability$$Type<T>>): $Capability<T>
public "getName"(): string
public "isRegistered"(): boolean
public "orEmpty"<R>(capability0: $Capability$$Type<R>, lazyOptional1: $LazyOptional$$Type<T>): $LazyOptional<R>
get "name"(): string
get "registered"(): boolean
}
}

declare module "net.minecraftforge.common.extensions.IForgeAdvancementBuilder" {
import { $Consumer$$Type } from "java.util.function.Consumer"
import { $ResourceLocation$$Type } from "net.minecraft.resources.ResourceLocation"
import { $Advancement, $Advancement$$Type } from "net.minecraft.advancements.Advancement"
import { $ExistingFileHelper$$Type } from "net.minecraftforge.common.data.ExistingFileHelper"

export interface $IForgeAdvancementBuilder {
"save"(consumer0: $Consumer$$Type<$Advancement$$Type>, resourceLocation1: $ResourceLocation$$Type, existingFileHelper2: $ExistingFileHelper$$Type): $Advancement
}

export namespace $IForgeAdvancementBuilder {
const probejs$$marker: never
}
export abstract class $IForgeAdvancementBuilder$$Static implements $IForgeAdvancementBuilder {
}
}

declare module "net.minecraftforge.common.world.BiomeModifier$Phase" {
import { $Enum } from "java.lang.Enum"

export class $BiomeModifier$Phase extends $Enum<$BiomeModifier$Phase> {
static readonly "ADD": $BiomeModifier$Phase
static readonly "AFTER_EVERYTHING": $BiomeModifier$Phase
static readonly "BEFORE_EVERYTHING": $BiomeModifier$Phase
static readonly "MODIFY": $BiomeModifier$Phase
static readonly "REMOVE": $BiomeModifier$Phase

public static "valueOf"(string0: string): $BiomeModifier$Phase
public static "values"(): $BiomeModifier$Phase[]
}
}

declare module "net.minecraftforge.common.util.NonNullSupplier" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $NonNullSupplier<T = any> {
"get"(): T
}

export namespace $NonNullSupplier {
const probejs$$marker: never
}
export abstract class $NonNullSupplier$$Static<T = any> implements $NonNullSupplier<T> {
}
}

declare module "net.minecraftforge.common.extensions.IForgeFluidState" {
import { $LivingEntity$$Type } from "net.minecraft.world.entity.LivingEntity"
import { $BlockPathTypes, $BlockPathTypes$$Type } from "net.minecraft.world.level.pathfinder.BlockPathTypes"
import { $BlockState$$Type } from "net.minecraft.world.level.block.state.BlockState"
import { $FluidType } from "net.minecraftforge.fluids.FluidType"
import { $Explosion$$Type } from "net.minecraft.world.level.Explosion"
import { $BlockGetter$$Type } from "net.minecraft.world.level.BlockGetter"
import { $Entity$$Type } from "net.minecraft.world.entity.Entity"
import { $BlockPos$$Type } from "net.minecraft.core.BlockPos"
import { $Vec3$$Type } from "net.minecraft.world.phys.Vec3"
import { $Boat$$Type } from "net.minecraft.world.entity.vehicle.Boat"
import { $Level$$Type } from "net.minecraft.world.level.Level"
import { $Mob$$Type } from "net.minecraft.world.entity.Mob"

export interface $IForgeFluidState {
"canConvertToSource"(level0: $Level$$Type, blockPos1: $BlockPos$$Type): boolean
"canExtinguish"(blockGetter0: $BlockGetter$$Type, blockPos1: $BlockPos$$Type): boolean
"canHydrate"(blockGetter0: $BlockGetter$$Type, blockPos1: $BlockPos$$Type, blockState2: $BlockState$$Type, blockPos3: $BlockPos$$Type): boolean
"getAdjacentBlockPathType"(blockGetter0: $BlockGetter$$Type, blockPos1: $BlockPos$$Type, mob2: $Mob$$Type, blockPathTypes3: $BlockPathTypes$$Type): $BlockPathTypes
"getBlockPathType"(blockGetter0: $BlockGetter$$Type, blockPos1: $BlockPos$$Type, mob2: $Mob$$Type, boolean3: boolean): $BlockPathTypes
"getExplosionResistance"(blockGetter0: $BlockGetter$$Type, blockPos1: $BlockPos$$Type, explosion2: $Explosion$$Type): float
"getFluidType"(): $FluidType
"move"(livingEntity0: $LivingEntity$$Type, vec31: $Vec3$$Type, double2: double): boolean
"shouldUpdateWhileBoating"(boat0: $Boat$$Type, entity1: $Entity$$Type): boolean
"supportsBoating"(boat0: $Boat$$Type): boolean
get "fluidType"(): $FluidType
}

export namespace $IForgeFluidState {
const probejs$$marker: never
}
export abstract class $IForgeFluidState$$Static implements $IForgeFluidState {
}
}

declare module "net.minecraftforge.common.capabilities.RegisterCapabilitiesEvent" {
import { $IModBusEvent } from "net.minecraftforge.fml.event.IModBusEvent"
import { $Event } from "net.minecraftforge.eventbus.api.Event"
import { $Class$$Type } from "java.lang.Class"

export class $RegisterCapabilitiesEvent extends $Event implements $IModBusEvent {
constructor()

public "register"<T>(class0: $Class$$Type<T>): void
}
}

declare module "net.minecraftforge.common.extensions.IForgeBlockEntity" {
import { $ICapabilitySerializable } from "net.minecraftforge.common.capabilities.ICapabilitySerializable"
import { $AABB } from "net.minecraft.world.phys.AABB"
import { $CompoundTag, $CompoundTag$$Type } from "net.minecraft.nbt.CompoundTag"
import { $Direction$$Type } from "net.minecraft.core.Direction"
import { $Connection$$Type } from "net.minecraft.network.Connection"
import { $ClientboundBlockEntityDataPacket$$Type } from "net.minecraft.network.protocol.game.ClientboundBlockEntityDataPacket"
import { $ModelData } from "net.minecraftforge.client.model.data.ModelData"
import { $Capability$$Type } from "net.minecraftforge.common.capabilities.Capability"
import { $LazyOptional } from "net.minecraftforge.common.util.LazyOptional"
import { $Player$$Type } from "net.minecraft.world.entity.player.Player"

export interface $IForgeBlockEntity extends $ICapabilitySerializable<$CompoundTag> {
"deserializeNBT"(compoundTag0: $CompoundTag$$Type): void
"getCapability"<T>(capability0: $Capability$$Type<T>, direction1: $Direction$$Type): $LazyOptional<T>
"getCapability"<T>(capability0: $Capability$$Type<T>): $LazyOptional<T>
"getModelData"(): $ModelData
"getPersistentData"(): $CompoundTag
"getRenderBoundingBox"(): $AABB
"handleUpdateTag"(compoundTag0: $CompoundTag$$Type): void
"hasCustomOutlineRendering"(player0: $Player$$Type): boolean
"onChunkUnloaded"(): void
"onDataPacket"(connection0: $Connection$$Type, clientboundBlockEntityDataPacket1: $ClientboundBlockEntityDataPacket$$Type): void
"onLoad"(): void
"requestModelDataUpdate"(): void
get "modelData"(): $ModelData
get "persistentData"(): $CompoundTag
get "renderBoundingBox"(): $AABB
}

export namespace $IForgeBlockEntity {
const INFINITE_EXTENT_AABB: $AABB
}
export abstract class $IForgeBlockEntity$$Static implements $IForgeBlockEntity {
static readonly "INFINITE_EXTENT_AABB": $AABB

}
}

declare module "net.minecraftforge.common.crafting.IIngredientSerializer" {
import { $JsonObject$$Type } from "com.google.gson.JsonObject"
import { $FriendlyByteBuf$$Type } from "net.minecraft.network.FriendlyByteBuf"
import { $Ingredient, $Ingredient$$Type } from "net.minecraft.world.item.crafting.Ingredient"

export interface $IIngredientSerializer<T extends $Ingredient = $Ingredient> {
"parse"(friendlyByteBuf0: $FriendlyByteBuf$$Type): T
"parse"(jsonObject0: $JsonObject$$Type): T
"write"(friendlyByteBuf0: $FriendlyByteBuf$$Type, t1: T): void
}

export namespace $IIngredientSerializer {
const probejs$$marker: never
}
export abstract class $IIngredientSerializer$$Static<T extends $Ingredient = $Ingredient> implements $IIngredientSerializer<T> {
}
}

declare module "net.minecraftforge.common.IMinecartCollisionHandler" {
import { $AABB } from "net.minecraft.world.phys.AABB"
import { $Entity$$Type } from "net.minecraft.world.entity.Entity"
import { $AbstractMinecart$$Type } from "net.minecraft.world.entity.vehicle.AbstractMinecart"

export interface $IMinecartCollisionHandler {
"getBoundingBox"(abstractMinecart0: $AbstractMinecart$$Type): $AABB
"getCollisionBox"(abstractMinecart0: $AbstractMinecart$$Type, entity1: $Entity$$Type): $AABB
"getMinecartCollisionBox"(abstractMinecart0: $AbstractMinecart$$Type): $AABB
"onEntityCollision"(abstractMinecart0: $AbstractMinecart$$Type, entity1: $Entity$$Type): void
}

export namespace $IMinecartCollisionHandler {
const probejs$$marker: never
}
export abstract class $IMinecartCollisionHandler$$Static implements $IMinecartCollisionHandler {
}
}

declare module "net.minecraftforge.common.extensions.IForgeBucketPickup" {
import { $SoundEvent } from "net.minecraft.sounds.SoundEvent"
import { $Optional } from "java.util.Optional"
import { $BlockState$$Type } from "net.minecraft.world.level.block.state.BlockState"

export interface $IForgeBucketPickup {
"getPickupSound"(blockState0: $BlockState$$Type): $Optional<$SoundEvent>
}

export namespace $IForgeBucketPickup {
const probejs$$marker: never
}
export abstract class $IForgeBucketPickup$$Static implements $IForgeBucketPickup {
}
}

declare module "net.minecraftforge.common.world.ModifiableBiomeInfo" {
import { $List$$Type } from "java.util.List"
import { $Holder$$Type } from "net.minecraft.core.Holder"
import { $BiomeModifier$$Type } from "net.minecraftforge.common.world.BiomeModifier"
import { $Biome$$Type } from "net.minecraft.world.level.biome.Biome"
import { $ModifiableBiomeInfo$BiomeInfo, $ModifiableBiomeInfo$BiomeInfo$$Type } from "net.minecraftforge.common.world.ModifiableBiomeInfo$BiomeInfo"

export class $ModifiableBiomeInfo {
constructor(biomeInfo0: $ModifiableBiomeInfo$BiomeInfo$$Type)

public "applyBiomeModifiers"(holder0: $Holder$$Type<$Biome$$Type>, list1: $List$$Type<$BiomeModifier$$Type>): void
public "get"(): $ModifiableBiomeInfo$BiomeInfo
public "getModifiedBiomeInfo"(): $ModifiableBiomeInfo$BiomeInfo
public "getOriginalBiomeInfo"(): $ModifiableBiomeInfo$BiomeInfo
get "modifiedBiomeInfo"(): $ModifiableBiomeInfo$BiomeInfo
get "originalBiomeInfo"(): $ModifiableBiomeInfo$BiomeInfo
}
}

declare module "net.minecraftforge.common.world.MobSpawnSettingsBuilder" {
import { $List } from "java.util.List"
import { $MobSpawnSettings$$Type } from "net.minecraft.world.level.biome.MobSpawnSettings"
import { $MobSpawnSettings$SpawnerData } from "net.minecraft.world.level.biome.MobSpawnSettings$SpawnerData"
import { $EntityType, $EntityType$$Type } from "net.minecraft.world.entity.EntityType"
import { $MobCategory, $MobCategory$$Type } from "net.minecraft.world.entity.MobCategory"
import { $Set } from "java.util.Set"
import { $MobSpawnSettings$Builder } from "net.minecraft.world.level.biome.MobSpawnSettings$Builder"
import { $MobSpawnSettings$MobSpawnCost } from "net.minecraft.world.level.biome.MobSpawnSettings$MobSpawnCost"

export class $MobSpawnSettingsBuilder extends $MobSpawnSettings$Builder {
constructor(mobSpawnSettings0: $MobSpawnSettings$$Type)

public "disablePlayerSpawn"(): $MobSpawnSettingsBuilder
public "getCost"(entityType0: $EntityType$$Type<any>): $MobSpawnSettings$MobSpawnCost
public "getEntityTypes"(): $Set<$EntityType<any>>
public "getProbability"(): float
public "getSpawner"(mobCategory0: $MobCategory$$Type): $List<$MobSpawnSettings$SpawnerData>
public "getSpawnerTypes"(): $Set<$MobCategory>
get "entityTypes"(): $Set<$EntityType<any>>
get "probability"(): float
get "spawnerTypes"(): $Set<$MobCategory>
}
}

declare module "net.minecraftforge.common.util.ForgeSoundType" {
import { $SoundEvent } from "net.minecraft.sounds.SoundEvent"
import { $Supplier$$Type } from "java.util.function.Supplier"
import { $SoundType } from "net.minecraft.world.level.block.SoundType"

export class $ForgeSoundType extends $SoundType {
constructor(float0: float, float1: float, supplier2: $Supplier$$Type<$SoundEvent>, supplier3: $Supplier$$Type<$SoundEvent>, supplier4: $Supplier$$Type<$SoundEvent>, supplier5: $Supplier$$Type<$SoundEvent>, supplier6: $Supplier$$Type<$SoundEvent>)

}
}

declare module "net.minecraftforge.common.extensions.IForgeMobEffect" {
import { $List } from "java.util.List"
import { $MobEffectInstance$$Type } from "net.minecraft.world.effect.MobEffectInstance"
import { $ItemStack } from "net.minecraft.world.item.ItemStack"

export interface $IForgeMobEffect {
"getCurativeItems"(): $List<$ItemStack>
"getSortOrder"(mobEffectInstance0: $MobEffectInstance$$Type): integer
get "curativeItems"(): $List<$ItemStack>
}

export namespace $IForgeMobEffect {
const probejs$$marker: never
}
export abstract class $IForgeMobEffect$$Static implements $IForgeMobEffect {
}
}

declare module "net.minecraftforge.common.ForgeConfigSpec$ConfigValue" {
import { $List } from "java.util.List"
import { $ForgeConfigSpec$Builder } from "net.minecraftforge.common.ForgeConfigSpec$Builder"
import { $Supplier } from "java.util.function.Supplier"

export class $ForgeConfigSpec$ConfigValue<T = any> implements $Supplier<T> {
public "clearCache"(): void
public "get"(): T
public "getDefault"(): T
public "getPath"(): $List<string>
public "next"(): $ForgeConfigSpec$Builder
public "save"(): void
public "set"(t0: T): void
get "default"(): T
get "path"(): $List<string>
}
}

declare module "net.minecraftforge.common.capabilities.ICapabilitySerializable" {
import { $Tag, $Tag$$Type } from "net.minecraft.nbt.Tag"
import { $ICapabilityProvider } from "net.minecraftforge.common.capabilities.ICapabilityProvider"
import { $Direction$$Type } from "net.minecraft.core.Direction"
import { $Capability$$Type } from "net.minecraftforge.common.capabilities.Capability"
import { $INBTSerializable } from "net.minecraftforge.common.util.INBTSerializable"
import { $LazyOptional } from "net.minecraftforge.common.util.LazyOptional"

export interface $ICapabilitySerializable<T extends $Tag = $Tag> extends $ICapabilityProvider, $INBTSerializable<T> {
"deserializeNBT"(t0: T): void
"getCapability"<T>(capability0: $Capability$$Type<T>, direction1: $Direction$$Type): $LazyOptional<T>
"getCapability"<T>(capability0: $Capability$$Type<T>): $LazyOptional<T>
"serializeNBT"(): T
}

export namespace $ICapabilitySerializable {
const probejs$$marker: never
}
export abstract class $ICapabilitySerializable$$Static<T extends $Tag = $Tag> implements $ICapabilitySerializable<T> {
}
}

declare module "net.minecraftforge.common.IExtensibleEnum" {
import { $Codec } from "com.mojang.serialization.Codec"
import { $Enum, $Enum$$Type } from "java.lang.Enum"
import { $StringRepresentable, $StringRepresentable$$Type } from "net.minecraft.util.StringRepresentable"
import { $Supplier$$Type } from "java.util.function.Supplier"
import { $Function$$Type } from "java.util.function.Function"

export interface $IExtensibleEnum {
/** @deprecated */
"init"(): void
}

export namespace $IExtensibleEnum {
function createCodecForExtensibleEnum<E extends ($Enum<E> & $StringRepresentable)>(supplier0: $Supplier$$Type<E[]>, function1: $Function$$Type<string, E>): $Codec<E>
}
export abstract class $IExtensibleEnum$$Static implements $IExtensibleEnum {
static "createCodecForExtensibleEnum"<E extends ($Enum<E> & $StringRepresentable)>(supplier0: $Supplier$$Type<E[]>, function1: $Function$$Type<string, E>): $Codec<E>
}
}

declare module "net.minecraftforge.common.ToolAction" {
import { $Collection } from "java.util.Collection"

export class $ToolAction {
public static "get"(string0: string): $ToolAction
public static "getActions"(): $Collection<$ToolAction>
public "name"(): string
}
}

declare module "net.minecraftforge.common.util.NonNullConsumer" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $NonNullConsumer<T = any> {
"accept"(t0: T): void
}

export namespace $NonNullConsumer {
const probejs$$marker: never
}
export abstract class $NonNullConsumer$$Static<T = any> implements $NonNullConsumer<T> {
}
}

declare module "net.minecraftforge.common.util.TriPredicate" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $TriPredicate<T = any, U = any, V = any> {
"and"(triPredicate0: $TriPredicate$$Type<T, U, V>): $TriPredicate<T, U, V>
"negate"(): $TriPredicate<T, U, V>
"or"(triPredicate0: $TriPredicate$$Type<T, U, V>): $TriPredicate<T, U, V>
"test"(t0: T, u1: U, v2: V): boolean
}

export namespace $TriPredicate {
const probejs$$marker: never
}
export abstract class $TriPredicate$$Static<T = any, U = any, V = any> implements $TriPredicate<T, U, V> {
}
}

declare module "net.minecraftforge.common.crafting.IShapedRecipe" {
import { $ResourceLocation } from "net.minecraft.resources.ResourceLocation"
import { $RecipeSerializer } from "net.minecraft.world.item.crafting.RecipeSerializer"
import { $RegistryAccess$$Type } from "net.minecraft.core.RegistryAccess"
import { $RecipeSchema } from "dev.latvian.mods.kubejs.recipe.schema.RecipeSchema"
import { $OutputReplacement$$Type } from "dev.latvian.mods.kubejs.recipe.OutputReplacement"
import { $Ingredient } from "net.minecraft.world.item.crafting.Ingredient"
import { $InputReplacement$$Type } from "dev.latvian.mods.kubejs.recipe.InputReplacement"
import { $Container, $Container$$Type } from "net.minecraft.world.Container"
import { $Recipe } from "net.minecraft.world.item.crafting.Recipe"
import { $NonNullList } from "net.minecraft.core.NonNullList"
import { $ReplacementMatch$$Type } from "dev.latvian.mods.kubejs.recipe.ReplacementMatch"
import { $ItemStack } from "net.minecraft.world.item.ItemStack"
import { $Level$$Type } from "net.minecraft.world.level.Level"

export interface $IShapedRecipe<T extends $Container = $Container> extends $Recipe<T> {
"assemble"(t0: T, registryAccess1: $RegistryAccess$$Type): $ItemStack
"canCraftInDimensions"(int0: integer, int1: integer): boolean
"getGroup"(): string
"getId"(): $ResourceLocation
"getIngredients"(): $NonNullList<$Ingredient>
"getMod"(): string
"getOrCreateId"(): $ResourceLocation
"getRecipeHeight"(): integer
"getRecipeWidth"(): integer
"getRemainingItems"(t0: T): $NonNullList<$ItemStack>
"getResultItem"(registryAccess0: $RegistryAccess$$Type): $ItemStack
"getSchema"(): $RecipeSchema
"getSerializer"(): $RecipeSerializer<any>
"getToastSymbol"(): $ItemStack
"getType"(): $ResourceLocation
"hasInput"(match: $ReplacementMatch$$Type): boolean
"hasOutput"(match: $ReplacementMatch$$Type): boolean
"isIncomplete"(): boolean
"isSpecial"(): boolean
"matches"(t0: T, level1: $Level$$Type): boolean
"replaceInput"(match: $ReplacementMatch$$Type, with_: $InputReplacement$$Type): boolean
"replaceOutput"(match: $ReplacementMatch$$Type, with_: $OutputReplacement$$Type): boolean
"setGroup"(group: string): void
"showNotification"(): boolean
get "group"(): string
get "id"(): $ResourceLocation
get "ingredients"(): $NonNullList<$Ingredient>
get "mod"(): string
get "orCreateId"(): $ResourceLocation
get "recipeHeight"(): integer
get "recipeWidth"(): integer
get "schema"(): $RecipeSchema
get "serializer"(): $RecipeSerializer<any>
get "toastSymbol"(): $ItemStack
get "type"(): $ResourceLocation
get "incomplete"(): boolean
get "special"(): boolean
set "group"(value: string)
}

export namespace $IShapedRecipe {
const probejs$$marker: never
}
export abstract class $IShapedRecipe$$Static<T extends $Container = $Container> implements $IShapedRecipe<T> {
}
}

declare module "net.minecraftforge.common.extensions.IForgeTransformation" {
import { $Transformation } from "com.mojang.math.Transformation"
import { $Direction, $Direction$$Type } from "net.minecraft.core.Direction"
import { $Vector3f$$Type } from "org.joml.Vector3f"
import { $Vector4f$$Type } from "org.joml.Vector4f"

export interface $IForgeTransformation {
"applyOrigin"(vector3f0: $Vector3f$$Type): $Transformation
"blockCenterToCorner"(): $Transformation
"blockCornerToCenter"(): $Transformation
"isIdentity"(): boolean
"rotateTransform"(direction0: $Direction$$Type): $Direction
"transformNormal"(vector3f0: $Vector3f$$Type): void
"transformPosition"(vector4f0: $Vector4f$$Type): void
get "identity"(): boolean
}

export namespace $IForgeTransformation {
const probejs$$marker: never
}
export abstract class $IForgeTransformation$$Static implements $IForgeTransformation {
}
}

declare module "net.minecraftforge.common.extensions.IForgeIntrinsicHolderTagAppender" {
import { $TagKey$$Type } from "net.minecraft.tags.TagKey"
import { $IntrinsicHolderTagsProvider$IntrinsicTagAppender } from "net.minecraft.data.tags.IntrinsicHolderTagsProvider$IntrinsicTagAppender"
import { $IForgeTagAppender } from "net.minecraftforge.common.extensions.IForgeTagAppender"
import { $ResourceKey } from "net.minecraft.resources.ResourceKey"
import { $TagsProvider$TagAppender } from "net.minecraft.data.tags.TagsProvider$TagAppender"

export interface $IForgeIntrinsicHolderTagAppender<T = any> extends $IForgeTagAppender<T> {
"addOptionalTag"(tagKey0: $TagKey$$Type<T>): $TagsProvider$TagAppender<T>
"addOptionalTags"(...tagKey0s: $TagKey$$Type<T>[]): $TagsProvider$TagAppender<T>
"getKey"(t0: T): $ResourceKey<T>
"remove"(t0: T): $IntrinsicHolderTagsProvider$IntrinsicTagAppender<T>
"remove"(t0: T, ...t1s: T[]): $IntrinsicHolderTagsProvider$IntrinsicTagAppender<T>
}

export namespace $IForgeIntrinsicHolderTagAppender {
const probejs$$marker: never
}
export abstract class $IForgeIntrinsicHolderTagAppender$$Static<T = any> implements $IForgeIntrinsicHolderTagAppender<T> {
}
}

declare module "net.minecraftforge.common.data.ExistingFileHelper" {
import { $ResourceLocation$$Type } from "net.minecraft.resources.ResourceLocation"
import { $Resource } from "net.minecraft.server.packs.resources.Resource"
import { $List } from "java.util.List"
import { $ExistingFileHelper$IResourceType$$Type } from "net.minecraftforge.common.data.ExistingFileHelper$IResourceType"
import { $Collection$$Type } from "java.util.Collection"
import { $Set$$Type } from "java.util.Set"
import { $PackType$$Type } from "net.minecraft.server.packs.PackType"
import { $Path$$Type } from "java.nio.file.Path"
import { $File$$Type } from "java.io.File"

export class $ExistingFileHelper {
constructor(collection0: $Collection$$Type<$Path$$Type>, set1: $Set$$Type<string>, boolean2: boolean, string3: string, file4: $File$$Type)

public "exists"(resourceLocation0: $ResourceLocation$$Type, iResourceType1: $ExistingFileHelper$IResourceType$$Type): boolean
public "exists"(resourceLocation0: $ResourceLocation$$Type, packType1: $PackType$$Type, string2: string, string3: string): boolean
public "exists"(resourceLocation0: $ResourceLocation$$Type, packType1: $PackType$$Type): boolean
public "getResource"(resourceLocation0: $ResourceLocation$$Type, packType1: $PackType$$Type, string2: string, string3: string): $Resource
public "getResource"(resourceLocation0: $ResourceLocation$$Type, packType1: $PackType$$Type): $Resource
public "getResourceStack"(resourceLocation0: $ResourceLocation$$Type, packType1: $PackType$$Type): $List<$Resource>
public "isEnabled"(): boolean
public "trackGenerated"(resourceLocation0: $ResourceLocation$$Type, packType1: $PackType$$Type, string2: string, string3: string): void
public "trackGenerated"(resourceLocation0: $ResourceLocation$$Type, iResourceType1: $ExistingFileHelper$IResourceType$$Type): void
get "enabled"(): boolean
}
}

declare module "net.minecraftforge.common.world.StructureSettingsBuilder" {
import { $StructureSettingsBuilder$StructureSpawnOverrideBuilder } from "net.minecraftforge.common.world.StructureSettingsBuilder$StructureSpawnOverrideBuilder"
import { $MobCategory$$Type } from "net.minecraft.world.entity.MobCategory"
import { $HolderSet, $HolderSet$$Type } from "net.minecraft.core.HolderSet"
import { $Structure$StructureSettings, $Structure$StructureSettings$$Type } from "net.minecraft.world.level.levelgen.structure.Structure$StructureSettings"
import { $Biome, $Biome$$Type } from "net.minecraft.world.level.biome.Biome"
import { $GenerationStep$Decoration, $GenerationStep$Decoration$$Type } from "net.minecraft.world.level.levelgen.GenerationStep$Decoration"
import { $TerrainAdjustment, $TerrainAdjustment$$Type } from "net.minecraft.world.level.levelgen.structure.TerrainAdjustment"

export class $StructureSettingsBuilder {
public "build"(): $Structure$StructureSettings
public static "copyOf"(structureSettings0: $Structure$StructureSettings$$Type): $StructureSettingsBuilder
public "getBiomes"(): $HolderSet<$Biome>
public "getDecorationStep"(): $GenerationStep$Decoration
public "getOrAddSpawnOverrides"(mobCategory0: $MobCategory$$Type): $StructureSettingsBuilder$StructureSpawnOverrideBuilder
public "getSpawnOverrides"(mobCategory0: $MobCategory$$Type): $StructureSettingsBuilder$StructureSpawnOverrideBuilder
public "getTerrainAdaptation"(): $TerrainAdjustment
public "removeSpawnOverrides"(mobCategory0: $MobCategory$$Type): void
public "setBiomes"(holderSet0: $HolderSet$$Type<$Biome$$Type>): void
public "setDecorationStep"(decoration0: $GenerationStep$Decoration$$Type): void
public "setTerrainAdaptation"(terrainAdjustment0: $TerrainAdjustment$$Type): void
get "biomes"(): $HolderSet<$Biome>
get "decorationStep"(): $GenerationStep$Decoration
get "terrainAdaptation"(): $TerrainAdjustment
set "biomes"(value: $HolderSet$$Type<$Biome$$Type>)
set "decorationStep"(value: $GenerationStep$Decoration$$Type)
set "terrainAdaptation"(value: $TerrainAdjustment$$Type)
}
}

declare module "net.minecraftforge.common.util.INBTSerializable" {
import { $Tag, $Tag$$Type } from "net.minecraft.nbt.Tag"

export interface $INBTSerializable<T extends $Tag = $Tag> {
"deserializeNBT"(t0: T): void
"serializeNBT"(): T
}

export namespace $INBTSerializable {
const probejs$$marker: never
}
export abstract class $INBTSerializable$$Static<T extends $Tag = $Tag> implements $INBTSerializable<T> {
}
}

declare module "net.minecraftforge.common.extensions.IForgeMobEffectInstance" {
import { $List, $List$$Type } from "java.util.List"
import { $CompoundTag$$Type } from "net.minecraft.nbt.CompoundTag"
import { $ItemStack, $ItemStack$$Type } from "net.minecraft.world.item.ItemStack"

export interface $IForgeMobEffectInstance {
"addCurativeItem"(itemStack0: $ItemStack$$Type): void
"getCurativeItems"(): $List<$ItemStack>
"isCurativeItem"(itemStack0: $ItemStack$$Type): boolean
"setCurativeItems"(list0: $List$$Type<$ItemStack$$Type>): void
"writeCurativeItems"(compoundTag0: $CompoundTag$$Type): void
get "curativeItems"(): $List<$ItemStack>
set "curativeItems"(value: $List$$Type<$ItemStack$$Type>)
}

export namespace $IForgeMobEffectInstance {
const probejs$$marker: never
}
export abstract class $IForgeMobEffectInstance$$Static implements $IForgeMobEffectInstance {
}
}

declare module "net.minecraftforge.common.PlantType" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export class $PlantType {
static readonly "BEACH": $PlantType
static readonly "CAVE": $PlantType
static readonly "CROP": $PlantType
static readonly "DESERT": $PlantType
static readonly "NETHER": $PlantType
static readonly "PLAINS": $PlantType
static readonly "WATER": $PlantType

public static "get"(string0: string): $PlantType
public "getName"(): string
get "name"(): string
}
}

declare module "net.minecraftforge.common.util.ITeleporter" {
import { $ServerPlayer$$Type } from "net.minecraft.server.level.ServerPlayer"
import { $PortalInfo } from "net.minecraft.world.level.portal.PortalInfo"
import { $Entity, $Entity$$Type } from "net.minecraft.world.entity.Entity"
import { $ServerLevel$$Type } from "net.minecraft.server.level.ServerLevel"
import { $Function$$Type } from "java.util.function.Function"

export interface $ITeleporter {
"getPortalInfo"(entity0: $Entity$$Type, serverLevel1: $ServerLevel$$Type, function2: $Function$$Type<$ServerLevel$$Type, $PortalInfo>): $PortalInfo
"isVanilla"(): boolean
"placeEntity"(entity0: $Entity$$Type, serverLevel1: $ServerLevel$$Type, serverLevel2: $ServerLevel$$Type, float3: float, function4: $Function$$Type<boolean, $Entity>): $Entity
"playTeleportSound"(serverPlayer0: $ServerPlayer$$Type, serverLevel1: $ServerLevel$$Type, serverLevel2: $ServerLevel$$Type): boolean
get "vanilla"(): boolean
}

export namespace $ITeleporter {
const probejs$$marker: never
}
export abstract class $ITeleporter$$Static implements $ITeleporter {
}
}

declare module "net.minecraftforge.common.util.Lazy" {
import { $Supplier, $Supplier$$Type } from "java.util.function.Supplier"

export interface $Lazy<T = any> extends $Supplier<T> {
"get"(): T
}

export namespace $Lazy {
function concurrentOf<T>(supplier0: $Supplier$$Type<T>): $Lazy<T>
function of<T>(supplier0: $Supplier$$Type<T>): $Lazy<T>
}
export abstract class $Lazy$$Static<T = any> implements $Lazy<T> {
static "concurrentOf"<T>(supplier0: $Supplier$$Type<T>): $Lazy<T>
static "of"<T>(supplier0: $Supplier$$Type<T>): $Lazy<T>
}
}

declare module "net.minecraftforge.common.extensions.IForgeBlock" {
import { $LivingEntity$$Type } from "net.minecraft.world.entity.LivingEntity"
import { $Direction, $Direction$$Type } from "net.minecraft.core.Direction"
import { $EntityType$$Type } from "net.minecraft.world.entity.EntityType"
import { $BlockState, $BlockState$$Type } from "net.minecraft.world.level.block.state.BlockState"
import { $SpawnPlacements$Type$$Type } from "net.minecraft.world.entity.SpawnPlacements$Type"
import { $ServerLevel$$Type } from "net.minecraft.server.level.ServerLevel"
import { $BlockGetter$$Type } from "net.minecraft.world.level.BlockGetter"
import { $MapColor, $MapColor$$Type } from "net.minecraft.world.level.material.MapColor"
import { $PushReaction } from "net.minecraft.world.level.material.PushReaction"
import { $Rotation$$Type } from "net.minecraft.world.level.block.Rotation"
import { $ToolAction$$Type } from "net.minecraftforge.common.ToolAction"
import { $BiConsumer$$Type } from "java.util.function.BiConsumer"
import { $UseOnContext$$Type } from "net.minecraft.world.item.context.UseOnContext"
import { $BlockAndTintGetter$$Type } from "net.minecraft.world.level.BlockAndTintGetter"
import { $BlockPathTypes, $BlockPathTypes$$Type } from "net.minecraft.world.level.pathfinder.BlockPathTypes"
import { $RandomSource$$Type } from "net.minecraft.util.RandomSource"
import { $LevelReader$$Type } from "net.minecraft.world.level.LevelReader"
import { $TreeConfiguration$$Type } from "net.minecraft.world.level.levelgen.feature.configurations.TreeConfiguration"
import { $Explosion$$Type } from "net.minecraft.world.level.Explosion"
import { $SoundType } from "net.minecraft.world.level.block.SoundType"
import { $Player$$Type } from "net.minecraft.world.entity.player.Player"
import { $IPlantable$$Type } from "net.minecraftforge.common.IPlantable"
import { $HitResult$$Type } from "net.minecraft.world.phys.HitResult"
import { $Entity$$Type } from "net.minecraft.world.entity.Entity"
import { $BlockPos$$Type } from "net.minecraft.core.BlockPos"
import { $Vec3, $Vec3$$Type } from "net.minecraft.world.phys.Vec3"
import { $SignalGetter$$Type } from "net.minecraft.world.level.SignalGetter"
import { $FluidState$$Type } from "net.minecraft.world.level.material.FluidState"
import { $Optional } from "java.util.Optional"
import { $LevelAccessor$$Type } from "net.minecraft.world.level.LevelAccessor"
import { $ItemStack } from "net.minecraft.world.item.ItemStack"
import { $Level$$Type } from "net.minecraft.world.level.Level"
import { $Mob$$Type } from "net.minecraft.world.entity.Mob"

/** @deprecated */
export interface $IForgeBlock {
"addLandingEffects"(blockState0: $BlockState$$Type, serverLevel1: $ServerLevel$$Type, blockPos2: $BlockPos$$Type, blockState3: $BlockState$$Type, livingEntity4: $LivingEntity$$Type, int5: integer): boolean
"addRunningEffects"(blockState0: $BlockState$$Type, level1: $Level$$Type, blockPos2: $BlockPos$$Type, entity3: $Entity$$Type): boolean
"canBeHydrated"(blockState0: $BlockState$$Type, blockGetter1: $BlockGetter$$Type, blockPos2: $BlockPos$$Type, fluidState3: $FluidState$$Type, blockPos4: $BlockPos$$Type): boolean
"canConnectRedstone"(blockState0: $BlockState$$Type, blockGetter1: $BlockGetter$$Type, blockPos2: $BlockPos$$Type, direction3: $Direction$$Type): boolean
"canDropFromExplosion"(blockState0: $BlockState$$Type, blockGetter1: $BlockGetter$$Type, blockPos2: $BlockPos$$Type, explosion3: $Explosion$$Type): boolean
"canEntityDestroy"(blockState0: $BlockState$$Type, blockGetter1: $BlockGetter$$Type, blockPos2: $BlockPos$$Type, entity3: $Entity$$Type): boolean
"canHarvestBlock"(blockState0: $BlockState$$Type, blockGetter1: $BlockGetter$$Type, blockPos2: $BlockPos$$Type, player3: $Player$$Type): boolean
"canStickTo"(blockState0: $BlockState$$Type, blockState1: $BlockState$$Type): boolean
"canSustainPlant"(blockState0: $BlockState$$Type, blockGetter1: $BlockGetter$$Type, blockPos2: $BlockPos$$Type, direction3: $Direction$$Type, iPlantable4: $IPlantable$$Type): boolean
"collisionExtendsVertically"(blockState0: $BlockState$$Type, blockGetter1: $BlockGetter$$Type, blockPos2: $BlockPos$$Type, entity3: $Entity$$Type): boolean
"getAdjacentBlockPathType"(blockState0: $BlockState$$Type, blockGetter1: $BlockGetter$$Type, blockPos2: $BlockPos$$Type, mob3: $Mob$$Type, blockPathTypes4: $BlockPathTypes$$Type): $BlockPathTypes
"getAppearance"(blockState0: $BlockState$$Type, blockAndTintGetter1: $BlockAndTintGetter$$Type, blockPos2: $BlockPos$$Type, direction3: $Direction$$Type, blockState4: $BlockState$$Type, blockPos5: $BlockPos$$Type): $BlockState
"getBeaconColorMultiplier"(blockState0: $BlockState$$Type, levelReader1: $LevelReader$$Type, blockPos2: $BlockPos$$Type, blockPos3: $BlockPos$$Type): float[]
"getBedDirection"(blockState0: $BlockState$$Type, levelReader1: $LevelReader$$Type, blockPos2: $BlockPos$$Type): $Direction
"getBlockPathType"(blockState0: $BlockState$$Type, blockGetter1: $BlockGetter$$Type, blockPos2: $BlockPos$$Type, mob3: $Mob$$Type): $BlockPathTypes
"getCloneItemStack"(blockState0: $BlockState$$Type, hitResult1: $HitResult$$Type, blockGetter2: $BlockGetter$$Type, blockPos3: $BlockPos$$Type, player4: $Player$$Type): $ItemStack
"getEnchantPowerBonus"(blockState0: $BlockState$$Type, levelReader1: $LevelReader$$Type, blockPos2: $BlockPos$$Type): float
"getExpDrop"(blockState0: $BlockState$$Type, levelReader1: $LevelReader$$Type, randomSource2: $RandomSource$$Type, blockPos3: $BlockPos$$Type, int4: integer, int5: integer): integer
"getExplosionResistance"(blockState0: $BlockState$$Type, blockGetter1: $BlockGetter$$Type, blockPos2: $BlockPos$$Type, explosion3: $Explosion$$Type): float
"getFireSpreadSpeed"(blockState0: $BlockState$$Type, blockGetter1: $BlockGetter$$Type, blockPos2: $BlockPos$$Type, direction3: $Direction$$Type): integer
"getFlammability"(blockState0: $BlockState$$Type, blockGetter1: $BlockGetter$$Type, blockPos2: $BlockPos$$Type, direction3: $Direction$$Type): integer
"getFriction"(blockState0: $BlockState$$Type, levelReader1: $LevelReader$$Type, blockPos2: $BlockPos$$Type, entity3: $Entity$$Type): float
"getLightEmission"(blockState0: $BlockState$$Type, blockGetter1: $BlockGetter$$Type, blockPos2: $BlockPos$$Type): integer
"getMapColor"(blockState0: $BlockState$$Type, blockGetter1: $BlockGetter$$Type, blockPos2: $BlockPos$$Type, mapColor3: $MapColor$$Type): $MapColor
"getPistonPushReaction"(blockState0: $BlockState$$Type): $PushReaction
"getRespawnPosition"(blockState0: $BlockState$$Type, entityType1: $EntityType$$Type<any>, levelReader2: $LevelReader$$Type, blockPos3: $BlockPos$$Type, float4: float, livingEntity5: $LivingEntity$$Type): $Optional<$Vec3>
"getSoundType"(blockState0: $BlockState$$Type, levelReader1: $LevelReader$$Type, blockPos2: $BlockPos$$Type, entity3: $Entity$$Type): $SoundType
"getStateAtViewpoint"(blockState0: $BlockState$$Type, blockGetter1: $BlockGetter$$Type, blockPos2: $BlockPos$$Type, vec33: $Vec3$$Type): $BlockState
"getToolModifiedState"(blockState0: $BlockState$$Type, useOnContext1: $UseOnContext$$Type, toolAction2: $ToolAction$$Type, boolean3: boolean): $BlockState
"getWeakChanges"(blockState0: $BlockState$$Type, levelReader1: $LevelReader$$Type, blockPos2: $BlockPos$$Type): boolean
"hidesNeighborFace"(blockGetter0: $BlockGetter$$Type, blockPos1: $BlockPos$$Type, blockState2: $BlockState$$Type, blockState3: $BlockState$$Type, direction4: $Direction$$Type): boolean
"isBed"(blockState0: $BlockState$$Type, blockGetter1: $BlockGetter$$Type, blockPos2: $BlockPos$$Type, entity3: $Entity$$Type): boolean
"isBurning"(blockState0: $BlockState$$Type, blockGetter1: $BlockGetter$$Type, blockPos2: $BlockPos$$Type): boolean
"isConduitFrame"(blockState0: $BlockState$$Type, levelReader1: $LevelReader$$Type, blockPos2: $BlockPos$$Type, blockPos3: $BlockPos$$Type): boolean
"isFertile"(blockState0: $BlockState$$Type, blockGetter1: $BlockGetter$$Type, blockPos2: $BlockPos$$Type): boolean
"isFireSource"(blockState0: $BlockState$$Type, levelReader1: $LevelReader$$Type, blockPos2: $BlockPos$$Type, direction3: $Direction$$Type): boolean
"isFlammable"(blockState0: $BlockState$$Type, blockGetter1: $BlockGetter$$Type, blockPos2: $BlockPos$$Type, direction3: $Direction$$Type): boolean
"isLadder"(blockState0: $BlockState$$Type, levelReader1: $LevelReader$$Type, blockPos2: $BlockPos$$Type, livingEntity3: $LivingEntity$$Type): boolean
"isPortalFrame"(blockState0: $BlockState$$Type, blockGetter1: $BlockGetter$$Type, blockPos2: $BlockPos$$Type): boolean
"isScaffolding"(blockState0: $BlockState$$Type, levelReader1: $LevelReader$$Type, blockPos2: $BlockPos$$Type, livingEntity3: $LivingEntity$$Type): boolean
"isSlimeBlock"(blockState0: $BlockState$$Type): boolean
"isStickyBlock"(blockState0: $BlockState$$Type): boolean
"isValidSpawn"(blockState0: $BlockState$$Type, blockGetter1: $BlockGetter$$Type, blockPos2: $BlockPos$$Type, type3: $SpawnPlacements$Type$$Type, entityType4: $EntityType$$Type<any>): boolean
"makesOpenTrapdoorAboveClimbable"(blockState0: $BlockState$$Type, levelReader1: $LevelReader$$Type, blockPos2: $BlockPos$$Type, blockState3: $BlockState$$Type): boolean
"onBlockExploded"(blockState0: $BlockState$$Type, level1: $Level$$Type, blockPos2: $BlockPos$$Type, explosion3: $Explosion$$Type): void
"onBlockStateChange"(levelReader0: $LevelReader$$Type, blockPos1: $BlockPos$$Type, blockState2: $BlockState$$Type, blockState3: $BlockState$$Type): void
"onCaughtFire"(blockState0: $BlockState$$Type, level1: $Level$$Type, blockPos2: $BlockPos$$Type, direction3: $Direction$$Type, livingEntity4: $LivingEntity$$Type): void
"onDestroyedByPlayer"(blockState0: $BlockState$$Type, level1: $Level$$Type, blockPos2: $BlockPos$$Type, player3: $Player$$Type, boolean4: boolean, fluidState5: $FluidState$$Type): boolean
"onNeighborChange"(blockState0: $BlockState$$Type, levelReader1: $LevelReader$$Type, blockPos2: $BlockPos$$Type, blockPos3: $BlockPos$$Type): void
"onTreeGrow"(blockState0: $BlockState$$Type, levelReader1: $LevelReader$$Type, biConsumer2: $BiConsumer$$Type<$BlockPos$$Type, $BlockState$$Type>, randomSource3: $RandomSource$$Type, blockPos4: $BlockPos$$Type, treeConfiguration5: $TreeConfiguration$$Type): boolean
"rotate"(blockState0: $BlockState$$Type, levelAccessor1: $LevelAccessor$$Type, blockPos2: $BlockPos$$Type, rotation3: $Rotation$$Type): $BlockState
"setBedOccupied"(blockState0: $BlockState$$Type, level1: $Level$$Type, blockPos2: $BlockPos$$Type, livingEntity3: $LivingEntity$$Type, boolean4: boolean): void
"shouldCheckWeakPower"(blockState0: $BlockState$$Type, signalGetter1: $SignalGetter$$Type, blockPos2: $BlockPos$$Type, direction3: $Direction$$Type): boolean
"shouldDisplayFluidOverlay"(blockState0: $BlockState$$Type, blockAndTintGetter1: $BlockAndTintGetter$$Type, blockPos2: $BlockPos$$Type, fluidState3: $FluidState$$Type): boolean
"supportsExternalFaceHiding"(blockState0: $BlockState$$Type): boolean
}

export namespace $IForgeBlock {
const probejs$$marker: never
}
export abstract class $IForgeBlock$$Static implements $IForgeBlock {
}
}

declare module "net.minecraftforge.common.crafting.conditions.ICondition$IContext" {
import { $ResourceLocation } from "net.minecraft.resources.ResourceLocation"
import { $Registry } from "net.minecraft.core.Registry"
import { $TagKey$$Type } from "net.minecraft.tags.TagKey"
import { $Holder } from "net.minecraft.core.Holder"
import { $Map } from "java.util.Map"
import { $Collection } from "java.util.Collection"
import { $ResourceKey$$Type } from "net.minecraft.resources.ResourceKey"

export interface $ICondition$IContext {
"getAllTags"<T>(resourceKey0: $ResourceKey$$Type<$Registry<T>>): $Map<$ResourceLocation, $Collection<$Holder<T>>>
"getTag"<T>(tagKey0: $TagKey$$Type<T>): $Collection<$Holder<T>>
}

export namespace $ICondition$IContext {
const EMPTY: $ICondition$IContext
const TAGS_INVALID: $ICondition$IContext
}
export abstract class $ICondition$IContext$$Static implements $ICondition$IContext {
static readonly "EMPTY": $ICondition$IContext
static readonly "TAGS_INVALID": $ICondition$IContext

}
}

