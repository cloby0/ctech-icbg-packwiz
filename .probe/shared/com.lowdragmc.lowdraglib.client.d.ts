declare module "com.lowdragmc.lowdraglib.client.scene.ISceneEntityRenderHook" {
import { $Entity$$Type } from "net.minecraft.world.entity.Entity"
import { $Level$$Type } from "net.minecraft.world.level.Level"
import { $PoseStack$$Type } from "com.mojang.blaze3d.vertex.PoseStack"

export interface $ISceneEntityRenderHook {
"applyEntity"(world: $Level$$Type, entity: $Entity$$Type, poseStack: $PoseStack$$Type, partialTicks: float): void
}

export namespace $ISceneEntityRenderHook {
const probejs$$marker: never
}
export abstract class $ISceneEntityRenderHook$$Static implements $ISceneEntityRenderHook {
}
}

declare module "com.lowdragmc.lowdraglib.client.renderer.IItemRendererProvider" {
import { $ThreadLocal } from "java.lang.ThreadLocal"
import { $ItemStack$$Type } from "net.minecraft.world.item.ItemStack"
import { $IRenderer } from "com.lowdragmc.lowdraglib.client.renderer.IRenderer"

export interface $IItemRendererProvider {
"getRenderer"(itemStack0: $ItemStack$$Type): $IRenderer
}

export namespace $IItemRendererProvider {
const disabled: $ThreadLocal<boolean>
}
export abstract class $IItemRendererProvider$$Static implements $IItemRendererProvider {
static readonly "disabled": $ThreadLocal<boolean>

}
}

