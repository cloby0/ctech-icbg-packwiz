declare module "dev.latvian.mods.kubejs.recipe.CompostableRecipesEventJS" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $CompostableRecipesEventJS$$Type = ($CompostableRecipesEventJS);
}

declare module "dev.latvian.mods.kubejs.recipe.schema.minecraft.ShapelessRecipeSchema$ShapelessRecipeJS" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $ShapelessRecipeSchema$ShapelessRecipeJS$$Type = ($ShapelessRecipeSchema$ShapelessRecipeJS);
}

declare module "dev.latvian.mods.kubejs.recipe.component.ArrayRecipeComponent" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $ArrayRecipeComponent$$Type<T = any> = ($ArrayRecipeComponent<T>);
}

declare module "dev.latvian.mods.kubejs.recipe.JsonRecipeJS" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $JsonRecipeJS$$Type = ($JsonRecipeJS);
}

declare module "dev.latvian.mods.kubejs.recipe.component.ComponentRole" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $ComponentRole$$Type = ($ComponentRole | ("input" | "output" | "other"));
}

declare module "dev.latvian.mods.kubejs.recipe.schema.RecipeComponentFactory" {
import { $Context } from "dev.latvian.mods.rhino.Context"
import { $Map } from "java.util.Map"
import { $RecipeComponent$$Type } from "dev.latvian.mods.kubejs.recipe.component.RecipeComponent"
import { $Scriptable } from "dev.latvian.mods.rhino.Scriptable"

/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $RecipeComponentFactory$$Type = ($RecipeComponentFactory | ((arg0: $Context, arg1: $Scriptable, arg2: $Map<string, any>) => $RecipeComponent$$Type<any>));
}

declare module "dev.latvian.mods.kubejs.recipe.ReplacementMatch" {
import { $Ingredient$$Type } from "net.minecraft.world.item.crafting.Ingredient"

/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $ReplacementMatch$$Type = ($ReplacementMatch | $Ingredient$$Type);
}

declare module "dev.latvian.mods.kubejs.recipe.ModifyRecipeCraftingGrid" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $ModifyRecipeCraftingGrid$$Type = ($ModifyRecipeCraftingGrid);
}

declare module "dev.latvian.mods.kubejs.recipe.component.SimpleMappingRecipeComponent" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $SimpleMappingRecipeComponent$$Type<T = any> = ($SimpleMappingRecipeComponent<T>);
}

declare module "dev.latvian.mods.kubejs.recipe.RecipeKey" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $RecipeKey$$Type<T = any> = ($RecipeKey<T>);
}

declare module "dev.latvian.mods.kubejs.recipe.OutputReplacement" {
import { $OutputItem$$Type } from "dev.latvian.mods.kubejs.item.OutputItem"

/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $OutputReplacement$$Type = ($OutputReplacement | $OutputItem$$Type);
}

declare module "dev.latvian.mods.kubejs.recipe.schema.RecipeNamespace" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $RecipeNamespace$$Type = ($RecipeNamespace);
}

declare module "dev.latvian.mods.kubejs.recipe.filter.RecipeFilterParseEvent" {
import { $Context } from "dev.latvian.mods.rhino.Context"
import { $List } from "java.util.List"
import { $Map } from "java.util.Map"
import { $RecipeFilter } from "dev.latvian.mods.kubejs.recipe.filter.RecipeFilter"

/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $RecipeFilterParseEvent$$Type = ($RecipeFilterParseEvent | ((arg0: $Context, arg1: $List<$RecipeFilter>, arg2: $Map<any, any>) => void));
}

declare module "dev.latvian.mods.kubejs.recipe.OutputReplacementTransformer" {
import { $ReplacementMatch } from "dev.latvian.mods.kubejs.recipe.ReplacementMatch"
import { $OutputReplacement } from "dev.latvian.mods.kubejs.recipe.OutputReplacement"
import { $RecipeKJS } from "dev.latvian.mods.kubejs.core.RecipeKJS"

/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $OutputReplacementTransformer$$Type = ($OutputReplacementTransformer | ((arg0: $RecipeKJS, arg1: $ReplacementMatch, arg2: $OutputReplacement, arg3: $OutputReplacement) => any));
}

