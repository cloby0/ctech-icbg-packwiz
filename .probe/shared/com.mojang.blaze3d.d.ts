declare module "com.mojang.blaze3d.shaders.Shader" {
import { $Program } from "com.mojang.blaze3d.shaders.Program"

export interface $Shader {
"attachToProgram"(): void
"getFragmentProgram"(): $Program
"getId"(): integer
"getVertexProgram"(): $Program
"markDirty"(): void
get "fragmentProgram"(): $Program
get "id"(): integer
get "vertexProgram"(): $Program
}

export namespace $Shader {
const probejs$$marker: never
}
export abstract class $Shader$$Static implements $Shader {
}
}

declare module "com.mojang.blaze3d.platform.Monitor" {
import { $VideoMode, $VideoMode$$Type } from "com.mojang.blaze3d.platform.VideoMode"
import { $Optional$$Type } from "java.util.Optional"

export class $Monitor {
constructor(long0: long)

public "getCurrentMode"(): $VideoMode
public "getMode"(int0: integer): $VideoMode
public "getModeCount"(): integer
public "getMonitor"(): long
public "getPreferredVidMode"(optional0: $Optional$$Type<$VideoMode$$Type>): $VideoMode
public "getVideoModeIndex"(videoMode0: $VideoMode$$Type): integer
public "getX"(): integer
public "getY"(): integer
public "refreshVideoModes"(): void
get "currentMode"(): $VideoMode
get "modeCount"(): integer
get "monitor"(): long
get "x"(): integer
get "y"(): integer
}
}

declare module "com.mojang.blaze3d.font.GlyphInfo" {
import { $BakedGlyph } from "net.minecraft.client.gui.font.glyphs.BakedGlyph"
import { $Function$$Type } from "java.util.function.Function"
import { $SheetGlyphInfo$$Type } from "com.mojang.blaze3d.font.SheetGlyphInfo"

export interface $GlyphInfo {
"bake"(function0: $Function$$Type<$SheetGlyphInfo$$Type, $BakedGlyph>): $BakedGlyph
"getAdvance"(boolean0: boolean): float
"getAdvance"(): float
"getBoldOffset"(): float
"getShadowOffset"(): float
get "advance"(): float
get "boldOffset"(): float
get "shadowOffset"(): float
}

export namespace $GlyphInfo {
const probejs$$marker: never
}
export abstract class $GlyphInfo$$Static implements $GlyphInfo {
}
}

declare module "com.mojang.blaze3d.audio.Listener" {
import { $Vec3, $Vec3$$Type } from "net.minecraft.world.phys.Vec3"
import { $Vector3f$$Type } from "org.joml.Vector3f"

export class $Listener {
constructor()

public "getGain"(): float
public "getListenerPosition"(): $Vec3
public "reset"(): void
public "setGain"(float0: float): void
public "setListenerOrientation"(vector3f0: $Vector3f$$Type, vector3f1: $Vector3f$$Type): void
public "setListenerPosition"(vec30: $Vec3$$Type): void
get "gain"(): float
get "listenerPosition"(): $Vec3
set "gain"(value: float)
set "listenerPosition"(value: $Vec3$$Type)
}
}

declare module "com.mojang.blaze3d.shaders.FogShape" {
import { $Enum } from "java.lang.Enum"

export class $FogShape extends $Enum<$FogShape> {
static readonly "CYLINDER": $FogShape
static readonly "SPHERE": $FogShape

public "getIndex"(): integer
public static "valueOf"(string0: string): $FogShape
public static "values"(): $FogShape[]
get "index"(): integer
}
}

declare module "com.mojang.blaze3d.platform.VideoMode" {
import { $GLFWVidMode$Buffer$$Type } from "org.lwjgl.glfw.GLFWVidMode$Buffer"
import { $GLFWVidMode$$Type } from "org.lwjgl.glfw.GLFWVidMode"
import { $Optional } from "java.util.Optional"

export class $VideoMode {
constructor(gLFWVidMode0: $GLFWVidMode$$Type)
constructor(buffer0: $GLFWVidMode$Buffer$$Type)
constructor(int0: integer, int1: integer, int2: integer, int3: integer, int4: integer, int5: integer)

public "getBlueBits"(): integer
public "getGreenBits"(): integer
public "getHeight"(): integer
public "getRedBits"(): integer
public "getRefreshRate"(): integer
public "getWidth"(): integer
public static "read"(string0: string): $Optional<$VideoMode>
public "write"(): string
get "blueBits"(): integer
get "greenBits"(): integer
get "height"(): integer
get "redBits"(): integer
get "refreshRate"(): integer
get "width"(): integer
}
}

declare module "com.mojang.blaze3d.platform.InputConstants$Type" {
import { $InputConstants$Key } from "com.mojang.blaze3d.platform.InputConstants$Key"
import { $Enum } from "java.lang.Enum"

export class $InputConstants$Type extends $Enum<$InputConstants$Type> {
static readonly "KEYSYM": $InputConstants$Type
static readonly "MOUSE": $InputConstants$Type
static readonly "SCANCODE": $InputConstants$Type

public "getOrCreate"(int0: integer): $InputConstants$Key
public static "valueOf"(string0: string): $InputConstants$Type
public static "values"(): $InputConstants$Type[]
}
}

declare module "com.mojang.blaze3d.vertex.BufferBuilder$RenderedBuffer" {
import { $BufferBuilder$DrawState } from "com.mojang.blaze3d.vertex.BufferBuilder$DrawState"
import { $ByteBuffer } from "java.nio.ByteBuffer"

export class $BufferBuilder$RenderedBuffer {
public "drawState"(): $BufferBuilder$DrawState
public "indexBuffer"(): $ByteBuffer
public "isEmpty"(): boolean
public "release"(): void
public "vertexBuffer"(): $ByteBuffer
get "empty"(): boolean
}
}

declare module "com.mojang.blaze3d.platform.IconSet" {
import { $List } from "java.util.List"
import { $Enum } from "java.lang.Enum"
import { $IoSupplier } from "net.minecraft.server.packs.resources.IoSupplier"
import { $PackResources$$Type } from "net.minecraft.server.packs.PackResources"
import { $InputStream } from "java.io.InputStream"

export class $IconSet extends $Enum<$IconSet> {
static readonly "RELEASE": $IconSet
static readonly "SNAPSHOT": $IconSet

public "getMacIcon"(packResources0: $PackResources$$Type): $IoSupplier<$InputStream>
public "getStandardIcons"(packResources0: $PackResources$$Type): $List<$IoSupplier<$InputStream>>
public static "valueOf"(string0: string): $IconSet
public static "values"(): $IconSet[]
}
}

declare module "com.mojang.blaze3d.platform.InputConstants$Key" {
import { $Component, $Component$$Type } from "net.minecraft.network.chat.Component"
import { $AccessInputConstantsKey } from "com.blamejared.controlling.mixin.AccessInputConstantsKey"
import { $InputConstants$Type } from "com.mojang.blaze3d.platform.InputConstants$Type"
import { $OptionalInt } from "java.util.OptionalInt"
import { $LazyLoadedValue, $LazyLoadedValue$$Type } from "net.minecraft.util.LazyLoadedValue"

export class $InputConstants$Key implements $AccessInputConstantsKey {
public "getDisplayName"(): $Component
public "getName"(): string
public "getNumericKeyValue"(): $OptionalInt
public "getType"(): $InputConstants$Type
public "getValue"(): integer
get "displayName"(): $LazyLoadedValue<$Component>
set "displayName"(value: $LazyLoadedValue$$Type<$Component$$Type>)
get "name"(): string
get "numericKeyValue"(): $OptionalInt
get "type"(): $InputConstants$Type
get "value"(): integer
}
}

declare module "com.mojang.blaze3d.vertex.VertexBuffer" {
import { $ShaderInstance$$Type } from "net.minecraft.client.renderer.ShaderInstance"
import { $VertexBuffer$Usage$$Type } from "com.mojang.blaze3d.vertex.VertexBuffer$Usage"
import { $Matrix4f$$Type } from "org.joml.Matrix4f"
import { $AutoCloseable } from "java.lang.AutoCloseable"
import { $VertexFormat } from "com.mojang.blaze3d.vertex.VertexFormat"
import { $BufferBuilder$RenderedBuffer$$Type } from "com.mojang.blaze3d.vertex.BufferBuilder$RenderedBuffer"

export class $VertexBuffer implements $AutoCloseable {
constructor(usage0: $VertexBuffer$Usage$$Type)

public "bind"(): void
public "close"(): void
public "draw"(): void
public "drawWithShader"(matrix4f0: $Matrix4f$$Type, matrix4f1: $Matrix4f$$Type, shaderInstance2: $ShaderInstance$$Type): void
public "getFormat"(): $VertexFormat
public "isInvalid"(): boolean
public static "unbind"(): void
public "upload"(renderedBuffer0: $BufferBuilder$RenderedBuffer$$Type): void
get "format"(): $VertexFormat
get "invalid"(): boolean
}
}

