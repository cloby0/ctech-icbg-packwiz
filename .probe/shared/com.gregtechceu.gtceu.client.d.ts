declare module "com.gregtechceu.gtceu.client.model.machine.IMachineRendererModel" {
import { $AABB } from "net.minecraft.world.phys.AABB"
import { $Direction$$Type } from "net.minecraft.core.Direction"
import { $BlockState$$Type } from "net.minecraft.world.level.block.state.BlockState"
import { $RandomSource$$Type } from "net.minecraft.util.RandomSource"
import { $RenderType$$Type } from "net.minecraft.client.renderer.RenderType"
import { $BakedQuad } from "net.minecraft.client.renderer.block.model.BakedQuad"
import { $ModelData$$Type } from "net.minecraftforge.client.model.data.ModelData"
import { $PoseStack$$Type } from "com.mojang.blaze3d.vertex.PoseStack"
import { $ItemDisplayContext$$Type } from "net.minecraft.world.item.ItemDisplayContext"
import { $List } from "java.util.List"
import { $MachineDefinition } from "com.gregtechceu.gtceu.api.machine.MachineDefinition"
import { $BlockPos$$Type } from "net.minecraft.core.BlockPos"
import { $Vec3$$Type } from "net.minecraft.world.phys.Vec3"
import { $IMachineFeature, $IMachineFeature$$Type } from "com.gregtechceu.gtceu.api.machine.feature.IMachineFeature"
import { $ItemStack$$Type } from "net.minecraft.world.item.ItemStack"
import { $MultiBufferSource$$Type } from "net.minecraft.client.renderer.MultiBufferSource"
import { $BlockAndTintGetter$$Type } from "net.minecraft.world.level.BlockAndTintGetter"

export interface $IMachineRendererModel<T extends $IMachineFeature = $IMachineFeature> {
"getDefinition"(): $MachineDefinition
"getRenderBoundingBox"(t0: T): $AABB
/** Client only, do not use in server scripts */
"getRenderQuads"(t0: T, blockAndTintGetter1: $BlockAndTintGetter$$Type, blockPos2: $BlockPos$$Type, blockState3: $BlockState$$Type, direction4: $Direction$$Type, randomSource5: $RandomSource$$Type, modelData6: $ModelData$$Type, renderType7: $RenderType$$Type): $List<$BakedQuad>
"getViewDistance"(): integer
"isBlockEntityRenderer"(): boolean
/** Client only, do not use in server scripts */
"render"(t0: T, float1: float, poseStack2: $PoseStack$$Type, multiBufferSource3: $MultiBufferSource$$Type, int4: integer, int5: integer): void
/** Client only, do not use in server scripts */
"renderByItem"(itemStack0: $ItemStack$$Type, itemDisplayContext1: $ItemDisplayContext$$Type, poseStack2: $PoseStack$$Type, multiBufferSource3: $MultiBufferSource$$Type, int4: integer, int5: integer): void
"shouldRender"(t0: T, vec31: $Vec3$$Type): boolean
"shouldRenderOffScreen"(t0: T): boolean
get "definition"(): $MachineDefinition
get "viewDistance"(): integer
get "blockEntityRenderer"(): boolean
}

export namespace $IMachineRendererModel {
const probejs$$marker: never
}
export abstract class $IMachineRendererModel$$Static<T extends $IMachineFeature = $IMachineFeature> implements $IMachineRendererModel<T> {
}
}

declare module "com.gregtechceu.gtceu.client.renderer.machine.impl.GrowingPlantRender$GrowthMode" {
import { $IntegerProperty, $IntegerProperty$$Type } from "net.minecraft.world.level.block.state.properties.IntegerProperty"
import { $Predicate, $Predicate$$Type } from "java.util.function.Predicate"
import { $Map } from "java.util.Map"
import { $Block, $Block$$Type } from "net.minecraft.world.level.block.Block"
import { $Record } from "java.lang.Record"
import { $OptionalInt$$Type } from "java.util.OptionalInt"
import { $GrowingPlantRender$RenderFunction, $GrowingPlantRender$RenderFunction$$Type } from "com.gregtechceu.gtceu.client.renderer.machine.impl.GrowingPlantRender$RenderFunction"

export class $GrowingPlantRender$GrowthMode extends $Record {
static readonly "AGE_1": $GrowingPlantRender$GrowthMode
static readonly "AGE_15": $GrowingPlantRender$GrowthMode
static readonly "AGE_2": $GrowingPlantRender$GrowthMode
static readonly "AGE_25": $GrowingPlantRender$GrowthMode
static readonly "AGE_3": $GrowingPlantRender$GrowthMode
static readonly "AGE_4": $GrowingPlantRender$GrowthMode
static readonly "AGE_5": $GrowingPlantRender$GrowthMode
static readonly "AGE_7": $GrowingPlantRender$GrowthMode
static readonly "DOUBLE_TRANSLATE": $GrowingPlantRender$GrowthMode
static readonly "FLOWER_AMOUNT": $GrowingPlantRender$GrowthMode
static readonly "GROWING_PLANT": $GrowingPlantRender$GrowthMode
static readonly "MODE_BY_PROPERTY": $Map<$IntegerProperty, $GrowingPlantRender$GrowthMode>
static readonly "NONE": $GrowingPlantRender$GrowthMode
static readonly "PICKLES": $GrowingPlantRender$GrowthMode
static readonly "SCALE": $GrowingPlantRender$GrowthMode
static readonly "STEM": $GrowingPlantRender$GrowthMode
static readonly "TRANSLATE": $GrowingPlantRender$GrowthMode
static readonly "VALUES": $Map<string, $GrowingPlantRender$GrowthMode>

constructor(name: string, predicate: $Predicate$$Type<$Block$$Type>, renderFunction: $GrowingPlantRender$RenderFunction$$Type)
constructor(string0: string, renderFunction1: $GrowingPlantRender$RenderFunction$$Type)

public "name"(): string
public static "ofIntegerProperty"(string0: string, integerProperty1: $IntegerProperty$$Type, optionalInt2: $OptionalInt$$Type, optionalInt3: $OptionalInt$$Type): $GrowingPlantRender$GrowthMode
public static "ofIntegerProperty"(string0: string, integerProperty1: $IntegerProperty$$Type, int2: integer, int3: integer): $GrowingPlantRender$GrowthMode
public static "ofIntegerProperty"(string0: string, integerProperty1: $IntegerProperty$$Type): $GrowingPlantRender$GrowthMode
public "predicate"(): $Predicate<$Block>
public "renderFunction"(): $GrowingPlantRender$RenderFunction
}
}

declare module "com.gregtechceu.gtceu.client.model.machine.overlays.WorkableOverlays$StatusTextures" {
import { $ResourceLocation, $ResourceLocation$$Type } from "net.minecraft.resources.ResourceLocation"
import { $RecipeLogic$Status$$Type } from "com.gregtechceu.gtceu.api.machine.trait.RecipeLogic$Status"

export class $WorkableOverlays$StatusTextures {
static readonly "EMPTY": $WorkableOverlays$StatusTextures

constructor(resourceLocation0: $ResourceLocation$$Type, resourceLocation1: $ResourceLocation$$Type, resourceLocation2: $ResourceLocation$$Type, resourceLocation3: $ResourceLocation$$Type, resourceLocation4: $ResourceLocation$$Type, resourceLocation5: $ResourceLocation$$Type)

public "getEmissiveTexture"(status0: $RecipeLogic$Status$$Type): $ResourceLocation
public "getTexture"(status0: $RecipeLogic$Status$$Type): $ResourceLocation
}
}

