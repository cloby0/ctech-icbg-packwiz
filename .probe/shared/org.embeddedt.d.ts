declare module "org.embeddedt.embeddium.client.gui.options.OptionIdentifier" {
import { $ResourceLocation$$Type } from "net.minecraft.resources.ResourceLocation"
import { $Class, $Class$$Type } from "java.lang.Class"

export class $OptionIdentifier<T = any> {
static readonly "EMPTY": $OptionIdentifier<void>

public static "create"(resourceLocation0: $ResourceLocation$$Type): $OptionIdentifier<void>
public static "create"<T>(string0: string, string1: string, class2: $Class$$Type<T>): $OptionIdentifier<T>
public static "create"(string0: string, string1: string): $OptionIdentifier<void>
public static "create"<T>(resourceLocation0: $ResourceLocation$$Type, class1: $Class$$Type<T>): $OptionIdentifier<T>
public "getModId"(): string
public "getPath"(): string
public "getType"(): $Class<T>
public static "isPresent"(optionIdentifier0: $OptionIdentifier$$Type<any>): boolean
public "matches"(resourceLocation0: $ResourceLocation$$Type): boolean
public "matches"(optionIdentifier0: $OptionIdentifier$$Type<any>): boolean
get "modId"(): string
get "path"(): string
get "type"(): $Class<T>
}
}

declare module "org.embeddedt.embeddium.model.EpsilonizableBlockElement" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $EpsilonizableBlockElement {
"embeddium$epsilonize"(): void
}

export namespace $EpsilonizableBlockElement {
const probejs$$marker: never
}
export abstract class $EpsilonizableBlockElement$$Static implements $EpsilonizableBlockElement {
}
}

declare module "org.embeddedt.modernfix.duck.ITimeTrackingServer" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $ITimeTrackingServer {
"mfix$getLastTickStartTime"(): long
}

export namespace $ITimeTrackingServer {
const probejs$$marker: never
}
export abstract class $ITimeTrackingServer$$Static implements $ITimeTrackingServer {
}
}

declare module "org.embeddedt.embeddium.api.model.EmbeddiumBakedModelExtension" {
import { $BlockState$$Type } from "net.minecraft.world.level.block.state.BlockState"
import { $RenderType$$Type } from "net.minecraft.client.renderer.RenderType"

export interface $EmbeddiumBakedModelExtension {
"useAmbientOcclusionWithLightEmission"(blockState0: $BlockState$$Type, renderType1: $RenderType$$Type): boolean
}

export namespace $EmbeddiumBakedModelExtension {
const probejs$$marker: never
}
export abstract class $EmbeddiumBakedModelExtension$$Static implements $EmbeddiumBakedModelExtension {
}
}

declare module "org.embeddedt.modernfix.duck.IBlockState" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $IBlockState {
"clearCache"(): void
"isCacheInvalid"(): boolean
get "cacheInvalid"(): boolean
}

export namespace $IBlockState {
const probejs$$marker: never
}
export abstract class $IBlockState$$Static implements $IBlockState {
}
}

declare module "org.embeddedt.embeddium.api.OptionGUIConstructionEvent" {
import { $EventHandlerRegistrar } from "org.embeddedt.embeddium.api.eventbus.EventHandlerRegistrar"
import { $OptionPage, $OptionPage$$Type } from "me.jellysquid.mods.sodium.client.gui.options.OptionPage"
import { $List, $List$$Type } from "java.util.List"
import { $EmbeddiumEvent } from "org.embeddedt.embeddium.api.eventbus.EmbeddiumEvent"

export class $OptionGUIConstructionEvent extends $EmbeddiumEvent {
static readonly "BUS": $EventHandlerRegistrar<$OptionGUIConstructionEvent>

constructor()
constructor(list0: $List$$Type<$OptionPage$$Type>)

public "addPage"(optionPage0: $OptionPage$$Type): void
public "getPages"(): $List<$OptionPage>
get "pages"(): $List<$OptionPage>
}
}

