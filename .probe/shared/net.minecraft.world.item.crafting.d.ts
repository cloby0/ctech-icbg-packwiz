declare module "net.minecraft.world.item.crafting.ShulkerBoxColoring" {
import { $ResourceLocation, $ResourceLocation$$Type } from "net.minecraft.resources.ResourceLocation"
import { $CraftingBookCategory$$Type } from "net.minecraft.world.item.crafting.CraftingBookCategory"
import { $RecipeSerializer } from "net.minecraft.world.item.crafting.RecipeSerializer"
import { $RegistryAccess$$Type } from "net.minecraft.core.RegistryAccess"
import { $RecipeSchema } from "dev.latvian.mods.kubejs.recipe.schema.RecipeSchema"
import { $OutputReplacement$$Type } from "dev.latvian.mods.kubejs.recipe.OutputReplacement"
import { $CustomRecipe } from "net.minecraft.world.item.crafting.CustomRecipe"
import { $Ingredient } from "net.minecraft.world.item.crafting.Ingredient"
import { $InputReplacement$$Type } from "dev.latvian.mods.kubejs.recipe.InputReplacement"
import { $CraftingContainer$$Type } from "net.minecraft.world.inventory.CraftingContainer"
import { $NonNullList } from "net.minecraft.core.NonNullList"
import { $ReplacementMatch$$Type } from "dev.latvian.mods.kubejs.recipe.ReplacementMatch"
import { $ItemStack } from "net.minecraft.world.item.ItemStack"
import { $Level$$Type } from "net.minecraft.world.level.Level"

export class $ShulkerBoxColoring extends $CustomRecipe {
constructor(resourceLocation0: $ResourceLocation$$Type, craftingBookCategory1: $CraftingBookCategory$$Type)

public "assemble"(craftingContainer0: $CraftingContainer$$Type, registryAccess1: $RegistryAccess$$Type): $ItemStack
public "canCraftInDimensions"(int0: integer, int1: integer): boolean
public "getGroup"(): string
public "getIngredients"(): $NonNullList<$Ingredient>
public "getMod"(): string
public "getOrCreateId"(): $ResourceLocation
public "getRemainingItems"(craftingContainer0: $CraftingContainer$$Type): $NonNullList<$ItemStack>
public "getSchema"(): $RecipeSchema
public "getSerializer"(): $RecipeSerializer<any>
public "getToastSymbol"(): $ItemStack
public "getType"(): $ResourceLocation
public "hasInput"(match: $ReplacementMatch$$Type): boolean
public "hasOutput"(match: $ReplacementMatch$$Type): boolean
public "isIncomplete"(): boolean
public "matches"(craftingContainer0: $CraftingContainer$$Type, level1: $Level$$Type): boolean
public "replaceInput"(match: $ReplacementMatch$$Type, with_: $InputReplacement$$Type): boolean
public "replaceOutput"(match: $ReplacementMatch$$Type, with_: $OutputReplacement$$Type): boolean
public "setGroup"(group: string): void
public "showNotification"(): boolean
get "group"(): string
get "ingredients"(): $NonNullList<$Ingredient>
get "mod"(): string
get "orCreateId"(): $ResourceLocation
get "schema"(): $RecipeSchema
get "serializer"(): $RecipeSerializer<any>
get "toastSymbol"(): $ItemStack
get "type"(): $ResourceLocation
get "incomplete"(): boolean
set "group"(value: string)
}
}

declare module "net.minecraft.world.item.crafting.RepairItemRecipe" {
import { $ResourceLocation, $ResourceLocation$$Type } from "net.minecraft.resources.ResourceLocation"
import { $CraftingBookCategory$$Type } from "net.minecraft.world.item.crafting.CraftingBookCategory"
import { $RecipeSerializer } from "net.minecraft.world.item.crafting.RecipeSerializer"
import { $RegistryAccess$$Type } from "net.minecraft.core.RegistryAccess"
import { $RecipeSchema } from "dev.latvian.mods.kubejs.recipe.schema.RecipeSchema"
import { $OutputReplacement$$Type } from "dev.latvian.mods.kubejs.recipe.OutputReplacement"
import { $CustomRecipe } from "net.minecraft.world.item.crafting.CustomRecipe"
import { $Ingredient } from "net.minecraft.world.item.crafting.Ingredient"
import { $CallbackInfoReturnable$$Type } from "org.spongepowered.asm.mixin.injection.callback.CallbackInfoReturnable"
import { $InputReplacement$$Type } from "dev.latvian.mods.kubejs.recipe.InputReplacement"
import { $CraftingContainer$$Type } from "net.minecraft.world.inventory.CraftingContainer"
import { $NonNullList } from "net.minecraft.core.NonNullList"
import { $ReplacementMatch$$Type } from "dev.latvian.mods.kubejs.recipe.ReplacementMatch"
import { $ItemStack, $ItemStack$$Type } from "net.minecraft.world.item.ItemStack"
import { $Level$$Type } from "net.minecraft.world.level.Level"

export class $RepairItemRecipe extends $CustomRecipe {
constructor(resourceLocation0: $ResourceLocation$$Type, craftingBookCategory1: $CraftingBookCategory$$Type)

public "assemble"(craftingContainer0: $CraftingContainer$$Type, registryAccess1: $RegistryAccess$$Type): $ItemStack
public "canCraftInDimensions"(int0: integer, int1: integer): boolean
public "getGroup"(): string
public "getIngredients"(): $NonNullList<$Ingredient>
public "getMod"(): string
public "getOrCreateId"(): $ResourceLocation
public "getRemainingItems"(craftingContainer0: $CraftingContainer$$Type): $NonNullList
public "getSchema"(): $RecipeSchema
public "getSerializer"(): $RecipeSerializer<any>
public "getToastSymbol"(): $ItemStack
public "getType"(): $ResourceLocation
public "handler$gck000$gtceu$matches"(craftingContainer0: $CraftingContainer$$Type, level1: $Level$$Type, callbackInfoReturnable2: $CallbackInfoReturnable$$Type, itemStack3: $ItemStack$$Type, itemStack4: $ItemStack$$Type): void
public "hasInput"(match: $ReplacementMatch$$Type): boolean
public "hasOutput"(match: $ReplacementMatch$$Type): boolean
public "isIncomplete"(): boolean
public "matches"(craftingContainer0: $CraftingContainer$$Type, level1: $Level$$Type): boolean
public "replaceInput"(match: $ReplacementMatch$$Type, with_: $InputReplacement$$Type): boolean
public "replaceOutput"(match: $ReplacementMatch$$Type, with_: $OutputReplacement$$Type): boolean
public "setGroup"(group: string): void
public "showNotification"(): boolean
get "group"(): string
get "ingredients"(): $NonNullList<$Ingredient>
get "mod"(): string
get "orCreateId"(): $ResourceLocation
get "schema"(): $RecipeSchema
get "serializer"(): $RecipeSerializer<any>
get "toastSymbol"(): $ItemStack
get "type"(): $ResourceLocation
get "incomplete"(): boolean
set "group"(value: string)
}
}

declare module "net.minecraft.world.item.crafting.ShapelessRecipe" {
import { $ResourceLocation, $ResourceLocation$$Type } from "net.minecraft.resources.ResourceLocation"
import { $CraftingBookCategory, $CraftingBookCategory$$Type } from "net.minecraft.world.item.crafting.CraftingBookCategory"
import { $CraftingRecipe } from "net.minecraft.world.item.crafting.CraftingRecipe"
import { $RecipeSerializer } from "net.minecraft.world.item.crafting.RecipeSerializer"
import { $RegistryAccess$$Type } from "net.minecraft.core.RegistryAccess"
import { $RecipeSchema } from "dev.latvian.mods.kubejs.recipe.schema.RecipeSchema"
import { $OutputReplacement$$Type } from "dev.latvian.mods.kubejs.recipe.OutputReplacement"
import { $Ingredient, $Ingredient$$Type } from "net.minecraft.world.item.crafting.Ingredient"
import { $InputReplacement$$Type } from "dev.latvian.mods.kubejs.recipe.InputReplacement"
import { $CraftingContainer$$Type } from "net.minecraft.world.inventory.CraftingContainer"
import { $NonNullList, $NonNullList$$Type } from "net.minecraft.core.NonNullList"
import { $ReplacementMatch$$Type } from "dev.latvian.mods.kubejs.recipe.ReplacementMatch"
import { $ItemStack, $ItemStack$$Type } from "net.minecraft.world.item.ItemStack"
import { $Level$$Type } from "net.minecraft.world.level.Level"

export class $ShapelessRecipe implements $CraftingRecipe {
readonly "group": string
readonly "ingredients": $NonNullList<$Ingredient>
readonly "result": $ItemStack

constructor(resourceLocation0: $ResourceLocation$$Type, string1: string, craftingBookCategory2: $CraftingBookCategory$$Type, itemStack3: $ItemStack$$Type, nonNullList4: $NonNullList$$Type<$Ingredient$$Type>)

public "assemble"(craftingContainer0: $CraftingContainer$$Type, registryAccess1: $RegistryAccess$$Type): $ItemStack
public "canCraftInDimensions"(int0: integer, int1: integer): boolean
public "category"(): $CraftingBookCategory
public "getGroup"(): string
public "getId"(): $ResourceLocation
public "getIngredients"(): $NonNullList<$Ingredient>
public "getMod"(): string
public "getOrCreateId"(): $ResourceLocation
public "getRemainingItems"(craftingContainer0: $CraftingContainer$$Type): $NonNullList<$ItemStack>
public "getResultItem"(registryAccess0: $RegistryAccess$$Type): $ItemStack
public "getSchema"(): $RecipeSchema
public "getSerializer"(): $RecipeSerializer<any>
public "getToastSymbol"(): $ItemStack
public "getType"(): $ResourceLocation
public "hasInput"(match: $ReplacementMatch$$Type): boolean
public "hasOutput"(match: $ReplacementMatch$$Type): boolean
public "isIncomplete"(): boolean
public "isSpecial"(): boolean
public "matches"(craftingContainer0: $CraftingContainer$$Type, level1: $Level$$Type): boolean
public "replaceInput"(match: $ReplacementMatch$$Type, with_: $InputReplacement$$Type): boolean
public "replaceOutput"(match: $ReplacementMatch$$Type, with_: $OutputReplacement$$Type): boolean
public "setGroup"(group: string): void
public "showNotification"(): boolean
get "id"(): $ResourceLocation
get "mod"(): string
get "orCreateId"(): $ResourceLocation
get "schema"(): $RecipeSchema
get "serializer"(): $RecipeSerializer<any>
get "toastSymbol"(): $ItemStack
get "type"(): $ResourceLocation
get "incomplete"(): boolean
get "special"(): boolean
}
}

declare module "net.minecraft.world.item.crafting.DecoratedPotRecipe" {
import { $ResourceLocation, $ResourceLocation$$Type } from "net.minecraft.resources.ResourceLocation"
import { $CraftingBookCategory$$Type } from "net.minecraft.world.item.crafting.CraftingBookCategory"
import { $DecoratedPotBlockEntity$Decorations$$Type } from "net.minecraft.world.level.block.entity.DecoratedPotBlockEntity$Decorations"
import { $RecipeSerializer } from "net.minecraft.world.item.crafting.RecipeSerializer"
import { $RegistryAccess$$Type } from "net.minecraft.core.RegistryAccess"
import { $RecipeSchema } from "dev.latvian.mods.kubejs.recipe.schema.RecipeSchema"
import { $OutputReplacement$$Type } from "dev.latvian.mods.kubejs.recipe.OutputReplacement"
import { $CustomRecipe } from "net.minecraft.world.item.crafting.CustomRecipe"
import { $Ingredient } from "net.minecraft.world.item.crafting.Ingredient"
import { $InputReplacement$$Type } from "dev.latvian.mods.kubejs.recipe.InputReplacement"
import { $CraftingContainer$$Type } from "net.minecraft.world.inventory.CraftingContainer"
import { $NonNullList } from "net.minecraft.core.NonNullList"
import { $ReplacementMatch$$Type } from "dev.latvian.mods.kubejs.recipe.ReplacementMatch"
import { $ItemStack } from "net.minecraft.world.item.ItemStack"
import { $Level$$Type } from "net.minecraft.world.level.Level"

export class $DecoratedPotRecipe extends $CustomRecipe {
constructor(resourceLocation0: $ResourceLocation$$Type, craftingBookCategory1: $CraftingBookCategory$$Type)

public "assemble"(craftingContainer0: $CraftingContainer$$Type, registryAccess1: $RegistryAccess$$Type): $ItemStack
public "canCraftInDimensions"(int0: integer, int1: integer): boolean
public static "createDecoratedPotItem"(decorations0: $DecoratedPotBlockEntity$Decorations$$Type): $ItemStack
public "getGroup"(): string
public "getIngredients"(): $NonNullList<$Ingredient>
public "getMod"(): string
public "getOrCreateId"(): $ResourceLocation
public "getRemainingItems"(craftingContainer0: $CraftingContainer$$Type): $NonNullList<$ItemStack>
public "getSchema"(): $RecipeSchema
public "getSerializer"(): $RecipeSerializer<any>
public "getToastSymbol"(): $ItemStack
public "getType"(): $ResourceLocation
public "hasInput"(match: $ReplacementMatch$$Type): boolean
public "hasOutput"(match: $ReplacementMatch$$Type): boolean
public "isIncomplete"(): boolean
public "matches"(craftingContainer0: $CraftingContainer$$Type, level1: $Level$$Type): boolean
public "replaceInput"(match: $ReplacementMatch$$Type, with_: $InputReplacement$$Type): boolean
public "replaceOutput"(match: $ReplacementMatch$$Type, with_: $OutputReplacement$$Type): boolean
public "setGroup"(group: string): void
public "showNotification"(): boolean
get "group"(): string
get "ingredients"(): $NonNullList<$Ingredient>
get "mod"(): string
get "orCreateId"(): $ResourceLocation
get "schema"(): $RecipeSchema
get "serializer"(): $RecipeSerializer<any>
get "toastSymbol"(): $ItemStack
get "type"(): $ResourceLocation
get "incomplete"(): boolean
set "group"(value: string)
}
}

declare module "net.minecraft.world.item.crafting.FireworkStarRecipe" {
import { $ResourceLocation, $ResourceLocation$$Type } from "net.minecraft.resources.ResourceLocation"
import { $CraftingBookCategory$$Type } from "net.minecraft.world.item.crafting.CraftingBookCategory"
import { $RecipeSerializer } from "net.minecraft.world.item.crafting.RecipeSerializer"
import { $Item } from "net.minecraft.world.item.Item"
import { $RegistryAccess$$Type } from "net.minecraft.core.RegistryAccess"
import { $RecipeSchema } from "dev.latvian.mods.kubejs.recipe.schema.RecipeSchema"
import { $OutputReplacement$$Type } from "dev.latvian.mods.kubejs.recipe.OutputReplacement"
import { $CustomRecipe } from "net.minecraft.world.item.crafting.CustomRecipe"
import { $Ingredient } from "net.minecraft.world.item.crafting.Ingredient"
import { $InputReplacement$$Type } from "dev.latvian.mods.kubejs.recipe.InputReplacement"
import { $CraftingContainer$$Type } from "net.minecraft.world.inventory.CraftingContainer"
import { $Map } from "java.util.Map"
import { $NonNullList } from "net.minecraft.core.NonNullList"
import { $ReplacementMatch$$Type } from "dev.latvian.mods.kubejs.recipe.ReplacementMatch"
import { $FireworkRocketItem$Shape } from "net.minecraft.world.item.FireworkRocketItem$Shape"
import { $ItemStack } from "net.minecraft.world.item.ItemStack"
import { $Level$$Type } from "net.minecraft.world.level.Level"

export class $FireworkStarRecipe extends $CustomRecipe {
static "SHAPE_BY_ITEM": $Map<$Item, $FireworkRocketItem$Shape>
static "SHAPE_INGREDIENT": $Ingredient

constructor(resourceLocation0: $ResourceLocation$$Type, craftingBookCategory1: $CraftingBookCategory$$Type)

public "assemble"(craftingContainer0: $CraftingContainer$$Type, registryAccess1: $RegistryAccess$$Type): $ItemStack
public "canCraftInDimensions"(int0: integer, int1: integer): boolean
public "getGroup"(): string
public "getIngredients"(): $NonNullList<$Ingredient>
public "getMod"(): string
public "getOrCreateId"(): $ResourceLocation
public "getRemainingItems"(craftingContainer0: $CraftingContainer$$Type): $NonNullList<$ItemStack>
public "getSchema"(): $RecipeSchema
public "getSerializer"(): $RecipeSerializer<any>
public "getToastSymbol"(): $ItemStack
public "getType"(): $ResourceLocation
public "hasInput"(match: $ReplacementMatch$$Type): boolean
public "hasOutput"(match: $ReplacementMatch$$Type): boolean
public "isIncomplete"(): boolean
public "matches"(craftingContainer0: $CraftingContainer$$Type, level1: $Level$$Type): boolean
public "replaceInput"(match: $ReplacementMatch$$Type, with_: $InputReplacement$$Type): boolean
public "replaceOutput"(match: $ReplacementMatch$$Type, with_: $OutputReplacement$$Type): boolean
public "setGroup"(group: string): void
public "showNotification"(): boolean
get "group"(): string
get "ingredients"(): $NonNullList<$Ingredient>
get "mod"(): string
get "orCreateId"(): $ResourceLocation
get "schema"(): $RecipeSchema
get "serializer"(): $RecipeSerializer<any>
get "toastSymbol"(): $ItemStack
get "type"(): $ResourceLocation
get "incomplete"(): boolean
set "group"(value: string)
}
}

