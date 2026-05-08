declare module "net.minecraft.world.item.crafting.ShulkerBoxColoring" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $ShulkerBoxColoring$$Type = ($ShulkerBoxColoring);
}

declare module "net.minecraft.world.item.crafting.RepairItemRecipe" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $RepairItemRecipe$$Type = ($RepairItemRecipe);
}

declare module "net.minecraft.world.item.crafting.ShapelessRecipe" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $ShapelessRecipe$$Type = ($ShapelessRecipe);
}

declare module "net.minecraft.world.item.crafting.DecoratedPotRecipe" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $DecoratedPotRecipe$$Type = ($DecoratedPotRecipe);
}

declare module "net.minecraft.world.item.crafting.FireworkStarRecipe" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $FireworkStarRecipe$$Type = ($FireworkStarRecipe);
}

declare module "net.minecraft.world.item.crafting.ArmorDyeRecipe" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $ArmorDyeRecipe$$Type = ($ArmorDyeRecipe);
}

declare module "net.minecraft.world.item.crafting.SmithingTransformRecipe$Serializer" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $SmithingTransformRecipe$Serializer$$Type = ($SmithingTransformRecipe$Serializer);
}

declare module "net.minecraft.world.item.crafting.ShapedRecipe" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $ShapedRecipe$$Type = ($ShapedRecipe);
}

declare module "net.minecraft.world.item.crafting.SmeltingRecipe" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $SmeltingRecipe$$Type = ($SmeltingRecipe);
}

