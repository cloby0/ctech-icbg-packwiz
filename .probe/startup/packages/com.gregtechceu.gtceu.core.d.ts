declare module "com.gregtechceu.gtceu.core.IFireImmuneEntity" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export interface $IFireImmuneEntity {
"gtceu$setFireImmune"(boolean0: boolean): void
}

export namespace $IFireImmuneEntity {
const probejs$$marker: never
}
export abstract class $IFireImmuneEntity$$Static implements $IFireImmuneEntity {
}
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $IFireImmuneEntity$$Type = ($IFireImmuneEntity | ((arg0: boolean) => void));
}

declare module "com.gregtechceu.gtceu.core.mixins.ShapedRecipeAccessor" {
import { $ItemStack, $ItemStack$$Type } from "net.minecraft.world.item.ItemStack"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export interface $ShapedRecipeAccessor {
"getResult"(): $ItemStack
get "result"(): $ItemStack
}

export namespace $ShapedRecipeAccessor {
const probejs$$marker: never
}
export abstract class $ShapedRecipeAccessor$$Static implements $ShapedRecipeAccessor {
}
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $ShapedRecipeAccessor$$Type = ($ShapedRecipeAccessor | (() => $ItemStack$$Type));
}

declare module "com.gregtechceu.gtceu.core.mixins.ServerGamePacketListenerImplAccessor" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export interface $ServerGamePacketListenerImplAccessor {
"setAboveGroundTickCount"(int0: integer): void
set "aboveGroundTickCount"(value: integer)
}

export namespace $ServerGamePacketListenerImplAccessor {
const probejs$$marker: never
}
export abstract class $ServerGamePacketListenerImplAccessor$$Static implements $ServerGamePacketListenerImplAccessor {
}
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $ServerGamePacketListenerImplAccessor$$Type = ($ServerGamePacketListenerImplAccessor | ((arg0: integer) => void));
}

declare module "com.gregtechceu.gtceu.core.mixins.PrimedTntAccessor" {
import { $LivingEntity, $LivingEntity$$Type } from "net.minecraft.world.entity.LivingEntity"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export interface $PrimedTntAccessor {
"setOwner"(livingEntity0: $LivingEntity$$Type): void
set "owner"(value: $LivingEntity$$Type)
}

export namespace $PrimedTntAccessor {
const probejs$$marker: never
}
export abstract class $PrimedTntAccessor$$Static implements $PrimedTntAccessor {
}
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $PrimedTntAccessor$$Type = ($PrimedTntAccessor | ((arg0: $LivingEntity) => void));
}

declare module "com.gregtechceu.gtceu.core.mixins.forge.ConfiguredModelBuilderAccessor" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export interface $ConfiguredModelBuilderAccessor {
}

export namespace $ConfiguredModelBuilderAccessor {
const probejs$$marker: never
}
export abstract class $ConfiguredModelBuilderAccessor$$Static implements $ConfiguredModelBuilderAccessor {
}
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $ConfiguredModelBuilderAccessor$$Type = ($ConfiguredModelBuilderAccessor);
}

declare module "com.gregtechceu.gtceu.core.mixins.client.GuiGraphicsAccessor" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export interface $GuiGraphicsAccessor {
"callFlushIfUnmanaged"(): void
}

export namespace $GuiGraphicsAccessor {
const probejs$$marker: never
}
export abstract class $GuiGraphicsAccessor$$Static implements $GuiGraphicsAccessor {
}
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $GuiGraphicsAccessor$$Type = ($GuiGraphicsAccessor | (() => void));
}

declare module "com.gregtechceu.gtceu.core.IGTBakedQuad" {
import { $BakedQuad } from "net.minecraft.client.renderer.block.model.BakedQuad"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export interface $IGTBakedQuad {
"gtceu$getTextureKey"(): string
"gtceu$setTextureKey"(string0: string): $BakedQuad
}

export namespace $IGTBakedQuad {
const probejs$$marker: never
}
export abstract class $IGTBakedQuad$$Static implements $IGTBakedQuad {
}
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $IGTBakedQuad$$Type = ($IGTBakedQuad);
}

