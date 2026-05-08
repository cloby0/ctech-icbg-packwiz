declare module "dev.engine_room.flywheel.lib.transform.Transform" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $Transform$$Type<Self extends $Transform<Self> = $Transform<Self>> = ($Transform<Self>);
}

declare module "dev.engine_room.flywheel.api.visualization.BlockEntityVisualizer" {
import { $BlockEntity, $BlockEntity$$Type } from "net.minecraft.world.level.block.entity.BlockEntity"

/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $BlockEntityVisualizer$$Type<T extends $BlockEntity = $BlockEntity> = ($BlockEntityVisualizer<T>);
}

declare module "dev.engine_room.flywheel.api.instance.Instance" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $Instance$$Type = ($Instance);
}

declare module "dev.engine_room.flywheel.api.instance.InstanceWriter" {
import { $Instance, $Instance$$Type } from "dev.engine_room.flywheel.api.instance.Instance"

/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $InstanceWriter$$Type<I extends $Instance = $Instance> = ($InstanceWriter<I> | ((arg0: long, arg1: I) => void));
}

declare module "dev.engine_room.flywheel.api.model.Model$ConfiguredMesh" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $Model$ConfiguredMesh$$Type = ($Model$ConfiguredMesh);
}

declare module "dev.engine_room.flywheel.lib.transform.TransformStack" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $TransformStack$$Type<Self extends $TransformStack<Self> = $TransformStack<Self>> = ($TransformStack<Self>);
}

declare module "dev.engine_room.flywheel.api.material.CutoutShader" {
import { $ResourceLocation$$Type } from "net.minecraft.resources.ResourceLocation"

/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $CutoutShader$$Type = ($CutoutShader | (() => $ResourceLocation$$Type));
}

declare module "dev.engine_room.flywheel.api.material.WriteMask" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $WriteMask$$Type = ($WriteMask | ("color_depth" | "color" | "depth"));
}

declare module "dev.engine_room.flywheel.lib.transform.Affine" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $Affine$$Type<Self extends $Affine<Self> = $Affine<Self>> = ($Affine<Self>);
}

declare module "dev.engine_room.flywheel.api.model.Model" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $Model$$Type = ($Model);
}

declare module "dev.engine_room.flywheel.backend.mixin.AbstractClientPlayerAccessor" {
import { $PlayerInfo$$Type } from "net.minecraft.client.multiplayer.PlayerInfo"

/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $AbstractClientPlayerAccessor$$Type = ($AbstractClientPlayerAccessor | (() => $PlayerInfo$$Type));
}

declare module "dev.engine_room.flywheel.api.material.Material" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $Material$$Type = ($Material);
}

declare module "dev.engine_room.flywheel.api.vertex.MutableVertexList" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $MutableVertexList$$Type = ($MutableVertexList);
}

declare module "dev.engine_room.flywheel.api.event.ReloadLevelRendererEvent" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $ReloadLevelRendererEvent$$Type = ($ReloadLevelRendererEvent);
}

declare module "dev.engine_room.flywheel.api.visual.EntityVisual" {
import { $Entity, $Entity$$Type } from "net.minecraft.world.entity.Entity"

/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $EntityVisual$$Type<T extends $Entity = $Entity> = ($EntityVisual<T>);
}

declare module "dev.engine_room.flywheel.lib.transform.Rotate" {
import { $Quaternionfc } from "org.joml.Quaternionfc"

/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $Rotate$$Type<Self extends $Rotate<Self> = $Rotate<Self>> = ($Rotate<Self> | ((arg0: $Quaternionfc) => Self));
}

declare module "dev.engine_room.flywheel.api.visualization.VisualizationContext" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $VisualizationContext$$Type = ($VisualizationContext);
}

declare module "dev.engine_room.flywheel.api.visual.Visual" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $Visual$$Type = ($Visual);
}

declare module "dev.engine_room.flywheel.impl.mixin.ModelPartAccessor" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $ModelPartAccessor$$Type = ($ModelPartAccessor);
}

declare module "dev.engine_room.flywheel.api.layout.Layout$Element" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $Layout$Element$$Type = ($Layout$Element);
}

declare module "dev.engine_room.flywheel.impl.extension.PoseStackExtension" {
import { $PoseTransformStack$$Type } from "dev.engine_room.flywheel.lib.transform.PoseTransformStack"

/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $PoseStackExtension$$Type = ($PoseStackExtension | (() => $PoseTransformStack$$Type));
}

declare module "dev.engine_room.flywheel.api.material.LightShader" {
import { $ResourceLocation$$Type } from "net.minecraft.resources.ResourceLocation"

/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $LightShader$$Type = ($LightShader | (() => $ResourceLocation$$Type));
}

declare module "dev.engine_room.flywheel.api.material.FogShader" {
import { $ResourceLocation$$Type } from "net.minecraft.resources.ResourceLocation"

/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $FogShader$$Type = ($FogShader | (() => $ResourceLocation$$Type));
}

declare module "dev.engine_room.flywheel.lib.transform.Translate" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $Translate$$Type<Self extends $Translate<Self> = $Translate<Self>> = ($Translate<Self> | ((arg0: float, arg1: float, arg2: float) => Self));
}

declare module "dev.engine_room.flywheel.api.instance.InstanceType" {
import { $Instance, $Instance$$Type } from "dev.engine_room.flywheel.api.instance.Instance"

/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $InstanceType$$Type<I extends $Instance = $Instance> = ($InstanceType<I>);
}

