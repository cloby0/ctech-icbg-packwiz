declare module "it.unimi.dsi.fastutil.bytes.ByteSpliterator" {
import { $Consumer$$Type } from "java.util.function.Consumer"
import { $ByteConsumer, $ByteConsumer$$Type } from "it.unimi.dsi.fastutil.bytes.ByteConsumer"
import { $Spliterator$OfPrimitive } from "java.util.Spliterator$OfPrimitive"

export interface $ByteSpliterator extends $Spliterator$OfPrimitive<byte, $ByteConsumer, $ByteSpliterator> {
"characteristics"(): integer
"estimateSize"(): long
/** @deprecated */
"forEachRemaining"(consumer0: $Consumer$$Type<byte>): void
"forEachRemaining"(byteConsumer0: $ByteConsumer$$Type): void
"getExactSizeIfKnown"(): long
"hasCharacteristics"(int0: integer): boolean
"skip"(long0: long): long
/** @deprecated */
"tryAdvance"(consumer0: $Consumer$$Type<byte>): boolean
"tryAdvance"(byteConsumer0: $ByteConsumer$$Type): boolean
"trySplit"(): $ByteSpliterator
get "exactSizeIfKnown"(): long
}

export namespace $ByteSpliterator {
const probejs$$marker: never
}
export abstract class $ByteSpliterator$$Static implements $ByteSpliterator {
}
}

declare module "it.unimi.dsi.fastutil.bytes.Byte2IntFunction" {
import { $Int2ShortFunction$$Type } from "it.unimi.dsi.fastutil.ints.Int2ShortFunction"
import { $IntUnaryOperator, $IntUnaryOperator$$Type } from "java.util.function.IntUnaryOperator"
import { $Int2ByteFunction$$Type } from "it.unimi.dsi.fastutil.ints.Int2ByteFunction"
import { $Byte2FloatFunction } from "it.unimi.dsi.fastutil.bytes.Byte2FloatFunction"
import { $Byte2LongFunction } from "it.unimi.dsi.fastutil.bytes.Byte2LongFunction"
import { $Int2ReferenceFunction$$Type } from "it.unimi.dsi.fastutil.ints.Int2ReferenceFunction"
import { $Float2ByteFunction$$Type } from "it.unimi.dsi.fastutil.floats.Float2ByteFunction"
import { $Function, $Function$$Type } from "java.util.function.Function"
import { $Int2DoubleFunction$$Type } from "it.unimi.dsi.fastutil.ints.Int2DoubleFunction"
import { $Double2ByteFunction$$Type } from "it.unimi.dsi.fastutil.doubles.Double2ByteFunction"
import { $Reference2ByteFunction$$Type } from "it.unimi.dsi.fastutil.objects.Reference2ByteFunction"
import { $Byte2DoubleFunction } from "it.unimi.dsi.fastutil.bytes.Byte2DoubleFunction"
import { $Int2IntFunction, $Int2IntFunction$$Type } from "it.unimi.dsi.fastutil.ints.Int2IntFunction"
import { $Float2IntFunction } from "it.unimi.dsi.fastutil.floats.Float2IntFunction"
import { $Short2ByteFunction$$Type } from "it.unimi.dsi.fastutil.shorts.Short2ByteFunction"
import { $Object2IntFunction } from "it.unimi.dsi.fastutil.objects.Object2IntFunction"
import { $Reference2IntFunction } from "it.unimi.dsi.fastutil.objects.Reference2IntFunction"
import { $Long2IntFunction } from "it.unimi.dsi.fastutil.longs.Long2IntFunction"
import { $Short2IntFunction } from "it.unimi.dsi.fastutil.shorts.Short2IntFunction"
import { $Int2FloatFunction$$Type } from "it.unimi.dsi.fastutil.ints.Int2FloatFunction"
import { $Byte2ObjectFunction } from "it.unimi.dsi.fastutil.bytes.Byte2ObjectFunction"
import { $Function as $Function$0 } from "it.unimi.dsi.fastutil.Function"
import { $Byte2ReferenceFunction } from "it.unimi.dsi.fastutil.bytes.Byte2ReferenceFunction"
import { $Char2ByteFunction$$Type } from "it.unimi.dsi.fastutil.chars.Char2ByteFunction"
import { $Object2ByteFunction$$Type } from "it.unimi.dsi.fastutil.objects.Object2ByteFunction"
import { $Byte2ShortFunction } from "it.unimi.dsi.fastutil.bytes.Byte2ShortFunction"
import { $Int2ObjectFunction$$Type } from "it.unimi.dsi.fastutil.ints.Int2ObjectFunction"
import { $Byte2CharFunction } from "it.unimi.dsi.fastutil.bytes.Byte2CharFunction"
import { $Char2IntFunction } from "it.unimi.dsi.fastutil.chars.Char2IntFunction"
import { $Int2LongFunction$$Type } from "it.unimi.dsi.fastutil.ints.Int2LongFunction"
import { $Long2ByteFunction$$Type } from "it.unimi.dsi.fastutil.longs.Long2ByteFunction"
import { $Double2IntFunction } from "it.unimi.dsi.fastutil.doubles.Double2IntFunction"
import { $Byte2ByteFunction, $Byte2ByteFunction$$Type } from "it.unimi.dsi.fastutil.bytes.Byte2ByteFunction"
import { $Int2CharFunction$$Type } from "it.unimi.dsi.fastutil.ints.Int2CharFunction"

export interface $Byte2IntFunction extends $Function$0<byte, integer>, $IntUnaryOperator {
/** @deprecated */
"andThen"<T>(function0: $Function$$Type<integer, T>): $Function<byte, T>
"andThen"(intUnaryOperator0: $IntUnaryOperator$$Type): $IntUnaryOperator
"andThenByte"(int2ByteFunction0: $Int2ByteFunction$$Type): $Byte2ByteFunction
"andThenChar"(int2CharFunction0: $Int2CharFunction$$Type): $Byte2CharFunction
"andThenDouble"(int2DoubleFunction0: $Int2DoubleFunction$$Type): $Byte2DoubleFunction
"andThenFloat"(int2FloatFunction0: $Int2FloatFunction$$Type): $Byte2FloatFunction
"andThenInt"(int2IntFunction0: $Int2IntFunction$$Type): $Byte2IntFunction
"andThenLong"(int2LongFunction0: $Int2LongFunction$$Type): $Byte2LongFunction
"andThenObject"<T>(int2ObjectFunction0: $Int2ObjectFunction$$Type<T>): $Byte2ObjectFunction<T>
"andThenReference"<T>(int2ReferenceFunction0: $Int2ReferenceFunction$$Type<T>): $Byte2ReferenceFunction<T>
"andThenShort"(int2ShortFunction0: $Int2ShortFunction$$Type): $Byte2ShortFunction
"apply"(byte0: byte): integer
/** @deprecated */
"applyAsInt"(int0: integer): integer
"clear"(): void
/** @deprecated */
"compose"<T>(function0: $Function$$Type<T, byte>): $Function<T, integer>
"compose"(intUnaryOperator0: $IntUnaryOperator$$Type): $IntUnaryOperator
"composeByte"(byte2ByteFunction0: $Byte2ByteFunction$$Type): $Byte2IntFunction
"composeChar"(char2ByteFunction0: $Char2ByteFunction$$Type): $Char2IntFunction
"composeDouble"(double2ByteFunction0: $Double2ByteFunction$$Type): $Double2IntFunction
"composeFloat"(float2ByteFunction0: $Float2ByteFunction$$Type): $Float2IntFunction
"composeInt"(int2ByteFunction0: $Int2ByteFunction$$Type): $Int2IntFunction
"composeLong"(long2ByteFunction0: $Long2ByteFunction$$Type): $Long2IntFunction
"composeObject"<T>(object2ByteFunction0: $Object2ByteFunction$$Type<T>): $Object2IntFunction<T>
"composeReference"<T>(reference2ByteFunction0: $Reference2ByteFunction$$Type<T>): $Reference2IntFunction<T>
"composeShort"(short2ByteFunction0: $Short2ByteFunction$$Type): $Short2IntFunction
"containsKey"(byte0: byte): boolean
/** @deprecated */
"containsKey"(object0: any): boolean
"defaultReturnValue"(int0: integer): void
"defaultReturnValue"(): integer
"get"(byte0: byte): integer
/** @deprecated */
"get"(object0: any): integer
"getOrDefault"(byte0: byte, int1: integer): integer
/** @deprecated */
"getOrDefault"(object0: any, integer1: integer): integer
/** @deprecated */
"put"(byte0: byte, integer1: integer): integer
"put"(byte0: byte, int1: integer): integer
"remove"(byte0: byte): integer
"size"(): integer
}

export namespace $Byte2IntFunction {
function identity(): $IntUnaryOperator
}
export abstract class $Byte2IntFunction$$Static implements $Byte2IntFunction {
static "identity"(): $IntUnaryOperator
}
}