declare module "com.mojang.blaze3d.pipeline.RenderTarget" {
import { $MixinRenderTargetAccessor } from "dev.nonamecrackers2.simpleclouds.mixin.MixinRenderTargetAccessor"

export class $RenderTarget implements $MixinRenderTargetAccessor {
readonly "useDepth": boolean

constructor(boolean0: boolean)

public "bindRead"(): void
public "bindWrite"(boolean0: boolean): void
public "blitToScreen"(int0: integer, int1: integer, boolean2: boolean): void
public "blitToScreen"(int0: integer, int1: integer): void
public "checkStatus"(): void
public "clear"(boolean0: boolean): void
public "copyDepthFrom"(renderTarget0: $RenderTarget$$Type): void
public "createBuffers"(int0: integer, int1: integer, boolean2: boolean): void
public "destroyBuffers"(): void
public "enableStencil"(): void
public "finalize"(): void
public "getColorTextureId"(): integer
public "getDepthTextureId"(): integer
public "isStencilEnabled"(): boolean
public "redirect$feg000$simpleclouds$disableNoViewportChangeOnClear"(boolean0: boolean): boolean
public "resize"(int0: integer, int1: integer, boolean2: boolean): void
public "setClearColor"(float0: float, float1: float, float2: float, float3: float): void
public "setFilterMode"(int0: integer): void
public "unbindRead"(): void
public "unbindWrite"(): void
get "filterMode"(): integer
set "filterMode"(value: integer)
get "frameBufferId"(): integer
set "frameBufferId"(value: integer)
get "height"(): integer
set "height"(value: integer)
get "viewHeight"(): integer
set "viewHeight"(value: integer)
get "viewWidth"(): integer
set "viewWidth"(value: integer)
get "width"(): integer
set "width"(value: integer)
get "colorTextureId"(): integer
get "depthTextureId"(): integer
get "stencilEnabled"(): boolean
}
}

declare module "com.mojang.blaze3d.platform.NativeImage" {
import { $STBTTFontinfo$$Type } from "org.lwjgl.stb.STBTTFontinfo"
import { $IntUnaryOperator$$Type } from "java.util.function.IntUnaryOperator"
import { $NativeImageAccessor } from "com.samsthenerd.inline.mixin.core.NativeImageAccessor"
import { $AutoCloseable } from "java.lang.AutoCloseable"
import { $ByteBuffer$$Type } from "java.nio.ByteBuffer"
import { $File$$Type } from "java.io.File"
import { $NativeImage$Format, $NativeImage$Format$$Type } from "com.mojang.blaze3d.platform.NativeImage$Format"
import { $NativeImageAccess } from "io.github.fishstiz.minecraftcursor.mixin.NativeImageAccess"
import { $WritableByteChannel$$Type } from "java.nio.channels.WritableByteChannel"
import { $Path$$Type } from "java.nio.file.Path"
import { $NativeImageAccessor as $NativeImageAccessor$0 } from "me.jellysquid.mods.sodium.mixin.features.textures.NativeImageAccessor"
import { $InputStream$$Type } from "java.io.InputStream"

export class $NativeImage implements $AutoCloseable, $NativeImageAccess, $NativeImageAccessor, $NativeImageAccessor$0 {
constructor(format0: $NativeImage$Format$$Type, int1: integer, int2: integer, boolean3: boolean)
constructor(int0: integer, int1: integer, boolean2: boolean)

public "applyToAllPixels"(intUnaryOperator0: $IntUnaryOperator$$Type): void
public "asByteArray"(): byte[]
public "blendPixel"(int0: integer, int1: integer, int2: integer): void
public "close"(): void
public "copyFrom"(nativeImage0: $NativeImage$$Type): void
public "copyFromFont"(sTBTTFontinfo0: $STBTTFontinfo$$Type, int1: integer, int2: integer, int3: integer, float4: float, float5: float, float6: float, float7: float, int8: integer, int9: integer): void
public "copyRect"(int0: integer, int1: integer, int2: integer, int3: integer, int4: integer, int5: integer, boolean6: boolean, boolean7: boolean): void
public "copyRect"(nativeImage0: $NativeImage$$Type, int1: integer, int2: integer, int3: integer, int4: integer, int5: integer, int6: integer, boolean7: boolean, boolean8: boolean): void
public "downloadDepthBuffer"(float0: float): void
public "downloadTexture"(int0: integer, boolean1: boolean): void
public "drawPixels"(): void
public "fillRect"(int0: integer, int1: integer, int2: integer, int3: integer, int4: integer): void
public "flipY"(): void
public "format"(): $NativeImage$Format
public "getBlueOrLuminance"(int0: integer, int1: integer): byte
public "getGreenOrLuminance"(int0: integer, int1: integer): byte
public "getHeight"(): integer
public "getLuminanceOrAlpha"(int0: integer, int1: integer): byte
public "getPixelRGBA"(int0: integer, int1: integer): integer
public "getPixelsRGBA"(): integer[]
public "getRedOrLuminance"(int0: integer, int1: integer): byte
public "getWidth"(): integer
/** @deprecated */
public "makePixelArray"(): integer[]
public "mappedCopy"(intUnaryOperator0: $IntUnaryOperator$$Type): $NativeImage
public static "read"(format0: $NativeImage$Format$$Type, inputStream1: $InputStream$$Type): $NativeImage
public static "read"(format0: $NativeImage$Format$$Type, byteBuffer1: $ByteBuffer$$Type): $NativeImage
public static "read"(byteBuffer0: $ByteBuffer$$Type): $NativeImage
public static "read"(byte0s: byte[]): $NativeImage
public static "read"(inputStream0: $InputStream$$Type): $NativeImage
public "resizeSubRectTo"(int0: integer, int1: integer, int2: integer, int3: integer, nativeImage4: $NativeImage$$Type): void
public "setPixelLuminance"(int0: integer, int1: integer, byte2: byte): void
public "setPixelRGBA"(int0: integer, int1: integer, int2: integer): void
public "untrack"(): void
public "upload"(int0: integer, int1: integer, int2: integer, boolean3: boolean): void
public "upload"(int0: integer, int1: integer, int2: integer, int3: integer, int4: integer, int5: integer, int6: integer, boolean7: boolean, boolean8: boolean): void
public "upload"(int0: integer, int1: integer, int2: integer, int3: integer, int4: integer, int5: integer, int6: integer, boolean7: boolean, boolean8: boolean, boolean9: boolean, boolean10: boolean): void
public "writeToChannel"(writableByteChannel0: $WritableByteChannel$$Type): boolean
public "writeToFile"(path0: $Path$$Type): void
public "writeToFile"(file0: $File$$Type): void
get "pixels"(): long
set "pixels"(value: long)
get "height"(): integer
get "pixelsRGBA"(): integer[]
get "width"(): integer
}
}

declare module "com.mojang.blaze3d.vertex.BufferBuilder$DrawState" {
import { $VertexFormat$IndexType, $VertexFormat$IndexType$$Type } from "com.mojang.blaze3d.vertex.VertexFormat$IndexType"
import { $Record } from "java.lang.Record"
import { $VertexFormat$Mode, $VertexFormat$Mode$$Type } from "com.mojang.blaze3d.vertex.VertexFormat$Mode"
import { $VertexFormat, $VertexFormat$$Type } from "com.mojang.blaze3d.vertex.VertexFormat"

export class $BufferBuilder$DrawState extends $Record {
constructor(format: $VertexFormat$$Type, vertexCount: integer, indexCount: integer, mode: $VertexFormat$Mode$$Type, indexType: $VertexFormat$IndexType$$Type, indexOnly: boolean, sequentialIndex: boolean)

public "bufferSize"(): integer
public "format"(): $VertexFormat
public "indexBufferEnd"(): integer
public "indexBufferStart"(): integer
public "indexCount"(): integer
public "indexOnly"(): boolean
public "indexType"(): $VertexFormat$IndexType
public "mode"(): $VertexFormat$Mode
public "sequentialIndex"(): boolean
public "vertexBufferEnd"(): integer
public "vertexBufferSize"(): integer
public "vertexBufferStart"(): integer
public "vertexCount"(): integer
}
}

