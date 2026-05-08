declare module "net.minecraft.data.loot.LootTableSubProvider" {
import { $ResourceLocation$$Type } from "net.minecraft.resources.ResourceLocation"
import { $BiConsumer$$Type } from "java.util.function.BiConsumer"
import { $LootTable$Builder$$Type } from "net.minecraft.world.level.storage.loot.LootTable$Builder"

export interface $LootTableSubProvider {
"generate"(biConsumer0: $BiConsumer$$Type<$ResourceLocation$$Type, $LootTable$Builder$$Type>): void
}

export namespace $LootTableSubProvider {
const probejs$$marker: never
}
export abstract class $LootTableSubProvider$$Static implements $LootTableSubProvider {
}
}

declare module "net.minecraft.data.models.blockstates.MultiVariantGenerator" {
import { $JsonElement } from "com.google.gson.JsonElement"
import { $BlockStateGenerator } from "net.minecraft.data.models.blockstates.BlockStateGenerator"
import { $Variant$$Type } from "net.minecraft.data.models.blockstates.Variant"
import { $Block, $Block$$Type } from "net.minecraft.world.level.block.Block"
import { $PropertyDispatch$$Type } from "net.minecraft.data.models.blockstates.PropertyDispatch"

export class $MultiVariantGenerator implements $BlockStateGenerator {
public "get"(): $JsonElement
public "getBlock"(): $Block
public static "multiVariant"(block0: $Block$$Type): $MultiVariantGenerator
public static "multiVariant"(block0: $Block$$Type, variant1: $Variant$$Type): $MultiVariantGenerator
public static "multiVariant"(block0: $Block$$Type, ...variant1s: $Variant$$Type[]): $MultiVariantGenerator
public "with"(propertyDispatch0: $PropertyDispatch$$Type): $MultiVariantGenerator
get "block"(): $Block
}
}

declare module "net.minecraft.data.loot.LootTableProvider" {
import { $ResourceLocation$$Type } from "net.minecraft.resources.ResourceLocation"
import { $JsonElement$$Type } from "com.google.gson.JsonElement"
import { $PackOutput$$Type } from "net.minecraft.data.PackOutput"
import { $List, $List$$Type } from "java.util.List"
import { $Set$$Type } from "java.util.Set"
import { $CompletableFuture } from "java.util.concurrent.CompletableFuture"
import { $LootTableProvider$SubProviderEntry, $LootTableProvider$SubProviderEntry$$Type } from "net.minecraft.data.loot.LootTableProvider$SubProviderEntry"
import { $Path$$Type } from "java.nio.file.Path"
import { $DataProvider } from "net.minecraft.data.DataProvider"
import { $CachedOutput$$Type } from "net.minecraft.data.CachedOutput"

export class $LootTableProvider implements $DataProvider {
constructor(packOutput0: $PackOutput$$Type, set1: $Set$$Type<$ResourceLocation$$Type>, list2: $List$$Type<$LootTableProvider$SubProviderEntry$$Type>)

public "getName"(): string
public "getTables"(): $List<$LootTableProvider$SubProviderEntry>
public "run"(cachedOutput0: $CachedOutput$$Type): $CompletableFuture<any>
public static "saveStable"(cachedOutput0: $CachedOutput$$Type, jsonElement1: $JsonElement$$Type, path2: $Path$$Type): $CompletableFuture<any>
get "name"(): string
get "tables"(): $List<$LootTableProvider$SubProviderEntry>
}
}

declare module "net.minecraft.data.CachedOutput" {
import { $HashCode$$Type } from "com.google.common.hash.HashCode"
import { $Path$$Type } from "java.nio.file.Path"

export interface $CachedOutput {
"writeIfNeeded"(path0: $Path$$Type, byte1s: byte[], hashCode2: $HashCode$$Type): void
}

export namespace $CachedOutput {
const NO_CACHE: $CachedOutput
}
export abstract class $CachedOutput$$Static implements $CachedOutput {
static readonly "NO_CACHE": $CachedOutput

}
}

declare module "net.minecraft.data.tags.TagsProvider" {
import { $TagsProviderEFHSetter } from "at.petrak.hexcasting.forge.datagen.TagsProviderEFHSetter"
import { $CompletableFuture } from "java.util.concurrent.CompletableFuture"
import { $ExistingFileHelper$$Type } from "net.minecraftforge.common.data.ExistingFileHelper"
import { $CachedOutput$$Type } from "net.minecraft.data.CachedOutput"
import { $AccessorTagsProvider } from "at.petrak.paucal.api.mixin.AccessorTagsProvider"
import { $FileHelperDataProvider } from "fuzs.puzzleslib.impl.data.FileHelperDataProvider"
import { $JsonElement$$Type } from "com.google.gson.JsonElement"
import { $TagKey$$Type } from "net.minecraft.tags.TagKey"
import { $TagsProvider$TagLookup } from "net.minecraft.data.tags.TagsProvider$TagLookup"
import { $Path$$Type } from "java.nio.file.Path"
import { $DataProvider } from "net.minecraft.data.DataProvider"
import { $TagsProvider$TagAppender } from "net.minecraft.data.tags.TagsProvider$TagAppender"

export class $TagsProvider<T = any> implements $DataProvider, $AccessorTagsProvider, $FileHelperDataProvider, $TagsProviderEFHSetter {
public "contentsGetter"(): $CompletableFuture<$TagsProvider$TagLookup<T>>
public "getName"(): string
public "puzzleslib$setExistingFileHelper"(existingFileHelper0: $ExistingFileHelper$$Type): void
public "run"(cachedOutput0: $CachedOutput$$Type): $CompletableFuture<any>
public static "saveStable"(cachedOutput0: $CachedOutput$$Type, jsonElement1: $JsonElement$$Type, path2: $Path$$Type): $CompletableFuture<any>
public "setEFH"(existingFileHelper0: $ExistingFileHelper$$Type): void
public "tag"(tagKey0: $TagKey$$Type<T>): $TagsProvider$TagAppender<T>
get "name"(): string
set "eFH"(value: $ExistingFileHelper$$Type)
}
}

declare module "net.minecraft.data.DataProvider$Factory" {
import { $PackOutput$$Type } from "net.minecraft.data.PackOutput"
import { $DataProvider } from "net.minecraft.data.DataProvider"

export interface $DataProvider$Factory<T extends $DataProvider = $DataProvider> {
"create"(packOutput0: $PackOutput$$Type): T
}

export namespace $DataProvider$Factory {
const probejs$$marker: never
}
export abstract class $DataProvider$Factory$$Static<T extends $DataProvider = $DataProvider> implements $DataProvider$Factory<T> {
}
}

declare module "net.minecraft.data.loot.LootTableProvider$SubProviderEntry" {
import { $LootTableSubProvider } from "net.minecraft.data.loot.LootTableSubProvider"
import { $Record } from "java.lang.Record"
import { $LootContextParamSet, $LootContextParamSet$$Type } from "net.minecraft.world.level.storage.loot.parameters.LootContextParamSet"
import { $Supplier, $Supplier$$Type } from "java.util.function.Supplier"

export class $LootTableProvider$SubProviderEntry extends $Record {
constructor(provider: $Supplier$$Type<$LootTableSubProvider>, paramSet: $LootContextParamSet$$Type)

public "paramSet"(): $LootContextParamSet
public "provider"(): $Supplier<$LootTableSubProvider>
}
}

declare module "net.minecraft.data.models.blockstates.PropertyDispatch$C3" {
import { $List, $List$$Type } from "java.util.List"
import { $PropertyDispatch$TriFunction$$Type } from "net.minecraft.data.models.blockstates.PropertyDispatch$TriFunction"
import { $Variant, $Variant$$Type } from "net.minecraft.data.models.blockstates.Variant"
import { $Comparable, $Comparable$$Type } from "java.lang.Comparable"
import { $PropertyDispatch } from "net.minecraft.data.models.blockstates.PropertyDispatch"
import { $Property } from "net.minecraft.world.level.block.state.properties.Property"

export class $PropertyDispatch$C3<T1 extends $Comparable<T1> = $Comparable<T1>, T2 extends $Comparable<T2> = $Comparable<T2>, T3 extends $Comparable<T3> = $Comparable<T3>> extends $PropertyDispatch {
public "generate"(triFunction0: $PropertyDispatch$TriFunction$$Type<T1, T2, T3, $Variant>): $PropertyDispatch
public "generateList"(triFunction0: $PropertyDispatch$TriFunction$$Type<T1, T2, T3, $List<$Variant>>): $PropertyDispatch
public "getDefinedProperties"(): $List<$Property<any>>
public "select"(t10: T1, t21: T2, t32: T3, variant3: $Variant$$Type): $PropertyDispatch$C3<T1, T2, T3>
public "select"(t10: T1, t21: T2, t32: T3, list3: $List$$Type<$Variant$$Type>): $PropertyDispatch$C3<T1, T2, T3>
get "definedProperties"(): $List<$Property<any>>
}
}

declare module "net.minecraft.data.models.blockstates.PropertyDispatch$C4" {
import { $List, $List$$Type } from "java.util.List"
import { $PropertyDispatch$QuadFunction$$Type } from "net.minecraft.data.models.blockstates.PropertyDispatch$QuadFunction"
import { $Variant, $Variant$$Type } from "net.minecraft.data.models.blockstates.Variant"
import { $Comparable, $Comparable$$Type } from "java.lang.Comparable"
import { $PropertyDispatch } from "net.minecraft.data.models.blockstates.PropertyDispatch"
import { $Property } from "net.minecraft.world.level.block.state.properties.Property"

export class $PropertyDispatch$C4<T1 extends $Comparable<T1> = $Comparable<T1>, T2 extends $Comparable<T2> = $Comparable<T2>, T3 extends $Comparable<T3> = $Comparable<T3>, T4 extends $Comparable<T4> = $Comparable<T4>> extends $PropertyDispatch {
public "generate"(quadFunction0: $PropertyDispatch$QuadFunction$$Type<T1, T2, T3, T4, $Variant>): $PropertyDispatch
public "generateList"(quadFunction0: $PropertyDispatch$QuadFunction$$Type<T1, T2, T3, T4, $List<$Variant>>): $PropertyDispatch
public "getDefinedProperties"(): $List<$Property<any>>
public "select"(t10: T1, t21: T2, t32: T3, t43: T4, variant4: $Variant$$Type): $PropertyDispatch$C4<T1, T2, T3, T4>
public "select"(t10: T1, t21: T2, t32: T3, t43: T4, list4: $List$$Type<$Variant$$Type>): $PropertyDispatch$C4<T1, T2, T3, T4>
get "definedProperties"(): $List<$Property<any>>
}
}

