declare module "dev.engine_room.flywheel.lib.transform.Transform" {
import { $Direction$$Type } from "net.minecraft.core.Direction"
import { $AxisAngle4f$$Type } from "org.joml.AxisAngle4f"
import { $Affine } from "dev.engine_room.flywheel.lib.transform.Affine"
import { $Matrix4fc$$Type } from "org.joml.Matrix4fc"
import { $PoseStack$$Type } from "com.mojang.blaze3d.vertex.PoseStack"
import { $PoseStack$Pose$$Type } from "com.mojang.blaze3d.vertex.PoseStack$Pose"
import { $Direction$Axis$$Type } from "net.minecraft.core.Direction$Axis"
import { $Vector3ic$$Type } from "org.joml.Vector3ic"
import { $Matrix3fc$$Type } from "org.joml.Matrix3fc"
import { $Vector3fc$$Type } from "org.joml.Vector3fc"
import { $Vec3$$Type } from "net.minecraft.world.phys.Vec3"
import { $Vec3i$$Type } from "net.minecraft.core.Vec3i"
import { $Axis$$Type } from "com.mojang.math.Axis"
import { $Quaternionfc$$Type } from "org.joml.Quaternionfc"

export interface $Transform<Self extends $Transform<Self> = $Transform<Self>> extends $Affine<Self> {
"center"(): Self
"mulNormal"(matrix3fc0: $Matrix3fc$$Type): Self
"mulPose"(matrix4fc0: $Matrix4fc$$Type): Self
"nudge"(seed: integer): Self
"rotate"(radians: float, axis: $Vector3fc$$Type): Self
"rotate"(radians: float, axis: $Axis$$Type): Self
"rotate"(radians: float, axisX: float, axisY: float, axisZ: float): Self
"rotate"(axisAngle: $AxisAngle4f$$Type): Self
"rotate"(quaternionfc0: $Quaternionfc$$Type): Self
"rotate"(radians: float, axis: $Direction$$Type): Self
"rotate"(radians: float, axis: $Direction$Axis$$Type): Self
"rotateAround"(quaternion: $Quaternionfc$$Type, vec: $Vector3fc$$Type): Self
"rotateAround"(quaternion: $Quaternionfc$$Type, x: float, y: float, z: float): Self
"rotateCentered"(radians: float, axisX: float, axisY: float, axisZ: float): Self
"rotateCentered"(radians: float, axis: $Direction$$Type): Self
"rotateCentered"(radians: float, axis: $Vector3fc$$Type): Self
"rotateCentered"(radians: float, axis: $Direction$Axis$$Type): Self
"rotateCentered"(q: $Quaternionfc$$Type): Self
"rotateCentered"(radians: float, axis: $Axis$$Type): Self
"rotateCenteredDegrees"(degrees: float, axis: $Vector3fc$$Type): Self
"rotateCenteredDegrees"(degrees: float, axis: $Direction$Axis$$Type): Self
"rotateCenteredDegrees"(degrees: float, axis: $Direction$$Type): Self
"rotateCenteredDegrees"(degrees: float, axis: $Axis$$Type): Self
"rotateCenteredDegrees"(degrees: float, axisX: float, axisY: float, axisZ: float): Self
"rotateDegrees"(degrees: float, axisX: float, axisY: float, axisZ: float): Self
"rotateDegrees"(degrees: float, axis: $Direction$$Type): Self
"rotateDegrees"(degrees: float, axis: $Axis$$Type): Self
"rotateDegrees"(degrees: float, axis: $Vector3fc$$Type): Self
"rotateDegrees"(degrees: float, axis: $Direction$Axis$$Type): Self
"rotateTo"(from: $Direction$$Type, to: $Direction$$Type): Self
"rotateTo"(from: $Vector3fc$$Type, to: $Vector3fc$$Type): Self
"rotateTo"(fromX: float, fromY: float, fromZ: float, toX: float, toY: float, toZ: float): Self
"rotateToFace"(facing: $Direction$$Type): Self
"rotateX"(radians: float): Self
"rotateXCentered"(radians: float): Self
"rotateXCenteredDegrees"(degrees: float): Self
"rotateXDegrees"(degrees: float): Self
"rotateY"(radians: float): Self
"rotateYCentered"(radians: float): Self
"rotateYCenteredDegrees"(degrees: float): Self
"rotateYDegrees"(degrees: float): Self
"rotateZ"(radians: float): Self
"rotateZCentered"(radians: float): Self
"rotateZCenteredDegrees"(degrees: float): Self
"rotateZDegrees"(degrees: float): Self
"scale"(factors: $Vector3fc$$Type): Self
"scale"(float0: float, float1: float, float2: float): Self
"scale"(factor: float): Self
"scaleX"(factor: float): Self
"scaleY"(factor: float): Self
"scaleZ"(factor: float): Self
"self"(): Self
"transform"(pose: $PoseStack$Pose$$Type): Self
"transform"(stack: $PoseStack$$Type): Self
"transform"(pose: $Matrix4fc$$Type, normal: $Matrix3fc$$Type): Self
"translate"(v: float): Self
"translate"(x: double, y: double, z: double): Self
"translate"(float0: float, float1: float, float2: float): Self
"translate"(vec: $Vector3ic$$Type): Self
"translate"(vec: $Vector3fc$$Type): Self
"translate"(vec: $Vec3i$$Type): Self
"translate"(vec: $Vec3$$Type): Self
"translateBack"(vec: $Vec3i$$Type): Self
"translateBack"(x: double, y: double, z: double): Self
"translateBack"(v: float): Self
"translateBack"(x: float, y: float, z: float): Self
"translateBack"(vec: $Vec3$$Type): Self
"translateBack"(vec: $Vector3fc$$Type): Self
"translateBack"(vec: $Vector3ic$$Type): Self
"translateX"(x: float): Self
"translateY"(y: float): Self
"translateZ"(z: float): Self
"uncenter"(): Self
}

export namespace $Transform {
const probejs$$marker: never
}
export abstract class $Transform$$Static<Self extends $Transform<Self> = $Transform<Self>> implements $Transform<Self> {
}
}

declare module "dev.engine_room.flywheel.api.visualization.BlockEntityVisualizer" {
import { $BlockEntityVisual } from "dev.engine_room.flywheel.api.visual.BlockEntityVisual"
import { $BlockEntity, $BlockEntity$$Type } from "net.minecraft.world.level.block.entity.BlockEntity"
import { $VisualizationContext$$Type } from "dev.engine_room.flywheel.api.visualization.VisualizationContext"

export interface $BlockEntityVisualizer<T extends $BlockEntity = $BlockEntity> {
"createVisual"(visualizationContext0: $VisualizationContext$$Type, t1: T, float2: float): $BlockEntityVisual<T>
"skipVanillaRender"(t0: T): boolean
}

export namespace $BlockEntityVisualizer {
const probejs$$marker: never
}
export abstract class $BlockEntityVisualizer$$Static<T extends $BlockEntity = $BlockEntity> implements $BlockEntityVisualizer<T> {
}
}

declare module "dev.engine_room.flywheel.api.instance.Instance" {
import { $InstanceHandle } from "dev.engine_room.flywheel.api.instance.InstanceHandle"
import { $InstanceType } from "dev.engine_room.flywheel.api.instance.InstanceType"

export interface $Instance {
"delete"(): void
"handle"(): $InstanceHandle
"setChanged"(): void
"setVisible"(visible: boolean): void
"type"(): $InstanceType<any>
set "visible"(value: boolean)
}

export namespace $Instance {
const probejs$$marker: never
}
export abstract class $Instance$$Static implements $Instance {
}
}

declare module "dev.engine_room.flywheel.api.instance.InstanceWriter" {
import { $Instance, $Instance$$Type } from "dev.engine_room.flywheel.api.instance.Instance"

export interface $InstanceWriter<I extends $Instance = $Instance> {
"write"(long0: long, i1: I): void
}

export namespace $InstanceWriter {
const probejs$$marker: never
}
export abstract class $InstanceWriter$$Static<I extends $Instance = $Instance> implements $InstanceWriter<I> {
}
}

declare module "dev.engine_room.flywheel.api.model.Model$ConfiguredMesh" {
import { $Material, $Material$$Type } from "dev.engine_room.flywheel.api.material.Material"
import { $Record } from "java.lang.Record"
import { $Mesh, $Mesh$$Type } from "dev.engine_room.flywheel.api.model.Mesh"

export class $Model$ConfiguredMesh extends $Record {
constructor(material: $Material$$Type, mesh: $Mesh$$Type)

public "material"(): $Material
public "mesh"(): $Mesh
}
}

