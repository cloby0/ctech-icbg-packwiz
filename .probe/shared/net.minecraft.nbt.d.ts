declare module "net.minecraft.nbt.NbtAccounter" {
import { $IModifyAbleNbtAccounter } from "com.connectivity.networkstats.IModifyAbleNbtAccounter"
import { $NbtAccounterAccessor } from "com.simibubi.create.foundation.mixin.accessor.NbtAccounterAccessor"

export class $NbtAccounter implements $IModifyAbleNbtAccounter, $NbtAccounterAccessor {
static readonly "UNLIMITED": $NbtAccounter

constructor(long0: long)

public "accountBytes"(long0: long): void
public "getOriginalQuota"(): long
public "getUsage"(): long
public "readUTF"(string0: string): string
public "setQuota"(long0: long): void
get "quota"(): long
set "quota"(value: long)
get "originalQuota"(): long
get "usage"(): long
}
}

declare module "net.minecraft.nbt.CollectionTag" {
import { $TagType } from "net.minecraft.nbt.TagType"
import { $DataOutput$$Type } from "java.io.DataOutput"
import { $Tag, $Tag$$Type } from "net.minecraft.nbt.Tag"
import { $StreamTagVisitor$$Type } from "net.minecraft.nbt.StreamTagVisitor"
import { $Predicate$$Type } from "java.util.function.Predicate"
import { $Collection$$Type } from "java.util.Collection"
import { $AbstractList } from "java.util.AbstractList"
import { $UnaryOperator$$Type } from "java.util.function.UnaryOperator"
import { $Consumer$$Type } from "java.util.function.Consumer"
import { $List } from "java.util.List"
import { $Stream } from "java.util.stream.Stream"
import { $TagVisitor$$Type } from "net.minecraft.nbt.TagVisitor"
import { $StreamTagVisitor$ValueResult } from "net.minecraft.nbt.StreamTagVisitor$ValueResult"
import { $Comparator$$Type } from "java.util.Comparator"
import { $Spliterator } from "java.util.Spliterator"
import { $IntFunction$$Type } from "java.util.function.IntFunction"

export class $CollectionTag<T extends $Tag = $Tag> extends $AbstractList<T> implements $Tag {
constructor()

public "accept"(tagVisitor0: $TagVisitor$$Type): void
public "accept"(streamTagVisitor0: $StreamTagVisitor$$Type): $StreamTagVisitor$ValueResult
public "acceptAsRoot"(streamTagVisitor0: $StreamTagVisitor$$Type): void
public "add"(int0: integer, t1: T): void
public "addAll"(collection0: $Collection$$Type<T>): boolean
public "addTag"(int0: integer, tag1: $Tag$$Type): boolean
public "contains"(object0: any): boolean
public "containsAll"(collection0: $Collection$$Type<any>): boolean
public "copy"(): $Tag
public static "copyOf"<E>(collection0: $Collection$$Type<E>): $List<E>
public "forEach"(consumer0: $Consumer$$Type<T>): void
public "getAsString"(): string
public "getElementType"(): byte
public "getId"(): byte
public "getType"(): $TagType<any>
public "isEmpty"(): boolean
public static "of"<E>(e0: E, e1: E, e2: E, e3: E): $List<E>
public static "of"<E>(e0: E, e1: E, e2: E): $List<E>
public static "of"<E>(e0: E, e1: E): $List<E>
public static "of"<E>(e0: E): $List<E>
public static "of"<E>(): $List<E>
public static "of"<E>(e0: E, e1: E, e2: E, e3: E, e4: E, e5: E, e6: E, e7: E): $List<E>
public static "of"<E>(e0: E, e1: E, e2: E, e3: E, e4: E, e5: E, e6: E): $List<E>
public static "of"<E>(e0: E, e1: E, e2: E, e3: E, e4: E, e5: E): $List<E>
public static "of"<E>(e0: E, e1: E, e2: E, e3: E, e4: E): $List<E>
public static "of"<E>(e0: E, e1: E, e2: E, e3: E, e4: E, e5: E, e6: E, e7: E, e8: E, e9: E): $List<E>
public static "of"<E>(e0: E, e1: E, e2: E, e3: E, e4: E, e5: E, e6: E, e7: E, e8: E): $List<E>
public static "of"<E>(...e0s: E[]): $List<E>
public "parallelStream"(): $Stream<T>
public "remove"(object0: any): boolean
public "removeAll"(collection0: $Collection$$Type<any>): boolean
public "removeIf"(predicate0: $Predicate$$Type<T>): boolean
public "replaceAll"(unaryOperator0: $UnaryOperator$$Type<T>): void
public "retainAll"(collection0: $Collection$$Type<any>): boolean
public "set"(int0: integer, t1: T): T
public "setTag"(int0: integer, tag1: $Tag$$Type): boolean
public "size"(): integer
public "sizeInBytes"(): integer
public "sort"(comparator0: $Comparator$$Type<T>): void
public "spliterator"(): $Spliterator<T>
public "stream"(): $Stream<T>
public "toArray"(): any[]
public "toArray"<T>(t0s: T[]): T[]
public "toArray"<T>(intFunction0: $IntFunction$$Type<T[]>): T[]
public "toString"(): string
public "write"(dataOutput0: $DataOutput$$Type): void
get "asString"(): string
get "elementType"(): byte
get "id"(): byte
get "type"(): $TagType<any>
get "empty"(): boolean
}
}

declare module "net.minecraft.nbt.StreamTagVisitor" {
import { $StreamTagVisitor$EntryResult } from "net.minecraft.nbt.StreamTagVisitor$EntryResult"
import { $TagType$$Type } from "net.minecraft.nbt.TagType"
import { $StreamTagVisitor$ValueResult } from "net.minecraft.nbt.StreamTagVisitor$ValueResult"

export interface $StreamTagVisitor {
"visit"(long0: long): $StreamTagVisitor$ValueResult
"visit"(byte0: byte): $StreamTagVisitor$ValueResult
"visit"(short0: short): $StreamTagVisitor$ValueResult
"visit"(float0: float): $StreamTagVisitor$ValueResult
"visit"(double0: double): $StreamTagVisitor$ValueResult
"visit"(int0s: integer[]): $StreamTagVisitor$ValueResult
"visit"(long0s: long[]): $StreamTagVisitor$ValueResult
"visit"(byte0s: byte[]): $StreamTagVisitor$ValueResult
"visit"(int0: integer): $StreamTagVisitor$ValueResult
"visit"(string0: string): $StreamTagVisitor$ValueResult
"visitContainerEnd"(): $StreamTagVisitor$ValueResult
"visitElement"(tagType0: $TagType$$Type<any>, int1: integer): $StreamTagVisitor$EntryResult
"visitEnd"(): $StreamTagVisitor$ValueResult
"visitEntry"(tagType0: $TagType$$Type<any>): $StreamTagVisitor$EntryResult
"visitEntry"(tagType0: $TagType$$Type<any>, string1: string): $StreamTagVisitor$EntryResult
"visitList"(tagType0: $TagType$$Type<any>, int1: integer): $StreamTagVisitor$ValueResult
"visitRootEntry"(tagType0: $TagType$$Type<any>): $StreamTagVisitor$ValueResult
}

export namespace $StreamTagVisitor {
const probejs$$marker: never
}
export abstract class $StreamTagVisitor$$Static implements $StreamTagVisitor {
}
}

