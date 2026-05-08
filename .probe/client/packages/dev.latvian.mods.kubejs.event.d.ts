declare module "dev.latvian.mods.kubejs.event.EventResult" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $EventResult$$Type = ($EventResult);
}

declare module "dev.latvian.mods.kubejs.event.IEventHandler" {
import { $EventJS } from "dev.latvian.mods.kubejs.event.EventJS"

/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $IEventHandler$$Type = ($IEventHandler | ((arg0: $EventJS) => any));
}

declare module "dev.latvian.mods.kubejs.event.EventGroupWrapper" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $EventGroupWrapper$$Type = ($EventGroupWrapper);
}

declare module "dev.latvian.mods.kubejs.event.EventExit" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $EventExit$$Type = ($EventExit);
}

declare module "dev.latvian.mods.kubejs.event.EventHandlerContainer" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $EventHandlerContainer$$Type = ($EventHandlerContainer);
}

declare module "dev.latvian.mods.kubejs.event.StartupEventJS" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $StartupEventJS$$Type = ($StartupEventJS);
}

declare module "dev.latvian.mods.kubejs.event.EventExceptionHandler" {
import { $Throwable, $Throwable$$Type } from "java.lang.Throwable"
import { $EventJS } from "dev.latvian.mods.kubejs.event.EventJS"
import { $EventHandlerContainer } from "dev.latvian.mods.kubejs.event.EventHandlerContainer"

/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $EventExceptionHandler$$Type = ($EventExceptionHandler | ((arg0: $EventJS, arg1: $EventHandlerContainer, arg2: $Throwable) => $Throwable$$Type));
}

declare module "dev.latvian.mods.kubejs.event.EventGroup" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $EventGroup$$Type = ($EventGroup);
}

declare module "dev.latvian.mods.kubejs.event.EventJS" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $EventJS$$Type = ($EventJS);
}

declare module "dev.latvian.mods.kubejs.event.EventHandler" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $EventHandler$$Type = ($EventHandler);
}

declare module "dev.latvian.mods.kubejs.event.EventResult$Type" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $EventResult$Type$$Type = ($EventResult$Type | ("error" | "pass" | "interrupt_default" | "interrupt_false" | "interrupt_true"));
}

