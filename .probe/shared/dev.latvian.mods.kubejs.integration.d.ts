declare module "dev.latvian.mods.kubejs.integration.forge.jei.AddJEIEventJS" {
import { $IJeiRuntime$$Type } from "mezz.jei.api.runtime.IJeiRuntime"
import { $IIngredientType$$Type } from "mezz.jei.api.ingredients.IIngredientType"
import { $Predicate$$Type } from "java.util.function.Predicate"
import { $EventJS } from "dev.latvian.mods.kubejs.event.EventJS"
import { $Function$$Type } from "java.util.function.Function"

export class $AddJEIEventJS<T = any> extends $EventJS {
constructor(r: $IJeiRuntime$$Type, t: $IIngredientType$$Type<T>, f: $Function$$Type<any, T>, i: $Predicate$$Type<T>)

public "add"(o: any): void
}
}

declare module "dev.latvian.mods.kubejs.integration.forge.jei.RemoveJEICategoriesEvent" {
import { $ResourceLocation, $ResourceLocation$$Type } from "net.minecraft.resources.ResourceLocation"
import { $IJeiRuntime$$Type } from "mezz.jei.api.runtime.IJeiRuntime"
import { $Predicate$$Type } from "java.util.function.Predicate"
import { $Collection } from "java.util.Collection"
import { $IRecipeCategory, $IRecipeCategory$$Type } from "mezz.jei.api.recipe.category.IRecipeCategory"
import { $EventJS } from "dev.latvian.mods.kubejs.event.EventJS"

export class $RemoveJEICategoriesEvent extends $EventJS {
constructor(r: $IJeiRuntime$$Type)

public "getCategories"(): $Collection<$IRecipeCategory<any>>
public "getCategoryIds"(): $Collection<$ResourceLocation>
public "remove"(...categoriesToYeet: $ResourceLocation$$Type[]): void
public "removeIf"(filter: $Predicate$$Type<$IRecipeCategory$$Type<any>>): void
get "categories"(): $Collection<$IRecipeCategory<any>>
get "categoryIds"(): $Collection<$ResourceLocation>
}
}

declare module "dev.latvian.mods.kubejs.integration.forge.jei.InformationJEIEventJS" {
import { $Component$$Type } from "net.minecraft.network.chat.Component"
import { $IIngredientType$$Type } from "mezz.jei.api.ingredients.IIngredientType"
import { $IRecipeRegistration$$Type } from "mezz.jei.api.registration.IRecipeRegistration"
import { $EventJS } from "dev.latvian.mods.kubejs.event.EventJS"
import { $Ingredient$$Type } from "net.minecraft.world.item.crafting.Ingredient"

export class $InformationJEIEventJS extends $EventJS {
constructor(reg: $IRecipeRegistration$$Type)

public "addFluid"(fluid: any, s: $Component$$Type[]): void
public "addForType"<T>(type: $IIngredientType$$Type<T>, o: any, s: $Component$$Type[]): void
public "addItem"(item: $Ingredient$$Type, s: $Component$$Type[]): void
}
}

declare module "dev.latvian.mods.kubejs.integration.forge.jei.JEISubtypesEventJS" {
import { $ISubtypeRegistration$$Type } from "mezz.jei.api.registration.ISubtypeRegistration"
import { $Item$$Type } from "net.minecraft.world.item.Item"
import { $EventJS } from "dev.latvian.mods.kubejs.event.EventJS"
import { $JEISubtypesEventJS$Interpreter$$Type } from "dev.latvian.mods.kubejs.integration.forge.jei.JEISubtypesEventJS$Interpreter"
import { $Ingredient$$Type } from "net.minecraft.world.item.crafting.Ingredient"

export class $JEISubtypesEventJS extends $EventJS {
constructor(r: $ISubtypeRegistration$$Type)

public "registerInterpreter"(item: $Item$$Type, interpreter: $JEISubtypesEventJS$Interpreter$$Type): void
public "useNBT"(items: $Ingredient$$Type): void
public "useNBTKey"(items: $Ingredient$$Type, key: string): void
}
}

