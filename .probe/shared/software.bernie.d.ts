declare module "software.bernie.geckolib.core.animation.Animation$LoopType" {
import { $JsonElement$$Type } from "com.google.gson.JsonElement"
import { $Animation$$Type } from "software.bernie.geckolib.core.animation.Animation"
import { $AnimationController$$Type } from "software.bernie.geckolib.core.animation.AnimationController"
import { $Map } from "java.util.Map"
import { $GeoAnimatable$$Type } from "software.bernie.geckolib.core.animatable.GeoAnimatable"

export interface $Animation$LoopType {
"getId"(): string
"shouldPlayAgain"(geoAnimatable0: $GeoAnimatable$$Type, animationController1: $AnimationController$$Type<$GeoAnimatable$$Type>, animation2: $Animation$$Type): boolean
get "id"(): string
}

export namespace $Animation$LoopType {
const DEFAULT: $Animation$LoopType
const HOLD_ON_LAST_FRAME: $Animation$LoopType
const LOOP: $Animation$LoopType
const LOOP_TYPES: $Map<string, $Animation$LoopType>
const PLAY_ONCE: $Animation$LoopType
function fromJson(jsonElement0: $JsonElement$$Type): $Animation$LoopType
function fromString(string0: string): $Animation$LoopType
function register(string0: string, loopType1: $Animation$LoopType$$Type): $Animation$LoopType
}
export abstract class $Animation$LoopType$$Static implements $Animation$LoopType {
static readonly "DEFAULT": $Animation$LoopType
static readonly "HOLD_ON_LAST_FRAME": $Animation$LoopType
static readonly "LOOP": $Animation$LoopType
static readonly "LOOP_TYPES": $Map<string, $Animation$LoopType>
static readonly "PLAY_ONCE": $Animation$LoopType

static "fromJson"(jsonElement0: $JsonElement$$Type): $Animation$LoopType
static "fromString"(string0: string): $Animation$LoopType
static "register"(string0: string, loopType1: $Animation$LoopType$$Type): $Animation$LoopType
}
}

declare module "software.bernie.geckolib.renderer.GeoObjectRenderer" {
import { $ResourceLocation, $ResourceLocation$$Type } from "net.minecraft.resources.ResourceLocation"
import { $GeoBone$$Type } from "software.bernie.geckolib.cache.object.GeoBone"
import { $GeoRenderer } from "software.bernie.geckolib.renderer.GeoRenderer"
import { $RenderType, $RenderType$$Type } from "net.minecraft.client.renderer.RenderType"
import { $GeoModel, $GeoModel$$Type } from "software.bernie.geckolib.model.GeoModel"
import { $PoseStack$$Type } from "com.mojang.blaze3d.vertex.PoseStack"
import { $Color } from "software.bernie.geckolib.core.object.Color"
import { $GeoRenderLayer, $GeoRenderLayer$$Type } from "software.bernie.geckolib.renderer.layer.GeoRenderLayer"
import { $List } from "java.util.List"
import { $GeoCube$$Type } from "software.bernie.geckolib.cache.object.GeoCube"
import { $Vector3f$$Type } from "org.joml.Vector3f"
import { $BakedGeoModel$$Type } from "software.bernie.geckolib.cache.object.BakedGeoModel"
import { $GeoAnimatable, $GeoAnimatable$$Type } from "software.bernie.geckolib.core.animatable.GeoAnimatable"
import { $GeoQuad$$Type } from "software.bernie.geckolib.cache.object.GeoQuad"
import { $Matrix4f$$Type } from "org.joml.Matrix4f"
import { $MultiBufferSource$$Type } from "net.minecraft.client.renderer.MultiBufferSource"
import { $VertexConsumer$$Type } from "com.mojang.blaze3d.vertex.VertexConsumer"

export class $GeoObjectRenderer<T extends $GeoAnimatable = $GeoAnimatable> implements $GeoRenderer<T> {
constructor(geoModel0: $GeoModel$$Type<T>)

public "actuallyRender"(poseStack0: $PoseStack$$Type, t1: T, bakedGeoModel2: $BakedGeoModel$$Type, renderType3: $RenderType$$Type, multiBufferSource4: $MultiBufferSource$$Type, vertexConsumer5: $VertexConsumer$$Type, boolean6: boolean, float7: float, int8: integer, int9: integer, float10: float, float11: float, float12: float, float13: float): void
public "addRenderLayer"(geoRenderLayer0: $GeoRenderLayer$$Type<T>): $GeoObjectRenderer<T>
public "applyRenderLayers"(poseStack0: $PoseStack$$Type, t1: T, bakedGeoModel2: $BakedGeoModel$$Type, renderType3: $RenderType$$Type, multiBufferSource4: $MultiBufferSource$$Type, vertexConsumer5: $VertexConsumer$$Type, float6: float, int7: integer, int8: integer): void
public "applyRenderLayersForBone"(poseStack0: $PoseStack$$Type, t1: T, geoBone2: $GeoBone$$Type, renderType3: $RenderType$$Type, multiBufferSource4: $MultiBufferSource$$Type, vertexConsumer5: $VertexConsumer$$Type, float6: float, int7: integer, int8: integer): void
public "createVerticesOfQuad"(geoQuad0: $GeoQuad$$Type, matrix4f1: $Matrix4f$$Type, vector3f2: $Vector3f$$Type, vertexConsumer3: $VertexConsumer$$Type, int4: integer, int5: integer, float6: float, float7: float, float8: float, float9: float): void
public "defaultRender"(poseStack0: $PoseStack$$Type, t1: T, multiBufferSource2: $MultiBufferSource$$Type, renderType3: $RenderType$$Type, vertexConsumer4: $VertexConsumer$$Type, float5: float, float6: float, int7: integer): void
public "doPostRenderCleanup"(): void
public "fireCompileRenderLayersEvent"(): void
public "firePostRenderEvent"(poseStack0: $PoseStack$$Type, bakedGeoModel1: $BakedGeoModel$$Type, multiBufferSource2: $MultiBufferSource$$Type, float3: float, int4: integer): void
public "firePreRenderEvent"(poseStack0: $PoseStack$$Type, bakedGeoModel1: $BakedGeoModel$$Type, multiBufferSource2: $MultiBufferSource$$Type, float3: float, int4: integer): boolean
public "getAnimatable"(): T
public "getGeoModel"(): $GeoModel<T>
public "getInstanceId"(t0: T): long
public "getMotionAnimThreshold"(t0: T): float
public "getPackedOverlay"(t0: T, float1: float, float2: float): integer
/** @deprecated */
public "getPackedOverlay"(t0: T, float1: float): integer
public "getRenderColor"(t0: T, float1: float, int2: integer): $Color
public "getRenderLayers"(): $List<$GeoRenderLayer<T>>
public "getRenderType"(t0: T, resourceLocation1: $ResourceLocation$$Type, multiBufferSource2: $MultiBufferSource$$Type, float3: float): $RenderType
public "getTextureLocation"(t0: T): $ResourceLocation
public "postRender"(poseStack0: $PoseStack$$Type, t1: T, bakedGeoModel2: $BakedGeoModel$$Type, multiBufferSource3: $MultiBufferSource$$Type, vertexConsumer4: $VertexConsumer$$Type, boolean5: boolean, float6: float, int7: integer, int8: integer, float9: float, float10: float, float11: float, float12: float): void
public "preApplyRenderLayers"(poseStack0: $PoseStack$$Type, t1: T, bakedGeoModel2: $BakedGeoModel$$Type, renderType3: $RenderType$$Type, multiBufferSource4: $MultiBufferSource$$Type, vertexConsumer5: $VertexConsumer$$Type, float6: float, int7: integer, int8: integer): void
public "preRender"(poseStack0: $PoseStack$$Type, t1: T, bakedGeoModel2: $BakedGeoModel$$Type, multiBufferSource3: $MultiBufferSource$$Type, vertexConsumer4: $VertexConsumer$$Type, boolean5: boolean, float6: float, int7: integer, int8: integer, float9: float, float10: float, float11: float, float12: float): void
public "reRender"(bakedGeoModel0: $BakedGeoModel$$Type, poseStack1: $PoseStack$$Type, multiBufferSource2: $MultiBufferSource$$Type, t3: T, renderType4: $RenderType$$Type, vertexConsumer5: $VertexConsumer$$Type, float6: float, int7: integer, int8: integer, float9: float, float10: float, float11: float, float12: float): void
public "render"(poseStack0: $PoseStack$$Type, t1: T, multiBufferSource2: $MultiBufferSource$$Type, renderType3: $RenderType$$Type, vertexConsumer4: $VertexConsumer$$Type, int5: integer): void
public "renderChildBones"(poseStack0: $PoseStack$$Type, t1: T, geoBone2: $GeoBone$$Type, renderType3: $RenderType$$Type, multiBufferSource4: $MultiBufferSource$$Type, vertexConsumer5: $VertexConsumer$$Type, boolean6: boolean, float7: float, int8: integer, int9: integer, float10: float, float11: float, float12: float, float13: float): void
public "renderCube"(poseStack0: $PoseStack$$Type, geoCube1: $GeoCube$$Type, vertexConsumer2: $VertexConsumer$$Type, int3: integer, int4: integer, float5: float, float6: float, float7: float, float8: float): void
public "renderCubesOfBone"(poseStack0: $PoseStack$$Type, geoBone1: $GeoBone$$Type, vertexConsumer2: $VertexConsumer$$Type, int3: integer, int4: integer, float5: float, float6: float, float7: float, float8: float): void
public "renderFinal"(poseStack0: $PoseStack$$Type, t1: T, bakedGeoModel2: $BakedGeoModel$$Type, multiBufferSource3: $MultiBufferSource$$Type, vertexConsumer4: $VertexConsumer$$Type, float5: float, int6: integer, int7: integer, float8: float, float9: float, float10: float, float11: float): void
public "renderRecursively"(poseStack0: $PoseStack$$Type, t1: T, geoBone2: $GeoBone$$Type, renderType3: $RenderType$$Type, multiBufferSource4: $MultiBufferSource$$Type, vertexConsumer5: $VertexConsumer$$Type, boolean6: boolean, float7: float, int8: integer, int9: integer, float10: float, float11: float, float12: float, float13: float): void
public "scaleModelForRender"(float0: float, float1: float, poseStack2: $PoseStack$$Type, t3: T, bakedGeoModel4: $BakedGeoModel$$Type, boolean5: boolean, float6: float, int7: integer, int8: integer): void
public "updateAnimatedTextureFrame"(t0: T): void
public "withScale"(float0: float, float1: float): $GeoObjectRenderer<T>
public "withScale"(float0: float): $GeoObjectRenderer<T>
get "animatable"(): T
get "geoModel"(): $GeoModel<T>
get "renderLayers"(): $List<$GeoRenderLayer<T>>
}
}

declare module "software.bernie.geckolib.core.keyframe.BoneAnimationQueue" {
import { $AnimationPoint$$Type } from "software.bernie.geckolib.core.keyframe.AnimationPoint"
import { $CoreGeoBone, $CoreGeoBone$$Type } from "software.bernie.geckolib.core.animatable.model.CoreGeoBone"
import { $BoneSnapshot$$Type } from "software.bernie.geckolib.core.state.BoneSnapshot"
import { $AnimationPointQueue, $AnimationPointQueue$$Type } from "software.bernie.geckolib.core.keyframe.AnimationPointQueue"
import { $Record } from "java.lang.Record"
import { $Keyframe$$Type } from "software.bernie.geckolib.core.keyframe.Keyframe"

export class $BoneAnimationQueue extends $Record {
constructor(bone: $CoreGeoBone$$Type, rotationXQueue: $AnimationPointQueue$$Type, rotationYQueue: $AnimationPointQueue$$Type, rotationZQueue: $AnimationPointQueue$$Type, positionXQueue: $AnimationPointQueue$$Type, positionYQueue: $AnimationPointQueue$$Type, positionZQueue: $AnimationPointQueue$$Type, scaleXQueue: $AnimationPointQueue$$Type, scaleYQueue: $AnimationPointQueue$$Type, scaleZQueue: $AnimationPointQueue$$Type)
constructor(coreGeoBone0: $CoreGeoBone$$Type)

public "addNextPosition"(keyframe0: $Keyframe$$Type<any>, double1: double, double2: double, boneSnapshot3: $BoneSnapshot$$Type, animationPoint4: $AnimationPoint$$Type, animationPoint5: $AnimationPoint$$Type, animationPoint6: $AnimationPoint$$Type): void
public "addNextRotation"(keyframe0: $Keyframe$$Type<any>, double1: double, double2: double, boneSnapshot3: $BoneSnapshot$$Type, boneSnapshot4: $BoneSnapshot$$Type, animationPoint5: $AnimationPoint$$Type, animationPoint6: $AnimationPoint$$Type, animationPoint7: $AnimationPoint$$Type): void
public "addNextScale"(keyframe0: $Keyframe$$Type<any>, double1: double, double2: double, boneSnapshot3: $BoneSnapshot$$Type, animationPoint4: $AnimationPoint$$Type, animationPoint5: $AnimationPoint$$Type, animationPoint6: $AnimationPoint$$Type): void
public "addPosXPoint"(keyframe0: $Keyframe$$Type<any>, double1: double, double2: double, double3: double, double4: double): void
public "addPosYPoint"(keyframe0: $Keyframe$$Type<any>, double1: double, double2: double, double3: double, double4: double): void
public "addPosZPoint"(keyframe0: $Keyframe$$Type<any>, double1: double, double2: double, double3: double, double4: double): void
public "addPositions"(animationPoint0: $AnimationPoint$$Type, animationPoint1: $AnimationPoint$$Type, animationPoint2: $AnimationPoint$$Type): void
public "addRotationXPoint"(keyframe0: $Keyframe$$Type<any>, double1: double, double2: double, double3: double, double4: double): void
public "addRotationYPoint"(keyframe0: $Keyframe$$Type<any>, double1: double, double2: double, double3: double, double4: double): void
public "addRotationZPoint"(keyframe0: $Keyframe$$Type<any>, double1: double, double2: double, double3: double, double4: double): void
public "addRotations"(animationPoint0: $AnimationPoint$$Type, animationPoint1: $AnimationPoint$$Type, animationPoint2: $AnimationPoint$$Type): void
public "addScaleXPoint"(keyframe0: $Keyframe$$Type<any>, double1: double, double2: double, double3: double, double4: double): void
public "addScaleYPoint"(keyframe0: $Keyframe$$Type<any>, double1: double, double2: double, double3: double, double4: double): void
public "addScaleZPoint"(keyframe0: $Keyframe$$Type<any>, double1: double, double2: double, double3: double, double4: double): void
public "addScales"(animationPoint0: $AnimationPoint$$Type, animationPoint1: $AnimationPoint$$Type, animationPoint2: $AnimationPoint$$Type): void
public "bone"(): $CoreGeoBone
public "positionXQueue"(): $AnimationPointQueue
public "positionYQueue"(): $AnimationPointQueue
public "positionZQueue"(): $AnimationPointQueue
public "rotationXQueue"(): $AnimationPointQueue
public "rotationYQueue"(): $AnimationPointQueue
public "rotationZQueue"(): $AnimationPointQueue
public "scaleXQueue"(): $AnimationPointQueue
public "scaleYQueue"(): $AnimationPointQueue
public "scaleZQueue"(): $AnimationPointQueue
}
}

declare module "software.bernie.geckolib.core.keyframe.event.data.KeyFrameData" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export class $KeyFrameData {
constructor(double0: double)

public "getStartTick"(): double
get "startTick"(): double
}
}

declare module "software.bernie.geckolib.core.animation.AnimationProcessor" {
import { $AnimationProcessor$QueuedAnimation } from "software.bernie.geckolib.core.animation.AnimationProcessor$QueuedAnimation"
import { $CoreBakedGeoModel$$Type } from "software.bernie.geckolib.core.animatable.model.CoreBakedGeoModel"
import { $CoreGeoBone, $CoreGeoBone$$Type } from "software.bernie.geckolib.core.animatable.model.CoreGeoBone"
import { $RawAnimation$$Type } from "software.bernie.geckolib.core.animation.RawAnimation"
import { $Collection } from "java.util.Collection"
import { $AnimationState$$Type } from "software.bernie.geckolib.core.animation.AnimationState"
import { $CoreGeoModel$$Type } from "software.bernie.geckolib.core.animatable.model.CoreGeoModel"
import { $Queue } from "java.util.Queue"
import { $GeoAnimatable, $GeoAnimatable$$Type } from "software.bernie.geckolib.core.animatable.GeoAnimatable"
import { $AnimatableManager$$Type } from "software.bernie.geckolib.core.animation.AnimatableManager"

export class $AnimationProcessor<T extends $GeoAnimatable = $GeoAnimatable> {
constructor(coreGeoModel0: $CoreGeoModel$$Type<T>)

public "buildAnimationQueue"(t0: T, rawAnimation1: $RawAnimation$$Type): $Queue<$AnimationProcessor$QueuedAnimation>
public "getBone"(string0: string): $CoreGeoBone
public "getRegisteredBones"(): $Collection<$CoreGeoBone>
public "preAnimationSetup"(t0: T, double1: double): void
public "registerGeoBone"(coreGeoBone0: $CoreGeoBone$$Type): void
public "setActiveModel"(coreBakedGeoModel0: $CoreBakedGeoModel$$Type): void
public "tickAnimation"(t0: T, coreGeoModel1: $CoreGeoModel$$Type<T>, animatableManager2: $AnimatableManager$$Type<T>, double3: double, animationState4: $AnimationState$$Type<T>, boolean5: boolean): void
get "reloadAnimations"(): boolean
set "reloadAnimations"(value: boolean)
get "registeredBones"(): $Collection<$CoreGeoBone>
set "activeModel"(value: $CoreBakedGeoModel$$Type)
}
}

declare module "software.bernie.geckolib.cache.object.BakedGeoModel" {
import { $GeoBone, $GeoBone$$Type } from "software.bernie.geckolib.cache.object.GeoBone"
import { $ModelProperties, $ModelProperties$$Type } from "software.bernie.geckolib.loading.json.raw.ModelProperties"
import { $CoreBakedGeoModel } from "software.bernie.geckolib.core.animatable.model.CoreBakedGeoModel"
import { $List, $List$$Type } from "java.util.List"
import { $CoreGeoBone, $CoreGeoBone$$Type } from "software.bernie.geckolib.core.animatable.model.CoreGeoBone"
import { $Optional } from "java.util.Optional"
import { $Record } from "java.lang.Record"

export class $BakedGeoModel extends $Record implements $CoreBakedGeoModel {
constructor(topLevelBones: $List$$Type<$GeoBone$$Type>, properties: $ModelProperties$$Type)

public "getBone"(string0: string): $Optional<$GeoBone>
public "getBones"(): $List<$CoreGeoBone>
public "properties"(): $ModelProperties
public "searchForChildBone"(coreGeoBone0: $CoreGeoBone$$Type, string1: string): $CoreGeoBone
public "topLevelBones"(): $List<$GeoBone>
get "bones"(): $List<$CoreGeoBone>
}
}

declare module "software.bernie.geckolib.core.keyframe.KeyframeStack" {
import { $List, $List$$Type } from "java.util.List"
import { $Record } from "java.lang.Record"
import { $Keyframe, $Keyframe$$Type } from "software.bernie.geckolib.core.keyframe.Keyframe"

export class $KeyframeStack<T extends $Keyframe<any> = $Keyframe<any>> extends $Record {
constructor()
constructor(xKeyframes: $List$$Type<T>, yKeyframes: $List$$Type<T>, zKeyframes: $List$$Type<T>)

public static "from"<F extends $Keyframe<any>>(keyframeStack0: $KeyframeStack$$Type<F>): $KeyframeStack<F>
public "getLastKeyframeTime"(): double
public "xKeyframes"(): $List<T>
public "yKeyframes"(): $List<T>
public "zKeyframes"(): $List<T>
get "lastKeyframeTime"(): double
}
}

declare module "software.bernie.geckolib.core.keyframe.Keyframe" {
import { $List, $List$$Type } from "java.util.List"
import { $EasingType, $EasingType$$Type } from "software.bernie.geckolib.core.animation.EasingType"
import { $IValue, $IValue$$Type } from "com.eliotlash.mclib.math.IValue"
import { $Record } from "java.lang.Record"

export class $Keyframe<T extends $IValue = $IValue> extends $Record {
constructor(double0: double, t1: T, t2: T)
constructor(length: double, startValue: T, endValue: T, easingType: $EasingType$$Type, easingArgs: $List$$Type<T>)
constructor(double0: double, t1: T, t2: T, easingType3: $EasingType$$Type)

public "easingArgs"(): $List<T>
public "easingType"(): $EasingType
public "endValue"(): T
public "length"(): double
public "startValue"(): T
}
}

