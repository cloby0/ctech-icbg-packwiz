declare module "com.github.alexthe666.citadel.client.event.EventPosePlayerHand" {
import { $LivingEntity$$Type } from "net.minecraft.world.entity.LivingEntity"
import { $Entity } from "net.minecraft.world.entity.Entity"
import { $Event } from "net.minecraftforge.eventbus.api.Event"
import { $HumanoidModel, $HumanoidModel$$Type } from "net.minecraft.client.model.HumanoidModel"

export class $EventPosePlayerHand extends $Event {
constructor(livingEntity0: $LivingEntity$$Type, humanoidModel1: $HumanoidModel$$Type, boolean2: boolean)
constructor()

public "getEntityIn"(): $Entity
public "getModel"(): $HumanoidModel
public "isLeftHand"(): boolean
get "entityIn"(): $Entity
get "model"(): $HumanoidModel
get "leftHand"(): boolean
}
}

declare module "com.github.alexthe666.citadel.client.event.EventRenderSplashText" {
import { $GuiGraphics, $GuiGraphics$$Type } from "net.minecraft.client.gui.GuiGraphics"
import { $Event } from "net.minecraftforge.eventbus.api.Event"

export class $EventRenderSplashText extends $Event {
constructor(string0: string, guiGraphics1: $GuiGraphics$$Type, float2: float)
constructor()

public "getGuiGraphics"(): $GuiGraphics
public "getPartialTicks"(): float
public "getSplashText"(): string
public "setSplashText"(string0: string): void
get "guiGraphics"(): $GuiGraphics
get "partialTicks"(): float
get "splashText"(): string
set "splashText"(value: string)
}
}

declare module "com.github.alexthe666.citadel.server.world.ModifiableTickRateServer" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $ModifiableTickRateServer {
"getMasterMs"(): long
"resetGlobalTickLengthMs"(): void
"setGlobalTickLengthMs"(long0: long): void
get "masterMs"(): long
set "globalTickLengthMs"(value: long)
}

export namespace $ModifiableTickRateServer {
const probejs$$marker: never
}
export abstract class $ModifiableTickRateServer$$Static implements $ModifiableTickRateServer {
}
}

declare module "com.github.alexthe666.citadel.animation.AnimationEvent$Start" {
import { $Entity, $Entity$$Type } from "net.minecraft.world.entity.Entity"
import { $IAnimatedEntity, $IAnimatedEntity$$Type } from "com.github.alexthe666.citadel.animation.IAnimatedEntity"
import { $Animation$$Type } from "com.github.alexthe666.citadel.animation.Animation"
import { $AnimationEvent } from "com.github.alexthe666.citadel.animation.AnimationEvent"

export class $AnimationEvent$Start<T extends ($Entity & $IAnimatedEntity) = ($Entity & $IAnimatedEntity)> extends $AnimationEvent<T> {
constructor(t0: T, animation1: $Animation$$Type)
constructor()

public "setAnimation"(animation0: $Animation$$Type): void
set "animation"(value: $Animation$$Type)
}
}

declare module "com.github.L_Ender.lionfishapi.server.event.AnimationEvent$Start" {
import { $Animation$$Type } from "com.github.L_Ender.lionfishapi.server.animation.Animation"
import { $IAnimatedEntity, $IAnimatedEntity$$Type } from "com.github.L_Ender.lionfishapi.server.animation.IAnimatedEntity"
import { $Entity, $Entity$$Type } from "net.minecraft.world.entity.Entity"
import { $AnimationEvent } from "com.github.L_Ender.lionfishapi.server.event.AnimationEvent"

export class $AnimationEvent$Start<T extends ($Entity & $IAnimatedEntity) = ($Entity & $IAnimatedEntity)> extends $AnimationEvent<T> {
constructor(t0: T, animation1: $Animation$$Type)
constructor()

public "setAnimation"(animation0: $Animation$$Type): void
set "animation"(value: $Animation$$Type)
}
}