declare module "dev.engine_room.flywheel.lib.transform.TransformStack" {
import { $Direction$$Type } from "net.minecraft.core.Direction"
import { $Transform } from "dev.engine_room.flywheel.lib.transform.Transform"
import { $AxisAngle4f$$Type } from "org.joml.AxisAngle4f"
import { $Matrix4fc$$Type } from "org.joml.Matrix4fc"
import { $PoseTransformStack } from "dev.engine_room.flywheel.lib.transform.PoseTransformStack"
import { $PoseStack$$Type } from "com.mojang.blaze3d.vertex.PoseStack"
import { $PoseStack$Pose$$Type } from "com.mojang.blaze3d.vertex.PoseStack$Pose"
import { $Direction$Axis$$Type } from "net.minecraft.core.Direction$Axis"
import { $Vector3ic$$Type } from "org.joml.Vector3ic"
import { $Matrix3fc$$Type } from "org.joml.Matrix3fc"
import { $Vector3fc$$Type } from "org.joml.Vector3fc"
import { $Vec3$$Type } from "net.minecraft.world.phys.Vec3"
import { $Vec3i$$Type } from "net.minecraft.core.Vec3i"
import { $Axis$$Type } from "com.mojang.math.Axis"
import { $Quaternionfc$$Type } from "org.joml.Quaternionfc"

export interface $TransformStack<Self extends $TransformStack<Self> = $TransformStack<Self>> extends $Transform<Self> {
"center"(): Self
"mulNormal"(matrix3fc0: $Matrix3fc$$Type): Self
"mulPose"(matrix4fc0: $Matrix4fc$$Type): Self
"nudge"(seed: integer): Self
"popPose"(): Self
"pushPose"(): Self
"rotate"(radians: float, axis: $Vector3fc$$Type): Self
"rotate"(radians: float, axis: $Axis$$Type): Self
"rotate"(radians: float, axisX: float, axisY: float, axisZ: float): Self
"rotate"(axisAngle: $AxisAngle4f$$Type): Self
"rotate"(quaternionfc0: $Quaternionfc$$Type): Self
"rotate"(radians: float, axis: $Direction$$Type): Self
"rotate"(radians: float, axis: $Direction$Axis$$Type): Self
"rotateAround"(quaternion: $Quaternionfc$$Type, vec: $Vector3fc$$Type): Self
"rotateAround"(quaternion: $Quaternionfc$$Type, x: float, y: float, z: float): Self
"rotateCentered"(radians: float, axisX: float, axisY: float, axisZ: float): Self
"rotateCentered"(radians: float, axis: $Direction$$Type): Self
"rotateCentered"(radians: float, axis: $Vector3fc$$Type): Self
"rotateCentered"(radians: float, axis: $Direction$Axis$$Type): Self
"rotateCentered"(q: $Quaternionfc$$Type): Self
"rotateCentered"(radians: float, axis: $Axis$$Type): Self
"rotateCenteredDegrees"(degrees: float, axis: $Vector3fc$$Type): Self
"rotateCenteredDegrees"(degrees: float, axis: $Direction$Axis$$Type): Self
"rotateCenteredDegrees"(degrees: float, axis: $Direction$$Type): Self
"rotateCenteredDegrees"(degrees: float, axis: $Axis$$Type): Self
"rotateCenteredDegrees"(degrees: float, axisX: float, axisY: float, axisZ: float): Self
"rotateDegrees"(degrees: float, axisX: float, axisY: float, axisZ: float): Self
"rotateDegrees"(degrees: float, axis: $Direction$$Type): Self
"rotateDegrees"(degrees: float, axis: $Axis$$Type): Self
"rotateDegrees"(degrees: float, axis: $Vector3fc$$Type): Self
"rotateDegrees"(degrees: float, axis: $Direction$Axis$$Type): Self
"rotateTo"(from: $Direction$$Type, to: $Direction$$Type): Self
"rotateTo"(from: $Vector3fc$$Type, to: $Vector3fc$$Type): Self
"rotateTo"(fromX: float, fromY: float, fromZ: float, toX: float, toY: float, toZ: float): Self
"rotateToFace"(facing: $Direction$$Type): Self
"rotateX"(radians: float): Self
"rotateXCentered"(radians: float): Self
"rotateXCenteredDegrees"(degrees: float): Self
"rotateXDegrees"(degrees: float): Self
"rotateY"(radians: float): Self
"rotateYCentered"(radians: float): Self
"rotateYCenteredDegrees"(degrees: float): Self
"rotateYDegrees"(degrees: float): Self
"rotateZ"(radians: float): Self
"rotateZCentered"(radians: float): Self
"rotateZCenteredDegrees"(degrees: float): Self
"rotateZDegrees"(degrees: float): Self
"scale"(factors: $Vector3fc$$Type): Self
"scale"(float0: float, float1: float, float2: float): Self
"scale"(factor: float): Self
"scaleX"(factor: float): Self
"scaleY"(factor: float): Self
"scaleZ"(factor: float): Self
"self"(): Self
"transform"(pose: $PoseStack$Pose$$Type): Self
"transform"(stack: $PoseStack$$Type): Self
"transform"(pose: $Matrix4fc$$Type, normal: $Matrix3fc$$Type): Self
"translate"(v: float): Self
"translate"(x: double, y: double, z: double): Self
"translate"(float0: float, float1: float, float2: float): Self
"translate"(vec: $Vector3ic$$Type): Self
"translate"(vec: $Vector3fc$$Type): Self
"translate"(vec: $Vec3i$$Type): Self
"translate"(vec: $Vec3$$Type): Self
"translateBack"(vec: $Vec3i$$Type): Self
"translateBack"(x: double, y: double, z: double): Self
"translateBack"(v: float): Self
"translateBack"(x: float, y: float, z: float): Self
"translateBack"(vec: $Vec3$$Type): Self
"translateBack"(vec: $Vector3fc$$Type): Self
"translateBack"(vec: $Vector3ic$$Type): Self
"translateX"(x: float): Self
"translateY"(y: float): Self
"translateZ"(z: float): Self
"uncenter"(): Self
}

export namespace $TransformStack {
function of(stack: $PoseStack$$Type): $PoseTransformStack
}
export abstract class $TransformStack$$Static<Self extends $TransformStack<Self> = $TransformStack<Self>> implements $TransformStack<Self> {
static "of"(stack: $PoseStack$$Type): $PoseTransformStack
}
}

declare module "dev.engine_room.flywheel.api.material.CutoutShader" {
import { $ResourceLocation } from "net.minecraft.resources.ResourceLocation"

export interface $CutoutShader {
"source"(): $ResourceLocation
}

export namespace $CutoutShader {
const probejs$$marker: never
}
export abstract class $CutoutShader$$Static implements $CutoutShader {
}
}

declare module "dev.engine_room.flywheel.api.material.WriteMask" {
import { $Enum } from "java.lang.Enum"

export class $WriteMask extends $Enum<$WriteMask> {
static readonly "COLOR": $WriteMask
static readonly "COLOR_DEPTH": $WriteMask
static readonly "DEPTH": $WriteMask

public "color"(): boolean
public "depth"(): boolean
public static "valueOf"(name: string): $WriteMask
public static "values"(): $WriteMask[]
}
}

declare module "dev.engine_room.flywheel.lib.transform.Affine" {
import { $Translate } from "dev.engine_room.flywheel.lib.transform.Translate"
import { $Direction$$Type } from "net.minecraft.core.Direction"
import { $AxisAngle4f$$Type } from "org.joml.AxisAngle4f"
import { $Rotate } from "dev.engine_room.flywheel.lib.transform.Rotate"
import { $Scale } from "dev.engine_room.flywheel.lib.transform.Scale"
import { $Direction$Axis$$Type } from "net.minecraft.core.Direction$Axis"
import { $Vector3ic$$Type } from "org.joml.Vector3ic"
import { $Vector3fc$$Type } from "org.joml.Vector3fc"
import { $Vec3$$Type } from "net.minecraft.world.phys.Vec3"
import { $Vec3i$$Type } from "net.minecraft.core.Vec3i"
import { $Axis$$Type } from "com.mojang.math.Axis"
import { $Quaternionfc$$Type } from "org.joml.Quaternionfc"

export interface $Affine<Self extends $Affine<Self> = $Affine<Self>> extends $Translate<Self>, $Rotate<Self>, $Scale<Self> {
"center"(): Self
"nudge"(seed: integer): Self
"rotate"(radians: float, axis: $Vector3fc$$Type): Self
"rotate"(radians: float, axis: $Axis$$Type): Self
"rotate"(radians: float, axisX: float, axisY: float, axisZ: float): Self
"rotate"(axisAngle: $AxisAngle4f$$Type): Self
"rotate"(quaternionfc0: $Quaternionfc$$Type): Self
"rotate"(radians: float, axis: $Direction$$Type): Self
"rotate"(radians: float, axis: $Direction$Axis$$Type): Self
"rotateAround"(quaternion: $Quaternionfc$$Type, vec: $Vector3fc$$Type): Self
"rotateAround"(quaternion: $Quaternionfc$$Type, x: float, y: float, z: float): Self
"rotateCentered"(radians: float, axisX: float, axisY: float, axisZ: float): Self
"rotateCentered"(radians: float, axis: $Direction$$Type): Self
"rotateCentered"(radians: float, axis: $Vector3fc$$Type): Self
"rotateCentered"(radians: float, axis: $Direction$Axis$$Type): Self
"rotateCentered"(q: $Quaternionfc$$Type): Self
"rotateCentered"(radians: float, axis: $Axis$$Type): Self
"rotateCenteredDegrees"(degrees: float, axis: $Vector3fc$$Type): Self
"rotateCenteredDegrees"(degrees: float, axis: $Direction$Axis$$Type): Self
"rotateCenteredDegrees"(degrees: float, axis: $Direction$$Type): Self
"rotateCenteredDegrees"(degrees: float, axis: $Axis$$Type): Self
"rotateCenteredDegrees"(degrees: float, axisX: float, axisY: float, axisZ: float): Self
"rotateDegrees"(degrees: float, axisX: float, axisY: float, axisZ: float): Self
"rotateDegrees"(degrees: float, axis: $Direction$$Type): Self
"rotateDegrees"(degrees: float, axis: $Axis$$Type): Self
"rotateDegrees"(degrees: float, axis: $Vector3fc$$Type): Self
"rotateDegrees"(degrees: float, axis: $Direction$Axis$$Type): Self
"rotateTo"(from: $Direction$$Type, to: $Direction$$Type): Self
"rotateTo"(from: $Vector3fc$$Type, to: $Vector3fc$$Type): Self
"rotateTo"(fromX: float, fromY: float, fromZ: float, toX: float, toY: float, toZ: float): Self
"rotateToFace"(facing: $Direction$$Type): Self
"rotateX"(radians: float): Self
"rotateXCentered"(radians: float): Self
"rotateXCenteredDegrees"(degrees: float): Self
"rotateXDegrees"(degrees: float): Self
"rotateY"(radians: float): Self
"rotateYCentered"(radians: float): Self
"rotateYCenteredDegrees"(degrees: float): Self
"rotateYDegrees"(degrees: float): Self
"rotateZ"(radians: float): Self
"rotateZCentered"(radians: float): Self
"rotateZCenteredDegrees"(degrees: float): Self
"rotateZDegrees"(degrees: float): Self
"scale"(factors: $Vector3fc$$Type): Self
"scale"(float0: float, float1: float, float2: float): Self
"scale"(factor: float): Self
"scaleX"(factor: float): Self
"scaleY"(factor: float): Self
"scaleZ"(factor: float): Self
"self"(): Self
"translate"(v: float): Self
"translate"(x: double, y: double, z: double): Self
"translate"(float0: float, float1: float, float2: float): Self
"translate"(vec: $Vector3ic$$Type): Self
"translate"(vec: $Vector3fc$$Type): Self
"translate"(vec: $Vec3i$$Type): Self
"translate"(vec: $Vec3$$Type): Self
"translateBack"(vec: $Vec3i$$Type): Self
"translateBack"(x: double, y: double, z: double): Self
"translateBack"(v: float): Self
"translateBack"(x: float, y: float, z: float): Self
"translateBack"(vec: $Vec3$$Type): Self
"translateBack"(vec: $Vector3fc$$Type): Self
"translateBack"(vec: $Vector3ic$$Type): Self
"translateX"(x: float): Self
"translateY"(y: float): Self
"translateZ"(z: float): Self
"uncenter"(): Self
}

export namespace $Affine {
const probejs$$marker: never
}
export abstract class $Affine$$Static<Self extends $Affine<Self> = $Affine<Self>> implements $Affine<Self> {
}
}

