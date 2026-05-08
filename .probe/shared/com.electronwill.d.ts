declare module "com.electronwill.nightconfig.core.file.FileConfigBuilder" {
import { $Config } from "com.electronwill.nightconfig.core.Config"
import { $GenericBuilder } from "com.electronwill.nightconfig.core.file.GenericBuilder"
import { $FileConfig } from "com.electronwill.nightconfig.core.file.FileConfig"

export class $FileConfigBuilder extends $GenericBuilder<$Config, $FileConfig> {
}
}

declare module "com.electronwill.nightconfig.core.ConfigSpec$CorrectionListener" {
import { $List$$Type } from "java.util.List"
import { $ConfigSpec$CorrectionAction$$Type } from "com.electronwill.nightconfig.core.ConfigSpec$CorrectionAction"

export interface $ConfigSpec$CorrectionListener {
"onCorrect"(correctionAction0: $ConfigSpec$CorrectionAction$$Type, list1: $List$$Type<string>, object2: any, object3: any): void
}

export namespace $ConfigSpec$CorrectionListener {
const probejs$$marker: never
}
export abstract class $ConfigSpec$CorrectionListener$$Static implements $ConfigSpec$CorrectionListener {
}
}

declare module "com.electronwill.nightconfig.core.UnmodifiableConfig$Entry" {
import { $OptionalLong } from "java.util.OptionalLong"
import { $Optional } from "java.util.Optional"
import { $OptionalInt } from "java.util.OptionalInt"

export interface $UnmodifiableConfig$Entry {
"getByte"(): byte
"getByteOrElse"(byte0: byte): byte
"getChar"(): character
"getCharOrElse"(char0: character): character
"getInt"(): integer
"getIntOrElse"(int0: integer): integer
"getKey"(): string
"getLong"(): long
"getLongOrElse"(long0: long): long
"getOptional"<T>(): $Optional<T>
"getOptionalInt"(): $OptionalInt
"getOptionalLong"(): $OptionalLong
"getOrElse"<T>(t0: T): T
"getRawValue"<T>(): T
"getShort"(): short
"getShortOrElse"(short0: short): short
"getValue"<T>(): T
"isNull"(): boolean
get "byte"(): byte
get "char"(): character
get "int"(): integer
get "key"(): string
get "long"(): long
get "optional"(): $Optional<T>
get "optionalInt"(): $OptionalInt
get "optionalLong"(): $OptionalLong
get "rawValue"(): T
get "short"(): short
get "value"(): T
get "null"(): boolean
}

export namespace $UnmodifiableConfig$Entry {
const probejs$$marker: never
}
export abstract class $UnmodifiableConfig$Entry$$Static implements $UnmodifiableConfig$Entry {
}
}

declare module "com.electronwill.nightconfig.core.UnmodifiableCommentedConfig$CommentNode" {
import { $Map, $Map$$Type } from "java.util.Map"

export class $UnmodifiableCommentedConfig$CommentNode {
constructor(string0: string, map1: $Map$$Type<string, $UnmodifiableCommentedConfig$CommentNode$$Type>)

public "getChildren"(): $Map<string, $UnmodifiableCommentedConfig$CommentNode>
public "getComment"(): string
get "children"(): $Map<string, $UnmodifiableCommentedConfig$CommentNode>
get "comment"(): string
}
}

declare module "com.electronwill.nightconfig.core.EnumGetMethod" {
import { $Enum, $Enum$$Type } from "java.lang.Enum"
import { $Class$$Type } from "java.lang.Class"

export class $EnumGetMethod extends $Enum<$EnumGetMethod> {
static readonly "NAME": $EnumGetMethod
static readonly "NAME_IGNORECASE": $EnumGetMethod
static readonly "ORDINAL_OR_NAME": $EnumGetMethod
static readonly "ORDINAL_OR_NAME_IGNORECASE": $EnumGetMethod

public "get"<T extends $Enum<T>>(object0: any, class1: $Class$$Type<T>): T
public "isCaseSensitive"(): boolean
public "isOrdinalOk"(): boolean
public "validate"<T extends $Enum<T>>(object0: any, class1: $Class$$Type<T>): boolean
public static "valueOf"(string0: string): $EnumGetMethod
public static "values"(): $EnumGetMethod[]
get "caseSensitive"(): boolean
get "ordinalOk"(): boolean
}
}

declare module "com.electronwill.nightconfig.core.file.FileConfig" {
import { $Config, $Config$$Type } from "com.electronwill.nightconfig.core.Config"
import { $LongSupplier$$Type } from "java.util.function.LongSupplier"
import { $FileConfigBuilder } from "com.electronwill.nightconfig.core.file.FileConfigBuilder"
import { $Set } from "java.util.Set"
import { $EnumGetMethod$$Type } from "com.electronwill.nightconfig.core.EnumGetMethod"
import { $Config$Entry } from "com.electronwill.nightconfig.core.Config$Entry"
import { $Supplier, $Supplier$$Type } from "java.util.function.Supplier"
import { $OptionalInt } from "java.util.OptionalInt"
import { $AutoCloseable } from "java.lang.AutoCloseable"
import { $File, $File$$Type } from "java.io.File"
import { $ConfigFormat, $ConfigFormat$$Type } from "com.electronwill.nightconfig.core.ConfigFormat"
import { $OptionalLong } from "java.util.OptionalLong"
import { $List$$Type } from "java.util.List"
import { $Enum, $Enum$$Type } from "java.lang.Enum"
import { $Map, $Map$$Type } from "java.util.Map"
import { $Optional } from "java.util.Optional"
import { $Class$$Type } from "java.lang.Class"
import { $Path, $Path$$Type } from "java.nio.file.Path"
import { $UnmodifiableConfig, $UnmodifiableConfig$$Type } from "com.electronwill.nightconfig.core.UnmodifiableConfig"
import { $IntSupplier$$Type } from "java.util.function.IntSupplier"

export interface $FileConfig extends $Config, $AutoCloseable {
"add"(string0: string, object1: any): boolean
"add"(list0: $List$$Type<string>, object1: any): boolean
"addAll"(unmodifiableConfig0: $UnmodifiableConfig$$Type): void
"apply"<T>(string0: string): T
"apply"<T>(list0: $List$$Type<string>): T
"checked"(): $FileConfig
"clear"(): void
"close"(): void
"configFormat"(): $ConfigFormat<any>
"contains"(string0: string): boolean
"contains"(list0: $List$$Type<string>): boolean
"createSubConfig"(): $Config
"entrySet"(): $Set<$Config$Entry>
"get"<T>(list0: $List$$Type<string>): T
"get"<T>(string0: string): T
"getByte"(string0: string): byte
"getByte"(list0: $List$$Type<string>): byte
"getByteOrElse"(list0: $List$$Type<string>, byte1: byte): byte
"getByteOrElse"(string0: string, byte1: byte): byte
"getChar"(list0: $List$$Type<string>): character
"getChar"(string0: string): character
"getCharOrElse"(string0: string, char1: character): character
"getCharOrElse"(list0: $List$$Type<string>, char1: character): character
"getEnum"<T extends $Enum<T>>(list0: $List$$Type<string>, class1: $Class$$Type<T>): T
"getEnum"<T extends $Enum<T>>(list0: $List$$Type<string>, class1: $Class$$Type<T>, enumGetMethod2: $EnumGetMethod$$Type): T
"getEnum"<T extends $Enum<T>>(string0: string, class1: $Class$$Type<T>): T
"getEnum"<T extends $Enum<T>>(string0: string, class1: $Class$$Type<T>, enumGetMethod2: $EnumGetMethod$$Type): T
"getEnumOrElse"<T extends $Enum<T>>(string0: string, class1: $Class$$Type<T>, supplier2: $Supplier$$Type<T>): T
"getEnumOrElse"<T extends $Enum<T>>(list0: $List$$Type<string>, t1: T): T
"getEnumOrElse"<T extends $Enum<T>>(list0: $List$$Type<string>, class1: $Class$$Type<T>, enumGetMethod2: $EnumGetMethod$$Type, supplier3: $Supplier$$Type<T>): T
"getEnumOrElse"<T extends $Enum<T>>(list0: $List$$Type<string>, class1: $Class$$Type<T>, supplier2: $Supplier$$Type<T>): T
"getEnumOrElse"<T extends $Enum<T>>(string0: string, t1: T, enumGetMethod2: $EnumGetMethod$$Type): T
"getEnumOrElse"<T extends $Enum<T>>(string0: string, t1: T): T
"getEnumOrElse"<T extends $Enum<T>>(list0: $List$$Type<string>, t1: T, enumGetMethod2: $EnumGetMethod$$Type): T
"getEnumOrElse"<T extends $Enum<T>>(string0: string, class1: $Class$$Type<T>, enumGetMethod2: $EnumGetMethod$$Type, supplier3: $Supplier$$Type<T>): T
"getFile"(): $File
"getInt"(list0: $List$$Type<string>): integer
"getInt"(string0: string): integer
"getIntOrElse"(string0: string, int1: integer): integer
"getIntOrElse"(list0: $List$$Type<string>, int1: integer): integer
"getIntOrElse"(list0: $List$$Type<string>, intSupplier1: $IntSupplier$$Type): integer
"getIntOrElse"(string0: string, intSupplier1: $IntSupplier$$Type): integer
"getLong"(list0: $List$$Type<string>): long
"getLong"(string0: string): long
"getLongOrElse"(list0: $List$$Type<string>, long1: long): long
"getLongOrElse"(string0: string, long1: long): long
"getLongOrElse"(string0: string, longSupplier1: $LongSupplier$$Type): long
"getLongOrElse"(list0: $List$$Type<string>, longSupplier1: $LongSupplier$$Type): long
"getNioPath"(): $Path
"getOptional"<T>(list0: $List$$Type<string>): $Optional<T>
"getOptional"<T>(string0: string): $Optional<T>
"getOptionalEnum"<T extends $Enum<T>>(list0: $List$$Type<string>, class1: $Class$$Type<T>, enumGetMethod2: $EnumGetMethod$$Type): $Optional<T>
"getOptionalEnum"<T extends $Enum<T>>(list0: $List$$Type<string>, class1: $Class$$Type<T>): $Optional<T>
"getOptionalEnum"<T extends $Enum<T>>(string0: string, class1: $Class$$Type<T>, enumGetMethod2: $EnumGetMethod$$Type): $Optional<T>
"getOptionalEnum"<T extends $Enum<T>>(string0: string, class1: $Class$$Type<T>): $Optional<T>
"getOptionalInt"(list0: $List$$Type<string>): $OptionalInt
"getOptionalInt"(string0: string): $OptionalInt
"getOptionalLong"(string0: string): $OptionalLong
"getOptionalLong"(list0: $List$$Type<string>): $OptionalLong
"getOrElse"<T>(string0: string, supplier1: $Supplier$$Type<T>): T
"getOrElse"<T>(list0: $List$$Type<string>, supplier1: $Supplier$$Type<T>): T
"getOrElse"<T>(list0: $List$$Type<string>, t1: T): T
"getOrElse"<T>(string0: string, t1: T): T
"getRaw"<T>(list0: $List$$Type<string>): T
"getRaw"<T>(string0: string): T
"getShort"(list0: $List$$Type<string>): short
"getShort"(string0: string): short
"getShortOrElse"(list0: $List$$Type<string>, short1: short): short
"getShortOrElse"(string0: string, short1: short): short
"isEmpty"(): boolean
"isNull"(string0: string): boolean
"isNull"(list0: $List$$Type<string>): boolean
"load"(): void
"putAll"(unmodifiableConfig0: $UnmodifiableConfig$$Type): void
"remove"<T>(list0: $List$$Type<string>): T
"remove"<T>(string0: string): T
"removeAll"(unmodifiableConfig0: $UnmodifiableConfig$$Type): void
"save"(): void
"set"<T>(string0: string, object1: any): T
"set"<T>(list0: $List$$Type<string>, object1: any): T
"size"(): integer
"unmodifiable"(): $UnmodifiableConfig
"update"(string0: string, object1: any): void
"update"(list0: $List$$Type<string>, object1: any): void
"valueMap"(): $Map<string, any>
get "file"(): $File
get "nioPath"(): $Path
get "empty"(): boolean
}

export namespace $FileConfig {
function builder(file0: $File$$Type, configFormat1: $ConfigFormat$$Type<any>): $FileConfigBuilder
function builder(file0: $File$$Type): $FileConfigBuilder
function builder(path0: $Path$$Type): $FileConfigBuilder
function builder(string0: string, configFormat1: $ConfigFormat$$Type<any>): $FileConfigBuilder
function builder(path0: $Path$$Type, configFormat1: $ConfigFormat$$Type<any>): $FileConfigBuilder
function builder(string0: string): $FileConfigBuilder
function concurrentCopy(unmodifiableConfig0: $UnmodifiableConfig$$Type, configFormat1: $ConfigFormat$$Type<any>): $Config
function concurrentCopy(unmodifiableConfig0: $UnmodifiableConfig$$Type): $Config
function copy(unmodifiableConfig0: $UnmodifiableConfig$$Type, configFormat1: $ConfigFormat$$Type<any>): $Config
function copy(unmodifiableConfig0: $UnmodifiableConfig$$Type): $Config
function copy(unmodifiableConfig0: $UnmodifiableConfig$$Type, supplier1: $Supplier$$Type<$Map<string, any>>, configFormat2: $ConfigFormat$$Type<any>): $Config
function copy(unmodifiableConfig0: $UnmodifiableConfig$$Type, supplier1: $Supplier$$Type<$Map<string, any>>): $Config
function getDefaultMapCreator<T>(boolean0: boolean, boolean1: boolean): $Supplier<$Map<string, T>>
function getDefaultMapCreator<T>(boolean0: boolean): $Supplier<$Map<string, T>>
function inMemory(): $Config
function inMemoryConcurrent(): $Config
function inMemoryUniversal(): $Config
function inMemoryUniversalConcurrent(): $Config
function isInsertionOrderPreserved(): boolean
function of(string0: string, configFormat1: $ConfigFormat$$Type<any>): $FileConfig
function of(string0: string): $FileConfig
function of(file0: $File$$Type): $FileConfig
function of(file0: $File$$Type, configFormat1: $ConfigFormat$$Type<$Config$$Type>): $FileConfig
function of(path0: $Path$$Type, configFormat1: $ConfigFormat$$Type<$Config$$Type>): $FileConfig
function of(path0: $Path$$Type): $FileConfig
function of(supplier0: $Supplier$$Type<$Map<string, any>>, configFormat1: $ConfigFormat$$Type<any>): $Config
function of(configFormat0: $ConfigFormat$$Type<$Config$$Type>): $Config
function ofConcurrent(string0: string): $FileConfig
function ofConcurrent(path0: $Path$$Type, configFormat1: $ConfigFormat$$Type<any>): $FileConfig
function ofConcurrent(path0: $Path$$Type): $FileConfig
function ofConcurrent(file0: $File$$Type, configFormat1: $ConfigFormat$$Type<any>): $FileConfig
function ofConcurrent(file0: $File$$Type): $FileConfig
function ofConcurrent(string0: string, configFormat1: $ConfigFormat$$Type<any>): $FileConfig
function ofConcurrent(configFormat0: $ConfigFormat$$Type<$Config$$Type>): $Config
function setInsertionOrderPreserved(boolean0: boolean): void
function wrap(map0: $Map$$Type<string, any>, configFormat1: $ConfigFormat$$Type<any>): $Config
}
export abstract class $FileConfig$$Static implements $FileConfig {
static "builder"(file0: $File$$Type, configFormat1: $ConfigFormat$$Type<any>): $FileConfigBuilder
static "builder"(file0: $File$$Type): $FileConfigBuilder
static "builder"(path0: $Path$$Type): $FileConfigBuilder
static "builder"(string0: string, configFormat1: $ConfigFormat$$Type<any>): $FileConfigBuilder
static "builder"(path0: $Path$$Type, configFormat1: $ConfigFormat$$Type<any>): $FileConfigBuilder
static "builder"(string0: string): $FileConfigBuilder
static "concurrentCopy"(unmodifiableConfig0: $UnmodifiableConfig$$Type, configFormat1: $ConfigFormat$$Type<any>): $Config
static "concurrentCopy"(unmodifiableConfig0: $UnmodifiableConfig$$Type): $Config
static "copy"(unmodifiableConfig0: $UnmodifiableConfig$$Type, configFormat1: $ConfigFormat$$Type<any>): $Config
static "copy"(unmodifiableConfig0: $UnmodifiableConfig$$Type): $Config
static "copy"(unmodifiableConfig0: $UnmodifiableConfig$$Type, supplier1: $Supplier$$Type<$Map<string, any>>, configFormat2: $ConfigFormat$$Type<any>): $Config
static "copy"(unmodifiableConfig0: $UnmodifiableConfig$$Type, supplier1: $Supplier$$Type<$Map<string, any>>): $Config
static "getDefaultMapCreator"<T>(boolean0: boolean, boolean1: boolean): $Supplier<$Map<string, T>>
static "getDefaultMapCreator"<T>(boolean0: boolean): $Supplier<$Map<string, T>>
static "inMemory"(): $Config
static "inMemoryConcurrent"(): $Config
static "inMemoryUniversal"(): $Config
static "inMemoryUniversalConcurrent"(): $Config
static "isInsertionOrderPreserved"(): boolean
static "of"(string0: string, configFormat1: $ConfigFormat$$Type<any>): $FileConfig
static "of"(string0: string): $FileConfig
static "of"(file0: $File$$Type): $FileConfig
static "of"(file0: $File$$Type, configFormat1: $ConfigFormat$$Type<$Config$$Type>): $FileConfig
static "of"(path0: $Path$$Type, configFormat1: $ConfigFormat$$Type<$Config$$Type>): $FileConfig
static "of"(path0: $Path$$Type): $FileConfig
static "of"(supplier0: $Supplier$$Type<$Map<string, any>>, configFormat1: $ConfigFormat$$Type<any>): $Config
static "of"(configFormat0: $ConfigFormat$$Type<$Config$$Type>): $Config
static "ofConcurrent"(string0: string): $FileConfig
static "ofConcurrent"(path0: $Path$$Type, configFormat1: $ConfigFormat$$Type<any>): $FileConfig
static "ofConcurrent"(path0: $Path$$Type): $FileConfig
static "ofConcurrent"(file0: $File$$Type, configFormat1: $ConfigFormat$$Type<any>): $FileConfig
static "ofConcurrent"(file0: $File$$Type): $FileConfig
static "ofConcurrent"(string0: string, configFormat1: $ConfigFormat$$Type<any>): $FileConfig
static "ofConcurrent"(configFormat0: $ConfigFormat$$Type<$Config$$Type>): $Config
static "setInsertionOrderPreserved"(boolean0: boolean): void
static "wrap"(map0: $Map$$Type<string, any>, configFormat1: $ConfigFormat$$Type<any>): $Config
}
}