declare module "net.minecraft.data.models.blockstates.PropertyDispatch$C5" {
import { $List, $List$$Type } from "java.util.List"
import { $Variant, $Variant$$Type } from "net.minecraft.data.models.blockstates.Variant"
import { $Comparable, $Comparable$$Type } from "java.lang.Comparable"
import { $PropertyDispatch } from "net.minecraft.data.models.blockstates.PropertyDispatch"
import { $Property } from "net.minecraft.world.level.block.state.properties.Property"
import { $PropertyDispatch$PentaFunction$$Type } from "net.minecraft.data.models.blockstates.PropertyDispatch$PentaFunction"

export class $PropertyDispatch$C5<T1 extends $Comparable<T1> = $Comparable<T1>, T2 extends $Comparable<T2> = $Comparable<T2>, T3 extends $Comparable<T3> = $Comparable<T3>, T4 extends $Comparable<T4> = $Comparable<T4>, T5 extends $Comparable<T5> = $Comparable<T5>> extends $PropertyDispatch {
public "generate"(pentaFunction0: $PropertyDispatch$PentaFunction$$Type<T1, T2, T3, T4, T5, $Variant>): $PropertyDispatch
public "generateList"(pentaFunction0: $PropertyDispatch$PentaFunction$$Type<T1, T2, T3, T4, T5, $List<$Variant>>): $PropertyDispatch
public "getDefinedProperties"(): $List<$Property<any>>
public "select"(t10: T1, t21: T2, t32: T3, t43: T4, t54: T5, list5: $List$$Type<$Variant$$Type>): $PropertyDispatch$C5<T1, T2, T3, T4, T5>
public "select"(t10: T1, t21: T2, t32: T3, t43: T4, t54: T5, variant5: $Variant$$Type): $PropertyDispatch$C5<T1, T2, T3, T4, T5>
get "definedProperties"(): $List<$Property<any>>
}
}

declare module "net.minecraft.data.models.blockstates.PropertyDispatch$C1" {
import { $List, $List$$Type } from "java.util.List"
import { $Variant, $Variant$$Type } from "net.minecraft.data.models.blockstates.Variant"
import { $Comparable, $Comparable$$Type } from "java.lang.Comparable"
import { $PropertyDispatch } from "net.minecraft.data.models.blockstates.PropertyDispatch"
import { $Property } from "net.minecraft.world.level.block.state.properties.Property"
import { $Function$$Type } from "java.util.function.Function"

export class $PropertyDispatch$C1<T1 extends $Comparable<T1> = $Comparable<T1>> extends $PropertyDispatch {
public "generate"(function0: $Function$$Type<T1, $Variant>): $PropertyDispatch
public "generateList"(function0: $Function$$Type<T1, $List<$Variant>>): $PropertyDispatch
public "getDefinedProperties"(): $List<$Property<any>>
public "select"(t10: T1, list1: $List$$Type<$Variant$$Type>): $PropertyDispatch$C1<T1>
public "select"(t10: T1, variant1: $Variant$$Type): $PropertyDispatch$C1<T1>
get "definedProperties"(): $List<$Property<any>>
}
}

declare module "net.minecraft.data.models.blockstates.PropertyDispatch$C2" {
import { $List, $List$$Type } from "java.util.List"
import { $BiFunction$$Type } from "java.util.function.BiFunction"
import { $Variant, $Variant$$Type } from "net.minecraft.data.models.blockstates.Variant"
import { $Comparable, $Comparable$$Type } from "java.lang.Comparable"
import { $PropertyDispatch } from "net.minecraft.data.models.blockstates.PropertyDispatch"
import { $Property } from "net.minecraft.world.level.block.state.properties.Property"

export class $PropertyDispatch$C2<T1 extends $Comparable<T1> = $Comparable<T1>, T2 extends $Comparable<T2> = $Comparable<T2>> extends $PropertyDispatch {
public "generate"(biFunction0: $BiFunction$$Type<T1, T2, $Variant>): $PropertyDispatch
public "generateList"(biFunction0: $BiFunction$$Type<T1, T2, $List<$Variant>>): $PropertyDispatch
public "getDefinedProperties"(): $List<$Property<any>>
public "select"(t10: T1, t21: T2, variant2: $Variant$$Type): $PropertyDispatch$C2<T1, T2>
public "select"(t10: T1, t21: T2, list2: $List$$Type<$Variant$$Type>): $PropertyDispatch$C2<T1, T2>
get "definedProperties"(): $List<$Property<any>>
}
}

declare module "net.minecraft.data.models.blockstates.Condition$TerminalCondition" {
import { $JsonElement } from "com.google.gson.JsonElement"
import { $StateDefinition$$Type } from "net.minecraft.world.level.block.state.StateDefinition"
import { $Comparable, $Comparable$$Type } from "java.lang.Comparable"
import { $Property$$Type } from "net.minecraft.world.level.block.state.properties.Property"
import { $Condition, $Condition$$Type } from "net.minecraft.data.models.blockstates.Condition"

export class $Condition$TerminalCondition implements $Condition {
constructor()

public static "and"(...condition0s: $Condition$$Type[]): $Condition
public static "condition"(): $Condition$TerminalCondition
public "get"(): $JsonElement
public "negatedTerm"<T extends $Comparable<T>>(property0: $Property$$Type<T>, t1: T): $Condition$TerminalCondition
public "negatedTerm"<T extends $Comparable<T>>(property0: $Property$$Type<T>, t1: T, ...t2s: T[]): $Condition$TerminalCondition
public static "or"(...condition0s: $Condition$$Type[]): $Condition
public "term"<T extends $Comparable<T>>(property0: $Property$$Type<T>, t1: T): $Condition$TerminalCondition
public "term"<T extends $Comparable<T>>(property0: $Property$$Type<T>, t1: T, ...t2s: T[]): $Condition$TerminalCondition
public "validate"(stateDefinition0: $StateDefinition$$Type<any, any>): void
}
}

declare module "net.minecraft.data.tags.IntrinsicHolderTagsProvider" {
import { $CompletableFuture, $CompletableFuture$$Type } from "java.util.concurrent.CompletableFuture"
import { $HolderLookup$Provider$$Type } from "net.minecraft.core.HolderLookup$Provider"
import { $ResourceKey, $ResourceKey$$Type } from "net.minecraft.resources.ResourceKey"
import { $Function$$Type } from "java.util.function.Function"
import { $ExistingFileHelper$$Type } from "net.minecraftforge.common.data.ExistingFileHelper"
import { $CachedOutput$$Type } from "net.minecraft.data.CachedOutput"
import { $Registry } from "net.minecraft.core.Registry"
import { $JsonElement$$Type } from "com.google.gson.JsonElement"
import { $TagKey$$Type } from "net.minecraft.tags.TagKey"
import { $PackOutput$$Type } from "net.minecraft.data.PackOutput"
import { $IntrinsicHolderTagsProvider$IntrinsicTagAppender } from "net.minecraft.data.tags.IntrinsicHolderTagsProvider$IntrinsicTagAppender"
import { $TagsProvider$TagLookup$$Type } from "net.minecraft.data.tags.TagsProvider$TagLookup"
import { $TagsProvider } from "net.minecraft.data.tags.TagsProvider"
import { $Path$$Type } from "java.nio.file.Path"

export class $IntrinsicHolderTagsProvider<T = any> extends $TagsProvider<T> {
/** @deprecated */
constructor(packOutput0: $PackOutput$$Type, resourceKey1: $ResourceKey$$Type<$Registry<T>>, completableFuture2: $CompletableFuture$$Type<$HolderLookup$Provider$$Type>, function3: $Function$$Type<T, $ResourceKey<T>>)
constructor(packOutput0: $PackOutput$$Type, resourceKey1: $ResourceKey$$Type<$Registry<T>>, completableFuture2: $CompletableFuture$$Type<$HolderLookup$Provider$$Type>, completableFuture3: $CompletableFuture$$Type<$TagsProvider$TagLookup$$Type<T>>, function4: $Function$$Type<T, $ResourceKey<T>>, string5: string, existingFileHelper6: $ExistingFileHelper$$Type)
/** @deprecated */
constructor(packOutput0: $PackOutput$$Type, resourceKey1: $ResourceKey$$Type<$Registry<T>>, completableFuture2: $CompletableFuture$$Type<$HolderLookup$Provider$$Type>, completableFuture3: $CompletableFuture$$Type<$TagsProvider$TagLookup$$Type<T>>, function4: $Function$$Type<T, $ResourceKey<T>>)
constructor(packOutput0: $PackOutput$$Type, resourceKey1: $ResourceKey$$Type<$Registry<T>>, completableFuture2: $CompletableFuture$$Type<$HolderLookup$Provider$$Type>, function3: $Function$$Type<T, $ResourceKey<T>>, string4: string, existingFileHelper5: $ExistingFileHelper$$Type)

public static "saveStable"(cachedOutput0: $CachedOutput$$Type, jsonElement1: $JsonElement$$Type, path2: $Path$$Type): $CompletableFuture<any>
public "tag"(tagKey0: $TagKey$$Type<T>): $IntrinsicHolderTagsProvider$IntrinsicTagAppender<T>
}
}

