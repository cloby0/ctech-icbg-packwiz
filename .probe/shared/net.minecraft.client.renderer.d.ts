declare module "net.minecraft.client.renderer.texture.Stitcher$Entry" {
import { $ResourceLocation } from "net.minecraft.resources.ResourceLocation"

export interface $Stitcher$Entry {
"height"(): integer
"name"(): $ResourceLocation
"width"(): integer
}

export namespace $Stitcher$Entry {
const probejs$$marker: never
}
export abstract class $Stitcher$Entry$$Static implements $Stitcher$Entry {
}
}

declare module "net.minecraft.client.renderer.GpuWarnlistManager" {
import { $GpuWarnlistManager$Preparations } from "net.minecraft.client.renderer.GpuWarnlistManager$Preparations"
import { $SimplePreparableReloadListener } from "net.minecraft.server.packs.resources.SimplePreparableReloadListener"

export class $GpuWarnlistManager extends $SimplePreparableReloadListener<$GpuWarnlistManager$Preparations> {
constructor()

public "dismissWarning"(): void
public "dismissWarningAndSkipFabulous"(): void
public "getAllWarnings"(): string
public "getName"(): string
public "getRendererWarnings"(): string
public "getVendorWarnings"(): string
public "getVersionWarnings"(): string
public "hasWarnings"(): boolean
public "isShowingWarning"(): boolean
public "isSkippingFabulous"(): boolean
public "resetWarnings"(): void
public "showWarning"(): void
public "willShowWarning"(): boolean
get "allWarnings"(): string
get "name"(): string
get "rendererWarnings"(): string
get "vendorWarnings"(): string
get "versionWarnings"(): string
get "showingWarning"(): boolean
get "skippingFabulous"(): boolean
}
}

declare module "net.minecraft.client.renderer.ViewArea" {
import { $ChunkRenderDispatcher$RenderChunk, $ChunkRenderDispatcher$RenderChunk$$Type } from "net.minecraft.client.renderer.chunk.ChunkRenderDispatcher$RenderChunk"
import { $LevelRenderer$$Type } from "net.minecraft.client.renderer.LevelRenderer"
import { $ChunkRenderDispatcher$$Type } from "net.minecraft.client.renderer.chunk.ChunkRenderDispatcher"
import { $Level$$Type } from "net.minecraft.world.level.Level"

export class $ViewArea {
constructor(chunkRenderDispatcher0: $ChunkRenderDispatcher$$Type, level1: $Level$$Type, int2: integer, levelRenderer3: $LevelRenderer$$Type)

public "releaseAllBuffers"(): void
public "repositionCamera"(double0: double, double1: double): void
public "setDirty"(int0: integer, int1: integer, int2: integer, boolean3: boolean): void
get "chunks"(): $ChunkRenderDispatcher$RenderChunk[]
set "chunks"(value: $ChunkRenderDispatcher$RenderChunk$$Type[])
}
}

declare module "net.minecraft.client.renderer.item.ItemPropertyFunction" {
import { $LivingEntity$$Type } from "net.minecraft.world.entity.LivingEntity"
import { $ClientLevel$$Type } from "net.minecraft.client.multiplayer.ClientLevel"
import { $ItemStack$$Type } from "net.minecraft.world.item.ItemStack"

/** @deprecated */
export interface $ItemPropertyFunction {
"call"(itemStack0: $ItemStack$$Type, clientLevel1: $ClientLevel$$Type, livingEntity2: $LivingEntity$$Type, int3: integer): float
}

export namespace $ItemPropertyFunction {
const probejs$$marker: never
}
export abstract class $ItemPropertyFunction$$Static implements $ItemPropertyFunction {
}
}

declare module "net.minecraft.client.renderer.texture.TextureManager" {
import { $ResourceLocation, $ResourceLocation$$Type } from "net.minecraft.resources.ResourceLocation"
import { $DynamicTexture$$Type } from "net.minecraft.client.renderer.texture.DynamicTexture"
import { $Executor$$Type } from "java.util.concurrent.Executor"
import { $ProfilerFiller$$Type } from "net.minecraft.util.profiling.ProfilerFiller"
import { $ResourceManager$$Type } from "net.minecraft.server.packs.resources.ResourceManager"
import { $CompletableFuture } from "java.util.concurrent.CompletableFuture"
import { $AutoCloseable } from "java.lang.AutoCloseable"
import { $PreparableReloadListener$PreparationBarrier$$Type } from "net.minecraft.server.packs.resources.PreparableReloadListener$PreparationBarrier"
import { $AbstractTexture, $AbstractTexture$$Type } from "net.minecraft.client.renderer.texture.AbstractTexture"
import { $Tickable } from "net.minecraft.client.renderer.texture.Tickable"
import { $Map } from "java.util.Map"
import { $PreparableReloadListener } from "net.minecraft.server.packs.resources.PreparableReloadListener"
import { $AccessTextureManager } from "zzzank.probejs.mixins.AccessTextureManager"
import { $Path$$Type } from "java.nio.file.Path"

export class $TextureManager implements $PreparableReloadListener, $Tickable, $AutoCloseable, $AccessTextureManager {
static readonly "INTENTIONAL_MISSING_TEXTURE": $ResourceLocation
readonly "byPath": $Map<$ResourceLocation, $AbstractTexture>

constructor(resourceManager0: $ResourceManager$$Type)

public "bindForSetup"(resourceLocation0: $ResourceLocation$$Type): void
public "close"(): void
public "dumpAllSheets"(path0: $Path$$Type): void
public "getName"(): string
public "getTexture"(resourceLocation0: $ResourceLocation$$Type, abstractTexture1: $AbstractTexture$$Type): $AbstractTexture
public "getTexture"(resourceLocation0: $ResourceLocation$$Type): $AbstractTexture
public "preload"(resourceLocation0: $ResourceLocation$$Type, executor1: $Executor$$Type): $CompletableFuture<void>
public "register"(string0: string, dynamicTexture1: $DynamicTexture$$Type): $ResourceLocation
public "register"(resourceLocation0: $ResourceLocation$$Type, abstractTexture1: $AbstractTexture$$Type): void
public "release"(resourceLocation0: $ResourceLocation$$Type): void
public "reload"(preparationBarrier0: $PreparableReloadListener$PreparationBarrier$$Type, resourceManager1: $ResourceManager$$Type, profilerFiller2: $ProfilerFiller$$Type, profilerFiller3: $ProfilerFiller$$Type, executor4: $Executor$$Type, executor5: $Executor$$Type): $CompletableFuture<void>
public "tick"(): void
get "name"(): string
}
}

declare module "net.minecraft.client.renderer.RenderStateShard$TransparencyStateShard" {
import { $RenderStateShard } from "net.minecraft.client.renderer.RenderStateShard"
import { $Runnable$$Type } from "java.lang.Runnable"

export class $RenderStateShard$TransparencyStateShard extends $RenderStateShard {
constructor(string0: string, runnable1: $Runnable$$Type, runnable2: $Runnable$$Type)

}
}

declare module "net.minecraft.client.renderer.block.model.ItemTransforms" {
import { $ImmutableMap, $ImmutableMap$$Type } from "com.google.common.collect.ImmutableMap"
import { $ItemTransform, $ItemTransform$$Type } from "net.minecraft.client.renderer.block.model.ItemTransform"
import { $ItemDisplayContext, $ItemDisplayContext$$Type } from "net.minecraft.world.item.ItemDisplayContext"

export class $ItemTransforms {
static readonly "NO_TRANSFORMS": $ItemTransforms
readonly "firstPersonLeftHand": $ItemTransform
readonly "firstPersonRightHand": $ItemTransform
readonly "fixed": $ItemTransform
readonly "ground": $ItemTransform
readonly "gui": $ItemTransform
readonly "head": $ItemTransform
readonly "moddedTransforms": $ImmutableMap<$ItemDisplayContext, $ItemTransform>
readonly "thirdPersonLeftHand": $ItemTransform
readonly "thirdPersonRightHand": $ItemTransform

constructor(itemTransform0: $ItemTransform$$Type, itemTransform1: $ItemTransform$$Type, itemTransform2: $ItemTransform$$Type, itemTransform3: $ItemTransform$$Type, itemTransform4: $ItemTransform$$Type, itemTransform5: $ItemTransform$$Type, itemTransform6: $ItemTransform$$Type, itemTransform7: $ItemTransform$$Type, immutableMap8: $ImmutableMap$$Type<$ItemDisplayContext$$Type, $ItemTransform$$Type>)
/** @deprecated */
constructor(itemTransforms0: $ItemTransforms$$Type)
/** @deprecated */
constructor(itemTransform0: $ItemTransform$$Type, itemTransform1: $ItemTransform$$Type, itemTransform2: $ItemTransform$$Type, itemTransform3: $ItemTransform$$Type, itemTransform4: $ItemTransform$$Type, itemTransform5: $ItemTransform$$Type, itemTransform6: $ItemTransform$$Type, itemTransform7: $ItemTransform$$Type)

public "getTransform"(itemDisplayContext0: $ItemDisplayContext$$Type): $ItemTransform
public "hasTransform"(itemDisplayContext0: $ItemDisplayContext$$Type): boolean
}
}

declare module "net.minecraft.client.renderer.RenderType" {
import { $ResourceLocation, $ResourceLocation$$Type } from "net.minecraft.resources.ResourceLocation"
import { $RenderStateShard } from "net.minecraft.client.renderer.RenderStateShard"
import { $BiFunction } from "java.util.function.BiFunction"
import { $RenderType$CompositeRenderType } from "net.minecraft.client.renderer.RenderType$CompositeRenderType"
import { $BufferBuilder$$Type } from "com.mojang.blaze3d.vertex.BufferBuilder"
import { $VertexSorting$$Type } from "com.mojang.blaze3d.vertex.VertexSorting"
import { $RenderStateShard$ShaderStateShard$$Type } from "net.minecraft.client.renderer.RenderStateShard$ShaderStateShard"
import { $Function } from "java.util.function.Function"
import { $VertexFormat$Mode, $VertexFormat$Mode$$Type } from "com.mojang.blaze3d.vertex.VertexFormat$Mode"
import { $Runnable$$Type } from "java.lang.Runnable"
import { $VertexFormat, $VertexFormat$$Type } from "com.mojang.blaze3d.vertex.VertexFormat"
import { $RenderTypeAccessor } from "net.createmod.ponder.mixin.client.accessor.RenderTypeAccessor"
import { $RenderTypeAccessor as $RenderTypeAccessor$0 } from "vazkii.botania.mixin.client.RenderTypeAccessor"
import { $List } from "java.util.List"
import { $ImmutableList } from "com.google.common.collect.ImmutableList"
import { $AccessorRenderType } from "vazkii.psi.mixin.client.AccessorRenderType"
import { $Optional } from "java.util.Optional"
import { $RenderType$CompositeState, $RenderType$CompositeState$$Type } from "net.minecraft.client.renderer.RenderType$CompositeState"
import { $AccessorRenderType as $AccessorRenderType$0 } from "at.petrak.hexcasting.mixin.accessor.client.AccessorRenderType"

export class $RenderType extends $RenderStateShard implements $AccessorRenderType, $RenderTypeAccessor, $RenderTypeAccessor$0, $AccessorRenderType$0 {
static readonly "ARMOR_CUTOUT_NO_CULL": $Function<$ResourceLocation, $RenderType>
static readonly "ARMOR_ENTITY_GLINT": $RenderType
static readonly "ARMOR_GLINT": $RenderType
static readonly "BEACON_BEAM": $BiFunction<$ResourceLocation, boolean, $RenderType>
static readonly "BIG_BUFFER_SIZE": integer
static readonly "BYTES_IN_INT": integer
static readonly "CHUNK_BUFFER_LAYERS": $ImmutableList<$RenderType>
static readonly "CRUMBLING": $Function<$ResourceLocation, $RenderType>
static readonly "CUTOUT": $RenderType
static readonly "CUTOUT_MIPPED": $RenderType
static readonly "DEBUG_FILLED_BOX": $RenderType$CompositeRenderType
static readonly "DEBUG_LINE_STRIP": $Function<double, $RenderType$CompositeRenderType>
static readonly "DEBUG_QUADS": $RenderType$CompositeRenderType
static readonly "DEBUG_SECTION_QUADS": $RenderType$CompositeRenderType
static readonly "DRAGON_EXPLOSION_ALPHA": $Function<$ResourceLocation, $RenderType>
static readonly "END_GATEWAY": $RenderType
static readonly "END_PORTAL": $RenderType
static readonly "ENTITY_CUTOUT": $Function<$ResourceLocation, $RenderType>
static readonly "ENTITY_CUTOUT_NO_CULL": $BiFunction<$ResourceLocation, boolean, $RenderType>
static readonly "ENTITY_CUTOUT_NO_CULL_Z_OFFSET": $BiFunction<$ResourceLocation, boolean, $RenderType>
static readonly "ENTITY_DECAL": $Function<$ResourceLocation, $RenderType>
static readonly "ENTITY_GLINT": $RenderType
static readonly "ENTITY_GLINT_DIRECT": $RenderType
static readonly "ENTITY_NO_OUTLINE": $Function<$ResourceLocation, $RenderType>
static readonly "ENTITY_SHADOW": $Function<$ResourceLocation, $RenderType>
static readonly "ENTITY_SMOOTH_CUTOUT": $Function<$ResourceLocation, $RenderType>
static readonly "ENTITY_SOLID": $Function<$ResourceLocation, $RenderType>
static readonly "ENTITY_TRANSLUCENT": $BiFunction<$ResourceLocation, boolean, $RenderType>
static readonly "ENTITY_TRANSLUCENT_CULL": $Function<$ResourceLocation, $RenderType>
static readonly "ENTITY_TRANSLUCENT_EMISSIVE": $BiFunction<$ResourceLocation, boolean, $RenderType>
static readonly "EYES": $Function<$ResourceLocation, $RenderType>
static readonly "GLINT": $RenderType
static readonly "GLINT_DIRECT": $RenderType
static readonly "GLINT_TRANSLUCENT": $RenderType
static readonly "GUI": $RenderType$CompositeRenderType
static readonly "GUI_GHOST_RECIPE_OVERLAY": $RenderType$CompositeRenderType
static readonly "GUI_OVERLAY": $RenderType$CompositeRenderType
static readonly "GUI_TEXT_HIGHLIGHT": $RenderType$CompositeRenderType
static readonly "ITEM_ENTITY_TRANSLUCENT_CULL": $Function<$ResourceLocation, $RenderType>
static readonly "LEASH": $RenderType
static readonly "LIGHTNING": $RenderType
static readonly "LINES": $RenderType$CompositeRenderType
static readonly "LINE_STRIP": $RenderType$CompositeRenderType
static readonly "MEDIUM_BUFFER_SIZE": integer
static readonly "MEGABYTE": integer
static readonly "SMALL_BUFFER_SIZE": integer
static readonly "SOLID": $RenderType
static readonly "TEXT": $Function<$ResourceLocation, $RenderType>
static readonly "TEXT_BACKGROUND": $RenderType
static readonly "TEXT_BACKGROUND_SEE_THROUGH": $RenderType
static readonly "TEXT_INTENSITY": $Function<$ResourceLocation, $RenderType>
static readonly "TEXT_INTENSITY_POLYGON_OFFSET": $Function<$ResourceLocation, $RenderType>
static readonly "TEXT_INTENSITY_SEE_THROUGH": $Function<$ResourceLocation, $RenderType>
static readonly "TEXT_POLYGON_OFFSET": $Function<$ResourceLocation, $RenderType>
static readonly "TEXT_SEE_THROUGH": $Function<$ResourceLocation, $RenderType>
static readonly "TRANSIENT_BUFFER_SIZE": integer
static readonly "TRANSLUCENT": $RenderType
static readonly "TRANSLUCENT_MOVING_BLOCK": $RenderType
static readonly "TRANSLUCENT_NO_CRUMBLING": $RenderType
static readonly "TRIPWIRE": $RenderType
static readonly "WATER_MASK": $RenderType
readonly "affectsCrumbling": boolean
readonly "asOptional": $Optional<$RenderType>
readonly "bufferSize": integer
readonly "format": $VertexFormat
readonly "mode": $VertexFormat$Mode
readonly "sortOnUpload": boolean

constructor(string0: string, vertexFormat1: $VertexFormat$$Type, mode2: $VertexFormat$Mode$$Type, int3: integer, boolean4: boolean, boolean5: boolean, runnable6: $Runnable$$Type, runnable7: $Runnable$$Type)

public "affectsCrumbling"(): boolean
public static "armorCutoutNoCull"(resourceLocation0: $ResourceLocation$$Type): $RenderType
public static "armorEntityGlint"(): $RenderType
public static "armorGlint"(): $RenderType
public "asOptional"(): $Optional<$RenderType>
public static "beaconBeam"(resourceLocation0: $ResourceLocation$$Type, boolean1: boolean): $RenderType
public "bufferSize"(): integer
public "canConsolidateConsecutiveGeometry"(): boolean
public static "chunkBufferLayers"(): $List<$RenderType>
public static "create"(string0: string, vertexFormat1: $VertexFormat$$Type, mode2: $VertexFormat$Mode$$Type, int3: integer, boolean4: boolean, boolean5: boolean, compositeState6: $RenderType$CompositeState$$Type): $RenderType$CompositeRenderType
public static "create"(string0: string, vertexFormat1: $VertexFormat$$Type, mode2: $VertexFormat$Mode$$Type, int3: integer, compositeState4: $RenderType$CompositeState$$Type): $RenderType$CompositeRenderType
public static "crumbling"(resourceLocation0: $ResourceLocation$$Type): $RenderType
public static "cutout"(): $RenderType
public static "cutoutMipped"(): $RenderType
public static "debugFilledBox"(): $RenderType
public static "debugLineStrip"(double0: double): $RenderType
public static "debugQuads"(): $RenderType
public static "debugSectionQuads"(): $RenderType
public static "dragonExplosionAlpha"(resourceLocation0: $ResourceLocation$$Type): $RenderType
public "end"(bufferBuilder0: $BufferBuilder$$Type, vertexSorting1: $VertexSorting$$Type): void
public static "endGateway"(): $RenderType
public static "endPortal"(): $RenderType
public static "energySwirl"(resourceLocation0: $ResourceLocation$$Type, float1: float, float2: float): $RenderType
public static "entityCutout"(resourceLocation0: $ResourceLocation$$Type): $RenderType
public static "entityCutoutNoCull"(resourceLocation0: $ResourceLocation$$Type, boolean1: boolean): $RenderType
public static "entityCutoutNoCull"(resourceLocation0: $ResourceLocation$$Type): $RenderType
public static "entityCutoutNoCullZOffset"(resourceLocation0: $ResourceLocation$$Type, boolean1: boolean): $RenderType
public static "entityCutoutNoCullZOffset"(resourceLocation0: $ResourceLocation$$Type): $RenderType
public static "entityDecal"(resourceLocation0: $ResourceLocation$$Type): $RenderType
public static "entityGlint"(): $RenderType
public static "entityGlintDirect"(): $RenderType
public static "entityNoOutline"(resourceLocation0: $ResourceLocation$$Type): $RenderType
public static "entityShadow"(resourceLocation0: $ResourceLocation$$Type): $RenderType
public static "entitySmoothCutout"(resourceLocation0: $ResourceLocation$$Type): $RenderType
public static "entitySolid"(resourceLocation0: $ResourceLocation$$Type): $RenderType
public static "entityTranslucent"(resourceLocation0: $ResourceLocation$$Type): $RenderType
public static "entityTranslucent"(resourceLocation0: $ResourceLocation$$Type, boolean1: boolean): $RenderType
public static "entityTranslucentCull"(resourceLocation0: $ResourceLocation$$Type): $RenderType
public static "entityTranslucentEmissive"(resourceLocation0: $ResourceLocation$$Type, boolean1: boolean): $RenderType
public static "entityTranslucentEmissive"(resourceLocation0: $ResourceLocation$$Type): $RenderType
public static "eyes"(resourceLocation0: $ResourceLocation$$Type): $RenderType
public "format"(): $VertexFormat
public "getChunkLayerId"(): integer
public static "glint"(): $RenderType
public static "glintDirect"(): $RenderType
public static "glintTranslucent"(): $RenderType
public static "gui"(): $RenderType
public static "guiGhostRecipeOverlay"(): $RenderType
public static "guiOverlay"(): $RenderType
public static "guiTextHighlight"(): $RenderType
public "isOutline"(): boolean
public static "itemEntityTranslucentCull"(resourceLocation0: $ResourceLocation$$Type): $RenderType
public static "leash"(): $RenderType
public static "lightning"(): $RenderType
public static "lineStrip"(): $RenderType
public static "lines"(): $RenderType
public "mode"(): $VertexFormat$Mode
public static "outline"(resourceLocation0: $ResourceLocation$$Type): $RenderType
public "outline"(): $Optional<$RenderType>
public static "solid"(): $RenderType
public static "text"(resourceLocation0: $ResourceLocation$$Type): $RenderType
public static "textBackground"(): $RenderType
public static "textBackgroundSeeThrough"(): $RenderType
public static "textIntensity"(resourceLocation0: $ResourceLocation$$Type): $RenderType
public static "textIntensityPolygonOffset"(resourceLocation0: $ResourceLocation$$Type): $RenderType
public static "textIntensitySeeThrough"(resourceLocation0: $ResourceLocation$$Type): $RenderType
public static "textPolygonOffset"(resourceLocation0: $ResourceLocation$$Type): $RenderType
public static "textSeeThrough"(resourceLocation0: $ResourceLocation$$Type): $RenderType
public static "translucent"(): $RenderType
public static "translucentMovingBlock"(): $RenderType
public static "translucentMovingBlockState"(): $RenderType$CompositeState
public static "translucentNoCrumbling"(): $RenderType
public static "translucentState"(shaderStateShard0: $RenderStateShard$ShaderStateShard$$Type): $RenderType$CompositeState
public static "tripwire"(): $RenderType
public static "tripwireState"(): $RenderType$CompositeState
public static "waterMask"(): $RenderType
get "chunkLayerId"(): integer
set "chunkLayerId"(value: integer)
}
}

declare module "net.minecraft.client.renderer.entity.player.PlayerRenderer" {
import { $ResourceLocation } from "net.minecraft.resources.ResourceLocation"
import { $CallbackInfo$$Type } from "org.spongepowered.asm.mixin.injection.callback.CallbackInfo"
import { $LivingEntityRenderer } from "net.minecraft.client.renderer.entity.LivingEntityRenderer"
import { $Vec3 } from "net.minecraft.world.phys.Vec3"
import { $EntityRendererProvider$Context$$Type } from "net.minecraft.client.renderer.entity.EntityRendererProvider$Context"
import { $AbstractClientPlayer, $AbstractClientPlayer$$Type } from "net.minecraft.client.player.AbstractClientPlayer"
import { $MultiBufferSource$$Type } from "net.minecraft.client.renderer.MultiBufferSource"
import { $PoseStack$$Type } from "com.mojang.blaze3d.vertex.PoseStack"
import { $PlayerModel } from "net.minecraft.client.model.PlayerModel"

export class $PlayerRenderer extends $LivingEntityRenderer<$AbstractClientPlayer, $PlayerModel<$AbstractClientPlayer>> {
constructor(context0: $EntityRendererProvider$Context$$Type, boolean1: boolean)

public "getRenderOffset"(abstractClientPlayer0: $AbstractClientPlayer$$Type, float1: float): $Vec3
public "getTextureLocation"(abstractClientPlayer0: $AbstractClientPlayer$$Type): $ResourceLocation
public "handler$ffj000$hex$onRender"(abstractClientPlayer0: $AbstractClientPlayer$$Type, float1: float, float2: float, poseStack3: $PoseStack$$Type, multiBufferSource4: $MultiBufferSource$$Type, int5: integer, callbackInfo6: $CallbackInfo$$Type): void
public "render"(abstractClientPlayer0: $AbstractClientPlayer$$Type, float1: float, float2: float, poseStack3: $PoseStack$$Type, multiBufferSource4: $MultiBufferSource$$Type, int5: integer): void
public "renderLeftHand"(poseStack0: $PoseStack$$Type, multiBufferSource1: $MultiBufferSource$$Type, int2: integer, abstractClientPlayer3: $AbstractClientPlayer$$Type): void
public "renderRightHand"(poseStack0: $PoseStack$$Type, multiBufferSource1: $MultiBufferSource$$Type, int2: integer, abstractClientPlayer3: $AbstractClientPlayer$$Type): void
}
}

declare module "net.minecraft.client.renderer.debug.BeeDebugRenderer" {
import { $DebugRenderer$SimpleDebugRenderer } from "net.minecraft.client.renderer.debug.DebugRenderer$SimpleDebugRenderer"
import { $Minecraft$$Type } from "net.minecraft.client.Minecraft"
import { $BeeDebugRenderer$BeeInfo$$Type } from "net.minecraft.client.renderer.debug.BeeDebugRenderer$BeeInfo"
import { $BeeDebugRenderer$HiveInfo$$Type } from "net.minecraft.client.renderer.debug.BeeDebugRenderer$HiveInfo"
import { $MultiBufferSource$$Type } from "net.minecraft.client.renderer.MultiBufferSource"
import { $PoseStack$$Type } from "com.mojang.blaze3d.vertex.PoseStack"

export class $BeeDebugRenderer implements $DebugRenderer$SimpleDebugRenderer {
constructor(minecraft0: $Minecraft$$Type)

public "addOrUpdateBeeInfo"(beeInfo0: $BeeDebugRenderer$BeeInfo$$Type): void
public "addOrUpdateHiveInfo"(hiveInfo0: $BeeDebugRenderer$HiveInfo$$Type): void
public "clear"(): void
public "removeBeeInfo"(int0: integer): void
public "render"(poseStack0: $PoseStack$$Type, multiBufferSource1: $MultiBufferSource$$Type, double2: double, double3: double, double4: double): void
}
}

declare module "net.minecraft.client.renderer.texture.AbstractTexture" {
import { $ResourceLocation$$Type } from "net.minecraft.resources.ResourceLocation"
import { $Executor$$Type } from "java.util.concurrent.Executor"
import { $ResourceManager$$Type } from "net.minecraft.server.packs.resources.ResourceManager"
import { $TextureManager$$Type } from "net.minecraft.client.renderer.texture.TextureManager"
import { $AutoCloseable } from "java.lang.AutoCloseable"

export class $AbstractTexture implements $AutoCloseable {
static readonly "NOT_ASSIGNED": integer

constructor()

public "bind"(): void
public "close"(): void
public "getId"(): integer
public "load"(resourceManager0: $ResourceManager$$Type): void
public "releaseId"(): void
public "reset"(textureManager0: $TextureManager$$Type, resourceManager1: $ResourceManager$$Type, resourceLocation2: $ResourceLocation$$Type, executor3: $Executor$$Type): void
public "restoreLastBlurMipmap"(): void
public "setBlurMipmap"(boolean0: boolean, boolean1: boolean): void
public "setFilter"(boolean0: boolean, boolean1: boolean): void
get "id"(): integer
}
}

declare module "net.minecraft.client.renderer.debug.GoalSelectorDebugRenderer$DebugGoal" {
import { $BlockPos, $BlockPos$$Type } from "net.minecraft.core.BlockPos"

export class $GoalSelectorDebugRenderer$DebugGoal {
readonly "isRunning": boolean
readonly "name": string
readonly "pos": $BlockPos
readonly "priority": integer

constructor(blockPos0: $BlockPos$$Type, int1: integer, string2: string, boolean3: boolean)

}
}

declare module "net.minecraft.client.renderer.block.ModelBlockRenderer" {
import { $BakedModel$$Type } from "net.minecraft.client.resources.model.BakedModel"
import { $BlockState$$Type } from "net.minecraft.world.level.block.state.BlockState"
import { $RenderType$$Type } from "net.minecraft.client.renderer.RenderType"
import { $RandomSource$$Type } from "net.minecraft.util.RandomSource"
import { $BakedQuad$$Type } from "net.minecraft.client.renderer.block.model.BakedQuad"
import { $ModelData$$Type } from "net.minecraftforge.client.model.data.ModelData"
import { $PoseStack$$Type } from "com.mojang.blaze3d.vertex.PoseStack"
import { $PoseStack$Pose$$Type } from "com.mojang.blaze3d.vertex.PoseStack$Pose"
import { $List$$Type } from "java.util.List"
import { $BlockPos$$Type } from "net.minecraft.core.BlockPos"
import { $BlockColors, $BlockColors$$Type } from "net.minecraft.client.color.block.BlockColors"
import { $ModelBlockRenderer$AmbientOcclusionFace$$Type } from "net.minecraft.client.renderer.block.ModelBlockRenderer$AmbientOcclusionFace"
import { $BitSet$$Type } from "java.util.BitSet"
import { $VertexConsumer$$Type } from "com.mojang.blaze3d.vertex.VertexConsumer"
import { $BlockAndTintGetter$$Type } from "net.minecraft.world.level.BlockAndTintGetter"

export class $ModelBlockRenderer {
readonly "blockColors": $BlockColors

constructor(blockColors0: $BlockColors$$Type)

public static "clearCache"(): void
public static "enableCaching"(): void
public "putQuadData"(blockAndTintGetter0: $BlockAndTintGetter$$Type, blockState1: $BlockState$$Type, blockPos2: $BlockPos$$Type, vertexConsumer3: $VertexConsumer$$Type, pose4: $PoseStack$Pose$$Type, bakedQuad5: $BakedQuad$$Type, float6: float, float7: float, float8: float, float9: float, int10: integer, int11: integer, int12: integer, int13: integer, int14: integer): void
/** @deprecated */
public "renderModel"(pose0: $PoseStack$Pose$$Type, vertexConsumer1: $VertexConsumer$$Type, blockState2: $BlockState$$Type, bakedModel3: $BakedModel$$Type, float4: float, float5: float, float6: float, int7: integer, int8: integer): void
public "renderModel"(pose0: $PoseStack$Pose$$Type, vertexConsumer1: $VertexConsumer$$Type, blockState2: $BlockState$$Type, bakedModel3: $BakedModel$$Type, float4: float, float5: float, float6: float, int7: integer, int8: integer, modelData9: $ModelData$$Type, renderType10: $RenderType$$Type): void
public "renderModelFaceAO"(blockAndTintGetter0: $BlockAndTintGetter$$Type, blockState1: $BlockState$$Type, blockPos2: $BlockPos$$Type, poseStack3: $PoseStack$$Type, vertexConsumer4: $VertexConsumer$$Type, list5: $List$$Type<$BakedQuad$$Type>, float6s: float[], bitSet7: $BitSet$$Type, ambientOcclusionFace8: $ModelBlockRenderer$AmbientOcclusionFace$$Type, int9: integer): void
/** @deprecated */
public "tesselateBlock"(blockAndTintGetter0: $BlockAndTintGetter$$Type, bakedModel1: $BakedModel$$Type, blockState2: $BlockState$$Type, blockPos3: $BlockPos$$Type, poseStack4: $PoseStack$$Type, vertexConsumer5: $VertexConsumer$$Type, boolean6: boolean, randomSource7: $RandomSource$$Type, long8: long, int9: integer): void
public "tesselateBlock"(blockAndTintGetter0: $BlockAndTintGetter$$Type, bakedModel1: $BakedModel$$Type, blockState2: $BlockState$$Type, blockPos3: $BlockPos$$Type, poseStack4: $PoseStack$$Type, vertexConsumer5: $VertexConsumer$$Type, boolean6: boolean, randomSource7: $RandomSource$$Type, long8: long, int9: integer, modelData10: $ModelData$$Type, renderType11: $RenderType$$Type): void
/** @deprecated */
public "tesselateWithAO"(blockAndTintGetter0: $BlockAndTintGetter$$Type, bakedModel1: $BakedModel$$Type, blockState2: $BlockState$$Type, blockPos3: $BlockPos$$Type, poseStack4: $PoseStack$$Type, vertexConsumer5: $VertexConsumer$$Type, boolean6: boolean, randomSource7: $RandomSource$$Type, long8: long, int9: integer): void
public "tesselateWithAO"(blockAndTintGetter0: $BlockAndTintGetter$$Type, bakedModel1: $BakedModel$$Type, blockState2: $BlockState$$Type, blockPos3: $BlockPos$$Type, poseStack4: $PoseStack$$Type, vertexConsumer5: $VertexConsumer$$Type, boolean6: boolean, randomSource7: $RandomSource$$Type, long8: long, int9: integer, modelData10: $ModelData$$Type, renderType11: $RenderType$$Type): void
/** @deprecated */
public "tesselateWithoutAO"(blockAndTintGetter0: $BlockAndTintGetter$$Type, bakedModel1: $BakedModel$$Type, blockState2: $BlockState$$Type, blockPos3: $BlockPos$$Type, poseStack4: $PoseStack$$Type, vertexConsumer5: $VertexConsumer$$Type, boolean6: boolean, randomSource7: $RandomSource$$Type, long8: long, int9: integer): void
public "tesselateWithoutAO"(blockAndTintGetter0: $BlockAndTintGetter$$Type, bakedModel1: $BakedModel$$Type, blockState2: $BlockState$$Type, blockPos3: $BlockPos$$Type, poseStack4: $PoseStack$$Type, vertexConsumer5: $VertexConsumer$$Type, boolean6: boolean, randomSource7: $RandomSource$$Type, long8: long, int9: integer, modelData10: $ModelData$$Type, renderType11: $RenderType$$Type): void
}
}

