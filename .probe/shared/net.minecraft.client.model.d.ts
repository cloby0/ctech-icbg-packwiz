declare module "net.minecraft.client.model.HumanoidModel" {
import { $ResourceLocation$$Type } from "net.minecraft.resources.ResourceLocation"
import { $ArmedModel } from "net.minecraft.client.model.ArmedModel"
import { $AgeableListModel } from "net.minecraft.client.model.AgeableListModel"
import { $SetableSupplier, $SetableSupplier$$Type } from "dev.kosmx.playerAnim.core.util.SetableSupplier"
import { $LivingEntity, $LivingEntity$$Type } from "net.minecraft.world.entity.LivingEntity"
import { $TwoHandedItemAnimation, $TwoHandedItemAnimation$$Type } from "net.joefoxe.hexerei.client.renderer.TwoHandedItemAnimation"
import { $HumanoidArm$$Type } from "net.minecraft.world.entity.HumanoidArm"
import { $RenderType } from "net.minecraft.client.renderer.RenderType"
import { $Function$$Type } from "java.util.function.Function"
import { $MeshDefinition } from "net.minecraft.client.model.geom.builders.MeshDefinition"
import { $PoseStack$$Type } from "com.mojang.blaze3d.vertex.PoseStack"
import { $CallbackInfo$$Type } from "org.spongepowered.asm.mixin.injection.callback.CallbackInfo"
import { $HumanoidModel$ArmPose, $HumanoidModel$ArmPose$$Type } from "net.minecraft.client.model.HumanoidModel$ArmPose"
import { $IMutableModel } from "dev.kosmx.playerAnim.impl.IMutableModel"
import { $CubeDeformation$$Type } from "net.minecraft.client.model.geom.builders.CubeDeformation"
import { $HeadedModel } from "net.minecraft.client.model.HeadedModel"
import { $ModelPart, $ModelPart$$Type } from "net.minecraft.client.model.geom.ModelPart"

export class $HumanoidModel<T extends $LivingEntity = $LivingEntity> extends $AgeableListModel<T> implements $ArmedModel, $HeadedModel, $IMutableModel {
static readonly "HAT_OVERLAY_SCALE": float
static readonly "LEGGINGS_OVERLAY_SCALE": float
static readonly "OVERLAY_SCALE": float
static readonly "TOOT_HORN_XROT_BASE": float
static readonly "TOOT_HORN_YROT_BASE": float

constructor(modelPart0: $ModelPart$$Type, function1: $Function$$Type<$ResourceLocation$$Type, $RenderType>)
constructor(modelPart0: $ModelPart$$Type)

public "copyPropertiesTo"(humanoidModel0: $HumanoidModel$$Type<T>): void
public static "createMesh"(cubeDeformation0: $CubeDeformation$$Type, float1: float): $MeshDefinition
public "getEmoteSupplier"(): $SetableSupplier
public "getHead"(): $ModelPart
public "handler$cad000$poseLeftArm"(livingEntity: $LivingEntity$$Type, ci: $CallbackInfo$$Type): void
public "handler$cad000$poseRightArm"(livingEntity: $LivingEntity$$Type, ci: $CallbackInfo$$Type): void
public "handler$cad000$setupAttackAnimation"(livingEntity: $LivingEntity$$Type, f: float, ci: $CallbackInfo$$Type, arm: $HumanoidArm$$Type, part: $ModelPart$$Type): void
public "handler$dfa000$setupAnim"(livingEntity0: $LivingEntity$$Type, float1: float, float2: float, float3: float, float4: float, float5: float, callbackInfo6: $CallbackInfo$$Type): void
public "handler$dfa001$poseLeftArm"(livingEntity0: $LivingEntity$$Type, callbackInfo1: $CallbackInfo$$Type): void
public "handler$dfa001$poseRightArm"(livingEntity0: $LivingEntity$$Type, callbackInfo1: $CallbackInfo$$Type): void
public "handler$fbl000$createbigcannons$setupAnimHead"(livingEntity: $LivingEntity$$Type, f: float, g: float, h: float, i: float, j: float, ci: $CallbackInfo$$Type): void
public "handler$fbl000$createbigcannons$setupAnimNearTail"(livingEntity: $LivingEntity$$Type, f: float, g: float, h: float, i: float, j: float, ci: $CallbackInfo$$Type): void
public "handler$gbh001$setupAnim"(entity: $LivingEntity$$Type, limbSwing: float, limbSwingAmount: float, ageInTicks: float, netHeadYaw: float, headPitch: float, ci: $CallbackInfo$$Type): void
public "handler$gbh002$poseLeftArm"(entity: $LivingEntity$$Type, ci: $CallbackInfo$$Type): void
public "handler$gbh002$poseRightArm"(entity: $LivingEntity$$Type, ci: $CallbackInfo$$Type): void
public "prepareMobModel"(t0: T, float1: float, float2: float, float3: float): void
public "setAllVisible"(boolean0: boolean): void
public "setEmoteSupplier"(emoteSupplier: $SetableSupplier$$Type): void
public "setupAnim"(t0: T, float1: float, float2: float, float3: float, float4: float, float5: float): void
public "translateToHand"(humanoidArm0: $HumanoidArm$$Type, poseStack1: $PoseStack$$Type): void
get "body"(): $ModelPart
set "body"(value: $ModelPart$$Type)
get "crouching"(): boolean
set "crouching"(value: boolean)
get "hat"(): $ModelPart
set "hat"(value: $ModelPart$$Type)
get "head"(): $ModelPart
set "head"(value: $ModelPart$$Type)
get "leftArm"(): $ModelPart
set "leftArm"(value: $ModelPart$$Type)
get "leftArmPose"(): $HumanoidModel$ArmPose
set "leftArmPose"(value: $HumanoidModel$ArmPose$$Type)
get "leftLeg"(): $ModelPart
set "leftLeg"(value: $ModelPart$$Type)
get "rightArm"(): $ModelPart
set "rightArm"(value: $ModelPart$$Type)
get "rightArmPose"(): $HumanoidModel$ArmPose
set "rightArmPose"(value: $HumanoidModel$ArmPose$$Type)
get "rightLeg"(): $ModelPart
set "rightLeg"(value: $ModelPart$$Type)
get "swimAmount"(): float
set "swimAmount"(value: float)
get "twoHanded"(): $TwoHandedItemAnimation
set "twoHanded"(value: $TwoHandedItemAnimation$$Type)
get "emoteSupplier"(): $SetableSupplier
set "allVisible"(value: boolean)
set "emoteSupplier"(value: $SetableSupplier$$Type)
}
}

