declare module "dev.nonamecrackers2.simpleclouds.common.world.SpawnRegion" {
import { $BiPredicate$$Type } from "java.util.function.BiPredicate"
import { $Vector2i, $Vector2i$$Type } from "org.joml.Vector2i"
import { $ScAPISpawnRegion } from "dev.nonamecrackers2.simpleclouds.api.common.world.ScAPISpawnRegion"
import { $RandomSource$$Type } from "net.minecraft.util.RandomSource"
import { $Record } from "java.lang.Record"
import { $Iterable$$Type } from "java.lang.Iterable"

export class $SpawnRegion extends $Record implements $ScAPISpawnRegion {
constructor(x: integer, z: integer, radius: integer)

public static "doesCircleIntersect"(iterable0: $Iterable$$Type<$SpawnRegion$$Type>, float1: float, float2: float, float3: float): boolean
public "getMaxX"(): integer
public "getMaxZ"(): integer
public "getMinX"(): integer
public "getMinZ"(): integer
public static "getRandomPointInRegion"(spawnRegion0: $SpawnRegion$$Type, randomSource1: $RandomSource$$Type): $Vector2i
public "includesPoint"(int0: integer, int1: integer): boolean
public "intersectsCircle"(float0: float, float1: float, float2: float): boolean
public "radius"(): integer
public static "randomPointForEachRegion"(iterable0: $Iterable$$Type<$SpawnRegion$$Type>, randomSource1: $RandomSource$$Type, int2: integer, biPredicate3: $BiPredicate$$Type<$SpawnRegion$$Type, $Vector2i$$Type>): void
public "x"(): integer
public "z"(): integer
get "maxX"(): integer
get "maxZ"(): integer
get "minX"(): integer
get "minZ"(): integer
}
}

declare module "dev.nonamecrackers2.simpleclouds.api.common.cloud.spawning.SpawnInfo" {
import { $ResourceLocation } from "net.minecraft.resources.ResourceLocation"
import { $RandomSource$$Type } from "net.minecraft.util.RandomSource"

export interface $SpawnInfo {
"cloudType"(): $ResourceLocation
"determineExistTicks"(randomSource0: $RandomSource$$Type): integer
"determineGrowTicks"(randomSource0: $RandomSource$$Type): integer
"determineRadius"(randomSource0: $RandomSource$$Type): integer
"determineSpeed"(randomSource0: $RandomSource$$Type): float
"determineStretchFactor"(randomSource0: $RandomSource$$Type): float
"movesToPlayer"(): boolean
"orderWeight"(): integer
}

export namespace $SpawnInfo {
const probejs$$marker: never
}
export abstract class $SpawnInfo$$Static implements $SpawnInfo {
}
}

declare module "dev.nonamecrackers2.simpleclouds.common.cloud.CloudInfo" {
import { $JsonObject } from "com.google.gson.JsonObject"
import { $NoiseSettings } from "dev.nonamecrackers2.simpleclouds.common.noise.NoiseSettings"
import { $WeatherType } from "dev.nonamecrackers2.simpleclouds.api.common.cloud.weather.WeatherType"
import { $ByteBuffer$$Type } from "java.nio.ByteBuffer"

export interface $CloudInfo {
"noiseConfig"(): $NoiseSettings
"packToBuffer"(byteBuffer0: $ByteBuffer$$Type, int1: integer): integer
"stormFadeDistance"(): float
"stormStart"(): float
"storminess"(): float
"toJson"(): $JsonObject
"transparencyFade"(): float
"weatherType"(): $WeatherType
}

export namespace $CloudInfo {
const BYTES_PER_TYPE: integer
const STORMINESS_MAX: float
const STORM_FADE_DISTANCE_MAX: float
const STORM_START_MAX: float
const TRANSPARENCY_FADE_MAX: float
}
export abstract class $CloudInfo$$Static implements $CloudInfo {
static readonly "BYTES_PER_TYPE": integer
static readonly "STORMINESS_MAX": float
static readonly "STORM_FADE_DISTANCE_MAX": float
static readonly "STORM_START_MAX": float
static readonly "TRANSPARENCY_FADE_MAX": float

}
}

declare module "dev.nonamecrackers2.simpleclouds.client.mesh.generator.SingleRegionCloudMeshGenerator" {
import { $CloudMeshGenerator } from "dev.nonamecrackers2.simpleclouds.client.mesh.generator.CloudMeshGenerator"
import { $CloudInfo, $CloudInfo$$Type } from "dev.nonamecrackers2.simpleclouds.common.cloud.CloudInfo"

export class $SingleRegionCloudMeshGenerator extends $CloudMeshGenerator {
public "getCloudType"(): $CloudInfo
public "setCloudType"(cloudInfo0: $CloudInfo$$Type): void
get "cloudType"(): $CloudInfo
set "cloudType"(value: $CloudInfo$$Type)
}
}

declare module "dev.nonamecrackers2.simpleclouds.client.mesh.generator.MultiRegionCloudMeshGenerator" {
import { $CloudGetter$$Type } from "dev.nonamecrackers2.simpleclouds.common.cloud.region.CloudGetter"
import { $CloudMeshGenerator } from "dev.nonamecrackers2.simpleclouds.client.mesh.generator.CloudMeshGenerator"

export class $MultiRegionCloudMeshGenerator extends $CloudMeshGenerator {
static readonly "MAX_CLOUD_FORMATIONS": integer
static readonly "MAX_CLOUD_TYPES": integer

public "getCloudFormationCount"(): integer
public "getCloudRegionTextureId"(): integer
public "getTotalCloudTypes"(): integer
public "setCloudGetter"(cloudGetter0: $CloudGetter$$Type): void
public "updateCloudTypes"(): void
get "cloudFormationCount"(): integer
get "cloudRegionTextureId"(): integer
get "totalCloudTypes"(): integer
set "cloudGetter"(value: $CloudGetter$$Type)
}
}

declare module "dev.nonamecrackers2.simpleclouds.client.renderer.SimpleCloudsRenderer" {
import { $ResourceLocation } from "net.minecraft.resources.ResourceLocation"
import { $AtmosphericCloudsRenderHandler } from "dev.nonamecrackers2.simpleclouds.client.renderer.AtmosphericCloudsRenderHandler"
import { $Frustum, $Frustum$$Type } from "net.minecraft.client.renderer.culling.Frustum"
import { $ClientLevel$$Type } from "net.minecraft.client.multiplayer.ClientLevel"
import { $CompletableFuture } from "java.util.concurrent.CompletableFuture"
import { $PreparableReloadListener$PreparationBarrier$$Type } from "net.minecraft.server.packs.resources.PreparableReloadListener$PreparationBarrier"
import { $PoseStack, $PoseStack$$Type } from "com.mojang.blaze3d.vertex.PoseStack"
import { $CloudsRenderPipeline } from "dev.nonamecrackers2.simpleclouds.client.renderer.pipeline.CloudsRenderPipeline"
import { $WeightedBlendingTarget } from "dev.nonamecrackers2.simpleclouds.client.framebuffer.WeightedBlendingTarget"
import { $LightTexture$$Type } from "net.minecraft.client.renderer.LightTexture"
import { $Matrix4f$$Type } from "org.joml.Matrix4f"
import { $ShaderInstance$$Type } from "net.minecraft.client.renderer.ShaderInstance"
import { $ClientCloudManager$$Type } from "dev.nonamecrackers2.simpleclouds.client.world.ClientCloudManager"
import { $ProfilerFiller$$Type } from "net.minecraft.util.profiling.ProfilerFiller"
import { $Executor$$Type } from "java.util.concurrent.Executor"
import { $ResourceManagerReloadListener } from "net.minecraft.server.packs.resources.ResourceManagerReloadListener"
import { $RendererInitializeResult } from "dev.nonamecrackers2.simpleclouds.client.mesh.RendererInitializeResult"
import { $ResourceManager$$Type } from "net.minecraft.server.packs.resources.ResourceManager"
import { $CloudsRendererSettings, $CloudsRendererSettings$$Type } from "dev.nonamecrackers2.simpleclouds.client.renderer.settings.CloudsRendererSettings"
import { $WorldEffects } from "dev.nonamecrackers2.simpleclouds.client.renderer.WorldEffects"
import { $RenderTarget } from "com.mojang.blaze3d.pipeline.RenderTarget"
import { $Optional } from "java.util.Optional"
import { $ShadowMapBuffer } from "dev.nonamecrackers2.simpleclouds.client.framebuffer.ShadowMapBuffer"
import { $CloudMeshGenerator, $CloudMeshGenerator$$Type } from "dev.nonamecrackers2.simpleclouds.client.mesh.generator.CloudMeshGenerator"
import { $CrashReport$$Type } from "net.minecraft.CrashReport"

export class $SimpleCloudsRenderer implements $ResourceManagerReloadListener {
static readonly "BYTES_PER_LIGHTNING_BOLT": integer
static readonly "CHUNK_FADE_IN_ALPHA_PER_TICK": float
static readonly "DITHER_SCALE": float
static readonly "FINAL_COMPOSITE_LOC": $ResourceLocation
static readonly "FINAL_COMPOSITE_NO_TRANSPARENCY_LOC": $ResourceLocation
static readonly "MAX_LIGHTNING_BOLTS": integer
static readonly "SHADOW_MAP_SIZE": integer
static readonly "SHADOW_MAP_SPAN": integer

public "baseTick"(): void
public static "canRenderInDimension"(clientLevel0: $ClientLevel$$Type): boolean
public "copyDepthFromCloudsToMain"(): void
public "copyDepthFromCloudsToTransparency"(): void
public "copyDepthFromMainToClouds"(): void
public "doBlurPostProcessing"(float0: float): void
public "doCloudShadowProcessing"(poseStack0: $PoseStack$$Type, float1: float, matrix4f2: $Matrix4f$$Type, double3: double, double4: double, double5: double, int6: integer): void
public "doFinalCompositePass"(poseStack0: $PoseStack$$Type, float1: float, matrix4f2: $Matrix4f$$Type): void
public "doScreenSpaceWorldFog"(poseStack0: $PoseStack$$Type, matrix4f1: $Matrix4f$$Type, float2: float): void
public "doStormPostProcessing"(poseStack0: $PoseStack$$Type, float1: float, matrix4f2: $Matrix4f$$Type, double3: double, double4: double, double5: double, float6: float, float7: float, float8: float): void
public "fillReport"(crashReport0: $CrashReport$$Type): void
public "getAtmosphericCloudRenderer"(): $AtmosphericCloudsRenderHandler
public "getBlurTarget"(): $RenderTarget
public "getClientCloudManagerString"(): string
public "getCloudColor"(float0: float): float[]
public "getCloudTarget"(): $RenderTarget
public "getCloudTransparencyTarget"(): $WeightedBlendingTarget
public "getCullFrustum"(): $Frustum
public "getFadeFactorForDistance"(float0: float): float
public "getFogEnd"(): float
public "getFogStart"(): float
public "getInitialInitializationResult"(): $RendererInitializeResult
public static "getInstance"(): $SimpleCloudsRenderer
public "getMeshGenerator"(): $CloudMeshGenerator
public "getName"(): string
public static "getOptionalInstance"(): $Optional<$SimpleCloudsRenderer>
public "getRenderPipeline"(): $CloudsRenderPipeline
public "getSettings"(): $CloudsRendererSettings
public "getShadowMap"(): $Optional<$ShadowMapBuffer>
public "getShadowMapStack"(): $PoseStack
public "getStormFogShadowMap"(): $ShadowMapBuffer
public "getStormFogShadowMapStack"(): $PoseStack
public "getStormFogTarget"(): $RenderTarget
public "getWorldEffectsManager"(): $WorldEffects
public static "initialize"(cloudsRendererSettings0: $CloudsRendererSettings$$Type): void
public "needsReinitialization"(): boolean
public "onCloudManagerChange"(clientCloudManager0: $ClientCloudManager$$Type): void
public "onMainWindowResize"(int0: integer, int1: integer): void
public "onResourceManagerReload"(resourceManager0: $ResourceManager$$Type): void
public static "prepareShader"(shaderInstance0: $ShaderInstance$$Type, matrix4f1: $Matrix4f$$Type, matrix4f2: $Matrix4f$$Type, float3: float, float4: float): void
public "reload"(preparationBarrier0: $PreparableReloadListener$PreparationBarrier$$Type, resourceManager1: $ResourceManager$$Type, profilerFiller2: $ProfilerFiller$$Type, profilerFiller3: $ProfilerFiller$$Type, executor4: $Executor$$Type, executor5: $Executor$$Type): $CompletableFuture<void>
public "renderAfterLevel"(poseStack0: $PoseStack$$Type, matrix4f1: $Matrix4f$$Type, float2: float, double3: double, double4: double, double5: double): void
public "renderAfterSky"(poseStack0: $PoseStack$$Type, matrix4f1: $Matrix4f$$Type, float2: float, double3: double, double4: double, double5: double): void
public "renderBeforeLevel"(poseStack0: $PoseStack$$Type, matrix4f1: $Matrix4f$$Type, float2: float, double3: double, double4: double, double5: double): void
public "renderBeforeWeather"(poseStack0: $PoseStack$$Type, matrix4f1: $Matrix4f$$Type, float2: float, double3: double, double4: double, double5: double): void
public static "renderCloudsDebug"(cloudMeshGenerator0: $CloudMeshGenerator$$Type, poseStack1: $PoseStack$$Type, matrix4f2: $Matrix4f$$Type, float3: float, float4: float, float5: float, frustum6: $Frustum$$Type, boolean7: boolean, boolean8: boolean): void
public static "renderCloudsOpaque"(cloudMeshGenerator0: $CloudMeshGenerator$$Type, poseStack1: $PoseStack$$Type, matrix4f2: $Matrix4f$$Type, float3: float, float4: float, float5: float, float6: float, float7: float, float8: float, frustum9: $Frustum$$Type, boolean10: boolean): void
public static "renderCloudsOpaque"(cloudMeshGenerator0: $CloudMeshGenerator$$Type, poseStack1: $PoseStack$$Type, matrix4f2: $Matrix4f$$Type, float3: float, float4: float, float5: float, float6: float, float7: float, float8: float, frustum9: $Frustum$$Type): void
public static "renderCloudsTransparency"(cloudMeshGenerator0: $CloudMeshGenerator$$Type, poseStack1: $PoseStack$$Type, matrix4f2: $Matrix4f$$Type, float3: float, float4: float, float5: float, float6: float, float7: float, float8: float, frustum9: $Frustum$$Type, boolean10: boolean): void
public static "renderCloudsTransparency"(cloudMeshGenerator0: $CloudMeshGenerator$$Type, poseStack1: $PoseStack$$Type, matrix4f2: $Matrix4f$$Type, float3: float, float4: float, float5: float, float6: float, float7: float, float8: float, frustum9: $Frustum$$Type): void
public "renderWeather"(lightTexture0: $LightTexture$$Type, float1: float, double2: double, double3: double, double4: double): void
public "requestReload"(): void
public "shutdown"(): void
public "tick"(): void
public "translateClouds"(poseStack0: $PoseStack$$Type, double1: double, double2: double, double3: double): void
get "atmosphericCloudRenderer"(): $AtmosphericCloudsRenderHandler
get "blurTarget"(): $RenderTarget
get "clientCloudManagerString"(): string
get "cloudTarget"(): $RenderTarget
get "cloudTransparencyTarget"(): $WeightedBlendingTarget
get "cullFrustum"(): $Frustum
get "fogEnd"(): float
get "fogStart"(): float
get "initialInitializationResult"(): $RendererInitializeResult
get "meshGenerator"(): $CloudMeshGenerator
get "name"(): string
get "renderPipeline"(): $CloudsRenderPipeline
get "settings"(): $CloudsRendererSettings
get "shadowMap"(): $Optional<$ShadowMapBuffer>
get "shadowMapStack"(): $PoseStack
get "stormFogShadowMap"(): $ShadowMapBuffer
get "stormFogShadowMapStack"(): $PoseStack
get "stormFogTarget"(): $RenderTarget
get "worldEffectsManager"(): $WorldEffects
}
}

