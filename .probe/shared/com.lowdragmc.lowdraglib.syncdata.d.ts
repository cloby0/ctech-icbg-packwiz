declare module "com.lowdragmc.lowdraglib.syncdata.IAutoPersistedSerializable" {
import { $ITagSerializable } from "com.lowdragmc.lowdraglib.syncdata.ITagSerializable"
import { $CompoundTag, $CompoundTag$$Type } from "net.minecraft.nbt.CompoundTag"

export interface $IAutoPersistedSerializable extends $ITagSerializable<$CompoundTag> {
"deserializeNBT"(tag: $CompoundTag$$Type): void
}

export namespace $IAutoPersistedSerializable {
const probejs$$marker: never
}
export abstract class $IAutoPersistedSerializable$$Static implements $IAutoPersistedSerializable {
}
}

declare module "com.lowdragmc.lowdraglib.syncdata.IAccessor" {
import { $AccessorOp$$Type } from "com.lowdragmc.lowdraglib.syncdata.AccessorOp"
import { $Predicate, $Predicate$$Type } from "java.util.function.Predicate"
import { $ITypedPayload, $ITypedPayload$$Type } from "com.lowdragmc.lowdraglib.syncdata.payload.ITypedPayload"
import { $Class, $Class$$Type } from "java.lang.Class"
import { $IManagedVar$$Type } from "com.lowdragmc.lowdraglib.syncdata.managed.IManagedVar"
import { $IRef$$Type } from "com.lowdragmc.lowdraglib.syncdata.managed.IRef"

export interface $IAccessor extends $Predicate<$Class<any>> {
"and"(predicate0: $Predicate$$Type<$Class$$Type<any>>): $Predicate<$Class<any>>
"copyForManaged"(value: any): any
"getDefaultType"(): byte
"hasPredicate"(): boolean
"isManaged"(): boolean
"negate"(): $Predicate<$Class<any>>
"operandTypes"(): $Class<any>[]
"or"(predicate0: $Predicate$$Type<$Class$$Type<any>>): $Predicate<$Class<any>>
"readField"(accessorOp0: $AccessorOp$$Type, iRef1: $IRef$$Type): $ITypedPayload<any>
"readFromReadonlyField"(op: $AccessorOp$$Type, obj: any): $ITypedPayload<any>
"readManagedField"(op: $AccessorOp$$Type, field: $IManagedVar$$Type<any>): $ITypedPayload<any>
"setDefaultType"(byte0: byte): void
"test"(type: $Class$$Type<any>): boolean
"writeField"(accessorOp0: $AccessorOp$$Type, iRef1: $IRef$$Type, iTypedPayload2: $ITypedPayload$$Type<any>): void
"writeManagedField"(op: $AccessorOp$$Type, field: $IManagedVar$$Type<any>, payload: $ITypedPayload$$Type<any>): void
"writeToReadonlyField"(op: $AccessorOp$$Type, obj: any, payload: $ITypedPayload$$Type<any>): void
get "defaultType"(): byte
get "managed"(): boolean
set "defaultType"(value: byte)
}

export namespace $IAccessor {
function isEqual<T>(object0: any): $Predicate<T>
function not<T>(predicate0: $Predicate$$Type<T>): $Predicate<T>
}
export abstract class $IAccessor$$Static implements $IAccessor {
static "isEqual"<T>(object0: any): $Predicate<T>
static "not"<T>(predicate0: $Predicate$$Type<T>): $Predicate<T>
}
}

