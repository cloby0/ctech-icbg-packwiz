declare module "vazkii.botania.mixin.client.ItemRendererAccessor" {
import { $List } from "java.util.List"
import { $BakedQuad } from "net.minecraft.client.renderer.block.model.BakedQuad"
import { $ItemStack } from "net.minecraft.world.item.ItemStack"
import { $VertexConsumer } from "com.mojang.blaze3d.vertex.VertexConsumer"
import { $PoseStack } from "com.mojang.blaze3d.vertex.PoseStack"

/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $ItemRendererAccessor$$Type = ($ItemRendererAccessor | ((arg0: $PoseStack, arg1: $VertexConsumer, arg2: $List<$BakedQuad>, arg3: $ItemStack, arg4: integer, arg5: integer) => void));
}

declare module "vazkii.botania.api.recipe.ElvenPortalUpdateEvent" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $ElvenPortalUpdateEvent$$Type = ($ElvenPortalUpdateEvent);
}

declare module "vazkii.botania.api.corporea.CorporeaResult" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $CorporeaResult$$Type = ($CorporeaResult);
}

declare module "vazkii.botania.api.corporea.CorporeaRequestEvent" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $CorporeaRequestEvent$$Type = ($CorporeaRequestEvent);
}

declare module "vazkii.botania.mixin.ProjectileAccessor" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $ProjectileAccessor$$Type = ($ProjectileAccessor | (() => boolean));
}

declare module "vazkii.botania.api.corporea.CorporeaNode" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $CorporeaNode$$Type = ($CorporeaNode);
}

declare module "vazkii.botania.api.item.SparkEntity" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $SparkEntity$$Type = ($SparkEntity);
}

declare module "vazkii.botania.mixin.WitherEntityAccessor" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $WitherEntityAccessor$$Type = ($WitherEntityAccessor);
}

declare module "vazkii.botania.mixin.LivingEntityAccessor" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $LivingEntityAccessor$$Type = ($LivingEntityAccessor);
}

declare module "vazkii.botania.mixin.EntityAccessor" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $EntityAccessor$$Type = ($EntityAccessor | (() => void));
}

declare module "vazkii.botania.mixin.DispenserBlockAccessor" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $DispenserBlockAccessor$$Type = ($DispenserBlockAccessor);
}

declare module "vazkii.botania.mixin.BiomeAccessor" {
import { $BlockPos } from "net.minecraft.core.BlockPos"

/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $BiomeAccessor$$Type = ($BiomeAccessor | ((arg0: $BlockPos) => float));
}

declare module "vazkii.botania.api.mana.ManaNetworkAction" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $ManaNetworkAction$$Type = ($ManaNetworkAction | ("remove" | "add"));
}

declare module "vazkii.botania.api.corporea.CorporeaRequestMatcher" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $CorporeaRequestMatcher$$Type = ($CorporeaRequestMatcher);
}

declare module "vazkii.botania.common.PlayerAccess" {
import { $LivingEntity } from "net.minecraft.world.entity.LivingEntity"

/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $PlayerAccess$$Type = ($PlayerAccess | ((arg0: $LivingEntity) => void));
}

declare module "vazkii.botania.api.item.TinyPotatoRenderEvent" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $TinyPotatoRenderEvent$$Type = ($TinyPotatoRenderEvent);
}

declare module "vazkii.botania.mixin.AbstractHorseAccessor" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $AbstractHorseAccessor$$Type = ($AbstractHorseAccessor);
}

declare module "vazkii.botania.mixin.FireBlockAccessor" {
import { $Block } from "net.minecraft.world.level.block.Block"

/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $FireBlockAccessor$$Type = ($FireBlockAccessor | ((arg0: $Block, arg1: integer, arg2: integer) => void));
}

declare module "vazkii.botania.mixin.MobAccessor" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $MobAccessor$$Type = ($MobAccessor);
}

declare module "vazkii.botania.mixin.client.ModelManagerAccessor" {
import { $ResourceLocation$$Type } from "net.minecraft.resources.ResourceLocation"
import { $BakedModel$$Type } from "net.minecraft.client.resources.model.BakedModel"
import { $Map$$Type } from "java.util.Map"

/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $ModelManagerAccessor$$Type = ($ModelManagerAccessor | (() => $Map$$Type<$ResourceLocation$$Type, $BakedModel$$Type>));
}

declare module "vazkii.botania.api.corporea.CorporeaRequest" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $CorporeaRequest$$Type = ($CorporeaRequest);
}

declare module "vazkii.botania.api.mana.ManaNetworkEvent" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $ManaNetworkEvent$$Type = ($ManaNetworkEvent);
}

declare module "vazkii.botania.api.mana.ManaItemHandler" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $ManaItemHandler$$Type = ($ManaItemHandler);
}

declare module "vazkii.botania.mixin.AnimalAccessor" {
import { $UUID } from "java.util.UUID"

/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $AnimalAccessor$$Type = ($AnimalAccessor | ((arg0: $UUID) => void));
}