declare module "com.github.L_Ender.cataclysm.mixin.accessor.WorldGenRegionAccessor" {
import { $ChunkPos } from "net.minecraft.world.level.ChunkPos"
import { $List } from "java.util.List"
import { $StructureManager } from "net.minecraft.world.level.StructureManager"
import { $ChunkAccess } from "net.minecraft.world.level.chunk.ChunkAccess"

export interface $WorldGenRegionAccessor {
"getCache"(): $List<$ChunkAccess>
"getFirstPos"(): $ChunkPos
"getLastPos"(): $ChunkPos
"getSize"(): integer
"getStructureManager"(): $StructureManager
get "cache"(): $List<$ChunkAccess>
get "firstPos"(): $ChunkPos
get "lastPos"(): $ChunkPos
get "size"(): integer
get "structureManager"(): $StructureManager
}

export namespace $WorldGenRegionAccessor {
const probejs$$marker: never
}
export abstract class $WorldGenRegionAccessor$$Static implements $WorldGenRegionAccessor {
}
}

declare module "com.github.L_Ender.lionfishapi.client.event.EventGetFluidRenderType" {
import { $FluidState, $FluidState$$Type } from "net.minecraft.world.level.material.FluidState"
import { $Event } from "net.minecraftforge.eventbus.api.Event"
import { $RenderType, $RenderType$$Type } from "net.minecraft.client.renderer.RenderType"

export class $EventGetFluidRenderType extends $Event {
constructor(fluidState0: $FluidState$$Type, renderType1: $RenderType$$Type)
constructor()

public "getFluidState"(): $FluidState
public "getRenderType"(): $RenderType
public "setRenderType"(renderType0: $RenderType$$Type): void
get "fluidState"(): $FluidState
get "renderType"(): $RenderType
set "renderType"(value: $RenderType$$Type)
}
}

declare module "com.github.alexthe666.citadel.server.generation.NoiseGeneratorSettingsAccessor" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $NoiseGeneratorSettingsAccessor {
"onSaveData"(boolean0: boolean): void
}

export namespace $NoiseGeneratorSettingsAccessor {
const probejs$$marker: never
}
export abstract class $NoiseGeneratorSettingsAccessor$$Static implements $NoiseGeneratorSettingsAccessor {
}
}

declare module "com.github.alexthe666.citadel.client.event.EventLivingRenderer$PostSetupAnimations" {
import { $LivingEntity$$Type } from "net.minecraft.world.entity.LivingEntity"
import { $EventLivingRenderer$AccessToBufferSource } from "com.github.alexthe666.citadel.client.event.EventLivingRenderer$AccessToBufferSource"
import { $EntityModel$$Type } from "net.minecraft.client.model.EntityModel"
import { $MultiBufferSource$$Type } from "net.minecraft.client.renderer.MultiBufferSource"
import { $PoseStack$$Type } from "com.mojang.blaze3d.vertex.PoseStack"

export class $EventLivingRenderer$PostSetupAnimations extends $EventLivingRenderer$AccessToBufferSource {
constructor(livingEntity0: $LivingEntity$$Type, entityModel1: $EntityModel$$Type, poseStack2: $PoseStack$$Type, float3: float, float4: float, multiBufferSource5: $MultiBufferSource$$Type, int6: integer)
constructor()

}
}

declare module "com.github.alexthe666.citadel.animation.AnimationEvent" {
import { $Entity } from "net.minecraft.world.entity.Entity"
import { $IAnimatedEntity } from "com.github.alexthe666.citadel.animation.IAnimatedEntity"
import { $Animation } from "com.github.alexthe666.citadel.animation.Animation"
import { $Event } from "net.minecraftforge.eventbus.api.Event"

export class $AnimationEvent<T extends ($Entity & $IAnimatedEntity) = ($Entity & $IAnimatedEntity)> extends $Event {
constructor()

public "getAnimation"(): $Animation
public "getEntity"(): T
get "animation"(): $Animation
get "entity"(): T
}
}

declare module "com.github.L_Ender.cataclysm.mixin.accessor.StructureManagerAccessor" {
import { $LevelAccessor } from "net.minecraft.world.level.LevelAccessor"

export interface $StructureManagerAccessor {
"getLevel"(): $LevelAccessor
get "level"(): $LevelAccessor
}

export namespace $StructureManagerAccessor {
const probejs$$marker: never
}
export abstract class $StructureManagerAccessor$$Static implements $StructureManagerAccessor {
}
}

declare module "com.github.alexthe666.citadel.animation.IAnimatedEntity" {
import { $Animation, $Animation$$Type } from "com.github.alexthe666.citadel.animation.Animation"

export interface $IAnimatedEntity {
"getAnimation"(): $Animation
"getAnimationTick"(): integer
"getAnimations"(): $Animation[]
"setAnimation"(animation0: $Animation$$Type): void
"setAnimationTick"(int0: integer): void
get "animation"(): $Animation
get "animationTick"(): integer
get "animations"(): $Animation[]
set "animation"(value: $Animation$$Type)
set "animationTick"(value: integer)
}

export namespace $IAnimatedEntity {
const NO_ANIMATION: $Animation
}
export abstract class $IAnimatedEntity$$Static implements $IAnimatedEntity {
static readonly "NO_ANIMATION": $Animation

}
}

