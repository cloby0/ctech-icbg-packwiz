declare module "vectorwing.farmersdelight.common.mixin.accessor.RecipeManagerAccessor" {
import { $ResourceLocation$$Type } from "net.minecraft.resources.ResourceLocation"
import { $Recipe$$Type } from "net.minecraft.world.item.crafting.Recipe"
import { $Map$$Type } from "java.util.Map"
import { $RecipeType } from "net.minecraft.world.item.crafting.RecipeType"

/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $RecipeManagerAccessor$$Type = ($RecipeManagerAccessor | ((arg0: $RecipeType<T>) => $Map$$Type<$ResourceLocation$$Type, $Recipe$$Type<C>>));
}

