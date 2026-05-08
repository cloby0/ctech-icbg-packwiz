declare module "net.silentchaos512.gear.api.util.IGearComponent" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $IGearComponent$$Type<D = any> = ($IGearComponent<D>);
}

declare module "net.silentchaos512.gear.gear.part.PartData" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $PartData$$Type = ($PartData);
}

declare module "net.silentchaos512.utils.Color" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $Color$$Type = ($Color);
}

declare module "net.silentchaos512.gear.api.material.IMaterialInstance" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $IMaterialInstance$$Type = ($IMaterialInstance);
}

declare module "net.silentchaos512.gear.api.event.GearNamePrefixesEvent" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $GearNamePrefixesEvent$$Type = ($GearNamePrefixesEvent);
}

declare module "net.silentchaos512.gear.api.stats.ItemStat$Properties" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $ItemStat$Properties$$Type = ($ItemStat$Properties);
}

declare module "net.silentchaos512.gear.api.material.IMaterial" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $IMaterial$$Type = ($IMaterial);
}

declare module "net.silentchaos512.gear.api.item.GearType" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $GearType$$Type = ($GearType);
}

declare module "net.silentchaos512.gear.api.traits.ITraitConditionSerializer" {
import { $ITraitCondition, $ITraitCondition$$Type } from "net.silentchaos512.gear.api.traits.ITraitCondition"

/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $ITraitConditionSerializer$$Type<T extends $ITraitCondition = $ITraitCondition> = ($ITraitConditionSerializer<T>);
}

declare module "net.silentchaos512.gear.gear.material.MaterialInstance" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $MaterialInstance$$Type = ($MaterialInstance);
}

declare module "net.silentchaos512.gear.api.material.modifier.IMaterialModifierType" {
import { $IMaterialModifier, $IMaterialModifier$$Type } from "net.silentchaos512.gear.api.material.modifier.IMaterialModifier"

/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $IMaterialModifierType$$Type<T extends $IMaterialModifier = $IMaterialModifier> = ($IMaterialModifierType<T>);
}

declare module "net.silentchaos512.gear.network.SyncMaterialCraftingItemsPacket" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $SyncMaterialCraftingItemsPacket$$Type = ($SyncMaterialCraftingItemsPacket);
}

declare module "net.silentchaos512.gear.api.traits.ITraitCondition" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $ITraitCondition$$Type = ($ITraitCondition);
}

declare module "net.silentchaos512.gear.api.event.GetTraitsEvent" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $GetTraitsEvent$$Type = ($GetTraitsEvent);
}

declare module "net.silentchaos512.gear.api.event.GetMaterialStatsEvent" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $GetMaterialStatsEvent$$Type = ($GetMaterialStatsEvent);
}

declare module "net.silentchaos512.gear.api.util.IStatModProvider" {
import { $StatGearKey } from "net.silentchaos512.gear.api.util.StatGearKey"
import { $Collection$$Type } from "java.util.Collection"
import { $ItemStack } from "net.minecraft.world.item.ItemStack"
import { $StatInstance$$Type } from "net.silentchaos512.gear.api.stats.StatInstance"
import { $PartType } from "net.silentchaos512.gear.api.part.PartType"

/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $IStatModProvider$$Type<D = any> = ($IStatModProvider<D> | ((arg0: D, arg1: $PartType, arg2: $StatGearKey, arg3: $ItemStack) => $Collection$$Type<$StatInstance$$Type>));
}

declare module "net.silentchaos512.gear.api.material.IMaterialSerializer" {
import { $IMaterial, $IMaterial$$Type } from "net.silentchaos512.gear.api.material.IMaterial"

/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $IMaterialSerializer$$Type<T extends $IMaterial = $IMaterial> = ($IMaterialSerializer<T>);
}

declare module "net.silentchaos512.gear.api.material.IMaterialCategory" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $IMaterialCategory$$Type = ($IMaterialCategory | (() => string));
}

declare module "net.silentchaos512.gear.api.part.PartType" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $PartType$$Type = ($PartType);
}

declare module "net.silentchaos512.gear.api.item.IStatItem" {
import { $ItemStat } from "net.silentchaos512.gear.api.stats.ItemStat"
import { $ItemStack } from "net.minecraft.world.item.ItemStack"

/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $IStatItem$$Type = ($IStatItem | ((arg0: $ItemStack, arg1: $ItemStat) => float));
}

declare module "net.silentchaos512.gear.api.util.StatGearKey" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $StatGearKey$$Type = ($StatGearKey);
}

declare module "net.silentchaos512.gear.api.traits.TraitActionContext" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $TraitActionContext$$Type = ($TraitActionContext);
}

declare module "net.silentchaos512.gear.client.model.PartTextures" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $PartTextures$$Type = ($PartTextures | ("highlight" | "splotches" | "main_generic_lc" | "main_generic_hc" | "rod_generic_lc" | "rod_generic_hc" | "tip_sharp" | "tip_smooth" | "binding_generic" | "grip_wool" | "lining_cloth" | "lining_slime" | "lining_slime_highlight" | "bowstring_string" | "arrow" | "charged_arrow" | "charged_firework" | "fletching_generic" | "adornment_generic" | "adornment_highlight" | "cloth" | "dust" | "metal" | "wood"));
}

declare module "net.silentchaos512.gear.api.stats.IItemStat" {
import { $ResourceLocation$$Type } from "net.minecraft.resources.ResourceLocation"

/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $IItemStat$$Type = ($IItemStat | (() => $ResourceLocation$$Type));
}