declare module "net.minecraft.nbt.StreamTagVisitor$EntryResult" {
import { $Enum } from "java.lang.Enum"

export class $StreamTagVisitor$EntryResult extends $Enum<$StreamTagVisitor$EntryResult> {
static readonly "BREAK": $StreamTagVisitor$EntryResult
static readonly "ENTER": $StreamTagVisitor$EntryResult
static readonly "HALT": $StreamTagVisitor$EntryResult
static readonly "SKIP": $StreamTagVisitor$EntryResult

public static "valueOf"(string0: string): $StreamTagVisitor$EntryResult
public static "values"(): $StreamTagVisitor$EntryResult[]
}
}

declare module "net.minecraft.nbt.ListTag" {
import { $TagType } from "net.minecraft.nbt.TagType"
import { $DataOutput$$Type } from "java.io.DataOutput"
import { $Tag, $Tag$$Type } from "net.minecraft.nbt.Tag"
import { $StreamTagVisitor$$Type } from "net.minecraft.nbt.StreamTagVisitor"
import { $Predicate$$Type } from "java.util.function.Predicate"
import { $Collection$$Type } from "java.util.Collection"
import { $UnaryOperator$$Type } from "java.util.function.UnaryOperator"
import { $Consumer$$Type } from "java.util.function.Consumer"
import { $List } from "java.util.List"
import { $CompoundTag } from "net.minecraft.nbt.CompoundTag"
import { $Stream } from "java.util.stream.Stream"
import { $CollectionTag } from "net.minecraft.nbt.CollectionTag"
import { $TagVisitor$$Type } from "net.minecraft.nbt.TagVisitor"
import { $StreamTagVisitor$ValueResult } from "net.minecraft.nbt.StreamTagVisitor$ValueResult"
import { $Comparator$$Type } from "java.util.Comparator"
import { $Spliterator } from "java.util.Spliterator"
import { $IntFunction$$Type } from "java.util.function.IntFunction"

export class $ListTag extends $CollectionTag<$Tag> {
static readonly "TYPE": $TagType<$ListTag>

constructor()

public "accept"(tagVisitor0: $TagVisitor$$Type): void
public "accept"(streamTagVisitor0: $StreamTagVisitor$$Type): $StreamTagVisitor$ValueResult
public "acceptAsRoot"(streamTagVisitor0: $StreamTagVisitor$$Type): void
public "addAll"(collection0: $Collection$$Type<$Tag$$Type>): boolean
public "contains"(object0: any): boolean
public "containsAll"(collection0: $Collection$$Type<any>): boolean
public "copy"(): $ListTag
public static "copyOf"<E>(collection0: $Collection$$Type<E>): $List<E>
public "forEach"(consumer0: $Consumer$$Type<$Tag$$Type>): void
public "getAsString"(): string
public "getCompound"(int0: integer): $CompoundTag
public "getDouble"(int0: integer): double
public "getFloat"(int0: integer): float
public "getId"(): byte
public "getInt"(int0: integer): integer
public "getIntArray"(int0: integer): integer[]
public "getList"(int0: integer): $ListTag
public "getLongArray"(int0: integer): long[]
public "getShort"(int0: integer): short
public "getString"(int0: integer): string
public "getType"(): $TagType<$ListTag>
public static "of"<E>(e0: E, e1: E, e2: E, e3: E): $List<E>
public static "of"<E>(e0: E, e1: E, e2: E): $List<E>
public static "of"<E>(e0: E, e1: E): $List<E>
public static "of"<E>(e0: E): $List<E>
public static "of"<E>(): $List<E>
public static "of"<E>(e0: E, e1: E, e2: E, e3: E, e4: E, e5: E, e6: E, e7: E): $List<E>
public static "of"<E>(e0: E, e1: E, e2: E, e3: E, e4: E, e5: E, e6: E): $List<E>
public static "of"<E>(e0: E, e1: E, e2: E, e3: E, e4: E, e5: E): $List<E>
public static "of"<E>(e0: E, e1: E, e2: E, e3: E, e4: E): $List<E>
public static "of"<E>(e0: E, e1: E, e2: E, e3: E, e4: E, e5: E, e6: E, e7: E, e8: E, e9: E): $List<E>
public static "of"<E>(e0: E, e1: E, e2: E, e3: E, e4: E, e5: E, e6: E, e7: E, e8: E): $List<E>
public static "of"<E>(...e0s: E[]): $List<E>
public "parallelStream"(): $Stream<$Tag>
public "remove"(object0: any): boolean
public "removeAll"(collection0: $Collection$$Type<any>): boolean
public "removeIf"(predicate0: $Predicate$$Type<$Tag$$Type>): boolean
public "replaceAll"(unaryOperator0: $UnaryOperator$$Type<$Tag$$Type>): void
public "retainAll"(collection0: $Collection$$Type<any>): boolean
public "set"(int0: integer, tag1: $Tag$$Type): $Tag
public "sizeInBytes"(): integer
public "sort"(comparator0: $Comparator$$Type<$Tag$$Type>): void
public "spliterator"(): $Spliterator<$Tag>
public "stream"(): $Stream<$Tag>
public "toArray"(): any[]
public "toArray"<T>(t0s: T[]): T[]
public "toArray"<T>(intFunction0: $IntFunction$$Type<T[]>): T[]
public "write"(dataOutput0: $DataOutput$$Type): void
get "asString"(): string
get "id"(): byte
get "type"(): $TagType<$ListTag>
}
}