declare module "com.mojang.blaze3d.vertex.VertexConsumer" {
import { $PoseStack$Pose$$Type } from "com.mojang.blaze3d.vertex.PoseStack$Pose"
import { $Vector3f$$Type } from "org.joml.Vector3f"
import { $VertexFormatElement$$Type } from "com.mojang.blaze3d.vertex.VertexFormatElement"
import { $Matrix3f$$Type } from "org.joml.Matrix3f"
import { $BakedQuad$$Type } from "net.minecraft.client.renderer.block.model.BakedQuad"
import { $Matrix4f$$Type } from "org.joml.Matrix4f"
import { $IForgeVertexConsumer } from "net.minecraftforge.client.extensions.IForgeVertexConsumer"
import { $ByteBuffer$$Type } from "java.nio.ByteBuffer"

export interface $VertexConsumer extends $IForgeVertexConsumer {
"applyBakedLighting"(int0: integer, byteBuffer1: $ByteBuffer$$Type): integer
"applyBakedNormals"(vector3f0: $Vector3f$$Type, byteBuffer1: $ByteBuffer$$Type, matrix3f2: $Matrix3f$$Type): void
"color"(float0: float, float1: float, float2: float, float3: float): $VertexConsumer
"color"(int0: integer, int1: integer, int2: integer, int3: integer): $VertexConsumer
"color"(int0: integer): $VertexConsumer
"defaultColor"(int0: integer, int1: integer, int2: integer, int3: integer): void
"endVertex"(): void
"misc"(vertexFormatElement0: $VertexFormatElement$$Type, ...int1s: integer[]): $VertexConsumer
"normal"(float0: float, float1: float, float2: float): $VertexConsumer
"normal"(matrix3f0: $Matrix3f$$Type, float1: float, float2: float, float3: float): $VertexConsumer
"overlayCoords"(int0: integer, int1: integer): $VertexConsumer
"overlayCoords"(int0: integer): $VertexConsumer
"putBulkData"(pose0: $PoseStack$Pose$$Type, bakedQuad1: $BakedQuad$$Type, float2: float, float3: float, float4: float, int5: integer, int6: integer): void
"putBulkData"(pose0: $PoseStack$Pose$$Type, bakedQuad1: $BakedQuad$$Type, float2s: float[], float3: float, float4: float, float5: float, int6s: integer[], int7: integer, boolean8: boolean): void
"putBulkData"(pose0: $PoseStack$Pose$$Type, bakedQuad1: $BakedQuad$$Type, float2s: float[], float3: float, float4: float, float5: float, float6: float, int7s: integer[], int8: integer, boolean9: boolean): void
"putBulkData"(pose0: $PoseStack$Pose$$Type, bakedQuad1: $BakedQuad$$Type, float2: float, float3: float, float4: float, float5: float, int6: integer, int7: integer, boolean8: boolean): void
"unsetDefaultColor"(): void
"uv"(float0: float, float1: float): $VertexConsumer
"uv2"(int0: integer, int1: integer): $VertexConsumer
"uv2"(int0: integer): $VertexConsumer
"vertex"(double0: double, double1: double, double2: double): $VertexConsumer
"vertex"(matrix4f0: $Matrix4f$$Type, float1: float, float2: float, float3: float): $VertexConsumer
"vertex"(float0: float, float1: float, float2: float, float3: float, float4: float, float5: float, float6: float, float7: float, float8: float, int9: integer, int10: integer, float11: float, float12: float, float13: float): void
}

export namespace $VertexConsumer {
const probejs$$marker: never
}
export abstract class $VertexConsumer$$Static implements $VertexConsumer {
}
}

declare module "com.mojang.blaze3d.audio.Library" {
import { $List } from "java.util.List"
import { $Library$Pool$$Type } from "com.mojang.blaze3d.audio.Library$Pool"
import { $Channel, $Channel$$Type } from "com.mojang.blaze3d.audio.Channel"
import { $Listener } from "com.mojang.blaze3d.audio.Listener"

export class $Library {
constructor()

public "acquireChannel"(pool0: $Library$Pool$$Type): $Channel
public "cleanup"(): void
public "getAvailableSoundDevices"(): $List<string>
public "getCurrentDeviceName"(): string
public "getDebugString"(): string
public static "getDefaultDeviceName"(): string
public "getListener"(): $Listener
public "hasDefaultDeviceChanged"(): boolean
public "init"(string0: string, boolean1: boolean): void
public "isCurrentDeviceDisconnected"(): boolean
public "releaseChannel"(channel0: $Channel$$Type): void
get "availableSoundDevices"(): $List<string>
get "currentDeviceName"(): string
get "debugString"(): string
get "listener"(): $Listener
get "currentDeviceDisconnected"(): boolean
}
}

declare module "com.mojang.blaze3d.platform.MonitorCreator" {
import { $Monitor } from "com.mojang.blaze3d.platform.Monitor"

export interface $MonitorCreator {
"createMonitor"(long0: long): $Monitor
}

export namespace $MonitorCreator {
const probejs$$marker: never
}
export abstract class $MonitorCreator$$Static implements $MonitorCreator {
}
}

declare module "com.mojang.blaze3d.vertex.VertexFormatElement$Usage" {
import { $Enum } from "java.lang.Enum"

export class $VertexFormatElement$Usage extends $Enum<$VertexFormatElement$Usage> {
static readonly "COLOR": $VertexFormatElement$Usage
static readonly "GENERIC": $VertexFormatElement$Usage
static readonly "NORMAL": $VertexFormatElement$Usage
static readonly "PADDING": $VertexFormatElement$Usage
static readonly "POSITION": $VertexFormatElement$Usage
static readonly "UV": $VertexFormatElement$Usage

public "clearBufferState"(int0: integer, int1: integer): void
public "getName"(): string
public static "valueOf"(string0: string): $VertexFormatElement$Usage
public static "values"(): $VertexFormatElement$Usage[]
get "name"(): string
}
}

declare module "com.mojang.blaze3d.platform.NativeImage$Format" {
import { $Enum } from "java.lang.Enum"

export class $NativeImage$Format extends $Enum<$NativeImage$Format> {
static readonly "LUMINANCE": $NativeImage$Format
static readonly "LUMINANCE_ALPHA": $NativeImage$Format
static readonly "RGB": $NativeImage$Format
static readonly "RGBA": $NativeImage$Format

public "alphaOffset"(): integer
public "blueOffset"(): integer
public "components"(): integer
public "glFormat"(): integer
public "greenOffset"(): integer
public "hasAlpha"(): boolean
public "hasBlue"(): boolean
public "hasGreen"(): boolean
public "hasLuminance"(): boolean
public "hasLuminanceOrAlpha"(): boolean
public "hasLuminanceOrBlue"(): boolean
public "hasLuminanceOrGreen"(): boolean
public "hasLuminanceOrRed"(): boolean
public "hasRed"(): boolean
public "luminanceOffset"(): integer
public "luminanceOrAlphaOffset"(): integer
public "luminanceOrBlueOffset"(): integer
public "luminanceOrGreenOffset"(): integer
public "luminanceOrRedOffset"(): integer
public "redOffset"(): integer
public "setPackPixelStoreState"(): void
public "setUnpackPixelStoreState"(): void
public "supportedByStb"(): boolean
public static "valueOf"(string0: string): $NativeImage$Format
public static "values"(): $NativeImage$Format[]
}
}

declare module "com.mojang.blaze3d.audio.Library$Pool" {
import { $Enum } from "java.lang.Enum"

export class $Library$Pool extends $Enum<$Library$Pool> {
static readonly "STATIC": $Library$Pool
static readonly "STREAMING": $Library$Pool

public static "valueOf"(string0: string): $Library$Pool
public static "values"(): $Library$Pool[]
}
}

declare module "com.mojang.blaze3d.audio.Channel" {
import { $CallbackInfo$$Type } from "org.spongepowered.asm.mixin.injection.callback.CallbackInfo"
import { $SoundBuffer$$Type } from "com.mojang.blaze3d.audio.SoundBuffer"
import { $Blaze3DAudioChannelAccessor } from "rbasamoyai.createbigcannons.mixin.client.Blaze3DAudioChannelAccessor"
import { $ChannelAccessor } from "com.sonicether.soundphysics.mixin.ChannelAccessor"
import { $Vec3$$Type } from "net.minecraft.world.phys.Vec3"
import { $AudioStream$$Type } from "net.minecraft.client.sounds.AudioStream"
import { $CallbackInfoReturnable$$Type } from "org.spongepowered.asm.mixin.injection.callback.CallbackInfoReturnable"

export class $Channel implements $Blaze3DAudioChannelAccessor, $ChannelAccessor {
static readonly "BUFFER_DURATION_SECONDS": integer

public "attachBufferStream"(audioStream0: $AudioStream$$Type): void
public "attachStaticBuffer"(soundBuffer0: $SoundBuffer$$Type): void
public "destroy"(): void
public "disableAttenuation"(): void
public "handler$bpp000$attachBufferStream"(audioStream: $AudioStream$$Type, ci: $CallbackInfo$$Type): void
public "handler$bpp000$attachStaticBuffer"(soundBuffer: $SoundBuffer$$Type, ci: $CallbackInfo$$Type): void
public "handler$bpp000$play"(ci: $CallbackInfo$$Type): void
public "handler$bpp000$stop"(ci: $CallbackInfo$$Type): void
public "handler$bpp000$stopped"(cir: $CallbackInfoReturnable$$Type): void
public "linearAttenuation"(float0: float): void
public "pause"(): void
public "play"(): void
public "playing"(): boolean
public "pumpBuffers"(int0: integer): void
public "setLooping"(boolean0: boolean): void
public "setPitch"(float0: float): void
public "setRelative"(boolean0: boolean): void
public "setSelfPosition"(vec30: $Vec3$$Type): void
public "setVolume"(float0: float): void
public "stop"(): void
public "stopped"(): boolean
public "unpause"(): void
public "updateStream"(): void
set "looping"(value: boolean)
set "pitch"(value: float)
set "relative"(value: boolean)
set "selfPosition"(value: $Vec3$$Type)
set "volume"(value: float)
}
}

