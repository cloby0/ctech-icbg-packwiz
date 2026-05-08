declare module "com.tterrag.registrate.providers.RegistrateAdvancementProvider" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $RegistrateAdvancementProvider$$Type = ($RegistrateAdvancementProvider);
}

declare module "com.tterrag.registrate.providers.loot.RegistrateLootTableProvider$LootType" {
import { $RegistrateLootTables, $RegistrateLootTables$$Type } from "com.tterrag.registrate.providers.loot.RegistrateLootTables"

/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $RegistrateLootTableProvider$LootType$$Type<T extends $RegistrateLootTables = $RegistrateLootTables> = ($RegistrateLootTableProvider$LootType<T>);
}

declare module "com.tterrag.registrate.util.nullness.NonNullSupplier" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $NonNullSupplier$$Type<T = any> = ($NonNullSupplier<T> | (() => T));
}

declare module "com.tterrag.registrate.providers.ProviderType" {
import { $AbstractRegistrate } from "com.tterrag.registrate.AbstractRegistrate"
import { $GatherDataEvent } from "net.minecraftforge.data.event.GatherDataEvent"
import { $Map } from "java.util.Map"
import { $RegistrateProvider, $RegistrateProvider$$Type } from "com.tterrag.registrate.providers.RegistrateProvider"

/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $ProviderType$$Type<T extends $RegistrateProvider = $RegistrateProvider> = ($ProviderType<T> | ((arg0: $AbstractRegistrate<any>, arg1: $GatherDataEvent, arg2: $Map<$ProviderType<any>, $RegistrateProvider>) => T));
}

declare module "com.tterrag.registrate.builders.BlockEntityBuilder$BlockEntityFactory" {
import { $BlockEntityType } from "net.minecraft.world.level.block.entity.BlockEntityType"
import { $BlockPos } from "net.minecraft.core.BlockPos"
import { $BlockState } from "net.minecraft.world.level.block.state.BlockState"
import { $BlockEntity, $BlockEntity$$Type } from "net.minecraft.world.level.block.entity.BlockEntity"

/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $BlockEntityBuilder$BlockEntityFactory$$Type<T extends $BlockEntity = $BlockEntity> = ($BlockEntityBuilder$BlockEntityFactory<T> | ((arg0: $BlockEntityType<T>, arg1: $BlockPos, arg2: $BlockState) => T));
}

declare module "com.tterrag.registrate.builders.FluidBuilder$FluidTypeFactory" {
import { $ResourceLocation } from "net.minecraft.resources.ResourceLocation"
import { $FluidType$Properties } from "net.minecraftforge.fluids.FluidType$Properties"
import { $FluidType$$Type } from "net.minecraftforge.fluids.FluidType"

/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $FluidBuilder$FluidTypeFactory$$Type = ($FluidBuilder$FluidTypeFactory | ((arg0: $FluidType$Properties, arg1: $ResourceLocation, arg2: $ResourceLocation) => $FluidType$$Type));
}

declare module "com.tterrag.registrate.providers.RegistrateLangProvider" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $RegistrateLangProvider$$Type = ($RegistrateLangProvider);
}

declare module "com.tterrag.registrate.util.entry.EntityEntry" {
import { $Entity, $Entity$$Type } from "net.minecraft.world.entity.Entity"

/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $EntityEntry$$Type<T extends $Entity = $Entity> = ($EntityEntry<T>);
}

declare module "com.tterrag.registrate.builders.MenuBuilder$ScreenFactory" {
import { $Component } from "net.minecraft.network.chat.Component"
import { $AbstractContainerMenu, $AbstractContainerMenu$$Type } from "net.minecraft.world.inventory.AbstractContainerMenu"
import { $Screen, $Screen$$Type } from "net.minecraft.client.gui.screens.Screen"
import { $Inventory } from "net.minecraft.world.entity.player.Inventory"
import { $MenuAccess, $MenuAccess$$Type } from "net.minecraft.client.gui.screens.inventory.MenuAccess"

/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $MenuBuilder$ScreenFactory$$Type<M extends $AbstractContainerMenu = $AbstractContainerMenu, T extends ($Screen & $MenuAccess<M>) = ($Screen & $MenuAccess<M>)> = ($MenuBuilder$ScreenFactory<M, T> | ((arg0: M, arg1: $Inventory, arg2: $Component) => T));
}