declare module "vazkii.botania.mixin.HopperBlockEntityAccessor" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $HopperBlockEntityAccessor$$Type = ($HopperBlockEntityAccessor);
}

declare module "vazkii.botania.forge.mixin.client.ModelBakeryForgeAccessor" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $ModelBakeryForgeAccessor$$Type = ($ModelBakeryForgeAccessor);
}

declare module "vazkii.botania.mixin.client.AbstractContainerScreenAccessor" {
import { $Slot$$Type } from "net.minecraft.world.inventory.Slot"

/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $AbstractContainerScreenAccessor$$Type = ($AbstractContainerScreenAccessor | (() => $Slot$$Type));
}

declare module "vazkii.botania.api.corporea.CorporeaSpark" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $CorporeaSpark$$Type = ($CorporeaSpark);
}

declare module "vazkii.botania.mixin.ItemEntityAccessor" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $ItemEntityAccessor$$Type = ($ItemEntityAccessor);
}

declare module "vazkii.botania.mixin.BlockPropertiesAccessor" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $BlockPropertiesAccessor$$Type = ($BlockPropertiesAccessor);
}

declare module "vazkii.botania.mixin.RecipeManagerAccessor" {
import { $ResourceLocation$$Type } from "net.minecraft.resources.ResourceLocation"
import { $Map$$Type } from "java.util.Map"
import { $RecipeType } from "net.minecraft.world.item.crafting.RecipeType"

/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $RecipeManagerAccessor$$Type = ($RecipeManagerAccessor | ((arg0: $RecipeType<T>) => $Map$$Type<$ResourceLocation$$Type, T>));
}

declare module "vazkii.botania.mixin.client.MinecraftAccessor" {
import { $ItemColors$$Type } from "net.minecraft.client.color.item.ItemColors"

/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $MinecraftAccessor$$Type = ($MinecraftAccessor | (() => $ItemColors$$Type));
}

declare module "vazkii.botania.api.mana.ManaProficiencyEvent" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $ManaProficiencyEvent$$Type = ($ManaProficiencyEvent);
}

declare module "vazkii.botania.mixin.StatsAccessor" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $StatsAccessor$$Type = ($StatsAccessor);
}

declare module "vazkii.botania.api.corporea.CorporeaHelper" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $CorporeaHelper$$Type = ($CorporeaHelper);
}

declare module "vazkii.botania.mixin.ServerPlayerGameModeAccessor" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $ServerPlayerGameModeAccessor$$Type = ($ServerPlayerGameModeAccessor | (() => boolean));
}

declare module "vazkii.botania.common.impl.corporea.CorporeaHelperImpl" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $CorporeaHelperImpl$$Type = ($CorporeaHelperImpl);
}

declare module "vazkii.botania.mixin.AbstractCauldronBlockAccessor" {
import { $Map$$Type } from "java.util.Map"
import { $Item$$Type } from "net.minecraft.world.item.Item"
import { $CauldronInteraction$$Type } from "net.minecraft.core.cauldron.CauldronInteraction"

/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $AbstractCauldronBlockAccessor$$Type = ($AbstractCauldronBlockAccessor | (() => $Map$$Type<$Item$$Type, $CauldronInteraction$$Type>));
}

declare module "vazkii.botania.common.impl.mana.ManaItemHandlerImpl" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $ManaItemHandlerImpl$$Type = ($ManaItemHandlerImpl);
}

declare module "vazkii.botania.mixin.CreeperAccessor" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $CreeperAccessor$$Type = ($CreeperAccessor | ((arg0: integer) => void));
}

declare module "vazkii.botania.mixin.LevelAccessor" {
import { $NeighborUpdater$$Type } from "net.minecraft.world.level.redstone.NeighborUpdater"

/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $LevelAccessor$$Type = ($LevelAccessor | (() => $NeighborUpdater$$Type));
}

declare module "vazkii.botania.api.corporea.CorporeaIndexRequestEvent" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $CorporeaIndexRequestEvent$$Type = ($CorporeaIndexRequestEvent);
}

declare module "vazkii.botania.mixin.MushroomCowAccessor" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $MushroomCowAccessor$$Type = ($MushroomCowAccessor);
}

declare module "vazkii.botania.mixin.InventoryAccessor" {
import { $List$$Type } from "java.util.List"
import { $NonNullList$$Type } from "net.minecraft.core.NonNullList"
import { $ItemStack$$Type } from "net.minecraft.world.item.ItemStack"

/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $InventoryAccessor$$Type = ($InventoryAccessor | (() => $List$$Type<$NonNullList$$Type<$ItemStack$$Type>>));
}

declare module "vazkii.botania.mixin.AbstractFurnaceBlockEntityAccessor" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $AbstractFurnaceBlockEntityAccessor$$Type = ($AbstractFurnaceBlockEntityAccessor);
}

declare module "vazkii.botania.mixin.ExperienceOrbAccessor" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $ExperienceOrbAccessor$$Type = ($ExperienceOrbAccessor);
}