declare module "com.mojang.blaze3d.shaders.BlendMode" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export class $BlendMode {
constructor()
constructor(int0: integer, int1: integer, int2: integer)
constructor(int0: integer, int1: integer, int2: integer, int3: integer, int4: integer)

public "apply"(): void
public "isOpaque"(): boolean
public static "stringToBlendFactor"(string0: string): integer
public static "stringToBlendFunc"(string0: string): integer
get "opaque"(): boolean
}
}

declare module "com.mojang.blaze3d.shaders.Program" {
import { $GlslPreprocessor$$Type } from "com.mojang.blaze3d.preprocessor.GlslPreprocessor"
import { $Program$Type$$Type } from "com.mojang.blaze3d.shaders.Program$Type"
import { $Shader$$Type } from "com.mojang.blaze3d.shaders.Shader"
import { $InputStream$$Type } from "java.io.InputStream"

export class $Program {
constructor(type0: $Program$Type$$Type, int1: integer, string2: string)

public "attachToShader"(shader0: $Shader$$Type): void
public "close"(): void
public static "compileShader"(type0: $Program$Type$$Type, string1: string, inputStream2: $InputStream$$Type, string3: string, glslPreprocessor4: $GlslPreprocessor$$Type): $Program
public "getName"(): string
get "name"(): string
}
}

declare module "com.mojang.blaze3d.preprocessor.GlslPreprocessor" {
import { $List } from "java.util.List"

export class $GlslPreprocessor {
constructor()

public "applyImport"(boolean0: boolean, string1: string): string
public "process"(string0: string): $List<string>
}
}

declare module "com.mojang.blaze3d.font.GlyphProvider" {
import { $GlyphInfo } from "com.mojang.blaze3d.font.GlyphInfo"
import { $IntSet } from "it.unimi.dsi.fastutil.ints.IntSet"
import { $AutoCloseable } from "java.lang.AutoCloseable"

export interface $GlyphProvider extends $AutoCloseable {
"close"(): void
"getGlyph"(int0: integer): $GlyphInfo
"getSupportedGlyphs"(): $IntSet
get "supportedGlyphs"(): $IntSet
}

export namespace $GlyphProvider {
const probejs$$marker: never
}
export abstract class $GlyphProvider$$Static implements $GlyphProvider {
}
}

declare module "com.mojang.blaze3d.shaders.Program$Type" {
import { $Enum } from "java.lang.Enum"
import { $Map } from "java.util.Map"
import { $Program } from "com.mojang.blaze3d.shaders.Program"

export class $Program$Type extends $Enum<$Program$Type> {
static readonly "FRAGMENT": $Program$Type
static readonly "VERTEX": $Program$Type

public "getExtension"(): string
public "getGlType"(): integer
public "getName"(): string
public "getPrograms"(): $Map<string, $Program>
public static "valueOf"(string0: string): $Program$Type
public static "values"(): $Program$Type[]
get "extension"(): string
get "glType"(): integer
get "name"(): string
get "programs"(): $Map<string, $Program>
}
}

declare module "com.mojang.blaze3d.shaders.EffectProgram" {
import { $Effect$$Type } from "com.mojang.blaze3d.shaders.Effect"
import { $Program$Type$$Type } from "com.mojang.blaze3d.shaders.Program$Type"
import { $Program } from "com.mojang.blaze3d.shaders.Program"
import { $InputStream$$Type } from "java.io.InputStream"

export class $EffectProgram extends $Program {
public "attachToEffect"(effect0: $Effect$$Type): void
public static "compileShader"(type0: $Program$Type$$Type, string1: string, inputStream2: $InputStream$$Type, string3: string): $EffectProgram
}
}

declare module "com.mojang.blaze3d.vertex.VertexFormat$Mode" {
import { $Enum } from "java.lang.Enum"

export class $VertexFormat$Mode extends $Enum<$VertexFormat$Mode> {
static readonly "DEBUG_LINES": $VertexFormat$Mode
static readonly "DEBUG_LINE_STRIP": $VertexFormat$Mode
static readonly "LINES": $VertexFormat$Mode
static readonly "LINE_STRIP": $VertexFormat$Mode
static readonly "QUADS": $VertexFormat$Mode
static readonly "TRIANGLES": $VertexFormat$Mode
static readonly "TRIANGLE_FAN": $VertexFormat$Mode
static readonly "TRIANGLE_STRIP": $VertexFormat$Mode
readonly "asGLMode": integer
readonly "connectedPrimitives": boolean
readonly "primitiveLength": integer
readonly "primitiveStride": integer

public "indexCount"(int0: integer): integer
public static "valueOf"(string0: string): $VertexFormat$Mode
public static "values"(): $VertexFormat$Mode[]
}
}

declare module "com.mojang.blaze3d.vertex.VertexFormatElement$Type" {
import { $Enum } from "java.lang.Enum"

export class $VertexFormatElement$Type extends $Enum<$VertexFormatElement$Type> {
static readonly "BYTE": $VertexFormatElement$Type
static readonly "FLOAT": $VertexFormatElement$Type
static readonly "INT": $VertexFormatElement$Type
static readonly "SHORT": $VertexFormatElement$Type
static readonly "UBYTE": $VertexFormatElement$Type
static readonly "UINT": $VertexFormatElement$Type
static readonly "USHORT": $VertexFormatElement$Type

public "getGlType"(): integer
public "getName"(): string
public "getSize"(): integer
public static "valueOf"(string0: string): $VertexFormatElement$Type
public static "values"(): $VertexFormatElement$Type[]
get "glType"(): integer
get "name"(): string
get "size"(): integer
}
}

declare module "com.mojang.blaze3d.shaders.Uniform" {
import { $FloatBuffer } from "java.nio.FloatBuffer"
import { $IntBuffer } from "java.nio.IntBuffer"
import { $Shader$$Type } from "com.mojang.blaze3d.shaders.Shader"
import { $AbstractUniform } from "com.mojang.blaze3d.shaders.AbstractUniform"
import { $AutoCloseable } from "java.lang.AutoCloseable"

export class $Uniform extends $AbstractUniform implements $AutoCloseable {
static readonly "UT_FLOAT1": integer
static readonly "UT_FLOAT2": integer
static readonly "UT_FLOAT3": integer
static readonly "UT_FLOAT4": integer
static readonly "UT_INT1": integer
static readonly "UT_INT2": integer
static readonly "UT_INT3": integer
static readonly "UT_INT4": integer
static readonly "UT_MAT2": integer
static readonly "UT_MAT3": integer
static readonly "UT_MAT4": integer

constructor(string0: string, int1: integer, int2: integer, shader3: $Shader$$Type)

public "close"(): void
public "getCount"(): integer
public "getFloatBuffer"(): $FloatBuffer
public "getIntBuffer"(): $IntBuffer
public "getLocation"(): integer
public "getName"(): string
public "getType"(): integer
public static "getTypeFromString"(string0: string): integer
public static "glBindAttribLocation"(int0: integer, int1: integer, charSequence2: charseq): void
public static "glGetAttribLocation"(int0: integer, charSequence1: charseq): integer
public static "glGetUniformLocation"(int0: integer, charSequence1: charseq): integer
public "set"(int0: integer, float1: float): void
public "setLocation"(int0: integer): void
public "upload"(): void
public static "uploadInteger"(int0: integer, int1: integer): void
get "count"(): integer
get "floatBuffer"(): $FloatBuffer
get "intBuffer"(): $IntBuffer
get "location"(): integer
get "name"(): string
get "type"(): integer
set "location"(value: integer)
}
}

declare module "com.mojang.blaze3d.vertex.VertexFormat$IndexType" {
import { $Enum } from "java.lang.Enum"

export class $VertexFormat$IndexType extends $Enum<$VertexFormat$IndexType> {
static readonly "INT": $VertexFormat$IndexType
static readonly "SHORT": $VertexFormat$IndexType
readonly "asGLType": integer
readonly "bytes": integer

public static "least"(int0: integer): $VertexFormat$IndexType
public static "valueOf"(string0: string): $VertexFormat$IndexType
public static "values"(): $VertexFormat$IndexType[]
}
}