declare module "com.tterrag.registrate.providers.RegistrateGenericProvider$GeneratorData" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $RegistrateGenericProvider$GeneratorData$$Type = ($RegistrateGenericProvider$GeneratorData);
}

declare module "com.tterrag.registrate.providers.RegistrateProvider" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $RegistrateProvider$$Type = ($RegistrateProvider);
}

declare module "com.tterrag.registrate.AbstractRegistrate" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $AbstractRegistrate$$Type<S extends $AbstractRegistrate<S> = $AbstractRegistrate<S>> = ($AbstractRegistrate<S>);
}

declare module "com.tterrag.registrate.builders.NoConfigBuilder" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $NoConfigBuilder$$Type<R = any, T extends R = R, P = any> = ($NoConfigBuilder<R, T, P>);
}

declare module "com.tterrag.registrate.util.entry.BlockEntry" {
import { $Block, $Block$$Type } from "net.minecraft.world.level.block.Block"

/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $BlockEntry$$Type<T extends $Block = $Block> = ($BlockEntry<T>);
}

declare module "com.tterrag.registrate.util.entry.ItemProviderEntry" {
import { $ItemLike, $ItemLike$$Type } from "net.minecraft.world.level.ItemLike"

/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $ItemProviderEntry$$Type<T extends $ItemLike = $ItemLike> = ($ItemProviderEntry<T>);
}

declare module "com.tterrag.registrate.builders.MenuBuilder" {
import { $AbstractContainerMenu, $AbstractContainerMenu$$Type } from "net.minecraft.world.inventory.AbstractContainerMenu"
import { $Screen, $Screen$$Type } from "net.minecraft.client.gui.screens.Screen"
import { $MenuAccess, $MenuAccess$$Type } from "net.minecraft.client.gui.screens.inventory.MenuAccess"

/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $MenuBuilder$$Type<T extends $AbstractContainerMenu = $AbstractContainerMenu, S extends ($Screen & $MenuAccess<T>) = ($Screen & $MenuAccess<T>), P = any> = ($MenuBuilder<T, S, P>);
}

declare module "com.tterrag.registrate.builders.BlockEntityBuilder" {
import { $BlockEntity, $BlockEntity$$Type } from "net.minecraft.world.level.block.entity.BlockEntity"

/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $BlockEntityBuilder$$Type<T extends $BlockEntity = $BlockEntity, P = any> = ($BlockEntityBuilder<T, P>);
}

declare module "com.tterrag.registrate.providers.RegistrateItemTagsProvider" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $RegistrateItemTagsProvider$$Type = ($RegistrateItemTagsProvider);
}

declare module "com.tterrag.registrate.providers.loot.RegistrateLootTables" {
import { $ResourceLocation } from "net.minecraft.resources.ResourceLocation"
import { $BiConsumer } from "java.util.function.BiConsumer"
import { $LootTable$Builder } from "net.minecraft.world.level.storage.loot.LootTable$Builder"

/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $RegistrateLootTables$$Type = ($RegistrateLootTables | ((arg0: $BiConsumer<$ResourceLocation, $LootTable$Builder>) => void));
}

declare module "com.tterrag.registrate.builders.MenuBuilder$ForgeMenuFactory" {
import { $AbstractContainerMenu, $AbstractContainerMenu$$Type } from "net.minecraft.world.inventory.AbstractContainerMenu"
import { $Inventory } from "net.minecraft.world.entity.player.Inventory"
import { $FriendlyByteBuf } from "net.minecraft.network.FriendlyByteBuf"
import { $MenuType } from "net.minecraft.world.inventory.MenuType"

/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $MenuBuilder$ForgeMenuFactory$$Type<T extends $AbstractContainerMenu = $AbstractContainerMenu> = ($MenuBuilder$ForgeMenuFactory<T> | ((arg0: $MenuType<T>, arg1: integer, arg2: $Inventory, arg3: $FriendlyByteBuf) => T));
}

declare module "com.tterrag.registrate.providers.RegistrateGenericProvider$Generator" {
import { $RegistrateGenericProvider$GeneratorData } from "com.tterrag.registrate.providers.RegistrateGenericProvider$GeneratorData"
import { $DataProvider$$Type } from "net.minecraft.data.DataProvider"

/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $RegistrateGenericProvider$Generator$$Type = ($RegistrateGenericProvider$Generator | ((arg0: $RegistrateGenericProvider$GeneratorData) => $DataProvider$$Type));
}