declare module "com.gregtechceu.gtceu.client.renderer.machine.impl.GrowingPlantRender$RenderFunction$ConfigureOnly" {
import { $IntegerProperty$$Type } from "net.minecraft.world.level.block.state.properties.IntegerProperty"
import { $BlockPos$$Type } from "net.minecraft.core.BlockPos"
import { $Collection } from "java.util.Collection"
import { $Vector3f$$Type } from "org.joml.Vector3f"
import { $BlockState$$Type } from "net.minecraft.world.level.block.state.BlockState"
import { $OptionalInt$$Type } from "java.util.OptionalInt"
import { $MultiBufferSource$$Type } from "net.minecraft.client.renderer.MultiBufferSource"
import { $GrowingPlantRender$StateWithOffset } from "com.gregtechceu.gtceu.client.renderer.machine.impl.GrowingPlantRender$StateWithOffset"
import { $BlockAndTintGetter$$Type } from "net.minecraft.world.level.BlockAndTintGetter"
import { $PoseStack$$Type } from "com.mojang.blaze3d.vertex.PoseStack"
import { $GrowingPlantRender$RenderFunction } from "com.gregtechceu.gtceu.client.renderer.machine.impl.GrowingPlantRender$RenderFunction"

export interface $GrowingPlantRender$RenderFunction$ConfigureOnly extends $GrowingPlantRender$RenderFunction {
"configureState"(blockAndTintGetter0: $BlockAndTintGetter$$Type, blockState1: $BlockState$$Type, double2: double): $Collection<$GrowingPlantRender$StateWithOffset>
"renderGrowingBlock"(blockAndTintGetter0: $BlockAndTintGetter$$Type, blockPos1: $BlockPos$$Type, vector3f2: $Vector3f$$Type, blockState3: $BlockState$$Type, double4: double, multiBufferSource5: $MultiBufferSource$$Type, poseStack6: $PoseStack$$Type): void
}

export namespace $GrowingPlantRender$RenderFunction$ConfigureOnly {
function byIntegerProperty(integerProperty0: $IntegerProperty$$Type, optionalInt1: $OptionalInt$$Type, optionalInt2: $OptionalInt$$Type): $GrowingPlantRender$RenderFunction$ConfigureOnly
}
export abstract class $GrowingPlantRender$RenderFunction$ConfigureOnly$$Static implements $GrowingPlantRender$RenderFunction$ConfigureOnly {
static "byIntegerProperty"(integerProperty0: $IntegerProperty$$Type, optionalInt1: $OptionalInt$$Type, optionalInt2: $OptionalInt$$Type): $GrowingPlantRender$RenderFunction$ConfigureOnly
}
}

declare module "com.gregtechceu.gtceu.client.model.machine.multipart.MultiPartBakedModel" {
import { $ChunkRenderTypeSet } from "net.minecraftforge.client.ChunkRenderTypeSet"
import { $Direction$$Type } from "net.minecraft.core.Direction"
import { $BlockState$$Type } from "net.minecraft.world.level.block.state.BlockState"
import { $ItemDisplayContext$$Type } from "net.minecraft.world.item.ItemDisplayContext"
import { $PoseStack$$Type } from "com.mojang.blaze3d.vertex.PoseStack"
import { $ItemOverrides } from "net.minecraft.client.renderer.block.model.ItemOverrides"
import { $Pair$$Type } from "org.apache.commons.lang3.tuple.Pair"
import { $BlockAndTintGetter$$Type } from "net.minecraft.world.level.BlockAndTintGetter"
import { $TextureAtlasSprite } from "net.minecraft.client.renderer.texture.TextureAtlasSprite"
import { $BakedModel, $BakedModel$$Type } from "net.minecraft.client.resources.model.BakedModel"
import { $ItemTransforms } from "net.minecraft.client.renderer.block.model.ItemTransforms"
import { $Predicate$$Type } from "java.util.function.Predicate"
import { $MachineRenderState$$Type } from "com.gregtechceu.gtceu.client.model.machine.MachineRenderState"
import { $RandomSource$$Type } from "net.minecraft.util.RandomSource"
import { $RenderType, $RenderType$$Type } from "net.minecraft.client.renderer.RenderType"
import { $ModelData, $ModelData$$Type } from "net.minecraftforge.client.model.data.ModelData"
import { $BakedQuad } from "net.minecraft.client.renderer.block.model.BakedQuad"
import { $ModelData$Builder$$Type } from "net.minecraftforge.client.model.data.ModelData$Builder"
import { $List, $List$$Type } from "java.util.List"
import { $MachineDefinition$$Type } from "com.gregtechceu.gtceu.api.machine.MachineDefinition"
import { $BlockPos$$Type } from "net.minecraft.core.BlockPos"
import { $IDynamicBakedModel } from "net.minecraftforge.client.model.IDynamicBakedModel"
import { $ItemStack$$Type } from "net.minecraft.world.item.ItemStack"
import { $BitSet } from "java.util.BitSet"

export class $MultiPartBakedModel implements $IDynamicBakedModel {
constructor(list0: $List$$Type<$Pair$$Type<$Predicate$$Type<$MachineRenderState$$Type>, $BakedModel$$Type>>)

public "addMachineModelData"(machineRenderState0: $MachineRenderState$$Type, blockAndTintGetter1: $BlockAndTintGetter$$Type, blockPos2: $BlockPos$$Type, blockState3: $BlockState$$Type, modelData4: $ModelData$$Type, builder5: $ModelData$Builder$$Type): void
public "applyTransform"(itemDisplayContext0: $ItemDisplayContext$$Type, poseStack1: $PoseStack$$Type, boolean2: boolean): $BakedModel
public "getMachineQuads"(machineDefinition0: $MachineDefinition$$Type, machineRenderState1: $MachineRenderState$$Type, blockState2: $BlockState$$Type, direction3: $Direction$$Type, randomSource4: $RandomSource$$Type, modelData5: $ModelData$$Type, renderType6: $RenderType$$Type): $List<$BakedQuad>
public "getModelData"(blockAndTintGetter0: $BlockAndTintGetter$$Type, blockPos1: $BlockPos$$Type, blockState2: $BlockState$$Type, modelData3: $ModelData$$Type): $ModelData
public "getOverrides"(): $ItemOverrides
public "getParticleIcon"(machineRenderState0: $MachineRenderState$$Type, modelData1: $ModelData$$Type): $TextureAtlasSprite
public "getParticleIcon"(modelData0: $ModelData$$Type): $TextureAtlasSprite
public "getParticleIcon"(): $TextureAtlasSprite
public "getQuads"(blockState0: $BlockState$$Type, direction1: $Direction$$Type, randomSource2: $RandomSource$$Type, modelData3: $ModelData$$Type, renderType4: $RenderType$$Type): $List<$BakedQuad>
public "getQuads"(blockState0: $BlockState$$Type, direction1: $Direction$$Type, randomSource2: $RandomSource$$Type): $List<$BakedQuad>
public "getRenderPasses"(itemStack0: $ItemStack$$Type, boolean1: boolean): $List<$BakedModel>
public "getRenderTypes"(blockState0: $BlockState$$Type, randomSource1: $RandomSource$$Type, modelData2: $ModelData$$Type): $ChunkRenderTypeSet
public "getRenderTypes"(itemStack0: $ItemStack$$Type, boolean1: boolean): $List<$RenderType>
public "getSelectors"(machineRenderState0: $MachineRenderState$$Type): $BitSet
public "getTransforms"(): $ItemTransforms
public "isCustomRenderer"(): boolean
public "isGui3d"(): boolean
public "useAmbientOcclusion"(): boolean
public "useAmbientOcclusion"(blockState0: $BlockState$$Type, renderType1: $RenderType$$Type): boolean
public "useAmbientOcclusion"(blockState0: $BlockState$$Type): boolean
public "useAmbientOcclusionWithLightEmission"(blockState0: $BlockState$$Type, renderType1: $RenderType$$Type): boolean
public "usesBlockLight"(): boolean
get "overrides"(): $ItemOverrides
get "particleIcon"(): $TextureAtlasSprite
get "transforms"(): $ItemTransforms
get "customRenderer"(): boolean
get "gui3d"(): boolean
}
}