declare module "org.embeddedt.modernfix.forge.recipe.ExtendedIngredient" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $ExtendedIngredient {
"mfix$clearReference"(): void
"mfix$hasNoElements"(): boolean
}

export namespace $ExtendedIngredient {
const probejs$$marker: never
}
export abstract class $ExtendedIngredient$$Static implements $ExtendedIngredient {
}
}

declare module "org.embeddedt.embeddium.render.matrix_stack.CachingPoseStack" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $CachingPoseStack {
"embeddium$setCachingEnabled"(boolean0: boolean): void
}

export namespace $CachingPoseStack {
const probejs$$marker: never
}
export abstract class $CachingPoseStack$$Static implements $CachingPoseStack {
}
}

declare module "org.embeddedt.modernfix.duck.IProfilingServerFunctionManager" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $IProfilingServerFunctionManager {
"mfix$getProfilingResults"(): string
}

export namespace $IProfilingServerFunctionManager {
const probejs$$marker: never
}
export abstract class $IProfilingServerFunctionManager$$Static implements $IProfilingServerFunctionManager {
}
}

declare module "org.embeddedt.embeddium.render.entity.ModelPartExtended" {
import { $List } from "java.util.List"
import { $Map } from "java.util.Map"
import { $Optional } from "java.util.Optional"
import { $ModelPart, $ModelPart$$Type } from "net.minecraft.client.model.geom.ModelPart"

export interface $ModelPartExtended {
"embeddium$asOptional"(): $Optional<$ModelPart>
"embeddium$getDescendantsByName"(): $Map<string, $ModelPart>
"embeddium$getPartsList"(): $List<$ModelPart>
}

export namespace $ModelPartExtended {
function of(modelPart0: $ModelPart$$Type): $ModelPartExtended
}
export abstract class $ModelPartExtended$$Static implements $ModelPartExtended {
static "of"(modelPart0: $ModelPart$$Type): $ModelPartExtended
}
}

declare module "org.embeddedt.modernfix.duck.suspend_integrated_server_during_load.IDeferrableIntegratedServer" {
import { $ResourceLocation } from "net.minecraft.resources.ResourceLocation"

export interface $IDeferrableIntegratedServer {
"mfix$markClientLoadFinished"(): void
}

export namespace $IDeferrableIntegratedServer {
const CLIENT_LOAD_SENTINEL: $ResourceLocation
}
export abstract class $IDeferrableIntegratedServer$$Static implements $IDeferrableIntegratedServer {
static readonly "CLIENT_LOAD_SENTINEL": $ResourceLocation

}
}

declare module "org.embeddedt.embeddium.api.eventbus.EmbeddiumEvent" {
import { $Event } from "net.minecraftforge.eventbus.api.Event"

export class $EmbeddiumEvent extends $Event {
constructor()

}
}

declare module "org.embeddedt.embeddium.api.ChunkMeshEvent" {
import { $EventHandlerRegistrar } from "org.embeddedt.embeddium.api.eventbus.EventHandlerRegistrar"
import { $MeshAppender, $MeshAppender$$Type } from "org.embeddedt.embeddium.api.MeshAppender"
import { $List } from "java.util.List"
import { $EmbeddiumEvent } from "org.embeddedt.embeddium.api.eventbus.EmbeddiumEvent"
import { $SectionPos, $SectionPos$$Type } from "net.minecraft.core.SectionPos"
import { $Level, $Level$$Type } from "net.minecraft.world.level.Level"

export class $ChunkMeshEvent extends $EmbeddiumEvent {
static readonly "BUS": $EventHandlerRegistrar<$ChunkMeshEvent>

constructor()

public "addMeshAppender"(meshAppender0: $MeshAppender$$Type): void
public "getSectionOrigin"(): $SectionPos
public "getWorld"(): $Level
public static "post"(level0: $Level$$Type, sectionPos1: $SectionPos$$Type): $List<$MeshAppender>
get "sectionOrigin"(): $SectionPos
get "world"(): $Level
}
}