declare module "com.mojang.blaze3d.font.SheetGlyphInfo" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $SheetGlyphInfo {
"getBearingX"(): float
"getBearingY"(): float
"getDown"(): float
"getLeft"(): float
"getOversample"(): float
"getPixelHeight"(): integer
"getPixelWidth"(): integer
"getRight"(): float
"getUp"(): float
"isColored"(): boolean
"upload"(int0: integer, int1: integer): void
get "bearingX"(): float
get "bearingY"(): float
get "down"(): float
get "left"(): float
get "oversample"(): float
get "pixelHeight"(): integer
get "pixelWidth"(): integer
get "right"(): float
get "up"(): float
get "colored"(): boolean
}

export namespace $SheetGlyphInfo {
const probejs$$marker: never
}
export abstract class $SheetGlyphInfo$$Static implements $SheetGlyphInfo {
}
}

declare module "com.mojang.blaze3d.platform.WindowEventHandler" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $WindowEventHandler {
"cursorEntered"(): void
"resizeDisplay"(): void
"setWindowActive"(boolean0: boolean): void
set "windowActive"(value: boolean)
}

export namespace $WindowEventHandler {
const probejs$$marker: never
}
export abstract class $WindowEventHandler$$Static implements $WindowEventHandler {
}
}

declare module "com.mojang.blaze3d.audio.SoundBuffer" {
import { $AudioFormat$$Type } from "javax.sound.sampled.AudioFormat"
import { $OptionalInt } from "java.util.OptionalInt"
import { $ByteBuffer$$Type } from "java.nio.ByteBuffer"

export class $SoundBuffer {
constructor(byteBuffer0: $ByteBuffer$$Type, audioFormat1: $AudioFormat$$Type)

public "discardAlBuffer"(): void
public "releaseAlBuffer"(): $OptionalInt
}
}

declare module "com.mojang.blaze3d.vertex.VertexSorting$DistanceFunction" {
import { $Vector3f$$Type } from "org.joml.Vector3f"

export interface $VertexSorting$DistanceFunction {
"apply"(vector3f0: $Vector3f$$Type): float
}

export namespace $VertexSorting$DistanceFunction {
const probejs$$marker: never
}
export abstract class $VertexSorting$DistanceFunction$$Static implements $VertexSorting$DistanceFunction {
}
}

declare module "com.mojang.blaze3d.vertex.BufferBuilder" {
import { $ExtendedBufferBuilder } from "me.jellysquid.mods.sodium.client.render.vertex.buffer.ExtendedBufferBuilder"
import { $VertexFormat$IndexType$$Type } from "com.mojang.blaze3d.vertex.VertexFormat$IndexType"
import { $VertexSorting, $VertexSorting$$Type } from "com.mojang.blaze3d.vertex.VertexSorting"
import { $VertexFormatElement, $VertexFormatElement$$Type } from "com.mojang.blaze3d.vertex.VertexFormatElement"
import { $BufferBuilder$SortState, $BufferBuilder$SortState$$Type } from "com.mojang.blaze3d.vertex.BufferBuilder$SortState"
import { $BakedQuad$$Type } from "net.minecraft.client.renderer.block.model.BakedQuad"
import { $VertexFormat$Mode, $VertexFormat$Mode$$Type } from "com.mojang.blaze3d.vertex.VertexFormat$Mode"
import { $ByteBuffer, $ByteBuffer$$Type } from "java.nio.ByteBuffer"
import { $BufferBuilderAccessor } from "net.createmod.ponder.mixin.client.accessor.BufferBuilderAccessor"
import { $VertexFormat, $VertexFormat$$Type } from "com.mojang.blaze3d.vertex.VertexFormat"
import { $BufferBuilder$RenderedBuffer } from "com.mojang.blaze3d.vertex.BufferBuilder$RenderedBuffer"
import { $SodiumBufferBuilder } from "me.jellysquid.mods.sodium.client.render.vertex.buffer.SodiumBufferBuilder"
import { $PoseStack$Pose$$Type } from "com.mojang.blaze3d.vertex.PoseStack$Pose"
import { $VertexFormatDescription, $VertexFormatDescription$$Type } from "net.caffeinemc.mods.sodium.api.vertex.format.VertexFormatDescription"
import { $DefaultedVertexConsumer } from "com.mojang.blaze3d.vertex.DefaultedVertexConsumer"
import { $VertexBufferWriter, $VertexBufferWriter$$Type } from "net.caffeinemc.mods.sodium.api.vertex.buffer.VertexBufferWriter"
import { $MemoryStack$$Type } from "org.lwjgl.system.MemoryStack"
import { $IntConsumer } from "it.unimi.dsi.fastutil.ints.IntConsumer"
import { $Vector3f, $Vector3f$$Type } from "org.joml.Vector3f"
import { $Matrix3f$$Type } from "org.joml.Matrix3f"
import { $BufferVertexConsumer } from "com.mojang.blaze3d.vertex.BufferVertexConsumer"
import { $Matrix4f$$Type } from "org.joml.Matrix4f"
import { $VertexConsumer, $VertexConsumer$$Type } from "com.mojang.blaze3d.vertex.VertexConsumer"

export class $BufferBuilder extends $DefaultedVertexConsumer implements $BufferVertexConsumer, $BufferBuilderAccessor, $ExtendedBufferBuilder, $VertexBufferWriter {
constructor(int0: integer)

public "applyBakedLighting"(int0: integer, byteBuffer1: $ByteBuffer$$Type): integer
public "applyBakedNormals"(vector3f0: $Vector3f$$Type, byteBuffer1: $ByteBuffer$$Type, matrix3f2: $Matrix3f$$Type): void
public "begin"(mode0: $VertexFormat$Mode$$Type, vertexFormat1: $VertexFormat$$Type): void
public "building"(): boolean
public "canUseIntrinsics"(): boolean
public "clear"(): void
public "color"(int0: integer, int1: integer, int2: integer, int3: integer): $VertexConsumer
public "color"(float0: float, float1: float, float2: float, float3: float): $VertexConsumer
public "color"(int0: integer): $VertexConsumer
public static "copyInto"(vertexBufferWriter0: $VertexBufferWriter$$Type, memoryStack1: $MemoryStack$$Type, long2: long, int3: integer, vertexFormatDescription4: $VertexFormatDescription$$Type): void
public "currentElement"(): $VertexFormatElement
public "discard"(): void
public "end"(): $BufferBuilder$RenderedBuffer
public "endOrDiscardIfEmpty"(): $BufferBuilder$RenderedBuffer
public "endVertex"(): void
public "getSortState"(): $BufferBuilder$SortState
public "intConsumer"(int0: integer, indexType1: $VertexFormat$IndexType$$Type): $IntConsumer
public "isCurrentBatchEmpty"(): boolean
/** @deprecated */
public "isFullWriter"(): boolean
public "misc"(vertexFormatElement0: $VertexFormatElement$$Type, ...int1s: integer[]): $VertexConsumer
public "nextElement"(): void
public "normal"(float0: float, float1: float, float2: float): $VertexConsumer
public "normal"(matrix3f0: $Matrix3f$$Type, float1: float, float2: float, float3: float): $VertexConsumer
public static "normalIntValue"(float0: float): byte
public static "of"(vertexConsumer0: $VertexConsumer$$Type): $VertexBufferWriter
public "overlayCoords"(int0: integer, int1: integer): $VertexConsumer
public "overlayCoords"(int0: integer): $VertexConsumer
public "push"(memoryStack0: $MemoryStack$$Type, long1: long, int2: integer, vertexFormatDescription3: $VertexFormatDescription$$Type): void
public "putBulkData"(pose0: $PoseStack$Pose$$Type, bakedQuad1: $BakedQuad$$Type, float2: float, float3: float, float4: float, int5: integer, int6: integer): void
public "putBulkData"(pose0: $PoseStack$Pose$$Type, bakedQuad1: $BakedQuad$$Type, float2s: float[], float3: float, float4: float, float5: float, int6s: integer[], int7: integer, boolean8: boolean): void
public "putBulkData"(byteBuffer0: $ByteBuffer$$Type): void
public "putBulkData"(pose0: $PoseStack$Pose$$Type, bakedQuad1: $BakedQuad$$Type, float2s: float[], float3: float, float4: float, float5: float, float6: float, int7s: integer[], int8: integer, boolean9: boolean): void
public "putBulkData"(pose0: $PoseStack$Pose$$Type, bakedQuad1: $BakedQuad$$Type, float2: float, float3: float, float4: float, float5: float, int6: integer, int7: integer, boolean8: boolean): void
public "putByte"(int0: integer, byte1: byte): void
public "putFloat"(int0: integer, float1: float): void
public "putShort"(int0: integer, short1: short): void
public "putSortedQuadIndices"(indexType0: $VertexFormat$IndexType$$Type): void
public "restoreSortState"(sortState0: $BufferBuilder$SortState$$Type): void
public "setQuadSorting"(vertexSorting0: $VertexSorting$$Type): void
public "sodium$getBuffer"(): $ByteBuffer
public "sodium$getDelegate"(): $SodiumBufferBuilder
public "sodium$getElementOffset"(): integer
public "sodium$getFormatDescription"(): $VertexFormatDescription
public "sodium$moveToNextVertex"(): void
public "sodium$usingFixedColor"(): boolean
public static "tryOf"(vertexConsumer0: $VertexConsumer$$Type): $VertexBufferWriter
public "uv"(float0: float, float1: float): $VertexConsumer
public "uv2"(int0: integer, int1: integer): $VertexConsumer
public "uv2"(int0: integer): $VertexConsumer
public "uvShort"(short0: short, short1: short, int2: integer): $VertexConsumer
public "vertex"(float0: float, float1: float, float2: float, float3: float, float4: float, float5: float, float6: float, float7: float, float8: float, int9: integer, int10: integer, float11: float, float12: float, float13: float): void
public "vertex"(double0: double, double1: double, double2: double): $VertexConsumer
public "vertex"(matrix4f0: $Matrix4f$$Type, float1: float, float2: float, float3: float): $VertexConsumer
get "format"(): $VertexFormat
set "format"(value: $VertexFormat$$Type)
get "mode"(): $VertexFormat$Mode
set "mode"(value: $VertexFormat$Mode$$Type)
get "nextElementByte"(): integer
set "nextElementByte"(value: integer)
get "sorting"(): $VertexSorting
set "sorting"(value: $VertexSorting$$Type)
get "sortingPoints"(): $Vector3f[]
set "sortingPoints"(value: $Vector3f$$Type[])
get "sortState"(): $BufferBuilder$SortState
get "currentBatchEmpty"(): boolean
get "fullWriter"(): boolean
set "quadSorting"(value: $VertexSorting$$Type)
}
}

