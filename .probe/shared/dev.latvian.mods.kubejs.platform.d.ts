declare module "dev.latvian.mods.kubejs.platform.forge.IngredientForgeHelper" {
import { $InputItem } from "dev.latvian.mods.kubejs.item.InputItem"
import { $CreativeModeTab$$Type } from "net.minecraft.world.item.CreativeModeTab"
import { $Predicate$$Type } from "java.util.function.Predicate"
import { $UUID$$Type } from "java.util.UUID"
import { $ItemStack$$Type } from "net.minecraft.world.item.ItemStack"
import { $IngredientPlatformHelper } from "dev.latvian.mods.kubejs.platform.IngredientPlatformHelper"
import { $Pattern$$Type } from "java.util.regex.Pattern"
import { $Ingredient, $Ingredient$$Type } from "net.minecraft.world.item.crafting.Ingredient"

export class $IngredientForgeHelper implements $IngredientPlatformHelper {
constructor()

public "and"(ingredients: $Ingredient$$Type[]): $Ingredient
public "creativeTab"(tab: $CreativeModeTab$$Type): $Ingredient
public "custom"(parent: $Ingredient$$Type, uuid: $UUID$$Type): $Ingredient
public "custom"(parent: $Ingredient$$Type, predicate: $Predicate$$Type<$ItemStack$$Type>): $Ingredient
public static "get"(): $IngredientPlatformHelper
public "isWildcard"(ingredient: $Ingredient$$Type): boolean
public "mod"(mod: string): $Ingredient
public "or"(ingredients: $Ingredient$$Type[]): $Ingredient
public "regex"(pattern: $Pattern$$Type): $Ingredient
public static "register"(): void
public "stack"(ingredient: $Ingredient$$Type, count: integer): $InputItem
public "strongNBT"(item: $ItemStack$$Type): $Ingredient
public "subtract"(base: $Ingredient$$Type, subtracted: $Ingredient$$Type): $Ingredient
public "tag"(tag: string): $Ingredient
public "weakNBT"(item: $ItemStack$$Type): $Ingredient
public "wildcard"(): $Ingredient
}
}

declare module "dev.latvian.mods.kubejs.platform.IngredientPlatformHelper" {
import { $InputItem } from "dev.latvian.mods.kubejs.item.InputItem"
import { $CreativeModeTab$$Type } from "net.minecraft.world.item.CreativeModeTab"
import { $Predicate$$Type } from "java.util.function.Predicate"
import { $UUID$$Type } from "java.util.UUID"
import { $ItemStack$$Type } from "net.minecraft.world.item.ItemStack"
import { $Pattern$$Type } from "java.util.regex.Pattern"
import { $Lazy } from "dev.latvian.mods.kubejs.util.Lazy"
import { $Ingredient, $Ingredient$$Type } from "net.minecraft.world.item.crafting.Ingredient"

export interface $IngredientPlatformHelper {
"and"(ingredient0s: $Ingredient$$Type[]): $Ingredient
"creativeTab"(creativeModeTab0: $CreativeModeTab$$Type): $Ingredient
"custom"(ingredient0: $Ingredient$$Type, uUID1: $UUID$$Type): $Ingredient
"custom"(ingredient0: $Ingredient$$Type, predicate1: $Predicate$$Type<$ItemStack$$Type>): $Ingredient
"isWildcard"(ingredient0: $Ingredient$$Type): boolean
"mod"(string0: string): $Ingredient
"or"(ingredient0s: $Ingredient$$Type[]): $Ingredient
"regex"(pattern0: $Pattern$$Type): $Ingredient
"stack"(ingredient: $Ingredient$$Type, count: integer): $InputItem
"strongNBT"(itemStack0: $ItemStack$$Type): $Ingredient
"subtract"(ingredient0: $Ingredient$$Type, ingredient1: $Ingredient$$Type): $Ingredient
"tag"(tag: string): $Ingredient
"weakNBT"(itemStack0: $ItemStack$$Type): $Ingredient
"wildcard"(): $Ingredient
}

export namespace $IngredientPlatformHelper {
const INSTANCE: $Lazy<$IngredientPlatformHelper>
function get(): $IngredientPlatformHelper
}
export abstract class $IngredientPlatformHelper$$Static implements $IngredientPlatformHelper {
static readonly "INSTANCE": $Lazy<$IngredientPlatformHelper>

static "get"(): $IngredientPlatformHelper
}
}