declare module "com.lowdragmc.lowdraglib.syncdata.IManaged" {
import { $IManagedStorage } from "com.lowdragmc.lowdraglib.syncdata.IManagedStorage"
import { $IFieldUpdateListener$$Type } from "com.lowdragmc.lowdraglib.syncdata.IFieldUpdateListener"
import { $IRef$$Type } from "com.lowdragmc.lowdraglib.syncdata.managed.IRef"
import { $ManagedFieldHolder } from "com.lowdragmc.lowdraglib.syncdata.field.ManagedFieldHolder"
import { $ISubscription } from "com.lowdragmc.lowdraglib.syncdata.ISubscription"

export interface $IManaged {
"addSyncUpdateListener"<T>(name: string, listener: $IFieldUpdateListener$$Type<T>): $ISubscription
"getFieldHolder"(): $ManagedFieldHolder
"getSyncStorage"(): $IManagedStorage
"markDirty"(name: string): void
"onChanged"(): void
"onPersistedChanged"(ref: $IRef$$Type, isDirty: boolean): void
"onSyncChanged"(ref: $IRef$$Type, isDirty: boolean): void
get "fieldHolder"(): $ManagedFieldHolder
get "syncStorage"(): $IManagedStorage
}

export namespace $IManaged {
const probejs$$marker: never
}
export abstract class $IManaged$$Static implements $IManaged {
}
}

declare module "com.lowdragmc.lowdraglib.syncdata.field.RPCMethodMeta" {
import { $ITypedPayload, $ITypedPayload$$Type } from "com.lowdragmc.lowdraglib.syncdata.payload.ITypedPayload"
import { $RPCSender$$Type } from "com.lowdragmc.lowdraglib.syncdata.rpc.RPCSender"
import { $Method$$Type } from "java.lang.reflect.Method"

export class $RPCMethodMeta {
constructor(method: $Method$$Type)

public "getName"(): string
public "invoke"(instance: any, sender: $RPCSender$$Type, payloads: $ITypedPayload$$Type<any>[]): void
public "serializeArgs"(args: any[]): $ITypedPayload<any>[]
get "name"(): string
}
}

declare module "com.lowdragmc.lowdraglib.syncdata.field.ManagedFieldHolder" {
import { $IManaged$$Type } from "com.lowdragmc.lowdraglib.syncdata.IManaged"
import { $Map } from "java.util.Map"
import { $Class$$Type } from "java.lang.Class"
import { $RPCMethodMeta } from "com.lowdragmc.lowdraglib.syncdata.field.RPCMethodMeta"
import { $ManagedKey } from "com.lowdragmc.lowdraglib.syncdata.field.ManagedKey"

export class $ManagedFieldHolder {
constructor(clazz: $Class$$Type<$IManaged$$Type>)
constructor(clazz: $Class$$Type<$IManaged$$Type>, parent: $ManagedFieldHolder$$Type)

public "getFields"(): $ManagedKey[]
public "getRpcMethodMap"(): $Map<string, $RPCMethodMeta>
public "getSyncedFieldIndex"(name: string): $ManagedKey
public "merge"(other: $ManagedFieldHolder$$Type): void
get "fields"(): $ManagedKey[]
get "rpcMethodMap"(): $Map<string, $RPCMethodMeta>
}
}

declare module "com.lowdragmc.lowdraglib.syncdata.blockentity.IManagedBlockEntity" {
import { $IManagedStorage } from "com.lowdragmc.lowdraglib.syncdata.IManagedStorage"
import { $BlockEntityType } from "net.minecraft.world.level.block.entity.BlockEntityType"
import { $BlockPos } from "net.minecraft.core.BlockPos"
import { $IRef } from "com.lowdragmc.lowdraglib.syncdata.managed.IRef"
import { $BlockEntity } from "net.minecraft.world.level.block.entity.BlockEntity"

export interface $IManagedBlockEntity {
"getBlockEntityType"(): $BlockEntityType<any>
"getCurrentPos"(): $BlockPos
"getNonLazyFields"(): $IRef[]
"getRootStorage"(): $IManagedStorage
"getSelf"(): $BlockEntity
get "blockEntityType"(): $BlockEntityType<any>
get "currentPos"(): $BlockPos
get "nonLazyFields"(): $IRef[]
get "rootStorage"(): $IManagedStorage
get "self"(): $BlockEntity
}

export namespace $IManagedBlockEntity {
const probejs$$marker: never
}
export abstract class $IManagedBlockEntity$$Static implements $IManagedBlockEntity {
}
}