declare module "com.mojang.blaze3d.shaders.Effect" {
import { $Program } from "com.mojang.blaze3d.shaders.Program"
import { $Shader } from "com.mojang.blaze3d.shaders.Shader"

export interface $Effect extends $Shader {
"attachToProgram"(): void
"getFragmentProgram"(): $Program
"getId"(): integer
"getVertexProgram"(): $Program
"markDirty"(): void
get "fragmentProgram"(): $Program
get "id"(): integer
get "vertexProgram"(): $Program
}

export namespace $Effect {
const probejs$$marker: never
}
export abstract class $Effect$$Static implements $Effect {
}
}

declare module "com.mojang.blaze3d.platform.DisplayData" {
import { $OptionalInt, $OptionalInt$$Type } from "java.util.OptionalInt"

export class $DisplayData {
readonly "fullscreenHeight": $OptionalInt
readonly "fullscreenWidth": $OptionalInt
readonly "height": integer
readonly "isFullscreen": boolean
readonly "width": integer

constructor(int0: integer, int1: integer, optionalInt2: $OptionalInt$$Type, optionalInt3: $OptionalInt$$Type, boolean4: boolean)

}
}

declare module "com.mojang.blaze3d.vertex.Tesselator" {
import { $BufferBuilder } from "com.mojang.blaze3d.vertex.BufferBuilder"
import { $MixinSetTessBuffer } from "com.samsthenerd.inline.mixin.core.MixinSetTessBuffer"

export class $Tesselator implements $MixinSetTessBuffer {
constructor(int0: integer)
constructor()

public "end"(): void
public "getBuilder"(): $BufferBuilder
public static "getInstance"(): $Tesselator
get "builder"(): $BufferBuilder
}
}

declare module "com.mojang.blaze3d.vertex.BufferVertexConsumer" {
import { $PoseStack$Pose$$Type } from "com.mojang.blaze3d.vertex.PoseStack$Pose"
import { $Vector3f$$Type } from "org.joml.Vector3f"
import { $VertexFormatElement, $VertexFormatElement$$Type } from "com.mojang.blaze3d.vertex.VertexFormatElement"
import { $Matrix3f$$Type } from "org.joml.Matrix3f"
import { $BakedQuad$$Type } from "net.minecraft.client.renderer.block.model.BakedQuad"
import { $Matrix4f$$Type } from "org.joml.Matrix4f"
import { $ByteBuffer$$Type } from "java.nio.ByteBuffer"
import { $VertexConsumer } from "com.mojang.blaze3d.vertex.VertexConsumer"

export interface $BufferVertexConsumer extends $VertexConsumer {
"applyBakedLighting"(int0: integer, byteBuffer1: $ByteBuffer$$Type): integer
"applyBakedNormals"(vector3f0: $Vector3f$$Type, byteBuffer1: $ByteBuffer$$Type, matrix3f2: $Matrix3f$$Type): void
"color"(int0: integer, int1: integer, int2: integer, int3: integer): $VertexConsumer
"color"(float0: float, float1: float, float2: float, float3: float): $VertexConsumer
"color"(int0: integer): $VertexConsumer
"currentElement"(): $VertexFormatElement
"defaultColor"(int0: integer, int1: integer, int2: integer, int3: integer): void
"endVertex"(): void
"misc"(vertexFormatElement0: $VertexFormatElement$$Type, ...int1s: integer[]): $VertexConsumer
"nextElement"(): void
"normal"(float0: float, float1: float, float2: float): $VertexConsumer
"normal"(matrix3f0: $Matrix3f$$Type, float1: float, float2: float, float3: float): $VertexConsumer
"overlayCoords"(int0: integer, int1: integer): $VertexConsumer
"overlayCoords"(int0: integer): $VertexConsumer
"putBulkData"(pose0: $PoseStack$Pose$$Type, bakedQuad1: $BakedQuad$$Type, float2: float, float3: float, float4: float, int5: integer, int6: integer): void
"putBulkData"(pose0: $PoseStack$Pose$$Type, bakedQuad1: $BakedQuad$$Type, float2s: float[], float3: float, float4: float, float5: float, int6s: integer[], int7: integer, boolean8: boolean): void
"putBulkData"(pose0: $PoseStack$Pose$$Type, bakedQuad1: $BakedQuad$$Type, float2s: float[], float3: float, float4: float, float5: float, float6: float, int7s: integer[], int8: integer, boolean9: boolean): void
"putBulkData"(pose0: $PoseStack$Pose$$Type, bakedQuad1: $BakedQuad$$Type, float2: float, float3: float, float4: float, float5: float, int6: integer, int7: integer, boolean8: boolean): void
"putByte"(int0: integer, byte1: byte): void
"putFloat"(int0: integer, float1: float): void
"putShort"(int0: integer, short1: short): void
"unsetDefaultColor"(): void
"uv"(float0: float, float1: float): $VertexConsumer
"uv2"(int0: integer, int1: integer): $VertexConsumer
"uv2"(int0: integer): $VertexConsumer
"uvShort"(short0: short, short1: short, int2: integer): $VertexConsumer
"vertex"(double0: double, double1: double, double2: double): $VertexConsumer
"vertex"(matrix4f0: $Matrix4f$$Type, float1: float, float2: float, float3: float): $VertexConsumer
"vertex"(float0: float, float1: float, float2: float, float3: float, float4: float, float5: float, float6: float, float7: float, float8: float, int9: integer, int10: integer, float11: float, float12: float, float13: float): void
}

export namespace $BufferVertexConsumer {
function normalIntValue(float0: float): byte
}
export abstract class $BufferVertexConsumer$$Static implements $BufferVertexConsumer {
static "normalIntValue"(float0: float): byte
}
}