declare module "net.minecraft.data.tags.TagsProvider$TagLookup" {
import { $TagKey, $TagKey$$Type } from "net.minecraft.tags.TagKey"
import { $TagBuilder, $TagBuilder$$Type } from "net.minecraft.tags.TagBuilder"
import { $Optional, $Optional$$Type } from "java.util.Optional"
import { $Function, $Function$$Type } from "java.util.function.Function"

export interface $TagsProvider$TagLookup<T = any> extends $Function<$TagKey<T>, $Optional<$TagBuilder>> {
"andThen"<V>(function0: $Function$$Type<$Optional$$Type<$TagBuilder$$Type>, V>): $Function<$TagKey<T>, V>
"apply"(tagKey0: $TagKey$$Type<T>): $Optional<$TagBuilder>
"compose"<V>(function0: $Function$$Type<V, $TagKey<T>>): $Function<V, $Optional<$TagBuilder>>
"contains"(tagKey0: $TagKey$$Type<T>): boolean
}

export namespace $TagsProvider$TagLookup {
function empty<T>(): $TagsProvider$TagLookup<T>
function identity<T>(): $Function<T, T>
}
export abstract class $TagsProvider$TagLookup$$Static<T = any> implements $TagsProvider$TagLookup<T> {
static "empty"<T>(): $TagsProvider$TagLookup<T>
static "identity"<T>(): $Function<T, T>
}
}

declare module "net.minecraft.data.recipes.ShapelessRecipeBuilder" {
import { $ResourceLocation, $ResourceLocation$$Type } from "net.minecraft.resources.ResourceLocation"
import { $TagKey$$Type } from "net.minecraft.tags.TagKey"
import { $Consumer$$Type } from "java.util.function.Consumer"
import { $CriterionTriggerInstance$$Type } from "net.minecraft.advancements.CriterionTriggerInstance"
import { $ItemLike$$Type } from "net.minecraft.world.level.ItemLike"
import { $CraftingRecipeBuilder } from "net.minecraft.data.recipes.CraftingRecipeBuilder"
import { $RecipeCategory$$Type } from "net.minecraft.data.recipes.RecipeCategory"
import { $Item, $Item$$Type } from "net.minecraft.world.item.Item"
import { $FinishedRecipe$$Type } from "net.minecraft.data.recipes.FinishedRecipe"
import { $RecipeBuilder } from "net.minecraft.data.recipes.RecipeBuilder"
import { $Ingredient$$Type } from "net.minecraft.world.item.crafting.Ingredient"

export class $ShapelessRecipeBuilder extends $CraftingRecipeBuilder implements $RecipeBuilder {
constructor(recipeCategory0: $RecipeCategory$$Type, itemLike1: $ItemLike$$Type, int2: integer)

public static "getDefaultRecipeId"(itemLike0: $ItemLike$$Type): $ResourceLocation
public "getResult"(): $Item
public "group"(string0: string): $ShapelessRecipeBuilder
public "requires"(itemLike0: $ItemLike$$Type): $ShapelessRecipeBuilder
public "requires"(itemLike0: $ItemLike$$Type, int1: integer): $ShapelessRecipeBuilder
public "requires"(tagKey0: $TagKey$$Type<$Item$$Type>): $ShapelessRecipeBuilder
public "requires"(ingredient0: $Ingredient$$Type): $ShapelessRecipeBuilder
public "requires"(ingredient0: $Ingredient$$Type, int1: integer): $ShapelessRecipeBuilder
public "save"(consumer0: $Consumer$$Type<$FinishedRecipe$$Type>, resourceLocation1: $ResourceLocation$$Type): void
public "save"(consumer0: $Consumer$$Type<$FinishedRecipe$$Type>, string1: string): void
public "save"(consumer0: $Consumer$$Type<$FinishedRecipe$$Type>): void
public static "shapeless"(recipeCategory0: $RecipeCategory$$Type, itemLike1: $ItemLike$$Type, int2: integer): $ShapelessRecipeBuilder
public static "shapeless"(recipeCategory0: $RecipeCategory$$Type, itemLike1: $ItemLike$$Type): $ShapelessRecipeBuilder
public "unlockedBy"(string0: string, criterionTriggerInstance1: $CriterionTriggerInstance$$Type): $ShapelessRecipeBuilder
get "result"(): $Item
}
}

declare module "net.minecraft.data.PackOutput$Target" {
import { $Enum } from "java.lang.Enum"

export class $PackOutput$Target extends $Enum<$PackOutput$Target> {
static readonly "DATA_PACK": $PackOutput$Target
static readonly "REPORTS": $PackOutput$Target
static readonly "RESOURCE_PACK": $PackOutput$Target

public static "valueOf"(string0: string): $PackOutput$Target
public static "values"(): $PackOutput$Target[]
}
}

declare module "net.minecraft.data.recipes.RecipeCategory" {
import { $Enum } from "java.lang.Enum"

export class $RecipeCategory extends $Enum<$RecipeCategory> {
static readonly "BREWING": $RecipeCategory
static readonly "BUILDING_BLOCKS": $RecipeCategory
static readonly "COMBAT": $RecipeCategory
static readonly "DECORATIONS": $RecipeCategory
static readonly "FOOD": $RecipeCategory
static readonly "MISC": $RecipeCategory
static readonly "REDSTONE": $RecipeCategory
static readonly "TOOLS": $RecipeCategory
static readonly "TRANSPORTATION": $RecipeCategory

public "getFolderName"(): string
public static "valueOf"(string0: string): $RecipeCategory
public static "values"(): $RecipeCategory[]
get "folderName"(): string
}
}

declare module "net.minecraft.data.BlockFamily" {
import { $FeatureFlagSet$$Type } from "net.minecraft.world.flag.FeatureFlagSet"
import { $Map } from "java.util.Map"
import { $Optional } from "java.util.Optional"
import { $Block } from "net.minecraft.world.level.block.Block"
import { $BlockFamily$Variant, $BlockFamily$Variant$$Type } from "net.minecraft.data.BlockFamily$Variant"

export class $BlockFamily {
public "get"(variant0: $BlockFamily$Variant$$Type): $Block
public "getBaseBlock"(): $Block
public "getRecipeGroupPrefix"(): $Optional<string>
public "getRecipeUnlockedBy"(): $Optional<string>
public "getVariants"(): $Map<$BlockFamily$Variant, $Block>
public "shouldGenerateModel"(): boolean
public "shouldGenerateRecipe"(featureFlagSet0: $FeatureFlagSet$$Type): boolean
get "baseBlock"(): $Block
get "recipeGroupPrefix"(): $Optional<string>
get "recipeUnlockedBy"(): $Optional<string>
get "variants"(): $Map<$BlockFamily$Variant, $Block>
}
}

declare module "net.minecraft.data.DataGenerator$PackGenerator" {
import { $PackOutput$$Type } from "net.minecraft.data.PackOutput"
import { $DataProvider$Factory$$Type } from "net.minecraft.data.DataProvider$Factory"
import { $DataGenerator$$Type } from "net.minecraft.data.DataGenerator"
import { $DataProvider, $DataProvider$$Type } from "net.minecraft.data.DataProvider"

export class $DataGenerator$PackGenerator {
constructor(dataGenerator0: $DataGenerator$$Type, boolean1: boolean, string2: string, packOutput3: $PackOutput$$Type)

public "addProvider"<T extends $DataProvider>(factory0: $DataProvider$Factory$$Type<T>): T
}
}