declare module "com.lowdragmc.lowdraglib.syncdata.blockentity.IAsyncAutoSyncBlockEntity" {
import { $IManagedStorage } from "com.lowdragmc.lowdraglib.syncdata.IManagedStorage"
import { $CompoundTag$$Type } from "net.minecraft.nbt.CompoundTag"
import { $BlockEntityType } from "net.minecraft.world.level.block.entity.BlockEntityType"
import { $BlockPos } from "net.minecraft.core.BlockPos"
import { $IAsyncLogic } from "com.lowdragmc.lowdraglib.async.IAsyncLogic"
import { $IRef } from "com.lowdragmc.lowdraglib.syncdata.managed.IRef"
import { $BlockEntity } from "net.minecraft.world.level.block.entity.BlockEntity"
import { $IAutoSyncBlockEntity } from "com.lowdragmc.lowdraglib.syncdata.blockentity.IAutoSyncBlockEntity"

export interface $IAsyncAutoSyncBlockEntity extends $IAutoSyncBlockEntity, $IAsyncLogic {
"asyncTick"(periodID: long): void
"defaultServerTick"(): void
"getBlockEntityType"(): $BlockEntityType<any>
"getCurrentPos"(): $BlockPos
"getNonLazyFields"(): $IRef[]
"getRootStorage"(): $IManagedStorage
"getSelf"(): $BlockEntity
"getSyncTag"(): string
"isAsyncSyncing"(): boolean
"onInValid"(): void
"onValid"(): void
"readCustomSyncData"(tag: $CompoundTag$$Type): void
"setAsyncSyncing"(syncing: boolean): void
"syncNow"(force: boolean): void
"useAsyncThread"(): boolean
"writeCustomSyncData"(tag: $CompoundTag$$Type): void
get "blockEntityType"(): $BlockEntityType<any>
get "currentPos"(): $BlockPos
get "nonLazyFields"(): $IRef[]
get "rootStorage"(): $IManagedStorage
get "self"(): $BlockEntity
get "syncTag"(): string
get "asyncSyncing"(): boolean
set "asyncSyncing"(value: boolean)
}

export namespace $IAsyncAutoSyncBlockEntity {
const probejs$$marker: never
}
export abstract class $IAsyncAutoSyncBlockEntity$$Static implements $IAsyncAutoSyncBlockEntity {
}
}

declare module "com.lowdragmc.lowdraglib.syncdata.blockentity.IAutoPersistBlockEntity" {
import { $IManagedStorage } from "com.lowdragmc.lowdraglib.syncdata.IManagedStorage"
import { $CompoundTag$$Type } from "net.minecraft.nbt.CompoundTag"
import { $BlockEntityType } from "net.minecraft.world.level.block.entity.BlockEntityType"
import { $BlockPos } from "net.minecraft.core.BlockPos"
import { $IRef } from "com.lowdragmc.lowdraglib.syncdata.managed.IRef"
import { $BlockEntity } from "net.minecraft.world.level.block.entity.BlockEntity"
import { $IManagedBlockEntity } from "com.lowdragmc.lowdraglib.syncdata.blockentity.IManagedBlockEntity"

export interface $IAutoPersistBlockEntity extends $IManagedBlockEntity {
"getBlockEntityType"(): $BlockEntityType<any>
"getCurrentPos"(): $BlockPos
"getNonLazyFields"(): $IRef[]
"getRootStorage"(): $IManagedStorage
"getSelf"(): $BlockEntity
"loadCustomPersistedData"(tag: $CompoundTag$$Type): void
"loadManagedPersistentData"(tag: $CompoundTag$$Type): void
"saveCustomPersistedData"(tag: $CompoundTag$$Type, forDrop: boolean): void
"saveManagedPersistentData"(tag: $CompoundTag$$Type, forDrop: boolean): void
get "blockEntityType"(): $BlockEntityType<any>
get "currentPos"(): $BlockPos
get "nonLazyFields"(): $IRef[]
get "rootStorage"(): $IManagedStorage
get "self"(): $BlockEntity
}

export namespace $IAutoPersistBlockEntity {
const probejs$$marker: never
}
export abstract class $IAutoPersistBlockEntity$$Static implements $IAutoPersistBlockEntity {
}
}

