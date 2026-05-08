declare module "net.minecraftforge.registries.RegistryManager" {
import { $ResourceLocation, $ResourceLocation$$Type } from "net.minecraft.resources.ResourceLocation"
import { $Registry } from "net.minecraft.core.Registry"
import { $List } from "java.util.List"
import { $ForgeRegistry } from "net.minecraftforge.registries.ForgeRegistry"
import { $Pair } from "org.apache.commons.lang3.tuple.Pair"
import { $Map } from "java.util.Map"
import { $HandshakeMessages$S2CRegistry } from "net.minecraftforge.network.HandshakeMessages$S2CRegistry"
import { $Set } from "java.util.Set"
import { $IForgeRegistry$$Type } from "net.minecraftforge.registries.IForgeRegistry"
import { $ResourceKey$$Type } from "net.minecraft.resources.ResourceKey"
import { $ForgeRegistry$Snapshot } from "net.minecraftforge.registries.ForgeRegistry$Snapshot"

export class $RegistryManager {
static readonly "ACTIVE": $RegistryManager
static readonly "FROZEN": $RegistryManager
static readonly "VANILLA": $RegistryManager

constructor(string0: string)

public "clean"(): void
public static "generateRegistryPackets"(boolean0: boolean): $List<$Pair<string, $HandshakeMessages$S2CRegistry>>
public "getName"<V>(iForgeRegistry0: $IForgeRegistry$$Type<V>): $ResourceLocation
public "getName"(): string
public "getRegistry"<V>(resourceKey0: $ResourceKey$$Type<$Registry<V>>): $ForgeRegistry<V>
public "getRegistry"<V>(resourceLocation0: $ResourceLocation$$Type, registryManager1: $RegistryManager$$Type): $ForgeRegistry<V>
public "getRegistry"<V>(resourceLocation0: $ResourceLocation$$Type): $ForgeRegistry<V>
public static "getRegistryNamesForSyncToClient"(): $List<$ResourceLocation>
public static "getVanillaRegistryKeys"(): $Set<$ResourceLocation>
public static "postNewRegistryEvent"(): void
public "takeSnapshot"(boolean0: boolean): $Map<$ResourceLocation, $ForgeRegistry$Snapshot>
public "updateLegacyName"<V>(resourceLocation0: $ResourceLocation$$Type): $ResourceLocation
get "name"(): string
}
}

declare module "net.minecraftforge.registries.NewRegistryEvent" {
import { $Consumer$$Type } from "java.util.function.Consumer"
import { $RegistryBuilder$$Type } from "net.minecraftforge.registries.RegistryBuilder"
import { $IModBusEvent } from "net.minecraftforge.fml.event.IModBusEvent"
import { $Event } from "net.minecraftforge.eventbus.api.Event"
import { $Supplier } from "java.util.function.Supplier"
import { $IForgeRegistry, $IForgeRegistry$$Type } from "net.minecraftforge.registries.IForgeRegistry"

export class $NewRegistryEvent extends $Event implements $IModBusEvent {
constructor()

public "create"<V>(registryBuilder0: $RegistryBuilder$$Type<V>): $Supplier<$IForgeRegistry<V>>
public "create"<V>(registryBuilder0: $RegistryBuilder$$Type<V>, consumer1: $Consumer$$Type<$IForgeRegistry$$Type<V>>): $Supplier<$IForgeRegistry<V>>
}
}

declare module "net.minecraftforge.registries.IForgeRegistryInternal" {
import { $ResourceLocation, $ResourceLocation$$Type } from "net.minecraft.resources.ResourceLocation"
import { $Map$Entry } from "java.util.Map$Entry"
import { $Iterator } from "java.util.Iterator"
import { $Collection } from "java.util.Collection"
import { $Set } from "java.util.Set"
import { $ResourceKey, $ResourceKey$$Type } from "net.minecraft.resources.ResourceKey"
import { $IForgeRegistry } from "net.minecraftforge.registries.IForgeRegistry"
import { $ITagManager } from "net.minecraftforge.registries.tags.ITagManager"
import { $Holder$Reference } from "net.minecraft.core.Holder$Reference"
import { $Consumer$$Type } from "java.util.function.Consumer"
import { $Registry } from "net.minecraft.core.Registry"
import { $Codec } from "com.mojang.serialization.Codec"
import { $Holder } from "net.minecraft.core.Holder"
import { $Optional } from "java.util.Optional"
import { $Class$$Type } from "java.lang.Class"
import { $Spliterator } from "java.util.Spliterator"

export interface $IForgeRegistryInternal<V = any> extends $IForgeRegistry<V> {
"containsKey"(resourceLocation0: $ResourceLocation$$Type): boolean
"containsValue"(v0: V): boolean
"forEach"(consumer0: $Consumer$$Type<V>): void
"getCodec"(): $Codec<V>
"getDefaultKey"(): $ResourceLocation
"getDelegate"(v0: V): $Optional<$Holder$Reference<V>>
"getDelegate"(resourceLocation0: $ResourceLocation$$Type): $Optional<$Holder$Reference<V>>
"getDelegate"(resourceKey0: $ResourceKey$$Type<V>): $Optional<$Holder$Reference<V>>
"getDelegateOrThrow"(v0: V): $Holder$Reference<V>
"getDelegateOrThrow"(resourceLocation0: $ResourceLocation$$Type): $Holder$Reference<V>
"getDelegateOrThrow"(resourceKey0: $ResourceKey$$Type<V>): $Holder$Reference<V>
"getEntries"(): $Set<$Map$Entry<$ResourceKey<V>, V>>
"getHolder"(resourceLocation0: $ResourceLocation$$Type): $Optional<$Holder<V>>
"getHolder"(v0: V): $Optional<$Holder<V>>
"getHolder"(resourceKey0: $ResourceKey$$Type<V>): $Optional<$Holder<V>>
"getKey"(v0: V): $ResourceLocation
"getKeys"(): $Set<$ResourceLocation>
"getRegistryKey"(): $ResourceKey<$Registry<V>>
"getRegistryName"(): $ResourceLocation
"getResourceKey"(v0: V): $Optional<$ResourceKey<V>>
"getSlaveMap"<T>(resourceLocation0: $ResourceLocation$$Type, class1: $Class$$Type<T>): T
"getValue"(int0: integer): V
"getValue"(resourceLocation0: $ResourceLocation$$Type): V
"getValues"(): $Collection<V>
"isEmpty"(): boolean
"iterator"(): $Iterator<V>
"register"(int0: integer, resourceLocation1: $ResourceLocation$$Type, v2: V): void
"register"(string0: string, v1: V): void
"register"(resourceLocation0: $ResourceLocation$$Type, v1: V): void
"setSlaveMap"(resourceLocation0: $ResourceLocation$$Type, object1: any): void
"spliterator"(): $Spliterator<V>
"tags"(): $ITagManager<V>
[Symbol.iterator](): IterableIterator<V>;
get "codec"(): $Codec<V>
get "defaultKey"(): $ResourceLocation
get "entries"(): $Set<$Map$Entry<$ResourceKey<V>, V>>
get "keys"(): $Set<$ResourceLocation>
get "registryKey"(): $ResourceKey<$Registry<V>>
get "registryName"(): $ResourceLocation
get "values"(): $Collection<V>
get "empty"(): boolean
}

export namespace $IForgeRegistryInternal {
const probejs$$marker: never
}
export abstract class $IForgeRegistryInternal$$Static<V = any> implements $IForgeRegistryInternal<V> {
}
}