declare module "com.gregtechceu.gtceu.core.mixins.client.PlayerInfoAccessor" {
import { $ResourceLocation, $ResourceLocation$$Type } from "net.minecraft.resources.ResourceLocation"
import { $Map, $Map$$Type } from "java.util.Map"
import { $MinecraftProfileTexture$Type, $MinecraftProfileTexture$Type$$Type } from "com.mojang.authlib.minecraft.MinecraftProfileTexture$Type"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export interface $PlayerInfoAccessor {
"getTextureLocations"(): $Map<$MinecraftProfileTexture$Type, $ResourceLocation>
get "textureLocations"(): $Map<$MinecraftProfileTexture$Type, $ResourceLocation>
}

export namespace $PlayerInfoAccessor {
const probejs$$marker: never
}
export abstract class $PlayerInfoAccessor$$Static implements $PlayerInfoAccessor {
}
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $PlayerInfoAccessor$$Type = ($PlayerInfoAccessor | (() => $Map$$Type<$MinecraftProfileTexture$Type$$Type, $ResourceLocation$$Type>));
}

declare module "com.gregtechceu.gtceu.core.mixins.LootPoolAccessor" {
import { $LootPoolEntryContainer, $LootPoolEntryContainer$$Type } from "net.minecraft.world.level.storage.loot.entries.LootPoolEntryContainer"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export interface $LootPoolAccessor {
"getEntries"(): $LootPoolEntryContainer[]
"setEntries"(lootPoolEntryContainer0s: $LootPoolEntryContainer$$Type[]): void
get "entries"(): $LootPoolEntryContainer[]
set "entries"(value: $LootPoolEntryContainer$$Type[])
}

export namespace $LootPoolAccessor {
const probejs$$marker: never
}
export abstract class $LootPoolAccessor$$Static implements $LootPoolAccessor {
}
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $LootPoolAccessor$$Type = ($LootPoolAccessor);
}

declare module "com.gregtechceu.gtceu.core.mixins.GrowingPlantBlockAccessor" {
import { $GrowingPlantHeadBlock } from "net.minecraft.world.level.block.GrowingPlantHeadBlock"
import { $Direction } from "net.minecraft.core.Direction"
import { $Block } from "net.minecraft.world.level.block.Block"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export interface $GrowingPlantBlockAccessor {
"gtceu$getBodyBlock"(): $Block
"gtceu$getGrowthDirection"(): $Direction
"gtceu$getHeadBlock"(): $GrowingPlantHeadBlock
}

export namespace $GrowingPlantBlockAccessor {
const probejs$$marker: never
}
export abstract class $GrowingPlantBlockAccessor$$Static implements $GrowingPlantBlockAccessor {
}
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $GrowingPlantBlockAccessor$$Type = ($GrowingPlantBlockAccessor);
}

declare module "com.gregtechceu.gtceu.core.mixins.registrate.AbstractRegistrateAccessor" {
import { $NonNullSupplier } from "com.tterrag.registrate.util.nullness.NonNullSupplier"
import { $ListMultimap } from "com.google.common.collect.ListMultimap"
import { $ProviderType } from "com.tterrag.registrate.providers.ProviderType"
import { $NonNullConsumer } from "com.tterrag.registrate.util.nullness.NonNullConsumer"
import { $RegistrateProvider } from "com.tterrag.registrate.providers.RegistrateProvider"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export interface $AbstractRegistrateAccessor {
"getDatagens"(): $ListMultimap<$ProviderType<any>, $NonNullConsumer<$RegistrateProvider>>
"getDoDatagen"(): $NonNullSupplier<boolean>
get "datagens"(): $ListMultimap<$ProviderType<any>, $NonNullConsumer<$RegistrateProvider>>
get "doDatagen"(): $NonNullSupplier<boolean>
}

export namespace $AbstractRegistrateAccessor {
const probejs$$marker: never
}
export abstract class $AbstractRegistrateAccessor$$Static implements $AbstractRegistrateAccessor {
}
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $AbstractRegistrateAccessor$$Type = ($AbstractRegistrateAccessor);
}

