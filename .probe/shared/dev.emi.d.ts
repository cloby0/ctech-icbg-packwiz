declare module "dev.emi.emi.mixin.accessor.HoeItemAccessor" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $HoeItemAccessor {
}

export namespace $HoeItemAccessor {
const probejs$$marker: never
}
export abstract class $HoeItemAccessor$$Static implements $HoeItemAccessor {
}
}

declare module "dev.emi.emi.mixin.accessor.AxeItemAccessor" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $AxeItemAccessor {
}

export namespace $AxeItemAccessor {
const probejs$$marker: never
}
export abstract class $AxeItemAccessor$$Static implements $AxeItemAccessor {
}
}

declare module "dev.emi.emi.mixin.accessor.SmithingTransformRecipeAccessor" {
import { $Ingredient } from "net.minecraft.world.item.crafting.Ingredient"

export interface $SmithingTransformRecipeAccessor {
"getAddition"(): $Ingredient
"getBase"(): $Ingredient
"getTemplate"(): $Ingredient
get "addition"(): $Ingredient
get "base"(): $Ingredient
get "template"(): $Ingredient
}

export namespace $SmithingTransformRecipeAccessor {
const probejs$$marker: never
}
export abstract class $SmithingTransformRecipeAccessor$$Static implements $SmithingTransformRecipeAccessor {
}
}

declare module "dev.emi.emi.mixin.accessor.BakedModelManagerAccessor" {
import { $ResourceLocation } from "net.minecraft.resources.ResourceLocation"
import { $BakedModel } from "net.minecraft.client.resources.model.BakedModel"
import { $Map } from "java.util.Map"

export interface $BakedModelManagerAccessor {
"getModels"(): $Map<$ResourceLocation, $BakedModel>
get "models"(): $Map<$ResourceLocation, $BakedModel>
}

export namespace $BakedModelManagerAccessor {
const probejs$$marker: never
}
export abstract class $BakedModelManagerAccessor$$Static implements $BakedModelManagerAccessor {
}
}

declare module "dev.emi.emi.mixin.accessor.HandledScreenAccessor" {
import { $Slot } from "net.minecraft.world.inventory.Slot"

export interface $HandledScreenAccessor {
"getBackgroundHeight"(): integer
"getBackgroundWidth"(): integer
"getFocusedSlot"(): $Slot
"getX"(): integer
"getY"(): integer
"invokeGetSlotAt"(double0: double, double1: double): $Slot
get "backgroundHeight"(): integer
get "backgroundWidth"(): integer
get "focusedSlot"(): $Slot
get "x"(): integer
get "y"(): integer
}

export namespace $HandledScreenAccessor {
const probejs$$marker: never
}
export abstract class $HandledScreenAccessor$$Static implements $HandledScreenAccessor {
}
}

declare module "dev.emi.emi.mixin.accessor.ItemRendererAccessor" {
import { $BakedModel$$Type } from "net.minecraft.client.resources.model.BakedModel"
import { $ItemStack$$Type } from "net.minecraft.world.item.ItemStack"
import { $VertexConsumer$$Type } from "com.mojang.blaze3d.vertex.VertexConsumer"
import { $PoseStack$$Type } from "com.mojang.blaze3d.vertex.PoseStack"

export interface $ItemRendererAccessor {
"invokeRenderBakedItemModel"(bakedModel0: $BakedModel$$Type, itemStack1: $ItemStack$$Type, int2: integer, int3: integer, poseStack4: $PoseStack$$Type, vertexConsumer5: $VertexConsumer$$Type): void
}

export namespace $ItemRendererAccessor {
const probejs$$marker: never
}
export abstract class $ItemRendererAccessor$$Static implements $ItemRendererAccessor {
}
}

declare module "dev.emi.emi.mixin.accessor.ShovelItemAccessor" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $ShovelItemAccessor {
}

export namespace $ShovelItemAccessor {
const probejs$$marker: never
}
export abstract class $ShovelItemAccessor$$Static implements $ShovelItemAccessor {
}
}

declare module "dev.emi.emi.mixin.accessor.DrawContextAccessor" {
import { $Font$$Type } from "net.minecraft.client.gui.Font"
import { $List$$Type } from "java.util.List"
import { $ClientTooltipPositioner$$Type } from "net.minecraft.client.gui.screens.inventory.tooltip.ClientTooltipPositioner"
import { $ClientTooltipComponent$$Type } from "net.minecraft.client.gui.screens.inventory.tooltip.ClientTooltipComponent"

export interface $DrawContextAccessor {
"invokeDrawTooltip"(font0: $Font$$Type, list1: $List$$Type<$ClientTooltipComponent$$Type>, int2: integer, int3: integer, clientTooltipPositioner4: $ClientTooltipPositioner$$Type): void
}

export namespace $DrawContextAccessor {
const probejs$$marker: never
}
export abstract class $DrawContextAccessor$$Static implements $DrawContextAccessor {
}
}

declare module "dev.emi.emi.mixin.accessor.SmithingTrimRecipeAccessor" {
import { $Ingredient } from "net.minecraft.world.item.crafting.Ingredient"

export interface $SmithingTrimRecipeAccessor {
"getAddition"(): $Ingredient
"getBase"(): $Ingredient
"getTemplate"(): $Ingredient
get "addition"(): $Ingredient
get "base"(): $Ingredient
get "template"(): $Ingredient
}

export namespace $SmithingTrimRecipeAccessor {
const probejs$$marker: never
}
export abstract class $SmithingTrimRecipeAccessor$$Static implements $SmithingTrimRecipeAccessor {
}
}

