declare module "net.minecraft.network.syncher.SynchedEntityData$DataItem" {
import { $EntityDataAccessor, $EntityDataAccessor$$Type } from "net.minecraft.network.syncher.EntityDataAccessor"
import { $SynchedEntityData$DataValue } from "net.minecraft.network.syncher.SynchedEntityData$DataValue"

export class $SynchedEntityData$DataItem<T = any> {
constructor(entityDataAccessor0: $EntityDataAccessor$$Type<T>, t1: T)

public "getAccessor"(): $EntityDataAccessor<T>
public "getValue"(): T
public "isDirty"(): boolean
public "isSetToDefault"(): boolean
public "setDirty"(boolean0: boolean): void
public "setValue"(t0: T): void
public "value"(): $SynchedEntityData$DataValue<T>
get "accessor"(): $EntityDataAccessor<T>
get "dirty"(): boolean
get "setToDefault"(): boolean
set "dirty"(value: boolean)
}
}

declare module "net.minecraft.network.syncher.SynchedEntityData" {
import { $List, $List$$Type } from "java.util.List"
import { $Entity, $Entity$$Type } from "net.minecraft.world.entity.Entity"
import { $SynchedEntityData$DataItem, $SynchedEntityData$DataItem$$Type } from "net.minecraft.network.syncher.SynchedEntityData$DataItem"
import { $Object2IntMap } from "it.unimi.dsi.fastutil.objects.Object2IntMap"
import { $Int2ObjectMap, $Int2ObjectMap$$Type } from "it.unimi.dsi.fastutil.ints.Int2ObjectMap"
import { $Class, $Class$$Type } from "java.lang.Class"
import { $EntityDataAccessor, $EntityDataAccessor$$Type } from "net.minecraft.network.syncher.EntityDataAccessor"
import { $EntityDataSerializer$$Type } from "net.minecraft.network.syncher.EntityDataSerializer"
import { $SynchedEntityData$DataValue, $SynchedEntityData$DataValue$$Type } from "net.minecraft.network.syncher.SynchedEntityData$DataValue"
import { $ReadWriteLock, $ReadWriteLock$$Type } from "java.util.concurrent.locks.ReadWriteLock"

export class $SynchedEntityData {
static readonly "ENTITY_ID_POOL": $Object2IntMap<$Class<$Entity>>

constructor(entity0: $Entity$$Type)

public "assignValues"(list0: $List$$Type<$SynchedEntityData$DataValue$$Type<any>>): void
public "define"<T>(entityDataAccessor0: $EntityDataAccessor$$Type<T>, t1: T): void
public static "defineId"<T>(class0: $Class$$Type<$Entity$$Type>, entityDataSerializer1: $EntityDataSerializer$$Type<T>): $EntityDataAccessor<T>
public "get"<T>(entityDataAccessor0: $EntityDataAccessor$$Type<T>): T
public "getItem"(entityDataAccessor0: $EntityDataAccessor$$Type): $SynchedEntityData$DataItem
public "getNonDefaultValues"(): $List<$SynchedEntityData$DataValue<any>>
public "hasItem"<T>(entityDataAccessor0: $EntityDataAccessor$$Type<T>): boolean
public "isDirty"(): boolean
public "isEmpty"(): boolean
public "packDirty"(): $List<$SynchedEntityData$DataValue<any>>
public "set"<T>(entityDataAccessor0: $EntityDataAccessor$$Type<T>, t1: T, boolean2: boolean): void
public "set"<T>(entityDataAccessor0: $EntityDataAccessor$$Type<T>, t1: T): void
get "itemsById"(): $Int2ObjectMap<$SynchedEntityData$DataItem<any>>
set "itemsById"(value: $Int2ObjectMap$$Type<$SynchedEntityData$DataItem$$Type<any>>)
get "lock"(): $ReadWriteLock
set "lock"(value: $ReadWriteLock$$Type)
get "nonDefaultValues"(): $List<$SynchedEntityData$DataValue<any>>
get "dirty"(): boolean
get "empty"(): boolean
}
}

