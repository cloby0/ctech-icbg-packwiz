declare module "me.jellysquid.mods.sodium.client.model.ModelCuboidAccessor" {
import { $ModelCuboid } from "me.jellysquid.mods.sodium.client.render.immediate.model.ModelCuboid"

export interface $ModelCuboidAccessor {
"embeddium$getSimpleCuboid"(): $ModelCuboid
"sodium$copy"(): $ModelCuboid
}

export namespace $ModelCuboidAccessor {
const probejs$$marker: never
}
export abstract class $ModelCuboidAccessor$$Static implements $ModelCuboidAccessor {
}
}

declare module "me.jellysquid.mods.sodium.client.gui.options.storage.OptionStorage" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $OptionStorage<T = any> {
"getData"(): T
"save"(): void
get "data"(): T
}

export namespace $OptionStorage {
const probejs$$marker: never
}
export abstract class $OptionStorage$$Static<T = any> implements $OptionStorage<T> {
}
}

declare module "me.jellysquid.mods.sodium.client.gui.options.OptionPage" {
import { $OptionIdentifier, $OptionIdentifier$$Type } from "org.embeddedt.embeddium.client.gui.options.OptionIdentifier"
import { $ResourceLocation$$Type } from "net.minecraft.resources.ResourceLocation"
import { $CallbackInfo$$Type } from "org.spongepowered.asm.mixin.injection.callback.CallbackInfo"
import { $Component, $Component$$Type } from "net.minecraft.network.chat.Component"
import { $ImmutableList, $ImmutableList$$Type } from "com.google.common.collect.ImmutableList"
import { $OptionGroup, $OptionGroup$$Type } from "me.jellysquid.mods.sodium.client.gui.options.OptionGroup"
import { $IOptionGroupIdAccessor } from "toni.sodiumoptionsapi.util.IOptionGroupIdAccessor"
import { $OptionIdentifier as $OptionIdentifier$0, $OptionIdentifier$$Type as $OptionIdentifier$0$$Type } from "toni.sodiumoptionsapi.api.OptionIdentifier"
import { $Option } from "me.jellysquid.mods.sodium.client.gui.options.Option"

export class $OptionPage implements $IOptionGroupIdAccessor {
static readonly "DEFAULT_ID": $OptionIdentifier<void>

constructor(optionIdentifier0: $OptionIdentifier$$Type<void>, component1: $Component$$Type, immutableList2: $ImmutableList$$Type<$OptionGroup$$Type>)
/** @deprecated */
constructor(component0: $Component$$Type, immutableList1: $ImmutableList$$Type<$OptionGroup$$Type>)

public "getGroups"(): $ImmutableList<$OptionGroup>
public "getId"(): $OptionIdentifier<void>
public "getName"(): $Component
public "getOptions"(): $ImmutableList<$Option<any>>
public "handler$eai000$onInit"(id: $OptionIdentifier$$Type, name: $Component$$Type, groups: $ImmutableList$$Type, ci: $CallbackInfo$$Type): void
public "sodiumOptionsAPI$getId"(): $OptionIdentifier$0
public "sodiumOptionsAPI$setId"(id: $ResourceLocation$$Type): void
public "sodiumOptionsAPI$setId"(id: $OptionIdentifier$0$$Type): void
get "groups"(): $ImmutableList<$OptionGroup>
get "id"(): $OptionIdentifier<void>
get "name"(): $Component
get "options"(): $ImmutableList<$Option<any>>
}
}

declare module "me.jellysquid.mods.sodium.client.render.immediate.model.ModelCuboid" {
import { $Direction$$Type } from "net.minecraft.core.Direction"
import { $Set$$Type } from "java.util.Set"

export class $ModelCuboid {
readonly "mirror": boolean
readonly "u0": float
readonly "u1": float
readonly "u2": float
readonly "u3": float
readonly "u4": float
readonly "u5": float
readonly "v0": float
readonly "v1": float
readonly "v2": float
readonly "x1": float
readonly "x2": float
readonly "y1": float
readonly "y2": float
readonly "z1": float
readonly "z2": float

constructor(int0: integer, int1: integer, float2: float, float3: float, float4: float, float5: float, float6: float, float7: float, float8: float, float9: float, float10: float, boolean11: boolean, float12: float, float13: float, set14: $Set$$Type<$Direction$$Type>)

public "shouldDrawFace"(int0: integer): boolean
}
}

declare module "me.jellysquid.mods.sodium.client.render.vertex.buffer.SodiumBufferBuilder" {
import { $ExtendedBufferBuilder$$Type } from "me.jellysquid.mods.sodium.client.render.vertex.buffer.ExtendedBufferBuilder"
import { $BufferBuilder } from "com.mojang.blaze3d.vertex.BufferBuilder"
import { $VertexFormatElement$$Type } from "com.mojang.blaze3d.vertex.VertexFormatElement"
import { $BakedQuad$$Type } from "net.minecraft.client.renderer.block.model.BakedQuad"
import { $ByteBuffer$$Type } from "java.nio.ByteBuffer"
import { $PoseStack$Pose$$Type } from "com.mojang.blaze3d.vertex.PoseStack$Pose"
import { $VertexFormatDescription$$Type } from "net.caffeinemc.mods.sodium.api.vertex.format.VertexFormatDescription"
import { $VertexBufferWriter, $VertexBufferWriter$$Type } from "net.caffeinemc.mods.sodium.api.vertex.buffer.VertexBufferWriter"
import { $MemoryStack$$Type } from "org.lwjgl.system.MemoryStack"
import { $Vector3f$$Type } from "org.joml.Vector3f"
import { $Matrix3f$$Type } from "org.joml.Matrix3f"
import { $Matrix4f$$Type } from "org.joml.Matrix4f"
import { $VertexConsumer, $VertexConsumer$$Type } from "com.mojang.blaze3d.vertex.VertexConsumer"

export class $SodiumBufferBuilder implements $VertexConsumer, $VertexBufferWriter {
constructor(extendedBufferBuilder0: $ExtendedBufferBuilder$$Type)

public "applyBakedLighting"(int0: integer, byteBuffer1: $ByteBuffer$$Type): integer
public "applyBakedNormals"(vector3f0: $Vector3f$$Type, byteBuffer1: $ByteBuffer$$Type, matrix3f2: $Matrix3f$$Type): void
public "canUseIntrinsics"(): boolean
public "color"(int0: integer, int1: integer, int2: integer, int3: integer): $VertexConsumer
public "color"(int0: integer): $VertexConsumer
public "color"(float0: float, float1: float, float2: float, float3: float): $VertexConsumer
public static "copyInto"(vertexBufferWriter0: $VertexBufferWriter$$Type, memoryStack1: $MemoryStack$$Type, long2: long, int3: integer, vertexFormatDescription4: $VertexFormatDescription$$Type): void
public "defaultColor"(int0: integer, int1: integer, int2: integer, int3: integer): void
public "endVertex"(): void
public "getOriginalBufferBuilder"(): $BufferBuilder
/** @deprecated */
public "isFullWriter"(): boolean
public "misc"(vertexFormatElement0: $VertexFormatElement$$Type, ...int1s: integer[]): $VertexConsumer
public "normal"(float0: float, float1: float, float2: float): $VertexConsumer
public "normal"(matrix3f0: $Matrix3f$$Type, float1: float, float2: float, float3: float): $VertexConsumer
public static "of"(vertexConsumer0: $VertexConsumer$$Type): $VertexBufferWriter
public "overlayCoords"(int0: integer, int1: integer): $VertexConsumer
public "overlayCoords"(int0: integer): $VertexConsumer
public "push"(memoryStack0: $MemoryStack$$Type, long1: long, int2: integer, vertexFormatDescription3: $VertexFormatDescription$$Type): void
public "putBulkData"(pose0: $PoseStack$Pose$$Type, bakedQuad1: $BakedQuad$$Type, float2: float, float3: float, float4: float, int5: integer, int6: integer): void
public "putBulkData"(pose0: $PoseStack$Pose$$Type, bakedQuad1: $BakedQuad$$Type, float2s: float[], float3: float, float4: float, float5: float, int6s: integer[], int7: integer, boolean8: boolean): void
public "putBulkData"(pose0: $PoseStack$Pose$$Type, bakedQuad1: $BakedQuad$$Type, float2s: float[], float3: float, float4: float, float5: float, float6: float, int7s: integer[], int8: integer, boolean9: boolean): void
public "putBulkData"(pose0: $PoseStack$Pose$$Type, bakedQuad1: $BakedQuad$$Type, float2: float, float3: float, float4: float, float5: float, int6: integer, int7: integer, boolean8: boolean): void
public "reset"(): void
public static "tryOf"(vertexConsumer0: $VertexConsumer$$Type): $VertexBufferWriter
public "unsetDefaultColor"(): void
public "uv"(float0: float, float1: float): $VertexConsumer
public "uv2"(int0: integer, int1: integer): $VertexConsumer
public "uv2"(int0: integer): $VertexConsumer
public "vertex"(double0: double, double1: double, double2: double): $VertexConsumer
public "vertex"(float0: float, float1: float, float2: float, float3: float, float4: float, float5: float, float6: float, float7: float, float8: float, int9: integer, int10: integer, float11: float, float12: float, float13: float): void
public "vertex"(matrix4f0: $Matrix4f$$Type, float1: float, float2: float, float3: float): $VertexConsumer
get "originalBufferBuilder"(): $BufferBuilder
get "fullWriter"(): boolean
}
}

