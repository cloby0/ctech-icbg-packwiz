declare module "com.gregtechceu.gtceu.client.model.machine.IMachineRendererModel" {
import { $IMachineFeature, $IMachineFeature$$Type } from "com.gregtechceu.gtceu.api.machine.feature.IMachineFeature"

/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $IMachineRendererModel$$Type<T extends $IMachineFeature = $IMachineFeature> = ($IMachineRendererModel<T>);
}

declare module "com.gregtechceu.gtceu.client.renderer.machine.impl.GrowingPlantRender$GrowthMode" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $GrowingPlantRender$GrowthMode$$Type = ($GrowingPlantRender$GrowthMode);
}

declare module "com.gregtechceu.gtceu.client.model.machine.overlays.WorkableOverlays$StatusTextures" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $WorkableOverlays$StatusTextures$$Type = ($WorkableOverlays$StatusTextures);
}

declare module "com.gregtechceu.gtceu.client.renderer.machine.impl.GrowingPlantRender$RenderFunction$ConfigureOnly" {
import { $Collection$$Type } from "java.util.Collection"
import { $BlockState } from "net.minecraft.world.level.block.state.BlockState"
import { $GrowingPlantRender$StateWithOffset$$Type } from "com.gregtechceu.gtceu.client.renderer.machine.impl.GrowingPlantRender$StateWithOffset"
import { $BlockAndTintGetter } from "net.minecraft.world.level.BlockAndTintGetter"

/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $GrowingPlantRender$RenderFunction$ConfigureOnly$$Type = ($GrowingPlantRender$RenderFunction$ConfigureOnly | ((arg0: $BlockAndTintGetter, arg1: $BlockState, arg2: double) => $Collection$$Type<$GrowingPlantRender$StateWithOffset$$Type>));
}

declare module "com.gregtechceu.gtceu.client.model.machine.multipart.MultiPartBakedModel" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $MultiPartBakedModel$$Type = ($MultiPartBakedModel);
}

declare module "com.gregtechceu.gtceu.client.renderer.machine.DynamicRenderHelper" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $DynamicRenderHelper$$Type = ($DynamicRenderHelper);
}

declare module "com.gregtechceu.gtceu.client.model.machine.overlays.WorkableOverlays$OverlayFace" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $WorkableOverlays$OverlayFace$$Type = ($WorkableOverlays$OverlayFace | ("front" | "back" | "top" | "bottom" | "side"));
}

declare module "com.gregtechceu.gtceu.client.util.ExtendedBlockModelRotation" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $ExtendedBlockModelRotation$$Type = ($ExtendedBlockModelRotation | ("down_south" | "down_west" | "down_north" | "down_east" | "up_south" | "up_west" | "up_north" | "up_east" | "north_south" | "north_west" | "north_north" | "north_east" | "south_south" | "south_west" | "south_north" | "south_east" | "west_south" | "west_west" | "west_north" | "west_east" | "east_south" | "east_west" | "east_north" | "east_east"));
}

declare module "com.gregtechceu.gtceu.client.renderer.cover.ICoverRenderer" {
import { $List } from "java.util.List"
import { $BlockPos } from "net.minecraft.core.BlockPos"
import { $Direction } from "net.minecraft.core.Direction"
import { $RandomSource } from "net.minecraft.util.RandomSource"
import { $RenderType } from "net.minecraft.client.renderer.RenderType"
import { $BakedQuad } from "net.minecraft.client.renderer.block.model.BakedQuad"
import { $ModelData } from "net.minecraftforge.client.model.data.ModelData"
import { $CoverBehavior } from "com.gregtechceu.gtceu.api.cover.CoverBehavior"
import { $BlockAndTintGetter } from "net.minecraft.world.level.BlockAndTintGetter"

/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $ICoverRenderer$$Type = ($ICoverRenderer | ((arg0: $List<$BakedQuad>, arg1: $Direction, arg2: $RandomSource, arg3: $CoverBehavior, arg4: $BlockPos, arg5: $BlockAndTintGetter, arg6: $ModelData, arg7: $RenderType) => void));
}

declare module "com.gregtechceu.gtceu.client.renderer.machine.DynamicRender" {
import { $IMachineFeature, $IMachineFeature$$Type } from "com.gregtechceu.gtceu.api.machine.feature.IMachineFeature"

/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $DynamicRender$$Type<T extends $IMachineFeature = $IMachineFeature, S extends $DynamicRender<T, S> = $DynamicRender<T, S>> = ($DynamicRender<T, S>);
}