declare module "com.gregtechceu.gtceu.core.mixins.client.AbstractClientPlayerAccessor" {
import { $PlayerInfo, $PlayerInfo$$Type } from "net.minecraft.client.multiplayer.PlayerInfo"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export interface $AbstractClientPlayerAccessor {
"gtceu$getPlayerInfo"(): $PlayerInfo
}

export namespace $AbstractClientPlayerAccessor {
const probejs$$marker: never
}
export abstract class $AbstractClientPlayerAccessor$$Static implements $AbstractClientPlayerAccessor {
}
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $AbstractClientPlayerAccessor$$Type = ($AbstractClientPlayerAccessor | (() => $PlayerInfo$$Type));
}

declare module "com.gregtechceu.gtceu.core.mixins.IngredientAccessor" {
import { $Ingredient$Value, $Ingredient$Value$$Type } from "net.minecraft.world.item.crafting.Ingredient$Value"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export interface $IngredientAccessor {
"getValues"(): $Ingredient$Value[]
get "values"(): $Ingredient$Value[]
}

export namespace $IngredientAccessor {
const probejs$$marker: never
}
export abstract class $IngredientAccessor$$Static implements $IngredientAccessor {
}
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $IngredientAccessor$$Type = ($IngredientAccessor | (() => $Ingredient$Value$$Type[]));
}

declare module "com.gregtechceu.gtceu.core.mixins.IntegerPropertyAccessor" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export interface $IntegerPropertyAccessor {
"gtceu$getMax"(): integer
"gtceu$getMin"(): integer
}

export namespace $IntegerPropertyAccessor {
const probejs$$marker: never
}
export abstract class $IntegerPropertyAccessor$$Static implements $IntegerPropertyAccessor {
}
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $IntegerPropertyAccessor$$Type = ($IntegerPropertyAccessor);
}

declare module "com.gregtechceu.gtceu.core.mixins.forge.ConfiguredModelListAccessor" {
import { $List, $List$$Type } from "java.util.List"
import { $ConfiguredModel, $ConfiguredModel$$Type } from "net.minecraftforge.client.model.generators.ConfiguredModel"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export interface $ConfiguredModelListAccessor {
"gtceu$getModels"(): $List<$ConfiguredModel>
}

export namespace $ConfiguredModelListAccessor {
const probejs$$marker: never
}
export abstract class $ConfiguredModelListAccessor$$Static implements $ConfiguredModelListAccessor {
}
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $ConfiguredModelListAccessor$$Type = ($ConfiguredModelListAccessor | (() => $List$$Type<$ConfiguredModel$$Type>));
}

declare module "com.gregtechceu.gtceu.core.mixins.BlockBehaviourAccessor" {
import { $ResourceLocation$$Type } from "net.minecraft.resources.ResourceLocation"
import { $BlockBehaviour$Properties } from "net.minecraft.world.level.block.state.BlockBehaviour$Properties"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export interface $BlockBehaviourAccessor {
"getBlockProperties"(): $BlockBehaviour$Properties
"setDrops"(resourceLocation0: $ResourceLocation$$Type): void
get "blockProperties"(): $BlockBehaviour$Properties
set "drops"(value: $ResourceLocation$$Type)
}

export namespace $BlockBehaviourAccessor {
const probejs$$marker: never
}
export abstract class $BlockBehaviourAccessor$$Static implements $BlockBehaviourAccessor {
}
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $BlockBehaviourAccessor$$Type = ($BlockBehaviourAccessor);
}

declare module "com.gregtechceu.gtceu.core.mixins.client.ClientLevelAccessor" {
import { $ColorResolver, $ColorResolver$$Type } from "net.minecraft.world.level.ColorResolver"
import { $Object2ObjectArrayMap, $Object2ObjectArrayMap$$Type } from "it.unimi.dsi.fastutil.objects.Object2ObjectArrayMap"
import { $BlockTintCache, $BlockTintCache$$Type } from "net.minecraft.client.color.block.BlockTintCache"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export interface $ClientLevelAccessor {
"getTintCaches"(): $Object2ObjectArrayMap<$ColorResolver, $BlockTintCache>
get "tintCaches"(): $Object2ObjectArrayMap<$ColorResolver, $BlockTintCache>
}

export namespace $ClientLevelAccessor {
const probejs$$marker: never
}
export abstract class $ClientLevelAccessor$$Static implements $ClientLevelAccessor {
}
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $ClientLevelAccessor$$Type = ($ClientLevelAccessor | (() => $Object2ObjectArrayMap$$Type<$ColorResolver$$Type, $BlockTintCache$$Type>));
}