declare module "net.minecraft.client.renderer.chunk.RenderChunkRegion" {
import { $LevelHeightAccessor } from "net.minecraft.world.level.LevelHeightAccessor"
import { $AABB$$Type } from "net.minecraft.world.phys.AABB"
import { $Direction$$Type } from "net.minecraft.core.Direction"
import { $BiFunction$$Type } from "java.util.function.BiFunction"
import { $BlockHitResult } from "net.minecraft.world.phys.BlockHitResult"
import { $BlockState, $BlockState$$Type } from "net.minecraft.world.level.block.state.BlockState"
import { $ModelDataManager } from "net.minecraftforge.client.model.data.ModelDataManager"
import { $BlockEntity, $BlockEntity$$Type } from "net.minecraft.world.level.block.entity.BlockEntity"
import { $Supplier$$Type } from "java.util.function.Supplier"
import { $Function$$Type } from "java.util.function.Function"
import { $ColorResolver$$Type } from "net.minecraft.world.level.ColorResolver"
import { $ClipBlockStateContext$$Type } from "net.minecraft.world.level.ClipBlockStateContext"
import { $Stream } from "java.util.stream.Stream"
import { $ClipContext$$Type } from "net.minecraft.world.level.ClipContext"
import { $LevelLightEngine } from "net.minecraft.world.level.lighting.LevelLightEngine"
import { $BlockPos$$Type } from "net.minecraft.core.BlockPos"
import { $Vec3$$Type } from "net.minecraft.world.phys.Vec3"
import { $BlockEntityType$$Type } from "net.minecraft.world.level.block.entity.BlockEntityType"
import { $FluidState } from "net.minecraft.world.level.material.FluidState"
import { $Optional } from "java.util.Optional"
import { $LightLayer$$Type } from "net.minecraft.world.level.LightLayer"
import { $VoxelShape, $VoxelShape$$Type } from "net.minecraft.world.phys.shapes.VoxelShape"
import { $BlockAndTintGetter } from "net.minecraft.world.level.BlockAndTintGetter"

export class $RenderChunkRegion implements $BlockAndTintGetter {
public "canSeeSky"(blockPos0: $BlockPos$$Type): boolean
public "clip"(clipContext0: $ClipContext$$Type): $BlockHitResult
public "clipWithInteractionOverride"(vec30: $Vec3$$Type, vec31: $Vec3$$Type, blockPos2: $BlockPos$$Type, voxelShape3: $VoxelShape$$Type, blockState4: $BlockState$$Type): $BlockHitResult
public static "create"(int0: integer, int1: integer): $LevelHeightAccessor
public "getBlockEntity"(blockPos0: $BlockPos$$Type): $BlockEntity
public "getBlockEntity"<T extends $BlockEntity>(blockPos0: $BlockPos$$Type, blockEntityType1: $BlockEntityType$$Type<T>): $Optional<T>
public "getBlockFloorHeight"(voxelShape0: $VoxelShape$$Type, supplier1: $Supplier$$Type<$VoxelShape>): double
public "getBlockFloorHeight"(blockPos0: $BlockPos$$Type): double
public "getBlockState"(blockPos0: $BlockPos$$Type): $BlockState
public "getBlockStates"(aABB0: $AABB$$Type): $Stream<$BlockState>
public "getBlockTint"(blockPos0: $BlockPos$$Type, colorResolver1: $ColorResolver$$Type): integer
public "getBrightness"(lightLayer0: $LightLayer$$Type, blockPos1: $BlockPos$$Type): integer
public "getExistingBlockEntity"(blockPos0: $BlockPos$$Type): $BlockEntity
public "getFluidState"(blockPos0: $BlockPos$$Type): $FluidState
public "getHeight"(): integer
public "getLightEmission"(blockPos0: $BlockPos$$Type): integer
public "getLightEngine"(): $LevelLightEngine
public "getMaxBuildHeight"(): integer
public "getMaxLightLevel"(): integer
public "getMaxSection"(): integer
public "getMinBuildHeight"(): integer
public "getMinSection"(): integer
public "getModelDataManager"(): $ModelDataManager
public "getRawBrightness"(blockPos0: $BlockPos$$Type, int1: integer): integer
public "getSectionIndex"(int0: integer): integer
public "getSectionIndexFromSectionY"(int0: integer): integer
public "getSectionYFromSectionIndex"(int0: integer): integer
public "getSectionsCount"(): integer
public "getShade"(direction0: $Direction$$Type, boolean1: boolean): float
public "getShade"(float0: float, float1: float, float2: float, boolean3: boolean): float
public "isBlockInLine"(clipBlockStateContext0: $ClipBlockStateContext$$Type): $BlockHitResult
public "isOutsideBuildHeight"(blockPos0: $BlockPos$$Type): boolean
public "isOutsideBuildHeight"(int0: integer): boolean
public static "traverseBlocks"<T, C>(vec30: $Vec3$$Type, vec31: $Vec3$$Type, c2: C, biFunction3: $BiFunction$$Type<C, $BlockPos$$Type, T>, function4: $Function$$Type<C, T>): T
get "height"(): integer
get "lightEngine"(): $LevelLightEngine
get "maxBuildHeight"(): integer
get "maxLightLevel"(): integer
get "maxSection"(): integer
get "minBuildHeight"(): integer
get "minSection"(): integer
get "modelDataManager"(): $ModelDataManager
get "sectionsCount"(): integer
}
}

declare module "net.minecraft.client.renderer.block.model.BlockElementFace" {
import { $BlockFaceUV, $BlockFaceUV$$Type } from "net.minecraft.client.renderer.block.model.BlockFaceUV"
import { $Direction, $Direction$$Type } from "net.minecraft.core.Direction"
import { $ForgeFaceData, $ForgeFaceData$$Type } from "net.minecraftforge.client.model.ForgeFaceData"

export class $BlockElementFace {
static readonly "NO_TINT": integer
readonly "cullForDirection": $Direction
readonly "texture": string
readonly "tintIndex": integer
readonly "uv": $BlockFaceUV

constructor(direction0: $Direction$$Type, int1: integer, string2: string, blockFaceUV3: $BlockFaceUV$$Type, forgeFaceData4: $ForgeFaceData$$Type)
constructor(direction0: $Direction$$Type, int1: integer, string2: string, blockFaceUV3: $BlockFaceUV$$Type)

public "getFaceData"(): $ForgeFaceData
get "faceData"(): $ForgeFaceData
}
}

declare module "net.minecraft.client.renderer.RenderStateShard$WriteMaskStateShard" {
import { $RenderStateShard } from "net.minecraft.client.renderer.RenderStateShard"

export class $RenderStateShard$WriteMaskStateShard extends $RenderStateShard {
constructor(boolean0: boolean, boolean1: boolean)

}
}

declare module "net.minecraft.client.renderer.RenderStateShard$OverlayStateShard" {
import { $RenderStateShard$BooleanStateShard } from "net.minecraft.client.renderer.RenderStateShard$BooleanStateShard"

export class $RenderStateShard$OverlayStateShard extends $RenderStateShard$BooleanStateShard {
constructor(boolean0: boolean)

}
}

declare module "net.minecraft.client.renderer.block.model.BakedQuad" {
import { $ModelQuadFacing } from "me.jellysquid.mods.sodium.client.model.quad.properties.ModelQuadFacing"
import { $Direction, $Direction$$Type } from "net.minecraft.core.Direction"
import { $BakedQuadView } from "me.jellysquid.mods.sodium.client.model.quad.BakedQuadView"
import { $BakedQuadAccess } from "malte0811.ferritecore.mixin.dedupbakedquad.BakedQuadAccess"
import { $IGTBakedQuad } from "com.gregtechceu.gtceu.core.IGTBakedQuad"
import { $TextureAtlasSprite, $TextureAtlasSprite$$Type } from "net.minecraft.client.renderer.texture.TextureAtlasSprite"

export class $BakedQuad implements $IGTBakedQuad, $BakedQuadAccess, $BakedQuadView {
constructor(int0s: integer[], int1: integer, direction2: $Direction$$Type, textureAtlasSprite3: $TextureAtlasSprite$$Type, boolean4: boolean, boolean5: boolean)
constructor(int0s: integer[], int1: integer, direction2: $Direction$$Type, textureAtlasSprite3: $TextureAtlasSprite$$Type, boolean4: boolean)

public "getColor"(int0: integer): integer
public "getColorIndex"(): integer
public "getComputedFaceNormal"(): integer
public "getDirection"(): $Direction
public "getFlags"(): integer
public "getForgeNormal"(int0: integer): integer
public "getLight"(int0: integer): integer
public "getLightFace"(): $Direction
public "getModFaceNormal"(): integer
public "getNormalFace"(): $ModelQuadFacing
public "getSprite"(): $TextureAtlasSprite
public "getSprite"(): $TextureAtlasSprite
public "getTexU"(int0: integer): float
public "getTexV"(int0: integer): float
public "getTintIndex"(): integer
public "getVertices"(): integer[]
public "getX"(int0: integer): float
public "getY"(int0: integer): float
public "getZ"(int0: integer): float
public "gtceu$getTextureKey"(): string
public "gtceu$setTextureKey"(string0: string): $BakedQuad
public "hasAmbientOcclusion"(): boolean
public "hasColor"(): boolean
public "hasShade"(): boolean
public "isShade"(): boolean
public "isTinted"(): boolean
public "setFlags"(int0: integer): void
get "tintIndex"(): integer
set "tintIndex"(value: integer)
get "colorIndex"(): integer
get "computedFaceNormal"(): integer
get "direction"(): $Direction
get "flags"(): integer
get "lightFace"(): $Direction
get "modFaceNormal"(): integer
get "normalFace"(): $ModelQuadFacing
get "sprite"(): $TextureAtlasSprite
get "sprite"(): $TextureAtlasSprite
get "vertices"(): integer[]
get "shade"(): boolean
get "tinted"(): boolean
set "flags"(value: integer)
}
}

declare module "net.minecraft.client.renderer.block.model.ItemTransform" {
import { $Vector3f, $Vector3f$$Type } from "org.joml.Vector3f"
import { $PoseStack$$Type } from "com.mojang.blaze3d.vertex.PoseStack"

export class $ItemTransform {
static readonly "NO_TRANSFORM": $ItemTransform
readonly "rightRotation": $Vector3f
readonly "rotation": $Vector3f
readonly "scale": $Vector3f
readonly "translation": $Vector3f

constructor(vector3f0: $Vector3f$$Type, vector3f1: $Vector3f$$Type, vector3f2: $Vector3f$$Type)
constructor(vector3f0: $Vector3f$$Type, vector3f1: $Vector3f$$Type, vector3f2: $Vector3f$$Type, vector3f3: $Vector3f$$Type)

public "apply"(boolean0: boolean, poseStack1: $PoseStack$$Type): void
}
}

declare module "net.minecraft.client.renderer.blockentity.BlockEntityRendererProvider$Context" {
import { $EntityModelSet, $EntityModelSet$$Type } from "net.minecraft.client.model.geom.EntityModelSet"
import { $Font, $Font$$Type } from "net.minecraft.client.gui.Font"
import { $EntityRenderDispatcher, $EntityRenderDispatcher$$Type } from "net.minecraft.client.renderer.entity.EntityRenderDispatcher"
import { $ModelLayerLocation$$Type } from "net.minecraft.client.model.geom.ModelLayerLocation"
import { $ItemRenderer, $ItemRenderer$$Type } from "net.minecraft.client.renderer.entity.ItemRenderer"
import { $BlockEntityRenderDispatcher, $BlockEntityRenderDispatcher$$Type } from "net.minecraft.client.renderer.blockentity.BlockEntityRenderDispatcher"
import { $BlockRenderDispatcher, $BlockRenderDispatcher$$Type } from "net.minecraft.client.renderer.block.BlockRenderDispatcher"
import { $ModelPart } from "net.minecraft.client.model.geom.ModelPart"

export class $BlockEntityRendererProvider$Context {
constructor(blockEntityRenderDispatcher0: $BlockEntityRenderDispatcher$$Type, blockRenderDispatcher1: $BlockRenderDispatcher$$Type, itemRenderer2: $ItemRenderer$$Type, entityRenderDispatcher3: $EntityRenderDispatcher$$Type, entityModelSet4: $EntityModelSet$$Type, font5: $Font$$Type)

public "bakeLayer"(modelLayerLocation0: $ModelLayerLocation$$Type): $ModelPart
public "getBlockEntityRenderDispatcher"(): $BlockEntityRenderDispatcher
public "getBlockRenderDispatcher"(): $BlockRenderDispatcher
public "getEntityRenderer"(): $EntityRenderDispatcher
public "getFont"(): $Font
public "getItemRenderer"(): $ItemRenderer
public "getModelSet"(): $EntityModelSet
get "blockEntityRenderDispatcher"(): $BlockEntityRenderDispatcher
get "blockRenderDispatcher"(): $BlockRenderDispatcher
get "entityRenderer"(): $EntityRenderDispatcher
get "font"(): $Font
get "itemRenderer"(): $ItemRenderer
get "modelSet"(): $EntityModelSet
}
}

declare module "net.minecraft.client.renderer.debug.RaidDebugRenderer" {
import { $DebugRenderer$SimpleDebugRenderer } from "net.minecraft.client.renderer.debug.DebugRenderer$SimpleDebugRenderer"
import { $Minecraft$$Type } from "net.minecraft.client.Minecraft"
import { $BlockPos$$Type } from "net.minecraft.core.BlockPos"
import { $Collection$$Type } from "java.util.Collection"
import { $MultiBufferSource$$Type } from "net.minecraft.client.renderer.MultiBufferSource"
import { $PoseStack$$Type } from "com.mojang.blaze3d.vertex.PoseStack"

export class $RaidDebugRenderer implements $DebugRenderer$SimpleDebugRenderer {
constructor(minecraft0: $Minecraft$$Type)

public "clear"(): void
public "render"(poseStack0: $PoseStack$$Type, multiBufferSource1: $MultiBufferSource$$Type, double2: double, double3: double, double4: double): void
public "setRaidCenters"(collection0: $Collection$$Type<$BlockPos$$Type>): void
set "raidCenters"(value: $Collection$$Type<$BlockPos$$Type>)
}
}

declare module "net.minecraft.client.renderer.texture.SpriteContents$AnimatedTexture" {
import { $IntStream } from "java.util.stream.IntStream"
import { $SpriteContentsAnimationAccessor } from "me.jellysquid.mods.sodium.mixin.features.textures.animations.tracking.SpriteContentsAnimationAccessor"
import { $List, $List$$Type } from "java.util.List"
import { $SpriteContents$$Type } from "net.minecraft.client.renderer.texture.SpriteContents"
import { $SpriteTicker } from "net.minecraft.client.renderer.texture.SpriteTicker"
import { $SpriteContentsAnimationAccessor as $SpriteContentsAnimationAccessor$0 } from "me.jellysquid.mods.sodium.mixin.features.textures.animations.upload.SpriteContentsAnimationAccessor"
import { $SpriteContents$FrameInfo } from "net.minecraft.client.renderer.texture.SpriteContents$FrameInfo"
import { $AnimatedTextureDuck } from "com.railwayteam.railways.mixin_interfaces.AnimatedTextureDuck"

export class $SpriteContents$AnimatedTexture implements $AnimatedTextureDuck, $SpriteContentsAnimationAccessor, $SpriteContentsAnimationAccessor$0 {
readonly "frameRowSize": integer
readonly "frames": $List<$SpriteContents$FrameInfo>
readonly "interpolateFrames": boolean

constructor(spriteContents0: $SpriteContents$$Type, list1: $List$$Type, int2: integer, boolean3: boolean)

public "createTicker"(): $SpriteTicker
public "getFrameX"(int0: integer): integer
public "getFrameY"(int0: integer): integer
public "getUniqueFrames"(): $IntStream
public "railways$uploadWithVisibility"(): void
public "uploadFirstFrame"(int0: integer, int1: integer): void
public "uploadFrame"(int0: integer, int1: integer, int2: integer): void
get "uniqueFrames"(): $IntStream
}
}

declare module "net.minecraft.client.renderer.RenderStateShard$OutputStateShard" {
import { $RenderStateShard } from "net.minecraft.client.renderer.RenderStateShard"
import { $Runnable$$Type } from "java.lang.Runnable"

export class $RenderStateShard$OutputStateShard extends $RenderStateShard {
constructor(string0: string, runnable1: $Runnable$$Type, runnable2: $Runnable$$Type)

}
}

declare module "net.minecraft.client.renderer.RenderType$CompositeRenderType" {
import { $RenderType$CompositeState } from "net.minecraft.client.renderer.RenderType$CompositeState"
import { $AccessorCompositeRenderType } from "at.petrak.hexcasting.mixin.accessor.client.AccessorCompositeRenderType"
import { $RenderType } from "net.minecraft.client.renderer.RenderType"

export class $RenderType$CompositeRenderType extends $RenderType implements $AccessorCompositeRenderType {
readonly "state": $RenderType$CompositeState

public "state"(): $RenderType$CompositeState
}
}

declare module "net.minecraft.client.renderer.entity.EntityRendererProvider$Context" {
import { $EntityModelSet, $EntityModelSet$$Type } from "net.minecraft.client.model.geom.EntityModelSet"
import { $Font, $Font$$Type } from "net.minecraft.client.gui.Font"
import { $ModelManager } from "net.minecraft.client.resources.model.ModelManager"
import { $ResourceManager, $ResourceManager$$Type } from "net.minecraft.server.packs.resources.ResourceManager"
import { $EntityRenderDispatcher, $EntityRenderDispatcher$$Type } from "net.minecraft.client.renderer.entity.EntityRenderDispatcher"
import { $ModelLayerLocation$$Type } from "net.minecraft.client.model.geom.ModelLayerLocation"
import { $ItemRenderer, $ItemRenderer$$Type } from "net.minecraft.client.renderer.entity.ItemRenderer"
import { $BlockRenderDispatcher, $BlockRenderDispatcher$$Type } from "net.minecraft.client.renderer.block.BlockRenderDispatcher"
import { $ItemInHandRenderer, $ItemInHandRenderer$$Type } from "net.minecraft.client.renderer.ItemInHandRenderer"
import { $ModelPart } from "net.minecraft.client.model.geom.ModelPart"

export class $EntityRendererProvider$Context {
constructor(entityRenderDispatcher0: $EntityRenderDispatcher$$Type, itemRenderer1: $ItemRenderer$$Type, blockRenderDispatcher2: $BlockRenderDispatcher$$Type, itemInHandRenderer3: $ItemInHandRenderer$$Type, resourceManager4: $ResourceManager$$Type, entityModelSet5: $EntityModelSet$$Type, font6: $Font$$Type)

public "bakeLayer"(modelLayerLocation0: $ModelLayerLocation$$Type): $ModelPart
public "getBlockRenderDispatcher"(): $BlockRenderDispatcher
public "getEntityRenderDispatcher"(): $EntityRenderDispatcher
public "getFont"(): $Font
public "getItemInHandRenderer"(): $ItemInHandRenderer
public "getItemRenderer"(): $ItemRenderer
public "getModelManager"(): $ModelManager
public "getModelSet"(): $EntityModelSet
public "getResourceManager"(): $ResourceManager
get "blockRenderDispatcher"(): $BlockRenderDispatcher
get "entityRenderDispatcher"(): $EntityRenderDispatcher
get "font"(): $Font
get "itemInHandRenderer"(): $ItemInHandRenderer
get "itemRenderer"(): $ItemRenderer
get "modelManager"(): $ModelManager
get "modelSet"(): $EntityModelSet
get "resourceManager"(): $ResourceManager
}
}

declare module "net.minecraft.client.renderer.RenderStateShard$TextureStateShard" {
import { $ResourceLocation, $ResourceLocation$$Type } from "net.minecraft.resources.ResourceLocation"
import { $Optional } from "java.util.Optional"
import { $RenderStateShard$EmptyTextureStateShard } from "net.minecraft.client.renderer.RenderStateShard$EmptyTextureStateShard"

export class $RenderStateShard$TextureStateShard extends $RenderStateShard$EmptyTextureStateShard {
readonly "texture": $Optional<$ResourceLocation>

constructor(resourceLocation0: $ResourceLocation$$Type, boolean1: boolean, boolean2: boolean)

get "blur"(): boolean
set "blur"(value: boolean)
get "mipmap"(): boolean
set "mipmap"(value: boolean)
}
}

declare module "net.minecraft.client.renderer.block.model.ItemOverrides$BakedOverride" {
import { $BakedModel, $BakedModel$$Type } from "net.minecraft.client.resources.model.BakedModel"

export class $ItemOverrides$BakedOverride {
get "model"(): $BakedModel
set "model"(value: $BakedModel$$Type)
}
}

declare module "net.minecraft.client.renderer.FogRenderer$FogMode" {
import { $Enum } from "java.lang.Enum"

export class $FogRenderer$FogMode extends $Enum<$FogRenderer$FogMode> {
static readonly "FOG_SKY": $FogRenderer$FogMode
static readonly "FOG_TERRAIN": $FogRenderer$FogMode

public static "valueOf"(string0: string): $FogRenderer$FogMode
public static "values"(): $FogRenderer$FogMode[]
}
}

declare module "net.minecraft.client.renderer.texture.DynamicTexture" {
import { $ResourceLocation$$Type } from "net.minecraft.resources.ResourceLocation"
import { $AbstractTexture } from "net.minecraft.client.renderer.texture.AbstractTexture"
import { $Operation$$Type } from "com.llamalad7.mixinextras.injector.wrapoperation.Operation"
import { $NativeImage, $NativeImage$$Type } from "com.mojang.blaze3d.platform.NativeImage"
import { $Path$$Type } from "java.nio.file.Path"
import { $Dumpable } from "net.minecraft.client.renderer.texture.Dumpable"

export class $DynamicTexture extends $AbstractTexture implements $Dumpable {
constructor(nativeImage0: $NativeImage$$Type)
constructor(int0: integer, int1: integer, boolean2: boolean)

public "dumpContents"(pResourceLocation: $ResourceLocation$$Type, pPath: $Path$$Type): void
public "getPixels"(): $NativeImage
public "setPixels"(nativeImage0: $NativeImage$$Type): void
public "upload"(): void
public "wrapOperation$gba000$forceMipMap"(a: integer, b: integer, c: integer, op: $Operation$$Type): void
public "wrapOperation$gba000$forceMipMap"(instance: $NativeImage$$Type, a: integer, b: integer, c: integer, autoClose: boolean, op: $Operation$$Type): void
get "pixels"(): $NativeImage
set "pixels"(value: $NativeImage$$Type)
}
}

declare module "net.minecraft.client.renderer.texture.SpriteContents$FrameInfo" {
import { $SpriteContentsAnimationFrameAccessor } from "me.jellysquid.mods.sodium.mixin.features.textures.animations.upload.SpriteContentsAnimationFrameAccessor"
import { $SpriteContentsAnimationFrameAccessor as $SpriteContentsAnimationFrameAccessor$0 } from "me.jellysquid.mods.sodium.mixin.features.textures.animations.tracking.SpriteContentsAnimationFrameAccessor"

export class $SpriteContents$FrameInfo implements $SpriteContentsAnimationFrameAccessor$0, $SpriteContentsAnimationFrameAccessor {
readonly "index": integer
readonly "time": integer

}
}

declare module "net.minecraft.client.renderer.culling.Frustum" {
import { $AABB$$Type } from "net.minecraft.world.phys.AABB"
import { $Viewport } from "me.jellysquid.mods.sodium.client.render.viewport.Viewport"
import { $ViewportProvider } from "me.jellysquid.mods.sodium.client.render.viewport.ViewportProvider"
import { $MixinFrustumAccessor } from "dev.nonamecrackers2.simpleclouds.mixin.MixinFrustumAccessor"
import { $Matrix4f$$Type } from "org.joml.Matrix4f"
import { $CallbackInfoReturnable$$Type } from "org.spongepowered.asm.mixin.injection.callback.CallbackInfoReturnable"

export class $Frustum implements $MixinFrustumAccessor, $ViewportProvider {
static readonly "OFFSET_STEP": integer

constructor(frustum0: $Frustum$$Type)
constructor(matrix4f0: $Matrix4f$$Type, matrix4f1: $Matrix4f$$Type)

public "handler$zpk000$vista$skipOffsetToFullyIncludeCameraCube"(offset: integer, cir: $CallbackInfoReturnable$$Type): void
public "isVisible"(aABB0: $AABB$$Type): boolean
public "offsetToFullyIncludeCameraCube"(int0: integer): $Frustum
public "prepare"(double0: double, double1: double, double2: double): void
public "sodium$createViewport"(): $Viewport
}
}

declare module "net.minecraft.client.renderer.debug.DebugRenderer$SimpleDebugRenderer" {
import { $MultiBufferSource$$Type } from "net.minecraft.client.renderer.MultiBufferSource"
import { $PoseStack$$Type } from "com.mojang.blaze3d.vertex.PoseStack"

export interface $DebugRenderer$SimpleDebugRenderer {
"clear"(): void
"render"(poseStack0: $PoseStack$$Type, multiBufferSource1: $MultiBufferSource$$Type, double2: double, double3: double, double4: double): void
}

export namespace $DebugRenderer$SimpleDebugRenderer {
const probejs$$marker: never
}
export abstract class $DebugRenderer$SimpleDebugRenderer$$Static implements $DebugRenderer$SimpleDebugRenderer {
}
}