declare module "com.gregtechceu.gtceu.client.renderer.machine.impl.GrowingPlantRender$RenderFunction" {
import { $BlockPos } from "net.minecraft.core.BlockPos"
import { $Vector3f } from "org.joml.Vector3f"
import { $BlockState } from "net.minecraft.world.level.block.state.BlockState"
import { $MultiBufferSource } from "net.minecraft.client.renderer.MultiBufferSource"
import { $BlockAndTintGetter } from "net.minecraft.world.level.BlockAndTintGetter"
import { $PoseStack } from "com.mojang.blaze3d.vertex.PoseStack"

/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $GrowingPlantRender$RenderFunction$$Type = ($GrowingPlantRender$RenderFunction | ((arg0: $BlockAndTintGetter, arg1: $BlockPos, arg2: $Vector3f, arg3: $BlockState, arg4: double, arg5: $MultiBufferSource, arg6: $PoseStack) => void));
}

declare module "com.gregtechceu.gtceu.client.model.BaseBakedModel" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $BaseBakedModel$$Type = ($BaseBakedModel);
}

declare module "com.gregtechceu.gtceu.client.model.IBlockEntityRendererBakedModel" {
import { $BlockEntity, $BlockEntity$$Type } from "net.minecraft.world.level.block.entity.BlockEntity"

/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $IBlockEntityRendererBakedModel$$Type<T extends $BlockEntity = $BlockEntity> = ($IBlockEntityRendererBakedModel<T>);
}

declare module "com.gregtechceu.gtceu.client.model.machine.overlays.WorkableOverlays" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $WorkableOverlays$$Type = ($WorkableOverlays);
}

declare module "com.gregtechceu.gtceu.client.model.machine.MachineRenderState" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $MachineRenderState$$Type = ($MachineRenderState);
}

declare module "com.gregtechceu.gtceu.client.renderer.cover.ICoverableRenderer" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $ICoverableRenderer$$Type = ($ICoverableRenderer);
}

declare module "com.gregtechceu.gtceu.client.model.pipe.PipeModel" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $PipeModel$$Type = ($PipeModel);
}

declare module "com.gregtechceu.gtceu.client.renderer.machine.impl.GrowingPlantRender$StateWithOffset" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $GrowingPlantRender$StateWithOffset$$Type = ($GrowingPlantRender$StateWithOffset);
}

declare module "com.gregtechceu.gtceu.client.renderer.cover.IDynamicCoverRenderer" {
import { $MetaMachine } from "com.gregtechceu.gtceu.api.machine.MetaMachine"
import { $Direction } from "net.minecraft.core.Direction"
import { $MultiBufferSource } from "net.minecraft.client.renderer.MultiBufferSource"
import { $PoseStack } from "com.mojang.blaze3d.vertex.PoseStack"

/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $IDynamicCoverRenderer$$Type = ($IDynamicCoverRenderer | ((arg0: $MetaMachine, arg1: $Direction, arg2: float, arg3: $PoseStack, arg4: $MultiBufferSource, arg5: integer, arg6: integer) => void));
}

declare module "com.gregtechceu.gtceu.client.model.machine.MachineModel" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $MachineModel$$Type = ($MachineModel);
}

declare module "com.gregtechceu.gtceu.client.renderer.machine.DynamicRenderType" {
import { $DynamicRender, $DynamicRender$$Type } from "com.gregtechceu.gtceu.client.renderer.machine.DynamicRender"
import { $IMachineFeature, $IMachineFeature$$Type } from "com.gregtechceu.gtceu.api.machine.feature.IMachineFeature"

/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $DynamicRenderType$$Type<T extends $IMachineFeature = $IMachineFeature, S extends $DynamicRender<T, S> = $DynamicRender<T, S>> = ($DynamicRenderType<T, S>);
}

declare module "com.gregtechceu.gtceu.client.renderer.block.FluidBlockRenderer" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $FluidBlockRenderer$$Type = ($FluidBlockRenderer);
}

declare module "com.gregtechceu.gtceu.client.renderer.block.FluidBlockRenderer$Properties" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $FluidBlockRenderer$Properties$$Type = ($FluidBlockRenderer$Properties);
}

declare module "com.gregtechceu.gtceu.client.util.RenderUtil$FluidTextureType" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $RenderUtil$FluidTextureType$$Type = ($RenderUtil$FluidTextureType | ("still" | "flowing" | "overlay"));
}