declare module "com.github.alexthe666.citadel.server.entity.ICitadelDataEntity" {
import { $CompoundTag, $CompoundTag$$Type } from "net.minecraft.nbt.CompoundTag"

export interface $ICitadelDataEntity {
"getCitadelEntityData"(): $CompoundTag
"setCitadelEntityData"(compoundTag0: $CompoundTag$$Type): void
get "citadelEntityData"(): $CompoundTag
set "citadelEntityData"(value: $CompoundTag$$Type)
}

export namespace $ICitadelDataEntity {
const probejs$$marker: never
}
export abstract class $ICitadelDataEntity$$Static implements $ICitadelDataEntity {
}
}

declare module "com.github.alexthe666.citadel.client.event.EventLivingRenderer$PostRenderModel" {
import { $LivingEntity$$Type } from "net.minecraft.world.entity.LivingEntity"
import { $EventLivingRenderer$AccessToBufferSource } from "com.github.alexthe666.citadel.client.event.EventLivingRenderer$AccessToBufferSource"
import { $EntityModel$$Type } from "net.minecraft.client.model.EntityModel"
import { $MultiBufferSource$$Type } from "net.minecraft.client.renderer.MultiBufferSource"
import { $PoseStack$$Type } from "com.mojang.blaze3d.vertex.PoseStack"

export class $EventLivingRenderer$PostRenderModel extends $EventLivingRenderer$AccessToBufferSource {
constructor(livingEntity0: $LivingEntity$$Type, entityModel1: $EntityModel$$Type, poseStack2: $PoseStack$$Type, float3: float, float4: float, multiBufferSource5: $MultiBufferSource$$Type, int6: integer)
constructor()

}
}

declare module "com.github.L_Ender.lionfishapi.server.event.AnimationEvent$Tick" {
import { $Animation$$Type } from "com.github.L_Ender.lionfishapi.server.animation.Animation"
import { $IAnimatedEntity, $IAnimatedEntity$$Type } from "com.github.L_Ender.lionfishapi.server.animation.IAnimatedEntity"
import { $Entity, $Entity$$Type } from "net.minecraft.world.entity.Entity"
import { $AnimationEvent } from "com.github.L_Ender.lionfishapi.server.event.AnimationEvent"

export class $AnimationEvent$Tick<T extends ($Entity & $IAnimatedEntity) = ($Entity & $IAnimatedEntity)> extends $AnimationEvent<T> {
constructor(t0: T, animation1: $Animation$$Type, int2: integer)
constructor()

public "getTick"(): integer
get "tick"(): integer
}
}

declare module "com.github.alexthe666.citadel.server.world.ExpandedBiomeSource" {
import { $Holder, $Holder$$Type } from "net.minecraft.core.Holder"
import { $Map, $Map$$Type } from "java.util.Map"
import { $Set$$Type } from "java.util.Set"
import { $Biome, $Biome$$Type } from "net.minecraft.world.level.biome.Biome"
import { $ResourceKey, $ResourceKey$$Type } from "net.minecraft.resources.ResourceKey"

/** @deprecated */
export interface $ExpandedBiomeSource {
"expandBiomesWith"(set0: $Set$$Type<$Holder$$Type<$Biome$$Type>>): void
"getResourceKeyMap"(): $Map<$ResourceKey<$Biome>, $Holder<$Biome>>
"setResourceKeyMap"(map0: $Map$$Type<$ResourceKey$$Type<$Biome$$Type>, $Holder$$Type<$Biome$$Type>>): void
get "resourceKeyMap"(): $Map<$ResourceKey<$Biome>, $Holder<$Biome>>
set "resourceKeyMap"(value: $Map$$Type<$ResourceKey$$Type<$Biome$$Type>, $Holder$$Type<$Biome$$Type>>)
}

export namespace $ExpandedBiomeSource {
const probejs$$marker: never
}
export abstract class $ExpandedBiomeSource$$Static implements $ExpandedBiomeSource {
}
}

