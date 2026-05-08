declare module "org.violetmoon.zeta.registry.LateBoundHolder" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $LateBoundHolder$$Type<T = any> = ($LateBoundHolder<T>);
}

declare module "org.violetmoon.zeta.event.play.ZRecipeCrawl$Visit$Shaped" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $ZRecipeCrawl$Visit$Shaped$$Type = ($ZRecipeCrawl$Visit$Shaped);
}

declare module "org.violetmoon.zeta.event.bus.ZetaEventBus" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $ZetaEventBus$$Type<E = any> = ($ZetaEventBus<E>);
}

declare module "org.violetmoon.quark.mixin.mixins.accessor.AccessorAbstractArrow" {
import { $ItemStack$$Type } from "net.minecraft.world.item.ItemStack"

/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $AccessorAbstractArrow$$Type = ($AccessorAbstractArrow | (() => $ItemStack$$Type));
}

declare module "org.violetmoon.zeta.client.HumanoidArmorModelGetter" {
import { $LivingEntity } from "net.minecraft.world.entity.LivingEntity"
import { $EquipmentSlot } from "net.minecraft.world.entity.EquipmentSlot"
import { $HumanoidModel, $HumanoidModel$$Type } from "net.minecraft.client.model.HumanoidModel"
import { $ItemStack } from "net.minecraft.world.item.ItemStack"

/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $HumanoidArmorModelGetter$$Type = ($HumanoidArmorModelGetter | ((arg0: $LivingEntity, arg1: $ItemStack, arg2: $EquipmentSlot, arg3: $HumanoidModel<any>) => $HumanoidModel$$Type<any>));
}

declare module "org.violetmoon.zetaimplforge.event.play.ForgeZRecipeCrawl$Visit$Shapeless" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $ForgeZRecipeCrawl$Visit$Shapeless$$Type = ($ForgeZRecipeCrawl$Visit$Shapeless);
}

declare module "org.violetmoon.zeta.recipe.IZetaCondition$IContext" {
import { $ResourceLocation$$Type } from "net.minecraft.resources.ResourceLocation"
import { $Registry } from "net.minecraft.core.Registry"
import { $Holder$$Type } from "net.minecraft.core.Holder"
import { $Map$$Type } from "java.util.Map"
import { $Collection$$Type } from "java.util.Collection"
import { $ResourceKey } from "net.minecraft.resources.ResourceKey"

/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $IZetaCondition$IContext$$Type = ($IZetaCondition$IContext | ((arg0: $ResourceKey<$Registry<T>>) => $Map$$Type<$ResourceLocation$$Type, $Collection$$Type<$Holder$$Type<T>>>));
}

declare module "org.violetmoon.zetaimplforge.event.play.ForgeZRecipeCrawl$Visit$Cooking" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $ForgeZRecipeCrawl$Visit$Cooking$$Type = ($ForgeZRecipeCrawl$Visit$Cooking);
}

declare module "org.violetmoon.quark.api.event.QuarkModuleEvent" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $QuarkModuleEvent$$Type = ($QuarkModuleEvent);
}

declare module "org.violetmoon.quark.mixin.mixins.client.accessor.AccessorModelManager" {
import { $ResourceLocation$$Type } from "net.minecraft.resources.ResourceLocation"
import { $BakedModel$$Type } from "net.minecraft.client.resources.model.BakedModel"
import { $Map$$Type } from "java.util.Map"

/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $AccessorModelManager$$Type = ($AccessorModelManager | (() => $Map$$Type<$ResourceLocation$$Type, $BakedModel$$Type>));
}

declare module "org.violetmoon.zeta.network.ZetaNetworkHandler" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $ZetaNetworkHandler$$Type = ($ZetaNetworkHandler);
}

declare module "org.violetmoon.zeta.client.event.play.ZFirstClientTick" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $ZFirstClientTick$$Type = ($ZFirstClientTick);
}

declare module "org.violetmoon.zeta.util.RaytracingUtil" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $RaytracingUtil$$Type = ($RaytracingUtil);
}

declare module "org.violetmoon.zeta.event.load.ZAddReloadListener" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $ZAddReloadListener$$Type = ($ZAddReloadListener);
}

