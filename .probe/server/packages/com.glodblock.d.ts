declare module "com.glodblock.github.extendedae.util.MutableSlot" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $MutableSlot$$Type = ($MutableSlot);
}

declare module "com.glodblock.github.extendedae.util.RecipeManagerAccessor" {
import { $ResourceLocation$$Type } from "net.minecraft.resources.ResourceLocation"
import { $Map$$Type } from "java.util.Map"
import { $RecipeType } from "net.minecraft.world.item.crafting.RecipeType"

/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $RecipeManagerAccessor$$Type = ($RecipeManagerAccessor | ((arg0: $RecipeType<T>) => $Map$$Type<$ResourceLocation$$Type, T>));
}