declare module "com.github.alexthe666.citadel.client.event.EventGetOutlineColor" {
import { $Entity, $Entity$$Type } from "net.minecraft.world.entity.Entity"
import { $Event } from "net.minecraftforge.eventbus.api.Event"

export class $EventGetOutlineColor extends $Event {
constructor(entity0: $Entity$$Type, int1: integer)
constructor()

public "getColor"(): integer
public "getEntityIn"(): $Entity
public "setColor"(int0: integer): void
public "setEntityIn"(entity0: $Entity$$Type): void
get "color"(): integer
get "entityIn"(): $Entity
set "color"(value: integer)
set "entityIn"(value: $Entity$$Type)
}
}

declare module "com.github.alexthe666.citadel.client.event.EventGetFluidRenderType" {
import { $FluidState, $FluidState$$Type } from "net.minecraft.world.level.material.FluidState"
import { $Event } from "net.minecraftforge.eventbus.api.Event"
import { $RenderType, $RenderType$$Type } from "net.minecraft.client.renderer.RenderType"

export class $EventGetFluidRenderType extends $Event {
constructor(fluidState0: $FluidState$$Type, renderType1: $RenderType$$Type)
constructor()

public "getFluidState"(): $FluidState
public "getRenderType"(): $RenderType
public "setRenderType"(renderType0: $RenderType$$Type): void
get "fluidState"(): $FluidState
get "renderType"(): $RenderType
set "renderType"(value: $RenderType$$Type)
}
}

declare module "com.github.alexthe666.citadel.server.event.EventChangeEntityTickRate" {
import { $Entity, $Entity$$Type } from "net.minecraft.world.entity.Entity"
import { $Event } from "net.minecraftforge.eventbus.api.Event"

export class $EventChangeEntityTickRate extends $Event {
constructor(entity0: $Entity$$Type, float1: float)
constructor()

public "getEntity"(): $Entity
public "getTargetTickRate"(): float
get "entity"(): $Entity
get "targetTickRate"(): float
}
}

declare module "com.github.L_Ender.lionfishapi.server.event.StandOnFluidEvent" {
import { $LivingEntity$$Type } from "net.minecraft.world.entity.LivingEntity"
import { $LivingEvent } from "net.minecraftforge.event.entity.living.LivingEvent"
import { $FluidState, $FluidState$$Type } from "net.minecraft.world.level.material.FluidState"

export class $StandOnFluidEvent extends $LivingEvent {
constructor(livingEntity0: $LivingEntity$$Type, fluidState1: $FluidState$$Type)
constructor()

public "getFluidState"(): $FluidState
get "fluidState"(): $FluidState
}
}

declare module "com.github.alexthe666.citadel.client.event.EventGetStarBrightness" {
import { $Event } from "net.minecraftforge.eventbus.api.Event"
import { $ClientLevel, $ClientLevel$$Type } from "net.minecraft.client.multiplayer.ClientLevel"

export class $EventGetStarBrightness extends $Event {
constructor(clientLevel0: $ClientLevel$$Type, float1: float, float2: float)
constructor()

public "getBrightness"(): float
public "getLevel"(): $ClientLevel
public "getPartialTicks"(): float
public "setBrightness"(float0: float): void
get "brightness"(): float
get "level"(): $ClientLevel
get "partialTicks"(): float
set "brightness"(value: float)
}
}

declare module "com.github.L_Ender.cataclysm.mixin.accessor.StructureProcessorAccessor" {
import { $StructureProcessorType } from "net.minecraft.world.level.levelgen.structure.templatesystem.StructureProcessorType"

export interface $StructureProcessorAccessor {
"callGetType"(): $StructureProcessorType<any>
}

export namespace $StructureProcessorAccessor {
const probejs$$marker: never
}
export abstract class $StructureProcessorAccessor$$Static implements $StructureProcessorAccessor {
}
}

declare module "com.github.L_Ender.cataclysm.mixin.accessor.SinglePoolElementAccessor" {
import { $StructureTemplateManager$$Type } from "net.minecraft.world.level.levelgen.structure.templatesystem.StructureTemplateManager"
import { $StructureTemplate } from "net.minecraft.world.level.levelgen.structure.templatesystem.StructureTemplate"

export interface $SinglePoolElementAccessor {
"callGetTemplate"(structureTemplateManager0: $StructureTemplateManager$$Type): $StructureTemplate
}

export namespace $SinglePoolElementAccessor {
const probejs$$marker: never
}
export abstract class $SinglePoolElementAccessor$$Static implements $SinglePoolElementAccessor {
}
}