declare module "com.lowdragmc.lowdraglib.client.renderer.impl.IModelRenderer" {
import { $ResourceLocation, $ResourceLocation$$Type } from "net.minecraft.resources.ResourceLocation"
import { $BakedModel, $BakedModel$$Type } from "net.minecraft.client.resources.model.BakedModel"
import { $Component } from "net.minecraft.network.chat.Component"
import { $LDLRegisterClient } from "com.lowdragmc.lowdraglib.gui.editor.annotation.LDLRegisterClient"
import { $Direction$$Type } from "net.minecraft.core.Direction"
import { $BlockState$$Type } from "net.minecraft.world.level.block.state.BlockState"
import { $RandomSource$$Type } from "net.minecraft.util.RandomSource"
import { $BakedQuad } from "net.minecraft.client.renderer.block.model.BakedQuad"
import { $BlockEntity$$Type } from "net.minecraft.world.level.block.entity.BlockEntity"
import { $PoseStack$$Type } from "com.mojang.blaze3d.vertex.PoseStack"
import { $ItemDisplayContext$$Type } from "net.minecraft.world.item.ItemDisplayContext"
import { $ConfiguratorGroup$$Type } from "com.lowdragmc.lowdraglib.gui.editor.configurator.ConfiguratorGroup"
import { $LDLRegister } from "com.lowdragmc.lowdraglib.gui.editor.annotation.LDLRegister"
import { $Consumer$$Type } from "java.util.function.Consumer"
import { $ISerializableRenderer, $ISerializableRenderer$$Type } from "com.lowdragmc.lowdraglib.client.renderer.ISerializableRenderer"
import { $List } from "java.util.List"
import { $CompoundTag, $CompoundTag$$Type } from "net.minecraft.nbt.CompoundTag"
import { $BlockPos$$Type } from "net.minecraft.core.BlockPos"
import { $Vec3$$Type } from "net.minecraft.world.phys.Vec3"
import { $ItemStack$$Type } from "net.minecraft.world.item.ItemStack"
import { $MultiBufferSource$$Type } from "net.minecraft.client.renderer.MultiBufferSource"
import { $TextureAtlasSprite } from "net.minecraft.client.renderer.texture.TextureAtlasSprite"
import { $BlockAndTintGetter$$Type } from "net.minecraft.world.level.BlockAndTintGetter"

export class $IModelRenderer implements $ISerializableRenderer {
constructor(modelLocation: $ResourceLocation$$Type)

public "buildConfigurator"(father: $ConfiguratorGroup$$Type): void
public "createPreview"(father: $ConfiguratorGroup$$Type): void
public "deserializeNBT"(tag: $CompoundTag$$Type): void
public static "deserializeWrapper"(tag: $CompoundTag$$Type): $ISerializableRenderer
public "getChatComponent"(): $Component
public "getModelLocation"(): $ResourceLocation
/** Client only, do not use in server scripts */
public "getParticleTexture"(): $TextureAtlasSprite
/** @deprecated */
public "getRegisterUI"(): $LDLRegister
public "getRegisterUIClient"(): $LDLRegisterClient
/**
 * @deprecated
 * 
 * Client only, do not use in server scripts
 */
public "getRotatedModel"(frontFacing: $Direction$$Type): $BakedModel
public "getTranslateKey"(): string
/** Client only, do not use in server scripts */
public "getViewDistance"(): integer
public "group"(): string
/** Client only, do not use in server scripts */
public "hasTESR"(blockEntity: $BlockEntity$$Type): boolean
public "initRenderer"(): void
/** Client only, do not use in server scripts */
public "isGlobalRenderer"(blockEntity: $BlockEntity$$Type): boolean
/** Client only, do not use in server scripts */
public "isGui3d"(): boolean
public "isLDLRegister"(): boolean
public "isRaw"(): boolean
public "name"(): string
/** Client only, do not use in server scripts */
public "onAdditionalModel"(registry: $Consumer$$Type<$ResourceLocation$$Type>): void
/** Client only, do not use in server scripts */
public "onPrepareTextureAtlas"(atlasName: $ResourceLocation$$Type, register: $Consumer$$Type<$ResourceLocation$$Type>): void
/** Client only, do not use in server scripts */
public "reBakeCustomQuads"(): boolean
/** Client only, do not use in server scripts */
public "reBakeCustomQuadsOffset"(): float
/** Client only, do not use in server scripts */
public "registerEvent"(): void
/** Client only, do not use in server scripts */
public "render"(blockEntity: $BlockEntity$$Type, partialTicks: float, stack: $PoseStack$$Type, buffer: $MultiBufferSource$$Type, combinedLight: integer, combinedOverlay: integer): void
/** Client only, do not use in server scripts */
public "renderItem"(stack: $ItemStack$$Type, transformType: $ItemDisplayContext$$Type, leftHand: boolean, poseStack: $PoseStack$$Type, buffer: $MultiBufferSource$$Type, combinedLight: integer, combinedOverlay: integer, model: $BakedModel$$Type): void
/** Client only, do not use in server scripts */
public "renderModel"(level: $BlockAndTintGetter$$Type, pos: $BlockPos$$Type, state: $BlockState$$Type, side: $Direction$$Type, rand: $RandomSource$$Type): $List<$BakedQuad>
public static "serializeWrapper"(renderer: $ISerializableRenderer$$Type): $CompoundTag
/** Client only, do not use in server scripts */
public "shouldRender"(blockEntity: $BlockEntity$$Type, cameraPos: $Vec3$$Type): boolean
/** Client only, do not use in server scripts */
public "updateModelWithReloadingResource"(modelLocation: $ResourceLocation$$Type): void
public "updateModelWithoutReloadingResource"(modelLocation: $ResourceLocation$$Type): void
/** Client only, do not use in server scripts */
public "useAO"(): boolean
/** Client only, do not use in server scripts */
public "useAO"(state: $BlockState$$Type): boolean
/** Client only, do not use in server scripts */
public "useBlockLight"(stack: $ItemStack$$Type): boolean
get "chatComponent"(): $Component
get "modelLocation"(): $ResourceLocation
get "particleTexture"(): $TextureAtlasSprite
get "registerUI"(): $LDLRegister
get "registerUIClient"(): $LDLRegisterClient
get "translateKey"(): string
get "viewDistance"(): integer
get "gui3d"(): boolean
get "lDLRegister"(): boolean
get "raw"(): boolean
}
}