declare module "net.minecraft.client.renderer.entity.ItemRenderer" {
import { $ResourceLocation } from "net.minecraft.resources.ResourceLocation"
import { $LivingEntity$$Type } from "net.minecraft.world.entity.LivingEntity"
import { $CompletableFuture } from "java.util.concurrent.CompletableFuture"
import { $ItemRendererAccessor } from "dev.emi.emi.mixin.accessor.ItemRendererAccessor"
import { $PreparableReloadListener$PreparationBarrier$$Type } from "net.minecraft.server.packs.resources.PreparableReloadListener$PreparationBarrier"
import { $ItemColors$$Type } from "net.minecraft.client.color.item.ItemColors"
import { $ItemDisplayContext$$Type } from "net.minecraft.world.item.ItemDisplayContext"
import { $PoseStack$$Type } from "com.mojang.blaze3d.vertex.PoseStack"
import { $CallbackInfoReturnable$$Type } from "org.spongepowered.asm.mixin.injection.callback.CallbackInfoReturnable"
import { $CallbackInfo$$Type } from "org.spongepowered.asm.mixin.injection.callback.CallbackInfo"
import { $Minecraft$$Type } from "net.minecraft.client.Minecraft"
import { $ModelManager$$Type } from "net.minecraft.client.resources.model.ModelManager"
import { $ItemRendererAccessor as $ItemRendererAccessor$0 } from "vazkii.botania.mixin.client.ItemRendererAccessor"
import { $BakedModel, $BakedModel$$Type } from "net.minecraft.client.resources.model.BakedModel"
import { $ProfilerFiller$$Type } from "net.minecraft.util.profiling.ProfilerFiller"
import { $Executor$$Type } from "java.util.concurrent.Executor"
import { $ResourceManagerReloadListener } from "net.minecraft.server.packs.resources.ResourceManagerReloadListener"
import { $ResourceManager$$Type } from "net.minecraft.server.packs.resources.ResourceManager"
import { $ItemModelShaper } from "net.minecraft.client.renderer.ItemModelShaper"
import { $RenderType$$Type } from "net.minecraft.client.renderer.RenderType"
import { $TextureManager, $TextureManager$$Type } from "net.minecraft.client.renderer.texture.TextureManager"
import { $BakedQuad$$Type } from "net.minecraft.client.renderer.block.model.BakedQuad"
import { $ModelResourceLocation } from "net.minecraft.client.resources.model.ModelResourceLocation"
import { $BlockEntityWithoutLevelRenderer, $BlockEntityWithoutLevelRenderer$$Type } from "net.minecraft.client.renderer.BlockEntityWithoutLevelRenderer"
import { $PoseStack$Pose$$Type } from "com.mojang.blaze3d.vertex.PoseStack$Pose"
import { $List$$Type } from "java.util.List"
import { $Operation$$Type } from "com.llamalad7.mixinextras.injector.wrapoperation.Operation"
import { $ItemStack$$Type } from "net.minecraft.world.item.ItemStack"
import { $Level$$Type } from "net.minecraft.world.level.Level"
import { $VertexConsumer, $VertexConsumer$$Type } from "com.mojang.blaze3d.vertex.VertexConsumer"
import { $MultiBufferSource$$Type } from "net.minecraft.client.renderer.MultiBufferSource"

export class $ItemRenderer implements $ResourceManagerReloadListener, $ItemRendererAccessor, $ItemRendererAccessor$0 {
static readonly "COMPASS_FOIL_FIRST_PERSON_SCALE": float
static readonly "COMPASS_FOIL_TEXTURE_SCALE": float
static readonly "COMPASS_FOIL_UI_SCALE": float
static readonly "ENCHANTED_GLINT_ENTITY": $ResourceLocation
static readonly "ENCHANTED_GLINT_ITEM": $ResourceLocation
static readonly "GUI_SLOT_CENTER_X": integer
static readonly "GUI_SLOT_CENTER_Y": integer
static readonly "ITEM_COUNT_BLIT_OFFSET": integer
static readonly "SPYGLASS_IN_HAND_MODEL": $ModelResourceLocation
static readonly "TRIDENT_IN_HAND_MODEL": $ModelResourceLocation
readonly "textureManager": $TextureManager

constructor(minecraft0: $Minecraft$$Type, textureManager1: $TextureManager$$Type, modelManager2: $ModelManager$$Type, itemColors3: $ItemColors$$Type, blockEntityWithoutLevelRenderer4: $BlockEntityWithoutLevelRenderer$$Type)

public static "getArmorFoilBuffer"(multiBufferSource0: $MultiBufferSource$$Type, renderType1: $RenderType$$Type, boolean2: boolean, boolean3: boolean): $VertexConsumer
public "getBlockEntityRenderer"(): $BlockEntityWithoutLevelRenderer
public static "getCompassFoilBuffer"(multiBufferSource0: $MultiBufferSource$$Type, renderType1: $RenderType$$Type, pose2: $PoseStack$Pose$$Type): $VertexConsumer
public static "getCompassFoilBufferDirect"(multiBufferSource0: $MultiBufferSource$$Type, renderType1: $RenderType$$Type, pose2: $PoseStack$Pose$$Type): $VertexConsumer
public static "getFoilBuffer"(multiBufferSource0: $MultiBufferSource$$Type, renderType1: $RenderType$$Type, boolean2: boolean, boolean3: boolean): $VertexConsumer
public static "getFoilBufferDirect"(multiBufferSource0: $MultiBufferSource$$Type, renderType1: $RenderType$$Type, boolean2: boolean, boolean3: boolean): $VertexConsumer
public "getItemModelShaper"(): $ItemModelShaper
public "getModel"(itemStack0: $ItemStack$$Type, level1: $Level$$Type, livingEntity2: $LivingEntity$$Type, int3: integer): $BakedModel
public "getName"(): string
public "handler$bia000$onRenderItem"(itemStack0: $ItemStack$$Type, itemDisplayContext1: $ItemDisplayContext$$Type, boolean2: boolean, poseStack3: $PoseStack$$Type, multiBufferSource4: $MultiBufferSource$$Type, int5: integer, int6: integer, bakedModel7: $BakedModel$$Type, callbackInfo8: $CallbackInfo$$Type): void
public "handler$cae000$capture"(itemStack: $ItemStack$$Type, level: $Level$$Type, livingEntity: $LivingEntity$$Type, i: integer, cir: $CallbackInfoReturnable$$Type): void
public "handler$cae000$capture"(itemStack: $ItemStack$$Type, displayContext: $ItemDisplayContext$$Type, leftHand: boolean, poseStack: $PoseStack$$Type, buffer: $MultiBufferSource$$Type, combinedLight: integer, combinedOverlay: integer, model: $BakedModel$$Type, ci: $CallbackInfo$$Type): void
public "handler$zjo000$injectRenderItem"(stack: $ItemStack$$Type, itemDisplayContext: $ItemDisplayContext$$Type, leftHanded: boolean, matrices: $PoseStack$$Type, buffer: $MultiBufferSource$$Type, light: integer, overlay: integer, model: $BakedModel$$Type, ci: $CallbackInfo$$Type): void
public "localvar$cae000$getModel"(original: $BakedModel$$Type): $BakedModel
public "localvar$cae000$render"(original: $BakedModel$$Type): $BakedModel
public "modifyExpressionValue$ham000$renderQuads"(float0: float): float
public "onResourceManagerReload"(resourceManager0: $ResourceManager$$Type): void
public "reload"(preparationBarrier0: $PreparableReloadListener$PreparationBarrier$$Type, resourceManager1: $ResourceManager$$Type, profilerFiller2: $ProfilerFiller$$Type, profilerFiller3: $ProfilerFiller$$Type, executor4: $Executor$$Type, executor5: $Executor$$Type): $CompletableFuture<void>
public "render"(itemStack0: $ItemStack$$Type, itemDisplayContext1: $ItemDisplayContext$$Type, boolean2: boolean, poseStack3: $PoseStack$$Type, multiBufferSource4: $MultiBufferSource$$Type, int5: integer, int6: integer, bakedModel7: $BakedModel$$Type): void
public "renderModelLists"(bakedModel0: $BakedModel$$Type, itemStack1: $ItemStack$$Type, int2: integer, int3: integer, poseStack4: $PoseStack$$Type, vertexConsumer5: $VertexConsumer$$Type): void
public "renderQuadList"(poseStack0: $PoseStack$$Type, vertexConsumer1: $VertexConsumer$$Type, list2: $List$$Type<$BakedQuad$$Type>, itemStack3: $ItemStack$$Type, int4: integer, int5: integer): void
public "renderStatic"(itemStack0: $ItemStack$$Type, itemDisplayContext1: $ItemDisplayContext$$Type, int2: integer, int3: integer, poseStack4: $PoseStack$$Type, multiBufferSource5: $MultiBufferSource$$Type, level6: $Level$$Type, int7: integer): void
public "renderStatic"(livingEntity0: $LivingEntity$$Type, itemStack1: $ItemStack$$Type, itemDisplayContext2: $ItemDisplayContext$$Type, boolean3: boolean, poseStack4: $PoseStack$$Type, multiBufferSource5: $MultiBufferSource$$Type, level6: $Level$$Type, int7: integer, int8: integer, int9: integer): void
public "wrapOperation$icl000$renderDetailTextureBakedModel"(renderer: $ItemRenderer$$Type, model: $BakedModel$$Type, stack: $ItemStack$$Type, light: integer, overlay: integer, matrices: $PoseStack$$Type, vertices: $VertexConsumer$$Type, original: $Operation$$Type, stackEnclosing: $ItemStack$$Type, renderMode: $ItemDisplayContext$$Type, leftHanded: boolean, matricesEnclosing: $PoseStack$$Type, vcp: $MultiBufferSource$$Type): void
public "wrapOperation$icl000$renderDetailTextureBuiltInModel"(renderer: $BlockEntityWithoutLevelRenderer$$Type, stack: $ItemStack$$Type, renderMode: $ItemDisplayContext$$Type, matrices: $PoseStack$$Type, vcp: $MultiBufferSource$$Type, light: integer, overlay: integer, original: $Operation$$Type, stackEnclosing: $ItemStack$$Type, renderModeEncl: $ItemDisplayContext$$Type, leftHanded: boolean, matricesEnclosing: $PoseStack$$Type, vcpEncl: $MultiBufferSource$$Type): void
public "wrapWithCondition$zpm000$vista$renderWithEntityContext"(instance: $ItemRenderer$$Type, itemStack: $ItemStack$$Type, displayContext: $ItemDisplayContext$$Type, leftHand: boolean, poseStack: $PoseStack$$Type, bufferSource: $MultiBufferSource$$Type, combinedLight: integer, combinedOverlay: integer, model: $BakedModel$$Type, le: $LivingEntity$$Type): boolean
get "blockEntityRenderer"(): $BlockEntityWithoutLevelRenderer
get "itemModelShaper"(): $ItemModelShaper
get "name"(): string
}
}

declare module "net.minecraft.client.renderer.chunk.RenderRegionCache" {
import { $RenderChunkRegion } from "net.minecraft.client.renderer.chunk.RenderChunkRegion"
import { $BlockPos$$Type } from "net.minecraft.core.BlockPos"
import { $Level$$Type } from "net.minecraft.world.level.Level"

export class $RenderRegionCache {
constructor()

public "createRegion"(level0: $Level$$Type, blockPos1: $BlockPos$$Type, blockPos2: $BlockPos$$Type, int3: integer): $RenderChunkRegion
}
}

declare module "net.minecraft.client.renderer.texture.Dumpable" {
import { $ResourceLocation$$Type } from "net.minecraft.resources.ResourceLocation"
import { $Path$$Type } from "java.nio.file.Path"

export interface $Dumpable {
"dumpContents"(resourceLocation0: $ResourceLocation$$Type, path1: $Path$$Type): void
}

export namespace $Dumpable {
const probejs$$marker: never
}
export abstract class $Dumpable$$Static implements $Dumpable {
}
}

declare module "net.minecraft.client.renderer.MultiBufferSource" {
import { $MultiBufferSource$BufferSource } from "net.minecraft.client.renderer.MultiBufferSource$BufferSource"
import { $Map$$Type } from "java.util.Map"
import { $BufferBuilder$$Type } from "com.mojang.blaze3d.vertex.BufferBuilder"
import { $RenderType$$Type } from "net.minecraft.client.renderer.RenderType"
import { $VertexConsumer } from "com.mojang.blaze3d.vertex.VertexConsumer"

export interface $MultiBufferSource {
"getBuffer"(renderType0: $RenderType$$Type): $VertexConsumer
}

export namespace $MultiBufferSource {
function immediate(bufferBuilder0: $BufferBuilder$$Type): $MultiBufferSource$BufferSource
function immediateWithBuffers(map0: $Map$$Type<$RenderType$$Type, $BufferBuilder$$Type>, bufferBuilder1: $BufferBuilder$$Type): $MultiBufferSource$BufferSource
}
export abstract class $MultiBufferSource$$Static implements $MultiBufferSource {
static "immediate"(bufferBuilder0: $BufferBuilder$$Type): $MultiBufferSource$BufferSource
static "immediateWithBuffers"(map0: $Map$$Type<$RenderType$$Type, $BufferBuilder$$Type>, bufferBuilder1: $BufferBuilder$$Type): $MultiBufferSource$BufferSource
}
}

declare module "net.minecraft.client.renderer.debug.GoalSelectorDebugRenderer" {
import { $DebugRenderer$SimpleDebugRenderer } from "net.minecraft.client.renderer.debug.DebugRenderer$SimpleDebugRenderer"
import { $List$$Type } from "java.util.List"
import { $Minecraft$$Type } from "net.minecraft.client.Minecraft"
import { $GoalSelectorDebugRenderer$DebugGoal$$Type } from "net.minecraft.client.renderer.debug.GoalSelectorDebugRenderer$DebugGoal"
import { $MultiBufferSource$$Type } from "net.minecraft.client.renderer.MultiBufferSource"
import { $PoseStack$$Type } from "com.mojang.blaze3d.vertex.PoseStack"

export class $GoalSelectorDebugRenderer implements $DebugRenderer$SimpleDebugRenderer {
constructor(minecraft0: $Minecraft$$Type)

public "addGoalSelector"(int0: integer, list1: $List$$Type<$GoalSelectorDebugRenderer$DebugGoal$$Type>): void
public "clear"(): void
public "removeGoalSelector"(int0: integer): void
public "render"(poseStack0: $PoseStack$$Type, multiBufferSource1: $MultiBufferSource$$Type, double2: double, double3: double, double4: double): void
}
}

declare module "net.minecraft.client.renderer.chunk.ChunkRenderDispatcher$RenderChunk" {
import { $AABB } from "net.minecraft.world.phys.AABB"
import { $ChunkRenderDispatcher$CompiledChunk } from "net.minecraft.client.renderer.chunk.ChunkRenderDispatcher$CompiledChunk"
import { $BlockPos } from "net.minecraft.core.BlockPos"
import { $Direction$$Type } from "net.minecraft.core.Direction"
import { $RenderRegionCache$$Type } from "net.minecraft.client.renderer.chunk.RenderRegionCache"
import { $RenderType$$Type } from "net.minecraft.client.renderer.RenderType"
import { $VertexBuffer } from "com.mojang.blaze3d.vertex.VertexBuffer"
import { $ChunkRenderDispatcher$$Type } from "net.minecraft.client.renderer.chunk.ChunkRenderDispatcher"
import { $AtomicReference } from "java.util.concurrent.atomic.AtomicReference"
import { $ChunkRenderDispatcher$RenderChunk$ChunkCompileTask } from "net.minecraft.client.renderer.chunk.ChunkRenderDispatcher$RenderChunk$ChunkCompileTask"

export class $ChunkRenderDispatcher$RenderChunk {
static readonly "SIZE": integer
readonly "compiled": $AtomicReference<$ChunkRenderDispatcher$CompiledChunk>
readonly "index": integer

constructor(chunkRenderDispatcher0: $ChunkRenderDispatcher$$Type, int1: integer, int2: integer, int3: integer, int4: integer)

public "compileSync"(renderRegionCache0: $RenderRegionCache$$Type): void
public "createCompileTask"(renderRegionCache0: $RenderRegionCache$$Type): $ChunkRenderDispatcher$RenderChunk$ChunkCompileTask
public "getBoundingBox"(): $AABB
public "getBuffer"(renderType0: $RenderType$$Type): $VertexBuffer
public "getCompiledChunk"(): $ChunkRenderDispatcher$CompiledChunk
public "getOrigin"(): $BlockPos
public "getRelativeOrigin"(direction0: $Direction$$Type): $BlockPos
public "hasAllNeighbors"(): boolean
public "isDirty"(): boolean
public "isDirtyFromPlayer"(): boolean
public "rebuildChunkAsync"(chunkRenderDispatcher0: $ChunkRenderDispatcher$$Type, renderRegionCache1: $RenderRegionCache$$Type): void
public "releaseBuffers"(): void
public "resortTransparency"(renderType0: $RenderType$$Type, chunkRenderDispatcher1: $ChunkRenderDispatcher$$Type): boolean
public "setDirty"(boolean0: boolean): void
public "setNotDirty"(): void
public "setOrigin"(int0: integer, int1: integer, int2: integer): void
get "dirty"(): boolean
set "dirty"(value: boolean)
get "boundingBox"(): $AABB
get "compiledChunk"(): $ChunkRenderDispatcher$CompiledChunk
get "origin"(): $BlockPos
get "dirtyFromPlayer"(): boolean
}
}

declare module "net.minecraft.client.renderer.texture.SpriteTicker" {
import { $AutoCloseable } from "java.lang.AutoCloseable"

export interface $SpriteTicker extends $AutoCloseable {
"close"(): void
"tickAndUpload"(int0: integer, int1: integer): void
}

export namespace $SpriteTicker {
const probejs$$marker: never
}
export abstract class $SpriteTicker$$Static implements $SpriteTicker {
}
}

declare module "net.minecraft.client.renderer.RenderStateShard$CullStateShard" {
import { $RenderStateShard$BooleanStateShard } from "net.minecraft.client.renderer.RenderStateShard$BooleanStateShard"

export class $RenderStateShard$CullStateShard extends $RenderStateShard$BooleanStateShard {
constructor(boolean0: boolean)

}
}

declare module "net.minecraft.client.renderer.RenderStateShard$DepthTestStateShard" {
import { $RenderStateShard } from "net.minecraft.client.renderer.RenderStateShard"

export class $RenderStateShard$DepthTestStateShard extends $RenderStateShard {
constructor(string0: string, int1: integer)

}
}

declare module "net.minecraft.client.renderer.EffectInstance" {
import { $JsonObject$$Type } from "com.google.gson.JsonObject"
import { $Effect } from "com.mojang.blaze3d.shaders.Effect"
import { $EffectProgram } from "com.mojang.blaze3d.shaders.EffectProgram"
import { $Program$Type$$Type } from "com.mojang.blaze3d.shaders.Program$Type"
import { $Program } from "com.mojang.blaze3d.shaders.Program"
import { $ResourceManager$$Type } from "net.minecraft.server.packs.resources.ResourceManager"
import { $BlendMode } from "com.mojang.blaze3d.shaders.BlendMode"
import { $AbstractUniform } from "com.mojang.blaze3d.shaders.AbstractUniform"
import { $AutoCloseable } from "java.lang.AutoCloseable"
import { $Uniform } from "com.mojang.blaze3d.shaders.Uniform"
import { $IntSupplier$$Type } from "java.util.function.IntSupplier"

export class $EffectInstance implements $Effect, $AutoCloseable {
constructor(resourceManager0: $ResourceManager$$Type, string1: string)

public "apply"(): void
public "attachToProgram"(): void
public "clear"(): void
public "close"(): void
public "getFragmentProgram"(): $Program
public "getId"(): integer
public "getName"(): string
public static "getOrCreate"(resourceManager0: $ResourceManager$$Type, type1: $Program$Type$$Type, string2: string): $EffectProgram
public "getUniform"(string0: string): $Uniform
public "getVertexProgram"(): $Program
public "markDirty"(): void
public static "parseBlendNode"(jsonObject0: $JsonObject$$Type): $BlendMode
public "safeGetUniform"(string0: string): $AbstractUniform
public "setSampler"(string0: string, intSupplier1: $IntSupplier$$Type): void
get "fragmentProgram"(): $Program
get "id"(): integer
get "name"(): string
get "vertexProgram"(): $Program
}
}

declare module "net.minecraft.client.renderer.RenderStateShard$LayeringStateShard" {
import { $RenderStateShard } from "net.minecraft.client.renderer.RenderStateShard"
import { $Runnable$$Type } from "java.lang.Runnable"

export class $RenderStateShard$LayeringStateShard extends $RenderStateShard {
constructor(string0: string, runnable1: $Runnable$$Type, runnable2: $Runnable$$Type)

}
}

declare module "net.minecraft.client.renderer.block.model.ItemOverride$Predicate" {
import { $ResourceLocation, $ResourceLocation$$Type } from "net.minecraft.resources.ResourceLocation"

export class $ItemOverride$Predicate {
constructor(resourceLocation0: $ResourceLocation$$Type, float1: float)

public "getProperty"(): $ResourceLocation
public "getValue"(): float
get "property"(): $ResourceLocation
get "value"(): float
}
}

declare module "net.minecraft.client.renderer.block.model.ItemOverrides" {
import { $BakedModel, $BakedModel$$Type } from "net.minecraft.client.resources.model.BakedModel"
import { $LivingEntity$$Type } from "net.minecraft.world.entity.LivingEntity"
import { $ClientLevel$$Type } from "net.minecraft.client.multiplayer.ClientLevel"
import { $Function$$Type } from "java.util.function.Function"
import { $ModelBaker$$Type } from "net.minecraft.client.resources.model.ModelBaker"
import { $BlockModel$$Type } from "net.minecraft.client.renderer.block.model.BlockModel"
import { $List$$Type } from "java.util.List"
import { $ImmutableList } from "com.google.common.collect.ImmutableList"
import { $UnbakedModel$$Type } from "net.minecraft.client.resources.model.UnbakedModel"
import { $ItemStack$$Type } from "net.minecraft.world.item.ItemStack"
import { $Material$$Type } from "net.minecraft.client.resources.model.Material"
import { $ItemOverride$$Type } from "net.minecraft.client.renderer.block.model.ItemOverride"
import { $TextureAtlasSprite } from "net.minecraft.client.renderer.texture.TextureAtlasSprite"
import { $ItemOverrides$BakedOverride } from "net.minecraft.client.renderer.block.model.ItemOverrides$BakedOverride"

export class $ItemOverrides {
static readonly "EMPTY": $ItemOverrides
static readonly "NO_OVERRIDE": float

/** @deprecated */
constructor(modelBaker0: $ModelBaker$$Type, blockModel1: $BlockModel$$Type, list2: $List$$Type<$ItemOverride$$Type>)
constructor(modelBaker0: $ModelBaker$$Type, unbakedModel1: $UnbakedModel$$Type, list2: $List$$Type<$ItemOverride$$Type>, function3: $Function$$Type<$Material$$Type, $TextureAtlasSprite>)
constructor()

public "getOverrides"(): $ImmutableList<$ItemOverrides$BakedOverride>
public "resolve"(bakedModel0: $BakedModel$$Type, itemStack1: $ItemStack$$Type, clientLevel2: $ClientLevel$$Type, livingEntity3: $LivingEntity$$Type, int4: integer): $BakedModel
get "overrides"(): $ImmutableList<$ItemOverrides$BakedOverride>
}
}

declare module "net.minecraft.client.renderer.texture.OverlayTexture" {
import { $AutoCloseable } from "java.lang.AutoCloseable"

export class $OverlayTexture implements $AutoCloseable {
static readonly "NO_OVERLAY": integer
static readonly "NO_WHITE_U": integer
static readonly "RED_OVERLAY_V": integer
static readonly "WHITE_OVERLAY_V": integer

constructor()

public "close"(): void
public static "pack"(int0: integer, int1: integer): integer
public static "pack"(float0: float, boolean1: boolean): integer
public "setupOverlayColor"(): void
public "teardownOverlayColor"(): void
public static "u"(float0: float): integer
public static "v"(boolean0: boolean): integer
}
}

declare module "net.minecraft.client.renderer.block.model.BlockFaceUV" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export class $BlockFaceUV {
readonly "rotation": integer

constructor(float0s: float[], int1: integer)

public "getReverseIndex"(int0: integer): integer
public "getU"(int0: integer): float
public "getV"(int0: integer): float
public "setMissingUv"(float0s: float[]): void
get "uvs"(): float[]
set "uvs"(value: float[])
set "missingUv"(value: float[])
}
}

declare module "net.minecraft.client.renderer.RenderBuffers" {
import { $OutlineBufferSource } from "net.minecraft.client.renderer.OutlineBufferSource"
import { $MultiBufferSource$BufferSource } from "net.minecraft.client.renderer.MultiBufferSource$BufferSource"
import { $ChunkBufferBuilderPack } from "net.minecraft.client.renderer.ChunkBufferBuilderPack"

export class $RenderBuffers {
constructor()

public "bufferSource"(): $MultiBufferSource$BufferSource
public "crumblingBufferSource"(): $MultiBufferSource$BufferSource
public "fixedBufferPack"(): $ChunkBufferBuilderPack
public "outlineBufferSource"(): $OutlineBufferSource
}
}

declare module "net.minecraft.client.renderer.RenderStateShard$LightmapStateShard" {
import { $RenderStateShard$BooleanStateShard } from "net.minecraft.client.renderer.RenderStateShard$BooleanStateShard"

export class $RenderStateShard$LightmapStateShard extends $RenderStateShard$BooleanStateShard {
constructor(boolean0: boolean)

}
}

declare module "net.minecraft.client.renderer.debug.GameEventListenerRenderer" {
import { $DebugRenderer$SimpleDebugRenderer } from "net.minecraft.client.renderer.debug.DebugRenderer$SimpleDebugRenderer"
import { $Minecraft$$Type } from "net.minecraft.client.Minecraft"
import { $Vec3$$Type } from "net.minecraft.world.phys.Vec3"
import { $GameEvent$$Type } from "net.minecraft.world.level.gameevent.GameEvent"
import { $MultiBufferSource$$Type } from "net.minecraft.client.renderer.MultiBufferSource"
import { $PositionSource$$Type } from "net.minecraft.world.level.gameevent.PositionSource"
import { $PoseStack$$Type } from "com.mojang.blaze3d.vertex.PoseStack"

export class $GameEventListenerRenderer implements $DebugRenderer$SimpleDebugRenderer {
constructor(minecraft0: $Minecraft$$Type)

public "clear"(): void
public "render"(poseStack0: $PoseStack$$Type, multiBufferSource1: $MultiBufferSource$$Type, double2: double, double3: double, double4: double): void
public "trackGameEvent"(gameEvent0: $GameEvent$$Type, vec31: $Vec3$$Type): void
public "trackListener"(positionSource0: $PositionSource$$Type, int1: integer): void
}
}

declare module "net.minecraft.client.renderer.RenderStateShard$ShaderStateShard" {
import { $RenderStateShard } from "net.minecraft.client.renderer.RenderStateShard"
import { $ShaderInstance } from "net.minecraft.client.renderer.ShaderInstance"
import { $Optional } from "java.util.Optional"
import { $Supplier, $Supplier$$Type } from "java.util.function.Supplier"

export class $RenderStateShard$ShaderStateShard extends $RenderStateShard {
readonly "shader": $Optional<$Supplier<$ShaderInstance>>

constructor()
constructor(supplier0: $Supplier$$Type<$ShaderInstance>)

}
}

declare module "net.minecraft.client.renderer.block.model.ItemModelGenerator" {
import { $BlockModel, $BlockModel$$Type } from "net.minecraft.client.renderer.block.model.BlockModel"
import { $List } from "java.util.List"
import { $SpriteContents$$Type } from "net.minecraft.client.renderer.texture.SpriteContents"
import { $BlockElement } from "net.minecraft.client.renderer.block.model.BlockElement"
import { $Material$$Type } from "net.minecraft.client.resources.model.Material"
import { $Function$$Type } from "java.util.function.Function"
import { $TextureAtlasSprite } from "net.minecraft.client.renderer.texture.TextureAtlasSprite"

export class $ItemModelGenerator {
static readonly "LAYERS": $List<string>

constructor()

public "generateBlockModel"(function0: $Function$$Type<$Material$$Type, $TextureAtlasSprite>, blockModel1: $BlockModel$$Type): $BlockModel
public "processFrames"(int0: integer, string1: string, spriteContents2: $SpriteContents$$Type): $List<$BlockElement>
}
}

declare module "net.minecraft.client.renderer.block.ModelBlockRenderer$AmbientOcclusionFace" {
import { $BlockPos$$Type } from "net.minecraft.core.BlockPos"
import { $Direction$$Type } from "net.minecraft.core.Direction"
import { $BlockState$$Type } from "net.minecraft.world.level.block.state.BlockState"
import { $BitSet$$Type } from "java.util.BitSet"
import { $BlockAndTintGetter$$Type } from "net.minecraft.world.level.BlockAndTintGetter"

export class $ModelBlockRenderer$AmbientOcclusionFace {
constructor()

public "calculate"(blockAndTintGetter0: $BlockAndTintGetter$$Type, blockState1: $BlockState$$Type, blockPos2: $BlockPos$$Type, direction3: $Direction$$Type, float4s: float[], bitSet5: $BitSet$$Type, boolean6: boolean): void
}
}

declare module "net.minecraft.client.renderer.texture.TextureAtlasSprite$Ticker" {
import { $AutoCloseable } from "java.lang.AutoCloseable"

export interface $TextureAtlasSprite$Ticker extends $AutoCloseable {
"close"(): void
"tickAndUpload"(): void
}

export namespace $TextureAtlasSprite$Ticker {
const probejs$$marker: never
}
export abstract class $TextureAtlasSprite$Ticker$$Static implements $TextureAtlasSprite$Ticker {
}
}

declare module "net.minecraft.client.renderer.block.model.BlockElementRotation" {
import { $Direction$Axis, $Direction$Axis$$Type } from "net.minecraft.core.Direction$Axis"
import { $Vector3f, $Vector3f$$Type } from "org.joml.Vector3f"
import { $Record } from "java.lang.Record"

export class $BlockElementRotation extends $Record {
constructor(vector3f0: $Vector3f$$Type, axis1: $Direction$Axis$$Type, float2: float, boolean3: boolean)

public "angle"(): float
public "axis"(): $Direction$Axis
public "origin"(): $Vector3f
public "rescale"(): boolean
}
}

declare module "net.minecraft.client.renderer.chunk.ChunkRenderDispatcher$CompiledChunk" {
import { $List } from "java.util.List"
import { $Direction$$Type } from "net.minecraft.core.Direction"
import { $RenderType$$Type } from "net.minecraft.client.renderer.RenderType"
import { $BlockEntity } from "net.minecraft.world.level.block.entity.BlockEntity"

export class $ChunkRenderDispatcher$CompiledChunk {
static readonly "UNCOMPILED": $ChunkRenderDispatcher$CompiledChunk

constructor()

public "facesCanSeeEachother"(direction0: $Direction$$Type, direction1: $Direction$$Type): boolean
public "getRenderableBlockEntities"(): $List<$BlockEntity>
public "hasNoRenderableLayers"(): boolean
public "isEmpty"(renderType0: $RenderType$$Type): boolean
get "renderableBlockEntities"(): $List<$BlockEntity>
}
}

declare module "net.minecraft.client.renderer.Rect2i" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export class $Rect2i {
constructor(int0: integer, int1: integer, int2: integer, int3: integer)

public "contains"(int0: integer, int1: integer): boolean
public "getHeight"(): integer
public "getWidth"(): integer
public "getX"(): integer
public "getY"(): integer
public "intersect"(rect2i0: $Rect2i$$Type): $Rect2i
public "setHeight"(int0: integer): void
public "setPosition"(int0: integer, int1: integer): void
public "setWidth"(int0: integer): void
public "setX"(int0: integer): void
public "setY"(int0: integer): void
get "height"(): integer
get "width"(): integer
get "x"(): integer
get "y"(): integer
set "height"(value: integer)
set "width"(value: integer)
set "x"(value: integer)
set "y"(value: integer)
}
}

declare module "net.minecraft.client.renderer.DimensionSpecialEffects" {
import { $Camera$$Type } from "net.minecraft.client.Camera"
import { $DimensionSpecialEffects$SkyType, $DimensionSpecialEffects$SkyType$$Type } from "net.minecraft.client.renderer.DimensionSpecialEffects$SkyType"
import { $Vec3, $Vec3$$Type } from "net.minecraft.world.phys.Vec3"
import { $Vector3f$$Type } from "org.joml.Vector3f"
import { $ClientLevel$$Type } from "net.minecraft.client.multiplayer.ClientLevel"
import { $DimensionType$$Type } from "net.minecraft.world.level.dimension.DimensionType"
import { $LightTexture$$Type } from "net.minecraft.client.renderer.LightTexture"
import { $IForgeDimensionSpecialEffects } from "net.minecraftforge.client.extensions.IForgeDimensionSpecialEffects"
import { $Matrix4f$$Type } from "org.joml.Matrix4f"
import { $Runnable$$Type } from "java.lang.Runnable"
import { $PoseStack$$Type } from "com.mojang.blaze3d.vertex.PoseStack"

export class $DimensionSpecialEffects implements $IForgeDimensionSpecialEffects {
constructor(float0: float, boolean1: boolean, skyType2: $DimensionSpecialEffects$SkyType$$Type, boolean3: boolean, boolean4: boolean)

public "adjustLightmapColors"(clientLevel0: $ClientLevel$$Type, float1: float, float2: float, float3: float, float4: float, int5: integer, int6: integer, vector3f7: $Vector3f$$Type): void
public "constantAmbientLight"(): boolean
public static "forType"(dimensionType0: $DimensionType$$Type): $DimensionSpecialEffects
public "forceBrightLightmap"(): boolean
public "getBrightnessDependentFogColor"(vec30: $Vec3$$Type, float1: float): $Vec3
public "getCloudHeight"(): float
public "getSunriseColor"(float0: float, float1: float): float[]
public "hasGround"(): boolean
public "isFoggyAt"(int0: integer, int1: integer): boolean
public "renderClouds"(clientLevel0: $ClientLevel$$Type, int1: integer, float2: float, poseStack3: $PoseStack$$Type, double4: double, double5: double, double6: double, matrix4f7: $Matrix4f$$Type): boolean
public "renderSky"(clientLevel0: $ClientLevel$$Type, int1: integer, float2: float, poseStack3: $PoseStack$$Type, camera4: $Camera$$Type, matrix4f5: $Matrix4f$$Type, boolean6: boolean, runnable7: $Runnable$$Type): boolean
public "renderSnowAndRain"(clientLevel0: $ClientLevel$$Type, int1: integer, float2: float, lightTexture3: $LightTexture$$Type, double4: double, double5: double, double6: double): boolean
public "skyType"(): $DimensionSpecialEffects$SkyType
public "tickRain"(clientLevel0: $ClientLevel$$Type, int1: integer, camera2: $Camera$$Type): boolean
get "cloudHeight"(): float
}
}

declare module "net.minecraft.client.renderer.RenderStateShard$TexturingStateShard" {
import { $RenderStateShard } from "net.minecraft.client.renderer.RenderStateShard"
import { $Runnable$$Type } from "java.lang.Runnable"

export class $RenderStateShard$TexturingStateShard extends $RenderStateShard {
constructor(string0: string, runnable1: $Runnable$$Type, runnable2: $Runnable$$Type)

}
}

declare module "net.minecraft.client.renderer.chunk.ChunkRenderDispatcher" {
import { $ChunkRenderDispatcher$RenderChunk$$Type } from "net.minecraft.client.renderer.chunk.ChunkRenderDispatcher$RenderChunk"
import { $Executor$$Type } from "java.util.concurrent.Executor"
import { $Vec3, $Vec3$$Type } from "net.minecraft.world.phys.Vec3"
import { $RenderRegionCache$$Type } from "net.minecraft.client.renderer.chunk.RenderRegionCache"
import { $LevelRenderer$$Type } from "net.minecraft.client.renderer.LevelRenderer"
import { $ClientLevel$$Type } from "net.minecraft.client.multiplayer.ClientLevel"
import { $CompletableFuture } from "java.util.concurrent.CompletableFuture"
import { $ChunkBufferBuilderPack$$Type } from "net.minecraft.client.renderer.ChunkBufferBuilderPack"
import { $VertexBuffer$$Type } from "com.mojang.blaze3d.vertex.VertexBuffer"
import { $ChunkRenderDispatcher$RenderChunk$ChunkCompileTask$$Type } from "net.minecraft.client.renderer.chunk.ChunkRenderDispatcher$RenderChunk$ChunkCompileTask"
import { $BufferBuilder$RenderedBuffer$$Type } from "com.mojang.blaze3d.vertex.BufferBuilder$RenderedBuffer"

export class $ChunkRenderDispatcher {
constructor(clientLevel0: $ClientLevel$$Type, levelRenderer1: $LevelRenderer$$Type, executor2: $Executor$$Type, boolean3: boolean, chunkBufferBuilderPack4: $ChunkBufferBuilderPack$$Type)
constructor(clientLevel0: $ClientLevel$$Type, levelRenderer1: $LevelRenderer$$Type, executor2: $Executor$$Type, boolean3: boolean, chunkBufferBuilderPack4: $ChunkBufferBuilderPack$$Type, int5: integer)

public "blockUntilClear"(): void
public "dispose"(): void
public "getCameraPosition"(): $Vec3
public "getFreeBufferCount"(): integer
public "getStats"(): string
public "getToBatchCount"(): integer
public "getToUpload"(): integer
public "isQueueEmpty"(): boolean
public "rebuildChunkSync"(renderChunk0: $ChunkRenderDispatcher$RenderChunk$$Type, renderRegionCache1: $RenderRegionCache$$Type): void
public "schedule"(chunkCompileTask0: $ChunkRenderDispatcher$RenderChunk$ChunkCompileTask$$Type): void
public "setCamera"(vec30: $Vec3$$Type): void
public "setLevel"(clientLevel0: $ClientLevel$$Type): void
public "uploadAllPendingUploads"(): void
public "uploadChunkLayer"(renderedBuffer0: $BufferBuilder$RenderedBuffer$$Type, vertexBuffer1: $VertexBuffer$$Type): $CompletableFuture<void>
get "cameraPosition"(): $Vec3
get "freeBufferCount"(): integer
get "stats"(): string
get "toBatchCount"(): integer
get "toUpload"(): integer
get "queueEmpty"(): boolean
set "camera"(value: $Vec3$$Type)
set "level"(value: $ClientLevel$$Type)
}
}