declare module "dev.nonamecrackers2.simpleclouds.client.mesh.chunk.MeshChunk$BufferSet" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export class $MeshChunk$BufferSet {
constructor(int0: integer, int1: integer, int2: integer)

public "destroy"(): void
public "getBufferId"(): integer
public "getBufferSize"(): integer
public "getElementCount"(): integer
public "getElementOffset"(): integer
public "getMaxElements"(): integer
public "setTotalElementCount"(int0: integer): void
get "bufferId"(): integer
get "bufferSize"(): integer
get "elementCount"(): integer
get "elementOffset"(): integer
get "maxElements"(): integer
set "totalElementCount"(value: integer)
}
}

declare module "dev.nonamecrackers2.simpleclouds.client.renderer.WorldEffects" {
import { $Color } from "java.awt.Color"
import { $Consumer$$Type } from "java.util.function.Consumer"
import { $List } from "java.util.List"
import { $SimpleWeightedRandomList } from "net.minecraft.util.random.SimpleWeightedRandomList"
import { $BlockPos$$Type } from "net.minecraft.core.BlockPos"
import { $Vector3f$$Type } from "org.joml.Vector3f"
import { $LightningBolt, $LightningBolt$$Type } from "dev.nonamecrackers2.simpleclouds.client.renderer.lightning.LightningBolt"
import { $LightTexture$$Type } from "net.minecraft.client.renderer.LightTexture"
import { $CloudType } from "dev.nonamecrackers2.simpleclouds.common.cloud.CloudType"
import { $PoseStack$$Type } from "com.mojang.blaze3d.vertex.PoseStack"

export class $WorldEffects {
static readonly "EFFECTS_STRENGTH_MULTIPLER": float
static readonly "LIGHTNING_COLORS": $SimpleWeightedRandomList<integer>
static readonly "RAIN_HEIGHT_OFFSET": integer
static readonly "RAIN_SCAN_HEIGHT": integer
static readonly "RAIN_SCAN_WIDTH": integer
static readonly "RAIN_SOUND_INTERVAL_MODIFIER": integer

public "calculateFogColor"(float0: float, float1: float, float2: float, float3: float): $Color
public "calculateSkyColor"(float0: float, float1: float, float2: float, float3: float): $Color
public "forLightning"(consumer0: $Consumer$$Type<$LightningBolt$$Type>): void
public "getCloudTypeAtCamera"(): $CloudType
public "getDarkenFactor"(float0: float, float1: float): float
public "getDarkenFactor"(float0: float): float
public "getFadeRegionAtCamera"(): float
public "getLightningBolts"(): $List<$LightningBolt>
public "getStorminessAtCamera"(): float
public "getStorminessSmoothed"(float0: float): float
public "hasLightningToRender"(): boolean
public "modifyLightMapTexture"(float0: float, int1: integer, int2: integer, vector3f3: $Vector3f$$Type): void
public "renderLightning"(float0: float, double1: double, double2: double, double3: double): void
public "renderPost"(poseStack0: $PoseStack$$Type, float1: float, double2: double, double3: double, double4: double, float5: float): void
public "renderRain"(lightTexture0: $LightTexture$$Type, float1: float, double2: double, double3: double, double4: double): void
public "reset"(): void
public "spawnLightning"(blockPos0: $BlockPos$$Type, boolean1: boolean, int2: integer, int3: integer, int4: integer, float5: float, float6: float, float7: float, float8: float): void
public "tick"(): void
get "cloudTypeAtCamera"(): $CloudType
get "fadeRegionAtCamera"(): float
get "lightningBolts"(): $List<$LightningBolt>
get "storminessAtCamera"(): float
}
}

declare module "dev.nonamecrackers2.simpleclouds.client.framebuffer.ShadowMapBuffer" {
import { $Matrix4f } from "org.joml.Matrix4f"
import { $AutoCloseable } from "java.lang.AutoCloseable"

export class $ShadowMapBuffer implements $AutoCloseable {
constructor(int0: integer, int1: integer, int2: integer, int3: integer, float4: float, float5: float, boolean6: boolean, boolean7: boolean)

public "bind"(): void
public "clear"(boolean0: boolean): void
public "close"(): void
public "getColorTexId"(): integer
public "getDepthTexId"(): integer
public "getFar"(): float
public "getFramebufferId"(): integer
public "getNear"(): float
public "getProjMatrix"(): $Matrix4f
public "getTexHeight"(): integer
public "getTexWidth"(): integer
public "getViewHeight"(): integer
public "getViewWidth"(): integer
public "hasColor"(): boolean
public "unbind"(): void
get "colorTexId"(): integer
get "depthTexId"(): integer
get "far"(): float
get "framebufferId"(): integer
get "near"(): float
get "projMatrix"(): $Matrix4f
get "texHeight"(): integer
get "texWidth"(): integer
get "viewHeight"(): integer
get "viewWidth"(): integer
}
}

declare module "dev.nonamecrackers2.simpleclouds.common.api.ScAPICloudGeneratorImplHelper" {
import { $CreateRegionFunction$$Type } from "dev.nonamecrackers2.simpleclouds.api.common.cloud.spawning.CreateRegionFunction"
import { $CloudGenerator$Order$$Type } from "dev.nonamecrackers2.simpleclouds.common.cloud.spawning.CloudGenerator$Order"
import { $Predicate$$Type } from "java.util.function.Predicate"
import { $Collection$$Type } from "java.util.Collection"
import { $CloudRegion, $CloudRegion$$Type } from "dev.nonamecrackers2.simpleclouds.common.cloud.region.CloudRegion"
import { $ScAPISpawnRegion, $ScAPISpawnRegion$$Type } from "dev.nonamecrackers2.simpleclouds.api.common.world.ScAPISpawnRegion"
import { $RandomSource$$Type } from "net.minecraft.util.RandomSource"
import { $Supplier$$Type } from "java.util.function.Supplier"
import { $SpawnInfo, $SpawnInfo$$Type } from "dev.nonamecrackers2.simpleclouds.api.common.cloud.spawning.SpawnInfo"
import { $List } from "java.util.List"
import { $Optional } from "java.util.Optional"
import { $SpawnRegion, $SpawnRegion$$Type } from "dev.nonamecrackers2.simpleclouds.common.world.SpawnRegion"
import { $Level$$Type } from "net.minecraft.world.level.Level"
import { $ScAPICloudGenerator } from "dev.nonamecrackers2.simpleclouds.api.common.cloud.spawning.ScAPICloudGenerator"
import { $ScAPICloudRegion, $ScAPICloudRegion$$Type } from "dev.nonamecrackers2.simpleclouds.api.common.cloud.region.ScAPICloudRegion"

export interface $ScAPICloudGeneratorImplHelper extends $ScAPICloudGenerator {
"addCloud"(cloudRegion0: $CloudRegion$$Type, order1: $CloudGenerator$Order$$Type): boolean
"addCloudToBottom"(scAPICloudRegion0: $ScAPICloudRegion$$Type): boolean
"addCloudToTop"(scAPICloudRegion0: $ScAPICloudRegion$$Type): boolean
"addCloudUsingWeight"(scAPICloudRegion0: $ScAPICloudRegion$$Type): boolean
"api_getCloudsInRegion"(scAPISpawnRegion0: $ScAPISpawnRegion$$Type): $List<$ScAPICloudRegion>
"api_getRegionsThatOccupyCloud"(scAPICloudRegion0: $ScAPICloudRegion$$Type): $List<$ScAPISpawnRegion>
"api_removeClouds"(predicate0: $Predicate$$Type<$ScAPICloudRegion$$Type>): boolean
"api_removeCloudsCount"(predicate0: $Predicate$$Type<$ScAPICloudRegion$$Type>): integer
"api_setClouds"(collection0: $Collection$$Type<$ScAPICloudRegion$$Type>): void
"createRegion"(spawnInfo0: $SpawnInfo$$Type, float1: float, float2: float, float3: float, float4: float, randomSource5: $RandomSource$$Type, boolean6: boolean): $Optional<$ScAPICloudRegion>
"getCloudAtPosition"(float0: float, float1: float): $ScAPICloudRegion
"getCloudAtWorldPosition"(float0: float, float1: float): $ScAPICloudRegion
"getClouds"(): $List<$ScAPICloudRegion>
"getCloudsInRegion"(spawnRegion0: $SpawnRegion$$Type): $List<$CloudRegion>
"getRegionsThatOccupyCloud"(cloudRegion0: $CloudRegion$$Type): $List<$SpawnRegion>
"getSpawnRegions"(): $List<$ScAPISpawnRegion>
"getTotalCloudRegions"(): integer
"removeAllClouds"(): boolean
"removeClouds"(predicate0: $Predicate$$Type<$CloudRegion$$Type>): boolean
"removeCloudsCount"(predicate0: $Predicate$$Type<$CloudRegion$$Type>): integer
"setClouds"(collection0: $Collection$$Type<$CloudRegion$$Type>): void
"spawnCloud"(supplier0: $Supplier$$Type<$SpawnInfo>, int1: integer, int2: integer, level3: $Level$$Type, createRegionFunction4: $CreateRegionFunction$$Type): $Optional<$ScAPICloudRegion>
"spawnCloud"(supplier0: $Supplier$$Type<$SpawnInfo>, int1: integer, int2: integer, level3: $Level$$Type): $Optional<$ScAPICloudRegion>
get "clouds"(): $List<$ScAPICloudRegion>
get "spawnRegions"(): $List<$ScAPISpawnRegion>
get "totalCloudRegions"(): integer
set "clouds"(value: $Collection$$Type<$CloudRegion$$Type>)
}

export namespace $ScAPICloudGeneratorImplHelper {
const probejs$$marker: never
}
export abstract class $ScAPICloudGeneratorImplHelper$$Static implements $ScAPICloudGeneratorImplHelper {
}
}