declare module "com.lowdragmc.lowdraglib.client.renderer.ISerializableRenderer" {
import { $ResourceLocation$$Type } from "net.minecraft.resources.ResourceLocation"
import { $LDLRegisterClient } from "com.lowdragmc.lowdraglib.gui.editor.annotation.LDLRegisterClient"
import { $Direction$$Type } from "net.minecraft.core.Direction"
import { $BlockState$$Type } from "net.minecraft.world.level.block.state.BlockState"
import { $PoseStack$$Type } from "com.mojang.blaze3d.vertex.PoseStack"
import { $ItemDisplayContext$$Type } from "net.minecraft.world.item.ItemDisplayContext"
import { $LDLRegister } from "com.lowdragmc.lowdraglib.gui.editor.annotation.LDLRegister"
import { $IConfigurable } from "com.lowdragmc.lowdraglib.gui.editor.configurator.IConfigurable"
import { $IAutoPersistedSerializable } from "com.lowdragmc.lowdraglib.syncdata.IAutoPersistedSerializable"
import { $TextureAtlasSprite } from "net.minecraft.client.renderer.texture.TextureAtlasSprite"
import { $BlockAndTintGetter$$Type } from "net.minecraft.world.level.BlockAndTintGetter"
import { $BakedModel$$Type } from "net.minecraft.client.resources.model.BakedModel"
import { $Component } from "net.minecraft.network.chat.Component"
import { $RandomSource$$Type } from "net.minecraft.util.RandomSource"
import { $ILDLRegisterClient } from "com.lowdragmc.lowdraglib.gui.editor.ILDLRegisterClient"
import { $BakedQuad } from "net.minecraft.client.renderer.block.model.BakedQuad"
import { $BlockEntity$$Type } from "net.minecraft.world.level.block.entity.BlockEntity"
import { $IRenderer } from "com.lowdragmc.lowdraglib.client.renderer.IRenderer"
import { $ConfiguratorGroup$$Type } from "com.lowdragmc.lowdraglib.gui.editor.configurator.ConfiguratorGroup"
import { $Consumer$$Type } from "java.util.function.Consumer"
import { $List } from "java.util.List"
import { $CompoundTag, $CompoundTag$$Type } from "net.minecraft.nbt.CompoundTag"
import { $BlockPos$$Type } from "net.minecraft.core.BlockPos"
import { $Vec3$$Type } from "net.minecraft.world.phys.Vec3"
import { $ItemStack$$Type } from "net.minecraft.world.item.ItemStack"
import { $MultiBufferSource$$Type } from "net.minecraft.client.renderer.MultiBufferSource"

export interface $ISerializableRenderer extends $IConfigurable, $IRenderer, $IAutoPersistedSerializable, $ILDLRegisterClient {
"buildConfigurator"(father: $ConfiguratorGroup$$Type): void
"createPreview"(father: $ConfiguratorGroup$$Type): void
"deserializeNBT"(tag: $CompoundTag$$Type): void
"getChatComponent"(): $Component
/** Client only, do not use in server scripts */
"getParticleTexture"(): $TextureAtlasSprite
/** @deprecated */
"getRegisterUI"(): $LDLRegister
"getRegisterUIClient"(): $LDLRegisterClient
"getTranslateKey"(): string
/** Client only, do not use in server scripts */
"getViewDistance"(): integer
"group"(): string
/** Client only, do not use in server scripts */
"hasTESR"(blockEntity: $BlockEntity$$Type): boolean
"initRenderer"(): void
/** Client only, do not use in server scripts */
"isGlobalRenderer"(blockEntity: $BlockEntity$$Type): boolean
/** Client only, do not use in server scripts */
"isGui3d"(): boolean
"isLDLRegister"(): boolean
"isRaw"(): boolean
"name"(): string
/** Client only, do not use in server scripts */
"onAdditionalModel"(registry: $Consumer$$Type<$ResourceLocation$$Type>): void
/** Client only, do not use in server scripts */
"onPrepareTextureAtlas"(atlasName: $ResourceLocation$$Type, register: $Consumer$$Type<$ResourceLocation$$Type>): void
/** Client only, do not use in server scripts */
"reBakeCustomQuads"(): boolean
/** Client only, do not use in server scripts */
"reBakeCustomQuadsOffset"(): float
/** Client only, do not use in server scripts */
"registerEvent"(): void
/** Client only, do not use in server scripts */
"render"(blockEntity: $BlockEntity$$Type, partialTicks: float, stack: $PoseStack$$Type, buffer: $MultiBufferSource$$Type, combinedLight: integer, combinedOverlay: integer): void
/** Client only, do not use in server scripts */
"renderItem"(stack: $ItemStack$$Type, transformType: $ItemDisplayContext$$Type, leftHand: boolean, poseStack: $PoseStack$$Type, buffer: $MultiBufferSource$$Type, combinedLight: integer, combinedOverlay: integer, model: $BakedModel$$Type): void
/** Client only, do not use in server scripts */
"renderModel"(level: $BlockAndTintGetter$$Type, pos: $BlockPos$$Type, state: $BlockState$$Type, side: $Direction$$Type, rand: $RandomSource$$Type): $List<$BakedQuad>
/** Client only, do not use in server scripts */
"shouldRender"(blockEntity: $BlockEntity$$Type, cameraPos: $Vec3$$Type): boolean
/** Client only, do not use in server scripts */
"useAO"(): boolean
/** Client only, do not use in server scripts */
"useAO"(state: $BlockState$$Type): boolean
/** Client only, do not use in server scripts */
"useBlockLight"(stack: $ItemStack$$Type): boolean
get "chatComponent"(): $Component
get "particleTexture"(): $TextureAtlasSprite
get "registerUI"(): $LDLRegister
get "registerUIClient"(): $LDLRegisterClient
get "translateKey"(): string
get "viewDistance"(): integer
get "gui3d"(): boolean
get "lDLRegister"(): boolean
get "raw"(): boolean
}

export namespace $ISerializableRenderer {
function deserializeWrapper(tag: $CompoundTag$$Type): $ISerializableRenderer
function serializeWrapper(renderer: $ISerializableRenderer$$Type): $CompoundTag
}
export abstract class $ISerializableRenderer$$Static implements $ISerializableRenderer {
static "deserializeWrapper"(tag: $CompoundTag$$Type): $ISerializableRenderer
static "serializeWrapper"(renderer: $ISerializableRenderer$$Type): $CompoundTag
}
}