declare module "net.minecraft.client.model.geom.ModelPart" {
import { $ModelPart$Cube, $ModelPart$Cube$$Type } from "net.minecraft.client.model.geom.ModelPart$Cube"
import { $ModelPartData } from "me.jellysquid.mods.sodium.client.render.immediate.model.ModelPartData"
import { $ModelPartAccessor } from "dev.engine_room.flywheel.impl.mixin.ModelPartAccessor"
import { $RandomSource$$Type } from "net.minecraft.util.RandomSource"
import { $IUpperPartHelper } from "dev.kosmx.playerAnim.impl.IUpperPartHelper"
import { $PoseStack$$Type } from "com.mojang.blaze3d.vertex.PoseStack"
import { $ModelPart$Visitor$$Type } from "net.minecraft.client.model.geom.ModelPart$Visitor"
import { $List, $List$$Type } from "java.util.List"
import { $ModelCuboid } from "me.jellysquid.mods.sodium.client.render.immediate.model.ModelCuboid"
import { $Stream } from "java.util.stream.Stream"
import { $PartPose, $PartPose$$Type } from "net.minecraft.client.model.geom.PartPose"
import { $Map, $Map$$Type } from "java.util.Map"
import { $Vector3f$$Type } from "org.joml.Vector3f"
import { $Optional } from "java.util.Optional"
import { $ModelPartExtended } from "org.embeddedt.embeddium.render.entity.ModelPartExtended"
import { $VertexConsumer$$Type } from "com.mojang.blaze3d.vertex.VertexConsumer"
import { $IModelPartExtension } from "net.mehvahdjukaar.supplementaries.client.IModelPartExtension"

export class $ModelPart implements $IUpperPartHelper, $ModelPartAccessor, $IModelPartExtension, $ModelPartExtended, $ModelPartData {
static readonly "DEFAULT_SCALE": float

constructor(list0: $List$$Type<$ModelPart$Cube$$Type>, map1: $Map$$Type<string, $ModelPart$$Type>)

public "copyFrom"(modelPart0: $ModelPart$$Type): void
public "embeddium$asOptional"(): $Optional
public "embeddium$getDescendantsByName"(): $Map
public "embeddium$getPartsList"(): $List
public static "from"(modelPart0: $ModelPart$$Type): $ModelPartData
public "getAllParts"(): $Stream
public "getChild"(string0: string): $ModelPart
public "getChildren"(): $ModelPart[]
public "getCuboids"(): $ModelCuboid[]
public "getInitialPose"(): $PartPose
public "getRandomCube"(randomSource0: $RandomSource$$Type): $ModelPart$Cube
public "hasChild"(string0: string): boolean
public "isEmpty"(): boolean
public "isHidden"(): boolean
public "isUpperPart"(): boolean
public "isVisible"(): boolean
public "loadPose"(partPose0: $PartPose$$Type): void
public static "of"(modelPart0: $ModelPart$$Type): $ModelPartExtended
public "offsetPos"(vector3f0: $Vector3f$$Type): void
public "offsetRotation"(vector3f0: $Vector3f$$Type): void
public "offsetScale"(vector3f0: $Vector3f$$Type): void
public "render"(poseStack0: $PoseStack$$Type, vertexConsumer1: $VertexConsumer$$Type, int2: integer, int3: integer): void
public "render"(poseStack0: $PoseStack$$Type, vertexConsumer1: $VertexConsumer$$Type, int2: integer, int3: integer, float4: float, float5: float, float6: float, float7: float): void
public "resetPose"(): void
public "setInitialPose"(partPose0: $PartPose$$Type): void
public "setPos"(float0: float, float1: float, float2: float): void
public "setRotation"(float0: float, float1: float, float2: float): void
public "setUpperPart"(bl: boolean): void
public "storePose"(): $PartPose
public "supp$getTextHeight"(): integer
public "supp$getTextWidth"(): integer
public "supp$setDimensions"(texWidth: integer, texHeight: integer): void
public "translateAndRotate"(poseStack0: $PoseStack$$Type): void
public "visit"(poseStack0: $PoseStack$$Type, visitor1: $ModelPart$Visitor$$Type): void
get "children"(): $Map<string, $ModelPart>
set "children"(value: $Map$$Type<string, $ModelPart$$Type>)
get "cubes"(): $List<$ModelPart$Cube>
set "cubes"(value: $List$$Type<$ModelPart$Cube$$Type>)
get "initialPose"(): $PartPose
set "initialPose"(value: $PartPose$$Type)
get "skipDraw"(): boolean
set "skipDraw"(value: boolean)
get "visible"(): boolean
set "visible"(value: boolean)
get "x"(): float
set "x"(value: float)
get "xRot"(): float
set "xRot"(value: float)
get "xScale"(): float
set "xScale"(value: float)
get "y"(): float
set "y"(value: float)
get "yRot"(): float
set "yRot"(value: float)
get "yScale"(): float
set "yScale"(value: float)
get "z"(): float
set "z"(value: float)
get "zRot"(): float
set "zRot"(value: float)
get "zScale"(): float
set "zScale"(value: float)
get "allParts"(): $Stream
get "cuboids"(): $ModelCuboid[]
get "empty"(): boolean
get "hidden"(): boolean
get "upperPart"(): boolean
set "upperPart"(value: boolean)
}
}