declare module "me.jellysquid.mods.sodium.client.gui.options.control.ControlElement" {
import { $GuiGraphics$$Type } from "net.minecraft.client.gui.GuiGraphics"
import { $Dim2i, $Dim2i$$Type } from "me.jellysquid.mods.sodium.client.util.Dim2i"
import { $ScreenRectangle } from "net.minecraft.client.gui.navigation.ScreenRectangle"
import { $ComponentPath } from "net.minecraft.client.gui.ComponentPath"
import { $AbstractWidget } from "me.jellysquid.mods.sodium.client.gui.widgets.AbstractWidget"
import { $Option, $Option$$Type } from "me.jellysquid.mods.sodium.client.gui.options.Option"

export class $ControlElement<T = any> extends $AbstractWidget {
constructor(option0: $Option$$Type<T>, dim2i1: $Dim2i$$Type)

public "charTyped"(char0: character, int1: integer): boolean
public "getCurrentFocusPath"(): $ComponentPath
public "getDimensions"(): $Dim2i
public "getOption"(): $Option<T>
public "getRectangle"(): $ScreenRectangle
public "getTabOrderGroup"(): integer
public "isActive"(): boolean
public "isMouseOver"(double0: double, double1: double): boolean
public "keyPressed"(int0: integer, int1: integer, int2: integer): boolean
public "keyReleased"(int0: integer, int1: integer, int2: integer): boolean
public "mouseClicked"(double0: double, double1: double, int2: integer): boolean
public "mouseDragged"(double0: double, double1: double, int2: integer, double3: double, double4: double): boolean
public "mouseMoved"(double0: double, double1: double): void
public "mouseReleased"(double0: double, double1: double, int2: integer): boolean
public "mouseScrolled"(double0: double, double1: double, double2: double): boolean
public "render"(guiGraphics0: $GuiGraphics$$Type, int1: integer, int2: integer, float3: float): void
get "currentFocusPath"(): $ComponentPath
get "dimensions"(): $Dim2i
get "option"(): $Option<T>
get "rectangle"(): $ScreenRectangle
get "tabOrderGroup"(): integer
get "active"(): boolean
}
}

declare module "me.jellysquid.mods.sodium.mixin.features.textures.animations.tracking.SpriteContentsAnimationAccessor" {
import { $List } from "java.util.List"
import { $SpriteContents$FrameInfo } from "net.minecraft.client.renderer.texture.SpriteContents$FrameInfo"

export interface $SpriteContentsAnimationAccessor {
"getFrames"(): $List<$SpriteContents$FrameInfo>
get "frames"(): $List<$SpriteContents$FrameInfo>
}

export namespace $SpriteContentsAnimationAccessor {
const probejs$$marker: never
}
export abstract class $SpriteContentsAnimationAccessor$$Static implements $SpriteContentsAnimationAccessor {
}
}

declare module "me.jellysquid.mods.sodium.client.render.chunk.terrain.material.parameters.AlphaCutoffParameter" {
import { $Enum } from "java.lang.Enum"

export class $AlphaCutoffParameter extends $Enum<$AlphaCutoffParameter> {
static readonly "HALF": $AlphaCutoffParameter
static readonly "ONE": $AlphaCutoffParameter
static readonly "ONE_TENTH": $AlphaCutoffParameter
static readonly "ZERO": $AlphaCutoffParameter

public static "valueOf"(string0: string): $AlphaCutoffParameter
public static "values"(): $AlphaCutoffParameter[]
}
}

declare module "me.jellysquid.mods.sodium.client.render.chunk.map.ClientChunkEventListener" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $ClientChunkEventListener {
"onChunkStatusAdded"(int0: integer, int1: integer, int2: integer): void
"onChunkStatusRemoved"(int0: integer, int1: integer, int2: integer): void
"updateLoadDistance"(int0: integer): void
"updateMapCenter"(int0: integer, int1: integer): void
}

export namespace $ClientChunkEventListener {
const probejs$$marker: never
}
export abstract class $ClientChunkEventListener$$Static implements $ClientChunkEventListener {
}
}

declare module "me.jellysquid.mods.sodium.client.model.quad.properties.ModelQuadFacing" {
import { $Enum } from "java.lang.Enum"
import { $Direction$$Type } from "net.minecraft.core.Direction"

export class $ModelQuadFacing extends $Enum<$ModelQuadFacing> {
static readonly "ALL": integer
static readonly "COUNT": integer
static readonly "NEG_X": $ModelQuadFacing
static readonly "NEG_Y": $ModelQuadFacing
static readonly "NEG_Z": $ModelQuadFacing
static readonly "NONE": integer
static readonly "POS_X": $ModelQuadFacing
static readonly "POS_Y": $ModelQuadFacing
static readonly "POS_Z": $ModelQuadFacing
static readonly "UNASSIGNED": $ModelQuadFacing
static readonly "VALUES": $ModelQuadFacing[]

public static "fromDirection"(direction0: $Direction$$Type): $ModelQuadFacing
public "getOpposite"(): $ModelQuadFacing
public static "valueOf"(string0: string): $ModelQuadFacing
public static "values"(): $ModelQuadFacing[]
get "opposite"(): $ModelQuadFacing
}
}

declare module "me.jellysquid.mods.sodium.client.gui.options.Option" {
import { $OptionIdentifier } from "org.embeddedt.embeddium.client.gui.options.OptionIdentifier"
import { $OptionFlag } from "me.jellysquid.mods.sodium.client.gui.options.OptionFlag"
import { $Control } from "me.jellysquid.mods.sodium.client.gui.options.control.Control"
import { $Component } from "net.minecraft.network.chat.Component"
import { $Collection } from "java.util.Collection"
import { $OptionStorage } from "me.jellysquid.mods.sodium.client.gui.options.storage.OptionStorage"
import { $OptionImpact } from "me.jellysquid.mods.sodium.client.gui.options.OptionImpact"

export interface $Option<T = any> {
"applyChanges"(): void
"getControl"(): $Control<T>
"getFlags"(): $Collection<$OptionFlag>
"getId"(): $OptionIdentifier<T>
"getImpact"(): $OptionImpact
"getName"(): $Component
"getStorage"(): $OptionStorage<any>
"getTooltip"(): $Component
"getValue"(): T
"hasChanged"(): boolean
"isAvailable"(): boolean
"reset"(): void
"setValue"(t0: T): void
get "control"(): $Control<T>
get "flags"(): $Collection<$OptionFlag>
get "id"(): $OptionIdentifier<T>
get "impact"(): $OptionImpact
get "name"(): $Component
get "storage"(): $OptionStorage<any>
get "tooltip"(): $Component
get "value"(): T
get "available"(): boolean
set "value"(value: T)
}

export namespace $Option {
const probejs$$marker: never
}
export abstract class $Option$$Static<T = any> implements $Option<T> {
}
}

declare module "me.jellysquid.mods.sodium.client.render.chunk.map.ChunkTrackerHolder" {
import { $ClientLevel$$Type } from "net.minecraft.client.multiplayer.ClientLevel"
import { $ChunkTracker } from "me.jellysquid.mods.sodium.client.render.chunk.map.ChunkTracker"

export interface $ChunkTrackerHolder {
"sodium$getTracker"(): $ChunkTracker
}

export namespace $ChunkTrackerHolder {
function get(clientLevel0: $ClientLevel$$Type): $ChunkTracker
}
export abstract class $ChunkTrackerHolder$$Static implements $ChunkTrackerHolder {
static "get"(clientLevel0: $ClientLevel$$Type): $ChunkTracker
}
}

declare module "me.jellysquid.mods.sodium.client.util.Point2i" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $Point2i {
"x"(): integer
"y"(): integer
}

export namespace $Point2i {
const ZERO: $Point2i
}
export abstract class $Point2i$$Static implements $Point2i {
static readonly "ZERO": $Point2i

}
}