declare module "software.bernie.geckolib.renderer.GeoRenderer" {
import { $ResourceLocation, $ResourceLocation$$Type } from "net.minecraft.resources.ResourceLocation"
import { $GeoBone$$Type } from "software.bernie.geckolib.cache.object.GeoBone"
import { $RenderType, $RenderType$$Type } from "net.minecraft.client.renderer.RenderType"
import { $GeoModel } from "software.bernie.geckolib.model.GeoModel"
import { $PoseStack$$Type } from "com.mojang.blaze3d.vertex.PoseStack"
import { $Color } from "software.bernie.geckolib.core.object.Color"
import { $GeoRenderLayer } from "software.bernie.geckolib.renderer.layer.GeoRenderLayer"
import { $List } from "java.util.List"
import { $GeoCube$$Type } from "software.bernie.geckolib.cache.object.GeoCube"
import { $Vector3f$$Type } from "org.joml.Vector3f"
import { $BakedGeoModel$$Type } from "software.bernie.geckolib.cache.object.BakedGeoModel"
import { $GeoAnimatable, $GeoAnimatable$$Type } from "software.bernie.geckolib.core.animatable.GeoAnimatable"
import { $GeoQuad$$Type } from "software.bernie.geckolib.cache.object.GeoQuad"
import { $Matrix4f$$Type } from "org.joml.Matrix4f"
import { $MultiBufferSource$$Type } from "net.minecraft.client.renderer.MultiBufferSource"
import { $VertexConsumer$$Type } from "com.mojang.blaze3d.vertex.VertexConsumer"

export interface $GeoRenderer<T extends $GeoAnimatable = $GeoAnimatable> {
"actuallyRender"(poseStack0: $PoseStack$$Type, t1: T, bakedGeoModel2: $BakedGeoModel$$Type, renderType3: $RenderType$$Type, multiBufferSource4: $MultiBufferSource$$Type, vertexConsumer5: $VertexConsumer$$Type, boolean6: boolean, float7: float, int8: integer, int9: integer, float10: float, float11: float, float12: float, float13: float): void
"applyRenderLayers"(poseStack0: $PoseStack$$Type, t1: T, bakedGeoModel2: $BakedGeoModel$$Type, renderType3: $RenderType$$Type, multiBufferSource4: $MultiBufferSource$$Type, vertexConsumer5: $VertexConsumer$$Type, float6: float, int7: integer, int8: integer): void
"applyRenderLayersForBone"(poseStack0: $PoseStack$$Type, t1: T, geoBone2: $GeoBone$$Type, renderType3: $RenderType$$Type, multiBufferSource4: $MultiBufferSource$$Type, vertexConsumer5: $VertexConsumer$$Type, float6: float, int7: integer, int8: integer): void
"createVerticesOfQuad"(geoQuad0: $GeoQuad$$Type, matrix4f1: $Matrix4f$$Type, vector3f2: $Vector3f$$Type, vertexConsumer3: $VertexConsumer$$Type, int4: integer, int5: integer, float6: float, float7: float, float8: float, float9: float): void
"defaultRender"(poseStack0: $PoseStack$$Type, t1: T, multiBufferSource2: $MultiBufferSource$$Type, renderType3: $RenderType$$Type, vertexConsumer4: $VertexConsumer$$Type, float5: float, float6: float, int7: integer): void
"doPostRenderCleanup"(): void
"fireCompileRenderLayersEvent"(): void
"firePostRenderEvent"(poseStack0: $PoseStack$$Type, bakedGeoModel1: $BakedGeoModel$$Type, multiBufferSource2: $MultiBufferSource$$Type, float3: float, int4: integer): void
"firePreRenderEvent"(poseStack0: $PoseStack$$Type, bakedGeoModel1: $BakedGeoModel$$Type, multiBufferSource2: $MultiBufferSource$$Type, float3: float, int4: integer): boolean
"getAnimatable"(): T
"getGeoModel"(): $GeoModel<T>
"getInstanceId"(t0: T): long
"getMotionAnimThreshold"(t0: T): float
"getPackedOverlay"(t0: T, float1: float, float2: float): integer
/** @deprecated */
"getPackedOverlay"(t0: T, float1: float): integer
"getRenderColor"(t0: T, float1: float, int2: integer): $Color
"getRenderLayers"(): $List<$GeoRenderLayer<T>>
"getRenderType"(t0: T, resourceLocation1: $ResourceLocation$$Type, multiBufferSource2: $MultiBufferSource$$Type, float3: float): $RenderType
"getTextureLocation"(t0: T): $ResourceLocation
"postRender"(poseStack0: $PoseStack$$Type, t1: T, bakedGeoModel2: $BakedGeoModel$$Type, multiBufferSource3: $MultiBufferSource$$Type, vertexConsumer4: $VertexConsumer$$Type, boolean5: boolean, float6: float, int7: integer, int8: integer, float9: float, float10: float, float11: float, float12: float): void
"preApplyRenderLayers"(poseStack0: $PoseStack$$Type, t1: T, bakedGeoModel2: $BakedGeoModel$$Type, renderType3: $RenderType$$Type, multiBufferSource4: $MultiBufferSource$$Type, vertexConsumer5: $VertexConsumer$$Type, float6: float, int7: integer, int8: integer): void
"preRender"(poseStack0: $PoseStack$$Type, t1: T, bakedGeoModel2: $BakedGeoModel$$Type, multiBufferSource3: $MultiBufferSource$$Type, vertexConsumer4: $VertexConsumer$$Type, boolean5: boolean, float6: float, int7: integer, int8: integer, float9: float, float10: float, float11: float, float12: float): void
"reRender"(bakedGeoModel0: $BakedGeoModel$$Type, poseStack1: $PoseStack$$Type, multiBufferSource2: $MultiBufferSource$$Type, t3: T, renderType4: $RenderType$$Type, vertexConsumer5: $VertexConsumer$$Type, float6: float, int7: integer, int8: integer, float9: float, float10: float, float11: float, float12: float): void
"renderChildBones"(poseStack0: $PoseStack$$Type, t1: T, geoBone2: $GeoBone$$Type, renderType3: $RenderType$$Type, multiBufferSource4: $MultiBufferSource$$Type, vertexConsumer5: $VertexConsumer$$Type, boolean6: boolean, float7: float, int8: integer, int9: integer, float10: float, float11: float, float12: float, float13: float): void
"renderCube"(poseStack0: $PoseStack$$Type, geoCube1: $GeoCube$$Type, vertexConsumer2: $VertexConsumer$$Type, int3: integer, int4: integer, float5: float, float6: float, float7: float, float8: float): void
"renderCubesOfBone"(poseStack0: $PoseStack$$Type, geoBone1: $GeoBone$$Type, vertexConsumer2: $VertexConsumer$$Type, int3: integer, int4: integer, float5: float, float6: float, float7: float, float8: float): void
"renderFinal"(poseStack0: $PoseStack$$Type, t1: T, bakedGeoModel2: $BakedGeoModel$$Type, multiBufferSource3: $MultiBufferSource$$Type, vertexConsumer4: $VertexConsumer$$Type, float5: float, int6: integer, int7: integer, float8: float, float9: float, float10: float, float11: float): void
"renderRecursively"(poseStack0: $PoseStack$$Type, t1: T, geoBone2: $GeoBone$$Type, renderType3: $RenderType$$Type, multiBufferSource4: $MultiBufferSource$$Type, vertexConsumer5: $VertexConsumer$$Type, boolean6: boolean, float7: float, int8: integer, int9: integer, float10: float, float11: float, float12: float, float13: float): void
"scaleModelForRender"(float0: float, float1: float, poseStack2: $PoseStack$$Type, t3: T, bakedGeoModel4: $BakedGeoModel$$Type, boolean5: boolean, float6: float, int7: integer, int8: integer): void
"updateAnimatedTextureFrame"(t0: T): void
get "animatable"(): T
get "geoModel"(): $GeoModel<T>
get "renderLayers"(): $List<$GeoRenderLayer<T>>
}

export namespace $GeoRenderer {
const probejs$$marker: never
}
export abstract class $GeoRenderer$$Static<T extends $GeoAnimatable = $GeoAnimatable> implements $GeoRenderer<T> {
}
}

declare module "software.bernie.geckolib.loading.json.raw.ModelProperties" {
import { $JsonDeserializer } from "com.google.gson.JsonDeserializer"
import { $Record } from "java.lang.Record"

export class $ModelProperties extends $Record {
constructor(animationArmsDown: boolean, animationArmsOutFront: boolean, animationDontShowArmor: boolean, animationInvertedCrouch: boolean, animationNoHeadBob: boolean, animationSingleArmAnimation: boolean, animationSingleLegAnimation: boolean, animationStationaryLegs: boolean, animationStatueOfLibertyArms: boolean, animationUpsideDown: boolean, identifier: string, preserveModelPose: boolean, textureHeight: double, textureWidth: double, visibleBoundsHeight: double, visibleBoundsOffset: double[], visibleBoundsWidth: double)

public "animationArmsDown"(): boolean
public "animationArmsOutFront"(): boolean
public "animationDontShowArmor"(): boolean
public "animationInvertedCrouch"(): boolean
public "animationNoHeadBob"(): boolean
public "animationSingleArmAnimation"(): boolean
public "animationSingleLegAnimation"(): boolean
public "animationStationaryLegs"(): boolean
public "animationStatueOfLibertyArms"(): boolean
public "animationUpsideDown"(): boolean
public static "deserializer"(): $JsonDeserializer<$ModelProperties>
public "identifier"(): string
public "preserveModelPose"(): boolean
public "textureHeight"(): double
public "textureWidth"(): double
public "visibleBoundsHeight"(): double
public "visibleBoundsOffset"(): double[]
public "visibleBoundsWidth"(): double
}
}

declare module "software.bernie.geckolib.core.keyframe.AnimationPointQueue" {
import { $AnimationPoint, $AnimationPoint$$Type } from "software.bernie.geckolib.core.keyframe.AnimationPoint"
import { $Iterator } from "java.util.Iterator"
import { $ListIterator } from "java.util.ListIterator"
import { $Predicate$$Type } from "java.util.function.Predicate"
import { $Collection$$Type } from "java.util.Collection"
import { $UnaryOperator$$Type } from "java.util.function.UnaryOperator"
import { $Consumer$$Type } from "java.util.function.Consumer"
import { $List } from "java.util.List"
import { $Stream } from "java.util.stream.Stream"
import { $Comparator$$Type } from "java.util.Comparator"
import { $LinkedList } from "java.util.LinkedList"
import { $IntFunction$$Type } from "java.util.function.IntFunction"

export class $AnimationPointQueue extends $LinkedList<$AnimationPoint> {
constructor()

public "containsAll"(collection0: $Collection$$Type<any>): boolean
public static "copyOf"<E>(collection0: $Collection$$Type<E>): $List<E>
public "equals"(object0: any): boolean
public "forEach"(consumer0: $Consumer$$Type<$AnimationPoint$$Type>): void
public "hashCode"(): integer
public "isEmpty"(): boolean
public "iterator"(): $Iterator<$AnimationPoint>
public "listIterator"(): $ListIterator<$AnimationPoint>
public static "of"<E>(e0: E, e1: E, e2: E, e3: E): $List<E>
public static "of"<E>(e0: E, e1: E, e2: E): $List<E>
public static "of"<E>(e0: E, e1: E): $List<E>
public static "of"<E>(e0: E): $List<E>
public static "of"<E>(): $List<E>
public static "of"<E>(e0: E, e1: E, e2: E, e3: E, e4: E, e5: E, e6: E, e7: E): $List<E>
public static "of"<E>(e0: E, e1: E, e2: E, e3: E, e4: E, e5: E, e6: E): $List<E>
public static "of"<E>(e0: E, e1: E, e2: E, e3: E, e4: E, e5: E): $List<E>
public static "of"<E>(e0: E, e1: E, e2: E, e3: E, e4: E): $List<E>
public static "of"<E>(e0: E, e1: E, e2: E, e3: E, e4: E, e5: E, e6: E, e7: E, e8: E, e9: E): $List<E>
public static "of"<E>(e0: E, e1: E, e2: E, e3: E, e4: E, e5: E, e6: E, e7: E, e8: E): $List<E>
public static "of"<E>(...e0s: E[]): $List<E>
public "parallelStream"(): $Stream<$AnimationPoint>
public "removeAll"(collection0: $Collection$$Type<any>): boolean
public "removeIf"(predicate0: $Predicate$$Type<$AnimationPoint$$Type>): boolean
public "replaceAll"(unaryOperator0: $UnaryOperator$$Type<$AnimationPoint$$Type>): void
public "retainAll"(collection0: $Collection$$Type<any>): boolean
public "sort"(comparator0: $Comparator$$Type<$AnimationPoint$$Type>): void
public "stream"(): $Stream<$AnimationPoint>
public "subList"(int0: integer, int1: integer): $List<$AnimationPoint>
public "toArray"<T>(intFunction0: $IntFunction$$Type<T[]>): T[]
get "empty"(): boolean
}
}

declare module "software.bernie.geckolib.core.animation.AnimationController$AnimationStateHandler" {
import { $AnimationState$$Type } from "software.bernie.geckolib.core.animation.AnimationState"
import { $PlayState } from "software.bernie.geckolib.core.object.PlayState"
import { $GeoAnimatable } from "software.bernie.geckolib.core.animatable.GeoAnimatable"

export interface $AnimationController$AnimationStateHandler<A extends $GeoAnimatable = $GeoAnimatable> {
"handle"(animationState0: $AnimationState$$Type<A>): $PlayState
}

export namespace $AnimationController$AnimationStateHandler {
const probejs$$marker: never
}
export abstract class $AnimationController$AnimationStateHandler$$Static<A extends $GeoAnimatable = $GeoAnimatable> implements $AnimationController$AnimationStateHandler<A> {
}
}

declare module "software.bernie.geckolib.event.GeoRenderEvent$Object$Pre" {
import { $GeoRenderEvent$Object } from "software.bernie.geckolib.event.GeoRenderEvent$Object"
import { $BakedGeoModel, $BakedGeoModel$$Type } from "software.bernie.geckolib.cache.object.BakedGeoModel"
import { $GeoObjectRenderer$$Type } from "software.bernie.geckolib.renderer.GeoObjectRenderer"
import { $MultiBufferSource, $MultiBufferSource$$Type } from "net.minecraft.client.renderer.MultiBufferSource"
import { $PoseStack, $PoseStack$$Type } from "com.mojang.blaze3d.vertex.PoseStack"

export class $GeoRenderEvent$Object$Pre extends $GeoRenderEvent$Object {
constructor(geoObjectRenderer0: $GeoObjectRenderer$$Type<any>, poseStack1: $PoseStack$$Type, bakedGeoModel2: $BakedGeoModel$$Type, multiBufferSource3: $MultiBufferSource$$Type, float4: float, int5: integer)
constructor()

public "getBufferSource"(): $MultiBufferSource
public "getModel"(): $BakedGeoModel
public "getPackedLight"(): integer
public "getPartialTick"(): float
public "getPoseStack"(): $PoseStack
get "bufferSource"(): $MultiBufferSource
get "model"(): $BakedGeoModel
get "packedLight"(): integer
get "partialTick"(): float
get "poseStack"(): $PoseStack
}
}

declare module "software.bernie.geckolib.core.keyframe.AnimationPoint" {
import { $Record } from "java.lang.Record"
import { $Keyframe, $Keyframe$$Type } from "software.bernie.geckolib.core.keyframe.Keyframe"

export class $AnimationPoint extends $Record {
constructor(keyFrame: $Keyframe$$Type<any>, currentTick: double, transitionLength: double, animationStartValue: double, animationEndValue: double)

public "animationEndValue"(): double
public "animationStartValue"(): double
public "currentTick"(): double
public "keyFrame"(): $Keyframe<any>
public "transitionLength"(): double
}
}

declare module "software.bernie.geckolib.core.object.DataTicket" {
import { $Map$$Type } from "java.util.Map"
import { $Class, $Class$$Type } from "java.lang.Class"

export class $DataTicket<D = any> {
constructor(string0: string, class1: $Class$$Type<D>)

public "getData"<D>(map0: $Map$$Type<$DataTicket$$Type<any>, any>): D
public "id"(): string
public "objectType"(): $Class<D>
}
}

declare module "software.bernie.geckolib.event.GeoRenderEvent$Object" {
import { $GeoRenderEvent } from "software.bernie.geckolib.event.GeoRenderEvent"
import { $Event } from "net.minecraftforge.eventbus.api.Event"
import { $GeoObjectRenderer$$Type } from "software.bernie.geckolib.renderer.GeoObjectRenderer"

export class $GeoRenderEvent$Object extends $Event implements $GeoRenderEvent {
constructor()
constructor(geoObjectRenderer0: $GeoObjectRenderer$$Type<any>)

}
}

declare module "software.bernie.geckolib.renderer.GeoItemRenderer" {
import { $ResourceLocation, $ResourceLocation$$Type } from "net.minecraft.resources.ResourceLocation"
import { $Item, $Item$$Type } from "net.minecraft.world.item.Item"
import { $CompletableFuture } from "java.util.concurrent.CompletableFuture"
import { $GeoModel, $GeoModel$$Type } from "software.bernie.geckolib.model.GeoModel"
import { $PreparableReloadListener$PreparationBarrier$$Type } from "net.minecraft.server.packs.resources.PreparableReloadListener$PreparationBarrier"
import { $PoseStack$$Type } from "com.mojang.blaze3d.vertex.PoseStack"
import { $EntityModelSet$$Type } from "net.minecraft.client.model.geom.EntityModelSet"
import { $GeoRenderLayer, $GeoRenderLayer$$Type } from "software.bernie.geckolib.renderer.layer.GeoRenderLayer"
import { $Vector3f$$Type } from "org.joml.Vector3f"
import { $BakedGeoModel$$Type } from "software.bernie.geckolib.cache.object.BakedGeoModel"
import { $GeoQuad$$Type } from "software.bernie.geckolib.cache.object.GeoQuad"
import { $Matrix4f$$Type } from "org.joml.Matrix4f"
import { $GeoBone$$Type } from "software.bernie.geckolib.cache.object.GeoBone"
import { $GeoRenderer } from "software.bernie.geckolib.renderer.GeoRenderer"
import { $ProfilerFiller$$Type } from "net.minecraft.util.profiling.ProfilerFiller"
import { $Executor$$Type } from "java.util.concurrent.Executor"
import { $ResourceManager$$Type } from "net.minecraft.server.packs.resources.ResourceManager"
import { $RenderType, $RenderType$$Type } from "net.minecraft.client.renderer.RenderType"
import { $Color } from "software.bernie.geckolib.core.object.Color"
import { $BlockEntityWithoutLevelRenderer } from "net.minecraft.client.renderer.BlockEntityWithoutLevelRenderer"
import { $List } from "java.util.List"
import { $GeoCube$$Type } from "software.bernie.geckolib.cache.object.GeoCube"
import { $GeoAnimatable, $GeoAnimatable$$Type } from "software.bernie.geckolib.core.animatable.GeoAnimatable"
import { $ItemStack } from "net.minecraft.world.item.ItemStack"
import { $MultiBufferSource$$Type } from "net.minecraft.client.renderer.MultiBufferSource"
import { $VertexConsumer$$Type } from "com.mojang.blaze3d.vertex.VertexConsumer"
import { $BlockEntityRenderDispatcher$$Type } from "net.minecraft.client.renderer.blockentity.BlockEntityRenderDispatcher"

export class $GeoItemRenderer<T extends ($Item & $GeoAnimatable) = ($Item & $GeoAnimatable)> extends $BlockEntityWithoutLevelRenderer implements $GeoRenderer<T> {
constructor<I extends T>(i0: I)
constructor(geoModel0: $GeoModel$$Type<T>)
constructor(blockEntityRenderDispatcher0: $BlockEntityRenderDispatcher$$Type, entityModelSet1: $EntityModelSet$$Type, geoModel2: $GeoModel$$Type<T>)

public "actuallyRender"(poseStack0: $PoseStack$$Type, t1: T, bakedGeoModel2: $BakedGeoModel$$Type, renderType3: $RenderType$$Type, multiBufferSource4: $MultiBufferSource$$Type, vertexConsumer5: $VertexConsumer$$Type, boolean6: boolean, float7: float, int8: integer, int9: integer, float10: float, float11: float, float12: float, float13: float): void
public "addRenderLayer"(geoRenderLayer0: $GeoRenderLayer$$Type<T>): $GeoItemRenderer<T>
public "applyRenderLayers"(poseStack0: $PoseStack$$Type, t1: T, bakedGeoModel2: $BakedGeoModel$$Type, renderType3: $RenderType$$Type, multiBufferSource4: $MultiBufferSource$$Type, vertexConsumer5: $VertexConsumer$$Type, float6: float, int7: integer, int8: integer): void
public "applyRenderLayersForBone"(poseStack0: $PoseStack$$Type, t1: T, geoBone2: $GeoBone$$Type, renderType3: $RenderType$$Type, multiBufferSource4: $MultiBufferSource$$Type, vertexConsumer5: $VertexConsumer$$Type, float6: float, int7: integer, int8: integer): void
public "createVerticesOfQuad"(geoQuad0: $GeoQuad$$Type, matrix4f1: $Matrix4f$$Type, vector3f2: $Vector3f$$Type, vertexConsumer3: $VertexConsumer$$Type, int4: integer, int5: integer, float6: float, float7: float, float8: float, float9: float): void
public "defaultRender"(poseStack0: $PoseStack$$Type, t1: T, multiBufferSource2: $MultiBufferSource$$Type, renderType3: $RenderType$$Type, vertexConsumer4: $VertexConsumer$$Type, float5: float, float6: float, int7: integer): void
public "doPostRenderCleanup"(): void
public "fireCompileRenderLayersEvent"(): void
public "firePostRenderEvent"(poseStack0: $PoseStack$$Type, bakedGeoModel1: $BakedGeoModel$$Type, multiBufferSource2: $MultiBufferSource$$Type, float3: float, int4: integer): void
public "firePreRenderEvent"(poseStack0: $PoseStack$$Type, bakedGeoModel1: $BakedGeoModel$$Type, multiBufferSource2: $MultiBufferSource$$Type, float3: float, int4: integer): boolean
public "getAnimatable"(): T
public "getCurrentItemStack"(): $ItemStack
public "getGeoModel"(): $GeoModel<T>
public "getInstanceId"(t0: T): long
public "getMotionAnimThreshold"(t0: T): float
public "getName"(): string
public "getPackedOverlay"(t0: T, float1: float, float2: float): integer
/** @deprecated */
public "getPackedOverlay"(t0: T, float1: float): integer
public "getRenderColor"(t0: T, float1: float, int2: integer): $Color
public "getRenderLayers"(): $List<$GeoRenderLayer<T>>
public "getRenderType"(t0: T, resourceLocation1: $ResourceLocation$$Type, multiBufferSource2: $MultiBufferSource$$Type, float3: float): $RenderType
public "getTextureLocation"(t0: T): $ResourceLocation
public "postRender"(poseStack0: $PoseStack$$Type, t1: T, bakedGeoModel2: $BakedGeoModel$$Type, multiBufferSource3: $MultiBufferSource$$Type, vertexConsumer4: $VertexConsumer$$Type, boolean5: boolean, float6: float, int7: integer, int8: integer, float9: float, float10: float, float11: float, float12: float): void
public "preApplyRenderLayers"(poseStack0: $PoseStack$$Type, t1: T, bakedGeoModel2: $BakedGeoModel$$Type, renderType3: $RenderType$$Type, multiBufferSource4: $MultiBufferSource$$Type, vertexConsumer5: $VertexConsumer$$Type, float6: float, int7: integer, int8: integer): void
public "preRender"(poseStack0: $PoseStack$$Type, t1: T, bakedGeoModel2: $BakedGeoModel$$Type, multiBufferSource3: $MultiBufferSource$$Type, vertexConsumer4: $VertexConsumer$$Type, boolean5: boolean, float6: float, int7: integer, int8: integer, float9: float, float10: float, float11: float, float12: float): void
public "reRender"(bakedGeoModel0: $BakedGeoModel$$Type, poseStack1: $PoseStack$$Type, multiBufferSource2: $MultiBufferSource$$Type, t3: T, renderType4: $RenderType$$Type, vertexConsumer5: $VertexConsumer$$Type, float6: float, int7: integer, int8: integer, float9: float, float10: float, float11: float, float12: float): void
public "reload"(preparationBarrier0: $PreparableReloadListener$PreparationBarrier$$Type, resourceManager1: $ResourceManager$$Type, profilerFiller2: $ProfilerFiller$$Type, profilerFiller3: $ProfilerFiller$$Type, executor4: $Executor$$Type, executor5: $Executor$$Type): $CompletableFuture<void>
public "renderChildBones"(poseStack0: $PoseStack$$Type, t1: T, geoBone2: $GeoBone$$Type, renderType3: $RenderType$$Type, multiBufferSource4: $MultiBufferSource$$Type, vertexConsumer5: $VertexConsumer$$Type, boolean6: boolean, float7: float, int8: integer, int9: integer, float10: float, float11: float, float12: float, float13: float): void
public "renderCube"(poseStack0: $PoseStack$$Type, geoCube1: $GeoCube$$Type, vertexConsumer2: $VertexConsumer$$Type, int3: integer, int4: integer, float5: float, float6: float, float7: float, float8: float): void
public "renderCubesOfBone"(poseStack0: $PoseStack$$Type, geoBone1: $GeoBone$$Type, vertexConsumer2: $VertexConsumer$$Type, int3: integer, int4: integer, float5: float, float6: float, float7: float, float8: float): void
public "renderFinal"(poseStack0: $PoseStack$$Type, t1: T, bakedGeoModel2: $BakedGeoModel$$Type, multiBufferSource3: $MultiBufferSource$$Type, vertexConsumer4: $VertexConsumer$$Type, float5: float, int6: integer, int7: integer, float8: float, float9: float, float10: float, float11: float): void
public "renderRecursively"(poseStack0: $PoseStack$$Type, t1: T, geoBone2: $GeoBone$$Type, renderType3: $RenderType$$Type, multiBufferSource4: $MultiBufferSource$$Type, vertexConsumer5: $VertexConsumer$$Type, boolean6: boolean, float7: float, int8: integer, int9: integer, float10: float, float11: float, float12: float, float13: float): void
public "scaleModelForRender"(float0: float, float1: float, poseStack2: $PoseStack$$Type, t3: T, bakedGeoModel4: $BakedGeoModel$$Type, boolean5: boolean, float6: float, int7: integer, int8: integer): void
public "setupLightingForGuiRender"(): void
public "updateAnimatedTextureFrame"(t0: T): void
public "useAlternateGuiLighting"(): $GeoItemRenderer<T>
public "withScale"(float0: float, float1: float): $GeoItemRenderer<T>
public "withScale"(float0: float): $GeoItemRenderer<T>
get "animatable"(): T
get "currentItemStack"(): $ItemStack
get "geoModel"(): $GeoModel<T>
get "name"(): string
get "renderLayers"(): $List<$GeoRenderLayer<T>>
}
}