declare module "net.minecraft.client.model.HumanoidModel$ArmPose" {
import { $IExtensibleEnum } from "net.minecraftforge.common.IExtensibleEnum"
import { $LivingEntity, $LivingEntity$$Type } from "net.minecraft.world.entity.LivingEntity"
import { $Codec } from "com.mojang.serialization.Codec"
import { $IArmPoseTransformer$$Type } from "net.minecraftforge.client.IArmPoseTransformer"
import { $Enum, $Enum$$Type } from "java.lang.Enum"
import { $StringRepresentable, $StringRepresentable$$Type } from "net.minecraft.util.StringRepresentable"
import { $HumanoidArm$$Type } from "net.minecraft.world.entity.HumanoidArm"
import { $HumanoidModel$$Type } from "net.minecraft.client.model.HumanoidModel"
import { $Supplier$$Type } from "java.util.function.Supplier"
import { $Function$$Type } from "java.util.function.Function"

export class $HumanoidModel$ArmPose extends $Enum<$HumanoidModel$ArmPose> implements $IExtensibleEnum {
static readonly "BLOCK": $HumanoidModel$ArmPose
static readonly "BOW_AND_ARROW": $HumanoidModel$ArmPose
static readonly "BRUSH": $HumanoidModel$ArmPose
static readonly "CROSSBOW_CHARGE": $HumanoidModel$ArmPose
static readonly "CROSSBOW_HOLD": $HumanoidModel$ArmPose
static readonly "EMPTY": $HumanoidModel$ArmPose
static readonly "ITEM": $HumanoidModel$ArmPose
static readonly "SPYGLASS": $HumanoidModel$ArmPose
static readonly "THROW_SPEAR": $HumanoidModel$ArmPose
static readonly "TOOT_HORN": $HumanoidModel$ArmPose

public "applyTransform"<T extends $LivingEntity>(humanoidModel0: $HumanoidModel$$Type<T>, t1: T, humanoidArm2: $HumanoidArm$$Type): void
public static "create"(string0: string, boolean1: boolean, iArmPoseTransformer2: $IArmPoseTransformer$$Type): $HumanoidModel$ArmPose
public static "createCodecForExtensibleEnum"<E extends ($Enum<E> & $StringRepresentable)>(supplier0: $Supplier$$Type<E[]>, function1: $Function$$Type<string, E>): $Codec<E>
/** @deprecated */
public "init"(): void
public "isTwoHanded"(): boolean
public static "valueOf"(string0: string): $HumanoidModel$ArmPose
public static "values"(): $HumanoidModel$ArmPose[]
get "twoHanded"(): boolean
}
}