declare module "net.minecraftforge.registries.IForgeRegistry" {
import { $ResourceLocation, $ResourceLocation$$Type } from "net.minecraft.resources.ResourceLocation"
import { $Map$Entry } from "java.util.Map$Entry"
import { $Iterator } from "java.util.Iterator"
import { $Collection } from "java.util.Collection"
import { $Set } from "java.util.Set"
import { $ResourceKey, $ResourceKey$$Type } from "net.minecraft.resources.ResourceKey"
import { $ITagManager } from "net.minecraftforge.registries.tags.ITagManager"
import { $Iterable } from "java.lang.Iterable"
import { $Holder$Reference } from "net.minecraft.core.Holder$Reference"
import { $Consumer$$Type } from "java.util.function.Consumer"
import { $Registry } from "net.minecraft.core.Registry"
import { $Codec } from "com.mojang.serialization.Codec"
import { $Holder } from "net.minecraft.core.Holder"
import { $Optional } from "java.util.Optional"
import { $Class$$Type } from "java.lang.Class"
import { $Spliterator } from "java.util.Spliterator"

export interface $IForgeRegistry<V = any> extends $Iterable<V> {
"containsKey"(resourceLocation0: $ResourceLocation$$Type): boolean
"containsValue"(v0: V): boolean
"forEach"(consumer0: $Consumer$$Type<V>): void
"getCodec"(): $Codec<V>
"getDefaultKey"(): $ResourceLocation
"getDelegate"(v0: V): $Optional<$Holder$Reference<V>>
"getDelegate"(resourceLocation0: $ResourceLocation$$Type): $Optional<$Holder$Reference<V>>
"getDelegate"(resourceKey0: $ResourceKey$$Type<V>): $Optional<$Holder$Reference<V>>
"getDelegateOrThrow"(v0: V): $Holder$Reference<V>
"getDelegateOrThrow"(resourceLocation0: $ResourceLocation$$Type): $Holder$Reference<V>
"getDelegateOrThrow"(resourceKey0: $ResourceKey$$Type<V>): $Holder$Reference<V>
"getEntries"(): $Set<$Map$Entry<$ResourceKey<V>, V>>
"getHolder"(resourceLocation0: $ResourceLocation$$Type): $Optional<$Holder<V>>
"getHolder"(v0: V): $Optional<$Holder<V>>
"getHolder"(resourceKey0: $ResourceKey$$Type<V>): $Optional<$Holder<V>>
"getKey"(v0: V): $ResourceLocation
"getKeys"(): $Set<$ResourceLocation>
"getRegistryKey"(): $ResourceKey<$Registry<V>>
"getRegistryName"(): $ResourceLocation
"getResourceKey"(v0: V): $Optional<$ResourceKey<V>>
"getSlaveMap"<T>(resourceLocation0: $ResourceLocation$$Type, class1: $Class$$Type<T>): T
"getValue"(resourceLocation0: $ResourceLocation$$Type): V
"getValues"(): $Collection<V>
"isEmpty"(): boolean
"iterator"(): $Iterator<V>
"register"(string0: string, v1: V): void
"register"(resourceLocation0: $ResourceLocation$$Type, v1: V): void
"spliterator"(): $Spliterator<V>
"tags"(): $ITagManager<V>
[Symbol.iterator](): IterableIterator<V>;
get "codec"(): $Codec<V>
get "defaultKey"(): $ResourceLocation
get "entries"(): $Set<$Map$Entry<$ResourceKey<V>, V>>
get "keys"(): $Set<$ResourceLocation>
get "registryKey"(): $ResourceKey<$Registry<V>>
get "registryName"(): $ResourceLocation
get "values"(): $Collection<V>
get "empty"(): boolean
}

export namespace $IForgeRegistry {
const probejs$$marker: never
}
export abstract class $IForgeRegistry$$Static<V = any> implements $IForgeRegistry<V> {
}
}

declare module "net.minecraftforge.registries.DataPackRegistryEvent" {
import { $IModBusEvent } from "net.minecraftforge.fml.event.IModBusEvent"
import { $Event } from "net.minecraftforge.eventbus.api.Event"

export class $DataPackRegistryEvent extends $Event implements $IModBusEvent {
constructor()

}
}

declare module "net.minecraftforge.registries.IForgeRegistry$BakeCallback" {
import { $RegistryManager$$Type } from "net.minecraftforge.registries.RegistryManager"
import { $IForgeRegistryInternal$$Type } from "net.minecraftforge.registries.IForgeRegistryInternal"

export interface $IForgeRegistry$BakeCallback<V = any> {
"onBake"(iForgeRegistryInternal0: $IForgeRegistryInternal$$Type<V>, registryManager1: $RegistryManager$$Type): void
}

export namespace $IForgeRegistry$BakeCallback {
const probejs$$marker: never
}
export abstract class $IForgeRegistry$BakeCallback$$Static<V = any> implements $IForgeRegistry$BakeCallback<V> {
}
}

