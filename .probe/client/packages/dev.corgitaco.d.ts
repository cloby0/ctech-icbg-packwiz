declare module "dev.corgitaco.ohthetreesyoullgrow.world.level.chunk.RandomTickScheduler" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $RandomTickScheduler$$Type = ($RandomTickScheduler);
}

declare module "dev.corgitaco.dataanchor.data.registry.TrackedDataRegistry$TrackedDataFactory" {
import { $TrackedDataKey } from "dev.corgitaco.dataanchor.data.registry.TrackedDataKey"
import { $TrackedData, $TrackedData$$Type } from "dev.corgitaco.dataanchor.data.TrackedData"

/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $TrackedDataRegistry$TrackedDataFactory$$Type<T = any, D extends $TrackedData<T> = $TrackedData<T>> = ($TrackedDataRegistry$TrackedDataFactory<T, D> | ((arg0: $TrackedDataKey<D>, arg1: T) => D));
}

declare module "dev.corgitaco.dataanchor.data.registry.TrackedDataRegistry" {
import { $TrackedData, $TrackedData$$Type } from "dev.corgitaco.dataanchor.data.TrackedData"

/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $TrackedDataRegistry$$Type<O = any, T extends $TrackedData<O> = $TrackedData<O>> = ($TrackedDataRegistry<O, T>);
}

declare module "dev.corgitaco.dataanchor.data.TrackedData" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $TrackedData$$Type<T = any> = ($TrackedData<T> | (() => T));
}

declare module "dev.corgitaco.dataanchor.data.registry.TrackedDataKey" {
import { $TrackedData, $TrackedData$$Type } from "dev.corgitaco.dataanchor.data.TrackedData"

/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $TrackedDataKey$$Type<T extends $TrackedData<any> = $TrackedData<any>> = ($TrackedDataKey<T>);
}

declare module "dev.corgitaco.dataanchor.data.InternalDirtyMarker" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $InternalDirtyMarker$$Type = ($InternalDirtyMarker);
}

declare module "dev.corgitaco.dataanchor.data.TrackedDataContainer" {
import { $TrackedData, $TrackedData$$Type } from "dev.corgitaco.dataanchor.data.TrackedData"

/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $TrackedDataContainer$$Type<O = any, T extends $TrackedData<O> = $TrackedData<O>> = ($TrackedDataContainer<O, T>);
}