declare module "dev.engine_room.flywheel.api.model.Model" {
import { $List } from "java.util.List"
import { $Vector4fc } from "org.joml.Vector4fc"
import { $Model$ConfiguredMesh } from "dev.engine_room.flywheel.api.model.Model$ConfiguredMesh"

export interface $Model {
"boundingSphere"(): $Vector4fc
"meshes"(): $List<$Model$ConfiguredMesh>
}

export namespace $Model {
const probejs$$marker: never
}
export abstract class $Model$$Static implements $Model {
}
}

declare module "dev.engine_room.flywheel.backend.mixin.AbstractClientPlayerAccessor" {
import { $PlayerInfo } from "net.minecraft.client.multiplayer.PlayerInfo"

export interface $AbstractClientPlayerAccessor {
"flywheel$getPlayerInfo"(): $PlayerInfo
}

export namespace $AbstractClientPlayerAccessor {
const probejs$$marker: never
}
export abstract class $AbstractClientPlayerAccessor$$Static implements $AbstractClientPlayerAccessor {
}
}

declare module "dev.engine_room.flywheel.api.material.Material" {
import { $ResourceLocation } from "net.minecraft.resources.ResourceLocation"
import { $CutoutShader } from "dev.engine_room.flywheel.api.material.CutoutShader"
import { $FogShader } from "dev.engine_room.flywheel.api.material.FogShader"
import { $WriteMask } from "dev.engine_room.flywheel.api.material.WriteMask"
import { $DepthTest } from "dev.engine_room.flywheel.api.material.DepthTest"
import { $MaterialShaders } from "dev.engine_room.flywheel.api.material.MaterialShaders"
import { $Transparency } from "dev.engine_room.flywheel.api.material.Transparency"
import { $CardinalLightingMode } from "dev.engine_room.flywheel.api.material.CardinalLightingMode"
import { $LightShader } from "dev.engine_room.flywheel.api.material.LightShader"

export interface $Material {
"backfaceCulling"(): boolean
"blur"(): boolean
"cardinalLightingMode"(): $CardinalLightingMode
"cutout"(): $CutoutShader
"depthTest"(): $DepthTest
"fog"(): $FogShader
"light"(): $LightShader
"mipmap"(): boolean
"polygonOffset"(): boolean
"shaders"(): $MaterialShaders
"texture"(): $ResourceLocation
"transparency"(): $Transparency
"useLight"(): boolean
"useOverlay"(): boolean
"writeMask"(): $WriteMask
}

export namespace $Material {
const probejs$$marker: never
}
export abstract class $Material$$Static implements $Material {
}
}

declare module "dev.engine_room.flywheel.api.vertex.MutableVertexList" {
import { $VertexList } from "dev.engine_room.flywheel.api.vertex.VertexList"

export interface $MutableVertexList extends $VertexList {
"a"(int0: integer, float1: float): void
"a"(int0: integer): float
"b"(int0: integer, float1: float): void
"b"(int0: integer): float
"g"(int0: integer, float1: float): void
"g"(int0: integer): float
"isEmpty"(): boolean
"light"(int0: integer, int1: integer): void
"light"(int0: integer): integer
"normalX"(int0: integer, float1: float): void
"normalX"(int0: integer): float
"normalY"(int0: integer, float1: float): void
"normalY"(int0: integer): float
"normalZ"(int0: integer, float1: float): void
"normalZ"(int0: integer): float
"overlay"(int0: integer, int1: integer): void
"overlay"(int0: integer): integer
"r"(int0: integer, float1: float): void
"r"(int0: integer): float
"u"(int0: integer, float1: float): void
"u"(int0: integer): float
"v"(int0: integer, float1: float): void
"v"(int0: integer): float
"vertexCount"(): integer
"write"(dst: $MutableVertexList$$Type, srcIndex: integer, dstIndex: integer): void
"write"(dst: $MutableVertexList$$Type, srcStartIndex: integer, dstStartIndex: integer, vertexCount: integer): void
"writeAll"(dst: $MutableVertexList$$Type): void
"x"(int0: integer, float1: float): void
"x"(int0: integer): float
"y"(int0: integer, float1: float): void
"y"(int0: integer): float
"z"(int0: integer, float1: float): void
"z"(int0: integer): float
get "empty"(): boolean
}

export namespace $MutableVertexList {
const probejs$$marker: never
}
export abstract class $MutableVertexList$$Static implements $MutableVertexList {
}
}

declare module "dev.engine_room.flywheel.api.event.ReloadLevelRendererEvent" {
import { $Event } from "net.minecraftforge.eventbus.api.Event"
import { $ClientLevel, $ClientLevel$$Type } from "net.minecraft.client.multiplayer.ClientLevel"

export class $ReloadLevelRendererEvent extends $Event {
constructor()
constructor(level: $ClientLevel$$Type)

public "level"(): $ClientLevel
}
}

declare module "dev.engine_room.flywheel.api.visual.EntityVisual" {
import { $Entity } from "net.minecraft.world.entity.Entity"
import { $Visual } from "dev.engine_room.flywheel.api.visual.Visual"

export interface $EntityVisual<T extends $Entity = $Entity> extends $Visual {
"delete"(): void
"update"(float0: float): void
}

export namespace $EntityVisual {
const probejs$$marker: never
}
export abstract class $EntityVisual$$Static<T extends $Entity = $Entity> implements $EntityVisual<T> {
}
}

declare module "dev.engine_room.flywheel.lib.transform.Rotate" {
import { $Direction$Axis$$Type } from "net.minecraft.core.Direction$Axis"
import { $Vector3fc$$Type } from "org.joml.Vector3fc"
import { $Direction$$Type } from "net.minecraft.core.Direction"
import { $AxisAngle4f$$Type } from "org.joml.AxisAngle4f"
import { $Axis$$Type } from "com.mojang.math.Axis"
import { $Quaternionfc$$Type } from "org.joml.Quaternionfc"

export interface $Rotate<Self extends $Rotate<Self> = $Rotate<Self>> {
"rotate"(radians: float, axis: $Vector3fc$$Type): Self
"rotate"(radians: float, axis: $Axis$$Type): Self
"rotate"(radians: float, axisX: float, axisY: float, axisZ: float): Self
"rotate"(axisAngle: $AxisAngle4f$$Type): Self
"rotate"(quaternionfc0: $Quaternionfc$$Type): Self
"rotate"(radians: float, axis: $Direction$$Type): Self
"rotate"(radians: float, axis: $Direction$Axis$$Type): Self
"rotateDegrees"(degrees: float, axisX: float, axisY: float, axisZ: float): Self
"rotateDegrees"(degrees: float, axis: $Direction$$Type): Self
"rotateDegrees"(degrees: float, axis: $Axis$$Type): Self
"rotateDegrees"(degrees: float, axis: $Vector3fc$$Type): Self
"rotateDegrees"(degrees: float, axis: $Direction$Axis$$Type): Self
"rotateTo"(from: $Direction$$Type, to: $Direction$$Type): Self
"rotateTo"(from: $Vector3fc$$Type, to: $Vector3fc$$Type): Self
"rotateTo"(fromX: float, fromY: float, fromZ: float, toX: float, toY: float, toZ: float): Self
"rotateToFace"(facing: $Direction$$Type): Self
"rotateX"(radians: float): Self
"rotateXDegrees"(degrees: float): Self
"rotateY"(radians: float): Self
"rotateYDegrees"(degrees: float): Self
"rotateZ"(radians: float): Self
"rotateZDegrees"(degrees: float): Self
"self"(): Self
}

export namespace $Rotate {
const probejs$$marker: never
}
export abstract class $Rotate$$Static<Self extends $Rotate<Self> = $Rotate<Self>> implements $Rotate<Self> {
}
}

declare module "dev.engine_room.flywheel.api.visualization.VisualizationContext" {
import { $VisualEmbedding } from "dev.engine_room.flywheel.api.visualization.VisualEmbedding"
import { $Vec3i, $Vec3i$$Type } from "net.minecraft.core.Vec3i"
import { $InstancerProvider } from "dev.engine_room.flywheel.api.instance.InstancerProvider"

export interface $VisualizationContext {
"createEmbedding"(vec3i0: $Vec3i$$Type): $VisualEmbedding
"instancerProvider"(): $InstancerProvider
"renderOrigin"(): $Vec3i
}

export namespace $VisualizationContext {
const probejs$$marker: never
}
export abstract class $VisualizationContext$$Static implements $VisualizationContext {
}
}

