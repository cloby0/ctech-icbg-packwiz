declare module "fuzs.puzzleslib.impl.event.LootTableModifyEvent" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $LootTableModifyEvent$$Type = ($LootTableModifyEvent);
}

declare module "fuzs.puzzleslib.mixin.accessor.FireBlockForgeAccessor" {
import { $Block } from "net.minecraft.world.level.block.Block"

/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $FireBlockForgeAccessor$$Type = ($FireBlockForgeAccessor | ((arg0: $Block, arg1: integer, arg2: integer) => void));
}

declare module "fuzs.puzzleslib.mixin.client.accessor.ModelBakeryAccessor" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $ModelBakeryAccessor$$Type = ($ModelBakeryAccessor);
}

declare module "fuzs.puzzleslib.mixin.client.accessor.TooltipAccessor" {
import { $List } from "java.util.List"
import { $FormattedCharSequence } from "net.minecraft.util.FormattedCharSequence"

/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $TooltipAccessor$$Type = ($TooltipAccessor | ((arg0: $List<$FormattedCharSequence>) => void));
}

declare module "fuzs.puzzleslib.mixin.accessor.MobSpawnSettingsBuilderForgeAccessor" {
import { $EntityType$$Type } from "net.minecraft.world.entity.EntityType"
import { $Map$$Type } from "java.util.Map"
import { $MobSpawnSettings$MobSpawnCost$$Type } from "net.minecraft.world.level.biome.MobSpawnSettings$MobSpawnCost"

/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $MobSpawnSettingsBuilderForgeAccessor$$Type = ($MobSpawnSettingsBuilderForgeAccessor | (() => $Map$$Type<$EntityType$$Type<any>, $MobSpawnSettings$MobSpawnCost$$Type>));
}

declare module "fuzs.puzzleslib.mixin.client.accessor.ItemColorsForgeAccessor" {
import { $Map$$Type } from "java.util.Map"
import { $Item$$Type } from "net.minecraft.world.item.Item"
import { $ItemColor$$Type } from "net.minecraft.client.color.item.ItemColor"
import { $Holder$Reference$$Type } from "net.minecraft.core.Holder$Reference"

/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $ItemColorsForgeAccessor$$Type = ($ItemColorsForgeAccessor | (() => $Map$$Type<$Holder$Reference$$Type<$Item$$Type>, $ItemColor$$Type>));
}

declare module "fuzs.puzzleslib.mixin.accessor.BlockItemAccessor" {
import { $Block } from "net.minecraft.world.level.block.Block"

/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $BlockItemAccessor$$Type = ($BlockItemAccessor | ((arg0: $Block) => void));
}

declare module "fuzs.puzzleslib.mixin.client.accessor.ItemForgeAccessor" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $ItemForgeAccessor$$Type = ($ItemForgeAccessor);
}

declare module "fuzs.puzzleslib.impl.data.FileHelperDataProvider" {
import { $ExistingFileHelper } from "net.minecraftforge.common.data.ExistingFileHelper"

/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $FileHelperDataProvider$$Type = ($FileHelperDataProvider | ((arg0: $ExistingFileHelper) => void));
}

declare module "fuzs.puzzleslib.mixin.accessor.LootTableForgeAccessor" {
import { $List$$Type } from "java.util.List"
import { $LootPool$$Type } from "net.minecraft.world.level.storage.loot.LootPool"

/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $LootTableForgeAccessor$$Type = ($LootTableForgeAccessor | (() => $List$$Type<$LootPool$$Type>));
}

declare module "fuzs.puzzleslib.mixin.client.accessor.BlockColorsForgeAccessor" {
import { $BlockColor$$Type } from "net.minecraft.client.color.block.BlockColor"
import { $Map$$Type } from "java.util.Map"
import { $Block$$Type } from "net.minecraft.world.level.block.Block"
import { $Holder$Reference$$Type } from "net.minecraft.core.Holder$Reference"

/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $BlockColorsForgeAccessor$$Type = ($BlockColorsForgeAccessor | (() => $Map$$Type<$Holder$Reference$$Type<$Block$$Type>, $BlockColor$$Type>));
}

declare module "fuzs.puzzleslib.mixin.accessor.BlockAccessor" {
import { $Item } from "net.minecraft.world.item.Item"

/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $BlockAccessor$$Type = ($BlockAccessor | ((arg0: $Item) => void));
}

declare module "fuzs.puzzleslib.mixin.accessor.SimpleContainerAccessor" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $SimpleContainerAccessor$$Type = ($SimpleContainerAccessor);
}

declare module "fuzs.puzzleslib.mixin.accessor.ForgeRegistryForgeAccessor" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $ForgeRegistryForgeAccessor$$Type<V = any> = ($ForgeRegistryForgeAccessor<V>);
}

declare module "fuzs.puzzleslib.mixin.accessor.AbstractContainerMenuAccessor" {
import { $Slot, $Slot$$Type } from "net.minecraft.world.inventory.Slot"

/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $AbstractContainerMenuAccessor$$Type = ($AbstractContainerMenuAccessor | ((arg0: $Slot) => $Slot$$Type));
}

declare module "fuzs.puzzleslib.mixin.accessor.BiomeSpecialEffectsBuilderForgeAccessor" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $BiomeSpecialEffectsBuilderForgeAccessor$$Type = ($BiomeSpecialEffectsBuilderForgeAccessor);
}

