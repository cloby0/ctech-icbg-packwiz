declare module "net.minecraftforge.server.permission.nodes.PermissionDynamicContext" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $PermissionDynamicContext$$Type<T = any> = ($PermissionDynamicContext<T>);
}

declare module "net.minecraftforge.server.permission.events.PermissionGatherEvent" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $PermissionGatherEvent$$Type = ($PermissionGatherEvent);
}

declare module "net.minecraftforge.server.permission.nodes.PermissionNode" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $PermissionNode$$Type<T = any> = ($PermissionNode<T>);
}

declare module "net.minecraftforge.server.permission.events.PermissionGatherEvent$Nodes" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $PermissionGatherEvent$Nodes$$Type = ($PermissionGatherEvent$Nodes);
}

declare module "net.minecraftforge.server.permission.nodes.PermissionNode$PermissionResolver" {
import { $ServerPlayer } from "net.minecraft.server.level.ServerPlayer"
import { $PermissionDynamicContext } from "net.minecraftforge.server.permission.nodes.PermissionDynamicContext"
import { $UUID } from "java.util.UUID"

/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $PermissionNode$PermissionResolver$$Type<T = any> = ($PermissionNode$PermissionResolver<T> | ((arg0: $ServerPlayer, arg1: $UUID, ...arg2: $PermissionDynamicContext<any>[]) => T));
}

declare module "net.minecraftforge.server.permission.handler.IPermissionHandlerFactory" {
import { $Collection } from "java.util.Collection"
import { $IPermissionHandler$$Type } from "net.minecraftforge.server.permission.handler.IPermissionHandler"
import { $PermissionNode } from "net.minecraftforge.server.permission.nodes.PermissionNode"

/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $IPermissionHandlerFactory$$Type = ($IPermissionHandlerFactory | ((arg0: $Collection<$PermissionNode<any>>) => $IPermissionHandler$$Type));
}

declare module "net.minecraftforge.server.permission.handler.IPermissionHandler" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $IPermissionHandler$$Type = ($IPermissionHandler);
}

declare module "net.minecraftforge.server.permission.nodes.PermissionDynamicContextKey" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $PermissionDynamicContextKey$$Type<T = any> = ($PermissionDynamicContextKey<T>);
}

declare module "net.minecraftforge.server.permission.events.PermissionGatherEvent$Handler" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $PermissionGatherEvent$Handler$$Type = ($PermissionGatherEvent$Handler);
}

declare module "net.minecraftforge.server.permission.nodes.PermissionType" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $PermissionType$$Type<T = any> = ($PermissionType<T>);
}