declare module "com.github.alexthe666.citadel.client.event.EventLivingRenderer$PreSetupAnimations" {
import { $LivingEntity$$Type } from "net.minecraft.world.entity.LivingEntity"
import { $EventLivingRenderer$AccessToBufferSource } from "com.github.alexthe666.citadel.client.event.EventLivingRenderer$AccessToBufferSource"
import { $EntityModel$$Type } from "net.minecraft.client.model.EntityModel"
import { $MultiBufferSource$$Type } from "net.minecraft.client.renderer.MultiBufferSource"
import { $PoseStack$$Type } from "com.mojang.blaze3d.vertex.PoseStack"

export class $EventLivingRenderer$PreSetupAnimations extends $EventLivingRenderer$AccessToBufferSource {
constructor(livingEntity0: $LivingEntity$$Type, entityModel1: $EntityModel$$Type, poseStack2: $PoseStack$$Type, float3: float, float4: float, multiBufferSource5: $MultiBufferSource$$Type, int6: integer)
constructor()

}
}

declare module "com.github.alexthe666.citadel.server.event.EventMergeStructureSpawns" {
import { $TagKey$$Type } from "net.minecraft.tags.TagKey"
import { $Structure$$Type } from "net.minecraft.world.level.levelgen.structure.Structure"
import { $BlockPos, $BlockPos$$Type } from "net.minecraft.core.BlockPos"
import { $MobSpawnSettings$SpawnerData, $MobSpawnSettings$SpawnerData$$Type } from "net.minecraft.world.level.biome.MobSpawnSettings$SpawnerData"
import { $MobCategory, $MobCategory$$Type } from "net.minecraft.world.entity.MobCategory"
import { $WeightedRandomList, $WeightedRandomList$$Type } from "net.minecraft.util.random.WeightedRandomList"
import { $Event } from "net.minecraftforge.eventbus.api.Event"
import { $StructureManager, $StructureManager$$Type } from "net.minecraft.world.level.StructureManager"

export class $EventMergeStructureSpawns extends $Event {
constructor(structureManager0: $StructureManager$$Type, blockPos1: $BlockPos$$Type, mobCategory2: $MobCategory$$Type, weightedRandomList3: $WeightedRandomList$$Type<$MobSpawnSettings$SpawnerData$$Type>, weightedRandomList4: $WeightedRandomList$$Type<$MobSpawnSettings$SpawnerData$$Type>)
constructor()

public "getBiomeSpawns"(): $WeightedRandomList<$MobSpawnSettings$SpawnerData>
public "getCategory"(): $MobCategory
public "getPos"(): $BlockPos
public "getStructureManager"(): $StructureManager
public "getStructureSpawns"(): $WeightedRandomList<$MobSpawnSettings$SpawnerData>
public "isStructureTagged"(tagKey0: $TagKey$$Type<$Structure$$Type>): boolean
public "mergeSpawns"(): void
public "setStructureSpawns"(weightedRandomList0: $WeightedRandomList$$Type<$MobSpawnSettings$SpawnerData$$Type>): void
get "biomeSpawns"(): $WeightedRandomList<$MobSpawnSettings$SpawnerData>
get "category"(): $MobCategory
get "pos"(): $BlockPos
get "structureManager"(): $StructureManager
get "structureSpawns"(): $WeightedRandomList<$MobSpawnSettings$SpawnerData>
set "structureSpawns"(value: $WeightedRandomList$$Type<$MobSpawnSettings$SpawnerData$$Type>)
}
}

declare module "com.github.alexthe666.citadel.client.event.EventLivingRenderer" {
import { $LivingEntity, $LivingEntity$$Type } from "net.minecraft.world.entity.LivingEntity"
import { $Event } from "net.minecraftforge.eventbus.api.Event"
import { $EntityModel, $EntityModel$$Type } from "net.minecraft.client.model.EntityModel"
import { $PoseStack, $PoseStack$$Type } from "com.mojang.blaze3d.vertex.PoseStack"

export class $EventLivingRenderer extends $Event {
constructor(livingEntity0: $LivingEntity$$Type, entityModel1: $EntityModel$$Type, poseStack2: $PoseStack$$Type, float3: float)
constructor()

public "getEntity"(): $LivingEntity
public "getModel"(): $EntityModel
public "getPartialTicks"(): float
public "getPoseStack"(): $PoseStack
get "entity"(): $LivingEntity
get "model"(): $EntityModel
get "partialTicks"(): float
get "poseStack"(): $PoseStack
}
}

