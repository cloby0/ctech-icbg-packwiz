declare module "com.supermartijn642.fusion.entity.model.EntityLayerProperties$ModelOption" {
import { $ResourceLocation, $ResourceLocation$$Type } from "net.minecraft.resources.ResourceLocation"
import { $List, $List$$Type } from "java.util.List"
import { $ModelPart, $ModelPart$$Type } from "net.minecraft.client.model.geom.ModelPart"

export class $EntityLayerProperties$ModelOption {
constructor(model: $ModelPart$$Type, isVanillaModel: boolean, textures: $List$$Type<$ResourceLocation$$Type>, weight: double, scaling: float)

public "isVanillaModel"(): boolean
public "model"(): $ModelPart
public "scaling"(): float
public "textures"(): $List<$ResourceLocation>
public "weight"(): double
get "vanillaModel"(): boolean
}
}

declare module "com.supermartijn642.fusion.api.texture.SpriteCreationContext" {
import { $ResourceLocation } from "net.minecraft.resources.ResourceLocation"
import { $TextureAtlas } from "net.minecraft.client.renderer.texture.TextureAtlas"
import { $NativeImage } from "com.mojang.blaze3d.platform.NativeImage"
import { $TextureAtlasSprite } from "net.minecraft.client.renderer.texture.TextureAtlasSprite"

export interface $SpriteCreationContext {
"createOriginalSprite"(): $TextureAtlasSprite
"getAtlas"(): $TextureAtlas
"getAtlasHeight"(): integer
"getAtlasWidth"(): integer
"getMipmapLevels"(): integer
"getSpriteHeight"(): integer
"getSpritePositionX"(): integer
"getSpritePositionY"(): integer
"getSpriteWidth"(): integer
"getTextureBuffers"(): $NativeImage[]
"getTextureHeight"(): integer
"getTextureIdentifier"(): $ResourceLocation
"getTextureWidth"(): integer
get "atlas"(): $TextureAtlas
get "atlasHeight"(): integer
get "atlasWidth"(): integer
get "mipmapLevels"(): integer
get "spriteHeight"(): integer
get "spritePositionX"(): integer
get "spritePositionY"(): integer
get "spriteWidth"(): integer
get "textureBuffers"(): $NativeImage[]
get "textureHeight"(): integer
get "textureIdentifier"(): $ResourceLocation
get "textureWidth"(): integer
}

export namespace $SpriteCreationContext {
const probejs$$marker: never
}
export abstract class $SpriteCreationContext$$Static implements $SpriteCreationContext {
}
}

declare module "com.supermartijn642.fusion.api.model.ModelType" {
import { $BakedModel } from "net.minecraft.client.resources.model.BakedModel"
import { $BlockModel } from "net.minecraft.client.renderer.block.model.BlockModel"
import { $ResourceLocation } from "net.minecraft.resources.ResourceLocation"
import { $JsonObject, $JsonObject$$Type } from "com.google.gson.JsonObject"
import { $List } from "java.util.List"
import { $ModelBakingContext$$Type } from "com.supermartijn642.fusion.api.model.ModelBakingContext"
import { $Collection } from "java.util.Collection"
import { $Serializer } from "com.supermartijn642.fusion.api.util.Serializer"

export interface $ModelType<T = any> extends $Serializer<T> {
"bake"(context: $ModelBakingContext$$Type, data: T): $BakedModel
"deserialize"(json: $JsonObject$$Type): T
"getAsVanillaModel"(data: T): $BlockModel
"getModelDependencies"(data: T): $Collection<$ResourceLocation>
"getParentModels"(data: T): $List<$ResourceLocation>
"serialize"(data: T): $JsonObject
}

export namespace $ModelType {
const probejs$$marker: never
}
export abstract class $ModelType$$Static<T = any> implements $ModelType<T> {
}
}

