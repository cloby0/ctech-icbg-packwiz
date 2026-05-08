declare module "dev.architectury.extensions.injected.InjectedEntityTypeExtension" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $InjectedEntityTypeExtension$$Type = ($InjectedEntityTypeExtension);
}

declare module "dev.architectury.event.Event" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $Event$$Type<T = any> = ($Event<T>);
}

declare module "dev.architectury.registry.menu.MenuRegistry$ScreenFactory" {
import { $Component } from "net.minecraft.network.chat.Component"
import { $AbstractContainerMenu, $AbstractContainerMenu$$Type } from "net.minecraft.world.inventory.AbstractContainerMenu"
import { $Screen, $Screen$$Type } from "net.minecraft.client.gui.screens.Screen"
import { $Inventory } from "net.minecraft.world.entity.player.Inventory"
import { $MenuAccess, $MenuAccess$$Type } from "net.minecraft.client.gui.screens.inventory.MenuAccess"

/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $MenuRegistry$ScreenFactory$$Type<H extends $AbstractContainerMenu = $AbstractContainerMenu, S extends ($Screen & $MenuAccess<H>) = ($Screen & $MenuAccess<H>)> = ($MenuRegistry$ScreenFactory<H, S> | ((arg0: H, arg1: $Inventory, arg2: $Component) => S));
}

declare module "dev.architectury.registry.registries.RegistrySupplier" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $RegistrySupplier$$Type<T = any> = ($RegistrySupplier<T>);
}

declare module "dev.architectury.hooks.level.biome.EffectsProperties" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $EffectsProperties$$Type = ($EffectsProperties);
}

declare module "dev.architectury.utils.value.IntValue" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $IntValue$$Type = ($IntValue);
}

declare module "dev.architectury.event.events.common.CommandPerformEvent" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $CommandPerformEvent$$Type = ($CommandPerformEvent);
}

declare module "dev.architectury.extensions.injected.InjectedGameEventExtension" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $InjectedGameEventExtension$$Type = ($InjectedGameEventExtension);
}

declare module "dev.architectury.extensions.injected.InjectedRegistryEntryExtension" {
import { $Holder$$Type } from "net.minecraft.core.Holder"

/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $InjectedRegistryEntryExtension$$Type<T = any> = ($InjectedRegistryEntryExtension<T> | (() => $Holder$$Type<T>));
}

declare module "dev.architectury.utils.value.Value" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $Value$$Type<T = any> = ($Value<T>);
}

declare module "dev.architectury.utils.OptionalSupplier" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $OptionalSupplier$$Type<T = any> = ($OptionalSupplier<T>);
}

declare module "dev.architectury.extensions.injected.InjectedItemExtension" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $InjectedItemExtension$$Type = ($InjectedItemExtension);
}

declare module "dev.architectury.event.CompoundEventResult" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $CompoundEventResult$$Type<T = any> = ($CompoundEventResult<T>);
}

declare module "dev.architectury.extensions.injected.InjectedBlockExtension" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $InjectedBlockExtension$$Type = ($InjectedBlockExtension);
}

declare module "dev.architectury.extensions.injected.InjectedLiquidBlockExtension" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $InjectedLiquidBlockExtension$$Type = ($InjectedLiquidBlockExtension);
}

declare module "dev.architectury.registry.registries.Registrar" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $Registrar$$Type<T = any> = ($Registrar<T>);
}

declare module "dev.architectury.event.events.client.ClientCommandRegistrationEvent$ClientCommandSourceStack" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $ClientCommandRegistrationEvent$ClientCommandSourceStack$$Type = ($ClientCommandRegistrationEvent$ClientCommandSourceStack);
}

declare module "dev.architectury.event.EventActor" {
import { $EventResult$$Type } from "dev.architectury.event.EventResult"

/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $EventActor$$Type<T = any> = ($EventActor<T> | ((arg0: T) => $EventResult$$Type));
}

declare module "dev.architectury.hooks.level.biome.SpawnProperties" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $SpawnProperties$$Type = ($SpawnProperties);
}

declare module "dev.architectury.registry.level.biome.BiomeModifications$BiomeContext" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $BiomeModifications$BiomeContext$$Type = ($BiomeModifications$BiomeContext);
}

declare module "dev.architectury.event.events.common.ChatEvent$ChatComponent" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $ChatEvent$ChatComponent$$Type = ($ChatEvent$ChatComponent);
}

declare module "dev.architectury.utils.Env" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $Env$$Type = ($Env | ("client" | "server"));
}

declare module "dev.architectury.fluid.FluidStack" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $FluidStack$$Type = ($FluidStack);
}

declare module "dev.architectury.extensions.injected.InjectedItemPropertiesExtension" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $InjectedItemPropertiesExtension$$Type = ($InjectedItemPropertiesExtension);
}

declare module "dev.architectury.core.fluid.ArchitecturyFluidAttributes" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $ArchitecturyFluidAttributes$$Type = ($ArchitecturyFluidAttributes);
}

declare module "dev.architectury.event.EventResult" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $EventResult$$Type = ($EventResult);
}

declare module "dev.architectury.registry.registries.options.RegistrarOption" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $RegistrarOption$$Type = ($RegistrarOption);
}

declare module "dev.architectury.event.forge.EventHandlerImplCommon$LevelEventAttachment" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $EventHandlerImplCommon$LevelEventAttachment$$Type = ($EventHandlerImplCommon$LevelEventAttachment);
}

declare module "dev.architectury.extensions.injected.InjectedBucketItemExtension" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $InjectedBucketItemExtension$$Type = ($InjectedBucketItemExtension);
}

declare module "dev.architectury.hooks.level.biome.GenerationProperties" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $GenerationProperties$$Type = ($GenerationProperties);
}

declare module "dev.architectury.hooks.level.biome.BiomeProperties" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $BiomeProperties$$Type = ($BiomeProperties);
}

declare module "dev.architectury.registry.registries.RegistrarManager" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $RegistrarManager$$Type = ($RegistrarManager);
}

declare module "dev.architectury.registry.registries.DeferredSupplier" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $DeferredSupplier$$Type<T = any> = ($DeferredSupplier<T>);
}

declare module "dev.architectury.impl.ItemPropertiesExtensionImpl" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $ItemPropertiesExtensionImpl$$Type = ($ItemPropertiesExtensionImpl);
}

declare module "dev.architectury.extensions.injected.InjectedFluidExtension" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $InjectedFluidExtension$$Type = ($InjectedFluidExtension);
}

declare module "dev.architectury.hooks.level.biome.ClimateProperties" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $ClimateProperties$$Type = ($ClimateProperties);
}

declare module "dev.architectury.registry.registries.RegistrarBuilder" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $RegistrarBuilder$$Type<T = any> = ($RegistrarBuilder<T>);
}