declare module "org.violetmoon.zeta.item.ext.ItemExtensionFactory" {
import { $ItemStack } from "net.minecraft.world.item.ItemStack"
import { $IZetaItemExtensions$$Type } from "org.violetmoon.zeta.item.ext.IZetaItemExtensions"

/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $ItemExtensionFactory$$Type = ($ItemExtensionFactory | ((arg0: $ItemStack) => $IZetaItemExtensions$$Type));
}

declare module "org.violetmoon.zeta.event.play.loading.ZGatherAdditionalFlags" {
import { $ConfigFlagManager$$Type } from "org.violetmoon.zeta.config.ConfigFlagManager"

/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $ZGatherAdditionalFlags$$Type = ($ZGatherAdditionalFlags | (() => $ConfigFlagManager$$Type));
}

declare module "org.violetmoon.zeta.event.play.loading.ZGatherHints" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $ZGatherHints$$Type = ($ZGatherHints);
}

declare module "org.violetmoon.quark.mixin.mixins.accessor.AccessorLivingEntity" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $AccessorLivingEntity$$Type = ($AccessorLivingEntity);
}

declare module "org.violetmoon.zeta.registry.RenderLayerRegistry$Layer" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $RenderLayerRegistry$Layer$$Type = ($RenderLayerRegistry$Layer | ("solid" | "cutout" | "cutout_mipped" | "translucent"));
}

declare module "org.violetmoon.zeta.recipe.FlagIngredient$Serializer" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $FlagIngredient$Serializer$$Type = ($FlagIngredient$Serializer);
}

declare module "org.violetmoon.zetaimplforge.api.ForgeZGatherAdvancementModifiers" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $ForgeZGatherAdvancementModifiers$$Type = ($ForgeZGatherAdvancementModifiers);
}

declare module "org.violetmoon.zetaimplforge.event.load.ForgeZRegister$Post" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $ForgeZRegister$Post$$Type = ($ForgeZRegister$Post);
}

declare module "org.violetmoon.zeta.api.IAdvancementModifierDelegate" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $IAdvancementModifierDelegate$$Type = ($IAdvancementModifierDelegate);
}

declare module "org.violetmoon.zeta.world.EntitySpawnHandler" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $EntitySpawnHandler$$Type = ($EntitySpawnHandler);
}

declare module "org.violetmoon.zeta.network.ZetaMessageSerializer$Reader" {
import { $FriendlyByteBuf } from "net.minecraft.network.FriendlyByteBuf"
import { $Field } from "java.lang.reflect.Field"

/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $ZetaMessageSerializer$Reader$$Type<T = any> = ($ZetaMessageSerializer$Reader<T> | ((arg0: $FriendlyByteBuf, arg1: $Field) => T));
}

declare module "org.violetmoon.zeta.event.load.ZConfigChanged" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $ZConfigChanged$$Type = ($ZConfigChanged);
}

declare module "org.violetmoon.zeta.config.ConfigFlagManager" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $ConfigFlagManager$$Type = ($ConfigFlagManager);
}

declare module "org.violetmoon.zeta.module.ZetaModuleManager" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $ZetaModuleManager$$Type = ($ZetaModuleManager);
}

declare module "org.violetmoon.zeta.config.SectionDefinition$Builder" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $SectionDefinition$Builder$$Type = ($SectionDefinition$Builder);
}

declare module "org.violetmoon.zeta.registry.RenderLayerRegistry" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $RenderLayerRegistry$$Type = ($RenderLayerRegistry);
}

declare module "org.violetmoon.zetaimplforge.event.play.ForgeZRecipeCrawl" {
import { $ZRecipeCrawl, $ZRecipeCrawl$$Type } from "org.violetmoon.zeta.event.play.ZRecipeCrawl"

/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $ForgeZRecipeCrawl$$Type<W extends $ZRecipeCrawl = $ZRecipeCrawl> = ($ForgeZRecipeCrawl<W>);
}

declare module "org.violetmoon.zetaimplforge.event.play.loading.ForgeZGatherHints" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $ForgeZGatherHints$$Type = ($ForgeZGatherHints);
}

declare module "org.violetmoon.zeta.recipe.IZetaIngredientSerializer" {
import { $Ingredient, $Ingredient$$Type } from "net.minecraft.world.item.crafting.Ingredient"

/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $IZetaIngredientSerializer$$Type<T extends $Ingredient = $Ingredient> = ($IZetaIngredientSerializer<T>);
}