declare module "com.mojang.blaze3d.vertex.DefaultedVertexConsumer" {
import { $PoseStack$Pose$$Type } from "com.mojang.blaze3d.vertex.PoseStack$Pose"
import { $Vector3f$$Type } from "org.joml.Vector3f"
import { $VertexFormatElement$$Type } from "com.mojang.blaze3d.vertex.VertexFormatElement"
import { $Matrix3f$$Type } from "org.joml.Matrix3f"
import { $BakedQuad$$Type } from "net.minecraft.client.renderer.block.model.BakedQuad"
import { $Matrix4f$$Type } from "org.joml.Matrix4f"
import { $ByteBuffer$$Type } from "java.nio.ByteBuffer"
import { $VertexConsumer } from "com.mojang.blaze3d.vertex.VertexConsumer"

export class $DefaultedVertexConsumer implements $VertexConsumer {
constructor()

public "applyBakedLighting"(int0: integer, byteBuffer1: $ByteBuffer$$Type): integer
public "applyBakedNormals"(vector3f0: $Vector3f$$Type, byteBuffer1: $ByteBuffer$$Type, matrix3f2: $Matrix3f$$Type): void
public "color"(float0: float, float1: float, float2: float, float3: float): $VertexConsumer
public "color"(int0: integer, int1: integer, int2: integer, int3: integer): $VertexConsumer
public "color"(int0: integer): $VertexConsumer
public "defaultColor"(int0: integer, int1: integer, int2: integer, int3: integer): void
public "endVertex"(): void
public "misc"(vertexFormatElement0: $VertexFormatElement$$Type, ...int1s: integer[]): $VertexConsumer
public "normal"(float0: float, float1: float, float2: float): $VertexConsumer
public "normal"(matrix3f0: $Matrix3f$$Type, float1: float, float2: float, float3: float): $VertexConsumer
public "overlayCoords"(int0: integer, int1: integer): $VertexConsumer
public "overlayCoords"(int0: integer): $VertexConsumer
public "putBulkData"(pose0: $PoseStack$Pose$$Type, bakedQuad1: $BakedQuad$$Type, float2: float, float3: float, float4: float, int5: integer, int6: integer): void
public "putBulkData"(pose0: $PoseStack$Pose$$Type, bakedQuad1: $BakedQuad$$Type, float2s: float[], float3: float, float4: float, float5: float, int6s: integer[], int7: integer, boolean8: boolean): void
public "putBulkData"(pose0: $PoseStack$Pose$$Type, bakedQuad1: $BakedQuad$$Type, float2s: float[], float3: float, float4: float, float5: float, float6: float, int7s: integer[], int8: integer, boolean9: boolean): void
public "putBulkData"(pose0: $PoseStack$Pose$$Type, bakedQuad1: $BakedQuad$$Type, float2: float, float3: float, float4: float, float5: float, int6: integer, int7: integer, boolean8: boolean): void
public "unsetDefaultColor"(): void
public "uv"(float0: float, float1: float): $VertexConsumer
public "uv2"(int0: integer, int1: integer): $VertexConsumer
public "uv2"(int0: integer): $VertexConsumer
public "vertex"(double0: double, double1: double, double2: double): $VertexConsumer
public "vertex"(matrix4f0: $Matrix4f$$Type, float1: float, float2: float, float3: float): $VertexConsumer
public "vertex"(float0: float, float1: float, float2: float, float3: float, float4: float, float5: float, float6: float, float7: float, float8: float, int9: integer, int10: integer, float11: float, float12: float, float13: float): void
get "defaultColorSet"(): boolean
set "defaultColorSet"(value: boolean)
}
}

declare module "com.mojang.blaze3d.vertex.PoseStack" {
import { $PoseStackAccessor } from "org.embeddedt.modernfix.common.mixin.bugfix.entity_pose_stack.PoseStackAccessor"
import { $PoseStack$Pose } from "com.mojang.blaze3d.vertex.PoseStack$Pose"
import { $Transformation$$Type } from "com.mojang.math.Transformation"
import { $PoseStackAccessor as $PoseStackAccessor$0 } from "dev.engine_room.flywheel.impl.mixin.PoseStackAccessor"
import { $PoseStackExtension } from "dev.engine_room.flywheel.impl.extension.PoseStackExtension"
import { $IForgePoseStack } from "net.minecraftforge.client.extensions.IForgePoseStack"
import { $CachingPoseStack } from "org.embeddedt.embeddium.render.matrix_stack.CachingPoseStack"
import { $Quaternionf$$Type } from "org.joml.Quaternionf"
import { $Matrix4f$$Type } from "org.joml.Matrix4f"
import { $PoseTransformStack } from "dev.engine_room.flywheel.lib.transform.PoseTransformStack"

export class $PoseStack implements $IForgePoseStack, $CachingPoseStack, $PoseStackAccessor, $PoseStackAccessor$0, $PoseStackExtension {
constructor()

public "clear"(): boolean
public "embeddium$setCachingEnabled"(boolean0: boolean): void
public "flywheel$transformStack"(): $PoseTransformStack
public "last"(): $PoseStack$Pose
public "mulPose"(quaternionf0: $Quaternionf$$Type): void
public "mulPoseMatrix"(matrix4f0: $Matrix4f$$Type): void
public "popPose"(): void
public "pushPose"(): void
public "pushTransformation"(transformation0: $Transformation$$Type): void
public "rotateAround"(quaternionf0: $Quaternionf$$Type, float1: float, float2: float, float3: float): void
public "scale"(float0: float, float1: float, float2: float): void
public "setIdentity"(): void
public "translate"(double0: double, double1: double, double2: double): void
public "translate"(float0: float, float1: float, float2: float): void
}
}

declare module "com.mojang.blaze3d.vertex.VertexSorting" {
import { $Vector3f$$Type } from "org.joml.Vector3f"
import { $VertexSorting$DistanceFunction$$Type } from "com.mojang.blaze3d.vertex.VertexSorting$DistanceFunction"

export interface $VertexSorting {
"sort"(vector3f0s: $Vector3f$$Type[]): integer[]
}

export namespace $VertexSorting {
const DISTANCE_TO_ORIGIN: $VertexSorting
const ORTHOGRAPHIC_Z: $VertexSorting
function byDistance(vector3f0: $Vector3f$$Type): $VertexSorting
function byDistance(distanceFunction0: $VertexSorting$DistanceFunction$$Type): $VertexSorting
function byDistance(float0: float, float1: float, float2: float): $VertexSorting
}
export abstract class $VertexSorting$$Static implements $VertexSorting {
static readonly "DISTANCE_TO_ORIGIN": $VertexSorting
static readonly "ORTHOGRAPHIC_Z": $VertexSorting

static "byDistance"(vector3f0: $Vector3f$$Type): $VertexSorting
static "byDistance"(distanceFunction0: $VertexSorting$DistanceFunction$$Type): $VertexSorting
static "byDistance"(float0: float, float1: float, float2: float): $VertexSorting
}
}

declare module "com.mojang.blaze3d.platform.ScreenManager" {
import { $Window$$Type } from "com.mojang.blaze3d.platform.Window"
import { $MonitorCreator$$Type } from "com.mojang.blaze3d.platform.MonitorCreator"
import { $Monitor } from "com.mojang.blaze3d.platform.Monitor"

export class $ScreenManager {
constructor(monitorCreator0: $MonitorCreator$$Type)

public static "clamp"(int0: integer, int1: integer, int2: integer): integer
public "findBestMonitor"(window0: $Window$$Type): $Monitor
public "getMonitor"(long0: long): $Monitor
public "shutdown"(): void
}
}

declare module "com.mojang.blaze3d.vertex.PoseStack$Pose" {
import { $Matrix3f, $Matrix3f$$Type } from "org.joml.Matrix3f"
import { $Matrix4f, $Matrix4f$$Type } from "org.joml.Matrix4f"

export class $PoseStack$Pose {
constructor(matrix4f0: $Matrix4f$$Type, matrix3f1: $Matrix3f$$Type)

public "normal"(): $Matrix3f
public "pose"(): $Matrix4f
}
}

declare module "com.mojang.blaze3d.vertex.VertexBuffer$Usage" {
import { $Enum } from "java.lang.Enum"

export class $VertexBuffer$Usage extends $Enum<$VertexBuffer$Usage> {
static readonly "DYNAMIC": $VertexBuffer$Usage
static readonly "STATIC": $VertexBuffer$Usage

public static "valueOf"(string0: string): $VertexBuffer$Usage
public static "values"(): $VertexBuffer$Usage[]
}
}

declare module "com.mojang.blaze3d.vertex.VertexFormatElement" {
import { $VertexFormatElement$Type, $VertexFormatElement$Type$$Type } from "com.mojang.blaze3d.vertex.VertexFormatElement$Type"
import { $VertexFormatElement$Usage, $VertexFormatElement$Usage$$Type } from "com.mojang.blaze3d.vertex.VertexFormatElement$Usage"

export class $VertexFormatElement {
constructor(int0: integer, type1: $VertexFormatElement$Type$$Type, usage2: $VertexFormatElement$Usage$$Type, int3: integer)

public "clearBufferState"(int0: integer): void
public "getByteSize"(): integer
public "getCount"(): integer
public "getElementCount"(): integer
public "getIndex"(): integer
public "getType"(): $VertexFormatElement$Type
public "getUsage"(): $VertexFormatElement$Usage
public "isPosition"(): boolean
public "setupBufferState"(int0: integer, long1: long, int2: integer): void
get "byteSize"(): integer
get "count"(): integer
get "elementCount"(): integer
get "index"(): integer
get "type"(): $VertexFormatElement$Type
get "usage"(): $VertexFormatElement$Usage
get "position"(): boolean
}
}