declare module "com.electronwill.nightconfig.core.UnmodifiableCommentedConfig$Entry" {
import { $OptionalLong } from "java.util.OptionalLong"
import { $Optional } from "java.util.Optional"
import { $UnmodifiableConfig$Entry } from "com.electronwill.nightconfig.core.UnmodifiableConfig$Entry"
import { $OptionalInt } from "java.util.OptionalInt"

export interface $UnmodifiableCommentedConfig$Entry extends $UnmodifiableConfig$Entry {
"getByte"(): byte
"getByteOrElse"(byte0: byte): byte
"getChar"(): character
"getCharOrElse"(char0: character): character
"getComment"(): string
"getInt"(): integer
"getIntOrElse"(int0: integer): integer
"getKey"(): string
"getLong"(): long
"getLongOrElse"(long0: long): long
"getOptional"<T>(): $Optional<T>
"getOptionalInt"(): $OptionalInt
"getOptionalLong"(): $OptionalLong
"getOrElse"<T>(t0: T): T
"getRawValue"<T>(): T
"getShort"(): short
"getShortOrElse"(short0: short): short
"getValue"<T>(): T
"isNull"(): boolean
get "byte"(): byte
get "char"(): character
get "comment"(): string
get "int"(): integer
get "key"(): string
get "long"(): long
get "optional"(): $Optional<T>
get "optionalInt"(): $OptionalInt
get "optionalLong"(): $OptionalLong
get "rawValue"(): T
get "short"(): short
get "value"(): T
get "null"(): boolean
}

export namespace $UnmodifiableCommentedConfig$Entry {
const probejs$$marker: never
}
export abstract class $UnmodifiableCommentedConfig$Entry$$Static implements $UnmodifiableCommentedConfig$Entry {
}
}

declare module "com.electronwill.nightconfig.core.UnmodifiableConfig" {
import { $LongSupplier$$Type } from "java.util.function.LongSupplier"
import { $Set } from "java.util.Set"
import { $EnumGetMethod$$Type } from "com.electronwill.nightconfig.core.EnumGetMethod"
import { $Supplier$$Type } from "java.util.function.Supplier"
import { $OptionalInt } from "java.util.OptionalInt"
import { $ConfigFormat } from "com.electronwill.nightconfig.core.ConfigFormat"
import { $OptionalLong } from "java.util.OptionalLong"
import { $List$$Type } from "java.util.List"
import { $Enum, $Enum$$Type } from "java.lang.Enum"
import { $Map } from "java.util.Map"
import { $Optional } from "java.util.Optional"
import { $Class$$Type } from "java.lang.Class"
import { $UnmodifiableConfig$Entry } from "com.electronwill.nightconfig.core.UnmodifiableConfig$Entry"
import { $IntSupplier$$Type } from "java.util.function.IntSupplier"

export interface $UnmodifiableConfig {
"apply"<T>(string0: string): T
"apply"<T>(list0: $List$$Type<string>): T
"configFormat"(): $ConfigFormat<any>
"contains"(string0: string): boolean
"contains"(list0: $List$$Type<string>): boolean
"entrySet"(): $Set<$UnmodifiableConfig$Entry>
"get"<T>(list0: $List$$Type<string>): T
"get"<T>(string0: string): T
"getByte"(string0: string): byte
"getByte"(list0: $List$$Type<string>): byte
"getByteOrElse"(list0: $List$$Type<string>, byte1: byte): byte
"getByteOrElse"(string0: string, byte1: byte): byte
"getChar"(list0: $List$$Type<string>): character
"getChar"(string0: string): character
"getCharOrElse"(string0: string, char1: character): character
"getCharOrElse"(list0: $List$$Type<string>, char1: character): character
"getEnum"<T extends $Enum<T>>(list0: $List$$Type<string>, class1: $Class$$Type<T>): T
"getEnum"<T extends $Enum<T>>(list0: $List$$Type<string>, class1: $Class$$Type<T>, enumGetMethod2: $EnumGetMethod$$Type): T
"getEnum"<T extends $Enum<T>>(string0: string, class1: $Class$$Type<T>): T
"getEnum"<T extends $Enum<T>>(string0: string, class1: $Class$$Type<T>, enumGetMethod2: $EnumGetMethod$$Type): T
"getEnumOrElse"<T extends $Enum<T>>(string0: string, class1: $Class$$Type<T>, supplier2: $Supplier$$Type<T>): T
"getEnumOrElse"<T extends $Enum<T>>(list0: $List$$Type<string>, t1: T): T
"getEnumOrElse"<T extends $Enum<T>>(list0: $List$$Type<string>, class1: $Class$$Type<T>, enumGetMethod2: $EnumGetMethod$$Type, supplier3: $Supplier$$Type<T>): T
"getEnumOrElse"<T extends $Enum<T>>(list0: $List$$Type<string>, class1: $Class$$Type<T>, supplier2: $Supplier$$Type<T>): T
"getEnumOrElse"<T extends $Enum<T>>(string0: string, t1: T, enumGetMethod2: $EnumGetMethod$$Type): T
"getEnumOrElse"<T extends $Enum<T>>(string0: string, t1: T): T
"getEnumOrElse"<T extends $Enum<T>>(list0: $List$$Type<string>, t1: T, enumGetMethod2: $EnumGetMethod$$Type): T
"getEnumOrElse"<T extends $Enum<T>>(string0: string, class1: $Class$$Type<T>, enumGetMethod2: $EnumGetMethod$$Type, supplier3: $Supplier$$Type<T>): T
"getInt"(list0: $List$$Type<string>): integer
"getInt"(string0: string): integer
"getIntOrElse"(string0: string, int1: integer): integer
"getIntOrElse"(list0: $List$$Type<string>, int1: integer): integer
"getIntOrElse"(list0: $List$$Type<string>, intSupplier1: $IntSupplier$$Type): integer
"getIntOrElse"(string0: string, intSupplier1: $IntSupplier$$Type): integer
"getLong"(list0: $List$$Type<string>): long
"getLong"(string0: string): long
"getLongOrElse"(list0: $List$$Type<string>, long1: long): long
"getLongOrElse"(string0: string, long1: long): long
"getLongOrElse"(string0: string, longSupplier1: $LongSupplier$$Type): long
"getLongOrElse"(list0: $List$$Type<string>, longSupplier1: $LongSupplier$$Type): long
"getOptional"<T>(list0: $List$$Type<string>): $Optional<T>
"getOptional"<T>(string0: string): $Optional<T>
"getOptionalEnum"<T extends $Enum<T>>(list0: $List$$Type<string>, class1: $Class$$Type<T>, enumGetMethod2: $EnumGetMethod$$Type): $Optional<T>
"getOptionalEnum"<T extends $Enum<T>>(list0: $List$$Type<string>, class1: $Class$$Type<T>): $Optional<T>
"getOptionalEnum"<T extends $Enum<T>>(string0: string, class1: $Class$$Type<T>, enumGetMethod2: $EnumGetMethod$$Type): $Optional<T>
"getOptionalEnum"<T extends $Enum<T>>(string0: string, class1: $Class$$Type<T>): $Optional<T>
"getOptionalInt"(list0: $List$$Type<string>): $OptionalInt
"getOptionalInt"(string0: string): $OptionalInt
"getOptionalLong"(string0: string): $OptionalLong
"getOptionalLong"(list0: $List$$Type<string>): $OptionalLong
"getOrElse"<T>(string0: string, supplier1: $Supplier$$Type<T>): T
"getOrElse"<T>(list0: $List$$Type<string>, supplier1: $Supplier$$Type<T>): T
"getOrElse"<T>(list0: $List$$Type<string>, t1: T): T
"getOrElse"<T>(string0: string, t1: T): T
"getRaw"<T>(list0: $List$$Type<string>): T
"getRaw"<T>(string0: string): T
"getShort"(list0: $List$$Type<string>): short
"getShort"(string0: string): short
"getShortOrElse"(list0: $List$$Type<string>, short1: short): short
"getShortOrElse"(string0: string, short1: short): short
"isEmpty"(): boolean
"isNull"(string0: string): boolean
"isNull"(list0: $List$$Type<string>): boolean
"size"(): integer
"valueMap"(): $Map<string, any>
get "empty"(): boolean
}

export namespace $UnmodifiableConfig {
const probejs$$marker: never
}
export abstract class $UnmodifiableConfig$$Static implements $UnmodifiableConfig {
}
}