declare module "dev.nonamecrackers2.simpleclouds.client.framebuffer.WeightedBlendingTarget" {
import { $RenderTarget } from "com.mojang.blaze3d.pipeline.RenderTarget"

export class $WeightedBlendingTarget extends $RenderTarget {
constructor(int0: integer, int1: integer, boolean2: boolean, boolean3: boolean)

public "getRevealageTextureId"(): integer
get "revealageTextureId"(): integer
}
}

declare module "dev.nonamecrackers2.simpleclouds.api.common.cloud.ScAPICloudType" {
import { $ResourceLocation } from "net.minecraft.resources.ResourceLocation"
import { $WeatherType } from "dev.nonamecrackers2.simpleclouds.api.common.cloud.weather.WeatherType"

export interface $ScAPICloudType {
"id"(): $ResourceLocation
"stormFadeDistance"(): float
"stormStart"(): float
"storminess"(): float
"transparencyFade"(): float
"weatherType"(): $WeatherType
}

export namespace $ScAPICloudType {
const probejs$$marker: never
}
export abstract class $ScAPICloudType$$Static implements $ScAPICloudType {
}
}

declare module "dev.nonamecrackers2.simpleclouds.api.common.cloud.weather.WeatherType" {
import { $Enum, $Enum$$Type } from "java.lang.Enum"
import { $StringRepresentable, $StringRepresentable$$Type } from "net.minecraft.util.StringRepresentable"
import { $StringRepresentable$EnumCodec } from "net.minecraft.util.StringRepresentable$EnumCodec"
import { $Keyable } from "com.mojang.serialization.Keyable"
import { $Supplier$$Type } from "java.util.function.Supplier"
import { $Function$$Type } from "java.util.function.Function"

export class $WeatherType extends $Enum<$WeatherType> implements $StringRepresentable {
static readonly "NONE": $WeatherType
static readonly "RAIN": $WeatherType
static readonly "THUNDER": $WeatherType
static readonly "THUNDERSTORM": $WeatherType

public "causesDarkening"(): boolean
public static "fromEnum"<E extends ($Enum<E> & $StringRepresentable)>(supplier0: $Supplier$$Type<E[]>): $StringRepresentable$EnumCodec<E>
public static "fromEnumWithMapping"<E extends ($Enum<E> & $StringRepresentable)>(supplier0: $Supplier$$Type<E[]>, function1: $Function$$Type<string, string>): $StringRepresentable$EnumCodec<E>
public "getSerializedName"(): string
public "includesRain"(): boolean
public "includesThunder"(): boolean
public static "keys"(stringRepresentable0s: $StringRepresentable$$Type[]): $Keyable
public static "valueOf"(string0: string): $WeatherType
public static "values"(): $WeatherType[]
get "serializedName"(): string
}
}

declare module "dev.nonamecrackers2.simpleclouds.client.world.ClientCloudManager" {
import { $ResourceLocation$$Type } from "net.minecraft.resources.ResourceLocation"
import { $Pair } from "org.apache.commons.lang3.tuple.Pair"
import { $Optional } from "java.util.Optional"
import { $ClientLevel, $ClientLevel$$Type } from "net.minecraft.client.multiplayer.ClientLevel"
import { $CloudManager } from "dev.nonamecrackers2.simpleclouds.common.world.CloudManager"
import { $CloudType } from "dev.nonamecrackers2.simpleclouds.common.cloud.CloudType"

export class $ClientCloudManager extends $CloudManager<$ClientLevel> {
constructor(clientLevel0: $ClientLevel$$Type)

public "doesCloudTypeExist"(resourceLocation0: $ResourceLocation$$Type): boolean
public "getCloudTypeAtWorldPos"(float0: float, float1: float): $Pair<$CloudType, float>
public "getCloudTypeFromRawId"(string0: string): $Optional<$CloudType>
public "hasReceivedSync"(): boolean
public static "isAvailableServerSide"(): boolean
public "setReceivedSync"(): void
}
}

declare module "dev.nonamecrackers2.simpleclouds.client.mesh.RendererInitializeResult$Builder" {
import { $Throwable$$Type } from "java.lang.Throwable"
import { $Component$$Type } from "net.minecraft.network.chat.Component"
import { $RendererInitializeResult } from "dev.nonamecrackers2.simpleclouds.client.mesh.RendererInitializeResult"

export class $RendererInitializeResult$Builder {
public "addError"(throwable0: $Throwable$$Type, string1: string, component2: $Component$$Type): $RendererInitializeResult$Builder
public "build"(): $RendererInitializeResult
public "coreShadersNotInitialized"(throwable0: $Throwable$$Type): $RendererInitializeResult$Builder
public "errorCouldNotLoadMeshScript"(throwable0: $Throwable$$Type, string1: string): $RendererInitializeResult$Builder
public "errorOpenGL"(): $RendererInitializeResult$Builder
public "errorRecommendations"(throwable0: $Throwable$$Type, string1: string): $RendererInitializeResult$Builder
public "errorUnknown"(throwable0: $Throwable$$Type, string1: string): $RendererInitializeResult$Builder
}
}

declare module "dev.nonamecrackers2.simpleclouds.common.cloud.CloudType" {
import { $ResourceLocation, $ResourceLocation$$Type } from "net.minecraft.resources.ResourceLocation"
import { $JsonObject, $JsonObject$$Type } from "com.google.gson.JsonObject"
import { $WeatherType, $WeatherType$$Type } from "dev.nonamecrackers2.simpleclouds.api.common.cloud.weather.WeatherType"
import { $NoiseSettings, $NoiseSettings$$Type } from "dev.nonamecrackers2.simpleclouds.common.noise.NoiseSettings"
import { $ScAPICloudType } from "dev.nonamecrackers2.simpleclouds.api.common.cloud.ScAPICloudType"
import { $Record } from "java.lang.Record"
import { $CloudInfo } from "dev.nonamecrackers2.simpleclouds.common.cloud.CloudInfo"
import { $ByteBuffer$$Type } from "java.nio.ByteBuffer"

export class $CloudType extends $Record implements $CloudInfo, $ScAPICloudType {
constructor(id: $ResourceLocation$$Type, weatherType: $WeatherType$$Type, storminess: float, stormStart: float, stormFadeDistance: float, transparencyFade: float, noiseConfig: $NoiseSettings$$Type)

public "id"(): $ResourceLocation
public "noiseConfig"(): $NoiseSettings
public "packToBuffer"(byteBuffer0: $ByteBuffer$$Type, int1: integer): integer
public static "readFromJson"(resourceLocation0: $ResourceLocation$$Type, jsonObject1: $JsonObject$$Type): $CloudType
public "stormFadeDistance"(): float
public "stormStart"(): float
public "storminess"(): float
public "toJson"(): $JsonObject
public "transparencyFade"(): float
public "weatherType"(): $WeatherType
}
}

declare module "dev.nonamecrackers2.simpleclouds.mixin.MixinRenderTargetAccessor" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $MixinRenderTargetAccessor {
"simpleclouds$getFrameBufferId"(): integer
}

export namespace $MixinRenderTargetAccessor {
const probejs$$marker: never
}
export abstract class $MixinRenderTargetAccessor$$Static implements $MixinRenderTargetAccessor {
}
}

declare module "dev.nonamecrackers2.simpleclouds.client.mesh.lod.PreparedChunk" {
import { $AABB, $AABB$$Type } from "net.minecraft.world.phys.AABB"
import { $Record } from "java.lang.Record"

export class $PreparedChunk extends $Record {
constructor(lodLevel: integer, lodScale: integer, x: integer, y: integer, z: integer, noOcclusionDirectionIndex: integer, bounds: $AABB$$Type)

public "bounds"(): $AABB
public static "create"(int0: integer, int1: integer, int2: integer, int3: integer, int4: integer, int5: integer): $PreparedChunk
public "lodLevel"(): integer
public "lodScale"(): integer
public "noOcclusionDirectionIndex"(): integer
public "x"(): integer
public "y"(): integer
public "z"(): integer
}
}

declare module "dev.nonamecrackers2.simpleclouds.common.noise.NoiseSettings" {
import { $List } from "java.util.List"
import { $Codec } from "com.mojang.serialization.Codec"
import { $DynamicOps$$Type } from "com.mojang.serialization.DynamicOps"
import { $DataResult } from "com.mojang.serialization.DataResult"
import { $Decoder } from "com.mojang.serialization.Decoder"

export interface $NoiseSettings {
"encode"<T>(dynamicOps0: $DynamicOps$$Type<T>, t1: T): $DataResult<T>
"getEndHeight"(): integer
"getStartHeight"(): integer
"layerCount"(): integer
"packForShader"(): float[]
get "endHeight"(): integer
get "startHeight"(): integer
}

export namespace $NoiseSettings {
const CODEC: $Codec<$NoiseSettings>
const EMPTY: $NoiseSettings
const VALID_DECODERS: $List<$Decoder>
}
export abstract class $NoiseSettings$$Static implements $NoiseSettings {
static readonly "CODEC": $Codec<$NoiseSettings>
static readonly "EMPTY": $NoiseSettings
static readonly "VALID_DECODERS": $List<$Decoder>

}
}

declare module "dev.nonamecrackers2.simpleclouds.common.cloud.spawning.CloudGenerator$Order" {
import { $Enum } from "java.lang.Enum"

export class $CloudGenerator$Order extends $Enum<$CloudGenerator$Order> {
static readonly "BOTTOM": $CloudGenerator$Order
static readonly "TOP": $CloudGenerator$Order
static readonly "USE_WEIGHT": $CloudGenerator$Order

public static "valueOf"(string0: string): $CloudGenerator$Order
public static "values"(): $CloudGenerator$Order[]
}
}