declare module "software.bernie.geckolib.core.animatable.model.CoreGeoBone" {
import { $List } from "java.util.List"
import { $BoneSnapshot } from "software.bernie.geckolib.core.state.BoneSnapshot"

export interface $CoreGeoBone {
"getChildBones"(): $List<$CoreGeoBone>
"getInitialSnapshot"(): $BoneSnapshot
"getName"(): string
"getParent"(): $CoreGeoBone
"getPivotX"(): float
"getPivotY"(): float
"getPivotZ"(): float
"getPosX"(): float
"getPosY"(): float
"getPosZ"(): float
"getRotX"(): float
"getRotY"(): float
"getRotZ"(): float
"getScaleX"(): float
"getScaleY"(): float
"getScaleZ"(): float
"hasPositionChanged"(): boolean
"hasRotationChanged"(): boolean
"hasScaleChanged"(): boolean
"isHidden"(): boolean
"isHidingChildren"(): boolean
"markPositionAsChanged"(): void
"markRotationAsChanged"(): void
"markScaleAsChanged"(): void
"resetStateChanges"(): void
"saveInitialSnapshot"(): void
"saveSnapshot"(): $BoneSnapshot
"setChildrenHidden"(boolean0: boolean): void
"setHidden"(boolean0: boolean): void
"setPivotX"(float0: float): void
"setPivotY"(float0: float): void
"setPivotZ"(float0: float): void
"setPosX"(float0: float): void
"setPosY"(float0: float): void
"setPosZ"(float0: float): void
"setRotX"(float0: float): void
"setRotY"(float0: float): void
"setRotZ"(float0: float): void
"setScaleX"(float0: float): void
"setScaleY"(float0: float): void
"setScaleZ"(float0: float): void
"updatePivot"(float0: float, float1: float, float2: float): void
"updatePosition"(float0: float, float1: float, float2: float): void
"updateRotation"(float0: float, float1: float, float2: float): void
"updateScale"(float0: float, float1: float, float2: float): void
get "childBones"(): $List<$CoreGeoBone>
get "initialSnapshot"(): $BoneSnapshot
get "name"(): string
get "parent"(): $CoreGeoBone
get "pivotX"(): float
get "pivotY"(): float
get "pivotZ"(): float
get "posX"(): float
get "posY"(): float
get "posZ"(): float
get "rotX"(): float
get "rotY"(): float
get "rotZ"(): float
get "scaleX"(): float
get "scaleY"(): float
get "scaleZ"(): float
get "hidden"(): boolean
get "hidingChildren"(): boolean
set "childrenHidden"(value: boolean)
set "hidden"(value: boolean)
set "pivotX"(value: float)
set "pivotY"(value: float)
set "pivotZ"(value: float)
set "posX"(value: float)
set "posY"(value: float)
set "posZ"(value: float)
set "rotX"(value: float)
set "rotY"(value: float)
set "rotZ"(value: float)
set "scaleX"(value: float)
set "scaleY"(value: float)
set "scaleZ"(value: float)
}

export namespace $CoreGeoBone {
const probejs$$marker: never
}
export abstract class $CoreGeoBone$$Static implements $CoreGeoBone {
}
}

declare module "software.bernie.geckolib.core.keyframe.event.CustomInstructionKeyframeEvent" {
import { $AnimationController$$Type } from "software.bernie.geckolib.core.animation.AnimationController"
import { $CustomInstructionKeyframeData, $CustomInstructionKeyframeData$$Type } from "software.bernie.geckolib.core.keyframe.event.data.CustomInstructionKeyframeData"
import { $GeoAnimatable, $GeoAnimatable$$Type } from "software.bernie.geckolib.core.animatable.GeoAnimatable"
import { $KeyFrameEvent } from "software.bernie.geckolib.core.keyframe.event.KeyFrameEvent"

export class $CustomInstructionKeyframeEvent<T extends $GeoAnimatable = $GeoAnimatable> extends $KeyFrameEvent<T, $CustomInstructionKeyframeData> {
constructor(t0: T, double1: double, animationController2: $AnimationController$$Type<T>, customInstructionKeyframeData3: $CustomInstructionKeyframeData$$Type)

public "getKeyframeData"(): $CustomInstructionKeyframeData
get "keyframeData"(): $CustomInstructionKeyframeData
}
}

declare module "software.bernie.geckolib.event.GeoRenderEvent$Armor" {
import { $GeoArmorRenderer$$Type } from "software.bernie.geckolib.renderer.GeoArmorRenderer"
import { $GeoRenderEvent } from "software.bernie.geckolib.event.GeoRenderEvent"
import { $Entity } from "net.minecraft.world.entity.Entity"
import { $EquipmentSlot } from "net.minecraft.world.entity.EquipmentSlot"
import { $Event } from "net.minecraftforge.eventbus.api.Event"
import { $ItemStack } from "net.minecraft.world.item.ItemStack"

export class $GeoRenderEvent$Armor extends $Event implements $GeoRenderEvent {
constructor(geoArmorRenderer0: $GeoArmorRenderer$$Type<any>)
constructor()

public "getEntity"(): $Entity
public "getEquipmentSlot"(): $EquipmentSlot
public "getItemStack"(): $ItemStack
get "entity"(): $Entity
get "equipmentSlot"(): $EquipmentSlot
get "itemStack"(): $ItemStack
}
}

declare module "software.bernie.geckolib.core.animation.AnimatableManager" {
import { $BoneSnapshot } from "software.bernie.geckolib.core.state.BoneSnapshot"
import { $AnimationController, $AnimationController$$Type } from "software.bernie.geckolib.core.animation.AnimationController"
import { $Map } from "java.util.Map"
import { $GeoAnimatable, $GeoAnimatable$$Type } from "software.bernie.geckolib.core.animatable.GeoAnimatable"
import { $DataTicket$$Type } from "software.bernie.geckolib.core.object.DataTicket"

export class $AnimatableManager<T extends $GeoAnimatable = $GeoAnimatable> {
constructor(geoAnimatable0: $GeoAnimatable$$Type)

public "addController"(animationController0: $AnimationController$$Type): void
public "clearSnapshotCache"(): void
public "getAnimationControllers"(): $Map<string, $AnimationController<T>>
public "getBoneSnapshotCollection"(): $Map<string, $BoneSnapshot>
public "getData"<D>(dataTicket0: $DataTicket$$Type<D>): D
public "getFirstTickTime"(): double
public "getLastUpdateTime"(): double
public "isFirstTick"(): boolean
public "removeController"(string0: string): void
public "setData"<D>(dataTicket0: $DataTicket$$Type<D>, d1: D): void
public "startedAt"(double0: double): void
public "stopTriggeredAnimation"(string0: string): void
public "stopTriggeredAnimation"(string0: string, string1: string): void
public "tryTriggerAnimation"(string0: string): void
public "tryTriggerAnimation"(string0: string, string1: string): void
public "updatedAt"(double0: double): void
get "animationControllers"(): $Map<string, $AnimationController<T>>
get "boneSnapshotCollection"(): $Map<string, $BoneSnapshot>
get "firstTickTime"(): double
get "lastUpdateTime"(): double
get "firstTick"(): boolean
}
}

declare module "software.bernie.geckolib.cache.object.GeoVertex" {
import { $Vector3f, $Vector3f$$Type } from "org.joml.Vector3f"
import { $Record } from "java.lang.Record"

export class $GeoVertex extends $Record {
constructor(double0: double, double1: double, double2: double)
constructor(position: $Vector3f$$Type, texU: float, texV: float)

public "position"(): $Vector3f
public "texU"(): float
public "texV"(): float
public "withUVs"(float0: float, float1: float): $GeoVertex
}
}

declare module "software.bernie.geckolib.core.animation.RawAnimation$Stage" {
import { $Record } from "java.lang.Record"
import { $Animation$LoopType, $Animation$LoopType$$Type } from "software.bernie.geckolib.core.animation.Animation$LoopType"

export class $RawAnimation$Stage extends $Record {
constructor(string0: string, loopType1: $Animation$LoopType$$Type)
constructor(animationName: string, loopType: $Animation$LoopType$$Type, additionalTicks: integer)

public "additionalTicks"(): integer
public "animationName"(): string
public "loopType"(): $Animation$LoopType
}
}

declare module "software.bernie.geckolib.core.keyframe.event.KeyFrameEvent" {
import { $AnimationController, $AnimationController$$Type } from "software.bernie.geckolib.core.animation.AnimationController"
import { $KeyFrameData, $KeyFrameData$$Type } from "software.bernie.geckolib.core.keyframe.event.data.KeyFrameData"
import { $GeoAnimatable, $GeoAnimatable$$Type } from "software.bernie.geckolib.core.animatable.GeoAnimatable"

export class $KeyFrameEvent<T extends $GeoAnimatable = $GeoAnimatable, E extends $KeyFrameData = $KeyFrameData> {
constructor(t0: T, double1: double, animationController2: $AnimationController$$Type<T>, e3: E)

public "getAnimatable"(): T
public "getAnimationTick"(): double
public "getController"(): $AnimationController<T>
public "getKeyframeData"(): E
get "animatable"(): T
get "animationTick"(): double
get "controller"(): $AnimationController<T>
get "keyframeData"(): E
}
}

declare module "software.bernie.geckolib.event.GeoRenderEvent$Armor$Pre" {
import { $GeoArmorRenderer$$Type } from "software.bernie.geckolib.renderer.GeoArmorRenderer"
import { $BakedGeoModel, $BakedGeoModel$$Type } from "software.bernie.geckolib.cache.object.BakedGeoModel"
import { $MultiBufferSource, $MultiBufferSource$$Type } from "net.minecraft.client.renderer.MultiBufferSource"
import { $GeoRenderEvent$Armor } from "software.bernie.geckolib.event.GeoRenderEvent$Armor"
import { $PoseStack, $PoseStack$$Type } from "com.mojang.blaze3d.vertex.PoseStack"

export class $GeoRenderEvent$Armor$Pre extends $GeoRenderEvent$Armor {
constructor(geoArmorRenderer0: $GeoArmorRenderer$$Type<any>, poseStack1: $PoseStack$$Type, bakedGeoModel2: $BakedGeoModel$$Type, multiBufferSource3: $MultiBufferSource$$Type, float4: float, int5: integer)
constructor()

public "getBufferSource"(): $MultiBufferSource
public "getModel"(): $BakedGeoModel
public "getPackedLight"(): integer
public "getPartialTick"(): float
public "getPoseStack"(): $PoseStack
get "bufferSource"(): $MultiBufferSource
get "model"(): $BakedGeoModel
get "packedLight"(): integer
get "partialTick"(): float
get "poseStack"(): $PoseStack
}
}

declare module "software.bernie.geckolib.core.object.Color" {
import { $Record } from "java.lang.Record"

export class $Color extends $Record {
static readonly "BLACK": $Color
static readonly "BLUE": $Color
static readonly "CYAN": $Color
static readonly "DARK_GRAY": $Color
static readonly "GRAY": $Color
static readonly "GREEN": $Color
static readonly "LIGHT_GRAY": $Color
static readonly "MAGENTA": $Color
static readonly "ORANGE": $Color
static readonly "PINK": $Color
static readonly "RED": $Color
static readonly "WHITE": $Color
static readonly "YELLOW": $Color

constructor(argbInt: integer)

public static "HSBtoARGB"(float0: float, float1: float, float2: float): integer
public "argbInt"(): integer
public "brighter"(double0: double): $Color
public "darker"(float0: float): $Color
public "getAlpha"(): integer
public "getAlphaFloat"(): float
public "getBlue"(): integer
public "getBlueFloat"(): float
public "getColor"(): integer
public "getGreen"(): integer
public "getGreenFloat"(): float
public "getRed"(): integer
public "getRedFloat"(): float
public static "ofHSB"(float0: float, float1: float, float2: float): $Color
public static "ofOpaque"(int0: integer): $Color
public static "ofRGB"(int0: integer, int1: integer, int2: integer): $Color
public static "ofRGB"(float0: float, float1: float, float2: float): $Color
public static "ofRGBA"(float0: float, float1: float, float2: float, float3: float): $Color
public static "ofRGBA"(int0: integer, int1: integer, int2: integer, int3: integer): $Color
get "alpha"(): integer
get "alphaFloat"(): float
get "blue"(): integer
get "blueFloat"(): float
get "color"(): integer
get "green"(): integer
get "greenFloat"(): float
get "red"(): integer
get "redFloat"(): float
}
}

declare module "software.bernie.geckolib.core.animation.Animation$Keyframes" {
import { $SoundKeyframeData, $SoundKeyframeData$$Type } from "software.bernie.geckolib.core.keyframe.event.data.SoundKeyframeData"
import { $CustomInstructionKeyframeData, $CustomInstructionKeyframeData$$Type } from "software.bernie.geckolib.core.keyframe.event.data.CustomInstructionKeyframeData"
import { $Record } from "java.lang.Record"
import { $ParticleKeyframeData, $ParticleKeyframeData$$Type } from "software.bernie.geckolib.core.keyframe.event.data.ParticleKeyframeData"

export class $Animation$Keyframes extends $Record {
constructor(sounds: $SoundKeyframeData$$Type[], particles: $ParticleKeyframeData$$Type[], customInstructions: $CustomInstructionKeyframeData$$Type[])

public "customInstructions"(): $CustomInstructionKeyframeData[]
public "particles"(): $ParticleKeyframeData[]
public "sounds"(): $SoundKeyframeData[]
}
}

declare module "software.bernie.geckolib.animatable.GeoItem" {
import { $PacketDistributor$PacketTarget$$Type } from "net.minecraftforge.network.PacketDistributor$PacketTarget"
import { $Entity$$Type } from "net.minecraft.world.entity.Entity"
import { $SingletonGeoAnimatable } from "software.bernie.geckolib.animatable.SingletonGeoAnimatable"
import { $AnimatableManager$ControllerRegistrar$$Type } from "software.bernie.geckolib.core.animation.AnimatableManager$ControllerRegistrar"
import { $AnimatableInstanceCache } from "software.bernie.geckolib.core.animatable.instance.AnimatableInstanceCache"
import { $SerializableDataTicket$$Type } from "software.bernie.geckolib.network.SerializableDataTicket"
import { $ItemStack$$Type } from "net.minecraft.world.item.ItemStack"
import { $GeoAnimatable$$Type } from "software.bernie.geckolib.core.animatable.GeoAnimatable"
import { $ServerLevel$$Type } from "net.minecraft.server.level.ServerLevel"

export interface $GeoItem extends $SingletonGeoAnimatable {
"animatableCacheOverride"(): $AnimatableInstanceCache
"getAnimData"<D>(long0: long, serializableDataTicket1: $SerializableDataTicket$$Type<D>): D
"getAnimatableInstanceCache"(): $AnimatableInstanceCache
"getBoneResetTime"(): double
"getTick"(object0: any): double
"isPerspectiveAware"(): boolean
"registerControllers"(controllerRegistrar0: $AnimatableManager$ControllerRegistrar$$Type): void
"setAnimData"<D>(entity0: $Entity$$Type, long1: long, serializableDataTicket2: $SerializableDataTicket$$Type<D>, d3: D): void
"shouldPlayAnimsWhileGamePaused"(): boolean
"stopTriggeredAnim"(entity0: $Entity$$Type, long1: long, string2: string, string3: string, packetTarget4: $PacketDistributor$PacketTarget$$Type): void
"stopTriggeredAnim"(entity0: $Entity$$Type, long1: long, string2: string, string3: string): void
"stopTriggeredArmorAnim"(entity0: $Entity$$Type, long1: long, string2: string, string3: string): void
"syncAnimData"<D>(long0: long, serializableDataTicket1: $SerializableDataTicket$$Type<D>, d2: D, packetTarget3: $PacketDistributor$PacketTarget$$Type): void
"triggerAnim"<D>(entity0: $Entity$$Type, long1: long, string2: string, string3: string): void
"triggerAnim"<D>(long0: long, string1: string, string2: string, packetTarget3: $PacketDistributor$PacketTarget$$Type): void
"triggerArmorAnim"(entity0: $Entity$$Type, long1: long, string2: string, string3: string): void
get "animatableInstanceCache"(): $AnimatableInstanceCache
get "boneResetTime"(): double
get "perspectiveAware"(): boolean
}

export namespace $GeoItem {
const ID_NBT_KEY: string
function getId(itemStack0: $ItemStack$$Type): long
function getOrAssignId(itemStack0: $ItemStack$$Type, serverLevel1: $ServerLevel$$Type): long
function registerSyncedAnimatable(geoAnimatable0: $GeoAnimatable$$Type): void
}
export abstract class $GeoItem$$Static implements $GeoItem {
static readonly "ID_NBT_KEY": string

static "getId"(itemStack0: $ItemStack$$Type): long
static "getOrAssignId"(itemStack0: $ItemStack$$Type, serverLevel1: $ServerLevel$$Type): long
static "registerSyncedAnimatable"(geoAnimatable0: $GeoAnimatable$$Type): void
}
}