declare module "net.minecraft.client.model.ArmedModel" {
import { $HumanoidArm$$Type } from "net.minecraft.world.entity.HumanoidArm"
import { $PoseStack$$Type } from "com.mojang.blaze3d.vertex.PoseStack"

export interface $ArmedModel {
"translateToHand"(humanoidArm0: $HumanoidArm$$Type, poseStack1: $PoseStack$$Type): void
}

export namespace $ArmedModel {
const probejs$$marker: never
}
export abstract class $ArmedModel$$Static implements $ArmedModel {
}
}

declare module "net.minecraft.client.model.geom.builders.PartDefinition" {
import { $List$$Type } from "java.util.List"
import { $CubeDefinition$$Type } from "net.minecraft.client.model.geom.builders.CubeDefinition"
import { $CubeListBuilder$$Type } from "net.minecraft.client.model.geom.builders.CubeListBuilder"
import { $PartPose$$Type } from "net.minecraft.client.model.geom.PartPose"
import { $Map } from "java.util.Map"
import { $ModelPart } from "net.minecraft.client.model.geom.ModelPart"

export class $PartDefinition {
readonly "children": $Map<string, $PartDefinition>

constructor(list0: $List$$Type<$CubeDefinition$$Type>, partPose1: $PartPose$$Type)

public "addOrReplaceChild"(string0: string, cubeListBuilder1: $CubeListBuilder$$Type, partPose2: $PartPose$$Type): $PartDefinition
public "bake"(int0: integer, int1: integer): $ModelPart
public "getChild"(string0: string): $PartDefinition
}
}

