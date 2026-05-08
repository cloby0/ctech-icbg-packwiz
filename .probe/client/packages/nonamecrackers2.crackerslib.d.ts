declare module "nonamecrackers2.crackerslib.client.event.impl.OnConfigScreenOpened" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $OnConfigScreenOpened$$Type = ($OnConfigScreenOpened);
}

declare module "nonamecrackers2.crackerslib.client.event.impl.ConfigMenuButtonEvent" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $ConfigMenuButtonEvent$$Type = ($ConfigMenuButtonEvent);
}

declare module "nonamecrackers2.crackerslib.common.event.impl.OnConfigOptionSaved" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $OnConfigOptionSaved$$Type<T = any> = ($OnConfigOptionSaved<T>);
}

declare module "nonamecrackers2.crackerslib.common.config.preset.ConfigPreset" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $ConfigPreset$$Type = ($ConfigPreset);
}

declare module "nonamecrackers2.crackerslib.mixin.MixinGameRendererAccessor" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $MixinGameRendererAccessor$$Type = ($MixinGameRendererAccessor);
}

declare module "nonamecrackers2.crackerslib.client.event.impl.RegisterConfigScreensEvent$Builder" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $RegisterConfigScreensEvent$Builder$$Type = ($RegisterConfigScreensEvent$Builder);
}

declare module "nonamecrackers2.crackerslib.client.gui.ConfigMenuButtons$Factory" {
import { $AbstractButton$$Type } from "net.minecraft.client.gui.components.AbstractButton"
import { $Button$OnPress } from "net.minecraft.client.gui.components.Button$OnPress"

/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $ConfigMenuButtons$Factory$$Type = ($ConfigMenuButtons$Factory | ((arg0: $Button$OnPress) => $AbstractButton$$Type));
}

declare module "nonamecrackers2.crackerslib.common.config.preset.ConfigPreset$Builder" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $ConfigPreset$Builder$$Type = ($ConfigPreset$Builder);
}

declare module "nonamecrackers2.crackerslib.common.event.impl.OnConfigOptionSaved$Source" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $OnConfigOptionSaved$Source$$Type = ($OnConfigOptionSaved$Source | ("config_screen" | "command"));
}

declare module "nonamecrackers2.crackerslib.mixin.MixinBlockEntityType" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $MixinBlockEntityType$$Type = ($MixinBlockEntityType);
}

declare module "nonamecrackers2.crackerslib.client.gui.ConfigHomeScreen$Builder" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $ConfigHomeScreen$Builder$$Type = ($ConfigHomeScreen$Builder);
}

declare module "nonamecrackers2.crackerslib.client.gui.ConfigHomeScreen$Builder$CustomHomeScreen" {
import { $List } from "java.util.List"
import { $AbstractButton } from "net.minecraft.client.gui.components.AbstractButton"
import { $ModConfig$Type } from "net.minecraftforge.fml.config.ModConfig$Type"
import { $Map } from "java.util.Map"
import { $ForgeConfigSpec } from "net.minecraftforge.common.ForgeConfigSpec"
import { $Screen } from "net.minecraft.client.gui.screens.Screen"
import { $TitleLogo } from "nonamecrackers2.crackerslib.client.gui.title.TitleLogo"
import { $Supplier } from "java.util.function.Supplier"
import { $ConfigHomeScreen$$Type } from "nonamecrackers2.crackerslib.client.gui.ConfigHomeScreen"

/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $ConfigHomeScreen$Builder$CustomHomeScreen$$Type = ($ConfigHomeScreen$Builder$CustomHomeScreen | ((arg0: string, arg1: $Map<$ModConfig$Type, $ForgeConfigSpec>, arg2: $TitleLogo, arg3: boolean, arg4: boolean, arg5: $Screen, arg6: $List<$Supplier<$AbstractButton>>, arg7: integer) => $ConfigHomeScreen$$Type));
}

declare module "nonamecrackers2.crackerslib.client.event.impl.AddConfigEntryToMenuEvent" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $AddConfigEntryToMenuEvent$$Type = ($AddConfigEntryToMenuEvent);
}

declare module "nonamecrackers2.crackerslib.client.config.ConfigHomeScreenFactory" {
import { $ModConfig$Type } from "net.minecraftforge.fml.config.ModConfig$Type"
import { $Map } from "java.util.Map"
import { $ForgeConfigSpec } from "net.minecraftforge.common.ForgeConfigSpec"
import { $Screen } from "net.minecraft.client.gui.screens.Screen"
import { $ConfigHomeScreen$$Type } from "nonamecrackers2.crackerslib.client.gui.ConfigHomeScreen"

/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $ConfigHomeScreenFactory$$Type = ($ConfigHomeScreenFactory | ((arg0: string, arg1: $Map<$ModConfig$Type, $ForgeConfigSpec>, arg2: boolean, arg3: boolean, arg4: $Screen) => $ConfigHomeScreen$$Type));
}

declare module "nonamecrackers2.crackerslib.client.event.impl.RegisterConfigScreensEvent" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $RegisterConfigScreensEvent$$Type = ($RegisterConfigScreensEvent);
}

declare module "nonamecrackers2.crackerslib.client.gui.title.TitleLogo" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $TitleLogo$$Type = ($TitleLogo);
}

declare module "nonamecrackers2.crackerslib.client.gui.ConfigHomeScreen" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $ConfigHomeScreen$$Type = ($ConfigHomeScreen);
}

declare module "nonamecrackers2.crackerslib.common.config.preset.RegisterConfigPresetsEvent" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $RegisterConfigPresetsEvent$$Type = ($RegisterConfigPresetsEvent);
}