declare module "dev.nonamecrackers2.simpleclouds.client.renderer.pipeline.CloudsRenderPipeline" {
import { $Frustum$$Type } from "net.minecraft.client.renderer.culling.Frustum"
import { $Minecraft$$Type } from "net.minecraft.client.Minecraft"
import { $SimpleCloudsRenderer$$Type } from "dev.nonamecrackers2.simpleclouds.client.renderer.SimpleCloudsRenderer"
import { $Matrix4f$$Type } from "org.joml.Matrix4f"
import { $PoseStack$$Type } from "com.mojang.blaze3d.vertex.PoseStack"

export interface $CloudsRenderPipeline {
"afterDistantHorizonsRender"(minecraft0: $Minecraft$$Type, simpleCloudsRenderer1: $SimpleCloudsRenderer$$Type, poseStack2: $PoseStack$$Type, matrix4f3: $Matrix4f$$Type, float4: float, double5: double, double6: double, double7: double, frustum8: $Frustum$$Type, int9: integer): void
"afterLevel"(minecraft0: $Minecraft$$Type, simpleCloudsRenderer1: $SimpleCloudsRenderer$$Type, poseStack2: $PoseStack$$Type, matrix4f3: $Matrix4f$$Type, float4: float, double5: double, double6: double, double7: double, frustum8: $Frustum$$Type): void
"afterSky"(minecraft0: $Minecraft$$Type, simpleCloudsRenderer1: $SimpleCloudsRenderer$$Type, poseStack2: $PoseStack$$Type, matrix4f3: $Matrix4f$$Type, float4: float, double5: double, double6: double, double7: double, frustum8: $Frustum$$Type): void
"beforeDistantHorizonsApplyShader"(minecraft0: $Minecraft$$Type, simpleCloudsRenderer1: $SimpleCloudsRenderer$$Type, poseStack2: $PoseStack$$Type, matrix4f3: $Matrix4f$$Type, float4: float, double5: double, double6: double, double7: double, frustum8: $Frustum$$Type, int9: integer): void
"beforeWeather"(minecraft0: $Minecraft$$Type, simpleCloudsRenderer1: $SimpleCloudsRenderer$$Type, poseStack2: $PoseStack$$Type, matrix4f3: $Matrix4f$$Type, float4: float, double5: double, double6: double, double7: double, frustum8: $Frustum$$Type): void
"prepare"(minecraft0: $Minecraft$$Type, simpleCloudsRenderer1: $SimpleCloudsRenderer$$Type, poseStack2: $PoseStack$$Type, matrix4f3: $Matrix4f$$Type, float4: float, double5: double, double6: double, double7: double, frustum8: $Frustum$$Type): void
}

export namespace $CloudsRenderPipeline {
const DEFAULT: $CloudsRenderPipeline
const SHADER_SUPPORT: $CloudsRenderPipeline
}
export abstract class $CloudsRenderPipeline$$Static implements $CloudsRenderPipeline {
static readonly "DEFAULT": $CloudsRenderPipeline
static readonly "SHADER_SUPPORT": $CloudsRenderPipeline

}
}

declare module "dev.nonamecrackers2.simpleclouds.client.mesh.LevelOfDetailOptions" {
import { $Enum } from "java.lang.Enum"
import { $LevelOfDetailConfig } from "dev.nonamecrackers2.simpleclouds.client.mesh.lod.LevelOfDetailConfig"

export class $LevelOfDetailOptions extends $Enum<$LevelOfDetailOptions> {
static readonly "HIGH": $LevelOfDetailOptions
static readonly "LOW": $LevelOfDetailOptions
static readonly "MEDIUM": $LevelOfDetailOptions

public "getConfig"(): $LevelOfDetailConfig
public static "valueOf"(string0: string): $LevelOfDetailOptions
public static "values"(): $LevelOfDetailOptions[]
get "config"(): $LevelOfDetailConfig
}
}

declare module "dev.nonamecrackers2.simpleclouds.mixin.MixinGameRendererAccessor" {
import { $Camera$$Type } from "net.minecraft.client.Camera"

export interface $MixinGameRendererAccessor {
"simpleclouds$getFov"(camera0: $Camera$$Type, float1: float, boolean2: boolean): double
}

export namespace $MixinGameRendererAccessor {
const probejs$$marker: never
}
export abstract class $MixinGameRendererAccessor$$Static implements $MixinGameRendererAccessor {
}
}

declare module "dev.nonamecrackers2.simpleclouds.api.common.cloud.region.ScAPICloudRegion" {
import { $ResourceLocation } from "net.minecraft.resources.ResourceLocation"
import { $Vec2, $Vec2$$Type } from "net.minecraft.world.phys.Vec2"
import { $Matrix2f } from "org.joml.Matrix2f"

export interface $ScAPICloudRegion {
"createTransform"(float0: float): $Matrix2f
"getAccelerationFactor"(): float
"getCloudTypeId"(): $ResourceLocation
"getInitialRadius"(): float
"getInitialWorldRadius"(): float
"getMaxSpeed"(): float
"getMovementDirection"(): $Vec2
"getOrderWeight"(): integer
"getPosX"(float0: float): float
"getPosX"(): float
"getPosZ"(): float
"getPosZ"(float0: float): float
"getRadius"(): float
"getRadius"(float0: float): float
"getRotation"(float0: float): float
"getRotation"(): float
"getStretch"(): float
"getStretch"(float0: float): float
"getWorldRadius"(): float
"getWorldX"(): float
"getWorldZ"(): float
"isDead"(): boolean
"moveTo"(float0: float, float1: float): void
"moveToWorldPos"(float0: float, float1: float): void
"setAccelerationFactor"(float0: float): void
"setMaxSpeed"(float0: float): void
"setMovementDirection"(vec20: $Vec2$$Type): void
"setRadius"(float0: float): void
"setRotation"(float0: float): void
"setStretchFactor"(float0: float): void
"setWorldRadius"(float0: float): void
"wasPriorVisible"(): boolean
get "accelerationFactor"(): float
get "cloudTypeId"(): $ResourceLocation
get "initialRadius"(): float
get "initialWorldRadius"(): float
get "maxSpeed"(): float
get "movementDirection"(): $Vec2
get "orderWeight"(): integer
get "posX"(): float
get "posZ"(): float
get "radius"(): float
get "rotation"(): float
get "stretch"(): float
get "worldRadius"(): float
get "worldX"(): float
get "worldZ"(): float
get "dead"(): boolean
set "accelerationFactor"(value: float)
set "maxSpeed"(value: float)
set "movementDirection"(value: $Vec2$$Type)
set "radius"(value: float)
set "rotation"(value: float)
set "stretchFactor"(value: float)
set "worldRadius"(value: float)
}

export namespace $ScAPICloudRegion {
const probejs$$marker: never
}
export abstract class $ScAPICloudRegion$$Static implements $ScAPICloudRegion {
}
}

declare module "dev.nonamecrackers2.simpleclouds.api.common.cloud.spawning.CreateRegionFunction" {
import { $SpawnInfo$$Type } from "dev.nonamecrackers2.simpleclouds.api.common.cloud.spawning.SpawnInfo"
import { $Optional } from "java.util.Optional"
import { $RandomSource$$Type } from "net.minecraft.util.RandomSource"
import { $ScAPICloudRegion } from "dev.nonamecrackers2.simpleclouds.api.common.cloud.region.ScAPICloudRegion"

export interface $CreateRegionFunction {
"create"(spawnInfo0: $SpawnInfo$$Type, float1: float, float2: float, float3: float, float4: float, randomSource5: $RandomSource$$Type, boolean6: boolean): $Optional<$ScAPICloudRegion>
}

export namespace $CreateRegionFunction {
const probejs$$marker: never
}
export abstract class $CreateRegionFunction$$Static implements $CreateRegionFunction {
}
}

declare module "dev.nonamecrackers2.simpleclouds.client.accessor.PostPassAccessor" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $PostPassAccessor {
"disableOutClear"(): void
}

export namespace $PostPassAccessor {
const probejs$$marker: never
}
export abstract class $PostPassAccessor$$Static implements $PostPassAccessor {
}
}

declare module "dev.nonamecrackers2.simpleclouds.mixin.MixinServerLevelAccessor" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $MixinServerLevelAccessor {
"simpleclouds$invokeResetWeatherCycle"(): void
}

export namespace $MixinServerLevelAccessor {
const probejs$$marker: never
}
export abstract class $MixinServerLevelAccessor$$Static implements $MixinServerLevelAccessor {
}
}

declare module "dev.nonamecrackers2.simpleclouds.common.cloud.spawning.CloudSpawningConfig$Info" {
import { $ResourceLocation, $ResourceLocation$$Type } from "net.minecraft.resources.ResourceLocation"
import { $SpawnInfo } from "dev.nonamecrackers2.simpleclouds.api.common.cloud.spawning.SpawnInfo"
import { $JsonObject } from "com.google.gson.JsonObject"
import { $FloatProvider, $FloatProvider$$Type } from "net.minecraft.util.valueproviders.FloatProvider"
import { $IntProvider, $IntProvider$$Type } from "net.minecraft.util.valueproviders.IntProvider"
import { $Weight, $Weight$$Type } from "net.minecraft.util.random.Weight"
import { $RandomSource$$Type } from "net.minecraft.util.RandomSource"
import { $WeightedEntry$Wrapper } from "net.minecraft.util.random.WeightedEntry$Wrapper"
import { $Record } from "java.lang.Record"
import { $WeightedEntry } from "net.minecraft.util.random.WeightedEntry"

export class $CloudSpawningConfig$Info extends $Record implements $WeightedEntry, $SpawnInfo {
constructor(cloudType: $ResourceLocation$$Type, weight: $Weight$$Type, speed: $FloatProvider$$Type, radius: $IntProvider$$Type, existTicks: $IntProvider$$Type, growTicks: $IntProvider$$Type, stretchFactor: $FloatProvider$$Type, movesToPlayer: boolean, orderWeight: integer)

public "cloudType"(): $ResourceLocation
public "determineExistTicks"(randomSource0: $RandomSource$$Type): integer
public "determineGrowTicks"(randomSource0: $RandomSource$$Type): integer
public "determineRadius"(randomSource0: $RandomSource$$Type): integer
public "determineSpeed"(randomSource0: $RandomSource$$Type): float
public "determineStretchFactor"(randomSource0: $RandomSource$$Type): float
public "existTicks"(): $IntProvider
public "getWeight"(): $Weight
public "growTicks"(): $IntProvider
public "movesToPlayer"(): boolean
public "orderWeight"(): integer
public "radius"(): $IntProvider
public "speed"(): $FloatProvider
public "stretchFactor"(): $FloatProvider
public "toJson"(): $JsonObject
public "weight"(): $Weight
public static "wrap"<T>(t0: T, int1: integer): $WeightedEntry$Wrapper<T>
}
}

declare module "dev.nonamecrackers2.simpleclouds.client.mesh.RendererInitializeResult" {
import { $List } from "java.util.List"
import { $RendererInitializeResult$State } from "dev.nonamecrackers2.simpleclouds.client.mesh.RendererInitializeResult$State"
import { $RendererInitializeResult$Error } from "dev.nonamecrackers2.simpleclouds.client.mesh.RendererInitializeResult$Error"
import { $RendererInitializeResult$Builder } from "dev.nonamecrackers2.simpleclouds.client.mesh.RendererInitializeResult$Builder"
import { $CrashReport } from "net.minecraft.CrashReport"
import { $Path } from "java.nio.file.Path"
import { $File$$Type } from "java.io.File"

export class $RendererInitializeResult {
public static "builder"(): $RendererInitializeResult$Builder
public "createCrashReports"(): $List<$CrashReport>
public "getErrors"(): $List<$RendererInitializeResult$Error>
public "getSavedCrashReportPaths"(): $List<$Path>
public "getState"(): $RendererInitializeResult$State
public "saveCrashReports"(file0: $File$$Type): void
public static "success"(): $RendererInitializeResult
get "errors"(): $List<$RendererInitializeResult$Error>
get "savedCrashReportPaths"(): $List<$Path>
get "state"(): $RendererInitializeResult$State
}
}

declare module "dev.nonamecrackers2.simpleclouds.client.mesh.lod.LevelOfDetail" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export class $LevelOfDetail {
constructor(int0: integer, int1: integer)

public "chunkCount"(): integer
public "chunkScale"(): integer
public "setChunkCount"(int0: integer): void
public "spread"(): integer
}
}