declare module "net.minecraft.nbt.NumericTag" {
import { $TagType } from "net.minecraft.nbt.TagType"
import { $DataOutput$$Type } from "java.io.DataOutput"
import { $Tag } from "net.minecraft.nbt.Tag"
import { $SpecialEquality } from "dev.latvian.mods.rhino.util.SpecialEquality"
import { $StreamTagVisitor$$Type } from "net.minecraft.nbt.StreamTagVisitor"
import { $TagVisitor$$Type } from "net.minecraft.nbt.TagVisitor"
import { $StreamTagVisitor$ValueResult } from "net.minecraft.nbt.StreamTagVisitor$ValueResult"

export class $NumericTag implements $Tag, $SpecialEquality {
public "accept"(tagVisitor0: $TagVisitor$$Type): void
public "accept"(streamTagVisitor0: $StreamTagVisitor$$Type): $StreamTagVisitor$ValueResult
public "acceptAsRoot"(streamTagVisitor0: $StreamTagVisitor$$Type): void
public static "checkSpecialEquality"(o: any, o1: any, shallow: boolean): boolean
public "copy"(): $Tag
public "getAsByte"(): byte
public "getAsDouble"(): double
public "getAsFloat"(): float
public "getAsInt"(): integer
public "getAsLong"(): long
public "getAsNumber"(): number
public "getAsShort"(): short
public "getAsString"(): string
public "getId"(): byte
public "getType"(): $TagType<any>
public "sizeInBytes"(): integer
public "specialEquals"(o: any, shallow: boolean): boolean
public "write"(dataOutput0: $DataOutput$$Type): void
get "asByte"(): byte
get "asDouble"(): double
get "asFloat"(): float
get "asInt"(): integer
get "asLong"(): long
get "asNumber"(): number
get "asShort"(): short
get "asString"(): string
get "id"(): byte
get "type"(): $TagType<any>
}
}

declare module "net.minecraft.nbt.IntArrayTag" {
import { $TagType } from "net.minecraft.nbt.TagType"
import { $DataOutput$$Type } from "java.io.DataOutput"
import { $StreamTagVisitor$$Type } from "net.minecraft.nbt.StreamTagVisitor"
import { $Predicate$$Type } from "java.util.function.Predicate"
import { $Collection$$Type } from "java.util.Collection"
import { $UnaryOperator$$Type } from "java.util.function.UnaryOperator"
import { $IntTag, $IntTag$$Type } from "net.minecraft.nbt.IntTag"
import { $Consumer$$Type } from "java.util.function.Consumer"
import { $List, $List$$Type } from "java.util.List"
import { $Stream } from "java.util.stream.Stream"
import { $CollectionTag } from "net.minecraft.nbt.CollectionTag"
import { $TagVisitor$$Type } from "net.minecraft.nbt.TagVisitor"
import { $StreamTagVisitor$ValueResult } from "net.minecraft.nbt.StreamTagVisitor$ValueResult"
import { $Comparator$$Type } from "java.util.Comparator"
import { $Spliterator } from "java.util.Spliterator"
import { $IntFunction$$Type } from "java.util.function.IntFunction"

export class $IntArrayTag extends $CollectionTag<$IntTag> {
static readonly "TYPE": $TagType<$IntArrayTag>

constructor(int0s: integer[])
constructor(list0: $List$$Type<integer>)

public "accept"(tagVisitor0: $TagVisitor$$Type): void
public "accept"(streamTagVisitor0: $StreamTagVisitor$$Type): $StreamTagVisitor$ValueResult
public "acceptAsRoot"(streamTagVisitor0: $StreamTagVisitor$$Type): void
public "add"(int0: integer, intTag1: $IntTag$$Type): void
public "addAll"(collection0: $Collection$$Type<$IntTag$$Type>): boolean
public "contains"(object0: any): boolean
public "containsAll"(collection0: $Collection$$Type<any>): boolean
public static "copyOf"<E>(collection0: $Collection$$Type<E>): $List<E>
public "forEach"(consumer0: $Consumer$$Type<$IntTag$$Type>): void
public "getAsIntArray"(): integer[]
public "getAsString"(): string
public "getId"(): byte
public "getType"(): $TagType<$IntArrayTag>
public "isEmpty"(): boolean
public static "of"<E>(e0: E, e1: E, e2: E, e3: E): $List<E>
public static "of"<E>(e0: E, e1: E, e2: E): $List<E>
public static "of"<E>(e0: E, e1: E): $List<E>
public static "of"<E>(e0: E): $List<E>
public static "of"<E>(): $List<E>
public static "of"<E>(e0: E, e1: E, e2: E, e3: E, e4: E, e5: E, e6: E, e7: E): $List<E>
public static "of"<E>(e0: E, e1: E, e2: E, e3: E, e4: E, e5: E, e6: E): $List<E>
public static "of"<E>(e0: E, e1: E, e2: E, e3: E, e4: E, e5: E): $List<E>
public static "of"<E>(e0: E, e1: E, e2: E, e3: E, e4: E): $List<E>
public static "of"<E>(e0: E, e1: E, e2: E, e3: E, e4: E, e5: E, e6: E, e7: E, e8: E, e9: E): $List<E>
public static "of"<E>(e0: E, e1: E, e2: E, e3: E, e4: E, e5: E, e6: E, e7: E, e8: E): $List<E>
public static "of"<E>(...e0s: E[]): $List<E>
public "parallelStream"(): $Stream<$IntTag>
public "remove"(object0: any): boolean
public "removeAll"(collection0: $Collection$$Type<any>): boolean
public "removeIf"(predicate0: $Predicate$$Type<$IntTag$$Type>): boolean
public "replaceAll"(unaryOperator0: $UnaryOperator$$Type<$IntTag$$Type>): void
public "retainAll"(collection0: $Collection$$Type<any>): boolean
public "set"(int0: integer, intTag1: $IntTag$$Type): $IntTag
public "sizeInBytes"(): integer
public "sort"(comparator0: $Comparator$$Type<$IntTag$$Type>): void
public "spliterator"(): $Spliterator<$IntTag>
public "stream"(): $Stream<$IntTag>
public "toArray"(): any[]
public "toArray"<T>(t0s: T[]): T[]
public "toArray"<T>(intFunction0: $IntFunction$$Type<T[]>): T[]
public "write"(dataOutput0: $DataOutput$$Type): void
get "asIntArray"(): integer[]
get "asString"(): string
get "id"(): byte
get "type"(): $TagType<$IntArrayTag>
get "empty"(): boolean
}
}