declare module "software.bernie.geckolib.core.animation.AnimationController" {
import { $AnimationProcessor$QueuedAnimation } from "software.bernie.geckolib.core.animation.AnimationProcessor$QueuedAnimation"
import { $BoneAnimationQueue } from "software.bernie.geckolib.core.keyframe.BoneAnimationQueue"
import { $CoreGeoBone$$Type } from "software.bernie.geckolib.core.animatable.model.CoreGeoBone"
import { $RawAnimation, $RawAnimation$$Type } from "software.bernie.geckolib.core.animation.RawAnimation"
import { $EasingType, $EasingType$$Type } from "software.bernie.geckolib.core.animation.EasingType"
import { $AnimationController$ParticleKeyframeHandler$$Type } from "software.bernie.geckolib.core.animation.AnimationController$ParticleKeyframeHandler"
import { $AnimationState$$Type } from "software.bernie.geckolib.core.animation.AnimationState"
import { $AnimationController$SoundKeyframeHandler$$Type } from "software.bernie.geckolib.core.animation.AnimationController$SoundKeyframeHandler"
import { $AnimationController$AnimationStateHandler, $AnimationController$AnimationStateHandler$$Type } from "software.bernie.geckolib.core.animation.AnimationController$AnimationStateHandler"
import { $Function$$Type } from "java.util.function.Function"
import { $AnimationController$CustomKeyframeHandler$$Type } from "software.bernie.geckolib.core.animation.AnimationController$CustomKeyframeHandler"
import { $BoneSnapshot$$Type } from "software.bernie.geckolib.core.state.BoneSnapshot"
import { $Map, $Map$$Type } from "java.util.Map"
import { $GeoAnimatable, $GeoAnimatable$$Type } from "software.bernie.geckolib.core.animatable.GeoAnimatable"
import { $CoreGeoModel$$Type } from "software.bernie.geckolib.core.animatable.model.CoreGeoModel"
import { $AnimationController$State } from "software.bernie.geckolib.core.animation.AnimationController$State"

export class $AnimationController<T extends $GeoAnimatable = $GeoAnimatable> {
constructor(t0: T, animationStateHandler1: $AnimationController$AnimationStateHandler$$Type<T>)
constructor(t0: T, string1: string, animationStateHandler2: $AnimationController$AnimationStateHandler$$Type<T>)
constructor(t0: T, int1: integer, animationStateHandler2: $AnimationController$AnimationStateHandler$$Type<T>)
constructor(t0: T, string1: string, int2: integer, animationStateHandler3: $AnimationController$AnimationStateHandler$$Type<T>)

public "forceAnimationReset"(): void
public "getAnimationSpeed"(): double
public "getAnimationState"(): $AnimationController$State
public "getBoneAnimationQueues"(): $Map<string, $BoneAnimationQueue>
public "getCurrentAnimation"(): $AnimationProcessor$QueuedAnimation
public "getCurrentRawAnimation"(): $RawAnimation
public "getName"(): string
public "getStateHandler"(): $AnimationController$AnimationStateHandler<T>
public "getTriggeredAnimation"(): $RawAnimation
public "hasAnimationFinished"(): boolean
public "isPlayingTriggeredAnimation"(): boolean
public "process"(coreGeoModel0: $CoreGeoModel$$Type<T>, animationState1: $AnimationState$$Type<T>, map2: $Map$$Type<string, $CoreGeoBone$$Type>, map3: $Map$$Type<string, $BoneSnapshot$$Type>, double4: double, boolean5: boolean): void
public "receiveTriggeredAnimations"(): $AnimationController<T>
public "setAnimation"(rawAnimation0: $RawAnimation$$Type): void
public "setAnimationSpeed"(double0: double): $AnimationController<T>
public "setAnimationSpeedHandler"(function0: $Function$$Type<T, double>): $AnimationController<T>
public "setCustomInstructionKeyframeHandler"(customKeyframeHandler0: $AnimationController$CustomKeyframeHandler$$Type<T>): $AnimationController<T>
public "setOverrideEasingType"(easingType0: $EasingType$$Type): $AnimationController<T>
public "setOverrideEasingTypeFunction"(function0: $Function$$Type<T, $EasingType>): $AnimationController<T>
public "setParticleKeyframeHandler"(particleKeyframeHandler0: $AnimationController$ParticleKeyframeHandler$$Type<T>): $AnimationController<T>
public "setSoundKeyframeHandler"(soundKeyframeHandler0: $AnimationController$SoundKeyframeHandler$$Type<T>): $AnimationController<T>
/** @deprecated */
public "setTransitionLength"(int0: integer): void
public "stop"(): void
public "transitionLength"(int0: integer): $AnimationController<T>
public "triggerableAnim"(string0: string, rawAnimation1: $RawAnimation$$Type): $AnimationController<T>
public "tryTriggerAnimation"(string0: string): boolean
get "animationSpeed"(): double
get "animationState"(): $AnimationController$State
get "boneAnimationQueues"(): $Map<string, $BoneAnimationQueue>
get "currentAnimation"(): $AnimationProcessor$QueuedAnimation
get "currentRawAnimation"(): $RawAnimation
get "name"(): string
get "stateHandler"(): $AnimationController$AnimationStateHandler<T>
get "triggeredAnimation"(): $RawAnimation
get "playingTriggeredAnimation"(): boolean
set "animation"(value: $RawAnimation$$Type)
set "animationSpeed"(value: double)
set "animationSpeedHandler"(value: $Function$$Type<T, double>)
set "customInstructionKeyframeHandler"(value: $AnimationController$CustomKeyframeHandler$$Type<T>)
set "overrideEasingType"(value: $EasingType$$Type)
set "overrideEasingTypeFunction"(value: $Function$$Type<T, $EasingType>)
set "particleKeyframeHandler"(value: $AnimationController$ParticleKeyframeHandler$$Type<T>)
set "soundKeyframeHandler"(value: $AnimationController$SoundKeyframeHandler$$Type<T>)
}
}

declare module "software.bernie.geckolib.loading.json.raw.FaceUV$Rotation" {
import { $Enum } from "java.lang.Enum"

export class $FaceUV$Rotation extends $Enum<$FaceUV$Rotation> {
static readonly "CLOCKWISE_180": $FaceUV$Rotation
static readonly "CLOCKWISE_270": $FaceUV$Rotation
static readonly "CLOCKWISE_90": $FaceUV$Rotation
static readonly "NONE": $FaceUV$Rotation

public static "fromValue"(int0: integer): $FaceUV$Rotation
public "rotateUvs"(float0: float, float1: float, float2: float, float3: float): float[]
public static "valueOf"(string0: string): $FaceUV$Rotation
public static "values"(): $FaceUV$Rotation[]
}
}

declare module "software.bernie.geckolib.renderer.GeoBlockRenderer" {
import { $ResourceLocation, $ResourceLocation$$Type } from "net.minecraft.resources.ResourceLocation"
import { $GeoBone$$Type } from "software.bernie.geckolib.cache.object.GeoBone"
import { $GeoRenderer } from "software.bernie.geckolib.renderer.GeoRenderer"
import { $RenderType, $RenderType$$Type } from "net.minecraft.client.renderer.RenderType"
import { $GeoModel, $GeoModel$$Type } from "software.bernie.geckolib.model.GeoModel"
import { $BlockEntity, $BlockEntity$$Type } from "net.minecraft.world.level.block.entity.BlockEntity"
import { $BlockEntityRenderer } from "net.minecraft.client.renderer.blockentity.BlockEntityRenderer"
import { $PoseStack$$Type } from "com.mojang.blaze3d.vertex.PoseStack"
import { $Color } from "software.bernie.geckolib.core.object.Color"
import { $GeoRenderLayer, $GeoRenderLayer$$Type } from "software.bernie.geckolib.renderer.layer.GeoRenderLayer"
import { $List } from "java.util.List"
import { $GeoCube$$Type } from "software.bernie.geckolib.cache.object.GeoCube"
import { $BlockEntityType$$Type } from "net.minecraft.world.level.block.entity.BlockEntityType"
import { $Vec3$$Type } from "net.minecraft.world.phys.Vec3"
import { $Vector3f$$Type } from "org.joml.Vector3f"
import { $BakedGeoModel$$Type } from "software.bernie.geckolib.cache.object.BakedGeoModel"
import { $GeoAnimatable, $GeoAnimatable$$Type } from "software.bernie.geckolib.core.animatable.GeoAnimatable"
import { $GeoQuad$$Type } from "software.bernie.geckolib.cache.object.GeoQuad"
import { $Matrix4f$$Type } from "org.joml.Matrix4f"
import { $MultiBufferSource$$Type } from "net.minecraft.client.renderer.MultiBufferSource"
import { $VertexConsumer$$Type } from "com.mojang.blaze3d.vertex.VertexConsumer"

export class $GeoBlockRenderer<T extends ($BlockEntity & $GeoAnimatable) = ($BlockEntity & $GeoAnimatable)> implements $GeoRenderer<T>, $BlockEntityRenderer<T> {
constructor(blockEntityType0: $BlockEntityType$$Type<T>)
constructor(geoModel0: $GeoModel$$Type<T>)

public "actuallyRender"(poseStack0: $PoseStack$$Type, t1: T, bakedGeoModel2: $BakedGeoModel$$Type, renderType3: $RenderType$$Type, multiBufferSource4: $MultiBufferSource$$Type, vertexConsumer5: $VertexConsumer$$Type, boolean6: boolean, float7: float, int8: integer, int9: integer, float10: float, float11: float, float12: float, float13: float): void
public "addRenderLayer"(geoRenderLayer0: $GeoRenderLayer$$Type<T>): $GeoBlockRenderer<T>
public "applyRenderLayers"(poseStack0: $PoseStack$$Type, t1: T, bakedGeoModel2: $BakedGeoModel$$Type, renderType3: $RenderType$$Type, multiBufferSource4: $MultiBufferSource$$Type, vertexConsumer5: $VertexConsumer$$Type, float6: float, int7: integer, int8: integer): void
public "applyRenderLayersForBone"(poseStack0: $PoseStack$$Type, t1: T, geoBone2: $GeoBone$$Type, renderType3: $RenderType$$Type, multiBufferSource4: $MultiBufferSource$$Type, vertexConsumer5: $VertexConsumer$$Type, float6: float, int7: integer, int8: integer): void
public "createVerticesOfQuad"(geoQuad0: $GeoQuad$$Type, matrix4f1: $Matrix4f$$Type, vector3f2: $Vector3f$$Type, vertexConsumer3: $VertexConsumer$$Type, int4: integer, int5: integer, float6: float, float7: float, float8: float, float9: float): void
public "defaultRender"(poseStack0: $PoseStack$$Type, t1: T, multiBufferSource2: $MultiBufferSource$$Type, renderType3: $RenderType$$Type, vertexConsumer4: $VertexConsumer$$Type, float5: float, float6: float, int7: integer): void
public "doPostRenderCleanup"(): void
public "fireCompileRenderLayersEvent"(): void
public "firePostRenderEvent"(poseStack0: $PoseStack$$Type, bakedGeoModel1: $BakedGeoModel$$Type, multiBufferSource2: $MultiBufferSource$$Type, float3: float, int4: integer): void
public "firePreRenderEvent"(poseStack0: $PoseStack$$Type, bakedGeoModel1: $BakedGeoModel$$Type, multiBufferSource2: $MultiBufferSource$$Type, float3: float, int4: integer): boolean
public "getAnimatable"(): T
public "getGeoModel"(): $GeoModel<T>
public "getInstanceId"(t0: T): long
public "getMotionAnimThreshold"(t0: T): float
public "getPackedOverlay"(t0: T, float1: float, float2: float): integer
/** @deprecated */
public "getPackedOverlay"(t0: T, float1: float): integer
public "getRenderColor"(t0: T, float1: float, int2: integer): $Color
public "getRenderLayers"(): $List<$GeoRenderLayer<T>>
public "getRenderType"(t0: T, resourceLocation1: $ResourceLocation$$Type, multiBufferSource2: $MultiBufferSource$$Type, float3: float): $RenderType
public "getTextureLocation"(t0: T): $ResourceLocation
public "getViewDistance"(): integer
public "postRender"(poseStack0: $PoseStack$$Type, t1: T, bakedGeoModel2: $BakedGeoModel$$Type, multiBufferSource3: $MultiBufferSource$$Type, vertexConsumer4: $VertexConsumer$$Type, boolean5: boolean, float6: float, int7: integer, int8: integer, float9: float, float10: float, float11: float, float12: float): void
public "preApplyRenderLayers"(poseStack0: $PoseStack$$Type, t1: T, bakedGeoModel2: $BakedGeoModel$$Type, renderType3: $RenderType$$Type, multiBufferSource4: $MultiBufferSource$$Type, vertexConsumer5: $VertexConsumer$$Type, float6: float, int7: integer, int8: integer): void
public "preRender"(poseStack0: $PoseStack$$Type, t1: T, bakedGeoModel2: $BakedGeoModel$$Type, multiBufferSource3: $MultiBufferSource$$Type, vertexConsumer4: $VertexConsumer$$Type, boolean5: boolean, float6: float, int7: integer, int8: integer, float9: float, float10: float, float11: float, float12: float): void
public "reRender"(bakedGeoModel0: $BakedGeoModel$$Type, poseStack1: $PoseStack$$Type, multiBufferSource2: $MultiBufferSource$$Type, t3: T, renderType4: $RenderType$$Type, vertexConsumer5: $VertexConsumer$$Type, float6: float, int7: integer, int8: integer, float9: float, float10: float, float11: float, float12: float): void
public "render"(blockEntity0: $BlockEntity$$Type, float1: float, poseStack2: $PoseStack$$Type, multiBufferSource3: $MultiBufferSource$$Type, int4: integer, int5: integer): void
public "renderChildBones"(poseStack0: $PoseStack$$Type, t1: T, geoBone2: $GeoBone$$Type, renderType3: $RenderType$$Type, multiBufferSource4: $MultiBufferSource$$Type, vertexConsumer5: $VertexConsumer$$Type, boolean6: boolean, float7: float, int8: integer, int9: integer, float10: float, float11: float, float12: float, float13: float): void
public "renderCube"(poseStack0: $PoseStack$$Type, geoCube1: $GeoCube$$Type, vertexConsumer2: $VertexConsumer$$Type, int3: integer, int4: integer, float5: float, float6: float, float7: float, float8: float): void
public "renderCubesOfBone"(poseStack0: $PoseStack$$Type, geoBone1: $GeoBone$$Type, vertexConsumer2: $VertexConsumer$$Type, int3: integer, int4: integer, float5: float, float6: float, float7: float, float8: float): void
public "renderFinal"(poseStack0: $PoseStack$$Type, t1: T, bakedGeoModel2: $BakedGeoModel$$Type, multiBufferSource3: $MultiBufferSource$$Type, vertexConsumer4: $VertexConsumer$$Type, float5: float, int6: integer, int7: integer, float8: float, float9: float, float10: float, float11: float): void
public "renderRecursively"(poseStack0: $PoseStack$$Type, t1: T, geoBone2: $GeoBone$$Type, renderType3: $RenderType$$Type, multiBufferSource4: $MultiBufferSource$$Type, vertexConsumer5: $VertexConsumer$$Type, boolean6: boolean, float7: float, int8: integer, int9: integer, float10: float, float11: float, float12: float, float13: float): void
public "scaleModelForRender"(float0: float, float1: float, poseStack2: $PoseStack$$Type, t3: T, bakedGeoModel4: $BakedGeoModel$$Type, boolean5: boolean, float6: float, int7: integer, int8: integer): void
public "shouldRender"(t0: T, vec31: $Vec3$$Type): boolean
public "shouldRenderOffScreen"(t0: T): boolean
public "updateAnimatedTextureFrame"(t0: T): void
public "withScale"(float0: float): $GeoBlockRenderer<T>
public "withScale"(float0: float, float1: float): $GeoBlockRenderer<T>
get "animatable"(): T
get "geoModel"(): $GeoModel<T>
get "renderLayers"(): $List<$GeoRenderLayer<T>>
get "viewDistance"(): integer
}
}

declare module "software.bernie.geckolib.cache.object.GeoQuad" {
import { $GeoVertex, $GeoVertex$$Type } from "software.bernie.geckolib.cache.object.GeoVertex"
import { $Direction, $Direction$$Type } from "net.minecraft.core.Direction"
import { $Vector3f, $Vector3f$$Type } from "org.joml.Vector3f"
import { $FaceUV$Rotation$$Type } from "software.bernie.geckolib.loading.json.raw.FaceUV$Rotation"
import { $Record } from "java.lang.Record"

export class $GeoQuad extends $Record {
constructor(vertices: $GeoVertex$$Type[], normal: $Vector3f$$Type, direction: $Direction$$Type)

public static "build"(geoVertex0s: $GeoVertex$$Type[], double1s: double[], double2s: double[], rotation3: $FaceUV$Rotation$$Type, float4: float, float5: float, boolean6: boolean, direction7: $Direction$$Type): $GeoQuad
/** @deprecated */
public static "build"(geoVertex0s: $GeoVertex$$Type[], double1s: double[], double2s: double[], float3: float, float4: float, boolean5: boolean, direction6: $Direction$$Type): $GeoQuad
public static "build"(geoVertex0s: $GeoVertex$$Type[], float1: float, float2: float, float3: float, float4: float, rotation5: $FaceUV$Rotation$$Type, float6: float, float7: float, boolean8: boolean, direction9: $Direction$$Type): $GeoQuad
/** @deprecated */
public static "build"(geoVertex0s: $GeoVertex$$Type[], float1: float, float2: float, float3: float, float4: float, float5: float, float6: float, boolean7: boolean, direction8: $Direction$$Type): $GeoQuad
public "direction"(): $Direction
public "normal"(): $Vector3f
public "vertices"(): $GeoVertex[]
}
}

declare module "software.bernie.geckolib.event.GeoRenderEvent$Object$Post" {
import { $GeoRenderEvent$Object } from "software.bernie.geckolib.event.GeoRenderEvent$Object"
import { $BakedGeoModel, $BakedGeoModel$$Type } from "software.bernie.geckolib.cache.object.BakedGeoModel"
import { $GeoObjectRenderer$$Type } from "software.bernie.geckolib.renderer.GeoObjectRenderer"
import { $MultiBufferSource, $MultiBufferSource$$Type } from "net.minecraft.client.renderer.MultiBufferSource"
import { $PoseStack, $PoseStack$$Type } from "com.mojang.blaze3d.vertex.PoseStack"

export class $GeoRenderEvent$Object$Post extends $GeoRenderEvent$Object {
constructor(geoObjectRenderer0: $GeoObjectRenderer$$Type<any>, poseStack1: $PoseStack$$Type, bakedGeoModel2: $BakedGeoModel$$Type, multiBufferSource3: $MultiBufferSource$$Type, float4: float, int5: integer)
constructor()

public "getBufferSource"(): $MultiBufferSource
public "getModel"(): $BakedGeoModel
public "getPackedLight"(): integer
public "getPartialTick"(): float
public "getPoseStack"(): $PoseStack
get "bufferSource"(): $MultiBufferSource
get "model"(): $BakedGeoModel
get "packedLight"(): integer
get "partialTick"(): float
get "poseStack"(): $PoseStack
}
}

declare module "software.bernie.geckolib.core.animatable.instance.AnimatableInstanceCache" {
import { $GeoAnimatable, $GeoAnimatable$$Type } from "software.bernie.geckolib.core.animatable.GeoAnimatable"
import { $DataTicket$$Type } from "software.bernie.geckolib.core.object.DataTicket"
import { $AnimatableManager } from "software.bernie.geckolib.core.animation.AnimatableManager"

export class $AnimatableInstanceCache {
constructor(geoAnimatable0: $GeoAnimatable$$Type)

public "addDataPoint"<D>(long0: long, dataTicket1: $DataTicket$$Type<D>, d2: D): void
public "getDataPoint"<D>(long0: long, dataTicket1: $DataTicket$$Type<D>): D
public "getManagerForId"<T extends $GeoAnimatable>(long0: long): $AnimatableManager<T>
}
}

declare module "software.bernie.geckolib.event.GeoRenderEvent$Entity" {
import { $GeoRenderEvent } from "software.bernie.geckolib.event.GeoRenderEvent"
import { $Entity } from "net.minecraft.world.entity.Entity"
import { $Event } from "net.minecraftforge.eventbus.api.Event"
import { $GeoEntityRenderer, $GeoEntityRenderer$$Type } from "software.bernie.geckolib.renderer.GeoEntityRenderer"

export class $GeoRenderEvent$Entity extends $Event implements $GeoRenderEvent {
constructor(geoEntityRenderer0: $GeoEntityRenderer$$Type<any>)
constructor()

public "getEntity"(): $Entity
public "getRenderer"(): $GeoEntityRenderer<any>
get "entity"(): $Entity
get "renderer"(): $GeoEntityRenderer<any>
}
}

declare module "software.bernie.geckolib.animatable.SingletonGeoAnimatable" {
import { $PacketDistributor$PacketTarget$$Type } from "net.minecraftforge.network.PacketDistributor$PacketTarget"
import { $Entity$$Type } from "net.minecraft.world.entity.Entity"
import { $AnimatableManager$ControllerRegistrar$$Type } from "software.bernie.geckolib.core.animation.AnimatableManager$ControllerRegistrar"
import { $AnimatableInstanceCache } from "software.bernie.geckolib.core.animatable.instance.AnimatableInstanceCache"
import { $SerializableDataTicket$$Type } from "software.bernie.geckolib.network.SerializableDataTicket"
import { $GeoAnimatable, $GeoAnimatable$$Type } from "software.bernie.geckolib.core.animatable.GeoAnimatable"

export interface $SingletonGeoAnimatable extends $GeoAnimatable {
"animatableCacheOverride"(): $AnimatableInstanceCache
"getAnimData"<D>(long0: long, serializableDataTicket1: $SerializableDataTicket$$Type<D>): D
"getAnimatableInstanceCache"(): $AnimatableInstanceCache
"getBoneResetTime"(): double
"getTick"(object0: any): double
"registerControllers"(controllerRegistrar0: $AnimatableManager$ControllerRegistrar$$Type): void
"setAnimData"<D>(entity0: $Entity$$Type, long1: long, serializableDataTicket2: $SerializableDataTicket$$Type<D>, d3: D): void
"shouldPlayAnimsWhileGamePaused"(): boolean
"stopTriggeredAnim"(entity0: $Entity$$Type, long1: long, string2: string, string3: string, packetTarget4: $PacketDistributor$PacketTarget$$Type): void
"stopTriggeredAnim"(entity0: $Entity$$Type, long1: long, string2: string, string3: string): void
"stopTriggeredArmorAnim"(entity0: $Entity$$Type, long1: long, string2: string, string3: string): void
"syncAnimData"<D>(long0: long, serializableDataTicket1: $SerializableDataTicket$$Type<D>, d2: D, packetTarget3: $PacketDistributor$PacketTarget$$Type): void
"triggerAnim"<D>(entity0: $Entity$$Type, long1: long, string2: string, string3: string): void
"triggerAnim"<D>(long0: long, string1: string, string2: string, packetTarget3: $PacketDistributor$PacketTarget$$Type): void
"triggerArmorAnim"(entity0: $Entity$$Type, long1: long, string2: string, string3: string): void
get "animatableInstanceCache"(): $AnimatableInstanceCache
get "boneResetTime"(): double
}

export namespace $SingletonGeoAnimatable {
function registerSyncedAnimatable(geoAnimatable0: $GeoAnimatable$$Type): void
}
export abstract class $SingletonGeoAnimatable$$Static implements $SingletonGeoAnimatable {
static "registerSyncedAnimatable"(geoAnimatable0: $GeoAnimatable$$Type): void
}
}