declare module "dev.nonamecrackers2.simpleclouds.common.cloud.spawning.CloudSpawningConfig" {
import { $ResourceLocation$$Type } from "net.minecraft.resources.ResourceLocation"
import { $JsonObject$$Type } from "com.google.gson.JsonObject"
import { $CloudSpawningConfig$Info, $CloudSpawningConfig$Info$$Type } from "dev.nonamecrackers2.simpleclouds.common.cloud.spawning.CloudSpawningConfig$Info"
import { $ImmutableMap$$Type } from "com.google.common.collect.ImmutableMap"
import { $IntProvider, $IntProvider$$Type } from "net.minecraft.util.valueproviders.IntProvider"
import { $CloudTypeSource$$Type } from "dev.nonamecrackers2.simpleclouds.common.cloud.CloudTypeSource"
import { $Optional } from "java.util.Optional"
import { $RandomSource$$Type } from "net.minecraft.util.RandomSource"

export class $CloudSpawningConfig {
static readonly "EMPTY": $CloudSpawningConfig

public static "fromJson"(cloudTypeSource0: $CloudTypeSource$$Type, jsonObject1: $JsonObject$$Type, immutableMap2: $ImmutableMap$$Type<$ResourceLocation$$Type, $CloudSpawningConfig$Info$$Type>): $CloudSpawningConfig
public "getMaxInitialRegions"(): integer
public "getMaxRegions"(): integer
public "getRandom"(randomSource0: $RandomSource$$Type): $Optional<$CloudSpawningConfig$Info>
public "getSpawnInterval"(): $IntProvider
public "getWeightInfo"(resourceLocation0: $ResourceLocation$$Type): $CloudSpawningConfig$Info
public "isEmpty"(): boolean
public static "of"(intProvider0: $IntProvider$$Type, int1: integer, int2: integer, immutableMap3: $ImmutableMap$$Type<$ResourceLocation$$Type, $CloudSpawningConfig$Info$$Type>): $CloudSpawningConfig
public static "readInfo"(cloudTypeSource0: $CloudTypeSource$$Type, jsonObject1: $JsonObject$$Type): $CloudSpawningConfig$Info
get "maxInitialRegions"(): integer
get "maxRegions"(): integer
get "spawnInterval"(): $IntProvider
get "empty"(): boolean
}
}

declare module "dev.nonamecrackers2.simpleclouds.api.common.cloud.spawning.ScAPICloudGenerator" {
import { $SpawnInfo, $SpawnInfo$$Type } from "dev.nonamecrackers2.simpleclouds.api.common.cloud.spawning.SpawnInfo"
import { $List } from "java.util.List"
import { $CreateRegionFunction$$Type } from "dev.nonamecrackers2.simpleclouds.api.common.cloud.spawning.CreateRegionFunction"
import { $Predicate$$Type } from "java.util.function.Predicate"
import { $Collection$$Type } from "java.util.Collection"
import { $ScAPISpawnRegion, $ScAPISpawnRegion$$Type } from "dev.nonamecrackers2.simpleclouds.api.common.world.ScAPISpawnRegion"
import { $Optional } from "java.util.Optional"
import { $RandomSource$$Type } from "net.minecraft.util.RandomSource"
import { $Level$$Type } from "net.minecraft.world.level.Level"
import { $Supplier$$Type } from "java.util.function.Supplier"
import { $ScAPICloudRegion, $ScAPICloudRegion$$Type } from "dev.nonamecrackers2.simpleclouds.api.common.cloud.region.ScAPICloudRegion"

export interface $ScAPICloudGenerator {
"addCloudToBottom"(scAPICloudRegion0: $ScAPICloudRegion$$Type): boolean
"addCloudToTop"(scAPICloudRegion0: $ScAPICloudRegion$$Type): boolean
"addCloudUsingWeight"(scAPICloudRegion0: $ScAPICloudRegion$$Type): boolean
"api_getCloudsInRegion"(scAPISpawnRegion0: $ScAPISpawnRegion$$Type): $List<$ScAPICloudRegion>
"api_getRegionsThatOccupyCloud"(scAPICloudRegion0: $ScAPICloudRegion$$Type): $List<$ScAPISpawnRegion>
"api_removeClouds"(predicate0: $Predicate$$Type<$ScAPICloudRegion$$Type>): boolean
"api_removeCloudsCount"(predicate0: $Predicate$$Type<$ScAPICloudRegion$$Type>): integer
"api_setClouds"(collection0: $Collection$$Type<$ScAPICloudRegion$$Type>): void
"createRegion"(spawnInfo0: $SpawnInfo$$Type, float1: float, float2: float, float3: float, float4: float, randomSource5: $RandomSource$$Type, boolean6: boolean): $Optional<$ScAPICloudRegion>
"getCloudAtPosition"(float0: float, float1: float): $ScAPICloudRegion
"getCloudAtWorldPosition"(float0: float, float1: float): $ScAPICloudRegion
"getClouds"(): $List<$ScAPICloudRegion>
"getSpawnRegions"(): $List<$ScAPISpawnRegion>
"getTotalCloudRegions"(): integer
"removeAllClouds"(): boolean
"spawnCloud"(supplier0: $Supplier$$Type<$SpawnInfo>, int1: integer, int2: integer, level3: $Level$$Type, createRegionFunction4: $CreateRegionFunction$$Type): $Optional<$ScAPICloudRegion>
"spawnCloud"(supplier0: $Supplier$$Type<$SpawnInfo>, int1: integer, int2: integer, level3: $Level$$Type): $Optional<$ScAPICloudRegion>
get "clouds"(): $List<$ScAPICloudRegion>
get "spawnRegions"(): $List<$ScAPISpawnRegion>
get "totalCloudRegions"(): integer
}

export namespace $ScAPICloudGenerator {
const probejs$$marker: never
}
export abstract class $ScAPICloudGenerator$$Static implements $ScAPICloudGenerator {
}
}

declare module "dev.nonamecrackers2.simpleclouds.common.cloud.region.CloudGetter" {
import { $ResourceLocation$$Type } from "net.minecraft.resources.ResourceLocation"
import { $List } from "java.util.List"
import { $Pair } from "org.apache.commons.lang3.tuple.Pair"
import { $CloudTypeSource } from "dev.nonamecrackers2.simpleclouds.common.cloud.CloudTypeSource"
import { $CloudRegion } from "dev.nonamecrackers2.simpleclouds.common.cloud.region.CloudRegion"
import { $Optional } from "java.util.Optional"
import { $CloudType } from "dev.nonamecrackers2.simpleclouds.common.cloud.CloudType"

export interface $CloudGetter extends $CloudTypeSource {
"doesCloudTypeExist"(resourceLocation0: $ResourceLocation$$Type): boolean
"getCloudTypeAtPosition"(float0: float, float1: float): $Pair<$CloudType, float>
"getCloudTypeAtWorldPos"(float0: float, float1: float): $Pair<$CloudType, float>
"getCloudTypeForId"(resourceLocation0: $ResourceLocation$$Type): $CloudType
"getCloudTypeFromRawId"(string0: string): $Optional<$CloudType>
"getClouds"(): $List<$CloudRegion>
"getIndexedCloudTypes"(): $CloudType[]
get "clouds"(): $List<$CloudRegion>
get "indexedCloudTypes"(): $CloudType[]
}

export namespace $CloudGetter {
const EMPTY: $CloudGetter
}
export abstract class $CloudGetter$$Static implements $CloudGetter {
static readonly "EMPTY": $CloudGetter

}
}

declare module "dev.nonamecrackers2.simpleclouds.client.renderer.lightning.LightningBolt" {
import { $Vector3f, $Vector3f$$Type } from "org.joml.Vector3f"
import { $RandomSource$$Type } from "net.minecraft.util.RandomSource"
import { $VertexConsumer$$Type } from "com.mojang.blaze3d.vertex.VertexConsumer"
import { $PoseStack$$Type } from "com.mojang.blaze3d.vertex.PoseStack"

export class $LightningBolt {
static readonly "MAXIMUM_PITCH_ALLOWED": float
static readonly "MAX_BRANCHES": integer
static readonly "MAX_DEPTH": integer
static readonly "MINIMUM_PITCH_ALLOWED": float

constructor(randomSource0: $RandomSource$$Type, vector3f1: $Vector3f$$Type, int2: integer, int3: integer, float4: float, float5: float, float6: float, float7: float, float8: float, float9: float, float10: float)

public "getFade"(float0: float): float
public "getPosition"(): $Vector3f
public "isDead"(): boolean
public "render"(poseStack0: $PoseStack$$Type, vertexConsumer1: $VertexConsumer$$Type, float2: float, float3: float, float4: float, float5: float, float6: float): void
public "tick"(): void
get "position"(): $Vector3f
get "dead"(): boolean
}
}

declare module "dev.nonamecrackers2.simpleclouds.client.mesh.generator.CloudMeshGenerator$MeshGenStatus" {
import { $Enum } from "java.lang.Enum"

export class $CloudMeshGenerator$MeshGenStatus extends $Enum<$CloudMeshGenerator$MeshGenStatus> {
static readonly "CHUNK_OVERFLOW": $CloudMeshGenerator$MeshGenStatus
static readonly "MESH_POOL_OVERFLOW": $CloudMeshGenerator$MeshGenStatus
static readonly "NORMAL": $CloudMeshGenerator$MeshGenStatus
static readonly "NOT_INITIALIZED": $CloudMeshGenerator$MeshGenStatus
static readonly "NO_TASKS": $CloudMeshGenerator$MeshGenStatus

public "getName"(): string
public "isErroneous"(): boolean
public static "valueOf"(string0: string): $CloudMeshGenerator$MeshGenStatus
public static "values"(): $CloudMeshGenerator$MeshGenStatus[]
get "name"(): string
get "erroneous"(): boolean
}
}

declare module "dev.nonamecrackers2.simpleclouds.common.world.CloudManagerHolder" {
import { $CloudManager } from "dev.nonamecrackers2.simpleclouds.common.world.CloudManager"
import { $Level } from "net.minecraft.world.level.Level"

export interface $CloudManagerHolder<T extends $Level = $Level> {
"getCloudManager"(): $CloudManager<T>
get "cloudManager"(): $CloudManager<T>
}

export namespace $CloudManagerHolder {
const probejs$$marker: never
}
export abstract class $CloudManagerHolder$$Static<T extends $Level = $Level> implements $CloudManagerHolder<T> {
}
}

declare module "dev.nonamecrackers2.simpleclouds.client.mesh.RendererInitializeResult$State" {
import { $Enum } from "java.lang.Enum"

export class $RendererInitializeResult$State extends $Enum<$RendererInitializeResult$State> {
static readonly "ERROR": $RendererInitializeResult$State
static readonly "SUCCESS": $RendererInitializeResult$State

public static "valueOf"(string0: string): $RendererInitializeResult$State
public static "values"(): $RendererInitializeResult$State[]
}
}

declare module "dev.nonamecrackers2.simpleclouds.api.common.world.ScAPISpawnRegion" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $ScAPISpawnRegion {
"getMaxX"(): integer
"getMaxZ"(): integer
"getMinX"(): integer
"getMinZ"(): integer
"includesPoint"(int0: integer, int1: integer): boolean
"intersectsCircle"(float0: float, float1: float, float2: float): boolean
"radius"(): integer
"x"(): integer
"z"(): integer
get "maxX"(): integer
get "maxZ"(): integer
get "minX"(): integer
get "minZ"(): integer
}

export namespace $ScAPISpawnRegion {
const probejs$$marker: never
}
export abstract class $ScAPISpawnRegion$$Static implements $ScAPISpawnRegion {
}
}

declare module "dev.nonamecrackers2.simpleclouds.mixin.MixinFrustumAccessor" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $MixinFrustumAccessor {
"simpleclouds$cubeInFrustum"(double0: double, double1: double, double2: double, double3: double, double4: double, double5: double): boolean
}

export namespace $MixinFrustumAccessor {
const probejs$$marker: never
}
export abstract class $MixinFrustumAccessor$$Static implements $MixinFrustumAccessor {
}
}