declare module "org.violetmoon.quark.content.experimental.hax.PseudoAccessorMerchantOffer" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $PseudoAccessorMerchantOffer$$Type = ($PseudoAccessorMerchantOffer);
}

declare module "org.violetmoon.quark.mixin.mixins.accessor.AccessorSinglePoolElement" {
import { $ResourceLocation$$Type } from "net.minecraft.resources.ResourceLocation"
import { $Either$$Type } from "com.mojang.datafixers.util.Either"
import { $StructureTemplate$$Type } from "net.minecraft.world.level.levelgen.structure.templatesystem.StructureTemplate"

/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $AccessorSinglePoolElement$$Type = ($AccessorSinglePoolElement | (() => $Either$$Type<$ResourceLocation$$Type, $StructureTemplate$$Type>));
}

declare module "org.violetmoon.zeta.event.play.ZRecipeCrawl$Visit$Custom" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $ZRecipeCrawl$Visit$Custom$$Type = ($ZRecipeCrawl$Visit$Custom);
}

declare module "org.violetmoon.zeta.util.NameChanger" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $NameChanger$$Type = ($NameChanger);
}

declare module "org.violetmoon.zeta.event.play.ZRecipeCrawl" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $ZRecipeCrawl$$Type = ($ZRecipeCrawl);
}

declare module "org.violetmoon.zetaimplforge.mixin.mixins.WeatheringCopperMixin" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $WeatheringCopperMixin$$Type = ($WeatheringCopperMixin);
}

declare module "org.violetmoon.zeta.event.play.ZRecipeCrawl$Starting" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $ZRecipeCrawl$Starting$$Type = ($ZRecipeCrawl$Starting);
}

declare module "org.violetmoon.zeta.event.play.ZRecipeCrawl$Digest" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $ZRecipeCrawl$Digest$$Type = ($ZRecipeCrawl$Digest);
}

declare module "org.violetmoon.quark.api.event.ModuleLoadedEvent" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $ModuleLoadedEvent$$Type = ($ModuleLoadedEvent);
}

declare module "org.violetmoon.zeta.registry.DyeablesRegistry" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $DyeablesRegistry$$Type = ($DyeablesRegistry);
}

declare module "org.violetmoon.quark.api.event.UsageTickerEvent$Pass" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $UsageTickerEvent$Pass$$Type = ($UsageTickerEvent$Pass | ("logical" | "rendering"));
}

declare module "org.violetmoon.quark.mixin.mixins.accessor.AccessorServerGamePacketListener" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $AccessorServerGamePacketListener$$Type = ($AccessorServerGamePacketListener | ((arg0: integer) => void));
}

declare module "org.violetmoon.zeta.mixin.mixins.AccessorLootTable" {
import { $List$$Type } from "java.util.List"
import { $LootPool$$Type } from "net.minecraft.world.level.storage.loot.LootPool"

/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $AccessorLootTable$$Type = ($AccessorLootTable | (() => $List$$Type<$LootPool$$Type>));
}

declare module "org.violetmoon.zeta.event.load.ZGatherAdvancementModifiers" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $ZGatherAdvancementModifiers$$Type = ($ZGatherAdvancementModifiers);
}

declare module "org.violetmoon.zeta.network.ZetaMessageSerializer$Writer" {
import { $FriendlyByteBuf } from "net.minecraft.network.FriendlyByteBuf"
import { $Field } from "java.lang.reflect.Field"

/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $ZetaMessageSerializer$Writer$$Type<T = any> = ($ZetaMessageSerializer$Writer<T> | ((arg0: $FriendlyByteBuf, arg1: $Field, arg2: T) => void));
}

declare module "org.violetmoon.zeta.event.load.ZGatherAdditionalFlags" {
import { $ConfigFlagManager$$Type } from "org.violetmoon.zeta.config.ConfigFlagManager"

/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $ZGatherAdditionalFlags$$Type = ($ZGatherAdditionalFlags | (() => $ConfigFlagManager$$Type));
}