declare module "net.minecraft.nbt.Tag" {
import { $TagType } from "net.minecraft.nbt.TagType"
import { $DataOutput$$Type } from "java.io.DataOutput"
import { $StreamTagVisitor$$Type } from "net.minecraft.nbt.StreamTagVisitor"
import { $TagVisitor$$Type } from "net.minecraft.nbt.TagVisitor"
import { $StreamTagVisitor$ValueResult } from "net.minecraft.nbt.StreamTagVisitor$ValueResult"

export interface $Tag {
"accept"(tagVisitor0: $TagVisitor$$Type): void
"accept"(streamTagVisitor0: $StreamTagVisitor$$Type): $StreamTagVisitor$ValueResult
"acceptAsRoot"(streamTagVisitor0: $StreamTagVisitor$$Type): void
"copy"(): $Tag
"getAsString"(): string
"getId"(): byte
"getType"(): $TagType<any>
"sizeInBytes"(): integer
"toString"(): string
"write"(dataOutput0: $DataOutput$$Type): void
get "asString"(): string
get "id"(): byte
get "type"(): $TagType<any>
}

export namespace $Tag {
const ARRAY_HEADER: integer
const MAX_DEPTH: integer
const OBJECT_HEADER: integer
const OBJECT_REFERENCE: integer
const STRING_SIZE: integer
const TAG_ANY_NUMERIC: byte
const TAG_BYTE: byte
const TAG_BYTE_ARRAY: byte
const TAG_COMPOUND: byte
const TAG_DOUBLE: byte
const TAG_END: byte
const TAG_FLOAT: byte
const TAG_INT: byte
const TAG_INT_ARRAY: byte
const TAG_LIST: byte
const TAG_LONG: byte
const TAG_LONG_ARRAY: byte
const TAG_SHORT: byte
const TAG_STRING: byte
}
export abstract class $Tag$$Static implements $Tag {
static readonly "ARRAY_HEADER": integer
static readonly "MAX_DEPTH": integer
static readonly "OBJECT_HEADER": integer
static readonly "OBJECT_REFERENCE": integer
static readonly "STRING_SIZE": integer
static readonly "TAG_ANY_NUMERIC": byte
static readonly "TAG_BYTE": byte
static readonly "TAG_BYTE_ARRAY": byte
static readonly "TAG_COMPOUND": byte
static readonly "TAG_DOUBLE": byte
static readonly "TAG_END": byte
static readonly "TAG_FLOAT": byte
static readonly "TAG_INT": byte
static readonly "TAG_INT_ARRAY": byte
static readonly "TAG_LIST": byte
static readonly "TAG_LONG": byte
static readonly "TAG_LONG_ARRAY": byte
static readonly "TAG_SHORT": byte
static readonly "TAG_STRING": byte

}
}

declare module "net.minecraft.nbt.LongArrayTag" {
import { $TagType } from "net.minecraft.nbt.TagType"
import { $DataOutput$$Type } from "java.io.DataOutput"
import { $StreamTagVisitor$$Type } from "net.minecraft.nbt.StreamTagVisitor"
import { $Predicate$$Type } from "java.util.function.Predicate"
import { $Collection$$Type } from "java.util.Collection"
import { $UnaryOperator$$Type } from "java.util.function.UnaryOperator"
import { $LongTag, $LongTag$$Type } from "net.minecraft.nbt.LongTag"
import { $Consumer$$Type } from "java.util.function.Consumer"
import { $List, $List$$Type } from "java.util.List"
import { $Stream } from "java.util.stream.Stream"
import { $CollectionTag } from "net.minecraft.nbt.CollectionTag"
import { $TagVisitor$$Type } from "net.minecraft.nbt.TagVisitor"
import { $StreamTagVisitor$ValueResult } from "net.minecraft.nbt.StreamTagVisitor$ValueResult"
import { $Comparator$$Type } from "java.util.Comparator"
import { $Spliterator } from "java.util.Spliterator"
import { $LongSet$$Type } from "it.unimi.dsi.fastutil.longs.LongSet"
import { $IntFunction$$Type } from "java.util.function.IntFunction"

export class $LongArrayTag extends $CollectionTag<$LongTag> {
static readonly "TYPE": $TagType<$LongArrayTag>

constructor(longSet0: $LongSet$$Type)
constructor(list0: $List$$Type<long>)
constructor(long0s: long[])

public "accept"(tagVisitor0: $TagVisitor$$Type): void
public "accept"(streamTagVisitor0: $StreamTagVisitor$$Type): $StreamTagVisitor$ValueResult
public "acceptAsRoot"(streamTagVisitor0: $StreamTagVisitor$$Type): void
public "add"(int0: integer, longTag1: $LongTag$$Type): void
public "addAll"(collection0: $Collection$$Type<$LongTag$$Type>): boolean
public "contains"(object0: any): boolean
public "containsAll"(collection0: $Collection$$Type<any>): boolean
public "copy"(): $LongArrayTag
public static "copyOf"<E>(collection0: $Collection$$Type<E>): $List<E>
public "forEach"(consumer0: $Consumer$$Type<$LongTag$$Type>): void
public "getAsLongArray"(): long[]
public "getAsString"(): string
public "getId"(): byte
public "getType"(): $TagType<$LongArrayTag>
public "isEmpty"(): boolean
public static "of"<E>(e0: E, e1: E, e2: E, e3: E): $List<E>
public static "of"<E>(e0: E, e1: E, e2: E): $List<E>
public static "of"<E>(e0: E, e1: E): $List<E>
public static "of"<E>(e0: E): $List<E>
public static "of"<E>(): $List<E>
public static "of"<E>(e0: E, e1: E, e2: E, e3: E, e4: E, e5: E, e6: E, e7: E): $List<E>
public static "of"<E>(e0: E, e1: E, e2: E, e3: E, e4: E, e5: E, e6: E): $List<E>
public static "of"<E>(e0: E, e1: E, e2: E, e3: E, e4: E, e5: E): $List<E>
public static "of"<E>(e0: E, e1: E, e2: E, e3: E, e4: E): $List<E>
public static "of"<E>(e0: E, e1: E, e2: E, e3: E, e4: E, e5: E, e6: E, e7: E, e8: E, e9: E): $List<E>
public static "of"<E>(e0: E, e1: E, e2: E, e3: E, e4: E, e5: E, e6: E, e7: E, e8: E): $List<E>
public static "of"<E>(...e0s: E[]): $List<E>
public "parallelStream"(): $Stream<$LongTag>
public "remove"(object0: any): boolean
public "removeAll"(collection0: $Collection$$Type<any>): boolean
public "removeIf"(predicate0: $Predicate$$Type<$LongTag$$Type>): boolean
public "replaceAll"(unaryOperator0: $UnaryOperator$$Type<$LongTag$$Type>): void
public "retainAll"(collection0: $Collection$$Type<any>): boolean
public "set"(int0: integer, longTag1: $LongTag$$Type): $LongTag
public "sizeInBytes"(): integer
public "sort"(comparator0: $Comparator$$Type<$LongTag$$Type>): void
public "spliterator"(): $Spliterator<$LongTag>
public "stream"(): $Stream<$LongTag>
public "toArray"(): any[]
public "toArray"<T>(t0s: T[]): T[]
public "toArray"<T>(intFunction0: $IntFunction$$Type<T[]>): T[]
public "write"(dataOutput0: $DataOutput$$Type): void
get "asLongArray"(): long[]
get "asString"(): string
get "id"(): byte
get "type"(): $TagType<$LongArrayTag>
get "empty"(): boolean
}
}