declare module "me.jellysquid.mods.sodium.client.render.chunk.data.BuiltSectionInfo$Builder" {
import { $SectionInfoBuilder } from "org.embeddedt.embeddium.api.render.chunk.SectionInfoBuilder"
import { $BuiltSectionInfo } from "me.jellysquid.mods.sodium.client.render.chunk.data.BuiltSectionInfo"
import { $Predicate$$Type } from "java.util.function.Predicate"
import { $VisibilitySet$$Type } from "net.minecraft.client.renderer.chunk.VisibilitySet"
import { $TerrainRenderPass$$Type } from "me.jellysquid.mods.sodium.client.render.chunk.terrain.TerrainRenderPass"
import { $BlockEntity$$Type } from "net.minecraft.world.level.block.entity.BlockEntity"
import { $TextureAtlasSprite$$Type } from "net.minecraft.client.renderer.texture.TextureAtlasSprite"

export class $BuiltSectionInfo$Builder implements $SectionInfoBuilder {
constructor()

public "addBlockEntity"(blockEntity0: $BlockEntity$$Type, boolean1: boolean): void
public "addRenderPass"(terrainRenderPass0: $TerrainRenderPass$$Type): void
public "addSprite"(textureAtlasSprite0: $TextureAtlasSprite$$Type): void
public "build"(): $BuiltSectionInfo
public "removeBlockEntitiesIf"(predicate0: $Predicate$$Type<$BlockEntity$$Type>): void
public "setOcclusionData"(visibilitySet0: $VisibilitySet$$Type): void
set "occlusionData"(value: $VisibilitySet$$Type)
}
}

declare module "me.jellysquid.mods.sodium.client.model.color.interop.BlockColorsExtended" {
import { $BlockColor } from "net.minecraft.client.color.block.BlockColor"
import { $Reference2ReferenceMap } from "it.unimi.dsi.fastutil.objects.Reference2ReferenceMap"
import { $BlockColors$$Type } from "net.minecraft.client.color.block.BlockColors"
import { $Block } from "net.minecraft.world.level.block.Block"
import { $ReferenceSet } from "it.unimi.dsi.fastutil.objects.ReferenceSet"

export interface $BlockColorsExtended {
"embeddium$getOverridenVanillaBlocks"(): $ReferenceSet<$Block>
"sodium$getProviders"(): $Reference2ReferenceMap<$Block, $BlockColor>
}

export namespace $BlockColorsExtended {
function getOverridenVanillaBlocks(blockColors0: $BlockColors$$Type): $ReferenceSet<$Block>
function getProviders(blockColors0: $BlockColors$$Type): $Reference2ReferenceMap<$Block, $BlockColor>
}
export abstract class $BlockColorsExtended$$Static implements $BlockColorsExtended {
static "getOverridenVanillaBlocks"(blockColors0: $BlockColors$$Type): $ReferenceSet<$Block>
static "getProviders"(blockColors0: $BlockColors$$Type): $Reference2ReferenceMap<$Block, $BlockColor>
}
}

declare module "me.jellysquid.mods.sodium.client.gl.util.VertexRange" {
import { $Record } from "java.lang.Record"

export class $VertexRange extends $Record {
constructor(vertexStart: integer, vertexCount: integer)

public "vertexCount"(): integer
public "vertexStart"(): integer
}
}

declare module "me.jellysquid.mods.sodium.client.render.immediate.model.ModelPartData" {
import { $ModelCuboid } from "me.jellysquid.mods.sodium.client.render.immediate.model.ModelCuboid"
import { $ModelPart, $ModelPart$$Type } from "net.minecraft.client.model.geom.ModelPart"

export interface $ModelPartData {
/** @deprecated */
"getChildren"(): $ModelPart[]
/** @deprecated */
"getCuboids"(): $ModelCuboid[]
"isHidden"(): boolean
"isVisible"(): boolean
get "children"(): $ModelPart[]
get "cuboids"(): $ModelCuboid[]
get "hidden"(): boolean
get "visible"(): boolean
}

export namespace $ModelPartData {
function from(modelPart0: $ModelPart$$Type): $ModelPartData
}
export abstract class $ModelPartData$$Static implements $ModelPartData {
static "from"(modelPart0: $ModelPart$$Type): $ModelPartData
}
}

declare module "me.jellysquid.mods.sodium.mixin.core.render.MinecraftAccessor" {
import { $Thread } from "java.lang.Thread"

export interface $MinecraftAccessor {
"embeddium$getGameThread"(): $Thread
}

export namespace $MinecraftAccessor {
const probejs$$marker: never
}
export abstract class $MinecraftAccessor$$Static implements $MinecraftAccessor {
}
}

declare module "me.jellysquid.mods.sodium.mixin.features.textures.animations.upload.SpriteContentsAnimationFrameAccessor" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $SpriteContentsAnimationFrameAccessor {
"getIndex"(): integer
"getTime"(): integer
get "index"(): integer
get "time"(): integer
}

export namespace $SpriteContentsAnimationFrameAccessor {
const probejs$$marker: never
}
export abstract class $SpriteContentsAnimationFrameAccessor$$Static implements $SpriteContentsAnimationFrameAccessor {
}
}

declare module "me.jellysquid.mods.sodium.mixin.features.textures.NativeImageAccessor" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $NativeImageAccessor {
"getPointer"(): long
get "pointer"(): long
}

export namespace $NativeImageAccessor {
const probejs$$marker: never
}
export abstract class $NativeImageAccessor$$Static implements $NativeImageAccessor {
}
}

declare module "me.jellysquid.mods.sodium.client.world.ReadableContainerExtended" {
import { $PalettedContainerRO, $PalettedContainerRO$$Type } from "net.minecraft.world.level.chunk.PalettedContainerRO"

export interface $ReadableContainerExtended<T = any> {
"sodium$copy"(): $PalettedContainerRO<T>
"sodium$unpack"(t0s: T[], int1: integer, int2: integer, int3: integer, int4: integer, int5: integer, int6: integer): void
"sodium$unpack"(t0s: T[]): void
}

export namespace $ReadableContainerExtended {
function clone<T>(palettedContainerRO0: $PalettedContainerRO$$Type<T>): $PalettedContainerRO<T>
function of<T>(palettedContainerRO0: $PalettedContainerRO$$Type<T>): $ReadableContainerExtended<T>
}
export abstract class $ReadableContainerExtended$$Static<T = any> implements $ReadableContainerExtended<T> {
static "clone"<T>(palettedContainerRO0: $PalettedContainerRO$$Type<T>): $PalettedContainerRO<T>
static "of"<T>(palettedContainerRO0: $PalettedContainerRO$$Type<T>): $ReadableContainerExtended<T>
}
}

declare module "me.jellysquid.mods.sodium.client.render.chunk.map.ChunkTracker" {
import { $ClientChunkEventListener } from "me.jellysquid.mods.sodium.client.render.chunk.map.ClientChunkEventListener"
import { $LongCollection, $LongCollection$$Type } from "it.unimi.dsi.fastutil.longs.LongCollection"
import { $ChunkTracker$ChunkEventHandler$$Type } from "me.jellysquid.mods.sodium.client.render.chunk.map.ChunkTracker$ChunkEventHandler"

export class $ChunkTracker implements $ClientChunkEventListener {
constructor()

public static "forEachChunk"(longCollection0: $LongCollection$$Type, chunkEventHandler1: $ChunkTracker$ChunkEventHandler$$Type): void
public "forEachEvent"(chunkEventHandler0: $ChunkTracker$ChunkEventHandler$$Type, chunkEventHandler1: $ChunkTracker$ChunkEventHandler$$Type): void
public "getReadyChunks"(): $LongCollection
public "onChunkStatusAdded"(int0: integer, int1: integer, int2: integer): void
public "onChunkStatusRemoved"(int0: integer, int1: integer, int2: integer): void
public "updateLoadDistance"(int0: integer): void
public "updateMapCenter"(int0: integer, int1: integer): void
get "readyChunks"(): $LongCollection
}
}