declare module "net.minecraft.client.model.Model" {
import { $ResourceLocation$$Type } from "net.minecraft.resources.ResourceLocation"
import { $RenderType } from "net.minecraft.client.renderer.RenderType"
import { $Function$$Type } from "java.util.function.Function"
import { $VertexConsumer$$Type } from "com.mojang.blaze3d.vertex.VertexConsumer"
import { $PoseStack$$Type } from "com.mojang.blaze3d.vertex.PoseStack"

export class $Model {
constructor(function0: $Function$$Type<$ResourceLocation$$Type, $RenderType>)

public "renderToBuffer"(poseStack0: $PoseStack$$Type, vertexConsumer1: $VertexConsumer$$Type, int2: integer, int3: integer, float4: float, float5: float, float6: float, float7: float): void
public "renderType"(resourceLocation0: $ResourceLocation$$Type): $RenderType
}
}

declare module "net.minecraft.client.model.geom.builders.MaterialDefinition" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export class $MaterialDefinition {
constructor(int0: integer, int1: integer)

}
}

declare module "net.minecraft.client.model.HeadedModel" {
import { $ModelPart } from "net.minecraft.client.model.geom.ModelPart"

export interface $HeadedModel {
"getHead"(): $ModelPart
get "head"(): $ModelPart
}

export namespace $HeadedModel {
const probejs$$marker: never
}
export abstract class $HeadedModel$$Static implements $HeadedModel {
}
}

declare module "net.minecraft.client.model.geom.ModelPart$Visitor" {
import { $PoseStack$Pose$$Type } from "com.mojang.blaze3d.vertex.PoseStack$Pose"
import { $ModelPart$Cube$$Type } from "net.minecraft.client.model.geom.ModelPart$Cube"

export interface $ModelPart$Visitor {
"visit"(pose0: $PoseStack$Pose$$Type, string1: string, int2: integer, cube3: $ModelPart$Cube$$Type): void
}

export namespace $ModelPart$Visitor {
const probejs$$marker: never
}
export abstract class $ModelPart$Visitor$$Static implements $ModelPart$Visitor {
}
}

declare module "net.minecraft.client.model.AgeableListModel" {
import { $AgeableListAccessor } from "net.mehvahdjukaar.supplementaries.mixins.AgeableListAccessor"
import { $Entity } from "net.minecraft.world.entity.Entity"
import { $AgeableListModelAccessor } from "com.simibubi.create.foundation.mixin.accessor.AgeableListModelAccessor"
import { $EntityModel } from "net.minecraft.client.model.EntityModel"

export class $AgeableListModel<E extends $Entity = $Entity> extends $EntityModel<E> implements $AgeableListAccessor, $AgeableListModelAccessor {
readonly "babyBodyScale": float
readonly "babyHeadScale": float
readonly "babyYHeadOffset": float
readonly "babyZHeadOffset": float
readonly "bodyYOffset": float
readonly "scaleHead": boolean

}
}

declare module "net.minecraft.client.model.geom.builders.CubeDeformation" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export class $CubeDeformation {
static readonly "NONE": $CubeDeformation

constructor(float0: float, float1: float, float2: float)
constructor(float0: float)

public "extend"(float0: float): $CubeDeformation
public "extend"(float0: float, float1: float, float2: float): $CubeDeformation
}
}

declare module "net.minecraft.client.model.geom.ModelPart$Polygon" {
import { $ModelPart$Vertex, $ModelPart$Vertex$$Type } from "net.minecraft.client.model.geom.ModelPart$Vertex"
import { $Direction$$Type } from "net.minecraft.core.Direction"
import { $Vector3f, $Vector3f$$Type } from "org.joml.Vector3f"

export class $ModelPart$Polygon {
constructor(vertex0s: $ModelPart$Vertex$$Type[], float1: float, float2: float, float3: float, float4: float, float5: float, float6: float, boolean7: boolean, direction8: $Direction$$Type)

get "normal"(): $Vector3f
set "normal"(value: $Vector3f$$Type)
get "vertices"(): $ModelPart$Vertex[]
set "vertices"(value: $ModelPart$Vertex$$Type[])
}
}

declare module "net.minecraft.client.model.geom.ModelLayerLocation" {
import { $ResourceLocation, $ResourceLocation$$Type } from "net.minecraft.resources.ResourceLocation"

export class $ModelLayerLocation {
constructor(resourceLocation0: $ResourceLocation$$Type, string1: string)

public "getLayer"(): string
public "getModel"(): $ResourceLocation
get "layer"(): string
get "model"(): $ResourceLocation
}
}