declare module "org.violetmoon.zeta.registry.PottedPlantRegistry" {
import { $ResourceLocation } from "net.minecraft.resources.ResourceLocation"
import { $Block } from "net.minecraft.world.level.block.Block"

/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $PottedPlantRegistry$$Type = ($PottedPlantRegistry | ((arg0: $ResourceLocation, arg1: $Block) => void));
}

declare module "org.violetmoon.zeta.event.load.ZModulesReady" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $ZModulesReady$$Type = ($ZModulesReady);
}

declare module "org.violetmoon.zetaimplforge.client.event.play.ForgeZEarlyRender" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $ForgeZEarlyRender$$Type = ($ForgeZEarlyRender);
}

declare module "org.violetmoon.zetaimplforge.event.play.ForgeZRecipeCrawl$Visit$Custom" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $ForgeZRecipeCrawl$Visit$Custom$$Type = ($ForgeZRecipeCrawl$Visit$Custom);
}

declare module "org.violetmoon.zeta.registry.BrewingRegistry" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $BrewingRegistry$$Type = ($BrewingRegistry);
}

declare module "org.violetmoon.quark.api.event.ModuleStateChangedEvent" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $ModuleStateChangedEvent$$Type = ($ModuleStateChangedEvent);
}

declare module "org.violetmoon.zeta.network.IZetaMessage" {
import { $IZetaNetworkEventContext } from "org.violetmoon.zeta.network.IZetaNetworkEventContext"

/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $IZetaMessage$$Type = ($IZetaMessage | ((arg0: $IZetaNetworkEventContext) => boolean));
}

declare module "org.violetmoon.zeta.util.zetalist.IZeta" {
import { $Zeta$$Type } from "org.violetmoon.zeta.Zeta"

/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $IZeta$$Type = ($IZeta | (() => $Zeta$$Type));
}

declare module "org.violetmoon.quark.content.client.resources.AttributeSlot" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $AttributeSlot$$Type = ($AttributeSlot | ("mainhand" | "offhand" | "feet" | "legs" | "chest" | "head" | "potion"));
}

declare module "org.violetmoon.zeta.config.SectionDefinition" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $SectionDefinition$$Type = ($SectionDefinition);
}

declare module "org.violetmoon.zeta.block.IZetaBlock" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $IZetaBlock$$Type = ($IZetaBlock);
}

declare module "org.violetmoon.zeta.module.ModuleFinder" {
import { $Stream$$Type } from "java.util.stream.Stream"
import { $ZetaLoadModuleAnnotationData$$Type } from "org.violetmoon.zeta.module.ZetaLoadModuleAnnotationData"

/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $ModuleFinder$$Type = ($ModuleFinder | (() => $Stream$$Type<$ZetaLoadModuleAnnotationData$$Type>));
}

declare module "org.violetmoon.zeta.advancement.ManualTrigger" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $ManualTrigger$$Type = ($ManualTrigger);
}

declare module "org.violetmoon.zetaimplforge.event.play.ForgeZScreenshot" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $ForgeZScreenshot$$Type = ($ForgeZScreenshot);
}

declare module "org.violetmoon.zetaimplforge.event.load.ForgeZFirstClientTick" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $ForgeZFirstClientTick$$Type = ($ForgeZFirstClientTick);
}

declare module "org.violetmoon.zeta.event.bus.IZetaLoadEvent" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $IZetaLoadEvent$$Type = ($IZetaLoadEvent);
}

declare module "org.violetmoon.quark.api.event.UsageTickerEvent" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $UsageTickerEvent$$Type = ($UsageTickerEvent);
}

declare module "org.violetmoon.zeta.registry.CraftingExtensionsRegistry" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $CraftingExtensionsRegistry$$Type = ($CraftingExtensionsRegistry);
}

declare module "org.violetmoon.zeta.client.event.play.ZEarlyRender" {
import { $GuiGraphics$$Type } from "net.minecraft.client.gui.GuiGraphics"

/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $ZEarlyRender$$Type = ($ZEarlyRender | (() => $GuiGraphics$$Type));
}

declare module "org.violetmoon.zeta.config.type.EntitySpawnConfig" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $EntitySpawnConfig$$Type = ($EntitySpawnConfig);
}

declare module "org.violetmoon.zeta.recipe.IZetaCondition" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $IZetaCondition$$Type = ($IZetaCondition);
}