declare module "net.minecraft.client.renderer.texture.SpriteContents" {
import { $ResourceLocation, $ResourceLocation$$Type } from "net.minecraft.resources.ResourceLocation"
import { $IntStream } from "java.util.stream.IntStream"
import { $SpriteContentsAccessor } from "me.jellysquid.mods.sodium.mixin.features.textures.animations.upload.SpriteContentsAccessor"
import { $Stitcher$Entry } from "net.minecraft.client.renderer.texture.Stitcher$Entry"
import { $SpriteContentsExtension } from "com.supermartijn642.fusion.extensions.SpriteContentsExtension"
import { $Pair, $Pair$$Type } from "com.supermartijn642.fusion.api.util.Pair"
import { $IPotentiallyInvisibleSpriteContents } from "com.railwayteam.railways.mixin_interfaces.IPotentiallyInvisibleSpriteContents"
import { $AutoCloseable } from "java.lang.AutoCloseable"
import { $SpriteContentsInvoker } from "me.jellysquid.mods.sodium.mixin.features.textures.SpriteContentsInvoker"
import { $ForgeTextureMetadata, $ForgeTextureMetadata$$Type } from "net.minecraftforge.client.textures.ForgeTextureMetadata"
import { $SpriteTicker } from "net.minecraft.client.renderer.texture.SpriteTicker"
import { $SpriteContents$AnimatedTexture, $SpriteContents$AnimatedTexture$$Type } from "net.minecraft.client.renderer.texture.SpriteContents$AnimatedTexture"
import { $FrameSize$$Type } from "net.minecraft.client.resources.metadata.animation.FrameSize"
import { $AnimationMetadataSection$$Type } from "net.minecraft.client.resources.metadata.animation.AnimationMetadataSection"
import { $NativeImage, $NativeImage$$Type } from "com.mojang.blaze3d.platform.NativeImage"
import { $SpriteContentsExtended } from "me.jellysquid.mods.sodium.client.render.texture.SpriteContentsExtended"

export class $SpriteContents implements $Stitcher$Entry, $AutoCloseable, $SpriteContentsExtension, $IPotentiallyInvisibleSpriteContents, $SpriteContentsAccessor, $SpriteContentsExtended, $SpriteContentsInvoker {
readonly "forgeMeta": $ForgeTextureMetadata

/** @deprecated */
constructor(resourceLocation0: $ResourceLocation$$Type, frameSize1: $FrameSize$$Type, nativeImage2: $NativeImage$$Type, animationMetadataSection3: $AnimationMetadataSection$$Type)
constructor(resourceLocation0: $ResourceLocation$$Type, frameSize1: $FrameSize$$Type, nativeImage2: $NativeImage$$Type, animationMetadataSection3: $AnimationMetadataSection$$Type, forgeTextureMetadata4: $ForgeTextureMetadata$$Type)

public "close"(): void
public "createTicker"(): $SpriteTicker
public "getFrameCount"(): integer
public "getFusionMetadata"(): $Pair
public "getOriginalImage"(): $NativeImage
public "getUniqueFrames"(): $IntStream
public "height"(): integer
public "increaseMipLevel"(int0: integer): void
public "isTransparent"(int0: integer, int1: integer, int2: integer): boolean
public "name"(): $ResourceLocation
public "railways$isVisible"(): boolean
public "railways$shouldDoInvisibility"(): boolean
public "railways$uploadFrame"(visible: boolean): void
public "setFusionMetadata"(metadata: $Pair$$Type): void
public "sodium$hasAnimation"(): boolean
public "sodium$isActive"(): boolean
public "sodium$setActive"(boolean0: boolean): void
public "upload"(int0: integer, int1: integer, int2: integer, int3: integer, nativeImage4s: $NativeImage$$Type[]): void
public "uploadFirstFrame"(int0: integer, int1: integer): void
public "width"(): integer
get "animatedTexture"(): $SpriteContents$AnimatedTexture
set "animatedTexture"(value: $SpriteContents$AnimatedTexture$$Type)
get "byMipLevel"(): $NativeImage[]
set "byMipLevel"(value: $NativeImage$$Type[])
get "originalImage"(): $NativeImage
set "originalImage"(value: $NativeImage$$Type)
get "frameCount"(): integer
get "fusionMetadata"(): $Pair
get "uniqueFrames"(): $IntStream
set "fusionMetadata"(value: $Pair$$Type)
}
}

declare module "net.minecraft.client.renderer.block.BlockRenderDispatcher" {
import { $BakedModel } from "net.minecraft.client.resources.model.BakedModel"
import { $ModelBlockRenderer, $ModelBlockRenderer$$Type } from "net.minecraft.client.renderer.block.ModelBlockRenderer"
import { $ProfilerFiller$$Type } from "net.minecraft.util.profiling.ProfilerFiller"
import { $Executor$$Type } from "java.util.concurrent.Executor"
import { $LiquidBlockRenderer, $LiquidBlockRenderer$$Type } from "net.minecraft.client.renderer.block.LiquidBlockRenderer"
import { $BlockModelShaper, $BlockModelShaper$$Type } from "net.minecraft.client.renderer.block.BlockModelShaper"
import { $ResourceManagerReloadListener } from "net.minecraft.server.packs.resources.ResourceManagerReloadListener"
import { $ResourceManager$$Type } from "net.minecraft.server.packs.resources.ResourceManager"
import { $BlockState$$Type } from "net.minecraft.world.level.block.state.BlockState"
import { $CompletableFuture } from "java.util.concurrent.CompletableFuture"
import { $RandomSource$$Type } from "net.minecraft.util.RandomSource"
import { $RenderType$$Type } from "net.minecraft.client.renderer.RenderType"
import { $ModelData$$Type } from "net.minecraftforge.client.model.data.ModelData"
import { $PreparableReloadListener$PreparationBarrier$$Type } from "net.minecraft.server.packs.resources.PreparableReloadListener$PreparationBarrier"
import { $PoseStack$$Type } from "com.mojang.blaze3d.vertex.PoseStack"
import { $BlockEntityWithoutLevelRenderer, $BlockEntityWithoutLevelRenderer$$Type } from "net.minecraft.client.renderer.BlockEntityWithoutLevelRenderer"
import { $BlockPos$$Type } from "net.minecraft.core.BlockPos"
import { $BlockColors, $BlockColors$$Type } from "net.minecraft.client.color.block.BlockColors"
import { $FluidState$$Type } from "net.minecraft.world.level.material.FluidState"
import { $VertexConsumer$$Type } from "com.mojang.blaze3d.vertex.VertexConsumer"
import { $MultiBufferSource$$Type } from "net.minecraft.client.renderer.MultiBufferSource"
import { $BlockAndTintGetter$$Type } from "net.minecraft.world.level.BlockAndTintGetter"

export class $BlockRenderDispatcher implements $ResourceManagerReloadListener {
readonly "blockEntityRenderer": $BlockEntityWithoutLevelRenderer

constructor(blockModelShaper0: $BlockModelShaper$$Type, blockEntityWithoutLevelRenderer1: $BlockEntityWithoutLevelRenderer$$Type, blockColors2: $BlockColors$$Type)

public "getBlockModel"(blockState0: $BlockState$$Type): $BakedModel
public "getBlockModelShaper"(): $BlockModelShaper
public "getModelRenderer"(): $ModelBlockRenderer
public "getName"(): string
public "onResourceManagerReload"(resourceManager0: $ResourceManager$$Type): void
public "reload"(preparationBarrier0: $PreparableReloadListener$PreparationBarrier$$Type, resourceManager1: $ResourceManager$$Type, profilerFiller2: $ProfilerFiller$$Type, profilerFiller3: $ProfilerFiller$$Type, executor4: $Executor$$Type, executor5: $Executor$$Type): $CompletableFuture<void>
/** @deprecated */
public "renderBatched"(blockState0: $BlockState$$Type, blockPos1: $BlockPos$$Type, blockAndTintGetter2: $BlockAndTintGetter$$Type, poseStack3: $PoseStack$$Type, vertexConsumer4: $VertexConsumer$$Type, boolean5: boolean, randomSource6: $RandomSource$$Type): void
public "renderBatched"(blockState0: $BlockState$$Type, blockPos1: $BlockPos$$Type, blockAndTintGetter2: $BlockAndTintGetter$$Type, poseStack3: $PoseStack$$Type, vertexConsumer4: $VertexConsumer$$Type, boolean5: boolean, randomSource6: $RandomSource$$Type, modelData7: $ModelData$$Type, renderType8: $RenderType$$Type): void
public "renderBreakingTexture"(blockState0: $BlockState$$Type, blockPos1: $BlockPos$$Type, blockAndTintGetter2: $BlockAndTintGetter$$Type, poseStack3: $PoseStack$$Type, vertexConsumer4: $VertexConsumer$$Type, modelData5: $ModelData$$Type): void
/** @deprecated */
public "renderBreakingTexture"(blockState0: $BlockState$$Type, blockPos1: $BlockPos$$Type, blockAndTintGetter2: $BlockAndTintGetter$$Type, poseStack3: $PoseStack$$Type, vertexConsumer4: $VertexConsumer$$Type): void
public "renderLiquid"(blockPos0: $BlockPos$$Type, blockAndTintGetter1: $BlockAndTintGetter$$Type, vertexConsumer2: $VertexConsumer$$Type, blockState3: $BlockState$$Type, fluidState4: $FluidState$$Type): void
public "renderSingleBlock"(blockState0: $BlockState$$Type, poseStack1: $PoseStack$$Type, multiBufferSource2: $MultiBufferSource$$Type, int3: integer, int4: integer, modelData5: $ModelData$$Type, renderType6: $RenderType$$Type): void
/** @deprecated */
public "renderSingleBlock"(blockState0: $BlockState$$Type, poseStack1: $PoseStack$$Type, multiBufferSource2: $MultiBufferSource$$Type, int3: integer, int4: integer): void
get "blockColors"(): $BlockColors
set "blockColors"(value: $BlockColors$$Type)
get "liquidBlockRenderer"(): $LiquidBlockRenderer
set "liquidBlockRenderer"(value: $LiquidBlockRenderer$$Type)
get "modelRenderer"(): $ModelBlockRenderer
set "modelRenderer"(value: $ModelBlockRenderer$$Type)
get "blockModelShaper"(): $BlockModelShaper
get "name"(): string
}
}

declare module "net.minecraft.client.renderer.PostChain" {
import { $ResourceLocation$$Type } from "net.minecraft.resources.ResourceLocation"
import { $MixinPostChain } from "dev.nonamecrackers2.simpleclouds.mixin.MixinPostChain"
import { $List } from "java.util.List"
import { $PostPass } from "net.minecraft.client.renderer.PostPass"
import { $RenderTarget, $RenderTarget$$Type } from "com.mojang.blaze3d.pipeline.RenderTarget"
import { $ResourceManager$$Type } from "net.minecraft.server.packs.resources.ResourceManager"
import { $TextureManager$$Type } from "net.minecraft.client.renderer.texture.TextureManager"
import { $AutoCloseable } from "java.lang.AutoCloseable"
import { $Matrix4f, $Matrix4f$$Type } from "org.joml.Matrix4f"

export class $PostChain implements $AutoCloseable, $MixinPostChain {
readonly "passes": $List<$PostPass>

constructor(textureManager0: $TextureManager$$Type, resourceManager1: $ResourceManager$$Type, renderTarget2: $RenderTarget$$Type, resourceLocation3: $ResourceLocation$$Type)

public "addPass"(string0: string, renderTarget1: $RenderTarget$$Type, renderTarget2: $RenderTarget$$Type): $PostPass
public "addTempTarget"(string0: string, int1: integer, int2: integer): void
public "close"(): void
public "getName"(): string
public "getTempTarget"(string0: string): $RenderTarget
public "process"(float0: float): void
public "resize"(int0: integer, int1: integer): void
get "shaderOrthoMatrix"(): $Matrix4f
set "shaderOrthoMatrix"(value: $Matrix4f$$Type)
get "name"(): string
}
}

declare module "net.minecraft.client.renderer.texture.Tickable" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $Tickable {
"tick"(): void
}

export namespace $Tickable {
const probejs$$marker: never
}
export abstract class $Tickable$$Static implements $Tickable {
}
}

declare module "net.minecraft.client.renderer.ChunkBufferBuilderPack" {
import { $BufferBuilder } from "com.mojang.blaze3d.vertex.BufferBuilder"
import { $RenderType$$Type } from "net.minecraft.client.renderer.RenderType"

export class $ChunkBufferBuilderPack {
constructor()

public "builder"(renderType0: $RenderType$$Type): $BufferBuilder
public "clearAll"(): void
public "discardAll"(): void
}
}

declare module "net.minecraft.client.renderer.RenderStateShard$LineStateShard" {
import { $RenderStateShard } from "net.minecraft.client.renderer.RenderStateShard"
import { $OptionalDouble$$Type } from "java.util.OptionalDouble"

export class $RenderStateShard$LineStateShard extends $RenderStateShard {
constructor(optionalDouble0: $OptionalDouble$$Type)

}
}

declare module "net.minecraft.client.renderer.RenderType$OutlineProperty" {
import { $Enum } from "java.lang.Enum"

export class $RenderType$OutlineProperty extends $Enum<$RenderType$OutlineProperty> {
static readonly "AFFECTS_OUTLINE": $RenderType$OutlineProperty
static readonly "IS_OUTLINE": $RenderType$OutlineProperty
static readonly "NONE": $RenderType$OutlineProperty

public static "valueOf"(string0: string): $RenderType$OutlineProperty
public static "values"(): $RenderType$OutlineProperty[]
}
}

declare module "net.minecraft.client.renderer.texture.TextureAtlasSprite" {
import { $ResourceLocation, $ResourceLocation$$Type } from "net.minecraft.resources.ResourceLocation"
import { $TextureAtlasSprite$Ticker } from "net.minecraft.client.renderer.texture.TextureAtlasSprite$Ticker"
import { $TextureType, $TextureType$$Type } from "com.supermartijn642.fusion.api.texture.TextureType"
import { $SpriteContents, $SpriteContents$$Type } from "net.minecraft.client.renderer.texture.SpriteContents"
import { $TextureAtlasSpriteExtension } from "com.supermartijn642.fusion.extensions.TextureAtlasSpriteExtension"
import { $VertexConsumer, $VertexConsumer$$Type } from "com.mojang.blaze3d.vertex.VertexConsumer"

export class $TextureAtlasSprite implements $TextureAtlasSpriteExtension {
constructor(resourceLocation0: $ResourceLocation$$Type, spriteContents1: $SpriteContents$$Type, int2: integer, int3: integer, int4: integer, int5: integer)

public "atlasLocation"(): $ResourceLocation
public "contents"(): $SpriteContents
public "createTicker"(): $TextureAtlasSprite$Ticker
public "getFusionTextureType"(): $TextureType
public "getPixelRGBA"(int0: integer, int1: integer, int2: integer): integer
public "getU"(double0: double): float
public "getU0"(): float
public "getU1"(): float
public "getUOffset"(float0: float): float
public "getV"(double0: double): float
public "getV0"(): float
public "getV1"(): float
public "getVOffset"(float0: float): float
public "getX"(): integer
public "getY"(): integer
public "setFusionTextureType"(type: $TextureType$$Type): void
public "uploadFirstFrame"(): void
public "uvShrinkRatio"(): float
public "wrap"(vertexConsumer0: $VertexConsumer$$Type): $VertexConsumer
get "u0"(): float
set "u0"(value: float)
get "u1"(): float
set "u1"(value: float)
get "v0"(): float
set "v0"(value: float)
get "v1"(): float
set "v1"(value: float)
get "fusionTextureType"(): $TextureType
get "x"(): integer
get "y"(): integer
set "fusionTextureType"(value: $TextureType$$Type)
}
}

declare module "net.minecraft.client.renderer.chunk.VisibilitySet" {
import { $Direction$$Type } from "net.minecraft.core.Direction"
import { $Set$$Type } from "java.util.Set"

export class $VisibilitySet {
constructor()

public "add"(set0: $Set$$Type<$Direction$$Type>): void
public "set"(direction0: $Direction$$Type, direction1: $Direction$$Type, boolean2: boolean): void
public "setAll"(boolean0: boolean): void
public "visibilityBetween"(direction0: $Direction$$Type, direction1: $Direction$$Type): boolean
set "all"(value: boolean)
}
}

declare module "net.minecraft.client.renderer.LevelRenderer$RenderInfoMap" {
import { $ChunkRenderDispatcher$RenderChunk$$Type } from "net.minecraft.client.renderer.chunk.ChunkRenderDispatcher$RenderChunk"
import { $LevelRenderer$RenderChunkInfo, $LevelRenderer$RenderChunkInfo$$Type } from "net.minecraft.client.renderer.LevelRenderer$RenderChunkInfo"

export class $LevelRenderer$RenderInfoMap {
public "get"(renderChunk0: $ChunkRenderDispatcher$RenderChunk$$Type): $LevelRenderer$RenderChunkInfo
public "put"(renderChunk0: $ChunkRenderDispatcher$RenderChunk$$Type, renderChunkInfo1: $LevelRenderer$RenderChunkInfo$$Type): void
}
}

declare module "net.minecraft.client.renderer.block.LiquidBlockRenderer" {
import { $Operation$$Type } from "com.llamalad7.mixinextras.injector.wrapoperation.Operation"
import { $BlockPos$$Type } from "net.minecraft.core.BlockPos"
import { $Direction$$Type } from "net.minecraft.core.Direction"
import { $FluidState$$Type } from "net.minecraft.world.level.material.FluidState"
import { $BlockState$$Type } from "net.minecraft.world.level.block.state.BlockState"
import { $Fluid$$Type } from "net.minecraft.world.level.material.Fluid"
import { $VertexConsumer$$Type } from "com.mojang.blaze3d.vertex.VertexConsumer"
import { $BlockAndTintGetter$$Type } from "net.minecraft.world.level.BlockAndTintGetter"

export class $LiquidBlockRenderer {
constructor()

public static "shouldRenderFace"(blockAndTintGetter0: $BlockAndTintGetter$$Type, blockPos1: $BlockPos$$Type, fluidState2: $FluidState$$Type, blockState3: $BlockState$$Type, direction4: $Direction$$Type, fluidState5: $FluidState$$Type): boolean
public "tesselate"(blockAndTintGetter0: $BlockAndTintGetter$$Type, blockPos1: $BlockPos$$Type, vertexConsumer2: $VertexConsumer$$Type, blockState3: $BlockState$$Type, fluidState4: $FluidState$$Type): void
public "wrapOperation$hfh000$supplementaries$modifyLumiseneHeight"(instance: $Fluid$$Type, above: $Fluid$$Type, original: $Operation$$Type): boolean
public "wrapOperation$hfh000$supplementaries$modifyLumiseneLight"(level: $BlockAndTintGetter$$Type, pos: $BlockPos$$Type, original: $Operation$$Type): integer
}
}

declare module "net.minecraft.client.renderer.RenderStateShard" {
import { $RenderStateShard$WriteMaskStateShard } from "net.minecraft.client.renderer.RenderStateShard$WriteMaskStateShard"
import { $AccessorRenderState } from "vazkii.psi.mixin.client.AccessorRenderState"
import { $RenderStateShard$OutputStateShard } from "net.minecraft.client.renderer.RenderStateShard$OutputStateShard"
import { $RenderStateShard$ColorLogicStateShard } from "net.minecraft.client.renderer.RenderStateShard$ColorLogicStateShard"
import { $RenderStateShard$CullStateShard } from "net.minecraft.client.renderer.RenderStateShard$CullStateShard"
import { $RenderStateShard$LightmapStateShard } from "net.minecraft.client.renderer.RenderStateShard$LightmapStateShard"
import { $RenderStateShard$LayeringStateShard } from "net.minecraft.client.renderer.RenderStateShard$LayeringStateShard"
import { $RenderStateShard$ShaderStateShard } from "net.minecraft.client.renderer.RenderStateShard$ShaderStateShard"
import { $Runnable, $Runnable$$Type } from "java.lang.Runnable"
import { $RenderStateShard$LineStateShard } from "net.minecraft.client.renderer.RenderStateShard$LineStateShard"
import { $RenderStateShard$TexturingStateShard } from "net.minecraft.client.renderer.RenderStateShard$TexturingStateShard"
import { $AccessorRenderStateShard } from "at.petrak.hexcasting.mixin.accessor.client.AccessorRenderStateShard"
import { $RenderStateShard$EmptyTextureStateShard } from "net.minecraft.client.renderer.RenderStateShard$EmptyTextureStateShard"
import { $RenderStateShard$DepthTestStateShard } from "net.minecraft.client.renderer.RenderStateShard$DepthTestStateShard"
import { $RenderStateShard$OverlayStateShard } from "net.minecraft.client.renderer.RenderStateShard$OverlayStateShard"
import { $RenderStateShard$TextureStateShard } from "net.minecraft.client.renderer.RenderStateShard$TextureStateShard"
import { $RenderStateShard$TransparencyStateShard } from "net.minecraft.client.renderer.RenderStateShard$TransparencyStateShard"

export class $RenderStateShard implements $AccessorRenderState, $AccessorRenderStateShard {
static readonly "ADDITIVE_TRANSPARENCY": $RenderStateShard$TransparencyStateShard
static readonly "BLOCK_SHEET": $RenderStateShard$TextureStateShard
static readonly "BLOCK_SHEET_MIPPED": $RenderStateShard$TextureStateShard
static readonly "CLOUDS_TARGET": $RenderStateShard$OutputStateShard
static readonly "COLOR_DEPTH_WRITE": $RenderStateShard$WriteMaskStateShard
static readonly "COLOR_WRITE": $RenderStateShard$WriteMaskStateShard
static readonly "CRUMBLING_TRANSPARENCY": $RenderStateShard$TransparencyStateShard
static readonly "CULL": $RenderStateShard$CullStateShard
static readonly "DEFAULT_LINE": $RenderStateShard$LineStateShard
static readonly "DEFAULT_TEXTURING": $RenderStateShard$TexturingStateShard
static readonly "DEPTH_WRITE": $RenderStateShard$WriteMaskStateShard
static readonly "ENTITY_GLINT_TEXTURING": $RenderStateShard$TexturingStateShard
static readonly "EQUAL_DEPTH_TEST": $RenderStateShard$DepthTestStateShard
static readonly "GLINT_TEXTURING": $RenderStateShard$TexturingStateShard
static readonly "GLINT_TRANSPARENCY": $RenderStateShard$TransparencyStateShard
static readonly "GREATER_DEPTH_TEST": $RenderStateShard$DepthTestStateShard
static readonly "ITEM_ENTITY_TARGET": $RenderStateShard$OutputStateShard
static readonly "LEQUAL_DEPTH_TEST": $RenderStateShard$DepthTestStateShard
static readonly "LIGHTMAP": $RenderStateShard$LightmapStateShard
static readonly "LIGHTNING_TRANSPARENCY": $RenderStateShard$TransparencyStateShard
static readonly "MAIN_TARGET": $RenderStateShard$OutputStateShard
static readonly "MAX_ENCHANTMENT_GLINT_SPEED_MILLIS": double
static readonly "NO_COLOR_LOGIC": $RenderStateShard$ColorLogicStateShard
static readonly "NO_CULL": $RenderStateShard$CullStateShard
static readonly "NO_DEPTH_TEST": $RenderStateShard$DepthTestStateShard
static readonly "NO_LAYERING": $RenderStateShard$LayeringStateShard
static readonly "NO_LIGHTMAP": $RenderStateShard$LightmapStateShard
static readonly "NO_OVERLAY": $RenderStateShard$OverlayStateShard
static readonly "NO_SHADER": $RenderStateShard$ShaderStateShard
static readonly "NO_TEXTURE": $RenderStateShard$EmptyTextureStateShard
static readonly "NO_TRANSPARENCY": $RenderStateShard$TransparencyStateShard
static readonly "OR_REVERSE_COLOR_LOGIC": $RenderStateShard$ColorLogicStateShard
static readonly "OUTLINE_TARGET": $RenderStateShard$OutputStateShard
static readonly "OVERLAY": $RenderStateShard$OverlayStateShard
static readonly "PARTICLES_TARGET": $RenderStateShard$OutputStateShard
static readonly "POLYGON_OFFSET_LAYERING": $RenderStateShard$LayeringStateShard
static readonly "POSITION_COLOR_LIGHTMAP_SHADER": $RenderStateShard$ShaderStateShard
static readonly "POSITION_COLOR_SHADER": $RenderStateShard$ShaderStateShard
static readonly "POSITION_COLOR_TEX_LIGHTMAP_SHADER": $RenderStateShard$ShaderStateShard
static readonly "POSITION_COLOR_TEX_SHADER": $RenderStateShard$ShaderStateShard
static readonly "POSITION_SHADER": $RenderStateShard$ShaderStateShard
static readonly "POSITION_TEX_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_ARMOR_CUTOUT_NO_CULL_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_ARMOR_ENTITY_GLINT_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_ARMOR_GLINT_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_BEACON_BEAM_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_CRUMBLING_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_CUTOUT_MIPPED_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_CUTOUT_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_END_GATEWAY_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_END_PORTAL_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_ENERGY_SWIRL_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_ENTITY_ALPHA_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_ENTITY_CUTOUT_NO_CULL_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_ENTITY_CUTOUT_NO_CULL_Z_OFFSET_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_ENTITY_CUTOUT_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_ENTITY_DECAL_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_ENTITY_GLINT_DIRECT_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_ENTITY_GLINT_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_ENTITY_NO_OUTLINE_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_ENTITY_SHADOW_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_ENTITY_SMOOTH_CUTOUT_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_ENTITY_SOLID_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_ENTITY_TRANSLUCENT_CULL_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_ENTITY_TRANSLUCENT_EMISSIVE_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_ENTITY_TRANSLUCENT_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_EYES_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_GLINT_DIRECT_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_GLINT_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_GLINT_TRANSLUCENT_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_GUI_GHOST_RECIPE_OVERLAY_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_GUI_OVERLAY_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_GUI_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_GUI_TEXT_HIGHLIGHT_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_ITEM_ENTITY_TRANSLUCENT_CULL_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_LEASH_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_LIGHTNING_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_LINES_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_OUTLINE_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_SOLID_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_TEXT_BACKGROUND_SEE_THROUGH_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_TEXT_BACKGROUND_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_TEXT_INTENSITY_SEE_THROUGH_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_TEXT_INTENSITY_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_TEXT_SEE_THROUGH_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_TEXT_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_TRANSLUCENT_MOVING_BLOCK_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_TRANSLUCENT_NO_CRUMBLING_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_TRANSLUCENT_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_TRIPWIRE_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_WATER_MASK_SHADER": $RenderStateShard$ShaderStateShard
static readonly "TRANSLUCENT_TARGET": $RenderStateShard$OutputStateShard
static readonly "TRANSLUCENT_TRANSPARENCY": $RenderStateShard$TransparencyStateShard
static readonly "VIEW_OFFSET_Z_LAYERING": $RenderStateShard$LayeringStateShard
static readonly "VIEW_SCALE_Z_EPSILON": float
static readonly "WEATHER_TARGET": $RenderStateShard$OutputStateShard
readonly "clearState": $Runnable
readonly "name": string

constructor(string0: string, runnable1: $Runnable$$Type, runnable2: $Runnable$$Type)

public "clearRenderState"(): void
public "setupRenderState"(): void
get "setupState"(): $Runnable
set "setupState"(value: $Runnable$$Type)
}
}

declare module "net.minecraft.client.renderer.debug.StructureRenderer" {
import { $DebugRenderer$SimpleDebugRenderer } from "net.minecraft.client.renderer.debug.DebugRenderer$SimpleDebugRenderer"
import { $List$$Type } from "java.util.List"
import { $Minecraft$$Type } from "net.minecraft.client.Minecraft"
import { $BoundingBox$$Type } from "net.minecraft.world.level.levelgen.structure.BoundingBox"
import { $DimensionType$$Type } from "net.minecraft.world.level.dimension.DimensionType"
import { $MultiBufferSource$$Type } from "net.minecraft.client.renderer.MultiBufferSource"
import { $PoseStack$$Type } from "com.mojang.blaze3d.vertex.PoseStack"

export class $StructureRenderer implements $DebugRenderer$SimpleDebugRenderer {
constructor(minecraft0: $Minecraft$$Type)

public "addBoundingBox"(boundingBox0: $BoundingBox$$Type, list1: $List$$Type<$BoundingBox$$Type>, list2: $List$$Type<boolean>, dimensionType3: $DimensionType$$Type): void
public "clear"(): void
public "render"(poseStack0: $PoseStack$$Type, multiBufferSource1: $MultiBufferSource$$Type, double2: double, double3: double, double4: double): void
}
}

declare module "net.minecraft.client.renderer.debug.LightSectionDebugRenderer" {
import { $DebugRenderer$SimpleDebugRenderer } from "net.minecraft.client.renderer.debug.DebugRenderer$SimpleDebugRenderer"
import { $Minecraft$$Type } from "net.minecraft.client.Minecraft"
import { $LightLayer$$Type } from "net.minecraft.world.level.LightLayer"
import { $MultiBufferSource$$Type } from "net.minecraft.client.renderer.MultiBufferSource"
import { $PoseStack$$Type } from "com.mojang.blaze3d.vertex.PoseStack"

export class $LightSectionDebugRenderer implements $DebugRenderer$SimpleDebugRenderer {
constructor(minecraft0: $Minecraft$$Type, lightLayer1: $LightLayer$$Type)

public "clear"(): void
public "render"(poseStack0: $PoseStack$$Type, multiBufferSource1: $MultiBufferSource$$Type, double2: double, double3: double, double4: double): void
}
}

declare module "net.minecraft.client.renderer.entity.layers.RenderLayer" {
import { $RenderLayerParent$$Type } from "net.minecraft.client.renderer.entity.RenderLayerParent"
import { $Entity, $Entity$$Type } from "net.minecraft.world.entity.Entity"
import { $EntityModel } from "net.minecraft.client.model.EntityModel"
import { $MultiBufferSource$$Type } from "net.minecraft.client.renderer.MultiBufferSource"
import { $IUpperPartHelper } from "dev.kosmx.playerAnim.impl.IUpperPartHelper"
import { $PoseStack$$Type } from "com.mojang.blaze3d.vertex.PoseStack"

export class $RenderLayer<T extends $Entity = $Entity, M extends $EntityModel<T> = $EntityModel<T>> implements $IUpperPartHelper {
constructor(renderLayerParent0: $RenderLayerParent$$Type<T, M>)

public "getParentModel"(): M
public "isUpperPart"(): boolean
public "render"(poseStack0: $PoseStack$$Type, multiBufferSource1: $MultiBufferSource$$Type, int2: integer, t3: T, float4: float, float5: float, float6: float, float7: float, float8: float, float9: float): void
public "setUpperPart"(bl: boolean): void
get "parentModel"(): M
get "upperPart"(): boolean
set "upperPart"(value: boolean)
}
}