declare module "net.minecraft.client.model.geom.ModelPart$Cube" {
import { $ModelPart$Polygon, $ModelPart$Polygon$$Type } from "net.minecraft.client.model.geom.ModelPart$Polygon"
import { $PoseStack$Pose$$Type } from "com.mojang.blaze3d.vertex.PoseStack$Pose"
import { $ModelCuboid } from "me.jellysquid.mods.sodium.client.render.immediate.model.ModelCuboid"
import { $Direction$$Type } from "net.minecraft.core.Direction"
import { $Set$$Type } from "java.util.Set"
import { $ModelCuboidAccessor } from "me.jellysquid.mods.sodium.client.model.ModelCuboidAccessor"
import { $VertexConsumer$$Type } from "com.mojang.blaze3d.vertex.VertexConsumer"

export class $ModelPart$Cube implements $ModelCuboidAccessor {
constructor(int0: integer, int1: integer, float2: float, float3: float, float4: float, float5: float, float6: float, float7: float, float8: float, float9: float, float10: float, boolean11: boolean, float12: float, float13: float, set14: $Set$$Type<$Direction$$Type>)

public "compile"(pose0: $PoseStack$Pose$$Type, vertexConsumer1: $VertexConsumer$$Type, int2: integer, int3: integer, float4: float, float5: float, float6: float, float7: float): void
public "embeddium$getSimpleCuboid"(): $ModelCuboid
public "sodium$copy"(): $ModelCuboid
get "maxX"(): float
set "maxX"(value: float)
get "maxY"(): float
set "maxY"(value: float)
get "maxZ"(): float
set "maxZ"(value: float)
get "minX"(): float
set "minX"(value: float)
get "minY"(): float
set "minY"(value: float)
get "minZ"(): float
set "minZ"(value: float)
get "polygons"(): $ModelPart$Polygon[]
set "polygons"(value: $ModelPart$Polygon$$Type[])
}
}

declare module "net.minecraft.client.model.PlayerModel" {
import { $LivingEntity } from "net.minecraft.world.entity.LivingEntity"
import { $IPlayerModel } from "dev.kosmx.playerAnim.impl.IPlayerModel"
import { $RandomSource$$Type } from "net.minecraft.util.RandomSource"
import { $Iterable } from "java.lang.Iterable"
import { $MeshDefinition } from "net.minecraft.client.model.geom.builders.MeshDefinition"
import { $PoseStack$$Type } from "com.mojang.blaze3d.vertex.PoseStack"
import { $IMixinPlayerModel } from "de.keksuccino.fancymenu.mixin.mixins.common.client.IMixinPlayerModel"
import { $CubeDeformation$$Type } from "net.minecraft.client.model.geom.builders.CubeDeformation"
import { $HumanoidModel } from "net.minecraft.client.model.HumanoidModel"
import { $VertexConsumer$$Type } from "com.mojang.blaze3d.vertex.VertexConsumer"
import { $ModelPart, $ModelPart$$Type } from "net.minecraft.client.model.geom.ModelPart"
import { $PlayerModelAccessor } from "com.aetherteam.aether.mixin.mixins.client.accessor.PlayerModelAccessor"

export class $PlayerModel<T extends $LivingEntity = $LivingEntity> extends $HumanoidModel<T> implements $PlayerModelAccessor, $IMixinPlayerModel, $IPlayerModel {
readonly "slim": boolean

constructor(modelPart0: $ModelPart$$Type, boolean1: boolean)

public "bodyParts"(): $Iterable<$ModelPart>
public static "createMesh"(cubeDeformation0: $CubeDeformation$$Type, boolean1: boolean): $MeshDefinition
public "getRandomModelPart"(randomSource0: $RandomSource$$Type): $ModelPart
public "playerAnimator_prepForFirstPersonRender"(): void
public "renderCloak"(poseStack0: $PoseStack$$Type, vertexConsumer1: $VertexConsumer$$Type, int2: integer, int3: integer): void
public "renderEars"(poseStack0: $PoseStack$$Type, vertexConsumer1: $VertexConsumer$$Type, int2: integer, int3: integer): void
get "cloak"(): $ModelPart
set "cloak"(value: $ModelPart$$Type)
get "ear"(): $ModelPart
set "ear"(value: $ModelPart$$Type)
get "jacket"(): $ModelPart
set "jacket"(value: $ModelPart$$Type)
get "leftPants"(): $ModelPart
set "leftPants"(value: $ModelPart$$Type)
get "leftSleeve"(): $ModelPart
set "leftSleeve"(value: $ModelPart$$Type)
get "rightPants"(): $ModelPart
set "rightPants"(value: $ModelPart$$Type)
get "rightSleeve"(): $ModelPart
set "rightSleeve"(value: $ModelPart$$Type)
}
}