declare module "org.violetmoon.quark.api.event.SimpleHarvestEvent$ActionType" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $SimpleHarvestEvent$ActionType$$Type = ($SimpleHarvestEvent$ActionType | ("none" | "click" | "harvest"));
}

declare module "org.violetmoon.zeta.event.play.ZFurnaceFuelBurnTime" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $ZFurnaceFuelBurnTime$$Type = ($ZFurnaceFuelBurnTime);
}

declare module "org.violetmoon.zetaimplforge.event.load.ForgeZConfigChange" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $ForgeZConfigChange$$Type = ($ForgeZConfigChange);
}

declare module "org.violetmoon.zeta.config.type.IConfigType" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $IConfigType$$Type = ($IConfigType);
}

declare module "org.violetmoon.zeta.recipe.IZetaConditionSerializer" {
import { $IZetaCondition, $IZetaCondition$$Type } from "org.violetmoon.zeta.recipe.IZetaCondition"

/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $IZetaConditionSerializer$$Type<T extends $IZetaCondition = $IZetaCondition> = ($IZetaConditionSerializer<T>);
}

declare module "org.violetmoon.zetaimplforge.event.play.ForgeZRecipeCrawl$Digest" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $ForgeZRecipeCrawl$Digest$$Type = ($ForgeZRecipeCrawl$Digest);
}

declare module "org.violetmoon.zetaimplforge.mixin.mixins.client.AccessorBlockColors" {
import { $BlockColor$$Type } from "net.minecraft.client.color.block.BlockColor"
import { $Map$$Type } from "java.util.Map"
import { $Block$$Type } from "net.minecraft.world.level.block.Block"
import { $Holder$Reference$$Type } from "net.minecraft.core.Holder$Reference"

/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $AccessorBlockColors$$Type = ($AccessorBlockColors | (() => $Map$$Type<$Holder$Reference$$Type<$Block$$Type>, $BlockColor$$Type>));
}

declare module "org.violetmoon.zeta.registry.ZetaRegistry" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $ZetaRegistry$$Type = ($ZetaRegistry);
}

declare module "org.violetmoon.zeta.network.ZetaNetworkDirection" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $ZetaNetworkDirection$$Type = ($ZetaNetworkDirection | ("play_to_server" | "play_to_client" | "login_to_server" | "login_to_client"));
}

declare module "org.violetmoon.zeta.api.IMutableAdvancement" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $IMutableAdvancement$$Type = ($IMutableAdvancement);
}

declare module "org.violetmoon.zeta.advancement.ManualTrigger$Instance" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $ManualTrigger$Instance$$Type = ($ManualTrigger$Instance);
}

declare module "org.violetmoon.zeta.util.handler.FuelHandler" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $FuelHandler$$Type = ($FuelHandler);
}

declare module "org.violetmoon.zeta.network.ZetaHandshakeMessage" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $ZetaHandshakeMessage$$Type = ($ZetaHandshakeMessage);
}

declare module "org.violetmoon.zeta.config.ValueDefinition" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $ValueDefinition$$Type<T = any> = ($ValueDefinition<T>);
}

declare module "org.violetmoon.zeta.item.ext.IZetaItemExtensions" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $IZetaItemExtensions$$Type = ($IZetaItemExtensions);
}

declare module "org.violetmoon.zeta.capability.ZetaCapability" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $ZetaCapability$$Type<T = any> = ($ZetaCapability<T>);
}

declare module "org.violetmoon.zetaimplforge.client.IZetaForgeItemStuff" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $IZetaForgeItemStuff$$Type = ($IZetaForgeItemStuff);
}

declare module "org.violetmoon.zeta.config.ValueDefinition$Builder" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $ValueDefinition$Builder$$Type<T = any> = ($ValueDefinition$Builder<T>);
}

declare module "org.violetmoon.zeta.module.ZetaModule" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $ZetaModule$$Type = ($ZetaModule);
}

declare module "org.violetmoon.zetaimplforge.event.load.ForgeZModulesReady" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $ForgeZModulesReady$$Type = ($ForgeZModulesReady);
}

declare module "org.violetmoon.quark.api.event.SimpleHarvestEvent" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $SimpleHarvestEvent$$Type = ($SimpleHarvestEvent);
}

