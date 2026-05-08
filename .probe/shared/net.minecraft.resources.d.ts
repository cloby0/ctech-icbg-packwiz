declare module "net.minecraft.resources.ResourceLocation" {
import { $Codec } from "com.mojang.serialization.Codec"
import { $ResourceLocationAccess } from "malte0811.ferritecore.mixin.mrl.ResourceLocationAccess"
import { $SpecialEquality } from "dev.latvian.mods.rhino.util.SpecialEquality"
import { $UnaryOperator$$Type } from "java.util.function.UnaryOperator"
import { $Comparable } from "java.lang.Comparable"
import { $StringReader$$Type } from "com.mojang.brigadier.StringReader"
import { $DataResult } from "com.mojang.serialization.DataResult"

export class $ResourceLocation implements $Comparable<$ResourceLocation>, $ResourceLocationAccess, $SpecialEquality {
static readonly "CODEC": $Codec<$ResourceLocation>
static readonly "DEFAULT_NAMESPACE": string
static readonly "NAMESPACE_SEPARATOR": character
static readonly "REALMS_NAMESPACE": string

/** @deprecated */
constructor(string0: string)
/** @deprecated */
constructor(string0: string, string1: string)

public static "bySeparator"(string0: string, char1: character): $ResourceLocation
public static "checkSpecialEquality"(o: any, o1: any, shallow: boolean): boolean
public "compareNamespaced"(resourceLocation0: $ResourceLocation$$Type): integer
public "compareTo"(resourceLocation0: $ResourceLocation$$Type): integer
public static "fromNamespaceAndPath"(string0: string, string1: string): $ResourceLocation
public "getNamespace"(): string
public "getPath"(): string
public static "isAllowedInResourceLocation"(char0: character): boolean
public static "isValidNamespace"(string0: string): boolean
public static "isValidPath"(string0: string): boolean
public static "isValidResourceLocation"(string0: string): boolean
/** @deprecated */
public static "of"(string0: string, char1: character): $ResourceLocation
public static "parse"(string0: string): $ResourceLocation
public static "read"(stringReader0: $StringReader$$Type): $ResourceLocation
public static "read"(string0: string): $DataResult<$ResourceLocation>
public "specialEquals"(o: any, shallow: boolean): boolean
public "toDebugFileName"(): string
public "toLanguageKey"(): string
public "toLanguageKey"(string0: string): string
public "toLanguageKey"(string0: string, string1: string): string
public "toShortLanguageKey"(): string
public static "tryBuild"(string0: string, string1: string): $ResourceLocation
public static "tryBySeparator"(string0: string, char1: character): $ResourceLocation
public static "tryParse"(string0: string): $ResourceLocation
public static "validNamespaceChar"(char0: character): boolean
public static "validPathChar"(char0: character): boolean
public static "withDefaultNamespace"(string0: string): $ResourceLocation
public "withPath"(string0: string): $ResourceLocation
public "withPath"(unaryOperator0: $UnaryOperator$$Type<string>): $ResourceLocation
public "withPrefix"(string0: string): $ResourceLocation
public "withSuffix"(string0: string): $ResourceLocation
get "namespace"(): string
get "path"(): string
}
}

declare module "net.minecraft.resources.RegistryOps$RegistryInfo" {
import { $HolderOwner, $HolderOwner$$Type } from "net.minecraft.core.HolderOwner"
import { $Record } from "java.lang.Record"
import { $Lifecycle, $Lifecycle$$Type } from "com.mojang.serialization.Lifecycle"
import { $HolderGetter, $HolderGetter$$Type } from "net.minecraft.core.HolderGetter"

export class $RegistryOps$RegistryInfo<T = any> extends $Record {
constructor(owner: $HolderOwner$$Type<T>, getter: $HolderGetter$$Type<T>, elementsLifecycle: $Lifecycle$$Type)

public "elementsLifecycle"(): $Lifecycle
public "getter"(): $HolderGetter<T>
public "owner"(): $HolderOwner<T>
get "ter"(): $HolderGetter<T>
}
}

declare module "net.minecraft.resources.ResourceKey" {
import { $ResourceLocation, $ResourceLocation$$Type } from "net.minecraft.resources.ResourceLocation"
import { $Registry } from "net.minecraft.core.Registry"
import { $Codec } from "com.mojang.serialization.Codec"
import { $SpecialEquality } from "dev.latvian.mods.rhino.util.SpecialEquality"
import { $Optional } from "java.util.Optional"
import { $Comparable } from "java.lang.Comparable"

export class $ResourceKey<T = any> implements $Comparable<$ResourceKey<any>>, $SpecialEquality {
constructor(resourceLocation0: $ResourceLocation$$Type, resourceLocation1: $ResourceLocation$$Type)

public "cast"<E>(resourceKey0: $ResourceKey$$Type<$Registry<E>>): $Optional<$ResourceKey<E>>
public static "checkSpecialEquality"(o: any, o1: any, shallow: boolean): boolean
public static "codec"<T>(resourceKey0: $ResourceKey$$Type<$Registry<T>>): $Codec<$ResourceKey<T>>
public "compareTo"(resourceKey0: $ResourceKey$$Type<any>): integer
public static "create"<T>(resourceKey0: $ResourceKey$$Type<$Registry<T>>, resourceLocation1: $ResourceLocation$$Type): $ResourceKey<T>
public static "createRegistryKey"<T>(resourceLocation0: $ResourceLocation$$Type): $ResourceKey<$Registry<T>>
public "getNamespace"(): string
public "getPath"(): string
public "isFor"(resourceKey0: $ResourceKey$$Type<$Registry<any>>): boolean
public "location"(): $ResourceLocation
public "registry"(): $ResourceLocation
public "specialEquals"(o: any, shallow: boolean): boolean
get "namespace"(): string
get "path"(): string
}
}

declare module "net.minecraft.resources.RegistryOps$RegistryInfoLookup" {
import { $Registry } from "net.minecraft.core.Registry"
import { $RegistryOps$RegistryInfo } from "net.minecraft.resources.RegistryOps$RegistryInfo"
import { $Optional } from "java.util.Optional"
import { $ResourceKey$$Type } from "net.minecraft.resources.ResourceKey"

export interface $RegistryOps$RegistryInfoLookup {
"lookup"<T>(resourceKey0: $ResourceKey$$Type<$Registry<T>>): $Optional<$RegistryOps$RegistryInfo<T>>
}

export namespace $RegistryOps$RegistryInfoLookup {
const probejs$$marker: never
}
export abstract class $RegistryOps$RegistryInfoLookup$$Static implements $RegistryOps$RegistryInfoLookup {
}
}

declare module "net.minecraft.resources.FileToIdConverter" {
import { $ResourceLocation, $ResourceLocation$$Type } from "net.minecraft.resources.ResourceLocation"
import { $List } from "java.util.List"
import { $Resource } from "net.minecraft.server.packs.resources.Resource"
import { $Map } from "java.util.Map"
import { $ResourceManager$$Type } from "net.minecraft.server.packs.resources.ResourceManager"

export class $FileToIdConverter {
constructor(string0: string, string1: string)

public "fileToId"(resourceLocation0: $ResourceLocation$$Type): $ResourceLocation
public "idToFile"(resourceLocation0: $ResourceLocation$$Type): $ResourceLocation
public static "json"(string0: string): $FileToIdConverter
public "listMatchingResourceStacks"(resourceManager0: $ResourceManager$$Type): $Map<$ResourceLocation, $List<$Resource>>
public "listMatchingResources"(resourceManager0: $ResourceManager$$Type): $Map<$ResourceLocation, $Resource>
}
}

