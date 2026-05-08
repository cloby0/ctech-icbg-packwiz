declare module "net.minecraft.client.model.HumanoidModel" {
import { $LivingEntity, $LivingEntity$$Type } from "net.minecraft.world.entity.LivingEntity"

/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $HumanoidModel$$Type<T extends $LivingEntity = $LivingEntity> = ($HumanoidModel<T>);
}

declare module "net.minecraft.client.model.geom.ModelPart" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $ModelPart$$Type = ($ModelPart);
}

declare module "net.minecraft.client.model.HumanoidModel$ArmPose" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $HumanoidModel$ArmPose$$Type = ($HumanoidModel$ArmPose | ("empty" | "item" | "block" | "bow_and_arrow" | "throw_spear" | "crossbow_charge" | "crossbow_hold" | "spyglass" | "toot_horn" | "brush" | "irons_spellbooks_staff"));
}

declare module "net.minecraft.client.model.ArmedModel" {
import { $HumanoidArm } from "net.minecraft.world.entity.HumanoidArm"
import { $PoseStack } from "com.mojang.blaze3d.vertex.PoseStack"

/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $ArmedModel$$Type = ($ArmedModel | ((arg0: $HumanoidArm, arg1: $PoseStack) => void));
}

declare module "net.minecraft.client.model.geom.builders.PartDefinition" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $PartDefinition$$Type = ($PartDefinition);
}

declare module "net.minecraft.client.model.Model" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $Model$$Type = ($Model);
}

declare module "net.minecraft.client.model.geom.builders.MaterialDefinition" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $MaterialDefinition$$Type = ($MaterialDefinition);
}

declare module "net.minecraft.client.model.HeadedModel" {
import { $ModelPart$$Type } from "net.minecraft.client.model.geom.ModelPart"

/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $HeadedModel$$Type = ($HeadedModel | (() => $ModelPart$$Type));
}

declare module "net.minecraft.client.model.geom.ModelPart$Visitor" {
import { $PoseStack$Pose } from "com.mojang.blaze3d.vertex.PoseStack$Pose"
import { $ModelPart$Cube } from "net.minecraft.client.model.geom.ModelPart$Cube"

/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $ModelPart$Visitor$$Type = ($ModelPart$Visitor | ((arg0: $PoseStack$Pose, arg1: string, arg2: integer, arg3: $ModelPart$Cube) => void));
}

declare module "net.minecraft.client.model.AgeableListModel" {
import { $Entity, $Entity$$Type } from "net.minecraft.world.entity.Entity"

/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $AgeableListModel$$Type<E extends $Entity = $Entity> = ($AgeableListModel<E>);
}

declare module "net.minecraft.client.model.geom.builders.CubeDeformation" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $CubeDeformation$$Type = ($CubeDeformation);
}

declare module "net.minecraft.client.model.geom.ModelPart$Polygon" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $ModelPart$Polygon$$Type = ($ModelPart$Polygon);
}

declare module "net.minecraft.client.model.geom.ModelLayerLocation" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $ModelLayerLocation$$Type = ($ModelLayerLocation);
}

declare module "net.minecraft.client.model.geom.ModelPart$Cube" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $ModelPart$Cube$$Type = ($ModelPart$Cube);
}

declare module "net.minecraft.client.model.PlayerModel" {
import { $LivingEntity, $LivingEntity$$Type } from "net.minecraft.world.entity.LivingEntity"

/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $PlayerModel$$Type<T extends $LivingEntity = $LivingEntity> = ($PlayerModel<T>);
}

declare module "net.minecraft.client.model.geom.builders.CubeDefinition" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $CubeDefinition$$Type = ($CubeDefinition);
}

declare module "net.minecraft.client.model.geom.builders.MeshDefinition" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $MeshDefinition$$Type = ($MeshDefinition);
}

declare module "net.minecraft.client.model.geom.ModelPart$Vertex" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $ModelPart$Vertex$$Type = ($ModelPart$Vertex);
}

declare module "net.minecraft.client.model.geom.EntityModelSet" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $EntityModelSet$$Type = ($EntityModelSet);
}

declare module "net.minecraft.client.model.EntityModel" {
import { $Entity, $Entity$$Type } from "net.minecraft.world.entity.Entity"

/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $EntityModel$$Type<T extends $Entity = $Entity> = ($EntityModel<T>);
}

declare module "net.minecraft.client.model.SkullModelBase" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $SkullModelBase$$Type = ($SkullModelBase);
}

declare module "net.minecraft.client.model.geom.PartPose" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $PartPose$$Type = ($PartPose);
}

declare module "net.minecraft.client.model.geom.builders.CubeListBuilder" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $CubeListBuilder$$Type = ($CubeListBuilder);
}

declare module "net.minecraft.client.model.geom.builders.LayerDefinition" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $LayerDefinition$$Type = ($LayerDefinition);
}