declare module "com.electronwill.nightconfig.core.io.WritingMode" {
import { $Enum } from "java.lang.Enum"

export class $WritingMode extends $Enum<$WritingMode> {
static readonly "APPEND": $WritingMode
static readonly "REPLACE": $WritingMode

public static "valueOf"(string0: string): $WritingMode
public static "values"(): $WritingMode[]
}
}

declare module "com.electronwill.nightconfig.core.Config" {
import { $LongSupplier$$Type } from "java.util.function.LongSupplier"
import { $Set } from "java.util.Set"
import { $EnumGetMethod$$Type } from "com.electronwill.nightconfig.core.EnumGetMethod"
import { $Config$Entry } from "com.electronwill.nightconfig.core.Config$Entry"
import { $Supplier, $Supplier$$Type } from "java.util.function.Supplier"
import { $OptionalInt } from "java.util.OptionalInt"
import { $ConfigFormat, $ConfigFormat$$Type } from "com.electronwill.nightconfig.core.ConfigFormat"
import { $OptionalLong } from "java.util.OptionalLong"
import { $List$$Type } from "java.util.List"
import { $Enum, $Enum$$Type } from "java.lang.Enum"
import { $Map, $Map$$Type } from "java.util.Map"
import { $Optional } from "java.util.Optional"
import { $Class$$Type } from "java.lang.Class"
import { $UnmodifiableConfig, $UnmodifiableConfig$$Type } from "com.electronwill.nightconfig.core.UnmodifiableConfig"
import { $IntSupplier$$Type } from "java.util.function.IntSupplier"

export interface $Config extends $UnmodifiableConfig {
"add"(string0: string, object1: any): boolean
"add"(list0: $List$$Type<string>, object1: any): boolean
"addAll"(unmodifiableConfig0: $UnmodifiableConfig$$Type): void
"apply"<T>(string0: string): T
"apply"<T>(list0: $List$$Type<string>): T
"checked"(): $Config
"clear"(): void
"configFormat"(): $ConfigFormat<any>
"contains"(string0: string): boolean
"contains"(list0: $List$$Type<string>): boolean
"createSubConfig"(): $Config
"entrySet"(): $Set<$Config$Entry>
"get"<T>(list0: $List$$Type<string>): T
"get"<T>(string0: string): T
"getByte"(string0: string): byte
"getByte"(list0: $List$$Type<string>): byte
"getByteOrElse"(list0: $List$$Type<string>, byte1: byte): byte
"getByteOrElse"(string0: string, byte1: byte): byte
"getChar"(list0: $List$$Type<string>): character
"getChar"(string0: string): character
"getCharOrElse"(string0: string, char1: character): character
"getCharOrElse"(list0: $List$$Type<string>, char1: character): character
"getEnum"<T extends $Enum<T>>(list0: $List$$Type<string>, class1: $Class$$Type<T>): T
"getEnum"<T extends $Enum<T>>(list0: $List$$Type<string>, class1: $Class$$Type<T>, enumGetMethod2: $EnumGetMethod$$Type): T
"getEnum"<T extends $Enum<T>>(string0: string, class1: $Class$$Type<T>): T
"getEnum"<T extends $Enum<T>>(string0: string, class1: $Class$$Type<T>, enumGetMethod2: $EnumGetMethod$$Type): T
"getEnumOrElse"<T extends $Enum<T>>(string0: string, class1: $Class$$Type<T>, supplier2: $Supplier$$Type<T>): T
"getEnumOrElse"<T extends $Enum<T>>(list0: $List$$Type<string>, t1: T): T
"getEnumOrElse"<T extends $Enum<T>>(list0: $List$$Type<string>, class1: $Class$$Type<T>, enumGetMethod2: $EnumGetMethod$$Type, supplier3: $Supplier$$Type<T>): T
"getEnumOrElse"<T extends $Enum<T>>(list0: $List$$Type<string>, class1: $Class$$Type<T>, supplier2: $Supplier$$Type<T>): T
"getEnumOrElse"<T extends $Enum<T>>(string0: string, t1: T, enumGetMethod2: $EnumGetMethod$$Type): T
"getEnumOrElse"<T extends $Enum<T>>(string0: string, t1: T): T
"getEnumOrElse"<T extends $Enum<T>>(list0: $List$$Type<string>, t1: T, enumGetMethod2: $EnumGetMethod$$Type): T
"getEnumOrElse"<T extends $Enum<T>>(string0: string, class1: $Class$$Type<T>, enumGetMethod2: $EnumGetMethod$$Type, supplier3: $Supplier$$Type<T>): T
"getInt"(list0: $List$$Type<string>): integer
"getInt"(string0: string): integer
"getIntOrElse"(string0: string, int1: integer): integer
"getIntOrElse"(list0: $List$$Type<string>, int1: integer): integer
"getIntOrElse"(list0: $List$$Type<string>, intSupplier1: $IntSupplier$$Type): integer
"getIntOrElse"(string0: string, intSupplier1: $IntSupplier$$Type): integer
"getLong"(list0: $List$$Type<string>): long
"getLong"(string0: string): long
"getLongOrElse"(list0: $List$$Type<string>, long1: long): long
"getLongOrElse"(string0: string, long1: long): long
"getLongOrElse"(string0: string, longSupplier1: $LongSupplier$$Type): long
"getLongOrElse"(list0: $List$$Type<string>, longSupplier1: $LongSupplier$$Type): long
"getOptional"<T>(list0: $List$$Type<string>): $Optional<T>
"getOptional"<T>(string0: string): $Optional<T>
"getOptionalEnum"<T extends $Enum<T>>(list0: $List$$Type<string>, class1: $Class$$Type<T>, enumGetMethod2: $EnumGetMethod$$Type): $Optional<T>
"getOptionalEnum"<T extends $Enum<T>>(list0: $List$$Type<string>, class1: $Class$$Type<T>): $Optional<T>
"getOptionalEnum"<T extends $Enum<T>>(string0: string, class1: $Class$$Type<T>, enumGetMethod2: $EnumGetMethod$$Type): $Optional<T>
"getOptionalEnum"<T extends $Enum<T>>(string0: string, class1: $Class$$Type<T>): $Optional<T>
"getOptionalInt"(list0: $List$$Type<string>): $OptionalInt
"getOptionalInt"(string0: string): $OptionalInt
"getOptionalLong"(string0: string): $OptionalLong
"getOptionalLong"(list0: $List$$Type<string>): $OptionalLong
"getOrElse"<T>(string0: string, supplier1: $Supplier$$Type<T>): T
"getOrElse"<T>(list0: $List$$Type<string>, supplier1: $Supplier$$Type<T>): T
"getOrElse"<T>(list0: $List$$Type<string>, t1: T): T
"getOrElse"<T>(string0: string, t1: T): T
"getRaw"<T>(list0: $List$$Type<string>): T
"getRaw"<T>(string0: string): T
"getShort"(list0: $List$$Type<string>): short
"getShort"(string0: string): short
"getShortOrElse"(list0: $List$$Type<string>, short1: short): short
"getShortOrElse"(string0: string, short1: short): short
"isEmpty"(): boolean
"isNull"(string0: string): boolean
"isNull"(list0: $List$$Type<string>): boolean
"putAll"(unmodifiableConfig0: $UnmodifiableConfig$$Type): void
"remove"<T>(list0: $List$$Type<string>): T
"remove"<T>(string0: string): T
"removeAll"(unmodifiableConfig0: $UnmodifiableConfig$$Type): void
"set"<T>(string0: string, object1: any): T
"set"<T>(list0: $List$$Type<string>, object1: any): T
"size"(): integer
"unmodifiable"(): $UnmodifiableConfig
"update"(string0: string, object1: any): void
"update"(list0: $List$$Type<string>, object1: any): void
"valueMap"(): $Map<string, any>
get "empty"(): boolean
}

export namespace $Config {
function concurrentCopy(unmodifiableConfig0: $UnmodifiableConfig$$Type, configFormat1: $ConfigFormat$$Type<any>): $Config
function concurrentCopy(unmodifiableConfig0: $UnmodifiableConfig$$Type): $Config
function copy(unmodifiableConfig0: $UnmodifiableConfig$$Type, configFormat1: $ConfigFormat$$Type<any>): $Config
function copy(unmodifiableConfig0: $UnmodifiableConfig$$Type): $Config
function copy(unmodifiableConfig0: $UnmodifiableConfig$$Type, supplier1: $Supplier$$Type<$Map<string, any>>, configFormat2: $ConfigFormat$$Type<any>): $Config
function copy(unmodifiableConfig0: $UnmodifiableConfig$$Type, supplier1: $Supplier$$Type<$Map<string, any>>): $Config
function getDefaultMapCreator<T>(boolean0: boolean, boolean1: boolean): $Supplier<$Map<string, T>>
function getDefaultMapCreator<T>(boolean0: boolean): $Supplier<$Map<string, T>>
function inMemory(): $Config
function inMemoryConcurrent(): $Config
function inMemoryUniversal(): $Config
function inMemoryUniversalConcurrent(): $Config
function isInsertionOrderPreserved(): boolean
function of(supplier0: $Supplier$$Type<$Map<string, any>>, configFormat1: $ConfigFormat$$Type<any>): $Config
function of(configFormat0: $ConfigFormat$$Type<$Config$$Type>): $Config
function ofConcurrent(configFormat0: $ConfigFormat$$Type<$Config$$Type>): $Config
function setInsertionOrderPreserved(boolean0: boolean): void
function wrap(map0: $Map$$Type<string, any>, configFormat1: $ConfigFormat$$Type<any>): $Config
}
export abstract class $Config$$Static implements $Config {
static "concurrentCopy"(unmodifiableConfig0: $UnmodifiableConfig$$Type, configFormat1: $ConfigFormat$$Type<any>): $Config
static "concurrentCopy"(unmodifiableConfig0: $UnmodifiableConfig$$Type): $Config
static "copy"(unmodifiableConfig0: $UnmodifiableConfig$$Type, configFormat1: $ConfigFormat$$Type<any>): $Config
static "copy"(unmodifiableConfig0: $UnmodifiableConfig$$Type): $Config
static "copy"(unmodifiableConfig0: $UnmodifiableConfig$$Type, supplier1: $Supplier$$Type<$Map<string, any>>, configFormat2: $ConfigFormat$$Type<any>): $Config
static "copy"(unmodifiableConfig0: $UnmodifiableConfig$$Type, supplier1: $Supplier$$Type<$Map<string, any>>): $Config
static "getDefaultMapCreator"<T>(boolean0: boolean, boolean1: boolean): $Supplier<$Map<string, T>>
static "getDefaultMapCreator"<T>(boolean0: boolean): $Supplier<$Map<string, T>>
static "inMemory"(): $Config
static "inMemoryConcurrent"(): $Config
static "inMemoryUniversal"(): $Config
static "inMemoryUniversalConcurrent"(): $Config
static "isInsertionOrderPreserved"(): boolean
static "of"(supplier0: $Supplier$$Type<$Map<string, any>>, configFormat1: $ConfigFormat$$Type<any>): $Config
static "of"(configFormat0: $ConfigFormat$$Type<$Config$$Type>): $Config
static "ofConcurrent"(configFormat0: $ConfigFormat$$Type<$Config$$Type>): $Config
static "setInsertionOrderPreserved"(boolean0: boolean): void
static "wrap"(map0: $Map$$Type<string, any>, configFormat1: $ConfigFormat$$Type<any>): $Config
}
}

declare module "com.electronwill.nightconfig.core.file.CommentedFileConfigBuilder" {
import { $CommentedConfig } from "com.electronwill.nightconfig.core.CommentedConfig"
import { $GenericBuilder } from "com.electronwill.nightconfig.core.file.GenericBuilder"
import { $CommentedFileConfig } from "com.electronwill.nightconfig.core.file.CommentedFileConfig"

export class $CommentedFileConfigBuilder extends $GenericBuilder<$CommentedConfig, $CommentedFileConfig> {
}
}