declare module "dev.engine_room.flywheel.api.visual.Visual" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $Visual {
"delete"(): void
"update"(float0: float): void
}

export namespace $Visual {
const probejs$$marker: never
}
export abstract class $Visual$$Static implements $Visual {
}
}

declare module "dev.engine_room.flywheel.impl.mixin.ModelPartAccessor" {
import { $PoseStack$Pose$$Type } from "com.mojang.blaze3d.vertex.PoseStack$Pose"
import { $Map } from "java.util.Map"
import { $VertexConsumer$$Type } from "com.mojang.blaze3d.vertex.VertexConsumer"
import { $ModelPart } from "net.minecraft.client.model.geom.ModelPart"

export interface $ModelPartAccessor {
"flywheel$children"(): $Map<string, $ModelPart>
"flywheel$compile"(pose0: $PoseStack$Pose$$Type, vertexConsumer1: $VertexConsumer$$Type, int2: integer, int3: integer, float4: float, float5: float, float6: float, float7: float): void
}

export namespace $ModelPartAccessor {
const probejs$$marker: never
}
export abstract class $ModelPartAccessor$$Static implements $ModelPartAccessor {
}
}

declare module "dev.engine_room.flywheel.api.layout.Layout$Element" {
import { $ElementType } from "dev.engine_room.flywheel.api.layout.ElementType"

export interface $Layout$Element {
"byteOffset"(): integer
"name"(): string
"paddedByteSize"(): integer
"paddingByteSize"(): integer
"type"(): $ElementType
}

export namespace $Layout$Element {
const probejs$$marker: never
}
export abstract class $Layout$Element$$Static implements $Layout$Element {
}
}

declare module "dev.engine_room.flywheel.impl.extension.PoseStackExtension" {
import { $PoseTransformStack } from "dev.engine_room.flywheel.lib.transform.PoseTransformStack"

export interface $PoseStackExtension {
"flywheel$transformStack"(): $PoseTransformStack
}

export namespace $PoseStackExtension {
const probejs$$marker: never
}
export abstract class $PoseStackExtension$$Static implements $PoseStackExtension {
}
}

declare module "dev.engine_room.flywheel.api.material.LightShader" {
import { $ResourceLocation } from "net.minecraft.resources.ResourceLocation"

export interface $LightShader {
"source"(): $ResourceLocation
}

export namespace $LightShader {
const probejs$$marker: never
}
export abstract class $LightShader$$Static implements $LightShader {
}
}

declare module "dev.engine_room.flywheel.api.material.FogShader" {
import { $ResourceLocation } from "net.minecraft.resources.ResourceLocation"

export interface $FogShader {
"source"(): $ResourceLocation
}

export namespace $FogShader {
const probejs$$marker: never
}
export abstract class $FogShader$$Static implements $FogShader {
}
}

declare module "dev.engine_room.flywheel.lib.transform.Translate" {
import { $Vector3ic$$Type } from "org.joml.Vector3ic"
import { $Vector3fc$$Type } from "org.joml.Vector3fc"
import { $Vec3$$Type } from "net.minecraft.world.phys.Vec3"
import { $Vec3i$$Type } from "net.minecraft.core.Vec3i"

export interface $Translate<Self extends $Translate<Self> = $Translate<Self>> {
"center"(): Self
"nudge"(seed: integer): Self
"translate"(v: float): Self
"translate"(x: double, y: double, z: double): Self
"translate"(float0: float, float1: float, float2: float): Self
"translate"(vec: $Vector3ic$$Type): Self
"translate"(vec: $Vector3fc$$Type): Self
"translate"(vec: $Vec3i$$Type): Self
"translate"(vec: $Vec3$$Type): Self
"translateBack"(vec: $Vec3i$$Type): Self
"translateBack"(x: double, y: double, z: double): Self
"translateBack"(v: float): Self
"translateBack"(x: float, y: float, z: float): Self
"translateBack"(vec: $Vec3$$Type): Self
"translateBack"(vec: $Vector3fc$$Type): Self
"translateBack"(vec: $Vector3ic$$Type): Self
"translateX"(x: float): Self
"translateY"(y: float): Self
"translateZ"(z: float): Self
"uncenter"(): Self
}

export namespace $Translate {
const CENTER: float
}
export abstract class $Translate$$Static<Self extends $Translate<Self> = $Translate<Self>> implements $Translate<Self> {
static readonly "CENTER": float

}
}

declare module "dev.engine_room.flywheel.api.instance.InstanceType" {
import { $ResourceLocation } from "net.minecraft.resources.ResourceLocation"
import { $Layout } from "dev.engine_room.flywheel.api.layout.Layout"
import { $InstanceHandle$$Type } from "dev.engine_room.flywheel.api.instance.InstanceHandle"
import { $Instance } from "dev.engine_room.flywheel.api.instance.Instance"
import { $InstanceWriter } from "dev.engine_room.flywheel.api.instance.InstanceWriter"

export interface $InstanceType<I extends $Instance = $Instance> {
"create"(instanceHandle0: $InstanceHandle$$Type): I
"cullShader"(): $ResourceLocation
"layout"(): $Layout
"vertexShader"(): $ResourceLocation
"writer"(): $InstanceWriter<I>
}

export namespace $InstanceType {
const probejs$$marker: never
}
export abstract class $InstanceType$$Static<I extends $Instance = $Instance> implements $InstanceType<I> {
}
}

declare module "dev.engine_room.flywheel.backend.mixin.LevelRendererAccessor" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $LevelRendererAccessor {
"flywheel$getTicks"(): integer
}

export namespace $LevelRendererAccessor {
const probejs$$marker: never
}
export abstract class $LevelRendererAccessor$$Static implements $LevelRendererAccessor {
}
}

declare module "dev.engine_room.flywheel.api.model.IndexSequence" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $IndexSequence {
"fill"(long0: long, int1: integer): void
}

export namespace $IndexSequence {
const probejs$$marker: never
}
export abstract class $IndexSequence$$Static implements $IndexSequence {
}
}

declare module "dev.engine_room.flywheel.api.visualization.VisualEmbedding" {
import { $Matrix3fc$$Type } from "org.joml.Matrix3fc"
import { $Vec3i, $Vec3i$$Type } from "net.minecraft.core.Vec3i"
import { $InstancerProvider } from "dev.engine_room.flywheel.api.instance.InstancerProvider"
import { $Matrix4fc$$Type } from "org.joml.Matrix4fc"
import { $VisualizationContext } from "dev.engine_room.flywheel.api.visualization.VisualizationContext"

export interface $VisualEmbedding extends $VisualizationContext {
"createEmbedding"(vec3i0: $Vec3i$$Type): $VisualEmbedding
"delete"(): void
"instancerProvider"(): $InstancerProvider
"renderOrigin"(): $Vec3i
"transforms"(matrix4fc0: $Matrix4fc$$Type, matrix3fc1: $Matrix3fc$$Type): void
}

export namespace $VisualEmbedding {
const probejs$$marker: never
}
export abstract class $VisualEmbedding$$Static implements $VisualEmbedding {
}
}

declare module "dev.engine_room.flywheel.lib.model.baked.PartialModel" {
import { $BakedModel } from "net.minecraft.client.resources.model.BakedModel"
import { $ResourceLocation, $ResourceLocation$$Type } from "net.minecraft.resources.ResourceLocation"
import { $AccessorPartialModel } from "com.railwayteam.railways.mixin.client.AccessorPartialModel"

export class $PartialModel implements $AccessorPartialModel {
public "get"(): $BakedModel
public "modelLocation"(): $ResourceLocation
public static "of"(modelLocation: $ResourceLocation$$Type): $PartialModel
}
}