declare module "dev.nonamecrackers2.simpleclouds.client.mesh.chunk.MeshChunk" {
import { $PreparedChunk, $PreparedChunk$$Type } from "dev.nonamecrackers2.simpleclouds.client.mesh.lod.PreparedChunk"
import { $MeshChunk$BufferSet } from "dev.nonamecrackers2.simpleclouds.client.mesh.chunk.MeshChunk$BufferSet"
import { $Optional } from "java.util.Optional"

export class $MeshChunk {
constructor(preparedChunk0: $PreparedChunk$$Type, int1: integer, int2: integer, int3: integer, int4: integer, int5: integer, int6: integer, boolean7: boolean)

public "clearChunk"(): void
public "destroy"(): void
public "getAlpha"(float0: float): float
public "getBoundsMaxX"(): float
public "getBoundsMaxY"(): float
public "getBoundsMaxZ"(): float
public "getBoundsMinX"(): float
public "getBoundsMinY"(): float
public "getBoundsMinZ"(): float
public "getChunkInfo"(): $PreparedChunk
public "getMaxHeight"(): float
public "getMinHeight"(): float
public "getOpaqueBuffers"(): $MeshChunk$BufferSet
public "getTicksSinceLastGen"(): integer
public "getTransparentBuffers"(): $Optional<$MeshChunk$BufferSet>
public "resetAlpha"(): void
public "resetLastGenTime"(): void
public "setBounds"(float0: float, float1: float, float2: float, float3: float, float4: float, float5: float): void
public "setFadeEnabled"(boolean0: boolean): void
public "setHeights"(float0: float, float1: float): void
public "tick"(): void
get "boundsMaxX"(): float
get "boundsMaxY"(): float
get "boundsMaxZ"(): float
get "boundsMinX"(): float
get "boundsMinY"(): float
get "boundsMinZ"(): float
get "chunkInfo"(): $PreparedChunk
get "maxHeight"(): float
get "minHeight"(): float
get "opaqueBuffers"(): $MeshChunk$BufferSet
get "ticksSinceLastGen"(): integer
get "transparentBuffers"(): $Optional<$MeshChunk$BufferSet>
set "fadeEnabled"(value: boolean)
}
}

declare module "dev.nonamecrackers2.simpleclouds.common.world.CloudManager" {
import { $ResourceLocation$$Type } from "net.minecraft.resources.ResourceLocation"
import { $CloudGetter, $CloudGetter$$Type } from "dev.nonamecrackers2.simpleclouds.common.cloud.region.CloudGetter"
import { $CloudTypeSource$$Type } from "dev.nonamecrackers2.simpleclouds.common.cloud.CloudTypeSource"
import { $BiFunction$$Type } from "java.util.function.BiFunction"
import { $CloudRegion } from "dev.nonamecrackers2.simpleclouds.common.cloud.region.CloudRegion"
import { $CloudMode } from "dev.nonamecrackers2.simpleclouds.api.common.cloud.CloudMode"
import { $RandomSource, $RandomSource$$Type } from "net.minecraft.util.RandomSource"
import { $Supplier$$Type } from "java.util.function.Supplier"
import { $CloudGenerator } from "dev.nonamecrackers2.simpleclouds.common.cloud.spawning.CloudGenerator"
import { $CloudType, $CloudType$$Type } from "dev.nonamecrackers2.simpleclouds.common.cloud.CloudType"
import { $Player$$Type } from "net.minecraft.world.entity.player.Player"
import { $CloudSpawningConfig, $CloudSpawningConfig$$Type } from "dev.nonamecrackers2.simpleclouds.common.cloud.spawning.CloudSpawningConfig"
import { $ScAPICloudManager } from "dev.nonamecrackers2.simpleclouds.api.common.world.ScAPICloudManager"
import { $List } from "java.util.List"
import { $Pair } from "org.apache.commons.lang3.tuple.Pair"
import { $BlockPos$$Type } from "net.minecraft.core.BlockPos"
import { $Vector2f } from "org.joml.Vector2f"
import { $Optional } from "java.util.Optional"
import { $Level, $Level$$Type } from "net.minecraft.world.level.Level"
import { $Biome$Precipitation } from "net.minecraft.world.level.biome.Biome$Precipitation"

export class $CloudManager<T extends $Level = $Level> implements $CloudGetter, $ScAPICloudManager {
static readonly "CLOUD_HEIGHT_MAX": integer
static readonly "CLOUD_HEIGHT_MIN": integer
static readonly "RANDOM_SPREAD": float
static readonly "SCROLL_OFFSET": float
static readonly "UPDATE_INTERVAL": integer

constructor(t0: T, cloudTypeSource1: $CloudTypeSource$$Type, supplier2: $Supplier$$Type<$CloudSpawningConfig>, biFunction3: $BiFunction$$Type<$CloudGetter$$Type, $Supplier$$Type<$CloudSpawningConfig$$Type>, $CloudGenerator>)

public "calculateWindDirection"(): $Vector2f
public "doesCloudTypeExist"(resourceLocation0: $ResourceLocation$$Type): boolean
public static "get"<T extends $Level>(t0: T): $CloudManager<T>
public "getCloudHeight"(): integer
public "getCloudMode"(): $CloudMode
public "getCloudSpeed"(): float
public "getCloudTypeAtPosition"(float0: float, float1: float): $Pair<$CloudType, float>
public "getCloudTypeAtWorldPos"(float0: float, float1: float): $Pair<$CloudType, float>
public "getCloudTypeFromRawId"(string0: string): $Optional<$CloudType>
public "getClouds"(): $List<$CloudRegion>
public "getPrecipitationAt"(blockPos0: $BlockPos$$Type): $Pair<boolean, $Biome$Precipitation>
public "getRainLevel"(float0: float, float1: float, float2: float): float
public "getScrollAngle"(): float
public "getScrollX"(float0: float): float
public "getScrollX"(): float
public "getScrollY"(): float
public "getScrollY"(float0: float): float
public "getScrollZ"(float0: float): float
public "getScrollZ"(): float
public "getSeed"(): long
public "getSingleModeCloudTypeRawId"(): string
public "getTickCount"(): integer
public "hasPrecipitationAt"(blockPos0: $BlockPos$$Type): boolean
public "init"(long0: long): void
public "isCloudGeneratorActive"(): boolean
public "isRainingAt"(blockPos0: $BlockPos$$Type): boolean
public "isSnowingAt"(blockPos0: $BlockPos$$Type): boolean
public static "isValidLightning"(cloudType0: $CloudType$$Type, float1: float, randomSource2: $RandomSource$$Type): boolean
public "onPlayerJoin"(player0: $Player$$Type): void
public "setCloudHeight"(int0: integer): void
public "setCloudSpeed"(float0: float): void
public "setScrollAngle"(float0: float): void
public "setSeed"(long0: long): $RandomSource
public "shouldUseVanillaWeather"(): boolean
public "spawnLightning"(int0: integer, int1: integer, boolean2: boolean): void
public "tick"(): void
public static "useVanillaWeather"(level0: $Level$$Type, cloudTypeSource1: $CloudTypeSource$$Type): boolean
get "cloudHeight"(): integer
get "cloudMode"(): $CloudMode
get "cloudSpeed"(): float
get "clouds"(): $List<$CloudRegion>
get "scrollAngle"(): float
get "scrollX"(): float
get "scrollY"(): float
get "scrollZ"(): float
get "seed"(): long
get "singleModeCloudTypeRawId"(): string
get "tickCount"(): integer
get "cloudGeneratorActive"(): boolean
set "cloudHeight"(value: integer)
set "cloudSpeed"(value: float)
set "scrollAngle"(value: float)
set "seed"(value: long)
}
}

declare module "dev.nonamecrackers2.simpleclouds.common.cloud.region.CloudRegion" {
import { $ResourceLocation, $ResourceLocation$$Type } from "net.minecraft.resources.ResourceLocation"
import { $List$$Type } from "java.util.List"
import { $CompoundTag, $CompoundTag$$Type } from "net.minecraft.nbt.CompoundTag"
import { $Vec2, $Vec2$$Type } from "net.minecraft.world.phys.Vec2"
import { $Pair } from "org.apache.commons.lang3.tuple.Pair"
import { $SpawnRegion$$Type } from "dev.nonamecrackers2.simpleclouds.common.world.SpawnRegion"
import { $RandomSource$$Type } from "net.minecraft.util.RandomSource"
import { $Matrix2f } from "org.joml.Matrix2f"
import { $FriendlyByteBuf$$Type } from "net.minecraft.network.FriendlyByteBuf"
import { $Level$$Type } from "net.minecraft.world.level.Level"
import { $ScAPICloudRegion } from "dev.nonamecrackers2.simpleclouds.api.common.cloud.region.ScAPICloudRegion"

export class $CloudRegion implements $ScAPICloudRegion {
constructor(resourceLocation0: $ResourceLocation$$Type, vec21: $Vec2$$Type, float2: float, float3: float, float4: float, float5: float, float6: float, float7: float, float8: float, int9: integer, int10: integer, int11: integer)
constructor(friendlyByteBuf0: $FriendlyByteBuf$$Type)
constructor(compoundTag0: $CompoundTag$$Type)

public static "calculateAt"(list0: $List$$Type<$CloudRegion$$Type>, float1: float, float2: float): $Pair<$CloudRegion, float>
public "createTransform"(float0: float): $Matrix2f
public "getAccelerationFactor"(): float
public "getCloudTypeId"(): $ResourceLocation
public "getExistForTicks"(): integer
public "getGrowTicks"(): integer
public "getInitialRadius"(): float
public "getInitialWorldRadius"(): float
public "getMaxSpeed"(): float
public "getMovementDirection"(): $Vec2
public "getOrderWeight"(): integer
public "getPosX"(float0: float): float
public "getPosX"(): float
public "getPosZ"(float0: float): float
public "getPosZ"(): float
public "getRadius"(): float
public "getRadius"(float0: float): float
public "getRotation"(): float
public "getRotation"(float0: float): float
public "getStretch"(): float
public "getStretch"(float0: float): float
public "getWorldRadius"(): float
public "getWorldX"(): float
public "getWorldZ"(): float
public "intersects"(spawnRegion0: $SpawnRegion$$Type): boolean
public "isDead"(): boolean
public "moveTo"(float0: float, float1: float): void
public "moveToWorldPos"(float0: float, float1: float): void
public "setAccelerationFactor"(float0: float): void
public "setMaxSpeed"(float0: float): void
public "setMovementDirection"(vec20: $Vec2$$Type): void
public "setRadius"(float0: float): void
public "setRotation"(float0: float): void
public "setStretchFactor"(float0: float): void
public "setWorldRadius"(float0: float): void
public "tick"(randomSource0: $RandomSource$$Type, level1: $Level$$Type, boolean2: boolean, float3: float): void
public "toPacket"(friendlyByteBuf0: $FriendlyByteBuf$$Type): void
public "toTag"(): $CompoundTag
public "wasPriorVisible"(): boolean
get "accelerationFactor"(): float
get "cloudTypeId"(): $ResourceLocation
get "existForTicks"(): integer
get "growTicks"(): integer
get "initialRadius"(): float
get "initialWorldRadius"(): float
get "maxSpeed"(): float
get "movementDirection"(): $Vec2
get "orderWeight"(): integer
get "posX"(): float
get "posZ"(): float
get "radius"(): float
get "rotation"(): float
get "stretch"(): float
get "worldRadius"(): float
get "worldX"(): float
get "worldZ"(): float
get "dead"(): boolean
set "accelerationFactor"(value: float)
set "maxSpeed"(value: float)
set "movementDirection"(value: $Vec2$$Type)
set "radius"(value: float)
set "rotation"(value: float)
set "stretchFactor"(value: float)
set "worldRadius"(value: float)
}
}

declare module "dev.nonamecrackers2.simpleclouds.client.mesh.lod.LevelOfDetailConfig" {
import { $List } from "java.util.List"
import { $PreparedChunk } from "dev.nonamecrackers2.simpleclouds.client.mesh.lod.PreparedChunk"
import { $LevelOfDetail, $LevelOfDetail$$Type } from "dev.nonamecrackers2.simpleclouds.client.mesh.lod.LevelOfDetail"

export class $LevelOfDetailConfig {
constructor(int0: integer, ...levelOfDetail1s: $LevelOfDetail$$Type[])

public "getEffectiveChunkSpan"(): integer
public "getLods"(): $LevelOfDetail[]
public "getPreparedChunks"(): $List<$PreparedChunk>
public "getPrimaryChunkCount"(): integer
public "getPrimaryChunkSpan"(): integer
get "effectiveChunkSpan"(): integer
get "lods"(): $LevelOfDetail[]
get "preparedChunks"(): $List<$PreparedChunk>
get "primaryChunkCount"(): integer
get "primaryChunkSpan"(): integer
}
}