declare module "com.github.L_Ender.cataclysm.client.event.EventPosePlayerHand" {
import { $LivingEntity$$Type } from "net.minecraft.world.entity.LivingEntity"
import { $Entity } from "net.minecraft.world.entity.Entity"
import { $Event } from "net.minecraftforge.eventbus.api.Event"
import { $HumanoidModel, $HumanoidModel$$Type } from "net.minecraft.client.model.HumanoidModel"

export class $EventPosePlayerHand extends $Event {
constructor(livingEntity0: $LivingEntity$$Type, humanoidModel1: $HumanoidModel$$Type, boolean2: boolean)
constructor()

public "getEntityIn"(): $Entity
public "getModel"(): $HumanoidModel
public "isLeftHand"(): boolean
get "entityIn"(): $Entity
get "model"(): $HumanoidModel
get "leftHand"(): boolean
}
}

declare module "com.github.alexthe666.citadel.client.event.EventLivingRenderer$SetupRotations" {
import { $LivingEntity$$Type } from "net.minecraft.world.entity.LivingEntity"
import { $EventLivingRenderer } from "com.github.alexthe666.citadel.client.event.EventLivingRenderer"
import { $EntityModel$$Type } from "net.minecraft.client.model.EntityModel"
import { $PoseStack$$Type } from "com.mojang.blaze3d.vertex.PoseStack"

export class $EventLivingRenderer$SetupRotations extends $EventLivingRenderer {
constructor(livingEntity0: $LivingEntity$$Type, entityModel1: $EntityModel$$Type, poseStack2: $PoseStack$$Type, float3: float, float4: float)
constructor()

public "getBodyYRot"(): float
get "bodyYRot"(): float
}
}

declare module "com.github.L_Ender.cataclysm.mixin.accessor.BoundingBoxAccessor" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $BoundingBoxAccessor {
"setMaxX"(int0: integer): void
"setMaxY"(int0: integer): void
"setMaxZ"(int0: integer): void
"setMinX"(int0: integer): void
"setMinY"(int0: integer): void
"setMinZ"(int0: integer): void
set "maxX"(value: integer)
set "maxY"(value: integer)
set "maxZ"(value: integer)
set "minX"(value: integer)
set "minY"(value: integer)
set "minZ"(value: integer)
}

export namespace $BoundingBoxAccessor {
const probejs$$marker: never
}
export abstract class $BoundingBoxAccessor$$Static implements $BoundingBoxAccessor {
}
}

declare module "com.github.alexthe666.citadel.server.event.EventReplaceBiome" {
import { $Holder, $Holder$$Type } from "net.minecraft.core.Holder"
import { $Climate$Sampler, $Climate$Sampler$$Type } from "net.minecraft.world.level.biome.Climate$Sampler"
import { $Event } from "net.minecraftforge.eventbus.api.Event"
import { $ExpandedBiomeSource, $ExpandedBiomeSource$$Type } from "com.github.alexthe666.citadel.server.world.ExpandedBiomeSource"
import { $Level } from "net.minecraft.world.level.Level"
import { $Biome, $Biome$$Type } from "net.minecraft.world.level.biome.Biome"
import { $ResourceKey, $ResourceKey$$Type } from "net.minecraft.resources.ResourceKey"

/** @deprecated */
export class $EventReplaceBiome extends $Event {
constructor()
constructor(expandedBiomeSource0: $ExpandedBiomeSource$$Type, holder1: $Holder$$Type<$Biome$$Type>, int2: integer, int3: integer, int4: integer, float5: float, float6: float, float7: float, float8: float, float9: float, float10: float, long11: long, resourceKey12: $ResourceKey$$Type<$Level>, sampler13: $Climate$Sampler$$Type)

public "getBiomeSource"(): $ExpandedBiomeSource
public "getBiomeToGenerate"(): $Holder<$Biome>
public "getClimateSampler"(): $Climate$Sampler
public "getContinentalness"(): float
public "getDepth"(): float
public "getErosion"(): float
public "getHumidity"(): float
public "getTemperature"(): float
public "getWeirdness"(): float
public "getWorldDimension"(): $ResourceKey<$Level>
public "getWorldSeed"(): long
public "getX"(): integer
public "getY"(): integer
public "getZ"(): integer
public "setBiomeToGenerate"(holder0: $Holder$$Type<$Biome$$Type>): void
public "testContinentalness"(float0: float, float1: float): boolean
public "testDepth"(float0: float, float1: float): boolean
public "testErosion"(float0: float, float1: float): boolean
public "testHumidity"(float0: float, float1: float): boolean
public "testTemperature"(float0: float, float1: float): boolean
public "testWeirdness"(float0: float, float1: float): boolean
get "biomeSource"(): $ExpandedBiomeSource
set "biomeSource"(value: $ExpandedBiomeSource$$Type)
get "biomeToGenerate"(): $Holder<$Biome>
set "biomeToGenerate"(value: $Holder$$Type<$Biome$$Type>)
get "continentalness"(): float
set "continentalness"(value: float)
get "depth"(): float
set "depth"(value: float)
get "erosion"(): float
set "erosion"(value: float)
get "humidity"(): float
set "humidity"(value: float)
get "temperature"(): float
set "temperature"(value: float)
get "weirdness"(): float
set "weirdness"(value: float)
get "climateSampler"(): $Climate$Sampler
get "worldDimension"(): $ResourceKey<$Level>
get "worldSeed"(): long
get "x"(): integer
get "y"(): integer
get "z"(): integer
}
}