declare module "com.lowdragmc.lowdraglib.syncdata.ITagSerializable" {
import { $Tag, $Tag$$Type } from "net.minecraft.nbt.Tag"

export interface $ITagSerializable<T extends $Tag = $Tag> {
"deserializeNBT"(t0: T): void
"serializeNBT"(): T
}

export namespace $ITagSerializable {
const probejs$$marker: never
}
export abstract class $ITagSerializable$$Static<T extends $Tag = $Tag> implements $ITagSerializable<T> {
}
}

declare module "com.lowdragmc.lowdraglib.syncdata.IEnhancedManaged" {
import { $IManaged } from "com.lowdragmc.lowdraglib.syncdata.IManaged"
import { $IManagedStorage } from "com.lowdragmc.lowdraglib.syncdata.IManagedStorage"
import { $IFieldUpdateListener$$Type } from "com.lowdragmc.lowdraglib.syncdata.IFieldUpdateListener"
import { $IRef$$Type } from "com.lowdragmc.lowdraglib.syncdata.managed.IRef"
import { $ManagedFieldHolder } from "com.lowdragmc.lowdraglib.syncdata.field.ManagedFieldHolder"
import { $ISubscription } from "com.lowdragmc.lowdraglib.syncdata.ISubscription"

export interface $IEnhancedManaged extends $IManaged {
"addSyncUpdateListener"<T>(name: string, listener: $IFieldUpdateListener$$Type<T>): $ISubscription
"getFieldHolder"(): $ManagedFieldHolder
"getSyncStorage"(): $IManagedStorage
"markDirty"(name: string): void
"onChanged"(): void
"onPersistedChanged"(ref: $IRef$$Type, isDirty: boolean): void
"onSyncChanged"(ref: $IRef$$Type, isDirty: boolean): void
"scheduleRender"(fieldName: string, newValue: any, oldValue: any): void
"scheduleRenderUpdate"(): void
get "fieldHolder"(): $ManagedFieldHolder
get "syncStorage"(): $IManagedStorage
}

export namespace $IEnhancedManaged {
const probejs$$marker: never
}
export abstract class $IEnhancedManaged$$Static implements $IEnhancedManaged {
}
}

declare module "com.lowdragmc.lowdraglib.syncdata.managed.IManagedVar" {
import { $Class } from "java.lang.Class"

export interface $IManagedVar<T = any> {
"getType"(): $Class<T>
"isPrimitive"(): boolean
"set"(t0: T): void
"value"(): T
get "type"(): $Class<T>
get "primitive"(): boolean
}

export namespace $IManagedVar {
const probejs$$marker: never
}
export abstract class $IManagedVar$$Static<T = any> implements $IManagedVar<T> {
}
}

declare module "com.lowdragmc.lowdraglib.syncdata.field.ManagedKey" {
import { $Tag, $Tag$$Type } from "net.minecraft.nbt.Tag"
import { $IAccessor } from "com.lowdragmc.lowdraglib.syncdata.IAccessor"
import { $Type, $Type$$Type } from "java.lang.reflect.Type"
import { $ITypedPayload, $ITypedPayload$$Type } from "com.lowdragmc.lowdraglib.syncdata.payload.ITypedPayload"
import { $IRef, $IRef$$Type } from "com.lowdragmc.lowdraglib.syncdata.managed.IRef"
import { $Field, $Field$$Type } from "java.lang.reflect.Field"
import { $Method, $Method$$Type } from "java.lang.reflect.Method"

export class $ManagedKey {
constructor(name: string, isDestSync: boolean, isPersist: boolean, isDrop: boolean, isLazy: boolean, contentType: $Type$$Type, rawField: $Field$$Type)

public "createRef"(instance: any): $IRef
public "getAccessor"(): $IAccessor
public "getContentType"(): $Type
public "getDeserializeMethod"(): $Method
public "getName"(): string
public "getOnDirtyMethod"(): $Method
public "getPersistentKey"(): string
public "getRawField"(): $Field
public "getSerializeMethod"(): $Method
public "isDestSync"(): boolean
public "isDrop"(): boolean
public "isLazy"(): boolean
public "isPersist"(): boolean
public "isReadOnlyManaged"(): boolean
public "readPersistedField"(field: $IRef$$Type): $Tag
public "readSyncedField"(field: $IRef$$Type, force: boolean): $ITypedPayload<any>
public "setPersistentKey"(persistentKey: string): void
public "setRedOnlyManaged"(onDirtyMethod: $Method$$Type, serializeMethod: $Method$$Type, deserializeMethod: $Method$$Type): void
public "writePersistedField"(field: $IRef$$Type, nbt: $Tag$$Type): void
public "writeSyncedField"(field: $IRef$$Type, payload: $ITypedPayload$$Type<any>): void
get "accessor"(): $IAccessor
get "contentType"(): $Type
get "deserializeMethod"(): $Method
get "name"(): string
get "onDirtyMethod"(): $Method
get "persistentKey"(): string
get "rawField"(): $Field
get "serializeMethod"(): $Method
get "destSync"(): boolean
get "drop"(): boolean
get "lazy"(): boolean
get "persist"(): boolean
get "readOnlyManaged"(): boolean
set "persistentKey"(value: string)
}
}

