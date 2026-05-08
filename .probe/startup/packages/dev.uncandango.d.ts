declare module "dev.uncandango.alltheleaks.mixin.core.accessor.LevelAccessor" {
import { $List$$Type } from "java.util.List"
import { $TickingBlockEntity$$Type } from "net.minecraft.world.level.block.entity.TickingBlockEntity"

/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $LevelAccessor$$Type = ($LevelAccessor | (() => $List$$Type<$TickingBlockEntity$$Type>));
}

declare module "dev.uncandango.alltheleaks.mixin.Trackable" {
import { $Class$$Type } from "java.lang.Class"

/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $Trackable$$Type = ($Trackable | (() => $Class$$Type<any>));
}

declare module "dev.uncandango.alltheleaks.mixin.core.accessor.LevelChunkAccessor" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $LevelChunkAccessor$$Type = ($LevelChunkAccessor | (() => boolean));
}

declare module "dev.uncandango.alltheleaks.mixin.core.accessor.BaseScreenAccessor" {
import { $Screen } from "net.minecraft.client.gui.screens.Screen"

/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $BaseScreenAccessor$$Type = ($BaseScreenAccessor | ((arg0: $Screen) => void));
}

declare module "dev.uncandango.alltheleaks.mixin.UpdateableLevel" {
import { $ClientLevel } from "net.minecraft.client.multiplayer.ClientLevel"

/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $UpdateableLevel$$Type<T = any> = ($UpdateableLevel<T> | ((arg0: $ClientLevel) => void));
}

declare module "dev.uncandango.alltheleaks.mixin.UpdateableLevel$RenderEnginesUpdated" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $UpdateableLevel$RenderEnginesUpdated$$Type = ($UpdateableLevel$RenderEnginesUpdated);
}

declare module "dev.uncandango.alltheleaks.mixin.core.accessor.ConnectionAccessor" {
import { $PacketListener } from "net.minecraft.network.PacketListener"

/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $ConnectionAccessor$$Type = ($ConnectionAccessor | ((arg0: $PacketListener) => void));
}

declare module "dev.uncandango.alltheleaks.mixin.core.accessor.PlayerAdvancementsAccessor" {
import { $ServerPlayer$$Type } from "net.minecraft.server.level.ServerPlayer"

/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $PlayerAdvancementsAccessor$$Type = ($PlayerAdvancementsAccessor | (() => $ServerPlayer$$Type));
}

declare module "dev.uncandango.alltheleaks.plugins.ATLJeiPlugin$RuntimeUnavailableEvent" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $ATLJeiPlugin$RuntimeUnavailableEvent$$Type = ($ATLJeiPlugin$RuntimeUnavailableEvent);
}

declare module "dev.uncandango.alltheleaks.mixin.core.main.IngredientKJSMixin" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $IngredientKJSMixin$$Type = ($IngredientKJSMixin);
}

declare module "dev.uncandango.alltheleaks.mixin.UpdateablePlayer" {
import { $LocalPlayer } from "net.minecraft.client.player.LocalPlayer"

/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $UpdateablePlayer$$Type<T = any> = ($UpdateablePlayer<T> | ((arg0: $LocalPlayer) => void));
}