declare module "com.supermartijn642.fusion.api.texture.SpritePreparationContext" {
import { $ResourceLocation } from "net.minecraft.resources.ResourceLocation"
import { $AnimationMetadataSection } from "net.minecraft.client.resources.metadata.animation.AnimationMetadataSection"
import { $Pair } from "com.supermartijn642.fusion.api.util.Pair"

export interface $SpritePreparationContext {
"getAnimationMetadata"(): $AnimationMetadataSection
"getIdentifier"(): $ResourceLocation
"getOriginalFrameHeight"(): integer
"getOriginalFrameSize"(): $Pair<integer, integer>
"getOriginalFrameWith"(): integer
"getTextureHeight"(): integer
"getTextureWidth"(): integer
get "animationMetadata"(): $AnimationMetadataSection
get "identifier"(): $ResourceLocation
get "originalFrameHeight"(): integer
get "originalFrameSize"(): $Pair<integer, integer>
get "originalFrameWith"(): integer
get "textureHeight"(): integer
get "textureWidth"(): integer
}

export namespace $SpritePreparationContext {
const probejs$$marker: never
}
export abstract class $SpritePreparationContext$$Static implements $SpritePreparationContext {
}
}

declare module "com.supermartijn642.fusion.extensions.PackExtension" {
import { $FusionPackMetadata } from "com.supermartijn642.fusion.resources.FusionPackMetadata"

export interface $PackExtension {
"getFusionMetadata"(): $FusionPackMetadata
get "fusionMetadata"(): $FusionPackMetadata
}

export namespace $PackExtension {
const probejs$$marker: never
}
export abstract class $PackExtension$$Static implements $PackExtension {
}
}

declare module "com.supermartijn642.fusion.api.util.Serializer" {
import { $JsonObject, $JsonObject$$Type } from "com.google.gson.JsonObject"

export interface $Serializer<T = any> {
"deserialize"(json: $JsonObject$$Type): T
"serialize"(data: T): $JsonObject
}

export namespace $Serializer {
const probejs$$marker: never
}
export abstract class $Serializer$$Static<T = any> implements $Serializer<T> {
}
}

declare module "com.supermartijn642.fusion.api.model.ModelInstance" {
import { $BakedModel } from "net.minecraft.client.resources.model.BakedModel"
import { $BlockModel } from "net.minecraft.client.renderer.block.model.BlockModel"
import { $ResourceLocation } from "net.minecraft.resources.ResourceLocation"
import { $List } from "java.util.List"
import { $ModelBakingContext$$Type } from "com.supermartijn642.fusion.api.model.ModelBakingContext"
import { $Collection } from "java.util.Collection"
import { $ModelType, $ModelType$$Type } from "com.supermartijn642.fusion.api.model.ModelType"

export interface $ModelInstance<T = any> {
"bake"(context: $ModelBakingContext$$Type): $BakedModel
"getAsVanillaModel"(): $BlockModel
"getModelData"(): T
"getModelDependencies"(): $Collection<$ResourceLocation>
"getModelType"(): $ModelType<T>
"getParentModels"(): $List<$ResourceLocation>
get "asVanillaModel"(): $BlockModel
get "modelData"(): T
get "modelDependencies"(): $Collection<$ResourceLocation>
get "modelType"(): $ModelType<T>
get "parentModels"(): $List<$ResourceLocation>
}

export namespace $ModelInstance {
function of<T>(modelType: $ModelType$$Type<T>, modelData: T): $ModelInstance<T>
}
export abstract class $ModelInstance$$Static<T = any> implements $ModelInstance<T> {
static "of"<T>(modelType: $ModelType$$Type<T>, modelData: T): $ModelInstance<T>
}
}

declare module "com.supermartijn642.fusion.extensions.SpriteContentsExtension" {
import { $TextureType, $TextureType$$Type } from "com.supermartijn642.fusion.api.texture.TextureType"
import { $Pair, $Pair$$Type } from "com.supermartijn642.fusion.api.util.Pair"

export interface $SpriteContentsExtension {
"getFusionMetadata"(): $Pair<$TextureType<any>, any>
"setFusionMetadata"(metadata: $Pair$$Type<$TextureType$$Type<any>, any>): void
get "fusionMetadata"(): $Pair<$TextureType<any>, any>
set "fusionMetadata"(value: $Pair$$Type<$TextureType$$Type<any>, any>)
}

export namespace $SpriteContentsExtension {
const probejs$$marker: never
}
export abstract class $SpriteContentsExtension$$Static implements $SpriteContentsExtension {
}
}