declare module "org.embeddedt.embeddium.api.ChunkDataBuiltEvent" {
import { $EventHandlerRegistrar } from "org.embeddedt.embeddium.api.eventbus.EventHandlerRegistrar"
import { $SectionInfoBuilder } from "org.embeddedt.embeddium.api.render.chunk.SectionInfoBuilder"
import { $BuiltSectionInfo$Builder$$Type } from "me.jellysquid.mods.sodium.client.render.chunk.data.BuiltSectionInfo$Builder"
import { $EmbeddiumEvent } from "org.embeddedt.embeddium.api.eventbus.EmbeddiumEvent"

export class $ChunkDataBuiltEvent extends $EmbeddiumEvent {
static readonly "BUS": $EventHandlerRegistrar<$ChunkDataBuiltEvent>

constructor()
constructor(builder0: $BuiltSectionInfo$Builder$$Type)

public "getDataBuilder"(): $SectionInfoBuilder
get "dataBuilder"(): $SectionInfoBuilder
}
}

declare module "org.embeddedt.embeddium.api.MeshAppender$Context" {
import { $ChunkBuildBuffers, $ChunkBuildBuffers$$Type } from "me.jellysquid.mods.sodium.client.render.chunk.compile.ChunkBuildBuffers"
import { $RenderType, $RenderType$$Type } from "net.minecraft.client.renderer.RenderType"
import { $Record } from "java.lang.Record"
import { $SectionPos, $SectionPos$$Type } from "net.minecraft.core.SectionPos"
import { $Function, $Function$$Type } from "java.util.function.Function"
import { $VertexConsumer } from "com.mojang.blaze3d.vertex.VertexConsumer"
import { $BlockAndTintGetter, $BlockAndTintGetter$$Type } from "net.minecraft.world.level.BlockAndTintGetter"

export class $MeshAppender$Context extends $Record {
constructor(vertexConsumerProvider: $Function$$Type<$RenderType$$Type, $VertexConsumer>, blockRenderView: $BlockAndTintGetter$$Type, sectionOrigin: $SectionPos$$Type, sodiumBuildBuffers: $ChunkBuildBuffers$$Type)

public "blockRenderView"(): $BlockAndTintGetter
public "sectionOrigin"(): $SectionPos
public "sodiumBuildBuffers"(): $ChunkBuildBuffers
public "vertexConsumerProvider"(): $Function<$RenderType, $VertexConsumer>
}
}

declare module "org.embeddedt.modernfix.common.mixin.perf.optimize_surface_rules.BiomeManagerAccessor" {
import { $BiomeManager$NoiseBiomeSource } from "net.minecraft.world.level.biome.BiomeManager$NoiseBiomeSource"

export interface $BiomeManagerAccessor {
"mfix$getBiomeSource"(): $BiomeManager$NoiseBiomeSource
"mfix$getZoomSeed"(): long
}

export namespace $BiomeManagerAccessor {
const probejs$$marker: never
}
export abstract class $BiomeManagerAccessor$$Static implements $BiomeManagerAccessor {
}
}

declare module "org.embeddedt.embeddium.api.render.chunk.SectionInfoBuilder" {
import { $Predicate$$Type } from "java.util.function.Predicate"
import { $BlockEntity$$Type } from "net.minecraft.world.level.block.entity.BlockEntity"
import { $TextureAtlasSprite$$Type } from "net.minecraft.client.renderer.texture.TextureAtlasSprite"

export interface $SectionInfoBuilder {
"addBlockEntity"(blockEntity0: $BlockEntity$$Type, boolean1: boolean): void
"addSprite"(textureAtlasSprite0: $TextureAtlasSprite$$Type): void
"removeBlockEntitiesIf"(predicate0: $Predicate$$Type<$BlockEntity$$Type>): void
}

export namespace $SectionInfoBuilder {
const probejs$$marker: never
}
export abstract class $SectionInfoBuilder$$Static implements $SectionInfoBuilder {
}
}

declare module "org.embeddedt.embeddium.api.MeshAppender" {
import { $MeshAppender$Context$$Type } from "org.embeddedt.embeddium.api.MeshAppender$Context"

export interface $MeshAppender {
"render"(context0: $MeshAppender$Context$$Type): void
}

export namespace $MeshAppender {
const probejs$$marker: never
}
export abstract class $MeshAppender$$Static implements $MeshAppender {
}
}