declare module "net.minecraft.nbt.StringTag" {
import { $TagType } from "net.minecraft.nbt.TagType"
import { $DataOutput$$Type } from "java.io.DataOutput"
import { $Tag } from "net.minecraft.nbt.Tag"
import { $SpecialEquality } from "dev.latvian.mods.rhino.util.SpecialEquality"
import { $StreamTagVisitor$$Type } from "net.minecraft.nbt.StreamTagVisitor"
import { $TagVisitor$$Type } from "net.minecraft.nbt.TagVisitor"
import { $StreamTagVisitor$ValueResult } from "net.minecraft.nbt.StreamTagVisitor$ValueResult"
import { $DataInput$$Type } from "java.io.DataInput"

export class $StringTag implements $Tag, $SpecialEquality {
static readonly "TYPE": $TagType<$StringTag>

public "accept"(tagVisitor0: $TagVisitor$$Type): void
public "accept"(streamTagVisitor0: $StreamTagVisitor$$Type): $StreamTagVisitor$ValueResult
public "acceptAsRoot"(streamTagVisitor0: $StreamTagVisitor$$Type): void
public static "checkSpecialEquality"(o: any, o1: any, shallow: boolean): boolean
public "getAsString"(): string
public "getId"(): byte
public "getType"(): $TagType<$StringTag>
public static "quoteAndEscape"(string0: string): string
public "sizeInBytes"(): integer
public static "skipString"(dataInput0: $DataInput$$Type): void
public "specialEquals"(o: any, shallow: boolean): boolean
public static "valueOf"(string0: string): $StringTag
public "write"(dataOutput0: $DataOutput$$Type): void
get "asString"(): string
get "id"(): byte
get "type"(): $TagType<$StringTag>
}
}

declare module "net.minecraft.nbt.FloatTag" {
import { $NumericTag } from "net.minecraft.nbt.NumericTag"
import { $TagType } from "net.minecraft.nbt.TagType"
import { $DataOutput$$Type } from "java.io.DataOutput"
import { $StreamTagVisitor$$Type } from "net.minecraft.nbt.StreamTagVisitor"
import { $TagVisitor$$Type } from "net.minecraft.nbt.TagVisitor"
import { $StreamTagVisitor$ValueResult } from "net.minecraft.nbt.StreamTagVisitor$ValueResult"

export class $FloatTag extends $NumericTag {
static readonly "TYPE": $TagType<$FloatTag>
static readonly "ZERO": $FloatTag

public "accept"(tagVisitor0: $TagVisitor$$Type): void
public "accept"(streamTagVisitor0: $StreamTagVisitor$$Type): $StreamTagVisitor$ValueResult
public "acceptAsRoot"(streamTagVisitor0: $StreamTagVisitor$$Type): void
public static "checkSpecialEquality"(o: any, o1: any, shallow: boolean): boolean
public "copy"(): $FloatTag
public "getAsString"(): string
public "getId"(): byte
public "getType"(): $TagType<$FloatTag>
public "sizeInBytes"(): integer
public static "valueOf"(float0: float): $FloatTag
public "write"(dataOutput0: $DataOutput$$Type): void
get "asString"(): string
get "id"(): byte
get "type"(): $TagType<$FloatTag>
}
}

declare module "net.minecraft.nbt.TagVisitor" {
import { $LongArrayTag$$Type } from "net.minecraft.nbt.LongArrayTag"
import { $ByteArrayTag$$Type } from "net.minecraft.nbt.ByteArrayTag"
import { $DoubleTag$$Type } from "net.minecraft.nbt.DoubleTag"
import { $StringTag$$Type } from "net.minecraft.nbt.StringTag"
import { $ByteTag$$Type } from "net.minecraft.nbt.ByteTag"
import { $IntTag$$Type } from "net.minecraft.nbt.IntTag"
import { $IntArrayTag$$Type } from "net.minecraft.nbt.IntArrayTag"
import { $LongTag$$Type } from "net.minecraft.nbt.LongTag"
import { $ShortTag$$Type } from "net.minecraft.nbt.ShortTag"
import { $CompoundTag$$Type } from "net.minecraft.nbt.CompoundTag"
import { $FloatTag$$Type } from "net.minecraft.nbt.FloatTag"
import { $EndTag$$Type } from "net.minecraft.nbt.EndTag"
import { $ListTag$$Type } from "net.minecraft.nbt.ListTag"

export interface $TagVisitor {
"visitByte"(byteTag0: $ByteTag$$Type): void
"visitByteArray"(byteArrayTag0: $ByteArrayTag$$Type): void
"visitCompound"(compoundTag0: $CompoundTag$$Type): void
"visitDouble"(doubleTag0: $DoubleTag$$Type): void
"visitEnd"(endTag0: $EndTag$$Type): void
"visitFloat"(floatTag0: $FloatTag$$Type): void
"visitInt"(intTag0: $IntTag$$Type): void
"visitIntArray"(intArrayTag0: $IntArrayTag$$Type): void
"visitList"(listTag0: $ListTag$$Type): void
"visitLong"(longTag0: $LongTag$$Type): void
"visitLongArray"(longArrayTag0: $LongArrayTag$$Type): void
"visitShort"(shortTag0: $ShortTag$$Type): void
"visitString"(stringTag0: $StringTag$$Type): void
}

export namespace $TagVisitor {
const probejs$$marker: never
}
export abstract class $TagVisitor$$Static implements $TagVisitor {
}
}