declare module "net.minecraft.data.recipes.RecipeProvider" {
import { $ResourceLocation$$Type } from "net.minecraft.resources.ResourceLocation"
import { $RecipeProviderAccessor } from "vazkii.botania.mixin.RecipeProviderAccessor"
import { $ShapedRecipeBuilder } from "net.minecraft.data.recipes.ShapedRecipeBuilder"
import { $Item$$Type } from "net.minecraft.world.item.Item"
import { $CompletableFuture } from "java.util.concurrent.CompletableFuture"
import { $RecipeBuilder } from "net.minecraft.data.recipes.RecipeBuilder"
import { $Ingredient$$Type } from "net.minecraft.world.item.crafting.Ingredient"
import { $TagKey$$Type } from "net.minecraft.tags.TagKey"
import { $JsonElement$$Type } from "com.google.gson.JsonElement"
import { $PackOutput$$Type } from "net.minecraft.data.PackOutput"
import { $Advancement$Builder$$Type } from "net.minecraft.advancements.Advancement$Builder"
import { $MinMaxBounds$Ints$$Type } from "net.minecraft.advancements.critereon.MinMaxBounds$Ints"
import { $ItemLike$$Type } from "net.minecraft.world.level.ItemLike"
import { $RecipeCategory$$Type } from "net.minecraft.data.recipes.RecipeCategory"
import { $AbstractCookingRecipe$$Type } from "net.minecraft.world.item.crafting.AbstractCookingRecipe"
import { $ItemPredicate$$Type } from "net.minecraft.advancements.critereon.ItemPredicate"
import { $Path$$Type } from "java.nio.file.Path"
import { $RecipeSerializer$$Type } from "net.minecraft.world.item.crafting.RecipeSerializer"
import { $InventoryChangeTrigger$TriggerInstance } from "net.minecraft.advancements.critereon.InventoryChangeTrigger$TriggerInstance"
import { $BlockFamily$$Type } from "net.minecraft.data.BlockFamily"
import { $FinishedRecipe$$Type } from "net.minecraft.data.recipes.FinishedRecipe"
import { $CachedOutput$$Type } from "net.minecraft.data.CachedOutput"
import { $Consumer$$Type } from "java.util.function.Consumer"
import { $EnterBlockTrigger$TriggerInstance } from "net.minecraft.advancements.critereon.EnterBlockTrigger$TriggerInstance"
import { $FeatureFlagSet$$Type } from "net.minecraft.world.flag.FeatureFlagSet"
import { $List$$Type } from "java.util.List"
import { $Block, $Block$$Type } from "net.minecraft.world.level.block.Block"
import { $BlockFamily$Variant$$Type } from "net.minecraft.data.BlockFamily$Variant"
import { $DataProvider } from "net.minecraft.data.DataProvider"

export class $RecipeProvider implements $DataProvider, $RecipeProviderAccessor {
constructor(packOutput0: $PackOutput$$Type)

public static "banner"(consumer0: $Consumer$$Type<$FinishedRecipe$$Type>, itemLike1: $ItemLike$$Type, itemLike2: $ItemLike$$Type): void
public static "bedFromPlanksAndWool"(consumer0: $Consumer$$Type<$FinishedRecipe$$Type>, itemLike1: $ItemLike$$Type, itemLike2: $ItemLike$$Type): void
public "buildAdvancement"(cachedOutput0: $CachedOutput$$Type, resourceLocation1: $ResourceLocation$$Type, builder2: $Advancement$Builder$$Type): $CompletableFuture<any>
public "buildRecipes"(consumer0: $Consumer$$Type<$FinishedRecipe$$Type>): void
public static "buttonBuilder"(itemLike0: $ItemLike$$Type, ingredient1: $Ingredient$$Type): $RecipeBuilder
public static "candle"(consumer0: $Consumer$$Type<$FinishedRecipe$$Type>, itemLike1: $ItemLike$$Type, itemLike2: $ItemLike$$Type): void
public static "carpet"(consumer0: $Consumer$$Type<$FinishedRecipe$$Type>, itemLike1: $ItemLike$$Type, itemLike2: $ItemLike$$Type): void
public static "chestBoat"(consumer0: $Consumer$$Type<$FinishedRecipe$$Type>, itemLike1: $ItemLike$$Type, itemLike2: $ItemLike$$Type): void
public static "chiseled"(consumer0: $Consumer$$Type<$FinishedRecipe$$Type>, recipeCategory1: $RecipeCategory$$Type, itemLike2: $ItemLike$$Type, itemLike3: $ItemLike$$Type): void
public static "chiseledBuilder"(recipeCategory0: $RecipeCategory$$Type, itemLike1: $ItemLike$$Type, ingredient2: $Ingredient$$Type): $ShapedRecipeBuilder
public static "colorBlockWithDye"(consumer0: $Consumer$$Type<$FinishedRecipe$$Type>, list1: $List$$Type<$Item$$Type>, list2: $List$$Type<$Item$$Type>, string3: string): void
public static "coloredTerracottaFromTerracottaAndDye"(consumer0: $Consumer$$Type<$FinishedRecipe$$Type>, itemLike1: $ItemLike$$Type, itemLike2: $ItemLike$$Type): void
public static "concretePowder"(consumer0: $Consumer$$Type<$FinishedRecipe$$Type>, itemLike1: $ItemLike$$Type, itemLike2: $ItemLike$$Type): void
public static "cookRecipes"(consumer0: $Consumer$$Type<$FinishedRecipe$$Type>, string1: string, recipeSerializer2: $RecipeSerializer$$Type<$AbstractCookingRecipe$$Type>, int3: integer): void
public static "copySmithingTemplate"(consumer0: $Consumer$$Type<$FinishedRecipe$$Type>, itemLike1: $ItemLike$$Type, tagKey2: $TagKey$$Type<$Item$$Type>): void
public static "copySmithingTemplate"(consumer0: $Consumer$$Type<$FinishedRecipe$$Type>, itemLike1: $ItemLike$$Type, itemLike2: $ItemLike$$Type): void
public static "cut"(consumer0: $Consumer$$Type<$FinishedRecipe$$Type>, recipeCategory1: $RecipeCategory$$Type, itemLike2: $ItemLike$$Type, itemLike3: $ItemLike$$Type): void
public static "cutBuilder"(recipeCategory0: $RecipeCategory$$Type, itemLike1: $ItemLike$$Type, ingredient2: $Ingredient$$Type): $ShapedRecipeBuilder
public static "doorBuilder"(itemLike0: $ItemLike$$Type, ingredient1: $Ingredient$$Type): $RecipeBuilder
public static "fenceBuilder"(itemLike0: $ItemLike$$Type, ingredient1: $Ingredient$$Type): $RecipeBuilder
public static "fenceGateBuilder"(itemLike0: $ItemLike$$Type, ingredient1: $Ingredient$$Type): $RecipeBuilder
public "generateForEnabledBlockFamilies"(consumer0: $Consumer$$Type<$FinishedRecipe$$Type>, featureFlagSet1: $FeatureFlagSet$$Type): void
public static "generateRecipes"(consumer0: $Consumer$$Type<$FinishedRecipe$$Type>, blockFamily1: $BlockFamily$$Type): void
public static "getBaseBlock"(blockFamily0: $BlockFamily$$Type, variant1: $BlockFamily$Variant$$Type): $Block
public static "getBlastingRecipeName"(itemLike0: $ItemLike$$Type): string
public static "getConversionRecipeName"(itemLike0: $ItemLike$$Type, itemLike1: $ItemLike$$Type): string
public static "getHasName"(itemLike0: $ItemLike$$Type): string
public static "getItemName"(itemLike0: $ItemLike$$Type): string
public "getName"(): string
public static "getSimpleRecipeName"(itemLike0: $ItemLike$$Type): string
public static "getSmeltingRecipeName"(itemLike0: $ItemLike$$Type): string
public static "hangingSign"(consumer0: $Consumer$$Type<$FinishedRecipe$$Type>, itemLike1: $ItemLike$$Type, itemLike2: $ItemLike$$Type): void
public static "has"(itemLike0: $ItemLike$$Type): $InventoryChangeTrigger$TriggerInstance
public static "has"(tagKey0: $TagKey$$Type<$Item$$Type>): $InventoryChangeTrigger$TriggerInstance
public static "has"(ints0: $MinMaxBounds$Ints$$Type, itemLike1: $ItemLike$$Type): $InventoryChangeTrigger$TriggerInstance
public static "insideOf"(block0: $Block$$Type): $EnterBlockTrigger$TriggerInstance
public static "inventoryTrigger"(...itemPredicate0s: $ItemPredicate$$Type[]): $InventoryChangeTrigger$TriggerInstance
public static "mosaicBuilder"(consumer0: $Consumer$$Type<$FinishedRecipe$$Type>, recipeCategory1: $RecipeCategory$$Type, itemLike2: $ItemLike$$Type, itemLike3: $ItemLike$$Type): void
public static "netheriteSmithing"(consumer0: $Consumer$$Type<$FinishedRecipe$$Type>, item1: $Item$$Type, recipeCategory2: $RecipeCategory$$Type, item3: $Item$$Type): void
public static "nineBlockStorageRecipes"(consumer0: $Consumer$$Type<$FinishedRecipe$$Type>, recipeCategory1: $RecipeCategory$$Type, itemLike2: $ItemLike$$Type, recipeCategory3: $RecipeCategory$$Type, itemLike4: $ItemLike$$Type): void
public static "nineBlockStorageRecipes"(consumer0: $Consumer$$Type<$FinishedRecipe$$Type>, recipeCategory1: $RecipeCategory$$Type, itemLike2: $ItemLike$$Type, recipeCategory3: $RecipeCategory$$Type, itemLike4: $ItemLike$$Type, string5: string, string6: string, string7: string, string8: string): void
public static "nineBlockStorageRecipesRecipesWithCustomUnpacking"(consumer0: $Consumer$$Type<$FinishedRecipe$$Type>, recipeCategory1: $RecipeCategory$$Type, itemLike2: $ItemLike$$Type, recipeCategory3: $RecipeCategory$$Type, itemLike4: $ItemLike$$Type, string5: string, string6: string): void
public static "nineBlockStorageRecipesWithCustomPacking"(consumer0: $Consumer$$Type<$FinishedRecipe$$Type>, recipeCategory1: $RecipeCategory$$Type, itemLike2: $ItemLike$$Type, recipeCategory3: $RecipeCategory$$Type, itemLike4: $ItemLike$$Type, string5: string, string6: string): void
public static "oneToOneConversionRecipe"(consumer0: $Consumer$$Type<$FinishedRecipe$$Type>, itemLike1: $ItemLike$$Type, itemLike2: $ItemLike$$Type, string3: string): void
public static "oneToOneConversionRecipe"(consumer0: $Consumer$$Type<$FinishedRecipe$$Type>, itemLike1: $ItemLike$$Type, itemLike2: $ItemLike$$Type, string3: string, int4: integer): void
public static "oreBlasting"(consumer0: $Consumer$$Type<$FinishedRecipe$$Type>, list1: $List$$Type<$ItemLike$$Type>, recipeCategory2: $RecipeCategory$$Type, itemLike3: $ItemLike$$Type, float4: float, int5: integer, string6: string): void
public static "oreCooking"(consumer0: $Consumer$$Type<$FinishedRecipe$$Type>, recipeSerializer1: $RecipeSerializer$$Type<$AbstractCookingRecipe$$Type>, list2: $List$$Type<$ItemLike$$Type>, recipeCategory3: $RecipeCategory$$Type, itemLike4: $ItemLike$$Type, float5: float, int6: integer, string7: string, string8: string): void
public static "oreSmelting"(consumer0: $Consumer$$Type<$FinishedRecipe$$Type>, list1: $List$$Type<$ItemLike$$Type>, recipeCategory2: $RecipeCategory$$Type, itemLike3: $ItemLike$$Type, float4: float, int5: integer, string6: string): void
public static "planksFromLog"(consumer0: $Consumer$$Type<$FinishedRecipe$$Type>, itemLike1: $ItemLike$$Type, tagKey2: $TagKey$$Type<$Item$$Type>, int3: integer): void
public static "planksFromLogs"(consumer0: $Consumer$$Type<$FinishedRecipe$$Type>, itemLike1: $ItemLike$$Type, tagKey2: $TagKey$$Type<$Item$$Type>, int3: integer): void
public static "polished"(consumer0: $Consumer$$Type<$FinishedRecipe$$Type>, recipeCategory1: $RecipeCategory$$Type, itemLike2: $ItemLike$$Type, itemLike3: $ItemLike$$Type): void
public static "polishedBuilder"(recipeCategory0: $RecipeCategory$$Type, itemLike1: $ItemLike$$Type, ingredient2: $Ingredient$$Type): $RecipeBuilder
public static "pressurePlate"(consumer0: $Consumer$$Type<$FinishedRecipe$$Type>, itemLike1: $ItemLike$$Type, itemLike2: $ItemLike$$Type): void
public static "pressurePlateBuilder"(recipeCategory0: $RecipeCategory$$Type, itemLike1: $ItemLike$$Type, ingredient2: $Ingredient$$Type): $RecipeBuilder
public "run"(cachedOutput0: $CachedOutput$$Type): $CompletableFuture<any>
public static "saveStable"(cachedOutput0: $CachedOutput$$Type, jsonElement1: $JsonElement$$Type, path2: $Path$$Type): $CompletableFuture<any>
public static "signBuilder"(itemLike0: $ItemLike$$Type, ingredient1: $Ingredient$$Type): $RecipeBuilder
public static "simpleCookingRecipe"(consumer0: $Consumer$$Type<$FinishedRecipe$$Type>, string1: string, recipeSerializer2: $RecipeSerializer$$Type<$AbstractCookingRecipe$$Type>, int3: integer, itemLike4: $ItemLike$$Type, itemLike5: $ItemLike$$Type, float6: float): void
public static "slab"(consumer0: $Consumer$$Type<$FinishedRecipe$$Type>, recipeCategory1: $RecipeCategory$$Type, itemLike2: $ItemLike$$Type, itemLike3: $ItemLike$$Type): void
public static "slabBuilder"(recipeCategory0: $RecipeCategory$$Type, itemLike1: $ItemLike$$Type, ingredient2: $Ingredient$$Type): $RecipeBuilder
public static "smeltingResultFromBase"(consumer0: $Consumer$$Type<$FinishedRecipe$$Type>, itemLike1: $ItemLike$$Type, itemLike2: $ItemLike$$Type): void
public static "stainedGlassFromGlassAndDye"(consumer0: $Consumer$$Type<$FinishedRecipe$$Type>, itemLike1: $ItemLike$$Type, itemLike2: $ItemLike$$Type): void
public static "stainedGlassPaneFromGlassPaneAndDye"(consumer0: $Consumer$$Type<$FinishedRecipe$$Type>, itemLike1: $ItemLike$$Type, itemLike2: $ItemLike$$Type): void
public static "stainedGlassPaneFromStainedGlass"(consumer0: $Consumer$$Type<$FinishedRecipe$$Type>, itemLike1: $ItemLike$$Type, itemLike2: $ItemLike$$Type): void
public static "stairBuilder"(itemLike0: $ItemLike$$Type, ingredient1: $Ingredient$$Type): $RecipeBuilder
public static "stonecutterResultFromBase"(consumer0: $Consumer$$Type<$FinishedRecipe$$Type>, recipeCategory1: $RecipeCategory$$Type, itemLike2: $ItemLike$$Type, itemLike3: $ItemLike$$Type): void
public static "stonecutterResultFromBase"(consumer0: $Consumer$$Type<$FinishedRecipe$$Type>, recipeCategory1: $RecipeCategory$$Type, itemLike2: $ItemLike$$Type, itemLike3: $ItemLike$$Type, int4: integer): void
public static "threeByThreePacker"(consumer0: $Consumer$$Type<$FinishedRecipe$$Type>, recipeCategory1: $RecipeCategory$$Type, itemLike2: $ItemLike$$Type, itemLike3: $ItemLike$$Type, string4: string): void
public static "threeByThreePacker"(consumer0: $Consumer$$Type<$FinishedRecipe$$Type>, recipeCategory1: $RecipeCategory$$Type, itemLike2: $ItemLike$$Type, itemLike3: $ItemLike$$Type): void
public static "trapdoorBuilder"(itemLike0: $ItemLike$$Type, ingredient1: $Ingredient$$Type): $RecipeBuilder
public static "trimSmithing"(consumer0: $Consumer$$Type<$FinishedRecipe$$Type>, item1: $Item$$Type, resourceLocation2: $ResourceLocation$$Type): void
public static "twoByTwoPacker"(consumer0: $Consumer$$Type<$FinishedRecipe$$Type>, recipeCategory1: $RecipeCategory$$Type, itemLike2: $ItemLike$$Type, itemLike3: $ItemLike$$Type): void
public static "wall"(consumer0: $Consumer$$Type<$FinishedRecipe$$Type>, recipeCategory1: $RecipeCategory$$Type, itemLike2: $ItemLike$$Type, itemLike3: $ItemLike$$Type): void
public static "wallBuilder"(recipeCategory0: $RecipeCategory$$Type, itemLike1: $ItemLike$$Type, ingredient2: $Ingredient$$Type): $RecipeBuilder
public static "waxRecipes"(consumer0: $Consumer$$Type<$FinishedRecipe$$Type>): void
public static "woodFromLogs"(consumer0: $Consumer$$Type<$FinishedRecipe$$Type>, itemLike1: $ItemLike$$Type, itemLike2: $ItemLike$$Type): void
public static "woodenBoat"(consumer0: $Consumer$$Type<$FinishedRecipe$$Type>, itemLike1: $ItemLike$$Type, itemLike2: $ItemLike$$Type): void
get "name"(): string
}
}