declare module "com.lowdragmc.lowdraglib.syncdata.IContentChangeAware" {
import { $Runnable, $Runnable$$Type } from "java.lang.Runnable"

export interface $IContentChangeAware {
"getOnContentsChanged"(): $Runnable
"setOnContentsChanged"(runnable0: $Runnable$$Type): void
get "onContentsChanged"(): $Runnable
set "onContentsChanged"(value: $Runnable$$Type)
}

export namespace $IContentChangeAware {
const probejs$$marker: never
}
export abstract class $IContentChangeAware$$Static implements $IContentChangeAware {
}
}

declare module "com.lowdragmc.lowdraglib.syncdata.rpc.RPCSender" {
import { $Player$$Type } from "net.minecraft.world.entity.player.Player"

export interface $RPCSender {
"isServer"(): boolean
get "server"(): boolean
}

export namespace $RPCSender {
function ofClient(player: $Player$$Type): $RPCSender
function ofServer(): $RPCSender
}
export abstract class $RPCSender$$Static implements $RPCSender {
static "ofClient"(player: $Player$$Type): $RPCSender
static "ofServer"(): $RPCSender
}
}

declare module "com.lowdragmc.lowdraglib.syncdata.payload.ITypedPayload" {
import { $Tag, $Tag$$Type } from "net.minecraft.nbt.Tag"
import { $FriendlyByteBuf$$Type } from "net.minecraft.network.FriendlyByteBuf"

export interface $ITypedPayload<T = any> {
"copyForManaged"(value: any): any
"deserializeNBT"(tag0: $Tag$$Type): void
"getPayload"(): T
"getType"(): byte
"isPrimitive"(): boolean
"readPayload"(friendlyByteBuf0: $FriendlyByteBuf$$Type): void
"serializeNBT"(): $Tag
"writePayload"(friendlyByteBuf0: $FriendlyByteBuf$$Type): void
get "payload"(): T
get "type"(): byte
get "primitive"(): boolean
}

export namespace $ITypedPayload {
const probejs$$marker: never
}
export abstract class $ITypedPayload$$Static<T = any> implements $ITypedPayload<T> {
}
}

declare module "com.lowdragmc.lowdraglib.syncdata.blockentity.IAutoSyncBlockEntity" {
import { $IManagedStorage } from "com.lowdragmc.lowdraglib.syncdata.IManagedStorage"
import { $CompoundTag$$Type } from "net.minecraft.nbt.CompoundTag"
import { $BlockEntityType } from "net.minecraft.world.level.block.entity.BlockEntityType"
import { $BlockPos } from "net.minecraft.core.BlockPos"
import { $IRef } from "com.lowdragmc.lowdraglib.syncdata.managed.IRef"
import { $BlockEntity } from "net.minecraft.world.level.block.entity.BlockEntity"
import { $IManagedBlockEntity } from "com.lowdragmc.lowdraglib.syncdata.blockentity.IManagedBlockEntity"

export interface $IAutoSyncBlockEntity extends $IManagedBlockEntity {
"defaultServerTick"(): void
"getBlockEntityType"(): $BlockEntityType<any>
"getCurrentPos"(): $BlockPos
"getNonLazyFields"(): $IRef[]
"getRootStorage"(): $IManagedStorage
"getSelf"(): $BlockEntity
"getSyncTag"(): string
"readCustomSyncData"(tag: $CompoundTag$$Type): void
"syncNow"(force: boolean): void
"writeCustomSyncData"(tag: $CompoundTag$$Type): void
get "blockEntityType"(): $BlockEntityType<any>
get "currentPos"(): $BlockPos
get "nonLazyFields"(): $IRef[]
get "rootStorage"(): $IManagedStorage
get "self"(): $BlockEntity
get "syncTag"(): string
}

export namespace $IAutoSyncBlockEntity {
const probejs$$marker: never
}
export abstract class $IAutoSyncBlockEntity$$Static implements $IAutoSyncBlockEntity {
}
}

