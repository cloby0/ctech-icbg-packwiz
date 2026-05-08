declare module "com.gregtechceu.gtceu.api.capability.IEnergyInfoProvider$EnergyInfo" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $IEnergyInfoProvider$EnergyInfo$$Type = ($IEnergyInfoProvider$EnergyInfo);
}

declare module "com.gregtechceu.gtceu.api.capability.ICoverable" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $ICoverable$$Type = ($ICoverable);
}

declare module "com.gregtechceu.gtceu.api.capability.IOpticalComputationProvider" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $IOpticalComputationProvider$$Type = ($IOpticalComputationProvider);
}

declare module "com.gregtechceu.gtceu.api.capability.IEnergyContainer" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $IEnergyContainer$$Type = ($IEnergyContainer);
}

declare module "com.gregtechceu.gtceu.api.capability.IDataAccessHatch" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $IDataAccessHatch$$Type = ($IDataAccessHatch);
}

declare module "com.gregtechceu.gtceu.api.capability.IMedicalConditionTracker" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $IMedicalConditionTracker$$Type = ($IMedicalConditionTracker);
}

declare module "com.gregtechceu.gtceu.api.capability.ILaserContainer" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $ILaserContainer$$Type = ($ILaserContainer);
}

declare module "com.gregtechceu.gtceu.api.capability.IWorkable" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $IWorkable$$Type = ($IWorkable);
}

declare module "com.gregtechceu.gtceu.api.capability.IPropertyFluidFilter" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $IPropertyFluidFilter$$Type = ($IPropertyFluidFilter);
}

declare module "com.gregtechceu.gtceu.api.capability.recipe.IRecipeHandler" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $IRecipeHandler$$Type<K = any> = ($IRecipeHandler<K>);
}

declare module "com.gregtechceu.gtceu.api.capability.IEnergyInfoProvider" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $IEnergyInfoProvider$$Type = ($IEnergyInfoProvider);
}

declare module "com.gregtechceu.gtceu.api.capability.recipe.IO" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $IO$$Type = ($IO | ("in" | "out" | "both" | "none"));
}

declare module "com.gregtechceu.gtceu.api.capability.recipe.RecipeCapability" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $RecipeCapability$$Type<T = any> = ($RecipeCapability<T>);
}

declare module "com.gregtechceu.gtceu.api.capability.ICleanroomReceiver" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $ICleanroomReceiver$$Type = ($ICleanroomReceiver);
}

declare module "com.gregtechceu.gtceu.api.capability.IHazardParticleContainer" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $IHazardParticleContainer$$Type = ($IHazardParticleContainer);
}

declare module "com.gregtechceu.gtceu.api.capability.IOpticalDataAccessHatch" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $IOpticalDataAccessHatch$$Type = ($IOpticalDataAccessHatch);
}

declare module "com.gregtechceu.gtceu.api.capability.recipe.IFilteredHandler" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $IFilteredHandler$$Type<K = any> = ($IFilteredHandler<K>);
}

declare module "com.gregtechceu.gtceu.api.capability.IParallelHatch" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $IParallelHatch$$Type = ($IParallelHatch | (() => integer));
}

declare module "com.gregtechceu.gtceu.api.capability.IToolable" {
import { $GTToolType, $GTToolType$$Type } from "com.gregtechceu.gtceu.api.item.tool.GTToolType"
import { $Set } from "java.util.Set"
import { $InteractionResult$$Type } from "net.minecraft.world.InteractionResult"
import { $ItemStack } from "net.minecraft.world.item.ItemStack"
import { $UseOnContext } from "net.minecraft.world.item.context.UseOnContext"
import { $Pair$$Type } from "com.mojang.datafixers.util.Pair"

/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $IToolable$$Type = ($IToolable | ((arg0: $Set<$GTToolType>, arg1: $ItemStack, arg2: $UseOnContext) => $Pair$$Type<$GTToolType$$Type, $InteractionResult$$Type>));
}

declare module "com.gregtechceu.gtceu.api.capability.IControllable" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $IControllable$$Type = ($IControllable);
}

declare module "com.gregtechceu.gtceu.api.capability.recipe.IRecipeCapabilityHolder" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $IRecipeCapabilityHolder$$Type = ($IRecipeCapabilityHolder);
}

