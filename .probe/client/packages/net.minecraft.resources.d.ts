declare module "net.minecraft.resources.ResourceLocation" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $ResourceLocation$$Type = ($ResourceLocation | string);
}

declare module "net.minecraft.resources.RegistryOps$RegistryInfo" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $RegistryOps$RegistryInfo$$Type<T = any> = ($RegistryOps$RegistryInfo<T>);
}

declare module "net.minecraft.resources.ResourceKey" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $ResourceKey$$Type<T = any> = ($ResourceKey<T> | Special.LiteralOf<T>);
}

declare module "net.minecraft.resources.RegistryOps$RegistryInfoLookup" {
import { $Registry } from "net.minecraft.core.Registry"
import { $RegistryOps$RegistryInfo$$Type } from "net.minecraft.resources.RegistryOps$RegistryInfo"
import { $Optional$$Type } from "java.util.Optional"
import { $ResourceKey } from "net.minecraft.resources.ResourceKey"

/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $RegistryOps$RegistryInfoLookup$$Type = ($RegistryOps$RegistryInfoLookup | ((arg0: $ResourceKey<$Registry<T>>) => $Optional$$Type<$RegistryOps$RegistryInfo$$Type<T>>));
}

declare module "net.minecraft.resources.FileToIdConverter" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $FileToIdConverter$$Type = ($FileToIdConverter);
}