declare module "dev.latvian.mods.kubejs.recipe.InputReplacementTransformer" {
import { $InputReplacement } from "dev.latvian.mods.kubejs.recipe.InputReplacement"
import { $ReplacementMatch } from "dev.latvian.mods.kubejs.recipe.ReplacementMatch"
import { $RecipeKJS } from "dev.latvian.mods.kubejs.core.RecipeKJS"

/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $InputReplacementTransformer$$Type = ($InputReplacementTransformer | ((arg0: $RecipeKJS, arg1: $ReplacementMatch, arg2: $InputReplacement, arg3: $InputReplacement) => any));
}

declare module "dev.latvian.mods.kubejs.recipe.InputReplacement" {
import { $InputItem$$Type } from "dev.latvian.mods.kubejs.item.InputItem"

/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $InputReplacement$$Type = ($InputReplacement | $InputItem$$Type);
}

declare module "dev.latvian.mods.kubejs.recipe.component.RecipeComponentWithParent" {
import { $RecipeComponent$$Type } from "dev.latvian.mods.kubejs.recipe.component.RecipeComponent"

/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $RecipeComponentWithParent$$Type<T = any> = ($RecipeComponentWithParent<T> | (() => $RecipeComponent$$Type<T>));
}

declare module "dev.latvian.mods.kubejs.recipe.schema.RecipeConstructor$Factory" {
import { $ComponentValueMap } from "dev.latvian.mods.kubejs.recipe.component.ComponentValueMap"
import { $RecipeJS } from "dev.latvian.mods.kubejs.recipe.RecipeJS"
import { $RecipeSchemaType } from "dev.latvian.mods.kubejs.recipe.schema.RecipeSchemaType"
import { $RecipeKey } from "dev.latvian.mods.kubejs.recipe.RecipeKey"

/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $RecipeConstructor$Factory$$Type = ($RecipeConstructor$Factory | ((arg0: $RecipeJS, arg1: $RecipeSchemaType, arg2: $RecipeKey<any>[], arg3: $ComponentValueMap) => void));
}

declare module "dev.latvian.mods.kubejs.recipe.RecipeSchemaRegistryEventJS" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $RecipeSchemaRegistryEventJS$$Type = ($RecipeSchemaRegistryEventJS);
}

declare module "dev.latvian.mods.kubejs.recipe.component.RecipeComponentBuilderMap" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $RecipeComponentBuilderMap$$Type = ($RecipeComponentBuilderMap);
}

declare module "dev.latvian.mods.kubejs.recipe.schema.minecraft.ShapedRecipeSchema$ShapedRecipeJS" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $ShapedRecipeSchema$ShapedRecipeJS$$Type = ($ShapedRecipeSchema$ShapedRecipeJS);
}

declare module "dev.latvian.mods.kubejs.recipe.ingredientaction.IngredientActionFilter" {
import { $Ingredient$$Type } from "net.minecraft.world.item.crafting.Ingredient"

/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $IngredientActionFilter$$Type = ($IngredientActionFilter | integer | $Ingredient$$Type | {"item?": $Ingredient$$Type, "index?": integer});
}