declare module "it.unimi.dsi.fastutil.bytes.Byte2CharFunction" {
import { $Float2CharFunction } from "it.unimi.dsi.fastutil.floats.Float2CharFunction"
import { $IntUnaryOperator, $IntUnaryOperator$$Type } from "java.util.function.IntUnaryOperator"
import { $Byte2FloatFunction } from "it.unimi.dsi.fastutil.bytes.Byte2FloatFunction"
import { $Byte2LongFunction } from "it.unimi.dsi.fastutil.bytes.Byte2LongFunction"
import { $Int2ByteFunction$$Type } from "it.unimi.dsi.fastutil.ints.Int2ByteFunction"
import { $Float2ByteFunction$$Type } from "it.unimi.dsi.fastutil.floats.Float2ByteFunction"
import { $Char2FloatFunction$$Type } from "it.unimi.dsi.fastutil.chars.Char2FloatFunction"
import { $Char2LongFunction$$Type } from "it.unimi.dsi.fastutil.chars.Char2LongFunction"
import { $Function, $Function$$Type } from "java.util.function.Function"
import { $Double2ByteFunction$$Type } from "it.unimi.dsi.fastutil.doubles.Double2ByteFunction"
import { $Reference2ByteFunction$$Type } from "it.unimi.dsi.fastutil.objects.Reference2ByteFunction"
import { $Byte2DoubleFunction } from "it.unimi.dsi.fastutil.bytes.Byte2DoubleFunction"
import { $Char2ReferenceFunction$$Type } from "it.unimi.dsi.fastutil.chars.Char2ReferenceFunction"
import { $Long2CharFunction } from "it.unimi.dsi.fastutil.longs.Long2CharFunction"
import { $Short2ByteFunction$$Type } from "it.unimi.dsi.fastutil.shorts.Short2ByteFunction"
import { $Char2CharFunction, $Char2CharFunction$$Type } from "it.unimi.dsi.fastutil.chars.Char2CharFunction"
import { $Byte2ObjectFunction } from "it.unimi.dsi.fastutil.bytes.Byte2ObjectFunction"
import { $Function as $Function$0 } from "it.unimi.dsi.fastutil.Function"
import { $Char2ByteFunction$$Type } from "it.unimi.dsi.fastutil.chars.Char2ByteFunction"
import { $Byte2ReferenceFunction } from "it.unimi.dsi.fastutil.bytes.Byte2ReferenceFunction"
import { $Object2ByteFunction$$Type } from "it.unimi.dsi.fastutil.objects.Object2ByteFunction"
import { $Byte2ShortFunction } from "it.unimi.dsi.fastutil.bytes.Byte2ShortFunction"
import { $Char2IntFunction$$Type } from "it.unimi.dsi.fastutil.chars.Char2IntFunction"
import { $Char2ShortFunction$$Type } from "it.unimi.dsi.fastutil.chars.Char2ShortFunction"
import { $Short2CharFunction } from "it.unimi.dsi.fastutil.shorts.Short2CharFunction"
import { $Long2ByteFunction$$Type } from "it.unimi.dsi.fastutil.longs.Long2ByteFunction"
import { $Double2CharFunction } from "it.unimi.dsi.fastutil.doubles.Double2CharFunction"
import { $Char2ObjectFunction$$Type } from "it.unimi.dsi.fastutil.chars.Char2ObjectFunction"
import { $Reference2CharFunction } from "it.unimi.dsi.fastutil.objects.Reference2CharFunction"
import { $Char2DoubleFunction$$Type } from "it.unimi.dsi.fastutil.chars.Char2DoubleFunction"
import { $Byte2ByteFunction, $Byte2ByteFunction$$Type } from "it.unimi.dsi.fastutil.bytes.Byte2ByteFunction"
import { $Byte2IntFunction } from "it.unimi.dsi.fastutil.bytes.Byte2IntFunction"
import { $Int2CharFunction } from "it.unimi.dsi.fastutil.ints.Int2CharFunction"
import { $Object2CharFunction } from "it.unimi.dsi.fastutil.objects.Object2CharFunction"

export interface $Byte2CharFunction extends $Function$0<byte, character>, $IntUnaryOperator {
/** @deprecated */
"andThen"<T>(function0: $Function$$Type<character, T>): $Function<byte, T>
"andThen"(intUnaryOperator0: $IntUnaryOperator$$Type): $IntUnaryOperator
"andThenByte"(char2ByteFunction0: $Char2ByteFunction$$Type): $Byte2ByteFunction
"andThenChar"(char2CharFunction0: $Char2CharFunction$$Type): $Byte2CharFunction
"andThenDouble"(char2DoubleFunction0: $Char2DoubleFunction$$Type): $Byte2DoubleFunction
"andThenFloat"(char2FloatFunction0: $Char2FloatFunction$$Type): $Byte2FloatFunction
"andThenInt"(char2IntFunction0: $Char2IntFunction$$Type): $Byte2IntFunction
"andThenLong"(char2LongFunction0: $Char2LongFunction$$Type): $Byte2LongFunction
"andThenObject"<T>(char2ObjectFunction0: $Char2ObjectFunction$$Type<T>): $Byte2ObjectFunction<T>
"andThenReference"<T>(char2ReferenceFunction0: $Char2ReferenceFunction$$Type<T>): $Byte2ReferenceFunction<T>
"andThenShort"(char2ShortFunction0: $Char2ShortFunction$$Type): $Byte2ShortFunction
"apply"(byte0: byte): character
/** @deprecated */
"applyAsInt"(int0: integer): integer
"clear"(): void
/** @deprecated */
"compose"<T>(function0: $Function$$Type<T, byte>): $Function<T, character>
"compose"(intUnaryOperator0: $IntUnaryOperator$$Type): $IntUnaryOperator
"composeByte"(byte2ByteFunction0: $Byte2ByteFunction$$Type): $Byte2CharFunction
"composeChar"(char2ByteFunction0: $Char2ByteFunction$$Type): $Char2CharFunction
"composeDouble"(double2ByteFunction0: $Double2ByteFunction$$Type): $Double2CharFunction
"composeFloat"(float2ByteFunction0: $Float2ByteFunction$$Type): $Float2CharFunction
"composeInt"(int2ByteFunction0: $Int2ByteFunction$$Type): $Int2CharFunction
"composeLong"(long2ByteFunction0: $Long2ByteFunction$$Type): $Long2CharFunction
"composeObject"<T>(object2ByteFunction0: $Object2ByteFunction$$Type<T>): $Object2CharFunction<T>
"composeReference"<T>(reference2ByteFunction0: $Reference2ByteFunction$$Type<T>): $Reference2CharFunction<T>
"composeShort"(short2ByteFunction0: $Short2ByteFunction$$Type): $Short2CharFunction
"containsKey"(byte0: byte): boolean
/** @deprecated */
"containsKey"(object0: any): boolean
"defaultReturnValue"(char0: character): void
"defaultReturnValue"(): character
"get"(byte0: byte): character
/** @deprecated */
"get"(object0: any): character
"getOrDefault"(byte0: byte, char1: character): character
/** @deprecated */
"getOrDefault"(object0: any, character1: character): character
/** @deprecated */
"put"(byte0: byte, character1: character): character
"put"(byte0: byte, char1: character): character
"remove"(byte0: byte): character
"size"(): integer
}

export namespace $Byte2CharFunction {
function identity(): $IntUnaryOperator
}
export abstract class $Byte2CharFunction$$Static implements $Byte2CharFunction {
static "identity"(): $IntUnaryOperator
}
}

declare module "it.unimi.dsi.fastutil.bytes.Byte2ObjectMap$Entry" {
import { $Map$Entry, $Map$Entry$$Type } from "java.util.Map$Entry"
import { $Comparable, $Comparable$$Type } from "java.lang.Comparable"
import { $Comparator, $Comparator$$Type } from "java.util.Comparator"

export interface $Byte2ObjectMap$Entry<V = any> extends $Map$Entry<byte, V> {
"equals"(object0: any): boolean
"getByteKey"(): byte
/** @deprecated */
"getKey"(): byte
"getValue"(): V
"hashCode"(): integer
"setValue"(v0: V): V
get "byteKey"(): byte
get "key"(): byte
get "value"(): V
set "value"(value: V)
}

export namespace $Byte2ObjectMap$Entry {
function comparingByKey<K extends $Comparable<K>, V>(): $Comparator<$Map$Entry<K, V>>
function comparingByKey<K, V>(comparator0: $Comparator$$Type<K>): $Comparator<$Map$Entry<K, V>>
function comparingByValue<K, V extends $Comparable<V>>(): $Comparator<$Map$Entry<K, V>>
function comparingByValue<K, V>(comparator0: $Comparator$$Type<V>): $Comparator<$Map$Entry<K, V>>
function copyOf<K, V>(entry0: $Map$Entry$$Type<K, V>): $Map$Entry<K, V>
}
export abstract class $Byte2ObjectMap$Entry$$Static<V = any> implements $Byte2ObjectMap$Entry<V> {
static "comparingByKey"<K extends $Comparable<K>, V>(): $Comparator<$Map$Entry<K, V>>
static "comparingByKey"<K, V>(comparator0: $Comparator$$Type<K>): $Comparator<$Map$Entry<K, V>>
static "comparingByValue"<K, V extends $Comparable<V>>(): $Comparator<$Map$Entry<K, V>>
static "comparingByValue"<K, V>(comparator0: $Comparator$$Type<V>): $Comparator<$Map$Entry<K, V>>
static "copyOf"<K, V>(entry0: $Map$Entry$$Type<K, V>): $Map$Entry<K, V>
}
}

declare module "it.unimi.dsi.fastutil.bytes.Byte2ReferenceFunction" {
import { $Double2ReferenceFunction } from "it.unimi.dsi.fastutil.doubles.Double2ReferenceFunction"
import { $Byte2FloatFunction } from "it.unimi.dsi.fastutil.bytes.Byte2FloatFunction"
import { $Byte2LongFunction } from "it.unimi.dsi.fastutil.bytes.Byte2LongFunction"
import { $Int2ByteFunction$$Type } from "it.unimi.dsi.fastutil.ints.Int2ByteFunction"
import { $Int2ReferenceFunction } from "it.unimi.dsi.fastutil.ints.Int2ReferenceFunction"
import { $Short2ReferenceFunction } from "it.unimi.dsi.fastutil.shorts.Short2ReferenceFunction"
import { $Float2ByteFunction$$Type } from "it.unimi.dsi.fastutil.floats.Float2ByteFunction"
import { $Function, $Function$$Type } from "java.util.function.Function"
import { $Reference2FloatFunction$$Type } from "it.unimi.dsi.fastutil.objects.Reference2FloatFunction"
import { $Double2ByteFunction$$Type } from "it.unimi.dsi.fastutil.doubles.Double2ByteFunction"
import { $Reference2ByteFunction$$Type } from "it.unimi.dsi.fastutil.objects.Reference2ByteFunction"
import { $Byte2DoubleFunction } from "it.unimi.dsi.fastutil.bytes.Byte2DoubleFunction"
import { $Char2ReferenceFunction } from "it.unimi.dsi.fastutil.chars.Char2ReferenceFunction"
import { $Short2ByteFunction$$Type } from "it.unimi.dsi.fastutil.shorts.Short2ByteFunction"
import { $Reference2LongFunction$$Type } from "it.unimi.dsi.fastutil.objects.Reference2LongFunction"
import { $Reference2IntFunction$$Type } from "it.unimi.dsi.fastutil.objects.Reference2IntFunction"
import { $IntFunction } from "java.util.function.IntFunction"
import { $Reference2ObjectFunction$$Type } from "it.unimi.dsi.fastutil.objects.Reference2ObjectFunction"
import { $Byte2ObjectFunction } from "it.unimi.dsi.fastutil.bytes.Byte2ObjectFunction"
import { $Function as $Function$0 } from "it.unimi.dsi.fastutil.Function"
import { $Char2ByteFunction$$Type } from "it.unimi.dsi.fastutil.chars.Char2ByteFunction"
import { $Object2ByteFunction$$Type } from "it.unimi.dsi.fastutil.objects.Object2ByteFunction"
import { $Byte2ShortFunction } from "it.unimi.dsi.fastutil.bytes.Byte2ShortFunction"
import { $Reference2ShortFunction$$Type } from "it.unimi.dsi.fastutil.objects.Reference2ShortFunction"
import { $Byte2CharFunction } from "it.unimi.dsi.fastutil.bytes.Byte2CharFunction"
import { $Reference2ReferenceFunction, $Reference2ReferenceFunction$$Type } from "it.unimi.dsi.fastutil.objects.Reference2ReferenceFunction"
import { $Object2ReferenceFunction } from "it.unimi.dsi.fastutil.objects.Object2ReferenceFunction"
import { $Long2ReferenceFunction } from "it.unimi.dsi.fastutil.longs.Long2ReferenceFunction"
import { $Long2ByteFunction$$Type } from "it.unimi.dsi.fastutil.longs.Long2ByteFunction"
import { $Reference2DoubleFunction$$Type } from "it.unimi.dsi.fastutil.objects.Reference2DoubleFunction"
import { $Reference2CharFunction$$Type } from "it.unimi.dsi.fastutil.objects.Reference2CharFunction"
import { $Float2ReferenceFunction } from "it.unimi.dsi.fastutil.floats.Float2ReferenceFunction"
import { $Byte2ByteFunction, $Byte2ByteFunction$$Type } from "it.unimi.dsi.fastutil.bytes.Byte2ByteFunction"
import { $Byte2IntFunction } from "it.unimi.dsi.fastutil.bytes.Byte2IntFunction"

export interface $Byte2ReferenceFunction<V = any> extends $Function$0<byte, V>, $IntFunction<V> {
"andThen"<V>(function0: $Function$$Type<V, V>): $Function<byte, V>
"andThenByte"(reference2ByteFunction0: $Reference2ByteFunction$$Type<V>): $Byte2ByteFunction
"andThenChar"(reference2CharFunction0: $Reference2CharFunction$$Type<V>): $Byte2CharFunction
"andThenDouble"(reference2DoubleFunction0: $Reference2DoubleFunction$$Type<V>): $Byte2DoubleFunction
"andThenFloat"(reference2FloatFunction0: $Reference2FloatFunction$$Type<V>): $Byte2FloatFunction
"andThenInt"(reference2IntFunction0: $Reference2IntFunction$$Type<V>): $Byte2IntFunction
"andThenLong"(reference2LongFunction0: $Reference2LongFunction$$Type<V>): $Byte2LongFunction
"andThenObject"<T>(reference2ObjectFunction0: $Reference2ObjectFunction$$Type<V, T>): $Byte2ObjectFunction<T>
"andThenReference"<T>(reference2ReferenceFunction0: $Reference2ReferenceFunction$$Type<V, T>): $Byte2ReferenceFunction<T>
"andThenShort"(reference2ShortFunction0: $Reference2ShortFunction$$Type<V>): $Byte2ShortFunction
/** @deprecated */
"apply"(int0: integer): V
"apply"(byte0: byte): V
"clear"(): void
/** @deprecated */
"compose"<T>(function0: $Function$$Type<T, byte>): $Function<T, V>
"composeByte"(byte2ByteFunction0: $Byte2ByteFunction$$Type): $Byte2ReferenceFunction<V>
"composeChar"(char2ByteFunction0: $Char2ByteFunction$$Type): $Char2ReferenceFunction<V>
"composeDouble"(double2ByteFunction0: $Double2ByteFunction$$Type): $Double2ReferenceFunction<V>
"composeFloat"(float2ByteFunction0: $Float2ByteFunction$$Type): $Float2ReferenceFunction<V>
"composeInt"(int2ByteFunction0: $Int2ByteFunction$$Type): $Int2ReferenceFunction<V>
"composeLong"(long2ByteFunction0: $Long2ByteFunction$$Type): $Long2ReferenceFunction<V>
"composeObject"<T>(object2ByteFunction0: $Object2ByteFunction$$Type<T>): $Object2ReferenceFunction<T, V>
"composeReference"<T>(reference2ByteFunction0: $Reference2ByteFunction$$Type<T>): $Reference2ReferenceFunction<T, V>
"composeShort"(short2ByteFunction0: $Short2ByteFunction$$Type): $Short2ReferenceFunction<V>
"containsKey"(byte0: byte): boolean
/** @deprecated */
"containsKey"(object0: any): boolean
"defaultReturnValue"(): V
"defaultReturnValue"(v0: V): void
"get"(byte0: byte): V
/** @deprecated */
"get"(object0: any): V
/** @deprecated */
"getOrDefault"(object0: any, v1: V): V
"getOrDefault"(byte0: byte, v1: V): V
"put"(byte0: byte, v1: V): V
/** @deprecated */
"put"(byte0: byte, v1: V): V
/** @deprecated */
"remove"(object0: any): V
"remove"(byte0: byte): V
"size"(): integer
}

export namespace $Byte2ReferenceFunction {
function identity<T>(): $Function<T, T>
}
export abstract class $Byte2ReferenceFunction$$Static<V = any> implements $Byte2ReferenceFunction<V> {
static "identity"<T>(): $Function<T, T>
}
}