declare module "net.minecraft.data.PackOutput$PathProvider" {
import { $ResourceLocation$$Type } from "net.minecraft.resources.ResourceLocation"
import { $Path } from "java.nio.file.Path"

export class $PackOutput$PathProvider {
public "file"(resourceLocation0: $ResourceLocation$$Type, string1: string): $Path
public "json"(resourceLocation0: $ResourceLocation$$Type): $Path
}
}

declare module "net.minecraft.data.models.blockstates.BlockStateGenerator" {
import { $JsonElement } from "com.google.gson.JsonElement"
import { $Block } from "net.minecraft.world.level.block.Block"
import { $Supplier } from "java.util.function.Supplier"

export interface $BlockStateGenerator extends $Supplier<$JsonElement> {
"get"(): $JsonElement
"getBlock"(): $Block
get "block"(): $Block
}

export namespace $BlockStateGenerator {
const probejs$$marker: never
}
export abstract class $BlockStateGenerator$$Static implements $BlockStateGenerator {
}
}

declare module "net.minecraft.data.recipes.RecipeBuilder" {
import { $ResourceLocation, $ResourceLocation$$Type } from "net.minecraft.resources.ResourceLocation"
import { $Consumer$$Type } from "java.util.function.Consumer"
import { $CriterionTriggerInstance$$Type } from "net.minecraft.advancements.CriterionTriggerInstance"
import { $ItemLike$$Type } from "net.minecraft.world.level.ItemLike"
import { $Item } from "net.minecraft.world.item.Item"
import { $FinishedRecipe$$Type } from "net.minecraft.data.recipes.FinishedRecipe"

export interface $RecipeBuilder {
"getResult"(): $Item
"group"(string0: string): $RecipeBuilder
"save"(consumer0: $Consumer$$Type<$FinishedRecipe$$Type>, string1: string): void
"save"(consumer0: $Consumer$$Type<$FinishedRecipe$$Type>): void
"save"(consumer0: $Consumer$$Type<$FinishedRecipe$$Type>, resourceLocation1: $ResourceLocation$$Type): void
"unlockedBy"(string0: string, criterionTriggerInstance1: $CriterionTriggerInstance$$Type): $RecipeBuilder
get "result"(): $Item
}

export namespace $RecipeBuilder {
const ROOT_RECIPE_ADVANCEMENT: $ResourceLocation
function getDefaultRecipeId(itemLike0: $ItemLike$$Type): $ResourceLocation
}
export abstract class $RecipeBuilder$$Static implements $RecipeBuilder {
static readonly "ROOT_RECIPE_ADVANCEMENT": $ResourceLocation

static "getDefaultRecipeId"(itemLike0: $ItemLike$$Type): $ResourceLocation
}
}

declare module "net.minecraft.data.DataProvider" {
import { $JsonElement$$Type } from "com.google.gson.JsonElement"
import { $Logger } from "org.slf4j.Logger"
import { $ToIntFunction } from "java.util.function.ToIntFunction"
import { $CompletableFuture } from "java.util.concurrent.CompletableFuture"
import { $Comparator } from "java.util.Comparator"
import { $Path$$Type } from "java.nio.file.Path"
import { $CachedOutput$$Type } from "net.minecraft.data.CachedOutput"

export interface $DataProvider {
"getName"(): string
"run"(cachedOutput0: $CachedOutput$$Type): $CompletableFuture<any>
get "name"(): string
}

export namespace $DataProvider {
const FIXED_ORDER_FIELDS: $ToIntFunction<string>
const KEY_COMPARATOR: $Comparator<string>
const LOGGER: $Logger
function saveStable(cachedOutput0: $CachedOutput$$Type, jsonElement1: $JsonElement$$Type, path2: $Path$$Type): $CompletableFuture<any>
}
export abstract class $DataProvider$$Static implements $DataProvider {
static readonly "FIXED_ORDER_FIELDS": $ToIntFunction<string>
static readonly "KEY_COMPARATOR": $Comparator<string>
static readonly "LOGGER": $Logger

static "saveStable"(cachedOutput0: $CachedOutput$$Type, jsonElement1: $JsonElement$$Type, path2: $Path$$Type): $CompletableFuture<any>
}
}

declare module "net.minecraft.data.recipes.CraftingRecipeBuilder" {
import { $CraftingBookCategory } from "net.minecraft.world.item.crafting.CraftingBookCategory"
import { $RecipeCategory$$Type } from "net.minecraft.data.recipes.RecipeCategory"

export class $CraftingRecipeBuilder {
constructor()

public static "determineBookCategory"(recipeCategory0: $RecipeCategory$$Type): $CraftingBookCategory
}
}