declare module "dev.nonamecrackers2.simpleclouds.common.cloud.spawning.CloudGenerator" {
import { $CreateRegionFunction$$Type } from "dev.nonamecrackers2.simpleclouds.api.common.cloud.spawning.CreateRegionFunction"
import { $CloudGenerator$Order$$Type } from "dev.nonamecrackers2.simpleclouds.common.cloud.spawning.CloudGenerator$Order"
import { $CloudTypeSource$$Type } from "dev.nonamecrackers2.simpleclouds.common.cloud.CloudTypeSource"
import { $Predicate$$Type } from "java.util.function.Predicate"
import { $Collection$$Type } from "java.util.Collection"
import { $CloudRegion, $CloudRegion$$Type } from "dev.nonamecrackers2.simpleclouds.common.cloud.region.CloudRegion"
import { $ScAPISpawnRegion, $ScAPISpawnRegion$$Type } from "dev.nonamecrackers2.simpleclouds.api.common.world.ScAPISpawnRegion"
import { $RandomSource$$Type } from "net.minecraft.util.RandomSource"
import { $Supplier, $Supplier$$Type } from "java.util.function.Supplier"
import { $ScAPICloudGeneratorImplHelper } from "dev.nonamecrackers2.simpleclouds.common.api.ScAPICloudGeneratorImplHelper"
import { $SpawnInfo, $SpawnInfo$$Type } from "dev.nonamecrackers2.simpleclouds.api.common.cloud.spawning.SpawnInfo"
import { $CloudSpawningConfig, $CloudSpawningConfig$$Type } from "dev.nonamecrackers2.simpleclouds.common.cloud.spawning.CloudSpawningConfig"
import { $List } from "java.util.List"
import { $Optional } from "java.util.Optional"
import { $SpawnRegion, $SpawnRegion$$Type } from "dev.nonamecrackers2.simpleclouds.common.world.SpawnRegion"
import { $Level$$Type } from "net.minecraft.world.level.Level"
import { $ScAPICloudRegion, $ScAPICloudRegion$$Type } from "dev.nonamecrackers2.simpleclouds.api.common.cloud.region.ScAPICloudRegion"

export class $CloudGenerator implements $ScAPICloudGeneratorImplHelper {
constructor(cloudTypeSource0: $CloudTypeSource$$Type, supplier1: $Supplier$$Type<$CloudSpawningConfig>)

public "addCloud"(cloudRegion0: $CloudRegion$$Type, order1: $CloudGenerator$Order$$Type): boolean
public "addCloudToBottom"(scAPICloudRegion0: $ScAPICloudRegion$$Type): boolean
public "addCloudToTop"(scAPICloudRegion0: $ScAPICloudRegion$$Type): boolean
public "addCloudUsingWeight"(scAPICloudRegion0: $ScAPICloudRegion$$Type): boolean
public "api_getCloudsInRegion"(scAPISpawnRegion0: $ScAPISpawnRegion$$Type): $List<$ScAPICloudRegion>
public "api_getRegionsThatOccupyCloud"(scAPICloudRegion0: $ScAPICloudRegion$$Type): $List<$ScAPISpawnRegion>
public "api_removeClouds"(predicate0: $Predicate$$Type<$ScAPICloudRegion$$Type>): boolean
public "api_removeCloudsCount"(predicate0: $Predicate$$Type<$ScAPICloudRegion$$Type>): integer
public "api_setClouds"(collection0: $Collection$$Type<$ScAPICloudRegion$$Type>): void
public "createRegion"(spawnInfo0: $SpawnInfo$$Type, float1: float, float2: float, float3: float, float4: float, randomSource5: $RandomSource$$Type, boolean6: boolean): $Optional<$CloudRegion>
public "doInitialGen"(int0: integer, int1: integer, level2: $Level$$Type, boolean3: boolean): void
public "getCloudAtWorldPosition"(float0: float, float1: float): $CloudRegion
public "getClouds"(): $List<$CloudRegion>
public "getCloudsInRegion"(spawnRegion0: $SpawnRegion$$Type): $List<$CloudRegion>
public "getRegionsThatOccupyCloud"(cloudRegion0: $CloudRegion$$Type): $List<$SpawnRegion>
public "getSpawnConfig"(): $Supplier<$CloudSpawningConfig>
public "getSpawnRegions"(): $List<$SpawnRegion>
public "getTicksTillNextGen"(): integer
public "getTotalCloudRegions"(): integer
public "initialize"(randomSource0: $RandomSource$$Type, level1: $Level$$Type): void
public "removeAllClouds"(): boolean
public "removeClouds"(predicate0: $Predicate$$Type<$CloudRegion$$Type>): boolean
public "removeCloudsCount"(predicate0: $Predicate$$Type<$CloudRegion$$Type>): integer
public "setClouds"(collection0: $Collection$$Type<$CloudRegion$$Type>): void
public "spawnCloud"(supplier0: $Supplier$$Type<$SpawnInfo>, int1: integer, int2: integer, level3: $Level$$Type, createRegionFunction4: $CreateRegionFunction$$Type): $Optional<$CloudRegion>
public "spawnCloud"(supplier0: $Supplier$$Type<$SpawnInfo>, int1: integer, int2: integer, level3: $Level$$Type): $Optional<$CloudRegion>
public "spawnCloud"(cloudSpawningConfig0: $CloudSpawningConfig$$Type, level1: $Level$$Type): $Optional<$CloudRegion>
public "tick"(level0: $Level$$Type, float1: float): void
get "clouds"(): $List<$CloudRegion>
get "spawnConfig"(): $Supplier<$CloudSpawningConfig>
get "spawnRegions"(): $List<$SpawnRegion>
get "ticksTillNextGen"(): integer
get "totalCloudRegions"(): integer
set "clouds"(value: $Collection$$Type<$CloudRegion$$Type>)
}
}

declare module "dev.nonamecrackers2.simpleclouds.api.common.world.ScAPICloudManager" {
import { $ResourceLocation$$Type } from "net.minecraft.resources.ResourceLocation"
import { $List } from "java.util.List"
import { $Pair } from "org.apache.commons.lang3.tuple.Pair"
import { $ScAPICloudType } from "dev.nonamecrackers2.simpleclouds.api.common.cloud.ScAPICloudType"
import { $Vector2f } from "org.joml.Vector2f"
import { $CloudMode } from "dev.nonamecrackers2.simpleclouds.api.common.cloud.CloudMode"
import { $ScAPICloudGenerator } from "dev.nonamecrackers2.simpleclouds.api.common.cloud.spawning.ScAPICloudGenerator"
import { $ScAPICloudRegion } from "dev.nonamecrackers2.simpleclouds.api.common.cloud.region.ScAPICloudRegion"

export interface $ScAPICloudManager {
"calculateWindDirection"(): $Vector2f
"getCloudGenerator"(): $ScAPICloudGenerator
"getCloudHeight"(): integer
"getCloudMode"(): $CloudMode
"getCloudSpeed"(): float
"getCloudTypeAtPosition"(float0: float, float1: float): $Pair<$ScAPICloudType, float>
"getCloudTypeForId"(resourceLocation0: $ResourceLocation$$Type): $ScAPICloudType
"getClouds"(): $List<$ScAPICloudRegion>
"getIndexedCloudTypes"(): $ScAPICloudType[]
"getRainLevel"(float0: float, float1: float, float2: float): float
"getScrollAngle"(): float
"getScrollX"(float0: float): float
"getScrollX"(): float
"getScrollY"(float0: float): float
"getScrollY"(): float
"getScrollZ"(float0: float): float
"getScrollZ"(): float
"getSeed"(): long
"getSingleModeCloudTypeRawId"(): string
"getTickCount"(): integer
"isCloudGeneratorActive"(): boolean
"setCloudHeight"(int0: integer): void
"setCloudSpeed"(float0: float): void
"setScrollAngle"(float0: float): void
"shouldUseVanillaWeather"(): boolean
"spawnLightning"(int0: integer, int1: integer, boolean2: boolean): void
get "cloudGenerator"(): $ScAPICloudGenerator
get "cloudHeight"(): integer
get "cloudMode"(): $CloudMode
get "cloudSpeed"(): float
get "clouds"(): $List<$ScAPICloudRegion>
get "indexedCloudTypes"(): $ScAPICloudType[]
get "scrollAngle"(): float
get "scrollX"(): float
get "scrollY"(): float
get "scrollZ"(): float
get "seed"(): long
get "singleModeCloudTypeRawId"(): string
get "tickCount"(): integer
get "cloudGeneratorActive"(): boolean
set "cloudHeight"(value: integer)
set "cloudSpeed"(value: float)
set "scrollAngle"(value: float)
}

export namespace $ScAPICloudManager {
const probejs$$marker: never
}
export abstract class $ScAPICloudManager$$Static implements $ScAPICloudManager {
}
}

declare module "dev.nonamecrackers2.simpleclouds.client.renderer.AtmosphericCloudsRenderHandler" {
import { $Minecraft$$Type } from "net.minecraft.client.Minecraft"
import { $ResourceManager$$Type } from "net.minecraft.server.packs.resources.ResourceManager"
import { $Vector2f$$Type } from "org.joml.Vector2f"
import { $Matrix4f$$Type } from "org.joml.Matrix4f"
import { $PoseStack$$Type } from "com.mojang.blaze3d.vertex.PoseStack"

export class $AtmosphericCloudsRenderHandler {
constructor(minecraft0: $Minecraft$$Type)

public "close"(): void
public "init"(resourceManager0: $ResourceManager$$Type): void
public "onResize"(int0: integer, int1: integer): void
public "render"(poseStack0: $PoseStack$$Type, matrix4f1: $Matrix4f$$Type, float2: float, double3: double, double4: double, double5: double, float6: float, float7: float, float8: float): void
public "setWindDirection"(vector2f0: $Vector2f$$Type): void
public "tick"(): void
set "windDirection"(value: $Vector2f$$Type)
}
}

declare module "dev.nonamecrackers2.simpleclouds.client.mesh.generator.CloudMeshGenerator$Builder" {
import { $MultiRegionCloudMeshGenerator } from "dev.nonamecrackers2.simpleclouds.client.mesh.generator.MultiRegionCloudMeshGenerator"
import { $SingleRegionCloudMeshGenerator } from "dev.nonamecrackers2.simpleclouds.client.mesh.generator.SingleRegionCloudMeshGenerator"
import { $LevelOfDetailConfig$$Type } from "dev.nonamecrackers2.simpleclouds.client.mesh.lod.LevelOfDetailConfig"
import { $CloudInfo$$Type } from "dev.nonamecrackers2.simpleclouds.common.cloud.CloudInfo"
import { $Supplier$$Type } from "java.util.function.Supplier"

export class $CloudMeshGenerator$Builder {
public "createMultiRegion"(): $MultiRegionCloudMeshGenerator
public "createSingleRegion"(cloudInfo0: $CloudInfo$$Type): $SingleRegionCloudMeshGenerator
public "fadeEnd"(float0: float): $CloudMeshGenerator$Builder
public "fadeNearOrigin"(boolean0: boolean): $CloudMeshGenerator$Builder
public "fadeStart"(float0: float): $CloudMeshGenerator$Builder
public "fixedMeshDataSectionSize"(boolean0: boolean): $CloudMeshGenerator$Builder
public "lodConfig"(levelOfDetailConfig0: $LevelOfDetailConfig$$Type): $CloudMeshGenerator$Builder
public "meshGenInterval"(int0: integer): $CloudMeshGenerator$Builder
public "meshGenInterval"(supplier0: $Supplier$$Type<integer>): $CloudMeshGenerator$Builder
public "shadedClouds"(boolean0: boolean): $CloudMeshGenerator$Builder
public "testFacesFacingAway"(boolean0: boolean): $CloudMeshGenerator$Builder
public "useTransparency"(boolean0: boolean): $CloudMeshGenerator$Builder
}
}

declare module "dev.nonamecrackers2.simpleclouds.client.mesh.instancing.InstanceableMesh" {
import { $Consumer$$Type } from "java.util.function.Consumer"
import { $Function$$Type } from "java.util.function.Function"
import { $ByteBuffer$$Type } from "java.nio.ByteBuffer"
import { $VertexFormat$$Type } from "com.mojang.blaze3d.vertex.VertexFormat"

export class $InstanceableMesh {
constructor(int0: integer, int1: integer, vertexFormat2: $VertexFormat$$Type, consumer3: $Consumer$$Type<$ByteBuffer$$Type>, function4: $Function$$Type<$ByteBuffer$$Type, integer>)

public static "defaultCube"(): $InstanceableMesh
public static "defaultNonCulledSide"(): $InstanceableMesh
public static "defaultSide"(): $InstanceableMesh
public "destroy"(): void
public "drawInstanced"(int0: integer): void
}
}