declare module "net.minecraft.client.renderer.entity.LivingEntityRenderer" {
import { $ResourceLocation } from "net.minecraft.resources.ResourceLocation"
import { $RenderLayerParent } from "net.minecraft.client.renderer.entity.RenderLayerParent"
import { $LivingEntity, $LivingEntity$$Type } from "net.minecraft.world.entity.LivingEntity"
import { $LivingEntityRendererAccessor } from "artifacts.mixin.accessors.client.LivingEntityRendererAccessor"
import { $RenderLayer, $RenderLayer$$Type } from "net.minecraft.client.renderer.entity.layers.RenderLayer"
import { $EntityModel, $EntityModel$$Type } from "net.minecraft.client.model.EntityModel"
import { $PoseStack$$Type } from "com.mojang.blaze3d.vertex.PoseStack"
import { $CallbackInfoReturnable$$Type } from "org.spongepowered.asm.mixin.injection.callback.CallbackInfoReturnable"
import { $CallbackInfo$$Type } from "org.spongepowered.asm.mixin.injection.callback.CallbackInfo"
import { $List } from "java.util.List"
import { $EntityRendererProvider$Context$$Type } from "net.minecraft.client.renderer.entity.EntityRendererProvider$Context"
import { $MultiBufferSource$$Type } from "net.minecraft.client.renderer.MultiBufferSource"
import { $AccessorLivingEntityRenderer } from "com.railwayteam.railways.mixin.client.AccessorLivingEntityRenderer"
import { $EntityRenderer } from "net.minecraft.client.renderer.entity.EntityRenderer"

export class $LivingEntityRenderer<T extends $LivingEntity = $LivingEntity, M extends $EntityModel<T> = $EntityModel<T>> extends $EntityRenderer<T> implements $RenderLayerParent<T, M>, $LivingEntityRendererAccessor, $AccessorLivingEntityRenderer {
readonly "layers": $List<$RenderLayer<T, M>>

constructor(context0: $EntityRendererProvider$Context$$Type, m1: M, float2: float)

public "addLayer"(renderLayer0: $RenderLayer$$Type<T, M>): boolean
public "getModel"(): M
public static "getOverlayCoords"(livingEntity0: $LivingEntity$$Type, float1: float): integer
public "getTextureLocation"(t0: T): $ResourceLocation
public "handler$bhj000$celestisynth$render"(livingEntity0: $LivingEntity$$Type, float1: float, float2: float, poseStack3: $PoseStack$$Type, multiBufferSource4: $MultiBufferSource$$Type, int5: integer, callbackInfo6: $CallbackInfo$$Type): void
public "handler$dem000$render"(livingEntity0: $LivingEntity$$Type, float1: float, float2: float, poseStack3: $PoseStack$$Type, multiBufferSource4: $MultiBufferSource$$Type, int5: integer, callbackInfo6: $CallbackInfo$$Type): void
public "handler$dlf000$getRenderType"(livingEntity0: $LivingEntity$$Type, boolean1: boolean, boolean2: boolean, boolean3: boolean, callbackInfoReturnable4: $CallbackInfoReturnable$$Type): void
public static "isEntityUpsideDown"(livingEntity0: $LivingEntity$$Type): boolean
public "render"(t0: T, float1: float, float2: float, poseStack3: $PoseStack$$Type, multiBufferSource4: $MultiBufferSource$$Type, int5: integer): void
get "model"(): M
set "model"(value: M)
}
}

declare module "net.minecraft.client.renderer.ItemModelShaper" {
import { $BakedModel } from "net.minecraft.client.resources.model.BakedModel"
import { $Int2ObjectMap } from "it.unimi.dsi.fastutil.ints.Int2ObjectMap"
import { $ModelManager, $ModelManager$$Type } from "net.minecraft.client.resources.model.ModelManager"
import { $Item$$Type } from "net.minecraft.world.item.Item"
import { $ItemStack$$Type } from "net.minecraft.world.item.ItemStack"
import { $ModelResourceLocation, $ModelResourceLocation$$Type } from "net.minecraft.client.resources.model.ModelResourceLocation"
import { $CallbackInfoReturnable$$Type } from "org.spongepowered.asm.mixin.injection.callback.CallbackInfoReturnable"

export class $ItemModelShaper {
readonly "shapes": $Int2ObjectMap<$ModelResourceLocation>

constructor(modelManager0: $ModelManager$$Type)

public "getItemModel"(item0: $Item$$Type): $BakedModel
public "getItemModel"(itemStack0: $ItemStack$$Type): $BakedModel
public "getModelManager"(): $ModelManager
public "handler$boi000$resolveItemPredicatesModel"(stack: $ItemStack$$Type, ci: $CallbackInfoReturnable$$Type): void
public "handler$zjn000$injectGetModel"(stack: $ItemStack$$Type, cir: $CallbackInfoReturnable$$Type): void
public "rebuildCache"(): void
public "register"(item0: $Item$$Type, modelResourceLocation1: $ModelResourceLocation$$Type): void
get "modelManager"(): $ModelManager
}
}

declare module "net.minecraft.client.renderer.debug.GameTestDebugRenderer" {
import { $DebugRenderer$SimpleDebugRenderer } from "net.minecraft.client.renderer.debug.DebugRenderer$SimpleDebugRenderer"
import { $BlockPos$$Type } from "net.minecraft.core.BlockPos"
import { $MultiBufferSource$$Type } from "net.minecraft.client.renderer.MultiBufferSource"
import { $PoseStack$$Type } from "com.mojang.blaze3d.vertex.PoseStack"

export class $GameTestDebugRenderer implements $DebugRenderer$SimpleDebugRenderer {
constructor()

public "addMarker"(blockPos0: $BlockPos$$Type, int1: integer, string2: string, int3: integer): void
public "clear"(): void
public "render"(poseStack0: $PoseStack$$Type, multiBufferSource1: $MultiBufferSource$$Type, double2: double, double3: double, double4: double): void
}
}

declare module "net.minecraft.client.renderer.debug.BeeDebugRenderer$HiveInfo" {
import { $BlockPos, $BlockPos$$Type } from "net.minecraft.core.BlockPos"

export class $BeeDebugRenderer$HiveInfo {
readonly "hiveType": string
readonly "honeyLevel": integer
readonly "lastSeen": long
readonly "occupantCount": integer
readonly "pos": $BlockPos
readonly "sedated": boolean

constructor(blockPos0: $BlockPos$$Type, string1: string, int2: integer, int3: integer, boolean4: boolean, long5: long)

}
}

declare module "net.minecraft.client.renderer.entity.EntityRenderDispatcher" {
import { $Camera, $Camera$$Type } from "net.minecraft.client.Camera"
import { $Font$$Type } from "net.minecraft.client.gui.Font"
import { $Frustum$$Type } from "net.minecraft.client.renderer.culling.Frustum"
import { $Quaternionf, $Quaternionf$$Type } from "org.joml.Quaternionf"
import { $EntityType, $EntityType$$Type } from "net.minecraft.world.entity.EntityType"
import { $CompletableFuture } from "java.util.concurrent.CompletableFuture"
import { $PreparableReloadListener$PreparationBarrier$$Type } from "net.minecraft.server.packs.resources.PreparableReloadListener$PreparationBarrier"
import { $BlockRenderDispatcher$$Type } from "net.minecraft.client.renderer.block.BlockRenderDispatcher"
import { $PoseStack$$Type } from "com.mojang.blaze3d.vertex.PoseStack"
import { $EntityModelSet$$Type } from "net.minecraft.client.model.geom.EntityModelSet"
import { $Minecraft$$Type } from "net.minecraft.client.Minecraft"
import { $Map, $Map$$Type } from "java.util.Map"
import { $EntityRenderer, $EntityRenderer$$Type } from "net.minecraft.client.renderer.entity.EntityRenderer"
import { $ProfilerFiller$$Type } from "net.minecraft.util.profiling.ProfilerFiller"
import { $Executor$$Type } from "java.util.concurrent.Executor"
import { $ResourceManagerReloadListener } from "net.minecraft.server.packs.resources.ResourceManagerReloadListener"
import { $ResourceManager$$Type } from "net.minecraft.server.packs.resources.ResourceManager"
import { $TextureManager, $TextureManager$$Type } from "net.minecraft.client.renderer.texture.TextureManager"
import { $ItemRenderer$$Type } from "net.minecraft.client.renderer.entity.ItemRenderer"
import { $Player, $Player$$Type } from "net.minecraft.world.entity.player.Player"
import { $Options, $Options$$Type } from "net.minecraft.client.Options"
import { $Entity, $Entity$$Type } from "net.minecraft.world.entity.Entity"
import { $Level$$Type } from "net.minecraft.world.level.Level"
import { $MultiBufferSource$$Type } from "net.minecraft.client.renderer.MultiBufferSource"
import { $ItemInHandRenderer } from "net.minecraft.client.renderer.ItemInHandRenderer"

export class $EntityRenderDispatcher implements $ResourceManagerReloadListener {
readonly "options": $Options
readonly "textureManager": $TextureManager

constructor(minecraft0: $Minecraft$$Type, textureManager1: $TextureManager$$Type, itemRenderer2: $ItemRenderer$$Type, blockRenderDispatcher3: $BlockRenderDispatcher$$Type, font4: $Font$$Type, options5: $Options$$Type, entityModelSet6: $EntityModelSet$$Type)

public "cameraOrientation"(): $Quaternionf
public "distanceToSqr"(entity0: $Entity$$Type): double
public "distanceToSqr"(double0: double, double1: double, double2: double): double
public "getItemInHandRenderer"(): $ItemInHandRenderer
public "getName"(): string
public "getPackedLightCoords"<E extends $Entity>(e0: E, float1: float): integer
public "getRenderer"<T extends $Entity>(t0: T): $EntityRenderer<T>
public "getSkinMap"(): $Map<string, $EntityRenderer<$Player>>
public "onResourceManagerReload"(resourceManager0: $ResourceManager$$Type): void
public "overrideCameraOrientation"(quaternionf0: $Quaternionf$$Type): void
public "prepare"(level0: $Level$$Type, camera1: $Camera$$Type, entity2: $Entity$$Type): void
public "reload"(preparationBarrier0: $PreparableReloadListener$PreparationBarrier$$Type, resourceManager1: $ResourceManager$$Type, profilerFiller2: $ProfilerFiller$$Type, profilerFiller3: $ProfilerFiller$$Type, executor4: $Executor$$Type, executor5: $Executor$$Type): $CompletableFuture<void>
public "render"<E extends $Entity>(e0: E, double1: double, double2: double, double3: double, float4: float, float5: float, poseStack6: $PoseStack$$Type, multiBufferSource7: $MultiBufferSource$$Type, int8: integer): void
public "setLevel"(level0: $Level$$Type): void
public "setRenderHitBoxes"(boolean0: boolean): void
public "setRenderShadow"(boolean0: boolean): void
public "shouldRender"<E extends $Entity>(e0: E, frustum1: $Frustum$$Type, double2: double, double3: double, double4: double): boolean
public "shouldRenderHitBoxes"(): boolean
get "camera"(): $Camera
set "camera"(value: $Camera$$Type)
get "crosshairPickEntity"(): $Entity
set "crosshairPickEntity"(value: $Entity$$Type)
get "playerRenderers"(): $Map<string, $EntityRenderer<$Player>>
set "playerRenderers"(value: $Map$$Type<string, $EntityRenderer$$Type<$Player$$Type>>)
get "renderers"(): $Map<$EntityType<any>, $EntityRenderer<any>>
set "renderers"(value: $Map$$Type<$EntityType$$Type<any>, $EntityRenderer$$Type<any>>)
get "itemInHandRenderer"(): $ItemInHandRenderer
get "name"(): string
get "skinMap"(): $Map<string, $EntityRenderer<$Player>>
set "level"(value: $Level$$Type)
set "renderHitBoxes"(value: boolean)
set "renderShadow"(value: boolean)
}
}

declare module "net.minecraft.client.renderer.block.model.ItemOverride" {
import { $ResourceLocation, $ResourceLocation$$Type } from "net.minecraft.resources.ResourceLocation"
import { $List$$Type } from "java.util.List"
import { $Stream } from "java.util.stream.Stream"
import { $ItemOverride$Predicate, $ItemOverride$Predicate$$Type } from "net.minecraft.client.renderer.block.model.ItemOverride$Predicate"

export class $ItemOverride {
constructor(resourceLocation0: $ResourceLocation$$Type, list1: $List$$Type<$ItemOverride$Predicate$$Type>)

public "getModel"(): $ResourceLocation
public "getPredicates"(): $Stream<$ItemOverride$Predicate>
get "model"(): $ResourceLocation
get "predicates"(): $Stream<$ItemOverride$Predicate>
}
}

declare module "net.minecraft.client.renderer.debug.BrainDebugRenderer$PoiInfo" {
import { $BlockPos, $BlockPos$$Type } from "net.minecraft.core.BlockPos"

export class $BrainDebugRenderer$PoiInfo {
readonly "pos": $BlockPos

constructor(blockPos0: $BlockPos$$Type, string1: string, int2: integer)

get "freeTicketCount"(): integer
set "freeTicketCount"(value: integer)
get "type"(): string
set "type"(value: string)
}
}

declare module "net.minecraft.client.renderer.PostPass" {
import { $EffectInstance } from "net.minecraft.client.renderer.EffectInstance"
import { $RenderTarget, $RenderTarget$$Type } from "com.mojang.blaze3d.pipeline.RenderTarget"
import { $ResourceManager$$Type } from "net.minecraft.server.packs.resources.ResourceManager"
import { $Matrix4f$$Type } from "org.joml.Matrix4f"
import { $AutoCloseable } from "java.lang.AutoCloseable"
import { $IntSupplier$$Type } from "java.util.function.IntSupplier"
import { $PostPassAccessor } from "dev.nonamecrackers2.simpleclouds.client.accessor.PostPassAccessor"

export class $PostPass implements $AutoCloseable, $PostPassAccessor {
readonly "inTarget": $RenderTarget
readonly "outTarget": $RenderTarget

constructor(resourceManager0: $ResourceManager$$Type, string1: string, renderTarget2: $RenderTarget$$Type, renderTarget3: $RenderTarget$$Type)

public "addAuxAsset"(string0: string, intSupplier1: $IntSupplier$$Type, int2: integer, int3: integer): void
public "close"(): void
public "disableOutClear"(): void
public "getEffect"(): $EffectInstance
public "getName"(): string
public "process"(float0: float): void
public "redirect$fec000$simpleclouds$disableOutClear_process"(renderTarget0: $RenderTarget$$Type, boolean1: boolean): void
public "setOrthoMatrix"(matrix4f0: $Matrix4f$$Type): void
get "effect"(): $EffectInstance
get "name"(): string
set "orthoMatrix"(value: $Matrix4f$$Type)
}
}

declare module "net.minecraft.client.renderer.LightTexture" {
import { $CallbackInfo$$Type } from "org.spongepowered.asm.mixin.injection.callback.CallbackInfo"
import { $GameRenderer$$Type } from "net.minecraft.client.renderer.GameRenderer"
import { $Minecraft$$Type } from "net.minecraft.client.Minecraft"
import { $Vector3f$$Type } from "org.joml.Vector3f"
import { $ClientLevel$$Type } from "net.minecraft.client.multiplayer.ClientLevel"
import { $DimensionType$$Type } from "net.minecraft.world.level.dimension.DimensionType"
import { $AutoCloseable } from "java.lang.AutoCloseable"

export class $LightTexture implements $AutoCloseable {
static readonly "FULL_BLOCK": integer
static readonly "FULL_BRIGHT": integer
static readonly "FULL_SKY": integer

constructor(gameRenderer0: $GameRenderer$$Type, minecraft1: $Minecraft$$Type)

public static "block"(int0: integer): integer
public "close"(): void
public static "getBrightness"(dimensionType0: $DimensionType$$Type, int1: integer): float
public "handler$fea000$simpleclouds$modifyLightTextureColor_updateLightTexture"(float0: float, callbackInfo1: $CallbackInfo$$Type, clientLevel2: $ClientLevel$$Type, float3: float, float4: float, float5: float, float6: float, float7: float, float8: float, float9: float, vector3f10: $Vector3f$$Type, float11: float, vector3f12: $Vector3f$$Type, int13: integer, int14: integer, float15: float, float16: float, float17: float, float18: float, boolean19: boolean): void
public "handler$fep000$updateLightTexture"(partialTicks: float, ci: $CallbackInfo$$Type): void
public static "pack"(int0: integer, int1: integer): integer
public static "sky"(int0: integer): integer
public "tick"(): void
public "turnOffLightLayer"(): void
public "turnOnLightLayer"(): void
public "updateLightTexture"(float0: float): void
}
}

declare module "net.minecraft.client.renderer.debug.BrainDebugRenderer$BrainDump" {
import { $List } from "java.util.List"
import { $Path, $Path$$Type } from "net.minecraft.world.level.pathfinder.Path"
import { $BlockPos } from "net.minecraft.core.BlockPos"
import { $Position, $Position$$Type } from "net.minecraft.core.Position"
import { $Set } from "java.util.Set"
import { $UUID, $UUID$$Type } from "java.util.UUID"

export class $BrainDebugRenderer$BrainDump {
readonly "activities": $List<string>
readonly "angerLevel": integer
readonly "behaviors": $List<string>
readonly "gossips": $List<string>
readonly "health": float
readonly "id": integer
readonly "inventory": string
readonly "maxHealth": float
readonly "memories": $List<string>
readonly "name": string
readonly "path": $Path
readonly "pois": $Set<$BlockPos>
readonly "pos": $Position
readonly "potentialPois": $Set<$BlockPos>
readonly "profession": string
readonly "uuid": $UUID
readonly "wantsGolem": boolean
readonly "xp": integer

constructor(uUID0: $UUID$$Type, int1: integer, string2: string, string3: string, int4: integer, float5: float, float6: float, position7: $Position$$Type, string8: string, path9: $Path$$Type, boolean10: boolean, int11: integer)

public "getUuid"(): $UUID
}
}

declare module "net.minecraft.client.renderer.entity.EntityRenderer" {
import { $ResourceLocation } from "net.minecraft.resources.ResourceLocation"
import { $Font } from "net.minecraft.client.gui.Font"
import { $AABB } from "net.minecraft.world.phys.AABB"
import { $Frustum$$Type } from "net.minecraft.client.renderer.culling.Frustum"
import { $Component$$Type } from "net.minecraft.network.chat.Component"
import { $RenderAccessor } from "net.zepalesque.redux.mixin.client.render.RenderAccessor"
import { $PoseStack$$Type } from "com.mojang.blaze3d.vertex.PoseStack"
import { $CallbackInfoReturnable$$Type } from "org.spongepowered.asm.mixin.injection.callback.CallbackInfoReturnable"
import { $CallbackInfo$$Type } from "org.spongepowered.asm.mixin.injection.callback.CallbackInfo"
import { $List, $List$$Type } from "java.util.List"
import { $Entity, $Entity$$Type } from "net.minecraft.world.entity.Entity"
import { $Vec3 } from "net.minecraft.world.phys.Vec3"
import { $EntityRendererInter } from "dev.tr7zw.entityculling.access.EntityRendererInter"
import { $EntityRendererAccessor } from "com.aetherteam.aether.mixin.mixins.client.accessor.EntityRendererAccessor"
import { $EntityRendererExtension } from "com.supermartijn642.fusion.extensions.EntityRendererExtension"
import { $EntityRenderDispatcher } from "net.minecraft.client.renderer.entity.EntityRenderDispatcher"
import { $MultiBufferSource$$Type } from "net.minecraft.client.renderer.MultiBufferSource"

export class $EntityRenderer<T extends $Entity = $Entity> implements $EntityRendererExtension, $EntityRendererInter, $EntityRendererAccessor, $RenderAccessor {
readonly "entityRenderDispatcher": $EntityRenderDispatcher

public "entityCullingGetCullingBox"(entity: $Entity$$Type): $AABB
public "entityCullingIgnoresCulling"(entity: $Entity$$Type): boolean
public "getFont"(): $Font
public "getFusionModelParts"(): $List
public "getPackedLightCoords"(t0: T, float1: float): integer
public "getRenderOffset"(t0: T, float1: float): $Vec3
public "getTextureLocation"(t0: T): $ResourceLocation
public "handler$bhh000$celestisynth$render"(entity0: $Entity$$Type, float1: float, float2: float, poseStack3: $PoseStack$$Type, multiBufferSource4: $MultiBufferSource$$Type, int5: integer, callbackInfo6: $CallbackInfo$$Type): void
public "handler$ddo000$adastra$shouldRender"(entity: $Entity$$Type, frustum: $Frustum$$Type, x: double, y: double, z: double, cir: $CallbackInfoReturnable$$Type): void
public "handler$hkd000$renderRayOverride"(entity0: $Entity$$Type, frustum1: $Frustum$$Type, double2: double, double3: double, double4: double, callbackInfoReturnable5: $CallbackInfoReturnable$$Type): void
public "handler$zjc000$render"(entity0: $Entity$$Type, float1: float, float2: float, poseStack3: $PoseStack$$Type, multiBufferSource4: $MultiBufferSource$$Type, int5: integer, callbackInfo6: $CallbackInfo$$Type): void
public "localvar$zjc000$render"(int0: integer): integer
public "render"(t0: T, float1: float, float2: float, poseStack3: $PoseStack$$Type, multiBufferSource4: $MultiBufferSource$$Type, int5: integer): void
public "setFusionModelParts"(parts: $List$$Type): void
public "shadowRenderNameTag"(entity: $Entity$$Type, component: $Component$$Type, poseStack: $PoseStack$$Type, multiBufferSource: $MultiBufferSource$$Type, light: integer, delta: float): void
public "shadowShouldShowName"(entity: $Entity$$Type): boolean
public "shouldRender"(t0: T, frustum1: $Frustum$$Type, double2: double, double3: double, double4: double): boolean
get "shadowRadius"(): float
set "shadowRadius"(value: float)
get "font"(): $Font
get "fusionModelParts"(): $List
set "fusionModelParts"(value: $List$$Type)
}
}

declare module "net.minecraft.client.renderer.MultiBufferSource$BufferSource" {
import { $BufferSourceExtension } from "com.supermartijn642.fusion.extensions.BufferSourceExtension"
import { $AccessorRenderBuffers } from "vazkii.psi.mixin.client.AccessorRenderBuffers"
import { $Map$$Type } from "java.util.Map"
import { $BufferBuilder$$Type } from "com.mojang.blaze3d.vertex.BufferBuilder"
import { $RenderType, $RenderType$$Type } from "net.minecraft.client.renderer.RenderType"
import { $AccessorMultiBufferSource } from "vazkii.patchouli.mixin.client.AccessorMultiBufferSource"
import { $VertexConsumer } from "com.mojang.blaze3d.vertex.VertexConsumer"
import { $MultiBufferSource } from "net.minecraft.client.renderer.MultiBufferSource"

export class $MultiBufferSource$BufferSource implements $MultiBufferSource, $BufferSourceExtension, $AccessorRenderBuffers, $AccessorMultiBufferSource {
public "endBatch"(renderType0: $RenderType$$Type): void
public "endBatch"(): void
public "endLastBatch"(): void
public "fusionGetLastRenderType"(): $RenderType
public "getBuffer"(renderType0: $RenderType$$Type): $VertexConsumer
public static "immediate"(bufferBuilder0: $BufferBuilder$$Type): $MultiBufferSource$BufferSource
public static "immediateWithBuffers"(map0: $Map$$Type<$RenderType$$Type, $BufferBuilder$$Type>, bufferBuilder1: $BufferBuilder$$Type): $MultiBufferSource$BufferSource
}
}