declare module "net.minecraft.world.item.crafting.RecipeSerializer" {
import { $ResourceLocation$$Type } from "net.minecraft.resources.ResourceLocation"
import { $TippedArrowRecipe } from "net.minecraft.world.item.crafting.TippedArrowRecipe"
import { $JsonObject$$Type } from "com.google.gson.JsonObject"
import { $MapCloningRecipe } from "net.minecraft.world.item.crafting.MapCloningRecipe"
import { $ShieldDecorationRecipe } from "net.minecraft.world.item.crafting.ShieldDecorationRecipe"
import { $ArmorDyeRecipe } from "net.minecraft.world.item.crafting.ArmorDyeRecipe"
import { $CampfireCookingRecipe } from "net.minecraft.world.item.crafting.CampfireCookingRecipe"
import { $FriendlyByteBuf$$Type } from "net.minecraft.network.FriendlyByteBuf"
import { $SmithingTrimRecipe } from "net.minecraft.world.item.crafting.SmithingTrimRecipe"
import { $ShapelessRecipe } from "net.minecraft.world.item.crafting.ShapelessRecipe"
import { $FireworkStarFadeRecipe } from "net.minecraft.world.item.crafting.FireworkStarFadeRecipe"
import { $BookCloningRecipe } from "net.minecraft.world.item.crafting.BookCloningRecipe"
import { $SmithingTransformRecipe } from "net.minecraft.world.item.crafting.SmithingTransformRecipe"
import { $SuspiciousStewRecipe } from "net.minecraft.world.item.crafting.SuspiciousStewRecipe"
import { $IForgeRecipeSerializer } from "net.minecraftforge.common.extensions.IForgeRecipeSerializer"
import { $ICondition$IContext$$Type } from "net.minecraftforge.common.crafting.conditions.ICondition$IContext"
import { $FireworkRocketRecipe } from "net.minecraft.world.item.crafting.FireworkRocketRecipe"
import { $ShulkerBoxColoring } from "net.minecraft.world.item.crafting.ShulkerBoxColoring"
import { $SmeltingRecipe } from "net.minecraft.world.item.crafting.SmeltingRecipe"
import { $BlastingRecipe } from "net.minecraft.world.item.crafting.BlastingRecipe"
import { $StonecutterRecipe } from "net.minecraft.world.item.crafting.StonecutterRecipe"
import { $FireworkStarRecipe } from "net.minecraft.world.item.crafting.FireworkStarRecipe"
import { $SmokingRecipe } from "net.minecraft.world.item.crafting.SmokingRecipe"
import { $Recipe, $Recipe$$Type } from "net.minecraft.world.item.crafting.Recipe"
import { $MapExtendingRecipe } from "net.minecraft.world.item.crafting.MapExtendingRecipe"
import { $RepairItemRecipe } from "net.minecraft.world.item.crafting.RepairItemRecipe"
import { $BannerDuplicateRecipe } from "net.minecraft.world.item.crafting.BannerDuplicateRecipe"
import { $ShapedRecipe } from "net.minecraft.world.item.crafting.ShapedRecipe"
import { $DecoratedPotRecipe } from "net.minecraft.world.item.crafting.DecoratedPotRecipe"

export interface $RecipeSerializer<T extends $Recipe<any> = $Recipe<any>> extends $IForgeRecipeSerializer<T> {
"fromJson"(resourceLocation0: $ResourceLocation$$Type, jsonObject1: $JsonObject$$Type): T
"fromJson"(resourceLocation0: $ResourceLocation$$Type, jsonObject1: $JsonObject$$Type, iContext2: $ICondition$IContext$$Type): T
"fromNetwork"(resourceLocation0: $ResourceLocation$$Type, friendlyByteBuf1: $FriendlyByteBuf$$Type): T
"toNetwork"(friendlyByteBuf0: $FriendlyByteBuf$$Type, t1: T): void
/** This field is a type stub generated by ProbeJS and shall not be used in any sense. */
"probejsInternal$$Literal": Special.RecipeSerializer
/** This field is a type stub generated by ProbeJS and shall not be used in any sense. */
"probejsInternal$$Tag": Special.RecipeSerializerTag
}

export namespace $RecipeSerializer {
const ARMOR_DYE: $RecipeSerializer<$ArmorDyeRecipe>
const BANNER_DUPLICATE: $RecipeSerializer<$BannerDuplicateRecipe>
const BLASTING_RECIPE: $RecipeSerializer<$BlastingRecipe>
const BOOK_CLONING: $RecipeSerializer<$BookCloningRecipe>
const CAMPFIRE_COOKING_RECIPE: $RecipeSerializer<$CampfireCookingRecipe>
const DECORATED_POT_RECIPE: $RecipeSerializer<$DecoratedPotRecipe>
const FIREWORK_ROCKET: $RecipeSerializer<$FireworkRocketRecipe>
const FIREWORK_STAR: $RecipeSerializer<$FireworkStarRecipe>
const FIREWORK_STAR_FADE: $RecipeSerializer<$FireworkStarFadeRecipe>
const MAP_CLONING: $RecipeSerializer<$MapCloningRecipe>
const MAP_EXTENDING: $RecipeSerializer<$MapExtendingRecipe>
const REPAIR_ITEM: $RecipeSerializer<$RepairItemRecipe>
const SHAPED_RECIPE: $RecipeSerializer<$ShapedRecipe>
const SHAPELESS_RECIPE: $RecipeSerializer<$ShapelessRecipe>
const SHIELD_DECORATION: $RecipeSerializer<$ShieldDecorationRecipe>
const SHULKER_BOX_COLORING: $RecipeSerializer<$ShulkerBoxColoring>
const SMELTING_RECIPE: $RecipeSerializer<$SmeltingRecipe>
const SMITHING_TRANSFORM: $RecipeSerializer<$SmithingTransformRecipe>
const SMITHING_TRIM: $RecipeSerializer<$SmithingTrimRecipe>
const SMOKING_RECIPE: $RecipeSerializer<$SmokingRecipe>
const STONECUTTER: $RecipeSerializer<$StonecutterRecipe>
const SUSPICIOUS_STEW: $RecipeSerializer<$SuspiciousStewRecipe>
const TIPPED_ARROW: $RecipeSerializer<$TippedArrowRecipe>
function register<S extends $RecipeSerializer<T>, T extends $Recipe<any>>(string0: string, s1: S): S
}
export abstract class $RecipeSerializer$$Static<T extends $Recipe<any> = $Recipe<any>> implements $RecipeSerializer<T> {
static readonly "ARMOR_DYE": $RecipeSerializer<$ArmorDyeRecipe>
static readonly "BANNER_DUPLICATE": $RecipeSerializer<$BannerDuplicateRecipe>
static readonly "BLASTING_RECIPE": $RecipeSerializer<$BlastingRecipe>
static readonly "BOOK_CLONING": $RecipeSerializer<$BookCloningRecipe>
static readonly "CAMPFIRE_COOKING_RECIPE": $RecipeSerializer<$CampfireCookingRecipe>
static readonly "DECORATED_POT_RECIPE": $RecipeSerializer<$DecoratedPotRecipe>
static readonly "FIREWORK_ROCKET": $RecipeSerializer<$FireworkRocketRecipe>
static readonly "FIREWORK_STAR": $RecipeSerializer<$FireworkStarRecipe>
static readonly "FIREWORK_STAR_FADE": $RecipeSerializer<$FireworkStarFadeRecipe>
static readonly "MAP_CLONING": $RecipeSerializer<$MapCloningRecipe>
static readonly "MAP_EXTENDING": $RecipeSerializer<$MapExtendingRecipe>
static readonly "REPAIR_ITEM": $RecipeSerializer<$RepairItemRecipe>
static readonly "SHAPED_RECIPE": $RecipeSerializer<$ShapedRecipe>
static readonly "SHAPELESS_RECIPE": $RecipeSerializer<$ShapelessRecipe>
static readonly "SHIELD_DECORATION": $RecipeSerializer<$ShieldDecorationRecipe>
static readonly "SHULKER_BOX_COLORING": $RecipeSerializer<$ShulkerBoxColoring>
static readonly "SMELTING_RECIPE": $RecipeSerializer<$SmeltingRecipe>
static readonly "SMITHING_TRANSFORM": $RecipeSerializer<$SmithingTransformRecipe>
static readonly "SMITHING_TRIM": $RecipeSerializer<$SmithingTrimRecipe>
static readonly "SMOKING_RECIPE": $RecipeSerializer<$SmokingRecipe>
static readonly "STONECUTTER": $RecipeSerializer<$StonecutterRecipe>
static readonly "SUSPICIOUS_STEW": $RecipeSerializer<$SuspiciousStewRecipe>
static readonly "TIPPED_ARROW": $RecipeSerializer<$TippedArrowRecipe>

static "register"<S extends $RecipeSerializer<T>, T extends $Recipe<any>>(string0: string, s1: S): S
}
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $RecipeSerializer$$Type<T extends $Recipe<any> = $Recipe<any>> = ($RecipeSerializer<T> | Special.RecipeSerializer);
}