declare module "dev.latvian.mods.kubejs.recipe.RecipesEventJS" {
import { $ResourceLocation } from "net.minecraft.resources.ResourceLocation"
import { $JsonObject$$Type } from "com.google.gson.JsonObject"
import { $Predicate$$Type } from "java.util.function.Predicate"
import { $Collection } from "java.util.Collection"
import { $RecipeTypeFunction } from "dev.latvian.mods.kubejs.recipe.RecipeTypeFunction"
import { $Callable$$Type } from "java.util.concurrent.Callable"
import { $OutputReplacement$$Type } from "dev.latvian.mods.kubejs.recipe.OutputReplacement"
import { $Runnable$$Type } from "java.lang.Runnable"
import { $RecipeFilter, $RecipeFilter$$Type } from "dev.latvian.mods.kubejs.recipe.filter.RecipeFilter"
import { $Consumer$$Type } from "java.util.function.Consumer"
import { $InputReplacement$$Type } from "dev.latvian.mods.kubejs.recipe.InputReplacement"
import { $RecipeJS, $RecipeJS$$Type } from "dev.latvian.mods.kubejs.recipe.RecipeJS"
import { $Stream } from "java.util.stream.Stream"
import { $AtomicInteger } from "java.util.concurrent.atomic.AtomicInteger"
import { $Map } from "java.util.Map"
import { $EventJS } from "dev.latvian.mods.kubejs.event.EventJS"
import { $ReplacementMatch$$Type } from "dev.latvian.mods.kubejs.recipe.ReplacementMatch"
import { $Pattern } from "java.util.regex.Pattern"
import { $RecipeKJS$$Type } from "dev.latvian.mods.kubejs.core.RecipeKJS"

export class $RecipesEventJS extends $EventJS {
static readonly "SKIP_ERROR": $Pattern
readonly "addedRecipes": $Collection<$RecipeJS>
readonly "blasting": $RecipeTypeFunction
readonly "campfireCooking": $RecipeTypeFunction
readonly "failedCount": $AtomicInteger
readonly "originalRecipes": $Map<$ResourceLocation, $RecipeJS>
readonly "shaped": $RecipeTypeFunction
readonly "shapeless": $RecipeTypeFunction
readonly "smelting": $RecipeTypeFunction
readonly "smithing": $RecipeTypeFunction
readonly "smithingTrim": $RecipeTypeFunction
readonly "smoking": $RecipeTypeFunction
readonly "stonecutting": $RecipeTypeFunction
readonly "takenIds": $Map<$ResourceLocation, $RecipeJS>

constructor()

public "addRecipe"(r: $RecipeJS$$Type, json: boolean): $RecipeJS
public "containsRecipe"(filter: $RecipeFilter$$Type): boolean
public "countRecipes"(filter: $RecipeFilter$$Type): integer
public "custom"(json: {"type": Special.RecipeSerializer, [x: string]: any} /* other recipe json elements are unknown to ProbeJS :( */): $RecipeJS
public "customFilter"(filter: $Predicate$$Type<$RecipeKJS$$Type>): $RecipeFilter
public "findRecipeIds"(filter: $RecipeFilter$$Type): $Collection<$ResourceLocation>
public "findRecipes"(filter: $RecipeFilter$$Type): $Collection<$RecipeJS>
public "forEachRecipe"(filter: $RecipeFilter$$Type, consumer: $Consumer$$Type<$RecipeJS$$Type>): void
public "getRecipeFunction"(id: string): $RecipeTypeFunction
public "getRecipes"(): $Map<string, any>
public "printAllTypes"(): void
public "printExamples"(type: string): void
public "printTypes"(): void
public "recipeStream"(filter: $RecipeFilter$$Type): $Stream<$RecipeJS>
public "remove"(filter: $RecipeFilter$$Type): void
public "replaceInput"(filter: $RecipeFilter$$Type, match: $ReplacementMatch$$Type, with_: $InputReplacement$$Type): void
public "replaceOutput"(filter: $RecipeFilter$$Type, match: $ReplacementMatch$$Type, with_: $OutputReplacement$$Type): void
public static "runInParallel"(runnable: $Runnable$$Type): void
public static "runInParallel"<T>(callable: $Callable$$Type<T>): T
public "setItemErrors"(b: boolean): void
public "stage"(filter: $RecipeFilter$$Type, stage: string): void
public "takeId"(recipe: $RecipeJS$$Type, prefix: string, ids: string): $ResourceLocation
get "recipes"(): $Map<string, any>
set "itemErrors"(value: boolean)
}
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $RecipesEventJS$$Type = ($RecipesEventJS);
}

declare module "dev.latvian.mods.kubejs.recipe.schema.RecipeConstructor" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $RecipeConstructor$$Type = ($RecipeConstructor);
}

declare module "dev.latvian.mods.kubejs.recipe.schema.RecipeOptional" {
import { $RecipeSchemaType } from "dev.latvian.mods.kubejs.recipe.schema.RecipeSchemaType"

/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $RecipeOptional$$Type<T = any> = ($RecipeOptional<T> | ((arg0: $RecipeSchemaType) => T));
}

declare module "dev.latvian.mods.kubejs.recipe.component.RecipeComponentValue" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $RecipeComponentValue$$Type<T = any> = ($RecipeComponentValue<T>);
}

declare module "dev.latvian.mods.kubejs.recipe.ingredientaction.CustomIngredientActionCallback" {
import { $InventoryKJS } from "dev.latvian.mods.kubejs.core.InventoryKJS"
import { $ItemStack, $ItemStack$$Type } from "net.minecraft.world.item.ItemStack"

/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $CustomIngredientActionCallback$$Type = ($CustomIngredientActionCallback | ((arg0: $ItemStack, arg1: integer, arg2: $InventoryKJS) => $ItemStack$$Type));
}