declare module "com.lowdragmc.lowdraglib.syncdata.ISubscription" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $ISubscription {
"unsubscribe"(): void
}

export namespace $ISubscription {
const probejs$$marker: never
}
export abstract class $ISubscription$$Static implements $ISubscription {
}
}

declare module "com.lowdragmc.lowdraglib.syncdata.field.FieldManagedStorage" {
import { $IManaged, $IManaged$$Type } from "com.lowdragmc.lowdraglib.syncdata.IManaged"
import { $IManagedStorage } from "com.lowdragmc.lowdraglib.syncdata.IManagedStorage"
import { $IFieldUpdateListener$$Type } from "com.lowdragmc.lowdraglib.syncdata.IFieldUpdateListener"
import { $IRef } from "com.lowdragmc.lowdraglib.syncdata.managed.IRef"
import { $ISubscription } from "com.lowdragmc.lowdraglib.syncdata.ISubscription"
import { $ManagedKey$$Type } from "com.lowdragmc.lowdraglib.syncdata.field.ManagedKey"

export class $FieldManagedStorage implements $IManagedStorage {
constructor(owner: $IManaged$$Type)

public "addSyncUpdateListener"<T>(key: $ManagedKey$$Type, listener: $IFieldUpdateListener$$Type<T>): $ISubscription
public "getFieldByKey"(key: $ManagedKey$$Type): $IRef
public "getManaged"(): $IManaged[]
public "getNonLazyFields"(): $IRef[]
public "getPersistedFields"(): $IRef[]
public "getSyncFields"(): $IRef[]
public "hasDirtyPersistedFields"(): boolean
public "hasDirtySyncFields"(): boolean
public "hasSyncListener"(key: $ManagedKey$$Type): boolean
public "init"(): void
public "initEnhancedFeature"(): void
public "markAllDirty"(): void
public "markDirty"(key: $ManagedKey$$Type): void
public "notifyFieldUpdate"<T>(key: $ManagedKey$$Type, newVal: T, oldVal: T): void
public "removeAllSyncUpdateListener"(key: $ManagedKey$$Type): void
get "managed"(): $IManaged[]
get "nonLazyFields"(): $IRef[]
get "persistedFields"(): $IRef[]
get "syncFields"(): $IRef[]
}
}

declare module "com.lowdragmc.lowdraglib.syncdata.IFieldUpdateListener" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $IFieldUpdateListener<T = any> {
"onFieldChanged"(string0: string, t1: T, t2: T): void
}

export namespace $IFieldUpdateListener {
const probejs$$marker: never
}
export abstract class $IFieldUpdateListener$$Static<T = any> implements $IFieldUpdateListener<T> {
}
}