declare module "com.gregtechceu.gtceu.client.renderer.machine.DynamicRenderHelper" {
import { $BoilerFireboxType$$Type } from "com.gregtechceu.gtceu.common.block.BoilerFireboxType"
import { $DynamicRender } from "com.gregtechceu.gtceu.client.renderer.machine.DynamicRender"
import { $Supplier$$Type } from "java.util.function.Supplier"
import { $List$$Type } from "java.util.List"
import { $Vec3i$$Type } from "net.minecraft.core.Vec3i"
import { $FluidBlockRenderer$$Type } from "com.gregtechceu.gtceu.client.renderer.block.FluidBlockRenderer"
import { $Vector3f$$Type } from "org.joml.Vector3f"
import { $Optional$$Type } from "java.util.Optional"
import { $Block, $Block$$Type } from "net.minecraft.world.level.block.Block"
import { $Fluid$$Type } from "net.minecraft.world.level.material.Fluid"
import { $GrowingPlantRender$GrowthMode$$Type } from "com.gregtechceu.gtceu.client.renderer.machine.impl.GrowingPlantRender$GrowthMode"
import { $RelativeDirection$$Type } from "com.gregtechceu.gtceu.api.pattern.util.RelativeDirection"

export class $DynamicRenderHelper {
constructor()

public static "createCentralMonitorRender"(): $DynamicRender<any, any>
public static "createFusionRingRender"(): $DynamicRender<any, any>
public static "createPBFLavaRender"(): $DynamicRender<any, any>
public static "createQuantumChestRender"(): $DynamicRender<any, any>
public static "createQuantumTankRender"(): $DynamicRender<any, any>
public static "makeBoilerPartRender"(boilerFireboxType0: $BoilerFireboxType$$Type, supplier1: $Supplier$$Type<$Block>): $DynamicRender<any, any>
public static "makeFluidAreaRender"(fluidBlockRenderer0: $FluidBlockRenderer$$Type, optional1: $Optional$$Type<$Fluid$$Type>, list2: $List$$Type<$RelativeDirection$$Type>): $DynamicRender<any, any>
public static "makeGrowingPlantRender"(block0: $Block$$Type, growthMode1: $GrowingPlantRender$GrowthMode$$Type, list2: $List$$Type<$Vector3f$$Type>): $DynamicRender<any, any>
public static "makeGrowingPlantRender"(...vec3i0s: $Vec3i$$Type[]): $DynamicRender<any, any>
public static "makeGrowingPlantRender"(block0: $Block$$Type, growthMode1: $GrowingPlantRender$GrowthMode$$Type, ...vec3i2s: $Vec3i$$Type[]): $DynamicRender<any, any>
public static "makeGrowingPlantRender"(...vector3f0s: $Vector3f$$Type[]): $DynamicRender<any, any>
public static "makeGrowingPlantRender"(block0: $Block$$Type, growthMode1: $GrowingPlantRender$GrowthMode$$Type, ...vector3f2s: $Vector3f$$Type[]): $DynamicRender<any, any>
public static "makeGrowingPlantRender"(list0: $List$$Type<$Vector3f$$Type>): $DynamicRender<any, any>
public static "makeRecipeFluidAreaRender"(): $DynamicRender<any, any>
}
}

declare module "com.gregtechceu.gtceu.client.model.machine.overlays.WorkableOverlays$OverlayFace" {
import { $Enum } from "java.lang.Enum"
import { $Direction$$Type } from "net.minecraft.core.Direction"

export class $WorkableOverlays$OverlayFace extends $Enum<$WorkableOverlays$OverlayFace> {
static readonly "BACK": $WorkableOverlays$OverlayFace
static readonly "BOTTOM": $WorkableOverlays$OverlayFace
static readonly "FRONT": $WorkableOverlays$OverlayFace
static readonly "SIDE": $WorkableOverlays$OverlayFace
static readonly "TOP": $WorkableOverlays$OverlayFace
static readonly "VALUES": $WorkableOverlays$OverlayFace[]

public static "bySide"(direction0: $Direction$$Type): $WorkableOverlays$OverlayFace
public "getName"(): string
public static "valueOf"(string0: string): $WorkableOverlays$OverlayFace
public static "values"(): $WorkableOverlays$OverlayFace[]
get "name"(): string
}
}

declare module "com.gregtechceu.gtceu.client.util.ExtendedBlockModelRotation" {
import { $Enum } from "java.lang.Enum"
import { $Direction$$Type } from "net.minecraft.core.Direction"

export class $ExtendedBlockModelRotation extends $Enum<$ExtendedBlockModelRotation> {
static readonly "DOWN_EAST": $ExtendedBlockModelRotation
static readonly "DOWN_NORTH": $ExtendedBlockModelRotation
static readonly "DOWN_SOUTH": $ExtendedBlockModelRotation
static readonly "DOWN_WEST": $ExtendedBlockModelRotation
static readonly "EAST_EAST": $ExtendedBlockModelRotation
static readonly "EAST_NORTH": $ExtendedBlockModelRotation
static readonly "EAST_SOUTH": $ExtendedBlockModelRotation
static readonly "EAST_WEST": $ExtendedBlockModelRotation
static readonly "NORTH_EAST": $ExtendedBlockModelRotation
static readonly "NORTH_NORTH": $ExtendedBlockModelRotation
static readonly "NORTH_SOUTH": $ExtendedBlockModelRotation
static readonly "NORTH_WEST": $ExtendedBlockModelRotation
static readonly "SOUTH_EAST": $ExtendedBlockModelRotation
static readonly "SOUTH_NORTH": $ExtendedBlockModelRotation
static readonly "SOUTH_SOUTH": $ExtendedBlockModelRotation
static readonly "SOUTH_WEST": $ExtendedBlockModelRotation
static readonly "UP_EAST": $ExtendedBlockModelRotation
static readonly "UP_NORTH": $ExtendedBlockModelRotation
static readonly "UP_SOUTH": $ExtendedBlockModelRotation
static readonly "UP_WEST": $ExtendedBlockModelRotation
static readonly "VALUES": $ExtendedBlockModelRotation[]
static readonly "WEST_EAST": $ExtendedBlockModelRotation
static readonly "WEST_NORTH": $ExtendedBlockModelRotation
static readonly "WEST_SOUTH": $ExtendedBlockModelRotation
static readonly "WEST_WEST": $ExtendedBlockModelRotation

public static "get"(direction0: $Direction$$Type, direction1: $Direction$$Type): $ExtendedBlockModelRotation
public "getAngleX"(): integer
public "getAngleY"(): integer
public "getAngleZ"(): integer
public static "valueOf"(string0: string): $ExtendedBlockModelRotation
public static "values"(): $ExtendedBlockModelRotation[]
get "angleX"(): integer
get "angleY"(): integer
get "angleZ"(): integer
}
}

declare module "com.gregtechceu.gtceu.client.renderer.cover.ICoverRenderer" {
import { $List$$Type } from "java.util.List"
import { $BlockPos$$Type } from "net.minecraft.core.BlockPos"
import { $Direction$$Type } from "net.minecraft.core.Direction"
import { $RandomSource$$Type } from "net.minecraft.util.RandomSource"
import { $RenderType$$Type } from "net.minecraft.client.renderer.RenderType"
import { $BakedQuad$$Type } from "net.minecraft.client.renderer.block.model.BakedQuad"
import { $ModelData$$Type } from "net.minecraftforge.client.model.data.ModelData"
import { $CoverBehavior$$Type } from "com.gregtechceu.gtceu.api.cover.CoverBehavior"
import { $BlockAndTintGetter$$Type } from "net.minecraft.world.level.BlockAndTintGetter"

export interface $ICoverRenderer {
/** Client only, do not use in server scripts */
"renderCover"(list0: $List$$Type<$BakedQuad$$Type>, direction1: $Direction$$Type, randomSource2: $RandomSource$$Type, coverBehavior3: $CoverBehavior$$Type, blockPos4: $BlockPos$$Type, blockAndTintGetter5: $BlockAndTintGetter$$Type, modelData6: $ModelData$$Type, renderType7: $RenderType$$Type): void
}

export namespace $ICoverRenderer {
const probejs$$marker: never
}
export abstract class $ICoverRenderer$$Static implements $ICoverRenderer {
}
}