declare module "org.violetmoon.zeta.event.bus.IZetaPlayEvent" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $IZetaPlayEvent$$Type = ($IZetaPlayEvent);
}

declare module "org.violetmoon.zeta.block.ext.BlockExtensionFactory" {
import { $Block } from "net.minecraft.world.level.block.Block"
import { $IZetaBlockExtensions$$Type } from "org.violetmoon.zeta.block.ext.IZetaBlockExtensions"

/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $BlockExtensionFactory$$Type = ($BlockExtensionFactory | ((arg0: $Block) => $IZetaBlockExtensions$$Type));
}

declare module "org.violetmoon.zeta.advancement.AdvancementModifierRegistry" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $AdvancementModifierRegistry$$Type = ($AdvancementModifierRegistry);
}

declare module "org.violetmoon.zeta.module.ZetaLoadModuleAnnotationData" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $ZetaLoadModuleAnnotationData$$Type = ($ZetaLoadModuleAnnotationData);
}

declare module "org.violetmoon.zetaimplforge.event.play.ForgeZRecipeCrawl$Reset" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $ForgeZRecipeCrawl$Reset$$Type = ($ForgeZRecipeCrawl$Reset);
}

declare module "org.violetmoon.zeta.recipe.FlagIngredient" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $FlagIngredient$$Type = ($FlagIngredient);
}

declare module "org.violetmoon.zeta.util.RegistryUtil" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $RegistryUtil$$Type = ($RegistryUtil);
}

declare module "org.violetmoon.zeta.event.play.ZRecipeCrawl$Visit" {
import { $Recipe, $Recipe$$Type } from "net.minecraft.world.item.crafting.Recipe"

/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $ZRecipeCrawl$Visit$$Type<T extends $Recipe<any> = $Recipe<any>> = ($ZRecipeCrawl$Visit<T>);
}

declare module "org.violetmoon.zeta.module.ZetaLoadModule" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $ZetaLoadModule$$Type = ($ZetaLoadModule);
}

declare module "org.violetmoon.zetaimplforge.event.play.ForgeZRecipeCrawl$Starting" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $ForgeZRecipeCrawl$Starting$$Type = ($ForgeZRecipeCrawl$Starting);
}

declare module "org.violetmoon.zeta.client.event.play.ZScreenshot" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $ZScreenshot$$Type = ($ZScreenshot);
}

declare module "org.violetmoon.zeta.block.ext.IZetaBlockExtensions" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $IZetaBlockExtensions$$Type = ($IZetaBlockExtensions);
}

declare module "org.violetmoon.zetaimplforge.event.play.ForgeZRecipeCrawl$Visit$Misc" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $ForgeZRecipeCrawl$Visit$Misc$$Type = ($ForgeZRecipeCrawl$Visit$Misc);
}

declare module "org.violetmoon.zeta.registry.VariantRegistry" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $VariantRegistry$$Type = ($VariantRegistry);
}

declare module "org.violetmoon.zeta.recipe.IZetaIngredient" {
import { $IZetaIngredientSerializer$$Type } from "org.violetmoon.zeta.recipe.IZetaIngredientSerializer"
import { $Ingredient, $Ingredient$$Type } from "net.minecraft.world.item.crafting.Ingredient"

/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $IZetaIngredient$$Type<T extends $Ingredient = $Ingredient> = ($IZetaIngredient<T> | (() => $IZetaIngredientSerializer$$Type<T>));
}

declare module "org.violetmoon.zeta.util.ZetaCommonProxy" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $ZetaCommonProxy$$Type = ($ZetaCommonProxy);
}

declare module "org.violetmoon.zeta.api.IAdvancementModifier" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $IAdvancementModifier$$Type = ($IAdvancementModifier);
}

declare module "org.violetmoon.zetaimplforge.event.play.ForgeZRecipeCrawl$Visit$Shaped" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $ForgeZRecipeCrawl$Visit$Shaped$$Type = ($ForgeZRecipeCrawl$Visit$Shaped);
}

declare module "org.violetmoon.zeta.event.play.ZRecipeCrawl$Visit$Shapeless" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $ZRecipeCrawl$Visit$Shapeless$$Type = ($ZRecipeCrawl$Visit$Shapeless);
}