declare module "net.minecraft.client.renderer.LevelRenderer" {
import { $ResourceLocation } from "net.minecraft.resources.ResourceLocation"
import { $Camera$$Type } from "net.minecraft.client.Camera"
import { $CustomBlockDamageDisplay } from "rbasamoyai.createbigcannons.remix.CustomBlockDamageDisplay"
import { $AABB$$Type } from "net.minecraft.world.phys.AABB"
import { $LevelRendererAccessor } from "earth.terrarium.adastra.mixins.client.LevelRendererAccessor"
import { $Direction } from "net.minecraft.core.Direction"
import { $ParticleOptions$$Type } from "net.minecraft.core.particles.ParticleOptions"
import { $Runnable$$Type } from "java.lang.Runnable"
import { $AutoCloseable } from "java.lang.AutoCloseable"
import { $PreparableReloadListener$PreparationBarrier$$Type } from "net.minecraft.server.packs.resources.PreparableReloadListener$PreparationBarrier"
import { $CallbackInfo$$Type } from "org.spongepowered.asm.mixin.injection.callback.CallbackInfo"
import { $BlockGetter$$Type } from "net.minecraft.world.level.BlockGetter"
import { $Future, $Future$$Type } from "java.util.concurrent.Future"
import { $Holder } from "net.minecraft.core.Holder"
import { $LevelRenderer$RenderChunkStorage } from "net.minecraft.client.renderer.LevelRenderer$RenderChunkStorage"
import { $Map } from "java.util.Map"
import { $RecordItem$$Type } from "net.minecraft.world.item.RecordItem"
import { $Vector3d, $Vector3d$$Type } from "org.joml.Vector3d"
import { $EntityRenderDispatcher, $EntityRenderDispatcher$$Type } from "net.minecraft.client.renderer.entity.EntityRenderDispatcher"
import { $LevelRenderer$RenderInfoMap$$Type } from "net.minecraft.client.renderer.LevelRenderer$RenderInfoMap"
import { $LevelRendererAccessor as $LevelRendererAccessor$0 } from "com.simibubi.create.foundation.mixin.accessor.LevelRendererAccessor"
import { $LightTexture$$Type } from "net.minecraft.client.renderer.LightTexture"
import { $ProfilerFiller$$Type } from "net.minecraft.util.profiling.ProfilerFiller"
import { $WorldRendererExtended } from "me.jellysquid.mods.sodium.client.world.WorldRendererExtended"
import { $SoundInstance, $SoundInstance$$Type } from "net.minecraft.client.resources.sounds.SoundInstance"
import { $Collection$$Type } from "java.util.Collection"
import { $ResourceManager$$Type } from "net.minecraft.server.packs.resources.ResourceManager"
import { $BlockingQueue, $BlockingQueue$$Type } from "java.util.concurrent.BlockingQueue"
import { $BlockEntity$$Type } from "net.minecraft.world.level.block.entity.BlockEntity"
import { $BlockPos, $BlockPos$$Type } from "net.minecraft.core.BlockPos"
import { $SoundEvent$$Type } from "net.minecraft.sounds.SoundEvent"
import { $RenderTarget, $RenderTarget$$Type } from "com.mojang.blaze3d.pipeline.RenderTarget"
import { $Queue$$Type } from "java.util.Queue"
import { $Level$$Type } from "net.minecraft.world.level.Level"
import { $ViewArea, $ViewArea$$Type } from "net.minecraft.client.renderer.ViewArea"
import { $LevelRendererAccessor as $LevelRendererAccessor$1 } from "com.aetherteam.aether.mixin.mixins.client.accessor.LevelRendererAccessor"
import { $VoxelShape$$Type } from "net.minecraft.world.phys.shapes.VoxelShape"
import { $VertexConsumer$$Type } from "com.mojang.blaze3d.vertex.VertexConsumer"
import { $BlockEntityRenderDispatcher$$Type } from "net.minecraft.client.renderer.blockentity.BlockEntityRenderDispatcher"
import { $RenderBuffers, $RenderBuffers$$Type } from "net.minecraft.client.renderer.RenderBuffers"
import { $Frustum, $Frustum$$Type } from "net.minecraft.client.renderer.culling.Frustum"
import { $SodiumWorldRenderer } from "me.jellysquid.mods.sodium.client.render.SodiumWorldRenderer"
import { $AtomicBoolean } from "java.util.concurrent.atomic.AtomicBoolean"
import { $BlockState$$Type } from "net.minecraft.world.level.block.state.BlockState"
import { $ObjectArrayList, $ObjectArrayList$$Type } from "it.unimi.dsi.fastutil.objects.ObjectArrayList"
import { $CompletableFuture } from "java.util.concurrent.CompletableFuture"
import { $ClientLevel$$Type } from "net.minecraft.client.multiplayer.ClientLevel"
import { $AccessorLevelRenderer } from "com.railwayteam.railways.mixin.client.AccessorLevelRenderer"
import { $AtomicReference } from "java.util.concurrent.atomic.AtomicReference"
import { $Biome$$Type } from "net.minecraft.world.level.biome.Biome"
import { $PoseStack, $PoseStack$$Type } from "com.mojang.blaze3d.vertex.PoseStack"
import { $LevelRendererAccessor as $LevelRendererAccessor$2 } from "gg.moonflower.etched.core.mixin.client.LevelRendererAccessor"
import { $WorldRendererAccessor } from "toni.sodiumdynamiclights.accessor.WorldRendererAccessor"
import { $Minecraft$$Type } from "net.minecraft.client.Minecraft"
import { $PostChain, $PostChain$$Type } from "net.minecraft.client.renderer.PostChain"
import { $Matrix4f$$Type } from "org.joml.Matrix4f"
import { $LinkedHashSet$$Type } from "java.util.LinkedHashSet"
import { $BlockAndTintGetter$$Type } from "net.minecraft.world.level.BlockAndTintGetter"
import { $ChunkRenderDispatcher$RenderChunk, $ChunkRenderDispatcher$RenderChunk$$Type } from "net.minecraft.client.renderer.chunk.ChunkRenderDispatcher$RenderChunk"
import { $GameRenderer$$Type } from "net.minecraft.client.renderer.GameRenderer"
import { $Executor$$Type } from "java.util.concurrent.Executor"
import { $LevelRendererAccessor as $LevelRendererAccessor$3 } from "vazkii.botania.mixin.client.LevelRendererAccessor"
import { $ResourceManagerReloadListener } from "net.minecraft.server.packs.resources.ResourceManagerReloadListener"
import { $LevelRendererAccessor as $LevelRendererAccessor$4 } from "dev.engine_room.flywheel.backend.mixin.LevelRendererAccessor"
import { $LevelRendererAccessor as $LevelRendererAccessor$5 } from "com.lowdragmc.mbd2.core.mixins.LevelRendererAccessor"
import { $AtomicLong } from "java.util.concurrent.atomic.AtomicLong"
import { $Entity, $Entity$$Type } from "net.minecraft.world.entity.Entity"
import { $Vec3$$Type } from "net.minecraft.world.phys.Vec3"
import { $Vector4f, $Vector4f$$Type } from "org.joml.Vector4f"
import { $ChunkRenderDispatcher, $ChunkRenderDispatcher$$Type } from "net.minecraft.client.renderer.chunk.ChunkRenderDispatcher"
import { $LevelRenderer$RenderChunkInfo, $LevelRenderer$RenderChunkInfo$$Type } from "net.minecraft.client.renderer.LevelRenderer$RenderChunkInfo"

export class $LevelRenderer implements $ResourceManagerReloadListener, $AutoCloseable, $WorldRendererAccessor, $LevelRendererAccessor$5, $LevelRendererAccessor$2, $LevelRendererAccessor$4, $LevelRendererAccessor$3, $LevelRendererAccessor, $LevelRendererAccessor$1, $CustomBlockDamageDisplay, $AccessorLevelRenderer, $LevelRendererAccessor$0, $WorldRendererExtended {
static readonly "CHUNK_SIZE": integer
static readonly "DIRECTIONS": $Direction[]
static "MOON_LOCATION": $ResourceLocation
readonly "entityRenderDispatcher": $EntityRenderDispatcher
"entityTarget": $RenderTarget
readonly "needsFrustumUpdate": $AtomicBoolean
readonly "nextFullUpdateMillis": $AtomicLong
readonly "playingRecords": $Map<$BlockPos, $SoundInstance>
readonly "renderBuffers": $RenderBuffers
readonly "renderChunkStorage": $AtomicReference<$LevelRenderer$RenderChunkStorage>

constructor(minecraft0: $Minecraft$$Type, entityRenderDispatcher1: $EntityRenderDispatcher$$Type, blockEntityRenderDispatcher2: $BlockEntityRenderDispatcher$$Type, renderBuffers3: $RenderBuffers$$Type)

public static "addChainedFilledBoxVertices"(poseStack0: $PoseStack$$Type, vertexConsumer1: $VertexConsumer$$Type, double2: double, double3: double, double4: double, double5: double, double6: double, double7: double, float8: float, float9: float, float10: float, float11: float): void
public static "addChainedFilledBoxVertices"(poseStack0: $PoseStack$$Type, vertexConsumer1: $VertexConsumer$$Type, float2: float, float3: float, float4: float, float5: float, float6: float, float7: float, float8: float, float9: float, float10: float, float11: float): void
public "addParticle"(particleOptions0: $ParticleOptions$$Type, boolean1: boolean, double2: double, double3: double, double4: double, double5: double, double6: double, double7: double): void
public "addParticle"(particleOptions0: $ParticleOptions$$Type, boolean1: boolean, boolean2: boolean, double3: double, double4: double, double5: double, double6: double, double7: double, double8: double): void
public "addRecentlyCompiledChunk"(renderChunk0: $ChunkRenderDispatcher$RenderChunk$$Type): void
public "allChanged"(): void
public "applyFrustum"(frustum0: $Frustum$$Type): void
public "blockChanged"(blockGetter0: $BlockGetter$$Type, blockPos1: $BlockPos$$Type, blockState2: $BlockState$$Type, blockState3: $BlockState$$Type, int4: integer): void
public "captureFrustum"(matrix4f0: $Matrix4f$$Type, matrix4f1: $Matrix4f$$Type, double2: double, double3: double, double4: double, frustum5: $Frustum$$Type): void
public "captureFrustum"(): void
public "clear"(): void
public "close"(): void
public "constant$fdn000$simpleclouds$modifyAboveRainSoundVolume_tickRain"(float0: float): float
public "constant$fdn000$simpleclouds$modifyRainSoundVolume_tickRain"(float0: float): float
public "countRenderedChunks"(): integer
public "createbigcannons$trackCustomProgress"(pos: $BlockPos$$Type, damage: integer): void
public "destroyBlockProgress"(int0: integer, blockPos1: $BlockPos$$Type, int2: integer): void
public "doEntityOutline"(): void
public "entityTarget"(): $RenderTarget
public "getChunkRenderDispatcher"(): $ChunkRenderDispatcher
public "getChunkStatistics"(): string
public "getCloudsTarget"(): $RenderTarget
public "getEntityStatistics"(): string
public "getFrustum"(): $Frustum
public "getItemEntityTarget"(): $RenderTarget
public "getLastViewDistance"(): double
public static "getLightColor"(blockAndTintGetter0: $BlockAndTintGetter$$Type, blockState1: $BlockState$$Type, blockPos2: $BlockPos$$Type): integer
public static "getLightColor"(blockAndTintGetter0: $BlockAndTintGetter$$Type, blockPos1: $BlockPos$$Type): integer
public "getName"(): string
public "getParticlesTarget"(): $RenderTarget
public "getTotalChunks"(): double
public "getTranslucentTarget"(): $RenderTarget
public "getWeatherTarget"(): $RenderTarget
public "globalLevelEvent"(int0: integer, blockPos1: $BlockPos$$Type, int2: integer): void
public "graphicsChanged"(): void
public "handler$bcp000$renderLevel"(ci: $CallbackInfo$$Type): void
public "handler$cag000$playRecord"(soundEvent: $SoundEvent$$Type, pos: $BlockPos$$Type, musicDiscItem: $RecordItem$$Type, ci: $CallbackInfo$$Type): void
public "handler$cag000$postNowPlaying"(arg: $SoundEvent$$Type, blockPos1: $BlockPos$$Type, musicDiscItem: $RecordItem$$Type, ci: $CallbackInfo$$Type): void
public "handler$cag000$preNowPlaying"(arg: $SoundEvent$$Type, blockPos1: $BlockPos$$Type, musicDiscItem: $RecordItem$$Type, ci: $CallbackInfo$$Type): void
public "handler$deb000$adastra$tickRain"(camera: $Camera$$Type, ci: $CallbackInfo$$Type): void
public "handler$fdn000$simpleclouds$injectCustomCloudRenderingAfterSky_renderSky"(poseStack0: $PoseStack$$Type, matrix4f1: $Matrix4f$$Type, float2: float, camera3: $Camera$$Type, boolean4: boolean, runnable5: $Runnable$$Type, callbackInfo6: $CallbackInfo$$Type): void
public "handler$fdn000$simpleclouds$injectCustomCloudRenderingBeforeWeather_renderLevel"(poseStack0: $PoseStack$$Type, float1: float, long2: long, boolean3: boolean, camera4: $Camera$$Type, gameRenderer5: $GameRenderer$$Type, lightTexture6: $LightTexture$$Type, matrix4f7: $Matrix4f$$Type, callbackInfo8: $CallbackInfo$$Type): void
public "handler$fdn000$simpleclouds$injectCustomCloudRenderingPost_renderLevel"(poseStack0: $PoseStack$$Type, float1: float, long2: long, boolean3: boolean, camera4: $Camera$$Type, gameRenderer5: $GameRenderer$$Type, lightTexture6: $LightTexture$$Type, matrix4f7: $Matrix4f$$Type, callbackInfo8: $CallbackInfo$$Type): void
public "handler$fdn000$simpleclouds$injectCustomCloudRenderingPre_renderLevel"(poseStack0: $PoseStack$$Type, float1: float, long2: long, boolean3: boolean, camera4: $Camera$$Type, gameRenderer5: $GameRenderer$$Type, lightTexture6: $LightTexture$$Type, matrix4f7: $Matrix4f$$Type, callbackInfo8: $CallbackInfo$$Type): void
public "handler$fdn000$simpleclouds$injectCustomWeatherRendering_renderLevel"(poseStack0: $PoseStack$$Type, float1: float, long2: long, boolean3: boolean, camera4: $Camera$$Type, gameRenderer5: $GameRenderer$$Type, lightTexture6: $LightTexture$$Type, matrix4f7: $Matrix4f$$Type, callbackInfo8: $CallbackInfo$$Type): void
public "handler$fdn000$simpleclouds$overrideCloudRendering_renderClouds"(poseStack0: $PoseStack$$Type, matrix4f1: $Matrix4f$$Type, float2: float, double3: double, double4: double, double5: double, callbackInfo6: $CallbackInfo$$Type): void
public "handler$fdn000$simpleclouds$overrideRainRendering_renderSnowAndRain"(lightTexture0: $LightTexture$$Type, float1: float, double2: double, double3: double, double4: double, callbackInfo5: $CallbackInfo$$Type): void
public "handler$fdn000$simpleclouds$tickCloudRenderer_tick"(callbackInfo0: $CallbackInfo$$Type): void
public "handler$feo000$renderClouds"(poseStack: $PoseStack$$Type, projectionMatrix: $Matrix4f$$Type, partialTicks: float, cameraX: double, cameraY: double, cameraZ: double, ci: $CallbackInfo$$Type): void
public "handler$fpa000$onRender"(poseStack0: $PoseStack$$Type, float1: float, long2: long, boolean3: boolean, camera4: $Camera$$Type, gameRenderer5: $GameRenderer$$Type, lightTexture6: $LightTexture$$Type, matrix4f7: $Matrix4f$$Type, callbackInfo8: $CallbackInfo$$Type): void
public "handler$hao000$playStreamingMusic"(soundEvent0: $SoundEvent$$Type, blockPos1: $BlockPos$$Type, recordItem2: $RecordItem$$Type, callbackInfo3: $CallbackInfo$$Type): void
public "handler$zlh000$renderCloudsFast"(poseStack0: $PoseStack$$Type, matrix4f1: $Matrix4f$$Type, float2: float, double3: double, double4: double, double5: double, callbackInfo6: $CallbackInfo$$Type): void
public "handler$zpo000$vista$alterSetupRender"(camera: $Camera$$Type, frustum: $Frustum$$Type, hasCapturedFrustum: boolean, isSpectator: boolean, ci: $CallbackInfo$$Type): void
public "handler$zpo000$vista$onRecentlyCompiledSection"(renderChunk: $ChunkRenderDispatcher$RenderChunk$$Type, ci: $CallbackInfo$$Type): void
public "hasRenderedAllChunks"(): boolean
public "initOutline"(): void
public "initializeQueueForFullUpdate"(camera0: $Camera$$Type, queue1: $Queue$$Type<$LevelRenderer$RenderChunkInfo$$Type>): void
public "isChunkCompiled"(blockPos0: $BlockPos$$Type): boolean
public "killFrustum"(): void
public "levelEvent"(int0: integer, blockPos1: $BlockPos$$Type, int2: integer): void
public "localvar$bcp000$modifyPartialTicks"(partialTicks: float): float
public "localvar$bcp000$modifyPoseStack"(poseStack: $PoseStack$$Type): $PoseStack
public "localvar$cag000$modifySoundInstance"(soundInstance: $SoundInstance$$Type): $SoundInstance
public "modifyExpressionValue$zpo000$vista$getActualPlayer"(original: $Entity$$Type, entity: $Entity$$Type): $Entity
public "modifyExpressionValue$zpo000$vista$isCameraDetached"(original: boolean): boolean
public "modifyReturnValue$zpo000$vista$disableEntityOutlines"(original: boolean): boolean
public "needsUpdate"(): void
public "onResourceManagerReload"(resourceManager0: $ResourceManager$$Type): void
/** @deprecated */
public "playStreamingMusic"(soundEvent0: $SoundEvent$$Type, blockPos1: $BlockPos$$Type): void
public "playStreamingMusic"(soundEvent0: $SoundEvent$$Type, blockPos1: $BlockPos$$Type, recordItem2: $RecordItem$$Type): void
public "prepareCullFrustum"(poseStack0: $PoseStack$$Type, vec31: $Vec3$$Type, matrix4f2: $Matrix4f$$Type): void
public "redirect$efm000$renderSnowAndRain_getBiome"(level0: $Level$$Type, blockPos1: $BlockPos$$Type): $Holder
public "redirect$efm000$renderSnowAndRain_hasPrecipitation"(biome0: $Biome$$Type): boolean
public "redirect$ego000$onRepositionCamera"(viewArea0: $ViewArea$$Type, double1: double, double2: double): void
public "reload"(preparationBarrier0: $PreparableReloadListener$PreparationBarrier$$Type, resourceManager1: $ResourceManager$$Type, profilerFiller2: $ProfilerFiller$$Type, profilerFiller3: $ProfilerFiller$$Type, executor4: $Executor$$Type, executor5: $Executor$$Type): $CompletableFuture<void>
public "renderClouds"(poseStack0: $PoseStack$$Type, matrix4f1: $Matrix4f$$Type, float2: float, double3: double, double4: double, double5: double): void
public "renderHitOutline"(poseStack0: $PoseStack$$Type, vertexConsumer1: $VertexConsumer$$Type, entity2: $Entity$$Type, double3: double, double4: double, double5: double, blockPos6: $BlockPos$$Type, blockState7: $BlockState$$Type): void
public "renderLevel"(poseStack0: $PoseStack$$Type, float1: float, long2: long, boolean3: boolean, camera4: $Camera$$Type, gameRenderer5: $GameRenderer$$Type, lightTexture6: $LightTexture$$Type, matrix4f7: $Matrix4f$$Type): void
public static "renderLineBox"(vertexConsumer0: $VertexConsumer$$Type, double1: double, double2: double, double3: double, double4: double, double5: double, double6: double, float7: float, float8: float, float9: float, float10: float): void
public static "renderLineBox"(poseStack0: $PoseStack$$Type, vertexConsumer1: $VertexConsumer$$Type, double2: double, double3: double, double4: double, double5: double, double6: double, double7: double, float8: float, float9: float, float10: float, float11: float, float12: float, float13: float, float14: float): void
public static "renderLineBox"(poseStack0: $PoseStack$$Type, vertexConsumer1: $VertexConsumer$$Type, aABB2: $AABB$$Type, float3: float, float4: float, float5: float, float6: float): void
public static "renderLineBox"(poseStack0: $PoseStack$$Type, vertexConsumer1: $VertexConsumer$$Type, double2: double, double3: double, double4: double, double5: double, double6: double, double7: double, float8: float, float9: float, float10: float, float11: float): void
public static "renderShape"(poseStack0: $PoseStack$$Type, vertexConsumer1: $VertexConsumer$$Type, voxelShape2: $VoxelShape$$Type, double3: double, double4: double, double5: double, float6: float, float7: float, float8: float, float9: float): void
public "renderSky"(poseStack0: $PoseStack$$Type, matrix4f1: $Matrix4f$$Type, float2: float, camera3: $Camera$$Type, boolean4: boolean, runnable5: $Runnable$$Type): void
public "renderSnowAndRain"(lightTexture0: $LightTexture$$Type, float1: float, double2: double, double3: double, double4: double): void
public static "renderVoxelShape"(poseStack0: $PoseStack$$Type, vertexConsumer1: $VertexConsumer$$Type, voxelShape2: $VoxelShape$$Type, double3: double, double4: double, double5: double, float6: float, float7: float, float8: float, float9: float, boolean10: boolean): void
public "resize"(int0: integer, int1: integer): void
public "setBlockDirty"(blockPos0: $BlockPos$$Type, blockState1: $BlockState$$Type, blockState2: $BlockState$$Type): void
public "setBlocksDirty"(int0: integer, int1: integer, int2: integer, int3: integer, int4: integer, int5: integer): void
public "setLevel"(clientLevel0: $ClientLevel$$Type): void
public "setSectionDirty"(int0: integer, int1: integer, int2: integer): void
public "setSectionDirtyWithNeighbors"(int0: integer, int1: integer, int2: integer): void
public "shouldShowEntityOutlines"(): boolean
public "sodium$getWorldRenderer"(): $SodiumWorldRenderer
public "tick"(): void
public "tickRain"(camera0: $Camera$$Type): void
public "updateGlobalBlockEntities"(collection0: $Collection$$Type<$BlockEntity$$Type>, collection1: $Collection$$Type<$BlockEntity$$Type>): void
public "updateRenderChunks"(linkedHashSet0: $LinkedHashSet$$Type<$LevelRenderer$RenderChunkInfo$$Type>, renderInfoMap1: $LevelRenderer$RenderInfoMap$$Type, vec32: $Vec3$$Type, queue3: $Queue$$Type<$LevelRenderer$RenderChunkInfo$$Type>, boolean4: boolean): void
get "capturedFrustum"(): $Frustum
set "capturedFrustum"(value: $Frustum$$Type)
get "chunkRenderDispatcher"(): $ChunkRenderDispatcher
set "chunkRenderDispatcher"(value: $ChunkRenderDispatcher$$Type)
get "cloudsTarget"(): $RenderTarget
set "cloudsTarget"(value: $RenderTarget$$Type)
get "entityEffect"(): $PostChain
set "entityEffect"(value: $PostChain$$Type)
get "frustumPoints"(): $Vector4f[]
set "frustumPoints"(value: $Vector4f$$Type[])
get "frustumPos"(): $Vector3d
set "frustumPos"(value: $Vector3d$$Type)
get "itemEntityTarget"(): $RenderTarget
set "itemEntityTarget"(value: $RenderTarget$$Type)
get "lastCameraChunkX"(): integer
set "lastCameraChunkX"(value: integer)
get "lastCameraChunkY"(): integer
set "lastCameraChunkY"(value: integer)
get "lastCameraChunkZ"(): integer
set "lastCameraChunkZ"(value: integer)
get "lastCameraX"(): double
set "lastCameraX"(value: double)
get "lastCameraY"(): double
set "lastCameraY"(value: double)
get "lastCameraZ"(): double
set "lastCameraZ"(value: double)
get "lastFullRenderChunkUpdate"(): $Future<any>
set "lastFullRenderChunkUpdate"(value: $Future$$Type<any>)
get "lastViewDistance"(): integer
set "lastViewDistance"(value: integer)
get "needsFullRenderChunkUpdate"(): boolean
set "needsFullRenderChunkUpdate"(value: boolean)
get "prevCamRotX"(): double
set "prevCamRotX"(value: double)
get "prevCamRotY"(): double
set "prevCamRotY"(value: double)
get "prevCamX"(): double
set "prevCamX"(value: double)
get "prevCamY"(): double
set "prevCamY"(value: double)
get "prevCamZ"(): double
set "prevCamZ"(value: double)
get "recentlyCompiledChunks"(): $BlockingQueue<$ChunkRenderDispatcher$RenderChunk>
set "recentlyCompiledChunks"(value: $BlockingQueue$$Type<$ChunkRenderDispatcher$RenderChunk$$Type>)
get "renderChunksInFrustum"(): $ObjectArrayList<$LevelRenderer$RenderChunkInfo>
set "renderChunksInFrustum"(value: $ObjectArrayList$$Type<$LevelRenderer$RenderChunkInfo$$Type>)
get "translucentTarget"(): $RenderTarget
set "translucentTarget"(value: $RenderTarget$$Type)
get "viewArea"(): $ViewArea
set "viewArea"(value: $ViewArea$$Type)
get "weatherTarget"(): $RenderTarget
set "weatherTarget"(value: $RenderTarget$$Type)
get "chunkStatistics"(): string
get "entityStatistics"(): string
get "frustum"(): $Frustum
get "name"(): string
get "particlesTarget"(): $RenderTarget
get "totalChunks"(): double
set "level"(value: $ClientLevel$$Type)
}
}

declare module "net.minecraft.client.renderer.chunk.ChunkRenderDispatcher$RenderChunk$ChunkCompileTask" {
import { $ChunkPos$$Type } from "net.minecraft.world.level.ChunkPos"
import { $ChunkRenderDispatcher$RenderChunk$$Type } from "net.minecraft.client.renderer.chunk.ChunkRenderDispatcher$RenderChunk"
import { $ChunkRenderDispatcher$ChunkTaskResult } from "net.minecraft.client.renderer.chunk.ChunkRenderDispatcher$ChunkTaskResult"
import { $BlockPos$$Type } from "net.minecraft.core.BlockPos"
import { $CompletableFuture } from "java.util.concurrent.CompletableFuture"
import { $Comparable } from "java.lang.Comparable"
import { $ChunkBufferBuilderPack$$Type } from "net.minecraft.client.renderer.ChunkBufferBuilderPack"
import { $ModelData } from "net.minecraftforge.client.model.data.ModelData"

export class $ChunkRenderDispatcher$RenderChunk$ChunkCompileTask implements $Comparable<$ChunkRenderDispatcher$RenderChunk$ChunkCompileTask> {
constructor(renderChunk0: $ChunkRenderDispatcher$RenderChunk$$Type, double1: double, boolean2: boolean)
constructor(renderChunk0: $ChunkRenderDispatcher$RenderChunk$$Type, chunkPos1: $ChunkPos$$Type, double2: double, boolean3: boolean)

public "cancel"(): void
public "compareTo"(chunkCompileTask0: $ChunkRenderDispatcher$RenderChunk$ChunkCompileTask$$Type): integer
public "doTask"(chunkBufferBuilderPack0: $ChunkBufferBuilderPack$$Type): $CompletableFuture<$ChunkRenderDispatcher$ChunkTaskResult>
public "getModelData"(blockPos0: $BlockPos$$Type): $ModelData
}
}

declare module "net.minecraft.client.renderer.entity.RenderLayerParent" {
import { $ResourceLocation } from "net.minecraft.resources.ResourceLocation"
import { $Entity, $Entity$$Type } from "net.minecraft.world.entity.Entity"
import { $EntityModel } from "net.minecraft.client.model.EntityModel"

export interface $RenderLayerParent<T extends $Entity = $Entity, M extends $EntityModel<T> = $EntityModel<T>> {
"getModel"(): M
"getTextureLocation"(t0: T): $ResourceLocation
get "model"(): M
}

export namespace $RenderLayerParent {
const probejs$$marker: never
}
export abstract class $RenderLayerParent$$Static<T extends $Entity = $Entity, M extends $EntityModel<T> = $EntityModel<T>> implements $RenderLayerParent<T, M> {
}
}

declare module "net.minecraft.client.renderer.debug.VillageSectionsDebugRenderer" {
import { $DebugRenderer$SimpleDebugRenderer } from "net.minecraft.client.renderer.debug.DebugRenderer$SimpleDebugRenderer"
import { $SectionPos$$Type } from "net.minecraft.core.SectionPos"
import { $MultiBufferSource$$Type } from "net.minecraft.client.renderer.MultiBufferSource"
import { $PoseStack$$Type } from "com.mojang.blaze3d.vertex.PoseStack"

export class $VillageSectionsDebugRenderer implements $DebugRenderer$SimpleDebugRenderer {
public "clear"(): void
public "render"(poseStack0: $PoseStack$$Type, multiBufferSource1: $MultiBufferSource$$Type, double2: double, double3: double, double4: double): void
public "setNotVillageSection"(sectionPos0: $SectionPos$$Type): void
public "setVillageSection"(sectionPos0: $SectionPos$$Type): void
set "notVillageSection"(value: $SectionPos$$Type)
set "villageSection"(value: $SectionPos$$Type)
}
}

declare module "net.minecraft.client.renderer.GameRenderer" {
import { $Camera, $Camera$$Type } from "net.minecraft.client.Camera"
import { $ResourceLocation$$Type } from "net.minecraft.resources.ResourceLocation"
import { $RenderBuffers, $RenderBuffers$$Type } from "net.minecraft.client.renderer.RenderBuffers"
import { $LivingEntity$$Type } from "net.minecraft.world.entity.LivingEntity"
import { $AutoCloseable } from "java.lang.AutoCloseable"
import { $PoseStack$$Type } from "com.mojang.blaze3d.vertex.PoseStack"
import { $CallbackInfoReturnable$$Type } from "org.spongepowered.asm.mixin.injection.callback.CallbackInfoReturnable"
import { $CallbackInfo$$Type } from "org.spongepowered.asm.mixin.injection.callback.CallbackInfo"
import { $Minecraft, $Minecraft$$Type } from "net.minecraft.client.Minecraft"
import { $PostChain, $PostChain$$Type } from "net.minecraft.client.renderer.PostChain"
import { $PreparableReloadListener } from "net.minecraft.server.packs.resources.PreparableReloadListener"
import { $LightTexture } from "net.minecraft.client.renderer.LightTexture"
import { $Matrix4f, $Matrix4f$$Type } from "org.joml.Matrix4f"
import { $MixinGameRendererAccessor } from "dev.nonamecrackers2.simpleclouds.mixin.MixinGameRendererAccessor"
import { $MixinGameRendererAccessor as $MixinGameRendererAccessor$0 } from "nonamecrackers2.crackerslib.mixin.MixinGameRendererAccessor"
import { $ShaderInstance, $ShaderInstance$$Type } from "net.minecraft.client.renderer.ShaderInstance"
import { $ResourceManager$$Type } from "net.minecraft.server.packs.resources.ResourceManager"
import { $Entity$$Type } from "net.minecraft.world.entity.Entity"
import { $GameRendererAccessor } from "net.createmod.ponder.mixin.client.accessor.GameRendererAccessor"
import { $GameRendererAccess } from "snownee.lychee.mixin.GameRendererAccess"
import { $ResourceProvider$$Type } from "net.minecraft.server.packs.resources.ResourceProvider"
import { $ItemStack$$Type } from "net.minecraft.world.item.ItemStack"
import { $MapRenderer } from "net.minecraft.client.gui.MapRenderer"
import { $OverlayTexture } from "net.minecraft.client.renderer.texture.OverlayTexture"
import { $ItemInHandRenderer, $ItemInHandRenderer$$Type } from "net.minecraft.client.renderer.ItemInHandRenderer"

export class $GameRenderer implements $AutoCloseable, $GameRendererAccessor, $MixinGameRendererAccessor$0, $MixinGameRendererAccessor, $GameRendererAccess {
static readonly "EFFECT_NONE": integer
static readonly "ITEM_ACTIVATION_ANIMATION_LENGTH": integer
static readonly "PROJECTION_Z_NEAR": float
readonly "itemInHandRenderer": $ItemInHandRenderer
readonly "renderBuffers": $RenderBuffers

constructor(minecraft0: $Minecraft$$Type, itemInHandRenderer1: $ItemInHandRenderer$$Type, resourceManager2: $ResourceManager$$Type, renderBuffers3: $RenderBuffers$$Type)

public "checkEntityPostEffect"(entity0: $Entity$$Type): void
public "close"(): void
public "createReloadListener"(): $PreparableReloadListener
public "currentEffect"(): $PostChain
public "cycleEffect"(): void
public "displayItemActivation"(itemStack0: $ItemStack$$Type): void
public "getDarkenWorldAmount"(float0: float): float
public "getDepthFar"(): float
public "getFov"(camera0: $Camera$$Type, float1: float, boolean2: boolean): double
public "getMainCamera"(): $Camera
public "getMapRenderer"(): $MapRenderer
public "getMinecraft"(): $Minecraft
public static "getNightVisionScale"(livingEntity0: $LivingEntity$$Type, float1: float): float
public static "getParticleShader"(): $ShaderInstance
public static "getPositionColorLightmapShader"(): $ShaderInstance
public static "getPositionColorShader"(): $ShaderInstance
public static "getPositionColorTexLightmapShader"(): $ShaderInstance
public static "getPositionColorTexShader"(): $ShaderInstance
public static "getPositionShader"(): $ShaderInstance
public static "getPositionTexColorNormalShader"(): $ShaderInstance
public static "getPositionTexColorShader"(): $ShaderInstance
public static "getPositionTexLightmapColorShader"(): $ShaderInstance
public static "getPositionTexShader"(): $ShaderInstance
public "getProjectionMatrix"(double0: double): $Matrix4f
public "getRenderDistance"(): float
public static "getRendertypeArmorCutoutNoCullShader"(): $ShaderInstance
public static "getRendertypeArmorEntityGlintShader"(): $ShaderInstance
public static "getRendertypeArmorGlintShader"(): $ShaderInstance
public static "getRendertypeBeaconBeamShader"(): $ShaderInstance
public static "getRendertypeCrumblingShader"(): $ShaderInstance
public static "getRendertypeCutoutMippedShader"(): $ShaderInstance
public static "getRendertypeCutoutShader"(): $ShaderInstance
public static "getRendertypeEndGatewayShader"(): $ShaderInstance
public static "getRendertypeEndPortalShader"(): $ShaderInstance
public static "getRendertypeEnergySwirlShader"(): $ShaderInstance
public static "getRendertypeEntityAlphaShader"(): $ShaderInstance
public static "getRendertypeEntityCutoutNoCullShader"(): $ShaderInstance
public static "getRendertypeEntityCutoutNoCullZOffsetShader"(): $ShaderInstance
public static "getRendertypeEntityCutoutShader"(): $ShaderInstance
public static "getRendertypeEntityDecalShader"(): $ShaderInstance
public static "getRendertypeEntityGlintDirectShader"(): $ShaderInstance
public static "getRendertypeEntityGlintShader"(): $ShaderInstance
public static "getRendertypeEntityNoOutlineShader"(): $ShaderInstance
public static "getRendertypeEntityShadowShader"(): $ShaderInstance
public static "getRendertypeEntitySmoothCutoutShader"(): $ShaderInstance
public static "getRendertypeEntitySolidShader"(): $ShaderInstance
public static "getRendertypeEntityTranslucentCullShader"(): $ShaderInstance
public static "getRendertypeEntityTranslucentEmissiveShader"(): $ShaderInstance
public static "getRendertypeEntityTranslucentShader"(): $ShaderInstance
public static "getRendertypeEyesShader"(): $ShaderInstance
public static "getRendertypeGlintDirectShader"(): $ShaderInstance
public static "getRendertypeGlintShader"(): $ShaderInstance
public static "getRendertypeGlintTranslucentShader"(): $ShaderInstance
public static "getRendertypeGuiGhostRecipeOverlayShader"(): $ShaderInstance
public static "getRendertypeGuiOverlayShader"(): $ShaderInstance
public static "getRendertypeGuiShader"(): $ShaderInstance
public static "getRendertypeGuiTextHighlightShader"(): $ShaderInstance
public static "getRendertypeItemEntityTranslucentCullShader"(): $ShaderInstance
public static "getRendertypeLeashShader"(): $ShaderInstance
public static "getRendertypeLightningShader"(): $ShaderInstance
public static "getRendertypeLinesShader"(): $ShaderInstance
public static "getRendertypeOutlineShader"(): $ShaderInstance
public static "getRendertypeSolidShader"(): $ShaderInstance
public static "getRendertypeTextBackgroundSeeThroughShader"(): $ShaderInstance
public static "getRendertypeTextBackgroundShader"(): $ShaderInstance
public static "getRendertypeTextIntensitySeeThroughShader"(): $ShaderInstance
public static "getRendertypeTextIntensityShader"(): $ShaderInstance
public static "getRendertypeTextSeeThroughShader"(): $ShaderInstance
public static "getRendertypeTextShader"(): $ShaderInstance
public static "getRendertypeTranslucentMovingBlockShader"(): $ShaderInstance
public static "getRendertypeTranslucentNoCrumblingShader"(): $ShaderInstance
public static "getRendertypeTranslucentShader"(): $ShaderInstance
public static "getRendertypeTripwireShader"(): $ShaderInstance
public static "getRendertypeWaterMaskShader"(): $ShaderInstance
public "getShader"(string0: string): $ShaderInstance
public "handler$egm000$arsNouveou$resize"(int0: integer, int1: integer, callbackInfo2: $CallbackInfo$$Type): void
public "handler$eph000$onBobHurt"(poseStack0: $PoseStack$$Type, float1: float, callbackInfo2: $CallbackInfo$$Type): void
public "handler$eph000$onBobView"(poseStack0: $PoseStack$$Type, float1: float, callbackInfo2: $CallbackInfo$$Type): void
public "handler$eph000$switchRenderType"(camera0: $Camera$$Type, float1: float, boolean2: boolean, callbackInfoReturnable3: $CallbackInfoReturnable$$Type): void
public "handler$fdo000$simpleclouds$extendFarPlane_getDepthFar"(callbackInfoReturnable0: $CallbackInfoReturnable$$Type): void
public "handler$fdo000$simpleclouds$resizeRenderer_resize"(int0: integer, int1: integer, callbackInfo2: $CallbackInfo$$Type): void
public "handler$fdo000$simpleclouds$shutdownRenderer_close"(callbackInfo0: $CallbackInfo$$Type): void
public "handler$zpl000$vista$blockNewEffects"(resourceLocation: $ResourceLocation$$Type, ci: $CallbackInfo$$Type): void
public "isPanoramicMode"(): boolean
public "lightTexture"(): $LightTexture
public "loadEffect"(resourceLocation0: $ResourceLocation$$Type): void
public "overlayTexture"(): $OverlayTexture
public "pick"(float0: float): void
public "preloadUiShader"(resourceProvider0: $ResourceProvider$$Type): void
public "render"(float0: float, long1: long, boolean2: boolean): void
public "renderItemInHand"(poseStack0: $PoseStack$$Type, camera1: $Camera$$Type, float2: float): void
public "renderLevel"(float0: float, long1: long, poseStack2: $PoseStack$$Type): void
public "renderZoomed"(float0: float, float1: float, float2: float): void
public "resetData"(): void
public "resetProjectionMatrix"(matrix4f0: $Matrix4f$$Type): void
public "resize"(int0: integer, int1: integer): void
public "setPanoramicMode"(boolean0: boolean): void
public "setRenderBlockOutline"(boolean0: boolean): void
public "setRenderHand"(boolean0: boolean): void
public "shutdownEffect"(): void
public "tick"(): void
public "togglePostEffect"(): void
get "blitShader"(): $ShaderInstance
set "blitShader"(value: $ShaderInstance$$Type)
get "darkenWorldAmount"(): float
set "darkenWorldAmount"(value: float)
get "effectActive"(): boolean
set "effectActive"(value: boolean)
get "fov"(): float
set "fov"(value: float)
get "mainCamera"(): $Camera
set "mainCamera"(value: $Camera$$Type)
get "oldFov"(): float
set "oldFov"(value: float)
get "postEffect"(): $PostChain
set "postEffect"(value: $PostChain$$Type)
get "renderDistance"(): float
set "renderDistance"(value: float)
get "renderHand"(): boolean
set "renderHand"(value: boolean)
get "depthFar"(): float
get "mapRenderer"(): $MapRenderer
get "minecraft"(): $Minecraft
get "panoramicMode"(): boolean
set "panoramicMode"(value: boolean)
set "renderBlockOutline"(value: boolean)
}
}