declare module "net.minecraft.nbt.TagType" {
import { $Tag } from "net.minecraft.nbt.Tag"
import { $StreamTagVisitor$$Type } from "net.minecraft.nbt.StreamTagVisitor"
import { $DataInput$$Type } from "java.io.DataInput"
import { $StreamTagVisitor$ValueResult } from "net.minecraft.nbt.StreamTagVisitor$ValueResult"
import { $EndTag } from "net.minecraft.nbt.EndTag"
import { $NbtAccounter$$Type } from "net.minecraft.nbt.NbtAccounter"

export interface $TagType<T extends $Tag = $Tag> {
"getName"(): string
"getPrettyName"(): string
"isValue"(): boolean
"load"(dataInput0: $DataInput$$Type, int1: integer, nbtAccounter2: $NbtAccounter$$Type): T
"parse"(dataInput0: $DataInput$$Type, streamTagVisitor1: $StreamTagVisitor$$Type): $StreamTagVisitor$ValueResult
"parseRoot"(dataInput0: $DataInput$$Type, streamTagVisitor1: $StreamTagVisitor$$Type): void
"skip"(dataInput0: $DataInput$$Type): void
"skip"(dataInput0: $DataInput$$Type, int1: integer): void
get "name"(): string
get "prettyName"(): string
get "value"(): boolean
}

export namespace $TagType {
function createInvalid(int0: integer): $TagType<$EndTag>
}
export abstract class $TagType$$Static<T extends $Tag = $Tag> implements $TagType<T> {
static "createInvalid"(int0: integer): $TagType<$EndTag>
}
}

declare module "net.minecraft.nbt.StreamTagVisitor$ValueResult" {
import { $Enum } from "java.lang.Enum"

export class $StreamTagVisitor$ValueResult extends $Enum<$StreamTagVisitor$ValueResult> {
static readonly "BREAK": $StreamTagVisitor$ValueResult
static readonly "CONTINUE": $StreamTagVisitor$ValueResult
static readonly "HALT": $StreamTagVisitor$ValueResult

public static "valueOf"(string0: string): $StreamTagVisitor$ValueResult
public static "values"(): $StreamTagVisitor$ValueResult[]
}
}

declare module "net.minecraft.nbt.IntTag" {
import { $NumericTag } from "net.minecraft.nbt.NumericTag"
import { $TagType } from "net.minecraft.nbt.TagType"
import { $DataOutput$$Type } from "java.io.DataOutput"
import { $StreamTagVisitor$$Type } from "net.minecraft.nbt.StreamTagVisitor"
import { $TagVisitor$$Type } from "net.minecraft.nbt.TagVisitor"
import { $StreamTagVisitor$ValueResult } from "net.minecraft.nbt.StreamTagVisitor$ValueResult"

export class $IntTag extends $NumericTag {
static readonly "TYPE": $TagType<$IntTag>

public "accept"(tagVisitor0: $TagVisitor$$Type): void
public "accept"(streamTagVisitor0: $StreamTagVisitor$$Type): $StreamTagVisitor$ValueResult
public "acceptAsRoot"(streamTagVisitor0: $StreamTagVisitor$$Type): void
public static "checkSpecialEquality"(o: any, o1: any, shallow: boolean): boolean
public "getAsString"(): string
public "getId"(): byte
public "getType"(): $TagType<$IntTag>
public "sizeInBytes"(): integer
public static "valueOf"(int0: integer): $IntTag
public "write"(dataOutput0: $DataOutput$$Type): void
get "asString"(): string
get "id"(): byte
get "type"(): $TagType<$IntTag>
}
}

declare module "net.minecraft.nbt.EndTag" {
import { $TagType } from "net.minecraft.nbt.TagType"
import { $DataOutput$$Type } from "java.io.DataOutput"
import { $Tag } from "net.minecraft.nbt.Tag"
import { $StreamTagVisitor$$Type } from "net.minecraft.nbt.StreamTagVisitor"
import { $TagVisitor$$Type } from "net.minecraft.nbt.TagVisitor"
import { $StreamTagVisitor$ValueResult } from "net.minecraft.nbt.StreamTagVisitor$ValueResult"

export class $EndTag implements $Tag {
static readonly "INSTANCE": $EndTag
static readonly "TYPE": $TagType<$EndTag>

public "accept"(tagVisitor0: $TagVisitor$$Type): void
public "accept"(streamTagVisitor0: $StreamTagVisitor$$Type): $StreamTagVisitor$ValueResult
public "acceptAsRoot"(streamTagVisitor0: $StreamTagVisitor$$Type): void
public "getAsString"(): string
public "getId"(): byte
public "getType"(): $TagType<$EndTag>
public "sizeInBytes"(): integer
public "write"(dataOutput0: $DataOutput$$Type): void
get "asString"(): string
get "id"(): byte
get "type"(): $TagType<$EndTag>
}
}

declare module "net.minecraft.nbt.DoubleTag" {
import { $NumericTag } from "net.minecraft.nbt.NumericTag"
import { $TagType } from "net.minecraft.nbt.TagType"
import { $DataOutput$$Type } from "java.io.DataOutput"
import { $StreamTagVisitor$$Type } from "net.minecraft.nbt.StreamTagVisitor"
import { $TagVisitor$$Type } from "net.minecraft.nbt.TagVisitor"
import { $StreamTagVisitor$ValueResult } from "net.minecraft.nbt.StreamTagVisitor$ValueResult"

export class $DoubleTag extends $NumericTag {
static readonly "TYPE": $TagType<$DoubleTag>
static readonly "ZERO": $DoubleTag

public "accept"(tagVisitor0: $TagVisitor$$Type): void
public "accept"(streamTagVisitor0: $StreamTagVisitor$$Type): $StreamTagVisitor$ValueResult
public "acceptAsRoot"(streamTagVisitor0: $StreamTagVisitor$$Type): void
public static "checkSpecialEquality"(o: any, o1: any, shallow: boolean): boolean
public "copy"(): $DoubleTag
public "getAsString"(): string
public "getId"(): byte
public "getType"(): $TagType<$DoubleTag>
public "sizeInBytes"(): integer
public static "valueOf"(double0: double): $DoubleTag
public "write"(dataOutput0: $DataOutput$$Type): void
get "asString"(): string
get "id"(): byte
get "type"(): $TagType<$DoubleTag>
}
}