declare module "software.bernie.geckolib.network.SerializableDataTicket" {
import { $ResourceLocation$$Type } from "net.minecraft.resources.ResourceLocation"
import { $Enum, $Enum$$Type } from "java.lang.Enum"
import { $Class$$Type } from "java.lang.Class"
import { $FriendlyByteBuf$$Type } from "net.minecraft.network.FriendlyByteBuf"
import { $DataTicket } from "software.bernie.geckolib.core.object.DataTicket"

export class $SerializableDataTicket<D = any> extends $DataTicket<D> {
constructor(string0: string, class1: $Class$$Type<D>)

public "decode"(friendlyByteBuf0: $FriendlyByteBuf$$Type): D
public "encode"(d0: D, friendlyByteBuf1: $FriendlyByteBuf$$Type): void
public static "ofBoolean"(resourceLocation0: $ResourceLocation$$Type): $SerializableDataTicket<boolean>
public static "ofDouble"(resourceLocation0: $ResourceLocation$$Type): $SerializableDataTicket<double>
public static "ofEnum"<E extends $Enum<E>>(resourceLocation0: $ResourceLocation$$Type, class1: $Class$$Type<E>): $SerializableDataTicket<E>
public static "ofFloat"(resourceLocation0: $ResourceLocation$$Type): $SerializableDataTicket<float>
public static "ofInt"(resourceLocation0: $ResourceLocation$$Type): $SerializableDataTicket<integer>
public static "ofString"(resourceLocation0: $ResourceLocation$$Type): $SerializableDataTicket<string>
}
}

declare module "software.bernie.geckolib.core.state.BoneSnapshot" {
import { $CoreGeoBone, $CoreGeoBone$$Type } from "software.bernie.geckolib.core.animatable.model.CoreGeoBone"

export class $BoneSnapshot {
constructor(coreGeoBone0: $CoreGeoBone$$Type)

public static "copy"(boneSnapshot0: $BoneSnapshot$$Type): $BoneSnapshot
public "getBone"(): $CoreGeoBone
public "getLastResetPositionTick"(): double
public "getLastResetRotationTick"(): double
public "getLastResetScaleTick"(): double
public "getOffsetX"(): float
public "getOffsetY"(): float
public "getOffsetZ"(): float
public "getRotX"(): float
public "getRotY"(): float
public "getRotZ"(): float
public "getScaleX"(): float
public "getScaleY"(): float
public "getScaleZ"(): float
public "isPosAnimInProgress"(): boolean
public "isRotAnimInProgress"(): boolean
public "isScaleAnimInProgress"(): boolean
public "startPosAnim"(): void
public "startRotAnim"(): void
public "startScaleAnim"(): void
public "stopPosAnim"(double0: double): void
public "stopRotAnim"(double0: double): void
public "stopScaleAnim"(double0: double): void
public "updateOffset"(float0: float, float1: float, float2: float): void
public "updateRotation"(float0: float, float1: float, float2: float): void
public "updateScale"(float0: float, float1: float, float2: float): void
get "bone"(): $CoreGeoBone
get "lastResetPositionTick"(): double
get "lastResetRotationTick"(): double
get "lastResetScaleTick"(): double
get "offsetX"(): float
get "offsetY"(): float
get "offsetZ"(): float
get "rotX"(): float
get "rotY"(): float
get "rotZ"(): float
get "scaleX"(): float
get "scaleY"(): float
get "scaleZ"(): float
get "posAnimInProgress"(): boolean
get "rotAnimInProgress"(): boolean
get "scaleAnimInProgress"(): boolean
}
}

declare module "software.bernie.geckolib.event.GeoRenderEvent$Entity$CompileRenderLayers" {
import { $GeoRenderLayer$$Type } from "software.bernie.geckolib.renderer.layer.GeoRenderLayer"
import { $GeoRenderEvent$Entity } from "software.bernie.geckolib.event.GeoRenderEvent$Entity"
import { $GeoEntityRenderer$$Type } from "software.bernie.geckolib.renderer.GeoEntityRenderer"

export class $GeoRenderEvent$Entity$CompileRenderLayers extends $GeoRenderEvent$Entity {
constructor(geoEntityRenderer0: $GeoEntityRenderer$$Type<any>)
constructor()

public "addLayer"(geoRenderLayer0: $GeoRenderLayer$$Type): void
}
}

declare module "software.bernie.geckolib.core.keyframe.event.data.SoundKeyframeData" {
import { $KeyFrameData } from "software.bernie.geckolib.core.keyframe.event.data.KeyFrameData"

export class $SoundKeyframeData extends $KeyFrameData {
constructor(double0: double, string1: string)

public "getSound"(): string
get "sound"(): string
}
}

declare module "software.bernie.geckolib.event.GeoRenderEvent$ReplacedEntity$Post" {
import { $GeoRenderEvent$ReplacedEntity } from "software.bernie.geckolib.event.GeoRenderEvent$ReplacedEntity"
import { $GeoReplacedEntityRenderer$$Type } from "software.bernie.geckolib.renderer.GeoReplacedEntityRenderer"
import { $BakedGeoModel, $BakedGeoModel$$Type } from "software.bernie.geckolib.cache.object.BakedGeoModel"
import { $MultiBufferSource, $MultiBufferSource$$Type } from "net.minecraft.client.renderer.MultiBufferSource"
import { $PoseStack, $PoseStack$$Type } from "com.mojang.blaze3d.vertex.PoseStack"

export class $GeoRenderEvent$ReplacedEntity$Post extends $GeoRenderEvent$ReplacedEntity {
constructor(geoReplacedEntityRenderer0: $GeoReplacedEntityRenderer$$Type<any, any>, poseStack1: $PoseStack$$Type, bakedGeoModel2: $BakedGeoModel$$Type, multiBufferSource3: $MultiBufferSource$$Type, float4: float, int5: integer)
constructor()

public "getBufferSource"(): $MultiBufferSource
public "getModel"(): $BakedGeoModel
public "getPackedLight"(): integer
public "getPartialTick"(): float
public "getPoseStack"(): $PoseStack
get "bufferSource"(): $MultiBufferSource
get "model"(): $BakedGeoModel
get "packedLight"(): integer
get "partialTick"(): float
get "poseStack"(): $PoseStack
}
}

declare module "software.bernie.geckolib.core.animation.Animation" {
import { $Animation$Keyframes, $Animation$Keyframes$$Type } from "software.bernie.geckolib.core.animation.Animation$Keyframes"
import { $BoneAnimation, $BoneAnimation$$Type } from "software.bernie.geckolib.core.keyframe.BoneAnimation"
import { $Record } from "java.lang.Record"
import { $Animation$LoopType, $Animation$LoopType$$Type } from "software.bernie.geckolib.core.animation.Animation$LoopType"

export class $Animation extends $Record {
constructor(name: string, length: double, loopType: $Animation$LoopType$$Type, boneAnimations: $BoneAnimation$$Type[], keyFrames: $Animation$Keyframes$$Type)

public "boneAnimations"(): $BoneAnimation[]
public "keyFrames"(): $Animation$Keyframes
public "length"(): double
public "loopType"(): $Animation$LoopType
public "name"(): string
}
}

declare module "software.bernie.geckolib.renderer.layer.GeoRenderLayer" {
import { $GeoBone$$Type } from "software.bernie.geckolib.cache.object.GeoBone"
import { $GeoRenderer, $GeoRenderer$$Type } from "software.bernie.geckolib.renderer.GeoRenderer"
import { $BakedGeoModel, $BakedGeoModel$$Type } from "software.bernie.geckolib.cache.object.BakedGeoModel"
import { $RenderType$$Type } from "net.minecraft.client.renderer.RenderType"
import { $GeoAnimatable, $GeoAnimatable$$Type } from "software.bernie.geckolib.core.animatable.GeoAnimatable"
import { $GeoModel } from "software.bernie.geckolib.model.GeoModel"
import { $MultiBufferSource$$Type } from "net.minecraft.client.renderer.MultiBufferSource"
import { $VertexConsumer$$Type } from "com.mojang.blaze3d.vertex.VertexConsumer"
import { $PoseStack$$Type } from "com.mojang.blaze3d.vertex.PoseStack"

export class $GeoRenderLayer<T extends $GeoAnimatable = $GeoAnimatable> {
constructor(geoRenderer0: $GeoRenderer$$Type<T>)

public "getDefaultBakedModel"(t0: T): $BakedGeoModel
public "getGeoModel"(): $GeoModel<T>
public "getRenderer"(): $GeoRenderer<T>
public "preRender"(poseStack0: $PoseStack$$Type, t1: T, bakedGeoModel2: $BakedGeoModel$$Type, renderType3: $RenderType$$Type, multiBufferSource4: $MultiBufferSource$$Type, vertexConsumer5: $VertexConsumer$$Type, float6: float, int7: integer, int8: integer): void
public "render"(poseStack0: $PoseStack$$Type, t1: T, bakedGeoModel2: $BakedGeoModel$$Type, renderType3: $RenderType$$Type, multiBufferSource4: $MultiBufferSource$$Type, vertexConsumer5: $VertexConsumer$$Type, float6: float, int7: integer, int8: integer): void
public "renderForBone"(poseStack0: $PoseStack$$Type, t1: T, geoBone2: $GeoBone$$Type, renderType3: $RenderType$$Type, multiBufferSource4: $MultiBufferSource$$Type, vertexConsumer5: $VertexConsumer$$Type, float6: float, int7: integer, int8: integer): void
get "geoModel"(): $GeoModel<T>
get "renderer"(): $GeoRenderer<T>
}
}

declare module "software.bernie.geckolib.core.animation.AnimationController$CustomKeyframeHandler" {
import { $CustomInstructionKeyframeEvent$$Type } from "software.bernie.geckolib.core.keyframe.event.CustomInstructionKeyframeEvent"
import { $GeoAnimatable } from "software.bernie.geckolib.core.animatable.GeoAnimatable"

export interface $AnimationController$CustomKeyframeHandler<A extends $GeoAnimatable = $GeoAnimatable> {
"handle"(customInstructionKeyframeEvent0: $CustomInstructionKeyframeEvent$$Type<A>): void
}

export namespace $AnimationController$CustomKeyframeHandler {
const probejs$$marker: never
}
export abstract class $AnimationController$CustomKeyframeHandler$$Static<A extends $GeoAnimatable = $GeoAnimatable> implements $AnimationController$CustomKeyframeHandler<A> {
}
}

declare module "software.bernie.geckolib.core.animatable.model.CoreGeoModel" {
import { $Animation } from "software.bernie.geckolib.core.animation.Animation"
import { $CoreBakedGeoModel } from "software.bernie.geckolib.core.animatable.model.CoreBakedGeoModel"
import { $CoreGeoBone } from "software.bernie.geckolib.core.animatable.model.CoreGeoBone"
import { $AnimationProcessor } from "software.bernie.geckolib.core.animation.AnimationProcessor"
import { $AnimationState$$Type } from "software.bernie.geckolib.core.animation.AnimationState"
import { $Optional } from "java.util.Optional"
import { $GeoAnimatable, $GeoAnimatable$$Type } from "software.bernie.geckolib.core.animatable.GeoAnimatable"

export interface $CoreGeoModel<E extends $GeoAnimatable = $GeoAnimatable> {
"applyMolangQueries"(e0: E, double1: double): void
"getAnimation"(e0: E, string1: string): $Animation
"getAnimationProcessor"(): $AnimationProcessor<E>
"getBakedGeoModel"(string0: string): $CoreBakedGeoModel
"getBone"(string0: string): $Optional<$CoreGeoBone>
"handleAnimations"(e0: E, long1: long, animationState2: $AnimationState$$Type<E>): void
"setCustomAnimations"(e0: E, long1: long, animationState2: $AnimationState$$Type<E>): void
get "animationProcessor"(): $AnimationProcessor<E>
}

export namespace $CoreGeoModel {
const probejs$$marker: never
}
export abstract class $CoreGeoModel$$Static<E extends $GeoAnimatable = $GeoAnimatable> implements $CoreGeoModel<E> {
}
}

declare module "software.bernie.geckolib.event.GeoRenderEvent" {
import { $GeoRenderer } from "software.bernie.geckolib.renderer.GeoRenderer"

export interface $GeoRenderEvent {
"getRenderer"(): $GeoRenderer<any>
get "renderer"(): $GeoRenderer<any>
}

export namespace $GeoRenderEvent {
const probejs$$marker: never
}
export abstract class $GeoRenderEvent$$Static implements $GeoRenderEvent {
}
}

declare module "software.bernie.geckolib.core.animation.RawAnimation" {
import { $List, $List$$Type } from "java.util.List"
import { $RawAnimation$Stage, $RawAnimation$Stage$$Type } from "software.bernie.geckolib.core.animation.RawAnimation$Stage"
import { $Animation$LoopType$$Type } from "software.bernie.geckolib.core.animation.Animation$LoopType"

export class $RawAnimation {
constructor(list0: $List$$Type<$RawAnimation$Stage$$Type>)

public static "begin"(): $RawAnimation
public static "copyOf"(rawAnimation0: $RawAnimation$$Type): $RawAnimation
public "getAnimationStages"(): $List<$RawAnimation$Stage>
public "getStageCount"(): integer
public "then"(string0: string, loopType1: $Animation$LoopType$$Type): $RawAnimation
public "thenLoop"(string0: string): $RawAnimation
public "thenPlay"(string0: string): $RawAnimation
public "thenPlayAndHold"(string0: string): $RawAnimation
public "thenPlayXTimes"(string0: string, int1: integer): $RawAnimation
public "thenWait"(int0: integer): $RawAnimation
get "animationStages"(): $List<$RawAnimation$Stage>
get "stageCount"(): integer
}
}

declare module "software.bernie.geckolib.event.GeoRenderEvent$Block$Pre" {
import { $GeoRenderEvent$Block } from "software.bernie.geckolib.event.GeoRenderEvent$Block"
import { $BakedGeoModel, $BakedGeoModel$$Type } from "software.bernie.geckolib.cache.object.BakedGeoModel"
import { $GeoBlockRenderer$$Type } from "software.bernie.geckolib.renderer.GeoBlockRenderer"
import { $MultiBufferSource, $MultiBufferSource$$Type } from "net.minecraft.client.renderer.MultiBufferSource"
import { $PoseStack, $PoseStack$$Type } from "com.mojang.blaze3d.vertex.PoseStack"

export class $GeoRenderEvent$Block$Pre extends $GeoRenderEvent$Block {
constructor(geoBlockRenderer0: $GeoBlockRenderer$$Type<any>, poseStack1: $PoseStack$$Type, bakedGeoModel2: $BakedGeoModel$$Type, multiBufferSource3: $MultiBufferSource$$Type, float4: float, int5: integer)
constructor()

public "getBufferSource"(): $MultiBufferSource
public "getModel"(): $BakedGeoModel
public "getPackedLight"(): integer
public "getPartialTick"(): float
public "getPoseStack"(): $PoseStack
get "bufferSource"(): $MultiBufferSource
get "model"(): $BakedGeoModel
get "packedLight"(): integer
get "partialTick"(): float
get "poseStack"(): $PoseStack
}
}

declare module "software.bernie.geckolib.event.GeoRenderEvent$Block$CompileRenderLayers" {
import { $GeoRenderLayer$$Type } from "software.bernie.geckolib.renderer.layer.GeoRenderLayer"
import { $GeoRenderEvent$Block } from "software.bernie.geckolib.event.GeoRenderEvent$Block"
import { $GeoBlockRenderer$$Type } from "software.bernie.geckolib.renderer.GeoBlockRenderer"

export class $GeoRenderEvent$Block$CompileRenderLayers extends $GeoRenderEvent$Block {
constructor(geoBlockRenderer0: $GeoBlockRenderer$$Type<any>)
constructor()

public "addLayer"(geoRenderLayer0: $GeoRenderLayer$$Type): void
}
}

declare module "software.bernie.geckolib.core.keyframe.event.data.ParticleKeyframeData" {
import { $KeyFrameData } from "software.bernie.geckolib.core.keyframe.event.data.KeyFrameData"

export class $ParticleKeyframeData extends $KeyFrameData {
constructor(double0: double, string1: string, string2: string, string3: string)

public "getEffect"(): string
public "getLocator"(): string
public "script"(): string
get "effect"(): string
get "locator"(): string
}
}

declare module "software.bernie.geckolib.event.GeoRenderEvent$Object$CompileRenderLayers" {
import { $GeoRenderLayer$$Type } from "software.bernie.geckolib.renderer.layer.GeoRenderLayer"
import { $GeoRenderEvent$Object } from "software.bernie.geckolib.event.GeoRenderEvent$Object"
import { $GeoObjectRenderer$$Type } from "software.bernie.geckolib.renderer.GeoObjectRenderer"

export class $GeoRenderEvent$Object$CompileRenderLayers extends $GeoRenderEvent$Object {
constructor(geoObjectRenderer0: $GeoObjectRenderer$$Type<any>)
constructor()

public "addLayer"(geoRenderLayer0: $GeoRenderLayer$$Type): void
}
}

declare module "software.bernie.geckolib.core.animation.AnimationController$SoundKeyframeHandler" {
import { $SoundKeyframeEvent$$Type } from "software.bernie.geckolib.core.keyframe.event.SoundKeyframeEvent"
import { $GeoAnimatable } from "software.bernie.geckolib.core.animatable.GeoAnimatable"

export interface $AnimationController$SoundKeyframeHandler<A extends $GeoAnimatable = $GeoAnimatable> {
"handle"(soundKeyframeEvent0: $SoundKeyframeEvent$$Type<A>): void
}

export namespace $AnimationController$SoundKeyframeHandler {
const probejs$$marker: never
}
export abstract class $AnimationController$SoundKeyframeHandler$$Static<A extends $GeoAnimatable = $GeoAnimatable> implements $AnimationController$SoundKeyframeHandler<A> {
}
}

declare module "software.bernie.geckolib.core.animatable.GeoAnimatable" {
import { $AnimatableManager$ControllerRegistrar$$Type } from "software.bernie.geckolib.core.animation.AnimatableManager$ControllerRegistrar"
import { $AnimatableInstanceCache } from "software.bernie.geckolib.core.animatable.instance.AnimatableInstanceCache"

export interface $GeoAnimatable {
"animatableCacheOverride"(): $AnimatableInstanceCache
"getAnimatableInstanceCache"(): $AnimatableInstanceCache
"getBoneResetTime"(): double
"getTick"(object0: any): double
"registerControllers"(controllerRegistrar0: $AnimatableManager$ControllerRegistrar$$Type): void
"shouldPlayAnimsWhileGamePaused"(): boolean
get "animatableInstanceCache"(): $AnimatableInstanceCache
get "boneResetTime"(): double
}

export namespace $GeoAnimatable {
const probejs$$marker: never
}
export abstract class $GeoAnimatable$$Static implements $GeoAnimatable {
}
}

declare module "software.bernie.geckolib.event.GeoRenderEvent$Item$Pre" {
import { $GeoItemRenderer$$Type } from "software.bernie.geckolib.renderer.GeoItemRenderer"
import { $BakedGeoModel, $BakedGeoModel$$Type } from "software.bernie.geckolib.cache.object.BakedGeoModel"
import { $MultiBufferSource, $MultiBufferSource$$Type } from "net.minecraft.client.renderer.MultiBufferSource"
import { $GeoRenderEvent$Item } from "software.bernie.geckolib.event.GeoRenderEvent$Item"
import { $PoseStack, $PoseStack$$Type } from "com.mojang.blaze3d.vertex.PoseStack"

export class $GeoRenderEvent$Item$Pre extends $GeoRenderEvent$Item {
constructor(geoItemRenderer0: $GeoItemRenderer$$Type<any>, poseStack1: $PoseStack$$Type, bakedGeoModel2: $BakedGeoModel$$Type, multiBufferSource3: $MultiBufferSource$$Type, float4: float, int5: integer)
constructor()

public "getBufferSource"(): $MultiBufferSource
public "getModel"(): $BakedGeoModel
public "getPackedLight"(): integer
public "getPartialTick"(): float
public "getPoseStack"(): $PoseStack
get "bufferSource"(): $MultiBufferSource
get "model"(): $BakedGeoModel
get "packedLight"(): integer
get "partialTick"(): float
get "poseStack"(): $PoseStack
}
}

declare module "software.bernie.geckolib.core.keyframe.event.SoundKeyframeEvent" {
import { $AnimationController$$Type } from "software.bernie.geckolib.core.animation.AnimationController"
import { $SoundKeyframeData, $SoundKeyframeData$$Type } from "software.bernie.geckolib.core.keyframe.event.data.SoundKeyframeData"
import { $GeoAnimatable, $GeoAnimatable$$Type } from "software.bernie.geckolib.core.animatable.GeoAnimatable"
import { $KeyFrameEvent } from "software.bernie.geckolib.core.keyframe.event.KeyFrameEvent"

export class $SoundKeyframeEvent<T extends $GeoAnimatable = $GeoAnimatable> extends $KeyFrameEvent<T, $SoundKeyframeData> {
constructor(t0: T, double1: double, animationController2: $AnimationController$$Type<T>, soundKeyframeData3: $SoundKeyframeData$$Type)

public "getKeyframeData"(): $SoundKeyframeData
get "keyframeData"(): $SoundKeyframeData
}
}

declare module "software.bernie.geckolib.core.object.PlayState" {
import { $Enum } from "java.lang.Enum"

export class $PlayState extends $Enum<$PlayState> {
static readonly "CONTINUE": $PlayState
static readonly "STOP": $PlayState

public static "valueOf"(string0: string): $PlayState
public static "values"(): $PlayState[]
}
}

declare module "software.bernie.geckolib.event.GeoRenderEvent$Item" {
import { $GeoItemRenderer$$Type } from "software.bernie.geckolib.renderer.GeoItemRenderer"
import { $GeoRenderEvent } from "software.bernie.geckolib.event.GeoRenderEvent"
import { $Event } from "net.minecraftforge.eventbus.api.Event"
import { $ItemStack } from "net.minecraft.world.item.ItemStack"

export class $GeoRenderEvent$Item extends $Event implements $GeoRenderEvent {
constructor(geoItemRenderer0: $GeoItemRenderer$$Type<any>)
constructor()

public "getItemStack"(): $ItemStack
get "itemStack"(): $ItemStack
}
}