declare module "net.minecraft.network.syncher.EntityDataSerializer" {
import { $FriendlyByteBuf$Writer$$Type } from "net.minecraft.network.FriendlyByteBuf$Writer"
import { $Enum, $Enum$$Type } from "java.lang.Enum"
import { $IdMap$$Type } from "net.minecraft.core.IdMap"
import { $Optional } from "java.util.Optional"
import { $EntityDataAccessor } from "net.minecraft.network.syncher.EntityDataAccessor"
import { $Class$$Type } from "java.lang.Class"
import { $FriendlyByteBuf$$Type } from "net.minecraft.network.FriendlyByteBuf"
import { $FriendlyByteBuf$Reader$$Type } from "net.minecraft.network.FriendlyByteBuf$Reader"

export interface $EntityDataSerializer<T = any> {
"copy"(t0: T): T
"createAccessor"(int0: integer): $EntityDataAccessor<T>
"read"(friendlyByteBuf0: $FriendlyByteBuf$$Type): T
"write"(friendlyByteBuf0: $FriendlyByteBuf$$Type, t1: T): void
}

export namespace $EntityDataSerializer {
function optional<T>(writer0: $FriendlyByteBuf$Writer$$Type<T>, reader1: $FriendlyByteBuf$Reader$$Type<T>): $EntityDataSerializer<$Optional<T>>
function simple<T>(writer0: $FriendlyByteBuf$Writer$$Type<T>, reader1: $FriendlyByteBuf$Reader$$Type<T>): $EntityDataSerializer<T>
function simpleEnum<T extends $Enum<T>>(class0: $Class$$Type<T>): $EntityDataSerializer<T>
function simpleId<T>(idMap0: $IdMap$$Type<T>): $EntityDataSerializer<T>
}
export abstract class $EntityDataSerializer$$Static<T = any> implements $EntityDataSerializer<T> {
static "optional"<T>(writer0: $FriendlyByteBuf$Writer$$Type<T>, reader1: $FriendlyByteBuf$Reader$$Type<T>): $EntityDataSerializer<$Optional<T>>
static "simple"<T>(writer0: $FriendlyByteBuf$Writer$$Type<T>, reader1: $FriendlyByteBuf$Reader$$Type<T>): $EntityDataSerializer<T>
static "simpleEnum"<T extends $Enum<T>>(class0: $Class$$Type<T>): $EntityDataSerializer<T>
static "simpleId"<T>(idMap0: $IdMap$$Type<T>): $EntityDataSerializer<T>
}
}

declare module "net.minecraft.network.syncher.EntityDataAccessor" {
import { $EntityDataSerializer, $EntityDataSerializer$$Type } from "net.minecraft.network.syncher.EntityDataSerializer"

export class $EntityDataAccessor<T = any> {
constructor(int0: integer, entityDataSerializer1: $EntityDataSerializer$$Type<T>)

public "getId"(): integer
public "getSerializer"(): $EntityDataSerializer<T>
get "id"(): integer
set "id"(value: integer)
get "serializer"(): $EntityDataSerializer<T>
}
}

declare module "net.minecraft.network.syncher.SynchedEntityData$DataValue" {
import { $EntityDataSerializer, $EntityDataSerializer$$Type } from "net.minecraft.network.syncher.EntityDataSerializer"
import { $EntityDataAccessor$$Type } from "net.minecraft.network.syncher.EntityDataAccessor"
import { $Record } from "java.lang.Record"
import { $FriendlyByteBuf$$Type } from "net.minecraft.network.FriendlyByteBuf"

export class $SynchedEntityData$DataValue<T = any> extends $Record {
constructor(id: integer, serializer: $EntityDataSerializer$$Type<T>, value: T)

public static "create"<T>(entityDataAccessor0: $EntityDataAccessor$$Type<T>, t1: T): $SynchedEntityData$DataValue<T>
public "id"(): integer
public static "read"(friendlyByteBuf0: $FriendlyByteBuf$$Type, int1: integer): $SynchedEntityData$DataValue<any>
public "serializer"(): $EntityDataSerializer<T>
public "value"(): T
public "write"(friendlyByteBuf0: $FriendlyByteBuf$$Type): void
}
}