declare module "com.github.L_Ender.lionfishapi.server.event.AnimationEvent" {
import { $Animation } from "com.github.L_Ender.lionfishapi.server.animation.Animation"
import { $IAnimatedEntity } from "com.github.L_Ender.lionfishapi.server.animation.IAnimatedEntity"
import { $Entity } from "net.minecraft.world.entity.Entity"
import { $Event } from "net.minecraftforge.eventbus.api.Event"

export class $AnimationEvent<T extends ($Entity & $IAnimatedEntity) = ($Entity & $IAnimatedEntity)> extends $Event {
constructor()

public "getAnimation"(): $Animation
public "getEntity"(): T
get "animation"(): $Animation
get "entity"(): T
}
}

declare module "com.github.L_Ender.cataclysm.mixin.accessor.FeaturePoolElementAccessor" {
import { $Holder } from "net.minecraft.core.Holder"
import { $PlacedFeature } from "net.minecraft.world.level.levelgen.placement.PlacedFeature"

export interface $FeaturePoolElementAccessor {
"getFeature"(): $Holder<$PlacedFeature>
get "feature"(): $Holder<$PlacedFeature>
}

export namespace $FeaturePoolElementAccessor {
const probejs$$marker: never
}
export abstract class $FeaturePoolElementAccessor$$Static implements $FeaturePoolElementAccessor {
}
}

declare module "com.github.alexthe666.citadel.animation.AnimationEvent$Tick" {
import { $Entity, $Entity$$Type } from "net.minecraft.world.entity.Entity"
import { $IAnimatedEntity, $IAnimatedEntity$$Type } from "com.github.alexthe666.citadel.animation.IAnimatedEntity"
import { $Animation$$Type } from "com.github.alexthe666.citadel.animation.Animation"
import { $AnimationEvent } from "com.github.alexthe666.citadel.animation.AnimationEvent"

export class $AnimationEvent$Tick<T extends ($Entity & $IAnimatedEntity) = ($Entity & $IAnimatedEntity)> extends $AnimationEvent<T> {
constructor(t0: T, animation1: $Animation$$Type, int2: integer)
constructor()

public "getTick"(): integer
get "tick"(): integer
}
}

declare module "com.github.alexthe666.citadel.client.event.EventRenderSplashText$Post" {
import { $GuiGraphics$$Type } from "net.minecraft.client.gui.GuiGraphics"
import { $EventRenderSplashText } from "com.github.alexthe666.citadel.client.event.EventRenderSplashText"

export class $EventRenderSplashText$Post extends $EventRenderSplashText {
constructor(string0: string, guiGraphics1: $GuiGraphics$$Type, float2: float)
constructor()

}
}

declare module "com.github.alexthe666.citadel.animation.Animation" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export class $Animation {
/** @deprecated */
public static "create"(int0: integer, int1: integer): $Animation
public static "create"(int0: integer): $Animation
public "getDuration"(): integer
/** @deprecated */
public "getID"(): integer
get "duration"(): integer
get "iD"(): integer
}
}