declare module "dev.engine_room.flywheel.api.visualization.VisualizationLevel" {
import { $LevelHeightAccessor } from "net.minecraft.world.level.LevelHeightAccessor"
import { $AABB$$Type } from "net.minecraft.world.phys.AABB"
import { $LivingEntity, $LivingEntity$$Type } from "net.minecraft.world.entity.LivingEntity"
import { $Direction$$Type } from "net.minecraft.core.Direction"
import { $ParticleOptions$$Type } from "net.minecraft.core.particles.ParticleOptions"
import { $BiFunction$$Type } from "java.util.function.BiFunction"
import { $EntityTypeTest$$Type } from "net.minecraft.world.level.entity.EntityTypeTest"
import { $ChunkSource } from "net.minecraft.world.level.chunk.ChunkSource"
import { $Registry } from "net.minecraft.core.Registry"
import { $ClipBlockStateContext$$Type } from "net.minecraft.world.level.ClipBlockStateContext"
import { $BlockGetter } from "net.minecraft.world.level.BlockGetter"
import { $TargetingConditions$$Type } from "net.minecraft.world.entity.ai.targeting.TargetingConditions"
import { $MinecraftServer } from "net.minecraft.server.MinecraftServer"
import { $Holder } from "net.minecraft.core.Holder"
import { $LightLayer$$Type } from "net.minecraft.world.level.LightLayer"
import { $GameEvent$Context$$Type } from "net.minecraft.world.level.gameevent.GameEvent$Context"
import { $DifficultyInstance } from "net.minecraft.world.DifficultyInstance"
import { $BiomeManager } from "net.minecraft.world.level.biome.BiomeManager"
import { $Predicate$$Type } from "java.util.function.Predicate"
import { $BlockHitResult } from "net.minecraft.world.phys.BlockHitResult"
import { $RandomSource } from "net.minecraft.util.RandomSource"
import { $UUID$$Type } from "java.util.UUID"
import { $BlockEntity, $BlockEntity$$Type } from "net.minecraft.world.level.block.entity.BlockEntity"
import { $RegistryAccess } from "net.minecraft.core.RegistryAccess"
import { $ChunkAccess } from "net.minecraft.world.level.chunk.ChunkAccess"
import { $Player, $Player$$Type } from "net.minecraft.world.entity.player.Player"
import { $FeatureFlagSet } from "net.minecraft.world.flag.FeatureFlagSet"
import { $List, $List$$Type } from "java.util.List"
import { $Stream } from "java.util.stream.Stream"
import { $LevelLightEngine } from "net.minecraft.world.level.lighting.LevelLightEngine"
import { $BlockPos, $BlockPos$$Type } from "net.minecraft.core.BlockPos"
import { $BlockEntityType$$Type } from "net.minecraft.world.level.block.entity.BlockEntityType"
import { $SoundEvent$$Type } from "net.minecraft.sounds.SoundEvent"
import { $FluidState, $FluidState$$Type } from "net.minecraft.world.level.material.FluidState"
import { $Optional } from "java.util.Optional"
import { $LevelAccessor } from "net.minecraft.world.level.LevelAccessor"
import { $Heightmap$Types$$Type } from "net.minecraft.world.level.levelgen.Heightmap$Types"
import { $VoxelShape, $VoxelShape$$Type } from "net.minecraft.world.phys.shapes.VoxelShape"
import { $SoundSource$$Type } from "net.minecraft.sounds.SoundSource"
import { $CollisionContext$$Type } from "net.minecraft.world.phys.shapes.CollisionContext"
import { $BlockState, $BlockState$$Type } from "net.minecraft.world.level.block.state.BlockState"
import { $GameEvent$$Type } from "net.minecraft.world.level.gameevent.GameEvent"
import { $DimensionType } from "net.minecraft.world.level.dimension.DimensionType"
import { $Biome } from "net.minecraft.world.level.biome.Biome"
import { $Supplier$$Type } from "java.util.function.Supplier"
import { $Function$$Type } from "java.util.function.Function"
import { $Iterable } from "java.lang.Iterable"
import { $LevelData } from "net.minecraft.world.level.storage.LevelData"
import { $ColorResolver$$Type } from "net.minecraft.world.level.ColorResolver"
import { $ClipContext$$Type } from "net.minecraft.world.level.ClipContext"
import { $WorldBorder } from "net.minecraft.world.level.border.WorldBorder"
import { $Fluid, $Fluid$$Type } from "net.minecraft.world.level.material.Fluid"
import { $Difficulty } from "net.minecraft.world.Difficulty"
import { $HolderLookup } from "net.minecraft.core.HolderLookup"
import { $ModelDataManager } from "net.minecraftforge.client.model.data.ModelDataManager"
import { $LevelTickAccess } from "net.minecraft.world.ticks.LevelTickAccess"
import { $ResourceKey$$Type } from "net.minecraft.resources.ResourceKey"
import { $TickPriority$$Type } from "net.minecraft.world.ticks.TickPriority"
import { $Entity, $Entity$$Type } from "net.minecraft.world.entity.Entity"
import { $Vec3, $Vec3$$Type } from "net.minecraft.world.phys.Vec3"
import { $Block, $Block$$Type } from "net.minecraft.world.level.block.Block"
import { $Class$$Type } from "java.lang.Class"
import { $ChunkStatus$$Type } from "net.minecraft.world.level.chunk.ChunkStatus"

export interface $VisualizationLevel extends $LevelAccessor {
"addFreshEntity"(entity0: $Entity$$Type): boolean
"addParticle"(particleOptions0: $ParticleOptions$$Type, double1: double, double2: double, double3: double, double4: double, double5: double, double6: double): void
"blockUpdated"(blockPos0: $BlockPos$$Type, block1: $Block$$Type): void
"canSeeSky"(blockPos0: $BlockPos$$Type): boolean
"canSeeSkyFromBelowWater"(blockPos0: $BlockPos$$Type): boolean
"clip"(clipContext0: $ClipContext$$Type): $BlockHitResult
"clipWithInteractionOverride"(vec30: $Vec3$$Type, vec31: $Vec3$$Type, blockPos2: $BlockPos$$Type, voxelShape3: $VoxelShape$$Type, blockState4: $BlockState$$Type): $BlockHitResult
"collidesWithSuffocatingBlock"(entity0: $Entity$$Type, aABB1: $AABB$$Type): boolean
"containsAnyLiquid"(aABB0: $AABB$$Type): boolean
"dayTime"(): long
"destroyBlock"(blockPos0: $BlockPos$$Type, boolean1: boolean, entity2: $Entity$$Type, int3: integer): boolean
"destroyBlock"(blockPos0: $BlockPos$$Type, boolean1: boolean): boolean
"destroyBlock"(blockPos0: $BlockPos$$Type, boolean1: boolean, entity2: $Entity$$Type): boolean
"dimensionType"(): $DimensionType
"enabledFeatures"(): $FeatureFlagSet
"findFreePosition"(entity0: $Entity$$Type, voxelShape1: $VoxelShape$$Type, vec32: $Vec3$$Type, double3: double, double4: double, double5: double): $Optional<$Vec3>
"findSupportingBlock"(entity0: $Entity$$Type, aABB1: $AABB$$Type): $Optional<$BlockPos>
"gameEvent"(gameEvent0: $GameEvent$$Type, vec31: $Vec3$$Type, context2: $GameEvent$Context$$Type): void
"gameEvent"(gameEvent0: $GameEvent$$Type, blockPos1: $BlockPos$$Type, context2: $GameEvent$Context$$Type): void
"gameEvent"(entity0: $Entity$$Type, gameEvent1: $GameEvent$$Type, blockPos2: $BlockPos$$Type): void
"gameEvent"(entity0: $Entity$$Type, gameEvent1: $GameEvent$$Type, vec32: $Vec3$$Type): void
"getBestNeighborSignal"(blockPos0: $BlockPos$$Type): integer
"getBiome"(blockPos0: $BlockPos$$Type): $Holder<$Biome>
"getBiomeManager"(): $BiomeManager
"getBlockCollisions"(entity0: $Entity$$Type, aABB1: $AABB$$Type): $Iterable<$VoxelShape>
"getBlockEntity"<T extends $BlockEntity>(blockPos0: $BlockPos$$Type, blockEntityType1: $BlockEntityType$$Type<T>): $Optional<T>
"getBlockEntity"(blockPos0: $BlockPos$$Type): $BlockEntity
"getBlockFloorHeight"(voxelShape0: $VoxelShape$$Type, supplier1: $Supplier$$Type<$VoxelShape>): double
"getBlockFloorHeight"(blockPos0: $BlockPos$$Type): double
"getBlockState"(blockPos0: $BlockPos$$Type): $BlockState
"getBlockStates"(aABB0: $AABB$$Type): $Stream<$BlockState>
"getBlockStatesIfLoaded"(aABB0: $AABB$$Type): $Stream<$BlockState>
"getBlockTicks"(): $LevelTickAccess<$Block>
"getBlockTint"(blockPos0: $BlockPos$$Type, colorResolver1: $ColorResolver$$Type): integer
"getBrightness"(lightLayer0: $LightLayer$$Type, blockPos1: $BlockPos$$Type): integer
"getChunk"(int0: integer, int1: integer, chunkStatus2: $ChunkStatus$$Type, boolean3: boolean): $ChunkAccess
"getChunk"(blockPos0: $BlockPos$$Type): $ChunkAccess
"getChunk"(int0: integer, int1: integer, chunkStatus2: $ChunkStatus$$Type): $ChunkAccess
"getChunk"(int0: integer, int1: integer): $ChunkAccess
"getChunkForCollisions"(int0: integer, int1: integer): $BlockGetter
"getChunkSource"(): $ChunkSource
"getCollisions"(entity0: $Entity$$Type, aABB1: $AABB$$Type): $Iterable<$VoxelShape>
"getControlInputSignal"(blockPos0: $BlockPos$$Type, direction1: $Direction$$Type, boolean2: boolean): integer
"getCurrentDifficultyAt"(blockPos0: $BlockPos$$Type): $DifficultyInstance
"getDifficulty"(): $Difficulty
"getDirectSignal"(blockPos0: $BlockPos$$Type, direction1: $Direction$$Type): integer
"getDirectSignalTo"(blockPos0: $BlockPos$$Type): integer
"getEntities"(entity0: $Entity$$Type, aABB1: $AABB$$Type): $List<$Entity>
"getEntities"<T extends $Entity>(entityTypeTest0: $EntityTypeTest$$Type<$Entity$$Type, T>, aABB1: $AABB$$Type, predicate2: $Predicate$$Type<T>): $List<T>
"getEntities"(entity0: $Entity$$Type, aABB1: $AABB$$Type, predicate2: $Predicate$$Type<$Entity$$Type>): $List<$Entity>
"getEntitiesOfClass"<T extends $Entity>(class0: $Class$$Type<T>, aABB1: $AABB$$Type): $List<T>
"getEntitiesOfClass"<T extends $Entity>(class0: $Class$$Type<T>, aABB1: $AABB$$Type, predicate2: $Predicate$$Type<T>): $List<T>
"getEntityCollisions"(entity0: $Entity$$Type, aABB1: $AABB$$Type): $List<$VoxelShape>
"getExistingBlockEntity"(blockPos0: $BlockPos$$Type): $BlockEntity
"getFluidState"(blockPos0: $BlockPos$$Type): $FluidState
"getFluidTicks"(): $LevelTickAccess<$Fluid>
"getHeight"(types0: $Heightmap$Types$$Type, int1: integer, int2: integer): integer
"getHeight"(): integer
"getHeightmapPos"(types0: $Heightmap$Types$$Type, blockPos1: $BlockPos$$Type): $BlockPos
"getLevelData"(): $LevelData
"getLightEmission"(blockPos0: $BlockPos$$Type): integer
"getLightEngine"(): $LevelLightEngine
/** @deprecated */
"getLightLevelDependentMagicValue"(blockPos0: $BlockPos$$Type): float
"getLoadedChunk"(int0: integer, int1: integer): $ChunkAccess
"getMaxBuildHeight"(): integer
"getMaxLightLevel"(): integer
"getMaxLocalRawBrightness"(blockPos0: $BlockPos$$Type): integer
"getMaxLocalRawBrightness"(blockPos0: $BlockPos$$Type, int1: integer): integer
"getMaxSection"(): integer
"getMinBuildHeight"(): integer
"getMinSection"(): integer
"getModelDataManager"(): $ModelDataManager
"getMoonBrightness"(): float
"getMoonPhase"(): integer
"getNearbyEntities"<T extends $LivingEntity>(class0: $Class$$Type<T>, targetingConditions1: $TargetingConditions$$Type, livingEntity2: $LivingEntity$$Type, aABB3: $AABB$$Type): $List<T>
"getNearbyPlayers"(targetingConditions0: $TargetingConditions$$Type, livingEntity1: $LivingEntity$$Type, aABB2: $AABB$$Type): $List<$Player>
"getNearestEntity"<T extends $LivingEntity>(list0: $List$$Type<T>, targetingConditions1: $TargetingConditions$$Type, livingEntity2: $LivingEntity$$Type, double3: double, double4: double, double5: double): T
"getNearestEntity"<T extends $LivingEntity>(class0: $Class$$Type<T>, targetingConditions1: $TargetingConditions$$Type, livingEntity2: $LivingEntity$$Type, double3: double, double4: double, double5: double, aABB6: $AABB$$Type): T
"getNearestPlayer"(double0: double, double1: double, double2: double, double3: double, predicate4: $Predicate$$Type<$Entity$$Type>): $Player
"getNearestPlayer"(entity0: $Entity$$Type, double1: double): $Player
"getNearestPlayer"(double0: double, double1: double, double2: double, double3: double, boolean4: boolean): $Player
"getNearestPlayer"(targetingConditions0: $TargetingConditions$$Type, livingEntity1: $LivingEntity$$Type): $Player
"getNearestPlayer"(targetingConditions0: $TargetingConditions$$Type, livingEntity1: $LivingEntity$$Type, double2: double, double3: double, double4: double): $Player
"getNearestPlayer"(targetingConditions0: $TargetingConditions$$Type, double1: double, double2: double, double3: double): $Player
"getNoiseBiome"(int0: integer, int1: integer, int2: integer): $Holder<$Biome>
"getPathfindingCostFromLightLevels"(blockPos0: $BlockPos$$Type): float
"getPlayerByUUID"(uUID0: $UUID$$Type): $Player
"getRandom"(): $RandomSource
"getRawBrightness"(blockPos0: $BlockPos$$Type, int1: integer): integer
/** @deprecated */
"getSeaLevel"(): integer
"getSectionIndex"(int0: integer): integer
"getSectionIndexFromSectionY"(int0: integer): integer
"getSectionYFromSectionIndex"(int0: integer): integer
"getSectionsCount"(): integer
"getServer"(): $MinecraftServer
"getShade"(direction0: $Direction$$Type, boolean1: boolean): float
"getShade"(float0: float, float1: float, float2: float, boolean3: boolean): float
"getSignal"(blockPos0: $BlockPos$$Type, direction1: $Direction$$Type): integer
"getSkyDarken"(): integer
"getTimeOfDay"(float0: float): float
"getUncachedNoiseBiome"(int0: integer, int1: integer, int2: integer): $Holder<$Biome>
"getWorldBorder"(): $WorldBorder
"hasChunk"(int0: integer, int1: integer): boolean
/** @deprecated */
"hasChunkAt"(blockPos0: $BlockPos$$Type): boolean
/** @deprecated */
"hasChunkAt"(int0: integer, int1: integer): boolean
/** @deprecated */
"hasChunksAt"(int0: integer, int1: integer, int2: integer, int3: integer, int4: integer, int5: integer): boolean
/** @deprecated */
"hasChunksAt"(blockPos0: $BlockPos$$Type, blockPos1: $BlockPos$$Type): boolean
/** @deprecated */
"hasChunksAt"(int0: integer, int1: integer, int2: integer, int3: integer): boolean
"hasNearbyAlivePlayer"(double0: double, double1: double, double2: double, double3: double): boolean
"hasNeighborSignal"(blockPos0: $BlockPos$$Type): boolean
"hasSignal"(blockPos0: $BlockPos$$Type, direction1: $Direction$$Type): boolean
"holderLookup"<T>(resourceKey0: $ResourceKey$$Type<$Registry<T>>): $HolderLookup<T>
"isAreaLoaded"(blockPos0: $BlockPos$$Type, int1: integer): boolean
"isBlockInLine"(clipBlockStateContext0: $ClipBlockStateContext$$Type): $BlockHitResult
"isClientSide"(): boolean
"isEmptyBlock"(blockPos0: $BlockPos$$Type): boolean
"isFluidAtPosition"(blockPos0: $BlockPos$$Type, predicate1: $Predicate$$Type<$FluidState$$Type>): boolean
"isOutsideBuildHeight"(blockPos0: $BlockPos$$Type): boolean
"isOutsideBuildHeight"(int0: integer): boolean
"isStateAtPosition"(blockPos0: $BlockPos$$Type, predicate1: $Predicate$$Type<$BlockState$$Type>): boolean
"isUnobstructed"(entity0: $Entity$$Type, voxelShape1: $VoxelShape$$Type): boolean
"isUnobstructed"(blockState0: $BlockState$$Type, blockPos1: $BlockPos$$Type, collisionContext2: $CollisionContext$$Type): boolean
"isUnobstructed"(entity0: $Entity$$Type): boolean
"isWaterAt"(blockPos0: $BlockPos$$Type): boolean
"levelEvent"(int0: integer, blockPos1: $BlockPos$$Type, int2: integer): void
"levelEvent"(player0: $Player$$Type, int1: integer, blockPos2: $BlockPos$$Type, int3: integer): void
"neighborShapeChanged"(direction0: $Direction$$Type, blockState1: $BlockState$$Type, blockPos2: $BlockPos$$Type, blockPos3: $BlockPos$$Type, int4: integer, int5: integer): void
"nextSubTickCount"(): long
"noCollision"(entity0: $Entity$$Type, aABB1: $AABB$$Type): boolean
"noCollision"(entity0: $Entity$$Type): boolean
"noCollision"(aABB0: $AABB$$Type): boolean
"playSound"(player0: $Player$$Type, blockPos1: $BlockPos$$Type, soundEvent2: $SoundEvent$$Type, soundSource3: $SoundSource$$Type, float4: float, float5: float): void
"playSound"(player0: $Player$$Type, blockPos1: $BlockPos$$Type, soundEvent2: $SoundEvent$$Type, soundSource3: $SoundSource$$Type): void
"players"(): $List<$Player>
"registryAccess"(): $RegistryAccess
"removeBlock"(blockPos0: $BlockPos$$Type, boolean1: boolean): boolean
"scheduleTick"(blockPos0: $BlockPos$$Type, block1: $Block$$Type, int2: integer, tickPriority3: $TickPriority$$Type): void
"scheduleTick"(blockPos0: $BlockPos$$Type, block1: $Block$$Type, int2: integer): void
"scheduleTick"(blockPos0: $BlockPos$$Type, fluid1: $Fluid$$Type, int2: integer, tickPriority3: $TickPriority$$Type): void
"scheduleTick"(blockPos0: $BlockPos$$Type, fluid1: $Fluid$$Type, int2: integer): void
"setBlock"(blockPos0: $BlockPos$$Type, blockState1: $BlockState$$Type, int2: integer): boolean
"setBlock"(blockPos0: $BlockPos$$Type, blockState1: $BlockState$$Type, int2: integer, int3: integer): boolean
"supportsVisualization"(): boolean
get "biomeManager"(): $BiomeManager
get "blockTicks"(): $LevelTickAccess<$Block>
get "chunkSource"(): $ChunkSource
get "difficulty"(): $Difficulty
get "fluidTicks"(): $LevelTickAccess<$Fluid>
get "height"(): integer
get "levelData"(): $LevelData
get "lightEngine"(): $LevelLightEngine
get "maxBuildHeight"(): integer
get "maxLightLevel"(): integer
get "maxSection"(): integer
get "minBuildHeight"(): integer
get "minSection"(): integer
get "modelDataManager"(): $ModelDataManager
get "moonBrightness"(): float
get "moonPhase"(): integer
get "random"(): $RandomSource
get "seaLevel"(): integer
get "sectionsCount"(): integer
get "server"(): $MinecraftServer
get "skyDarken"(): integer
get "worldBorder"(): $WorldBorder
get "clientSide"(): boolean
}

export namespace $VisualizationLevel {
function create(int0: integer, int1: integer): $LevelHeightAccessor
function traverseBlocks<T, C>(vec30: $Vec3$$Type, vec31: $Vec3$$Type, c2: C, biFunction3: $BiFunction$$Type<C, $BlockPos$$Type, T>, function4: $Function$$Type<C, T>): T
}
export abstract class $VisualizationLevel$$Static implements $VisualizationLevel {
static "create"(int0: integer, int1: integer): $LevelHeightAccessor
static "traverseBlocks"<T, C>(vec30: $Vec3$$Type, vec31: $Vec3$$Type, c2: C, biFunction3: $BiFunction$$Type<C, $BlockPos$$Type, T>, function4: $Function$$Type<C, T>): T
}
}