declare module "net.minecraft.world.item.crafting.MapCloningRecipe" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $MapCloningRecipe$$Type = ($MapCloningRecipe);
}

declare module "net.minecraft.world.item.crafting.SmithingRecipe" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $SmithingRecipe$$Type = ($SmithingRecipe);
}

declare module "net.minecraft.world.item.crafting.Ingredient" {
import { $ItemStack$$Type } from "net.minecraft.world.item.ItemStack"

/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $Ingredient$$Type = ($Ingredient | $ItemStack$$Type | $Ingredient$$Type[] | RegExp | "*" | "-" | `#${Special.ItemTag}` | `@${Special.Mod}` | `%${Special.CreativeModeTab}`);
}

declare module "net.minecraft.world.item.crafting.SimpleCookingSerializer" {
import { $AbstractCookingRecipe, $AbstractCookingRecipe$$Type } from "net.minecraft.world.item.crafting.AbstractCookingRecipe"

/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $SimpleCookingSerializer$$Type<T extends $AbstractCookingRecipe = $AbstractCookingRecipe> = ($SimpleCookingSerializer<T>);
}

declare module "net.minecraft.world.item.crafting.CookingBookCategory" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $CookingBookCategory$$Type = ($CookingBookCategory | ("food" | "blocks" | "misc"));
}