declare module "org.embeddedt.embeddium.api.OptionPageConstructionEvent" {
import { $EventHandlerRegistrar } from "org.embeddedt.embeddium.api.eventbus.EventHandlerRegistrar"
import { $OptionIdentifier, $OptionIdentifier$$Type } from "org.embeddedt.embeddium.client.gui.options.OptionIdentifier"
import { $List } from "java.util.List"
import { $Component, $Component$$Type } from "net.minecraft.network.chat.Component"
import { $OptionGroup, $OptionGroup$$Type } from "me.jellysquid.mods.sodium.client.gui.options.OptionGroup"
import { $EmbeddiumEvent } from "org.embeddedt.embeddium.api.eventbus.EmbeddiumEvent"

export class $OptionPageConstructionEvent extends $EmbeddiumEvent {
static readonly "BUS": $EventHandlerRegistrar<$OptionPageConstructionEvent>

constructor()
constructor(optionIdentifier0: $OptionIdentifier$$Type<void>, component1: $Component$$Type)

public "addGroup"(optionGroup0: $OptionGroup$$Type): void
public "getAdditionalGroups"(): $List<$OptionGroup>
public "getId"(): $OptionIdentifier<void>
public "getName"(): $Component
get "additionalGroups"(): $List<$OptionGroup>
get "id"(): $OptionIdentifier<void>
get "name"(): $Component
}
}

declare module "org.embeddedt.embeddium.api.eventbus.EventHandlerRegistrar" {
import { $EventHandlerRegistrar$Handler$$Type } from "org.embeddedt.embeddium.api.eventbus.EventHandlerRegistrar$Handler"
import { $EmbeddiumEvent, $EmbeddiumEvent$$Type } from "org.embeddedt.embeddium.api.eventbus.EmbeddiumEvent"

export class $EventHandlerRegistrar<T extends $EmbeddiumEvent = $EmbeddiumEvent> {
constructor()

public "addListener"(handler0: $EventHandlerRegistrar$Handler$$Type<T>): void
public "post"(t0: T): boolean
}
}

declare module "org.embeddedt.modernfix.duck.release_protochunks.ISuspendedHolderTrackingChunkMap" {
import { $ChunkPos$$Type } from "net.minecraft.world.level.ChunkPos"
import { $Executor } from "java.util.concurrent.Executor"

export interface $ISuspendedHolderTrackingChunkMap {
"mfix$getMainThreadExecutor"(): $Executor
"mfix$markForSuspensionCheck"(chunkPos0: $ChunkPos$$Type): void
}

export namespace $ISuspendedHolderTrackingChunkMap {
const probejs$$marker: never
}
export abstract class $ISuspendedHolderTrackingChunkMap$$Static implements $ISuspendedHolderTrackingChunkMap {
}
}

declare module "org.embeddedt.embeddium.api.render.clouds.ModifyCloudRenderingEvent" {
import { $EventHandlerRegistrar } from "org.embeddedt.embeddium.api.eventbus.EventHandlerRegistrar"
import { $EmbeddiumEvent } from "org.embeddedt.embeddium.api.eventbus.EmbeddiumEvent"

export class $ModifyCloudRenderingEvent extends $EmbeddiumEvent {
static readonly "BUS": $EventHandlerRegistrar<$ModifyCloudRenderingEvent>

constructor()
constructor(int0: integer)

public "getCloudRenderDistance"(): integer
public "setCloudRenderDistance"(int0: integer): void
get "cloudRenderDistance"(): integer
set "cloudRenderDistance"(value: integer)
}
}