declare module "me.jellysquid.mods.sodium.client.gui.options.OptionGroup$Builder" {
import { $ResourceLocation$$Type } from "net.minecraft.resources.ResourceLocation"
import { $OptionIdentifier$$Type } from "org.embeddedt.embeddium.client.gui.options.OptionIdentifier"
import { $OptionGroup } from "me.jellysquid.mods.sodium.client.gui.options.OptionGroup"
import { $OptionIdentifier$$Type as $OptionIdentifier$0$$Type } from "toni.sodiumoptionsapi.api.OptionIdentifier"
import { $ExtendedOptionGroup } from "toni.sodiumoptionsapi.api.ExtendedOptionGroup"
import { $Supplier$$Type } from "java.util.function.Supplier"
import { $Option, $Option$$Type } from "me.jellysquid.mods.sodium.client.gui.options.Option"
import { $CallbackInfoReturnable$$Type } from "org.spongepowered.asm.mixin.injection.callback.CallbackInfoReturnable"

export class $OptionGroup$Builder implements $ExtendedOptionGroup {
constructor()

public "add"(option0: $Option$$Type<any>): $OptionGroup$Builder
public "addConditionally"(boolean0: boolean, supplier1: $Supplier$$Type<$Option<any>>): $OptionGroup$Builder
public "build"(): $OptionGroup
public static "createBuilder"(id: $ResourceLocation$$Type): $OptionGroup$Builder
public static "createBuilder"(id: $OptionIdentifier$0$$Type<void>): $OptionGroup$Builder
public "handler$eah000$onBuild"(cir: $CallbackInfoReturnable$$Type): void
public "setId"(resourceLocation0: $ResourceLocation$$Type): $OptionGroup$Builder
public "setId"(optionIdentifier0: $OptionIdentifier$$Type<void>): $OptionGroup$Builder
public "sodiumOptionsAPI$setId"(id: $ResourceLocation$$Type): $OptionGroup$Builder
public "sodiumOptionsAPI$setId"(id: $OptionIdentifier$0$$Type): $OptionGroup$Builder
set "id"(value: $ResourceLocation$$Type)
set "id"(value: $OptionIdentifier$$Type<void>)
}
}

declare module "me.jellysquid.mods.sodium.mixin.features.textures.SpriteContentsInvoker" {
import { $NativeImage$$Type } from "com.mojang.blaze3d.platform.NativeImage"

export interface $SpriteContentsInvoker {
"invokeUpload"(int0: integer, int1: integer, int2: integer, int3: integer, nativeImage4s: $NativeImage$$Type[]): void
}

export namespace $SpriteContentsInvoker {
const probejs$$marker: never
}
export abstract class $SpriteContentsInvoker$$Static implements $SpriteContentsInvoker {
}
}

declare module "me.jellysquid.mods.sodium.client.gui.widgets.AbstractWidget" {
import { $GuiEventListener } from "net.minecraft.client.gui.components.events.GuiEventListener"
import { $GuiGraphics$$Type } from "net.minecraft.client.gui.GuiGraphics"
import { $NarrationElementOutput$$Type } from "net.minecraft.client.gui.narration.NarrationElementOutput"
import { $NarratableEntry } from "net.minecraft.client.gui.narration.NarratableEntry"
import { $NarratableEntry$NarrationPriority } from "net.minecraft.client.gui.narration.NarratableEntry$NarrationPriority"
import { $Renderable } from "net.minecraft.client.gui.components.Renderable"
import { $ScreenRectangle } from "net.minecraft.client.gui.navigation.ScreenRectangle"
import { $ComponentPath } from "net.minecraft.client.gui.ComponentPath"
import { $FocusNavigationEvent$$Type } from "net.minecraft.client.gui.navigation.FocusNavigationEvent"

export class $AbstractWidget implements $Renderable, $GuiEventListener, $NarratableEntry {
public "charTyped"(char0: character, int1: integer): boolean
public "getCurrentFocusPath"(): $ComponentPath
public "getRectangle"(): $ScreenRectangle
public "getTabOrderGroup"(): integer
public "isActive"(): boolean
public "isFocused"(): boolean
public "isHovered"(): boolean
public "isMouseOver"(double0: double, double1: double): boolean
public "keyPressed"(int0: integer, int1: integer, int2: integer): boolean
public "keyReleased"(int0: integer, int1: integer, int2: integer): boolean
public "mouseClicked"(double0: double, double1: double, int2: integer): boolean
public "mouseDragged"(double0: double, double1: double, int2: integer, double3: double, double4: double): boolean
public "mouseMoved"(double0: double, double1: double): void
public "mouseReleased"(double0: double, double1: double, int2: integer): boolean
public "mouseScrolled"(double0: double, double1: double, double2: double): boolean
public "narrationPriority"(): $NarratableEntry$NarrationPriority
public "nextFocusPath"(focusNavigationEvent0: $FocusNavigationEvent$$Type): $ComponentPath
public "render"(guiGraphics0: $GuiGraphics$$Type, int1: integer, int2: integer, float3: float): void
public "setFocused"(boolean0: boolean): void
public "updateNarration"(narrationElementOutput0: $NarrationElementOutput$$Type): void
get "currentFocusPath"(): $ComponentPath
get "rectangle"(): $ScreenRectangle
get "tabOrderGroup"(): integer
get "active"(): boolean
get "focused"(): boolean
get "hovered"(): boolean
set "focused"(value: boolean)
}
}

declare module "me.jellysquid.mods.sodium.mixin.core.model.BakedModelMixin" {
import { $EmbeddiumBakedModelExtension } from "org.embeddedt.embeddium.api.model.EmbeddiumBakedModelExtension"
import { $BlockState$$Type } from "net.minecraft.world.level.block.state.BlockState"
import { $RenderType$$Type } from "net.minecraft.client.renderer.RenderType"

export interface $BakedModelMixin extends $EmbeddiumBakedModelExtension {
"useAmbientOcclusionWithLightEmission"(blockState0: $BlockState$$Type, renderType1: $RenderType$$Type): boolean
}

export namespace $BakedModelMixin {
const probejs$$marker: never
}
export abstract class $BakedModelMixin$$Static implements $BakedModelMixin {
}
}

declare module "me.jellysquid.mods.sodium.client.render.chunk.vertex.builder.ChunkMeshBufferBuilder" {
import { $ChunkVertexType$$Type } from "me.jellysquid.mods.sodium.client.render.chunk.vertex.format.ChunkVertexType"
import { $TranslucentQuadAnalyzer$SortState } from "org.embeddedt.embeddium.render.chunk.sorting.TranslucentQuadAnalyzer$SortState"
import { $ChunkVertexEncoder$Vertex$$Type } from "me.jellysquid.mods.sodium.client.render.chunk.vertex.format.ChunkVertexEncoder$Vertex"
import { $Material$$Type } from "me.jellysquid.mods.sodium.client.render.chunk.terrain.material.Material"
import { $ByteBuffer } from "java.nio.ByteBuffer"

export class $ChunkMeshBufferBuilder {
constructor(chunkVertexType0: $ChunkVertexType$$Type, int1: integer, boolean2: boolean)

public "count"(): integer
public "destroy"(): void
public "getSortState"(): $TranslucentQuadAnalyzer$SortState
public "isEmpty"(): boolean
public "push"(vertex0s: $ChunkVertexEncoder$Vertex$$Type[], material1: $Material$$Type): void
public "slice"(): $ByteBuffer
public "start"(int0: integer): void
get "sortState"(): $TranslucentQuadAnalyzer$SortState
get "empty"(): boolean
}
}

declare module "me.jellysquid.mods.sodium.client.gui.options.control.Control" {
import { $Dim2i$$Type } from "me.jellysquid.mods.sodium.client.util.Dim2i"
import { $ControlElement } from "me.jellysquid.mods.sodium.client.gui.options.control.ControlElement"
import { $Option } from "me.jellysquid.mods.sodium.client.gui.options.Option"

export interface $Control<T = any> {
"createElement"(dim2i0: $Dim2i$$Type): $ControlElement<T>
"getMaxWidth"(): integer
"getOption"(): $Option<T>
get "maxWidth"(): integer
get "option"(): $Option<T>
}

export namespace $Control {
const probejs$$marker: never
}
export abstract class $Control$$Static<T = any> implements $Control<T> {
}
}

declare module "me.jellysquid.mods.sodium.mixin.features.textures.animations.tracking.SpriteContentsAnimationFrameAccessor" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $SpriteContentsAnimationFrameAccessor {
"getTime"(): integer
get "time"(): integer
}

export namespace $SpriteContentsAnimationFrameAccessor {
const probejs$$marker: never
}
export abstract class $SpriteContentsAnimationFrameAccessor$$Static implements $SpriteContentsAnimationFrameAccessor {
}
}

declare module "me.jellysquid.mods.sodium.client.world.BiomeSeedProvider" {
import { $ClientLevel$$Type } from "net.minecraft.client.multiplayer.ClientLevel"

export interface $BiomeSeedProvider {
"sodium$getBiomeSeed"(): long
}

export namespace $BiomeSeedProvider {
function getBiomeSeed(clientLevel0: $ClientLevel$$Type): long
}
export abstract class $BiomeSeedProvider$$Static implements $BiomeSeedProvider {
static "getBiomeSeed"(clientLevel0: $ClientLevel$$Type): long
}
}