declare module "com.lowdragmc.lowdraglib.syncdata.managed.IRef" {
import { $BooleanConsumer$$Type } from "it.unimi.dsi.fastutil.booleans.BooleanConsumer"
import { $ManagedKey } from "com.lowdragmc.lowdraglib.syncdata.field.ManagedKey"

export interface $IRef {
"clearPersistedDirty"(): void
"clearSyncDirty"(): void
"getKey"(): $ManagedKey
"getPersistedKey"(): string
"getPersistedPrefixName"(): string
"isLazy"(): boolean
"isPersistedDirty"(): boolean
"isSyncDirty"(): boolean
"markAsDirty"(): void
"readRaw"<T>(): T
"setOnPersistedListener"(booleanConsumer0: $BooleanConsumer$$Type): void
"setOnSyncListener"(booleanConsumer0: $BooleanConsumer$$Type): void
"setPersistedPrefixName"(string0: string): void
"update"(): void
get "key"(): $ManagedKey
get "persistedKey"(): string
get "persistedPrefixName"(): string
get "lazy"(): boolean
get "persistedDirty"(): boolean
get "syncDirty"(): boolean
set "onPersistedListener"(value: $BooleanConsumer$$Type)
set "onSyncListener"(value: $BooleanConsumer$$Type)
set "persistedPrefixName"(value: string)
}

export namespace $IRef {
const probejs$$marker: never
}
export abstract class $IRef$$Static implements $IRef {
}
}

declare module "com.lowdragmc.lowdraglib.syncdata.IManagedStorage" {
import { $IManaged } from "com.lowdragmc.lowdraglib.syncdata.IManaged"
import { $IFieldUpdateListener$$Type } from "com.lowdragmc.lowdraglib.syncdata.IFieldUpdateListener"
import { $IRef } from "com.lowdragmc.lowdraglib.syncdata.managed.IRef"
import { $ISubscription } from "com.lowdragmc.lowdraglib.syncdata.ISubscription"
import { $ManagedKey$$Type } from "com.lowdragmc.lowdraglib.syncdata.field.ManagedKey"

export interface $IManagedStorage {
"addSyncUpdateListener"<T>(managedKey0: $ManagedKey$$Type, iFieldUpdateListener1: $IFieldUpdateListener$$Type<T>): $ISubscription
"getFieldByKey"(managedKey0: $ManagedKey$$Type): $IRef
"getManaged"(): $IManaged[]
"getNonLazyFields"(): $IRef[]
"getPersistedFields"(): $IRef[]
"getSyncFields"(): $IRef[]
"hasDirtyPersistedFields"(): boolean
"hasDirtySyncFields"(): boolean
"hasSyncListener"(managedKey0: $ManagedKey$$Type): boolean
"init"(): void
"markAllDirty"(): void
"markDirty"(key: $ManagedKey$$Type): void
"notifyFieldUpdate"<T>(managedKey0: $ManagedKey$$Type, t1: T, t2: T): void
"removeAllSyncUpdateListener"(managedKey0: $ManagedKey$$Type): void
get "managed"(): $IManaged[]
get "nonLazyFields"(): $IRef[]
get "persistedFields"(): $IRef[]
get "syncFields"(): $IRef[]
}

export namespace $IManagedStorage {
const probejs$$marker: never
}
export abstract class $IManagedStorage$$Static implements $IManagedStorage {
}
}

declare module "com.lowdragmc.lowdraglib.syncdata.AccessorOp" {
import { $Enum } from "java.lang.Enum"

export class $AccessorOp extends $Enum<$AccessorOp> {
static readonly "FORCE_SYNCED": $AccessorOp
static readonly "PERSISTED": $AccessorOp
static readonly "SYNCED": $AccessorOp

public static "valueOf"(name: string): $AccessorOp
public static "values"(): $AccessorOp[]
}
}