declare module "com.tterrag.registrate.util.nullness.NonNullConsumer" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $NonNullConsumer$$Type<T = any> = ($NonNullConsumer<T> | ((arg0: T) => void));
}

declare module "com.tterrag.registrate.providers.RegistrateTagsProvider" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $RegistrateTagsProvider$$Type<T = any> = ($RegistrateTagsProvider<T>);
}

declare module "com.tterrag.registrate.builders.EntityBuilder" {
import { $Entity, $Entity$$Type } from "net.minecraft.world.entity.Entity"

/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $EntityBuilder$$Type<T extends $Entity = $Entity, P = any> = ($EntityBuilder<T, P>);
}

declare module "com.tterrag.registrate.providers.RegistrateGenericProvider" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $RegistrateGenericProvider$$Type = ($RegistrateGenericProvider);
}

declare module "com.tterrag.registrate.util.entry.RegistryEntry" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $RegistryEntry$$Type<T = any> = ($RegistryEntry<T>);
}

declare module "com.tterrag.registrate.util.nullness.NonNullBiFunction" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $NonNullBiFunction$$Type<T = any, U = any, R = any> = ($NonNullBiFunction<T, U, R> | ((arg0: T, arg1: U) => R));
}

declare module "com.tterrag.registrate.providers.loot.RegistrateEntityLootTables" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $RegistrateEntityLootTables$$Type = ($RegistrateEntityLootTables);
}

declare module "com.tterrag.registrate.builders.ItemBuilder" {
import { $Item, $Item$$Type } from "net.minecraft.world.item.Item"

/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $ItemBuilder$$Type<T extends $Item = $Item, P = any> = ($ItemBuilder<T, P>);
}

declare module "com.tterrag.registrate.providers.RegistrateTagsProvider$IntrinsicImpl" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $RegistrateTagsProvider$IntrinsicImpl$$Type<T = any> = ($RegistrateTagsProvider$IntrinsicImpl<T>);
}

declare module "com.tterrag.registrate.builders.MenuBuilder$MenuFactory" {
import { $AbstractContainerMenu, $AbstractContainerMenu$$Type } from "net.minecraft.world.inventory.AbstractContainerMenu"
import { $Inventory } from "net.minecraft.world.entity.player.Inventory"
import { $MenuType } from "net.minecraft.world.inventory.MenuType"

/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $MenuBuilder$MenuFactory$$Type<T extends $AbstractContainerMenu = $AbstractContainerMenu> = ($MenuBuilder$MenuFactory<T> | ((arg0: $MenuType<T>, arg1: integer, arg2: $Inventory) => T));
}

declare module "com.tterrag.registrate.builders.FluidBuilder" {
import { $ForgeFlowingFluid, $ForgeFlowingFluid$$Type } from "net.minecraftforge.fluids.ForgeFlowingFluid"

/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $FluidBuilder$$Type<T extends $ForgeFlowingFluid = $ForgeFlowingFluid, P = any> = ($FluidBuilder<T, P>);
}

declare module "com.tterrag.registrate.builders.AbstractBuilder" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $AbstractBuilder$$Type<R = any, T extends R = R, P = any, S extends $AbstractBuilder<R, T, P, S> = $AbstractBuilder<R, T, P, S>> = ($AbstractBuilder<R, T, P, S>);
}

declare module "com.tterrag.registrate.util.CreativeModeTabModifier" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $CreativeModeTabModifier$$Type = ($CreativeModeTabModifier);
}

declare module "com.tterrag.registrate.util.DataIngredient" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $DataIngredient$$Type = ($DataIngredient);
}

declare module "com.tterrag.registrate.util.entry.ItemEntry" {
import { $Item, $Item$$Type } from "net.minecraft.world.item.Item"

/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $ItemEntry$$Type<T extends $Item = $Item> = ($ItemEntry<T>);
}

declare module "com.tterrag.registrate.providers.RegistrateRecipeProvider" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $RegistrateRecipeProvider$$Type = ($RegistrateRecipeProvider);
}