declare module "me.jellysquid.mods.sodium.client.render.viewport.CameraTransform" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export class $CameraTransform {
readonly "fracX": float
readonly "fracY": float
readonly "fracZ": float
readonly "intX": integer
readonly "intY": integer
readonly "intZ": integer
readonly "x": double
readonly "y": double
readonly "z": double

constructor(double0: double, double1: double, double2: double)

}
}

declare module "me.jellysquid.mods.sodium.client.render.chunk.terrain.material.Material" {
import { $TerrainRenderPass, $TerrainRenderPass$$Type } from "me.jellysquid.mods.sodium.client.render.chunk.terrain.TerrainRenderPass"
import { $AlphaCutoffParameter, $AlphaCutoffParameter$$Type } from "me.jellysquid.mods.sodium.client.render.chunk.terrain.material.parameters.AlphaCutoffParameter"

export class $Material {
readonly "alphaCutoff": $AlphaCutoffParameter
readonly "mipped": boolean
readonly "packed": integer
readonly "pass": $TerrainRenderPass

constructor(terrainRenderPass0: $TerrainRenderPass$$Type, alphaCutoffParameter1: $AlphaCutoffParameter$$Type, boolean2: boolean)

public "bits"(): integer
}
}

declare module "me.jellysquid.mods.sodium.client.render.chunk.vertex.format.ChunkMeshAttribute" {
import { $Enum } from "java.lang.Enum"

export class $ChunkMeshAttribute extends $Enum<$ChunkMeshAttribute> {
static readonly "BLOCK_TEXTURE": $ChunkMeshAttribute
static readonly "COLOR_SHADE": $ChunkMeshAttribute
static readonly "LIGHT_TEXTURE": $ChunkMeshAttribute
static readonly "POSITION_MATERIAL_MESH": $ChunkMeshAttribute

public static "valueOf"(string0: string): $ChunkMeshAttribute
public static "values"(): $ChunkMeshAttribute[]
}
}

declare module "me.jellysquid.mods.sodium.client.model.quad.BakedQuadView" {
import { $ModelQuadFacing } from "me.jellysquid.mods.sodium.client.model.quad.properties.ModelQuadFacing"
import { $Direction } from "net.minecraft.core.Direction"
import { $ModelQuadView } from "me.jellysquid.mods.sodium.client.model.quad.ModelQuadView"
import { $TextureAtlasSprite } from "net.minecraft.client.renderer.texture.TextureAtlasSprite"

export interface $BakedQuadView extends $ModelQuadView {
"getColor"(int0: integer): integer
"getColorIndex"(): integer
"getComputedFaceNormal"(): integer
"getFlags"(): integer
"getForgeNormal"(int0: integer): integer
"getLight"(int0: integer): integer
"getLightFace"(): $Direction
"getModFaceNormal"(): integer
"getNormalFace"(): $ModelQuadFacing
"getSprite"(): $TextureAtlasSprite
"getTexU"(int0: integer): float
"getTexV"(int0: integer): float
"getX"(int0: integer): float
"getY"(int0: integer): float
"getZ"(int0: integer): float
"hasAmbientOcclusion"(): boolean
"hasColor"(): boolean
"hasShade"(): boolean
"setFlags"(int0: integer): void
get "colorIndex"(): integer
get "computedFaceNormal"(): integer
get "flags"(): integer
get "lightFace"(): $Direction
get "modFaceNormal"(): integer
get "normalFace"(): $ModelQuadFacing
get "sprite"(): $TextureAtlasSprite
set "flags"(value: integer)
}

export namespace $BakedQuadView {
const probejs$$marker: never
}
export abstract class $BakedQuadView$$Static implements $BakedQuadView {
}
}

declare module "me.jellysquid.mods.sodium.client.render.chunk.vertex.format.ChunkVertexEncoder" {
import { $ChunkVertexEncoder$Vertex$$Type } from "me.jellysquid.mods.sodium.client.render.chunk.vertex.format.ChunkVertexEncoder$Vertex"
import { $Material$$Type } from "me.jellysquid.mods.sodium.client.render.chunk.terrain.material.Material"

export interface $ChunkVertexEncoder {
"write"(long0: long, material1: $Material$$Type, vertex2: $ChunkVertexEncoder$Vertex$$Type, int3: integer): long
}

export namespace $ChunkVertexEncoder {
const probejs$$marker: never
}
export abstract class $ChunkVertexEncoder$$Static implements $ChunkVertexEncoder {
}
}

declare module "me.jellysquid.mods.sodium.client.render.chunk.vertex.format.ChunkVertexType" {
import { $ChunkVertexEncoder } from "me.jellysquid.mods.sodium.client.render.chunk.vertex.format.ChunkVertexEncoder"
import { $GlVertexFormat } from "me.jellysquid.mods.sodium.client.gl.attribute.GlVertexFormat"
import { $ChunkMeshAttribute } from "me.jellysquid.mods.sodium.client.render.chunk.vertex.format.ChunkMeshAttribute"

export interface $ChunkVertexType {
"getEncoder"(): $ChunkVertexEncoder
"getPositionOffset"(): float
"getPositionScale"(): float
"getTextureScale"(): float
"getVertexFormat"(): $GlVertexFormat<$ChunkMeshAttribute>
get "encoder"(): $ChunkVertexEncoder
get "positionOffset"(): float
get "positionScale"(): float
get "textureScale"(): float
get "vertexFormat"(): $GlVertexFormat<$ChunkMeshAttribute>
}

export namespace $ChunkVertexType {
const probejs$$marker: never
}
export abstract class $ChunkVertexType$$Static implements $ChunkVertexType {
}
}

declare module "me.jellysquid.mods.sodium.client.gui.options.OptionImpact" {
import { $Component } from "net.minecraft.network.chat.Component"
import { $Enum } from "java.lang.Enum"
import { $TextProvider } from "me.jellysquid.mods.sodium.client.gui.options.TextProvider"

export class $OptionImpact extends $Enum<$OptionImpact> implements $TextProvider {
static readonly "HIGH": $OptionImpact
static readonly "LOW": $OptionImpact
static readonly "MEDIUM": $OptionImpact
static readonly "VARIES": $OptionImpact

public "getLocalizedName"(): $Component
public static "valueOf"(string0: string): $OptionImpact
public static "values"(): $OptionImpact[]
get "localizedName"(): $Component
}
}

declare module "me.jellysquid.mods.sodium.client.gl.attribute.GlVertexFormat" {
import { $Enum, $Enum$$Type } from "java.lang.Enum"
import { $EnumMap$$Type } from "java.util.EnumMap"
import { $GlVertexAttribute, $GlVertexAttribute$$Type } from "me.jellysquid.mods.sodium.client.gl.attribute.GlVertexAttribute"
import { $Class$$Type } from "java.lang.Class"
import { $GlVertexFormat$Builder } from "me.jellysquid.mods.sodium.client.gl.attribute.GlVertexFormat$Builder"

export class $GlVertexFormat<T extends $Enum<T> = $Enum<T>> {
constructor(class0: $Class$$Type<T>, enumMap1: $EnumMap$$Type<T, $GlVertexAttribute$$Type>, int2: integer)

public static "builder"<T extends $Enum<T>>(class0: $Class$$Type<T>, int1: integer): $GlVertexFormat$Builder<T>
public "getAttribute"(t0: T): $GlVertexAttribute
public "getStride"(): integer
get "stride"(): integer
}
}

declare module "me.jellysquid.mods.sodium.client.render.texture.SpriteContentsExtended" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $SpriteContentsExtended {
"sodium$hasAnimation"(): boolean
"sodium$isActive"(): boolean
"sodium$setActive"(boolean0: boolean): void
}

export namespace $SpriteContentsExtended {
const probejs$$marker: never
}
export abstract class $SpriteContentsExtended$$Static implements $SpriteContentsExtended {
}
}

declare module "me.jellysquid.mods.sodium.client.buffer.ExtendedVertexFormat$Element" {
import { $VertexFormatElement, $VertexFormatElement$$Type } from "com.mojang.blaze3d.vertex.VertexFormatElement"

export class $ExtendedVertexFormat$Element {
readonly "actual": $VertexFormatElement
readonly "byteLength": integer
readonly "increment": integer

constructor(vertexFormatElement0: $VertexFormatElement$$Type, int1: integer, int2: integer)

}
}