declare module "net.minecraft.nbt.LongTag" {
import { $NumericTag } from "net.minecraft.nbt.NumericTag"
import { $TagType } from "net.minecraft.nbt.TagType"
import { $DataOutput$$Type } from "java.io.DataOutput"
import { $StreamTagVisitor$$Type } from "net.minecraft.nbt.StreamTagVisitor"
import { $TagVisitor$$Type } from "net.minecraft.nbt.TagVisitor"
import { $StreamTagVisitor$ValueResult } from "net.minecraft.nbt.StreamTagVisitor$ValueResult"

export class $LongTag extends $NumericTag {
static readonly "TYPE": $TagType<$LongTag>

public "accept"(tagVisitor0: $TagVisitor$$Type): void
public "accept"(streamTagVisitor0: $StreamTagVisitor$$Type): $StreamTagVisitor$ValueResult
public "acceptAsRoot"(streamTagVisitor0: $StreamTagVisitor$$Type): void
public static "checkSpecialEquality"(o: any, o1: any, shallow: boolean): boolean
public "getAsString"(): string
public "getId"(): byte
public "getType"(): $TagType<$LongTag>
public "sizeInBytes"(): integer
public static "valueOf"(long0: long): $LongTag
public "write"(dataOutput0: $DataOutput$$Type): void
get "asString"(): string
get "id"(): byte
get "type"(): $TagType<$LongTag>
}
}

declare module "net.minecraft.nbt.ShortTag" {
import { $NumericTag } from "net.minecraft.nbt.NumericTag"
import { $TagType } from "net.minecraft.nbt.TagType"
import { $DataOutput$$Type } from "java.io.DataOutput"
import { $StreamTagVisitor$$Type } from "net.minecraft.nbt.StreamTagVisitor"
import { $TagVisitor$$Type } from "net.minecraft.nbt.TagVisitor"
import { $StreamTagVisitor$ValueResult } from "net.minecraft.nbt.StreamTagVisitor$ValueResult"

export class $ShortTag extends $NumericTag {
static readonly "TYPE": $TagType<$ShortTag>

public "accept"(tagVisitor0: $TagVisitor$$Type): void
public "accept"(streamTagVisitor0: $StreamTagVisitor$$Type): $StreamTagVisitor$ValueResult
public "acceptAsRoot"(streamTagVisitor0: $StreamTagVisitor$$Type): void
public static "checkSpecialEquality"(o: any, o1: any, shallow: boolean): boolean
public "getAsString"(): string
public "getId"(): byte
public "getType"(): $TagType<$ShortTag>
public "sizeInBytes"(): integer
public static "valueOf"(short0: short): $ShortTag
public "write"(dataOutput0: $DataOutput$$Type): void
get "asString"(): string
get "id"(): byte
get "type"(): $TagType<$ShortTag>
}
}

declare module "net.minecraft.nbt.ByteArrayTag" {
import { $TagType } from "net.minecraft.nbt.TagType"
import { $DataOutput$$Type } from "java.io.DataOutput"
import { $Tag } from "net.minecraft.nbt.Tag"
import { $StreamTagVisitor$$Type } from "net.minecraft.nbt.StreamTagVisitor"
import { $Predicate$$Type } from "java.util.function.Predicate"
import { $Collection$$Type } from "java.util.Collection"
import { $ByteTag, $ByteTag$$Type } from "net.minecraft.nbt.ByteTag"
import { $UnaryOperator$$Type } from "java.util.function.UnaryOperator"
import { $Consumer$$Type } from "java.util.function.Consumer"
import { $List, $List$$Type } from "java.util.List"
import { $Stream } from "java.util.stream.Stream"
import { $CollectionTag } from "net.minecraft.nbt.CollectionTag"
import { $TagVisitor$$Type } from "net.minecraft.nbt.TagVisitor"
import { $StreamTagVisitor$ValueResult } from "net.minecraft.nbt.StreamTagVisitor$ValueResult"
import { $Comparator$$Type } from "java.util.Comparator"
import { $Spliterator } from "java.util.Spliterator"
import { $IntFunction$$Type } from "java.util.function.IntFunction"

export class $ByteArrayTag extends $CollectionTag<$ByteTag> {
static readonly "TYPE": $TagType<$ByteArrayTag>

constructor(byte0s: byte[])
constructor(list0: $List$$Type<byte>)

public "accept"(tagVisitor0: $TagVisitor$$Type): void
public "accept"(streamTagVisitor0: $StreamTagVisitor$$Type): $StreamTagVisitor$ValueResult
public "acceptAsRoot"(streamTagVisitor0: $StreamTagVisitor$$Type): void
public "add"(int0: integer, byteTag1: $ByteTag$$Type): void
public "addAll"(collection0: $Collection$$Type<$ByteTag$$Type>): boolean
public "contains"(object0: any): boolean
public "containsAll"(collection0: $Collection$$Type<any>): boolean
public "copy"(): $Tag
public static "copyOf"<E>(collection0: $Collection$$Type<E>): $List<E>
public "forEach"(consumer0: $Consumer$$Type<$ByteTag$$Type>): void
public "getAsByteArray"(): byte[]
public "getAsString"(): string
public "getId"(): byte
public "getType"(): $TagType<$ByteArrayTag>
public "isEmpty"(): boolean
public static "of"<E>(e0: E, e1: E, e2: E, e3: E): $List<E>
public static "of"<E>(e0: E, e1: E, e2: E): $List<E>
public static "of"<E>(e0: E, e1: E): $List<E>
public static "of"<E>(e0: E): $List<E>
public static "of"<E>(): $List<E>
public static "of"<E>(e0: E, e1: E, e2: E, e3: E, e4: E, e5: E, e6: E, e7: E): $List<E>
public static "of"<E>(e0: E, e1: E, e2: E, e3: E, e4: E, e5: E, e6: E): $List<E>
public static "of"<E>(e0: E, e1: E, e2: E, e3: E, e4: E, e5: E): $List<E>
public static "of"<E>(e0: E, e1: E, e2: E, e3: E, e4: E): $List<E>
public static "of"<E>(e0: E, e1: E, e2: E, e3: E, e4: E, e5: E, e6: E, e7: E, e8: E, e9: E): $List<E>
public static "of"<E>(e0: E, e1: E, e2: E, e3: E, e4: E, e5: E, e6: E, e7: E, e8: E): $List<E>
public static "of"<E>(...e0s: E[]): $List<E>
public "parallelStream"(): $Stream<$ByteTag>
public "remove"(int0: integer): $ByteTag
public "remove"(object0: any): boolean
public "removeAll"(collection0: $Collection$$Type<any>): boolean
public "removeIf"(predicate0: $Predicate$$Type<$ByteTag$$Type>): boolean
public "replaceAll"(unaryOperator0: $UnaryOperator$$Type<$ByteTag$$Type>): void
public "retainAll"(collection0: $Collection$$Type<any>): boolean
public "set"(int0: integer, byteTag1: $ByteTag$$Type): $ByteTag
public "sizeInBytes"(): integer
public "sort"(comparator0: $Comparator$$Type<$ByteTag$$Type>): void
public "spliterator"(): $Spliterator<$ByteTag>
public "stream"(): $Stream<$ByteTag>
public "toArray"(): any[]
public "toArray"<T>(t0s: T[]): T[]
public "toArray"<T>(intFunction0: $IntFunction$$Type<T[]>): T[]
public "write"(dataOutput0: $DataOutput$$Type): void
get "asByteArray"(): byte[]
get "asString"(): string
get "id"(): byte
get "type"(): $TagType<$ByteArrayTag>
get "empty"(): boolean
}
}