declare module "org.embeddedt.embeddium.api.eventbus.EventHandlerRegistrar$Handler" {
import { $EmbeddiumEvent, $EmbeddiumEvent$$Type } from "org.embeddedt.embeddium.api.eventbus.EmbeddiumEvent"

export interface $EventHandlerRegistrar$Handler<T extends $EmbeddiumEvent = $EmbeddiumEvent> {
"acceptEvent"(t0: T): void
}

export namespace $EventHandlerRegistrar$Handler {
const probejs$$marker: never
}
export abstract class $EventHandlerRegistrar$Handler$$Static<T extends $EmbeddiumEvent = $EmbeddiumEvent> implements $EventHandlerRegistrar$Handler<T> {
}
}

declare module "org.embeddedt.modernfix.duck.release_protochunks.IClearableChunkHolder" {
import { $AtomicInteger } from "java.util.concurrent.atomic.AtomicInteger"

export interface $IClearableChunkHolder {
"mfix$getGenerationRefCount"(): $AtomicInteger
"mfix$resetProtoChunkFutures"(): void
}

export namespace $IClearableChunkHolder {
const probejs$$marker: never
}
export abstract class $IClearableChunkHolder$$Static implements $IClearableChunkHolder {
}
}

declare module "org.embeddedt.embeddium.api.OptionGroupConstructionEvent" {
import { $EventHandlerRegistrar } from "org.embeddedt.embeddium.api.eventbus.EventHandlerRegistrar"
import { $OptionIdentifier, $OptionIdentifier$$Type } from "org.embeddedt.embeddium.client.gui.options.OptionIdentifier"
import { $List, $List$$Type } from "java.util.List"
import { $EmbeddiumEvent } from "org.embeddedt.embeddium.api.eventbus.EmbeddiumEvent"
import { $Option, $Option$$Type } from "me.jellysquid.mods.sodium.client.gui.options.Option"

export class $OptionGroupConstructionEvent extends $EmbeddiumEvent {
static readonly "BUS": $EventHandlerRegistrar<$OptionGroupConstructionEvent>

constructor(optionIdentifier0: $OptionIdentifier$$Type<void>, list1: $List$$Type<$Option$$Type<any>>)
constructor()

public "getId"(): $OptionIdentifier<void>
public "getOptions"(): $List<$Option<any>>
get "id"(): $OptionIdentifier<void>
get "options"(): $List<$Option<any>>
}
}

declare module "org.embeddedt.embeddium.api.render.chunk.RenderSectionDistanceFilter" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $RenderSectionDistanceFilter {
"isWithinDistance"(float0: float, float1: float, float2: float, float3: float): boolean
}

export namespace $RenderSectionDistanceFilter {
const DEFAULT: $RenderSectionDistanceFilter
}
export abstract class $RenderSectionDistanceFilter$$Static implements $RenderSectionDistanceFilter {
static readonly "DEFAULT": $RenderSectionDistanceFilter

}
}

declare module "org.embeddedt.embeddium.render.chunk.sorting.TranslucentQuadAnalyzer$Level" {
import { $Enum } from "java.lang.Enum"

export class $TranslucentQuadAnalyzer$Level extends $Enum<$TranslucentQuadAnalyzer$Level> {
static readonly "DYNAMIC": $TranslucentQuadAnalyzer$Level
static readonly "NONE": $TranslucentQuadAnalyzer$Level
static readonly "STATIC": $TranslucentQuadAnalyzer$Level
static readonly "VALUES": $TranslucentQuadAnalyzer$Level[]

public static "valueOf"(string0: string): $TranslucentQuadAnalyzer$Level
public static "values"(): $TranslucentQuadAnalyzer$Level[]
}
}

declare module "org.embeddedt.modernfix.duck.IChunkGenerator" {
import { $RegistryAccess$Frozen$$Type } from "net.minecraft.core.RegistryAccess$Frozen"
import { $Path$$Type } from "java.nio.file.Path"

export interface $IChunkGenerator {
"mfix$setStrongholdCachePath"(path0: $Path$$Type, frozen1: $RegistryAccess$Frozen$$Type): void
}

export namespace $IChunkGenerator {
const probejs$$marker: never
}
export abstract class $IChunkGenerator$$Static implements $IChunkGenerator {
}
}