declare module "com.electronwill.nightconfig.core.ConfigFormat" {
import { $Config } from "com.electronwill.nightconfig.core.Config"
import { $Map } from "java.util.Map"
import { $ConfigParser } from "com.electronwill.nightconfig.core.io.ConfigParser"
import { $Class$$Type } from "java.lang.Class"
import { $Supplier$$Type } from "java.util.function.Supplier"
import { $Path$$Type } from "java.nio.file.Path"
import { $File$$Type } from "java.io.File"
import { $ConfigWriter } from "com.electronwill.nightconfig.core.io.ConfigWriter"
import { $WriterSupplier$$Type } from "com.electronwill.nightconfig.core.utils.WriterSupplier"

export interface $ConfigFormat<C extends $Config = $Config> {
"createConcurrentConfig"(): C
"createConfig"(): C
"createConfig"(supplier0: $Supplier$$Type<$Map<string, any>>): C
"createParser"(): $ConfigParser<C>
"createWriter"(): $ConfigWriter
"initEmptyFile"(writerSupplier0: $WriterSupplier$$Type): void
"initEmptyFile"(file0: $File$$Type): void
"initEmptyFile"(path0: $Path$$Type): void
"isInMemory"(): boolean
"supportsComments"(): boolean
"supportsType"(class0: $Class$$Type<any>): boolean
get "inMemory"(): boolean
}

export namespace $ConfigFormat {
const probejs$$marker: never
}
export abstract class $ConfigFormat$$Static<C extends $Config = $Config> implements $ConfigFormat<C> {
}
}

declare module "com.electronwill.nightconfig.core.file.CommentedFileConfig" {
import { $Config, $Config$$Type } from "com.electronwill.nightconfig.core.Config"
import { $LongSupplier$$Type } from "java.util.function.LongSupplier"
import { $CommentedConfig$Entry } from "com.electronwill.nightconfig.core.CommentedConfig$Entry"
import { $Set } from "java.util.Set"
import { $EnumGetMethod$$Type } from "com.electronwill.nightconfig.core.EnumGetMethod"
import { $Supplier, $Supplier$$Type } from "java.util.function.Supplier"
import { $OptionalInt } from "java.util.OptionalInt"
import { $ConfigFormat, $ConfigFormat$$Type } from "com.electronwill.nightconfig.core.ConfigFormat"
import { $File, $File$$Type } from "java.io.File"
import { $OptionalLong } from "java.util.OptionalLong"
import { $List$$Type } from "java.util.List"
import { $CommentedConfig, $CommentedConfig$$Type } from "com.electronwill.nightconfig.core.CommentedConfig"
import { $UnmodifiableCommentedConfig, $UnmodifiableCommentedConfig$$Type } from "com.electronwill.nightconfig.core.UnmodifiableCommentedConfig"
import { $CommentedFileConfigBuilder } from "com.electronwill.nightconfig.core.file.CommentedFileConfigBuilder"
import { $Enum, $Enum$$Type } from "java.lang.Enum"
import { $Map, $Map$$Type } from "java.util.Map"
import { $Optional } from "java.util.Optional"
import { $Class$$Type } from "java.lang.Class"
import { $Path, $Path$$Type } from "java.nio.file.Path"
import { $FileConfig } from "com.electronwill.nightconfig.core.file.FileConfig"
import { $UnmodifiableConfig$$Type } from "com.electronwill.nightconfig.core.UnmodifiableConfig"
import { $IntSupplier$$Type } from "java.util.function.IntSupplier"
import { $UnmodifiableCommentedConfig$CommentNode, $UnmodifiableCommentedConfig$CommentNode$$Type } from "com.electronwill.nightconfig.core.UnmodifiableCommentedConfig$CommentNode"

export interface $CommentedFileConfig extends $CommentedConfig, $FileConfig {
"add"(string0: string, object1: any): boolean
"add"(list0: $List$$Type<string>, object1: any): boolean
"addAll"(unmodifiableConfig0: $UnmodifiableConfig$$Type): void
"apply"<T>(string0: string): T
"apply"<T>(list0: $List$$Type<string>): T
"clear"(): void
"clearComments"(): void
"close"(): void
"commentMap"(): $Map<string, string>
"configFormat"(): $ConfigFormat<any>
"contains"(string0: string): boolean
"contains"(list0: $List$$Type<string>): boolean
"containsComment"(list0: $List$$Type<string>): boolean
"containsComment"(string0: string): boolean
"entrySet"(): $Set<$CommentedConfig$Entry>
"get"<T>(list0: $List$$Type<string>): T
"get"<T>(string0: string): T
"getByte"(string0: string): byte
"getByte"(list0: $List$$Type<string>): byte
"getByteOrElse"(list0: $List$$Type<string>, byte1: byte): byte
"getByteOrElse"(string0: string, byte1: byte): byte
"getChar"(list0: $List$$Type<string>): character
"getChar"(string0: string): character
"getCharOrElse"(string0: string, char1: character): character
"getCharOrElse"(list0: $List$$Type<string>, char1: character): character
"getComment"(string0: string): string
"getComment"(list0: $List$$Type<string>): string
"getComments"(): $Map<string, $UnmodifiableCommentedConfig$CommentNode>
"getComments"(map0: $Map$$Type<string, $UnmodifiableCommentedConfig$CommentNode$$Type>): void
"getEnum"<T extends $Enum<T>>(list0: $List$$Type<string>, class1: $Class$$Type<T>): T
"getEnum"<T extends $Enum<T>>(list0: $List$$Type<string>, class1: $Class$$Type<T>, enumGetMethod2: $EnumGetMethod$$Type): T
"getEnum"<T extends $Enum<T>>(string0: string, class1: $Class$$Type<T>): T
"getEnum"<T extends $Enum<T>>(string0: string, class1: $Class$$Type<T>, enumGetMethod2: $EnumGetMethod$$Type): T
"getEnumOrElse"<T extends $Enum<T>>(string0: string, class1: $Class$$Type<T>, supplier2: $Supplier$$Type<T>): T
"getEnumOrElse"<T extends $Enum<T>>(list0: $List$$Type<string>, t1: T): T
"getEnumOrElse"<T extends $Enum<T>>(list0: $List$$Type<string>, class1: $Class$$Type<T>, enumGetMethod2: $EnumGetMethod$$Type, supplier3: $Supplier$$Type<T>): T
"getEnumOrElse"<T extends $Enum<T>>(list0: $List$$Type<string>, class1: $Class$$Type<T>, supplier2: $Supplier$$Type<T>): T
"getEnumOrElse"<T extends $Enum<T>>(string0: string, t1: T, enumGetMethod2: $EnumGetMethod$$Type): T
"getEnumOrElse"<T extends $Enum<T>>(string0: string, t1: T): T
"getEnumOrElse"<T extends $Enum<T>>(list0: $List$$Type<string>, t1: T, enumGetMethod2: $EnumGetMethod$$Type): T
"getEnumOrElse"<T extends $Enum<T>>(string0: string, class1: $Class$$Type<T>, enumGetMethod2: $EnumGetMethod$$Type, supplier3: $Supplier$$Type<T>): T
"getFile"(): $File
"getInt"(list0: $List$$Type<string>): integer
"getInt"(string0: string): integer
"getIntOrElse"(string0: string, int1: integer): integer
"getIntOrElse"(list0: $List$$Type<string>, int1: integer): integer
"getIntOrElse"(list0: $List$$Type<string>, intSupplier1: $IntSupplier$$Type): integer
"getIntOrElse"(string0: string, intSupplier1: $IntSupplier$$Type): integer
"getLong"(list0: $List$$Type<string>): long
"getLong"(string0: string): long
"getLongOrElse"(list0: $List$$Type<string>, long1: long): long
"getLongOrElse"(string0: string, long1: long): long
"getLongOrElse"(string0: string, longSupplier1: $LongSupplier$$Type): long
"getLongOrElse"(list0: $List$$Type<string>, longSupplier1: $LongSupplier$$Type): long
"getNioPath"(): $Path
"getOptional"<T>(list0: $List$$Type<string>): $Optional<T>
"getOptional"<T>(string0: string): $Optional<T>
"getOptionalComment"(list0: $List$$Type<string>): $Optional<string>
"getOptionalComment"(string0: string): $Optional<string>
"getOptionalEnum"<T extends $Enum<T>>(list0: $List$$Type<string>, class1: $Class$$Type<T>, enumGetMethod2: $EnumGetMethod$$Type): $Optional<T>
"getOptionalEnum"<T extends $Enum<T>>(list0: $List$$Type<string>, class1: $Class$$Type<T>): $Optional<T>
"getOptionalEnum"<T extends $Enum<T>>(string0: string, class1: $Class$$Type<T>, enumGetMethod2: $EnumGetMethod$$Type): $Optional<T>
"getOptionalEnum"<T extends $Enum<T>>(string0: string, class1: $Class$$Type<T>): $Optional<T>
"getOptionalInt"(list0: $List$$Type<string>): $OptionalInt
"getOptionalInt"(string0: string): $OptionalInt
"getOptionalLong"(string0: string): $OptionalLong
"getOptionalLong"(list0: $List$$Type<string>): $OptionalLong
"getOrElse"<T>(string0: string, supplier1: $Supplier$$Type<T>): T
"getOrElse"<T>(list0: $List$$Type<string>, supplier1: $Supplier$$Type<T>): T
"getOrElse"<T>(list0: $List$$Type<string>, t1: T): T
"getOrElse"<T>(string0: string, t1: T): T
"getRaw"<T>(list0: $List$$Type<string>): T
"getRaw"<T>(string0: string): T
"getShort"(list0: $List$$Type<string>): short
"getShort"(string0: string): short
"getShortOrElse"(list0: $List$$Type<string>, short1: short): short
"getShortOrElse"(string0: string, short1: short): short
"isEmpty"(): boolean
"isNull"(string0: string): boolean
"isNull"(list0: $List$$Type<string>): boolean
"load"(): void
"putAll"(unmodifiableConfig0: $UnmodifiableConfig$$Type): void
"putAllComments"(unmodifiableCommentedConfig0: $UnmodifiableCommentedConfig$$Type): void
"putAllComments"(map0: $Map$$Type<string, $UnmodifiableCommentedConfig$CommentNode$$Type>): void
"remove"<T>(list0: $List$$Type<string>): T
"remove"<T>(string0: string): T
"removeAll"(unmodifiableConfig0: $UnmodifiableConfig$$Type): void
"removeComment"(string0: string): string
"removeComment"(list0: $List$$Type<string>): string
"save"(): void
"set"<T>(string0: string, object1: any): T
"set"<T>(list0: $List$$Type<string>, object1: any): T
"setComment"(string0: string, string1: string): string
"setComment"(list0: $List$$Type<string>, string1: string): string
"size"(): integer
"update"(string0: string, object1: any): void
"update"(list0: $List$$Type<string>, object1: any): void
"valueMap"(): $Map<string, any>
get "comments"(): $Map<string, $UnmodifiableCommentedConfig$CommentNode>
get "file"(): $File
get "nioPath"(): $Path
get "empty"(): boolean
}

export namespace $CommentedFileConfig {
function builder(path0: $Path$$Type, configFormat1: $ConfigFormat$$Type<$CommentedConfig$$Type>): $CommentedFileConfigBuilder
function builder(path0: $Path$$Type): $CommentedFileConfigBuilder
function builder(string0: string): $CommentedFileConfigBuilder
function builder(string0: string, configFormat1: $ConfigFormat$$Type<$CommentedConfig$$Type>): $CommentedFileConfigBuilder
function builder(file0: $File$$Type): $CommentedFileConfigBuilder
function builder(file0: $File$$Type, configFormat1: $ConfigFormat$$Type<$CommentedConfig$$Type>): $CommentedFileConfigBuilder
function concurrentCopy(unmodifiableConfig0: $UnmodifiableConfig$$Type): $CommentedConfig
function concurrentCopy(unmodifiableCommentedConfig0: $UnmodifiableCommentedConfig$$Type, configFormat1: $ConfigFormat$$Type<any>): $CommentedConfig
function concurrentCopy(unmodifiableCommentedConfig0: $UnmodifiableCommentedConfig$$Type): $CommentedConfig
function concurrentCopy(unmodifiableConfig0: $UnmodifiableConfig$$Type, configFormat1: $ConfigFormat$$Type<any>): $CommentedConfig
function copy(unmodifiableCommentedConfig0: $UnmodifiableCommentedConfig$$Type, supplier1: $Supplier$$Type<$Map<string, any>>, configFormat2: $ConfigFormat$$Type<$CommentedConfig$$Type>): $CommentedConfig
function copy(unmodifiableConfig0: $UnmodifiableConfig$$Type, supplier1: $Supplier$$Type<$Map<string, any>>, configFormat2: $ConfigFormat$$Type<any>): $CommentedConfig
function copy(unmodifiableConfig0: $UnmodifiableConfig$$Type, configFormat1: $ConfigFormat$$Type<any>): $CommentedConfig
function copy(unmodifiableConfig0: $UnmodifiableConfig$$Type, supplier1: $Supplier$$Type<$Map<string, any>>): $CommentedConfig
function copy(unmodifiableConfig0: $UnmodifiableConfig$$Type): $CommentedConfig
function copy(unmodifiableCommentedConfig0: $UnmodifiableCommentedConfig$$Type, configFormat1: $ConfigFormat$$Type<any>): $CommentedConfig
function copy(unmodifiableCommentedConfig0: $UnmodifiableCommentedConfig$$Type, supplier1: $Supplier$$Type<$Map<string, any>>): $CommentedConfig
function copy(unmodifiableCommentedConfig0: $UnmodifiableCommentedConfig$$Type): $CommentedConfig
function fake(config0: $Config$$Type): $CommentedConfig
function fake(unmodifiableConfig0: $UnmodifiableConfig$$Type): $UnmodifiableCommentedConfig
function getDefaultMapCreator<T>(boolean0: boolean, boolean1: boolean): $Supplier<$Map<string, T>>
function getDefaultMapCreator<T>(boolean0: boolean): $Supplier<$Map<string, T>>
function inMemory(): $CommentedConfig
function inMemoryConcurrent(): $CommentedConfig
function inMemoryUniversal(): $Config
function inMemoryUniversalConcurrent(): $Config
function isInsertionOrderPreserved(): boolean
function of(file0: $File$$Type, configFormat1: $ConfigFormat$$Type<$CommentedConfig$$Type>): $CommentedFileConfig
function of(file0: $File$$Type): $CommentedFileConfig
function of(string0: string): $CommentedFileConfig
function of(string0: string, configFormat1: $ConfigFormat$$Type<$CommentedConfig$$Type>): $CommentedFileConfig
function of(path0: $Path$$Type, configFormat1: $ConfigFormat$$Type<$CommentedConfig$$Type>): $CommentedFileConfig
function of(path0: $Path$$Type): $CommentedFileConfig
function of(configFormat0: $ConfigFormat$$Type<$CommentedConfig$$Type>): $CommentedConfig
function of(supplier0: $Supplier$$Type<$Map<string, any>>, configFormat1: $ConfigFormat$$Type<$CommentedConfig$$Type>): $CommentedConfig
function ofConcurrent(file0: $File$$Type): $CommentedFileConfig
function ofConcurrent(file0: $File$$Type, configFormat1: $ConfigFormat$$Type<$CommentedConfig$$Type>): $CommentedFileConfig
function ofConcurrent(path0: $Path$$Type): $CommentedFileConfig
function ofConcurrent(path0: $Path$$Type, configFormat1: $ConfigFormat$$Type<$CommentedConfig$$Type>): $CommentedFileConfig
function ofConcurrent(string0: string): $CommentedFileConfig
function ofConcurrent(string0: string, configFormat1: $ConfigFormat$$Type<$CommentedConfig$$Type>): $CommentedFileConfig
function ofConcurrent(configFormat0: $ConfigFormat$$Type<$CommentedConfig$$Type>): $CommentedConfig
function setInsertionOrderPreserved(boolean0: boolean): void
function wrap(map0: $Map$$Type<string, any>, configFormat1: $ConfigFormat$$Type<any>): $CommentedConfig
}
export abstract class $CommentedFileConfig$$Static implements $CommentedFileConfig {
static "builder"(path0: $Path$$Type, configFormat1: $ConfigFormat$$Type<$CommentedConfig$$Type>): $CommentedFileConfigBuilder
static "builder"(path0: $Path$$Type): $CommentedFileConfigBuilder
static "builder"(string0: string): $CommentedFileConfigBuilder
static "builder"(string0: string, configFormat1: $ConfigFormat$$Type<$CommentedConfig$$Type>): $CommentedFileConfigBuilder
static "builder"(file0: $File$$Type): $CommentedFileConfigBuilder
static "builder"(file0: $File$$Type, configFormat1: $ConfigFormat$$Type<$CommentedConfig$$Type>): $CommentedFileConfigBuilder
static "concurrentCopy"(unmodifiableConfig0: $UnmodifiableConfig$$Type): $CommentedConfig
static "concurrentCopy"(unmodifiableCommentedConfig0: $UnmodifiableCommentedConfig$$Type, configFormat1: $ConfigFormat$$Type<any>): $CommentedConfig
static "concurrentCopy"(unmodifiableCommentedConfig0: $UnmodifiableCommentedConfig$$Type): $CommentedConfig
static "concurrentCopy"(unmodifiableConfig0: $UnmodifiableConfig$$Type, configFormat1: $ConfigFormat$$Type<any>): $CommentedConfig
static "copy"(unmodifiableCommentedConfig0: $UnmodifiableCommentedConfig$$Type, supplier1: $Supplier$$Type<$Map<string, any>>, configFormat2: $ConfigFormat$$Type<$CommentedConfig$$Type>): $CommentedConfig
static "copy"(unmodifiableConfig0: $UnmodifiableConfig$$Type, supplier1: $Supplier$$Type<$Map<string, any>>, configFormat2: $ConfigFormat$$Type<any>): $CommentedConfig
static "copy"(unmodifiableConfig0: $UnmodifiableConfig$$Type, configFormat1: $ConfigFormat$$Type<any>): $CommentedConfig
static "copy"(unmodifiableConfig0: $UnmodifiableConfig$$Type, supplier1: $Supplier$$Type<$Map<string, any>>): $CommentedConfig
static "copy"(unmodifiableConfig0: $UnmodifiableConfig$$Type): $CommentedConfig
static "copy"(unmodifiableCommentedConfig0: $UnmodifiableCommentedConfig$$Type, configFormat1: $ConfigFormat$$Type<any>): $CommentedConfig
static "copy"(unmodifiableCommentedConfig0: $UnmodifiableCommentedConfig$$Type, supplier1: $Supplier$$Type<$Map<string, any>>): $CommentedConfig
static "copy"(unmodifiableCommentedConfig0: $UnmodifiableCommentedConfig$$Type): $CommentedConfig
static "fake"(config0: $Config$$Type): $CommentedConfig
static "fake"(unmodifiableConfig0: $UnmodifiableConfig$$Type): $UnmodifiableCommentedConfig
static "getDefaultMapCreator"<T>(boolean0: boolean, boolean1: boolean): $Supplier<$Map<string, T>>
static "getDefaultMapCreator"<T>(boolean0: boolean): $Supplier<$Map<string, T>>
static "inMemory"(): $CommentedConfig
static "inMemoryConcurrent"(): $CommentedConfig
static "inMemoryUniversal"(): $Config
static "inMemoryUniversalConcurrent"(): $Config
static "isInsertionOrderPreserved"(): boolean
static "of"(file0: $File$$Type, configFormat1: $ConfigFormat$$Type<$CommentedConfig$$Type>): $CommentedFileConfig
static "of"(file0: $File$$Type): $CommentedFileConfig
static "of"(string0: string): $CommentedFileConfig
static "of"(string0: string, configFormat1: $ConfigFormat$$Type<$CommentedConfig$$Type>): $CommentedFileConfig
static "of"(path0: $Path$$Type, configFormat1: $ConfigFormat$$Type<$CommentedConfig$$Type>): $CommentedFileConfig
static "of"(path0: $Path$$Type): $CommentedFileConfig
static "of"(configFormat0: $ConfigFormat$$Type<$CommentedConfig$$Type>): $CommentedConfig
static "of"(supplier0: $Supplier$$Type<$Map<string, any>>, configFormat1: $ConfigFormat$$Type<$CommentedConfig$$Type>): $CommentedConfig
static "ofConcurrent"(file0: $File$$Type): $CommentedFileConfig
static "ofConcurrent"(file0: $File$$Type, configFormat1: $ConfigFormat$$Type<$CommentedConfig$$Type>): $CommentedFileConfig
static "ofConcurrent"(path0: $Path$$Type): $CommentedFileConfig
static "ofConcurrent"(path0: $Path$$Type, configFormat1: $ConfigFormat$$Type<$CommentedConfig$$Type>): $CommentedFileConfig
static "ofConcurrent"(string0: string): $CommentedFileConfig
static "ofConcurrent"(string0: string, configFormat1: $ConfigFormat$$Type<$CommentedConfig$$Type>): $CommentedFileConfig
static "ofConcurrent"(configFormat0: $ConfigFormat$$Type<$CommentedConfig$$Type>): $CommentedConfig
static "setInsertionOrderPreserved"(boolean0: boolean): void
static "wrap"(map0: $Map$$Type<string, any>, configFormat1: $ConfigFormat$$Type<any>): $CommentedConfig
}
}