declare module "me.jellysquid.mods.sodium.client.gl.attribute.GlVertexAttribute" {
import { $GlVertexAttributeFormat$$Type } from "me.jellysquid.mods.sodium.client.gl.attribute.GlVertexAttributeFormat"

export class $GlVertexAttribute {
constructor(glVertexAttributeFormat0: $GlVertexAttributeFormat$$Type, int1: integer, boolean2: boolean, int3: integer, int4: integer, boolean5: boolean)

public "getCount"(): integer
public "getFormat"(): integer
public "getPointer"(): integer
public "getSize"(): integer
public "getStride"(): integer
public "isIntType"(): boolean
public "isNormalized"(): boolean
get "count"(): integer
get "format"(): integer
get "pointer"(): integer
get "size"(): integer
get "stride"(): integer
get "intType"(): boolean
get "normalized"(): boolean
}
}

declare module "me.jellysquid.mods.sodium.mixin.features.textures.animations.upload.SpriteContentsAccessor" {
import { $NativeImage } from "com.mojang.blaze3d.platform.NativeImage"

export interface $SpriteContentsAccessor {
"getImages"(): $NativeImage[]
get "images"(): $NativeImage[]
}

export namespace $SpriteContentsAccessor {
const probejs$$marker: never
}
export abstract class $SpriteContentsAccessor$$Static implements $SpriteContentsAccessor {
}
}

declare module "me.jellysquid.mods.sodium.client.world.WorldRendererExtended" {
import { $SodiumWorldRenderer } from "me.jellysquid.mods.sodium.client.render.SodiumWorldRenderer"

export interface $WorldRendererExtended {
"sodium$getWorldRenderer"(): $SodiumWorldRenderer
}

export namespace $WorldRendererExtended {
const probejs$$marker: never
}
export abstract class $WorldRendererExtended$$Static implements $WorldRendererExtended {
}
}

declare module "me.jellysquid.mods.sodium.client.gui.options.OptionFlag" {
import { $Enum } from "java.lang.Enum"

export class $OptionFlag extends $Enum<$OptionFlag> {
static readonly "REQUIRES_ASSET_RELOAD": $OptionFlag
static readonly "REQUIRES_GAME_RESTART": $OptionFlag
static readonly "REQUIRES_RENDERER_RELOAD": $OptionFlag
static readonly "REQUIRES_RENDERER_UPDATE": $OptionFlag

public static "valueOf"(string0: string): $OptionFlag
public static "values"(): $OptionFlag[]
}
}

declare module "me.jellysquid.mods.sodium.client.render.chunk.vertex.format.ChunkVertexEncoder$Vertex" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export class $ChunkVertexEncoder$Vertex {
constructor()

public static "uninitializedQuad"(): $ChunkVertexEncoder$Vertex[]
get "color"(): integer
set "color"(value: integer)
get "light"(): integer
set "light"(value: integer)
get "u"(): float
set "u"(value: float)
get "v"(): float
set "v"(value: float)
get "x"(): float
set "x"(value: float)
get "y"(): float
set "y"(value: float)
get "z"(): float
set "z"(value: float)
}
}

declare module "me.jellysquid.mods.sodium.client.render.SodiumWorldRenderer" {
import { $Camera$$Type } from "net.minecraft.client.Camera"
import { $RenderBuffers$$Type } from "net.minecraft.client.renderer.RenderBuffers"
import { $Viewport$$Type } from "me.jellysquid.mods.sodium.client.render.viewport.Viewport"
import { $Iterator } from "java.util.Iterator"
import { $SortedSet$$Type } from "java.util.SortedSet"
import { $Collection } from "java.util.Collection"
import { $RenderType$$Type } from "net.minecraft.client.renderer.RenderType"
import { $ClientLevel$$Type } from "net.minecraft.client.multiplayer.ClientLevel"
import { $BlockEntity, $BlockEntity$$Type } from "net.minecraft.world.level.block.entity.BlockEntity"
import { $PoseStack$$Type } from "com.mojang.blaze3d.vertex.PoseStack"
import { $Consumer$$Type } from "java.util.function.Consumer"
import { $Entity$$Type } from "net.minecraft.world.entity.Entity"
import { $Minecraft$$Type } from "net.minecraft.client.Minecraft"
import { $Long2ObjectMap$$Type } from "it.unimi.dsi.fastutil.longs.Long2ObjectMap"
import { $BlockDestructionProgress$$Type } from "net.minecraft.server.level.BlockDestructionProgress"

export class $SodiumWorldRenderer {
constructor(minecraft0: $Minecraft$$Type)

public "blockEntityIterator"(): $Iterator<$BlockEntity>
public "didBlockEntityRequestOutline"(): boolean
public "drawChunkLayer"(renderType0: $RenderType$$Type, poseStack1: $PoseStack$$Type, double2: double, double3: double, double4: double): void
public "forEachVisibleBlockEntity"(consumer0: $Consumer$$Type<$BlockEntity$$Type>): void
public "getChunksDebugString"(): string
public "getDebugStrings"(): $Collection<string>
public "getVisibleChunkCount"(): integer
public static "instance"(): $SodiumWorldRenderer
public static "instanceNullable"(): $SodiumWorldRenderer
public "isBoxVisible"(double0: double, double1: double, double2: double, double3: double, double4: double, double5: double): boolean
public "isEntityVisible"(entity0: $Entity$$Type): boolean
public "isSectionReady"(int0: integer, int1: integer, int2: integer): boolean
public "isTerrainRenderComplete"(): boolean
/** @deprecated */
public "onChunkAdded"(int0: integer, int1: integer): void
/** @deprecated */
public "onChunkLightAdded"(int0: integer, int1: integer): void
/** @deprecated */
public "onChunkRemoved"(int0: integer, int1: integer): void
public "reload"(): void
public "renderBlockEntities"(poseStack0: $PoseStack$$Type, renderBuffers1: $RenderBuffers$$Type, long2ObjectMap2: $Long2ObjectMap$$Type<$SortedSet$$Type<$BlockDestructionProgress$$Type>>, camera3: $Camera$$Type, float4: float): void
public "scheduleRebuildForBlockArea"(int0: integer, int1: integer, int2: integer, int3: integer, int4: integer, int5: integer, boolean6: boolean): void
public "scheduleRebuildForChunk"(int0: integer, int1: integer, int2: integer, boolean3: boolean): void
public "scheduleRebuildForChunks"(int0: integer, int1: integer, int2: integer, int3: integer, int4: integer, int5: integer, boolean6: boolean): void
public "scheduleTerrainUpdate"(): void
public "setWorld"(clientLevel0: $ClientLevel$$Type): void
public "setupTerrain"(camera0: $Camera$$Type, viewport1: $Viewport$$Type, int2: integer, boolean3: boolean, boolean4: boolean): void
get "chunksDebugString"(): string
get "debugStrings"(): $Collection<string>
get "visibleChunkCount"(): integer
get "terrainRenderComplete"(): boolean
set "world"(value: $ClientLevel$$Type)
}
}

declare module "me.jellysquid.mods.sodium.client.render.chunk.data.BuiltSectionMeshParts" {
import { $TranslucentQuadAnalyzer$SortState, $TranslucentQuadAnalyzer$SortState$$Type } from "org.embeddedt.embeddium.render.chunk.sorting.TranslucentQuadAnalyzer$SortState"
import { $VertexRange, $VertexRange$$Type } from "me.jellysquid.mods.sodium.client.gl.util.VertexRange"
import { $NativeBuffer, $NativeBuffer$$Type } from "me.jellysquid.mods.sodium.client.util.NativeBuffer"

export class $BuiltSectionMeshParts {
constructor(nativeBuffer0: $NativeBuffer$$Type, nativeBuffer1: $NativeBuffer$$Type, sortState2: $TranslucentQuadAnalyzer$SortState$$Type, vertexRange3s: $VertexRange$$Type[])

public "getIndexData"(): $NativeBuffer
public "getSortState"(): $TranslucentQuadAnalyzer$SortState
public "getVertexData"(): $NativeBuffer
public "getVertexRanges"(): $VertexRange[]
get "indexData"(): $NativeBuffer
get "sortState"(): $TranslucentQuadAnalyzer$SortState
get "vertexData"(): $NativeBuffer
get "vertexRanges"(): $VertexRange[]
}
}

