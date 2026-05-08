declare module "cpw.mods.jarhandling.SecureJar" {
import { $Manifest } from "java.util.jar.Manifest"
import { $SecureJar$Provider } from "cpw.mods.jarhandling.SecureJar$Provider"
import { $Set } from "java.util.Set"
import { $SecureJar$ModuleDataProvider } from "cpw.mods.jarhandling.SecureJar$ModuleDataProvider"
import { $Supplier$$Type } from "java.util.function.Supplier"
import { $Function$$Type } from "java.util.function.Function"
import { $Attributes } from "java.util.jar.Attributes"
import { $CodeSigner } from "java.security.CodeSigner"
import { $BiPredicate$$Type } from "java.util.function.BiPredicate"
import { $List } from "java.util.List"
import { $JarMetadata } from "cpw.mods.jarhandling.JarMetadata"
import { $Path, $Path$$Type } from "java.nio.file.Path"
import { $SecureJar$Status } from "cpw.mods.jarhandling.SecureJar$Status"

export interface $SecureJar {
"getFileStatus"(string0: string): $SecureJar$Status
"getManifestSigners"(): $CodeSigner[]
"getPackages"(): $Set<string>
"getPath"(string0: string, ...string1s: string[]): $Path
"getPrimaryPath"(): $Path
"getProviders"(): $List<$SecureJar$Provider>
"getRootPath"(): $Path
"getTrustedManifestEntries"(string0: string): $Attributes
"hasSecurityData"(): boolean
"moduleDataProvider"(): $SecureJar$ModuleDataProvider
"name"(): string
"verifyPath"(path0: $Path$$Type): $SecureJar$Status
get "manifestSigners"(): $CodeSigner[]
get "packages"(): $Set<string>
get "primaryPath"(): $Path
get "providers"(): $List<$SecureJar$Provider>
get "rootPath"(): $Path
}

export namespace $SecureJar {
function from(supplier0: $Supplier$$Type<$Manifest>, function1: $Function$$Type<$SecureJar$$Type, $JarMetadata>, ...path2s: $Path$$Type[]): $SecureJar
function from(biPredicate0: $BiPredicate$$Type<string, string>, ...path1s: $Path$$Type[]): $SecureJar
function from(...path0s: $Path$$Type[]): $SecureJar
function from(function0: $Function$$Type<$SecureJar$$Type, $JarMetadata>, biPredicate1: $BiPredicate$$Type<string, string>, ...path2s: $Path$$Type[]): $SecureJar
function from(supplier0: $Supplier$$Type<$Manifest>, function1: $Function$$Type<$SecureJar$$Type, $JarMetadata>, biPredicate2: $BiPredicate$$Type<string, string>, ...path3s: $Path$$Type[]): $SecureJar
function from(function0: $Function$$Type<$SecureJar$$Type, $JarMetadata>, ...path1s: $Path$$Type[]): $SecureJar
}
export abstract class $SecureJar$$Static implements $SecureJar {
static "from"(supplier0: $Supplier$$Type<$Manifest>, function1: $Function$$Type<$SecureJar$$Type, $JarMetadata>, ...path2s: $Path$$Type[]): $SecureJar
static "from"(biPredicate0: $BiPredicate$$Type<string, string>, ...path1s: $Path$$Type[]): $SecureJar
static "from"(...path0s: $Path$$Type[]): $SecureJar
static "from"(function0: $Function$$Type<$SecureJar$$Type, $JarMetadata>, biPredicate1: $BiPredicate$$Type<string, string>, ...path2s: $Path$$Type[]): $SecureJar
static "from"(supplier0: $Supplier$$Type<$Manifest>, function1: $Function$$Type<$SecureJar$$Type, $JarMetadata>, biPredicate2: $BiPredicate$$Type<string, string>, ...path3s: $Path$$Type[]): $SecureJar
static "from"(function0: $Function$$Type<$SecureJar$$Type, $JarMetadata>, ...path1s: $Path$$Type[]): $SecureJar
}
}

declare module "cpw.mods.jarhandling.SecureJar$Provider" {
import { $BiPredicate$$Type } from "java.util.function.BiPredicate"
import { $List, $List$$Type } from "java.util.List"
import { $Record } from "java.lang.Record"
import { $Path$$Type } from "java.nio.file.Path"

export class $SecureJar$Provider extends $Record {
constructor(serviceName: string, providers: $List$$Type<string>)

public static "fromPath"(path0: $Path$$Type, biPredicate1: $BiPredicate$$Type<string, string>): $SecureJar$Provider
public "providers"(): $List<string>
public "serviceName"(): string
}
}