declare module "com.lowdragmc.lowdraglib.client.scene.ParticleManager" {
import { $ParticleRenderType, $ParticleRenderType$$Type } from "net.minecraft.client.particle.ParticleRenderType"
import { $Camera$$Type } from "net.minecraft.client.Camera"
import { $List$$Type } from "java.util.List"
import { $Particle$$Type } from "net.minecraft.client.particle.Particle"
import { $Comparator } from "java.util.Comparator"
import { $Level, $Level$$Type } from "net.minecraft.world.level.Level"
import { $PoseStack$$Type } from "com.mojang.blaze3d.vertex.PoseStack"

export class $ParticleManager {
constructor()

public "addParticle"(particle: $Particle$$Type): void
public "clearAllParticles"(): void
public "getParticleAmount"(): integer
public static "makeParticleRenderTypeComparator"(renderOrder: $List$$Type<$ParticleRenderType$$Type>): $Comparator<$ParticleRenderType>
public "render"(pMatrixStack: $PoseStack$$Type, pActiveRenderInfo: $Camera$$Type, pPartialTicks: float): void
public "setLevel"(level: $Level$$Type): void
public "tick"(): void
get "level"(): $Level
set "level"(value: $Level$$Type)
get "particleAmount"(): integer
}
}

declare module "com.lowdragmc.lowdraglib.client.scene.WorldSceneRenderer$VertexConsumerWrapper" {
import { $PoseStack$Pose$$Type } from "com.mojang.blaze3d.vertex.PoseStack$Pose"
import { $Vector3f$$Type } from "org.joml.Vector3f"
import { $VertexFormatElement$$Type } from "com.mojang.blaze3d.vertex.VertexFormatElement"
import { $Matrix3f$$Type } from "org.joml.Matrix3f"
import { $BakedQuad$$Type } from "net.minecraft.client.renderer.block.model.BakedQuad"
import { $Matrix4f$$Type } from "org.joml.Matrix4f"
import { $VertexConsumer, $VertexConsumer$$Type } from "com.mojang.blaze3d.vertex.VertexConsumer"
import { $ByteBuffer$$Type } from "java.nio.ByteBuffer"

export class $WorldSceneRenderer$VertexConsumerWrapper implements $VertexConsumer {
constructor(builder: $VertexConsumer$$Type)

public "addOffset"(offsetX: double, offsetY: double, offsetZ: double): void
public "applyBakedLighting"(int0: integer, byteBuffer1: $ByteBuffer$$Type): integer
public "applyBakedNormals"(vector3f0: $Vector3f$$Type, byteBuffer1: $ByteBuffer$$Type, matrix3f2: $Matrix3f$$Type): void
public "clearColor"(): void
public "clerOffset"(): void
public "color"(red: integer, green: integer, blue: integer, alpha: integer): $VertexConsumer
public "color"(float0: float, float1: float, float2: float, float3: float): $VertexConsumer
public "color"(int0: integer): $VertexConsumer
public "defaultColor"(defaultR: integer, defaultG: integer, defaultB: integer, defaultA: integer): void
public "endVertex"(): void
public "misc"(vertexFormatElement0: $VertexFormatElement$$Type, ...int1s: integer[]): $VertexConsumer
public "normal"(x: float, y: float, z: float): $VertexConsumer
public "normal"(matrix3f0: $Matrix3f$$Type, float1: float, float2: float, float3: float): $VertexConsumer
public "overlayCoords"(u: integer, v: integer): $VertexConsumer
public "overlayCoords"(int0: integer): $VertexConsumer
public "putBulkData"(pose0: $PoseStack$Pose$$Type, bakedQuad1: $BakedQuad$$Type, float2: float, float3: float, float4: float, int5: integer, int6: integer): void
public "putBulkData"(pose0: $PoseStack$Pose$$Type, bakedQuad1: $BakedQuad$$Type, float2s: float[], float3: float, float4: float, float5: float, int6s: integer[], int7: integer, boolean8: boolean): void
public "putBulkData"(pose0: $PoseStack$Pose$$Type, bakedQuad1: $BakedQuad$$Type, float2s: float[], float3: float, float4: float, float5: float, float6: float, int7s: integer[], int8: integer, boolean9: boolean): void
public "putBulkData"(pose0: $PoseStack$Pose$$Type, bakedQuad1: $BakedQuad$$Type, float2: float, float3: float, float4: float, float5: float, int6: integer, int7: integer, boolean8: boolean): void
public "setColor"(r: float, g: float, b: float, a: float): void
public "setOffsetX"(offsetX: double): void
public "setOffsetY"(offsetY: double): void
public "setOffsetZ"(offsetZ: double): void
public "unsetDefaultColor"(): void
public "uv"(u: float, v: float): $VertexConsumer
public "uv2"(u: integer, v: integer): $VertexConsumer
public "uv2"(int0: integer): $VertexConsumer
public "vertex"(x: double, y: double, z: double): $VertexConsumer
public "vertex"(matrix4f0: $Matrix4f$$Type, float1: float, float2: float, float3: float): $VertexConsumer
public "vertex"(float0: float, float1: float, float2: float, float3: float, float4: float, float5: float, float6: float, float7: float, float8: float, int9: integer, int10: integer, float11: float, float12: float, float13: float): void
set "offsetX"(value: double)
set "offsetY"(value: double)
set "offsetZ"(value: double)
}
}