declare module "dev.engine_room.flywheel.api.instance.InstanceHandle" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $InstanceHandle {
"isVisible"(): boolean
"setChanged"(): void
"setDeleted"(): void
"setVisible"(boolean0: boolean): void
get "visible"(): boolean
set "visible"(value: boolean)
}

export namespace $InstanceHandle {
const probejs$$marker: never
}
export abstract class $InstanceHandle$$Static implements $InstanceHandle {
}
}

declare module "dev.engine_room.flywheel.impl.extension.LevelExtension" {
import { $Entity } from "net.minecraft.world.entity.Entity"
import { $Level$$Type } from "net.minecraft.world.level.Level"
import { $Iterable } from "java.lang.Iterable"

export interface $LevelExtension {
"flywheel$getAllLoadedEntities"(): $Iterable<$Entity>
}

export namespace $LevelExtension {
function getAllLoadedEntities(level: $Level$$Type): $Iterable<$Entity>
}
export abstract class $LevelExtension$$Static implements $LevelExtension {
static "getAllLoadedEntities"(level: $Level$$Type): $Iterable<$Entity>
}
}

declare module "dev.engine_room.flywheel.api.instance.Instancer" {
import { $Instance, $Instance$$Type } from "dev.engine_room.flywheel.api.instance.Instance"

export interface $Instancer<I extends $Instance = $Instance> {
"createInstance"(): I
"createInstances"(arr: I[]): void
"stealInstance"(i0: I): void
}

export namespace $Instancer {
const probejs$$marker: never
}
export abstract class $Instancer$$Static<I extends $Instance = $Instance> implements $Instancer<I> {
}
}