declare module "com.gregtechceu.gtceu.core.mixins.BlockPropertiesAccessor" {
import { $FeatureFlagSet, $FeatureFlagSet$$Type } from "net.minecraft.world.flag.FeatureFlagSet"
import { $MapColor } from "net.minecraft.world.level.material.MapColor"
import { $PushReaction } from "net.minecraft.world.level.material.PushReaction"
import { $ToIntFunction } from "java.util.function.ToIntFunction"
import { $BlockBehaviour$OffsetFunction, $BlockBehaviour$OffsetFunction$$Type } from "net.minecraft.world.level.block.state.BlockBehaviour$OffsetFunction"
import { $NoteBlockInstrument } from "net.minecraft.world.level.block.state.properties.NoteBlockInstrument"
import { $BlockState } from "net.minecraft.world.level.block.state.BlockState"
import { $Optional, $Optional$$Type } from "java.util.Optional"
import { $Function } from "java.util.function.Function"
import { $SoundType } from "net.minecraft.world.level.block.SoundType"
import { $BlockBehaviour$StatePredicate } from "net.minecraft.world.level.block.state.BlockBehaviour$StatePredicate"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export interface $BlockPropertiesAccessor {
"getDestroyTime"(): float
"getEmissiveRendering"(): $BlockBehaviour$StatePredicate
"getExplosionResistance"(): float
"getFriction"(): float
"getInstrument"(): $NoteBlockInstrument
"getLightEmission"(): $ToIntFunction<$BlockState>
"getMapColor"(): $Function<$BlockState, $MapColor>
"getOffsetFunction"(): $Optional<$BlockBehaviour$OffsetFunction>
"getPushReaction"(): $PushReaction
"getRequiredFeatures"(): $FeatureFlagSet
"getSoundType"(): $SoundType
"getSpeedFactor"(): float
"isCanOcclude"(): boolean
"isDynamicShape"(): boolean
"isForceSolidOff"(): boolean
"isForceSolidOn"(): boolean
"isHasCollision"(): boolean
"isIgnitedByLava"(): boolean
"isIsAir"(): boolean
"isIsRandomlyTicking"(): boolean
"isLiquid"(): boolean
"isReplaceable"(): boolean
"isRequiresCorrectToolForDrops"(): boolean
"isSpawnParticlesOnBreak"(): boolean
"setOffsetFunction"(optional0: $Optional$$Type<$BlockBehaviour$OffsetFunction$$Type>): void
"setRequiredFeatures"(featureFlagSet0: $FeatureFlagSet$$Type): void
get "destroyTime"(): float
get "emissiveRendering"(): $BlockBehaviour$StatePredicate
get "explosionResistance"(): float
get "friction"(): float
get "instrument"(): $NoteBlockInstrument
get "lightEmission"(): $ToIntFunction<$BlockState>
get "mapColor"(): $Function<$BlockState, $MapColor>
get "offsetFunction"(): $Optional<$BlockBehaviour$OffsetFunction>
get "pushReaction"(): $PushReaction
get "requiredFeatures"(): $FeatureFlagSet
get "soundType"(): $SoundType
get "speedFactor"(): float
get "canOcclude"(): boolean
get "dynamicShape"(): boolean
get "forceSolidOff"(): boolean
get "forceSolidOn"(): boolean
get "hasCollision"(): boolean
get "ignitedByLava"(): boolean
get "isAir"(): boolean
get "isRandomlyTicking"(): boolean
get "liquid"(): boolean
get "replaceable"(): boolean
get "requiresCorrectToolForDrops"(): boolean
get "spawnParticlesOnBreak"(): boolean
set "offsetFunction"(value: $Optional$$Type<$BlockBehaviour$OffsetFunction$$Type>)
set "requiredFeatures"(value: $FeatureFlagSet$$Type)
}

export namespace $BlockPropertiesAccessor {
const probejs$$marker: never
}
export abstract class $BlockPropertiesAccessor$$Static implements $BlockPropertiesAccessor {
}
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $BlockPropertiesAccessor$$Type = ($BlockPropertiesAccessor);
}