declare module "com.mojang.blaze3d.platform.Window" {
import { $VideoMode, $VideoMode$$Type } from "com.mojang.blaze3d.platform.VideoMode"
import { $Monitor } from "com.mojang.blaze3d.platform.Monitor"
import { $AutoCloseable } from "java.lang.AutoCloseable"
import { $IoSupplier, $IoSupplier$$Type } from "net.minecraft.server.packs.resources.IoSupplier"
import { $WindowKJS } from "dev.latvian.mods.kubejs.core.WindowKJS"
import { $ScreenManager$$Type } from "com.mojang.blaze3d.platform.ScreenManager"
import { $CallbackInfoReturnable$$Type } from "org.spongepowered.asm.mixin.injection.callback.CallbackInfoReturnable"
import { $WindowEventHandler$$Type } from "com.mojang.blaze3d.platform.WindowEventHandler"
import { $IconSet$$Type } from "com.mojang.blaze3d.platform.IconSet"
import { $List, $List$$Type } from "java.util.List"
import { $DisplayData$$Type } from "com.mojang.blaze3d.platform.DisplayData"
import { $BiConsumer$$Type } from "java.util.function.BiConsumer"
import { $Optional, $Optional$$Type } from "java.util.Optional"
import { $PackResources$$Type } from "net.minecraft.server.packs.PackResources"
import { $InputStream, $InputStream$$Type } from "java.io.InputStream"

export class $Window implements $AutoCloseable, $WindowKJS {
constructor(windowEventHandler0: $WindowEventHandler$$Type, screenManager1: $ScreenManager$$Type, displayData2: $DisplayData$$Type, string3: string, string4: string)

public "calculateScale"(int0: integer, boolean1: boolean): integer
public "changeFullscreenVideoMode"(): void
public static "checkGlfwError"(biConsumer0: $BiConsumer$$Type<integer, string>): void
public "close"(): void
public "defaultErrorCallback"(int0: integer, long1: long): void
public "findBestMonitor"(): $Monitor
public "getFramerateLimit"(): integer
public "getGuiScale"(): double
public "getGuiScaledHeight"(): integer
public "getGuiScaledWidth"(): integer
public "getHeight"(): integer
public "getPreferredFullscreenVideoMode"(): $Optional<$VideoMode>
public "getRefreshRate"(): integer
public "getScreenHeight"(): integer
public "getScreenWidth"(): integer
public "getWidth"(): integer
public "getWindow"(): long
public "getX"(): integer
public "getY"(): integer
public "handler$eab000$getGuiScale"(callbackInfoReturnable0: $CallbackInfoReturnable$$Type): void
public "handler$eab000$getGuiScaledHeight"(callbackInfoReturnable0: $CallbackInfoReturnable$$Type): void
public "handler$eab000$getGuiScaledWidth"(callbackInfoReturnable0: $CallbackInfoReturnable$$Type): void
public "isFullscreen"(): boolean
public "kjs$loadIcons"(original: $List$$Type<$IoSupplier$$Type<$InputStream$$Type>>): $List<$IoSupplier<$InputStream>>
public "setDefaultErrorCallback"(): void
public "setErrorSection"(string0: string): void
public "setFramerateLimit"(int0: integer): void
public "setGuiScale"(double0: double): void
public "setHeight"(int0: integer): void
public "setIcon"(packResources0: $PackResources$$Type, iconSet1: $IconSet$$Type): void
public "setPreferredFullscreenVideoMode"(optional0: $Optional$$Type<$VideoMode$$Type>): void
public "setTitle"(string0: string): void
public "setWidth"(int0: integer): void
public "setWindowed"(int0: integer, int1: integer): void
public "shouldClose"(): boolean
public "toggleFullScreen"(): void
public "updateDisplay"(): void
public "updateRawMouseInput"(boolean0: boolean): void
public "updateVsync"(boolean0: boolean): void
get "framerateLimit"(): integer
get "guiScale"(): double
get "guiScaledHeight"(): integer
get "guiScaledWidth"(): integer
get "height"(): integer
get "preferredFullscreenVideoMode"(): $Optional<$VideoMode>
get "refreshRate"(): integer
get "screenHeight"(): integer
get "screenWidth"(): integer
get "width"(): integer
get "window"(): long
get "x"(): integer
get "y"(): integer
get "fullscreen"(): boolean
set "errorSection"(value: string)
set "framerateLimit"(value: integer)
set "guiScale"(value: double)
set "height"(value: integer)
set "preferredFullscreenVideoMode"(value: $Optional$$Type<$VideoMode$$Type>)
set "title"(value: string)
set "width"(value: integer)
}
}

declare module "com.mojang.blaze3d.shaders.AbstractUniform" {
import { $Vector3f$$Type } from "org.joml.Vector3f"
import { $Matrix3f$$Type } from "org.joml.Matrix3f"
import { $Vector4f$$Type } from "org.joml.Vector4f"
import { $Matrix4f$$Type } from "org.joml.Matrix4f"

export class $AbstractUniform {
constructor()

public "set"(float0: float): void
public "set"(int0: integer): void
public "set"(float0: float, float1: float, float2: float): void
public "set"(float0: float, float1: float, float2: float, float3: float): void
public "set"(matrix3f0: $Matrix3f$$Type): void
public "set"(float0: float, float1: float): void
public "set"(matrix4f0: $Matrix4f$$Type): void
public "set"(float0s: float[]): void
public "set"(vector3f0: $Vector3f$$Type): void
public "set"(int0: integer, int1: integer): void
public "set"(int0: integer, int1: integer, int2: integer): void
public "set"(int0: integer, int1: integer, int2: integer, int3: integer): void
public "set"(vector4f0: $Vector4f$$Type): void
public "setMat2x2"(float0: float, float1: float, float2: float, float3: float): void
public "setMat2x3"(float0: float, float1: float, float2: float, float3: float, float4: float, float5: float): void
public "setMat2x4"(float0: float, float1: float, float2: float, float3: float, float4: float, float5: float, float6: float, float7: float): void
public "setMat3x2"(float0: float, float1: float, float2: float, float3: float, float4: float, float5: float): void
public "setMat3x3"(float0: float, float1: float, float2: float, float3: float, float4: float, float5: float, float6: float, float7: float, float8: float): void
public "setMat3x4"(float0: float, float1: float, float2: float, float3: float, float4: float, float5: float, float6: float, float7: float, float8: float, float9: float, float10: float, float11: float): void
public "setMat4x2"(float0: float, float1: float, float2: float, float3: float, float4: float, float5: float, float6: float, float7: float): void
public "setMat4x3"(float0: float, float1: float, float2: float, float3: float, float4: float, float5: float, float6: float, float7: float, float8: float, float9: float, float10: float, float11: float): void
public "setMat4x4"(float0: float, float1: float, float2: float, float3: float, float4: float, float5: float, float6: float, float7: float, float8: float, float9: float, float10: float, float11: float, float12: float, float13: float, float14: float, float15: float): void
public "setSafe"(int0: integer, int1: integer, int2: integer, int3: integer): void
public "setSafe"(float0: float, float1: float, float2: float, float3: float): void
}
}

declare module "com.mojang.blaze3d.vertex.BufferBuilder$SortState" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export class $BufferBuilder$SortState {
}
}

declare module "com.mojang.blaze3d.vertex.VertexFormat" {
import { $ExtendedVertexFormat$Element } from "me.jellysquid.mods.sodium.client.buffer.ExtendedVertexFormat$Element"
import { $IntList } from "it.unimi.dsi.fastutil.ints.IntList"
import { $ImmutableList } from "com.google.common.collect.ImmutableList"
import { $ImmutableMap, $ImmutableMap$$Type } from "com.google.common.collect.ImmutableMap"
import { $VertexFormatAccessor } from "com.lowdragmc.lowdraglib.core.mixins.accessor.VertexFormatAccessor"
import { $VertexFormatElement, $VertexFormatElement$$Type } from "com.mojang.blaze3d.vertex.VertexFormatElement"
import { $VertexFormatAccessor as $VertexFormatAccessor$0 } from "me.jellysquid.mods.sodium.mixin.core.render.VertexFormatAccessor"
import { $VertexBuffer } from "com.mojang.blaze3d.vertex.VertexBuffer"
import { $ExtendedVertexFormat } from "me.jellysquid.mods.sodium.client.buffer.ExtendedVertexFormat"

export class $VertexFormat implements $VertexFormatAccessor, $ExtendedVertexFormat, $VertexFormatAccessor$0 {
readonly "offsets": $IntList

constructor(immutableMap0: $ImmutableMap$$Type<string, $VertexFormatElement$$Type>)

public "clearBufferState"(): void
public "embeddium$getExtendedElements"(): $ExtendedVertexFormat$Element[]
public "getElementAttributeNames"(): $ImmutableList<string>
public "getElementMapping"(): $ImmutableMap<string, $VertexFormatElement>
public "getElements"(): $ImmutableList<$VertexFormatElement>
public "getImmediateDrawVertexBuffer"(): $VertexBuffer
public "getIntegerSize"(): integer
public "getOffset"(int0: integer): integer
public "getVertexSize"(): integer
public "hasColor"(): boolean
public "hasNormal"(): boolean
public "hasPosition"(): boolean
public "hasUV"(int0: integer): boolean
public "setupBufferState"(): void
get "elementAttributeNames"(): $ImmutableList<string>
get "elementMapping"(): $ImmutableMap<string, $VertexFormatElement>
get "elements"(): $ImmutableList<$VertexFormatElement>
get "immediateDrawVertexBuffer"(): $VertexBuffer
get "integerSize"(): integer
get "vertexSize"(): integer
}
}

