declare module "it.unimi.dsi.fastutil.objects.ObjectCollection" {
import { $Consumer$$Type } from "java.util.function.Consumer"
import { $Stream } from "java.util.stream.Stream"
import { $ObjectSpliterator } from "it.unimi.dsi.fastutil.objects.ObjectSpliterator"
import { $ObjectIterable } from "it.unimi.dsi.fastutil.objects.ObjectIterable"
import { $Predicate$$Type } from "java.util.function.Predicate"
import { $Collection, $Collection$$Type } from "java.util.Collection"
import { $IntFunction$$Type } from "java.util.function.IntFunction"

export interface $ObjectCollection<K = any> extends $Collection<K>, $ObjectIterable<K> {
"add"(k0: K): boolean
"addAll"(collection0: $Collection$$Type<K>): boolean
"clear"(): void
"contains"(object0: any): boolean
"containsAll"(collection0: $Collection$$Type<any>): boolean
"equals"(object0: any): boolean
"forEach"(consumer0: $Consumer$$Type<K>): void
"hashCode"(): integer
"isEmpty"(): boolean
"parallelStream"(): $Stream<K>
"remove"(object0: any): boolean
"removeAll"(collection0: $Collection$$Type<any>): boolean
"removeIf"(predicate0: $Predicate$$Type<K>): boolean
"retainAll"(collection0: $Collection$$Type<any>): boolean
"size"(): integer
"spliterator"(): $ObjectSpliterator<K>
"stream"(): $Stream<K>
"toArray"<T>(t0s: T[]): T[]
"toArray"<T>(intFunction0: $IntFunction$$Type<T[]>): T[]
"toArray"(): any[]
get "empty"(): boolean
}

export namespace $ObjectCollection {
const probejs$$marker: never
}
export abstract class $ObjectCollection$$Static<K = any> implements $ObjectCollection<K> {
}
}

declare module "it.unimi.dsi.fastutil.objects.Object2ShortFunction" {
import { $Double2ShortFunction } from "it.unimi.dsi.fastutil.doubles.Double2ShortFunction"
import { $Long2ShortFunction } from "it.unimi.dsi.fastutil.longs.Long2ShortFunction"
import { $Int2ShortFunction } from "it.unimi.dsi.fastutil.ints.Int2ShortFunction"
import { $Short2ReferenceFunction$$Type } from "it.unimi.dsi.fastutil.shorts.Short2ReferenceFunction"
import { $Double2ObjectFunction$$Type } from "it.unimi.dsi.fastutil.doubles.Double2ObjectFunction"
import { $Object2ObjectFunction, $Object2ObjectFunction$$Type } from "it.unimi.dsi.fastutil.objects.Object2ObjectFunction"
import { $Function, $Function$$Type } from "java.util.function.Function"
import { $Short2ShortFunction, $Short2ShortFunction$$Type } from "it.unimi.dsi.fastutil.shorts.Short2ShortFunction"
import { $Object2LongFunction } from "it.unimi.dsi.fastutil.objects.Object2LongFunction"
import { $Object2DoubleFunction } from "it.unimi.dsi.fastutil.objects.Object2DoubleFunction"
import { $Short2DoubleFunction$$Type } from "it.unimi.dsi.fastutil.shorts.Short2DoubleFunction"
import { $Object2FloatFunction } from "it.unimi.dsi.fastutil.objects.Object2FloatFunction"
import { $Short2ByteFunction$$Type } from "it.unimi.dsi.fastutil.shorts.Short2ByteFunction"
import { $Object2IntFunction } from "it.unimi.dsi.fastutil.objects.Object2IntFunction"
import { $Short2LongFunction$$Type } from "it.unimi.dsi.fastutil.shorts.Short2LongFunction"
import { $Short2IntFunction$$Type } from "it.unimi.dsi.fastutil.shorts.Short2IntFunction"
import { $Reference2ObjectFunction$$Type } from "it.unimi.dsi.fastutil.objects.Reference2ObjectFunction"
import { $Byte2ObjectFunction$$Type } from "it.unimi.dsi.fastutil.bytes.Byte2ObjectFunction"
import { $Short2ObjectFunction$$Type } from "it.unimi.dsi.fastutil.shorts.Short2ObjectFunction"
import { $Function as $Function$0 } from "it.unimi.dsi.fastutil.Function"
import { $Object2ByteFunction } from "it.unimi.dsi.fastutil.objects.Object2ByteFunction"
import { $Byte2ShortFunction } from "it.unimi.dsi.fastutil.bytes.Byte2ShortFunction"
import { $Int2ObjectFunction$$Type } from "it.unimi.dsi.fastutil.ints.Int2ObjectFunction"
import { $Long2ObjectFunction$$Type } from "it.unimi.dsi.fastutil.longs.Long2ObjectFunction"
import { $Reference2ShortFunction } from "it.unimi.dsi.fastutil.objects.Reference2ShortFunction"
import { $ToIntFunction } from "java.util.function.ToIntFunction"
import { $Char2ShortFunction } from "it.unimi.dsi.fastutil.chars.Char2ShortFunction"
import { $Short2CharFunction$$Type } from "it.unimi.dsi.fastutil.shorts.Short2CharFunction"
import { $Float2ShortFunction } from "it.unimi.dsi.fastutil.floats.Float2ShortFunction"
import { $Short2FloatFunction$$Type } from "it.unimi.dsi.fastutil.shorts.Short2FloatFunction"
import { $Object2ReferenceFunction } from "it.unimi.dsi.fastutil.objects.Object2ReferenceFunction"
import { $Float2ObjectFunction$$Type } from "it.unimi.dsi.fastutil.floats.Float2ObjectFunction"
import { $Char2ObjectFunction$$Type } from "it.unimi.dsi.fastutil.chars.Char2ObjectFunction"
import { $Object2CharFunction } from "it.unimi.dsi.fastutil.objects.Object2CharFunction"

export interface $Object2ShortFunction<K = any> extends $Function$0<K, short>, $ToIntFunction<K> {
/** @deprecated */
"andThen"<T>(function0: $Function$$Type<short, T>): $Function<K, T>
"andThenByte"(short2ByteFunction0: $Short2ByteFunction$$Type): $Object2ByteFunction<K>
"andThenChar"(short2CharFunction0: $Short2CharFunction$$Type): $Object2CharFunction<K>
"andThenDouble"(short2DoubleFunction0: $Short2DoubleFunction$$Type): $Object2DoubleFunction<K>
"andThenFloat"(short2FloatFunction0: $Short2FloatFunction$$Type): $Object2FloatFunction<K>
"andThenInt"(short2IntFunction0: $Short2IntFunction$$Type): $Object2IntFunction<K>
"andThenLong"(short2LongFunction0: $Short2LongFunction$$Type): $Object2LongFunction<K>
"andThenObject"<T>(short2ObjectFunction0: $Short2ObjectFunction$$Type<T>): $Object2ObjectFunction<K, T>
"andThenReference"<T>(short2ReferenceFunction0: $Short2ReferenceFunction$$Type<T>): $Object2ReferenceFunction<K, T>
"andThenShort"(short2ShortFunction0: $Short2ShortFunction$$Type): $Object2ShortFunction<K>
"apply"(k0: K): short
"applyAsInt"(k0: K): integer
"clear"(): void
"compose"<V>(function0: $Function$$Type<V, K>): $Function<V, short>
"composeByte"(byte2ObjectFunction0: $Byte2ObjectFunction$$Type<K>): $Byte2ShortFunction
"composeChar"(char2ObjectFunction0: $Char2ObjectFunction$$Type<K>): $Char2ShortFunction
"composeDouble"(double2ObjectFunction0: $Double2ObjectFunction$$Type<K>): $Double2ShortFunction
"composeFloat"(float2ObjectFunction0: $Float2ObjectFunction$$Type<K>): $Float2ShortFunction
"composeInt"(int2ObjectFunction0: $Int2ObjectFunction$$Type<K>): $Int2ShortFunction
"composeLong"(long2ObjectFunction0: $Long2ObjectFunction$$Type<K>): $Long2ShortFunction
"composeObject"<T>(object2ObjectFunction0: $Object2ObjectFunction$$Type<T, K>): $Object2ShortFunction<T>
"composeReference"<T>(reference2ObjectFunction0: $Reference2ObjectFunction$$Type<T, K>): $Reference2ShortFunction<T>
"composeShort"(short2ObjectFunction0: $Short2ObjectFunction$$Type<K>): $Short2ShortFunction
"containsKey"(object0: any): boolean
"defaultReturnValue"(): short
"defaultReturnValue"(short0: short): void
/** @deprecated */
"get"(object0: any): short
"getOrDefault"(object0: any, short1: short): short
/** @deprecated */
"getOrDefault"(object0: any, short1: short): short
"getShort"(object0: any): short
/** @deprecated */
"put"(k0: K, short1: short): short
"put"(k0: K, short1: short): short
"removeShort"(object0: any): short
"size"(): integer
}

export namespace $Object2ShortFunction {
function identity<T>(): $Function<T, T>
}
export abstract class $Object2ShortFunction$$Static<K = any> implements $Object2ShortFunction<K> {
static "identity"<T>(): $Function<T, T>
}
}

declare module "it.unimi.dsi.fastutil.objects.ObjectList" {
import { $Consumer$$Type } from "java.util.function.Consumer"
import { $List, $List$$Type } from "java.util.List"
import { $Stream } from "java.util.stream.Stream"
import { $Predicate$$Type } from "java.util.function.Predicate"
import { $Collection$$Type } from "java.util.Collection"
import { $UnaryOperator$$Type } from "java.util.function.UnaryOperator"
import { $Comparable } from "java.lang.Comparable"
import { $Comparator$$Type } from "java.util.Comparator"
import { $ObjectCollection } from "it.unimi.dsi.fastutil.objects.ObjectCollection"
import { $IntFunction$$Type } from "java.util.function.IntFunction"

export interface $ObjectList<K = any> extends $List<K>, $Comparable<$List<K>>, $ObjectCollection<K> {
"add"(int0: integer, k1: K): void
"add"(k0: K): boolean
"addAll"(int0: integer, objectList1: $ObjectList$$Type<K>): boolean
"addAll"(objectList0: $ObjectList$$Type<K>): boolean
"addAll"(int0: integer, collection1: $Collection$$Type<K>): boolean
"addAll"(collection0: $Collection$$Type<K>): boolean
"addElements"(int0: integer, k1s: K[], int2: integer, int3: integer): void
"addElements"(int0: integer, k1s: K[]): void
"clear"(): void
"compareTo"(list0: $List$$Type<K>): integer
"contains"(object0: any): boolean
"containsAll"(collection0: $Collection$$Type<any>): boolean
"equals"(object0: any): boolean
"forEach"(consumer0: $Consumer$$Type<K>): void
"get"(int0: integer): K
"getElements"(int0: integer, object1s: any[], int2: integer, int3: integer): void
"hashCode"(): integer
"indexOf"(object0: any): integer
"isEmpty"(): boolean
"lastIndexOf"(object0: any): integer
"parallelStream"(): $Stream<K>
"remove"(object0: any): boolean
"remove"(int0: integer): K
"removeAll"(collection0: $Collection$$Type<any>): boolean
"removeElements"(int0: integer, int1: integer): void
"removeIf"(predicate0: $Predicate$$Type<K>): boolean
"replaceAll"(unaryOperator0: $UnaryOperator$$Type<K>): void
"retainAll"(collection0: $Collection$$Type<any>): boolean
"set"(int0: integer, k1: K): K
"setElements"(int0: integer, k1s: K[], int2: integer, int3: integer): void
"setElements"(k0s: K[]): void
"setElements"(int0: integer, k1s: K[]): void
"size"(int0: integer): void
"size"(): integer
"sort"(comparator0: $Comparator$$Type<K>): void
"stream"(): $Stream<K>
"toArray"(): any[]
"toArray"<T>(t0s: T[]): T[]
"toArray"<T>(intFunction0: $IntFunction$$Type<T[]>): T[]
"unstableSort"(comparator0: $Comparator$$Type<K>): void
get "empty"(): boolean
set "elements"(value: K[])
}

export namespace $ObjectList {
function copyOf<E>(collection0: $Collection$$Type<E>): $List<E>
function of<K>(k0: K, k1: K): $ObjectList<K>
function of<K>(k0: K, k1: K, k2: K): $ObjectList<K>
function of<K>(...k0s: K[]): $ObjectList<K>
function of<K>(k0: K): $ObjectList<K>
function of<K>(): $ObjectList<K>
function of<E>(e0: E, e1: E, e2: E, e3: E): $List<E>
function of<E>(e0: E, e1: E, e2: E, e3: E, e4: E, e5: E, e6: E, e7: E): $List<E>
function of<E>(e0: E, e1: E, e2: E, e3: E, e4: E, e5: E, e6: E): $List<E>
function of<E>(e0: E, e1: E, e2: E, e3: E, e4: E, e5: E): $List<E>
function of<E>(e0: E, e1: E, e2: E, e3: E, e4: E): $List<E>
function of<E>(e0: E, e1: E, e2: E, e3: E, e4: E, e5: E, e6: E, e7: E, e8: E, e9: E): $List<E>
function of<E>(e0: E, e1: E, e2: E, e3: E, e4: E, e5: E, e6: E, e7: E, e8: E): $List<E>
}
export abstract class $ObjectList$$Static<K = any> implements $ObjectList<K> {
static "copyOf"<E>(collection0: $Collection$$Type<E>): $List<E>
static "of"<K>(k0: K, k1: K): $ObjectList<K>
static "of"<K>(k0: K, k1: K, k2: K): $ObjectList<K>
static "of"<K>(...k0s: K[]): $ObjectList<K>
static "of"<K>(k0: K): $ObjectList<K>
static "of"<K>(): $ObjectList<K>
static "of"<E>(e0: E, e1: E, e2: E, e3: E): $List<E>
static "of"<E>(e0: E, e1: E, e2: E, e3: E, e4: E, e5: E, e6: E, e7: E): $List<E>
static "of"<E>(e0: E, e1: E, e2: E, e3: E, e4: E, e5: E, e6: E): $List<E>
static "of"<E>(e0: E, e1: E, e2: E, e3: E, e4: E, e5: E): $List<E>
static "of"<E>(e0: E, e1: E, e2: E, e3: E, e4: E): $List<E>
static "of"<E>(e0: E, e1: E, e2: E, e3: E, e4: E, e5: E, e6: E, e7: E, e8: E, e9: E): $List<E>
static "of"<E>(e0: E, e1: E, e2: E, e3: E, e4: E, e5: E, e6: E, e7: E, e8: E): $List<E>
}
}

declare module "it.unimi.dsi.fastutil.objects.AbstractObject2ByteFunction" {
import { $Byte2FloatFunction$$Type } from "it.unimi.dsi.fastutil.bytes.Byte2FloatFunction"
import { $Byte2LongFunction$$Type } from "it.unimi.dsi.fastutil.bytes.Byte2LongFunction"
import { $Int2ByteFunction } from "it.unimi.dsi.fastutil.ints.Int2ByteFunction"
import { $Float2ByteFunction } from "it.unimi.dsi.fastutil.floats.Float2ByteFunction"
import { $Double2ObjectFunction$$Type } from "it.unimi.dsi.fastutil.doubles.Double2ObjectFunction"
import { $Object2ObjectFunction, $Object2ObjectFunction$$Type } from "it.unimi.dsi.fastutil.objects.Object2ObjectFunction"
import { $Function, $Function$$Type } from "java.util.function.Function"
import { $Object2LongFunction } from "it.unimi.dsi.fastutil.objects.Object2LongFunction"
import { $Double2ByteFunction } from "it.unimi.dsi.fastutil.doubles.Double2ByteFunction"
import { $Object2DoubleFunction } from "it.unimi.dsi.fastutil.objects.Object2DoubleFunction"
import { $Reference2ByteFunction } from "it.unimi.dsi.fastutil.objects.Reference2ByteFunction"
import { $Byte2DoubleFunction$$Type } from "it.unimi.dsi.fastutil.bytes.Byte2DoubleFunction"
import { $Object2FloatFunction } from "it.unimi.dsi.fastutil.objects.Object2FloatFunction"
import { $Short2ByteFunction } from "it.unimi.dsi.fastutil.shorts.Short2ByteFunction"
import { $Object2IntFunction } from "it.unimi.dsi.fastutil.objects.Object2IntFunction"
import { $Reference2ObjectFunction$$Type } from "it.unimi.dsi.fastutil.objects.Reference2ObjectFunction"
import { $Byte2ObjectFunction$$Type } from "it.unimi.dsi.fastutil.bytes.Byte2ObjectFunction"
import { $Short2ObjectFunction$$Type } from "it.unimi.dsi.fastutil.shorts.Short2ObjectFunction"
import { $Object2ByteFunction } from "it.unimi.dsi.fastutil.objects.Object2ByteFunction"
import { $Byte2ReferenceFunction$$Type } from "it.unimi.dsi.fastutil.bytes.Byte2ReferenceFunction"
import { $Char2ByteFunction } from "it.unimi.dsi.fastutil.chars.Char2ByteFunction"
import { $Byte2ShortFunction$$Type } from "it.unimi.dsi.fastutil.bytes.Byte2ShortFunction"
import { $Int2ObjectFunction$$Type } from "it.unimi.dsi.fastutil.ints.Int2ObjectFunction"
import { $Long2ObjectFunction$$Type } from "it.unimi.dsi.fastutil.longs.Long2ObjectFunction"
import { $Byte2CharFunction$$Type } from "it.unimi.dsi.fastutil.bytes.Byte2CharFunction"
import { $Serializable } from "java.io.Serializable"
import { $Object2ReferenceFunction } from "it.unimi.dsi.fastutil.objects.Object2ReferenceFunction"
import { $Float2ObjectFunction$$Type } from "it.unimi.dsi.fastutil.floats.Float2ObjectFunction"
import { $Long2ByteFunction } from "it.unimi.dsi.fastutil.longs.Long2ByteFunction"
import { $Char2ObjectFunction$$Type } from "it.unimi.dsi.fastutil.chars.Char2ObjectFunction"
import { $Object2ShortFunction } from "it.unimi.dsi.fastutil.objects.Object2ShortFunction"
import { $Byte2ByteFunction, $Byte2ByteFunction$$Type } from "it.unimi.dsi.fastutil.bytes.Byte2ByteFunction"
import { $Object2CharFunction } from "it.unimi.dsi.fastutil.objects.Object2CharFunction"
import { $Byte2IntFunction$$Type } from "it.unimi.dsi.fastutil.bytes.Byte2IntFunction"

export class $AbstractObject2ByteFunction<K = any> implements $Object2ByteFunction<K>, $Serializable {
/** @deprecated */
public "andThen"<T>(function0: $Function$$Type<byte, T>): $Function<K, T>
public "andThenByte"(byte2ByteFunction0: $Byte2ByteFunction$$Type): $Object2ByteFunction<K>
public "andThenChar"(byte2CharFunction0: $Byte2CharFunction$$Type): $Object2CharFunction<K>
public "andThenDouble"(byte2DoubleFunction0: $Byte2DoubleFunction$$Type): $Object2DoubleFunction<K>
public "andThenFloat"(byte2FloatFunction0: $Byte2FloatFunction$$Type): $Object2FloatFunction<K>
public "andThenInt"(byte2IntFunction0: $Byte2IntFunction$$Type): $Object2IntFunction<K>
public "andThenLong"(byte2LongFunction0: $Byte2LongFunction$$Type): $Object2LongFunction<K>
public "andThenObject"<T>(byte2ObjectFunction0: $Byte2ObjectFunction$$Type<T>): $Object2ObjectFunction<K, T>
public "andThenReference"<T>(byte2ReferenceFunction0: $Byte2ReferenceFunction$$Type<T>): $Object2ReferenceFunction<K, T>
public "andThenShort"(byte2ShortFunction0: $Byte2ShortFunction$$Type): $Object2ShortFunction<K>
public "apply"(k0: K): byte
public "applyAsInt"(k0: K): integer
public "clear"(): void
public "compose"<V>(function0: $Function$$Type<V, K>): $Function<V, byte>
public "composeByte"(byte2ObjectFunction0: $Byte2ObjectFunction$$Type<K>): $Byte2ByteFunction
public "composeChar"(char2ObjectFunction0: $Char2ObjectFunction$$Type<K>): $Char2ByteFunction
public "composeDouble"(double2ObjectFunction0: $Double2ObjectFunction$$Type<K>): $Double2ByteFunction
public "composeFloat"(float2ObjectFunction0: $Float2ObjectFunction$$Type<K>): $Float2ByteFunction
public "composeInt"(int2ObjectFunction0: $Int2ObjectFunction$$Type<K>): $Int2ByteFunction
public "composeLong"(long2ObjectFunction0: $Long2ObjectFunction$$Type<K>): $Long2ByteFunction
public "composeObject"<T>(object2ObjectFunction0: $Object2ObjectFunction$$Type<T, K>): $Object2ByteFunction<T>
public "composeReference"<T>(reference2ObjectFunction0: $Reference2ObjectFunction$$Type<T, K>): $Reference2ByteFunction<T>
public "composeShort"(short2ObjectFunction0: $Short2ObjectFunction$$Type<K>): $Short2ByteFunction
public "containsKey"(object0: any): boolean
public "defaultReturnValue"(byte0: byte): void
public "defaultReturnValue"(): byte
/** @deprecated */
public "get"(object0: any): byte
public "getByte"(object0: any): byte
public "getOrDefault"(object0: any, byte1: byte): byte
/** @deprecated */
public "getOrDefault"(object0: any, byte1: byte): byte
public static "identity"<T>(): $Function<T, T>
/** @deprecated */
public "put"(k0: K, byte1: byte): byte
public "put"(k0: K, byte1: byte): byte
public "removeByte"(object0: any): byte
public "size"(): integer
}
}

declare module "it.unimi.dsi.fastutil.objects.Reference2IntMap" {
import { $Double2ReferenceFunction$$Type } from "it.unimi.dsi.fastutil.doubles.Double2ReferenceFunction"
import { $Int2ShortFunction$$Type } from "it.unimi.dsi.fastutil.ints.Int2ShortFunction"
import { $Reference2IntMap$Entry } from "it.unimi.dsi.fastutil.objects.Reference2IntMap$Entry"
import { $Int2ByteFunction$$Type } from "it.unimi.dsi.fastutil.ints.Int2ByteFunction"
import { $Int2ReferenceFunction$$Type } from "it.unimi.dsi.fastutil.ints.Int2ReferenceFunction"
import { $Short2ReferenceFunction$$Type } from "it.unimi.dsi.fastutil.shorts.Short2ReferenceFunction"
import { $BiFunction$$Type } from "java.util.function.BiFunction"
import { $IntBinaryOperator$$Type } from "java.util.function.IntBinaryOperator"
import { $Function, $Function$$Type } from "java.util.function.Function"
import { $IntCollection } from "it.unimi.dsi.fastutil.ints.IntCollection"
import { $Int2DoubleFunction$$Type } from "it.unimi.dsi.fastutil.ints.Int2DoubleFunction"
import { $Reference2FloatFunction } from "it.unimi.dsi.fastutil.objects.Reference2FloatFunction"
import { $Reference2ByteFunction } from "it.unimi.dsi.fastutil.objects.Reference2ByteFunction"
import { $Int2IntFunction, $Int2IntFunction$$Type } from "it.unimi.dsi.fastutil.ints.Int2IntFunction"
import { $Float2IntFunction } from "it.unimi.dsi.fastutil.floats.Float2IntFunction"
import { $Char2ReferenceFunction$$Type } from "it.unimi.dsi.fastutil.chars.Char2ReferenceFunction"
import { $Reference2LongFunction } from "it.unimi.dsi.fastutil.objects.Reference2LongFunction"
import { $Object2IntFunction } from "it.unimi.dsi.fastutil.objects.Object2IntFunction"
import { $Map, $Map$$Type } from "java.util.Map"
import { $BiConsumer$$Type } from "java.util.function.BiConsumer"
import { $Reference2IntFunction, $Reference2IntFunction$$Type } from "it.unimi.dsi.fastutil.objects.Reference2IntFunction"
import { $Long2IntFunction } from "it.unimi.dsi.fastutil.longs.Long2IntFunction"
import { $Short2IntFunction } from "it.unimi.dsi.fastutil.shorts.Short2IntFunction"
import { $ReferenceSet } from "it.unimi.dsi.fastutil.objects.ReferenceSet"
import { $Int2FloatFunction$$Type } from "it.unimi.dsi.fastutil.ints.Int2FloatFunction"
import { $Reference2ObjectFunction } from "it.unimi.dsi.fastutil.objects.Reference2ObjectFunction"
import { $Map$Entry, $Map$Entry$$Type } from "java.util.Map$Entry"
import { $Byte2ReferenceFunction$$Type } from "it.unimi.dsi.fastutil.bytes.Byte2ReferenceFunction"
import { $Int2ObjectFunction$$Type } from "it.unimi.dsi.fastutil.ints.Int2ObjectFunction"
import { $Reference2ShortFunction } from "it.unimi.dsi.fastutil.objects.Reference2ShortFunction"
import { $ToIntFunction$$Type } from "java.util.function.ToIntFunction"
import { $Char2IntFunction } from "it.unimi.dsi.fastutil.chars.Char2IntFunction"
import { $ObjectSet } from "it.unimi.dsi.fastutil.objects.ObjectSet"
import { $Int2LongFunction$$Type } from "it.unimi.dsi.fastutil.ints.Int2LongFunction"
import { $Reference2ReferenceFunction, $Reference2ReferenceFunction$$Type } from "it.unimi.dsi.fastutil.objects.Reference2ReferenceFunction"
import { $Object2ReferenceFunction$$Type } from "it.unimi.dsi.fastutil.objects.Object2ReferenceFunction"
import { $Long2ReferenceFunction$$Type } from "it.unimi.dsi.fastutil.longs.Long2ReferenceFunction"
import { $IntBinaryOperator$$Type as $IntBinaryOperator$0$$Type } from "it.unimi.dsi.fastutil.ints.IntBinaryOperator"
import { $Reference2DoubleFunction } from "it.unimi.dsi.fastutil.objects.Reference2DoubleFunction"
import { $Reference2CharFunction } from "it.unimi.dsi.fastutil.objects.Reference2CharFunction"
import { $Float2ReferenceFunction$$Type } from "it.unimi.dsi.fastutil.floats.Float2ReferenceFunction"
import { $Double2IntFunction } from "it.unimi.dsi.fastutil.doubles.Double2IntFunction"
import { $Int2CharFunction$$Type } from "it.unimi.dsi.fastutil.ints.Int2CharFunction"
import { $Byte2IntFunction } from "it.unimi.dsi.fastutil.bytes.Byte2IntFunction"

export interface $Reference2IntMap<K = any> extends $Reference2IntFunction<K>, $Map<K, integer> {
/** @deprecated */
"andThen"<T>(function0: $Function$$Type<integer, T>): $Function<K, T>
"andThenByte"(int2ByteFunction0: $Int2ByteFunction$$Type): $Reference2ByteFunction<K>
"andThenChar"(int2CharFunction0: $Int2CharFunction$$Type): $Reference2CharFunction<K>
"andThenDouble"(int2DoubleFunction0: $Int2DoubleFunction$$Type): $Reference2DoubleFunction<K>
"andThenFloat"(int2FloatFunction0: $Int2FloatFunction$$Type): $Reference2FloatFunction<K>
"andThenInt"(int2IntFunction0: $Int2IntFunction$$Type): $Reference2IntFunction<K>
"andThenLong"(int2LongFunction0: $Int2LongFunction$$Type): $Reference2LongFunction<K>
"andThenObject"<T>(int2ObjectFunction0: $Int2ObjectFunction$$Type<T>): $Reference2ObjectFunction<K, T>
"andThenReference"<T>(int2ReferenceFunction0: $Int2ReferenceFunction$$Type<T>): $Reference2ReferenceFunction<K, T>
"andThenShort"(int2ShortFunction0: $Int2ShortFunction$$Type): $Reference2ShortFunction<K>
"apply"(k0: K): integer
"applyAsInt"(k0: K): integer
"clear"(): void
"compose"<V>(function0: $Function$$Type<V, K>): $Function<V, integer>
"composeByte"(byte2ReferenceFunction0: $Byte2ReferenceFunction$$Type<K>): $Byte2IntFunction
"composeChar"(char2ReferenceFunction0: $Char2ReferenceFunction$$Type<K>): $Char2IntFunction
"composeDouble"(double2ReferenceFunction0: $Double2ReferenceFunction$$Type<K>): $Double2IntFunction
"composeFloat"(float2ReferenceFunction0: $Float2ReferenceFunction$$Type<K>): $Float2IntFunction
"composeInt"(int2ReferenceFunction0: $Int2ReferenceFunction$$Type<K>): $Int2IntFunction
"composeLong"(long2ReferenceFunction0: $Long2ReferenceFunction$$Type<K>): $Long2IntFunction
"composeObject"<T>(object2ReferenceFunction0: $Object2ReferenceFunction$$Type<T, K>): $Object2IntFunction<T>
"composeReference"<T>(reference2ReferenceFunction0: $Reference2ReferenceFunction$$Type<T, K>): $Reference2IntFunction<T>
"composeShort"(short2ReferenceFunction0: $Short2ReferenceFunction$$Type<K>): $Short2IntFunction
"compute"(k0: K, biFunction1: $BiFunction$$Type<K, integer, integer>): integer
"computeIfAbsent"(k0: K, toIntFunction1: $ToIntFunction$$Type<K>): integer
"computeIfAbsent"(k0: K, reference2IntFunction1: $Reference2IntFunction$$Type<K>): integer
"computeIfAbsent"(k0: K, function1: $Function$$Type<K, integer>): integer
"computeIfPresent"(k0: K, biFunction1: $BiFunction$$Type<K, integer, integer>): integer
"computeInt"(k0: K, biFunction1: $BiFunction$$Type<K, integer, integer>): integer
/** @deprecated */
"computeIntIfAbsent"(k0: K, toIntFunction1: $ToIntFunction$$Type<K>): integer
/** @deprecated */
"computeIntIfAbsentPartial"(k0: K, reference2IntFunction1: $Reference2IntFunction$$Type<K>): integer
"computeIntIfPresent"(k0: K, biFunction1: $BiFunction$$Type<K, integer, integer>): integer
"containsKey"(object0: any): boolean
/** @deprecated */
"containsValue"(object0: any): boolean
"containsValue"(int0: integer): boolean
"defaultReturnValue"(int0: integer): void
"defaultReturnValue"(): integer
/** @deprecated */
"entrySet"(): $ObjectSet<$Map$Entry<K, integer>>
"equals"(object0: any): boolean
"forEach"(biConsumer0: $BiConsumer$$Type<K, integer>): void
"getInt"(object0: any): integer
/** @deprecated */
"getOrDefault"(object0: any, integer1: integer): integer
"getOrDefault"(object0: any, int1: integer): integer
"hashCode"(): integer
"isEmpty"(): boolean
"keySet"(): $ReferenceSet<K>
/** @deprecated */
"merge"(k0: K, integer1: integer, biFunction2: $BiFunction$$Type<integer, integer, integer>): integer
"merge"(k0: K, int1: integer, biFunction2: $BiFunction$$Type<integer, integer, integer>): integer
"mergeInt"(k0: K, int1: integer, intBinaryOperator2: $IntBinaryOperator$0$$Type): integer
/** @deprecated */
"mergeInt"(k0: K, int1: integer, biFunction2: $BiFunction$$Type<integer, integer, integer>): integer
"mergeInt"(k0: K, int1: integer, intBinaryOperator2: $IntBinaryOperator$$Type): integer
/** @deprecated */
"put"(k0: K, integer1: integer): integer
"put"(k0: K, int1: integer): integer
"putAll"(map0: $Map$$Type<K, integer>): void
/** @deprecated */
"putIfAbsent"(k0: K, integer1: integer): integer
"putIfAbsent"(k0: K, int1: integer): integer
"reference2IntEntrySet"(): $ObjectSet<$Reference2IntMap$Entry<K>>
"remove"(object0: any, int1: integer): boolean
/** @deprecated */
"remove"(object0: any, object1: any): boolean
"removeInt"(object0: any): integer
/** @deprecated */
"replace"(k0: K, integer1: integer): integer
"replace"(k0: K, int1: integer, int2: integer): boolean
"replace"(k0: K, int1: integer): integer
/** @deprecated */
"replace"(k0: K, integer1: integer, integer2: integer): boolean
"replaceAll"(biFunction0: $BiFunction$$Type<K, integer, integer>): void
"size"(): integer
"values"(): $IntCollection
get "empty"(): boolean
}

export namespace $Reference2IntMap {
function copyOf<K, V>(map0: $Map$$Type<K, V>): $Map<K, V>
function entry<K, V>(k0: K, v1: V): $Map$Entry<K, V>
function identity<T>(): $Function<T, T>
function of<K, V>(k0: K, v1: V, k2: K, v3: V, k4: K, v5: V, k6: K, v7: V, k8: K, v9: V): $Map<K, V>
function of<K, V>(k0: K, v1: V, k2: K, v3: V, k4: K, v5: V, k6: K, v7: V): $Map<K, V>
function of<K, V>(k0: K, v1: V, k2: K, v3: V, k4: K, v5: V): $Map<K, V>
function of<K, V>(): $Map<K, V>
function of<K, V>(k0: K, v1: V, k2: K, v3: V): $Map<K, V>
function of<K, V>(k0: K, v1: V): $Map<K, V>
function of<K, V>(k0: K, v1: V, k2: K, v3: V, k4: K, v5: V, k6: K, v7: V, k8: K, v9: V, k10: K, v11: V, k12: K, v13: V, k14: K, v15: V, k16: K, v17: V, k18: K, v19: V): $Map<K, V>
function of<K, V>(k0: K, v1: V, k2: K, v3: V, k4: K, v5: V, k6: K, v7: V, k8: K, v9: V, k10: K, v11: V, k12: K, v13: V, k14: K, v15: V, k16: K, v17: V): $Map<K, V>
function of<K, V>(k0: K, v1: V, k2: K, v3: V, k4: K, v5: V, k6: K, v7: V, k8: K, v9: V, k10: K, v11: V, k12: K, v13: V, k14: K, v15: V): $Map<K, V>
function of<K, V>(k0: K, v1: V, k2: K, v3: V, k4: K, v5: V, k6: K, v7: V, k8: K, v9: V, k10: K, v11: V, k12: K, v13: V): $Map<K, V>
function of<K, V>(k0: K, v1: V, k2: K, v3: V, k4: K, v5: V, k6: K, v7: V, k8: K, v9: V, k10: K, v11: V): $Map<K, V>
function ofEntries<K, V>(...entry0s: $Map$Entry$$Type<K, V>[]): $Map<K, V>
}
export abstract class $Reference2IntMap$$Static<K = any> implements $Reference2IntMap<K> {
static "copyOf"<K, V>(map0: $Map$$Type<K, V>): $Map<K, V>
static "entry"<K, V>(k0: K, v1: V): $Map$Entry<K, V>
static "identity"<T>(): $Function<T, T>
static "of"<K, V>(k0: K, v1: V, k2: K, v3: V, k4: K, v5: V, k6: K, v7: V, k8: K, v9: V): $Map<K, V>
static "of"<K, V>(k0: K, v1: V, k2: K, v3: V, k4: K, v5: V, k6: K, v7: V): $Map<K, V>
static "of"<K, V>(k0: K, v1: V, k2: K, v3: V, k4: K, v5: V): $Map<K, V>
static "of"<K, V>(): $Map<K, V>
static "of"<K, V>(k0: K, v1: V, k2: K, v3: V): $Map<K, V>
static "of"<K, V>(k0: K, v1: V): $Map<K, V>
static "of"<K, V>(k0: K, v1: V, k2: K, v3: V, k4: K, v5: V, k6: K, v7: V, k8: K, v9: V, k10: K, v11: V, k12: K, v13: V, k14: K, v15: V, k16: K, v17: V, k18: K, v19: V): $Map<K, V>
static "of"<K, V>(k0: K, v1: V, k2: K, v3: V, k4: K, v5: V, k6: K, v7: V, k8: K, v9: V, k10: K, v11: V, k12: K, v13: V, k14: K, v15: V, k16: K, v17: V): $Map<K, V>
static "of"<K, V>(k0: K, v1: V, k2: K, v3: V, k4: K, v5: V, k6: K, v7: V, k8: K, v9: V, k10: K, v11: V, k12: K, v13: V, k14: K, v15: V): $Map<K, V>
static "of"<K, V>(k0: K, v1: V, k2: K, v3: V, k4: K, v5: V, k6: K, v7: V, k8: K, v9: V, k10: K, v11: V, k12: K, v13: V): $Map<K, V>
static "of"<K, V>(k0: K, v1: V, k2: K, v3: V, k4: K, v5: V, k6: K, v7: V, k8: K, v9: V, k10: K, v11: V): $Map<K, V>
static "ofEntries"<K, V>(...entry0s: $Map$Entry$$Type<K, V>[]): $Map<K, V>
}
}

declare module "it.unimi.dsi.fastutil.objects.Reference2IntFunction" {
import { $Double2ReferenceFunction$$Type } from "it.unimi.dsi.fastutil.doubles.Double2ReferenceFunction"
import { $Int2ShortFunction$$Type } from "it.unimi.dsi.fastutil.ints.Int2ShortFunction"
import { $Int2ByteFunction$$Type } from "it.unimi.dsi.fastutil.ints.Int2ByteFunction"
import { $Int2ReferenceFunction$$Type } from "it.unimi.dsi.fastutil.ints.Int2ReferenceFunction"
import { $Short2ReferenceFunction$$Type } from "it.unimi.dsi.fastutil.shorts.Short2ReferenceFunction"
import { $Function, $Function$$Type } from "java.util.function.Function"
import { $Int2DoubleFunction$$Type } from "it.unimi.dsi.fastutil.ints.Int2DoubleFunction"
import { $Reference2FloatFunction } from "it.unimi.dsi.fastutil.objects.Reference2FloatFunction"
import { $Reference2ByteFunction } from "it.unimi.dsi.fastutil.objects.Reference2ByteFunction"
import { $Int2IntFunction, $Int2IntFunction$$Type } from "it.unimi.dsi.fastutil.ints.Int2IntFunction"
import { $Float2IntFunction } from "it.unimi.dsi.fastutil.floats.Float2IntFunction"
import { $Char2ReferenceFunction$$Type } from "it.unimi.dsi.fastutil.chars.Char2ReferenceFunction"
import { $Reference2LongFunction } from "it.unimi.dsi.fastutil.objects.Reference2LongFunction"
import { $Object2IntFunction } from "it.unimi.dsi.fastutil.objects.Object2IntFunction"
import { $Long2IntFunction } from "it.unimi.dsi.fastutil.longs.Long2IntFunction"
import { $Short2IntFunction } from "it.unimi.dsi.fastutil.shorts.Short2IntFunction"
import { $Int2FloatFunction$$Type } from "it.unimi.dsi.fastutil.ints.Int2FloatFunction"
import { $Reference2ObjectFunction } from "it.unimi.dsi.fastutil.objects.Reference2ObjectFunction"
import { $Function as $Function$0 } from "it.unimi.dsi.fastutil.Function"
import { $Byte2ReferenceFunction$$Type } from "it.unimi.dsi.fastutil.bytes.Byte2ReferenceFunction"
import { $Int2ObjectFunction$$Type } from "it.unimi.dsi.fastutil.ints.Int2ObjectFunction"
import { $Reference2ShortFunction } from "it.unimi.dsi.fastutil.objects.Reference2ShortFunction"
import { $ToIntFunction } from "java.util.function.ToIntFunction"
import { $Char2IntFunction } from "it.unimi.dsi.fastutil.chars.Char2IntFunction"
import { $Int2LongFunction$$Type } from "it.unimi.dsi.fastutil.ints.Int2LongFunction"
import { $Reference2ReferenceFunction, $Reference2ReferenceFunction$$Type } from "it.unimi.dsi.fastutil.objects.Reference2ReferenceFunction"
import { $Object2ReferenceFunction$$Type } from "it.unimi.dsi.fastutil.objects.Object2ReferenceFunction"
import { $Long2ReferenceFunction$$Type } from "it.unimi.dsi.fastutil.longs.Long2ReferenceFunction"
import { $Reference2DoubleFunction } from "it.unimi.dsi.fastutil.objects.Reference2DoubleFunction"
import { $Reference2CharFunction } from "it.unimi.dsi.fastutil.objects.Reference2CharFunction"
import { $Float2ReferenceFunction$$Type } from "it.unimi.dsi.fastutil.floats.Float2ReferenceFunction"
import { $Double2IntFunction } from "it.unimi.dsi.fastutil.doubles.Double2IntFunction"
import { $Int2CharFunction$$Type } from "it.unimi.dsi.fastutil.ints.Int2CharFunction"
import { $Byte2IntFunction } from "it.unimi.dsi.fastutil.bytes.Byte2IntFunction"

export interface $Reference2IntFunction<K = any> extends $Function$0<K, integer>, $ToIntFunction<K> {
/** @deprecated */
"andThen"<T>(function0: $Function$$Type<integer, T>): $Function<K, T>
"andThenByte"(int2ByteFunction0: $Int2ByteFunction$$Type): $Reference2ByteFunction<K>
"andThenChar"(int2CharFunction0: $Int2CharFunction$$Type): $Reference2CharFunction<K>
"andThenDouble"(int2DoubleFunction0: $Int2DoubleFunction$$Type): $Reference2DoubleFunction<K>
"andThenFloat"(int2FloatFunction0: $Int2FloatFunction$$Type): $Reference2FloatFunction<K>
"andThenInt"(int2IntFunction0: $Int2IntFunction$$Type): $Reference2IntFunction<K>
"andThenLong"(int2LongFunction0: $Int2LongFunction$$Type): $Reference2LongFunction<K>
"andThenObject"<T>(int2ObjectFunction0: $Int2ObjectFunction$$Type<T>): $Reference2ObjectFunction<K, T>
"andThenReference"<T>(int2ReferenceFunction0: $Int2ReferenceFunction$$Type<T>): $Reference2ReferenceFunction<K, T>
"andThenShort"(int2ShortFunction0: $Int2ShortFunction$$Type): $Reference2ShortFunction<K>
"apply"(k0: K): integer
"applyAsInt"(k0: K): integer
"clear"(): void
"compose"<V>(function0: $Function$$Type<V, K>): $Function<V, integer>
"composeByte"(byte2ReferenceFunction0: $Byte2ReferenceFunction$$Type<K>): $Byte2IntFunction
"composeChar"(char2ReferenceFunction0: $Char2ReferenceFunction$$Type<K>): $Char2IntFunction
"composeDouble"(double2ReferenceFunction0: $Double2ReferenceFunction$$Type<K>): $Double2IntFunction
"composeFloat"(float2ReferenceFunction0: $Float2ReferenceFunction$$Type<K>): $Float2IntFunction
"composeInt"(int2ReferenceFunction0: $Int2ReferenceFunction$$Type<K>): $Int2IntFunction
"composeLong"(long2ReferenceFunction0: $Long2ReferenceFunction$$Type<K>): $Long2IntFunction
"composeObject"<T>(object2ReferenceFunction0: $Object2ReferenceFunction$$Type<T, K>): $Object2IntFunction<T>
"composeReference"<T>(reference2ReferenceFunction0: $Reference2ReferenceFunction$$Type<T, K>): $Reference2IntFunction<T>
"composeShort"(short2ReferenceFunction0: $Short2ReferenceFunction$$Type<K>): $Short2IntFunction
"containsKey"(object0: any): boolean
"defaultReturnValue"(): integer
"defaultReturnValue"(int0: integer): void
/** @deprecated */
"get"(object0: any): integer
"getInt"(object0: any): integer
"getOrDefault"(object0: any, int1: integer): integer
/** @deprecated */
"getOrDefault"(object0: any, integer1: integer): integer
/** @deprecated */
"put"(k0: K, integer1: integer): integer
"put"(k0: K, int1: integer): integer
"removeInt"(object0: any): integer
"size"(): integer
}

export namespace $Reference2IntFunction {
function identity<T>(): $Function<T, T>
}
export abstract class $Reference2IntFunction$$Static<K = any> implements $Reference2IntFunction<K> {
static "identity"<T>(): $Function<T, T>
}
}

declare module "it.unimi.dsi.fastutil.objects.Object2IntSortedMap" {
import { $Int2ShortFunction$$Type } from "it.unimi.dsi.fastutil.ints.Int2ShortFunction"
import { $Int2ByteFunction$$Type } from "it.unimi.dsi.fastutil.ints.Int2ByteFunction"
import { $Int2ReferenceFunction$$Type } from "it.unimi.dsi.fastutil.ints.Int2ReferenceFunction"
import { $BiFunction$$Type } from "java.util.function.BiFunction"
import { $IntBinaryOperator$$Type } from "java.util.function.IntBinaryOperator"
import { $Double2ObjectFunction$$Type } from "it.unimi.dsi.fastutil.doubles.Double2ObjectFunction"
import { $Object2ObjectFunction, $Object2ObjectFunction$$Type } from "it.unimi.dsi.fastutil.objects.Object2ObjectFunction"
import { $Function, $Function$$Type } from "java.util.function.Function"
import { $Int2DoubleFunction$$Type } from "it.unimi.dsi.fastutil.ints.Int2DoubleFunction"
import { $Object2LongFunction } from "it.unimi.dsi.fastutil.objects.Object2LongFunction"
import { $Object2DoubleFunction } from "it.unimi.dsi.fastutil.objects.Object2DoubleFunction"
import { $Int2IntFunction, $Int2IntFunction$$Type } from "it.unimi.dsi.fastutil.ints.Int2IntFunction"
import { $Float2IntFunction } from "it.unimi.dsi.fastutil.floats.Float2IntFunction"
import { $Object2FloatFunction } from "it.unimi.dsi.fastutil.objects.Object2FloatFunction"
import { $Object2IntFunction, $Object2IntFunction$$Type } from "it.unimi.dsi.fastutil.objects.Object2IntFunction"
import { $Map, $Map$$Type } from "java.util.Map"
import { $BiConsumer$$Type } from "java.util.function.BiConsumer"
import { $Reference2IntFunction } from "it.unimi.dsi.fastutil.objects.Reference2IntFunction"
import { $Long2IntFunction } from "it.unimi.dsi.fastutil.longs.Long2IntFunction"
import { $Short2IntFunction } from "it.unimi.dsi.fastutil.shorts.Short2IntFunction"
import { $Int2FloatFunction$$Type } from "it.unimi.dsi.fastutil.ints.Int2FloatFunction"
import { $Reference2ObjectFunction$$Type } from "it.unimi.dsi.fastutil.objects.Reference2ObjectFunction"
import { $Map$Entry, $Map$Entry$$Type } from "java.util.Map$Entry"
import { $Byte2ObjectFunction$$Type } from "it.unimi.dsi.fastutil.bytes.Byte2ObjectFunction"
import { $Short2ObjectFunction$$Type } from "it.unimi.dsi.fastutil.shorts.Short2ObjectFunction"
import { $Object2ByteFunction } from "it.unimi.dsi.fastutil.objects.Object2ByteFunction"
import { $Int2ObjectFunction$$Type } from "it.unimi.dsi.fastutil.ints.Int2ObjectFunction"
import { $Long2ObjectFunction$$Type } from "it.unimi.dsi.fastutil.longs.Long2ObjectFunction"
import { $ToIntFunction$$Type } from "java.util.function.ToIntFunction"
import { $Char2IntFunction } from "it.unimi.dsi.fastutil.chars.Char2IntFunction"
import { $Int2LongFunction$$Type } from "it.unimi.dsi.fastutil.ints.Int2LongFunction"
import { $Object2ReferenceFunction } from "it.unimi.dsi.fastutil.objects.Object2ReferenceFunction"
import { $Float2ObjectFunction$$Type } from "it.unimi.dsi.fastutil.floats.Float2ObjectFunction"
import { $IntBinaryOperator$$Type as $IntBinaryOperator$0$$Type } from "it.unimi.dsi.fastutil.ints.IntBinaryOperator"
import { $Object2IntMap } from "it.unimi.dsi.fastutil.objects.Object2IntMap"
import { $Char2ObjectFunction$$Type } from "it.unimi.dsi.fastutil.chars.Char2ObjectFunction"
import { $Object2ShortFunction } from "it.unimi.dsi.fastutil.objects.Object2ShortFunction"
import { $Comparator } from "java.util.Comparator"
import { $Double2IntFunction } from "it.unimi.dsi.fastutil.doubles.Double2IntFunction"
import { $SortedMap } from "java.util.SortedMap"
import { $Object2CharFunction } from "it.unimi.dsi.fastutil.objects.Object2CharFunction"
import { $Int2CharFunction$$Type } from "it.unimi.dsi.fastutil.ints.Int2CharFunction"
import { $Byte2IntFunction } from "it.unimi.dsi.fastutil.bytes.Byte2IntFunction"

export interface $Object2IntSortedMap<K = any> extends $Object2IntMap<K>, $SortedMap<K, integer> {
/** @deprecated */
"andThen"<T>(function0: $Function$$Type<integer, T>): $Function<K, T>
"andThenByte"(int2ByteFunction0: $Int2ByteFunction$$Type): $Object2ByteFunction<K>
"andThenChar"(int2CharFunction0: $Int2CharFunction$$Type): $Object2CharFunction<K>
"andThenDouble"(int2DoubleFunction0: $Int2DoubleFunction$$Type): $Object2DoubleFunction<K>
"andThenFloat"(int2FloatFunction0: $Int2FloatFunction$$Type): $Object2FloatFunction<K>
"andThenInt"(int2IntFunction0: $Int2IntFunction$$Type): $Object2IntFunction<K>
"andThenLong"(int2LongFunction0: $Int2LongFunction$$Type): $Object2LongFunction<K>
"andThenObject"<T>(int2ObjectFunction0: $Int2ObjectFunction$$Type<T>): $Object2ObjectFunction<K, T>
"andThenReference"<T>(int2ReferenceFunction0: $Int2ReferenceFunction$$Type<T>): $Object2ReferenceFunction<K, T>
"andThenShort"(int2ShortFunction0: $Int2ShortFunction$$Type): $Object2ShortFunction<K>
"apply"(k0: K): integer
"applyAsInt"(k0: K): integer
"clear"(): void
"comparator"(): $Comparator<K>
"compose"<V>(function0: $Function$$Type<V, K>): $Function<V, integer>
"composeByte"(byte2ObjectFunction0: $Byte2ObjectFunction$$Type<K>): $Byte2IntFunction
"composeChar"(char2ObjectFunction0: $Char2ObjectFunction$$Type<K>): $Char2IntFunction
"composeDouble"(double2ObjectFunction0: $Double2ObjectFunction$$Type<K>): $Double2IntFunction
"composeFloat"(float2ObjectFunction0: $Float2ObjectFunction$$Type<K>): $Float2IntFunction
"composeInt"(int2ObjectFunction0: $Int2ObjectFunction$$Type<K>): $Int2IntFunction
"composeLong"(long2ObjectFunction0: $Long2ObjectFunction$$Type<K>): $Long2IntFunction
"composeObject"<T>(object2ObjectFunction0: $Object2ObjectFunction$$Type<T, K>): $Object2IntFunction<T>
"composeReference"<T>(reference2ObjectFunction0: $Reference2ObjectFunction$$Type<T, K>): $Reference2IntFunction<T>
"composeShort"(short2ObjectFunction0: $Short2ObjectFunction$$Type<K>): $Short2IntFunction
"compute"(k0: K, biFunction1: $BiFunction$$Type<K, integer, integer>): integer
"computeIfAbsent"(k0: K, toIntFunction1: $ToIntFunction$$Type<K>): integer
"computeIfAbsent"(k0: K, object2IntFunction1: $Object2IntFunction$$Type<K>): integer
"computeIfAbsent"(k0: K, function1: $Function$$Type<K, integer>): integer
"computeIfPresent"(k0: K, biFunction1: $BiFunction$$Type<K, integer, integer>): integer
"computeInt"(k0: K, biFunction1: $BiFunction$$Type<K, integer, integer>): integer
/** @deprecated */
"computeIntIfAbsent"(k0: K, toIntFunction1: $ToIntFunction$$Type<K>): integer
/** @deprecated */
"computeIntIfAbsentPartial"(k0: K, object2IntFunction1: $Object2IntFunction$$Type<K>): integer
"computeIntIfPresent"(k0: K, biFunction1: $BiFunction$$Type<K, integer, integer>): integer
"containsKey"(object0: any): boolean
/** @deprecated */
"containsValue"(object0: any): boolean
"containsValue"(int0: integer): boolean
"defaultReturnValue"(int0: integer): void
"defaultReturnValue"(): integer
"equals"(object0: any): boolean
"firstKey"(): K
"forEach"(biConsumer0: $BiConsumer$$Type<K, integer>): void
"getInt"(object0: any): integer
/** @deprecated */
"getOrDefault"(object0: any, integer1: integer): integer
"getOrDefault"(object0: any, int1: integer): integer
"hashCode"(): integer
"isEmpty"(): boolean
"lastKey"(): K
/** @deprecated */
"merge"(k0: K, integer1: integer, biFunction2: $BiFunction$$Type<integer, integer, integer>): integer
"merge"(k0: K, int1: integer, biFunction2: $BiFunction$$Type<integer, integer, integer>): integer
"mergeInt"(k0: K, int1: integer, intBinaryOperator2: $IntBinaryOperator$0$$Type): integer
/** @deprecated */
"mergeInt"(k0: K, int1: integer, biFunction2: $BiFunction$$Type<integer, integer, integer>): integer
"mergeInt"(k0: K, int1: integer, intBinaryOperator2: $IntBinaryOperator$$Type): integer
/** @deprecated */
"put"(k0: K, integer1: integer): integer
"put"(k0: K, int1: integer): integer
"putAll"(map0: $Map$$Type<K, integer>): void
/** @deprecated */
"putIfAbsent"(k0: K, integer1: integer): integer
"putIfAbsent"(k0: K, int1: integer): integer
"remove"(object0: any, int1: integer): boolean
/** @deprecated */
"remove"(object0: any, object1: any): boolean
"removeInt"(object0: any): integer
/** @deprecated */
"replace"(k0: K, integer1: integer): integer
"replace"(k0: K, int1: integer, int2: integer): boolean
"replace"(k0: K, int1: integer): integer
/** @deprecated */
"replace"(k0: K, integer1: integer, integer2: integer): boolean
"replaceAll"(biFunction0: $BiFunction$$Type<K, integer, integer>): void
"size"(): integer
get "empty"(): boolean
}

export namespace $Object2IntSortedMap {
function copyOf<K, V>(map0: $Map$$Type<K, V>): $Map<K, V>
function entry<K, V>(k0: K, v1: V): $Map$Entry<K, V>
function identity<T>(): $Function<T, T>
function of<K, V>(k0: K, v1: V, k2: K, v3: V, k4: K, v5: V, k6: K, v7: V, k8: K, v9: V): $Map<K, V>
function of<K, V>(k0: K, v1: V, k2: K, v3: V, k4: K, v5: V, k6: K, v7: V): $Map<K, V>
function of<K, V>(k0: K, v1: V, k2: K, v3: V, k4: K, v5: V): $Map<K, V>
function of<K, V>(): $Map<K, V>
function of<K, V>(k0: K, v1: V, k2: K, v3: V): $Map<K, V>
function of<K, V>(k0: K, v1: V): $Map<K, V>
function of<K, V>(k0: K, v1: V, k2: K, v3: V, k4: K, v5: V, k6: K, v7: V, k8: K, v9: V, k10: K, v11: V, k12: K, v13: V, k14: K, v15: V, k16: K, v17: V, k18: K, v19: V): $Map<K, V>
function of<K, V>(k0: K, v1: V, k2: K, v3: V, k4: K, v5: V, k6: K, v7: V, k8: K, v9: V, k10: K, v11: V, k12: K, v13: V, k14: K, v15: V, k16: K, v17: V): $Map<K, V>
function of<K, V>(k0: K, v1: V, k2: K, v3: V, k4: K, v5: V, k6: K, v7: V, k8: K, v9: V, k10: K, v11: V, k12: K, v13: V, k14: K, v15: V): $Map<K, V>
function of<K, V>(k0: K, v1: V, k2: K, v3: V, k4: K, v5: V, k6: K, v7: V, k8: K, v9: V, k10: K, v11: V, k12: K, v13: V): $Map<K, V>
function of<K, V>(k0: K, v1: V, k2: K, v3: V, k4: K, v5: V, k6: K, v7: V, k8: K, v9: V, k10: K, v11: V): $Map<K, V>
function ofEntries<K, V>(...entry0s: $Map$Entry$$Type<K, V>[]): $Map<K, V>
}
export abstract class $Object2IntSortedMap$$Static<K = any> implements $Object2IntSortedMap<K> {
static "copyOf"<K, V>(map0: $Map$$Type<K, V>): $Map<K, V>
static "entry"<K, V>(k0: K, v1: V): $Map$Entry<K, V>
static "identity"<T>(): $Function<T, T>
static "of"<K, V>(k0: K, v1: V, k2: K, v3: V, k4: K, v5: V, k6: K, v7: V, k8: K, v9: V): $Map<K, V>
static "of"<K, V>(k0: K, v1: V, k2: K, v3: V, k4: K, v5: V, k6: K, v7: V): $Map<K, V>
static "of"<K, V>(k0: K, v1: V, k2: K, v3: V, k4: K, v5: V): $Map<K, V>
static "of"<K, V>(): $Map<K, V>
static "of"<K, V>(k0: K, v1: V, k2: K, v3: V): $Map<K, V>
static "of"<K, V>(k0: K, v1: V): $Map<K, V>
static "of"<K, V>(k0: K, v1: V, k2: K, v3: V, k4: K, v5: V, k6: K, v7: V, k8: K, v9: V, k10: K, v11: V, k12: K, v13: V, k14: K, v15: V, k16: K, v17: V, k18: K, v19: V): $Map<K, V>
static "of"<K, V>(k0: K, v1: V, k2: K, v3: V, k4: K, v5: V, k6: K, v7: V, k8: K, v9: V, k10: K, v11: V, k12: K, v13: V, k14: K, v15: V, k16: K, v17: V): $Map<K, V>
static "of"<K, V>(k0: K, v1: V, k2: K, v3: V, k4: K, v5: V, k6: K, v7: V, k8: K, v9: V, k10: K, v11: V, k12: K, v13: V, k14: K, v15: V): $Map<K, V>
static "of"<K, V>(k0: K, v1: V, k2: K, v3: V, k4: K, v5: V, k6: K, v7: V, k8: K, v9: V, k10: K, v11: V, k12: K, v13: V): $Map<K, V>
static "of"<K, V>(k0: K, v1: V, k2: K, v3: V, k4: K, v5: V, k6: K, v7: V, k8: K, v9: V, k10: K, v11: V): $Map<K, V>
static "ofEntries"<K, V>(...entry0s: $Map$Entry$$Type<K, V>[]): $Map<K, V>
}
}

declare module "it.unimi.dsi.fastutil.objects.Object2ObjectMap$FastEntrySet" {
import { $Consumer$$Type } from "java.util.function.Consumer"
import { $Stream } from "java.util.stream.Stream"
import { $Predicate$$Type } from "java.util.function.Predicate"
import { $Collection$$Type } from "java.util.Collection"
import { $Object2ObjectMap$Entry, $Object2ObjectMap$Entry$$Type } from "it.unimi.dsi.fastutil.objects.Object2ObjectMap$Entry"
import { $Set } from "java.util.Set"
import { $ObjectIterator } from "it.unimi.dsi.fastutil.objects.ObjectIterator"
import { $ObjectSet } from "it.unimi.dsi.fastutil.objects.ObjectSet"
import { $IntFunction$$Type } from "java.util.function.IntFunction"

export interface $Object2ObjectMap$FastEntrySet<K = any, V = any> extends $ObjectSet<$Object2ObjectMap$Entry<K, V>> {
"add"(entry0: $Object2ObjectMap$Entry$$Type<K, V>): boolean
"addAll"(collection0: $Collection$$Type<$Object2ObjectMap$Entry$$Type<K, V>>): boolean
"clear"(): void
"contains"(object0: any): boolean
"containsAll"(collection0: $Collection$$Type<any>): boolean
"equals"(object0: any): boolean
"fastForEach"(consumer0: $Consumer$$Type<$Object2ObjectMap$Entry$$Type<K, V>>): void
"fastIterator"(): $ObjectIterator<$Object2ObjectMap$Entry<K, V>>
"forEach"(consumer0: $Consumer$$Type<$Object2ObjectMap$Entry$$Type<K, V>>): void
"hashCode"(): integer
"isEmpty"(): boolean
"parallelStream"(): $Stream<$Object2ObjectMap$Entry<K, V>>
"remove"(object0: any): boolean
"removeAll"(collection0: $Collection$$Type<any>): boolean
"removeIf"(predicate0: $Predicate$$Type<$Object2ObjectMap$Entry$$Type<K, V>>): boolean
"retainAll"(collection0: $Collection$$Type<any>): boolean
"size"(): integer
"stream"(): $Stream<$Object2ObjectMap$Entry<K, V>>
"toArray"<T>(t0s: T[]): T[]
"toArray"(): any[]
"toArray"<T>(intFunction0: $IntFunction$$Type<T[]>): T[]
get "empty"(): boolean
}

export namespace $Object2ObjectMap$FastEntrySet {
function copyOf<E>(collection0: $Collection$$Type<E>): $Set<E>
function of<K>(k0: K, k1: K): $ObjectSet<K>
function of<K>(...k0s: K[]): $ObjectSet<K>
function of<K>(k0: K, k1: K, k2: K): $ObjectSet<K>
function of<K>(): $ObjectSet<K>
function of<K>(k0: K): $ObjectSet<K>
function of<E>(e0: E, e1: E, e2: E, e3: E, e4: E, e5: E): $Set<E>
function of<E>(e0: E, e1: E, e2: E, e3: E, e4: E): $Set<E>
function of<E>(e0: E, e1: E, e2: E, e3: E): $Set<E>
function of<E>(e0: E, e1: E, e2: E, e3: E, e4: E, e5: E, e6: E, e7: E, e8: E, e9: E): $Set<E>
function of<E>(e0: E, e1: E, e2: E, e3: E, e4: E, e5: E, e6: E, e7: E, e8: E): $Set<E>
function of<E>(e0: E, e1: E, e2: E, e3: E, e4: E, e5: E, e6: E, e7: E): $Set<E>
function of<E>(e0: E, e1: E, e2: E, e3: E, e4: E, e5: E, e6: E): $Set<E>
}
export abstract class $Object2ObjectMap$FastEntrySet$$Static<K = any, V = any> implements $Object2ObjectMap$FastEntrySet<K, V> {
static "copyOf"<E>(collection0: $Collection$$Type<E>): $Set<E>
static "of"<K>(k0: K, k1: K): $ObjectSet<K>
static "of"<K>(...k0s: K[]): $ObjectSet<K>
static "of"<K>(k0: K, k1: K, k2: K): $ObjectSet<K>
static "of"<K>(): $ObjectSet<K>
static "of"<K>(k0: K): $ObjectSet<K>
static "of"<E>(e0: E, e1: E, e2: E, e3: E, e4: E, e5: E): $Set<E>
static "of"<E>(e0: E, e1: E, e2: E, e3: E, e4: E): $Set<E>
static "of"<E>(e0: E, e1: E, e2: E, e3: E): $Set<E>
static "of"<E>(e0: E, e1: E, e2: E, e3: E, e4: E, e5: E, e6: E, e7: E, e8: E, e9: E): $Set<E>
static "of"<E>(e0: E, e1: E, e2: E, e3: E, e4: E, e5: E, e6: E, e7: E, e8: E): $Set<E>
static "of"<E>(e0: E, e1: E, e2: E, e3: E, e4: E, e5: E, e6: E, e7: E): $Set<E>
static "of"<E>(e0: E, e1: E, e2: E, e3: E, e4: E, e5: E, e6: E): $Set<E>
}
}

declare module "it.unimi.dsi.fastutil.objects.ObjectSet" {
import { $Consumer$$Type } from "java.util.function.Consumer"
import { $Stream } from "java.util.stream.Stream"
import { $Predicate$$Type } from "java.util.function.Predicate"
import { $Collection$$Type } from "java.util.Collection"
import { $Set } from "java.util.Set"
import { $ObjectCollection } from "it.unimi.dsi.fastutil.objects.ObjectCollection"
import { $IntFunction$$Type } from "java.util.function.IntFunction"

export interface $ObjectSet<K = any> extends $ObjectCollection<K>, $Set<K> {
"add"(k0: K): boolean
"addAll"(collection0: $Collection$$Type<K>): boolean
"clear"(): void
"contains"(object0: any): boolean
"containsAll"(collection0: $Collection$$Type<any>): boolean
"equals"(object0: any): boolean
"forEach"(consumer0: $Consumer$$Type<K>): void
"hashCode"(): integer
"isEmpty"(): boolean
"parallelStream"(): $Stream<K>
"remove"(object0: any): boolean
"removeAll"(collection0: $Collection$$Type<any>): boolean
"removeIf"(predicate0: $Predicate$$Type<K>): boolean
"retainAll"(collection0: $Collection$$Type<any>): boolean
"size"(): integer
"stream"(): $Stream<K>
"toArray"<T>(t0s: T[]): T[]
"toArray"(): any[]
"toArray"<T>(intFunction0: $IntFunction$$Type<T[]>): T[]
get "empty"(): boolean
}

export namespace $ObjectSet {
function copyOf<E>(collection0: $Collection$$Type<E>): $Set<E>
function of<K>(k0: K, k1: K): $ObjectSet<K>
function of<K>(...k0s: K[]): $ObjectSet<K>
function of<K>(k0: K, k1: K, k2: K): $ObjectSet<K>
function of<K>(): $ObjectSet<K>
function of<K>(k0: K): $ObjectSet<K>
function of<E>(e0: E, e1: E, e2: E, e3: E, e4: E, e5: E): $Set<E>
function of<E>(e0: E, e1: E, e2: E, e3: E, e4: E): $Set<E>
function of<E>(e0: E, e1: E, e2: E, e3: E): $Set<E>
function of<E>(e0: E, e1: E, e2: E, e3: E, e4: E, e5: E, e6: E, e7: E, e8: E, e9: E): $Set<E>
function of<E>(e0: E, e1: E, e2: E, e3: E, e4: E, e5: E, e6: E, e7: E, e8: E): $Set<E>
function of<E>(e0: E, e1: E, e2: E, e3: E, e4: E, e5: E, e6: E, e7: E): $Set<E>
function of<E>(e0: E, e1: E, e2: E, e3: E, e4: E, e5: E, e6: E): $Set<E>
}
export abstract class $ObjectSet$$Static<K = any> implements $ObjectSet<K> {
static "copyOf"<E>(collection0: $Collection$$Type<E>): $Set<E>
static "of"<K>(k0: K, k1: K): $ObjectSet<K>
static "of"<K>(...k0s: K[]): $ObjectSet<K>
static "of"<K>(k0: K, k1: K, k2: K): $ObjectSet<K>
static "of"<K>(): $ObjectSet<K>
static "of"<K>(k0: K): $ObjectSet<K>
static "of"<E>(e0: E, e1: E, e2: E, e3: E, e4: E, e5: E): $Set<E>
static "of"<E>(e0: E, e1: E, e2: E, e3: E, e4: E): $Set<E>
static "of"<E>(e0: E, e1: E, e2: E, e3: E): $Set<E>
static "of"<E>(e0: E, e1: E, e2: E, e3: E, e4: E, e5: E, e6: E, e7: E, e8: E, e9: E): $Set<E>
static "of"<E>(e0: E, e1: E, e2: E, e3: E, e4: E, e5: E, e6: E, e7: E, e8: E): $Set<E>
static "of"<E>(e0: E, e1: E, e2: E, e3: E, e4: E, e5: E, e6: E, e7: E): $Set<E>
static "of"<E>(e0: E, e1: E, e2: E, e3: E, e4: E, e5: E, e6: E): $Set<E>
}
}

declare module "it.unimi.dsi.fastutil.objects.Object2BooleanFunction" {
import { $Double2BooleanFunction } from "it.unimi.dsi.fastutil.doubles.Double2BooleanFunction"
import { $Byte2BooleanFunction } from "it.unimi.dsi.fastutil.bytes.Byte2BooleanFunction"
import { $Boolean2LongFunction$$Type } from "it.unimi.dsi.fastutil.booleans.Boolean2LongFunction"
import { $Double2ObjectFunction$$Type } from "it.unimi.dsi.fastutil.doubles.Double2ObjectFunction"
import { $Boolean2IntFunction$$Type } from "it.unimi.dsi.fastutil.booleans.Boolean2IntFunction"
import { $Object2ObjectFunction, $Object2ObjectFunction$$Type } from "it.unimi.dsi.fastutil.objects.Object2ObjectFunction"
import { $Function, $Function$$Type } from "java.util.function.Function"
import { $Object2LongFunction } from "it.unimi.dsi.fastutil.objects.Object2LongFunction"
import { $Object2DoubleFunction } from "it.unimi.dsi.fastutil.objects.Object2DoubleFunction"
import { $Boolean2ObjectFunction$$Type } from "it.unimi.dsi.fastutil.booleans.Boolean2ObjectFunction"
import { $Short2BooleanFunction } from "it.unimi.dsi.fastutil.shorts.Short2BooleanFunction"
import { $Boolean2CharFunction$$Type } from "it.unimi.dsi.fastutil.booleans.Boolean2CharFunction"
import { $Object2FloatFunction } from "it.unimi.dsi.fastutil.objects.Object2FloatFunction"
import { $Float2BooleanFunction } from "it.unimi.dsi.fastutil.floats.Float2BooleanFunction"
import { $Object2IntFunction } from "it.unimi.dsi.fastutil.objects.Object2IntFunction"
import { $Int2BooleanFunction } from "it.unimi.dsi.fastutil.ints.Int2BooleanFunction"
import { $Boolean2DoubleFunction$$Type } from "it.unimi.dsi.fastutil.booleans.Boolean2DoubleFunction"
import { $Boolean2ShortFunction$$Type } from "it.unimi.dsi.fastutil.booleans.Boolean2ShortFunction"
import { $Reference2ObjectFunction$$Type } from "it.unimi.dsi.fastutil.objects.Reference2ObjectFunction"
import { $Byte2ObjectFunction$$Type } from "it.unimi.dsi.fastutil.bytes.Byte2ObjectFunction"
import { $Short2ObjectFunction$$Type } from "it.unimi.dsi.fastutil.shorts.Short2ObjectFunction"
import { $Function as $Function$0 } from "it.unimi.dsi.fastutil.Function"
import { $Object2ByteFunction } from "it.unimi.dsi.fastutil.objects.Object2ByteFunction"
import { $Predicate, $Predicate$$Type } from "java.util.function.Predicate"
import { $Long2BooleanFunction } from "it.unimi.dsi.fastutil.longs.Long2BooleanFunction"
import { $Int2ObjectFunction$$Type } from "it.unimi.dsi.fastutil.ints.Int2ObjectFunction"
import { $Long2ObjectFunction$$Type } from "it.unimi.dsi.fastutil.longs.Long2ObjectFunction"
import { $Boolean2ReferenceFunction$$Type } from "it.unimi.dsi.fastutil.booleans.Boolean2ReferenceFunction"
import { $Char2BooleanFunction } from "it.unimi.dsi.fastutil.chars.Char2BooleanFunction"
import { $Object2ReferenceFunction } from "it.unimi.dsi.fastutil.objects.Object2ReferenceFunction"
import { $Float2ObjectFunction$$Type } from "it.unimi.dsi.fastutil.floats.Float2ObjectFunction"
import { $Char2ObjectFunction$$Type } from "it.unimi.dsi.fastutil.chars.Char2ObjectFunction"
import { $Reference2BooleanFunction } from "it.unimi.dsi.fastutil.objects.Reference2BooleanFunction"
import { $Boolean2ByteFunction$$Type } from "it.unimi.dsi.fastutil.booleans.Boolean2ByteFunction"
import { $Object2ShortFunction } from "it.unimi.dsi.fastutil.objects.Object2ShortFunction"
import { $Boolean2FloatFunction$$Type } from "it.unimi.dsi.fastutil.booleans.Boolean2FloatFunction"
import { $Object2CharFunction } from "it.unimi.dsi.fastutil.objects.Object2CharFunction"

export interface $Object2BooleanFunction<K = any> extends $Function$0<K, boolean>, $Predicate<K> {
"and"(predicate0: $Predicate$$Type<K>): $Predicate<K>
/** @deprecated */
"andThen"<T>(function0: $Function$$Type<boolean, T>): $Function<K, T>
"andThenByte"(boolean2ByteFunction0: $Boolean2ByteFunction$$Type): $Object2ByteFunction<K>
"andThenChar"(boolean2CharFunction0: $Boolean2CharFunction$$Type): $Object2CharFunction<K>
"andThenDouble"(boolean2DoubleFunction0: $Boolean2DoubleFunction$$Type): $Object2DoubleFunction<K>
"andThenFloat"(boolean2FloatFunction0: $Boolean2FloatFunction$$Type): $Object2FloatFunction<K>
"andThenInt"(boolean2IntFunction0: $Boolean2IntFunction$$Type): $Object2IntFunction<K>
"andThenLong"(boolean2LongFunction0: $Boolean2LongFunction$$Type): $Object2LongFunction<K>
"andThenObject"<T>(boolean2ObjectFunction0: $Boolean2ObjectFunction$$Type<T>): $Object2ObjectFunction<K, T>
"andThenReference"<T>(boolean2ReferenceFunction0: $Boolean2ReferenceFunction$$Type<T>): $Object2ReferenceFunction<K, T>
"andThenShort"(boolean2ShortFunction0: $Boolean2ShortFunction$$Type): $Object2ShortFunction<K>
"apply"(k0: K): boolean
"clear"(): void
"compose"<V>(function0: $Function$$Type<V, K>): $Function<V, boolean>
"composeByte"(byte2ObjectFunction0: $Byte2ObjectFunction$$Type<K>): $Byte2BooleanFunction
"composeChar"(char2ObjectFunction0: $Char2ObjectFunction$$Type<K>): $Char2BooleanFunction
"composeDouble"(double2ObjectFunction0: $Double2ObjectFunction$$Type<K>): $Double2BooleanFunction
"composeFloat"(float2ObjectFunction0: $Float2ObjectFunction$$Type<K>): $Float2BooleanFunction
"composeInt"(int2ObjectFunction0: $Int2ObjectFunction$$Type<K>): $Int2BooleanFunction
"composeLong"(long2ObjectFunction0: $Long2ObjectFunction$$Type<K>): $Long2BooleanFunction
"composeObject"<T>(object2ObjectFunction0: $Object2ObjectFunction$$Type<T, K>): $Object2BooleanFunction<T>
"composeReference"<T>(reference2ObjectFunction0: $Reference2ObjectFunction$$Type<T, K>): $Reference2BooleanFunction<T>
"composeShort"(short2ObjectFunction0: $Short2ObjectFunction$$Type<K>): $Short2BooleanFunction
"containsKey"(object0: any): boolean
"defaultReturnValue"(boolean0: boolean): void
"defaultReturnValue"(): boolean
/** @deprecated */
"get"(object0: any): boolean
"getBoolean"(object0: any): boolean
"getOrDefault"(object0: any, boolean1: boolean): boolean
/** @deprecated */
"getOrDefault"(object0: any, boolean1: boolean): boolean
"negate"(): $Predicate<K>
"or"(predicate0: $Predicate$$Type<K>): $Predicate<K>
"put"(k0: K, boolean1: boolean): boolean
/** @deprecated */
"put"(k0: K, boolean1: boolean): boolean
"removeBoolean"(object0: any): boolean
"size"(): integer
"test"(k0: K): boolean
}

export namespace $Object2BooleanFunction {
function identity<T>(): $Function<T, T>
function isEqual<T>(object0: any): $Predicate<T>
function not<T>(predicate0: $Predicate$$Type<T>): $Predicate<T>
}
export abstract class $Object2BooleanFunction$$Static<K = any> implements $Object2BooleanFunction<K> {
static "identity"<T>(): $Function<T, T>
static "isEqual"<T>(object0: any): $Predicate<T>
static "not"<T>(predicate0: $Predicate$$Type<T>): $Predicate<T>
}
}

declare module "it.unimi.dsi.fastutil.objects.ObjectOpenCustomHashSet" {
import { $Cloneable } from "java.lang.Cloneable"
import { $AbstractObjectSet } from "it.unimi.dsi.fastutil.objects.AbstractObjectSet"
import { $Iterator$$Type } from "java.util.Iterator"
import { $Hash } from "it.unimi.dsi.fastutil.Hash"
import { $Predicate$$Type } from "java.util.function.Predicate"
import { $Collection$$Type } from "java.util.Collection"
import { $Set } from "java.util.Set"
import { $Hash$Strategy, $Hash$Strategy$$Type } from "it.unimi.dsi.fastutil.Hash$Strategy"
import { $ObjectSet } from "it.unimi.dsi.fastutil.objects.ObjectSet"
import { $ObjectCollection$$Type } from "it.unimi.dsi.fastutil.objects.ObjectCollection"
import { $Serializable } from "java.io.Serializable"
import { $Consumer$$Type } from "java.util.function.Consumer"
import { $Stream } from "java.util.stream.Stream"
import { $IntFunction$$Type } from "java.util.function.IntFunction"

export class $ObjectOpenCustomHashSet<K = any> extends $AbstractObjectSet<K> implements $Serializable, $Cloneable, $Hash {
constructor(collection0: $Collection$$Type<K>, float1: float, strategy2: $Hash$Strategy$$Type<K>)
constructor(collection0: $Collection$$Type<K>, strategy1: $Hash$Strategy$$Type<K>)
constructor(objectCollection0: $ObjectCollection$$Type<K>, float1: float, strategy2: $Hash$Strategy$$Type<K>)
constructor(strategy0: $Hash$Strategy$$Type<K>)
constructor(int0: integer, strategy1: $Hash$Strategy$$Type<K>)
constructor(int0: integer, float1: float, strategy2: $Hash$Strategy$$Type<K>)
constructor(iterator0: $Iterator$$Type<K>, strategy1: $Hash$Strategy$$Type<K>)
constructor(k0s: K[], float1: float, strategy2: $Hash$Strategy$$Type<K>)
constructor(k0s: K[], int1: integer, int2: integer, strategy3: $Hash$Strategy$$Type<K>)
constructor(k0s: K[], int1: integer, int2: integer, float3: float, strategy4: $Hash$Strategy$$Type<K>)
constructor(objectCollection0: $ObjectCollection$$Type<K>, strategy1: $Hash$Strategy$$Type<K>)
constructor(iterator0: $Iterator$$Type<K>, float1: float, strategy2: $Hash$Strategy$$Type<K>)
constructor(k0s: K[], strategy1: $Hash$Strategy$$Type<K>)

public "addOrGet"(k0: K): K
public "containsAll"(collection0: $Collection$$Type<any>): boolean
public static "copyOf"<E>(collection0: $Collection$$Type<E>): $Set<E>
public "forEach"(consumer0: $Consumer$$Type<K>): void
public "get"(object0: any): K
public static "of"<K>(k0: K, k1: K): $ObjectSet<K>
public static "of"<K>(...k0s: K[]): $ObjectSet<K>
public static "of"<K>(k0: K, k1: K, k2: K): $ObjectSet<K>
public static "of"<K>(): $ObjectSet<K>
public static "of"<K>(k0: K): $ObjectSet<K>
public static "of"<E>(e0: E, e1: E, e2: E, e3: E, e4: E, e5: E): $Set<E>
public static "of"<E>(e0: E, e1: E, e2: E, e3: E, e4: E): $Set<E>
public static "of"<E>(e0: E, e1: E, e2: E, e3: E): $Set<E>
public static "of"<E>(e0: E, e1: E, e2: E, e3: E, e4: E, e5: E, e6: E, e7: E, e8: E, e9: E): $Set<E>
public static "of"<E>(e0: E, e1: E, e2: E, e3: E, e4: E, e5: E, e6: E, e7: E, e8: E): $Set<E>
public static "of"<E>(e0: E, e1: E, e2: E, e3: E, e4: E, e5: E, e6: E, e7: E): $Set<E>
public static "of"<E>(e0: E, e1: E, e2: E, e3: E, e4: E, e5: E, e6: E): $Set<E>
public "parallelStream"(): $Stream<K>
public "removeAll"(collection0: $Collection$$Type<any>): boolean
public "removeIf"(predicate0: $Predicate$$Type<K>): boolean
public "retainAll"(collection0: $Collection$$Type<any>): boolean
public "strategy"(): $Hash$Strategy<K>
public "stream"(): $Stream<K>
public "toArray"<T>(t0s: T[]): T[]
public "toArray"(): any[]
public "toArray"<T>(intFunction0: $IntFunction$$Type<T[]>): T[]
public "trim"(): boolean
public "trim"(int0: integer): boolean
}
}

declare module "it.unimi.dsi.fastutil.objects.Object2ByteMap$Entry" {
import { $Map$Entry, $Map$Entry$$Type } from "java.util.Map$Entry"
import { $Comparable, $Comparable$$Type } from "java.lang.Comparable"
import { $Comparator, $Comparator$$Type } from "java.util.Comparator"

export interface $Object2ByteMap$Entry<K = any> extends $Map$Entry<K, byte> {
"equals"(object0: any): boolean
"getByteValue"(): byte
"getKey"(): K
"hashCode"(): integer
"setValue"(byte0: byte): byte
/** @deprecated */
"setValue"(byte0: byte): byte
get "byteValue"(): byte
get "key"(): K
set "value"(value: byte)
set "value"(value: byte)
}

export namespace $Object2ByteMap$Entry {
function comparingByKey<K extends $Comparable<K>, V>(): $Comparator<$Map$Entry<K, V>>
function comparingByKey<K, V>(comparator0: $Comparator$$Type<K>): $Comparator<$Map$Entry<K, V>>
function comparingByValue<K, V extends $Comparable<V>>(): $Comparator<$Map$Entry<K, V>>
function comparingByValue<K, V>(comparator0: $Comparator$$Type<V>): $Comparator<$Map$Entry<K, V>>
function copyOf<K, V>(entry0: $Map$Entry$$Type<K, V>): $Map$Entry<K, V>
}
export abstract class $Object2ByteMap$Entry$$Static<K = any> implements $Object2ByteMap$Entry<K> {
static "comparingByKey"<K extends $Comparable<K>, V>(): $Comparator<$Map$Entry<K, V>>
static "comparingByKey"<K, V>(comparator0: $Comparator$$Type<K>): $Comparator<$Map$Entry<K, V>>
static "comparingByValue"<K, V extends $Comparable<V>>(): $Comparator<$Map$Entry<K, V>>
static "comparingByValue"<K, V>(comparator0: $Comparator$$Type<V>): $Comparator<$Map$Entry<K, V>>
static "copyOf"<K, V>(entry0: $Map$Entry$$Type<K, V>): $Map$Entry<K, V>
}
}

declare module "it.unimi.dsi.fastutil.objects.Object2BooleanMap" {
import { $Double2BooleanFunction } from "it.unimi.dsi.fastutil.doubles.Double2BooleanFunction"
import { $Byte2BooleanFunction } from "it.unimi.dsi.fastutil.bytes.Byte2BooleanFunction"
import { $BiFunction$$Type } from "java.util.function.BiFunction"
import { $Boolean2LongFunction$$Type } from "it.unimi.dsi.fastutil.booleans.Boolean2LongFunction"
import { $Double2ObjectFunction$$Type } from "it.unimi.dsi.fastutil.doubles.Double2ObjectFunction"
import { $Boolean2IntFunction$$Type } from "it.unimi.dsi.fastutil.booleans.Boolean2IntFunction"
import { $Object2ObjectFunction, $Object2ObjectFunction$$Type } from "it.unimi.dsi.fastutil.objects.Object2ObjectFunction"
import { $Function, $Function$$Type } from "java.util.function.Function"
import { $Object2LongFunction } from "it.unimi.dsi.fastutil.objects.Object2LongFunction"
import { $Object2DoubleFunction } from "it.unimi.dsi.fastutil.objects.Object2DoubleFunction"
import { $Boolean2ObjectFunction$$Type } from "it.unimi.dsi.fastutil.booleans.Boolean2ObjectFunction"
import { $Short2BooleanFunction } from "it.unimi.dsi.fastutil.shorts.Short2BooleanFunction"
import { $Boolean2CharFunction$$Type } from "it.unimi.dsi.fastutil.booleans.Boolean2CharFunction"
import { $Object2FloatFunction } from "it.unimi.dsi.fastutil.objects.Object2FloatFunction"
import { $Float2BooleanFunction } from "it.unimi.dsi.fastutil.floats.Float2BooleanFunction"
import { $Object2IntFunction } from "it.unimi.dsi.fastutil.objects.Object2IntFunction"
import { $Map, $Map$$Type } from "java.util.Map"
import { $BiConsumer$$Type } from "java.util.function.BiConsumer"
import { $Int2BooleanFunction } from "it.unimi.dsi.fastutil.ints.Int2BooleanFunction"
import { $Boolean2DoubleFunction$$Type } from "it.unimi.dsi.fastutil.booleans.Boolean2DoubleFunction"
import { $Boolean2ShortFunction$$Type } from "it.unimi.dsi.fastutil.booleans.Boolean2ShortFunction"
import { $Reference2ObjectFunction$$Type } from "it.unimi.dsi.fastutil.objects.Reference2ObjectFunction"
import { $Map$Entry, $Map$Entry$$Type } from "java.util.Map$Entry"
import { $Byte2ObjectFunction$$Type } from "it.unimi.dsi.fastutil.bytes.Byte2ObjectFunction"
import { $Short2ObjectFunction$$Type } from "it.unimi.dsi.fastutil.shorts.Short2ObjectFunction"
import { $Object2ByteFunction } from "it.unimi.dsi.fastutil.objects.Object2ByteFunction"
import { $Predicate, $Predicate$$Type } from "java.util.function.Predicate"
import { $Long2BooleanFunction } from "it.unimi.dsi.fastutil.longs.Long2BooleanFunction"
import { $Int2ObjectFunction$$Type } from "it.unimi.dsi.fastutil.ints.Int2ObjectFunction"
import { $Object2BooleanMap$Entry } from "it.unimi.dsi.fastutil.objects.Object2BooleanMap$Entry"
import { $Long2ObjectFunction$$Type } from "it.unimi.dsi.fastutil.longs.Long2ObjectFunction"
import { $Boolean2ReferenceFunction$$Type } from "it.unimi.dsi.fastutil.booleans.Boolean2ReferenceFunction"
import { $ObjectSet } from "it.unimi.dsi.fastutil.objects.ObjectSet"
import { $Char2BooleanFunction } from "it.unimi.dsi.fastutil.chars.Char2BooleanFunction"
import { $Object2ReferenceFunction } from "it.unimi.dsi.fastutil.objects.Object2ReferenceFunction"
import { $Float2ObjectFunction$$Type } from "it.unimi.dsi.fastutil.floats.Float2ObjectFunction"
import { $Char2ObjectFunction$$Type } from "it.unimi.dsi.fastutil.chars.Char2ObjectFunction"
import { $Reference2BooleanFunction } from "it.unimi.dsi.fastutil.objects.Reference2BooleanFunction"
import { $Boolean2ByteFunction$$Type } from "it.unimi.dsi.fastutil.booleans.Boolean2ByteFunction"
import { $Object2ShortFunction } from "it.unimi.dsi.fastutil.objects.Object2ShortFunction"
import { $Object2BooleanFunction, $Object2BooleanFunction$$Type } from "it.unimi.dsi.fastutil.objects.Object2BooleanFunction"
import { $Boolean2FloatFunction$$Type } from "it.unimi.dsi.fastutil.booleans.Boolean2FloatFunction"
import { $Object2CharFunction } from "it.unimi.dsi.fastutil.objects.Object2CharFunction"

export interface $Object2BooleanMap<K = any> extends $Object2BooleanFunction<K>, $Map<K, boolean> {
"and"(predicate0: $Predicate$$Type<K>): $Predicate<K>
/** @deprecated */
"andThen"<T>(function0: $Function$$Type<boolean, T>): $Function<K, T>
"andThenByte"(boolean2ByteFunction0: $Boolean2ByteFunction$$Type): $Object2ByteFunction<K>
"andThenChar"(boolean2CharFunction0: $Boolean2CharFunction$$Type): $Object2CharFunction<K>
"andThenDouble"(boolean2DoubleFunction0: $Boolean2DoubleFunction$$Type): $Object2DoubleFunction<K>
"andThenFloat"(boolean2FloatFunction0: $Boolean2FloatFunction$$Type): $Object2FloatFunction<K>
"andThenInt"(boolean2IntFunction0: $Boolean2IntFunction$$Type): $Object2IntFunction<K>
"andThenLong"(boolean2LongFunction0: $Boolean2LongFunction$$Type): $Object2LongFunction<K>
"andThenObject"<T>(boolean2ObjectFunction0: $Boolean2ObjectFunction$$Type<T>): $Object2ObjectFunction<K, T>
"andThenReference"<T>(boolean2ReferenceFunction0: $Boolean2ReferenceFunction$$Type<T>): $Object2ReferenceFunction<K, T>
"andThenShort"(boolean2ShortFunction0: $Boolean2ShortFunction$$Type): $Object2ShortFunction<K>
"apply"(k0: K): boolean
"clear"(): void
"compose"<V>(function0: $Function$$Type<V, K>): $Function<V, boolean>
"composeByte"(byte2ObjectFunction0: $Byte2ObjectFunction$$Type<K>): $Byte2BooleanFunction
"composeChar"(char2ObjectFunction0: $Char2ObjectFunction$$Type<K>): $Char2BooleanFunction
"composeDouble"(double2ObjectFunction0: $Double2ObjectFunction$$Type<K>): $Double2BooleanFunction
"composeFloat"(float2ObjectFunction0: $Float2ObjectFunction$$Type<K>): $Float2BooleanFunction
"composeInt"(int2ObjectFunction0: $Int2ObjectFunction$$Type<K>): $Int2BooleanFunction
"composeLong"(long2ObjectFunction0: $Long2ObjectFunction$$Type<K>): $Long2BooleanFunction
"composeObject"<T>(object2ObjectFunction0: $Object2ObjectFunction$$Type<T, K>): $Object2BooleanFunction<T>
"composeReference"<T>(reference2ObjectFunction0: $Reference2ObjectFunction$$Type<T, K>): $Reference2BooleanFunction<T>
"composeShort"(short2ObjectFunction0: $Short2ObjectFunction$$Type<K>): $Short2BooleanFunction
"compute"(k0: K, biFunction1: $BiFunction$$Type<K, boolean, boolean>): boolean
"computeBoolean"(k0: K, biFunction1: $BiFunction$$Type<K, boolean, boolean>): boolean
/** @deprecated */
"computeBooleanIfAbsent"(k0: K, predicate1: $Predicate$$Type<K>): boolean
/** @deprecated */
"computeBooleanIfAbsentPartial"(k0: K, object2BooleanFunction1: $Object2BooleanFunction$$Type<K>): boolean
"computeBooleanIfPresent"(k0: K, biFunction1: $BiFunction$$Type<K, boolean, boolean>): boolean
"computeIfAbsent"(k0: K, predicate1: $Predicate$$Type<K>): boolean
"computeIfAbsent"(k0: K, object2BooleanFunction1: $Object2BooleanFunction$$Type<K>): boolean
"computeIfAbsent"(k0: K, function1: $Function$$Type<K, boolean>): boolean
"computeIfPresent"(k0: K, biFunction1: $BiFunction$$Type<K, boolean, boolean>): boolean
"containsKey"(object0: any): boolean
/** @deprecated */
"containsValue"(object0: any): boolean
"containsValue"(boolean0: boolean): boolean
"defaultReturnValue"(): boolean
"defaultReturnValue"(boolean0: boolean): void
"equals"(object0: any): boolean
"forEach"(biConsumer0: $BiConsumer$$Type<K, boolean>): void
/** @deprecated */
"get"(object0: any): boolean
"getBoolean"(object0: any): boolean
"getOrDefault"(object0: any, boolean1: boolean): boolean
/** @deprecated */
"getOrDefault"(object0: any, boolean1: boolean): boolean
"hashCode"(): integer
"isEmpty"(): boolean
"merge"(k0: K, boolean1: boolean, biFunction2: $BiFunction$$Type<boolean, boolean, boolean>): boolean
"merge"(k0: K, boolean1: boolean, biFunction2: $BiFunction$$Type<boolean, boolean, boolean>): boolean
"negate"(): $Predicate<K>
"object2BooleanEntrySet"(): $ObjectSet<$Object2BooleanMap$Entry<K>>
"or"(predicate0: $Predicate$$Type<K>): $Predicate<K>
/** @deprecated */
"put"(k0: K, boolean1: boolean): boolean
"put"(k0: K, boolean1: boolean): boolean
"putAll"(map0: $Map$$Type<K, boolean>): void
"putIfAbsent"(k0: K, boolean1: boolean): boolean
"putIfAbsent"(k0: K, boolean1: boolean): boolean
/** @deprecated */
"remove"(object0: any): boolean
"remove"(object0: any, boolean1: boolean): boolean
"remove"(object0: any, object1: any): boolean
"removeBoolean"(object0: any): boolean
"replace"(k0: K, boolean1: boolean, boolean2: boolean): boolean
"replace"(k0: K, boolean1: boolean): boolean
"replace"(k0: K, boolean1: boolean): boolean
"replace"(k0: K, boolean1: boolean, boolean2: boolean): boolean
"replaceAll"(biFunction0: $BiFunction$$Type<K, boolean, boolean>): void
"size"(): integer
"test"(k0: K): boolean
[index: string | number]: boolean
get "empty"(): boolean
}

export namespace $Object2BooleanMap {
function copyOf<K, V>(map0: $Map$$Type<K, V>): $Map<K, V>
function entry<K, V>(k0: K, v1: V): $Map$Entry<K, V>
function identity<T>(): $Function<T, T>
function isEqual<T>(object0: any): $Predicate<T>
function not<T>(predicate0: $Predicate$$Type<T>): $Predicate<T>
function of<K, V>(k0: K, v1: V, k2: K, v3: V, k4: K, v5: V, k6: K, v7: V, k8: K, v9: V): $Map<K, V>
function of<K, V>(k0: K, v1: V, k2: K, v3: V, k4: K, v5: V, k6: K, v7: V): $Map<K, V>
function of<K, V>(k0: K, v1: V, k2: K, v3: V, k4: K, v5: V): $Map<K, V>
function of<K, V>(): $Map<K, V>
function of<K, V>(k0: K, v1: V, k2: K, v3: V): $Map<K, V>
function of<K, V>(k0: K, v1: V): $Map<K, V>
function of<K, V>(k0: K, v1: V, k2: K, v3: V, k4: K, v5: V, k6: K, v7: V, k8: K, v9: V, k10: K, v11: V, k12: K, v13: V, k14: K, v15: V, k16: K, v17: V, k18: K, v19: V): $Map<K, V>
function of<K, V>(k0: K, v1: V, k2: K, v3: V, k4: K, v5: V, k6: K, v7: V, k8: K, v9: V, k10: K, v11: V, k12: K, v13: V, k14: K, v15: V, k16: K, v17: V): $Map<K, V>
function of<K, V>(k0: K, v1: V, k2: K, v3: V, k4: K, v5: V, k6: K, v7: V, k8: K, v9: V, k10: K, v11: V, k12: K, v13: V, k14: K, v15: V): $Map<K, V>
function of<K, V>(k0: K, v1: V, k2: K, v3: V, k4: K, v5: V, k6: K, v7: V, k8: K, v9: V, k10: K, v11: V, k12: K, v13: V): $Map<K, V>
function of<K, V>(k0: K, v1: V, k2: K, v3: V, k4: K, v5: V, k6: K, v7: V, k8: K, v9: V, k10: K, v11: V): $Map<K, V>
function ofEntries<K, V>(...entry0s: $Map$Entry$$Type<K, V>[]): $Map<K, V>
}
export abstract class $Object2BooleanMap$$Static<K = any> implements $Object2BooleanMap<K> {
static "copyOf"<K, V>(map0: $Map$$Type<K, V>): $Map<K, V>
static "entry"<K, V>(k0: K, v1: V): $Map$Entry<K, V>
static "identity"<T>(): $Function<T, T>
static "isEqual"<T>(object0: any): $Predicate<T>
static "not"<T>(predicate0: $Predicate$$Type<T>): $Predicate<T>
static "of"<K, V>(k0: K, v1: V, k2: K, v3: V, k4: K, v5: V, k6: K, v7: V, k8: K, v9: V): $Map<K, V>
static "of"<K, V>(k0: K, v1: V, k2: K, v3: V, k4: K, v5: V, k6: K, v7: V): $Map<K, V>
static "of"<K, V>(k0: K, v1: V, k2: K, v3: V, k4: K, v5: V): $Map<K, V>
static "of"<K, V>(): $Map<K, V>
static "of"<K, V>(k0: K, v1: V, k2: K, v3: V): $Map<K, V>
static "of"<K, V>(k0: K, v1: V): $Map<K, V>
static "of"<K, V>(k0: K, v1: V, k2: K, v3: V, k4: K, v5: V, k6: K, v7: V, k8: K, v9: V, k10: K, v11: V, k12: K, v13: V, k14: K, v15: V, k16: K, v17: V, k18: K, v19: V): $Map<K, V>
static "of"<K, V>(k0: K, v1: V, k2: K, v3: V, k4: K, v5: V, k6: K, v7: V, k8: K, v9: V, k10: K, v11: V, k12: K, v13: V, k14: K, v15: V, k16: K, v17: V): $Map<K, V>
static "of"<K, V>(k0: K, v1: V, k2: K, v3: V, k4: K, v5: V, k6: K, v7: V, k8: K, v9: V, k10: K, v11: V, k12: K, v13: V, k14: K, v15: V): $Map<K, V>
static "of"<K, V>(k0: K, v1: V, k2: K, v3: V, k4: K, v5: V, k6: K, v7: V, k8: K, v9: V, k10: K, v11: V, k12: K, v13: V): $Map<K, V>
static "of"<K, V>(k0: K, v1: V, k2: K, v3: V, k4: K, v5: V, k6: K, v7: V, k8: K, v9: V, k10: K, v11: V): $Map<K, V>
static "ofEntries"<K, V>(...entry0s: $Map$Entry$$Type<K, V>[]): $Map<K, V>
}
}

declare module "it.unimi.dsi.fastutil.objects.Object2FloatMap$Entry" {
import { $Map$Entry, $Map$Entry$$Type } from "java.util.Map$Entry"
import { $Comparable, $Comparable$$Type } from "java.lang.Comparable"
import { $Comparator, $Comparator$$Type } from "java.util.Comparator"

export interface $Object2FloatMap$Entry<K = any> extends $Map$Entry<K, float> {
"equals"(object0: any): boolean
"getFloatValue"(): float
"getKey"(): K
"hashCode"(): integer
"setValue"(float0: float): float
/** @deprecated */
"setValue"(float0: float): float
get "floatValue"(): float
get "key"(): K
set "value"(value: float)
set "value"(value: float)
}

export namespace $Object2FloatMap$Entry {
function comparingByKey<K extends $Comparable<K>, V>(): $Comparator<$Map$Entry<K, V>>
function comparingByKey<K, V>(comparator0: $Comparator$$Type<K>): $Comparator<$Map$Entry<K, V>>
function comparingByValue<K, V extends $Comparable<V>>(): $Comparator<$Map$Entry<K, V>>
function comparingByValue<K, V>(comparator0: $Comparator$$Type<V>): $Comparator<$Map$Entry<K, V>>
function copyOf<K, V>(entry0: $Map$Entry$$Type<K, V>): $Map$Entry<K, V>
}
export abstract class $Object2FloatMap$Entry$$Static<K = any> implements $Object2FloatMap$Entry<K> {
static "comparingByKey"<K extends $Comparable<K>, V>(): $Comparator<$Map$Entry<K, V>>
static "comparingByKey"<K, V>(comparator0: $Comparator$$Type<K>): $Comparator<$Map$Entry<K, V>>
static "comparingByValue"<K, V extends $Comparable<V>>(): $Comparator<$Map$Entry<K, V>>
static "comparingByValue"<K, V>(comparator0: $Comparator$$Type<V>): $Comparator<$Map$Entry<K, V>>
static "copyOf"<K, V>(entry0: $Map$Entry$$Type<K, V>): $Map$Entry<K, V>
}
}

declare module "it.unimi.dsi.fastutil.objects.AbstractObject2ByteMap" {
import { $Byte2FloatFunction$$Type } from "it.unimi.dsi.fastutil.bytes.Byte2FloatFunction"
import { $Byte2LongFunction$$Type } from "it.unimi.dsi.fastutil.bytes.Byte2LongFunction"
import { $Int2ByteFunction } from "it.unimi.dsi.fastutil.ints.Int2ByteFunction"
import { $BiFunction$$Type } from "java.util.function.BiFunction"
import { $Float2ByteFunction } from "it.unimi.dsi.fastutil.floats.Float2ByteFunction"
import { $IntBinaryOperator$$Type } from "java.util.function.IntBinaryOperator"
import { $Double2ObjectFunction$$Type } from "it.unimi.dsi.fastutil.doubles.Double2ObjectFunction"
import { $Object2ObjectFunction, $Object2ObjectFunction$$Type } from "it.unimi.dsi.fastutil.objects.Object2ObjectFunction"
import { $Function, $Function$$Type } from "java.util.function.Function"
import { $Object2LongFunction } from "it.unimi.dsi.fastutil.objects.Object2LongFunction"
import { $Double2ByteFunction } from "it.unimi.dsi.fastutil.doubles.Double2ByteFunction"
import { $Object2DoubleFunction } from "it.unimi.dsi.fastutil.objects.Object2DoubleFunction"
import { $Reference2ByteFunction } from "it.unimi.dsi.fastutil.objects.Reference2ByteFunction"
import { $Byte2DoubleFunction$$Type } from "it.unimi.dsi.fastutil.bytes.Byte2DoubleFunction"
import { $Object2FloatFunction } from "it.unimi.dsi.fastutil.objects.Object2FloatFunction"
import { $Short2ByteFunction } from "it.unimi.dsi.fastutil.shorts.Short2ByteFunction"
import { $Object2IntFunction } from "it.unimi.dsi.fastutil.objects.Object2IntFunction"
import { $Map, $Map$$Type } from "java.util.Map"
import { $ByteCollection } from "it.unimi.dsi.fastutil.bytes.ByteCollection"
import { $BiConsumer$$Type } from "java.util.function.BiConsumer"
import { $ByteBinaryOperator$$Type } from "it.unimi.dsi.fastutil.bytes.ByteBinaryOperator"
import { $Object2ByteMap } from "it.unimi.dsi.fastutil.objects.Object2ByteMap"
import { $Reference2ObjectFunction$$Type } from "it.unimi.dsi.fastutil.objects.Reference2ObjectFunction"
import { $Map$Entry, $Map$Entry$$Type } from "java.util.Map$Entry"
import { $Object2ByteMap$Entry } from "it.unimi.dsi.fastutil.objects.Object2ByteMap$Entry"
import { $Byte2ObjectFunction$$Type } from "it.unimi.dsi.fastutil.bytes.Byte2ObjectFunction"
import { $Short2ObjectFunction$$Type } from "it.unimi.dsi.fastutil.shorts.Short2ObjectFunction"
import { $Object2ByteFunction, $Object2ByteFunction$$Type } from "it.unimi.dsi.fastutil.objects.Object2ByteFunction"
import { $Byte2ReferenceFunction$$Type } from "it.unimi.dsi.fastutil.bytes.Byte2ReferenceFunction"
import { $Char2ByteFunction } from "it.unimi.dsi.fastutil.chars.Char2ByteFunction"
import { $AbstractObject2ByteFunction } from "it.unimi.dsi.fastutil.objects.AbstractObject2ByteFunction"
import { $Byte2ShortFunction$$Type } from "it.unimi.dsi.fastutil.bytes.Byte2ShortFunction"
import { $Int2ObjectFunction$$Type } from "it.unimi.dsi.fastutil.ints.Int2ObjectFunction"
import { $Long2ObjectFunction$$Type } from "it.unimi.dsi.fastutil.longs.Long2ObjectFunction"
import { $ToIntFunction$$Type } from "java.util.function.ToIntFunction"
import { $Byte2CharFunction$$Type } from "it.unimi.dsi.fastutil.bytes.Byte2CharFunction"
import { $ObjectSet } from "it.unimi.dsi.fastutil.objects.ObjectSet"
import { $Serializable } from "java.io.Serializable"
import { $Object2ReferenceFunction } from "it.unimi.dsi.fastutil.objects.Object2ReferenceFunction"
import { $Float2ObjectFunction$$Type } from "it.unimi.dsi.fastutil.floats.Float2ObjectFunction"
import { $Long2ByteFunction } from "it.unimi.dsi.fastutil.longs.Long2ByteFunction"
import { $Char2ObjectFunction$$Type } from "it.unimi.dsi.fastutil.chars.Char2ObjectFunction"
import { $Object2ShortFunction } from "it.unimi.dsi.fastutil.objects.Object2ShortFunction"
import { $Byte2ByteFunction, $Byte2ByteFunction$$Type } from "it.unimi.dsi.fastutil.bytes.Byte2ByteFunction"
import { $Object2CharFunction } from "it.unimi.dsi.fastutil.objects.Object2CharFunction"
import { $Byte2IntFunction$$Type } from "it.unimi.dsi.fastutil.bytes.Byte2IntFunction"

export class $AbstractObject2ByteMap<K = any> extends $AbstractObject2ByteFunction<K> implements $Object2ByteMap<K>, $Serializable {
/** @deprecated */
public "andThen"<T>(function0: $Function$$Type<byte, T>): $Function<K, T>
public "andThenByte"(byte2ByteFunction0: $Byte2ByteFunction$$Type): $Object2ByteFunction<K>
public "andThenChar"(byte2CharFunction0: $Byte2CharFunction$$Type): $Object2CharFunction<K>
public "andThenDouble"(byte2DoubleFunction0: $Byte2DoubleFunction$$Type): $Object2DoubleFunction<K>
public "andThenFloat"(byte2FloatFunction0: $Byte2FloatFunction$$Type): $Object2FloatFunction<K>
public "andThenInt"(byte2IntFunction0: $Byte2IntFunction$$Type): $Object2IntFunction<K>
public "andThenLong"(byte2LongFunction0: $Byte2LongFunction$$Type): $Object2LongFunction<K>
public "andThenObject"<T>(byte2ObjectFunction0: $Byte2ObjectFunction$$Type<T>): $Object2ObjectFunction<K, T>
public "andThenReference"<T>(byte2ReferenceFunction0: $Byte2ReferenceFunction$$Type<T>): $Object2ReferenceFunction<K, T>
public "andThenShort"(byte2ShortFunction0: $Byte2ShortFunction$$Type): $Object2ShortFunction<K>
public "apply"(k0: K): byte
public "applyAsInt"(k0: K): integer
public "clear"(): void
public "compose"<V>(function0: $Function$$Type<V, K>): $Function<V, byte>
public "composeByte"(byte2ObjectFunction0: $Byte2ObjectFunction$$Type<K>): $Byte2ByteFunction
public "composeChar"(char2ObjectFunction0: $Char2ObjectFunction$$Type<K>): $Char2ByteFunction
public "composeDouble"(double2ObjectFunction0: $Double2ObjectFunction$$Type<K>): $Double2ByteFunction
public "composeFloat"(float2ObjectFunction0: $Float2ObjectFunction$$Type<K>): $Float2ByteFunction
public "composeInt"(int2ObjectFunction0: $Int2ObjectFunction$$Type<K>): $Int2ByteFunction
public "composeLong"(long2ObjectFunction0: $Long2ObjectFunction$$Type<K>): $Long2ByteFunction
public "composeObject"<T>(object2ObjectFunction0: $Object2ObjectFunction$$Type<T, K>): $Object2ByteFunction<T>
public "composeReference"<T>(reference2ObjectFunction0: $Reference2ObjectFunction$$Type<T, K>): $Reference2ByteFunction<T>
public "composeShort"(short2ObjectFunction0: $Short2ObjectFunction$$Type<K>): $Short2ByteFunction
public "compute"(k0: K, biFunction1: $BiFunction$$Type<K, byte, byte>): byte
public "computeByte"(k0: K, biFunction1: $BiFunction$$Type<K, byte, byte>): byte
/** @deprecated */
public "computeByteIfAbsent"(k0: K, toIntFunction1: $ToIntFunction$$Type<K>): byte
/** @deprecated */
public "computeByteIfAbsentPartial"(k0: K, object2ByteFunction1: $Object2ByteFunction$$Type<K>): byte
public "computeByteIfPresent"(k0: K, biFunction1: $BiFunction$$Type<K, byte, byte>): byte
public "computeIfAbsent"(k0: K, toIntFunction1: $ToIntFunction$$Type<K>): byte
public "computeIfAbsent"(k0: K, object2ByteFunction1: $Object2ByteFunction$$Type<K>): byte
public "computeIfAbsent"(k0: K, function1: $Function$$Type<K, byte>): byte
public "computeIfPresent"(k0: K, biFunction1: $BiFunction$$Type<K, byte, byte>): byte
public "containsKey"(object0: any): boolean
public "containsValue"(byte0: byte): boolean
/** @deprecated */
public "containsValue"(object0: any): boolean
public static "copyOf"<K, V>(map0: $Map$$Type<K, V>): $Map<K, V>
public "defaultReturnValue"(byte0: byte): void
public "defaultReturnValue"(): byte
public static "entry"<K, V>(k0: K, v1: V): $Map$Entry<K, V>
/** @deprecated */
public "entrySet"(): $ObjectSet<$Map$Entry<K, byte>>
public "forEach"(biConsumer0: $BiConsumer$$Type<K, byte>): void
public "getByte"(object0: any): byte
public "getOrDefault"(object0: any, byte1: byte): byte
/** @deprecated */
public "getOrDefault"(object0: any, byte1: byte): byte
public static "identity"<T>(): $Function<T, T>
public "isEmpty"(): boolean
/** @deprecated */
public "merge"(k0: K, byte1: byte, biFunction2: $BiFunction$$Type<byte, byte, byte>): byte
public "merge"(k0: K, byte1: byte, biFunction2: $BiFunction$$Type<byte, byte, byte>): byte
/** @deprecated */
public "mergeByte"(k0: K, byte1: byte, biFunction2: $BiFunction$$Type<byte, byte, byte>): byte
public "mergeByte"(k0: K, byte1: byte, byteBinaryOperator2: $ByteBinaryOperator$$Type): byte
public "mergeByte"(k0: K, byte1: byte, intBinaryOperator2: $IntBinaryOperator$$Type): byte
public "object2ByteEntrySet"(): $ObjectSet<$Object2ByteMap$Entry<K>>
public static "of"<K, V>(k0: K, v1: V, k2: K, v3: V, k4: K, v5: V, k6: K, v7: V, k8: K, v9: V): $Map<K, V>
public static "of"<K, V>(k0: K, v1: V, k2: K, v3: V, k4: K, v5: V, k6: K, v7: V): $Map<K, V>
public static "of"<K, V>(k0: K, v1: V, k2: K, v3: V, k4: K, v5: V): $Map<K, V>
public static "of"<K, V>(): $Map<K, V>
public static "of"<K, V>(k0: K, v1: V, k2: K, v3: V): $Map<K, V>
public static "of"<K, V>(k0: K, v1: V): $Map<K, V>
public static "of"<K, V>(k0: K, v1: V, k2: K, v3: V, k4: K, v5: V, k6: K, v7: V, k8: K, v9: V, k10: K, v11: V, k12: K, v13: V, k14: K, v15: V, k16: K, v17: V, k18: K, v19: V): $Map<K, V>
public static "of"<K, V>(k0: K, v1: V, k2: K, v3: V, k4: K, v5: V, k6: K, v7: V, k8: K, v9: V, k10: K, v11: V, k12: K, v13: V, k14: K, v15: V, k16: K, v17: V): $Map<K, V>
public static "of"<K, V>(k0: K, v1: V, k2: K, v3: V, k4: K, v5: V, k6: K, v7: V, k8: K, v9: V, k10: K, v11: V, k12: K, v13: V, k14: K, v15: V): $Map<K, V>
public static "of"<K, V>(k0: K, v1: V, k2: K, v3: V, k4: K, v5: V, k6: K, v7: V, k8: K, v9: V, k10: K, v11: V, k12: K, v13: V): $Map<K, V>
public static "of"<K, V>(k0: K, v1: V, k2: K, v3: V, k4: K, v5: V, k6: K, v7: V, k8: K, v9: V, k10: K, v11: V): $Map<K, V>
public static "ofEntries"<K, V>(...entry0s: $Map$Entry$$Type<K, V>[]): $Map<K, V>
/** @deprecated */
public "put"(k0: K, byte1: byte): byte
public "put"(k0: K, byte1: byte): byte
public "putAll"(map0: $Map$$Type<K, byte>): void
public "putIfAbsent"(k0: K, byte1: byte): byte
/** @deprecated */
public "putIfAbsent"(k0: K, byte1: byte): byte
public "remove"(object0: any, byte1: byte): boolean
/** @deprecated */
public "remove"(object0: any, object1: any): boolean
public "removeByte"(object0: any): byte
/** @deprecated */
public "replace"(k0: K, byte1: byte, byte2: byte): boolean
public "replace"(k0: K, byte1: byte, byte2: byte): boolean
public "replace"(k0: K, byte1: byte): byte
/** @deprecated */
public "replace"(k0: K, byte1: byte): byte
public "replaceAll"(biFunction0: $BiFunction$$Type<K, byte, byte>): void
public "size"(): integer
public "values"(): $ByteCollection
get "empty"(): boolean
}
}

declare module "it.unimi.dsi.fastutil.objects.Reference2ShortFunction" {
import { $Double2ShortFunction } from "it.unimi.dsi.fastutil.doubles.Double2ShortFunction"
import { $Double2ReferenceFunction$$Type } from "it.unimi.dsi.fastutil.doubles.Double2ReferenceFunction"
import { $Long2ShortFunction } from "it.unimi.dsi.fastutil.longs.Long2ShortFunction"
import { $Int2ShortFunction } from "it.unimi.dsi.fastutil.ints.Int2ShortFunction"
import { $Int2ReferenceFunction$$Type } from "it.unimi.dsi.fastutil.ints.Int2ReferenceFunction"
import { $Short2ReferenceFunction$$Type } from "it.unimi.dsi.fastutil.shorts.Short2ReferenceFunction"
import { $Function, $Function$$Type } from "java.util.function.Function"
import { $Short2ShortFunction, $Short2ShortFunction$$Type } from "it.unimi.dsi.fastutil.shorts.Short2ShortFunction"
import { $Reference2FloatFunction } from "it.unimi.dsi.fastutil.objects.Reference2FloatFunction"
import { $Short2DoubleFunction$$Type } from "it.unimi.dsi.fastutil.shorts.Short2DoubleFunction"
import { $Reference2ByteFunction } from "it.unimi.dsi.fastutil.objects.Reference2ByteFunction"
import { $Char2ReferenceFunction$$Type } from "it.unimi.dsi.fastutil.chars.Char2ReferenceFunction"
import { $Short2ByteFunction$$Type } from "it.unimi.dsi.fastutil.shorts.Short2ByteFunction"
import { $Reference2LongFunction } from "it.unimi.dsi.fastutil.objects.Reference2LongFunction"
import { $Short2LongFunction$$Type } from "it.unimi.dsi.fastutil.shorts.Short2LongFunction"
import { $Reference2IntFunction } from "it.unimi.dsi.fastutil.objects.Reference2IntFunction"
import { $Short2IntFunction$$Type } from "it.unimi.dsi.fastutil.shorts.Short2IntFunction"
import { $Reference2ObjectFunction } from "it.unimi.dsi.fastutil.objects.Reference2ObjectFunction"
import { $Short2ObjectFunction$$Type } from "it.unimi.dsi.fastutil.shorts.Short2ObjectFunction"
import { $Function as $Function$0 } from "it.unimi.dsi.fastutil.Function"
import { $Byte2ReferenceFunction$$Type } from "it.unimi.dsi.fastutil.bytes.Byte2ReferenceFunction"
import { $Byte2ShortFunction } from "it.unimi.dsi.fastutil.bytes.Byte2ShortFunction"
import { $ToIntFunction } from "java.util.function.ToIntFunction"
import { $Char2ShortFunction } from "it.unimi.dsi.fastutil.chars.Char2ShortFunction"
import { $Short2CharFunction$$Type } from "it.unimi.dsi.fastutil.shorts.Short2CharFunction"
import { $Float2ShortFunction } from "it.unimi.dsi.fastutil.floats.Float2ShortFunction"
import { $Short2FloatFunction$$Type } from "it.unimi.dsi.fastutil.shorts.Short2FloatFunction"
import { $Reference2ReferenceFunction, $Reference2ReferenceFunction$$Type } from "it.unimi.dsi.fastutil.objects.Reference2ReferenceFunction"
import { $Object2ReferenceFunction$$Type } from "it.unimi.dsi.fastutil.objects.Object2ReferenceFunction"
import { $Long2ReferenceFunction$$Type } from "it.unimi.dsi.fastutil.longs.Long2ReferenceFunction"
import { $Reference2DoubleFunction } from "it.unimi.dsi.fastutil.objects.Reference2DoubleFunction"
import { $Reference2CharFunction } from "it.unimi.dsi.fastutil.objects.Reference2CharFunction"
import { $Float2ReferenceFunction$$Type } from "it.unimi.dsi.fastutil.floats.Float2ReferenceFunction"
import { $Object2ShortFunction } from "it.unimi.dsi.fastutil.objects.Object2ShortFunction"

export interface $Reference2ShortFunction<K = any> extends $Function$0<K, short>, $ToIntFunction<K> {
/** @deprecated */
"andThen"<T>(function0: $Function$$Type<short, T>): $Function<K, T>
"andThenByte"(short2ByteFunction0: $Short2ByteFunction$$Type): $Reference2ByteFunction<K>
"andThenChar"(short2CharFunction0: $Short2CharFunction$$Type): $Reference2CharFunction<K>
"andThenDouble"(short2DoubleFunction0: $Short2DoubleFunction$$Type): $Reference2DoubleFunction<K>
"andThenFloat"(short2FloatFunction0: $Short2FloatFunction$$Type): $Reference2FloatFunction<K>
"andThenInt"(short2IntFunction0: $Short2IntFunction$$Type): $Reference2IntFunction<K>
"andThenLong"(short2LongFunction0: $Short2LongFunction$$Type): $Reference2LongFunction<K>
"andThenObject"<T>(short2ObjectFunction0: $Short2ObjectFunction$$Type<T>): $Reference2ObjectFunction<K, T>
"andThenReference"<T>(short2ReferenceFunction0: $Short2ReferenceFunction$$Type<T>): $Reference2ReferenceFunction<K, T>
"andThenShort"(short2ShortFunction0: $Short2ShortFunction$$Type): $Reference2ShortFunction<K>
"apply"(k0: K): short
"applyAsInt"(k0: K): integer
"clear"(): void
"compose"<V>(function0: $Function$$Type<V, K>): $Function<V, short>
"composeByte"(byte2ReferenceFunction0: $Byte2ReferenceFunction$$Type<K>): $Byte2ShortFunction
"composeChar"(char2ReferenceFunction0: $Char2ReferenceFunction$$Type<K>): $Char2ShortFunction
"composeDouble"(double2ReferenceFunction0: $Double2ReferenceFunction$$Type<K>): $Double2ShortFunction
"composeFloat"(float2ReferenceFunction0: $Float2ReferenceFunction$$Type<K>): $Float2ShortFunction
"composeInt"(int2ReferenceFunction0: $Int2ReferenceFunction$$Type<K>): $Int2ShortFunction
"composeLong"(long2ReferenceFunction0: $Long2ReferenceFunction$$Type<K>): $Long2ShortFunction
"composeObject"<T>(object2ReferenceFunction0: $Object2ReferenceFunction$$Type<T, K>): $Object2ShortFunction<T>
"composeReference"<T>(reference2ReferenceFunction0: $Reference2ReferenceFunction$$Type<T, K>): $Reference2ShortFunction<T>
"composeShort"(short2ReferenceFunction0: $Short2ReferenceFunction$$Type<K>): $Short2ShortFunction
"containsKey"(object0: any): boolean
"defaultReturnValue"(): short
"defaultReturnValue"(short0: short): void
/** @deprecated */
"get"(object0: any): short
"getOrDefault"(object0: any, short1: short): short
/** @deprecated */
"getOrDefault"(object0: any, short1: short): short
"getShort"(object0: any): short
/** @deprecated */
"put"(k0: K, short1: short): short
"put"(k0: K, short1: short): short
"removeShort"(object0: any): short
"size"(): integer
}

export namespace $Reference2ShortFunction {
function identity<T>(): $Function<T, T>
}
export abstract class $Reference2ShortFunction$$Static<K = any> implements $Reference2ShortFunction<K> {
static "identity"<T>(): $Function<T, T>
}
}

declare module "it.unimi.dsi.fastutil.objects.Reference2LongMap" {
import { $Long2ShortFunction$$Type } from "it.unimi.dsi.fastutil.longs.Long2ShortFunction"
import { $Double2ReferenceFunction$$Type } from "it.unimi.dsi.fastutil.doubles.Double2ReferenceFunction"
import { $Byte2LongFunction } from "it.unimi.dsi.fastutil.bytes.Byte2LongFunction"
import { $LongBinaryOperator$$Type } from "java.util.function.LongBinaryOperator"
import { $Int2ReferenceFunction$$Type } from "it.unimi.dsi.fastutil.ints.Int2ReferenceFunction"
import { $Short2ReferenceFunction$$Type } from "it.unimi.dsi.fastutil.shorts.Short2ReferenceFunction"
import { $BiFunction$$Type } from "java.util.function.BiFunction"
import { $Reference2LongMap$Entry } from "it.unimi.dsi.fastutil.objects.Reference2LongMap$Entry"
import { $LongBinaryOperator$$Type as $LongBinaryOperator$0$$Type } from "it.unimi.dsi.fastutil.longs.LongBinaryOperator"
import { $Char2LongFunction } from "it.unimi.dsi.fastutil.chars.Char2LongFunction"
import { $Function, $Function$$Type } from "java.util.function.Function"
import { $Reference2FloatFunction } from "it.unimi.dsi.fastutil.objects.Reference2FloatFunction"
import { $Object2LongFunction } from "it.unimi.dsi.fastutil.objects.Object2LongFunction"
import { $Reference2ByteFunction } from "it.unimi.dsi.fastutil.objects.Reference2ByteFunction"
import { $Long2CharFunction$$Type } from "it.unimi.dsi.fastutil.longs.Long2CharFunction"
import { $Char2ReferenceFunction$$Type } from "it.unimi.dsi.fastutil.chars.Char2ReferenceFunction"
import { $Reference2LongFunction, $Reference2LongFunction$$Type } from "it.unimi.dsi.fastutil.objects.Reference2LongFunction"
import { $Map, $Map$$Type } from "java.util.Map"
import { $Short2LongFunction } from "it.unimi.dsi.fastutil.shorts.Short2LongFunction"
import { $BiConsumer$$Type } from "java.util.function.BiConsumer"
import { $Reference2IntFunction } from "it.unimi.dsi.fastutil.objects.Reference2IntFunction"
import { $Long2IntFunction$$Type } from "it.unimi.dsi.fastutil.longs.Long2IntFunction"
import { $ToLongFunction$$Type } from "java.util.function.ToLongFunction"
import { $ReferenceSet } from "it.unimi.dsi.fastutil.objects.ReferenceSet"
import { $Long2FloatFunction$$Type } from "it.unimi.dsi.fastutil.longs.Long2FloatFunction"
import { $Reference2ObjectFunction } from "it.unimi.dsi.fastutil.objects.Reference2ObjectFunction"
import { $Map$Entry, $Map$Entry$$Type } from "java.util.Map$Entry"
import { $Byte2ReferenceFunction$$Type } from "it.unimi.dsi.fastutil.bytes.Byte2ReferenceFunction"
import { $Float2LongFunction } from "it.unimi.dsi.fastutil.floats.Float2LongFunction"
import { $Long2ObjectFunction$$Type } from "it.unimi.dsi.fastutil.longs.Long2ObjectFunction"
import { $Reference2ShortFunction } from "it.unimi.dsi.fastutil.objects.Reference2ShortFunction"
import { $ObjectSet } from "it.unimi.dsi.fastutil.objects.ObjectSet"
import { $Long2DoubleFunction$$Type } from "it.unimi.dsi.fastutil.longs.Long2DoubleFunction"
import { $Int2LongFunction } from "it.unimi.dsi.fastutil.ints.Int2LongFunction"
import { $Long2LongFunction, $Long2LongFunction$$Type } from "it.unimi.dsi.fastutil.longs.Long2LongFunction"
import { $Double2LongFunction } from "it.unimi.dsi.fastutil.doubles.Double2LongFunction"
import { $Reference2ReferenceFunction, $Reference2ReferenceFunction$$Type } from "it.unimi.dsi.fastutil.objects.Reference2ReferenceFunction"
import { $Object2ReferenceFunction$$Type } from "it.unimi.dsi.fastutil.objects.Object2ReferenceFunction"
import { $Long2ByteFunction$$Type } from "it.unimi.dsi.fastutil.longs.Long2ByteFunction"
import { $Long2ReferenceFunction$$Type } from "it.unimi.dsi.fastutil.longs.Long2ReferenceFunction"
import { $Reference2DoubleFunction } from "it.unimi.dsi.fastutil.objects.Reference2DoubleFunction"
import { $Reference2CharFunction } from "it.unimi.dsi.fastutil.objects.Reference2CharFunction"
import { $Float2ReferenceFunction$$Type } from "it.unimi.dsi.fastutil.floats.Float2ReferenceFunction"

export interface $Reference2LongMap<K = any> extends $Reference2LongFunction<K>, $Map<K, long> {
/** @deprecated */
"andThen"<T>(function0: $Function$$Type<long, T>): $Function<K, T>
"andThenByte"(long2ByteFunction0: $Long2ByteFunction$$Type): $Reference2ByteFunction<K>
"andThenChar"(long2CharFunction0: $Long2CharFunction$$Type): $Reference2CharFunction<K>
"andThenDouble"(long2DoubleFunction0: $Long2DoubleFunction$$Type): $Reference2DoubleFunction<K>
"andThenFloat"(long2FloatFunction0: $Long2FloatFunction$$Type): $Reference2FloatFunction<K>
"andThenInt"(long2IntFunction0: $Long2IntFunction$$Type): $Reference2IntFunction<K>
"andThenLong"(long2LongFunction0: $Long2LongFunction$$Type): $Reference2LongFunction<K>
"andThenObject"<T>(long2ObjectFunction0: $Long2ObjectFunction$$Type<T>): $Reference2ObjectFunction<K, T>
"andThenReference"<T>(long2ReferenceFunction0: $Long2ReferenceFunction$$Type<T>): $Reference2ReferenceFunction<K, T>
"andThenShort"(long2ShortFunction0: $Long2ShortFunction$$Type): $Reference2ShortFunction<K>
"apply"(k0: K): long
"applyAsLong"(k0: K): long
"clear"(): void
"compose"<V>(function0: $Function$$Type<V, K>): $Function<V, long>
"composeByte"(byte2ReferenceFunction0: $Byte2ReferenceFunction$$Type<K>): $Byte2LongFunction
"composeChar"(char2ReferenceFunction0: $Char2ReferenceFunction$$Type<K>): $Char2LongFunction
"composeDouble"(double2ReferenceFunction0: $Double2ReferenceFunction$$Type<K>): $Double2LongFunction
"composeFloat"(float2ReferenceFunction0: $Float2ReferenceFunction$$Type<K>): $Float2LongFunction
"composeInt"(int2ReferenceFunction0: $Int2ReferenceFunction$$Type<K>): $Int2LongFunction
"composeLong"(long2ReferenceFunction0: $Long2ReferenceFunction$$Type<K>): $Long2LongFunction
"composeObject"<T>(object2ReferenceFunction0: $Object2ReferenceFunction$$Type<T, K>): $Object2LongFunction<T>
"composeReference"<T>(reference2ReferenceFunction0: $Reference2ReferenceFunction$$Type<T, K>): $Reference2LongFunction<T>
"composeShort"(short2ReferenceFunction0: $Short2ReferenceFunction$$Type<K>): $Short2LongFunction
"compute"(k0: K, biFunction1: $BiFunction$$Type<K, long, long>): long
"computeIfAbsent"(k0: K, toLongFunction1: $ToLongFunction$$Type<K>): long
"computeIfAbsent"(k0: K, reference2LongFunction1: $Reference2LongFunction$$Type<K>): long
"computeIfAbsent"(k0: K, function1: $Function$$Type<K, long>): long
"computeIfPresent"(k0: K, biFunction1: $BiFunction$$Type<K, long, long>): long
"computeLong"(k0: K, biFunction1: $BiFunction$$Type<K, long, long>): long
/** @deprecated */
"computeLongIfAbsent"(k0: K, toLongFunction1: $ToLongFunction$$Type<K>): long
/** @deprecated */
"computeLongIfAbsentPartial"(k0: K, reference2LongFunction1: $Reference2LongFunction$$Type<K>): long
"computeLongIfPresent"(k0: K, biFunction1: $BiFunction$$Type<K, long, long>): long
"containsKey"(object0: any): boolean
/** @deprecated */
"containsValue"(object0: any): boolean
"containsValue"(long0: long): boolean
"defaultReturnValue"(long0: long): void
"defaultReturnValue"(): long
/** @deprecated */
"entrySet"(): $ObjectSet<$Map$Entry<K, long>>
"equals"(object0: any): boolean
"forEach"(biConsumer0: $BiConsumer$$Type<K, long>): void
"getLong"(object0: any): long
/** @deprecated */
"getOrDefault"(object0: any, long1: long): long
"getOrDefault"(object0: any, long1: long): long
"hashCode"(): integer
"isEmpty"(): boolean
"keySet"(): $ReferenceSet<K>
/** @deprecated */
"merge"(k0: K, long1: long, biFunction2: $BiFunction$$Type<long, long, long>): long
"merge"(k0: K, long1: long, biFunction2: $BiFunction$$Type<long, long, long>): long
"mergeLong"(k0: K, long1: long, longBinaryOperator2: $LongBinaryOperator$0$$Type): long
"mergeLong"(k0: K, long1: long, longBinaryOperator2: $LongBinaryOperator$$Type): long
/** @deprecated */
"mergeLong"(k0: K, long1: long, biFunction2: $BiFunction$$Type<long, long, long>): long
/** @deprecated */
"put"(k0: K, long1: long): long
"put"(k0: K, long1: long): long
"putAll"(map0: $Map$$Type<K, long>): void
/** @deprecated */
"putIfAbsent"(k0: K, long1: long): long
"putIfAbsent"(k0: K, long1: long): long
"reference2LongEntrySet"(): $ObjectSet<$Reference2LongMap$Entry<K>>
/** @deprecated */
"remove"(object0: any, object1: any): boolean
"remove"(object0: any, long1: long): boolean
"removeLong"(object0: any): long
"replace"(k0: K, long1: long): long
/** @deprecated */
"replace"(k0: K, long1: long, long2: long): boolean
"replace"(k0: K, long1: long, long2: long): boolean
/** @deprecated */
"replace"(k0: K, long1: long): long
"replaceAll"(biFunction0: $BiFunction$$Type<K, long, long>): void
"size"(): integer
get "empty"(): boolean
}

export namespace $Reference2LongMap {
function copyOf<K, V>(map0: $Map$$Type<K, V>): $Map<K, V>
function entry<K, V>(k0: K, v1: V): $Map$Entry<K, V>
function identity<T>(): $Function<T, T>
function of<K, V>(k0: K, v1: V, k2: K, v3: V, k4: K, v5: V, k6: K, v7: V, k8: K, v9: V): $Map<K, V>
function of<K, V>(k0: K, v1: V, k2: K, v3: V, k4: K, v5: V, k6: K, v7: V): $Map<K, V>
function of<K, V>(k0: K, v1: V, k2: K, v3: V, k4: K, v5: V): $Map<K, V>
function of<K, V>(): $Map<K, V>
function of<K, V>(k0: K, v1: V, k2: K, v3: V): $Map<K, V>
function of<K, V>(k0: K, v1: V): $Map<K, V>
function of<K, V>(k0: K, v1: V, k2: K, v3: V, k4: K, v5: V, k6: K, v7: V, k8: K, v9: V, k10: K, v11: V, k12: K, v13: V, k14: K, v15: V, k16: K, v17: V, k18: K, v19: V): $Map<K, V>
function of<K, V>(k0: K, v1: V, k2: K, v3: V, k4: K, v5: V, k6: K, v7: V, k8: K, v9: V, k10: K, v11: V, k12: K, v13: V, k14: K, v15: V, k16: K, v17: V): $Map<K, V>
function of<K, V>(k0: K, v1: V, k2: K, v3: V, k4: K, v5: V, k6: K, v7: V, k8: K, v9: V, k10: K, v11: V, k12: K, v13: V, k14: K, v15: V): $Map<K, V>
function of<K, V>(k0: K, v1: V, k2: K, v3: V, k4: K, v5: V, k6: K, v7: V, k8: K, v9: V, k10: K, v11: V, k12: K, v13: V): $Map<K, V>
function of<K, V>(k0: K, v1: V, k2: K, v3: V, k4: K, v5: V, k6: K, v7: V, k8: K, v9: V, k10: K, v11: V): $Map<K, V>
function ofEntries<K, V>(...entry0s: $Map$Entry$$Type<K, V>[]): $Map<K, V>
}
export abstract class $Reference2LongMap$$Static<K = any> implements $Reference2LongMap<K> {
static "copyOf"<K, V>(map0: $Map$$Type<K, V>): $Map<K, V>
static "entry"<K, V>(k0: K, v1: V): $Map$Entry<K, V>
static "identity"<T>(): $Function<T, T>
static "of"<K, V>(k0: K, v1: V, k2: K, v3: V, k4: K, v5: V, k6: K, v7: V, k8: K, v9: V): $Map<K, V>
static "of"<K, V>(k0: K, v1: V, k2: K, v3: V, k4: K, v5: V, k6: K, v7: V): $Map<K, V>
static "of"<K, V>(k0: K, v1: V, k2: K, v3: V, k4: K, v5: V): $Map<K, V>
static "of"<K, V>(): $Map<K, V>
static "of"<K, V>(k0: K, v1: V, k2: K, v3: V): $Map<K, V>
static "of"<K, V>(k0: K, v1: V): $Map<K, V>
static "of"<K, V>(k0: K, v1: V, k2: K, v3: V, k4: K, v5: V, k6: K, v7: V, k8: K, v9: V, k10: K, v11: V, k12: K, v13: V, k14: K, v15: V, k16: K, v17: V, k18: K, v19: V): $Map<K, V>
static "of"<K, V>(k0: K, v1: V, k2: K, v3: V, k4: K, v5: V, k6: K, v7: V, k8: K, v9: V, k10: K, v11: V, k12: K, v13: V, k14: K, v15: V, k16: K, v17: V): $Map<K, V>
static "of"<K, V>(k0: K, v1: V, k2: K, v3: V, k4: K, v5: V, k6: K, v7: V, k8: K, v9: V, k10: K, v11: V, k12: K, v13: V, k14: K, v15: V): $Map<K, V>
static "of"<K, V>(k0: K, v1: V, k2: K, v3: V, k4: K, v5: V, k6: K, v7: V, k8: K, v9: V, k10: K, v11: V, k12: K, v13: V): $Map<K, V>
static "of"<K, V>(k0: K, v1: V, k2: K, v3: V, k4: K, v5: V, k6: K, v7: V, k8: K, v9: V, k10: K, v11: V): $Map<K, V>
static "ofEntries"<K, V>(...entry0s: $Map$Entry$$Type<K, V>[]): $Map<K, V>
}
}

declare module "it.unimi.dsi.fastutil.objects.Reference2ReferenceMap" {
import { $Double2ReferenceFunction, $Double2ReferenceFunction$$Type } from "it.unimi.dsi.fastutil.doubles.Double2ReferenceFunction"
import { $Int2ReferenceFunction, $Int2ReferenceFunction$$Type } from "it.unimi.dsi.fastutil.ints.Int2ReferenceFunction"
import { $Short2ReferenceFunction, $Short2ReferenceFunction$$Type } from "it.unimi.dsi.fastutil.shorts.Short2ReferenceFunction"
import { $BiFunction$$Type } from "java.util.function.BiFunction"
import { $Function, $Function$$Type } from "java.util.function.Function"
import { $Reference2FloatFunction, $Reference2FloatFunction$$Type } from "it.unimi.dsi.fastutil.objects.Reference2FloatFunction"
import { $Reference2ByteFunction, $Reference2ByteFunction$$Type } from "it.unimi.dsi.fastutil.objects.Reference2ByteFunction"
import { $Char2ReferenceFunction, $Char2ReferenceFunction$$Type } from "it.unimi.dsi.fastutil.chars.Char2ReferenceFunction"
import { $Reference2LongFunction, $Reference2LongFunction$$Type } from "it.unimi.dsi.fastutil.objects.Reference2LongFunction"
import { $Map, $Map$$Type } from "java.util.Map"
import { $BiConsumer$$Type } from "java.util.function.BiConsumer"
import { $Reference2IntFunction, $Reference2IntFunction$$Type } from "it.unimi.dsi.fastutil.objects.Reference2IntFunction"
import { $Reference2ObjectFunction, $Reference2ObjectFunction$$Type } from "it.unimi.dsi.fastutil.objects.Reference2ObjectFunction"
import { $Map$Entry, $Map$Entry$$Type } from "java.util.Map$Entry"
import { $Reference2ReferenceMap$Entry } from "it.unimi.dsi.fastutil.objects.Reference2ReferenceMap$Entry"
import { $Byte2ReferenceFunction, $Byte2ReferenceFunction$$Type } from "it.unimi.dsi.fastutil.bytes.Byte2ReferenceFunction"
import { $Reference2ShortFunction, $Reference2ShortFunction$$Type } from "it.unimi.dsi.fastutil.objects.Reference2ShortFunction"
import { $ObjectSet } from "it.unimi.dsi.fastutil.objects.ObjectSet"
import { $Reference2ReferenceFunction, $Reference2ReferenceFunction$$Type } from "it.unimi.dsi.fastutil.objects.Reference2ReferenceFunction"
import { $Object2ReferenceFunction, $Object2ReferenceFunction$$Type } from "it.unimi.dsi.fastutil.objects.Object2ReferenceFunction"
import { $Long2ReferenceFunction, $Long2ReferenceFunction$$Type } from "it.unimi.dsi.fastutil.longs.Long2ReferenceFunction"
import { $Reference2DoubleFunction, $Reference2DoubleFunction$$Type } from "it.unimi.dsi.fastutil.objects.Reference2DoubleFunction"
import { $Reference2CharFunction, $Reference2CharFunction$$Type } from "it.unimi.dsi.fastutil.objects.Reference2CharFunction"
import { $Float2ReferenceFunction, $Float2ReferenceFunction$$Type } from "it.unimi.dsi.fastutil.floats.Float2ReferenceFunction"
import { $ReferenceCollection } from "it.unimi.dsi.fastutil.objects.ReferenceCollection"

export interface $Reference2ReferenceMap<K = any, V = any> extends $Reference2ReferenceFunction<K, V>, $Map<K, V> {
"andThen"<V>(function0: $Function$$Type<V, V>): $Function<K, V>
"andThenByte"(reference2ByteFunction0: $Reference2ByteFunction$$Type<V>): $Reference2ByteFunction<K>
"andThenChar"(reference2CharFunction0: $Reference2CharFunction$$Type<V>): $Reference2CharFunction<K>
"andThenDouble"(reference2DoubleFunction0: $Reference2DoubleFunction$$Type<V>): $Reference2DoubleFunction<K>
"andThenFloat"(reference2FloatFunction0: $Reference2FloatFunction$$Type<V>): $Reference2FloatFunction<K>
"andThenInt"(reference2IntFunction0: $Reference2IntFunction$$Type<V>): $Reference2IntFunction<K>
"andThenLong"(reference2LongFunction0: $Reference2LongFunction$$Type<V>): $Reference2LongFunction<K>
"andThenObject"<T>(reference2ObjectFunction0: $Reference2ObjectFunction$$Type<V, T>): $Reference2ObjectFunction<K, T>
"andThenReference"<T>(reference2ReferenceFunction0: $Reference2ReferenceFunction$$Type<V, T>): $Reference2ReferenceFunction<K, T>
"andThenShort"(reference2ShortFunction0: $Reference2ShortFunction$$Type<V>): $Reference2ShortFunction<K>
"apply"(k0: K): V
"clear"(): void
"compose"<V>(function0: $Function$$Type<V, K>): $Function<V, V>
"composeByte"(byte2ReferenceFunction0: $Byte2ReferenceFunction$$Type<K>): $Byte2ReferenceFunction<V>
"composeChar"(char2ReferenceFunction0: $Char2ReferenceFunction$$Type<K>): $Char2ReferenceFunction<V>
"composeDouble"(double2ReferenceFunction0: $Double2ReferenceFunction$$Type<K>): $Double2ReferenceFunction<V>
"composeFloat"(float2ReferenceFunction0: $Float2ReferenceFunction$$Type<K>): $Float2ReferenceFunction<V>
"composeInt"(int2ReferenceFunction0: $Int2ReferenceFunction$$Type<K>): $Int2ReferenceFunction<V>
"composeLong"(long2ReferenceFunction0: $Long2ReferenceFunction$$Type<K>): $Long2ReferenceFunction<V>
"composeObject"<T>(object2ReferenceFunction0: $Object2ReferenceFunction$$Type<T, K>): $Object2ReferenceFunction<T, V>
"composeReference"<T>(reference2ReferenceFunction0: $Reference2ReferenceFunction$$Type<T, K>): $Reference2ReferenceFunction<T, V>
"composeShort"(short2ReferenceFunction0: $Short2ReferenceFunction$$Type<K>): $Short2ReferenceFunction<V>
"compute"(k0: K, biFunction1: $BiFunction$$Type<K, V, V>): V
"computeIfAbsent"(k0: K, reference2ReferenceFunction1: $Reference2ReferenceFunction$$Type<K, V>): V
"computeIfAbsent"(k0: K, function1: $Function$$Type<K, V>): V
"computeIfPresent"(k0: K, biFunction1: $BiFunction$$Type<K, V, V>): V
/** @deprecated */
"computeReferenceIfAbsentPartial"(k0: K, reference2ReferenceFunction1: $Reference2ReferenceFunction$$Type<K, V>): V
"containsKey"(object0: any): boolean
"containsValue"(object0: any): boolean
"defaultReturnValue"(): V
"defaultReturnValue"(v0: V): void
"entrySet"(): $ObjectSet<$Map$Entry<K, V>>
"equals"(object0: any): boolean
"forEach"(biConsumer0: $BiConsumer$$Type<K, V>): void
"get"(object0: any): V
"getOrDefault"(object0: any, v1: V): V
"hashCode"(): integer
"isEmpty"(): boolean
"merge"(k0: K, v1: V, biFunction2: $BiFunction$$Type<V, V, V>): V
"put"(k0: K, v1: V): V
"putAll"(map0: $Map$$Type<K, V>): void
"putIfAbsent"(k0: K, v1: V): V
"reference2ReferenceEntrySet"(): $ObjectSet<$Reference2ReferenceMap$Entry<K, V>>
"remove"(object0: any): V
"remove"(object0: any, object1: any): boolean
"replace"(k0: K, v1: V): V
"replace"(k0: K, v1: V, v2: V): boolean
"replaceAll"(biFunction0: $BiFunction$$Type<K, V, V>): void
"size"(): integer
"values"(): $ReferenceCollection<V>
[index: string | number]: V
get "empty"(): boolean
}

export namespace $Reference2ReferenceMap {
function copyOf<K, V>(map0: $Map$$Type<K, V>): $Map<K, V>
function entry<K, V>(k0: K, v1: V): $Map$Entry<K, V>
function identity<T>(): $Function<T, T>
function of<K, V>(k0: K, v1: V, k2: K, v3: V, k4: K, v5: V, k6: K, v7: V, k8: K, v9: V): $Map<K, V>
function of<K, V>(k0: K, v1: V, k2: K, v3: V, k4: K, v5: V, k6: K, v7: V): $Map<K, V>
function of<K, V>(k0: K, v1: V, k2: K, v3: V, k4: K, v5: V): $Map<K, V>
function of<K, V>(): $Map<K, V>
function of<K, V>(k0: K, v1: V, k2: K, v3: V): $Map<K, V>
function of<K, V>(k0: K, v1: V): $Map<K, V>
function of<K, V>(k0: K, v1: V, k2: K, v3: V, k4: K, v5: V, k6: K, v7: V, k8: K, v9: V, k10: K, v11: V, k12: K, v13: V, k14: K, v15: V, k16: K, v17: V, k18: K, v19: V): $Map<K, V>
function of<K, V>(k0: K, v1: V, k2: K, v3: V, k4: K, v5: V, k6: K, v7: V, k8: K, v9: V, k10: K, v11: V, k12: K, v13: V, k14: K, v15: V, k16: K, v17: V): $Map<K, V>
function of<K, V>(k0: K, v1: V, k2: K, v3: V, k4: K, v5: V, k6: K, v7: V, k8: K, v9: V, k10: K, v11: V, k12: K, v13: V, k14: K, v15: V): $Map<K, V>
function of<K, V>(k0: K, v1: V, k2: K, v3: V, k4: K, v5: V, k6: K, v7: V, k8: K, v9: V, k10: K, v11: V, k12: K, v13: V): $Map<K, V>
function of<K, V>(k0: K, v1: V, k2: K, v3: V, k4: K, v5: V, k6: K, v7: V, k8: K, v9: V, k10: K, v11: V): $Map<K, V>
function ofEntries<K, V>(...entry0s: $Map$Entry$$Type<K, V>[]): $Map<K, V>
}
export abstract class $Reference2ReferenceMap$$Static<K = any, V = any> implements $Reference2ReferenceMap<K, V> {
static "copyOf"<K, V>(map0: $Map$$Type<K, V>): $Map<K, V>
static "entry"<K, V>(k0: K, v1: V): $Map$Entry<K, V>
static "identity"<T>(): $Function<T, T>
static "of"<K, V>(k0: K, v1: V, k2: K, v3: V, k4: K, v5: V, k6: K, v7: V, k8: K, v9: V): $Map<K, V>
static "of"<K, V>(k0: K, v1: V, k2: K, v3: V, k4: K, v5: V, k6: K, v7: V): $Map<K, V>
static "of"<K, V>(k0: K, v1: V, k2: K, v3: V, k4: K, v5: V): $Map<K, V>
static "of"<K, V>(): $Map<K, V>
static "of"<K, V>(k0: K, v1: V, k2: K, v3: V): $Map<K, V>
static "of"<K, V>(k0: K, v1: V): $Map<K, V>
static "of"<K, V>(k0: K, v1: V, k2: K, v3: V, k4: K, v5: V, k6: K, v7: V, k8: K, v9: V, k10: K, v11: V, k12: K, v13: V, k14: K, v15: V, k16: K, v17: V, k18: K, v19: V): $Map<K, V>
static "of"<K, V>(k0: K, v1: V, k2: K, v3: V, k4: K, v5: V, k6: K, v7: V, k8: K, v9: V, k10: K, v11: V, k12: K, v13: V, k14: K, v15: V, k16: K, v17: V): $Map<K, V>
static "of"<K, V>(k0: K, v1: V, k2: K, v3: V, k4: K, v5: V, k6: K, v7: V, k8: K, v9: V, k10: K, v11: V, k12: K, v13: V, k14: K, v15: V): $Map<K, V>
static "of"<K, V>(k0: K, v1: V, k2: K, v3: V, k4: K, v5: V, k6: K, v7: V, k8: K, v9: V, k10: K, v11: V, k12: K, v13: V): $Map<K, V>
static "of"<K, V>(k0: K, v1: V, k2: K, v3: V, k4: K, v5: V, k6: K, v7: V, k8: K, v9: V, k10: K, v11: V): $Map<K, V>
static "ofEntries"<K, V>(...entry0s: $Map$Entry$$Type<K, V>[]): $Map<K, V>
}
}

declare module "it.unimi.dsi.fastutil.objects.Object2ObjectMap" {
import { $BiFunction$$Type } from "java.util.function.BiFunction"
import { $Object2ObjectMap$Entry } from "it.unimi.dsi.fastutil.objects.Object2ObjectMap$Entry"
import { $Double2ObjectFunction, $Double2ObjectFunction$$Type } from "it.unimi.dsi.fastutil.doubles.Double2ObjectFunction"
import { $Object2ObjectFunction, $Object2ObjectFunction$$Type } from "it.unimi.dsi.fastutil.objects.Object2ObjectFunction"
import { $Function, $Function$$Type } from "java.util.function.Function"
import { $Object2LongFunction, $Object2LongFunction$$Type } from "it.unimi.dsi.fastutil.objects.Object2LongFunction"
import { $Object2DoubleFunction, $Object2DoubleFunction$$Type } from "it.unimi.dsi.fastutil.objects.Object2DoubleFunction"
import { $Object2FloatFunction, $Object2FloatFunction$$Type } from "it.unimi.dsi.fastutil.objects.Object2FloatFunction"
import { $Object2IntFunction, $Object2IntFunction$$Type } from "it.unimi.dsi.fastutil.objects.Object2IntFunction"
import { $Map, $Map$$Type } from "java.util.Map"
import { $BiConsumer$$Type } from "java.util.function.BiConsumer"
import { $Reference2ObjectFunction, $Reference2ObjectFunction$$Type } from "it.unimi.dsi.fastutil.objects.Reference2ObjectFunction"
import { $Map$Entry, $Map$Entry$$Type } from "java.util.Map$Entry"
import { $Byte2ObjectFunction, $Byte2ObjectFunction$$Type } from "it.unimi.dsi.fastutil.bytes.Byte2ObjectFunction"
import { $Short2ObjectFunction, $Short2ObjectFunction$$Type } from "it.unimi.dsi.fastutil.shorts.Short2ObjectFunction"
import { $Object2ByteFunction, $Object2ByteFunction$$Type } from "it.unimi.dsi.fastutil.objects.Object2ByteFunction"
import { $Int2ObjectFunction, $Int2ObjectFunction$$Type } from "it.unimi.dsi.fastutil.ints.Int2ObjectFunction"
import { $Long2ObjectFunction, $Long2ObjectFunction$$Type } from "it.unimi.dsi.fastutil.longs.Long2ObjectFunction"
import { $ObjectSet } from "it.unimi.dsi.fastutil.objects.ObjectSet"
import { $ObjectCollection } from "it.unimi.dsi.fastutil.objects.ObjectCollection"
import { $Object2ReferenceFunction, $Object2ReferenceFunction$$Type } from "it.unimi.dsi.fastutil.objects.Object2ReferenceFunction"
import { $Float2ObjectFunction, $Float2ObjectFunction$$Type } from "it.unimi.dsi.fastutil.floats.Float2ObjectFunction"
import { $Char2ObjectFunction, $Char2ObjectFunction$$Type } from "it.unimi.dsi.fastutil.chars.Char2ObjectFunction"
import { $Object2ShortFunction, $Object2ShortFunction$$Type } from "it.unimi.dsi.fastutil.objects.Object2ShortFunction"
import { $Object2CharFunction, $Object2CharFunction$$Type } from "it.unimi.dsi.fastutil.objects.Object2CharFunction"

export interface $Object2ObjectMap<K = any, V = any> extends $Object2ObjectFunction<K, V>, $Map<K, V> {
"andThen"<V>(function0: $Function$$Type<V, V>): $Function<K, V>
"andThenByte"(object2ByteFunction0: $Object2ByteFunction$$Type<V>): $Object2ByteFunction<K>
"andThenChar"(object2CharFunction0: $Object2CharFunction$$Type<V>): $Object2CharFunction<K>
"andThenDouble"(object2DoubleFunction0: $Object2DoubleFunction$$Type<V>): $Object2DoubleFunction<K>
"andThenFloat"(object2FloatFunction0: $Object2FloatFunction$$Type<V>): $Object2FloatFunction<K>
"andThenInt"(object2IntFunction0: $Object2IntFunction$$Type<V>): $Object2IntFunction<K>
"andThenLong"(object2LongFunction0: $Object2LongFunction$$Type<V>): $Object2LongFunction<K>
"andThenObject"<T>(object2ObjectFunction0: $Object2ObjectFunction$$Type<V, T>): $Object2ObjectFunction<K, T>
"andThenReference"<T>(object2ReferenceFunction0: $Object2ReferenceFunction$$Type<V, T>): $Object2ReferenceFunction<K, T>
"andThenShort"(object2ShortFunction0: $Object2ShortFunction$$Type<V>): $Object2ShortFunction<K>
"apply"(k0: K): V
"clear"(): void
"compose"<V>(function0: $Function$$Type<V, K>): $Function<V, V>
"composeByte"(byte2ObjectFunction0: $Byte2ObjectFunction$$Type<K>): $Byte2ObjectFunction<V>
"composeChar"(char2ObjectFunction0: $Char2ObjectFunction$$Type<K>): $Char2ObjectFunction<V>
"composeDouble"(double2ObjectFunction0: $Double2ObjectFunction$$Type<K>): $Double2ObjectFunction<V>
"composeFloat"(float2ObjectFunction0: $Float2ObjectFunction$$Type<K>): $Float2ObjectFunction<V>
"composeInt"(int2ObjectFunction0: $Int2ObjectFunction$$Type<K>): $Int2ObjectFunction<V>
"composeLong"(long2ObjectFunction0: $Long2ObjectFunction$$Type<K>): $Long2ObjectFunction<V>
"composeObject"<T>(object2ObjectFunction0: $Object2ObjectFunction$$Type<T, K>): $Object2ObjectFunction<T, V>
"composeReference"<T>(reference2ObjectFunction0: $Reference2ObjectFunction$$Type<T, K>): $Reference2ObjectFunction<T, V>
"composeShort"(short2ObjectFunction0: $Short2ObjectFunction$$Type<K>): $Short2ObjectFunction<V>
"compute"(k0: K, biFunction1: $BiFunction$$Type<K, V, V>): V
"computeIfAbsent"(k0: K, object2ObjectFunction1: $Object2ObjectFunction$$Type<K, V>): V
"computeIfAbsent"(k0: K, function1: $Function$$Type<K, V>): V
"computeIfPresent"(k0: K, biFunction1: $BiFunction$$Type<K, V, V>): V
/** @deprecated */
"computeObjectIfAbsentPartial"(k0: K, object2ObjectFunction1: $Object2ObjectFunction$$Type<K, V>): V
"containsKey"(object0: any): boolean
"containsValue"(object0: any): boolean
"defaultReturnValue"(v0: V): void
"defaultReturnValue"(): V
"entrySet"(): $ObjectSet<$Map$Entry<K, V>>
"equals"(object0: any): boolean
"forEach"(biConsumer0: $BiConsumer$$Type<K, V>): void
"get"(object0: any): V
"getOrDefault"(object0: any, v1: V): V
"hashCode"(): integer
"isEmpty"(): boolean
"merge"(k0: K, v1: V, biFunction2: $BiFunction$$Type<V, V, V>): V
"object2ObjectEntrySet"(): $ObjectSet<$Object2ObjectMap$Entry<K, V>>
"put"(k0: K, v1: V): V
"putAll"(map0: $Map$$Type<K, V>): void
"putIfAbsent"(k0: K, v1: V): V
"remove"(object0: any): V
"remove"(object0: any, object1: any): boolean
"replace"(k0: K, v1: V): V
"replace"(k0: K, v1: V, v2: V): boolean
"replaceAll"(biFunction0: $BiFunction$$Type<K, V, V>): void
"size"(): integer
"values"(): $ObjectCollection<V>
[index: string | number]: V
get "empty"(): boolean
}

export namespace $Object2ObjectMap {
function copyOf<K, V>(map0: $Map$$Type<K, V>): $Map<K, V>
function entry<K, V>(k0: K, v1: V): $Map$Entry<K, V>
function identity<T>(): $Function<T, T>
function of<K, V>(k0: K, v1: V, k2: K, v3: V, k4: K, v5: V, k6: K, v7: V, k8: K, v9: V): $Map<K, V>
function of<K, V>(k0: K, v1: V, k2: K, v3: V, k4: K, v5: V, k6: K, v7: V): $Map<K, V>
function of<K, V>(k0: K, v1: V, k2: K, v3: V, k4: K, v5: V): $Map<K, V>
function of<K, V>(): $Map<K, V>
function of<K, V>(k0: K, v1: V, k2: K, v3: V): $Map<K, V>
function of<K, V>(k0: K, v1: V): $Map<K, V>
function of<K, V>(k0: K, v1: V, k2: K, v3: V, k4: K, v5: V, k6: K, v7: V, k8: K, v9: V, k10: K, v11: V, k12: K, v13: V, k14: K, v15: V, k16: K, v17: V, k18: K, v19: V): $Map<K, V>
function of<K, V>(k0: K, v1: V, k2: K, v3: V, k4: K, v5: V, k6: K, v7: V, k8: K, v9: V, k10: K, v11: V, k12: K, v13: V, k14: K, v15: V, k16: K, v17: V): $Map<K, V>
function of<K, V>(k0: K, v1: V, k2: K, v3: V, k4: K, v5: V, k6: K, v7: V, k8: K, v9: V, k10: K, v11: V, k12: K, v13: V, k14: K, v15: V): $Map<K, V>
function of<K, V>(k0: K, v1: V, k2: K, v3: V, k4: K, v5: V, k6: K, v7: V, k8: K, v9: V, k10: K, v11: V, k12: K, v13: V): $Map<K, V>
function of<K, V>(k0: K, v1: V, k2: K, v3: V, k4: K, v5: V, k6: K, v7: V, k8: K, v9: V, k10: K, v11: V): $Map<K, V>
function ofEntries<K, V>(...entry0s: $Map$Entry$$Type<K, V>[]): $Map<K, V>
}
export abstract class $Object2ObjectMap$$Static<K = any, V = any> implements $Object2ObjectMap<K, V> {
static "copyOf"<K, V>(map0: $Map$$Type<K, V>): $Map<K, V>
static "entry"<K, V>(k0: K, v1: V): $Map$Entry<K, V>
static "identity"<T>(): $Function<T, T>
static "of"<K, V>(k0: K, v1: V, k2: K, v3: V, k4: K, v5: V, k6: K, v7: V, k8: K, v9: V): $Map<K, V>
static "of"<K, V>(k0: K, v1: V, k2: K, v3: V, k4: K, v5: V, k6: K, v7: V): $Map<K, V>
static "of"<K, V>(k0: K, v1: V, k2: K, v3: V, k4: K, v5: V): $Map<K, V>
static "of"<K, V>(): $Map<K, V>
static "of"<K, V>(k0: K, v1: V, k2: K, v3: V): $Map<K, V>
static "of"<K, V>(k0: K, v1: V): $Map<K, V>
static "of"<K, V>(k0: K, v1: V, k2: K, v3: V, k4: K, v5: V, k6: K, v7: V, k8: K, v9: V, k10: K, v11: V, k12: K, v13: V, k14: K, v15: V, k16: K, v17: V, k18: K, v19: V): $Map<K, V>
static "of"<K, V>(k0: K, v1: V, k2: K, v3: V, k4: K, v5: V, k6: K, v7: V, k8: K, v9: V, k10: K, v11: V, k12: K, v13: V, k14: K, v15: V, k16: K, v17: V): $Map<K, V>
static "of"<K, V>(k0: K, v1: V, k2: K, v3: V, k4: K, v5: V, k6: K, v7: V, k8: K, v9: V, k10: K, v11: V, k12: K, v13: V, k14: K, v15: V): $Map<K, V>
static "of"<K, V>(k0: K, v1: V, k2: K, v3: V, k4: K, v5: V, k6: K, v7: V, k8: K, v9: V, k10: K, v11: V, k12: K, v13: V): $Map<K, V>
static "of"<K, V>(k0: K, v1: V, k2: K, v3: V, k4: K, v5: V, k6: K, v7: V, k8: K, v9: V, k10: K, v11: V): $Map<K, V>
static "ofEntries"<K, V>(...entry0s: $Map$Entry$$Type<K, V>[]): $Map<K, V>
}
}

declare module "it.unimi.dsi.fastutil.objects.Object2ObjectFunction" {
import { $Reference2ObjectFunction, $Reference2ObjectFunction$$Type } from "it.unimi.dsi.fastutil.objects.Reference2ObjectFunction"
import { $Byte2ObjectFunction, $Byte2ObjectFunction$$Type } from "it.unimi.dsi.fastutil.bytes.Byte2ObjectFunction"
import { $Short2ObjectFunction, $Short2ObjectFunction$$Type } from "it.unimi.dsi.fastutil.shorts.Short2ObjectFunction"
import { $Function } from "it.unimi.dsi.fastutil.Function"
import { $Object2ByteFunction, $Object2ByteFunction$$Type } from "it.unimi.dsi.fastutil.objects.Object2ByteFunction"
import { $Int2ObjectFunction, $Int2ObjectFunction$$Type } from "it.unimi.dsi.fastutil.ints.Int2ObjectFunction"
import { $Long2ObjectFunction, $Long2ObjectFunction$$Type } from "it.unimi.dsi.fastutil.longs.Long2ObjectFunction"
import { $Double2ObjectFunction, $Double2ObjectFunction$$Type } from "it.unimi.dsi.fastutil.doubles.Double2ObjectFunction"
import { $Function as $Function$0, $Function$$Type as $Function$0$$Type } from "java.util.function.Function"
import { $Object2LongFunction, $Object2LongFunction$$Type } from "it.unimi.dsi.fastutil.objects.Object2LongFunction"
import { $Object2DoubleFunction, $Object2DoubleFunction$$Type } from "it.unimi.dsi.fastutil.objects.Object2DoubleFunction"
import { $Object2ReferenceFunction, $Object2ReferenceFunction$$Type } from "it.unimi.dsi.fastutil.objects.Object2ReferenceFunction"
import { $Float2ObjectFunction, $Float2ObjectFunction$$Type } from "it.unimi.dsi.fastutil.floats.Float2ObjectFunction"
import { $Object2FloatFunction, $Object2FloatFunction$$Type } from "it.unimi.dsi.fastutil.objects.Object2FloatFunction"
import { $Char2ObjectFunction, $Char2ObjectFunction$$Type } from "it.unimi.dsi.fastutil.chars.Char2ObjectFunction"
import { $Object2IntFunction, $Object2IntFunction$$Type } from "it.unimi.dsi.fastutil.objects.Object2IntFunction"
import { $Object2ShortFunction, $Object2ShortFunction$$Type } from "it.unimi.dsi.fastutil.objects.Object2ShortFunction"
import { $Object2CharFunction, $Object2CharFunction$$Type } from "it.unimi.dsi.fastutil.objects.Object2CharFunction"

export interface $Object2ObjectFunction<K = any, V = any> extends $Function<K, V> {
"andThen"<V>(function0: $Function$0$$Type<V, V>): $Function$0<K, V>
"andThenByte"(object2ByteFunction0: $Object2ByteFunction$$Type<V>): $Object2ByteFunction<K>
"andThenChar"(object2CharFunction0: $Object2CharFunction$$Type<V>): $Object2CharFunction<K>
"andThenDouble"(object2DoubleFunction0: $Object2DoubleFunction$$Type<V>): $Object2DoubleFunction<K>
"andThenFloat"(object2FloatFunction0: $Object2FloatFunction$$Type<V>): $Object2FloatFunction<K>
"andThenInt"(object2IntFunction0: $Object2IntFunction$$Type<V>): $Object2IntFunction<K>
"andThenLong"(object2LongFunction0: $Object2LongFunction$$Type<V>): $Object2LongFunction<K>
"andThenObject"<T>(object2ObjectFunction0: $Object2ObjectFunction$$Type<V, T>): $Object2ObjectFunction<K, T>
"andThenReference"<T>(object2ReferenceFunction0: $Object2ReferenceFunction$$Type<V, T>): $Object2ReferenceFunction<K, T>
"andThenShort"(object2ShortFunction0: $Object2ShortFunction$$Type<V>): $Object2ShortFunction<K>
"apply"(k0: K): V
"clear"(): void
"compose"<V>(function0: $Function$0$$Type<V, K>): $Function$0<V, V>
"composeByte"(byte2ObjectFunction0: $Byte2ObjectFunction$$Type<K>): $Byte2ObjectFunction<V>
"composeChar"(char2ObjectFunction0: $Char2ObjectFunction$$Type<K>): $Char2ObjectFunction<V>
"composeDouble"(double2ObjectFunction0: $Double2ObjectFunction$$Type<K>): $Double2ObjectFunction<V>
"composeFloat"(float2ObjectFunction0: $Float2ObjectFunction$$Type<K>): $Float2ObjectFunction<V>
"composeInt"(int2ObjectFunction0: $Int2ObjectFunction$$Type<K>): $Int2ObjectFunction<V>
"composeLong"(long2ObjectFunction0: $Long2ObjectFunction$$Type<K>): $Long2ObjectFunction<V>
"composeObject"<T>(object2ObjectFunction0: $Object2ObjectFunction$$Type<T, K>): $Object2ObjectFunction<T, V>
"composeReference"<T>(reference2ObjectFunction0: $Reference2ObjectFunction$$Type<T, K>): $Reference2ObjectFunction<T, V>
"composeShort"(short2ObjectFunction0: $Short2ObjectFunction$$Type<K>): $Short2ObjectFunction<V>
"containsKey"(object0: any): boolean
"defaultReturnValue"(): V
"defaultReturnValue"(v0: V): void
"get"(object0: any): V
"getOrDefault"(object0: any, v1: V): V
"put"(k0: K, v1: V): V
"remove"(object0: any): V
"size"(): integer
}

export namespace $Object2ObjectFunction {
function identity<T>(): $Function$0<T, T>
}
export abstract class $Object2ObjectFunction$$Static<K = any, V = any> implements $Object2ObjectFunction<K, V> {
static "identity"<T>(): $Function$0<T, T>
}
}

declare module "it.unimi.dsi.fastutil.objects.Object2ByteMap" {
import { $Byte2FloatFunction$$Type } from "it.unimi.dsi.fastutil.bytes.Byte2FloatFunction"
import { $Byte2LongFunction$$Type } from "it.unimi.dsi.fastutil.bytes.Byte2LongFunction"
import { $Int2ByteFunction } from "it.unimi.dsi.fastutil.ints.Int2ByteFunction"
import { $BiFunction$$Type } from "java.util.function.BiFunction"
import { $Float2ByteFunction } from "it.unimi.dsi.fastutil.floats.Float2ByteFunction"
import { $IntBinaryOperator$$Type } from "java.util.function.IntBinaryOperator"
import { $Double2ObjectFunction$$Type } from "it.unimi.dsi.fastutil.doubles.Double2ObjectFunction"
import { $Object2ObjectFunction, $Object2ObjectFunction$$Type } from "it.unimi.dsi.fastutil.objects.Object2ObjectFunction"
import { $Function, $Function$$Type } from "java.util.function.Function"
import { $Object2LongFunction } from "it.unimi.dsi.fastutil.objects.Object2LongFunction"
import { $Double2ByteFunction } from "it.unimi.dsi.fastutil.doubles.Double2ByteFunction"
import { $Object2DoubleFunction } from "it.unimi.dsi.fastutil.objects.Object2DoubleFunction"
import { $Reference2ByteFunction } from "it.unimi.dsi.fastutil.objects.Reference2ByteFunction"
import { $Byte2DoubleFunction$$Type } from "it.unimi.dsi.fastutil.bytes.Byte2DoubleFunction"
import { $Object2FloatFunction } from "it.unimi.dsi.fastutil.objects.Object2FloatFunction"
import { $Short2ByteFunction } from "it.unimi.dsi.fastutil.shorts.Short2ByteFunction"
import { $Object2IntFunction } from "it.unimi.dsi.fastutil.objects.Object2IntFunction"
import { $Map, $Map$$Type } from "java.util.Map"
import { $ByteCollection } from "it.unimi.dsi.fastutil.bytes.ByteCollection"
import { $BiConsumer$$Type } from "java.util.function.BiConsumer"
import { $ByteBinaryOperator$$Type } from "it.unimi.dsi.fastutil.bytes.ByteBinaryOperator"
import { $Reference2ObjectFunction$$Type } from "it.unimi.dsi.fastutil.objects.Reference2ObjectFunction"
import { $Map$Entry, $Map$Entry$$Type } from "java.util.Map$Entry"
import { $Object2ByteMap$Entry } from "it.unimi.dsi.fastutil.objects.Object2ByteMap$Entry"
import { $Byte2ObjectFunction$$Type } from "it.unimi.dsi.fastutil.bytes.Byte2ObjectFunction"
import { $Short2ObjectFunction$$Type } from "it.unimi.dsi.fastutil.shorts.Short2ObjectFunction"
import { $Object2ByteFunction, $Object2ByteFunction$$Type } from "it.unimi.dsi.fastutil.objects.Object2ByteFunction"
import { $Byte2ReferenceFunction$$Type } from "it.unimi.dsi.fastutil.bytes.Byte2ReferenceFunction"
import { $Char2ByteFunction } from "it.unimi.dsi.fastutil.chars.Char2ByteFunction"
import { $Byte2ShortFunction$$Type } from "it.unimi.dsi.fastutil.bytes.Byte2ShortFunction"
import { $Int2ObjectFunction$$Type } from "it.unimi.dsi.fastutil.ints.Int2ObjectFunction"
import { $Long2ObjectFunction$$Type } from "it.unimi.dsi.fastutil.longs.Long2ObjectFunction"
import { $ToIntFunction$$Type } from "java.util.function.ToIntFunction"
import { $Byte2CharFunction$$Type } from "it.unimi.dsi.fastutil.bytes.Byte2CharFunction"
import { $ObjectSet } from "it.unimi.dsi.fastutil.objects.ObjectSet"
import { $Object2ReferenceFunction } from "it.unimi.dsi.fastutil.objects.Object2ReferenceFunction"
import { $Float2ObjectFunction$$Type } from "it.unimi.dsi.fastutil.floats.Float2ObjectFunction"
import { $Long2ByteFunction } from "it.unimi.dsi.fastutil.longs.Long2ByteFunction"
import { $Char2ObjectFunction$$Type } from "it.unimi.dsi.fastutil.chars.Char2ObjectFunction"
import { $Object2ShortFunction } from "it.unimi.dsi.fastutil.objects.Object2ShortFunction"
import { $Byte2ByteFunction, $Byte2ByteFunction$$Type } from "it.unimi.dsi.fastutil.bytes.Byte2ByteFunction"
import { $Object2CharFunction } from "it.unimi.dsi.fastutil.objects.Object2CharFunction"
import { $Byte2IntFunction$$Type } from "it.unimi.dsi.fastutil.bytes.Byte2IntFunction"

export interface $Object2ByteMap<K = any> extends $Object2ByteFunction<K>, $Map<K, byte> {
/** @deprecated */
"andThen"<T>(function0: $Function$$Type<byte, T>): $Function<K, T>
"andThenByte"(byte2ByteFunction0: $Byte2ByteFunction$$Type): $Object2ByteFunction<K>
"andThenChar"(byte2CharFunction0: $Byte2CharFunction$$Type): $Object2CharFunction<K>
"andThenDouble"(byte2DoubleFunction0: $Byte2DoubleFunction$$Type): $Object2DoubleFunction<K>
"andThenFloat"(byte2FloatFunction0: $Byte2FloatFunction$$Type): $Object2FloatFunction<K>
"andThenInt"(byte2IntFunction0: $Byte2IntFunction$$Type): $Object2IntFunction<K>
"andThenLong"(byte2LongFunction0: $Byte2LongFunction$$Type): $Object2LongFunction<K>
"andThenObject"<T>(byte2ObjectFunction0: $Byte2ObjectFunction$$Type<T>): $Object2ObjectFunction<K, T>
"andThenReference"<T>(byte2ReferenceFunction0: $Byte2ReferenceFunction$$Type<T>): $Object2ReferenceFunction<K, T>
"andThenShort"(byte2ShortFunction0: $Byte2ShortFunction$$Type): $Object2ShortFunction<K>
"apply"(k0: K): byte
"applyAsInt"(k0: K): integer
"clear"(): void
"compose"<V>(function0: $Function$$Type<V, K>): $Function<V, byte>
"composeByte"(byte2ObjectFunction0: $Byte2ObjectFunction$$Type<K>): $Byte2ByteFunction
"composeChar"(char2ObjectFunction0: $Char2ObjectFunction$$Type<K>): $Char2ByteFunction
"composeDouble"(double2ObjectFunction0: $Double2ObjectFunction$$Type<K>): $Double2ByteFunction
"composeFloat"(float2ObjectFunction0: $Float2ObjectFunction$$Type<K>): $Float2ByteFunction
"composeInt"(int2ObjectFunction0: $Int2ObjectFunction$$Type<K>): $Int2ByteFunction
"composeLong"(long2ObjectFunction0: $Long2ObjectFunction$$Type<K>): $Long2ByteFunction
"composeObject"<T>(object2ObjectFunction0: $Object2ObjectFunction$$Type<T, K>): $Object2ByteFunction<T>
"composeReference"<T>(reference2ObjectFunction0: $Reference2ObjectFunction$$Type<T, K>): $Reference2ByteFunction<T>
"composeShort"(short2ObjectFunction0: $Short2ObjectFunction$$Type<K>): $Short2ByteFunction
"compute"(k0: K, biFunction1: $BiFunction$$Type<K, byte, byte>): byte
"computeByte"(k0: K, biFunction1: $BiFunction$$Type<K, byte, byte>): byte
/** @deprecated */
"computeByteIfAbsent"(k0: K, toIntFunction1: $ToIntFunction$$Type<K>): byte
/** @deprecated */
"computeByteIfAbsentPartial"(k0: K, object2ByteFunction1: $Object2ByteFunction$$Type<K>): byte
"computeByteIfPresent"(k0: K, biFunction1: $BiFunction$$Type<K, byte, byte>): byte
"computeIfAbsent"(k0: K, toIntFunction1: $ToIntFunction$$Type<K>): byte
"computeIfAbsent"(k0: K, object2ByteFunction1: $Object2ByteFunction$$Type<K>): byte
"computeIfAbsent"(k0: K, function1: $Function$$Type<K, byte>): byte
"computeIfPresent"(k0: K, biFunction1: $BiFunction$$Type<K, byte, byte>): byte
"containsKey"(object0: any): boolean
/** @deprecated */
"containsValue"(object0: any): boolean
"containsValue"(byte0: byte): boolean
"defaultReturnValue"(byte0: byte): void
"defaultReturnValue"(): byte
/** @deprecated */
"entrySet"(): $ObjectSet<$Map$Entry<K, byte>>
"equals"(object0: any): boolean
"forEach"(biConsumer0: $BiConsumer$$Type<K, byte>): void
"getByte"(object0: any): byte
"getOrDefault"(object0: any, byte1: byte): byte
/** @deprecated */
"getOrDefault"(object0: any, byte1: byte): byte
"hashCode"(): integer
"isEmpty"(): boolean
"keySet"(): $ObjectSet<K>
/** @deprecated */
"merge"(k0: K, byte1: byte, biFunction2: $BiFunction$$Type<byte, byte, byte>): byte
"merge"(k0: K, byte1: byte, biFunction2: $BiFunction$$Type<byte, byte, byte>): byte
/** @deprecated */
"mergeByte"(k0: K, byte1: byte, biFunction2: $BiFunction$$Type<byte, byte, byte>): byte
"mergeByte"(k0: K, byte1: byte, byteBinaryOperator2: $ByteBinaryOperator$$Type): byte
"mergeByte"(k0: K, byte1: byte, intBinaryOperator2: $IntBinaryOperator$$Type): byte
"object2ByteEntrySet"(): $ObjectSet<$Object2ByteMap$Entry<K>>
/** @deprecated */
"put"(k0: K, byte1: byte): byte
"put"(k0: K, byte1: byte): byte
"putAll"(map0: $Map$$Type<K, byte>): void
"putIfAbsent"(k0: K, byte1: byte): byte
/** @deprecated */
"putIfAbsent"(k0: K, byte1: byte): byte
"remove"(object0: any, byte1: byte): boolean
/** @deprecated */
"remove"(object0: any, object1: any): boolean
"removeByte"(object0: any): byte
/** @deprecated */
"replace"(k0: K, byte1: byte, byte2: byte): boolean
"replace"(k0: K, byte1: byte, byte2: byte): boolean
"replace"(k0: K, byte1: byte): byte
/** @deprecated */
"replace"(k0: K, byte1: byte): byte
"replaceAll"(biFunction0: $BiFunction$$Type<K, byte, byte>): void
"size"(): integer
"values"(): $ByteCollection
get "empty"(): boolean
}

export namespace $Object2ByteMap {
function copyOf<K, V>(map0: $Map$$Type<K, V>): $Map<K, V>
function entry<K, V>(k0: K, v1: V): $Map$Entry<K, V>
function identity<T>(): $Function<T, T>
function of<K, V>(k0: K, v1: V, k2: K, v3: V, k4: K, v5: V, k6: K, v7: V, k8: K, v9: V): $Map<K, V>
function of<K, V>(k0: K, v1: V, k2: K, v3: V, k4: K, v5: V, k6: K, v7: V): $Map<K, V>
function of<K, V>(k0: K, v1: V, k2: K, v3: V, k4: K, v5: V): $Map<K, V>
function of<K, V>(): $Map<K, V>
function of<K, V>(k0: K, v1: V, k2: K, v3: V): $Map<K, V>
function of<K, V>(k0: K, v1: V): $Map<K, V>
function of<K, V>(k0: K, v1: V, k2: K, v3: V, k4: K, v5: V, k6: K, v7: V, k8: K, v9: V, k10: K, v11: V, k12: K, v13: V, k14: K, v15: V, k16: K, v17: V, k18: K, v19: V): $Map<K, V>
function of<K, V>(k0: K, v1: V, k2: K, v3: V, k4: K, v5: V, k6: K, v7: V, k8: K, v9: V, k10: K, v11: V, k12: K, v13: V, k14: K, v15: V, k16: K, v17: V): $Map<K, V>
function of<K, V>(k0: K, v1: V, k2: K, v3: V, k4: K, v5: V, k6: K, v7: V, k8: K, v9: V, k10: K, v11: V, k12: K, v13: V, k14: K, v15: V): $Map<K, V>
function of<K, V>(k0: K, v1: V, k2: K, v3: V, k4: K, v5: V, k6: K, v7: V, k8: K, v9: V, k10: K, v11: V, k12: K, v13: V): $Map<K, V>
function of<K, V>(k0: K, v1: V, k2: K, v3: V, k4: K, v5: V, k6: K, v7: V, k8: K, v9: V, k10: K, v11: V): $Map<K, V>
function ofEntries<K, V>(...entry0s: $Map$Entry$$Type<K, V>[]): $Map<K, V>
}
export abstract class $Object2ByteMap$$Static<K = any> implements $Object2ByteMap<K> {
static "copyOf"<K, V>(map0: $Map$$Type<K, V>): $Map<K, V>
static "entry"<K, V>(k0: K, v1: V): $Map$Entry<K, V>
static "identity"<T>(): $Function<T, T>
static "of"<K, V>(k0: K, v1: V, k2: K, v3: V, k4: K, v5: V, k6: K, v7: V, k8: K, v9: V): $Map<K, V>
static "of"<K, V>(k0: K, v1: V, k2: K, v3: V, k4: K, v5: V, k6: K, v7: V): $Map<K, V>
static "of"<K, V>(k0: K, v1: V, k2: K, v3: V, k4: K, v5: V): $Map<K, V>
static "of"<K, V>(): $Map<K, V>
static "of"<K, V>(k0: K, v1: V, k2: K, v3: V): $Map<K, V>
static "of"<K, V>(k0: K, v1: V): $Map<K, V>
static "of"<K, V>(k0: K, v1: V, k2: K, v3: V, k4: K, v5: V, k6: K, v7: V, k8: K, v9: V, k10: K, v11: V, k12: K, v13: V, k14: K, v15: V, k16: K, v17: V, k18: K, v19: V): $Map<K, V>
static "of"<K, V>(k0: K, v1: V, k2: K, v3: V, k4: K, v5: V, k6: K, v7: V, k8: K, v9: V, k10: K, v11: V, k12: K, v13: V, k14: K, v15: V, k16: K, v17: V): $Map<K, V>
static "of"<K, V>(k0: K, v1: V, k2: K, v3: V, k4: K, v5: V, k6: K, v7: V, k8: K, v9: V, k10: K, v11: V, k12: K, v13: V, k14: K, v15: V): $Map<K, V>
static "of"<K, V>(k0: K, v1: V, k2: K, v3: V, k4: K, v5: V, k6: K, v7: V, k8: K, v9: V, k10: K, v11: V, k12: K, v13: V): $Map<K, V>
static "of"<K, V>(k0: K, v1: V, k2: K, v3: V, k4: K, v5: V, k6: K, v7: V, k8: K, v9: V, k10: K, v11: V): $Map<K, V>
static "ofEntries"<K, V>(...entry0s: $Map$Entry$$Type<K, V>[]): $Map<K, V>
}
}

declare module "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap" {
import { $Hash } from "it.unimi.dsi.fastutil.Hash"
import { $Byte2FloatFunction$$Type } from "it.unimi.dsi.fastutil.bytes.Byte2FloatFunction"
import { $Byte2LongFunction$$Type } from "it.unimi.dsi.fastutil.bytes.Byte2LongFunction"
import { $Int2ByteFunction } from "it.unimi.dsi.fastutil.ints.Int2ByteFunction"
import { $BiFunction$$Type } from "java.util.function.BiFunction"
import { $Float2ByteFunction } from "it.unimi.dsi.fastutil.floats.Float2ByteFunction"
import { $IntBinaryOperator$$Type } from "java.util.function.IntBinaryOperator"
import { $Double2ObjectFunction$$Type } from "it.unimi.dsi.fastutil.doubles.Double2ObjectFunction"
import { $Object2ObjectFunction, $Object2ObjectFunction$$Type } from "it.unimi.dsi.fastutil.objects.Object2ObjectFunction"
import { $Function, $Function$$Type } from "java.util.function.Function"
import { $Object2ByteSortedMap } from "it.unimi.dsi.fastutil.objects.Object2ByteSortedMap"
import { $Object2LongFunction } from "it.unimi.dsi.fastutil.objects.Object2LongFunction"
import { $Double2ByteFunction } from "it.unimi.dsi.fastutil.doubles.Double2ByteFunction"
import { $Object2DoubleFunction } from "it.unimi.dsi.fastutil.objects.Object2DoubleFunction"
import { $Reference2ByteFunction } from "it.unimi.dsi.fastutil.objects.Reference2ByteFunction"
import { $Byte2DoubleFunction$$Type } from "it.unimi.dsi.fastutil.bytes.Byte2DoubleFunction"
import { $Object2FloatFunction } from "it.unimi.dsi.fastutil.objects.Object2FloatFunction"
import { $Short2ByteFunction } from "it.unimi.dsi.fastutil.shorts.Short2ByteFunction"
import { $Map, $Map$$Type } from "java.util.Map"
import { $Object2IntFunction } from "it.unimi.dsi.fastutil.objects.Object2IntFunction"
import { $BiConsumer$$Type } from "java.util.function.BiConsumer"
import { $ByteBinaryOperator$$Type } from "it.unimi.dsi.fastutil.bytes.ByteBinaryOperator"
import { $Object2ByteMap$$Type } from "it.unimi.dsi.fastutil.objects.Object2ByteMap"
import { $Reference2ObjectFunction$$Type } from "it.unimi.dsi.fastutil.objects.Reference2ObjectFunction"
import { $Map$Entry, $Map$Entry$$Type } from "java.util.Map$Entry"
import { $Cloneable } from "java.lang.Cloneable"
import { $Byte2ObjectFunction$$Type } from "it.unimi.dsi.fastutil.bytes.Byte2ObjectFunction"
import { $Short2ObjectFunction$$Type } from "it.unimi.dsi.fastutil.shorts.Short2ObjectFunction"
import { $Object2ByteFunction, $Object2ByteFunction$$Type } from "it.unimi.dsi.fastutil.objects.Object2ByteFunction"
import { $Byte2ReferenceFunction$$Type } from "it.unimi.dsi.fastutil.bytes.Byte2ReferenceFunction"
import { $Char2ByteFunction } from "it.unimi.dsi.fastutil.chars.Char2ByteFunction"
import { $Byte2ShortFunction$$Type } from "it.unimi.dsi.fastutil.bytes.Byte2ShortFunction"
import { $Int2ObjectFunction$$Type } from "it.unimi.dsi.fastutil.ints.Int2ObjectFunction"
import { $Long2ObjectFunction$$Type } from "it.unimi.dsi.fastutil.longs.Long2ObjectFunction"
import { $ToIntFunction$$Type } from "java.util.function.ToIntFunction"
import { $Byte2CharFunction$$Type } from "it.unimi.dsi.fastutil.bytes.Byte2CharFunction"
import { $Serializable } from "java.io.Serializable"
import { $Object2ReferenceFunction } from "it.unimi.dsi.fastutil.objects.Object2ReferenceFunction"
import { $Float2ObjectFunction$$Type } from "it.unimi.dsi.fastutil.floats.Float2ObjectFunction"
import { $Long2ByteFunction } from "it.unimi.dsi.fastutil.longs.Long2ByteFunction"
import { $Char2ObjectFunction$$Type } from "it.unimi.dsi.fastutil.chars.Char2ObjectFunction"
import { $Object2ShortFunction } from "it.unimi.dsi.fastutil.objects.Object2ShortFunction"
import { $Comparator } from "java.util.Comparator"
import { $AbstractObject2ByteSortedMap } from "it.unimi.dsi.fastutil.objects.AbstractObject2ByteSortedMap"
import { $Byte2ByteFunction, $Byte2ByteFunction$$Type } from "it.unimi.dsi.fastutil.bytes.Byte2ByteFunction"
import { $Object2CharFunction } from "it.unimi.dsi.fastutil.objects.Object2CharFunction"
import { $Byte2IntFunction$$Type } from "it.unimi.dsi.fastutil.bytes.Byte2IntFunction"

export class $Object2ByteLinkedOpenHashMap<K = any> extends $AbstractObject2ByteSortedMap<K> implements $Serializable, $Cloneable, $Hash {
constructor(int0: integer, float1: float)
constructor()
constructor(map0: $Map$$Type<K, byte>, float1: float)
constructor(object2ByteMap0: $Object2ByteMap$$Type<K>)
constructor(k0s: K[], byte1s: byte[])
constructor(k0s: K[], byte1s: byte[], float2: float)
constructor(map0: $Map$$Type<K, byte>)
constructor(int0: integer)
constructor(object2ByteMap0: $Object2ByteMap$$Type<K>, float1: float)

public "addTo"(k0: K, byte1: byte): byte
/** @deprecated */
public "andThen"<T>(function0: $Function$$Type<byte, T>): $Function<K, T>
public "andThenByte"(byte2ByteFunction0: $Byte2ByteFunction$$Type): $Object2ByteFunction<K>
public "andThenChar"(byte2CharFunction0: $Byte2CharFunction$$Type): $Object2CharFunction<K>
public "andThenDouble"(byte2DoubleFunction0: $Byte2DoubleFunction$$Type): $Object2DoubleFunction<K>
public "andThenFloat"(byte2FloatFunction0: $Byte2FloatFunction$$Type): $Object2FloatFunction<K>
public "andThenInt"(byte2IntFunction0: $Byte2IntFunction$$Type): $Object2IntFunction<K>
public "andThenLong"(byte2LongFunction0: $Byte2LongFunction$$Type): $Object2LongFunction<K>
public "andThenObject"<T>(byte2ObjectFunction0: $Byte2ObjectFunction$$Type<T>): $Object2ObjectFunction<K, T>
public "andThenReference"<T>(byte2ReferenceFunction0: $Byte2ReferenceFunction$$Type<T>): $Object2ReferenceFunction<K, T>
public "andThenShort"(byte2ShortFunction0: $Byte2ShortFunction$$Type): $Object2ShortFunction<K>
public "apply"(k0: K): byte
public "applyAsInt"(k0: K): integer
public "clear"(): void
public "clone"(): $Object2ByteLinkedOpenHashMap<K>
public "comparator"(): $Comparator<K>
public "compose"<V>(function0: $Function$$Type<V, K>): $Function<V, byte>
public "composeByte"(byte2ObjectFunction0: $Byte2ObjectFunction$$Type<K>): $Byte2ByteFunction
public "composeChar"(char2ObjectFunction0: $Char2ObjectFunction$$Type<K>): $Char2ByteFunction
public "composeDouble"(double2ObjectFunction0: $Double2ObjectFunction$$Type<K>): $Double2ByteFunction
public "composeFloat"(float2ObjectFunction0: $Float2ObjectFunction$$Type<K>): $Float2ByteFunction
public "composeInt"(int2ObjectFunction0: $Int2ObjectFunction$$Type<K>): $Int2ByteFunction
public "composeLong"(long2ObjectFunction0: $Long2ObjectFunction$$Type<K>): $Long2ByteFunction
public "composeObject"<T>(object2ObjectFunction0: $Object2ObjectFunction$$Type<T, K>): $Object2ByteFunction<T>
public "composeReference"<T>(reference2ObjectFunction0: $Reference2ObjectFunction$$Type<T, K>): $Reference2ByteFunction<T>
public "composeShort"(short2ObjectFunction0: $Short2ObjectFunction$$Type<K>): $Short2ByteFunction
public "compute"(k0: K, biFunction1: $BiFunction$$Type<K, byte, byte>): byte
public "computeByte"(k0: K, biFunction1: $BiFunction$$Type<K, byte, byte>): byte
/** @deprecated */
public "computeByteIfAbsent"(k0: K, toIntFunction1: $ToIntFunction$$Type<K>): byte
/** @deprecated */
public "computeByteIfAbsentPartial"(k0: K, object2ByteFunction1: $Object2ByteFunction$$Type<K>): byte
public "computeByteIfPresent"(k0: K, biFunction1: $BiFunction$$Type<K, byte, byte>): byte
public "computeIfAbsent"(k0: K, toIntFunction1: $ToIntFunction$$Type<K>): byte
public "computeIfAbsent"(k0: K, object2ByteFunction1: $Object2ByteFunction$$Type<K>): byte
public "computeIfAbsent"(k0: K, function1: $Function$$Type<K, byte>): byte
public "computeIfPresent"(k0: K, biFunction1: $BiFunction$$Type<K, byte, byte>): byte
/** @deprecated */
public "containsValue"(object0: any): boolean
public static "copyOf"<K, V>(map0: $Map$$Type<K, V>): $Map<K, V>
public "defaultReturnValue"(byte0: byte): void
public "defaultReturnValue"(): byte
public static "entry"<K, V>(k0: K, v1: V): $Map$Entry<K, V>
public "firstKey"(): K
public "forEach"(biConsumer0: $BiConsumer$$Type<K, byte>): void
public "getAndMoveToFirst"(k0: K): byte
public "getAndMoveToLast"(k0: K): byte
public "getByte"(object0: any): byte
public "getOrDefault"(object0: any, byte1: byte): byte
/** @deprecated */
public "getOrDefault"(object0: any, byte1: byte): byte
public "headMap"(k0: K): $Object2ByteSortedMap<K>
public static "identity"<T>(): $Function<T, T>
public "lastKey"(): K
public "merge"(k0: K, byte1: byte, biFunction2: $BiFunction$$Type<byte, byte, byte>): byte
/** @deprecated */
public "merge"(k0: K, byte1: byte, biFunction2: $BiFunction$$Type<byte, byte, byte>): byte
/** @deprecated */
public "mergeByte"(k0: K, byte1: byte, biFunction2: $BiFunction$$Type<byte, byte, byte>): byte
public "mergeByte"(k0: K, byte1: byte, byteBinaryOperator2: $ByteBinaryOperator$$Type): byte
public "mergeByte"(k0: K, byte1: byte, intBinaryOperator2: $IntBinaryOperator$$Type): byte
public static "of"<K, V>(k0: K, v1: V, k2: K, v3: V, k4: K, v5: V, k6: K, v7: V, k8: K, v9: V): $Map<K, V>
public static "of"<K, V>(k0: K, v1: V, k2: K, v3: V, k4: K, v5: V, k6: K, v7: V): $Map<K, V>
public static "of"<K, V>(k0: K, v1: V, k2: K, v3: V, k4: K, v5: V): $Map<K, V>
public static "of"<K, V>(): $Map<K, V>
public static "of"<K, V>(k0: K, v1: V, k2: K, v3: V): $Map<K, V>
public static "of"<K, V>(k0: K, v1: V): $Map<K, V>
public static "of"<K, V>(k0: K, v1: V, k2: K, v3: V, k4: K, v5: V, k6: K, v7: V, k8: K, v9: V, k10: K, v11: V, k12: K, v13: V, k14: K, v15: V, k16: K, v17: V, k18: K, v19: V): $Map<K, V>
public static "of"<K, V>(k0: K, v1: V, k2: K, v3: V, k4: K, v5: V, k6: K, v7: V, k8: K, v9: V, k10: K, v11: V, k12: K, v13: V, k14: K, v15: V, k16: K, v17: V): $Map<K, V>
public static "of"<K, V>(k0: K, v1: V, k2: K, v3: V, k4: K, v5: V, k6: K, v7: V, k8: K, v9: V, k10: K, v11: V, k12: K, v13: V, k14: K, v15: V): $Map<K, V>
public static "of"<K, V>(k0: K, v1: V, k2: K, v3: V, k4: K, v5: V, k6: K, v7: V, k8: K, v9: V, k10: K, v11: V, k12: K, v13: V): $Map<K, V>
public static "of"<K, V>(k0: K, v1: V, k2: K, v3: V, k4: K, v5: V, k6: K, v7: V, k8: K, v9: V, k10: K, v11: V): $Map<K, V>
public static "ofEntries"<K, V>(...entry0s: $Map$Entry$$Type<K, V>[]): $Map<K, V>
public "put"(k0: K, byte1: byte): byte
/** @deprecated */
public "put"(k0: K, byte1: byte): byte
public "putAndMoveToFirst"(k0: K, byte1: byte): byte
public "putAndMoveToLast"(k0: K, byte1: byte): byte
public "putIfAbsent"(k0: K, byte1: byte): byte
/** @deprecated */
public "putIfAbsent"(k0: K, byte1: byte): byte
public "remove"(object0: any, byte1: byte): boolean
/** @deprecated */
public "remove"(object0: any, object1: any): boolean
public "removeByte"(object0: any): byte
public "removeFirstByte"(): byte
public "removeLastByte"(): byte
public "replace"(k0: K, byte1: byte): byte
public "replace"(k0: K, byte1: byte, byte2: byte): boolean
/** @deprecated */
public "replace"(k0: K, byte1: byte, byte2: byte): boolean
/** @deprecated */
public "replace"(k0: K, byte1: byte): byte
public "replaceAll"(biFunction0: $BiFunction$$Type<K, byte, byte>): void
public "size"(): integer
public "subMap"(k0: K, k1: K): $Object2ByteSortedMap<K>
public "tailMap"(k0: K): $Object2ByteSortedMap<K>
public "trim"(int0: integer): boolean
public "trim"(): boolean
}
}

declare module "it.unimi.dsi.fastutil.objects.ObjectIterable" {
import { $Consumer$$Type } from "java.util.function.Consumer"
import { $ObjectSpliterator } from "it.unimi.dsi.fastutil.objects.ObjectSpliterator"
import { $Iterable } from "java.lang.Iterable"

export interface $ObjectIterable<K = any> extends $Iterable<K> {
"forEach"(consumer0: $Consumer$$Type<K>): void
"spliterator"(): $ObjectSpliterator<K>
}

export namespace $ObjectIterable {
const probejs$$marker: never
}
export abstract class $ObjectIterable$$Static<K = any> implements $ObjectIterable<K> {
}
}

declare module "it.unimi.dsi.fastutil.objects.Object2ByteSortedMap" {
import { $Byte2FloatFunction$$Type } from "it.unimi.dsi.fastutil.bytes.Byte2FloatFunction"
import { $Byte2LongFunction$$Type } from "it.unimi.dsi.fastutil.bytes.Byte2LongFunction"
import { $Int2ByteFunction } from "it.unimi.dsi.fastutil.ints.Int2ByteFunction"
import { $BiFunction$$Type } from "java.util.function.BiFunction"
import { $Float2ByteFunction } from "it.unimi.dsi.fastutil.floats.Float2ByteFunction"
import { $IntBinaryOperator$$Type } from "java.util.function.IntBinaryOperator"
import { $Double2ObjectFunction$$Type } from "it.unimi.dsi.fastutil.doubles.Double2ObjectFunction"
import { $Object2ObjectFunction, $Object2ObjectFunction$$Type } from "it.unimi.dsi.fastutil.objects.Object2ObjectFunction"
import { $Function, $Function$$Type } from "java.util.function.Function"
import { $Object2LongFunction } from "it.unimi.dsi.fastutil.objects.Object2LongFunction"
import { $Double2ByteFunction } from "it.unimi.dsi.fastutil.doubles.Double2ByteFunction"
import { $Object2DoubleFunction } from "it.unimi.dsi.fastutil.objects.Object2DoubleFunction"
import { $Reference2ByteFunction } from "it.unimi.dsi.fastutil.objects.Reference2ByteFunction"
import { $Byte2DoubleFunction$$Type } from "it.unimi.dsi.fastutil.bytes.Byte2DoubleFunction"
import { $Object2FloatFunction } from "it.unimi.dsi.fastutil.objects.Object2FloatFunction"
import { $Short2ByteFunction } from "it.unimi.dsi.fastutil.shorts.Short2ByteFunction"
import { $Object2IntFunction } from "it.unimi.dsi.fastutil.objects.Object2IntFunction"
import { $Map, $Map$$Type } from "java.util.Map"
import { $BiConsumer$$Type } from "java.util.function.BiConsumer"
import { $ByteBinaryOperator$$Type } from "it.unimi.dsi.fastutil.bytes.ByteBinaryOperator"
import { $Object2ByteMap } from "it.unimi.dsi.fastutil.objects.Object2ByteMap"
import { $Reference2ObjectFunction$$Type } from "it.unimi.dsi.fastutil.objects.Reference2ObjectFunction"
import { $Map$Entry, $Map$Entry$$Type } from "java.util.Map$Entry"
import { $Byte2ObjectFunction$$Type } from "it.unimi.dsi.fastutil.bytes.Byte2ObjectFunction"
import { $Short2ObjectFunction$$Type } from "it.unimi.dsi.fastutil.shorts.Short2ObjectFunction"
import { $Object2ByteFunction, $Object2ByteFunction$$Type } from "it.unimi.dsi.fastutil.objects.Object2ByteFunction"
import { $Byte2ReferenceFunction$$Type } from "it.unimi.dsi.fastutil.bytes.Byte2ReferenceFunction"
import { $Char2ByteFunction } from "it.unimi.dsi.fastutil.chars.Char2ByteFunction"
import { $Byte2ShortFunction$$Type } from "it.unimi.dsi.fastutil.bytes.Byte2ShortFunction"
import { $Int2ObjectFunction$$Type } from "it.unimi.dsi.fastutil.ints.Int2ObjectFunction"
import { $Long2ObjectFunction$$Type } from "it.unimi.dsi.fastutil.longs.Long2ObjectFunction"
import { $ToIntFunction$$Type } from "java.util.function.ToIntFunction"
import { $Byte2CharFunction$$Type } from "it.unimi.dsi.fastutil.bytes.Byte2CharFunction"
import { $Object2ReferenceFunction } from "it.unimi.dsi.fastutil.objects.Object2ReferenceFunction"
import { $Float2ObjectFunction$$Type } from "it.unimi.dsi.fastutil.floats.Float2ObjectFunction"
import { $Long2ByteFunction } from "it.unimi.dsi.fastutil.longs.Long2ByteFunction"
import { $Char2ObjectFunction$$Type } from "it.unimi.dsi.fastutil.chars.Char2ObjectFunction"
import { $Object2ShortFunction } from "it.unimi.dsi.fastutil.objects.Object2ShortFunction"
import { $Comparator } from "java.util.Comparator"
import { $SortedMap } from "java.util.SortedMap"
import { $Byte2ByteFunction, $Byte2ByteFunction$$Type } from "it.unimi.dsi.fastutil.bytes.Byte2ByteFunction"
import { $Object2CharFunction } from "it.unimi.dsi.fastutil.objects.Object2CharFunction"
import { $Byte2IntFunction$$Type } from "it.unimi.dsi.fastutil.bytes.Byte2IntFunction"

export interface $Object2ByteSortedMap<K = any> extends $Object2ByteMap<K>, $SortedMap<K, byte> {
/** @deprecated */
"andThen"<T>(function0: $Function$$Type<byte, T>): $Function<K, T>
"andThenByte"(byte2ByteFunction0: $Byte2ByteFunction$$Type): $Object2ByteFunction<K>
"andThenChar"(byte2CharFunction0: $Byte2CharFunction$$Type): $Object2CharFunction<K>
"andThenDouble"(byte2DoubleFunction0: $Byte2DoubleFunction$$Type): $Object2DoubleFunction<K>
"andThenFloat"(byte2FloatFunction0: $Byte2FloatFunction$$Type): $Object2FloatFunction<K>
"andThenInt"(byte2IntFunction0: $Byte2IntFunction$$Type): $Object2IntFunction<K>
"andThenLong"(byte2LongFunction0: $Byte2LongFunction$$Type): $Object2LongFunction<K>
"andThenObject"<T>(byte2ObjectFunction0: $Byte2ObjectFunction$$Type<T>): $Object2ObjectFunction<K, T>
"andThenReference"<T>(byte2ReferenceFunction0: $Byte2ReferenceFunction$$Type<T>): $Object2ReferenceFunction<K, T>
"andThenShort"(byte2ShortFunction0: $Byte2ShortFunction$$Type): $Object2ShortFunction<K>
"apply"(k0: K): byte
"applyAsInt"(k0: K): integer
"clear"(): void
"comparator"(): $Comparator<K>
"compose"<V>(function0: $Function$$Type<V, K>): $Function<V, byte>
"composeByte"(byte2ObjectFunction0: $Byte2ObjectFunction$$Type<K>): $Byte2ByteFunction
"composeChar"(char2ObjectFunction0: $Char2ObjectFunction$$Type<K>): $Char2ByteFunction
"composeDouble"(double2ObjectFunction0: $Double2ObjectFunction$$Type<K>): $Double2ByteFunction
"composeFloat"(float2ObjectFunction0: $Float2ObjectFunction$$Type<K>): $Float2ByteFunction
"composeInt"(int2ObjectFunction0: $Int2ObjectFunction$$Type<K>): $Int2ByteFunction
"composeLong"(long2ObjectFunction0: $Long2ObjectFunction$$Type<K>): $Long2ByteFunction
"composeObject"<T>(object2ObjectFunction0: $Object2ObjectFunction$$Type<T, K>): $Object2ByteFunction<T>
"composeReference"<T>(reference2ObjectFunction0: $Reference2ObjectFunction$$Type<T, K>): $Reference2ByteFunction<T>
"composeShort"(short2ObjectFunction0: $Short2ObjectFunction$$Type<K>): $Short2ByteFunction
"compute"(k0: K, biFunction1: $BiFunction$$Type<K, byte, byte>): byte
"computeByte"(k0: K, biFunction1: $BiFunction$$Type<K, byte, byte>): byte
/** @deprecated */
"computeByteIfAbsent"(k0: K, toIntFunction1: $ToIntFunction$$Type<K>): byte
/** @deprecated */
"computeByteIfAbsentPartial"(k0: K, object2ByteFunction1: $Object2ByteFunction$$Type<K>): byte
"computeByteIfPresent"(k0: K, biFunction1: $BiFunction$$Type<K, byte, byte>): byte
"computeIfAbsent"(k0: K, toIntFunction1: $ToIntFunction$$Type<K>): byte
"computeIfAbsent"(k0: K, object2ByteFunction1: $Object2ByteFunction$$Type<K>): byte
"computeIfAbsent"(k0: K, function1: $Function$$Type<K, byte>): byte
"computeIfPresent"(k0: K, biFunction1: $BiFunction$$Type<K, byte, byte>): byte
"containsKey"(object0: any): boolean
/** @deprecated */
"containsValue"(object0: any): boolean
"containsValue"(byte0: byte): boolean
"defaultReturnValue"(byte0: byte): void
"defaultReturnValue"(): byte
"equals"(object0: any): boolean
"firstKey"(): K
"forEach"(biConsumer0: $BiConsumer$$Type<K, byte>): void
"getByte"(object0: any): byte
"getOrDefault"(object0: any, byte1: byte): byte
/** @deprecated */
"getOrDefault"(object0: any, byte1: byte): byte
"hashCode"(): integer
"isEmpty"(): boolean
"lastKey"(): K
/** @deprecated */
"merge"(k0: K, byte1: byte, biFunction2: $BiFunction$$Type<byte, byte, byte>): byte
"merge"(k0: K, byte1: byte, biFunction2: $BiFunction$$Type<byte, byte, byte>): byte
/** @deprecated */
"mergeByte"(k0: K, byte1: byte, biFunction2: $BiFunction$$Type<byte, byte, byte>): byte
"mergeByte"(k0: K, byte1: byte, byteBinaryOperator2: $ByteBinaryOperator$$Type): byte
"mergeByte"(k0: K, byte1: byte, intBinaryOperator2: $IntBinaryOperator$$Type): byte
/** @deprecated */
"put"(k0: K, byte1: byte): byte
"put"(k0: K, byte1: byte): byte
"putAll"(map0: $Map$$Type<K, byte>): void
"putIfAbsent"(k0: K, byte1: byte): byte
/** @deprecated */
"putIfAbsent"(k0: K, byte1: byte): byte
"remove"(object0: any, byte1: byte): boolean
/** @deprecated */
"remove"(object0: any, object1: any): boolean
"removeByte"(object0: any): byte
/** @deprecated */
"replace"(k0: K, byte1: byte, byte2: byte): boolean
"replace"(k0: K, byte1: byte, byte2: byte): boolean
"replace"(k0: K, byte1: byte): byte
/** @deprecated */
"replace"(k0: K, byte1: byte): byte
"replaceAll"(biFunction0: $BiFunction$$Type<K, byte, byte>): void
"size"(): integer
get "empty"(): boolean
}

export namespace $Object2ByteSortedMap {
function copyOf<K, V>(map0: $Map$$Type<K, V>): $Map<K, V>
function entry<K, V>(k0: K, v1: V): $Map$Entry<K, V>
function identity<T>(): $Function<T, T>
function of<K, V>(k0: K, v1: V, k2: K, v3: V, k4: K, v5: V, k6: K, v7: V, k8: K, v9: V): $Map<K, V>
function of<K, V>(k0: K, v1: V, k2: K, v3: V, k4: K, v5: V, k6: K, v7: V): $Map<K, V>
function of<K, V>(k0: K, v1: V, k2: K, v3: V, k4: K, v5: V): $Map<K, V>
function of<K, V>(): $Map<K, V>
function of<K, V>(k0: K, v1: V, k2: K, v3: V): $Map<K, V>
function of<K, V>(k0: K, v1: V): $Map<K, V>
function of<K, V>(k0: K, v1: V, k2: K, v3: V, k4: K, v5: V, k6: K, v7: V, k8: K, v9: V, k10: K, v11: V, k12: K, v13: V, k14: K, v15: V, k16: K, v17: V, k18: K, v19: V): $Map<K, V>
function of<K, V>(k0: K, v1: V, k2: K, v3: V, k4: K, v5: V, k6: K, v7: V, k8: K, v9: V, k10: K, v11: V, k12: K, v13: V, k14: K, v15: V, k16: K, v17: V): $Map<K, V>
function of<K, V>(k0: K, v1: V, k2: K, v3: V, k4: K, v5: V, k6: K, v7: V, k8: K, v9: V, k10: K, v11: V, k12: K, v13: V, k14: K, v15: V): $Map<K, V>
function of<K, V>(k0: K, v1: V, k2: K, v3: V, k4: K, v5: V, k6: K, v7: V, k8: K, v9: V, k10: K, v11: V, k12: K, v13: V): $Map<K, V>
function of<K, V>(k0: K, v1: V, k2: K, v3: V, k4: K, v5: V, k6: K, v7: V, k8: K, v9: V, k10: K, v11: V): $Map<K, V>
function ofEntries<K, V>(...entry0s: $Map$Entry$$Type<K, V>[]): $Map<K, V>
}
export abstract class $Object2ByteSortedMap$$Static<K = any> implements $Object2ByteSortedMap<K> {
static "copyOf"<K, V>(map0: $Map$$Type<K, V>): $Map<K, V>
static "entry"<K, V>(k0: K, v1: V): $Map$Entry<K, V>
static "identity"<T>(): $Function<T, T>
static "of"<K, V>(k0: K, v1: V, k2: K, v3: V, k4: K, v5: V, k6: K, v7: V, k8: K, v9: V): $Map<K, V>
static "of"<K, V>(k0: K, v1: V, k2: K, v3: V, k4: K, v5: V, k6: K, v7: V): $Map<K, V>
static "of"<K, V>(k0: K, v1: V, k2: K, v3: V, k4: K, v5: V): $Map<K, V>
static "of"<K, V>(): $Map<K, V>
static "of"<K, V>(k0: K, v1: V, k2: K, v3: V): $Map<K, V>
static "of"<K, V>(k0: K, v1: V): $Map<K, V>
static "of"<K, V>(k0: K, v1: V, k2: K, v3: V, k4: K, v5: V, k6: K, v7: V, k8: K, v9: V, k10: K, v11: V, k12: K, v13: V, k14: K, v15: V, k16: K, v17: V, k18: K, v19: V): $Map<K, V>
static "of"<K, V>(k0: K, v1: V, k2: K, v3: V, k4: K, v5: V, k6: K, v7: V, k8: K, v9: V, k10: K, v11: V, k12: K, v13: V, k14: K, v15: V, k16: K, v17: V): $Map<K, V>
static "of"<K, V>(k0: K, v1: V, k2: K, v3: V, k4: K, v5: V, k6: K, v7: V, k8: K, v9: V, k10: K, v11: V, k12: K, v13: V, k14: K, v15: V): $Map<K, V>
static "of"<K, V>(k0: K, v1: V, k2: K, v3: V, k4: K, v5: V, k6: K, v7: V, k8: K, v9: V, k10: K, v11: V, k12: K, v13: V): $Map<K, V>
static "of"<K, V>(k0: K, v1: V, k2: K, v3: V, k4: K, v5: V, k6: K, v7: V, k8: K, v9: V, k10: K, v11: V): $Map<K, V>
static "ofEntries"<K, V>(...entry0s: $Map$Entry$$Type<K, V>[]): $Map<K, V>
}
}

declare module "it.unimi.dsi.fastutil.objects.Object2LongMap$Entry" {
import { $Map$Entry, $Map$Entry$$Type } from "java.util.Map$Entry"
import { $Comparable, $Comparable$$Type } from "java.lang.Comparable"
import { $Comparator, $Comparator$$Type } from "java.util.Comparator"

export interface $Object2LongMap$Entry<K = any> extends $Map$Entry<K, long> {
"equals"(object0: any): boolean
"getKey"(): K
"getLongValue"(): long
"hashCode"(): integer
"setValue"(long0: long): long
/** @deprecated */
"setValue"(long0: long): long
get "key"(): K
get "longValue"(): long
set "value"(value: long)
set "value"(value: long)
}

export namespace $Object2LongMap$Entry {
function comparingByKey<K extends $Comparable<K>, V>(): $Comparator<$Map$Entry<K, V>>
function comparingByKey<K, V>(comparator0: $Comparator$$Type<K>): $Comparator<$Map$Entry<K, V>>
function comparingByValue<K, V extends $Comparable<V>>(): $Comparator<$Map$Entry<K, V>>
function comparingByValue<K, V>(comparator0: $Comparator$$Type<V>): $Comparator<$Map$Entry<K, V>>
function copyOf<K, V>(entry0: $Map$Entry$$Type<K, V>): $Map$Entry<K, V>
}
export abstract class $Object2LongMap$Entry$$Static<K = any> implements $Object2LongMap$Entry<K> {
static "comparingByKey"<K extends $Comparable<K>, V>(): $Comparator<$Map$Entry<K, V>>
static "comparingByKey"<K, V>(comparator0: $Comparator$$Type<K>): $Comparator<$Map$Entry<K, V>>
static "comparingByValue"<K, V extends $Comparable<V>>(): $Comparator<$Map$Entry<K, V>>
static "comparingByValue"<K, V>(comparator0: $Comparator$$Type<V>): $Comparator<$Map$Entry<K, V>>
static "copyOf"<K, V>(entry0: $Map$Entry$$Type<K, V>): $Map$Entry<K, V>
}
}

declare module "it.unimi.dsi.fastutil.objects.Object2ObjectArrayMap" {
import { $Object2ObjectMap$$Type } from "it.unimi.dsi.fastutil.objects.Object2ObjectMap"
import { $BiFunction$$Type } from "java.util.function.BiFunction"
import { $Double2ObjectFunction, $Double2ObjectFunction$$Type } from "it.unimi.dsi.fastutil.doubles.Double2ObjectFunction"
import { $Object2ObjectFunction, $Object2ObjectFunction$$Type } from "it.unimi.dsi.fastutil.objects.Object2ObjectFunction"
import { $Function, $Function$$Type } from "java.util.function.Function"
import { $Object2LongFunction, $Object2LongFunction$$Type } from "it.unimi.dsi.fastutil.objects.Object2LongFunction"
import { $Object2DoubleFunction, $Object2DoubleFunction$$Type } from "it.unimi.dsi.fastutil.objects.Object2DoubleFunction"
import { $Object2FloatFunction, $Object2FloatFunction$$Type } from "it.unimi.dsi.fastutil.objects.Object2FloatFunction"
import { $Map, $Map$$Type } from "java.util.Map"
import { $Object2IntFunction, $Object2IntFunction$$Type } from "it.unimi.dsi.fastutil.objects.Object2IntFunction"
import { $BiConsumer$$Type } from "java.util.function.BiConsumer"
import { $Reference2ObjectFunction, $Reference2ObjectFunction$$Type } from "it.unimi.dsi.fastutil.objects.Reference2ObjectFunction"
import { $Map$Entry, $Map$Entry$$Type } from "java.util.Map$Entry"
import { $Cloneable } from "java.lang.Cloneable"
import { $Byte2ObjectFunction, $Byte2ObjectFunction$$Type } from "it.unimi.dsi.fastutil.bytes.Byte2ObjectFunction"
import { $Short2ObjectFunction, $Short2ObjectFunction$$Type } from "it.unimi.dsi.fastutil.shorts.Short2ObjectFunction"
import { $AbstractObject2ObjectMap } from "it.unimi.dsi.fastutil.objects.AbstractObject2ObjectMap"
import { $Object2ByteFunction, $Object2ByteFunction$$Type } from "it.unimi.dsi.fastutil.objects.Object2ByteFunction"
import { $Object2ObjectMap$FastEntrySet } from "it.unimi.dsi.fastutil.objects.Object2ObjectMap$FastEntrySet"
import { $Int2ObjectFunction, $Int2ObjectFunction$$Type } from "it.unimi.dsi.fastutil.ints.Int2ObjectFunction"
import { $Long2ObjectFunction, $Long2ObjectFunction$$Type } from "it.unimi.dsi.fastutil.longs.Long2ObjectFunction"
import { $ObjectSet } from "it.unimi.dsi.fastutil.objects.ObjectSet"
import { $Serializable } from "java.io.Serializable"
import { $Object2ReferenceFunction, $Object2ReferenceFunction$$Type } from "it.unimi.dsi.fastutil.objects.Object2ReferenceFunction"
import { $Float2ObjectFunction, $Float2ObjectFunction$$Type } from "it.unimi.dsi.fastutil.floats.Float2ObjectFunction"
import { $Char2ObjectFunction, $Char2ObjectFunction$$Type } from "it.unimi.dsi.fastutil.chars.Char2ObjectFunction"
import { $Object2ShortFunction, $Object2ShortFunction$$Type } from "it.unimi.dsi.fastutil.objects.Object2ShortFunction"
import { $Object2CharFunction, $Object2CharFunction$$Type } from "it.unimi.dsi.fastutil.objects.Object2CharFunction"

export class $Object2ObjectArrayMap<K = any, V = any> extends $AbstractObject2ObjectMap<K, V> implements $Serializable, $Cloneable {
constructor(object0s: any[], object1s: any[])
constructor(map0: $Map$$Type<K, V>)
constructor(int0: integer)
constructor()
constructor(object0s: any[], object1s: any[], int2: integer)
constructor(object2ObjectMap0: $Object2ObjectMap$$Type<K, V>)

public "andThen"<V>(function0: $Function$$Type<V, V>): $Function<K, V>
public "andThenByte"(object2ByteFunction0: $Object2ByteFunction$$Type<V>): $Object2ByteFunction<K>
public "andThenChar"(object2CharFunction0: $Object2CharFunction$$Type<V>): $Object2CharFunction<K>
public "andThenDouble"(object2DoubleFunction0: $Object2DoubleFunction$$Type<V>): $Object2DoubleFunction<K>
public "andThenFloat"(object2FloatFunction0: $Object2FloatFunction$$Type<V>): $Object2FloatFunction<K>
public "andThenInt"(object2IntFunction0: $Object2IntFunction$$Type<V>): $Object2IntFunction<K>
public "andThenLong"(object2LongFunction0: $Object2LongFunction$$Type<V>): $Object2LongFunction<K>
public "andThenObject"<T>(object2ObjectFunction0: $Object2ObjectFunction$$Type<V, T>): $Object2ObjectFunction<K, T>
public "andThenReference"<T>(object2ReferenceFunction0: $Object2ReferenceFunction$$Type<V, T>): $Object2ReferenceFunction<K, T>
public "andThenShort"(object2ShortFunction0: $Object2ShortFunction$$Type<V>): $Object2ShortFunction<K>
public "apply"(k0: K): V
public "clear"(): void
public "compose"<V>(function0: $Function$$Type<V, K>): $Function<V, V>
public "composeByte"(byte2ObjectFunction0: $Byte2ObjectFunction$$Type<K>): $Byte2ObjectFunction<V>
public "composeChar"(char2ObjectFunction0: $Char2ObjectFunction$$Type<K>): $Char2ObjectFunction<V>
public "composeDouble"(double2ObjectFunction0: $Double2ObjectFunction$$Type<K>): $Double2ObjectFunction<V>
public "composeFloat"(float2ObjectFunction0: $Float2ObjectFunction$$Type<K>): $Float2ObjectFunction<V>
public "composeInt"(int2ObjectFunction0: $Int2ObjectFunction$$Type<K>): $Int2ObjectFunction<V>
public "composeLong"(long2ObjectFunction0: $Long2ObjectFunction$$Type<K>): $Long2ObjectFunction<V>
public "composeObject"<T>(object2ObjectFunction0: $Object2ObjectFunction$$Type<T, K>): $Object2ObjectFunction<T, V>
public "composeReference"<T>(reference2ObjectFunction0: $Reference2ObjectFunction$$Type<T, K>): $Reference2ObjectFunction<T, V>
public "composeShort"(short2ObjectFunction0: $Short2ObjectFunction$$Type<K>): $Short2ObjectFunction<V>
public "compute"(k0: K, biFunction1: $BiFunction$$Type<K, V, V>): V
public "computeIfAbsent"(k0: K, object2ObjectFunction1: $Object2ObjectFunction$$Type<K, V>): V
public "computeIfAbsent"(k0: K, function1: $Function$$Type<K, V>): V
public "computeIfPresent"(k0: K, biFunction1: $BiFunction$$Type<K, V, V>): V
/** @deprecated */
public "computeObjectIfAbsentPartial"(k0: K, object2ObjectFunction1: $Object2ObjectFunction$$Type<K, V>): V
public static "copyOf"<K, V>(map0: $Map$$Type<K, V>): $Map<K, V>
public "defaultReturnValue"(v0: V): void
public "defaultReturnValue"(): V
public static "entry"<K, V>(k0: K, v1: V): $Map$Entry<K, V>
public "entrySet"(): $ObjectSet<$Map$Entry<K, V>>
public "forEach"(biConsumer0: $BiConsumer$$Type<K, V>): void
public "get"(object0: any): V
public "getOrDefault"(object0: any, v1: V): V
public static "identity"<T>(): $Function<T, T>
public "merge"(k0: K, v1: V, biFunction2: $BiFunction$$Type<V, V, V>): V
public "object2ObjectEntrySet"(): $Object2ObjectMap$FastEntrySet<K, V>
public static "of"<K, V>(k0: K, v1: V, k2: K, v3: V, k4: K, v5: V, k6: K, v7: V, k8: K, v9: V): $Map<K, V>
public static "of"<K, V>(k0: K, v1: V, k2: K, v3: V, k4: K, v5: V, k6: K, v7: V): $Map<K, V>
public static "of"<K, V>(k0: K, v1: V, k2: K, v3: V, k4: K, v5: V): $Map<K, V>
public static "of"<K, V>(): $Map<K, V>
public static "of"<K, V>(k0: K, v1: V, k2: K, v3: V): $Map<K, V>
public static "of"<K, V>(k0: K, v1: V): $Map<K, V>
public static "of"<K, V>(k0: K, v1: V, k2: K, v3: V, k4: K, v5: V, k6: K, v7: V, k8: K, v9: V, k10: K, v11: V, k12: K, v13: V, k14: K, v15: V, k16: K, v17: V, k18: K, v19: V): $Map<K, V>
public static "of"<K, V>(k0: K, v1: V, k2: K, v3: V, k4: K, v5: V, k6: K, v7: V, k8: K, v9: V, k10: K, v11: V, k12: K, v13: V, k14: K, v15: V, k16: K, v17: V): $Map<K, V>
public static "of"<K, V>(k0: K, v1: V, k2: K, v3: V, k4: K, v5: V, k6: K, v7: V, k8: K, v9: V, k10: K, v11: V, k12: K, v13: V, k14: K, v15: V): $Map<K, V>
public static "of"<K, V>(k0: K, v1: V, k2: K, v3: V, k4: K, v5: V, k6: K, v7: V, k8: K, v9: V, k10: K, v11: V, k12: K, v13: V): $Map<K, V>
public static "of"<K, V>(k0: K, v1: V, k2: K, v3: V, k4: K, v5: V, k6: K, v7: V, k8: K, v9: V, k10: K, v11: V): $Map<K, V>
public static "ofEntries"<K, V>(...entry0s: $Map$Entry$$Type<K, V>[]): $Map<K, V>
public "put"(k0: K, v1: V): V
public "putIfAbsent"(k0: K, v1: V): V
public "remove"(object0: any): V
public "remove"(object0: any, object1: any): boolean
public "replace"(k0: K, v1: V): V
public "replace"(k0: K, v1: V, v2: V): boolean
public "replaceAll"(biFunction0: $BiFunction$$Type<K, V, V>): void
public "size"(): integer
}
}

declare module "it.unimi.dsi.fastutil.objects.ObjectIntPair" {
import { $Pair } from "it.unimi.dsi.fastutil.Pair"
import { $Comparator } from "java.util.Comparator"

export interface $ObjectIntPair<K = any> extends $Pair<K, integer> {
"first"(): K
"first"(k0: K): $Pair<K, integer>
"key"(k0: K): $Pair<K, integer>
"key"(): K
"left"(): K
"left"(k0: K): $Pair<K, integer>
/** @deprecated */
"right"(integer0: integer): $ObjectIntPair<K>
"right"(int0: integer): $ObjectIntPair<K>
"rightInt"(): integer
/** @deprecated */
"second"(): integer
"second"(int0: integer): $ObjectIntPair<K>
/** @deprecated */
"second"(integer0: integer): $ObjectIntPair<K>
"secondInt"(): integer
"value"(int0: integer): $ObjectIntPair<K>
/** @deprecated */
"value"(integer0: integer): $ObjectIntPair<K>
"valueInt"(): integer
}

export namespace $ObjectIntPair {
function lexComparator<K>(): $Comparator<$ObjectIntPair<K>>
function of<K>(k0: K, int1: integer): $ObjectIntPair<K>
function of<L, R>(l0: L, r1: R): $Pair<L, R>
}
export abstract class $ObjectIntPair$$Static<K = any> implements $ObjectIntPair<K> {
static "lexComparator"<K>(): $Comparator<$ObjectIntPair<K>>
static "of"<K>(k0: K, int1: integer): $ObjectIntPair<K>
static "of"<L, R>(l0: L, r1: R): $Pair<L, R>
}
}

declare module "it.unimi.dsi.fastutil.objects.Reference2IntMap$Entry" {
import { $Map$Entry, $Map$Entry$$Type } from "java.util.Map$Entry"
import { $Comparable, $Comparable$$Type } from "java.lang.Comparable"
import { $Comparator, $Comparator$$Type } from "java.util.Comparator"

export interface $Reference2IntMap$Entry<K = any> extends $Map$Entry<K, integer> {
"equals"(object0: any): boolean
"getIntValue"(): integer
"getKey"(): K
"hashCode"(): integer
"setValue"(int0: integer): integer
/** @deprecated */
"setValue"(integer0: integer): integer
get "intValue"(): integer
get "key"(): K
set "value"(value: integer)
set "value"(value: integer)
}

export namespace $Reference2IntMap$Entry {
function comparingByKey<K extends $Comparable<K>, V>(): $Comparator<$Map$Entry<K, V>>
function comparingByKey<K, V>(comparator0: $Comparator$$Type<K>): $Comparator<$Map$Entry<K, V>>
function comparingByValue<K, V extends $Comparable<V>>(): $Comparator<$Map$Entry<K, V>>
function comparingByValue<K, V>(comparator0: $Comparator$$Type<V>): $Comparator<$Map$Entry<K, V>>
function copyOf<K, V>(entry0: $Map$Entry$$Type<K, V>): $Map$Entry<K, V>
}
export abstract class $Reference2IntMap$Entry$$Static<K = any> implements $Reference2IntMap$Entry<K> {
static "comparingByKey"<K extends $Comparable<K>, V>(): $Comparator<$Map$Entry<K, V>>
static "comparingByKey"<K, V>(comparator0: $Comparator$$Type<K>): $Comparator<$Map$Entry<K, V>>
static "comparingByValue"<K, V extends $Comparable<V>>(): $Comparator<$Map$Entry<K, V>>
static "comparingByValue"<K, V>(comparator0: $Comparator$$Type<V>): $Comparator<$Map$Entry<K, V>>
static "copyOf"<K, V>(entry0: $Map$Entry$$Type<K, V>): $Map$Entry<K, V>
}
}

declare module "it.unimi.dsi.fastutil.objects.Object2DoubleFunction" {
import { $Double2ShortFunction$$Type } from "it.unimi.dsi.fastutil.doubles.Double2ShortFunction"
import { $Double2ReferenceFunction$$Type } from "it.unimi.dsi.fastutil.doubles.Double2ReferenceFunction"
import { $Double2ObjectFunction$$Type } from "it.unimi.dsi.fastutil.doubles.Double2ObjectFunction"
import { $Object2ObjectFunction, $Object2ObjectFunction$$Type } from "it.unimi.dsi.fastutil.objects.Object2ObjectFunction"
import { $Function, $Function$$Type } from "java.util.function.Function"
import { $Int2DoubleFunction } from "it.unimi.dsi.fastutil.ints.Int2DoubleFunction"
import { $Double2ByteFunction$$Type } from "it.unimi.dsi.fastutil.doubles.Double2ByteFunction"
import { $Object2LongFunction } from "it.unimi.dsi.fastutil.objects.Object2LongFunction"
import { $Short2DoubleFunction } from "it.unimi.dsi.fastutil.shorts.Short2DoubleFunction"
import { $Byte2DoubleFunction } from "it.unimi.dsi.fastutil.bytes.Byte2DoubleFunction"
import { $Object2FloatFunction } from "it.unimi.dsi.fastutil.objects.Object2FloatFunction"
import { $Object2IntFunction } from "it.unimi.dsi.fastutil.objects.Object2IntFunction"
import { $Reference2ObjectFunction$$Type } from "it.unimi.dsi.fastutil.objects.Reference2ObjectFunction"
import { $Double2DoubleFunction, $Double2DoubleFunction$$Type } from "it.unimi.dsi.fastutil.doubles.Double2DoubleFunction"
import { $Double2FloatFunction$$Type } from "it.unimi.dsi.fastutil.doubles.Double2FloatFunction"
import { $Byte2ObjectFunction$$Type } from "it.unimi.dsi.fastutil.bytes.Byte2ObjectFunction"
import { $Short2ObjectFunction$$Type } from "it.unimi.dsi.fastutil.shorts.Short2ObjectFunction"
import { $Function as $Function$0 } from "it.unimi.dsi.fastutil.Function"
import { $Object2ByteFunction } from "it.unimi.dsi.fastutil.objects.Object2ByteFunction"
import { $Int2ObjectFunction$$Type } from "it.unimi.dsi.fastutil.ints.Int2ObjectFunction"
import { $Long2ObjectFunction$$Type } from "it.unimi.dsi.fastutil.longs.Long2ObjectFunction"
import { $Long2DoubleFunction } from "it.unimi.dsi.fastutil.longs.Long2DoubleFunction"
import { $Double2LongFunction$$Type } from "it.unimi.dsi.fastutil.doubles.Double2LongFunction"
import { $Object2ReferenceFunction } from "it.unimi.dsi.fastutil.objects.Object2ReferenceFunction"
import { $Float2ObjectFunction$$Type } from "it.unimi.dsi.fastutil.floats.Float2ObjectFunction"
import { $Double2CharFunction$$Type } from "it.unimi.dsi.fastutil.doubles.Double2CharFunction"
import { $Reference2DoubleFunction } from "it.unimi.dsi.fastutil.objects.Reference2DoubleFunction"
import { $Char2ObjectFunction$$Type } from "it.unimi.dsi.fastutil.chars.Char2ObjectFunction"
import { $ToDoubleFunction } from "java.util.function.ToDoubleFunction"
import { $Char2DoubleFunction } from "it.unimi.dsi.fastutil.chars.Char2DoubleFunction"
import { $Float2DoubleFunction } from "it.unimi.dsi.fastutil.floats.Float2DoubleFunction"
import { $Object2ShortFunction } from "it.unimi.dsi.fastutil.objects.Object2ShortFunction"
import { $Double2IntFunction$$Type } from "it.unimi.dsi.fastutil.doubles.Double2IntFunction"
import { $Object2CharFunction } from "it.unimi.dsi.fastutil.objects.Object2CharFunction"

export interface $Object2DoubleFunction<K = any> extends $Function$0<K, double>, $ToDoubleFunction<K> {
/** @deprecated */
"andThen"<T>(function0: $Function$$Type<double, T>): $Function<K, T>
"andThenByte"(double2ByteFunction0: $Double2ByteFunction$$Type): $Object2ByteFunction<K>
"andThenChar"(double2CharFunction0: $Double2CharFunction$$Type): $Object2CharFunction<K>
"andThenDouble"(double2DoubleFunction0: $Double2DoubleFunction$$Type): $Object2DoubleFunction<K>
"andThenFloat"(double2FloatFunction0: $Double2FloatFunction$$Type): $Object2FloatFunction<K>
"andThenInt"(double2IntFunction0: $Double2IntFunction$$Type): $Object2IntFunction<K>
"andThenLong"(double2LongFunction0: $Double2LongFunction$$Type): $Object2LongFunction<K>
"andThenObject"<T>(double2ObjectFunction0: $Double2ObjectFunction$$Type<T>): $Object2ObjectFunction<K, T>
"andThenReference"<T>(double2ReferenceFunction0: $Double2ReferenceFunction$$Type<T>): $Object2ReferenceFunction<K, T>
"andThenShort"(double2ShortFunction0: $Double2ShortFunction$$Type): $Object2ShortFunction<K>
"apply"(k0: K): double
"applyAsDouble"(k0: K): double
"clear"(): void
"compose"<V>(function0: $Function$$Type<V, K>): $Function<V, double>
"composeByte"(byte2ObjectFunction0: $Byte2ObjectFunction$$Type<K>): $Byte2DoubleFunction
"composeChar"(char2ObjectFunction0: $Char2ObjectFunction$$Type<K>): $Char2DoubleFunction
"composeDouble"(double2ObjectFunction0: $Double2ObjectFunction$$Type<K>): $Double2DoubleFunction
"composeFloat"(float2ObjectFunction0: $Float2ObjectFunction$$Type<K>): $Float2DoubleFunction
"composeInt"(int2ObjectFunction0: $Int2ObjectFunction$$Type<K>): $Int2DoubleFunction
"composeLong"(long2ObjectFunction0: $Long2ObjectFunction$$Type<K>): $Long2DoubleFunction
"composeObject"<T>(object2ObjectFunction0: $Object2ObjectFunction$$Type<T, K>): $Object2DoubleFunction<T>
"composeReference"<T>(reference2ObjectFunction0: $Reference2ObjectFunction$$Type<T, K>): $Reference2DoubleFunction<T>
"composeShort"(short2ObjectFunction0: $Short2ObjectFunction$$Type<K>): $Short2DoubleFunction
"containsKey"(object0: any): boolean
"defaultReturnValue"(): double
"defaultReturnValue"(double0: double): void
/** @deprecated */
"get"(object0: any): double
"getDouble"(object0: any): double
"getOrDefault"(object0: any, double1: double): double
/** @deprecated */
"getOrDefault"(object0: any, double1: double): double
/** @deprecated */
"put"(k0: K, double1: double): double
"put"(k0: K, double1: double): double
"removeDouble"(object0: any): double
"size"(): integer
}

export namespace $Object2DoubleFunction {
function identity<T>(): $Function<T, T>
}
export abstract class $Object2DoubleFunction$$Static<K = any> implements $Object2DoubleFunction<K> {
static "identity"<T>(): $Function<T, T>
}
}

declare module "it.unimi.dsi.fastutil.objects.ObjectArrayList" {
import { $Cloneable } from "java.lang.Cloneable"
import { $Iterator$$Type } from "java.util.Iterator"
import { $Predicate$$Type } from "java.util.function.Predicate"
import { $Collection$$Type } from "java.util.Collection"
import { $UnaryOperator$$Type } from "java.util.function.UnaryOperator"
import { $ObjectCollection$$Type } from "it.unimi.dsi.fastutil.objects.ObjectCollection"
import { $Serializable } from "java.io.Serializable"
import { $RandomAccess } from "java.util.RandomAccess"
import { $List } from "java.util.List"
import { $Stream } from "java.util.stream.Stream"
import { $ObjectIterator$$Type } from "it.unimi.dsi.fastutil.objects.ObjectIterator"
import { $Collector } from "java.util.stream.Collector"
import { $Comparator$$Type } from "java.util.Comparator"
import { $ObjectList, $ObjectList$$Type } from "it.unimi.dsi.fastutil.objects.ObjectList"
import { $AbstractObjectList } from "it.unimi.dsi.fastutil.objects.AbstractObjectList"
import { $IntFunction$$Type } from "java.util.function.IntFunction"

export class $ObjectArrayList<K = any> extends $AbstractObjectList<K> implements $RandomAccess, $Cloneable, $Serializable {
static readonly "DEFAULT_INITIAL_CAPACITY": integer

constructor(objectIterator0: $ObjectIterator$$Type<K>)
constructor(k0s: K[], int1: integer, int2: integer)
constructor(objectCollection0: $ObjectCollection$$Type<K>)
constructor(collection0: $Collection$$Type<K>)
constructor()
constructor(int0: integer)
constructor(iterator0: $Iterator$$Type<K>)
constructor(k0s: K[])
constructor(objectList0: $ObjectList$$Type<K>)

public "addAll"(int0: integer, objectList1: $ObjectList$$Type<K>): boolean
public "addAll"(objectList0: $ObjectList$$Type<K>): boolean
public "compareTo"(objectArrayList0: $ObjectArrayList$$Type<K>): integer
public "containsAll"(collection0: $Collection$$Type<any>): boolean
public static "copyOf"<E>(collection0: $Collection$$Type<E>): $List<E>
public "elements"(): K[]
public "ensureCapacity"(int0: integer): void
public "equals"(objectArrayList0: $ObjectArrayList$$Type<K>): boolean
public "get"(int0: integer): K
public static "of"<K>(...k0s: K[]): $ObjectArrayList<K>
public static "of"<K>(): $ObjectArrayList<K>
public static "of"<K>(k0: K, k1: K): $ObjectList<K>
public static "of"<K>(k0: K, k1: K, k2: K): $ObjectList<K>
public static "of"<K>(k0: K): $ObjectList<K>
public static "of"<E>(e0: E, e1: E, e2: E, e3: E): $List<E>
public static "of"<E>(e0: E, e1: E, e2: E, e3: E, e4: E, e5: E, e6: E, e7: E): $List<E>
public static "of"<E>(e0: E, e1: E, e2: E, e3: E, e4: E, e5: E, e6: E): $List<E>
public static "of"<E>(e0: E, e1: E, e2: E, e3: E, e4: E, e5: E): $List<E>
public static "of"<E>(e0: E, e1: E, e2: E, e3: E, e4: E): $List<E>
public static "of"<E>(e0: E, e1: E, e2: E, e3: E, e4: E, e5: E, e6: E, e7: E, e8: E, e9: E): $List<E>
public static "of"<E>(e0: E, e1: E, e2: E, e3: E, e4: E, e5: E, e6: E, e7: E, e8: E): $List<E>
public "parallelStream"(): $Stream<K>
public "remove"(int0: integer): K
public "removeIf"(predicate0: $Predicate$$Type<K>): boolean
public "replaceAll"(unaryOperator0: $UnaryOperator$$Type<K>): void
public "retainAll"(collection0: $Collection$$Type<any>): boolean
public "set"(int0: integer, k1: K): K
public "setElements"(k0s: K[]): void
public "setElements"(int0: integer, k1s: K[]): void
public "sort"(comparator0: $Comparator$$Type<K>): void
public "stream"(): $Stream<K>
public "toArray"<K>(k0s: K[]): K[]
public "toArray"<T>(intFunction0: $IntFunction$$Type<T[]>): T[]
public static "toList"<K>(): $Collector<K, any, $ObjectArrayList<K>>
public static "toListWithExpectedSize"<K>(int0: integer): $Collector<K, any, $ObjectArrayList<K>>
public "trim"(): void
public "trim"(int0: integer): void
public "unstableSort"(comparator0: $Comparator$$Type<K>): void
public static "wrap"<K>(k0s: K[]): $ObjectArrayList<K>
public static "wrap"<K>(k0s: K[], int1: integer): $ObjectArrayList<K>
}
}

declare module "it.unimi.dsi.fastutil.objects.ObjectIterator" {
import { $Consumer$$Type } from "java.util.function.Consumer"
import { $Iterator } from "java.util.Iterator"

export interface $ObjectIterator<K = any> extends $Iterator<K> {
"forEachRemaining"(consumer0: $Consumer$$Type<K>): void
"hasNext"(): boolean
"next"(): K
"remove"(): void
"skip"(int0: integer): integer
}

export namespace $ObjectIterator {
const probejs$$marker: never
}
export abstract class $ObjectIterator$$Static<K = any> implements $ObjectIterator<K> {
}
}

declare module "it.unimi.dsi.fastutil.objects.AbstractObjectSet" {
import { $Consumer$$Type } from "java.util.function.Consumer"
import { $AbstractObjectCollection } from "it.unimi.dsi.fastutil.objects.AbstractObjectCollection"
import { $Cloneable } from "java.lang.Cloneable"
import { $Stream } from "java.util.stream.Stream"
import { $Predicate$$Type } from "java.util.function.Predicate"
import { $Collection$$Type } from "java.util.Collection"
import { $Set } from "java.util.Set"
import { $ObjectIterator } from "it.unimi.dsi.fastutil.objects.ObjectIterator"
import { $ObjectSet } from "it.unimi.dsi.fastutil.objects.ObjectSet"
import { $IntFunction$$Type } from "java.util.function.IntFunction"

export class $AbstractObjectSet<K = any> extends $AbstractObjectCollection<K> implements $Cloneable, $ObjectSet<K> {
public "add"(k0: K): boolean
public "addAll"(collection0: $Collection$$Type<K>): boolean
public "clear"(): void
public "contains"(object0: any): boolean
public "containsAll"(collection0: $Collection$$Type<any>): boolean
public static "copyOf"<E>(collection0: $Collection$$Type<E>): $Set<E>
public "forEach"(consumer0: $Consumer$$Type<K>): void
public "isEmpty"(): boolean
public "iterator"(): $ObjectIterator<K>
public static "of"<K>(k0: K, k1: K): $ObjectSet<K>
public static "of"<K>(...k0s: K[]): $ObjectSet<K>
public static "of"<K>(k0: K, k1: K, k2: K): $ObjectSet<K>
public static "of"<K>(): $ObjectSet<K>
public static "of"<K>(k0: K): $ObjectSet<K>
public static "of"<E>(e0: E, e1: E, e2: E, e3: E, e4: E, e5: E): $Set<E>
public static "of"<E>(e0: E, e1: E, e2: E, e3: E, e4: E): $Set<E>
public static "of"<E>(e0: E, e1: E, e2: E, e3: E): $Set<E>
public static "of"<E>(e0: E, e1: E, e2: E, e3: E, e4: E, e5: E, e6: E, e7: E, e8: E, e9: E): $Set<E>
public static "of"<E>(e0: E, e1: E, e2: E, e3: E, e4: E, e5: E, e6: E, e7: E, e8: E): $Set<E>
public static "of"<E>(e0: E, e1: E, e2: E, e3: E, e4: E, e5: E, e6: E, e7: E): $Set<E>
public static "of"<E>(e0: E, e1: E, e2: E, e3: E, e4: E, e5: E, e6: E): $Set<E>
public "parallelStream"(): $Stream<K>
public "remove"(object0: any): boolean
public "removeAll"(collection0: $Collection$$Type<any>): boolean
public "removeIf"(predicate0: $Predicate$$Type<K>): boolean
public "retainAll"(collection0: $Collection$$Type<any>): boolean
public "size"(): integer
public "stream"(): $Stream<K>
public "toArray"<T>(t0s: T[]): T[]
public "toArray"(): any[]
public "toArray"<T>(intFunction0: $IntFunction$$Type<T[]>): T[]
get "empty"(): boolean
}
}

declare module "it.unimi.dsi.fastutil.objects.ReferenceSet" {
import { $Consumer$$Type } from "java.util.function.Consumer"
import { $Stream } from "java.util.stream.Stream"
import { $Predicate$$Type } from "java.util.function.Predicate"
import { $Collection$$Type } from "java.util.Collection"
import { $Set } from "java.util.Set"
import { $ReferenceCollection } from "it.unimi.dsi.fastutil.objects.ReferenceCollection"
import { $IntFunction$$Type } from "java.util.function.IntFunction"

export interface $ReferenceSet<K = any> extends $ReferenceCollection<K>, $Set<K> {
"add"(k0: K): boolean
"addAll"(collection0: $Collection$$Type<K>): boolean
"clear"(): void
"contains"(object0: any): boolean
"containsAll"(collection0: $Collection$$Type<any>): boolean
"equals"(object0: any): boolean
"forEach"(consumer0: $Consumer$$Type<K>): void
"hashCode"(): integer
"isEmpty"(): boolean
"parallelStream"(): $Stream<K>
"remove"(object0: any): boolean
"removeAll"(collection0: $Collection$$Type<any>): boolean
"removeIf"(predicate0: $Predicate$$Type<K>): boolean
"retainAll"(collection0: $Collection$$Type<any>): boolean
"size"(): integer
"stream"(): $Stream<K>
"toArray"<T>(t0s: T[]): T[]
"toArray"(): any[]
"toArray"<T>(intFunction0: $IntFunction$$Type<T[]>): T[]
get "empty"(): boolean
}

export namespace $ReferenceSet {
function copyOf<E>(collection0: $Collection$$Type<E>): $Set<E>
function of<K>(k0: K, k1: K): $ReferenceSet<K>
function of<K>(...k0s: K[]): $ReferenceSet<K>
function of<K>(k0: K, k1: K, k2: K): $ReferenceSet<K>
function of<K>(): $ReferenceSet<K>
function of<K>(k0: K): $ReferenceSet<K>
function of<E>(e0: E, e1: E, e2: E, e3: E, e4: E, e5: E): $Set<E>
function of<E>(e0: E, e1: E, e2: E, e3: E, e4: E): $Set<E>
function of<E>(e0: E, e1: E, e2: E, e3: E): $Set<E>
function of<E>(e0: E, e1: E, e2: E, e3: E, e4: E, e5: E, e6: E, e7: E, e8: E, e9: E): $Set<E>
function of<E>(e0: E, e1: E, e2: E, e3: E, e4: E, e5: E, e6: E, e7: E, e8: E): $Set<E>
function of<E>(e0: E, e1: E, e2: E, e3: E, e4: E, e5: E, e6: E, e7: E): $Set<E>
function of<E>(e0: E, e1: E, e2: E, e3: E, e4: E, e5: E, e6: E): $Set<E>
}
export abstract class $ReferenceSet$$Static<K = any> implements $ReferenceSet<K> {
static "copyOf"<E>(collection0: $Collection$$Type<E>): $Set<E>
static "of"<K>(k0: K, k1: K): $ReferenceSet<K>
static "of"<K>(...k0s: K[]): $ReferenceSet<K>
static "of"<K>(k0: K, k1: K, k2: K): $ReferenceSet<K>
static "of"<K>(): $ReferenceSet<K>
static "of"<K>(k0: K): $ReferenceSet<K>
static "of"<E>(e0: E, e1: E, e2: E, e3: E, e4: E, e5: E): $Set<E>
static "of"<E>(e0: E, e1: E, e2: E, e3: E, e4: E): $Set<E>
static "of"<E>(e0: E, e1: E, e2: E, e3: E): $Set<E>
static "of"<E>(e0: E, e1: E, e2: E, e3: E, e4: E, e5: E, e6: E, e7: E, e8: E, e9: E): $Set<E>
static "of"<E>(e0: E, e1: E, e2: E, e3: E, e4: E, e5: E, e6: E, e7: E, e8: E): $Set<E>
static "of"<E>(e0: E, e1: E, e2: E, e3: E, e4: E, e5: E, e6: E, e7: E): $Set<E>
static "of"<E>(e0: E, e1: E, e2: E, e3: E, e4: E, e5: E, e6: E): $Set<E>
}
}

declare module "it.unimi.dsi.fastutil.objects.Object2IntOpenHashMap" {
import { $Int2ShortFunction$$Type } from "it.unimi.dsi.fastutil.ints.Int2ShortFunction"
import { $Hash } from "it.unimi.dsi.fastutil.Hash"
import { $Int2ByteFunction$$Type } from "it.unimi.dsi.fastutil.ints.Int2ByteFunction"
import { $Int2ReferenceFunction$$Type } from "it.unimi.dsi.fastutil.ints.Int2ReferenceFunction"
import { $BiFunction$$Type } from "java.util.function.BiFunction"
import { $IntBinaryOperator$$Type } from "java.util.function.IntBinaryOperator"
import { $Double2ObjectFunction$$Type } from "it.unimi.dsi.fastutil.doubles.Double2ObjectFunction"
import { $Object2ObjectFunction, $Object2ObjectFunction$$Type } from "it.unimi.dsi.fastutil.objects.Object2ObjectFunction"
import { $Function, $Function$$Type } from "java.util.function.Function"
import { $Int2DoubleFunction$$Type } from "it.unimi.dsi.fastutil.ints.Int2DoubleFunction"
import { $Object2LongFunction } from "it.unimi.dsi.fastutil.objects.Object2LongFunction"
import { $Object2DoubleFunction } from "it.unimi.dsi.fastutil.objects.Object2DoubleFunction"
import { $Int2IntFunction, $Int2IntFunction$$Type } from "it.unimi.dsi.fastutil.ints.Int2IntFunction"
import { $Float2IntFunction } from "it.unimi.dsi.fastutil.floats.Float2IntFunction"
import { $Object2FloatFunction } from "it.unimi.dsi.fastutil.objects.Object2FloatFunction"
import { $Map, $Map$$Type } from "java.util.Map"
import { $Object2IntFunction, $Object2IntFunction$$Type } from "it.unimi.dsi.fastutil.objects.Object2IntFunction"
import { $BiConsumer$$Type } from "java.util.function.BiConsumer"
import { $Reference2IntFunction } from "it.unimi.dsi.fastutil.objects.Reference2IntFunction"
import { $AbstractObject2IntMap } from "it.unimi.dsi.fastutil.objects.AbstractObject2IntMap"
import { $Long2IntFunction } from "it.unimi.dsi.fastutil.longs.Long2IntFunction"
import { $Short2IntFunction } from "it.unimi.dsi.fastutil.shorts.Short2IntFunction"
import { $Int2FloatFunction$$Type } from "it.unimi.dsi.fastutil.ints.Int2FloatFunction"
import { $Reference2ObjectFunction$$Type } from "it.unimi.dsi.fastutil.objects.Reference2ObjectFunction"
import { $Map$Entry, $Map$Entry$$Type } from "java.util.Map$Entry"
import { $Cloneable } from "java.lang.Cloneable"
import { $Byte2ObjectFunction$$Type } from "it.unimi.dsi.fastutil.bytes.Byte2ObjectFunction"
import { $Short2ObjectFunction$$Type } from "it.unimi.dsi.fastutil.shorts.Short2ObjectFunction"
import { $Object2ByteFunction } from "it.unimi.dsi.fastutil.objects.Object2ByteFunction"
import { $Int2ObjectFunction$$Type } from "it.unimi.dsi.fastutil.ints.Int2ObjectFunction"
import { $Long2ObjectFunction$$Type } from "it.unimi.dsi.fastutil.longs.Long2ObjectFunction"
import { $ToIntFunction$$Type } from "java.util.function.ToIntFunction"
import { $Char2IntFunction } from "it.unimi.dsi.fastutil.chars.Char2IntFunction"
import { $ObjectSet } from "it.unimi.dsi.fastutil.objects.ObjectSet"
import { $Int2LongFunction$$Type } from "it.unimi.dsi.fastutil.ints.Int2LongFunction"
import { $Serializable } from "java.io.Serializable"
import { $Object2ReferenceFunction } from "it.unimi.dsi.fastutil.objects.Object2ReferenceFunction"
import { $Float2ObjectFunction$$Type } from "it.unimi.dsi.fastutil.floats.Float2ObjectFunction"
import { $Object2IntMap$$Type } from "it.unimi.dsi.fastutil.objects.Object2IntMap"
import { $Char2ObjectFunction$$Type } from "it.unimi.dsi.fastutil.chars.Char2ObjectFunction"
import { $Object2IntMap$FastEntrySet } from "it.unimi.dsi.fastutil.objects.Object2IntMap$FastEntrySet"
import { $Object2ShortFunction } from "it.unimi.dsi.fastutil.objects.Object2ShortFunction"
import { $Double2IntFunction } from "it.unimi.dsi.fastutil.doubles.Double2IntFunction"
import { $Object2CharFunction } from "it.unimi.dsi.fastutil.objects.Object2CharFunction"
import { $Int2CharFunction$$Type } from "it.unimi.dsi.fastutil.ints.Int2CharFunction"
import { $Byte2IntFunction } from "it.unimi.dsi.fastutil.bytes.Byte2IntFunction"

export class $Object2IntOpenHashMap<K = any> extends $AbstractObject2IntMap<K> implements $Serializable, $Cloneable, $Hash {
constructor(int0: integer, float1: float)
constructor(k0s: K[], int1s: integer[], float2: float)
constructor(map0: $Map$$Type<K, integer>)
constructor(k0s: K[], int1s: integer[])
constructor(map0: $Map$$Type<K, integer>, float1: float)
constructor(object2IntMap0: $Object2IntMap$$Type<K>, float1: float)
constructor(object2IntMap0: $Object2IntMap$$Type<K>)
constructor(int0: integer)
constructor()

public "addTo"(k0: K, int1: integer): integer
/** @deprecated */
public "andThen"<T>(function0: $Function$$Type<integer, T>): $Function<K, T>
public "andThenByte"(int2ByteFunction0: $Int2ByteFunction$$Type): $Object2ByteFunction<K>
public "andThenChar"(int2CharFunction0: $Int2CharFunction$$Type): $Object2CharFunction<K>
public "andThenDouble"(int2DoubleFunction0: $Int2DoubleFunction$$Type): $Object2DoubleFunction<K>
public "andThenFloat"(int2FloatFunction0: $Int2FloatFunction$$Type): $Object2FloatFunction<K>
public "andThenInt"(int2IntFunction0: $Int2IntFunction$$Type): $Object2IntFunction<K>
public "andThenLong"(int2LongFunction0: $Int2LongFunction$$Type): $Object2LongFunction<K>
public "andThenObject"<T>(int2ObjectFunction0: $Int2ObjectFunction$$Type<T>): $Object2ObjectFunction<K, T>
public "andThenReference"<T>(int2ReferenceFunction0: $Int2ReferenceFunction$$Type<T>): $Object2ReferenceFunction<K, T>
public "andThenShort"(int2ShortFunction0: $Int2ShortFunction$$Type): $Object2ShortFunction<K>
public "apply"(k0: K): integer
public "applyAsInt"(k0: K): integer
public "clear"(): void
public "compose"<V>(function0: $Function$$Type<V, K>): $Function<V, integer>
public "composeByte"(byte2ObjectFunction0: $Byte2ObjectFunction$$Type<K>): $Byte2IntFunction
public "composeChar"(char2ObjectFunction0: $Char2ObjectFunction$$Type<K>): $Char2IntFunction
public "composeDouble"(double2ObjectFunction0: $Double2ObjectFunction$$Type<K>): $Double2IntFunction
public "composeFloat"(float2ObjectFunction0: $Float2ObjectFunction$$Type<K>): $Float2IntFunction
public "composeInt"(int2ObjectFunction0: $Int2ObjectFunction$$Type<K>): $Int2IntFunction
public "composeLong"(long2ObjectFunction0: $Long2ObjectFunction$$Type<K>): $Long2IntFunction
public "composeObject"<T>(object2ObjectFunction0: $Object2ObjectFunction$$Type<T, K>): $Object2IntFunction<T>
public "composeReference"<T>(reference2ObjectFunction0: $Reference2ObjectFunction$$Type<T, K>): $Reference2IntFunction<T>
public "composeShort"(short2ObjectFunction0: $Short2ObjectFunction$$Type<K>): $Short2IntFunction
public "compute"(k0: K, biFunction1: $BiFunction$$Type<K, integer, integer>): integer
public "computeIfAbsent"(k0: K, toIntFunction1: $ToIntFunction$$Type<K>): integer
public "computeIfAbsent"(k0: K, object2IntFunction1: $Object2IntFunction$$Type<K>): integer
public "computeIfAbsent"(k0: K, function1: $Function$$Type<K, integer>): integer
public "computeIfPresent"(k0: K, biFunction1: $BiFunction$$Type<K, integer, integer>): integer
public "computeInt"(k0: K, biFunction1: $BiFunction$$Type<K, integer, integer>): integer
/** @deprecated */
public "computeIntIfAbsent"(k0: K, toIntFunction1: $ToIntFunction$$Type<K>): integer
/** @deprecated */
public "computeIntIfAbsentPartial"(k0: K, object2IntFunction1: $Object2IntFunction$$Type<K>): integer
public "computeIntIfPresent"(k0: K, biFunction1: $BiFunction$$Type<K, integer, integer>): integer
/** @deprecated */
public "containsValue"(object0: any): boolean
public static "copyOf"<K, V>(map0: $Map$$Type<K, V>): $Map<K, V>
public "defaultReturnValue"(int0: integer): void
public "defaultReturnValue"(): integer
public static "entry"<K, V>(k0: K, v1: V): $Map$Entry<K, V>
/** @deprecated */
public "entrySet"(): $ObjectSet<$Map$Entry<K, integer>>
public "forEach"(biConsumer0: $BiConsumer$$Type<K, integer>): void
public "getInt"(object0: any): integer
public "getOrDefault"(object0: any, int1: integer): integer
/** @deprecated */
public "getOrDefault"(object0: any, integer1: integer): integer
public static "identity"<T>(): $Function<T, T>
public "keySet"(): $ObjectSet<K>
public "merge"(k0: K, int1: integer, biFunction2: $BiFunction$$Type<integer, integer, integer>): integer
/** @deprecated */
public "merge"(k0: K, integer1: integer, biFunction2: $BiFunction$$Type<integer, integer, integer>): integer
/** @deprecated */
public "mergeInt"(k0: K, int1: integer, biFunction2: $BiFunction$$Type<integer, integer, integer>): integer
public "mergeInt"(k0: K, int1: integer, intBinaryOperator2: $IntBinaryOperator$$Type): integer
public "object2IntEntrySet"(): $Object2IntMap$FastEntrySet<K>
public static "of"<K, V>(k0: K, v1: V, k2: K, v3: V, k4: K, v5: V, k6: K, v7: V, k8: K, v9: V): $Map<K, V>
public static "of"<K, V>(k0: K, v1: V, k2: K, v3: V, k4: K, v5: V, k6: K, v7: V): $Map<K, V>
public static "of"<K, V>(k0: K, v1: V, k2: K, v3: V, k4: K, v5: V): $Map<K, V>
public static "of"<K, V>(): $Map<K, V>
public static "of"<K, V>(k0: K, v1: V, k2: K, v3: V): $Map<K, V>
public static "of"<K, V>(k0: K, v1: V): $Map<K, V>
public static "of"<K, V>(k0: K, v1: V, k2: K, v3: V, k4: K, v5: V, k6: K, v7: V, k8: K, v9: V, k10: K, v11: V, k12: K, v13: V, k14: K, v15: V, k16: K, v17: V, k18: K, v19: V): $Map<K, V>
public static "of"<K, V>(k0: K, v1: V, k2: K, v3: V, k4: K, v5: V, k6: K, v7: V, k8: K, v9: V, k10: K, v11: V, k12: K, v13: V, k14: K, v15: V, k16: K, v17: V): $Map<K, V>
public static "of"<K, V>(k0: K, v1: V, k2: K, v3: V, k4: K, v5: V, k6: K, v7: V, k8: K, v9: V, k10: K, v11: V, k12: K, v13: V, k14: K, v15: V): $Map<K, V>
public static "of"<K, V>(k0: K, v1: V, k2: K, v3: V, k4: K, v5: V, k6: K, v7: V, k8: K, v9: V, k10: K, v11: V, k12: K, v13: V): $Map<K, V>
public static "of"<K, V>(k0: K, v1: V, k2: K, v3: V, k4: K, v5: V, k6: K, v7: V, k8: K, v9: V, k10: K, v11: V): $Map<K, V>
public static "ofEntries"<K, V>(...entry0s: $Map$Entry$$Type<K, V>[]): $Map<K, V>
public "put"(k0: K, int1: integer): integer
/** @deprecated */
public "put"(k0: K, integer1: integer): integer
public "putIfAbsent"(k0: K, int1: integer): integer
/** @deprecated */
public "putIfAbsent"(k0: K, integer1: integer): integer
public "remove"(object0: any, int1: integer): boolean
/** @deprecated */
public "remove"(object0: any, object1: any): boolean
public "removeInt"(object0: any): integer
public "replace"(k0: K, int1: integer, int2: integer): boolean
public "replace"(k0: K, int1: integer): integer
/** @deprecated */
public "replace"(k0: K, integer1: integer): integer
/** @deprecated */
public "replace"(k0: K, integer1: integer, integer2: integer): boolean
public "replaceAll"(biFunction0: $BiFunction$$Type<K, integer, integer>): void
public "size"(): integer
public "trim"(int0: integer): boolean
public "trim"(): boolean
}
}

declare module "it.unimi.dsi.fastutil.objects.ReferenceCollection" {
import { $Consumer$$Type } from "java.util.function.Consumer"
import { $Stream } from "java.util.stream.Stream"
import { $ObjectSpliterator } from "it.unimi.dsi.fastutil.objects.ObjectSpliterator"
import { $ObjectIterable } from "it.unimi.dsi.fastutil.objects.ObjectIterable"
import { $Predicate$$Type } from "java.util.function.Predicate"
import { $Collection, $Collection$$Type } from "java.util.Collection"
import { $IntFunction$$Type } from "java.util.function.IntFunction"

export interface $ReferenceCollection<K = any> extends $Collection<K>, $ObjectIterable<K> {
"add"(k0: K): boolean
"addAll"(collection0: $Collection$$Type<K>): boolean
"clear"(): void
"contains"(object0: any): boolean
"containsAll"(collection0: $Collection$$Type<any>): boolean
"equals"(object0: any): boolean
"forEach"(consumer0: $Consumer$$Type<K>): void
"hashCode"(): integer
"isEmpty"(): boolean
"parallelStream"(): $Stream<K>
"remove"(object0: any): boolean
"removeAll"(collection0: $Collection$$Type<any>): boolean
"removeIf"(predicate0: $Predicate$$Type<K>): boolean
"retainAll"(collection0: $Collection$$Type<any>): boolean
"size"(): integer
"spliterator"(): $ObjectSpliterator<K>
"stream"(): $Stream<K>
"toArray"<T>(t0s: T[]): T[]
"toArray"<T>(intFunction0: $IntFunction$$Type<T[]>): T[]
"toArray"(): any[]
get "empty"(): boolean
}

export namespace $ReferenceCollection {
const probejs$$marker: never
}
export abstract class $ReferenceCollection$$Static<K = any> implements $ReferenceCollection<K> {
}
}

declare module "it.unimi.dsi.fastutil.objects.Object2ReferenceFunction" {
import { $Double2ReferenceFunction } from "it.unimi.dsi.fastutil.doubles.Double2ReferenceFunction"
import { $Int2ReferenceFunction } from "it.unimi.dsi.fastutil.ints.Int2ReferenceFunction"
import { $Short2ReferenceFunction } from "it.unimi.dsi.fastutil.shorts.Short2ReferenceFunction"
import { $Double2ObjectFunction$$Type } from "it.unimi.dsi.fastutil.doubles.Double2ObjectFunction"
import { $Object2ObjectFunction, $Object2ObjectFunction$$Type } from "it.unimi.dsi.fastutil.objects.Object2ObjectFunction"
import { $Function, $Function$$Type } from "java.util.function.Function"
import { $Reference2FloatFunction$$Type } from "it.unimi.dsi.fastutil.objects.Reference2FloatFunction"
import { $Object2LongFunction } from "it.unimi.dsi.fastutil.objects.Object2LongFunction"
import { $Object2DoubleFunction } from "it.unimi.dsi.fastutil.objects.Object2DoubleFunction"
import { $Reference2ByteFunction$$Type } from "it.unimi.dsi.fastutil.objects.Reference2ByteFunction"
import { $Object2FloatFunction } from "it.unimi.dsi.fastutil.objects.Object2FloatFunction"
import { $Char2ReferenceFunction } from "it.unimi.dsi.fastutil.chars.Char2ReferenceFunction"
import { $Object2IntFunction } from "it.unimi.dsi.fastutil.objects.Object2IntFunction"
import { $Reference2LongFunction$$Type } from "it.unimi.dsi.fastutil.objects.Reference2LongFunction"
import { $Reference2IntFunction$$Type } from "it.unimi.dsi.fastutil.objects.Reference2IntFunction"
import { $Reference2ObjectFunction$$Type } from "it.unimi.dsi.fastutil.objects.Reference2ObjectFunction"
import { $Byte2ObjectFunction$$Type } from "it.unimi.dsi.fastutil.bytes.Byte2ObjectFunction"
import { $Short2ObjectFunction$$Type } from "it.unimi.dsi.fastutil.shorts.Short2ObjectFunction"
import { $Function as $Function$0 } from "it.unimi.dsi.fastutil.Function"
import { $Object2ByteFunction } from "it.unimi.dsi.fastutil.objects.Object2ByteFunction"
import { $Byte2ReferenceFunction } from "it.unimi.dsi.fastutil.bytes.Byte2ReferenceFunction"
import { $Int2ObjectFunction$$Type } from "it.unimi.dsi.fastutil.ints.Int2ObjectFunction"
import { $Reference2ShortFunction$$Type } from "it.unimi.dsi.fastutil.objects.Reference2ShortFunction"
import { $Long2ObjectFunction$$Type } from "it.unimi.dsi.fastutil.longs.Long2ObjectFunction"
import { $Reference2ReferenceFunction, $Reference2ReferenceFunction$$Type } from "it.unimi.dsi.fastutil.objects.Reference2ReferenceFunction"
import { $Float2ObjectFunction$$Type } from "it.unimi.dsi.fastutil.floats.Float2ObjectFunction"
import { $Long2ReferenceFunction } from "it.unimi.dsi.fastutil.longs.Long2ReferenceFunction"
import { $Reference2DoubleFunction$$Type } from "it.unimi.dsi.fastutil.objects.Reference2DoubleFunction"
import { $Char2ObjectFunction$$Type } from "it.unimi.dsi.fastutil.chars.Char2ObjectFunction"
import { $Reference2CharFunction$$Type } from "it.unimi.dsi.fastutil.objects.Reference2CharFunction"
import { $Object2ShortFunction } from "it.unimi.dsi.fastutil.objects.Object2ShortFunction"
import { $Float2ReferenceFunction } from "it.unimi.dsi.fastutil.floats.Float2ReferenceFunction"
import { $Object2CharFunction } from "it.unimi.dsi.fastutil.objects.Object2CharFunction"

export interface $Object2ReferenceFunction<K = any, V = any> extends $Function$0<K, V> {
"andThen"<V>(function0: $Function$$Type<V, V>): $Function<K, V>
"andThenByte"(reference2ByteFunction0: $Reference2ByteFunction$$Type<V>): $Object2ByteFunction<K>
"andThenChar"(reference2CharFunction0: $Reference2CharFunction$$Type<V>): $Object2CharFunction<K>
"andThenDouble"(reference2DoubleFunction0: $Reference2DoubleFunction$$Type<V>): $Object2DoubleFunction<K>
"andThenFloat"(reference2FloatFunction0: $Reference2FloatFunction$$Type<V>): $Object2FloatFunction<K>
"andThenInt"(reference2IntFunction0: $Reference2IntFunction$$Type<V>): $Object2IntFunction<K>
"andThenLong"(reference2LongFunction0: $Reference2LongFunction$$Type<V>): $Object2LongFunction<K>
"andThenObject"<T>(reference2ObjectFunction0: $Reference2ObjectFunction$$Type<V, T>): $Object2ObjectFunction<K, T>
"andThenReference"<T>(reference2ReferenceFunction0: $Reference2ReferenceFunction$$Type<V, T>): $Object2ReferenceFunction<K, T>
"andThenShort"(reference2ShortFunction0: $Reference2ShortFunction$$Type<V>): $Object2ShortFunction<K>
"apply"(k0: K): V
"clear"(): void
"compose"<V>(function0: $Function$$Type<V, K>): $Function<V, V>
"composeByte"(byte2ObjectFunction0: $Byte2ObjectFunction$$Type<K>): $Byte2ReferenceFunction<V>
"composeChar"(char2ObjectFunction0: $Char2ObjectFunction$$Type<K>): $Char2ReferenceFunction<V>
"composeDouble"(double2ObjectFunction0: $Double2ObjectFunction$$Type<K>): $Double2ReferenceFunction<V>
"composeFloat"(float2ObjectFunction0: $Float2ObjectFunction$$Type<K>): $Float2ReferenceFunction<V>
"composeInt"(int2ObjectFunction0: $Int2ObjectFunction$$Type<K>): $Int2ReferenceFunction<V>
"composeLong"(long2ObjectFunction0: $Long2ObjectFunction$$Type<K>): $Long2ReferenceFunction<V>
"composeObject"<T>(object2ObjectFunction0: $Object2ObjectFunction$$Type<T, K>): $Object2ReferenceFunction<T, V>
"composeReference"<T>(reference2ObjectFunction0: $Reference2ObjectFunction$$Type<T, K>): $Reference2ReferenceFunction<T, V>
"composeShort"(short2ObjectFunction0: $Short2ObjectFunction$$Type<K>): $Short2ReferenceFunction<V>
"containsKey"(object0: any): boolean
"defaultReturnValue"(): V
"defaultReturnValue"(v0: V): void
"get"(object0: any): V
"getOrDefault"(object0: any, v1: V): V
"put"(k0: K, v1: V): V
"remove"(object0: any): V
"size"(): integer
}

export namespace $Object2ReferenceFunction {
function identity<T>(): $Function<T, T>
}
export abstract class $Object2ReferenceFunction$$Static<K = any, V = any> implements $Object2ReferenceFunction<K, V> {
static "identity"<T>(): $Function<T, T>
}
}

declare module "it.unimi.dsi.fastutil.objects.Object2BooleanMap$Entry" {
import { $Map$Entry, $Map$Entry$$Type } from "java.util.Map$Entry"
import { $Comparable, $Comparable$$Type } from "java.lang.Comparable"
import { $Comparator, $Comparator$$Type } from "java.util.Comparator"

export interface $Object2BooleanMap$Entry<K = any> extends $Map$Entry<K, boolean> {
"equals"(object0: any): boolean
"getBooleanValue"(): boolean
"getKey"(): K
"hashCode"(): integer
"setValue"(boolean0: boolean): boolean
/** @deprecated */
"setValue"(boolean0: boolean): boolean
get "booleanValue"(): boolean
get "key"(): K
set "value"(value: boolean)
set "value"(value: boolean)
}

export namespace $Object2BooleanMap$Entry {
function comparingByKey<K extends $Comparable<K>, V>(): $Comparator<$Map$Entry<K, V>>
function comparingByKey<K, V>(comparator0: $Comparator$$Type<K>): $Comparator<$Map$Entry<K, V>>
function comparingByValue<K, V extends $Comparable<V>>(): $Comparator<$Map$Entry<K, V>>
function comparingByValue<K, V>(comparator0: $Comparator$$Type<V>): $Comparator<$Map$Entry<K, V>>
function copyOf<K, V>(entry0: $Map$Entry$$Type<K, V>): $Map$Entry<K, V>
}
export abstract class $Object2BooleanMap$Entry$$Static<K = any> implements $Object2BooleanMap$Entry<K> {
static "comparingByKey"<K extends $Comparable<K>, V>(): $Comparator<$Map$Entry<K, V>>
static "comparingByKey"<K, V>(comparator0: $Comparator$$Type<K>): $Comparator<$Map$Entry<K, V>>
static "comparingByValue"<K, V extends $Comparable<V>>(): $Comparator<$Map$Entry<K, V>>
static "comparingByValue"<K, V>(comparator0: $Comparator$$Type<V>): $Comparator<$Map$Entry<K, V>>
static "copyOf"<K, V>(entry0: $Map$Entry$$Type<K, V>): $Map$Entry<K, V>
}
}

declare module "it.unimi.dsi.fastutil.objects.Reference2DoubleFunction" {
import { $Double2ShortFunction$$Type } from "it.unimi.dsi.fastutil.doubles.Double2ShortFunction"
import { $Double2ReferenceFunction$$Type } from "it.unimi.dsi.fastutil.doubles.Double2ReferenceFunction"
import { $Int2ReferenceFunction$$Type } from "it.unimi.dsi.fastutil.ints.Int2ReferenceFunction"
import { $Short2ReferenceFunction$$Type } from "it.unimi.dsi.fastutil.shorts.Short2ReferenceFunction"
import { $Double2ObjectFunction$$Type } from "it.unimi.dsi.fastutil.doubles.Double2ObjectFunction"
import { $Function, $Function$$Type } from "java.util.function.Function"
import { $Reference2FloatFunction } from "it.unimi.dsi.fastutil.objects.Reference2FloatFunction"
import { $Int2DoubleFunction } from "it.unimi.dsi.fastutil.ints.Int2DoubleFunction"
import { $Double2ByteFunction$$Type } from "it.unimi.dsi.fastutil.doubles.Double2ByteFunction"
import { $Object2DoubleFunction } from "it.unimi.dsi.fastutil.objects.Object2DoubleFunction"
import { $Short2DoubleFunction } from "it.unimi.dsi.fastutil.shorts.Short2DoubleFunction"
import { $Reference2ByteFunction } from "it.unimi.dsi.fastutil.objects.Reference2ByteFunction"
import { $Byte2DoubleFunction } from "it.unimi.dsi.fastutil.bytes.Byte2DoubleFunction"
import { $Char2ReferenceFunction$$Type } from "it.unimi.dsi.fastutil.chars.Char2ReferenceFunction"
import { $Reference2LongFunction } from "it.unimi.dsi.fastutil.objects.Reference2LongFunction"
import { $Reference2IntFunction } from "it.unimi.dsi.fastutil.objects.Reference2IntFunction"
import { $Reference2ObjectFunction } from "it.unimi.dsi.fastutil.objects.Reference2ObjectFunction"
import { $Double2DoubleFunction, $Double2DoubleFunction$$Type } from "it.unimi.dsi.fastutil.doubles.Double2DoubleFunction"
import { $Double2FloatFunction$$Type } from "it.unimi.dsi.fastutil.doubles.Double2FloatFunction"
import { $Function as $Function$0 } from "it.unimi.dsi.fastutil.Function"
import { $Byte2ReferenceFunction$$Type } from "it.unimi.dsi.fastutil.bytes.Byte2ReferenceFunction"
import { $Reference2ShortFunction } from "it.unimi.dsi.fastutil.objects.Reference2ShortFunction"
import { $Long2DoubleFunction } from "it.unimi.dsi.fastutil.longs.Long2DoubleFunction"
import { $Double2LongFunction$$Type } from "it.unimi.dsi.fastutil.doubles.Double2LongFunction"
import { $Reference2ReferenceFunction, $Reference2ReferenceFunction$$Type } from "it.unimi.dsi.fastutil.objects.Reference2ReferenceFunction"
import { $Object2ReferenceFunction$$Type } from "it.unimi.dsi.fastutil.objects.Object2ReferenceFunction"
import { $Long2ReferenceFunction$$Type } from "it.unimi.dsi.fastutil.longs.Long2ReferenceFunction"
import { $Double2CharFunction$$Type } from "it.unimi.dsi.fastutil.doubles.Double2CharFunction"
import { $ToDoubleFunction } from "java.util.function.ToDoubleFunction"
import { $Reference2CharFunction } from "it.unimi.dsi.fastutil.objects.Reference2CharFunction"
import { $Char2DoubleFunction } from "it.unimi.dsi.fastutil.chars.Char2DoubleFunction"
import { $Float2DoubleFunction } from "it.unimi.dsi.fastutil.floats.Float2DoubleFunction"
import { $Float2ReferenceFunction$$Type } from "it.unimi.dsi.fastutil.floats.Float2ReferenceFunction"
import { $Double2IntFunction$$Type } from "it.unimi.dsi.fastutil.doubles.Double2IntFunction"

export interface $Reference2DoubleFunction<K = any> extends $Function$0<K, double>, $ToDoubleFunction<K> {
/** @deprecated */
"andThen"<T>(function0: $Function$$Type<double, T>): $Function<K, T>
"andThenByte"(double2ByteFunction0: $Double2ByteFunction$$Type): $Reference2ByteFunction<K>
"andThenChar"(double2CharFunction0: $Double2CharFunction$$Type): $Reference2CharFunction<K>
"andThenDouble"(double2DoubleFunction0: $Double2DoubleFunction$$Type): $Reference2DoubleFunction<K>
"andThenFloat"(double2FloatFunction0: $Double2FloatFunction$$Type): $Reference2FloatFunction<K>
"andThenInt"(double2IntFunction0: $Double2IntFunction$$Type): $Reference2IntFunction<K>
"andThenLong"(double2LongFunction0: $Double2LongFunction$$Type): $Reference2LongFunction<K>
"andThenObject"<T>(double2ObjectFunction0: $Double2ObjectFunction$$Type<T>): $Reference2ObjectFunction<K, T>
"andThenReference"<T>(double2ReferenceFunction0: $Double2ReferenceFunction$$Type<T>): $Reference2ReferenceFunction<K, T>
"andThenShort"(double2ShortFunction0: $Double2ShortFunction$$Type): $Reference2ShortFunction<K>
"apply"(k0: K): double
"applyAsDouble"(k0: K): double
"clear"(): void
"compose"<V>(function0: $Function$$Type<V, K>): $Function<V, double>
"composeByte"(byte2ReferenceFunction0: $Byte2ReferenceFunction$$Type<K>): $Byte2DoubleFunction
"composeChar"(char2ReferenceFunction0: $Char2ReferenceFunction$$Type<K>): $Char2DoubleFunction
"composeDouble"(double2ReferenceFunction0: $Double2ReferenceFunction$$Type<K>): $Double2DoubleFunction
"composeFloat"(float2ReferenceFunction0: $Float2ReferenceFunction$$Type<K>): $Float2DoubleFunction
"composeInt"(int2ReferenceFunction0: $Int2ReferenceFunction$$Type<K>): $Int2DoubleFunction
"composeLong"(long2ReferenceFunction0: $Long2ReferenceFunction$$Type<K>): $Long2DoubleFunction
"composeObject"<T>(object2ReferenceFunction0: $Object2ReferenceFunction$$Type<T, K>): $Object2DoubleFunction<T>
"composeReference"<T>(reference2ReferenceFunction0: $Reference2ReferenceFunction$$Type<T, K>): $Reference2DoubleFunction<T>
"composeShort"(short2ReferenceFunction0: $Short2ReferenceFunction$$Type<K>): $Short2DoubleFunction
"containsKey"(object0: any): boolean
"defaultReturnValue"(): double
"defaultReturnValue"(double0: double): void
/** @deprecated */
"get"(object0: any): double
"getDouble"(object0: any): double
"getOrDefault"(object0: any, double1: double): double
/** @deprecated */
"getOrDefault"(object0: any, double1: double): double
/** @deprecated */
"put"(k0: K, double1: double): double
"put"(k0: K, double1: double): double
"removeDouble"(object0: any): double
"size"(): integer
}

export namespace $Reference2DoubleFunction {
function identity<T>(): $Function<T, T>
}
export abstract class $Reference2DoubleFunction$$Static<K = any> implements $Reference2DoubleFunction<K> {
static "identity"<T>(): $Function<T, T>
}
}

declare module "it.unimi.dsi.fastutil.objects.Reference2LongMap$Entry" {
import { $Map$Entry, $Map$Entry$$Type } from "java.util.Map$Entry"
import { $Comparable, $Comparable$$Type } from "java.lang.Comparable"
import { $Comparator, $Comparator$$Type } from "java.util.Comparator"

export interface $Reference2LongMap$Entry<K = any> extends $Map$Entry<K, long> {
"equals"(object0: any): boolean
"getKey"(): K
"getLongValue"(): long
"hashCode"(): integer
"setValue"(long0: long): long
/** @deprecated */
"setValue"(long0: long): long
get "key"(): K
get "longValue"(): long
set "value"(value: long)
set "value"(value: long)
}

export namespace $Reference2LongMap$Entry {
function comparingByKey<K extends $Comparable<K>, V>(): $Comparator<$Map$Entry<K, V>>
function comparingByKey<K, V>(comparator0: $Comparator$$Type<K>): $Comparator<$Map$Entry<K, V>>
function comparingByValue<K, V extends $Comparable<V>>(): $Comparator<$Map$Entry<K, V>>
function comparingByValue<K, V>(comparator0: $Comparator$$Type<V>): $Comparator<$Map$Entry<K, V>>
function copyOf<K, V>(entry0: $Map$Entry$$Type<K, V>): $Map$Entry<K, V>
}
export abstract class $Reference2LongMap$Entry$$Static<K = any> implements $Reference2LongMap$Entry<K> {
static "comparingByKey"<K extends $Comparable<K>, V>(): $Comparator<$Map$Entry<K, V>>
static "comparingByKey"<K, V>(comparator0: $Comparator$$Type<K>): $Comparator<$Map$Entry<K, V>>
static "comparingByValue"<K, V extends $Comparable<V>>(): $Comparator<$Map$Entry<K, V>>
static "comparingByValue"<K, V>(comparator0: $Comparator$$Type<V>): $Comparator<$Map$Entry<K, V>>
static "copyOf"<K, V>(entry0: $Map$Entry$$Type<K, V>): $Map$Entry<K, V>
}
}

declare module "it.unimi.dsi.fastutil.objects.Object2CharFunction" {
import { $Float2CharFunction } from "it.unimi.dsi.fastutil.floats.Float2CharFunction"
import { $Char2FloatFunction$$Type } from "it.unimi.dsi.fastutil.chars.Char2FloatFunction"
import { $Char2LongFunction$$Type } from "it.unimi.dsi.fastutil.chars.Char2LongFunction"
import { $Double2ObjectFunction$$Type } from "it.unimi.dsi.fastutil.doubles.Double2ObjectFunction"
import { $Object2ObjectFunction, $Object2ObjectFunction$$Type } from "it.unimi.dsi.fastutil.objects.Object2ObjectFunction"
import { $Function, $Function$$Type } from "java.util.function.Function"
import { $Object2LongFunction } from "it.unimi.dsi.fastutil.objects.Object2LongFunction"
import { $Object2DoubleFunction } from "it.unimi.dsi.fastutil.objects.Object2DoubleFunction"
import { $Object2FloatFunction } from "it.unimi.dsi.fastutil.objects.Object2FloatFunction"
import { $Char2ReferenceFunction$$Type } from "it.unimi.dsi.fastutil.chars.Char2ReferenceFunction"
import { $Long2CharFunction } from "it.unimi.dsi.fastutil.longs.Long2CharFunction"
import { $Object2IntFunction } from "it.unimi.dsi.fastutil.objects.Object2IntFunction"
import { $Char2CharFunction, $Char2CharFunction$$Type } from "it.unimi.dsi.fastutil.chars.Char2CharFunction"
import { $Reference2ObjectFunction$$Type } from "it.unimi.dsi.fastutil.objects.Reference2ObjectFunction"
import { $Byte2ObjectFunction$$Type } from "it.unimi.dsi.fastutil.bytes.Byte2ObjectFunction"
import { $Short2ObjectFunction$$Type } from "it.unimi.dsi.fastutil.shorts.Short2ObjectFunction"
import { $Function as $Function$0 } from "it.unimi.dsi.fastutil.Function"
import { $Object2ByteFunction } from "it.unimi.dsi.fastutil.objects.Object2ByteFunction"
import { $Char2ByteFunction$$Type } from "it.unimi.dsi.fastutil.chars.Char2ByteFunction"
import { $Int2ObjectFunction$$Type } from "it.unimi.dsi.fastutil.ints.Int2ObjectFunction"
import { $Long2ObjectFunction$$Type } from "it.unimi.dsi.fastutil.longs.Long2ObjectFunction"
import { $ToIntFunction } from "java.util.function.ToIntFunction"
import { $Char2IntFunction$$Type } from "it.unimi.dsi.fastutil.chars.Char2IntFunction"
import { $Byte2CharFunction } from "it.unimi.dsi.fastutil.bytes.Byte2CharFunction"
import { $Char2ShortFunction$$Type } from "it.unimi.dsi.fastutil.chars.Char2ShortFunction"
import { $Short2CharFunction } from "it.unimi.dsi.fastutil.shorts.Short2CharFunction"
import { $Object2ReferenceFunction } from "it.unimi.dsi.fastutil.objects.Object2ReferenceFunction"
import { $Float2ObjectFunction$$Type } from "it.unimi.dsi.fastutil.floats.Float2ObjectFunction"
import { $Double2CharFunction } from "it.unimi.dsi.fastutil.doubles.Double2CharFunction"
import { $Char2ObjectFunction$$Type } from "it.unimi.dsi.fastutil.chars.Char2ObjectFunction"
import { $Reference2CharFunction } from "it.unimi.dsi.fastutil.objects.Reference2CharFunction"
import { $Char2DoubleFunction$$Type } from "it.unimi.dsi.fastutil.chars.Char2DoubleFunction"
import { $Object2ShortFunction } from "it.unimi.dsi.fastutil.objects.Object2ShortFunction"
import { $Int2CharFunction } from "it.unimi.dsi.fastutil.ints.Int2CharFunction"

export interface $Object2CharFunction<K = any> extends $Function$0<K, character>, $ToIntFunction<K> {
/** @deprecated */
"andThen"<T>(function0: $Function$$Type<character, T>): $Function<K, T>
"andThenByte"(char2ByteFunction0: $Char2ByteFunction$$Type): $Object2ByteFunction<K>
"andThenChar"(char2CharFunction0: $Char2CharFunction$$Type): $Object2CharFunction<K>
"andThenDouble"(char2DoubleFunction0: $Char2DoubleFunction$$Type): $Object2DoubleFunction<K>
"andThenFloat"(char2FloatFunction0: $Char2FloatFunction$$Type): $Object2FloatFunction<K>
"andThenInt"(char2IntFunction0: $Char2IntFunction$$Type): $Object2IntFunction<K>
"andThenLong"(char2LongFunction0: $Char2LongFunction$$Type): $Object2LongFunction<K>
"andThenObject"<T>(char2ObjectFunction0: $Char2ObjectFunction$$Type<T>): $Object2ObjectFunction<K, T>
"andThenReference"<T>(char2ReferenceFunction0: $Char2ReferenceFunction$$Type<T>): $Object2ReferenceFunction<K, T>
"andThenShort"(char2ShortFunction0: $Char2ShortFunction$$Type): $Object2ShortFunction<K>
"apply"(k0: K): character
"applyAsInt"(k0: K): integer
"clear"(): void
"compose"<V>(function0: $Function$$Type<V, K>): $Function<V, character>
"composeByte"(byte2ObjectFunction0: $Byte2ObjectFunction$$Type<K>): $Byte2CharFunction
"composeChar"(char2ObjectFunction0: $Char2ObjectFunction$$Type<K>): $Char2CharFunction
"composeDouble"(double2ObjectFunction0: $Double2ObjectFunction$$Type<K>): $Double2CharFunction
"composeFloat"(float2ObjectFunction0: $Float2ObjectFunction$$Type<K>): $Float2CharFunction
"composeInt"(int2ObjectFunction0: $Int2ObjectFunction$$Type<K>): $Int2CharFunction
"composeLong"(long2ObjectFunction0: $Long2ObjectFunction$$Type<K>): $Long2CharFunction
"composeObject"<T>(object2ObjectFunction0: $Object2ObjectFunction$$Type<T, K>): $Object2CharFunction<T>
"composeReference"<T>(reference2ObjectFunction0: $Reference2ObjectFunction$$Type<T, K>): $Reference2CharFunction<T>
"composeShort"(short2ObjectFunction0: $Short2ObjectFunction$$Type<K>): $Short2CharFunction
"containsKey"(object0: any): boolean
"defaultReturnValue"(): character
"defaultReturnValue"(char0: character): void
/** @deprecated */
"get"(object0: any): character
"getChar"(object0: any): character
"getOrDefault"(object0: any, char1: character): character
/** @deprecated */
"getOrDefault"(object0: any, character1: character): character
/** @deprecated */
"put"(k0: K, character1: character): character
"put"(k0: K, char1: character): character
"removeChar"(object0: any): character
"size"(): integer
}

export namespace $Object2CharFunction {
function identity<T>(): $Function<T, T>
}
export abstract class $Object2CharFunction$$Static<K = any> implements $Object2CharFunction<K> {
static "identity"<T>(): $Function<T, T>
}
}

declare module "it.unimi.dsi.fastutil.objects.AbstractObject2ByteSortedMap" {
import { $Byte2FloatFunction$$Type } from "it.unimi.dsi.fastutil.bytes.Byte2FloatFunction"
import { $Byte2LongFunction$$Type } from "it.unimi.dsi.fastutil.bytes.Byte2LongFunction"
import { $Int2ByteFunction } from "it.unimi.dsi.fastutil.ints.Int2ByteFunction"
import { $BiFunction$$Type } from "java.util.function.BiFunction"
import { $Float2ByteFunction } from "it.unimi.dsi.fastutil.floats.Float2ByteFunction"
import { $IntBinaryOperator$$Type } from "java.util.function.IntBinaryOperator"
import { $Double2ObjectFunction$$Type } from "it.unimi.dsi.fastutil.doubles.Double2ObjectFunction"
import { $Object2ObjectFunction, $Object2ObjectFunction$$Type } from "it.unimi.dsi.fastutil.objects.Object2ObjectFunction"
import { $Function, $Function$$Type } from "java.util.function.Function"
import { $Object2ByteSortedMap } from "it.unimi.dsi.fastutil.objects.Object2ByteSortedMap"
import { $Object2LongFunction } from "it.unimi.dsi.fastutil.objects.Object2LongFunction"
import { $Double2ByteFunction } from "it.unimi.dsi.fastutil.doubles.Double2ByteFunction"
import { $Object2DoubleFunction } from "it.unimi.dsi.fastutil.objects.Object2DoubleFunction"
import { $Reference2ByteFunction } from "it.unimi.dsi.fastutil.objects.Reference2ByteFunction"
import { $Byte2DoubleFunction$$Type } from "it.unimi.dsi.fastutil.bytes.Byte2DoubleFunction"
import { $Object2FloatFunction } from "it.unimi.dsi.fastutil.objects.Object2FloatFunction"
import { $Short2ByteFunction } from "it.unimi.dsi.fastutil.shorts.Short2ByteFunction"
import { $Object2IntFunction } from "it.unimi.dsi.fastutil.objects.Object2IntFunction"
import { $Map, $Map$$Type } from "java.util.Map"
import { $BiConsumer$$Type } from "java.util.function.BiConsumer"
import { $ByteBinaryOperator$$Type } from "it.unimi.dsi.fastutil.bytes.ByteBinaryOperator"
import { $Reference2ObjectFunction$$Type } from "it.unimi.dsi.fastutil.objects.Reference2ObjectFunction"
import { $Map$Entry, $Map$Entry$$Type } from "java.util.Map$Entry"
import { $Byte2ObjectFunction$$Type } from "it.unimi.dsi.fastutil.bytes.Byte2ObjectFunction"
import { $AbstractObject2ByteMap } from "it.unimi.dsi.fastutil.objects.AbstractObject2ByteMap"
import { $Short2ObjectFunction$$Type } from "it.unimi.dsi.fastutil.shorts.Short2ObjectFunction"
import { $Object2ByteFunction, $Object2ByteFunction$$Type } from "it.unimi.dsi.fastutil.objects.Object2ByteFunction"
import { $Byte2ReferenceFunction$$Type } from "it.unimi.dsi.fastutil.bytes.Byte2ReferenceFunction"
import { $Char2ByteFunction } from "it.unimi.dsi.fastutil.chars.Char2ByteFunction"
import { $Byte2ShortFunction$$Type } from "it.unimi.dsi.fastutil.bytes.Byte2ShortFunction"
import { $Int2ObjectFunction$$Type } from "it.unimi.dsi.fastutil.ints.Int2ObjectFunction"
import { $Long2ObjectFunction$$Type } from "it.unimi.dsi.fastutil.longs.Long2ObjectFunction"
import { $ToIntFunction$$Type } from "java.util.function.ToIntFunction"
import { $Byte2CharFunction$$Type } from "it.unimi.dsi.fastutil.bytes.Byte2CharFunction"
import { $Object2ReferenceFunction } from "it.unimi.dsi.fastutil.objects.Object2ReferenceFunction"
import { $Float2ObjectFunction$$Type } from "it.unimi.dsi.fastutil.floats.Float2ObjectFunction"
import { $Long2ByteFunction } from "it.unimi.dsi.fastutil.longs.Long2ByteFunction"
import { $Char2ObjectFunction$$Type } from "it.unimi.dsi.fastutil.chars.Char2ObjectFunction"
import { $Object2ShortFunction } from "it.unimi.dsi.fastutil.objects.Object2ShortFunction"
import { $Comparator } from "java.util.Comparator"
import { $Byte2ByteFunction, $Byte2ByteFunction$$Type } from "it.unimi.dsi.fastutil.bytes.Byte2ByteFunction"
import { $Object2CharFunction } from "it.unimi.dsi.fastutil.objects.Object2CharFunction"
import { $Byte2IntFunction$$Type } from "it.unimi.dsi.fastutil.bytes.Byte2IntFunction"

export class $AbstractObject2ByteSortedMap<K = any> extends $AbstractObject2ByteMap<K> implements $Object2ByteSortedMap<K> {
/** @deprecated */
public "andThen"<T>(function0: $Function$$Type<byte, T>): $Function<K, T>
public "andThenByte"(byte2ByteFunction0: $Byte2ByteFunction$$Type): $Object2ByteFunction<K>
public "andThenChar"(byte2CharFunction0: $Byte2CharFunction$$Type): $Object2CharFunction<K>
public "andThenDouble"(byte2DoubleFunction0: $Byte2DoubleFunction$$Type): $Object2DoubleFunction<K>
public "andThenFloat"(byte2FloatFunction0: $Byte2FloatFunction$$Type): $Object2FloatFunction<K>
public "andThenInt"(byte2IntFunction0: $Byte2IntFunction$$Type): $Object2IntFunction<K>
public "andThenLong"(byte2LongFunction0: $Byte2LongFunction$$Type): $Object2LongFunction<K>
public "andThenObject"<T>(byte2ObjectFunction0: $Byte2ObjectFunction$$Type<T>): $Object2ObjectFunction<K, T>
public "andThenReference"<T>(byte2ReferenceFunction0: $Byte2ReferenceFunction$$Type<T>): $Object2ReferenceFunction<K, T>
public "andThenShort"(byte2ShortFunction0: $Byte2ShortFunction$$Type): $Object2ShortFunction<K>
public "apply"(k0: K): byte
public "applyAsInt"(k0: K): integer
public "clear"(): void
public "comparator"(): $Comparator<K>
public "compose"<V>(function0: $Function$$Type<V, K>): $Function<V, byte>
public "composeByte"(byte2ObjectFunction0: $Byte2ObjectFunction$$Type<K>): $Byte2ByteFunction
public "composeChar"(char2ObjectFunction0: $Char2ObjectFunction$$Type<K>): $Char2ByteFunction
public "composeDouble"(double2ObjectFunction0: $Double2ObjectFunction$$Type<K>): $Double2ByteFunction
public "composeFloat"(float2ObjectFunction0: $Float2ObjectFunction$$Type<K>): $Float2ByteFunction
public "composeInt"(int2ObjectFunction0: $Int2ObjectFunction$$Type<K>): $Int2ByteFunction
public "composeLong"(long2ObjectFunction0: $Long2ObjectFunction$$Type<K>): $Long2ByteFunction
public "composeObject"<T>(object2ObjectFunction0: $Object2ObjectFunction$$Type<T, K>): $Object2ByteFunction<T>
public "composeReference"<T>(reference2ObjectFunction0: $Reference2ObjectFunction$$Type<T, K>): $Reference2ByteFunction<T>
public "composeShort"(short2ObjectFunction0: $Short2ObjectFunction$$Type<K>): $Short2ByteFunction
public "compute"(k0: K, biFunction1: $BiFunction$$Type<K, byte, byte>): byte
public "computeByte"(k0: K, biFunction1: $BiFunction$$Type<K, byte, byte>): byte
/** @deprecated */
public "computeByteIfAbsent"(k0: K, toIntFunction1: $ToIntFunction$$Type<K>): byte
/** @deprecated */
public "computeByteIfAbsentPartial"(k0: K, object2ByteFunction1: $Object2ByteFunction$$Type<K>): byte
public "computeByteIfPresent"(k0: K, biFunction1: $BiFunction$$Type<K, byte, byte>): byte
public "computeIfAbsent"(k0: K, toIntFunction1: $ToIntFunction$$Type<K>): byte
public "computeIfAbsent"(k0: K, object2ByteFunction1: $Object2ByteFunction$$Type<K>): byte
public "computeIfAbsent"(k0: K, function1: $Function$$Type<K, byte>): byte
public "computeIfPresent"(k0: K, biFunction1: $BiFunction$$Type<K, byte, byte>): byte
/** @deprecated */
public "containsValue"(object0: any): boolean
public static "copyOf"<K, V>(map0: $Map$$Type<K, V>): $Map<K, V>
public "defaultReturnValue"(byte0: byte): void
public "defaultReturnValue"(): byte
public static "entry"<K, V>(k0: K, v1: V): $Map$Entry<K, V>
public "firstKey"(): K
public "forEach"(biConsumer0: $BiConsumer$$Type<K, byte>): void
public "getByte"(object0: any): byte
public "getOrDefault"(object0: any, byte1: byte): byte
/** @deprecated */
public "getOrDefault"(object0: any, byte1: byte): byte
public static "identity"<T>(): $Function<T, T>
public "lastKey"(): K
/** @deprecated */
public "merge"(k0: K, byte1: byte, biFunction2: $BiFunction$$Type<byte, byte, byte>): byte
public "merge"(k0: K, byte1: byte, biFunction2: $BiFunction$$Type<byte, byte, byte>): byte
/** @deprecated */
public "mergeByte"(k0: K, byte1: byte, biFunction2: $BiFunction$$Type<byte, byte, byte>): byte
public "mergeByte"(k0: K, byte1: byte, byteBinaryOperator2: $ByteBinaryOperator$$Type): byte
public "mergeByte"(k0: K, byte1: byte, intBinaryOperator2: $IntBinaryOperator$$Type): byte
public static "of"<K, V>(k0: K, v1: V, k2: K, v3: V, k4: K, v5: V, k6: K, v7: V, k8: K, v9: V): $Map<K, V>
public static "of"<K, V>(k0: K, v1: V, k2: K, v3: V, k4: K, v5: V, k6: K, v7: V): $Map<K, V>
public static "of"<K, V>(k0: K, v1: V, k2: K, v3: V, k4: K, v5: V): $Map<K, V>
public static "of"<K, V>(): $Map<K, V>
public static "of"<K, V>(k0: K, v1: V, k2: K, v3: V): $Map<K, V>
public static "of"<K, V>(k0: K, v1: V): $Map<K, V>
public static "of"<K, V>(k0: K, v1: V, k2: K, v3: V, k4: K, v5: V, k6: K, v7: V, k8: K, v9: V, k10: K, v11: V, k12: K, v13: V, k14: K, v15: V, k16: K, v17: V, k18: K, v19: V): $Map<K, V>
public static "of"<K, V>(k0: K, v1: V, k2: K, v3: V, k4: K, v5: V, k6: K, v7: V, k8: K, v9: V, k10: K, v11: V, k12: K, v13: V, k14: K, v15: V, k16: K, v17: V): $Map<K, V>
public static "of"<K, V>(k0: K, v1: V, k2: K, v3: V, k4: K, v5: V, k6: K, v7: V, k8: K, v9: V, k10: K, v11: V, k12: K, v13: V, k14: K, v15: V): $Map<K, V>
public static "of"<K, V>(k0: K, v1: V, k2: K, v3: V, k4: K, v5: V, k6: K, v7: V, k8: K, v9: V, k10: K, v11: V, k12: K, v13: V): $Map<K, V>
public static "of"<K, V>(k0: K, v1: V, k2: K, v3: V, k4: K, v5: V, k6: K, v7: V, k8: K, v9: V, k10: K, v11: V): $Map<K, V>
public static "ofEntries"<K, V>(...entry0s: $Map$Entry$$Type<K, V>[]): $Map<K, V>
/** @deprecated */
public "put"(k0: K, byte1: byte): byte
public "put"(k0: K, byte1: byte): byte
public "putIfAbsent"(k0: K, byte1: byte): byte
/** @deprecated */
public "putIfAbsent"(k0: K, byte1: byte): byte
public "remove"(object0: any, byte1: byte): boolean
/** @deprecated */
public "remove"(object0: any, object1: any): boolean
public "removeByte"(object0: any): byte
/** @deprecated */
public "replace"(k0: K, byte1: byte, byte2: byte): boolean
public "replace"(k0: K, byte1: byte, byte2: byte): boolean
public "replace"(k0: K, byte1: byte): byte
/** @deprecated */
public "replace"(k0: K, byte1: byte): byte
public "replaceAll"(biFunction0: $BiFunction$$Type<K, byte, byte>): void
public "size"(): integer
}
}

declare module "it.unimi.dsi.fastutil.objects.Object2LongFunction" {
import { $Long2ShortFunction$$Type } from "it.unimi.dsi.fastutil.longs.Long2ShortFunction"
import { $Byte2LongFunction } from "it.unimi.dsi.fastutil.bytes.Byte2LongFunction"
import { $Char2LongFunction } from "it.unimi.dsi.fastutil.chars.Char2LongFunction"
import { $Double2ObjectFunction$$Type } from "it.unimi.dsi.fastutil.doubles.Double2ObjectFunction"
import { $Object2ObjectFunction, $Object2ObjectFunction$$Type } from "it.unimi.dsi.fastutil.objects.Object2ObjectFunction"
import { $Function, $Function$$Type } from "java.util.function.Function"
import { $Object2DoubleFunction } from "it.unimi.dsi.fastutil.objects.Object2DoubleFunction"
import { $Long2CharFunction$$Type } from "it.unimi.dsi.fastutil.longs.Long2CharFunction"
import { $Object2FloatFunction } from "it.unimi.dsi.fastutil.objects.Object2FloatFunction"
import { $Object2IntFunction } from "it.unimi.dsi.fastutil.objects.Object2IntFunction"
import { $Reference2LongFunction } from "it.unimi.dsi.fastutil.objects.Reference2LongFunction"
import { $Short2LongFunction } from "it.unimi.dsi.fastutil.shorts.Short2LongFunction"
import { $Long2IntFunction$$Type } from "it.unimi.dsi.fastutil.longs.Long2IntFunction"
import { $ToLongFunction } from "java.util.function.ToLongFunction"
import { $Long2FloatFunction$$Type } from "it.unimi.dsi.fastutil.longs.Long2FloatFunction"
import { $Reference2ObjectFunction$$Type } from "it.unimi.dsi.fastutil.objects.Reference2ObjectFunction"
import { $Byte2ObjectFunction$$Type } from "it.unimi.dsi.fastutil.bytes.Byte2ObjectFunction"
import { $Short2ObjectFunction$$Type } from "it.unimi.dsi.fastutil.shorts.Short2ObjectFunction"
import { $Function as $Function$0 } from "it.unimi.dsi.fastutil.Function"
import { $Object2ByteFunction } from "it.unimi.dsi.fastutil.objects.Object2ByteFunction"
import { $Float2LongFunction } from "it.unimi.dsi.fastutil.floats.Float2LongFunction"
import { $Int2ObjectFunction$$Type } from "it.unimi.dsi.fastutil.ints.Int2ObjectFunction"
import { $Long2ObjectFunction$$Type } from "it.unimi.dsi.fastutil.longs.Long2ObjectFunction"
import { $Long2DoubleFunction$$Type } from "it.unimi.dsi.fastutil.longs.Long2DoubleFunction"
import { $Int2LongFunction } from "it.unimi.dsi.fastutil.ints.Int2LongFunction"
import { $Long2LongFunction, $Long2LongFunction$$Type } from "it.unimi.dsi.fastutil.longs.Long2LongFunction"
import { $Double2LongFunction } from "it.unimi.dsi.fastutil.doubles.Double2LongFunction"
import { $Object2ReferenceFunction } from "it.unimi.dsi.fastutil.objects.Object2ReferenceFunction"
import { $Float2ObjectFunction$$Type } from "it.unimi.dsi.fastutil.floats.Float2ObjectFunction"
import { $Long2ByteFunction$$Type } from "it.unimi.dsi.fastutil.longs.Long2ByteFunction"
import { $Long2ReferenceFunction$$Type } from "it.unimi.dsi.fastutil.longs.Long2ReferenceFunction"
import { $Char2ObjectFunction$$Type } from "it.unimi.dsi.fastutil.chars.Char2ObjectFunction"
import { $Object2ShortFunction } from "it.unimi.dsi.fastutil.objects.Object2ShortFunction"
import { $Object2CharFunction } from "it.unimi.dsi.fastutil.objects.Object2CharFunction"

export interface $Object2LongFunction<K = any> extends $Function$0<K, long>, $ToLongFunction<K> {
/** @deprecated */
"andThen"<T>(function0: $Function$$Type<long, T>): $Function<K, T>
"andThenByte"(long2ByteFunction0: $Long2ByteFunction$$Type): $Object2ByteFunction<K>
"andThenChar"(long2CharFunction0: $Long2CharFunction$$Type): $Object2CharFunction<K>
"andThenDouble"(long2DoubleFunction0: $Long2DoubleFunction$$Type): $Object2DoubleFunction<K>
"andThenFloat"(long2FloatFunction0: $Long2FloatFunction$$Type): $Object2FloatFunction<K>
"andThenInt"(long2IntFunction0: $Long2IntFunction$$Type): $Object2IntFunction<K>
"andThenLong"(long2LongFunction0: $Long2LongFunction$$Type): $Object2LongFunction<K>
"andThenObject"<T>(long2ObjectFunction0: $Long2ObjectFunction$$Type<T>): $Object2ObjectFunction<K, T>
"andThenReference"<T>(long2ReferenceFunction0: $Long2ReferenceFunction$$Type<T>): $Object2ReferenceFunction<K, T>
"andThenShort"(long2ShortFunction0: $Long2ShortFunction$$Type): $Object2ShortFunction<K>
"apply"(k0: K): long
"applyAsLong"(k0: K): long
"clear"(): void
"compose"<V>(function0: $Function$$Type<V, K>): $Function<V, long>
"composeByte"(byte2ObjectFunction0: $Byte2ObjectFunction$$Type<K>): $Byte2LongFunction
"composeChar"(char2ObjectFunction0: $Char2ObjectFunction$$Type<K>): $Char2LongFunction
"composeDouble"(double2ObjectFunction0: $Double2ObjectFunction$$Type<K>): $Double2LongFunction
"composeFloat"(float2ObjectFunction0: $Float2ObjectFunction$$Type<K>): $Float2LongFunction
"composeInt"(int2ObjectFunction0: $Int2ObjectFunction$$Type<K>): $Int2LongFunction
"composeLong"(long2ObjectFunction0: $Long2ObjectFunction$$Type<K>): $Long2LongFunction
"composeObject"<T>(object2ObjectFunction0: $Object2ObjectFunction$$Type<T, K>): $Object2LongFunction<T>
"composeReference"<T>(reference2ObjectFunction0: $Reference2ObjectFunction$$Type<T, K>): $Reference2LongFunction<T>
"composeShort"(short2ObjectFunction0: $Short2ObjectFunction$$Type<K>): $Short2LongFunction
"containsKey"(object0: any): boolean
"defaultReturnValue"(): long
"defaultReturnValue"(long0: long): void
/** @deprecated */
"get"(object0: any): long
"getLong"(object0: any): long
"getOrDefault"(object0: any, long1: long): long
/** @deprecated */
"getOrDefault"(object0: any, long1: long): long
/** @deprecated */
"put"(k0: K, long1: long): long
"put"(k0: K, long1: long): long
"removeLong"(object0: any): long
"size"(): integer
}

export namespace $Object2LongFunction {
function identity<T>(): $Function<T, T>
}
export abstract class $Object2LongFunction$$Static<K = any> implements $Object2LongFunction<K> {
static "identity"<T>(): $Function<T, T>
}
}

declare module "it.unimi.dsi.fastutil.objects.ObjectBidirectionalIterator" {
import { $Consumer$$Type } from "java.util.function.Consumer"
import { $BidirectionalIterator } from "it.unimi.dsi.fastutil.BidirectionalIterator"
import { $ObjectIterator } from "it.unimi.dsi.fastutil.objects.ObjectIterator"

export interface $ObjectBidirectionalIterator<K = any> extends $ObjectIterator<K>, $BidirectionalIterator<K> {
"back"(int0: integer): integer
"forEachRemaining"(consumer0: $Consumer$$Type<K>): void
"hasNext"(): boolean
"hasPrevious"(): boolean
"next"(): K
"previous"(): K
"remove"(): void
"skip"(int0: integer): integer
}

export namespace $ObjectBidirectionalIterator {
const probejs$$marker: never
}
export abstract class $ObjectBidirectionalIterator$$Static<K = any> implements $ObjectBidirectionalIterator<K> {
}
}

declare module "it.unimi.dsi.fastutil.objects.AbstractObject2ObjectMap" {
import { $BiFunction$$Type } from "java.util.function.BiFunction"
import { $Object2ObjectMap } from "it.unimi.dsi.fastutil.objects.Object2ObjectMap"
import { $Object2ObjectMap$Entry } from "it.unimi.dsi.fastutil.objects.Object2ObjectMap$Entry"
import { $Double2ObjectFunction, $Double2ObjectFunction$$Type } from "it.unimi.dsi.fastutil.doubles.Double2ObjectFunction"
import { $Object2ObjectFunction, $Object2ObjectFunction$$Type } from "it.unimi.dsi.fastutil.objects.Object2ObjectFunction"
import { $Function, $Function$$Type } from "java.util.function.Function"
import { $Object2LongFunction, $Object2LongFunction$$Type } from "it.unimi.dsi.fastutil.objects.Object2LongFunction"
import { $Object2DoubleFunction, $Object2DoubleFunction$$Type } from "it.unimi.dsi.fastutil.objects.Object2DoubleFunction"
import { $Object2FloatFunction, $Object2FloatFunction$$Type } from "it.unimi.dsi.fastutil.objects.Object2FloatFunction"
import { $Object2IntFunction, $Object2IntFunction$$Type } from "it.unimi.dsi.fastutil.objects.Object2IntFunction"
import { $Map, $Map$$Type } from "java.util.Map"
import { $BiConsumer$$Type } from "java.util.function.BiConsumer"
import { $Reference2ObjectFunction, $Reference2ObjectFunction$$Type } from "it.unimi.dsi.fastutil.objects.Reference2ObjectFunction"
import { $Map$Entry, $Map$Entry$$Type } from "java.util.Map$Entry"
import { $Byte2ObjectFunction, $Byte2ObjectFunction$$Type } from "it.unimi.dsi.fastutil.bytes.Byte2ObjectFunction"
import { $Short2ObjectFunction, $Short2ObjectFunction$$Type } from "it.unimi.dsi.fastutil.shorts.Short2ObjectFunction"
import { $Object2ByteFunction, $Object2ByteFunction$$Type } from "it.unimi.dsi.fastutil.objects.Object2ByteFunction"
import { $Int2ObjectFunction, $Int2ObjectFunction$$Type } from "it.unimi.dsi.fastutil.ints.Int2ObjectFunction"
import { $Long2ObjectFunction, $Long2ObjectFunction$$Type } from "it.unimi.dsi.fastutil.longs.Long2ObjectFunction"
import { $AbstractObject2ObjectFunction } from "it.unimi.dsi.fastutil.objects.AbstractObject2ObjectFunction"
import { $ObjectSet } from "it.unimi.dsi.fastutil.objects.ObjectSet"
import { $ObjectCollection } from "it.unimi.dsi.fastutil.objects.ObjectCollection"
import { $Serializable } from "java.io.Serializable"
import { $Object2ReferenceFunction, $Object2ReferenceFunction$$Type } from "it.unimi.dsi.fastutil.objects.Object2ReferenceFunction"
import { $Float2ObjectFunction, $Float2ObjectFunction$$Type } from "it.unimi.dsi.fastutil.floats.Float2ObjectFunction"
import { $Char2ObjectFunction, $Char2ObjectFunction$$Type } from "it.unimi.dsi.fastutil.chars.Char2ObjectFunction"
import { $Object2ShortFunction, $Object2ShortFunction$$Type } from "it.unimi.dsi.fastutil.objects.Object2ShortFunction"
import { $Object2CharFunction, $Object2CharFunction$$Type } from "it.unimi.dsi.fastutil.objects.Object2CharFunction"

export class $AbstractObject2ObjectMap<K = any, V = any> extends $AbstractObject2ObjectFunction<K, V> implements $Object2ObjectMap<K, V>, $Serializable {
public "andThen"<V>(function0: $Function$$Type<V, V>): $Function<K, V>
public "andThenByte"(object2ByteFunction0: $Object2ByteFunction$$Type<V>): $Object2ByteFunction<K>
public "andThenChar"(object2CharFunction0: $Object2CharFunction$$Type<V>): $Object2CharFunction<K>
public "andThenDouble"(object2DoubleFunction0: $Object2DoubleFunction$$Type<V>): $Object2DoubleFunction<K>
public "andThenFloat"(object2FloatFunction0: $Object2FloatFunction$$Type<V>): $Object2FloatFunction<K>
public "andThenInt"(object2IntFunction0: $Object2IntFunction$$Type<V>): $Object2IntFunction<K>
public "andThenLong"(object2LongFunction0: $Object2LongFunction$$Type<V>): $Object2LongFunction<K>
public "andThenObject"<T>(object2ObjectFunction0: $Object2ObjectFunction$$Type<V, T>): $Object2ObjectFunction<K, T>
public "andThenReference"<T>(object2ReferenceFunction0: $Object2ReferenceFunction$$Type<V, T>): $Object2ReferenceFunction<K, T>
public "andThenShort"(object2ShortFunction0: $Object2ShortFunction$$Type<V>): $Object2ShortFunction<K>
public "apply"(k0: K): V
public "clear"(): void
public "compose"<V>(function0: $Function$$Type<V, K>): $Function<V, V>
public "composeByte"(byte2ObjectFunction0: $Byte2ObjectFunction$$Type<K>): $Byte2ObjectFunction<V>
public "composeChar"(char2ObjectFunction0: $Char2ObjectFunction$$Type<K>): $Char2ObjectFunction<V>
public "composeDouble"(double2ObjectFunction0: $Double2ObjectFunction$$Type<K>): $Double2ObjectFunction<V>
public "composeFloat"(float2ObjectFunction0: $Float2ObjectFunction$$Type<K>): $Float2ObjectFunction<V>
public "composeInt"(int2ObjectFunction0: $Int2ObjectFunction$$Type<K>): $Int2ObjectFunction<V>
public "composeLong"(long2ObjectFunction0: $Long2ObjectFunction$$Type<K>): $Long2ObjectFunction<V>
public "composeObject"<T>(object2ObjectFunction0: $Object2ObjectFunction$$Type<T, K>): $Object2ObjectFunction<T, V>
public "composeReference"<T>(reference2ObjectFunction0: $Reference2ObjectFunction$$Type<T, K>): $Reference2ObjectFunction<T, V>
public "composeShort"(short2ObjectFunction0: $Short2ObjectFunction$$Type<K>): $Short2ObjectFunction<V>
public "compute"(k0: K, biFunction1: $BiFunction$$Type<K, V, V>): V
public "computeIfAbsent"(k0: K, object2ObjectFunction1: $Object2ObjectFunction$$Type<K, V>): V
public "computeIfAbsent"(k0: K, function1: $Function$$Type<K, V>): V
public "computeIfPresent"(k0: K, biFunction1: $BiFunction$$Type<K, V, V>): V
/** @deprecated */
public "computeObjectIfAbsentPartial"(k0: K, object2ObjectFunction1: $Object2ObjectFunction$$Type<K, V>): V
public "containsKey"(object0: any): boolean
public "containsValue"(object0: any): boolean
public static "copyOf"<K, V>(map0: $Map$$Type<K, V>): $Map<K, V>
public "defaultReturnValue"(v0: V): void
public "defaultReturnValue"(): V
public static "entry"<K, V>(k0: K, v1: V): $Map$Entry<K, V>
public "entrySet"(): $ObjectSet<$Map$Entry<K, V>>
public "forEach"(biConsumer0: $BiConsumer$$Type<K, V>): void
public "get"(object0: any): V
public "getOrDefault"(object0: any, v1: V): V
public static "identity"<T>(): $Function<T, T>
public "isEmpty"(): boolean
public "merge"(k0: K, v1: V, biFunction2: $BiFunction$$Type<V, V, V>): V
public "object2ObjectEntrySet"(): $ObjectSet<$Object2ObjectMap$Entry<K, V>>
public static "of"<K, V>(k0: K, v1: V, k2: K, v3: V, k4: K, v5: V, k6: K, v7: V, k8: K, v9: V): $Map<K, V>
public static "of"<K, V>(k0: K, v1: V, k2: K, v3: V, k4: K, v5: V, k6: K, v7: V): $Map<K, V>
public static "of"<K, V>(k0: K, v1: V, k2: K, v3: V, k4: K, v5: V): $Map<K, V>
public static "of"<K, V>(): $Map<K, V>
public static "of"<K, V>(k0: K, v1: V, k2: K, v3: V): $Map<K, V>
public static "of"<K, V>(k0: K, v1: V): $Map<K, V>
public static "of"<K, V>(k0: K, v1: V, k2: K, v3: V, k4: K, v5: V, k6: K, v7: V, k8: K, v9: V, k10: K, v11: V, k12: K, v13: V, k14: K, v15: V, k16: K, v17: V, k18: K, v19: V): $Map<K, V>
public static "of"<K, V>(k0: K, v1: V, k2: K, v3: V, k4: K, v5: V, k6: K, v7: V, k8: K, v9: V, k10: K, v11: V, k12: K, v13: V, k14: K, v15: V, k16: K, v17: V): $Map<K, V>
public static "of"<K, V>(k0: K, v1: V, k2: K, v3: V, k4: K, v5: V, k6: K, v7: V, k8: K, v9: V, k10: K, v11: V, k12: K, v13: V, k14: K, v15: V): $Map<K, V>
public static "of"<K, V>(k0: K, v1: V, k2: K, v3: V, k4: K, v5: V, k6: K, v7: V, k8: K, v9: V, k10: K, v11: V, k12: K, v13: V): $Map<K, V>
public static "of"<K, V>(k0: K, v1: V, k2: K, v3: V, k4: K, v5: V, k6: K, v7: V, k8: K, v9: V, k10: K, v11: V): $Map<K, V>
public static "ofEntries"<K, V>(...entry0s: $Map$Entry$$Type<K, V>[]): $Map<K, V>
public "put"(k0: K, v1: V): V
public "putAll"(map0: $Map$$Type<K, V>): void
public "putIfAbsent"(k0: K, v1: V): V
public "remove"(object0: any): V
public "remove"(object0: any, object1: any): boolean
public "replace"(k0: K, v1: V): V
public "replace"(k0: K, v1: V, v2: V): boolean
public "replaceAll"(biFunction0: $BiFunction$$Type<K, V, V>): void
public "size"(): integer
public "values"(): $ObjectCollection<V>
[index: string | number]: V
get "empty"(): boolean
}
}

declare module "it.unimi.dsi.fastutil.objects.ObjectBidirectionalIterable" {
import { $Consumer$$Type } from "java.util.function.Consumer"
import { $ObjectSpliterator } from "it.unimi.dsi.fastutil.objects.ObjectSpliterator"
import { $ObjectIterable } from "it.unimi.dsi.fastutil.objects.ObjectIterable"
import { $ObjectBidirectionalIterator } from "it.unimi.dsi.fastutil.objects.ObjectBidirectionalIterator"

export interface $ObjectBidirectionalIterable<K = any> extends $ObjectIterable<K> {
"forEach"(consumer0: $Consumer$$Type<K>): void
"iterator"(): $ObjectBidirectionalIterator<K>
"spliterator"(): $ObjectSpliterator<K>
[Symbol.iterator](): IterableIterator<K>;
}

export namespace $ObjectBidirectionalIterable {
const probejs$$marker: never
}
export abstract class $ObjectBidirectionalIterable$$Static<K = any> implements $ObjectBidirectionalIterable<K> {
}
}

declare module "it.unimi.dsi.fastutil.objects.AbstractObject2ObjectFunction" {
import { $Reference2ObjectFunction, $Reference2ObjectFunction$$Type } from "it.unimi.dsi.fastutil.objects.Reference2ObjectFunction"
import { $Byte2ObjectFunction, $Byte2ObjectFunction$$Type } from "it.unimi.dsi.fastutil.bytes.Byte2ObjectFunction"
import { $Short2ObjectFunction, $Short2ObjectFunction$$Type } from "it.unimi.dsi.fastutil.shorts.Short2ObjectFunction"
import { $Object2ByteFunction, $Object2ByteFunction$$Type } from "it.unimi.dsi.fastutil.objects.Object2ByteFunction"
import { $Int2ObjectFunction, $Int2ObjectFunction$$Type } from "it.unimi.dsi.fastutil.ints.Int2ObjectFunction"
import { $Long2ObjectFunction, $Long2ObjectFunction$$Type } from "it.unimi.dsi.fastutil.longs.Long2ObjectFunction"
import { $Double2ObjectFunction, $Double2ObjectFunction$$Type } from "it.unimi.dsi.fastutil.doubles.Double2ObjectFunction"
import { $Object2ObjectFunction, $Object2ObjectFunction$$Type } from "it.unimi.dsi.fastutil.objects.Object2ObjectFunction"
import { $Function, $Function$$Type } from "java.util.function.Function"
import { $Object2LongFunction, $Object2LongFunction$$Type } from "it.unimi.dsi.fastutil.objects.Object2LongFunction"
import { $Serializable } from "java.io.Serializable"
import { $Object2DoubleFunction, $Object2DoubleFunction$$Type } from "it.unimi.dsi.fastutil.objects.Object2DoubleFunction"
import { $Object2ReferenceFunction, $Object2ReferenceFunction$$Type } from "it.unimi.dsi.fastutil.objects.Object2ReferenceFunction"
import { $Float2ObjectFunction, $Float2ObjectFunction$$Type } from "it.unimi.dsi.fastutil.floats.Float2ObjectFunction"
import { $Object2FloatFunction, $Object2FloatFunction$$Type } from "it.unimi.dsi.fastutil.objects.Object2FloatFunction"
import { $Char2ObjectFunction, $Char2ObjectFunction$$Type } from "it.unimi.dsi.fastutil.chars.Char2ObjectFunction"
import { $Object2IntFunction, $Object2IntFunction$$Type } from "it.unimi.dsi.fastutil.objects.Object2IntFunction"
import { $Object2ShortFunction, $Object2ShortFunction$$Type } from "it.unimi.dsi.fastutil.objects.Object2ShortFunction"
import { $Object2CharFunction, $Object2CharFunction$$Type } from "it.unimi.dsi.fastutil.objects.Object2CharFunction"

export class $AbstractObject2ObjectFunction<K = any, V = any> implements $Object2ObjectFunction<K, V>, $Serializable {
public "andThen"<V>(function0: $Function$$Type<V, V>): $Function<K, V>
public "andThenByte"(object2ByteFunction0: $Object2ByteFunction$$Type<V>): $Object2ByteFunction<K>
public "andThenChar"(object2CharFunction0: $Object2CharFunction$$Type<V>): $Object2CharFunction<K>
public "andThenDouble"(object2DoubleFunction0: $Object2DoubleFunction$$Type<V>): $Object2DoubleFunction<K>
public "andThenFloat"(object2FloatFunction0: $Object2FloatFunction$$Type<V>): $Object2FloatFunction<K>
public "andThenInt"(object2IntFunction0: $Object2IntFunction$$Type<V>): $Object2IntFunction<K>
public "andThenLong"(object2LongFunction0: $Object2LongFunction$$Type<V>): $Object2LongFunction<K>
public "andThenObject"<T>(object2ObjectFunction0: $Object2ObjectFunction$$Type<V, T>): $Object2ObjectFunction<K, T>
public "andThenReference"<T>(object2ReferenceFunction0: $Object2ReferenceFunction$$Type<V, T>): $Object2ReferenceFunction<K, T>
public "andThenShort"(object2ShortFunction0: $Object2ShortFunction$$Type<V>): $Object2ShortFunction<K>
public "apply"(k0: K): V
public "clear"(): void
public "compose"<V>(function0: $Function$$Type<V, K>): $Function<V, V>
public "composeByte"(byte2ObjectFunction0: $Byte2ObjectFunction$$Type<K>): $Byte2ObjectFunction<V>
public "composeChar"(char2ObjectFunction0: $Char2ObjectFunction$$Type<K>): $Char2ObjectFunction<V>
public "composeDouble"(double2ObjectFunction0: $Double2ObjectFunction$$Type<K>): $Double2ObjectFunction<V>
public "composeFloat"(float2ObjectFunction0: $Float2ObjectFunction$$Type<K>): $Float2ObjectFunction<V>
public "composeInt"(int2ObjectFunction0: $Int2ObjectFunction$$Type<K>): $Int2ObjectFunction<V>
public "composeLong"(long2ObjectFunction0: $Long2ObjectFunction$$Type<K>): $Long2ObjectFunction<V>
public "composeObject"<T>(object2ObjectFunction0: $Object2ObjectFunction$$Type<T, K>): $Object2ObjectFunction<T, V>
public "composeReference"<T>(reference2ObjectFunction0: $Reference2ObjectFunction$$Type<T, K>): $Reference2ObjectFunction<T, V>
public "composeShort"(short2ObjectFunction0: $Short2ObjectFunction$$Type<K>): $Short2ObjectFunction<V>
public "containsKey"(object0: any): boolean
public "defaultReturnValue"(v0: V): void
public "defaultReturnValue"(): V
public "get"(object0: any): V
public "getOrDefault"(object0: any, v1: V): V
public static "identity"<T>(): $Function<T, T>
public "put"(k0: K, v1: V): V
public "remove"(object0: any): V
public "size"(): integer
}
}

declare module "it.unimi.dsi.fastutil.objects.AbstractObjectCollection" {
import { $Consumer$$Type } from "java.util.function.Consumer"
import { $AbstractCollection } from "java.util.AbstractCollection"
import { $Stream } from "java.util.stream.Stream"
import { $ObjectSpliterator } from "it.unimi.dsi.fastutil.objects.ObjectSpliterator"
import { $Predicate$$Type } from "java.util.function.Predicate"
import { $ObjectIterator } from "it.unimi.dsi.fastutil.objects.ObjectIterator"
import { $ObjectCollection } from "it.unimi.dsi.fastutil.objects.ObjectCollection"
import { $IntFunction$$Type } from "java.util.function.IntFunction"

export class $AbstractObjectCollection<K = any> extends $AbstractCollection<K> implements $ObjectCollection<K> {
public "equals"(object0: any): boolean
public "forEach"(consumer0: $Consumer$$Type<K>): void
public "hashCode"(): integer
public "iterator"(): $ObjectIterator<K>
public "parallelStream"(): $Stream<K>
public "removeIf"(predicate0: $Predicate$$Type<K>): boolean
public "spliterator"(): $ObjectSpliterator<K>
public "stream"(): $Stream<K>
public "toArray"<T>(intFunction0: $IntFunction$$Type<T[]>): T[]
}
}

declare module "it.unimi.dsi.fastutil.objects.Reference2ObjectFunction" {
import { $Double2ReferenceFunction$$Type } from "it.unimi.dsi.fastutil.doubles.Double2ReferenceFunction"
import { $Int2ReferenceFunction$$Type } from "it.unimi.dsi.fastutil.ints.Int2ReferenceFunction"
import { $Short2ReferenceFunction$$Type } from "it.unimi.dsi.fastutil.shorts.Short2ReferenceFunction"
import { $Double2ObjectFunction } from "it.unimi.dsi.fastutil.doubles.Double2ObjectFunction"
import { $Object2ObjectFunction, $Object2ObjectFunction$$Type } from "it.unimi.dsi.fastutil.objects.Object2ObjectFunction"
import { $Function, $Function$$Type } from "java.util.function.Function"
import { $Reference2FloatFunction } from "it.unimi.dsi.fastutil.objects.Reference2FloatFunction"
import { $Object2LongFunction$$Type } from "it.unimi.dsi.fastutil.objects.Object2LongFunction"
import { $Object2DoubleFunction$$Type } from "it.unimi.dsi.fastutil.objects.Object2DoubleFunction"
import { $Reference2ByteFunction } from "it.unimi.dsi.fastutil.objects.Reference2ByteFunction"
import { $Object2FloatFunction$$Type } from "it.unimi.dsi.fastutil.objects.Object2FloatFunction"
import { $Char2ReferenceFunction$$Type } from "it.unimi.dsi.fastutil.chars.Char2ReferenceFunction"
import { $Object2IntFunction$$Type } from "it.unimi.dsi.fastutil.objects.Object2IntFunction"
import { $Reference2LongFunction } from "it.unimi.dsi.fastutil.objects.Reference2LongFunction"
import { $Reference2IntFunction } from "it.unimi.dsi.fastutil.objects.Reference2IntFunction"
import { $Byte2ObjectFunction } from "it.unimi.dsi.fastutil.bytes.Byte2ObjectFunction"
import { $Short2ObjectFunction } from "it.unimi.dsi.fastutil.shorts.Short2ObjectFunction"
import { $Function as $Function$0 } from "it.unimi.dsi.fastutil.Function"
import { $Object2ByteFunction$$Type } from "it.unimi.dsi.fastutil.objects.Object2ByteFunction"
import { $Byte2ReferenceFunction$$Type } from "it.unimi.dsi.fastutil.bytes.Byte2ReferenceFunction"
import { $Int2ObjectFunction } from "it.unimi.dsi.fastutil.ints.Int2ObjectFunction"
import { $Reference2ShortFunction } from "it.unimi.dsi.fastutil.objects.Reference2ShortFunction"
import { $Long2ObjectFunction } from "it.unimi.dsi.fastutil.longs.Long2ObjectFunction"
import { $Reference2ReferenceFunction, $Reference2ReferenceFunction$$Type } from "it.unimi.dsi.fastutil.objects.Reference2ReferenceFunction"
import { $Object2ReferenceFunction$$Type } from "it.unimi.dsi.fastutil.objects.Object2ReferenceFunction"
import { $Float2ObjectFunction } from "it.unimi.dsi.fastutil.floats.Float2ObjectFunction"
import { $Long2ReferenceFunction$$Type } from "it.unimi.dsi.fastutil.longs.Long2ReferenceFunction"
import { $Reference2DoubleFunction } from "it.unimi.dsi.fastutil.objects.Reference2DoubleFunction"
import { $Char2ObjectFunction } from "it.unimi.dsi.fastutil.chars.Char2ObjectFunction"
import { $Reference2CharFunction } from "it.unimi.dsi.fastutil.objects.Reference2CharFunction"
import { $Object2ShortFunction$$Type } from "it.unimi.dsi.fastutil.objects.Object2ShortFunction"
import { $Float2ReferenceFunction$$Type } from "it.unimi.dsi.fastutil.floats.Float2ReferenceFunction"
import { $Object2CharFunction$$Type } from "it.unimi.dsi.fastutil.objects.Object2CharFunction"

export interface $Reference2ObjectFunction<K = any, V = any> extends $Function$0<K, V> {
"andThen"<V>(function0: $Function$$Type<V, V>): $Function<K, V>
"andThenByte"(object2ByteFunction0: $Object2ByteFunction$$Type<V>): $Reference2ByteFunction<K>
"andThenChar"(object2CharFunction0: $Object2CharFunction$$Type<V>): $Reference2CharFunction<K>
"andThenDouble"(object2DoubleFunction0: $Object2DoubleFunction$$Type<V>): $Reference2DoubleFunction<K>
"andThenFloat"(object2FloatFunction0: $Object2FloatFunction$$Type<V>): $Reference2FloatFunction<K>
"andThenInt"(object2IntFunction0: $Object2IntFunction$$Type<V>): $Reference2IntFunction<K>
"andThenLong"(object2LongFunction0: $Object2LongFunction$$Type<V>): $Reference2LongFunction<K>
"andThenObject"<T>(object2ObjectFunction0: $Object2ObjectFunction$$Type<V, T>): $Reference2ObjectFunction<K, T>
"andThenReference"<T>(object2ReferenceFunction0: $Object2ReferenceFunction$$Type<V, T>): $Reference2ReferenceFunction<K, T>
"andThenShort"(object2ShortFunction0: $Object2ShortFunction$$Type<V>): $Reference2ShortFunction<K>
"apply"(k0: K): V
"clear"(): void
"compose"<V>(function0: $Function$$Type<V, K>): $Function<V, V>
"composeByte"(byte2ReferenceFunction0: $Byte2ReferenceFunction$$Type<K>): $Byte2ObjectFunction<V>
"composeChar"(char2ReferenceFunction0: $Char2ReferenceFunction$$Type<K>): $Char2ObjectFunction<V>
"composeDouble"(double2ReferenceFunction0: $Double2ReferenceFunction$$Type<K>): $Double2ObjectFunction<V>
"composeFloat"(float2ReferenceFunction0: $Float2ReferenceFunction$$Type<K>): $Float2ObjectFunction<V>
"composeInt"(int2ReferenceFunction0: $Int2ReferenceFunction$$Type<K>): $Int2ObjectFunction<V>
"composeLong"(long2ReferenceFunction0: $Long2ReferenceFunction$$Type<K>): $Long2ObjectFunction<V>
"composeObject"<T>(object2ReferenceFunction0: $Object2ReferenceFunction$$Type<T, K>): $Object2ObjectFunction<T, V>
"composeReference"<T>(reference2ReferenceFunction0: $Reference2ReferenceFunction$$Type<T, K>): $Reference2ObjectFunction<T, V>
"composeShort"(short2ReferenceFunction0: $Short2ReferenceFunction$$Type<K>): $Short2ObjectFunction<V>
"containsKey"(object0: any): boolean
"defaultReturnValue"(): V
"defaultReturnValue"(v0: V): void
"get"(object0: any): V
"getOrDefault"(object0: any, v1: V): V
"put"(k0: K, v1: V): V
"remove"(object0: any): V
"size"(): integer
}

export namespace $Reference2ObjectFunction {
function identity<T>(): $Function<T, T>
}
export abstract class $Reference2ObjectFunction$$Static<K = any, V = any> implements $Reference2ObjectFunction<K, V> {
static "identity"<T>(): $Function<T, T>
}
}

declare module "it.unimi.dsi.fastutil.objects.Object2IntMap$FastEntrySet" {
import { $Consumer$$Type } from "java.util.function.Consumer"
import { $Stream } from "java.util.stream.Stream"
import { $Predicate$$Type } from "java.util.function.Predicate"
import { $Collection$$Type } from "java.util.Collection"
import { $Object2IntMap$Entry, $Object2IntMap$Entry$$Type } from "it.unimi.dsi.fastutil.objects.Object2IntMap$Entry"
import { $Set } from "java.util.Set"
import { $ObjectIterator } from "it.unimi.dsi.fastutil.objects.ObjectIterator"
import { $ObjectSet } from "it.unimi.dsi.fastutil.objects.ObjectSet"
import { $IntFunction$$Type } from "java.util.function.IntFunction"

export interface $Object2IntMap$FastEntrySet<K = any> extends $ObjectSet<$Object2IntMap$Entry<K>> {
"add"(entry0: $Object2IntMap$Entry$$Type<K>): boolean
"addAll"(collection0: $Collection$$Type<$Object2IntMap$Entry$$Type<K>>): boolean
"clear"(): void
"contains"(object0: any): boolean
"containsAll"(collection0: $Collection$$Type<any>): boolean
"equals"(object0: any): boolean
"fastForEach"(consumer0: $Consumer$$Type<$Object2IntMap$Entry$$Type<K>>): void
"fastIterator"(): $ObjectIterator<$Object2IntMap$Entry<K>>
"forEach"(consumer0: $Consumer$$Type<$Object2IntMap$Entry$$Type<K>>): void
"hashCode"(): integer
"isEmpty"(): boolean
"parallelStream"(): $Stream<$Object2IntMap$Entry<K>>
"remove"(object0: any): boolean
"removeAll"(collection0: $Collection$$Type<any>): boolean
"removeIf"(predicate0: $Predicate$$Type<$Object2IntMap$Entry$$Type<K>>): boolean
"retainAll"(collection0: $Collection$$Type<any>): boolean
"size"(): integer
"stream"(): $Stream<$Object2IntMap$Entry<K>>
"toArray"<T>(t0s: T[]): T[]
"toArray"(): any[]
"toArray"<T>(intFunction0: $IntFunction$$Type<T[]>): T[]
get "empty"(): boolean
}

export namespace $Object2IntMap$FastEntrySet {
function copyOf<E>(collection0: $Collection$$Type<E>): $Set<E>
function of<K>(k0: K, k1: K): $ObjectSet<K>
function of<K>(...k0s: K[]): $ObjectSet<K>
function of<K>(k0: K, k1: K, k2: K): $ObjectSet<K>
function of<K>(): $ObjectSet<K>
function of<K>(k0: K): $ObjectSet<K>
function of<E>(e0: E, e1: E, e2: E, e3: E, e4: E, e5: E): $Set<E>
function of<E>(e0: E, e1: E, e2: E, e3: E, e4: E): $Set<E>
function of<E>(e0: E, e1: E, e2: E, e3: E): $Set<E>
function of<E>(e0: E, e1: E, e2: E, e3: E, e4: E, e5: E, e6: E, e7: E, e8: E, e9: E): $Set<E>
function of<E>(e0: E, e1: E, e2: E, e3: E, e4: E, e5: E, e6: E, e7: E, e8: E): $Set<E>
function of<E>(e0: E, e1: E, e2: E, e3: E, e4: E, e5: E, e6: E, e7: E): $Set<E>
function of<E>(e0: E, e1: E, e2: E, e3: E, e4: E, e5: E, e6: E): $Set<E>
}
export abstract class $Object2IntMap$FastEntrySet$$Static<K = any> implements $Object2IntMap$FastEntrySet<K> {
static "copyOf"<E>(collection0: $Collection$$Type<E>): $Set<E>
static "of"<K>(k0: K, k1: K): $ObjectSet<K>
static "of"<K>(...k0s: K[]): $ObjectSet<K>
static "of"<K>(k0: K, k1: K, k2: K): $ObjectSet<K>
static "of"<K>(): $ObjectSet<K>
static "of"<K>(k0: K): $ObjectSet<K>
static "of"<E>(e0: E, e1: E, e2: E, e3: E, e4: E, e5: E): $Set<E>
static "of"<E>(e0: E, e1: E, e2: E, e3: E, e4: E): $Set<E>
static "of"<E>(e0: E, e1: E, e2: E, e3: E): $Set<E>
static "of"<E>(e0: E, e1: E, e2: E, e3: E, e4: E, e5: E, e6: E, e7: E, e8: E, e9: E): $Set<E>
static "of"<E>(e0: E, e1: E, e2: E, e3: E, e4: E, e5: E, e6: E, e7: E, e8: E): $Set<E>
static "of"<E>(e0: E, e1: E, e2: E, e3: E, e4: E, e5: E, e6: E, e7: E): $Set<E>
static "of"<E>(e0: E, e1: E, e2: E, e3: E, e4: E, e5: E, e6: E): $Set<E>
}
}

declare module "it.unimi.dsi.fastutil.objects.Object2ObjectOpenHashMap" {
import { $Hash } from "it.unimi.dsi.fastutil.Hash"
import { $Object2ObjectMap$$Type } from "it.unimi.dsi.fastutil.objects.Object2ObjectMap"
import { $BiFunction$$Type } from "java.util.function.BiFunction"
import { $Double2ObjectFunction, $Double2ObjectFunction$$Type } from "it.unimi.dsi.fastutil.doubles.Double2ObjectFunction"
import { $Object2ObjectFunction, $Object2ObjectFunction$$Type } from "it.unimi.dsi.fastutil.objects.Object2ObjectFunction"
import { $Function, $Function$$Type } from "java.util.function.Function"
import { $Object2LongFunction, $Object2LongFunction$$Type } from "it.unimi.dsi.fastutil.objects.Object2LongFunction"
import { $Object2DoubleFunction, $Object2DoubleFunction$$Type } from "it.unimi.dsi.fastutil.objects.Object2DoubleFunction"
import { $Object2FloatFunction, $Object2FloatFunction$$Type } from "it.unimi.dsi.fastutil.objects.Object2FloatFunction"
import { $Map, $Map$$Type } from "java.util.Map"
import { $Object2IntFunction, $Object2IntFunction$$Type } from "it.unimi.dsi.fastutil.objects.Object2IntFunction"
import { $BiConsumer$$Type } from "java.util.function.BiConsumer"
import { $Reference2ObjectFunction, $Reference2ObjectFunction$$Type } from "it.unimi.dsi.fastutil.objects.Reference2ObjectFunction"
import { $Map$Entry, $Map$Entry$$Type } from "java.util.Map$Entry"
import { $Cloneable } from "java.lang.Cloneable"
import { $Byte2ObjectFunction, $Byte2ObjectFunction$$Type } from "it.unimi.dsi.fastutil.bytes.Byte2ObjectFunction"
import { $Short2ObjectFunction, $Short2ObjectFunction$$Type } from "it.unimi.dsi.fastutil.shorts.Short2ObjectFunction"
import { $AbstractObject2ObjectMap } from "it.unimi.dsi.fastutil.objects.AbstractObject2ObjectMap"
import { $Object2ByteFunction, $Object2ByteFunction$$Type } from "it.unimi.dsi.fastutil.objects.Object2ByteFunction"
import { $Int2ObjectFunction, $Int2ObjectFunction$$Type } from "it.unimi.dsi.fastutil.ints.Int2ObjectFunction"
import { $Long2ObjectFunction, $Long2ObjectFunction$$Type } from "it.unimi.dsi.fastutil.longs.Long2ObjectFunction"
import { $ObjectSet } from "it.unimi.dsi.fastutil.objects.ObjectSet"
import { $ObjectCollection } from "it.unimi.dsi.fastutil.objects.ObjectCollection"
import { $Serializable } from "java.io.Serializable"
import { $Object2ReferenceFunction, $Object2ReferenceFunction$$Type } from "it.unimi.dsi.fastutil.objects.Object2ReferenceFunction"
import { $Float2ObjectFunction, $Float2ObjectFunction$$Type } from "it.unimi.dsi.fastutil.floats.Float2ObjectFunction"
import { $Char2ObjectFunction, $Char2ObjectFunction$$Type } from "it.unimi.dsi.fastutil.chars.Char2ObjectFunction"
import { $Object2ShortFunction, $Object2ShortFunction$$Type } from "it.unimi.dsi.fastutil.objects.Object2ShortFunction"
import { $Object2CharFunction, $Object2CharFunction$$Type } from "it.unimi.dsi.fastutil.objects.Object2CharFunction"

export class $Object2ObjectOpenHashMap<K = any, V = any> extends $AbstractObject2ObjectMap<K, V> implements $Serializable, $Cloneable, $Hash {
constructor(int0: integer, float1: float)
constructor(k0s: K[], v1s: V[], float2: float)
constructor(map0: $Map$$Type<K, V>)
constructor(object2ObjectMap0: $Object2ObjectMap$$Type<K, V>, float1: float)
constructor(map0: $Map$$Type<K, V>, float1: float)
constructor(int0: integer)
constructor()
constructor(k0s: K[], v1s: V[])
constructor(object2ObjectMap0: $Object2ObjectMap$$Type<K, V>)

public "andThen"<V>(function0: $Function$$Type<V, V>): $Function<K, V>
public "andThenByte"(object2ByteFunction0: $Object2ByteFunction$$Type<V>): $Object2ByteFunction<K>
public "andThenChar"(object2CharFunction0: $Object2CharFunction$$Type<V>): $Object2CharFunction<K>
public "andThenDouble"(object2DoubleFunction0: $Object2DoubleFunction$$Type<V>): $Object2DoubleFunction<K>
public "andThenFloat"(object2FloatFunction0: $Object2FloatFunction$$Type<V>): $Object2FloatFunction<K>
public "andThenInt"(object2IntFunction0: $Object2IntFunction$$Type<V>): $Object2IntFunction<K>
public "andThenLong"(object2LongFunction0: $Object2LongFunction$$Type<V>): $Object2LongFunction<K>
public "andThenObject"<T>(object2ObjectFunction0: $Object2ObjectFunction$$Type<V, T>): $Object2ObjectFunction<K, T>
public "andThenReference"<T>(object2ReferenceFunction0: $Object2ReferenceFunction$$Type<V, T>): $Object2ReferenceFunction<K, T>
public "andThenShort"(object2ShortFunction0: $Object2ShortFunction$$Type<V>): $Object2ShortFunction<K>
public "apply"(k0: K): V
public "clear"(): void
public "clone"(): $Object2ObjectOpenHashMap<K, V>
public "compose"<V>(function0: $Function$$Type<V, K>): $Function<V, V>
public "composeByte"(byte2ObjectFunction0: $Byte2ObjectFunction$$Type<K>): $Byte2ObjectFunction<V>
public "composeChar"(char2ObjectFunction0: $Char2ObjectFunction$$Type<K>): $Char2ObjectFunction<V>
public "composeDouble"(double2ObjectFunction0: $Double2ObjectFunction$$Type<K>): $Double2ObjectFunction<V>
public "composeFloat"(float2ObjectFunction0: $Float2ObjectFunction$$Type<K>): $Float2ObjectFunction<V>
public "composeInt"(int2ObjectFunction0: $Int2ObjectFunction$$Type<K>): $Int2ObjectFunction<V>
public "composeLong"(long2ObjectFunction0: $Long2ObjectFunction$$Type<K>): $Long2ObjectFunction<V>
public "composeObject"<T>(object2ObjectFunction0: $Object2ObjectFunction$$Type<T, K>): $Object2ObjectFunction<T, V>
public "composeReference"<T>(reference2ObjectFunction0: $Reference2ObjectFunction$$Type<T, K>): $Reference2ObjectFunction<T, V>
public "composeShort"(short2ObjectFunction0: $Short2ObjectFunction$$Type<K>): $Short2ObjectFunction<V>
public "compute"(k0: K, biFunction1: $BiFunction$$Type<K, V, V>): V
public "computeIfAbsent"(k0: K, object2ObjectFunction1: $Object2ObjectFunction$$Type<K, V>): V
public "computeIfAbsent"(k0: K, function1: $Function$$Type<K, V>): V
public "computeIfPresent"(k0: K, biFunction1: $BiFunction$$Type<K, V, V>): V
/** @deprecated */
public "computeObjectIfAbsentPartial"(k0: K, object2ObjectFunction1: $Object2ObjectFunction$$Type<K, V>): V
public static "copyOf"<K, V>(map0: $Map$$Type<K, V>): $Map<K, V>
public "defaultReturnValue"(v0: V): void
public "defaultReturnValue"(): V
public static "entry"<K, V>(k0: K, v1: V): $Map$Entry<K, V>
public "entrySet"(): $ObjectSet<$Map$Entry<K, V>>
public "forEach"(biConsumer0: $BiConsumer$$Type<K, V>): void
public "get"(object0: any): V
public "getOrDefault"(object0: any, v1: V): V
public static "identity"<T>(): $Function<T, T>
public "keySet"(): $ObjectSet<K>
public "merge"(k0: K, v1: V, biFunction2: $BiFunction$$Type<V, V, V>): V
public static "of"<K, V>(k0: K, v1: V, k2: K, v3: V, k4: K, v5: V, k6: K, v7: V, k8: K, v9: V): $Map<K, V>
public static "of"<K, V>(k0: K, v1: V, k2: K, v3: V, k4: K, v5: V, k6: K, v7: V): $Map<K, V>
public static "of"<K, V>(k0: K, v1: V, k2: K, v3: V, k4: K, v5: V): $Map<K, V>
public static "of"<K, V>(): $Map<K, V>
public static "of"<K, V>(k0: K, v1: V, k2: K, v3: V): $Map<K, V>
public static "of"<K, V>(k0: K, v1: V): $Map<K, V>
public static "of"<K, V>(k0: K, v1: V, k2: K, v3: V, k4: K, v5: V, k6: K, v7: V, k8: K, v9: V, k10: K, v11: V, k12: K, v13: V, k14: K, v15: V, k16: K, v17: V, k18: K, v19: V): $Map<K, V>
public static "of"<K, V>(k0: K, v1: V, k2: K, v3: V, k4: K, v5: V, k6: K, v7: V, k8: K, v9: V, k10: K, v11: V, k12: K, v13: V, k14: K, v15: V, k16: K, v17: V): $Map<K, V>
public static "of"<K, V>(k0: K, v1: V, k2: K, v3: V, k4: K, v5: V, k6: K, v7: V, k8: K, v9: V, k10: K, v11: V, k12: K, v13: V, k14: K, v15: V): $Map<K, V>
public static "of"<K, V>(k0: K, v1: V, k2: K, v3: V, k4: K, v5: V, k6: K, v7: V, k8: K, v9: V, k10: K, v11: V, k12: K, v13: V): $Map<K, V>
public static "of"<K, V>(k0: K, v1: V, k2: K, v3: V, k4: K, v5: V, k6: K, v7: V, k8: K, v9: V, k10: K, v11: V): $Map<K, V>
public static "ofEntries"<K, V>(...entry0s: $Map$Entry$$Type<K, V>[]): $Map<K, V>
public "put"(k0: K, v1: V): V
public "putIfAbsent"(k0: K, v1: V): V
public "remove"(object0: any, object1: any): boolean
public "remove"(object0: any): V
public "replace"(k0: K, v1: V, v2: V): boolean
public "replace"(k0: K, v1: V): V
public "replaceAll"(biFunction0: $BiFunction$$Type<K, V, V>): void
public "size"(): integer
public "trim"(): boolean
public "trim"(int0: integer): boolean
public "values"(): $ObjectCollection<V>
}
}

declare module "it.unimi.dsi.fastutil.objects.Object2IntMap" {
import { $Int2ShortFunction$$Type } from "it.unimi.dsi.fastutil.ints.Int2ShortFunction"
import { $Int2ByteFunction$$Type } from "it.unimi.dsi.fastutil.ints.Int2ByteFunction"
import { $Int2ReferenceFunction$$Type } from "it.unimi.dsi.fastutil.ints.Int2ReferenceFunction"
import { $BiFunction$$Type } from "java.util.function.BiFunction"
import { $Object2IntMap$Entry } from "it.unimi.dsi.fastutil.objects.Object2IntMap$Entry"
import { $IntBinaryOperator$$Type } from "java.util.function.IntBinaryOperator"
import { $Double2ObjectFunction$$Type } from "it.unimi.dsi.fastutil.doubles.Double2ObjectFunction"
import { $Object2ObjectFunction, $Object2ObjectFunction$$Type } from "it.unimi.dsi.fastutil.objects.Object2ObjectFunction"
import { $Function, $Function$$Type } from "java.util.function.Function"
import { $IntCollection } from "it.unimi.dsi.fastutil.ints.IntCollection"
import { $Int2DoubleFunction$$Type } from "it.unimi.dsi.fastutil.ints.Int2DoubleFunction"
import { $Object2LongFunction } from "it.unimi.dsi.fastutil.objects.Object2LongFunction"
import { $Object2DoubleFunction } from "it.unimi.dsi.fastutil.objects.Object2DoubleFunction"
import { $Int2IntFunction, $Int2IntFunction$$Type } from "it.unimi.dsi.fastutil.ints.Int2IntFunction"
import { $Float2IntFunction } from "it.unimi.dsi.fastutil.floats.Float2IntFunction"
import { $Object2FloatFunction } from "it.unimi.dsi.fastutil.objects.Object2FloatFunction"
import { $Object2IntFunction, $Object2IntFunction$$Type } from "it.unimi.dsi.fastutil.objects.Object2IntFunction"
import { $Map, $Map$$Type } from "java.util.Map"
import { $BiConsumer$$Type } from "java.util.function.BiConsumer"
import { $Reference2IntFunction } from "it.unimi.dsi.fastutil.objects.Reference2IntFunction"
import { $Long2IntFunction } from "it.unimi.dsi.fastutil.longs.Long2IntFunction"
import { $Short2IntFunction } from "it.unimi.dsi.fastutil.shorts.Short2IntFunction"
import { $Int2FloatFunction$$Type } from "it.unimi.dsi.fastutil.ints.Int2FloatFunction"
import { $Reference2ObjectFunction$$Type } from "it.unimi.dsi.fastutil.objects.Reference2ObjectFunction"
import { $Map$Entry, $Map$Entry$$Type } from "java.util.Map$Entry"
import { $Byte2ObjectFunction$$Type } from "it.unimi.dsi.fastutil.bytes.Byte2ObjectFunction"
import { $Short2ObjectFunction$$Type } from "it.unimi.dsi.fastutil.shorts.Short2ObjectFunction"
import { $Object2ByteFunction } from "it.unimi.dsi.fastutil.objects.Object2ByteFunction"
import { $Int2ObjectFunction$$Type } from "it.unimi.dsi.fastutil.ints.Int2ObjectFunction"
import { $Long2ObjectFunction$$Type } from "it.unimi.dsi.fastutil.longs.Long2ObjectFunction"
import { $ToIntFunction$$Type } from "java.util.function.ToIntFunction"
import { $Char2IntFunction } from "it.unimi.dsi.fastutil.chars.Char2IntFunction"
import { $ObjectSet } from "it.unimi.dsi.fastutil.objects.ObjectSet"
import { $Int2LongFunction$$Type } from "it.unimi.dsi.fastutil.ints.Int2LongFunction"
import { $Object2ReferenceFunction } from "it.unimi.dsi.fastutil.objects.Object2ReferenceFunction"
import { $Float2ObjectFunction$$Type } from "it.unimi.dsi.fastutil.floats.Float2ObjectFunction"
import { $IntBinaryOperator$$Type as $IntBinaryOperator$0$$Type } from "it.unimi.dsi.fastutil.ints.IntBinaryOperator"
import { $Char2ObjectFunction$$Type } from "it.unimi.dsi.fastutil.chars.Char2ObjectFunction"
import { $Object2ShortFunction } from "it.unimi.dsi.fastutil.objects.Object2ShortFunction"
import { $Double2IntFunction } from "it.unimi.dsi.fastutil.doubles.Double2IntFunction"
import { $Object2CharFunction } from "it.unimi.dsi.fastutil.objects.Object2CharFunction"
import { $Int2CharFunction$$Type } from "it.unimi.dsi.fastutil.ints.Int2CharFunction"
import { $Byte2IntFunction } from "it.unimi.dsi.fastutil.bytes.Byte2IntFunction"

export interface $Object2IntMap<K = any> extends $Object2IntFunction<K>, $Map<K, integer> {
/** @deprecated */
"andThen"<T>(function0: $Function$$Type<integer, T>): $Function<K, T>
"andThenByte"(int2ByteFunction0: $Int2ByteFunction$$Type): $Object2ByteFunction<K>
"andThenChar"(int2CharFunction0: $Int2CharFunction$$Type): $Object2CharFunction<K>
"andThenDouble"(int2DoubleFunction0: $Int2DoubleFunction$$Type): $Object2DoubleFunction<K>
"andThenFloat"(int2FloatFunction0: $Int2FloatFunction$$Type): $Object2FloatFunction<K>
"andThenInt"(int2IntFunction0: $Int2IntFunction$$Type): $Object2IntFunction<K>
"andThenLong"(int2LongFunction0: $Int2LongFunction$$Type): $Object2LongFunction<K>
"andThenObject"<T>(int2ObjectFunction0: $Int2ObjectFunction$$Type<T>): $Object2ObjectFunction<K, T>
"andThenReference"<T>(int2ReferenceFunction0: $Int2ReferenceFunction$$Type<T>): $Object2ReferenceFunction<K, T>
"andThenShort"(int2ShortFunction0: $Int2ShortFunction$$Type): $Object2ShortFunction<K>
"apply"(k0: K): integer
"applyAsInt"(k0: K): integer
"clear"(): void
"compose"<V>(function0: $Function$$Type<V, K>): $Function<V, integer>
"composeByte"(byte2ObjectFunction0: $Byte2ObjectFunction$$Type<K>): $Byte2IntFunction
"composeChar"(char2ObjectFunction0: $Char2ObjectFunction$$Type<K>): $Char2IntFunction
"composeDouble"(double2ObjectFunction0: $Double2ObjectFunction$$Type<K>): $Double2IntFunction
"composeFloat"(float2ObjectFunction0: $Float2ObjectFunction$$Type<K>): $Float2IntFunction
"composeInt"(int2ObjectFunction0: $Int2ObjectFunction$$Type<K>): $Int2IntFunction
"composeLong"(long2ObjectFunction0: $Long2ObjectFunction$$Type<K>): $Long2IntFunction
"composeObject"<T>(object2ObjectFunction0: $Object2ObjectFunction$$Type<T, K>): $Object2IntFunction<T>
"composeReference"<T>(reference2ObjectFunction0: $Reference2ObjectFunction$$Type<T, K>): $Reference2IntFunction<T>
"composeShort"(short2ObjectFunction0: $Short2ObjectFunction$$Type<K>): $Short2IntFunction
"compute"(k0: K, biFunction1: $BiFunction$$Type<K, integer, integer>): integer
"computeIfAbsent"(k0: K, toIntFunction1: $ToIntFunction$$Type<K>): integer
"computeIfAbsent"(k0: K, object2IntFunction1: $Object2IntFunction$$Type<K>): integer
"computeIfAbsent"(k0: K, function1: $Function$$Type<K, integer>): integer
"computeIfPresent"(k0: K, biFunction1: $BiFunction$$Type<K, integer, integer>): integer
"computeInt"(k0: K, biFunction1: $BiFunction$$Type<K, integer, integer>): integer
/** @deprecated */
"computeIntIfAbsent"(k0: K, toIntFunction1: $ToIntFunction$$Type<K>): integer
/** @deprecated */
"computeIntIfAbsentPartial"(k0: K, object2IntFunction1: $Object2IntFunction$$Type<K>): integer
"computeIntIfPresent"(k0: K, biFunction1: $BiFunction$$Type<K, integer, integer>): integer
"containsKey"(object0: any): boolean
/** @deprecated */
"containsValue"(object0: any): boolean
"containsValue"(int0: integer): boolean
"defaultReturnValue"(int0: integer): void
"defaultReturnValue"(): integer
/** @deprecated */
"entrySet"(): $ObjectSet<$Map$Entry<K, integer>>
"equals"(object0: any): boolean
"forEach"(biConsumer0: $BiConsumer$$Type<K, integer>): void
"getInt"(object0: any): integer
/** @deprecated */
"getOrDefault"(object0: any, integer1: integer): integer
"getOrDefault"(object0: any, int1: integer): integer
"hashCode"(): integer
"isEmpty"(): boolean
"keySet"(): $ObjectSet<K>
/** @deprecated */
"merge"(k0: K, integer1: integer, biFunction2: $BiFunction$$Type<integer, integer, integer>): integer
"merge"(k0: K, int1: integer, biFunction2: $BiFunction$$Type<integer, integer, integer>): integer
"mergeInt"(k0: K, int1: integer, intBinaryOperator2: $IntBinaryOperator$0$$Type): integer
/** @deprecated */
"mergeInt"(k0: K, int1: integer, biFunction2: $BiFunction$$Type<integer, integer, integer>): integer
"mergeInt"(k0: K, int1: integer, intBinaryOperator2: $IntBinaryOperator$$Type): integer
"object2IntEntrySet"(): $ObjectSet<$Object2IntMap$Entry<K>>
/** @deprecated */
"put"(k0: K, integer1: integer): integer
"put"(k0: K, int1: integer): integer
"putAll"(map0: $Map$$Type<K, integer>): void
/** @deprecated */
"putIfAbsent"(k0: K, integer1: integer): integer
"putIfAbsent"(k0: K, int1: integer): integer
"remove"(object0: any, int1: integer): boolean
/** @deprecated */
"remove"(object0: any, object1: any): boolean
"removeInt"(object0: any): integer
/** @deprecated */
"replace"(k0: K, integer1: integer): integer
"replace"(k0: K, int1: integer, int2: integer): boolean
"replace"(k0: K, int1: integer): integer
/** @deprecated */
"replace"(k0: K, integer1: integer, integer2: integer): boolean
"replaceAll"(biFunction0: $BiFunction$$Type<K, integer, integer>): void
"size"(): integer
"values"(): $IntCollection
get "empty"(): boolean
}

export namespace $Object2IntMap {
function copyOf<K, V>(map0: $Map$$Type<K, V>): $Map<K, V>
function entry<K, V>(k0: K, v1: V): $Map$Entry<K, V>
function identity<T>(): $Function<T, T>
function of<K, V>(k0: K, v1: V, k2: K, v3: V, k4: K, v5: V, k6: K, v7: V, k8: K, v9: V): $Map<K, V>
function of<K, V>(k0: K, v1: V, k2: K, v3: V, k4: K, v5: V, k6: K, v7: V): $Map<K, V>
function of<K, V>(k0: K, v1: V, k2: K, v3: V, k4: K, v5: V): $Map<K, V>
function of<K, V>(): $Map<K, V>
function of<K, V>(k0: K, v1: V, k2: K, v3: V): $Map<K, V>
function of<K, V>(k0: K, v1: V): $Map<K, V>
function of<K, V>(k0: K, v1: V, k2: K, v3: V, k4: K, v5: V, k6: K, v7: V, k8: K, v9: V, k10: K, v11: V, k12: K, v13: V, k14: K, v15: V, k16: K, v17: V, k18: K, v19: V): $Map<K, V>
function of<K, V>(k0: K, v1: V, k2: K, v3: V, k4: K, v5: V, k6: K, v7: V, k8: K, v9: V, k10: K, v11: V, k12: K, v13: V, k14: K, v15: V, k16: K, v17: V): $Map<K, V>
function of<K, V>(k0: K, v1: V, k2: K, v3: V, k4: K, v5: V, k6: K, v7: V, k8: K, v9: V, k10: K, v11: V, k12: K, v13: V, k14: K, v15: V): $Map<K, V>
function of<K, V>(k0: K, v1: V, k2: K, v3: V, k4: K, v5: V, k6: K, v7: V, k8: K, v9: V, k10: K, v11: V, k12: K, v13: V): $Map<K, V>
function of<K, V>(k0: K, v1: V, k2: K, v3: V, k4: K, v5: V, k6: K, v7: V, k8: K, v9: V, k10: K, v11: V): $Map<K, V>
function ofEntries<K, V>(...entry0s: $Map$Entry$$Type<K, V>[]): $Map<K, V>
}
export abstract class $Object2IntMap$$Static<K = any> implements $Object2IntMap<K> {
static "copyOf"<K, V>(map0: $Map$$Type<K, V>): $Map<K, V>
static "entry"<K, V>(k0: K, v1: V): $Map$Entry<K, V>
static "identity"<T>(): $Function<T, T>
static "of"<K, V>(k0: K, v1: V, k2: K, v3: V, k4: K, v5: V, k6: K, v7: V, k8: K, v9: V): $Map<K, V>
static "of"<K, V>(k0: K, v1: V, k2: K, v3: V, k4: K, v5: V, k6: K, v7: V): $Map<K, V>
static "of"<K, V>(k0: K, v1: V, k2: K, v3: V, k4: K, v5: V): $Map<K, V>
static "of"<K, V>(): $Map<K, V>
static "of"<K, V>(k0: K, v1: V, k2: K, v3: V): $Map<K, V>
static "of"<K, V>(k0: K, v1: V): $Map<K, V>
static "of"<K, V>(k0: K, v1: V, k2: K, v3: V, k4: K, v5: V, k6: K, v7: V, k8: K, v9: V, k10: K, v11: V, k12: K, v13: V, k14: K, v15: V, k16: K, v17: V, k18: K, v19: V): $Map<K, V>
static "of"<K, V>(k0: K, v1: V, k2: K, v3: V, k4: K, v5: V, k6: K, v7: V, k8: K, v9: V, k10: K, v11: V, k12: K, v13: V, k14: K, v15: V, k16: K, v17: V): $Map<K, V>
static "of"<K, V>(k0: K, v1: V, k2: K, v3: V, k4: K, v5: V, k6: K, v7: V, k8: K, v9: V, k10: K, v11: V, k12: K, v13: V, k14: K, v15: V): $Map<K, V>
static "of"<K, V>(k0: K, v1: V, k2: K, v3: V, k4: K, v5: V, k6: K, v7: V, k8: K, v9: V, k10: K, v11: V, k12: K, v13: V): $Map<K, V>
static "of"<K, V>(k0: K, v1: V, k2: K, v3: V, k4: K, v5: V, k6: K, v7: V, k8: K, v9: V, k10: K, v11: V): $Map<K, V>
static "ofEntries"<K, V>(...entry0s: $Map$Entry$$Type<K, V>[]): $Map<K, V>
}
}

declare module "it.unimi.dsi.fastutil.objects.Object2ByteFunction" {
import { $Byte2FloatFunction$$Type } from "it.unimi.dsi.fastutil.bytes.Byte2FloatFunction"
import { $Byte2LongFunction$$Type } from "it.unimi.dsi.fastutil.bytes.Byte2LongFunction"
import { $Int2ByteFunction } from "it.unimi.dsi.fastutil.ints.Int2ByteFunction"
import { $Float2ByteFunction } from "it.unimi.dsi.fastutil.floats.Float2ByteFunction"
import { $Double2ObjectFunction$$Type } from "it.unimi.dsi.fastutil.doubles.Double2ObjectFunction"
import { $Object2ObjectFunction, $Object2ObjectFunction$$Type } from "it.unimi.dsi.fastutil.objects.Object2ObjectFunction"
import { $Function, $Function$$Type } from "java.util.function.Function"
import { $Object2LongFunction } from "it.unimi.dsi.fastutil.objects.Object2LongFunction"
import { $Double2ByteFunction } from "it.unimi.dsi.fastutil.doubles.Double2ByteFunction"
import { $Object2DoubleFunction } from "it.unimi.dsi.fastutil.objects.Object2DoubleFunction"
import { $Reference2ByteFunction } from "it.unimi.dsi.fastutil.objects.Reference2ByteFunction"
import { $Byte2DoubleFunction$$Type } from "it.unimi.dsi.fastutil.bytes.Byte2DoubleFunction"
import { $Object2FloatFunction } from "it.unimi.dsi.fastutil.objects.Object2FloatFunction"
import { $Short2ByteFunction } from "it.unimi.dsi.fastutil.shorts.Short2ByteFunction"
import { $Object2IntFunction } from "it.unimi.dsi.fastutil.objects.Object2IntFunction"
import { $Reference2ObjectFunction$$Type } from "it.unimi.dsi.fastutil.objects.Reference2ObjectFunction"
import { $Byte2ObjectFunction$$Type } from "it.unimi.dsi.fastutil.bytes.Byte2ObjectFunction"
import { $Short2ObjectFunction$$Type } from "it.unimi.dsi.fastutil.shorts.Short2ObjectFunction"
import { $Function as $Function$0 } from "it.unimi.dsi.fastutil.Function"
import { $Byte2ReferenceFunction$$Type } from "it.unimi.dsi.fastutil.bytes.Byte2ReferenceFunction"
import { $Char2ByteFunction } from "it.unimi.dsi.fastutil.chars.Char2ByteFunction"
import { $Byte2ShortFunction$$Type } from "it.unimi.dsi.fastutil.bytes.Byte2ShortFunction"
import { $Int2ObjectFunction$$Type } from "it.unimi.dsi.fastutil.ints.Int2ObjectFunction"
import { $Long2ObjectFunction$$Type } from "it.unimi.dsi.fastutil.longs.Long2ObjectFunction"
import { $ToIntFunction } from "java.util.function.ToIntFunction"
import { $Byte2CharFunction$$Type } from "it.unimi.dsi.fastutil.bytes.Byte2CharFunction"
import { $Object2ReferenceFunction } from "it.unimi.dsi.fastutil.objects.Object2ReferenceFunction"
import { $Float2ObjectFunction$$Type } from "it.unimi.dsi.fastutil.floats.Float2ObjectFunction"
import { $Long2ByteFunction } from "it.unimi.dsi.fastutil.longs.Long2ByteFunction"
import { $Char2ObjectFunction$$Type } from "it.unimi.dsi.fastutil.chars.Char2ObjectFunction"
import { $Object2ShortFunction } from "it.unimi.dsi.fastutil.objects.Object2ShortFunction"
import { $Byte2ByteFunction, $Byte2ByteFunction$$Type } from "it.unimi.dsi.fastutil.bytes.Byte2ByteFunction"
import { $Object2CharFunction } from "it.unimi.dsi.fastutil.objects.Object2CharFunction"
import { $Byte2IntFunction$$Type } from "it.unimi.dsi.fastutil.bytes.Byte2IntFunction"

export interface $Object2ByteFunction<K = any> extends $Function$0<K, byte>, $ToIntFunction<K> {
/** @deprecated */
"andThen"<T>(function0: $Function$$Type<byte, T>): $Function<K, T>
"andThenByte"(byte2ByteFunction0: $Byte2ByteFunction$$Type): $Object2ByteFunction<K>
"andThenChar"(byte2CharFunction0: $Byte2CharFunction$$Type): $Object2CharFunction<K>
"andThenDouble"(byte2DoubleFunction0: $Byte2DoubleFunction$$Type): $Object2DoubleFunction<K>
"andThenFloat"(byte2FloatFunction0: $Byte2FloatFunction$$Type): $Object2FloatFunction<K>
"andThenInt"(byte2IntFunction0: $Byte2IntFunction$$Type): $Object2IntFunction<K>
"andThenLong"(byte2LongFunction0: $Byte2LongFunction$$Type): $Object2LongFunction<K>
"andThenObject"<T>(byte2ObjectFunction0: $Byte2ObjectFunction$$Type<T>): $Object2ObjectFunction<K, T>
"andThenReference"<T>(byte2ReferenceFunction0: $Byte2ReferenceFunction$$Type<T>): $Object2ReferenceFunction<K, T>
"andThenShort"(byte2ShortFunction0: $Byte2ShortFunction$$Type): $Object2ShortFunction<K>
"apply"(k0: K): byte
"applyAsInt"(k0: K): integer
"clear"(): void
"compose"<V>(function0: $Function$$Type<V, K>): $Function<V, byte>
"composeByte"(byte2ObjectFunction0: $Byte2ObjectFunction$$Type<K>): $Byte2ByteFunction
"composeChar"(char2ObjectFunction0: $Char2ObjectFunction$$Type<K>): $Char2ByteFunction
"composeDouble"(double2ObjectFunction0: $Double2ObjectFunction$$Type<K>): $Double2ByteFunction
"composeFloat"(float2ObjectFunction0: $Float2ObjectFunction$$Type<K>): $Float2ByteFunction
"composeInt"(int2ObjectFunction0: $Int2ObjectFunction$$Type<K>): $Int2ByteFunction
"composeLong"(long2ObjectFunction0: $Long2ObjectFunction$$Type<K>): $Long2ByteFunction
"composeObject"<T>(object2ObjectFunction0: $Object2ObjectFunction$$Type<T, K>): $Object2ByteFunction<T>
"composeReference"<T>(reference2ObjectFunction0: $Reference2ObjectFunction$$Type<T, K>): $Reference2ByteFunction<T>
"composeShort"(short2ObjectFunction0: $Short2ObjectFunction$$Type<K>): $Short2ByteFunction
"containsKey"(object0: any): boolean
"defaultReturnValue"(): byte
"defaultReturnValue"(byte0: byte): void
/** @deprecated */
"get"(object0: any): byte
"getByte"(object0: any): byte
"getOrDefault"(object0: any, byte1: byte): byte
/** @deprecated */
"getOrDefault"(object0: any, byte1: byte): byte
/** @deprecated */
"put"(k0: K, byte1: byte): byte
"put"(k0: K, byte1: byte): byte
"removeByte"(object0: any): byte
"size"(): integer
}

export namespace $Object2ByteFunction {
function identity<T>(): $Function<T, T>
}
export abstract class $Object2ByteFunction$$Static<K = any> implements $Object2ByteFunction<K> {
static "identity"<T>(): $Function<T, T>
}
}

declare module "it.unimi.dsi.fastutil.objects.ObjectListIterator" {
import { $Consumer$$Type } from "java.util.function.Consumer"
import { $ListIterator } from "java.util.ListIterator"
import { $ObjectBidirectionalIterator } from "it.unimi.dsi.fastutil.objects.ObjectBidirectionalIterator"

export interface $ObjectListIterator<K = any> extends $ObjectBidirectionalIterator<K>, $ListIterator<K> {
"add"(k0: K): void
"back"(int0: integer): integer
"forEachRemaining"(consumer0: $Consumer$$Type<K>): void
"hasNext"(): boolean
"hasPrevious"(): boolean
"next"(): K
"nextIndex"(): integer
"previous"(): K
"previousIndex"(): integer
"remove"(): void
"set"(k0: K): void
"skip"(int0: integer): integer
}

export namespace $ObjectListIterator {
const probejs$$marker: never
}
export abstract class $ObjectListIterator$$Static<K = any> implements $ObjectListIterator<K> {
}
}

declare module "it.unimi.dsi.fastutil.objects.Reference2LongFunction" {
import { $Long2ShortFunction$$Type } from "it.unimi.dsi.fastutil.longs.Long2ShortFunction"
import { $Double2ReferenceFunction$$Type } from "it.unimi.dsi.fastutil.doubles.Double2ReferenceFunction"
import { $Byte2LongFunction } from "it.unimi.dsi.fastutil.bytes.Byte2LongFunction"
import { $Int2ReferenceFunction$$Type } from "it.unimi.dsi.fastutil.ints.Int2ReferenceFunction"
import { $Short2ReferenceFunction$$Type } from "it.unimi.dsi.fastutil.shorts.Short2ReferenceFunction"
import { $Char2LongFunction } from "it.unimi.dsi.fastutil.chars.Char2LongFunction"
import { $Function, $Function$$Type } from "java.util.function.Function"
import { $Reference2FloatFunction } from "it.unimi.dsi.fastutil.objects.Reference2FloatFunction"
import { $Object2LongFunction } from "it.unimi.dsi.fastutil.objects.Object2LongFunction"
import { $Reference2ByteFunction } from "it.unimi.dsi.fastutil.objects.Reference2ByteFunction"
import { $Long2CharFunction$$Type } from "it.unimi.dsi.fastutil.longs.Long2CharFunction"
import { $Char2ReferenceFunction$$Type } from "it.unimi.dsi.fastutil.chars.Char2ReferenceFunction"
import { $Short2LongFunction } from "it.unimi.dsi.fastutil.shorts.Short2LongFunction"
import { $Reference2IntFunction } from "it.unimi.dsi.fastutil.objects.Reference2IntFunction"
import { $Long2IntFunction$$Type } from "it.unimi.dsi.fastutil.longs.Long2IntFunction"
import { $ToLongFunction } from "java.util.function.ToLongFunction"
import { $Long2FloatFunction$$Type } from "it.unimi.dsi.fastutil.longs.Long2FloatFunction"
import { $Reference2ObjectFunction } from "it.unimi.dsi.fastutil.objects.Reference2ObjectFunction"
import { $Function as $Function$0 } from "it.unimi.dsi.fastutil.Function"
import { $Byte2ReferenceFunction$$Type } from "it.unimi.dsi.fastutil.bytes.Byte2ReferenceFunction"
import { $Float2LongFunction } from "it.unimi.dsi.fastutil.floats.Float2LongFunction"
import { $Long2ObjectFunction$$Type } from "it.unimi.dsi.fastutil.longs.Long2ObjectFunction"
import { $Reference2ShortFunction } from "it.unimi.dsi.fastutil.objects.Reference2ShortFunction"
import { $Long2DoubleFunction$$Type } from "it.unimi.dsi.fastutil.longs.Long2DoubleFunction"
import { $Int2LongFunction } from "it.unimi.dsi.fastutil.ints.Int2LongFunction"
import { $Long2LongFunction, $Long2LongFunction$$Type } from "it.unimi.dsi.fastutil.longs.Long2LongFunction"
import { $Double2LongFunction } from "it.unimi.dsi.fastutil.doubles.Double2LongFunction"
import { $Reference2ReferenceFunction, $Reference2ReferenceFunction$$Type } from "it.unimi.dsi.fastutil.objects.Reference2ReferenceFunction"
import { $Object2ReferenceFunction$$Type } from "it.unimi.dsi.fastutil.objects.Object2ReferenceFunction"
import { $Long2ByteFunction$$Type } from "it.unimi.dsi.fastutil.longs.Long2ByteFunction"
import { $Long2ReferenceFunction$$Type } from "it.unimi.dsi.fastutil.longs.Long2ReferenceFunction"
import { $Reference2DoubleFunction } from "it.unimi.dsi.fastutil.objects.Reference2DoubleFunction"
import { $Reference2CharFunction } from "it.unimi.dsi.fastutil.objects.Reference2CharFunction"
import { $Float2ReferenceFunction$$Type } from "it.unimi.dsi.fastutil.floats.Float2ReferenceFunction"

export interface $Reference2LongFunction<K = any> extends $Function$0<K, long>, $ToLongFunction<K> {
/** @deprecated */
"andThen"<T>(function0: $Function$$Type<long, T>): $Function<K, T>
"andThenByte"(long2ByteFunction0: $Long2ByteFunction$$Type): $Reference2ByteFunction<K>
"andThenChar"(long2CharFunction0: $Long2CharFunction$$Type): $Reference2CharFunction<K>
"andThenDouble"(long2DoubleFunction0: $Long2DoubleFunction$$Type): $Reference2DoubleFunction<K>
"andThenFloat"(long2FloatFunction0: $Long2FloatFunction$$Type): $Reference2FloatFunction<K>
"andThenInt"(long2IntFunction0: $Long2IntFunction$$Type): $Reference2IntFunction<K>
"andThenLong"(long2LongFunction0: $Long2LongFunction$$Type): $Reference2LongFunction<K>
"andThenObject"<T>(long2ObjectFunction0: $Long2ObjectFunction$$Type<T>): $Reference2ObjectFunction<K, T>
"andThenReference"<T>(long2ReferenceFunction0: $Long2ReferenceFunction$$Type<T>): $Reference2ReferenceFunction<K, T>
"andThenShort"(long2ShortFunction0: $Long2ShortFunction$$Type): $Reference2ShortFunction<K>
"apply"(k0: K): long
"applyAsLong"(k0: K): long
"clear"(): void
"compose"<V>(function0: $Function$$Type<V, K>): $Function<V, long>
"composeByte"(byte2ReferenceFunction0: $Byte2ReferenceFunction$$Type<K>): $Byte2LongFunction
"composeChar"(char2ReferenceFunction0: $Char2ReferenceFunction$$Type<K>): $Char2LongFunction
"composeDouble"(double2ReferenceFunction0: $Double2ReferenceFunction$$Type<K>): $Double2LongFunction
"composeFloat"(float2ReferenceFunction0: $Float2ReferenceFunction$$Type<K>): $Float2LongFunction
"composeInt"(int2ReferenceFunction0: $Int2ReferenceFunction$$Type<K>): $Int2LongFunction
"composeLong"(long2ReferenceFunction0: $Long2ReferenceFunction$$Type<K>): $Long2LongFunction
"composeObject"<T>(object2ReferenceFunction0: $Object2ReferenceFunction$$Type<T, K>): $Object2LongFunction<T>
"composeReference"<T>(reference2ReferenceFunction0: $Reference2ReferenceFunction$$Type<T, K>): $Reference2LongFunction<T>
"composeShort"(short2ReferenceFunction0: $Short2ReferenceFunction$$Type<K>): $Short2LongFunction
"containsKey"(object0: any): boolean
"defaultReturnValue"(): long
"defaultReturnValue"(long0: long): void
/** @deprecated */
"get"(object0: any): long
"getLong"(object0: any): long
"getOrDefault"(object0: any, long1: long): long
/** @deprecated */
"getOrDefault"(object0: any, long1: long): long
/** @deprecated */
"put"(k0: K, long1: long): long
"put"(k0: K, long1: long): long
"removeLong"(object0: any): long
"size"(): integer
}

export namespace $Reference2LongFunction {
function identity<T>(): $Function<T, T>
}
export abstract class $Reference2LongFunction$$Static<K = any> implements $Reference2LongFunction<K> {
static "identity"<T>(): $Function<T, T>
}
}

declare module "it.unimi.dsi.fastutil.objects.Reference2ByteFunction" {
import { $Double2ReferenceFunction$$Type } from "it.unimi.dsi.fastutil.doubles.Double2ReferenceFunction"
import { $Byte2FloatFunction$$Type } from "it.unimi.dsi.fastutil.bytes.Byte2FloatFunction"
import { $Byte2LongFunction$$Type } from "it.unimi.dsi.fastutil.bytes.Byte2LongFunction"
import { $Int2ByteFunction } from "it.unimi.dsi.fastutil.ints.Int2ByteFunction"
import { $Int2ReferenceFunction$$Type } from "it.unimi.dsi.fastutil.ints.Int2ReferenceFunction"
import { $Short2ReferenceFunction$$Type } from "it.unimi.dsi.fastutil.shorts.Short2ReferenceFunction"
import { $Float2ByteFunction } from "it.unimi.dsi.fastutil.floats.Float2ByteFunction"
import { $Function, $Function$$Type } from "java.util.function.Function"
import { $Reference2FloatFunction } from "it.unimi.dsi.fastutil.objects.Reference2FloatFunction"
import { $Double2ByteFunction } from "it.unimi.dsi.fastutil.doubles.Double2ByteFunction"
import { $Byte2DoubleFunction$$Type } from "it.unimi.dsi.fastutil.bytes.Byte2DoubleFunction"
import { $Char2ReferenceFunction$$Type } from "it.unimi.dsi.fastutil.chars.Char2ReferenceFunction"
import { $Short2ByteFunction } from "it.unimi.dsi.fastutil.shorts.Short2ByteFunction"
import { $Reference2LongFunction } from "it.unimi.dsi.fastutil.objects.Reference2LongFunction"
import { $Reference2IntFunction } from "it.unimi.dsi.fastutil.objects.Reference2IntFunction"
import { $Reference2ObjectFunction } from "it.unimi.dsi.fastutil.objects.Reference2ObjectFunction"
import { $Byte2ObjectFunction$$Type } from "it.unimi.dsi.fastutil.bytes.Byte2ObjectFunction"
import { $Function as $Function$0 } from "it.unimi.dsi.fastutil.Function"
import { $Byte2ReferenceFunction$$Type } from "it.unimi.dsi.fastutil.bytes.Byte2ReferenceFunction"
import { $Char2ByteFunction } from "it.unimi.dsi.fastutil.chars.Char2ByteFunction"
import { $Object2ByteFunction } from "it.unimi.dsi.fastutil.objects.Object2ByteFunction"
import { $Byte2ShortFunction$$Type } from "it.unimi.dsi.fastutil.bytes.Byte2ShortFunction"
import { $Reference2ShortFunction } from "it.unimi.dsi.fastutil.objects.Reference2ShortFunction"
import { $ToIntFunction } from "java.util.function.ToIntFunction"
import { $Byte2CharFunction$$Type } from "it.unimi.dsi.fastutil.bytes.Byte2CharFunction"
import { $Reference2ReferenceFunction, $Reference2ReferenceFunction$$Type } from "it.unimi.dsi.fastutil.objects.Reference2ReferenceFunction"
import { $Object2ReferenceFunction$$Type } from "it.unimi.dsi.fastutil.objects.Object2ReferenceFunction"
import { $Long2ByteFunction } from "it.unimi.dsi.fastutil.longs.Long2ByteFunction"
import { $Long2ReferenceFunction$$Type } from "it.unimi.dsi.fastutil.longs.Long2ReferenceFunction"
import { $Reference2DoubleFunction } from "it.unimi.dsi.fastutil.objects.Reference2DoubleFunction"
import { $Reference2CharFunction } from "it.unimi.dsi.fastutil.objects.Reference2CharFunction"
import { $Float2ReferenceFunction$$Type } from "it.unimi.dsi.fastutil.floats.Float2ReferenceFunction"
import { $Byte2ByteFunction, $Byte2ByteFunction$$Type } from "it.unimi.dsi.fastutil.bytes.Byte2ByteFunction"
import { $Byte2IntFunction$$Type } from "it.unimi.dsi.fastutil.bytes.Byte2IntFunction"

export interface $Reference2ByteFunction<K = any> extends $Function$0<K, byte>, $ToIntFunction<K> {
/** @deprecated */
"andThen"<T>(function0: $Function$$Type<byte, T>): $Function<K, T>
"andThenByte"(byte2ByteFunction0: $Byte2ByteFunction$$Type): $Reference2ByteFunction<K>
"andThenChar"(byte2CharFunction0: $Byte2CharFunction$$Type): $Reference2CharFunction<K>
"andThenDouble"(byte2DoubleFunction0: $Byte2DoubleFunction$$Type): $Reference2DoubleFunction<K>
"andThenFloat"(byte2FloatFunction0: $Byte2FloatFunction$$Type): $Reference2FloatFunction<K>
"andThenInt"(byte2IntFunction0: $Byte2IntFunction$$Type): $Reference2IntFunction<K>
"andThenLong"(byte2LongFunction0: $Byte2LongFunction$$Type): $Reference2LongFunction<K>
"andThenObject"<T>(byte2ObjectFunction0: $Byte2ObjectFunction$$Type<T>): $Reference2ObjectFunction<K, T>
"andThenReference"<T>(byte2ReferenceFunction0: $Byte2ReferenceFunction$$Type<T>): $Reference2ReferenceFunction<K, T>
"andThenShort"(byte2ShortFunction0: $Byte2ShortFunction$$Type): $Reference2ShortFunction<K>
"apply"(k0: K): byte
"applyAsInt"(k0: K): integer
"clear"(): void
"compose"<V>(function0: $Function$$Type<V, K>): $Function<V, byte>
"composeByte"(byte2ReferenceFunction0: $Byte2ReferenceFunction$$Type<K>): $Byte2ByteFunction
"composeChar"(char2ReferenceFunction0: $Char2ReferenceFunction$$Type<K>): $Char2ByteFunction
"composeDouble"(double2ReferenceFunction0: $Double2ReferenceFunction$$Type<K>): $Double2ByteFunction
"composeFloat"(float2ReferenceFunction0: $Float2ReferenceFunction$$Type<K>): $Float2ByteFunction
"composeInt"(int2ReferenceFunction0: $Int2ReferenceFunction$$Type<K>): $Int2ByteFunction
"composeLong"(long2ReferenceFunction0: $Long2ReferenceFunction$$Type<K>): $Long2ByteFunction
"composeObject"<T>(object2ReferenceFunction0: $Object2ReferenceFunction$$Type<T, K>): $Object2ByteFunction<T>
"composeReference"<T>(reference2ReferenceFunction0: $Reference2ReferenceFunction$$Type<T, K>): $Reference2ByteFunction<T>
"composeShort"(short2ReferenceFunction0: $Short2ReferenceFunction$$Type<K>): $Short2ByteFunction
"containsKey"(object0: any): boolean
"defaultReturnValue"(): byte
"defaultReturnValue"(byte0: byte): void
/** @deprecated */
"get"(object0: any): byte
"getByte"(object0: any): byte
"getOrDefault"(object0: any, byte1: byte): byte
/** @deprecated */
"getOrDefault"(object0: any, byte1: byte): byte
/** @deprecated */
"put"(k0: K, byte1: byte): byte
"put"(k0: K, byte1: byte): byte
"removeByte"(object0: any): byte
"size"(): integer
}

export namespace $Reference2ByteFunction {
function identity<T>(): $Function<T, T>
}
export abstract class $Reference2ByteFunction$$Static<K = any> implements $Reference2ByteFunction<K> {
static "identity"<T>(): $Function<T, T>
}
}

declare module "it.unimi.dsi.fastutil.objects.Reference2FloatFunction" {
import { $Double2ReferenceFunction$$Type } from "it.unimi.dsi.fastutil.doubles.Double2ReferenceFunction"
import { $Float2CharFunction$$Type } from "it.unimi.dsi.fastutil.floats.Float2CharFunction"
import { $Byte2FloatFunction } from "it.unimi.dsi.fastutil.bytes.Byte2FloatFunction"
import { $Int2ReferenceFunction$$Type } from "it.unimi.dsi.fastutil.ints.Int2ReferenceFunction"
import { $Short2ReferenceFunction$$Type } from "it.unimi.dsi.fastutil.shorts.Short2ReferenceFunction"
import { $Float2ByteFunction$$Type } from "it.unimi.dsi.fastutil.floats.Float2ByteFunction"
import { $Char2FloatFunction } from "it.unimi.dsi.fastutil.chars.Char2FloatFunction"
import { $Function, $Function$$Type } from "java.util.function.Function"
import { $Reference2ByteFunction } from "it.unimi.dsi.fastutil.objects.Reference2ByteFunction"
import { $Float2FloatFunction, $Float2FloatFunction$$Type } from "it.unimi.dsi.fastutil.floats.Float2FloatFunction"
import { $Float2IntFunction$$Type } from "it.unimi.dsi.fastutil.floats.Float2IntFunction"
import { $Char2ReferenceFunction$$Type } from "it.unimi.dsi.fastutil.chars.Char2ReferenceFunction"
import { $Object2FloatFunction } from "it.unimi.dsi.fastutil.objects.Object2FloatFunction"
import { $Reference2LongFunction } from "it.unimi.dsi.fastutil.objects.Reference2LongFunction"
import { $Reference2IntFunction } from "it.unimi.dsi.fastutil.objects.Reference2IntFunction"
import { $Long2FloatFunction } from "it.unimi.dsi.fastutil.longs.Long2FloatFunction"
import { $Reference2ObjectFunction } from "it.unimi.dsi.fastutil.objects.Reference2ObjectFunction"
import { $Int2FloatFunction } from "it.unimi.dsi.fastutil.ints.Int2FloatFunction"
import { $Double2FloatFunction } from "it.unimi.dsi.fastutil.doubles.Double2FloatFunction"
import { $Function as $Function$0 } from "it.unimi.dsi.fastutil.Function"
import { $Float2LongFunction$$Type } from "it.unimi.dsi.fastutil.floats.Float2LongFunction"
import { $Byte2ReferenceFunction$$Type } from "it.unimi.dsi.fastutil.bytes.Byte2ReferenceFunction"
import { $Reference2ShortFunction } from "it.unimi.dsi.fastutil.objects.Reference2ShortFunction"
import { $Float2ShortFunction$$Type } from "it.unimi.dsi.fastutil.floats.Float2ShortFunction"
import { $Short2FloatFunction } from "it.unimi.dsi.fastutil.shorts.Short2FloatFunction"
import { $Reference2ReferenceFunction, $Reference2ReferenceFunction$$Type } from "it.unimi.dsi.fastutil.objects.Reference2ReferenceFunction"
import { $Float2ObjectFunction$$Type } from "it.unimi.dsi.fastutil.floats.Float2ObjectFunction"
import { $Object2ReferenceFunction$$Type } from "it.unimi.dsi.fastutil.objects.Object2ReferenceFunction"
import { $Long2ReferenceFunction$$Type } from "it.unimi.dsi.fastutil.longs.Long2ReferenceFunction"
import { $Reference2DoubleFunction } from "it.unimi.dsi.fastutil.objects.Reference2DoubleFunction"
import { $ToDoubleFunction } from "java.util.function.ToDoubleFunction"
import { $Reference2CharFunction } from "it.unimi.dsi.fastutil.objects.Reference2CharFunction"
import { $Float2DoubleFunction$$Type } from "it.unimi.dsi.fastutil.floats.Float2DoubleFunction"
import { $Float2ReferenceFunction$$Type } from "it.unimi.dsi.fastutil.floats.Float2ReferenceFunction"

export interface $Reference2FloatFunction<K = any> extends $Function$0<K, float>, $ToDoubleFunction<K> {
/** @deprecated */
"andThen"<T>(function0: $Function$$Type<float, T>): $Function<K, T>
"andThenByte"(float2ByteFunction0: $Float2ByteFunction$$Type): $Reference2ByteFunction<K>
"andThenChar"(float2CharFunction0: $Float2CharFunction$$Type): $Reference2CharFunction<K>
"andThenDouble"(float2DoubleFunction0: $Float2DoubleFunction$$Type): $Reference2DoubleFunction<K>
"andThenFloat"(float2FloatFunction0: $Float2FloatFunction$$Type): $Reference2FloatFunction<K>
"andThenInt"(float2IntFunction0: $Float2IntFunction$$Type): $Reference2IntFunction<K>
"andThenLong"(float2LongFunction0: $Float2LongFunction$$Type): $Reference2LongFunction<K>
"andThenObject"<T>(float2ObjectFunction0: $Float2ObjectFunction$$Type<T>): $Reference2ObjectFunction<K, T>
"andThenReference"<T>(float2ReferenceFunction0: $Float2ReferenceFunction$$Type<T>): $Reference2ReferenceFunction<K, T>
"andThenShort"(float2ShortFunction0: $Float2ShortFunction$$Type): $Reference2ShortFunction<K>
"apply"(k0: K): float
"applyAsDouble"(k0: K): double
"clear"(): void
"compose"<V>(function0: $Function$$Type<V, K>): $Function<V, float>
"composeByte"(byte2ReferenceFunction0: $Byte2ReferenceFunction$$Type<K>): $Byte2FloatFunction
"composeChar"(char2ReferenceFunction0: $Char2ReferenceFunction$$Type<K>): $Char2FloatFunction
"composeDouble"(double2ReferenceFunction0: $Double2ReferenceFunction$$Type<K>): $Double2FloatFunction
"composeFloat"(float2ReferenceFunction0: $Float2ReferenceFunction$$Type<K>): $Float2FloatFunction
"composeInt"(int2ReferenceFunction0: $Int2ReferenceFunction$$Type<K>): $Int2FloatFunction
"composeLong"(long2ReferenceFunction0: $Long2ReferenceFunction$$Type<K>): $Long2FloatFunction
"composeObject"<T>(object2ReferenceFunction0: $Object2ReferenceFunction$$Type<T, K>): $Object2FloatFunction<T>
"composeReference"<T>(reference2ReferenceFunction0: $Reference2ReferenceFunction$$Type<T, K>): $Reference2FloatFunction<T>
"composeShort"(short2ReferenceFunction0: $Short2ReferenceFunction$$Type<K>): $Short2FloatFunction
"containsKey"(object0: any): boolean
"defaultReturnValue"(float0: float): void
"defaultReturnValue"(): float
/** @deprecated */
"get"(object0: any): float
"getFloat"(object0: any): float
/** @deprecated */
"getOrDefault"(object0: any, float1: float): float
"getOrDefault"(object0: any, float1: float): float
"put"(k0: K, float1: float): float
/** @deprecated */
"put"(k0: K, float1: float): float
"removeFloat"(object0: any): float
"size"(): integer
}

export namespace $Reference2FloatFunction {
function identity<T>(): $Function<T, T>
}
export abstract class $Reference2FloatFunction$$Static<K = any> implements $Reference2FloatFunction<K> {
static "identity"<T>(): $Function<T, T>
}
}

declare module "it.unimi.dsi.fastutil.objects.Object2FloatMap" {
import { $Float2CharFunction$$Type } from "it.unimi.dsi.fastutil.floats.Float2CharFunction"
import { $Byte2FloatFunction } from "it.unimi.dsi.fastutil.bytes.Byte2FloatFunction"
import { $BiFunction$$Type } from "java.util.function.BiFunction"
import { $Float2ByteFunction$$Type } from "it.unimi.dsi.fastutil.floats.Float2ByteFunction"
import { $FloatBinaryOperator$$Type } from "it.unimi.dsi.fastutil.floats.FloatBinaryOperator"
import { $Char2FloatFunction } from "it.unimi.dsi.fastutil.chars.Char2FloatFunction"
import { $Double2ObjectFunction$$Type } from "it.unimi.dsi.fastutil.doubles.Double2ObjectFunction"
import { $Object2ObjectFunction, $Object2ObjectFunction$$Type } from "it.unimi.dsi.fastutil.objects.Object2ObjectFunction"
import { $Function, $Function$$Type } from "java.util.function.Function"
import { $Reference2FloatFunction } from "it.unimi.dsi.fastutil.objects.Reference2FloatFunction"
import { $Object2LongFunction } from "it.unimi.dsi.fastutil.objects.Object2LongFunction"
import { $Object2DoubleFunction } from "it.unimi.dsi.fastutil.objects.Object2DoubleFunction"
import { $Float2FloatFunction, $Float2FloatFunction$$Type } from "it.unimi.dsi.fastutil.floats.Float2FloatFunction"
import { $DoubleBinaryOperator$$Type } from "java.util.function.DoubleBinaryOperator"
import { $Float2IntFunction$$Type } from "it.unimi.dsi.fastutil.floats.Float2IntFunction"
import { $Object2FloatFunction, $Object2FloatFunction$$Type } from "it.unimi.dsi.fastutil.objects.Object2FloatFunction"
import { $Object2IntFunction } from "it.unimi.dsi.fastutil.objects.Object2IntFunction"
import { $Map, $Map$$Type } from "java.util.Map"
import { $BiConsumer$$Type } from "java.util.function.BiConsumer"
import { $Long2FloatFunction } from "it.unimi.dsi.fastutil.longs.Long2FloatFunction"
import { $Object2FloatMap$Entry } from "it.unimi.dsi.fastutil.objects.Object2FloatMap$Entry"
import { $Int2FloatFunction } from "it.unimi.dsi.fastutil.ints.Int2FloatFunction"
import { $Reference2ObjectFunction$$Type } from "it.unimi.dsi.fastutil.objects.Reference2ObjectFunction"
import { $Map$Entry, $Map$Entry$$Type } from "java.util.Map$Entry"
import { $Byte2ObjectFunction$$Type } from "it.unimi.dsi.fastutil.bytes.Byte2ObjectFunction"
import { $Double2FloatFunction } from "it.unimi.dsi.fastutil.doubles.Double2FloatFunction"
import { $Short2ObjectFunction$$Type } from "it.unimi.dsi.fastutil.shorts.Short2ObjectFunction"
import { $Object2ByteFunction } from "it.unimi.dsi.fastutil.objects.Object2ByteFunction"
import { $Float2LongFunction$$Type } from "it.unimi.dsi.fastutil.floats.Float2LongFunction"
import { $Int2ObjectFunction$$Type } from "it.unimi.dsi.fastutil.ints.Int2ObjectFunction"
import { $Long2ObjectFunction$$Type } from "it.unimi.dsi.fastutil.longs.Long2ObjectFunction"
import { $ObjectSet } from "it.unimi.dsi.fastutil.objects.ObjectSet"
import { $Float2ShortFunction$$Type } from "it.unimi.dsi.fastutil.floats.Float2ShortFunction"
import { $Short2FloatFunction } from "it.unimi.dsi.fastutil.shorts.Short2FloatFunction"
import { $FloatCollection } from "it.unimi.dsi.fastutil.floats.FloatCollection"
import { $Float2ObjectFunction$$Type } from "it.unimi.dsi.fastutil.floats.Float2ObjectFunction"
import { $Object2ReferenceFunction } from "it.unimi.dsi.fastutil.objects.Object2ReferenceFunction"
import { $Char2ObjectFunction$$Type } from "it.unimi.dsi.fastutil.chars.Char2ObjectFunction"
import { $ToDoubleFunction$$Type } from "java.util.function.ToDoubleFunction"
import { $Float2DoubleFunction$$Type } from "it.unimi.dsi.fastutil.floats.Float2DoubleFunction"
import { $Float2ReferenceFunction$$Type } from "it.unimi.dsi.fastutil.floats.Float2ReferenceFunction"
import { $Object2ShortFunction } from "it.unimi.dsi.fastutil.objects.Object2ShortFunction"
import { $Object2CharFunction } from "it.unimi.dsi.fastutil.objects.Object2CharFunction"

export interface $Object2FloatMap<K = any> extends $Object2FloatFunction<K>, $Map<K, float> {
/** @deprecated */
"andThen"<T>(function0: $Function$$Type<float, T>): $Function<K, T>
"andThenByte"(float2ByteFunction0: $Float2ByteFunction$$Type): $Object2ByteFunction<K>
"andThenChar"(float2CharFunction0: $Float2CharFunction$$Type): $Object2CharFunction<K>
"andThenDouble"(float2DoubleFunction0: $Float2DoubleFunction$$Type): $Object2DoubleFunction<K>
"andThenFloat"(float2FloatFunction0: $Float2FloatFunction$$Type): $Object2FloatFunction<K>
"andThenInt"(float2IntFunction0: $Float2IntFunction$$Type): $Object2IntFunction<K>
"andThenLong"(float2LongFunction0: $Float2LongFunction$$Type): $Object2LongFunction<K>
"andThenObject"<T>(float2ObjectFunction0: $Float2ObjectFunction$$Type<T>): $Object2ObjectFunction<K, T>
"andThenReference"<T>(float2ReferenceFunction0: $Float2ReferenceFunction$$Type<T>): $Object2ReferenceFunction<K, T>
"andThenShort"(float2ShortFunction0: $Float2ShortFunction$$Type): $Object2ShortFunction<K>
"apply"(k0: K): float
"applyAsDouble"(k0: K): double
"clear"(): void
"compose"<V>(function0: $Function$$Type<V, K>): $Function<V, float>
"composeByte"(byte2ObjectFunction0: $Byte2ObjectFunction$$Type<K>): $Byte2FloatFunction
"composeChar"(char2ObjectFunction0: $Char2ObjectFunction$$Type<K>): $Char2FloatFunction
"composeDouble"(double2ObjectFunction0: $Double2ObjectFunction$$Type<K>): $Double2FloatFunction
"composeFloat"(float2ObjectFunction0: $Float2ObjectFunction$$Type<K>): $Float2FloatFunction
"composeInt"(int2ObjectFunction0: $Int2ObjectFunction$$Type<K>): $Int2FloatFunction
"composeLong"(long2ObjectFunction0: $Long2ObjectFunction$$Type<K>): $Long2FloatFunction
"composeObject"<T>(object2ObjectFunction0: $Object2ObjectFunction$$Type<T, K>): $Object2FloatFunction<T>
"composeReference"<T>(reference2ObjectFunction0: $Reference2ObjectFunction$$Type<T, K>): $Reference2FloatFunction<T>
"composeShort"(short2ObjectFunction0: $Short2ObjectFunction$$Type<K>): $Short2FloatFunction
"compute"(k0: K, biFunction1: $BiFunction$$Type<K, float, float>): float
"computeFloat"(k0: K, biFunction1: $BiFunction$$Type<K, float, float>): float
/** @deprecated */
"computeFloatIfAbsent"(k0: K, toDoubleFunction1: $ToDoubleFunction$$Type<K>): float
/** @deprecated */
"computeFloatIfAbsentPartial"(k0: K, object2FloatFunction1: $Object2FloatFunction$$Type<K>): float
"computeFloatIfPresent"(k0: K, biFunction1: $BiFunction$$Type<K, float, float>): float
"computeIfAbsent"(k0: K, toDoubleFunction1: $ToDoubleFunction$$Type<K>): float
"computeIfAbsent"(k0: K, object2FloatFunction1: $Object2FloatFunction$$Type<K>): float
"computeIfAbsent"(k0: K, function1: $Function$$Type<K, float>): float
"computeIfPresent"(k0: K, biFunction1: $BiFunction$$Type<K, float, float>): float
"containsKey"(object0: any): boolean
/** @deprecated */
"containsValue"(object0: any): boolean
"containsValue"(float0: float): boolean
"defaultReturnValue"(float0: float): void
"defaultReturnValue"(): float
/** @deprecated */
"entrySet"(): $ObjectSet<$Map$Entry<K, float>>
"equals"(object0: any): boolean
"forEach"(biConsumer0: $BiConsumer$$Type<K, float>): void
"getFloat"(object0: any): float
"getOrDefault"(object0: any, float1: float): float
/** @deprecated */
"getOrDefault"(object0: any, float1: float): float
"hashCode"(): integer
"isEmpty"(): boolean
"keySet"(): $ObjectSet<K>
/** @deprecated */
"merge"(k0: K, float1: float, biFunction2: $BiFunction$$Type<float, float, float>): float
"merge"(k0: K, float1: float, biFunction2: $BiFunction$$Type<float, float, float>): float
"mergeFloat"(k0: K, float1: float, floatBinaryOperator2: $FloatBinaryOperator$$Type): float
/** @deprecated */
"mergeFloat"(k0: K, float1: float, biFunction2: $BiFunction$$Type<float, float, float>): float
"mergeFloat"(k0: K, float1: float, doubleBinaryOperator2: $DoubleBinaryOperator$$Type): float
"object2FloatEntrySet"(): $ObjectSet<$Object2FloatMap$Entry<K>>
/** @deprecated */
"put"(k0: K, float1: float): float
"put"(k0: K, float1: float): float
"putAll"(map0: $Map$$Type<K, float>): void
"putIfAbsent"(k0: K, float1: float): float
/** @deprecated */
"putIfAbsent"(k0: K, float1: float): float
/** @deprecated */
"remove"(object0: any): float
/** @deprecated */
"remove"(object0: any, object1: any): boolean
"remove"(object0: any, float1: float): boolean
"removeFloat"(object0: any): float
/** @deprecated */
"replace"(k0: K, float1: float, float2: float): boolean
/** @deprecated */
"replace"(k0: K, float1: float): float
"replace"(k0: K, float1: float, float2: float): boolean
"replace"(k0: K, float1: float): float
"replaceAll"(biFunction0: $BiFunction$$Type<K, float, float>): void
"size"(): integer
"values"(): $FloatCollection
get "empty"(): boolean
}

export namespace $Object2FloatMap {
function copyOf<K, V>(map0: $Map$$Type<K, V>): $Map<K, V>
function entry<K, V>(k0: K, v1: V): $Map$Entry<K, V>
function identity<T>(): $Function<T, T>
function of<K, V>(k0: K, v1: V, k2: K, v3: V, k4: K, v5: V, k6: K, v7: V, k8: K, v9: V): $Map<K, V>
function of<K, V>(k0: K, v1: V, k2: K, v3: V, k4: K, v5: V, k6: K, v7: V): $Map<K, V>
function of<K, V>(k0: K, v1: V, k2: K, v3: V, k4: K, v5: V): $Map<K, V>
function of<K, V>(): $Map<K, V>
function of<K, V>(k0: K, v1: V, k2: K, v3: V): $Map<K, V>
function of<K, V>(k0: K, v1: V): $Map<K, V>
function of<K, V>(k0: K, v1: V, k2: K, v3: V, k4: K, v5: V, k6: K, v7: V, k8: K, v9: V, k10: K, v11: V, k12: K, v13: V, k14: K, v15: V, k16: K, v17: V, k18: K, v19: V): $Map<K, V>
function of<K, V>(k0: K, v1: V, k2: K, v3: V, k4: K, v5: V, k6: K, v7: V, k8: K, v9: V, k10: K, v11: V, k12: K, v13: V, k14: K, v15: V, k16: K, v17: V): $Map<K, V>
function of<K, V>(k0: K, v1: V, k2: K, v3: V, k4: K, v5: V, k6: K, v7: V, k8: K, v9: V, k10: K, v11: V, k12: K, v13: V, k14: K, v15: V): $Map<K, V>
function of<K, V>(k0: K, v1: V, k2: K, v3: V, k4: K, v5: V, k6: K, v7: V, k8: K, v9: V, k10: K, v11: V, k12: K, v13: V): $Map<K, V>
function of<K, V>(k0: K, v1: V, k2: K, v3: V, k4: K, v5: V, k6: K, v7: V, k8: K, v9: V, k10: K, v11: V): $Map<K, V>
function ofEntries<K, V>(...entry0s: $Map$Entry$$Type<K, V>[]): $Map<K, V>
}
export abstract class $Object2FloatMap$$Static<K = any> implements $Object2FloatMap<K> {
static "copyOf"<K, V>(map0: $Map$$Type<K, V>): $Map<K, V>
static "entry"<K, V>(k0: K, v1: V): $Map$Entry<K, V>
static "identity"<T>(): $Function<T, T>
static "of"<K, V>(k0: K, v1: V, k2: K, v3: V, k4: K, v5: V, k6: K, v7: V, k8: K, v9: V): $Map<K, V>
static "of"<K, V>(k0: K, v1: V, k2: K, v3: V, k4: K, v5: V, k6: K, v7: V): $Map<K, V>
static "of"<K, V>(k0: K, v1: V, k2: K, v3: V, k4: K, v5: V): $Map<K, V>
static "of"<K, V>(): $Map<K, V>
static "of"<K, V>(k0: K, v1: V, k2: K, v3: V): $Map<K, V>
static "of"<K, V>(k0: K, v1: V): $Map<K, V>
static "of"<K, V>(k0: K, v1: V, k2: K, v3: V, k4: K, v5: V, k6: K, v7: V, k8: K, v9: V, k10: K, v11: V, k12: K, v13: V, k14: K, v15: V, k16: K, v17: V, k18: K, v19: V): $Map<K, V>
static "of"<K, V>(k0: K, v1: V, k2: K, v3: V, k4: K, v5: V, k6: K, v7: V, k8: K, v9: V, k10: K, v11: V, k12: K, v13: V, k14: K, v15: V, k16: K, v17: V): $Map<K, V>
static "of"<K, V>(k0: K, v1: V, k2: K, v3: V, k4: K, v5: V, k6: K, v7: V, k8: K, v9: V, k10: K, v11: V, k12: K, v13: V, k14: K, v15: V): $Map<K, V>
static "of"<K, V>(k0: K, v1: V, k2: K, v3: V, k4: K, v5: V, k6: K, v7: V, k8: K, v9: V, k10: K, v11: V, k12: K, v13: V): $Map<K, V>
static "of"<K, V>(k0: K, v1: V, k2: K, v3: V, k4: K, v5: V, k6: K, v7: V, k8: K, v9: V, k10: K, v11: V): $Map<K, V>
static "ofEntries"<K, V>(...entry0s: $Map$Entry$$Type<K, V>[]): $Map<K, V>
}
}

declare module "it.unimi.dsi.fastutil.objects.AbstractObjectList" {
import { $Predicate$$Type } from "java.util.function.Predicate"
import { $Collection$$Type } from "java.util.Collection"
import { $UnaryOperator$$Type } from "java.util.function.UnaryOperator"
import { $Stack } from "it.unimi.dsi.fastutil.Stack"
import { $Consumer$$Type } from "java.util.function.Consumer"
import { $AbstractObjectCollection } from "it.unimi.dsi.fastutil.objects.AbstractObjectCollection"
import { $List, $List$$Type } from "java.util.List"
import { $ObjectListIterator } from "it.unimi.dsi.fastutil.objects.ObjectListIterator"
import { $Stream } from "java.util.stream.Stream"
import { $Comparator$$Type } from "java.util.Comparator"
import { $ObjectList, $ObjectList$$Type } from "it.unimi.dsi.fastutil.objects.ObjectList"
import { $IntFunction$$Type } from "java.util.function.IntFunction"

export class $AbstractObjectList<K = any> extends $AbstractObjectCollection<K> implements $ObjectList<K>, $Stack<K> {
public "add"(int0: integer, k1: K): void
public "addAll"(int0: integer, collection1: $Collection$$Type<K>): boolean
public "addAll"(int0: integer, objectList1: $ObjectList$$Type<K>): boolean
public "addAll"(objectList0: $ObjectList$$Type<K>): boolean
public "addElements"(int0: integer, k1s: K[]): void
public "addElements"(int0: integer, k1s: K[], int2: integer, int3: integer): void
public "compareTo"(list0: $List$$Type<K>): integer
public "containsAll"(collection0: $Collection$$Type<any>): boolean
public static "copyOf"<E>(collection0: $Collection$$Type<E>): $List<E>
public "forEach"(consumer0: $Consumer$$Type<K>): void
public "get"(int0: integer): K
public "getElements"(int0: integer, object1s: any[], int2: integer, int3: integer): void
public "indexOf"(object0: any): integer
public "isEmpty"(): boolean
public "iterator"(): $ObjectListIterator<K>
public "lastIndexOf"(object0: any): integer
public "listIterator"(): $ObjectListIterator<K>
public static "of"<K>(k0: K, k1: K): $ObjectList<K>
public static "of"<K>(k0: K, k1: K, k2: K): $ObjectList<K>
public static "of"<K>(...k0s: K[]): $ObjectList<K>
public static "of"<K>(k0: K): $ObjectList<K>
public static "of"<K>(): $ObjectList<K>
public static "of"<E>(e0: E, e1: E, e2: E, e3: E): $List<E>
public static "of"<E>(e0: E, e1: E, e2: E, e3: E, e4: E, e5: E, e6: E, e7: E): $List<E>
public static "of"<E>(e0: E, e1: E, e2: E, e3: E, e4: E, e5: E, e6: E): $List<E>
public static "of"<E>(e0: E, e1: E, e2: E, e3: E, e4: E, e5: E): $List<E>
public static "of"<E>(e0: E, e1: E, e2: E, e3: E, e4: E): $List<E>
public static "of"<E>(e0: E, e1: E, e2: E, e3: E, e4: E, e5: E, e6: E, e7: E, e8: E, e9: E): $List<E>
public static "of"<E>(e0: E, e1: E, e2: E, e3: E, e4: E, e5: E, e6: E, e7: E, e8: E): $List<E>
public "parallelStream"(): $Stream<K>
public "peek"(int0: integer): K
public "pop"(): K
public "push"(k0: K): void
public "remove"(int0: integer): K
public "remove"(object0: any): boolean
public "removeAll"(collection0: $Collection$$Type<any>): boolean
public "removeElements"(int0: integer, int1: integer): void
public "removeIf"(predicate0: $Predicate$$Type<K>): boolean
public "replaceAll"(unaryOperator0: $UnaryOperator$$Type<K>): void
public "retainAll"(collection0: $Collection$$Type<any>): boolean
public "set"(int0: integer, k1: K): K
public "setElements"(int0: integer, k1s: K[], int2: integer, int3: integer): void
public "setElements"(k0s: K[]): void
public "setElements"(int0: integer, k1s: K[]): void
public "size"(int0: integer): void
public "size"(): integer
public "sort"(comparator0: $Comparator$$Type<K>): void
public "stream"(): $Stream<K>
public "toArray"<T>(t0s: T[]): T[]
public "toArray"<T>(intFunction0: $IntFunction$$Type<T[]>): T[]
public "top"(): K
public "unstableSort"(comparator0: $Comparator$$Type<K>): void
[index: number]: K
get "empty"(): boolean
set "elements"(value: K[])
}
}

declare module "it.unimi.dsi.fastutil.objects.AbstractObject2IntMap" {
import { $Int2ShortFunction$$Type } from "it.unimi.dsi.fastutil.ints.Int2ShortFunction"
import { $Int2ByteFunction$$Type } from "it.unimi.dsi.fastutil.ints.Int2ByteFunction"
import { $Int2ReferenceFunction$$Type } from "it.unimi.dsi.fastutil.ints.Int2ReferenceFunction"
import { $BiFunction$$Type } from "java.util.function.BiFunction"
import { $Object2IntMap$Entry } from "it.unimi.dsi.fastutil.objects.Object2IntMap$Entry"
import { $IntBinaryOperator$$Type } from "java.util.function.IntBinaryOperator"
import { $Double2ObjectFunction$$Type } from "it.unimi.dsi.fastutil.doubles.Double2ObjectFunction"
import { $Object2ObjectFunction, $Object2ObjectFunction$$Type } from "it.unimi.dsi.fastutil.objects.Object2ObjectFunction"
import { $Function, $Function$$Type } from "java.util.function.Function"
import { $Int2DoubleFunction$$Type } from "it.unimi.dsi.fastutil.ints.Int2DoubleFunction"
import { $Object2LongFunction } from "it.unimi.dsi.fastutil.objects.Object2LongFunction"
import { $Object2DoubleFunction } from "it.unimi.dsi.fastutil.objects.Object2DoubleFunction"
import { $Int2IntFunction, $Int2IntFunction$$Type } from "it.unimi.dsi.fastutil.ints.Int2IntFunction"
import { $Float2IntFunction } from "it.unimi.dsi.fastutil.floats.Float2IntFunction"
import { $Object2FloatFunction } from "it.unimi.dsi.fastutil.objects.Object2FloatFunction"
import { $Object2IntFunction, $Object2IntFunction$$Type } from "it.unimi.dsi.fastutil.objects.Object2IntFunction"
import { $Map, $Map$$Type } from "java.util.Map"
import { $BiConsumer$$Type } from "java.util.function.BiConsumer"
import { $Reference2IntFunction } from "it.unimi.dsi.fastutil.objects.Reference2IntFunction"
import { $Long2IntFunction } from "it.unimi.dsi.fastutil.longs.Long2IntFunction"
import { $Short2IntFunction } from "it.unimi.dsi.fastutil.shorts.Short2IntFunction"
import { $Int2FloatFunction$$Type } from "it.unimi.dsi.fastutil.ints.Int2FloatFunction"
import { $Reference2ObjectFunction$$Type } from "it.unimi.dsi.fastutil.objects.Reference2ObjectFunction"
import { $Map$Entry, $Map$Entry$$Type } from "java.util.Map$Entry"
import { $Byte2ObjectFunction$$Type } from "it.unimi.dsi.fastutil.bytes.Byte2ObjectFunction"
import { $Short2ObjectFunction$$Type } from "it.unimi.dsi.fastutil.shorts.Short2ObjectFunction"
import { $Object2ByteFunction } from "it.unimi.dsi.fastutil.objects.Object2ByteFunction"
import { $Int2ObjectFunction$$Type } from "it.unimi.dsi.fastutil.ints.Int2ObjectFunction"
import { $AbstractObject2IntFunction } from "it.unimi.dsi.fastutil.objects.AbstractObject2IntFunction"
import { $Long2ObjectFunction$$Type } from "it.unimi.dsi.fastutil.longs.Long2ObjectFunction"
import { $ToIntFunction$$Type } from "java.util.function.ToIntFunction"
import { $Char2IntFunction } from "it.unimi.dsi.fastutil.chars.Char2IntFunction"
import { $ObjectSet } from "it.unimi.dsi.fastutil.objects.ObjectSet"
import { $Int2LongFunction$$Type } from "it.unimi.dsi.fastutil.ints.Int2LongFunction"
import { $Serializable } from "java.io.Serializable"
import { $Object2ReferenceFunction } from "it.unimi.dsi.fastutil.objects.Object2ReferenceFunction"
import { $Float2ObjectFunction$$Type } from "it.unimi.dsi.fastutil.floats.Float2ObjectFunction"
import { $IntBinaryOperator$$Type as $IntBinaryOperator$0$$Type } from "it.unimi.dsi.fastutil.ints.IntBinaryOperator"
import { $Object2IntMap } from "it.unimi.dsi.fastutil.objects.Object2IntMap"
import { $Char2ObjectFunction$$Type } from "it.unimi.dsi.fastutil.chars.Char2ObjectFunction"
import { $Object2ShortFunction } from "it.unimi.dsi.fastutil.objects.Object2ShortFunction"
import { $Double2IntFunction } from "it.unimi.dsi.fastutil.doubles.Double2IntFunction"
import { $Object2CharFunction } from "it.unimi.dsi.fastutil.objects.Object2CharFunction"
import { $Int2CharFunction$$Type } from "it.unimi.dsi.fastutil.ints.Int2CharFunction"
import { $Byte2IntFunction } from "it.unimi.dsi.fastutil.bytes.Byte2IntFunction"

export class $AbstractObject2IntMap<K = any> extends $AbstractObject2IntFunction<K> implements $Object2IntMap<K>, $Serializable {
/** @deprecated */
public "andThen"<T>(function0: $Function$$Type<integer, T>): $Function<K, T>
public "andThenByte"(int2ByteFunction0: $Int2ByteFunction$$Type): $Object2ByteFunction<K>
public "andThenChar"(int2CharFunction0: $Int2CharFunction$$Type): $Object2CharFunction<K>
public "andThenDouble"(int2DoubleFunction0: $Int2DoubleFunction$$Type): $Object2DoubleFunction<K>
public "andThenFloat"(int2FloatFunction0: $Int2FloatFunction$$Type): $Object2FloatFunction<K>
public "andThenInt"(int2IntFunction0: $Int2IntFunction$$Type): $Object2IntFunction<K>
public "andThenLong"(int2LongFunction0: $Int2LongFunction$$Type): $Object2LongFunction<K>
public "andThenObject"<T>(int2ObjectFunction0: $Int2ObjectFunction$$Type<T>): $Object2ObjectFunction<K, T>
public "andThenReference"<T>(int2ReferenceFunction0: $Int2ReferenceFunction$$Type<T>): $Object2ReferenceFunction<K, T>
public "andThenShort"(int2ShortFunction0: $Int2ShortFunction$$Type): $Object2ShortFunction<K>
public "apply"(k0: K): integer
public "applyAsInt"(k0: K): integer
public "clear"(): void
public "compose"<V>(function0: $Function$$Type<V, K>): $Function<V, integer>
public "composeByte"(byte2ObjectFunction0: $Byte2ObjectFunction$$Type<K>): $Byte2IntFunction
public "composeChar"(char2ObjectFunction0: $Char2ObjectFunction$$Type<K>): $Char2IntFunction
public "composeDouble"(double2ObjectFunction0: $Double2ObjectFunction$$Type<K>): $Double2IntFunction
public "composeFloat"(float2ObjectFunction0: $Float2ObjectFunction$$Type<K>): $Float2IntFunction
public "composeInt"(int2ObjectFunction0: $Int2ObjectFunction$$Type<K>): $Int2IntFunction
public "composeLong"(long2ObjectFunction0: $Long2ObjectFunction$$Type<K>): $Long2IntFunction
public "composeObject"<T>(object2ObjectFunction0: $Object2ObjectFunction$$Type<T, K>): $Object2IntFunction<T>
public "composeReference"<T>(reference2ObjectFunction0: $Reference2ObjectFunction$$Type<T, K>): $Reference2IntFunction<T>
public "composeShort"(short2ObjectFunction0: $Short2ObjectFunction$$Type<K>): $Short2IntFunction
public "compute"(k0: K, biFunction1: $BiFunction$$Type<K, integer, integer>): integer
public "computeIfAbsent"(k0: K, toIntFunction1: $ToIntFunction$$Type<K>): integer
public "computeIfAbsent"(k0: K, object2IntFunction1: $Object2IntFunction$$Type<K>): integer
public "computeIfAbsent"(k0: K, function1: $Function$$Type<K, integer>): integer
public "computeIfPresent"(k0: K, biFunction1: $BiFunction$$Type<K, integer, integer>): integer
public "computeInt"(k0: K, biFunction1: $BiFunction$$Type<K, integer, integer>): integer
/** @deprecated */
public "computeIntIfAbsent"(k0: K, toIntFunction1: $ToIntFunction$$Type<K>): integer
/** @deprecated */
public "computeIntIfAbsentPartial"(k0: K, object2IntFunction1: $Object2IntFunction$$Type<K>): integer
public "computeIntIfPresent"(k0: K, biFunction1: $BiFunction$$Type<K, integer, integer>): integer
public "containsKey"(object0: any): boolean
public "containsValue"(int0: integer): boolean
/** @deprecated */
public "containsValue"(object0: any): boolean
public static "copyOf"<K, V>(map0: $Map$$Type<K, V>): $Map<K, V>
public "defaultReturnValue"(int0: integer): void
public "defaultReturnValue"(): integer
public static "entry"<K, V>(k0: K, v1: V): $Map$Entry<K, V>
/** @deprecated */
public "entrySet"(): $ObjectSet<$Map$Entry<K, integer>>
public "forEach"(biConsumer0: $BiConsumer$$Type<K, integer>): void
public "getInt"(object0: any): integer
/** @deprecated */
public "getOrDefault"(object0: any, integer1: integer): integer
public "getOrDefault"(object0: any, int1: integer): integer
public static "identity"<T>(): $Function<T, T>
public "isEmpty"(): boolean
/** @deprecated */
public "merge"(k0: K, integer1: integer, biFunction2: $BiFunction$$Type<integer, integer, integer>): integer
public "merge"(k0: K, int1: integer, biFunction2: $BiFunction$$Type<integer, integer, integer>): integer
public "mergeInt"(k0: K, int1: integer, intBinaryOperator2: $IntBinaryOperator$0$$Type): integer
/** @deprecated */
public "mergeInt"(k0: K, int1: integer, biFunction2: $BiFunction$$Type<integer, integer, integer>): integer
public "mergeInt"(k0: K, int1: integer, intBinaryOperator2: $IntBinaryOperator$$Type): integer
public "object2IntEntrySet"(): $ObjectSet<$Object2IntMap$Entry<K>>
public static "of"<K, V>(k0: K, v1: V, k2: K, v3: V, k4: K, v5: V, k6: K, v7: V, k8: K, v9: V): $Map<K, V>
public static "of"<K, V>(k0: K, v1: V, k2: K, v3: V, k4: K, v5: V, k6: K, v7: V): $Map<K, V>
public static "of"<K, V>(k0: K, v1: V, k2: K, v3: V, k4: K, v5: V): $Map<K, V>
public static "of"<K, V>(): $Map<K, V>
public static "of"<K, V>(k0: K, v1: V, k2: K, v3: V): $Map<K, V>
public static "of"<K, V>(k0: K, v1: V): $Map<K, V>
public static "of"<K, V>(k0: K, v1: V, k2: K, v3: V, k4: K, v5: V, k6: K, v7: V, k8: K, v9: V, k10: K, v11: V, k12: K, v13: V, k14: K, v15: V, k16: K, v17: V, k18: K, v19: V): $Map<K, V>
public static "of"<K, V>(k0: K, v1: V, k2: K, v3: V, k4: K, v5: V, k6: K, v7: V, k8: K, v9: V, k10: K, v11: V, k12: K, v13: V, k14: K, v15: V, k16: K, v17: V): $Map<K, V>
public static "of"<K, V>(k0: K, v1: V, k2: K, v3: V, k4: K, v5: V, k6: K, v7: V, k8: K, v9: V, k10: K, v11: V, k12: K, v13: V, k14: K, v15: V): $Map<K, V>
public static "of"<K, V>(k0: K, v1: V, k2: K, v3: V, k4: K, v5: V, k6: K, v7: V, k8: K, v9: V, k10: K, v11: V, k12: K, v13: V): $Map<K, V>
public static "of"<K, V>(k0: K, v1: V, k2: K, v3: V, k4: K, v5: V, k6: K, v7: V, k8: K, v9: V, k10: K, v11: V): $Map<K, V>
public static "ofEntries"<K, V>(...entry0s: $Map$Entry$$Type<K, V>[]): $Map<K, V>
/** @deprecated */
public "put"(k0: K, integer1: integer): integer
public "put"(k0: K, int1: integer): integer
public "putAll"(map0: $Map$$Type<K, integer>): void
/** @deprecated */
public "putIfAbsent"(k0: K, integer1: integer): integer
public "putIfAbsent"(k0: K, int1: integer): integer
public "remove"(object0: any, int1: integer): boolean
/** @deprecated */
public "remove"(object0: any, object1: any): boolean
public "removeInt"(object0: any): integer
/** @deprecated */
public "replace"(k0: K, integer1: integer): integer
public "replace"(k0: K, int1: integer, int2: integer): boolean
public "replace"(k0: K, int1: integer): integer
/** @deprecated */
public "replace"(k0: K, integer1: integer, integer2: integer): boolean
public "replaceAll"(biFunction0: $BiFunction$$Type<K, integer, integer>): void
public "size"(): integer
get "empty"(): boolean
}
}

declare module "it.unimi.dsi.fastutil.objects.Object2FloatFunction" {
import { $Float2CharFunction$$Type } from "it.unimi.dsi.fastutil.floats.Float2CharFunction"
import { $Byte2FloatFunction } from "it.unimi.dsi.fastutil.bytes.Byte2FloatFunction"
import { $Float2ByteFunction$$Type } from "it.unimi.dsi.fastutil.floats.Float2ByteFunction"
import { $Char2FloatFunction } from "it.unimi.dsi.fastutil.chars.Char2FloatFunction"
import { $Double2ObjectFunction$$Type } from "it.unimi.dsi.fastutil.doubles.Double2ObjectFunction"
import { $Object2ObjectFunction, $Object2ObjectFunction$$Type } from "it.unimi.dsi.fastutil.objects.Object2ObjectFunction"
import { $Function, $Function$$Type } from "java.util.function.Function"
import { $Reference2FloatFunction } from "it.unimi.dsi.fastutil.objects.Reference2FloatFunction"
import { $Object2LongFunction } from "it.unimi.dsi.fastutil.objects.Object2LongFunction"
import { $Object2DoubleFunction } from "it.unimi.dsi.fastutil.objects.Object2DoubleFunction"
import { $Float2FloatFunction, $Float2FloatFunction$$Type } from "it.unimi.dsi.fastutil.floats.Float2FloatFunction"
import { $Float2IntFunction$$Type } from "it.unimi.dsi.fastutil.floats.Float2IntFunction"
import { $Object2IntFunction } from "it.unimi.dsi.fastutil.objects.Object2IntFunction"
import { $Long2FloatFunction } from "it.unimi.dsi.fastutil.longs.Long2FloatFunction"
import { $Int2FloatFunction } from "it.unimi.dsi.fastutil.ints.Int2FloatFunction"
import { $Reference2ObjectFunction$$Type } from "it.unimi.dsi.fastutil.objects.Reference2ObjectFunction"
import { $Byte2ObjectFunction$$Type } from "it.unimi.dsi.fastutil.bytes.Byte2ObjectFunction"
import { $Double2FloatFunction } from "it.unimi.dsi.fastutil.doubles.Double2FloatFunction"
import { $Short2ObjectFunction$$Type } from "it.unimi.dsi.fastutil.shorts.Short2ObjectFunction"
import { $Function as $Function$0 } from "it.unimi.dsi.fastutil.Function"
import { $Object2ByteFunction } from "it.unimi.dsi.fastutil.objects.Object2ByteFunction"
import { $Float2LongFunction$$Type } from "it.unimi.dsi.fastutil.floats.Float2LongFunction"
import { $Int2ObjectFunction$$Type } from "it.unimi.dsi.fastutil.ints.Int2ObjectFunction"
import { $Long2ObjectFunction$$Type } from "it.unimi.dsi.fastutil.longs.Long2ObjectFunction"
import { $Float2ShortFunction$$Type } from "it.unimi.dsi.fastutil.floats.Float2ShortFunction"
import { $Short2FloatFunction } from "it.unimi.dsi.fastutil.shorts.Short2FloatFunction"
import { $Float2ObjectFunction$$Type } from "it.unimi.dsi.fastutil.floats.Float2ObjectFunction"
import { $Object2ReferenceFunction } from "it.unimi.dsi.fastutil.objects.Object2ReferenceFunction"
import { $Char2ObjectFunction$$Type } from "it.unimi.dsi.fastutil.chars.Char2ObjectFunction"
import { $ToDoubleFunction } from "java.util.function.ToDoubleFunction"
import { $Float2DoubleFunction$$Type } from "it.unimi.dsi.fastutil.floats.Float2DoubleFunction"
import { $Float2ReferenceFunction$$Type } from "it.unimi.dsi.fastutil.floats.Float2ReferenceFunction"
import { $Object2ShortFunction } from "it.unimi.dsi.fastutil.objects.Object2ShortFunction"
import { $Object2CharFunction } from "it.unimi.dsi.fastutil.objects.Object2CharFunction"

export interface $Object2FloatFunction<K = any> extends $Function$0<K, float>, $ToDoubleFunction<K> {
/** @deprecated */
"andThen"<T>(function0: $Function$$Type<float, T>): $Function<K, T>
"andThenByte"(float2ByteFunction0: $Float2ByteFunction$$Type): $Object2ByteFunction<K>
"andThenChar"(float2CharFunction0: $Float2CharFunction$$Type): $Object2CharFunction<K>
"andThenDouble"(float2DoubleFunction0: $Float2DoubleFunction$$Type): $Object2DoubleFunction<K>
"andThenFloat"(float2FloatFunction0: $Float2FloatFunction$$Type): $Object2FloatFunction<K>
"andThenInt"(float2IntFunction0: $Float2IntFunction$$Type): $Object2IntFunction<K>
"andThenLong"(float2LongFunction0: $Float2LongFunction$$Type): $Object2LongFunction<K>
"andThenObject"<T>(float2ObjectFunction0: $Float2ObjectFunction$$Type<T>): $Object2ObjectFunction<K, T>
"andThenReference"<T>(float2ReferenceFunction0: $Float2ReferenceFunction$$Type<T>): $Object2ReferenceFunction<K, T>
"andThenShort"(float2ShortFunction0: $Float2ShortFunction$$Type): $Object2ShortFunction<K>
"apply"(k0: K): float
"applyAsDouble"(k0: K): double
"clear"(): void
"compose"<V>(function0: $Function$$Type<V, K>): $Function<V, float>
"composeByte"(byte2ObjectFunction0: $Byte2ObjectFunction$$Type<K>): $Byte2FloatFunction
"composeChar"(char2ObjectFunction0: $Char2ObjectFunction$$Type<K>): $Char2FloatFunction
"composeDouble"(double2ObjectFunction0: $Double2ObjectFunction$$Type<K>): $Double2FloatFunction
"composeFloat"(float2ObjectFunction0: $Float2ObjectFunction$$Type<K>): $Float2FloatFunction
"composeInt"(int2ObjectFunction0: $Int2ObjectFunction$$Type<K>): $Int2FloatFunction
"composeLong"(long2ObjectFunction0: $Long2ObjectFunction$$Type<K>): $Long2FloatFunction
"composeObject"<T>(object2ObjectFunction0: $Object2ObjectFunction$$Type<T, K>): $Object2FloatFunction<T>
"composeReference"<T>(reference2ObjectFunction0: $Reference2ObjectFunction$$Type<T, K>): $Reference2FloatFunction<T>
"composeShort"(short2ObjectFunction0: $Short2ObjectFunction$$Type<K>): $Short2FloatFunction
"containsKey"(object0: any): boolean
"defaultReturnValue"(float0: float): void
"defaultReturnValue"(): float
/** @deprecated */
"get"(object0: any): float
"getFloat"(object0: any): float
/** @deprecated */
"getOrDefault"(object0: any, float1: float): float
"getOrDefault"(object0: any, float1: float): float
"put"(k0: K, float1: float): float
/** @deprecated */
"put"(k0: K, float1: float): float
"removeFloat"(object0: any): float
"size"(): integer
}

export namespace $Object2FloatFunction {
function identity<T>(): $Function<T, T>
}
export abstract class $Object2FloatFunction$$Static<K = any> implements $Object2FloatFunction<K> {
static "identity"<T>(): $Function<T, T>
}
}

declare module "it.unimi.dsi.fastutil.objects.Reference2BooleanFunction" {
import { $Double2ReferenceFunction$$Type } from "it.unimi.dsi.fastutil.doubles.Double2ReferenceFunction"
import { $Double2BooleanFunction } from "it.unimi.dsi.fastutil.doubles.Double2BooleanFunction"
import { $Int2ReferenceFunction$$Type } from "it.unimi.dsi.fastutil.ints.Int2ReferenceFunction"
import { $Byte2BooleanFunction } from "it.unimi.dsi.fastutil.bytes.Byte2BooleanFunction"
import { $Short2ReferenceFunction$$Type } from "it.unimi.dsi.fastutil.shorts.Short2ReferenceFunction"
import { $Boolean2LongFunction$$Type } from "it.unimi.dsi.fastutil.booleans.Boolean2LongFunction"
import { $Boolean2IntFunction$$Type } from "it.unimi.dsi.fastutil.booleans.Boolean2IntFunction"
import { $Function, $Function$$Type } from "java.util.function.Function"
import { $Reference2FloatFunction } from "it.unimi.dsi.fastutil.objects.Reference2FloatFunction"
import { $Boolean2ObjectFunction$$Type } from "it.unimi.dsi.fastutil.booleans.Boolean2ObjectFunction"
import { $Reference2ByteFunction } from "it.unimi.dsi.fastutil.objects.Reference2ByteFunction"
import { $Short2BooleanFunction } from "it.unimi.dsi.fastutil.shorts.Short2BooleanFunction"
import { $Boolean2CharFunction$$Type } from "it.unimi.dsi.fastutil.booleans.Boolean2CharFunction"
import { $Char2ReferenceFunction$$Type } from "it.unimi.dsi.fastutil.chars.Char2ReferenceFunction"
import { $Float2BooleanFunction } from "it.unimi.dsi.fastutil.floats.Float2BooleanFunction"
import { $Reference2LongFunction } from "it.unimi.dsi.fastutil.objects.Reference2LongFunction"
import { $Reference2IntFunction } from "it.unimi.dsi.fastutil.objects.Reference2IntFunction"
import { $Int2BooleanFunction } from "it.unimi.dsi.fastutil.ints.Int2BooleanFunction"
import { $Boolean2DoubleFunction$$Type } from "it.unimi.dsi.fastutil.booleans.Boolean2DoubleFunction"
import { $Boolean2ShortFunction$$Type } from "it.unimi.dsi.fastutil.booleans.Boolean2ShortFunction"
import { $Reference2ObjectFunction } from "it.unimi.dsi.fastutil.objects.Reference2ObjectFunction"
import { $Function as $Function$0 } from "it.unimi.dsi.fastutil.Function"
import { $Byte2ReferenceFunction$$Type } from "it.unimi.dsi.fastutil.bytes.Byte2ReferenceFunction"
import { $Predicate, $Predicate$$Type } from "java.util.function.Predicate"
import { $Long2BooleanFunction } from "it.unimi.dsi.fastutil.longs.Long2BooleanFunction"
import { $Reference2ShortFunction } from "it.unimi.dsi.fastutil.objects.Reference2ShortFunction"
import { $Boolean2ReferenceFunction$$Type } from "it.unimi.dsi.fastutil.booleans.Boolean2ReferenceFunction"
import { $Char2BooleanFunction } from "it.unimi.dsi.fastutil.chars.Char2BooleanFunction"
import { $Reference2ReferenceFunction, $Reference2ReferenceFunction$$Type } from "it.unimi.dsi.fastutil.objects.Reference2ReferenceFunction"
import { $Object2ReferenceFunction$$Type } from "it.unimi.dsi.fastutil.objects.Object2ReferenceFunction"
import { $Long2ReferenceFunction$$Type } from "it.unimi.dsi.fastutil.longs.Long2ReferenceFunction"
import { $Reference2DoubleFunction } from "it.unimi.dsi.fastutil.objects.Reference2DoubleFunction"
import { $Reference2CharFunction } from "it.unimi.dsi.fastutil.objects.Reference2CharFunction"
import { $Boolean2ByteFunction$$Type } from "it.unimi.dsi.fastutil.booleans.Boolean2ByteFunction"
import { $Float2ReferenceFunction$$Type } from "it.unimi.dsi.fastutil.floats.Float2ReferenceFunction"
import { $Object2BooleanFunction } from "it.unimi.dsi.fastutil.objects.Object2BooleanFunction"
import { $Boolean2FloatFunction$$Type } from "it.unimi.dsi.fastutil.booleans.Boolean2FloatFunction"

export interface $Reference2BooleanFunction<K = any> extends $Function$0<K, boolean>, $Predicate<K> {
"and"(predicate0: $Predicate$$Type<K>): $Predicate<K>
/** @deprecated */
"andThen"<T>(function0: $Function$$Type<boolean, T>): $Function<K, T>
"andThenByte"(boolean2ByteFunction0: $Boolean2ByteFunction$$Type): $Reference2ByteFunction<K>
"andThenChar"(boolean2CharFunction0: $Boolean2CharFunction$$Type): $Reference2CharFunction<K>
"andThenDouble"(boolean2DoubleFunction0: $Boolean2DoubleFunction$$Type): $Reference2DoubleFunction<K>
"andThenFloat"(boolean2FloatFunction0: $Boolean2FloatFunction$$Type): $Reference2FloatFunction<K>
"andThenInt"(boolean2IntFunction0: $Boolean2IntFunction$$Type): $Reference2IntFunction<K>
"andThenLong"(boolean2LongFunction0: $Boolean2LongFunction$$Type): $Reference2LongFunction<K>
"andThenObject"<T>(boolean2ObjectFunction0: $Boolean2ObjectFunction$$Type<T>): $Reference2ObjectFunction<K, T>
"andThenReference"<T>(boolean2ReferenceFunction0: $Boolean2ReferenceFunction$$Type<T>): $Reference2ReferenceFunction<K, T>
"andThenShort"(boolean2ShortFunction0: $Boolean2ShortFunction$$Type): $Reference2ShortFunction<K>
"apply"(k0: K): boolean
"clear"(): void
"compose"<V>(function0: $Function$$Type<V, K>): $Function<V, boolean>
"composeByte"(byte2ReferenceFunction0: $Byte2ReferenceFunction$$Type<K>): $Byte2BooleanFunction
"composeChar"(char2ReferenceFunction0: $Char2ReferenceFunction$$Type<K>): $Char2BooleanFunction
"composeDouble"(double2ReferenceFunction0: $Double2ReferenceFunction$$Type<K>): $Double2BooleanFunction
"composeFloat"(float2ReferenceFunction0: $Float2ReferenceFunction$$Type<K>): $Float2BooleanFunction
"composeInt"(int2ReferenceFunction0: $Int2ReferenceFunction$$Type<K>): $Int2BooleanFunction
"composeLong"(long2ReferenceFunction0: $Long2ReferenceFunction$$Type<K>): $Long2BooleanFunction
"composeObject"<T>(object2ReferenceFunction0: $Object2ReferenceFunction$$Type<T, K>): $Object2BooleanFunction<T>
"composeReference"<T>(reference2ReferenceFunction0: $Reference2ReferenceFunction$$Type<T, K>): $Reference2BooleanFunction<T>
"composeShort"(short2ReferenceFunction0: $Short2ReferenceFunction$$Type<K>): $Short2BooleanFunction
"containsKey"(object0: any): boolean
"defaultReturnValue"(boolean0: boolean): void
"defaultReturnValue"(): boolean
/** @deprecated */
"get"(object0: any): boolean
"getBoolean"(object0: any): boolean
"getOrDefault"(object0: any, boolean1: boolean): boolean
/** @deprecated */
"getOrDefault"(object0: any, boolean1: boolean): boolean
"negate"(): $Predicate<K>
"or"(predicate0: $Predicate$$Type<K>): $Predicate<K>
"put"(k0: K, boolean1: boolean): boolean
/** @deprecated */
"put"(k0: K, boolean1: boolean): boolean
"removeBoolean"(object0: any): boolean
"size"(): integer
"test"(k0: K): boolean
}

export namespace $Reference2BooleanFunction {
function identity<T>(): $Function<T, T>
function isEqual<T>(object0: any): $Predicate<T>
function not<T>(predicate0: $Predicate$$Type<T>): $Predicate<T>
}
export abstract class $Reference2BooleanFunction$$Static<K = any> implements $Reference2BooleanFunction<K> {
static "identity"<T>(): $Function<T, T>
static "isEqual"<T>(object0: any): $Predicate<T>
static "not"<T>(predicate0: $Predicate$$Type<T>): $Predicate<T>
}
}

declare module "it.unimi.dsi.fastutil.objects.ObjectSortedSet" {
import { $Consumer$$Type } from "java.util.function.Consumer"
import { $Stream } from "java.util.stream.Stream"
import { $SortedSet } from "java.util.SortedSet"
import { $Predicate$$Type } from "java.util.function.Predicate"
import { $Collection$$Type } from "java.util.Collection"
import { $Set } from "java.util.Set"
import { $ObjectSet } from "it.unimi.dsi.fastutil.objects.ObjectSet"
import { $ObjectBidirectionalIterable } from "it.unimi.dsi.fastutil.objects.ObjectBidirectionalIterable"
import { $Comparator } from "java.util.Comparator"
import { $ObjectBidirectionalIterator } from "it.unimi.dsi.fastutil.objects.ObjectBidirectionalIterator"
import { $IntFunction$$Type } from "java.util.function.IntFunction"

export interface $ObjectSortedSet<K = any> extends $ObjectSet<K>, $SortedSet<K>, $ObjectBidirectionalIterable<K> {
"add"(k0: K): boolean
"addAll"(collection0: $Collection$$Type<K>): boolean
"clear"(): void
"comparator"(): $Comparator<K>
"contains"(object0: any): boolean
"containsAll"(collection0: $Collection$$Type<any>): boolean
"equals"(object0: any): boolean
"first"(): K
"forEach"(consumer0: $Consumer$$Type<K>): void
"hashCode"(): integer
"headSet"(k0: K): $ObjectSortedSet<K>
"isEmpty"(): boolean
"iterator"(k0: K): $ObjectBidirectionalIterator<K>
"last"(): K
"parallelStream"(): $Stream<K>
"remove"(object0: any): boolean
"removeAll"(collection0: $Collection$$Type<any>): boolean
"removeIf"(predicate0: $Predicate$$Type<K>): boolean
"retainAll"(collection0: $Collection$$Type<any>): boolean
"size"(): integer
"stream"(): $Stream<K>
"toArray"<T>(t0s: T[]): T[]
"toArray"(): any[]
"toArray"<T>(intFunction0: $IntFunction$$Type<T[]>): T[]
[Symbol.iterator](): IterableIterator<K>;
get "empty"(): boolean
}

export namespace $ObjectSortedSet {
function copyOf<E>(collection0: $Collection$$Type<E>): $Set<E>
function of<K>(k0: K, k1: K): $ObjectSet<K>
function of<K>(...k0s: K[]): $ObjectSet<K>
function of<K>(k0: K, k1: K, k2: K): $ObjectSet<K>
function of<K>(): $ObjectSet<K>
function of<K>(k0: K): $ObjectSet<K>
function of<E>(e0: E, e1: E, e2: E, e3: E, e4: E, e5: E): $Set<E>
function of<E>(e0: E, e1: E, e2: E, e3: E, e4: E): $Set<E>
function of<E>(e0: E, e1: E, e2: E, e3: E): $Set<E>
function of<E>(e0: E, e1: E, e2: E, e3: E, e4: E, e5: E, e6: E, e7: E, e8: E, e9: E): $Set<E>
function of<E>(e0: E, e1: E, e2: E, e3: E, e4: E, e5: E, e6: E, e7: E, e8: E): $Set<E>
function of<E>(e0: E, e1: E, e2: E, e3: E, e4: E, e5: E, e6: E, e7: E): $Set<E>
function of<E>(e0: E, e1: E, e2: E, e3: E, e4: E, e5: E, e6: E): $Set<E>
}
export abstract class $ObjectSortedSet$$Static<K = any> implements $ObjectSortedSet<K> {
static "copyOf"<E>(collection0: $Collection$$Type<E>): $Set<E>
static "of"<K>(k0: K, k1: K): $ObjectSet<K>
static "of"<K>(...k0s: K[]): $ObjectSet<K>
static "of"<K>(k0: K, k1: K, k2: K): $ObjectSet<K>
static "of"<K>(): $ObjectSet<K>
static "of"<K>(k0: K): $ObjectSet<K>
static "of"<E>(e0: E, e1: E, e2: E, e3: E, e4: E, e5: E): $Set<E>
static "of"<E>(e0: E, e1: E, e2: E, e3: E, e4: E): $Set<E>
static "of"<E>(e0: E, e1: E, e2: E, e3: E): $Set<E>
static "of"<E>(e0: E, e1: E, e2: E, e3: E, e4: E, e5: E, e6: E, e7: E, e8: E, e9: E): $Set<E>
static "of"<E>(e0: E, e1: E, e2: E, e3: E, e4: E, e5: E, e6: E, e7: E, e8: E): $Set<E>
static "of"<E>(e0: E, e1: E, e2: E, e3: E, e4: E, e5: E, e6: E, e7: E): $Set<E>
static "of"<E>(e0: E, e1: E, e2: E, e3: E, e4: E, e5: E, e6: E): $Set<E>
}
}

declare module "it.unimi.dsi.fastutil.objects.Object2IntMap$Entry" {
import { $Map$Entry, $Map$Entry$$Type } from "java.util.Map$Entry"
import { $Comparable, $Comparable$$Type } from "java.lang.Comparable"
import { $Comparator, $Comparator$$Type } from "java.util.Comparator"

export interface $Object2IntMap$Entry<K = any> extends $Map$Entry<K, integer> {
"equals"(object0: any): boolean
"getIntValue"(): integer
"getKey"(): K
"hashCode"(): integer
"setValue"(int0: integer): integer
/** @deprecated */
"setValue"(integer0: integer): integer
get "intValue"(): integer
get "key"(): K
set "value"(value: integer)
set "value"(value: integer)
}

export namespace $Object2IntMap$Entry {
function comparingByKey<K extends $Comparable<K>, V>(): $Comparator<$Map$Entry<K, V>>
function comparingByKey<K, V>(comparator0: $Comparator$$Type<K>): $Comparator<$Map$Entry<K, V>>
function comparingByValue<K, V extends $Comparable<V>>(): $Comparator<$Map$Entry<K, V>>
function comparingByValue<K, V>(comparator0: $Comparator$$Type<V>): $Comparator<$Map$Entry<K, V>>
function copyOf<K, V>(entry0: $Map$Entry$$Type<K, V>): $Map$Entry<K, V>
}
export abstract class $Object2IntMap$Entry$$Static<K = any> implements $Object2IntMap$Entry<K> {
static "comparingByKey"<K extends $Comparable<K>, V>(): $Comparator<$Map$Entry<K, V>>
static "comparingByKey"<K, V>(comparator0: $Comparator$$Type<K>): $Comparator<$Map$Entry<K, V>>
static "comparingByValue"<K, V extends $Comparable<V>>(): $Comparator<$Map$Entry<K, V>>
static "comparingByValue"<K, V>(comparator0: $Comparator$$Type<V>): $Comparator<$Map$Entry<K, V>>
static "copyOf"<K, V>(entry0: $Map$Entry$$Type<K, V>): $Map$Entry<K, V>
}
}

declare module "it.unimi.dsi.fastutil.objects.Reference2ReferenceMap$Entry" {
import { $Map$Entry, $Map$Entry$$Type } from "java.util.Map$Entry"
import { $Comparable, $Comparable$$Type } from "java.lang.Comparable"
import { $Comparator, $Comparator$$Type } from "java.util.Comparator"

export interface $Reference2ReferenceMap$Entry<K = any, V = any> extends $Map$Entry<K, V> {
"equals"(object0: any): boolean
"getKey"(): K
"getValue"(): V
"hashCode"(): integer
"setValue"(v0: V): V
get "key"(): K
get "value"(): V
set "value"(value: V)
}

export namespace $Reference2ReferenceMap$Entry {
function comparingByKey<K extends $Comparable<K>, V>(): $Comparator<$Map$Entry<K, V>>
function comparingByKey<K, V>(comparator0: $Comparator$$Type<K>): $Comparator<$Map$Entry<K, V>>
function comparingByValue<K, V extends $Comparable<V>>(): $Comparator<$Map$Entry<K, V>>
function comparingByValue<K, V>(comparator0: $Comparator$$Type<V>): $Comparator<$Map$Entry<K, V>>
function copyOf<K, V>(entry0: $Map$Entry$$Type<K, V>): $Map$Entry<K, V>
}
export abstract class $Reference2ReferenceMap$Entry$$Static<K = any, V = any> implements $Reference2ReferenceMap$Entry<K, V> {
static "comparingByKey"<K extends $Comparable<K>, V>(): $Comparator<$Map$Entry<K, V>>
static "comparingByKey"<K, V>(comparator0: $Comparator$$Type<K>): $Comparator<$Map$Entry<K, V>>
static "comparingByValue"<K, V extends $Comparable<V>>(): $Comparator<$Map$Entry<K, V>>
static "comparingByValue"<K, V>(comparator0: $Comparator$$Type<V>): $Comparator<$Map$Entry<K, V>>
static "copyOf"<K, V>(entry0: $Map$Entry$$Type<K, V>): $Map$Entry<K, V>
}
}

declare module "it.unimi.dsi.fastutil.objects.AbstractObject2IntFunction" {
import { $Int2ShortFunction$$Type } from "it.unimi.dsi.fastutil.ints.Int2ShortFunction"
import { $Int2ByteFunction$$Type } from "it.unimi.dsi.fastutil.ints.Int2ByteFunction"
import { $Int2ReferenceFunction$$Type } from "it.unimi.dsi.fastutil.ints.Int2ReferenceFunction"
import { $Double2ObjectFunction$$Type } from "it.unimi.dsi.fastutil.doubles.Double2ObjectFunction"
import { $Object2ObjectFunction, $Object2ObjectFunction$$Type } from "it.unimi.dsi.fastutil.objects.Object2ObjectFunction"
import { $Function, $Function$$Type } from "java.util.function.Function"
import { $Int2DoubleFunction$$Type } from "it.unimi.dsi.fastutil.ints.Int2DoubleFunction"
import { $Object2LongFunction } from "it.unimi.dsi.fastutil.objects.Object2LongFunction"
import { $Object2DoubleFunction } from "it.unimi.dsi.fastutil.objects.Object2DoubleFunction"
import { $Int2IntFunction, $Int2IntFunction$$Type } from "it.unimi.dsi.fastutil.ints.Int2IntFunction"
import { $Float2IntFunction } from "it.unimi.dsi.fastutil.floats.Float2IntFunction"
import { $Object2FloatFunction } from "it.unimi.dsi.fastutil.objects.Object2FloatFunction"
import { $Object2IntFunction } from "it.unimi.dsi.fastutil.objects.Object2IntFunction"
import { $Reference2IntFunction } from "it.unimi.dsi.fastutil.objects.Reference2IntFunction"
import { $Long2IntFunction } from "it.unimi.dsi.fastutil.longs.Long2IntFunction"
import { $Short2IntFunction } from "it.unimi.dsi.fastutil.shorts.Short2IntFunction"
import { $Int2FloatFunction$$Type } from "it.unimi.dsi.fastutil.ints.Int2FloatFunction"
import { $Reference2ObjectFunction$$Type } from "it.unimi.dsi.fastutil.objects.Reference2ObjectFunction"
import { $Byte2ObjectFunction$$Type } from "it.unimi.dsi.fastutil.bytes.Byte2ObjectFunction"
import { $Short2ObjectFunction$$Type } from "it.unimi.dsi.fastutil.shorts.Short2ObjectFunction"
import { $Object2ByteFunction } from "it.unimi.dsi.fastutil.objects.Object2ByteFunction"
import { $Int2ObjectFunction$$Type } from "it.unimi.dsi.fastutil.ints.Int2ObjectFunction"
import { $Long2ObjectFunction$$Type } from "it.unimi.dsi.fastutil.longs.Long2ObjectFunction"
import { $Char2IntFunction } from "it.unimi.dsi.fastutil.chars.Char2IntFunction"
import { $Int2LongFunction$$Type } from "it.unimi.dsi.fastutil.ints.Int2LongFunction"
import { $Serializable } from "java.io.Serializable"
import { $Object2ReferenceFunction } from "it.unimi.dsi.fastutil.objects.Object2ReferenceFunction"
import { $Float2ObjectFunction$$Type } from "it.unimi.dsi.fastutil.floats.Float2ObjectFunction"
import { $Char2ObjectFunction$$Type } from "it.unimi.dsi.fastutil.chars.Char2ObjectFunction"
import { $Object2ShortFunction } from "it.unimi.dsi.fastutil.objects.Object2ShortFunction"
import { $Double2IntFunction } from "it.unimi.dsi.fastutil.doubles.Double2IntFunction"
import { $Object2CharFunction } from "it.unimi.dsi.fastutil.objects.Object2CharFunction"
import { $Int2CharFunction$$Type } from "it.unimi.dsi.fastutil.ints.Int2CharFunction"
import { $Byte2IntFunction } from "it.unimi.dsi.fastutil.bytes.Byte2IntFunction"

export class $AbstractObject2IntFunction<K = any> implements $Object2IntFunction<K>, $Serializable {
/** @deprecated */
public "andThen"<T>(function0: $Function$$Type<integer, T>): $Function<K, T>
public "andThenByte"(int2ByteFunction0: $Int2ByteFunction$$Type): $Object2ByteFunction<K>
public "andThenChar"(int2CharFunction0: $Int2CharFunction$$Type): $Object2CharFunction<K>
public "andThenDouble"(int2DoubleFunction0: $Int2DoubleFunction$$Type): $Object2DoubleFunction<K>
public "andThenFloat"(int2FloatFunction0: $Int2FloatFunction$$Type): $Object2FloatFunction<K>
public "andThenInt"(int2IntFunction0: $Int2IntFunction$$Type): $Object2IntFunction<K>
public "andThenLong"(int2LongFunction0: $Int2LongFunction$$Type): $Object2LongFunction<K>
public "andThenObject"<T>(int2ObjectFunction0: $Int2ObjectFunction$$Type<T>): $Object2ObjectFunction<K, T>
public "andThenReference"<T>(int2ReferenceFunction0: $Int2ReferenceFunction$$Type<T>): $Object2ReferenceFunction<K, T>
public "andThenShort"(int2ShortFunction0: $Int2ShortFunction$$Type): $Object2ShortFunction<K>
public "apply"(k0: K): integer
public "applyAsInt"(k0: K): integer
public "clear"(): void
public "compose"<V>(function0: $Function$$Type<V, K>): $Function<V, integer>
public "composeByte"(byte2ObjectFunction0: $Byte2ObjectFunction$$Type<K>): $Byte2IntFunction
public "composeChar"(char2ObjectFunction0: $Char2ObjectFunction$$Type<K>): $Char2IntFunction
public "composeDouble"(double2ObjectFunction0: $Double2ObjectFunction$$Type<K>): $Double2IntFunction
public "composeFloat"(float2ObjectFunction0: $Float2ObjectFunction$$Type<K>): $Float2IntFunction
public "composeInt"(int2ObjectFunction0: $Int2ObjectFunction$$Type<K>): $Int2IntFunction
public "composeLong"(long2ObjectFunction0: $Long2ObjectFunction$$Type<K>): $Long2IntFunction
public "composeObject"<T>(object2ObjectFunction0: $Object2ObjectFunction$$Type<T, K>): $Object2IntFunction<T>
public "composeReference"<T>(reference2ObjectFunction0: $Reference2ObjectFunction$$Type<T, K>): $Reference2IntFunction<T>
public "composeShort"(short2ObjectFunction0: $Short2ObjectFunction$$Type<K>): $Short2IntFunction
public "containsKey"(object0: any): boolean
public "defaultReturnValue"(int0: integer): void
public "defaultReturnValue"(): integer
/** @deprecated */
public "get"(object0: any): integer
public "getInt"(object0: any): integer
public "getOrDefault"(object0: any, int1: integer): integer
/** @deprecated */
public "getOrDefault"(object0: any, integer1: integer): integer
public static "identity"<T>(): $Function<T, T>
/** @deprecated */
public "put"(k0: K, integer1: integer): integer
public "put"(k0: K, int1: integer): integer
public "removeInt"(object0: any): integer
public "size"(): integer
}
}

declare module "it.unimi.dsi.fastutil.objects.Object2IntFunction" {
import { $Int2ShortFunction$$Type } from "it.unimi.dsi.fastutil.ints.Int2ShortFunction"
import { $Int2ByteFunction$$Type } from "it.unimi.dsi.fastutil.ints.Int2ByteFunction"
import { $Int2ReferenceFunction$$Type } from "it.unimi.dsi.fastutil.ints.Int2ReferenceFunction"
import { $Double2ObjectFunction$$Type } from "it.unimi.dsi.fastutil.doubles.Double2ObjectFunction"
import { $Object2ObjectFunction, $Object2ObjectFunction$$Type } from "it.unimi.dsi.fastutil.objects.Object2ObjectFunction"
import { $Function, $Function$$Type } from "java.util.function.Function"
import { $Int2DoubleFunction$$Type } from "it.unimi.dsi.fastutil.ints.Int2DoubleFunction"
import { $Object2LongFunction } from "it.unimi.dsi.fastutil.objects.Object2LongFunction"
import { $Object2DoubleFunction } from "it.unimi.dsi.fastutil.objects.Object2DoubleFunction"
import { $Int2IntFunction, $Int2IntFunction$$Type } from "it.unimi.dsi.fastutil.ints.Int2IntFunction"
import { $Float2IntFunction } from "it.unimi.dsi.fastutil.floats.Float2IntFunction"
import { $Object2FloatFunction } from "it.unimi.dsi.fastutil.objects.Object2FloatFunction"
import { $Reference2IntFunction } from "it.unimi.dsi.fastutil.objects.Reference2IntFunction"
import { $Long2IntFunction } from "it.unimi.dsi.fastutil.longs.Long2IntFunction"
import { $Short2IntFunction } from "it.unimi.dsi.fastutil.shorts.Short2IntFunction"
import { $Int2FloatFunction$$Type } from "it.unimi.dsi.fastutil.ints.Int2FloatFunction"
import { $Reference2ObjectFunction$$Type } from "it.unimi.dsi.fastutil.objects.Reference2ObjectFunction"
import { $Byte2ObjectFunction$$Type } from "it.unimi.dsi.fastutil.bytes.Byte2ObjectFunction"
import { $Short2ObjectFunction$$Type } from "it.unimi.dsi.fastutil.shorts.Short2ObjectFunction"
import { $Function as $Function$0 } from "it.unimi.dsi.fastutil.Function"
import { $Object2ByteFunction } from "it.unimi.dsi.fastutil.objects.Object2ByteFunction"
import { $Int2ObjectFunction$$Type } from "it.unimi.dsi.fastutil.ints.Int2ObjectFunction"
import { $Long2ObjectFunction$$Type } from "it.unimi.dsi.fastutil.longs.Long2ObjectFunction"
import { $ToIntFunction } from "java.util.function.ToIntFunction"
import { $Char2IntFunction } from "it.unimi.dsi.fastutil.chars.Char2IntFunction"
import { $Int2LongFunction$$Type } from "it.unimi.dsi.fastutil.ints.Int2LongFunction"
import { $Object2ReferenceFunction } from "it.unimi.dsi.fastutil.objects.Object2ReferenceFunction"
import { $Float2ObjectFunction$$Type } from "it.unimi.dsi.fastutil.floats.Float2ObjectFunction"
import { $Char2ObjectFunction$$Type } from "it.unimi.dsi.fastutil.chars.Char2ObjectFunction"
import { $Object2ShortFunction } from "it.unimi.dsi.fastutil.objects.Object2ShortFunction"
import { $Double2IntFunction } from "it.unimi.dsi.fastutil.doubles.Double2IntFunction"
import { $Object2CharFunction } from "it.unimi.dsi.fastutil.objects.Object2CharFunction"
import { $Int2CharFunction$$Type } from "it.unimi.dsi.fastutil.ints.Int2CharFunction"
import { $Byte2IntFunction } from "it.unimi.dsi.fastutil.bytes.Byte2IntFunction"

export interface $Object2IntFunction<K = any> extends $Function$0<K, integer>, $ToIntFunction<K> {
/** @deprecated */
"andThen"<T>(function0: $Function$$Type<integer, T>): $Function<K, T>
"andThenByte"(int2ByteFunction0: $Int2ByteFunction$$Type): $Object2ByteFunction<K>
"andThenChar"(int2CharFunction0: $Int2CharFunction$$Type): $Object2CharFunction<K>
"andThenDouble"(int2DoubleFunction0: $Int2DoubleFunction$$Type): $Object2DoubleFunction<K>
"andThenFloat"(int2FloatFunction0: $Int2FloatFunction$$Type): $Object2FloatFunction<K>
"andThenInt"(int2IntFunction0: $Int2IntFunction$$Type): $Object2IntFunction<K>
"andThenLong"(int2LongFunction0: $Int2LongFunction$$Type): $Object2LongFunction<K>
"andThenObject"<T>(int2ObjectFunction0: $Int2ObjectFunction$$Type<T>): $Object2ObjectFunction<K, T>
"andThenReference"<T>(int2ReferenceFunction0: $Int2ReferenceFunction$$Type<T>): $Object2ReferenceFunction<K, T>
"andThenShort"(int2ShortFunction0: $Int2ShortFunction$$Type): $Object2ShortFunction<K>
"apply"(k0: K): integer
"applyAsInt"(k0: K): integer
"clear"(): void
"compose"<V>(function0: $Function$$Type<V, K>): $Function<V, integer>
"composeByte"(byte2ObjectFunction0: $Byte2ObjectFunction$$Type<K>): $Byte2IntFunction
"composeChar"(char2ObjectFunction0: $Char2ObjectFunction$$Type<K>): $Char2IntFunction
"composeDouble"(double2ObjectFunction0: $Double2ObjectFunction$$Type<K>): $Double2IntFunction
"composeFloat"(float2ObjectFunction0: $Float2ObjectFunction$$Type<K>): $Float2IntFunction
"composeInt"(int2ObjectFunction0: $Int2ObjectFunction$$Type<K>): $Int2IntFunction
"composeLong"(long2ObjectFunction0: $Long2ObjectFunction$$Type<K>): $Long2IntFunction
"composeObject"<T>(object2ObjectFunction0: $Object2ObjectFunction$$Type<T, K>): $Object2IntFunction<T>
"composeReference"<T>(reference2ObjectFunction0: $Reference2ObjectFunction$$Type<T, K>): $Reference2IntFunction<T>
"composeShort"(short2ObjectFunction0: $Short2ObjectFunction$$Type<K>): $Short2IntFunction
"containsKey"(object0: any): boolean
"defaultReturnValue"(): integer
"defaultReturnValue"(int0: integer): void
/** @deprecated */
"get"(object0: any): integer
"getInt"(object0: any): integer
"getOrDefault"(object0: any, int1: integer): integer
/** @deprecated */
"getOrDefault"(object0: any, integer1: integer): integer
/** @deprecated */
"put"(k0: K, integer1: integer): integer
"put"(k0: K, int1: integer): integer
"removeInt"(object0: any): integer
"size"(): integer
}

export namespace $Object2IntFunction {
function identity<T>(): $Function<T, T>
}
export abstract class $Object2IntFunction$$Static<K = any> implements $Object2IntFunction<K> {
static "identity"<T>(): $Function<T, T>
}
}

declare module "it.unimi.dsi.fastutil.objects.Reference2CharFunction" {
import { $Double2ReferenceFunction$$Type } from "it.unimi.dsi.fastutil.doubles.Double2ReferenceFunction"
import { $Float2CharFunction } from "it.unimi.dsi.fastutil.floats.Float2CharFunction"
import { $Int2ReferenceFunction$$Type } from "it.unimi.dsi.fastutil.ints.Int2ReferenceFunction"
import { $Short2ReferenceFunction$$Type } from "it.unimi.dsi.fastutil.shorts.Short2ReferenceFunction"
import { $Char2FloatFunction$$Type } from "it.unimi.dsi.fastutil.chars.Char2FloatFunction"
import { $Char2LongFunction$$Type } from "it.unimi.dsi.fastutil.chars.Char2LongFunction"
import { $Function, $Function$$Type } from "java.util.function.Function"
import { $Reference2FloatFunction } from "it.unimi.dsi.fastutil.objects.Reference2FloatFunction"
import { $Reference2ByteFunction } from "it.unimi.dsi.fastutil.objects.Reference2ByteFunction"
import { $Char2ReferenceFunction$$Type } from "it.unimi.dsi.fastutil.chars.Char2ReferenceFunction"
import { $Long2CharFunction } from "it.unimi.dsi.fastutil.longs.Long2CharFunction"
import { $Reference2LongFunction } from "it.unimi.dsi.fastutil.objects.Reference2LongFunction"
import { $Reference2IntFunction } from "it.unimi.dsi.fastutil.objects.Reference2IntFunction"
import { $Char2CharFunction, $Char2CharFunction$$Type } from "it.unimi.dsi.fastutil.chars.Char2CharFunction"
import { $Reference2ObjectFunction } from "it.unimi.dsi.fastutil.objects.Reference2ObjectFunction"
import { $Function as $Function$0 } from "it.unimi.dsi.fastutil.Function"
import { $Char2ByteFunction$$Type } from "it.unimi.dsi.fastutil.chars.Char2ByteFunction"
import { $Byte2ReferenceFunction$$Type } from "it.unimi.dsi.fastutil.bytes.Byte2ReferenceFunction"
import { $Reference2ShortFunction } from "it.unimi.dsi.fastutil.objects.Reference2ShortFunction"
import { $ToIntFunction } from "java.util.function.ToIntFunction"
import { $Char2IntFunction$$Type } from "it.unimi.dsi.fastutil.chars.Char2IntFunction"
import { $Byte2CharFunction } from "it.unimi.dsi.fastutil.bytes.Byte2CharFunction"
import { $Char2ShortFunction$$Type } from "it.unimi.dsi.fastutil.chars.Char2ShortFunction"
import { $Short2CharFunction } from "it.unimi.dsi.fastutil.shorts.Short2CharFunction"
import { $Reference2ReferenceFunction, $Reference2ReferenceFunction$$Type } from "it.unimi.dsi.fastutil.objects.Reference2ReferenceFunction"
import { $Object2ReferenceFunction$$Type } from "it.unimi.dsi.fastutil.objects.Object2ReferenceFunction"
import { $Long2ReferenceFunction$$Type } from "it.unimi.dsi.fastutil.longs.Long2ReferenceFunction"
import { $Reference2DoubleFunction } from "it.unimi.dsi.fastutil.objects.Reference2DoubleFunction"
import { $Double2CharFunction } from "it.unimi.dsi.fastutil.doubles.Double2CharFunction"
import { $Char2ObjectFunction$$Type } from "it.unimi.dsi.fastutil.chars.Char2ObjectFunction"
import { $Char2DoubleFunction$$Type } from "it.unimi.dsi.fastutil.chars.Char2DoubleFunction"
import { $Float2ReferenceFunction$$Type } from "it.unimi.dsi.fastutil.floats.Float2ReferenceFunction"
import { $Int2CharFunction } from "it.unimi.dsi.fastutil.ints.Int2CharFunction"
import { $Object2CharFunction } from "it.unimi.dsi.fastutil.objects.Object2CharFunction"

export interface $Reference2CharFunction<K = any> extends $Function$0<K, character>, $ToIntFunction<K> {
/** @deprecated */
"andThen"<T>(function0: $Function$$Type<character, T>): $Function<K, T>
"andThenByte"(char2ByteFunction0: $Char2ByteFunction$$Type): $Reference2ByteFunction<K>
"andThenChar"(char2CharFunction0: $Char2CharFunction$$Type): $Reference2CharFunction<K>
"andThenDouble"(char2DoubleFunction0: $Char2DoubleFunction$$Type): $Reference2DoubleFunction<K>
"andThenFloat"(char2FloatFunction0: $Char2FloatFunction$$Type): $Reference2FloatFunction<K>
"andThenInt"(char2IntFunction0: $Char2IntFunction$$Type): $Reference2IntFunction<K>
"andThenLong"(char2LongFunction0: $Char2LongFunction$$Type): $Reference2LongFunction<K>
"andThenObject"<T>(char2ObjectFunction0: $Char2ObjectFunction$$Type<T>): $Reference2ObjectFunction<K, T>
"andThenReference"<T>(char2ReferenceFunction0: $Char2ReferenceFunction$$Type<T>): $Reference2ReferenceFunction<K, T>
"andThenShort"(char2ShortFunction0: $Char2ShortFunction$$Type): $Reference2ShortFunction<K>
"apply"(k0: K): character
"applyAsInt"(k0: K): integer
"clear"(): void
"compose"<V>(function0: $Function$$Type<V, K>): $Function<V, character>
"composeByte"(byte2ReferenceFunction0: $Byte2ReferenceFunction$$Type<K>): $Byte2CharFunction
"composeChar"(char2ReferenceFunction0: $Char2ReferenceFunction$$Type<K>): $Char2CharFunction
"composeDouble"(double2ReferenceFunction0: $Double2ReferenceFunction$$Type<K>): $Double2CharFunction
"composeFloat"(float2ReferenceFunction0: $Float2ReferenceFunction$$Type<K>): $Float2CharFunction
"composeInt"(int2ReferenceFunction0: $Int2ReferenceFunction$$Type<K>): $Int2CharFunction
"composeLong"(long2ReferenceFunction0: $Long2ReferenceFunction$$Type<K>): $Long2CharFunction
"composeObject"<T>(object2ReferenceFunction0: $Object2ReferenceFunction$$Type<T, K>): $Object2CharFunction<T>
"composeReference"<T>(reference2ReferenceFunction0: $Reference2ReferenceFunction$$Type<T, K>): $Reference2CharFunction<T>
"composeShort"(short2ReferenceFunction0: $Short2ReferenceFunction$$Type<K>): $Short2CharFunction
"containsKey"(object0: any): boolean
"defaultReturnValue"(): character
"defaultReturnValue"(char0: character): void
/** @deprecated */
"get"(object0: any): character
"getChar"(object0: any): character
"getOrDefault"(object0: any, char1: character): character
/** @deprecated */
"getOrDefault"(object0: any, character1: character): character
/** @deprecated */
"put"(k0: K, character1: character): character
"put"(k0: K, char1: character): character
"removeChar"(object0: any): character
"size"(): integer
}

export namespace $Reference2CharFunction {
function identity<T>(): $Function<T, T>
}
export abstract class $Reference2CharFunction$$Static<K = any> implements $Reference2CharFunction<K> {
static "identity"<T>(): $Function<T, T>
}
}

declare module "it.unimi.dsi.fastutil.objects.Object2ObjectMap$Entry" {
import { $Map$Entry, $Map$Entry$$Type } from "java.util.Map$Entry"
import { $Comparable, $Comparable$$Type } from "java.lang.Comparable"
import { $Comparator, $Comparator$$Type } from "java.util.Comparator"

export interface $Object2ObjectMap$Entry<K = any, V = any> extends $Map$Entry<K, V> {
"equals"(object0: any): boolean
"getKey"(): K
"getValue"(): V
"hashCode"(): integer
"setValue"(v0: V): V
get "key"(): K
get "value"(): V
set "value"(value: V)
}

export namespace $Object2ObjectMap$Entry {
function comparingByKey<K extends $Comparable<K>, V>(): $Comparator<$Map$Entry<K, V>>
function comparingByKey<K, V>(comparator0: $Comparator$$Type<K>): $Comparator<$Map$Entry<K, V>>
function comparingByValue<K, V extends $Comparable<V>>(): $Comparator<$Map$Entry<K, V>>
function comparingByValue<K, V>(comparator0: $Comparator$$Type<V>): $Comparator<$Map$Entry<K, V>>
function copyOf<K, V>(entry0: $Map$Entry$$Type<K, V>): $Map$Entry<K, V>
}
export abstract class $Object2ObjectMap$Entry$$Static<K = any, V = any> implements $Object2ObjectMap$Entry<K, V> {
static "comparingByKey"<K extends $Comparable<K>, V>(): $Comparator<$Map$Entry<K, V>>
static "comparingByKey"<K, V>(comparator0: $Comparator$$Type<K>): $Comparator<$Map$Entry<K, V>>
static "comparingByValue"<K, V extends $Comparable<V>>(): $Comparator<$Map$Entry<K, V>>
static "comparingByValue"<K, V>(comparator0: $Comparator$$Type<V>): $Comparator<$Map$Entry<K, V>>
static "copyOf"<K, V>(entry0: $Map$Entry$$Type<K, V>): $Map$Entry<K, V>
}
}

declare module "it.unimi.dsi.fastutil.objects.ObjectSpliterator" {
import { $Consumer$$Type } from "java.util.function.Consumer"
import { $Comparator } from "java.util.Comparator"
import { $Spliterator } from "java.util.Spliterator"

export interface $ObjectSpliterator<K = any> extends $Spliterator<K> {
"characteristics"(): integer
"estimateSize"(): long
"forEachRemaining"(consumer0: $Consumer$$Type<K>): void
"getComparator"(): $Comparator<K>
"getExactSizeIfKnown"(): long
"hasCharacteristics"(int0: integer): boolean
"skip"(long0: long): long
"tryAdvance"(consumer0: $Consumer$$Type<K>): boolean
get "comparator"(): $Comparator<K>
get "exactSizeIfKnown"(): long
}

export namespace $ObjectSpliterator {
const probejs$$marker: never
}
export abstract class $ObjectSpliterator$$Static<K = any> implements $ObjectSpliterator<K> {
}
}

declare module "it.unimi.dsi.fastutil.objects.Reference2ReferenceFunction" {
import { $Double2ReferenceFunction, $Double2ReferenceFunction$$Type } from "it.unimi.dsi.fastutil.doubles.Double2ReferenceFunction"
import { $Reference2ObjectFunction, $Reference2ObjectFunction$$Type } from "it.unimi.dsi.fastutil.objects.Reference2ObjectFunction"
import { $Function } from "it.unimi.dsi.fastutil.Function"
import { $Byte2ReferenceFunction, $Byte2ReferenceFunction$$Type } from "it.unimi.dsi.fastutil.bytes.Byte2ReferenceFunction"
import { $Int2ReferenceFunction, $Int2ReferenceFunction$$Type } from "it.unimi.dsi.fastutil.ints.Int2ReferenceFunction"
import { $Short2ReferenceFunction, $Short2ReferenceFunction$$Type } from "it.unimi.dsi.fastutil.shorts.Short2ReferenceFunction"
import { $Reference2ShortFunction, $Reference2ShortFunction$$Type } from "it.unimi.dsi.fastutil.objects.Reference2ShortFunction"
import { $Function as $Function$0, $Function$$Type as $Function$0$$Type } from "java.util.function.Function"
import { $Reference2FloatFunction, $Reference2FloatFunction$$Type } from "it.unimi.dsi.fastutil.objects.Reference2FloatFunction"
import { $Reference2ByteFunction, $Reference2ByteFunction$$Type } from "it.unimi.dsi.fastutil.objects.Reference2ByteFunction"
import { $Object2ReferenceFunction, $Object2ReferenceFunction$$Type } from "it.unimi.dsi.fastutil.objects.Object2ReferenceFunction"
import { $Long2ReferenceFunction, $Long2ReferenceFunction$$Type } from "it.unimi.dsi.fastutil.longs.Long2ReferenceFunction"
import { $Reference2DoubleFunction, $Reference2DoubleFunction$$Type } from "it.unimi.dsi.fastutil.objects.Reference2DoubleFunction"
import { $Char2ReferenceFunction, $Char2ReferenceFunction$$Type } from "it.unimi.dsi.fastutil.chars.Char2ReferenceFunction"
import { $Reference2CharFunction, $Reference2CharFunction$$Type } from "it.unimi.dsi.fastutil.objects.Reference2CharFunction"
import { $Reference2LongFunction, $Reference2LongFunction$$Type } from "it.unimi.dsi.fastutil.objects.Reference2LongFunction"
import { $Reference2IntFunction, $Reference2IntFunction$$Type } from "it.unimi.dsi.fastutil.objects.Reference2IntFunction"
import { $Float2ReferenceFunction, $Float2ReferenceFunction$$Type } from "it.unimi.dsi.fastutil.floats.Float2ReferenceFunction"

export interface $Reference2ReferenceFunction<K = any, V = any> extends $Function<K, V> {
"andThen"<V>(function0: $Function$0$$Type<V, V>): $Function$0<K, V>
"andThenByte"(reference2ByteFunction0: $Reference2ByteFunction$$Type<V>): $Reference2ByteFunction<K>
"andThenChar"(reference2CharFunction0: $Reference2CharFunction$$Type<V>): $Reference2CharFunction<K>
"andThenDouble"(reference2DoubleFunction0: $Reference2DoubleFunction$$Type<V>): $Reference2DoubleFunction<K>
"andThenFloat"(reference2FloatFunction0: $Reference2FloatFunction$$Type<V>): $Reference2FloatFunction<K>
"andThenInt"(reference2IntFunction0: $Reference2IntFunction$$Type<V>): $Reference2IntFunction<K>
"andThenLong"(reference2LongFunction0: $Reference2LongFunction$$Type<V>): $Reference2LongFunction<K>
"andThenObject"<T>(reference2ObjectFunction0: $Reference2ObjectFunction$$Type<V, T>): $Reference2ObjectFunction<K, T>
"andThenReference"<T>(reference2ReferenceFunction0: $Reference2ReferenceFunction$$Type<V, T>): $Reference2ReferenceFunction<K, T>
"andThenShort"(reference2ShortFunction0: $Reference2ShortFunction$$Type<V>): $Reference2ShortFunction<K>
"apply"(k0: K): V
"clear"(): void
"compose"<V>(function0: $Function$0$$Type<V, K>): $Function$0<V, V>
"composeByte"(byte2ReferenceFunction0: $Byte2ReferenceFunction$$Type<K>): $Byte2ReferenceFunction<V>
"composeChar"(char2ReferenceFunction0: $Char2ReferenceFunction$$Type<K>): $Char2ReferenceFunction<V>
"composeDouble"(double2ReferenceFunction0: $Double2ReferenceFunction$$Type<K>): $Double2ReferenceFunction<V>
"composeFloat"(float2ReferenceFunction0: $Float2ReferenceFunction$$Type<K>): $Float2ReferenceFunction<V>
"composeInt"(int2ReferenceFunction0: $Int2ReferenceFunction$$Type<K>): $Int2ReferenceFunction<V>
"composeLong"(long2ReferenceFunction0: $Long2ReferenceFunction$$Type<K>): $Long2ReferenceFunction<V>
"composeObject"<T>(object2ReferenceFunction0: $Object2ReferenceFunction$$Type<T, K>): $Object2ReferenceFunction<T, V>
"composeReference"<T>(reference2ReferenceFunction0: $Reference2ReferenceFunction$$Type<T, K>): $Reference2ReferenceFunction<T, V>
"composeShort"(short2ReferenceFunction0: $Short2ReferenceFunction$$Type<K>): $Short2ReferenceFunction<V>
"containsKey"(object0: any): boolean
"defaultReturnValue"(): V
"defaultReturnValue"(v0: V): void
"get"(object0: any): V
"getOrDefault"(object0: any, v1: V): V
"put"(k0: K, v1: V): V
"remove"(object0: any): V
"size"(): integer
}

export namespace $Reference2ReferenceFunction {
function identity<T>(): $Function$0<T, T>
}
export abstract class $Reference2ReferenceFunction$$Static<K = any, V = any> implements $Reference2ReferenceFunction<K, V> {
static "identity"<T>(): $Function$0<T, T>
}
}