declare module "com.github.L_Ender.lionfishapi.server.animation.IAnimatedEntity" {
import { $Animation, $Animation$$Type } from "com.github.L_Ender.lionfishapi.server.animation.Animation"

export interface $IAnimatedEntity {
"getAnimation"(): $Animation
"getAnimationTick"(): integer
"getAnimations"(): $Animation[]
"setAnimation"(animation0: $Animation$$Type): void
"setAnimationTick"(int0: integer): void
get "animation"(): $Animation
get "animationTick"(): integer
get "animations"(): $Animation[]
set "animation"(value: $Animation$$Type)
set "animationTick"(value: integer)
}

export namespace $IAnimatedEntity {
const NO_ANIMATION: $Animation
}
export abstract class $IAnimatedEntity$$Static implements $IAnimatedEntity {
static readonly "NO_ANIMATION": $Animation

}
}

declare module "com.github.alexthe666.citadel.client.event.EventRenderSplashText$Pre" {
import { $GuiGraphics$$Type } from "net.minecraft.client.gui.GuiGraphics"
import { $EventRenderSplashText } from "com.github.alexthe666.citadel.client.event.EventRenderSplashText"

export class $EventRenderSplashText$Pre extends $EventRenderSplashText {
constructor()
constructor(string0: string, guiGraphics1: $GuiGraphics$$Type, float2: float, int3: integer)

public "getSplashTextColor"(): integer
public "setSplashTextColor"(int0: integer): void
get "splashTextColor"(): integer
set "splashTextColor"(value: integer)
}
}

declare module "com.github.L_Ender.lionfishapi.server.animation.Animation" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export class $Animation {
/** @deprecated */
public static "create"(int0: integer, int1: integer): $Animation
public static "create"(int0: integer): $Animation
public "doesLoop"(): boolean
public "getDuration"(): integer
/** @deprecated */
public "getID"(): integer
public "setLooping"(boolean0: boolean): $Animation
get "duration"(): integer
get "iD"(): integer
set "looping"(value: boolean)
}
}

declare module "com.github.alexthe666.citadel.client.event.EventLivingRenderer$AccessToBufferSource" {
import { $LivingEntity$$Type } from "net.minecraft.world.entity.LivingEntity"
import { $EventLivingRenderer } from "com.github.alexthe666.citadel.client.event.EventLivingRenderer"
import { $EntityModel$$Type } from "net.minecraft.client.model.EntityModel"
import { $MultiBufferSource, $MultiBufferSource$$Type } from "net.minecraft.client.renderer.MultiBufferSource"
import { $PoseStack$$Type } from "com.mojang.blaze3d.vertex.PoseStack"

export class $EventLivingRenderer$AccessToBufferSource extends $EventLivingRenderer {
constructor()
constructor(livingEntity0: $LivingEntity$$Type, entityModel1: $EntityModel$$Type, poseStack2: $PoseStack$$Type, float3: float, float4: float, multiBufferSource5: $MultiBufferSource$$Type, int6: integer)

public "getBodyYRot"(): float
public "getBufferSource"(): $MultiBufferSource
public "getPackedLight"(): integer
get "bodyYRot"(): float
get "bufferSource"(): $MultiBufferSource
get "packedLight"(): integer
}
}

declare module "com.github.L_Ender.cataclysm.mixin.accessor.StructureTemplatePoolAccessor" {
import { $List } from "java.util.List"
import { $Pair } from "com.mojang.datafixers.util.Pair"
import { $StructurePoolElement } from "net.minecraft.world.level.levelgen.structure.pools.StructurePoolElement"

export interface $StructureTemplatePoolAccessor {
"getRawTemplates"(): $List<$Pair<$StructurePoolElement, integer>>
get "rawTemplates"(): $List<$Pair<$StructurePoolElement, integer>>
}

export namespace $StructureTemplatePoolAccessor {
const probejs$$marker: never
}
export abstract class $StructureTemplatePoolAccessor$$Static implements $StructureTemplatePoolAccessor {
}
}

declare module "com.github.L_Ender.cataclysm.mixin.accessor.ListPoolElementAccessor" {
import { $List } from "java.util.List"
import { $StructurePoolElement } from "net.minecraft.world.level.levelgen.structure.pools.StructurePoolElement"

export interface $ListPoolElementAccessor {
"getElements"(): $List<$StructurePoolElement>
get "elements"(): $List<$StructurePoolElement>
}

export namespace $ListPoolElementAccessor {
const probejs$$marker: never
}
export abstract class $ListPoolElementAccessor$$Static implements $ListPoolElementAccessor {
}
}