declare module "com.electronwill.nightconfig.core.CommentedConfig" {
import { $Config, $Config$$Type } from "com.electronwill.nightconfig.core.Config"
import { $LongSupplier$$Type } from "java.util.function.LongSupplier"
import { $CommentedConfig$Entry } from "com.electronwill.nightconfig.core.CommentedConfig$Entry"
import { $Set } from "java.util.Set"
import { $EnumGetMethod$$Type } from "com.electronwill.nightconfig.core.EnumGetMethod"
import { $Supplier, $Supplier$$Type } from "java.util.function.Supplier"
import { $OptionalInt } from "java.util.OptionalInt"
import { $ConfigFormat, $ConfigFormat$$Type } from "com.electronwill.nightconfig.core.ConfigFormat"
import { $OptionalLong } from "java.util.OptionalLong"
import { $List$$Type } from "java.util.List"
import { $UnmodifiableCommentedConfig, $UnmodifiableCommentedConfig$$Type } from "com.electronwill.nightconfig.core.UnmodifiableCommentedConfig"
import { $Enum, $Enum$$Type } from "java.lang.Enum"
import { $Map, $Map$$Type } from "java.util.Map"
import { $Optional } from "java.util.Optional"
import { $Class$$Type } from "java.lang.Class"
import { $UnmodifiableConfig$$Type } from "com.electronwill.nightconfig.core.UnmodifiableConfig"
import { $IntSupplier$$Type } from "java.util.function.IntSupplier"
import { $UnmodifiableCommentedConfig$CommentNode, $UnmodifiableCommentedConfig$CommentNode$$Type } from "com.electronwill.nightconfig.core.UnmodifiableCommentedConfig$CommentNode"

export interface $CommentedConfig extends $UnmodifiableCommentedConfig, $Config {
"add"(string0: string, object1: any): boolean
"add"(list0: $List$$Type<string>, object1: any): boolean
"addAll"(unmodifiableConfig0: $UnmodifiableConfig$$Type): void
"apply"<T>(string0: string): T
"apply"<T>(list0: $List$$Type<string>): T
"clear"(): void
"clearComments"(): void
"commentMap"(): $Map<string, string>
"configFormat"(): $ConfigFormat<any>
"contains"(string0: string): boolean
"contains"(list0: $List$$Type<string>): boolean
"containsComment"(list0: $List$$Type<string>): boolean
"containsComment"(string0: string): boolean
"entrySet"(): $Set<$CommentedConfig$Entry>
"get"<T>(list0: $List$$Type<string>): T
"get"<T>(string0: string): T
"getByte"(string0: string): byte
"getByte"(list0: $List$$Type<string>): byte
"getByteOrElse"(list0: $List$$Type<string>, byte1: byte): byte
"getByteOrElse"(string0: string, byte1: byte): byte
"getChar"(list0: $List$$Type<string>): character
"getChar"(string0: string): character
"getCharOrElse"(string0: string, char1: character): character
"getCharOrElse"(list0: $List$$Type<string>, char1: character): character
"getComment"(string0: string): string
"getComment"(list0: $List$$Type<string>): string
"getComments"(): $Map<string, $UnmodifiableCommentedConfig$CommentNode>
"getComments"(map0: $Map$$Type<string, $UnmodifiableCommentedConfig$CommentNode$$Type>): void
"getEnum"<T extends $Enum<T>>(list0: $List$$Type<string>, class1: $Class$$Type<T>): T
"getEnum"<T extends $Enum<T>>(list0: $List$$Type<string>, class1: $Class$$Type<T>, enumGetMethod2: $EnumGetMethod$$Type): T
"getEnum"<T extends $Enum<T>>(string0: string, class1: $Class$$Type<T>): T
"getEnum"<T extends $Enum<T>>(string0: string, class1: $Class$$Type<T>, enumGetMethod2: $EnumGetMethod$$Type): T
"getEnumOrElse"<T extends $Enum<T>>(string0: string, class1: $Class$$Type<T>, supplier2: $Supplier$$Type<T>): T
"getEnumOrElse"<T extends $Enum<T>>(list0: $List$$Type<string>, t1: T): T
"getEnumOrElse"<T extends $Enum<T>>(list0: $List$$Type<string>, class1: $Class$$Type<T>, enumGetMethod2: $EnumGetMethod$$Type, supplier3: $Supplier$$Type<T>): T
"getEnumOrElse"<T extends $Enum<T>>(list0: $List$$Type<string>, class1: $Class$$Type<T>, supplier2: $Supplier$$Type<T>): T
"getEnumOrElse"<T extends $Enum<T>>(string0: string, t1: T, enumGetMethod2: $EnumGetMethod$$Type): T
"getEnumOrElse"<T extends $Enum<T>>(string0: string, t1: T): T
"getEnumOrElse"<T extends $Enum<T>>(list0: $List$$Type<string>, t1: T, enumGetMethod2: $EnumGetMethod$$Type): T
"getEnumOrElse"<T extends $Enum<T>>(string0: string, class1: $Class$$Type<T>, enumGetMethod2: $EnumGetMethod$$Type, supplier3: $Supplier$$Type<T>): T
"getInt"(list0: $List$$Type<string>): integer
"getInt"(string0: string): integer
"getIntOrElse"(string0: string, int1: integer): integer
"getIntOrElse"(list0: $List$$Type<string>, int1: integer): integer
"getIntOrElse"(list0: $List$$Type<string>, intSupplier1: $IntSupplier$$Type): integer
"getIntOrElse"(string0: string, intSupplier1: $IntSupplier$$Type): integer
"getLong"(list0: $List$$Type<string>): long
"getLong"(string0: string): long
"getLongOrElse"(list0: $List$$Type<string>, long1: long): long
"getLongOrElse"(string0: string, long1: long): long
"getLongOrElse"(string0: string, longSupplier1: $LongSupplier$$Type): long
"getLongOrElse"(list0: $List$$Type<string>, longSupplier1: $LongSupplier$$Type): long
"getOptional"<T>(list0: $List$$Type<string>): $Optional<T>
"getOptional"<T>(string0: string): $Optional<T>
"getOptionalComment"(list0: $List$$Type<string>): $Optional<string>
"getOptionalComment"(string0: string): $Optional<string>
"getOptionalEnum"<T extends $Enum<T>>(list0: $List$$Type<string>, class1: $Class$$Type<T>, enumGetMethod2: $EnumGetMethod$$Type): $Optional<T>
"getOptionalEnum"<T extends $Enum<T>>(list0: $List$$Type<string>, class1: $Class$$Type<T>): $Optional<T>
"getOptionalEnum"<T extends $Enum<T>>(string0: string, class1: $Class$$Type<T>, enumGetMethod2: $EnumGetMethod$$Type): $Optional<T>
"getOptionalEnum"<T extends $Enum<T>>(string0: string, class1: $Class$$Type<T>): $Optional<T>
"getOptionalInt"(list0: $List$$Type<string>): $OptionalInt
"getOptionalInt"(string0: string): $OptionalInt
"getOptionalLong"(string0: string): $OptionalLong
"getOptionalLong"(list0: $List$$Type<string>): $OptionalLong
"getOrElse"<T>(string0: string, supplier1: $Supplier$$Type<T>): T
"getOrElse"<T>(list0: $List$$Type<string>, supplier1: $Supplier$$Type<T>): T
"getOrElse"<T>(list0: $List$$Type<string>, t1: T): T
"getOrElse"<T>(string0: string, t1: T): T
"getRaw"<T>(list0: $List$$Type<string>): T
"getRaw"<T>(string0: string): T
"getShort"(list0: $List$$Type<string>): short
"getShort"(string0: string): short
"getShortOrElse"(list0: $List$$Type<string>, short1: short): short
"getShortOrElse"(string0: string, short1: short): short
"isEmpty"(): boolean
"isNull"(string0: string): boolean
"isNull"(list0: $List$$Type<string>): boolean
"putAll"(unmodifiableConfig0: $UnmodifiableConfig$$Type): void
"putAllComments"(unmodifiableCommentedConfig0: $UnmodifiableCommentedConfig$$Type): void
"putAllComments"(map0: $Map$$Type<string, $UnmodifiableCommentedConfig$CommentNode$$Type>): void
"remove"<T>(list0: $List$$Type<string>): T
"remove"<T>(string0: string): T
"removeAll"(unmodifiableConfig0: $UnmodifiableConfig$$Type): void
"removeComment"(string0: string): string
"removeComment"(list0: $List$$Type<string>): string
"set"<T>(string0: string, object1: any): T
"set"<T>(list0: $List$$Type<string>, object1: any): T
"setComment"(string0: string, string1: string): string
"setComment"(list0: $List$$Type<string>, string1: string): string
"size"(): integer
"update"(string0: string, object1: any): void
"update"(list0: $List$$Type<string>, object1: any): void
"valueMap"(): $Map<string, any>
get "comments"(): $Map<string, $UnmodifiableCommentedConfig$CommentNode>
get "empty"(): boolean
}

export namespace $CommentedConfig {
function concurrentCopy(unmodifiableConfig0: $UnmodifiableConfig$$Type): $CommentedConfig
function concurrentCopy(unmodifiableCommentedConfig0: $UnmodifiableCommentedConfig$$Type, configFormat1: $ConfigFormat$$Type<any>): $CommentedConfig
function concurrentCopy(unmodifiableCommentedConfig0: $UnmodifiableCommentedConfig$$Type): $CommentedConfig
function concurrentCopy(unmodifiableConfig0: $UnmodifiableConfig$$Type, configFormat1: $ConfigFormat$$Type<any>): $CommentedConfig
function copy(unmodifiableCommentedConfig0: $UnmodifiableCommentedConfig$$Type, supplier1: $Supplier$$Type<$Map<string, any>>, configFormat2: $ConfigFormat$$Type<$CommentedConfig$$Type>): $CommentedConfig
function copy(unmodifiableConfig0: $UnmodifiableConfig$$Type, supplier1: $Supplier$$Type<$Map<string, any>>, configFormat2: $ConfigFormat$$Type<any>): $CommentedConfig
function copy(unmodifiableConfig0: $UnmodifiableConfig$$Type, configFormat1: $ConfigFormat$$Type<any>): $CommentedConfig
function copy(unmodifiableConfig0: $UnmodifiableConfig$$Type, supplier1: $Supplier$$Type<$Map<string, any>>): $CommentedConfig
function copy(unmodifiableConfig0: $UnmodifiableConfig$$Type): $CommentedConfig
function copy(unmodifiableCommentedConfig0: $UnmodifiableCommentedConfig$$Type, configFormat1: $ConfigFormat$$Type<any>): $CommentedConfig
function copy(unmodifiableCommentedConfig0: $UnmodifiableCommentedConfig$$Type, supplier1: $Supplier$$Type<$Map<string, any>>): $CommentedConfig
function copy(unmodifiableCommentedConfig0: $UnmodifiableCommentedConfig$$Type): $CommentedConfig
function fake(config0: $Config$$Type): $CommentedConfig
function fake(unmodifiableConfig0: $UnmodifiableConfig$$Type): $UnmodifiableCommentedConfig
function getDefaultMapCreator<T>(boolean0: boolean, boolean1: boolean): $Supplier<$Map<string, T>>
function getDefaultMapCreator<T>(boolean0: boolean): $Supplier<$Map<string, T>>
function inMemory(): $CommentedConfig
function inMemoryConcurrent(): $CommentedConfig
function inMemoryUniversal(): $Config
function inMemoryUniversalConcurrent(): $Config
function isInsertionOrderPreserved(): boolean
function of(configFormat0: $ConfigFormat$$Type<$CommentedConfig$$Type>): $CommentedConfig
function of(supplier0: $Supplier$$Type<$Map<string, any>>, configFormat1: $ConfigFormat$$Type<$CommentedConfig$$Type>): $CommentedConfig
function ofConcurrent(configFormat0: $ConfigFormat$$Type<$CommentedConfig$$Type>): $CommentedConfig
function setInsertionOrderPreserved(boolean0: boolean): void
function wrap(map0: $Map$$Type<string, any>, configFormat1: $ConfigFormat$$Type<any>): $CommentedConfig
}
export abstract class $CommentedConfig$$Static implements $CommentedConfig {
static "concurrentCopy"(unmodifiableConfig0: $UnmodifiableConfig$$Type): $CommentedConfig
static "concurrentCopy"(unmodifiableCommentedConfig0: $UnmodifiableCommentedConfig$$Type, configFormat1: $ConfigFormat$$Type<any>): $CommentedConfig
static "concurrentCopy"(unmodifiableCommentedConfig0: $UnmodifiableCommentedConfig$$Type): $CommentedConfig
static "concurrentCopy"(unmodifiableConfig0: $UnmodifiableConfig$$Type, configFormat1: $ConfigFormat$$Type<any>): $CommentedConfig
static "copy"(unmodifiableCommentedConfig0: $UnmodifiableCommentedConfig$$Type, supplier1: $Supplier$$Type<$Map<string, any>>, configFormat2: $ConfigFormat$$Type<$CommentedConfig$$Type>): $CommentedConfig
static "copy"(unmodifiableConfig0: $UnmodifiableConfig$$Type, supplier1: $Supplier$$Type<$Map<string, any>>, configFormat2: $ConfigFormat$$Type<any>): $CommentedConfig
static "copy"(unmodifiableConfig0: $UnmodifiableConfig$$Type, configFormat1: $ConfigFormat$$Type<any>): $CommentedConfig
static "copy"(unmodifiableConfig0: $UnmodifiableConfig$$Type, supplier1: $Supplier$$Type<$Map<string, any>>): $CommentedConfig
static "copy"(unmodifiableConfig0: $UnmodifiableConfig$$Type): $CommentedConfig
static "copy"(unmodifiableCommentedConfig0: $UnmodifiableCommentedConfig$$Type, configFormat1: $ConfigFormat$$Type<any>): $CommentedConfig
static "copy"(unmodifiableCommentedConfig0: $UnmodifiableCommentedConfig$$Type, supplier1: $Supplier$$Type<$Map<string, any>>): $CommentedConfig
static "copy"(unmodifiableCommentedConfig0: $UnmodifiableCommentedConfig$$Type): $CommentedConfig
static "fake"(config0: $Config$$Type): $CommentedConfig
static "fake"(unmodifiableConfig0: $UnmodifiableConfig$$Type): $UnmodifiableCommentedConfig
static "getDefaultMapCreator"<T>(boolean0: boolean, boolean1: boolean): $Supplier<$Map<string, T>>
static "getDefaultMapCreator"<T>(boolean0: boolean): $Supplier<$Map<string, T>>
static "inMemory"(): $CommentedConfig
static "inMemoryConcurrent"(): $CommentedConfig
static "inMemoryUniversal"(): $Config
static "inMemoryUniversalConcurrent"(): $Config
static "isInsertionOrderPreserved"(): boolean
static "of"(configFormat0: $ConfigFormat$$Type<$CommentedConfig$$Type>): $CommentedConfig
static "of"(supplier0: $Supplier$$Type<$Map<string, any>>, configFormat1: $ConfigFormat$$Type<$CommentedConfig$$Type>): $CommentedConfig
static "ofConcurrent"(configFormat0: $ConfigFormat$$Type<$CommentedConfig$$Type>): $CommentedConfig
static "setInsertionOrderPreserved"(boolean0: boolean): void
static "wrap"(map0: $Map$$Type<string, any>, configFormat1: $ConfigFormat$$Type<any>): $CommentedConfig
}
}