declare module "com.gregtechceu.gtceu.client.renderer.machine.DynamicRender" {
import { $DynamicRenderType } from "com.gregtechceu.gtceu.client.renderer.machine.DynamicRenderType"
import { $AABB } from "net.minecraft.world.phys.AABB"
import { $MachineModel, $MachineModel$$Type } from "com.gregtechceu.gtceu.client.model.machine.MachineModel"
import { $Direction$$Type } from "net.minecraft.core.Direction"
import { $BlockState$$Type } from "net.minecraft.world.level.block.state.BlockState"
import { $RandomSource$$Type } from "net.minecraft.util.RandomSource"
import { $RenderType$$Type } from "net.minecraft.client.renderer.RenderType"
import { $BakedQuad } from "net.minecraft.client.renderer.block.model.BakedQuad"
import { $ModelData$$Type } from "net.minecraftforge.client.model.data.ModelData"
import { $PoseStack$$Type } from "com.mojang.blaze3d.vertex.PoseStack"
import { $ItemDisplayContext$$Type } from "net.minecraft.world.item.ItemDisplayContext"
import { $List } from "java.util.List"
import { $Codec } from "com.mojang.serialization.Codec"
import { $MachineDefinition } from "com.gregtechceu.gtceu.api.machine.MachineDefinition"
import { $BlockPos$$Type } from "net.minecraft.core.BlockPos"
import { $Vec3$$Type } from "net.minecraft.world.phys.Vec3"
import { $IMachineRendererModel } from "com.gregtechceu.gtceu.client.model.machine.IMachineRendererModel"
import { $Comparable } from "java.lang.Comparable"
import { $IMachineFeature, $IMachineFeature$$Type } from "com.gregtechceu.gtceu.api.machine.feature.IMachineFeature"
import { $ItemStack$$Type } from "net.minecraft.world.item.ItemStack"
import { $MultiBufferSource$$Type } from "net.minecraft.client.renderer.MultiBufferSource"
import { $BlockAndTintGetter$$Type } from "net.minecraft.world.level.BlockAndTintGetter"

export class $DynamicRender<T extends $IMachineFeature = $IMachineFeature, S extends $DynamicRender<T, S> = $DynamicRender<T, S>> implements $Comparable<$DynamicRender<T, S>>, $IMachineRendererModel<T> {
static readonly "CODEC": $Codec<$DynamicRender<any, any>>

constructor()

public "compareTo"(dynamicRender0: $DynamicRender$$Type<T, S>): integer
public "getDefinition"(): $MachineDefinition
public "getParent"(): $MachineModel
public "getRenderBoundingBox"(t0: T): $AABB
/** Client only, do not use in server scripts */
public "getRenderQuads"(t0: T, blockAndTintGetter1: $BlockAndTintGetter$$Type, blockPos2: $BlockPos$$Type, blockState3: $BlockState$$Type, direction4: $Direction$$Type, randomSource5: $RandomSource$$Type, modelData6: $ModelData$$Type, renderType7: $RenderType$$Type): $List<$BakedQuad>
public "getType"(): $DynamicRenderType<T, S>
public "getViewDistance"(): integer
public "isBlockEntityRenderer"(): boolean
/** Client only, do not use in server scripts */
public "render"(t0: T, float1: float, poseStack2: $PoseStack$$Type, multiBufferSource3: $MultiBufferSource$$Type, int4: integer, int5: integer): void
/** Client only, do not use in server scripts */
public "renderByItem"(itemStack0: $ItemStack$$Type, itemDisplayContext1: $ItemDisplayContext$$Type, poseStack2: $PoseStack$$Type, multiBufferSource3: $MultiBufferSource$$Type, int4: integer, int5: integer): void
public "setParent"(machineModel0: $MachineModel$$Type): void
public "shouldRender"(t0: T, vec31: $Vec3$$Type): boolean
public "shouldRenderOffScreen"(t0: T): boolean
get "definition"(): $MachineDefinition
get "parent"(): $MachineModel
get "type"(): $DynamicRenderType<T, S>
get "viewDistance"(): integer
get "blockEntityRenderer"(): boolean
set "parent"(value: $MachineModel$$Type)
}
}

declare module "com.gregtechceu.gtceu.client.renderer.machine.impl.GrowingPlantRender$RenderFunction" {
import { $GrowingPlantRender$RenderFunction$ConfigureOnly } from "com.gregtechceu.gtceu.client.renderer.machine.impl.GrowingPlantRender$RenderFunction$ConfigureOnly"
import { $Collection } from "java.util.Collection"
import { $TriFunction } from "org.apache.commons.lang3.function.TriFunction"
import { $BlockState$$Type } from "net.minecraft.world.level.block.state.BlockState"
import { $OptionalInt, $OptionalInt$$Type } from "java.util.OptionalInt"
import { $GrowingPlantRender$StateWithOffset } from "com.gregtechceu.gtceu.client.renderer.machine.impl.GrowingPlantRender$StateWithOffset"
import { $PoseStack$$Type } from "com.mojang.blaze3d.vertex.PoseStack"
import { $IntegerProperty, $IntegerProperty$$Type } from "net.minecraft.world.level.block.state.properties.IntegerProperty"
import { $BlockPos$$Type } from "net.minecraft.core.BlockPos"
import { $Vector3f$$Type } from "org.joml.Vector3f"
import { $MultiBufferSource$$Type } from "net.minecraft.client.renderer.MultiBufferSource"
import { $BlockAndTintGetter$$Type } from "net.minecraft.world.level.BlockAndTintGetter"

export interface $GrowingPlantRender$RenderFunction {
"configureState"(blockAndTintGetter0: $BlockAndTintGetter$$Type, blockState1: $BlockState$$Type, double2: double): $Collection<$GrowingPlantRender$StateWithOffset>
"renderGrowingBlock"(blockAndTintGetter0: $BlockAndTintGetter$$Type, blockPos1: $BlockPos$$Type, vector3f2: $Vector3f$$Type, blockState3: $BlockState$$Type, double4: double, multiBufferSource5: $MultiBufferSource$$Type, poseStack6: $PoseStack$$Type): void
}

export namespace $GrowingPlantRender$RenderFunction {
const DOUBLE_BLOCK: $GrowingPlantRender$RenderFunction$ConfigureOnly
const GROWING_PLANT: $GrowingPlantRender$RenderFunction
const NO_OP: $GrowingPlantRender$RenderFunction
const PROPERTY_FUNCTION_CACHE: $TriFunction<$IntegerProperty, $OptionalInt, $OptionalInt, $GrowingPlantRender$RenderFunction$ConfigureOnly>
const SCALE: $GrowingPlantRender$RenderFunction
const STEM: $GrowingPlantRender$RenderFunction$ConfigureOnly
const TRANSLATE: $GrowingPlantRender$RenderFunction$ConfigureOnly
function byIntegerProperty(integerProperty0: $IntegerProperty$$Type, optionalInt1: $OptionalInt$$Type, optionalInt2: $OptionalInt$$Type): $GrowingPlantRender$RenderFunction$ConfigureOnly
}
export abstract class $GrowingPlantRender$RenderFunction$$Static implements $GrowingPlantRender$RenderFunction {
static readonly "DOUBLE_BLOCK": $GrowingPlantRender$RenderFunction$ConfigureOnly
static readonly "GROWING_PLANT": $GrowingPlantRender$RenderFunction
static readonly "NO_OP": $GrowingPlantRender$RenderFunction
static readonly "PROPERTY_FUNCTION_CACHE": $TriFunction<$IntegerProperty, $OptionalInt, $OptionalInt, $GrowingPlantRender$RenderFunction$ConfigureOnly>
static readonly "SCALE": $GrowingPlantRender$RenderFunction
static readonly "STEM": $GrowingPlantRender$RenderFunction$ConfigureOnly
static readonly "TRANSLATE": $GrowingPlantRender$RenderFunction$ConfigureOnly

static "byIntegerProperty"(integerProperty0: $IntegerProperty$$Type, optionalInt1: $OptionalInt$$Type, optionalInt2: $OptionalInt$$Type): $GrowingPlantRender$RenderFunction$ConfigureOnly
}
}

declare module "com.gregtechceu.gtceu.client.model.BaseBakedModel" {
import { $BakedModel } from "net.minecraft.client.resources.model.BakedModel"
import { $ChunkRenderTypeSet } from "net.minecraftforge.client.ChunkRenderTypeSet"
import { $ItemTransforms } from "net.minecraft.client.renderer.block.model.ItemTransforms"
import { $Direction$$Type } from "net.minecraft.core.Direction"
import { $BlockState$$Type } from "net.minecraft.world.level.block.state.BlockState"
import { $RandomSource$$Type } from "net.minecraft.util.RandomSource"
import { $RenderType, $RenderType$$Type } from "net.minecraft.client.renderer.RenderType"
import { $ModelData, $ModelData$$Type } from "net.minecraftforge.client.model.data.ModelData"
import { $BakedQuad } from "net.minecraft.client.renderer.block.model.BakedQuad"
import { $ItemDisplayContext$$Type } from "net.minecraft.world.item.ItemDisplayContext"
import { $PoseStack$$Type } from "com.mojang.blaze3d.vertex.PoseStack"
import { $ItemOverrides } from "net.minecraft.client.renderer.block.model.ItemOverrides"
import { $List } from "java.util.List"
import { $BlockPos$$Type } from "net.minecraft.core.BlockPos"
import { $IDynamicBakedModel } from "net.minecraftforge.client.model.IDynamicBakedModel"
import { $ItemStack$$Type } from "net.minecraft.world.item.ItemStack"
import { $BlockAndTintGetter$$Type } from "net.minecraft.world.level.BlockAndTintGetter"
import { $TextureAtlasSprite } from "net.minecraft.client.renderer.texture.TextureAtlasSprite"

export class $BaseBakedModel implements $IDynamicBakedModel {
constructor()

public "applyTransform"(itemDisplayContext0: $ItemDisplayContext$$Type, poseStack1: $PoseStack$$Type, boolean2: boolean): $BakedModel
public "getModelData"(blockAndTintGetter0: $BlockAndTintGetter$$Type, blockPos1: $BlockPos$$Type, blockState2: $BlockState$$Type, modelData3: $ModelData$$Type): $ModelData
/** Client only, do not use in server scripts */
public "getOverrides"(): $ItemOverrides
/** Client only, do not use in server scripts */
public "getParticleIcon"(): $TextureAtlasSprite
public "getParticleIcon"(modelData0: $ModelData$$Type): $TextureAtlasSprite
public "getQuads"(blockState0: $BlockState$$Type, direction1: $Direction$$Type, randomSource2: $RandomSource$$Type): $List<$BakedQuad>
public "getQuads"(blockState0: $BlockState$$Type, direction1: $Direction$$Type, randomSource2: $RandomSource$$Type, modelData3: $ModelData$$Type, renderType4: $RenderType$$Type): $List<$BakedQuad>
public "getRenderPasses"(itemStack0: $ItemStack$$Type, boolean1: boolean): $List<$BakedModel>
public "getRenderTypes"(blockState0: $BlockState$$Type, randomSource1: $RandomSource$$Type, modelData2: $ModelData$$Type): $ChunkRenderTypeSet
public "getRenderTypes"(itemStack0: $ItemStack$$Type, boolean1: boolean): $List<$RenderType>
/** @deprecated */
public "getTransforms"(): $ItemTransforms
public "isCustomRenderer"(): boolean
public "isGui3d"(): boolean
public "useAmbientOcclusion"(): boolean
public "useAmbientOcclusion"(blockState0: $BlockState$$Type): boolean
public "useAmbientOcclusion"(blockState0: $BlockState$$Type, renderType1: $RenderType$$Type): boolean
public "useAmbientOcclusionWithLightEmission"(blockState0: $BlockState$$Type, renderType1: $RenderType$$Type): boolean
public "usesBlockLight"(): boolean
get "overrides"(): $ItemOverrides
get "particleIcon"(): $TextureAtlasSprite
get "transforms"(): $ItemTransforms
get "customRenderer"(): boolean
get "gui3d"(): boolean
}
}