declare module "cpw.mods.jarhandling.JarMetadata" {
import { $SecureJar$$Type } from "cpw.mods.jarhandling.SecureJar"
import { $List, $List$$Type } from "java.util.List"
import { $SimpleJarMetadata } from "cpw.mods.jarhandling.impl.SimpleJarMetadata"
import { $SecureJar$Provider$$Type } from "cpw.mods.jarhandling.SecureJar$Provider"
import { $ModuleDescriptor } from "java.lang.module.ModuleDescriptor"
import { $Set$$Type } from "java.util.Set"
import { $Pattern } from "java.util.regex.Pattern"
import { $Path$$Type } from "java.nio.file.Path"

export interface $JarMetadata {
"descriptor"(): $ModuleDescriptor
"name"(): string
"version"(): string
}

export namespace $JarMetadata {
const DASH_VERSION: $Pattern
const ILLEGAL_KEYWORDS: $List<string>
const KEYWORD_PARTS: $Pattern
const LEADING_DOTS: $Pattern
const MODULE_VERSION: $Pattern
const NON_ALPHANUM: $Pattern
const NUMBERLIKE_PARTS: $Pattern
const REPEATING_DOTS: $Pattern
const TRAILING_DOTS: $Pattern
function from(secureJar0: $SecureJar$$Type, ...path1s: $Path$$Type[]): $JarMetadata
function fromFileName(path0: $Path$$Type, set1: $Set$$Type<string>, list2: $List$$Type<$SecureJar$Provider$$Type>): $SimpleJarMetadata
}
export abstract class $JarMetadata$$Static implements $JarMetadata {
static readonly "DASH_VERSION": $Pattern
static readonly "ILLEGAL_KEYWORDS": $List<string>
static readonly "KEYWORD_PARTS": $Pattern
static readonly "LEADING_DOTS": $Pattern
static readonly "MODULE_VERSION": $Pattern
static readonly "NON_ALPHANUM": $Pattern
static readonly "NUMBERLIKE_PARTS": $Pattern
static readonly "REPEATING_DOTS": $Pattern
static readonly "TRAILING_DOTS": $Pattern

static "from"(secureJar0: $SecureJar$$Type, ...path1s: $Path$$Type[]): $JarMetadata
static "fromFileName"(path0: $Path$$Type, set1: $Set$$Type<string>, list2: $List$$Type<$SecureJar$Provider$$Type>): $SimpleJarMetadata
}
}

declare module "cpw.mods.jarhandling.SecureJar$ModuleDataProvider" {
import { $Manifest } from "java.util.jar.Manifest"
import { $ModuleDescriptor } from "java.lang.module.ModuleDescriptor"
import { $Optional } from "java.util.Optional"
import { $URI } from "java.net.URI"
import { $InputStream } from "java.io.InputStream"
import { $CodeSigner } from "java.security.CodeSigner"

export interface $SecureJar$ModuleDataProvider {
"descriptor"(): $ModuleDescriptor
"findFile"(string0: string): $Optional<$URI>
"getManifest"(): $Manifest
"name"(): string
"open"(string0: string): $Optional<$InputStream>
"uri"(): $URI
"verifyAndGetSigners"(string0: string, byte1s: byte[]): $CodeSigner[]
get "manifest"(): $Manifest
}

export namespace $SecureJar$ModuleDataProvider {
const probejs$$marker: never
}
export abstract class $SecureJar$ModuleDataProvider$$Static implements $SecureJar$ModuleDataProvider {
}
}

declare module "cpw.mods.jarhandling.impl.SimpleJarMetadata" {
import { $SecureJar$$Type } from "cpw.mods.jarhandling.SecureJar"
import { $List, $List$$Type } from "java.util.List"
import { $SecureJar$Provider, $SecureJar$Provider$$Type } from "cpw.mods.jarhandling.SecureJar$Provider"
import { $JarMetadata } from "cpw.mods.jarhandling.JarMetadata"
import { $Set, $Set$$Type } from "java.util.Set"
import { $ModuleDescriptor } from "java.lang.module.ModuleDescriptor"
import { $Record } from "java.lang.Record"
import { $Path$$Type } from "java.nio.file.Path"

export class $SimpleJarMetadata extends $Record implements $JarMetadata {
constructor(name: string, version: string, pkgs: $Set$$Type<string>, providers: $List$$Type<$SecureJar$Provider$$Type>)

public "descriptor"(): $ModuleDescriptor
public static "from"(secureJar0: $SecureJar$$Type, ...path1s: $Path$$Type[]): $JarMetadata
public static "fromFileName"(path0: $Path$$Type, set1: $Set$$Type<string>, list2: $List$$Type<$SecureJar$Provider$$Type>): $SimpleJarMetadata
public "name"(): string
public "pkgs"(): $Set<string>
public "providers"(): $List<$SecureJar$Provider>
public "version"(): string
}
}

declare module "cpw.mods.jarhandling.SecureJar$Status" {
import { $Enum } from "java.lang.Enum"

export class $SecureJar$Status extends $Enum<$SecureJar$Status> {
static readonly "INVALID": $SecureJar$Status
static readonly "NONE": $SecureJar$Status
static readonly "UNVERIFIED": $SecureJar$Status
static readonly "VERIFIED": $SecureJar$Status

public static "valueOf"(string0: string): $SecureJar$Status
public static "values"(): $SecureJar$Status[]
}
}