declare module "com.electronwill.nightconfig.core.ConfigSpec$CorrectionAction" {
import { $Enum } from "java.lang.Enum"

export class $ConfigSpec$CorrectionAction extends $Enum<$ConfigSpec$CorrectionAction> {
static readonly "ADD": $ConfigSpec$CorrectionAction
static readonly "REMOVE": $ConfigSpec$CorrectionAction
static readonly "REPLACE": $ConfigSpec$CorrectionAction

public static "valueOf"(string0: string): $ConfigSpec$CorrectionAction
public static "values"(): $ConfigSpec$CorrectionAction[]
}
}

declare module "com.electronwill.nightconfig.core.Config$Entry" {
import { $OptionalLong } from "java.util.OptionalLong"
import { $Optional } from "java.util.Optional"
import { $UnmodifiableConfig$Entry } from "com.electronwill.nightconfig.core.UnmodifiableConfig$Entry"
import { $OptionalInt } from "java.util.OptionalInt"

export interface $Config$Entry extends $UnmodifiableConfig$Entry {
"getByte"(): byte
"getByteOrElse"(byte0: byte): byte
"getChar"(): character
"getCharOrElse"(char0: character): character
"getInt"(): integer
"getIntOrElse"(int0: integer): integer
"getKey"(): string
"getLong"(): long
"getLongOrElse"(long0: long): long
"getOptional"<T>(): $Optional<T>
"getOptionalInt"(): $OptionalInt
"getOptionalLong"(): $OptionalLong
"getOrElse"<T>(t0: T): T
"getRawValue"<T>(): T
"getShort"(): short
"getShortOrElse"(short0: short): short
"getValue"<T>(): T
"isNull"(): boolean
"setValue"<T>(object0: any): T
get "byte"(): byte
get "char"(): character
get "int"(): integer
get "key"(): string
get "long"(): long
get "optional"(): $Optional<T>
get "optionalInt"(): $OptionalInt
get "optionalLong"(): $OptionalLong
get "rawValue"(): T
get "short"(): short
get "value"(): T
get "null"(): boolean
set "value"(value: any)
}

export namespace $Config$Entry {
const probejs$$marker: never
}
export abstract class $Config$Entry$$Static implements $Config$Entry {
}
}