declare module "com.lowdragmc.lowdraglib.client.scene.ISceneBlockRenderHook" {
import { $BlockPos$$Type } from "net.minecraft.core.BlockPos"
import { $BlockState$$Type } from "net.minecraft.world.level.block.state.BlockState"
import { $RenderType$$Type } from "net.minecraft.client.renderer.RenderType"
import { $Level$$Type } from "net.minecraft.world.level.Level"
import { $BlockEntity$$Type } from "net.minecraft.world.level.block.entity.BlockEntity"
import { $WorldSceneRenderer$VertexConsumerWrapper$$Type } from "com.lowdragmc.lowdraglib.client.scene.WorldSceneRenderer$VertexConsumerWrapper"
import { $PoseStack$$Type } from "com.mojang.blaze3d.vertex.PoseStack"

export interface $ISceneBlockRenderHook {
"apply"(isTESR: boolean, layer: $RenderType$$Type): void
"applyBESR"(world: $Level$$Type, pos: $BlockPos$$Type, blockEntity: $BlockEntity$$Type, poseStack: $PoseStack$$Type, partialTicks: float): void
"applyVertexConsumerWrapper"(world: $Level$$Type, pos: $BlockPos$$Type, state: $BlockState$$Type, wrapperBuffer: $WorldSceneRenderer$VertexConsumerWrapper$$Type, layer: $RenderType$$Type, partialTicks: float): void
}

export namespace $ISceneBlockRenderHook {
const probejs$$marker: never
}
export abstract class $ISceneBlockRenderHook$$Static implements $ISceneBlockRenderHook {
}
}