declare module "dev.engine_room.flywheel.backend.mixin.LevelRendererAccessor" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $LevelRendererAccessor$$Type = ($LevelRendererAccessor | (() => integer));
}

declare module "dev.engine_room.flywheel.api.model.IndexSequence" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $IndexSequence$$Type = ($IndexSequence | ((arg0: long, arg1: integer) => void));
}

declare module "dev.engine_room.flywheel.api.visualization.VisualEmbedding" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $VisualEmbedding$$Type = ($VisualEmbedding);
}

declare module "dev.engine_room.flywheel.lib.model.baked.PartialModel" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $PartialModel$$Type = ($PartialModel);
}

declare module "dev.engine_room.flywheel.api.visualization.VisualizationLevel" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $VisualizationLevel$$Type = ($VisualizationLevel);
}

declare module "dev.engine_room.flywheel.api.instance.InstanceHandle" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $InstanceHandle$$Type = ($InstanceHandle);
}

declare module "dev.engine_room.flywheel.impl.extension.LevelExtension" {
import { $Entity$$Type } from "net.minecraft.world.entity.Entity"
import { $Iterable$$Type } from "java.lang.Iterable"

/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $LevelExtension$$Type = ($LevelExtension | (() => $Iterable$$Type<$Entity$$Type>));
}

declare module "dev.engine_room.flywheel.api.instance.Instancer" {
import { $Instance, $Instance$$Type } from "dev.engine_room.flywheel.api.instance.Instance"

/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $Instancer$$Type<I extends $Instance = $Instance> = ($Instancer<I>);
}

declare module "dev.engine_room.flywheel.api.visual.BlockEntityVisual" {
import { $BlockEntity, $BlockEntity$$Type } from "net.minecraft.world.level.block.entity.BlockEntity"

/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $BlockEntityVisual$$Type<T extends $BlockEntity = $BlockEntity> = ($BlockEntityVisual<T>);
}

declare module "dev.engine_room.flywheel.api.model.Mesh" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $Mesh$$Type = ($Mesh);
}

declare module "dev.engine_room.flywheel.impl.extension.BlockEntityTypeExtension" {
import { $BlockEntity, $BlockEntity$$Type } from "net.minecraft.world.level.block.entity.BlockEntity"

/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $BlockEntityTypeExtension$$Type<T extends $BlockEntity = $BlockEntity> = ($BlockEntityTypeExtension<T>);
}

declare module "dev.engine_room.flywheel.impl.extension.EntityTypeExtension" {
import { $Entity, $Entity$$Type } from "net.minecraft.world.entity.Entity"

/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $EntityTypeExtension$$Type<T extends $Entity = $Entity> = ($EntityTypeExtension<T>);
}

declare module "dev.engine_room.flywheel.lib.transform.Scale" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $Scale$$Type<Self extends $Scale<Self> = $Scale<Self>> = ($Scale<Self> | ((arg0: float, arg1: float, arg2: float) => Self));
}

declare module "dev.engine_room.flywheel.api.instance.InstancerProvider" {
import { $Instancer$$Type } from "dev.engine_room.flywheel.api.instance.Instancer"
import { $Model } from "dev.engine_room.flywheel.api.model.Model"
import { $InstanceType } from "dev.engine_room.flywheel.api.instance.InstanceType"

/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $InstancerProvider$$Type = ($InstancerProvider | ((arg0: $InstanceType<I>, arg1: $Model, arg2: integer) => $Instancer$$Type<I>));
}

declare module "dev.engine_room.flywheel.api.material.MaterialShaders" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $MaterialShaders$$Type = ($MaterialShaders);
}

declare module "dev.engine_room.flywheel.api.visualization.EntityVisualizer" {
import { $Entity, $Entity$$Type } from "net.minecraft.world.entity.Entity"

/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $EntityVisualizer$$Type<T extends $Entity = $Entity> = ($EntityVisualizer<T>);
}

declare module "dev.engine_room.flywheel.impl.mixin.PoseStackAccessor" {
import { $PoseStack$Pose$$Type } from "com.mojang.blaze3d.vertex.PoseStack$Pose"
import { $Deque$$Type } from "java.util.Deque"

/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $PoseStackAccessor$$Type = ($PoseStackAccessor | (() => $Deque$$Type<$PoseStack$Pose$$Type>));
}

declare module "dev.engine_room.flywheel.api.vertex.VertexList" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $VertexList$$Type = ($VertexList);
}

declare module "dev.engine_room.flywheel.api.layout.Layout" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $Layout$$Type = ($Layout);
}

declare module "dev.engine_room.flywheel.api.event.EndClientResourceReloadEvent" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $EndClientResourceReloadEvent$$Type = ($EndClientResourceReloadEvent);
}

declare module "dev.engine_room.flywheel.api.layout.ElementType" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $ElementType$$Type = ($ElementType);
}

declare module "dev.engine_room.flywheel.api.material.Transparency" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $Transparency$$Type = ($Transparency | ("opaque" | "additive" | "lightning" | "glint" | "crumbling" | "translucent" | "order_independent"));
}

declare module "dev.engine_room.flywheel.lib.transform.PoseTransformStack" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $PoseTransformStack$$Type = ($PoseTransformStack);
}

declare module "dev.engine_room.flywheel.api.material.DepthTest" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $DepthTest$$Type = ($DepthTest | ("off" | "never" | "less" | "equal" | "lequal" | "greater" | "notequal" | "gequal" | "always"));
}

declare module "dev.engine_room.flywheel.api.material.CardinalLightingMode" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $CardinalLightingMode$$Type = ($CardinalLightingMode | ("off" | "chunk" | "entity"));
}