declare module "org.violetmoon.zeta.config.Definition$Builder" {
import { $Definition, $Definition$$Type } from "org.violetmoon.zeta.config.Definition"

/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $Definition$Builder$$Type<B extends $Definition$Builder<B, T> = $Definition$Builder<B, T>, T extends $Definition = $Definition> = ($Definition$Builder<B, T>);
}

declare module "org.violetmoon.zeta.event.load.ZGatherHints" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $ZGatherHints$$Type = ($ZGatherHints);
}

declare module "org.violetmoon.zetaimplforge.event.load.ForgeZGatherHints" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $ForgeZGatherHints$$Type = ($ForgeZGatherHints);
}

declare module "org.violetmoon.quark.mixin.mixins.accessor.AccessorMerchantOffer" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $AccessorMerchantOffer$$Type = ($AccessorMerchantOffer | ((arg0: boolean) => void));
}

declare module "org.violetmoon.zetaimplforge.event.load.ForgeZRegister" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $ForgeZRegister$$Type = ($ForgeZRegister);
}

declare module "org.violetmoon.zeta.util.ZetaSide" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $ZetaSide$$Type = ($ZetaSide | ("client" | "server"));
}

declare module "org.violetmoon.zeta.module.ZetaCategory" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $ZetaCategory$$Type = ($ZetaCategory);
}

declare module "org.violetmoon.zeta.network.ZetaMessageSerializer" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $ZetaMessageSerializer$$Type = ($ZetaMessageSerializer);
}

declare module "org.violetmoon.zeta.world.EntitySpawnHandler$TrackedSpawnConfig" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $EntitySpawnHandler$TrackedSpawnConfig$$Type = ($EntitySpawnHandler$TrackedSpawnConfig);
}

declare module "org.violetmoon.quark.api.event.UsageTickerEvent$GetStack" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $UsageTickerEvent$GetStack$$Type = ($UsageTickerEvent$GetStack);
}

declare module "org.violetmoon.quark.mixin.mixins.accessor.AccessorTemptingSensor" {
import { $Ingredient$$Type } from "net.minecraft.world.item.crafting.Ingredient"

/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $AccessorTemptingSensor$$Type = ($AccessorTemptingSensor | (() => $Ingredient$$Type));
}

declare module "org.violetmoon.zeta.event.play.ZRecipeCrawl$Visit$Cooking" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $ZRecipeCrawl$Visit$Cooking$$Type = ($ZRecipeCrawl$Visit$Cooking);
}

declare module "org.violetmoon.quark.mixin.mixins.accessor.AccessorBlockItem" {
import { $BlockState$$Type } from "net.minecraft.world.level.block.state.BlockState"
import { $BlockPlaceContext } from "net.minecraft.world.item.context.BlockPlaceContext"

/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $AccessorBlockItem$$Type = ($AccessorBlockItem | ((arg0: $BlockPlaceContext) => $BlockState$$Type));
}

declare module "org.violetmoon.zeta.mixin.mixins.AccessorPistonStructureResolver" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $AccessorPistonStructureResolver$$Type = ($AccessorPistonStructureResolver);
}

declare module "org.violetmoon.zeta.config.type.IBiomeConfig" {
import { $Holder } from "net.minecraft.core.Holder"
import { $Biome } from "net.minecraft.world.level.biome.Biome"

/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $IBiomeConfig$$Type = ($IBiomeConfig | ((arg0: $Holder<$Biome>) => boolean));
}

declare module "org.violetmoon.zeta.event.load.ZLoadComplete" {
import { $Runnable } from "java.lang.Runnable"

/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $ZLoadComplete$$Type = ($ZLoadComplete | ((arg0: $Runnable) => void));
}

declare module "org.violetmoon.zeta.config.ConfigManager" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $ConfigManager$$Type = ($ConfigManager);
}

declare module "org.violetmoon.zeta.event.play.ZRecipeCrawl$Visit$Misc" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $ZRecipeCrawl$Visit$Misc$$Type = ($ZRecipeCrawl$Visit$Misc);
}

declare module "org.violetmoon.zeta.network.IZetaNetworkEventContext" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $IZetaNetworkEventContext$$Type = ($IZetaNetworkEventContext);
}

declare module "org.violetmoon.quark.api.event.GatherToolClassesEvent" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $GatherToolClassesEvent$$Type = ($GatherToolClassesEvent);
}