declare module "com.electronwill.nightconfig.core.file.FileNotFoundAction" {
import { $URL$$Type } from "java.net.URL"
import { $Path$$Type } from "java.nio.file.Path"
import { $File$$Type } from "java.io.File"
import { $ConfigFormat$$Type } from "com.electronwill.nightconfig.core.ConfigFormat"
import { $InputStream$$Type } from "java.io.InputStream"

export interface $FileNotFoundAction {
"run"(path0: $Path$$Type, configFormat1: $ConfigFormat$$Type<any>): boolean
}

export namespace $FileNotFoundAction {
const CREATE_EMPTY: $FileNotFoundAction
const READ_NOTHING: $FileNotFoundAction
const THROW_ERROR: $FileNotFoundAction
function copyData(inputStream0: $InputStream$$Type): $FileNotFoundAction
function copyData(file0: $File$$Type): $FileNotFoundAction
function copyData(uRL0: $URL$$Type): $FileNotFoundAction
function copyData(path0: $Path$$Type): $FileNotFoundAction
function copyResource(string0: string): $FileNotFoundAction
}
export abstract class $FileNotFoundAction$$Static implements $FileNotFoundAction {
static readonly "CREATE_EMPTY": $FileNotFoundAction
static readonly "READ_NOTHING": $FileNotFoundAction
static readonly "THROW_ERROR": $FileNotFoundAction

static "copyData"(inputStream0: $InputStream$$Type): $FileNotFoundAction
static "copyData"(file0: $File$$Type): $FileNotFoundAction
static "copyData"(uRL0: $URL$$Type): $FileNotFoundAction
static "copyData"(path0: $Path$$Type): $FileNotFoundAction
static "copyResource"(string0: string): $FileNotFoundAction
}
}

declare module "com.electronwill.nightconfig.core.io.ConfigParser" {
import { $Config, $Config$$Type } from "com.electronwill.nightconfig.core.Config"
import { $Charset$$Type } from "java.nio.charset.Charset"
import { $FileNotFoundAction$$Type } from "com.electronwill.nightconfig.core.file.FileNotFoundAction"
import { $URL$$Type } from "java.net.URL"
import { $Reader$$Type } from "java.io.Reader"
import { $Path$$Type } from "java.nio.file.Path"
import { $ConfigFormat } from "com.electronwill.nightconfig.core.ConfigFormat"
import { $File$$Type } from "java.io.File"
import { $ParsingMode$$Type } from "com.electronwill.nightconfig.core.io.ParsingMode"
import { $InputStream$$Type } from "java.io.InputStream"

export interface $ConfigParser<C extends $Config = $Config> {
"getFormat"(): $ConfigFormat<C>
"parse"(file0: $File$$Type, config1: $Config$$Type, parsingMode2: $ParsingMode$$Type, fileNotFoundAction3: $FileNotFoundAction$$Type, charset4: $Charset$$Type): void
"parse"(path0: $Path$$Type, fileNotFoundAction1: $FileNotFoundAction$$Type): C
"parse"(path0: $Path$$Type, fileNotFoundAction1: $FileNotFoundAction$$Type, charset2: $Charset$$Type): C
"parse"(file0: $File$$Type, config1: $Config$$Type, parsingMode2: $ParsingMode$$Type, fileNotFoundAction3: $FileNotFoundAction$$Type): void
"parse"(file0: $File$$Type, fileNotFoundAction1: $FileNotFoundAction$$Type, charset2: $Charset$$Type): C
"parse"(uRL0: $URL$$Type, config1: $Config$$Type, parsingMode2: $ParsingMode$$Type): void
"parse"(uRL0: $URL$$Type): C
"parse"(path0: $Path$$Type, config1: $Config$$Type, parsingMode2: $ParsingMode$$Type, fileNotFoundAction3: $FileNotFoundAction$$Type, charset4: $Charset$$Type): void
"parse"(path0: $Path$$Type, config1: $Config$$Type, parsingMode2: $ParsingMode$$Type, fileNotFoundAction3: $FileNotFoundAction$$Type): void
"parse"(inputStream0: $InputStream$$Type): C
"parse"(string0: string, config1: $Config$$Type, parsingMode2: $ParsingMode$$Type): void
"parse"(string0: string): C
"parse"(reader0: $Reader$$Type, config1: $Config$$Type, parsingMode2: $ParsingMode$$Type): void
"parse"(reader0: $Reader$$Type): C
"parse"(file0: $File$$Type, fileNotFoundAction1: $FileNotFoundAction$$Type): C
"parse"(inputStream0: $InputStream$$Type, config1: $Config$$Type, parsingMode2: $ParsingMode$$Type, charset3: $Charset$$Type): void
"parse"(inputStream0: $InputStream$$Type, config1: $Config$$Type, parsingMode2: $ParsingMode$$Type): void
"parse"(inputStream0: $InputStream$$Type, charset1: $Charset$$Type): C
get "format"(): $ConfigFormat<C>
}

export namespace $ConfigParser {
const probejs$$marker: never
}
export abstract class $ConfigParser$$Static<C extends $Config = $Config> implements $ConfigParser<C> {
}
}

declare module "com.electronwill.nightconfig.core.io.ConfigWriter" {
import { $OutputStream$$Type } from "java.io.OutputStream"
import { $Charset$$Type } from "java.nio.charset.Charset"
import { $URL$$Type } from "java.net.URL"
import { $WritingMode$$Type } from "com.electronwill.nightconfig.core.io.WritingMode"
import { $Writer$$Type } from "java.io.Writer"
import { $Path$$Type } from "java.nio.file.Path"
import { $UnmodifiableConfig$$Type } from "com.electronwill.nightconfig.core.UnmodifiableConfig"
import { $File$$Type } from "java.io.File"

export interface $ConfigWriter {
"write"(unmodifiableConfig0: $UnmodifiableConfig$$Type, file1: $File$$Type, writingMode2: $WritingMode$$Type): void
"write"(unmodifiableConfig0: $UnmodifiableConfig$$Type, file1: $File$$Type, writingMode2: $WritingMode$$Type, charset3: $Charset$$Type): void
"write"(unmodifiableConfig0: $UnmodifiableConfig$$Type, uRL1: $URL$$Type): void
"write"(unmodifiableConfig0: $UnmodifiableConfig$$Type, writer1: $Writer$$Type): void
"write"(unmodifiableConfig0: $UnmodifiableConfig$$Type, outputStream1: $OutputStream$$Type, charset2: $Charset$$Type): void
"write"(unmodifiableConfig0: $UnmodifiableConfig$$Type, outputStream1: $OutputStream$$Type): void
"write"(unmodifiableConfig0: $UnmodifiableConfig$$Type, path1: $Path$$Type, writingMode2: $WritingMode$$Type): void
"write"(unmodifiableConfig0: $UnmodifiableConfig$$Type, path1: $Path$$Type, writingMode2: $WritingMode$$Type, charset3: $Charset$$Type): void
"writeToString"(unmodifiableConfig0: $UnmodifiableConfig$$Type): string
}

export namespace $ConfigWriter {
const probejs$$marker: never
}
export abstract class $ConfigWriter$$Static implements $ConfigWriter {
}
}

declare module "com.electronwill.nightconfig.core.utils.WriterSupplier" {
import { $Writer } from "java.io.Writer"

export interface $WriterSupplier {
"get"(): $Writer
}

export namespace $WriterSupplier {
const probejs$$marker: never
}
export abstract class $WriterSupplier$$Static implements $WriterSupplier {
}
}

declare module "com.electronwill.nightconfig.core.file.GenericBuilder" {
import { $Config } from "com.electronwill.nightconfig.core.Config"
import { $Charset$$Type } from "java.nio.charset.Charset"
import { $URL$$Type } from "java.net.URL"
import { $FileNotFoundAction$$Type } from "com.electronwill.nightconfig.core.file.FileNotFoundAction"
import { $Map } from "java.util.Map"
import { $WritingMode$$Type } from "com.electronwill.nightconfig.core.io.WritingMode"
import { $Supplier$$Type } from "java.util.function.Supplier"
import { $FileConfig } from "com.electronwill.nightconfig.core.file.FileConfig"
import { $Path$$Type } from "java.nio.file.Path"
import { $File$$Type } from "java.io.File"
import { $ParsingMode$$Type } from "com.electronwill.nightconfig.core.io.ParsingMode"

export class $GenericBuilder<Base extends $Config = $Config, Result extends $FileConfig = $FileConfig> {
public "autoreload"(): $GenericBuilder<Base, Result>
public "autosave"(): $GenericBuilder<Base, Result>
public "backingMapCreator"(supplier0: $Supplier$$Type<$Map<string, any>>): $GenericBuilder<Base, Result>
public "build"(): Result
public "charset"(charset0: $Charset$$Type): $GenericBuilder<Base, Result>
public "concurrent"(): $GenericBuilder<Base, Result>
public "defaultData"(file0: $File$$Type): $GenericBuilder<Base, Result>
public "defaultData"(uRL0: $URL$$Type): $GenericBuilder<Base, Result>
public "defaultData"(path0: $Path$$Type): $GenericBuilder<Base, Result>
public "defaultResource"(string0: string): $GenericBuilder<Base, Result>
public "onFileNotFound"(fileNotFoundAction0: $FileNotFoundAction$$Type): $GenericBuilder<Base, Result>
public "parsingMode"(parsingMode0: $ParsingMode$$Type): $GenericBuilder<Base, Result>
public "preserveInsertionOrder"(): $GenericBuilder<Base, Result>
public "sync"(): $GenericBuilder<Base, Result>
public "writingMode"(writingMode0: $WritingMode$$Type): $GenericBuilder<Base, Result>
}
}

declare module "com.electronwill.nightconfig.core.CommentedConfig$Entry" {
import { $OptionalLong } from "java.util.OptionalLong"
import { $UnmodifiableCommentedConfig$Entry } from "com.electronwill.nightconfig.core.UnmodifiableCommentedConfig$Entry"
import { $Optional } from "java.util.Optional"
import { $Config$Entry } from "com.electronwill.nightconfig.core.Config$Entry"
import { $OptionalInt } from "java.util.OptionalInt"

export interface $CommentedConfig$Entry extends $Config$Entry, $UnmodifiableCommentedConfig$Entry {
"getByte"(): byte
"getByteOrElse"(byte0: byte): byte
"getChar"(): character
"getCharOrElse"(char0: character): character
"getComment"(): string
"getInt"(): integer
"getIntOrElse"(int0: integer): integer
"getKey"(): string
"getLong"(): long
"getLongOrElse"(long0: long): long
"getOptional"<T>(): $Optional<T>
"getOptionalInt"(): $OptionalInt
"getOptionalLong"(): $OptionalLong
"getOrElse"<T>(t0: T): T
"getRawValue"<T>(): T
"getShort"(): short
"getShortOrElse"(short0: short): short
"getValue"<T>(): T
"isNull"(): boolean
"removeComment"(): string
"setComment"(string0: string): string
"setValue"<T>(object0: any): T
get "byte"(): byte
get "char"(): character
get "comment"(): string
get "int"(): integer
get "key"(): string
get "long"(): long
get "optional"(): $Optional<T>
get "optionalInt"(): $OptionalInt
get "optionalLong"(): $OptionalLong
get "rawValue"(): T
get "short"(): short
get "value"(): T
get "null"(): boolean
set "comment"(value: string)
set "value"(value: any)
}

export namespace $CommentedConfig$Entry {
const probejs$$marker: never
}
export abstract class $CommentedConfig$Entry$$Static implements $CommentedConfig$Entry {
}
}

declare module "com.electronwill.nightconfig.core.io.ParsingMode" {
import { $Config$$Type } from "com.electronwill.nightconfig.core.Config"
import { $List$$Type } from "java.util.List"
import { $Enum } from "java.lang.Enum"
import { $Map$$Type } from "java.util.Map"

export class $ParsingMode extends $Enum<$ParsingMode> {
static readonly "ADD": $ParsingMode
static readonly "MERGE": $ParsingMode
static readonly "REPLACE": $ParsingMode

public "prepareParsing"(config0: $Config$$Type): void
public "put"(map0: $Map$$Type<string, any>, string1: string, object2: any): any
public "put"(config0: $Config$$Type, string1: string, object2: any): any
public "put"(config0: $Config$$Type, list1: $List$$Type<string>, object2: any): any
public static "valueOf"(string0: string): $ParsingMode
public static "values"(): $ParsingMode[]
}
}

