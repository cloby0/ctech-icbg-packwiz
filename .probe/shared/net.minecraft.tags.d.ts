declare module "net.minecraft.tags.TagEntry" {
import { $ResourceLocation, $ResourceLocation$$Type } from "net.minecraft.resources.ResourceLocation"
import { $Consumer$$Type } from "java.util.function.Consumer"
import { $Codec } from "com.mojang.serialization.Codec"
import { $Predicate$$Type } from "java.util.function.Predicate"
import { $ExtraCodecs$TagOrElementLocation } from "net.minecraft.util.ExtraCodecs$TagOrElementLocation"
import { $TagEntry$Lookup$$Type } from "net.minecraft.tags.TagEntry$Lookup"

export class $TagEntry {
static "CODEC": $Codec<$TagEntry>
readonly "id": $ResourceLocation
readonly "required": boolean
readonly "tag": boolean

constructor(resourceLocation0: $ResourceLocation$$Type, boolean1: boolean, boolean2: boolean)

public "build"<T>(lookup0: $TagEntry$Lookup$$Type<T>, consumer1: $Consumer$$Type<T>): boolean
public static "element"(resourceLocation0: $ResourceLocation$$Type): $TagEntry
public "elementOrTag"(): $ExtraCodecs$TagOrElementLocation
public "getId"(): $ResourceLocation
public "isRequired"(): boolean
public "isTag"(): boolean
public static "optionalElement"(resourceLocation0: $ResourceLocation$$Type): $TagEntry
public static "optionalTag"(resourceLocation0: $ResourceLocation$$Type): $TagEntry
public static "tag"(resourceLocation0: $ResourceLocation$$Type): $TagEntry
public "verifyIfPresent"(predicate0: $Predicate$$Type<$ResourceLocation$$Type>, predicate1: $Predicate$$Type<$ResourceLocation$$Type>): boolean
public "visitOptionalDependencies"(consumer0: $Consumer$$Type<$ResourceLocation$$Type>): void
public "visitRequiredDependencies"(consumer0: $Consumer$$Type<$ResourceLocation$$Type>): void
}
}

declare module "net.minecraft.tags.TagManager" {
import { $Registry } from "net.minecraft.core.Registry"
import { $List } from "java.util.List"
import { $ProfilerFiller$$Type } from "net.minecraft.util.profiling.ProfilerFiller"
import { $Executor$$Type } from "java.util.concurrent.Executor"
import { $ResourceManager$$Type } from "net.minecraft.server.packs.resources.ResourceManager"
import { $PreparableReloadListener } from "net.minecraft.server.packs.resources.PreparableReloadListener"
import { $CompletableFuture } from "java.util.concurrent.CompletableFuture"
import { $RegistryAccess$$Type } from "net.minecraft.core.RegistryAccess"
import { $TagManager$LoadResult } from "net.minecraft.tags.TagManager$LoadResult"
import { $ResourceKey$$Type } from "net.minecraft.resources.ResourceKey"
import { $PreparableReloadListener$PreparationBarrier$$Type } from "net.minecraft.server.packs.resources.PreparableReloadListener$PreparationBarrier"

export class $TagManager implements $PreparableReloadListener {
constructor(registryAccess0: $RegistryAccess$$Type)

public "getName"(): string
public "getResult"(): $List<$TagManager$LoadResult<any>>
public static "getTagDir"(resourceKey0: $ResourceKey$$Type<$Registry<any>>): string
public "reload"(preparationBarrier0: $PreparableReloadListener$PreparationBarrier$$Type, resourceManager1: $ResourceManager$$Type, profilerFiller2: $ProfilerFiller$$Type, profilerFiller3: $ProfilerFiller$$Type, executor4: $Executor$$Type, executor5: $Executor$$Type): $CompletableFuture<void>
get "name"(): string
get "result"(): $List<$TagManager$LoadResult<any>>
}
}

declare module "net.minecraft.tags.TagManager$LoadResult" {
import { $Registry } from "net.minecraft.core.Registry"
import { $ResourceLocation, $ResourceLocation$$Type } from "net.minecraft.resources.ResourceLocation"
import { $Holder, $Holder$$Type } from "net.minecraft.core.Holder"
import { $Map, $Map$$Type } from "java.util.Map"
import { $Collection, $Collection$$Type } from "java.util.Collection"
import { $Record } from "java.lang.Record"
import { $ResourceKey, $ResourceKey$$Type } from "net.minecraft.resources.ResourceKey"

export class $TagManager$LoadResult<T = any> extends $Record {
constructor(key: $ResourceKey$$Type<$Registry<T>>, tags: $Map$$Type<$ResourceLocation$$Type, $Collection$$Type<$Holder$$Type<T>>>)

public "key"(): $ResourceKey<$Registry<T>>
public "tags"(): $Map<$ResourceLocation, $Collection<$Holder<T>>>
}
}