declare module "net.minecraft.client.renderer.block.model.FaceBakery" {
import { $ResourceLocation$$Type } from "net.minecraft.resources.ResourceLocation"
import { $Transformation$$Type } from "com.mojang.math.Transformation"
import { $BlockFaceUV, $BlockFaceUV$$Type } from "net.minecraft.client.renderer.block.model.BlockFaceUV"
import { $Direction, $Direction$$Type } from "net.minecraft.core.Direction"
import { $BlockElementFace$$Type } from "net.minecraft.client.renderer.block.model.BlockElementFace"
import { $Vector3f$$Type } from "org.joml.Vector3f"
import { $BakedQuad } from "net.minecraft.client.renderer.block.model.BakedQuad"
import { $TextureAtlasSprite$$Type } from "net.minecraft.client.renderer.texture.TextureAtlasSprite"
import { $ModelState$$Type } from "net.minecraft.client.resources.model.ModelState"
import { $BlockElementRotation$$Type } from "net.minecraft.client.renderer.block.model.BlockElementRotation"

export class $FaceBakery {
static readonly "UV_INDEX": integer
static readonly "VERTEX_COUNT": integer
static readonly "VERTEX_INT_SIZE": integer

constructor()

public "applyModelRotation"(vector3f0: $Vector3f$$Type, transformation1: $Transformation$$Type): void
public "bakeQuad"(vector3f0: $Vector3f$$Type, vector3f1: $Vector3f$$Type, blockElementFace2: $BlockElementFace$$Type, textureAtlasSprite3: $TextureAtlasSprite$$Type, direction4: $Direction$$Type, modelState5: $ModelState$$Type, blockElementRotation6: $BlockElementRotation$$Type, boolean7: boolean, resourceLocation8: $ResourceLocation$$Type): $BakedQuad
public static "calculateFacing"(int0s: integer[]): $Direction
public "makeVertices"(blockFaceUV0: $BlockFaceUV$$Type, textureAtlasSprite1: $TextureAtlasSprite$$Type, direction2: $Direction$$Type, float3s: float[], transformation4: $Transformation$$Type, blockElementRotation5: $BlockElementRotation$$Type, boolean6: boolean): integer[]
public "recalculateWinding"(int0s: integer[], direction1: $Direction$$Type): void
public static "recomputeUVs"(blockFaceUV0: $BlockFaceUV$$Type, direction1: $Direction$$Type, transformation2: $Transformation$$Type, resourceLocation3: $ResourceLocation$$Type): $BlockFaceUV
public "setupShape"(vector3f0: $Vector3f$$Type, vector3f1: $Vector3f$$Type): float[]
}
}

declare module "net.minecraft.client.renderer.RenderStateShard$EmptyTextureStateShard" {
import { $RenderStateShard } from "net.minecraft.client.renderer.RenderStateShard"
import { $AccessorEmptyTextureStateShard } from "at.petrak.hexcasting.mixin.accessor.client.AccessorEmptyTextureStateShard"
import { $Runnable$$Type } from "java.lang.Runnable"

export class $RenderStateShard$EmptyTextureStateShard extends $RenderStateShard implements $AccessorEmptyTextureStateShard {
constructor(runnable0: $Runnable$$Type, runnable1: $Runnable$$Type)

}
}

declare module "net.minecraft.client.renderer.RenderType$CompositeState" {
import { $RenderStateShard } from "net.minecraft.client.renderer.RenderStateShard"
import { $RenderStateShard$WriteMaskStateShard } from "net.minecraft.client.renderer.RenderStateShard$WriteMaskStateShard"
import { $RenderType$CompositeState$CompositeStateBuilder } from "net.minecraft.client.renderer.RenderType$CompositeState$CompositeStateBuilder"
import { $RenderStateShard$OutputStateShard } from "net.minecraft.client.renderer.RenderStateShard$OutputStateShard"
import { $RenderStateShard$CullStateShard } from "net.minecraft.client.renderer.RenderStateShard$CullStateShard"
import { $RenderType$OutlineProperty } from "net.minecraft.client.renderer.RenderType$OutlineProperty"
import { $RenderStateShard$LayeringStateShard } from "net.minecraft.client.renderer.RenderStateShard$LayeringStateShard"
import { $RenderStateShard$LightmapStateShard } from "net.minecraft.client.renderer.RenderStateShard$LightmapStateShard"
import { $RenderStateShard$ShaderStateShard } from "net.minecraft.client.renderer.RenderStateShard$ShaderStateShard"
import { $RenderStateShard$LineStateShard } from "net.minecraft.client.renderer.RenderStateShard$LineStateShard"
import { $RenderStateShard$TexturingStateShard } from "net.minecraft.client.renderer.RenderStateShard$TexturingStateShard"
import { $ImmutableList } from "com.google.common.collect.ImmutableList"
import { $RenderStateShard$EmptyTextureStateShard } from "net.minecraft.client.renderer.RenderStateShard$EmptyTextureStateShard"
import { $RenderStateShard$DepthTestStateShard } from "net.minecraft.client.renderer.RenderStateShard$DepthTestStateShard"
import { $RenderStateShard$OverlayStateShard } from "net.minecraft.client.renderer.RenderStateShard$OverlayStateShard"
import { $RenderStateShard$TransparencyStateShard } from "net.minecraft.client.renderer.RenderStateShard$TransparencyStateShard"

export class $RenderType$CompositeState {
readonly "cullState": $RenderStateShard$CullStateShard
readonly "depthTestState": $RenderStateShard$DepthTestStateShard
readonly "layeringState": $RenderStateShard$LayeringStateShard
readonly "lightmapState": $RenderStateShard$LightmapStateShard
readonly "lineState": $RenderStateShard$LineStateShard
readonly "outlineProperty": $RenderType$OutlineProperty
readonly "outputState": $RenderStateShard$OutputStateShard
readonly "overlayState": $RenderStateShard$OverlayStateShard
readonly "shaderState": $RenderStateShard$ShaderStateShard
readonly "states": $ImmutableList<$RenderStateShard>
readonly "textureState": $RenderStateShard$EmptyTextureStateShard
readonly "texturingState": $RenderStateShard$TexturingStateShard
readonly "transparencyState": $RenderStateShard$TransparencyStateShard
readonly "writeMaskState": $RenderStateShard$WriteMaskStateShard

public static "builder"(): $RenderType$CompositeState$CompositeStateBuilder
}
}

declare module "net.minecraft.client.renderer.block.model.BlockElement" {
import { $EpsilonizableBlockElement } from "org.embeddedt.embeddium.model.EpsilonizableBlockElement"
import { $Direction, $Direction$$Type } from "net.minecraft.core.Direction"
import { $Map, $Map$$Type } from "java.util.Map"
import { $BlockElementFace, $BlockElementFace$$Type } from "net.minecraft.client.renderer.block.model.BlockElementFace"
import { $Vector3f, $Vector3f$$Type } from "org.joml.Vector3f"
import { $ForgeFaceData, $ForgeFaceData$$Type } from "net.minecraftforge.client.model.ForgeFaceData"
import { $BlockElementRotation, $BlockElementRotation$$Type } from "net.minecraft.client.renderer.block.model.BlockElementRotation"

export class $BlockElement implements $EpsilonizableBlockElement {
readonly "faces": $Map<$Direction, $BlockElementFace>
readonly "from": $Vector3f
readonly "shade": boolean
readonly "to": $Vector3f

constructor(vector3f0: $Vector3f$$Type, vector3f1: $Vector3f$$Type, map2: $Map$$Type<$Direction$$Type, $BlockElementFace$$Type>, blockElementRotation3: $BlockElementRotation$$Type, boolean4: boolean, forgeFaceData5: $ForgeFaceData$$Type)
constructor(vector3f0: $Vector3f$$Type, vector3f1: $Vector3f$$Type, map2: $Map$$Type<$Direction$$Type, $BlockElementFace$$Type>, blockElementRotation3: $BlockElementRotation$$Type, boolean4: boolean)

public "embeddium$epsilonize"(): void
public "getFaceData"(): $ForgeFaceData
public "setFaceData"(forgeFaceData0: $ForgeFaceData$$Type): void
public "uvsByFace"(direction0: $Direction$$Type): float[]
get "rotation"(): $BlockElementRotation
set "rotation"(value: $BlockElementRotation$$Type)
get "faceData"(): $ForgeFaceData
set "faceData"(value: $ForgeFaceData$$Type)
}
}

declare module "net.minecraft.client.renderer.LevelRenderer$RenderChunkInfo" {
import { $ChunkRenderDispatcher$RenderChunk } from "net.minecraft.client.renderer.chunk.ChunkRenderDispatcher$RenderChunk"
import { $Direction$$Type } from "net.minecraft.core.Direction"

export class $LevelRenderer$RenderChunkInfo {
readonly "chunk": $ChunkRenderDispatcher$RenderChunk

public "addSourceDirection"(direction0: $Direction$$Type): void
public "hasDirection"(direction0: $Direction$$Type): boolean
public "hasSourceDirection"(int0: integer): boolean
public "hasSourceDirections"(): boolean
public "isAxisAlignedWith"(int0: integer, int1: integer, int2: integer): boolean
public "setDirections"(byte0: byte, direction1: $Direction$$Type): void
}
}

declare module "net.minecraft.client.renderer.debug.BeeDebugRenderer$BeeInfo" {
import { $List } from "java.util.List"
import { $Path, $Path$$Type } from "net.minecraft.world.level.pathfinder.Path"
import { $BlockPos, $BlockPos$$Type } from "net.minecraft.core.BlockPos"
import { $Position, $Position$$Type } from "net.minecraft.core.Position"
import { $Set } from "java.util.Set"
import { $UUID, $UUID$$Type } from "java.util.UUID"

export class $BeeDebugRenderer$BeeInfo {
readonly "blacklistedHives": $Set<$BlockPos>
readonly "flowerPos": $BlockPos
readonly "goals": $List<string>
readonly "hivePos": $BlockPos
readonly "id": integer
readonly "path": $Path
readonly "pos": $Position
readonly "travelTicks": integer
readonly "uuid": $UUID

constructor(uUID0: $UUID$$Type, int1: integer, position2: $Position$$Type, path3: $Path$$Type, blockPos4: $BlockPos$$Type, blockPos5: $BlockPos$$Type, int6: integer)

public "getName"(): string
public "getUuid"(): $UUID
public "hasFlower"(): boolean
public "hasHive"(blockPos0: $BlockPos$$Type): boolean
get "name"(): string
}
}

declare module "net.minecraft.client.renderer.entity.EntityRendererProvider" {
import { $Entity } from "net.minecraft.world.entity.Entity"
import { $EntityRendererProvider$Context$$Type } from "net.minecraft.client.renderer.entity.EntityRendererProvider$Context"
import { $EntityRenderer } from "net.minecraft.client.renderer.entity.EntityRenderer"

export interface $EntityRendererProvider<T extends $Entity = $Entity> {
"create"(context0: $EntityRendererProvider$Context$$Type): $EntityRenderer<T>
}

export namespace $EntityRendererProvider {
const probejs$$marker: never
}
export abstract class $EntityRendererProvider$$Static<T extends $Entity = $Entity> implements $EntityRendererProvider<T> {
}
}

declare module "net.minecraft.client.renderer.LevelRenderer$RenderChunkStorage" {
import { $LevelRenderer$RenderInfoMap } from "net.minecraft.client.renderer.LevelRenderer$RenderInfoMap"
import { $LinkedHashSet } from "java.util.LinkedHashSet"
import { $LevelRenderer$RenderChunkInfo } from "net.minecraft.client.renderer.LevelRenderer$RenderChunkInfo"

export class $LevelRenderer$RenderChunkStorage {
readonly "renderChunks": $LinkedHashSet<$LevelRenderer$RenderChunkInfo>
readonly "renderInfoMap": $LevelRenderer$RenderInfoMap

constructor(int0: integer)

}
}

declare module "net.minecraft.client.renderer.chunk.ChunkRenderDispatcher$ChunkTaskResult" {
import { $Enum } from "java.lang.Enum"

export class $ChunkRenderDispatcher$ChunkTaskResult extends $Enum<$ChunkRenderDispatcher$ChunkTaskResult> {
static readonly "CANCELLED": $ChunkRenderDispatcher$ChunkTaskResult
static readonly "SUCCESSFUL": $ChunkRenderDispatcher$ChunkTaskResult

public static "valueOf"(string0: string): $ChunkRenderDispatcher$ChunkTaskResult
public static "values"(): $ChunkRenderDispatcher$ChunkTaskResult[]
}
}

declare module "net.minecraft.client.renderer.ItemInHandRenderer" {
import { $KeepingItemRenderer } from "com.tacz.guns.api.client.other.KeepingItemRenderer"
import { $MultiBufferSource$BufferSource$$Type } from "net.minecraft.client.renderer.MultiBufferSource$BufferSource"
import { $LivingEntity$$Type } from "net.minecraft.world.entity.LivingEntity"
import { $HumanoidArm$$Type } from "net.minecraft.world.entity.HumanoidArm"
import { $LocalPlayer$$Type } from "net.minecraft.client.player.LocalPlayer"
import { $ItemRenderer$$Type } from "net.minecraft.client.renderer.entity.ItemRenderer"
import { $PoseStack$$Type } from "com.mojang.blaze3d.vertex.PoseStack"
import { $ItemDisplayContext$$Type } from "net.minecraft.world.item.ItemDisplayContext"
import { $CallbackInfo$$Type } from "org.spongepowered.asm.mixin.injection.callback.CallbackInfo"
import { $ItemInHandRendererAccessor } from "com.aetherteam.aether.mixin.mixins.client.accessor.ItemInHandRendererAccessor"
import { $Minecraft$$Type } from "net.minecraft.client.Minecraft"
import { $AbstractClientPlayer$$Type } from "net.minecraft.client.player.AbstractClientPlayer"
import { $EntityRenderDispatcher$$Type } from "net.minecraft.client.renderer.entity.EntityRenderDispatcher"
import { $ItemStack, $ItemStack$$Type } from "net.minecraft.world.item.ItemStack"
import { $InteractionHand$$Type } from "net.minecraft.world.InteractionHand"
import { $MultiBufferSource$$Type } from "net.minecraft.client.renderer.MultiBufferSource"

export class $ItemInHandRenderer implements $ItemInHandRendererAccessor, $KeepingItemRenderer {
constructor(minecraft0: $Minecraft$$Type, entityRenderDispatcher1: $EntityRenderDispatcher$$Type, itemRenderer2: $ItemRenderer$$Type)

public "applyItemArmAttackTransform"(poseStack0: $PoseStack$$Type, humanoidArm1: $HumanoidArm$$Type, float2: float): void
public "applyItemArmTransform"(poseStack0: $PoseStack$$Type, humanoidArm1: $HumanoidArm$$Type, float2: float): void
public "calculateMapTilt"(float0: float): float
public "getCurrentItem"(): $ItemStack
public static "getRenderer"(): $KeepingItemRenderer
/** Client only, do not use in server scripts */
public "handler$del000$renderArmWithItem"(abstractClientPlayer0: $AbstractClientPlayer$$Type, float1: float, float2: float, interactionHand3: $InteractionHand$$Type, float4: float, itemStack5: $ItemStack$$Type, float6: float, poseStack7: $PoseStack$$Type, multiBufferSource8: $MultiBufferSource$$Type, int9: integer, callbackInfo10: $CallbackInfo$$Type): void
public "handler$epk000$beforeHandRender"(float0: float, poseStack1: $PoseStack$$Type, bufferSource2: $MultiBufferSource$BufferSource$$Type, localPlayer3: $LocalPlayer$$Type, int4: integer, callbackInfo5: $CallbackInfo$$Type): void
public "handler$epk000$cancelEquippedProgress"(callbackInfo0: $CallbackInfo$$Type): void
public "handler$gbc000$moonlight$animateItem"(player: $AbstractClientPlayer$$Type, partialTicks: float, pitch: float, hand: $InteractionHand$$Type, swingProgress: float, stack: $ItemStack$$Type, handHeight: float, poseStack: $PoseStack$$Type, buffer: $MultiBufferSource$$Type, combinedLight: integer, ci: $CallbackInfo$$Type): void
public "handler$gbc000$moonlight$renderSpecial"(player: $AbstractClientPlayer$$Type, partialTicks: float, pitch: float, hand: $InteractionHand$$Type, swingProgress: float, stack: $ItemStack$$Type, equippedProgress: float, poseStack: $PoseStack$$Type, buffer: $MultiBufferSource$$Type, combinedLight: integer, ci: $CallbackInfo$$Type, arm: $HumanoidArm$$Type): void
public "itemUsed"(interactionHand0: $InteractionHand$$Type): void
public "keep"(itemStack0: $ItemStack$$Type, long1: long): void
public "renderArmWithItem"(abstractClientPlayer0: $AbstractClientPlayer$$Type, float1: float, float2: float, interactionHand3: $InteractionHand$$Type, float4: float, itemStack5: $ItemStack$$Type, float6: float, poseStack7: $PoseStack$$Type, multiBufferSource8: $MultiBufferSource$$Type, int9: integer): void
public "renderHandsWithItems"(float0: float, poseStack1: $PoseStack$$Type, bufferSource2: $MultiBufferSource$BufferSource$$Type, localPlayer3: $LocalPlayer$$Type, int4: integer): void
public "renderItem"(livingEntity0: $LivingEntity$$Type, itemStack1: $ItemStack$$Type, itemDisplayContext2: $ItemDisplayContext$$Type, boolean3: boolean, poseStack4: $PoseStack$$Type, multiBufferSource5: $MultiBufferSource$$Type, int6: integer): void
public "renderMapHand"(poseStack0: $PoseStack$$Type, multiBufferSource1: $MultiBufferSource$$Type, int2: integer, humanoidArm3: $HumanoidArm$$Type): void
public "renderPlayerArm"(poseStack0: $PoseStack$$Type, multiBufferSource1: $MultiBufferSource$$Type, int2: integer, float3: float, float4: float, humanoidArm5: $HumanoidArm$$Type): void
public "tick"(): void
get "mainHandItem"(): $ItemStack
set "mainHandItem"(value: $ItemStack$$Type)
get "offHandItem"(): $ItemStack
set "offHandItem"(value: $ItemStack$$Type)
get "currentItem"(): $ItemStack
}
}

declare module "net.minecraft.client.renderer.entity.ItemFrameRenderer" {
import { $ResourceLocation } from "net.minecraft.resources.ResourceLocation"
import { $ItemFrame, $ItemFrame$$Type } from "net.minecraft.world.entity.decoration.ItemFrame"
import { $Vec3 } from "net.minecraft.world.phys.Vec3"
import { $EntityRendererProvider$Context$$Type } from "net.minecraft.client.renderer.entity.EntityRendererProvider$Context"
import { $MultiBufferSource$$Type } from "net.minecraft.client.renderer.MultiBufferSource"
import { $PoseStack$$Type } from "com.mojang.blaze3d.vertex.PoseStack"
import { $EntityRenderer } from "net.minecraft.client.renderer.entity.EntityRenderer"

export class $ItemFrameRenderer<T extends $ItemFrame = $ItemFrame> extends $EntityRenderer<T> {
static readonly "BRIGHT_MAP_LIGHT_ADJUSTMENT": integer
static readonly "GLOW_FRAME_BRIGHTNESS": integer

constructor(context0: $EntityRendererProvider$Context$$Type)

public "getRenderOffset"(t0: T, float1: float): $Vec3
public "getTextureLocation"(t0: T): $ResourceLocation
public "render"(t0: T, float1: float, float2: float, poseStack3: $PoseStack$$Type, multiBufferSource4: $MultiBufferSource$$Type, int5: integer): void
}
}

declare module "net.minecraft.client.renderer.block.BlockModelShaper" {
import { $BakedModel, $BakedModel$$Type } from "net.minecraft.client.resources.model.BakedModel"
import { $ResourceLocation$$Type } from "net.minecraft.resources.ResourceLocation"
import { $BlockPos$$Type } from "net.minecraft.core.BlockPos"
import { $ModelManager, $ModelManager$$Type } from "net.minecraft.client.resources.model.ModelManager"
import { $Map$$Type } from "java.util.Map"
import { $BlockState$$Type } from "net.minecraft.world.level.block.state.BlockState"
import { $Comparable$$Type } from "java.lang.Comparable"
import { $Property$$Type } from "net.minecraft.world.level.block.state.properties.Property"
import { $Level$$Type } from "net.minecraft.world.level.Level"
import { $ModelResourceLocation } from "net.minecraft.client.resources.model.ModelResourceLocation"
import { $TextureAtlasSprite } from "net.minecraft.client.renderer.texture.TextureAtlasSprite"

export class $BlockModelShaper {
constructor(modelManager0: $ModelManager$$Type)

public "getBlockModel"(blockState0: $BlockState$$Type): $BakedModel
public "getModelManager"(): $ModelManager
/** @deprecated */
public "getParticleIcon"(blockState0: $BlockState$$Type): $TextureAtlasSprite
public "getTexture"(blockState0: $BlockState$$Type, level1: $Level$$Type, blockPos2: $BlockPos$$Type): $TextureAtlasSprite
public "replaceCache"(map0: $Map$$Type<$BlockState$$Type, $BakedModel$$Type>): void
public static "statePropertiesToString"(map0: $Map$$Type<$Property$$Type<any>, $Comparable$$Type<any>>): string
public static "stateToModelLocation"(resourceLocation0: $ResourceLocation$$Type, blockState1: $BlockState$$Type): $ModelResourceLocation
public static "stateToModelLocation"(blockState0: $BlockState$$Type): $ModelResourceLocation
get "modelManager"(): $ModelManager
}
}

declare module "net.minecraft.client.renderer.debug.PathfindingRenderer" {
import { $DebugRenderer$SimpleDebugRenderer } from "net.minecraft.client.renderer.debug.DebugRenderer$SimpleDebugRenderer"
import { $Path$$Type } from "net.minecraft.world.level.pathfinder.Path"
import { $MultiBufferSource$$Type } from "net.minecraft.client.renderer.MultiBufferSource"
import { $VertexConsumer$$Type } from "com.mojang.blaze3d.vertex.VertexConsumer"
import { $PoseStack$$Type } from "com.mojang.blaze3d.vertex.PoseStack"

export class $PathfindingRenderer implements $DebugRenderer$SimpleDebugRenderer {
constructor()

public "addPath"(int0: integer, path1: $Path$$Type, float2: float): void
public "clear"(): void
public "render"(poseStack0: $PoseStack$$Type, multiBufferSource1: $MultiBufferSource$$Type, double2: double, double3: double, double4: double): void
public static "renderPath"(poseStack0: $PoseStack$$Type, multiBufferSource1: $MultiBufferSource$$Type, path2: $Path$$Type, float3: float, boolean4: boolean, boolean5: boolean, double6: double, double7: double, double8: double): void
public static "renderPathLine"(poseStack0: $PoseStack$$Type, vertexConsumer1: $VertexConsumer$$Type, path2: $Path$$Type, double3: double, double4: double, double5: double): void
}
}

declare module "net.minecraft.client.renderer.OutlineBufferSource" {
import { $BufferSourceExtension } from "com.supermartijn642.fusion.extensions.BufferSourceExtension"
import { $MultiBufferSource$BufferSource, $MultiBufferSource$BufferSource$$Type } from "net.minecraft.client.renderer.MultiBufferSource$BufferSource"
import { $Map$$Type } from "java.util.Map"
import { $BufferBuilder$$Type } from "com.mojang.blaze3d.vertex.BufferBuilder"
import { $RenderType, $RenderType$$Type } from "net.minecraft.client.renderer.RenderType"
import { $VertexConsumer } from "com.mojang.blaze3d.vertex.VertexConsumer"
import { $MultiBufferSource } from "net.minecraft.client.renderer.MultiBufferSource"

export class $OutlineBufferSource implements $MultiBufferSource, $BufferSourceExtension {
constructor(bufferSource0: $MultiBufferSource$BufferSource$$Type)

public "endOutlineBatch"(): void
public "fusionGetLastRenderType"(): $RenderType
public "getBuffer"(renderType0: $RenderType$$Type): $VertexConsumer
public static "immediate"(bufferBuilder0: $BufferBuilder$$Type): $MultiBufferSource$BufferSource
public static "immediateWithBuffers"(map0: $Map$$Type<$RenderType$$Type, $BufferBuilder$$Type>, bufferBuilder1: $BufferBuilder$$Type): $MultiBufferSource$BufferSource
public "setColor"(int0: integer, int1: integer, int2: integer, int3: integer): void
}
}

declare module "net.minecraft.client.renderer.texture.TextureAtlas" {
import { $ResourceLocation, $ResourceLocation$$Type } from "net.minecraft.resources.ResourceLocation"
import { $SpriteContents, $SpriteContents$$Type } from "net.minecraft.client.renderer.texture.SpriteContents"
import { $SpriteFinderImpl$SpriteFinderAccess } from "appeng.thirdparty.fabric.SpriteFinderImpl$SpriteFinderAccess"
import { $SpriteFinderImpl } from "appeng.thirdparty.fabric.SpriteFinderImpl"
import { $Set } from "java.util.Set"
import { $SpriteLoader$Preparations$$Type } from "net.minecraft.client.renderer.texture.SpriteLoader$Preparations"
import { $Tickable } from "net.minecraft.client.renderer.texture.Tickable"
import { $List, $List$$Type } from "java.util.List"
import { $AbstractTexture } from "net.minecraft.client.renderer.texture.AbstractTexture"
import { $Map, $Map$$Type } from "java.util.Map"
import { $AccessTextureAtlas } from "zzzank.probejs.mixins.AccessTextureAtlas"
import { $Path$$Type } from "java.nio.file.Path"
import { $Dumpable } from "net.minecraft.client.renderer.texture.Dumpable"
import { $TextureAtlasSprite, $TextureAtlasSprite$$Type } from "net.minecraft.client.renderer.texture.TextureAtlasSprite"

export class $TextureAtlas extends $AbstractTexture implements $Dumpable, $Tickable, $AccessTextureAtlas, $SpriteFinderImpl$SpriteFinderAccess {
/** @deprecated */
static readonly "LOCATION_BLOCKS": $ResourceLocation
/** @deprecated */
static readonly "LOCATION_PARTICLES": $ResourceLocation

constructor(resourceLocation0: $ResourceLocation$$Type)

public "clearTextureData"(): void
public "cycleAnimationFrames"(): void
public "dumpContents"(resourceLocation0: $ResourceLocation$$Type, path1: $Path$$Type): void
public "fabric_spriteFinder"(): $SpriteFinderImpl
public "getHeight"(): integer
public "getSprite"(resourceLocation0: $ResourceLocation$$Type): $TextureAtlasSprite
public "getTextureLocations"(): $Set<$ResourceLocation>
public "getWidth"(): integer
public "location"(): $ResourceLocation
public "maxSupportedTextureSize"(): integer
public "tick"(): void
public "updateFilter"(preparations0: $SpriteLoader$Preparations$$Type): void
public "upload"(preparations0: $SpriteLoader$Preparations$$Type): void
get "sprites"(): $List<$SpriteContents>
set "sprites"(value: $List$$Type<$SpriteContents$$Type>)
get "texturesByName"(): $Map<$ResourceLocation, $TextureAtlasSprite>
set "texturesByName"(value: $Map$$Type<$ResourceLocation$$Type, $TextureAtlasSprite$$Type>)
get "height"(): integer
get "textureLocations"(): $Set<$ResourceLocation>
get "width"(): integer
}
}

declare module "net.minecraft.client.renderer.blockentity.BlockEntityRenderer" {
import { $Vec3$$Type } from "net.minecraft.world.phys.Vec3"
import { $BlockEntity, $BlockEntity$$Type } from "net.minecraft.world.level.block.entity.BlockEntity"
import { $MultiBufferSource$$Type } from "net.minecraft.client.renderer.MultiBufferSource"
import { $PoseStack$$Type } from "com.mojang.blaze3d.vertex.PoseStack"

export interface $BlockEntityRenderer<T extends $BlockEntity = $BlockEntity> {
"getViewDistance"(): integer
"render"(t0: T, float1: float, poseStack2: $PoseStack$$Type, multiBufferSource3: $MultiBufferSource$$Type, int4: integer, int5: integer): void
"shouldRender"(t0: T, vec31: $Vec3$$Type): boolean
"shouldRenderOffScreen"(t0: T): boolean
get "viewDistance"(): integer
}

export namespace $BlockEntityRenderer {
const probejs$$marker: never
}
export abstract class $BlockEntityRenderer$$Static<T extends $BlockEntity = $BlockEntity> implements $BlockEntityRenderer<T> {
}
}