declare module "net.minecraft.world.item.crafting.SingleItemRecipe$Serializer" {
import { $SingleItemRecipe, $SingleItemRecipe$$Type } from "net.minecraft.world.item.crafting.SingleItemRecipe"

/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $SingleItemRecipe$Serializer$$Type<T extends $SingleItemRecipe = $SingleItemRecipe> = ($SingleItemRecipe$Serializer<T>);
}

declare module "net.minecraft.world.item.crafting.ShieldDecorationRecipe" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $ShieldDecorationRecipe$$Type = ($ShieldDecorationRecipe);
}

declare module "net.minecraft.world.item.crafting.SingleItemRecipe" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $SingleItemRecipe$$Type = ($SingleItemRecipe);
}

declare module "net.minecraft.world.item.crafting.Ingredient$Value" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $Ingredient$Value$$Type = ($Ingredient$Value);
}

declare module "net.minecraft.world.item.crafting.CraftingRecipe" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $CraftingRecipe$$Type = ($CraftingRecipe);
}

declare module "net.minecraft.world.item.crafting.BannerDuplicateRecipe" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $BannerDuplicateRecipe$$Type = ($BannerDuplicateRecipe);
}

declare module "net.minecraft.world.item.crafting.FireworkStarFadeRecipe" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $FireworkStarFadeRecipe$$Type = ($FireworkStarFadeRecipe);
}

declare module "net.minecraft.world.item.crafting.SuspiciousStewRecipe" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $SuspiciousStewRecipe$$Type = ($SuspiciousStewRecipe);
}

declare module "net.minecraft.world.item.crafting.RecipeManager$CachedCheck" {
import { $Container, $Container$$Type } from "net.minecraft.world.Container"
import { $Recipe, $Recipe$$Type } from "net.minecraft.world.item.crafting.Recipe"
import { $Optional$$Type } from "java.util.Optional"
import { $Level } from "net.minecraft.world.level.Level"

/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $RecipeManager$CachedCheck$$Type<C extends $Container = $Container, T extends $Recipe<C> = $Recipe<C>> = ($RecipeManager$CachedCheck<C, T> | ((arg0: C, arg1: $Level) => $Optional$$Type<T>));
}

declare module "net.minecraft.world.item.crafting.FireworkRocketRecipe" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $FireworkRocketRecipe$$Type = ($FireworkRocketRecipe);
}

declare module "net.minecraft.world.item.crafting.BlastingRecipe" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $BlastingRecipe$$Type = ($BlastingRecipe);
}

declare module "net.minecraft.world.item.crafting.SmithingTrimRecipe$Serializer" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $SmithingTrimRecipe$Serializer$$Type = ($SmithingTrimRecipe$Serializer);
}

declare module "net.minecraft.world.item.crafting.SimpleCraftingRecipeSerializer" {
import { $CraftingRecipe, $CraftingRecipe$$Type } from "net.minecraft.world.item.crafting.CraftingRecipe"

/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $SimpleCraftingRecipeSerializer$$Type<T extends $CraftingRecipe = $CraftingRecipe> = ($SimpleCraftingRecipeSerializer<T>);
}

declare module "net.minecraft.world.item.crafting.TippedArrowRecipe" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $TippedArrowRecipe$$Type = ($TippedArrowRecipe);
}