declare module "dev.engine_room.flywheel.api.visual.BlockEntityVisual" {
import { $Consumer$$Type } from "java.util.function.Consumer"
import { $Visual } from "dev.engine_room.flywheel.api.visual.Visual"
import { $Instance$$Type } from "dev.engine_room.flywheel.api.instance.Instance"
import { $BlockEntity } from "net.minecraft.world.level.block.entity.BlockEntity"

export interface $BlockEntityVisual<T extends $BlockEntity = $BlockEntity> extends $Visual {
"collectCrumblingInstances"(consumer0: $Consumer$$Type<$Instance$$Type>): void
"delete"(): void
"update"(float0: float): void
}

export namespace $BlockEntityVisual {
const probejs$$marker: never
}
export abstract class $BlockEntityVisual$$Static<T extends $BlockEntity = $BlockEntity> implements $BlockEntityVisual<T> {
}
}

declare module "dev.engine_room.flywheel.api.model.Mesh" {
import { $MutableVertexList$$Type } from "dev.engine_room.flywheel.api.vertex.MutableVertexList"
import { $Vector4fc } from "org.joml.Vector4fc"
import { $IndexSequence } from "dev.engine_room.flywheel.api.model.IndexSequence"

export interface $Mesh {
"boundingSphere"(): $Vector4fc
"indexCount"(): integer
"indexSequence"(): $IndexSequence
"vertexCount"(): integer
"write"(mutableVertexList0: $MutableVertexList$$Type): void
}

export namespace $Mesh {
const probejs$$marker: never
}
export abstract class $Mesh$$Static implements $Mesh {
}
}

declare module "dev.engine_room.flywheel.impl.extension.BlockEntityTypeExtension" {
import { $BlockEntityVisualizer, $BlockEntityVisualizer$$Type } from "dev.engine_room.flywheel.api.visualization.BlockEntityVisualizer"
import { $BlockEntity } from "net.minecraft.world.level.block.entity.BlockEntity"

export interface $BlockEntityTypeExtension<T extends $BlockEntity = $BlockEntity> {
"flywheel$getVisualizer"(): $BlockEntityVisualizer<T>
"flywheel$setVisualizer"(blockEntityVisualizer0: $BlockEntityVisualizer$$Type<T>): void
}

export namespace $BlockEntityTypeExtension {
const probejs$$marker: never
}
export abstract class $BlockEntityTypeExtension$$Static<T extends $BlockEntity = $BlockEntity> implements $BlockEntityTypeExtension<T> {
}
}

declare module "dev.engine_room.flywheel.impl.extension.EntityTypeExtension" {
import { $EntityVisualizer, $EntityVisualizer$$Type } from "dev.engine_room.flywheel.api.visualization.EntityVisualizer"
import { $Entity } from "net.minecraft.world.entity.Entity"

export interface $EntityTypeExtension<T extends $Entity = $Entity> {
"flywheel$getVisualizer"(): $EntityVisualizer<T>
"flywheel$setVisualizer"(entityVisualizer0: $EntityVisualizer$$Type<T>): void
}

export namespace $EntityTypeExtension {
const probejs$$marker: never
}
export abstract class $EntityTypeExtension$$Static<T extends $Entity = $Entity> implements $EntityTypeExtension<T> {
}
}

declare module "dev.engine_room.flywheel.lib.transform.Scale" {
import { $Vector3fc$$Type } from "org.joml.Vector3fc"

export interface $Scale<Self extends $Scale<Self> = $Scale<Self>> {
"scale"(factors: $Vector3fc$$Type): Self
"scale"(float0: float, float1: float, float2: float): Self
"scale"(factor: float): Self
"scaleX"(factor: float): Self
"scaleY"(factor: float): Self
"scaleZ"(factor: float): Self
}

export namespace $Scale {
const probejs$$marker: never
}
export abstract class $Scale$$Static<Self extends $Scale<Self> = $Scale<Self>> implements $Scale<Self> {
}
}

declare module "dev.engine_room.flywheel.api.instance.InstancerProvider" {
import { $Instancer } from "dev.engine_room.flywheel.api.instance.Instancer"
import { $Instance, $Instance$$Type } from "dev.engine_room.flywheel.api.instance.Instance"
import { $Model$$Type } from "dev.engine_room.flywheel.api.model.Model"
import { $InstanceType$$Type } from "dev.engine_room.flywheel.api.instance.InstanceType"

export interface $InstancerProvider {
"instancer"<I extends $Instance>(instanceType0: $InstanceType$$Type<I>, model1: $Model$$Type, int2: integer): $Instancer<I>
"instancer"<I extends $Instance>(type: $InstanceType$$Type<I>, model: $Model$$Type): $Instancer<I>
}

export namespace $InstancerProvider {
const probejs$$marker: never
}
export abstract class $InstancerProvider$$Static implements $InstancerProvider {
}
}

declare module "dev.engine_room.flywheel.api.material.MaterialShaders" {
import { $ResourceLocation } from "net.minecraft.resources.ResourceLocation"

export interface $MaterialShaders {
"fragmentSource"(): $ResourceLocation
"vertexSource"(): $ResourceLocation
}

export namespace $MaterialShaders {
const probejs$$marker: never
}
export abstract class $MaterialShaders$$Static implements $MaterialShaders {
}
}

declare module "dev.engine_room.flywheel.api.visualization.EntityVisualizer" {
import { $Entity, $Entity$$Type } from "net.minecraft.world.entity.Entity"
import { $EntityVisual } from "dev.engine_room.flywheel.api.visual.EntityVisual"
import { $VisualizationContext$$Type } from "dev.engine_room.flywheel.api.visualization.VisualizationContext"

export interface $EntityVisualizer<T extends $Entity = $Entity> {
"createVisual"(visualizationContext0: $VisualizationContext$$Type, t1: T, float2: float): $EntityVisual<T>
"skipVanillaRender"(t0: T): boolean
}

export namespace $EntityVisualizer {
const probejs$$marker: never
}
export abstract class $EntityVisualizer$$Static<T extends $Entity = $Entity> implements $EntityVisualizer<T> {
}
}

declare module "dev.engine_room.flywheel.impl.mixin.PoseStackAccessor" {
import { $PoseStack$Pose } from "com.mojang.blaze3d.vertex.PoseStack$Pose"
import { $Deque } from "java.util.Deque"

export interface $PoseStackAccessor {
"flywheel$getPoseStack"(): $Deque<$PoseStack$Pose>
}

export namespace $PoseStackAccessor {
const probejs$$marker: never
}
export abstract class $PoseStackAccessor$$Static implements $PoseStackAccessor {
}
}

declare module "dev.engine_room.flywheel.api.vertex.VertexList" {
import { $MutableVertexList$$Type } from "dev.engine_room.flywheel.api.vertex.MutableVertexList"

export interface $VertexList {
"a"(int0: integer): float
"b"(int0: integer): float
"g"(int0: integer): float
"isEmpty"(): boolean
"light"(int0: integer): integer
"normalX"(int0: integer): float
"normalY"(int0: integer): float
"normalZ"(int0: integer): float
"overlay"(int0: integer): integer
"r"(int0: integer): float
"u"(int0: integer): float
"v"(int0: integer): float
"vertexCount"(): integer
"write"(dst: $MutableVertexList$$Type, srcIndex: integer, dstIndex: integer): void
"write"(dst: $MutableVertexList$$Type, srcStartIndex: integer, dstStartIndex: integer, vertexCount: integer): void
"writeAll"(dst: $MutableVertexList$$Type): void
"x"(int0: integer): float
"y"(int0: integer): float
"z"(int0: integer): float
get "empty"(): boolean
}

export namespace $VertexList {
const probejs$$marker: never
}
export abstract class $VertexList$$Static implements $VertexList {
}
}

declare module "dev.engine_room.flywheel.api.layout.Layout" {
import { $List } from "java.util.List"
import { $Map } from "java.util.Map"
import { $Layout$Element } from "dev.engine_room.flywheel.api.layout.Layout$Element"

export interface $Layout {
"asMap"(): $Map<string, $Layout$Element>
"byteAlignment"(): integer
"byteSize"(): integer
"elements"(): $List<$Layout$Element>
}

export namespace $Layout {
const MAX_ELEMENT_NAME_LENGTH: integer
}
export abstract class $Layout$$Static implements $Layout {
static readonly "MAX_ELEMENT_NAME_LENGTH": integer

}
}

