declare module "com.lowdragmc.lowdraglib.syncdata.IAutoPersistedSerializable" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $IAutoPersistedSerializable$$Type = ($IAutoPersistedSerializable);
}

declare module "com.lowdragmc.lowdraglib.syncdata.IAccessor" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $IAccessor$$Type = ($IAccessor);
}

declare module "com.lowdragmc.lowdraglib.syncdata.IManaged" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $IManaged$$Type = ($IManaged);
}

declare module "com.lowdragmc.lowdraglib.syncdata.field.RPCMethodMeta" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $RPCMethodMeta$$Type = ($RPCMethodMeta);
}

declare module "com.lowdragmc.lowdraglib.syncdata.field.ManagedFieldHolder" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $ManagedFieldHolder$$Type = ($ManagedFieldHolder);
}

declare module "com.lowdragmc.lowdraglib.syncdata.blockentity.IManagedBlockEntity" {
import { $IManagedStorage$$Type } from "com.lowdragmc.lowdraglib.syncdata.IManagedStorage"

/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $IManagedBlockEntity$$Type = ($IManagedBlockEntity | (() => $IManagedStorage$$Type));
}

declare module "com.lowdragmc.lowdraglib.syncdata.blockentity.IAsyncAutoSyncBlockEntity" {
import { $IManagedStorage$$Type } from "com.lowdragmc.lowdraglib.syncdata.IManagedStorage"

/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $IAsyncAutoSyncBlockEntity$$Type = ($IAsyncAutoSyncBlockEntity | (() => $IManagedStorage$$Type));
}

declare module "com.lowdragmc.lowdraglib.syncdata.blockentity.IAutoPersistBlockEntity" {
import { $IManagedStorage$$Type } from "com.lowdragmc.lowdraglib.syncdata.IManagedStorage"

/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $IAutoPersistBlockEntity$$Type = ($IAutoPersistBlockEntity | (() => $IManagedStorage$$Type));
}

declare module "com.lowdragmc.lowdraglib.syncdata.ITagSerializable" {
import { $Tag, $Tag$$Type } from "net.minecraft.nbt.Tag"

/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $ITagSerializable$$Type<T extends $Tag = $Tag> = ($ITagSerializable<T>);
}

declare module "com.lowdragmc.lowdraglib.syncdata.IEnhancedManaged" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $IEnhancedManaged$$Type = ($IEnhancedManaged);
}

declare module "com.lowdragmc.lowdraglib.syncdata.managed.IManagedVar" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $IManagedVar$$Type<T = any> = ($IManagedVar<T>);
}

declare module "com.lowdragmc.lowdraglib.syncdata.field.ManagedKey" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $ManagedKey$$Type = ($ManagedKey);
}

declare module "com.lowdragmc.lowdraglib.syncdata.IContentChangeAware" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $IContentChangeAware$$Type = ($IContentChangeAware);
}

declare module "com.lowdragmc.lowdraglib.syncdata.rpc.RPCSender" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $RPCSender$$Type = ($RPCSender | (() => boolean));
}

declare module "com.lowdragmc.lowdraglib.syncdata.payload.ITypedPayload" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $ITypedPayload$$Type<T = any> = ($ITypedPayload<T>);
}

declare module "com.lowdragmc.lowdraglib.syncdata.blockentity.IAutoSyncBlockEntity" {
import { $IManagedStorage$$Type } from "com.lowdragmc.lowdraglib.syncdata.IManagedStorage"

/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $IAutoSyncBlockEntity$$Type = ($IAutoSyncBlockEntity | (() => $IManagedStorage$$Type));
}

declare module "com.lowdragmc.lowdraglib.syncdata.ISubscription" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $ISubscription$$Type = ($ISubscription | (() => void));
}

declare module "com.lowdragmc.lowdraglib.syncdata.field.FieldManagedStorage" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $FieldManagedStorage$$Type = ($FieldManagedStorage);
}

declare module "com.lowdragmc.lowdraglib.syncdata.IFieldUpdateListener" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $IFieldUpdateListener$$Type<T = any> = ($IFieldUpdateListener<T> | ((arg0: string, arg1: T, arg2: T) => void));
}

declare module "com.lowdragmc.lowdraglib.syncdata.managed.IRef" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $IRef$$Type = ($IRef);
}

declare module "com.lowdragmc.lowdraglib.syncdata.IManagedStorage" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $IManagedStorage$$Type = ($IManagedStorage);
}

declare module "com.lowdragmc.lowdraglib.syncdata.AccessorOp" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $AccessorOp$$Type = ($AccessorOp | ("synced" | "force_synced" | "persisted"));
}

declare module "com.lowdragmc.lowdraglib.syncdata.blockentity.IRPCBlockEntity" {
import { $IManagedStorage$$Type } from "com.lowdragmc.lowdraglib.syncdata.IManagedStorage"

/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $IRPCBlockEntity$$Type = ($IRPCBlockEntity | (() => $IManagedStorage$$Type));
}

declare module "com.lowdragmc.lowdraglib.syncdata.managed.MultiManagedStorage" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $MultiManagedStorage$$Type = ($MultiManagedStorage);
}

declare module "com.lowdragmc.lowdraglib.syncdata.IPersistedSerializable" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $IPersistedSerializable$$Type = ($IPersistedSerializable);
}