declare module "com.gregtechceu.gtceu.client.model.IBlockEntityRendererBakedModel" {
import { $ChunkRenderTypeSet } from "net.minecraftforge.client.ChunkRenderTypeSet"
import { $AABB } from "net.minecraft.world.phys.AABB"
import { $Direction$$Type } from "net.minecraft.core.Direction"
import { $BlockState$$Type } from "net.minecraft.world.level.block.state.BlockState"
import { $ItemDisplayContext$$Type } from "net.minecraft.world.item.ItemDisplayContext"
import { $PoseStack$$Type } from "com.mojang.blaze3d.vertex.PoseStack"
import { $ItemOverrides } from "net.minecraft.client.renderer.block.model.ItemOverrides"
import { $BlockAndTintGetter$$Type } from "net.minecraft.world.level.BlockAndTintGetter"
import { $TextureAtlasSprite } from "net.minecraft.client.renderer.texture.TextureAtlasSprite"
import { $BakedModel } from "net.minecraft.client.resources.model.BakedModel"
import { $ItemTransforms } from "net.minecraft.client.renderer.block.model.ItemTransforms"
import { $RandomSource$$Type } from "net.minecraft.util.RandomSource"
import { $RenderType, $RenderType$$Type } from "net.minecraft.client.renderer.RenderType"
import { $ModelData, $ModelData$$Type } from "net.minecraftforge.client.model.data.ModelData"
import { $BakedQuad } from "net.minecraft.client.renderer.block.model.BakedQuad"
import { $BlockEntity, $BlockEntity$$Type } from "net.minecraft.world.level.block.entity.BlockEntity"
import { $BlockEntityRenderer } from "net.minecraft.client.renderer.blockentity.BlockEntityRenderer"
import { $List } from "java.util.List"
import { $BlockEntityType } from "net.minecraft.world.level.block.entity.BlockEntityType"
import { $BlockPos$$Type } from "net.minecraft.core.BlockPos"
import { $Vec3$$Type } from "net.minecraft.world.phys.Vec3"
import { $IDynamicBakedModel } from "net.minecraftforge.client.model.IDynamicBakedModel"
import { $ItemStack$$Type } from "net.minecraft.world.item.ItemStack"
import { $MultiBufferSource$$Type } from "net.minecraft.client.renderer.MultiBufferSource"

export interface $IBlockEntityRendererBakedModel<T extends $BlockEntity = $BlockEntity> extends $IDynamicBakedModel, $BlockEntityRenderer<T> {
"applyTransform"(itemDisplayContext0: $ItemDisplayContext$$Type, poseStack1: $PoseStack$$Type, boolean2: boolean): $BakedModel
"getBlockEntityType"(): $BlockEntityType<T>
"getModelData"(blockAndTintGetter0: $BlockAndTintGetter$$Type, blockPos1: $BlockPos$$Type, blockState2: $BlockState$$Type, modelData3: $ModelData$$Type): $ModelData
"getOverrides"(): $ItemOverrides
/** @deprecated */
"getParticleIcon"(): $TextureAtlasSprite
"getParticleIcon"(modelData0: $ModelData$$Type): $TextureAtlasSprite
"getQuads"(blockState0: $BlockState$$Type, direction1: $Direction$$Type, randomSource2: $RandomSource$$Type): $List<$BakedQuad>
"getQuads"(blockState0: $BlockState$$Type, direction1: $Direction$$Type, randomSource2: $RandomSource$$Type, modelData3: $ModelData$$Type, renderType4: $RenderType$$Type): $List<$BakedQuad>
"getRenderBoundingBox"(t0: T): $AABB
"getRenderPasses"(itemStack0: $ItemStack$$Type, boolean1: boolean): $List<$BakedModel>
"getRenderTypes"(blockState0: $BlockState$$Type, randomSource1: $RandomSource$$Type, modelData2: $ModelData$$Type): $ChunkRenderTypeSet
"getRenderTypes"(itemStack0: $ItemStack$$Type, boolean1: boolean): $List<$RenderType>
/** @deprecated */
"getTransforms"(): $ItemTransforms
"getViewDistance"(): integer
"isCustomRenderer"(): boolean
"isGui3d"(): boolean
"render"(t0: T, float1: float, poseStack2: $PoseStack$$Type, multiBufferSource3: $MultiBufferSource$$Type, int4: integer, int5: integer): void
"renderByItem"(itemStack0: $ItemStack$$Type, itemDisplayContext1: $ItemDisplayContext$$Type, poseStack2: $PoseStack$$Type, multiBufferSource3: $MultiBufferSource$$Type, int4: integer, int5: integer): void
"shouldRender"(t0: T, vec31: $Vec3$$Type): boolean
"shouldRenderOffScreen"(t0: T): boolean
"useAmbientOcclusion"(): boolean
"useAmbientOcclusion"(blockState0: $BlockState$$Type): boolean
"useAmbientOcclusion"(blockState0: $BlockState$$Type, renderType1: $RenderType$$Type): boolean
"useAmbientOcclusionWithLightEmission"(blockState0: $BlockState$$Type, renderType1: $RenderType$$Type): boolean
"usesBlockLight"(): boolean
get "blockEntityType"(): $BlockEntityType<T>
get "overrides"(): $ItemOverrides
get "particleIcon"(): $TextureAtlasSprite
get "transforms"(): $ItemTransforms
get "viewDistance"(): integer
get "customRenderer"(): boolean
get "gui3d"(): boolean
}

export namespace $IBlockEntityRendererBakedModel {
const probejs$$marker: never
}
export abstract class $IBlockEntityRendererBakedModel$$Static<T extends $BlockEntity = $BlockEntity> implements $IBlockEntityRendererBakedModel<T> {
}
}

declare module "com.gregtechceu.gtceu.client.model.machine.overlays.WorkableOverlays" {
import { $ResourceLocation, $ResourceLocation$$Type } from "net.minecraft.resources.ResourceLocation"
import { $WorkableOverlays$OverlayFace } from "com.gregtechceu.gtceu.client.model.machine.overlays.WorkableOverlays$OverlayFace"
import { $Map } from "java.util.Map"
import { $WorkableOverlays$StatusTextures } from "com.gregtechceu.gtceu.client.model.machine.overlays.WorkableOverlays$StatusTextures"
import { $ExistingFileHelper$$Type } from "net.minecraftforge.common.data.ExistingFileHelper"

export class $WorkableOverlays {
constructor(resourceLocation0: $ResourceLocation$$Type)

public static "get"(resourceLocation0: $ResourceLocation$$Type, existingFileHelper1: $ExistingFileHelper$$Type): $WorkableOverlays
public "getLocation"(): $ResourceLocation
public "getTextures"(): $Map<$WorkableOverlays$OverlayFace, $WorkableOverlays$StatusTextures>
get "location"(): $ResourceLocation
get "textures"(): $Map<$WorkableOverlays$OverlayFace, $WorkableOverlays$StatusTextures>
}
}