declare module "net.minecraft.tags.TagNetworkSerialization$NetworkPayload" {
import { $FriendlyByteBuf$$Type } from "net.minecraft.network.FriendlyByteBuf"

export class $TagNetworkSerialization$NetworkPayload {
public "isEmpty"(): boolean
public static "read"(friendlyByteBuf0: $FriendlyByteBuf$$Type): $TagNetworkSerialization$NetworkPayload
public "write"(friendlyByteBuf0: $FriendlyByteBuf$$Type): void
get "empty"(): boolean
}
}

declare module "net.minecraft.tags.TagLoader$EntryWithSource" {
import { $TagEntry, $TagEntry$$Type } from "net.minecraft.tags.TagEntry"
import { $Record } from "java.lang.Record"

export class $TagLoader$EntryWithSource extends $Record {
constructor(tagEntry0: $TagEntry$$Type, string1: string)
constructor(entry: $TagEntry$$Type, source: string, remove: boolean)

public "entry"(): $TagEntry
public "remove"(): boolean
public "source"(): string
}
}

declare module "net.minecraft.tags.TagBuilder" {
import { $ResourceLocation$$Type } from "net.minecraft.resources.ResourceLocation"
import { $JsonObject$$Type } from "com.google.gson.JsonObject"
import { $List } from "java.util.List"
import { $Stream } from "java.util.stream.Stream"
import { $TagEntry, $TagEntry$$Type } from "net.minecraft.tags.TagEntry"
import { $IForgeRawTagBuilder } from "net.minecraftforge.common.extensions.IForgeRawTagBuilder"

export class $TagBuilder implements $IForgeRawTagBuilder {
readonly "entries": $List<$TagEntry>

constructor()

public "add"(tagEntry0: $TagEntry$$Type): $TagBuilder
public "addElement"(resourceLocation0: $ResourceLocation$$Type): $TagBuilder
public "addOptionalElement"(resourceLocation0: $ResourceLocation$$Type): $TagBuilder
public "addOptionalTag"(resourceLocation0: $ResourceLocation$$Type): $TagBuilder
public "addTag"(resourceLocation0: $ResourceLocation$$Type): $TagBuilder
public "build"(): $List<$TagEntry>
public static "create"(): $TagBuilder
public "getRawBuilder"(): $TagBuilder
public "getRemoveEntries"(): $Stream<$TagEntry>
public "isReplace"(): boolean
public "remove"(tagEntry0: $TagEntry$$Type): $TagBuilder
public "remove"(tagEntry0: $TagEntry$$Type, string1: string): $TagBuilder
public "removeElement"(resourceLocation0: $ResourceLocation$$Type, string1: string): $TagBuilder
public "removeTag"(resourceLocation0: $ResourceLocation$$Type, string1: string): $TagBuilder
public "replace"(): $TagBuilder
public "replace"(boolean0: boolean): $TagBuilder
/** @deprecated */
public "serializeTagAdditions"(jsonObject0: $JsonObject$$Type): void
get "rawBuilder"(): $TagBuilder
get "removeEntries"(): $Stream<$TagEntry>
}
}

declare module "net.minecraft.tags.TagKey" {
import { $Registry } from "net.minecraft.core.Registry"
import { $ResourceLocation, $ResourceLocation$$Type } from "net.minecraft.resources.ResourceLocation"
import { $Codec } from "com.mojang.serialization.Codec"
import { $Optional } from "java.util.Optional"
import { $Record } from "java.lang.Record"
import { $ResourceKey, $ResourceKey$$Type } from "net.minecraft.resources.ResourceKey"

export class $TagKey<T = any> extends $Record {
/** @deprecated */
constructor(resourceKey0: $ResourceKey$$Type<$Registry<T>>, resourceLocation1: $ResourceLocation$$Type)

public "cast"<E>(resourceKey0: $ResourceKey$$Type<$Registry<E>>): $Optional<$TagKey<E>>
public static "codec"<T>(resourceKey0: $ResourceKey$$Type<$Registry<T>>): $Codec<$TagKey<T>>
public static "create"<T>(resourceKey0: $ResourceKey$$Type<$Registry<T>>, resourceLocation1: $ResourceLocation$$Type): $TagKey<T>
public static "hashedCodec"<T>(resourceKey0: $ResourceKey$$Type<$Registry<T>>): $Codec<$TagKey<T>>
public "isFor"(resourceKey0: $ResourceKey$$Type<$Registry<any>>): boolean
public "location"(): $ResourceLocation
public "registry"(): $ResourceKey<$Registry<T>>
}
}

declare module "net.minecraft.tags.TagEntry$Lookup" {
import { $ResourceLocation$$Type } from "net.minecraft.resources.ResourceLocation"
import { $Collection } from "java.util.Collection"

export interface $TagEntry$Lookup<T = any> {
"element"(resourceLocation0: $ResourceLocation$$Type): T
"tag"(resourceLocation0: $ResourceLocation$$Type): $Collection<T>
}

export namespace $TagEntry$Lookup {
const probejs$$marker: never
}
export abstract class $TagEntry$Lookup$$Static<T = any> implements $TagEntry$Lookup<T> {
}
}