declare module "dev.latvian.mods.kubejs.integration.forge.jei.RemoveJEIRecipesEvent" {
import { $ResourceLocation, $ResourceLocation$$Type } from "net.minecraft.resources.ResourceLocation"
import { $IJeiRuntime$$Type } from "mezz.jei.api.runtime.IJeiRuntime"
import { $Collection } from "java.util.Collection"
import { $IRecipeCategory } from "mezz.jei.api.recipe.category.IRecipeCategory"
import { $EventJS } from "dev.latvian.mods.kubejs.event.EventJS"

export class $RemoveJEIRecipesEvent extends $EventJS {
constructor(r: $IJeiRuntime$$Type)

public "getCategories"(): $Collection<$IRecipeCategory>
public "getCategoryIds"(): $Collection<$ResourceLocation>
public "remove"(category: $ResourceLocation$$Type, recipesToRemove: $ResourceLocation$$Type[]): void
get "categories"(): $Collection<$IRecipeCategory>
get "categoryIds"(): $Collection<$ResourceLocation>
}
}

declare module "dev.latvian.mods.kubejs.integration.forge.jei.HideCustomJEIEventJS" {
import { $IJeiRuntime$$Type } from "mezz.jei.api.runtime.IJeiRuntime"
import { $IIngredientType$$Type } from "mezz.jei.api.ingredients.IIngredientType"
import { $EventJS } from "dev.latvian.mods.kubejs.event.EventJS"
import { $HideJEIEventJS } from "dev.latvian.mods.kubejs.integration.forge.jei.HideJEIEventJS"

export class $HideCustomJEIEventJS extends $EventJS {
constructor(r: $IJeiRuntime$$Type)

public "get"(s: $IIngredientType$$Type): $HideJEIEventJS
}
}

declare module "dev.latvian.mods.kubejs.integration.forge.jei.JEISubtypesEventJS$Interpreter" {
import { $ItemStack, $ItemStack$$Type } from "net.minecraft.world.item.ItemStack"
import { $Function, $Function$$Type } from "java.util.function.Function"

export interface $JEISubtypesEventJS$Interpreter extends $Function<$ItemStack, any> {
"andThen"<V>(function0: $Function$$Type<any, V>): $Function<$ItemStack, V>
"apply"(itemStack0: $ItemStack$$Type): any
"compose"<V>(function0: $Function$$Type<V, $ItemStack>): $Function<V, any>
}

export namespace $JEISubtypesEventJS$Interpreter {
function identity<T>(): $Function<T, T>
}
export abstract class $JEISubtypesEventJS$Interpreter$$Static implements $JEISubtypesEventJS$Interpreter {
static "identity"<T>(): $Function<T, T>
}
}

declare module "dev.latvian.mods.kubejs.integration.forge.jei.HideJEIEventJS" {
import { $IJeiRuntime$$Type } from "mezz.jei.api.runtime.IJeiRuntime"
import { $IIngredientType$$Type } from "mezz.jei.api.ingredients.IIngredientType"
import { $Predicate, $Predicate$$Type } from "java.util.function.Predicate"
import { $Collection } from "java.util.Collection"
import { $EventJS } from "dev.latvian.mods.kubejs.event.EventJS"
import { $Function$$Type } from "java.util.function.Function"

export class $HideJEIEventJS<T = any> extends $EventJS {
constructor(r: $IJeiRuntime$$Type, t: $IIngredientType$$Type<T>, f: $Function$$Type<any, $Predicate<T>>, i: $Predicate$$Type<T>)

public "getAllIngredients"(): $Collection<T>
public "hide"(o: any): void
public "hideAll"(): void
get "allIngredients"(): $Collection<T>
}
}