declare module "net.minecraft.world.item.crafting.RecipeType" {
import { $ResourceLocation$$Type } from "net.minecraft.resources.ResourceLocation"
import { $SmokingRecipe } from "net.minecraft.world.item.crafting.SmokingRecipe"
import { $CraftingRecipe } from "net.minecraft.world.item.crafting.CraftingRecipe"
import { $Recipe, $Recipe$$Type } from "net.minecraft.world.item.crafting.Recipe"
import { $SmeltingRecipe } from "net.minecraft.world.item.crafting.SmeltingRecipe"
import { $CampfireCookingRecipe } from "net.minecraft.world.item.crafting.CampfireCookingRecipe"
import { $SmithingRecipe } from "net.minecraft.world.item.crafting.SmithingRecipe"
import { $BlastingRecipe } from "net.minecraft.world.item.crafting.BlastingRecipe"
import { $StonecutterRecipe } from "net.minecraft.world.item.crafting.StonecutterRecipe"

export interface $RecipeType<T extends $Recipe<any> = $Recipe<any>> {
/** This field is a type stub generated by ProbeJS and shall not be used in any sense. */
"probejsInternal$$Literal": Special.RecipeType
/** This field is a type stub generated by ProbeJS and shall not be used in any sense. */
"probejsInternal$$Tag": Special.RecipeTypeTag
}

export namespace $RecipeType {
const BLASTING: $RecipeType<$BlastingRecipe>
const CAMPFIRE_COOKING: $RecipeType<$CampfireCookingRecipe>
const CRAFTING: $RecipeType<$CraftingRecipe>
const SMELTING: $RecipeType<$SmeltingRecipe>
const SMITHING: $RecipeType<$SmithingRecipe>
const SMOKING: $RecipeType<$SmokingRecipe>
const STONECUTTING: $RecipeType<$StonecutterRecipe>
function register<T extends $Recipe<any>>(string0: string): $RecipeType<T>
function simple<T extends $Recipe<any>>(resourceLocation0: $ResourceLocation$$Type): $RecipeType<T>
}
export abstract class $RecipeType$$Static<T extends $Recipe<any> = $Recipe<any>> implements $RecipeType<T> {
static readonly "BLASTING": $RecipeType<$BlastingRecipe>
static readonly "CAMPFIRE_COOKING": $RecipeType<$CampfireCookingRecipe>
static readonly "CRAFTING": $RecipeType<$CraftingRecipe>
static readonly "SMELTING": $RecipeType<$SmeltingRecipe>
static readonly "SMITHING": $RecipeType<$SmithingRecipe>
static readonly "SMOKING": $RecipeType<$SmokingRecipe>
static readonly "STONECUTTING": $RecipeType<$StonecutterRecipe>

static "register"<T extends $Recipe<any>>(string0: string): $RecipeType<T>
static "simple"<T extends $Recipe<any>>(resourceLocation0: $ResourceLocation$$Type): $RecipeType<T>
}
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $RecipeType$$Type<T extends $Recipe<any> = $Recipe<any>> = ($RecipeType<T> | Special.RecipeType);
}

declare module "net.minecraft.world.item.crafting.SmokingRecipe" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $SmokingRecipe$$Type = ($SmokingRecipe);
}

declare module "net.minecraft.world.item.crafting.SimpleCraftingRecipeSerializer$Factory" {
import { $ResourceLocation } from "net.minecraft.resources.ResourceLocation"
import { $CraftingBookCategory } from "net.minecraft.world.item.crafting.CraftingBookCategory"
import { $CraftingRecipe, $CraftingRecipe$$Type } from "net.minecraft.world.item.crafting.CraftingRecipe"

/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $SimpleCraftingRecipeSerializer$Factory$$Type<T extends $CraftingRecipe = $CraftingRecipe> = ($SimpleCraftingRecipeSerializer$Factory<T> | ((arg0: $ResourceLocation, arg1: $CraftingBookCategory) => T));
}

declare module "net.minecraft.world.item.crafting.RecipeManager" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $RecipeManager$$Type = ($RecipeManager);
}