declare module "net.minecraft.world.item.crafting.ArmorDyeRecipe" {
import { $ResourceLocation, $ResourceLocation$$Type } from "net.minecraft.resources.ResourceLocation"
import { $CraftingBookCategory$$Type } from "net.minecraft.world.item.crafting.CraftingBookCategory"
import { $RecipeSerializer } from "net.minecraft.world.item.crafting.RecipeSerializer"
import { $RegistryAccess$$Type } from "net.minecraft.core.RegistryAccess"
import { $RecipeSchema } from "dev.latvian.mods.kubejs.recipe.schema.RecipeSchema"
import { $OutputReplacement$$Type } from "dev.latvian.mods.kubejs.recipe.OutputReplacement"
import { $CustomRecipe } from "net.minecraft.world.item.crafting.CustomRecipe"
import { $Ingredient } from "net.minecraft.world.item.crafting.Ingredient"
import { $InputReplacement$$Type } from "dev.latvian.mods.kubejs.recipe.InputReplacement"
import { $CraftingContainer$$Type } from "net.minecraft.world.inventory.CraftingContainer"
import { $NonNullList } from "net.minecraft.core.NonNullList"
import { $ReplacementMatch$$Type } from "dev.latvian.mods.kubejs.recipe.ReplacementMatch"
import { $ItemStack } from "net.minecraft.world.item.ItemStack"
import { $Level$$Type } from "net.minecraft.world.level.Level"

export class $ArmorDyeRecipe extends $CustomRecipe {
constructor(resourceLocation0: $ResourceLocation$$Type, craftingBookCategory1: $CraftingBookCategory$$Type)

public "assemble"(craftingContainer0: $CraftingContainer$$Type, registryAccess1: $RegistryAccess$$Type): $ItemStack
public "canCraftInDimensions"(int0: integer, int1: integer): boolean
public "getGroup"(): string
public "getIngredients"(): $NonNullList<$Ingredient>
public "getMod"(): string
public "getOrCreateId"(): $ResourceLocation
public "getRemainingItems"(craftingContainer0: $CraftingContainer$$Type): $NonNullList<$ItemStack>
public "getSchema"(): $RecipeSchema
public "getSerializer"(): $RecipeSerializer<any>
public "getToastSymbol"(): $ItemStack
public "getType"(): $ResourceLocation
public "hasInput"(match: $ReplacementMatch$$Type): boolean
public "hasOutput"(match: $ReplacementMatch$$Type): boolean
public "isIncomplete"(): boolean
public "matches"(craftingContainer0: $CraftingContainer$$Type, level1: $Level$$Type): boolean
public "replaceInput"(match: $ReplacementMatch$$Type, with_: $InputReplacement$$Type): boolean
public "replaceOutput"(match: $ReplacementMatch$$Type, with_: $OutputReplacement$$Type): boolean
public "setGroup"(group: string): void
public "showNotification"(): boolean
get "group"(): string
get "ingredients"(): $NonNullList<$Ingredient>
get "mod"(): string
get "orCreateId"(): $ResourceLocation
get "schema"(): $RecipeSchema
get "serializer"(): $RecipeSerializer<any>
get "toastSymbol"(): $ItemStack
get "type"(): $ResourceLocation
get "incomplete"(): boolean
set "group"(value: string)
}
}

declare module "net.minecraft.world.item.crafting.SmithingTransformRecipe$Serializer" {
import { $ResourceLocation$$Type } from "net.minecraft.resources.ResourceLocation"
import { $JsonObject$$Type } from "com.google.gson.JsonObject"
import { $Recipe, $Recipe$$Type } from "net.minecraft.world.item.crafting.Recipe"
import { $RecipeSerializer, $RecipeSerializer$$Type } from "net.minecraft.world.item.crafting.RecipeSerializer"
import { $SmithingTransformRecipe, $SmithingTransformRecipe$$Type } from "net.minecraft.world.item.crafting.SmithingTransformRecipe"
import { $ICondition$IContext$$Type } from "net.minecraftforge.common.crafting.conditions.ICondition$IContext"
import { $FriendlyByteBuf$$Type } from "net.minecraft.network.FriendlyByteBuf"

export class $SmithingTransformRecipe$Serializer implements $RecipeSerializer<$SmithingTransformRecipe> {
constructor()

public "fromJson"(resourceLocation0: $ResourceLocation$$Type, jsonObject1: $JsonObject$$Type, iContext2: $ICondition$IContext$$Type): $SmithingTransformRecipe
public static "register"<S extends $RecipeSerializer<T>, T extends $Recipe<any>>(string0: string, s1: S): S
public "toNetwork"(friendlyByteBuf0: $FriendlyByteBuf$$Type, smithingTransformRecipe1: $SmithingTransformRecipe$$Type): void
}
}