declare module "net.minecraftforge.registries.RegisterEvent" {
import { $Registry } from "net.minecraft.core.Registry"
import { $Consumer$$Type } from "java.util.function.Consumer"
import { $ResourceLocation$$Type } from "net.minecraft.resources.ResourceLocation"
import { $IModBusEvent } from "net.minecraftforge.fml.event.IModBusEvent"
import { $Event } from "net.minecraftforge.eventbus.api.Event"
import { $RegisterEvent$RegisterHelper$$Type } from "net.minecraftforge.registries.RegisterEvent$RegisterHelper"
import { $IForgeRegistry } from "net.minecraftforge.registries.IForgeRegistry"
import { $ResourceKey, $ResourceKey$$Type } from "net.minecraft.resources.ResourceKey"
import { $Supplier$$Type } from "java.util.function.Supplier"

export class $RegisterEvent extends $Event implements $IModBusEvent {
constructor()

public "getForgeRegistry"<T>(): $IForgeRegistry<T>
public "getRegistryKey"(): $ResourceKey<$Registry<any>>
public "getVanillaRegistry"<T>(): $Registry<T>
public "register"<T>(resourceKey0: $ResourceKey$$Type<$Registry<T>>, consumer1: $Consumer$$Type<$RegisterEvent$RegisterHelper$$Type<T>>): void
public "register"<T>(resourceKey0: $ResourceKey$$Type<$Registry<T>>, resourceLocation1: $ResourceLocation$$Type, supplier2: $Supplier$$Type<T>): void
get "forgeRegistry"(): $IForgeRegistry<T>
get "registryKey"(): $ResourceKey<$Registry<any>>
get "vanillaRegistry"(): $Registry<T>
}
}

declare module "net.minecraftforge.registries.tags.IReverseTag" {
import { $TagKey, $TagKey$$Type } from "net.minecraft.tags.TagKey"
import { $ITag$$Type } from "net.minecraftforge.registries.tags.ITag"
import { $Stream } from "java.util.stream.Stream"

export interface $IReverseTag<V = any> {
"containsTag"(tagKey0: $TagKey$$Type<V>): boolean
"containsTag"(iTag0: $ITag$$Type<V>): boolean
"getTagKeys"(): $Stream<$TagKey<V>>
get "tagKeys"(): $Stream<$TagKey<V>>
}

export namespace $IReverseTag {
const probejs$$marker: never
}
export abstract class $IReverseTag$$Static<V = any> implements $IReverseTag<V> {
}
}

declare module "net.minecraftforge.registries.MissingMappingsEvent$Mapping" {
import { $ResourceLocation, $ResourceLocation$$Type } from "net.minecraft.resources.ResourceLocation"
import { $Comparable } from "java.lang.Comparable"
import { $IForgeRegistry, $IForgeRegistry$$Type } from "net.minecraftforge.registries.IForgeRegistry"

export class $MissingMappingsEvent$Mapping<T = any> implements $Comparable<$MissingMappingsEvent$Mapping<T>> {
constructor(iForgeRegistry0: $IForgeRegistry$$Type<T>, iForgeRegistry1: $IForgeRegistry$$Type<T>, resourceLocation2: $ResourceLocation$$Type, int3: integer)

public "compareTo"(mapping0: $MissingMappingsEvent$Mapping$$Type<T>): integer
public "fail"(): void
public "getId"(): integer
public "getKey"(): $ResourceLocation
public "getRegistry"(): $IForgeRegistry<T>
public "ignore"(): void
public "remap"(t0: T): void
public "warn"(): void
get "id"(): integer
get "key"(): $ResourceLocation
get "registry"(): $IForgeRegistry<T>
}
}

declare module "net.minecraftforge.registries.RegisterEvent$RegisterHelper" {
import { $ResourceLocation$$Type } from "net.minecraft.resources.ResourceLocation"
import { $ResourceKey$$Type } from "net.minecraft.resources.ResourceKey"

export interface $RegisterEvent$RegisterHelper<T = any> {
"register"(string0: string, t1: T): void
"register"(resourceKey0: $ResourceKey$$Type<T>, t1: T): void
"register"(resourceLocation0: $ResourceLocation$$Type, t1: T): void
}

export namespace $RegisterEvent$RegisterHelper {
const probejs$$marker: never
}
export abstract class $RegisterEvent$RegisterHelper$$Static<T = any> implements $RegisterEvent$RegisterHelper<T> {
}
}

declare module "net.minecraftforge.registries.IForgeRegistry$AddCallback" {
import { $RegistryManager$$Type } from "net.minecraftforge.registries.RegistryManager"
import { $ResourceKey$$Type } from "net.minecraft.resources.ResourceKey"
import { $IForgeRegistryInternal$$Type } from "net.minecraftforge.registries.IForgeRegistryInternal"

export interface $IForgeRegistry$AddCallback<V = any> {
"onAdd"(iForgeRegistryInternal0: $IForgeRegistryInternal$$Type<V>, registryManager1: $RegistryManager$$Type, int2: integer, resourceKey3: $ResourceKey$$Type<V>, v4: V, v5: V): void
}

export namespace $IForgeRegistry$AddCallback {
const probejs$$marker: never
}
export abstract class $IForgeRegistry$AddCallback$$Static<V = any> implements $IForgeRegistry$AddCallback<V> {
}
}

declare module "net.minecraftforge.registries.ForgeRegistry$Snapshot" {
import { $ResourceLocation } from "net.minecraft.resources.ResourceLocation"
import { $CompoundTag, $CompoundTag$$Type } from "net.minecraft.nbt.CompoundTag"
import { $Object2IntMap } from "it.unimi.dsi.fastutil.objects.Object2IntMap"
import { $Map } from "java.util.Map"
import { $IntSet } from "it.unimi.dsi.fastutil.ints.IntSet"
import { $FriendlyByteBuf, $FriendlyByteBuf$$Type } from "net.minecraft.network.FriendlyByteBuf"

export class $ForgeRegistry$Snapshot {
readonly "aliases": $Map<$ResourceLocation, $ResourceLocation>
readonly "blocked": $IntSet
readonly "ids": $Object2IntMap<$ResourceLocation>
readonly "overrides": $Map<$ResourceLocation, string>

constructor()

public "getPacketData"(): $FriendlyByteBuf
public static "read"(friendlyByteBuf0: $FriendlyByteBuf$$Type): $ForgeRegistry$Snapshot
public static "read"(compoundTag0: $CompoundTag$$Type): $ForgeRegistry$Snapshot
public "write"(): $CompoundTag
get "packetData"(): $FriendlyByteBuf
}
}