declare module "org.embeddedt.embeddium.render.chunk.sorting.TranslucentQuadAnalyzer$SortState" {
import { $TranslucentQuadAnalyzer$Level, $TranslucentQuadAnalyzer$Level$$Type } from "org.embeddedt.embeddium.render.chunk.sorting.TranslucentQuadAnalyzer$Level"
import { $Vector3f, $Vector3f$$Type } from "org.joml.Vector3f"
import { $Record } from "java.lang.Record"
import { $BitSet, $BitSet$$Type } from "java.util.BitSet"

export class $TranslucentQuadAnalyzer$SortState extends $Record {
static readonly "NONE": $TranslucentQuadAnalyzer$SortState

constructor(level: $TranslucentQuadAnalyzer$Level$$Type, centers: float[], normalSigns: $BitSet$$Type, sharedNormal: $Vector3f$$Type)

public "centers"(): float[]
public "compactForStorage"(): $TranslucentQuadAnalyzer$SortState
public "level"(): $TranslucentQuadAnalyzer$Level
public "normalSigns"(): $BitSet
public "requiresDynamicSorting"(): boolean
public "sharedNormal"(): $Vector3f
}
}

declare module "org.embeddedt.modernfix.common.mixin.bugfix.entity_pose_stack.PoseStackAccessor" {
import { $PoseStack$Pose } from "com.mojang.blaze3d.vertex.PoseStack$Pose"
import { $Deque } from "java.util.Deque"

export interface $PoseStackAccessor {
"getPoseStack"(): $Deque<$PoseStack$Pose>
get "poseStack"(): $Deque<$PoseStack$Pose>
}

export namespace $PoseStackAccessor {
const probejs$$marker: never
}
export abstract class $PoseStackAccessor$$Static implements $PoseStackAccessor {
}
}

declare module "org.embeddedt.modernfix.forge.registry.DelegateHolder" {
import { $Registry } from "net.minecraft.core.Registry"
import { $ResourceKey$$Type } from "net.minecraft.resources.ResourceKey"
import { $Holder$Reference, $Holder$Reference$$Type } from "net.minecraft.core.Holder$Reference"

export interface $DelegateHolder<T = any> {
"mfix$getDelegate"(resourceKey0: $ResourceKey$$Type<$Registry<T>>): $Holder$Reference<T>
"mfix$setDelegate"(resourceKey0: $ResourceKey$$Type<$Registry<T>>, reference1: $Holder$Reference$$Type<T>): void
}

export namespace $DelegateHolder {
const probejs$$marker: never
}
export abstract class $DelegateHolder$$Static<T = any> implements $DelegateHolder<T> {
}
}

declare module "org.embeddedt.embeddium.api.render.chunk.RenderSectionDistanceFilterEvent" {
import { $EventHandlerRegistrar } from "org.embeddedt.embeddium.api.eventbus.EventHandlerRegistrar"
import { $EmbeddiumEvent } from "org.embeddedt.embeddium.api.eventbus.EmbeddiumEvent"
import { $RenderSectionDistanceFilter, $RenderSectionDistanceFilter$$Type } from "org.embeddedt.embeddium.api.render.chunk.RenderSectionDistanceFilter"

export class $RenderSectionDistanceFilterEvent extends $EmbeddiumEvent {
static readonly "BUS": $EventHandlerRegistrar<$RenderSectionDistanceFilterEvent>

constructor()

public "getFilter"(): $RenderSectionDistanceFilter
public "setFilter"(renderSectionDistanceFilter0: $RenderSectionDistanceFilter$$Type): void
get "filter"(): $RenderSectionDistanceFilter
set "filter"(value: $RenderSectionDistanceFilter$$Type)
}
}

declare module "org.embeddedt.modernfix.duck.IStructureCheck" {
import { $ChunkGeneratorStructureState$$Type } from "net.minecraft.world.level.chunk.ChunkGeneratorStructureState"

export interface $IStructureCheck {
"mfix$setStructureState"(chunkGeneratorStructureState0: $ChunkGeneratorStructureState$$Type): void
}

export namespace $IStructureCheck {
const probejs$$marker: never
}
export abstract class $IStructureCheck$$Static implements $IStructureCheck {
}
}