declare module "com.supermartijn642.fusion.resources.FusionPackMetadata" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export class $FusionPackMetadata {
public "getMinimumVersion"(): string
public "getOverridesFolder"(): string
public "hasOverridesFolder"(): boolean
public "isMinVersionSatisfied"(): boolean
get "minimumVersion"(): string
get "overridesFolder"(): string
get "minVersionSatisfied"(): boolean
}
}

declare module "com.supermartijn642.fusion.api.texture.TextureType" {
import { $JsonObject, $JsonObject$$Type } from "com.google.gson.JsonObject"
import { $SpritePreparationContext$$Type } from "com.supermartijn642.fusion.api.texture.SpritePreparationContext"
import { $SpriteCreationContext$$Type } from "com.supermartijn642.fusion.api.texture.SpriteCreationContext"
import { $Serializer } from "com.supermartijn642.fusion.api.util.Serializer"
import { $Pair } from "com.supermartijn642.fusion.api.util.Pair"
import { $TextureAtlasSprite } from "net.minecraft.client.renderer.texture.TextureAtlasSprite"

export interface $TextureType<T = any> extends $Serializer<T> {
"createSprite"(context: $SpriteCreationContext$$Type, data: T): $TextureAtlasSprite
"deserialize"(json: $JsonObject$$Type): T
"getFrameSize"(context: $SpritePreparationContext$$Type, data: T): $Pair<integer, integer>
"serialize"(data: T): $JsonObject
}

export namespace $TextureType {
const probejs$$marker: never
}
export abstract class $TextureType$$Static<T = any> implements $TextureType<T> {
}
}

declare module "com.supermartijn642.fusion.entity.model.EntityLayerProperties" {
import { $ResourceLocation } from "net.minecraft.resources.ResourceLocation"
import { $EntityLayerProperties$ModelOption$$Type } from "com.supermartijn642.fusion.entity.model.EntityLayerProperties$ModelOption"
import { $Pair$$Type } from "com.supermartijn642.fusion.api.util.Pair"
import { $RandomSource } from "net.minecraft.util.RandomSource"
import { $ModelLayerLocation, $ModelLayerLocation$$Type } from "net.minecraft.client.model.geom.ModelLayerLocation"
import { $VanillaModelLayerProperties$$Type } from "com.supermartijn642.fusion.entity.VanillaModelLayerProperties"
import { $Consumer$$Type } from "java.util.function.Consumer"
import { $List$$Type } from "java.util.List"
import { $Triple } from "com.supermartijn642.fusion.util.Triple"
import { $Entity$$Type } from "net.minecraft.world.entity.Entity"
import { $EntityModelPredicate$$Type } from "com.supermartijn642.fusion.entity.model.predicates.EntityModelPredicate"
import { $ModelPart, $ModelPart$$Type } from "net.minecraft.client.model.geom.ModelPart"

export class $EntityLayerProperties {
static readonly "RANDOM": $RandomSource

constructor(identifier: $ModelLayerLocation$$Type, defaultModel: $List$$Type<$EntityLayerProperties$ModelOption$$Type>, conditionals: $List$$Type<$Pair$$Type<$EntityModelPredicate$$Type, $List$$Type<$EntityLayerProperties$ModelOption$$Type>>>)

public "chooseModel"(entity: $Entity$$Type): $Triple<$ModelPart, $ResourceLocation, float>
public "gatherModels"(output: $Consumer$$Type<$ModelPart$$Type>): void
public "identifier"(): $ModelLayerLocation
public "transformed"(properties: $VanillaModelLayerProperties$$Type): $EntityLayerProperties
}
}

declare module "com.supermartijn642.fusion.extensions.EntityExtension" {
import { $ResourceLocation, $ResourceLocation$$Type } from "net.minecraft.resources.ResourceLocation"
import { $Triple, $Triple$$Type } from "com.supermartijn642.fusion.util.Triple"
import { $ModelPart, $ModelPart$$Type } from "net.minecraft.client.model.geom.ModelPart"

export interface $EntityExtension {
"getFusionModel"(layerIndex: integer): $Triple<$ModelPart, $ResourceLocation, float>
"markFusionRecomputeModels"(): void
"setFusionModel"(layerIndex: integer, model: $Triple$$Type<$ModelPart$$Type, $ResourceLocation$$Type, float>): void
"shouldFusionRecomputeModel"(layerIndex: integer): boolean
}

export namespace $EntityExtension {
const probejs$$marker: never
}
export abstract class $EntityExtension$$Static implements $EntityExtension {
}
}