declare module "net.minecraftforge.registries.tags.ITag" {
import { $Consumer$$Type } from "java.util.function.Consumer"
import { $TagKey } from "net.minecraft.tags.TagKey"
import { $Stream } from "java.util.stream.Stream"
import { $Iterator } from "java.util.Iterator"
import { $Optional } from "java.util.Optional"
import { $RandomSource$$Type } from "net.minecraft.util.RandomSource"
import { $Spliterator } from "java.util.Spliterator"
import { $Iterable } from "java.lang.Iterable"

export interface $ITag<V = any> extends $Iterable<V> {
"contains"(v0: V): boolean
"forEach"(consumer0: $Consumer$$Type<V>): void
"getKey"(): $TagKey<V>
"getRandomElement"(randomSource0: $RandomSource$$Type): $Optional<V>
"isBound"(): boolean
"isEmpty"(): boolean
"iterator"(): $Iterator<V>
"size"(): integer
"spliterator"(): $Spliterator<V>
"stream"(): $Stream<V>
[Symbol.iterator](): IterableIterator<V>;
get "key"(): $TagKey<V>
get "bound"(): boolean
get "empty"(): boolean
}

export namespace $ITag {
const probejs$$marker: never
}
export abstract class $ITag$$Static<V = any> implements $ITag<V> {
}
}

declare module "net.minecraftforge.registries.IdMappingEvent" {
import { $ResourceLocation, $ResourceLocation$$Type } from "net.minecraft.resources.ResourceLocation"
import { $IdMappingEvent$ModRemapping } from "net.minecraftforge.registries.IdMappingEvent$ModRemapping"
import { $ImmutableSet } from "com.google.common.collect.ImmutableSet"
import { $ImmutableList } from "com.google.common.collect.ImmutableList"
import { $Map$$Type } from "java.util.Map"
import { $Event } from "net.minecraftforge.eventbus.api.Event"
import { $IdMappingEvent$IdRemapping$$Type } from "net.minecraftforge.registries.IdMappingEvent$IdRemapping"

export class $IdMappingEvent extends $Event {
constructor(map0: $Map$$Type<$ResourceLocation$$Type, $Map$$Type<$ResourceLocation$$Type, $IdMappingEvent$IdRemapping$$Type>>, boolean1: boolean)
constructor()

public "getRegistries"(): $ImmutableSet<$ResourceLocation>
public "getRemaps"(resourceLocation0: $ResourceLocation$$Type): $ImmutableList<$IdMappingEvent$ModRemapping>
public "isFrozen"(): boolean
get "registries"(): $ImmutableSet<$ResourceLocation>
get "frozen"(): boolean
}
}

declare module "net.minecraftforge.registries.tags.ITagManager" {
import { $ResourceLocation$$Type } from "net.minecraft.resources.ResourceLocation"
import { $ITag, $ITag$$Type } from "net.minecraftforge.registries.tags.ITag"
import { $Iterator } from "java.util.Iterator"
import { $Set$$Type } from "java.util.Set"
import { $Supplier$$Type } from "java.util.function.Supplier"
import { $Iterable } from "java.lang.Iterable"
import { $TagKey, $TagKey$$Type } from "net.minecraft.tags.TagKey"
import { $Consumer$$Type } from "java.util.function.Consumer"
import { $Stream } from "java.util.stream.Stream"
import { $IReverseTag } from "net.minecraftforge.registries.tags.IReverseTag"
import { $Optional } from "java.util.Optional"
import { $Spliterator } from "java.util.Spliterator"

export interface $ITagManager<V = any> extends $Iterable<$ITag<V>> {
"addOptionalTagDefaults"(tagKey0: $TagKey$$Type<V>, set1: $Set$$Type<$Supplier$$Type<V>>): void
"createOptionalTagKey"(resourceLocation0: $ResourceLocation$$Type, set1: $Set$$Type<$Supplier$$Type<V>>): $TagKey<V>
"createTagKey"(resourceLocation0: $ResourceLocation$$Type): $TagKey<V>
"forEach"(consumer0: $Consumer$$Type<$ITag$$Type<V>>): void
"getReverseTag"(v0: V): $Optional<$IReverseTag<V>>
"getTag"(tagKey0: $TagKey$$Type<V>): $ITag<V>
"getTagNames"(): $Stream<$TagKey<V>>
"isKnownTagName"(tagKey0: $TagKey$$Type<V>): boolean
"iterator"(): $Iterator<$ITag<V>>
"spliterator"(): $Spliterator<$ITag<V>>
"stream"(): $Stream<$ITag<V>>
[Symbol.iterator](): IterableIterator<$ITag<V>>;
get "tagNames"(): $Stream<$TagKey<V>>
}

export namespace $ITagManager {
const probejs$$marker: never
}
export abstract class $ITagManager$$Static<V = any> implements $ITagManager<V> {
}
}

declare module "net.minecraftforge.registries.IdMappingEvent$ModRemapping" {
import { $ResourceLocation } from "net.minecraft.resources.ResourceLocation"

export class $IdMappingEvent$ModRemapping {
readonly "key": $ResourceLocation
readonly "newId": integer
readonly "oldId": integer
readonly "registry": $ResourceLocation

}
}

declare module "net.minecraftforge.registries.IForgeRegistry$MissingFactory" {
import { $ResourceLocation$$Type } from "net.minecraft.resources.ResourceLocation"

export interface $IForgeRegistry$MissingFactory<V = any> {
"createMissing"(resourceLocation0: $ResourceLocation$$Type, boolean1: boolean): V
}

export namespace $IForgeRegistry$MissingFactory {
const probejs$$marker: never
}
export abstract class $IForgeRegistry$MissingFactory$$Static<V = any> implements $IForgeRegistry$MissingFactory<V> {
}
}

