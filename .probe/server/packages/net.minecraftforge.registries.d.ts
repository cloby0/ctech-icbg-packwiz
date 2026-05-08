declare module "net.minecraftforge.registries.RegistryManager" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $RegistryManager$$Type = ($RegistryManager);
}

declare module "net.minecraftforge.registries.NewRegistryEvent" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $NewRegistryEvent$$Type = ($NewRegistryEvent);
}

declare module "net.minecraftforge.registries.IForgeRegistryInternal" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $IForgeRegistryInternal$$Type<V = any> = ($IForgeRegistryInternal<V>);
}

declare module "net.minecraftforge.registries.IForgeRegistry" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $IForgeRegistry$$Type<V = any> = ($IForgeRegistry<V>);
}

declare module "net.minecraftforge.registries.DataPackRegistryEvent" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $DataPackRegistryEvent$$Type = ($DataPackRegistryEvent);
}

declare module "net.minecraftforge.registries.IForgeRegistry$BakeCallback" {
import { $RegistryManager } from "net.minecraftforge.registries.RegistryManager"
import { $IForgeRegistryInternal } from "net.minecraftforge.registries.IForgeRegistryInternal"

/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $IForgeRegistry$BakeCallback$$Type<V = any> = ($IForgeRegistry$BakeCallback<V> | ((arg0: $IForgeRegistryInternal<V>, arg1: $RegistryManager) => void));
}

declare module "net.minecraftforge.registries.RegisterEvent" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $RegisterEvent$$Type = ($RegisterEvent);
}

declare module "net.minecraftforge.registries.tags.IReverseTag" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $IReverseTag$$Type<V = any> = ($IReverseTag<V>);
}

declare module "net.minecraftforge.registries.MissingMappingsEvent$Mapping" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $MissingMappingsEvent$Mapping$$Type<T = any> = ($MissingMappingsEvent$Mapping<T>);
}

declare module "net.minecraftforge.registries.RegisterEvent$RegisterHelper" {
import { $ResourceLocation } from "net.minecraft.resources.ResourceLocation"

/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $RegisterEvent$RegisterHelper$$Type<T = any> = ($RegisterEvent$RegisterHelper<T> | ((arg0: $ResourceLocation, arg1: T) => void));
}

declare module "net.minecraftforge.registries.IForgeRegistry$AddCallback" {
import { $RegistryManager } from "net.minecraftforge.registries.RegistryManager"
import { $ResourceKey } from "net.minecraft.resources.ResourceKey"
import { $IForgeRegistryInternal } from "net.minecraftforge.registries.IForgeRegistryInternal"

/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $IForgeRegistry$AddCallback$$Type<V = any> = ($IForgeRegistry$AddCallback<V> | ((arg0: $IForgeRegistryInternal<V>, arg1: $RegistryManager, arg2: integer, arg3: $ResourceKey<V>, arg4: V, arg5: V) => void));
}

declare module "net.minecraftforge.registries.ForgeRegistry$Snapshot" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $ForgeRegistry$Snapshot$$Type = ($ForgeRegistry$Snapshot);
}

declare module "net.minecraftforge.registries.tags.ITag" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $ITag$$Type<V = any> = ($ITag<V>);
}

declare module "net.minecraftforge.registries.IdMappingEvent" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $IdMappingEvent$$Type = ($IdMappingEvent);
}

declare module "net.minecraftforge.registries.tags.ITagManager" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $ITagManager$$Type<V = any> = ($ITagManager<V>);
}

declare module "net.minecraftforge.registries.IdMappingEvent$ModRemapping" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $IdMappingEvent$ModRemapping$$Type = ($IdMappingEvent$ModRemapping);
}

declare module "net.minecraftforge.registries.IForgeRegistry$MissingFactory" {
import { $ResourceLocation } from "net.minecraft.resources.ResourceLocation"

/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $IForgeRegistry$MissingFactory$$Type<V = any> = ($IForgeRegistry$MissingFactory<V> | ((arg0: $ResourceLocation, arg1: boolean) => V));
}

declare module "net.minecraftforge.registries.DeferredRegister" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $DeferredRegister$$Type<T = any> = ($DeferredRegister<T>);
}

declare module "net.minecraftforge.registries.IdMappingEvent$IdRemapping" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $IdMappingEvent$IdRemapping$$Type = ($IdMappingEvent$IdRemapping);
}

declare module "net.minecraftforge.registries.IForgeRegistryModifiable" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $IForgeRegistryModifiable$$Type<V = any> = ($IForgeRegistryModifiable<V>);
}

declare module "net.minecraftforge.registries.IForgeRegistry$ValidateCallback" {
import { $ResourceLocation } from "net.minecraft.resources.ResourceLocation"
import { $RegistryManager } from "net.minecraftforge.registries.RegistryManager"
import { $IForgeRegistryInternal } from "net.minecraftforge.registries.IForgeRegistryInternal"

/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $IForgeRegistry$ValidateCallback$$Type<V = any> = ($IForgeRegistry$ValidateCallback<V> | ((arg0: $IForgeRegistryInternal<V>, arg1: $RegistryManager, arg2: integer, arg3: $ResourceLocation, arg4: V) => void));
}

declare module "net.minecraftforge.registries.MissingMappingsEvent" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $MissingMappingsEvent$$Type = ($MissingMappingsEvent);
}

declare module "net.minecraftforge.registries.ForgeRegistry" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $ForgeRegistry$$Type<V = any> = ($ForgeRegistry<V>);
}

declare module "net.minecraftforge.registries.IForgeRegistry$ClearCallback" {
import { $RegistryManager } from "net.minecraftforge.registries.RegistryManager"
import { $IForgeRegistryInternal } from "net.minecraftforge.registries.IForgeRegistryInternal"

/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $IForgeRegistry$ClearCallback$$Type<V = any> = ($IForgeRegistry$ClearCallback<V> | ((arg0: $IForgeRegistryInternal<V>, arg1: $RegistryManager) => void));
}

declare module "net.minecraftforge.registries.RegistryObject" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $RegistryObject$$Type<T = any> = ($RegistryObject<T>);
}

declare module "net.minecraftforge.registries.DataPackRegistryEvent$NewRegistry" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $DataPackRegistryEvent$NewRegistry$$Type = ($DataPackRegistryEvent$NewRegistry);
}

declare module "net.minecraftforge.registries.IForgeRegistry$CreateCallback" {
import { $RegistryManager } from "net.minecraftforge.registries.RegistryManager"
import { $IForgeRegistryInternal } from "net.minecraftforge.registries.IForgeRegistryInternal"

/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $IForgeRegistry$CreateCallback$$Type<V = any> = ($IForgeRegistry$CreateCallback<V> | ((arg0: $IForgeRegistryInternal<V>, arg1: $RegistryManager) => void));
}

declare module "net.minecraftforge.registries.RegistryBuilder" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $RegistryBuilder$$Type<T = any> = ($RegistryBuilder<T>);
}