declare module "com.gregtechceu.gtceu.client.model.machine.MachineRenderState" {
import { $Codec } from "com.mojang.serialization.Codec"
import { $StateHolder } from "net.minecraft.world.level.block.state.StateHolder"
import { $MachineDefinition, $MachineDefinition$$Type } from "com.gregtechceu.gtceu.api.machine.MachineDefinition"
import { $ImmutableMap$$Type } from "com.google.common.collect.ImmutableMap"
import { $MetaMachine$$Type } from "com.gregtechceu.gtceu.api.machine.MetaMachine"
import { $MapCodec$$Type } from "com.mojang.serialization.MapCodec"
import { $Comparable$$Type } from "java.lang.Comparable"
import { $Property$$Type } from "net.minecraft.world.level.block.state.properties.Property"

export class $MachineRenderState extends $StateHolder<$MachineDefinition, $MachineRenderState> {
static readonly "CODEC": $Codec<$MachineRenderState>

constructor(machineDefinition0: $MachineDefinition$$Type, immutableMap1: $ImmutableMap$$Type<$Property$$Type<any>, $Comparable$$Type<any>>, mapCodec2: $MapCodec$$Type<$MachineRenderState$$Type>)

public "getDefinition"(): $MachineDefinition
public "is"(machineDefinition0: $MachineDefinition$$Type): boolean
public "is"(metaMachine0: $MetaMachine$$Type): boolean
get "definition"(): $MachineDefinition
}
}

declare module "com.gregtechceu.gtceu.client.renderer.cover.ICoverableRenderer" {
import { $TextureAtlas$$Type } from "net.minecraft.client.renderer.texture.TextureAtlas"
import { $MetaMachine$$Type } from "com.gregtechceu.gtceu.api.machine.MetaMachine"
import { $Direction$$Type } from "net.minecraft.core.Direction"
import { $ICoverable$$Type } from "com.gregtechceu.gtceu.api.capability.ICoverable"
import { $RandomSource$$Type } from "net.minecraft.util.RandomSource"
import { $RenderType$$Type } from "net.minecraft.client.renderer.RenderType"
import { $BakedQuad$$Type } from "net.minecraft.client.renderer.block.model.BakedQuad"
import { $ModelData$$Type } from "net.minecraftforge.client.model.data.ModelData"
import { $PoseStack$$Type } from "com.mojang.blaze3d.vertex.PoseStack"
import { $List$$Type } from "java.util.List"
import { $BlockPos$$Type } from "net.minecraft.core.BlockPos"
import { $MultiBufferSource$$Type } from "net.minecraft.client.renderer.MultiBufferSource"
import { $TextureAtlasSprite } from "net.minecraft.client.renderer.texture.TextureAtlasSprite"
import { $BlockAndTintGetter$$Type } from "net.minecraft.world.level.BlockAndTintGetter"

export interface $ICoverableRenderer {
/** Client only, do not use in server scripts */
"renderCovers"(list0: $List$$Type<$BakedQuad$$Type>, iCoverable1: $ICoverable$$Type, blockPos2: $BlockPos$$Type, blockAndTintGetter3: $BlockAndTintGetter$$Type, direction4: $Direction$$Type, randomSource5: $RandomSource$$Type, modelData6: $ModelData$$Type, renderType7: $RenderType$$Type): void
/** Client only, do not use in server scripts */
"renderDynamicCovers"(metaMachine0: $MetaMachine$$Type, float1: float, poseStack2: $PoseStack$$Type, multiBufferSource3: $MultiBufferSource$$Type, int4: integer, int5: integer): void
}

export namespace $ICoverableRenderer {
const COVER_BACK_PLATE: $TextureAtlasSprite[]
function initSprites(textureAtlas0: $TextureAtlas$$Type): void
}
export abstract class $ICoverableRenderer$$Static implements $ICoverableRenderer {
/** Client only, do not use in server scripts */
static readonly "COVER_BACK_PLATE": $TextureAtlasSprite[]

/** Client only, do not use in server scripts */
static "initSprites"(textureAtlas0: $TextureAtlas$$Type): void
}
}

declare module "com.gregtechceu.gtceu.client.model.pipe.PipeModel" {
import { $ResourceLocation, $ResourceLocation$$Type } from "net.minecraft.resources.ResourceLocation"
import { $IGeneratedBlockState } from "net.minecraftforge.client.model.generators.IGeneratedBlockState"
import { $Set } from "java.util.Set"
import { $GTBlockstateProvider$$Type } from "com.gregtechceu.gtceu.api.registry.registrate.provider.GTBlockstateProvider"
import { $PipeBlock, $PipeBlock$$Type } from "com.gregtechceu.gtceu.api.block.PipeBlock"

export class $PipeModel {
static readonly "DYNAMIC_MODELS": $Set<$PipeModel>
static readonly "END_KEY": string
static readonly "END_OVERLAY_KEY": string
static readonly "END_SECONDARY_KEY": string
static readonly "SIDE_KEY": string
static readonly "SIDE_OVERLAY_KEY": string
static readonly "SIDE_SECONDARY_KEY": string
readonly "blockId": $ResourceLocation

constructor(pipeBlock0: $PipeBlock$$Type<any, any, any>, gTBlockstateProvider1: $GTBlockstateProvider$$Type, float2: float, resourceLocation3: $ResourceLocation$$Type, resourceLocation4: $ResourceLocation$$Type)

public "createBlockState"(): $IGeneratedBlockState
public "dynamicModel"(): void
public "getBlock"(): $PipeBlock<any, any, any>
public static "initDynamicModels"(): void
public "initModels"(): void
public "setEnd"(resourceLocation0: $ResourceLocation$$Type): void
public "setEndOverlay"(resourceLocation0: $ResourceLocation$$Type): void
public "setEndSecondary"(resourceLocation0: $ResourceLocation$$Type): void
public "setSide"(resourceLocation0: $ResourceLocation$$Type): void
public "setSideOverlay"(resourceLocation0: $ResourceLocation$$Type): void
public "setSideSecondary"(resourceLocation0: $ResourceLocation$$Type): void
get "end"(): $ResourceLocation
set "end"(value: $ResourceLocation$$Type)
get "endOverlay"(): $ResourceLocation
set "endOverlay"(value: $ResourceLocation$$Type)
get "endSecondary"(): $ResourceLocation
set "endSecondary"(value: $ResourceLocation$$Type)
get "side"(): $ResourceLocation
set "side"(value: $ResourceLocation$$Type)
get "sideOverlay"(): $ResourceLocation
set "sideOverlay"(value: $ResourceLocation$$Type)
get "sideSecondary"(): $ResourceLocation
set "sideSecondary"(value: $ResourceLocation$$Type)
get "block"(): $PipeBlock<any, any, any>
}
}

declare module "com.gregtechceu.gtceu.client.renderer.machine.impl.GrowingPlantRender$StateWithOffset" {
import { $Vector3fc, $Vector3fc$$Type } from "org.joml.Vector3fc"
import { $BlockState, $BlockState$$Type } from "net.minecraft.world.level.block.state.BlockState"
import { $Record } from "java.lang.Record"

export class $GrowingPlantRender$StateWithOffset extends $Record {
constructor(blockState0: $BlockState$$Type)
constructor(state: $BlockState$$Type, offset: $Vector3fc$$Type)

public "offset"(): $Vector3fc
public "state"(): $BlockState
}
}

declare module "com.gregtechceu.gtceu.client.renderer.cover.IDynamicCoverRenderer" {
import { $MetaMachine$$Type } from "com.gregtechceu.gtceu.api.machine.MetaMachine"
import { $Direction$$Type } from "net.minecraft.core.Direction"
import { $MultiBufferSource$$Type } from "net.minecraft.client.renderer.MultiBufferSource"
import { $PoseStack$$Type } from "com.mojang.blaze3d.vertex.PoseStack"

export interface $IDynamicCoverRenderer {
"render"(metaMachine0: $MetaMachine$$Type, direction1: $Direction$$Type, float2: float, poseStack3: $PoseStack$$Type, multiBufferSource4: $MultiBufferSource$$Type, int5: integer, int6: integer): void
}

export namespace $IDynamicCoverRenderer {
const probejs$$marker: never
}
export abstract class $IDynamicCoverRenderer$$Static implements $IDynamicCoverRenderer {
}
}