declare module "me.jellysquid.mods.sodium.client.render.chunk.compile.ChunkBuildBuffers" {
import { $ChunkVertexType, $ChunkVertexType$$Type } from "me.jellysquid.mods.sodium.client.render.chunk.vertex.format.ChunkVertexType"
import { $BuiltSectionInfo$Builder$$Type } from "me.jellysquid.mods.sodium.client.render.chunk.data.BuiltSectionInfo$Builder"
import { $ChunkModelBuilder } from "me.jellysquid.mods.sodium.client.render.chunk.compile.buffers.ChunkModelBuilder"
import { $BuiltSectionMeshParts } from "me.jellysquid.mods.sodium.client.render.chunk.data.BuiltSectionMeshParts"
import { $TerrainRenderPass$$Type } from "me.jellysquid.mods.sodium.client.render.chunk.terrain.TerrainRenderPass"
import { $Material$$Type } from "me.jellysquid.mods.sodium.client.render.chunk.terrain.material.Material"

export class $ChunkBuildBuffers {
constructor(chunkVertexType0: $ChunkVertexType$$Type)

public "createMesh"(terrainRenderPass0: $TerrainRenderPass$$Type): $BuiltSectionMeshParts
public "destroy"(): void
public "get"(terrainRenderPass0: $TerrainRenderPass$$Type): $ChunkModelBuilder
public "get"(material0: $Material$$Type): $ChunkModelBuilder
public "getVertexType"(): $ChunkVertexType
public "init"(builder0: $BuiltSectionInfo$Builder$$Type, int1: integer): void
get "vertexType"(): $ChunkVertexType
}
}

declare module "me.jellysquid.mods.sodium.client.render.viewport.ViewportProvider" {
import { $Viewport } from "me.jellysquid.mods.sodium.client.render.viewport.Viewport"

export interface $ViewportProvider {
"sodium$createViewport"(): $Viewport
}

export namespace $ViewportProvider {
const probejs$$marker: never
}
export abstract class $ViewportProvider$$Static implements $ViewportProvider {
}
}

declare module "me.jellysquid.mods.sodium.client.render.chunk.terrain.TerrainRenderPass" {
import { $RenderType$$Type } from "net.minecraft.client.renderer.RenderType"

export class $TerrainRenderPass {
constructor(renderType0: $RenderType$$Type, boolean1: boolean, boolean2: boolean)

/** @deprecated */
public "endDrawing"(): void
public "isReverseOrder"(): boolean
public "isSorted"(): boolean
/** @deprecated */
public "startDrawing"(): void
public "supportsFragmentDiscard"(): boolean
get "reverseOrder"(): boolean
get "sorted"(): boolean
}
}

declare module "me.jellysquid.mods.sodium.client.render.chunk.data.BuiltSectionInfo" {
import { $BlockEntity } from "net.minecraft.world.level.block.entity.BlockEntity"
import { $TextureAtlasSprite } from "net.minecraft.client.renderer.texture.TextureAtlasSprite"

export class $BuiltSectionInfo {
static readonly "EMPTY": $BuiltSectionInfo
readonly "animatedSprites": $TextureAtlasSprite[]
readonly "culledBlockEntities": $BlockEntity[]
readonly "flags": integer
readonly "globalBlockEntities": $BlockEntity[]
readonly "visibilityData": long

}
}

declare module "me.jellysquid.mods.sodium.client.render.vertex.buffer.ExtendedBufferBuilder" {
import { $SodiumBufferBuilder } from "me.jellysquid.mods.sodium.client.render.vertex.buffer.SodiumBufferBuilder"
import { $VertexFormatDescription, $VertexFormatDescription$$Type } from "net.caffeinemc.mods.sodium.api.vertex.format.VertexFormatDescription"
import { $VertexBufferWriter, $VertexBufferWriter$$Type } from "net.caffeinemc.mods.sodium.api.vertex.buffer.VertexBufferWriter"
import { $MemoryStack$$Type } from "org.lwjgl.system.MemoryStack"
import { $VertexConsumer$$Type } from "com.mojang.blaze3d.vertex.VertexConsumer"
import { $ByteBuffer } from "java.nio.ByteBuffer"

export interface $ExtendedBufferBuilder extends $VertexBufferWriter {
"canUseIntrinsics"(): boolean
/** @deprecated */
"isFullWriter"(): boolean
"push"(memoryStack0: $MemoryStack$$Type, long1: long, int2: integer, vertexFormatDescription3: $VertexFormatDescription$$Type): void
"sodium$getBuffer"(): $ByteBuffer
"sodium$getDelegate"(): $SodiumBufferBuilder
"sodium$getElementOffset"(): integer
"sodium$getFormatDescription"(): $VertexFormatDescription
"sodium$moveToNextVertex"(): void
"sodium$usingFixedColor"(): boolean
get "fullWriter"(): boolean
}

export namespace $ExtendedBufferBuilder {
function copyInto(vertexBufferWriter0: $VertexBufferWriter$$Type, memoryStack1: $MemoryStack$$Type, long2: long, int3: integer, vertexFormatDescription4: $VertexFormatDescription$$Type): void
function of(vertexConsumer0: $VertexConsumer$$Type): $VertexBufferWriter
function tryOf(vertexConsumer0: $VertexConsumer$$Type): $VertexBufferWriter
}
export abstract class $ExtendedBufferBuilder$$Static implements $ExtendedBufferBuilder {
static "copyInto"(vertexBufferWriter0: $VertexBufferWriter$$Type, memoryStack1: $MemoryStack$$Type, long2: long, int3: integer, vertexFormatDescription4: $VertexFormatDescription$$Type): void
static "of"(vertexConsumer0: $VertexConsumer$$Type): $VertexBufferWriter
static "tryOf"(vertexConsumer0: $VertexConsumer$$Type): $VertexBufferWriter
}
}

declare module "me.jellysquid.mods.sodium.client.model.color.interop.ItemColorsExtended" {
import { $ItemStack$$Type } from "net.minecraft.world.item.ItemStack"
import { $ItemColor } from "net.minecraft.client.color.item.ItemColor"

export interface $ItemColorsExtended {
"sodium$getColorProvider"(itemStack0: $ItemStack$$Type): $ItemColor
}

export namespace $ItemColorsExtended {
const probejs$$marker: never
}
export abstract class $ItemColorsExtended$$Static implements $ItemColorsExtended {
}
}

declare module "me.jellysquid.mods.sodium.client.render.chunk.map.ChunkTracker$ChunkEventHandler" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $ChunkTracker$ChunkEventHandler {
"apply"(int0: integer, int1: integer): void
}

export namespace $ChunkTracker$ChunkEventHandler {
const probejs$$marker: never
}
export abstract class $ChunkTracker$ChunkEventHandler$$Static implements $ChunkTracker$ChunkEventHandler {
}
}

declare module "me.jellysquid.mods.sodium.client.gui.options.OptionGroup" {
import { $OptionIdentifier } from "org.embeddedt.embeddium.client.gui.options.OptionIdentifier"
import { $ResourceLocation$$Type } from "net.minecraft.resources.ResourceLocation"
import { $ImmutableList } from "com.google.common.collect.ImmutableList"
import { $OptionGroup$Builder } from "me.jellysquid.mods.sodium.client.gui.options.OptionGroup$Builder"
import { $IOptionGroupIdAccessor } from "toni.sodiumoptionsapi.util.IOptionGroupIdAccessor"
import { $OptionIdentifier as $OptionIdentifier$0, $OptionIdentifier$$Type as $OptionIdentifier$0$$Type } from "toni.sodiumoptionsapi.api.OptionIdentifier"
import { $Option } from "me.jellysquid.mods.sodium.client.gui.options.Option"

export class $OptionGroup implements $IOptionGroupIdAccessor {
static readonly "DEFAULT_ID": $OptionIdentifier<void>
readonly "id": $OptionIdentifier<void>

public static "createBuilder"(): $OptionGroup$Builder
public "getId"(): $OptionIdentifier<void>
public "getOptions"(): $ImmutableList<$Option<any>>
public "sodiumOptionsAPI$getId"(): $OptionIdentifier$0
public "sodiumOptionsAPI$setId"(id: $ResourceLocation$$Type): void
public "sodiumOptionsAPI$setId"(id: $OptionIdentifier$0$$Type): void
get "sodiumOptionsAPI$id"(): $OptionIdentifier$0
set "sodiumOptionsAPI$id"(value: $OptionIdentifier$0$$Type)
get "options"(): $ImmutableList<$Option<any>>
}
}

declare module "me.jellysquid.mods.sodium.mixin.features.textures.animations.upload.SpriteContentsAnimationAccessor" {
import { $List } from "java.util.List"
import { $SpriteContents$FrameInfo } from "net.minecraft.client.renderer.texture.SpriteContents$FrameInfo"

export interface $SpriteContentsAnimationAccessor {
"getFrameRowSize"(): integer
"getFrames"(): $List<$SpriteContents$FrameInfo>
get "frameRowSize"(): integer
get "frames"(): $List<$SpriteContents$FrameInfo>
}

export namespace $SpriteContentsAnimationAccessor {
const probejs$$marker: never
}
export abstract class $SpriteContentsAnimationAccessor$$Static implements $SpriteContentsAnimationAccessor {
}
}