declare module "net.minecraftforge.registries.DeferredRegister" {
import { $TagKey, $TagKey$$Type } from "net.minecraft.tags.TagKey"
import { $Registry } from "net.minecraft.core.Registry"
import { $ResourceLocation, $ResourceLocation$$Type } from "net.minecraft.resources.ResourceLocation"
import { $RegistryBuilder } from "net.minecraftforge.registries.RegistryBuilder"
import { $Collection } from "java.util.Collection"
import { $Set$$Type } from "java.util.Set"
import { $Supplier, $Supplier$$Type } from "java.util.function.Supplier"
import { $IForgeRegistry, $IForgeRegistry$$Type } from "net.minecraftforge.registries.IForgeRegistry"
import { $ResourceKey, $ResourceKey$$Type } from "net.minecraft.resources.ResourceKey"
import { $IEventBus$$Type } from "net.minecraftforge.eventbus.api.IEventBus"
import { $RegistryObject } from "net.minecraftforge.registries.RegistryObject"

export class $DeferredRegister<T = any> {
public "addOptionalTagDefaults"(tagKey0: $TagKey$$Type<T>, set1: $Set$$Type<$Supplier$$Type<T>>): void
public static "create"<B>(iForgeRegistry0: $IForgeRegistry$$Type<B>, string1: string): $DeferredRegister<B>
public static "create"<B>(resourceKey0: $ResourceKey$$Type<$Registry<B>>, string1: string): $DeferredRegister<B>
public static "create"<B>(resourceLocation0: $ResourceLocation$$Type, string1: string): $DeferredRegister<B>
public static "createOptional"<B>(resourceKey0: $ResourceKey$$Type<$Registry<B>>, string1: string): $DeferredRegister<B>
public static "createOptional"<B>(resourceLocation0: $ResourceLocation$$Type, string1: string): $DeferredRegister<B>
public "createOptionalTagKey"(resourceLocation0: $ResourceLocation$$Type, set1: $Set$$Type<$Supplier$$Type<T>>): $TagKey<T>
public "createOptionalTagKey"(string0: string, set1: $Set$$Type<$Supplier$$Type<T>>): $TagKey<T>
public "createTagKey"(string0: string): $TagKey<T>
public "createTagKey"(resourceLocation0: $ResourceLocation$$Type): $TagKey<T>
public "getEntries"(): $Collection<$RegistryObject<T>>
public "getRegistryKey"(): $ResourceKey<$Registry<T>>
public "getRegistryName"(): $ResourceLocation
public "makeRegistry"(supplier0: $Supplier$$Type<$RegistryBuilder<T>>): $Supplier<$IForgeRegistry<T>>
public "register"(iEventBus0: $IEventBus$$Type): void
public "register"<I extends T>(string0: string, supplier1: $Supplier$$Type<I>): $RegistryObject<I>
get "entries"(): $Collection<$RegistryObject<T>>
get "registryKey"(): $ResourceKey<$Registry<T>>
get "registryName"(): $ResourceLocation
}
}

declare module "net.minecraftforge.registries.IdMappingEvent$IdRemapping" {
import { $Record } from "java.lang.Record"

export class $IdMappingEvent$IdRemapping extends $Record {
constructor(currId: integer, newId: integer)

public "currId"(): integer
public "newId"(): integer
}
}

declare module "net.minecraftforge.registries.IForgeRegistryModifiable" {
import { $ResourceLocation, $ResourceLocation$$Type } from "net.minecraft.resources.ResourceLocation"
import { $Map$Entry } from "java.util.Map$Entry"
import { $Iterator } from "java.util.Iterator"
import { $Collection } from "java.util.Collection"
import { $Set } from "java.util.Set"
import { $ResourceKey, $ResourceKey$$Type } from "net.minecraft.resources.ResourceKey"
import { $IForgeRegistry } from "net.minecraftforge.registries.IForgeRegistry"
import { $ITagManager } from "net.minecraftforge.registries.tags.ITagManager"
import { $Holder$Reference } from "net.minecraft.core.Holder$Reference"
import { $Consumer$$Type } from "java.util.function.Consumer"
import { $Registry } from "net.minecraft.core.Registry"
import { $Codec } from "com.mojang.serialization.Codec"
import { $Holder } from "net.minecraft.core.Holder"
import { $Optional } from "java.util.Optional"
import { $Class$$Type } from "java.lang.Class"
import { $Spliterator } from "java.util.Spliterator"

export interface $IForgeRegistryModifiable<V = any> extends $IForgeRegistry<V> {
"clear"(): void
"containsKey"(resourceLocation0: $ResourceLocation$$Type): boolean
"containsValue"(v0: V): boolean
"forEach"(consumer0: $Consumer$$Type<V>): void
"getCodec"(): $Codec<V>
"getDefaultKey"(): $ResourceLocation
"getDelegate"(v0: V): $Optional<$Holder$Reference<V>>
"getDelegate"(resourceLocation0: $ResourceLocation$$Type): $Optional<$Holder$Reference<V>>
"getDelegate"(resourceKey0: $ResourceKey$$Type<V>): $Optional<$Holder$Reference<V>>
"getDelegateOrThrow"(v0: V): $Holder$Reference<V>
"getDelegateOrThrow"(resourceLocation0: $ResourceLocation$$Type): $Holder$Reference<V>
"getDelegateOrThrow"(resourceKey0: $ResourceKey$$Type<V>): $Holder$Reference<V>
"getEntries"(): $Set<$Map$Entry<$ResourceKey<V>, V>>
"getHolder"(resourceLocation0: $ResourceLocation$$Type): $Optional<$Holder<V>>
"getHolder"(v0: V): $Optional<$Holder<V>>
"getHolder"(resourceKey0: $ResourceKey$$Type<V>): $Optional<$Holder<V>>
"getKey"(v0: V): $ResourceLocation
"getKeys"(): $Set<$ResourceLocation>
"getRegistryKey"(): $ResourceKey<$Registry<V>>
"getRegistryName"(): $ResourceLocation
"getResourceKey"(v0: V): $Optional<$ResourceKey<V>>
"getSlaveMap"<T>(resourceLocation0: $ResourceLocation$$Type, class1: $Class$$Type<T>): T
"getValue"(resourceLocation0: $ResourceLocation$$Type): V
"getValues"(): $Collection<V>
"isEmpty"(): boolean
"isLocked"(): boolean
"iterator"(): $Iterator<V>
"register"(string0: string, v1: V): void
"register"(resourceLocation0: $ResourceLocation$$Type, v1: V): void
"remove"(resourceLocation0: $ResourceLocation$$Type): V
"spliterator"(): $Spliterator<V>
"tags"(): $ITagManager<V>
[Symbol.iterator](): IterableIterator<V>;
get "codec"(): $Codec<V>
get "defaultKey"(): $ResourceLocation
get "entries"(): $Set<$Map$Entry<$ResourceKey<V>, V>>
get "keys"(): $Set<$ResourceLocation>
get "registryKey"(): $ResourceKey<$Registry<V>>
get "registryName"(): $ResourceLocation
get "values"(): $Collection<V>
get "empty"(): boolean
get "locked"(): boolean
}

export namespace $IForgeRegistryModifiable {
const probejs$$marker: never
}
export abstract class $IForgeRegistryModifiable$$Static<V = any> implements $IForgeRegistryModifiable<V> {
}
}