declare module "net.minecraft.data.models.blockstates.PropertyDispatch" {
import { $PropertyDispatch$C3 } from "net.minecraft.data.models.blockstates.PropertyDispatch$C3"
import { $PropertyDispatch$C4 } from "net.minecraft.data.models.blockstates.PropertyDispatch$C4"
import { $Comparable, $Comparable$$Type } from "java.lang.Comparable"
import { $PropertyDispatch$C5 } from "net.minecraft.data.models.blockstates.PropertyDispatch$C5"
import { $Property$$Type } from "net.minecraft.world.level.block.state.properties.Property"
import { $PropertyDispatch$C1 } from "net.minecraft.data.models.blockstates.PropertyDispatch$C1"
import { $PropertyDispatch$C2 } from "net.minecraft.data.models.blockstates.PropertyDispatch$C2"

export class $PropertyDispatch {
constructor()

public static "properties"<T1 extends $Comparable<T1>, T2 extends $Comparable<T2>>(property0: $Property$$Type<T1>, property1: $Property$$Type<T2>): $PropertyDispatch$C2<T1, T2>
public static "properties"<T1 extends $Comparable<T1>, T2 extends $Comparable<T2>, T3 extends $Comparable<T3>, T4 extends $Comparable<T4>, T5 extends $Comparable<T5>>(property0: $Property$$Type<T1>, property1: $Property$$Type<T2>, property2: $Property$$Type<T3>, property3: $Property$$Type<T4>, property4: $Property$$Type<T5>): $PropertyDispatch$C5<T1, T2, T3, T4, T5>
public static "properties"<T1 extends $Comparable<T1>, T2 extends $Comparable<T2>, T3 extends $Comparable<T3>>(property0: $Property$$Type<T1>, property1: $Property$$Type<T2>, property2: $Property$$Type<T3>): $PropertyDispatch$C3<T1, T2, T3>
public static "properties"<T1 extends $Comparable<T1>, T2 extends $Comparable<T2>, T3 extends $Comparable<T3>, T4 extends $Comparable<T4>>(property0: $Property$$Type<T1>, property1: $Property$$Type<T2>, property2: $Property$$Type<T3>, property3: $Property$$Type<T4>): $PropertyDispatch$C4<T1, T2, T3, T4>
public static "property"<T1 extends $Comparable<T1>>(property0: $Property$$Type<T1>): $PropertyDispatch$C1<T1>
}
}

declare module "net.minecraft.data.PackOutput" {
import { $PackOutput$PathProvider } from "net.minecraft.data.PackOutput$PathProvider"
import { $PackOutput$Target$$Type } from "net.minecraft.data.PackOutput$Target"
import { $Path, $Path$$Type } from "java.nio.file.Path"

export class $PackOutput {
constructor(path0: $Path$$Type)

public "createPathProvider"(target0: $PackOutput$Target$$Type, string1: string): $PackOutput$PathProvider
public "getOutputFolder"(target0: $PackOutput$Target$$Type): $Path
public "getOutputFolder"(): $Path
get "outputFolder"(): $Path
}
}

declare module "net.minecraft.data.worldgen.BootstapContext" {
import { $Registry } from "net.minecraft.core.Registry"
import { $HolderLookup$RegistryLookup } from "net.minecraft.core.HolderLookup$RegistryLookup"
import { $Optional } from "java.util.Optional"
import { $Lifecycle$$Type } from "com.mojang.serialization.Lifecycle"
import { $HolderGetter } from "net.minecraft.core.HolderGetter"
import { $ResourceKey$$Type } from "net.minecraft.resources.ResourceKey"
import { $Holder$Reference } from "net.minecraft.core.Holder$Reference"

export interface $BootstapContext<T = any> {
"lookup"<S>(resourceKey0: $ResourceKey$$Type<$Registry<S>>): $HolderGetter<S>
"register"(resourceKey0: $ResourceKey$$Type<T>, t1: T, lifecycle2: $Lifecycle$$Type): $Holder$Reference<T>
"register"(resourceKey0: $ResourceKey$$Type<T>, t1: T): $Holder$Reference<T>
"registryLookup"<S>(resourceKey0: $ResourceKey$$Type<$Registry<S>>): $Optional<$HolderLookup$RegistryLookup<S>>
}

export namespace $BootstapContext {
const probejs$$marker: never
}
export abstract class $BootstapContext$$Static<T = any> implements $BootstapContext<T> {
}
}

declare module "net.minecraft.data.DataGenerator" {
import { $WorldVersion$$Type } from "net.minecraft.WorldVersion"
import { $PackOutput } from "net.minecraft.data.PackOutput"
import { $Map } from "java.util.Map"
import { $DataGenerator$PackGenerator } from "net.minecraft.data.DataGenerator$PackGenerator"
import { $DataProvider$Factory$$Type } from "net.minecraft.data.DataProvider$Factory"
import { $Path, $Path$$Type } from "java.nio.file.Path"
import { $DataProvider, $DataProvider$$Type } from "net.minecraft.data.DataProvider"

export class $DataGenerator {
readonly "rootOutputFolder": $Path

constructor(path0: $Path$$Type, worldVersion1: $WorldVersion$$Type, boolean2: boolean)

public "addProvider"<T extends $DataProvider>(boolean0: boolean, t1: T): T
public "addProvider"<T extends $DataProvider>(boolean0: boolean, factory1: $DataProvider$Factory$$Type<T>): T
public "getBuiltinDatapack"(boolean0: boolean, string1: string): $DataGenerator$PackGenerator
public "getPackOutput"(string0: string): $PackOutput
public "getPackOutput"(): $PackOutput
public "getProvidersView"(): $Map<string, $DataProvider>
public "getVanillaPack"(boolean0: boolean): $DataGenerator$PackGenerator
public "run"(): void
get "packOutput"(): $PackOutput
get "providersView"(): $Map<string, $DataProvider>
}
}

declare module "net.minecraft.data.models.blockstates.VariantProperty$Value" {
import { $JsonObject$$Type } from "com.google.gson.JsonObject"
import { $VariantProperty, $VariantProperty$$Type } from "net.minecraft.data.models.blockstates.VariantProperty"

export class $VariantProperty$Value {
constructor(variantProperty0: $VariantProperty$$Type, object1: any)

public "addToVariant"(jsonObject0: $JsonObject$$Type): void
public "getKey"(): $VariantProperty<T>
get "key"(): $VariantProperty<T>
}
}

declare module "net.minecraft.data.models.blockstates.Variant" {
import { $JsonElement } from "com.google.gson.JsonElement"
import { $List$$Type } from "java.util.List"
import { $VariantProperty$$Type } from "net.minecraft.data.models.blockstates.VariantProperty"
import { $Supplier } from "java.util.function.Supplier"

export class $Variant implements $Supplier<$JsonElement> {
constructor()

public static "convertList"(list0: $List$$Type<$Variant$$Type>): $JsonElement
public static "merge"(variant0: $Variant$$Type, variant1: $Variant$$Type): $Variant
public static "variant"(): $Variant
public "with"<T>(variantProperty0: $VariantProperty$$Type<T>, t1: T): $Variant
}
}

declare module "net.minecraft.data.recipes.FinishedRecipe" {
import { $ResourceLocation } from "net.minecraft.resources.ResourceLocation"
import { $JsonObject, $JsonObject$$Type } from "com.google.gson.JsonObject"
import { $RecipeSerializer } from "net.minecraft.world.item.crafting.RecipeSerializer"

export interface $FinishedRecipe {
"getAdvancementId"(): $ResourceLocation
"getId"(): $ResourceLocation
"getType"(): $RecipeSerializer<any>
"serializeAdvancement"(): $JsonObject
"serializeRecipe"(): $JsonObject
"serializeRecipeData"(jsonObject0: $JsonObject$$Type): void
get "advancementId"(): $ResourceLocation
get "id"(): $ResourceLocation
get "type"(): $RecipeSerializer<any>
}

export namespace $FinishedRecipe {
const probejs$$marker: never
}
export abstract class $FinishedRecipe$$Static implements $FinishedRecipe {
}
}