declare module "dev.engine_room.flywheel.api.event.EndClientResourceReloadEvent" {
import { $Throwable, $Throwable$$Type } from "java.lang.Throwable"
import { $Minecraft, $Minecraft$$Type } from "net.minecraft.client.Minecraft"
import { $IModBusEvent } from "net.minecraftforge.fml.event.IModBusEvent"
import { $ResourceManager, $ResourceManager$$Type } from "net.minecraft.server.packs.resources.ResourceManager"
import { $Optional, $Optional$$Type } from "java.util.Optional"
import { $Event } from "net.minecraftforge.eventbus.api.Event"

export class $EndClientResourceReloadEvent extends $Event implements $IModBusEvent {
constructor(minecraft: $Minecraft$$Type, resourceManager: $ResourceManager$$Type, initialReload: boolean, error: $Optional$$Type<$Throwable$$Type>)
constructor()

public "error"(): $Optional<$Throwable>
public "isInitialReload"(): boolean
public "minecraft"(): $Minecraft
public "resourceManager"(): $ResourceManager
get "initialReload"(): boolean
}
}

declare module "dev.engine_room.flywheel.api.layout.ElementType" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $ElementType {
"byteAlignment"(): integer
"byteSize"(): integer
}

export namespace $ElementType {
const probejs$$marker: never
}
export abstract class $ElementType$$Static implements $ElementType {
}
}

declare module "dev.engine_room.flywheel.api.material.Transparency" {
import { $Enum } from "java.lang.Enum"

export class $Transparency extends $Enum<$Transparency> {
static readonly "ADDITIVE": $Transparency
static readonly "CRUMBLING": $Transparency
static readonly "GLINT": $Transparency
static readonly "LIGHTNING": $Transparency
static readonly "OPAQUE": $Transparency
static readonly "ORDER_INDEPENDENT": $Transparency
static readonly "TRANSLUCENT": $Transparency

public static "valueOf"(name: string): $Transparency
public static "values"(): $Transparency[]
}
}

declare module "dev.engine_room.flywheel.lib.transform.PoseTransformStack" {
import { $Direction$$Type } from "net.minecraft.core.Direction"
import { $AxisAngle4f$$Type } from "org.joml.AxisAngle4f"
import { $Matrix4fc$$Type } from "org.joml.Matrix4fc"
import { $PoseStack, $PoseStack$$Type } from "com.mojang.blaze3d.vertex.PoseStack"
import { $PoseStack$Pose$$Type } from "com.mojang.blaze3d.vertex.PoseStack$Pose"
import { $TransformStack } from "dev.engine_room.flywheel.lib.transform.TransformStack"
import { $Direction$Axis$$Type } from "net.minecraft.core.Direction$Axis"
import { $Vector3ic$$Type } from "org.joml.Vector3ic"
import { $Matrix3fc$$Type } from "org.joml.Matrix3fc"
import { $Vector3fc$$Type } from "org.joml.Vector3fc"
import { $Vec3$$Type } from "net.minecraft.world.phys.Vec3"
import { $Vec3i$$Type } from "net.minecraft.core.Vec3i"
import { $Axis$$Type } from "com.mojang.math.Axis"
import { $Quaternionfc$$Type } from "org.joml.Quaternionfc"

export class $PoseTransformStack implements $TransformStack<$PoseTransformStack> {
constructor(stack: $PoseStack$$Type)

public "center"(): $PoseTransformStack
public "mulNormal"(normal: $Matrix3fc$$Type): $PoseTransformStack
public "nudge"(seed: integer): $PoseTransformStack
public static "of"(stack: $PoseStack$$Type): $PoseTransformStack
public "popPose"(): $PoseTransformStack
public "rotate"(radians: float, axis: $Vector3fc$$Type): $PoseTransformStack
public "rotate"(radians: float, axis: $Axis$$Type): $PoseTransformStack
public "rotate"(radians: float, axisX: float, axisY: float, axisZ: float): $PoseTransformStack
public "rotate"(axisAngle: $AxisAngle4f$$Type): $PoseTransformStack
public "rotate"(radians: float, axis: $Direction$$Type): $PoseTransformStack
public "rotate"(radians: float, axis: $Direction$Axis$$Type): $PoseTransformStack
public "rotateAround"(quaternion: $Quaternionfc$$Type, vec: $Vector3fc$$Type): $PoseTransformStack
public "rotateCentered"(radians: float, axisX: float, axisY: float, axisZ: float): $PoseTransformStack
public "rotateCentered"(radians: float, axis: $Direction$$Type): $PoseTransformStack
public "rotateCentered"(radians: float, axis: $Vector3fc$$Type): $PoseTransformStack
public "rotateCentered"(radians: float, axis: $Direction$Axis$$Type): $PoseTransformStack
public "rotateCentered"(q: $Quaternionfc$$Type): $PoseTransformStack
public "rotateCentered"(radians: float, axis: $Axis$$Type): $PoseTransformStack
public "rotateCenteredDegrees"(degrees: float, axis: $Vector3fc$$Type): $PoseTransformStack
public "rotateCenteredDegrees"(degrees: float, axis: $Direction$Axis$$Type): $PoseTransformStack
public "rotateCenteredDegrees"(degrees: float, axis: $Direction$$Type): $PoseTransformStack
public "rotateCenteredDegrees"(degrees: float, axis: $Axis$$Type): $PoseTransformStack
public "rotateCenteredDegrees"(degrees: float, axisX: float, axisY: float, axisZ: float): $PoseTransformStack
public "rotateDegrees"(degrees: float, axisX: float, axisY: float, axisZ: float): $PoseTransformStack
public "rotateDegrees"(degrees: float, axis: $Direction$$Type): $PoseTransformStack
public "rotateDegrees"(degrees: float, axis: $Axis$$Type): $PoseTransformStack
public "rotateDegrees"(degrees: float, axis: $Vector3fc$$Type): $PoseTransformStack
public "rotateDegrees"(degrees: float, axis: $Direction$Axis$$Type): $PoseTransformStack
public "rotateTo"(from: $Direction$$Type, to: $Direction$$Type): $PoseTransformStack
public "rotateTo"(from: $Vector3fc$$Type, to: $Vector3fc$$Type): $PoseTransformStack
public "rotateTo"(fromX: float, fromY: float, fromZ: float, toX: float, toY: float, toZ: float): $PoseTransformStack
public "rotateToFace"(facing: $Direction$$Type): $PoseTransformStack
public "rotateX"(radians: float): $PoseTransformStack
public "rotateXCentered"(radians: float): $PoseTransformStack
public "rotateXCenteredDegrees"(degrees: float): $PoseTransformStack
public "rotateXDegrees"(degrees: float): $PoseTransformStack
public "rotateY"(radians: float): $PoseTransformStack
public "rotateYCentered"(radians: float): $PoseTransformStack
public "rotateYCenteredDegrees"(degrees: float): $PoseTransformStack
public "rotateYDegrees"(degrees: float): $PoseTransformStack
public "rotateZ"(radians: float): $PoseTransformStack
public "rotateZCentered"(radians: float): $PoseTransformStack
public "rotateZCenteredDegrees"(degrees: float): $PoseTransformStack
public "rotateZDegrees"(degrees: float): $PoseTransformStack
public "scale"(factors: $Vector3fc$$Type): $PoseTransformStack
public "scale"(factor: float): $PoseTransformStack
public "scaleX"(factor: float): $PoseTransformStack
public "scaleY"(factor: float): $PoseTransformStack
public "scaleZ"(factor: float): $PoseTransformStack
public "self"(): $PoseTransformStack
public "transform"(pose: $PoseStack$Pose$$Type): $PoseTransformStack
public "transform"(stack: $PoseStack$$Type): $PoseTransformStack
public "transform"(pose: $Matrix4fc$$Type, normal: $Matrix3fc$$Type): $PoseTransformStack
public "translate"(v: float): $PoseTransformStack
public "translate"(x: double, y: double, z: double): $PoseTransformStack
public "translate"(vec: $Vector3ic$$Type): $PoseTransformStack
public "translate"(vec: $Vector3fc$$Type): $PoseTransformStack
public "translate"(vec: $Vec3i$$Type): $PoseTransformStack
public "translate"(vec: $Vec3$$Type): $PoseTransformStack
public "translateBack"(vec: $Vec3i$$Type): $PoseTransformStack
public "translateBack"(x: double, y: double, z: double): $PoseTransformStack
public "translateBack"(v: float): $PoseTransformStack
public "translateBack"(x: float, y: float, z: float): $PoseTransformStack
public "translateBack"(vec: $Vec3$$Type): $PoseTransformStack
public "translateBack"(vec: $Vector3fc$$Type): $PoseTransformStack
public "translateBack"(vec: $Vector3ic$$Type): $PoseTransformStack
public "translateX"(x: float): $PoseTransformStack
public "translateY"(y: float): $PoseTransformStack
public "translateZ"(z: float): $PoseTransformStack
public "uncenter"(): $PoseTransformStack
public "unwrap"(): $PoseStack
}
}

declare module "dev.engine_room.flywheel.api.material.DepthTest" {
import { $Enum } from "java.lang.Enum"

export class $DepthTest extends $Enum<$DepthTest> {
static readonly "ALWAYS": $DepthTest
static readonly "EQUAL": $DepthTest
static readonly "GEQUAL": $DepthTest
static readonly "GREATER": $DepthTest
static readonly "LEQUAL": $DepthTest
static readonly "LESS": $DepthTest
static readonly "NEVER": $DepthTest
static readonly "NOTEQUAL": $DepthTest
static readonly "OFF": $DepthTest

public static "valueOf"(name: string): $DepthTest
public static "values"(): $DepthTest[]
}
}

declare module "dev.engine_room.flywheel.api.material.CardinalLightingMode" {
import { $Enum } from "java.lang.Enum"

export class $CardinalLightingMode extends $Enum<$CardinalLightingMode> {
static readonly "CHUNK": $CardinalLightingMode
static readonly "ENTITY": $CardinalLightingMode
static readonly "OFF": $CardinalLightingMode

public static "valueOf"(name: string): $CardinalLightingMode
public static "values"(): $CardinalLightingMode[]
}
}