declare module "software.bernie.geckolib.renderer.GeoArmorRenderer" {
import { $ResourceLocation, $ResourceLocation$$Type } from "net.minecraft.resources.ResourceLocation"
import { $Item, $Item$$Type } from "net.minecraft.world.item.Item"
import { $GeoItem, $GeoItem$$Type } from "software.bernie.geckolib.animatable.GeoItem"
import { $ClientLevel$$Type } from "net.minecraft.client.multiplayer.ClientLevel"
import { $GeoModel, $GeoModel$$Type } from "software.bernie.geckolib.model.GeoModel"
import { $PoseStack$$Type } from "com.mojang.blaze3d.vertex.PoseStack"
import { $GeoRenderLayer, $GeoRenderLayer$$Type } from "software.bernie.geckolib.renderer.layer.GeoRenderLayer"
import { $UpdateableLevel, $UpdateableLevel$$Type } from "dev.uncandango.alltheleaks.mixin.UpdateableLevel"
import { $Vector3f$$Type } from "org.joml.Vector3f"
import { $BakedGeoModel$$Type } from "software.bernie.geckolib.cache.object.BakedGeoModel"
import { $HumanoidModel, $HumanoidModel$$Type } from "net.minecraft.client.model.HumanoidModel"
import { $GeoQuad$$Type } from "software.bernie.geckolib.cache.object.GeoQuad"
import { $Matrix4f$$Type } from "org.joml.Matrix4f"
import { $ModelPart$$Type } from "net.minecraft.client.model.geom.ModelPart"
import { $GeoBone, $GeoBone$$Type } from "software.bernie.geckolib.cache.object.GeoBone"
import { $GeoRenderer } from "software.bernie.geckolib.renderer.GeoRenderer"
import { $RenderType, $RenderType$$Type } from "net.minecraft.client.renderer.RenderType"
import { $Color } from "software.bernie.geckolib.core.object.Color"
import { $List } from "java.util.List"
import { $Entity, $Entity$$Type } from "net.minecraft.world.entity.Entity"
import { $GeoCube$$Type } from "software.bernie.geckolib.cache.object.GeoCube"
import { $EquipmentSlot, $EquipmentSlot$$Type } from "net.minecraft.world.entity.EquipmentSlot"
import { $ItemStack, $ItemStack$$Type } from "net.minecraft.world.item.ItemStack"
import { $MultiBufferSource$$Type } from "net.minecraft.client.renderer.MultiBufferSource"
import { $VertexConsumer$$Type } from "com.mojang.blaze3d.vertex.VertexConsumer"

export class $GeoArmorRenderer<T extends ($Item & $GeoItem) = ($Item & $GeoItem)> extends $HumanoidModel implements $GeoRenderer<T>, $UpdateableLevel {
constructor(geoModel0: $GeoModel$$Type<T>)
constructor<I extends T>(i0: I)

public "actuallyRender"(poseStack0: $PoseStack$$Type, t1: T, bakedGeoModel2: $BakedGeoModel$$Type, renderType3: $RenderType$$Type, multiBufferSource4: $MultiBufferSource$$Type, vertexConsumer5: $VertexConsumer$$Type, boolean6: boolean, float7: float, int8: integer, int9: integer, float10: float, float11: float, float12: float, float13: float): void
public "addRenderLayer"(geoRenderLayer0: $GeoRenderLayer$$Type<T>): $GeoArmorRenderer<T>
public "applyBoneVisibilityByPart"(equipmentSlot0: $EquipmentSlot$$Type, modelPart1: $ModelPart$$Type, humanoidModel2: $HumanoidModel$$Type<any>): void
public "applyRenderLayers"(poseStack0: $PoseStack$$Type, t1: T, bakedGeoModel2: $BakedGeoModel$$Type, renderType3: $RenderType$$Type, multiBufferSource4: $MultiBufferSource$$Type, vertexConsumer5: $VertexConsumer$$Type, float6: float, int7: integer, int8: integer): void
public "applyRenderLayersForBone"(poseStack0: $PoseStack$$Type, t1: T, geoBone2: $GeoBone$$Type, renderType3: $RenderType$$Type, multiBufferSource4: $MultiBufferSource$$Type, vertexConsumer5: $VertexConsumer$$Type, float6: float, int7: integer, int8: integer): void
public "atl$onClientLevelUpdated"(clientLevel0: $ClientLevel$$Type): void
public "createVerticesOfQuad"(geoQuad0: $GeoQuad$$Type, matrix4f1: $Matrix4f$$Type, vector3f2: $Vector3f$$Type, vertexConsumer3: $VertexConsumer$$Type, int4: integer, int5: integer, float6: float, float7: float, float8: float, float9: float): void
public "defaultRender"(poseStack0: $PoseStack$$Type, t1: T, multiBufferSource2: $MultiBufferSource$$Type, renderType3: $RenderType$$Type, vertexConsumer4: $VertexConsumer$$Type, float5: float, float6: float, int7: integer): void
public "doPostRenderCleanup"(): void
public "fireCompileRenderLayersEvent"(): void
public "firePostRenderEvent"(poseStack0: $PoseStack$$Type, bakedGeoModel1: $BakedGeoModel$$Type, multiBufferSource2: $MultiBufferSource$$Type, float3: float, int4: integer): void
public "firePreRenderEvent"(poseStack0: $PoseStack$$Type, bakedGeoModel1: $BakedGeoModel$$Type, multiBufferSource2: $MultiBufferSource$$Type, float3: float, int4: integer): boolean
public "getBodyBone"(): $GeoBone
public "getCurrentEntity"(): $Entity
public "getCurrentSlot"(): $EquipmentSlot
public "getCurrentStack"(): $ItemStack
public "getGeoModel"(): $GeoModel<T>
public "getHeadBone"(): $GeoBone
public "getInstanceId"(t0: T): long
public "getLeftArmBone"(): $GeoBone
public "getLeftBootBone"(): $GeoBone
public "getLeftLegBone"(): $GeoBone
public "getMotionAnimThreshold"(t0: T): float
public "getPackedOverlay"(t0: T, float1: float, float2: float): integer
/** @deprecated */
public "getPackedOverlay"(t0: T, float1: float): integer
public "getRenderColor"(t0: T, float1: float, int2: integer): $Color
public "getRenderLayers"(): $List<$GeoRenderLayer<T>>
public "getRenderType"(t0: T, resourceLocation1: $ResourceLocation$$Type, multiBufferSource2: $MultiBufferSource$$Type, float3: float): $RenderType
public "getRightArmBone"(): $GeoBone
public "getRightBootBone"(): $GeoBone
public "getRightLegBone"(): $GeoBone
public "getTextureLocation"(t0: T): $ResourceLocation
public "postRender"(poseStack0: $PoseStack$$Type, t1: T, bakedGeoModel2: $BakedGeoModel$$Type, multiBufferSource3: $MultiBufferSource$$Type, vertexConsumer4: $VertexConsumer$$Type, boolean5: boolean, float6: float, int7: integer, int8: integer, float9: float, float10: float, float11: float, float12: float): void
public "preApplyRenderLayers"(poseStack0: $PoseStack$$Type, t1: T, bakedGeoModel2: $BakedGeoModel$$Type, renderType3: $RenderType$$Type, multiBufferSource4: $MultiBufferSource$$Type, vertexConsumer5: $VertexConsumer$$Type, float6: float, int7: integer, int8: integer): void
public "preRender"(poseStack0: $PoseStack$$Type, t1: T, bakedGeoModel2: $BakedGeoModel$$Type, multiBufferSource3: $MultiBufferSource$$Type, vertexConsumer4: $VertexConsumer$$Type, boolean5: boolean, float6: float, int7: integer, int8: integer, float9: float, float10: float, float11: float, float12: float): void
public "prepForRender"(entity0: $Entity$$Type, itemStack1: $ItemStack$$Type, equipmentSlot2: $EquipmentSlot$$Type, humanoidModel3: $HumanoidModel$$Type<any>): void
public "reRender"(bakedGeoModel0: $BakedGeoModel$$Type, poseStack1: $PoseStack$$Type, multiBufferSource2: $MultiBufferSource$$Type, t3: T, renderType4: $RenderType$$Type, vertexConsumer5: $VertexConsumer$$Type, float6: float, int7: integer, int8: integer, float9: float, float10: float, float11: float, float12: float): void
public static "register"<O extends $UpdateableLevel<any>>(o0: O): void
public "renderChildBones"(poseStack0: $PoseStack$$Type, t1: T, geoBone2: $GeoBone$$Type, renderType3: $RenderType$$Type, multiBufferSource4: $MultiBufferSource$$Type, vertexConsumer5: $VertexConsumer$$Type, boolean6: boolean, float7: float, int8: integer, int9: integer, float10: float, float11: float, float12: float, float13: float): void
public "renderCube"(poseStack0: $PoseStack$$Type, geoCube1: $GeoCube$$Type, vertexConsumer2: $VertexConsumer$$Type, int3: integer, int4: integer, float5: float, float6: float, float7: float, float8: float): void
public "renderCubesOfBone"(poseStack0: $PoseStack$$Type, geoBone1: $GeoBone$$Type, vertexConsumer2: $VertexConsumer$$Type, int3: integer, int4: integer, float5: float, float6: float, float7: float, float8: float): void
public "renderFinal"(poseStack0: $PoseStack$$Type, t1: T, bakedGeoModel2: $BakedGeoModel$$Type, multiBufferSource3: $MultiBufferSource$$Type, vertexConsumer4: $VertexConsumer$$Type, float5: float, int6: integer, int7: integer, float8: float, float9: float, float10: float, float11: float): void
public "renderRecursively"(poseStack0: $PoseStack$$Type, t1: T, geoBone2: $GeoBone$$Type, renderType3: $RenderType$$Type, multiBufferSource4: $MultiBufferSource$$Type, vertexConsumer5: $VertexConsumer$$Type, boolean6: boolean, float7: float, int8: integer, int9: integer, float10: float, float11: float, float12: float, float13: float): void
public "scaleModelForBaby"(poseStack0: $PoseStack$$Type, t1: T, float2: float, boolean3: boolean): void
public "scaleModelForRender"(float0: float, float1: float, poseStack2: $PoseStack$$Type, t3: T, bakedGeoModel4: $BakedGeoModel$$Type, boolean5: boolean, float6: float, int7: integer, int8: integer): void
public "updateAnimatedTextureFrame"(t0: T): void
public "withScale"(float0: float): $GeoArmorRenderer<T>
public "withScale"(float0: float, float1: float): $GeoArmorRenderer<T>
get "bodyBone"(): $GeoBone
get "currentEntity"(): $Entity
get "currentSlot"(): $EquipmentSlot
get "currentStack"(): $ItemStack
get "geoModel"(): $GeoModel<T>
get "headBone"(): $GeoBone
get "leftArmBone"(): $GeoBone
get "leftBootBone"(): $GeoBone
get "leftLegBone"(): $GeoBone
get "renderLayers"(): $List<$GeoRenderLayer<T>>
get "rightArmBone"(): $GeoBone
get "rightBootBone"(): $GeoBone
get "rightLegBone"(): $GeoBone
}
}

declare module "software.bernie.geckolib.core.animation.AnimationController$State" {
import { $Enum } from "java.lang.Enum"

export class $AnimationController$State extends $Enum<$AnimationController$State> {
static readonly "PAUSED": $AnimationController$State
static readonly "RUNNING": $AnimationController$State
static readonly "STOPPED": $AnimationController$State
static readonly "TRANSITIONING": $AnimationController$State

public static "valueOf"(string0: string): $AnimationController$State
public static "values"(): $AnimationController$State[]
}
}

declare module "software.bernie.geckolib.event.GeoRenderEvent$Armor$CompileRenderLayers" {
import { $GeoArmorRenderer$$Type } from "software.bernie.geckolib.renderer.GeoArmorRenderer"
import { $GeoRenderLayer$$Type } from "software.bernie.geckolib.renderer.layer.GeoRenderLayer"
import { $GeoRenderEvent$Armor } from "software.bernie.geckolib.event.GeoRenderEvent$Armor"

export class $GeoRenderEvent$Armor$CompileRenderLayers extends $GeoRenderEvent$Armor {
constructor(geoArmorRenderer0: $GeoArmorRenderer$$Type<any>)
constructor()

public "addLayer"(geoRenderLayer0: $GeoRenderLayer$$Type): void
}
}

declare module "software.bernie.geckolib.model.GeoModel" {
import { $ResourceLocation, $ResourceLocation$$Type } from "net.minecraft.resources.ResourceLocation"
import { $GeoBone } from "software.bernie.geckolib.cache.object.GeoBone"
import { $GeoRenderer$$Type } from "software.bernie.geckolib.renderer.GeoRenderer"
import { $AnimationState$$Type } from "software.bernie.geckolib.core.animation.AnimationState"
import { $RenderType } from "net.minecraft.client.renderer.RenderType"
import { $Animation } from "software.bernie.geckolib.core.animation.Animation"
import { $AnimationProcessor } from "software.bernie.geckolib.core.animation.AnimationProcessor"
import { $BiConsumer$$Type } from "java.util.function.BiConsumer"
import { $BakedGeoModel } from "software.bernie.geckolib.cache.object.BakedGeoModel"
import { $Optional } from "java.util.Optional"
import { $GeoAnimatable, $GeoAnimatable$$Type } from "software.bernie.geckolib.core.animatable.GeoAnimatable"
import { $CoreGeoModel } from "software.bernie.geckolib.core.animatable.model.CoreGeoModel"
import { $DataTicket$$Type } from "software.bernie.geckolib.core.object.DataTicket"

export class $GeoModel<T extends $GeoAnimatable = $GeoAnimatable> implements $CoreGeoModel<T> {
constructor()

public "addAdditionalStateData"(t0: T, long1: long, biConsumer2: $BiConsumer$$Type<$DataTicket$$Type<T>, T>): void
public "applyMolangQueries"(geoAnimatable0: $GeoAnimatable$$Type, double1: double): void
public "crashIfBoneMissing"(): boolean
public "getAnimation"(t0: T, string1: string): $Animation
public "getAnimationProcessor"(): $AnimationProcessor<T>
public "getAnimationResource"(t0: T): $ResourceLocation
public "getAnimationResourceFallbacks"(t0: T): $ResourceLocation[]
public "getBakedModel"(resourceLocation0: $ResourceLocation$$Type): $BakedGeoModel
public "getBone"(string0: string): $Optional<$GeoBone>
public "getModelResource"(t0: T): $ResourceLocation
public "getModelResource"(t0: T, geoRenderer1: $GeoRenderer$$Type<T>): $ResourceLocation
public "getRenderType"(t0: T, resourceLocation1: $ResourceLocation$$Type): $RenderType
public "getTextureResource"(t0: T): $ResourceLocation
public "getTextureResource"(t0: T, geoRenderer1: $GeoRenderer$$Type<T>): $ResourceLocation
public "handleAnimations"(t0: T, long1: long, animationState2: $AnimationState$$Type<T>): void
public "setCustomAnimations"(t0: T, long1: long, animationState2: $AnimationState$$Type<T>): void
get "animationProcessor"(): $AnimationProcessor<T>
}
}

declare module "software.bernie.geckolib.event.GeoRenderEvent$Entity$Pre" {
import { $GeoRenderEvent$Entity } from "software.bernie.geckolib.event.GeoRenderEvent$Entity"
import { $BakedGeoModel, $BakedGeoModel$$Type } from "software.bernie.geckolib.cache.object.BakedGeoModel"
import { $GeoEntityRenderer$$Type } from "software.bernie.geckolib.renderer.GeoEntityRenderer"
import { $MultiBufferSource, $MultiBufferSource$$Type } from "net.minecraft.client.renderer.MultiBufferSource"
import { $PoseStack, $PoseStack$$Type } from "com.mojang.blaze3d.vertex.PoseStack"

export class $GeoRenderEvent$Entity$Pre extends $GeoRenderEvent$Entity {
constructor(geoEntityRenderer0: $GeoEntityRenderer$$Type<any>, poseStack1: $PoseStack$$Type, bakedGeoModel2: $BakedGeoModel$$Type, multiBufferSource3: $MultiBufferSource$$Type, float4: float, int5: integer)
constructor()

public "getBufferSource"(): $MultiBufferSource
public "getModel"(): $BakedGeoModel
public "getPackedLight"(): integer
public "getPartialTick"(): float
public "getPoseStack"(): $PoseStack
get "bufferSource"(): $MultiBufferSource
get "model"(): $BakedGeoModel
get "packedLight"(): integer
get "partialTick"(): float
get "poseStack"(): $PoseStack
}
}

declare module "software.bernie.geckolib.core.keyframe.BoneAnimation" {
import { $IValue, $IValue$$Type } from "com.eliotlash.mclib.math.IValue"
import { $Record } from "java.lang.Record"
import { $KeyframeStack, $KeyframeStack$$Type } from "software.bernie.geckolib.core.keyframe.KeyframeStack"
import { $Keyframe, $Keyframe$$Type } from "software.bernie.geckolib.core.keyframe.Keyframe"

export class $BoneAnimation extends $Record {
constructor(boneName: string, rotationKeyFrames: $KeyframeStack$$Type<$Keyframe$$Type<$IValue$$Type>>, positionKeyFrames: $KeyframeStack$$Type<$Keyframe$$Type<$IValue$$Type>>, scaleKeyFrames: $KeyframeStack$$Type<$Keyframe$$Type<$IValue$$Type>>)

public "boneName"(): string
public "positionKeyFrames"(): $KeyframeStack<$Keyframe<$IValue>>
public "rotationKeyFrames"(): $KeyframeStack<$Keyframe<$IValue>>
public "scaleKeyFrames"(): $KeyframeStack<$Keyframe<$IValue>>
}
}

declare module "software.bernie.geckolib.event.GeoRenderEvent$ReplacedEntity" {
import { $GeoRenderEvent } from "software.bernie.geckolib.event.GeoRenderEvent"
import { $Entity } from "net.minecraft.world.entity.Entity"
import { $GeoReplacedEntityRenderer, $GeoReplacedEntityRenderer$$Type } from "software.bernie.geckolib.renderer.GeoReplacedEntityRenderer"
import { $Event } from "net.minecraftforge.eventbus.api.Event"

export class $GeoRenderEvent$ReplacedEntity extends $Event implements $GeoRenderEvent {
constructor(geoReplacedEntityRenderer0: $GeoReplacedEntityRenderer$$Type<any, any>)
constructor()

public "getRenderer"(): $GeoReplacedEntityRenderer<any, any>
public "getReplacedEntity"(): $Entity
get "renderer"(): $GeoReplacedEntityRenderer<any, any>
get "replacedEntity"(): $Entity
}
}

declare module "software.bernie.geckolib.core.animation.AnimationProcessor$QueuedAnimation" {
import { $Animation, $Animation$$Type } from "software.bernie.geckolib.core.animation.Animation"
import { $Record } from "java.lang.Record"
import { $Animation$LoopType, $Animation$LoopType$$Type } from "software.bernie.geckolib.core.animation.Animation$LoopType"

export class $AnimationProcessor$QueuedAnimation extends $Record {
constructor(animation: $Animation$$Type, loopType: $Animation$LoopType$$Type)

public "animation"(): $Animation
public "loopType"(): $Animation$LoopType
}
}

declare module "software.bernie.geckolib.event.GeoRenderEvent$Block" {
import { $GeoRenderEvent } from "software.bernie.geckolib.event.GeoRenderEvent"
import { $Event } from "net.minecraftforge.eventbus.api.Event"
import { $BlockEntity } from "net.minecraft.world.level.block.entity.BlockEntity"
import { $GeoBlockRenderer, $GeoBlockRenderer$$Type } from "software.bernie.geckolib.renderer.GeoBlockRenderer"

export class $GeoRenderEvent$Block extends $Event implements $GeoRenderEvent {
constructor(geoBlockRenderer0: $GeoBlockRenderer$$Type<any>)
constructor()

public "getBlockEntity"(): $BlockEntity
public "getRenderer"(): $GeoBlockRenderer<any>
get "blockEntity"(): $BlockEntity
get "renderer"(): $GeoBlockRenderer<any>
}
}

declare module "software.bernie.geckolib.core.keyframe.event.data.CustomInstructionKeyframeData" {
import { $KeyFrameData } from "software.bernie.geckolib.core.keyframe.event.data.KeyFrameData"

export class $CustomInstructionKeyframeData extends $KeyFrameData {
constructor(double0: double, string1: string)

public "getInstructions"(): string
get "instructions"(): string
}
}