declare module "net.minecraft.data.loot.BlockLootSubProvider" {
import { $ResourceLocation$$Type } from "net.minecraft.resources.ResourceLocation"
import { $StringRepresentable, $StringRepresentable$$Type } from "net.minecraft.util.StringRepresentable"
import { $Item$$Type } from "net.minecraft.world.item.Item"
import { $LootTable$Builder, $LootTable$Builder$$Type } from "net.minecraft.world.level.storage.loot.LootTable$Builder"
import { $LootTableSubProvider } from "net.minecraft.data.loot.LootTableSubProvider"
import { $Property$$Type } from "net.minecraft.world.level.block.state.properties.Property"
import { $Function$$Type } from "java.util.function.Function"
import { $BlockLootSubProviderAccessor } from "com.simibubi.create.foundation.mixin.accessor.BlockLootSubProviderAccessor"
import { $FunctionUserBuilder, $FunctionUserBuilder$$Type } from "net.minecraft.world.level.storage.loot.functions.FunctionUserBuilder"
import { $NumberProvider$$Type } from "net.minecraft.world.level.storage.loot.providers.number.NumberProvider"
import { $BlockLootAccessor } from "com.aetherteam.aether.mixin.mixins.common.accessor.BlockLootAccessor"
import { $ItemLike$$Type } from "net.minecraft.world.level.ItemLike"
import { $BiConsumer$$Type } from "java.util.function.BiConsumer"
import { $Block$$Type } from "net.minecraft.world.level.block.Block"
import { $Comparable, $Comparable$$Type } from "java.lang.Comparable"
import { $LootItemCondition$Builder, $LootItemCondition$Builder$$Type } from "net.minecraft.world.level.storage.loot.predicates.LootItemCondition$Builder"
import { $LootPoolEntryContainer$Builder$$Type } from "net.minecraft.world.level.storage.loot.entries.LootPoolEntryContainer$Builder"
import { $ConditionUserBuilder, $ConditionUserBuilder$$Type } from "net.minecraft.world.level.storage.loot.predicates.ConditionUserBuilder"

export class $BlockLootSubProvider implements $LootTableSubProvider, $BlockLootAccessor, $BlockLootSubProviderAccessor {
static readonly "HAS_NO_SHEARS_OR_SILK_TOUCH": $LootItemCondition$Builder
static readonly "HAS_NO_SILK_TOUCH": $LootItemCondition$Builder
static readonly "HAS_SHEARS": $LootItemCondition$Builder
static readonly "HAS_SHEARS_OR_SILK_TOUCH": $LootItemCondition$Builder
static readonly "HAS_SILK_TOUCH": $LootItemCondition$Builder
static readonly "NORMAL_LEAVES_SAPLING_CHANCES": float[]
static readonly "NORMAL_LEAVES_STICK_CHANCES": float[]

public "add"(block0: $Block$$Type, builder1: $LootTable$Builder$$Type): void
public "add"(block0: $Block$$Type, function1: $Function$$Type<$Block$$Type, $LootTable$Builder>): void
public "addNetherVinesDropTable"(block0: $Block$$Type, block1: $Block$$Type): void
public "applyExplosionCondition"<T extends $ConditionUserBuilder<T>>(itemLike0: $ItemLike$$Type, conditionUserBuilder1: $ConditionUserBuilder$$Type<T>): T
public "applyExplosionDecay"<T extends $FunctionUserBuilder<T>>(itemLike0: $ItemLike$$Type, functionUserBuilder1: $FunctionUserBuilder$$Type<T>): T
public "createAttachedStemDrops"(block0: $Block$$Type, item1: $Item$$Type): $LootTable$Builder
public "createBannerDrop"(block0: $Block$$Type): $LootTable$Builder
public static "createBeeHiveDrop"(block0: $Block$$Type): $LootTable$Builder
public static "createBeeNestDrop"(block0: $Block$$Type): $LootTable$Builder
public static "createCandleCakeDrops"(block0: $Block$$Type): $LootTable$Builder
public "createCandleDrops"(block0: $Block$$Type): $LootTable$Builder
public static "createCaveVinesDrop"(block0: $Block$$Type): $LootTable$Builder
public "createCopperOreDrops"(block0: $Block$$Type): $LootTable$Builder
public "createCropDrops"(block0: $Block$$Type, item1: $Item$$Type, item2: $Item$$Type, builder3: $LootItemCondition$Builder$$Type): $LootTable$Builder
public "createDoorTable"(block0: $Block$$Type): $LootTable$Builder
public static "createDoublePlantShearsDrop"(block0: $Block$$Type): $LootTable$Builder
public "createDoublePlantWithSeedDrops"(block0: $Block$$Type, block1: $Block$$Type): $LootTable$Builder
public "createGrassDrops"(block0: $Block$$Type): $LootTable$Builder
public "createLapisOreDrops"(block0: $Block$$Type): $LootTable$Builder
public "createLeavesDrops"(block0: $Block$$Type, block1: $Block$$Type, ...float2s: float[]): $LootTable$Builder
public "createMangroveLeavesDrops"(block0: $Block$$Type): $LootTable$Builder
public "createMultifaceBlockDrops"(block0: $Block$$Type, builder1: $LootItemCondition$Builder$$Type): $LootTable$Builder
public "createMushroomBlockDrop"(block0: $Block$$Type, itemLike1: $ItemLike$$Type): $LootTable$Builder
public "createNameableBlockEntityTable"(block0: $Block$$Type): $LootTable$Builder
public "createOakLeavesDrops"(block0: $Block$$Type, block1: $Block$$Type, ...float2s: float[]): $LootTable$Builder
public "createOreDrop"(block0: $Block$$Type, item1: $Item$$Type): $LootTable$Builder
public "createPetalsDrops"(block0: $Block$$Type): $LootTable$Builder
public "createPotFlowerItemTable"(itemLike0: $ItemLike$$Type): $LootTable$Builder
public "createRedstoneOreDrops"(block0: $Block$$Type): $LootTable$Builder
public static "createSelfDropDispatchTable"(block0: $Block$$Type, builder1: $LootItemCondition$Builder$$Type, builder2: $LootPoolEntryContainer$Builder$$Type<any>): $LootTable$Builder
public static "createShearsDispatchTable"(block0: $Block$$Type, builder1: $LootPoolEntryContainer$Builder$$Type<any>): $LootTable$Builder
public static "createShearsOnlyDrop"(itemLike0: $ItemLike$$Type): $LootTable$Builder
public "createShulkerBoxDrop"(block0: $Block$$Type): $LootTable$Builder
public static "createSilkTouchDispatchTable"(block0: $Block$$Type, builder1: $LootPoolEntryContainer$Builder$$Type<any>): $LootTable$Builder
public static "createSilkTouchOnlyTable"(itemLike0: $ItemLike$$Type): $LootTable$Builder
public static "createSilkTouchOrShearsDispatchTable"(block0: $Block$$Type, builder1: $LootPoolEntryContainer$Builder$$Type<any>): $LootTable$Builder
public "createSingleItemTable"(itemLike0: $ItemLike$$Type, numberProvider1: $NumberProvider$$Type): $LootTable$Builder
public "createSingleItemTable"(itemLike0: $ItemLike$$Type): $LootTable$Builder
public "createSingleItemTableWithSilkTouch"(block0: $Block$$Type, itemLike1: $ItemLike$$Type, numberProvider2: $NumberProvider$$Type): $LootTable$Builder
public "createSingleItemTableWithSilkTouch"(block0: $Block$$Type, itemLike1: $ItemLike$$Type): $LootTable$Builder
public "createSinglePropConditionTable"<T extends ($Comparable<T> & $StringRepresentable)>(block0: $Block$$Type, property1: $Property$$Type<T>, t2: T): $LootTable$Builder
public "createSlabItemTable"(block0: $Block$$Type): $LootTable$Builder
public "createStemDrops"(block0: $Block$$Type, item1: $Item$$Type): $LootTable$Builder
public "dropOther"(block0: $Block$$Type, itemLike1: $ItemLike$$Type): void
public "dropPottedContents"(block0: $Block$$Type): void
public "dropSelf"(block0: $Block$$Type): void
public "dropWhenSilkTouch"(block0: $Block$$Type): void
public "generate"(biConsumer0: $BiConsumer$$Type<$ResourceLocation$$Type, $LootTable$Builder$$Type>): void
public "generate"(): void
public static "noDrop"(): $LootTable$Builder
public "otherWhenSilkTouch"(block0: $Block$$Type, block1: $Block$$Type): void
}
}

declare module "net.minecraft.data.models.blockstates.VariantProperty" {
import { $JsonElement } from "com.google.gson.JsonElement"
import { $VariantProperty$Value } from "net.minecraft.data.models.blockstates.VariantProperty$Value"
import { $Function$$Type } from "java.util.function.Function"

export class $VariantProperty<T = any> {
constructor(string0: string, function1: $Function$$Type<T, $JsonElement>)

public "withValue"(t0: T): $VariantProperty$Value<>
}
}

declare module "net.minecraft.data.models.blockstates.PropertyDispatch$PentaFunction" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $PropertyDispatch$PentaFunction<P1 = any, P2 = any, P3 = any, P4 = any, P5 = any, R = any> {
"apply"(p10: P1, p21: P2, p32: P3, p43: P4, p54: P5): R
}

export namespace $PropertyDispatch$PentaFunction {
const probejs$$marker: never
}
export abstract class $PropertyDispatch$PentaFunction$$Static<P1 = any, P2 = any, P3 = any, P4 = any, P5 = any, R = any> implements $PropertyDispatch$PentaFunction<P1, P2, P3, P4, P5, R> {
}
}

declare module "net.minecraft.data.BlockFamily$Variant" {
import { $Enum } from "java.lang.Enum"

export class $BlockFamily$Variant extends $Enum<$BlockFamily$Variant> {
static readonly "BUTTON": $BlockFamily$Variant
static readonly "CHISELED": $BlockFamily$Variant
static readonly "CRACKED": $BlockFamily$Variant
static readonly "CUSTOM_FENCE": $BlockFamily$Variant
static readonly "CUSTOM_FENCE_GATE": $BlockFamily$Variant
static readonly "CUT": $BlockFamily$Variant
static readonly "DOOR": $BlockFamily$Variant
static readonly "FENCE": $BlockFamily$Variant
static readonly "FENCE_GATE": $BlockFamily$Variant
static readonly "MOSAIC": $BlockFamily$Variant
static readonly "POLISHED": $BlockFamily$Variant
static readonly "PRESSURE_PLATE": $BlockFamily$Variant
static readonly "SIGN": $BlockFamily$Variant
static readonly "SLAB": $BlockFamily$Variant
static readonly "STAIRS": $BlockFamily$Variant
static readonly "TRAPDOOR": $BlockFamily$Variant
static readonly "WALL": $BlockFamily$Variant
static readonly "WALL_SIGN": $BlockFamily$Variant

public "getName"(): string
public static "valueOf"(string0: string): $BlockFamily$Variant
public static "values"(): $BlockFamily$Variant[]
get "name"(): string
}
}

declare module "net.minecraft.data.tags.IntrinsicHolderTagsProvider$IntrinsicTagAppender" {
import { $TagKey$$Type } from "net.minecraft.tags.TagKey"
import { $IForgeIntrinsicHolderTagAppender } from "net.minecraftforge.common.extensions.IForgeIntrinsicHolderTagAppender"
import { $ResourceKey } from "net.minecraft.resources.ResourceKey"
import { $TagsProvider$TagAppender } from "net.minecraft.data.tags.TagsProvider$TagAppender"

export class $IntrinsicHolderTagsProvider$IntrinsicTagAppender<T = any> extends $TagsProvider$TagAppender<T> implements $IForgeIntrinsicHolderTagAppender<T> {
public "add"(...t0s: T[]): $IntrinsicHolderTagsProvider$IntrinsicTagAppender<T>
public "add"(t0: T): $IntrinsicHolderTagsProvider$IntrinsicTagAppender<T>
public "addOptionalTag"(tagKey0: $TagKey$$Type<T>): $TagsProvider$TagAppender<T>
public "addOptionalTags"(...tagKey0s: $TagKey$$Type<T>[]): $TagsProvider$TagAppender<T>
public "getKey"(t0: T): $ResourceKey<T>
public "remove"(t0: T): $IntrinsicHolderTagsProvider$IntrinsicTagAppender<T>
public "remove"(t0: T, ...t1s: T[]): $IntrinsicHolderTagsProvider$IntrinsicTagAppender<T>
}
}