declare module "com.lowdragmc.lowdraglib.syncdata.blockentity.IRPCBlockEntity" {
import { $IManaged$$Type } from "com.lowdragmc.lowdraglib.syncdata.IManaged"
import { $IManagedStorage } from "com.lowdragmc.lowdraglib.syncdata.IManagedStorage"
import { $ServerPlayer$$Type } from "net.minecraft.server.level.ServerPlayer"
import { $BlockEntityType } from "net.minecraft.world.level.block.entity.BlockEntityType"
import { $BlockPos } from "net.minecraft.core.BlockPos"
import { $SPacketRPCMethodPayload } from "com.lowdragmc.lowdraglib.networking.s2c.SPacketRPCMethodPayload"
import { $IRef } from "com.lowdragmc.lowdraglib.syncdata.managed.IRef"
import { $RPCMethodMeta } from "com.lowdragmc.lowdraglib.syncdata.field.RPCMethodMeta"
import { $BlockEntity } from "net.minecraft.world.level.block.entity.BlockEntity"
import { $IManagedBlockEntity } from "com.lowdragmc.lowdraglib.syncdata.blockentity.IManagedBlockEntity"

export interface $IRPCBlockEntity extends $IManagedBlockEntity {
"generateRpcPacket"(managed: $IManaged$$Type, methodName: string, ...args: any[]): $SPacketRPCMethodPayload
"getBlockEntityType"(): $BlockEntityType<any>
"getCurrentPos"(): $BlockPos
"getNonLazyFields"(): $IRef[]
"getRPCMethod"(managed: $IManaged$$Type, methodName: string): $RPCMethodMeta
"getRootStorage"(): $IManagedStorage
"getSelf"(): $BlockEntity
"rpcToPlayer"(managed: $IManaged$$Type, player: $ServerPlayer$$Type, methodName: string, ...args: any[]): void
"rpcToTracking"(managed: $IManaged$$Type, methodName: string, ...args: any[]): void
get "blockEntityType"(): $BlockEntityType<any>
get "currentPos"(): $BlockPos
get "nonLazyFields"(): $IRef[]
get "rootStorage"(): $IManagedStorage
get "self"(): $BlockEntity
}

export namespace $IRPCBlockEntity {
const probejs$$marker: never
}
export abstract class $IRPCBlockEntity$$Static implements $IRPCBlockEntity {
}
}

declare module "com.lowdragmc.lowdraglib.syncdata.managed.MultiManagedStorage" {
import { $IManaged } from "com.lowdragmc.lowdraglib.syncdata.IManaged"
import { $IManagedStorage, $IManagedStorage$$Type } from "com.lowdragmc.lowdraglib.syncdata.IManagedStorage"
import { $IFieldUpdateListener$$Type } from "com.lowdragmc.lowdraglib.syncdata.IFieldUpdateListener"
import { $IRef } from "com.lowdragmc.lowdraglib.syncdata.managed.IRef"
import { $ISubscription } from "com.lowdragmc.lowdraglib.syncdata.ISubscription"
import { $ManagedKey$$Type } from "com.lowdragmc.lowdraglib.syncdata.field.ManagedKey"

export class $MultiManagedStorage implements $IManagedStorage {
constructor()

public "addSyncUpdateListener"<T>(key: $ManagedKey$$Type, listener: $IFieldUpdateListener$$Type<T>): $ISubscription
public "attach"(storage: $IManagedStorage$$Type): void
public "clearCache"(): void
public "detach"(storage: $IManagedStorage$$Type): void
public "getFieldByKey"(key: $ManagedKey$$Type): $IRef
public "getManaged"(): $IManaged[]
public "getNonLazyFields"(): $IRef[]
public "getPersistedFields"(): $IRef[]
public "getSyncFields"(): $IRef[]
public "hasDirtyPersistedFields"(): boolean
public "hasDirtySyncFields"(): boolean
public "hasSyncListener"(key: $ManagedKey$$Type): boolean
public "init"(): void
public "markAllDirty"(): void
public "markDirty"(key: $ManagedKey$$Type): void
public "notifyFieldUpdate"<T>(key: $ManagedKey$$Type, newVal: T, oldVal: T): void
public "removeAllSyncUpdateListener"(key: $ManagedKey$$Type): void
get "managed"(): $IManaged[]
get "nonLazyFields"(): $IRef[]
get "persistedFields"(): $IRef[]
get "syncFields"(): $IRef[]
}
}

declare module "com.lowdragmc.lowdraglib.syncdata.IPersistedSerializable" {
import { $ITagSerializable } from "com.lowdragmc.lowdraglib.syncdata.ITagSerializable"
import { $CompoundTag, $CompoundTag$$Type } from "net.minecraft.nbt.CompoundTag"

export interface $IPersistedSerializable extends $ITagSerializable<$CompoundTag> {
"deserializeNBT"(tag: $CompoundTag$$Type): void
}

export namespace $IPersistedSerializable {
const probejs$$marker: never
}
export abstract class $IPersistedSerializable$$Static implements $IPersistedSerializable {
}
}

