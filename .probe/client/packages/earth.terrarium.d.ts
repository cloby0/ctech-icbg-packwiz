declare module "earth.terrarium.adastra.mixins.common.SlotAccessor" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $SlotAccessor$$Type = ($SlotAccessor);
}

declare module "earth.terrarium.adastra.mixins.client.SoundEngineAccessor" {
import { $Map$$Type } from "java.util.Map"
import { $SoundInstance$$Type } from "net.minecraft.client.resources.sounds.SoundInstance"
import { $ChannelAccess$ChannelHandle$$Type } from "net.minecraft.client.sounds.ChannelAccess$ChannelHandle"

/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $SoundEngineAccessor$$Type = ($SoundEngineAccessor | (() => $Map$$Type<$SoundInstance$$Type, $ChannelAccess$ChannelHandle$$Type>));
}

declare module "earth.terrarium.adastra.mixins.client.LevelRendererAccessor" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $LevelRendererAccessor$$Type = ($LevelRendererAccessor);
}

declare module "earth.terrarium.adastra.mixins.common.LivingEntityAccessor" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $LivingEntityAccessor$$Type = ($LivingEntityAccessor | (() => boolean));
}

declare module "earth.terrarium.adastra.mixins.client.SoundManagerAccessor" {
import { $SoundEngine$$Type } from "net.minecraft.client.sounds.SoundEngine"

/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $SoundManagerAccessor$$Type = ($SoundManagerAccessor | (() => $SoundEngine$$Type));
}

declare module "earth.terrarium.adastra.client.screens.base.AbstractContainerScreenExtension" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $AbstractContainerScreenExtension$$Type = ($AbstractContainerScreenExtension);
}

declare module "earth.terrarium.adastra.common.entities.multipart.MultipartPartsHolder" {
import { $Entity$$Type } from "net.minecraft.world.entity.Entity"
import { $Int2ObjectMap$$Type } from "it.unimi.dsi.fastutil.ints.Int2ObjectMap"

/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $MultipartPartsHolder$$Type = ($MultipartPartsHolder | (() => $Int2ObjectMap$$Type<$Entity$$Type>));
}