declare module "net.minecraft.client.renderer.block.model.BlockModel" {
import { $ResourceLocation, $ResourceLocation$$Type } from "net.minecraft.resources.ResourceLocation"
import { $Either, $Either$$Type } from "com.mojang.datafixers.util.Either"
import { $Direction$$Type } from "net.minecraft.core.Direction"
import { $Function$$Type } from "java.util.function.Function"
import { $ItemOverrides } from "net.minecraft.client.renderer.block.model.ItemOverrides"
import { $Gson } from "com.google.gson.Gson"
import { $Map, $Map$$Type } from "java.util.Map"
import { $BlockElementFace$$Type } from "net.minecraft.client.renderer.block.model.BlockElementFace"
import { $BlockModel$GuiLight, $BlockModel$GuiLight$$Type } from "net.minecraft.client.renderer.block.model.BlockModel$GuiLight"
import { $ItemOverride, $ItemOverride$$Type } from "net.minecraft.client.renderer.block.model.ItemOverride"
import { $TextureAtlasSprite, $TextureAtlasSprite$$Type } from "net.minecraft.client.renderer.texture.TextureAtlasSprite"
import { $BakedModel } from "net.minecraft.client.resources.model.BakedModel"
import { $Logger } from "org.slf4j.Logger"
import { $ItemTransforms, $ItemTransforms$$Type } from "net.minecraft.client.renderer.block.model.ItemTransforms"
import { $Collection } from "java.util.Collection"
import { $BakedQuad } from "net.minecraft.client.renderer.block.model.BakedQuad"
import { $Reader$$Type } from "java.io.Reader"
import { $ModelInstance, $ModelInstance$$Type } from "com.supermartijn642.fusion.api.model.ModelInstance"
import { $BlockModelExtension } from "com.supermartijn642.fusion.extensions.BlockModelExtension"
import { $ModelBaker$$Type } from "net.minecraft.client.resources.model.ModelBaker"
import { $List, $List$$Type } from "java.util.List"
import { $BlockElement, $BlockElement$$Type } from "net.minecraft.client.renderer.block.model.BlockElement"
import { $BlockGeometryBakingContext } from "net.minecraftforge.client.model.geometry.BlockGeometryBakingContext"
import { $UnbakedModel } from "net.minecraft.client.resources.model.UnbakedModel"
import { $FaceBakery } from "net.minecraft.client.renderer.block.model.FaceBakery"
import { $Material, $Material$$Type } from "net.minecraft.client.resources.model.Material"
import { $ModelState$$Type } from "net.minecraft.client.resources.model.ModelState"

export class $BlockModel implements $UnbakedModel, $BlockModelExtension {
static readonly "FACE_BAKERY": $FaceBakery
static readonly "GSON": $Gson
static readonly "LOGGER": $Logger
static readonly "PARTICLE_TEXTURE_REFERENCE": string
readonly "customData": $BlockGeometryBakingContext
readonly "elements": $List<$BlockElement>
readonly "guiLight": $BlockModel$GuiLight
readonly "hasAmbientOcclusion": boolean
readonly "overrides": $List<$ItemOverride>
readonly "textureMap": $Map<string, $Either<$Material, string>>
readonly "transforms": $ItemTransforms

constructor(resourceLocation0: $ResourceLocation$$Type, list1: $List$$Type<$BlockElement$$Type>, map2: $Map$$Type<string, $Either$$Type<$Material$$Type, string>>, boolean3: boolean, guiLight4: $BlockModel$GuiLight$$Type, itemTransforms5: $ItemTransforms$$Type, list6: $List$$Type<$ItemOverride$$Type>)

/** @deprecated */
public "bake"(modelBaker0: $ModelBaker$$Type, function1: $Function$$Type<$Material$$Type, $TextureAtlasSprite>, modelState2: $ModelState$$Type, resourceLocation3: $ResourceLocation$$Type): $BakedModel
public "bake"(modelBaker0: $ModelBaker$$Type, blockModel1: $BlockModel$$Type, function2: $Function$$Type<$Material$$Type, $TextureAtlasSprite>, modelState3: $ModelState$$Type, resourceLocation4: $ResourceLocation$$Type, boolean5: boolean): $BakedModel
public static "bakeFace"(blockElement0: $BlockElement$$Type, blockElementFace1: $BlockElementFace$$Type, textureAtlasSprite2: $TextureAtlasSprite$$Type, direction3: $Direction$$Type, modelState4: $ModelState$$Type, resourceLocation5: $ResourceLocation$$Type): $BakedQuad
public "findTextureEntry"(string0: string): $Either<$Material, string>
public static "fromStream"(reader0: $Reader$$Type): $BlockModel
public static "fromString"(string0: string): $BlockModel
public "getDependencies"(): $Collection<$ResourceLocation>
/** @deprecated */
public "getElements"(): $List<$BlockElement>
public "getFusionModel"(): $ModelInstance
public "getGuiLight"(): $BlockModel$GuiLight
public "getMaterial"(string0: string): $Material
public "getOverrides"(modelBaker0: $ModelBaker$$Type, blockModel1: $BlockModel$$Type, function2: $Function$$Type<$Material$$Type, $TextureAtlasSprite>): $ItemOverrides
public "getOverrides"(): $List<$ItemOverride>
public "getParentLocation"(): $ResourceLocation
public "getRootModel"(): $BlockModel
public "getTransforms"(): $ItemTransforms
public "hasAmbientOcclusion"(): boolean
public "hasTexture"(string0: string): boolean
public "isResolved"(): boolean
public "resolveParents"(function0: $Function$$Type<$ResourceLocation$$Type, $UnbakedModel>): void
public "setFusionModel"(fusionModel: $ModelInstance$$Type): void
get "name"(): string
set "name"(value: string)
get "parent"(): $BlockModel
set "parent"(value: $BlockModel$$Type)
get "parentLocation"(): $ResourceLocation
set "parentLocation"(value: $ResourceLocation$$Type)
get "dependencies"(): $Collection<$ResourceLocation>
get "fusionModel"(): $ModelInstance
get "rootModel"(): $BlockModel
get "resolved"(): boolean
set "fusionModel"(value: $ModelInstance$$Type)
}
}

declare module "net.minecraft.client.renderer.RenderStateShard$BooleanStateShard" {
import { $RenderStateShard } from "net.minecraft.client.renderer.RenderStateShard"
import { $Runnable$$Type } from "java.lang.Runnable"

export class $RenderStateShard$BooleanStateShard extends $RenderStateShard {
constructor(string0: string, runnable1: $Runnable$$Type, runnable2: $Runnable$$Type, boolean3: boolean)

}
}

declare module "net.minecraft.client.renderer.DimensionSpecialEffects$SkyType" {
import { $Enum } from "java.lang.Enum"

export class $DimensionSpecialEffects$SkyType extends $Enum<$DimensionSpecialEffects$SkyType> {
static readonly "END": $DimensionSpecialEffects$SkyType
static readonly "NONE": $DimensionSpecialEffects$SkyType
static readonly "NORMAL": $DimensionSpecialEffects$SkyType

public static "valueOf"(string0: string): $DimensionSpecialEffects$SkyType
public static "values"(): $DimensionSpecialEffects$SkyType[]
}
}

declare module "net.minecraft.client.renderer.GpuWarnlistManager$Preparations" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export class $GpuWarnlistManager$Preparations {
}
}

declare module "net.minecraft.client.renderer.block.model.BlockModel$GuiLight" {
import { $Enum } from "java.lang.Enum"

export class $BlockModel$GuiLight extends $Enum<$BlockModel$GuiLight> {
static readonly "FRONT": $BlockModel$GuiLight
static readonly "SIDE": $BlockModel$GuiLight

public static "getByName"(string0: string): $BlockModel$GuiLight
public "getSerializedName"(): string
public "lightLikeBlock"(): boolean
public static "valueOf"(string0: string): $BlockModel$GuiLight
public static "values"(): $BlockModel$GuiLight[]
get "serializedName"(): string
}
}

declare module "net.minecraft.client.renderer.blockentity.BlockEntityRendererProvider" {
import { $BlockEntityRendererProvider$Context$$Type } from "net.minecraft.client.renderer.blockentity.BlockEntityRendererProvider$Context"
import { $BlockEntity } from "net.minecraft.world.level.block.entity.BlockEntity"
import { $BlockEntityRenderer } from "net.minecraft.client.renderer.blockentity.BlockEntityRenderer"

export interface $BlockEntityRendererProvider<T extends $BlockEntity = $BlockEntity> {
"create"(context0: $BlockEntityRendererProvider$Context$$Type): $BlockEntityRenderer<T>
}

export namespace $BlockEntityRendererProvider {
const probejs$$marker: never
}
export abstract class $BlockEntityRendererProvider$$Static<T extends $BlockEntity = $BlockEntity> implements $BlockEntityRendererProvider<T> {
}
}

declare module "net.minecraft.client.renderer.ShaderInstance" {
import { $ResourceLocation$$Type } from "net.minecraft.resources.ResourceLocation"
import { $JsonObject$$Type } from "com.google.gson.JsonObject"
import { $ResourceProvider$$Type } from "net.minecraft.server.packs.resources.ResourceProvider"
import { $Program } from "com.mojang.blaze3d.shaders.Program"
import { $Shader } from "com.mojang.blaze3d.shaders.Shader"
import { $BlendMode } from "com.mojang.blaze3d.shaders.BlendMode"
import { $AbstractUniform } from "com.mojang.blaze3d.shaders.AbstractUniform"
import { $AutoCloseable } from "java.lang.AutoCloseable"
import { $Uniform } from "com.mojang.blaze3d.shaders.Uniform"
import { $VertexFormat, $VertexFormat$$Type } from "com.mojang.blaze3d.vertex.VertexFormat"

export class $ShaderInstance implements $Shader, $AutoCloseable {
readonly "CHUNK_OFFSET": $Uniform
readonly "COLOR_MODULATOR": $Uniform
readonly "FOG_COLOR": $Uniform
readonly "FOG_END": $Uniform
readonly "FOG_SHAPE": $Uniform
readonly "FOG_START": $Uniform
readonly "GAME_TIME": $Uniform
readonly "GLINT_ALPHA": $Uniform
readonly "INVERSE_VIEW_ROTATION_MATRIX": $Uniform
readonly "LIGHT0_DIRECTION": $Uniform
readonly "LIGHT1_DIRECTION": $Uniform
readonly "LINE_WIDTH": $Uniform
readonly "MODEL_VIEW_MATRIX": $Uniform
readonly "PROJECTION_MATRIX": $Uniform
readonly "SCREEN_SIZE": $Uniform
static readonly "SHADER_PATH": string
readonly "TEXTURE_MATRIX": $Uniform

constructor(resourceProvider0: $ResourceProvider$$Type, resourceLocation1: $ResourceLocation$$Type, vertexFormat2: $VertexFormat$$Type)
/** @deprecated */
constructor(resourceProvider0: $ResourceProvider$$Type, string1: string, vertexFormat2: $VertexFormat$$Type)

public "apply"(): void
public "attachToProgram"(): void
public "clear"(): void
public "close"(): void
public "getFragmentProgram"(): $Program
public "getId"(): integer
public "getName"(): string
public "getUniform"(string0: string): $Uniform
public "getVertexFormat"(): $VertexFormat
public "getVertexProgram"(): $Program
public "markDirty"(): void
public static "parseBlendNode"(jsonObject0: $JsonObject$$Type): $BlendMode
public "safeGetUniform"(string0: string): $AbstractUniform
public "setSampler"(string0: string, object1: any): void
get "fragmentProgram"(): $Program
get "id"(): integer
get "name"(): string
get "vertexFormat"(): $VertexFormat
get "vertexProgram"(): $Program
}
}

declare module "net.minecraft.client.renderer.texture.SpriteLoader$Preparations" {
import { $ResourceLocation, $ResourceLocation$$Type } from "net.minecraft.resources.ResourceLocation"
import { $Map, $Map$$Type } from "java.util.Map"
import { $CompletableFuture, $CompletableFuture$$Type } from "java.util.concurrent.CompletableFuture"
import { $Record } from "java.lang.Record"
import { $TextureAtlasSprite, $TextureAtlasSprite$$Type } from "net.minecraft.client.renderer.texture.TextureAtlasSprite"

export class $SpriteLoader$Preparations extends $Record {
constructor(width: integer, height: integer, mipLevel: integer, missing: $TextureAtlasSprite$$Type, regions: $Map$$Type<$ResourceLocation$$Type, $TextureAtlasSprite$$Type>, readyForUpload: $CompletableFuture$$Type<void>)

public "height"(): integer
public "mipLevel"(): integer
public "missing"(): $TextureAtlasSprite
public "readyForUpload"(): $CompletableFuture<void>
public "regions"(): $Map<$ResourceLocation, $TextureAtlasSprite>
public "waitForUpload"(): $CompletableFuture<$SpriteLoader$Preparations>
public "width"(): integer
}
}

declare module "net.minecraft.client.renderer.debug.DebugRenderer" {
import { $DebugRenderer$SimpleDebugRenderer } from "net.minecraft.client.renderer.debug.DebugRenderer$SimpleDebugRenderer"
import { $MultiBufferSource$BufferSource$$Type } from "net.minecraft.client.renderer.MultiBufferSource$BufferSource"
import { $AABB$$Type } from "net.minecraft.world.phys.AABB"
import { $RaidDebugRenderer } from "net.minecraft.client.renderer.debug.RaidDebugRenderer"
import { $OrientedBoundingBox$$Type } from "net.bettercombat.client.collision.OrientedBoundingBox"
import { $PathfindingRenderer } from "net.minecraft.client.renderer.debug.PathfindingRenderer"
import { $GameEventListenerRenderer } from "net.minecraft.client.renderer.debug.GameEventListenerRenderer"
import { $PoseStack$$Type } from "com.mojang.blaze3d.vertex.PoseStack"
import { $BeeDebugRenderer } from "net.minecraft.client.renderer.debug.BeeDebugRenderer"
import { $CallbackInfo$$Type } from "org.spongepowered.asm.mixin.injection.callback.CallbackInfo"
import { $VillageSectionsDebugRenderer } from "net.minecraft.client.renderer.debug.VillageSectionsDebugRenderer"
import { $GoalSelectorDebugRenderer } from "net.minecraft.client.renderer.debug.GoalSelectorDebugRenderer"
import { $Entity, $Entity$$Type } from "net.minecraft.world.entity.Entity"
import { $Minecraft$$Type } from "net.minecraft.client.Minecraft"
import { $BlockPos$$Type } from "net.minecraft.core.BlockPos"
import { $GameTestDebugRenderer } from "net.minecraft.client.renderer.debug.GameTestDebugRenderer"
import { $Optional } from "java.util.Optional"
import { $StructureRenderer } from "net.minecraft.client.renderer.debug.StructureRenderer"
import { $BrainDebugRenderer } from "net.minecraft.client.renderer.debug.BrainDebugRenderer"
import { $MultiBufferSource$$Type } from "net.minecraft.client.renderer.MultiBufferSource"
import { $LightSectionDebugRenderer } from "net.minecraft.client.renderer.debug.LightSectionDebugRenderer"

export class $DebugRenderer {
readonly "beeDebugRenderer": $BeeDebugRenderer
readonly "brainDebugRenderer": $BrainDebugRenderer
readonly "chunkBorderRenderer": $DebugRenderer$SimpleDebugRenderer
readonly "chunkRenderer": $DebugRenderer$SimpleDebugRenderer
readonly "collisionBoxRenderer": $DebugRenderer$SimpleDebugRenderer
readonly "gameEventListenerRenderer": $GameEventListenerRenderer
readonly "gameTestDebugRenderer": $GameTestDebugRenderer
readonly "goalSelectorRenderer": $GoalSelectorDebugRenderer
readonly "heightMapRenderer": $DebugRenderer$SimpleDebugRenderer
readonly "lightDebugRenderer": $DebugRenderer$SimpleDebugRenderer
readonly "neighborsUpdateRenderer": $DebugRenderer$SimpleDebugRenderer
readonly "pathfindingRenderer": $PathfindingRenderer
readonly "raidDebugRenderer": $RaidDebugRenderer
readonly "skyLightSectionDebugRenderer": $LightSectionDebugRenderer
readonly "solidFaceRenderer": $DebugRenderer$SimpleDebugRenderer
readonly "structureRenderer": $StructureRenderer
readonly "supportBlockRenderer": $DebugRenderer$SimpleDebugRenderer
readonly "villageSectionsDebugRenderer": $VillageSectionsDebugRenderer
readonly "waterDebugRenderer": $DebugRenderer$SimpleDebugRenderer
readonly "worldGenAttemptRenderer": $DebugRenderer$SimpleDebugRenderer

constructor(minecraft0: $Minecraft$$Type)

public "clear"(): void
public static "getTargetedEntity"(entity0: $Entity$$Type, int1: integer): $Optional<$Entity>
public "handler$cbm000$renderColliderDebug"(matrices: $PoseStack$$Type, vertexConsumers: $MultiBufferSource$BufferSource$$Type, cameraX: double, cameraY: double, cameraZ: double, ci: $CallbackInfo$$Type): void
public "printDebug"(obb: $OrientedBoundingBox$$Type): void
public "render"(poseStack0: $PoseStack$$Type, bufferSource1: $MultiBufferSource$BufferSource$$Type, double2: double, double3: double, double4: double): void
public static "renderFilledBox"(poseStack0: $PoseStack$$Type, multiBufferSource1: $MultiBufferSource$$Type, blockPos2: $BlockPos$$Type, blockPos3: $BlockPos$$Type, float4: float, float5: float, float6: float, float7: float): void
public static "renderFilledBox"(poseStack0: $PoseStack$$Type, multiBufferSource1: $MultiBufferSource$$Type, aABB2: $AABB$$Type, float3: float, float4: float, float5: float, float6: float): void
public static "renderFilledBox"(poseStack0: $PoseStack$$Type, multiBufferSource1: $MultiBufferSource$$Type, blockPos2: $BlockPos$$Type, float3: float, float4: float, float5: float, float6: float, float7: float): void
public static "renderFilledBox"(poseStack0: $PoseStack$$Type, multiBufferSource1: $MultiBufferSource$$Type, double2: double, double3: double, double4: double, double5: double, double6: double, double7: double, float8: float, float9: float, float10: float, float11: float): void
public static "renderFloatingText"(poseStack0: $PoseStack$$Type, multiBufferSource1: $MultiBufferSource$$Type, string2: string, int3: integer, int4: integer, int5: integer, int6: integer): void
public static "renderFloatingText"(poseStack0: $PoseStack$$Type, multiBufferSource1: $MultiBufferSource$$Type, string2: string, double3: double, double4: double, double5: double, int6: integer): void
public static "renderFloatingText"(poseStack0: $PoseStack$$Type, multiBufferSource1: $MultiBufferSource$$Type, string2: string, double3: double, double4: double, double5: double, int6: integer, float7: float): void
public static "renderFloatingText"(poseStack0: $PoseStack$$Type, multiBufferSource1: $MultiBufferSource$$Type, string2: string, double3: double, double4: double, double5: double, int6: integer, float7: float, boolean8: boolean, float9: float, boolean10: boolean): void
public "switchRenderChunkborder"(): boolean
}
}

declare module "net.minecraft.client.renderer.RenderStateShard$ColorLogicStateShard" {
import { $RenderStateShard } from "net.minecraft.client.renderer.RenderStateShard"
import { $Runnable$$Type } from "java.lang.Runnable"

export class $RenderStateShard$ColorLogicStateShard extends $RenderStateShard {
constructor(string0: string, runnable1: $Runnable$$Type, runnable2: $Runnable$$Type)

}
}

declare module "net.minecraft.client.renderer.RenderType$CompositeState$CompositeStateBuilder" {
import { $RenderStateShard$WriteMaskStateShard$$Type } from "net.minecraft.client.renderer.RenderStateShard$WriteMaskStateShard"
import { $RenderStateShard$ColorLogicStateShard$$Type } from "net.minecraft.client.renderer.RenderStateShard$ColorLogicStateShard"
import { $RenderStateShard$OutputStateShard$$Type } from "net.minecraft.client.renderer.RenderStateShard$OutputStateShard"
import { $RenderType$OutlineProperty$$Type } from "net.minecraft.client.renderer.RenderType$OutlineProperty"
import { $RenderStateShard$CullStateShard$$Type } from "net.minecraft.client.renderer.RenderStateShard$CullStateShard"
import { $RenderStateShard$LayeringStateShard$$Type } from "net.minecraft.client.renderer.RenderStateShard$LayeringStateShard"
import { $RenderStateShard$LightmapStateShard$$Type } from "net.minecraft.client.renderer.RenderStateShard$LightmapStateShard"
import { $RenderStateShard$ShaderStateShard$$Type } from "net.minecraft.client.renderer.RenderStateShard$ShaderStateShard"
import { $RenderStateShard$LineStateShard$$Type } from "net.minecraft.client.renderer.RenderStateShard$LineStateShard"
import { $RenderStateShard$TexturingStateShard$$Type } from "net.minecraft.client.renderer.RenderStateShard$TexturingStateShard"
import { $RenderStateShard$EmptyTextureStateShard$$Type } from "net.minecraft.client.renderer.RenderStateShard$EmptyTextureStateShard"
import { $RenderType$CompositeState } from "net.minecraft.client.renderer.RenderType$CompositeState"
import { $RenderStateShard$DepthTestStateShard$$Type } from "net.minecraft.client.renderer.RenderStateShard$DepthTestStateShard"
import { $RenderStateShard$OverlayStateShard$$Type } from "net.minecraft.client.renderer.RenderStateShard$OverlayStateShard"
import { $RenderStateShard$TransparencyStateShard$$Type } from "net.minecraft.client.renderer.RenderStateShard$TransparencyStateShard"

export class $RenderType$CompositeState$CompositeStateBuilder {
public "createCompositeState"(outlineProperty0: $RenderType$OutlineProperty$$Type): $RenderType$CompositeState
public "createCompositeState"(boolean0: boolean): $RenderType$CompositeState
public "setColorLogicState"(colorLogicStateShard0: $RenderStateShard$ColorLogicStateShard$$Type): $RenderType$CompositeState$CompositeStateBuilder
public "setCullState"(cullStateShard0: $RenderStateShard$CullStateShard$$Type): $RenderType$CompositeState$CompositeStateBuilder
public "setDepthTestState"(depthTestStateShard0: $RenderStateShard$DepthTestStateShard$$Type): $RenderType$CompositeState$CompositeStateBuilder
public "setLayeringState"(layeringStateShard0: $RenderStateShard$LayeringStateShard$$Type): $RenderType$CompositeState$CompositeStateBuilder
public "setLightmapState"(lightmapStateShard0: $RenderStateShard$LightmapStateShard$$Type): $RenderType$CompositeState$CompositeStateBuilder
public "setLineState"(lineStateShard0: $RenderStateShard$LineStateShard$$Type): $RenderType$CompositeState$CompositeStateBuilder
public "setOutputState"(outputStateShard0: $RenderStateShard$OutputStateShard$$Type): $RenderType$CompositeState$CompositeStateBuilder
public "setOverlayState"(overlayStateShard0: $RenderStateShard$OverlayStateShard$$Type): $RenderType$CompositeState$CompositeStateBuilder
public "setShaderState"(shaderStateShard0: $RenderStateShard$ShaderStateShard$$Type): $RenderType$CompositeState$CompositeStateBuilder
public "setTextureState"(emptyTextureStateShard0: $RenderStateShard$EmptyTextureStateShard$$Type): $RenderType$CompositeState$CompositeStateBuilder
public "setTexturingState"(texturingStateShard0: $RenderStateShard$TexturingStateShard$$Type): $RenderType$CompositeState$CompositeStateBuilder
public "setTransparencyState"(transparencyStateShard0: $RenderStateShard$TransparencyStateShard$$Type): $RenderType$CompositeState$CompositeStateBuilder
public "setWriteMaskState"(writeMaskStateShard0: $RenderStateShard$WriteMaskStateShard$$Type): $RenderType$CompositeState$CompositeStateBuilder
set "colorLogicState"(value: $RenderStateShard$ColorLogicStateShard$$Type)
set "cullState"(value: $RenderStateShard$CullStateShard$$Type)
set "depthTestState"(value: $RenderStateShard$DepthTestStateShard$$Type)
set "layeringState"(value: $RenderStateShard$LayeringStateShard$$Type)
set "lightmapState"(value: $RenderStateShard$LightmapStateShard$$Type)
set "lineState"(value: $RenderStateShard$LineStateShard$$Type)
set "outputState"(value: $RenderStateShard$OutputStateShard$$Type)
set "overlayState"(value: $RenderStateShard$OverlayStateShard$$Type)
set "shaderState"(value: $RenderStateShard$ShaderStateShard$$Type)
set "textureState"(value: $RenderStateShard$EmptyTextureStateShard$$Type)
set "texturingState"(value: $RenderStateShard$TexturingStateShard$$Type)
set "transparencyState"(value: $RenderStateShard$TransparencyStateShard$$Type)
set "writeMaskState"(value: $RenderStateShard$WriteMaskStateShard$$Type)
}
}

declare module "net.minecraft.client.renderer.BlockEntityWithoutLevelRenderer" {
import { $ProfilerFiller$$Type } from "net.minecraft.util.profiling.ProfilerFiller"
import { $Executor$$Type } from "java.util.concurrent.Executor"
import { $ResourceManagerReloadListener } from "net.minecraft.server.packs.resources.ResourceManagerReloadListener"
import { $ResourceManager$$Type } from "net.minecraft.server.packs.resources.ResourceManager"
import { $CompletableFuture } from "java.util.concurrent.CompletableFuture"
import { $PreparableReloadListener$PreparationBarrier$$Type } from "net.minecraft.server.packs.resources.PreparableReloadListener$PreparationBarrier"
import { $ItemDisplayContext$$Type } from "net.minecraft.world.item.ItemDisplayContext"
import { $PoseStack$$Type } from "com.mojang.blaze3d.vertex.PoseStack"
import { $EntityModelSet$$Type } from "net.minecraft.client.model.geom.EntityModelSet"
import { $ItemStack$$Type } from "net.minecraft.world.item.ItemStack"
import { $MultiBufferSource$$Type } from "net.minecraft.client.renderer.MultiBufferSource"
import { $BlockEntityRenderDispatcher, $BlockEntityRenderDispatcher$$Type } from "net.minecraft.client.renderer.blockentity.BlockEntityRenderDispatcher"

export class $BlockEntityWithoutLevelRenderer implements $ResourceManagerReloadListener {
readonly "blockEntityRenderDispatcher": $BlockEntityRenderDispatcher

constructor(blockEntityRenderDispatcher0: $BlockEntityRenderDispatcher$$Type, entityModelSet1: $EntityModelSet$$Type)

public "getName"(): string
public "onResourceManagerReload"(resourceManager0: $ResourceManager$$Type): void
public "reload"(preparationBarrier0: $PreparableReloadListener$PreparationBarrier$$Type, resourceManager1: $ResourceManager$$Type, profilerFiller2: $ProfilerFiller$$Type, profilerFiller3: $ProfilerFiller$$Type, executor4: $Executor$$Type, executor5: $Executor$$Type): $CompletableFuture<void>
public "renderByItem"(itemStack0: $ItemStack$$Type, itemDisplayContext1: $ItemDisplayContext$$Type, poseStack2: $PoseStack$$Type, multiBufferSource3: $MultiBufferSource$$Type, int4: integer, int5: integer): void
get "name"(): string
}
}

declare module "net.minecraft.client.renderer.item.ClampedItemPropertyFunction" {
import { $LivingEntity$$Type } from "net.minecraft.world.entity.LivingEntity"
import { $ItemPropertyFunction } from "net.minecraft.client.renderer.item.ItemPropertyFunction"
import { $ClientLevel$$Type } from "net.minecraft.client.multiplayer.ClientLevel"
import { $ItemStack$$Type } from "net.minecraft.world.item.ItemStack"

export interface $ClampedItemPropertyFunction extends $ItemPropertyFunction {
/** @deprecated */
"call"(itemStack0: $ItemStack$$Type, clientLevel1: $ClientLevel$$Type, livingEntity2: $LivingEntity$$Type, int3: integer): float
"unclampedCall"(itemStack0: $ItemStack$$Type, clientLevel1: $ClientLevel$$Type, livingEntity2: $LivingEntity$$Type, int3: integer): float
}

export namespace $ClampedItemPropertyFunction {
const probejs$$marker: never
}
export abstract class $ClampedItemPropertyFunction$$Static implements $ClampedItemPropertyFunction {
}
}

declare module "net.minecraft.client.renderer.debug.BrainDebugRenderer" {
import { $DebugRenderer$SimpleDebugRenderer } from "net.minecraft.client.renderer.debug.DebugRenderer$SimpleDebugRenderer"
import { $Minecraft$$Type } from "net.minecraft.client.Minecraft"
import { $BlockPos$$Type } from "net.minecraft.core.BlockPos"
import { $BrainDebugRenderer$PoiInfo$$Type } from "net.minecraft.client.renderer.debug.BrainDebugRenderer$PoiInfo"
import { $BrainDebugRenderer$BrainDump$$Type } from "net.minecraft.client.renderer.debug.BrainDebugRenderer$BrainDump"
import { $MultiBufferSource$$Type } from "net.minecraft.client.renderer.MultiBufferSource"
import { $PoseStack$$Type } from "com.mojang.blaze3d.vertex.PoseStack"

export class $BrainDebugRenderer implements $DebugRenderer$SimpleDebugRenderer {
constructor(minecraft0: $Minecraft$$Type)

public "addOrUpdateBrainDump"(brainDump0: $BrainDebugRenderer$BrainDump$$Type): void
public "addPoi"(poiInfo0: $BrainDebugRenderer$PoiInfo$$Type): void
public "clear"(): void
public "removeBrainDump"(int0: integer): void
public "removePoi"(blockPos0: $BlockPos$$Type): void
public "render"(poseStack0: $PoseStack$$Type, multiBufferSource1: $MultiBufferSource$$Type, double2: double, double3: double, double4: double): void
public "setFreeTicketCount"(blockPos0: $BlockPos$$Type, int1: integer): void
}
}

declare module "net.minecraft.client.renderer.blockentity.BlockEntityRenderDispatcher" {
import { $Camera, $Camera$$Type } from "net.minecraft.client.Camera"
import { $Font, $Font$$Type } from "net.minecraft.client.gui.Font"
import { $ProfilerFiller$$Type } from "net.minecraft.util.profiling.ProfilerFiller"
import { $Executor$$Type } from "java.util.concurrent.Executor"
import { $ResourceManagerReloadListener } from "net.minecraft.server.packs.resources.ResourceManagerReloadListener"
import { $ResourceManager$$Type } from "net.minecraft.server.packs.resources.ResourceManager"
import { $CompletableFuture } from "java.util.concurrent.CompletableFuture"
import { $BlockEntity, $BlockEntity$$Type } from "net.minecraft.world.level.block.entity.BlockEntity"
import { $Supplier$$Type } from "java.util.function.Supplier"
import { $BlockEntityRenderer } from "net.minecraft.client.renderer.blockentity.BlockEntityRenderer"
import { $ItemRenderer } from "net.minecraft.client.renderer.entity.ItemRenderer"
import { $PreparableReloadListener$PreparationBarrier$$Type } from "net.minecraft.server.packs.resources.PreparableReloadListener$PreparationBarrier"
import { $BlockRenderDispatcher } from "net.minecraft.client.renderer.block.BlockRenderDispatcher"
import { $PoseStack$$Type } from "com.mojang.blaze3d.vertex.PoseStack"
import { $EntityModelSet$$Type } from "net.minecraft.client.model.geom.EntityModelSet"
import { $CallbackInfo$$Type } from "org.spongepowered.asm.mixin.injection.callback.CallbackInfo"
import { $HitResult, $HitResult$$Type } from "net.minecraft.world.phys.HitResult"
import { $AccessorBlockEntityRenderDispatcher } from "at.petrak.hexcasting.mixin.accessor.client.AccessorBlockEntityRenderDispatcher"
import { $EntityRenderDispatcher } from "net.minecraft.client.renderer.entity.EntityRenderDispatcher"
import { $Level, $Level$$Type } from "net.minecraft.world.level.Level"
import { $MultiBufferSource$$Type } from "net.minecraft.client.renderer.MultiBufferSource"

export class $BlockEntityRenderDispatcher implements $ResourceManagerReloadListener, $AccessorBlockEntityRenderDispatcher {
readonly "font": $Font

constructor(font0: $Font$$Type, entityModelSet1: $EntityModelSet$$Type, supplier2: $Supplier$$Type<$BlockRenderDispatcher>, supplier3: $Supplier$$Type<$ItemRenderer>, supplier4: $Supplier$$Type<$EntityRenderDispatcher>)

public "getName"(): string
public "getRenderer"<E extends $BlockEntity>(e0: E): $BlockEntityRenderer<E>
public "handler$chp000$render"(blockEntity: $BlockEntity$$Type, f: float, poseStack: $PoseStack$$Type, multiBufferSource: $MultiBufferSource$$Type, info: $CallbackInfo$$Type): void
public "onResourceManagerReload"(resourceManager0: $ResourceManager$$Type): void
public "prepare"(level0: $Level$$Type, camera1: $Camera$$Type, hitResult2: $HitResult$$Type): void
public "reload"(preparationBarrier0: $PreparableReloadListener$PreparationBarrier$$Type, resourceManager1: $ResourceManager$$Type, profilerFiller2: $ProfilerFiller$$Type, profilerFiller3: $ProfilerFiller$$Type, executor4: $Executor$$Type, executor5: $Executor$$Type): $CompletableFuture<void>
public "render"<E extends $BlockEntity>(e0: E, float1: float, poseStack2: $PoseStack$$Type, multiBufferSource3: $MultiBufferSource$$Type): void
public "renderItem"<E extends $BlockEntity>(e0: E, poseStack1: $PoseStack$$Type, multiBufferSource2: $MultiBufferSource$$Type, int3: integer, int4: integer): boolean
public "setLevel"(level0: $Level$$Type): void
get "camera"(): $Camera
set "camera"(value: $Camera$$Type)
get "cameraHitResult"(): $HitResult
set "cameraHitResult"(value: $HitResult$$Type)
get "level"(): $Level
set "level"(value: $Level$$Type)
get "name"(): string
}
}