declare module "me.jellysquid.mods.sodium.mixin.core.render.VertexFormatAccessor" {
import { $IntList } from "it.unimi.dsi.fastutil.ints.IntList"

export interface $VertexFormatAccessor {
"getOffsets"(): $IntList
get "offsets"(): $IntList
}

export namespace $VertexFormatAccessor {
const probejs$$marker: never
}
export abstract class $VertexFormatAccessor$$Static implements $VertexFormatAccessor {
}
}

declare module "me.jellysquid.mods.sodium.client.gl.attribute.GlVertexFormat$Builder" {
import { $GlVertexFormat } from "me.jellysquid.mods.sodium.client.gl.attribute.GlVertexFormat"
import { $Enum, $Enum$$Type } from "java.lang.Enum"
import { $Class$$Type } from "java.lang.Class"
import { $GlVertexAttributeFormat$$Type } from "me.jellysquid.mods.sodium.client.gl.attribute.GlVertexAttributeFormat"

export class $GlVertexFormat$Builder<T extends $Enum<T> = $Enum<T>> {
constructor(class0: $Class$$Type<T>, int1: integer)

public "addElement"(t0: T, int1: integer, glVertexAttributeFormat2: $GlVertexAttributeFormat$$Type, int3: integer, boolean4: boolean, boolean5: boolean): $GlVertexFormat$Builder<T>
public "build"(): $GlVertexFormat<T>
}
}

declare module "me.jellysquid.mods.sodium.client.buffer.ExtendedVertexFormat" {
import { $ExtendedVertexFormat$Element } from "me.jellysquid.mods.sodium.client.buffer.ExtendedVertexFormat$Element"

export interface $ExtendedVertexFormat {
"embeddium$getExtendedElements"(): $ExtendedVertexFormat$Element[]
}

export namespace $ExtendedVertexFormat {
const probejs$$marker: never
}
export abstract class $ExtendedVertexFormat$$Static implements $ExtendedVertexFormat {
}
}

declare module "me.jellysquid.mods.sodium.client.render.chunk.compile.buffers.ChunkModelBuilder" {
import { $ModelQuadFacing$$Type } from "me.jellysquid.mods.sodium.client.model.quad.properties.ModelQuadFacing"
import { $ChunkMeshBufferBuilder } from "me.jellysquid.mods.sodium.client.render.chunk.vertex.builder.ChunkMeshBufferBuilder"
import { $TextureAtlasSprite$$Type } from "net.minecraft.client.renderer.texture.TextureAtlasSprite"

export interface $ChunkModelBuilder {
"addSprite"(textureAtlasSprite0: $TextureAtlasSprite$$Type): void
"getVertexBuffer"(modelQuadFacing0: $ModelQuadFacing$$Type): $ChunkMeshBufferBuilder
}

export namespace $ChunkModelBuilder {
const probejs$$marker: never
}
export abstract class $ChunkModelBuilder$$Static implements $ChunkModelBuilder {
}
}

declare module "me.jellysquid.mods.sodium.client.render.viewport.Viewport" {
import { $AABB$$Type } from "net.minecraft.world.phys.AABB"
import { $BlockPos } from "net.minecraft.core.BlockPos"
import { $CameraTransform } from "me.jellysquid.mods.sodium.client.render.viewport.CameraTransform"
import { $Vector3d$$Type } from "org.joml.Vector3d"
import { $SectionPos } from "net.minecraft.core.SectionPos"
import { $Frustum$$Type } from "me.jellysquid.mods.sodium.client.render.viewport.frustum.Frustum"

export class $Viewport {
constructor(frustum0: $Frustum$$Type, vector3d1: $Vector3d$$Type)

public "getBlockCoord"(): $BlockPos
public "getChunkCoord"(): $SectionPos
public "getTransform"(): $CameraTransform
public "isBoxVisible"(int0: integer, int1: integer, int2: integer, float3: float): boolean
public "isBoxVisible"(aABB0: $AABB$$Type): boolean
public "isBoxVisible"(int0: integer, int1: integer, int2: integer, float3: float, float4: float, float5: float): boolean
get "blockCoord"(): $BlockPos
get "chunkCoord"(): $SectionPos
get "transform"(): $CameraTransform
}
}

declare module "me.jellysquid.mods.sodium.client.util.Dim2i" {
import { $Point2i, $Point2i$$Type } from "me.jellysquid.mods.sodium.client.util.Point2i"
import { $Record } from "java.lang.Record"

export class $Dim2i extends $Record implements $Point2i {
constructor(x: integer, y: integer, width: integer, height: integer)

public "canFitDimension"(dim2i0: $Dim2i$$Type): boolean
public "containsCursor"(double0: double, double1: double): boolean
public "getCenterX"(): integer
public "getCenterY"(): integer
public "getLimitX"(): integer
public "getLimitY"(): integer
public "height"(): integer
public "overlapsWith"(dim2i0: $Dim2i$$Type): boolean
public "width"(): integer
public "withHeight"(int0: integer): $Dim2i
public "withParentOffset"(point2i0: $Point2i$$Type): $Dim2i
public "withWidth"(int0: integer): $Dim2i
public "withX"(int0: integer): $Dim2i
public "withY"(int0: integer): $Dim2i
public "x"(): integer
public "y"(): integer
get "centerX"(): integer
get "centerY"(): integer
get "limitX"(): integer
get "limitY"(): integer
}
}

declare module "me.jellysquid.mods.sodium.client.model.quad.ModelQuadView" {
import { $Direction } from "net.minecraft.core.Direction"
import { $TextureAtlasSprite } from "net.minecraft.client.renderer.texture.TextureAtlasSprite"

export interface $ModelQuadView {
"getColor"(int0: integer): integer
"getColorIndex"(): integer
"getComputedFaceNormal"(): integer
"getFlags"(): integer
"getForgeNormal"(int0: integer): integer
"getLight"(int0: integer): integer
"getLightFace"(): $Direction
"getModFaceNormal"(): integer
"getSprite"(): $TextureAtlasSprite
"getTexU"(int0: integer): float
"getTexV"(int0: integer): float
"getX"(int0: integer): float
"getY"(int0: integer): float
"getZ"(int0: integer): float
"hasAmbientOcclusion"(): boolean
"hasColor"(): boolean
get "colorIndex"(): integer
get "computedFaceNormal"(): integer
get "flags"(): integer
get "lightFace"(): $Direction
get "modFaceNormal"(): integer
get "sprite"(): $TextureAtlasSprite
}

export namespace $ModelQuadView {
const probejs$$marker: never
}
export abstract class $ModelQuadView$$Static implements $ModelQuadView {
}
}

declare module "me.jellysquid.mods.sodium.client.render.viewport.frustum.Frustum" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $Frustum {
"testAab"(float0: float, float1: float, float2: float, float3: float, float4: float, float5: float): boolean
}

export namespace $Frustum {
const probejs$$marker: never
}
export abstract class $Frustum$$Static implements $Frustum {
}
}

declare module "me.jellysquid.mods.sodium.client.util.NativeBuffer" {
import { $ByteBuffer, $ByteBuffer$$Type } from "java.nio.ByteBuffer"

export class $NativeBuffer {
constructor(int0: integer)

public static "copy"(byteBuffer0: $ByteBuffer$$Type): $NativeBuffer
public "free"(): void
public "getDirectBuffer"(): $ByteBuffer
public "getLength"(): integer
public static "getTotalAllocated"(): long
public static "reclaim"(boolean0: boolean): void
get "directBuffer"(): $ByteBuffer
get "length"(): integer
}
}

declare module "me.jellysquid.mods.sodium.client.gui.options.TextProvider" {
import { $Component } from "net.minecraft.network.chat.Component"

export interface $TextProvider {
"getLocalizedName"(): $Component
get "localizedName"(): $Component
}

export namespace $TextProvider {
const probejs$$marker: never
}
export abstract class $TextProvider$$Static implements $TextProvider {
}
}

declare module "me.jellysquid.mods.sodium.client.gl.attribute.GlVertexAttributeFormat" {
import { $Record } from "java.lang.Record"

export class $GlVertexAttributeFormat extends $Record {
static readonly "FLOAT": $GlVertexAttributeFormat
static readonly "UNSIGNED_BYTE": $GlVertexAttributeFormat
static readonly "UNSIGNED_INT": $GlVertexAttributeFormat
static readonly "UNSIGNED_SHORT": $GlVertexAttributeFormat

constructor(typeId: integer, size: integer)

public "size"(): integer
public "typeId"(): integer
}
}