declare module "net.minecraftforge.registries.IForgeRegistry$ValidateCallback" {
import { $ResourceLocation$$Type } from "net.minecraft.resources.ResourceLocation"
import { $RegistryManager$$Type } from "net.minecraftforge.registries.RegistryManager"
import { $IForgeRegistryInternal$$Type } from "net.minecraftforge.registries.IForgeRegistryInternal"

export interface $IForgeRegistry$ValidateCallback<V = any> {
"onValidate"(iForgeRegistryInternal0: $IForgeRegistryInternal$$Type<V>, registryManager1: $RegistryManager$$Type, int2: integer, resourceLocation3: $ResourceLocation$$Type, v4: V): void
}

export namespace $IForgeRegistry$ValidateCallback {
const probejs$$marker: never
}
export abstract class $IForgeRegistry$ValidateCallback$$Static<V = any> implements $IForgeRegistry$ValidateCallback<V> {
}
}

declare module "net.minecraftforge.registries.MissingMappingsEvent" {
import { $Registry } from "net.minecraft.core.Registry"
import { $MissingMappingsEvent$Mapping, $MissingMappingsEvent$Mapping$$Type } from "net.minecraftforge.registries.MissingMappingsEvent$Mapping"
import { $List } from "java.util.List"
import { $Collection$$Type } from "java.util.Collection"
import { $Event } from "net.minecraftforge.eventbus.api.Event"
import { $ResourceKey, $ResourceKey$$Type } from "net.minecraft.resources.ResourceKey"
import { $IForgeRegistry, $IForgeRegistry$$Type } from "net.minecraftforge.registries.IForgeRegistry"

export class $MissingMappingsEvent extends $Event {
constructor(resourceKey0: $ResourceKey$$Type<$Registry<any>>, iForgeRegistry1: $IForgeRegistry$$Type<any>, collection2: $Collection$$Type<$MissingMappingsEvent$Mapping$$Type<any>>)
constructor()

public "getAllMappings"<T>(resourceKey0: $ResourceKey$$Type<$Registry<T>>): $List<$MissingMappingsEvent$Mapping<T>>
public "getKey"(): $ResourceKey<$Registry<any>>
public "getMappings"<T>(resourceKey0: $ResourceKey$$Type<$Registry<T>>, string1: string): $List<$MissingMappingsEvent$Mapping<T>>
public "getRegistry"(): $IForgeRegistry<any>
get "key"(): $ResourceKey<$Registry<any>>
get "registry"(): $IForgeRegistry<any>
}
}

declare module "net.minecraftforge.registries.ForgeRegistry" {
import { $ResourceLocation, $ResourceLocation$$Type } from "net.minecraft.resources.ResourceLocation"
import { $MissingMappingsEvent } from "net.minecraftforge.registries.MissingMappingsEvent"
import { $ForgeRegistryForgeAccessor } from "fuzs.puzzleslib.mixin.accessor.ForgeRegistryForgeAccessor"
import { $ITagManager } from "net.minecraftforge.registries.tags.ITagManager"
import { $Registry } from "net.minecraft.core.Registry"
import { $Holder } from "net.minecraft.core.Holder"
import { $Map$$Type } from "java.util.Map"
import { $IForgeRegistryModifiable } from "net.minecraftforge.registries.IForgeRegistryModifiable"
import { $IdMappingEvent$IdRemapping$$Type } from "net.minecraftforge.registries.IdMappingEvent$IdRemapping"
import { $Marker } from "org.apache.logging.log4j.Marker"
import { $Map$Entry } from "java.util.Map$Entry"
import { $Iterator } from "java.util.Iterator"
import { $Collection } from "java.util.Collection"
import { $Set } from "java.util.Set"
import { $ResourceKey, $ResourceKey$$Type } from "net.minecraft.resources.ResourceKey"
import { $ForgeRegistry$Snapshot } from "net.minecraftforge.registries.ForgeRegistry$Snapshot"
import { $Holder$Reference } from "net.minecraft.core.Holder$Reference"
import { $IForgeRegistryInternal } from "net.minecraftforge.registries.IForgeRegistryInternal"
import { $Consumer$$Type } from "java.util.function.Consumer"
import { $Codec } from "com.mojang.serialization.Codec"
import { $Object2IntMap$$Type } from "it.unimi.dsi.fastutil.objects.Object2IntMap"
import { $Optional } from "java.util.Optional"
import { $Class$$Type } from "java.lang.Class"
import { $Spliterator } from "java.util.Spliterator"

export class $ForgeRegistry<V = any> implements $IForgeRegistryInternal<V>, $IForgeRegistryModifiable<V>, $ForgeRegistryForgeAccessor {
static readonly "REGISTRIES": $Marker

public "addAlias"(resourceLocation0: $ResourceLocation$$Type, resourceLocation1: $ResourceLocation$$Type): void
public "bake"(): void
public "clear"(): void
public "containsKey"(resourceLocation0: $ResourceLocation$$Type): boolean
public "containsValue"(v0: V): boolean
public "forEach"(consumer0: $Consumer$$Type<V>): void
public "freeze"(): void
public "getCodec"(): $Codec<V>
public "getDefaultKey"(): $ResourceLocation
public "getDelegate"(resourceKey0: $ResourceKey$$Type<V>): $Optional<$Holder$Reference<V>>
public "getDelegate"(resourceLocation0: $ResourceLocation$$Type): $Optional<$Holder$Reference<V>>
public "getDelegate"(v0: V): $Optional<$Holder$Reference<V>>
public "getDelegateOrThrow"(resourceLocation0: $ResourceLocation$$Type): $Holder$Reference
public "getDelegateOrThrow"(resourceKey0: $ResourceKey$$Type): $Holder$Reference
public "getDelegateOrThrow"(object0: any): $Holder$Reference
public "getEntries"(): $Set<$Map$Entry<$ResourceKey<V>, V>>
public "getHolder"(v0: V): $Optional<$Holder<V>>
public "getHolder"(resourceLocation0: $ResourceLocation$$Type): $Optional<$Holder<V>>
public "getHolder"(resourceKey0: $ResourceKey$$Type<V>): $Optional<$Holder<V>>
public "getID"(resourceLocation0: $ResourceLocation$$Type): integer
public "getID"(v0: V): integer
public "getKey"(int0: integer): $ResourceKey<V>
public "getKey"(v0: V): $ResourceLocation
public "getKeys"(): $Set<$ResourceLocation>
public "getMissingEvent"(resourceLocation0: $ResourceLocation$$Type, object2IntMap1: $Object2IntMap$$Type<$ResourceLocation$$Type>): $MissingMappingsEvent
public "getRaw"(resourceLocation0: $ResourceLocation$$Type): V
public "getRegistryKey"(): $ResourceKey<$Registry<V>>
public "getRegistryName"(): $ResourceLocation
public "getResourceKey"(v0: V): $Optional<$ResourceKey<V>>
public "getSlaveMap"<T>(resourceLocation0: $ResourceLocation$$Type, class1: $Class$$Type<T>): T
public "getValue"(resourceLocation0: $ResourceLocation$$Type): V
public "getValue"(int0: integer): V
public "getValues"(): $Collection<V>
public "isEmpty"(): boolean
public "isLocked"(): boolean
public "iterator"(): $Iterator<V>
public "loadIds"(object2IntMap0: $Object2IntMap$$Type<$ResourceLocation$$Type>, map1: $Map$$Type<$ResourceLocation$$Type, string>, object2IntMap2: $Object2IntMap$$Type<$ResourceLocation$$Type>, map3: $Map$$Type<$ResourceLocation$$Type, $IdMappingEvent$IdRemapping$$Type>, forgeRegistry4: $ForgeRegistry$$Type<V>, resourceLocation5: $ResourceLocation$$Type): void
public "makeSnapshot"(): $ForgeRegistry$Snapshot
public "register"(string0: string, v1: V): void
public "register"(resourceLocation0: $ResourceLocation$$Type, v1: V): void
public "register"(int0: integer, resourceLocation1: $ResourceLocation$$Type, v2: V): void
public "remove"(resourceLocation0: $ResourceLocation$$Type): V
public "setSlaveMap"(resourceLocation0: $ResourceLocation$$Type, object1: any): void
public "spliterator"(): $Spliterator<V>
public "tags"(): $ITagManager<V>
public "unfreeze"(): void
[Symbol.iterator](): IterableIterator<V>;
get "codec"(): $Codec<V>
get "defaultKey"(): $ResourceLocation
get "entries"(): $Set<$Map$Entry<$ResourceKey<V>, V>>
get "keys"(): $Set<$ResourceLocation>
get "registryKey"(): $ResourceKey<$Registry<V>>
get "registryName"(): $ResourceLocation
get "values"(): $Collection<V>
get "empty"(): boolean
get "locked"(): boolean
}
}