declare module "com.supermartijn642.fusion.extensions.BufferSourceExtension" {
import { $RenderType } from "net.minecraft.client.renderer.RenderType"

export interface $BufferSourceExtension {
"fusionGetLastRenderType"(): $RenderType
}

export namespace $BufferSourceExtension {
const probejs$$marker: never
}
export abstract class $BufferSourceExtension$$Static implements $BufferSourceExtension {
}
}

declare module "com.supermartijn642.fusion.entity.model.predicates.EntityModelPredicate" {
import { $Entity$$Type } from "net.minecraft.world.entity.Entity"
import { $Serializer } from "com.supermartijn642.fusion.api.util.Serializer"

export interface $EntityModelPredicate {
"getSerializer"(): $Serializer<$EntityModelPredicate>
"test"(entity: $Entity$$Type): boolean
get "serializer"(): $Serializer<$EntityModelPredicate>
}

export namespace $EntityModelPredicate {
const probejs$$marker: never
}
export abstract class $EntityModelPredicate$$Static implements $EntityModelPredicate {
}
}

declare module "com.supermartijn642.core.mixin.BlockPropertiesAccessor" {
import { $ResourceLocation } from "net.minecraft.resources.ResourceLocation"
import { $Supplier, $Supplier$$Type } from "java.util.function.Supplier"

export interface $BlockPropertiesAccessor {
"getLootTableSupplier"(): $Supplier<$ResourceLocation>
"setLootTableSupplier"(supplier: $Supplier$$Type<$ResourceLocation>): void
get "lootTableSupplier"(): $Supplier<$ResourceLocation>
set "lootTableSupplier"(value: $Supplier$$Type<$ResourceLocation>)
}

export namespace $BlockPropertiesAccessor {
const probejs$$marker: never
}
export abstract class $BlockPropertiesAccessor$$Static implements $BlockPropertiesAccessor {
}
}

declare module "com.supermartijn642.fusion.api.model.ModelBakingContext" {
import { $ResourceLocation, $ResourceLocation$$Type } from "net.minecraft.resources.ResourceLocation"
import { $SpriteIdentifier$$Type } from "com.supermartijn642.fusion.api.model.SpriteIdentifier"
import { $ModelInstance } from "com.supermartijn642.fusion.api.model.ModelInstance"
import { $TextureAtlasSprite } from "net.minecraft.client.renderer.texture.TextureAtlasSprite"
import { $ModelBaker } from "net.minecraft.client.resources.model.ModelBaker"
import { $ModelState } from "net.minecraft.client.resources.model.ModelState"

export interface $ModelBakingContext {
"getBlockTexture"(texture: $ResourceLocation$$Type): $TextureAtlasSprite
"getModel"(identifier: $ResourceLocation$$Type): $ModelInstance<any>
"getModelBaker"(): $ModelBaker
"getModelIdentifier"(): $ResourceLocation
"getTexture"(identifier: $SpriteIdentifier$$Type): $TextureAtlasSprite
"getTexture"(atlas: $ResourceLocation$$Type, texture: $ResourceLocation$$Type): $TextureAtlasSprite
"getTransformation"(): $ModelState
get "modelBaker"(): $ModelBaker
get "modelIdentifier"(): $ResourceLocation
get "transformation"(): $ModelState
}

export namespace $ModelBakingContext {
const probejs$$marker: never
}
export abstract class $ModelBakingContext$$Static implements $ModelBakingContext {
}
}

declare module "com.supermartijn642.fusion.api.util.Pair" {
import { $BiFunction$$Type } from "java.util.function.BiFunction"
import { $BiConsumer$$Type } from "java.util.function.BiConsumer"
import { $Function$$Type } from "java.util.function.Function"

export class $Pair<X = any, Y = any> {
public "apply"(consumer: $BiConsumer$$Type<X, Y>): void
public "flatMap"<S>(mapper: $BiFunction$$Type<X, Y, S>): S
public "left"(): X
public "map"<R, S>(mapLeft: $Function$$Type<X, R>, mapRight: $Function$$Type<Y, S>): $Pair<R, S>
public "mapLeft"<S>(mapper: $Function$$Type<X, S>): $Pair<S, Y>
public "mapRight"<S>(mapper: $Function$$Type<Y, S>): $Pair<X, S>
public static "of"<X, Y>(left: X, right: Y): $Pair<X, Y>
public "right"(): Y
}
}