declare module "it.unimi.dsi.fastutil.bytes.Byte2LongFunction" {
import { $Long2ShortFunction$$Type } from "it.unimi.dsi.fastutil.longs.Long2ShortFunction"
import { $Byte2FloatFunction } from "it.unimi.dsi.fastutil.bytes.Byte2FloatFunction"
import { $Int2ByteFunction$$Type } from "it.unimi.dsi.fastutil.ints.Int2ByteFunction"
import { $Float2ByteFunction$$Type } from "it.unimi.dsi.fastutil.floats.Float2ByteFunction"
import { $Char2LongFunction } from "it.unimi.dsi.fastutil.chars.Char2LongFunction"
import { $Function, $Function$$Type } from "java.util.function.Function"
import { $Double2ByteFunction$$Type } from "it.unimi.dsi.fastutil.doubles.Double2ByteFunction"
import { $Object2LongFunction } from "it.unimi.dsi.fastutil.objects.Object2LongFunction"
import { $Reference2ByteFunction$$Type } from "it.unimi.dsi.fastutil.objects.Reference2ByteFunction"
import { $Byte2DoubleFunction } from "it.unimi.dsi.fastutil.bytes.Byte2DoubleFunction"
import { $Long2CharFunction$$Type } from "it.unimi.dsi.fastutil.longs.Long2CharFunction"
import { $Short2ByteFunction$$Type } from "it.unimi.dsi.fastutil.shorts.Short2ByteFunction"
import { $Reference2LongFunction } from "it.unimi.dsi.fastutil.objects.Reference2LongFunction"
import { $Short2LongFunction } from "it.unimi.dsi.fastutil.shorts.Short2LongFunction"
import { $Long2IntFunction$$Type } from "it.unimi.dsi.fastutil.longs.Long2IntFunction"
import { $Long2FloatFunction$$Type } from "it.unimi.dsi.fastutil.longs.Long2FloatFunction"
import { $Byte2ObjectFunction } from "it.unimi.dsi.fastutil.bytes.Byte2ObjectFunction"
import { $Function as $Function$0 } from "it.unimi.dsi.fastutil.Function"
import { $Byte2ReferenceFunction } from "it.unimi.dsi.fastutil.bytes.Byte2ReferenceFunction"
import { $Char2ByteFunction$$Type } from "it.unimi.dsi.fastutil.chars.Char2ByteFunction"
import { $Float2LongFunction } from "it.unimi.dsi.fastutil.floats.Float2LongFunction"
import { $Object2ByteFunction$$Type } from "it.unimi.dsi.fastutil.objects.Object2ByteFunction"
import { $Byte2ShortFunction } from "it.unimi.dsi.fastutil.bytes.Byte2ShortFunction"
import { $Long2ObjectFunction$$Type } from "it.unimi.dsi.fastutil.longs.Long2ObjectFunction"
import { $Byte2CharFunction } from "it.unimi.dsi.fastutil.bytes.Byte2CharFunction"
import { $Long2DoubleFunction$$Type } from "it.unimi.dsi.fastutil.longs.Long2DoubleFunction"
import { $Int2LongFunction } from "it.unimi.dsi.fastutil.ints.Int2LongFunction"
import { $Long2LongFunction, $Long2LongFunction$$Type } from "it.unimi.dsi.fastutil.longs.Long2LongFunction"
import { $Double2LongFunction } from "it.unimi.dsi.fastutil.doubles.Double2LongFunction"
import { $Long2ByteFunction$$Type } from "it.unimi.dsi.fastutil.longs.Long2ByteFunction"
import { $Long2ReferenceFunction$$Type } from "it.unimi.dsi.fastutil.longs.Long2ReferenceFunction"
import { $IntToLongFunction } from "java.util.function.IntToLongFunction"
import { $Byte2ByteFunction, $Byte2ByteFunction$$Type } from "it.unimi.dsi.fastutil.bytes.Byte2ByteFunction"
import { $Byte2IntFunction } from "it.unimi.dsi.fastutil.bytes.Byte2IntFunction"

export interface $Byte2LongFunction extends $Function$0<byte, long>, $IntToLongFunction {
/** @deprecated */
"andThen"<T>(function0: $Function$$Type<long, T>): $Function<byte, T>
"andThenByte"(long2ByteFunction0: $Long2ByteFunction$$Type): $Byte2ByteFunction
"andThenChar"(long2CharFunction0: $Long2CharFunction$$Type): $Byte2CharFunction
"andThenDouble"(long2DoubleFunction0: $Long2DoubleFunction$$Type): $Byte2DoubleFunction
"andThenFloat"(long2FloatFunction0: $Long2FloatFunction$$Type): $Byte2FloatFunction
"andThenInt"(long2IntFunction0: $Long2IntFunction$$Type): $Byte2IntFunction
"andThenLong"(long2LongFunction0: $Long2LongFunction$$Type): $Byte2LongFunction
"andThenObject"<T>(long2ObjectFunction0: $Long2ObjectFunction$$Type<T>): $Byte2ObjectFunction<T>
"andThenReference"<T>(long2ReferenceFunction0: $Long2ReferenceFunction$$Type<T>): $Byte2ReferenceFunction<T>
"andThenShort"(long2ShortFunction0: $Long2ShortFunction$$Type): $Byte2ShortFunction
"apply"(byte0: byte): long
/** @deprecated */
"applyAsLong"(int0: integer): long
"clear"(): void
/** @deprecated */
"compose"<T>(function0: $Function$$Type<T, byte>): $Function<T, long>
"composeByte"(byte2ByteFunction0: $Byte2ByteFunction$$Type): $Byte2LongFunction
"composeChar"(char2ByteFunction0: $Char2ByteFunction$$Type): $Char2LongFunction
"composeDouble"(double2ByteFunction0: $Double2ByteFunction$$Type): $Double2LongFunction
"composeFloat"(float2ByteFunction0: $Float2ByteFunction$$Type): $Float2LongFunction
"composeInt"(int2ByteFunction0: $Int2ByteFunction$$Type): $Int2LongFunction
"composeLong"(long2ByteFunction0: $Long2ByteFunction$$Type): $Long2LongFunction
"composeObject"<T>(object2ByteFunction0: $Object2ByteFunction$$Type<T>): $Object2LongFunction<T>
"composeReference"<T>(reference2ByteFunction0: $Reference2ByteFunction$$Type<T>): $Reference2LongFunction<T>
"composeShort"(short2ByteFunction0: $Short2ByteFunction$$Type): $Short2LongFunction
"containsKey"(byte0: byte): boolean
/** @deprecated */
"containsKey"(object0: any): boolean
"defaultReturnValue"(long0: long): void
"defaultReturnValue"(): long
"get"(byte0: byte): long
/** @deprecated */
"get"(object0: any): long
"getOrDefault"(byte0: byte, long1: long): long
/** @deprecated */
"getOrDefault"(object0: any, long1: long): long
/** @deprecated */
"put"(byte0: byte, long1: long): long
"put"(byte0: byte, long1: long): long
"remove"(byte0: byte): long
"size"(): integer
}

export namespace $Byte2LongFunction {
function identity<T>(): $Function<T, T>
}
export abstract class $Byte2LongFunction$$Static implements $Byte2LongFunction {
static "identity"<T>(): $Function<T, T>
}
}

declare module "it.unimi.dsi.fastutil.bytes.ByteCollection" {
import { $IntStream } from "java.util.stream.IntStream"
import { $Predicate$$Type } from "java.util.function.Predicate"
import { $Collection, $Collection$$Type } from "java.util.Collection"
import { $IntConsumer$$Type } from "java.util.function.IntConsumer"
import { $IntPredicate$$Type } from "java.util.function.IntPredicate"
import { $Consumer$$Type } from "java.util.function.Consumer"
import { $IntIterator } from "it.unimi.dsi.fastutil.ints.IntIterator"
import { $Stream } from "java.util.stream.Stream"
import { $BytePredicate$$Type } from "it.unimi.dsi.fastutil.bytes.BytePredicate"
import { $ByteIterable } from "it.unimi.dsi.fastutil.bytes.ByteIterable"
import { $ByteConsumer$$Type } from "it.unimi.dsi.fastutil.bytes.ByteConsumer"
import { $ByteSpliterator } from "it.unimi.dsi.fastutil.bytes.ByteSpliterator"
import { $IntSpliterator } from "it.unimi.dsi.fastutil.ints.IntSpliterator"
import { $IntFunction$$Type } from "java.util.function.IntFunction"

export interface $ByteCollection extends $Collection<byte>, $ByteIterable {
/** @deprecated */
"add"(byte0: byte): boolean
"add"(byte0: byte): boolean
"addAll"(byteCollection0: $ByteCollection$$Type): boolean
"addAll"(collection0: $Collection$$Type<byte>): boolean
"clear"(): void
/** @deprecated */
"contains"(object0: any): boolean
"contains"(byte0: byte): boolean
"containsAll"(byteCollection0: $ByteCollection$$Type): boolean
"containsAll"(collection0: $Collection$$Type<any>): boolean
"equals"(object0: any): boolean
"forEach"(byteConsumer0: $ByteConsumer$$Type): void
/** @deprecated */
"forEach"(consumer0: $Consumer$$Type<byte>): void
"forEach"(intConsumer0: $IntConsumer$$Type): void
"hashCode"(): integer
"intIterator"(): $IntIterator
"intParallelStream"(): $IntStream
"intSpliterator"(): $IntSpliterator
"intStream"(): $IntStream
"isEmpty"(): boolean
/** @deprecated */
"parallelStream"(): $Stream<byte>
"rem"(byte0: byte): boolean
/** @deprecated */
"remove"(object0: any): boolean
"removeAll"(byteCollection0: $ByteCollection$$Type): boolean
"removeAll"(collection0: $Collection$$Type<any>): boolean
"removeIf"(bytePredicate0: $BytePredicate$$Type): boolean
/** @deprecated */
"removeIf"(predicate0: $Predicate$$Type<byte>): boolean
"removeIf"(intPredicate0: $IntPredicate$$Type): boolean
"retainAll"(byteCollection0: $ByteCollection$$Type): boolean
"retainAll"(collection0: $Collection$$Type<any>): boolean
"size"(): integer
"spliterator"(): $ByteSpliterator
/** @deprecated */
"stream"(): $Stream<byte>
"toArray"(byte0s: byte[]): byte[]
"toArray"<T>(t0s: T[]): T[]
"toArray"<T>(intFunction0: $IntFunction$$Type<T[]>): T[]
"toArray"(): any[]
"toByteArray"(): byte[]
/** @deprecated */
"toByteArray"(byte0s: byte[]): byte[]
get "empty"(): boolean
}

export namespace $ByteCollection {
const probejs$$marker: never
}
export abstract class $ByteCollection$$Static implements $ByteCollection {
}
}