declare module "software.bernie.geckolib.core.animation.EasingType" {
import { $AnimationPoint$$Type } from "software.bernie.geckolib.core.keyframe.AnimationPoint"
import { $JsonElement$$Type } from "com.google.gson.JsonElement"
import { $Double2DoubleFunction, $Double2DoubleFunction$$Type } from "it.unimi.dsi.fastutil.doubles.Double2DoubleFunction"
import { $Map } from "java.util.Map"

export interface $EasingType {
"apply"(animationPoint0: $AnimationPoint$$Type): double
"apply"(animationPoint0: $AnimationPoint$$Type, double1: double, double2: double): double
"buildTransformer"(double0: double): $Double2DoubleFunction
}

export namespace $EasingType {
const CATMULLROM: $EasingType
const EASE_IN_BACK: $EasingType
const EASE_IN_BOUNCE: $EasingType
const EASE_IN_CIRC: $EasingType
const EASE_IN_CUBIC: $EasingType
const EASE_IN_ELASTIC: $EasingType
const EASE_IN_EXPO: $EasingType
const EASE_IN_OUT_BACK: $EasingType
const EASE_IN_OUT_BOUNCE: $EasingType
const EASE_IN_OUT_CIRC: $EasingType
const EASE_IN_OUT_CUBIC: $EasingType
const EASE_IN_OUT_ELASTIC: $EasingType
const EASE_IN_OUT_EXPO: $EasingType
const EASE_IN_OUT_QUAD: $EasingType
const EASE_IN_OUT_QUART: $EasingType
const EASE_IN_OUT_QUINT: $EasingType
const EASE_IN_OUT_SINE: $EasingType
const EASE_IN_QUAD: $EasingType
const EASE_IN_QUART: $EasingType
const EASE_IN_QUINT: $EasingType
const EASE_IN_SINE: $EasingType
const EASE_OUT_BACK: $EasingType
const EASE_OUT_BOUNCE: $EasingType
const EASE_OUT_CIRC: $EasingType
const EASE_OUT_CUBIC: $EasingType
const EASE_OUT_ELASTIC: $EasingType
const EASE_OUT_EXPO: $EasingType
const EASE_OUT_QUAD: $EasingType
const EASE_OUT_QUART: $EasingType
const EASE_OUT_QUINT: $EasingType
const EASE_OUT_SINE: $EasingType
const EASING_TYPES: $Map<string, $EasingType>
const LINEAR: $EasingType
const STEP: $EasingType
function back(double0: double): $Double2DoubleFunction
function bounce(double0: double): $Double2DoubleFunction
function catmullRom(double0: double): double
function circle(double0: double): double
function cubic(double0: double): double
function easeIn(double2DoubleFunction0: $Double2DoubleFunction$$Type): $Double2DoubleFunction
function easeInOut(double2DoubleFunction0: $Double2DoubleFunction$$Type): $Double2DoubleFunction
function easeOut(double2DoubleFunction0: $Double2DoubleFunction$$Type): $Double2DoubleFunction
function elastic(double0: double): $Double2DoubleFunction
function exp(double0: double): double
function fromJson(jsonElement0: $JsonElement$$Type): $EasingType
function fromString(string0: string): $EasingType
function lerpWithOverride(animationPoint0: $AnimationPoint$$Type, easingType1: $EasingType$$Type): double
function linear(double2DoubleFunction0: $Double2DoubleFunction$$Type): $Double2DoubleFunction
function linear(double0: double): double
function pow(double0: double): $Double2DoubleFunction
function quadratic(double0: double): double
function register(string0: string, easingType1: $EasingType$$Type): $EasingType
function sine(double0: double): double
function step(double0: double): $Double2DoubleFunction
function stepNonNegative(double2DoubleFunction0: $Double2DoubleFunction$$Type): $Double2DoubleFunction
function stepPositive(double2DoubleFunction0: $Double2DoubleFunction$$Type): $Double2DoubleFunction
}
export abstract class $EasingType$$Static implements $EasingType {
static readonly "CATMULLROM": $EasingType
static readonly "EASE_IN_BACK": $EasingType
static readonly "EASE_IN_BOUNCE": $EasingType
static readonly "EASE_IN_CIRC": $EasingType
static readonly "EASE_IN_CUBIC": $EasingType
static readonly "EASE_IN_ELASTIC": $EasingType
static readonly "EASE_IN_EXPO": $EasingType
static readonly "EASE_IN_OUT_BACK": $EasingType
static readonly "EASE_IN_OUT_BOUNCE": $EasingType
static readonly "EASE_IN_OUT_CIRC": $EasingType
static readonly "EASE_IN_OUT_CUBIC": $EasingType
static readonly "EASE_IN_OUT_ELASTIC": $EasingType
static readonly "EASE_IN_OUT_EXPO": $EasingType
static readonly "EASE_IN_OUT_QUAD": $EasingType
static readonly "EASE_IN_OUT_QUART": $EasingType
static readonly "EASE_IN_OUT_QUINT": $EasingType
static readonly "EASE_IN_OUT_SINE": $EasingType
static readonly "EASE_IN_QUAD": $EasingType
static readonly "EASE_IN_QUART": $EasingType
static readonly "EASE_IN_QUINT": $EasingType
static readonly "EASE_IN_SINE": $EasingType
static readonly "EASE_OUT_BACK": $EasingType
static readonly "EASE_OUT_BOUNCE": $EasingType
static readonly "EASE_OUT_CIRC": $EasingType
static readonly "EASE_OUT_CUBIC": $EasingType
static readonly "EASE_OUT_ELASTIC": $EasingType
static readonly "EASE_OUT_EXPO": $EasingType
static readonly "EASE_OUT_QUAD": $EasingType
static readonly "EASE_OUT_QUART": $EasingType
static readonly "EASE_OUT_QUINT": $EasingType
static readonly "EASE_OUT_SINE": $EasingType
static readonly "EASING_TYPES": $Map<string, $EasingType>
static readonly "LINEAR": $EasingType
static readonly "STEP": $EasingType

static "back"(double0: double): $Double2DoubleFunction
static "bounce"(double0: double): $Double2DoubleFunction
static "catmullRom"(double0: double): double
static "circle"(double0: double): double
static "cubic"(double0: double): double
static "easeIn"(double2DoubleFunction0: $Double2DoubleFunction$$Type): $Double2DoubleFunction
static "easeInOut"(double2DoubleFunction0: $Double2DoubleFunction$$Type): $Double2DoubleFunction
static "easeOut"(double2DoubleFunction0: $Double2DoubleFunction$$Type): $Double2DoubleFunction
static "elastic"(double0: double): $Double2DoubleFunction
static "exp"(double0: double): double
static "fromJson"(jsonElement0: $JsonElement$$Type): $EasingType
static "fromString"(string0: string): $EasingType
static "lerpWithOverride"(animationPoint0: $AnimationPoint$$Type, easingType1: $EasingType$$Type): double
static "linear"(double2DoubleFunction0: $Double2DoubleFunction$$Type): $Double2DoubleFunction
static "linear"(double0: double): double
static "pow"(double0: double): $Double2DoubleFunction
static "quadratic"(double0: double): double
static "register"(string0: string, easingType1: $EasingType$$Type): $EasingType
static "sine"(double0: double): double
static "step"(double0: double): $Double2DoubleFunction
static "stepNonNegative"(double2DoubleFunction0: $Double2DoubleFunction$$Type): $Double2DoubleFunction
static "stepPositive"(double2DoubleFunction0: $Double2DoubleFunction$$Type): $Double2DoubleFunction
}
}

declare module "software.bernie.geckolib.cache.object.GeoBone" {
import { $List } from "java.util.List"
import { $CoreGeoBone } from "software.bernie.geckolib.core.animatable.model.CoreGeoBone"
import { $GeoCube } from "software.bernie.geckolib.cache.object.GeoCube"
import { $BoneSnapshot } from "software.bernie.geckolib.core.state.BoneSnapshot"
import { $Vector3d, $Vector3d$$Type } from "org.joml.Vector3d"
import { $Matrix3f, $Matrix3f$$Type } from "org.joml.Matrix3f"
import { $Matrix4f, $Matrix4f$$Type } from "org.joml.Matrix4f"

export class $GeoBone implements $CoreGeoBone {
constructor(geoBone0: $GeoBone$$Type, string1: string, boolean2: boolean, double3: double, boolean4: boolean, boolean5: boolean)

public "addRotationOffsetFromBone"(geoBone0: $GeoBone$$Type): void
public "getChildBones"(): $List<$GeoBone>
public "getCubes"(): $List<$GeoCube>
public "getInflate"(): double
public "getInitialSnapshot"(): $BoneSnapshot
public "getLocalPosition"(): $Vector3d
public "getLocalSpaceMatrix"(): $Matrix4f
public "getMirror"(): boolean
public "getModelPosition"(): $Vector3d
public "getModelRotationMatrix"(): $Matrix4f
public "getModelSpaceMatrix"(): $Matrix4f
public "getName"(): string
public "getPivotX"(): float
public "getPivotY"(): float
public "getPivotZ"(): float
public "getPosX"(): float
public "getPosY"(): float
public "getPosZ"(): float
public "getPositionVector"(): $Vector3d
public "getReset"(): boolean
public "getRotX"(): float
public "getRotY"(): float
public "getRotZ"(): float
public "getRotationVector"(): $Vector3d
public "getScaleVector"(): $Vector3d
public "getScaleX"(): float
public "getScaleY"(): float
public "getScaleZ"(): float
public "getWorldPosition"(): $Vector3d
public "getWorldSpaceMatrix"(): $Matrix4f
public "getWorldSpaceNormal"(): $Matrix3f
public "hasPositionChanged"(): boolean
public "hasRotationChanged"(): boolean
public "hasScaleChanged"(): boolean
public "isHidden"(): boolean
public "isHidingChildren"(): boolean
public "isTrackingMatrices"(): boolean
public "markPositionAsChanged"(): void
public "markRotationAsChanged"(): void
public "markScaleAsChanged"(): void
public "resetStateChanges"(): void
public "saveInitialSnapshot"(): void
public "saveSnapshot"(): $BoneSnapshot
public "setChildrenHidden"(boolean0: boolean): void
public "setHidden"(boolean0: boolean): void
public "setLocalSpaceMatrix"(matrix4f0: $Matrix4f$$Type): void
public "setModelPosition"(vector3d0: $Vector3d$$Type): void
public "setModelSpaceMatrix"(matrix4f0: $Matrix4f$$Type): void
public "setPivotX"(float0: float): void
public "setPivotY"(float0: float): void
public "setPivotZ"(float0: float): void
public "setPosX"(float0: float): void
public "setPosY"(float0: float): void
public "setPosZ"(float0: float): void
public "setRotX"(float0: float): void
public "setRotY"(float0: float): void
public "setRotZ"(float0: float): void
public "setScaleX"(float0: float): void
public "setScaleY"(float0: float): void
public "setScaleZ"(float0: float): void
public "setTrackingMatrices"(boolean0: boolean): void
public "setWorldSpaceMatrix"(matrix4f0: $Matrix4f$$Type): void
public "setWorldSpaceNormal"(matrix3f0: $Matrix3f$$Type): void
public "shouldNeverRender"(): boolean
public "updatePivot"(float0: float, float1: float, float2: float): void
public "updatePosition"(float0: float, float1: float, float2: float): void
public "updateRotation"(float0: float, float1: float, float2: float): void
public "updateScale"(float0: float, float1: float, float2: float): void
get "childBones"(): $List<$GeoBone>
get "cubes"(): $List<$GeoCube>
get "inflate"(): double
get "initialSnapshot"(): $BoneSnapshot
get "localPosition"(): $Vector3d
get "localSpaceMatrix"(): $Matrix4f
get "mirror"(): boolean
get "modelPosition"(): $Vector3d
get "modelRotationMatrix"(): $Matrix4f
get "modelSpaceMatrix"(): $Matrix4f
get "name"(): string
get "pivotX"(): float
get "pivotY"(): float
get "pivotZ"(): float
get "posX"(): float
get "posY"(): float
get "posZ"(): float
get "positionVector"(): $Vector3d
get "reset"(): boolean
get "rotX"(): float
get "rotY"(): float
get "rotZ"(): float
get "rotationVector"(): $Vector3d
get "scaleVector"(): $Vector3d
get "scaleX"(): float
get "scaleY"(): float
get "scaleZ"(): float
get "worldPosition"(): $Vector3d
get "worldSpaceMatrix"(): $Matrix4f
get "worldSpaceNormal"(): $Matrix3f
get "hidden"(): boolean
get "hidingChildren"(): boolean
get "trackingMatrices"(): boolean
set "childrenHidden"(value: boolean)
set "hidden"(value: boolean)
set "localSpaceMatrix"(value: $Matrix4f$$Type)
set "modelPosition"(value: $Vector3d$$Type)
set "modelSpaceMatrix"(value: $Matrix4f$$Type)
set "pivotX"(value: float)
set "pivotY"(value: float)
set "pivotZ"(value: float)
set "posX"(value: float)
set "posY"(value: float)
set "posZ"(value: float)
set "rotX"(value: float)
set "rotY"(value: float)
set "rotZ"(value: float)
set "scaleX"(value: float)
set "scaleY"(value: float)
set "scaleZ"(value: float)
set "trackingMatrices"(value: boolean)
set "worldSpaceMatrix"(value: $Matrix4f$$Type)
set "worldSpaceNormal"(value: $Matrix3f$$Type)
}
}

declare module "software.bernie.geckolib.event.GeoRenderEvent$Item$Post" {
import { $GeoItemRenderer$$Type } from "software.bernie.geckolib.renderer.GeoItemRenderer"
import { $BakedGeoModel, $BakedGeoModel$$Type } from "software.bernie.geckolib.cache.object.BakedGeoModel"
import { $MultiBufferSource, $MultiBufferSource$$Type } from "net.minecraft.client.renderer.MultiBufferSource"
import { $GeoRenderEvent$Item } from "software.bernie.geckolib.event.GeoRenderEvent$Item"
import { $PoseStack, $PoseStack$$Type } from "com.mojang.blaze3d.vertex.PoseStack"

export class $GeoRenderEvent$Item$Post extends $GeoRenderEvent$Item {
constructor(geoItemRenderer0: $GeoItemRenderer$$Type<any>, poseStack1: $PoseStack$$Type, bakedGeoModel2: $BakedGeoModel$$Type, multiBufferSource3: $MultiBufferSource$$Type, float4: float, int5: integer)
constructor()

public "getBufferSource"(): $MultiBufferSource
public "getModel"(): $BakedGeoModel
public "getPackedLight"(): integer
public "getPartialTick"(): float
public "getPoseStack"(): $PoseStack
get "bufferSource"(): $MultiBufferSource
get "model"(): $BakedGeoModel
get "packedLight"(): integer
get "partialTick"(): float
get "poseStack"(): $PoseStack
}
}

declare module "software.bernie.geckolib.event.GeoRenderEvent$ReplacedEntity$Pre" {
import { $GeoRenderEvent$ReplacedEntity } from "software.bernie.geckolib.event.GeoRenderEvent$ReplacedEntity"
import { $GeoReplacedEntityRenderer$$Type } from "software.bernie.geckolib.renderer.GeoReplacedEntityRenderer"
import { $BakedGeoModel, $BakedGeoModel$$Type } from "software.bernie.geckolib.cache.object.BakedGeoModel"
import { $MultiBufferSource, $MultiBufferSource$$Type } from "net.minecraft.client.renderer.MultiBufferSource"
import { $PoseStack, $PoseStack$$Type } from "com.mojang.blaze3d.vertex.PoseStack"

export class $GeoRenderEvent$ReplacedEntity$Pre extends $GeoRenderEvent$ReplacedEntity {
constructor(geoReplacedEntityRenderer0: $GeoReplacedEntityRenderer$$Type<any, any>, poseStack1: $PoseStack$$Type, bakedGeoModel2: $BakedGeoModel$$Type, multiBufferSource3: $MultiBufferSource$$Type, float4: float, int5: integer)
constructor()

public "getBufferSource"(): $MultiBufferSource
public "getModel"(): $BakedGeoModel
public "getPackedLight"(): integer
public "getPartialTick"(): float
public "getPoseStack"(): $PoseStack
get "bufferSource"(): $MultiBufferSource
get "model"(): $BakedGeoModel
get "packedLight"(): integer
get "partialTick"(): float
get "poseStack"(): $PoseStack
}
}

declare module "software.bernie.geckolib.core.keyframe.event.ParticleKeyframeEvent" {
import { $AnimationController$$Type } from "software.bernie.geckolib.core.animation.AnimationController"
import { $GeoAnimatable, $GeoAnimatable$$Type } from "software.bernie.geckolib.core.animatable.GeoAnimatable"
import { $ParticleKeyframeData, $ParticleKeyframeData$$Type } from "software.bernie.geckolib.core.keyframe.event.data.ParticleKeyframeData"
import { $KeyFrameEvent } from "software.bernie.geckolib.core.keyframe.event.KeyFrameEvent"

export class $ParticleKeyframeEvent<T extends $GeoAnimatable = $GeoAnimatable> extends $KeyFrameEvent<T, $ParticleKeyframeData> {
constructor(t0: T, double1: double, animationController2: $AnimationController$$Type<T>, particleKeyframeData3: $ParticleKeyframeData$$Type)

public "getKeyframeData"(): $ParticleKeyframeData
get "keyframeData"(): $ParticleKeyframeData
}
}

declare module "software.bernie.geckolib.event.GeoRenderEvent$Block$Post" {
import { $GeoRenderEvent$Block } from "software.bernie.geckolib.event.GeoRenderEvent$Block"
import { $BakedGeoModel, $BakedGeoModel$$Type } from "software.bernie.geckolib.cache.object.BakedGeoModel"
import { $GeoBlockRenderer$$Type } from "software.bernie.geckolib.renderer.GeoBlockRenderer"
import { $MultiBufferSource, $MultiBufferSource$$Type } from "net.minecraft.client.renderer.MultiBufferSource"
import { $PoseStack, $PoseStack$$Type } from "com.mojang.blaze3d.vertex.PoseStack"

export class $GeoRenderEvent$Block$Post extends $GeoRenderEvent$Block {
constructor(geoBlockRenderer0: $GeoBlockRenderer$$Type<any>, poseStack1: $PoseStack$$Type, bakedGeoModel2: $BakedGeoModel$$Type, multiBufferSource3: $MultiBufferSource$$Type, float4: float, int5: integer)
constructor()

public "getBufferSource"(): $MultiBufferSource
public "getModel"(): $BakedGeoModel
public "getPackedLight"(): integer
public "getPartialTick"(): float
public "getPoseStack"(): $PoseStack
get "bufferSource"(): $MultiBufferSource
get "model"(): $BakedGeoModel
get "packedLight"(): integer
get "partialTick"(): float
get "poseStack"(): $PoseStack
}
}

declare module "software.bernie.geckolib.renderer.GeoReplacedEntityRenderer" {
import { $ResourceLocation, $ResourceLocation$$Type } from "net.minecraft.resources.ResourceLocation"
import { $GeoBone$$Type } from "software.bernie.geckolib.cache.object.GeoBone"
import { $GeoRenderer } from "software.bernie.geckolib.renderer.GeoRenderer"
import { $RenderType, $RenderType$$Type } from "net.minecraft.client.renderer.RenderType"
import { $GeoModel, $GeoModel$$Type } from "software.bernie.geckolib.model.GeoModel"
import { $PoseStack$$Type } from "com.mojang.blaze3d.vertex.PoseStack"
import { $Color } from "software.bernie.geckolib.core.object.Color"
import { $GeoRenderLayer, $GeoRenderLayer$$Type } from "software.bernie.geckolib.renderer.layer.GeoRenderLayer"
import { $List } from "java.util.List"
import { $Entity, $Entity$$Type } from "net.minecraft.world.entity.Entity"
import { $GeoCube$$Type } from "software.bernie.geckolib.cache.object.GeoCube"
import { $EntityRendererProvider$Context$$Type } from "net.minecraft.client.renderer.entity.EntityRendererProvider$Context"
import { $Vector3f$$Type } from "org.joml.Vector3f"
import { $BakedGeoModel$$Type } from "software.bernie.geckolib.cache.object.BakedGeoModel"
import { $GeoAnimatable, $GeoAnimatable$$Type } from "software.bernie.geckolib.core.animatable.GeoAnimatable"
import { $GeoQuad$$Type } from "software.bernie.geckolib.cache.object.GeoQuad"
import { $Mob, $Mob$$Type } from "net.minecraft.world.entity.Mob"
import { $Matrix4f$$Type } from "org.joml.Matrix4f"
import { $MultiBufferSource$$Type } from "net.minecraft.client.renderer.MultiBufferSource"
import { $VertexConsumer$$Type } from "com.mojang.blaze3d.vertex.VertexConsumer"
import { $EntityRenderer } from "net.minecraft.client.renderer.entity.EntityRenderer"

export class $GeoReplacedEntityRenderer<E extends $Entity = $Entity, T extends $GeoAnimatable = $GeoAnimatable> extends $EntityRenderer<E> implements $GeoRenderer<T> {
constructor(context0: $EntityRendererProvider$Context$$Type, geoModel1: $GeoModel$$Type<T>, t2: T)

public "actuallyRender"(poseStack0: $PoseStack$$Type, t1: T, bakedGeoModel2: $BakedGeoModel$$Type, renderType3: $RenderType$$Type, multiBufferSource4: $MultiBufferSource$$Type, vertexConsumer5: $VertexConsumer$$Type, boolean6: boolean, float7: float, int8: integer, int9: integer, float10: float, float11: float, float12: float, float13: float): void
public "addRenderLayer"(geoRenderLayer0: $GeoRenderLayer$$Type<T>): $GeoReplacedEntityRenderer<E, T>
public "applyRenderLayers"(poseStack0: $PoseStack$$Type, t1: T, bakedGeoModel2: $BakedGeoModel$$Type, renderType3: $RenderType$$Type, multiBufferSource4: $MultiBufferSource$$Type, vertexConsumer5: $VertexConsumer$$Type, float6: float, int7: integer, int8: integer): void
public "applyRenderLayersForBone"(poseStack0: $PoseStack$$Type, t1: T, geoBone2: $GeoBone$$Type, renderType3: $RenderType$$Type, multiBufferSource4: $MultiBufferSource$$Type, vertexConsumer5: $VertexConsumer$$Type, float6: float, int7: integer, int8: integer): void
public "createVerticesOfQuad"(geoQuad0: $GeoQuad$$Type, matrix4f1: $Matrix4f$$Type, vector3f2: $Vector3f$$Type, vertexConsumer3: $VertexConsumer$$Type, int4: integer, int5: integer, float6: float, float7: float, float8: float, float9: float): void
public "defaultRender"(poseStack0: $PoseStack$$Type, t1: T, multiBufferSource2: $MultiBufferSource$$Type, renderType3: $RenderType$$Type, vertexConsumer4: $VertexConsumer$$Type, float5: float, float6: float, int7: integer): void
public "doPostRenderCleanup"(): void
public "fireCompileRenderLayersEvent"(): void
public "firePostRenderEvent"(poseStack0: $PoseStack$$Type, bakedGeoModel1: $BakedGeoModel$$Type, multiBufferSource2: $MultiBufferSource$$Type, float3: float, int4: integer): void
public "firePreRenderEvent"(poseStack0: $PoseStack$$Type, bakedGeoModel1: $BakedGeoModel$$Type, multiBufferSource2: $MultiBufferSource$$Type, float3: float, int4: integer): boolean
public "getAnimatable"(): T
public "getCurrentEntity"(): E
public "getGeoModel"(): $GeoModel<T>
public "getInstanceId"(t0: T): long
public "getMotionAnimThreshold"(t0: T): float
public "getNameRenderCutoffDistance"(e0: E, t1: T): double
public "getPackedOverlay"(t0: T, float1: float): integer
public "getPackedOverlay"(t0: T, float1: float, float2: float): integer
public "getRenderColor"(t0: T, float1: float, int2: integer): $Color
public "getRenderLayers"(): $List<$GeoRenderLayer<T>>
public "getRenderType"(t0: T, resourceLocation1: $ResourceLocation$$Type, multiBufferSource2: $MultiBufferSource$$Type, float3: float): $RenderType
public "getTextureLocation"(t0: T): $ResourceLocation
public "isShaking"(t0: T): boolean
public "m_6512_"(e0: E): boolean
public "postRender"(poseStack0: $PoseStack$$Type, t1: T, bakedGeoModel2: $BakedGeoModel$$Type, multiBufferSource3: $MultiBufferSource$$Type, vertexConsumer4: $VertexConsumer$$Type, boolean5: boolean, float6: float, int7: integer, int8: integer, float9: float, float10: float, float11: float, float12: float): void
public "preApplyRenderLayers"(poseStack0: $PoseStack$$Type, t1: T, bakedGeoModel2: $BakedGeoModel$$Type, renderType3: $RenderType$$Type, multiBufferSource4: $MultiBufferSource$$Type, vertexConsumer5: $VertexConsumer$$Type, float6: float, int7: integer, int8: integer): void
public "preRender"(poseStack0: $PoseStack$$Type, t1: T, bakedGeoModel2: $BakedGeoModel$$Type, multiBufferSource3: $MultiBufferSource$$Type, vertexConsumer4: $VertexConsumer$$Type, boolean5: boolean, float6: float, int7: integer, int8: integer, float9: float, float10: float, float11: float, float12: float): void
public "reRender"(bakedGeoModel0: $BakedGeoModel$$Type, poseStack1: $PoseStack$$Type, multiBufferSource2: $MultiBufferSource$$Type, t3: T, renderType4: $RenderType$$Type, vertexConsumer5: $VertexConsumer$$Type, float6: float, int7: integer, int8: integer, float9: float, float10: float, float11: float, float12: float): void
public "renderChildBones"(poseStack0: $PoseStack$$Type, t1: T, geoBone2: $GeoBone$$Type, renderType3: $RenderType$$Type, multiBufferSource4: $MultiBufferSource$$Type, vertexConsumer5: $VertexConsumer$$Type, boolean6: boolean, float7: float, int8: integer, int9: integer, float10: float, float11: float, float12: float, float13: float): void
public "renderCube"(poseStack0: $PoseStack$$Type, geoCube1: $GeoCube$$Type, vertexConsumer2: $VertexConsumer$$Type, int3: integer, int4: integer, float5: float, float6: float, float7: float, float8: float): void
public "renderCubesOfBone"(poseStack0: $PoseStack$$Type, geoBone1: $GeoBone$$Type, vertexConsumer2: $VertexConsumer$$Type, int3: integer, int4: integer, float5: float, float6: float, float7: float, float8: float): void
public "renderFinal"(poseStack0: $PoseStack$$Type, t1: T, bakedGeoModel2: $BakedGeoModel$$Type, multiBufferSource3: $MultiBufferSource$$Type, vertexConsumer4: $VertexConsumer$$Type, float5: float, int6: integer, int7: integer, float8: float, float9: float, float10: float, float11: float): void
public "renderLeash"<H extends $Entity, M extends $Mob>(m0: M, float1: float, poseStack2: $PoseStack$$Type, multiBufferSource3: $MultiBufferSource$$Type, h4: H): void
public "renderRecursively"(poseStack0: $PoseStack$$Type, t1: T, geoBone2: $GeoBone$$Type, renderType3: $RenderType$$Type, multiBufferSource4: $MultiBufferSource$$Type, vertexConsumer5: $VertexConsumer$$Type, boolean6: boolean, float7: float, int8: integer, int9: integer, float10: float, float11: float, float12: float, float13: float): void
public "scaleModelForRender"(float0: float, float1: float, poseStack2: $PoseStack$$Type, t3: T, bakedGeoModel4: $BakedGeoModel$$Type, boolean5: boolean, float6: float, int7: integer, int8: integer): void
public "updateAnimatedTextureFrame"(t0: T): void
public "withScale"(float0: float): $GeoReplacedEntityRenderer<E, T>
public "withScale"(float0: float, float1: float): $GeoReplacedEntityRenderer<E, T>
get "animatable"(): T
get "currentEntity"(): E
get "geoModel"(): $GeoModel<T>
get "renderLayers"(): $List<$GeoRenderLayer<T>>
}
}