declare module "com.electronwill.nightconfig.core.UnmodifiableCommentedConfig" {
import { $LongSupplier$$Type } from "java.util.function.LongSupplier"
import { $Set } from "java.util.Set"
import { $EnumGetMethod$$Type } from "com.electronwill.nightconfig.core.EnumGetMethod"
import { $Supplier$$Type } from "java.util.function.Supplier"
import { $OptionalInt } from "java.util.OptionalInt"
import { $ConfigFormat } from "com.electronwill.nightconfig.core.ConfigFormat"
import { $OptionalLong } from "java.util.OptionalLong"
import { $List$$Type } from "java.util.List"
import { $Enum, $Enum$$Type } from "java.lang.Enum"
import { $Map, $Map$$Type } from "java.util.Map"
import { $UnmodifiableCommentedConfig$Entry } from "com.electronwill.nightconfig.core.UnmodifiableCommentedConfig$Entry"
import { $Optional } from "java.util.Optional"
import { $Class$$Type } from "java.lang.Class"
import { $UnmodifiableConfig, $UnmodifiableConfig$$Type } from "com.electronwill.nightconfig.core.UnmodifiableConfig"
import { $IntSupplier$$Type } from "java.util.function.IntSupplier"
import { $UnmodifiableCommentedConfig$CommentNode, $UnmodifiableCommentedConfig$CommentNode$$Type } from "com.electronwill.nightconfig.core.UnmodifiableCommentedConfig$CommentNode"

export interface $UnmodifiableCommentedConfig extends $UnmodifiableConfig {
"apply"<T>(string0: string): T
"apply"<T>(list0: $List$$Type<string>): T
"commentMap"(): $Map<string, string>
"configFormat"(): $ConfigFormat<any>
"contains"(string0: string): boolean
"contains"(list0: $List$$Type<string>): boolean
"containsComment"(list0: $List$$Type<string>): boolean
"containsComment"(string0: string): boolean
"entrySet"(): $Set<$UnmodifiableCommentedConfig$Entry>
"get"<T>(list0: $List$$Type<string>): T
"get"<T>(string0: string): T
"getByte"(string0: string): byte
"getByte"(list0: $List$$Type<string>): byte
"getByteOrElse"(list0: $List$$Type<string>, byte1: byte): byte
"getByteOrElse"(string0: string, byte1: byte): byte
"getChar"(list0: $List$$Type<string>): character
"getChar"(string0: string): character
"getCharOrElse"(string0: string, char1: character): character
"getCharOrElse"(list0: $List$$Type<string>, char1: character): character
"getComment"(string0: string): string
"getComment"(list0: $List$$Type<string>): string
"getComments"(): $Map<string, $UnmodifiableCommentedConfig$CommentNode>
"getComments"(map0: $Map$$Type<string, $UnmodifiableCommentedConfig$CommentNode$$Type>): void
"getEnum"<T extends $Enum<T>>(list0: $List$$Type<string>, class1: $Class$$Type<T>): T
"getEnum"<T extends $Enum<T>>(list0: $List$$Type<string>, class1: $Class$$Type<T>, enumGetMethod2: $EnumGetMethod$$Type): T
"getEnum"<T extends $Enum<T>>(string0: string, class1: $Class$$Type<T>): T
"getEnum"<T extends $Enum<T>>(string0: string, class1: $Class$$Type<T>, enumGetMethod2: $EnumGetMethod$$Type): T
"getEnumOrElse"<T extends $Enum<T>>(string0: string, class1: $Class$$Type<T>, supplier2: $Supplier$$Type<T>): T
"getEnumOrElse"<T extends $Enum<T>>(list0: $List$$Type<string>, t1: T): T
"getEnumOrElse"<T extends $Enum<T>>(list0: $List$$Type<string>, class1: $Class$$Type<T>, enumGetMethod2: $EnumGetMethod$$Type, supplier3: $Supplier$$Type<T>): T
"getEnumOrElse"<T extends $Enum<T>>(list0: $List$$Type<string>, class1: $Class$$Type<T>, supplier2: $Supplier$$Type<T>): T
"getEnumOrElse"<T extends $Enum<T>>(string0: string, t1: T, enumGetMethod2: $EnumGetMethod$$Type): T
"getEnumOrElse"<T extends $Enum<T>>(string0: string, t1: T): T
"getEnumOrElse"<T extends $Enum<T>>(list0: $List$$Type<string>, t1: T, enumGetMethod2: $EnumGetMethod$$Type): T
"getEnumOrElse"<T extends $Enum<T>>(string0: string, class1: $Class$$Type<T>, enumGetMethod2: $EnumGetMethod$$Type, supplier3: $Supplier$$Type<T>): T
"getInt"(list0: $List$$Type<string>): integer
"getInt"(string0: string): integer
"getIntOrElse"(string0: string, int1: integer): integer
"getIntOrElse"(list0: $List$$Type<string>, int1: integer): integer
"getIntOrElse"(list0: $List$$Type<string>, intSupplier1: $IntSupplier$$Type): integer
"getIntOrElse"(string0: string, intSupplier1: $IntSupplier$$Type): integer
"getLong"(list0: $List$$Type<string>): long
"getLong"(string0: string): long
"getLongOrElse"(list0: $List$$Type<string>, long1: long): long
"getLongOrElse"(string0: string, long1: long): long
"getLongOrElse"(string0: string, longSupplier1: $LongSupplier$$Type): long
"getLongOrElse"(list0: $List$$Type<string>, longSupplier1: $LongSupplier$$Type): long
"getOptional"<T>(list0: $List$$Type<string>): $Optional<T>
"getOptional"<T>(string0: string): $Optional<T>
"getOptionalComment"(list0: $List$$Type<string>): $Optional<string>
"getOptionalComment"(string0: string): $Optional<string>
"getOptionalEnum"<T extends $Enum<T>>(list0: $List$$Type<string>, class1: $Class$$Type<T>, enumGetMethod2: $EnumGetMethod$$Type): $Optional<T>
"getOptionalEnum"<T extends $Enum<T>>(list0: $List$$Type<string>, class1: $Class$$Type<T>): $Optional<T>
"getOptionalEnum"<T extends $Enum<T>>(string0: string, class1: $Class$$Type<T>, enumGetMethod2: $EnumGetMethod$$Type): $Optional<T>
"getOptionalEnum"<T extends $Enum<T>>(string0: string, class1: $Class$$Type<T>): $Optional<T>
"getOptionalInt"(list0: $List$$Type<string>): $OptionalInt
"getOptionalInt"(string0: string): $OptionalInt
"getOptionalLong"(string0: string): $OptionalLong
"getOptionalLong"(list0: $List$$Type<string>): $OptionalLong
"getOrElse"<T>(string0: string, supplier1: $Supplier$$Type<T>): T
"getOrElse"<T>(list0: $List$$Type<string>, supplier1: $Supplier$$Type<T>): T
"getOrElse"<T>(list0: $List$$Type<string>, t1: T): T
"getOrElse"<T>(string0: string, t1: T): T
"getRaw"<T>(list0: $List$$Type<string>): T
"getRaw"<T>(string0: string): T
"getShort"(list0: $List$$Type<string>): short
"getShort"(string0: string): short
"getShortOrElse"(list0: $List$$Type<string>, short1: short): short
"getShortOrElse"(string0: string, short1: short): short
"isEmpty"(): boolean
"isNull"(string0: string): boolean
"isNull"(list0: $List$$Type<string>): boolean
"size"(): integer
"valueMap"(): $Map<string, any>
get "comments"(): $Map<string, $UnmodifiableCommentedConfig$CommentNode>
get "empty"(): boolean
}

export namespace $UnmodifiableCommentedConfig {
function fake(unmodifiableConfig0: $UnmodifiableConfig$$Type): $UnmodifiableCommentedConfig
}
export abstract class $UnmodifiableCommentedConfig$$Static implements $UnmodifiableCommentedConfig {
static "fake"(unmodifiableConfig0: $UnmodifiableConfig$$Type): $UnmodifiableCommentedConfig
}
}

declare module "com.electronwill.nightconfig.core.utils.UnmodifiableConfigWrapper" {
import { $LongSupplier$$Type } from "java.util.function.LongSupplier"
import { $Set } from "java.util.Set"
import { $EnumGetMethod$$Type } from "com.electronwill.nightconfig.core.EnumGetMethod"
import { $Supplier$$Type } from "java.util.function.Supplier"
import { $OptionalInt } from "java.util.OptionalInt"
import { $ConfigFormat } from "com.electronwill.nightconfig.core.ConfigFormat"
import { $OptionalLong } from "java.util.OptionalLong"
import { $List$$Type } from "java.util.List"
import { $Enum, $Enum$$Type } from "java.lang.Enum"
import { $Map } from "java.util.Map"
import { $Optional } from "java.util.Optional"
import { $Class$$Type } from "java.lang.Class"
import { $UnmodifiableConfig$Entry } from "com.electronwill.nightconfig.core.UnmodifiableConfig$Entry"
import { $IntSupplier$$Type } from "java.util.function.IntSupplier"
import { $UnmodifiableConfig } from "com.electronwill.nightconfig.core.UnmodifiableConfig"

export class $UnmodifiableConfigWrapper<C extends $UnmodifiableConfig = $UnmodifiableConfig> implements $UnmodifiableConfig {
public "apply"<T>(string0: string): T
public "apply"<T>(list0: $List$$Type<string>): T
public "configFormat"(): $ConfigFormat<any>
public "contains"(list0: $List$$Type<string>): boolean
public "contains"(string0: string): boolean
public "entrySet"(): $Set<$UnmodifiableConfig$Entry>
public "get"<T>(list0: $List$$Type<string>): T
public "get"<T>(string0: string): T
public "getByte"(string0: string): byte
public "getByte"(list0: $List$$Type<string>): byte
public "getByteOrElse"(list0: $List$$Type<string>, byte1: byte): byte
public "getByteOrElse"(string0: string, byte1: byte): byte
public "getChar"(list0: $List$$Type<string>): character
public "getChar"(string0: string): character
public "getCharOrElse"(string0: string, char1: character): character
public "getCharOrElse"(list0: $List$$Type<string>, char1: character): character
public "getEnum"<T extends $Enum<T>>(list0: $List$$Type<string>, class1: $Class$$Type<T>): T
public "getEnum"<T extends $Enum<T>>(list0: $List$$Type<string>, class1: $Class$$Type<T>, enumGetMethod2: $EnumGetMethod$$Type): T
public "getEnum"<T extends $Enum<T>>(string0: string, class1: $Class$$Type<T>): T
public "getEnum"<T extends $Enum<T>>(string0: string, class1: $Class$$Type<T>, enumGetMethod2: $EnumGetMethod$$Type): T
public "getEnumOrElse"<T extends $Enum<T>>(string0: string, class1: $Class$$Type<T>, supplier2: $Supplier$$Type<T>): T
public "getEnumOrElse"<T extends $Enum<T>>(list0: $List$$Type<string>, t1: T): T
public "getEnumOrElse"<T extends $Enum<T>>(list0: $List$$Type<string>, class1: $Class$$Type<T>, enumGetMethod2: $EnumGetMethod$$Type, supplier3: $Supplier$$Type<T>): T
public "getEnumOrElse"<T extends $Enum<T>>(list0: $List$$Type<string>, class1: $Class$$Type<T>, supplier2: $Supplier$$Type<T>): T
public "getEnumOrElse"<T extends $Enum<T>>(string0: string, t1: T, enumGetMethod2: $EnumGetMethod$$Type): T
public "getEnumOrElse"<T extends $Enum<T>>(string0: string, t1: T): T
public "getEnumOrElse"<T extends $Enum<T>>(list0: $List$$Type<string>, t1: T, enumGetMethod2: $EnumGetMethod$$Type): T
public "getEnumOrElse"<T extends $Enum<T>>(string0: string, class1: $Class$$Type<T>, enumGetMethod2: $EnumGetMethod$$Type, supplier3: $Supplier$$Type<T>): T
public "getInt"(list0: $List$$Type<string>): integer
public "getInt"(string0: string): integer
public "getIntOrElse"(string0: string, int1: integer): integer
public "getIntOrElse"(list0: $List$$Type<string>, int1: integer): integer
public "getIntOrElse"(list0: $List$$Type<string>, intSupplier1: $IntSupplier$$Type): integer
public "getIntOrElse"(string0: string, intSupplier1: $IntSupplier$$Type): integer
public "getLong"(list0: $List$$Type<string>): long
public "getLong"(string0: string): long
public "getLongOrElse"(list0: $List$$Type<string>, long1: long): long
public "getLongOrElse"(string0: string, long1: long): long
public "getLongOrElse"(string0: string, longSupplier1: $LongSupplier$$Type): long
public "getLongOrElse"(list0: $List$$Type<string>, longSupplier1: $LongSupplier$$Type): long
public "getOptional"<T>(list0: $List$$Type<string>): $Optional<T>
public "getOptional"<T>(string0: string): $Optional<T>
public "getOptionalEnum"<T extends $Enum<T>>(list0: $List$$Type<string>, class1: $Class$$Type<T>, enumGetMethod2: $EnumGetMethod$$Type): $Optional<T>
public "getOptionalEnum"<T extends $Enum<T>>(list0: $List$$Type<string>, class1: $Class$$Type<T>): $Optional<T>
public "getOptionalEnum"<T extends $Enum<T>>(string0: string, class1: $Class$$Type<T>, enumGetMethod2: $EnumGetMethod$$Type): $Optional<T>
public "getOptionalEnum"<T extends $Enum<T>>(string0: string, class1: $Class$$Type<T>): $Optional<T>
public "getOptionalInt"(list0: $List$$Type<string>): $OptionalInt
public "getOptionalInt"(string0: string): $OptionalInt
public "getOptionalLong"(string0: string): $OptionalLong
public "getOptionalLong"(list0: $List$$Type<string>): $OptionalLong
public "getOrElse"<T>(string0: string, supplier1: $Supplier$$Type<T>): T
public "getOrElse"<T>(list0: $List$$Type<string>, supplier1: $Supplier$$Type<T>): T
public "getOrElse"<T>(list0: $List$$Type<string>, t1: T): T
public "getOrElse"<T>(string0: string, t1: T): T
public "getRaw"<T>(list0: $List$$Type<string>): T
public "getRaw"<T>(string0: string): T
public "getShort"(list0: $List$$Type<string>): short
public "getShort"(string0: string): short
public "getShortOrElse"(list0: $List$$Type<string>, short1: short): short
public "getShortOrElse"(string0: string, short1: short): short
public "isEmpty"(): boolean
public "isNull"(string0: string): boolean
public "isNull"(list0: $List$$Type<string>): boolean
public "size"(): integer
public "valueMap"(): $Map<string, any>
get "empty"(): boolean
}
}