declare module "com.gregtechceu.gtceu.client.model.machine.MachineModel" {
import { $ResourceLocation } from "net.minecraft.resources.ResourceLocation"
import { $IMultiPart$$Type } from "com.gregtechceu.gtceu.api.machine.feature.multiblock.IMultiPart"
import { $ICoverableRenderer } from "com.gregtechceu.gtceu.client.renderer.cover.ICoverableRenderer"
import { $ChunkRenderTypeSet } from "net.minecraftforge.client.ChunkRenderTypeSet"
import { $AABB } from "net.minecraft.world.phys.AABB"
import { $TextureAtlas$$Type } from "net.minecraft.client.renderer.texture.TextureAtlas"
import { $Direction$$Type } from "net.minecraft.core.Direction"
import { $BlockState$$Type } from "net.minecraft.world.level.block.state.BlockState"
import { $ICoverable$$Type } from "com.gregtechceu.gtceu.api.capability.ICoverable"
import { $ItemDisplayContext$$Type } from "net.minecraft.world.item.ItemDisplayContext"
import { $PoseStack$$Type } from "com.mojang.blaze3d.vertex.PoseStack"
import { $Map, $Map$$Type } from "java.util.Map"
import { $IBlockEntityRendererBakedModel } from "com.gregtechceu.gtceu.client.model.IBlockEntityRendererBakedModel"
import { $BlockAndTintGetter$$Type } from "net.minecraft.world.level.BlockAndTintGetter"
import { $TextureAtlasSprite, $TextureAtlasSprite$$Type } from "net.minecraft.client.renderer.texture.TextureAtlasSprite"
import { $BakedModel, $BakedModel$$Type } from "net.minecraft.client.resources.model.BakedModel"
import { $Transformation$$Type } from "com.mojang.math.Transformation"
import { $DynamicRender, $DynamicRender$$Type } from "com.gregtechceu.gtceu.client.renderer.machine.DynamicRender"
import { $ItemTransforms, $ItemTransforms$$Type } from "net.minecraft.client.renderer.block.model.ItemTransforms"
import { $MetaMachine$$Type } from "com.gregtechceu.gtceu.api.machine.MetaMachine"
import { $MachineRenderState$$Type } from "com.gregtechceu.gtceu.client.model.machine.MachineRenderState"
import { $Set$$Type } from "java.util.Set"
import { $RandomSource$$Type } from "net.minecraft.util.RandomSource"
import { $RenderType, $RenderType$$Type } from "net.minecraft.client.renderer.RenderType"
import { $BakedQuad, $BakedQuad$$Type } from "net.minecraft.client.renderer.block.model.BakedQuad"
import { $ModelData, $ModelData$$Type } from "net.minecraftforge.client.model.data.ModelData"
import { $BlockEntity, $BlockEntity$$Type } from "net.minecraft.world.level.block.entity.BlockEntity"
import { $List, $List$$Type } from "java.util.List"
import { $MachineDefinition, $MachineDefinition$$Type } from "com.gregtechceu.gtceu.api.machine.MachineDefinition"
import { $BlockEntityType } from "net.minecraft.world.level.block.entity.BlockEntityType"
import { $BlockPos$$Type } from "net.minecraft.core.BlockPos"
import { $Vec3$$Type } from "net.minecraft.world.phys.Vec3"
import { $MultiPartBakedModel$$Type } from "com.gregtechceu.gtceu.client.model.machine.multipart.MultiPartBakedModel"
import { $ItemStack$$Type } from "net.minecraft.world.item.ItemStack"
import { $MultiBufferSource$$Type } from "net.minecraft.client.renderer.MultiBufferSource"
import { $ModelState$$Type } from "net.minecraft.client.resources.model.ModelState"
import { $BaseBakedModel } from "com.gregtechceu.gtceu.client.model.BaseBakedModel"

export class $MachineModel extends $BaseBakedModel implements $ICoverableRenderer, $IBlockEntityRendererBakedModel<$BlockEntity> {
static readonly "FLUID_OUTPUT_OVERLAY": $ResourceLocation
static readonly "ITEM_OUTPUT_OVERLAY": $ResourceLocation
static readonly "PIPE_OVERLAY": $ResourceLocation
static readonly "TEXTURE_REMAPS": $Map<string, $List<string>>

constructor(machineDefinition0: $MachineDefinition$$Type, map1: $Map$$Type<$MachineRenderState$$Type, $BakedModel$$Type>, multiPartBakedModel2: $MultiPartBakedModel$$Type, list3: $List$$Type<$DynamicRender$$Type<any, any>>, itemTransforms4: $ItemTransforms$$Type, transformation5: $Transformation$$Type, modelState6: $ModelState$$Type, boolean7: boolean, boolean8: boolean, boolean9: boolean)

public "applyTransform"(itemDisplayContext0: $ItemDisplayContext$$Type, poseStack1: $PoseStack$$Type, boolean2: boolean): $BakedModel
public "getBlockEntityType"(): $BlockEntityType<$BlockEntity>
public "getDefinition"(): $MachineDefinition
public "getDynamicRenders"(): $List<$DynamicRender<any, any>>
public "getMachineQuads"(blockState0: $BlockState$$Type, direction1: $Direction$$Type, randomSource2: $RandomSource$$Type, modelData3: $ModelData$$Type, renderType4: $RenderType$$Type): $List<$BakedQuad>
public "getModelData"(blockAndTintGetter0: $BlockAndTintGetter$$Type, blockPos1: $BlockPos$$Type, blockState2: $BlockState$$Type, modelData3: $ModelData$$Type): $ModelData
public "getParticleIcon"(modelData0: $ModelData$$Type): $TextureAtlasSprite
public "getQuads"(blockState0: $BlockState$$Type, direction1: $Direction$$Type, randomSource2: $RandomSource$$Type, modelData3: $ModelData$$Type, renderType4: $RenderType$$Type): $List<$BakedQuad>
public "getQuads"(blockState0: $BlockState$$Type, direction1: $Direction$$Type, randomSource2: $RandomSource$$Type): $List<$BakedQuad>
public "getRenderBoundingBox"(blockEntity0: $BlockEntity$$Type): $AABB
public "getRenderPasses"(itemStack0: $ItemStack$$Type, boolean1: boolean): $List<$BakedModel>
public "getRenderTypes"(blockState0: $BlockState$$Type, randomSource1: $RandomSource$$Type, modelData2: $ModelData$$Type): $ChunkRenderTypeSet
public "getRenderTypes"(itemStack0: $ItemStack$$Type, boolean1: boolean): $List<$RenderType>
public "getTransforms"(): $ItemTransforms
public "getViewDistance"(): integer
public static "initSprites"(textureAtlas0: $TextureAtlas$$Type): void
public "remapReplaceableTextures"(string0: string): $List<string>
public "render"(blockEntity0: $BlockEntity$$Type, float1: float, poseStack2: $PoseStack$$Type, multiBufferSource3: $MultiBufferSource$$Type, int4: integer, int5: integer): void
public "renderBaseModel"(list0: $List$$Type<$BakedQuad$$Type>, machineRenderState1: $MachineRenderState$$Type, blockState2: $BlockState$$Type, direction3: $Direction$$Type, randomSource4: $RandomSource$$Type, modelData5: $ModelData$$Type, renderType6: $RenderType$$Type): void
public "renderByItem"(itemStack0: $ItemStack$$Type, itemDisplayContext1: $ItemDisplayContext$$Type, poseStack2: $PoseStack$$Type, multiBufferSource3: $MultiBufferSource$$Type, int4: integer, int5: integer): void
/** Client only, do not use in server scripts */
public "renderCovers"(list0: $List$$Type<$BakedQuad$$Type>, iCoverable1: $ICoverable$$Type, blockPos2: $BlockPos$$Type, blockAndTintGetter3: $BlockAndTintGetter$$Type, direction4: $Direction$$Type, randomSource5: $RandomSource$$Type, modelData6: $ModelData$$Type, renderType7: $RenderType$$Type): void
/** Client only, do not use in server scripts */
public "renderDynamicCovers"(metaMachine0: $MetaMachine$$Type, float1: float, poseStack2: $PoseStack$$Type, multiBufferSource3: $MultiBufferSource$$Type, int4: integer, int5: integer): void
public "renderMachine"(metaMachine0: $MetaMachine$$Type, blockAndTintGetter1: $BlockAndTintGetter$$Type, blockPos2: $BlockPos$$Type, blockState3: $BlockState$$Type, direction4: $Direction$$Type, randomSource5: $RandomSource$$Type, modelData6: $ModelData$$Type, renderType7: $RenderType$$Type): $List<$BakedQuad>
public "replacePartBaseModel"(list0: $List$$Type<$BakedQuad$$Type>, iMultiPart1: $IMultiPart$$Type, direction2: $Direction$$Type, direction3: $Direction$$Type, randomSource4: $RandomSource$$Type, modelData5: $ModelData$$Type, renderType6: $RenderType$$Type): $List<$BakedQuad>
public "setParticleIcon"(textureAtlasSprite0: $TextureAtlasSprite$$Type): void
public "setReplaceableTextures"(set0: $Set$$Type<string>): void
public "setTextureOverrides"(map0: $Map$$Type<string, $TextureAtlasSprite$$Type>): void
public "shouldRender"(blockEntity0: $BlockEntity$$Type, vec31: $Vec3$$Type): boolean
public "shouldRenderOffScreen"(blockEntity0: $BlockEntity$$Type): boolean
public "useAmbientOcclusion"(blockState0: $BlockState$$Type): boolean
public "useAmbientOcclusion"(blockState0: $BlockState$$Type, renderType1: $RenderType$$Type): boolean
public "useAmbientOcclusionWithLightEmission"(blockState0: $BlockState$$Type, renderType1: $RenderType$$Type): boolean
get "blockEntityType"(): $BlockEntityType<$BlockEntity>
get "definition"(): $MachineDefinition
get "dynamicRenders"(): $List<$DynamicRender<any, any>>
get "transforms"(): $ItemTransforms
get "viewDistance"(): integer
set "particleIcon"(value: $TextureAtlasSprite$$Type)
set "replaceableTextures"(value: $Set$$Type<string>)
set "textureOverrides"(value: $Map$$Type<string, $TextureAtlasSprite$$Type>)
}
}