declare module "software.bernie.geckolib.core.animation.AnimationState" {
import { $RawAnimation$$Type } from "software.bernie.geckolib.core.animation.RawAnimation"
import { $AnimationController, $AnimationController$$Type } from "software.bernie.geckolib.core.animation.AnimationController"
import { $Map } from "java.util.Map"
import { $GeoAnimatable, $GeoAnimatable$$Type } from "software.bernie.geckolib.core.animatable.GeoAnimatable"
import { $PlayState } from "software.bernie.geckolib.core.object.PlayState"
import { $DataTicket, $DataTicket$$Type } from "software.bernie.geckolib.core.object.DataTicket"

export class $AnimationState<T extends $GeoAnimatable = $GeoAnimatable> {
constructor(t0: T, float1: float, float2: float, float3: float, boolean4: boolean)

public "getAnimatable"(): T
public "getAnimationTick"(): double
public "getController"(): $AnimationController<T>
public "getData"<D>(dataTicket0: $DataTicket$$Type<D>): D
public "getExtraData"(): $Map<$DataTicket<any>, any>
public "getLimbSwing"(): float
public "getLimbSwingAmount"(): float
public "getPartialTick"(): float
public "isCurrentAnimation"(rawAnimation0: $RawAnimation$$Type): boolean
public "isCurrentAnimationStage"(string0: string): boolean
public "isMoving"(): boolean
public "resetCurrentAnimation"(): void
public "setAndContinue"(rawAnimation0: $RawAnimation$$Type): $PlayState
public "setAnimation"(rawAnimation0: $RawAnimation$$Type): void
public "setControllerSpeed"(float0: float): void
public "setData"<D>(dataTicket0: $DataTicket$$Type<D>, d1: D): void
public "withController"(animationController0: $AnimationController$$Type<T>): $AnimationState<T>
get "animationTick"(): double
set "animationTick"(value: double)
get "animatable"(): T
get "controller"(): $AnimationController<T>
get "extraData"(): $Map<$DataTicket<any>, any>
get "limbSwing"(): float
get "limbSwingAmount"(): float
get "partialTick"(): float
get "moving"(): boolean
set "andContinue"(value: $RawAnimation$$Type)
set "animation"(value: $RawAnimation$$Type)
set "controllerSpeed"(value: float)
}
}

declare module "software.bernie.geckolib.renderer.GeoEntityRenderer" {
import { $ResourceLocation$$Type } from "net.minecraft.resources.ResourceLocation"
import { $GeoBone$$Type } from "software.bernie.geckolib.cache.object.GeoBone"
import { $GeoRenderer } from "software.bernie.geckolib.renderer.GeoRenderer"
import { $EntityType$$Type } from "net.minecraft.world.entity.EntityType"
import { $RenderType, $RenderType$$Type } from "net.minecraft.client.renderer.RenderType"
import { $GeoModel, $GeoModel$$Type } from "software.bernie.geckolib.model.GeoModel"
import { $PoseStack$$Type } from "com.mojang.blaze3d.vertex.PoseStack"
import { $Color } from "software.bernie.geckolib.core.object.Color"
import { $GeoRenderLayer, $GeoRenderLayer$$Type } from "software.bernie.geckolib.renderer.layer.GeoRenderLayer"
import { $List } from "java.util.List"
import { $Entity, $Entity$$Type } from "net.minecraft.world.entity.Entity"
import { $GeoCube$$Type } from "software.bernie.geckolib.cache.object.GeoCube"
import { $EntityRendererProvider$Context$$Type } from "net.minecraft.client.renderer.entity.EntityRendererProvider$Context"
import { $Vector3f$$Type } from "org.joml.Vector3f"
import { $BakedGeoModel$$Type } from "software.bernie.geckolib.cache.object.BakedGeoModel"
import { $GeoAnimatable, $GeoAnimatable$$Type } from "software.bernie.geckolib.core.animatable.GeoAnimatable"
import { $GeoQuad$$Type } from "software.bernie.geckolib.cache.object.GeoQuad"
import { $Mob, $Mob$$Type } from "net.minecraft.world.entity.Mob"
import { $Matrix4f$$Type } from "org.joml.Matrix4f"
import { $MultiBufferSource$$Type } from "net.minecraft.client.renderer.MultiBufferSource"
import { $VertexConsumer$$Type } from "com.mojang.blaze3d.vertex.VertexConsumer"
import { $EntityRenderer } from "net.minecraft.client.renderer.entity.EntityRenderer"

export class $GeoEntityRenderer<T extends ($Entity & $GeoAnimatable) = ($Entity & $GeoAnimatable)> extends $EntityRenderer<T> implements $GeoRenderer<T> {
constructor(context0: $EntityRendererProvider$Context$$Type, geoModel1: $GeoModel$$Type<T>)
constructor(context0: $EntityRendererProvider$Context$$Type, entityType1: $EntityType$$Type<T>)

public "actuallyRender"(poseStack0: $PoseStack$$Type, t1: T, bakedGeoModel2: $BakedGeoModel$$Type, renderType3: $RenderType$$Type, multiBufferSource4: $MultiBufferSource$$Type, vertexConsumer5: $VertexConsumer$$Type, boolean6: boolean, float7: float, int8: integer, int9: integer, float10: float, float11: float, float12: float, float13: float): void
public "addRenderLayer"(geoRenderLayer0: $GeoRenderLayer$$Type<T>): $GeoEntityRenderer<T>
public "applyRenderLayers"(poseStack0: $PoseStack$$Type, t1: T, bakedGeoModel2: $BakedGeoModel$$Type, renderType3: $RenderType$$Type, multiBufferSource4: $MultiBufferSource$$Type, vertexConsumer5: $VertexConsumer$$Type, float6: float, int7: integer, int8: integer): void
public "applyRenderLayersForBone"(poseStack0: $PoseStack$$Type, t1: T, geoBone2: $GeoBone$$Type, renderType3: $RenderType$$Type, multiBufferSource4: $MultiBufferSource$$Type, vertexConsumer5: $VertexConsumer$$Type, float6: float, int7: integer, int8: integer): void
public "createVerticesOfQuad"(geoQuad0: $GeoQuad$$Type, matrix4f1: $Matrix4f$$Type, vector3f2: $Vector3f$$Type, vertexConsumer3: $VertexConsumer$$Type, int4: integer, int5: integer, float6: float, float7: float, float8: float, float9: float): void
public "defaultRender"(poseStack0: $PoseStack$$Type, t1: T, multiBufferSource2: $MultiBufferSource$$Type, renderType3: $RenderType$$Type, vertexConsumer4: $VertexConsumer$$Type, float5: float, float6: float, int7: integer): void
public "doPostRenderCleanup"(): void
public "fireCompileRenderLayersEvent"(): void
public "firePostRenderEvent"(poseStack0: $PoseStack$$Type, bakedGeoModel1: $BakedGeoModel$$Type, multiBufferSource2: $MultiBufferSource$$Type, float3: float, int4: integer): void
public "firePreRenderEvent"(poseStack0: $PoseStack$$Type, bakedGeoModel1: $BakedGeoModel$$Type, multiBufferSource2: $MultiBufferSource$$Type, float3: float, int4: integer): boolean
public "getGeoModel"(): $GeoModel<T>
public "getInstanceId"(t0: T): long
public "getMotionAnimThreshold"(t0: T): float
public "getNameRenderCutoffDistance"(t0: T): double
public "getPackedOverlay"(t0: T, float1: float, float2: float): integer
public "getPackedOverlay"(t0: T, float1: float): integer
public "getRenderColor"(t0: T, float1: float, int2: integer): $Color
public "getRenderLayers"(): $List<$GeoRenderLayer<T>>
public "getRenderType"(t0: T, resourceLocation1: $ResourceLocation$$Type, multiBufferSource2: $MultiBufferSource$$Type, float3: float): $RenderType
public "isShaking"(t0: T): boolean
public "m_6512_"(t0: T): boolean
public "postRender"(poseStack0: $PoseStack$$Type, t1: T, bakedGeoModel2: $BakedGeoModel$$Type, multiBufferSource3: $MultiBufferSource$$Type, vertexConsumer4: $VertexConsumer$$Type, boolean5: boolean, float6: float, int7: integer, int8: integer, float9: float, float10: float, float11: float, float12: float): void
public "preApplyRenderLayers"(poseStack0: $PoseStack$$Type, t1: T, bakedGeoModel2: $BakedGeoModel$$Type, renderType3: $RenderType$$Type, multiBufferSource4: $MultiBufferSource$$Type, vertexConsumer5: $VertexConsumer$$Type, float6: float, int7: integer, int8: integer): void
public "preRender"(poseStack0: $PoseStack$$Type, t1: T, bakedGeoModel2: $BakedGeoModel$$Type, multiBufferSource3: $MultiBufferSource$$Type, vertexConsumer4: $VertexConsumer$$Type, boolean5: boolean, float6: float, int7: integer, int8: integer, float9: float, float10: float, float11: float, float12: float): void
public "reRender"(bakedGeoModel0: $BakedGeoModel$$Type, poseStack1: $PoseStack$$Type, multiBufferSource2: $MultiBufferSource$$Type, t3: T, renderType4: $RenderType$$Type, vertexConsumer5: $VertexConsumer$$Type, float6: float, int7: integer, int8: integer, float9: float, float10: float, float11: float, float12: float): void
public "renderChildBones"(poseStack0: $PoseStack$$Type, t1: T, geoBone2: $GeoBone$$Type, renderType3: $RenderType$$Type, multiBufferSource4: $MultiBufferSource$$Type, vertexConsumer5: $VertexConsumer$$Type, boolean6: boolean, float7: float, int8: integer, int9: integer, float10: float, float11: float, float12: float, float13: float): void
public "renderCube"(poseStack0: $PoseStack$$Type, geoCube1: $GeoCube$$Type, vertexConsumer2: $VertexConsumer$$Type, int3: integer, int4: integer, float5: float, float6: float, float7: float, float8: float): void
public "renderCubesOfBone"(poseStack0: $PoseStack$$Type, geoBone1: $GeoBone$$Type, vertexConsumer2: $VertexConsumer$$Type, int3: integer, int4: integer, float5: float, float6: float, float7: float, float8: float): void
public "renderFinal"(poseStack0: $PoseStack$$Type, t1: T, bakedGeoModel2: $BakedGeoModel$$Type, multiBufferSource3: $MultiBufferSource$$Type, vertexConsumer4: $VertexConsumer$$Type, float5: float, int6: integer, int7: integer, float8: float, float9: float, float10: float, float11: float): void
public "renderLeash"<E extends $Entity, M extends $Mob>(m0: M, float1: float, poseStack2: $PoseStack$$Type, multiBufferSource3: $MultiBufferSource$$Type, e4: E): void
public "renderRecursively"(poseStack0: $PoseStack$$Type, t1: T, geoBone2: $GeoBone$$Type, renderType3: $RenderType$$Type, multiBufferSource4: $MultiBufferSource$$Type, vertexConsumer5: $VertexConsumer$$Type, boolean6: boolean, float7: float, int8: integer, int9: integer, float10: float, float11: float, float12: float, float13: float): void
public "scaleModelForRender"(float0: float, float1: float, poseStack2: $PoseStack$$Type, t3: T, bakedGeoModel4: $BakedGeoModel$$Type, boolean5: boolean, float6: float, int7: integer, int8: integer): void
public "updateAnimatedTextureFrame"(t0: T): void
public "withScale"(float0: float): $GeoEntityRenderer<T>
public "withScale"(float0: float, float1: float): $GeoEntityRenderer<T>
get "geoModel"(): $GeoModel<T>
get "renderLayers"(): $List<$GeoRenderLayer<T>>
}
}

declare module "software.bernie.geckolib.event.GeoRenderEvent$Item$CompileRenderLayers" {
import { $GeoItemRenderer$$Type } from "software.bernie.geckolib.renderer.GeoItemRenderer"
import { $GeoRenderLayer$$Type } from "software.bernie.geckolib.renderer.layer.GeoRenderLayer"
import { $GeoRenderEvent$Item } from "software.bernie.geckolib.event.GeoRenderEvent$Item"

export class $GeoRenderEvent$Item$CompileRenderLayers extends $GeoRenderEvent$Item {
constructor(geoItemRenderer0: $GeoItemRenderer$$Type<any>)
constructor()

public "addLayer"(geoRenderLayer0: $GeoRenderLayer$$Type): void
}
}

declare module "software.bernie.geckolib.core.animatable.model.CoreBakedGeoModel" {
import { $CoreGeoBone, $CoreGeoBone$$Type } from "software.bernie.geckolib.core.animatable.model.CoreGeoBone"
import { $List } from "java.util.List"
import { $Optional } from "java.util.Optional"

export interface $CoreBakedGeoModel {
"getBone"(string0: string): $Optional<$CoreGeoBone>
"getBones"(): $List<$CoreGeoBone>
"searchForChildBone"(coreGeoBone0: $CoreGeoBone$$Type, string1: string): $CoreGeoBone
get "bones"(): $List<$CoreGeoBone>
}

export namespace $CoreBakedGeoModel {
const probejs$$marker: never
}
export abstract class $CoreBakedGeoModel$$Static implements $CoreBakedGeoModel {
}
}

declare module "software.bernie.geckolib.cache.object.GeoCube" {
import { $Vec3, $Vec3$$Type } from "net.minecraft.world.phys.Vec3"
import { $Record } from "java.lang.Record"
import { $GeoQuad, $GeoQuad$$Type } from "software.bernie.geckolib.cache.object.GeoQuad"

export class $GeoCube extends $Record {
constructor(quads: $GeoQuad$$Type[], pivot: $Vec3$$Type, rotation: $Vec3$$Type, size: $Vec3$$Type, inflate: double, mirror: boolean)

public "inflate"(): double
public "mirror"(): boolean
public "pivot"(): $Vec3
public "quads"(): $GeoQuad[]
public "rotation"(): $Vec3
public "size"(): $Vec3
}
}

declare module "software.bernie.geckolib.core.animation.AnimationController$ParticleKeyframeHandler" {
import { $ParticleKeyframeEvent$$Type } from "software.bernie.geckolib.core.keyframe.event.ParticleKeyframeEvent"
import { $GeoAnimatable } from "software.bernie.geckolib.core.animatable.GeoAnimatable"

export interface $AnimationController$ParticleKeyframeHandler<A extends $GeoAnimatable = $GeoAnimatable> {
"handle"(particleKeyframeEvent0: $ParticleKeyframeEvent$$Type<A>): void
}

export namespace $AnimationController$ParticleKeyframeHandler {
const probejs$$marker: never
}
export abstract class $AnimationController$ParticleKeyframeHandler$$Static<A extends $GeoAnimatable = $GeoAnimatable> implements $AnimationController$ParticleKeyframeHandler<A> {
}
}

declare module "software.bernie.geckolib.event.GeoRenderEvent$ReplacedEntity$CompileRenderLayers" {
import { $GeoRenderLayer$$Type } from "software.bernie.geckolib.renderer.layer.GeoRenderLayer"
import { $GeoRenderEvent$ReplacedEntity } from "software.bernie.geckolib.event.GeoRenderEvent$ReplacedEntity"
import { $GeoReplacedEntityRenderer$$Type } from "software.bernie.geckolib.renderer.GeoReplacedEntityRenderer"

export class $GeoRenderEvent$ReplacedEntity$CompileRenderLayers extends $GeoRenderEvent$ReplacedEntity {
constructor(geoReplacedEntityRenderer0: $GeoReplacedEntityRenderer$$Type<any, any>)
constructor()

public "addLayer"(geoRenderLayer0: $GeoRenderLayer$$Type): void
}
}

declare module "software.bernie.geckolib.event.GeoRenderEvent$Armor$Post" {
import { $GeoArmorRenderer$$Type } from "software.bernie.geckolib.renderer.GeoArmorRenderer"
import { $BakedGeoModel, $BakedGeoModel$$Type } from "software.bernie.geckolib.cache.object.BakedGeoModel"
import { $MultiBufferSource, $MultiBufferSource$$Type } from "net.minecraft.client.renderer.MultiBufferSource"
import { $GeoRenderEvent$Armor } from "software.bernie.geckolib.event.GeoRenderEvent$Armor"
import { $PoseStack, $PoseStack$$Type } from "com.mojang.blaze3d.vertex.PoseStack"

export class $GeoRenderEvent$Armor$Post extends $GeoRenderEvent$Armor {
constructor(geoArmorRenderer0: $GeoArmorRenderer$$Type<any>, poseStack1: $PoseStack$$Type, bakedGeoModel2: $BakedGeoModel$$Type, multiBufferSource3: $MultiBufferSource$$Type, float4: float, int5: integer)
constructor()

public "getBufferSource"(): $MultiBufferSource
public "getModel"(): $BakedGeoModel
public "getPackedLight"(): integer
public "getPartialTick"(): float
public "getPoseStack"(): $PoseStack
get "bufferSource"(): $MultiBufferSource
get "model"(): $BakedGeoModel
get "packedLight"(): integer
get "partialTick"(): float
get "poseStack"(): $PoseStack
}
}

declare module "software.bernie.geckolib.core.animation.AnimatableManager$ControllerRegistrar" {
import { $AnimationController$$Type } from "software.bernie.geckolib.core.animation.AnimationController"

export class $AnimatableManager$ControllerRegistrar {
constructor()

public "add"(...animationController0s: $AnimationController$$Type<any>[]): $AnimatableManager$ControllerRegistrar
public "remove"(string0: string): $AnimatableManager$ControllerRegistrar
}
}

declare module "software.bernie.geckolib.event.GeoRenderEvent$Entity$Post" {
import { $GeoRenderEvent$Entity } from "software.bernie.geckolib.event.GeoRenderEvent$Entity"
import { $BakedGeoModel, $BakedGeoModel$$Type } from "software.bernie.geckolib.cache.object.BakedGeoModel"
import { $GeoEntityRenderer$$Type } from "software.bernie.geckolib.renderer.GeoEntityRenderer"
import { $MultiBufferSource, $MultiBufferSource$$Type } from "net.minecraft.client.renderer.MultiBufferSource"
import { $PoseStack, $PoseStack$$Type } from "com.mojang.blaze3d.vertex.PoseStack"

export class $GeoRenderEvent$Entity$Post extends $GeoRenderEvent$Entity {
constructor(geoEntityRenderer0: $GeoEntityRenderer$$Type<any>, poseStack1: $PoseStack$$Type, bakedGeoModel2: $BakedGeoModel$$Type, multiBufferSource3: $MultiBufferSource$$Type, float4: float, int5: integer)
constructor()

public "getBufferSource"(): $MultiBufferSource
public "getModel"(): $BakedGeoModel
public "getPackedLight"(): integer
public "getPartialTick"(): float
public "getPoseStack"(): $PoseStack
get "bufferSource"(): $MultiBufferSource
get "model"(): $BakedGeoModel
get "packedLight"(): integer
get "partialTick"(): float
get "poseStack"(): $PoseStack
}
}