declare module "com.supermartijn642.fusion.extensions.EntityRendererExtension" {
import { $List, $List$$Type } from "java.util.List"
import { $FusionModelPart, $FusionModelPart$$Type } from "com.supermartijn642.fusion.entity.model.FusionModelPart"

export interface $EntityRendererExtension {
"getFusionModelParts"(): $List<$FusionModelPart>
"setFusionModelParts"(parts: $List$$Type<$FusionModelPart$$Type>): void
get "fusionModelParts"(): $List<$FusionModelPart>
set "fusionModelParts"(value: $List$$Type<$FusionModelPart$$Type>)
}

export namespace $EntityRendererExtension {
const probejs$$marker: never
}
export abstract class $EntityRendererExtension$$Static implements $EntityRendererExtension {
}
}

declare module "com.supermartijn642.fusion.entity.model.FusionModelPart" {
import { $EntityLayerProperties$$Type } from "com.supermartijn642.fusion.entity.model.EntityLayerProperties"
import { $Entity$$Type } from "net.minecraft.world.entity.Entity"
import { $ModelPartData } from "me.jellysquid.mods.sodium.client.render.immediate.model.ModelPartData"
import { $ModelPartExtended } from "org.embeddedt.embeddium.render.entity.ModelPartExtended"
import { $VanillaModelLayerProperties$$Type } from "com.supermartijn642.fusion.entity.VanillaModelLayerProperties"
import { $SubModelPart, $SubModelPart$$Type } from "com.supermartijn642.fusion.entity.model.SubModelPart"
import { $VertexConsumer$$Type } from "com.mojang.blaze3d.vertex.VertexConsumer"
import { $MultiBufferSource$$Type } from "net.minecraft.client.renderer.MultiBufferSource"
import { $ModelPart$$Type } from "net.minecraft.client.model.geom.ModelPart"
import { $PoseStack$$Type } from "com.mojang.blaze3d.vertex.PoseStack"

export class $FusionModelPart extends $SubModelPart {
constructor(layerIndex: integer, original: $ModelPart$$Type)

public "clear"(): void
public static "from"(modelPart0: $ModelPart$$Type): $ModelPartData
public static "of"(modelPart0: $ModelPart$$Type): $ModelPartExtended
public "renderPart"(part: $SubModelPart$$Type, poseStack: $PoseStack$$Type, vertexConsumer: $VertexConsumer$$Type, i: integer, j: integer, f: float, g: float, h: float, k: float): void
public "setProperties"(properties: $EntityLayerProperties$$Type, vanillaProperties: $VanillaModelLayerProperties$$Type): void
public "setup"(entity: $Entity$$Type, bufferSource: $MultiBufferSource$$Type): void
}
}

declare module "com.supermartijn642.fusion.api.model.SpriteIdentifier" {
import { $ResourceLocation, $ResourceLocation$$Type } from "net.minecraft.resources.ResourceLocation"
import { $Material, $Material$$Type } from "net.minecraft.client.resources.model.Material"

export interface $SpriteIdentifier {
"getAtlas"(): $ResourceLocation
"getTexture"(): $ResourceLocation
"toMaterial"(): $Material
get "atlas"(): $ResourceLocation
get "texture"(): $ResourceLocation
}

export namespace $SpriteIdentifier {
function missing(): $SpriteIdentifier
function of(material: $Material$$Type): $SpriteIdentifier
function of(atlas: $ResourceLocation$$Type, texture: $ResourceLocation$$Type): $SpriteIdentifier
}
export abstract class $SpriteIdentifier$$Static implements $SpriteIdentifier {
static "missing"(): $SpriteIdentifier
static "of"(material: $Material$$Type): $SpriteIdentifier
static "of"(atlas: $ResourceLocation$$Type, texture: $ResourceLocation$$Type): $SpriteIdentifier
}
}