declare module "com.gregtechceu.gtceu.client.renderer.machine.DynamicRenderType" {
import { $ResourceLocation } from "net.minecraft.resources.ResourceLocation"
import { $Codec, $Codec$$Type } from "com.mojang.serialization.Codec"
import { $DynamicRender } from "com.gregtechceu.gtceu.client.renderer.machine.DynamicRender"
import { $Comparable } from "java.lang.Comparable"
import { $Record } from "java.lang.Record"
import { $IMachineFeature } from "com.gregtechceu.gtceu.api.machine.feature.IMachineFeature"

export class $DynamicRenderType<T extends $IMachineFeature = $IMachineFeature, S extends $DynamicRender<T, S> = $DynamicRender<T, S>> extends $Record implements $Comparable<$DynamicRenderType<T, S>> {
constructor(codec: $Codec$$Type<S>)

public "codec"(): $Codec<S>
public "compareTo"(dynamicRenderType0: $DynamicRenderType$$Type<T, S>): integer
public "getId"(): $ResourceLocation
get "id"(): $ResourceLocation
}
}

declare module "com.gregtechceu.gtceu.client.renderer.block.FluidBlockRenderer" {
import { $Direction$$Type } from "net.minecraft.core.Direction"
import { $Collection$$Type } from "java.util.Collection"
import { $MapCodec } from "com.mojang.serialization.MapCodec"
import { $Set$$Type } from "java.util.Set"
import { $FluidBlockRenderer$Properties } from "com.gregtechceu.gtceu.client.renderer.block.FluidBlockRenderer$Properties"
import { $Vector3fc$$Type } from "org.joml.Vector3fc"
import { $BlockPos$$Type } from "net.minecraft.core.BlockPos"
import { $RenderUtil$FluidTextureType$$Type } from "com.gregtechceu.gtceu.client.util.RenderUtil$FluidTextureType"
import { $Map$$Type } from "java.util.Map"
import { $Vector3f, $Vector3f$$Type } from "org.joml.Vector3f"
import { $Fluid$$Type } from "net.minecraft.world.level.material.Fluid"
import { $Matrix4f$$Type } from "org.joml.Matrix4f"
import { $VertexConsumer$$Type } from "com.mojang.blaze3d.vertex.VertexConsumer"

export class $FluidBlockRenderer {
static readonly "CODEC": $MapCodec<$FluidBlockRenderer>

public "drawBlocks"(set0: $Set$$Type<$BlockPos$$Type>, matrix4f1: $Matrix4f$$Type, vertexConsumer2: $VertexConsumer$$Type, fluid3: $Fluid$$Type, fluidTextureType4: $RenderUtil$FluidTextureType$$Type, int5: integer, int6: integer): void
public "drawFace"(direction0: $Direction$$Type, matrix4f1: $Matrix4f$$Type, vertexConsumer2: $VertexConsumer$$Type, fluid3: $Fluid$$Type, fluidTextureType4: $RenderUtil$FluidTextureType$$Type, int5: integer, int6: integer): void
public "drawFace"(matrix4f0: $Matrix4f$$Type, vertexConsumer1: $VertexConsumer$$Type, vector3f2s: $Vector3f$$Type[], vector3fc3: $Vector3fc$$Type, float4: float, float5: float, float6: float, float7: float, int8: integer, int9: integer, int10: integer, int11: integer, int12: integer, int13: integer): void
public "drawPlane"(direction0: $Direction$$Type, collection1: $Collection$$Type<$BlockPos$$Type>, matrix4f2: $Matrix4f$$Type, vertexConsumer3: $VertexConsumer$$Type, fluid4: $Fluid$$Type, fluidTextureType5: $RenderUtil$FluidTextureType$$Type, int6: integer, blockPos7: $BlockPos$$Type): void
public "drawPlane"(direction0: $Direction$$Type, collection1: $Collection$$Type<$BlockPos$$Type>, matrix4f2: $Matrix4f$$Type, vertexConsumer3: $VertexConsumer$$Type, fluid4: $Fluid$$Type, fluidTextureType5: $RenderUtil$FluidTextureType$$Type, int6: integer, int7: integer): void
public "drawPlanes"(direction0s: $Direction$$Type[], map1: $Map$$Type<$Direction$$Type, $Collection$$Type<$BlockPos$$Type>>, matrix4f2: $Matrix4f$$Type, vertexConsumer3: $VertexConsumer$$Type, fluid4: $Fluid$$Type, fluidTextureType5: $RenderUtil$FluidTextureType$$Type, int6: integer, int7: integer): void
public "getProperties"(): $FluidBlockRenderer$Properties
public "transformVertices"(vector3fc0s: $Vector3fc$$Type[], direction1: $Direction$$Type): $Vector3f[]
get "properties"(): $FluidBlockRenderer$Properties
}
}

declare module "com.gregtechceu.gtceu.client.renderer.block.FluidBlockRenderer$Properties" {
import { $MapCodec } from "com.mojang.serialization.MapCodec"

export class $FluidBlockRenderer$Properties {
static readonly "CODEC": $MapCodec<$FluidBlockRenderer$Properties>

constructor()

public "getLight"(): integer
public "getOffsetFace"(): float
public "getOffsetX"(): float
public "getOffsetY"(): float
public "getOffsetZ"(): float
public "isOverwriteLight"(): boolean
public static "of"(float0: float, float1: float, float2: float, float3: float, boolean4: boolean, int5: integer): $FluidBlockRenderer$Properties
public "setLight"(int0: integer): void
public "setOffsetFace"(float0: float): void
public "setOffsetX"(float0: float): void
public "setOffsetY"(float0: float): void
public "setOffsetZ"(float0: float): void
public "setOverwriteLight"(boolean0: boolean): void
get "light"(): integer
get "offsetFace"(): float
get "offsetX"(): float
get "offsetY"(): float
get "offsetZ"(): float
get "overwriteLight"(): boolean
set "light"(value: integer)
set "offsetFace"(value: float)
set "offsetX"(value: float)
set "offsetY"(value: float)
set "offsetZ"(value: float)
set "overwriteLight"(value: boolean)
}
}

declare module "com.gregtechceu.gtceu.client.util.RenderUtil$FluidTextureType" {
import { $IClientFluidTypeExtensions$$Type } from "net.minecraftforge.client.extensions.common.IClientFluidTypeExtensions"
import { $Enum } from "java.lang.Enum"
import { $FluidStack$$Type } from "net.minecraftforge.fluids.FluidStack"
import { $TextureAtlasSprite } from "net.minecraft.client.renderer.texture.TextureAtlasSprite"

export class $RenderUtil$FluidTextureType extends $Enum<$RenderUtil$FluidTextureType> {
static readonly "FLOWING": $RenderUtil$FluidTextureType
static readonly "OVERLAY": $RenderUtil$FluidTextureType
static readonly "STILL": $RenderUtil$FluidTextureType

public "map"(iClientFluidTypeExtensions0: $IClientFluidTypeExtensions$$Type): $TextureAtlasSprite
public "map"(iClientFluidTypeExtensions0: $IClientFluidTypeExtensions$$Type, fluidStack1: $FluidStack$$Type): $TextureAtlasSprite
public static "valueOf"(string0: string): $RenderUtil$FluidTextureType
public static "values"(): $RenderUtil$FluidTextureType[]
}
}