declare module "dev.latvian.mods.kubejs.recipe.schema.RecipeSchema" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $RecipeSchema$$Type = ($RecipeSchema);
}

declare module "dev.latvian.mods.kubejs.recipe.InputReplacementTransformer$Replacement" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $InputReplacementTransformer$Replacement$$Type = ($InputReplacementTransformer$Replacement);
}

declare module "dev.latvian.mods.kubejs.recipe.AfterRecipesLoadedEventJS" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $AfterRecipesLoadedEventJS$$Type = ($AfterRecipesLoadedEventJS);
}

declare module "dev.latvian.mods.kubejs.recipe.component.RecipeComponent" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $RecipeComponent$$Type<T = any> = ($RecipeComponent<T>);
}

declare module "dev.latvian.mods.kubejs.recipe.component.ComponentValueMap" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $ComponentValueMap$$Type = ($ComponentValueMap);
}

declare module "dev.latvian.mods.kubejs.recipe.component.AndRecipeComponent" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $AndRecipeComponent$$Type<A = any, B = any> = ($AndRecipeComponent<A, B>);
}

declare module "dev.latvian.mods.kubejs.recipe.schema.RecipeSchemaType" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $RecipeSchemaType$$Type = ($RecipeSchemaType);
}

declare module "dev.latvian.mods.kubejs.recipe.component.MappingRecipeComponent" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $MappingRecipeComponent$$Type<T = any> = ($MappingRecipeComponent<T>);
}

declare module "dev.latvian.mods.kubejs.recipe.OutputReplacementTransformer$Replacement" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $OutputReplacementTransformer$Replacement$$Type = ($OutputReplacementTransformer$Replacement);
}

declare module "dev.latvian.mods.kubejs.recipe.component.OrRecipeComponent" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $OrRecipeComponent$$Type<H = any, L = any> = ($OrRecipeComponent<H, L>);
}

declare module "dev.latvian.mods.kubejs.recipe.component.RecipeComponentBuilder" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $RecipeComponentBuilder$$Type = ($RecipeComponentBuilder);
}

declare module "dev.latvian.mods.kubejs.recipe.RecipeJS" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $RecipeJS$$Type = ($RecipeJS);
}

declare module "dev.latvian.mods.kubejs.recipe.ingredientaction.IngredientAction" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $IngredientAction$$Type = ($IngredientAction);
}

declare module "dev.latvian.mods.kubejs.recipe.filter.RecipeFilter" {
import { $OutputItem$$Type } from "dev.latvian.mods.kubejs.item.OutputItem"
import { $InputItem$$Type } from "dev.latvian.mods.kubejs.item.InputItem"
import { $RecipeKJS } from "dev.latvian.mods.kubejs.core.RecipeKJS"

/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $RecipeFilter$$Type = ($RecipeFilter | RegExp | "*" | "-" | $RecipeFilter$$Type[] | {"or?": $RecipeFilter$$Type, "not?": $RecipeFilter$$Type, "id?": Special.RecipeId, "type?": Special.RecipeType, "group?": string, "mod?": Special.Mod, "input?": $InputItem$$Type, "output?": $OutputItem$$Type} | ((arg0: $RecipeKJS) => boolean));
}

declare module "dev.latvian.mods.kubejs.recipe.RecipeTypeFunction" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $RecipeTypeFunction$$Type = ($RecipeTypeFunction);
}

declare module "dev.latvian.mods.kubejs.recipe.ModifyRecipeResultCallback" {
import { $ModifyRecipeCraftingGrid } from "dev.latvian.mods.kubejs.recipe.ModifyRecipeCraftingGrid"
import { $ItemStack, $ItemStack$$Type } from "net.minecraft.world.item.ItemStack"

/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $ModifyRecipeResultCallback$$Type = ($ModifyRecipeResultCallback | ((arg0: $ModifyRecipeCraftingGrid, arg1: $ItemStack) => $ItemStack$$Type));
}

declare module "dev.latvian.mods.kubejs.recipe.special.SpecialRecipeSerializerManager" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $SpecialRecipeSerializerManager$$Type = ($SpecialRecipeSerializerManager);
}