declare module "it.unimi.dsi.fastutil.bytes.Byte2ObjectMap" {
import { $Byte2FloatFunction } from "it.unimi.dsi.fastutil.bytes.Byte2FloatFunction"
import { $Byte2LongFunction } from "it.unimi.dsi.fastutil.bytes.Byte2LongFunction"
import { $Int2ByteFunction$$Type } from "it.unimi.dsi.fastutil.ints.Int2ByteFunction"
import { $BiFunction$$Type } from "java.util.function.BiFunction"
import { $Float2ByteFunction$$Type } from "it.unimi.dsi.fastutil.floats.Float2ByteFunction"
import { $Double2ObjectFunction } from "it.unimi.dsi.fastutil.doubles.Double2ObjectFunction"
import { $Object2ObjectFunction, $Object2ObjectFunction$$Type } from "it.unimi.dsi.fastutil.objects.Object2ObjectFunction"
import { $Function, $Function$$Type } from "java.util.function.Function"
import { $Byte2ObjectMap$Entry } from "it.unimi.dsi.fastutil.bytes.Byte2ObjectMap$Entry"
import { $Object2LongFunction$$Type } from "it.unimi.dsi.fastutil.objects.Object2LongFunction"
import { $Double2ByteFunction$$Type } from "it.unimi.dsi.fastutil.doubles.Double2ByteFunction"
import { $Object2DoubleFunction$$Type } from "it.unimi.dsi.fastutil.objects.Object2DoubleFunction"
import { $Reference2ByteFunction$$Type } from "it.unimi.dsi.fastutil.objects.Reference2ByteFunction"
import { $Byte2DoubleFunction } from "it.unimi.dsi.fastutil.bytes.Byte2DoubleFunction"
import { $Object2FloatFunction$$Type } from "it.unimi.dsi.fastutil.objects.Object2FloatFunction"
import { $Short2ByteFunction$$Type } from "it.unimi.dsi.fastutil.shorts.Short2ByteFunction"
import { $Object2IntFunction$$Type } from "it.unimi.dsi.fastutil.objects.Object2IntFunction"
import { $Map, $Map$$Type } from "java.util.Map"
import { $BiConsumer$$Type } from "java.util.function.BiConsumer"
import { $IntFunction$$Type } from "java.util.function.IntFunction"
import { $Reference2ObjectFunction } from "it.unimi.dsi.fastutil.objects.Reference2ObjectFunction"
import { $Map$Entry, $Map$Entry$$Type } from "java.util.Map$Entry"
import { $Byte2ObjectFunction, $Byte2ObjectFunction$$Type } from "it.unimi.dsi.fastutil.bytes.Byte2ObjectFunction"
import { $Short2ObjectFunction } from "it.unimi.dsi.fastutil.shorts.Short2ObjectFunction"
import { $Object2ByteFunction$$Type } from "it.unimi.dsi.fastutil.objects.Object2ByteFunction"
import { $Byte2ReferenceFunction } from "it.unimi.dsi.fastutil.bytes.Byte2ReferenceFunction"
import { $Char2ByteFunction$$Type } from "it.unimi.dsi.fastutil.chars.Char2ByteFunction"
import { $Byte2ShortFunction } from "it.unimi.dsi.fastutil.bytes.Byte2ShortFunction"
import { $Int2ObjectFunction } from "it.unimi.dsi.fastutil.ints.Int2ObjectFunction"
import { $Long2ObjectFunction } from "it.unimi.dsi.fastutil.longs.Long2ObjectFunction"
import { $Byte2CharFunction } from "it.unimi.dsi.fastutil.bytes.Byte2CharFunction"
import { $ObjectSet } from "it.unimi.dsi.fastutil.objects.ObjectSet"
import { $Object2ReferenceFunction$$Type } from "it.unimi.dsi.fastutil.objects.Object2ReferenceFunction"
import { $Float2ObjectFunction } from "it.unimi.dsi.fastutil.floats.Float2ObjectFunction"
import { $Long2ByteFunction$$Type } from "it.unimi.dsi.fastutil.longs.Long2ByteFunction"
import { $Char2ObjectFunction } from "it.unimi.dsi.fastutil.chars.Char2ObjectFunction"
import { $Object2ShortFunction$$Type } from "it.unimi.dsi.fastutil.objects.Object2ShortFunction"
import { $Byte2ByteFunction, $Byte2ByteFunction$$Type } from "it.unimi.dsi.fastutil.bytes.Byte2ByteFunction"
import { $Object2CharFunction$$Type } from "it.unimi.dsi.fastutil.objects.Object2CharFunction"
import { $Byte2IntFunction } from "it.unimi.dsi.fastutil.bytes.Byte2IntFunction"

export interface $Byte2ObjectMap<V = any> extends $Byte2ObjectFunction<V>, $Map<byte, V> {
"andThen"<V>(function0: $Function$$Type<V, V>): $Function<byte, V>
"andThenByte"(object2ByteFunction0: $Object2ByteFunction$$Type<V>): $Byte2ByteFunction
"andThenChar"(object2CharFunction0: $Object2CharFunction$$Type<V>): $Byte2CharFunction
"andThenDouble"(object2DoubleFunction0: $Object2DoubleFunction$$Type<V>): $Byte2DoubleFunction
"andThenFloat"(object2FloatFunction0: $Object2FloatFunction$$Type<V>): $Byte2FloatFunction
"andThenInt"(object2IntFunction0: $Object2IntFunction$$Type<V>): $Byte2IntFunction
"andThenLong"(object2LongFunction0: $Object2LongFunction$$Type<V>): $Byte2LongFunction
"andThenObject"<T>(object2ObjectFunction0: $Object2ObjectFunction$$Type<V, T>): $Byte2ObjectFunction<T>
"andThenReference"<T>(object2ReferenceFunction0: $Object2ReferenceFunction$$Type<V, T>): $Byte2ReferenceFunction<T>
"andThenShort"(object2ShortFunction0: $Object2ShortFunction$$Type<V>): $Byte2ShortFunction
/** @deprecated */
"apply"(int0: integer): V
"apply"(byte0: byte): V
"byte2ObjectEntrySet"(): $ObjectSet<$Byte2ObjectMap$Entry<V>>
"clear"(): void
/** @deprecated */
"compose"<T>(function0: $Function$$Type<T, byte>): $Function<T, V>
"composeByte"(byte2ByteFunction0: $Byte2ByteFunction$$Type): $Byte2ObjectFunction<V>
"composeChar"(char2ByteFunction0: $Char2ByteFunction$$Type): $Char2ObjectFunction<V>
"composeDouble"(double2ByteFunction0: $Double2ByteFunction$$Type): $Double2ObjectFunction<V>
"composeFloat"(float2ByteFunction0: $Float2ByteFunction$$Type): $Float2ObjectFunction<V>
"composeInt"(int2ByteFunction0: $Int2ByteFunction$$Type): $Int2ObjectFunction<V>
"composeLong"(long2ByteFunction0: $Long2ByteFunction$$Type): $Long2ObjectFunction<V>
"composeObject"<T>(object2ByteFunction0: $Object2ByteFunction$$Type<T>): $Object2ObjectFunction<T, V>
"composeReference"<T>(reference2ByteFunction0: $Reference2ByteFunction$$Type<T>): $Reference2ObjectFunction<T, V>
"composeShort"(short2ByteFunction0: $Short2ByteFunction$$Type): $Short2ObjectFunction<V>
"compute"(byte0: byte, biFunction1: $BiFunction$$Type<byte, V, V>): V
"compute"(byte0: byte, biFunction1: $BiFunction$$Type<byte, V, V>): V
"computeIfAbsent"(byte0: byte, byte2ObjectFunction1: $Byte2ObjectFunction$$Type<V>): V
"computeIfAbsent"(byte0: byte, intFunction1: $IntFunction$$Type<V>): V
"computeIfAbsent"(byte0: byte, function1: $Function$$Type<byte, V>): V
/** @deprecated */
"computeIfAbsentPartial"(byte0: byte, byte2ObjectFunction1: $Byte2ObjectFunction$$Type<V>): V
"computeIfPresent"(byte0: byte, biFunction1: $BiFunction$$Type<byte, V, V>): V
"computeIfPresent"(byte0: byte, biFunction1: $BiFunction$$Type<byte, V, V>): V
/** @deprecated */
"containsKey"(object0: any): boolean
"containsKey"(byte0: byte): boolean
"containsValue"(object0: any): boolean
"defaultReturnValue"(): V
"defaultReturnValue"(v0: V): void
"equals"(object0: any): boolean
"forEach"(biConsumer0: $BiConsumer$$Type<byte, V>): void
/** @deprecated */
"get"(object0: any): V
"get"(byte0: byte): V
"getOrDefault"(byte0: byte, v1: V): V
/** @deprecated */
"getOrDefault"(object0: any, v1: V): V
"hashCode"(): integer
"isEmpty"(): boolean
"merge"(byte0: byte, v1: V, biFunction2: $BiFunction$$Type<V, V, V>): V
"merge"(byte0: byte, v1: V, biFunction2: $BiFunction$$Type<V, V, V>): V
/** @deprecated */
"put"(byte0: byte, v1: V): V
"put"(byte0: byte, v1: V): V
"putAll"(map0: $Map$$Type<byte, V>): void
"putIfAbsent"(byte0: byte, v1: V): V
"putIfAbsent"(byte0: byte, v1: V): V
"remove"(byte0: byte, object1: any): boolean
/** @deprecated */
"remove"(object0: any): V
"remove"(byte0: byte): V
"remove"(object0: any, object1: any): boolean
"replace"(byte0: byte, v1: V): V
"replace"(byte0: byte, v1: V, v2: V): boolean
"replace"(byte0: byte, v1: V): V
"replace"(byte0: byte, v1: V, v2: V): boolean
"replaceAll"(biFunction0: $BiFunction$$Type<byte, V, V>): void
"size"(): integer
[index: string | number]: V
get "empty"(): boolean
}

export namespace $Byte2ObjectMap {
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
export abstract class $Byte2ObjectMap$$Static<V = any> implements $Byte2ObjectMap<V> {
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

declare module "it.unimi.dsi.fastutil.bytes.ByteConsumer" {
import { $Consumer, $Consumer$$Type } from "java.util.function.Consumer"
import { $IntConsumer } from "java.util.function.IntConsumer"

export interface $ByteConsumer extends $Consumer<byte>, $IntConsumer {
"accept"(byte0: byte): void
/** @deprecated */
"accept"(int0: integer): void
/** @deprecated */
"accept"(byte0: byte): void
"andThen"(byteConsumer0: $ByteConsumer$$Type): $ByteConsumer
/** @deprecated */
"andThen"(consumer0: $Consumer$$Type<byte>): $Consumer<byte>
}

export namespace $ByteConsumer {
const probejs$$marker: never
}
export abstract class $ByteConsumer$$Static implements $ByteConsumer {
}
}

declare module "it.unimi.dsi.fastutil.bytes.Byte2FloatFunction" {
import { $Float2CharFunction$$Type } from "it.unimi.dsi.fastutil.floats.Float2CharFunction"
import { $Byte2LongFunction } from "it.unimi.dsi.fastutil.bytes.Byte2LongFunction"
import { $Int2ByteFunction$$Type } from "it.unimi.dsi.fastutil.ints.Int2ByteFunction"
import { $Float2ByteFunction$$Type } from "it.unimi.dsi.fastutil.floats.Float2ByteFunction"
import { $Char2FloatFunction } from "it.unimi.dsi.fastutil.chars.Char2FloatFunction"
import { $Function, $Function$$Type } from "java.util.function.Function"
import { $Reference2FloatFunction } from "it.unimi.dsi.fastutil.objects.Reference2FloatFunction"
import { $Double2ByteFunction$$Type } from "it.unimi.dsi.fastutil.doubles.Double2ByteFunction"
import { $Float2FloatFunction, $Float2FloatFunction$$Type } from "it.unimi.dsi.fastutil.floats.Float2FloatFunction"
import { $Reference2ByteFunction$$Type } from "it.unimi.dsi.fastutil.objects.Reference2ByteFunction"
import { $Byte2DoubleFunction } from "it.unimi.dsi.fastutil.bytes.Byte2DoubleFunction"
import { $Float2IntFunction$$Type } from "it.unimi.dsi.fastutil.floats.Float2IntFunction"
import { $Object2FloatFunction } from "it.unimi.dsi.fastutil.objects.Object2FloatFunction"
import { $Short2ByteFunction$$Type } from "it.unimi.dsi.fastutil.shorts.Short2ByteFunction"
import { $Long2FloatFunction } from "it.unimi.dsi.fastutil.longs.Long2FloatFunction"
import { $Int2FloatFunction } from "it.unimi.dsi.fastutil.ints.Int2FloatFunction"
import { $Byte2ObjectFunction } from "it.unimi.dsi.fastutil.bytes.Byte2ObjectFunction"
import { $Double2FloatFunction } from "it.unimi.dsi.fastutil.doubles.Double2FloatFunction"
import { $IntToDoubleFunction } from "java.util.function.IntToDoubleFunction"
import { $Function as $Function$0 } from "it.unimi.dsi.fastutil.Function"
import { $Float2LongFunction$$Type } from "it.unimi.dsi.fastutil.floats.Float2LongFunction"
import { $Byte2ReferenceFunction } from "it.unimi.dsi.fastutil.bytes.Byte2ReferenceFunction"
import { $Char2ByteFunction$$Type } from "it.unimi.dsi.fastutil.chars.Char2ByteFunction"
import { $Object2ByteFunction$$Type } from "it.unimi.dsi.fastutil.objects.Object2ByteFunction"
import { $Byte2ShortFunction } from "it.unimi.dsi.fastutil.bytes.Byte2ShortFunction"
import { $Byte2CharFunction } from "it.unimi.dsi.fastutil.bytes.Byte2CharFunction"
import { $Float2ShortFunction$$Type } from "it.unimi.dsi.fastutil.floats.Float2ShortFunction"
import { $Short2FloatFunction } from "it.unimi.dsi.fastutil.shorts.Short2FloatFunction"
import { $Float2ObjectFunction$$Type } from "it.unimi.dsi.fastutil.floats.Float2ObjectFunction"
import { $Long2ByteFunction$$Type } from "it.unimi.dsi.fastutil.longs.Long2ByteFunction"
import { $Float2DoubleFunction$$Type } from "it.unimi.dsi.fastutil.floats.Float2DoubleFunction"
import { $Float2ReferenceFunction$$Type } from "it.unimi.dsi.fastutil.floats.Float2ReferenceFunction"
import { $Byte2ByteFunction, $Byte2ByteFunction$$Type } from "it.unimi.dsi.fastutil.bytes.Byte2ByteFunction"
import { $Byte2IntFunction } from "it.unimi.dsi.fastutil.bytes.Byte2IntFunction"

export interface $Byte2FloatFunction extends $Function$0<byte, float>, $IntToDoubleFunction {
/** @deprecated */
"andThen"<T>(function0: $Function$$Type<float, T>): $Function<byte, T>
"andThenByte"(float2ByteFunction0: $Float2ByteFunction$$Type): $Byte2ByteFunction
"andThenChar"(float2CharFunction0: $Float2CharFunction$$Type): $Byte2CharFunction
"andThenDouble"(float2DoubleFunction0: $Float2DoubleFunction$$Type): $Byte2DoubleFunction
"andThenFloat"(float2FloatFunction0: $Float2FloatFunction$$Type): $Byte2FloatFunction
"andThenInt"(float2IntFunction0: $Float2IntFunction$$Type): $Byte2IntFunction
"andThenLong"(float2LongFunction0: $Float2LongFunction$$Type): $Byte2LongFunction
"andThenObject"<T>(float2ObjectFunction0: $Float2ObjectFunction$$Type<T>): $Byte2ObjectFunction<T>
"andThenReference"<T>(float2ReferenceFunction0: $Float2ReferenceFunction$$Type<T>): $Byte2ReferenceFunction<T>
"andThenShort"(float2ShortFunction0: $Float2ShortFunction$$Type): $Byte2ShortFunction
"apply"(byte0: byte): float
/** @deprecated */
"applyAsDouble"(int0: integer): double
"clear"(): void
/** @deprecated */
"compose"<T>(function0: $Function$$Type<T, byte>): $Function<T, float>
"composeByte"(byte2ByteFunction0: $Byte2ByteFunction$$Type): $Byte2FloatFunction
"composeChar"(char2ByteFunction0: $Char2ByteFunction$$Type): $Char2FloatFunction
"composeDouble"(double2ByteFunction0: $Double2ByteFunction$$Type): $Double2FloatFunction
"composeFloat"(float2ByteFunction0: $Float2ByteFunction$$Type): $Float2FloatFunction
"composeInt"(int2ByteFunction0: $Int2ByteFunction$$Type): $Int2FloatFunction
"composeLong"(long2ByteFunction0: $Long2ByteFunction$$Type): $Long2FloatFunction
"composeObject"<T>(object2ByteFunction0: $Object2ByteFunction$$Type<T>): $Object2FloatFunction<T>
"composeReference"<T>(reference2ByteFunction0: $Reference2ByteFunction$$Type<T>): $Reference2FloatFunction<T>
"composeShort"(short2ByteFunction0: $Short2ByteFunction$$Type): $Short2FloatFunction
"containsKey"(byte0: byte): boolean
/** @deprecated */
"containsKey"(object0: any): boolean
"defaultReturnValue"(float0: float): void
"defaultReturnValue"(): float
"get"(byte0: byte): float
/** @deprecated */
"get"(object0: any): float
"getOrDefault"(byte0: byte, float1: float): float
/** @deprecated */
"getOrDefault"(object0: any, float1: float): float
/** @deprecated */
"put"(byte0: byte, float1: float): float
"put"(byte0: byte, float1: float): float
"remove"(byte0: byte): float
"size"(): integer
}

export namespace $Byte2FloatFunction {
function identity<T>(): $Function<T, T>
}
export abstract class $Byte2FloatFunction$$Static implements $Byte2FloatFunction {
static "identity"<T>(): $Function<T, T>
}
}

declare module "it.unimi.dsi.fastutil.bytes.ByteBinaryOperator" {
import { $BiFunction } from "java.util.function.BiFunction"
import { $IntBinaryOperator } from "java.util.function.IntBinaryOperator"
import { $Comparator$$Type } from "java.util.Comparator"
import { $Function$$Type } from "java.util.function.Function"
import { $BinaryOperator } from "java.util.function.BinaryOperator"

export interface $ByteBinaryOperator extends $BinaryOperator<byte>, $IntBinaryOperator {
"andThen"<V>(function0: $Function$$Type<byte, V>): $BiFunction<byte, byte, V>
/** @deprecated */
"apply"(byte0: byte, byte1: byte): byte
"apply"(byte0: byte, byte1: byte): byte
/** @deprecated */
"applyAsInt"(int0: integer, int1: integer): integer
}

export namespace $ByteBinaryOperator {
function maxBy<T>(comparator0: $Comparator$$Type<T>): $BinaryOperator<T>
function minBy<T>(comparator0: $Comparator$$Type<T>): $BinaryOperator<T>
}
export abstract class $ByteBinaryOperator$$Static implements $ByteBinaryOperator {
static "maxBy"<T>(comparator0: $Comparator$$Type<T>): $BinaryOperator<T>
static "minBy"<T>(comparator0: $Comparator$$Type<T>): $BinaryOperator<T>
}
}

declare module "it.unimi.dsi.fastutil.bytes.Byte2ObjectFunction" {
import { $Byte2FloatFunction } from "it.unimi.dsi.fastutil.bytes.Byte2FloatFunction"
import { $Byte2LongFunction } from "it.unimi.dsi.fastutil.bytes.Byte2LongFunction"
import { $Int2ByteFunction$$Type } from "it.unimi.dsi.fastutil.ints.Int2ByteFunction"
import { $Float2ByteFunction$$Type } from "it.unimi.dsi.fastutil.floats.Float2ByteFunction"
import { $Double2ObjectFunction } from "it.unimi.dsi.fastutil.doubles.Double2ObjectFunction"
import { $Object2ObjectFunction, $Object2ObjectFunction$$Type } from "it.unimi.dsi.fastutil.objects.Object2ObjectFunction"
import { $Function, $Function$$Type } from "java.util.function.Function"
import { $Object2LongFunction$$Type } from "it.unimi.dsi.fastutil.objects.Object2LongFunction"
import { $Double2ByteFunction$$Type } from "it.unimi.dsi.fastutil.doubles.Double2ByteFunction"
import { $Object2DoubleFunction$$Type } from "it.unimi.dsi.fastutil.objects.Object2DoubleFunction"
import { $Reference2ByteFunction$$Type } from "it.unimi.dsi.fastutil.objects.Reference2ByteFunction"
import { $Byte2DoubleFunction } from "it.unimi.dsi.fastutil.bytes.Byte2DoubleFunction"
import { $Object2FloatFunction$$Type } from "it.unimi.dsi.fastutil.objects.Object2FloatFunction"
import { $Short2ByteFunction$$Type } from "it.unimi.dsi.fastutil.shorts.Short2ByteFunction"
import { $Object2IntFunction$$Type } from "it.unimi.dsi.fastutil.objects.Object2IntFunction"
import { $IntFunction } from "java.util.function.IntFunction"
import { $Reference2ObjectFunction } from "it.unimi.dsi.fastutil.objects.Reference2ObjectFunction"
import { $Short2ObjectFunction } from "it.unimi.dsi.fastutil.shorts.Short2ObjectFunction"
import { $Function as $Function$0 } from "it.unimi.dsi.fastutil.Function"
import { $Object2ByteFunction$$Type } from "it.unimi.dsi.fastutil.objects.Object2ByteFunction"
import { $Byte2ReferenceFunction } from "it.unimi.dsi.fastutil.bytes.Byte2ReferenceFunction"
import { $Char2ByteFunction$$Type } from "it.unimi.dsi.fastutil.chars.Char2ByteFunction"
import { $Byte2ShortFunction } from "it.unimi.dsi.fastutil.bytes.Byte2ShortFunction"
import { $Int2ObjectFunction } from "it.unimi.dsi.fastutil.ints.Int2ObjectFunction"
import { $Long2ObjectFunction } from "it.unimi.dsi.fastutil.longs.Long2ObjectFunction"
import { $Byte2CharFunction } from "it.unimi.dsi.fastutil.bytes.Byte2CharFunction"
import { $Object2ReferenceFunction$$Type } from "it.unimi.dsi.fastutil.objects.Object2ReferenceFunction"
import { $Float2ObjectFunction } from "it.unimi.dsi.fastutil.floats.Float2ObjectFunction"
import { $Long2ByteFunction$$Type } from "it.unimi.dsi.fastutil.longs.Long2ByteFunction"
import { $Char2ObjectFunction } from "it.unimi.dsi.fastutil.chars.Char2ObjectFunction"
import { $Object2ShortFunction$$Type } from "it.unimi.dsi.fastutil.objects.Object2ShortFunction"
import { $Byte2ByteFunction, $Byte2ByteFunction$$Type } from "it.unimi.dsi.fastutil.bytes.Byte2ByteFunction"
import { $Object2CharFunction$$Type } from "it.unimi.dsi.fastutil.objects.Object2CharFunction"
import { $Byte2IntFunction } from "it.unimi.dsi.fastutil.bytes.Byte2IntFunction"

export interface $Byte2ObjectFunction<V = any> extends $Function$0<byte, V>, $IntFunction<V> {
"andThen"<V>(function0: $Function$$Type<V, V>): $Function<byte, V>
"andThenByte"(object2ByteFunction0: $Object2ByteFunction$$Type<V>): $Byte2ByteFunction
"andThenChar"(object2CharFunction0: $Object2CharFunction$$Type<V>): $Byte2CharFunction
"andThenDouble"(object2DoubleFunction0: $Object2DoubleFunction$$Type<V>): $Byte2DoubleFunction
"andThenFloat"(object2FloatFunction0: $Object2FloatFunction$$Type<V>): $Byte2FloatFunction
"andThenInt"(object2IntFunction0: $Object2IntFunction$$Type<V>): $Byte2IntFunction
"andThenLong"(object2LongFunction0: $Object2LongFunction$$Type<V>): $Byte2LongFunction
"andThenObject"<T>(object2ObjectFunction0: $Object2ObjectFunction$$Type<V, T>): $Byte2ObjectFunction<T>
"andThenReference"<T>(object2ReferenceFunction0: $Object2ReferenceFunction$$Type<V, T>): $Byte2ReferenceFunction<T>
"andThenShort"(object2ShortFunction0: $Object2ShortFunction$$Type<V>): $Byte2ShortFunction
/** @deprecated */
"apply"(int0: integer): V
"apply"(byte0: byte): V
"clear"(): void
/** @deprecated */
"compose"<T>(function0: $Function$$Type<T, byte>): $Function<T, V>
"composeByte"(byte2ByteFunction0: $Byte2ByteFunction$$Type): $Byte2ObjectFunction<V>
"composeChar"(char2ByteFunction0: $Char2ByteFunction$$Type): $Char2ObjectFunction<V>
"composeDouble"(double2ByteFunction0: $Double2ByteFunction$$Type): $Double2ObjectFunction<V>
"composeFloat"(float2ByteFunction0: $Float2ByteFunction$$Type): $Float2ObjectFunction<V>
"composeInt"(int2ByteFunction0: $Int2ByteFunction$$Type): $Int2ObjectFunction<V>
"composeLong"(long2ByteFunction0: $Long2ByteFunction$$Type): $Long2ObjectFunction<V>
"composeObject"<T>(object2ByteFunction0: $Object2ByteFunction$$Type<T>): $Object2ObjectFunction<T, V>
"composeReference"<T>(reference2ByteFunction0: $Reference2ByteFunction$$Type<T>): $Reference2ObjectFunction<T, V>
"composeShort"(short2ByteFunction0: $Short2ByteFunction$$Type): $Short2ObjectFunction<V>
"containsKey"(byte0: byte): boolean
/** @deprecated */
"containsKey"(object0: any): boolean
"defaultReturnValue"(): V
"defaultReturnValue"(v0: V): void
"get"(byte0: byte): V
/** @deprecated */
"get"(object0: any): V
/** @deprecated */
"getOrDefault"(object0: any, v1: V): V
"getOrDefault"(byte0: byte, v1: V): V
"put"(byte0: byte, v1: V): V
/** @deprecated */
"put"(byte0: byte, v1: V): V
/** @deprecated */
"remove"(object0: any): V
"remove"(byte0: byte): V
"size"(): integer
}

export namespace $Byte2ObjectFunction {
function identity<T>(): $Function<T, T>
}
export abstract class $Byte2ObjectFunction$$Static<V = any> implements $Byte2ObjectFunction<V> {
static "identity"<T>(): $Function<T, T>
}
}

declare module "it.unimi.dsi.fastutil.bytes.Byte2BooleanFunction" {
import { $Byte2FloatFunction } from "it.unimi.dsi.fastutil.bytes.Byte2FloatFunction"
import { $Byte2LongFunction } from "it.unimi.dsi.fastutil.bytes.Byte2LongFunction"
import { $Int2ByteFunction$$Type } from "it.unimi.dsi.fastutil.ints.Int2ByteFunction"
import { $Double2BooleanFunction } from "it.unimi.dsi.fastutil.doubles.Double2BooleanFunction"
import { $Float2ByteFunction$$Type } from "it.unimi.dsi.fastutil.floats.Float2ByteFunction"
import { $Boolean2LongFunction$$Type } from "it.unimi.dsi.fastutil.booleans.Boolean2LongFunction"
import { $Boolean2IntFunction$$Type } from "it.unimi.dsi.fastutil.booleans.Boolean2IntFunction"
import { $IntPredicate, $IntPredicate$$Type } from "java.util.function.IntPredicate"
import { $Function, $Function$$Type } from "java.util.function.Function"
import { $Double2ByteFunction$$Type } from "it.unimi.dsi.fastutil.doubles.Double2ByteFunction"
import { $Boolean2ObjectFunction$$Type } from "it.unimi.dsi.fastutil.booleans.Boolean2ObjectFunction"
import { $Reference2ByteFunction$$Type } from "it.unimi.dsi.fastutil.objects.Reference2ByteFunction"
import { $Short2BooleanFunction } from "it.unimi.dsi.fastutil.shorts.Short2BooleanFunction"
import { $Byte2DoubleFunction } from "it.unimi.dsi.fastutil.bytes.Byte2DoubleFunction"
import { $Boolean2CharFunction$$Type } from "it.unimi.dsi.fastutil.booleans.Boolean2CharFunction"
import { $Float2BooleanFunction } from "it.unimi.dsi.fastutil.floats.Float2BooleanFunction"
import { $Short2ByteFunction$$Type } from "it.unimi.dsi.fastutil.shorts.Short2ByteFunction"
import { $Int2BooleanFunction } from "it.unimi.dsi.fastutil.ints.Int2BooleanFunction"
import { $Boolean2DoubleFunction$$Type } from "it.unimi.dsi.fastutil.booleans.Boolean2DoubleFunction"
import { $Boolean2ShortFunction$$Type } from "it.unimi.dsi.fastutil.booleans.Boolean2ShortFunction"
import { $Byte2ObjectFunction } from "it.unimi.dsi.fastutil.bytes.Byte2ObjectFunction"
import { $Function as $Function$0 } from "it.unimi.dsi.fastutil.Function"
import { $Byte2ReferenceFunction } from "it.unimi.dsi.fastutil.bytes.Byte2ReferenceFunction"
import { $Char2ByteFunction$$Type } from "it.unimi.dsi.fastutil.chars.Char2ByteFunction"
import { $Object2ByteFunction$$Type } from "it.unimi.dsi.fastutil.objects.Object2ByteFunction"
import { $Byte2ShortFunction } from "it.unimi.dsi.fastutil.bytes.Byte2ShortFunction"
import { $Long2BooleanFunction } from "it.unimi.dsi.fastutil.longs.Long2BooleanFunction"
import { $Byte2CharFunction } from "it.unimi.dsi.fastutil.bytes.Byte2CharFunction"
import { $Boolean2ReferenceFunction$$Type } from "it.unimi.dsi.fastutil.booleans.Boolean2ReferenceFunction"
import { $Char2BooleanFunction } from "it.unimi.dsi.fastutil.chars.Char2BooleanFunction"
import { $Long2ByteFunction$$Type } from "it.unimi.dsi.fastutil.longs.Long2ByteFunction"
import { $Reference2BooleanFunction } from "it.unimi.dsi.fastutil.objects.Reference2BooleanFunction"
import { $Boolean2ByteFunction$$Type } from "it.unimi.dsi.fastutil.booleans.Boolean2ByteFunction"
import { $Object2BooleanFunction } from "it.unimi.dsi.fastutil.objects.Object2BooleanFunction"
import { $Boolean2FloatFunction$$Type } from "it.unimi.dsi.fastutil.booleans.Boolean2FloatFunction"
import { $Byte2ByteFunction, $Byte2ByteFunction$$Type } from "it.unimi.dsi.fastutil.bytes.Byte2ByteFunction"
import { $Byte2IntFunction } from "it.unimi.dsi.fastutil.bytes.Byte2IntFunction"

export interface $Byte2BooleanFunction extends $Function$0<byte, boolean>, $IntPredicate {
"and"(intPredicate0: $IntPredicate$$Type): $IntPredicate
/** @deprecated */
"andThen"<T>(function0: $Function$$Type<boolean, T>): $Function<byte, T>
"andThenByte"(boolean2ByteFunction0: $Boolean2ByteFunction$$Type): $Byte2ByteFunction
"andThenChar"(boolean2CharFunction0: $Boolean2CharFunction$$Type): $Byte2CharFunction
"andThenDouble"(boolean2DoubleFunction0: $Boolean2DoubleFunction$$Type): $Byte2DoubleFunction
"andThenFloat"(boolean2FloatFunction0: $Boolean2FloatFunction$$Type): $Byte2FloatFunction
"andThenInt"(boolean2IntFunction0: $Boolean2IntFunction$$Type): $Byte2IntFunction
"andThenLong"(boolean2LongFunction0: $Boolean2LongFunction$$Type): $Byte2LongFunction
"andThenObject"<T>(boolean2ObjectFunction0: $Boolean2ObjectFunction$$Type<T>): $Byte2ObjectFunction<T>
"andThenReference"<T>(boolean2ReferenceFunction0: $Boolean2ReferenceFunction$$Type<T>): $Byte2ReferenceFunction<T>
"andThenShort"(boolean2ShortFunction0: $Boolean2ShortFunction$$Type): $Byte2ShortFunction
"apply"(byte0: byte): boolean
"clear"(): void
/** @deprecated */
"compose"<T>(function0: $Function$$Type<T, byte>): $Function<T, boolean>
"composeByte"(byte2ByteFunction0: $Byte2ByteFunction$$Type): $Byte2BooleanFunction
"composeChar"(char2ByteFunction0: $Char2ByteFunction$$Type): $Char2BooleanFunction
"composeDouble"(double2ByteFunction0: $Double2ByteFunction$$Type): $Double2BooleanFunction
"composeFloat"(float2ByteFunction0: $Float2ByteFunction$$Type): $Float2BooleanFunction
"composeInt"(int2ByteFunction0: $Int2ByteFunction$$Type): $Int2BooleanFunction
"composeLong"(long2ByteFunction0: $Long2ByteFunction$$Type): $Long2BooleanFunction
"composeObject"<T>(object2ByteFunction0: $Object2ByteFunction$$Type<T>): $Object2BooleanFunction<T>
"composeReference"<T>(reference2ByteFunction0: $Reference2ByteFunction$$Type<T>): $Reference2BooleanFunction<T>
"composeShort"(short2ByteFunction0: $Short2ByteFunction$$Type): $Short2BooleanFunction
/** @deprecated */
"containsKey"(object0: any): boolean
"containsKey"(byte0: byte): boolean
"defaultReturnValue"(boolean0: boolean): void
"defaultReturnValue"(): boolean
/** @deprecated */
"get"(object0: any): boolean
"get"(byte0: byte): boolean
/** @deprecated */
"getOrDefault"(object0: any, boolean1: boolean): boolean
"getOrDefault"(byte0: byte, boolean1: boolean): boolean
"negate"(): $IntPredicate
"or"(intPredicate0: $IntPredicate$$Type): $IntPredicate
/** @deprecated */
"put"(byte0: byte, boolean1: boolean): boolean
"put"(byte0: byte, boolean1: boolean): boolean
"remove"(byte0: byte): boolean
"size"(): integer
/** @deprecated */
"test"(int0: integer): boolean
}

export namespace $Byte2BooleanFunction {
function identity<T>(): $Function<T, T>
}
export abstract class $Byte2BooleanFunction$$Static implements $Byte2BooleanFunction {
static "identity"<T>(): $Function<T, T>
}
}

declare module "it.unimi.dsi.fastutil.bytes.Byte2ShortFunction" {
import { $Double2ShortFunction } from "it.unimi.dsi.fastutil.doubles.Double2ShortFunction"
import { $Long2ShortFunction } from "it.unimi.dsi.fastutil.longs.Long2ShortFunction"
import { $Int2ShortFunction } from "it.unimi.dsi.fastutil.ints.Int2ShortFunction"
import { $IntUnaryOperator, $IntUnaryOperator$$Type } from "java.util.function.IntUnaryOperator"
import { $Byte2FloatFunction } from "it.unimi.dsi.fastutil.bytes.Byte2FloatFunction"
import { $Byte2LongFunction } from "it.unimi.dsi.fastutil.bytes.Byte2LongFunction"
import { $Int2ByteFunction$$Type } from "it.unimi.dsi.fastutil.ints.Int2ByteFunction"
import { $Short2ReferenceFunction$$Type } from "it.unimi.dsi.fastutil.shorts.Short2ReferenceFunction"
import { $Float2ByteFunction$$Type } from "it.unimi.dsi.fastutil.floats.Float2ByteFunction"
import { $Function, $Function$$Type } from "java.util.function.Function"
import { $Short2ShortFunction, $Short2ShortFunction$$Type } from "it.unimi.dsi.fastutil.shorts.Short2ShortFunction"
import { $Double2ByteFunction$$Type } from "it.unimi.dsi.fastutil.doubles.Double2ByteFunction"
import { $Short2DoubleFunction$$Type } from "it.unimi.dsi.fastutil.shorts.Short2DoubleFunction"
import { $Reference2ByteFunction$$Type } from "it.unimi.dsi.fastutil.objects.Reference2ByteFunction"
import { $Byte2DoubleFunction } from "it.unimi.dsi.fastutil.bytes.Byte2DoubleFunction"
import { $Short2ByteFunction$$Type } from "it.unimi.dsi.fastutil.shorts.Short2ByteFunction"
import { $Short2LongFunction$$Type } from "it.unimi.dsi.fastutil.shorts.Short2LongFunction"
import { $Short2IntFunction$$Type } from "it.unimi.dsi.fastutil.shorts.Short2IntFunction"
import { $Byte2ObjectFunction } from "it.unimi.dsi.fastutil.bytes.Byte2ObjectFunction"
import { $Short2ObjectFunction$$Type } from "it.unimi.dsi.fastutil.shorts.Short2ObjectFunction"
import { $Function as $Function$0 } from "it.unimi.dsi.fastutil.Function"
import { $Byte2ReferenceFunction } from "it.unimi.dsi.fastutil.bytes.Byte2ReferenceFunction"
import { $Char2ByteFunction$$Type } from "it.unimi.dsi.fastutil.chars.Char2ByteFunction"
import { $Object2ByteFunction$$Type } from "it.unimi.dsi.fastutil.objects.Object2ByteFunction"
import { $Reference2ShortFunction } from "it.unimi.dsi.fastutil.objects.Reference2ShortFunction"
import { $Byte2CharFunction } from "it.unimi.dsi.fastutil.bytes.Byte2CharFunction"
import { $Char2ShortFunction } from "it.unimi.dsi.fastutil.chars.Char2ShortFunction"
import { $Short2CharFunction$$Type } from "it.unimi.dsi.fastutil.shorts.Short2CharFunction"
import { $Float2ShortFunction } from "it.unimi.dsi.fastutil.floats.Float2ShortFunction"
import { $Short2FloatFunction$$Type } from "it.unimi.dsi.fastutil.shorts.Short2FloatFunction"
import { $Long2ByteFunction$$Type } from "it.unimi.dsi.fastutil.longs.Long2ByteFunction"
import { $Object2ShortFunction } from "it.unimi.dsi.fastutil.objects.Object2ShortFunction"
import { $Byte2ByteFunction, $Byte2ByteFunction$$Type } from "it.unimi.dsi.fastutil.bytes.Byte2ByteFunction"
import { $Byte2IntFunction } from "it.unimi.dsi.fastutil.bytes.Byte2IntFunction"

export interface $Byte2ShortFunction extends $Function$0<byte, short>, $IntUnaryOperator {
/** @deprecated */
"andThen"<T>(function0: $Function$$Type<short, T>): $Function<byte, T>
"andThen"(intUnaryOperator0: $IntUnaryOperator$$Type): $IntUnaryOperator
"andThenByte"(short2ByteFunction0: $Short2ByteFunction$$Type): $Byte2ByteFunction
"andThenChar"(short2CharFunction0: $Short2CharFunction$$Type): $Byte2CharFunction
"andThenDouble"(short2DoubleFunction0: $Short2DoubleFunction$$Type): $Byte2DoubleFunction
"andThenFloat"(short2FloatFunction0: $Short2FloatFunction$$Type): $Byte2FloatFunction
"andThenInt"(short2IntFunction0: $Short2IntFunction$$Type): $Byte2IntFunction
"andThenLong"(short2LongFunction0: $Short2LongFunction$$Type): $Byte2LongFunction
"andThenObject"<T>(short2ObjectFunction0: $Short2ObjectFunction$$Type<T>): $Byte2ObjectFunction<T>
"andThenReference"<T>(short2ReferenceFunction0: $Short2ReferenceFunction$$Type<T>): $Byte2ReferenceFunction<T>
"andThenShort"(short2ShortFunction0: $Short2ShortFunction$$Type): $Byte2ShortFunction
"apply"(byte0: byte): short
/** @deprecated */
"applyAsInt"(int0: integer): integer
"clear"(): void
/** @deprecated */
"compose"<T>(function0: $Function$$Type<T, byte>): $Function<T, short>
"compose"(intUnaryOperator0: $IntUnaryOperator$$Type): $IntUnaryOperator
"composeByte"(byte2ByteFunction0: $Byte2ByteFunction$$Type): $Byte2ShortFunction
"composeChar"(char2ByteFunction0: $Char2ByteFunction$$Type): $Char2ShortFunction
"composeDouble"(double2ByteFunction0: $Double2ByteFunction$$Type): $Double2ShortFunction
"composeFloat"(float2ByteFunction0: $Float2ByteFunction$$Type): $Float2ShortFunction
"composeInt"(int2ByteFunction0: $Int2ByteFunction$$Type): $Int2ShortFunction
"composeLong"(long2ByteFunction0: $Long2ByteFunction$$Type): $Long2ShortFunction
"composeObject"<T>(object2ByteFunction0: $Object2ByteFunction$$Type<T>): $Object2ShortFunction<T>
"composeReference"<T>(reference2ByteFunction0: $Reference2ByteFunction$$Type<T>): $Reference2ShortFunction<T>
"composeShort"(short2ByteFunction0: $Short2ByteFunction$$Type): $Short2ShortFunction
"containsKey"(byte0: byte): boolean
/** @deprecated */
"containsKey"(object0: any): boolean
"defaultReturnValue"(short0: short): void
"defaultReturnValue"(): short
"get"(byte0: byte): short
/** @deprecated */
"get"(object0: any): short
"getOrDefault"(byte0: byte, short1: short): short
/** @deprecated */
"getOrDefault"(object0: any, short1: short): short
/** @deprecated */
"put"(byte0: byte, short1: short): short
"put"(byte0: byte, short1: short): short
"remove"(byte0: byte): short
"size"(): integer
}

export namespace $Byte2ShortFunction {
function identity(): $IntUnaryOperator
}
export abstract class $Byte2ShortFunction$$Static implements $Byte2ShortFunction {
static "identity"(): $IntUnaryOperator
}
}

declare module "it.unimi.dsi.fastutil.bytes.Byte2DoubleFunction" {
import { $Double2ShortFunction$$Type } from "it.unimi.dsi.fastutil.doubles.Double2ShortFunction"
import { $Double2ReferenceFunction$$Type } from "it.unimi.dsi.fastutil.doubles.Double2ReferenceFunction"
import { $Byte2FloatFunction } from "it.unimi.dsi.fastutil.bytes.Byte2FloatFunction"
import { $Byte2LongFunction } from "it.unimi.dsi.fastutil.bytes.Byte2LongFunction"
import { $Int2ByteFunction$$Type } from "it.unimi.dsi.fastutil.ints.Int2ByteFunction"
import { $Float2ByteFunction$$Type } from "it.unimi.dsi.fastutil.floats.Float2ByteFunction"
import { $Double2ObjectFunction$$Type } from "it.unimi.dsi.fastutil.doubles.Double2ObjectFunction"
import { $Function, $Function$$Type } from "java.util.function.Function"
import { $Int2DoubleFunction } from "it.unimi.dsi.fastutil.ints.Int2DoubleFunction"
import { $Double2ByteFunction$$Type } from "it.unimi.dsi.fastutil.doubles.Double2ByteFunction"
import { $Object2DoubleFunction } from "it.unimi.dsi.fastutil.objects.Object2DoubleFunction"
import { $Short2DoubleFunction } from "it.unimi.dsi.fastutil.shorts.Short2DoubleFunction"
import { $Reference2ByteFunction$$Type } from "it.unimi.dsi.fastutil.objects.Reference2ByteFunction"
import { $Short2ByteFunction$$Type } from "it.unimi.dsi.fastutil.shorts.Short2ByteFunction"
import { $Double2DoubleFunction, $Double2DoubleFunction$$Type } from "it.unimi.dsi.fastutil.doubles.Double2DoubleFunction"
import { $Double2FloatFunction$$Type } from "it.unimi.dsi.fastutil.doubles.Double2FloatFunction"
import { $Byte2ObjectFunction } from "it.unimi.dsi.fastutil.bytes.Byte2ObjectFunction"
import { $IntToDoubleFunction } from "java.util.function.IntToDoubleFunction"
import { $Function as $Function$0 } from "it.unimi.dsi.fastutil.Function"
import { $Byte2ReferenceFunction } from "it.unimi.dsi.fastutil.bytes.Byte2ReferenceFunction"
import { $Char2ByteFunction$$Type } from "it.unimi.dsi.fastutil.chars.Char2ByteFunction"
import { $Object2ByteFunction$$Type } from "it.unimi.dsi.fastutil.objects.Object2ByteFunction"
import { $Byte2ShortFunction } from "it.unimi.dsi.fastutil.bytes.Byte2ShortFunction"
import { $Byte2CharFunction } from "it.unimi.dsi.fastutil.bytes.Byte2CharFunction"
import { $Long2DoubleFunction } from "it.unimi.dsi.fastutil.longs.Long2DoubleFunction"
import { $Double2LongFunction$$Type } from "it.unimi.dsi.fastutil.doubles.Double2LongFunction"
import { $Long2ByteFunction$$Type } from "it.unimi.dsi.fastutil.longs.Long2ByteFunction"
import { $Double2CharFunction$$Type } from "it.unimi.dsi.fastutil.doubles.Double2CharFunction"
import { $Reference2DoubleFunction } from "it.unimi.dsi.fastutil.objects.Reference2DoubleFunction"
import { $Char2DoubleFunction } from "it.unimi.dsi.fastutil.chars.Char2DoubleFunction"
import { $Float2DoubleFunction } from "it.unimi.dsi.fastutil.floats.Float2DoubleFunction"
import { $Double2IntFunction$$Type } from "it.unimi.dsi.fastutil.doubles.Double2IntFunction"
import { $Byte2ByteFunction, $Byte2ByteFunction$$Type } from "it.unimi.dsi.fastutil.bytes.Byte2ByteFunction"
import { $Byte2IntFunction } from "it.unimi.dsi.fastutil.bytes.Byte2IntFunction"

export interface $Byte2DoubleFunction extends $Function$0<byte, double>, $IntToDoubleFunction {
/** @deprecated */
"andThen"<T>(function0: $Function$$Type<double, T>): $Function<byte, T>
"andThenByte"(double2ByteFunction0: $Double2ByteFunction$$Type): $Byte2ByteFunction
"andThenChar"(double2CharFunction0: $Double2CharFunction$$Type): $Byte2CharFunction
"andThenDouble"(double2DoubleFunction0: $Double2DoubleFunction$$Type): $Byte2DoubleFunction
"andThenFloat"(double2FloatFunction0: $Double2FloatFunction$$Type): $Byte2FloatFunction
"andThenInt"(double2IntFunction0: $Double2IntFunction$$Type): $Byte2IntFunction
"andThenLong"(double2LongFunction0: $Double2LongFunction$$Type): $Byte2LongFunction
"andThenObject"<T>(double2ObjectFunction0: $Double2ObjectFunction$$Type<T>): $Byte2ObjectFunction<T>
"andThenReference"<T>(double2ReferenceFunction0: $Double2ReferenceFunction$$Type<T>): $Byte2ReferenceFunction<T>
"andThenShort"(double2ShortFunction0: $Double2ShortFunction$$Type): $Byte2ShortFunction
"apply"(byte0: byte): double
/** @deprecated */
"applyAsDouble"(int0: integer): double
"clear"(): void
/** @deprecated */
"compose"<T>(function0: $Function$$Type<T, byte>): $Function<T, double>
"composeByte"(byte2ByteFunction0: $Byte2ByteFunction$$Type): $Byte2DoubleFunction
"composeChar"(char2ByteFunction0: $Char2ByteFunction$$Type): $Char2DoubleFunction
"composeDouble"(double2ByteFunction0: $Double2ByteFunction$$Type): $Double2DoubleFunction
"composeFloat"(float2ByteFunction0: $Float2ByteFunction$$Type): $Float2DoubleFunction
"composeInt"(int2ByteFunction0: $Int2ByteFunction$$Type): $Int2DoubleFunction
"composeLong"(long2ByteFunction0: $Long2ByteFunction$$Type): $Long2DoubleFunction
"composeObject"<T>(object2ByteFunction0: $Object2ByteFunction$$Type<T>): $Object2DoubleFunction<T>
"composeReference"<T>(reference2ByteFunction0: $Reference2ByteFunction$$Type<T>): $Reference2DoubleFunction<T>
"composeShort"(short2ByteFunction0: $Short2ByteFunction$$Type): $Short2DoubleFunction
"containsKey"(byte0: byte): boolean
/** @deprecated */
"containsKey"(object0: any): boolean
"defaultReturnValue"(double0: double): void
"defaultReturnValue"(): double
"get"(byte0: byte): double
/** @deprecated */
"get"(object0: any): double
"getOrDefault"(byte0: byte, double1: double): double
/** @deprecated */
"getOrDefault"(object0: any, double1: double): double
/** @deprecated */
"put"(byte0: byte, double1: double): double
"put"(byte0: byte, double1: double): double
"remove"(byte0: byte): double
"size"(): integer
}

export namespace $Byte2DoubleFunction {
function identity<T>(): $Function<T, T>
}
export abstract class $Byte2DoubleFunction$$Static implements $Byte2DoubleFunction {
static "identity"<T>(): $Function<T, T>
}
}

declare module "it.unimi.dsi.fastutil.bytes.ByteIterable" {
import { $Consumer$$Type } from "java.util.function.Consumer"
import { $IntIterator } from "it.unimi.dsi.fastutil.ints.IntIterator"
import { $ByteConsumer$$Type } from "it.unimi.dsi.fastutil.bytes.ByteConsumer"
import { $IntConsumer$$Type } from "java.util.function.IntConsumer"
import { $IntSpliterator } from "it.unimi.dsi.fastutil.ints.IntSpliterator"
import { $Iterable } from "java.lang.Iterable"

export interface $ByteIterable extends $Iterable<byte> {
"forEach"(byteConsumer0: $ByteConsumer$$Type): void
/** @deprecated */
"forEach"(consumer0: $Consumer$$Type<byte>): void
"forEach"(intConsumer0: $IntConsumer$$Type): void
"intIterator"(): $IntIterator
"intSpliterator"(): $IntSpliterator
}

export namespace $ByteIterable {
const probejs$$marker: never
}
export abstract class $ByteIterable$$Static implements $ByteIterable {
}
}

declare module "it.unimi.dsi.fastutil.bytes.Byte2ByteFunction" {
import { $Byte2ObjectFunction, $Byte2ObjectFunction$$Type } from "it.unimi.dsi.fastutil.bytes.Byte2ObjectFunction"
import { $Function } from "it.unimi.dsi.fastutil.Function"
import { $IntUnaryOperator, $IntUnaryOperator$$Type } from "java.util.function.IntUnaryOperator"
import { $Byte2FloatFunction, $Byte2FloatFunction$$Type } from "it.unimi.dsi.fastutil.bytes.Byte2FloatFunction"
import { $Byte2LongFunction, $Byte2LongFunction$$Type } from "it.unimi.dsi.fastutil.bytes.Byte2LongFunction"
import { $Byte2ReferenceFunction, $Byte2ReferenceFunction$$Type } from "it.unimi.dsi.fastutil.bytes.Byte2ReferenceFunction"
import { $Char2ByteFunction, $Char2ByteFunction$$Type } from "it.unimi.dsi.fastutil.chars.Char2ByteFunction"
import { $Int2ByteFunction, $Int2ByteFunction$$Type } from "it.unimi.dsi.fastutil.ints.Int2ByteFunction"
import { $Object2ByteFunction, $Object2ByteFunction$$Type } from "it.unimi.dsi.fastutil.objects.Object2ByteFunction"
import { $Byte2ShortFunction, $Byte2ShortFunction$$Type } from "it.unimi.dsi.fastutil.bytes.Byte2ShortFunction"
import { $Float2ByteFunction, $Float2ByteFunction$$Type } from "it.unimi.dsi.fastutil.floats.Float2ByteFunction"
import { $Byte2CharFunction, $Byte2CharFunction$$Type } from "it.unimi.dsi.fastutil.bytes.Byte2CharFunction"
import { $Function as $Function$0, $Function$$Type as $Function$0$$Type } from "java.util.function.Function"
import { $Double2ByteFunction, $Double2ByteFunction$$Type } from "it.unimi.dsi.fastutil.doubles.Double2ByteFunction"
import { $Reference2ByteFunction, $Reference2ByteFunction$$Type } from "it.unimi.dsi.fastutil.objects.Reference2ByteFunction"
import { $Byte2DoubleFunction, $Byte2DoubleFunction$$Type } from "it.unimi.dsi.fastutil.bytes.Byte2DoubleFunction"
import { $Long2ByteFunction, $Long2ByteFunction$$Type } from "it.unimi.dsi.fastutil.longs.Long2ByteFunction"
import { $Short2ByteFunction, $Short2ByteFunction$$Type } from "it.unimi.dsi.fastutil.shorts.Short2ByteFunction"
import { $Byte2IntFunction, $Byte2IntFunction$$Type } from "it.unimi.dsi.fastutil.bytes.Byte2IntFunction"

export interface $Byte2ByteFunction extends $Function<byte, byte>, $IntUnaryOperator {
/** @deprecated */
"andThen"<T>(function0: $Function$0$$Type<byte, T>): $Function$0<byte, T>
"andThen"(intUnaryOperator0: $IntUnaryOperator$$Type): $IntUnaryOperator
"andThenByte"(byte2ByteFunction0: $Byte2ByteFunction$$Type): $Byte2ByteFunction
"andThenChar"(byte2CharFunction0: $Byte2CharFunction$$Type): $Byte2CharFunction
"andThenDouble"(byte2DoubleFunction0: $Byte2DoubleFunction$$Type): $Byte2DoubleFunction
"andThenFloat"(byte2FloatFunction0: $Byte2FloatFunction$$Type): $Byte2FloatFunction
"andThenInt"(byte2IntFunction0: $Byte2IntFunction$$Type): $Byte2IntFunction
"andThenLong"(byte2LongFunction0: $Byte2LongFunction$$Type): $Byte2LongFunction
"andThenObject"<T>(byte2ObjectFunction0: $Byte2ObjectFunction$$Type<T>): $Byte2ObjectFunction<T>
"andThenReference"<T>(byte2ReferenceFunction0: $Byte2ReferenceFunction$$Type<T>): $Byte2ReferenceFunction<T>
"andThenShort"(byte2ShortFunction0: $Byte2ShortFunction$$Type): $Byte2ShortFunction
"apply"(byte0: byte): byte
/** @deprecated */
"applyAsInt"(int0: integer): integer
"clear"(): void
/** @deprecated */
"compose"<T>(function0: $Function$0$$Type<T, byte>): $Function$0<T, byte>
"compose"(intUnaryOperator0: $IntUnaryOperator$$Type): $IntUnaryOperator
"composeByte"(byte2ByteFunction0: $Byte2ByteFunction$$Type): $Byte2ByteFunction
"composeChar"(char2ByteFunction0: $Char2ByteFunction$$Type): $Char2ByteFunction
"composeDouble"(double2ByteFunction0: $Double2ByteFunction$$Type): $Double2ByteFunction
"composeFloat"(float2ByteFunction0: $Float2ByteFunction$$Type): $Float2ByteFunction
"composeInt"(int2ByteFunction0: $Int2ByteFunction$$Type): $Int2ByteFunction
"composeLong"(long2ByteFunction0: $Long2ByteFunction$$Type): $Long2ByteFunction
"composeObject"<T>(object2ByteFunction0: $Object2ByteFunction$$Type<T>): $Object2ByteFunction<T>
"composeReference"<T>(reference2ByteFunction0: $Reference2ByteFunction$$Type<T>): $Reference2ByteFunction<T>
"composeShort"(short2ByteFunction0: $Short2ByteFunction$$Type): $Short2ByteFunction
"containsKey"(byte0: byte): boolean
/** @deprecated */
"containsKey"(object0: any): boolean
"defaultReturnValue"(): byte
"defaultReturnValue"(byte0: byte): void
"get"(byte0: byte): byte
/** @deprecated */
"get"(object0: any): byte
"getOrDefault"(byte0: byte, byte1: byte): byte
/** @deprecated */
"getOrDefault"(object0: any, byte1: byte): byte
/** @deprecated */
"put"(byte0: byte, byte1: byte): byte
"put"(byte0: byte, byte1: byte): byte
/** @deprecated */
"remove"(object0: any): byte
"remove"(byte0: byte): byte
"size"(): integer
}

export namespace $Byte2ByteFunction {
function identity(): $Byte2ByteFunction
}
export abstract class $Byte2ByteFunction$$Static implements $Byte2ByteFunction {
static "identity"(): $Byte2ByteFunction
}
}

declare module "it.unimi.dsi.fastutil.bytes.BytePredicate" {
import { $Predicate, $Predicate$$Type } from "java.util.function.Predicate"
import { $IntPredicate } from "java.util.function.IntPredicate"

export interface $BytePredicate extends $Predicate<byte>, $IntPredicate {
/** @deprecated */
"and"(predicate0: $Predicate$$Type<byte>): $Predicate<byte>
"and"(bytePredicate0: $BytePredicate$$Type): $BytePredicate
"negate"(): $BytePredicate
/** @deprecated */
"or"(predicate0: $Predicate$$Type<byte>): $Predicate<byte>
"or"(bytePredicate0: $BytePredicate$$Type): $BytePredicate
"test"(byte0: byte): boolean
/** @deprecated */
"test"(int0: integer): boolean
/** @deprecated */
"test"(byte0: byte): boolean
}

export namespace $BytePredicate {
function isEqual<T>(object0: any): $Predicate<T>
function not<T>(predicate0: $Predicate$$Type<T>): $Predicate<T>
}
export abstract class $BytePredicate$$Static implements $BytePredicate {
static "isEqual"<T>(object0: any): $Predicate<T>
static "not"<T>(predicate0: $Predicate$$Type<T>): $Predicate<T>
}
}

