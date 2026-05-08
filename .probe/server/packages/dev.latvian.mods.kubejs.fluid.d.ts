declare module "dev.latvian.mods.kubejs.fluid.FluidBuilder" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $FluidBuilder$$Type = ($FluidBuilder);
}

declare module "dev.latvian.mods.kubejs.fluid.FluidWrapper" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $FluidWrapper$$Type = ($FluidWrapper);
}

declare module "dev.latvian.mods.kubejs.fluid.FluidLike" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $FluidLike$$Type = ($FluidLike | (() => long));
}

declare module "dev.latvian.mods.kubejs.fluid.OutputFluid" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $OutputFluid$$Type = ($OutputFluid | (() => long));
}

declare module "dev.latvian.mods.kubejs.fluid.FluidBucketItemBuilder" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $FluidBucketItemBuilder$$Type = ($FluidBucketItemBuilder);
}

declare module "dev.latvian.mods.kubejs.fluid.FlowingFluidBuilder" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $FlowingFluidBuilder$$Type = ($FlowingFluidBuilder);
}

declare module "dev.latvian.mods.kubejs.fluid.FluidStackJS" {
import { $Fluid$$Type } from "net.minecraft.world.level.material.Fluid"
import { $FluidStack$$Type } from "dev.architectury.fluid.FluidStack"

export type FluidWithAmount = {"fluid": Special.Fluid, "amount"?: integer, "nbt"?: (charseq | {})};
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $FluidStackJS$$Type = ($FluidStackJS | $Fluid$$Type | "-" | {"fluid": Special.Fluid, "amount?": integer, "nbt?": object} | $Fluid$$Type | $FluidStack$$Type | "-" | `${integer}x ${Special.Fluid}` | FluidWithAmount);
}

declare module "dev.latvian.mods.kubejs.fluid.FluidBlockBuilder" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $FluidBlockBuilder$$Type = ($FluidBlockBuilder);
}

declare module "dev.latvian.mods.kubejs.fluid.InputFluid" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $InputFluid$$Type = ($InputFluid | (() => long));
}