declare module "net.minecraft.data.models.blockstates.MultiPartGenerator" {
import { $BlockStateGenerator } from "net.minecraft.data.models.blockstates.BlockStateGenerator"
import { $List$$Type } from "java.util.List"
import { $Variant$$Type } from "net.minecraft.data.models.blockstates.Variant"
import { $Block, $Block$$Type } from "net.minecraft.world.level.block.Block"
import { $Condition$$Type } from "net.minecraft.data.models.blockstates.Condition"

export class $MultiPartGenerator implements $BlockStateGenerator {
public "getBlock"(): $Block
public static "multiPart"(block0: $Block$$Type): $MultiPartGenerator
public "with"(condition0: $Condition$$Type, variant1: $Variant$$Type): $MultiPartGenerator
public "with"(variant0: $Variant$$Type): $MultiPartGenerator
public "with"(condition0: $Condition$$Type, list1: $List$$Type<$Variant$$Type>): $MultiPartGenerator
public "with"(condition0: $Condition$$Type, ...variant1s: $Variant$$Type[]): $MultiPartGenerator
public "with"(list0: $List$$Type<$Variant$$Type>): $MultiPartGenerator
get "block"(): $Block
}
}

declare module "net.minecraft.data.tags.TagsProvider$TagAppender" {
import { $ResourceLocation$$Type } from "net.minecraft.resources.ResourceLocation"
import { $TagKey$$Type } from "net.minecraft.tags.TagKey"
import { $TagBuilder } from "net.minecraft.tags.TagBuilder"
import { $TagEntry$$Type } from "net.minecraft.tags.TagEntry"
import { $IForgeTagAppender } from "net.minecraftforge.common.extensions.IForgeTagAppender"
import { $ResourceKey$$Type } from "net.minecraft.resources.ResourceKey"
import { $TagAppenderAccessor } from "rbasamoyai.createbigcannons.mixin.TagAppenderAccessor"

export class $TagsProvider$TagAppender<T = any> implements $IForgeTagAppender<T>, $TagAppenderAccessor {
public "add"(...resourceKey0s: $ResourceKey$$Type<T>[]): $TagsProvider$TagAppender<T>
public "add"(resourceKey0: $ResourceKey$$Type<T>): $TagsProvider$TagAppender<T>
public "add"(tagEntry0: $TagEntry$$Type): $TagsProvider$TagAppender<T>
public "addOptional"(resourceLocation0: $ResourceLocation$$Type): $TagsProvider$TagAppender<T>
public "addOptionalTag"(resourceLocation0: $ResourceLocation$$Type): $TagsProvider$TagAppender<T>
public "addOptionalTag"(tagKey0: $TagKey$$Type<T>): $TagsProvider$TagAppender<T>
public "addOptionalTags"(...tagKey0s: $TagKey$$Type<T>[]): $TagsProvider$TagAppender<T>
public "addTag"(tagKey0: $TagKey$$Type<T>): $TagsProvider$TagAppender<T>
public "addTags"(...tagKey0s: $TagKey$$Type<T>[]): $TagsProvider$TagAppender<T>
public "getInternalBuilder"(): $TagBuilder
public "getModID"(): string
public "remove"(resourceKey0: $ResourceKey$$Type<T>): $TagsProvider$TagAppender<T>
public "remove"(resourceKey0: $ResourceKey$$Type<T>, ...resourceKey1s: $ResourceKey$$Type<T>[]): $TagsProvider$TagAppender<T>
public "remove"(tagKey0: $TagKey$$Type<T>): $TagsProvider$TagAppender<T>
public "remove"(tagKey0: $TagKey$$Type<T>, ...tagKey1s: $TagKey$$Type<T>[]): $TagsProvider$TagAppender<T>
public "remove"(resourceLocation0: $ResourceLocation$$Type, ...resourceLocation1s: $ResourceLocation$$Type[]): $TagsProvider$TagAppender<T>
public "remove"(resourceLocation0: $ResourceLocation$$Type): $TagsProvider$TagAppender<T>
public "replace"(): $TagsProvider$TagAppender<T>
public "replace"(boolean0: boolean): $TagsProvider$TagAppender<T>
get "internalBuilder"(): $TagBuilder
get "modID"(): string
}
}

declare module "net.minecraft.data.loot.EntityLootSubProvider" {
import { $ResourceLocation, $ResourceLocation$$Type } from "net.minecraft.resources.ResourceLocation"
import { $EntityType } from "net.minecraft.world.entity.EntityType"
import { $Map } from "java.util.Map"
import { $BiConsumer$$Type } from "java.util.function.BiConsumer"
import { $Set } from "java.util.Set"
import { $LootTable$Builder, $LootTable$Builder$$Type } from "net.minecraft.world.level.storage.loot.LootTable$Builder"
import { $LootTableSubProvider } from "net.minecraft.data.loot.LootTableSubProvider"

export class $EntityLootSubProvider implements $LootTableSubProvider {
static readonly "SPECIAL_LOOT_TABLE_TYPES": $Set<$EntityType<any>>
readonly "map": $Map<$EntityType<any>, $Map<$ResourceLocation, $LootTable$Builder>>

public "generate"(biConsumer0: $BiConsumer$$Type<$ResourceLocation$$Type, $LootTable$Builder$$Type>): void
public "generate"(): void
}
}

declare module "net.minecraft.data.loot.packs.VanillaBlockLoot" {
import { $BlockLootSubProvider } from "net.minecraft.data.loot.BlockLootSubProvider"

export class $VanillaBlockLoot extends $BlockLootSubProvider {
constructor()

}
}

declare module "net.minecraft.data.loot.packs.VanillaEntityLoot" {
import { $LootTable$Builder } from "net.minecraft.world.level.storage.loot.LootTable$Builder"
import { $EntityLootSubProvider } from "net.minecraft.data.loot.EntityLootSubProvider"

export class $VanillaEntityLoot extends $EntityLootSubProvider {
constructor()

public static "elderGuardianLootTable"(): $LootTable$Builder
}
}

declare module "net.minecraft.data.models.blockstates.PropertyDispatch$TriFunction" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $PropertyDispatch$TriFunction<P1 = any, P2 = any, P3 = any, R = any> {
"apply"(p10: P1, p21: P2, p32: P3): R
}

export namespace $PropertyDispatch$TriFunction {
const probejs$$marker: never
}
export abstract class $PropertyDispatch$TriFunction$$Static<P1 = any, P2 = any, P3 = any, R = any> implements $PropertyDispatch$TriFunction<P1, P2, P3, R> {
}
}

declare module "net.minecraft.data.models.blockstates.PropertyDispatch$QuadFunction" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $PropertyDispatch$QuadFunction<P1 = any, P2 = any, P3 = any, P4 = any, R = any> {
"apply"(p10: P1, p21: P2, p32: P3, p43: P4): R
}

export namespace $PropertyDispatch$QuadFunction {
const probejs$$marker: never
}
export abstract class $PropertyDispatch$QuadFunction$$Static<P1 = any, P2 = any, P3 = any, P4 = any, R = any> implements $PropertyDispatch$QuadFunction<P1, P2, P3, P4, R> {
}
}

declare module "net.minecraft.data.recipes.ShapedRecipeBuilder" {
import { $TagKey$$Type } from "net.minecraft.tags.TagKey"
import { $ResourceLocation, $ResourceLocation$$Type } from "net.minecraft.resources.ResourceLocation"
import { $Consumer$$Type } from "java.util.function.Consumer"
import { $ItemLike$$Type } from "net.minecraft.world.level.ItemLike"
import { $CraftingRecipeBuilder } from "net.minecraft.data.recipes.CraftingRecipeBuilder"
import { $RecipeCategory$$Type } from "net.minecraft.data.recipes.RecipeCategory"
import { $Item, $Item$$Type } from "net.minecraft.world.item.Item"
import { $FinishedRecipe$$Type } from "net.minecraft.data.recipes.FinishedRecipe"
import { $RecipeBuilder } from "net.minecraft.data.recipes.RecipeBuilder"
import { $Ingredient$$Type } from "net.minecraft.world.item.crafting.Ingredient"

export class $ShapedRecipeBuilder extends $CraftingRecipeBuilder implements $RecipeBuilder {
constructor(recipeCategory0: $RecipeCategory$$Type, itemLike1: $ItemLike$$Type, int2: integer)

public "define"(character0: character, itemLike1: $ItemLike$$Type): $ShapedRecipeBuilder
public "define"(character0: character, ingredient1: $Ingredient$$Type): $ShapedRecipeBuilder
public "define"(character0: character, tagKey1: $TagKey$$Type<$Item$$Type>): $ShapedRecipeBuilder
public static "getDefaultRecipeId"(itemLike0: $ItemLike$$Type): $ResourceLocation
public "getResult"(): $Item
public "group"(string0: string): $ShapedRecipeBuilder
public "pattern"(string0: string): $ShapedRecipeBuilder
public "save"(consumer0: $Consumer$$Type<$FinishedRecipe$$Type>, resourceLocation1: $ResourceLocation$$Type): void
public "save"(consumer0: $Consumer$$Type<$FinishedRecipe$$Type>, string1: string): void
public "save"(consumer0: $Consumer$$Type<$FinishedRecipe$$Type>): void
public static "shaped"(recipeCategory0: $RecipeCategory$$Type, itemLike1: $ItemLike$$Type, int2: integer): $ShapedRecipeBuilder
public static "shaped"(recipeCategory0: $RecipeCategory$$Type, itemLike1: $ItemLike$$Type): $ShapedRecipeBuilder
public "showNotification"(boolean0: boolean): $ShapedRecipeBuilder
get "result"(): $Item
}
}

declare module "net.minecraft.data.models.blockstates.Condition" {
import { $JsonElement } from "com.google.gson.JsonElement"
import { $StateDefinition$$Type } from "net.minecraft.world.level.block.state.StateDefinition"
import { $Supplier } from "java.util.function.Supplier"
import { $Condition$TerminalCondition } from "net.minecraft.data.models.blockstates.Condition$TerminalCondition"

export interface $Condition extends $Supplier<$JsonElement> {
"get"(): $JsonElement
"validate"(stateDefinition0: $StateDefinition$$Type<any, any>): void
}

export namespace $Condition {
function and(...condition0s: $Condition$$Type[]): $Condition
function condition(): $Condition$TerminalCondition
function or(...condition0s: $Condition$$Type[]): $Condition
}
export abstract class $Condition$$Static implements $Condition {
static "and"(...condition0s: $Condition$$Type[]): $Condition
static "condition"(): $Condition$TerminalCondition
static "or"(...condition0s: $Condition$$Type[]): $Condition
}
}