declare module "com.supermartijn642.fusion.entity.VanillaModelLayerProperties" {
import { $ModelLayerLocation$$Type } from "net.minecraft.client.model.geom.ModelLayerLocation"
import { $EntityRenderer$$Type } from "net.minecraft.client.renderer.entity.EntityRenderer"
import { $PoseStack$$Type } from "com.mojang.blaze3d.vertex.PoseStack"

export class $VanillaModelLayerProperties {
public static "get"(location: $ModelLayerLocation$$Type, renderer: $EntityRenderer$$Type<any>): $VanillaModelLayerProperties
public "getOffsetX"(): float
public "getOffsetY"(): float
public "getOffsetZ"(): float
public "shouldFlipX"(): boolean
public "shouldFlipY"(): boolean
public "shouldFlipZ"(): boolean
public "transform"(poseStack: $PoseStack$$Type): void
get "offsetX"(): float
get "offsetY"(): float
get "offsetZ"(): float
}
}

declare module "com.supermartijn642.fusion.extensions.BlockModelExtension" {
import { $ModelInstance, $ModelInstance$$Type } from "com.supermartijn642.fusion.api.model.ModelInstance"

export interface $BlockModelExtension {
"getFusionModel"(): $ModelInstance<any>
"setFusionModel"(model: $ModelInstance$$Type<any>): void
get "fusionModel"(): $ModelInstance<any>
set "fusionModel"(value: $ModelInstance$$Type<any>)
}

export namespace $BlockModelExtension {
const probejs$$marker: never
}
export abstract class $BlockModelExtension$$Static implements $BlockModelExtension {
}
}

declare module "com.supermartijn642.core.render.RenderWorldEvent" {
import { $Event } from "net.minecraftforge.eventbus.api.Event"
import { $PoseStack, $PoseStack$$Type } from "com.mojang.blaze3d.vertex.PoseStack"

export class $RenderWorldEvent extends $Event {
constructor()
constructor(poseStack: $PoseStack$$Type, partialTicks: float)

public "getPartialTicks"(): float
public "getPoseStack"(): $PoseStack
get "partialTicks"(): float
get "poseStack"(): $PoseStack
}
}

declare module "com.supermartijn642.fusion.entity.model.SubModelPart" {
import { $Consumer$$Type } from "java.util.function.Consumer"
import { $ModelPartData } from "me.jellysquid.mods.sodium.client.render.immediate.model.ModelPartData"
import { $FusionModelPart$$Type } from "com.supermartijn642.fusion.entity.model.FusionModelPart"
import { $ModelPartExtended } from "org.embeddedt.embeddium.render.entity.ModelPartExtended"
import { $ModelPart, $ModelPart$$Type } from "net.minecraft.client.model.geom.ModelPart"

export class $SubModelPart extends $ModelPart {
constructor(mainPart: $FusionModelPart$$Type)

public "finish"(): void
public static "from"(modelPart0: $ModelPart$$Type): $ModelPartData
public "mirror"(target: $ModelPart$$Type): void
public static "of"(modelPart0: $ModelPart$$Type): $ModelPartExtended
public "validateModelHasImportantChildren"(model: $ModelPart$$Type, missingPartOutput: $Consumer$$Type<string>): void
}
}

declare module "com.supermartijn642.fusion.util.Triple" {
import { $Record } from "java.lang.Record"

export class $Triple<X = any, Y = any, Z = any> extends $Record {
constructor(left: X, middle: Y, right: Z)

public "left"(): X
public "middle"(): Y
public static "of"<X, Y, Z>(left: X, middle: Y, right: Z): $Triple<X, Y, Z>
public "right"(): Z
}
}

declare module "com.supermartijn642.fusion.extensions.TextureAtlasSpriteExtension" {
import { $TextureType, $TextureType$$Type } from "com.supermartijn642.fusion.api.texture.TextureType"

export interface $TextureAtlasSpriteExtension {
"getFusionTextureType"(): $TextureType<any>
"setFusionTextureType"(type: $TextureType$$Type<any>): void
get "fusionTextureType"(): $TextureType<any>
set "fusionTextureType"(value: $TextureType$$Type<any>)
}

export namespace $TextureAtlasSpriteExtension {
const probejs$$marker: never
}
export abstract class $TextureAtlasSpriteExtension$$Static implements $TextureAtlasSpriteExtension {
}
}

