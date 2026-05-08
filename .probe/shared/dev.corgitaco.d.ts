declare module "dev.corgitaco.ohthetreesyoullgrow.world.level.chunk.RandomTickScheduler" {
import { $List } from "java.util.List"
import { $BlockPos, $BlockPos$$Type } from "net.minecraft.core.BlockPos"

export interface $RandomTickScheduler {
"getScheduledRandomTicks"(): $List<$BlockPos>
"scheduleRandomTick"(blockPos0: $BlockPos$$Type): void
get "scheduledRandomTicks"(): $List<$BlockPos>
}

export namespace $RandomTickScheduler {
const probejs$$marker: never
}
export abstract class $RandomTickScheduler$$Static implements $RandomTickScheduler {
}
}

declare module "dev.corgitaco.dataanchor.data.registry.TrackedDataRegistry$TrackedDataFactory" {
import { $TrackedDataKey$$Type } from "dev.corgitaco.dataanchor.data.registry.TrackedDataKey"
import { $TrackedData } from "dev.corgitaco.dataanchor.data.TrackedData"

export interface $TrackedDataRegistry$TrackedDataFactory<T = any, D extends $TrackedData<T> = $TrackedData<T>> {
"create"(trackedDataKey0: $TrackedDataKey$$Type<D>, t1: T): D
}

export namespace $TrackedDataRegistry$TrackedDataFactory {
const probejs$$marker: never
}
export abstract class $TrackedDataRegistry$TrackedDataFactory$$Static<T = any, D extends $TrackedData<T> = $TrackedData<T>> implements $TrackedDataRegistry$TrackedDataFactory<T, D> {
}
}

declare module "dev.corgitaco.dataanchor.data.registry.TrackedDataRegistry" {
import { $ResourceLocation, $ResourceLocation$$Type } from "net.minecraft.resources.ResourceLocation"
import { $TrackedDataContainer } from "dev.corgitaco.dataanchor.data.TrackedDataContainer"
import { $Map } from "java.util.Map"
import { $Optional } from "java.util.Optional"
import { $TrackedDataKey, $TrackedDataKey$$Type } from "dev.corgitaco.dataanchor.data.registry.TrackedDataKey"
import { $Class$$Type } from "java.lang.Class"
import { $TrackedDataRegistry$TrackedDataFactory, $TrackedDataRegistry$TrackedDataFactory$$Type } from "dev.corgitaco.dataanchor.data.registry.TrackedDataRegistry$TrackedDataFactory"
import { $TrackedData, $TrackedData$$Type } from "dev.corgitaco.dataanchor.data.TrackedData"

export class $TrackedDataRegistry<O = any, T extends $TrackedData<O> = $TrackedData<O>> {
static readonly "REGISTRIES": $Map<$ResourceLocation, $TrackedDataRegistry<any, any>>

public "factories"(): $Map<$TrackedDataKey<T>, $TrackedDataRegistry$TrackedDataFactory<O, T>>
public "get"<E extends T>(key: $TrackedDataKey$$Type<E>, o: O): $Optional<E>
public "getContainer"(o: O): $TrackedDataContainer<O, T>
public static "of"<O, T extends $TrackedData<O>>(id: $ResourceLocation$$Type): $TrackedDataRegistry<O, T>
public "register"<F extends T, K extends $TrackedDataKey<F>>(key: K, factory: $TrackedDataRegistry$TrackedDataFactory$$Type<O, F>): void
public "register"<E extends T>(id: $ResourceLocation$$Type, clazz: $Class$$Type<E>, factory: $TrackedDataRegistry$TrackedDataFactory$$Type<O, E>): $TrackedDataKey<E>
}
}