declare module "net.silentchaos512.gear.api.item.GearType$Builder" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $GearType$Builder$$Type = ($GearType$Builder);
}

declare module "net.silentchaos512.gear.api.event.GearItemEvent" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $GearItemEvent$$Type = ($GearItemEvent);
}

declare module "net.silentchaos512.gear.api.part.PartDataList" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $PartDataList$$Type = ($PartDataList);
}

declare module "net.silentchaos512.gear.api.traits.ITrait" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $ITrait$$Type = ($ITrait);
}

declare module "net.silentchaos512.gear.gear.part.RepairContext$Type" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $RepairContext$Type$$Type = ($RepairContext$Type | ("quick" | "anvil"));
}

declare module "net.silentchaos512.gear.api.stats.StatInstance$Operation" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $StatInstance$Operation$$Type = ($StatInstance$Operation | ("avg" | "max" | "mul1" | "mul2" | "add"));
}

declare module "net.silentchaos512.gear.api.traits.TraitInstance" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $TraitInstance$$Type = ($TraitInstance);
}

declare module "net.silentchaos512.gear.api.part.IPartData" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $IPartData$$Type = ($IPartData);
}

declare module "net.silentchaos512.gear.api.material.modifier.IMaterialModifier" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $IMaterialModifier$$Type = ($IMaterialModifier);
}

declare module "net.silentchaos512.gear.api.material.IMaterialLayerList" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $IMaterialLayerList$$Type = ($IMaterialLayerList);
}

declare module "net.silentchaos512.gear.api.event.GetStatModifierEvent" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $GetStatModifierEvent$$Type = ($GetStatModifierEvent);
}

declare module "net.silentchaos512.gear.api.stats.StatInstance" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $StatInstance$$Type = ($StatInstance);
}

declare module "net.silentchaos512.gear.api.util.PartGearKey" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $PartGearKey$$Type = ($PartGearKey);
}

declare module "net.silentchaos512.gear.api.traits.ITraitInstance" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $ITraitInstance$$Type = ($ITraitInstance);
}

declare module "net.silentchaos512.gear.api.stats.ItemStat" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $ItemStat$$Type = ($ItemStat);
}

declare module "net.silentchaos512.gear.api.material.IMaterialDisplay" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $IMaterialDisplay$$Type = ($IMaterialDisplay);
}

declare module "net.silentchaos512.gear.api.material.MaterialList" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $MaterialList$$Type = ($MaterialList);
}

declare module "net.silentchaos512.gear.api.item.GearTypeMatcher" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $GearTypeMatcher$$Type = ($GearTypeMatcher);
}

declare module "net.silentchaos512.gear.api.traits.LazyTraitInstance" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $LazyTraitInstance$$Type = ($LazyTraitInstance);
}

declare module "net.silentchaos512.gear.api.part.IGearPart" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $IGearPart$$Type = ($IGearPart);
}

declare module "net.silentchaos512.gear.api.util.DataResource" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $DataResource$$Type<T = any> = ($DataResource<T>);
}

declare module "net.silentchaos512.gear.item.CompoundPartItem" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $CompoundPartItem$$Type = ($CompoundPartItem);
}

declare module "net.silentchaos512.gear.api.util.IGearComponentInstance" {
import { $IGearComponent, $IGearComponent$$Type } from "net.silentchaos512.gear.api.util.IGearComponent"

/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $IGearComponentInstance$$Type<T extends $IGearComponent<any> = $IGearComponent<any>> = ($IGearComponentInstance<T>);
}

declare module "net.silentchaos512.gear.api.traits.ITraitSerializer" {
import { $ITrait, $ITrait$$Type } from "net.silentchaos512.gear.api.traits.ITrait"

/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $ITraitSerializer$$Type<T extends $ITrait = $ITrait> = ($ITraitSerializer<T>);
}

declare module "net.silentchaos512.gear.api.item.ICoreItem" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $ICoreItem$$Type = ($ICoreItem);
}

declare module "net.silentchaos512.gear.api.material.MaterialLayer" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $MaterialLayer$$Type = ($MaterialLayer);
}

declare module "net.silentchaos512.gear.api.stats.ItemStat$DisplayFormat" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $ItemStat$DisplayFormat$$Type = ($ItemStat$DisplayFormat | ("unit" | "multiplier" | "percentage"));
}

declare module "net.silentchaos512.gear.api.part.IPartSerializer" {
import { $IGearPart, $IGearPart$$Type } from "net.silentchaos512.gear.api.part.IGearPart"

/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $IPartSerializer$$Type<T extends $IGearPart = $IGearPart> = ($IPartSerializer<T>);
}

declare module "net.silentchaos512.gear.api.util.ITraitProvider" {
import { $TraitInstance$$Type } from "net.silentchaos512.gear.api.traits.TraitInstance"
import { $Collection$$Type } from "java.util.Collection"
import { $ItemStack } from "net.minecraft.world.item.ItemStack"
import { $PartGearKey } from "net.silentchaos512.gear.api.util.PartGearKey"

/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $ITraitProvider$$Type<D = any> = ($ITraitProvider<D> | ((arg0: D, arg1: $PartGearKey, arg2: $ItemStack) => $Collection$$Type<$TraitInstance$$Type>));
}

declare module "net.silentchaos512.gear.api.part.PartType$Builder" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $PartType$Builder$$Type = ($PartType$Builder);
}

declare module "net.silentchaos512.gear.api.part.MaterialGrade" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $MaterialGrade$$Type = ($MaterialGrade | ("none" | "e" | "d" | "c" | "b" | "a" | "s" | "ss" | "sss" | "max"));
}