declare module "vazkii.botania.mixin.RandomizableContainerBlockEntityAccessor" {
import { $ResourceLocation$$Type } from "net.minecraft.resources.ResourceLocation"

/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $RandomizableContainerBlockEntityAccessor$$Type = ($RandomizableContainerBlockEntityAccessor | (() => $ResourceLocation$$Type));
}

declare module "vazkii.botania.api.brew.Brew" {
import { $List } from "java.util.List"
import { $MobEffectInstance, $MobEffectInstance$$Type } from "net.minecraft.world.effect.MobEffectInstance"
import { $ItemStack$$Type } from "net.minecraft.world.item.ItemStack"
import { $Supplier$$Type } from "java.util.function.Supplier"

export class $Brew {
constructor(int0: integer, supplier1: $Supplier$$Type<$List<$MobEffectInstance>>)
constructor(int0: integer, int1: integer, ...mobEffectInstance2s: $MobEffectInstance$$Type[])

public "canInfuseBloodPendant"(): boolean
public "canInfuseIncense"(): boolean
public "getColor"(itemStack0: $ItemStack$$Type): integer
public "getManaCost"(itemStack0: $ItemStack$$Type): integer
public "getManaCost"(): integer
public "getPotionEffects"(itemStack0: $ItemStack$$Type): $List<$MobEffectInstance>
public "getTranslationKey"(itemStack0: $ItemStack$$Type): string
public "getTranslationKey"(): string
public "setNotBloodPendantInfusable"(): $Brew
public "setNotIncenseInfusable"(): $Brew
get "manaCost"(): integer
get "translationKey"(): string
/** This field is a type stub generated by ProbeJS and shall not be used in any sense. */
"probejsInternal$$Literal": Special.Botania$Brews
/** This field is a type stub generated by ProbeJS and shall not be used in any sense. */
"probejsInternal$$Tag": Special.Botania$BrewsTag
}
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $Brew$$Type = ($Brew | Special.Botania$Brews);
}

declare module "vazkii.botania.forge.mixin.AbstractFurnaceBlockEntityForgeAccessor" {
import { $Recipe } from "net.minecraft.world.item.crafting.Recipe"
import { $NonNullList } from "net.minecraft.core.NonNullList"
import { $ItemStack } from "net.minecraft.world.item.ItemStack"
import { $RegistryAccess } from "net.minecraft.core.RegistryAccess"

/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $AbstractFurnaceBlockEntityForgeAccessor$$Type = ($AbstractFurnaceBlockEntityForgeAccessor | ((arg0: $RegistryAccess, arg1: $Recipe<any>, arg2: $NonNullList<$ItemStack>, arg3: integer) => boolean));
}

declare module "vazkii.botania.mixin.GrowingPlantBodyBlockMixin" {
import { $BlockGetter } from "net.minecraft.world.level.BlockGetter"
import { $BlockPos, $BlockPos$$Type } from "net.minecraft.core.BlockPos"
import { $Optional$$Type } from "java.util.Optional"
import { $Block } from "net.minecraft.world.level.block.Block"

/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $GrowingPlantBodyBlockMixin$$Type = ($GrowingPlantBodyBlockMixin | ((arg0: $BlockGetter, arg1: $BlockPos, arg2: $Block) => $Optional$$Type<$BlockPos$$Type>));
}

declare module "vazkii.botania.mixin.PistonBaseBlockAccessor" {
import { $BlockPos } from "net.minecraft.core.BlockPos"
import { $Direction } from "net.minecraft.core.Direction"
import { $Level } from "net.minecraft.world.level.Level"

/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $PistonBaseBlockAccessor$$Type = ($PistonBaseBlockAccessor | ((arg0: $Level, arg1: $BlockPos, arg2: $Direction, arg3: boolean) => boolean));
}

declare module "vazkii.botania.api.mana.ManaItemsEvent" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $ManaItemsEvent$$Type = ($ManaItemsEvent);
}

declare module "vazkii.botania.client.core.SkyblockWorldInfo" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $SkyblockWorldInfo$$Type = ($SkyblockWorldInfo);
}

declare module "vazkii.botania.mixin.client.RenderTypeAccessor" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $RenderTypeAccessor$$Type = ($RenderTypeAccessor);
}

declare module "vazkii.botania.api.mana.ManaBlockType" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $ManaBlockType$$Type = ($ManaBlockType | ("pool" | "collector"));
}

declare module "vazkii.botania.api.mana.ManaDiscountEvent" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $ManaDiscountEvent$$Type = ($ManaDiscountEvent);
}

declare module "vazkii.botania.api.mana.ManaReceiver" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $ManaReceiver$$Type = ($ManaReceiver);
}

declare module "vazkii.botania.mixin.BundleItemAccessor" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $BundleItemAccessor$$Type = ($BundleItemAccessor);
}

declare module "vazkii.botania.mixin.RecipeProviderAccessor" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $RecipeProviderAccessor$$Type = ($RecipeProviderAccessor);
}

declare module "vazkii.botania.mixin.client.LevelRendererAccessor" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $LevelRendererAccessor$$Type = ($LevelRendererAccessor);
}