declare module "com.tterrag.registrate.providers.RegistrateItemModelProvider" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $RegistrateItemModelProvider$$Type = ($RegistrateItemModelProvider);
}

declare module "com.tterrag.registrate.builders.BuilderCallback" {
import { $Registry } from "net.minecraft.core.Registry"
import { $NonNullSupplier } from "com.tterrag.registrate.util.nullness.NonNullSupplier"
import { $Builder } from "com.tterrag.registrate.builders.Builder"
import { $RegistryEntry, $RegistryEntry$$Type } from "com.tterrag.registrate.util.entry.RegistryEntry"
import { $NonNullFunction } from "com.tterrag.registrate.util.nullness.NonNullFunction"
import { $ResourceKey } from "net.minecraft.resources.ResourceKey"
import { $RegistryObject } from "net.minecraftforge.registries.RegistryObject"

/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $BuilderCallback$$Type = ($BuilderCallback | ((arg0: string, arg1: $ResourceKey<$Registry<R>>, arg2: $Builder<R, T, any, any>, arg3: $NonNullSupplier<T>, arg4: $NonNullFunction<$RegistryObject<T>, $RegistryEntry<T>>) => $RegistryEntry$$Type<T>));
}

declare module "com.tterrag.registrate.builders.EnchantmentBuilder" {
import { $Enchantment, $Enchantment$$Type } from "net.minecraft.world.item.enchantment.Enchantment"

/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $EnchantmentBuilder$$Type<T extends $Enchantment = $Enchantment, P = any> = ($EnchantmentBuilder<T, P>);
}

declare module "com.tterrag.registrate.builders.EnchantmentBuilder$EnchantmentFactory" {
import { $Enchantment, $Enchantment$$Type } from "net.minecraft.world.item.enchantment.Enchantment"
import { $EnchantmentCategory } from "net.minecraft.world.item.enchantment.EnchantmentCategory"
import { $Enchantment$Rarity } from "net.minecraft.world.item.enchantment.Enchantment$Rarity"
import { $EquipmentSlot } from "net.minecraft.world.entity.EquipmentSlot"

/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $EnchantmentBuilder$EnchantmentFactory$$Type<T extends $Enchantment = $Enchantment> = ($EnchantmentBuilder$EnchantmentFactory<T> | ((arg0: $Enchantment$Rarity, arg1: $EnchantmentCategory, ...arg2: $EquipmentSlot[]) => T));
}

declare module "com.tterrag.registrate.providers.loot.RegistrateLootTableProvider" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $RegistrateLootTableProvider$$Type = ($RegistrateLootTableProvider);
}

declare module "com.tterrag.registrate.builders.BlockBuilder" {
import { $Block, $Block$$Type } from "net.minecraft.world.level.block.Block"

/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $BlockBuilder$$Type<T extends $Block = $Block, P = any> = ($BlockBuilder<T, P>);
}

declare module "com.tterrag.registrate.util.nullness.NonNullUnaryOperator" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $NonNullUnaryOperator$$Type<T = any> = ($NonNullUnaryOperator<T> | ((arg0: T) => T));
}

declare module "com.tterrag.registrate.providers.loot.RegistrateBlockLootTables" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $RegistrateBlockLootTables$$Type = ($RegistrateBlockLootTables);
}

declare module "com.tterrag.registrate.util.nullness.NonNullBiConsumer" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $NonNullBiConsumer$$Type<T = any, U = any> = ($NonNullBiConsumer<T, U> | ((arg0: T, arg1: U) => void));
}

declare module "com.tterrag.registrate.providers.DataGenContext" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $DataGenContext$$Type<R = any, E extends R = R> = ($DataGenContext<R, E>);
}

declare module "com.tterrag.registrate.providers.RegistrateBlockstateProvider" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $RegistrateBlockstateProvider$$Type = ($RegistrateBlockstateProvider);
}

declare module "com.tterrag.registrate.util.nullness.NonNullFunction" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $NonNullFunction$$Type<T = any, R = any> = ($NonNullFunction<T, R> | ((arg0: T) => R));
}

declare module "com.tterrag.registrate.builders.Builder" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $Builder$$Type<R = any, T extends R = R, P = any, S extends $Builder<R, T, P, S> = $Builder<R, T, P, S>> = ($Builder<R, T, P, S>);
}