declare module "com.lowdragmc.lowdraglib.client.shader.uniform.UniformCache" {
import { $FloatBuffer$$Type } from "java.nio.FloatBuffer"
import { $IntConsumer$$Type } from "java.util.function.IntConsumer"
import { $Matrix4f$$Type } from "org.joml.Matrix4f"

export class $UniformCache {
constructor(programId: integer)

public "fillRGBAColor"(location: string, color: integer): void
public "glUniform1F"(location: string, v0: float): void
public "glUniform1I"(location: string, v0: integer): void
public "glUniform2F"(location: string, v0: float, v1: float): void
public "glUniform2I"(location: string, v0: integer, v1: integer): void
public "glUniform3F"(location: string, v0: float, v1: float, v2: float): void
public "glUniform3I"(location: string, v0: integer, v1: integer, v2: integer): void
public "glUniform4F"(location: string, v0: float, v1: float, v2: float, v3: float): void
public "glUniform4I"(location: string, v0: integer, v1: integer, v2: integer, v3: integer): void
public "glUniformBoolean"(location: string, value: boolean): void
public "glUniformMatrix"(location: string, callback: $IntConsumer$$Type, transpose: boolean, matrix: $FloatBuffer$$Type): void
public "glUniformMatrix2"(location: string, transpose: boolean, matrix: $FloatBuffer$$Type): void
public "glUniformMatrix4"(location: string, transpose: boolean, matrix: $FloatBuffer$$Type): void
public "glUniformMatrix4F"(location: string, matrix4f: $Matrix4f$$Type): void
public "invalidate"(): void
}
}