declare module "net.minecraftforge.registries.IForgeRegistry$ClearCallback" {
import { $RegistryManager$$Type } from "net.minecraftforge.registries.RegistryManager"
import { $IForgeRegistryInternal$$Type } from "net.minecraftforge.registries.IForgeRegistryInternal"

export interface $IForgeRegistry$ClearCallback<V = any> {
"onClear"(iForgeRegistryInternal0: $IForgeRegistryInternal$$Type<V>, registryManager1: $RegistryManager$$Type): void
}

export namespace $IForgeRegistry$ClearCallback {
const probejs$$marker: never
}
export abstract class $IForgeRegistry$ClearCallback$$Static<V = any> implements $IForgeRegistry$ClearCallback<V> {
}
}

declare module "net.minecraftforge.registries.RegistryObject" {
import { $ResourceLocation, $ResourceLocation$$Type } from "net.minecraft.resources.ResourceLocation"
import { $Throwable, $Throwable$$Type } from "java.lang.Throwable"
import { $Predicate$$Type } from "java.util.function.Predicate"
import { $ResourceKey, $ResourceKey$$Type } from "net.minecraft.resources.ResourceKey"
import { $IForgeRegistry$$Type } from "net.minecraftforge.registries.IForgeRegistry"
import { $Function$$Type } from "java.util.function.Function"
import { $Supplier, $Supplier$$Type } from "java.util.function.Supplier"
import { $Registry } from "net.minecraft.core.Registry"
import { $Consumer$$Type } from "java.util.function.Consumer"
import { $Holder } from "net.minecraft.core.Holder"
import { $Stream } from "java.util.stream.Stream"
import { $Optional } from "java.util.Optional"

export class $RegistryObject<T = any> implements $Supplier<T> {
public static "create"<T, U extends T>(resourceLocation0: $ResourceLocation$$Type, resourceLocation1: $ResourceLocation$$Type, string2: string): $RegistryObject<U>
public static "create"<T, U extends T>(resourceLocation0: $ResourceLocation$$Type, resourceKey1: $ResourceKey$$Type<$Registry<T>>, string2: string): $RegistryObject<U>
public static "create"<T, U extends T>(resourceLocation0: $ResourceLocation$$Type, iForgeRegistry1: $IForgeRegistry$$Type<T>): $RegistryObject<U>
public static "createOptional"<T, U extends T>(resourceLocation0: $ResourceLocation$$Type, resourceLocation1: $ResourceLocation$$Type, string2: string): $RegistryObject<U>
public static "createOptional"<T, U extends T>(resourceLocation0: $ResourceLocation$$Type, resourceKey1: $ResourceKey$$Type<$Registry<T>>, string2: string): $RegistryObject<U>
public "filter"(predicate0: $Predicate$$Type<T>): $RegistryObject<T>
public "flatMap"<U>(function0: $Function$$Type<T, $Optional<U>>): $Optional<U>
public "get"(): any
public "getHolder"(): $Optional<$Holder<T>>
public "getId"(): $ResourceLocation
public "getKey"(): $ResourceKey<T>
public "ifPresent"(consumer0: $Consumer$$Type<T>): void
public "isPresent"(): boolean
public "lazyMap"<U>(function0: $Function$$Type<T, U>): $Supplier<U>
public "map"<U>(function0: $Function$$Type<T, U>): $Optional<U>
public "orElse"(t0: T): T
public "orElseGet"(supplier0: $Supplier$$Type<T>): T
public "orElseThrow"<X extends $Throwable>(supplier0: $Supplier$$Type<X>): T
public "stream"(): $Stream<T>
get "holder"(): $Optional<$Holder<T>>
get "id"(): $ResourceLocation
get "key"(): $ResourceKey<T>
get "present"(): boolean
}
}

declare module "net.minecraftforge.registries.DataPackRegistryEvent$NewRegistry" {
import { $Registry } from "net.minecraft.core.Registry"
import { $DataPackRegistryEvent } from "net.minecraftforge.registries.DataPackRegistryEvent"
import { $Codec$$Type } from "com.mojang.serialization.Codec"
import { $ResourceKey$$Type } from "net.minecraft.resources.ResourceKey"

export class $DataPackRegistryEvent$NewRegistry extends $DataPackRegistryEvent {
constructor()

public "dataPackRegistry"<T>(resourceKey0: $ResourceKey$$Type<$Registry<T>>, codec1: $Codec$$Type<T>, codec2: $Codec$$Type<T>): void
public "dataPackRegistry"<T>(resourceKey0: $ResourceKey$$Type<$Registry<T>>, codec1: $Codec$$Type<T>): void
}
}