declare module "net.minecraft.client.model.geom.builders.CubeDefinition" {
import { $ModelPart$Cube } from "net.minecraft.client.model.geom.ModelPart$Cube"

export class $CubeDefinition {
public "bake"(int0: integer, int1: integer): $ModelPart$Cube
}
}

declare module "net.minecraft.client.model.geom.builders.MeshDefinition" {
import { $PartDefinition } from "net.minecraft.client.model.geom.builders.PartDefinition"

export class $MeshDefinition {
constructor()

public "getRoot"(): $PartDefinition
get "root"(): $PartDefinition
}
}

declare module "net.minecraft.client.model.geom.ModelPart$Vertex" {
import { $Vector3f, $Vector3f$$Type } from "org.joml.Vector3f"

export class $ModelPart$Vertex {
readonly "pos": $Vector3f
readonly "u": float
readonly "v": float

constructor(float0: float, float1: float, float2: float, float3: float, float4: float)
constructor(vector3f0: $Vector3f$$Type, float1: float, float2: float)

public "remap"(float0: float, float1: float): $ModelPart$Vertex
}
}

declare module "net.minecraft.client.model.geom.EntityModelSet" {
import { $ProfilerFiller$$Type } from "net.minecraft.util.profiling.ProfilerFiller"
import { $Executor$$Type } from "java.util.concurrent.Executor"
import { $ResourceManagerReloadListener } from "net.minecraft.server.packs.resources.ResourceManagerReloadListener"
import { $ResourceManager$$Type } from "net.minecraft.server.packs.resources.ResourceManager"
import { $CompletableFuture } from "java.util.concurrent.CompletableFuture"
import { $ModelLayerLocation$$Type } from "net.minecraft.client.model.geom.ModelLayerLocation"
import { $PreparableReloadListener$PreparationBarrier$$Type } from "net.minecraft.server.packs.resources.PreparableReloadListener$PreparationBarrier"
import { $ModelPart } from "net.minecraft.client.model.geom.ModelPart"

export class $EntityModelSet implements $ResourceManagerReloadListener {
constructor()

public "bakeLayer"(modelLayerLocation0: $ModelLayerLocation$$Type): $ModelPart
public "getName"(): string
public "onResourceManagerReload"(resourceManager0: $ResourceManager$$Type): void
public "reload"(preparationBarrier0: $PreparableReloadListener$PreparationBarrier$$Type, resourceManager1: $ResourceManager$$Type, profilerFiller2: $ProfilerFiller$$Type, profilerFiller3: $ProfilerFiller$$Type, executor4: $Executor$$Type, executor5: $Executor$$Type): $CompletableFuture<void>
get "name"(): string
}
}

declare module "net.minecraft.client.model.EntityModel" {
import { $CallbackInfo$$Type } from "org.spongepowered.asm.mixin.injection.callback.CallbackInfo"
import { $Entity, $Entity$$Type } from "net.minecraft.world.entity.Entity"
import { $Model } from "net.minecraft.client.model.Model"

export class $EntityModel<T extends $Entity = $Entity> extends $Model {
public "copyPropertiesTo"(entityModel0: $EntityModel$$Type<T>): void
public "handler$dlo000$redux$prepareMobModel"(entity0: $Entity$$Type, float1: float, float2: float, float3: float, callbackInfo4: $CallbackInfo$$Type): void
public "prepareMobModel"(t0: T, float1: float, float2: float, float3: float): void
public "setupAnim"(t0: T, float1: float, float2: float, float3: float, float4: float, float5: float): void
get "attackTime"(): float
set "attackTime"(value: float)
get "riding"(): boolean
set "riding"(value: boolean)
get "young"(): boolean
set "young"(value: boolean)
}
}