declare module "dev.nonamecrackers2.simpleclouds.client.renderer.settings.CloudsRendererSettings" {
import { $CloudMode } from "dev.nonamecrackers2.simpleclouds.api.common.cloud.CloudMode"
import { $LevelOfDetailOptions } from "dev.nonamecrackers2.simpleclouds.client.mesh.LevelOfDetailOptions"
import { $CloudMeshGenerator$$Type } from "dev.nonamecrackers2.simpleclouds.client.mesh.generator.CloudMeshGenerator"
import { $CloudType } from "dev.nonamecrackers2.simpleclouds.common.cloud.CloudType"

export class $CloudsRendererSettings {
static readonly "DEFAULT": $CloudsRendererSettings

constructor()

public "checkAndOrBeginInitialization"(cloudMeshGenerator0: $CloudMeshGenerator$$Type): boolean
public "getCloudMode"(): $CloudMode
public "getCurrentCloudMode"(): $CloudMode
public "getCurrentLod"(): $LevelOfDetailOptions
public "getLodConfig"(): $LevelOfDetailOptions
public "getSingleModeCloudType"(): $CloudType
public "needsReinitialization"(cloudMeshGenerator0: $CloudMeshGenerator$$Type): boolean
public "shadedClouds"(): boolean
public "useFixedMeshDataSectionSize"(): boolean
public "useTransparency"(): boolean
get "cloudMode"(): $CloudMode
get "currentCloudMode"(): $CloudMode
get "currentLod"(): $LevelOfDetailOptions
get "lodConfig"(): $LevelOfDetailOptions
get "singleModeCloudType"(): $CloudType
}
}

declare module "dev.nonamecrackers2.simpleclouds.client.mesh.RendererInitializeResult$Error" {
import { $Throwable, $Throwable$$Type } from "java.lang.Throwable"
import { $Component, $Component$$Type } from "net.minecraft.network.chat.Component"
import { $Record } from "java.lang.Record"

export class $RendererInitializeResult$Error extends $Record {
constructor(error: $Throwable$$Type, title: string, text: $Component$$Type)

public "error"(): $Throwable
public "text"(): $Component
public "title"(): string
}
}

declare module "dev.nonamecrackers2.simpleclouds.mixin.MixinPostChain" {
import { $List } from "java.util.List"
import { $PostPass } from "net.minecraft.client.renderer.PostPass"
import { $RenderTarget } from "com.mojang.blaze3d.pipeline.RenderTarget"
import { $Map } from "java.util.Map"

export interface $MixinPostChain {
"simpleclouds$getCustomRenderTargets"(): $Map<string, $RenderTarget>
"simpleclouds$getPostPasses"(): $List<$PostPass>
"simpleclouds$getScreenTarget"(): $RenderTarget
}

export namespace $MixinPostChain {
const probejs$$marker: never
}
export abstract class $MixinPostChain$$Static implements $MixinPostChain {
}
}

declare module "dev.nonamecrackers2.simpleclouds.client.event.impl.DetermineCloudRenderPipelineEvent" {
import { $CloudsRenderPipeline, $CloudsRenderPipeline$$Type } from "dev.nonamecrackers2.simpleclouds.client.renderer.pipeline.CloudsRenderPipeline"
import { $Event } from "net.minecraftforge.eventbus.api.Event"

export class $DetermineCloudRenderPipelineEvent extends $Event {
constructor(cloudsRenderPipeline0: $CloudsRenderPipeline$$Type)
constructor()

public "getOverridenPipeline"(): $CloudsRenderPipeline
public "getRenderPipeline"(): $CloudsRenderPipeline
public "overridePipeline"(cloudsRenderPipeline0: $CloudsRenderPipeline$$Type): void
get "overridenPipeline"(): $CloudsRenderPipeline
get "renderPipeline"(): $CloudsRenderPipeline
}
}

declare module "dev.nonamecrackers2.simpleclouds.common.cloud.CloudTypeSource" {
import { $ResourceLocation$$Type } from "net.minecraft.resources.ResourceLocation"
import { $Optional } from "java.util.Optional"
import { $CloudType } from "dev.nonamecrackers2.simpleclouds.common.cloud.CloudType"

export interface $CloudTypeSource {
"doesCloudTypeExist"(resourceLocation0: $ResourceLocation$$Type): boolean
"getCloudTypeForId"(resourceLocation0: $ResourceLocation$$Type): $CloudType
"getCloudTypeFromRawId"(string0: string): $Optional<$CloudType>
"getIndexedCloudTypes"(): $CloudType[]
get "indexedCloudTypes"(): $CloudType[]
}

export namespace $CloudTypeSource {
const probejs$$marker: never
}
export abstract class $CloudTypeSource$$Static implements $CloudTypeSource {
}
}

declare module "dev.nonamecrackers2.simpleclouds.client.mesh.generator.CloudMeshGenerator" {
import { $ResourceLocation, $ResourceLocation$$Type } from "net.minecraft.resources.ResourceLocation"
import { $MeshChunk$$Type } from "dev.nonamecrackers2.simpleclouds.client.mesh.chunk.MeshChunk"
import { $Frustum$$Type } from "net.minecraft.client.renderer.culling.Frustum"
import { $MeshChunk$BufferSet, $MeshChunk$BufferSet$$Type } from "dev.nonamecrackers2.simpleclouds.client.mesh.chunk.MeshChunk$BufferSet"
import { $CloudMeshGenerator$Builder } from "dev.nonamecrackers2.simpleclouds.client.mesh.generator.CloudMeshGenerator$Builder"
import { $RendererInitializeResult } from "dev.nonamecrackers2.simpleclouds.client.mesh.RendererInitializeResult"
import { $ResourceManager$$Type } from "net.minecraft.server.packs.resources.ResourceManager"
import { $CrashReportCategory$$Type } from "net.minecraft.CrashReportCategory"
import { $Supplier$$Type } from "java.util.function.Supplier"
import { $Function$$Type } from "java.util.function.Function"
import { $CloudMeshGenerator$MeshGenStatus } from "dev.nonamecrackers2.simpleclouds.client.mesh.generator.CloudMeshGenerator$MeshGenStatus"
import { $Pair } from "org.apache.commons.lang3.tuple.Pair"
import { $BiConsumer$$Type } from "java.util.function.BiConsumer"
import { $InstanceableMesh } from "dev.nonamecrackers2.simpleclouds.client.mesh.instancing.InstanceableMesh"
import { $LevelOfDetailConfig, $LevelOfDetailConfig$$Type } from "dev.nonamecrackers2.simpleclouds.client.mesh.lod.LevelOfDetailConfig"

export class $CloudMeshGenerator {
static readonly "BYTES_PER_CUBE_INFO": integer
static readonly "BYTES_PER_SIDE_INFO": integer
static readonly "LAYER_GROUPINGS_NAME": string
static readonly "LOCAL_SIZE": integer
static readonly "MAIN_CUBE_MESH_GENERATOR": $ResourceLocation
static readonly "MAX_NOISE_LAYERS": integer
static readonly "MAX_SIDE_INFO_BUFFER_SIZE": integer
static readonly "MAX_TRANSPARENT_CUBE_INFO_BUFFER_SIZE": integer
static readonly "NOISE_LAYERS_NAME": string
static readonly "SIDES_PER_CHUNK_NAME": string
static readonly "SIDE_INFO_BUFFER_NAME": string
static readonly "TICKS_UNTIL_FADE_RESET": integer
static readonly "TOTAL_SIDES_NAME": string
static readonly "TRANSPARENT_CUBES_PER_CHUNK_NAME": string
static readonly "TRANSPARENT_CUBE_INFO_BUFFER_NAME": string
static readonly "TRANSPARENT_TOTAL_CUBES_NAME": string
static readonly "VERTICAL_CHUNK_SPAN": integer
static readonly "WORK_SIZE": integer

constructor(resourceLocation0: $ResourceLocation$$Type, int1: integer, boolean2: boolean, boolean3: boolean, levelOfDetailConfig4: $LevelOfDetailConfig$$Type, supplier5: $Supplier$$Type<integer>, boolean6: boolean, boolean7: boolean)

public static "builder"(): $CloudMeshGenerator$Builder
public "canRender"(): boolean
public "close"(): void
public "disableCullDistance"(): void
public "fadeNearOriginEnabled"(): boolean
public "fillReport"(crashReportCategory0: $CrashReportCategory$$Type): void
public "forRenderableMeshChunks"(frustum0: $Frustum$$Type, function1: $Function$$Type<$MeshChunk$$Type, $MeshChunk$BufferSet>, biConsumer2: $BiConsumer$$Type<$MeshChunk$$Type, $MeshChunk$BufferSet$$Type>): void
public "forRenderableMeshChunks"(frustum0: $Frustum$$Type, function1: $Function$$Type<$MeshChunk$$Type, $MeshChunk$BufferSet>, biConsumer2: $BiConsumer$$Type<$MeshChunk$$Type, $MeshChunk$BufferSet$$Type>, boolean3: boolean): void
public "genTick"(double0: double, double1: double, double2: double, frustum3: $Frustum$$Type, float4: float): void
public "generateMesh"(): void
public "getCloudAreaMaxRadius"(): integer
public "getCubeMesh"(): $InstanceableMesh
public "getFadeEnd"(): float
public "getFadeStart"(): float
public "getLodConfig"(): $LevelOfDetailConfig
public "getMeshGenInterval"(): integer
public "getMeshGenStatus"(): $Pair<$CloudMeshGenerator$MeshGenStatus, $CloudMeshGenerator$MeshGenStatus>
public "getOpaqueBufferBytesUsed"(): integer
public "getOpaqueBufferSize"(): integer
public "getOpaqueBytesPerChunk"(): integer
public "getSideMesh"(): $InstanceableMesh
public "getTotalMeshChunks"(): integer
public "getTransparentBufferBytesUsed"(): integer
public "getTransparentBufferSize"(): integer
public "getTransparentBytesPerChunk"(): integer
public "init"(resourceManager0: $ResourceManager$$Type): $RendererInitializeResult
public "setCullDistance"(float0: float): void
public "setFadeDistances"(float0: float, float1: float): $CloudMeshGenerator
public "setScroll"(float0: float, float1: float, float2: float): void
public "setTestFacesFacingAway"(boolean0: boolean): $CloudMeshGenerator
public "setTransparencyRenderDistance"(float0: float): $CloudMeshGenerator
public "shadedCloudsEnabled"(): boolean
public "transparencyEnabled"(): boolean
public "usesFixedMeshDataSectionSize"(): boolean
public "worldTick"(): void
get "cloudAreaMaxRadius"(): integer
get "cubeMesh"(): $InstanceableMesh
get "fadeEnd"(): float
get "fadeStart"(): float
get "lodConfig"(): $LevelOfDetailConfig
get "meshGenInterval"(): integer
get "meshGenStatus"(): $Pair<$CloudMeshGenerator$MeshGenStatus, $CloudMeshGenerator$MeshGenStatus>
get "opaqueBufferBytesUsed"(): integer
get "opaqueBufferSize"(): integer
get "opaqueBytesPerChunk"(): integer
get "sideMesh"(): $InstanceableMesh
get "totalMeshChunks"(): integer
get "transparentBufferBytesUsed"(): integer
get "transparentBufferSize"(): integer
get "transparentBytesPerChunk"(): integer
set "cullDistance"(value: float)
set "testFacesFacingAway"(value: boolean)
set "transparencyRenderDistance"(value: float)
}
}

declare module "dev.nonamecrackers2.simpleclouds.api.common.cloud.CloudMode" {
import { $Enum } from "java.lang.Enum"

export class $CloudMode extends $Enum<$CloudMode> {
static readonly "AMBIENT": $CloudMode
static readonly "DEFAULT": $CloudMode
static readonly "SINGLE": $CloudMode

public static "valueOf"(string0: string): $CloudMode
public static "values"(): $CloudMode[]
}
}