declare module "net.minecraftforge.registries.IForgeRegistry$CreateCallback" {
import { $RegistryManager$$Type } from "net.minecraftforge.registries.RegistryManager"
import { $IForgeRegistryInternal$$Type } from "net.minecraftforge.registries.IForgeRegistryInternal"

export interface $IForgeRegistry$CreateCallback<V = any> {
"onCreate"(iForgeRegistryInternal0: $IForgeRegistryInternal$$Type<V>, registryManager1: $RegistryManager$$Type): void
}

export namespace $IForgeRegistry$CreateCallback {
const probejs$$marker: never
}
export abstract class $IForgeRegistry$CreateCallback$$Static<V = any> implements $IForgeRegistry$CreateCallback<V> {
}
}

declare module "net.minecraftforge.registries.RegistryBuilder" {
import { $ResourceLocation, $ResourceLocation$$Type } from "net.minecraft.resources.ResourceLocation"
import { $IForgeRegistry$ValidateCallback, $IForgeRegistry$ValidateCallback$$Type } from "net.minecraftforge.registries.IForgeRegistry$ValidateCallback"
import { $IForgeRegistry$BakeCallback, $IForgeRegistry$BakeCallback$$Type } from "net.minecraftforge.registries.IForgeRegistry$BakeCallback"
import { $IForgeRegistry$CreateCallback, $IForgeRegistry$CreateCallback$$Type } from "net.minecraftforge.registries.IForgeRegistry$CreateCallback"
import { $IForgeRegistry$ClearCallback, $IForgeRegistry$ClearCallback$$Type } from "net.minecraftforge.registries.IForgeRegistry$ClearCallback"
import { $Set } from "java.util.Set"
import { $IForgeRegistry$AddCallback, $IForgeRegistry$AddCallback$$Type } from "net.minecraftforge.registries.IForgeRegistry$AddCallback"
import { $IForgeRegistry$MissingFactory, $IForgeRegistry$MissingFactory$$Type } from "net.minecraftforge.registries.IForgeRegistry$MissingFactory"

export class $RegistryBuilder<T = any> {
constructor()

public "add"(validateCallback0: $IForgeRegistry$ValidateCallback$$Type<T>): $RegistryBuilder<T>
public "add"(createCallback0: $IForgeRegistry$CreateCallback$$Type<T>): $RegistryBuilder<T>
public "add"(clearCallback0: $IForgeRegistry$ClearCallback$$Type<T>): $RegistryBuilder<T>
public "add"(addCallback0: $IForgeRegistry$AddCallback$$Type<T>): $RegistryBuilder<T>
public "add"(bakeCallback0: $IForgeRegistry$BakeCallback$$Type<T>): $RegistryBuilder<T>
public "addCallback"(object0: any): $RegistryBuilder<T>
public "allowModification"(): $RegistryBuilder<T>
public "disableOverrides"(): $RegistryBuilder<T>
public "disableSaving"(): $RegistryBuilder<T>
public "disableSync"(): $RegistryBuilder<T>
public "getAdd"(): $IForgeRegistry$AddCallback<T>
public "getAllowModifications"(): boolean
public "getAllowOverrides"(): boolean
public "getBake"(): $IForgeRegistry$BakeCallback<T>
public "getClear"(): $IForgeRegistry$ClearCallback<T>
public "getCreate"(): $IForgeRegistry$CreateCallback<T>
public "getDefault"(): $ResourceLocation
public "getLegacyNames"(): $Set<$ResourceLocation>
public "getMaxId"(): integer
public "getMinId"(): integer
public "getMissingFactory"(): $IForgeRegistry$MissingFactory<T>
public "getSaveToDisc"(): boolean
public "getSync"(): boolean
public "getValidate"(): $IForgeRegistry$ValidateCallback<T>
public "hasTags"(): $RegistryBuilder<T>
public "legacyName"(string0: string): $RegistryBuilder<T>
public "legacyName"(resourceLocation0: $ResourceLocation$$Type): $RegistryBuilder<T>
public "missing"(missingFactory0: $IForgeRegistry$MissingFactory$$Type<T>): $RegistryBuilder<T>
public static "of"<T>(): $RegistryBuilder<T>
public static "of"<T>(resourceLocation0: $ResourceLocation$$Type): $RegistryBuilder<T>
public static "of"<T>(string0: string): $RegistryBuilder<T>
public "onAdd"(addCallback0: $IForgeRegistry$AddCallback$$Type<T>): $RegistryBuilder<T>
public "onBake"(bakeCallback0: $IForgeRegistry$BakeCallback$$Type<T>): $RegistryBuilder<T>
public "onClear"(clearCallback0: $IForgeRegistry$ClearCallback$$Type<T>): $RegistryBuilder<T>
public "onCreate"(createCallback0: $IForgeRegistry$CreateCallback$$Type<T>): $RegistryBuilder<T>
public "onValidate"(validateCallback0: $IForgeRegistry$ValidateCallback$$Type<T>): $RegistryBuilder<T>
public "set"(missingFactory0: $IForgeRegistry$MissingFactory$$Type<T>): $RegistryBuilder<T>
public "setDefaultKey"(resourceLocation0: $ResourceLocation$$Type): $RegistryBuilder<T>
public "setIDRange"(int0: integer, int1: integer): $RegistryBuilder<T>
public "setMaxID"(int0: integer): $RegistryBuilder<T>
public "setName"(resourceLocation0: $ResourceLocation$$Type): $RegistryBuilder<T>
get "allowModifications"(): boolean
get "allowOverrides"(): boolean
get "bake"(): $IForgeRegistry$BakeCallback<T>
get "clear"(): $IForgeRegistry$ClearCallback<T>
get "create"(): $IForgeRegistry$CreateCallback<T>
get "default"(): $ResourceLocation
get "legacyNames"(): $Set<$ResourceLocation>
get "maxId"(): integer
get "minId"(): integer
get "missingFactory"(): $IForgeRegistry$MissingFactory<T>
get "saveToDisc"(): boolean
get "sync"(): boolean
get "validate"(): $IForgeRegistry$ValidateCallback<T>
set "defaultKey"(value: $ResourceLocation$$Type)
set "maxID"(value: integer)
set "name"(value: $ResourceLocation$$Type)
}
}