declare module "net.minecraft.world.item.crafting.ShapedRecipe" {
import { $ResourceLocation, $ResourceLocation$$Type } from "net.minecraft.resources.ResourceLocation"
import { $JsonObject$$Type } from "com.google.gson.JsonObject"
import { $AccessorShapedRecipe } from "net.darkhax.bookshelf.mixin.accessors.item.crafting.AccessorShapedRecipe"
import { $CraftingBookCategory, $CraftingBookCategory$$Type } from "net.minecraft.world.item.crafting.CraftingBookCategory"
import { $CraftingRecipe } from "net.minecraft.world.item.crafting.CraftingRecipe"
import { $RecipeSerializer } from "net.minecraft.world.item.crafting.RecipeSerializer"
import { $Item } from "net.minecraft.world.item.Item"
import { $ShapedRecipeAccessor } from "com.gregtechceu.gtceu.core.mixins.ShapedRecipeAccessor"
import { $RegistryAccess$$Type } from "net.minecraft.core.RegistryAccess"
import { $RecipeSchema } from "dev.latvian.mods.kubejs.recipe.schema.RecipeSchema"
import { $OutputReplacement$$Type } from "dev.latvian.mods.kubejs.recipe.OutputReplacement"
import { $Ingredient, $Ingredient$$Type } from "net.minecraft.world.item.crafting.Ingredient"
import { $InputReplacement$$Type } from "dev.latvian.mods.kubejs.recipe.InputReplacement"
import { $JsonArray$$Type } from "com.google.gson.JsonArray"
import { $CraftingContainer, $CraftingContainer$$Type } from "net.minecraft.world.inventory.CraftingContainer"
import { $ShapedRecipeAccess } from "snownee.lychee.mixin.ShapedRecipeAccess"
import { $IShapedRecipe } from "net.minecraftforge.common.crafting.IShapedRecipe"
import { $Map, $Map$$Type } from "java.util.Map"
import { $NonNullList, $NonNullList$$Type } from "net.minecraft.core.NonNullList"
import { $ReplacementMatch$$Type } from "dev.latvian.mods.kubejs.recipe.ReplacementMatch"
import { $ItemStack, $ItemStack$$Type } from "net.minecraft.world.item.ItemStack"
import { $Level$$Type } from "net.minecraft.world.level.Level"

export class $ShapedRecipe implements $CraftingRecipe, $IShapedRecipe<$CraftingContainer>, $AccessorShapedRecipe, $ShapedRecipeAccessor, $ShapedRecipeAccess {
readonly "height": integer
readonly "result": $ItemStack
readonly "width": integer

constructor(resourceLocation0: $ResourceLocation$$Type, string1: string, craftingBookCategory2: $CraftingBookCategory$$Type, int3: integer, int4: integer, nonNullList5: $NonNullList$$Type<$Ingredient$$Type>, itemStack6: $ItemStack$$Type, boolean7: boolean)
constructor(resourceLocation0: $ResourceLocation$$Type, string1: string, craftingBookCategory2: $CraftingBookCategory$$Type, int3: integer, int4: integer, nonNullList5: $NonNullList$$Type<$Ingredient$$Type>, itemStack6: $ItemStack$$Type)

public "assemble"(craftingContainer0: $CraftingContainer$$Type, registryAccess1: $RegistryAccess$$Type): $ItemStack
public "canCraftInDimensions"(int0: integer, int1: integer): boolean
public "category"(): $CraftingBookCategory
public static "dissolvePattern"(string0s: string[], map1: $Map$$Type<string, $Ingredient$$Type>, int2: integer, int3: integer): $NonNullList<$Ingredient>
public "getGroup"(): string
public "getHeight"(): integer
public "getId"(): $ResourceLocation
public "getIngredients"(): $NonNullList<$Ingredient>
public "getMod"(): string
public "getOrCreateId"(): $ResourceLocation
public "getRecipeHeight"(): integer
public "getRecipeWidth"(): integer
public "getRemainingItems"(craftingContainer0: $CraftingContainer$$Type): $NonNullList<$ItemStack>
public "getResultItem"(registryAccess0: $RegistryAccess$$Type): $ItemStack
public "getSchema"(): $RecipeSchema
public "getSerializer"(): $RecipeSerializer<any>
public "getToastSymbol"(): $ItemStack
public "getType"(): $ResourceLocation
public "getWidth"(): integer
public "hasInput"(match: $ReplacementMatch$$Type): boolean
public "hasOutput"(match: $ReplacementMatch$$Type): boolean
public "isIncomplete"(): boolean
public "isSpecial"(): boolean
public static "itemFromJson"(jsonObject0: $JsonObject$$Type): $Item
public static "itemStackFromJson"(jsonObject0: $JsonObject$$Type): $ItemStack
public static "keyFromJson"(jsonObject0: $JsonObject$$Type): $Map<string, $Ingredient>
public "matches"(craftingContainer0: $CraftingContainer$$Type, level1: $Level$$Type): boolean
public "matches"(craftingContainer0: $CraftingContainer$$Type, int1: integer, int2: integer, boolean3: boolean): boolean
public static "patternFromJson"(jsonArray0: $JsonArray$$Type): string[]
public "replaceInput"(match: $ReplacementMatch$$Type, with_: $InputReplacement$$Type): boolean
public "replaceOutput"(match: $ReplacementMatch$$Type, with_: $OutputReplacement$$Type): boolean
public static "setCraftingSize"(int0: integer, int1: integer): void
public "setGroup"(group: string): void
public "showNotification"(): boolean
public static "shrink"(...string0s: string[]): string[]
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
}

declare module "net.minecraft.world.item.crafting.SmeltingRecipe" {
import { $ResourceLocation, $ResourceLocation$$Type } from "net.minecraft.resources.ResourceLocation"
import { $RecipeSerializer } from "net.minecraft.world.item.crafting.RecipeSerializer"
import { $RecipeSchema } from "dev.latvian.mods.kubejs.recipe.schema.RecipeSchema"
import { $OutputReplacement$$Type } from "dev.latvian.mods.kubejs.recipe.OutputReplacement"
import { $Ingredient$$Type } from "net.minecraft.world.item.crafting.Ingredient"
import { $InputReplacement$$Type } from "dev.latvian.mods.kubejs.recipe.InputReplacement"
import { $Container$$Type } from "net.minecraft.world.Container"
import { $CookingBookCategory$$Type } from "net.minecraft.world.item.crafting.CookingBookCategory"
import { $NonNullList } from "net.minecraft.core.NonNullList"
import { $ReplacementMatch$$Type } from "dev.latvian.mods.kubejs.recipe.ReplacementMatch"
import { $ItemStack, $ItemStack$$Type } from "net.minecraft.world.item.ItemStack"
import { $AbstractCookingRecipe } from "net.minecraft.world.item.crafting.AbstractCookingRecipe"

export class $SmeltingRecipe extends $AbstractCookingRecipe {
constructor(resourceLocation0: $ResourceLocation$$Type, string1: string, cookingBookCategory2: $CookingBookCategory$$Type, ingredient3: $Ingredient$$Type, itemStack4: $ItemStack$$Type, float5: float, int6: integer)

public "getGroup"(): string
public "getMod"(): string
public "getOrCreateId"(): $ResourceLocation
public "getRemainingItems"(container0: $Container$$Type): $NonNullList<$ItemStack>
public "getSchema"(): $RecipeSchema
public "getSerializer"(): $RecipeSerializer<any>
public "getToastSymbol"(): $ItemStack
public "getType"(): $ResourceLocation
public "hasInput"(match: $ReplacementMatch$$Type): boolean
public "hasOutput"(match: $ReplacementMatch$$Type): boolean
public "isIncomplete"(): boolean
public "isSpecial"(): boolean
public "replaceInput"(match: $ReplacementMatch$$Type, with_: $InputReplacement$$Type): boolean
public "replaceOutput"(match: $ReplacementMatch$$Type, with_: $OutputReplacement$$Type): boolean
public "setGroup"(group: string): void
public "showNotification"(): boolean
get "group"(): string
get "mod"(): string
get "orCreateId"(): $ResourceLocation
get "schema"(): $RecipeSchema
get "serializer"(): $RecipeSerializer<any>
get "toastSymbol"(): $ItemStack
get "type"(): $ResourceLocation
get "incomplete"(): boolean
get "special"(): boolean
set "group"(value: string)
}
}

declare module "net.minecraft.world.item.crafting.MapCloningRecipe" {
import { $ResourceLocation, $ResourceLocation$$Type } from "net.minecraft.resources.ResourceLocation"
import { $CraftingBookCategory$$Type } from "net.minecraft.world.item.crafting.CraftingBookCategory"
import { $RecipeSerializer } from "net.minecraft.world.item.crafting.RecipeSerializer"
import { $RegistryAccess$$Type } from "net.minecraft.core.RegistryAccess"
import { $RecipeSchema } from "dev.latvian.mods.kubejs.recipe.schema.RecipeSchema"
import { $OutputReplacement$$Type } from "dev.latvian.mods.kubejs.recipe.OutputReplacement"
import { $CustomRecipe } from "net.minecraft.world.item.crafting.CustomRecipe"
import { $Ingredient } from "net.minecraft.world.item.crafting.Ingredient"
import { $InputReplacement$$Type } from "dev.latvian.mods.kubejs.recipe.InputReplacement"
import { $CraftingContainer$$Type } from "net.minecraft.world.inventory.CraftingContainer"
import { $NonNullList } from "net.minecraft.core.NonNullList"
import { $ReplacementMatch$$Type } from "dev.latvian.mods.kubejs.recipe.ReplacementMatch"
import { $ItemStack } from "net.minecraft.world.item.ItemStack"
import { $Level$$Type } from "net.minecraft.world.level.Level"

export class $MapCloningRecipe extends $CustomRecipe {
constructor(resourceLocation0: $ResourceLocation$$Type, craftingBookCategory1: $CraftingBookCategory$$Type)

public "assemble"(craftingContainer0: $CraftingContainer$$Type, registryAccess1: $RegistryAccess$$Type): $ItemStack
public "canCraftInDimensions"(int0: integer, int1: integer): boolean
public "getGroup"(): string
public "getIngredients"(): $NonNullList<$Ingredient>
public "getMod"(): string
public "getOrCreateId"(): $ResourceLocation
public "getRemainingItems"(craftingContainer0: $CraftingContainer$$Type): $NonNullList<$ItemStack>
public "getSchema"(): $RecipeSchema
public "getSerializer"(): $RecipeSerializer<any>
public "getToastSymbol"(): $ItemStack
public "getType"(): $ResourceLocation
public "hasInput"(match: $ReplacementMatch$$Type): boolean
public "hasOutput"(match: $ReplacementMatch$$Type): boolean
public "isIncomplete"(): boolean
public "matches"(craftingContainer0: $CraftingContainer$$Type, level1: $Level$$Type): boolean
public "replaceInput"(match: $ReplacementMatch$$Type, with_: $InputReplacement$$Type): boolean
public "replaceOutput"(match: $ReplacementMatch$$Type, with_: $OutputReplacement$$Type): boolean
public "setGroup"(group: string): void
public "showNotification"(): boolean
get "group"(): string
get "ingredients"(): $NonNullList<$Ingredient>
get "mod"(): string
get "orCreateId"(): $ResourceLocation
get "schema"(): $RecipeSchema
get "serializer"(): $RecipeSerializer<any>
get "toastSymbol"(): $ItemStack
get "type"(): $ResourceLocation
get "incomplete"(): boolean
set "group"(value: string)
}
}

declare module "net.minecraft.world.item.crafting.SmithingRecipe" {
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
import { $ItemStack, $ItemStack$$Type } from "net.minecraft.world.item.ItemStack"
import { $Level$$Type } from "net.minecraft.world.level.Level"

export interface $SmithingRecipe extends $Recipe<$Container> {
"assemble"(container0: $Container$$Type, registryAccess1: $RegistryAccess$$Type): $ItemStack
"canCraftInDimensions"(int0: integer, int1: integer): boolean
"getGroup"(): string
"getId"(): $ResourceLocation
"getIngredients"(): $NonNullList<$Ingredient>
"getMod"(): string
"getOrCreateId"(): $ResourceLocation
"getRemainingItems"(container0: $Container$$Type): $NonNullList<$ItemStack>
"getResultItem"(registryAccess0: $RegistryAccess$$Type): $ItemStack
"getSchema"(): $RecipeSchema
"getSerializer"(): $RecipeSerializer<any>
"getToastSymbol"(): $ItemStack
"getType"(): $ResourceLocation
"hasInput"(match: $ReplacementMatch$$Type): boolean
"hasOutput"(match: $ReplacementMatch$$Type): boolean
"isAdditionIngredient"(itemStack0: $ItemStack$$Type): boolean
"isBaseIngredient"(itemStack0: $ItemStack$$Type): boolean
"isIncomplete"(): boolean
"isSpecial"(): boolean
"isTemplateIngredient"(itemStack0: $ItemStack$$Type): boolean
"matches"(container0: $Container$$Type, level1: $Level$$Type): boolean
"replaceInput"(match: $ReplacementMatch$$Type, with_: $InputReplacement$$Type): boolean
"replaceOutput"(match: $ReplacementMatch$$Type, with_: $OutputReplacement$$Type): boolean
"setGroup"(group: string): void
"showNotification"(): boolean
get "group"(): string
get "id"(): $ResourceLocation
get "ingredients"(): $NonNullList<$Ingredient>
get "mod"(): string
get "orCreateId"(): $ResourceLocation
get "schema"(): $RecipeSchema
get "serializer"(): $RecipeSerializer<any>
get "toastSymbol"(): $ItemStack
get "type"(): $ResourceLocation
get "incomplete"(): boolean
get "special"(): boolean
set "group"(value: string)
}

export namespace $SmithingRecipe {
const probejs$$marker: never
}
export abstract class $SmithingRecipe$$Static implements $SmithingRecipe {
}
}

declare module "net.minecraft.world.item.crafting.Ingredient" {
import { $ExtendedIngredient } from "org.embeddedt.modernfix.forge.recipe.ExtendedIngredient"
import { $JsonObject$$Type } from "com.google.gson.JsonObject"
import { $InputItem } from "dev.latvian.mods.kubejs.item.InputItem"
import { $IIngredientSerializer } from "net.minecraftforge.common.crafting.IIngredientSerializer"
import { $Ingredient$Value, $Ingredient$Value$$Type } from "net.minecraft.world.item.crafting.Ingredient$Value"
import { $Predicate, $Predicate$$Type } from "java.util.function.Predicate"
import { $Item, $Item$$Type } from "net.minecraft.world.item.Item"
import { $Collection$$Type } from "java.util.Collection"
import { $ItemStackSet } from "dev.latvian.mods.kubejs.item.ItemStackSet"
import { $Set } from "java.util.Set"
import { $FriendlyByteBuf$$Type } from "net.minecraft.network.FriendlyByteBuf"
import { $CallbackInfoReturnable$$Type } from "org.spongepowered.asm.mixin.injection.callback.CallbackInfoReturnable"
import { $IngredientKJS } from "dev.latvian.mods.kubejs.core.IngredientKJS"
import { $JsonElement, $JsonElement$$Type } from "com.google.gson.JsonElement"
import { $TagKey$$Type } from "net.minecraft.tags.TagKey"
import { $Stream$$Type } from "java.util.stream.Stream"
import { $IntList, $IntList$$Type } from "it.unimi.dsi.fastutil.ints.IntList"
import { $ItemLike$$Type } from "net.minecraft.world.level.ItemLike"
import { $IngredientAccessor } from "com.gregtechceu.gtceu.core.mixins.IngredientAccessor"
import { $ItemStack, $ItemStack$$Type } from "net.minecraft.world.item.ItemStack"
import { $IngredientAccessor as $IngredientAccessor$0 } from "com.lowdragmc.mbd2.core.mixins.IngredientAccessor"

export class $Ingredient implements $Predicate<$ItemStack>, $ExtendedIngredient, $IngredientAccessor$0, $IngredientKJS, $IngredientAccessor {
static readonly "EMPTY": $Ingredient

constructor(stream0: $Stream$$Type<$Ingredient$Value$$Type>)

public "and"(predicate0: $Predicate$$Type<$ItemStack$$Type>): $Predicate<$ItemStack>
public "and"(ingredient: $Ingredient$$Type): $Ingredient
public "asIngredient"(): $Ingredient
public "asStack"(): $InputItem
public "canBeUsedForMatching"(): boolean
public "checkInvalidation"(): boolean
public static "fromJson"(jsonElement0: $JsonElement$$Type): $Ingredient
public static "fromJson"(jsonElement0: $JsonElement$$Type, boolean1: boolean): $Ingredient
public static "fromNetwork"(friendlyByteBuf0: $FriendlyByteBuf$$Type): $Ingredient
public static "fromValues"(stream0: $Stream$$Type<$Ingredient$Value$$Type>): $Ingredient
public "getDisplayStacks"(): $ItemStackSet
public "getFirst"(): $ItemStack
public "getItemIds"(): $Set<string>
public "getItemTypes"(): $Set<$Item>
public "getSerializer"(): $IIngredientSerializer<$Ingredient>
public "getStackingIds"(): $IntList
public "getStacks"(): $ItemStackSet
public "handler$cha000$blah"(callbackInfoReturnable0: $CallbackInfoReturnable$$Type): void
public static "invalidateAll"(): void
public "isEmpty"(): boolean
public static "isEqual"<T>(object0: any): $Predicate<T>
public "isSimple"(): boolean
public "isVanilla"(): boolean
public "isWildcard"(): boolean
public static "merge"(collection0: $Collection$$Type<$Ingredient$$Type>): $Ingredient
public "mfix$clearReference"(): void
public "mfix$hasNoElements"(): boolean
public "negate"(): $Predicate<$ItemStack>
public static "not"<T>(predicate0: $Predicate$$Type<T>): $Predicate<T>
public static "of"(stream0: $Stream$$Type<$ItemStack$$Type>): $Ingredient
public static "of"(...itemLike0s: $ItemLike$$Type[]): $Ingredient
public static "of"(tagKey0: $TagKey$$Type<$Item$$Type>): $Ingredient
public static "of"(): $Ingredient
public static "of"(...itemStack0s: $ItemStack$$Type[]): $Ingredient
public "or"(predicate0: $Predicate$$Type<$ItemStack$$Type>): $Predicate<$ItemStack>
public "or"(ingredient: $Ingredient$$Type): $Ingredient
public "self"(): $Ingredient
public "subtract"(subtracted: $Ingredient$$Type): $Ingredient
public "test"(itemStack0: $ItemStack$$Type): boolean
public "testItem"(item: $Item$$Type): boolean
public "toJson"(): $JsonElement
public "toJson"(): $JsonElement
public "toNetwork"(friendlyByteBuf0: $FriendlyByteBuf$$Type): void
public static "valueFromJson"(jsonObject0: $JsonObject$$Type): $Ingredient$Value
public "withCount"(count: integer): $InputItem
get "itemStacks"(): $ItemStack[]
set "itemStacks"(value: $ItemStack$$Type[])
get "stackingIds"(): $IntList
set "stackingIds"(value: $IntList$$Type)
get "values"(): $Ingredient$Value[]
set "values"(value: $Ingredient$Value$$Type[])
get "displayStacks"(): $ItemStackSet
get "first"(): $ItemStack
get "itemIds"(): $Set<string>
get "itemTypes"(): $Set<$Item>
get "serializer"(): $IIngredientSerializer<$Ingredient>
get "stacks"(): $ItemStackSet
get "empty"(): boolean
get "simple"(): boolean
get "vanilla"(): boolean
get "wildcard"(): boolean
}
}

declare module "net.minecraft.world.item.crafting.SimpleCookingSerializer" {
import { $ResourceLocation$$Type } from "net.minecraft.resources.ResourceLocation"
import { $JsonObject$$Type } from "com.google.gson.JsonObject"
import { $SimpleCookingSerializer$CookieBaker$$Type } from "net.minecraft.world.item.crafting.SimpleCookingSerializer$CookieBaker"
import { $Recipe, $Recipe$$Type } from "net.minecraft.world.item.crafting.Recipe"
import { $RecipeSerializer, $RecipeSerializer$$Type } from "net.minecraft.world.item.crafting.RecipeSerializer"
import { $AbstractCookingRecipe, $AbstractCookingRecipe$$Type } from "net.minecraft.world.item.crafting.AbstractCookingRecipe"
import { $ICondition$IContext$$Type } from "net.minecraftforge.common.crafting.conditions.ICondition$IContext"
import { $FriendlyByteBuf$$Type } from "net.minecraft.network.FriendlyByteBuf"

export class $SimpleCookingSerializer<T extends $AbstractCookingRecipe = $AbstractCookingRecipe> implements $RecipeSerializer<T> {
readonly "defaultCookingTime": integer

constructor(cookieBaker0: $SimpleCookingSerializer$CookieBaker$$Type<T>, int1: integer)

public "fromJson"(resourceLocation0: $ResourceLocation$$Type, jsonObject1: $JsonObject$$Type, iContext2: $ICondition$IContext$$Type): T
public static "register"<S extends $RecipeSerializer<T>, T extends $Recipe<any>>(string0: string, s1: S): S
public "toNetwork"(friendlyByteBuf0: $FriendlyByteBuf$$Type, t1: T): void
}
}

declare module "net.minecraft.world.item.crafting.CookingBookCategory" {
import { $Enum, $Enum$$Type } from "java.lang.Enum"
import { $StringRepresentable, $StringRepresentable$$Type } from "net.minecraft.util.StringRepresentable"
import { $StringRepresentable$EnumCodec } from "net.minecraft.util.StringRepresentable$EnumCodec"
import { $Keyable } from "com.mojang.serialization.Keyable"
import { $Supplier$$Type } from "java.util.function.Supplier"
import { $Function$$Type } from "java.util.function.Function"

export class $CookingBookCategory extends $Enum<$CookingBookCategory> implements $StringRepresentable {
static readonly "BLOCKS": $CookingBookCategory
static readonly "CODEC": $StringRepresentable$EnumCodec<$CookingBookCategory>
static readonly "FOOD": $CookingBookCategory
static readonly "MISC": $CookingBookCategory

public static "fromEnum"<E extends ($Enum<E> & $StringRepresentable)>(supplier0: $Supplier$$Type<E[]>): $StringRepresentable$EnumCodec<E>
public static "fromEnumWithMapping"<E extends ($Enum<E> & $StringRepresentable)>(supplier0: $Supplier$$Type<E[]>, function1: $Function$$Type<string, string>): $StringRepresentable$EnumCodec<E>
public "getSerializedName"(): string
public static "keys"(stringRepresentable0s: $StringRepresentable$$Type[]): $Keyable
public static "valueOf"(string0: string): $CookingBookCategory
public static "values"(): $CookingBookCategory[]
get "serializedName"(): string
}
}

declare module "net.minecraft.world.item.crafting.SingleItemRecipe$Serializer" {
import { $ResourceLocation$$Type } from "net.minecraft.resources.ResourceLocation"
import { $JsonObject$$Type } from "com.google.gson.JsonObject"
import { $SingleItemRecipe$Serializer$SingleItemMaker$$Type } from "net.minecraft.world.item.crafting.SingleItemRecipe$Serializer$SingleItemMaker"
import { $Recipe, $Recipe$$Type } from "net.minecraft.world.item.crafting.Recipe"
import { $RecipeSerializer, $RecipeSerializer$$Type } from "net.minecraft.world.item.crafting.RecipeSerializer"
import { $SingleItemRecipe, $SingleItemRecipe$$Type } from "net.minecraft.world.item.crafting.SingleItemRecipe"
import { $ICondition$IContext$$Type } from "net.minecraftforge.common.crafting.conditions.ICondition$IContext"
import { $FriendlyByteBuf$$Type } from "net.minecraft.network.FriendlyByteBuf"

export class $SingleItemRecipe$Serializer<T extends $SingleItemRecipe = $SingleItemRecipe> implements $RecipeSerializer<T> {
constructor(singleItemMaker0: $SingleItemRecipe$Serializer$SingleItemMaker$$Type<T>)

public "fromJson"(resourceLocation0: $ResourceLocation$$Type, jsonObject1: $JsonObject$$Type, iContext2: $ICondition$IContext$$Type): T
public static "register"<S extends $RecipeSerializer<T>, T extends $Recipe<any>>(string0: string, s1: S): S
public "toNetwork"(friendlyByteBuf0: $FriendlyByteBuf$$Type, t1: T): void
}
}

declare module "net.minecraft.world.item.crafting.ShieldDecorationRecipe" {
import { $ResourceLocation, $ResourceLocation$$Type } from "net.minecraft.resources.ResourceLocation"
import { $CraftingBookCategory$$Type } from "net.minecraft.world.item.crafting.CraftingBookCategory"
import { $RecipeSerializer } from "net.minecraft.world.item.crafting.RecipeSerializer"
import { $RegistryAccess$$Type } from "net.minecraft.core.RegistryAccess"
import { $RecipeSchema } from "dev.latvian.mods.kubejs.recipe.schema.RecipeSchema"
import { $OutputReplacement$$Type } from "dev.latvian.mods.kubejs.recipe.OutputReplacement"
import { $CustomRecipe } from "net.minecraft.world.item.crafting.CustomRecipe"
import { $Ingredient } from "net.minecraft.world.item.crafting.Ingredient"
import { $InputReplacement$$Type } from "dev.latvian.mods.kubejs.recipe.InputReplacement"
import { $CraftingContainer$$Type } from "net.minecraft.world.inventory.CraftingContainer"
import { $NonNullList } from "net.minecraft.core.NonNullList"
import { $ReplacementMatch$$Type } from "dev.latvian.mods.kubejs.recipe.ReplacementMatch"
import { $ItemStack } from "net.minecraft.world.item.ItemStack"
import { $Level$$Type } from "net.minecraft.world.level.Level"

export class $ShieldDecorationRecipe extends $CustomRecipe {
constructor(resourceLocation0: $ResourceLocation$$Type, craftingBookCategory1: $CraftingBookCategory$$Type)

public "assemble"(craftingContainer0: $CraftingContainer$$Type, registryAccess1: $RegistryAccess$$Type): $ItemStack
public "canCraftInDimensions"(int0: integer, int1: integer): boolean
public "getGroup"(): string
public "getIngredients"(): $NonNullList<$Ingredient>
public "getMod"(): string
public "getOrCreateId"(): $ResourceLocation
public "getRemainingItems"(craftingContainer0: $CraftingContainer$$Type): $NonNullList<$ItemStack>
public "getSchema"(): $RecipeSchema
public "getSerializer"(): $RecipeSerializer<any>
public "getToastSymbol"(): $ItemStack
public "getType"(): $ResourceLocation
public "hasInput"(match: $ReplacementMatch$$Type): boolean
public "hasOutput"(match: $ReplacementMatch$$Type): boolean
public "isIncomplete"(): boolean
public "matches"(craftingContainer0: $CraftingContainer$$Type, level1: $Level$$Type): boolean
public "replaceInput"(match: $ReplacementMatch$$Type, with_: $InputReplacement$$Type): boolean
public "replaceOutput"(match: $ReplacementMatch$$Type, with_: $OutputReplacement$$Type): boolean
public "setGroup"(group: string): void
public "showNotification"(): boolean
get "group"(): string
get "ingredients"(): $NonNullList<$Ingredient>
get "mod"(): string
get "orCreateId"(): $ResourceLocation
get "schema"(): $RecipeSchema
get "serializer"(): $RecipeSerializer<any>
get "toastSymbol"(): $ItemStack
get "type"(): $ResourceLocation
get "incomplete"(): boolean
set "group"(value: string)
}
}

declare module "net.minecraft.world.item.crafting.SingleItemRecipe" {
import { $ResourceLocation, $ResourceLocation$$Type } from "net.minecraft.resources.ResourceLocation"
import { $RecipeSerializer, $RecipeSerializer$$Type } from "net.minecraft.world.item.crafting.RecipeSerializer"
import { $RegistryAccess$$Type } from "net.minecraft.core.RegistryAccess"
import { $RecipeSchema } from "dev.latvian.mods.kubejs.recipe.schema.RecipeSchema"
import { $OutputReplacement$$Type } from "dev.latvian.mods.kubejs.recipe.OutputReplacement"
import { $Ingredient, $Ingredient$$Type } from "net.minecraft.world.item.crafting.Ingredient"
import { $InputReplacement$$Type } from "dev.latvian.mods.kubejs.recipe.InputReplacement"
import { $Container, $Container$$Type } from "net.minecraft.world.Container"
import { $Recipe } from "net.minecraft.world.item.crafting.Recipe"
import { $NonNullList } from "net.minecraft.core.NonNullList"
import { $ReplacementMatch$$Type } from "dev.latvian.mods.kubejs.recipe.ReplacementMatch"
import { $ItemStack, $ItemStack$$Type } from "net.minecraft.world.item.ItemStack"
import { $Level$$Type } from "net.minecraft.world.level.Level"
import { $RecipeType$$Type } from "net.minecraft.world.item.crafting.RecipeType"

export class $SingleItemRecipe implements $Recipe<$Container> {
constructor(recipeType0: $RecipeType$$Type<any>, recipeSerializer1: $RecipeSerializer$$Type<any>, resourceLocation2: $ResourceLocation$$Type, string3: string, ingredient4: $Ingredient$$Type, itemStack5: $ItemStack$$Type)

public "assemble"(container0: $Container$$Type, registryAccess1: $RegistryAccess$$Type): $ItemStack
public "canCraftInDimensions"(int0: integer, int1: integer): boolean
public "getGroup"(): string
public "getId"(): $ResourceLocation
public "getIngredients"(): $NonNullList<$Ingredient>
public "getMod"(): string
public "getOrCreateId"(): $ResourceLocation
public "getRemainingItems"(container0: $Container$$Type): $NonNullList<$ItemStack>
public "getResultItem"(registryAccess0: $RegistryAccess$$Type): $ItemStack
public "getSchema"(): $RecipeSchema
public "getSerializer"(): $RecipeSerializer<any>
public "getToastSymbol"(): $ItemStack
public "getType"(): $ResourceLocation
public "hasInput"(match: $ReplacementMatch$$Type): boolean
public "hasOutput"(match: $ReplacementMatch$$Type): boolean
public "isIncomplete"(): boolean
public "isSpecial"(): boolean
public "matches"(container0: $Container$$Type, level1: $Level$$Type): boolean
public "replaceInput"(match: $ReplacementMatch$$Type, with_: $InputReplacement$$Type): boolean
public "replaceOutput"(match: $ReplacementMatch$$Type, with_: $OutputReplacement$$Type): boolean
public "setGroup"(group: string): void
public "showNotification"(): boolean
get "group"(): string
set "group"(value: string)
get "ingredient"(): $Ingredient
set "ingredient"(value: $Ingredient$$Type)
get "result"(): $ItemStack
set "result"(value: $ItemStack$$Type)
get "id"(): $ResourceLocation
get "ingredients"(): $NonNullList<$Ingredient>
get "mod"(): string
get "orCreateId"(): $ResourceLocation
get "schema"(): $RecipeSchema
get "serializer"(): $RecipeSerializer<any>
get "toastSymbol"(): $ItemStack
get "type"(): $ResourceLocation
get "incomplete"(): boolean
get "special"(): boolean
}
}

declare module "net.minecraft.world.item.crafting.Ingredient$Value" {
import { $JsonObject } from "com.google.gson.JsonObject"
import { $Collection } from "java.util.Collection"
import { $ItemStack } from "net.minecraft.world.item.ItemStack"

export interface $Ingredient$Value {
"getItems"(): $Collection<$ItemStack>
"serialize"(): $JsonObject
get "items"(): $Collection<$ItemStack>
}

export namespace $Ingredient$Value {
const probejs$$marker: never
}
export abstract class $Ingredient$Value$$Static implements $Ingredient$Value {
}
}

declare module "net.minecraft.world.item.crafting.CraftingRecipe" {
import { $ResourceLocation } from "net.minecraft.resources.ResourceLocation"
import { $CraftingBookCategory } from "net.minecraft.world.item.crafting.CraftingBookCategory"
import { $RecipeSerializer } from "net.minecraft.world.item.crafting.RecipeSerializer"
import { $RegistryAccess$$Type } from "net.minecraft.core.RegistryAccess"
import { $RecipeSchema } from "dev.latvian.mods.kubejs.recipe.schema.RecipeSchema"
import { $OutputReplacement$$Type } from "dev.latvian.mods.kubejs.recipe.OutputReplacement"
import { $Ingredient } from "net.minecraft.world.item.crafting.Ingredient"
import { $InputReplacement$$Type } from "dev.latvian.mods.kubejs.recipe.InputReplacement"
import { $CraftingContainer, $CraftingContainer$$Type } from "net.minecraft.world.inventory.CraftingContainer"
import { $Recipe } from "net.minecraft.world.item.crafting.Recipe"
import { $NonNullList } from "net.minecraft.core.NonNullList"
import { $ReplacementMatch$$Type } from "dev.latvian.mods.kubejs.recipe.ReplacementMatch"
import { $ItemStack } from "net.minecraft.world.item.ItemStack"
import { $Level$$Type } from "net.minecraft.world.level.Level"

export interface $CraftingRecipe extends $Recipe<$CraftingContainer> {
"assemble"(craftingContainer0: $CraftingContainer$$Type, registryAccess1: $RegistryAccess$$Type): $ItemStack
"canCraftInDimensions"(int0: integer, int1: integer): boolean
"category"(): $CraftingBookCategory
"getGroup"(): string
"getId"(): $ResourceLocation
"getIngredients"(): $NonNullList<$Ingredient>
"getMod"(): string
"getOrCreateId"(): $ResourceLocation
"getRemainingItems"(craftingContainer0: $CraftingContainer$$Type): $NonNullList<$ItemStack>
"getResultItem"(registryAccess0: $RegistryAccess$$Type): $ItemStack
"getSchema"(): $RecipeSchema
"getSerializer"(): $RecipeSerializer<any>
"getToastSymbol"(): $ItemStack
"getType"(): $ResourceLocation
"hasInput"(match: $ReplacementMatch$$Type): boolean
"hasOutput"(match: $ReplacementMatch$$Type): boolean
"isIncomplete"(): boolean
"isSpecial"(): boolean
"matches"(craftingContainer0: $CraftingContainer$$Type, level1: $Level$$Type): boolean
"replaceInput"(match: $ReplacementMatch$$Type, with_: $InputReplacement$$Type): boolean
"replaceOutput"(match: $ReplacementMatch$$Type, with_: $OutputReplacement$$Type): boolean
"setGroup"(group: string): void
"showNotification"(): boolean
get "group"(): string
get "id"(): $ResourceLocation
get "ingredients"(): $NonNullList<$Ingredient>
get "mod"(): string
get "orCreateId"(): $ResourceLocation
get "schema"(): $RecipeSchema
get "serializer"(): $RecipeSerializer<any>
get "toastSymbol"(): $ItemStack
get "type"(): $ResourceLocation
get "incomplete"(): boolean
get "special"(): boolean
set "group"(value: string)
}

export namespace $CraftingRecipe {
const probejs$$marker: never
}
export abstract class $CraftingRecipe$$Static implements $CraftingRecipe {
}
}

declare module "net.minecraft.world.item.crafting.BannerDuplicateRecipe" {
import { $ResourceLocation, $ResourceLocation$$Type } from "net.minecraft.resources.ResourceLocation"
import { $CraftingBookCategory$$Type } from "net.minecraft.world.item.crafting.CraftingBookCategory"
import { $RecipeSerializer } from "net.minecraft.world.item.crafting.RecipeSerializer"
import { $RegistryAccess$$Type } from "net.minecraft.core.RegistryAccess"
import { $RecipeSchema } from "dev.latvian.mods.kubejs.recipe.schema.RecipeSchema"
import { $OutputReplacement$$Type } from "dev.latvian.mods.kubejs.recipe.OutputReplacement"
import { $CustomRecipe } from "net.minecraft.world.item.crafting.CustomRecipe"
import { $Ingredient } from "net.minecraft.world.item.crafting.Ingredient"
import { $InputReplacement$$Type } from "dev.latvian.mods.kubejs.recipe.InputReplacement"
import { $CraftingContainer$$Type } from "net.minecraft.world.inventory.CraftingContainer"
import { $NonNullList } from "net.minecraft.core.NonNullList"
import { $ReplacementMatch$$Type } from "dev.latvian.mods.kubejs.recipe.ReplacementMatch"
import { $ItemStack } from "net.minecraft.world.item.ItemStack"
import { $Level$$Type } from "net.minecraft.world.level.Level"

export class $BannerDuplicateRecipe extends $CustomRecipe {
constructor(resourceLocation0: $ResourceLocation$$Type, craftingBookCategory1: $CraftingBookCategory$$Type)

public "assemble"(craftingContainer0: $CraftingContainer$$Type, registryAccess1: $RegistryAccess$$Type): $ItemStack
public "canCraftInDimensions"(int0: integer, int1: integer): boolean
public "getGroup"(): string
public "getIngredients"(): $NonNullList<$Ingredient>
public "getMod"(): string
public "getOrCreateId"(): $ResourceLocation
public "getRemainingItems"(craftingContainer0: $CraftingContainer$$Type): $NonNullList<$ItemStack>
public "getSchema"(): $RecipeSchema
public "getSerializer"(): $RecipeSerializer<any>
public "getToastSymbol"(): $ItemStack
public "getType"(): $ResourceLocation
public "hasInput"(match: $ReplacementMatch$$Type): boolean
public "hasOutput"(match: $ReplacementMatch$$Type): boolean
public "isIncomplete"(): boolean
public "matches"(craftingContainer0: $CraftingContainer$$Type, level1: $Level$$Type): boolean
public "modifyExpressionValue$gmd000$getLimitAssemble"(int0: integer): integer
public "modifyExpressionValue$gmd000$getLimitMatches"(int0: integer): integer
public "replaceInput"(match: $ReplacementMatch$$Type, with_: $InputReplacement$$Type): boolean
public "replaceOutput"(match: $ReplacementMatch$$Type, with_: $OutputReplacement$$Type): boolean
public "setGroup"(group: string): void
public "showNotification"(): boolean
get "group"(): string
get "ingredients"(): $NonNullList<$Ingredient>
get "mod"(): string
get "orCreateId"(): $ResourceLocation
get "schema"(): $RecipeSchema
get "serializer"(): $RecipeSerializer<any>
get "toastSymbol"(): $ItemStack
get "type"(): $ResourceLocation
get "incomplete"(): boolean
set "group"(value: string)
}
}

declare module "net.minecraft.world.item.crafting.FireworkStarFadeRecipe" {
import { $ResourceLocation, $ResourceLocation$$Type } from "net.minecraft.resources.ResourceLocation"
import { $CraftingBookCategory$$Type } from "net.minecraft.world.item.crafting.CraftingBookCategory"
import { $RecipeSerializer } from "net.minecraft.world.item.crafting.RecipeSerializer"
import { $RegistryAccess$$Type } from "net.minecraft.core.RegistryAccess"
import { $RecipeSchema } from "dev.latvian.mods.kubejs.recipe.schema.RecipeSchema"
import { $OutputReplacement$$Type } from "dev.latvian.mods.kubejs.recipe.OutputReplacement"
import { $CustomRecipe } from "net.minecraft.world.item.crafting.CustomRecipe"
import { $Ingredient } from "net.minecraft.world.item.crafting.Ingredient"
import { $InputReplacement$$Type } from "dev.latvian.mods.kubejs.recipe.InputReplacement"
import { $CraftingContainer$$Type } from "net.minecraft.world.inventory.CraftingContainer"
import { $NonNullList } from "net.minecraft.core.NonNullList"
import { $ReplacementMatch$$Type } from "dev.latvian.mods.kubejs.recipe.ReplacementMatch"
import { $ItemStack } from "net.minecraft.world.item.ItemStack"
import { $Level$$Type } from "net.minecraft.world.level.Level"

export class $FireworkStarFadeRecipe extends $CustomRecipe {
constructor(resourceLocation0: $ResourceLocation$$Type, craftingBookCategory1: $CraftingBookCategory$$Type)

public "assemble"(craftingContainer0: $CraftingContainer$$Type, registryAccess1: $RegistryAccess$$Type): $ItemStack
public "canCraftInDimensions"(int0: integer, int1: integer): boolean
public "getGroup"(): string
public "getIngredients"(): $NonNullList<$Ingredient>
public "getMod"(): string
public "getOrCreateId"(): $ResourceLocation
public "getRemainingItems"(craftingContainer0: $CraftingContainer$$Type): $NonNullList<$ItemStack>
public "getSchema"(): $RecipeSchema
public "getSerializer"(): $RecipeSerializer<any>
public "getToastSymbol"(): $ItemStack
public "getType"(): $ResourceLocation
public "hasInput"(match: $ReplacementMatch$$Type): boolean
public "hasOutput"(match: $ReplacementMatch$$Type): boolean
public "isIncomplete"(): boolean
public "matches"(craftingContainer0: $CraftingContainer$$Type, level1: $Level$$Type): boolean
public "replaceInput"(match: $ReplacementMatch$$Type, with_: $InputReplacement$$Type): boolean
public "replaceOutput"(match: $ReplacementMatch$$Type, with_: $OutputReplacement$$Type): boolean
public "setGroup"(group: string): void
public "showNotification"(): boolean
get "group"(): string
get "ingredients"(): $NonNullList<$Ingredient>
get "mod"(): string
get "orCreateId"(): $ResourceLocation
get "schema"(): $RecipeSchema
get "serializer"(): $RecipeSerializer<any>
get "toastSymbol"(): $ItemStack
get "type"(): $ResourceLocation
get "incomplete"(): boolean
set "group"(value: string)
}
}

declare module "net.minecraft.world.item.crafting.SuspiciousStewRecipe" {
import { $ResourceLocation, $ResourceLocation$$Type } from "net.minecraft.resources.ResourceLocation"
import { $CraftingBookCategory$$Type } from "net.minecraft.world.item.crafting.CraftingBookCategory"
import { $RecipeSerializer } from "net.minecraft.world.item.crafting.RecipeSerializer"
import { $RegistryAccess$$Type } from "net.minecraft.core.RegistryAccess"
import { $RecipeSchema } from "dev.latvian.mods.kubejs.recipe.schema.RecipeSchema"
import { $OutputReplacement$$Type } from "dev.latvian.mods.kubejs.recipe.OutputReplacement"
import { $CustomRecipe } from "net.minecraft.world.item.crafting.CustomRecipe"
import { $Ingredient } from "net.minecraft.world.item.crafting.Ingredient"
import { $InputReplacement$$Type } from "dev.latvian.mods.kubejs.recipe.InputReplacement"
import { $CraftingContainer$$Type } from "net.minecraft.world.inventory.CraftingContainer"
import { $NonNullList } from "net.minecraft.core.NonNullList"
import { $ReplacementMatch$$Type } from "dev.latvian.mods.kubejs.recipe.ReplacementMatch"
import { $ItemStack } from "net.minecraft.world.item.ItemStack"
import { $Level$$Type } from "net.minecraft.world.level.Level"

export class $SuspiciousStewRecipe extends $CustomRecipe {
constructor(resourceLocation0: $ResourceLocation$$Type, craftingBookCategory1: $CraftingBookCategory$$Type)

public "assemble"(craftingContainer0: $CraftingContainer$$Type, registryAccess1: $RegistryAccess$$Type): $ItemStack
public "canCraftInDimensions"(int0: integer, int1: integer): boolean
public "getGroup"(): string
public "getIngredients"(): $NonNullList<$Ingredient>
public "getMod"(): string
public "getOrCreateId"(): $ResourceLocation
public "getRemainingItems"(craftingContainer0: $CraftingContainer$$Type): $NonNullList<$ItemStack>
public "getSchema"(): $RecipeSchema
public "getSerializer"(): $RecipeSerializer<any>
public "getToastSymbol"(): $ItemStack
public "getType"(): $ResourceLocation
public "hasInput"(match: $ReplacementMatch$$Type): boolean
public "hasOutput"(match: $ReplacementMatch$$Type): boolean
public "isIncomplete"(): boolean
public "matches"(craftingContainer0: $CraftingContainer$$Type, level1: $Level$$Type): boolean
public "replaceInput"(match: $ReplacementMatch$$Type, with_: $InputReplacement$$Type): boolean
public "replaceOutput"(match: $ReplacementMatch$$Type, with_: $OutputReplacement$$Type): boolean
public "setGroup"(group: string): void
public "showNotification"(): boolean
get "group"(): string
get "ingredients"(): $NonNullList<$Ingredient>
get "mod"(): string
get "orCreateId"(): $ResourceLocation
get "schema"(): $RecipeSchema
get "serializer"(): $RecipeSerializer<any>
get "toastSymbol"(): $ItemStack
get "type"(): $ResourceLocation
get "incomplete"(): boolean
set "group"(value: string)
}
}

declare module "net.minecraft.world.item.crafting.RecipeManager$CachedCheck" {
import { $Container, $Container$$Type } from "net.minecraft.world.Container"
import { $Recipe } from "net.minecraft.world.item.crafting.Recipe"
import { $Optional } from "java.util.Optional"
import { $Level$$Type } from "net.minecraft.world.level.Level"

export interface $RecipeManager$CachedCheck<C extends $Container = $Container, T extends $Recipe<C> = $Recipe<C>> {
"getRecipeFor"(c0: C, level1: $Level$$Type): $Optional<T>
}

export namespace $RecipeManager$CachedCheck {
const probejs$$marker: never
}
export abstract class $RecipeManager$CachedCheck$$Static<C extends $Container = $Container, T extends $Recipe<C> = $Recipe<C>> implements $RecipeManager$CachedCheck<C, T> {
}
}

declare module "net.minecraft.world.item.crafting.FireworkRocketRecipe" {
import { $ResourceLocation, $ResourceLocation$$Type } from "net.minecraft.resources.ResourceLocation"
import { $CraftingBookCategory$$Type } from "net.minecraft.world.item.crafting.CraftingBookCategory"
import { $RecipeSerializer } from "net.minecraft.world.item.crafting.RecipeSerializer"
import { $RegistryAccess$$Type } from "net.minecraft.core.RegistryAccess"
import { $RecipeSchema } from "dev.latvian.mods.kubejs.recipe.schema.RecipeSchema"
import { $OutputReplacement$$Type } from "dev.latvian.mods.kubejs.recipe.OutputReplacement"
import { $CustomRecipe } from "net.minecraft.world.item.crafting.CustomRecipe"
import { $Ingredient } from "net.minecraft.world.item.crafting.Ingredient"
import { $InputReplacement$$Type } from "dev.latvian.mods.kubejs.recipe.InputReplacement"
import { $CraftingContainer$$Type } from "net.minecraft.world.inventory.CraftingContainer"
import { $NonNullList } from "net.minecraft.core.NonNullList"
import { $ReplacementMatch$$Type } from "dev.latvian.mods.kubejs.recipe.ReplacementMatch"
import { $ItemStack } from "net.minecraft.world.item.ItemStack"
import { $Level$$Type } from "net.minecraft.world.level.Level"

export class $FireworkRocketRecipe extends $CustomRecipe {
constructor(resourceLocation0: $ResourceLocation$$Type, craftingBookCategory1: $CraftingBookCategory$$Type)

public "assemble"(craftingContainer0: $CraftingContainer$$Type, registryAccess1: $RegistryAccess$$Type): $ItemStack
public "canCraftInDimensions"(int0: integer, int1: integer): boolean
public "getGroup"(): string
public "getIngredients"(): $NonNullList<$Ingredient>
public "getMod"(): string
public "getOrCreateId"(): $ResourceLocation
public "getRemainingItems"(craftingContainer0: $CraftingContainer$$Type): $NonNullList<$ItemStack>
public "getSchema"(): $RecipeSchema
public "getSerializer"(): $RecipeSerializer<any>
public "getToastSymbol"(): $ItemStack
public "getType"(): $ResourceLocation
public "hasInput"(match: $ReplacementMatch$$Type): boolean
public "hasOutput"(match: $ReplacementMatch$$Type): boolean
public "isIncomplete"(): boolean
public "matches"(craftingContainer0: $CraftingContainer$$Type, level1: $Level$$Type): boolean
public "replaceInput"(match: $ReplacementMatch$$Type, with_: $InputReplacement$$Type): boolean
public "replaceOutput"(match: $ReplacementMatch$$Type, with_: $OutputReplacement$$Type): boolean
public "setGroup"(group: string): void
public "showNotification"(): boolean
get "group"(): string
get "ingredients"(): $NonNullList<$Ingredient>
get "mod"(): string
get "orCreateId"(): $ResourceLocation
get "schema"(): $RecipeSchema
get "serializer"(): $RecipeSerializer<any>
get "toastSymbol"(): $ItemStack
get "type"(): $ResourceLocation
get "incomplete"(): boolean
set "group"(value: string)
}
}

declare module "net.minecraft.world.item.crafting.BlastingRecipe" {
import { $ResourceLocation, $ResourceLocation$$Type } from "net.minecraft.resources.ResourceLocation"
import { $RecipeSerializer } from "net.minecraft.world.item.crafting.RecipeSerializer"
import { $RecipeSchema } from "dev.latvian.mods.kubejs.recipe.schema.RecipeSchema"
import { $OutputReplacement$$Type } from "dev.latvian.mods.kubejs.recipe.OutputReplacement"
import { $Ingredient$$Type } from "net.minecraft.world.item.crafting.Ingredient"
import { $InputReplacement$$Type } from "dev.latvian.mods.kubejs.recipe.InputReplacement"
import { $Container$$Type } from "net.minecraft.world.Container"
import { $CookingBookCategory$$Type } from "net.minecraft.world.item.crafting.CookingBookCategory"
import { $NonNullList } from "net.minecraft.core.NonNullList"
import { $ReplacementMatch$$Type } from "dev.latvian.mods.kubejs.recipe.ReplacementMatch"
import { $ItemStack, $ItemStack$$Type } from "net.minecraft.world.item.ItemStack"
import { $AbstractCookingRecipe } from "net.minecraft.world.item.crafting.AbstractCookingRecipe"

export class $BlastingRecipe extends $AbstractCookingRecipe {
constructor(resourceLocation0: $ResourceLocation$$Type, string1: string, cookingBookCategory2: $CookingBookCategory$$Type, ingredient3: $Ingredient$$Type, itemStack4: $ItemStack$$Type, float5: float, int6: integer)

public "getGroup"(): string
public "getMod"(): string
public "getOrCreateId"(): $ResourceLocation
public "getRemainingItems"(container0: $Container$$Type): $NonNullList<$ItemStack>
public "getSchema"(): $RecipeSchema
public "getSerializer"(): $RecipeSerializer<any>
public "getToastSymbol"(): $ItemStack
public "getType"(): $ResourceLocation
public "hasInput"(match: $ReplacementMatch$$Type): boolean
public "hasOutput"(match: $ReplacementMatch$$Type): boolean
public "isIncomplete"(): boolean
public "isSpecial"(): boolean
public "replaceInput"(match: $ReplacementMatch$$Type, with_: $InputReplacement$$Type): boolean
public "replaceOutput"(match: $ReplacementMatch$$Type, with_: $OutputReplacement$$Type): boolean
public "setGroup"(group: string): void
public "showNotification"(): boolean
get "group"(): string
get "mod"(): string
get "orCreateId"(): $ResourceLocation
get "schema"(): $RecipeSchema
get "serializer"(): $RecipeSerializer<any>
get "toastSymbol"(): $ItemStack
get "type"(): $ResourceLocation
get "incomplete"(): boolean
get "special"(): boolean
set "group"(value: string)
}
}

declare module "net.minecraft.world.item.crafting.SmithingTrimRecipe$Serializer" {
import { $ResourceLocation$$Type } from "net.minecraft.resources.ResourceLocation"
import { $SmithingTrimRecipe, $SmithingTrimRecipe$$Type } from "net.minecraft.world.item.crafting.SmithingTrimRecipe"
import { $JsonObject$$Type } from "com.google.gson.JsonObject"
import { $Recipe, $Recipe$$Type } from "net.minecraft.world.item.crafting.Recipe"
import { $RecipeSerializer, $RecipeSerializer$$Type } from "net.minecraft.world.item.crafting.RecipeSerializer"
import { $ICondition$IContext$$Type } from "net.minecraftforge.common.crafting.conditions.ICondition$IContext"
import { $FriendlyByteBuf$$Type } from "net.minecraft.network.FriendlyByteBuf"

export class $SmithingTrimRecipe$Serializer implements $RecipeSerializer<$SmithingTrimRecipe> {
constructor()

public "fromJson"(resourceLocation0: $ResourceLocation$$Type, jsonObject1: $JsonObject$$Type, iContext2: $ICondition$IContext$$Type): $SmithingTrimRecipe
public static "register"<S extends $RecipeSerializer<T>, T extends $Recipe<any>>(string0: string, s1: S): S
public "toNetwork"(friendlyByteBuf0: $FriendlyByteBuf$$Type, smithingTrimRecipe1: $SmithingTrimRecipe$$Type): void
}
}

declare module "net.minecraft.world.item.crafting.SimpleCraftingRecipeSerializer" {
import { $ResourceLocation$$Type } from "net.minecraft.resources.ResourceLocation"
import { $JsonObject$$Type } from "com.google.gson.JsonObject"
import { $CraftingRecipe, $CraftingRecipe$$Type } from "net.minecraft.world.item.crafting.CraftingRecipe"
import { $Recipe, $Recipe$$Type } from "net.minecraft.world.item.crafting.Recipe"
import { $RecipeSerializer, $RecipeSerializer$$Type } from "net.minecraft.world.item.crafting.RecipeSerializer"
import { $SimpleCraftingRecipeSerializer$Factory$$Type } from "net.minecraft.world.item.crafting.SimpleCraftingRecipeSerializer$Factory"
import { $ICondition$IContext$$Type } from "net.minecraftforge.common.crafting.conditions.ICondition$IContext"
import { $FriendlyByteBuf$$Type } from "net.minecraft.network.FriendlyByteBuf"

export class $SimpleCraftingRecipeSerializer<T extends $CraftingRecipe = $CraftingRecipe> implements $RecipeSerializer<T> {
constructor(factory0: $SimpleCraftingRecipeSerializer$Factory$$Type<T>)

public "fromJson"(resourceLocation0: $ResourceLocation$$Type, jsonObject1: $JsonObject$$Type, iContext2: $ICondition$IContext$$Type): T
public static "register"<S extends $RecipeSerializer<T>, T extends $Recipe<any>>(string0: string, s1: S): S
public "toNetwork"(friendlyByteBuf0: $FriendlyByteBuf$$Type, t1: T): void
}
}

declare module "net.minecraft.world.item.crafting.TippedArrowRecipe" {
import { $ResourceLocation, $ResourceLocation$$Type } from "net.minecraft.resources.ResourceLocation"
import { $CraftingBookCategory$$Type } from "net.minecraft.world.item.crafting.CraftingBookCategory"
import { $RecipeSerializer } from "net.minecraft.world.item.crafting.RecipeSerializer"
import { $RegistryAccess$$Type } from "net.minecraft.core.RegistryAccess"
import { $RecipeSchema } from "dev.latvian.mods.kubejs.recipe.schema.RecipeSchema"
import { $OutputReplacement$$Type } from "dev.latvian.mods.kubejs.recipe.OutputReplacement"
import { $CustomRecipe } from "net.minecraft.world.item.crafting.CustomRecipe"
import { $Ingredient } from "net.minecraft.world.item.crafting.Ingredient"
import { $InputReplacement$$Type } from "dev.latvian.mods.kubejs.recipe.InputReplacement"
import { $CraftingContainer$$Type } from "net.minecraft.world.inventory.CraftingContainer"
import { $NonNullList } from "net.minecraft.core.NonNullList"
import { $ReplacementMatch$$Type } from "dev.latvian.mods.kubejs.recipe.ReplacementMatch"
import { $ItemStack } from "net.minecraft.world.item.ItemStack"
import { $Level$$Type } from "net.minecraft.world.level.Level"

export class $TippedArrowRecipe extends $CustomRecipe {
constructor(resourceLocation0: $ResourceLocation$$Type, craftingBookCategory1: $CraftingBookCategory$$Type)

public "assemble"(craftingContainer0: $CraftingContainer$$Type, registryAccess1: $RegistryAccess$$Type): $ItemStack
public "canCraftInDimensions"(int0: integer, int1: integer): boolean
public "getGroup"(): string
public "getIngredients"(): $NonNullList<$Ingredient>
public "getMod"(): string
public "getOrCreateId"(): $ResourceLocation
public "getRemainingItems"(craftingContainer0: $CraftingContainer$$Type): $NonNullList<$ItemStack>
public "getSchema"(): $RecipeSchema
public "getSerializer"(): $RecipeSerializer<any>
public "getToastSymbol"(): $ItemStack
public "getType"(): $ResourceLocation
public "hasInput"(match: $ReplacementMatch$$Type): boolean
public "hasOutput"(match: $ReplacementMatch$$Type): boolean
public "isIncomplete"(): boolean
public "matches"(craftingContainer0: $CraftingContainer$$Type, level1: $Level$$Type): boolean
public "replaceInput"(match: $ReplacementMatch$$Type, with_: $InputReplacement$$Type): boolean
public "replaceOutput"(match: $ReplacementMatch$$Type, with_: $OutputReplacement$$Type): boolean
public "setGroup"(group: string): void
public "showNotification"(): boolean
get "group"(): string
get "ingredients"(): $NonNullList<$Ingredient>
get "mod"(): string
get "orCreateId"(): $ResourceLocation
get "schema"(): $RecipeSchema
get "serializer"(): $RecipeSerializer<any>
get "toastSymbol"(): $ItemStack
get "type"(): $ResourceLocation
get "incomplete"(): boolean
set "group"(value: string)
}
}

declare module "net.minecraft.world.item.crafting.SmokingRecipe" {
import { $ResourceLocation, $ResourceLocation$$Type } from "net.minecraft.resources.ResourceLocation"
import { $RecipeSerializer } from "net.minecraft.world.item.crafting.RecipeSerializer"
import { $RecipeSchema } from "dev.latvian.mods.kubejs.recipe.schema.RecipeSchema"
import { $OutputReplacement$$Type } from "dev.latvian.mods.kubejs.recipe.OutputReplacement"
import { $Ingredient$$Type } from "net.minecraft.world.item.crafting.Ingredient"
import { $InputReplacement$$Type } from "dev.latvian.mods.kubejs.recipe.InputReplacement"
import { $Container$$Type } from "net.minecraft.world.Container"
import { $CookingBookCategory$$Type } from "net.minecraft.world.item.crafting.CookingBookCategory"
import { $NonNullList } from "net.minecraft.core.NonNullList"
import { $ReplacementMatch$$Type } from "dev.latvian.mods.kubejs.recipe.ReplacementMatch"
import { $ItemStack, $ItemStack$$Type } from "net.minecraft.world.item.ItemStack"
import { $AbstractCookingRecipe } from "net.minecraft.world.item.crafting.AbstractCookingRecipe"

export class $SmokingRecipe extends $AbstractCookingRecipe {
constructor(resourceLocation0: $ResourceLocation$$Type, string1: string, cookingBookCategory2: $CookingBookCategory$$Type, ingredient3: $Ingredient$$Type, itemStack4: $ItemStack$$Type, float5: float, int6: integer)

public "getGroup"(): string
public "getMod"(): string
public "getOrCreateId"(): $ResourceLocation
public "getRemainingItems"(container0: $Container$$Type): $NonNullList<$ItemStack>
public "getSchema"(): $RecipeSchema
public "getSerializer"(): $RecipeSerializer<any>
public "getToastSymbol"(): $ItemStack
public "getType"(): $ResourceLocation
public "hasInput"(match: $ReplacementMatch$$Type): boolean
public "hasOutput"(match: $ReplacementMatch$$Type): boolean
public "isIncomplete"(): boolean
public "isSpecial"(): boolean
public "replaceInput"(match: $ReplacementMatch$$Type, with_: $InputReplacement$$Type): boolean
public "replaceOutput"(match: $ReplacementMatch$$Type, with_: $OutputReplacement$$Type): boolean
public "setGroup"(group: string): void
public "showNotification"(): boolean
get "group"(): string
get "mod"(): string
get "orCreateId"(): $ResourceLocation
get "schema"(): $RecipeSchema
get "serializer"(): $RecipeSerializer<any>
get "toastSymbol"(): $ItemStack
get "type"(): $ResourceLocation
get "incomplete"(): boolean
get "special"(): boolean
set "group"(value: string)
}
}

declare module "net.minecraft.world.item.crafting.SimpleCraftingRecipeSerializer$Factory" {
import { $ResourceLocation$$Type } from "net.minecraft.resources.ResourceLocation"
import { $CraftingBookCategory$$Type } from "net.minecraft.world.item.crafting.CraftingBookCategory"
import { $CraftingRecipe } from "net.minecraft.world.item.crafting.CraftingRecipe"

export interface $SimpleCraftingRecipeSerializer$Factory<T extends $CraftingRecipe = $CraftingRecipe> {
"create"(resourceLocation0: $ResourceLocation$$Type, craftingBookCategory1: $CraftingBookCategory$$Type): T
}

export namespace $SimpleCraftingRecipeSerializer$Factory {
const probejs$$marker: never
}
export abstract class $SimpleCraftingRecipeSerializer$Factory$$Static<T extends $CraftingRecipe = $CraftingRecipe> implements $SimpleCraftingRecipeSerializer$Factory<T> {
}
}

declare module "net.minecraft.world.item.crafting.RecipeManager" {
import { $ResourceLocation, $ResourceLocation$$Type } from "net.minecraft.resources.ResourceLocation"
import { $JsonObject$$Type } from "com.google.gson.JsonObject"
import { $RecipeManagerAccessor } from "dev.latvian.mods.kubejs.core.mixin.forge.RecipeManagerAccessor"
import { $RecipeManagerAccessor as $RecipeManagerAccessor$0 } from "vazkii.botania.mixin.RecipeManagerAccessor"
import { $Iterable$$Type } from "java.lang.Iterable"
import { $RecipeManagerAccessor as $RecipeManagerAccessor$1 } from "org.thecelestialworkshop.celestisynth.mixin.RecipeManagerAccessor"
import { $CallbackInfo$$Type } from "org.spongepowered.asm.mixin.injection.callback.CallbackInfo"
import { $Container, $Container$$Type } from "net.minecraft.world.Container"
import { $SimpleJsonResourceReloadListener } from "net.minecraft.server.packs.resources.SimpleJsonResourceReloadListener"
import { $Map, $Map$$Type } from "java.util.Map"
import { $AccessorRecipeManager } from "net.darkhax.bookshelf.mixin.accessors.world.AccessorRecipeManager"
import { $NonNullList } from "net.minecraft.core.NonNullList"
import { $ICondition$IContext$$Type } from "net.minecraftforge.common.crafting.conditions.ICondition$IContext"
import { $RecipeType, $RecipeType$$Type } from "net.minecraft.world.item.crafting.RecipeType"
import { $ProfilerFiller$$Type } from "net.minecraft.util.profiling.ProfilerFiller"
import { $Collection } from "java.util.Collection"
import { $ResourceManager$$Type } from "net.minecraft.server.packs.resources.ResourceManager"
import { $ImmutableMap$Builder$$Type } from "com.google.common.collect.ImmutableMap$Builder"
import { $Pair } from "com.mojang.datafixers.util.Pair"
import { $RecipeManagerAccessor as $RecipeManagerAccessor$2 } from "com.glodblock.github.extendedae.util.RecipeManagerAccessor"
import { $List } from "java.util.List"
import { $Stream } from "java.util.stream.Stream"
import { $RecipeManagerAccess } from "snownee.lychee.mixin.RecipeManagerAccess"
import { $Recipe, $Recipe$$Type } from "net.minecraft.world.item.crafting.Recipe"
import { $RecipeManagerAccessor as $RecipeManagerAccessor$3 } from "com.lowdragmc.mbd2.core.mixins.RecipeManagerAccessor"
import { $Optional } from "java.util.Optional"
import { $RecipeManager$CachedCheck } from "net.minecraft.world.item.crafting.RecipeManager$CachedCheck"
import { $ItemStack } from "net.minecraft.world.item.ItemStack"
import { $Level$$Type } from "net.minecraft.world.level.Level"
import { $RecipeManagerAccessor as $RecipeManagerAccessor$4 } from "vectorwing.farmersdelight.common.mixin.accessor.RecipeManagerAccessor"

export class $RecipeManager extends $SimpleJsonResourceReloadListener implements $RecipeManagerAccessor$1, $RecipeManagerAccessor$3, $RecipeManagerAccessor$0, $AccessorRecipeManager, $RecipeManagerAccessor$4, $RecipeManagerAccessor, $RecipeManagerAccessor$2, $RecipeManagerAccess {
/** @deprecated */
constructor()
constructor(iContext0: $ICondition$IContext$$Type)

public "byKey"(resourceLocation0: $ResourceLocation$$Type): $Optional<$Recipe<any>>
public "byType"<C extends $Container, T extends $Recipe<C>>(recipeType0: $RecipeType$$Type<T>): $Map<$ResourceLocation, T>
public static "createCheck"<C extends $Container, T extends $Recipe<C>>(recipeType0: $RecipeType$$Type<T>): $RecipeManager$CachedCheck<C, T>
/** @deprecated */
public static "fromJson"(resourceLocation0: $ResourceLocation$$Type, jsonObject1: $JsonObject$$Type): $Recipe<any>
public static "fromJson"(resourceLocation0: $ResourceLocation$$Type, jsonObject1: $JsonObject$$Type, iContext2: $ICondition$IContext$$Type): $Recipe<any>
public "getAllRecipesFor"<C extends $Container, T extends $Recipe<C>>(recipeType0: $RecipeType$$Type<T>): $List<T>
public "getByType"(recipeType0: $RecipeType$$Type): $Map
public "getName"(): string
public "getRecipeFor"<C extends $Container, T extends $Recipe<C>>(recipeType0: $RecipeType$$Type<T>, c1: C, level2: $Level$$Type, resourceLocation3: $ResourceLocation$$Type): $Optional<$Pair<$ResourceLocation, T>>
public "getRecipeFor"<C extends $Container, T extends $Recipe<C>>(recipeType0: $RecipeType$$Type<T>, c1: C, level2: $Level$$Type): $Optional<T>
public "getRecipeIds"(): $Stream<$ResourceLocation>
public "getRecipes"(): $Collection<$Recipe<any>>
public "getRecipesFor"<C extends $Container, T extends $Recipe<C>>(recipeType0: $RecipeType$$Type<T>, c1: C, level2: $Level$$Type): $List<T>
public "getRemainingItemsFor"<C extends $Container, T extends $Recipe<C>>(recipeType0: $RecipeType$$Type<T>, c1: C, level2: $Level$$Type): $NonNullList<$ItemStack>
public "hadErrorsLoading"(): boolean
public "handler$emm000$cucumber$apply"(map0: $Map$$Type, resourceManager1: $ResourceManager$$Type, profilerFiller2: $ProfilerFiller$$Type, callbackInfo3: $CallbackInfo$$Type, map4: $Map$$Type, builder5: $ImmutableMap$Builder$$Type): void
public "replaceRecipes"(iterable0: $Iterable$$Type<$Recipe$$Type<any>>): void
get "byName"(): $Map<$ResourceLocation, $Recipe<any>>
set "byName"(value: $Map$$Type<$ResourceLocation$$Type, $Recipe$$Type<any>>)
get "recipes"(): $Map<$RecipeType<any>, $Map<$ResourceLocation, $Recipe<any>>>
set "recipes"(value: $Map$$Type<$RecipeType$$Type<any>, $Map$$Type<$ResourceLocation$$Type, $Recipe$$Type<any>>>)
get "name"(): string
get "recipeIds"(): $Stream<$ResourceLocation>
}
}

declare module "net.minecraft.world.item.crafting.CustomRecipe" {
import { $ResourceLocation, $ResourceLocation$$Type } from "net.minecraft.resources.ResourceLocation"
import { $CraftingBookCategory, $CraftingBookCategory$$Type } from "net.minecraft.world.item.crafting.CraftingBookCategory"
import { $CraftingRecipe } from "net.minecraft.world.item.crafting.CraftingRecipe"
import { $RecipeSerializer } from "net.minecraft.world.item.crafting.RecipeSerializer"
import { $RegistryAccess$$Type } from "net.minecraft.core.RegistryAccess"
import { $RecipeSchema } from "dev.latvian.mods.kubejs.recipe.schema.RecipeSchema"
import { $OutputReplacement$$Type } from "dev.latvian.mods.kubejs.recipe.OutputReplacement"
import { $Ingredient } from "net.minecraft.world.item.crafting.Ingredient"
import { $InputReplacement$$Type } from "dev.latvian.mods.kubejs.recipe.InputReplacement"
import { $CraftingContainer$$Type } from "net.minecraft.world.inventory.CraftingContainer"
import { $NonNullList } from "net.minecraft.core.NonNullList"
import { $ReplacementMatch$$Type } from "dev.latvian.mods.kubejs.recipe.ReplacementMatch"
import { $ItemStack } from "net.minecraft.world.item.ItemStack"
import { $Level$$Type } from "net.minecraft.world.level.Level"

export class $CustomRecipe implements $CraftingRecipe {
constructor(resourceLocation0: $ResourceLocation$$Type, craftingBookCategory1: $CraftingBookCategory$$Type)

public "assemble"(craftingContainer0: $CraftingContainer$$Type, registryAccess1: $RegistryAccess$$Type): $ItemStack
public "canCraftInDimensions"(int0: integer, int1: integer): boolean
public "category"(): $CraftingBookCategory
public "getGroup"(): string
public "getId"(): $ResourceLocation
public "getIngredients"(): $NonNullList<$Ingredient>
public "getMod"(): string
public "getOrCreateId"(): $ResourceLocation
public "getRemainingItems"(craftingContainer0: $CraftingContainer$$Type): $NonNullList<$ItemStack>
public "getResultItem"(registryAccess0: $RegistryAccess$$Type): $ItemStack
public "getSchema"(): $RecipeSchema
public "getSerializer"(): $RecipeSerializer<any>
public "getToastSymbol"(): $ItemStack
public "getType"(): $ResourceLocation
public "hasInput"(match: $ReplacementMatch$$Type): boolean
public "hasOutput"(match: $ReplacementMatch$$Type): boolean
public "isIncomplete"(): boolean
public "isSpecial"(): boolean
public "matches"(craftingContainer0: $CraftingContainer$$Type, level1: $Level$$Type): boolean
public "replaceInput"(match: $ReplacementMatch$$Type, with_: $InputReplacement$$Type): boolean
public "replaceOutput"(match: $ReplacementMatch$$Type, with_: $OutputReplacement$$Type): boolean
public "setGroup"(group: string): void
public "showNotification"(): boolean
get "group"(): string
get "id"(): $ResourceLocation
get "ingredients"(): $NonNullList<$Ingredient>
get "mod"(): string
get "orCreateId"(): $ResourceLocation
get "schema"(): $RecipeSchema
get "serializer"(): $RecipeSerializer<any>
get "toastSymbol"(): $ItemStack
get "type"(): $ResourceLocation
get "incomplete"(): boolean
get "special"(): boolean
set "group"(value: string)
}
}

declare module "net.minecraft.world.item.crafting.StonecutterRecipe" {
import { $ResourceLocation, $ResourceLocation$$Type } from "net.minecraft.resources.ResourceLocation"
import { $InputReplacement$$Type } from "dev.latvian.mods.kubejs.recipe.InputReplacement"
import { $Container$$Type } from "net.minecraft.world.Container"
import { $NonNullList } from "net.minecraft.core.NonNullList"
import { $ReplacementMatch$$Type } from "dev.latvian.mods.kubejs.recipe.ReplacementMatch"
import { $ItemStack, $ItemStack$$Type } from "net.minecraft.world.item.ItemStack"
import { $SingleItemRecipe } from "net.minecraft.world.item.crafting.SingleItemRecipe"
import { $Level$$Type } from "net.minecraft.world.level.Level"
import { $RecipeSchema } from "dev.latvian.mods.kubejs.recipe.schema.RecipeSchema"
import { $OutputReplacement$$Type } from "dev.latvian.mods.kubejs.recipe.OutputReplacement"
import { $Ingredient$$Type } from "net.minecraft.world.item.crafting.Ingredient"

export class $StonecutterRecipe extends $SingleItemRecipe {
constructor(resourceLocation0: $ResourceLocation$$Type, string1: string, ingredient2: $Ingredient$$Type, itemStack3: $ItemStack$$Type)

public "getGroup"(): string
public "getMod"(): string
public "getOrCreateId"(): $ResourceLocation
public "getRemainingItems"(container0: $Container$$Type): $NonNullList<$ItemStack>
public "getSchema"(): $RecipeSchema
public "getToastSymbol"(): $ItemStack
public "getType"(): $ResourceLocation
public "hasInput"(match: $ReplacementMatch$$Type): boolean
public "hasOutput"(match: $ReplacementMatch$$Type): boolean
public "isIncomplete"(): boolean
public "isSpecial"(): boolean
public "matches"(container0: $Container$$Type, level1: $Level$$Type): boolean
public "replaceInput"(match: $ReplacementMatch$$Type, with_: $InputReplacement$$Type): boolean
public "replaceOutput"(match: $ReplacementMatch$$Type, with_: $OutputReplacement$$Type): boolean
public "setGroup"(group: string): void
public "showNotification"(): boolean
get "group"(): string
get "mod"(): string
get "orCreateId"(): $ResourceLocation
get "schema"(): $RecipeSchema
get "toastSymbol"(): $ItemStack
get "type"(): $ResourceLocation
get "incomplete"(): boolean
get "special"(): boolean
set "group"(value: string)
}
}

declare module "net.minecraft.world.item.crafting.SimpleCookingSerializer$CookieBaker" {
import { $ResourceLocation$$Type } from "net.minecraft.resources.ResourceLocation"
import { $CookingBookCategory$$Type } from "net.minecraft.world.item.crafting.CookingBookCategory"
import { $AbstractCookingRecipe } from "net.minecraft.world.item.crafting.AbstractCookingRecipe"
import { $ItemStack$$Type } from "net.minecraft.world.item.ItemStack"
import { $Ingredient$$Type } from "net.minecraft.world.item.crafting.Ingredient"

export interface $SimpleCookingSerializer$CookieBaker<T extends $AbstractCookingRecipe = $AbstractCookingRecipe> {
"create"(resourceLocation0: $ResourceLocation$$Type, string1: string, cookingBookCategory2: $CookingBookCategory$$Type, ingredient3: $Ingredient$$Type, itemStack4: $ItemStack$$Type, float5: float, int6: integer): T
}

export namespace $SimpleCookingSerializer$CookieBaker {
const probejs$$marker: never
}
export abstract class $SimpleCookingSerializer$CookieBaker$$Static<T extends $AbstractCookingRecipe = $AbstractCookingRecipe> implements $SimpleCookingSerializer$CookieBaker<T> {
}
}

declare module "net.minecraft.world.item.crafting.ShapelessRecipe$Serializer" {
import { $ResourceLocation$$Type } from "net.minecraft.resources.ResourceLocation"
import { $JsonObject$$Type } from "com.google.gson.JsonObject"
import { $ShapelessRecipe, $ShapelessRecipe$$Type } from "net.minecraft.world.item.crafting.ShapelessRecipe"
import { $Recipe, $Recipe$$Type } from "net.minecraft.world.item.crafting.Recipe"
import { $RecipeSerializer, $RecipeSerializer$$Type } from "net.minecraft.world.item.crafting.RecipeSerializer"
import { $ICondition$IContext$$Type } from "net.minecraftforge.common.crafting.conditions.ICondition$IContext"
import { $FriendlyByteBuf$$Type } from "net.minecraft.network.FriendlyByteBuf"

export class $ShapelessRecipe$Serializer implements $RecipeSerializer<$ShapelessRecipe> {
constructor()

public "fromJson"(resourceLocation0: $ResourceLocation$$Type, jsonObject1: $JsonObject$$Type, iContext2: $ICondition$IContext$$Type): $ShapelessRecipe
public static "register"<S extends $RecipeSerializer<T>, T extends $Recipe<any>>(string0: string, s1: S): S
public "toNetwork"(friendlyByteBuf0: $FriendlyByteBuf$$Type, shapelessRecipe1: $ShapelessRecipe$$Type): void
}
}

declare module "net.minecraft.world.item.crafting.CraftingBookCategory" {
import { $Enum, $Enum$$Type } from "java.lang.Enum"
import { $StringRepresentable, $StringRepresentable$$Type } from "net.minecraft.util.StringRepresentable"
import { $StringRepresentable$EnumCodec } from "net.minecraft.util.StringRepresentable$EnumCodec"
import { $Keyable } from "com.mojang.serialization.Keyable"
import { $Supplier$$Type } from "java.util.function.Supplier"
import { $Function$$Type } from "java.util.function.Function"

export class $CraftingBookCategory extends $Enum<$CraftingBookCategory> implements $StringRepresentable {
static readonly "BUILDING": $CraftingBookCategory
static readonly "CODEC": $StringRepresentable$EnumCodec<$CraftingBookCategory>
static readonly "EQUIPMENT": $CraftingBookCategory
static readonly "MISC": $CraftingBookCategory
static readonly "REDSTONE": $CraftingBookCategory

public static "fromEnum"<E extends ($Enum<E> & $StringRepresentable)>(supplier0: $Supplier$$Type<E[]>): $StringRepresentable$EnumCodec<E>
public static "fromEnumWithMapping"<E extends ($Enum<E> & $StringRepresentable)>(supplier0: $Supplier$$Type<E[]>, function1: $Function$$Type<string, string>): $StringRepresentable$EnumCodec<E>
public "getSerializedName"(): string
public static "keys"(stringRepresentable0s: $StringRepresentable$$Type[]): $Keyable
public static "valueOf"(string0: string): $CraftingBookCategory
public static "values"(): $CraftingBookCategory[]
get "serializedName"(): string
}
}

declare module "net.minecraft.world.item.crafting.Recipe" {
import { $ResourceLocation } from "net.minecraft.resources.ResourceLocation"
import { $RecipeSerializer } from "net.minecraft.world.item.crafting.RecipeSerializer"
import { $RegistryAccess$$Type } from "net.minecraft.core.RegistryAccess"
import { $RecipeSchema } from "dev.latvian.mods.kubejs.recipe.schema.RecipeSchema"
import { $OutputReplacement$$Type } from "dev.latvian.mods.kubejs.recipe.OutputReplacement"
import { $Ingredient } from "net.minecraft.world.item.crafting.Ingredient"
import { $InputReplacement$$Type } from "dev.latvian.mods.kubejs.recipe.InputReplacement"
import { $Container, $Container$$Type } from "net.minecraft.world.Container"
import { $NonNullList } from "net.minecraft.core.NonNullList"
import { $ReplacementMatch$$Type } from "dev.latvian.mods.kubejs.recipe.ReplacementMatch"
import { $ItemStack } from "net.minecraft.world.item.ItemStack"
import { $Level$$Type } from "net.minecraft.world.level.Level"
import { $RecipeKJS } from "dev.latvian.mods.kubejs.core.RecipeKJS"

export interface $Recipe<C extends $Container = $Container> extends $RecipeKJS {
"assemble"(c0: C, registryAccess1: $RegistryAccess$$Type): $ItemStack
"canCraftInDimensions"(int0: integer, int1: integer): boolean
"getGroup"(): string
"getId"(): $ResourceLocation
"getIngredients"(): $NonNullList<$Ingredient>
"getMod"(): string
"getOrCreateId"(): $ResourceLocation
"getRemainingItems"(c0: C): $NonNullList<$ItemStack>
"getResultItem"(registryAccess0: $RegistryAccess$$Type): $ItemStack
"getSchema"(): $RecipeSchema
"getSerializer"(): $RecipeSerializer<any>
"getToastSymbol"(): $ItemStack
"getType"(): $ResourceLocation
"hasInput"(match: $ReplacementMatch$$Type): boolean
"hasOutput"(match: $ReplacementMatch$$Type): boolean
"isIncomplete"(): boolean
"isSpecial"(): boolean
"matches"(c0: C, level1: $Level$$Type): boolean
"replaceInput"(match: $ReplacementMatch$$Type, with_: $InputReplacement$$Type): boolean
"replaceOutput"(match: $ReplacementMatch$$Type, with_: $OutputReplacement$$Type): boolean
"setGroup"(group: string): void
"showNotification"(): boolean
get "group"(): string
get "id"(): $ResourceLocation
get "ingredients"(): $NonNullList<$Ingredient>
get "mod"(): string
get "orCreateId"(): $ResourceLocation
get "schema"(): $RecipeSchema
get "serializer"(): $RecipeSerializer<any>
get "toastSymbol"(): $ItemStack
get "type"(): $ResourceLocation
get "incomplete"(): boolean
get "special"(): boolean
set "group"(value: string)
}

export namespace $Recipe {
const probejs$$marker: never
}
export abstract class $Recipe$$Static<C extends $Container = $Container> implements $Recipe<C> {
}
}

declare module "net.minecraft.world.item.crafting.BookCloningRecipe" {
import { $ResourceLocation, $ResourceLocation$$Type } from "net.minecraft.resources.ResourceLocation"
import { $CraftingBookCategory$$Type } from "net.minecraft.world.item.crafting.CraftingBookCategory"
import { $RecipeSerializer } from "net.minecraft.world.item.crafting.RecipeSerializer"
import { $RegistryAccess$$Type } from "net.minecraft.core.RegistryAccess"
import { $RecipeSchema } from "dev.latvian.mods.kubejs.recipe.schema.RecipeSchema"
import { $OutputReplacement$$Type } from "dev.latvian.mods.kubejs.recipe.OutputReplacement"
import { $CustomRecipe } from "net.minecraft.world.item.crafting.CustomRecipe"
import { $Ingredient } from "net.minecraft.world.item.crafting.Ingredient"
import { $InputReplacement$$Type } from "dev.latvian.mods.kubejs.recipe.InputReplacement"
import { $CraftingContainer$$Type } from "net.minecraft.world.inventory.CraftingContainer"
import { $NonNullList } from "net.minecraft.core.NonNullList"
import { $ReplacementMatch$$Type } from "dev.latvian.mods.kubejs.recipe.ReplacementMatch"
import { $ItemStack } from "net.minecraft.world.item.ItemStack"
import { $Level$$Type } from "net.minecraft.world.level.Level"

export class $BookCloningRecipe extends $CustomRecipe {
constructor(resourceLocation0: $ResourceLocation$$Type, craftingBookCategory1: $CraftingBookCategory$$Type)

public "assemble"(craftingContainer0: $CraftingContainer$$Type, registryAccess1: $RegistryAccess$$Type): $ItemStack
public "canCraftInDimensions"(int0: integer, int1: integer): boolean
public "getGroup"(): string
public "getIngredients"(): $NonNullList<$Ingredient>
public "getMod"(): string
public "getOrCreateId"(): $ResourceLocation
public "getRemainingItems"(craftingContainer0: $CraftingContainer$$Type): $NonNullList<$ItemStack>
public "getSchema"(): $RecipeSchema
public "getSerializer"(): $RecipeSerializer<any>
public "getToastSymbol"(): $ItemStack
public "getType"(): $ResourceLocation
public "hasInput"(match: $ReplacementMatch$$Type): boolean
public "hasOutput"(match: $ReplacementMatch$$Type): boolean
public "isIncomplete"(): boolean
public "matches"(craftingContainer0: $CraftingContainer$$Type, level1: $Level$$Type): boolean
public "replaceInput"(match: $ReplacementMatch$$Type, with_: $InputReplacement$$Type): boolean
public "replaceOutput"(match: $ReplacementMatch$$Type, with_: $OutputReplacement$$Type): boolean
public "setGroup"(group: string): void
public "showNotification"(): boolean
get "group"(): string
get "ingredients"(): $NonNullList<$Ingredient>
get "mod"(): string
get "orCreateId"(): $ResourceLocation
get "schema"(): $RecipeSchema
get "serializer"(): $RecipeSerializer<any>
get "toastSymbol"(): $ItemStack
get "type"(): $ResourceLocation
get "incomplete"(): boolean
set "group"(value: string)
}
}

declare module "net.minecraft.world.item.crafting.SmithingTransformRecipe" {
import { $ResourceLocation, $ResourceLocation$$Type } from "net.minecraft.resources.ResourceLocation"
import { $SmithingTransformRecipeAccessor } from "dev.emi.emi.mixin.accessor.SmithingTransformRecipeAccessor"
import { $RecipeSerializer } from "net.minecraft.world.item.crafting.RecipeSerializer"
import { $RegistryAccess$$Type } from "net.minecraft.core.RegistryAccess"
import { $RecipeSchema } from "dev.latvian.mods.kubejs.recipe.schema.RecipeSchema"
import { $OutputReplacement$$Type } from "dev.latvian.mods.kubejs.recipe.OutputReplacement"
import { $Ingredient, $Ingredient$$Type } from "net.minecraft.world.item.crafting.Ingredient"
import { $CallbackInfoReturnable$$Type } from "org.spongepowered.asm.mixin.injection.callback.CallbackInfoReturnable"
import { $InputReplacement$$Type } from "dev.latvian.mods.kubejs.recipe.InputReplacement"
import { $Container$$Type } from "net.minecraft.world.Container"
import { $AccessorSmithingTransformRecipe } from "vazkii.patchouli.mixin.AccessorSmithingTransformRecipe"
import { $NonNullList } from "net.minecraft.core.NonNullList"
import { $ReplacementMatch$$Type } from "dev.latvian.mods.kubejs.recipe.ReplacementMatch"
import { $SmithingRecipe } from "net.minecraft.world.item.crafting.SmithingRecipe"
import { $ItemStack, $ItemStack$$Type } from "net.minecraft.world.item.ItemStack"
import { $Level$$Type } from "net.minecraft.world.level.Level"
import { $AccessorSmithingTransformRecipe as $AccessorSmithingTransformRecipe$0 } from "com.illusivesoulworks.polymorph.mixin.core.AccessorSmithingTransformRecipe"

export class $SmithingTransformRecipe implements $SmithingRecipe, $AccessorSmithingTransformRecipe$0, $SmithingTransformRecipeAccessor, $AccessorSmithingTransformRecipe {
readonly "addition": $Ingredient
readonly "base": $Ingredient
readonly "result": $ItemStack
readonly "template": $Ingredient

constructor(resourceLocation0: $ResourceLocation$$Type, ingredient1: $Ingredient$$Type, ingredient2: $Ingredient$$Type, ingredient3: $Ingredient$$Type, itemStack4: $ItemStack$$Type)

public "assemble"(container0: $Container$$Type, registryAccess1: $RegistryAccess$$Type): $ItemStack
public "canCraftInDimensions"(int0: integer, int1: integer): boolean
public "getGroup"(): string
public "getId"(): $ResourceLocation
public "getIngredients"(): $NonNullList<$Ingredient>
public "getMod"(): string
public "getOrCreateId"(): $ResourceLocation
public "getRemainingItems"(container0: $Container$$Type): $NonNullList<$ItemStack>
public "getResultItem"(registryAccess0: $RegistryAccess$$Type): $ItemStack
public "getSchema"(): $RecipeSchema
public "getSerializer"(): $RecipeSerializer<any>
public "getToastSymbol"(): $ItemStack
public "getType"(): $ResourceLocation
public "handler$bho000$l2library$isIncomplete$fixJEI"(callbackInfoReturnable0: $CallbackInfoReturnable$$Type): void
public "handler$hjp000$fixSpellbookSlotCount"(container0: $Container$$Type, registryAccess1: $RegistryAccess$$Type, callbackInfoReturnable2: $CallbackInfoReturnable$$Type): void
public "hasInput"(match: $ReplacementMatch$$Type): boolean
public "hasOutput"(match: $ReplacementMatch$$Type): boolean
public "isAdditionIngredient"(itemStack0: $ItemStack$$Type): boolean
public "isBaseIngredient"(itemStack0: $ItemStack$$Type): boolean
public "isIncomplete"(): boolean
public "isSpecial"(): boolean
public "isTemplateIngredient"(itemStack0: $ItemStack$$Type): boolean
public "matches"(container0: $Container$$Type, level1: $Level$$Type): boolean
public "replaceInput"(match: $ReplacementMatch$$Type, with_: $InputReplacement$$Type): boolean
public "replaceOutput"(match: $ReplacementMatch$$Type, with_: $OutputReplacement$$Type): boolean
public "setGroup"(group: string): void
public "showNotification"(): boolean
get "group"(): string
get "id"(): $ResourceLocation
get "ingredients"(): $NonNullList<$Ingredient>
get "mod"(): string
get "orCreateId"(): $ResourceLocation
get "schema"(): $RecipeSchema
get "serializer"(): $RecipeSerializer<any>
get "toastSymbol"(): $ItemStack
get "type"(): $ResourceLocation
get "incomplete"(): boolean
get "special"(): boolean
set "group"(value: string)
}
}

declare module "net.minecraft.world.item.crafting.SingleItemRecipe$Serializer$SingleItemMaker" {
import { $ResourceLocation$$Type } from "net.minecraft.resources.ResourceLocation"
import { $SingleItemRecipe } from "net.minecraft.world.item.crafting.SingleItemRecipe"
import { $ItemStack$$Type } from "net.minecraft.world.item.ItemStack"
import { $Ingredient$$Type } from "net.minecraft.world.item.crafting.Ingredient"

export interface $SingleItemRecipe$Serializer$SingleItemMaker<T extends $SingleItemRecipe = $SingleItemRecipe> {
"create"(resourceLocation0: $ResourceLocation$$Type, string1: string, ingredient2: $Ingredient$$Type, itemStack3: $ItemStack$$Type): T
}

export namespace $SingleItemRecipe$Serializer$SingleItemMaker {
const probejs$$marker: never
}
export abstract class $SingleItemRecipe$Serializer$SingleItemMaker$$Static<T extends $SingleItemRecipe = $SingleItemRecipe> implements $SingleItemRecipe$Serializer$SingleItemMaker<T> {
}
}

declare module "net.minecraft.world.item.crafting.SmithingTrimRecipe" {
import { $ResourceLocation, $ResourceLocation$$Type } from "net.minecraft.resources.ResourceLocation"
import { $RecipeSerializer } from "net.minecraft.world.item.crafting.RecipeSerializer"
import { $AccessorSmithingTrimRecipe } from "vazkii.patchouli.mixin.AccessorSmithingTrimRecipe"
import { $RegistryAccess$$Type } from "net.minecraft.core.RegistryAccess"
import { $RecipeSchema } from "dev.latvian.mods.kubejs.recipe.schema.RecipeSchema"
import { $OutputReplacement$$Type } from "dev.latvian.mods.kubejs.recipe.OutputReplacement"
import { $Ingredient, $Ingredient$$Type } from "net.minecraft.world.item.crafting.Ingredient"
import { $SmithingTrimRecipeAccessor } from "dev.emi.emi.mixin.accessor.SmithingTrimRecipeAccessor"
import { $InputReplacement$$Type } from "dev.latvian.mods.kubejs.recipe.InputReplacement"
import { $Container$$Type } from "net.minecraft.world.Container"
import { $NonNullList } from "net.minecraft.core.NonNullList"
import { $ReplacementMatch$$Type } from "dev.latvian.mods.kubejs.recipe.ReplacementMatch"
import { $SmithingRecipe } from "net.minecraft.world.item.crafting.SmithingRecipe"
import { $ItemStack, $ItemStack$$Type } from "net.minecraft.world.item.ItemStack"
import { $Level$$Type } from "net.minecraft.world.level.Level"
import { $AccessorSmithingTrimRecipe as $AccessorSmithingTrimRecipe$0 } from "com.illusivesoulworks.polymorph.mixin.core.AccessorSmithingTrimRecipe"

export class $SmithingTrimRecipe implements $SmithingRecipe, $AccessorSmithingTrimRecipe$0, $SmithingTrimRecipeAccessor, $AccessorSmithingTrimRecipe {
readonly "addition": $Ingredient
readonly "base": $Ingredient
readonly "template": $Ingredient

constructor(resourceLocation0: $ResourceLocation$$Type, ingredient1: $Ingredient$$Type, ingredient2: $Ingredient$$Type, ingredient3: $Ingredient$$Type)

public "assemble"(container0: $Container$$Type, registryAccess1: $RegistryAccess$$Type): $ItemStack
public "canCraftInDimensions"(int0: integer, int1: integer): boolean
public "getGroup"(): string
public "getId"(): $ResourceLocation
public "getIngredients"(): $NonNullList<$Ingredient>
public "getMod"(): string
public "getOrCreateId"(): $ResourceLocation
public "getRemainingItems"(container0: $Container$$Type): $NonNullList<$ItemStack>
public "getResultItem"(registryAccess0: $RegistryAccess$$Type): $ItemStack
public "getSchema"(): $RecipeSchema
public "getSerializer"(): $RecipeSerializer<any>
public "getToastSymbol"(): $ItemStack
public "getType"(): $ResourceLocation
public "hasInput"(match: $ReplacementMatch$$Type): boolean
public "hasOutput"(match: $ReplacementMatch$$Type): boolean
public "isAdditionIngredient"(itemStack0: $ItemStack$$Type): boolean
public "isBaseIngredient"(itemStack0: $ItemStack$$Type): boolean
public "isIncomplete"(): boolean
public "isSpecial"(): boolean
public "isTemplateIngredient"(itemStack0: $ItemStack$$Type): boolean
public "matches"(container0: $Container$$Type, level1: $Level$$Type): boolean
public "replaceInput"(match: $ReplacementMatch$$Type, with_: $InputReplacement$$Type): boolean
public "replaceOutput"(match: $ReplacementMatch$$Type, with_: $OutputReplacement$$Type): boolean
public "setGroup"(group: string): void
public "showNotification"(): boolean
get "group"(): string
get "id"(): $ResourceLocation
get "ingredients"(): $NonNullList<$Ingredient>
get "mod"(): string
get "orCreateId"(): $ResourceLocation
get "schema"(): $RecipeSchema
get "serializer"(): $RecipeSerializer<any>
get "toastSymbol"(): $ItemStack
get "type"(): $ResourceLocation
get "incomplete"(): boolean
get "special"(): boolean
set "group"(value: string)
}
}

declare module "net.minecraft.world.item.crafting.CampfireCookingRecipe" {
import { $ResourceLocation, $ResourceLocation$$Type } from "net.minecraft.resources.ResourceLocation"
import { $RecipeSerializer } from "net.minecraft.world.item.crafting.RecipeSerializer"
import { $RecipeSchema } from "dev.latvian.mods.kubejs.recipe.schema.RecipeSchema"
import { $OutputReplacement$$Type } from "dev.latvian.mods.kubejs.recipe.OutputReplacement"
import { $Ingredient$$Type } from "net.minecraft.world.item.crafting.Ingredient"
import { $InputReplacement$$Type } from "dev.latvian.mods.kubejs.recipe.InputReplacement"
import { $Container$$Type } from "net.minecraft.world.Container"
import { $CookingBookCategory$$Type } from "net.minecraft.world.item.crafting.CookingBookCategory"
import { $NonNullList } from "net.minecraft.core.NonNullList"
import { $ReplacementMatch$$Type } from "dev.latvian.mods.kubejs.recipe.ReplacementMatch"
import { $ItemStack, $ItemStack$$Type } from "net.minecraft.world.item.ItemStack"
import { $AbstractCookingRecipe } from "net.minecraft.world.item.crafting.AbstractCookingRecipe"

export class $CampfireCookingRecipe extends $AbstractCookingRecipe {
constructor(resourceLocation0: $ResourceLocation$$Type, string1: string, cookingBookCategory2: $CookingBookCategory$$Type, ingredient3: $Ingredient$$Type, itemStack4: $ItemStack$$Type, float5: float, int6: integer)

public "getGroup"(): string
public "getMod"(): string
public "getOrCreateId"(): $ResourceLocation
public "getRemainingItems"(container0: $Container$$Type): $NonNullList<$ItemStack>
public "getSchema"(): $RecipeSchema
public "getSerializer"(): $RecipeSerializer<any>
public "getToastSymbol"(): $ItemStack
public "getType"(): $ResourceLocation
public "hasInput"(match: $ReplacementMatch$$Type): boolean
public "hasOutput"(match: $ReplacementMatch$$Type): boolean
public "isIncomplete"(): boolean
public "isSpecial"(): boolean
public "replaceInput"(match: $ReplacementMatch$$Type, with_: $InputReplacement$$Type): boolean
public "replaceOutput"(match: $ReplacementMatch$$Type, with_: $OutputReplacement$$Type): boolean
public "setGroup"(group: string): void
public "showNotification"(): boolean
get "group"(): string
get "mod"(): string
get "orCreateId"(): $ResourceLocation
get "schema"(): $RecipeSchema
get "serializer"(): $RecipeSerializer<any>
get "toastSymbol"(): $ItemStack
get "type"(): $ResourceLocation
get "incomplete"(): boolean
get "special"(): boolean
set "group"(value: string)
}
}

declare module "net.minecraft.world.item.crafting.AbstractCookingRecipe" {
import { $ResourceLocation, $ResourceLocation$$Type } from "net.minecraft.resources.ResourceLocation"
import { $RecipeSerializer } from "net.minecraft.world.item.crafting.RecipeSerializer"
import { $RegistryAccess$$Type } from "net.minecraft.core.RegistryAccess"
import { $RecipeSchema } from "dev.latvian.mods.kubejs.recipe.schema.RecipeSchema"
import { $OutputReplacement$$Type } from "dev.latvian.mods.kubejs.recipe.OutputReplacement"
import { $Ingredient, $Ingredient$$Type } from "net.minecraft.world.item.crafting.Ingredient"
import { $InputReplacement$$Type } from "dev.latvian.mods.kubejs.recipe.InputReplacement"
import { $Container, $Container$$Type } from "net.minecraft.world.Container"
import { $CookingBookCategory, $CookingBookCategory$$Type } from "net.minecraft.world.item.crafting.CookingBookCategory"
import { $Recipe } from "net.minecraft.world.item.crafting.Recipe"
import { $NonNullList } from "net.minecraft.core.NonNullList"
import { $ReplacementMatch$$Type } from "dev.latvian.mods.kubejs.recipe.ReplacementMatch"
import { $ItemStack, $ItemStack$$Type } from "net.minecraft.world.item.ItemStack"
import { $Level$$Type } from "net.minecraft.world.level.Level"
import { $RecipeType$$Type } from "net.minecraft.world.item.crafting.RecipeType"

export class $AbstractCookingRecipe implements $Recipe<$Container> {
constructor(recipeType0: $RecipeType$$Type<any>, resourceLocation1: $ResourceLocation$$Type, string2: string, cookingBookCategory3: $CookingBookCategory$$Type, ingredient4: $Ingredient$$Type, itemStack5: $ItemStack$$Type, float6: float, int7: integer)

public "assemble"(container0: $Container$$Type, registryAccess1: $RegistryAccess$$Type): $ItemStack
public "canCraftInDimensions"(int0: integer, int1: integer): boolean
public "category"(): $CookingBookCategory
public "getCookingTime"(): integer
public "getExperience"(): float
public "getGroup"(): string
public "getId"(): $ResourceLocation
public "getIngredients"(): $NonNullList<$Ingredient>
public "getMod"(): string
public "getOrCreateId"(): $ResourceLocation
public "getRemainingItems"(container0: $Container$$Type): $NonNullList<$ItemStack>
public "getResultItem"(registryAccess0: $RegistryAccess$$Type): $ItemStack
public "getSchema"(): $RecipeSchema
public "getSerializer"(): $RecipeSerializer<any>
public "getToastSymbol"(): $ItemStack
public "getType"(): $ResourceLocation
public "hasInput"(match: $ReplacementMatch$$Type): boolean
public "hasOutput"(match: $ReplacementMatch$$Type): boolean
public "isIncomplete"(): boolean
public "isSpecial"(): boolean
public "matches"(container0: $Container$$Type, level1: $Level$$Type): boolean
public "replaceInput"(match: $ReplacementMatch$$Type, with_: $InputReplacement$$Type): boolean
public "replaceOutput"(match: $ReplacementMatch$$Type, with_: $OutputReplacement$$Type): boolean
public "setGroup"(group: string): void
public "showNotification"(): boolean
get "cookingTime"(): integer
get "experience"(): float
get "group"(): string
get "id"(): $ResourceLocation
get "ingredients"(): $NonNullList<$Ingredient>
get "mod"(): string
get "orCreateId"(): $ResourceLocation
get "schema"(): $RecipeSchema
get "serializer"(): $RecipeSerializer<any>
get "toastSymbol"(): $ItemStack
get "type"(): $ResourceLocation
get "incomplete"(): boolean
get "special"(): boolean
set "group"(value: string)
}
}

declare module "net.minecraft.world.item.crafting.ShapedRecipe$Serializer" {
import { $ResourceLocation$$Type } from "net.minecraft.resources.ResourceLocation"
import { $JsonObject$$Type } from "com.google.gson.JsonObject"
import { $Recipe, $Recipe$$Type } from "net.minecraft.world.item.crafting.Recipe"
import { $RecipeSerializer, $RecipeSerializer$$Type } from "net.minecraft.world.item.crafting.RecipeSerializer"
import { $ICondition$IContext$$Type } from "net.minecraftforge.common.crafting.conditions.ICondition$IContext"
import { $FriendlyByteBuf$$Type } from "net.minecraft.network.FriendlyByteBuf"
import { $ShapedRecipe, $ShapedRecipe$$Type } from "net.minecraft.world.item.crafting.ShapedRecipe"

export class $ShapedRecipe$Serializer implements $RecipeSerializer<$ShapedRecipe> {
constructor()

public "fromJson"(resourceLocation0: $ResourceLocation$$Type, jsonObject1: $JsonObject$$Type, iContext2: $ICondition$IContext$$Type): $ShapedRecipe
public static "register"<S extends $RecipeSerializer<T>, T extends $Recipe<any>>(string0: string, s1: S): S
public "toNetwork"(friendlyByteBuf0: $FriendlyByteBuf$$Type, shapedRecipe1: $ShapedRecipe$$Type): void
}
}

declare module "net.minecraft.world.item.crafting.MapExtendingRecipe" {
import { $ResourceLocation, $ResourceLocation$$Type } from "net.minecraft.resources.ResourceLocation"
import { $InputReplacement$$Type } from "dev.latvian.mods.kubejs.recipe.InputReplacement"
import { $CraftingBookCategory$$Type } from "net.minecraft.world.item.crafting.CraftingBookCategory"
import { $CraftingContainer$$Type } from "net.minecraft.world.inventory.CraftingContainer"
import { $NonNullList } from "net.minecraft.core.NonNullList"
import { $ReplacementMatch$$Type } from "dev.latvian.mods.kubejs.recipe.ReplacementMatch"
import { $ItemStack } from "net.minecraft.world.item.ItemStack"
import { $RecipeSchema } from "dev.latvian.mods.kubejs.recipe.schema.RecipeSchema"
import { $OutputReplacement$$Type } from "dev.latvian.mods.kubejs.recipe.OutputReplacement"
import { $ShapedRecipe } from "net.minecraft.world.item.crafting.ShapedRecipe"

export class $MapExtendingRecipe extends $ShapedRecipe {
constructor(resourceLocation0: $ResourceLocation$$Type, craftingBookCategory1: $CraftingBookCategory$$Type)

public "getGroup"(): string
public "getMod"(): string
public "getOrCreateId"(): $ResourceLocation
public "getRemainingItems"(craftingContainer0: $CraftingContainer$$Type): $NonNullList<$ItemStack>
public "getSchema"(): $RecipeSchema
public "getToastSymbol"(): $ItemStack
public "getType"(): $ResourceLocation
public "hasInput"(match: $ReplacementMatch$$Type): boolean
public "hasOutput"(match: $ReplacementMatch$$Type): boolean
public "isSpecial"(): boolean
public "replaceInput"(match: $ReplacementMatch$$Type, with_: $InputReplacement$$Type): boolean
public "replaceOutput"(match: $ReplacementMatch$$Type, with_: $OutputReplacement$$Type): boolean
public "setGroup"(group: string): void
get "group"(): string
get "mod"(): string
get "orCreateId"(): $ResourceLocation
get "schema"(): $RecipeSchema
get "toastSymbol"(): $ItemStack
get "type"(): $ResourceLocation
get "special"(): boolean
set "group"(value: string)
}
}