declare module "org.violetmoon.zeta.config.Definition" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $Definition$$Type = ($Definition);
}

declare module "org.violetmoon.quark.mixin.mixins.IForgeItemMixin" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $IForgeItemMixin$$Type = ($IForgeItemMixin);
}

declare module "org.violetmoon.zeta.event.load.ZRegister" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $ZRegister$$Type = ($ZRegister);
}

declare module "org.violetmoon.zetaimplforge.event.load.ForgeZGatherAdditionalFlags" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $ForgeZGatherAdditionalFlags$$Type = ($ForgeZGatherAdditionalFlags);
}

declare module "org.violetmoon.zetaimplforge.event.play.ForgeZRecipeCrawl$Visit" {
import { $Recipe, $Recipe$$Type } from "net.minecraft.world.item.crafting.Recipe"

/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $ForgeZRecipeCrawl$Visit$$Type<T extends $Recipe<any> = $Recipe<any>> = ($ForgeZRecipeCrawl$Visit<T>);
}

declare module "org.violetmoon.quark.mixin.mixins.client.accessor.AccessorMultiPlayerGameMode" {
import { $BlockHitResult } from "net.minecraft.world.phys.BlockHitResult"
import { $InteractionResult$$Type } from "net.minecraft.world.InteractionResult"
import { $LocalPlayer } from "net.minecraft.client.player.LocalPlayer"
import { $InteractionHand } from "net.minecraft.world.InteractionHand"

/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $AccessorMultiPlayerGameMode$$Type = ($AccessorMultiPlayerGameMode | ((arg0: $LocalPlayer, arg1: $InteractionHand, arg2: $BlockHitResult) => $InteractionResult$$Type));
}

declare module "org.violetmoon.quark.content.client.hax.PseudoAccessorItemStack" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $PseudoAccessorItemStack$$Type = ($PseudoAccessorItemStack);
}

declare module "org.violetmoon.zeta.config.IZetaConfigInternals" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $IZetaConfigInternals$$Type = ($IZetaConfigInternals);
}

declare module "org.violetmoon.zeta.event.load.ZRegister$Post" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $ZRegister$Post$$Type = ($ZRegister$Post);
}

declare module "org.violetmoon.zeta.event.play.ZRecipeCrawl$Reset" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $ZRecipeCrawl$Reset$$Type = ($ZRecipeCrawl$Reset);
}

declare module "org.violetmoon.quark.mixin.mixins.accessor.AccessorAbstractChestedHorse" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $AccessorAbstractChestedHorse$$Type = ($AccessorAbstractChestedHorse | (() => void));
}

declare module "org.violetmoon.zetaimplforge.mixin.mixins.client.AccessorItemColors" {
import { $Map$$Type } from "java.util.Map"
import { $Item$$Type } from "net.minecraft.world.item.Item"
import { $ItemColor$$Type } from "net.minecraft.client.color.item.ItemColor"
import { $Holder$Reference$$Type } from "net.minecraft.core.Holder$Reference"

/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $AccessorItemColors$$Type = ($AccessorItemColors | (() => $Map$$Type<$Holder$Reference$$Type<$Item$$Type>, $ItemColor$$Type>));
}

declare module "org.violetmoon.zetaimplforge.event.play.loading.ForgeZGatherAdditionalFlags" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $ForgeZGatherAdditionalFlags$$Type = ($ForgeZGatherAdditionalFlags);
}

declare module "org.violetmoon.zeta.capability.ZetaCapabilityManager" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $ZetaCapabilityManager$$Type = ($ZetaCapabilityManager);
}

declare module "org.violetmoon.quark.mixin.mixins.IZetaItemExtensionsMixin" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $IZetaItemExtensionsMixin$$Type = ($IZetaItemExtensionsMixin);
}

declare module "org.violetmoon.quark.api.event.UsageTickerEvent$GetCount" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $UsageTickerEvent$GetCount$$Type = ($UsageTickerEvent$GetCount);
}

declare module "org.violetmoon.zeta.module.IDisableable" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $IDisableable$$Type<SELF = any> = ($IDisableable<SELF>);
}

declare module "org.violetmoon.zeta.Zeta" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $Zeta$$Type = ($Zeta);
}

