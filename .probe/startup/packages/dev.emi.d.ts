declare module "dev.emi.emi.mixin.accessor.HoeItemAccessor" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $HoeItemAccessor$$Type = ($HoeItemAccessor);
}

declare module "dev.emi.emi.mixin.accessor.AxeItemAccessor" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $AxeItemAccessor$$Type = ($AxeItemAccessor);
}

declare module "dev.emi.emi.mixin.accessor.SmithingTransformRecipeAccessor" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $SmithingTransformRecipeAccessor$$Type = ($SmithingTransformRecipeAccessor);
}

declare module "dev.emi.emi.mixin.accessor.BakedModelManagerAccessor" {
import { $ResourceLocation$$Type } from "net.minecraft.resources.ResourceLocation"
import { $BakedModel$$Type } from "net.minecraft.client.resources.model.BakedModel"
import { $Map$$Type } from "java.util.Map"

/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $BakedModelManagerAccessor$$Type = ($BakedModelManagerAccessor | (() => $Map$$Type<$ResourceLocation$$Type, $BakedModel$$Type>));
}

declare module "dev.emi.emi.mixin.accessor.HandledScreenAccessor" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $HandledScreenAccessor$$Type = ($HandledScreenAccessor);
}

declare module "dev.emi.emi.mixin.accessor.ItemRendererAccessor" {
import { $BakedModel } from "net.minecraft.client.resources.model.BakedModel"
import { $ItemStack } from "net.minecraft.world.item.ItemStack"
import { $VertexConsumer } from "com.mojang.blaze3d.vertex.VertexConsumer"
import { $PoseStack } from "com.mojang.blaze3d.vertex.PoseStack"

/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $ItemRendererAccessor$$Type = ($ItemRendererAccessor | ((arg0: $BakedModel, arg1: $ItemStack, arg2: integer, arg3: integer, arg4: $PoseStack, arg5: $VertexConsumer) => void));
}

declare module "dev.emi.emi.mixin.accessor.ShovelItemAccessor" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $ShovelItemAccessor$$Type = ($ShovelItemAccessor);
}

declare module "dev.emi.emi.mixin.accessor.DrawContextAccessor" {
import { $Font } from "net.minecraft.client.gui.Font"
import { $List } from "java.util.List"
import { $ClientTooltipPositioner } from "net.minecraft.client.gui.screens.inventory.tooltip.ClientTooltipPositioner"
import { $ClientTooltipComponent } from "net.minecraft.client.gui.screens.inventory.tooltip.ClientTooltipComponent"

/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $DrawContextAccessor$$Type = ($DrawContextAccessor | ((arg0: $Font, arg1: $List<$ClientTooltipComponent>, arg2: integer, arg3: integer, arg4: $ClientTooltipPositioner) => void));
}

declare module "dev.emi.emi.mixin.accessor.SmithingTrimRecipeAccessor" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $SmithingTrimRecipeAccessor$$Type = ($SmithingTrimRecipeAccessor);
}