declare module "net.minecraft.client.model.SkullModelBase" {
import { $Model } from "net.minecraft.client.model.Model"

export class $SkullModelBase extends $Model {
constructor()

public "setupAnim"(float0: float, float1: float, float2: float): void
}
}

declare module "net.minecraft.client.model.geom.PartPose" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export class $PartPose {
static readonly "ZERO": $PartPose
readonly "x": float
readonly "xRot": float
readonly "y": float
readonly "yRot": float
readonly "z": float
readonly "zRot": float

public static "offset"(float0: float, float1: float, float2: float): $PartPose
public static "offsetAndRotation"(float0: float, float1: float, float2: float, float3: float, float4: float, float5: float): $PartPose
public static "rotation"(float0: float, float1: float, float2: float): $PartPose
}
}

declare module "net.minecraft.client.model.geom.builders.CubeListBuilder" {
import { $List } from "java.util.List"
import { $CubeDefinition } from "net.minecraft.client.model.geom.builders.CubeDefinition"
import { $Direction$$Type } from "net.minecraft.core.Direction"
import { $Set$$Type } from "java.util.Set"
import { $CubeDeformation$$Type } from "net.minecraft.client.model.geom.builders.CubeDeformation"

export class $CubeListBuilder {
constructor()

public "addBox"(float0: float, float1: float, float2: float, float3: float, float4: float, float5: float): $CubeListBuilder
public "addBox"(float0: float, float1: float, float2: float, float3: float, float4: float, float5: float, set6: $Set$$Type<$Direction$$Type>): $CubeListBuilder
public "addBox"(float0: float, float1: float, float2: float, float3: float, float4: float, float5: float, cubeDeformation6: $CubeDeformation$$Type): $CubeListBuilder
public "addBox"(float0: float, float1: float, float2: float, float3: float, float4: float, float5: float, cubeDeformation6: $CubeDeformation$$Type, float7: float, float8: float): $CubeListBuilder
public "addBox"(string0: string, float1: float, float2: float, float3: float, float4: float, float5: float, float6: float): $CubeListBuilder
public "addBox"(string0: string, float1: float, float2: float, float3: float, int4: integer, int5: integer, int6: integer, cubeDeformation7: $CubeDeformation$$Type, int8: integer, int9: integer): $CubeListBuilder
public "addBox"(string0: string, float1: float, float2: float, float3: float, int4: integer, int5: integer, int6: integer, int7: integer, int8: integer): $CubeListBuilder
public "addBox"(string0: string, float1: float, float2: float, float3: float, float4: float, float5: float, float6: float, cubeDeformation7: $CubeDeformation$$Type): $CubeListBuilder
public "addBox"(float0: float, float1: float, float2: float, float3: float, float4: float, float5: float, boolean6: boolean): $CubeListBuilder
public static "create"(): $CubeListBuilder
public "getCubes"(): $List<$CubeDefinition>
public "mirror"(): $CubeListBuilder
public "mirror"(boolean0: boolean): $CubeListBuilder
public "texOffs"(int0: integer, int1: integer): $CubeListBuilder
get "cubes"(): $List<$CubeDefinition>
}
}

declare module "net.minecraft.client.model.geom.builders.LayerDefinition" {
import { $MaterialDefinition, $MaterialDefinition$$Type } from "net.minecraft.client.model.geom.builders.MaterialDefinition"
import { $MeshDefinition, $MeshDefinition$$Type } from "net.minecraft.client.model.geom.builders.MeshDefinition"
import { $ModelPart } from "net.minecraft.client.model.geom.ModelPart"

export class $LayerDefinition {
readonly "material": $MaterialDefinition
readonly "mesh": $MeshDefinition

constructor(meshDefinition0: $MeshDefinition$$Type, materialDefinition1: $MaterialDefinition$$Type)

public "bakeRoot"(): $ModelPart
public static "create"(meshDefinition0: $MeshDefinition$$Type, int1: integer, int2: integer): $LayerDefinition
}
}