declare module "net.minecraft.nbt.ByteTag" {
import { $NumericTag } from "net.minecraft.nbt.NumericTag"
import { $TagType } from "net.minecraft.nbt.TagType"
import { $DataOutput$$Type } from "java.io.DataOutput"
import { $StreamTagVisitor$$Type } from "net.minecraft.nbt.StreamTagVisitor"
import { $TagVisitor$$Type } from "net.minecraft.nbt.TagVisitor"
import { $StreamTagVisitor$ValueResult } from "net.minecraft.nbt.StreamTagVisitor$ValueResult"

export class $ByteTag extends $NumericTag {
static readonly "ONE": $ByteTag
static readonly "TYPE": $TagType<$ByteTag>
static readonly "ZERO": $ByteTag

public "accept"(tagVisitor0: $TagVisitor$$Type): void
public "accept"(streamTagVisitor0: $StreamTagVisitor$$Type): $StreamTagVisitor$ValueResult
public "acceptAsRoot"(streamTagVisitor0: $StreamTagVisitor$$Type): void
public static "checkSpecialEquality"(o: any, o1: any, shallow: boolean): boolean
public "copy"(): $ByteTag
public "getAsString"(): string
public "getId"(): byte
public "getType"(): $TagType<$ByteTag>
public "sizeInBytes"(): integer
public static "valueOf"(byte0: byte): $ByteTag
public static "valueOf"(boolean0: boolean): $ByteTag
public "write"(dataOutput0: $DataOutput$$Type): void
get "asString"(): string
get "id"(): byte
get "type"(): $TagType<$ByteTag>
}
}

declare module "net.minecraft.nbt.CompoundTag" {
import { $TagType } from "net.minecraft.nbt.TagType"
import { $DataOutput$$Type } from "java.io.DataOutput"
import { $Tag, $Tag$$Type } from "net.minecraft.nbt.Tag"
import { $StreamTagVisitor$$Type } from "net.minecraft.nbt.StreamTagVisitor"
import { $Set } from "java.util.Set"
import { $UUID, $UUID$$Type } from "java.util.UUID"
import { $List$$Type } from "java.util.List"
import { $Codec } from "com.mojang.serialization.Codec"
import { $Map, $Map$$Type } from "java.util.Map"
import { $TagVisitor$$Type } from "net.minecraft.nbt.TagVisitor"
import { $StreamTagVisitor$ValueResult } from "net.minecraft.nbt.StreamTagVisitor$ValueResult"
import { $ListTag } from "net.minecraft.nbt.ListTag"

export class $CompoundTag implements $Tag {
static readonly "CODEC": $Codec<$CompoundTag>
static readonly "TYPE": $TagType<$CompoundTag>
readonly "tags": $Map<string, $Tag>

constructor()
constructor(map0: $Map$$Type<string, $Tag$$Type>)

public "accept"(tagVisitor0: $TagVisitor$$Type): void
public "accept"(streamTagVisitor0: $StreamTagVisitor$$Type): $StreamTagVisitor$ValueResult
public "acceptAsRoot"(streamTagVisitor0: $StreamTagVisitor$$Type): void
public "contains"(string0: string, int1: integer): boolean
public "contains"(string0: string): boolean
public "get"(string0: string): $Tag
public "getAllKeys"(): $Set<string>
public "getAsString"(): string
public "getBoolean"(string0: string): boolean
public "getByte"(string0: string): byte
public "getByteArray"(string0: string): byte[]
public "getCompound"(string0: string): $CompoundTag
public "getDouble"(string0: string): double
public "getFloat"(string0: string): float
public "getId"(): byte
public "getInt"(string0: string): integer
public "getIntArray"(string0: string): integer[]
public "getList"(string0: string, int1: integer): $ListTag
public "getLong"(string0: string): long
public "getLongArray"(string0: string): long[]
public "getShort"(string0: string): short
public "getString"(string0: string): string
public "getTagType"(string0: string): byte
public "getType"(): $TagType<$CompoundTag>
public "getUUID"(string0: string): $UUID
public "hasUUID"(string0: string): boolean
public "isEmpty"(): boolean
public "merge"(compoundTag0: $CompoundTag$$Type): $CompoundTag
public "put"(string0: string, tag1: $Tag$$Type): $Tag
public "putBoolean"(string0: string, boolean1: boolean): void
public "putByte"(string0: string, byte1: byte): void
public "putByteArray"(string0: string, byte1s: byte[]): void
public "putByteArray"(string0: string, list1: $List$$Type<byte>): void
public "putDouble"(string0: string, double1: double): void
public "putFloat"(string0: string, float1: float): void
public "putInt"(string0: string, int1: integer): void
public "putIntArray"(string0: string, int1s: integer[]): void
public "putIntArray"(string0: string, list1: $List$$Type<integer>): void
public "putLong"(string0: string, long1: long): void
public "putLongArray"(string0: string, long1s: long[]): void
public "putLongArray"(string0: string, list1: $List$$Type<long>): void
public "putShort"(string0: string, short1: short): void
public "putString"(string0: string, string1: string): void
public "putUUID"(string0: string, uUID1: $UUID$$Type): void
public "remove"(string0: string): void
public "size"(): integer
public "sizeInBytes"(): integer
public "write"(dataOutput0: $DataOutput$$Type): void
get "allKeys"(): $Set<string>
get "asString"(): string
get "id"(): byte
get "type"(): $TagType<$CompoundTag>
get "empty"(): boolean
}
}