declare module "net.minecraft.world.item.crafting.CustomRecipe" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $CustomRecipe$$Type = ($CustomRecipe);
}

declare module "net.minecraft.world.item.crafting.StonecutterRecipe" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $StonecutterRecipe$$Type = ($StonecutterRecipe);
}

declare module "net.minecraft.world.item.crafting.SimpleCookingSerializer$CookieBaker" {
import { $ResourceLocation } from "net.minecraft.resources.ResourceLocation"
import { $CookingBookCategory } from "net.minecraft.world.item.crafting.CookingBookCategory"
import { $AbstractCookingRecipe, $AbstractCookingRecipe$$Type } from "net.minecraft.world.item.crafting.AbstractCookingRecipe"
import { $ItemStack } from "net.minecraft.world.item.ItemStack"
import { $Ingredient } from "net.minecraft.world.item.crafting.Ingredient"

/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $SimpleCookingSerializer$CookieBaker$$Type<T extends $AbstractCookingRecipe = $AbstractCookingRecipe> = ($SimpleCookingSerializer$CookieBaker<T> | ((arg0: $ResourceLocation, arg1: string, arg2: $CookingBookCategory, arg3: $Ingredient, arg4: $ItemStack, arg5: float, arg6: integer) => T));
}

declare module "net.minecraft.world.item.crafting.ShapelessRecipe$Serializer" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $ShapelessRecipe$Serializer$$Type = ($ShapelessRecipe$Serializer);
}

declare module "net.minecraft.world.item.crafting.CraftingBookCategory" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $CraftingBookCategory$$Type = ($CraftingBookCategory | ("building" | "redstone" | "equipment" | "misc"));
}

declare module "net.minecraft.world.item.crafting.Recipe" {
import { $Container, $Container$$Type } from "net.minecraft.world.Container"

/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $Recipe$$Type<C extends $Container = $Container> = ($Recipe<C>);
}

declare module "net.minecraft.world.item.crafting.BookCloningRecipe" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $BookCloningRecipe$$Type = ($BookCloningRecipe);
}

declare module "net.minecraft.world.item.crafting.SmithingTransformRecipe" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $SmithingTransformRecipe$$Type = ($SmithingTransformRecipe);
}

declare module "net.minecraft.world.item.crafting.SingleItemRecipe$Serializer$SingleItemMaker" {
import { $ResourceLocation } from "net.minecraft.resources.ResourceLocation"
import { $SingleItemRecipe, $SingleItemRecipe$$Type } from "net.minecraft.world.item.crafting.SingleItemRecipe"
import { $ItemStack } from "net.minecraft.world.item.ItemStack"
import { $Ingredient } from "net.minecraft.world.item.crafting.Ingredient"

/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $SingleItemRecipe$Serializer$SingleItemMaker$$Type<T extends $SingleItemRecipe = $SingleItemRecipe> = ($SingleItemRecipe$Serializer$SingleItemMaker<T> | ((arg0: $ResourceLocation, arg1: string, arg2: $Ingredient, arg3: $ItemStack) => T));
}

declare module "net.minecraft.world.item.crafting.SmithingTrimRecipe" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $SmithingTrimRecipe$$Type = ($SmithingTrimRecipe);
}

declare module "net.minecraft.world.item.crafting.CampfireCookingRecipe" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $CampfireCookingRecipe$$Type = ($CampfireCookingRecipe);
}

declare module "net.minecraft.world.item.crafting.AbstractCookingRecipe" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $AbstractCookingRecipe$$Type = ($AbstractCookingRecipe);
}

declare module "net.minecraft.world.item.crafting.ShapedRecipe$Serializer" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $ShapedRecipe$Serializer$$Type = ($ShapedRecipe$Serializer);
}

declare module "net.minecraft.world.item.crafting.MapExtendingRecipe" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $MapExtendingRecipe$$Type = ($MapExtendingRecipe);
}