declare module "com.lowdragmc.lowdraglib.client.scene.WorldSceneRenderer" {
import { $Collection, $Collection$$Type } from "java.util.Collection"
import { $BlockHitResult, $BlockHitResult$$Type } from "net.minecraft.world.phys.BlockHitResult"
import { $BlockState$$Type } from "net.minecraft.world.level.block.state.BlockState"
import { $Set$$Type } from "java.util.Set"
import { $RenderType$$Type } from "net.minecraft.client.renderer.RenderType"
import { $RandomSource$$Type } from "net.minecraft.util.RandomSource"
import { $PositionedRect } from "com.lowdragmc.lowdraglib.utils.PositionedRect"
import { $ISceneBlockRenderHook, $ISceneBlockRenderHook$$Type } from "com.lowdragmc.lowdraglib.client.scene.ISceneBlockRenderHook"
import { $BlockRenderDispatcher$$Type } from "net.minecraft.client.renderer.block.BlockRenderDispatcher"
import { $PoseStack$$Type } from "com.mojang.blaze3d.vertex.PoseStack"
import { $Consumer$$Type } from "java.util.function.Consumer"
import { $BlockPos, $BlockPos$$Type } from "net.minecraft.core.BlockPos"
import { $Map } from "java.util.Map"
import { $Vector3f, $Vector3f$$Type } from "org.joml.Vector3f"
import { $BiConsumer$$Type } from "java.util.function.BiConsumer"
import { $Level, $Level$$Type } from "net.minecraft.world.level.Level"
import { $ISceneEntityRenderHook$$Type } from "com.lowdragmc.lowdraglib.client.scene.ISceneEntityRenderHook"
import { $ParticleManager, $ParticleManager$$Type } from "com.lowdragmc.lowdraglib.client.scene.ParticleManager"
import { $VertexConsumer$$Type } from "com.mojang.blaze3d.vertex.VertexConsumer"
import { $MultiBufferSource$$Type } from "net.minecraft.client.renderer.MultiBufferSource"
import { $BlockAndTintGetter$$Type } from "net.minecraft.world.level.BlockAndTintGetter"

export class $WorldSceneRenderer {
readonly "renderedBlocksMap": $Map<$Collection<$BlockPos>, $ISceneBlockRenderHook>
readonly "world": $Level

constructor(world: $Level$$Type)

public "addRenderedBlocks"(blocks: $Collection$$Type<$BlockPos$$Type>, renderHook: $ISceneBlockRenderHook$$Type): $WorldSceneRenderer
public static "canRenderInLayer"(blockRenderDispatcher: $BlockRenderDispatcher$$Type, state: $BlockState$$Type, pos: $BlockPos$$Type, level: $BlockAndTintGetter$$Type, renderType: $RenderType$$Type, random: $RandomSource$$Type): boolean
public "deleteCacheBuffer"(): $WorldSceneRenderer
public "getCompileProgress"(): double
public "getEyePos"(): $Vector3f
public "getFov"(): float
public "getLastHit"(): $Vector3f
public "getLastTraceResult"(): $BlockHitResult
public "getLookAt"(): $Vector3f
public "getParticleManager"(): $ParticleManager
public "getPositionRectRevert"(windowX: integer, windowY: integer, windowWidth: integer, windowHeight: integer): $PositionedRect
public "getPositionedRect"(x: integer, y: integer, width: integer, height: integer): $PositionedRect
public "getWorldUp"(): $Vector3f
public "isCompiling"(): boolean
public "isEndBatchLast"(): boolean
public "isUseCache"(): boolean
public "needCompileCache"(): $WorldSceneRenderer
public "project"(pos: $Vector3f$$Type): $Vector3f
public "rayTrace"(hitPos: $Vector3f$$Type): $BlockHitResult
public "render"(poseStack: $PoseStack$$Type, x: float, y: float, width: float, height: float, mouseX: integer, mouseY: integer): void
public static "renderBlocksForge"(blockRenderDispatcher: $BlockRenderDispatcher$$Type, state: $BlockState$$Type, pos: $BlockPos$$Type, level: $BlockAndTintGetter$$Type, poseStack: $PoseStack$$Type, consumer: $VertexConsumer$$Type, random: $RandomSource$$Type, renderType: $RenderType$$Type): void
public "setAfterWorldRender"(callback: $Consumer$$Type<$WorldSceneRenderer$$Type>): $WorldSceneRenderer
public "setBeforeBatchEnd"(beforeBatchEnd: $BiConsumer$$Type<$MultiBufferSource$$Type, float>): void
public "setBeforeWorldRender"(callback: $Consumer$$Type<$WorldSceneRenderer$$Type>): $WorldSceneRenderer
public "setBlocked"(blocked: $Set$$Type<$BlockPos$$Type>): $WorldSceneRenderer
public "setCameraLookAt"(eyePos: $Vector3f$$Type, lookAt: $Vector3f$$Type, worldUp: $Vector3f$$Type): void
public "setCameraLookAt"(lookAt: $Vector3f$$Type, radius: double, rotationPitch: double, rotationYaw: double): void
public "setCameraOrtho"(x: float, y: float, z: float): void
public "setCameraOrtho"(minX: float, maxX: float, minY: float, maxY: float, minZ: float, maxZ: float): void
public "setClearColor"(clearColor: integer): void
public static "setDefaultRenderLayerState"(layer: $RenderType$$Type): void
public "setEndBatchLast"(endBatchLast: boolean): void
public "setFov"(fov: float): void
public "setOnLookingAt"(onLookingAt: $Consumer$$Type<$BlockHitResult$$Type>): $WorldSceneRenderer
public "setParticleManager"(particleManager: $ParticleManager$$Type): $WorldSceneRenderer
public "setSceneEntityRenderHook"(sceneEntityRenderHook: $ISceneEntityRenderHook$$Type): void
public "unProject"(mouseX: integer, mouseY: integer): $Vector3f
public "unProject"(mouseX: integer, mouseY: integer, checkDepth: boolean): $Vector3f
public "useCacheBuffer"(useCache: boolean): $WorldSceneRenderer
public "useOrtho"(ortho: boolean): $WorldSceneRenderer
get "compileProgress"(): double
get "eyePos"(): $Vector3f
get "fov"(): float
get "lastHit"(): $Vector3f
get "lastTraceResult"(): $BlockHitResult
get "lookAt"(): $Vector3f
get "particleManager"(): $ParticleManager
get "worldUp"(): $Vector3f
get "compiling"(): boolean
get "endBatchLast"(): boolean
get "useCache"(): boolean
set "afterWorldRender"(value: $Consumer$$Type<$WorldSceneRenderer$$Type>)
set "beforeBatchEnd"(value: $BiConsumer$$Type<$MultiBufferSource$$Type, float>)
set "beforeWorldRender"(value: $Consumer$$Type<$WorldSceneRenderer$$Type>)
set "blocked"(value: $Set$$Type<$BlockPos$$Type>)
set "clearColor"(value: integer)
set "endBatchLast"(value: boolean)
set "fov"(value: float)
set "onLookingAt"(value: $Consumer$$Type<$BlockHitResult$$Type>)
set "particleManager"(value: $ParticleManager$$Type)
set "sceneEntityRenderHook"(value: $ISceneEntityRenderHook$$Type)
}
}