declare module "dev.corgitaco.dataanchor.data.TrackedData" {
import { $Tag, $Tag$$Type } from "net.minecraft.nbt.Tag"
import { $CompoundTag, $CompoundTag$$Type } from "net.minecraft.nbt.CompoundTag"
import { $Class$$Type } from "java.lang.Class"
import { $Supplier } from "java.util.function.Supplier"

export interface $TrackedData<T = any> extends $Supplier<T> {
"get"(): T
"load"(tag: $CompoundTag$$Type): void
"save"(): $CompoundTag
}

export namespace $TrackedData {
function fromTag<T>(tag: $Tag$$Type, clazz: $Class$$Type<T>): T
function toTag(obj: any): $Tag
function updateExistingFromTag<T>(tag: $Tag$$Type, obj: T): T
}
export abstract class $TrackedData$$Static<T = any> implements $TrackedData<T> {
static "fromTag"<T>(tag: $Tag$$Type, clazz: $Class$$Type<T>): T
static "toTag"(obj: any): $Tag
static "updateExistingFromTag"<T>(tag: $Tag$$Type, obj: T): T
}
}

declare module "dev.corgitaco.dataanchor.data.registry.TrackedDataKey" {
import { $ResourceLocation, $ResourceLocation$$Type } from "net.minecraft.resources.ResourceLocation"
import { $Class$$Type } from "java.lang.Class"
import { $TrackedDataRegistry$$Type } from "dev.corgitaco.dataanchor.data.registry.TrackedDataRegistry"
import { $TrackedData, $TrackedData$$Type } from "dev.corgitaco.dataanchor.data.TrackedData"

export class $TrackedDataKey<T extends $TrackedData<any> = $TrackedData<any>> {
public static "fromID"<E, T extends $TrackedData<E>>(dataRegistry: $TrackedDataRegistry$$Type<E, T>, id: $ResourceLocation$$Type): $TrackedDataKey<T>
public "getId"(): $ResourceLocation
public static "of"<E, T extends $TrackedData<E>, KEY extends $TrackedDataKey<T>>(dataRegistry: $TrackedDataRegistry$$Type<E, T>, clazz: $Class$$Type<T>, id: $ResourceLocation$$Type): KEY
get "id"(): $ResourceLocation
}
}

declare module "dev.corgitaco.dataanchor.data.InternalDirtyMarker" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $InternalDirtyMarker {
"dataAnchor$clearDirty"(): void
"dataAnchor$markDirty"(): void
}

export namespace $InternalDirtyMarker {
const probejs$$marker: never
}
export abstract class $InternalDirtyMarker$$Static implements $InternalDirtyMarker {
}
}

declare module "dev.corgitaco.dataanchor.data.TrackedDataContainer" {
import { $Collection } from "java.util.Collection"
import { $Optional } from "java.util.Optional"
import { $TrackedDataKey, $TrackedDataKey$$Type } from "dev.corgitaco.dataanchor.data.registry.TrackedDataKey"
import { $TrackedDataRegistry$$Type } from "dev.corgitaco.dataanchor.data.registry.TrackedDataRegistry"
import { $TrackedData, $TrackedData$$Type } from "dev.corgitaco.dataanchor.data.TrackedData"

export interface $TrackedDataContainer<O = any, T extends $TrackedData<O> = $TrackedData<O>> {
"dataAnchor$createTrackedData"(): void
"dataAnchor$getTrackedData"<E extends T>(trackedDataKey0: $TrackedDataKey$$Type<E>): $Optional<E>
"dataAnchor$getTrackedDataKeys"(): $Collection<$TrackedDataKey<T>>
}

export namespace $TrackedDataContainer {
function makeBasicContainer<O, T extends $TrackedData<O>>(registry: $TrackedDataRegistry$$Type<O, T>, o: O, isClient: boolean): $TrackedDataContainer<O, T>
function makeBasicContainer<O, T extends $TrackedData<O>>(registry: $TrackedDataRegistry$$Type<O, T>, o: O, isClient: boolean, lazyLoad: boolean): $TrackedDataContainer<O, T>
}
export abstract class $TrackedDataContainer$$Static<O = any, T extends $TrackedData<O> = $TrackedData<O>> implements $TrackedDataContainer<O, T> {
static "makeBasicContainer"<O, T extends $TrackedData<O>>(registry: $TrackedDataRegistry$$Type<O, T>, o: O, isClient: boolean): $TrackedDataContainer<O, T>
static "makeBasicContainer"<O, T extends $TrackedData<O>>(registry: $TrackedDataRegistry$$Type<O, T>, o: O, isClient: boolean, lazyLoad: boolean): $TrackedDataContainer<O, T>
}
}

