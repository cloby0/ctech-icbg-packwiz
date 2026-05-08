declare module "org.thecelestialworkshop.celestisynth.mixin.RecipeManagerAccessor" {
import { $ResourceLocation$$Type } from "net.minecraft.resources.ResourceLocation"
import { $Map$$Type } from "java.util.Map"
import { $RecipeType } from "net.minecraft.world.item.crafting.RecipeType"

/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $RecipeManagerAccessor$$Type = ($RecipeManagerAccessor | ((arg0: $RecipeType<T>) => $Map$$Type<$ResourceLocation$$Type, T>));
}

declare module "org.thecelestialworkshop.celestisynth.mixin.LivingEntityInvoker" {
import { $DamageSource } from "net.minecraft.world.damagesource.DamageSource"

/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $LivingEntityInvoker$$Type = ($LivingEntityInvoker | ((arg0: $DamageSource, arg1: float) => void));
}

declare module "org.thecelestialworkshop.celestisynth.api.mixin.PlayerMixinSupport" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $PlayerMixinSupport$$Type = ($PlayerMixinSupport);
}