declare module "com.lowdragmc.lowdraglib.client.renderer.IRenderer" {
import { $ResourceLocation$$Type } from "net.minecraft.resources.ResourceLocation"
import { $BakedModel$$Type } from "net.minecraft.client.resources.model.BakedModel"
import { $Direction$$Type } from "net.minecraft.core.Direction"
import { $Set } from "java.util.Set"
import { $BlockState$$Type } from "net.minecraft.world.level.block.state.BlockState"
import { $RandomSource$$Type } from "net.minecraft.util.RandomSource"
import { $BakedQuad } from "net.minecraft.client.renderer.block.model.BakedQuad"
import { $BlockEntity$$Type } from "net.minecraft.world.level.block.entity.BlockEntity"
import { $PoseStack$$Type } from "com.mojang.blaze3d.vertex.PoseStack"
import { $ItemDisplayContext$$Type } from "net.minecraft.world.item.ItemDisplayContext"
import { $Consumer$$Type } from "java.util.function.Consumer"
import { $List } from "java.util.List"
import { $BlockPos$$Type } from "net.minecraft.core.BlockPos"
import { $Vec3$$Type } from "net.minecraft.world.phys.Vec3"
import { $ItemStack$$Type } from "net.minecraft.world.item.ItemStack"
import { $MultiBufferSource$$Type } from "net.minecraft.client.renderer.MultiBufferSource"
import { $TextureAtlasSprite } from "net.minecraft.client.renderer.texture.TextureAtlasSprite"
import { $BlockAndTintGetter$$Type } from "net.minecraft.world.level.BlockAndTintGetter"

export interface $IRenderer {
/** Client only, do not use in server scripts */
"getParticleTexture"(): $TextureAtlasSprite
/** Client only, do not use in server scripts */
"getViewDistance"(): integer
/** Client only, do not use in server scripts */
"hasTESR"(blockEntity: $BlockEntity$$Type): boolean
/** Client only, do not use in server scripts */
"isGlobalRenderer"(blockEntity: $BlockEntity$$Type): boolean
/** Client only, do not use in server scripts */
"isGui3d"(): boolean
"isRaw"(): boolean
/** Client only, do not use in server scripts */
"onAdditionalModel"(registry: $Consumer$$Type<$ResourceLocation$$Type>): void
/** Client only, do not use in server scripts */
"onPrepareTextureAtlas"(atlasName: $ResourceLocation$$Type, register: $Consumer$$Type<$ResourceLocation$$Type>): void
/** Client only, do not use in server scripts */
"reBakeCustomQuads"(): boolean
/** Client only, do not use in server scripts */
"reBakeCustomQuadsOffset"(): float
/** Client only, do not use in server scripts */
"registerEvent"(): void
/** Client only, do not use in server scripts */
"render"(blockEntity: $BlockEntity$$Type, partialTicks: float, stack: $PoseStack$$Type, buffer: $MultiBufferSource$$Type, combinedLight: integer, combinedOverlay: integer): void
/** Client only, do not use in server scripts */
"renderItem"(stack: $ItemStack$$Type, transformType: $ItemDisplayContext$$Type, leftHand: boolean, poseStack: $PoseStack$$Type, buffer: $MultiBufferSource$$Type, combinedLight: integer, combinedOverlay: integer, model: $BakedModel$$Type): void
/** Client only, do not use in server scripts */
"renderModel"(level: $BlockAndTintGetter$$Type, pos: $BlockPos$$Type, state: $BlockState$$Type, side: $Direction$$Type, rand: $RandomSource$$Type): $List<$BakedQuad>
/** Client only, do not use in server scripts */
"shouldRender"(blockEntity: $BlockEntity$$Type, cameraPos: $Vec3$$Type): boolean
/** Client only, do not use in server scripts */
"useAO"(): boolean
/** Client only, do not use in server scripts */
"useAO"(state: $BlockState$$Type): boolean
/** Client only, do not use in server scripts */
"useBlockLight"(stack: $ItemStack$$Type): boolean
get "particleTexture"(): $TextureAtlasSprite
get "viewDistance"(): integer
get "gui3d"(): boolean
get "raw"(): boolean
}

export namespace $IRenderer {
const EMPTY: $IRenderer
const EVENT_REGISTERS: $Set<$IRenderer>
}
export abstract class $IRenderer$$Static implements $IRenderer {
static readonly "EMPTY": $IRenderer
static readonly "EVENT_REGISTERS": $Set<$IRenderer>

}
}

